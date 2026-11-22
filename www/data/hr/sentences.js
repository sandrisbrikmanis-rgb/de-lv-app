const SENTENCE_ENTRIES = [
  {
    "de": "Hüte dich davor!",
    "lv": "Čuvaj se toga!",
    "level": "Sätze"
  },
  {
    "de": "Wenn nichts dazwischenkommt.",
    "lv": "Ako ništa ne iskrsne. • Ako sve bude po planu.",
    "level": "Sätze"
  },
  {
    "de": "Das kann ich mir denken!",
    "lv": "Mogu to zamisliti!",
    "level": "Sätze"
  },
  {
    "de": "Ist er denn krank?",
    "lv": "Pa zar je on bolestan?",
    "level": "Sätze"
  },
  {
    "de": "Was denn?",
    "lv": "Što je?",
    "level": "Sätze"
  },
  {
    "de": "Desto mehr.",
    "lv": "Utoliko više.",
    "level": "Sätze"
  },
  {
    "de": "Je mehr, desto besser.",
    "lv": "Što više, to bolje.",
    "level": "Sätze"
  },
  {
    "de": "Alles deutet auf Regen.",
    "lv": "Sve upućuje na kišu.",
    "level": "Sätze"
  },
  {
    "de": "Damit ist mir wenig gedient.",
    "lv": "To mi malo koristi.",
    "level": "Sätze"
  },
  {
    "de": "Er ist dienstlich verhindert.",
    "lv": "Spriječen je zbog službenih obveza.",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie doch!",
    "lv": "Pa govorite!",
    "level": "Sätze"
  },
  {
    "de": "Es donnert.",
    "lv": "Grmi.",
    "level": "Sätze"
  },
  {
    "de": "Doppelt so groß.",
    "lv": "Dvostruko veći.",
    "level": "Sätze"
  },
  {
    "de": "Von dort.",
    "lv": "Odande.",
    "level": "Sätze"
  },
  {
    "de": "Die Zeit drängt.",
    "lv": "Vrijeme ističe.",
    "level": "Sätze"
  },
  {
    "de": "Ihn drücken Sorgen.",
    "lv": "Pritišću ga brige.",
    "level": "Sätze"
  },
  {
    "de": "Hast du das Buch durchgearbeitet?",
    "lv": "Jesi li temeljito proučio knjigu?",
    "level": "Sätze"
  },
  {
    "de": "Kein Durchgang!",
    "lv": "Zabranjen prolaz!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich Sie bitten?",
    "lv": "Smijem li vas zamoliti?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin durstig.",
    "lv": "Žedan sam.",
    "level": "Sätze"
  },
  {
    "de": "Eben das meine ich.",
    "lv": "Upravo to mislim.",
    "level": "Sätze"
  },
  {
    "de": "Es ist ganz egal.",
    "lv": "Potpuno je svejedno.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie eigentlich?",
    "lv": "Što vi zapravo želite?",
    "level": "Sätze"
  },
  {
    "de": "Eilt es mit dieser Sache?",
    "lv": "Je li ova stvar hitna?",
    "level": "Sätze"
  },
  {
    "de": "Eilt sehr!",
    "lv": "Vrlo hitno!",
    "level": "Sätze"
  },
  {
    "de": "Ich habe es eilig.",
    "lv": "Žurim.",
    "level": "Sätze"
  },
  {
    "de": "Du bildest dir nur ein, krank zu sein.",
    "lv": "Samo umišljaš da si bolestan.",
    "level": "Sätze"
  },
  {
    "de": "Was fällt dir ein?",
    "lv": "Kako se usuđuješ? • Što ti pada na pamet?",
    "level": "Sätze"
  },
  {
    "de": "Es war einmal.",
    "lv": "Bilo jednom.",
    "level": "Sätze"
  },
  {
    "de": "Steigen Sie bitte ein!",
    "lv": "Uđite, molim vas!",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie ein!",
    "lv": "Izvolite, uđite!",
    "level": "Sätze"
  },
  {
    "de": "Einzelnes hat mir dort gefallen.",
    "lv": "Neke su mi se stvari ondje svidjele.",
    "level": "Sätze"
  },
  {
    "de": "Es empfiehlt sich.",
    "lv": "Preporučuje se.",
    "level": "Sätze"
  },
  {
    "de": "Diese Flasche enthält Essig.",
    "lv": "U ovoj je boci ocat.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldigen Sie bitte!",
    "lv": "Oprostite, molim vas!",
    "level": "Sätze"
  },
  {
    "de": "Entweder ... oder ...",
    "lv": "Ili... ili...",
    "level": "Sätze"
  },
  {
    "de": "Wer war der Erste?",
    "lv": "Tko je bio prvi?",
    "level": "Sätze"
  },
  {
    "de": "Wer fehlt heute?",
    "lv": "Tko danas nedostaje?",
    "level": "Sätze"
  },
  {
    "de": "Was fehlt dir?",
    "lv": "Što ti je?",
    "level": "Sätze"
  },
  {
    "de": "Wie heißen Sie?",
    "lv": "Kako se zovete?",
    "level": "Sätze"
  },
  {
    "de": "Was soll das heißen?",
    "lv": "Što bi to trebalo značiti?",
    "level": "Sätze"
  },
  {
    "de": "Bitte treten Sie näher heran!",
    "lv": "Molim vas, priđite bliže!",
    "level": "Sätze"
  },
  {
    "de": "Heraus mit der Sprache!",
    "lv": "Hajde, govori!",
    "level": "Sätze"
  },
  {
    "de": "im Herbst",
    "lv": "u jesen",
    "level": "Sätze"
  },
  {
    "de": "Meine Herrschaften!",
    "lv": "Dame i gospodo!",
    "level": "Sätze"
  },
  {
    "de": "von heute an",
    "lv": "od danas nadalje",
    "level": "Sätze"
  },
  {
    "de": "heute früh",
    "lv": "jutros",
    "level": "Sätze"
  },
  {
    "de": "heute Nacht",
    "lv": "noćas",
    "level": "Sätze"
  },
  {
    "de": "Zu Hilfe!",
    "lv": "Upomoć!",
    "level": "Sätze"
  },
  {
    "de": "Ich lerne jeden Tag Deutsch.",
    "lv": "Svaki dan učim njemački.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das bitte wiederholen?",
    "lv": "Možeš li to, molim te, ponoviti?",
    "level": "Sätze"
  },
  {
    "de": "Wir treffen uns am Bahnhof.",
    "lv": "Sastajemo se na kolodvoru.",
    "level": "Sätze"
  },
  {
    "de": "Ich stimme dir teilweise zu.",
    "lv": "Djelomično se slažem s tobom.",
    "level": "Sätze"
  },
  {
    "de": "Diese Entscheidung hat weitreichende Folgen.",
    "lv": "Ova odluka ima dalekosežne posljedice.",
    "level": "Sätze"
  },
  {
    "de": "Man sollte mehrere Perspektiven berücksichtigen.",
    "lv": "Trebalo bi uzeti u obzir više perspektiva.",
    "level": "Sätze"
  },
  {
    "de": "Könnten Sie das näher erläutern?",
    "lv": "Biste li to mogli podrobnije objasniti?",
    "level": "Sätze"
  },
  {
    "de": "Was mich anbelangt, ...",
    "lv": "Što se mene tiče,...",
    "level": "Sätze"
  },
  {
    "de": "Wie alt sind Sie?",
    "lv": "Koliko imate godina?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zwanzig Jahre alt.",
    "lv": "Imam dvadeset godina.",
    "level": "Sätze"
  },
  {
    "de": "Von heute an.",
    "lv": "Od danas.",
    "level": "Sätze"
  },
  {
    "de": "Von jetzt an.",
    "lv": "Od sada.",
    "level": "Sätze"
  },
  {
    "de": "Anders geht es nicht.",
    "lv": "Drukčije ne može.",
    "level": "Sätze"
  },
  {
    "de": "Rufen Sie mich an.",
    "lv": "Nazovite me.",
    "level": "Sätze"
  },
  {
    "de": "Bitte stellen Sie das Radio ab.",
    "lv": "Molim vas, isključite radio.",
    "level": "Sätze"
  },
  {
    "de": "Achte bitte auf den Verkehr.",
    "lv": "Molim te, pazi na promet.",
    "level": "Sätze"
  },
  {
    "de": "Darauf musst du achten.",
    "lv": "Na to moraš paziti.",
    "level": "Sätze"
  },
  {
    "de": "Heute mache ich es anders.",
    "lv": "Danas ću to napraviti drukčije.",
    "level": "Sätze"
  },
  {
    "de": "Wir warten auf den Bus.",
    "lv": "Čekamo autobus.",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt allein.",
    "lv": "Živi sam.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Ausbildung absolviert.",
    "lv": "Završio sam obuku. • Završio sam školovanje.",
    "level": "Sätze"
  },
  {
    "de": "Ich warte den Regen ab.",
    "lv": "Čekam da kiša prestane.",
    "level": "Sätze"
  },
  {
    "de": "Er arbeitet in der Verkaufsabteilung.",
    "lv": "Radi u odjelu prodaje.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin allergisch gegen Katzen.",
    "lv": "Alergičan sam na mačke.",
    "level": "Sätze"
  },
  {
    "de": "Andererseits verstehe ich ihn.",
    "lv": "S druge strane, razumijem ga.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Situation analysiert.",
    "lv": "Analizirao sam situaciju.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat meinen Vorschlag akzeptiert.",
    "lv": "Prihvatila je moj prijedlog.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte das genauer analysieren.",
    "lv": "Želio bih to podrobnije analizirati.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte den Vertrag ändern.",
    "lv": "Želio bih izmijeniti ugovor.",
    "level": "Sätze"
  },
  {
    "de": "Er ändert ständig seine Meinung.",
    "lv": "Stalno mijenja mišljenje.",
    "level": "Sätze"
  },
  {
    "de": "Ähnliche Probleme hatten wir schon früher.",
    "lv": "Slične smo probleme imali već i prije.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ahnung!",
    "lv": "Pojma nemam!",
    "level": "Sätze"
  },
  {
    "de": "Hör auf zu jammern.",
    "lv": "Prestani kukati.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Kleid ist stilvoll und konservativ.",
    "lv": "Ova je haljina konzervativno elegantna.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre gerne Akkordeonmusik.",
    "lv": "Rado slušam glazbu na harmonici.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das Gerät anklicken?",
    "lv": "Možeš li kliknuti na uređaj?",
    "level": "Sätze"
  },
  {
    "de": "Bitte öffne die Datei und klicke darauf.",
    "lv": "Molim te, otvori datoteku i klikni na nju.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe einen Unfall gehabt.",
    "lv": "Doživio sam nesreću.",
    "level": "Sätze"
  },
  {
    "de": "Wir laufen zum Bahnhof.",
    "lv": "Idemo pješice do kolodvora.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schalte den Fernseher an.",
    "lv": "Molim te, upali televizor.",
    "level": "Sätze"
  },
  {
    "de": "Mein Computer ist abgestürzt.",
    "lv": "Računalo mi se srušilo.",
    "level": "Sätze"
  },
  {
    "de": "Am Wochenende gehe ich angeln.",
    "lv": "Za vikend idem pecati.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe den Anruf verpasst.",
    "lv": "Propustio sam poziv.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mich später anrufen?",
    "lv": "Možeš li me nazvati kasnije?",
    "level": "Sätze"
  },
  {
    "de": "Bitte nimm meinen Vorschlag an.",
    "lv": "Molim te, prihvati moj prijedlog.",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme dein Angebot an.",
    "lv": "Prihvaćam tvoju ponudu.",
    "level": "Sätze"
  },
  {
    "de": "Er nahm die Einladung an.",
    "lv": "Prihvatio je poziv.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Angst vor Spinnen.",
    "lv": "Bojim se pauka.",
    "level": "Sätze"
  },
  {
    "de": "Keine Angst, alles wird gut.",
    "lv": "Ne boj se, sve će biti dobro.",
    "level": "Sätze"
  },
  {
    "de": "Anklang finden.",
    "lv": "Naići na odobravanje. • Naići na odjek.",
    "level": "Sätze"
  },
  {
    "de": "Es kommt darauf an.",
    "lv": "Ovisi.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Anlass.",
    "lv": "Tim povodom.",
    "level": "Sätze"
  },
  {
    "de": "Nehmen wir an, dass ...",
    "lv": "Pretpostavimo da...",
    "level": "Sätze"
  },
  {
    "de": "Was hast du da angerichtet?",
    "lv": "Što si to napravio?",
    "level": "Sätze"
  },
  {
    "de": "Bis ans Ende.",
    "lv": "Do kraja.",
    "level": "Sätze"
  },
  {
    "de": "Du glaubst mir anscheinend nicht.",
    "lv": "Čini se da mi ne vjeruješ.",
    "level": "Sätze"
  },
  {
    "de": "Meiner Ansicht nach ...",
    "lv": "Po mojem mišljenju...",
    "level": "Sätze"
  },
  {
    "de": "Stell dich nicht so an!",
    "lv": "Ne pretjeruj!",
    "level": "Sätze"
  },
  {
    "de": "An die Arbeit gehen.",
    "lv": "Prihvatiti se posla.",
    "level": "Sätze"
  },
  {
    "de": "Außer Atem sein.",
    "lv": "Biti bez daha.",
    "level": "Sätze"
  },
  {
    "de": "Guten Appetit!",
    "lv": "Dobar tek!",
    "level": "Sätze"
  },
  {
    "de": "In einem Atemzug.",
    "lv": "U jednom dahu.",
    "level": "Sätze"
  },
  {
    "de": "Auf jeden Fall.",
    "lv": "U svakom slučaju.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal war alles still.",
    "lv": "Odjednom je sve utihnulo.",
    "level": "Sätze"
  },
  {
    "de": "Bitte mach die Tür auf!",
    "lv": "Otvori, molim te, vrata!",
    "level": "Sätze"
  },
  {
    "de": "Er hat den Kredit aufgenommen.",
    "lv": "Podigao je kredit.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen heute aufräumen.",
    "lv": "Danas moramo pospremiti.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre jetzt auf.",
    "lv": "Sada prestajem.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schon auf.",
    "lv": "Već je ustao.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen das Treffen verschieben.",
    "lv": "Moramo odgoditi sastanak.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat mich aufgeregt.",
    "lv": "Uzrujala me je.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal.",
    "lv": "Odjednom.",
    "level": "Sätze"
  },
  {
    "de": "Auf der Stelle.",
    "lv": "Smjesta.",
    "level": "Sätze"
  },
  {
    "de": "Für den Schaden aufkommen.",
    "lv": "Nadoknaditi štetu.",
    "level": "Sätze"
  },
  {
    "de": "Bitte die Tür auf!",
    "lv": "Otvorite, molim, vrata!",
    "level": "Sätze"
  },
  {
    "de": "Aufrecht sitzen.",
    "lv": "Sjediti uspravno.",
    "level": "Sätze"
  },
  {
    "de": "Er ist auf.",
    "lv": "Ustao je.",
    "level": "Sätze"
  },
  {
    "de": "Alle Kräfte aufwenden.",
    "lv": "Uložiti sve snage.",
    "level": "Sätze"
  },
  {
    "de": "Viel Mühe aufwenden.",
    "lv": "Uložiti mnogo truda.",
    "level": "Sätze"
  },
  {
    "de": "Geh mir aus den Augen!",
    "lv": "Nestani mi s očiju!",
    "level": "Sätze"
  },
  {
    "de": "Unter vier Augen.",
    "lv": "U četiri oka.",
    "level": "Sätze"
  },
  {
    "de": "Aus Mangel an Zeit.",
    "lv": "Zbog nedostatka vremena.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Grunde.",
    "lv": "Iz toga razloga.",
    "level": "Sätze"
  },
  {
    "de": "Alle außer dir.",
    "lv": "Svi osim tebe.",
    "level": "Sätze"
  },
  {
    "de": "Auf Äußerlichkeiten Wert legen.",
    "lv": "Pridavati važnost vanjštini.",
    "level": "Sätze"
  },
  {
    "de": "Im äußersten Fall.",
    "lv": "U krajnjem slučaju.",
    "level": "Sätze"
  },
  {
    "de": "Äußerst wichtig.",
    "lv": "Iznimno važno.",
    "level": "Sätze"
  },
  {
    "de": "Aussicht auf die See.",
    "lv": "Pogled na more.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gute Aussichten.",
    "lv": "Ima dobre izglede.",
    "level": "Sätze"
  },
  {
    "de": "Wie wird dieses Wort ausgesprochen?",
    "lv": "Kako se izgovara ova riječ?",
    "level": "Sätze"
  },
  {
    "de": "Sein Beileid aussprechen.",
    "lv": "Izraziti sućut.",
    "level": "Sätze"
  },
  {
    "de": "Wann wurden die Meisterschaftskämpfe ausgetragen?",
    "lv": "Kada je održano prvenstvo?",
    "level": "Sätze"
  },
  {
    "de": "Welchen Beruf üben Sie aus?",
    "lv": "Kojim se zanimanjem bavite?",
    "level": "Sätze"
  },
  {
    "de": "Einfluss ausüben.",
    "lv": "Vršiti utjecaj.",
    "level": "Sätze"
  },
  {
    "de": "Auswärts essen.",
    "lv": "Jesti vani.",
    "level": "Sätze"
  },
  {
    "de": "Per Bahn.",
    "lv": "Željeznicom.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Bahn.",
    "lv": "Vlakom.",
    "level": "Sätze"
  },
  {
    "de": "Möglichst bald.",
    "lv": "Što prije.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist Angst und bange.",
    "lv": "Jako me je strah.",
    "level": "Sätze"
  },
  {
    "de": "Auf die lange Bank schieben.",
    "lv": "Odugovlačiti.",
    "level": "Sätze"
  },
  {
    "de": "Bar zahlen.",
    "lv": "Platiti gotovinom.",
    "level": "Sätze"
  },
  {
    "de": "Erz bauen.",
    "lv": "Vaditi rudu.",
    "level": "Sätze"
  },
  {
    "de": "Mist bauen.",
    "lv": "Napraviti glupost.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin beauftragt.",
    "lv": "Zadužen sam.",
    "level": "Sätze"
  },
  {
    "de": "Nach Bedarf.",
    "lv": "Po potrebi.",
    "level": "Sätze"
  },
  {
    "de": "Ich bedauere ihn.",
    "lv": "Žao mi ga je.",
    "level": "Sätze"
  },
  {
    "de": "Was bedeutet dieses Wort?",
    "lv": "Što znači ova riječ?",
    "level": "Sätze"
  },
  {
    "de": "Unter der Bedingung, dass ...",
    "lv": "Pod uvjetom da...",
    "level": "Sätze"
  },
  {
    "de": "Sie sieht bedrückt aus.",
    "lv": "Izgleda potišteno.",
    "level": "Sätze"
  },
  {
    "de": "Hinweise befolgen.",
    "lv": "Pridržavati se uputa.",
    "level": "Sätze"
  },
  {
    "de": "Befehle befolgen.",
    "lv": "Izvršavati naredbe.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Post befördern.",
    "lv": "Poslati poštom.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin begierig zu wissen.",
    "lv": "Jako želim znati.",
    "level": "Sätze"
  },
  {
    "de": "Zu Beginn.",
    "lv": "U početku.",
    "level": "Sätze"
  },
  {
    "de": "Am Beginn.",
    "lv": "Na početku.",
    "level": "Sätze"
  },
  {
    "de": "Bei Beginn.",
    "lv": "Pri početku.",
    "level": "Sätze"
  },
  {
    "de": "In Begleitung.",
    "lv": "U pratnji.",
    "level": "Sätze"
  },
  {
    "de": "Mit seiner Begleitung.",
    "lv": "Sa svojom pratnjom.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schwer von Begriff.",
    "lv": "Sporo shvaća.",
    "level": "Sätze"
  },
  {
    "de": "Im Gedächtnis behalten.",
    "lv": "Zapamtiti.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tisch.",
    "lv": "Za stolom.",
    "level": "Sätze"
  },
  {
    "de": "Bei Sinnen sein.",
    "lv": "Biti pri zdravoj pameti.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tage.",
    "lv": "Danju.",
    "level": "Sätze"
  },
  {
    "de": "Bei weitem nicht so.",
    "lv": "Ni izdaleka tako.",
    "level": "Sätze"
  },
  {
    "de": "Alle beide.",
    "lv": "Obojica. • Oboje.",
    "level": "Sätze"
  },
  {
    "de": "Stürmischer Beifall brach los.",
    "lv": "Prolomio se gromoglasan pljesak.",
    "level": "Sätze"
  },
  {
    "de": "Beifall finden.",
    "lv": "Naići na odobravanje.",
    "level": "Sätze"
  },
  {
    "de": "Beileid aussprechen.",
    "lv": "Izraziti sućut.",
    "level": "Sätze"
  },
  {
    "de": "Auf eigenen Beinen stehen.",
    "lv": "Stajati na vlastitim nogama.",
    "level": "Sätze"
  },
  {
    "de": "Zum Beispiel.",
    "lv": "Na primjer.",
    "level": "Sätze"
  },
  {
    "de": "Beistand leisten.",
    "lv": "Pružiti pomoć.",
    "level": "Sätze"
  },
  {
    "de": "Beitrag leisten.",
    "lv": "Dati svoj doprinos.",
    "level": "Sätze"
  },
  {
    "de": "Jemandes Bekanntschaft machen.",
    "lv": "Upoznati se s nekim.",
    "level": "Sätze"
  },
  {
    "de": "Bekanntschaft anknüpfen.",
    "lv": "Sklopiti poznanstvo.",
    "level": "Sätze"
  },
  {
    "de": "Belegte Brötchen.",
    "lv": "Sendviči.",
    "level": "Sätze"
  },
  {
    "de": "Nach Ihrem Belieben.",
    "lv": "Po vašoj želji.",
    "level": "Sätze"
  },
  {
    "de": "Zu jeder beliebigen Zeit.",
    "lv": "U bilo koje vrijeme.",
    "level": "Sätze"
  },
  {
    "de": "Schweigen beobachten.",
    "lv": "Šutjeti.",
    "level": "Sätze"
  },
  {
    "de": "Zur Bequemlichkeit.",
    "lv": "Radi udobnosti.",
    "level": "Sätze"
  },
  {
    "de": "Bereit sein.",
    "lv": "Biti spreman. • Biti voljan.",
    "level": "Sätze"
  },
  {
    "de": "Unfallopfer bergen.",
    "lv": "Izvući unesrećene.",
    "level": "Sätze"
  },
  {
    "de": "Bericht erstatten.",
    "lv": "Podnijeti izvješće.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind besetzt.",
    "lv": "Sva su mjesta zauzeta.",
    "level": "Sätze"
  },
  {
    "de": "Neue Besen kehren gut.",
    "lv": "Nova metla dobro mete.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt ein Haus.",
    "lv": "Posjeduje kuću.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt viel Mut.",
    "lv": "Ima mnogo hrabrosti.",
    "level": "Sätze"
  },
  {
    "de": "Desto besser.",
    "lv": "Tim bolje.",
    "level": "Sätze"
  },
  {
    "de": "Gute Besserung!",
    "lv": "Brzo ozdravljenje!",
    "level": "Sätze"
  },
  {
    "de": "Beim besten Willen.",
    "lv": "Uz najbolju volju.",
    "level": "Sätze"
  },
  {
    "de": "Am besten.",
    "lv": "Najbolje.",
    "level": "Sätze"
  },
  {
    "de": "Es besteht Zweifel.",
    "lv": "Postoji sumnja.",
    "level": "Sätze"
  },
  {
    "de": "Seine Aufgabe besteht darin ...",
    "lv": "Njegov se zadatak sastoji u tome da...",
    "level": "Sätze"
  },
  {
    "de": "Grüße bestellen.",
    "lv": "Prenijeti pozdrave.",
    "level": "Sätze"
  },
  {
    "de": "Ganz bestimmt.",
    "lv": "Sasvim sigurno.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch kommen.",
    "lv": "Doći u posjet.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch sein.",
    "lv": "Biti u posjetu. • Biti u gostima.",
    "level": "Sätze"
  },
  {
    "de": "Oft Konzerte besuchen.",
    "lv": "Često ići na koncerte.",
    "level": "Sätze"
  },
  {
    "de": "Welche Schule hat er besucht?",
    "lv": "Koju je školu pohađao?",
    "level": "Sätze"
  },
  {
    "de": "In Betracht ziehen.",
    "lv": "Uzeti u obzir. • Razmotriti.",
    "level": "Sätze"
  },
  {
    "de": "Außer Betracht lassen.",
    "lv": "Ne uzimati u obzir.",
    "level": "Sätze"
  },
  {
    "de": "Er betreibt ein Hotel.",
    "lv": "On vodi hotel.",
    "level": "Sätze"
  },
  {
    "de": "Alle beiden.",
    "lv": "Obojica. • Oboje.",
    "level": "Sätze"
  },
  {
    "de": "Alles bezahlen.",
    "lv": "Platiti sve.",
    "level": "Sätze"
  },
  {
    "de": "In Bezug auf etwas.",
    "lv": "U vezi s nečim.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön.",
    "lv": "Izvolite. • Nema na čemu.",
    "level": "Sätze"
  },
  {
    "de": "Wie bitte?",
    "lv": "Molim?",
    "level": "Sätze"
  },
  {
    "de": "Bitte sehr.",
    "lv": "Molim lijepo.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe eine Bitte an Sie.",
    "lv": "Imam jednu molbu za vas.",
    "level": "Sätze"
  },
  {
    "de": "Trompete blasen.",
    "lv": "Svirati trubu.",
    "level": "Sätze"
  },
  {
    "de": "In einem Buch blättern.",
    "lv": "Listati knjigu.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßen Füßen.",
    "lv": "Bosim nogama.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßem Auge.",
    "lv": "Golim okom.",
    "level": "Sätze"
  },
  {
    "de": "Danke für die Blumen!",
    "lv": "Hvala na komplimentu!",
    "level": "Sätze"
  },
  {
    "de": "Alles in Butter.",
    "lv": "Sve u redu.",
    "level": "Sätze"
  },
  {
    "de": "Bitte checken.",
    "lv": "Molim provjeriti.",
    "level": "Sätze"
  },
  {
    "de": "Da ist er!",
    "lv": "Evo ga!",
    "level": "Sätze"
  },
  {
    "de": "Alles spricht dafür.",
    "lv": "Sve govori u prilog tome.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann nichts dafür.",
    "lv": "Nisam ja kriv.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin dagegen.",
    "lv": "Ja sam protiv toga.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe nichts dagegen.",
    "lv": "Nemam ništa protiv.",
    "level": "Sätze"
  },
  {
    "de": "Von daheim.",
    "lv": "Od kuće.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Dame ziehen.",
    "lv": "Odigrati potez damom.",
    "level": "Sätze"
  },
  {
    "de": "Es dämmert.",
    "lv": "Smrkava se. • Sviće.",
    "level": "Sätze"
  },
  {
    "de": "Danke schön!",
    "lv": "Hvala lijepa!",
    "level": "Sätze"
  },
  {
    "de": "Dann und wann.",
    "lv": "Tu i tamo.",
    "level": "Sätze"
  },
  {
    "de": "Darauf kannst du dich verlassen.",
    "lv": "Na to se možeš osloniti.",
    "level": "Sätze"
  },
  {
    "de": "Daraus wird nichts.",
    "lv": "Od toga neće biti ništa.",
    "level": "Sätze"
  },
  {
    "de": "So dass ...",
    "lv": "Tako da...",
    "level": "Sätze"
  },
  {
    "de": "Für wen halten Sie mich?",
    "lv": "Za koga me smatrate?",
    "level": "Sätze"
  },
  {
    "de": "Hände weg!",
    "lv": "Ruke k sebi!",
    "level": "Sätze"
  },
  {
    "de": "Lass den Kopf nicht hängen!",
    "lv": "Ne vješaj nos!",
    "level": "Sätze"
  },
  {
    "de": "zu Hause",
    "lv": "kod kuće",
    "level": "Sätze"
  },
  {
    "de": "nach Hause gehen",
    "lv": "ići kući",
    "level": "Sätze"
  },
  {
    "de": "von Haus aus",
    "lv": "po podrijetlu • po prirodi",
    "level": "Sätze"
  },
  {
    "de": "Meinen herzlichsten Glückwunsch!",
    "lv": "Najsrdačnije čestitke!",
    "level": "Sätze"
  },
  {
    "de": "Seien Sie so gut!",
    "lv": "Budite tako dobri!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie die Güte!",
    "lv": "Budite tako ljubazni!",
    "level": "Sätze"
  },
  {
    "de": "Was hast du?",
    "lv": "Što ti je?",
    "level": "Sätze"
  },
  {
    "de": "Gestatten Sie bitte!",
    "lv": "Dopustite, molim vas!",
    "level": "Sätze"
  },
  {
    "de": "Ist es gestattet zu rauchen?",
    "lv": "Je li dopušteno pušiti?",
    "level": "Sätze"
  },
  {
    "de": "Ich muss gestehen, dass ...",
    "lv": "Moram priznati da...",
    "level": "Sätze"
  },
  {
    "de": "gestern früh",
    "lv": "jučer ujutro",
    "level": "Sätze"
  },
  {
    "de": "gestern Abend",
    "lv": "sinoć",
    "level": "Sätze"
  },
  {
    "de": "Es ist mir gleichgültig, ob ...",
    "lv": "Svejedno mi je je li...",
    "level": "Sätze"
  },
  {
    "de": "Was ist geschehen?",
    "lv": "Što se dogodilo?",
    "level": "Sätze"
  },
  {
    "de": "Mach keine Geschichten!",
    "lv": "Ne radi gluposti!",
    "level": "Sätze"
  },
  {
    "de": "Geschweige denn ...",
    "lv": "A kamoli...",
    "level": "Sätze"
  },
  {
    "de": "Gehen Sie geradeaus!",
    "lv": "Idite ravno!",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es Ihnen?",
    "lv": "Kako ste?",
    "level": "Sätze"
  },
  {
    "de": "Frag ihn gelegentlich, ob ...",
    "lv": "Pitaj ga, kad ti se ukaže prilika, je li...",
    "level": "Sätze"
  },
  {
    "de": "morgen früh",
    "lv": "sutra ujutro",
    "level": "Sätze"
  },
  {
    "de": "im Frühling",
    "lv": "u proljeće",
    "level": "Sätze"
  },
  {
    "de": "Was gibt’s Neues?",
    "lv": "Što ima novoga?",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Brief folgt, dass ...",
    "lv": "Iz ovog pisma proizlazi da...",
    "level": "Sätze"
  },
  {
    "de": "Fahre fort!",
    "lv": "Nastavi!",
    "level": "Sätze"
  },
  {
    "de": "Er ist kein Freund von ...",
    "lv": "On nije ljubitelj...",
    "level": "Sätze"
  },
  {
    "de": "Es erwies sich, dass ...",
    "lv": "Pokazalo se da...",
    "level": "Sätze"
  },
  {
    "de": "Gedenkst du meiner?",
    "lv": "Sjećaš li me se? • Misliš li na mene?",
    "level": "Sätze"
  },
  {
    "de": "im Winter",
    "lv": "zimi",
    "level": "Sätze"
  },
  {
    "de": "Welcher Jahrgang sind Sie?",
    "lv": "Koje ste godište?",
    "level": "Sätze"
  },
  {
    "de": "Es jammert mich zu sehen ...",
    "lv": "Žao mi je gledati...",
    "level": "Sätze"
  },
  {
    "de": "je mehr, desto besser",
    "lv": "što više, to bolje",
    "level": "Sätze"
  },
  {
    "de": "bis jetzt",
    "lv": "do sada",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich zum Bahnhof?",
    "lv": "Kako mogu doći do kolodvora?",
    "level": "Sätze"
  },
  {
    "de": "Komm her!",
    "lv": "Dođi ovamo!",
    "level": "Sätze"
  },
  {
    "de": "Könnte ich Frau N. sprechen?",
    "lv": "Mogu li razgovarati s gospođom N.?",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das?",
    "lv": "Koliko to košta?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange dauert die Vorstellung?",
    "lv": "Koliko traje predstava?",
    "level": "Sätze"
  },
  {
    "de": "Lass das!",
    "lv": "Prestani! • Ostavi to!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich in Ruhe!",
    "lv": "Ostavi me na miru!",
    "level": "Sätze"
  },
  {
    "de": "Lassen Sie mich Ihnen helfen!",
    "lv": "Dopustite da vam pomognem!",
    "level": "Sätze"
  },
  {
    "de": "Lasst uns gehen!",
    "lv": "Idemo!",
    "level": "Sätze"
  },
  {
    "de": "Na, wie läufts?",
    "lv": "Pa, kako ide?",
    "level": "Sätze"
  },
  {
    "de": "Es lebe!",
    "lv": "Neka živi!",
    "level": "Sätze"
  },
  {
    "de": "Leben Sie wohl!",
    "lv": "Budite zdravi! • Zbogom!",
    "level": "Sätze"
  },
  {
    "de": "Was ist los?",
    "lv": "Što je bilo?",
    "level": "Sätze"
  },
  {
    "de": "Der Job ist anstrengend.",
    "lv": "Posao je naporan.",
    "level": "Sätze"
  },
  {
    "de": "Das war ein anstrengender Tag.",
    "lv": "To je bio naporan dan.",
    "level": "Sätze"
  },
  {
    "de": "Deutsch lernen kann anstrengend sein.",
    "lv": "Učenje njemačkoga može biti naporno.",
    "level": "Sätze"
  },
  {
    "de": "Er verlangt eine Erklärung.",
    "lv": "On traži objašnjenje.",
    "level": "Sätze"
  },
  {
    "de": "Der Verkäufer verlangt zu viel Geld.",
    "lv": "Prodavač traži previše novca.",
    "level": "Sätze"
  },
  {
    "de": "Das Gesetz verlangt es so.",
    "lv": "Zakon to tako zahtijeva.",
    "level": "Sätze"
  },
  {
    "de": "Das ist gar nicht so schwer.",
    "lv": "To uopće nije tako teško.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe gar kein Geld.",
    "lv": "Uopće nemam novca.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gar nichts gesagt.",
    "lv": "Nije rekao baš ništa.",
    "level": "Sätze"
  },
  {
    "de": "Der Hund ist los.",
    "lv": "Pas je pušten.",
    "level": "Sätze"
  },
  {
    "de": "Hier ist viel los.",
    "lv": "Ovdje se mnogo toga događa.",
    "level": "Sätze"
  },
  {
    "de": "Halt die Luft an!",
    "lv": "Ušuti! • Ne pretjeruj!",
    "level": "Sätze"
  },
  {
    "de": "Was machst du?",
    "lv": "Što radiš?",
    "level": "Sätze"
  },
  {
    "de": "Sag mal!",
    "lv": "Hajde, reci!",
    "level": "Sätze"
  },
  {
    "de": "Was meinen Sie damit?",
    "lv": "Što time želite reći? • Kako to mislite?",
    "level": "Sätze"
  },
  {
    "de": "Wir gehen mit Ihnen.",
    "lv": "Idemo s vama.",
    "level": "Sätze"
  },
  {
    "de": "Ich fahre mit der Eisenbahn.",
    "lv": "Putujem vlakom.",
    "level": "Sätze"
  },
  {
    "de": "am Mittwoch",
    "lv": "u srijedu",
    "level": "Sätze"
  },
  {
    "de": "Es mag sein.",
    "lv": "Može biti.",
    "level": "Sätze"
  },
  {
    "de": "Ich mag das nicht.",
    "lv": "To mi se ne sviđa.",
    "level": "Sätze"
  },
  {
    "de": "am Montag",
    "lv": "u ponedjeljak",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen!",
    "lv": "Dobro jutro!",
    "level": "Sätze"
  },
  {
    "de": "am Morgen",
    "lv": "ujutro",
    "level": "Sätze"
  },
  {
    "de": "Gute Nacht!",
    "lv": "Laku noć!",
    "level": "Sätze"
  },
  {
    "de": "Nehmen Sie Platz!",
    "lv": "Izvolite sjesti!",
    "level": "Sätze"
  },
  {
    "de": "Letzte Neuheit!",
    "lv": "Posljednja novost!",
    "level": "Sätze"
  },
  {
    "de": "Nicht wahr?",
    "lv": "Zar ne?",
    "level": "Sätze"
  },
  {
    "de": "Nicht doch!",
    "lv": "Ma ne! • Nemoj!",
    "level": "Sätze"
  },
  {
    "de": "Nun endlich!",
    "lv": "Pa napokon!",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das?",
    "lv": "Čemu to služi?",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das alles?",
    "lv": "Čemu sve to služi?",
    "level": "Sätze"
  },
  {
    "de": "Parken verboten!",
    "lv": "Parkiranje zabranjeno!",
    "level": "Sätze"
  },
  {
    "de": "Nicht parken!",
    "lv": "Ne parkirati!",
    "level": "Sätze"
  },
  {
    "de": "Er hat Recht.",
    "lv": "On ima pravo.",
    "level": "Sätze"
  },
  {
    "de": "Wovon ist die Rede?",
    "lv": "O čemu je riječ?",
    "level": "Sätze"
  },
  {
    "de": "Davon kann keine Rede sein.",
    "lv": "O tome ne može biti ni govora.",
    "level": "Sätze"
  },
  {
    "de": "Glückliche Reise!",
    "lv": "Sretan put!",
    "level": "Sätze"
  },
  {
    "de": "Mir reißt die Geduld.",
    "lv": "Gubim strpljenje.",
    "level": "Sätze"
  },
  {
    "de": "Man sagt, dass ...",
    "lv": "Kažu da...",
    "level": "Sätze"
  },
  {
    "de": "Schon gut!",
    "lv": "U redu je!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön!",
    "lv": "Izvolite! • Molim lijepo!",
    "level": "Sätze"
  },
  {
    "de": "Was bin ich schuldig?",
    "lv": "Koliko sam dužan?",
    "level": "Sätze"
  },
  {
    "de": "Vor dem Gebrauch schütteln!",
    "lv": "Prije uporabe promućkati!",
    "level": "Sätze"
  },
  {
    "de": "Sehen Sie mal!",
    "lv": "Pogledajte samo!",
    "level": "Sätze"
  },
  {
    "de": "Wie sehr auch ...",
    "lv": "Koliko god...",
    "level": "Sätze"
  },
  {
    "de": "Seit wann?",
    "lv": "Otkad?",
    "level": "Sätze"
  },
  {
    "de": "Was soll ich tun?",
    "lv": "Što da radim?",
    "level": "Sätze"
  },
  {
    "de": "im Sommer",
    "lv": "ljeti",
    "level": "Sätze"
  },
  {
    "de": "Nicht nur ..., sondern auch ...",
    "lv": "Ne samo..., nego i...",
    "level": "Sätze"
  },
  {
    "de": "Sonst noch etwas?",
    "lv": "Još nešto?",
    "level": "Sätze"
  },
  {
    "de": "Spaß beiseite!",
    "lv": "Šalu na stranu!",
    "level": "Sätze"
  },
  {
    "de": "Wie spät ist es?",
    "lv": "Koliko je sati?",
    "level": "Sätze"
  },
  {
    "de": "Durchfahrt gesperrt!",
    "lv": "Prolaz zatvoren!",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie deutsch?",
    "lv": "Govorite li njemački?",
    "level": "Sätze"
  },
  {
    "de": "Statt zu ...",
    "lv": "Umjesto da...",
    "level": "Sätze"
  },
  {
    "de": "Wie steht’s?",
    "lv": "Kako stoje stvari?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Hut steht ihr gut.",
    "lv": "Ovaj joj šešir dobro stoji.",
    "level": "Sätze"
  },
  {
    "de": "Guten Tag!",
    "lv": "Dobar dan!",
    "level": "Sätze"
  },
  {
    "de": "Wo treffen wir uns?",
    "lv": "Gdje ćemo se naći?",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie näher!",
    "lv": "Priđite bliže!",
    "level": "Sätze"
  },
  {
    "de": "Ehrlichkeit ist eine Tugend.",
    "lv": "Poštenje je vrlina.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe viel zu tun.",
    "lv": "Imam mnogo posla.",
    "level": "Sätze"
  },
  {
    "de": "Nicht übel!",
    "lv": "Nije loše!",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt über mir.",
    "lv": "On stanuje iznad mene.",
    "level": "Sätze"
  },
  {
    "de": "Er ist davon überzeugt.",
    "lv": "On je u to uvjeren.",
    "level": "Sätze"
  },
  {
    "de": "So ist es üblich.",
    "lv": "Takav je običaj.",
    "level": "Sätze"
  },
  {
    "de": "Deine Uhr geht nach.",
    "lv": "Tvoj sat kasni.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel Uhr ist es?",
    "lv": "Koliko je sati?",
    "level": "Sätze"
  },
  {
    "de": "Um acht Uhr früh.",
    "lv": "U osam sati ujutro.",
    "level": "Sätze"
  },
  {
    "de": "umso mehr",
    "lv": "tim više",
    "level": "Sätze"
  },
  {
    "de": "Rechts um!",
    "lv": "Nadesno!",
    "level": "Sätze"
  },
  {
    "de": "Und ob!",
    "lv": "Itekako!",
    "level": "Sätze"
  },
  {
    "de": "und zwar",
    "lv": "i to",
    "level": "Sätze"
  },
  {
    "de": "Auf Unkosten von ...",
    "lv": "Na trošak... • Na račun...",
    "level": "Sätze"
  },
  {
    "de": "Er saß unter den Zuschauern.",
    "lv": "Sjedio je među gledateljima.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ursache!",
    "lv": "Nema na čemu!",
    "level": "Sätze"
  },
  {
    "de": "Es geschah, wie verabredet.",
    "lv": "Dogodilo se kako je bilo dogovoreno.",
    "level": "Sätze"
  },
  {
    "de": "Rauchen verboten!",
    "lv": "Pušenje zabranjeno!",
    "level": "Sätze"
  },
  {
    "de": "Falsch verbunden!",
    "lv": "Pogrešan broj!",
    "level": "Sätze"
  },
  {
    "de": "Eintritt verboten!",
    "lv": "Ulaz zabranjen!",
    "level": "Sätze"
  },
  {
    "de": "Verstehen Sie mich?",
    "lv": "Razumijete li me?",
    "level": "Sätze"
  },
  {
    "de": "Er versteht nichts davon.",
    "lv": "On se u to ništa ne razumije.",
    "level": "Sätze"
  },
  {
    "de": "Seine Ansicht vertreten.",
    "lv": "Zastupati svoje stajalište.",
    "level": "Sätze"
  },
  {
    "de": "Streit verursachen.",
    "lv": "Izazvati svađu.",
    "level": "Sätze"
  },
  {
    "de": "Viel besser.",
    "lv": "Mnogo bolje.",
    "level": "Sätze"
  },
  {
    "de": "Zu viel.",
    "lv": "Previše.",
    "level": "Sätze"
  },
  {
    "de": "Vom Hörensagen.",
    "lv": "Po čuvenju.",
    "level": "Sätze"
  },
  {
    "de": "Von Zeit zu Zeit.",
    "lv": "S vremena na vrijeme.",
    "level": "Sätze"
  },
  {
    "de": "Von Beruf.",
    "lv": "Po zanimanju.",
    "level": "Sätze"
  },
  {
    "de": "Er ist Berliner von Geburt.",
    "lv": "On je rodom iz Berlina.",
    "level": "Sätze"
  },
  {
    "de": "Er steht vor dem Fenster.",
    "lv": "On stoji ispred prozora.",
    "level": "Sätze"
  },
  {
    "de": "Vor Sonnenaufgang.",
    "lv": "Prije izlaska sunca.",
    "level": "Sätze"
  },
  {
    "de": "Vor vierzehn Tagen.",
    "lv": "Prije dva tjedna.",
    "level": "Sätze"
  },
  {
    "de": "Vor Freude.",
    "lv": "Od radosti.",
    "level": "Sätze"
  },
  {
    "de": "Vor allem.",
    "lv": "Prije svega.",
    "level": "Sätze"
  },
  {
    "de": "Im Voraus.",
    "lv": "Unaprijed.",
    "level": "Sätze"
  },
  {
    "de": "Unter der Voraussetzung, dass ...",
    "lv": "Pod uvjetom da...",
    "level": "Sätze"
  },
  {
    "de": "Unter dem Vorbehalt.",
    "lv": "Uz ogradu.",
    "level": "Sätze"
  },
  {
    "de": "Vorhanden sein.",
    "lv": "Postojati. • Biti na raspolaganju.",
    "level": "Sätze"
  },
  {
    "de": "In der vorigen Woche.",
    "lv": "Prošlog tjedna.",
    "level": "Sätze"
  },
  {
    "de": "Vorkehrungen treffen.",
    "lv": "Poduzeti mjere opreza.",
    "level": "Sätze"
  },
  {
    "de": "Sie kommt mir bekannt vor.",
    "lv": "Ona mi se čini poznatom.",
    "level": "Sätze"
  },
  {
    "de": "Er hat eine Vorliebe für Literatur.",
    "lv": "On osobito voli književnost.",
    "level": "Sätze"
  },
  {
    "de": "Heute Vormittag.",
    "lv": "Danas prijepodne.",
    "level": "Sätze"
  },
  {
    "de": "Von vorn.",
    "lv": "Sprijeda. • Ispočetka.",
    "level": "Sätze"
  },
  {
    "de": "Nach vorn.",
    "lv": "Naprijed.",
    "level": "Sätze"
  },
  {
    "de": "Von vornherein.",
    "lv": "Od samog početka.",
    "level": "Sätze"
  },
  {
    "de": "Im Vorteil sein.",
    "lv": "Biti u prednosti.",
    "level": "Sätze"
  },
  {
    "de": "Wach sein.",
    "lv": "Biti budan.",
    "level": "Sätze"
  },
  {
    "de": "Wach werden.",
    "lv": "Probuditi se.",
    "level": "Sätze"
  },
  {
    "de": "Auf Wache sein.",
    "lv": "Biti na straži.",
    "level": "Sätze"
  },
  {
    "de": "Während eines Jahres.",
    "lv": "Tijekom godine.",
    "level": "Sätze"
  },
  {
    "de": "Während des Krieges.",
    "lv": "Tijekom rata.",
    "level": "Sätze"
  },
  {
    "de": "Gegen eine Wand reden.",
    "lv": "Govoriti u vjetar.",
    "level": "Sätze"
  },
  {
    "de": "Hier haben die Wände Ohren.",
    "lv": "Ovdje i zidovi imaju uši.",
    "level": "Sätze"
  },
  {
    "de": "Bis wann?",
    "lv": "Do kada?",
    "level": "Sätze"
  },
  {
    "de": "Es ist warm.",
    "lv": "Toplo je.",
    "level": "Sätze"
  },
  {
    "de": "Auf eine Nachricht warten.",
    "lv": "Čekati poruku.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie?",
    "lv": "Što želite?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein ...?",
    "lv": "Kakav...?",
    "level": "Sätze"
  },
  {
    "de": "Auf halbem Wege.",
    "lv": "Na pola puta.",
    "level": "Sätze"
  },
  {
    "de": "Auf diesem Wege.",
    "lv": "Ovim putem. • Na ovaj način.",
    "level": "Sätze"
  },
  {
    "de": "Auf friedlichem Wege.",
    "lv": "Mirnim putem.",
    "level": "Sätze"
  },
  {
    "de": "Unserer Freundschaft wegen.",
    "lv": "Zbog našeg prijateljstva.",
    "level": "Sätze"
  },
  {
    "de": "Von Rechts wegen.",
    "lv": "Po zakonu. • Po pravdi.",
    "level": "Sätze"
  },
  {
    "de": "Weh tun.",
    "lv": "Boljeti.",
    "level": "Sätze"
  },
  {
    "de": "Zu Weihnachten.",
    "lv": "Za Božić.",
    "level": "Sätze"
  },
  {
    "de": "Auf welche Weise?",
    "lv": "Na koji način?",
    "level": "Sätze"
  },
  {
    "de": "Art und Weise.",
    "lv": "Način.",
    "level": "Sätze"
  },
  {
    "de": "Ohne weiteres.",
    "lv": "Bez oklijevanja. • Bez poteškoća.",
    "level": "Sätze"
  },
  {
    "de": "Bis auf weiteres.",
    "lv": "Do daljnjega.",
    "level": "Sätze"
  },
  {
    "de": "Und so weiter.",
    "lv": "I tako dalje.",
    "level": "Sätze"
  },
  {
    "de": "Weiter nichts.",
    "lv": "Ništa više.",
    "level": "Sätze"
  },
  {
    "de": "An welchem Tag?",
    "lv": "Kojeg dana?",
    "level": "Sätze"
  },
  {
    "de": "Alle Welt.",
    "lv": "Cijeli svijet. • Svi.",
    "level": "Sätze"
  },
  {
    "de": "In wenigen Tagen.",
    "lv": "Za nekoliko dana.",
    "level": "Sätze"
  },
  {
    "de": "Zu wenig.",
    "lv": "Premalo.",
    "level": "Sätze"
  },
  {
    "de": "Wenn auch.",
    "lv": "Iako.",
    "level": "Sätze"
  },
  {
    "de": "Wer da?",
    "lv": "Tko je tamo?",
    "level": "Sätze"
  },
  {
    "de": "Gesammelte Werke von Schiller.",
    "lv": "Sabrana djela Schillera.",
    "level": "Sätze"
  },
  {
    "de": "Ausgewählte Werke.",
    "lv": "Izabrana djela.",
    "level": "Sätze"
  },
  {
    "de": "Er ist wert, dass ...",
    "lv": "On zaslužuje da...",
    "level": "Sätze"
  },
  {
    "de": "Es ist zwei Euro wert.",
    "lv": "To vrijedi dva eura.",
    "level": "Sätze"
  },
  {
    "de": "Nach Westen.",
    "lv": "Na zapad.",
    "level": "Sätze"
  },
  {
    "de": "Von Westen.",
    "lv": "Sa zapada.",
    "level": "Sätze"
  },
  {
    "de": "In Wettbewerb treten.",
    "lv": "Uključiti se u natjecanje.",
    "level": "Sätze"
  },
  {
    "de": "Um die Wette laufen.",
    "lv": "Utrkivati se.",
    "level": "Sätze"
  },
  {
    "de": "Was gilt die Wette?",
    "lv": "U što se kladimo?",
    "level": "Sätze"
  },
  {
    "de": "Wie wird das Wetter?",
    "lv": "Kakvo će biti vrijeme?",
    "level": "Sätze"
  },
  {
    "de": "Wettkampf im Turnen.",
    "lv": "Natjecanje u gimnastici.",
    "level": "Sätze"
  },
  {
    "de": "Wider meinen Willen.",
    "lv": "Protiv moje volje.",
    "level": "Sätze"
  },
  {
    "de": "Widerspruch erheben.",
    "lv": "Prosvjedovati. • Uložiti prigovor.",
    "level": "Sätze"
  },
  {
    "de": "Wie alt ist er?",
    "lv": "Koliko on ima godina?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange?",
    "lv": "Koliko dugo?",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiederhören!",
    "lv": "Čujemo se!",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiedersehen!",
    "lv": "Doviđenja!",
    "level": "Sätze"
  },
  {
    "de": "Wilde Tiere.",
    "lv": "Divlje životinje.",
    "level": "Sätze"
  },
  {
    "de": "Herzlich willkommen!",
    "lv": "Srdačno dobro došli!",
    "level": "Sätze"
  },
  {
    "de": "Du musst ziehen.",
    "lv": "Ti si na potezu.",
    "level": "Sätze"
  },
  {
    "de": "Es zieht.",
    "lv": "Ima propuha.",
    "level": "Sätze"
  },
  {
    "de": "Ziemlich kalt.",
    "lv": "Prilično hladno.",
    "level": "Sätze"
  },
  {
    "de": "Zipfel einer Wurst.",
    "lv": "Krajičak kobasice.",
    "level": "Sätze"
  },
  {
    "de": "Zu ihm gehen.",
    "lv": "Ići k njemu.",
    "level": "Sätze"
  },
  {
    "de": "Zur Schule gehen.",
    "lv": "Ići u školu.",
    "level": "Sätze"
  },
  {
    "de": "Zu Hause bleiben.",
    "lv": "Ostati kod kuće.",
    "level": "Sätze"
  },
  {
    "de": "Von Tag zu Tag.",
    "lv": "Iz dana u dan.",
    "level": "Sätze"
  },
  {
    "de": "Zum Glück.",
    "lv": "Srećom.",
    "level": "Sätze"
  },
  {
    "de": "Wasser zum Trinken.",
    "lv": "Voda za piće.",
    "level": "Sätze"
  },
  {
    "de": "Zu Fuß.",
    "lv": "Pješice.",
    "level": "Sätze"
  },
  {
    "de": "Zu Pferde.",
    "lv": "Na konju.",
    "level": "Sätze"
  },
  {
    "de": "Zu Rad.",
    "lv": "Biciklom.",
    "level": "Sätze"
  },
  {
    "de": "Es hörte auf zu regnen.",
    "lv": "Kiša je prestala padati.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe noch viel zu tun.",
    "lv": "Imam još mnogo posla.",
    "level": "Sätze"
  },
  {
    "de": "Zu früh.",
    "lv": "Prerano.",
    "level": "Sätze"
  },
  {
    "de": "Zu groß.",
    "lv": "Prevelik.",
    "level": "Sätze"
  },
  {
    "de": "Mit den Achseln zucken.",
    "lv": "Slegnuti ramenima.",
    "level": "Sätze"
  },
  {
    "de": "In einem Zug trinken.",
    "lv": "Popiti na dušak.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde gehen.",
    "lv": "Propasti.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde legen.",
    "lv": "Uzeti kao osnovu.",
    "level": "Sätze"
  },
  {
    "de": "Zum ersten Mal.",
    "lv": "Prvi put.",
    "level": "Sätze"
  },
  {
    "de": "Machen Sie bitte die Tür zu!",
    "lv": "Zatvorite, molim vas, vrata!",
    "level": "Sätze"
  },
  {
    "de": "Er hat zugenommen.",
    "lv": "Udebljao se.",
    "level": "Sätze"
  },
  {
    "de": "Die Tage nehmen zu.",
    "lv": "Dani postaju duži.",
    "level": "Sätze"
  },
  {
    "de": "Zusammenhängen mit etwas.",
    "lv": "Biti povezan s nečim.",
    "level": "Sätze"
  },
  {
    "de": "Die Tür ist zu.",
    "lv": "Vrata su zatvorena.",
    "level": "Sätze"
  },
  {
    "de": "Das hätte ich ihm nicht zugetraut.",
    "lv": "To ne bih od njega očekivao.",
    "level": "Sätze"
  },
  {
    "de": "Freier Zutritt.",
    "lv": "Slobodan ulaz.",
    "level": "Sätze"
  },
  {
    "de": "Zutritt verboten!",
    "lv": "Ulaz zabranjen!",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu viel!",
    "lv": "To je previše!",
    "level": "Sätze"
  },
  {
    "de": "Zuwider werden.",
    "lv": "Postati odvratan. • Ogaditi se.",
    "level": "Sätze"
  },
  {
    "de": "Und zwar.",
    "lv": "I to.",
    "level": "Sätze"
  },
  {
    "de": "Es steht außer Zweifel.",
    "lv": "To je izvan svake sumnje.",
    "level": "Sätze"
  },
  {
    "de": "Ohne Zweifel.",
    "lv": "Bez sumnje.",
    "level": "Sätze"
  },
  {
    "de": "Zum Zweiten.",
    "lv": "Drugo.",
    "level": "Sätze"
  },
  {
    "de": "Frohes neues Jahr!",
    "lv": "Sretna nova godina!",
    "level": "Sätze"
  },
  {
    "de": "Herzlichen Glückwunsch zum Geburtstag!",
    "lv": "Sretan rođendan!",
    "level": "Sätze"
  },
  {
    "de": "Gute Reise!",
    "lv": "Sretan put!",
    "level": "Sätze"
  },
  {
    "de": "Es freut mich, Sie kennenzulernen.",
    "lv": "Drago mi je što sam vas upoznao.",
    "level": "Sätze"
  },
  {
    "de": "Wären Sie bitte so nett?",
    "lv": "Biste li, molim vas, bili tako ljubazni?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin Ihnen sehr dankbar.",
    "lv": "Vrlo sam vam zahvalan.",
    "level": "Sätze"
  },
  {
    "de": "Setzt euch bitte hin!",
    "lv": "Sjednite, molim vas!",
    "level": "Sätze"
  },
  {
    "de": "Ben, komm bitte an die Tafel!",
    "lv": "Bene, dođi, molim te, pred ploču!",
    "level": "Sätze"
  },
  {
    "de": "Schlagt bitte die Lehrbücher auf!",
    "lv": "Otvorite, molim vas, udžbenike!",
    "level": "Sätze"
  },
  {
    "de": "Geht bitte in die Sporthalle!",
    "lv": "Idite, molim vas, u sportsku dvoranu!",
    "level": "Sätze"
  },
  {
    "de": "Schläfst du noch?",
    "lv": "Spavaš li još?",
    "level": "Sätze"
  },
  {
    "de": "Schlafen Sie noch?",
    "lv": "Spavate li još?",
    "level": "Sätze"
  },
  {
    "de": "Er ist fest eingeschlafen.",
    "lv": "Čvrsto je zaspao.",
    "level": "Sätze"
  },
  {
    "de": "Wecke ihn bitte auf, es ist schon spät!",
    "lv": "Probudi ga, molim te, već je kasno!",
    "level": "Sätze"
  },
  {
    "de": "Es tut mir sehr leid!",
    "lv": "Jako mi je žao!",
    "level": "Sätze"
  },
  {
    "de": "Vielen Dank!",
    "lv": "Puno hvala!",
    "level": "Sätze"
  },
  {
    "de": "Finn, fang bitte an!",
    "lv": "Finne, počni, molim te!",
    "level": "Sätze"
  },
  {
    "de": "Lest bitte mit!",
    "lv": "Čitajte zajedno, molim vas!",
    "level": "Sätze"
  },
  {
    "de": "Emma, schau bitte nicht aus dem Fenster!",
    "lv": "Emma, molim te, ne gledaj kroz prozor!",
    "level": "Sätze"
  },
  {
    "de": "Jonas, bring bitte die Hefte!",
    "lv": "Jonase, donesi, molim te, bilježnice!",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte zurück an deinen Platz!",
    "lv": "Vrati se, molim te, na svoje mjesto!",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb acht.",
    "lv": "Pola je osam.",
    "level": "Sätze"
  },
  {
    "de": "Wann wachst du gewöhnlich auf?",
    "lv": "Kad se obično budiš?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe gleich auf.",
    "lv": "Odmah ću ustati.",
    "level": "Sätze"
  },
  {
    "de": "Steh auf, Hanna, es klingelt!",
    "lv": "Ustaj, Hanna, zvoni!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich noch fünf Minuten schlafen!",
    "lv": "Pusti me da spavam još pet minuta!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss nicht, das Zimmer zu lüften!",
    "lv": "Ne zaboravi prozračiti sobu!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist das Handtuch?",
    "lv": "Gdje je ručnik?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mir die Zähne putzen.",
    "lv": "Htio bih oprati zube.",
    "level": "Sätze"
  },
  {
    "de": "Womit putzt du dir die Zähne?",
    "lv": "Čime pereš zube?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mich anziehen.",
    "lv": "Htio bih se obući.",
    "level": "Sätze"
  },
  {
    "de": "Zieh dich bitte schnell an!",
    "lv": "Obuci se brzo, molim te!",
    "level": "Sätze"
  },
  {
    "de": "Kleide dich wärmer an, draußen ist es kühl.",
    "lv": "Obuci se toplije, vani je prohladno.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, wie geht es dir?",
    "lv": "Dobro jutro, kako si?",
    "level": "Sätze"
  },
  {
    "de": "Mir geht es gut, danke.",
    "lv": "Dobro sam, hvala.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es Neues?",
    "lv": "Što ima novoga?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein Chaos hier!",
    "lv": "Kakav kaos ovdje!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich beim Aufräumen helfen?",
    "lv": "Smijem li pomoći pri pospremanju?",
    "level": "Sätze"
  },
  {
    "de": "Was trinkst du morgens, Kaffee oder Tee?",
    "lv": "Što piješ ujutro, kavu ili čaj?",
    "level": "Sätze"
  },
  {
    "de": "Gewöhnlich trinke ich morgens eine Tasse Kaffee.",
    "lv": "Obično ujutro popijem šalicu kave.",
    "level": "Sätze"
  },
  {
    "de": "Am liebsten trinke ich schwarzen Kaffee.",
    "lv": "Najradije pijem crnu kavu.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, hast du gut geschlafen?",
    "lv": "Dobro jutro, jesi li dobro spavao?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin noch sehr müde.",
    "lv": "Još sam vrlo umoran.",
    "level": "Sätze"
  },
  {
    "de": "Willst du Kaffee oder Milch?",
    "lv": "Hoćeš li kavu ili mlijeko?",
    "level": "Sätze"
  },
  {
    "de": "Gib mir bitte ein Brötchen mit Käse.",
    "lv": "Daj mi, molim te, pecivo sa sirom.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss jetzt los!",
    "lv": "Sada moram ići!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss dein Frühstück nicht!",
    "lv": "Ne zaboravi doručak!",
    "level": "Sätze"
  },
  {
    "de": "Klara, deck bitte den Tisch!",
    "lv": "Klara, molim te, postavi stol!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss die Servietten nicht!",
    "lv": "Ne zaboravi salvete!",
    "level": "Sätze"
  },
  {
    "de": "Wann esst ihr zu Mittag?",
    "lv": "Kad ručate?",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit zu essen.",
    "lv": "Vrijeme je za jelo.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es heute zu Mittag?",
    "lv": "Što je danas za ručak?",
    "level": "Sätze"
  },
  {
    "de": "Wie schmeckt dir die Suppe?",
    "lv": "Kakva ti je juha?",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt ist sie etwas zu salzig.",
    "lv": "Iskreno rečeno, malo je preslana.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dir ein Stück Brot geben?",
    "lv": "Smijem li ti dati krišku kruha?",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich habe schon.",
    "lv": "Hvala, već imam.",
    "level": "Sätze"
  },
  {
    "de": "Das Fleisch schmeckt ausgezeichnet.",
    "lv": "Meso je izvrsno.",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich bin schon satt.",
    "lv": "Hvala, već sam sit.",
    "level": "Sätze"
  },
  {
    "de": "Heute haben wir Besuch.",
    "lv": "Danas imamo goste.",
    "level": "Sätze"
  },
  {
    "de": "Bist du heute Abend frei?",
    "lv": "Jesi li slobodan večeras?",
    "level": "Sätze"
  },
  {
    "de": "Komm doch heute zum Mittagessen vorbei!",
    "lv": "Pa svrati danas na ručak!",
    "level": "Sätze"
  },
  {
    "de": "Setzen wir uns an den Tisch.",
    "lv": "Sjednimo za stol.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, bedien dich!",
    "lv": "Izvoli, posluži se!",
    "level": "Sätze"
  },
  {
    "de": "Stört dich das Rauchen?",
    "lv": "Smeta li ti pušenje?",
    "level": "Sätze"
  },
  {
    "de": "Danke für die nette Aufnahme!",
    "lv": "Hvala na lijepom dočeku!",
    "level": "Sätze"
  },
  {
    "de": "Wann gehst du ins Bett?",
    "lv": "Kad ideš spavati?",
    "level": "Sätze"
  },
  {
    "de": "Wenn ich von der Arbeit komme, bin ich immer müde.",
    "lv": "Kad dođem s posla, uvijek sam umoran.",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, ins Bett zu gehen.",
    "lv": "Vrijeme je za spavanje.",
    "level": "Sätze"
  },
  {
    "de": "Es ist schönes Wetter.",
    "lv": "Lijepo je vrijeme.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mit mir spazieren gehen?",
    "lv": "Hoćeš li prošetati sa mnom?",
    "level": "Sätze"
  },
  {
    "de": "Sieh mal, es wird gleich regnen.",
    "lv": "Pogledaj, samo što nije počela kiša.",
    "level": "Sätze"
  },
  {
    "de": "Nimm den Regenschirm mit!",
    "lv": "Ponesi kišobran!",
    "level": "Sätze"
  },
  {
    "de": "Es regnet.",
    "lv": "Pada kiša.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin schon ganz nass.",
    "lv": "Već sam sav mokar.",
    "level": "Sätze"
  },
  {
    "de": "Glaubst du, dass es den ganzen Tag regnen wird?",
    "lv": "Misliš li da će kiša padati cijeli dan?",
    "level": "Sätze"
  },
  {
    "de": "Es hört auf zu regnen.",
    "lv": "Prestaje padati kiša.",
    "level": "Sätze"
  },
  {
    "de": "Die Sonne scheint wieder.",
    "lv": "Sunce opet sja.",
    "level": "Sätze"
  },
  {
    "de": "Es ist sehr warm.",
    "lv": "Vrlo je toplo.",
    "level": "Sätze"
  },
  {
    "de": "Es sieht nach Regen aus.",
    "lv": "Izgleda da će kiša.",
    "level": "Sätze"
  },
  {
    "de": "Wir bekommen gleich ein Gewitter.",
    "lv": "Samo što nije počelo nevrijeme.",
    "level": "Sätze"
  },
  {
    "de": "Das Gewitter zieht vorüber.",
    "lv": "Nevrijeme prolazi.",
    "level": "Sätze"
  },
  {
    "de": "Die Wolken verziehen sich.",
    "lv": "Oblaci se razilaze.",
    "level": "Sätze"
  },
  {
    "de": "Siehst du den Regenbogen?",
    "lv": "Vidiš li dugu?",
    "level": "Sätze"
  },
  {
    "de": "Der Winter ist da, es hat geschneit.",
    "lv": "Zima je stigla, pao je snijeg.",
    "level": "Sätze"
  },
  {
    "de": "Es schneit.",
    "lv": "Pada snijeg.",
    "level": "Sätze"
  },
  {
    "de": "Wie schön ist es im Wald im Winter!",
    "lv": "Kako je lijepo u šumi zimi!",
    "level": "Sätze"
  },
  {
    "de": "Mir ist kalt, ich friere.",
    "lv": "Hladno mi je, smrzavam se.",
    "level": "Sätze"
  },
  {
    "de": "Draußen ist Glatteis, pass auf!",
    "lv": "Vani je poledica, pazi!",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir auf die Eisbahn gehen?",
    "lv": "Hoćemo li ići na klizalište?",
    "level": "Sätze"
  },
  {
    "de": "Zieh die Jacke an, du kannst dich erkälten.",
    "lv": "Obuci jaknu, možeš se prehladiti.",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb sieben.",
    "lv": "Pola je sedam.",
    "level": "Sätze"
  },
  {
    "de": "Meine Uhr geht fünf Minuten vor.",
    "lv": "Moj sat žuri pet minuta.",
    "level": "Sätze"
  },
  {
    "de": "Weck mich morgen früh um sieben Uhr!",
    "lv": "Probudi me sutra ujutro u sedam sati!",
    "level": "Sätze"
  },
  {
    "de": "Was ist heute für ein Datum?",
    "lv": "Koji je danas datum?",
    "level": "Sätze"
  },
  {
    "de": "Heute ist der elfte Juli.",
    "lv": "Danas je jedanaesti srpnja.",
    "level": "Sätze"
  },
  {
    "de": "Was machst du gewöhnlich am Abend?",
    "lv": "Što obično radiš navečer?",
    "level": "Sätze"
  },
  {
    "de": "Es ist schon lange her, dass wir uns gesehen haben.",
    "lv": "Odavno se nismo vidjeli.",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es dir?",
    "lv": "Kako si?",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, ich möchte etwas mit dir besprechen.",
    "lv": "Oprosti, htio bih s tobom o nečemu razgovarati.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir spazieren!",
    "lv": "Idemo u šetnju!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Lust, mit mir in den Park zu gehen?",
    "lv": "Imaš li volje ići sa mnom u park?",
    "level": "Sätze"
  },
  {
    "de": "Ich komme, um dich zum Spaziergang abzuholen.",
    "lv": "Dolazim po tebe da idemo u šetnju.",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte etwas langsamer, ich kann dir nicht folgen!",
    "lv": "Hodaj malo sporije, molim te, ne mogu te pratiti!",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zum ersten Mal in dieser Gegend.",
    "lv": "Prvi put sam u ovom kraju.",
    "level": "Sätze"
  },
  {
    "de": "Ruhen wir uns ein wenig aus.",
    "lv": "Odmorimo se malo.",
    "level": "Sätze"
  },
  {
    "de": "Jetzt können wir zurückgehen.",
    "lv": "Sada se možemo vratiti.",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt bin ich ziemlich müde.",
    "lv": "Iskreno rečeno, prilično sam umoran.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, wo ist die nächste U-Bahn-Station?",
    "lv": "Oprosti, gdje je najbliža postaja podzemne željeznice?",
    "level": "Sätze"
  },
  {
    "de": "Welcher ist der kürzeste Weg?",
    "lv": "Koji je najkraći put?",
    "level": "Sätze"
  },
  {
    "de": "Geh hier die zweite Straße links und dann immer geradeaus.",
    "lv": "Ovdje skreni u drugu ulicu lijevo, a onda idi samo ravno.",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich am schnellsten zum Bahnhof?",
    "lv": "Kako ću najbrže doći do kolodvora?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe vor, morgen zu verreisen.",
    "lv": "Namjeravam sutra otputovati.",
    "level": "Sätze"
  },
  {
    "de": "Wohin willst du fahren?",
    "lv": "Kamo želiš putovati?",
    "level": "Sätze"
  },
  {
    "de": "Reist du geschäftlich oder privat?",
    "lv": "Putuješ li poslovno ili privatno?",
    "level": "Sätze"
  },
  {
    "de": "Finn fährt bis Berlin mit, dann geht er ans Meer.",
    "lv": "Finn putuje s nama do Berlina, a onda ide na more.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt das Schiff ab?",
    "lv": "Kad polazi brod?",
    "level": "Sätze"
  },
  {
    "de": "In einer halben Stunde.",
    "lv": "Za pola sata.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich noch eine Kabine bekommen?",
    "lv": "Mogu li još dobiti kabinu?",
    "level": "Sätze"
  },
  {
    "de": "Vergiss deinen Pass nicht!",
    "lv": "Ne zaboravi putovnicu!",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, den Koffer zu packen.",
    "lv": "Vrijeme je za pakiranje kovčega.",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt um halb sieben ab.",
    "lv": "Vlak polazi u pola sedam.",
    "level": "Sätze"
  },
  {
    "de": "Hol mir bitte ein Taxi, ich verpasse sonst den Zug!",
    "lv": "Pozovi mi, molim te, taksi, inače ću zakasniti na vlak!",
    "level": "Sätze"
  },
  {
    "de": "Fahr bitte zum Bahnhof!",
    "lv": "Vozi, molim te, na kolodvor!",
    "level": "Sätze"
  },
  {
    "de": "Ich muss mich beeilen.",
    "lv": "Moram se požuriti.",
    "level": "Sätze"
  },
  {
    "de": "Ist der Schalter schon offen?",
    "lv": "Je li blagajna već otvorena?",
    "level": "Sätze"
  },
  {
    "de": "Eine Fahrkarte nach Köln, bitte.",
    "lv": "Jednu kartu za Köln, molim.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt der Zug ab?",
    "lv": "Kad polazi vlak?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt gleich ab.",
    "lv": "Vlak samo što nije krenuo.",
    "level": "Sätze"
  },
  {
    "de": "Muss ich in Koblenz umsteigen?",
    "lv": "Moram li presjesti u Koblenzu?",
    "level": "Sätze"
  },
  {
    "de": "Ja, dort musst du umsteigen.",
    "lv": "Da, ondje moraš presjesti.",
    "level": "Sätze"
  },
  {
    "de": "Ist dieser Platz frei?",
    "lv": "Je li ovo mjesto slobodno?",
    "level": "Sätze"
  },
  {
    "de": "Nein, hier sitzt niemand.",
    "lv": "Ne, ovdje nitko ne sjedi.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der Bahnsteigkartenautomat?",
    "lv": "Gdje je automat za peronske karte?",
    "level": "Sätze"
  },
  {
    "de": "Stell mein Handgepäck ins Gepäcknetz.",
    "lv": "Stavi moju ručnu prtljagu u mrežu za prtljagu.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das Fenster aufmachen?",
    "lv": "Mogu li otvoriti prozor?",
    "level": "Sätze"
  },
  {
    "de": "Es zieht, schließ bitte das Fenster!",
    "lv": "Propuh je, zatvori, molim te, prozor!",
    "level": "Sätze"
  },
  {
    "de": "Welche ist die nächste Station?",
    "lv": "Koja je sljedeća postaja?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange hält der Zug?",
    "lv": "Koliko dugo vlak stoji?",
    "level": "Sätze"
  },
  {
    "de": "Wo muss ich umsteigen?",
    "lv": "Gdje moram presjesti?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug hat Verspätung.",
    "lv": "Vlak kasni.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Wagen ist für Nichtraucher.",
    "lv": "Ovaj je vagon za nepušače.",
    "level": "Sätze"
  },
  {
    "de": "Wir fahren jetzt über die Grenze.",
    "lv": "Sada prelazimo granicu.",
    "level": "Sätze"
  },
  {
    "de": "Hast du etwas zu verzollen?",
    "lv": "Imaš li što prijaviti na carini?",
    "level": "Sätze"
  },
  {
    "de": "Wir sind in Berlin angekommen.",
    "lv": "Stigli smo u Berlin.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir ein gutes Hotel empfehlen?",
    "lv": "Možeš li mi preporučiti dobar hotel?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie freie Zimmer?",
    "lv": "Imate li slobodnih soba?",
    "level": "Sätze"
  },
  {
    "de": "Ein Zimmer mit zwei Betten, bitte.",
    "lv": "Sobu s dva kreveta, molim.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Zimmer pro Nacht?",
    "lv": "Koliko košta soba po noći?",
    "level": "Sätze"
  },
  {
    "de": "Morgen reise ich ab. Weck mich um sieben Uhr!",
    "lv": "Sutra odlazim. Probudi me u sedam sati!",
    "level": "Sätze"
  },
  {
    "de": "Die Rechnung, bitte!",
    "lv": "Račun, molim!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Stadtbibliothek?",
    "lv": "Gdje je gradska knjižnica?",
    "level": "Sätze"
  },
  {
    "de": "Wann hat das Museum geöffnet?",
    "lv": "Kad je muzej otvoren?",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir ins Museum gehen?",
    "lv": "Hoćemo li ići u muzej?",
    "level": "Sätze"
  },
  {
    "de": "Fahren wir mit dem Bus oder der U-Bahn?",
    "lv": "Idemo li autobusom ili podzemnom željeznicom?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die nächste Bushaltestelle?",
    "lv": "Gdje je najbliže autobusno stajalište?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe großen Hunger.",
    "lv": "Jako sam gladan.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir zusammen essen?",
    "lv": "Idemo li zajedno nešto pojesti?",
    "level": "Sätze"
  },
  {
    "de": "Kellner, die Speisekarte, bitte!",
    "lv": "Konobaru, jelovnik, molim!",
    "level": "Sätze"
  },
  {
    "de": "Ist der Fisch frisch?",
    "lv": "Je li riba svježa?",
    "level": "Sätze"
  },
  {
    "de": "Das schmeckt ausgezeichnet!",
    "lv": "Ovo je izvrsno!",
    "level": "Sätze"
  },
  {
    "de": "Kellner, zahlen bitte!",
    "lv": "Konobaru, račun, molim!",
    "level": "Sätze"
  },
  {
    "de": "Ich gehe ins Café einen Kaffee trinken.",
    "lv": "Idem u kafić popiti kavu.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mitkommen?",
    "lv": "Hoćeš li poći sa mnom?",
    "level": "Sätze"
  },
  {
    "de": "Eine Tasse Kaffee mit Milch, bitte!",
    "lv": "Šalicu kave s mlijekom, molim!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneller, ich habe es eilig!",
    "lv": "Brže, molim, žurim se!",
    "level": "Sätze"
  },
  {
    "de": "Lass deinen Kaffee nicht kalt werden!",
    "lv": "Ne daj da ti se kava ohladi!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie etwas Erfrischendes?",
    "lv": "Imate li nešto osvježavajuće?",
    "level": "Sätze"
  },
  {
    "de": "Eine Portion Eis, bitte!",
    "lv": "Porciju sladoleda, molim!",
    "level": "Sätze"
  },
  {
    "de": "Heute Morgen habe ich einen Brief bekommen.",
    "lv": "Jutros sam dobio pismo.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss ihm gleich schreiben.",
    "lv": "Moram mu odmah pisati.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der nächste Briefkasten?",
    "lv": "Gdje je najbliži poštanski sandučić?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Post?",
    "lv": "Gdje je pošta?",
    "level": "Sätze"
  },
  {
    "de": "Erinnere mich morgen daran, zu schreiben!",
    "lv": "Podsjeti me sutra da napišem pismo!",
    "level": "Sätze"
  },
  {
    "de": "Werfen Sie bitte diesen Brief in den Briefkasten.",
    "lv": "Molim vas, ubacite ovo pismo u poštanski sandučić.",
    "level": "Sätze"
  },
  {
    "de": "Hallo, hier spricht Emma.",
    "lv": "Halo, ovdje Emma.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich dich später anrufen?",
    "lv": "Mogu li te nazvati kasnije?",
    "level": "Sätze"
  },
  {
    "de": "Muss ich lange warten?",
    "lv": "Moram li dugo čekati?",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneiden Sie mir die Haare.",
    "lv": "Molim vas, ošišajte me.",
    "level": "Sätze"
  },
  {
    "de": "Hinten bitte nicht zu kurz.",
    "lv": "Straga, molim, ne prekratko.",
    "level": "Sätze"
  },
  {
    "de": "Wann beginnt die Vorstellung?",
    "lv": "Kad počinje predstava?",
    "level": "Sätze"
  },
  {
    "de": "Es fängt um halb acht an.",
    "lv": "Počinje u pola osam.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind ausverkauft.",
    "lv": "Sva su mjesta rasprodana.",
    "level": "Sätze"
  },
  {
    "de": "Drei Karten, bitte!",
    "lv": "Tri karte, molim!",
    "level": "Sätze"
  },
  {
    "de": "Wir lassen die Jacken in der Garderobe.",
    "lv": "Ostavit ćemo jakne u garderobi.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schnell, der Vorhang geht gleich auf!",
    "lv": "Brzo, molim, zastor samo što se nije podigao!",
    "level": "Sätze"
  },
  {
    "de": "Der Vorhang fällt.",
    "lv": "Zastor se spušta.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dich zum Tanz bitten?",
    "lv": "Smijem li te zamoliti za ples?",
    "level": "Sätze"
  },
  {
    "de": "Wann ist eure Hochzeit?",
    "lv": "Kad je vaše vjenčanje?",
    "level": "Sätze"
  },
  {
    "de": "Ich suche eine Wohnung.",
    "lv": "Tražim stan.",
    "level": "Sätze"
  },
  {
    "de": "Ist in diesem Haus eine Wohnung frei?",
    "lv": "Ima li u ovoj zgradi slobodan stan?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet die Miete?",
    "lv": "Kolika je stanarina?",
    "level": "Sätze"
  },
  {
    "de": "Die Wohnung hat drei Zimmer und eine Küche.",
    "lv": "Stan ima tri sobe i kuhinju.",
    "level": "Sätze"
  },
  {
    "de": "Heute ziehen wir um.",
    "lv": "Danas se selimo.",
    "level": "Sätze"
  },
  {
    "de": "Mia, pack die Sachen bitte in Kisten!",
    "lv": "Mia, spakiraj, molim te, stvari u kutije!",
    "level": "Sätze"
  },
  {
    "de": "Hast du alles eingepackt?",
    "lv": "Jesi li sve spakirao?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe mit meinem Freund in Kontakt.",
    "lv": "U kontaktu sam sa svojim prijateljem.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir ins Theater?",
    "lv": "Idemo li u kazalište?",
    "level": "Sätze"
  },
  {
    "de": "Ist alles eingeladen?",
    "lv": "Je li sve utovareno?",
    "level": "Sätze"
  },
  {
    "de": "Welch schöne Aussicht!",
    "lv": "Kakav lijep pogled!",
    "level": "Sätze"
  },
  {
    "de": "Nun können wir alles wieder aufräumen.",
    "lv": "Sada opet možemo sve pospremiti.",
    "level": "Sätze"
  },
  {
    "de": "Wie viele Zimmer habt ihr?",
    "lv": "Koliko soba imate?",
    "level": "Sätze"
  },
  {
    "de": "Im Sommer fahre ich ans Meer.",
    "lv": "Ljeti idem na more.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du schwimmen?",
    "lv": "Znaš li plivati?",
    "level": "Sätze"
  },
  {
    "de": "Schwimm nicht zu weit hinaus!",
    "lv": "Ne plivaj predaleko!",
    "level": "Sätze"
  },
  {
    "de": "Badest du jeden Tag?",
    "lv": "Kupaš li se svaki dan?",
    "level": "Sätze"
  },
  {
    "de": "Bei schönem Wetter gehe ich angeln.",
    "lv": "Po lijepom vremenu idem pecati.",
    "level": "Sätze"
  },
  {
    "de": "Wie sieht er aus?",
    "lv": "Kako izgleda?",
    "level": "Sätze"
  },
  {
    "de": "Er hat sich aber recht verändert.",
    "lv": "Pa on se prilično promijenio.",
    "level": "Sätze"
  },
  {
    "de": "Wie ist er als Mensch?",
    "lv": "Kakav je kao čovjek?",
    "level": "Sätze"
  },
  {
    "de": "Er ist immer nett und freundlich.",
    "lv": "Uvijek je drag i ljubazan.",
    "level": "Sätze"
  },
  {
    "de": "Ich fühle mich nicht wohl.",
    "lv": "Ne osjećam se dobro.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe starke Kopfschmerzen.",
    "lv": "Imam jaku glavobolju.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe mich erkältet.",
    "lv": "Prehladio sam se.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Schnupfen.",
    "lv": "Imam hunjavicu.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist schwindlig.",
    "lv": "Vrti mi se u glavi.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Arzt gehen.",
    "lv": "Moram ići liječniku.",
    "level": "Sätze"
  },
  {
    "de": "Leg dich ins Bett!",
    "lv": "Lezi u krevet!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Fieber?",
    "lv": "Imaš li vrućicu?",
    "level": "Sätze"
  },
  {
    "de": "Gestern hatte ich erhöhte Temperatur.",
    "lv": "Jučer sam imao povišenu temperaturu.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Zahnschmerzen.",
    "lv": "Boli me zub.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Zahnarzt gehen.",
    "lv": "Moram ići zubaru.",
    "level": "Sätze"
  },
  {
    "de": "Weißt du, dass Finn krank ist?",
    "lv": "Znaš li da je Finn bolestan?",
    "level": "Sätze"
  },
  {
    "de": "Laut Arzt wird er bald wieder gesund.",
    "lv": "Prema riječima liječnika, uskoro će opet biti zdrav.",
    "level": "Sätze"
  },
  {
    "de": "Ich will meine Wohnung neu möblieren.",
    "lv": "Želim nanovo namjestiti svoj stan.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das auf Raten kaufen?",
    "lv": "Mogu li to kupiti na rate?",
    "level": "Sätze"
  },
  {
    "de": "Bleib im Bett, bis es dir besser geht!",
    "lv": "Ostani u krevetu dok ti ne bude bolje!",
    "level": "Sätze"
  },
  {
    "de": "Noah hat in zwei Wochen schwimmen gelernt.",
    "lv": "Noah je za dva tjedna naučio plivati.",
    "level": "Sätze"
  },
  {
    "de": "Sei mit dem Essen noch vorsichtig.",
    "lv": "Budi još oprezan s hranom.",
    "level": "Sätze"
  },
  {
    "de": "Sprichst du Deutsch?",
    "lv": "Govoriš li njemački?",
    "level": "Sätze"
  },
  {
    "de": "Ja, ein bisschen.",
    "lv": "Da, malo.",
    "level": "Sätze"
  },
  {
    "de": "Du sprichst ziemlich fließend.",
    "lv": "Govoriš prilično tečno.",
    "level": "Sätze"
  },
  {
    "de": "Wo hast du Deutsch gelernt?",
    "lv": "Gdje si učio njemački?",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme seit einem Jahr Deutschstunden.",
    "lv": "Već godinu dana idem na satove njemačkoga.",
    "level": "Sätze"
  },
  {
    "de": "Ich suche immer Gelegenheit, Deutsch zu sprechen.",
    "lv": "Uvijek tražim priliku govoriti njemački.",
    "level": "Sätze"
  },
  {
    "de": "Ist das Buch noch vorrätig?",
    "lv": "Ima li te knjige još na zalihi?",
    "level": "Sätze"
  },
  {
    "de": "Das Buch ist leider ausverkauft.",
    "lv": "Knjiga je nažalost rasprodana.",
    "level": "Sätze"
  },
  {
    "de": "Wann erscheint die neue Auflage?",
    "lv": "Kada izlazi novo izdanje?",
    "level": "Sätze"
  },
  {
    "de": "Womit kann ich Ihnen helfen?",
    "lv": "U čemu vam mogu pomoći?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie ganz frische Eier?",
    "lv": "Imate li sasvim svježa jaja?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die?",
    "lv": "Koliko koštaju?",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu teuer.",
    "lv": "To je preskupo.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir ein halbes Kilo abwiegen?",
    "lv": "Možete li mi izvagati pola kilograma?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel muss ich zahlen?",
    "lv": "Koliko moram platiti?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet das Kilo?",
    "lv": "Koliko košta kilogram?",
    "level": "Sätze"
  },
  {
    "de": "Wiegen Sie mir bitte zwei Kilo ab.",
    "lv": "Izvažite mi, molim vas, dva kilograma.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch Karotten?",
    "lv": "Imate li i mrkve?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie gutes Rindfleisch?",
    "lv": "Imate li dobre govedine?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir zwei Kilo Hackfleisch.",
    "lv": "Dajte mi dva kilograma mljevenoga mesa.",
    "level": "Sätze"
  },
  {
    "de": "Ein Laib Brot, bitte, aber nicht zu knusprig.",
    "lv": "Jednu štrucu kruha, molim, ali ne previše hrskavu.",
    "level": "Sätze"
  },
  {
    "de": "Das Brot ist frisch gebacken.",
    "lv": "Kruh je svježe pečen.",
    "level": "Sätze"
  },
  {
    "de": "Was für Obst haben Sie heute?",
    "lv": "Kakvo voće imate danas?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die Äpfel?",
    "lv": "Koliko koštaju jabuke?",
    "level": "Sätze"
  },
  {
    "de": "Dann nehme ich zwei Kilo Äpfel.",
    "lv": "Onda ću uzeti dva kilograma jabuka.",
    "level": "Sätze"
  },
  {
    "de": "Die Birnen sind sehr teuer.",
    "lv": "Kruške su vrlo skupe.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir alles nach Hause liefern?",
    "lv": "Možete li mi sve dostaviti kući?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie Reis?",
    "lv": "Imate li riže?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir bitte ein Kilo Reis.",
    "lv": "Dajte mi, molim vas, kilogram riže.",
    "level": "Sätze"
  },
  {
    "de": "Danke, diesmal nicht.",
    "lv": "Hvala, ovaj put ne.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet dieser Teppich?",
    "lv": "Koliko košta ovaj tepih?",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Möbel in meine Wohnung liefern?",
    "lv": "Možete li dostaviti namještaj u moj stan?",
    "level": "Sätze"
  },
  {
    "de": "Bitte an der Kasse zahlen.",
    "lv": "Molimo platiti na blagajni.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, machen Sie die Rechnung.",
    "lv": "Molim vas, napišite mi račun.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Meter?",
    "lv": "Koliko košta metar?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Stoff gefällt mir.",
    "lv": "Sviđa mi se ova tkanina.",
    "level": "Sätze"
  },
  {
    "de": "Schneiden Sie mir bitte drei Meter ab.",
    "lv": "Odrežite mi, molim vas, tri metra.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch andere Muster?",
    "lv": "Imate li i drugih uzoraka?",
    "level": "Sätze"
  },
  {
    "de": "Diese Farbe gefällt mir nicht.",
    "lv": "Ova mi se boja ne sviđa.",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir eine hellere.",
    "lv": "Dajte mi neku svjetliju.",
    "level": "Sätze"
  },
  {
    "de": "Was kosten diese Socken?",
    "lv": "Koliko koštaju ove čarape?",
    "level": "Sätze"
  },
  {
    "de": "Welche Handschuhe wünschen Sie?",
    "lv": "Kakve rukavice želite?",
    "level": "Sätze"
  },
  {
    "de": "Die sind mir etwas zu eng.",
    "lv": "Ove su mi malo preuske.",
    "level": "Sätze"
  },
  {
    "de": "So, nun passen sie gut.",
    "lv": "Tako, sad dobro pristaju.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir einen guten Schneider empfehlen?",
    "lv": "Možeš li mi preporučiti dobrog krojača?",
    "level": "Sätze"
  },
  {
    "de": "Ich will einen Anzug bestellen.",
    "lv": "Želim naručiti odijelo.",
    "level": "Sätze"
  },
  {
    "de": "Wann wird er fertig sein?",
    "lv": "Kada će biti gotovo?",
    "level": "Sätze"
  },
  {
    "de": "Der Anzug sitzt gut.",
    "lv": "Odijelo dobro pristaje.",
    "level": "Sätze"
  },
  {
    "de": "Die Hose ist zu lang.",
    "lv": "Hlače su preduge.",
    "level": "Sätze"
  },
  {
    "de": "Bitte reinigen und bügeln Sie ihn!",
    "lv": "Molim vas, očistite ga i izglačajte!",
    "level": "Sätze"
  },
  {
    "de": "Wann wird das Kleid fertig sein?",
    "lv": "Kada će haljina biti gotova?",
    "level": "Sätze"
  },
  {
    "de": "Die Schuhe sind zu eng.",
    "lv": "Cipele su preuske.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Schuhe heute reparieren?",
    "lv": "Možete li danas popraviti cipele?",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich die Schuhe abholen?",
    "lv": "Kada mogu podići cipele?",
    "level": "Sätze"
  },
  {
    "de": "Meine Armbanduhr funktioniert nicht.",
    "lv": "Moj ručni sat ne radi.",
    "level": "Sätze"
  },
  {
    "de": "Sie geht fünf Minuten vor.",
    "lv": "On žuri pet minuta.",
    "level": "Sätze"
  },
  {
    "de": "Bist du kurzsichtig oder weitsichtig?",
    "lv": "Jesi li kratkovidan ili dalekovidan?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte eine Brille kaufen.",
    "lv": "Želio bih kupiti naočale.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie meine Brille reparieren?",
    "lv": "Možete li mi popraviti naočale?",
    "level": "Sätze"
  },
  {
    "de": "Das dauert nur eine Viertelstunde.",
    "lv": "To traje samo četvrt sata.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist mir zu hoch.",
    "lv": "Cijena mi je previsoka.",
    "level": "Sätze"
  },
  {
    "de": "Ich brauche zwei Fotos für meinen Pass.",
    "lv": "Trebaju mi dvije fotografije za putovnicu.",
    "level": "Sätze"
  },
  {
    "de": "Bitte packen Sie es ein und schicken Sie es mir nach Hause.",
    "lv": "Molim vas, zapakirajte to i pošaljite mi kući.",
    "level": "Sätze"
  },
  {
    "de": "Wir haben feste Preise.",
    "lv": "Imamo fiksne cijene.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, fotografieren Sie mich.",
    "lv": "Molim vas, fotografirajte me.",
    "level": "Sätze"
  },
  {
    "de": "Setzen Sie sich, schauen Sie gerade in die Kamera und bewegen Sie sich nicht!",
    "lv": "Sjednite, gledajte ravno u kameru i ne mičite se!",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich das Probebild sehen?",
    "lv": "Kada mogu vidjeti probnu snimku?",
    "level": "Sätze"
  },
  {
    "de": "Wann sind die Fotos fertig?",
    "lv": "Kada će fotografije biti gotove?",
    "level": "Sätze"
  },
  {
    "de": "Die Aufnahme ist gelungen.",
    "lv": "Snimka je uspjela.",
    "level": "Sätze"
  },
  {
    "de": "Die Fotos sind gut geworden.",
    "lv": "Fotografije su dobro ispale.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie das Foto auch vergrößern?",
    "lv": "Možete li i povećati fotografiju?",
    "level": "Sätze"
  },
  {
    "de": "Sind diese Steine echt?",
    "lv": "Je li ovo kamenje pravo?",
    "level": "Sätze"
  },
  {
    "de": "Ist das echtes Gold?",
    "lv": "Je li ovo pravo zlato?",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir bitte Trauringe.",
    "lv": "Pokažite mi, molim vas, vjenčano prstenje.",
    "level": "Sätze"
  },
  {
    "de": "Der Ring ist mir etwas zu weit.",
    "lv": "Prsten mi je malo prevelik.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann ihn enger machen.",
    "lv": "Mogu ga suziti.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Ring passt mir.",
    "lv": "Ovaj mi prsten pristaje.",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir schöne Geschenkideen.",
    "lv": "Pokažite mi lijepe ideje za darove.",
    "level": "Sätze"
  },
  {
    "de": "Wie gefallen dir diese Ohrringe?",
    "lv": "Kako ti se sviđaju ove naušnice?",
    "level": "Sätze"
  },
  {
    "de": "Diese Brosche ist wirklich schön.",
    "lv": "Ovaj je broš zaista lijep.",
    "level": "Sätze"
  },
  {
    "de": "Der Stein ist ein Saphir.",
    "lv": "Ovaj je kamen safir.",
    "level": "Sätze"
  },
  {
    "de": "Das ist kein echter Stein, das ist Glas.",
    "lv": "To nije pravi kamen, to je staklo.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Armband kann ich Ihnen besonders empfehlen.",
    "lv": "Ovu vam narukvicu mogu posebno preporučiti.",
    "level": "Sätze"
  },
  {
    "de": "Es ist besonders schön gearbeitet.",
    "lv": "Posebno je lijepo izrađena.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist nicht hoch.",
    "lv": "Cijena nije visoka.",
    "level": "Sätze"
  },
  {
    "de": "Bekomme ich die Schachtel gratis?",
    "lv": "Dobivam li kutiju besplatno?",
    "level": "Sätze"
  },
  {
    "de": "Alle Schmuckstücke sind gestempelt.",
    "lv": "Sav je nakit žigosan.",
    "level": "Sätze"
  },
  {
    "de": "Falls es meiner Frau nicht gefällt, kann ich es umtauschen?",
    "lv": "Ako se mojoj supruzi ne svidi, mogu li ga zamijeniti?",
    "level": "Sätze"
  },
  {
    "de": "Natürlich, jederzeit.",
    "lv": "Naravno, bilo kada.",
    "level": "Sätze"
  }
];

window.SENTENCE_ENTRIES = SENTENCE_ENTRIES;

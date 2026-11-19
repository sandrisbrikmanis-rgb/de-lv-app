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
    "lv": "Šta je?",
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
    "lv": "Sve ukazuje na kišu.",
    "level": "Sätze"
  },
  {
    "de": "Damit ist mir wenig gedient.",
    "lv": "To mi malo koristi.",
    "level": "Sätze"
  },
  {
    "de": "Er ist dienstlich verhindert.",
    "lv": "Službeno je spriječen.",
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
    "lv": "Prolaz zabranjen!",
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
    "lv": "Šta vi zapravo želite?",
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
    "lv": "Samo uobražavaš da si bolestan.",
    "level": "Sätze"
  },
  {
    "de": "Was fällt dir ein?",
    "lv": "Kako se usuđuješ? • Šta ti pada na pamet?",
    "level": "Sätze"
  },
  {
    "de": "Es war einmal.",
    "lv": "Bilo jednom.",
    "level": "Sätze"
  },
  {
    "de": "Steigen Sie bitte ein!",
    "lv": "Molim vas, uđite!",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie ein!",
    "lv": "Izvolite, uđite!",
    "level": "Sätze"
  },
  {
    "de": "Einzelnes hat mir dort gefallen.",
    "lv": "Neke stvari su mi se tamo svidjele.",
    "level": "Sätze"
  },
  {
    "de": "Es empfiehlt sich.",
    "lv": "Preporučuje se.",
    "level": "Sätze"
  },
  {
    "de": "Diese Flasche enthält Essig.",
    "lv": "U ovoj boci je sirće.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldigen Sie bitte!",
    "lv": "Izvinite, molim vas!",
    "level": "Sätze"
  },
  {
    "de": "Entweder... oder...",
    "lv": "Ili... ili...",
    "level": "Sätze"
  },
  {
    "de": "Wer war der Erste?",
    "lv": "Ko je bio prvi?",
    "level": "Sätze"
  },
  {
    "de": "Wer fehlt heute?",
    "lv": "Ko danas nedostaje?",
    "level": "Sätze"
  },
  {
    "de": "Was fehlt dir?",
    "lv": "Šta ti je?",
    "level": "Sätze"
  },
  {
    "de": "Wie heißen Sie?",
    "lv": "Kako se zovete?",
    "level": "Sätze"
  },
  {
    "de": "Was soll das heißen?",
    "lv": "Šta bi to trebalo značiti?",
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
    "lv": "Sastajemo se na željezničkoj stanici.",
    "level": "Sätze"
  },
  {
    "de": "Ich stimme dir teilweise zu.",
    "lv": "Djelimično se slažem s tobom.",
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
    "lv": "Biste li to mogli detaljnije objasniti?",
    "level": "Sätze"
  },
  {
    "de": "Was mich anbelangt,...",
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
    "lv": "Drugačije ne može.",
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
    "lv": "Molim te, pazi na saobraćaj.",
    "level": "Sätze"
  },
  {
    "de": "Darauf musst du achten.",
    "lv": "Na to moraš paziti.",
    "level": "Sätze"
  },
  {
    "de": "Heute mache ich es anders.",
    "lv": "Danas ću to uraditi drugačije.",
    "level": "Sätze"
  },
  {
    "de": "Wir warten auf den Bus.",
    "lv": "Čekamo autobus.",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt allein.",
    "lv": "On živi sam.",
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
    "lv": "On radi u odjelu prodaje.",
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
    "lv": "Želio bih to detaljnije analizirati.",
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
    "lv": "Slične probleme imali smo već i ranije.",
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
    "de": "Dieses Kleid ist akademisch gekleidet.",
    "lv": "Ova haljina je konzervativno elegantna.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre gerne Akkordeonmusik.",
    "lv": "Rado slušam muziku na harmonici.",
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
    "lv": "Idemo pješke do stanice.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schalte den Fernseher an.",
    "lv": "Molim te, upali televizor.",
    "level": "Sätze"
  },
  {
    "de": "Mein Computer ist abgestürzt.",
    "lv": "Računar mi se srušio.",
    "level": "Sätze"
  },
  {
    "de": "Am Wochenende gehe ich angeln.",
    "lv": "Za vikend idem na pecanje.",
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
    "lv": "Prihvatam tvoju ponudu.",
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
    "lv": "Zavisi.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Anlass.",
    "lv": "Tim povodom.",
    "level": "Sätze"
  },
  {
    "de": "Nehmen wir an, dass...",
    "lv": "Pretpostavimo da...",
    "level": "Sätze"
  },
  {
    "de": "Was hast du da angerichtet?",
    "lv": "Šta si to napravio?",
    "level": "Sätze"
  },
  {
    "de": "Bis ans Ende.",
    "lv": "Do kraja.",
    "level": "Sätze"
  },
  {
    "de": "Du glaubst mir anscheinend nicht.",
    "lv": "Izgleda da mi ne vjeruješ.",
    "level": "Sätze"
  },
  {
    "de": "Meiner Ansicht nach...",
    "lv": "Po mom mišljenju...",
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
    "lv": "Prijatno!",
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
    "lv": "Iznervirala me je.",
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
    "lv": "Iz tog razloga.",
    "level": "Sätze"
  },
  {
    "de": "Alle außer dir.",
    "lv": "Svi osim tebe.",
    "level": "Sätze"
  },
  {
    "de": "Auf Äußerlichkeiten Wert legen.",
    "lv": "Pridavati važnost vanjskom izgledu.",
    "level": "Sätze"
  },
  {
    "de": "Im äußersten Fall.",
    "lv": "U krajnjem slučaju.",
    "level": "Sätze"
  },
  {
    "de": "Äußerst wichtig.",
    "lv": "Izuzetno važno.",
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
    "lv": "Izraziti saučešće.",
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
    "lv": "Vršiti uticaj.",
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
    "lv": "Vozom.",
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
    "lv": "Dobio sam zadatak.",
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
    "lv": "Šta znači ova riječ?",
    "level": "Sätze"
  },
  {
    "de": "Unter der Bedingung, dass...",
    "lv": "Pod uslovom da...",
    "level": "Sätze"
  },
  {
    "de": "Sie sieht bedrückt aus.",
    "lv": "Izgleda potišteno.",
    "level": "Sätze"
  },
  {
    "de": "Hinweise befolgen.",
    "lv": "Pridržavati se uputstava.",
    "level": "Sätze"
  },
  {
    "de": "Befehle befolgen.",
    "lv": "Izvršavati naređenja.",
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
    "lv": "Sporo shvata.",
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
    "lv": "Prolomio se gromoglasan aplauz.",
    "level": "Sätze"
  },
  {
    "de": "Beifall finden.",
    "lv": "Naići na odobravanje.",
    "level": "Sätze"
  },
  {
    "de": "Beileid aussprechen.",
    "lv": "Izraziti saučešće.",
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
    "lv": "Dati doprinos.",
    "level": "Sätze"
  },
  {
    "de": "Jemandes Bekanntschaft machen.",
    "lv": "Upoznati nekoga.",
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
    "lv": "Čuvati šutnju.",
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
    "lv": "Izvući žrtve nesreće.",
    "level": "Sätze"
  },
  {
    "de": "Bericht erstatten.",
    "lv": "Podnijeti izvještaj.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind besetzt.",
    "lv": "Sva mjesta su zauzeta.",
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
    "lv": "Brz oporavak!",
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
    "de": "Seine Aufgabe besteht darin...",
    "lv": "Njegov zadatak sastoji se u tome da...",
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
    "lv": "Doći u posjetu.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch sein.",
    "lv": "Biti u posjeti. • Biti u gostima.",
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
    "de": "Bezüglich auf etwas.",
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
    "lv": "Hvala lijepo!",
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
    "de": "So dass...",
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
    "lv": "Ne spuštaj glavu!",
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
    "lv": "po porijeklu • po prirodi",
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
    "lv": "Šta ti je?",
    "level": "Sätze"
  },
  {
    "de": "Gestatten Sie bitte!",
    "lv": "Dozvolite, molim vas!",
    "level": "Sätze"
  },
  {
    "de": "Ist es gestattet zu rauchen?",
    "lv": "Je li dozvoljeno pušiti?",
    "level": "Sätze"
  },
  {
    "de": "Ich muss gestehen, dass...",
    "lv": "Moram priznati da...",
    "level": "Sätze"
  },
  {
    "de": "gestern früh",
    "lv": "juče ujutro",
    "level": "Sätze"
  },
  {
    "de": "gestern Abend",
    "lv": "sinoć",
    "level": "Sätze"
  },
  {
    "de": "Es ist mir gleichgültig, ob...",
    "lv": "Svejedno mi je da li...",
    "level": "Sätze"
  },
  {
    "de": "Was ist geschehen?",
    "lv": "Šta se dogodilo?",
    "level": "Sätze"
  },
  {
    "de": "Mach keine Geschichten!",
    "lv": "Ne pravi gluposti!",
    "level": "Sätze"
  },
  {
    "de": "Geschweige denn...",
    "lv": "A kamoli...",
    "level": "Sätze"
  },
  {
    "de": "Gehen Sie geradeaus!",
    "lv": "Idite pravo!",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es Ihnen?",
    "lv": "Kako ste?",
    "level": "Sätze"
  },
  {
    "de": "Frag ihn gelegentlich, ob...",
    "lv": "Pitaj ga, kad se ukaže prilika, da li...",
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
    "lv": "Šta ima novo?",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Brief folgt, dass...",
    "lv": "Iz ovog pisma proizlazi da...",
    "level": "Sätze"
  },
  {
    "de": "Fahre fort!",
    "lv": "Nastavi!",
    "level": "Sätze"
  },
  {
    "de": "Er ist kein Freund von...",
    "lv": "On nije ljubitelj...",
    "level": "Sätze"
  },
  {
    "de": "Es erwies sich, dass...",
    "lv": "Ispostavilo se da...",
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
    "de": "Es jammert mich zu sehen...",
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
    "lv": "Kako mogu doći do željezničke stanice?",
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
    "lv": "Dozvolite da vam pomognem!",
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
    "lv": "Ostajte zdravo!",
    "level": "Sätze"
  },
  {
    "de": "Was ist los?",
    "lv": "Šta je bilo?",
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
    "lv": "Učiti njemački može biti naporno.",
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
    "lv": "Ovdje se mnogo toga dešava.",
    "level": "Sätze"
  },
  {
    "de": "Halt die Luft an!",
    "lv": "Ušuti! • Ne pretjeruj!",
    "level": "Sätze"
  },
  {
    "de": "Was machst du?",
    "lv": "Šta radiš?",
    "level": "Sätze"
  },
  {
    "de": "Sag mal!",
    "lv": "Hajde, reci!",
    "level": "Sätze"
  },
  {
    "de": "Was meinen Sie damit?",
    "lv": "Šta time želite reći? • Kako to mislite?",
    "level": "Sätze"
  },
  {
    "de": "Wir gehen mit Ihnen.",
    "lv": "Idemo s vama.",
    "level": "Sätze"
  },
  {
    "de": "Ich fahre mit der Eisenbahn.",
    "lv": "Putujem vozom.",
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
    "lv": "Ne sviđa mi se to.",
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
    "lv": "On je u pravu.",
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
    "lv": "Ponestaje mi strpljenja.",
    "level": "Sätze"
  },
  {
    "de": "Man sagt, dass...",
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
    "lv": "Izvolite!",
    "level": "Sätze"
  },
  {
    "de": "Was bin ich schuldig?",
    "lv": "Koliko sam dužan?",
    "level": "Sätze"
  },
  {
    "de": "Vor dem Gebrauch schütteln!",
    "lv": "Prije upotrebe promućkati!",
    "level": "Sätze"
  },
  {
    "de": "Sehen Sie mal!",
    "lv": "Pogledajte samo!",
    "level": "Sätze"
  },
  {
    "de": "Wie sehr auch...",
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
    "lv": "Šta da radim?",
    "level": "Sätze"
  },
  {
    "de": "im Sommer",
    "lv": "ljeti",
    "level": "Sätze"
  },
  {
    "de": "Nicht nur..., sondern auch...",
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
    "de": "Statt zu...",
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
    "lv": "Ovaj šešir joj dobro stoji.",
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
    "lv": "Tako je običaj.",
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
    "lv": "naime",
    "level": "Sätze"
  },
  {
    "de": "Auf Unkosten von...",
    "lv": "Na račun...",
    "level": "Sätze"
  },
  {
    "de": "Er saß unter den Zuschauern.",
    "lv": "Sjedio je među gledaocima.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ursache!",
    "lv": "Nema na čemu!",
    "level": "Sätze"
  },
  {
    "de": "Es geschah, wie verabredet.",
    "lv": "Desilo se kako je bilo dogovoreno.",
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
    "lv": "Braniti svoje mišljenje.",
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
    "lv": "On je po rođenju Berlinčanin.",
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
    "lv": "Prije četrnaest dana.",
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
    "de": "Unter der Voraussetzung, dass...",
    "lv": "Pod uslovom da...",
    "level": "Sätze"
  },
  {
    "de": "Unter dem Vorbehalt.",
    "lv": "Uz rezervu.",
    "level": "Sätze"
  },
  {
    "de": "Vorhanden sein.",
    "lv": "Postojati. • Biti na raspolaganju.",
    "level": "Sätze"
  },
  {
    "de": "In der vorigen Woche.",
    "lv": "Prošle sedmice.",
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
    "de": "Er hat Vorliebe für Literatur.",
    "lv": "On ima sklonost prema književnosti.",
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
    "lv": "Tokom godine.",
    "level": "Sätze"
  },
  {
    "de": "Während des Krieges.",
    "lv": "Tokom rata.",
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
    "lv": "Šta želite?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein...?",
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
    "lv": "Do daljnjeg.",
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
    "lv": "Ko je tamo?",
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
    "de": "Er ist wert, dass...",
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
    "lv": "Uključiti se u takmičenje.",
    "level": "Sätze"
  },
  {
    "de": "Um die Wette laufen.",
    "lv": "Trkati se.",
    "level": "Sätze"
  },
  {
    "de": "Was gilt die Wette?",
    "lv": "U šta se kladimo?",
    "level": "Sätze"
  },
  {
    "de": "Wie wird das Wetter?",
    "lv": "Kakvo će biti vrijeme?",
    "level": "Sätze"
  },
  {
    "de": "Wettkampf im Turnen.",
    "lv": "Takmičenje u gimnastici.",
    "level": "Sätze"
  },
  {
    "de": "Wider meinen Willen.",
    "lv": "Protiv moje volje.",
    "level": "Sätze"
  },
  {
    "de": "Widerspruch erheben.",
    "lv": "Protestovati. • Uložiti prigovor.",
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
    "lv": "Promaja je.",
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
    "lv": "Sretna Nova godina!",
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
    "lv": "Veoma sam vam zahvalan.",
    "level": "Sätze"
  },
  {
    "de": "Setzt euch bitte hin!",
    "lv": "Sjednite, molim vas!",
    "level": "Sätze"
  },
  {
    "de": "Ben, komm bitte an die Tafel!",
    "lv": "Bene, dođi, molim te, do table!",
    "level": "Sätze"
  },
  {
    "de": "Schlagt bitte die Lehrbücher auf!",
    "lv": "Otvorite, molim vas, udžbenike!",
    "level": "Sätze"
  },
  {
    "de": "Geht bitte in die Sporthalle!",
    "lv": "Idite, molim vas, u sportsku salu!",
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
    "lv": "Hvala puno!",
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
    "lv": "Jonase, donesi, molim te, sveske!",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte zurück an deinen Platz!",
    "lv": "Vrati se, molim te, na svoje mjesto!",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb acht.",
    "lv": "Sada je pola osam.",
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
    "lv": "Ne zaboravi provjetriti sobu!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist das Handtuch?",
    "lv": "Gdje je peškir?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mir die Zähne putzen.",
    "lv": "Želim oprati zube.",
    "level": "Sätze"
  },
  {
    "de": "Mit was putzt du dir die Zähne?",
    "lv": "Čime pereš zube?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mich anziehen.",
    "lv": "Želim se obući.",
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
    "lv": "Šta ima novo?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein Chaos hier!",
    "lv": "Kakav haos ovdje!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich beim Aufräumen helfen?",
    "lv": "Smijem li pomoći oko pospremanja?",
    "level": "Sätze"
  },
  {
    "de": "Was trinkst du morgens, Kaffee oder Tee?",
    "lv": "Šta piješ ujutro, kafu ili čaj?",
    "level": "Sätze"
  },
  {
    "de": "Gewöhnlich trinke ich morgens eine Tasse Kaffee.",
    "lv": "Obično ujutro popijem šoljicu kafe.",
    "level": "Sätze"
  },
  {
    "de": "Am liebsten trinke ich schwarzen Kaffee.",
    "lv": "Najradije pijem crnu kafu.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, hast du gut geschlafen?",
    "lv": "Dobro jutro, jesi li dobro spavao?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin noch sehr müde.",
    "lv": "Još sam jako umoran.",
    "level": "Sätze"
  },
  {
    "de": "Willst du Kaffee oder Milch?",
    "lv": "Hoćeš li kafu ili mlijeko?",
    "level": "Sätze"
  },
  {
    "de": "Gib mir bitte ein Brötchen mit Käse.",
    "lv": "Daj mi, molim te, pecivo sa sirom.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss jetzt los!",
    "lv": "Sad moram ići!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss dein Frühstück nicht!",
    "lv": "Ne zaboravi doručak!",
    "level": "Sätze"
  },
  {
    "de": "Klara, deck bitte den Tisch!",
    "lv": "Klara, postavi sto, molim te!",
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
    "lv": "Šta ima danas za ručak?",
    "level": "Sätze"
  },
  {
    "de": "Wie schmeckt dir die Suppe?",
    "lv": "Kako ti se sviđa supa?",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt ist sie etwas zu salzig.",
    "lv": "Iskreno rečeno, malo je preslana.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dir ein Stück Brot geben?",
    "lv": "Smijem li ti dati krišku hljeba?",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich habe schon.",
    "lv": "Hvala, već imam.",
    "level": "Sätze"
  },
  {
    "de": "Das Fleisch schmeckt ausgezeichnet.",
    "lv": "Meso je odličnog ukusa.",
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
    "lv": "Pa navrati danas na ručak!",
    "level": "Sätze"
  },
  {
    "de": "Setzen wir uns an den Tisch.",
    "lv": "Sjednimo za sto.",
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
    "lv": "Kiša prestaje.",
    "level": "Sätze"
  },
  {
    "de": "Die Sonne scheint wieder.",
    "lv": "Sunce opet sija.",
    "level": "Sätze"
  },
  {
    "de": "Es ist sehr warm.",
    "lv": "Jako je toplo.",
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
    "lv": "Sada je pola sedam.",
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
    "lv": "Danas je jedanaesti juli.",
    "level": "Sätze"
  },
  {
    "de": "Was machst du gewöhnlich am Abend?",
    "lv": "Šta obično radiš uveče?",
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
    "lv": "Izvini, želim s tobom o nečemu razgovarati.",
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
    "lv": "Došao sam po tebe da idemo u šetnju.",
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
    "lv": "Izvini, gdje je najbliža stanica metroa?",
    "level": "Sätze"
  },
  {
    "de": "Welcher ist der kürzeste Weg?",
    "lv": "Koji je najkraći put?",
    "level": "Sätze"
  },
  {
    "de": "Geh hier die zweite Straße links und dann immer geradeaus.",
    "lv": "Ovdje skreni u drugu ulicu lijevo, a onda idi samo pravo.",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich am schnellsten zum Bahnhof?",
    "lv": "Kako ću najbrže stići do željezničke stanice?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe vor, morgen zu verreisen.",
    "lv": "Namjeravam sutra otputovati.",
    "level": "Sätze"
  },
  {
    "de": "Wohin willst du fahren?",
    "lv": "Kuda želiš ići?",
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
    "lv": "Kada polazi brod?",
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
    "lv": "Ne zaboravi pasoš!",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, den Koffer zu packen.",
    "lv": "Vrijeme je za pakovanje kofera.",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt um halb sieben ab.",
    "lv": "Voz polazi u pola sedam.",
    "level": "Sätze"
  },
  {
    "de": "Hol mir bitte ein Taxi, ich verpasse sonst den Zug!",
    "lv": "Pozovi mi, molim te, taksi, inače ću zakasniti na voz!",
    "level": "Sätze"
  },
  {
    "de": "Fahr bitte zum Bahnhof!",
    "lv": "Vozi, molim te, na željezničku stanicu!",
    "level": "Sätze"
  },
  {
    "de": "Ich muss mich beeilen.",
    "lv": "Moram požuriti.",
    "level": "Sätze"
  },
  {
    "de": "Ist der Schalter schon offen?",
    "lv": "Je li šalter već otvoren?",
    "level": "Sätze"
  },
  {
    "de": "Eine Fahrkarte nach Köln, bitte.",
    "lv": "Jednu kartu za Keln, molim.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt der Zug ab?",
    "lv": "Kad polazi voz?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt gleich ab.",
    "lv": "Voz samo što nije krenuo.",
    "level": "Sätze"
  },
  {
    "de": "Muss ich in Koblenz umsteigen?",
    "lv": "Moram li presjesti u Koblenzu?",
    "level": "Sätze"
  },
  {
    "de": "Ja, dort musst du umsteigen.",
    "lv": "Da, tamo moraš presjesti.",
    "level": "Sätze"
  },
  {
    "de": "Ist dieser Platz frei?",
    "lv": "Je li ovo mjesto slobodno?",
    "level": "Sätze"
  },
  {
    "de": "Nein, hier sitzt niemand.",
    "lv": "Ne, ovdje niko ne sjedi.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der Bahnsteigkartenautomat?",
    "lv": "Gdje je automat za peronske karte?",
    "level": "Sätze"
  },
  {
    "de": "Stell mein Handgepäck ins Gepäcknetz.",
    "lv": "Stavi moj ručni prtljag u mrežu za prtljag.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das Fenster aufmachen?",
    "lv": "Mogu li otvoriti prozor?",
    "level": "Sätze"
  },
  {
    "de": "Es zieht, schließ bitte das Fenster!",
    "lv": "Promaja je, zatvori, molim te, prozor!",
    "level": "Sätze"
  },
  {
    "de": "Welche ist die nächste Station?",
    "lv": "Koja je sljedeća stanica?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange hält der Zug?",
    "lv": "Koliko dugo voz stoji?",
    "level": "Sätze"
  },
  {
    "de": "Wo muss ich umsteigen?",
    "lv": "Gdje moram presjesti?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug hat Verspätung.",
    "lv": "Voz kasni.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Wagen ist für Nichtraucher.",
    "lv": "Ovaj vagon je za nepušače.",
    "level": "Sätze"
  },
  {
    "de": "Wir fahren jetzt über die Grenze.",
    "lv": "Sada prelazimo granicu.",
    "level": "Sätze"
  },
  {
    "de": "Hast du etwas zu verzollen?",
    "lv": "Imaš li šta prijaviti na carini?",
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
    "lv": "Sobu sa dva kreveta, molim.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Zimmer pro Nacht?",
    "lv": "Koliko soba košta po noći?",
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
    "lv": "Gdje je gradska biblioteka?",
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
    "lv": "Idemo li autobusom ili metroom?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die nächste Bushaltestelle?",
    "lv": "Gdje je najbliža autobuska stanica?",
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
    "lv": "Ovo je odličnog ukusa!",
    "level": "Sätze"
  },
  {
    "de": "Kellner, zahlen bitte!",
    "lv": "Konobaru, račun, molim!",
    "level": "Sätze"
  },
  {
    "de": "Ich gehe ins Café einen Kaffee trinken.",
    "lv": "Idem u kafić na kafu.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mitkommen?",
    "lv": "Hoćeš li poći sa mnom?",
    "level": "Sätze"
  },
  {
    "de": "Eine Tasse Kaffee mit Milch, bitte!",
    "lv": "Šoljicu kafe s mlijekom, molim!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneller, ich habe es eilig!",
    "lv": "Brže, molim, žurim se!",
    "level": "Sätze"
  },
  {
    "de": "Lass deinen Kaffee nicht kalt werden!",
    "lv": "Nemoj da ti se kafa ohladi!",
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
    "lv": "Gdje je najbliže poštansko sanduče?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Post?",
    "lv": "Gdje je pošta?",
    "level": "Sätze"
  },
  {
    "de": "Erinnere mich morgen daran zu schreiben!",
    "lv": "Podsjeti me sutra da napišem pismo!",
    "level": "Sätze"
  },
  {
    "de": "Werfen Sie bitte diesen Brief in den Briefkasten.",
    "lv": "Molim vas, ubacite ovo pismo u poštansko sanduče.",
    "level": "Sätze"
  },
  {
    "de": "Hallo, hier spricht Emma.",
    "lv": "Halo, ovdje je Emma.",
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
    "lv": "Pozadi, molim, ne prekratko.",
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
    "lv": "Brzo, molim, zavjesa samo što se nije podigla!",
    "level": "Sätze"
  },
  {
    "de": "Der Vorhang fällt.",
    "lv": "Zavjesa se spušta.",
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
    "lv": "Kolika je kirija?",
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
    "lv": "Mia, spakuj, molim te, stvari u kutije!",
    "level": "Sätze"
  },
  {
    "de": "Hast du alles eingepackt?",
    "lv": "Jesi li sve spakovao?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe mit meinem Freund in Kontakt.",
    "lv": "U kontaktu sam sa svojim prijateljem.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir ins Theater?",
    "lv": "Hoćemo li u pozorište?",
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
    "lv": "Sada opet možemo sve srediti.",
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
    "lv": "Kad je lijepo vrijeme, idem na pecanje.",
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
    "lv": "Curi mi nos.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist schwindlig.",
    "lv": "Vrti mi se u glavi.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Arzt gehen.",
    "lv": "Moram ići ljekaru.",
    "level": "Sätze"
  },
  {
    "de": "Leg dich ins Bett!",
    "lv": "Lezi u krevet!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Fieber?",
    "lv": "Imaš li temperaturu?",
    "level": "Sätze"
  },
  {
    "de": "Gestern hatte ich erhöhte Temperatur.",
    "lv": "Juče sam imao povišenu temperaturu.",
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
    "lv": "Prema riječima ljekara, uskoro će opet biti zdrav.",
    "level": "Sätze"
  },
  {
    "de": "Ich will meine Wohnung neu möblieren.",
    "lv": "Želim iznova namjestiti svoj stan.",
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
    "lv": "Noah je za dvije sedmice naučio plivati.",
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
    "lv": "Već godinu dana idem na časove njemačkog.",
    "level": "Sätze"
  },
  {
    "de": "Ich suche immer Gelegenheit, Deutsch zu sprechen.",
    "lv": "Uvijek tražim priliku da govorim njemački.",
    "level": "Sätze"
  },
  {
    "de": "Ist das Buch noch vorrätig?",
    "lv": "Je li ta knjiga još na stanju?",
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
    "lv": "Možete li mi izmjeriti pola kilograma?",
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
    "lv": "Izmjerite mi, molim vas, dva kilograma.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch Karotten?",
    "lv": "Imate li i mrkve?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie gutes Rindfleisch?",
    "lv": "Imate li dobru govedinu?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir zwei Kilo Hackfleisch.",
    "lv": "Dajte mi dva kilograma mljevenog mesa.",
    "level": "Sätze"
  },
  {
    "de": "Ein Laib Brot, bitte, aber nicht zu knusprig.",
    "lv": "Jedan hljeb, molim, ali ne previše hrskav.",
    "level": "Sätze"
  },
  {
    "de": "Das Brot ist frisch gebacken.",
    "lv": "Hljeb je svježe pečen.",
    "level": "Sätze"
  },
  {
    "de": "Was für Obst haben Sie heute?",
    "lv": "Koje voće imate danas?",
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
    "lv": "Kruške su veoma skupe.",
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
    "lv": "Možete li namještaj dostaviti u moj stan?",
    "level": "Sätze"
  },
  {
    "de": "Bitte an der Kasse zahlen.",
    "lv": "Molimo platiti na kasi.",
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
    "lv": "Imate li i druge uzorke?",
    "level": "Sätze"
  },
  {
    "de": "Diese Farbe gefällt mir nicht.",
    "lv": "Ova boja mi se ne sviđa.",
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
    "lv": "Odijelo dobro stoji.",
    "level": "Sätze"
  },
  {
    "de": "Die Hose ist zu lang.",
    "lv": "Pantalone su preduge.",
    "level": "Sätze"
  },
  {
    "de": "Bitte reinigen und bügeln Sie ihn!",
    "lv": "Molim vas, očistite ga i ispeglajte!",
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
    "lv": "Kada mogu preuzeti cipele?",
    "level": "Sätze"
  },
  {
    "de": "Meine Armbanduhr funktioniert nicht.",
    "lv": "Moj ručni sat ne radi.",
    "level": "Sätze"
  },
  {
    "de": "Sie geht fünf Minuten vor.",
    "lv": "Žuri pet minuta.",
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
    "lv": "Trebaju mi dvije fotografije za pasoš.",
    "level": "Sätze"
  },
  {
    "de": "Bitte packen Sie es ein und schicken Sie es mir nach Hause.",
    "lv": "Molim vas, zapakujte to i pošaljite mi kući.",
    "level": "Sätze"
  },
  {
    "de": "Wir haben feste Preise.",
    "lv": "Imamo fiksne cijene.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, fotografieren Sie mich.",
    "lv": "Molim vas, slikajte me.",
    "level": "Sätze"
  },
  {
    "de": "Setzen Sie sich, schauen Sie gerade in die Kamera und bewegen Sie sich nicht!",
    "lv": "Sjednite, gledajte pravo u kameru i ne mičite se!",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich das Probebild sehen?",
    "lv": "Kada mogu vidjeti probnu sliku?",
    "level": "Sätze"
  },
  {
    "de": "Wann sind die Fotos fertig?",
    "lv": "Kada će fotografije biti gotove?",
    "level": "Sätze"
  },
  {
    "de": "Die Aufnahme ist gelungen.",
    "lv": "Snimak je uspio.",
    "level": "Sätze"
  },
  {
    "de": "Die Fotos sind gut geworden.",
    "lv": "Fotografije su dobro ispale.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie das Foto auch vergrößern?",
    "lv": "Možete li i uvećati fotografiju?",
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
    "lv": "Pokažite mi, molim vas, burme.",
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
    "lv": "Ovaj prsten mi pristaje.",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir schöne Geschenkideen.",
    "lv": "Pokažite mi lijepe ideje za poklone.",
    "level": "Sätze"
  },
  {
    "de": "Wie gefallen dir diese Ohrringe?",
    "lv": "Kako ti se sviđaju ove minđuše?",
    "level": "Sätze"
  },
  {
    "de": "Diese Brosche ist wirklich schön.",
    "lv": "Ovaj broš je zaista lijep.",
    "level": "Sätze"
  },
  {
    "de": "Der Stein ist ein Saphir.",
    "lv": "Ovaj kamen je safir.",
    "level": "Sätze"
  },
  {
    "de": "Das ist kein echter Stein, das ist Glas.",
    "lv": "To nije pravi kamen, to je staklo.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Armband kann ich Ihnen besonders empfehlen.",
    "lv": "Ovu narukvicu vam mogu posebno preporučiti.",
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
    "lv": "Dobijam li kutiju besplatno?",
    "level": "Sätze"
  },
  {
    "de": "Alle Schmuckstücke sind gestempelt.",
    "lv": "Sav nakit je žigosan.",
    "level": "Sätze"
  },
  {
    "de": "Falls es meiner Frau nicht gefällt, kann ich es umtauschen?",
    "lv": "Ako se mojoj ženi ne svidi, mogu li to zamijeniti?",
    "level": "Sätze"
  },
  {
    "de": "Natürlich, jederzeit.",
    "lv": "Naravno, bilo kada.",
    "level": "Sätze"
  }
];

window.SENTENCE_ENTRIES = SENTENCE_ENTRIES;

const SENTENCE_ENTRIES = [
  {
    "de": "Hüte dich davor!",
    "lv": "Čuvajte se toga!",
    "level": "Sätze"
  },
  {
    "de": "Wenn nichts dazwischenkommt.",
    "lv": "Ako ništa ne smeta. • Ako sve bude po planu.",
    "level": "Sätze"
  },
  {
    "de": "Das kann ich mir denken!",
    "lv": "Znam to!",
    "level": "Sätze"
  },
  {
    "de": "Ist er denn krank?",
    "lv": "Je li onda bolestan?",
    "level": "Sätze"
  },
  {
    "de": "Was denn?",
    "lv": "Šta onda?",
    "level": "Sätze"
  },
  {
    "de": "Desto mehr.",
    "lv": "Što više.",
    "level": "Sätze"
  },
  {
    "de": "Je mehr, desto besser.",
    "lv": "Što više to bolje.",
    "level": "Sätze"
  },
  {
    "de": "Alles deutet auf Regen.",
    "lv": "Sve ukazuje na slučaj.",
    "level": "Sätze"
  },
  {
    "de": "Damit ist mir wenig gedient.",
    "lv": "Nema smisla za mene.",
    "level": "Sätze"
  },
  {
    "de": "Er ist dienstlich verhindert.",
    "lv": "Ne može doći zbog posla.",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie doch!",
    "lv": "Govori!",
    "level": "Sätze"
  },
  {
    "de": "Es donnert.",
    "lv": "Grom grmi.",
    "level": "Sätze"
  },
  {
    "de": "Doppelt so groß.",
    "lv": "Duplo veći.",
    "level": "Sätze"
  },
  {
    "de": "Von dort.",
    "lv": "Odatle.",
    "level": "Sätze"
  },
  {
    "de": "Die Zeit drängt.",
    "lv": "Vrijeme ističe.",
    "level": "Sätze"
  },
  {
    "de": "Ihn drücken Sorgen.",
    "lv": "Preplavi ga briga.",
    "level": "Sätze"
  },
  {
    "de": "Hast du das Buch durchgearbeitet?",
    "lv": "Jeste li pažljivo pregledali knjigu?",
    "level": "Sätze"
  },
  {
    "de": "Kein Durchgang!",
    "lv": "Nemojte prolaziti! • Izlaz zatvoren!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich Sie bitten?",
    "lv": "Mogu li te pitati",
    "level": "Sätze"
  },
  {
    "de": "Ich bin durstig.",
    "lv": "Žedan sam.",
    "level": "Sätze"
  },
  {
    "de": "Eben das meine ich.",
    "lv": "Upravo na to mislim.",
    "level": "Sätze"
  },
  {
    "de": "Es ist ganz egal.",
    "lv": "To uopšte nije važno.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie eigentlich?",
    "lv": "Šta stvarno želiš?",
    "level": "Sätze"
  },
  {
    "de": "Eilt es mit dieser Sache?",
    "lv": "Da li je ovo hitno?",
    "level": "Sätze"
  },
  {
    "de": "Eilt sehr!",
    "lv": "Veoma hitno!",
    "level": "Sätze"
  },
  {
    "de": "Ich habe es eilig.",
    "lv": "Ja sam u žurbi.",
    "level": "Sätze"
  },
  {
    "de": "Du bildest dir nur ein, krank zu sein.",
    "lv": "Vi samo zamislite da ste bolesni.",
    "level": "Sätze"
  },
  {
    "de": "Was fällt dir ein?",
    "lv": "Šta ti pada na pamet?",
    "level": "Sätze"
  },
  {
    "de": "Es war einmal.",
    "lv": "Jednom je bilo.",
    "level": "Sätze"
  },
  {
    "de": "Steigen Sie bitte ein!",
    "lv": "Molim vas uđite!",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie ein!",
    "lv": "Molim vas uđite!",
    "level": "Sätze"
  },
  {
    "de": "Einzelnes hat mir dort gefallen.",
    "lv": "Sviđale su mi se neke stvari tamo.",
    "level": "Sätze"
  },
  {
    "de": "Es empfiehlt sich.",
    "lv": "Preporučuje se.",
    "level": "Sätze"
  },
  {
    "de": "Diese Flasche enthält Essig.",
    "lv": "Ova boca sadrži sirće.",
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
    "lv": "Ko nije došao danas?",
    "level": "Sätze"
  },
  {
    "de": "Was fehlt dir?",
    "lv": "Šta nije u redu s tobom?",
    "level": "Sätze"
  },
  {
    "de": "Wie heißen Sie?",
    "lv": "Kako se zoveš?",
    "level": "Sätze"
  },
  {
    "de": "Was soll das heißen?",
    "lv": "Šta to znači?",
    "level": "Sätze"
  },
  {
    "de": "Bitte treten Sie näher heran!",
    "lv": "Molim te priđi bliže!",
    "level": "Sätze"
  },
  {
    "de": "Heraus mit der Sprache!",
    "lv": "Pričaj! • Priče!",
    "level": "Sätze"
  },
  {
    "de": "im Herbst",
    "lv": "U jesen",
    "level": "Sätze"
  },
  {
    "de": "Meine Herrschaften!",
    "lv": "Dame i gospodo!",
    "level": "Sätze"
  },
  {
    "de": "von heute an",
    "lv": "Počevši od danas",
    "level": "Sätze"
  },
  {
    "de": "heute früh",
    "lv": "Jutros",
    "level": "Sätze"
  },
  {
    "de": "heute Nacht",
    "lv": "Sinoć",
    "level": "Sätze"
  },
  {
    "de": "Zu Hilfe!",
    "lv": "Upomoć!",
    "level": "Sätze"
  },
  {
    "de": "Ich lerne jeden Tag Deutsch.",
    "lv": "Učim njemački svaki dan.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das bitte wiederholen?",
    "lv": "Možete li to ponoviti, molim vas?",
    "level": "Sätze"
  },
  {
    "de": "Wir treffen uns am Bahnhof.",
    "lv": "Nalazimo se na željezničkoj stanici.",
    "level": "Sätze"
  },
  {
    "de": "Ich stimme dir teilweise zu.",
    "lv": "Delimično se slazem sa tobom.",
    "level": "Sätze"
  },
  {
    "de": "Diese Entscheidung hat weitreichende Folgen.",
    "lv": "Ova odluka ima dalekosežne posljedice.",
    "level": "Sätze"
  },
  {
    "de": "Man sollte mehrere Perspektiven berücksichtigen.",
    "lv": "Trebalo bi razmotriti nekoliko perspektiva.",
    "level": "Sätze"
  },
  {
    "de": "Könnten Sie das näher erläutern?",
    "lv": "Možete li ovo detaljnije objasniti?",
    "level": "Sätze"
  },
  {
    "de": "Was mich anbelangt,...",
    "lv": "Sto se mene tice...",
    "level": "Sätze"
  },
  {
    "de": "Wie alt sind Sie?",
    "lv": "Koliko imaš godina?",
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
    "lv": "Nema drugog načina.",
    "level": "Sätze"
  },
  {
    "de": "Rufen Sie mich an.",
    "lv": "Zovi me.",
    "level": "Sätze"
  },
  {
    "de": "Bitte stellen Sie das Radio ab.",
    "lv": "Molimo isključite radio.",
    "level": "Sätze"
  },
  {
    "de": "Achte bitte auf den Verkehr.",
    "lv": "Molimo obratite pažnju na saobraćaj.",
    "level": "Sätze"
  },
  {
    "de": "Darauf musst du achten.",
    "lv": "Trebalo bi obratiti pažnju na to.",
    "level": "Sätze"
  },
  {
    "de": "Heute mache ich es anders.",
    "lv": "Danas ću to učiniti drugačije.",
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
    "lv": "Čekaću da kiša prestane.",
    "level": "Sätze"
  },
  {
    "de": "Er arbeitet in der Verkaufsabteilung.",
    "lv": "Radi u odjelu prodaje.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin allergisch gegen Katzen.",
    "lv": "Alergična sam na mačke.",
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
    "lv": "Želim to preciznije analizirati.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte den Vertrag ändern.",
    "lv": "Želim da promenim ugovor.",
    "level": "Sätze"
  },
  {
    "de": "Er ändert ständig seine Meinung.",
    "lv": "Stalno mijenja svoje mišljenje.",
    "level": "Sätze"
  },
  {
    "de": "Ähnliche Probleme hatten wir schon früher.",
    "lv": "Imali smo sličnih problema i ranije.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ahnung!",
    "lv": "Nemam pojma!",
    "level": "Sätze"
  },
  {
    "de": "Hör auf zu jammern.",
    "lv": "Prestani da se žališ.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Kleid ist akademisch gekleidet.",
    "lv": "Ova haljina je stilski konzervativna.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre gerne Akkordeonmusik.",
    "lv": "Volim da slušam muziku na harmonici.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das Gerät anklicken?",
    "lv": "Možete li kliknuti na uređaj?",
    "level": "Sätze"
  },
  {
    "de": "Bitte öffne die Datei und klicke darauf.",
    "lv": "Otvorite datoteku i kliknite na nju.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe einen Unfall gehabt.",
    "lv": "Bio sam u nesreći.",
    "level": "Sätze"
  },
  {
    "de": "Wir laufen zum Bahnhof.",
    "lv": "Idemo na stanicu.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schalte den Fernseher an.",
    "lv": "Molimo uključite TV.",
    "level": "Sätze"
  },
  {
    "de": "Mein Computer ist abgestürzt.",
    "lv": "Moj kompjuter se srušio.",
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
    "lv": "Možeš li me nazvati kasnije",
    "level": "Sätze"
  },
  {
    "de": "Bitte nimm meinen Vorschlag an.",
    "lv": "Prihvatite moj prijedlog.",
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
    "lv": "Bojim se paukova.",
    "level": "Sätze"
  },
  {
    "de": "Keine Angst, alles wird gut.",
    "lv": "Ne plašite se, sve će biti u redu.",
    "level": "Sätze"
  },
  {
    "de": "Anklang finden.",
    "lv": "Nađi eho. • Pronađite odzivnost",
    "level": "Sätze"
  },
  {
    "de": "Es kommt darauf an.",
    "lv": "Zavisi od toga.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Anlass.",
    "lv": "Zbog ovog vremena. • U tom pogledu",
    "level": "Sätze"
  },
  {
    "de": "Nehmen wir an, dass...",
    "lv": "Pretpostavimo da...",
    "level": "Sätze"
  },
  {
    "de": "Was hast du da angerichtet?",
    "lv": "Šta si radio tamo",
    "level": "Sätze"
  },
  {
    "de": "Bis ans Ende.",
    "lv": "Do kraja.",
    "level": "Sätze"
  },
  {
    "de": "Du glaubst mir anscheinend nicht.",
    "lv": "Izgleda da mi ne veruješ.",
    "level": "Sätze"
  },
  {
    "de": "Meiner Ansicht nach...",
    "lv": "Po mom misljenju...",
    "level": "Sätze"
  },
  {
    "de": "Stell dich nicht so an!",
    "lv": "Ne pretvaraj se!",
    "level": "Sätze"
  },
  {
    "de": "An die Arbeit gehen.",
    "lv": "Na posao.",
    "level": "Sätze"
  },
  {
    "de": "Außer Atem sein.",
    "lv": "Ostati bez daha.",
    "level": "Sätze"
  },
  {
    "de": "Guten Appetit!",
    "lv": "Dobar apetit!",
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
    "lv": "Molim vas otvorite vrata!",
    "level": "Sätze"
  },
  {
    "de": "Er hat den Kredit aufgenommen.",
    "lv": "Uzeo je kredit.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen heute aufräumen.",
    "lv": "Moramo srediti sobu danas.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre jetzt auf.",
    "lv": "Sada ću prestati.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schon auf.",
    "lv": "On je već ustao.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen das Treffen verschieben.",
    "lv": "Moramo ponovo zakazati sastanak.",
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
    "lv": "Odmah.",
    "level": "Sätze"
  },
  {
    "de": "Für den Schaden aufkommen.",
    "lv": "Pokrijte štetu.",
    "level": "Sätze"
  },
  {
    "de": "Bitte die Tür auf!",
    "lv": "Otvorite vrata, molim!",
    "level": "Sätze"
  },
  {
    "de": "Aufrecht sitzen.",
    "lv": "Sedi uspravno.",
    "level": "Sätze"
  },
  {
    "de": "Er ist auf.",
    "lv": "On je ustao.",
    "level": "Sätze"
  },
  {
    "de": "Alle Kräfte aufwenden.",
    "lv": "Posvetite svu svoju snagu.",
    "level": "Sätze"
  },
  {
    "de": "Viel Mühe aufwenden.",
    "lv": "Trudi se jako.",
    "level": "Sätze"
  },
  {
    "de": "Geh mir aus den Augen!",
    "lv": "Ne gledaj me više!",
    "level": "Sätze"
  },
  {
    "de": "Unter vier Augen.",
    "lv": "Za dva. • Tiho",
    "level": "Sätze"
  },
  {
    "de": "Aus Mangel an Zeit.",
    "lv": "Zbog nedostatka vremena.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Grunde.",
    "lv": "Iz ovog razloga.",
    "level": "Sätze"
  },
  {
    "de": "Alle außer dir.",
    "lv": "Svi osim tebe.",
    "level": "Sätze"
  },
  {
    "de": "Auf Äußerlichkeiten Wert legen.",
    "lv": "Pridajte važnost izgledu.",
    "level": "Sätze"
  },
  {
    "de": "Im äußersten Fall.",
    "lv": "U najgorem slučaju.",
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
    "lv": "Ima dobre šanse.",
    "level": "Sätze"
  },
  {
    "de": "Wie wird dieses Wort ausgesprochen?",
    "lv": "Kako se ova riječ izgovara?",
    "level": "Sätze"
  },
  {
    "de": "Sein Beileid aussprechen.",
    "lv": "Izrazite saučešće.",
    "level": "Sätze"
  },
  {
    "de": "Wann wurden die Meisterschaftskämpfe ausgetragen?",
    "lv": "Kada je bilo prvenstvo?",
    "level": "Sätze"
  },
  {
    "de": "Welchen Beruf üben Sie aus?",
    "lv": "Koja je tvoja profesija?",
    "level": "Sätze"
  },
  {
    "de": "Einfluss ausüben.",
    "lv": "Da utiče.",
    "level": "Sätze"
  },
  {
    "de": "Auswärts essen.",
    "lv": "Jedite vani.",
    "level": "Sätze"
  },
  {
    "de": "Per Bahn.",
    "lv": "Željeznicom.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Bahn.",
    "lv": "Željeznicom.",
    "level": "Sätze"
  },
  {
    "de": "Möglichst bald.",
    "lv": "Što je prije moguće.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist Angst und bange.",
    "lv": "Veoma se bojim.",
    "level": "Sätze"
  },
  {
    "de": "Auf die lange Bank schieben.",
    "lv": "Odugovlačiti. • Prevucite na dužinu • Odložite na neodređeno vrijeme",
    "level": "Sätze"
  },
  {
    "de": "Bar zahlen.",
    "lv": "Plaćanje u gotovini.",
    "level": "Sätze"
  },
  {
    "de": "Erz bauen.",
    "lv": "Uzmi rudu.",
    "level": "Sätze"
  },
  {
    "de": "Mist bauen.",
    "lv": "Pucaj. • Pravite budalu od sebe",
    "level": "Sätze"
  },
  {
    "de": "Ich bin beauftragt.",
    "lv": "Dodijeljen mi je posao.",
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
    "lv": "Izgleda depresivno.",
    "level": "Sätze"
  },
  {
    "de": "Hinweise befolgen.",
    "lv": "Slijedite upute.",
    "level": "Sätze"
  },
  {
    "de": "Befehle befolgen.",
    "lv": "Slijedite naredbe.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Post befördern.",
    "lv": "Pošaljite poštom.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin begierig zu wissen.",
    "lv": "Zaista želim da znam.",
    "level": "Sätze"
  },
  {
    "de": "Zu Beginn.",
    "lv": "U početku.",
    "level": "Sätze"
  },
  {
    "de": "Am Beginn.",
    "lv": "U početku.",
    "level": "Sätze"
  },
  {
    "de": "Bei Beginn.",
    "lv": "Počinje",
    "level": "Sätze"
  },
  {
    "de": "In Begleitung.",
    "lv": "U pratnji.",
    "level": "Sätze"
  },
  {
    "de": "Mit seiner Begleitung.",
    "lv": "Uz pratnju.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schwer von Begriff.",
    "lv": "On je spor za percepciju. • Ima sporo razmišljanje",
    "level": "Sätze"
  },
  {
    "de": "Im Gedächtnis behalten.",
    "lv": "Zapamti. • Čuvajte u memoriji",
    "level": "Sätze"
  },
  {
    "de": "Bei Tisch.",
    "lv": "Za stolom.",
    "level": "Sätze"
  },
  {
    "de": "Bei Sinnen sein.",
    "lv": "Da budem zdrava.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tage.",
    "lv": "Tokom dana.",
    "level": "Sätze"
  },
  {
    "de": "Bei weitem nicht so.",
    "lv": "Nikako.",
    "level": "Sätze"
  },
  {
    "de": "Alle beide.",
    "lv": "Oba dva.",
    "level": "Sätze"
  },
  {
    "de": "Stürmischer Beifall brach los.",
    "lv": "Začuo se gromoglasan aplauz.",
    "level": "Sätze"
  },
  {
    "de": "Beifall finden.",
    "lv": "Dobiti saglasnost.",
    "level": "Sätze"
  },
  {
    "de": "Beileid aussprechen.",
    "lv": "Izrazite saučešće.",
    "level": "Sätze"
  },
  {
    "de": "Auf eigenen Beinen stehen.",
    "lv": "Da budu finansijski nezavisni.",
    "level": "Sätze"
  },
  {
    "de": "Zum Beispiel.",
    "lv": "Na primjer.",
    "level": "Sätze"
  },
  {
    "de": "Beistand leisten.",
    "lv": "Da pomognem. • Pružanje pomoći",
    "level": "Sätze"
  },
  {
    "de": "Beitrag leisten.",
    "lv": "Uložite svoj dio.",
    "level": "Sätze"
  },
  {
    "de": "Jemandes Bekanntschaft machen.",
    "lv": "Upoznaj nekoga.",
    "level": "Sätze"
  },
  {
    "de": "Bekanntschaft anknüpfen.",
    "lv": "Upoznajte se. • Uspostavite kontakt",
    "level": "Sätze"
  },
  {
    "de": "Belegte Brötchen.",
    "lv": "Sendviči sa dodacima.",
    "level": "Sätze"
  },
  {
    "de": "Nach Ihrem Belieben.",
    "lv": "Kako želite.",
    "level": "Sätze"
  },
  {
    "de": "Zu jeder beliebigen Zeit.",
    "lv": "U bilo koje vrijeme.",
    "level": "Sätze"
  },
  {
    "de": "Schweigen beobachten.",
    "lv": "Da posmatram tišinu.",
    "level": "Sätze"
  },
  {
    "de": "Zur Bequemlichkeit.",
    "lv": "Radi pogodnosti.",
    "level": "Sätze"
  },
  {
    "de": "Bereit sein.",
    "lv": "Budite spremni. • Budite u miru",
    "level": "Sätze"
  },
  {
    "de": "Unfallopfer bergen.",
    "lv": "Spašavanje žrtava u slučaju nesreće.",
    "level": "Sätze"
  },
  {
    "de": "Bericht erstatten.",
    "lv": "Izvještaj. • Dajte izveštaj • Dajte pregled",
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
    "lv": "On je vlasnik kuće.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt viel Mut.",
    "lv": "Ima veliku hrabrost.",
    "level": "Sätze"
  },
  {
    "de": "Desto besser.",
    "lv": "Što bolje.",
    "level": "Sätze"
  },
  {
    "de": "Gute Besserung!",
    "lv": "Ozdravi! • Ozdravi!",
    "level": "Sätze"
  },
  {
    "de": "Beim besten Willen.",
    "lv": "Šta god želiš.",
    "level": "Sätze"
  },
  {
    "de": "Am besten.",
    "lv": "Najbolji.",
    "level": "Sätze"
  },
  {
    "de": "Es besteht Zweifel.",
    "lv": "Postoje sumnje.",
    "level": "Sätze"
  },
  {
    "de": "Seine Aufgabe besteht darin...",
    "lv": "Njegov zadatak je...",
    "level": "Sätze"
  },
  {
    "de": "Grüße bestellen.",
    "lv": "Reci zdravo.",
    "level": "Sätze"
  },
  {
    "de": "Ganz bestimmt.",
    "lv": "Definitivno. • Potpuno siguran",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch kommen.",
    "lv": "Dođite u posetu.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch sein.",
    "lv": "Posjetiti. • Posjetiti",
    "level": "Sätze"
  },
  {
    "de": "Oft Konzerte besuchen.",
    "lv": "Često idite na koncerte.",
    "level": "Sätze"
  },
  {
    "de": "Welche Schule hat er besucht?",
    "lv": "U koju školu je išao?",
    "level": "Sätze"
  },
  {
    "de": "In Betracht ziehen.",
    "lv": "Uzmite u obzir. • Razmotrite",
    "level": "Sätze"
  },
  {
    "de": "Außer Betracht lassen.",
    "lv": "Zanemarivanje. • Nemojte uzeti u obzir",
    "level": "Sätze"
  },
  {
    "de": "Er betreibt ein Hotel.",
    "lv": "On vodi hotel.",
    "level": "Sätze"
  },
  {
    "de": "Alle beiden.",
    "lv": "Oba dva.",
    "level": "Sätze"
  },
  {
    "de": "Alles bezahlen.",
    "lv": "Platite sve.",
    "level": "Sätze"
  },
  {
    "de": "Bezüglich auf etwas.",
    "lv": "U vezi nečega.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön.",
    "lv": "Molim te",
    "level": "Sätze"
  },
  {
    "de": "Wie bitte?",
    "lv": "Kako molim",
    "level": "Sätze"
  },
  {
    "de": "Bitte sehr.",
    "lv": "Molim te",
    "level": "Sätze"
  },
  {
    "de": "Ich habe eine Bitte an Sie.",
    "lv": "Imam zahtjev za tebe.",
    "level": "Sätze"
  },
  {
    "de": "Trompete blasen.",
    "lv": "Dunite u trubu.",
    "level": "Sätze"
  },
  {
    "de": "In einem Buch blättern.",
    "lv": "Razvrstaj knjigu.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßen Füßen.",
    "lv": "Bose noge.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßem Auge.",
    "lv": "Golim okom.",
    "level": "Sätze"
  },
  {
    "de": "Danke für die Blumen!",
    "lv": "Hvala za cveće!",
    "level": "Sätze"
  },
  {
    "de": "Alles in Butter.",
    "lv": "Sve je u redu.",
    "level": "Sätze"
  },
  {
    "de": "Bitte checken.",
    "lv": "Provjeri. • Provjerite",
    "level": "Sätze"
  },
  {
    "de": "Da ist er!",
    "lv": "Evo ga!",
    "level": "Sätze"
  },
  {
    "de": "Alles spricht dafür.",
    "lv": "Sve dobro govori.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann nichts dafür.",
    "lv": "Ja tu ne mogu ništa.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin dagegen.",
    "lv": "Ja sam protiv toga.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe nichts dagegen.",
    "lv": "Nemam ništa protiv toga.",
    "level": "Sätze"
  },
  {
    "de": "Von daheim.",
    "lv": "Od kuce.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Dame ziehen.",
    "lv": "Napravi ženski potez.",
    "level": "Sätze"
  },
  {
    "de": "Es dämmert.",
    "lv": "Pada mrak. • Svanuće.",
    "level": "Sätze"
  },
  {
    "de": "Danke schön!",
    "lv": "Hvala vam! • Hvala!",
    "level": "Sätze"
  },
  {
    "de": "Dann und wann.",
    "lv": "Tu i tamo.",
    "level": "Sätze"
  },
  {
    "de": "Darauf kannst du dich verlassen.",
    "lv": "Možete računati na to.",
    "level": "Sätze"
  },
  {
    "de": "Daraus wird nichts.",
    "lv": "Ništa neće biti od toga.",
    "level": "Sätze"
  },
  {
    "de": "So dass...",
    "lv": "Tako da...",
    "level": "Sätze"
  },
  {
    "de": "Für wen halten Sie mich?",
    "lv": "Šta misliš da sam ja?",
    "level": "Sätze"
  },
  {
    "de": "Hände weg!",
    "lv": "Ruke dalje!",
    "level": "Sätze"
  },
  {
    "de": "Lass den Kopf nicht hängen!",
    "lv": "Ne spuštajte glavu!",
    "level": "Sätze"
  },
  {
    "de": "zu Hause",
    "lv": "Kod kuće",
    "level": "Sätze"
  },
  {
    "de": "nach Hause gehen",
    "lv": "Idi kući",
    "level": "Sätze"
  },
  {
    "de": "von Haus aus",
    "lv": "Od djetinjstva • Od samog početka",
    "level": "Sätze"
  },
  {
    "de": "Meinen herzlichsten Glückwunsch!",
    "lv": "Čestitamo!",
    "level": "Sätze"
  },
  {
    "de": "Seien Sie so gut!",
    "lv": "Budite tako ljubazni! • Budite tako dobri!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie die Güte!",
    "lv": "Budite tako ljubazni!",
    "level": "Sätze"
  },
  {
    "de": "Was hast du?",
    "lv": "Šta nije u redu s tobom? • Šta se dogodilo?",
    "level": "Sätze"
  },
  {
    "de": "Gestatten Sie bitte!",
    "lv": "Dozvolite mi, molim vas!",
    "level": "Sätze"
  },
  {
    "de": "Ist es gestattet zu rauchen?",
    "lv": "Mogu li pušiti?",
    "level": "Sätze"
  },
  {
    "de": "Ich muss gestehen, dass...",
    "lv": "Moram priznati da...",
    "level": "Sätze"
  },
  {
    "de": "gestern früh",
    "lv": "Juče rano ujutro",
    "level": "Sätze"
  },
  {
    "de": "gestern Abend",
    "lv": "Sinoć",
    "level": "Sätze"
  },
  {
    "de": "Es ist mir gleichgültig, ob...",
    "lv": "Nije me briga ako...",
    "level": "Sätze"
  },
  {
    "de": "Was ist geschehen?",
    "lv": "Sta se desilo?",
    "level": "Sätze"
  },
  {
    "de": "Mach keine Geschichten!",
    "lv": "Ne pravite gluposti! • Ne zbijajte šale!",
    "level": "Sätze"
  },
  {
    "de": "Geschweige denn...",
    "lv": "Da ne spominjem to. • Gdje drugdje",
    "level": "Sätze"
  },
  {
    "de": "Gehen Sie geradeaus!",
    "lv": "Samo napred!",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es Ihnen?",
    "lv": "Kako si • Kako si?",
    "level": "Sätze"
  },
  {
    "de": "Frag ihn gelegentlich, ob...",
    "lv": "Pitajte ga da li izlazi ako...",
    "level": "Sätze"
  },
  {
    "de": "morgen früh",
    "lv": "Sutra ujutro",
    "level": "Sätze"
  },
  {
    "de": "im Frühling",
    "lv": "U proleće",
    "level": "Sätze"
  },
  {
    "de": "Was gibt’s Neues?",
    "lv": "Šta ima novo?",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Brief folgt, dass...",
    "lv": "Iz ovog pisma proizilazi da...",
    "level": "Sätze"
  },
  {
    "de": "Fahre fort!",
    "lv": "Samo tako nastavi!",
    "level": "Sätze"
  },
  {
    "de": "Er ist kein Freund von...",
    "lv": "On ne voli...",
    "level": "Sätze"
  },
  {
    "de": "Es erwies sich, dass...",
    "lv": "Ispostavilo se da...",
    "level": "Sätze"
  },
  {
    "de": "Gedenkst du meiner?",
    "lv": "Sjećaš li me se • Jesi li razmišljao o meni?",
    "level": "Sätze"
  },
  {
    "de": "im Winter",
    "lv": "Zimi",
    "level": "Sätze"
  },
  {
    "de": "Welcher Jahrgang sind Sie?",
    "lv": "Koje godine ste rođeni?",
    "level": "Sätze"
  },
  {
    "de": "Es jammert mich zu sehen...",
    "lv": "Tuzno za gledati...",
    "level": "Sätze"
  },
  {
    "de": "je mehr, desto besser",
    "lv": "Što više to bolje",
    "level": "Sätze"
  },
  {
    "de": "bis jetzt",
    "lv": "Do sada",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich zum Bahnhof?",
    "lv": "Kako doći do stanice?",
    "level": "Sätze"
  },
  {
    "de": "Komm her!",
    "lv": "Dođi ovamo!",
    "level": "Sätze"
  },
  {
    "de": "Könnte ich Frau N. sprechen?",
    "lv": "Mogu li razgovarati sa gđom N.?",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das?",
    "lv": "Koliko košta?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange dauert die Vorstellung?",
    "lv": "Koliko će trajati nastup?",
    "level": "Sätze"
  },
  {
    "de": "Lass das!",
    "lv": "Prestani! • Baci ga!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich in Ruhe!",
    "lv": "Ostavi me na miru!",
    "level": "Sätze"
  },
  {
    "de": "Lassen Sie mich Ihnen helfen!",
    "lv": "Pusti me da ti pomognem!",
    "level": "Sätze"
  },
  {
    "de": "Lasst uns gehen!",
    "lv": "Idemo!",
    "level": "Sätze"
  },
  {
    "de": "Na, wie läufts?",
    "lv": "Kako si",
    "level": "Sätze"
  },
  {
    "de": "Es lebe!",
    "lv": "Živio!",
    "level": "Sätze"
  },
  {
    "de": "Leben Sie wohl!",
    "lv": "Živite zdravo! • Zbogom!",
    "level": "Sätze"
  },
  {
    "de": "Was ist los?",
    "lv": "Sta se desilo?",
    "level": "Sätze"
  },
  {
    "de": "Der Job ist anstrengend.",
    "lv": "Posao je iscrpljujući.",
    "level": "Sätze"
  },
  {
    "de": "Das war ein anstrengender Tag.",
    "lv": "Bio je to naporan dan.",
    "level": "Sätze"
  },
  {
    "de": "Deutsch lernen kann anstrengend sein.",
    "lv": "Učenje njemačkog može biti iscrpljujuće.",
    "level": "Sätze"
  },
  {
    "de": "Er verlangt eine Erklärung.",
    "lv": "On traži objašnjenje.",
    "level": "Sätze"
  },
  {
    "de": "Der Verkäufer verlangt zu viel Geld.",
    "lv": "Prodavac traži previše novca.",
    "level": "Sätze"
  },
  {
    "de": "Das Gesetz verlangt es so.",
    "lv": "Zakon to zahtijeva.",
    "level": "Sätze"
  },
  {
    "de": "Das ist gar nicht so schwer.",
    "lv": "Uopšte nije tako teško.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe gar kein Geld.",
    "lv": "Uopšte nemam novca.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gar nichts gesagt.",
    "lv": "Nije ništa rekao.",
    "level": "Sätze"
  },
  {
    "de": "Der Hund ist los.",
    "lv": "Pas je pušten.",
    "level": "Sätze"
  },
  {
    "de": "Hier ist viel los.",
    "lv": "Ovde se mnogo toga dešava.",
    "level": "Sätze"
  },
  {
    "de": "Halt die Luft an!",
    "lv": "Zadrži dah!",
    "level": "Sätze"
  },
  {
    "de": "Was machst du?",
    "lv": "Šta radiš",
    "level": "Sätze"
  },
  {
    "de": "Sag mal!",
    "lv": "Reci da!",
    "level": "Sätze"
  },
  {
    "de": "Was meinen Sie damit?",
    "lv": "Šta misliš pod tim? • Šta mislite?",
    "level": "Sätze"
  },
  {
    "de": "Wir gehen mit Ihnen.",
    "lv": "Idemo s tobom.",
    "level": "Sätze"
  },
  {
    "de": "Ich fahre mit der Eisenbahn.",
    "lv": "Putujem vozom.",
    "level": "Sätze"
  },
  {
    "de": "am Mittwoch",
    "lv": "U srijedu",
    "level": "Sätze"
  },
  {
    "de": "Es mag sein.",
    "lv": "Možda.",
    "level": "Sätze"
  },
  {
    "de": "Ich mag das nicht.",
    "lv": "Ne sviđa mi se.",
    "level": "Sätze"
  },
  {
    "de": "am Montag",
    "lv": "U ponedjeljak",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen!",
    "lv": "Dobro jutro!",
    "level": "Sätze"
  },
  {
    "de": "am Morgen",
    "lv": "Ujutro",
    "level": "Sätze"
  },
  {
    "de": "Gute Nacht!",
    "lv": "Laku noc!",
    "level": "Sätze"
  },
  {
    "de": "Nehmen Sie Platz!",
    "lv": "Sedi dole!",
    "level": "Sätze"
  },
  {
    "de": "Letzte Neuheit!",
    "lv": "Najnovije vijesti!",
    "level": "Sätze"
  },
  {
    "de": "Nicht wahr?",
    "lv": "Zar ne?",
    "level": "Sätze"
  },
  {
    "de": "Nicht doch!",
    "lv": "Ne, naravno! • Nemojte!",
    "level": "Sätze"
  },
  {
    "de": "Nun endlich!",
    "lv": "Pa, konačno!",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das?",
    "lv": "Za šta je to dobro?",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das alles?",
    "lv": "Čemu sve ovo?",
    "level": "Sätze"
  },
  {
    "de": "Parken verboten!",
    "lv": "Parkiranje je zabranjeno!",
    "level": "Sätze"
  },
  {
    "de": "Nicht parken!",
    "lv": "Parkiranje je zabranjeno!",
    "level": "Sätze"
  },
  {
    "de": "Er hat Recht.",
    "lv": "On je u pravu.",
    "level": "Sätze"
  },
  {
    "de": "Wovon ist die Rede?",
    "lv": "O čemu se radi?",
    "level": "Sätze"
  },
  {
    "de": "Davon kann keine Rede sein.",
    "lv": "To ne dolazi u obzir.",
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
    "lv": "Već je dobro!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön!",
    "lv": "Molim te!",
    "level": "Sätze"
  },
  {
    "de": "Was bin ich schuldig?",
    "lv": "Koliko dugujem? • Koliko moram da platim?",
    "level": "Sätze"
  },
  {
    "de": "Vor dem Gebrauch schütteln!",
    "lv": "Protresite prije upotrebe!",
    "level": "Sätze"
  },
  {
    "de": "Sehen Sie mal!",
    "lv": "Pogledajte!",
    "level": "Sätze"
  },
  {
    "de": "Wie sehr auch...",
    "lv": "Koliko...",
    "level": "Sätze"
  },
  {
    "de": "Seit wann?",
    "lv": "Od kada?",
    "level": "Sätze"
  },
  {
    "de": "Was soll ich tun?",
    "lv": "Šta da radim?",
    "level": "Sätze"
  },
  {
    "de": "im Sommer",
    "lv": "Ljeti",
    "level": "Sätze"
  },
  {
    "de": "Nicht nur..., sondern auch...",
    "lv": "Ne samo... već i...",
    "level": "Sätze"
  },
  {
    "de": "Sonst noch etwas?",
    "lv": "Još nešto?",
    "level": "Sätze"
  },
  {
    "de": "Spaß beiseite!",
    "lv": "Bez šale! • Šale na ivici!",
    "level": "Sätze"
  },
  {
    "de": "Wie spät ist es?",
    "lv": "Koliko je sati",
    "level": "Sätze"
  },
  {
    "de": "Durchfahrt gesperrt!",
    "lv": "Prolazak je zabranjen!",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie deutsch?",
    "lv": "Govorite li njemački?",
    "level": "Sätze"
  },
  {
    "de": "Statt zu...",
    "lv": "Umjesto...",
    "level": "Sätze"
  },
  {
    "de": "Wie steht’s?",
    "lv": "Kako si",
    "level": "Sätze"
  },
  {
    "de": "Dieser Hut steht ihr gut.",
    "lv": "Ovaj šešir joj dobro stoji.",
    "level": "Sätze"
  },
  {
    "de": "Guten Tag!",
    "lv": "Zdravo!",
    "level": "Sätze"
  },
  {
    "de": "Wo treffen wir uns?",
    "lv": "Gdje ćemo se naći?",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie näher!",
    "lv": "Priđi bliže!",
    "level": "Sätze"
  },
  {
    "de": "Ehrlichkeit ist eine Tugend.",
    "lv": "Iskrenost je vrlina.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe viel zu tun.",
    "lv": "Imam puno posla.",
    "level": "Sätze"
  },
  {
    "de": "Nicht übel!",
    "lv": "Vrlo dobro! • Nema prigovora",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt über mir.",
    "lv": "Živi iznad mene.",
    "level": "Sätze"
  },
  {
    "de": "Er ist davon überzeugt.",
    "lv": "On je siguran u to.",
    "level": "Sätze"
  },
  {
    "de": "So ist es üblich.",
    "lv": "To je prihvaćeno.",
    "level": "Sätze"
  },
  {
    "de": "Deine Uhr geht nach.",
    "lv": "Vaš sat je iza.",
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
    "lv": "Što više",
    "level": "Sätze"
  },
  {
    "de": "Rechts um!",
    "lv": "Skreni desno!",
    "level": "Sätze"
  },
  {
    "de": "Und ob!",
    "lv": "I šta drugo!",
    "level": "Sätze"
  },
  {
    "de": "und zwar",
    "lv": "Naime",
    "level": "Sätze"
  },
  {
    "de": "Auf Unkosten von...",
    "lv": "Na račun...",
    "level": "Sätze"
  },
  {
    "de": "Er saß unter den Zuschauern.",
    "lv": "Sedeo je među publikom.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ursache!",
    "lv": "Ništa za ništa!",
    "level": "Sätze"
  },
  {
    "de": "Es geschah, wie verabredet.",
    "lv": "Desilo se kako je dogovoreno.",
    "level": "Sätze"
  },
  {
    "de": "Rauchen verboten!",
    "lv": "Pušenje je zabranjeno!",
    "level": "Sätze"
  },
  {
    "de": "Falsch verbunden!",
    "lv": "Pogrešna veza!",
    "level": "Sätze"
  },
  {
    "de": "Eintritt verboten!",
    "lv": "Ulaz zabranjen!",
    "level": "Sätze"
  },
  {
    "de": "Verstehen Sie mich?",
    "lv": "Da li me razumete?",
    "level": "Sätze"
  },
  {
    "de": "Er versteht nichts davon.",
    "lv": "On tu ništa ne razume.",
    "level": "Sätze"
  },
  {
    "de": "Seine Ansicht vertreten.",
    "lv": "Branite svoje mišljenje.",
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
    "lv": "Nakon saslušanja.",
    "level": "Sätze"
  },
  {
    "de": "Von Zeit zu Zeit.",
    "lv": "S vremena na vreme.",
    "level": "Sätze"
  },
  {
    "de": "Von Beruf.",
    "lv": "Po zanimanju.",
    "level": "Sätze"
  },
  {
    "de": "Er ist Berliner von Geburt.",
    "lv": "Po rođenju je Berlinčanin.",
    "level": "Sätze"
  },
  {
    "de": "Er steht vor dem Fenster.",
    "lv": "On stoji pored prozora.",
    "level": "Sätze"
  },
  {
    "de": "Vor Sonnenaufgang.",
    "lv": "Prije izlaska sunca.",
    "level": "Sätze"
  },
  {
    "de": "Vor vierzehn Tagen.",
    "lv": "Prije dvije sedmice.",
    "level": "Sätze"
  },
  {
    "de": "Vor Freude.",
    "lv": "Za zabavu.",
    "level": "Sätze"
  },
  {
    "de": "Vor allem.",
    "lv": "Prije svega. • Prije svega",
    "level": "Sätze"
  },
  {
    "de": "Im Voraus.",
    "lv": "Ranije.",
    "level": "Sätze"
  },
  {
    "de": "Unter der Voraussetzung, dass...",
    "lv": "Pod pretpostavkom da...",
    "level": "Sätze"
  },
  {
    "de": "Unter dem Vorbehalt.",
    "lv": "Uslovno.",
    "level": "Sätze"
  },
  {
    "de": "Vorhanden sein.",
    "lv": "Biti. • Budite prisutni • Budite dostupni",
    "level": "Sätze"
  },
  {
    "de": "In der vorigen Woche.",
    "lv": "Prošle sedmice.",
    "level": "Sätze"
  },
  {
    "de": "Vorkehrungen treffen.",
    "lv": "Poduzeti mjere za zaštitu.",
    "level": "Sätze"
  },
  {
    "de": "Sie kommt mir bekannt vor.",
    "lv": "Izgleda mi poznato.",
    "level": "Sätze"
  },
  {
    "de": "Er hat Vorliebe für Literatur.",
    "lv": "Jako voli književnost.",
    "level": "Sätze"
  },
  {
    "de": "Heute Vormittag.",
    "lv": "Jutros. • Danas ujutro",
    "level": "Sätze"
  },
  {
    "de": "Von vorn.",
    "lv": "Sa prednje strane.",
    "level": "Sätze"
  },
  {
    "de": "Nach vorn.",
    "lv": "Naprijed.",
    "level": "Sätze"
  },
  {
    "de": "Von vornherein.",
    "lv": "Na samom početku.",
    "level": "Sätze"
  },
  {
    "de": "Im Vorteil sein.",
    "lv": "Budite u boljoj poziciji.",
    "level": "Sätze"
  },
  {
    "de": "Wach sein.",
    "lv": "Da budem budan.",
    "level": "Sätze"
  },
  {
    "de": "Wach werden.",
    "lv": "Probudi se.",
    "level": "Sätze"
  },
  {
    "de": "Auf Wache sein.",
    "lv": "Čuvajte se.",
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
    "lv": "Uzalud pričati.",
    "level": "Sätze"
  },
  {
    "de": "Hier haben die Wände Ohren.",
    "lv": "Ovdje zidovi imaju uši.",
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
    "lv": "Sačekaj poruku.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie?",
    "lv": "Sta zelis",
    "level": "Sätze"
  },
  {
    "de": "Was für ein...?",
    "lv": "SZO...? • Šta je sa...?",
    "level": "Sätze"
  },
  {
    "de": "Auf halbem Wege.",
    "lv": "Na pola puta.",
    "level": "Sätze"
  },
  {
    "de": "Auf diesem Wege.",
    "lv": "Na taj način. • Za takva sredstva",
    "level": "Sätze"
  },
  {
    "de": "Auf friedlichem Wege.",
    "lv": "Na putu mira.",
    "level": "Sätze"
  },
  {
    "de": "Unserer Freundschaft wegen.",
    "lv": "Zbog našeg prijateljstva.",
    "level": "Sätze"
  },
  {
    "de": "Von Rechts wegen.",
    "lv": "Po pravdi.",
    "level": "Sätze"
  },
  {
    "de": "Weh tun.",
    "lv": "Povrijediti.",
    "level": "Sätze"
  },
  {
    "de": "Zu Weihnachten.",
    "lv": "Na Božić.",
    "level": "Sätze"
  },
  {
    "de": "Auf welche Weise?",
    "lv": "Na koji način?",
    "level": "Sätze"
  },
  {
    "de": "Art und Weise.",
    "lv": "Tip.",
    "level": "Sätze"
  },
  {
    "de": "Ohne weiteres.",
    "lv": "Odmah. • Odmah",
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
    "lv": "Koji dan?",
    "level": "Sätze"
  },
  {
    "de": "Alle Welt.",
    "lv": "Cijeli svijet. • Svi",
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
    "lv": "Mada.",
    "level": "Sätze"
  },
  {
    "de": "Wer da?",
    "lv": "Sta je tamo?",
    "level": "Sätze"
  },
  {
    "de": "Gesammelte Werke von Schiller.",
    "lv": "Šilerova sabrana dela.",
    "level": "Sätze"
  },
  {
    "de": "Ausgewählte Werke.",
    "lv": "Izbor radova.",
    "level": "Sätze"
  },
  {
    "de": "Er ist wert, dass...",
    "lv": "On zaslužuje da...",
    "level": "Sätze"
  },
  {
    "de": "Es ist zwei Euro wert.",
    "lv": "Košta dva eura.",
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
    "lv": "Uključite se u takmičenje.",
    "level": "Sätze"
  },
  {
    "de": "Um die Wette laufen.",
    "lv": "Trči trku.",
    "level": "Sätze"
  },
  {
    "de": "Was gilt die Wette?",
    "lv": "Za šta se cjenkamo?",
    "level": "Sätze"
  },
  {
    "de": "Wie wird das Wetter?",
    "lv": "Kakvo će biti vrijeme?",
    "level": "Sätze"
  },
  {
    "de": "Wettkampf im Turnen.",
    "lv": "Takmičenja u gimnastici.",
    "level": "Sätze"
  },
  {
    "de": "Wider meinen Willen.",
    "lv": "Protiv moje volje.",
    "level": "Sätze"
  },
  {
    "de": "Widerspruch erheben.",
    "lv": "Da protestujem. • Iznesite prigovore",
    "level": "Sätze"
  },
  {
    "de": "Wie alt ist er?",
    "lv": "Koliko ima godina?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange?",
    "lv": "Koliko dugo",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiederhören!",
    "lv": "Zbogom!",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiedersehen!",
    "lv": "Zbogom!",
    "level": "Sätze"
  },
  {
    "de": "Wilde Tiere.",
    "lv": "Divlje životinje.",
    "level": "Sätze"
  },
  {
    "de": "Herzlich willkommen!",
    "lv": "Srdacan pozdrav!",
    "level": "Sätze"
  },
  {
    "de": "Du musst ziehen.",
    "lv": "Imate potez.",
    "level": "Sätze"
  },
  {
    "de": "Es zieht.",
    "lv": "Povuci",
    "level": "Sätze"
  },
  {
    "de": "Ziemlich kalt.",
    "lv": "Prilično hladno.",
    "level": "Sätze"
  },
  {
    "de": "Zipfel einer Wurst.",
    "lv": "Sausage tip.",
    "level": "Sätze"
  },
  {
    "de": "Zu ihm gehen.",
    "lv": "Idi do njega.",
    "level": "Sätze"
  },
  {
    "de": "Zur Schule gehen.",
    "lv": "Idi u školu.",
    "level": "Sätze"
  },
  {
    "de": "Zu Hause bleiben.",
    "lv": "Ostani kod kuce.",
    "level": "Sätze"
  },
  {
    "de": "Von Tag zu Tag.",
    "lv": "Na dnevnoj bazi.",
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
    "lv": "Za noge.",
    "level": "Sätze"
  },
  {
    "de": "Zu Pferde.",
    "lv": "Da.",
    "level": "Sätze"
  },
  {
    "de": "Zu Rad.",
    "lv": "Biciklom.",
    "level": "Sätze"
  },
  {
    "de": "Es hörte auf zu regnen.",
    "lv": "Prestala je kiša.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe noch viel zu tun.",
    "lv": "Imam još mnogo toga da uradim.",
    "level": "Sätze"
  },
  {
    "de": "Zu früh.",
    "lv": "Prerano.",
    "level": "Sätze"
  },
  {
    "de": "Zu groß.",
    "lv": "Prevelika.",
    "level": "Sätze"
  },
  {
    "de": "Mit den Achseln zucken.",
    "lv": "Slegni ramenima.",
    "level": "Sätze"
  },
  {
    "de": "In einem Zug trinken.",
    "lv": "Pijte u jednom gutljaju.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde gehen.",
    "lv": "Poginuti.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde legen.",
    "lv": "Stavite na osnovu. • Uzmite kao osnovu.",
    "level": "Sätze"
  },
  {
    "de": "Zum ersten Mal.",
    "lv": "Po prvi put.",
    "level": "Sätze"
  },
  {
    "de": "Machen Sie bitte die Tür zu!",
    "lv": "Molim vas zatvorite vrata!",
    "level": "Sätze"
  },
  {
    "de": "Er hat zugenommen.",
    "lv": "Ugojio se.",
    "level": "Sätze"
  },
  {
    "de": "Die Tage nehmen zu.",
    "lv": "Dani su sve duži.",
    "level": "Sätze"
  },
  {
    "de": "Zusammenhängen mit etwas.",
    "lv": "Biti povezan sa nečim.",
    "level": "Sätze"
  },
  {
    "de": "Die Tür ist zu.",
    "lv": "Vrata su zatvorena.",
    "level": "Sätze"
  },
  {
    "de": "Das hätte ich ihm nicht zugetraut.",
    "lv": "Ne bih to očekivao od njega.",
    "level": "Sätze"
  },
  {
    "de": "Freier Zutritt.",
    "lv": "Ulaz slobodan.",
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
    "lv": "Postani odvratan. • Razbolite se",
    "level": "Sätze"
  },
  {
    "de": "Und zwar.",
    "lv": "Naime.",
    "level": "Sätze"
  },
  {
    "de": "Es steht außer Zweifel.",
    "lv": "Nema sumnje.",
    "level": "Sätze"
  },
  {
    "de": "Ohne Zweifel.",
    "lv": "Bez oklijevanja.",
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
    "lv": "Drago mi je da smo se upoznali.",
    "level": "Sätze"
  },
  {
    "de": "Wären Sie bitte so nett?",
    "lv": "Hoćete li, molim vas, biti tako ljubazni?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin Ihnen sehr dankbar.",
    "lv": "Veoma sam vam zahvalan.",
    "level": "Sätze"
  },
  {
    "de": "Setzt euch bitte hin!",
    "lv": "Sjednite, molim!",
    "level": "Sätze"
  },
  {
    "de": "Ben, komm bitte an die Tafel!",
    "lv": "Bene, molim te dođi do table!",
    "level": "Sätze"
  },
  {
    "de": "Schlagt bitte die Lehrbücher auf!",
    "lv": "Otvorite udžbenike, molim!",
    "level": "Sätze"
  },
  {
    "de": "Geht bitte in die Sporthalle!",
    "lv": "Molim vas idite u teretanu!",
    "level": "Sätze"
  },
  {
    "de": "Schläfst du noch?",
    "lv": "Da li još spavaš",
    "level": "Sätze"
  },
  {
    "de": "Schlafen Sie noch?",
    "lv": "Još spavaš?",
    "level": "Sätze"
  },
  {
    "de": "Er ist fest eingeschlafen.",
    "lv": "On čvrsto spava.",
    "level": "Sätze"
  },
  {
    "de": "Wecke ihn bitte auf, es ist schon spät!",
    "lv": "Molim te probudi ga, već je kasno!",
    "level": "Sätze"
  },
  {
    "de": "Es tut mir sehr leid!",
    "lv": "Tako mi je žao!",
    "level": "Sätze"
  },
  {
    "de": "Vielen Dank!",
    "lv": "Hvala vam puno!",
    "level": "Sätze"
  },
  {
    "de": "Finn, fang bitte an!",
    "lv": "Finn, počni, molim te!",
    "level": "Sätze"
  },
  {
    "de": "Lest bitte mit!",
    "lv": "Čitajte, molim vas!",
    "level": "Sätze"
  },
  {
    "de": "Emma, schau bitte nicht aus dem Fenster!",
    "lv": "Ema, molim te ne gledaj kroz prozor!",
    "level": "Sätze"
  },
  {
    "de": "Jonas, bring bitte die Hefte!",
    "lv": "Jonas, molim te ponesi sveske!",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte zurück an deinen Platz!",
    "lv": "Vrati se na svoje mjesto!",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb acht.",
    "lv": "Pola je osam.",
    "level": "Sätze"
  },
  {
    "de": "Wann wachst du gewöhnlich auf?",
    "lv": "Kada se obično budite?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe gleich auf.",
    "lv": "Odmah ću ustati.",
    "level": "Sätze"
  },
  {
    "de": "Steh auf, Hanna, es klingelt!",
    "lv": "Ustani, Hana, zvono zvoni!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich noch fünf Minuten schlafen!",
    "lv": "Pusti me da spavam još pet minuta!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss nicht, das Zimmer zu lüften!",
    "lv": "Ne zaboravite provjetriti prostoriju!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist das Handtuch?",
    "lv": "Gde je peškir",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mir die Zähne putzen.",
    "lv": "Želim da operem zube.",
    "level": "Sätze"
  },
  {
    "de": "Mit was putzt du dir die Zähne?",
    "lv": "Čime perete zube?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mich anziehen.",
    "lv": "Želim da se obučem.",
    "level": "Sätze"
  },
  {
    "de": "Zieh dich bitte schnell an!",
    "lv": "Obucite se brzo, molim!",
    "level": "Sätze"
  },
  {
    "de": "Kleide dich wärmer an, draußen ist es kühl.",
    "lv": "Obucite se toplo, napolju je hladno.",
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
    "lv": "Kakav je nered ovde!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich beim Aufräumen helfen?",
    "lv": "Mogu li pomoći u pospremanju?",
    "level": "Sätze"
  },
  {
    "de": "Was trinkst du morgens, Kaffee oder Tee?",
    "lv": "Šta pijete ujutru, kafu ili čaj?",
    "level": "Sätze"
  },
  {
    "de": "Gewöhnlich trinke ich morgens eine Tasse Kaffee.",
    "lv": "Obično popijem šoljicu kafe ujutru.",
    "level": "Sätze"
  },
  {
    "de": "Am liebsten trinke ich schwarzen Kaffee.",
    "lv": "Ja najbolje pijem crnu kafu.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, hast du gut geschlafen?",
    "lv": "Dobro jutro, jeste li dobro spavali?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin noch sehr müde.",
    "lv": "I dalje sam jako umorna.",
    "level": "Sätze"
  },
  {
    "de": "Willst du Kaffee oder Milch?",
    "lv": "Želiš li kafu ili mlijeko?",
    "level": "Sätze"
  },
  {
    "de": "Gib mir bitte ein Brötchen mit Käse.",
    "lv": "Daj mi lepinju sa sirom, molim te.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss jetzt los!",
    "lv": "Moram da idem sada!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss dein Frühstück nicht!",
    "lv": "Ne zaboravite doručak!",
    "level": "Sätze"
  },
  {
    "de": "Klara, deck bitte den Tisch!",
    "lv": "Klara, molim te postavi sto!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss die Servietten nicht!",
    "lv": "Ne zaboravite salvete!",
    "level": "Sätze"
  },
  {
    "de": "Wann esst ihr zu Mittag?",
    "lv": "Kada ručate",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit zu essen.",
    "lv": "Vrijeme je za jelo.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es heute zu Mittag?",
    "lv": "Šta je danas za ručak?",
    "level": "Sätze"
  },
  {
    "de": "Wie schmeckt dir die Suppe?",
    "lv": "Kako vam se sviđa supa?",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt ist sie etwas zu salzig.",
    "lv": "Iskreno, malo je preslan.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dir ein Stück Brot geben?",
    "lv": "Mogu li vam dati parče hljeba?",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich habe schon.",
    "lv": "Hvala, već jesam.",
    "level": "Sätze"
  },
  {
    "de": "Das Fleisch schmeckt ausgezeichnet.",
    "lv": "Meso je odličnog ukusa.",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich bin schon satt.",
    "lv": "Hvala, već sam pun.",
    "level": "Sätze"
  },
  {
    "de": "Heute haben wir Besuch.",
    "lv": "Danas imamo posjetioce.",
    "level": "Sätze"
  },
  {
    "de": "Bist du heute Abend frei?",
    "lv": "Jesi li slobodan večeras",
    "level": "Sätze"
  },
  {
    "de": "Komm doch heute zum Mittagessen vorbei!",
    "lv": "Dođite danas na ručak!",
    "level": "Sätze"
  },
  {
    "de": "Setzen wir uns an den Tisch.",
    "lv": "Hajde da sednemo za sto.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, bedien dich!",
    "lv": "Jedite koliko želite!",
    "level": "Sätze"
  },
  {
    "de": "Stört dich das Rauchen?",
    "lv": "Smeta li vam pušenje?",
    "level": "Sätze"
  },
  {
    "de": "Danke für die nette Aufnahme!",
    "lv": "Hvala vam na toploj dobrodošlici!",
    "level": "Sätze"
  },
  {
    "de": "Wann gehst du ins Bett?",
    "lv": "Kada ideš na spavanje",
    "level": "Sätze"
  },
  {
    "de": "Wenn ich von der Arbeit komme, bin ich immer müde.",
    "lv": "Uvijek sam umoran kad dođem s posla.",
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
    "lv": "Želiš li prošetati sa mnom?",
    "level": "Sätze"
  },
  {
    "de": "Sieh mal, es wird gleich regnen.",
    "lv": "Gledaj, uskoro će padati kiša.",
    "level": "Sätze"
  },
  {
    "de": "Nimm den Regenschirm mit!",
    "lv": "Ponesite kišobran sa sobom!",
    "level": "Sätze"
  },
  {
    "de": "Es regnet.",
    "lv": "Pada kiša.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin schon ganz nass.",
    "lv": "Već sam potpuno mokar.",
    "level": "Sätze"
  },
  {
    "de": "Glaubst du, dass es den ganzen Tag regnen wird?",
    "lv": "Mislite da će padati kiša cijeli dan?",
    "level": "Sätze"
  },
  {
    "de": "Es hört auf zu regnen.",
    "lv": "Kiša prestaje.",
    "level": "Sätze"
  },
  {
    "de": "Die Sonne scheint wieder.",
    "lv": "Sunce ponovo sija.",
    "level": "Sätze"
  },
  {
    "de": "Es ist sehr warm.",
    "lv": "Veoma je vruće.",
    "level": "Sätze"
  },
  {
    "de": "Es sieht nach Regen aus.",
    "lv": "Izgleda da će padati kiša.",
    "level": "Sätze"
  },
  {
    "de": "Wir bekommen gleich ein Gewitter.",
    "lv": "Spremamo se za oluju.",
    "level": "Sätze"
  },
  {
    "de": "Das Gewitter zieht vorüber.",
    "lv": "Oluja je prošla.",
    "level": "Sätze"
  },
  {
    "de": "Die Wolken verziehen sich.",
    "lv": "Oblaci se rasturaju.",
    "level": "Sätze"
  },
  {
    "de": "Siehst du den Regenbogen?",
    "lv": "Vidite dugu?",
    "level": "Sätze"
  },
  {
    "de": "Der Winter ist da, es hat geschneit.",
    "lv": "Zima je stigla, noću je padao snijeg.",
    "level": "Sätze"
  },
  {
    "de": "Es schneit.",
    "lv": "Pada snijeg.",
    "level": "Sätze"
  },
  {
    "de": "Wie schön ist es im Wald im Winter!",
    "lv": "Kako je lepo u šumi zimi!",
    "level": "Sätze"
  },
  {
    "de": "Mir ist kalt, ich friere.",
    "lv": "Hladno mi je, smrzavam se.",
    "level": "Sätze"
  },
  {
    "de": "Draußen ist Glatteis, pass auf!",
    "lv": "Napolju je klizavo, oprezno!",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir auf die Eisbahn gehen?",
    "lv": "Hoćemo li na klizanje?",
    "level": "Sätze"
  },
  {
    "de": "Zieh die Jacke an, du kannst dich erkälten.",
    "lv": "Obuci jaknu, mogao bi se prehladiti.",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb sieben.",
    "lv": "Pola je osam.",
    "level": "Sätze"
  },
  {
    "de": "Meine Uhr geht fünf Minuten vor.",
    "lv": "Moj sat je brz pet minuta.",
    "level": "Sätze"
  },
  {
    "de": "Weck mich morgen früh um sieben Uhr!",
    "lv": "Probudi me sutra u sedam sati!",
    "level": "Sätze"
  },
  {
    "de": "Was ist heute für ein Datum?",
    "lv": "Koji je danas datum?",
    "level": "Sätze"
  },
  {
    "de": "Heute ist der elfte Juli.",
    "lv": "Danas je jedanaesti jul.",
    "level": "Sätze"
  },
  {
    "de": "Was machst du gewöhnlich am Abend?",
    "lv": "Šta obično radite uveče?",
    "level": "Sätze"
  },
  {
    "de": "Es ist schon lange her, dass wir uns gesehen haben.",
    "lv": "Nismo se dugo sreli.",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es dir?",
    "lv": "Kako si",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, ich möchte etwas mit dir besprechen.",
    "lv": "Izvinite, želim nešto da razgovaram sa vama.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir spazieren!",
    "lv": "Idemo u šetnju!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Lust, mit mir in den Park zu gehen?",
    "lv": "Hoćeš li sa mnom u park?",
    "level": "Sätze"
  },
  {
    "de": "Ich komme, um dich zum Spaziergang abzuholen.",
    "lv": "Došao sam da te odvedem u šetnju.",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte etwas langsamer, ich kann dir nicht folgen!",
    "lv": "Idi malo sporije, ne mogu da te pratim!",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zum ersten Mal in dieser Gegend.",
    "lv": "Ovdje sam prvi put.",
    "level": "Sätze"
  },
  {
    "de": "Ruhen wir uns ein wenig aus.",
    "lv": "Hajde da se odmorimo malo.",
    "level": "Sätze"
  },
  {
    "de": "Jetzt können wir zurückgehen.",
    "lv": "Sada se možemo vratiti.",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt bin ich ziemlich müde.",
    "lv": "Iskreno, prilično sam umoran.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, wo ist die nächste U-Bahn-Station?",
    "lv": "Izvinite, gde je najbliža stanica metroa?",
    "level": "Sätze"
  },
  {
    "de": "Welcher ist der kürzeste Weg?",
    "lv": "Koji je najkraći put?",
    "level": "Sätze"
  },
  {
    "de": "Geh hier die zweite Straße links und dann immer geradeaus.",
    "lv": "Ovdje idite drugom ulicom lijevo i idite pravo.",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich am schnellsten zum Bahnhof?",
    "lv": "Kako brže doći do stanice?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe vor, morgen zu verreisen.",
    "lv": "Namjeravam otići sutra.",
    "level": "Sätze"
  },
  {
    "de": "Wohin willst du fahren?",
    "lv": "Gdje želiš ići?",
    "level": "Sätze"
  },
  {
    "de": "Reist du geschäftlich oder privat?",
    "lv": "Putujete li zbog posla ili razonode?",
    "level": "Sätze"
  },
  {
    "de": "Finn fährt bis Berlin mit, dann geht er ans Meer.",
    "lv": "Fin se vozi za Berlin, a onda ide na more.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt das Schiff ab?",
    "lv": "Kada polazi brod?",
    "level": "Sätze"
  },
  {
    "de": "In einer halben Stunde.",
    "lv": "Nakon pola sata.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich noch eine Kabine bekommen?",
    "lv": "Mogu li još dobiti kabinu?",
    "level": "Sätze"
  },
  {
    "de": "Vergiss deinen Pass nicht!",
    "lv": "Ne zaboravite pasoš!",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, den Koffer zu packen.",
    "lv": "Vrijeme je da spakujete kofer.",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt um halb sieben ab.",
    "lv": "Voz polazi u pola osam.",
    "level": "Sätze"
  },
  {
    "de": "Hol mir bitte ein Taxi, ich verpasse sonst den Zug!",
    "lv": "Pozovite taksi, molim vas, inače ću propustiti voz!",
    "level": "Sätze"
  },
  {
    "de": "Fahr bitte zum Bahnhof!",
    "lv": "Molim vas, odvedite me u stanicu!",
    "level": "Sätze"
  },
  {
    "de": "Ich muss mich beeilen.",
    "lv": "Moram da požurim.",
    "level": "Sätze"
  },
  {
    "de": "Ist der Schalter schon offen?",
    "lv": "Da li je blagajna već otvorena?",
    "level": "Sätze"
  },
  {
    "de": "Eine Fahrkarte nach Köln, bitte.",
    "lv": "Jednu kartu za Keln, molim.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt der Zug ab?",
    "lv": "Kada polazi voz?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt gleich ab.",
    "lv": "Voz uskoro polazi.",
    "level": "Sätze"
  },
  {
    "de": "Muss ich in Koblenz umsteigen?",
    "lv": "Moram li promijeniti sjedište u Koblenzu?",
    "level": "Sätze"
  },
  {
    "de": "Ja, dort musst du umsteigen.",
    "lv": "Da, tamo morate promijeniti sjedišta.",
    "level": "Sätze"
  },
  {
    "de": "Ist dieser Platz frei?",
    "lv": "Je li ovo mjesto dostupno?",
    "level": "Sätze"
  },
  {
    "de": "Nein, hier sitzt niemand.",
    "lv": "Ne, niko ne sedi ovde.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der Bahnsteigkartenautomat?",
    "lv": "Gdje je automat za prodaju karata?",
    "level": "Sätze"
  },
  {
    "de": "Stell mein Handgepäck ins Gepäcknetz.",
    "lv": "Stavi moj ručni prtljag u rešetku.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das Fenster aufmachen?",
    "lv": "Mogu li otvoriti prozor?",
    "level": "Sätze"
  },
  {
    "de": "Es zieht, schließ bitte das Fenster!",
    "lv": "Provucite, molim vas zatvorite prozor!",
    "level": "Sätze"
  },
  {
    "de": "Welche ist die nächste Station?",
    "lv": "Koja je sljedeća stanica?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange hält der Zug?",
    "lv": "Koliko dugo stoji voz?",
    "level": "Sätze"
  },
  {
    "de": "Wo muss ich umsteigen?",
    "lv": "Gdje da se prebacim?",
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
    "lv": "Sada se vozimo preko granice.",
    "level": "Sätze"
  },
  {
    "de": "Hast du etwas zu verzollen?",
    "lv": "Imate li nešto da očistite?",
    "level": "Sätze"
  },
  {
    "de": "Wir sind in Berlin angekommen.",
    "lv": "Stigli smo u Berlin.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir ein gutes Hotel empfehlen?",
    "lv": "Možete li preporučiti dobar hotel?",
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
    "lv": "Koliko košta soba po noći?",
    "level": "Sätze"
  },
  {
    "de": "Morgen reise ich ab. Weck mich um sieben Uhr!",
    "lv": "Odlazim sutra. Probudi me u sedam!",
    "level": "Sätze"
  },
  {
    "de": "Die Rechnung, bitte!",
    "lv": "Bille, molim te!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Stadtbibliothek?",
    "lv": "Gdje je gradska biblioteka?",
    "level": "Sätze"
  },
  {
    "de": "Wann hat das Museum geöffnet?",
    "lv": "Kada je muzej otvoren?",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir ins Museum gehen?",
    "lv": "Hoćemo li u muzej?",
    "level": "Sätze"
  },
  {
    "de": "Fahren wir mit dem Bus oder der U-Bahn?",
    "lv": "Idemo li autobusom ili podzemnom željeznicom?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die nächste Bushaltestelle?",
    "lv": "Gdje je najbliža autobuska stanica?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe großen Hunger.",
    "lv": "Veoma sam gladan.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir zusammen essen?",
    "lv": "Hoćemo li zajedno da jedemo?",
    "level": "Sätze"
  },
  {
    "de": "Kellner, die Speisekarte, bitte!",
    "lv": "Konobari, meni, molim!",
    "level": "Sätze"
  },
  {
    "de": "Ist der Fisch frisch?",
    "lv": "Je li riba svježa?",
    "level": "Sätze"
  },
  {
    "de": "Das schmeckt ausgezeichnet!",
    "lv": "Odličnog je ukusa!",
    "level": "Sätze"
  },
  {
    "de": "Kellner, zahlen bitte!",
    "lv": "Konobari, platite!",
    "level": "Sätze"
  },
  {
    "de": "Ich gehe ins Café einen Kaffee trinken.",
    "lv": "Otići ću u kafić da popijem kafu.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mitkommen?",
    "lv": "Hoćeš da pođeš?",
    "level": "Sätze"
  },
  {
    "de": "Eine Tasse Kaffee mit Milch, bitte!",
    "lv": "Šoljicu kafe sa mlekom, molim!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneller, ich habe es eilig!",
    "lv": "Brže molim, moram da požurim!",
    "level": "Sätze"
  },
  {
    "de": "Lass deinen Kaffee nicht kalt werden!",
    "lv": "Ne dozvolite da se kafa ohladi!",
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
    "lv": "Moram da mu pišem sada.",
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
    "de": "Erinnere mich morgen daran zu schreiben!",
    "lv": "Podsjeti me da potpišem sutra!",
    "level": "Sätze"
  },
  {
    "de": "Werfen Sie bitte diesen Brief in den Briefkasten.",
    "lv": "Ostavite ovo pismo u poštansko sanduče!",
    "level": "Sätze"
  },
  {
    "de": "Hallo, hier spricht Emma.",
    "lv": "Zdravo, ovo je Emma.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich dich später anrufen?",
    "lv": "Mogu li te nazvati kasnije",
    "level": "Sätze"
  },
  {
    "de": "Muss ich lange warten?",
    "lv": "Moram li dugo čekati?",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneiden Sie mir die Haare.",
    "lv": "Molim te ošišaj me.",
    "level": "Sätze"
  },
  {
    "de": "Hinten bitte nicht zu kurz.",
    "lv": "Pozadi, molim, ne prekratko.",
    "level": "Sätze"
  },
  {
    "de": "Wann beginnt die Vorstellung?",
    "lv": "Kada počinje emisija?",
    "level": "Sätze"
  },
  {
    "de": "Es fängt um halb acht an.",
    "lv": "Počinje u pola devet.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind ausverkauft.",
    "lv": "Sve karte su rasprodate.",
    "level": "Sätze"
  },
  {
    "de": "Drei Karten, bitte!",
    "lv": "Tri karte, molim!",
    "level": "Sätze"
  },
  {
    "de": "Wir lassen die Jacken in der Garderobe.",
    "lv": "Ostavimo jakne u ormaru.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schnell, der Vorhang geht gleich auf!",
    "lv": "Brže, molim vas, zavjesa će se otvoriti!",
    "level": "Sätze"
  },
  {
    "de": "Der Vorhang fällt.",
    "lv": "Zavjesa pada.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dich zum Tanz bitten?",
    "lv": "Mogu li te zamoliti za ples?",
    "level": "Sätze"
  },
  {
    "de": "Wann ist eure Hochzeit?",
    "lv": "Kada je tvoje vjenčanje?",
    "level": "Sätze"
  },
  {
    "de": "Ich suche eine Wohnung.",
    "lv": "Tražim stan.",
    "level": "Sätze"
  },
  {
    "de": "Ist in diesem Haus eine Wohnung frei?",
    "lv": "Ima li slobodan stan u ovoj kući?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet die Miete?",
    "lv": "Koliko je kirija?",
    "level": "Sätze"
  },
  {
    "de": "Die Wohnung hat drei Zimmer und eine Küche.",
    "lv": "Stan ima tri sobe i kuhinju.",
    "level": "Sätze"
  },
  {
    "de": "Heute ziehen wir um.",
    "lv": "Danas krećemo.",
    "level": "Sätze"
  },
  {
    "de": "Mia, pack die Sachen bitte in Kisten!",
    "lv": "Mia, stavi stvari u kutije, molim te!",
    "level": "Sätze"
  },
  {
    "de": "Hast du alles eingepackt?",
    "lv": "Je li sve već upakovano?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe mit meinem Freund in Kontakt.",
    "lv": "Ja sam u prepisci sa svojim prijateljem.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir ins Theater?",
    "lv": "Hoćemo li u pozorište?",
    "level": "Sätze"
  },
  {
    "de": "Ist alles eingeladen?",
    "lv": "Je li sve napunjeno?",
    "level": "Sätze"
  },
  {
    "de": "Welch schöne Aussicht!",
    "lv": "Kakav divan pogled!",
    "level": "Sätze"
  },
  {
    "de": "Nun können wir alles wieder aufräumen.",
    "lv": "Sada možemo sve ponovo sastaviti.",
    "level": "Sätze"
  },
  {
    "de": "Wie viele Zimmer habt ihr?",
    "lv": "Koliko soba imate?",
    "level": "Sätze"
  },
  {
    "de": "Im Sommer fahre ich ans Meer.",
    "lv": "Ići ću na more na ljeto.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du schwimmen?",
    "lv": "Znaš li plivati",
    "level": "Sätze"
  },
  {
    "de": "Schwimm nicht zu weit hinaus!",
    "lv": "Ne plivajte predaleko!",
    "level": "Sätze"
  },
  {
    "de": "Badest du jeden Tag?",
    "lv": "Da li plivaš svaki dan?",
    "level": "Sätze"
  },
  {
    "de": "Bei schönem Wetter gehe ich angeln.",
    "lv": "Ako je lijepo vrijeme, idem na pecanje.",
    "level": "Sätze"
  },
  {
    "de": "Wie sieht er aus?",
    "lv": "Kako on izgleda?",
    "level": "Sätze"
  },
  {
    "de": "Er hat sich aber recht verändert.",
    "lv": "Međutim, on se prilično promijenio.",
    "level": "Sätze"
  },
  {
    "de": "Wie ist er als Mensch?",
    "lv": "Kakav je on kao osoba?",
    "level": "Sätze"
  },
  {
    "de": "Er ist immer nett und freundlich.",
    "lv": "Uvek je fin i ljubazan.",
    "level": "Sätze"
  },
  {
    "de": "Ich fühle mich nicht wohl.",
    "lv": "Osećam se loše.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe starke Kopfschmerzen.",
    "lv": "Imam jaku glavobolju.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe mich erkältet.",
    "lv": "Imam prehladu.",
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
    "lv": "Moram kod doktora.",
    "level": "Sätze"
  },
  {
    "de": "Leg dich ins Bett!",
    "lv": "Lezi u krevet!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Fieber?",
    "lv": "Imate li temperaturu?",
    "level": "Sätze"
  },
  {
    "de": "Gestern hatte ich erhöhte Temperatur.",
    "lv": "Jučer sam imao visoku temperaturu.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Zahnschmerzen.",
    "lv": "Boli me zub.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Zahnarzt gehen.",
    "lv": "Moram kod zubara.",
    "level": "Sätze"
  },
  {
    "de": "Weißt du, dass Finn krank ist?",
    "lv": "Znate li da je Fin bolestan?",
    "level": "Sätze"
  },
  {
    "de": "Laut Arzt wird er bald wieder gesund.",
    "lv": "Prema riječima ljekara, uskoro će ponovo biti dobro.",
    "level": "Sätze"
  },
  {
    "de": "Ich will meine Wohnung neu möblieren.",
    "lv": "Želim da preuredim stan.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das auf Raten kaufen?",
    "lv": "Mogu li kupiti na rate?",
    "level": "Sätze"
  },
  {
    "de": "Bleib im Bett, bis es dir besser geht!",
    "lv": "Ostanite u krevetu dok vam ne bude bolje!",
    "level": "Sätze"
  },
  {
    "de": "Noah hat in zwei Wochen schwimmen gelernt.",
    "lv": "Noa je naučio plivati ​​za dvije sedmice.",
    "level": "Sätze"
  },
  {
    "de": "Sei mit dem Essen noch vorsichtig.",
    "lv": "Budite oprezni sa hranom.",
    "level": "Sätze"
  },
  {
    "de": "Sprichst du Deutsch?",
    "lv": "Govoriš li njemački",
    "level": "Sätze"
  },
  {
    "de": "Ja, ein bisschen.",
    "lv": "Da, malo.",
    "level": "Sätze"
  },
  {
    "de": "Du sprichst ziemlich fließend.",
    "lv": "Govorite prilično tečno.",
    "level": "Sätze"
  },
  {
    "de": "Wo hast du Deutsch gelernt?",
    "lv": "Gdje si naučio njemački?",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme seit einem Jahr Deutschstunden.",
    "lv": "Pohađao sam časove njemačkog već godinu dana.",
    "level": "Sätze"
  },
  {
    "de": "Ich suche immer Gelegenheit, Deutsch zu sprechen.",
    "lv": "Uvijek tražim priliku da pričam njemački.",
    "level": "Sätze"
  },
  {
    "de": "Ist das Buch noch vorrätig?",
    "lv": "Je li ova knjiga još uvijek dostupna?",
    "level": "Sätze"
  },
  {
    "de": "Das Buch ist leider ausverkauft.",
    "lv": "Nažalost, knjiga je rasprodata.",
    "level": "Sätze"
  },
  {
    "de": "Wann erscheint die neue Auflage?",
    "lv": "Kada će izaći novo izdanje?",
    "level": "Sätze"
  },
  {
    "de": "Womit kann ich Ihnen helfen?",
    "lv": "Kako mogu pomoći?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie ganz frische Eier?",
    "lv": "Imate li svježih jaja?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die?",
    "lv": "Koliko koštaju?",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu teuer.",
    "lv": "Preskupo je.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir ein halbes Kilo abwiegen?",
    "lv": "Možeš li imati pola kilograma?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel muss ich zahlen?",
    "lv": "Koliko moram da platim?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet das Kilo?",
    "lv": "Koliko košta kilogram?",
    "level": "Sätze"
  },
  {
    "de": "Wiegen Sie mir bitte zwei Kilo ab.",
    "lv": "Molimo vas da imate dva kilograma.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch Karotten?",
    "lv": "Imate li i vi šargarepe?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie gutes Rindfleisch?",
    "lv": "Imate li dobru govedinu?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir zwei Kilo Hackfleisch.",
    "lv": "Dajte dva kilograma mljevenog mesa.",
    "level": "Sätze"
  },
  {
    "de": "Ein Laib Brot, bitte, aber nicht zu knusprig.",
    "lv": "Molim jednu veknu hleba, ali ne pretvrdu.",
    "level": "Sätze"
  },
  {
    "de": "Das Brot ist frisch gebacken.",
    "lv": "Hleb je sveže pečen.",
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
    "lv": "Možete li sve isporučiti kući?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie Reis?",
    "lv": "Imate li pirinča?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir bitte ein Kilo Reis.",
    "lv": "Daj mi kilogram pirinča, molim te.",
    "level": "Sätze"
  },
  {
    "de": "Danke, diesmal nicht.",
    "lv": "Hvala, ne ovaj put.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet dieser Teppich?",
    "lv": "Koliko je ovaj tepih?",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Möbel in meine Wohnung liefern?",
    "lv": "Možete li dostaviti namještaj u stan?",
    "level": "Sätze"
  },
  {
    "de": "Bitte an der Kasse zahlen.",
    "lv": "Molimo platite na blagajni.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, machen Sie die Rechnung.",
    "lv": "Izdajte fakturu.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Meter?",
    "lv": "Koliko košta metar?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Stoff gefällt mir.",
    "lv": "Volim ovu tkaninu.",
    "level": "Sätze"
  },
  {
    "de": "Schneiden Sie mir bitte drei Meter ab.",
    "lv": "Molim vas, odrežite tri metra.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch andere Muster?",
    "lv": "Imate li druge uzorke?",
    "level": "Sätze"
  },
  {
    "de": "Diese Farbe gefällt mir nicht.",
    "lv": "Ne sviđa mi se ova boja.",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir eine hellere.",
    "lv": "Dajte svjetlije.",
    "level": "Sätze"
  },
  {
    "de": "Was kosten diese Socken?",
    "lv": "Koliko su ove čarape?",
    "level": "Sätze"
  },
  {
    "de": "Welche Handschuhe wünschen Sie?",
    "lv": "Kakve rukavice želite?",
    "level": "Sätze"
  },
  {
    "de": "Die sind mir etwas zu eng.",
    "lv": "Malo su mi preuske.",
    "level": "Sätze"
  },
  {
    "de": "So, nun passen sie gut.",
    "lv": "Dakle, sada radi dobro.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir einen guten Schneider empfehlen?",
    "lv": "Možete li preporučiti dobrog krojača?",
    "level": "Sätze"
  },
  {
    "de": "Ich will einen Anzug bestellen.",
    "lv": "Želim da naručim odelo.",
    "level": "Sätze"
  },
  {
    "de": "Wann wird er fertig sein?",
    "lv": "Kada će biti spreman?",
    "level": "Sätze"
  },
  {
    "de": "Der Anzug sitzt gut.",
    "lv": "Odijelo dobro stoji.",
    "level": "Sätze"
  },
  {
    "de": "Die Hose ist zu lang.",
    "lv": "Pantalone su predugačke.",
    "level": "Sätze"
  },
  {
    "de": "Bitte reinigen und bügeln Sie ihn!",
    "lv": "Očistite ga i peglajte!",
    "level": "Sätze"
  },
  {
    "de": "Wann wird das Kleid fertig sein?",
    "lv": "Kada će haljina biti spremna?",
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
    "lv": "Kada mogu donijeti cipele?",
    "level": "Sätze"
  },
  {
    "de": "Meine Armbanduhr funktioniert nicht.",
    "lv": "Moj ručni sat ne radi.",
    "level": "Sätze"
  },
  {
    "de": "Sie geht fünf Minuten vor.",
    "lv": "Pet minuta je ranije.",
    "level": "Sätze"
  },
  {
    "de": "Bist du kurzsichtig oder weitsichtig?",
    "lv": "Da li ste kratkovidni ili dalekovidni?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte eine Brille kaufen.",
    "lv": "Želim da kupim naočare.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie meine Brille reparieren?",
    "lv": "Možeš li mi popraviti naočare?",
    "level": "Sätze"
  },
  {
    "de": "Das dauert nur eine Viertelstunde.",
    "lv": "To će trajati samo petnaest minuta.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist mir zu hoch.",
    "lv": "Cijena mi je previsoka.",
    "level": "Sätze"
  },
  {
    "de": "Ich brauche zwei Fotos für meinen Pass.",
    "lv": "Trebaju mi ​​dvije fotografije za pasoš.",
    "level": "Sätze"
  },
  {
    "de": "Bitte packen Sie es ein und schicken Sie es mir nach Hause.",
    "lv": "Molimo spakujte i pošaljite kući.",
    "level": "Sätze"
  },
  {
    "de": "Wir haben feste Preise.",
    "lv": "Imamo fiksne cijene.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, fotografieren Sie mich.",
    "lv": "Molim te, slikaj me.",
    "level": "Sätze"
  },
  {
    "de": "Setzen Sie sich, schauen Sie gerade in die Kamera und bewegen Sie sich nicht!",
    "lv": "Sedi, gledaj pravo u kameru i ne miči se!",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich das Probebild sehen?",
    "lv": "Kada mogu vidjeti uzorak?",
    "level": "Sätze"
  },
  {
    "de": "Wann sind die Fotos fertig?",
    "lv": "Kada će fotografije biti gotove?",
    "level": "Sätze"
  },
  {
    "de": "Die Aufnahme ist gelungen.",
    "lv": "Fotografija je uspjela.",
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
    "lv": "Da li je ovo kamenje stvarno?",
    "level": "Sätze"
  },
  {
    "de": "Ist das echtes Gold?",
    "lv": "Je li pravo zlato?",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir bitte Trauringe.",
    "lv": "Pokažite mi burme, molim vas.",
    "level": "Sätze"
  },
  {
    "de": "Der Ring ist mir etwas zu weit.",
    "lv": "Prsten mi je malo prevelik.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann ihn enger machen.",
    "lv": "Mogu suziti.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Ring passt mir.",
    "lv": "Ovaj prsten mi odgovara.",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir schöne Geschenkideen.",
    "lv": "Pokažite prekrasne ideje za poklone.",
    "level": "Sätze"
  },
  {
    "de": "Wie gefallen dir diese Ohrringe?",
    "lv": "Kako vam se sviđaju ove minđuše?",
    "level": "Sätze"
  },
  {
    "de": "Diese Brosche ist wirklich schön.",
    "lv": "Ovaj broš je veoma lep.",
    "level": "Sätze"
  },
  {
    "de": "Der Stein ist ein Saphir.",
    "lv": "Ovaj kamen je safir.",
    "level": "Sätze"
  },
  {
    "de": "Das ist kein echter Stein, das ist Glas.",
    "lv": "Ovo nije pravi kamen, to je staklo.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Armband kann ich Ihnen besonders empfehlen.",
    "lv": "Posebno mogu preporučiti ovu narukvicu.",
    "level": "Sätze"
  },
  {
    "de": "Es ist besonders schön gearbeitet.",
    "lv": "Izuzetno je fino izrađen.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist nicht hoch.",
    "lv": "Cijena nije visoka.",
    "level": "Sätze"
  },
  {
    "de": "Bekomme ich die Schachtel gratis?",
    "lv": "Jesam li dobio kutiju besplatno?",
    "level": "Sätze"
  },
  {
    "de": "Alle Schmuckstücke sind gestempelt.",
    "lv": "Sav nakit je žigosan.",
    "level": "Sätze"
  },
  {
    "de": "Falls es meiner Frau nicht gefällt, kann ich es umtauschen?",
    "lv": "Ako se mojoj ženi ne sviđa, mogu li je zamijeniti?",
    "level": "Sätze"
  },
  {
    "de": "Natürlich, jederzeit.",
    "lv": "Bilo kada, naravno.",
    "level": "Sätze"
  }
];

window.SENTENCE_ENTRIES = SENTENCE_ENTRIES;

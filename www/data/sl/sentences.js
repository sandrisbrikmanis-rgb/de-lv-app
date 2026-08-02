const SENTENCE_ENTRIES = [
  {
    "de": "Hüte dich davor!",
    "lv": "Pazite se!",
    "level": "Sätze"
  },
  {
    "de": "Wenn nichts dazwischenkommt.",
    "lv": "Če nič ne moti. • Če gre vse po načrtih.",
    "level": "Sätze"
  },
  {
    "de": "Das kann ich mir denken!",
    "lv": "Vem to!",
    "level": "Sätze"
  },
  {
    "de": "Ist er denn krank?",
    "lv": "Je potem bolan?",
    "level": "Sätze"
  },
  {
    "de": "Was denn?",
    "lv": "Kaj potem?",
    "level": "Sätze"
  },
  {
    "de": "Desto mehr.",
    "lv": "Čim več.",
    "level": "Sätze"
  },
  {
    "de": "Je mehr, desto besser.",
    "lv": "Več kot je, bolje je.",
    "level": "Sätze"
  },
  {
    "de": "Alles deutet auf Regen.",
    "lv": "Vse kaže na primer.",
    "level": "Sätze"
  },
  {
    "de": "Damit ist mir wenig gedient.",
    "lv": "Zame je malo smiselno.",
    "level": "Sätze"
  },
  {
    "de": "Er ist dienstlich verhindert.",
    "lv": "Ne more priti zaradi službe.",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie doch!",
    "lv": "Spregovori!",
    "level": "Sätze"
  },
  {
    "de": "Es donnert.",
    "lv": "Grom tuli.",
    "level": "Sätze"
  },
  {
    "de": "Doppelt so groß.",
    "lv": "Divtik liels.",
    "level": "Sätze"
  },
  {
    "de": "Von dort.",
    "lv": "No turienes.",
    "level": "Sätze"
  },
  {
    "de": "Die Zeit drängt.",
    "lv": "Čas se izteka.",
    "level": "Sätze"
  },
  {
    "de": "Ihn drücken Sorgen.",
    "lv": "Prevzame ga skrb.",
    "level": "Sätze"
  },
  {
    "de": "Hast du das Buch durchgearbeitet?",
    "lv": "Ste skrbno prelistali knjigo?",
    "level": "Sätze"
  },
  {
    "de": "Kein Durchgang!",
    "lv": "Ne pojdi skozi! • Izhod zaprt!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich Sie bitten?",
    "lv": "Te lahko vprašam",
    "level": "Sätze"
  },
  {
    "de": "Ich bin durstig.",
    "lv": "Žejen sem.",
    "level": "Sätze"
  },
  {
    "de": "Eben das meine ich.",
    "lv": "Točno to mislim.",
    "level": "Sätze"
  },
  {
    "de": "Es ist ganz egal.",
    "lv": "To sploh ni pomembno.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie eigentlich?",
    "lv": "Kaj si pravzaprav želiš?",
    "level": "Sätze"
  },
  {
    "de": "Eilt es mit dieser Sache?",
    "lv": "Je ta zadeva nujna?",
    "level": "Sätze"
  },
  {
    "de": "Eilt sehr!",
    "lv": "Zelo nujno!",
    "level": "Sätze"
  },
  {
    "de": "Ich habe es eilig.",
    "lv": "Se mi mudi.",
    "level": "Sätze"
  },
  {
    "de": "Du bildest dir nur ein, krank zu sein.",
    "lv": "Samo predstavljate si, da ste bolni.",
    "level": "Sätze"
  },
  {
    "de": "Was fällt dir ein?",
    "lv": "Kaj vam pride na misel?",
    "level": "Sätze"
  },
  {
    "de": "Es war einmal.",
    "lv": "Nekoč je bilo.",
    "level": "Sätze"
  },
  {
    "de": "Steigen Sie bitte ein!",
    "lv": "Prosim vstopite!",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie ein!",
    "lv": "Prosim vstopite!",
    "level": "Sätze"
  },
  {
    "de": "Einzelnes hat mir dort gefallen.",
    "lv": "Nekatere stvari so mi bile tam všeč.",
    "level": "Sätze"
  },
  {
    "de": "Es empfiehlt sich.",
    "lv": "Priporočljivo je.",
    "level": "Sätze"
  },
  {
    "de": "Diese Flasche enthält Essig.",
    "lv": "Ta steklenica vsebuje kis.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldigen Sie bitte!",
    "lv": "Oprostite, prosim!",
    "level": "Sätze"
  },
  {
    "de": "Entweder... oder...",
    "lv": "Ali ... ali ...",
    "level": "Sätze"
  },
  {
    "de": "Wer war der Erste?",
    "lv": "Kdo je bil prvi?",
    "level": "Sätze"
  },
  {
    "de": "Wer fehlt heute?",
    "lv": "Kdo še ni prišel danes?",
    "level": "Sätze"
  },
  {
    "de": "Was fehlt dir?",
    "lv": "Kaj je narobe s teboj?",
    "level": "Sätze"
  },
  {
    "de": "Wie heißen Sie?",
    "lv": "Kako ti je ime",
    "level": "Sätze"
  },
  {
    "de": "Was soll das heißen?",
    "lv": "Ko tas nozīmē?",
    "level": "Sätze"
  },
  {
    "de": "Bitte treten Sie näher heran!",
    "lv": "Prosim pridi bližje!",
    "level": "Sätze"
  },
  {
    "de": "Heraus mit der Sprache!",
    "lv": "Govori! • Zgodbe!",
    "level": "Sätze"
  },
  {
    "de": "im Herbst",
    "lv": "rudenī",
    "level": "Sätze"
  },
  {
    "de": "Meine Herrschaften!",
    "lv": "Dame in gospodje!",
    "level": "Sätze"
  },
  {
    "de": "von heute an",
    "lv": "sākot ar šodienu",
    "level": "Sätze"
  },
  {
    "de": "heute früh",
    "lv": "šorīt",
    "level": "Sätze"
  },
  {
    "de": "heute Nacht",
    "lv": "šonakt",
    "level": "Sätze"
  },
  {
    "de": "Zu Hilfe!",
    "lv": "Pomoč!",
    "level": "Sätze"
  },
  {
    "de": "Ich lerne jeden Tag Deutsch.",
    "lv": "Nemščino se učim vsak dan.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das bitte wiederholen?",
    "lv": "Lahko to ponovite prosim?",
    "level": "Sätze"
  },
  {
    "de": "Wir treffen uns am Bahnhof.",
    "lv": "Dobimo se na železniški postaji.",
    "level": "Sätze"
  },
  {
    "de": "Ich stimme dir teilweise zu.",
    "lv": "Delno se strinjam s teboj.",
    "level": "Sätze"
  },
  {
    "de": "Diese Entscheidung hat weitreichende Folgen.",
    "lv": "Ta odločitev ima daljnosežne posledice.",
    "level": "Sätze"
  },
  {
    "de": "Man sollte mehrere Perspektiven berücksichtigen.",
    "lv": "Upoštevati je treba več perspektiv.",
    "level": "Sätze"
  },
  {
    "de": "Könnten Sie das näher erläutern?",
    "lv": "Ali lahko to podrobneje pojasnite?",
    "level": "Sätze"
  },
  {
    "de": "Was mich anbelangt,...",
    "lv": "Kar se mene tiče ...",
    "level": "Sätze"
  },
  {
    "de": "Wie alt sind Sie?",
    "lv": "Koliko si stara",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zwanzig Jahre alt.",
    "lv": "Stara sem dvajset let.",
    "level": "Sätze"
  },
  {
    "de": "Von heute an.",
    "lv": "Od danes.",
    "level": "Sätze"
  },
  {
    "de": "Von jetzt an.",
    "lv": "Od zdaj naprej.",
    "level": "Sätze"
  },
  {
    "de": "Anders geht es nicht.",
    "lv": "Ni druge poti.",
    "level": "Sätze"
  },
  {
    "de": "Rufen Sie mich an.",
    "lv": "Pokliči me",
    "level": "Sätze"
  },
  {
    "de": "Bitte stellen Sie das Radio ab.",
    "lv": "Prosim izklopite radio.",
    "level": "Sätze"
  },
  {
    "de": "Achte bitte auf den Verkehr.",
    "lv": "Prosimo, bodite pozorni na promet.",
    "level": "Sätze"
  },
  {
    "de": "Darauf musst du achten.",
    "lv": "Na to morate biti pozorni.",
    "level": "Sätze"
  },
  {
    "de": "Heute mache ich es anders.",
    "lv": "Danes bom naredil drugače.",
    "level": "Sätze"
  },
  {
    "de": "Wir warten auf den Bus.",
    "lv": "Čakamo na avtobus.",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt allein.",
    "lv": "Živi sam.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Ausbildung absolviert.",
    "lv": "Končal sem usposabljanje. • Zaključil sem izobraževanje.",
    "level": "Sätze"
  },
  {
    "de": "Ich warte den Regen ab.",
    "lv": "Bom počakala, da preneha deževati.",
    "level": "Sätze"
  },
  {
    "de": "Er arbeitet in der Verkaufsabteilung.",
    "lv": "Dela v oddelku prodaje.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin allergisch gegen Katzen.",
    "lv": "Sem alergičen na mačke.",
    "level": "Sätze"
  },
  {
    "de": "Andererseits verstehe ich ihn.",
    "lv": "Po drugi strani pa ga razumem.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Situation analysiert.",
    "lv": "Es izanalizēju situāciju.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat meinen Vorschlag akzeptiert.",
    "lv": "Sprejela je moj predlog.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte das genauer analysieren.",
    "lv": "Želim ga natančneje analizirati.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte den Vertrag ändern.",
    "lv": "Želim spremeniti pogodbo.",
    "level": "Sätze"
  },
  {
    "de": "Er ändert ständig seine Meinung.",
    "lv": "Nenehno spreminja svoje mnenje.",
    "level": "Sätze"
  },
  {
    "de": "Ähnliche Probleme hatten wir schon früher.",
    "lv": "Podobne težave smo imeli že prej.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ahnung!",
    "lv": "Nimam pojma!",
    "level": "Sätze"
  },
  {
    "de": "Hör auf zu jammern.",
    "lv": "Nehajte se pritoževati.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Kleid ist akademisch gekleidet.",
    "lv": "Šī kleita ir stilīgi konservatīva.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre gerne Akkordeonmusik.",
    "lv": "Rad poslušam harmoniko.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das Gerät anklicken?",
    "lv": "Ali lahko kliknete na napravo?",
    "level": "Sätze"
  },
  {
    "de": "Bitte öffne die Datei und klicke darauf.",
    "lv": "Odprite datoteko in kliknite nanjo.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe einen Unfall gehabt.",
    "lv": "Bil sem v nesreči.",
    "level": "Sätze"
  },
  {
    "de": "Wir laufen zum Bahnhof.",
    "lv": "Gremo na postajo.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schalte den Fernseher an.",
    "lv": "Prosim prižgi TV.",
    "level": "Sätze"
  },
  {
    "de": "Mein Computer ist abgestürzt.",
    "lv": "Moj računalnik se je sesul.",
    "level": "Sätze"
  },
  {
    "de": "Am Wochenende gehe ich angeln.",
    "lv": "Konec tedna bom šel na ribolov.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe den Anruf verpasst.",
    "lv": "Zgrešil sem klic.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mich später anrufen?",
    "lv": "Me lahko pokličeš kasneje",
    "level": "Sätze"
  },
  {
    "de": "Bitte nimm meinen Vorschlag an.",
    "lv": "Prosim, sprejmite moj predlog.",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme dein Angebot an.",
    "lv": "Sprejemam vašo ponudbo.",
    "level": "Sätze"
  },
  {
    "de": "Er nahm die Einladung an.",
    "lv": "Povabilo je sprejel.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Angst vor Spinnen.",
    "lv": "Bojim se pajkov.",
    "level": "Sätze"
  },
  {
    "de": "Keine Angst, alles wird gut.",
    "lv": "Ne boj se, vse bo v redu.",
    "level": "Sätze"
  },
  {
    "de": "Anklang finden.",
    "lv": "Poiščite odmev. • Poiščite odzivnost",
    "level": "Sätze"
  },
  {
    "de": "Es kommt darauf an.",
    "lv": "Tas ir atkarīgs no tā.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Anlass.",
    "lv": "Šīs reizes dēļ. • Šajā sakarā",
    "level": "Sätze"
  },
  {
    "de": "Nehmen wir an, dass...",
    "lv": "Recimo, da ...",
    "level": "Sätze"
  },
  {
    "de": "Was hast du da angerichtet?",
    "lv": "Kaj si naredil tam",
    "level": "Sätze"
  },
  {
    "de": "Bis ans Ende.",
    "lv": "Vse do konca.",
    "level": "Sätze"
  },
  {
    "de": "Du glaubst mir anscheinend nicht.",
    "lv": "Zdi se, da mi ne verjameš.",
    "level": "Sätze"
  },
  {
    "de": "Meiner Ansicht nach...",
    "lv": "Po mojem...",
    "level": "Sätze"
  },
  {
    "de": "Stell dich nicht so an!",
    "lv": "Ne pretvarjaj se!",
    "level": "Sätze"
  },
  {
    "de": "An die Arbeit gehen.",
    "lv": "Loti se dela.",
    "level": "Sätze"
  },
  {
    "de": "Außer Atem sein.",
    "lv": "Biti brez sape.",
    "level": "Sätze"
  },
  {
    "de": "Guten Appetit!",
    "lv": "Labu apetīti!",
    "level": "Sätze"
  },
  {
    "de": "In einem Atemzug.",
    "lv": "V enem dihu.",
    "level": "Sätze"
  },
  {
    "de": "Auf jeden Fall.",
    "lv": "V vsakem primeru.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal war alles still.",
    "lv": "Nenadoma je vse utihnilo.",
    "level": "Sätze"
  },
  {
    "de": "Bitte mach die Tür auf!",
    "lv": "Prosim odprite vrata!",
    "level": "Sätze"
  },
  {
    "de": "Er hat den Kredit aufgenommen.",
    "lv": "Vzel je posojilo.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen heute aufräumen.",
    "lv": "Danes moramo pospraviti sobo.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre jetzt auf.",
    "lv": "Zdaj bom nehal.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schon auf.",
    "lv": "On je že pokonci.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen das Treffen verschieben.",
    "lv": "Sestanek moramo prestaviti.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat mich aufgeregt.",
    "lv": "Razdražila me je.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal.",
    "lv": "Nenadoma.",
    "level": "Sätze"
  },
  {
    "de": "Auf der Stelle.",
    "lv": "Takoj.",
    "level": "Sätze"
  },
  {
    "de": "Für den Schaden aufkommen.",
    "lv": "Pokrij škodo.",
    "level": "Sätze"
  },
  {
    "de": "Bitte die Tür auf!",
    "lv": "Odprite vrata, prosim!",
    "level": "Sätze"
  },
  {
    "de": "Aufrecht sitzen.",
    "lv": "Sedite naravnost.",
    "level": "Sätze"
  },
  {
    "de": "Er ist auf.",
    "lv": "Vstal je.",
    "level": "Sätze"
  },
  {
    "de": "Alle Kräfte aufwenden.",
    "lv": "Posvetite vse svoje moči.",
    "level": "Sätze"
  },
  {
    "de": "Viel Mühe aufwenden.",
    "lv": "Ļoti pūlēties.",
    "level": "Sätze"
  },
  {
    "de": "Geh mir aus den Augen!",
    "lv": "Ne glej me več!",
    "level": "Sätze"
  },
  {
    "de": "Unter vier Augen.",
    "lv": "V dveh. • Tiho",
    "level": "Sätze"
  },
  {
    "de": "Aus Mangel an Zeit.",
    "lv": "Zaradi pomanjkanja časa.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Grunde.",
    "lv": "Iz tega razloga.",
    "level": "Sätze"
  },
  {
    "de": "Alle außer dir.",
    "lv": "Vsi razen tebe.",
    "level": "Sätze"
  },
  {
    "de": "Auf Äußerlichkeiten Wert legen.",
    "lv": "Dajte pomen videzu.",
    "level": "Sätze"
  },
  {
    "de": "Im äußersten Fall.",
    "lv": "V najslabšem primeru.",
    "level": "Sätze"
  },
  {
    "de": "Äußerst wichtig.",
    "lv": "Izredno pomembno.",
    "level": "Sätze"
  },
  {
    "de": "Aussicht auf die See.",
    "lv": "Pogled na morje.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gute Aussichten.",
    "lv": "Ima dobre možnosti.",
    "level": "Sätze"
  },
  {
    "de": "Wie wird dieses Wort ausgesprochen?",
    "lv": "Kako se ta beseda izgovarja?",
    "level": "Sätze"
  },
  {
    "de": "Sein Beileid aussprechen.",
    "lv": "Izrazi sožalje.",
    "level": "Sätze"
  },
  {
    "de": "Wann wurden die Meisterschaftskämpfe ausgetragen?",
    "lv": "Kdaj je bilo prvenstvo?",
    "level": "Sätze"
  },
  {
    "de": "Welchen Beruf üben Sie aus?",
    "lv": "Kaj si po poklicu",
    "level": "Sätze"
  },
  {
    "de": "Einfluss ausüben.",
    "lv": "Vplivati.",
    "level": "Sätze"
  },
  {
    "de": "Auswärts essen.",
    "lv": "Jejte zunaj.",
    "level": "Sätze"
  },
  {
    "de": "Per Bahn.",
    "lv": "Pa dzelzceļu.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Bahn.",
    "lv": "Pa dzelzceļu.",
    "level": "Sätze"
  },
  {
    "de": "Möglichst bald.",
    "lv": "Čim prej.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist Angst und bange.",
    "lv": "Zelo me je strah.",
    "level": "Sätze"
  },
  {
    "de": "Auf die lange Bank schieben.",
    "lv": "Odlašajte. • Povleci na dolžino • Odloži za nedoločen čas",
    "level": "Sätze"
  },
  {
    "de": "Bar zahlen.",
    "lv": "Plačajte v gotovini.",
    "level": "Sätze"
  },
  {
    "de": "Erz bauen.",
    "lv": "Pridobite rudo.",
    "level": "Sätze"
  },
  {
    "de": "Mist bauen.",
    "lv": "Streljaj. • Delajte se norca iz sebe",
    "level": "Sätze"
  },
  {
    "de": "Ich bin beauftragt.",
    "lv": "Dodelili so mi službo.",
    "level": "Sätze"
  },
  {
    "de": "Nach Bedarf.",
    "lv": "Po potrebi.",
    "level": "Sätze"
  },
  {
    "de": "Ich bedauere ihn.",
    "lv": "Žal mi je zanj.",
    "level": "Sätze"
  },
  {
    "de": "Was bedeutet dieses Wort?",
    "lv": "Kaj pomeni ta beseda?",
    "level": "Sätze"
  },
  {
    "de": "Unter der Bedingung, dass...",
    "lv": "Pod pogojem, da ...",
    "level": "Sätze"
  },
  {
    "de": "Sie sieht bedrückt aus.",
    "lv": "Videti je depresivno.",
    "level": "Sätze"
  },
  {
    "de": "Hinweise befolgen.",
    "lv": "Sledite navodilom.",
    "level": "Sätze"
  },
  {
    "de": "Befehle befolgen.",
    "lv": "Sledite ukazom.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Post befördern.",
    "lv": "Pošlji po pošti.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin begierig zu wissen.",
    "lv": "Res bi rad vedel.",
    "level": "Sätze"
  },
  {
    "de": "Zu Beginn.",
    "lv": "Na začetku.",
    "level": "Sätze"
  },
  {
    "de": "Am Beginn.",
    "lv": "Na začetku.",
    "level": "Sätze"
  },
  {
    "de": "Bei Beginn.",
    "lv": "Začetek",
    "level": "Sätze"
  },
  {
    "de": "In Begleitung.",
    "lv": "Pavadībā.",
    "level": "Sätze"
  },
  {
    "de": "Mit seiner Begleitung.",
    "lv": "S spremljavo.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schwer von Begriff.",
    "lv": "Počasen dojema. • Ima počasno razmišljanje",
    "level": "Sätze"
  },
  {
    "de": "Im Gedächtnis behalten.",
    "lv": "Ne pozabite. • Shrani v spomin",
    "level": "Sätze"
  },
  {
    "de": "Bei Tisch.",
    "lv": "Za mizo.",
    "level": "Sätze"
  },
  {
    "de": "Bei Sinnen sein.",
    "lv": "Biti pri zdravi pameti.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tage.",
    "lv": "Čez dan.",
    "level": "Sätze"
  },
  {
    "de": "Bei weitem nicht so.",
    "lv": "Sploh ne.",
    "level": "Sätze"
  },
  {
    "de": "Alle beide.",
    "lv": "Oba dva.",
    "level": "Sätze"
  },
  {
    "de": "Stürmischer Beifall brach los.",
    "lv": "Sledil je bučen aplavz.",
    "level": "Sätze"
  },
  {
    "de": "Beifall finden.",
    "lv": "Pridobite soglasje.",
    "level": "Sätze"
  },
  {
    "de": "Beileid aussprechen.",
    "lv": "Izrazi sožalje.",
    "level": "Sätze"
  },
  {
    "de": "Auf eigenen Beinen stehen.",
    "lv": "Biti finančno neodvisen.",
    "level": "Sätze"
  },
  {
    "de": "Zum Beispiel.",
    "lv": "Na primer.",
    "level": "Sätze"
  },
  {
    "de": "Beistand leisten.",
    "lv": "Za pomoč. • Zagotovite pomoč",
    "level": "Sätze"
  },
  {
    "de": "Beitrag leisten.",
    "lv": "Investirajte svoj delež.",
    "level": "Sätze"
  },
  {
    "de": "Jemandes Bekanntschaft machen.",
    "lv": "Spoznajte nekoga.",
    "level": "Sätze"
  },
  {
    "de": "Bekanntschaft anknüpfen.",
    "lv": "Iepazīties. • Nodibināt kontaktu",
    "level": "Sätze"
  },
  {
    "de": "Belegte Brötchen.",
    "lv": "Sendviči z dodatki.",
    "level": "Sätze"
  },
  {
    "de": "Nach Ihrem Belieben.",
    "lv": "Kakor želite.",
    "level": "Sätze"
  },
  {
    "de": "Zu jeder beliebigen Zeit.",
    "lv": "Kadarkoli.",
    "level": "Sätze"
  },
  {
    "de": "Schweigen beobachten.",
    "lv": "Upoštevati tišino.",
    "level": "Sätze"
  },
  {
    "de": "Zur Bequemlichkeit.",
    "lv": "Za udobje.",
    "level": "Sätze"
  },
  {
    "de": "Bereit sein.",
    "lv": "Bodite pripravljeni. • Bodite v miru",
    "level": "Sätze"
  },
  {
    "de": "Unfallopfer bergen.",
    "lv": "Reševanje ponesrečencev v primeru nesreče.",
    "level": "Sätze"
  },
  {
    "de": "Bericht erstatten.",
    "lv": "Poročilo. • Zagotovite poročilo • Zagotovite pregled",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind besetzt.",
    "lv": "Vsi sedeži so zasedeni.",
    "level": "Sätze"
  },
  {
    "de": "Neue Besen kehren gut.",
    "lv": "Nova metla dobro pometa.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt ein Haus.",
    "lv": "Je lastnik hiše.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt viel Mut.",
    "lv": "Ima velik pogum.",
    "level": "Sätze"
  },
  {
    "de": "Desto besser.",
    "lv": "Tem bolje.",
    "level": "Sätze"
  },
  {
    "de": "Gute Besserung!",
    "lv": "Ozdravi! • Ozdravite!",
    "level": "Sätze"
  },
  {
    "de": "Beim besten Willen.",
    "lv": "Kar hočeš.",
    "level": "Sätze"
  },
  {
    "de": "Am besten.",
    "lv": "Najboljši.",
    "level": "Sätze"
  },
  {
    "de": "Es besteht Zweifel.",
    "lv": "Obstajajo dvomi.",
    "level": "Sätze"
  },
  {
    "de": "Seine Aufgabe besteht darin...",
    "lv": "Njegova naloga je...",
    "level": "Sätze"
  },
  {
    "de": "Grüße bestellen.",
    "lv": "Pozdravi",
    "level": "Sätze"
  },
  {
    "de": "Ganz bestimmt.",
    "lv": "Vsekakor. • Popolnoma varen",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch kommen.",
    "lv": "Pridite na obisk.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch sein.",
    "lv": "Na obisk. • Na obisk",
    "level": "Sätze"
  },
  {
    "de": "Oft Konzerte besuchen.",
    "lv": "Pogosto hodi na koncerte.",
    "level": "Sätze"
  },
  {
    "de": "Welche Schule hat er besucht?",
    "lv": "Na katero šolo je hodil?",
    "level": "Sätze"
  },
  {
    "de": "In Betracht ziehen.",
    "lv": "Upoštevati. • Razmislite",
    "level": "Sätze"
  },
  {
    "de": "Außer Betracht lassen.",
    "lv": "Neupoštevanje. • Ne upoštevajte",
    "level": "Sätze"
  },
  {
    "de": "Er betreibt ein Hotel.",
    "lv": "Vodi hotel.",
    "level": "Sätze"
  },
  {
    "de": "Alle beiden.",
    "lv": "Oba dva.",
    "level": "Sätze"
  },
  {
    "de": "Alles bezahlen.",
    "lv": "Samaksāt visu.",
    "level": "Sätze"
  },
  {
    "de": "Bezüglich auf etwas.",
    "lv": "Glede nečesa.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön.",
    "lv": "Prosim",
    "level": "Sätze"
  },
  {
    "de": "Wie bitte?",
    "lv": "Kako prosim",
    "level": "Sätze"
  },
  {
    "de": "Bitte sehr.",
    "lv": "Prosim",
    "level": "Sätze"
  },
  {
    "de": "Ich habe eine Bitte an Sie.",
    "lv": "Imam prošnjo za vas.",
    "level": "Sätze"
  },
  {
    "de": "Trompete blasen.",
    "lv": "Zatrobi na trobento.",
    "level": "Sätze"
  },
  {
    "de": "In einem Buch blättern.",
    "lv": "Šķirstīt grāmatu.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßen Füßen.",
    "lv": "Bose noge.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßem Auge.",
    "lv": "S prostim očesom.",
    "level": "Sätze"
  },
  {
    "de": "Danke für die Blumen!",
    "lv": "Hvala za rože!",
    "level": "Sätze"
  },
  {
    "de": "Alles in Butter.",
    "lv": "Vse je v redu.",
    "level": "Sätze"
  },
  {
    "de": "Bitte checken.",
    "lv": "Preverite. • Preverite",
    "level": "Sätze"
  },
  {
    "de": "Da ist er!",
    "lv": "Tukaj je!",
    "level": "Sätze"
  },
  {
    "de": "Alles spricht dafür.",
    "lv": "Vse dobro govori.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann nichts dafür.",
    "lv": "Tam ne morem narediti ničesar.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin dagegen.",
    "lv": "Es esmu pret to.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe nichts dagegen.",
    "lv": "Man pret to nav iebildumu.",
    "level": "Sätze"
  },
  {
    "de": "Von daheim.",
    "lv": "Od doma.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Dame ziehen.",
    "lv": "Naredite damsko potezo.",
    "level": "Sätze"
  },
  {
    "de": "Es dämmert.",
    "lv": "Mrači se. • Zora se začne.",
    "level": "Sätze"
  },
  {
    "de": "Danke schön!",
    "lv": "Hvala! • Hvala!",
    "level": "Sätze"
  },
  {
    "de": "Dann und wann.",
    "lv": "Tu in tam.",
    "level": "Sätze"
  },
  {
    "de": "Darauf kannst du dich verlassen.",
    "lv": "Na to se lahko zaneseš.",
    "level": "Sätze"
  },
  {
    "de": "Daraus wird nichts.",
    "lv": "Nič ne bo iz tega.",
    "level": "Sätze"
  },
  {
    "de": "So dass...",
    "lv": "Tā ka...",
    "level": "Sätze"
  },
  {
    "de": "Für wen halten Sie mich?",
    "lv": "Kaj misliš, da sem?",
    "level": "Sätze"
  },
  {
    "de": "Hände weg!",
    "lv": "Roke stran!",
    "level": "Sätze"
  },
  {
    "de": "Lass den Kopf nicht hängen!",
    "lv": "Ne spuščaj glave!",
    "level": "Sätze"
  },
  {
    "de": "zu Hause",
    "lv": "mājās",
    "level": "Sätze"
  },
  {
    "de": "nach Hause gehen",
    "lv": "iet uz mājām",
    "level": "Sätze"
  },
  {
    "de": "von Haus aus",
    "lv": "kopš bērnības • no pašiem sākumiem",
    "level": "Sätze"
  },
  {
    "de": "Meinen herzlichsten Glückwunsch!",
    "lv": "Čestitke!",
    "level": "Sätze"
  },
  {
    "de": "Seien Sie so gut!",
    "lv": "Bodi tako prijazen! • Bodi tako dober!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie die Güte!",
    "lv": "Bodi tako prijazen!",
    "level": "Sätze"
  },
  {
    "de": "Was hast du?",
    "lv": "Kaj je narobe s teboj? • Kaj se je zgodilo?",
    "level": "Sätze"
  },
  {
    "de": "Gestatten Sie bitte!",
    "lv": "Dovolite, prosim!",
    "level": "Sätze"
  },
  {
    "de": "Ist es gestattet zu rauchen?",
    "lv": "Vai drīkst smēķēt?",
    "level": "Sätze"
  },
  {
    "de": "Ich muss gestehen, dass...",
    "lv": "Moram priznati, da ...",
    "level": "Sätze"
  },
  {
    "de": "gestern früh",
    "lv": "vakar agri no rīta",
    "level": "Sätze"
  },
  {
    "de": "gestern Abend",
    "lv": "vakar vakarā",
    "level": "Sätze"
  },
  {
    "de": "Es ist mir gleichgültig, ob...",
    "lv": "Briga me, če ...",
    "level": "Sätze"
  },
  {
    "de": "Was ist geschehen?",
    "lv": "Kaj se je zgodilo?",
    "level": "Sätze"
  },
  {
    "de": "Mach keine Geschichten!",
    "lv": "Ne delaj neumnosti! • Ne šalite se!",
    "level": "Sätze"
  },
  {
    "de": "Geschweige denn...",
    "lv": "Nemaz nerunājot par to. • Kur nu vēl",
    "level": "Sätze"
  },
  {
    "de": "Gehen Sie geradeaus!",
    "lv": "Pojdi naravnost naprej!",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es Ihnen?",
    "lv": "Kako si • Kako si?",
    "level": "Sätze"
  },
  {
    "de": "Frag ihn gelegentlich, ob...",
    "lv": "Vprašaj ga, če pride ven, če ...",
    "level": "Sätze"
  },
  {
    "de": "morgen früh",
    "lv": "rīt no rīta",
    "level": "Sätze"
  },
  {
    "de": "im Frühling",
    "lv": "pavasarī",
    "level": "Sätze"
  },
  {
    "de": "Was gibt’s Neues?",
    "lv": "Kaj je novega",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Brief folgt, dass...",
    "lv": "Iz tega pisma je razvidno, da ...",
    "level": "Sätze"
  },
  {
    "de": "Fahre fort!",
    "lv": "Kar tako naprej!",
    "level": "Sätze"
  },
  {
    "de": "Er ist kein Freund von...",
    "lv": "Ne mara ...",
    "level": "Sätze"
  },
  {
    "de": "Es erwies sich, dass...",
    "lv": "Izkazalo se je, da...",
    "level": "Sätze"
  },
  {
    "de": "Gedenkst du meiner?",
    "lv": "Se me spomniš • Si razmišljal name?",
    "level": "Sätze"
  },
  {
    "de": "im Winter",
    "lv": "ziemā",
    "level": "Sätze"
  },
  {
    "de": "Welcher Jahrgang sind Sie?",
    "lv": "Katerega leta si rojen?",
    "level": "Sätze"
  },
  {
    "de": "Es jammert mich zu sehen...",
    "lv": "Žalostno gledati ...",
    "level": "Sätze"
  },
  {
    "de": "je mehr, desto besser",
    "lv": "jo vairāk, jo labāk",
    "level": "Sätze"
  },
  {
    "de": "bis jetzt",
    "lv": "līdz šim brīdim",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich zum Bahnhof?",
    "lv": "Kako priti do postaje?",
    "level": "Sätze"
  },
  {
    "de": "Komm her!",
    "lv": "Pridi sem!",
    "level": "Sätze"
  },
  {
    "de": "Könnte ich Frau N. sprechen?",
    "lv": "Ali lahko govorim z gospo N.?",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das?",
    "lv": "Koliko stane?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange dauert die Vorstellung?",
    "lv": "Kako dolgo bo trajal nastop?",
    "level": "Sätze"
  },
  {
    "de": "Lass das!",
    "lv": "Nehaj! • Spusti!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich in Ruhe!",
    "lv": "Pusti me pri miru!",
    "level": "Sätze"
  },
  {
    "de": "Lassen Sie mich Ihnen helfen!",
    "lv": "Naj ti pomagam!",
    "level": "Sätze"
  },
  {
    "de": "Lasst uns gehen!",
    "lv": "Gremo!",
    "level": "Sätze"
  },
  {
    "de": "Na, wie läufts?",
    "lv": "Kako si",
    "level": "Sätze"
  },
  {
    "de": "Es lebe!",
    "lv": "Naj živi!",
    "level": "Sätze"
  },
  {
    "de": "Leben Sie wohl!",
    "lv": "Dzīvojiet sveiki! • Ardievu!",
    "level": "Sätze"
  },
  {
    "de": "Was ist los?",
    "lv": "Kaj se je zgodilo?",
    "level": "Sätze"
  },
  {
    "de": "Der Job ist anstrengend.",
    "lv": "Darbs ir nogurdinošs.",
    "level": "Sätze"
  },
  {
    "de": "Das war ein anstrengender Tag.",
    "lv": "Bil je naporen dan.",
    "level": "Sätze"
  },
  {
    "de": "Deutsch lernen kann anstrengend sein.",
    "lv": "Vācu valodas mācīšanās var būt nogurdinoša.",
    "level": "Sätze"
  },
  {
    "de": "Er verlangt eine Erklärung.",
    "lv": "Zahteva pojasnilo.",
    "level": "Sätze"
  },
  {
    "de": "Der Verkäufer verlangt zu viel Geld.",
    "lv": "Prodajalec zahteva preveč denarja.",
    "level": "Sätze"
  },
  {
    "de": "Das Gesetz verlangt es so.",
    "lv": "Zakon to zahteva.",
    "level": "Sätze"
  },
  {
    "de": "Das ist gar nicht so schwer.",
    "lv": "Sploh ni tako težko.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe gar kein Geld.",
    "lv": "Man pavisam nav naudas.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gar nichts gesagt.",
    "lv": "Sploh ni rekel ničesar.",
    "level": "Sätze"
  },
  {
    "de": "Der Hund ist los.",
    "lv": "Pes je izpuščen.",
    "level": "Sätze"
  },
  {
    "de": "Hier ist viel los.",
    "lv": "Tukaj se marsikaj dogaja.",
    "level": "Sätze"
  },
  {
    "de": "Halt die Luft an!",
    "lv": "Zadrži dih!",
    "level": "Sätze"
  },
  {
    "de": "Was machst du?",
    "lv": "Kaj počneš",
    "level": "Sätze"
  },
  {
    "de": "Sag mal!",
    "lv": "Reci da!",
    "level": "Sätze"
  },
  {
    "de": "Was meinen Sie damit?",
    "lv": "Kaj misliš s tem? • Kaj misliš?",
    "level": "Sätze"
  },
  {
    "de": "Wir gehen mit Ihnen.",
    "lv": "Gremo s teboj.",
    "level": "Sätze"
  },
  {
    "de": "Ich fahre mit der Eisenbahn.",
    "lv": "Es braucu ar vilcienu.",
    "level": "Sätze"
  },
  {
    "de": "am Mittwoch",
    "lv": "trešdien",
    "level": "Sätze"
  },
  {
    "de": "Es mag sein.",
    "lv": "Mogoče.",
    "level": "Sätze"
  },
  {
    "de": "Ich mag das nicht.",
    "lv": "Ni mi všeč.",
    "level": "Sätze"
  },
  {
    "de": "am Montag",
    "lv": "pirmdien",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen!",
    "lv": "Labrīt!",
    "level": "Sätze"
  },
  {
    "de": "am Morgen",
    "lv": "no rīta",
    "level": "Sätze"
  },
  {
    "de": "Gute Nacht!",
    "lv": "Lahko noč!",
    "level": "Sätze"
  },
  {
    "de": "Nehmen Sie Platz!",
    "lv": "Usedi se!",
    "level": "Sätze"
  },
  {
    "de": "Letzte Neuheit!",
    "lv": "Zadnje novice!",
    "level": "Sätze"
  },
  {
    "de": "Nicht wahr?",
    "lv": "Prav?",
    "level": "Sätze"
  },
  {
    "de": "Nicht doch!",
    "lv": "Ne, seveda! • Ne!",
    "level": "Sätze"
  },
  {
    "de": "Nun endlich!",
    "lv": "No, končno!",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das?",
    "lv": "Za kaj je dobro?",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das alles?",
    "lv": "Čemu je vse to namenjeno?",
    "level": "Sätze"
  },
  {
    "de": "Parken verboten!",
    "lv": "Parkiranje je prepovedano!",
    "level": "Sätze"
  },
  {
    "de": "Nicht parken!",
    "lv": "Parkiranje je prepovedano!",
    "level": "Sätze"
  },
  {
    "de": "Er hat Recht.",
    "lv": "Prav ima.",
    "level": "Sätze"
  },
  {
    "de": "Wovon ist die Rede?",
    "lv": "O čem gre",
    "level": "Sätze"
  },
  {
    "de": "Davon kann keine Rede sein.",
    "lv": "Par to nevar būt ne runas.",
    "level": "Sätze"
  },
  {
    "de": "Glückliche Reise!",
    "lv": "Srečno pot!",
    "level": "Sätze"
  },
  {
    "de": "Mir reißt die Geduld.",
    "lv": "Zmanjkuje mi potrpljenja.",
    "level": "Sätze"
  },
  {
    "de": "Man sagt, dass...",
    "lv": "Pravijo, da ...",
    "level": "Sätze"
  },
  {
    "de": "Schon gut!",
    "lv": "Je že dobro!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön!",
    "lv": "Lūdzu!",
    "level": "Sätze"
  },
  {
    "de": "Was bin ich schuldig?",
    "lv": "Koliko sem dolžan? • Koliko moram plačati?",
    "level": "Sätze"
  },
  {
    "de": "Vor dem Gebrauch schütteln!",
    "lv": "Pred uporabo pretresite!",
    "level": "Sätze"
  },
  {
    "de": "Sehen Sie mal!",
    "lv": "Oglejte si!",
    "level": "Sätze"
  },
  {
    "de": "Wie sehr auch...",
    "lv": "Koliko ...",
    "level": "Sätze"
  },
  {
    "de": "Seit wann?",
    "lv": "Od kdaj?",
    "level": "Sätze"
  },
  {
    "de": "Was soll ich tun?",
    "lv": "Ko lai es daru?",
    "level": "Sätze"
  },
  {
    "de": "im Sommer",
    "lv": "vasarā",
    "level": "Sätze"
  },
  {
    "de": "Nicht nur..., sondern auch...",
    "lv": "Ne samo... ampak tudi...",
    "level": "Sätze"
  },
  {
    "de": "Sonst noch etwas?",
    "lv": "Še kaj?",
    "level": "Sätze"
  },
  {
    "de": "Spaß beiseite!",
    "lv": "Brez heca! • Šale na robu!",
    "level": "Sätze"
  },
  {
    "de": "Wie spät ist es?",
    "lv": "Koliko je ura",
    "level": "Sätze"
  },
  {
    "de": "Durchfahrt gesperrt!",
    "lv": "Vožnja skozi je prepovedana!",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie deutsch?",
    "lv": "Ali govorite nemško?",
    "level": "Sätze"
  },
  {
    "de": "Statt zu...",
    "lv": "Namesto...",
    "level": "Sätze"
  },
  {
    "de": "Wie steht’s?",
    "lv": "Kako si",
    "level": "Sätze"
  },
  {
    "de": "Dieser Hut steht ihr gut.",
    "lv": "Ta klobuk ji dobro pristaja.",
    "level": "Sätze"
  },
  {
    "de": "Guten Tag!",
    "lv": "Pozdravljena",
    "level": "Sätze"
  },
  {
    "de": "Wo treffen wir uns?",
    "lv": "Kje se dobimo?",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie näher!",
    "lv": "Pridi bliže!",
    "level": "Sätze"
  },
  {
    "de": "Ehrlichkeit ist eine Tugend.",
    "lv": "Iskrenost je vrlina.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe viel zu tun.",
    "lv": "Imam veliko dela.",
    "level": "Sätze"
  },
  {
    "de": "Nicht übel!",
    "lv": "Zelo dobro! • Ni ugovora",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt über mir.",
    "lv": "Živi nad menoj.",
    "level": "Sätze"
  },
  {
    "de": "Er ist davon überzeugt.",
    "lv": "Prepričan je o tem.",
    "level": "Sätze"
  },
  {
    "de": "So ist es üblich.",
    "lv": "Sprejeto je.",
    "level": "Sätze"
  },
  {
    "de": "Deine Uhr geht nach.",
    "lv": "Vaša ura je zadaj.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel Uhr ist es?",
    "lv": "Cik pulkstenis ir?",
    "level": "Sätze"
  },
  {
    "de": "Um acht Uhr früh.",
    "lv": "Ob osmih zjutraj.",
    "level": "Sätze"
  },
  {
    "de": "umso mehr",
    "lv": "jo vairāk",
    "level": "Sätze"
  },
  {
    "de": "Rechts um!",
    "lv": "Zavijte desno!",
    "level": "Sätze"
  },
  {
    "de": "Und ob!",
    "lv": "In še kaj!",
    "level": "Sätze"
  },
  {
    "de": "und zwar",
    "lv": "proti",
    "level": "Sätze"
  },
  {
    "de": "Auf Unkosten von...",
    "lv": "Na račun...",
    "level": "Sätze"
  },
  {
    "de": "Er saß unter den Zuschauern.",
    "lv": "Sedel je med publiko.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ursache!",
    "lv": "Nič za nič!",
    "level": "Sätze"
  },
  {
    "de": "Es geschah, wie verabredet.",
    "lv": "Zgodilo se je po dogovoru.",
    "level": "Sätze"
  },
  {
    "de": "Rauchen verboten!",
    "lv": "Kajenje je prepovedano!",
    "level": "Sätze"
  },
  {
    "de": "Falsch verbunden!",
    "lv": "Nepareizi savienots!",
    "level": "Sätze"
  },
  {
    "de": "Eintritt verboten!",
    "lv": "Vstop prepovedan!",
    "level": "Sätze"
  },
  {
    "de": "Verstehen Sie mich?",
    "lv": "Me razumeš",
    "level": "Sätze"
  },
  {
    "de": "Er versteht nichts davon.",
    "lv": "Ničesar ne razume o tem.",
    "level": "Sätze"
  },
  {
    "de": "Seine Ansicht vertreten.",
    "lv": "Zagovarjaj svoje mnenje.",
    "level": "Sätze"
  },
  {
    "de": "Streit verursachen.",
    "lv": "Povzroči prepir.",
    "level": "Sätze"
  },
  {
    "de": "Viel besser.",
    "lv": "Veliko bolje.",
    "level": "Sätze"
  },
  {
    "de": "Zu viel.",
    "lv": "Preveč.",
    "level": "Sätze"
  },
  {
    "de": "Vom Hörensagen.",
    "lv": "Po zaslišanju.",
    "level": "Sätze"
  },
  {
    "de": "Von Zeit zu Zeit.",
    "lv": "Od časa do časa.",
    "level": "Sätze"
  },
  {
    "de": "Von Beruf.",
    "lv": "Po poklicu.",
    "level": "Sätze"
  },
  {
    "de": "Er ist Berliner von Geburt.",
    "lv": "Po rodu je Berlinčan.",
    "level": "Sätze"
  },
  {
    "de": "Er steht vor dem Fenster.",
    "lv": "Stoji ob oknu.",
    "level": "Sätze"
  },
  {
    "de": "Vor Sonnenaufgang.",
    "lv": "Pred sončnim vzhodom.",
    "level": "Sätze"
  },
  {
    "de": "Vor vierzehn Tagen.",
    "lv": "Pred dvema tednoma.",
    "level": "Sätze"
  },
  {
    "de": "Vor Freude.",
    "lv": "Za zabavo.",
    "level": "Sätze"
  },
  {
    "de": "Vor allem.",
    "lv": "Najprej. • Najprej",
    "level": "Sätze"
  },
  {
    "de": "Im Voraus.",
    "lv": "Prej.",
    "level": "Sätze"
  },
  {
    "de": "Unter der Voraussetzung, dass...",
    "lv": "Ob predpostavki, da ...",
    "level": "Sätze"
  },
  {
    "de": "Unter dem Vorbehalt.",
    "lv": "Pogojno.",
    "level": "Sätze"
  },
  {
    "de": "Vorhanden sein.",
    "lv": "Biti. • Bodite prisotni • Bodite dosegljivi",
    "level": "Sätze"
  },
  {
    "de": "In der vorigen Woche.",
    "lv": "Prejšnji teden.",
    "level": "Sätze"
  },
  {
    "de": "Vorkehrungen treffen.",
    "lv": "Sprejmite ukrepe za zaščito.",
    "level": "Sätze"
  },
  {
    "de": "Sie kommt mir bekannt vor.",
    "lv": "Zdi se mi znana.",
    "level": "Sätze"
  },
  {
    "de": "Er hat Vorliebe für Literatur.",
    "lv": "Zelo rad ima literaturo.",
    "level": "Sätze"
  },
  {
    "de": "Heute Vormittag.",
    "lv": "Šorīt. • Šodien priekšpusdienā",
    "level": "Sätze"
  },
  {
    "de": "Von vorn.",
    "lv": "Od spredaj.",
    "level": "Sätze"
  },
  {
    "de": "Nach vorn.",
    "lv": "Naprej.",
    "level": "Sätze"
  },
  {
    "de": "Von vornherein.",
    "lv": "Na samem začetku.",
    "level": "Sätze"
  },
  {
    "de": "Im Vorteil sein.",
    "lv": "Bodite v boljšem položaju.",
    "level": "Sätze"
  },
  {
    "de": "Wach sein.",
    "lv": "Biti buden.",
    "level": "Sätze"
  },
  {
    "de": "Wach werden.",
    "lv": "Zbudi se.",
    "level": "Sätze"
  },
  {
    "de": "Auf Wache sein.",
    "lv": "Stoj na straži.",
    "level": "Sätze"
  },
  {
    "de": "Während eines Jahres.",
    "lv": "Med letom.",
    "level": "Sätze"
  },
  {
    "de": "Während des Krieges.",
    "lv": "Med vojno.",
    "level": "Sätze"
  },
  {
    "de": "Gegen eine Wand reden.",
    "lv": "Govoriti zaman.",
    "level": "Sätze"
  },
  {
    "de": "Hier haben die Wände Ohren.",
    "lv": "Tu imajo stene ušesa.",
    "level": "Sätze"
  },
  {
    "de": "Bis wann?",
    "lv": "Do kdaj?",
    "level": "Sätze"
  },
  {
    "de": "Es ist warm.",
    "lv": "Toplo je.",
    "level": "Sätze"
  },
  {
    "de": "Auf eine Nachricht warten.",
    "lv": "Gaidīt ziņu.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie?",
    "lv": "Kaj hočeš",
    "level": "Sätze"
  },
  {
    "de": "Was für ein...?",
    "lv": "WHO...? • Kaj pa ...?",
    "level": "Sätze"
  },
  {
    "de": "Auf halbem Wege.",
    "lv": "Na pol poti.",
    "level": "Sätze"
  },
  {
    "de": "Auf diesem Wege.",
    "lv": "Na ta način. • Za takšna sredstva",
    "level": "Sätze"
  },
  {
    "de": "Auf friedlichem Wege.",
    "lv": "Na poti miru.",
    "level": "Sätze"
  },
  {
    "de": "Unserer Freundschaft wegen.",
    "lv": "Zaradi najinega prijateljstva.",
    "level": "Sätze"
  },
  {
    "de": "Von Rechts wegen.",
    "lv": "Po pravici.",
    "level": "Sätze"
  },
  {
    "de": "Weh tun.",
    "lv": "Poškodovati.",
    "level": "Sätze"
  },
  {
    "de": "Zu Weihnachten.",
    "lv": "Ob božiču.",
    "level": "Sätze"
  },
  {
    "de": "Auf welche Weise?",
    "lv": "Kādā veidā?",
    "level": "Sätze"
  },
  {
    "de": "Art und Weise.",
    "lv": "Vrsta.",
    "level": "Sätze"
  },
  {
    "de": "Ohne weiteres.",
    "lv": "Takoj. • Takoj",
    "level": "Sätze"
  },
  {
    "de": "Bis auf weiteres.",
    "lv": "Do nadaljnjega.",
    "level": "Sätze"
  },
  {
    "de": "Und so weiter.",
    "lv": "In tako dalje.",
    "level": "Sätze"
  },
  {
    "de": "Weiter nichts.",
    "lv": "Nič več.",
    "level": "Sätze"
  },
  {
    "de": "An welchem Tag?",
    "lv": "Na kateri dan?",
    "level": "Sätze"
  },
  {
    "de": "Alle Welt.",
    "lv": "Ves svet. • Vsi",
    "level": "Sätze"
  },
  {
    "de": "In wenigen Tagen.",
    "lv": "V nekaj dneh.",
    "level": "Sätze"
  },
  {
    "de": "Zu wenig.",
    "lv": "Par maz.",
    "level": "Sätze"
  },
  {
    "de": "Wenn auch.",
    "lv": "Čeprav.",
    "level": "Sätze"
  },
  {
    "de": "Wer da?",
    "lv": "Kaj je tam?",
    "level": "Sätze"
  },
  {
    "de": "Gesammelte Werke von Schiller.",
    "lv": "Schillerjevi zbrani spisi.",
    "level": "Sätze"
  },
  {
    "de": "Ausgewählte Werke.",
    "lv": "Izbor del.",
    "level": "Sätze"
  },
  {
    "de": "Er ist wert, dass...",
    "lv": "Viņš ir pelnījis, lai...",
    "level": "Sätze"
  },
  {
    "de": "Es ist zwei Euro wert.",
    "lv": "Stane dva evra.",
    "level": "Sätze"
  },
  {
    "de": "Nach Westen.",
    "lv": "Na zahod.",
    "level": "Sätze"
  },
  {
    "de": "Von Westen.",
    "lv": "Z zahoda.",
    "level": "Sätze"
  },
  {
    "de": "In Wettbewerb treten.",
    "lv": "Sodelujte v tekmovanju.",
    "level": "Sätze"
  },
  {
    "de": "Um die Wette laufen.",
    "lv": "Teči na dirki.",
    "level": "Sätze"
  },
  {
    "de": "Was gilt die Wette?",
    "lv": "Za kaj se barantamo?",
    "level": "Sätze"
  },
  {
    "de": "Wie wird das Wetter?",
    "lv": "Kakšno bo vreme?",
    "level": "Sätze"
  },
  {
    "de": "Wettkampf im Turnen.",
    "lv": "Tekmovanja v gimnastiki.",
    "level": "Sätze"
  },
  {
    "de": "Wider meinen Willen.",
    "lv": "Proti moji volji.",
    "level": "Sätze"
  },
  {
    "de": "Widerspruch erheben.",
    "lv": "Protestirati. • Ugovarjajte",
    "level": "Sätze"
  },
  {
    "de": "Wie alt ist er?",
    "lv": "Koliko je star",
    "level": "Sätze"
  },
  {
    "de": "Wie lange?",
    "lv": "Kako dolgo",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiederhören!",
    "lv": "Adijo!",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiedersehen!",
    "lv": "Adijo!",
    "level": "Sätze"
  },
  {
    "de": "Wilde Tiere.",
    "lv": "Divje živali.",
    "level": "Sätze"
  },
  {
    "de": "Herzlich willkommen!",
    "lv": "Lep pozdrav!",
    "level": "Sätze"
  },
  {
    "de": "Du musst ziehen.",
    "lv": "Tev gājiens.",
    "level": "Sätze"
  },
  {
    "de": "Es zieht.",
    "lv": "Potegni",
    "level": "Sätze"
  },
  {
    "de": "Ziemlich kalt.",
    "lv": "Precej hladno.",
    "level": "Sätze"
  },
  {
    "de": "Zipfel einer Wurst.",
    "lv": "Konica klobase.",
    "level": "Sätze"
  },
  {
    "de": "Zu ihm gehen.",
    "lv": "Pojdi k njemu.",
    "level": "Sätze"
  },
  {
    "de": "Zur Schule gehen.",
    "lv": "Pojdi v šolo.",
    "level": "Sätze"
  },
  {
    "de": "Zu Hause bleiben.",
    "lv": "Palikt mājās.",
    "level": "Sätze"
  },
  {
    "de": "Von Tag zu Tag.",
    "lv": "Vsak dan.",
    "level": "Sätze"
  },
  {
    "de": "Zum Glück.",
    "lv": "Na srečo.",
    "level": "Sätze"
  },
  {
    "de": "Wasser zum Trinken.",
    "lv": "Voda za pitje.",
    "level": "Sätze"
  },
  {
    "de": "Zu Fuß.",
    "lv": "Za noge.",
    "level": "Sätze"
  },
  {
    "de": "Zu Pferde.",
    "lv": "Ja",
    "level": "Sätze"
  },
  {
    "de": "Zu Rad.",
    "lv": "S kolesom.",
    "level": "Sätze"
  },
  {
    "de": "Es hörte auf zu regnen.",
    "lv": "Nehalo je deževati.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe noch viel zu tun.",
    "lv": "Imam še veliko dela.",
    "level": "Sätze"
  },
  {
    "de": "Zu früh.",
    "lv": "Prezgodaj.",
    "level": "Sätze"
  },
  {
    "de": "Zu groß.",
    "lv": "Prevelik.",
    "level": "Sätze"
  },
  {
    "de": "Mit den Achseln zucken.",
    "lv": "Skomigni z rameni.",
    "level": "Sätze"
  },
  {
    "de": "In einem Zug trinken.",
    "lv": "Pijte v enem požirku.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde gehen.",
    "lv": "Poginite.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde legen.",
    "lv": "Postavite na osnovo. • Vzemite kot osnovo.",
    "level": "Sätze"
  },
  {
    "de": "Zum ersten Mal.",
    "lv": "Prvič.",
    "level": "Sätze"
  },
  {
    "de": "Machen Sie bitte die Tür zu!",
    "lv": "Prosim zaprite vrata!",
    "level": "Sätze"
  },
  {
    "de": "Er hat zugenommen.",
    "lv": "Zredil se je.",
    "level": "Sätze"
  },
  {
    "de": "Die Tage nehmen zu.",
    "lv": "Dnevi postajajo daljši.",
    "level": "Sätze"
  },
  {
    "de": "Zusammenhängen mit etwas.",
    "lv": "Biti povezan z nečim.",
    "level": "Sätze"
  },
  {
    "de": "Die Tür ist zu.",
    "lv": "Vrata so zaprta.",
    "level": "Sätze"
  },
  {
    "de": "Das hätte ich ihm nicht zugetraut.",
    "lv": "Tega od njega ne bi pričakoval.",
    "level": "Sätze"
  },
  {
    "de": "Freier Zutritt.",
    "lv": "Vstop prost.",
    "level": "Sätze"
  },
  {
    "de": "Zutritt verboten!",
    "lv": "Vstop prepovedan!",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu viel!",
    "lv": "Preveč je!",
    "level": "Sätze"
  },
  {
    "de": "Zuwider werden.",
    "lv": "Postanite odvratni. • Zbolite",
    "level": "Sätze"
  },
  {
    "de": "Und zwar.",
    "lv": "Proti.",
    "level": "Sätze"
  },
  {
    "de": "Es steht außer Zweifel.",
    "lv": "Nobenega dvoma ni.",
    "level": "Sätze"
  },
  {
    "de": "Ohne Zweifel.",
    "lv": "Brez oklevanja.",
    "level": "Sätze"
  },
  {
    "de": "Zum Zweiten.",
    "lv": "Otrkārt.",
    "level": "Sätze"
  },
  {
    "de": "Frohes neues Jahr!",
    "lv": "Srečno novo leto!",
    "level": "Sätze"
  },
  {
    "de": "Herzlichen Glückwunsch zum Geburtstag!",
    "lv": "Srečen rojstni dan!",
    "level": "Sätze"
  },
  {
    "de": "Gute Reise!",
    "lv": "Srečno pot!",
    "level": "Sätze"
  },
  {
    "de": "Es freut mich, Sie kennenzulernen.",
    "lv": "Vesel sem, da sem te spoznal.",
    "level": "Sätze"
  },
  {
    "de": "Wären Sie bitte so nett?",
    "lv": "Bi bili prosim tako prijazni?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin Ihnen sehr dankbar.",
    "lv": "Zelo sem ti hvaležen.",
    "level": "Sätze"
  },
  {
    "de": "Setzt euch bitte hin!",
    "lv": "Sedite, prosim!",
    "level": "Sätze"
  },
  {
    "de": "Ben, komm bitte an die Tafel!",
    "lv": "Ben, prosim pridi k tabli!",
    "level": "Sätze"
  },
  {
    "de": "Schlagt bitte die Lehrbücher auf!",
    "lv": "Odprite učbenike, prosim!",
    "level": "Sätze"
  },
  {
    "de": "Geht bitte in die Sporthalle!",
    "lv": "Prosim, pojdi v telovadnico!",
    "level": "Sätze"
  },
  {
    "de": "Schläfst du noch?",
    "lv": "Še spiš",
    "level": "Sätze"
  },
  {
    "de": "Schlafen Sie noch?",
    "lv": "Še spiš?",
    "level": "Sätze"
  },
  {
    "de": "Er ist fest eingeschlafen.",
    "lv": "Trdno spi.",
    "level": "Sätze"
  },
  {
    "de": "Wecke ihn bitte auf, es ist schon spät!",
    "lv": "Prosim, zbudite ga, pozno je že!",
    "level": "Sätze"
  },
  {
    "de": "Es tut mir sehr leid!",
    "lv": "Zelo mi je žal!",
    "level": "Sätze"
  },
  {
    "de": "Vielen Dank!",
    "lv": "Najlepša hvala!",
    "level": "Sätze"
  },
  {
    "de": "Finn, fang bitte an!",
    "lv": "Finn, začni prosim!",
    "level": "Sätze"
  },
  {
    "de": "Lest bitte mit!",
    "lv": "Preberite, prosim!",
    "level": "Sätze"
  },
  {
    "de": "Emma, schau bitte nicht aus dem Fenster!",
    "lv": "Emma, lūdzu, neskaties pa logu!",
    "level": "Sätze"
  },
  {
    "de": "Jonas, bring bitte die Hefte!",
    "lv": "Jonas, prosim prinesi zvezke!",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte zurück an deinen Platz!",
    "lv": "Vrni se na svoje mesto!",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb acht.",
    "lv": "Ura je pol sedmih.",
    "level": "Sätze"
  },
  {
    "de": "Wann wachst du gewöhnlich auf?",
    "lv": "Kdaj se ponavadi zbudiš?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe gleich auf.",
    "lv": "Takoj vstanem.",
    "level": "Sätze"
  },
  {
    "de": "Steh auf, Hanna, es klingelt!",
    "lv": "Celies, Hanna, zvana!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich noch fünf Minuten schlafen!",
    "lv": "Pusti me spati še pet minut!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss nicht, das Zimmer zu lüften!",
    "lv": "Ne pozabite prezračiti prostora!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist das Handtuch?",
    "lv": "Kje je brisača",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mir die Zähne putzen.",
    "lv": "Želim si umiti zobe.",
    "level": "Sätze"
  },
  {
    "de": "Mit was putzt du dir die Zähne?",
    "lv": "S čim si umivate zobe?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mich anziehen.",
    "lv": "Želim se obleči.",
    "level": "Sätze"
  },
  {
    "de": "Zieh dich bitte schnell an!",
    "lv": "Hitro se oblecite, prosim!",
    "level": "Sätze"
  },
  {
    "de": "Kleide dich wärmer an, draußen ist es kühl.",
    "lv": "Toplo se oblecite, zunaj je hladno.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, wie geht es dir?",
    "lv": "Dobro jutro, kako si?",
    "level": "Sätze"
  },
  {
    "de": "Mir geht es gut, danke.",
    "lv": "V redu sem, hvala.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es Neues?",
    "lv": "Kaj je novega",
    "level": "Sätze"
  },
  {
    "de": "Was für ein Chaos hier!",
    "lv": "Kakšen nered je tukaj!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich beim Aufräumen helfen?",
    "lv": "Lahko pomagam pospraviti?",
    "level": "Sätze"
  },
  {
    "de": "Was trinkst du morgens, Kaffee oder Tee?",
    "lv": "Kaj pijete zjutraj, kavo ali čaj?",
    "level": "Sätze"
  },
  {
    "de": "Gewöhnlich trinke ich morgens eine Tasse Kaffee.",
    "lv": "Zjutraj običajno spijem skodelico kave.",
    "level": "Sätze"
  },
  {
    "de": "Am liebsten trinke ich schwarzen Kaffee.",
    "lv": "Vislabāk dzeru melno kafiju.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, hast du gut geschlafen?",
    "lv": "Dobro jutro, ste dobro spali?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin noch sehr müde.",
    "lv": "Še vedno sem zelo utrujena.",
    "level": "Sätze"
  },
  {
    "de": "Willst du Kaffee oder Milch?",
    "lv": "Želite kavo ali mleko?",
    "level": "Sätze"
  },
  {
    "de": "Gib mir bitte ein Brötchen mit Käse.",
    "lv": "Daj mi žemljico s sirom, prosim.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss jetzt los!",
    "lv": "Zdaj moram iti!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss dein Frühstück nicht!",
    "lv": "Ne pozabite na zajtrk!",
    "level": "Sätze"
  },
  {
    "de": "Klara, deck bitte den Tisch!",
    "lv": "Clara, prosim postavi mizo!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss die Servietten nicht!",
    "lv": "Ne pozabite na prtičke!",
    "level": "Sätze"
  },
  {
    "de": "Wann esst ihr zu Mittag?",
    "lv": "Kdaj ješ kosilo",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit zu essen.",
    "lv": "Čas je za jesti.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es heute zu Mittag?",
    "lv": "Kaj bo danes za kosilo?",
    "level": "Sätze"
  },
  {
    "de": "Wie schmeckt dir die Suppe?",
    "lv": "Kako vam je všeč juha?",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt ist sie etwas zu salzig.",
    "lv": "Odkrito povedano, je malo preveč slan.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dir ein Stück Brot geben?",
    "lv": "Vam lahko dam kos kruha?",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich habe schon.",
    "lv": "Hvala, sem že.",
    "level": "Sätze"
  },
  {
    "de": "Das Fleisch schmeckt ausgezeichnet.",
    "lv": "Meso je odličnega okusa.",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich bin schon satt.",
    "lv": "Hvala, sem že sit.",
    "level": "Sätze"
  },
  {
    "de": "Heute haben wir Besuch.",
    "lv": "Danes imamo obiskovalce.",
    "level": "Sätze"
  },
  {
    "de": "Bist du heute Abend frei?",
    "lv": "Si prost nocoj",
    "level": "Sätze"
  },
  {
    "de": "Komm doch heute zum Mittagessen vorbei!",
    "lv": "Pridite danes na obisk na kosilo!",
    "level": "Sätze"
  },
  {
    "de": "Setzen wir uns an den Tisch.",
    "lv": "Apsēdosimies pie galda.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, bedien dich!",
    "lv": "Prosim, jejte, kolikor želite!",
    "level": "Sätze"
  },
  {
    "de": "Stört dich das Rauchen?",
    "lv": "Vas kajenje moti?",
    "level": "Sätze"
  },
  {
    "de": "Danke für die nette Aufnahme!",
    "lv": "Hvala za topel sprejem!",
    "level": "Sätze"
  },
  {
    "de": "Wann gehst du ins Bett?",
    "lv": "Kdaj greš spat",
    "level": "Sätze"
  },
  {
    "de": "Wenn ich von der Arbeit komme, bin ich immer müde.",
    "lv": "Vedno sem utrujena, ko pridem iz službe.",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, ins Bett zu gehen.",
    "lv": "Čas je za spanje.",
    "level": "Sätze"
  },
  {
    "de": "Es ist schönes Wetter.",
    "lv": "Lep čas je.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mit mir spazieren gehen?",
    "lv": "Ali hočeš hoditi z mano?",
    "level": "Sätze"
  },
  {
    "de": "Sieh mal, es wird gleich regnen.",
    "lv": "Glej, kmalu bo dež.",
    "level": "Sätze"
  },
  {
    "de": "Nimm den Regenschirm mit!",
    "lv": "S seboj vzemite dežnik!",
    "level": "Sätze"
  },
  {
    "de": "Es regnet.",
    "lv": "Dežuje",
    "level": "Sätze"
  },
  {
    "de": "Ich bin schon ganz nass.",
    "lv": "Esmu jau pilnīgi slapjš.",
    "level": "Sätze"
  },
  {
    "de": "Glaubst du, dass es den ganzen Tag regnen wird?",
    "lv": "Mislite, da bo ves dan deževalo?",
    "level": "Sätze"
  },
  {
    "de": "Es hört auf zu regnen.",
    "lv": "Dež poneha.",
    "level": "Sätze"
  },
  {
    "de": "Die Sonne scheint wieder.",
    "lv": "Sonce spet sije.",
    "level": "Sätze"
  },
  {
    "de": "Es ist sehr warm.",
    "lv": "Zelo je vroče.",
    "level": "Sätze"
  },
  {
    "de": "Es sieht nach Regen aus.",
    "lv": "Kaže, da bo deževalo.",
    "level": "Sätze"
  },
  {
    "de": "Wir bekommen gleich ein Gewitter.",
    "lv": "Kmalu bo nevihta.",
    "level": "Sätze"
  },
  {
    "de": "Das Gewitter zieht vorüber.",
    "lv": "Nevihta je minila.",
    "level": "Sätze"
  },
  {
    "de": "Die Wolken verziehen sich.",
    "lv": "Oblaki se razkropijo.",
    "level": "Sätze"
  },
  {
    "de": "Siehst du den Regenbogen?",
    "lv": "Vidiš mavrico?",
    "level": "Sätze"
  },
  {
    "de": "Der Winter ist da, es hat geschneit.",
    "lv": "Zima je tu, ponoči je snežilo.",
    "level": "Sätze"
  },
  {
    "de": "Es schneit.",
    "lv": "Sneži.",
    "level": "Sätze"
  },
  {
    "de": "Wie schön ist es im Wald im Winter!",
    "lv": "Kako lepo je pozimi v gozdu!",
    "level": "Sätze"
  },
  {
    "de": "Mir ist kalt, ich friere.",
    "lv": "Hladno me je, zmrzujem.",
    "level": "Sätze"
  },
  {
    "de": "Draußen ist Glatteis, pass auf!",
    "lv": "Zunaj je spolzko, previdno!",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir auf die Eisbahn gehen?",
    "lv": "Gremo drsat?",
    "level": "Sätze"
  },
  {
    "de": "Zieh die Jacke an, du kannst dich erkälten.",
    "lv": "Oblecite jakno, lahko se prehladite.",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb sieben.",
    "lv": "Ura je pol sedmih.",
    "level": "Sätze"
  },
  {
    "de": "Meine Uhr geht fünf Minuten vor.",
    "lv": "Moja ura hitri pet minut.",
    "level": "Sätze"
  },
  {
    "de": "Weck mich morgen früh um sieben Uhr!",
    "lv": "Zbudi me jutri ob sedmih!",
    "level": "Sätze"
  },
  {
    "de": "Was ist heute für ein Datum?",
    "lv": "Kāds šodien ir datums?",
    "level": "Sätze"
  },
  {
    "de": "Heute ist der elfte Juli.",
    "lv": "Danes je enajsti julij.",
    "level": "Sätze"
  },
  {
    "de": "Was machst du gewöhnlich am Abend?",
    "lv": "Kaj običajno počnete zvečer?",
    "level": "Sätze"
  },
  {
    "de": "Es ist schon lange her, dass wir uns gesehen haben.",
    "lv": "Že dolgo se nisva srečala.",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es dir?",
    "lv": "Kako si",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, ich möchte etwas mit dir besprechen.",
    "lv": "Oprostite, želim se o nečem pogovoriti s tabo.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir spazieren!",
    "lv": "Gremo na sprehod!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Lust, mit mir in den Park zu gehen?",
    "lv": "Bi šel z mano v park?",
    "level": "Sätze"
  },
  {
    "de": "Ich komme, um dich zum Spaziergang abzuholen.",
    "lv": "Prišel sem te peljati na sprehod.",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte etwas langsamer, ich kann dir nicht folgen!",
    "lv": "Pojdi malo počasneje, ne dohajam te!",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zum ersten Mal in dieser Gegend.",
    "lv": "Prvič sem tukaj.",
    "level": "Sätze"
  },
  {
    "de": "Ruhen wir uns ein wenig aus.",
    "lv": "Počivajmo malo.",
    "level": "Sätze"
  },
  {
    "de": "Jetzt können wir zurückgehen.",
    "lv": "Zdaj se lahko vrnemo.",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt bin ich ziemlich müde.",
    "lv": "Odkrito povedano sem kar utrujen.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, wo ist die nächste U-Bahn-Station?",
    "lv": "Oprostite, kje je najbližja podzemna postaja?",
    "level": "Sätze"
  },
  {
    "de": "Welcher ist der kürzeste Weg?",
    "lv": "Katera je najkrajša pot?",
    "level": "Sätze"
  },
  {
    "de": "Geh hier die zweite Straße links und dann immer geradeaus.",
    "lv": "Tu zavijte v drugo ulico levo in pojdite naravnost.",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich am schnellsten zum Bahnhof?",
    "lv": "Kako hitreje priti do postaje?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe vor, morgen zu verreisen.",
    "lv": "Jutri nameravam oditi.",
    "level": "Sätze"
  },
  {
    "de": "Wohin willst du fahren?",
    "lv": "Kam želiš iti?",
    "level": "Sätze"
  },
  {
    "de": "Reist du geschäftlich oder privat?",
    "lv": "Ali potujete zaradi službe ali v prostem času?",
    "level": "Sätze"
  },
  {
    "de": "Finn fährt bis Berlin mit, dann geht er ans Meer.",
    "lv": "Finn brauc līdz Berlīnei, tad dosies pie jūras.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt das Schiff ab?",
    "lv": "Kdaj ladja odpluje?",
    "level": "Sätze"
  },
  {
    "de": "In einer halben Stunde.",
    "lv": "Po pol ure.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich noch eine Kabine bekommen?",
    "lv": "Lahko še vedno dobim kabino?",
    "level": "Sätze"
  },
  {
    "de": "Vergiss deinen Pass nicht!",
    "lv": "Ne pozabite potnega lista!",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, den Koffer zu packen.",
    "lv": "Čas je, da spakirate kovček.",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt um halb sieben ab.",
    "lv": "Vilciens atiet pus septiņos.",
    "level": "Sätze"
  },
  {
    "de": "Hol mir bitte ein Taxi, ich verpasse sonst den Zug!",
    "lv": "Pokličite taksi, prosim, sicer bom zamudil vlak!",
    "level": "Sätze"
  },
  {
    "de": "Fahr bitte zum Bahnhof!",
    "lv": "Prosim, pelji me na postajo!",
    "level": "Sätze"
  },
  {
    "de": "Ich muss mich beeilen.",
    "lv": "Moram pohiteti.",
    "level": "Sätze"
  },
  {
    "de": "Ist der Schalter schon offen?",
    "lv": "Je blagajna že odprta?",
    "level": "Sätze"
  },
  {
    "de": "Eine Fahrkarte nach Köln, bitte.",
    "lv": "Eno vozovnico za Köln, prosim.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt der Zug ab?",
    "lv": "Kdaj odpelje vlak?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt gleich ab.",
    "lv": "Vlak bo kmalu odpeljal.",
    "level": "Sätze"
  },
  {
    "de": "Muss ich in Koblenz umsteigen?",
    "lv": "Vai man Koblenzē jāpārsēžas?",
    "level": "Sätze"
  },
  {
    "de": "Ja, dort musst du umsteigen.",
    "lv": "Da, tam morate zamenjati sedež.",
    "level": "Sätze"
  },
  {
    "de": "Ist dieser Platz frei?",
    "lv": "Je to mesto na voljo?",
    "level": "Sätze"
  },
  {
    "de": "Nein, hier sitzt niemand.",
    "lv": "Ne, nihče ne sedi tukaj.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der Bahnsteigkartenautomat?",
    "lv": "Kje je avtomat za vstopnice na peronu?",
    "level": "Sätze"
  },
  {
    "de": "Stell mein Handgepäck ins Gepäcknetz.",
    "lv": "Daj mojo ročno prtljago v mrežo.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das Fenster aufmachen?",
    "lv": "Lahko odprem okno?",
    "level": "Sätze"
  },
  {
    "de": "Es zieht, schließ bitte das Fenster!",
    "lv": "Povlecite skozi, prosim zaprite okno!",
    "level": "Sätze"
  },
  {
    "de": "Welche ist die nächste Station?",
    "lv": "Katera je naslednja postaja?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange hält der Zug?",
    "lv": "Koliko časa vlak stoji?",
    "level": "Sätze"
  },
  {
    "de": "Wo muss ich umsteigen?",
    "lv": "Kam naj prenesem?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug hat Verspätung.",
    "lv": "Vlak zamuja.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Wagen ist für Nichtraucher.",
    "lv": "Ta vagon je nekadilski.",
    "level": "Sätze"
  },
  {
    "de": "Wir fahren jetzt über die Grenze.",
    "lv": "Zdaj se vozimo čez mejo.",
    "level": "Sätze"
  },
  {
    "de": "Hast du etwas zu verzollen?",
    "lv": "Imate kaj razčistiti?",
    "level": "Sätze"
  },
  {
    "de": "Wir sind in Berlin angekommen.",
    "lv": "Prispeli smo v Berlin.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir ein gutes Hotel empfehlen?",
    "lv": "Ali lahko priporočite dober hotel?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie freie Zimmer?",
    "lv": "Vai jums ir brīvas istabas?",
    "level": "Sätze"
  },
  {
    "de": "Ein Zimmer mit zwei Betten, bitte.",
    "lv": "Sobo z dvema posteljama, prosim.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Zimmer pro Nacht?",
    "lv": "Koliko stane soba na noč?",
    "level": "Sätze"
  },
  {
    "de": "Morgen reise ich ab. Weck mich um sieben Uhr!",
    "lv": "Jutri grem. Zbudi me ob sedmih!",
    "level": "Sätze"
  },
  {
    "de": "Die Rechnung, bitte!",
    "lv": "Bill, prosim!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Stadtbibliothek?",
    "lv": "Kje je mestna knjižnica?",
    "level": "Sätze"
  },
  {
    "de": "Wann hat das Museum geöffnet?",
    "lv": "Kdaj je muzej odprt?",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir ins Museum gehen?",
    "lv": "Gremo v muzej?",
    "level": "Sätze"
  },
  {
    "de": "Fahren wir mit dem Bus oder der U-Bahn?",
    "lv": "Gremo z avtobusom ali podzemno?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die nächste Bushaltestelle?",
    "lv": "Kje je najbližja avtobusna postaja?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe großen Hunger.",
    "lv": "Zelo sem lačen.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir zusammen essen?",
    "lv": "Greva skupaj jest?",
    "level": "Sätze"
  },
  {
    "de": "Kellner, die Speisekarte, bitte!",
    "lv": "Natakarji, meni prosim!",
    "level": "Sätze"
  },
  {
    "de": "Ist der Fisch frisch?",
    "lv": "Je riba sveža?",
    "level": "Sätze"
  },
  {
    "de": "Das schmeckt ausgezeichnet!",
    "lv": "Odličnega okusa je!",
    "level": "Sätze"
  },
  {
    "de": "Kellner, zahlen bitte!",
    "lv": "Natakarji, prosim plačajte!",
    "level": "Sätze"
  },
  {
    "de": "Ich gehe ins Café einen Kaffee trinken.",
    "lv": "Grem v kavarno spit kavo.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mitkommen?",
    "lv": "Bi šel zraven?",
    "level": "Sätze"
  },
  {
    "de": "Eine Tasse Kaffee mit Milch, bitte!",
    "lv": "Skodelico kave z mlekom, prosim!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneller, ich habe es eilig!",
    "lv": "Hitreje prosim, moram pohiteti!",
    "level": "Sätze"
  },
  {
    "de": "Lass deinen Kaffee nicht kalt werden!",
    "lv": "Naj se kava ne ohladi!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie etwas Erfrischendes?",
    "lv": "Imate kaj osvežilnega?",
    "level": "Sätze"
  },
  {
    "de": "Eine Portion Eis, bitte!",
    "lv": "Porcijo sladoleda, prosim!",
    "level": "Sätze"
  },
  {
    "de": "Heute Morgen habe ich einen Brief bekommen.",
    "lv": "Zjutraj sem prejela pismo.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss ihm gleich schreiben.",
    "lv": "Zdaj mu moram pisati.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der nächste Briefkasten?",
    "lv": "Kje je najbližji nabiralnik?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Post?",
    "lv": "Kur ir pasta nodaļa?",
    "level": "Sätze"
  },
  {
    "de": "Erinnere mich morgen daran zu schreiben!",
    "lv": "Opomni me na podpis jutri!",
    "level": "Sätze"
  },
  {
    "de": "Werfen Sie bitte diesen Brief in den Briefkasten.",
    "lv": "Prosim, vrzite to pismo v nabiralnik!",
    "level": "Sätze"
  },
  {
    "de": "Hallo, hier spricht Emma.",
    "lv": "Pozdravljeni, tukaj Emma.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich dich später anrufen?",
    "lv": "Te lahko pokličem kasneje",
    "level": "Sätze"
  },
  {
    "de": "Muss ich lange warten?",
    "lv": "Ali moram dolgo čakati?",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneiden Sie mir die Haare.",
    "lv": "Prosim, postriži me.",
    "level": "Sätze"
  },
  {
    "de": "Hinten bitte nicht zu kurz.",
    "lv": "Zadaj, prosim, ne prekratek.",
    "level": "Sätze"
  },
  {
    "de": "Wann beginnt die Vorstellung?",
    "lv": "Kdaj se začne predstava?",
    "level": "Sätze"
  },
  {
    "de": "Es fängt um halb acht an.",
    "lv": "Začne se ob pol sedmih.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind ausverkauft.",
    "lv": "Vse vstopnice so razprodane.",
    "level": "Sätze"
  },
  {
    "de": "Drei Karten, bitte!",
    "lv": "Tri vstopnice, prosim!",
    "level": "Sätze"
  },
  {
    "de": "Wir lassen die Jacken in der Garderobe.",
    "lv": "Pustimo jakne v omari.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schnell, der Vorhang geht gleich auf!",
    "lv": "Hitreje prosim, zavesa se bo odprla!",
    "level": "Sätze"
  },
  {
    "de": "Der Vorhang fällt.",
    "lv": "Zastor pade.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dich zum Tanz bitten?",
    "lv": "Te lahko prosim za ples?",
    "level": "Sätze"
  },
  {
    "de": "Wann ist eure Hochzeit?",
    "lv": "Kad būs jūsu kāzas?",
    "level": "Sätze"
  },
  {
    "de": "Ich suche eine Wohnung.",
    "lv": "Iščem stanovanje.",
    "level": "Sätze"
  },
  {
    "de": "Ist in diesem Haus eine Wohnung frei?",
    "lv": "Ali je v tej hiši prosto stanovanje?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet die Miete?",
    "lv": "Koliko je najemnina?",
    "level": "Sätze"
  },
  {
    "de": "Die Wohnung hat drei Zimmer und eine Küche.",
    "lv": "Stanovanje ima tri sobe in kuhinjo.",
    "level": "Sätze"
  },
  {
    "de": "Heute ziehen wir um.",
    "lv": "Danes se selimo.",
    "level": "Sätze"
  },
  {
    "de": "Mia, pack die Sachen bitte in Kisten!",
    "lv": "Mia, daj stvari v škatle, prosim!",
    "level": "Sätze"
  },
  {
    "de": "Hast du alles eingepackt?",
    "lv": "Je že vse zapakirano?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe mit meinem Freund in Kontakt.",
    "lv": "Dopisujem si s prijateljem.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir ins Theater?",
    "lv": "Gremo v gledališče?",
    "level": "Sätze"
  },
  {
    "de": "Ist alles eingeladen?",
    "lv": "Je vse naloženo?",
    "level": "Sätze"
  },
  {
    "de": "Welch schöne Aussicht!",
    "lv": "Kako lep razgled!",
    "level": "Sätze"
  },
  {
    "de": "Nun können wir alles wieder aufräumen.",
    "lv": "Zdaj lahko vse sestavimo nazaj.",
    "level": "Sätze"
  },
  {
    "de": "Wie viele Zimmer habt ihr?",
    "lv": "Koliko sob imate?",
    "level": "Sätze"
  },
  {
    "de": "Im Sommer fahre ich ans Meer.",
    "lv": "Vasarā braukšu pie jūras.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du schwimmen?",
    "lv": "Znaš plavati",
    "level": "Sätze"
  },
  {
    "de": "Schwimm nicht zu weit hinaus!",
    "lv": "Ne plavajte predaleč!",
    "level": "Sätze"
  },
  {
    "de": "Badest du jeden Tag?",
    "lv": "Ali plavate vsak dan?",
    "level": "Sätze"
  },
  {
    "de": "Bei schönem Wetter gehe ich angeln.",
    "lv": "Če je lepo vreme grem na ribolov.",
    "level": "Sätze"
  },
  {
    "de": "Wie sieht er aus?",
    "lv": "Kako izgleda?",
    "level": "Sätze"
  },
  {
    "de": "Er hat sich aber recht verändert.",
    "lv": "Viņš tomēr diezgan mainījies.",
    "level": "Sätze"
  },
  {
    "de": "Wie ist er als Mensch?",
    "lv": "Kakšen je kot oseba?",
    "level": "Sätze"
  },
  {
    "de": "Er ist immer nett und freundlich.",
    "lv": "Vedno je prijazen in prijazen.",
    "level": "Sätze"
  },
  {
    "de": "Ich fühle mich nicht wohl.",
    "lv": "Slabo se počutim.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe starke Kopfschmerzen.",
    "lv": "Imam hud glavobol.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe mich erkältet.",
    "lv": "Prehlajen sem.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Schnupfen.",
    "lv": "Imam izcedek iz nosu.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist schwindlig.",
    "lv": "Vrti se mi",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Arzt gehen.",
    "lv": "Man jāiet pie ārsta.",
    "level": "Sätze"
  },
  {
    "de": "Leg dich ins Bett!",
    "lv": "Lezi v posteljo!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Fieber?",
    "lv": "Imate vročino?",
    "level": "Sätze"
  },
  {
    "de": "Gestern hatte ich erhöhte Temperatur.",
    "lv": "Včeraj sem imela visoko temperaturo.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Zahnschmerzen.",
    "lv": "Boli me zob.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Zahnarzt gehen.",
    "lv": "Moram k zobozdravniku.",
    "level": "Sätze"
  },
  {
    "de": "Weißt du, dass Finn krank ist?",
    "lv": "Ali veš, da je Finn bolan?",
    "level": "Sätze"
  },
  {
    "de": "Laut Arzt wird er bald wieder gesund.",
    "lv": "Po besedah ​​zdravnika bo kmalu spet zdrav.",
    "level": "Sätze"
  },
  {
    "de": "Ich will meine Wohnung neu möblieren.",
    "lv": "Želim prenoviti stanovanje.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das auf Raten kaufen?",
    "lv": "Ali lahko kupim na obroke?",
    "level": "Sätze"
  },
  {
    "de": "Bleib im Bett, bis es dir besser geht!",
    "lv": "Ostanite v postelji, dokler se ne počutite bolje!",
    "level": "Sätze"
  },
  {
    "de": "Noah hat in zwei Wochen schwimmen gelernt.",
    "lv": "Noah se je naučil plavati v dveh tednih.",
    "level": "Sätze"
  },
  {
    "de": "Sei mit dem Essen noch vorsichtig.",
    "lv": "Esi ar ēdienu vēl uzmanīgs.",
    "level": "Sätze"
  },
  {
    "de": "Sprichst du Deutsch?",
    "lv": "Govoriš nemško",
    "level": "Sätze"
  },
  {
    "de": "Ja, ein bisschen.",
    "lv": "Da, malo.",
    "level": "Sätze"
  },
  {
    "de": "Du sprichst ziemlich fließend.",
    "lv": "Govorite precej tekoče.",
    "level": "Sätze"
  },
  {
    "de": "Wo hast du Deutsch gelernt?",
    "lv": "Kje ste se učili nemščine?",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme seit einem Jahr Deutschstunden.",
    "lv": "Že eno leto hodim na pouk nemščine.",
    "level": "Sätze"
  },
  {
    "de": "Ich suche immer Gelegenheit, Deutsch zu sprechen.",
    "lv": "Vedno iščem priložnost, da govorim nemško.",
    "level": "Sätze"
  },
  {
    "de": "Ist das Buch noch vorrätig?",
    "lv": "Je ta knjiga še na voljo?",
    "level": "Sätze"
  },
  {
    "de": "Das Buch ist leider ausverkauft.",
    "lv": "Knjiga je žal razprodana.",
    "level": "Sätze"
  },
  {
    "de": "Wann erscheint die neue Auflage?",
    "lv": "Kdaj bo izšla nova izdaja?",
    "level": "Sätze"
  },
  {
    "de": "Womit kann ich Ihnen helfen?",
    "lv": "Kako lahko pomagam?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie ganz frische Eier?",
    "lv": "Imate sveža jajca?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die?",
    "lv": "Koliko stanejo?",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu teuer.",
    "lv": "Predrago je.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir ein halbes Kilo abwiegen?",
    "lv": "Ali lahko tehtate pol kilograma?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel muss ich zahlen?",
    "lv": "Koliko moram plačati?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet das Kilo?",
    "lv": "Koliko stane kilogram?",
    "level": "Sätze"
  },
  {
    "de": "Wiegen Sie mir bitte zwei Kilo ab.",
    "lv": "Prosim, tehtajte dva kilograma.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch Karotten?",
    "lv": "Imate tudi vi korenje?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie gutes Rindfleisch?",
    "lv": "Imate dobro govedino?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir zwei Kilo Hackfleisch.",
    "lv": "Dajte dva kilograma mletega mesa.",
    "level": "Sätze"
  },
  {
    "de": "Ein Laib Brot, bitte, aber nicht zu knusprig.",
    "lv": "En kruh, prosim, vendar ne pretrd.",
    "level": "Sätze"
  },
  {
    "de": "Das Brot ist frisch gebacken.",
    "lv": "Kruh je sveže pečen.",
    "level": "Sätze"
  },
  {
    "de": "Was für Obst haben Sie heute?",
    "lv": "Kakšno sadje imate danes?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die Äpfel?",
    "lv": "Koliko stanejo jabolka?",
    "level": "Sätze"
  },
  {
    "de": "Dann nehme ich zwei Kilo Äpfel.",
    "lv": "Potem bom vzel dva kilograma jabolk.",
    "level": "Sätze"
  },
  {
    "de": "Die Birnen sind sehr teuer.",
    "lv": "Hruške so zelo drage.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir alles nach Hause liefern?",
    "lv": "Lahko vse dostaviš na dom?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie Reis?",
    "lv": "Vai jums ir rīsi?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir bitte ein Kilo Reis.",
    "lv": "Daj mi kilogram riža, prosim.",
    "level": "Sätze"
  },
  {
    "de": "Danke, diesmal nicht.",
    "lv": "Hvala, tokrat ne.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet dieser Teppich?",
    "lv": "Koliko stane ta preproga?",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Möbel in meine Wohnung liefern?",
    "lv": "Ali lahko dostavite pohištvo v stanovanje?",
    "level": "Sätze"
  },
  {
    "de": "Bitte an der Kasse zahlen.",
    "lv": "Plačajte na blagajni.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, machen Sie die Rechnung.",
    "lv": "Prosim za izdajo računa.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Meter?",
    "lv": "Koliko stane merilnik?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Stoff gefällt mir.",
    "lv": "Všeč mi je ta tkanina.",
    "level": "Sätze"
  },
  {
    "de": "Schneiden Sie mir bitte drei Meter ab.",
    "lv": "Prosim, odrežite tri metre.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch andere Muster?",
    "lv": "Ali imate druge vzorce?",
    "level": "Sätze"
  },
  {
    "de": "Diese Farbe gefällt mir nicht.",
    "lv": "Ta barva mi ni všeč.",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir eine hellere.",
    "lv": "Daj svetlejše.",
    "level": "Sätze"
  },
  {
    "de": "Was kosten diese Socken?",
    "lv": "Koliko stanejo te nogavice?",
    "level": "Sätze"
  },
  {
    "de": "Welche Handschuhe wünschen Sie?",
    "lv": "Kakšne rokavice želite?",
    "level": "Sätze"
  },
  {
    "de": "Die sind mir etwas zu eng.",
    "lv": "Malo so mi pretesni.",
    "level": "Sätze"
  },
  {
    "de": "So, nun passen sie gut.",
    "lv": "Tā, tagad der labi.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir einen guten Schneider empfehlen?",
    "lv": "Lahko priporočite dobrega krojača?",
    "level": "Sätze"
  },
  {
    "de": "Ich will einen Anzug bestellen.",
    "lv": "Želim naročiti obleko.",
    "level": "Sätze"
  },
  {
    "de": "Wann wird er fertig sein?",
    "lv": "Kdaj bo nared?",
    "level": "Sätze"
  },
  {
    "de": "Der Anzug sitzt gut.",
    "lv": "Obleka se dobro prilega.",
    "level": "Sätze"
  },
  {
    "de": "Die Hose ist zu lang.",
    "lv": "Hlače so predolge.",
    "level": "Sätze"
  },
  {
    "de": "Bitte reinigen und bügeln Sie ihn!",
    "lv": "Prosim, očistite in zlikajte!",
    "level": "Sätze"
  },
  {
    "de": "Wann wird das Kleid fertig sein?",
    "lv": "Kdaj bo obleka pripravljena?",
    "level": "Sätze"
  },
  {
    "de": "Die Schuhe sind zu eng.",
    "lv": "Čevlji so pretesni.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Schuhe heute reparieren?",
    "lv": "Lahko danes popraviš svoje čevlje?",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich die Schuhe abholen?",
    "lv": "Kdaj lahko prinesem čevlje?",
    "level": "Sätze"
  },
  {
    "de": "Meine Armbanduhr funktioniert nicht.",
    "lv": "Moja ročna ura ne deluje.",
    "level": "Sätze"
  },
  {
    "de": "Sie geht fünf Minuten vor.",
    "lv": "Pet minut je prezgodaj.",
    "level": "Sätze"
  },
  {
    "de": "Bist du kurzsichtig oder weitsichtig?",
    "lv": "Ste kratkovidni ali daljnovidni?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte eine Brille kaufen.",
    "lv": "Želim si kupiti očala.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie meine Brille reparieren?",
    "lv": "Mi lahko popraviš očala?",
    "level": "Sätze"
  },
  {
    "de": "Das dauert nur eine Viertelstunde.",
    "lv": "Tas ilgs tikai piecpadsmit minūtes.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist mir zu hoch.",
    "lv": "Cena je zame previsoka.",
    "level": "Sätze"
  },
  {
    "de": "Ich brauche zwei Fotos für meinen Pass.",
    "lv": "Potrebujem dve fotografiji za potni list.",
    "level": "Sätze"
  },
  {
    "de": "Bitte packen Sie es ein und schicken Sie es mir nach Hause.",
    "lv": "Zapakirajte in pošljite domov.",
    "level": "Sätze"
  },
  {
    "de": "Wir haben feste Preise.",
    "lv": "Imamo fiksne cene.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, fotografieren Sie mich.",
    "lv": "Prosim, slikaj me.",
    "level": "Sätze"
  },
  {
    "de": "Setzen Sie sich, schauen Sie gerade in die Kamera und bewegen Sie sich nicht!",
    "lv": "Usedi se, glej naravnost v kamero in se ne premikaj!",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich das Probebild sehen?",
    "lv": "Kdaj lahko vidim vzorec?",
    "level": "Sätze"
  },
  {
    "de": "Wann sind die Fotos fertig?",
    "lv": "Kdaj bodo fotografije pripravljene?",
    "level": "Sätze"
  },
  {
    "de": "Die Aufnahme ist gelungen.",
    "lv": "Fotografija je uspela.",
    "level": "Sätze"
  },
  {
    "de": "Die Fotos sind gut geworden.",
    "lv": "Fotografije so dobro izpadle.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie das Foto auch vergrößern?",
    "lv": "Lahko sliko tudi povečaš?",
    "level": "Sätze"
  },
  {
    "de": "Sind diese Steine echt?",
    "lv": "Ali so ti kamni pravi?",
    "level": "Sätze"
  },
  {
    "de": "Ist das echtes Gold?",
    "lv": "Je pravo zlato?",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir bitte Trauringe.",
    "lv": "Prosim, pokaži mi poročne prstane.",
    "level": "Sätze"
  },
  {
    "de": "Der Ring ist mir etwas zu weit.",
    "lv": "Prstan mi je malo prevelik.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann ihn enger machen.",
    "lv": "Lahko ga zožim.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Ring passt mir.",
    "lv": "Ta prstan mi ustreza.",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir schöne Geschenkideen.",
    "lv": "Predstavite čudovite ideje za darila.",
    "level": "Sätze"
  },
  {
    "de": "Wie gefallen dir diese Ohrringe?",
    "lv": "Kako so vam všeč ti uhani?",
    "level": "Sätze"
  },
  {
    "de": "Diese Brosche ist wirklich schön.",
    "lv": "Ta broška je zelo lepa.",
    "level": "Sätze"
  },
  {
    "de": "Der Stein ist ein Saphir.",
    "lv": "Ta kamen je safir.",
    "level": "Sätze"
  },
  {
    "de": "Das ist kein echter Stein, das ist Glas.",
    "lv": "To ni pravi kamen, to je steklo.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Armband kann ich Ihnen besonders empfehlen.",
    "lv": "To zapestnico lahko še posebej priporočam.",
    "level": "Sätze"
  },
  {
    "de": "Es ist besonders schön gearbeitet.",
    "lv": "Je izjemno fino izdelana.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist nicht hoch.",
    "lv": "Cena ni visoka.",
    "level": "Sätze"
  },
  {
    "de": "Bekomme ich die Schachtel gratis?",
    "lv": "Sem dobil škatlo zastonj?",
    "level": "Sätze"
  },
  {
    "de": "Alle Schmuckstücke sind gestempelt.",
    "lv": "Ves nakit je žigosan.",
    "level": "Sätze"
  },
  {
    "de": "Falls es meiner Frau nicht gefällt, kann ich es umtauschen?",
    "lv": "Če moji ženi ni všeč, ga lahko zamenjam?",
    "level": "Sätze"
  },
  {
    "de": "Natürlich, jederzeit.",
    "lv": "Kadarkoli, seveda.",
    "level": "Sätze"
  }
];

window.SENTENCE_ENTRIES = SENTENCE_ENTRIES;

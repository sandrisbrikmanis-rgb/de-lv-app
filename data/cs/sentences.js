const SENTENCE_ENTRIES = [
  {
    "de": "Hüte dich davor!",
    "lv": "Pozor na to!",
    "level": "Sätze"
  },
  {
    "de": "Wenn nichts dazwischenkommt.",
    "lv": "Jestli do toho nic nepřijde. • Pokud vše půjde podle plánu.",
    "level": "Sätze"
  },
  {
    "de": "Das kann ich mir denken!",
    "lv": "To si umím představit!",
    "level": "Sätze"
  },
  {
    "de": "Ist er denn krank?",
    "lv": "Je snad nemocný?",
    "level": "Sätze"
  },
  {
    "de": "Was denn?",
    "lv": "Co je?",
    "level": "Sätze"
  },
  {
    "de": "Desto mehr.",
    "lv": "O to více.",
    "level": "Sätze"
  },
  {
    "de": "Je mehr, desto besser.",
    "lv": "Čím více, tím lépe.",
    "level": "Sätze"
  },
  {
    "de": "Alles deutet auf Regen.",
    "lv": "Vše nasvědčuje dešti.",
    "level": "Sätze"
  },
  {
    "de": "Damit ist mir wenig gedient.",
    "lv": "To mi moc nepomůže.",
    "level": "Sätze"
  },
  {
    "de": "Er ist dienstlich verhindert.",
    "lv": "Nemůže přijít kvůli práci.",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie doch!",
    "lv": "Mluvte!",
    "level": "Sätze"
  },
  {
    "de": "Es donnert.",
    "lv": "Hřmí.",
    "level": "Sätze"
  },
  {
    "de": "Doppelt so groß.",
    "lv": "Dvakrát tak velký.",
    "level": "Sätze"
  },
  {
    "de": "Von dort.",
    "lv": "Odtamtud.",
    "level": "Sätze"
  },
  {
    "de": "Die Zeit drängt.",
    "lv": "Čas tlačí.",
    "level": "Sätze"
  },
  {
    "de": "Ihn drücken Sorgen.",
    "lv": "Trápí ho starosti.",
    "level": "Sätze"
  },
  {
    "de": "Hast du das Buch durchgearbeitet?",
    "lv": "Prostudoval jsi tu knihu?",
    "level": "Sätze"
  },
  {
    "de": "Kein Durchgang!",
    "lv": "Průchod zakázán!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich Sie bitten?",
    "lv": "Mohu vás poprosit?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin durstig.",
    "lv": "Mám žízeň.",
    "level": "Sätze"
  },
  {
    "de": "Eben das meine ich.",
    "lv": "Přesně to mám na mysli.",
    "level": "Sätze"
  },
  {
    "de": "Es ist ganz egal.",
    "lv": "Na tom vůbec nezáleží.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie eigentlich?",
    "lv": "Co vlastně chcete?",
    "level": "Sätze"
  },
  {
    "de": "Eilt es mit dieser Sache?",
    "lv": "Je tato záležitost naléhavá?",
    "level": "Sätze"
  },
  {
    "de": "Eilt sehr!",
    "lv": "Velmi naléhavé!",
    "level": "Sätze"
  },
  {
    "de": "Ich habe es eilig.",
    "lv": "Spěchám.",
    "level": "Sätze"
  },
  {
    "de": "Du bildest dir nur ein, krank zu sein.",
    "lv": "Jen si namlouváš, že jsi nemocný.",
    "level": "Sätze"
  },
  {
    "de": "Was fällt dir ein?",
    "lv": "Jak se opovažuješ?",
    "level": "Sätze"
  },
  {
    "de": "Es war einmal.",
    "lv": "Bylo nebylo.",
    "level": "Sätze"
  },
  {
    "de": "Steigen Sie bitte ein!",
    "lv": "Prosím, nastupte!",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie ein!",
    "lv": "Prosím, vstupte!",
    "level": "Sätze"
  },
  {
    "de": "Einzelnes hat mir dort gefallen.",
    "lv": "Některé věci se mi tam líbily.",
    "level": "Sätze"
  },
  {
    "de": "Es empfiehlt sich.",
    "lv": "Doporučuje se.",
    "level": "Sätze"
  },
  {
    "de": "Diese Flasche enthält Essig.",
    "lv": "Tato láhev obsahuje ocet.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldigen Sie bitte!",
    "lv": "Promiňte, prosím!",
    "level": "Sätze"
  },
  {
    "de": "Entweder... oder...",
    "lv": "Buď... nebo...",
    "level": "Sätze"
  },
  {
    "de": "Wer war der Erste?",
    "lv": "Kdo byl první?",
    "level": "Sätze"
  },
  {
    "de": "Wer fehlt heute?",
    "lv": "Kdo dnes nepřišel?",
    "level": "Sätze"
  },
  {
    "de": "Was fehlt dir?",
    "lv": "Co je s tebou?",
    "level": "Sätze"
  },
  {
    "de": "Wie heißen Sie?",
    "lv": "Jak se jmenujete?",
    "level": "Sätze"
  },
  {
    "de": "Was soll das heißen?",
    "lv": "Co to znamená?",
    "level": "Sätze"
  },
  {
    "de": "Bitte treten Sie näher heran!",
    "lv": "Prosím, pojďte blíž!",
    "level": "Sätze"
  },
  {
    "de": "Heraus mit der Sprache!",
    "lv": "Tak ven s tím!",
    "level": "Sätze"
  },
  {
    "de": "im Herbst",
    "lv": "Na podzim",
    "level": "Sätze"
  },
  {
    "de": "Meine Herrschaften!",
    "lv": "Dámy a pánové!",
    "level": "Sätze"
  },
  {
    "de": "von heute an",
    "lv": "Počínaje dneškem",
    "level": "Sätze"
  },
  {
    "de": "heute früh",
    "lv": "Dnes ráno",
    "level": "Sätze"
  },
  {
    "de": "heute Nacht",
    "lv": "Dnes v noci",
    "level": "Sätze"
  },
  {
    "de": "Zu Hilfe!",
    "lv": "Pomoc!",
    "level": "Sätze"
  },
  {
    "de": "Ich lerne jeden Tag Deutsch.",
    "lv": "Německy se učím každý den.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das bitte wiederholen?",
    "lv": "Můžeš to prosím zopakovat?",
    "level": "Sätze"
  },
  {
    "de": "Wir treffen uns am Bahnhof.",
    "lv": "Scházíme se na nádraží.",
    "level": "Sätze"
  },
  {
    "de": "Ich stimme dir teilweise zu.",
    "lv": "Částečně s tebou souhlasím.",
    "level": "Sätze"
  },
  {
    "de": "Diese Entscheidung hat weitreichende Folgen.",
    "lv": "Toto rozhodnutí má dalekosáhlé důsledky.",
    "level": "Sätze"
  },
  {
    "de": "Man sollte mehrere Perspektiven berücksichtigen.",
    "lv": "Je třeba zvážit několik úhlů pohledu.",
    "level": "Sätze"
  },
  {
    "de": "Könnten Sie das näher erläutern?",
    "lv": "Mohl byste to vysvětlit podrobněji?",
    "level": "Sätze"
  },
  {
    "de": "Was mich anbelangt,...",
    "lv": "Pokud jde o mě...",
    "level": "Sätze"
  },
  {
    "de": "Wie alt sind Sie?",
    "lv": "Kolik je Vám let?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zwanzig Jahre alt.",
    "lv": "Je mi dvacet let.",
    "level": "Sätze"
  },
  {
    "de": "Von heute an.",
    "lv": "Ode dneška.",
    "level": "Sätze"
  },
  {
    "de": "Von jetzt an.",
    "lv": "Od teď.",
    "level": "Sätze"
  },
  {
    "de": "Anders geht es nicht.",
    "lv": "Není jiné cesty.",
    "level": "Sätze"
  },
  {
    "de": "Rufen Sie mich an.",
    "lv": "Zavolejte mi.",
    "level": "Sätze"
  },
  {
    "de": "Bitte stellen Sie das Radio ab.",
    "lv": "Prosím, vypněte rádio.",
    "level": "Sätze"
  },
  {
    "de": "Achte bitte auf den Verkehr.",
    "lv": "Dávej prosím pozor na provoz.",
    "level": "Sätze"
  },
  {
    "de": "Darauf musst du achten.",
    "lv": "Na to si musíš dát pozor.",
    "level": "Sätze"
  },
  {
    "de": "Heute mache ich es anders.",
    "lv": "Dnes to udělám jinak.",
    "level": "Sätze"
  },
  {
    "de": "Wir warten auf den Bus.",
    "lv": "Čekáme na autobus.",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt allein.",
    "lv": "Bydlí sám.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Ausbildung absolviert.",
    "lv": "Absolvoval jsem odborné vzdělání. • Absolvovala jsem odborné vzdělání.",
    "level": "Sätze"
  },
  {
    "de": "Ich warte den Regen ab.",
    "lv": "Počkám, až přestane pršet.",
    "level": "Sätze"
  },
  {
    "de": "Er arbeitet in der Verkaufsabteilung.",
    "lv": "Pracuje v obchodním oddělení.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin allergisch gegen Katzen.",
    "lv": "Jsem alergický na kočky.",
    "level": "Sätze"
  },
  {
    "de": "Andererseits verstehe ich ihn.",
    "lv": "Na druhou stranu ho chápu.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Situation analysiert.",
    "lv": "Analyzoval jsem situaci.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat meinen Vorschlag akzeptiert.",
    "lv": "Přijala můj návrh.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte das genauer analysieren.",
    "lv": "Chci to analyzovat přesněji.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte den Vertrag ändern.",
    "lv": "Chci změnit smlouvu.",
    "level": "Sätze"
  },
  {
    "de": "Er ändert ständig seine Meinung.",
    "lv": "Neustále mění svůj názor.",
    "level": "Sätze"
  },
  {
    "de": "Ähnliche Probleme hatten wir schon früher.",
    "lv": "Podobné problémy jsme měli už dříve.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ahnung!",
    "lv": "Nemám ponětí!",
    "level": "Sätze"
  },
  {
    "de": "Hör auf zu jammern.",
    "lv": "Přestaň si stěžovat.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Kleid ist akademisch gekleidet.",
    "lv": "Tyto šaty jsou v akademickém stylu.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre gerne Akkordeonmusik.",
    "lv": "Rád poslouchám hudbu na akordeon.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das Gerät anklicken?",
    "lv": "Můžeš kliknout na zařízení?",
    "level": "Sätze"
  },
  {
    "de": "Bitte öffne die Datei und klicke darauf.",
    "lv": "Otevři soubor a klikni na něj.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe einen Unfall gehabt.",
    "lv": "Měl jsem nehodu.",
    "level": "Sätze"
  },
  {
    "de": "Wir laufen zum Bahnhof.",
    "lv": "Běžíme na nádraží.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schalte den Fernseher an.",
    "lv": "Zapni prosím televizi.",
    "level": "Sätze"
  },
  {
    "de": "Mein Computer ist abgestürzt.",
    "lv": "Můj počítač spadl.",
    "level": "Sätze"
  },
  {
    "de": "Am Wochenende gehe ich angeln.",
    "lv": "O víkendu jdu na ryby.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe den Anruf verpasst.",
    "lv": "Zmeškal jsem hovor.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mich später anrufen?",
    "lv": "Můžeš mi zavolat později?",
    "level": "Sätze"
  },
  {
    "de": "Bitte nimm meinen Vorschlag an.",
    "lv": "Přijmi prosím můj návrh.",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme dein Angebot an.",
    "lv": "Přijímám tvou nabídku.",
    "level": "Sätze"
  },
  {
    "de": "Er nahm die Einladung an.",
    "lv": "Pozvání přijal.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Angst vor Spinnen.",
    "lv": "Bojím se pavouků.",
    "level": "Sätze"
  },
  {
    "de": "Keine Angst, alles wird gut.",
    "lv": "Neboj se, všechno bude v pořádku.",
    "level": "Sätze"
  },
  {
    "de": "Anklang finden.",
    "lv": "Najít ohlas. • Setkat se s kladným přijetím.",
    "level": "Sätze"
  },
  {
    "de": "Es kommt darauf an.",
    "lv": "Záleží na tom.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Anlass.",
    "lv": "Při této příležitosti.",
    "level": "Sätze"
  },
  {
    "de": "Nehmen wir an, dass...",
    "lv": "Předpokládejme, že...",
    "level": "Sätze"
  },
  {
    "de": "Was hast du da angerichtet?",
    "lv": "Co jsi tam provedl?",
    "level": "Sätze"
  },
  {
    "de": "Bis ans Ende.",
    "lv": "Až do konce.",
    "level": "Sätze"
  },
  {
    "de": "Du glaubst mir anscheinend nicht.",
    "lv": "Zdá se, že mi nevěříš.",
    "level": "Sätze"
  },
  {
    "de": "Meiner Ansicht nach...",
    "lv": "Podle mého názoru...",
    "level": "Sätze"
  },
  {
    "de": "Stell dich nicht so an!",
    "lv": "Nedělej takové cavyky!",
    "level": "Sätze"
  },
  {
    "de": "An die Arbeit gehen.",
    "lv": "Pustit se do práce.",
    "level": "Sätze"
  },
  {
    "de": "Außer Atem sein.",
    "lv": "Být zadýchaný.",
    "level": "Sätze"
  },
  {
    "de": "Guten Appetit!",
    "lv": "Dobrou chuť!",
    "level": "Sätze"
  },
  {
    "de": "In einem Atemzug.",
    "lv": "Jedním dechem.",
    "level": "Sätze"
  },
  {
    "de": "Auf jeden Fall.",
    "lv": "V každém případě.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal war alles still.",
    "lv": "Najednou vše ztichlo.",
    "level": "Sätze"
  },
  {
    "de": "Bitte mach die Tür auf!",
    "lv": "Prosím, otevři dveře!",
    "level": "Sätze"
  },
  {
    "de": "Er hat den Kredit aufgenommen.",
    "lv": "Vzal si půjčku.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen heute aufräumen.",
    "lv": "Dnes musíme uklidit.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre jetzt auf.",
    "lv": "Teď přestanu.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schon auf.",
    "lv": "Už je vzhůru.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen das Treffen verschieben.",
    "lv": "Schůzku musíme přeložit.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat mich aufgeregt.",
    "lv": "Rozčílila mě.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal.",
    "lv": "Najednou.",
    "level": "Sätze"
  },
  {
    "de": "Auf der Stelle.",
    "lv": "Ihned.",
    "level": "Sätze"
  },
  {
    "de": "Für den Schaden aufkommen.",
    "lv": "Uhradit škodu.",
    "level": "Sätze"
  },
  {
    "de": "Bitte die Tür auf!",
    "lv": "Otevřete dveře, prosím!",
    "level": "Sätze"
  },
  {
    "de": "Aufrecht sitzen.",
    "lv": "Sedět vzpřímeně.",
    "level": "Sätze"
  },
  {
    "de": "Er ist auf.",
    "lv": "Už je vzhůru.",
    "level": "Sätze"
  },
  {
    "de": "Alle Kräfte aufwenden.",
    "lv": "Vynaložit veškeré síly.",
    "level": "Sätze"
  },
  {
    "de": "Viel Mühe aufwenden.",
    "lv": "Vynaložit velké úsilí.",
    "level": "Sätze"
  },
  {
    "de": "Geh mir aus den Augen!",
    "lv": "Zmiz mi z očí!",
    "level": "Sätze"
  },
  {
    "de": "Unter vier Augen.",
    "lv": "Mezi čtyřma očima.",
    "level": "Sätze"
  },
  {
    "de": "Aus Mangel an Zeit.",
    "lv": "Kvůli nedostatku času.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Grunde.",
    "lv": "Z tohoto důvodu.",
    "level": "Sätze"
  },
  {
    "de": "Alle außer dir.",
    "lv": "Všichni kromě tebe.",
    "level": "Sätze"
  },
  {
    "de": "Auf Äußerlichkeiten Wert legen.",
    "lv": "Dbát na vnější vzhled.",
    "level": "Sätze"
  },
  {
    "de": "Im äußersten Fall.",
    "lv": "V nejhorším případě.",
    "level": "Sätze"
  },
  {
    "de": "Äußerst wichtig.",
    "lv": "Nesmírně důležité.",
    "level": "Sätze"
  },
  {
    "de": "Aussicht auf die See.",
    "lv": "Výhled na moře.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gute Aussichten.",
    "lv": "Má dobrou šanci.",
    "level": "Sätze"
  },
  {
    "de": "Wie wird dieses Wort ausgesprochen?",
    "lv": "Jak se toto slovo vyslovuje?",
    "level": "Sätze"
  },
  {
    "de": "Sein Beileid aussprechen.",
    "lv": "Vyjádřit soustrast.",
    "level": "Sätze"
  },
  {
    "de": "Wann wurden die Meisterschaftskämpfe ausgetragen?",
    "lv": "Kdy se konaly mistrovské zápasy?",
    "level": "Sätze"
  },
  {
    "de": "Welchen Beruf üben Sie aus?",
    "lv": "Jaké je vaše povolání?",
    "level": "Sätze"
  },
  {
    "de": "Einfluss ausüben.",
    "lv": "Ovlivňovat.",
    "level": "Sätze"
  },
  {
    "de": "Auswärts essen.",
    "lv": "Jíst mimo domov.",
    "level": "Sätze"
  },
  {
    "de": "Per Bahn.",
    "lv": "Vlakem.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Bahn.",
    "lv": "Vlakem.",
    "level": "Sätze"
  },
  {
    "de": "Möglichst bald.",
    "lv": "Co nejdříve.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist Angst und bange.",
    "lv": "Velmi se bojím.",
    "level": "Sätze"
  },
  {
    "de": "Auf die lange Bank schieben.",
    "lv": "Odkládat. • Protahovat. • Odkládat na neurčito.",
    "level": "Sätze"
  },
  {
    "de": "Bar zahlen.",
    "lv": "Platit v hotovosti.",
    "level": "Sätze"
  },
  {
    "de": "Erz bauen.",
    "lv": "Těžit rudu.",
    "level": "Sätze"
  },
  {
    "de": "Mist bauen.",
    "lv": "Vyvádět hlouposti. • Dělat chyby.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin beauftragt.",
    "lv": "Jsem pověřen(a).",
    "level": "Sätze"
  },
  {
    "de": "Nach Bedarf.",
    "lv": "Podle potřeby.",
    "level": "Sätze"
  },
  {
    "de": "Ich bedauere ihn.",
    "lv": "Je mi ho líto.",
    "level": "Sätze"
  },
  {
    "de": "Was bedeutet dieses Wort?",
    "lv": "Co toto slovo znamená?",
    "level": "Sätze"
  },
  {
    "de": "Unter der Bedingung, dass...",
    "lv": "Za podmínky, že...",
    "level": "Sätze"
  },
  {
    "de": "Sie sieht bedrückt aus.",
    "lv": "Vypadá sklesle.",
    "level": "Sätze"
  },
  {
    "de": "Hinweise befolgen.",
    "lv": "Řídit se pokyny.",
    "level": "Sätze"
  },
  {
    "de": "Befehle befolgen.",
    "lv": "Řídit se rozkazy.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Post befördern.",
    "lv": "Poslat poštou.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin begierig zu wissen.",
    "lv": "Opravdu to chci vědět.",
    "level": "Sätze"
  },
  {
    "de": "Zu Beginn.",
    "lv": "Na začátku.",
    "level": "Sätze"
  },
  {
    "de": "Am Beginn.",
    "lv": "Na začátku.",
    "level": "Sätze"
  },
  {
    "de": "Bei Beginn.",
    "lv": "Na začátku.",
    "level": "Sätze"
  },
  {
    "de": "In Begleitung.",
    "lv": "V doprovodu.",
    "level": "Sätze"
  },
  {
    "de": "Mit seiner Begleitung.",
    "lv": "S jeho doprovodem.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schwer von Begriff.",
    "lv": "Pomalu chápe. • Má pomalé myšlení.",
    "level": "Sätze"
  },
  {
    "de": "Im Gedächtnis behalten.",
    "lv": "Pamatovat si. • Uchovat v paměti.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tisch.",
    "lv": "U stolu.",
    "level": "Sätze"
  },
  {
    "de": "Bei Sinnen sein.",
    "lv": "Být při smyslech.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tage.",
    "lv": "Během dne.",
    "level": "Sätze"
  },
  {
    "de": "Bei weitem nicht so.",
    "lv": "Zdaleka ne tak.",
    "level": "Sätze"
  },
  {
    "de": "Alle beide.",
    "lv": "Oba dva.",
    "level": "Sätze"
  },
  {
    "de": "Stürmischer Beifall brach los.",
    "lv": "Ozval se bouřlivý potlesk.",
    "level": "Sätze"
  },
  {
    "de": "Beifall finden.",
    "lv": "Setkat se s ohlasem. • Získat uznání.",
    "level": "Sätze"
  },
  {
    "de": "Beileid aussprechen.",
    "lv": "Vyjádřit soustrast.",
    "level": "Sätze"
  },
  {
    "de": "Auf eigenen Beinen stehen.",
    "lv": "Být finančně nezávislý.",
    "level": "Sätze"
  },
  {
    "de": "Zum Beispiel.",
    "lv": "Například.",
    "level": "Sätze"
  },
  {
    "de": "Beistand leisten.",
    "lv": "Poskytnout pomoc.",
    "level": "Sätze"
  },
  {
    "de": "Beitrag leisten.",
    "lv": "Přispět svým dílem.",
    "level": "Sätze"
  },
  {
    "de": "Jemandes Bekanntschaft machen.",
    "lv": "Seznámit se s někým.",
    "level": "Sätze"
  },
  {
    "de": "Bekanntschaft anknüpfen.",
    "lv": "Seznámit se. • Navázat známost.",
    "level": "Sätze"
  },
  {
    "de": "Belegte Brötchen.",
    "lv": "Obložené housky.",
    "level": "Sätze"
  },
  {
    "de": "Nach Ihrem Belieben.",
    "lv": "Jak si přejete.",
    "level": "Sätze"
  },
  {
    "de": "Zu jeder beliebigen Zeit.",
    "lv": "Kdykoli.",
    "level": "Sätze"
  },
  {
    "de": "Schweigen beobachten.",
    "lv": "Dodržovat ticho.",
    "level": "Sätze"
  },
  {
    "de": "Zur Bequemlichkeit.",
    "lv": "Pro pohodlí.",
    "level": "Sätze"
  },
  {
    "de": "Bereit sein.",
    "lv": "Být připraven.",
    "level": "Sätze"
  },
  {
    "de": "Unfallopfer bergen.",
    "lv": "Zachraňovat oběti nehody.",
    "level": "Sätze"
  },
  {
    "de": "Bericht erstatten.",
    "lv": "Podat zprávu.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind besetzt.",
    "lv": "Všechna místa jsou obsazena.",
    "level": "Sätze"
  },
  {
    "de": "Neue Besen kehren gut.",
    "lv": "Nové koště dobře mete.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt ein Haus.",
    "lv": "Vlastní dům.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt viel Mut.",
    "lv": "Má velkou odvahu.",
    "level": "Sätze"
  },
  {
    "de": "Desto besser.",
    "lv": "Tím lépe.",
    "level": "Sätze"
  },
  {
    "de": "Gute Besserung!",
    "lv": "Uzdrav se! • Uzdravte se!",
    "level": "Sätze"
  },
  {
    "de": "Beim besten Willen.",
    "lv": "Při nejlepší vůli.",
    "level": "Sätze"
  },
  {
    "de": "Am besten.",
    "lv": "Nejlépe.",
    "level": "Sätze"
  },
  {
    "de": "Es besteht Zweifel.",
    "lv": "Existují pochybnosti.",
    "level": "Sätze"
  },
  {
    "de": "Seine Aufgabe besteht darin...",
    "lv": "Jeho úkolem je...",
    "level": "Sätze"
  },
  {
    "de": "Grüße bestellen.",
    "lv": "Vyřídit pozdravy.",
    "level": "Sätze"
  },
  {
    "de": "Ganz bestimmt.",
    "lv": "Rozhodně.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch kommen.",
    "lv": "Přijít na návštěvu.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch sein.",
    "lv": "Být na návštěvě.",
    "level": "Sätze"
  },
  {
    "de": "Oft Konzerte besuchen.",
    "lv": "Často chodit na koncerty.",
    "level": "Sätze"
  },
  {
    "de": "Welche Schule hat er besucht?",
    "lv": "Na jakou školu chodil?",
    "level": "Sätze"
  },
  {
    "de": "In Betracht ziehen.",
    "lv": "Vzít v úvahu. • Zvážit.",
    "level": "Sätze"
  },
  {
    "de": "Außer Betracht lassen.",
    "lv": "Nevzít v úvahu. • Pominout.",
    "level": "Sätze"
  },
  {
    "de": "Er betreibt ein Hotel.",
    "lv": "Provozuje hotel.",
    "level": "Sätze"
  },
  {
    "de": "Alle beiden.",
    "lv": "Oba dva.",
    "level": "Sätze"
  },
  {
    "de": "Alles bezahlen.",
    "lv": "Zaplatit všechno.",
    "level": "Sätze"
  },
  {
    "de": "Bezüglich auf etwas.",
    "lv": "Ohledně něčeho.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön.",
    "lv": "Prosím",
    "level": "Sätze"
  },
  {
    "de": "Wie bitte?",
    "lv": "Prosím?",
    "level": "Sätze"
  },
  {
    "de": "Bitte sehr.",
    "lv": "Prosím",
    "level": "Sätze"
  },
  {
    "de": "Ich habe eine Bitte an Sie.",
    "lv": "Mám na vás prosbu.",
    "level": "Sätze"
  },
  {
    "de": "Trompete blasen.",
    "lv": "Troubit na trubku.",
    "level": "Sätze"
  },
  {
    "de": "In einem Buch blättern.",
    "lv": "Listovat v knize.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßen Füßen.",
    "lv": "Bosýma nohama.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßem Auge.",
    "lv": "Pouhým okem.",
    "level": "Sätze"
  },
  {
    "de": "Danke für die Blumen!",
    "lv": "Díky za kompliment!",
    "level": "Sätze"
  },
  {
    "de": "Alles in Butter.",
    "lv": "Všechno je v pořádku.",
    "level": "Sätze"
  },
  {
    "de": "Bitte checken.",
    "lv": "Prosím, zkontrolujte.",
    "level": "Sätze"
  },
  {
    "de": "Da ist er!",
    "lv": "Tady je!",
    "level": "Sätze"
  },
  {
    "de": "Alles spricht dafür.",
    "lv": "Všechno tomu nasvědčuje.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann nichts dafür.",
    "lv": "Nemůžu za to.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin dagegen.",
    "lv": "Jsem proti tomu.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe nichts dagegen.",
    "lv": "K tomu nemám námitek.",
    "level": "Sätze"
  },
  {
    "de": "Von daheim.",
    "lv": "Z domova.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Dame ziehen.",
    "lv": "Táhnout dámou.",
    "level": "Sätze"
  },
  {
    "de": "Es dämmert.",
    "lv": "Už se stmívá. • Svítá.",
    "level": "Sätze"
  },
  {
    "de": "Danke schön!",
    "lv": "Děkuju! • Děkujeme!",
    "level": "Sätze"
  },
  {
    "de": "Dann und wann.",
    "lv": "Tu a tam.",
    "level": "Sätze"
  },
  {
    "de": "Darauf kannst du dich verlassen.",
    "lv": "Na to se můžeš spolehnout.",
    "level": "Sätze"
  },
  {
    "de": "Daraus wird nichts.",
    "lv": "Z toho nic nebude.",
    "level": "Sätze"
  },
  {
    "de": "So dass...",
    "lv": "Takže...",
    "level": "Sätze"
  },
  {
    "de": "Für wen halten Sie mich?",
    "lv": "Za koho mě považujete?",
    "level": "Sätze"
  },
  {
    "de": "Hände weg!",
    "lv": "Ruce pryč!",
    "level": "Sätze"
  },
  {
    "de": "Lass den Kopf nicht hängen!",
    "lv": "Nevěš hlavu!",
    "level": "Sätze"
  },
  {
    "de": "zu Hause",
    "lv": "Doma",
    "level": "Sätze"
  },
  {
    "de": "nach Hause gehen",
    "lv": "Jít domů",
    "level": "Sätze"
  },
  {
    "de": "von Haus aus",
    "lv": "Od přírody. • Odjakživa.",
    "level": "Sätze"
  },
  {
    "de": "Meinen herzlichsten Glückwunsch!",
    "lv": "Srdečně blahopřeji!",
    "level": "Sätze"
  },
  {
    "de": "Seien Sie so gut!",
    "lv": "Buďte tak laskav!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie die Güte!",
    "lv": "Buďte tak laskav!",
    "level": "Sätze"
  },
  {
    "de": "Was hast du?",
    "lv": "Co je s tebou? • Co se stalo?",
    "level": "Sätze"
  },
  {
    "de": "Gestatten Sie bitte!",
    "lv": "Dovolte mi, prosím!",
    "level": "Sätze"
  },
  {
    "de": "Ist es gestattet zu rauchen?",
    "lv": "Mohu kouřit?",
    "level": "Sätze"
  },
  {
    "de": "Ich muss gestehen, dass...",
    "lv": "Musím přiznat, že...",
    "level": "Sätze"
  },
  {
    "de": "gestern früh",
    "lv": "Včera brzy ráno",
    "level": "Sätze"
  },
  {
    "de": "gestern Abend",
    "lv": "Včera večer",
    "level": "Sätze"
  },
  {
    "de": "Es ist mir gleichgültig, ob...",
    "lv": "Je mi jedno, jestli...",
    "level": "Sätze"
  },
  {
    "de": "Was ist geschehen?",
    "lv": "Co se stalo?",
    "level": "Sätze"
  },
  {
    "de": "Mach keine Geschichten!",
    "lv": "Nedělej hlouposti!",
    "level": "Sätze"
  },
  {
    "de": "Geschweige denn...",
    "lv": "O tom nemluvě. • Natož...",
    "level": "Sätze"
  },
  {
    "de": "Gehen Sie geradeaus!",
    "lv": "Jděte rovně!",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es Ihnen?",
    "lv": "Jak se máte?",
    "level": "Sätze"
  },
  {
    "de": "Frag ihn gelegentlich, ob...",
    "lv": "Občas se ho zeptej, jestli...",
    "level": "Sätze"
  },
  {
    "de": "morgen früh",
    "lv": "Zítra ráno",
    "level": "Sätze"
  },
  {
    "de": "im Frühling",
    "lv": "Na jaře",
    "level": "Sätze"
  },
  {
    "de": "Was gibt’s Neues?",
    "lv": "Co je nového?",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Brief folgt, dass...",
    "lv": "Z tohoto dopisu vyplývá, že...",
    "level": "Sätze"
  },
  {
    "de": "Fahre fort!",
    "lv": "Pokračuj!",
    "level": "Sätze"
  },
  {
    "de": "Er ist kein Freund von...",
    "lv": "Nemá rád...",
    "level": "Sätze"
  },
  {
    "de": "Es erwies sich, dass...",
    "lv": "Ukázalo se, že...",
    "level": "Sätze"
  },
  {
    "de": "Gedenkst du meiner?",
    "lv": "Pamatuješ si mě? • Myslíš na mě?",
    "level": "Sätze"
  },
  {
    "de": "im Winter",
    "lv": "V zimě",
    "level": "Sätze"
  },
  {
    "de": "Welcher Jahrgang sind Sie?",
    "lv": "Který jste ročník?",
    "level": "Sätze"
  },
  {
    "de": "Es jammert mich zu sehen...",
    "lv": "Je mi líto vidět...",
    "level": "Sätze"
  },
  {
    "de": "je mehr, desto besser",
    "lv": "Čím více, tím lépe",
    "level": "Sätze"
  },
  {
    "de": "bis jetzt",
    "lv": "Doteď",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich zum Bahnhof?",
    "lv": "Jak se dostat na nádraží?",
    "level": "Sätze"
  },
  {
    "de": "Komm her!",
    "lv": "Pojď sem!",
    "level": "Sätze"
  },
  {
    "de": "Könnte ich Frau N. sprechen?",
    "lv": "Mohl bych mluvit s paní N.?",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das?",
    "lv": "Kolik to stojí?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange dauert die Vorstellung?",
    "lv": "Jak dlouho vystoupení potrvá?",
    "level": "Sätze"
  },
  {
    "de": "Lass das!",
    "lv": "Přestaň! • Nech toho!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich in Ruhe!",
    "lv": "Nech mě být!",
    "level": "Sätze"
  },
  {
    "de": "Lassen Sie mich Ihnen helfen!",
    "lv": "Dovolte mi, abych vám pomohl!",
    "level": "Sätze"
  },
  {
    "de": "Lasst uns gehen!",
    "lv": "Pojďme!",
    "level": "Sätze"
  },
  {
    "de": "Na, wie läufts?",
    "lv": "Tak jak to jde?",
    "level": "Sätze"
  },
  {
    "de": "Es lebe!",
    "lv": "Ať žije!",
    "level": "Sätze"
  },
  {
    "de": "Leben Sie wohl!",
    "lv": "Sbohem!",
    "level": "Sätze"
  },
  {
    "de": "Was ist los?",
    "lv": "Co se děje?",
    "level": "Sätze"
  },
  {
    "de": "Der Job ist anstrengend.",
    "lv": "Práce je vyčerpávající.",
    "level": "Sätze"
  },
  {
    "de": "Das war ein anstrengender Tag.",
    "lv": "Byl to náročný den.",
    "level": "Sätze"
  },
  {
    "de": "Deutsch lernen kann anstrengend sein.",
    "lv": "Učení němčiny může být vyčerpávající.",
    "level": "Sätze"
  },
  {
    "de": "Er verlangt eine Erklärung.",
    "lv": "Požaduje vysvětlení.",
    "level": "Sätze"
  },
  {
    "de": "Der Verkäufer verlangt zu viel Geld.",
    "lv": "Prodejce požaduje příliš mnoho peněz.",
    "level": "Sätze"
  },
  {
    "de": "Das Gesetz verlangt es so.",
    "lv": "Zákon to vyžaduje.",
    "level": "Sätze"
  },
  {
    "de": "Das ist gar nicht so schwer.",
    "lv": "Není to vůbec tak těžké.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe gar kein Geld.",
    "lv": "Nemám vůbec žádné peníze.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gar nichts gesagt.",
    "lv": "Neřekl vůbec nic.",
    "level": "Sätze"
  },
  {
    "de": "Der Hund ist los.",
    "lv": "Pes je na volno.",
    "level": "Sätze"
  },
  {
    "de": "Hier ist viel los.",
    "lv": "Tady se toho děje hodně.",
    "level": "Sätze"
  },
  {
    "de": "Halt die Luft an!",
    "lv": "Zadrž dech!",
    "level": "Sätze"
  },
  {
    "de": "Was machst du?",
    "lv": "Co to děláš?",
    "level": "Sätze"
  },
  {
    "de": "Sag mal!",
    "lv": "Hele!",
    "level": "Sätze"
  },
  {
    "de": "Was meinen Sie damit?",
    "lv": "Co tím myslíte?",
    "level": "Sätze"
  },
  {
    "de": "Wir gehen mit Ihnen.",
    "lv": "Jdeme s vámi.",
    "level": "Sätze"
  },
  {
    "de": "Ich fahre mit der Eisenbahn.",
    "lv": "Jedu vlakem.",
    "level": "Sätze"
  },
  {
    "de": "am Mittwoch",
    "lv": "Ve středu",
    "level": "Sätze"
  },
  {
    "de": "Es mag sein.",
    "lv": "Možná.",
    "level": "Sätze"
  },
  {
    "de": "Ich mag das nicht.",
    "lv": "Nelíbí se mi to.",
    "level": "Sätze"
  },
  {
    "de": "am Montag",
    "lv": "V pondělí",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen!",
    "lv": "Dobré ráno!",
    "level": "Sätze"
  },
  {
    "de": "am Morgen",
    "lv": "Ráno",
    "level": "Sätze"
  },
  {
    "de": "Gute Nacht!",
    "lv": "Dobrou noc!",
    "level": "Sätze"
  },
  {
    "de": "Nehmen Sie Platz!",
    "lv": "Posaďte se!",
    "level": "Sätze"
  },
  {
    "de": "Letzte Neuheit!",
    "lv": "Nejnovější novinka!",
    "level": "Sätze"
  },
  {
    "de": "Nicht wahr?",
    "lv": "Že ano?",
    "level": "Sätze"
  },
  {
    "de": "Nicht doch!",
    "lv": "Ale ne! • To ne!",
    "level": "Sätze"
  },
  {
    "de": "Nun endlich!",
    "lv": "No konečně!",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das?",
    "lv": "K čemu je to dobré?",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das alles?",
    "lv": "K čemu to všechno je?",
    "level": "Sätze"
  },
  {
    "de": "Parken verboten!",
    "lv": "Parkování je zakázáno!",
    "level": "Sätze"
  },
  {
    "de": "Nicht parken!",
    "lv": "Parkování je zakázáno!",
    "level": "Sätze"
  },
  {
    "de": "Er hat Recht.",
    "lv": "Má pravdu.",
    "level": "Sätze"
  },
  {
    "de": "Wovon ist die Rede?",
    "lv": "O co jde?",
    "level": "Sätze"
  },
  {
    "de": "Davon kann keine Rede sein.",
    "lv": "To nepřipadá v úvahu.",
    "level": "Sätze"
  },
  {
    "de": "Glückliche Reise!",
    "lv": "Šťastnou cestu!",
    "level": "Sätze"
  },
  {
    "de": "Mir reißt die Geduld.",
    "lv": "Už mi dochází trpělivost.",
    "level": "Sätze"
  },
  {
    "de": "Man sagt, dass...",
    "lv": "Říkají, že...",
    "level": "Sätze"
  },
  {
    "de": "Schon gut!",
    "lv": "Už je to dobré!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön!",
    "lv": "Prosím!",
    "level": "Sätze"
  },
  {
    "de": "Was bin ich schuldig?",
    "lv": "Kolik Vám dlužím? • Kolik musím zaplatit?",
    "level": "Sätze"
  },
  {
    "de": "Vor dem Gebrauch schütteln!",
    "lv": "Před použitím protřepat!",
    "level": "Sätze"
  },
  {
    "de": "Sehen Sie mal!",
    "lv": "Podívejte se!",
    "level": "Sätze"
  },
  {
    "de": "Wie sehr auch...",
    "lv": "Jakkoli...",
    "level": "Sätze"
  },
  {
    "de": "Seit wann?",
    "lv": "Od kdy?",
    "level": "Sätze"
  },
  {
    "de": "Was soll ich tun?",
    "lv": "Co mám dělat?",
    "level": "Sätze"
  },
  {
    "de": "im Sommer",
    "lv": "V létě",
    "level": "Sätze"
  },
  {
    "de": "Nicht nur..., sondern auch...",
    "lv": "Nejen..., ale i...",
    "level": "Sätze"
  },
  {
    "de": "Sonst noch etwas?",
    "lv": "Ještě něco?",
    "level": "Sätze"
  },
  {
    "de": "Spaß beiseite!",
    "lv": "Ale vážně! • Žerty stranou!",
    "level": "Sätze"
  },
  {
    "de": "Wie spät ist es?",
    "lv": "Kolik je hodin?",
    "level": "Sätze"
  },
  {
    "de": "Durchfahrt gesperrt!",
    "lv": "Průjezd uzavřen!",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie deutsch?",
    "lv": "Mluvíte německy?",
    "level": "Sätze"
  },
  {
    "de": "Statt zu...",
    "lv": "Místo...",
    "level": "Sätze"
  },
  {
    "de": "Wie steht’s?",
    "lv": "Jak se máte?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Hut steht ihr gut.",
    "lv": "Ten klobouk jí sluší.",
    "level": "Sätze"
  },
  {
    "de": "Guten Tag!",
    "lv": "Dobrý den!",
    "level": "Sätze"
  },
  {
    "de": "Wo treffen wir uns?",
    "lv": "Kde se potkáme?",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie näher!",
    "lv": "Pojďte blíž!",
    "level": "Sätze"
  },
  {
    "de": "Ehrlichkeit ist eine Tugend.",
    "lv": "Upřímnost je ctnost.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe viel zu tun.",
    "lv": "Mám toho hodně na práci.",
    "level": "Sätze"
  },
  {
    "de": "Nicht übel!",
    "lv": "Ujde! • Není to špatné!",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt über mir.",
    "lv": "Bydlí nade mnou.",
    "level": "Sätze"
  },
  {
    "de": "Er ist davon überzeugt.",
    "lv": "Je o tom přesvědčen.",
    "level": "Sätze"
  },
  {
    "de": "So ist es üblich.",
    "lv": "Tak se to běžně dělá.",
    "level": "Sätze"
  },
  {
    "de": "Deine Uhr geht nach.",
    "lv": "Tvoje hodinky jdou pozdě.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel Uhr ist es?",
    "lv": "Kolik je hodin?",
    "level": "Sätze"
  },
  {
    "de": "Um acht Uhr früh.",
    "lv": "V osm hodin ráno.",
    "level": "Sätze"
  },
  {
    "de": "umso mehr",
    "lv": "Tím více",
    "level": "Sätze"
  },
  {
    "de": "Rechts um!",
    "lv": "Vpravo v bok!",
    "level": "Sätze"
  },
  {
    "de": "Und ob!",
    "lv": "A jak!",
    "level": "Sätze"
  },
  {
    "de": "und zwar",
    "lv": "A sice",
    "level": "Sätze"
  },
  {
    "de": "Auf Unkosten von...",
    "lv": "Na úkor...",
    "level": "Sätze"
  },
  {
    "de": "Er saß unter den Zuschauern.",
    "lv": "Seděl mezi publikem.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ursache!",
    "lv": "Není zač!",
    "level": "Sätze"
  },
  {
    "de": "Es geschah, wie verabredet.",
    "lv": "Stalo se tak, jak bylo domluveno.",
    "level": "Sätze"
  },
  {
    "de": "Rauchen verboten!",
    "lv": "Kouření je zakázáno!",
    "level": "Sätze"
  },
  {
    "de": "Falsch verbunden!",
    "lv": "Špatné spojení!",
    "level": "Sätze"
  },
  {
    "de": "Eintritt verboten!",
    "lv": "Vstup zakázán!",
    "level": "Sätze"
  },
  {
    "de": "Verstehen Sie mich?",
    "lv": "Rozumíte mi?",
    "level": "Sätze"
  },
  {
    "de": "Er versteht nichts davon.",
    "lv": "Nic z toho nechápe.",
    "level": "Sätze"
  },
  {
    "de": "Seine Ansicht vertreten.",
    "lv": "Zastávat jeho názor.",
    "level": "Sätze"
  },
  {
    "de": "Streit verursachen.",
    "lv": "Vyvolat hádku.",
    "level": "Sätze"
  },
  {
    "de": "Viel besser.",
    "lv": "Mnohem lepší.",
    "level": "Sätze"
  },
  {
    "de": "Zu viel.",
    "lv": "Příliš mnoho.",
    "level": "Sätze"
  },
  {
    "de": "Vom Hörensagen.",
    "lv": "Z doslechu.",
    "level": "Sätze"
  },
  {
    "de": "Von Zeit zu Zeit.",
    "lv": "Čas od času.",
    "level": "Sätze"
  },
  {
    "de": "Von Beruf.",
    "lv": "Povoláním.",
    "level": "Sätze"
  },
  {
    "de": "Er ist Berliner von Geburt.",
    "lv": "Je rodem Berlíňan.",
    "level": "Sätze"
  },
  {
    "de": "Er steht vor dem Fenster.",
    "lv": "Stojí před oknem.",
    "level": "Sätze"
  },
  {
    "de": "Vor Sonnenaufgang.",
    "lv": "Před východem slunce.",
    "level": "Sätze"
  },
  {
    "de": "Vor vierzehn Tagen.",
    "lv": "Před čtrnácti dny.",
    "level": "Sätze"
  },
  {
    "de": "Vor Freude.",
    "lv": "Radostí.",
    "level": "Sätze"
  },
  {
    "de": "Vor allem.",
    "lv": "Především.",
    "level": "Sätze"
  },
  {
    "de": "Im Voraus.",
    "lv": "Předem.",
    "level": "Sätze"
  },
  {
    "de": "Unter der Voraussetzung, dass...",
    "lv": "Za předpokladu, že...",
    "level": "Sätze"
  },
  {
    "de": "Unter dem Vorbehalt.",
    "lv": "S výhradou.",
    "level": "Sätze"
  },
  {
    "de": "Vorhanden sein.",
    "lv": "Být k dispozici. • Být přítomen.",
    "level": "Sätze"
  },
  {
    "de": "In der vorigen Woche.",
    "lv": "Minulý týden.",
    "level": "Sätze"
  },
  {
    "de": "Vorkehrungen treffen.",
    "lv": "Učinit opatření.",
    "level": "Sätze"
  },
  {
    "de": "Sie kommt mir bekannt vor.",
    "lv": "Připadá mi povědomá.",
    "level": "Sätze"
  },
  {
    "de": "Er hat Vorliebe für Literatur.",
    "lv": "Má velmi rád literaturu.",
    "level": "Sätze"
  },
  {
    "de": "Heute Vormittag.",
    "lv": "Dnes dopoledne.",
    "level": "Sätze"
  },
  {
    "de": "Von vorn.",
    "lv": "Zepředu.",
    "level": "Sätze"
  },
  {
    "de": "Nach vorn.",
    "lv": "Vpřed.",
    "level": "Sätze"
  },
  {
    "de": "Von vornherein.",
    "lv": "Na úplném začátku.",
    "level": "Sätze"
  },
  {
    "de": "Im Vorteil sein.",
    "lv": "Být ve výhodě.",
    "level": "Sätze"
  },
  {
    "de": "Wach sein.",
    "lv": "Být vzhůru.",
    "level": "Sätze"
  },
  {
    "de": "Wach werden.",
    "lv": "Probudit se.",
    "level": "Sätze"
  },
  {
    "de": "Auf Wache sein.",
    "lv": "Být na stráži.",
    "level": "Sätze"
  },
  {
    "de": "Während eines Jahres.",
    "lv": "V průběhu roku.",
    "level": "Sätze"
  },
  {
    "de": "Während des Krieges.",
    "lv": "Během války.",
    "level": "Sätze"
  },
  {
    "de": "Gegen eine Wand reden.",
    "lv": "Mluvit do zdi.",
    "level": "Sätze"
  },
  {
    "de": "Hier haben die Wände Ohren.",
    "lv": "Tady mají stěny uši.",
    "level": "Sätze"
  },
  {
    "de": "Bis wann?",
    "lv": "Do kdy?",
    "level": "Sätze"
  },
  {
    "de": "Es ist warm.",
    "lv": "Je teplo.",
    "level": "Sätze"
  },
  {
    "de": "Auf eine Nachricht warten.",
    "lv": "Čekat na zprávu.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie?",
    "lv": "Co chcete?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein...?",
    "lv": "Jaký...? • Co za...?",
    "level": "Sätze"
  },
  {
    "de": "Auf halbem Wege.",
    "lv": "V půli cesty.",
    "level": "Sätze"
  },
  {
    "de": "Auf diesem Wege.",
    "lv": "Takhle. • Takovými prostředky.",
    "level": "Sätze"
  },
  {
    "de": "Auf friedlichem Wege.",
    "lv": "Mírovou cestou.",
    "level": "Sätze"
  },
  {
    "de": "Unserer Freundschaft wegen.",
    "lv": "Kvůli našemu přátelství.",
    "level": "Sätze"
  },
  {
    "de": "Von Rechts wegen.",
    "lv": "Právem.",
    "level": "Sätze"
  },
  {
    "de": "Weh tun.",
    "lv": "Bolet.",
    "level": "Sätze"
  },
  {
    "de": "Zu Weihnachten.",
    "lv": "O Vánocích.",
    "level": "Sätze"
  },
  {
    "de": "Auf welche Weise?",
    "lv": "Jakým způsobem?",
    "level": "Sätze"
  },
  {
    "de": "Art und Weise.",
    "lv": "Způsob.",
    "level": "Sätze"
  },
  {
    "de": "Ohne weiteres.",
    "lv": "Bez dalšího.",
    "level": "Sätze"
  },
  {
    "de": "Bis auf weiteres.",
    "lv": "Do odvolání.",
    "level": "Sätze"
  },
  {
    "de": "Und so weiter.",
    "lv": "A tak dále.",
    "level": "Sätze"
  },
  {
    "de": "Weiter nichts.",
    "lv": "Nic víc.",
    "level": "Sätze"
  },
  {
    "de": "An welchem Tag?",
    "lv": "Který den?",
    "level": "Sätze"
  },
  {
    "de": "Alle Welt.",
    "lv": "Celý svět. • Všichni",
    "level": "Sätze"
  },
  {
    "de": "In wenigen Tagen.",
    "lv": "Za několik dní.",
    "level": "Sätze"
  },
  {
    "de": "Zu wenig.",
    "lv": "Příliš málo.",
    "level": "Sätze"
  },
  {
    "de": "Wenn auch.",
    "lv": "Ačkoli.",
    "level": "Sätze"
  },
  {
    "de": "Wer da?",
    "lv": "Kdo je tam?",
    "level": "Sätze"
  },
  {
    "de": "Gesammelte Werke von Schiller.",
    "lv": "Schillerovy sebrané spisy.",
    "level": "Sätze"
  },
  {
    "de": "Ausgewählte Werke.",
    "lv": "Vybraná díla.",
    "level": "Sätze"
  },
  {
    "de": "Er ist wert, dass...",
    "lv": "Zaslouží si...",
    "level": "Sätze"
  },
  {
    "de": "Es ist zwei Euro wert.",
    "lv": "Stojí to dvě eura.",
    "level": "Sätze"
  },
  {
    "de": "Nach Westen.",
    "lv": "Na západ.",
    "level": "Sätze"
  },
  {
    "de": "Von Westen.",
    "lv": "Ze západu.",
    "level": "Sätze"
  },
  {
    "de": "In Wettbewerb treten.",
    "lv": "Zapojit se do soutěže.",
    "level": "Sätze"
  },
  {
    "de": "Um die Wette laufen.",
    "lv": "Závodit.",
    "level": "Sätze"
  },
  {
    "de": "Was gilt die Wette?",
    "lv": "O co se sázíme?",
    "level": "Sätze"
  },
  {
    "de": "Wie wird das Wetter?",
    "lv": "Jaké bude počasí?",
    "level": "Sätze"
  },
  {
    "de": "Wettkampf im Turnen.",
    "lv": "Závody v gymnastice.",
    "level": "Sätze"
  },
  {
    "de": "Wider meinen Willen.",
    "lv": "Proti mé vůli.",
    "level": "Sätze"
  },
  {
    "de": "Widerspruch erheben.",
    "lv": "Vznést námitku.",
    "level": "Sätze"
  },
  {
    "de": "Wie alt ist er?",
    "lv": "Jak je starý?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange?",
    "lv": "Jak dlouho?",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiederhören!",
    "lv": "Na slyšenou!",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiedersehen!",
    "lv": "Na shledanou!",
    "level": "Sätze"
  },
  {
    "de": "Wilde Tiere.",
    "lv": "Divoká zvířata.",
    "level": "Sätze"
  },
  {
    "de": "Herzlich willkommen!",
    "lv": "Srdečně vítejte!",
    "level": "Sätze"
  },
  {
    "de": "Du musst ziehen.",
    "lv": "Musíš táhnout.",
    "level": "Sätze"
  },
  {
    "de": "Es zieht.",
    "lv": "Táhne.",
    "level": "Sätze"
  },
  {
    "de": "Ziemlich kalt.",
    "lv": "Docela chladno.",
    "level": "Sätze"
  },
  {
    "de": "Zipfel einer Wurst.",
    "lv": "Konec klobásy.",
    "level": "Sätze"
  },
  {
    "de": "Zu ihm gehen.",
    "lv": "Jít k němu.",
    "level": "Sätze"
  },
  {
    "de": "Zur Schule gehen.",
    "lv": "Jít do školy.",
    "level": "Sätze"
  },
  {
    "de": "Zu Hause bleiben.",
    "lv": "Zůstat doma.",
    "level": "Sätze"
  },
  {
    "de": "Von Tag zu Tag.",
    "lv": "Den ode dne.",
    "level": "Sätze"
  },
  {
    "de": "Zum Glück.",
    "lv": "Naštěstí.",
    "level": "Sätze"
  },
  {
    "de": "Wasser zum Trinken.",
    "lv": "Voda na pití.",
    "level": "Sätze"
  },
  {
    "de": "Zu Fuß.",
    "lv": "Pěšky.",
    "level": "Sätze"
  },
  {
    "de": "Zu Pferde.",
    "lv": "Na koni.",
    "level": "Sätze"
  },
  {
    "de": "Zu Rad.",
    "lv": "Na kole.",
    "level": "Sätze"
  },
  {
    "de": "Es hörte auf zu regnen.",
    "lv": "Přestalo pršet.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe noch viel zu tun.",
    "lv": "Mám toho ještě hodně na práci.",
    "level": "Sätze"
  },
  {
    "de": "Zu früh.",
    "lv": "Příliš brzy.",
    "level": "Sätze"
  },
  {
    "de": "Zu groß.",
    "lv": "Příliš velké.",
    "level": "Sätze"
  },
  {
    "de": "Mit den Achseln zucken.",
    "lv": "Pokrčit rameny.",
    "level": "Sätze"
  },
  {
    "de": "In einem Zug trinken.",
    "lv": "Vypít jedním douškem.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde gehen.",
    "lv": "Zahynout.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde legen.",
    "lv": "Položit za základ. • Brát jako základ.",
    "level": "Sätze"
  },
  {
    "de": "Zum ersten Mal.",
    "lv": "Poprvé.",
    "level": "Sätze"
  },
  {
    "de": "Machen Sie bitte die Tür zu!",
    "lv": "Zavřete prosím dveře!",
    "level": "Sätze"
  },
  {
    "de": "Er hat zugenommen.",
    "lv": "Přibral.",
    "level": "Sätze"
  },
  {
    "de": "Die Tage nehmen zu.",
    "lv": "Dny se prodlužují.",
    "level": "Sätze"
  },
  {
    "de": "Zusammenhängen mit etwas.",
    "lv": "Být s něčím spojen.",
    "level": "Sätze"
  },
  {
    "de": "Die Tür ist zu.",
    "lv": "Dveře jsou zavřené.",
    "level": "Sätze"
  },
  {
    "de": "Das hätte ich ihm nicht zugetraut.",
    "lv": "To bych od něj nečekal.",
    "level": "Sätze"
  },
  {
    "de": "Freier Zutritt.",
    "lv": "Volný vstup.",
    "level": "Sätze"
  },
  {
    "de": "Zutritt verboten!",
    "lv": "Vstup zakázán!",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu viel!",
    "lv": "To je moc!",
    "level": "Sätze"
  },
  {
    "de": "Zuwider werden.",
    "lv": "Stát se protivným. • Zprotivit se.",
    "level": "Sätze"
  },
  {
    "de": "Und zwar.",
    "lv": "A to.",
    "level": "Sätze"
  },
  {
    "de": "Es steht außer Zweifel.",
    "lv": "Není pochyb.",
    "level": "Sätze"
  },
  {
    "de": "Ohne Zweifel.",
    "lv": "Bez pochyby.",
    "level": "Sätze"
  },
  {
    "de": "Zum Zweiten.",
    "lv": "Za druhé.",
    "level": "Sätze"
  },
  {
    "de": "Frohes neues Jahr!",
    "lv": "Šťastný nový rok!",
    "level": "Sätze"
  },
  {
    "de": "Herzlichen Glückwunsch zum Geburtstag!",
    "lv": "Všechno nejlepší k narozeninám!",
    "level": "Sätze"
  },
  {
    "de": "Gute Reise!",
    "lv": "Šťastnou cestu!",
    "level": "Sätze"
  },
  {
    "de": "Es freut mich, Sie kennenzulernen.",
    "lv": "Rád vás poznávám.",
    "level": "Sätze"
  },
  {
    "de": "Wären Sie bitte so nett?",
    "lv": "Byl byste prosím tak laskav?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin Ihnen sehr dankbar.",
    "lv": "Jsem vám velmi vděčný.",
    "level": "Sätze"
  },
  {
    "de": "Setzt euch bitte hin!",
    "lv": "Posaďte se, prosím!",
    "level": "Sätze"
  },
  {
    "de": "Ben, komm bitte an die Tafel!",
    "lv": "Bene, prosím, pojď k tabuli!",
    "level": "Sätze"
  },
  {
    "de": "Schlagt bitte die Lehrbücher auf!",
    "lv": "Otevřete učebnice, prosím!",
    "level": "Sätze"
  },
  {
    "de": "Geht bitte in die Sporthalle!",
    "lv": "Prosím, jděte do sportovní haly!",
    "level": "Sätze"
  },
  {
    "de": "Schläfst du noch?",
    "lv": "Ještě spíš?",
    "level": "Sätze"
  },
  {
    "de": "Schlafen Sie noch?",
    "lv": "Spíte ještě?",
    "level": "Sätze"
  },
  {
    "de": "Er ist fest eingeschlafen.",
    "lv": "Pevně usnul.",
    "level": "Sätze"
  },
  {
    "de": "Wecke ihn bitte auf, es ist schon spät!",
    "lv": "Prosím, vzbuď ho, už je pozdě!",
    "level": "Sätze"
  },
  {
    "de": "Es tut mir sehr leid!",
    "lv": "Je mi to moc líto!",
    "level": "Sätze"
  },
  {
    "de": "Vielen Dank!",
    "lv": "Děkuji mnohokrát!",
    "level": "Sätze"
  },
  {
    "de": "Finn, fang bitte an!",
    "lv": "Finne, začni, prosím!",
    "level": "Sätze"
  },
  {
    "de": "Lest bitte mit!",
    "lv": "Čtěte s námi, prosím!",
    "level": "Sätze"
  },
  {
    "de": "Emma, schau bitte nicht aus dem Fenster!",
    "lv": "Emmo, prosím, nedívej se z okna!",
    "level": "Sätze"
  },
  {
    "de": "Jonas, bring bitte die Hefte!",
    "lv": "Jonasi, prosím, přines sešity!",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte zurück an deinen Platz!",
    "lv": "Vrať se prosím na své místo!",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb acht.",
    "lv": "Je půl osmé.",
    "level": "Sätze"
  },
  {
    "de": "Wann wachst du gewöhnlich auf?",
    "lv": "Kdy se obvykle probouzíš?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe gleich auf.",
    "lv": "Hned vstanu.",
    "level": "Sätze"
  },
  {
    "de": "Steh auf, Hanna, es klingelt!",
    "lv": "Vstávej, Hanno, zvoní!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich noch fünf Minuten schlafen!",
    "lv": "Nech mě spát ještě pět minut!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss nicht, das Zimmer zu lüften!",
    "lv": "Nezapomeň vyvětrat pokoj!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist das Handtuch?",
    "lv": "Kde je ručník?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mir die Zähne putzen.",
    "lv": "Chci si vyčistit zuby.",
    "level": "Sätze"
  },
  {
    "de": "Mit was putzt du dir die Zähne?",
    "lv": "Čím si čistíš zuby?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mich anziehen.",
    "lv": "Chci se obléknout.",
    "level": "Sätze"
  },
  {
    "de": "Zieh dich bitte schnell an!",
    "lv": "Rychle se obleč, prosím!",
    "level": "Sätze"
  },
  {
    "de": "Kleide dich wärmer an, draußen ist es kühl.",
    "lv": "Obleč se tepleji, venku je chladno.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, wie geht es dir?",
    "lv": "Dobré ráno, jak se máš?",
    "level": "Sätze"
  },
  {
    "de": "Mir geht es gut, danke.",
    "lv": "Mám se dobře, díky.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es Neues?",
    "lv": "Co je nového?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein Chaos hier!",
    "lv": "To je ale nepořádek!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich beim Aufräumen helfen?",
    "lv": "Mohu pomoci uklidit?",
    "level": "Sätze"
  },
  {
    "de": "Was trinkst du morgens, Kaffee oder Tee?",
    "lv": "Co piješ ráno, kávu nebo čaj?",
    "level": "Sätze"
  },
  {
    "de": "Gewöhnlich trinke ich morgens eine Tasse Kaffee.",
    "lv": "Ráno obvykle piju šálek kávy.",
    "level": "Sätze"
  },
  {
    "de": "Am liebsten trinke ich schwarzen Kaffee.",
    "lv": "Nejraději piju černou kávu.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, hast du gut geschlafen?",
    "lv": "Dobré ráno, vyspal ses dobře?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin noch sehr müde.",
    "lv": "Jsem stále velmi unavený.",
    "level": "Sätze"
  },
  {
    "de": "Willst du Kaffee oder Milch?",
    "lv": "Dáš si kávu nebo mléko?",
    "level": "Sätze"
  },
  {
    "de": "Gib mir bitte ein Brötchen mit Käse.",
    "lv": "Dej mi prosím housku se sýrem.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss jetzt los!",
    "lv": "Už musím jít!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss dein Frühstück nicht!",
    "lv": "Nezapomeň na snídani!",
    "level": "Sätze"
  },
  {
    "de": "Klara, deck bitte den Tisch!",
    "lv": "Klaro, prosím, prostři stůl!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss die Servietten nicht!",
    "lv": "Nezapomeň na ubrousky!",
    "level": "Sätze"
  },
  {
    "de": "Wann esst ihr zu Mittag?",
    "lv": "Kdy obědváte?",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit zu essen.",
    "lv": "Je čas jíst.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es heute zu Mittag?",
    "lv": "Co je dnes k obědu?",
    "level": "Sätze"
  },
  {
    "de": "Wie schmeckt dir die Suppe?",
    "lv": "Jak ti chutná polévka?",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt ist sie etwas zu salzig.",
    "lv": "Upřímně řečeno, je trochu příliš slaná.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dir ein Stück Brot geben?",
    "lv": "Můžu ti dát krajíc chleba?",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich habe schon.",
    "lv": "Díky, už mám.",
    "level": "Sätze"
  },
  {
    "de": "Das Fleisch schmeckt ausgezeichnet.",
    "lv": "Maso chutná skvěle.",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich bin schon satt.",
    "lv": "Díky, už mám plno.",
    "level": "Sätze"
  },
  {
    "de": "Heute haben wir Besuch.",
    "lv": "Dnes máme návštěvníky.",
    "level": "Sätze"
  },
  {
    "de": "Bist du heute Abend frei?",
    "lv": "Máš dnes večer volno?",
    "level": "Sätze"
  },
  {
    "de": "Komm doch heute zum Mittagessen vorbei!",
    "lv": "Přijď dnes na oběd!",
    "level": "Sätze"
  },
  {
    "de": "Setzen wir uns an den Tisch.",
    "lv": "Sedneme si ke stolu.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, bedien dich!",
    "lv": "Posluž si, prosím!",
    "level": "Sätze"
  },
  {
    "de": "Stört dich das Rauchen?",
    "lv": "Vadí ti kouření?",
    "level": "Sätze"
  },
  {
    "de": "Danke für die nette Aufnahme!",
    "lv": "Děkuji za vřelé přivítání!",
    "level": "Sätze"
  },
  {
    "de": "Wann gehst du ins Bett?",
    "lv": "Kdy jdeš spát?",
    "level": "Sätze"
  },
  {
    "de": "Wenn ich von der Arbeit komme, bin ich immer müde.",
    "lv": "Jsem vždy unavený, když přijdu z práce.",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, ins Bett zu gehen.",
    "lv": "Je čas jít spát.",
    "level": "Sätze"
  },
  {
    "de": "Es ist schönes Wetter.",
    "lv": "Je hezké počasí.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mit mir spazieren gehen?",
    "lv": "Chceš se se mnou projít?",
    "level": "Sätze"
  },
  {
    "de": "Sieh mal, es wird gleich regnen.",
    "lv": "Podívej, brzy bude pršet.",
    "level": "Sätze"
  },
  {
    "de": "Nimm den Regenschirm mit!",
    "lv": "Vezmi si s sebou deštník!",
    "level": "Sätze"
  },
  {
    "de": "Es regnet.",
    "lv": "Prší.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin schon ganz nass.",
    "lv": "Už jsem úplně mokrá.",
    "level": "Sätze"
  },
  {
    "de": "Glaubst du, dass es den ganzen Tag regnen wird?",
    "lv": "Myslíš, že bude celý den pršet?",
    "level": "Sätze"
  },
  {
    "de": "Es hört auf zu regnen.",
    "lv": "Déšť ustává.",
    "level": "Sätze"
  },
  {
    "de": "Die Sonne scheint wieder.",
    "lv": "Už zase svítí sluníčko.",
    "level": "Sätze"
  },
  {
    "de": "Es ist sehr warm.",
    "lv": "Je velmi teplo.",
    "level": "Sätze"
  },
  {
    "de": "Es sieht nach Regen aus.",
    "lv": "Vypadá to, že bude pršet.",
    "level": "Sätze"
  },
  {
    "de": "Wir bekommen gleich ein Gewitter.",
    "lv": "Čeká nás bouřka.",
    "level": "Sätze"
  },
  {
    "de": "Das Gewitter zieht vorüber.",
    "lv": "Bouřka přechází.",
    "level": "Sätze"
  },
  {
    "de": "Die Wolken verziehen sich.",
    "lv": "Mraky se rozptylují.",
    "level": "Sätze"
  },
  {
    "de": "Siehst du den Regenbogen?",
    "lv": "Vidíš duhu?",
    "level": "Sätze"
  },
  {
    "de": "Der Winter ist da, es hat geschneit.",
    "lv": "Zima je tady, sněžilo.",
    "level": "Sätze"
  },
  {
    "de": "Es schneit.",
    "lv": "Sněží.",
    "level": "Sätze"
  },
  {
    "de": "Wie schön ist es im Wald im Winter!",
    "lv": "Jak je v zimě v lese krásně!",
    "level": "Sätze"
  },
  {
    "de": "Mir ist kalt, ich friere.",
    "lv": "Je mi zima, mrznu.",
    "level": "Sätze"
  },
  {
    "de": "Draußen ist Glatteis, pass auf!",
    "lv": "Venku to klouže, pozor!",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir auf die Eisbahn gehen?",
    "lv": "Půjdeme bruslit?",
    "level": "Sätze"
  },
  {
    "de": "Zieh die Jacke an, du kannst dich erkälten.",
    "lv": "Obleč si bundu, mohl bys nastydnout.",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb sieben.",
    "lv": "Je půl sedmé.",
    "level": "Sätze"
  },
  {
    "de": "Meine Uhr geht fünf Minuten vor.",
    "lv": "Moje hodinky jdou o pět minut napřed.",
    "level": "Sätze"
  },
  {
    "de": "Weck mich morgen früh um sieben Uhr!",
    "lv": "Vzbuď mě zítra v sedm hodin!",
    "level": "Sätze"
  },
  {
    "de": "Was ist heute für ein Datum?",
    "lv": "Jaké je dnes datum?",
    "level": "Sätze"
  },
  {
    "de": "Heute ist der elfte Juli.",
    "lv": "Dnes je jedenáctého července.",
    "level": "Sätze"
  },
  {
    "de": "Was machst du gewöhnlich am Abend?",
    "lv": "Co obvykle děláš po večerech?",
    "level": "Sätze"
  },
  {
    "de": "Es ist schon lange her, dass wir uns gesehen haben.",
    "lv": "Dlouho jsme se neviděli.",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es dir?",
    "lv": "Jak se máš?",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, ich möchte etwas mit dir besprechen.",
    "lv": "Promiň, chci s tebou něco probrat.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir spazieren!",
    "lv": "Pojďme se projít!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Lust, mit mir in den Park zu gehen?",
    "lv": "Chceš jít se mnou do parku?",
    "level": "Sätze"
  },
  {
    "de": "Ich komme, um dich zum Spaziergang abzuholen.",
    "lv": "Jdu tě vyzvednout na procházku.",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte etwas langsamer, ich kann dir nicht folgen!",
    "lv": "Jdi trochu pomaleji, nestíhám s tebou!",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zum ersten Mal in dieser Gegend.",
    "lv": "Jsem v této oblasti poprvé.",
    "level": "Sätze"
  },
  {
    "de": "Ruhen wir uns ein wenig aus.",
    "lv": "Pojďme si trochu odpočinout.",
    "level": "Sätze"
  },
  {
    "de": "Jetzt können wir zurückgehen.",
    "lv": "Teď se můžeme vrátit.",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt bin ich ziemlich müde.",
    "lv": "Upřímně, jsem docela unavený.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, wo ist die nächste U-Bahn-Station?",
    "lv": "Promiň, kde je nejbližší stanice metra?",
    "level": "Sätze"
  },
  {
    "de": "Welcher ist der kürzeste Weg?",
    "lv": "Jaká je nejkratší cesta?",
    "level": "Sätze"
  },
  {
    "de": "Geh hier die zweite Straße links und dann immer geradeaus.",
    "lv": "Tady odboč druhou ulicí doleva a pak jdi pořád rovně.",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich am schnellsten zum Bahnhof?",
    "lv": "Jak se nejrychleji dostanu na nádraží?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe vor, morgen zu verreisen.",
    "lv": "Mám v úmyslu zítra odjet.",
    "level": "Sätze"
  },
  {
    "de": "Wohin willst du fahren?",
    "lv": "Kam chceš jet?",
    "level": "Sätze"
  },
  {
    "de": "Reist du geschäftlich oder privat?",
    "lv": "Cestuješ služebně, nebo soukromě?",
    "level": "Sätze"
  },
  {
    "de": "Finn fährt bis Berlin mit, dann geht er ans Meer.",
    "lv": "Finn jede do Berlína, pak pojede k moři.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt das Schiff ab?",
    "lv": "Kdy loď odplouvá?",
    "level": "Sätze"
  },
  {
    "de": "In einer halben Stunde.",
    "lv": "Za půl hodiny.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich noch eine Kabine bekommen?",
    "lv": "Mohu ještě dostat kajutu?",
    "level": "Sätze"
  },
  {
    "de": "Vergiss deinen Pass nicht!",
    "lv": "Nezapomeň si pas!",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, den Koffer zu packen.",
    "lv": "Je čas sbalit si kufr.",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt um halb sieben ab.",
    "lv": "Vlak odjíždí v půl sedmé.",
    "level": "Sätze"
  },
  {
    "de": "Hol mir bitte ein Taxi, ich verpasse sonst den Zug!",
    "lv": "Zavolej mi prosím taxi, jinak zmeškám vlak!",
    "level": "Sätze"
  },
  {
    "de": "Fahr bitte zum Bahnhof!",
    "lv": "Jeď prosím na nádraží!",
    "level": "Sätze"
  },
  {
    "de": "Ich muss mich beeilen.",
    "lv": "Musím si pospíšit.",
    "level": "Sätze"
  },
  {
    "de": "Ist der Schalter schon offen?",
    "lv": "Už je otevřená pokladna?",
    "level": "Sätze"
  },
  {
    "de": "Eine Fahrkarte nach Köln, bitte.",
    "lv": "Jeden lístek do Kolína, prosím.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt der Zug ab?",
    "lv": "Kdy jede vlak?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt gleich ab.",
    "lv": "Vlak brzy odjíždí.",
    "level": "Sätze"
  },
  {
    "de": "Muss ich in Koblenz umsteigen?",
    "lv": "Musím v Koblenzi přestoupit?",
    "level": "Sätze"
  },
  {
    "de": "Ja, dort musst du umsteigen.",
    "lv": "Ano, tam musíš přestoupit.",
    "level": "Sätze"
  },
  {
    "de": "Ist dieser Platz frei?",
    "lv": "Je toto místo k dispozici?",
    "level": "Sätze"
  },
  {
    "de": "Nein, hier sitzt niemand.",
    "lv": "Ne, nikdo tu nesedí.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der Bahnsteigkartenautomat?",
    "lv": "Kde je automat na jízdenky na nástupiště?",
    "level": "Sätze"
  },
  {
    "de": "Stell mein Handgepäck ins Gepäcknetz.",
    "lv": "Dej moje příruční zavazadlo do sítě na zavazadla.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das Fenster aufmachen?",
    "lv": "Smím otevřít okno?",
    "level": "Sätze"
  },
  {
    "de": "Es zieht, schließ bitte das Fenster!",
    "lv": "Táhne, prosím, zavři okno!",
    "level": "Sätze"
  },
  {
    "de": "Welche ist die nächste Station?",
    "lv": "Jaká je další zastávka?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange hält der Zug?",
    "lv": "Jak dlouho vlak stojí?",
    "level": "Sätze"
  },
  {
    "de": "Wo muss ich umsteigen?",
    "lv": "Kde musím přestoupit?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug hat Verspätung.",
    "lv": "Vlak má zpoždění.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Wagen ist für Nichtraucher.",
    "lv": "Tento vůz je pro nekuřáky.",
    "level": "Sätze"
  },
  {
    "de": "Wir fahren jetzt über die Grenze.",
    "lv": "Teď jedeme přes hranice.",
    "level": "Sätze"
  },
  {
    "de": "Hast du etwas zu verzollen?",
    "lv": "Máš něco k proclení?",
    "level": "Sätze"
  },
  {
    "de": "Wir sind in Berlin angekommen.",
    "lv": "Dorazili jsme do Berlína.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir ein gutes Hotel empfehlen?",
    "lv": "Můžeš mi doporučit dobrý hotel?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie freie Zimmer?",
    "lv": "Máte volné pokoje?",
    "level": "Sätze"
  },
  {
    "de": "Ein Zimmer mit zwei Betten, bitte.",
    "lv": "Pokoj se dvěma lůžky, prosím.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Zimmer pro Nacht?",
    "lv": "Kolik stojí pokoj za noc?",
    "level": "Sätze"
  },
  {
    "de": "Morgen reise ich ab. Weck mich um sieben Uhr!",
    "lv": "Zítra odjíždím. Vzbuď mě v sedm!",
    "level": "Sätze"
  },
  {
    "de": "Die Rechnung, bitte!",
    "lv": "Účet, prosím!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Stadtbibliothek?",
    "lv": "Kde je městská knihovna?",
    "level": "Sätze"
  },
  {
    "de": "Wann hat das Museum geöffnet?",
    "lv": "Kdy je muzeum otevřeno?",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir ins Museum gehen?",
    "lv": "Půjdeme do muzea?",
    "level": "Sätze"
  },
  {
    "de": "Fahren wir mit dem Bus oder der U-Bahn?",
    "lv": "Jedeme autobusem nebo metrem?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die nächste Bushaltestelle?",
    "lv": "Kde je nejbližší autobusová zastávka?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe großen Hunger.",
    "lv": "Mám velký hlad.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir zusammen essen?",
    "lv": "Půjdeme spolu jíst?",
    "level": "Sätze"
  },
  {
    "de": "Kellner, die Speisekarte, bitte!",
    "lv": "Číšníku, jídelní lístek, prosím!",
    "level": "Sätze"
  },
  {
    "de": "Ist der Fisch frisch?",
    "lv": "Je ryba čerstvá?",
    "level": "Sätze"
  },
  {
    "de": "Das schmeckt ausgezeichnet!",
    "lv": "Chutná skvěle!",
    "level": "Sätze"
  },
  {
    "de": "Kellner, zahlen bitte!",
    "lv": "Číšníku, zaplatíme, prosím!",
    "level": "Sätze"
  },
  {
    "de": "Ich gehe ins Café einen Kaffee trinken.",
    "lv": "Jdu do kavárny na kávu.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mitkommen?",
    "lv": "Chceš se přidat?",
    "level": "Sätze"
  },
  {
    "de": "Eine Tasse Kaffee mit Milch, bitte!",
    "lv": "Šálek kávy s mlékem, prosím!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneller, ich habe es eilig!",
    "lv": "Rychleji prosím, musím si pospíšit!",
    "level": "Sätze"
  },
  {
    "de": "Lass deinen Kaffee nicht kalt werden!",
    "lv": "Nenech svou kávu vychladnout!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie etwas Erfrischendes?",
    "lv": "Máte něco osvěžujícího?",
    "level": "Sätze"
  },
  {
    "de": "Eine Portion Eis, bitte!",
    "lv": "Porce zmrzliny, prosím!",
    "level": "Sätze"
  },
  {
    "de": "Heute Morgen habe ich einen Brief bekommen.",
    "lv": "Dnes ráno jsem dostal dopis.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss ihm gleich schreiben.",
    "lv": "Teď mu musím napsat.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der nächste Briefkasten?",
    "lv": "Kde je nejbližší poštovní schránka?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Post?",
    "lv": "Kde je pošta?",
    "level": "Sätze"
  },
  {
    "de": "Erinnere mich morgen daran zu schreiben!",
    "lv": "Připomeň mi, abych zítra napsal!",
    "level": "Sätze"
  },
  {
    "de": "Werfen Sie bitte diesen Brief in den Briefkasten.",
    "lv": "Vhoďte prosím tento dopis do poštovní schránky!",
    "level": "Sätze"
  },
  {
    "de": "Hallo, hier spricht Emma.",
    "lv": "Ahoj, tady Emma.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich dich später anrufen?",
    "lv": "Můžu ti zavolat později?",
    "level": "Sätze"
  },
  {
    "de": "Muss ich lange warten?",
    "lv": "Musím dlouho čekat?",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneiden Sie mir die Haare.",
    "lv": "Prosím, ostříhejte mi vlasy.",
    "level": "Sätze"
  },
  {
    "de": "Hinten bitte nicht zu kurz.",
    "lv": "Vzadu, prosím, ne příliš krátké.",
    "level": "Sätze"
  },
  {
    "de": "Wann beginnt die Vorstellung?",
    "lv": "Kdy představení začíná?",
    "level": "Sätze"
  },
  {
    "de": "Es fängt um halb acht an.",
    "lv": "Začíná v půl osmé.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind ausverkauft.",
    "lv": "Všechna místa jsou vyprodaná.",
    "level": "Sätze"
  },
  {
    "de": "Drei Karten, bitte!",
    "lv": "Tři lístky, prosím!",
    "level": "Sätze"
  },
  {
    "de": "Wir lassen die Jacken in der Garderobe.",
    "lv": "Bundy necháme v šatně.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schnell, der Vorhang geht gleich auf!",
    "lv": "Rychle, prosím, opona se brzy zvedne!",
    "level": "Sätze"
  },
  {
    "de": "Der Vorhang fällt.",
    "lv": "Opona padá.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dich zum Tanz bitten?",
    "lv": "Mohu tě požádat o tanec?",
    "level": "Sätze"
  },
  {
    "de": "Wann ist eure Hochzeit?",
    "lv": "Kdy máte svatbu?",
    "level": "Sätze"
  },
  {
    "de": "Ich suche eine Wohnung.",
    "lv": "Hledám byt.",
    "level": "Sätze"
  },
  {
    "de": "Ist in diesem Haus eine Wohnung frei?",
    "lv": "Je v tomto domě volný byt?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet die Miete?",
    "lv": "Kolik stojí nájem?",
    "level": "Sätze"
  },
  {
    "de": "Die Wohnung hat drei Zimmer und eine Küche.",
    "lv": "Byt má tři pokoje a kuchyň.",
    "level": "Sätze"
  },
  {
    "de": "Heute ziehen wir um.",
    "lv": "Dnes se stěhujeme.",
    "level": "Sätze"
  },
  {
    "de": "Mia, pack die Sachen bitte in Kisten!",
    "lv": "Mio, dej věci do krabic, prosím!",
    "level": "Sätze"
  },
  {
    "de": "Hast du alles eingepackt?",
    "lv": "Už je vše zabalené?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe mit meinem Freund in Kontakt.",
    "lv": "Jsem v kontaktu se svým přítelem.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir ins Theater?",
    "lv": "Půjdeme do divadla?",
    "level": "Sätze"
  },
  {
    "de": "Ist alles eingeladen?",
    "lv": "Je všechno naložené?",
    "level": "Sätze"
  },
  {
    "de": "Welch schöne Aussicht!",
    "lv": "Jaký krásný výhled!",
    "level": "Sätze"
  },
  {
    "de": "Nun können wir alles wieder aufräumen.",
    "lv": "Nyní můžeme všechno znovu uklidit.",
    "level": "Sätze"
  },
  {
    "de": "Wie viele Zimmer habt ihr?",
    "lv": "Kolik pokojů máte?",
    "level": "Sätze"
  },
  {
    "de": "Im Sommer fahre ich ans Meer.",
    "lv": "V létě pojedu k moři.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du schwimmen?",
    "lv": "Umíš plavat?",
    "level": "Sätze"
  },
  {
    "de": "Schwimm nicht zu weit hinaus!",
    "lv": "Neplav příliš daleko!",
    "level": "Sätze"
  },
  {
    "de": "Badest du jeden Tag?",
    "lv": "Koupeš se každý den?",
    "level": "Sätze"
  },
  {
    "de": "Bei schönem Wetter gehe ich angeln.",
    "lv": "Pokud je dobré počasí, chodím na ryby.",
    "level": "Sätze"
  },
  {
    "de": "Wie sieht er aus?",
    "lv": "Jak vypadá?",
    "level": "Sätze"
  },
  {
    "de": "Er hat sich aber recht verändert.",
    "lv": "Dost se však změnil.",
    "level": "Sätze"
  },
  {
    "de": "Wie ist er als Mensch?",
    "lv": "Jaký je jako člověk?",
    "level": "Sätze"
  },
  {
    "de": "Er ist immer nett und freundlich.",
    "lv": "Je vždy milý a přátelský.",
    "level": "Sätze"
  },
  {
    "de": "Ich fühle mich nicht wohl.",
    "lv": "Cítím se špatně.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe starke Kopfschmerzen.",
    "lv": "Velmi mě bolí hlava.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe mich erkältet.",
    "lv": "Jsem nachlazený.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Schnupfen.",
    "lv": "Teče mi z nosu.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist schwindlig.",
    "lv": "Točí se mi hlava.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Arzt gehen.",
    "lv": "Musím k doktorovi.",
    "level": "Sätze"
  },
  {
    "de": "Leg dich ins Bett!",
    "lv": "Lehni si do postele!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Fieber?",
    "lv": "Máš horečku?",
    "level": "Sätze"
  },
  {
    "de": "Gestern hatte ich erhöhte Temperatur.",
    "lv": "Včera jsem měl zvýšenou teplotu.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Zahnschmerzen.",
    "lv": "Bolí mě zub.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Zahnarzt gehen.",
    "lv": "Musím k zubaři.",
    "level": "Sätze"
  },
  {
    "de": "Weißt du, dass Finn krank ist?",
    "lv": "Víš, že je Finn nemocný?",
    "level": "Sätze"
  },
  {
    "de": "Laut Arzt wird er bald wieder gesund.",
    "lv": "Podle lékaře bude brzy zase v pořádku.",
    "level": "Sätze"
  },
  {
    "de": "Ich will meine Wohnung neu möblieren.",
    "lv": "Chci znovu zařídit byt.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das auf Raten kaufen?",
    "lv": "Mohu to koupit na splátky?",
    "level": "Sätze"
  },
  {
    "de": "Bleib im Bett, bis es dir besser geht!",
    "lv": "Zůstaň v posteli, dokud se nebudeš cítit lépe!",
    "level": "Sätze"
  },
  {
    "de": "Noah hat in zwei Wochen schwimmen gelernt.",
    "lv": "Noah se naučil plavat za dva týdny.",
    "level": "Sätze"
  },
  {
    "de": "Sei mit dem Essen noch vorsichtig.",
    "lv": "Buď ještě opatrný s jídlem.",
    "level": "Sätze"
  },
  {
    "de": "Sprichst du Deutsch?",
    "lv": "Mluvíš německy?",
    "level": "Sätze"
  },
  {
    "de": "Ja, ein bisschen.",
    "lv": "Ano, trochu.",
    "level": "Sätze"
  },
  {
    "de": "Du sprichst ziemlich fließend.",
    "lv": "Mluvíš docela plynule.",
    "level": "Sätze"
  },
  {
    "de": "Wo hast du Deutsch gelernt?",
    "lv": "Kde ses naučil německy?",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme seit einem Jahr Deutschstunden.",
    "lv": "Už rok chodím na hodiny němčiny.",
    "level": "Sätze"
  },
  {
    "de": "Ich suche immer Gelegenheit, Deutsch zu sprechen.",
    "lv": "Vždy hledám příležitost mluvit německy.",
    "level": "Sätze"
  },
  {
    "de": "Ist das Buch noch vorrätig?",
    "lv": "Je tato kniha ještě k dispozici?",
    "level": "Sätze"
  },
  {
    "de": "Das Buch ist leider ausverkauft.",
    "lv": "Kniha je bohužel vyprodaná.",
    "level": "Sätze"
  },
  {
    "de": "Wann erscheint die neue Auflage?",
    "lv": "Kdy vyjde nové vydání?",
    "level": "Sätze"
  },
  {
    "de": "Womit kann ich Ihnen helfen?",
    "lv": "Jak mohu pomoci?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie ganz frische Eier?",
    "lv": "Máte opravdu čerstvá vejce?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die?",
    "lv": "Kolik stojí?",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu teuer.",
    "lv": "Je to příliš drahé.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir ein halbes Kilo abwiegen?",
    "lv": "Můžete mi odvážit půl kila?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel muss ich zahlen?",
    "lv": "Kolik musím zaplatit?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet das Kilo?",
    "lv": "Kolik stojí kilogram?",
    "level": "Sätze"
  },
  {
    "de": "Wiegen Sie mir bitte zwei Kilo ab.",
    "lv": "Navažte prosím dva kilogramy.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch Karotten?",
    "lv": "Máte taky mrkev?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie gutes Rindfleisch?",
    "lv": "Máte dobré hovězí?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir zwei Kilo Hackfleisch.",
    "lv": "Dejte mi dva kilogramy mletého masa.",
    "level": "Sätze"
  },
  {
    "de": "Ein Laib Brot, bitte, aber nicht zu knusprig.",
    "lv": "Jeden bochník chleba, prosím, ale ne příliš křupavý.",
    "level": "Sätze"
  },
  {
    "de": "Das Brot ist frisch gebacken.",
    "lv": "Chléb je čerstvě upečený.",
    "level": "Sätze"
  },
  {
    "de": "Was für Obst haben Sie heute?",
    "lv": "Jaké ovoce máte dnes?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die Äpfel?",
    "lv": "Kolik stojí jablka?",
    "level": "Sätze"
  },
  {
    "de": "Dann nehme ich zwei Kilo Äpfel.",
    "lv": "Pak si vezmu dva kilogramy jablek.",
    "level": "Sätze"
  },
  {
    "de": "Die Birnen sind sehr teuer.",
    "lv": "Hrušky jsou velmi drahé.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir alles nach Hause liefern?",
    "lv": "Můžete vše doručit až domů?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie Reis?",
    "lv": "Máte rýži?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir bitte ein Kilo Reis.",
    "lv": "Dejte mi kilogram rýže, prosím.",
    "level": "Sätze"
  },
  {
    "de": "Danke, diesmal nicht.",
    "lv": "Díky, tentokrát ne.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet dieser Teppich?",
    "lv": "Kolik stojí tento koberec?",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Möbel in meine Wohnung liefern?",
    "lv": "Můžete mi doručit nábytek do mého bytu?",
    "level": "Sätze"
  },
  {
    "de": "Bitte an der Kasse zahlen.",
    "lv": "Plaťte prosím na pokladně.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, machen Sie die Rechnung.",
    "lv": "Prosím o vystavení faktury.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Meter?",
    "lv": "Kolik stojí metr?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Stoff gefällt mir.",
    "lv": "Tato látka se mi líbí.",
    "level": "Sätze"
  },
  {
    "de": "Schneiden Sie mir bitte drei Meter ab.",
    "lv": "Prosím, odstřihněte mi tři metry.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch andere Muster?",
    "lv": "Máte také jiné vzory?",
    "level": "Sätze"
  },
  {
    "de": "Diese Farbe gefällt mir nicht.",
    "lv": "Tato barva se mi nelíbí.",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir eine hellere.",
    "lv": "Dejte mi světlejší.",
    "level": "Sätze"
  },
  {
    "de": "Was kosten diese Socken?",
    "lv": "Kolik stojí tyto ponožky?",
    "level": "Sätze"
  },
  {
    "de": "Welche Handschuhe wünschen Sie?",
    "lv": "Jaké rukavice si přejete?",
    "level": "Sätze"
  },
  {
    "de": "Die sind mir etwas zu eng.",
    "lv": "Jsou mi trochu těsné.",
    "level": "Sätze"
  },
  {
    "de": "So, nun passen sie gut.",
    "lv": "Tak, teď dobře sedí.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir einen guten Schneider empfehlen?",
    "lv": "Můžeš mi doporučit dobrého krejčího?",
    "level": "Sätze"
  },
  {
    "de": "Ich will einen Anzug bestellen.",
    "lv": "Chci si objednat oblek.",
    "level": "Sätze"
  },
  {
    "de": "Wann wird er fertig sein?",
    "lv": "Kdy bude hotový?",
    "level": "Sätze"
  },
  {
    "de": "Der Anzug sitzt gut.",
    "lv": "Oblek dobře sedí.",
    "level": "Sätze"
  },
  {
    "de": "Die Hose ist zu lang.",
    "lv": "Kalhoty jsou příliš dlouhé.",
    "level": "Sätze"
  },
  {
    "de": "Bitte reinigen und bügeln Sie ihn!",
    "lv": "Prosím, vyčistěte ho a vyžehlete ho!",
    "level": "Sätze"
  },
  {
    "de": "Wann wird das Kleid fertig sein?",
    "lv": "Kdy budou šaty hotové?",
    "level": "Sätze"
  },
  {
    "de": "Die Schuhe sind zu eng.",
    "lv": "Boty jsou příliš těsné.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Schuhe heute reparieren?",
    "lv": "Můžete mi dnes opravit boty?",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich die Schuhe abholen?",
    "lv": "Kdy si mohu vyzvednout boty?",
    "level": "Sätze"
  },
  {
    "de": "Meine Armbanduhr funktioniert nicht.",
    "lv": "Moje náramkové hodinky nefungují.",
    "level": "Sätze"
  },
  {
    "de": "Sie geht fünf Minuten vor.",
    "lv": "Jdou pět minut napřed.",
    "level": "Sätze"
  },
  {
    "de": "Bist du kurzsichtig oder weitsichtig?",
    "lv": "Jsi krátkozraký nebo dalekozraký?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte eine Brille kaufen.",
    "lv": "Chci si koupit brýle.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie meine Brille reparieren?",
    "lv": "Můžete mi opravit brýle?",
    "level": "Sätze"
  },
  {
    "de": "Das dauert nur eine Viertelstunde.",
    "lv": "Zabere to jen patnáct minut.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist mir zu hoch.",
    "lv": "Cena je pro mě příliš vysoká.",
    "level": "Sätze"
  },
  {
    "de": "Ich brauche zwei Fotos für meinen Pass.",
    "lv": "Potřebuji dvě pasové fotografie.",
    "level": "Sätze"
  },
  {
    "de": "Bitte packen Sie es ein und schicken Sie es mir nach Hause.",
    "lv": "Prosím, zabalte to a pošlete mi to domů.",
    "level": "Sätze"
  },
  {
    "de": "Wir haben feste Preise.",
    "lv": "Máme pevné ceny.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, fotografieren Sie mich.",
    "lv": "Prosím, vyfoťte mě.",
    "level": "Sätze"
  },
  {
    "de": "Setzen Sie sich, schauen Sie gerade in die Kamera und bewegen Sie sich nicht!",
    "lv": "Sedněte si, dívejte se přímo do kamery a nehýbejte se!",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich das Probebild sehen?",
    "lv": "Kdy mohu vidět zkušební fotografii?",
    "level": "Sätze"
  },
  {
    "de": "Wann sind die Fotos fertig?",
    "lv": "Kdy budou fotografie hotové?",
    "level": "Sätze"
  },
  {
    "de": "Die Aufnahme ist gelungen.",
    "lv": "Fotka se povedla.",
    "level": "Sätze"
  },
  {
    "de": "Die Fotos sind gut geworden.",
    "lv": "Fotky dopadly dobře.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie das Foto auch vergrößern?",
    "lv": "Můžete také zvětšit fotografii?",
    "level": "Sätze"
  },
  {
    "de": "Sind diese Steine echt?",
    "lv": "Jsou tyto kameny pravé?",
    "level": "Sätze"
  },
  {
    "de": "Ist das echtes Gold?",
    "lv": "Je to skutečné zlato?",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir bitte Trauringe.",
    "lv": "Ukažte mi prosím snubní prsteny.",
    "level": "Sätze"
  },
  {
    "de": "Der Ring ist mir etwas zu weit.",
    "lv": "Prsten je na mě trochu moc velký.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann ihn enger machen.",
    "lv": "Můžu ho zúžit.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Ring passt mir.",
    "lv": "Tento prsten mi vyhovuje.",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir schöne Geschenkideen.",
    "lv": "Ukažte nápady na krásné dárky.",
    "level": "Sätze"
  },
  {
    "de": "Wie gefallen dir diese Ohrringe?",
    "lv": "Jak se ti líbí tyto náušnice?",
    "level": "Sätze"
  },
  {
    "de": "Diese Brosche ist wirklich schön.",
    "lv": "Tato brož je moc krásná.",
    "level": "Sätze"
  },
  {
    "de": "Der Stein ist ein Saphir.",
    "lv": "Tento kámen je safír.",
    "level": "Sätze"
  },
  {
    "de": "Das ist kein echter Stein, das ist Glas.",
    "lv": "Toto není skutečný kámen, je to sklo.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Armband kann ich Ihnen besonders empfehlen.",
    "lv": "Tento náramek mohu především doporučit.",
    "level": "Sätze"
  },
  {
    "de": "Es ist besonders schön gearbeitet.",
    "lv": "Je mimořádně jemně zpracovaný.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist nicht hoch.",
    "lv": "Cena není vysoká.",
    "level": "Sätze"
  },
  {
    "de": "Bekomme ich die Schachtel gratis?",
    "lv": "Dostanu krabičku zdarma?",
    "level": "Sätze"
  },
  {
    "de": "Alle Schmuckstücke sind gestempelt.",
    "lv": "Všechny šperky jsou označené puncem.",
    "level": "Sätze"
  },
  {
    "de": "Falls es meiner Frau nicht gefällt, kann ich es umtauschen?",
    "lv": "Pokud se mé ženě nebude líbit, mohu to vyměnit?",
    "level": "Sätze"
  },
  {
    "de": "Natürlich, jederzeit.",
    "lv": "Kdykoli, samozřejmě.",
    "level": "Sätze"
  }
];

window.SENTENCE_ENTRIES = SENTENCE_ENTRIES;

const SENTENCE_ENTRIES = [
  {
    "de": "Hüte dich davor!",
    "lv": "Daj si na to pozor!",
    "level": "Sätze"
  },
  {
    "de": "Wenn nichts dazwischenkommt.",
    "lv": "Ak nič nepríde do cesty. • Ak všetko pôjde podľa plánu.",
    "level": "Sätze"
  },
  {
    "de": "Das kann ich mir denken!",
    "lv": "To si viem predstaviť!",
    "level": "Sätze"
  },
  {
    "de": "Ist er denn krank?",
    "lv": "Je azda chorý?",
    "level": "Sätze"
  },
  {
    "de": "Was denn?",
    "lv": "Čo také?",
    "level": "Sätze"
  },
  {
    "de": "Desto mehr.",
    "lv": "O to viac.",
    "level": "Sätze"
  },
  {
    "de": "Je mehr, desto besser.",
    "lv": "Čím viac, tým lepšie.",
    "level": "Sätze"
  },
  {
    "de": "Alles deutet auf Regen.",
    "lv": "Všetko nasvedčuje tomu, že bude pršať.",
    "level": "Sätze"
  },
  {
    "de": "Damit ist mir wenig gedient.",
    "lv": "To mi veľmi nepomôže.",
    "level": "Sätze"
  },
  {
    "de": "Er ist dienstlich verhindert.",
    "lv": "Nemôže prísť pre pracovné povinnosti.",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie doch!",
    "lv": "Tak hovorte!",
    "level": "Sätze"
  },
  {
    "de": "Es donnert.",
    "lv": "Hrmí.",
    "level": "Sätze"
  },
  {
    "de": "Doppelt so groß.",
    "lv": "Dvakrát taký veľký.",
    "level": "Sätze"
  },
  {
    "de": "Von dort.",
    "lv": "Odtiaľ.",
    "level": "Sätze"
  },
  {
    "de": "Die Zeit drängt.",
    "lv": "Čas sa kráti.",
    "level": "Sätze"
  },
  {
    "de": "Ihn drücken Sorgen.",
    "lv": "Trápia ho starosti.",
    "level": "Sätze"
  },
  {
    "de": "Hast du das Buch durchgearbeitet?",
    "lv": "Preštudoval si tú knihu?",
    "level": "Sätze"
  },
  {
    "de": "Kein Durchgang!",
    "lv": "Zákaz prechodu!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich Sie bitten?",
    "lv": "Smiem prosiť? • Môžem vás poprosiť?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin durstig.",
    "lv": "Mám smäd.",
    "level": "Sätze"
  },
  {
    "de": "Eben das meine ich.",
    "lv": "Práve to mám na mysli.",
    "level": "Sätze"
  },
  {
    "de": "Es ist ganz egal.",
    "lv": "Je to úplne jedno.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie eigentlich?",
    "lv": "Čo vlastne chcete?",
    "level": "Sätze"
  },
  {
    "de": "Eilt es mit dieser Sache?",
    "lv": "Je táto vec súrna?",
    "level": "Sätze"
  },
  {
    "de": "Eilt sehr!",
    "lv": "Veľmi súrne!",
    "level": "Sätze"
  },
  {
    "de": "Ich habe es eilig.",
    "lv": "Ponáhľam sa.",
    "level": "Sätze"
  },
  {
    "de": "Du bildest dir nur ein, krank zu sein.",
    "lv": "Len si namýšľaš, že si chorý.",
    "level": "Sätze"
  },
  {
    "de": "Was fällt dir ein?",
    "lv": "Čo si to dovoľuješ? • Čo ti napadá?",
    "level": "Sätze"
  },
  {
    "de": "Es war einmal.",
    "lv": "Kde bolo, tam bolo.",
    "level": "Sätze"
  },
  {
    "de": "Steigen Sie bitte ein!",
    "lv": "Nastúpte si, prosím!",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie ein!",
    "lv": "Poďte ďalej!",
    "level": "Sätze"
  },
  {
    "de": "Einzelnes hat mir dort gefallen.",
    "lv": "Niektoré veci sa mi tam páčili.",
    "level": "Sätze"
  },
  {
    "de": "Es empfiehlt sich.",
    "lv": "Odporúča sa.",
    "level": "Sätze"
  },
  {
    "de": "Diese Flasche enthält Essig.",
    "lv": "Táto fľaša obsahuje ocot.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldigen Sie bitte!",
    "lv": "Prepáčte, prosím!",
    "level": "Sätze"
  },
  {
    "de": "Entweder... oder...",
    "lv": "Buď... alebo...",
    "level": "Sätze"
  },
  {
    "de": "Wer war der Erste?",
    "lv": "Kto bol prvý?",
    "level": "Sätze"
  },
  {
    "de": "Wer fehlt heute?",
    "lv": "Kto dnes chýba?",
    "level": "Sätze"
  },
  {
    "de": "Was fehlt dir?",
    "lv": "Čo ti je?",
    "level": "Sätze"
  },
  {
    "de": "Wie heißen Sie?",
    "lv": "Ako sa voláte?",
    "level": "Sätze"
  },
  {
    "de": "Was soll das heißen?",
    "lv": "Čo to má znamenať?",
    "level": "Sätze"
  },
  {
    "de": "Bitte treten Sie näher heran!",
    "lv": "Prosím, poďte bližšie!",
    "level": "Sätze"
  },
  {
    "de": "Heraus mit der Sprache!",
    "lv": "Von s farbou!",
    "level": "Sätze"
  },
  {
    "de": "im Herbst",
    "lv": "na jeseň",
    "level": "Sätze"
  },
  {
    "de": "Meine Herrschaften!",
    "lv": "Dámy a páni!",
    "level": "Sätze"
  },
  {
    "de": "von heute an",
    "lv": "počnúc dneškom",
    "level": "Sätze"
  },
  {
    "de": "heute früh",
    "lv": "dnes ráno",
    "level": "Sätze"
  },
  {
    "de": "heute Nacht",
    "lv": "dnes v noci",
    "level": "Sätze"
  },
  {
    "de": "Zu Hilfe!",
    "lv": "Pomoc!",
    "level": "Sätze"
  },
  {
    "de": "Ich lerne jeden Tag Deutsch.",
    "lv": "Každý deň sa učím nemčinu.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das bitte wiederholen?",
    "lv": "Môžeš to, prosím, zopakovať?",
    "level": "Sätze"
  },
  {
    "de": "Wir treffen uns am Bahnhof.",
    "lv": "Stretneme sa na stanici.",
    "level": "Sätze"
  },
  {
    "de": "Ich stimme dir teilweise zu.",
    "lv": "Čiastočne s tebou súhlasím.",
    "level": "Sätze"
  },
  {
    "de": "Diese Entscheidung hat weitreichende Folgen.",
    "lv": "Toto rozhodnutie má ďalekosiahle následky.",
    "level": "Sätze"
  },
  {
    "de": "Man sollte mehrere Perspektiven berücksichtigen.",
    "lv": "Malo by sa zohľadniť viacero hľadísk.",
    "level": "Sätze"
  },
  {
    "de": "Könnten Sie das näher erläutern?",
    "lv": "Mohli by ste to bližšie vysvetliť?",
    "level": "Sätze"
  },
  {
    "de": "Was mich anbelangt,...",
    "lv": "Čo sa mňa týka,...",
    "level": "Sätze"
  },
  {
    "de": "Wie alt sind Sie?",
    "lv": "Koľko máte rokov?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zwanzig Jahre alt.",
    "lv": "Mám dvadsať rokov.",
    "level": "Sätze"
  },
  {
    "de": "Von heute an.",
    "lv": "Odo dneška.",
    "level": "Sätze"
  },
  {
    "de": "Von jetzt an.",
    "lv": "Odteraz.",
    "level": "Sätze"
  },
  {
    "de": "Anders geht es nicht.",
    "lv": "Inak to nejde.",
    "level": "Sätze"
  },
  {
    "de": "Rufen Sie mich an.",
    "lv": "Zavolajte mi.",
    "level": "Sätze"
  },
  {
    "de": "Bitte stellen Sie das Radio ab.",
    "lv": "Prosím, vypnite rádio.",
    "level": "Sätze"
  },
  {
    "de": "Achte bitte auf den Verkehr.",
    "lv": "Daj, prosím, pozor na premávku.",
    "level": "Sätze"
  },
  {
    "de": "Darauf musst du achten.",
    "lv": "Na to si musíš dať pozor.",
    "level": "Sätze"
  },
  {
    "de": "Heute mache ich es anders.",
    "lv": "Dnes to urobím inak.",
    "level": "Sätze"
  },
  {
    "de": "Wir warten auf den Bus.",
    "lv": "Čakáme na autobus.",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt allein.",
    "lv": "Býva sám.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Ausbildung absolviert.",
    "lv": "Absolvoval som odbornú prípravu. • Ukončil som štúdium.",
    "level": "Sätze"
  },
  {
    "de": "Ich warte den Regen ab.",
    "lv": "Počkám, kým prestane pršať.",
    "level": "Sätze"
  },
  {
    "de": "Er arbeitet in der Verkaufsabteilung.",
    "lv": "Pracuje v oddelení predaja.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin allergisch gegen Katzen.",
    "lv": "Mám alergiu na mačky.",
    "level": "Sätze"
  },
  {
    "de": "Andererseits verstehe ich ihn.",
    "lv": "Na druhej strane ho chápem.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Situation analysiert.",
    "lv": "Analyzoval som situáciu.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat meinen Vorschlag akzeptiert.",
    "lv": "Prijala môj návrh.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte das genauer analysieren.",
    "lv": "Chcel by som to podrobnejšie analyzovať.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte den Vertrag ändern.",
    "lv": "Chcel by som zmeniť zmluvu.",
    "level": "Sätze"
  },
  {
    "de": "Er ändert ständig seine Meinung.",
    "lv": "Neustále mení názor.",
    "level": "Sätze"
  },
  {
    "de": "Ähnliche Probleme hatten wir schon früher.",
    "lv": "Podobné problémy sme mali už predtým.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ahnung!",
    "lv": "Nemám ani potuchy!",
    "level": "Sätze"
  },
  {
    "de": "Hör auf zu jammern.",
    "lv": "Prestaň sa sťažovať.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Kleid ist akademisch gekleidet.",
    "lv": "Tieto šaty sú štýlovo konzervatívne.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre gerne Akkordeonmusik.",
    "lv": "Rád počúvam akordeónovú hudbu.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das Gerät anklicken?",
    "lv": "Môžeš kliknúť na to zariadenie?",
    "level": "Sätze"
  },
  {
    "de": "Bitte öffne die Datei und klicke darauf.",
    "lv": "Otvor, prosím, súbor a klikni naň.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe einen Unfall gehabt.",
    "lv": "Mal som nehodu.",
    "level": "Sätze"
  },
  {
    "de": "Wir laufen zum Bahnhof.",
    "lv": "Ideme pešo na stanicu.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schalte den Fernseher an.",
    "lv": "Zapni, prosím, televízor.",
    "level": "Sätze"
  },
  {
    "de": "Mein Computer ist abgestürzt.",
    "lv": "Počítač mi zlyhal.",
    "level": "Sätze"
  },
  {
    "de": "Am Wochenende gehe ich angeln.",
    "lv": "Cez víkend idem na ryby.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe den Anruf verpasst.",
    "lv": "Zmeškal som hovor.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mich später anrufen?",
    "lv": "Môžeš mi zavolať neskôr?",
    "level": "Sätze"
  },
  {
    "de": "Bitte nimm meinen Vorschlag an.",
    "lv": "Prijmi, prosím, môj návrh.",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme dein Angebot an.",
    "lv": "Prijímam tvoju ponuku.",
    "level": "Sätze"
  },
  {
    "de": "Er nahm die Einladung an.",
    "lv": "Prijal pozvanie.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Angst vor Spinnen.",
    "lv": "Bojím sa pavúkov.",
    "level": "Sätze"
  },
  {
    "de": "Keine Angst, alles wird gut.",
    "lv": "Neboj sa, všetko bude dobré.",
    "level": "Sätze"
  },
  {
    "de": "Anklang finden.",
    "lv": "Nájsť ohlas. • Stretnúť sa s kladným prijatím.",
    "level": "Sätze"
  },
  {
    "de": "Es kommt darauf an.",
    "lv": "Záleží na okolnostiach.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Anlass.",
    "lv": "Pri tejto príležitosti.",
    "level": "Sätze"
  },
  {
    "de": "Nehmen wir an, dass...",
    "lv": "Predpokladajme, že...",
    "level": "Sätze"
  },
  {
    "de": "Was hast du da angerichtet?",
    "lv": "Čo si to tam vyviedol?",
    "level": "Sätze"
  },
  {
    "de": "Bis ans Ende.",
    "lv": "Až do konca.",
    "level": "Sätze"
  },
  {
    "de": "Du glaubst mir anscheinend nicht.",
    "lv": "Zdá sa, že mi neveríš.",
    "level": "Sätze"
  },
  {
    "de": "Meiner Ansicht nach...",
    "lv": "Podľa môjho názoru...",
    "level": "Sätze"
  },
  {
    "de": "Stell dich nicht so an!",
    "lv": "Nerob z toho vedu!",
    "level": "Sätze"
  },
  {
    "de": "An die Arbeit gehen.",
    "lv": "Pustiť sa do práce.",
    "level": "Sätze"
  },
  {
    "de": "Außer Atem sein.",
    "lv": "Byť bez dychu.",
    "level": "Sätze"
  },
  {
    "de": "Guten Appetit!",
    "lv": "Dobrú chuť!",
    "level": "Sätze"
  },
  {
    "de": "In einem Atemzug.",
    "lv": "Jedným dychom.",
    "level": "Sätze"
  },
  {
    "de": "Auf jeden Fall.",
    "lv": "V každom prípade.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal war alles still.",
    "lv": "Zrazu všetko stíchlo.",
    "level": "Sätze"
  },
  {
    "de": "Bitte mach die Tür auf!",
    "lv": "Prosím, otvor dvere!",
    "level": "Sätze"
  },
  {
    "de": "Er hat den Kredit aufgenommen.",
    "lv": "Zobral si úver.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen heute aufräumen.",
    "lv": "Dnes musíme upratať.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre jetzt auf.",
    "lv": "Teraz prestanem.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schon auf.",
    "lv": "Už je hore.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen das Treffen verschieben.",
    "lv": "Musíme presunúť stretnutie.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat mich aufgeregt.",
    "lv": "Rozčúlila ma.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal.",
    "lv": "Zrazu.",
    "level": "Sätze"
  },
  {
    "de": "Auf der Stelle.",
    "lv": "Okamžite.",
    "level": "Sätze"
  },
  {
    "de": "Für den Schaden aufkommen.",
    "lv": "Uhradiť škodu.",
    "level": "Sätze"
  },
  {
    "de": "Bitte die Tür auf!",
    "lv": "Otvorte, prosím, dvere!",
    "level": "Sätze"
  },
  {
    "de": "Aufrecht sitzen.",
    "lv": "Sedieť vzpriamene.",
    "level": "Sätze"
  },
  {
    "de": "Er ist auf.",
    "lv": "Je hore.",
    "level": "Sätze"
  },
  {
    "de": "Alle Kräfte aufwenden.",
    "lv": "Vynaložiť všetky sily.",
    "level": "Sätze"
  },
  {
    "de": "Viel Mühe aufwenden.",
    "lv": "Vynaložiť veľa úsilia.",
    "level": "Sätze"
  },
  {
    "de": "Geh mir aus den Augen!",
    "lv": "Zmizni mi z očí!",
    "level": "Sätze"
  },
  {
    "de": "Unter vier Augen.",
    "lv": "Medzi štyrmi očami.",
    "level": "Sätze"
  },
  {
    "de": "Aus Mangel an Zeit.",
    "lv": "Pre nedostatok času.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Grunde.",
    "lv": "Z tohto dôvodu.",
    "level": "Sätze"
  },
  {
    "de": "Alle außer dir.",
    "lv": "Všetci okrem teba.",
    "level": "Sätze"
  },
  {
    "de": "Auf Äußerlichkeiten Wert legen.",
    "lv": "Potrpieť si na vonkajšok.",
    "level": "Sätze"
  },
  {
    "de": "Im äußersten Fall.",
    "lv": "V najhoršom prípade.",
    "level": "Sätze"
  },
  {
    "de": "Äußerst wichtig.",
    "lv": "Nesmierne dôležitý.",
    "level": "Sätze"
  },
  {
    "de": "Aussicht auf die See.",
    "lv": "Výhľad na more.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gute Aussichten.",
    "lv": "Má dobré vyhliadky.",
    "level": "Sätze"
  },
  {
    "de": "Wie wird dieses Wort ausgesprochen?",
    "lv": "Ako sa vyslovuje toto slovo?",
    "level": "Sätze"
  },
  {
    "de": "Sein Beileid aussprechen.",
    "lv": "Vysloviť sústrasť.",
    "level": "Sätze"
  },
  {
    "de": "Wann wurden die Meisterschaftskämpfe ausgetragen?",
    "lv": "Kedy sa konali majstrovstvá?",
    "level": "Sätze"
  },
  {
    "de": "Welchen Beruf üben Sie aus?",
    "lv": "Aké povolanie vykonávate?",
    "level": "Sätze"
  },
  {
    "de": "Einfluss ausüben.",
    "lv": "Uplatňovať vplyv.",
    "level": "Sätze"
  },
  {
    "de": "Auswärts essen.",
    "lv": "Jesť mimo domu.",
    "level": "Sätze"
  },
  {
    "de": "Per Bahn.",
    "lv": "Železnicou.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Bahn.",
    "lv": "Vlakom.",
    "level": "Sätze"
  },
  {
    "de": "Möglichst bald.",
    "lv": "Čo najskôr.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist Angst und bange.",
    "lv": "Mám veľký strach.",
    "level": "Sätze"
  },
  {
    "de": "Auf die lange Bank schieben.",
    "lv": "Odkladať na neurčito. • Naťahovať čas.",
    "level": "Sätze"
  },
  {
    "de": "Bar zahlen.",
    "lv": "Platiť v hotovosti.",
    "level": "Sätze"
  },
  {
    "de": "Erz bauen.",
    "lv": "Ťažiť rudu.",
    "level": "Sätze"
  },
  {
    "de": "Mist bauen.",
    "lv": "Narobiť hlúposti.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin beauftragt.",
    "lv": "Som poverený.",
    "level": "Sätze"
  },
  {
    "de": "Nach Bedarf.",
    "lv": "Podľa potreby.",
    "level": "Sätze"
  },
  {
    "de": "Ich bedauere ihn.",
    "lv": "Ľutujem ho.",
    "level": "Sätze"
  },
  {
    "de": "Was bedeutet dieses Wort?",
    "lv": "Čo znamená toto slovo?",
    "level": "Sätze"
  },
  {
    "de": "Unter der Bedingung, dass...",
    "lv": "Pod podmienkou, že...",
    "level": "Sätze"
  },
  {
    "de": "Sie sieht bedrückt aus.",
    "lv": "Vyzerá skleslo.",
    "level": "Sätze"
  },
  {
    "de": "Hinweise befolgen.",
    "lv": "Riadiť sa pokynmi.",
    "level": "Sätze"
  },
  {
    "de": "Befehle befolgen.",
    "lv": "Plniť rozkazy.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Post befördern.",
    "lv": "Poslať poštou.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin begierig zu wissen.",
    "lv": "Veľmi by som to chcel vedieť.",
    "level": "Sätze"
  },
  {
    "de": "Zu Beginn.",
    "lv": "Na začiatku.",
    "level": "Sätze"
  },
  {
    "de": "Am Beginn.",
    "lv": "Na začiatku.",
    "level": "Sätze"
  },
  {
    "de": "Bei Beginn.",
    "lv": "Na začiatku.",
    "level": "Sätze"
  },
  {
    "de": "In Begleitung.",
    "lv": "V sprievode.",
    "level": "Sätze"
  },
  {
    "de": "Mit seiner Begleitung.",
    "lv": "So svojím sprievodom.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schwer von Begriff.",
    "lv": "Pomaly chápe. • Má dlhé vedenie.",
    "level": "Sätze"
  },
  {
    "de": "Im Gedächtnis behalten.",
    "lv": "Zapamätať si. • Uchovať si v pamäti.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tisch.",
    "lv": "Pri stole.",
    "level": "Sätze"
  },
  {
    "de": "Bei Sinnen sein.",
    "lv": "Byť pri zmysloch.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tage.",
    "lv": "Cez deň.",
    "level": "Sätze"
  },
  {
    "de": "Bei weitem nicht so.",
    "lv": "Zďaleka nie tak.",
    "level": "Sätze"
  },
  {
    "de": "Alle beide.",
    "lv": "Obidvaja.",
    "level": "Sätze"
  },
  {
    "de": "Stürmischer Beifall brach los.",
    "lv": "Strhol sa búrlivý potlesk.",
    "level": "Sätze"
  },
  {
    "de": "Beifall finden.",
    "lv": "Stretnúť sa so súhlasom.",
    "level": "Sätze"
  },
  {
    "de": "Beileid aussprechen.",
    "lv": "Vyjadriť sústrasť.",
    "level": "Sätze"
  },
  {
    "de": "Auf eigenen Beinen stehen.",
    "lv": "Stáť na vlastných nohách.",
    "level": "Sätze"
  },
  {
    "de": "Zum Beispiel.",
    "lv": "Napríklad.",
    "level": "Sätze"
  },
  {
    "de": "Beistand leisten.",
    "lv": "Pomôcť. • Poskytnúť pomoc.",
    "level": "Sätze"
  },
  {
    "de": "Beitrag leisten.",
    "lv": "Prispieť svojou troškou do mlyna.",
    "level": "Sätze"
  },
  {
    "de": "Jemandes Bekanntschaft machen.",
    "lv": "Zoznámiť sa s niekým.",
    "level": "Sätze"
  },
  {
    "de": "Bekanntschaft anknüpfen.",
    "lv": "Zoznámiť sa. • Nadviazať kontakt.",
    "level": "Sätze"
  },
  {
    "de": "Belegte Brötchen.",
    "lv": "Obložené žemle.",
    "level": "Sätze"
  },
  {
    "de": "Nach Ihrem Belieben.",
    "lv": "Ako si želáte.",
    "level": "Sätze"
  },
  {
    "de": "Zu jeder beliebigen Zeit.",
    "lv": "Kedykoľvek.",
    "level": "Sätze"
  },
  {
    "de": "Schweigen beobachten.",
    "lv": "Zachovávať mlčanie.",
    "level": "Sätze"
  },
  {
    "de": "Zur Bequemlichkeit.",
    "lv": "Pre pohodlie.",
    "level": "Sätze"
  },
  {
    "de": "Bereit sein.",
    "lv": "Byť pripravený. • Byť ochotný.",
    "level": "Sätze"
  },
  {
    "de": "Unfallopfer bergen.",
    "lv": "Zachraňovať obete nehody.",
    "level": "Sätze"
  },
  {
    "de": "Bericht erstatten.",
    "lv": "Referovať. • Podať správu.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind besetzt.",
    "lv": "Všetky miesta sú obsadené.",
    "level": "Sätze"
  },
  {
    "de": "Neue Besen kehren gut.",
    "lv": "Nová metla dobre zametá.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt ein Haus.",
    "lv": "Vlastní dom.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt viel Mut.",
    "lv": "Má veľa odvahy.",
    "level": "Sätze"
  },
  {
    "de": "Desto besser.",
    "lv": "Tým lepšie.",
    "level": "Sätze"
  },
  {
    "de": "Gute Besserung!",
    "lv": "Skoré uzdravenie!",
    "level": "Sätze"
  },
  {
    "de": "Beim besten Willen.",
    "lv": "Pri najlepšej vôli.",
    "level": "Sätze"
  },
  {
    "de": "Am besten.",
    "lv": "Najlepšie.",
    "level": "Sätze"
  },
  {
    "de": "Es besteht Zweifel.",
    "lv": "Existujú pochybnosti.",
    "level": "Sätze"
  },
  {
    "de": "Seine Aufgabe besteht darin...",
    "lv": "Jeho úlohou je...",
    "level": "Sätze"
  },
  {
    "de": "Grüße bestellen.",
    "lv": "Odovzdať pozdravy.",
    "level": "Sätze"
  },
  {
    "de": "Ganz bestimmt.",
    "lv": "Celkom určite.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch kommen.",
    "lv": "Prísť na návštevu.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch sein.",
    "lv": "Byť na návšteve.",
    "level": "Sätze"
  },
  {
    "de": "Oft Konzerte besuchen.",
    "lv": "Často chodiť na koncerty.",
    "level": "Sätze"
  },
  {
    "de": "Welche Schule hat er besucht?",
    "lv": "Do akej školy chodil?",
    "level": "Sätze"
  },
  {
    "de": "In Betracht ziehen.",
    "lv": "Vziať do úvahy. • Zvážiť.",
    "level": "Sätze"
  },
  {
    "de": "Außer Betracht lassen.",
    "lv": "Nebrať do úvahy.",
    "level": "Sätze"
  },
  {
    "de": "Er betreibt ein Hotel.",
    "lv": "Prevádzkuje hotel.",
    "level": "Sätze"
  },
  {
    "de": "Alle beiden.",
    "lv": "Obaja.",
    "level": "Sätze"
  },
  {
    "de": "Alles bezahlen.",
    "lv": "Zaplatiť všetko.",
    "level": "Sätze"
  },
  {
    "de": "Bezüglich auf etwas.",
    "lv": "Čo sa týka niečoho.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön.",
    "lv": "Prosím pekne.",
    "level": "Sätze"
  },
  {
    "de": "Wie bitte?",
    "lv": "Ako, prosím?",
    "level": "Sätze"
  },
  {
    "de": "Bitte sehr.",
    "lv": "Nech sa páči.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe eine Bitte an Sie.",
    "lv": "Mám k vám prosbu.",
    "level": "Sätze"
  },
  {
    "de": "Trompete blasen.",
    "lv": "Hrať na trúbke.",
    "level": "Sätze"
  },
  {
    "de": "In einem Buch blättern.",
    "lv": "Listovať v knihe.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßen Füßen.",
    "lv": "Bosými nohami.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßem Auge.",
    "lv": "Voľným okom.",
    "level": "Sätze"
  },
  {
    "de": "Danke für die Blumen!",
    "lv": "Ďakujem za kompliment!",
    "level": "Sätze"
  },
  {
    "de": "Alles in Butter.",
    "lv": "Všetko v poriadku.",
    "level": "Sätze"
  },
  {
    "de": "Bitte checken.",
    "lv": "Skontrolovať, prosím.",
    "level": "Sätze"
  },
  {
    "de": "Da ist er!",
    "lv": "Tu je!",
    "level": "Sätze"
  },
  {
    "de": "Alles spricht dafür.",
    "lv": "Všetko tomu nasvedčuje.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann nichts dafür.",
    "lv": "Ja za to nemôžem.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin dagegen.",
    "lv": "Som proti tomu.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe nichts dagegen.",
    "lv": "Nemám nič proti tomu.",
    "level": "Sätze"
  },
  {
    "de": "Von daheim.",
    "lv": "Z domu.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Dame ziehen.",
    "lv": "Ťahať dámou.",
    "level": "Sätze"
  },
  {
    "de": "Es dämmert.",
    "lv": "Stmieva sa. • Svitá.",
    "level": "Sätze"
  },
  {
    "de": "Danke schön!",
    "lv": "Ďakujem pekne!",
    "level": "Sätze"
  },
  {
    "de": "Dann und wann.",
    "lv": "Z času na čas.",
    "level": "Sätze"
  },
  {
    "de": "Darauf kannst du dich verlassen.",
    "lv": "Na to sa môžeš spoľahnúť.",
    "level": "Sätze"
  },
  {
    "de": "Daraus wird nichts.",
    "lv": "Z toho nič nebude.",
    "level": "Sätze"
  },
  {
    "de": "So dass...",
    "lv": "Takže...",
    "level": "Sätze"
  },
  {
    "de": "Für wen halten Sie mich?",
    "lv": "Za koho ma považujete?",
    "level": "Sätze"
  },
  {
    "de": "Hände weg!",
    "lv": "Ruky preč!",
    "level": "Sätze"
  },
  {
    "de": "Lass den Kopf nicht hängen!",
    "lv": "Nevešaj hlavu!",
    "level": "Sätze"
  },
  {
    "de": "zu Hause",
    "lv": "doma",
    "level": "Sätze"
  },
  {
    "de": "nach Hause gehen",
    "lv": "ísť domov",
    "level": "Sätze"
  },
  {
    "de": "von Haus aus",
    "lv": "pôvodom • od prírody",
    "level": "Sätze"
  },
  {
    "de": "Meinen herzlichsten Glückwunsch!",
    "lv": "Moje najsrdečnejšie blahoželanie!",
    "level": "Sätze"
  },
  {
    "de": "Seien Sie so gut!",
    "lv": "Buďte taký dobrý!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie die Güte!",
    "lv": "Buďte taký láskavý!",
    "level": "Sätze"
  },
  {
    "de": "Was hast du?",
    "lv": "Čo ti je?",
    "level": "Sätze"
  },
  {
    "de": "Gestatten Sie bitte!",
    "lv": "Dovoľte, prosím!",
    "level": "Sätze"
  },
  {
    "de": "Ist es gestattet zu rauchen?",
    "lv": "Je dovolené fajčiť?",
    "level": "Sätze"
  },
  {
    "de": "Ich muss gestehen, dass...",
    "lv": "Musím priznať, že...",
    "level": "Sätze"
  },
  {
    "de": "gestern früh",
    "lv": "včera ráno",
    "level": "Sätze"
  },
  {
    "de": "gestern Abend",
    "lv": "včera večer",
    "level": "Sätze"
  },
  {
    "de": "Es ist mir gleichgültig, ob...",
    "lv": "Je mi jedno, či...",
    "level": "Sätze"
  },
  {
    "de": "Was ist geschehen?",
    "lv": "Čo sa stalo?",
    "level": "Sätze"
  },
  {
    "de": "Mach keine Geschichten!",
    "lv": "Nerob hlúposti!",
    "level": "Sätze"
  },
  {
    "de": "Geschweige denn...",
    "lv": "Nieto ešte...",
    "level": "Sätze"
  },
  {
    "de": "Gehen Sie geradeaus!",
    "lv": "Choďte rovno!",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es Ihnen?",
    "lv": "Ako sa máte?",
    "level": "Sätze"
  },
  {
    "de": "Frag ihn gelegentlich, ob...",
    "lv": "Pri príležitosti sa ho opýtaj, či...",
    "level": "Sätze"
  },
  {
    "de": "morgen früh",
    "lv": "zajtra ráno",
    "level": "Sätze"
  },
  {
    "de": "im Frühling",
    "lv": "na jar",
    "level": "Sätze"
  },
  {
    "de": "Was gibt’s Neues?",
    "lv": "Čo je nové?",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Brief folgt, dass...",
    "lv": "Z tohto listu vyplýva, že...",
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
    "lv": "Ukázalo sa, že...",
    "level": "Sätze"
  },
  {
    "de": "Gedenkst du meiner?",
    "lv": "Spomínaš si na mňa? • Myslíš na mňa?",
    "level": "Sätze"
  },
  {
    "de": "im Winter",
    "lv": "v zime",
    "level": "Sätze"
  },
  {
    "de": "Welcher Jahrgang sind Sie?",
    "lv": "Aký ste ročník?",
    "level": "Sätze"
  },
  {
    "de": "Es jammert mich zu sehen...",
    "lv": "Je mi ľúto vidieť...",
    "level": "Sätze"
  },
  {
    "de": "je mehr, desto besser",
    "lv": "čím viac, tým lepšie",
    "level": "Sätze"
  },
  {
    "de": "bis jetzt",
    "lv": "doteraz",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich zum Bahnhof?",
    "lv": "Ako sa dostanem na stanicu?",
    "level": "Sätze"
  },
  {
    "de": "Komm her!",
    "lv": "Poď sem!",
    "level": "Sätze"
  },
  {
    "de": "Könnte ich Frau N. sprechen?",
    "lv": "Mohol by som hovoriť s pani N.?",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das?",
    "lv": "Koľko to stojí?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange dauert die Vorstellung?",
    "lv": "Ako dlho trvá predstavenie?",
    "level": "Sätze"
  },
  {
    "de": "Lass das!",
    "lv": "Prestaň! • Nechaj to!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich in Ruhe!",
    "lv": "Nechaj ma na pokoji!",
    "level": "Sätze"
  },
  {
    "de": "Lassen Sie mich Ihnen helfen!",
    "lv": "Dovoľte, aby som vám pomohol!",
    "level": "Sätze"
  },
  {
    "de": "Lasst uns gehen!",
    "lv": "Poďme!",
    "level": "Sätze"
  },
  {
    "de": "Na, wie läufts?",
    "lv": "Tak ako to ide?",
    "level": "Sätze"
  },
  {
    "de": "Es lebe!",
    "lv": "Nech žije!",
    "level": "Sätze"
  },
  {
    "de": "Leben Sie wohl!",
    "lv": "Zbohom!",
    "level": "Sätze"
  },
  {
    "de": "Was ist los?",
    "lv": "Čo sa deje?",
    "level": "Sätze"
  },
  {
    "de": "Der Job ist anstrengend.",
    "lv": "Tá práca je namáhavá.",
    "level": "Sätze"
  },
  {
    "de": "Das war ein anstrengender Tag.",
    "lv": "Bol to náročný deň.",
    "level": "Sätze"
  },
  {
    "de": "Deutsch lernen kann anstrengend sein.",
    "lv": "Učiť sa nemčinu môže byť namáhavé.",
    "level": "Sätze"
  },
  {
    "de": "Er verlangt eine Erklärung.",
    "lv": "Žiada vysvetlenie.",
    "level": "Sätze"
  },
  {
    "de": "Der Verkäufer verlangt zu viel Geld.",
    "lv": "Predavač pýta priveľa peňazí.",
    "level": "Sätze"
  },
  {
    "de": "Das Gesetz verlangt es so.",
    "lv": "Zákon to tak vyžaduje.",
    "level": "Sätze"
  },
  {
    "de": "Das ist gar nicht so schwer.",
    "lv": "Nie je to vôbec také ťažké.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe gar kein Geld.",
    "lv": "Nemám vôbec žiadne peniaze.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gar nichts gesagt.",
    "lv": "Nepovedal vôbec nič.",
    "level": "Sätze"
  },
  {
    "de": "Der Hund ist los.",
    "lv": "Pes je odviazaný.",
    "level": "Sätze"
  },
  {
    "de": "Hier ist viel los.",
    "lv": "Tu sa toho veľa deje.",
    "level": "Sätze"
  },
  {
    "de": "Halt die Luft an!",
    "lv": "Zmĺkni! • Nepreháňaj!",
    "level": "Sätze"
  },
  {
    "de": "Was machst du?",
    "lv": "Čo robíš?",
    "level": "Sätze"
  },
  {
    "de": "Sag mal!",
    "lv": "Tak povedz!",
    "level": "Sätze"
  },
  {
    "de": "Was meinen Sie damit?",
    "lv": "Čo tým myslíte?",
    "level": "Sätze"
  },
  {
    "de": "Wir gehen mit Ihnen.",
    "lv": "Ideme s vami.",
    "level": "Sätze"
  },
  {
    "de": "Ich fahre mit der Eisenbahn.",
    "lv": "Cestujem vlakom.",
    "level": "Sätze"
  },
  {
    "de": "am Mittwoch",
    "lv": "v stredu",
    "level": "Sätze"
  },
  {
    "de": "Es mag sein.",
    "lv": "Možno.",
    "level": "Sätze"
  },
  {
    "de": "Ich mag das nicht.",
    "lv": "Nepáči sa mi to.",
    "level": "Sätze"
  },
  {
    "de": "am Montag",
    "lv": "v pondelok",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen!",
    "lv": "Dobré ráno!",
    "level": "Sätze"
  },
  {
    "de": "am Morgen",
    "lv": "ráno",
    "level": "Sätze"
  },
  {
    "de": "Gute Nacht!",
    "lv": "Dobrú noc!",
    "level": "Sätze"
  },
  {
    "de": "Nehmen Sie Platz!",
    "lv": "Posaďte sa!",
    "level": "Sätze"
  },
  {
    "de": "Letzte Neuheit!",
    "lv": "Posledná novinka!",
    "level": "Sätze"
  },
  {
    "de": "Nicht wahr?",
    "lv": "Však?",
    "level": "Sätze"
  },
  {
    "de": "Nicht doch!",
    "lv": "Ale nie! • To nie!",
    "level": "Sätze"
  },
  {
    "de": "Nun endlich!",
    "lv": "No konečne!",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das?",
    "lv": "Načo je to dobré?",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das alles?",
    "lv": "Načo je to všetko?",
    "level": "Sätze"
  },
  {
    "de": "Parken verboten!",
    "lv": "Zákaz parkovania!",
    "level": "Sätze"
  },
  {
    "de": "Nicht parken!",
    "lv": "Neparkovať!",
    "level": "Sätze"
  },
  {
    "de": "Er hat Recht.",
    "lv": "Má pravdu.",
    "level": "Sätze"
  },
  {
    "de": "Wovon ist die Rede?",
    "lv": "O čom je reč?",
    "level": "Sätze"
  },
  {
    "de": "Davon kann keine Rede sein.",
    "lv": "O tom nemôže byť ani reči.",
    "level": "Sätze"
  },
  {
    "de": "Glückliche Reise!",
    "lv": "Šťastnú cestu!",
    "level": "Sätze"
  },
  {
    "de": "Mir reißt die Geduld.",
    "lv": "Dochádza mi trpezlivosť.",
    "level": "Sätze"
  },
  {
    "de": "Man sagt, dass...",
    "lv": "Hovorí sa, že...",
    "level": "Sätze"
  },
  {
    "de": "Schon gut!",
    "lv": "To je v poriadku!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön!",
    "lv": "Nech sa páči!",
    "level": "Sätze"
  },
  {
    "de": "Was bin ich schuldig?",
    "lv": "Koľko som dlžný? • Koľko platím?",
    "level": "Sätze"
  },
  {
    "de": "Vor dem Gebrauch schütteln!",
    "lv": "Pred použitím pretrepať!",
    "level": "Sätze"
  },
  {
    "de": "Sehen Sie mal!",
    "lv": "Pozrite sa!",
    "level": "Sätze"
  },
  {
    "de": "Wie sehr auch...",
    "lv": "Akokoľvek...",
    "level": "Sätze"
  },
  {
    "de": "Seit wann?",
    "lv": "Odkedy?",
    "level": "Sätze"
  },
  {
    "de": "Was soll ich tun?",
    "lv": "Čo mám robiť?",
    "level": "Sätze"
  },
  {
    "de": "im Sommer",
    "lv": "v lete",
    "level": "Sätze"
  },
  {
    "de": "Nicht nur..., sondern auch...",
    "lv": "Nielen..., ale aj...",
    "level": "Sätze"
  },
  {
    "de": "Sonst noch etwas?",
    "lv": "Ešte niečo?",
    "level": "Sätze"
  },
  {
    "de": "Spaß beiseite!",
    "lv": "Žarty bokom!",
    "level": "Sätze"
  },
  {
    "de": "Wie spät ist es?",
    "lv": "Koľko je hodín?",
    "level": "Sätze"
  },
  {
    "de": "Durchfahrt gesperrt!",
    "lv": "Prejazd zakázaný!",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie deutsch?",
    "lv": "Hovoríte po nemecky?",
    "level": "Sätze"
  },
  {
    "de": "Statt zu...",
    "lv": "Namiesto toho, aby...",
    "level": "Sätze"
  },
  {
    "de": "Wie steht’s?",
    "lv": "Ako sa darí?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Hut steht ihr gut.",
    "lv": "Tento klobúk jej pristane.",
    "level": "Sätze"
  },
  {
    "de": "Guten Tag!",
    "lv": "Dobrý deň!",
    "level": "Sätze"
  },
  {
    "de": "Wo treffen wir uns?",
    "lv": "Kde sa stretneme?",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie näher!",
    "lv": "Poďte bližšie!",
    "level": "Sätze"
  },
  {
    "de": "Ehrlichkeit ist eine Tugend.",
    "lv": "Čestnosť je cnosť.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe viel zu tun.",
    "lv": "Mám veľa práce.",
    "level": "Sätze"
  },
  {
    "de": "Nicht übel!",
    "lv": "Celkom dobré! • Nie je to zlé!",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt über mir.",
    "lv": "Býva nado mnou.",
    "level": "Sätze"
  },
  {
    "de": "Er ist davon überzeugt.",
    "lv": "Je o tom presvedčený.",
    "level": "Sätze"
  },
  {
    "de": "So ist es üblich.",
    "lv": "Tak je to zvykom.",
    "level": "Sätze"
  },
  {
    "de": "Deine Uhr geht nach.",
    "lv": "Tvoje hodinky meškajú.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel Uhr ist es?",
    "lv": "Koľko je hodín?",
    "level": "Sätze"
  },
  {
    "de": "Um acht Uhr früh.",
    "lv": "O ôsmej ráno.",
    "level": "Sätze"
  },
  {
    "de": "umso mehr",
    "lv": "o to viac",
    "level": "Sätze"
  },
  {
    "de": "Rechts um!",
    "lv": "Vpravo vbok!",
    "level": "Sätze"
  },
  {
    "de": "Und ob!",
    "lv": "A ešte ako!",
    "level": "Sätze"
  },
  {
    "de": "und zwar",
    "lv": "a to",
    "level": "Sätze"
  },
  {
    "de": "Auf Unkosten von...",
    "lv": "Na náklady... • Na úkor...",
    "level": "Sätze"
  },
  {
    "de": "Er saß unter den Zuschauern.",
    "lv": "Sedel medzi divákmi.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ursache!",
    "lv": "Nie je za čo!",
    "level": "Sätze"
  },
  {
    "de": "Es geschah, wie verabredet.",
    "lv": "Stalo sa tak, ako bolo dohodnuté.",
    "level": "Sätze"
  },
  {
    "de": "Rauchen verboten!",
    "lv": "Zákaz fajčenia!",
    "level": "Sätze"
  },
  {
    "de": "Falsch verbunden!",
    "lv": "Nesprávne číslo!",
    "level": "Sätze"
  },
  {
    "de": "Eintritt verboten!",
    "lv": "Zákaz vstupu!",
    "level": "Sätze"
  },
  {
    "de": "Verstehen Sie mich?",
    "lv": "Rozumiete mi?",
    "level": "Sätze"
  },
  {
    "de": "Er versteht nichts davon.",
    "lv": "Vôbec sa v tom nevyzná.",
    "level": "Sätze"
  },
  {
    "de": "Seine Ansicht vertreten.",
    "lv": "Obhajovať svoj názor.",
    "level": "Sätze"
  },
  {
    "de": "Streit verursachen.",
    "lv": "Vyvolať hádku.",
    "level": "Sätze"
  },
  {
    "de": "Viel besser.",
    "lv": "Oveľa lepšie.",
    "level": "Sätze"
  },
  {
    "de": "Zu viel.",
    "lv": "Príliš veľa.",
    "level": "Sätze"
  },
  {
    "de": "Vom Hörensagen.",
    "lv": "Z počutia.",
    "level": "Sätze"
  },
  {
    "de": "Von Zeit zu Zeit.",
    "lv": "Z času na čas.",
    "level": "Sätze"
  },
  {
    "de": "Von Beruf.",
    "lv": "Povolaním.",
    "level": "Sätze"
  },
  {
    "de": "Er ist Berliner von Geburt.",
    "lv": "Je rodený Berlínčan.",
    "level": "Sätze"
  },
  {
    "de": "Er steht vor dem Fenster.",
    "lv": "Stojí pred oknom.",
    "level": "Sätze"
  },
  {
    "de": "Vor Sonnenaufgang.",
    "lv": "Pred východom slnka.",
    "level": "Sätze"
  },
  {
    "de": "Vor vierzehn Tagen.",
    "lv": "Pred dvoma týždňami.",
    "level": "Sätze"
  },
  {
    "de": "Vor Freude.",
    "lv": "Od radosti.",
    "level": "Sätze"
  },
  {
    "de": "Vor allem.",
    "lv": "Predovšetkým. • V prvom rade.",
    "level": "Sätze"
  },
  {
    "de": "Im Voraus.",
    "lv": "Vopred.",
    "level": "Sätze"
  },
  {
    "de": "Unter der Voraussetzung, dass...",
    "lv": "Pod podmienkou, že...",
    "level": "Sätze"
  },
  {
    "de": "Unter dem Vorbehalt.",
    "lv": "S výhradou.",
    "level": "Sätze"
  },
  {
    "de": "Vorhanden sein.",
    "lv": "Byť k dispozícii. • Existovať.",
    "level": "Sätze"
  },
  {
    "de": "In der vorigen Woche.",
    "lv": "Minulý týždeň.",
    "level": "Sätze"
  },
  {
    "de": "Vorkehrungen treffen.",
    "lv": "Urobiť opatrenia.",
    "level": "Sätze"
  },
  {
    "de": "Sie kommt mir bekannt vor.",
    "lv": "Zdá sa mi povedomá.",
    "level": "Sätze"
  },
  {
    "de": "Er hat Vorliebe für Literatur.",
    "lv": "Má záľubu v literatúre.",
    "level": "Sätze"
  },
  {
    "de": "Heute Vormittag.",
    "lv": "Dnes ráno. • Dnes dopoludnia.",
    "level": "Sätze"
  },
  {
    "de": "Von vorn.",
    "lv": "Spredu. • Od začiatku.",
    "level": "Sätze"
  },
  {
    "de": "Nach vorn.",
    "lv": "Dopredu.",
    "level": "Sätze"
  },
  {
    "de": "Von vornherein.",
    "lv": "Od samého začiatku.",
    "level": "Sätze"
  },
  {
    "de": "Im Vorteil sein.",
    "lv": "Byť vo výhode.",
    "level": "Sätze"
  },
  {
    "de": "Wach sein.",
    "lv": "Byť hore.",
    "level": "Sätze"
  },
  {
    "de": "Wach werden.",
    "lv": "Zobudiť sa.",
    "level": "Sätze"
  },
  {
    "de": "Auf Wache sein.",
    "lv": "Byť na stráži.",
    "level": "Sätze"
  },
  {
    "de": "Während eines Jahres.",
    "lv": "V priebehu roka.",
    "level": "Sätze"
  },
  {
    "de": "Während des Krieges.",
    "lv": "Počas vojny.",
    "level": "Sätze"
  },
  {
    "de": "Gegen eine Wand reden.",
    "lv": "Hádzať hrach na stenu.",
    "level": "Sätze"
  },
  {
    "de": "Hier haben die Wände Ohren.",
    "lv": "Tu majú aj steny uši.",
    "level": "Sätze"
  },
  {
    "de": "Bis wann?",
    "lv": "Dokedy?",
    "level": "Sätze"
  },
  {
    "de": "Es ist warm.",
    "lv": "Je teplo.",
    "level": "Sätze"
  },
  {
    "de": "Auf eine Nachricht warten.",
    "lv": "Čakať na správu.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie?",
    "lv": "Čo chcete?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein...?",
    "lv": "Aký...? • Čo za...?",
    "level": "Sätze"
  },
  {
    "de": "Auf halbem Wege.",
    "lv": "Na polceste.",
    "level": "Sätze"
  },
  {
    "de": "Auf diesem Wege.",
    "lv": "Touto cestou. • Týmto spôsobom.",
    "level": "Sätze"
  },
  {
    "de": "Auf friedlichem Wege.",
    "lv": "Mierovou cestou.",
    "level": "Sätze"
  },
  {
    "de": "Unserer Freundschaft wegen.",
    "lv": "Kvôli nášmu priateľstvu.",
    "level": "Sätze"
  },
  {
    "de": "Von Rechts wegen.",
    "lv": "Podľa zákona. • Po práve.",
    "level": "Sätze"
  },
  {
    "de": "Weh tun.",
    "lv": "Bolieť.",
    "level": "Sätze"
  },
  {
    "de": "Zu Weihnachten.",
    "lv": "Na Vianoce.",
    "level": "Sätze"
  },
  {
    "de": "Auf welche Weise?",
    "lv": "Akým spôsobom?",
    "level": "Sätze"
  },
  {
    "de": "Art und Weise.",
    "lv": "Spôsob.",
    "level": "Sätze"
  },
  {
    "de": "Ohne weiteres.",
    "lv": "Bez okolkov. • Bez ťažkostí.",
    "level": "Sätze"
  },
  {
    "de": "Bis auf weiteres.",
    "lv": "Až do odvolania.",
    "level": "Sätze"
  },
  {
    "de": "Und so weiter.",
    "lv": "A tak ďalej.",
    "level": "Sätze"
  },
  {
    "de": "Weiter nichts.",
    "lv": "Nič viac.",
    "level": "Sätze"
  },
  {
    "de": "An welchem Tag?",
    "lv": "V ktorý deň?",
    "level": "Sätze"
  },
  {
    "de": "Alle Welt.",
    "lv": "Celý svet. • Všetci.",
    "level": "Sätze"
  },
  {
    "de": "In wenigen Tagen.",
    "lv": "O niekoľko dní.",
    "level": "Sätze"
  },
  {
    "de": "Zu wenig.",
    "lv": "Príliš málo.",
    "level": "Sätze"
  },
  {
    "de": "Wenn auch.",
    "lv": "Aj keď.",
    "level": "Sätze"
  },
  {
    "de": "Wer da?",
    "lv": "Kto tam?",
    "level": "Sätze"
  },
  {
    "de": "Gesammelte Werke von Schiller.",
    "lv": "Schillerove zobrané spisy.",
    "level": "Sätze"
  },
  {
    "de": "Ausgewählte Werke.",
    "lv": "Vybrané diela.",
    "level": "Sätze"
  },
  {
    "de": "Er ist wert, dass...",
    "lv": "Zaslúži si, aby...",
    "level": "Sätze"
  },
  {
    "de": "Es ist zwei Euro wert.",
    "lv": "Má to hodnotu dvoch eur.",
    "level": "Sätze"
  },
  {
    "de": "Nach Westen.",
    "lv": "Na západ.",
    "level": "Sätze"
  },
  {
    "de": "Von Westen.",
    "lv": "Zo západu.",
    "level": "Sätze"
  },
  {
    "de": "In Wettbewerb treten.",
    "lv": "Zapojiť sa do súťaže.",
    "level": "Sätze"
  },
  {
    "de": "Um die Wette laufen.",
    "lv": "Bežať o preteky.",
    "level": "Sätze"
  },
  {
    "de": "Was gilt die Wette?",
    "lv": "O čo sa stavíme?",
    "level": "Sätze"
  },
  {
    "de": "Wie wird das Wetter?",
    "lv": "Aké bude počasie?",
    "level": "Sätze"
  },
  {
    "de": "Wettkampf im Turnen.",
    "lv": "Súťaž v gymnastike.",
    "level": "Sätze"
  },
  {
    "de": "Wider meinen Willen.",
    "lv": "Proti mojej vôli.",
    "level": "Sätze"
  },
  {
    "de": "Widerspruch erheben.",
    "lv": "Protestovať. • Vzniesť námietku.",
    "level": "Sätze"
  },
  {
    "de": "Wie alt ist er?",
    "lv": "Koľko má rokov?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange?",
    "lv": "Ako dlho?",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiederhören!",
    "lv": "Dopočutia!",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiedersehen!",
    "lv": "Dovidenia!",
    "level": "Sätze"
  },
  {
    "de": "Wilde Tiere.",
    "lv": "Divé zvieratá.",
    "level": "Sätze"
  },
  {
    "de": "Herzlich willkommen!",
    "lv": "Srdečne vitajte!",
    "level": "Sätze"
  },
  {
    "de": "Du musst ziehen.",
    "lv": "Si na ťahu.",
    "level": "Sätze"
  },
  {
    "de": "Es zieht.",
    "lv": "Ťahá.",
    "level": "Sätze"
  },
  {
    "de": "Ziemlich kalt.",
    "lv": "Dosť chladno.",
    "level": "Sätze"
  },
  {
    "de": "Zipfel einer Wurst.",
    "lv": "Koniec klobásy.",
    "level": "Sätze"
  },
  {
    "de": "Zu ihm gehen.",
    "lv": "Ísť k nemu.",
    "level": "Sätze"
  },
  {
    "de": "Zur Schule gehen.",
    "lv": "Chodiť do školy.",
    "level": "Sätze"
  },
  {
    "de": "Zu Hause bleiben.",
    "lv": "Zostať doma.",
    "level": "Sätze"
  },
  {
    "de": "Von Tag zu Tag.",
    "lv": "Zo dňa na deň.",
    "level": "Sätze"
  },
  {
    "de": "Zum Glück.",
    "lv": "Našťastie.",
    "level": "Sätze"
  },
  {
    "de": "Wasser zum Trinken.",
    "lv": "Voda na pitie.",
    "level": "Sätze"
  },
  {
    "de": "Zu Fuß.",
    "lv": "Pešo.",
    "level": "Sätze"
  },
  {
    "de": "Zu Pferde.",
    "lv": "Na koni.",
    "level": "Sätze"
  },
  {
    "de": "Zu Rad.",
    "lv": "Na bicykli.",
    "level": "Sätze"
  },
  {
    "de": "Es hörte auf zu regnen.",
    "lv": "Prestalo pršať.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe noch viel zu tun.",
    "lv": "Mám ešte veľa práce.",
    "level": "Sätze"
  },
  {
    "de": "Zu früh.",
    "lv": "Príliš skoro.",
    "level": "Sätze"
  },
  {
    "de": "Zu groß.",
    "lv": "Príliš veľký.",
    "level": "Sätze"
  },
  {
    "de": "Mit den Achseln zucken.",
    "lv": "Pokrčiť plecami.",
    "level": "Sätze"
  },
  {
    "de": "In einem Zug trinken.",
    "lv": "Vypiť jedným dúškom.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde gehen.",
    "lv": "Zahynúť.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde legen.",
    "lv": "Klásť za základ. • Brať za základ.",
    "level": "Sätze"
  },
  {
    "de": "Zum ersten Mal.",
    "lv": "Prvýkrát.",
    "level": "Sätze"
  },
  {
    "de": "Machen Sie bitte die Tür zu!",
    "lv": "Zatvorte, prosím, dvere!",
    "level": "Sätze"
  },
  {
    "de": "Er hat zugenommen.",
    "lv": "Pribral.",
    "level": "Sätze"
  },
  {
    "de": "Die Tage nehmen zu.",
    "lv": "Dni sa predlžujú.",
    "level": "Sätze"
  },
  {
    "de": "Zusammenhängen mit etwas.",
    "lv": "Súvisieť s niečím.",
    "level": "Sätze"
  },
  {
    "de": "Die Tür ist zu.",
    "lv": "Dvere sú zatvorené.",
    "level": "Sätze"
  },
  {
    "de": "Das hätte ich ihm nicht zugetraut.",
    "lv": "To by som od neho nečakal.",
    "level": "Sätze"
  },
  {
    "de": "Freier Zutritt.",
    "lv": "Voľný vstup.",
    "level": "Sätze"
  },
  {
    "de": "Zutritt verboten!",
    "lv": "Zákaz vstupu!",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu viel!",
    "lv": "To je priveľa!",
    "level": "Sätze"
  },
  {
    "de": "Zuwider werden.",
    "lv": "Sprotiviť sa. • Zhnusiť sa.",
    "level": "Sätze"
  },
  {
    "de": "Und zwar.",
    "lv": "A to.",
    "level": "Sätze"
  },
  {
    "de": "Es steht außer Zweifel.",
    "lv": "Niet o tom pochýb.",
    "level": "Sätze"
  },
  {
    "de": "Ohne Zweifel.",
    "lv": "Bezpochyby.",
    "level": "Sätze"
  },
  {
    "de": "Zum Zweiten.",
    "lv": "Po druhé.",
    "level": "Sätze"
  },
  {
    "de": "Frohes neues Jahr!",
    "lv": "Šťastný nový rok!",
    "level": "Sätze"
  },
  {
    "de": "Herzlichen Glückwunsch zum Geburtstag!",
    "lv": "Všetko najlepšie k narodeninám!",
    "level": "Sätze"
  },
  {
    "de": "Gute Reise!",
    "lv": "Šťastnú cestu!",
    "level": "Sätze"
  },
  {
    "de": "Es freut mich, Sie kennenzulernen.",
    "lv": "Teší ma, že vás spoznávam.",
    "level": "Sätze"
  },
  {
    "de": "Wären Sie bitte so nett?",
    "lv": "Boli by ste, prosím, taký láskavý?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin Ihnen sehr dankbar.",
    "lv": "Som vám veľmi vďačný.",
    "level": "Sätze"
  },
  {
    "de": "Setzt euch bitte hin!",
    "lv": "Sadnite si, prosím!",
    "level": "Sätze"
  },
  {
    "de": "Ben, komm bitte an die Tafel!",
    "lv": "Ben, poď, prosím, k tabuli!",
    "level": "Sätze"
  },
  {
    "de": "Schlagt bitte die Lehrbücher auf!",
    "lv": "Otvorte si, prosím, učebnice!",
    "level": "Sätze"
  },
  {
    "de": "Geht bitte in die Sporthalle!",
    "lv": "Choďte, prosím, do telocvične!",
    "level": "Sätze"
  },
  {
    "de": "Schläfst du noch?",
    "lv": "Ešte spíš?",
    "level": "Sätze"
  },
  {
    "de": "Schlafen Sie noch?",
    "lv": "Ešte spíte?",
    "level": "Sätze"
  },
  {
    "de": "Er ist fest eingeschlafen.",
    "lv": "Tvrdo zaspal.",
    "level": "Sätze"
  },
  {
    "de": "Wecke ihn bitte auf, es ist schon spät!",
    "lv": "Zobuď ho, prosím, už je neskoro!",
    "level": "Sätze"
  },
  {
    "de": "Es tut mir sehr leid!",
    "lv": "Veľmi ma to mrzí!",
    "level": "Sätze"
  },
  {
    "de": "Vielen Dank!",
    "lv": "Veľká vďaka!",
    "level": "Sätze"
  },
  {
    "de": "Finn, fang bitte an!",
    "lv": "Finn, začni, prosím!",
    "level": "Sätze"
  },
  {
    "de": "Lest bitte mit!",
    "lv": "Čítajte, prosím, so mnou!",
    "level": "Sätze"
  },
  {
    "de": "Emma, schau bitte nicht aus dem Fenster!",
    "lv": "Emma, nepozeraj sa, prosím, z okna!",
    "level": "Sätze"
  },
  {
    "de": "Jonas, bring bitte die Hefte!",
    "lv": "Jonas, prines, prosím, zošity!",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte zurück an deinen Platz!",
    "lv": "Vráť sa, prosím, na svoje miesto!",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb acht.",
    "lv": "Je pol ôsmej.",
    "level": "Sätze"
  },
  {
    "de": "Wann wachst du gewöhnlich auf?",
    "lv": "Kedy sa zvyčajne zobúdzaš?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe gleich auf.",
    "lv": "Hneď vstanem.",
    "level": "Sätze"
  },
  {
    "de": "Steh auf, Hanna, es klingelt!",
    "lv": "Vstávaj, Hanna, zvoní!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich noch fünf Minuten schlafen!",
    "lv": "Nechaj ma ešte päť minút spať!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss nicht, das Zimmer zu lüften!",
    "lv": "Nezabudni vyvetrať izbu!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist das Handtuch?",
    "lv": "Kde je uterák?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mir die Zähne putzen.",
    "lv": "Chcel by som si umyť zuby.",
    "level": "Sätze"
  },
  {
    "de": "Mit was putzt du dir die Zähne?",
    "lv": "Čím si umývaš zuby?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mich anziehen.",
    "lv": "Chcel by som sa obliecť.",
    "level": "Sätze"
  },
  {
    "de": "Zieh dich bitte schnell an!",
    "lv": "Obleč sa, prosím, rýchlo!",
    "level": "Sätze"
  },
  {
    "de": "Kleide dich wärmer an, draußen ist es kühl.",
    "lv": "Obleč sa teplejšie, vonku je chladno.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, wie geht es dir?",
    "lv": "Dobré ráno, ako sa máš?",
    "level": "Sätze"
  },
  {
    "de": "Mir geht es gut, danke.",
    "lv": "Mám sa dobre, ďakujem.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es Neues?",
    "lv": "Čo je nové?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein Chaos hier!",
    "lv": "Aký je tu neporiadok!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich beim Aufräumen helfen?",
    "lv": "Môžem pomôcť pri upratovaní?",
    "level": "Sätze"
  },
  {
    "de": "Was trinkst du morgens, Kaffee oder Tee?",
    "lv": "Čo piješ ráno, kávu alebo čaj?",
    "level": "Sätze"
  },
  {
    "de": "Gewöhnlich trinke ich morgens eine Tasse Kaffee.",
    "lv": "Zvyčajne ráno vypijem šálku kávy.",
    "level": "Sätze"
  },
  {
    "de": "Am liebsten trinke ich schwarzen Kaffee.",
    "lv": "Najradšej pijem čiernu kávu.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, hast du gut geschlafen?",
    "lv": "Dobré ráno, vyspal si sa dobre?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin noch sehr müde.",
    "lv": "Som ešte stále veľmi unavený.",
    "level": "Sätze"
  },
  {
    "de": "Willst du Kaffee oder Milch?",
    "lv": "Chceš kávu alebo mlieko?",
    "level": "Sätze"
  },
  {
    "de": "Gib mir bitte ein Brötchen mit Käse.",
    "lv": "Daj mi, prosím, žemľu so syrom.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss jetzt los!",
    "lv": "Už musím ísť!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss dein Frühstück nicht!",
    "lv": "Nezabudni na raňajky!",
    "level": "Sätze"
  },
  {
    "de": "Klara, deck bitte den Tisch!",
    "lv": "Klara, prestri, prosím, stôl!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss die Servietten nicht!",
    "lv": "Nezabudni na servítky!",
    "level": "Sätze"
  },
  {
    "de": "Wann esst ihr zu Mittag?",
    "lv": "Kedy obedujete?",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit zu essen.",
    "lv": "Je čas jesť.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es heute zu Mittag?",
    "lv": "Čo je dnes na obed?",
    "level": "Sätze"
  },
  {
    "de": "Wie schmeckt dir die Suppe?",
    "lv": "Ako ti chutí polievka?",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt ist sie etwas zu salzig.",
    "lv": "Úprimne povedané, je trochu príliš slaná.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dir ein Stück Brot geben?",
    "lv": "Môžem ti dať kúsok chleba?",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich habe schon.",
    "lv": "Ďakujem, už mám.",
    "level": "Sätze"
  },
  {
    "de": "Das Fleisch schmeckt ausgezeichnet.",
    "lv": "Mäso chutí vynikajúco.",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich bin schon satt.",
    "lv": "Ďakujem, už som sýty.",
    "level": "Sätze"
  },
  {
    "de": "Heute haben wir Besuch.",
    "lv": "Dnes máme návštevu.",
    "level": "Sätze"
  },
  {
    "de": "Bist du heute Abend frei?",
    "lv": "Si dnes večer voľný?",
    "level": "Sätze"
  },
  {
    "de": "Komm doch heute zum Mittagessen vorbei!",
    "lv": "Tak sa dnes zastav na obed!",
    "level": "Sätze"
  },
  {
    "de": "Setzen wir uns an den Tisch.",
    "lv": "Sadnime si k stolu.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, bedien dich!",
    "lv": "Nech sa páči, poslúž si!",
    "level": "Sätze"
  },
  {
    "de": "Stört dich das Rauchen?",
    "lv": "Prekáža ti fajčenie?",
    "level": "Sätze"
  },
  {
    "de": "Danke für die nette Aufnahme!",
    "lv": "Ďakujem za milé prijatie!",
    "level": "Sätze"
  },
  {
    "de": "Wann gehst du ins Bett?",
    "lv": "Kedy chodíš spať?",
    "level": "Sätze"
  },
  {
    "de": "Wenn ich von der Arbeit komme, bin ich immer müde.",
    "lv": "Keď prídem z práce, som vždy unavený.",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, ins Bett zu gehen.",
    "lv": "Je čas ísť spať.",
    "level": "Sätze"
  },
  {
    "de": "Es ist schönes Wetter.",
    "lv": "Je pekné počasie.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mit mir spazieren gehen?",
    "lv": "Chceš sa so mnou ísť prejsť?",
    "level": "Sätze"
  },
  {
    "de": "Sieh mal, es wird gleich regnen.",
    "lv": "Pozri, o chvíľu bude pršať.",
    "level": "Sätze"
  },
  {
    "de": "Nimm den Regenschirm mit!",
    "lv": "Vezmi si so sebou dáždnik!",
    "level": "Sätze"
  },
  {
    "de": "Es regnet.",
    "lv": "Prší.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin schon ganz nass.",
    "lv": "Už som celý mokrý.",
    "level": "Sätze"
  },
  {
    "de": "Glaubst du, dass es den ganzen Tag regnen wird?",
    "lv": "Myslíš, že bude pršať celý deň?",
    "level": "Sätze"
  },
  {
    "de": "Es hört auf zu regnen.",
    "lv": "Prestáva pršať.",
    "level": "Sätze"
  },
  {
    "de": "Die Sonne scheint wieder.",
    "lv": "Znova svieti slnko.",
    "level": "Sätze"
  },
  {
    "de": "Es ist sehr warm.",
    "lv": "Je veľmi teplo.",
    "level": "Sätze"
  },
  {
    "de": "Es sieht nach Regen aus.",
    "lv": "Vyzerá to na dážď.",
    "level": "Sätze"
  },
  {
    "de": "Wir bekommen gleich ein Gewitter.",
    "lv": "O chvíľu príde búrka.",
    "level": "Sätze"
  },
  {
    "de": "Das Gewitter zieht vorüber.",
    "lv": "Búrka prechádza.",
    "level": "Sätze"
  },
  {
    "de": "Die Wolken verziehen sich.",
    "lv": "Mraky sa rozchádzajú.",
    "level": "Sätze"
  },
  {
    "de": "Siehst du den Regenbogen?",
    "lv": "Vidíš dúhu?",
    "level": "Sätze"
  },
  {
    "de": "Der Winter ist da, es hat geschneit.",
    "lv": "Prišla zima, napadol sneh.",
    "level": "Sätze"
  },
  {
    "de": "Es schneit.",
    "lv": "Sneží.",
    "level": "Sätze"
  },
  {
    "de": "Wie schön ist es im Wald im Winter!",
    "lv": "Aké je v zime v lese krásne!",
    "level": "Sätze"
  },
  {
    "de": "Mir ist kalt, ich friere.",
    "lv": "Je mi zima, mrznem.",
    "level": "Sätze"
  },
  {
    "de": "Draußen ist Glatteis, pass auf!",
    "lv": "Vonku je poľadovica, daj si pozor!",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir auf die Eisbahn gehen?",
    "lv": "Pôjdeme na klzisko?",
    "level": "Sätze"
  },
  {
    "de": "Zieh die Jacke an, du kannst dich erkälten.",
    "lv": "Obleč si bundu, môžeš prechladnúť.",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb sieben.",
    "lv": "Je pol siedmej.",
    "level": "Sätze"
  },
  {
    "de": "Meine Uhr geht fünf Minuten vor.",
    "lv": "Moje hodinky idú o päť minút dopredu.",
    "level": "Sätze"
  },
  {
    "de": "Weck mich morgen früh um sieben Uhr!",
    "lv": "Zobuď ma zajtra ráno o siedmej!",
    "level": "Sätze"
  },
  {
    "de": "Was ist heute für ein Datum?",
    "lv": "Aký je dnes dátum?",
    "level": "Sätze"
  },
  {
    "de": "Heute ist der elfte Juli.",
    "lv": "Dnes je jedenásteho júla.",
    "level": "Sätze"
  },
  {
    "de": "Was machst du gewöhnlich am Abend?",
    "lv": "Čo zvyčajne robíš večer?",
    "level": "Sätze"
  },
  {
    "de": "Es ist schon lange her, dass wir uns gesehen haben.",
    "lv": "Už je to dávno, čo sme sa naposledy videli.",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es dir?",
    "lv": "Ako sa máš?",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, ich möchte etwas mit dir besprechen.",
    "lv": "Prepáč, chcel by som sa s tebou o niečom porozprávať.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir spazieren!",
    "lv": "Poďme sa prejsť!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Lust, mit mir in den Park zu gehen?",
    "lv": "Máš chuť ísť so mnou do parku?",
    "level": "Sätze"
  },
  {
    "de": "Ich komme, um dich zum Spaziergang abzuholen.",
    "lv": "Prichádzam po teba, aby sme sa išli prejsť.",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte etwas langsamer, ich kann dir nicht folgen!",
    "lv": "Choď, prosím, trochu pomalšie, nestíham za tebou!",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zum ersten Mal in dieser Gegend.",
    "lv": "V tejto oblasti som prvý raz.",
    "level": "Sätze"
  },
  {
    "de": "Ruhen wir uns ein wenig aus.",
    "lv": "Trochu si oddýchnime.",
    "level": "Sätze"
  },
  {
    "de": "Jetzt können wir zurückgehen.",
    "lv": "Teraz sa môžeme vrátiť.",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt bin ich ziemlich müde.",
    "lv": "Úprimne povedané, som dosť unavený.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, wo ist die nächste U-Bahn-Station?",
    "lv": "Prepáč, kde je najbližšia stanica metra?",
    "level": "Sätze"
  },
  {
    "de": "Welcher ist der kürzeste Weg?",
    "lv": "Ktorá cesta je najkratšia?",
    "level": "Sätze"
  },
  {
    "de": "Geh hier die zweite Straße links und dann immer geradeaus.",
    "lv": "Choď tu druhou ulicou doľava a potom stále rovno.",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich am schnellsten zum Bahnhof?",
    "lv": "Ako sa najrýchlejšie dostanem na stanicu?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe vor, morgen zu verreisen.",
    "lv": "Mám v úmysle zajtra odcestovať.",
    "level": "Sätze"
  },
  {
    "de": "Wohin willst du fahren?",
    "lv": "Kam chceš cestovať?",
    "level": "Sätze"
  },
  {
    "de": "Reist du geschäftlich oder privat?",
    "lv": "Cestuješ služobne alebo súkromne?",
    "level": "Sätze"
  },
  {
    "de": "Finn fährt bis Berlin mit, dann geht er ans Meer.",
    "lv": "Finn ide s nami až do Berlína, potom pôjde k moru.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt das Schiff ab?",
    "lv": "Kedy loď vypláva?",
    "level": "Sätze"
  },
  {
    "de": "In einer halben Stunde.",
    "lv": "O pol hodiny.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich noch eine Kabine bekommen?",
    "lv": "Môžem ešte dostať kajutu?",
    "level": "Sätze"
  },
  {
    "de": "Vergiss deinen Pass nicht!",
    "lv": "Nezabudni si pas!",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, den Koffer zu packen.",
    "lv": "Je čas zbaliť kufor.",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt um halb sieben ab.",
    "lv": "Vlak odchádza o pol siedmej.",
    "level": "Sätze"
  },
  {
    "de": "Hol mir bitte ein Taxi, ich verpasse sonst den Zug!",
    "lv": "Zavolaj mi, prosím, taxík, inak zmeškám vlak!",
    "level": "Sätze"
  },
  {
    "de": "Fahr bitte zum Bahnhof!",
    "lv": "Zavez ma, prosím, na stanicu!",
    "level": "Sätze"
  },
  {
    "de": "Ich muss mich beeilen.",
    "lv": "Musím sa ponáhľať.",
    "level": "Sätze"
  },
  {
    "de": "Ist der Schalter schon offen?",
    "lv": "Je už pokladnica otvorená?",
    "level": "Sätze"
  },
  {
    "de": "Eine Fahrkarte nach Köln, bitte.",
    "lv": "Jeden lístok do Kolína nad Rýnom, prosím.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt der Zug ab?",
    "lv": "Kedy odchádza vlak?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt gleich ab.",
    "lv": "Vlak hneď odchádza.",
    "level": "Sätze"
  },
  {
    "de": "Muss ich in Koblenz umsteigen?",
    "lv": "Musím v Koblenzi prestúpiť?",
    "level": "Sätze"
  },
  {
    "de": "Ja, dort musst du umsteigen.",
    "lv": "Áno, tam musíš prestúpiť.",
    "level": "Sätze"
  },
  {
    "de": "Ist dieser Platz frei?",
    "lv": "Je toto miesto voľné?",
    "level": "Sätze"
  },
  {
    "de": "Nein, hier sitzt niemand.",
    "lv": "Nie, nikto tu nesedí.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der Bahnsteigkartenautomat?",
    "lv": "Kde je automat na perónne lístky?",
    "level": "Sätze"
  },
  {
    "de": "Stell mein Handgepäck ins Gepäcknetz.",
    "lv": "Polož moju príručnú batožinu do sieťky na batožinu.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das Fenster aufmachen?",
    "lv": "Môžem otvoriť okno?",
    "level": "Sätze"
  },
  {
    "de": "Es zieht, schließ bitte das Fenster!",
    "lv": "Je tu prievan, zatvor, prosím, okno!",
    "level": "Sätze"
  },
  {
    "de": "Welche ist die nächste Station?",
    "lv": "Ktorá je ďalšia stanica?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange hält der Zug?",
    "lv": "Ako dlho stojí vlak?",
    "level": "Sätze"
  },
  {
    "de": "Wo muss ich umsteigen?",
    "lv": "Kde musím prestúpiť?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug hat Verspätung.",
    "lv": "Vlak mešká.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Wagen ist für Nichtraucher.",
    "lv": "Tento vozeň je pre nefajčiarov.",
    "level": "Sätze"
  },
  {
    "de": "Wir fahren jetzt über die Grenze.",
    "lv": "Teraz prechádzame cez hranice.",
    "level": "Sätze"
  },
  {
    "de": "Hast du etwas zu verzollen?",
    "lv": "Máš niečo na preclenie?",
    "level": "Sätze"
  },
  {
    "de": "Wir sind in Berlin angekommen.",
    "lv": "Prišli sme do Berlína.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir ein gutes Hotel empfehlen?",
    "lv": "Môžeš mi odporučiť dobrý hotel?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie freie Zimmer?",
    "lv": "Máte voľné izby?",
    "level": "Sätze"
  },
  {
    "de": "Ein Zimmer mit zwei Betten, bitte.",
    "lv": "Izbu s dvoma posteľami, prosím.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Zimmer pro Nacht?",
    "lv": "Koľko stojí izba na noc?",
    "level": "Sätze"
  },
  {
    "de": "Morgen reise ich ab. Weck mich um sieben Uhr!",
    "lv": "Zajtra odchádzam. Zobuď ma o siedmej!",
    "level": "Sätze"
  },
  {
    "de": "Die Rechnung, bitte!",
    "lv": "Účet, prosím!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Stadtbibliothek?",
    "lv": "Kde je mestská knižnica?",
    "level": "Sätze"
  },
  {
    "de": "Wann hat das Museum geöffnet?",
    "lv": "Kedy je múzeum otvorené?",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir ins Museum gehen?",
    "lv": "Pôjdeme do múzea?",
    "level": "Sätze"
  },
  {
    "de": "Fahren wir mit dem Bus oder der U-Bahn?",
    "lv": "Pôjdeme autobusom alebo metrom?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die nächste Bushaltestelle?",
    "lv": "Kde je najbližšia autobusová zastávka?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe großen Hunger.",
    "lv": "Som veľmi hladný.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir zusammen essen?",
    "lv": "Pôjdeme sa spolu najesť?",
    "level": "Sätze"
  },
  {
    "de": "Kellner, die Speisekarte, bitte!",
    "lv": "Čašník, jedálny lístok, prosím!",
    "level": "Sätze"
  },
  {
    "de": "Ist der Fisch frisch?",
    "lv": "Je ryba čerstvá?",
    "level": "Sätze"
  },
  {
    "de": "Das schmeckt ausgezeichnet!",
    "lv": "To chutí výborne!",
    "level": "Sätze"
  },
  {
    "de": "Kellner, zahlen bitte!",
    "lv": "Čašník, platiť, prosím!",
    "level": "Sätze"
  },
  {
    "de": "Ich gehe ins Café einen Kaffee trinken.",
    "lv": "Idem do kaviarne na kávu.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mitkommen?",
    "lv": "Chceš ísť so mnou?",
    "level": "Sätze"
  },
  {
    "de": "Eine Tasse Kaffee mit Milch, bitte!",
    "lv": "Šálku kávy s mliekom, prosím!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneller, ich habe es eilig!",
    "lv": "Rýchlejšie, prosím, ponáhľam sa!",
    "level": "Sätze"
  },
  {
    "de": "Lass deinen Kaffee nicht kalt werden!",
    "lv": "Nenechaj si kávu vychladnúť!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie etwas Erfrischendes?",
    "lv": "Máte niečo osviežujúce?",
    "level": "Sätze"
  },
  {
    "de": "Eine Portion Eis, bitte!",
    "lv": "Jednu porciu zmrzliny, prosím!",
    "level": "Sätze"
  },
  {
    "de": "Heute Morgen habe ich einen Brief bekommen.",
    "lv": "Dnes ráno som dostal list.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss ihm gleich schreiben.",
    "lv": "Musím mu hneď napísať.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der nächste Briefkasten?",
    "lv": "Kde je najbližšia poštová schránka?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Post?",
    "lv": "Kde je pošta?",
    "level": "Sätze"
  },
  {
    "de": "Erinnere mich morgen daran zu schreiben!",
    "lv": "Pripomeň mi zajtra, aby som napísal!",
    "level": "Sätze"
  },
  {
    "de": "Werfen Sie bitte diesen Brief in den Briefkasten.",
    "lv": "Hoďte, prosím, tento list do poštovej schránky.",
    "level": "Sätze"
  },
  {
    "de": "Hallo, hier spricht Emma.",
    "lv": "Haló, tu je Emma.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich dich später anrufen?",
    "lv": "Môžem ti zavolať neskôr?",
    "level": "Sätze"
  },
  {
    "de": "Muss ich lange warten?",
    "lv": "Musím dlho čakať?",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneiden Sie mir die Haare.",
    "lv": "Ostrihajte ma, prosím.",
    "level": "Sätze"
  },
  {
    "de": "Hinten bitte nicht zu kurz.",
    "lv": "Vzadu, prosím, nie príliš nakrátko.",
    "level": "Sätze"
  },
  {
    "de": "Wann beginnt die Vorstellung?",
    "lv": "Kedy sa začína predstavenie?",
    "level": "Sätze"
  },
  {
    "de": "Es fängt um halb acht an.",
    "lv": "Začína sa o pol ôsmej.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind ausverkauft.",
    "lv": "Všetky miesta sú vypredané.",
    "level": "Sätze"
  },
  {
    "de": "Drei Karten, bitte!",
    "lv": "Tri lístky, prosím!",
    "level": "Sätze"
  },
  {
    "de": "Wir lassen die Jacken in der Garderobe.",
    "lv": "Bundy necháme v šatni.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schnell, der Vorhang geht gleich auf!",
    "lv": "Rýchlo, prosím, opona sa o chvíľu zdvihne!",
    "level": "Sätze"
  },
  {
    "de": "Der Vorhang fällt.",
    "lv": "Opona padá.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dich zum Tanz bitten?",
    "lv": "Smiem ťa poprosiť do tanca?",
    "level": "Sätze"
  },
  {
    "de": "Wann ist eure Hochzeit?",
    "lv": "Kedy máte svadbu?",
    "level": "Sätze"
  },
  {
    "de": "Ich suche eine Wohnung.",
    "lv": "Hľadám byt.",
    "level": "Sätze"
  },
  {
    "de": "Ist in diesem Haus eine Wohnung frei?",
    "lv": "Je v tomto dome voľný byt?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet die Miete?",
    "lv": "Koľko je nájomné?",
    "level": "Sätze"
  },
  {
    "de": "Die Wohnung hat drei Zimmer und eine Küche.",
    "lv": "Byt má tri izby a kuchyňu.",
    "level": "Sätze"
  },
  {
    "de": "Heute ziehen wir um.",
    "lv": "Dnes sa sťahujeme.",
    "level": "Sätze"
  },
  {
    "de": "Mia, pack die Sachen bitte in Kisten!",
    "lv": "Mia, zbaľ, prosím, veci do krabíc!",
    "level": "Sätze"
  },
  {
    "de": "Hast du alles eingepackt?",
    "lv": "Zbalil si všetko?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe mit meinem Freund in Kontakt.",
    "lv": "Som v kontakte so svojím priateľom.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir ins Theater?",
    "lv": "Pôjdeme do divadla?",
    "level": "Sätze"
  },
  {
    "de": "Ist alles eingeladen?",
    "lv": "Je všetko naložené?",
    "level": "Sätze"
  },
  {
    "de": "Welch schöne Aussicht!",
    "lv": "Aký krásny výhľad!",
    "level": "Sätze"
  },
  {
    "de": "Nun können wir alles wieder aufräumen.",
    "lv": "Teraz môžeme všetko zasa upratať.",
    "level": "Sätze"
  },
  {
    "de": "Wie viele Zimmer habt ihr?",
    "lv": "Koľko izieb máte?",
    "level": "Sätze"
  },
  {
    "de": "Im Sommer fahre ich ans Meer.",
    "lv": "V lete pôjdem k moru.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du schwimmen?",
    "lv": "Vieš plávať?",
    "level": "Sätze"
  },
  {
    "de": "Schwimm nicht zu weit hinaus!",
    "lv": "Neplávaj príliš ďaleko!",
    "level": "Sätze"
  },
  {
    "de": "Badest du jeden Tag?",
    "lv": "Kúpeš sa každý deň?",
    "level": "Sätze"
  },
  {
    "de": "Bei schönem Wetter gehe ich angeln.",
    "lv": "Keď je pekné počasie, chodím na ryby.",
    "level": "Sätze"
  },
  {
    "de": "Wie sieht er aus?",
    "lv": "Ako vyzerá?",
    "level": "Sätze"
  },
  {
    "de": "Er hat sich aber recht verändert.",
    "lv": "Ten sa ale poriadne zmenil.",
    "level": "Sätze"
  },
  {
    "de": "Wie ist er als Mensch?",
    "lv": "Aký je ako človek?",
    "level": "Sätze"
  },
  {
    "de": "Er ist immer nett und freundlich.",
    "lv": "Je vždy milý a priateľský.",
    "level": "Sätze"
  },
  {
    "de": "Ich fühle mich nicht wohl.",
    "lv": "Necítim sa dobre.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe starke Kopfschmerzen.",
    "lv": "Mám silné bolesti hlavy.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe mich erkältet.",
    "lv": "Prechladol som.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Schnupfen.",
    "lv": "Mám nádchu.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist schwindlig.",
    "lv": "Točí sa mi hlava.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Arzt gehen.",
    "lv": "Musím ísť k lekárovi.",
    "level": "Sätze"
  },
  {
    "de": "Leg dich ins Bett!",
    "lv": "Ľahni si do postele!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Fieber?",
    "lv": "Máš horúčku?",
    "level": "Sätze"
  },
  {
    "de": "Gestern hatte ich erhöhte Temperatur.",
    "lv": "Včera som mal zvýšenú teplotu.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Zahnschmerzen.",
    "lv": "Bolí ma zub.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Zahnarzt gehen.",
    "lv": "Musím ísť k zubárovi.",
    "level": "Sätze"
  },
  {
    "de": "Weißt du, dass Finn krank ist?",
    "lv": "Vieš, že Finn je chorý?",
    "level": "Sätze"
  },
  {
    "de": "Laut Arzt wird er bald wieder gesund.",
    "lv": "Podľa lekára sa čoskoro uzdraví.",
    "level": "Sätze"
  },
  {
    "de": "Ich will meine Wohnung neu möblieren.",
    "lv": "Chcem si nanovo zariadiť byt.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das auf Raten kaufen?",
    "lv": "Môžem si to kúpiť na splátky?",
    "level": "Sätze"
  },
  {
    "de": "Bleib im Bett, bis es dir besser geht!",
    "lv": "Zostaň v posteli, kým ti nebude lepšie!",
    "level": "Sätze"
  },
  {
    "de": "Noah hat in zwei Wochen schwimmen gelernt.",
    "lv": "Noah sa naučil plávať za dva týždne.",
    "level": "Sätze"
  },
  {
    "de": "Sei mit dem Essen noch vorsichtig.",
    "lv": "S jedlom buď ešte opatrný.",
    "level": "Sätze"
  },
  {
    "de": "Sprichst du Deutsch?",
    "lv": "Hovoríš po nemecky?",
    "level": "Sätze"
  },
  {
    "de": "Ja, ein bisschen.",
    "lv": "Áno, trochu.",
    "level": "Sätze"
  },
  {
    "de": "Du sprichst ziemlich fließend.",
    "lv": "Hovoríš dosť plynulo.",
    "level": "Sätze"
  },
  {
    "de": "Wo hast du Deutsch gelernt?",
    "lv": "Kde si sa naučil po nemecky?",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme seit einem Jahr Deutschstunden.",
    "lv": "Už rok chodím na hodiny nemčiny.",
    "level": "Sätze"
  },
  {
    "de": "Ich suche immer Gelegenheit, Deutsch zu sprechen.",
    "lv": "Stále hľadám príležitosť hovoriť po nemecky.",
    "level": "Sätze"
  },
  {
    "de": "Ist das Buch noch vorrätig?",
    "lv": "Je tá kniha ešte na sklade?",
    "level": "Sätze"
  },
  {
    "de": "Das Buch ist leider ausverkauft.",
    "lv": "Kniha je, žiaľ, vypredaná.",
    "level": "Sätze"
  },
  {
    "de": "Wann erscheint die neue Auflage?",
    "lv": "Kedy vyjde nové vydanie?",
    "level": "Sätze"
  },
  {
    "de": "Womit kann ich Ihnen helfen?",
    "lv": "S čím vám môžem pomôcť?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie ganz frische Eier?",
    "lv": "Máte úplne čerstvé vajcia?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die?",
    "lv": "Koľko stoja?",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu teuer.",
    "lv": "To je príliš drahé.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir ein halbes Kilo abwiegen?",
    "lv": "Môžete mi odvážiť pol kila?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel muss ich zahlen?",
    "lv": "Koľko musím zaplatiť?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet das Kilo?",
    "lv": "Koľko stojí kilo?",
    "level": "Sätze"
  },
  {
    "de": "Wiegen Sie mir bitte zwei Kilo ab.",
    "lv": "Odvážte mi, prosím, dve kilá.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch Karotten?",
    "lv": "Máte aj mrkvu?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie gutes Rindfleisch?",
    "lv": "Máte dobré hovädzie mäso?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir zwei Kilo Hackfleisch.",
    "lv": "Dajte mi dve kilá mletého mäsa.",
    "level": "Sätze"
  },
  {
    "de": "Ein Laib Brot, bitte, aber nicht zu knusprig.",
    "lv": "Jeden bochník chleba, prosím, ale nie príliš chrumkavý.",
    "level": "Sätze"
  },
  {
    "de": "Das Brot ist frisch gebacken.",
    "lv": "Chlieb je čerstvo upečený.",
    "level": "Sätze"
  },
  {
    "de": "Was für Obst haben Sie heute?",
    "lv": "Aké ovocie máte dnes?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die Äpfel?",
    "lv": "Koľko stoja jablká?",
    "level": "Sätze"
  },
  {
    "de": "Dann nehme ich zwei Kilo Äpfel.",
    "lv": "Tak si vezmem dve kilá jabĺk.",
    "level": "Sätze"
  },
  {
    "de": "Die Birnen sind sehr teuer.",
    "lv": "Hrušky sú veľmi drahé.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir alles nach Hause liefern?",
    "lv": "Môžete mi všetko doručiť domov?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie Reis?",
    "lv": "Máte ryžu?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir bitte ein Kilo Reis.",
    "lv": "Dajte mi, prosím, kilo ryže.",
    "level": "Sätze"
  },
  {
    "de": "Danke, diesmal nicht.",
    "lv": "Ďakujem, tentoraz nie.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet dieser Teppich?",
    "lv": "Koľko stojí tento koberec?",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Möbel in meine Wohnung liefern?",
    "lv": "Môžete mi doviezť nábytok do bytu?",
    "level": "Sätze"
  },
  {
    "de": "Bitte an der Kasse zahlen.",
    "lv": "Platiť pri pokladnici, prosím.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, machen Sie die Rechnung.",
    "lv": "Prosím, vystavte mi účet.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Meter?",
    "lv": "Koľko stojí meter?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Stoff gefällt mir.",
    "lv": "Táto látka sa mi páči.",
    "level": "Sätze"
  },
  {
    "de": "Schneiden Sie mir bitte drei Meter ab.",
    "lv": "Odstrihnite mi, prosím, tri metre.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch andere Muster?",
    "lv": "Máte aj iné vzory? • Máte aj iné vzorky?",
    "level": "Sätze"
  },
  {
    "de": "Diese Farbe gefällt mir nicht.",
    "lv": "Táto farba sa mi nepáči.",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir eine hellere.",
    "lv": "Dajte mi svetlejšiu.",
    "level": "Sätze"
  },
  {
    "de": "Was kosten diese Socken?",
    "lv": "Koľko stoja tieto ponožky?",
    "level": "Sätze"
  },
  {
    "de": "Welche Handschuhe wünschen Sie?",
    "lv": "Aké rukavice si želáte?",
    "level": "Sätze"
  },
  {
    "de": "Die sind mir etwas zu eng.",
    "lv": "Sú mi trochu tesné.",
    "level": "Sätze"
  },
  {
    "de": "So, nun passen sie gut.",
    "lv": "Tak, teraz dobre sedia.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir einen guten Schneider empfehlen?",
    "lv": "Môžeš mi odporučiť dobrého krajčíra?",
    "level": "Sätze"
  },
  {
    "de": "Ich will einen Anzug bestellen.",
    "lv": "Chcem si objednať oblek.",
    "level": "Sätze"
  },
  {
    "de": "Wann wird er fertig sein?",
    "lv": "Kedy bude hotový?",
    "level": "Sätze"
  },
  {
    "de": "Der Anzug sitzt gut.",
    "lv": "Oblek dobre sedí.",
    "level": "Sätze"
  },
  {
    "de": "Die Hose ist zu lang.",
    "lv": "Nohavice sú príliš dlhé.",
    "level": "Sätze"
  },
  {
    "de": "Bitte reinigen und bügeln Sie ihn!",
    "lv": "Prosím, vyčistite ho a vyžehlite!",
    "level": "Sätze"
  },
  {
    "de": "Wann wird das Kleid fertig sein?",
    "lv": "Kedy budú šaty hotové?",
    "level": "Sätze"
  },
  {
    "de": "Die Schuhe sind zu eng.",
    "lv": "Topánky sú príliš tesné.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Schuhe heute reparieren?",
    "lv": "Môžete mi dnes opraviť topánky?",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich die Schuhe abholen?",
    "lv": "Kedy si môžem vyzdvihnúť topánky?",
    "level": "Sätze"
  },
  {
    "de": "Meine Armbanduhr funktioniert nicht.",
    "lv": "Moje náramkové hodinky nejdú.",
    "level": "Sätze"
  },
  {
    "de": "Sie geht fünf Minuten vor.",
    "lv": "Idú o päť minút dopredu.",
    "level": "Sätze"
  },
  {
    "de": "Bist du kurzsichtig oder weitsichtig?",
    "lv": "Si krátkozraký alebo ďalekozraký?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte eine Brille kaufen.",
    "lv": "Chcel by som si kúpiť okuliare.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie meine Brille reparieren?",
    "lv": "Môžete mi opraviť okuliare?",
    "level": "Sätze"
  },
  {
    "de": "Das dauert nur eine Viertelstunde.",
    "lv": "Potrvá to len štvrťhodinu.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist mir zu hoch.",
    "lv": "Cena je pre mňa príliš vysoká.",
    "level": "Sätze"
  },
  {
    "de": "Ich brauche zwei Fotos für meinen Pass.",
    "lv": "Potrebujem dve fotografie do pasu.",
    "level": "Sätze"
  },
  {
    "de": "Bitte packen Sie es ein und schicken Sie es mir nach Hause.",
    "lv": "Prosím, zabaľte to a pošlite mi to domov.",
    "level": "Sätze"
  },
  {
    "de": "Wir haben feste Preise.",
    "lv": "Máme pevné ceny.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, fotografieren Sie mich.",
    "lv": "Prosím, odfotografujte ma.",
    "level": "Sätze"
  },
  {
    "de": "Setzen Sie sich, schauen Sie gerade in die Kamera und bewegen Sie sich nicht!",
    "lv": "Sadnite si, pozerajte sa rovno do objektívu a nehýbte sa!",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich das Probebild sehen?",
    "lv": "Kedy môžem vidieť skúšobnú fotografiu?",
    "level": "Sätze"
  },
  {
    "de": "Wann sind die Fotos fertig?",
    "lv": "Kedy budú fotografie hotové?",
    "level": "Sätze"
  },
  {
    "de": "Die Aufnahme ist gelungen.",
    "lv": "Snímka sa podarila.",
    "level": "Sätze"
  },
  {
    "de": "Die Fotos sind gut geworden.",
    "lv": "Fotografie dopadli dobre.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie das Foto auch vergrößern?",
    "lv": "Môžete tú fotografiu aj zväčšiť?",
    "level": "Sätze"
  },
  {
    "de": "Sind diese Steine echt?",
    "lv": "Sú tieto kamene pravé?",
    "level": "Sätze"
  },
  {
    "de": "Ist das echtes Gold?",
    "lv": "Je to pravé zlato?",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir bitte Trauringe.",
    "lv": "Ukážte mi, prosím, snubné prstene.",
    "level": "Sätze"
  },
  {
    "de": "Der Ring ist mir etwas zu weit.",
    "lv": "Prsteň je mi trochu voľný.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann ihn enger machen.",
    "lv": "Môžem ho zúžiť.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Ring passt mir.",
    "lv": "Tento prsteň mi padne.",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir schöne Geschenkideen.",
    "lv": "Ukážte mi pekné nápady na darčeky.",
    "level": "Sätze"
  },
  {
    "de": "Wie gefallen dir diese Ohrringe?",
    "lv": "Ako sa ti páčia tieto náušnice?",
    "level": "Sätze"
  },
  {
    "de": "Diese Brosche ist wirklich schön.",
    "lv": "Táto brošňa je naozaj pekná.",
    "level": "Sätze"
  },
  {
    "de": "Der Stein ist ein Saphir.",
    "lv": "Ten kameň je zafír.",
    "level": "Sätze"
  },
  {
    "de": "Das ist kein echter Stein, das ist Glas.",
    "lv": "To nie je pravý kameň, to je sklo.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Armband kann ich Ihnen besonders empfehlen.",
    "lv": "Tento náramok vám môžem obzvlášť odporučiť.",
    "level": "Sätze"
  },
  {
    "de": "Es ist besonders schön gearbeitet.",
    "lv": "Je obzvlášť pekne spracovaný.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist nicht hoch.",
    "lv": "Cena nie je vysoká.",
    "level": "Sätze"
  },
  {
    "de": "Bekomme ich die Schachtel gratis?",
    "lv": "Dostanem škatuľku zadarmo?",
    "level": "Sätze"
  },
  {
    "de": "Alle Schmuckstücke sind gestempelt.",
    "lv": "Všetky šperky sú opatrené puncom.",
    "level": "Sätze"
  },
  {
    "de": "Falls es meiner Frau nicht gefällt, kann ich es umtauschen?",
    "lv": "Ak sa to mojej manželke nebude páčiť, môžem to vymeniť?",
    "level": "Sätze"
  },
  {
    "de": "Natürlich, jederzeit.",
    "lv": "Samozrejme, kedykoľvek.",
    "level": "Sätze"
  }
];

window.SENTENCE_ENTRIES = SENTENCE_ENTRIES;

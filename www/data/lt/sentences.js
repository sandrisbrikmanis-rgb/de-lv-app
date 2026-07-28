const SENTENCE_ENTRIES = [
  {
    "de": "Hüte dich davor!",
    "lv": "Saugokis to!",
    "level": "Sätze"
  },
  {
    "de": "Wenn nichts dazwischenkommt.",
    "lv": "Jei nieko netrukdys. • Jei visa vyks pagal planą.",
    "level": "Sätze"
  },
  {
    "de": "Das kann ich mir denken!",
    "lv": "Tai aš tikrai žinau!",
    "level": "Sätze"
  },
  {
    "de": "Ist er denn krank?",
    "lv": "Ar jis tikrai serga?",
    "level": "Sätze"
  },
  {
    "de": "Was denn?",
    "lv": "Ką tada?",
    "level": "Sätze"
  },
  {
    "de": "Desto mehr.",
    "lv": "Juo daugiau.",
    "level": "Sätze"
  },
  {
    "de": "Je mehr, desto besser.",
    "lv": "Kuo daugiau, tuo geriau.",
    "level": "Sätze"
  },
  {
    "de": "Alles deutet auf Regen.",
    "lv": "Viskas liudija šio reikalo naudai.",
    "level": "Sätze"
  },
  {
    "de": "Damit ist mir wenig gedient.",
    "lv": "Iš to man mažai naudos.",
    "level": "Sätze"
  },
  {
    "de": "Er ist dienstlich verhindert.",
    "lv": "Jis negali atvykti dėl darbo.",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie doch!",
    "lv": "Kalbėkite jau!",
    "level": "Sätze"
  },
  {
    "de": "Es donnert.",
    "lv": "Griaustinis dunda.",
    "level": "Sätze"
  },
  {
    "de": "Doppelt so groß.",
    "lv": "Dvigubai didesnis.",
    "level": "Sätze"
  },
  {
    "de": "Von dort.",
    "lv": "Iš tenai.",
    "level": "Sätze"
  },
  {
    "de": "Die Zeit drängt.",
    "lv": "Laikas nelaukia.",
    "level": "Sätze"
  },
  {
    "de": "Ihn drücken Sorgen.",
    "lv": "Jį slegia rūpesčiai.",
    "level": "Sätze"
  },
  {
    "de": "Hast du das Buch durchgearbeitet?",
    "lv": "Ar tu kruopščiai peržvelgei knygą?",
    "level": "Sätze"
  },
  {
    "de": "Kein Durchgang!",
    "lv": "Praeiti draudžiama! • Išėjimas uždarytas!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich Sie bitten?",
    "lv": "Ar galiu jūsų paprašyti?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin durstig.",
    "lv": "Man trokšta.",
    "level": "Sätze"
  },
  {
    "de": "Eben das meine ich.",
    "lv": "Būtent tai aš turėjau omenyje.",
    "level": "Sätze"
  },
  {
    "de": "Es ist ganz egal.",
    "lv": "Tai visiškai nesvarbu.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie eigentlich?",
    "lv": "Ko jūs iš tikrųjų norite?",
    "level": "Sätze"
  },
  {
    "de": "Eilt es mit dieser Sache?",
    "lv": "Ar šis reikalas skubus?",
    "level": "Sätze"
  },
  {
    "de": "Eilt sehr!",
    "lv": "Labai skubiai!",
    "level": "Sätze"
  },
  {
    "de": "Ich habe es eilig.",
    "lv": "Aš skubu.",
    "level": "Sätze"
  },
  {
    "de": "Du bildest dir nur ein, krank zu sein.",
    "lv": "Tu tiesiog įsivaizduoji, kad esi sergantis.",
    "level": "Sätze"
  },
  {
    "de": "Was fällt dir ein?",
    "lv": "Kas tau šauna į galvą?",
    "level": "Sätze"
  },
  {
    "de": "Es war einmal.",
    "lv": "Buvo kartą.",
    "level": "Sätze"
  },
  {
    "de": "Steigen Sie bitte ein!",
    "lv": "Prašom, įlipkite!",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie ein!",
    "lv": "Prašom, užeikite!",
    "level": "Sätze"
  },
  {
    "de": "Einzelnes hat mir dort gefallen.",
    "lv": "Kai kurie dalykai man tenai patiko.",
    "level": "Sätze"
  },
  {
    "de": "Es empfiehlt sich.",
    "lv": "Yra patartina.",
    "level": "Sätze"
  },
  {
    "de": "Diese Flasche enthält Essig.",
    "lv": "Šiame butelyje yra actas.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldigen Sie bitte!",
    "lv": "Atsiprašau, prašau!",
    "level": "Sätze"
  },
  {
    "de": "Entweder... oder...",
    "lv": "Arba... arba...",
    "level": "Sätze"
  },
  {
    "de": "Wer war der Erste?",
    "lv": "Kas buvo pirmas?",
    "level": "Sätze"
  },
  {
    "de": "Wer fehlt heute?",
    "lv": "Kas šiandien neatvyko?",
    "level": "Sätze"
  },
  {
    "de": "Was fehlt dir?",
    "lv": "Kas tau yra?",
    "level": "Sätze"
  },
  {
    "de": "Wie heißen Sie?",
    "lv": "Koks jūsų vardas?",
    "level": "Sätze"
  },
  {
    "de": "Was soll das heißen?",
    "lv": "Ką tai reiškia?",
    "level": "Sätze"
  },
  {
    "de": "Bitte treten Sie näher heran!",
    "lv": "Prašom, prieikite arčiau!",
    "level": "Sätze"
  },
  {
    "de": "Heraus mit der Sprache!",
    "lv": "Kalbėk! • Pasakok!",
    "level": "Sätze"
  },
  {
    "de": "im Herbst",
    "lv": "rudenį",
    "level": "Sätze"
  },
  {
    "de": "Meine Herrschaften!",
    "lv": "Ponai ir ponios!",
    "level": "Sätze"
  },
  {
    "de": "von heute an",
    "lv": "nuo šiandien",
    "level": "Sätze"
  },
  {
    "de": "heute früh",
    "lv": "šį rytą",
    "level": "Sätze"
  },
  {
    "de": "heute Nacht",
    "lv": "šią naktį",
    "level": "Sätze"
  },
  {
    "de": "Zu Hilfe!",
    "lv": "Gelbėkite!",
    "level": "Sätze"
  },
  {
    "de": "Ich lerne jeden Tag Deutsch.",
    "lv": "Aš kasdien mokausi vokiečių kalbos.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das bitte wiederholen?",
    "lv": "Ar gali, prašau, tai pakartoti?",
    "level": "Sätze"
  },
  {
    "de": "Wir treffen uns am Bahnhof.",
    "lv": "Mes susitinkame geležinkelio stotyje.",
    "level": "Sätze"
  },
  {
    "de": "Ich stimme dir teilweise zu.",
    "lv": "Aš tau iš dalies pritariu.",
    "level": "Sätze"
  },
  {
    "de": "Diese Entscheidung hat weitreichende Folgen.",
    "lv": "Šis sprendimas turi toli siekiančių pasekmių.",
    "level": "Sätze"
  },
  {
    "de": "Man sollte mehrere Perspektiven berücksichtigen.",
    "lv": "Reikėtų atsižvelgti į kelis požiūrius.",
    "level": "Sätze"
  },
  {
    "de": "Könnten Sie das näher erläutern?",
    "lv": "Ar galėtumėte tai plačiau paaiškinti?",
    "level": "Sätze"
  },
  {
    "de": "Was mich anbelangt,...",
    "lv": "Kalbant apie mane,...",
    "level": "Sätze"
  },
  {
    "de": "Wie alt sind Sie?",
    "lv": "Kiek jums metų?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zwanzig Jahre alt.",
    "lv": "Man dvidešimt metų.",
    "level": "Sätze"
  },
  {
    "de": "Von heute an.",
    "lv": "Nuo šiandien.",
    "level": "Sätze"
  },
  {
    "de": "Von jetzt an.",
    "lv": "Nuo šio momento.",
    "level": "Sätze"
  },
  {
    "de": "Anders geht es nicht.",
    "lv": "Kitaip negalima.",
    "level": "Sätze"
  },
  {
    "de": "Rufen Sie mich an.",
    "lv": "Paskambinkite man.",
    "level": "Sätze"
  },
  {
    "de": "Bitte stellen Sie das Radio ab.",
    "lv": "Prašau, išjunkite radiją.",
    "level": "Sätze"
  },
  {
    "de": "Achte bitte auf den Verkehr.",
    "lv": "Prašau, atkreipk dėmesį į eismą.",
    "level": "Sätze"
  },
  {
    "de": "Darauf musst du achten.",
    "lv": "Į tai tau reikia atkreipti dėmesį.",
    "level": "Sätze"
  },
  {
    "de": "Heute mache ich es anders.",
    "lv": "Šiandien aš tai padarysiu kitaip.",
    "level": "Sätze"
  },
  {
    "de": "Wir warten auf den Bus.",
    "lv": "Mes laukiame autobuso.",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt allein.",
    "lv": "Jis gyvena vienas.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Ausbildung absolviert.",
    "lv": "Aš baigiau mokymus. • Aš baigiau mokslus.",
    "level": "Sätze"
  },
  {
    "de": "Ich warte den Regen ab.",
    "lv": "Palauksiu, kol lietus praeis.",
    "level": "Sätze"
  },
  {
    "de": "Er arbeitet in der Verkaufsabteilung.",
    "lv": "Jis dirba pardavimų skyriuje.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin allergisch gegen Katzen.",
    "lv": "Man yra alergija katėms.",
    "level": "Sätze"
  },
  {
    "de": "Andererseits verstehe ich ihn.",
    "lv": "Iš kitos puses, aš jį suprantu.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Situation analysiert.",
    "lv": "Aš išanalizavau situaciją.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat meinen Vorschlag akzeptiert.",
    "lv": "Ji priėmė mano pasiūlymą.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte das genauer analysieren.",
    "lv": "Aš norėčiau tai tiksliau analizuoti.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte den Vertrag ändern.",
    "lv": "Aš norėčiau pakeisti sutartį.",
    "level": "Sätze"
  },
  {
    "de": "Er ändert ständig seine Meinung.",
    "lv": "Jis nuolat keičia savo nuomonę.",
    "level": "Sätze"
  },
  {
    "de": "Ähnliche Probleme hatten wir schon früher.",
    "lv": "Panašių problemų mes jau turėjome anksčiau.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ahnung!",
    "lv": "Neturiu ne mažiausio supratimo!",
    "level": "Sätze"
  },
  {
    "de": "Hör auf zu jammern.",
    "lv": "Baik skųstis.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Kleid ist akademisch gekleidet.",
    "lv": "Ši suknelė yra stilingai konservatyvi.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre gerne Akkordeonmusik.",
    "lv": "Man patinka klausytis akordeono muzikos.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das Gerät anklicken?",
    "lv": "Ar gali spustelėti ant įrenginio?",
    "level": "Sätze"
  },
  {
    "de": "Bitte öffne die Datei und klicke darauf.",
    "lv": "Prašau, atidaryk failą ir spustelėk ant jo.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe einen Unfall gehabt.",
    "lv": "Aš nukentėjau nelaimingame atsitikime.",
    "level": "Sätze"
  },
  {
    "de": "Wir laufen zum Bahnhof.",
    "lv": "Mes einame į stotį.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schalte den Fernseher an.",
    "lv": "Prašau, įjunk televizorių.",
    "level": "Sätze"
  },
  {
    "de": "Mein Computer ist abgestürzt.",
    "lv": "Mano kompiuteris užstrigo.",
    "level": "Sätze"
  },
  {
    "de": "Am Wochenende gehe ich angeln.",
    "lv": "Savaitgalį eisiu žvejoti.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe den Anruf verpasst.",
    "lv": "Praleidau skambutį.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mich später anrufen?",
    "lv": "Ar gali man paskambinti vėliau?",
    "level": "Sätze"
  },
  {
    "de": "Bitte nimm meinen Vorschlag an.",
    "lv": "Prašau, priimk mano pasiūlymą.",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme dein Angebot an.",
    "lv": "Aš priimu tavo pasiūlymą.",
    "level": "Sätze"
  },
  {
    "de": "Er nahm die Einladung an.",
    "lv": "Jis priėmė kvietimą.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Angst vor Spinnen.",
    "lv": "Aš bijau vorų.",
    "level": "Sätze"
  },
  {
    "de": "Keine Angst, alles wird gut.",
    "lv": "Nebijok, viskas bus gerai.",
    "level": "Sätze"
  },
  {
    "de": "Anklang finden.",
    "lv": "Rasti atgarsį. • Susilaukti pritarimo",
    "level": "Sätze"
  },
  {
    "de": "Es kommt darauf an.",
    "lv": "Tai priklauso nuo to.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Anlass.",
    "lv": "Dėl šio karto. • Šiuo atveju",
    "level": "Sätze"
  },
  {
    "de": "Nehmen wir an, dass...",
    "lv": "Tarkime, kad...",
    "level": "Sätze"
  },
  {
    "de": "Was hast du da angerichtet?",
    "lv": "Ką tu ten padarei?",
    "level": "Sätze"
  },
  {
    "de": "Bis ans Ende.",
    "lv": "Iki galo.",
    "level": "Sätze"
  },
  {
    "de": "Du glaubst mir anscheinend nicht.",
    "lv": "Atrodo, kad tu manim netiki.",
    "level": "Sätze"
  },
  {
    "de": "Meiner Ansicht nach...",
    "lv": "Mano nuomone...",
    "level": "Sätze"
  },
  {
    "de": "Stell dich nicht so an!",
    "lv": "Nesiapsimesk!",
    "level": "Sätze"
  },
  {
    "de": "An die Arbeit gehen.",
    "lv": "Imtis darbo.",
    "level": "Sätze"
  },
  {
    "de": "Außer Atem sein.",
    "lv": "Būti be kvapo.",
    "level": "Sätze"
  },
  {
    "de": "Guten Appetit!",
    "lv": "Gero apetito!",
    "level": "Sätze"
  },
  {
    "de": "In einem Atemzug.",
    "lv": "Per vieną kvapą.",
    "level": "Sätze"
  },
  {
    "de": "Auf jeden Fall.",
    "lv": "Kiekvienu atveju.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal war alles still.",
    "lv": "Staiga visi nutilo.",
    "level": "Sätze"
  },
  {
    "de": "Bitte mach die Tür auf!",
    "lv": "Atidaryk, prašau, duris!",
    "level": "Sätze"
  },
  {
    "de": "Er hat den Kredit aufgenommen.",
    "lv": "Jis paėmė paskolą.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen heute aufräumen.",
    "lv": "Mums šiandien reikia sutvarkyti patalpą.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre jetzt auf.",
    "lv": "Aš dabar baigsiu.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schon auf.",
    "lv": "Jis jau atsikėlė.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen das Treffen verschieben.",
    "lv": "Mums reikia perkelti susitikimą.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat mich aufgeregt.",
    "lv": "Ji mane supykdė.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal.",
    "lv": "Staiga.",
    "level": "Sätze"
  },
  {
    "de": "Auf der Stelle.",
    "lv": "Nedelsiant.",
    "level": "Sätze"
  },
  {
    "de": "Für den Schaden aufkommen.",
    "lv": "Padengti padarytus nuostolius.",
    "level": "Sätze"
  },
  {
    "de": "Bitte die Tür auf!",
    "lv": "Atidarykite, prašau, duris!",
    "level": "Sätze"
  },
  {
    "de": "Aufrecht sitzen.",
    "lv": "Sėdėti tiesiai.",
    "level": "Sätze"
  },
  {
    "de": "Er ist auf.",
    "lv": "Jis atsikėlė.",
    "level": "Sätze"
  },
  {
    "de": "Alle Kräfte aufwenden.",
    "lv": "Skirti visas jėgas.",
    "level": "Sätze"
  },
  {
    "de": "Viel Mühe aufwenden.",
    "lv": "Labai stengtis.",
    "level": "Sätze"
  },
  {
    "de": "Geh mir aus den Augen!",
    "lv": "Nesirodyk man daugiau akyse!",
    "level": "Sätze"
  },
  {
    "de": "Unter vier Augen.",
    "lv": "Dviese. • Tyliai",
    "level": "Sätze"
  },
  {
    "de": "Aus Mangel an Zeit.",
    "lv": "Dėl laiko trūkumo.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Grunde.",
    "lv": "Dėl šios priežasties.",
    "level": "Sätze"
  },
  {
    "de": "Alle außer dir.",
    "lv": "Visi, išskyrus tave.",
    "level": "Sätze"
  },
  {
    "de": "Auf Äußerlichkeiten Wert legen.",
    "lv": "Teikti reikšmę išvaizdai.",
    "level": "Sätze"
  },
  {
    "de": "Im äußersten Fall.",
    "lv": "Blogiausiu atveju.",
    "level": "Sätze"
  },
  {
    "de": "Äußerst wichtig.",
    "lv": "Nepaprastai svarbus.",
    "level": "Sätze"
  },
  {
    "de": "Aussicht auf die See.",
    "lv": "Vaizdas į jūrą.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gute Aussichten.",
    "lv": "Jis turi gerų perspektyvų.",
    "level": "Sätze"
  },
  {
    "de": "Wie wird dieses Wort ausgesprochen?",
    "lv": "Kaip tariamas šis žodis?",
    "level": "Sätze"
  },
  {
    "de": "Sein Beileid aussprechen.",
    "lv": "Išreikšti užuojautą.",
    "level": "Sätze"
  },
  {
    "de": "Wann wurden die Meisterschaftskämpfe ausgetragen?",
    "lv": "Kada vyko čempionatas?",
    "level": "Sätze"
  },
  {
    "de": "Welchen Beruf üben Sie aus?",
    "lv": "Kokia jūsų profesija?",
    "level": "Sätze"
  },
  {
    "de": "Einfluss ausüben.",
    "lv": "Turėti įtaką.",
    "level": "Sätze"
  },
  {
    "de": "Auswärts essen.",
    "lv": "Valgyti ne namuose.",
    "level": "Sätze"
  },
  {
    "de": "Per Bahn.",
    "lv": "Geležinkeliu.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Bahn.",
    "lv": "Geležinkeliu.",
    "level": "Sätze"
  },
  {
    "de": "Möglichst bald.",
    "lv": "Kiek galima greičiau.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist Angst und bange.",
    "lv": "Man labai baisu.",
    "level": "Sätze"
  },
  {
    "de": "Auf die lange Bank schieben.",
    "lv": "Vilkinti. • Tęsti be galo • Atidėti neribotam laikui",
    "level": "Sätze"
  },
  {
    "de": "Bar zahlen.",
    "lv": "Mokėti grynaisiais pinigais.",
    "level": "Sätze"
  },
  {
    "de": "Erz bauen.",
    "lv": "Išgauti rūdą.",
    "level": "Sätze"
  },
  {
    "de": "Mist bauen.",
    "lv": "Padaryti niekus. • Iškrėsti kvailystę",
    "level": "Sätze"
  },
  {
    "de": "Ich bin beauftragt.",
    "lv": "Man pavesta užduotis.",
    "level": "Sätze"
  },
  {
    "de": "Nach Bedarf.",
    "lv": "Pagal reikalą.",
    "level": "Sätze"
  },
  {
    "de": "Ich bedauere ihn.",
    "lv": "Man jos gaila.",
    "level": "Sätze"
  },
  {
    "de": "Was bedeutet dieses Wort?",
    "lv": "Ką reiškia šis žodis?",
    "level": "Sätze"
  },
  {
    "de": "Unter der Bedingung, dass...",
    "lv": "Su sąlyga, kad...",
    "level": "Sätze"
  },
  {
    "de": "Sie sieht bedrückt aus.",
    "lv": "Ji atrodo prislėgta.",
    "level": "Sätze"
  },
  {
    "de": "Hinweise befolgen.",
    "lv": "Vykdyti nurodymus.",
    "level": "Sätze"
  },
  {
    "de": "Befehle befolgen.",
    "lv": "Vykdyti įsakymus.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Post befördern.",
    "lv": "Išsiųsti paštu.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin begierig zu wissen.",
    "lv": "Man labai smalsu sužinoti.",
    "level": "Sätze"
  },
  {
    "de": "Zu Beginn.",
    "lv": "Iš pradžių.",
    "level": "Sätze"
  },
  {
    "de": "Am Beginn.",
    "lv": "Iš pradžių.",
    "level": "Sätze"
  },
  {
    "de": "Bei Beginn.",
    "lv": "Pradedant.",
    "level": "Sätze"
  },
  {
    "de": "In Begleitung.",
    "lv": "Palydoje.",
    "level": "Sätze"
  },
  {
    "de": "Mit seiner Begleitung.",
    "lv": "Su palyda.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schwer von Begriff.",
    "lv": "Jis lėtai suvokia. • Jo mąstymas lėtas",
    "level": "Sätze"
  },
  {
    "de": "Im Gedächtnis behalten.",
    "lv": "Prisiminti. • Įsiminti",
    "level": "Sätze"
  },
  {
    "de": "Bei Tisch.",
    "lv": "Prie stalo.",
    "level": "Sätze"
  },
  {
    "de": "Bei Sinnen sein.",
    "lv": "Būti sveiko proto.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tage.",
    "lv": "Dienos metu.",
    "level": "Sätze"
  },
  {
    "de": "Bei weitem nicht so.",
    "lv": "Visai ne.",
    "level": "Sätze"
  },
  {
    "de": "Alle beide.",
    "lv": "Abu du.",
    "level": "Sätze"
  },
  {
    "de": "Stürmischer Beifall brach los.",
    "lv": "Nuskambėjo audringi plojimai.",
    "level": "Sätze"
  },
  {
    "de": "Beifall finden.",
    "lv": "Gauti pritarimą.",
    "level": "Sätze"
  },
  {
    "de": "Beileid aussprechen.",
    "lv": "Išreikšti užuojautą.",
    "level": "Sätze"
  },
  {
    "de": "Auf eigenen Beinen stehen.",
    "lv": "Būti finansiškai savarankiškam.",
    "level": "Sätze"
  },
  {
    "de": "Zum Beispiel.",
    "lv": "Pavyzdžiui.",
    "level": "Sätze"
  },
  {
    "de": "Beistand leisten.",
    "lv": "Padėti. • Suteikti pagalbą",
    "level": "Sätze"
  },
  {
    "de": "Beitrag leisten.",
    "lv": "Įnešti savo dalį.",
    "level": "Sätze"
  },
  {
    "de": "Jemandes Bekanntschaft machen.",
    "lv": "Susipažinti su kuo nors.",
    "level": "Sätze"
  },
  {
    "de": "Bekanntschaft anknüpfen.",
    "lv": "Susipažinti. • Užmegzti ryšį",
    "level": "Sätze"
  },
  {
    "de": "Belegte Brötchen.",
    "lv": "Sumuštiniai su įdaru.",
    "level": "Sätze"
  },
  {
    "de": "Nach Ihrem Belieben.",
    "lv": "Kaip jūs norite.",
    "level": "Sätze"
  },
  {
    "de": "Zu jeder beliebigen Zeit.",
    "lv": "Bet kuriuo metu.",
    "level": "Sätze"
  },
  {
    "de": "Schweigen beobachten.",
    "lv": "Laikytis tylos.",
    "level": "Sätze"
  },
  {
    "de": "Zur Bequemlichkeit.",
    "lv": "Patogumo dėlei.",
    "level": "Sätze"
  },
  {
    "de": "Bereit sein.",
    "lv": "Būti pasiruošusiam. • Sutikti",
    "level": "Sätze"
  },
  {
    "de": "Unfallopfer bergen.",
    "lv": "Gelbėti nelaimingo atsitikimo aukas.",
    "level": "Sätze"
  },
  {
    "de": "Bericht erstatten.",
    "lv": "Pranešti. • Pateikti pranešimą • Pateikti ataskaitą",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind besetzt.",
    "lv": "Visos vietos užimtos.",
    "level": "Sätze"
  },
  {
    "de": "Neue Besen kehren gut.",
    "lv": "Naujas šluota gerai šluoja.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt ein Haus.",
    "lv": "Jam priklauso namas.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt viel Mut.",
    "lv": "Jis turi didelę drąsą.",
    "level": "Sätze"
  },
  {
    "de": "Desto besser.",
    "lv": "Juo geriau.",
    "level": "Sätze"
  },
  {
    "de": "Gute Besserung!",
    "lv": "Pasveikite! • Pasveik!",
    "level": "Sätze"
  },
  {
    "de": "Beim besten Willen.",
    "lv": "Kaip ir norėtųsi.",
    "level": "Sätze"
  },
  {
    "de": "Am besten.",
    "lv": "Geriausia.",
    "level": "Sätze"
  },
  {
    "de": "Es besteht Zweifel.",
    "lv": "Yra abejonių.",
    "level": "Sätze"
  },
  {
    "de": "Seine Aufgabe besteht darin...",
    "lv": "Jo užduotis yra...",
    "level": "Sätze"
  },
  {
    "de": "Grüße bestellen.",
    "lv": "Pasveikinti.",
    "level": "Sätze"
  },
  {
    "de": "Ganz bestimmt.",
    "lv": "Tikrai. • Visiškai tikrai",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch kommen.",
    "lv": "Ateiti į svečius.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch sein.",
    "lv": "Būti svečiuose. • Svečiuotis",
    "level": "Sätze"
  },
  {
    "de": "Oft Konzerte besuchen.",
    "lv": "Dažnai eiti į koncertus.",
    "level": "Sätze"
  },
  {
    "de": "Welche Schule hat er besucht?",
    "lv": "Kurioje mokykloje jis mokėsi?",
    "level": "Sätze"
  },
  {
    "de": "In Betracht ziehen.",
    "lv": "Atsižvelgti. • Apsvarstyti",
    "level": "Sätze"
  },
  {
    "de": "Außer Betracht lassen.",
    "lv": "Neatsižvelgti. • Nesvarstyti",
    "level": "Sätze"
  },
  {
    "de": "Er betreibt ein Hotel.",
    "lv": "Jis vadovauja viešbučiui.",
    "level": "Sätze"
  },
  {
    "de": "Alle beiden.",
    "lv": "Abu du.",
    "level": "Sätze"
  },
  {
    "de": "Alles bezahlen.",
    "lv": "Sumokėti visą.",
    "level": "Sätze"
  },
  {
    "de": "Bezüglich auf etwas.",
    "lv": "Kalbant apie kai ką.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön.",
    "lv": "Prašau.",
    "level": "Sätze"
  },
  {
    "de": "Wie bitte?",
    "lv": "Kaip, prašom?",
    "level": "Sätze"
  },
  {
    "de": "Bitte sehr.",
    "lv": "Prašau.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe eine Bitte an Sie.",
    "lv": "Turiu jums prašymą.",
    "level": "Sätze"
  },
  {
    "de": "Trompete blasen.",
    "lv": "Pūsti trimitą.",
    "level": "Sätze"
  },
  {
    "de": "In einem Buch blättern.",
    "lv": "Vartyti knygą.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßen Füßen.",
    "lv": "Basomis kojomis.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßem Auge.",
    "lv": "Plika akimi.",
    "level": "Sätze"
  },
  {
    "de": "Danke für die Blumen!",
    "lv": "Dėkoju už gėles!",
    "level": "Sätze"
  },
  {
    "de": "Alles in Butter.",
    "lv": "Viskas tvarkoje.",
    "level": "Sätze"
  },
  {
    "de": "Bitte checken.",
    "lv": "Patikrinti. • Iškontroliuoti",
    "level": "Sätze"
  },
  {
    "de": "Da ist er!",
    "lv": "Štai jis!",
    "level": "Sätze"
  },
  {
    "de": "Alles spricht dafür.",
    "lv": "Viskas liudija naudai.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann nichts dafür.",
    "lv": "Aš čia nieko negaliu padaryti.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin dagegen.",
    "lv": "Aš esu prieš tai.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe nichts dagegen.",
    "lv": "Man dėl to nėra prieštaravimų.",
    "level": "Sätze"
  },
  {
    "de": "Von daheim.",
    "lv": "Iš namų.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Dame ziehen.",
    "lv": "Padaryti damos ėjimą.",
    "level": "Sätze"
  },
  {
    "de": "Es dämmert.",
    "lv": "Temsta. • Auš aušra.",
    "level": "Sätze"
  },
  {
    "de": "Danke schön!",
    "lv": "Dėkui! • Dėkoju!",
    "level": "Sätze"
  },
  {
    "de": "Dann und wann.",
    "lv": "Kai kada.",
    "level": "Sätze"
  },
  {
    "de": "Darauf kannst du dich verlassen.",
    "lv": "Tuo tu gali pasitikėti.",
    "level": "Sätze"
  },
  {
    "de": "Daraus wird nichts.",
    "lv": "Iš to nieko neišeis.",
    "level": "Sätze"
  },
  {
    "de": "So dass...",
    "lv": "Taigi...",
    "level": "Sätze"
  },
  {
    "de": "Für wen halten Sie mich?",
    "lv": "Kuo jūs mane laikote?",
    "level": "Sätze"
  },
  {
    "de": "Hände weg!",
    "lv": "Rankas šalin!",
    "level": "Sätze"
  },
  {
    "de": "Lass den Kopf nicht hängen!",
    "lv": "Nenuleisk galvos!",
    "level": "Sätze"
  },
  {
    "de": "zu Hause",
    "lv": "namuose",
    "level": "Sätze"
  },
  {
    "de": "nach Hause gehen",
    "lv": "eiti namo",
    "level": "Sätze"
  },
  {
    "de": "von Haus aus",
    "lv": "nuo vaikystės • nuo paties pradžios",
    "level": "Sätze"
  },
  {
    "de": "Meinen herzlichsten Glückwunsch!",
    "lv": "Širdingai sveikinu!",
    "level": "Sätze"
  },
  {
    "de": "Seien Sie so gut!",
    "lv": "Būkite tokie malonūs! • Būkite tokie geri!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie die Güte!",
    "lv": "Būkite tokie malonūs!",
    "level": "Sätze"
  },
  {
    "de": "Was hast du?",
    "lv": "Kas tau yra? • Kas nutiko?",
    "level": "Sätze"
  },
  {
    "de": "Gestatten Sie bitte!",
    "lv": "Leiskite, prašau!",
    "level": "Sätze"
  },
  {
    "de": "Ist es gestattet zu rauchen?",
    "lv": "Ar galima rūkyti?",
    "level": "Sätze"
  },
  {
    "de": "Ich muss gestehen, dass...",
    "lv": "Turiu prisipažinti, kad...",
    "level": "Sätze"
  },
  {
    "de": "gestern früh",
    "lv": "vakar anksti rytą",
    "level": "Sätze"
  },
  {
    "de": "gestern Abend",
    "lv": "vakar vakare",
    "level": "Sätze"
  },
  {
    "de": "Es ist mir gleichgültig, ob...",
    "lv": "Man nesvarbu, ar...",
    "level": "Sätze"
  },
  {
    "de": "Was ist geschehen?",
    "lv": "Kas nutiko?",
    "level": "Sätze"
  },
  {
    "de": "Mach keine Geschichten!",
    "lv": "Nedaryk kvailysčių! • Nejuokauk!",
    "level": "Sätze"
  },
  {
    "de": "Geschweige denn...",
    "lv": "Nekalbant apie tai. • Kur jau",
    "level": "Sätze"
  },
  {
    "de": "Gehen Sie geradeaus!",
    "lv": "Eikite tiesiai į priekį!",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es Ihnen?",
    "lv": "Kaip jums sekasi? • Kaip laikotės?",
    "level": "Sätze"
  },
  {
    "de": "Frag ihn gelegentlich, ob...",
    "lv": "Paklausk jo, jei pasitaikys, ar...",
    "level": "Sätze"
  },
  {
    "de": "morgen früh",
    "lv": "rytoj ryte",
    "level": "Sätze"
  },
  {
    "de": "im Frühling",
    "lv": "pavasarį",
    "level": "Sätze"
  },
  {
    "de": "Was gibt’s Neues?",
    "lv": "Kas naujo?",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Brief folgt, dass...",
    "lv": "Iš šio laiško išplaukia, kad...",
    "level": "Sätze"
  },
  {
    "de": "Fahre fort!",
    "lv": "Tęsk taip toliau!",
    "level": "Sätze"
  },
  {
    "de": "Er ist kein Freund von...",
    "lv": "Jam nepatinka...",
    "level": "Sätze"
  },
  {
    "de": "Es erwies sich, dass...",
    "lv": "Pasirodė, kad...",
    "level": "Sätze"
  },
  {
    "de": "Gedenkst du meiner?",
    "lv": "Ar tu mane atsimeni? • Ar tu apie mane pagalvoji?",
    "level": "Sätze"
  },
  {
    "de": "im Winter",
    "lv": "žiemą",
    "level": "Sätze"
  },
  {
    "de": "Welcher Jahrgang sind Sie?",
    "lv": "Kuriais metais jūs gimėte?",
    "level": "Sätze"
  },
  {
    "de": "Es jammert mich zu sehen...",
    "lv": "Gaila žiūrėti...",
    "level": "Sätze"
  },
  {
    "de": "je mehr, desto besser",
    "lv": "kuo daugiau, tuo geriau",
    "level": "Sätze"
  },
  {
    "de": "bis jetzt",
    "lv": "iki šio momento",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich zum Bahnhof?",
    "lv": "Kaip nusigauti iki stoties?",
    "level": "Sätze"
  },
  {
    "de": "Komm her!",
    "lv": "Ateik čia!",
    "level": "Sätze"
  },
  {
    "de": "Könnte ich Frau N. sprechen?",
    "lv": "Ar galėčiau pasikalbėti su ponia N.?",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das?",
    "lv": "Kiek tai kainuoja?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange dauert die Vorstellung?",
    "lv": "Kiek ilgai truks pasirodymas?",
    "level": "Sätze"
  },
  {
    "de": "Lass das!",
    "lv": "Baik! • Mesk tai!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich in Ruhe!",
    "lv": "Palik mane ramybėje!",
    "level": "Sätze"
  },
  {
    "de": "Lassen Sie mich Ihnen helfen!",
    "lv": "Leiskite man jums padėti!",
    "level": "Sätze"
  },
  {
    "de": "Lasst uns gehen!",
    "lv": "Eime!",
    "level": "Sätze"
  },
  {
    "de": "Na, wie läufts?",
    "lv": "Kaip sekasi?",
    "level": "Sätze"
  },
  {
    "de": "Es lebe!",
    "lv": "Tegyvuoja!",
    "level": "Sätze"
  },
  {
    "de": "Leben Sie wohl!",
    "lv": "Likite sveiki! • Sudie!",
    "level": "Sätze"
  },
  {
    "de": "Was ist los?",
    "lv": "Kas nutiko?",
    "level": "Sätze"
  },
  {
    "de": "Der Job ist anstrengend.",
    "lv": "Darbas yra varginantis.",
    "level": "Sätze"
  },
  {
    "de": "Das war ein anstrengender Tag.",
    "lv": "Tai buvo įtempta diena.",
    "level": "Sätze"
  },
  {
    "de": "Deutsch lernen kann anstrengend sein.",
    "lv": "Vokiečių kalbos mokymasis gali būti varginantis.",
    "level": "Sätze"
  },
  {
    "de": "Er verlangt eine Erklärung.",
    "lv": "Jis reikalauja paaiškinimo.",
    "level": "Sätze"
  },
  {
    "de": "Der Verkäufer verlangt zu viel Geld.",
    "lv": "Pardavėjas prašo per daug pinigų.",
    "level": "Sätze"
  },
  {
    "de": "Das Gesetz verlangt es so.",
    "lv": "Įstatymas tai reikalauja.",
    "level": "Sätze"
  },
  {
    "de": "Das ist gar nicht so schwer.",
    "lv": "Tai visai nėra taip sunku.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe gar kein Geld.",
    "lv": "Aš visiškai neturiu pinigų.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gar nichts gesagt.",
    "lv": "Jis visiškai nieko nepasakė.",
    "level": "Sätze"
  },
  {
    "de": "Der Hund ist los.",
    "lv": "Šuo paleistas laisvai.",
    "level": "Sätze"
  },
  {
    "de": "Hier ist viel los.",
    "lv": "Čia daug kas vyksta.",
    "level": "Sätze"
  },
  {
    "de": "Halt die Luft an!",
    "lv": "Sulaikyk kvapą!",
    "level": "Sätze"
  },
  {
    "de": "Was machst du?",
    "lv": "Ką tu darai?",
    "level": "Sätze"
  },
  {
    "de": "Sag mal!",
    "lv": "Sakyk jau!",
    "level": "Sätze"
  },
  {
    "de": "Was meinen Sie damit?",
    "lv": "Ką jūs tuo turite omenyje? • Kaip jūs tai suprantate?",
    "level": "Sätze"
  },
  {
    "de": "Wir gehen mit Ihnen.",
    "lv": "Mes einame su jumis.",
    "level": "Sätze"
  },
  {
    "de": "Ich fahre mit der Eisenbahn.",
    "lv": "Aš važiuoju traukiniu.",
    "level": "Sätze"
  },
  {
    "de": "am Mittwoch",
    "lv": "trečiadienį",
    "level": "Sätze"
  },
  {
    "de": "Es mag sein.",
    "lv": "Galbūt.",
    "level": "Sätze"
  },
  {
    "de": "Ich mag das nicht.",
    "lv": "Man tai nepatinka.",
    "level": "Sätze"
  },
  {
    "de": "am Montag",
    "lv": "pirmadienį",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen!",
    "lv": "Labas rytas!",
    "level": "Sätze"
  },
  {
    "de": "am Morgen",
    "lv": "iš ryto",
    "level": "Sätze"
  },
  {
    "de": "Gute Nacht!",
    "lv": "Labanakt!",
    "level": "Sätze"
  },
  {
    "de": "Nehmen Sie Platz!",
    "lv": "Sėskitės!",
    "level": "Sätze"
  },
  {
    "de": "Letzte Neuheit!",
    "lv": "Naujausia žinia!",
    "level": "Sätze"
  },
  {
    "de": "Nicht wahr?",
    "lv": "Ar ne?",
    "level": "Sätze"
  },
  {
    "de": "Nicht doch!",
    "lv": "Negali būti! • Nereikia!",
    "level": "Sätze"
  },
  {
    "de": "Nun endlich!",
    "lv": "Na, pagaliau!",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das?",
    "lv": "Kam tai naudinga?",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das alles?",
    "lv": "Kam visa tai?",
    "level": "Sätze"
  },
  {
    "de": "Parken verboten!",
    "lv": "Stovėti draudžiama!",
    "level": "Sätze"
  },
  {
    "de": "Nicht parken!",
    "lv": "Stovėti draudžiama!",
    "level": "Sätze"
  },
  {
    "de": "Er hat Recht.",
    "lv": "Jis teisus.",
    "level": "Sätze"
  },
  {
    "de": "Wovon ist die Rede?",
    "lv": "Apie ką kalbama?",
    "level": "Sätze"
  },
  {
    "de": "Davon kann keine Rede sein.",
    "lv": "Apie tai negali būti nė kalbos.",
    "level": "Sätze"
  },
  {
    "de": "Glückliche Reise!",
    "lv": "Laimingos kelionės!",
    "level": "Sätze"
  },
  {
    "de": "Mir reißt die Geduld.",
    "lv": "Man baigiasi kantrybė.",
    "level": "Sätze"
  },
  {
    "de": "Man sagt, dass...",
    "lv": "Sakoma, kad...",
    "level": "Sätze"
  },
  {
    "de": "Schon gut!",
    "lv": "Jau gerai!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön!",
    "lv": "Prašau!",
    "level": "Sätze"
  },
  {
    "de": "Was bin ich schuldig?",
    "lv": "Kiek aš skolingas? • Kiek man reikia mokėti?",
    "level": "Sätze"
  },
  {
    "de": "Vor dem Gebrauch schütteln!",
    "lv": "Prieš vartojimą sukratyti!",
    "level": "Sätze"
  },
  {
    "de": "Sehen Sie mal!",
    "lv": "Pažiūrėkite!",
    "level": "Sätze"
  },
  {
    "de": "Wie sehr auch...",
    "lv": "Kad ir kaip labai...",
    "level": "Sätze"
  },
  {
    "de": "Seit wann?",
    "lv": "Nuo kada?",
    "level": "Sätze"
  },
  {
    "de": "Was soll ich tun?",
    "lv": "Ką man daryti?",
    "level": "Sätze"
  },
  {
    "de": "im Sommer",
    "lv": "vasarą",
    "level": "Sätze"
  },
  {
    "de": "Nicht nur..., sondern auch...",
    "lv": "Ne tik..., bet ir...",
    "level": "Sätze"
  },
  {
    "de": "Sonst noch etwas?",
    "lv": "Kas nors dar?",
    "level": "Sätze"
  },
  {
    "de": "Spaß beiseite!",
    "lv": "Be jokų! • Jokus į šalį!",
    "level": "Sätze"
  },
  {
    "de": "Wie spät ist es?",
    "lv": "Kiek valandų?",
    "level": "Sätze"
  },
  {
    "de": "Durchfahrt gesperrt!",
    "lv": "Pravažiavimas draudžiamas!",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie deutsch?",
    "lv": "Ar jūs kalbate vokiškai?",
    "level": "Sätze"
  },
  {
    "de": "Statt zu...",
    "lv": "Vietoj to, kad...",
    "level": "Sätze"
  },
  {
    "de": "Wie steht’s?",
    "lv": "Kaip sekasi?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Hut steht ihr gut.",
    "lv": "Ši kepurė jai labai tinka.",
    "level": "Sätze"
  },
  {
    "de": "Guten Tag!",
    "lv": "Labą dieną!",
    "level": "Sätze"
  },
  {
    "de": "Wo treffen wir uns?",
    "lv": "Kur mes susitiksime?",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie näher!",
    "lv": "Prieikite arčiau!",
    "level": "Sätze"
  },
  {
    "de": "Ehrlichkeit ist eine Tugend.",
    "lv": "Sąžiningumas yra dorybė.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe viel zu tun.",
    "lv": "Man daug reikalų.",
    "level": "Sätze"
  },
  {
    "de": "Nicht übel!",
    "lv": "Visai gerai! • Nėra kam prieštarauti",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt über mir.",
    "lv": "Jis gyvena virš manęs.",
    "level": "Sätze"
  },
  {
    "de": "Er ist davon überzeugt.",
    "lv": "Jis dėl to yra įsitikinęs.",
    "level": "Sätze"
  },
  {
    "de": "So ist es üblich.",
    "lv": "Taip yra priimta.",
    "level": "Sätze"
  },
  {
    "de": "Deine Uhr geht nach.",
    "lv": "Tavo laikrodis atsilieka.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel Uhr ist es?",
    "lv": "Kiek valandų?",
    "level": "Sätze"
  },
  {
    "de": "Um acht Uhr früh.",
    "lv": "Aštuntą valandą ryto.",
    "level": "Sätze"
  },
  {
    "de": "umso mehr",
    "lv": "juo daugiau",
    "level": "Sätze"
  },
  {
    "de": "Rechts um!",
    "lv": "Pasukti į dešinę!",
    "level": "Sätze"
  },
  {
    "de": "Und ob!",
    "lv": "Ir dar kaip!",
    "level": "Sätze"
  },
  {
    "de": "und zwar",
    "lv": "tai yra",
    "level": "Sätze"
  },
  {
    "de": "Auf Unkosten von...",
    "lv": "Į... sąskaitą.",
    "level": "Sätze"
  },
  {
    "de": "Er saß unter den Zuschauern.",
    "lv": "Jis sėdėjo tarp žiūrovų.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ursache!",
    "lv": "Nėra už ką!",
    "level": "Sätze"
  },
  {
    "de": "Es geschah, wie verabredet.",
    "lv": "Įvyko taip, kaip buvo sutarta.",
    "level": "Sätze"
  },
  {
    "de": "Rauchen verboten!",
    "lv": "Rūkyti draudžiama!",
    "level": "Sätze"
  },
  {
    "de": "Falsch verbunden!",
    "lv": "Klaidingai sujungta!",
    "level": "Sätze"
  },
  {
    "de": "Eintritt verboten!",
    "lv": "Įėjimas draudžiamas!",
    "level": "Sätze"
  },
  {
    "de": "Verstehen Sie mich?",
    "lv": "Ar jūs mane suprantate?",
    "level": "Sätze"
  },
  {
    "de": "Er versteht nichts davon.",
    "lv": "Jis iš to nieko nesupranta.",
    "level": "Sätze"
  },
  {
    "de": "Seine Ansicht vertreten.",
    "lv": "Ginti savo nuomonę.",
    "level": "Sätze"
  },
  {
    "de": "Streit verursachen.",
    "lv": "Sukelti ginčą.",
    "level": "Sätze"
  },
  {
    "de": "Viel besser.",
    "lv": "Daug geriau.",
    "level": "Sätze"
  },
  {
    "de": "Zu viel.",
    "lv": "Per daug.",
    "level": "Sätze"
  },
  {
    "de": "Vom Hörensagen.",
    "lv": "Iš nuogirdų.",
    "level": "Sätze"
  },
  {
    "de": "Von Zeit zu Zeit.",
    "lv": "Kartais.",
    "level": "Sätze"
  },
  {
    "de": "Von Beruf.",
    "lv": "Pagal profesiją.",
    "level": "Sätze"
  },
  {
    "de": "Er ist Berliner von Geburt.",
    "lv": "Jis yra gimęs berlynietis.",
    "level": "Sätze"
  },
  {
    "de": "Er steht vor dem Fenster.",
    "lv": "Jis stovi prie lango.",
    "level": "Sätze"
  },
  {
    "de": "Vor Sonnenaufgang.",
    "lv": "Prieš saulėtekį.",
    "level": "Sätze"
  },
  {
    "de": "Vor vierzehn Tagen.",
    "lv": "Prieš dvi savaites.",
    "level": "Sätze"
  },
  {
    "de": "Vor Freude.",
    "lv": "Iš džiaugsmo.",
    "level": "Sätze"
  },
  {
    "de": "Vor allem.",
    "lv": "Pirmiausia. • Visų pirma",
    "level": "Sätze"
  },
  {
    "de": "Im Voraus.",
    "lv": "Iš anksto.",
    "level": "Sätze"
  },
  {
    "de": "Unter der Voraussetzung, dass...",
    "lv": "Tariant, kad...",
    "level": "Sätze"
  },
  {
    "de": "Unter dem Vorbehalt.",
    "lv": "Su sąlyga.",
    "level": "Sätze"
  },
  {
    "de": "Vorhanden sein.",
    "lv": "Būti. • Būti šalia • Būti pasiekiamam",
    "level": "Sätze"
  },
  {
    "de": "In der vorigen Woche.",
    "lv": "Praėjusią savaitę.",
    "level": "Sätze"
  },
  {
    "de": "Vorkehrungen treffen.",
    "lv": "Imtis apsaugos priemonių.",
    "level": "Sätze"
  },
  {
    "de": "Sie kommt mir bekannt vor.",
    "lv": "Ji man atrodo pažįstama.",
    "level": "Sätze"
  },
  {
    "de": "Er hat Vorliebe für Literatur.",
    "lv": "Jam labai patinka literatūra.",
    "level": "Sätze"
  },
  {
    "de": "Heute Vormittag.",
    "lv": "Šįrytą. • Šiandien priešpiet",
    "level": "Sätze"
  },
  {
    "de": "Von vorn.",
    "lv": "Iš priekio.",
    "level": "Sätze"
  },
  {
    "de": "Nach vorn.",
    "lv": "Į priekį.",
    "level": "Sätze"
  },
  {
    "de": "Von vornherein.",
    "lv": "Pačioje pradžioje.",
    "level": "Sätze"
  },
  {
    "de": "Im Vorteil sein.",
    "lv": "Būti palankesnėje padėtyje.",
    "level": "Sätze"
  },
  {
    "de": "Wach sein.",
    "lv": "Būti pabudusiam.",
    "level": "Sätze"
  },
  {
    "de": "Wach werden.",
    "lv": "Pabusti.",
    "level": "Sätze"
  },
  {
    "de": "Auf Wache sein.",
    "lv": "Stovėti sargyboje.",
    "level": "Sätze"
  },
  {
    "de": "Während eines Jahres.",
    "lv": "Metų laikotarpiu.",
    "level": "Sätze"
  },
  {
    "de": "Während des Krieges.",
    "lv": "Karo metu.",
    "level": "Sätze"
  },
  {
    "de": "Gegen eine Wand reden.",
    "lv": "Kalbėti veltui.",
    "level": "Sätze"
  },
  {
    "de": "Hier haben die Wände Ohren.",
    "lv": "Čia ir sienos turi ausis.",
    "level": "Sätze"
  },
  {
    "de": "Bis wann?",
    "lv": "Iki kurio laiko?",
    "level": "Sätze"
  },
  {
    "de": "Es ist warm.",
    "lv": "Yra šilta.",
    "level": "Sätze"
  },
  {
    "de": "Auf eine Nachricht warten.",
    "lv": "Laukti žinios.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie?",
    "lv": "Ko jūs norite?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein...?",
    "lv": "Koks...? • Kas per...?",
    "level": "Sätze"
  },
  {
    "de": "Auf halbem Wege.",
    "lv": "Pusiaukelėje.",
    "level": "Sätze"
  },
  {
    "de": "Auf diesem Wege.",
    "lv": "Tokiu būdu. • Tokiomis priemonėmis",
    "level": "Sätze"
  },
  {
    "de": "Auf friedlichem Wege.",
    "lv": "Taikiu būdu.",
    "level": "Sätze"
  },
  {
    "de": "Unserer Freundschaft wegen.",
    "lv": "Dėl mūsų draugystės.",
    "level": "Sätze"
  },
  {
    "de": "Von Rechts wegen.",
    "lv": "Pagal teisingumą.",
    "level": "Sätze"
  },
  {
    "de": "Weh tun.",
    "lv": "Skaudėti.",
    "level": "Sätze"
  },
  {
    "de": "Zu Weihnachten.",
    "lv": "Per Kalėdas.",
    "level": "Sätze"
  },
  {
    "de": "Auf welche Weise?",
    "lv": "Kokiu būdu?",
    "level": "Sätze"
  },
  {
    "de": "Art und Weise.",
    "lv": "Būdas.",
    "level": "Sätze"
  },
  {
    "de": "Ohne weiteres.",
    "lv": "Tuoj pat. • Nedelsiant",
    "level": "Sätze"
  },
  {
    "de": "Bis auf weiteres.",
    "lv": "Iki kito karto.",
    "level": "Sätze"
  },
  {
    "de": "Und so weiter.",
    "lv": "Ir taip toliau.",
    "level": "Sätze"
  },
  {
    "de": "Weiter nichts.",
    "lv": "Nieko daugiau.",
    "level": "Sätze"
  },
  {
    "de": "An welchem Tag?",
    "lv": "Kurią dieną?",
    "level": "Sätze"
  },
  {
    "de": "Alle Welt.",
    "lv": "Visas pasaulis. • Visi",
    "level": "Sätze"
  },
  {
    "de": "In wenigen Tagen.",
    "lv": "Per kelias dienas.",
    "level": "Sätze"
  },
  {
    "de": "Zu wenig.",
    "lv": "Per mažai.",
    "level": "Sätze"
  },
  {
    "de": "Wenn auch.",
    "lv": "Nors ir.",
    "level": "Sätze"
  },
  {
    "de": "Wer da?",
    "lv": "Kas tenai?",
    "level": "Sätze"
  },
  {
    "de": "Gesammelte Werke von Schiller.",
    "lv": "Šilerio surinkti raštai.",
    "level": "Sätze"
  },
  {
    "de": "Ausgewählte Werke.",
    "lv": "Darbų rinktinė.",
    "level": "Sätze"
  },
  {
    "de": "Er ist wert, dass...",
    "lv": "Jis yra nusipelnęs, kad...",
    "level": "Sätze"
  },
  {
    "de": "Es ist zwei Euro wert.",
    "lv": "Tai kainuoja du eurus.",
    "level": "Sätze"
  },
  {
    "de": "Nach Westen.",
    "lv": "Į vakarus.",
    "level": "Sätze"
  },
  {
    "de": "Von Westen.",
    "lv": "Iš vakarų.",
    "level": "Sätze"
  },
  {
    "de": "In Wettbewerb treten.",
    "lv": "Dalyvauti varžybose.",
    "level": "Sätze"
  },
  {
    "de": "Um die Wette laufen.",
    "lv": "Lenktyniauti bėgime.",
    "level": "Sätze"
  },
  {
    "de": "Was gilt die Wette?",
    "lv": "Dėl ko lažinamės?",
    "level": "Sätze"
  },
  {
    "de": "Wie wird das Wetter?",
    "lv": "Koks bus oras?",
    "level": "Sätze"
  },
  {
    "de": "Wettkampf im Turnen.",
    "lv": "Varžybos gimnastikoje.",
    "level": "Sätze"
  },
  {
    "de": "Wider meinen Willen.",
    "lv": "Prieš mano valią.",
    "level": "Sätze"
  },
  {
    "de": "Widerspruch erheben.",
    "lv": "Protestuoti. • Kelti prieštaravimus",
    "level": "Sätze"
  },
  {
    "de": "Wie alt ist er?",
    "lv": "Kiek jam metų?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange?",
    "lv": "Kiek ilgai?",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiederhören!",
    "lv": "Iki pasigirdimo!",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiedersehen!",
    "lv": "Iki pasimatymo!",
    "level": "Sätze"
  },
  {
    "de": "Wilde Tiere.",
    "lv": "Laukiniai gyvūnai.",
    "level": "Sätze"
  },
  {
    "de": "Herzlich willkommen!",
    "lv": "Nuoširdžiai sveikinami!",
    "level": "Sätze"
  },
  {
    "de": "Du musst ziehen.",
    "lv": "Tavo ėjimas.",
    "level": "Sätze"
  },
  {
    "de": "Es zieht.",
    "lv": "Trauk.",
    "level": "Sätze"
  },
  {
    "de": "Ziemlich kalt.",
    "lv": "Gana šalta.",
    "level": "Sätze"
  },
  {
    "de": "Zipfel einer Wurst.",
    "lv": "Dešros galiukas.",
    "level": "Sätze"
  },
  {
    "de": "Zu ihm gehen.",
    "lv": "Eiti pas jį.",
    "level": "Sätze"
  },
  {
    "de": "Zur Schule gehen.",
    "lv": "Eiti į mokyklą.",
    "level": "Sätze"
  },
  {
    "de": "Zu Hause bleiben.",
    "lv": "Likti namuose.",
    "level": "Sätze"
  },
  {
    "de": "Von Tag zu Tag.",
    "lv": "Dieną iš dienos.",
    "level": "Sätze"
  },
  {
    "de": "Zum Glück.",
    "lv": "Laimei.",
    "level": "Sätze"
  },
  {
    "de": "Wasser zum Trinken.",
    "lv": "Geriamasis vanduo.",
    "level": "Sätze"
  },
  {
    "de": "Zu Fuß.",
    "lv": "Pėsčiomis.",
    "level": "Sätze"
  },
  {
    "de": "Zu Pferde.",
    "lv": "Jojant.",
    "level": "Sätze"
  },
  {
    "de": "Zu Rad.",
    "lv": "Dviračiu.",
    "level": "Sätze"
  },
  {
    "de": "Es hörte auf zu regnen.",
    "lv": "Lietus perstojo lyti.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe noch viel zu tun.",
    "lv": "Man dar daug darbo.",
    "level": "Sätze"
  },
  {
    "de": "Zu früh.",
    "lv": "Per anksti.",
    "level": "Sätze"
  },
  {
    "de": "Zu groß.",
    "lv": "Per didelis.",
    "level": "Sätze"
  },
  {
    "de": "Mit den Achseln zucken.",
    "lv": "Gūžtelėti pečiais.",
    "level": "Sätze"
  },
  {
    "de": "In einem Zug trinken.",
    "lv": "Išgerti vienu ypu.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde gehen.",
    "lv": "Žūti.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde legen.",
    "lv": "Grįsti. • Imti kaip pagrindą.",
    "level": "Sätze"
  },
  {
    "de": "Zum ersten Mal.",
    "lv": "Pirmą kartą.",
    "level": "Sätze"
  },
  {
    "de": "Machen Sie bitte die Tür zu!",
    "lv": "Uždarykite, prašau, duris!",
    "level": "Sätze"
  },
  {
    "de": "Er hat zugenommen.",
    "lv": "Jis priaugo svorio.",
    "level": "Sätze"
  },
  {
    "de": "Die Tage nehmen zu.",
    "lv": "Dienos tampa ilgesnės.",
    "level": "Sätze"
  },
  {
    "de": "Zusammenhängen mit etwas.",
    "lv": "Būti susijusiam su kuo nors.",
    "level": "Sätze"
  },
  {
    "de": "Die Tür ist zu.",
    "lv": "Durys uždarytos.",
    "level": "Sätze"
  },
  {
    "de": "Das hätte ich ihm nicht zugetraut.",
    "lv": "To iš jo nebūčiau tikėjęsis.",
    "level": "Sätze"
  },
  {
    "de": "Freier Zutritt.",
    "lv": "Laisvas įėjimas.",
    "level": "Sätze"
  },
  {
    "de": "Zutritt verboten!",
    "lv": "Įėjimas draudžiamas!",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu viel!",
    "lv": "Tai per daug!",
    "level": "Sätze"
  },
  {
    "de": "Zuwider werden.",
    "lv": "Pasidaryti atgrasiam. • Pabosti",
    "level": "Sätze"
  },
  {
    "de": "Und zwar.",
    "lv": "Būtent.",
    "level": "Sätze"
  },
  {
    "de": "Es steht außer Zweifel.",
    "lv": "Nėra jokių abejonių.",
    "level": "Sätze"
  },
  {
    "de": "Ohne Zweifel.",
    "lv": "Be dvejonių.",
    "level": "Sätze"
  },
  {
    "de": "Zum Zweiten.",
    "lv": "Antra.",
    "level": "Sätze"
  },
  {
    "de": "Frohes neues Jahr!",
    "lv": "Laimingų Naujųjų metų!",
    "level": "Sätze"
  },
  {
    "de": "Herzlichen Glückwunsch zum Geburtstag!",
    "lv": "Laimingo gimtadienio!",
    "level": "Sätze"
  },
  {
    "de": "Gute Reise!",
    "lv": "Laimingos kelionės!",
    "level": "Sätze"
  },
  {
    "de": "Es freut mich, Sie kennenzulernen.",
    "lv": "Džiaugiuosi galėdamas su Jumis susipažinti.",
    "level": "Sätze"
  },
  {
    "de": "Wären Sie bitte so nett?",
    "lv": "Ar galėtumėte būti tiek malonus?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin Ihnen sehr dankbar.",
    "lv": "Esu Jums labai dėkingas.",
    "level": "Sätze"
  },
  {
    "de": "Setzt euch bitte hin!",
    "lv": "Sėskitės, prašau!",
    "level": "Sätze"
  },
  {
    "de": "Ben, komm bitte an die Tafel!",
    "lv": "Ben, eik, prašau, prie lentos!",
    "level": "Sätze"
  },
  {
    "de": "Schlagt bitte die Lehrbücher auf!",
    "lv": "Atsiverskite, prašau, vadovėlius!",
    "level": "Sätze"
  },
  {
    "de": "Geht bitte in die Sporthalle!",
    "lv": "Nueikite, prašau, į sporto salę!",
    "level": "Sätze"
  },
  {
    "de": "Schläfst du noch?",
    "lv": "Ar tu dar miegi?",
    "level": "Sätze"
  },
  {
    "de": "Schlafen Sie noch?",
    "lv": "Ar Jūs dar miegate?",
    "level": "Sätze"
  },
  {
    "de": "Er ist fest eingeschlafen.",
    "lv": "Jis kietai įmigęs.",
    "level": "Sätze"
  },
  {
    "de": "Wecke ihn bitte auf, es ist schon spät!",
    "lv": "Prašau, pažadink jį, jau vėlu!",
    "level": "Sätze"
  },
  {
    "de": "Es tut mir sehr leid!",
    "lv": "Man labai gaila!",
    "level": "Sätze"
  },
  {
    "de": "Vielen Dank!",
    "lv": "Labai dėkoju!",
    "level": "Sätze"
  },
  {
    "de": "Finn, fang bitte an!",
    "lv": "Finn, pradėk, prašau!",
    "level": "Sätze"
  },
  {
    "de": "Lest bitte mit!",
    "lv": "Skaitykite drauge, prašau!",
    "level": "Sätze"
  },
  {
    "de": "Emma, schau bitte nicht aus dem Fenster!",
    "lv": "Emma, prašau, nesižiūrėk pro langą!",
    "level": "Sätze"
  },
  {
    "de": "Jonas, bring bitte die Hefte!",
    "lv": "Jonas, atnešk, prašau, sąsiuvinius!",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte zurück an deinen Platz!",
    "lv": "Eik atgal į savo vietą!",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb acht.",
    "lv": "Pusė aštuonių.",
    "level": "Sätze"
  },
  {
    "de": "Wann wachst du gewöhnlich auf?",
    "lv": "Kada tu paprastai pabundi?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe gleich auf.",
    "lv": "Aš tuoj keliuosi.",
    "level": "Sätze"
  },
  {
    "de": "Steh auf, Hanna, es klingelt!",
    "lv": "Kelkis, Hanna, skamba!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich noch fünf Minuten schlafen!",
    "lv": "Leisk man pamiegoti dar penkias minutes!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss nicht, das Zimmer zu lüften!",
    "lv": "Neužmiršk išvėdinti kambario!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist das Handtuch?",
    "lv": "Kur yra rankšluostis?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mir die Zähne putzen.",
    "lv": "Noriu išsivalyti dantis.",
    "level": "Sätze"
  },
  {
    "de": "Mit was putzt du dir die Zähne?",
    "lv": "Kuo tu valai dantis?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mich anziehen.",
    "lv": "Noriu apsirengti.",
    "level": "Sätze"
  },
  {
    "de": "Zieh dich bitte schnell an!",
    "lv": "Apsirenk greitai, prašau!",
    "level": "Sätze"
  },
  {
    "de": "Kleide dich wärmer an, draußen ist es kühl.",
    "lv": "Apsirenk šilčiau, lauke vėsu.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, wie geht es dir?",
    "lv": "Labas rytas, kaip sekasi?",
    "level": "Sätze"
  },
  {
    "de": "Mir geht es gut, danke.",
    "lv": "Man sekasi gerai, dėkui.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es Neues?",
    "lv": "Kas naujo?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein Chaos hier!",
    "lv": "Kokia netvarka čia!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich beim Aufräumen helfen?",
    "lv": "Ar galiu padėti sutvarkyti?",
    "level": "Sätze"
  },
  {
    "de": "Was trinkst du morgens, Kaffee oder Tee?",
    "lv": "Ką tu ryte geri, kavą ar arbatą?",
    "level": "Sätze"
  },
  {
    "de": "Gewöhnlich trinke ich morgens eine Tasse Kaffee.",
    "lv": "Paprastai ryte išgeriu puodelį kavos.",
    "level": "Sätze"
  },
  {
    "de": "Am liebsten trinke ich schwarzen Kaffee.",
    "lv": "Mieliausiai geriu juodą kavą.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, hast du gut geschlafen?",
    "lv": "Labas rytas, ar gerai miegojai?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin noch sehr müde.",
    "lv": "Aš vis dar labai pavargęs.",
    "level": "Sätze"
  },
  {
    "de": "Willst du Kaffee oder Milch?",
    "lv": "Nori kavos ar pieno?",
    "level": "Sätze"
  },
  {
    "de": "Gib mir bitte ein Brötchen mit Käse.",
    "lv": "Duok man, prašau, bandelę su sūriu.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss jetzt los!",
    "lv": "Man dabar reikia eiti!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss dein Frühstück nicht!",
    "lv": "Neužmiršk pusryčių!",
    "level": "Sätze"
  },
  {
    "de": "Klara, deck bitte den Tisch!",
    "lv": "Klara, prašau, dengk stalą!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss die Servietten nicht!",
    "lv": "Neužmiršk servetėlių!",
    "level": "Sätze"
  },
  {
    "de": "Wann esst ihr zu Mittag?",
    "lv": "Kada jūs valgote pietus?",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit zu essen.",
    "lv": "Laikas valgyti.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es heute zu Mittag?",
    "lv": "Kas šiandien pietums?",
    "level": "Sätze"
  },
  {
    "de": "Wie schmeckt dir die Suppe?",
    "lv": "Kaip tau patinka sriuba?",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt ist sie etwas zu salzig.",
    "lv": "Atvirai kalbant, ji kiek per sūri.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dir ein Stück Brot geben?",
    "lv": "Ar galiu duoti tau riekelę duonos?",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich habe schon.",
    "lv": "Dėkui, aš jau turiu.",
    "level": "Sätze"
  },
  {
    "de": "Das Fleisch schmeckt ausgezeichnet.",
    "lv": "Mėsa labai skani.",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich bin schon satt.",
    "lv": "Dėkui, aš jau pavalgęs.",
    "level": "Sätze"
  },
  {
    "de": "Heute haben wir Besuch.",
    "lv": "Šiandien pas mus svečiai.",
    "level": "Sätze"
  },
  {
    "de": "Bist du heute Abend frei?",
    "lv": "Ar tu šįvakar laisvas?",
    "level": "Sätze"
  },
  {
    "de": "Komm doch heute zum Mittagessen vorbei!",
    "lv": "Ateik šiandien pietų į svečius!",
    "level": "Sätze"
  },
  {
    "de": "Setzen wir uns an den Tisch.",
    "lv": "Sėskimės prie stalo.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, bedien dich!",
    "lv": "Prašau, valgyk, kiek norisi!",
    "level": "Sätze"
  },
  {
    "de": "Stört dich das Rauchen?",
    "lv": "Ar tau trukdo rūkymas?",
    "level": "Sätze"
  },
  {
    "de": "Danke für die nette Aufnahme!",
    "lv": "Dėkui už malonų priėmimą!",
    "level": "Sätze"
  },
  {
    "de": "Wann gehst du ins Bett?",
    "lv": "Kada tu eini miegoti?",
    "level": "Sätze"
  },
  {
    "de": "Wenn ich von der Arbeit komme, bin ich immer müde.",
    "lv": "Kai parvykstu iš darbo, visada esu pavargęs.",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, ins Bett zu gehen.",
    "lv": "Laikas eiti miegoti.",
    "level": "Sätze"
  },
  {
    "de": "Es ist schönes Wetter.",
    "lv": "Oras gražus.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mit mir spazieren gehen?",
    "lv": "Nori pasivaikščioti su manimi?",
    "level": "Sätze"
  },
  {
    "de": "Sieh mal, es wird gleich regnen.",
    "lv": "Žiūrėk, tuoj lis.",
    "level": "Sätze"
  },
  {
    "de": "Nimm den Regenschirm mit!",
    "lv": "Pasiimk lietaus skėtį!",
    "level": "Sätze"
  },
  {
    "de": "Es regnet.",
    "lv": "Lyja lietus.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin schon ganz nass.",
    "lv": "Aš jau visiškai šlapias.",
    "level": "Sätze"
  },
  {
    "de": "Glaubst du, dass es den ganzen Tag regnen wird?",
    "lv": "Manai, kad lis visą dieną?",
    "level": "Sätze"
  },
  {
    "de": "Es hört auf zu regnen.",
    "lv": "Lietus baigia lyti.",
    "level": "Sätze"
  },
  {
    "de": "Die Sonne scheint wieder.",
    "lv": "Saulė vėl šviečia.",
    "level": "Sätze"
  },
  {
    "de": "Es ist sehr warm.",
    "lv": "Labai karšta.",
    "level": "Sätze"
  },
  {
    "de": "Es sieht nach Regen aus.",
    "lv": "Panašu, kad lis.",
    "level": "Sätze"
  },
  {
    "de": "Wir bekommen gleich ein Gewitter.",
    "lv": "Mes greitai gausime audrą.",
    "level": "Sätze"
  },
  {
    "de": "Das Gewitter zieht vorüber.",
    "lv": "Audra praėjo.",
    "level": "Sätze"
  },
  {
    "de": "Die Wolken verziehen sich.",
    "lv": "Debesys sklaidosi.",
    "level": "Sätze"
  },
  {
    "de": "Siehst du den Regenbogen?",
    "lv": "Matai vaivorykštę?",
    "level": "Sätze"
  },
  {
    "de": "Der Winter ist da, es hat geschneit.",
    "lv": "Žiema atėjo, naktį snigo.",
    "level": "Sätze"
  },
  {
    "de": "Es schneit.",
    "lv": "Sninga.",
    "level": "Sätze"
  },
  {
    "de": "Wie schön ist es im Wald im Winter!",
    "lv": "Kaip gražu miške žiemą!",
    "level": "Sätze"
  },
  {
    "de": "Mir ist kalt, ich friere.",
    "lv": "Man šalta, aš šąlu.",
    "level": "Sätze"
  },
  {
    "de": "Draußen ist Glatteis, pass auf!",
    "lv": "Lauke slidu, būk atsargus!",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir auf die Eisbahn gehen?",
    "lv": "Eime pasičiuožinėti?",
    "level": "Sätze"
  },
  {
    "de": "Zieh die Jacke an, du kannst dich erkälten.",
    "lv": "Užsivilk striukę, gali peršalti.",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb sieben.",
    "lv": "Pusė septynių.",
    "level": "Sätze"
  },
  {
    "de": "Meine Uhr geht fünf Minuten vor.",
    "lv": "Mano laikrodis paskubėjęs penkiomis minutėmis.",
    "level": "Sätze"
  },
  {
    "de": "Weck mich morgen früh um sieben Uhr!",
    "lv": "Pažadink mane rytoj septintą valandą!",
    "level": "Sätze"
  },
  {
    "de": "Was ist heute für ein Datum?",
    "lv": "Kokia šiandien data?",
    "level": "Sätze"
  },
  {
    "de": "Heute ist der elfte Juli.",
    "lv": "Šiandien liepos vienuolikta.",
    "level": "Sätze"
  },
  {
    "de": "Was machst du gewöhnlich am Abend?",
    "lv": "Ką tu paprastai darai vakarais?",
    "level": "Sätze"
  },
  {
    "de": "Es ist schon lange her, dass wir uns gesehen haben.",
    "lv": "Jau seniai nesimatėme.",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es dir?",
    "lv": "Kaip tau sekasi?",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, ich möchte etwas mit dir besprechen.",
    "lv": "Atleisk, noriu su tavimi kai ką aptarti.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir spazieren!",
    "lv": "Eime pasivaikščioti!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Lust, mit mir in den Park zu gehen?",
    "lv": "Nori kartu su manimi nueiti į parką?",
    "level": "Sätze"
  },
  {
    "de": "Ich komme, um dich zum Spaziergang abzuholen.",
    "lv": "Aš atėjau pasiimti tave pasivaikščioti.",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte etwas langsamer, ich kann dir nicht folgen!",
    "lv": "Eik kiek lėčiau, negaliu tavęs pavyti!",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zum ersten Mal in dieser Gegend.",
    "lv": "Aš čia pirmą kartą.",
    "level": "Sätze"
  },
  {
    "de": "Ruhen wir uns ein wenig aus.",
    "lv": "Truputį pasilsėsime.",
    "level": "Sätze"
  },
  {
    "de": "Jetzt können wir zurückgehen.",
    "lv": "Dabar galime keliauti atgal.",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt bin ich ziemlich müde.",
    "lv": "Atvirai kalbant, esu gana pavargęs.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, wo ist die nächste U-Bahn-Station?",
    "lv": "Atleisk, kur yra artimiausia metro stotis?",
    "level": "Sätze"
  },
  {
    "de": "Welcher ist der kürzeste Weg?",
    "lv": "Kuris kelias trumpiausias?",
    "level": "Sätze"
  },
  {
    "de": "Geh hier die zweite Straße links und dann immer geradeaus.",
    "lv": "Čia pasuk į antrą gatvę kairėje ir eik tiesiai į priekį.",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich am schnellsten zum Bahnhof?",
    "lv": "Kaip greičiausiai nusigauti į stotį?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe vor, morgen zu verreisen.",
    "lv": "Esu sumanęs rytoj išvažiuoti.",
    "level": "Sätze"
  },
  {
    "de": "Wohin willst du fahren?",
    "lv": "Kur tu norėtum vykti?",
    "level": "Sätze"
  },
  {
    "de": "Reist du geschäftlich oder privat?",
    "lv": "Tu vyksti dėl darbo, ar atsipūsti?",
    "level": "Sätze"
  },
  {
    "de": "Finn fährt bis Berlin mit, dann geht er ans Meer.",
    "lv": "Finn vyksta iki Berlyno, tada leisis prie jūros.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt das Schiff ab?",
    "lv": "Kada išplaukia laivas?",
    "level": "Sätze"
  },
  {
    "de": "In einer halben Stunde.",
    "lv": "Po pusvalandžio.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich noch eine Kabine bekommen?",
    "lv": "Ar galiu dar gauti kajutę?",
    "level": "Sätze"
  },
  {
    "de": "Vergiss deinen Pass nicht!",
    "lv": "Neužmiršk paso!",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, den Koffer zu packen.",
    "lv": "Laikas susikrauti lagaminą.",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt um halb sieben ab.",
    "lv": "Traukinys išvažiuoja pusę septynių.",
    "level": "Sätze"
  },
  {
    "de": "Hol mir bitte ein Taxi, ich verpasse sonst den Zug!",
    "lv": "Pašauk, prašau, taksi, kitaip praleisiu traukinį!",
    "level": "Sätze"
  },
  {
    "de": "Fahr bitte zum Bahnhof!",
    "lv": "Nuvežk, prašau, į stotį!",
    "level": "Sätze"
  },
  {
    "de": "Ich muss mich beeilen.",
    "lv": "Man reikia skubėti.",
    "level": "Sätze"
  },
  {
    "de": "Ist der Schalter schon offen?",
    "lv": "Ar kasa jau atidaryta?",
    "level": "Sätze"
  },
  {
    "de": "Eine Fahrkarte nach Köln, bitte.",
    "lv": "Vieną bilietą iki Kelno, prašau.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt der Zug ab?",
    "lv": "Kada išvyksta traukinys?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt gleich ab.",
    "lv": "Traukinys tuoj išvyksta.",
    "level": "Sätze"
  },
  {
    "de": "Muss ich in Koblenz umsteigen?",
    "lv": "Ar man reikia persėsti Koblence?",
    "level": "Sätze"
  },
  {
    "de": "Ja, dort musst du umsteigen.",
    "lv": "Taip, tau ten reikia persėsti.",
    "level": "Sätze"
  },
  {
    "de": "Ist dieser Platz frei?",
    "lv": "Ar šita vieta laisva?",
    "level": "Sätze"
  },
  {
    "de": "Nein, hier sitzt niemand.",
    "lv": "Ne, čia niekas nesėdi.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der Bahnsteigkartenautomat?",
    "lv": "Kur yra automatas perono bilietams?",
    "level": "Sätze"
  },
  {
    "de": "Stell mein Handgepäck ins Gepäcknetz.",
    "lv": "Padėk mano rankinį bagažą į lentyną.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das Fenster aufmachen?",
    "lv": "Ar galiu atidaryti langą?",
    "level": "Sätze"
  },
  {
    "de": "Es zieht, schließ bitte das Fenster!",
    "lv": "Užtrauk ir uždaryk, prašau, langą!",
    "level": "Sätze"
  },
  {
    "de": "Welche ist die nächste Station?",
    "lv": "Kokia yra kita stotelė?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange hält der Zug?",
    "lv": "Kiek ilgai traukinys stovi?",
    "level": "Sätze"
  },
  {
    "de": "Wo muss ich umsteigen?",
    "lv": "Kur man reikia persėsti?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug hat Verspätung.",
    "lv": "Traukinys vėluoja.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Wagen ist für Nichtraucher.",
    "lv": "Šis vagonas nerūkantiesiems.",
    "level": "Sätze"
  },
  {
    "de": "Wir fahren jetzt über die Grenze.",
    "lv": "Dabar važiuojame per sieną.",
    "level": "Sätze"
  },
  {
    "de": "Hast du etwas zu verzollen?",
    "lv": "Ar turi ką deklaruoti muitinei?",
    "level": "Sätze"
  },
  {
    "de": "Wir sind in Berlin angekommen.",
    "lv": "Mes atvykome į Berlyną.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir ein gutes Hotel empfehlen?",
    "lv": "Ar gali pasiūlyti gerą viešbutį?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie freie Zimmer?",
    "lv": "Ar turite laisvų kambarių?",
    "level": "Sätze"
  },
  {
    "de": "Ein Zimmer mit zwei Betten, bitte.",
    "lv": "Kambarį su dviem lovom, prašau.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Zimmer pro Nacht?",
    "lv": "Kiek kainuoja kambarys už naktį?",
    "level": "Sätze"
  },
  {
    "de": "Morgen reise ich ab. Weck mich um sieben Uhr!",
    "lv": "Rytoj išvažiuoju. Pažadink mane septintą valandą!",
    "level": "Sätze"
  },
  {
    "de": "Die Rechnung, bitte!",
    "lv": "Sąskaitą, prašau!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Stadtbibliothek?",
    "lv": "Kur yra miesto biblioteka?",
    "level": "Sätze"
  },
  {
    "de": "Wann hat das Museum geöffnet?",
    "lv": "Kada muziejus atviras?",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir ins Museum gehen?",
    "lv": "Eime į muziejų?",
    "level": "Sätze"
  },
  {
    "de": "Fahren wir mit dem Bus oder der U-Bahn?",
    "lv": "Važiuojame autobusu ar metro?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die nächste Bushaltestelle?",
    "lv": "Kur yra artimiausia autobuso stotelė?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe großen Hunger.",
    "lv": "Esu labai išalkęs.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir zusammen essen?",
    "lv": "Eime pavalgyti kartu?",
    "level": "Sätze"
  },
  {
    "de": "Kellner, die Speisekarte, bitte!",
    "lv": "Padavėjau, meniu, prašau!",
    "level": "Sätze"
  },
  {
    "de": "Ist der Fisch frisch?",
    "lv": "Ar žuvis šviežia?",
    "level": "Sätze"
  },
  {
    "de": "Das schmeckt ausgezeichnet!",
    "lv": "Labai skanu!",
    "level": "Sätze"
  },
  {
    "de": "Kellner, zahlen bitte!",
    "lv": "Padavėjau, prašau, apmokėti!",
    "level": "Sätze"
  },
  {
    "de": "Ich gehe ins Café einen Kaffee trinken.",
    "lv": "Nueisiu į kavinę išgerti kavos.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mitkommen?",
    "lv": "Nori eiti kartu?",
    "level": "Sätze"
  },
  {
    "de": "Eine Tasse Kaffee mit Milch, bitte!",
    "lv": "Puodelį kavos su pienu, prašau!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneller, ich habe es eilig!",
    "lv": "Greičiau, prašau, man reikia skubėti!",
    "level": "Sätze"
  },
  {
    "de": "Lass deinen Kaffee nicht kalt werden!",
    "lv": "Neleisk kavai atšalti!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie etwas Erfrischendes?",
    "lv": "Ar turite ką nors gaivaus?",
    "level": "Sätze"
  },
  {
    "de": "Eine Portion Eis, bitte!",
    "lv": "Porciją ledų, prašau!",
    "level": "Sätze"
  },
  {
    "de": "Heute Morgen habe ich einen Brief bekommen.",
    "lv": "Šįrytą gavau laišką.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss ihm gleich schreiben.",
    "lv": "Man jam reikia tuoj pat rašyti.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der nächste Briefkasten?",
    "lv": "Kur yra artimiausia pašto dėžutė?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Post?",
    "lv": "Kur yra pašto skyrius?",
    "level": "Sätze"
  },
  {
    "de": "Erinnere mich morgen daran zu schreiben!",
    "lv": "Priminki man rytoj pasirašyti!",
    "level": "Sätze"
  },
  {
    "de": "Werfen Sie bitte diesen Brief in den Briefkasten.",
    "lv": "Prašau, įmesk šį laišką į pašto dėžutę!",
    "level": "Sätze"
  },
  {
    "de": "Hallo, hier spricht Emma.",
    "lv": "Sveiki, kalba Emma.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich dich später anrufen?",
    "lv": "Ar galiu tau vėliau paskambinti?",
    "level": "Sätze"
  },
  {
    "de": "Muss ich lange warten?",
    "lv": "Ar man ilgai reikia laukti?",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneiden Sie mir die Haare.",
    "lv": "Prašau, apkirpkite man plaukus.",
    "level": "Sätze"
  },
  {
    "de": "Hinten bitte nicht zu kurz.",
    "lv": "Iš galo, prašau, ne per trumpai.",
    "level": "Sätze"
  },
  {
    "de": "Wann beginnt die Vorstellung?",
    "lv": "Kada prasideda spektaklis?",
    "level": "Sätze"
  },
  {
    "de": "Es fängt um halb acht an.",
    "lv": "Prasideda pusę aštuonių.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind ausverkauft.",
    "lv": "Visi bilietai išparduoti.",
    "level": "Sätze"
  },
  {
    "de": "Drei Karten, bitte!",
    "lv": "Tris bilietus, prašau!",
    "level": "Sätze"
  },
  {
    "de": "Wir lassen die Jacken in der Garderobe.",
    "lv": "Paliksime striukes rūbinėje.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schnell, der Vorhang geht gleich auf!",
    "lv": "Greičiau, prašau, uždanga tuoj atsivers!",
    "level": "Sätze"
  },
  {
    "de": "Der Vorhang fällt.",
    "lv": "Uždanga krenta.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dich zum Tanz bitten?",
    "lv": "Ar galiu pakviesti šokti?",
    "level": "Sätze"
  },
  {
    "de": "Wann ist eure Hochzeit?",
    "lv": "Kada bus jūsų vestuvės?",
    "level": "Sätze"
  },
  {
    "de": "Ich suche eine Wohnung.",
    "lv": "Ieškau buto.",
    "level": "Sätze"
  },
  {
    "de": "Ist in diesem Haus eine Wohnung frei?",
    "lv": "Ar šiame name yra laisvas butas?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet die Miete?",
    "lv": "Kiek kainuoja nuoma?",
    "level": "Sätze"
  },
  {
    "de": "Die Wohnung hat drei Zimmer und eine Küche.",
    "lv": "Butas turi tris kambarius ir virtuvę.",
    "level": "Sätze"
  },
  {
    "de": "Heute ziehen wir um.",
    "lv": "Šiandien persikeliame.",
    "level": "Sätze"
  },
  {
    "de": "Mia, pack die Sachen bitte in Kisten!",
    "lv": "Mia, sudėk, prašau, daiktus į dėžes!",
    "level": "Sätze"
  },
  {
    "de": "Hast du alles eingepackt?",
    "lv": "Ar viskas jau sudėta į dėžes?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe mit meinem Freund in Kontakt.",
    "lv": "Susirašinėju su savo draugu.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir ins Theater?",
    "lv": "Eime į teatrą?",
    "level": "Sätze"
  },
  {
    "de": "Ist alles eingeladen?",
    "lv": "Ar viskas pakrauta?",
    "level": "Sätze"
  },
  {
    "de": "Welch schöne Aussicht!",
    "lv": "Koks gražus vaizdas!",
    "level": "Sätze"
  },
  {
    "de": "Nun können wir alles wieder aufräumen.",
    "lv": "Dabar galime viską vėl sutvarkyti.",
    "level": "Sätze"
  },
  {
    "de": "Wie viele Zimmer habt ihr?",
    "lv": "Kiek jūs turite kambarių?",
    "level": "Sätze"
  },
  {
    "de": "Im Sommer fahre ich ans Meer.",
    "lv": "Vasarą vyksiu prie jūros.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du schwimmen?",
    "lv": "Ar tu moki plaukti?",
    "level": "Sätze"
  },
  {
    "de": "Schwimm nicht zu weit hinaus!",
    "lv": "Neplauk per toli!",
    "level": "Sätze"
  },
  {
    "de": "Badest du jeden Tag?",
    "lv": "Ar tu plaukioji kasdien?",
    "level": "Sätze"
  },
  {
    "de": "Bei schönem Wetter gehe ich angeln.",
    "lv": "Jei oras geras, einu žvejoti.",
    "level": "Sätze"
  },
  {
    "de": "Wie sieht er aus?",
    "lv": "Kaip jis atrodo?",
    "level": "Sätze"
  },
  {
    "de": "Er hat sich aber recht verändert.",
    "lv": "Jis vis tiek gana pasikeitė.",
    "level": "Sätze"
  },
  {
    "de": "Wie ist er als Mensch?",
    "lv": "Koks jis žmogus?",
    "level": "Sätze"
  },
  {
    "de": "Er ist immer nett und freundlich.",
    "lv": "Jis visada malonus ir draugiškas.",
    "level": "Sätze"
  },
  {
    "de": "Ich fühle mich nicht wohl.",
    "lv": "Jaučiuosi blogai.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe starke Kopfschmerzen.",
    "lv": "Man labai skauda galvą.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe mich erkältet.",
    "lv": "Aš peršalęs.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Schnupfen.",
    "lv": "Man sloga.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist schwindlig.",
    "lv": "Man svaigsta galva.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Arzt gehen.",
    "lv": "Man reikia eiti pas gydytoją.",
    "level": "Sätze"
  },
  {
    "de": "Leg dich ins Bett!",
    "lv": "Atsigulk į lovą!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Fieber?",
    "lv": "Ar tau karščiuoja?",
    "level": "Sätze"
  },
  {
    "de": "Gestern hatte ich erhöhte Temperatur.",
    "lv": "Vakar man buvo pakilusi temperatūra.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Zahnschmerzen.",
    "lv": "Man skauda dantį.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Zahnarzt gehen.",
    "lv": "Man reikia eiti pas dantistą.",
    "level": "Sätze"
  },
  {
    "de": "Weißt du, dass Finn krank ist?",
    "lv": "Ar žinai, kad Finn serga?",
    "level": "Sätze"
  },
  {
    "de": "Laut Arzt wird er bald wieder gesund.",
    "lv": "Gydytojo nuomone, jis greitai vėl bus sveikas.",
    "level": "Sätze"
  },
  {
    "de": "Ich will meine Wohnung neu möblieren.",
    "lv": "Noriu iš naujo įrengti butą baldais.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das auf Raten kaufen?",
    "lv": "Ar galiu pirkti išsimokėtinai?",
    "level": "Sätze"
  },
  {
    "de": "Bleib im Bett, bis es dir besser geht!",
    "lv": "Pasilik lovoje, kol pasijusi geriau!",
    "level": "Sätze"
  },
  {
    "de": "Noah hat in zwei Wochen schwimmen gelernt.",
    "lv": "Noah per dvi savaites išmoko plaukti.",
    "level": "Sätze"
  },
  {
    "de": "Sei mit dem Essen noch vorsichtig.",
    "lv": "Būk atsargus dar su maistu.",
    "level": "Sätze"
  },
  {
    "de": "Sprichst du Deutsch?",
    "lv": "Ar tu kalbi vokiškai?",
    "level": "Sätze"
  },
  {
    "de": "Ja, ein bisschen.",
    "lv": "Taip, truputį.",
    "level": "Sätze"
  },
  {
    "de": "Du sprichst ziemlich fließend.",
    "lv": "Tu kalbi gana sklandžiai.",
    "level": "Sätze"
  },
  {
    "de": "Wo hast du Deutsch gelernt?",
    "lv": "Kur tu mokeisi vokiečių kalbos?",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme seit einem Jahr Deutschstunden.",
    "lv": "Jau metai lankau vokiečių kalbos pamokas.",
    "level": "Sätze"
  },
  {
    "de": "Ich suche immer Gelegenheit, Deutsch zu sprechen.",
    "lv": "Visada ieškau galimybės pakalbėti vokiškai.",
    "level": "Sätze"
  },
  {
    "de": "Ist das Buch noch vorrätig?",
    "lv": "Ar šita knyga dar yra?",
    "level": "Sätze"
  },
  {
    "de": "Das Buch ist leider ausverkauft.",
    "lv": "Deja, knyga išparduota.",
    "level": "Sätze"
  },
  {
    "de": "Wann erscheint die neue Auflage?",
    "lv": "Kada išeis naujas leidimas?",
    "level": "Sätze"
  },
  {
    "de": "Womit kann ich Ihnen helfen?",
    "lv": "Kuo galiu padėti?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie ganz frische Eier?",
    "lv": "Ar turite šviežių kiaušinių?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die?",
    "lv": "Kiek jie kainuoja?",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu teuer.",
    "lv": "Tai per brangu.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir ein halbes Kilo abwiegen?",
    "lv": "Ar galite pasverti pusę kilogramo?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel muss ich zahlen?",
    "lv": "Kiek man reikia mokėti?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet das Kilo?",
    "lv": "Kiek kainuoja kilogramas?",
    "level": "Sätze"
  },
  {
    "de": "Wiegen Sie mir bitte zwei Kilo ab.",
    "lv": "Pasverkite, prašau, du kilogramus.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch Karotten?",
    "lv": "Ar turite ir morkų?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie gutes Rindfleisch?",
    "lv": "Ar turite gerą jautieną?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir zwei Kilo Hackfleisch.",
    "lv": "Duokite du kilogramus maltos mėsos.",
    "level": "Sätze"
  },
  {
    "de": "Ein Laib Brot, bitte, aber nicht zu knusprig.",
    "lv": "Vieną duonos kepalą, prašau, bet ne per kietą.",
    "level": "Sätze"
  },
  {
    "de": "Das Brot ist frisch gebacken.",
    "lv": "Duona šviežiai kepta.",
    "level": "Sätze"
  },
  {
    "de": "Was für Obst haben Sie heute?",
    "lv": "Kokių vaisių šiandien turite?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die Äpfel?",
    "lv": "Kiek kainuoja obuoliai?",
    "level": "Sätze"
  },
  {
    "de": "Dann nehme ich zwei Kilo Äpfel.",
    "lv": "Tada imsiu du kilogramus obuolių.",
    "level": "Sätze"
  },
  {
    "de": "Die Birnen sind sehr teuer.",
    "lv": "Kriaušės labai brangios.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir alles nach Hause liefern?",
    "lv": "Ar galite viską pristatyti į namus?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie Reis?",
    "lv": "Ar turite ryžių?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir bitte ein Kilo Reis.",
    "lv": "Duokite, prašau, kilogramą ryžių.",
    "level": "Sätze"
  },
  {
    "de": "Danke, diesmal nicht.",
    "lv": "Dėkui, šįkart ne.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet dieser Teppich?",
    "lv": "Kiek kainuoja šis kilimas?",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Möbel in meine Wohnung liefern?",
    "lv": "Ar galite pristatyti baldus į butą?",
    "level": "Sätze"
  },
  {
    "de": "Bitte an der Kasse zahlen.",
    "lv": "Prašau, mokėkite kasoje.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, machen Sie die Rechnung.",
    "lv": "Išrašykite sąskaitą, prašau.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Meter?",
    "lv": "Kiek kainuoja metras?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Stoff gefällt mir.",
    "lv": "Man patinka šis audinys.",
    "level": "Sätze"
  },
  {
    "de": "Schneiden Sie mir bitte drei Meter ab.",
    "lv": "Nupjaukite, prašau, tris metrus.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch andere Muster?",
    "lv": "Ar turite ir kitų pavyzdžių?",
    "level": "Sätze"
  },
  {
    "de": "Diese Farbe gefällt mir nicht.",
    "lv": "Man nepatinka šita spalva.",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir eine hellere.",
    "lv": "Duokite šviesesnę.",
    "level": "Sätze"
  },
  {
    "de": "Was kosten diese Socken?",
    "lv": "Kiek kainuoja šios kojinės?",
    "level": "Sätze"
  },
  {
    "de": "Welche Handschuhe wünschen Sie?",
    "lv": "Kokių pirštinių norėtumėte?",
    "level": "Sätze"
  },
  {
    "de": "Die sind mir etwas zu eng.",
    "lv": "Jos man kiek per siauros.",
    "level": "Sätze"
  },
  {
    "de": "So, nun passen sie gut.",
    "lv": "Šit, dabar tinka gerai.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir einen guten Schneider empfehlen?",
    "lv": "Ar gali pasiūlyti gerą siuvėją?",
    "level": "Sätze"
  },
  {
    "de": "Ich will einen Anzug bestellen.",
    "lv": "Noriu užsisakyti kostiumą.",
    "level": "Sätze"
  },
  {
    "de": "Wann wird er fertig sein?",
    "lv": "Kada bus paruoštas?",
    "level": "Sätze"
  },
  {
    "de": "Der Anzug sitzt gut.",
    "lv": "Kostiumas tinka gerai.",
    "level": "Sätze"
  },
  {
    "de": "Die Hose ist zu lang.",
    "lv": "Kelnės per ilgos.",
    "level": "Sätze"
  },
  {
    "de": "Bitte reinigen und bügeln Sie ihn!",
    "lv": "Prašau, išvalykite ir išlyginkite jį!",
    "level": "Sätze"
  },
  {
    "de": "Wann wird das Kleid fertig sein?",
    "lv": "Kada suknelė bus paruošta?",
    "level": "Sätze"
  },
  {
    "de": "Die Schuhe sind zu eng.",
    "lv": "Batai per siauri.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Schuhe heute reparieren?",
    "lv": "Ar galite šiandien pataisyti batus?",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich die Schuhe abholen?",
    "lv": "Kada galiu paimti batus?",
    "level": "Sätze"
  },
  {
    "de": "Meine Armbanduhr funktioniert nicht.",
    "lv": "Mano rankinis laikrodis neveikia.",
    "level": "Sätze"
  },
  {
    "de": "Sie geht fünf Minuten vor.",
    "lv": "Jis paskubėjęs penkiomis minutėmis.",
    "level": "Sätze"
  },
  {
    "de": "Bist du kurzsichtig oder weitsichtig?",
    "lv": "Ar esi trumparegis, ar toliaregis?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte eine Brille kaufen.",
    "lv": "Noriu nusipirkti akinius.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie meine Brille reparieren?",
    "lv": "Ar galite pataisyti mano akinius?",
    "level": "Sätze"
  },
  {
    "de": "Das dauert nur eine Viertelstunde.",
    "lv": "Tai užtruks tik penkiolika minučių.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist mir zu hoch.",
    "lv": "Kaina man per didelė.",
    "level": "Sätze"
  },
  {
    "de": "Ich brauche zwei Fotos für meinen Pass.",
    "lv": "Man reikia dviejų nuotraukų pasui.",
    "level": "Sätze"
  },
  {
    "de": "Bitte packen Sie es ein und schicken Sie es mir nach Hause.",
    "lv": "Prašau, supakuokite ir išsiųskite į namus.",
    "level": "Sätze"
  },
  {
    "de": "Wir haben feste Preise.",
    "lv": "Mes turime fiksuotas kainas.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, fotografieren Sie mich.",
    "lv": "Prašau, nufotografuokite mane.",
    "level": "Sätze"
  },
  {
    "de": "Setzen Sie sich, schauen Sie gerade in die Kamera und bewegen Sie sich nicht!",
    "lv": "Atsisėskite, žiūrėkite tiesiai į kamerą ir nejudėkite!",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich das Probebild sehen?",
    "lv": "Kada galiu pamatyti pavyzdį?",
    "level": "Sätze"
  },
  {
    "de": "Wann sind die Fotos fertig?",
    "lv": "Kada nuotraukos bus paruoštos?",
    "level": "Sätze"
  },
  {
    "de": "Die Aufnahme ist gelungen.",
    "lv": "Nuotrauka pavyko.",
    "level": "Sätze"
  },
  {
    "de": "Die Fotos sind gut geworden.",
    "lv": "Nuotraukos gerai pavyko.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie das Foto auch vergrößern?",
    "lv": "Ar galite padidinti nuotrauką?",
    "level": "Sätze"
  },
  {
    "de": "Sind diese Steine echt?",
    "lv": "Ar šie akmenys tikri?",
    "level": "Sätze"
  },
  {
    "de": "Ist das echtes Gold?",
    "lv": "Ar tai tikras auksas?",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir bitte Trauringe.",
    "lv": "Parodykite, prašau, vestuvinius žiedus.",
    "level": "Sätze"
  },
  {
    "de": "Der Ring ist mir etwas zu weit.",
    "lv": "Žiedas man kiek per didelis.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann ihn enger machen.",
    "lv": "Aš galiu tai susiaurinti.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Ring passt mir.",
    "lv": "Šis žiedas man tinka.",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir schöne Geschenkideen.",
    "lv": "Parodykite gražių dovanų idėjų.",
    "level": "Sätze"
  },
  {
    "de": "Wie gefallen dir diese Ohrringe?",
    "lv": "Kaip tau patinka šie auskarai?",
    "level": "Sätze"
  },
  {
    "de": "Diese Brosche ist wirklich schön.",
    "lv": "Šita segė labai graži.",
    "level": "Sätze"
  },
  {
    "de": "Der Stein ist ein Saphir.",
    "lv": "Šis akmuo yra safyras.",
    "level": "Sätze"
  },
  {
    "de": "Das ist kein echter Stein, das ist Glas.",
    "lv": "Šis nėra tikras akmuo, tai stiklas.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Armband kann ich Ihnen besonders empfehlen.",
    "lv": "Šią apyrankę galiu ypač rekomenduoti.",
    "level": "Sätze"
  },
  {
    "de": "Es ist besonders schön gearbeitet.",
    "lv": "Ji ypač smulkiai išdailinta.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist nicht hoch.",
    "lv": "Kaina nėra didelė.",
    "level": "Sätze"
  },
  {
    "de": "Bekomme ich die Schachtel gratis?",
    "lv": "Ar dėžutę gausiu nemokamai?",
    "level": "Sätze"
  },
  {
    "de": "Alle Schmuckstücke sind gestempelt.",
    "lv": "Visi papuošalai pažymėti prabos ženklu.",
    "level": "Sätze"
  },
  {
    "de": "Falls es meiner Frau nicht gefällt, kann ich es umtauschen?",
    "lv": "Jei mano žmonai nepatiks, ar galiu pakeisti?",
    "level": "Sätze"
  },
  {
    "de": "Natürlich, jederzeit.",
    "lv": "Žinoma, bet kuriuo metu.",
    "level": "Sätze"
  }
];

window.SENTENCE_ENTRIES = SENTENCE_ENTRIES;

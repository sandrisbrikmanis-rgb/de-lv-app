const SENTENCE_ENTRIES = [
  {
    "de": "Hüte dich davor!",
    "lv": "Atenție la asta!",
    "level": "Sätze"
  },
  {
    "de": "Wenn nichts dazwischenkommt.",
    "lv": "Dacă nimic nu interferează. • Dacă totul decurge conform planului.",
    "level": "Sätze"
  },
  {
    "de": "Das kann ich mir denken!",
    "lv": "Știu că!",
    "level": "Sätze"
  },
  {
    "de": "Ist er denn krank?",
    "lv": "E bolnav atunci?",
    "level": "Sätze"
  },
  {
    "de": "Was denn?",
    "lv": "Atunci ce?",
    "level": "Sätze"
  },
  {
    "de": "Desto mehr.",
    "lv": "Cu atât mai mult.",
    "level": "Sätze"
  },
  {
    "de": "Je mehr, desto besser.",
    "lv": "Cu cât mai multe, cu atât mai bine.",
    "level": "Sätze"
  },
  {
    "de": "Alles deutet auf Regen.",
    "lv": "Totul indică cazul.",
    "level": "Sätze"
  },
  {
    "de": "Damit ist mir wenig gedient.",
    "lv": "Nu are sens pentru mine.",
    "level": "Sätze"
  },
  {
    "de": "Er ist dienstlich verhindert.",
    "lv": "Nu poate veni din cauza muncii.",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie doch!",
    "lv": "Vorbește!",
    "level": "Sätze"
  },
  {
    "de": "Es donnert.",
    "lv": "Tunetul bubuie.",
    "level": "Sätze"
  },
  {
    "de": "Doppelt so groß.",
    "lv": "De două ori mai mare.",
    "level": "Sätze"
  },
  {
    "de": "Von dort.",
    "lv": "De acolo.",
    "level": "Sätze"
  },
  {
    "de": "Die Zeit drängt.",
    "lv": "Timpul se scurge.",
    "level": "Sätze"
  },
  {
    "de": "Ihn drücken Sorgen.",
    "lv": "El este copleșit de îngrijorare.",
    "level": "Sätze"
  },
  {
    "de": "Hast du das Buch durchgearbeitet?",
    "lv": "Ai parcurs cartea cu atentie?",
    "level": "Sätze"
  },
  {
    "de": "Kein Durchgang!",
    "lv": "Nu trece prin! • Ieșire închisă!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich Sie bitten?",
    "lv": "Pot sa te intreb",
    "level": "Sätze"
  },
  {
    "de": "Ich bin durstig.",
    "lv": "Mi-e sete.",
    "level": "Sätze"
  },
  {
    "de": "Eben das meine ich.",
    "lv": "Exact asta vreau să spun.",
    "level": "Sätze"
  },
  {
    "de": "Es ist ganz egal.",
    "lv": "Nu contează deloc.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie eigentlich?",
    "lv": "Ce vrei cu adevărat?",
    "level": "Sätze"
  },
  {
    "de": "Eilt es mit dieser Sache?",
    "lv": "Este acest lucru urgent?",
    "level": "Sätze"
  },
  {
    "de": "Eilt sehr!",
    "lv": "Foarte urgent!",
    "level": "Sätze"
  },
  {
    "de": "Ich habe es eilig.",
    "lv": "Mă grăbesc.",
    "level": "Sätze"
  },
  {
    "de": "Du bildest dir nur ein, krank zu sein.",
    "lv": "Îți imaginezi doar că ești bolnav.",
    "level": "Sätze"
  },
  {
    "de": "Was fällt dir ein?",
    "lv": "Ce îți vine în minte?",
    "level": "Sätze"
  },
  {
    "de": "Es war einmal.",
    "lv": "Odată a fost.",
    "level": "Sätze"
  },
  {
    "de": "Steigen Sie bitte ein!",
    "lv": "Vă rugăm să intrați!",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie ein!",
    "lv": "Te rog intra!",
    "level": "Sätze"
  },
  {
    "de": "Einzelnes hat mir dort gefallen.",
    "lv": "Mi-au plăcut unele lucruri acolo.",
    "level": "Sätze"
  },
  {
    "de": "Es empfiehlt sich.",
    "lv": "Este recomandat.",
    "level": "Sätze"
  },
  {
    "de": "Diese Flasche enthält Essig.",
    "lv": "Această sticlă conține oțet.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldigen Sie bitte!",
    "lv": "Scuză-mă, te rog!",
    "level": "Sätze"
  },
  {
    "de": "Entweder... oder...",
    "lv": "Ori... ori...",
    "level": "Sätze"
  },
  {
    "de": "Wer war der Erste?",
    "lv": "Cine a fost primul?",
    "level": "Sätze"
  },
  {
    "de": "Wer fehlt heute?",
    "lv": "Cine nu a venit azi?",
    "level": "Sätze"
  },
  {
    "de": "Was fehlt dir?",
    "lv": "Ce e în neregulă cu tine?",
    "level": "Sätze"
  },
  {
    "de": "Wie heißen Sie?",
    "lv": "Cum te numești?",
    "level": "Sätze"
  },
  {
    "de": "Was soll das heißen?",
    "lv": "Ce înseamnă asta?",
    "level": "Sätze"
  },
  {
    "de": "Bitte treten Sie näher heran!",
    "lv": "Vă rog să veniți mai aproape!",
    "level": "Sätze"
  },
  {
    "de": "Heraus mit der Sprache!",
    "lv": "Vorbi! • Povești!",
    "level": "Sätze"
  },
  {
    "de": "im Herbst",
    "lv": "Toamna",
    "level": "Sätze"
  },
  {
    "de": "Meine Herrschaften!",
    "lv": "Doamnelor și domnilor!",
    "level": "Sätze"
  },
  {
    "de": "von heute an",
    "lv": "Începând de astăzi",
    "level": "Sätze"
  },
  {
    "de": "heute früh",
    "lv": "În această dimineață",
    "level": "Sätze"
  },
  {
    "de": "heute Nacht",
    "lv": "Aseară",
    "level": "Sätze"
  },
  {
    "de": "Zu Hilfe!",
    "lv": "Ajutor!",
    "level": "Sätze"
  },
  {
    "de": "Ich lerne jeden Tag Deutsch.",
    "lv": "Studiez germana in fiecare zi.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das bitte wiederholen?",
    "lv": "Poti repeta asta te rog?",
    "level": "Sätze"
  },
  {
    "de": "Wir treffen uns am Bahnhof.",
    "lv": "Ne întâlnim la gară.",
    "level": "Sätze"
  },
  {
    "de": "Ich stimme dir teilweise zu.",
    "lv": "Sunt parțial de acord cu tine.",
    "level": "Sätze"
  },
  {
    "de": "Diese Entscheidung hat weitreichende Folgen.",
    "lv": "Această decizie are consecințe de amploare.",
    "level": "Sätze"
  },
  {
    "de": "Man sollte mehrere Perspektiven berücksichtigen.",
    "lv": "Ar trebui luate în considerare mai multe perspective.",
    "level": "Sätze"
  },
  {
    "de": "Könnten Sie das näher erläutern?",
    "lv": "Ai putea explica asta mai detaliat?",
    "level": "Sätze"
  },
  {
    "de": "Was mich anbelangt,...",
    "lv": "Cât despre mine...",
    "level": "Sätze"
  },
  {
    "de": "Wie alt sind Sie?",
    "lv": "Câți ani ai?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zwanzig Jahre alt.",
    "lv": "Am douăzeci de ani.",
    "level": "Sätze"
  },
  {
    "de": "Von heute an.",
    "lv": "De azi.",
    "level": "Sätze"
  },
  {
    "de": "Von jetzt an.",
    "lv": "De acum.",
    "level": "Sätze"
  },
  {
    "de": "Anders geht es nicht.",
    "lv": "Nu există altă cale.",
    "level": "Sätze"
  },
  {
    "de": "Rufen Sie mich an.",
    "lv": "Sună-mă.",
    "level": "Sätze"
  },
  {
    "de": "Bitte stellen Sie das Radio ab.",
    "lv": "Vă rugăm să opriți radioul.",
    "level": "Sätze"
  },
  {
    "de": "Achte bitte auf den Verkehr.",
    "lv": "Vă rugăm să fiți atenți la trafic.",
    "level": "Sätze"
  },
  {
    "de": "Darauf musst du achten.",
    "lv": "Ar trebui să fii atent la asta.",
    "level": "Sätze"
  },
  {
    "de": "Heute mache ich es anders.",
    "lv": "Astăzi o voi face altfel.",
    "level": "Sätze"
  },
  {
    "de": "Wir warten auf den Bus.",
    "lv": "Așteptăm autobuzul.",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt allein.",
    "lv": "El trăiește singur.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Ausbildung absolviert.",
    "lv": "Mi-am terminat antrenamentul. • Mi-am terminat studiile.",
    "level": "Sätze"
  },
  {
    "de": "Ich warte den Regen ab.",
    "lv": "Voi aștepta să înceteze ploaia.",
    "level": "Sätze"
  },
  {
    "de": "Er arbeitet in der Verkaufsabteilung.",
    "lv": "Lucrează în departamentul de vânzări.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin allergisch gegen Katzen.",
    "lv": "Sunt alergic la pisici.",
    "level": "Sätze"
  },
  {
    "de": "Andererseits verstehe ich ihn.",
    "lv": "Pe de altă parte, îl înțeleg.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Situation analysiert.",
    "lv": "Am analizat situația.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat meinen Vorschlag akzeptiert.",
    "lv": "Ea a acceptat propunerea mea.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte das genauer analysieren.",
    "lv": "Vreau să o analizez mai precis.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte den Vertrag ändern.",
    "lv": "Vreau sa schimb contractul.",
    "level": "Sätze"
  },
  {
    "de": "Er ändert ständig seine Meinung.",
    "lv": "Își schimbă constant părerea.",
    "level": "Sätze"
  },
  {
    "de": "Ähnliche Probleme hatten wir schon früher.",
    "lv": "Am avut probleme similare înainte.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ahnung!",
    "lv": "Nici idee!",
    "level": "Sätze"
  },
  {
    "de": "Hör auf zu jammern.",
    "lv": "Nu te mai plânge.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Kleid ist akademisch gekleidet.",
    "lv": "Această rochie este conservatoare elegant.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre gerne Akkordeonmusik.",
    "lv": "Îmi place să ascult muzică la acordeon.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das Gerät anklicken?",
    "lv": "Poți să dai clic pe dispozitiv?",
    "level": "Sätze"
  },
  {
    "de": "Bitte öffne die Datei und klicke darauf.",
    "lv": "Deschideți fișierul și faceți clic pe el.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe einen Unfall gehabt.",
    "lv": "Am avut un accident.",
    "level": "Sätze"
  },
  {
    "de": "Wir laufen zum Bahnhof.",
    "lv": "Mergem la gară.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schalte den Fernseher an.",
    "lv": "Vă rugăm să porniți televizorul.",
    "level": "Sätze"
  },
  {
    "de": "Mein Computer ist abgestürzt.",
    "lv": "Computerul meu s-a prăbușit.",
    "level": "Sätze"
  },
  {
    "de": "Am Wochenende gehe ich angeln.",
    "lv": "Voi merge la pescuit în weekend.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe den Anruf verpasst.",
    "lv": "Am ratat apelul.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mich später anrufen?",
    "lv": "Ma poti suna mai tarziu",
    "level": "Sätze"
  },
  {
    "de": "Bitte nimm meinen Vorschlag an.",
    "lv": "Vă rog să acceptați propunerea mea.",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme dein Angebot an.",
    "lv": "Accept oferta ta.",
    "level": "Sätze"
  },
  {
    "de": "Er nahm die Einladung an.",
    "lv": "A acceptat invitația.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Angst vor Spinnen.",
    "lv": "Mi-e frică de păianjeni.",
    "level": "Sätze"
  },
  {
    "de": "Keine Angst, alles wird gut.",
    "lv": "Nu-ți fie teamă, totul va fi bine.",
    "level": "Sätze"
  },
  {
    "de": "Anklang finden.",
    "lv": "Găsiți un ecou. • Găsiți capacitatea de răspuns",
    "level": "Sätze"
  },
  {
    "de": "Es kommt darauf an.",
    "lv": "Depinde de asta.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Anlass.",
    "lv": "Din cauza acestui timp. • În acest sens",
    "level": "Sätze"
  },
  {
    "de": "Nehmen wir an, dass...",
    "lv": "Să presupunem că...",
    "level": "Sätze"
  },
  {
    "de": "Was hast du da angerichtet?",
    "lv": "Ce ai facut acolo",
    "level": "Sätze"
  },
  {
    "de": "Bis ans Ende.",
    "lv": "Până la capăt.",
    "level": "Sätze"
  },
  {
    "de": "Du glaubst mir anscheinend nicht.",
    "lv": "Se pare că nu mă crezi.",
    "level": "Sätze"
  },
  {
    "de": "Meiner Ansicht nach...",
    "lv": "În opinia mea...",
    "level": "Sätze"
  },
  {
    "de": "Stell dich nicht so an!",
    "lv": "Nu te preface!",
    "level": "Sätze"
  },
  {
    "de": "An die Arbeit gehen.",
    "lv": "Se apuca de lucru.",
    "level": "Sätze"
  },
  {
    "de": "Außer Atem sein.",
    "lv": "A fi fără suflare.",
    "level": "Sätze"
  },
  {
    "de": "Guten Appetit!",
    "lv": "Pofta buna!",
    "level": "Sätze"
  },
  {
    "de": "In einem Atemzug.",
    "lv": "Într-o singură respirație.",
    "level": "Sätze"
  },
  {
    "de": "Auf jeden Fall.",
    "lv": "În fiecare caz.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal war alles still.",
    "lv": "Deodată totul a devenit liniștit.",
    "level": "Sätze"
  },
  {
    "de": "Bitte mach die Tür auf!",
    "lv": "Vă rog să deschideți ușa!",
    "level": "Sätze"
  },
  {
    "de": "Er hat den Kredit aufgenommen.",
    "lv": "A luat un împrumut.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen heute aufräumen.",
    "lv": "Trebuie să facem ordine în cameră azi.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre jetzt auf.",
    "lv": "Mă voi opri acum.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schon auf.",
    "lv": "El este deja treaz.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen das Treffen verschieben.",
    "lv": "Trebuie să reprogramam întâlnirea.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat mich aufgeregt.",
    "lv": "M-a iritat.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal.",
    "lv": "Brusc.",
    "level": "Sätze"
  },
  {
    "de": "Auf der Stelle.",
    "lv": "Imediat.",
    "level": "Sätze"
  },
  {
    "de": "Für den Schaden aufkommen.",
    "lv": "Acoperiți daunele.",
    "level": "Sätze"
  },
  {
    "de": "Bitte die Tür auf!",
    "lv": "Deschide usa, te rog!",
    "level": "Sätze"
  },
  {
    "de": "Aufrecht sitzen.",
    "lv": "Stai drept.",
    "level": "Sätze"
  },
  {
    "de": "Er ist auf.",
    "lv": "S-a ridicat în picioare.",
    "level": "Sätze"
  },
  {
    "de": "Alle Kräfte aufwenden.",
    "lv": "Dedică-ți toată puterea.",
    "level": "Sätze"
  },
  {
    "de": "Viel Mühe aufwenden.",
    "lv": "Încercați foarte mult.",
    "level": "Sätze"
  },
  {
    "de": "Geh mir aus den Augen!",
    "lv": "Nu te mai uita la mine!",
    "level": "Sätze"
  },
  {
    "de": "Unter vier Augen.",
    "lv": "In doi. • În liniște",
    "level": "Sätze"
  },
  {
    "de": "Aus Mangel an Zeit.",
    "lv": "Din lipsă de timp.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Grunde.",
    "lv": "Din acest motiv.",
    "level": "Sätze"
  },
  {
    "de": "Alle außer dir.",
    "lv": "Toți, în afară de tine.",
    "level": "Sätze"
  },
  {
    "de": "Auf Äußerlichkeiten Wert legen.",
    "lv": "Acordați importanță aspectului.",
    "level": "Sätze"
  },
  {
    "de": "Im äußersten Fall.",
    "lv": "În cel mai rău caz.",
    "level": "Sätze"
  },
  {
    "de": "Äußerst wichtig.",
    "lv": "Extrem de important.",
    "level": "Sätze"
  },
  {
    "de": "Aussicht auf die See.",
    "lv": "Vedere la mare.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gute Aussichten.",
    "lv": "Are o șansă bună.",
    "level": "Sätze"
  },
  {
    "de": "Wie wird dieses Wort ausgesprochen?",
    "lv": "Cum se pronunță acest cuvânt?",
    "level": "Sätze"
  },
  {
    "de": "Sein Beileid aussprechen.",
    "lv": "Exprimați condoleanțe.",
    "level": "Sätze"
  },
  {
    "de": "Wann wurden die Meisterschaftskämpfe ausgetragen?",
    "lv": "Cand a fost campionatul?",
    "level": "Sätze"
  },
  {
    "de": "Welchen Beruf üben Sie aus?",
    "lv": "Care este profesia ta?",
    "level": "Sätze"
  },
  {
    "de": "Einfluss ausüben.",
    "lv": "A influența.",
    "level": "Sätze"
  },
  {
    "de": "Auswärts essen.",
    "lv": "Mănâncă afară.",
    "level": "Sätze"
  },
  {
    "de": "Per Bahn.",
    "lv": "Pe calea ferată.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Bahn.",
    "lv": "Pe calea ferată.",
    "level": "Sätze"
  },
  {
    "de": "Möglichst bald.",
    "lv": "Cât mai repede posibil.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist Angst und bange.",
    "lv": "Imi este foarte frica.",
    "level": "Sätze"
  },
  {
    "de": "Auf die lange Bank schieben.",
    "lv": "Amâna. • Trageți până la lungime • Amânați pe termen nelimitat",
    "level": "Sätze"
  },
  {
    "de": "Bar zahlen.",
    "lv": "Plătiți în numerar.",
    "level": "Sätze"
  },
  {
    "de": "Erz bauen.",
    "lv": "Ia minereu.",
    "level": "Sätze"
  },
  {
    "de": "Mist bauen.",
    "lv": "Trage. • Fă-te prost",
    "level": "Sätze"
  },
  {
    "de": "Ich bin beauftragt.",
    "lv": "Mi s-a atribuit un loc de muncă.",
    "level": "Sätze"
  },
  {
    "de": "Nach Bedarf.",
    "lv": "La nevoie.",
    "level": "Sätze"
  },
  {
    "de": "Ich bedauere ihn.",
    "lv": "Imi pare rau pentru el.",
    "level": "Sätze"
  },
  {
    "de": "Was bedeutet dieses Wort?",
    "lv": "Ce înseamnă acest cuvânt?",
    "level": "Sätze"
  },
  {
    "de": "Unter der Bedingung, dass...",
    "lv": "Cu condiția ca...",
    "level": "Sätze"
  },
  {
    "de": "Sie sieht bedrückt aus.",
    "lv": "Ea pare deprimată.",
    "level": "Sätze"
  },
  {
    "de": "Hinweise befolgen.",
    "lv": "Urmați instrucțiunile.",
    "level": "Sätze"
  },
  {
    "de": "Befehle befolgen.",
    "lv": "Urmați comenzile.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Post befördern.",
    "lv": "Trimite prin posta.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin begierig zu wissen.",
    "lv": "Chiar vreau să știu.",
    "level": "Sätze"
  },
  {
    "de": "Zu Beginn.",
    "lv": "La început.",
    "level": "Sätze"
  },
  {
    "de": "Am Beginn.",
    "lv": "La început.",
    "level": "Sätze"
  },
  {
    "de": "Bei Beginn.",
    "lv": "Pornire",
    "level": "Sätze"
  },
  {
    "de": "In Begleitung.",
    "lv": "Însoțit.",
    "level": "Sätze"
  },
  {
    "de": "Mit seiner Begleitung.",
    "lv": "Cu acompaniament.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schwer von Begriff.",
    "lv": "El este lent în a percepe. • Are gândire lentă",
    "level": "Sätze"
  },
  {
    "de": "Im Gedächtnis behalten.",
    "lv": "Ține minte. • Păstrați în memorie",
    "level": "Sätze"
  },
  {
    "de": "Bei Tisch.",
    "lv": "La masa.",
    "level": "Sätze"
  },
  {
    "de": "Bei Sinnen sein.",
    "lv": "Să fie sănătos la minte.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tage.",
    "lv": "În timpul zilei.",
    "level": "Sätze"
  },
  {
    "de": "Bei weitem nicht so.",
    "lv": "Deloc.",
    "level": "Sätze"
  },
  {
    "de": "Alle beide.",
    "lv": "Amândoi doi.",
    "level": "Sätze"
  },
  {
    "de": "Stürmischer Beifall brach los.",
    "lv": "Au fost aplauze zgomotoase.",
    "level": "Sätze"
  },
  {
    "de": "Beifall finden.",
    "lv": "Obține consimțământul.",
    "level": "Sätze"
  },
  {
    "de": "Beileid aussprechen.",
    "lv": "Exprimați condoleanțe.",
    "level": "Sätze"
  },
  {
    "de": "Auf eigenen Beinen stehen.",
    "lv": "Pentru a fi independent financiar.",
    "level": "Sätze"
  },
  {
    "de": "Zum Beispiel.",
    "lv": "De exemplu.",
    "level": "Sätze"
  },
  {
    "de": "Beistand leisten.",
    "lv": "Pentru a ajuta. • Oferiți asistență",
    "level": "Sätze"
  },
  {
    "de": "Beitrag leisten.",
    "lv": "Investește partea ta.",
    "level": "Sätze"
  },
  {
    "de": "Jemandes Bekanntschaft machen.",
    "lv": "Faceți cunoștință cu cineva.",
    "level": "Sätze"
  },
  {
    "de": "Bekanntschaft anknüpfen.",
    "lv": "Faceți cunoștință. • Stabiliți contactul",
    "level": "Sätze"
  },
  {
    "de": "Belegte Brötchen.",
    "lv": "Sandvișuri cu toppinguri.",
    "level": "Sätze"
  },
  {
    "de": "Nach Ihrem Belieben.",
    "lv": "Cum doriți.",
    "level": "Sätze"
  },
  {
    "de": "Zu jeder beliebigen Zeit.",
    "lv": "În orice moment.",
    "level": "Sätze"
  },
  {
    "de": "Schweigen beobachten.",
    "lv": "Pentru a păstra tăcerea.",
    "level": "Sätze"
  },
  {
    "de": "Zur Bequemlichkeit.",
    "lv": "Pentru comoditate.",
    "level": "Sätze"
  },
  {
    "de": "Bereit sein.",
    "lv": "Fii gata. • Fii în pace",
    "level": "Sätze"
  },
  {
    "de": "Unfallopfer bergen.",
    "lv": "Salvați victimele în caz de accident.",
    "level": "Sätze"
  },
  {
    "de": "Bericht erstatten.",
    "lv": "Raport. • Oferiți un raport • Oferiți o prezentare generală",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind besetzt.",
    "lv": "Toate locurile sunt ocupate.",
    "level": "Sätze"
  },
  {
    "de": "Neue Besen kehren gut.",
    "lv": "O mătură nouă mătură bine.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt ein Haus.",
    "lv": "El deține o casă.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt viel Mut.",
    "lv": "Are mare curaj.",
    "level": "Sätze"
  },
  {
    "de": "Desto besser.",
    "lv": "Cu atât mai bine.",
    "level": "Sätze"
  },
  {
    "de": "Gute Besserung!",
    "lv": "Să vă faceţi bine! • Să vă faceţi bine!",
    "level": "Sätze"
  },
  {
    "de": "Beim besten Willen.",
    "lv": "Ce vrei tu.",
    "level": "Sätze"
  },
  {
    "de": "Am besten.",
    "lv": "Cel mai bun.",
    "level": "Sätze"
  },
  {
    "de": "Es besteht Zweifel.",
    "lv": "Există îndoieli.",
    "level": "Sätze"
  },
  {
    "de": "Seine Aufgabe besteht darin...",
    "lv": "Sarcina lui este...",
    "level": "Sätze"
  },
  {
    "de": "Grüße bestellen.",
    "lv": "Salută.",
    "level": "Sätze"
  },
  {
    "de": "Ganz bestimmt.",
    "lv": "Cu siguranta. • Complet sigur",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch kommen.",
    "lv": "Vino în vizită.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch sein.",
    "lv": "De vizitat. • A vizita",
    "level": "Sätze"
  },
  {
    "de": "Oft Konzerte besuchen.",
    "lv": "Mergi adesea la concerte.",
    "level": "Sätze"
  },
  {
    "de": "Welche Schule hat er besucht?",
    "lv": "La ce scoala a mers?",
    "level": "Sätze"
  },
  {
    "de": "In Betracht ziehen.",
    "lv": "Luați în considerare. • Luați în considerare",
    "level": "Sätze"
  },
  {
    "de": "Außer Betracht lassen.",
    "lv": "Ignoră. • Nu luați în considerare",
    "level": "Sätze"
  },
  {
    "de": "Er betreibt ein Hotel.",
    "lv": "El conduce un hotel.",
    "level": "Sätze"
  },
  {
    "de": "Alle beiden.",
    "lv": "Amândoi doi.",
    "level": "Sätze"
  },
  {
    "de": "Alles bezahlen.",
    "lv": "Plătește totul.",
    "level": "Sätze"
  },
  {
    "de": "Bezüglich auf etwas.",
    "lv": "Legat de ceva.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön.",
    "lv": "Vă rog",
    "level": "Sätze"
  },
  {
    "de": "Wie bitte?",
    "lv": "Cum te rog",
    "level": "Sätze"
  },
  {
    "de": "Bitte sehr.",
    "lv": "Vă rog",
    "level": "Sätze"
  },
  {
    "de": "Ich habe eine Bitte an Sie.",
    "lv": "Am o cerere pentru tine.",
    "level": "Sätze"
  },
  {
    "de": "Trompete blasen.",
    "lv": "Sună din trompetă.",
    "level": "Sätze"
  },
  {
    "de": "In einem Buch blättern.",
    "lv": "Sortați cartea.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßen Füßen.",
    "lv": "Picioarele goale.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßem Auge.",
    "lv": "Cu ochiul liber.",
    "level": "Sätze"
  },
  {
    "de": "Danke für die Blumen!",
    "lv": "Multumesc pentru flori!",
    "level": "Sätze"
  },
  {
    "de": "Alles in Butter.",
    "lv": "Totul este bine.",
    "level": "Sätze"
  },
  {
    "de": "Bitte checken.",
    "lv": "Verifica. • Verificați",
    "level": "Sätze"
  },
  {
    "de": "Da ist er!",
    "lv": "Iată-l!",
    "level": "Sätze"
  },
  {
    "de": "Alles spricht dafür.",
    "lv": "Totul vorbește bine.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann nichts dafür.",
    "lv": "Nu pot face nimic acolo.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin dagegen.",
    "lv": "Sunt împotriva ei.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe nichts dagegen.",
    "lv": "Nu am nicio obiecție la asta.",
    "level": "Sätze"
  },
  {
    "de": "Von daheim.",
    "lv": "De acasă.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Dame ziehen.",
    "lv": "Fă o mișcare de doamnă.",
    "level": "Sätze"
  },
  {
    "de": "Es dämmert.",
    "lv": "Se întunecă. • Se stinge zorile.",
    "level": "Sätze"
  },
  {
    "de": "Danke schön!",
    "lv": "Multumesc! • Mulțumesc!",
    "level": "Sätze"
  },
  {
    "de": "Dann und wann.",
    "lv": "Din când în când.",
    "level": "Sätze"
  },
  {
    "de": "Darauf kannst du dich verlassen.",
    "lv": "Poți conta pe asta.",
    "level": "Sätze"
  },
  {
    "de": "Daraus wird nichts.",
    "lv": "Nu va ieși nimic din asta.",
    "level": "Sätze"
  },
  {
    "de": "So dass...",
    "lv": "Astfel încât...",
    "level": "Sätze"
  },
  {
    "de": "Für wen halten Sie mich?",
    "lv": "Ce crezi că sunt?",
    "level": "Sätze"
  },
  {
    "de": "Hände weg!",
    "lv": "Mâinile jos!",
    "level": "Sätze"
  },
  {
    "de": "Lass den Kopf nicht hängen!",
    "lv": "Nu coborî capul!",
    "level": "Sätze"
  },
  {
    "de": "zu Hause",
    "lv": "Acasă",
    "level": "Sätze"
  },
  {
    "de": "nach Hause gehen",
    "lv": "Du-te acasă",
    "level": "Sätze"
  },
  {
    "de": "von Haus aus",
    "lv": "Încă din copilărie • De la bun început",
    "level": "Sätze"
  },
  {
    "de": "Meinen herzlichsten Glückwunsch!",
    "lv": "Felicitări!",
    "level": "Sätze"
  },
  {
    "de": "Seien Sie so gut!",
    "lv": "Fii atât de amabil! • Fii atât de bun!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie die Güte!",
    "lv": "Fii atât de amabil!",
    "level": "Sätze"
  },
  {
    "de": "Was hast du?",
    "lv": "Ce e în neregulă cu tine? • Ce s-a întâmplat?",
    "level": "Sätze"
  },
  {
    "de": "Gestatten Sie bitte!",
    "lv": "Dă-mi voie, te rog!",
    "level": "Sätze"
  },
  {
    "de": "Ist es gestattet zu rauchen?",
    "lv": "Pot să fumez?",
    "level": "Sätze"
  },
  {
    "de": "Ich muss gestehen, dass...",
    "lv": "Trebuie sa recunosc ca...",
    "level": "Sätze"
  },
  {
    "de": "gestern früh",
    "lv": "Ieri dimineață devreme",
    "level": "Sätze"
  },
  {
    "de": "gestern Abend",
    "lv": "Aseară",
    "level": "Sätze"
  },
  {
    "de": "Es ist mir gleichgültig, ob...",
    "lv": "Nu-mi pasă dacă...",
    "level": "Sätze"
  },
  {
    "de": "Was ist geschehen?",
    "lv": "Ce s-a întâmplat?",
    "level": "Sätze"
  },
  {
    "de": "Mach keine Geschichten!",
    "lv": "Nu face prostii! • Nu face glume!",
    "level": "Sätze"
  },
  {
    "de": "Geschweige denn...",
    "lv": "Ca să nu mai vorbim de asta. • Unde altundeva",
    "level": "Sätze"
  },
  {
    "de": "Gehen Sie geradeaus!",
    "lv": "Mergeți drept înainte!",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es Ihnen?",
    "lv": "Ce mai faci • Ce mai faci?",
    "level": "Sätze"
  },
  {
    "de": "Frag ihn gelegentlich, ob...",
    "lv": "Întreabă-l dacă iese dacă...",
    "level": "Sätze"
  },
  {
    "de": "morgen früh",
    "lv": "Maine dimineata",
    "level": "Sätze"
  },
  {
    "de": "im Frühling",
    "lv": "În primăvară",
    "level": "Sätze"
  },
  {
    "de": "Was gibt’s Neues?",
    "lv": "Ce este nou?",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Brief folgt, dass...",
    "lv": "Din această scrisoare reiese că...",
    "level": "Sätze"
  },
  {
    "de": "Fahre fort!",
    "lv": "Ține-o așa!",
    "level": "Sätze"
  },
  {
    "de": "Er ist kein Freund von...",
    "lv": "Lui nu-i place...",
    "level": "Sätze"
  },
  {
    "de": "Es erwies sich, dass...",
    "lv": "S-a dovedit că...",
    "level": "Sätze"
  },
  {
    "de": "Gedenkst du meiner?",
    "lv": "Îți amintești de mine • Te-ai gândit la mine?",
    "level": "Sätze"
  },
  {
    "de": "im Winter",
    "lv": "Iarna",
    "level": "Sätze"
  },
  {
    "de": "Welcher Jahrgang sind Sie?",
    "lv": "În ce an te-ai născut?",
    "level": "Sätze"
  },
  {
    "de": "Es jammert mich zu sehen...",
    "lv": "Trist de vizionat...",
    "level": "Sätze"
  },
  {
    "de": "je mehr, desto besser",
    "lv": "Cu cât mai multe cu atât mai bine",
    "level": "Sätze"
  },
  {
    "de": "bis jetzt",
    "lv": "Până acum",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich zum Bahnhof?",
    "lv": "Cum să ajungi la gară?",
    "level": "Sätze"
  },
  {
    "de": "Komm her!",
    "lv": "Vino aici!",
    "level": "Sätze"
  },
  {
    "de": "Könnte ich Frau N. sprechen?",
    "lv": "Aș putea vorbi cu doamna N.?",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das?",
    "lv": "Cât costã?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange dauert die Vorstellung?",
    "lv": "Cât va dura spectacolul?",
    "level": "Sätze"
  },
  {
    "de": "Lass das!",
    "lv": "Opreste-te! • Aruncă-l!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich in Ruhe!",
    "lv": "Lasă-mă în pace!",
    "level": "Sätze"
  },
  {
    "de": "Lassen Sie mich Ihnen helfen!",
    "lv": "Lasă-mă să te ajut!",
    "level": "Sätze"
  },
  {
    "de": "Lasst uns gehen!",
    "lv": "Să mergem!",
    "level": "Sätze"
  },
  {
    "de": "Na, wie läufts?",
    "lv": "Ce mai faci",
    "level": "Sätze"
  },
  {
    "de": "Es lebe!",
    "lv": "Trăiască!",
    "level": "Sätze"
  },
  {
    "de": "Leben Sie wohl!",
    "lv": "Trăiește sănătos! • La revedere!",
    "level": "Sätze"
  },
  {
    "de": "Was ist los?",
    "lv": "Ce s-a întâmplat?",
    "level": "Sätze"
  },
  {
    "de": "Der Job ist anstrengend.",
    "lv": "Munca este epuizantă.",
    "level": "Sätze"
  },
  {
    "de": "Das war ein anstrengender Tag.",
    "lv": "A fost o zi plină.",
    "level": "Sätze"
  },
  {
    "de": "Deutsch lernen kann anstrengend sein.",
    "lv": "Învățarea limbii germane poate fi obositoare.",
    "level": "Sätze"
  },
  {
    "de": "Er verlangt eine Erklärung.",
    "lv": "El cere o explicație.",
    "level": "Sätze"
  },
  {
    "de": "Der Verkäufer verlangt zu viel Geld.",
    "lv": "Vânzătorul cere prea mulți bani.",
    "level": "Sätze"
  },
  {
    "de": "Das Gesetz verlangt es so.",
    "lv": "Legea o cere.",
    "level": "Sätze"
  },
  {
    "de": "Das ist gar nicht so schwer.",
    "lv": "Nu este deloc atât de greu.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe gar kein Geld.",
    "lv": "Nu am bani deloc.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gar nichts gesagt.",
    "lv": "Nu a spus absolut nimic.",
    "level": "Sätze"
  },
  {
    "de": "Der Hund ist los.",
    "lv": "Câinele a fost eliberat.",
    "level": "Sätze"
  },
  {
    "de": "Hier ist viel los.",
    "lv": "Se întâmplă multe aici.",
    "level": "Sätze"
  },
  {
    "de": "Halt die Luft an!",
    "lv": "Ține-ți respirația!",
    "level": "Sätze"
  },
  {
    "de": "Was machst du?",
    "lv": "Ce faci",
    "level": "Sätze"
  },
  {
    "de": "Sag mal!",
    "lv": "Spune da!",
    "level": "Sätze"
  },
  {
    "de": "Was meinen Sie damit?",
    "lv": "Ce vrei să spui cu asta? • Ce crezi?",
    "level": "Sätze"
  },
  {
    "de": "Wir gehen mit Ihnen.",
    "lv": "Mergem cu tine.",
    "level": "Sätze"
  },
  {
    "de": "Ich fahre mit der Eisenbahn.",
    "lv": "Călătoresc cu trenul.",
    "level": "Sätze"
  },
  {
    "de": "am Mittwoch",
    "lv": "Miercuri",
    "level": "Sätze"
  },
  {
    "de": "Es mag sein.",
    "lv": "Pot fi.",
    "level": "Sätze"
  },
  {
    "de": "Ich mag das nicht.",
    "lv": "Nu-mi place.",
    "level": "Sätze"
  },
  {
    "de": "am Montag",
    "lv": "Pe luni",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen!",
    "lv": "Bună dimineaţa!",
    "level": "Sätze"
  },
  {
    "de": "am Morgen",
    "lv": "Dimineaţa",
    "level": "Sätze"
  },
  {
    "de": "Gute Nacht!",
    "lv": "Noapte bună!",
    "level": "Sätze"
  },
  {
    "de": "Nehmen Sie Platz!",
    "lv": "Aşezaţi-vă!",
    "level": "Sätze"
  },
  {
    "de": "Letzte Neuheit!",
    "lv": "Cele mai recente știri!",
    "level": "Sätze"
  },
  {
    "de": "Nicht wahr?",
    "lv": "Corect?",
    "level": "Sätze"
  },
  {
    "de": "Nicht doch!",
    "lv": "Nu, desigur! • Nu!",
    "level": "Sätze"
  },
  {
    "de": "Nun endlich!",
    "lv": "Ei bine, în sfârșit!",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das?",
    "lv": "La ce este bun?",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das alles?",
    "lv": "Pentru ce sunt toate acestea?",
    "level": "Sätze"
  },
  {
    "de": "Parken verboten!",
    "lv": "Parcarea este interzisa!",
    "level": "Sätze"
  },
  {
    "de": "Nicht parken!",
    "lv": "Parcarea este interzisa!",
    "level": "Sätze"
  },
  {
    "de": "Er hat Recht.",
    "lv": "Are dreptate.",
    "level": "Sätze"
  },
  {
    "de": "Wovon ist die Rede?",
    "lv": "Despre ce este vorba?",
    "level": "Sätze"
  },
  {
    "de": "Davon kann keine Rede sein.",
    "lv": "Asta este exclus.",
    "level": "Sätze"
  },
  {
    "de": "Glückliche Reise!",
    "lv": "Călătorie fericită!",
    "level": "Sätze"
  },
  {
    "de": "Mir reißt die Geduld.",
    "lv": "Mi-a rămas fără răbdare.",
    "level": "Sätze"
  },
  {
    "de": "Man sagt, dass...",
    "lv": "Ei spun că...",
    "level": "Sätze"
  },
  {
    "de": "Schon gut!",
    "lv": "Deja e bine!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön!",
    "lv": "Vă rog!",
    "level": "Sätze"
  },
  {
    "de": "Was bin ich schuldig?",
    "lv": "Cât datorez? • Cât trebuie să plătesc?",
    "level": "Sätze"
  },
  {
    "de": "Vor dem Gebrauch schütteln!",
    "lv": "Agitați înainte de utilizare!",
    "level": "Sätze"
  },
  {
    "de": "Sehen Sie mal!",
    "lv": "Aruncă o privire!",
    "level": "Sätze"
  },
  {
    "de": "Wie sehr auch...",
    "lv": "Cât costă...",
    "level": "Sätze"
  },
  {
    "de": "Seit wann?",
    "lv": "De când?",
    "level": "Sätze"
  },
  {
    "de": "Was soll ich tun?",
    "lv": "Ce ar trebuii să fac?",
    "level": "Sätze"
  },
  {
    "de": "im Sommer",
    "lv": "Vara",
    "level": "Sätze"
  },
  {
    "de": "Nicht nur..., sondern auch...",
    "lv": "Nu numai... ci si...",
    "level": "Sätze"
  },
  {
    "de": "Sonst noch etwas?",
    "lv": "Altceva?",
    "level": "Sätze"
  },
  {
    "de": "Spaß beiseite!",
    "lv": "Fără glumă! • Glume pe margine!",
    "level": "Sätze"
  },
  {
    "de": "Wie spät ist es?",
    "lv": "Cât este ceasul",
    "level": "Sätze"
  },
  {
    "de": "Durchfahrt gesperrt!",
    "lv": "Este interzisă circulația cu mașina!",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie deutsch?",
    "lv": "Vorbesti germana?",
    "level": "Sätze"
  },
  {
    "de": "Statt zu...",
    "lv": "În loc de...",
    "level": "Sätze"
  },
  {
    "de": "Wie steht’s?",
    "lv": "Ce mai faci",
    "level": "Sätze"
  },
  {
    "de": "Dieser Hut steht ihr gut.",
    "lv": "Această pălărie i se potrivește bine.",
    "level": "Sätze"
  },
  {
    "de": "Guten Tag!",
    "lv": "Buna ziua!",
    "level": "Sätze"
  },
  {
    "de": "Wo treffen wir uns?",
    "lv": "Unde ne vom întâlni?",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie näher!",
    "lv": "Vino mai aproape!",
    "level": "Sätze"
  },
  {
    "de": "Ehrlichkeit ist eine Tugend.",
    "lv": "Onestitatea este o virtute.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe viel zu tun.",
    "lv": "Am multe de făcut.",
    "level": "Sätze"
  },
  {
    "de": "Nicht übel!",
    "lv": "Foarte bun! • Nu există nicio obiecție",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt über mir.",
    "lv": "El trăiește deasupra mea.",
    "level": "Sätze"
  },
  {
    "de": "Er ist davon überzeugt.",
    "lv": "El este sigur de asta.",
    "level": "Sätze"
  },
  {
    "de": "So ist es üblich.",
    "lv": "Este acceptat.",
    "level": "Sätze"
  },
  {
    "de": "Deine Uhr geht nach.",
    "lv": "Ceasul tău este în urmă.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel Uhr ist es?",
    "lv": "Cât este ceasul?",
    "level": "Sätze"
  },
  {
    "de": "Um acht Uhr früh.",
    "lv": "La ora opt dimineata.",
    "level": "Sätze"
  },
  {
    "de": "umso mehr",
    "lv": "Cu atât mai mult",
    "level": "Sätze"
  },
  {
    "de": "Rechts um!",
    "lv": "Obligatoriu Dreapta!",
    "level": "Sätze"
  },
  {
    "de": "Und ob!",
    "lv": "Și ce altceva!",
    "level": "Sätze"
  },
  {
    "de": "und zwar",
    "lv": "Anume",
    "level": "Sätze"
  },
  {
    "de": "Auf Unkosten von...",
    "lv": "În detrimentul...",
    "level": "Sätze"
  },
  {
    "de": "Er saß unter den Zuschauern.",
    "lv": "S-a așezat printre public.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ursache!",
    "lv": "Nimic pentru nimic!",
    "level": "Sätze"
  },
  {
    "de": "Es geschah, wie verabredet.",
    "lv": "S-a întâmplat așa cum sa convenit.",
    "level": "Sätze"
  },
  {
    "de": "Rauchen verboten!",
    "lv": "Fumatul este interzis!",
    "level": "Sätze"
  },
  {
    "de": "Falsch verbunden!",
    "lv": "Conexiune greșită!",
    "level": "Sätze"
  },
  {
    "de": "Eintritt verboten!",
    "lv": "Intrarea este interzisa!",
    "level": "Sätze"
  },
  {
    "de": "Verstehen Sie mich?",
    "lv": "Mă înțelegi?",
    "level": "Sätze"
  },
  {
    "de": "Er versteht nichts davon.",
    "lv": "El nu înțelege nimic despre asta.",
    "level": "Sätze"
  },
  {
    "de": "Seine Ansicht vertreten.",
    "lv": "Apără-ți părerea.",
    "level": "Sätze"
  },
  {
    "de": "Streit verursachen.",
    "lv": "Cauza o cearta.",
    "level": "Sätze"
  },
  {
    "de": "Viel besser.",
    "lv": "Mult mai bine.",
    "level": "Sätze"
  },
  {
    "de": "Zu viel.",
    "lv": "Prea mult.",
    "level": "Sätze"
  },
  {
    "de": "Vom Hörensagen.",
    "lv": "După audiere.",
    "level": "Sätze"
  },
  {
    "de": "Von Zeit zu Zeit.",
    "lv": "Din când în când.",
    "level": "Sätze"
  },
  {
    "de": "Von Beruf.",
    "lv": "De profesie.",
    "level": "Sätze"
  },
  {
    "de": "Er ist Berliner von Geburt.",
    "lv": "Este berlinez prin naștere.",
    "level": "Sätze"
  },
  {
    "de": "Er steht vor dem Fenster.",
    "lv": "El stă lângă fereastră.",
    "level": "Sätze"
  },
  {
    "de": "Vor Sonnenaufgang.",
    "lv": "Înainte de răsăritul soarelui.",
    "level": "Sätze"
  },
  {
    "de": "Vor vierzehn Tagen.",
    "lv": "Acum două săptămâni.",
    "level": "Sätze"
  },
  {
    "de": "Vor Freude.",
    "lv": "Pentru distracție.",
    "level": "Sätze"
  },
  {
    "de": "Vor allem.",
    "lv": "În primul rând. • În primul rând",
    "level": "Sätze"
  },
  {
    "de": "Im Voraus.",
    "lv": "Anterior.",
    "level": "Sätze"
  },
  {
    "de": "Unter der Voraussetzung, dass...",
    "lv": "Presupunând că...",
    "level": "Sätze"
  },
  {
    "de": "Unter dem Vorbehalt.",
    "lv": "Condițional.",
    "level": "Sätze"
  },
  {
    "de": "Vorhanden sein.",
    "lv": "A fi. • Fii prezent • Fii disponibil",
    "level": "Sätze"
  },
  {
    "de": "In der vorigen Woche.",
    "lv": "Săptămâna trecută.",
    "level": "Sätze"
  },
  {
    "de": "Vorkehrungen treffen.",
    "lv": "Luați măsuri de protecție.",
    "level": "Sätze"
  },
  {
    "de": "Sie kommt mir bekannt vor.",
    "lv": "Îmi pare cunoscută.",
    "level": "Sätze"
  },
  {
    "de": "Er hat Vorliebe für Literatur.",
    "lv": "Îi place foarte mult literatura.",
    "level": "Sätze"
  },
  {
    "de": "Heute Vormittag.",
    "lv": "În această dimineață. • Astăzi dimineața",
    "level": "Sätze"
  },
  {
    "de": "Von vorn.",
    "lv": "Din faţă.",
    "level": "Sätze"
  },
  {
    "de": "Nach vorn.",
    "lv": "Redirecţiona.",
    "level": "Sätze"
  },
  {
    "de": "Von vornherein.",
    "lv": "La început.",
    "level": "Sätze"
  },
  {
    "de": "Im Vorteil sein.",
    "lv": "Fii într-o poziție mai bună.",
    "level": "Sätze"
  },
  {
    "de": "Wach sein.",
    "lv": "A fi treaz.",
    "level": "Sätze"
  },
  {
    "de": "Wach werden.",
    "lv": "Trezeşte-te.",
    "level": "Sätze"
  },
  {
    "de": "Auf Wache sein.",
    "lv": "Stai de pază.",
    "level": "Sätze"
  },
  {
    "de": "Während eines Jahres.",
    "lv": "Pe parcursul anului.",
    "level": "Sätze"
  },
  {
    "de": "Während des Krieges.",
    "lv": "În timpul războiului.",
    "level": "Sätze"
  },
  {
    "de": "Gegen eine Wand reden.",
    "lv": "Vorbește degeaba.",
    "level": "Sätze"
  },
  {
    "de": "Hier haben die Wände Ohren.",
    "lv": "Aici pereții au urechi.",
    "level": "Sätze"
  },
  {
    "de": "Bis wann?",
    "lv": "Până când?",
    "level": "Sätze"
  },
  {
    "de": "Es ist warm.",
    "lv": "E cald.",
    "level": "Sätze"
  },
  {
    "de": "Auf eine Nachricht warten.",
    "lv": "Așteptați mesajul.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie?",
    "lv": "Ce vrei?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein...?",
    "lv": "OMS...? • Dar...?",
    "level": "Sätze"
  },
  {
    "de": "Auf halbem Wege.",
    "lv": "La jumătatea drumului.",
    "level": "Sätze"
  },
  {
    "de": "Auf diesem Wege.",
    "lv": "Așa. • Pentru astfel de fonduri",
    "level": "Sätze"
  },
  {
    "de": "Auf friedlichem Wege.",
    "lv": "Pe calea păcii.",
    "level": "Sätze"
  },
  {
    "de": "Unserer Freundschaft wegen.",
    "lv": "Din cauza prieteniei noastre.",
    "level": "Sätze"
  },
  {
    "de": "Von Rechts wegen.",
    "lv": "Prin dreptate.",
    "level": "Sätze"
  },
  {
    "de": "Weh tun.",
    "lv": "A răni.",
    "level": "Sätze"
  },
  {
    "de": "Zu Weihnachten.",
    "lv": "De Crăciun.",
    "level": "Sätze"
  },
  {
    "de": "Auf welche Weise?",
    "lv": "În ce fel?",
    "level": "Sätze"
  },
  {
    "de": "Art und Weise.",
    "lv": "Tip.",
    "level": "Sätze"
  },
  {
    "de": "Ohne weiteres.",
    "lv": "Imediat. • Imediat",
    "level": "Sätze"
  },
  {
    "de": "Bis auf weiteres.",
    "lv": "Până la o nouă notificare.",
    "level": "Sätze"
  },
  {
    "de": "Und so weiter.",
    "lv": "Și așa mai departe.",
    "level": "Sätze"
  },
  {
    "de": "Weiter nichts.",
    "lv": "Nimic mai mult.",
    "level": "Sätze"
  },
  {
    "de": "An welchem Tag?",
    "lv": "In ce zi?",
    "level": "Sätze"
  },
  {
    "de": "Alle Welt.",
    "lv": "Întreaga lume. • Toată lumea",
    "level": "Sätze"
  },
  {
    "de": "In wenigen Tagen.",
    "lv": "În câteva zile.",
    "level": "Sätze"
  },
  {
    "de": "Zu wenig.",
    "lv": "Prea puţin.",
    "level": "Sätze"
  },
  {
    "de": "Wenn auch.",
    "lv": "Deşi.",
    "level": "Sätze"
  },
  {
    "de": "Wer da?",
    "lv": "Ce este acolo?",
    "level": "Sätze"
  },
  {
    "de": "Gesammelte Werke von Schiller.",
    "lv": "Scrierile adunate ale lui Schiller.",
    "level": "Sätze"
  },
  {
    "de": "Ausgewählte Werke.",
    "lv": "O selecție de lucrări.",
    "level": "Sätze"
  },
  {
    "de": "Er ist wert, dass...",
    "lv": "Merită să...",
    "level": "Sätze"
  },
  {
    "de": "Es ist zwei Euro wert.",
    "lv": "Costă doi euro.",
    "level": "Sätze"
  },
  {
    "de": "Nach Westen.",
    "lv": "Spre vest.",
    "level": "Sätze"
  },
  {
    "de": "Von Westen.",
    "lv": "Dinspre vest.",
    "level": "Sätze"
  },
  {
    "de": "In Wettbewerb treten.",
    "lv": "Intră în competiție.",
    "level": "Sätze"
  },
  {
    "de": "Um die Wette laufen.",
    "lv": "Aleargă cursa.",
    "level": "Sätze"
  },
  {
    "de": "Was gilt die Wette?",
    "lv": "Pentru ce ne târguim?",
    "level": "Sätze"
  },
  {
    "de": "Wie wird das Wetter?",
    "lv": "Cum va fi vremea?",
    "level": "Sätze"
  },
  {
    "de": "Wettkampf im Turnen.",
    "lv": "Competiții în gimnastică.",
    "level": "Sätze"
  },
  {
    "de": "Wider meinen Willen.",
    "lv": "Împotriva voinței mele.",
    "level": "Sätze"
  },
  {
    "de": "Widerspruch erheben.",
    "lv": "Să protesteze. • Ridicați obiecții",
    "level": "Sätze"
  },
  {
    "de": "Wie alt ist er?",
    "lv": "Ce vârstă are?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange?",
    "lv": "Cât timp",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiederhören!",
    "lv": "La revedere!",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiedersehen!",
    "lv": "La revedere!",
    "level": "Sätze"
  },
  {
    "de": "Wilde Tiere.",
    "lv": "Animale sălbatice.",
    "level": "Sätze"
  },
  {
    "de": "Herzlich willkommen!",
    "lv": "Salutări calde!",
    "level": "Sätze"
  },
  {
    "de": "Du musst ziehen.",
    "lv": "Ai o mișcare.",
    "level": "Sätze"
  },
  {
    "de": "Es zieht.",
    "lv": "Trage",
    "level": "Sätze"
  },
  {
    "de": "Ziemlich kalt.",
    "lv": "Destul de frig.",
    "level": "Sätze"
  },
  {
    "de": "Zipfel einer Wurst.",
    "lv": "Sfat cârnați.",
    "level": "Sätze"
  },
  {
    "de": "Zu ihm gehen.",
    "lv": "Du-te la el.",
    "level": "Sätze"
  },
  {
    "de": "Zur Schule gehen.",
    "lv": "Du-te la școală.",
    "level": "Sätze"
  },
  {
    "de": "Zu Hause bleiben.",
    "lv": "Stai acasă.",
    "level": "Sätze"
  },
  {
    "de": "Von Tag zu Tag.",
    "lv": "În fiecare zi.",
    "level": "Sätze"
  },
  {
    "de": "Zum Glück.",
    "lv": "Din fericire.",
    "level": "Sätze"
  },
  {
    "de": "Wasser zum Trinken.",
    "lv": "Apa de baut.",
    "level": "Sätze"
  },
  {
    "de": "Zu Fuß.",
    "lv": "Pentru picioare.",
    "level": "Sätze"
  },
  {
    "de": "Zu Pferde.",
    "lv": "Da.",
    "level": "Sätze"
  },
  {
    "de": "Zu Rad.",
    "lv": "Cu bicicleta.",
    "level": "Sätze"
  },
  {
    "de": "Es hörte auf zu regnen.",
    "lv": "A încetat să plouă.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe noch viel zu tun.",
    "lv": "Mai am multe de făcut.",
    "level": "Sätze"
  },
  {
    "de": "Zu früh.",
    "lv": "Prea devreme.",
    "level": "Sätze"
  },
  {
    "de": "Zu groß.",
    "lv": "Prea mare.",
    "level": "Sätze"
  },
  {
    "de": "Mit den Achseln zucken.",
    "lv": "Ridică din umeri.",
    "level": "Sätze"
  },
  {
    "de": "In einem Zug trinken.",
    "lv": "Bea dintr-o înghițitură.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde gehen.",
    "lv": "Pieri.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde legen.",
    "lv": "Pune pe bază. • Luați ca bază.",
    "level": "Sätze"
  },
  {
    "de": "Zum ersten Mal.",
    "lv": "Pentru prima dată.",
    "level": "Sätze"
  },
  {
    "de": "Machen Sie bitte die Tür zu!",
    "lv": "Vă rugăm să închideți ușa!",
    "level": "Sätze"
  },
  {
    "de": "Er hat zugenommen.",
    "lv": "S-a îngrășat.",
    "level": "Sätze"
  },
  {
    "de": "Die Tage nehmen zu.",
    "lv": "Zilele devin mai lungi.",
    "level": "Sätze"
  },
  {
    "de": "Zusammenhängen mit etwas.",
    "lv": "A fi asociat cu ceva.",
    "level": "Sätze"
  },
  {
    "de": "Die Tür ist zu.",
    "lv": "Ușa este închisă.",
    "level": "Sätze"
  },
  {
    "de": "Das hätte ich ihm nicht zugetraut.",
    "lv": "Nu m-aș fi așteptat la asta de la el.",
    "level": "Sätze"
  },
  {
    "de": "Freier Zutritt.",
    "lv": "Intrarea liberă.",
    "level": "Sätze"
  },
  {
    "de": "Zutritt verboten!",
    "lv": "Intrarea este interzisa!",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu viel!",
    "lv": "E prea mult!",
    "level": "Sätze"
  },
  {
    "de": "Zuwider werden.",
    "lv": "Deveniți dezgustător. • Să se îmbolnăvească",
    "level": "Sätze"
  },
  {
    "de": "Und zwar.",
    "lv": "Anume.",
    "level": "Sätze"
  },
  {
    "de": "Es steht außer Zweifel.",
    "lv": "Nu există nicio îndoială.",
    "level": "Sätze"
  },
  {
    "de": "Ohne Zweifel.",
    "lv": "Fără ezitare.",
    "level": "Sätze"
  },
  {
    "de": "Zum Zweiten.",
    "lv": "În al doilea rând.",
    "level": "Sätze"
  },
  {
    "de": "Frohes neues Jahr!",
    "lv": "An nou fericit!",
    "level": "Sätze"
  },
  {
    "de": "Herzlichen Glückwunsch zum Geburtstag!",
    "lv": "La mulți ani!",
    "level": "Sätze"
  },
  {
    "de": "Gute Reise!",
    "lv": "Călătorie fericită!",
    "level": "Sätze"
  },
  {
    "de": "Es freut mich, Sie kennenzulernen.",
    "lv": "Mă bucur să te cunosc.",
    "level": "Sätze"
  },
  {
    "de": "Wären Sie bitte so nett?",
    "lv": "Te rog să fii atât de amabil?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin Ihnen sehr dankbar.",
    "lv": "Vă sunt foarte recunoscător.",
    "level": "Sätze"
  },
  {
    "de": "Setzt euch bitte hin!",
    "lv": "Stai jos, te rog!",
    "level": "Sätze"
  },
  {
    "de": "Ben, komm bitte an die Tafel!",
    "lv": "Ben, te rog vino la bord!",
    "level": "Sätze"
  },
  {
    "de": "Schlagt bitte die Lehrbücher auf!",
    "lv": "Deschide manualele, te rog!",
    "level": "Sätze"
  },
  {
    "de": "Geht bitte in die Sporthalle!",
    "lv": "Vă rugăm să mergeți la sală!",
    "level": "Sätze"
  },
  {
    "de": "Schläfst du noch?",
    "lv": "Mai dormi?",
    "level": "Sätze"
  },
  {
    "de": "Schlafen Sie noch?",
    "lv": "Mai dormi?",
    "level": "Sätze"
  },
  {
    "de": "Er ist fest eingeschlafen.",
    "lv": "El doarme adânc.",
    "level": "Sätze"
  },
  {
    "de": "Wecke ihn bitte auf, es ist schon spät!",
    "lv": "Te rog trezește-l, e deja târziu!",
    "level": "Sätze"
  },
  {
    "de": "Es tut mir sehr leid!",
    "lv": "Îmi pare atât de rău!",
    "level": "Sätze"
  },
  {
    "de": "Vielen Dank!",
    "lv": "Mulțumesc foarte mult!",
    "level": "Sätze"
  },
  {
    "de": "Finn, fang bitte an!",
    "lv": "Finn, începe, te rog!",
    "level": "Sätze"
  },
  {
    "de": "Lest bitte mit!",
    "lv": "Citiți mai departe, vă rog!",
    "level": "Sätze"
  },
  {
    "de": "Emma, schau bitte nicht aus dem Fenster!",
    "lv": "Emma, ​​te rog nu te uita pe fereastră!",
    "level": "Sätze"
  },
  {
    "de": "Jonas, bring bitte die Hefte!",
    "lv": "Jonas, te rog să aduci caietele!",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte zurück an deinen Platz!",
    "lv": "Întoarce-te la tine!",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb acht.",
    "lv": "Este șapte și jumătate.",
    "level": "Sätze"
  },
  {
    "de": "Wann wachst du gewöhnlich auf?",
    "lv": "Când te trezești de obicei?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe gleich auf.",
    "lv": "Mă trezesc chiar acum.",
    "level": "Sätze"
  },
  {
    "de": "Steh auf, Hanna, es klingelt!",
    "lv": "Ridică-te, Hannah, sună clopoțelul!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich noch fünf Minuten schlafen!",
    "lv": "Lasă-mă să dorm încă cinci minute!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss nicht, das Zimmer zu lüften!",
    "lv": "Nu uitați să aerisiți camera!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist das Handtuch?",
    "lv": "Unde este prosopul",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mir die Zähne putzen.",
    "lv": "Vreau să mă spăl pe dinți.",
    "level": "Sätze"
  },
  {
    "de": "Mit was putzt du dir die Zähne?",
    "lv": "Cu ce ​​te speli pe dinti?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mich anziehen.",
    "lv": "Vreau sa ma imbrac.",
    "level": "Sätze"
  },
  {
    "de": "Zieh dich bitte schnell an!",
    "lv": "Îmbracă-te repede, te rog!",
    "level": "Sätze"
  },
  {
    "de": "Kleide dich wärmer an, draußen ist es kühl.",
    "lv": "Îmbrăcați-vă călduros, afară e frig.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, wie geht es dir?",
    "lv": "Bună dimineața, ce mai faci?",
    "level": "Sätze"
  },
  {
    "de": "Mir geht es gut, danke.",
    "lv": "Sunt bine, mulțumesc.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es Neues?",
    "lv": "Ce este nou?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein Chaos hier!",
    "lv": "Ce mizerie este aici!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich beim Aufräumen helfen?",
    "lv": "Pot să ajut la ordine?",
    "level": "Sätze"
  },
  {
    "de": "Was trinkst du morgens, Kaffee oder Tee?",
    "lv": "Ce bei dimineața, cafea sau ceai?",
    "level": "Sätze"
  },
  {
    "de": "Gewöhnlich trinke ich morgens eine Tasse Kaffee.",
    "lv": "De obicei beau o ceașcă de cafea dimineața.",
    "level": "Sätze"
  },
  {
    "de": "Am liebsten trinke ich schwarzen Kaffee.",
    "lv": "Cel mai bine beau cafea neagră.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, hast du gut geschlafen?",
    "lv": "Bună dimineața, ai dormit bine?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin noch sehr müde.",
    "lv": "Sunt încă foarte obosit.",
    "level": "Sätze"
  },
  {
    "de": "Willst du Kaffee oder Milch?",
    "lv": "Vrei cafea sau lapte?",
    "level": "Sätze"
  },
  {
    "de": "Gib mir bitte ein Brötchen mit Käse.",
    "lv": "Dă-mi o chiflă cu brânză, te rog.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss jetzt los!",
    "lv": "Trebuie să plec acum!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss dein Frühstück nicht!",
    "lv": "Nu uita de micul dejun!",
    "level": "Sätze"
  },
  {
    "de": "Klara, deck bitte den Tisch!",
    "lv": "Clara, te rog pune masa!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss die Servietten nicht!",
    "lv": "Nu uitați de șervețele!",
    "level": "Sätze"
  },
  {
    "de": "Wann esst ihr zu Mittag?",
    "lv": "Când mănânci prânzul",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit zu essen.",
    "lv": "E timpul să mănânci.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es heute zu Mittag?",
    "lv": "Ce e pentru prânz azi?",
    "level": "Sätze"
  },
  {
    "de": "Wie schmeckt dir die Suppe?",
    "lv": "Cum iti place supa?",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt ist sie etwas zu salzig.",
    "lv": "Sincer, este puțin prea sărat.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dir ein Stück Brot geben?",
    "lv": "Pot să-ți dau o felie de pâine?",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich habe schon.",
    "lv": "Multumesc, am deja.",
    "level": "Sätze"
  },
  {
    "de": "Das Fleisch schmeckt ausgezeichnet.",
    "lv": "Carnea are un gust grozav.",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich bin schon satt.",
    "lv": "Mulțumesc, sunt deja plin.",
    "level": "Sätze"
  },
  {
    "de": "Heute haben wir Besuch.",
    "lv": "Astăzi avem vizitatori.",
    "level": "Sätze"
  },
  {
    "de": "Bist du heute Abend frei?",
    "lv": "Esti liber in seara asta?",
    "level": "Sätze"
  },
  {
    "de": "Komm doch heute zum Mittagessen vorbei!",
    "lv": "Vino azi la prânz!",
    "level": "Sätze"
  },
  {
    "de": "Setzen wir uns an den Tisch.",
    "lv": "Să ne așezăm la masă.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, bedien dich!",
    "lv": "Vă rugăm să mâncați cât doriți!",
    "level": "Sätze"
  },
  {
    "de": "Stört dich das Rauchen?",
    "lv": "Te deranjează fumatul?",
    "level": "Sätze"
  },
  {
    "de": "Danke für die nette Aufnahme!",
    "lv": "Vă mulțumim pentru primirea călduroasă!",
    "level": "Sätze"
  },
  {
    "de": "Wann gehst du ins Bett?",
    "lv": "Cand te culci",
    "level": "Sätze"
  },
  {
    "de": "Wenn ich von der Arbeit komme, bin ich immer müde.",
    "lv": "Sunt mereu obosită când vin acasă de la serviciu.",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, ins Bett zu gehen.",
    "lv": "E timpul să mergi la culcare.",
    "level": "Sätze"
  },
  {
    "de": "Es ist schönes Wetter.",
    "lv": "Este un timp frumos.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mit mir spazieren gehen?",
    "lv": "Vrei să mergi cu mine?",
    "level": "Sätze"
  },
  {
    "de": "Sieh mal, es wird gleich regnen.",
    "lv": "Uite, va ploua în curând.",
    "level": "Sätze"
  },
  {
    "de": "Nimm den Regenschirm mit!",
    "lv": "Ia o umbrelă cu tine!",
    "level": "Sätze"
  },
  {
    "de": "Es regnet.",
    "lv": "Plouă.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin schon ganz nass.",
    "lv": "Sunt deja complet ud.",
    "level": "Sätze"
  },
  {
    "de": "Glaubst du, dass es den ganzen Tag regnen wird?",
    "lv": "Crezi că o să plouă toată ziua?",
    "level": "Sätze"
  },
  {
    "de": "Es hört auf zu regnen.",
    "lv": "Ploaia se oprește.",
    "level": "Sätze"
  },
  {
    "de": "Die Sonne scheint wieder.",
    "lv": "Soarele strălucește din nou.",
    "level": "Sätze"
  },
  {
    "de": "Es ist sehr warm.",
    "lv": "Este foarte cald.",
    "level": "Sätze"
  },
  {
    "de": "Es sieht nach Regen aus.",
    "lv": "Se pare că o să plouă.",
    "level": "Sätze"
  },
  {
    "de": "Wir bekommen gleich ein Gewitter.",
    "lv": "Suntem pe cale să facem o furtună.",
    "level": "Sätze"
  },
  {
    "de": "Das Gewitter zieht vorüber.",
    "lv": "Furtuna a trecut.",
    "level": "Sätze"
  },
  {
    "de": "Die Wolken verziehen sich.",
    "lv": "Norii se risipesc.",
    "level": "Sätze"
  },
  {
    "de": "Siehst du den Regenbogen?",
    "lv": "Vezi curcubeul?",
    "level": "Sätze"
  },
  {
    "de": "Der Winter ist da, es hat geschneit.",
    "lv": "Iarna a venit, a nins noaptea.",
    "level": "Sätze"
  },
  {
    "de": "Es schneit.",
    "lv": "Ninge.",
    "level": "Sätze"
  },
  {
    "de": "Wie schön ist es im Wald im Winter!",
    "lv": "Ce frumos este în pădure iarna!",
    "level": "Sätze"
  },
  {
    "de": "Mir ist kalt, ich friere.",
    "lv": "Mi-e frig, îngheț.",
    "level": "Sätze"
  },
  {
    "de": "Draußen ist Glatteis, pass auf!",
    "lv": "Afară e alunecos, fii atent!",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir auf die Eisbahn gehen?",
    "lv": "Mergem la patinaj?",
    "level": "Sätze"
  },
  {
    "de": "Zieh die Jacke an, du kannst dich erkälten.",
    "lv": "Pune-ți o jachetă, s-ar putea să răcești.",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb sieben.",
    "lv": "Este șapte și jumătate.",
    "level": "Sätze"
  },
  {
    "de": "Meine Uhr geht fünf Minuten vor.",
    "lv": "Ceasul meu este rapid cinci minute.",
    "level": "Sätze"
  },
  {
    "de": "Weck mich morgen früh um sieben Uhr!",
    "lv": "Trezește-mă mâine la șapte!",
    "level": "Sätze"
  },
  {
    "de": "Was ist heute für ein Datum?",
    "lv": "Care este data azi?",
    "level": "Sätze"
  },
  {
    "de": "Heute ist der elfte Juli.",
    "lv": "Astăzi este 11 iulie.",
    "level": "Sätze"
  },
  {
    "de": "Was machst du gewöhnlich am Abend?",
    "lv": "Ce faci de obicei seara?",
    "level": "Sätze"
  },
  {
    "de": "Es ist schon lange her, dass wir uns gesehen haben.",
    "lv": "Nu ne-am întâlnit de mult.",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es dir?",
    "lv": "Ce mai faci",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, ich möchte etwas mit dir besprechen.",
    "lv": "Scuză-mă, vreau să discut ceva cu tine.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir spazieren!",
    "lv": "Să mergem la o plimbare!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Lust, mit mir in den Park zu gehen?",
    "lv": "Vrei să mergi cu mine în parc?",
    "level": "Sätze"
  },
  {
    "de": "Ich komme, um dich zum Spaziergang abzuholen.",
    "lv": "Am venit să te iau la plimbare.",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte etwas langsamer, ich kann dir nicht folgen!",
    "lv": "Du-te puțin mai încet, nu pot să țin pasul cu tine!",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zum ersten Mal in dieser Gegend.",
    "lv": "Sunt aici pentru prima dată.",
    "level": "Sätze"
  },
  {
    "de": "Ruhen wir uns ein wenig aus.",
    "lv": "Să ne odihnim puțin.",
    "level": "Sätze"
  },
  {
    "de": "Jetzt können wir zurückgehen.",
    "lv": "Acum ne putem întoarce.",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt bin ich ziemlich müde.",
    "lv": "Sincer, sunt destul de obosit.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, wo ist die nächste U-Bahn-Station?",
    "lv": "Scuzați-mă, unde este cea mai apropiată stație de metrou?",
    "level": "Sätze"
  },
  {
    "de": "Welcher ist der kürzeste Weg?",
    "lv": "Care este drumul cel mai scurt?",
    "level": "Sätze"
  },
  {
    "de": "Geh hier die zweite Straße links und dann immer geradeaus.",
    "lv": "Aici, luați a doua stradă la stânga și mergeți drept înainte.",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich am schnellsten zum Bahnhof?",
    "lv": "Cum să ajungi mai repede la gară?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe vor, morgen zu verreisen.",
    "lv": "Intenționez să plec mâine.",
    "level": "Sätze"
  },
  {
    "de": "Wohin willst du fahren?",
    "lv": "Unde vrei să mergi?",
    "level": "Sätze"
  },
  {
    "de": "Reist du geschäftlich oder privat?",
    "lv": "Călătorești pentru muncă sau pentru odihnă?",
    "level": "Sätze"
  },
  {
    "de": "Finn fährt bis Berlin mit, dann geht er ans Meer.",
    "lv": "Finn conduce la Berlin, apoi va merge la mare.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt das Schiff ab?",
    "lv": "Când pleacă nava?",
    "level": "Sätze"
  },
  {
    "de": "In einer halben Stunde.",
    "lv": "După o jumătate de oră.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich noch eine Kabine bekommen?",
    "lv": "Mai pot lua o cabină?",
    "level": "Sätze"
  },
  {
    "de": "Vergiss deinen Pass nicht!",
    "lv": "Nu uitați pașaportul!",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, den Koffer zu packen.",
    "lv": "E timpul să-ți faci valiza.",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt um halb sieben ab.",
    "lv": "Trenul pleacă la șapte și jumătate.",
    "level": "Sätze"
  },
  {
    "de": "Hol mir bitte ein Taxi, ich verpasse sonst den Zug!",
    "lv": "Sună un taxi, te rog, altfel pierd trenul!",
    "level": "Sätze"
  },
  {
    "de": "Fahr bitte zum Bahnhof!",
    "lv": "Va rog sa ma duceti la statie!",
    "level": "Sätze"
  },
  {
    "de": "Ich muss mich beeilen.",
    "lv": "Trebuie să mă grăbesc.",
    "level": "Sätze"
  },
  {
    "de": "Ist der Schalter schon offen?",
    "lv": "Biroul de bilete este încă deschis?",
    "level": "Sätze"
  },
  {
    "de": "Eine Fahrkarte nach Köln, bitte.",
    "lv": "Un bilet la Köln, vă rog.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt der Zug ab?",
    "lv": "Când pleacă trenul?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt gleich ab.",
    "lv": "Trenul pleacă în curând.",
    "level": "Sätze"
  },
  {
    "de": "Muss ich in Koblenz umsteigen?",
    "lv": "Trebuie să schimb locurile în Koblenz?",
    "level": "Sätze"
  },
  {
    "de": "Ja, dort musst du umsteigen.",
    "lv": "Da, trebuie să schimbi locurile acolo.",
    "level": "Sätze"
  },
  {
    "de": "Ist dieser Platz frei?",
    "lv": "Este disponibil acest loc?",
    "level": "Sätze"
  },
  {
    "de": "Nein, hier sitzt niemand.",
    "lv": "Nu, nimeni nu stă aici.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der Bahnsteigkartenautomat?",
    "lv": "Unde este automatul de bilete pe platformă?",
    "level": "Sätze"
  },
  {
    "de": "Stell mein Handgepäck ins Gepäcknetz.",
    "lv": "Pune-mi bagajele de mână în grilă.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das Fenster aufmachen?",
    "lv": "Pot să deschid fereastra?",
    "level": "Sätze"
  },
  {
    "de": "Es zieht, schließ bitte das Fenster!",
    "lv": "Trageți, vă rugăm să închideți fereastra!",
    "level": "Sätze"
  },
  {
    "de": "Welche ist die nächste Station?",
    "lv": "Care este următoarea oprire?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange hält der Zug?",
    "lv": "Cât timp stă trenul?",
    "level": "Sätze"
  },
  {
    "de": "Wo muss ich umsteigen?",
    "lv": "Unde ar trebui sa ma transfer?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug hat Verspätung.",
    "lv": "Trenul întârzie.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Wagen ist für Nichtraucher.",
    "lv": "Acest vagon este de nefumători.",
    "level": "Sätze"
  },
  {
    "de": "Wir fahren jetzt über die Grenze.",
    "lv": "Acum trecem cu mașina de frontieră.",
    "level": "Sätze"
  },
  {
    "de": "Hast du etwas zu verzollen?",
    "lv": "Ai ceva de clarificat?",
    "level": "Sätze"
  },
  {
    "de": "Wir sind in Berlin angekommen.",
    "lv": "Am ajuns la Berlin.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir ein gutes Hotel empfehlen?",
    "lv": "Imi puteti recomanda un hotel bun?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie freie Zimmer?",
    "lv": "Aveți camere disponibile?",
    "level": "Sätze"
  },
  {
    "de": "Ein Zimmer mit zwei Betten, bitte.",
    "lv": "O cameră cu două paturi, vă rog.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Zimmer pro Nacht?",
    "lv": "Cât costă camera pe noapte?",
    "level": "Sätze"
  },
  {
    "de": "Morgen reise ich ab. Weck mich um sieben Uhr!",
    "lv": "Eu plec maine. Trezește-mă la șapte!",
    "level": "Sätze"
  },
  {
    "de": "Die Rechnung, bitte!",
    "lv": "Nota, vă rog!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Stadtbibliothek?",
    "lv": "Unde este biblioteca orașului?",
    "level": "Sätze"
  },
  {
    "de": "Wann hat das Museum geöffnet?",
    "lv": "Când este deschis muzeul?",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir ins Museum gehen?",
    "lv": "Mergem la muzeu?",
    "level": "Sätze"
  },
  {
    "de": "Fahren wir mit dem Bus oder der U-Bahn?",
    "lv": "Mergem cu autobuzul sau cu metroul?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die nächste Bushaltestelle?",
    "lv": "Unde este cea mai apropiată stație de autobuz?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe großen Hunger.",
    "lv": "Mi-e foarte foame.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir zusammen essen?",
    "lv": "Mergem să mâncăm împreună?",
    "level": "Sätze"
  },
  {
    "de": "Kellner, die Speisekarte, bitte!",
    "lv": "Ospatari, meniu, va rog!",
    "level": "Sätze"
  },
  {
    "de": "Ist der Fisch frisch?",
    "lv": "Este proaspăt peștele?",
    "level": "Sätze"
  },
  {
    "de": "Das schmeckt ausgezeichnet!",
    "lv": "Are gust grozav!",
    "level": "Sätze"
  },
  {
    "de": "Kellner, zahlen bitte!",
    "lv": "Ospatari, va rog sa platiti!",
    "level": "Sätze"
  },
  {
    "de": "Ich gehe ins Café einen Kaffee trinken.",
    "lv": "Voi merge la o cafenea să beau cafea.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mitkommen?",
    "lv": "Vrei să vii?",
    "level": "Sätze"
  },
  {
    "de": "Eine Tasse Kaffee mit Milch, bitte!",
    "lv": "O ceașcă de cafea cu lapte, te rog!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneller, ich habe es eilig!",
    "lv": "Mai repede te rog, trebuie să mă grăbesc!",
    "level": "Sätze"
  },
  {
    "de": "Lass deinen Kaffee nicht kalt werden!",
    "lv": "Nu lăsa cafeaua să se răcească!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie etwas Erfrischendes?",
    "lv": "Ai ceva răcoritor?",
    "level": "Sätze"
  },
  {
    "de": "Eine Portion Eis, bitte!",
    "lv": "O porție de înghețată, vă rog!",
    "level": "Sätze"
  },
  {
    "de": "Heute Morgen habe ich einen Brief bekommen.",
    "lv": "Am primit o scrisoare azi dimineață.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss ihm gleich schreiben.",
    "lv": "Trebuie să-i scriu acum.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der nächste Briefkasten?",
    "lv": "Unde este cea mai apropiată cutie poștală?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Post?",
    "lv": "Unde este oficiul poștal?",
    "level": "Sätze"
  },
  {
    "de": "Erinnere mich morgen daran zu schreiben!",
    "lv": "Amintește-mi să semnez mâine!",
    "level": "Sätze"
  },
  {
    "de": "Werfen Sie bitte diesen Brief in den Briefkasten.",
    "lv": "Vă rugăm să trimiteți această scrisoare în cutia poștală!",
    "level": "Sätze"
  },
  {
    "de": "Hallo, hier spricht Emma.",
    "lv": "Bună, aceasta este Emma.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich dich später anrufen?",
    "lv": "Pot sa te sun mai tarziu",
    "level": "Sätze"
  },
  {
    "de": "Muss ich lange warten?",
    "lv": "Trebuie să aștept mult?",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneiden Sie mir die Haare.",
    "lv": "Te rog tunde-mi parul.",
    "level": "Sätze"
  },
  {
    "de": "Hinten bitte nicht zu kurz.",
    "lv": "În spate, te rog, nu prea scurt.",
    "level": "Sätze"
  },
  {
    "de": "Wann beginnt die Vorstellung?",
    "lv": "Când începe spectacolul?",
    "level": "Sätze"
  },
  {
    "de": "Es fängt um halb acht an.",
    "lv": "Începe la șapte și jumătate.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind ausverkauft.",
    "lv": "Toate biletele sunt epuizate.",
    "level": "Sätze"
  },
  {
    "de": "Drei Karten, bitte!",
    "lv": "Trei bilete, te rog!",
    "level": "Sätze"
  },
  {
    "de": "Wir lassen die Jacken in der Garderobe.",
    "lv": "Să lăsăm jachetele în garderobă.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schnell, der Vorhang geht gleich auf!",
    "lv": "Mai repede te rog, cortina este pe cale să se deschidă!",
    "level": "Sätze"
  },
  {
    "de": "Der Vorhang fällt.",
    "lv": "Cortina cade.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dich zum Tanz bitten?",
    "lv": "Pot să te rog să dansezi?",
    "level": "Sätze"
  },
  {
    "de": "Wann ist eure Hochzeit?",
    "lv": "Când este nunta ta?",
    "level": "Sätze"
  },
  {
    "de": "Ich suche eine Wohnung.",
    "lv": "Caut apartament.",
    "level": "Sätze"
  },
  {
    "de": "Ist in diesem Haus eine Wohnung frei?",
    "lv": "Există un apartament disponibil în această casă?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet die Miete?",
    "lv": "Cât este chiria?",
    "level": "Sätze"
  },
  {
    "de": "Die Wohnung hat drei Zimmer und eine Küche.",
    "lv": "Apartamentul are trei camere si o bucatarie.",
    "level": "Sätze"
  },
  {
    "de": "Heute ziehen wir um.",
    "lv": "Azi ne mutam.",
    "level": "Sätze"
  },
  {
    "de": "Mia, pack die Sachen bitte in Kisten!",
    "lv": "Mia, pune lucrurile în cutii, te rog!",
    "level": "Sätze"
  },
  {
    "de": "Hast du alles eingepackt?",
    "lv": "Este totul deja în cutie?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe mit meinem Freund in Kontakt.",
    "lv": "Sunt în corespondență cu prietenul meu.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir ins Theater?",
    "lv": "Mergem la teatru?",
    "level": "Sätze"
  },
  {
    "de": "Ist alles eingeladen?",
    "lv": "Este totul încărcat?",
    "level": "Sätze"
  },
  {
    "de": "Welch schöne Aussicht!",
    "lv": "Ce priveliste frumoasa!",
    "level": "Sätze"
  },
  {
    "de": "Nun können wir alles wieder aufräumen.",
    "lv": "Acum putem pune totul la loc.",
    "level": "Sätze"
  },
  {
    "de": "Wie viele Zimmer habt ihr?",
    "lv": "Câte camere ai?",
    "level": "Sätze"
  },
  {
    "de": "Im Sommer fahre ich ans Meer.",
    "lv": "Voi merge la mare vara.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du schwimmen?",
    "lv": "Poți înota",
    "level": "Sätze"
  },
  {
    "de": "Schwimm nicht zu weit hinaus!",
    "lv": "Nu înota prea departe!",
    "level": "Sätze"
  },
  {
    "de": "Badest du jeden Tag?",
    "lv": "Înoți în fiecare zi?",
    "level": "Sätze"
  },
  {
    "de": "Bei schönem Wetter gehe ich angeln.",
    "lv": "Dacă vremea este bună, merg la pescuit.",
    "level": "Sätze"
  },
  {
    "de": "Wie sieht er aus?",
    "lv": "Cum arată el?",
    "level": "Sätze"
  },
  {
    "de": "Er hat sich aber recht verändert.",
    "lv": "Cu toate acestea, el s-a schimbat destul de mult.",
    "level": "Sätze"
  },
  {
    "de": "Wie ist er als Mensch?",
    "lv": "Cum este el ca persoană?",
    "level": "Sätze"
  },
  {
    "de": "Er ist immer nett und freundlich.",
    "lv": "El este întotdeauna drăguț și amabil.",
    "level": "Sätze"
  },
  {
    "de": "Ich fühle mich nicht wohl.",
    "lv": "Mă simt prost.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe starke Kopfschmerzen.",
    "lv": "Am o durere puternică de cap.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe mich erkältet.",
    "lv": "Am o răceală.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Schnupfen.",
    "lv": "Îmi curge nasul.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist schwindlig.",
    "lv": "Sunt amețit.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Arzt gehen.",
    "lv": "Trebuie să merg la doctor.",
    "level": "Sätze"
  },
  {
    "de": "Leg dich ins Bett!",
    "lv": "Întinde-te în pat!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Fieber?",
    "lv": "Ai febră?",
    "level": "Sätze"
  },
  {
    "de": "Gestern hatte ich erhöhte Temperatur.",
    "lv": "Am avut o temperatură ridicată ieri.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Zahnschmerzen.",
    "lv": "Mă dor dinții.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Zahnarzt gehen.",
    "lv": "Trebuie să merg la dentist.",
    "level": "Sätze"
  },
  {
    "de": "Weißt du, dass Finn krank ist?",
    "lv": "Știi că Finn este bolnav?",
    "level": "Sätze"
  },
  {
    "de": "Laut Arzt wird er bald wieder gesund.",
    "lv": "Potrivit medicului, va fi din nou bine în curând.",
    "level": "Sätze"
  },
  {
    "de": "Ich will meine Wohnung neu möblieren.",
    "lv": "Vreau sa renovez apartamentul.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das auf Raten kaufen?",
    "lv": "Pot cumpara in rate?",
    "level": "Sätze"
  },
  {
    "de": "Bleib im Bett, bis es dir besser geht!",
    "lv": "Stai în pat până te simți mai bine!",
    "level": "Sätze"
  },
  {
    "de": "Noah hat in zwei Wochen schwimmen gelernt.",
    "lv": "Noah a învățat să înoate în două săptămâni.",
    "level": "Sätze"
  },
  {
    "de": "Sei mit dem Essen noch vorsichtig.",
    "lv": "Aveți grijă la mâncare.",
    "level": "Sätze"
  },
  {
    "de": "Sprichst du Deutsch?",
    "lv": "Vorbesti germana?",
    "level": "Sätze"
  },
  {
    "de": "Ja, ein bisschen.",
    "lv": "Da, putin.",
    "level": "Sätze"
  },
  {
    "de": "Du sprichst ziemlich fließend.",
    "lv": "Vorbesti destul de fluent.",
    "level": "Sätze"
  },
  {
    "de": "Wo hast du Deutsch gelernt?",
    "lv": "Unde ai invatat germana?",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme seit einem Jahr Deutschstunden.",
    "lv": "De un an iau lecții de germană.",
    "level": "Sätze"
  },
  {
    "de": "Ich suche immer Gelegenheit, Deutsch zu sprechen.",
    "lv": "Caut mereu o oportunitate de a vorbi germana.",
    "level": "Sätze"
  },
  {
    "de": "Ist das Buch noch vorrätig?",
    "lv": "Mai este această carte disponibilă?",
    "level": "Sätze"
  },
  {
    "de": "Das Buch ist leider ausverkauft.",
    "lv": "Din păcate, cartea este epuizată.",
    "level": "Sätze"
  },
  {
    "de": "Wann erscheint die neue Auflage?",
    "lv": "Când va apărea noua ediție?",
    "level": "Sätze"
  },
  {
    "de": "Womit kann ich Ihnen helfen?",
    "lv": "Cum pot ajuta?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie ganz frische Eier?",
    "lv": "Ai ouă proaspete?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die?",
    "lv": "Cât costă?",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu teuer.",
    "lv": "Este prea scump.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir ein halbes Kilo abwiegen?",
    "lv": "Poți cântări jumătate de kilogram?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel muss ich zahlen?",
    "lv": "Cât trebuie să plătesc?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet das Kilo?",
    "lv": "Cât costă un kilogram?",
    "level": "Sätze"
  },
  {
    "de": "Wiegen Sie mir bitte zwei Kilo ab.",
    "lv": "Vă rog să cântăriți două kilograme.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch Karotten?",
    "lv": "Aveți și morcovi?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie gutes Rindfleisch?",
    "lv": "Ai carne de vită bună?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir zwei Kilo Hackfleisch.",
    "lv": "Dați două kilograme de carne tocată.",
    "level": "Sätze"
  },
  {
    "de": "Ein Laib Brot, bitte, aber nicht zu knusprig.",
    "lv": "O pâine, vă rog, dar nu prea tare.",
    "level": "Sätze"
  },
  {
    "de": "Das Brot ist frisch gebacken.",
    "lv": "Pâinea este proaspăt coaptă.",
    "level": "Sätze"
  },
  {
    "de": "Was für Obst haben Sie heute?",
    "lv": "Ce fructe ai azi?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die Äpfel?",
    "lv": "Cât costă merele?",
    "level": "Sätze"
  },
  {
    "de": "Dann nehme ich zwei Kilo Äpfel.",
    "lv": "Apoi voi lua două kilograme de mere.",
    "level": "Sätze"
  },
  {
    "de": "Die Birnen sind sehr teuer.",
    "lv": "Perele sunt foarte scumpe.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir alles nach Hause liefern?",
    "lv": "Poți livra totul la tine acasă?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie Reis?",
    "lv": "Ai orez?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir bitte ein Kilo Reis.",
    "lv": "Dă-mi un kilogram de orez, te rog.",
    "level": "Sätze"
  },
  {
    "de": "Danke, diesmal nicht.",
    "lv": "Mulțumesc, nu de data asta.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet dieser Teppich?",
    "lv": "Cât costă acest covor?",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Möbel in meine Wohnung liefern?",
    "lv": "Puteți livra mobilă în apartament?",
    "level": "Sätze"
  },
  {
    "de": "Bitte an der Kasse zahlen.",
    "lv": "Vă rugăm să plătiți la casierie.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, machen Sie die Rechnung.",
    "lv": "Vă rugăm să emiteți o factură.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Meter?",
    "lv": "Cât costă un contor?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Stoff gefällt mir.",
    "lv": "Îmi place această țesătură.",
    "level": "Sätze"
  },
  {
    "de": "Schneiden Sie mir bitte drei Meter ab.",
    "lv": "Vă rugăm să tăiați trei metri.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch andere Muster?",
    "lv": "Ai alte mostre?",
    "level": "Sätze"
  },
  {
    "de": "Diese Farbe gefällt mir nicht.",
    "lv": "Nu-mi place culoarea asta.",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir eine hellere.",
    "lv": "Oferă mai luminos.",
    "level": "Sätze"
  },
  {
    "de": "Was kosten diese Socken?",
    "lv": "Cât costă aceste șosete?",
    "level": "Sätze"
  },
  {
    "de": "Welche Handschuhe wünschen Sie?",
    "lv": "Ce fel de manusi vrei?",
    "level": "Sätze"
  },
  {
    "de": "Die sind mir etwas zu eng.",
    "lv": "Sunt puțin prea strânși pentru mine.",
    "level": "Sätze"
  },
  {
    "de": "So, nun passen sie gut.",
    "lv": "Deci, funcționează bine acum.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir einen guten Schneider empfehlen?",
    "lv": "Imi puteti recomanda un croitor bun?",
    "level": "Sätze"
  },
  {
    "de": "Ich will einen Anzug bestellen.",
    "lv": "Vreau să comand un costum.",
    "level": "Sätze"
  },
  {
    "de": "Wann wird er fertig sein?",
    "lv": "Când va fi gata?",
    "level": "Sätze"
  },
  {
    "de": "Der Anzug sitzt gut.",
    "lv": "Costumul se potrivește bine.",
    "level": "Sätze"
  },
  {
    "de": "Die Hose ist zu lang.",
    "lv": "Pantalonii sunt prea lungi.",
    "level": "Sätze"
  },
  {
    "de": "Bitte reinigen und bügeln Sie ihn!",
    "lv": "Vă rugăm să o curățați și să o călcați!",
    "level": "Sätze"
  },
  {
    "de": "Wann wird das Kleid fertig sein?",
    "lv": "Când va fi gata rochia?",
    "level": "Sätze"
  },
  {
    "de": "Die Schuhe sind zu eng.",
    "lv": "Pantofii sunt prea strâmți.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Schuhe heute reparieren?",
    "lv": "Îți poți repara pantofii azi?",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich die Schuhe abholen?",
    "lv": "Când pot aduce pantofii?",
    "level": "Sätze"
  },
  {
    "de": "Meine Armbanduhr funktioniert nicht.",
    "lv": "Ceasul meu de mână nu funcționează.",
    "level": "Sätze"
  },
  {
    "de": "Sie geht fünf Minuten vor.",
    "lv": "E cinci minute mai devreme.",
    "level": "Sätze"
  },
  {
    "de": "Bist du kurzsichtig oder weitsichtig?",
    "lv": "Esti miop sau hipermetrope?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte eine Brille kaufen.",
    "lv": "Vreau să cumpăr ochelari.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie meine Brille reparieren?",
    "lv": "Îmi poți repara ochelarii?",
    "level": "Sätze"
  },
  {
    "de": "Das dauert nur eine Viertelstunde.",
    "lv": "Va dura doar cincisprezece minute.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist mir zu hoch.",
    "lv": "Pretul este prea mare pentru mine.",
    "level": "Sätze"
  },
  {
    "de": "Ich brauche zwei Fotos für meinen Pass.",
    "lv": "Am nevoie de două fotografii de pașaport.",
    "level": "Sätze"
  },
  {
    "de": "Bitte packen Sie es ein und schicken Sie es mir nach Hause.",
    "lv": "Vă rugăm să împachetați și să trimiteți acasă.",
    "level": "Sätze"
  },
  {
    "de": "Wir haben feste Preise.",
    "lv": "Avem preturi fixe.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, fotografieren Sie mich.",
    "lv": "Te rog fă-mi o poză.",
    "level": "Sätze"
  },
  {
    "de": "Setzen Sie sich, schauen Sie gerade in die Kamera und bewegen Sie sich nicht!",
    "lv": "Așează-te, privește direct în cameră și nu te mișca!",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich das Probebild sehen?",
    "lv": "Când pot vedea o mostră?",
    "level": "Sätze"
  },
  {
    "de": "Wann sind die Fotos fertig?",
    "lv": "Când vor fi gata fotografiile?",
    "level": "Sätze"
  },
  {
    "de": "Die Aufnahme ist gelungen.",
    "lv": "Fotografia a avut succes.",
    "level": "Sätze"
  },
  {
    "de": "Die Fotos sind gut geworden.",
    "lv": "Fotografiile au iesit bine.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie das Foto auch vergrößern?",
    "lv": "Poti sa mariti si fotografia?",
    "level": "Sätze"
  },
  {
    "de": "Sind diese Steine echt?",
    "lv": "Sunt aceste pietre reale?",
    "level": "Sätze"
  },
  {
    "de": "Ist das echtes Gold?",
    "lv": "Este aur adevărat?",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir bitte Trauringe.",
    "lv": "Arată-mi verighetele, te rog.",
    "level": "Sätze"
  },
  {
    "de": "Der Ring ist mir etwas zu weit.",
    "lv": "Inelul este puțin prea mare pentru mine.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann ihn enger machen.",
    "lv": "O pot restrânge.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Ring passt mir.",
    "lv": "Acest inel mi se potrivește.",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir schöne Geschenkideen.",
    "lv": "Prezentați idei frumoase de cadouri.",
    "level": "Sätze"
  },
  {
    "de": "Wie gefallen dir diese Ohrringe?",
    "lv": "Cum vă plac acești cercei?",
    "level": "Sätze"
  },
  {
    "de": "Diese Brosche ist wirklich schön.",
    "lv": "Această broșă este foarte frumoasă.",
    "level": "Sätze"
  },
  {
    "de": "Der Stein ist ein Saphir.",
    "lv": "Această piatră este un safir.",
    "level": "Sätze"
  },
  {
    "de": "Das ist kein echter Stein, das ist Glas.",
    "lv": "Aceasta nu este piatră adevărată, este sticlă.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Armband kann ich Ihnen besonders empfehlen.",
    "lv": "Pot recomanda in special aceasta bratara.",
    "level": "Sätze"
  },
  {
    "de": "Es ist besonders schön gearbeitet.",
    "lv": "Este extrem de fin lucrat.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist nicht hoch.",
    "lv": "Pretul nu este mare.",
    "level": "Sätze"
  },
  {
    "de": "Bekomme ich die Schachtel gratis?",
    "lv": "Am primit cutia gratis?",
    "level": "Sätze"
  },
  {
    "de": "Alle Schmuckstücke sind gestempelt.",
    "lv": "Toate bijuteriile sunt ștampilate.",
    "level": "Sätze"
  },
  {
    "de": "Falls es meiner Frau nicht gefällt, kann ich es umtauschen?",
    "lv": "Dacă soției mele nu îi place, pot să-l schimb?",
    "level": "Sätze"
  },
  {
    "de": "Natürlich, jederzeit.",
    "lv": "Oricând, desigur.",
    "level": "Sätze"
  }
];
window.SENTENCE_ENTRIES = SENTENCE_ENTRIES;

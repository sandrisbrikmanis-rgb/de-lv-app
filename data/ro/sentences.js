const SENTENCE_ENTRIES = [
  {
    "de": "Hüte dich davor!",
    "lv": "Ferește-te de asta!",
    "level": "Sätze"
  },
  {
    "de": "Wenn nichts dazwischenkommt.",
    "lv": "Dacă nu intervine nimic. • Dacă totul merge conform planului.",
    "level": "Sätze"
  },
  {
    "de": "Das kann ich mir denken!",
    "lv": "Îmi pot închipui!",
    "level": "Sätze"
  },
  {
    "de": "Ist er denn krank?",
    "lv": "Dar e bolnav?",
    "level": "Sätze"
  },
  {
    "de": "Was denn?",
    "lv": "Ce e?",
    "level": "Sätze"
  },
  {
    "de": "Desto mehr.",
    "lv": "Cu atât mai mult.",
    "level": "Sätze"
  },
  {
    "de": "Je mehr, desto besser.",
    "lv": "Cu cât mai mult, cu atât mai bine.",
    "level": "Sätze"
  },
  {
    "de": "Alles deutet auf Regen.",
    "lv": "Totul arată că va ploua.",
    "level": "Sätze"
  },
  {
    "de": "Damit ist mir wenig gedient.",
    "lv": "Asta nu prea mă ajută.",
    "level": "Sätze"
  },
  {
    "de": "Er ist dienstlich verhindert.",
    "lv": "Nu poate veni din motive de serviciu.",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie doch!",
    "lv": "Vorbiți odată!",
    "level": "Sätze"
  },
  {
    "de": "Es donnert.",
    "lv": "Tună.",
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
    "lv": "Timpul presează.",
    "level": "Sätze"
  },
  {
    "de": "Ihn drücken Sorgen.",
    "lv": "Îl apasă grijile.",
    "level": "Sätze"
  },
  {
    "de": "Hast du das Buch durchgearbeitet?",
    "lv": "Ai studiat temeinic cartea?",
    "level": "Sätze"
  },
  {
    "de": "Kein Durchgang!",
    "lv": "Trecerea interzisă!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich Sie bitten?",
    "lv": "Îmi acordați acest dans? • Mă urmați, vă rog?",
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
    "lv": "Ce vreți de fapt?",
    "level": "Sätze"
  },
  {
    "de": "Eilt es mit dieser Sache?",
    "lv": "Este urgentă această chestiune?",
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
    "lv": "Doar îți închipui că ești bolnav.",
    "level": "Sätze"
  },
  {
    "de": "Was fällt dir ein?",
    "lv": "Cum îți permiți? • Ce-ți vine în minte?",
    "level": "Sätze"
  },
  {
    "de": "Es war einmal.",
    "lv": "A fost odată.",
    "level": "Sätze"
  },
  {
    "de": "Steigen Sie bitte ein!",
    "lv": "Urcați, vă rog!",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie ein!",
    "lv": "Intrați!",
    "level": "Sätze"
  },
  {
    "de": "Einzelnes hat mir dort gefallen.",
    "lv": "Unele lucruri mi-au plăcut acolo.",
    "level": "Sätze"
  },
  {
    "de": "Es empfiehlt sich.",
    "lv": "Se recomandă.",
    "level": "Sätze"
  },
  {
    "de": "Diese Flasche enthält Essig.",
    "lv": "Sticla aceasta conține oțet.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldigen Sie bitte!",
    "lv": "Scuzați-mă, vă rog!",
    "level": "Sätze"
  },
  {
    "de": "Entweder... oder...",
    "lv": "Ori..., ori...",
    "level": "Sätze"
  },
  {
    "de": "Wer war der Erste?",
    "lv": "Cine a fost primul?",
    "level": "Sätze"
  },
  {
    "de": "Wer fehlt heute?",
    "lv": "Cine lipsește azi?",
    "level": "Sätze"
  },
  {
    "de": "Was fehlt dir?",
    "lv": "Ce ai?",
    "level": "Sätze"
  },
  {
    "de": "Wie heißen Sie?",
    "lv": "Cum vă numiți?",
    "level": "Sätze"
  },
  {
    "de": "Was soll das heißen?",
    "lv": "Ce vrea să însemne asta?",
    "level": "Sätze"
  },
  {
    "de": "Bitte treten Sie näher heran!",
    "lv": "Apropiați-vă, vă rog!",
    "level": "Sätze"
  },
  {
    "de": "Heraus mit der Sprache!",
    "lv": "Spune odată!",
    "level": "Sätze"
  },
  {
    "de": "im Herbst",
    "lv": "toamna",
    "level": "Sätze"
  },
  {
    "de": "Meine Herrschaften!",
    "lv": "Doamnelor și domnilor!",
    "level": "Sätze"
  },
  {
    "de": "von heute an",
    "lv": "începând de azi",
    "level": "Sätze"
  },
  {
    "de": "heute früh",
    "lv": "azi-dimineață",
    "level": "Sätze"
  },
  {
    "de": "heute Nacht",
    "lv": "la noapte • azi-noapte",
    "level": "Sätze"
  },
  {
    "de": "Zu Hilfe!",
    "lv": "Ajutor!",
    "level": "Sätze"
  },
  {
    "de": "Ich lerne jeden Tag Deutsch.",
    "lv": "Învăț germana în fiecare zi.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das bitte wiederholen?",
    "lv": "Poți să repeți, te rog?",
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
    "lv": "Ați putea să explicați asta mai în detaliu?",
    "level": "Sätze"
  },
  {
    "de": "Was mich anbelangt,...",
    "lv": "În ceea ce mă privește,...",
    "level": "Sätze"
  },
  {
    "de": "Wie alt sind Sie?",
    "lv": "Câți ani aveți?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zwanzig Jahre alt.",
    "lv": "Am douăzeci de ani.",
    "level": "Sätze"
  },
  {
    "de": "Von heute an.",
    "lv": "De azi înainte.",
    "level": "Sätze"
  },
  {
    "de": "Von jetzt an.",
    "lv": "De acum înainte.",
    "level": "Sätze"
  },
  {
    "de": "Anders geht es nicht.",
    "lv": "Altfel nu se poate.",
    "level": "Sätze"
  },
  {
    "de": "Rufen Sie mich an.",
    "lv": "Sunați-mă.",
    "level": "Sätze"
  },
  {
    "de": "Bitte stellen Sie das Radio ab.",
    "lv": "Vă rog, opriți radioul.",
    "level": "Sätze"
  },
  {
    "de": "Achte bitte auf den Verkehr.",
    "lv": "Fii atent la trafic, te rog.",
    "level": "Sätze"
  },
  {
    "de": "Darauf musst du achten.",
    "lv": "La asta trebuie să fii atent.",
    "level": "Sätze"
  },
  {
    "de": "Heute mache ich es anders.",
    "lv": "Azi o fac altfel.",
    "level": "Sätze"
  },
  {
    "de": "Wir warten auf den Bus.",
    "lv": "Așteptăm autobuzul.",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt allein.",
    "lv": "Locuiește singur.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Ausbildung absolviert.",
    "lv": "Mi-am terminat formarea profesională. • Mi-am terminat studiile.",
    "level": "Sätze"
  },
  {
    "de": "Ich warte den Regen ab.",
    "lv": "Aștept să treacă ploaia.",
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
    "lv": "Mi-a acceptat propunerea.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte das genauer analysieren.",
    "lv": "Aș vrea să analizez asta mai în detaliu.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte den Vertrag ändern.",
    "lv": "Aș vrea să modific contractul.",
    "level": "Sätze"
  },
  {
    "de": "Er ändert ständig seine Meinung.",
    "lv": "Își schimbă mereu părerea.",
    "level": "Sätze"
  },
  {
    "de": "Ähnliche Probleme hatten wir schon früher.",
    "lv": "Am mai avut probleme asemănătoare.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ahnung!",
    "lv": "Habar n-am!",
    "level": "Sätze"
  },
  {
    "de": "Hör auf zu jammern.",
    "lv": "Nu te mai văita.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Kleid ist stilvoll und konservativ.",
    "lv": "Această rochie are un stil elegant și sobru.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre gerne Akkordeonmusik.",
    "lv": "Îmi place să ascult muzică de acordeon.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das Gerät anklicken?",
    "lv": "Poți să dai clic pe dispozitiv?",
    "level": "Sätze"
  },
  {
    "de": "Bitte öffne die Datei und klicke darauf.",
    "lv": "Te rog, deschide fișierul și dă clic pe el.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe einen Unfall gehabt.",
    "lv": "Am avut un accident.",
    "level": "Sätze"
  },
  {
    "de": "Wir laufen zum Bahnhof.",
    "lv": "Mergem pe jos la gară.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schalte den Fernseher an.",
    "lv": "Te rog, pornește televizorul.",
    "level": "Sätze"
  },
  {
    "de": "Mein Computer ist abgestürzt.",
    "lv": "Mi s-a blocat calculatorul.",
    "level": "Sätze"
  },
  {
    "de": "Am Wochenende gehe ich angeln.",
    "lv": "În weekend merg la pescuit.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe den Anruf verpasst.",
    "lv": "Am pierdut apelul.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mich später anrufen?",
    "lv": "Poți să mă suni mai târziu?",
    "level": "Sätze"
  },
  {
    "de": "Bitte nimm meinen Vorschlag an.",
    "lv": "Te rog, acceptă-mi propunerea.",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme dein Angebot an.",
    "lv": "Îți accept oferta.",
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
    "lv": "Nu-ți fie frică, totul va fi bine.",
    "level": "Sätze"
  },
  {
    "de": "Anklang finden.",
    "lv": "A se bucura de apreciere. • A găsi ecou.",
    "level": "Sätze"
  },
  {
    "de": "Es kommt darauf an.",
    "lv": "Depinde.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Anlass.",
    "lv": "Cu această ocazie.",
    "level": "Sätze"
  },
  {
    "de": "Nehmen wir an, dass...",
    "lv": "Să presupunem că...",
    "level": "Sätze"
  },
  {
    "de": "Was hast du da angerichtet?",
    "lv": "Ce ai mai făcut acolo?",
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
    "lv": "După părerea mea...",
    "level": "Sätze"
  },
  {
    "de": "Stell dich nicht so an!",
    "lv": "Nu mai face atâta caz!",
    "level": "Sätze"
  },
  {
    "de": "An die Arbeit gehen.",
    "lv": "A se apuca de lucru.",
    "level": "Sätze"
  },
  {
    "de": "Außer Atem sein.",
    "lv": "A fi cu sufletul la gură.",
    "level": "Sätze"
  },
  {
    "de": "Guten Appetit!",
    "lv": "Poftă bună!",
    "level": "Sätze"
  },
  {
    "de": "In einem Atemzug.",
    "lv": "Dintr-o suflare.",
    "level": "Sätze"
  },
  {
    "de": "Auf jeden Fall.",
    "lv": "În orice caz. • Cu siguranță.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal war alles still.",
    "lv": "Deodată s-a făcut liniște.",
    "level": "Sätze"
  },
  {
    "de": "Bitte mach die Tür auf!",
    "lv": "Te rog, deschide ușa!",
    "level": "Sätze"
  },
  {
    "de": "Er hat den Kredit aufgenommen.",
    "lv": "A luat creditul.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen heute aufräumen.",
    "lv": "Astăzi trebuie să facem ordine.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre jetzt auf.",
    "lv": "Acum mă opresc.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schon auf.",
    "lv": "S-a sculat deja.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen das Treffen verschieben.",
    "lv": "Trebuie să amânăm întâlnirea.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat mich aufgeregt.",
    "lv": "M-a enervat.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal.",
    "lv": "Deodată.",
    "level": "Sätze"
  },
  {
    "de": "Auf der Stelle.",
    "lv": "Pe loc.",
    "level": "Sätze"
  },
  {
    "de": "Für den Schaden aufkommen.",
    "lv": "A acoperi paguba.",
    "level": "Sätze"
  },
  {
    "de": "Bitte die Tür auf!",
    "lv": "Deschideți ușa, vă rog!",
    "level": "Sätze"
  },
  {
    "de": "Aufrecht sitzen.",
    "lv": "A sta drept.",
    "level": "Sätze"
  },
  {
    "de": "Er ist auf.",
    "lv": "S-a sculat.",
    "level": "Sätze"
  },
  {
    "de": "Alle Kräfte aufwenden.",
    "lv": "A-și mobiliza toate forțele.",
    "level": "Sätze"
  },
  {
    "de": "Viel Mühe aufwenden.",
    "lv": "A depune mult efort.",
    "level": "Sätze"
  },
  {
    "de": "Geh mir aus den Augen!",
    "lv": "Piei din ochii mei!",
    "level": "Sätze"
  },
  {
    "de": "Unter vier Augen.",
    "lv": "Între patru ochi.",
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
    "lv": "Toți în afară de tine.",
    "level": "Sätze"
  },
  {
    "de": "Auf Äußerlichkeiten Wert legen.",
    "lv": "A pune preț pe aparențe.",
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
    "lv": "Are șanse bune.",
    "level": "Sätze"
  },
  {
    "de": "Wie wird dieses Wort ausgesprochen?",
    "lv": "Cum se pronunță acest cuvânt?",
    "level": "Sätze"
  },
  {
    "de": "Sein Beileid aussprechen.",
    "lv": "A-și prezenta condoleanțele.",
    "level": "Sätze"
  },
  {
    "de": "Wann wurden die Meisterschaftskämpfe ausgetragen?",
    "lv": "Când s-au desfășurat campionatele?",
    "level": "Sätze"
  },
  {
    "de": "Welchen Beruf üben Sie aus?",
    "lv": "Ce profesie aveți?",
    "level": "Sätze"
  },
  {
    "de": "Einfluss ausüben.",
    "lv": "A exercita influență.",
    "level": "Sätze"
  },
  {
    "de": "Auswärts essen.",
    "lv": "A mânca în oraș.",
    "level": "Sätze"
  },
  {
    "de": "Per Bahn.",
    "lv": "Pe calea ferată.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Bahn.",
    "lv": "Cu trenul.",
    "level": "Sätze"
  },
  {
    "de": "Möglichst bald.",
    "lv": "Cât mai curând.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist Angst und bange.",
    "lv": "Mi-e tare frică.",
    "level": "Sätze"
  },
  {
    "de": "Auf die lange Bank schieben.",
    "lv": "A amâna la nesfârșit. • A tărăgăna lucrurile.",
    "level": "Sätze"
  },
  {
    "de": "Bar zahlen.",
    "lv": "A plăti în numerar.",
    "level": "Sätze"
  },
  {
    "de": "Erz bauen.",
    "lv": "A extrage minereu.",
    "level": "Sätze"
  },
  {
    "de": "Mist bauen.",
    "lv": "A face prostii.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin beauftragt.",
    "lv": "Am fost însărcinat.",
    "level": "Sätze"
  },
  {
    "de": "Nach Bedarf.",
    "lv": "După nevoie.",
    "level": "Sätze"
  },
  {
    "de": "Ich bedauere ihn.",
    "lv": "Mi-e milă de el.",
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
    "lv": "Pare abătută.",
    "level": "Sätze"
  },
  {
    "de": "Hinweise befolgen.",
    "lv": "A urma indicațiile.",
    "level": "Sätze"
  },
  {
    "de": "Befehle befolgen.",
    "lv": "A executa ordinele.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Post befördern.",
    "lv": "A trimite prin poștă.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin begierig zu wissen.",
    "lv": "Sunt nerăbdător să aflu.",
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
    "lv": "La începere.",
    "level": "Sätze"
  },
  {
    "de": "In Begleitung.",
    "lv": "Însoțit.",
    "level": "Sätze"
  },
  {
    "de": "Mit seiner Begleitung.",
    "lv": "Cu însoțitorul său.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schwer von Begriff.",
    "lv": "E greu de cap. • Pricepe greu.",
    "level": "Sätze"
  },
  {
    "de": "Im Gedächtnis behalten.",
    "lv": "A ține minte. • A păstra în memorie.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tisch.",
    "lv": "La masă.",
    "level": "Sätze"
  },
  {
    "de": "Bei Sinnen sein.",
    "lv": "A fi în toate mințile.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tage.",
    "lv": "În timpul zilei.",
    "level": "Sätze"
  },
  {
    "de": "Bei weitem nicht so.",
    "lv": "Nici pe departe așa.",
    "level": "Sätze"
  },
  {
    "de": "Alle beide.",
    "lv": "Amândoi.",
    "level": "Sätze"
  },
  {
    "de": "Stürmischer Beifall brach los.",
    "lv": "Au izbucnit aplauze furtunoase.",
    "level": "Sätze"
  },
  {
    "de": "Beifall finden.",
    "lv": "A fi bine primit.",
    "level": "Sätze"
  },
  {
    "de": "Beileid aussprechen.",
    "lv": "A exprima condoleanțe.",
    "level": "Sätze"
  },
  {
    "de": "Auf eigenen Beinen stehen.",
    "lv": "A sta pe propriile picioare.",
    "level": "Sätze"
  },
  {
    "de": "Zum Beispiel.",
    "lv": "De exemplu.",
    "level": "Sätze"
  },
  {
    "de": "Beistand leisten.",
    "lv": "A da ajutor. • A acorda sprijin.",
    "level": "Sätze"
  },
  {
    "de": "Beitrag leisten.",
    "lv": "A-și aduce contribuția.",
    "level": "Sätze"
  },
  {
    "de": "Jemandes Bekanntschaft machen.",
    "lv": "A face cunoștință cu cineva.",
    "level": "Sätze"
  },
  {
    "de": "Bekanntschaft anknüpfen.",
    "lv": "A lega cunoștință. • A stabili un contact.",
    "level": "Sätze"
  },
  {
    "de": "Belegte Brötchen.",
    "lv": "Sendvișuri.",
    "level": "Sätze"
  },
  {
    "de": "Nach Ihrem Belieben.",
    "lv": "După bunul dumneavoastră plac.",
    "level": "Sätze"
  },
  {
    "de": "Zu jeder beliebigen Zeit.",
    "lv": "În orice moment.",
    "level": "Sätze"
  },
  {
    "de": "Schweigen beobachten.",
    "lv": "A păstra tăcerea.",
    "level": "Sätze"
  },
  {
    "de": "Zur Bequemlichkeit.",
    "lv": "Pentru comoditate.",
    "level": "Sätze"
  },
  {
    "de": "Bereit sein.",
    "lv": "A fi gata. • A fi dispus.",
    "level": "Sätze"
  },
  {
    "de": "Unfallopfer bergen.",
    "lv": "A salva victimele unui accident.",
    "level": "Sätze"
  },
  {
    "de": "Bericht erstatten.",
    "lv": "A raporta. • A face un raport.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind besetzt.",
    "lv": "Toate locurile sunt ocupate.",
    "level": "Sätze"
  },
  {
    "de": "Neue Besen kehren gut.",
    "lv": "Mătura nouă mătură bine.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt ein Haus.",
    "lv": "Deține o casă.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt viel Mut.",
    "lv": "Are mult curaj.",
    "level": "Sätze"
  },
  {
    "de": "Desto besser.",
    "lv": "Cu atât mai bine.",
    "level": "Sätze"
  },
  {
    "de": "Gute Besserung!",
    "lv": "Însănătoșire grabnică!",
    "level": "Sätze"
  },
  {
    "de": "Beim besten Willen.",
    "lv": "Cu toată bunăvoința.",
    "level": "Sätze"
  },
  {
    "de": "Am besten.",
    "lv": "Cel mai bine.",
    "level": "Sätze"
  },
  {
    "de": "Es besteht Zweifel.",
    "lv": "Există îndoieli.",
    "level": "Sätze"
  },
  {
    "de": "Seine Aufgabe besteht darin...",
    "lv": "Sarcina lui constă în...",
    "level": "Sätze"
  },
  {
    "de": "Grüße bestellen.",
    "lv": "A transmite salutări.",
    "level": "Sätze"
  },
  {
    "de": "Ganz bestimmt.",
    "lv": "Cu siguranță.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch kommen.",
    "lv": "A veni în vizită.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch sein.",
    "lv": "A fi în vizită.",
    "level": "Sätze"
  },
  {
    "de": "Oft Konzerte besuchen.",
    "lv": "A merge des la concerte.",
    "level": "Sätze"
  },
  {
    "de": "Welche Schule hat er besucht?",
    "lv": "La ce școală a învățat?",
    "level": "Sätze"
  },
  {
    "de": "In Betracht ziehen.",
    "lv": "A lua în considerare. • A avea în vedere.",
    "level": "Sätze"
  },
  {
    "de": "Außer Betracht lassen.",
    "lv": "A nu lua în considerare.",
    "level": "Sätze"
  },
  {
    "de": "Er betreibt ein Hotel.",
    "lv": "Administrează un hotel.",
    "level": "Sätze"
  },
  {
    "de": "Alle beiden.",
    "lv": "Amândoi.",
    "level": "Sätze"
  },
  {
    "de": "Alles bezahlen.",
    "lv": "A plăti tot.",
    "level": "Sätze"
  },
  {
    "de": "In Bezug auf etwas.",
    "lv": "Referitor la ceva.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön.",
    "lv": "Cu plăcere. • Poftim.",
    "level": "Sätze"
  },
  {
    "de": "Wie bitte?",
    "lv": "Poftim?",
    "level": "Sätze"
  },
  {
    "de": "Bitte sehr.",
    "lv": "Pentru puțin. • Poftiți.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe eine Bitte an Sie.",
    "lv": "Am o rugăminte la dumneavoastră.",
    "level": "Sätze"
  },
  {
    "de": "Trompete blasen.",
    "lv": "A cânta la trompetă.",
    "level": "Sätze"
  },
  {
    "de": "In einem Buch blättern.",
    "lv": "A răsfoi o carte.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßen Füßen.",
    "lv": "Cu picioarele goale.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßem Auge.",
    "lv": "Cu ochiul liber.",
    "level": "Sätze"
  },
  {
    "de": "Danke für die Blumen!",
    "lv": "Mulțumesc pentru compliment!",
    "level": "Sätze"
  },
  {
    "de": "Alles in Butter.",
    "lv": "Totul merge strună.",
    "level": "Sätze"
  },
  {
    "de": "Bitte checken.",
    "lv": "Vă rugăm să verificați.",
    "level": "Sätze"
  },
  {
    "de": "Da ist er!",
    "lv": "Iată-l!",
    "level": "Sätze"
  },
  {
    "de": "Alles spricht dafür.",
    "lv": "Totul pledează pentru asta.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann nichts dafür.",
    "lv": "Nu e vina mea.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin dagegen.",
    "lv": "Sunt împotrivă.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe nichts dagegen.",
    "lv": "N-am nimic împotrivă.",
    "level": "Sätze"
  },
  {
    "de": "Von daheim.",
    "lv": "De acasă.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Dame ziehen.",
    "lv": "A muta dama.",
    "level": "Sätze"
  },
  {
    "de": "Es dämmert.",
    "lv": "Se înserează. • Se luminează de ziuă.",
    "level": "Sätze"
  },
  {
    "de": "Danke schön!",
    "lv": "Mulțumesc frumos!",
    "level": "Sätze"
  },
  {
    "de": "Dann und wann.",
    "lv": "Din când în când.",
    "level": "Sätze"
  },
  {
    "de": "Darauf kannst du dich verlassen.",
    "lv": "Te poți baza pe asta.",
    "level": "Sätze"
  },
  {
    "de": "Daraus wird nichts.",
    "lv": "Din asta nu iese nimic.",
    "level": "Sätze"
  },
  {
    "de": "So dass...",
    "lv": "Astfel încât...",
    "level": "Sätze"
  },
  {
    "de": "Für wen halten Sie mich?",
    "lv": "Drept cine mă luați?",
    "level": "Sätze"
  },
  {
    "de": "Hände weg!",
    "lv": "Jos mâinile!",
    "level": "Sätze"
  },
  {
    "de": "Lass den Kopf nicht hängen!",
    "lv": "Nu te descuraja!",
    "level": "Sätze"
  },
  {
    "de": "zu Hause",
    "lv": "acasă",
    "level": "Sätze"
  },
  {
    "de": "nach Hause gehen",
    "lv": "a merge acasă",
    "level": "Sätze"
  },
  {
    "de": "von Haus aus",
    "lv": "de origine • din fire",
    "level": "Sätze"
  },
  {
    "de": "Meinen herzlichsten Glückwunsch!",
    "lv": "Cele mai călduroase felicitări!",
    "level": "Sätze"
  },
  {
    "de": "Seien Sie so gut!",
    "lv": "Fiți atât de bun!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie die Güte!",
    "lv": "Aveți bunătatea!",
    "level": "Sätze"
  },
  {
    "de": "Was hast du?",
    "lv": "Ce ai?",
    "level": "Sätze"
  },
  {
    "de": "Gestatten Sie bitte!",
    "lv": "Permiteți, vă rog!",
    "level": "Sätze"
  },
  {
    "de": "Ist es gestattet zu rauchen?",
    "lv": "Este permis fumatul?",
    "level": "Sätze"
  },
  {
    "de": "Ich muss gestehen, dass...",
    "lv": "Trebuie să recunosc că...",
    "level": "Sätze"
  },
  {
    "de": "gestern früh",
    "lv": "ieri-dimineață",
    "level": "Sätze"
  },
  {
    "de": "gestern Abend",
    "lv": "ieri-seară",
    "level": "Sätze"
  },
  {
    "de": "Es ist mir gleichgültig, ob...",
    "lv": "Mi-e indiferent dacă...",
    "level": "Sätze"
  },
  {
    "de": "Was ist geschehen?",
    "lv": "Ce s-a întâmplat?",
    "level": "Sätze"
  },
  {
    "de": "Mach keine Geschichten!",
    "lv": "Nu face mofturi! • Nu face prostii!",
    "level": "Sätze"
  },
  {
    "de": "Geschweige denn...",
    "lv": "Ca să nu mai vorbim de... • Darămite...",
    "level": "Sätze"
  },
  {
    "de": "Gehen Sie geradeaus!",
    "lv": "Mergeți drept înainte!",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es Ihnen?",
    "lv": "Ce mai faceți?",
    "level": "Sätze"
  },
  {
    "de": "Frag ihn gelegentlich, ob...",
    "lv": "Întreabă-l, când ai ocazia, dacă...",
    "level": "Sätze"
  },
  {
    "de": "morgen früh",
    "lv": "mâine-dimineață",
    "level": "Sätze"
  },
  {
    "de": "im Frühling",
    "lv": "primăvara",
    "level": "Sätze"
  },
  {
    "de": "Was gibt’s Neues?",
    "lv": "Ce mai e nou?",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Brief folgt, dass...",
    "lv": "Din această scrisoare reiese că...",
    "level": "Sätze"
  },
  {
    "de": "Fahre fort!",
    "lv": "Continuă!",
    "level": "Sätze"
  },
  {
    "de": "Er ist kein Freund von...",
    "lv": "Nu e un amator de...",
    "level": "Sätze"
  },
  {
    "de": "Es erwies sich, dass...",
    "lv": "S-a dovedit că...",
    "level": "Sätze"
  },
  {
    "de": "Gedenkst du meiner?",
    "lv": "Îți amintești de mine? • Te gândești la mine?",
    "level": "Sätze"
  },
  {
    "de": "im Winter",
    "lv": "iarna",
    "level": "Sätze"
  },
  {
    "de": "Welcher Jahrgang sind Sie?",
    "lv": "În ce an v-ați născut?",
    "level": "Sätze"
  },
  {
    "de": "Es jammert mich zu sehen...",
    "lv": "Mi-e milă să văd...",
    "level": "Sätze"
  },
  {
    "de": "je mehr, desto besser",
    "lv": "cu cât mai mult, cu atât mai bine",
    "level": "Sätze"
  },
  {
    "de": "bis jetzt",
    "lv": "până acum",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich zum Bahnhof?",
    "lv": "Cum ajung la gară?",
    "level": "Sätze"
  },
  {
    "de": "Komm her!",
    "lv": "Vino încoace!",
    "level": "Sätze"
  },
  {
    "de": "Könnte ich Frau N. sprechen?",
    "lv": "Aș putea vorbi cu doamna N.?",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das?",
    "lv": "Cât costă asta?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange dauert die Vorstellung?",
    "lv": "Cât durează spectacolul?",
    "level": "Sätze"
  },
  {
    "de": "Lass das!",
    "lv": "Încetează! • Lasă asta!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich in Ruhe!",
    "lv": "Lasă-mă în pace!",
    "level": "Sätze"
  },
  {
    "de": "Lassen Sie mich Ihnen helfen!",
    "lv": "Permiteți-mi să vă ajut!",
    "level": "Sätze"
  },
  {
    "de": "Lasst uns gehen!",
    "lv": "Haideți să mergem!",
    "level": "Sätze"
  },
  {
    "de": "Na, wie läufts?",
    "lv": "Ei, cum merge?",
    "level": "Sätze"
  },
  {
    "de": "Es lebe!",
    "lv": "Trăiască!",
    "level": "Sätze"
  },
  {
    "de": "Leben Sie wohl!",
    "lv": "Rămâneți cu bine! • Adio!",
    "level": "Sätze"
  },
  {
    "de": "Was ist los?",
    "lv": "Ce se întâmplă?",
    "level": "Sätze"
  },
  {
    "de": "Der Job ist anstrengend.",
    "lv": "Slujba e obositoare.",
    "level": "Sätze"
  },
  {
    "de": "Das war ein anstrengender Tag.",
    "lv": "A fost o zi obositoare.",
    "level": "Sätze"
  },
  {
    "de": "Deutsch lernen kann anstrengend sein.",
    "lv": "Învățarea limbii germane poate fi obositoare.",
    "level": "Sätze"
  },
  {
    "de": "Er verlangt eine Erklärung.",
    "lv": "Cere o explicație.",
    "level": "Sätze"
  },
  {
    "de": "Der Verkäufer verlangt zu viel Geld.",
    "lv": "Vânzătorul cere prea mulți bani.",
    "level": "Sätze"
  },
  {
    "de": "Das Gesetz verlangt es so.",
    "lv": "Așa cere legea.",
    "level": "Sätze"
  },
  {
    "de": "Das ist gar nicht so schwer.",
    "lv": "Nu e deloc atât de greu.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe gar kein Geld.",
    "lv": "N-am deloc bani.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gar nichts gesagt.",
    "lv": "N-a spus absolut nimic.",
    "level": "Sätze"
  },
  {
    "de": "Der Hund ist los.",
    "lv": "Câinele e liber.",
    "level": "Sätze"
  },
  {
    "de": "Hier ist viel los.",
    "lv": "Aici se întâmplă multe.",
    "level": "Sätze"
  },
  {
    "de": "Halt die Luft an!",
    "lv": "Taci odată! • Nu exagera!",
    "level": "Sätze"
  },
  {
    "de": "Was machst du?",
    "lv": "Ce faci?",
    "level": "Sätze"
  },
  {
    "de": "Sag mal!",
    "lv": "Ia spune!",
    "level": "Sätze"
  },
  {
    "de": "Was meinen Sie damit?",
    "lv": "Ce vreți să spuneți cu asta?",
    "level": "Sätze"
  },
  {
    "de": "Wir gehen mit Ihnen.",
    "lv": "Mergem cu dumneavoastră.",
    "level": "Sätze"
  },
  {
    "de": "Ich fahre mit der Eisenbahn.",
    "lv": "Merg cu trenul.",
    "level": "Sätze"
  },
  {
    "de": "am Mittwoch",
    "lv": "miercuri",
    "level": "Sätze"
  },
  {
    "de": "Es mag sein.",
    "lv": "Se poate.",
    "level": "Sätze"
  },
  {
    "de": "Ich mag das nicht.",
    "lv": "Nu-mi place asta.",
    "level": "Sätze"
  },
  {
    "de": "am Montag",
    "lv": "luni",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen!",
    "lv": "Bună dimineața!",
    "level": "Sätze"
  },
  {
    "de": "am Morgen",
    "lv": "dimineața",
    "level": "Sätze"
  },
  {
    "de": "Gute Nacht!",
    "lv": "Noapte bună!",
    "level": "Sätze"
  },
  {
    "de": "Nehmen Sie Platz!",
    "lv": "Luați loc!",
    "level": "Sätze"
  },
  {
    "de": "Letzte Neuheit!",
    "lv": "Ultima noutate!",
    "level": "Sätze"
  },
  {
    "de": "Nicht wahr?",
    "lv": "Nu-i așa?",
    "level": "Sätze"
  },
  {
    "de": "Nicht doch!",
    "lv": "Ba nu! • Nu, nu face asta!",
    "level": "Sätze"
  },
  {
    "de": "Nun endlich!",
    "lv": "În sfârșit!",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das?",
    "lv": "La ce folosește asta?",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das alles?",
    "lv": "La ce folosesc toate astea?",
    "level": "Sätze"
  },
  {
    "de": "Parken verboten!",
    "lv": "Parcarea interzisă!",
    "level": "Sätze"
  },
  {
    "de": "Nicht parken!",
    "lv": "Nu parcați!",
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
    "lv": "Nici nu poate fi vorba despre asta.",
    "level": "Sätze"
  },
  {
    "de": "Glückliche Reise!",
    "lv": "Drum bun!",
    "level": "Sätze"
  },
  {
    "de": "Mir reißt die Geduld.",
    "lv": "Îmi pierd răbdarea.",
    "level": "Sätze"
  },
  {
    "de": "Man sagt, dass...",
    "lv": "Se spune că...",
    "level": "Sätze"
  },
  {
    "de": "Schon gut!",
    "lv": "E în regulă!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön!",
    "lv": "Poftim! • Cu plăcere!",
    "level": "Sätze"
  },
  {
    "de": "Was bin ich schuldig?",
    "lv": "Cât vă datorez? • Cât am de plătit?",
    "level": "Sätze"
  },
  {
    "de": "Vor dem Gebrauch schütteln!",
    "lv": "A se agita înainte de folosire!",
    "level": "Sätze"
  },
  {
    "de": "Sehen Sie mal!",
    "lv": "Uitați-vă!",
    "level": "Sätze"
  },
  {
    "de": "Wie sehr auch...",
    "lv": "Oricât de mult...",
    "level": "Sätze"
  },
  {
    "de": "Seit wann?",
    "lv": "De când?",
    "level": "Sätze"
  },
  {
    "de": "Was soll ich tun?",
    "lv": "Ce să fac?",
    "level": "Sätze"
  },
  {
    "de": "im Sommer",
    "lv": "vara",
    "level": "Sätze"
  },
  {
    "de": "Nicht nur..., sondern auch...",
    "lv": "Nu numai..., ci și...",
    "level": "Sätze"
  },
  {
    "de": "Sonst noch etwas?",
    "lv": "Altceva?",
    "level": "Sätze"
  },
  {
    "de": "Spaß beiseite!",
    "lv": "Lăsând gluma la o parte!",
    "level": "Sätze"
  },
  {
    "de": "Wie spät ist es?",
    "lv": "Cât e ceasul?",
    "level": "Sätze"
  },
  {
    "de": "Durchfahrt gesperrt!",
    "lv": "Circulația interzisă!",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie deutsch?",
    "lv": "Vorbiți germană?",
    "level": "Sätze"
  },
  {
    "de": "Statt zu...",
    "lv": "În loc să...",
    "level": "Sätze"
  },
  {
    "de": "Wie steht’s?",
    "lv": "Cum stau lucrurile?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Hut steht ihr gut.",
    "lv": "Pălăria aceasta îi stă bine.",
    "level": "Sätze"
  },
  {
    "de": "Guten Tag!",
    "lv": "Bună ziua!",
    "level": "Sätze"
  },
  {
    "de": "Wo treffen wir uns?",
    "lv": "Unde ne întâlnim?",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie näher!",
    "lv": "Apropiați-vă!",
    "level": "Sätze"
  },
  {
    "de": "Ehrlichkeit ist eine Tugend.",
    "lv": "Cinstea este o virtute.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe viel zu tun.",
    "lv": "Am mult de lucru.",
    "level": "Sätze"
  },
  {
    "de": "Nicht übel!",
    "lv": "Nu e rău!",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt über mir.",
    "lv": "Locuiește deasupra mea.",
    "level": "Sätze"
  },
  {
    "de": "Er ist davon überzeugt.",
    "lv": "Este convins de asta.",
    "level": "Sätze"
  },
  {
    "de": "So ist es üblich.",
    "lv": "Așa se obișnuiește.",
    "level": "Sätze"
  },
  {
    "de": "Deine Uhr geht nach.",
    "lv": "Ceasul tău rămâne în urmă.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel Uhr ist es?",
    "lv": "Ce oră este?",
    "level": "Sätze"
  },
  {
    "de": "Um acht Uhr früh.",
    "lv": "La ora opt dimineața.",
    "level": "Sätze"
  },
  {
    "de": "umso mehr",
    "lv": "cu atât mai mult",
    "level": "Sätze"
  },
  {
    "de": "Rechts um!",
    "lv": "La dreapta!",
    "level": "Sätze"
  },
  {
    "de": "Und ob!",
    "lv": "Și încă cum!",
    "level": "Sätze"
  },
  {
    "de": "und zwar",
    "lv": "și anume",
    "level": "Sätze"
  },
  {
    "de": "Auf Unkosten von...",
    "lv": "Pe cheltuiala... • În detrimentul...",
    "level": "Sätze"
  },
  {
    "de": "Er saß unter den Zuschauern.",
    "lv": "Stătea printre spectatori.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ursache!",
    "lv": "Pentru puțin!",
    "level": "Sätze"
  },
  {
    "de": "Es geschah, wie verabredet.",
    "lv": "S-a întâmplat așa cum fusese stabilit.",
    "level": "Sätze"
  },
  {
    "de": "Rauchen verboten!",
    "lv": "Fumatul interzis!",
    "level": "Sätze"
  },
  {
    "de": "Falsch verbunden!",
    "lv": "Ați greșit numărul!",
    "level": "Sätze"
  },
  {
    "de": "Eintritt verboten!",
    "lv": "Intrarea interzisă!",
    "level": "Sätze"
  },
  {
    "de": "Verstehen Sie mich?",
    "lv": "Mă înțelegeți?",
    "level": "Sätze"
  },
  {
    "de": "Er versteht nichts davon.",
    "lv": "Nu se pricepe deloc la asta.",
    "level": "Sätze"
  },
  {
    "de": "Seine Ansicht vertreten.",
    "lv": "A-și susține punctul de vedere.",
    "level": "Sätze"
  },
  {
    "de": "Streit verursachen.",
    "lv": "A provoca o ceartă.",
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
    "lv": "Din auzite.",
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
    "lv": "Este berlinez de baștină.",
    "level": "Sätze"
  },
  {
    "de": "Er steht vor dem Fenster.",
    "lv": "Stă în fața ferestrei.",
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
    "lv": "De bucurie.",
    "level": "Sätze"
  },
  {
    "de": "Vor allem.",
    "lv": "Mai ales.",
    "level": "Sätze"
  },
  {
    "de": "Im Voraus.",
    "lv": "Dinainte.",
    "level": "Sätze"
  },
  {
    "de": "Unter der Voraussetzung, dass...",
    "lv": "Cu condiția ca...",
    "level": "Sätze"
  },
  {
    "de": "Unter dem Vorbehalt.",
    "lv": "Cu această rezervă.",
    "level": "Sätze"
  },
  {
    "de": "Vorhanden sein.",
    "lv": "A exista. • A fi disponibil.",
    "level": "Sätze"
  },
  {
    "de": "In der vorigen Woche.",
    "lv": "Săptămâna trecută.",
    "level": "Sätze"
  },
  {
    "de": "Vorkehrungen treffen.",
    "lv": "A lua măsuri de precauție.",
    "level": "Sätze"
  },
  {
    "de": "Sie kommt mir bekannt vor.",
    "lv": "Mi se pare cunoscută.",
    "level": "Sätze"
  },
  {
    "de": "Er hat eine Vorliebe für Literatur.",
    "lv": "Are o predilecție pentru literatură.",
    "level": "Sätze"
  },
  {
    "de": "Heute Vormittag.",
    "lv": "Azi-dimineață. • Astăzi înainte de prânz.",
    "level": "Sätze"
  },
  {
    "de": "Von vorn.",
    "lv": "Din față. • De la început.",
    "level": "Sätze"
  },
  {
    "de": "Nach vorn.",
    "lv": "Înainte.",
    "level": "Sätze"
  },
  {
    "de": "Von vornherein.",
    "lv": "De la bun început.",
    "level": "Sätze"
  },
  {
    "de": "Im Vorteil sein.",
    "lv": "A fi în avantaj.",
    "level": "Sätze"
  },
  {
    "de": "Wach sein.",
    "lv": "A fi treaz.",
    "level": "Sätze"
  },
  {
    "de": "Wach werden.",
    "lv": "A se trezi.",
    "level": "Sätze"
  },
  {
    "de": "Auf Wache sein.",
    "lv": "A fi de gardă.",
    "level": "Sätze"
  },
  {
    "de": "Während eines Jahres.",
    "lv": "În decursul unui an.",
    "level": "Sätze"
  },
  {
    "de": "Während des Krieges.",
    "lv": "În timpul războiului.",
    "level": "Sätze"
  },
  {
    "de": "Gegen eine Wand reden.",
    "lv": "A vorbi la pereți.",
    "level": "Sätze"
  },
  {
    "de": "Hier haben die Wände Ohren.",
    "lv": "Aici și pereții au urechi.",
    "level": "Sätze"
  },
  {
    "de": "Bis wann?",
    "lv": "Până când?",
    "level": "Sätze"
  },
  {
    "de": "Es ist warm.",
    "lv": "Este cald.",
    "level": "Sätze"
  },
  {
    "de": "Auf eine Nachricht warten.",
    "lv": "A aștepta un mesaj.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie?",
    "lv": "Ce doriți?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein...?",
    "lv": "Ce fel de...?",
    "level": "Sätze"
  },
  {
    "de": "Auf halbem Wege.",
    "lv": "La jumătatea drumului.",
    "level": "Sätze"
  },
  {
    "de": "Auf diesem Wege.",
    "lv": "Pe această cale. • Prin aceste mijloace.",
    "level": "Sätze"
  },
  {
    "de": "Auf friedlichem Wege.",
    "lv": "Pe cale pașnică.",
    "level": "Sätze"
  },
  {
    "de": "Unserer Freundschaft wegen.",
    "lv": "De dragul prieteniei noastre.",
    "level": "Sätze"
  },
  {
    "de": "Von Rechts wegen.",
    "lv": "De drept. • Potrivit legii.",
    "level": "Sätze"
  },
  {
    "de": "Weh tun.",
    "lv": "A durea.",
    "level": "Sätze"
  },
  {
    "de": "Zu Weihnachten.",
    "lv": "De Crăciun.",
    "level": "Sätze"
  },
  {
    "de": "Auf welche Weise?",
    "lv": "În ce mod?",
    "level": "Sätze"
  },
  {
    "de": "Art und Weise.",
    "lv": "Mod.",
    "level": "Sätze"
  },
  {
    "de": "Ohne weiteres.",
    "lv": "Fără întârziere. • Fără nicio dificultate.",
    "level": "Sätze"
  },
  {
    "de": "Bis auf weiteres.",
    "lv": "Până la noi dispoziții.",
    "level": "Sätze"
  },
  {
    "de": "Und so weiter.",
    "lv": "Și așa mai departe.",
    "level": "Sätze"
  },
  {
    "de": "Weiter nichts.",
    "lv": "Nimic altceva.",
    "level": "Sätze"
  },
  {
    "de": "An welchem Tag?",
    "lv": "În ce zi?",
    "level": "Sätze"
  },
  {
    "de": "Alle Welt.",
    "lv": "Lumea întreagă. • Toată lumea.",
    "level": "Sätze"
  },
  {
    "de": "In wenigen Tagen.",
    "lv": "Peste câteva zile.",
    "level": "Sätze"
  },
  {
    "de": "Zu wenig.",
    "lv": "Prea puțin.",
    "level": "Sätze"
  },
  {
    "de": "Wenn auch.",
    "lv": "Chiar dacă.",
    "level": "Sätze"
  },
  {
    "de": "Wer da?",
    "lv": "Cine e acolo?",
    "level": "Sätze"
  },
  {
    "de": "Gesammelte Werke von Schiller.",
    "lv": "Operele complete ale lui Schiller.",
    "level": "Sätze"
  },
  {
    "de": "Ausgewählte Werke.",
    "lv": "Opere alese.",
    "level": "Sätze"
  },
  {
    "de": "Er ist wert, dass...",
    "lv": "Merită ca...",
    "level": "Sätze"
  },
  {
    "de": "Es ist zwei Euro wert.",
    "lv": "Valorează doi euro.",
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
    "lv": "A intra în competiție.",
    "level": "Sätze"
  },
  {
    "de": "Um die Wette laufen.",
    "lv": "A se întrece la alergare.",
    "level": "Sätze"
  },
  {
    "de": "Was gilt die Wette?",
    "lv": "Pe ce pariem?",
    "level": "Sätze"
  },
  {
    "de": "Wie wird das Wetter?",
    "lv": "Cum va fi vremea?",
    "level": "Sätze"
  },
  {
    "de": "Wettkampf im Turnen.",
    "lv": "Concurs de gimnastică.",
    "level": "Sätze"
  },
  {
    "de": "Wider meinen Willen.",
    "lv": "Împotriva voinței mele.",
    "level": "Sätze"
  },
  {
    "de": "Widerspruch erheben.",
    "lv": "A protesta. • A ridica obiecții.",
    "level": "Sätze"
  },
  {
    "de": "Wie alt ist er?",
    "lv": "Câți ani are?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange?",
    "lv": "Cât timp?",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiederhören!",
    "lv": "Să auzim de bine!",
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
    "lv": "Bine ați venit!",
    "level": "Sätze"
  },
  {
    "de": "Du musst ziehen.",
    "lv": "E rândul tău să muți.",
    "level": "Sätze"
  },
  {
    "de": "Es zieht.",
    "lv": "E curent.",
    "level": "Sätze"
  },
  {
    "de": "Ziemlich kalt.",
    "lv": "Destul de frig.",
    "level": "Sätze"
  },
  {
    "de": "Zipfel einer Wurst.",
    "lv": "Capătul unui cârnat.",
    "level": "Sätze"
  },
  {
    "de": "Zu ihm gehen.",
    "lv": "A merge la el.",
    "level": "Sätze"
  },
  {
    "de": "Zur Schule gehen.",
    "lv": "A merge la școală.",
    "level": "Sätze"
  },
  {
    "de": "Zu Hause bleiben.",
    "lv": "A rămâne acasă.",
    "level": "Sätze"
  },
  {
    "de": "Von Tag zu Tag.",
    "lv": "Din zi în zi.",
    "level": "Sätze"
  },
  {
    "de": "Zum Glück.",
    "lv": "Din fericire.",
    "level": "Sätze"
  },
  {
    "de": "Wasser zum Trinken.",
    "lv": "Apă de băut.",
    "level": "Sätze"
  },
  {
    "de": "Zu Fuß.",
    "lv": "Pe jos.",
    "level": "Sätze"
  },
  {
    "de": "Zu Pferde.",
    "lv": "Călare.",
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
    "lv": "A ridica din umeri.",
    "level": "Sätze"
  },
  {
    "de": "In einem Zug trinken.",
    "lv": "A bea dintr-o înghițitură.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde gehen.",
    "lv": "A pieri.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde legen.",
    "lv": "A pune la bază. • A lua drept bază.",
    "level": "Sätze"
  },
  {
    "de": "Zum ersten Mal.",
    "lv": "Pentru prima dată.",
    "level": "Sätze"
  },
  {
    "de": "Machen Sie bitte die Tür zu!",
    "lv": "Închideți ușa, vă rog!",
    "level": "Sätze"
  },
  {
    "de": "Er hat zugenommen.",
    "lv": "S-a îngrășat.",
    "level": "Sätze"
  },
  {
    "de": "Die Tage nehmen zu.",
    "lv": "Zilele se lungesc.",
    "level": "Sätze"
  },
  {
    "de": "Zusammenhängen mit etwas.",
    "lv": "A avea legătură cu ceva.",
    "level": "Sätze"
  },
  {
    "de": "Die Tür ist zu.",
    "lv": "Ușa e închisă.",
    "level": "Sätze"
  },
  {
    "de": "Das hätte ich ihm nicht zugetraut.",
    "lv": "Nu m-aș fi așteptat la asta din partea lui.",
    "level": "Sätze"
  },
  {
    "de": "Freier Zutritt.",
    "lv": "Intrare liberă.",
    "level": "Sätze"
  },
  {
    "de": "Zutritt verboten!",
    "lv": "Accesul interzis!",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu viel!",
    "lv": "Asta e prea mult!",
    "level": "Sätze"
  },
  {
    "de": "Zuwider werden.",
    "lv": "A deveni respingător. • A-i deveni nesuferit cuiva.",
    "level": "Sätze"
  },
  {
    "de": "Und zwar.",
    "lv": "Și anume.",
    "level": "Sätze"
  },
  {
    "de": "Es steht außer Zweifel.",
    "lv": "Nu încape nicio îndoială.",
    "level": "Sätze"
  },
  {
    "de": "Ohne Zweifel.",
    "lv": "Fără îndoială.",
    "level": "Sätze"
  },
  {
    "de": "Zum Zweiten.",
    "lv": "În al doilea rând.",
    "level": "Sätze"
  },
  {
    "de": "Frohes neues Jahr!",
    "lv": "Un An Nou fericit!",
    "level": "Sätze"
  },
  {
    "de": "Herzlichen Glückwunsch zum Geburtstag!",
    "lv": "La mulți ani!",
    "level": "Sätze"
  },
  {
    "de": "Gute Reise!",
    "lv": "Drum bun!",
    "level": "Sätze"
  },
  {
    "de": "Es freut mich, Sie kennenzulernen.",
    "lv": "Mă bucur să vă cunosc.",
    "level": "Sätze"
  },
  {
    "de": "Wären Sie bitte so nett?",
    "lv": "Ați fi atât de amabil, vă rog?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin Ihnen sehr dankbar.",
    "lv": "Vă sunt foarte recunoscător.",
    "level": "Sätze"
  },
  {
    "de": "Setzt euch bitte hin!",
    "lv": "Așezați-vă, vă rog!",
    "level": "Sätze"
  },
  {
    "de": "Ben, komm bitte an die Tafel!",
    "lv": "Ben, vino la tablă, te rog!",
    "level": "Sätze"
  },
  {
    "de": "Schlagt bitte die Lehrbücher auf!",
    "lv": "Deschideți manualele, vă rog!",
    "level": "Sätze"
  },
  {
    "de": "Geht bitte in die Sporthalle!",
    "lv": "Mergeți în sala de sport, vă rog!",
    "level": "Sätze"
  },
  {
    "de": "Schläfst du noch?",
    "lv": "Mai dormi?",
    "level": "Sätze"
  },
  {
    "de": "Schlafen Sie noch?",
    "lv": "Mai dormiți?",
    "level": "Sätze"
  },
  {
    "de": "Er ist fest eingeschlafen.",
    "lv": "A adormit adânc.",
    "level": "Sätze"
  },
  {
    "de": "Wecke ihn bitte auf, es ist schon spät!",
    "lv": "Trezește-l, te rog, e deja târziu!",
    "level": "Sätze"
  },
  {
    "de": "Es tut mir sehr leid!",
    "lv": "Îmi pare foarte rău!",
    "level": "Sätze"
  },
  {
    "de": "Vielen Dank!",
    "lv": "Mulțumesc mult!",
    "level": "Sätze"
  },
  {
    "de": "Finn, fang bitte an!",
    "lv": "Finn, începe, te rog!",
    "level": "Sätze"
  },
  {
    "de": "Lest bitte mit!",
    "lv": "Urmăriți textul, vă rog!",
    "level": "Sätze"
  },
  {
    "de": "Emma, schau bitte nicht aus dem Fenster!",
    "lv": "Emma, nu te uita pe fereastră, te rog!",
    "level": "Sätze"
  },
  {
    "de": "Jonas, bring bitte die Hefte!",
    "lv": "Jonas, adu caietele, te rog!",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte zurück an deinen Platz!",
    "lv": "Întoarce-te la locul tău, te rog!",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb acht.",
    "lv": "Este ora șapte și jumătate.",
    "level": "Sätze"
  },
  {
    "de": "Wann wachst du gewöhnlich auf?",
    "lv": "Când te trezești de obicei?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe gleich auf.",
    "lv": "Mă scol imediat.",
    "level": "Sätze"
  },
  {
    "de": "Steh auf, Hanna, es klingelt!",
    "lv": "Scoală-te, Hanna, sună deșteptătorul! • Scoală-te, Hanna, sună cineva la ușă!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich noch fünf Minuten schlafen!",
    "lv": "Lasă-mă să mai dorm cinci minute!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss nicht, das Zimmer zu lüften!",
    "lv": "Nu uita să aerisești camera!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist das Handtuch?",
    "lv": "Unde e prosopul?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mir die Zähne putzen.",
    "lv": "Aș vrea să mă spăl pe dinți.",
    "level": "Sätze"
  },
  {
    "de": "Mit was putzt du dir die Zähne?",
    "lv": "Cu ce te speli pe dinți?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mich anziehen.",
    "lv": "Aș vrea să mă îmbrac.",
    "level": "Sätze"
  },
  {
    "de": "Zieh dich bitte schnell an!",
    "lv": "Îmbracă-te repede, te rog!",
    "level": "Sätze"
  },
  {
    "de": "Kleide dich wärmer an, draußen ist es kühl.",
    "lv": "Îmbracă-te mai gros, afară e răcoare.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, wie geht es dir?",
    "lv": "Bună dimineața, ce faci?",
    "level": "Sätze"
  },
  {
    "de": "Mir geht es gut, danke.",
    "lv": "Sunt bine, mulțumesc.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es Neues?",
    "lv": "Ce mai e nou?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein Chaos hier!",
    "lv": "Ce haos e aici!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich beim Aufräumen helfen?",
    "lv": "Pot să ajut la făcut ordine?",
    "level": "Sätze"
  },
  {
    "de": "Was trinkst du morgens, Kaffee oder Tee?",
    "lv": "Ce bei dimineața, cafea sau ceai?",
    "level": "Sätze"
  },
  {
    "de": "Gewöhnlich trinke ich morgens eine Tasse Kaffee.",
    "lv": "De obicei beau dimineața o ceașcă de cafea.",
    "level": "Sätze"
  },
  {
    "de": "Am liebsten trinke ich schwarzen Kaffee.",
    "lv": "Cel mai mult îmi place cafeaua neagră.",
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
    "lv": "Dă-mi, te rog, o chiflă cu brânză.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss jetzt los!",
    "lv": "Acum trebuie să plec!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss dein Frühstück nicht!",
    "lv": "Nu-ți uita micul dejun!",
    "level": "Sätze"
  },
  {
    "de": "Klara, deck bitte den Tisch!",
    "lv": "Klara, pune masa, te rog!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss die Servietten nicht!",
    "lv": "Nu uita șervețelele!",
    "level": "Sätze"
  },
  {
    "de": "Wann esst ihr zu Mittag?",
    "lv": "Când luați prânzul?",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit zu essen.",
    "lv": "E timpul să mâncăm.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es heute zu Mittag?",
    "lv": "Ce avem astăzi la prânz?",
    "level": "Sätze"
  },
  {
    "de": "Wie schmeckt dir die Suppe?",
    "lv": "Cum ți se pare supa?",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt ist sie etwas zu salzig.",
    "lv": "Sincer să fiu, e puțin prea sărată.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dir ein Stück Brot geben?",
    "lv": "Pot să-ți dau o bucată de pâine?",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich habe schon.",
    "lv": "Mulțumesc, am deja.",
    "level": "Sätze"
  },
  {
    "de": "Das Fleisch schmeckt ausgezeichnet.",
    "lv": "Carnea are un gust excelent.",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich bin schon satt.",
    "lv": "Mulțumesc, sunt deja sătul.",
    "level": "Sätze"
  },
  {
    "de": "Heute haben wir Besuch.",
    "lv": "Astăzi avem musafiri.",
    "level": "Sätze"
  },
  {
    "de": "Bist du heute Abend frei?",
    "lv": "Ești liber diseară?",
    "level": "Sätze"
  },
  {
    "de": "Komm doch heute zum Mittagessen vorbei!",
    "lv": "Hai, treci azi pe la noi la prânz!",
    "level": "Sätze"
  },
  {
    "de": "Setzen wir uns an den Tisch.",
    "lv": "Să ne așezăm la masă.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, bedien dich!",
    "lv": "Te rog, servește-te!",
    "level": "Sätze"
  },
  {
    "de": "Stört dich das Rauchen?",
    "lv": "Te deranjează fumatul?",
    "level": "Sätze"
  },
  {
    "de": "Danke für die nette Aufnahme!",
    "lv": "Mulțumesc pentru primirea călduroasă!",
    "level": "Sätze"
  },
  {
    "de": "Wann gehst du ins Bett?",
    "lv": "Când te culci?",
    "level": "Sätze"
  },
  {
    "de": "Wenn ich von der Arbeit komme, bin ich immer müde.",
    "lv": "Când vin de la serviciu, sunt mereu obosit.",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, ins Bett zu gehen.",
    "lv": "E timpul să ne culcăm.",
    "level": "Sätze"
  },
  {
    "de": "Es ist schönes Wetter.",
    "lv": "E vreme frumoasă.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mit mir spazieren gehen?",
    "lv": "Vrei să mergi cu mine la plimbare?",
    "level": "Sätze"
  },
  {
    "de": "Sieh mal, es wird gleich regnen.",
    "lv": "Uite, o să plouă imediat.",
    "level": "Sätze"
  },
  {
    "de": "Nimm den Regenschirm mit!",
    "lv": "Ia umbrela cu tine!",
    "level": "Sätze"
  },
  {
    "de": "Es regnet.",
    "lv": "Plouă.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin schon ganz nass.",
    "lv": "Sunt deja ud leoarcă.",
    "level": "Sätze"
  },
  {
    "de": "Glaubst du, dass es den ganzen Tag regnen wird?",
    "lv": "Crezi că o să plouă toată ziua?",
    "level": "Sätze"
  },
  {
    "de": "Es hört auf zu regnen.",
    "lv": "Se oprește ploaia.",
    "level": "Sätze"
  },
  {
    "de": "Die Sonne scheint wieder.",
    "lv": "Soarele strălucește din nou.",
    "level": "Sätze"
  },
  {
    "de": "Es ist sehr warm.",
    "lv": "E foarte cald.",
    "level": "Sätze"
  },
  {
    "de": "Es sieht nach Regen aus.",
    "lv": "Parcă vrea să plouă.",
    "level": "Sätze"
  },
  {
    "de": "Wir bekommen gleich ein Gewitter.",
    "lv": "Imediat se pornește furtuna.",
    "level": "Sätze"
  },
  {
    "de": "Das Gewitter zieht vorüber.",
    "lv": "Furtuna trece.",
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
    "lv": "A venit iarna, a nins.",
    "level": "Sätze"
  },
  {
    "de": "Es schneit.",
    "lv": "Ninge.",
    "level": "Sätze"
  },
  {
    "de": "Wie schön ist es im Wald im Winter!",
    "lv": "Ce frumos e iarna în pădure!",
    "level": "Sätze"
  },
  {
    "de": "Mir ist kalt, ich friere.",
    "lv": "Mi-e frig, îngheț.",
    "level": "Sätze"
  },
  {
    "de": "Draußen ist Glatteis, pass auf!",
    "lv": "Afară e polei, ai grijă!",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir auf die Eisbahn gehen?",
    "lv": "Mergem la patinoar?",
    "level": "Sätze"
  },
  {
    "de": "Zieh die Jacke an, du kannst dich erkälten.",
    "lv": "Pune-ți geaca, poți să răcești.",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb sieben.",
    "lv": "Este ora șase și jumătate.",
    "level": "Sätze"
  },
  {
    "de": "Meine Uhr geht fünf Minuten vor.",
    "lv": "Ceasul meu o ia înainte cu cinci minute.",
    "level": "Sätze"
  },
  {
    "de": "Weck mich morgen früh um sieben Uhr!",
    "lv": "Trezește-mă mâine dimineață la ora șapte!",
    "level": "Sätze"
  },
  {
    "de": "Was ist heute für ein Datum?",
    "lv": "Ce dată e azi?",
    "level": "Sätze"
  },
  {
    "de": "Heute ist der elfte Juli.",
    "lv": "Astăzi e unsprezece iulie.",
    "level": "Sätze"
  },
  {
    "de": "Was machst du gewöhnlich am Abend?",
    "lv": "Ce faci de obicei seara?",
    "level": "Sätze"
  },
  {
    "de": "Es ist schon lange her, dass wir uns gesehen haben.",
    "lv": "A trecut mult timp de când nu ne-am mai văzut.",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es dir?",
    "lv": "Ce mai faci?",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, ich möchte etwas mit dir besprechen.",
    "lv": "Scuză-mă, aș vrea să discut ceva cu tine.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir spazieren!",
    "lv": "Să mergem la plimbare!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Lust, mit mir in den Park zu gehen?",
    "lv": "Ai chef să mergi cu mine în parc?",
    "level": "Sätze"
  },
  {
    "de": "Ich komme, um dich zum Spaziergang abzuholen.",
    "lv": "Vin să te iau la plimbare.",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte etwas langsamer, ich kann dir nicht folgen!",
    "lv": "Mergi puțin mai încet, te rog, nu pot să țin pasul cu tine!",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zum ersten Mal in dieser Gegend.",
    "lv": "Sunt pentru prima oară în zona aceasta.",
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
    "lv": "Sincer să fiu, sunt destul de obosit.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, wo ist die nächste U-Bahn-Station?",
    "lv": "Scuză-mă, unde e cea mai apropiată stație de metrou?",
    "level": "Sätze"
  },
  {
    "de": "Welcher ist der kürzeste Weg?",
    "lv": "Care e drumul cel mai scurt?",
    "level": "Sätze"
  },
  {
    "de": "Geh hier die zweite Straße links und dann immer geradeaus.",
    "lv": "Ia-o aici pe a doua stradă la stânga și apoi mergi tot înainte.",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich am schnellsten zum Bahnhof?",
    "lv": "Cum ajung cel mai repede la gară?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe vor, morgen zu verreisen.",
    "lv": "Am de gând să plec mâine în călătorie.",
    "level": "Sätze"
  },
  {
    "de": "Wohin willst du fahren?",
    "lv": "Unde vrei să mergi?",
    "level": "Sätze"
  },
  {
    "de": "Reist du geschäftlich oder privat?",
    "lv": "Călătorești în interes de serviciu sau în interes personal?",
    "level": "Sätze"
  },
  {
    "de": "Finn fährt bis Berlin mit, dann geht er ans Meer.",
    "lv": "Finn merge cu noi până la Berlin, apoi pleacă la mare.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt das Schiff ab?",
    "lv": "Când pleacă vaporul?",
    "level": "Sätze"
  },
  {
    "de": "In einer halben Stunde.",
    "lv": "Peste o jumătate de oră.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich noch eine Kabine bekommen?",
    "lv": "Mai pot primi o cabină?",
    "level": "Sätze"
  },
  {
    "de": "Vergiss deinen Pass nicht!",
    "lv": "Nu-ți uita pașaportul!",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, den Koffer zu packen.",
    "lv": "E timpul să facem bagajul.",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt um halb sieben ab.",
    "lv": "Trenul pleacă la șase și jumătate.",
    "level": "Sätze"
  },
  {
    "de": "Hol mir bitte ein Taxi, ich verpasse sonst den Zug!",
    "lv": "Cheamă-mi un taxi, te rog, altfel pierd trenul!",
    "level": "Sätze"
  },
  {
    "de": "Fahr bitte zum Bahnhof!",
    "lv": "Du-mă la gară, te rog!",
    "level": "Sätze"
  },
  {
    "de": "Ich muss mich beeilen.",
    "lv": "Trebuie să mă grăbesc.",
    "level": "Sätze"
  },
  {
    "de": "Ist der Schalter schon offen?",
    "lv": "Ghișeul este deja deschis?",
    "level": "Sätze"
  },
  {
    "de": "Eine Fahrkarte nach Köln, bitte.",
    "lv": "Un bilet pentru Köln, vă rog.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt der Zug ab?",
    "lv": "Când pleacă trenul?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt gleich ab.",
    "lv": "Trenul pleacă imediat.",
    "level": "Sätze"
  },
  {
    "de": "Muss ich in Koblenz umsteigen?",
    "lv": "Trebuie să schimb trenul la Koblenz?",
    "level": "Sätze"
  },
  {
    "de": "Ja, dort musst du umsteigen.",
    "lv": "Da, acolo trebuie să schimbi trenul.",
    "level": "Sätze"
  },
  {
    "de": "Ist dieser Platz frei?",
    "lv": "Locul acesta este liber?",
    "level": "Sätze"
  },
  {
    "de": "Nein, hier sitzt niemand.",
    "lv": "Nu, aici nu stă nimeni.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der Bahnsteigkartenautomat?",
    "lv": "Unde este automatul de bilete de peron?",
    "level": "Sätze"
  },
  {
    "de": "Stell mein Handgepäck ins Gepäcknetz.",
    "lv": "Pune-mi bagajul de mână în plasa pentru bagaje.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das Fenster aufmachen?",
    "lv": "Pot să deschid fereastra?",
    "level": "Sätze"
  },
  {
    "de": "Es zieht, schließ bitte das Fenster!",
    "lv": "E curent, închide fereastra, te rog!",
    "level": "Sätze"
  },
  {
    "de": "Welche ist die nächste Station?",
    "lv": "Care este stația următoare?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange hält der Zug?",
    "lv": "Cât timp stă trenul în stație?",
    "level": "Sätze"
  },
  {
    "de": "Wo muss ich umsteigen?",
    "lv": "Unde trebuie să schimb trenul?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug hat Verspätung.",
    "lv": "Trenul are întârziere.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Wagen ist für Nichtraucher.",
    "lv": "Acest vagon este pentru nefumători.",
    "level": "Sätze"
  },
  {
    "de": "Wir fahren jetzt über die Grenze.",
    "lv": "Acum trecem granița.",
    "level": "Sätze"
  },
  {
    "de": "Hast du etwas zu verzollen?",
    "lv": "Ai ceva de declarat?",
    "level": "Sätze"
  },
  {
    "de": "Wir sind in Berlin angekommen.",
    "lv": "Am ajuns la Berlin.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir ein gutes Hotel empfehlen?",
    "lv": "Poți să-mi recomanzi un hotel bun?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie freie Zimmer?",
    "lv": "Aveți camere libere?",
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
    "lv": "Mâine plec. Trezește-mă la ora șapte!",
    "level": "Sätze"
  },
  {
    "de": "Die Rechnung, bitte!",
    "lv": "Nota de plată, vă rog!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Stadtbibliothek?",
    "lv": "Unde este biblioteca municipală?",
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
    "lv": "Ospătar, meniul, vă rog!",
    "level": "Sätze"
  },
  {
    "de": "Ist der Fisch frisch?",
    "lv": "Peștele este proaspăt?",
    "level": "Sätze"
  },
  {
    "de": "Das schmeckt ausgezeichnet!",
    "lv": "Are un gust excelent!",
    "level": "Sätze"
  },
  {
    "de": "Kellner, zahlen bitte!",
    "lv": "Ospătar, nota, vă rog!",
    "level": "Sätze"
  },
  {
    "de": "Ich gehe ins Café einen Kaffee trinken.",
    "lv": "Mă duc la cafenea să beau o cafea.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mitkommen?",
    "lv": "Vrei să vii cu mine?",
    "level": "Sätze"
  },
  {
    "de": "Eine Tasse Kaffee mit Milch, bitte!",
    "lv": "O ceașcă de cafea cu lapte, vă rog!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneller, ich habe es eilig!",
    "lv": "Mai repede, vă rog, mă grăbesc!",
    "level": "Sätze"
  },
  {
    "de": "Lass deinen Kaffee nicht kalt werden!",
    "lv": "Nu-ți lăsa cafeaua să se răcească!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie etwas Erfrischendes?",
    "lv": "Aveți ceva răcoritor?",
    "level": "Sätze"
  },
  {
    "de": "Eine Portion Eis, bitte!",
    "lv": "O porție de înghețată, vă rog!",
    "level": "Sätze"
  },
  {
    "de": "Heute Morgen habe ich einen Brief bekommen.",
    "lv": "Azi-dimineață am primit o scrisoare.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss ihm gleich schreiben.",
    "lv": "Trebuie să-i scriu imediat.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der nächste Briefkasten?",
    "lv": "Unde este cea mai apropiată cutie poștală?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Post?",
    "lv": "Unde este poșta?",
    "level": "Sätze"
  },
  {
    "de": "Erinnere mich morgen daran, zu schreiben!",
    "lv": "Amintește-mi mâine să scriu!",
    "level": "Sätze"
  },
  {
    "de": "Werfen Sie bitte diesen Brief in den Briefkasten.",
    "lv": "Puneți, vă rog, această scrisoare în cutia poștală.",
    "level": "Sätze"
  },
  {
    "de": "Hallo, hier spricht Emma.",
    "lv": "Alo, sunt Emma.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich dich später anrufen?",
    "lv": "Pot să te sun mai târziu?",
    "level": "Sätze"
  },
  {
    "de": "Muss ich lange warten?",
    "lv": "Trebuie să aștept mult?",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneiden Sie mir die Haare.",
    "lv": "Vă rog să mă tundeți.",
    "level": "Sätze"
  },
  {
    "de": "Hinten bitte nicht zu kurz.",
    "lv": "La spate, vă rog, nu prea scurt.",
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
    "lv": "S-au vândut toate locurile.",
    "level": "Sätze"
  },
  {
    "de": "Drei Karten, bitte!",
    "lv": "Trei bilete, vă rog!",
    "level": "Sätze"
  },
  {
    "de": "Wir lassen die Jacken in der Garderobe.",
    "lv": "Ne lăsăm jachetele la garderobă.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schnell, der Vorhang geht gleich auf!",
    "lv": "Repede, vă rog, cortina se ridică imediat!",
    "level": "Sätze"
  },
  {
    "de": "Der Vorhang fällt.",
    "lv": "Cade cortina.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dich zum Tanz bitten?",
    "lv": "Pot să te invit la dans?",
    "level": "Sätze"
  },
  {
    "de": "Wann ist eure Hochzeit?",
    "lv": "Când este nunta voastră?",
    "level": "Sätze"
  },
  {
    "de": "Ich suche eine Wohnung.",
    "lv": "Caut un apartament.",
    "level": "Sätze"
  },
  {
    "de": "Ist in diesem Haus eine Wohnung frei?",
    "lv": "Este vreun apartament liber în clădirea aceasta?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet die Miete?",
    "lv": "Cât costă chiria?",
    "level": "Sätze"
  },
  {
    "de": "Die Wohnung hat drei Zimmer und eine Küche.",
    "lv": "Apartamentul are trei camere și o bucătărie.",
    "level": "Sätze"
  },
  {
    "de": "Heute ziehen wir um.",
    "lv": "Azi ne mutăm.",
    "level": "Sätze"
  },
  {
    "de": "Mia, pack die Sachen bitte in Kisten!",
    "lv": "Mia, pune lucrurile în cutii, te rog!",
    "level": "Sätze"
  },
  {
    "de": "Hast du alles eingepackt?",
    "lv": "Ai împachetat tot?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe mit meinem Freund in Kontakt.",
    "lv": "Țin legătura cu prietenul meu.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir ins Theater?",
    "lv": "Mergem la teatru?",
    "level": "Sätze"
  },
  {
    "de": "Ist alles eingeladen?",
    "lv": "S-a încărcat tot?",
    "level": "Sätze"
  },
  {
    "de": "Welch schöne Aussicht!",
    "lv": "Ce priveliște frumoasă!",
    "level": "Sätze"
  },
  {
    "de": "Nun können wir alles wieder aufräumen.",
    "lv": "Acum putem pune din nou totul în ordine.",
    "level": "Sätze"
  },
  {
    "de": "Wie viele Zimmer habt ihr?",
    "lv": "Câte camere aveți?",
    "level": "Sätze"
  },
  {
    "de": "Im Sommer fahre ich ans Meer.",
    "lv": "Vara merg la mare.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du schwimmen?",
    "lv": "Știi să înoți?",
    "level": "Sätze"
  },
  {
    "de": "Schwimm nicht zu weit hinaus!",
    "lv": "Nu înota prea departe în larg!",
    "level": "Sätze"
  },
  {
    "de": "Badest du jeden Tag?",
    "lv": "Faci baie în fiecare zi?",
    "level": "Sätze"
  },
  {
    "de": "Bei schönem Wetter gehe ich angeln.",
    "lv": "Pe vreme frumoasă merg la pescuit.",
    "level": "Sätze"
  },
  {
    "de": "Wie sieht er aus?",
    "lv": "Cum arată?",
    "level": "Sätze"
  },
  {
    "de": "Er hat sich aber recht verändert.",
    "lv": "Chiar s-a schimbat mult.",
    "level": "Sätze"
  },
  {
    "de": "Wie ist er als Mensch?",
    "lv": "Ce fel de om este?",
    "level": "Sätze"
  },
  {
    "de": "Er ist immer nett und freundlich.",
    "lv": "Este mereu drăguț și prietenos.",
    "level": "Sätze"
  },
  {
    "de": "Ich fühle mich nicht wohl.",
    "lv": "Nu mă simt bine.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe starke Kopfschmerzen.",
    "lv": "Mă doare tare capul.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe mich erkältet.",
    "lv": "Am răcit.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Schnupfen.",
    "lv": "Am guturai.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist schwindlig.",
    "lv": "Mi se învârte capul.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Arzt gehen.",
    "lv": "Trebuie să merg la doctor.",
    "level": "Sätze"
  },
  {
    "de": "Leg dich ins Bett!",
    "lv": "Bagă-te în pat!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Fieber?",
    "lv": "Ai febră?",
    "level": "Sätze"
  },
  {
    "de": "Gestern hatte ich erhöhte Temperatur.",
    "lv": "Ieri am avut temperatură.",
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
    "lv": "Potrivit medicului, se va face bine în curând.",
    "level": "Sätze"
  },
  {
    "de": "Ich will meine Wohnung neu möblieren.",
    "lv": "Vreau să-mi mobilez din nou apartamentul.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das auf Raten kaufen?",
    "lv": "Pot să cumpăr asta în rate?",
    "level": "Sätze"
  },
  {
    "de": "Bleib im Bett, bis es dir besser geht!",
    "lv": "Rămâi în pat până te simți mai bine!",
    "level": "Sätze"
  },
  {
    "de": "Noah hat in zwei Wochen schwimmen gelernt.",
    "lv": "Noah a învățat să înoate în două săptămâni.",
    "level": "Sätze"
  },
  {
    "de": "Sei mit dem Essen noch vorsichtig.",
    "lv": "Deocamdată, mai ai grijă cu mâncarea.",
    "level": "Sätze"
  },
  {
    "de": "Sprichst du Deutsch?",
    "lv": "Vorbești germană?",
    "level": "Sätze"
  },
  {
    "de": "Ja, ein bisschen.",
    "lv": "Da, puțin.",
    "level": "Sätze"
  },
  {
    "de": "Du sprichst ziemlich fließend.",
    "lv": "Vorbești destul de fluent.",
    "level": "Sätze"
  },
  {
    "de": "Wo hast du Deutsch gelernt?",
    "lv": "Unde ai învățat germana?",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme seit einem Jahr Deutschstunden.",
    "lv": "Iau lecții de germană de un an.",
    "level": "Sätze"
  },
  {
    "de": "Ich suche immer Gelegenheit, Deutsch zu sprechen.",
    "lv": "Caut mereu ocazia să vorbesc germană.",
    "level": "Sätze"
  },
  {
    "de": "Ist das Buch noch vorrätig?",
    "lv": "Cartea mai este în stoc?",
    "level": "Sätze"
  },
  {
    "de": "Das Buch ist leider ausverkauft.",
    "lv": "Din păcate, cartea este epuizată.",
    "level": "Sätze"
  },
  {
    "de": "Wann erscheint die neue Auflage?",
    "lv": "Când apare noua ediție?",
    "level": "Sätze"
  },
  {
    "de": "Womit kann ich Ihnen helfen?",
    "lv": "Cu ce vă pot ajuta?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie ganz frische Eier?",
    "lv": "Aveți ouă foarte proaspete?",
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
    "lv": "Îmi puteți cântări jumătate de kilogram?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel muss ich zahlen?",
    "lv": "Cât trebuie să plătesc?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet das Kilo?",
    "lv": "Cât costă kilogramul?",
    "level": "Sätze"
  },
  {
    "de": "Wiegen Sie mir bitte zwei Kilo ab.",
    "lv": "Cântăriți-mi, vă rog, două kilograme.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch Karotten?",
    "lv": "Aveți și morcovi?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie gutes Rindfleisch?",
    "lv": "Aveți carne de vită bună?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir zwei Kilo Hackfleisch.",
    "lv": "Dați-mi două kilograme de carne tocată.",
    "level": "Sätze"
  },
  {
    "de": "Ein Laib Brot, bitte, aber nicht zu knusprig.",
    "lv": "O pâine, vă rog, dar nu prea crocantă.",
    "level": "Sätze"
  },
  {
    "de": "Das Brot ist frisch gebacken.",
    "lv": "Pâinea este proaspăt coaptă.",
    "level": "Sätze"
  },
  {
    "de": "Was für Obst haben Sie heute?",
    "lv": "Ce fructe aveți astăzi?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die Äpfel?",
    "lv": "Cât costă merele?",
    "level": "Sätze"
  },
  {
    "de": "Dann nehme ich zwei Kilo Äpfel.",
    "lv": "Atunci iau două kilograme de mere.",
    "level": "Sätze"
  },
  {
    "de": "Die Birnen sind sehr teuer.",
    "lv": "Perele sunt foarte scumpe.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir alles nach Hause liefern?",
    "lv": "Îmi puteți livra totul acasă?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie Reis?",
    "lv": "Aveți orez?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir bitte ein Kilo Reis.",
    "lv": "Dați-mi, vă rog, un kilogram de orez.",
    "level": "Sätze"
  },
  {
    "de": "Danke, diesmal nicht.",
    "lv": "Mulțumesc, de data asta nu.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet dieser Teppich?",
    "lv": "Cât costă covorul acesta?",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Möbel in meine Wohnung liefern?",
    "lv": "Îmi puteți livra mobila în apartament?",
    "level": "Sätze"
  },
  {
    "de": "Bitte an der Kasse zahlen.",
    "lv": "Vă rugăm să plătiți la casă.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, machen Sie die Rechnung.",
    "lv": "Vă rog, faceți-mi factura.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Meter?",
    "lv": "Cât costă metrul?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Stoff gefällt mir.",
    "lv": "Stofa aceasta îmi place.",
    "level": "Sätze"
  },
  {
    "de": "Schneiden Sie mir bitte drei Meter ab.",
    "lv": "Tăiați-mi, vă rog, trei metri.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch andere Muster?",
    "lv": "Aveți și alte modele? • Aveți și alte mostre?",
    "level": "Sätze"
  },
  {
    "de": "Diese Farbe gefällt mir nicht.",
    "lv": "Culoarea aceasta nu-mi place.",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir eine hellere.",
    "lv": "Dați-mi una mai deschisă.",
    "level": "Sätze"
  },
  {
    "de": "Was kosten diese Socken?",
    "lv": "Cât costă șosetele acestea?",
    "level": "Sätze"
  },
  {
    "de": "Welche Handschuhe wünschen Sie?",
    "lv": "Ce mănuși doriți?",
    "level": "Sätze"
  },
  {
    "de": "Die sind mir etwas zu eng.",
    "lv": "Îmi sunt cam strâmte.",
    "level": "Sätze"
  },
  {
    "de": "So, nun passen sie gut.",
    "lv": "Așa, acum se potrivesc bine.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir einen guten Schneider empfehlen?",
    "lv": "Poți să-mi recomanzi un croitor bun?",
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
    "lv": "Costumul stă bine.",
    "level": "Sätze"
  },
  {
    "de": "Die Hose ist zu lang.",
    "lv": "Pantalonii sunt prea lungi.",
    "level": "Sätze"
  },
  {
    "de": "Bitte reinigen und bügeln Sie ihn!",
    "lv": "Vă rog, curățați-l și călcați-l!",
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
    "lv": "Puteți repara pantofii astăzi?",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich die Schuhe abholen?",
    "lv": "Când pot să ridic pantofii?",
    "level": "Sätze"
  },
  {
    "de": "Meine Armbanduhr funktioniert nicht.",
    "lv": "Ceasul meu de mână nu funcționează.",
    "level": "Sätze"
  },
  {
    "de": "Sie geht fünf Minuten vor.",
    "lv": "O ia înainte cu cinci minute.",
    "level": "Sätze"
  },
  {
    "de": "Bist du kurzsichtig oder weitsichtig?",
    "lv": "Ești miop sau hipermetrop?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte eine Brille kaufen.",
    "lv": "Aș vrea să cumpăr o pereche de ochelari.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie meine Brille reparieren?",
    "lv": "Îmi puteți repara ochelarii?",
    "level": "Sätze"
  },
  {
    "de": "Das dauert nur eine Viertelstunde.",
    "lv": "Durează doar un sfert de oră.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist mir zu hoch.",
    "lv": "Prețul este prea mare pentru mine.",
    "level": "Sätze"
  },
  {
    "de": "Ich brauche zwei Fotos für meinen Pass.",
    "lv": "Am nevoie de două fotografii pentru pașaport.",
    "level": "Sätze"
  },
  {
    "de": "Bitte packen Sie es ein und schicken Sie es mir nach Hause.",
    "lv": "Vă rog, împachetați-l și trimiteți-mi-l acasă.",
    "level": "Sätze"
  },
  {
    "de": "Wir haben feste Preise.",
    "lv": "Avem prețuri fixe.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, fotografieren Sie mich.",
    "lv": "Vă rog, fotografiați-mă.",
    "level": "Sätze"
  },
  {
    "de": "Setzen Sie sich, schauen Sie gerade in die Kamera und bewegen Sie sich nicht!",
    "lv": "Așezați-vă, priviți drept în obiectiv și nu vă mișcați!",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich das Probebild sehen?",
    "lv": "Când pot vedea fotografia de probă?",
    "level": "Sätze"
  },
  {
    "de": "Wann sind die Fotos fertig?",
    "lv": "Când sunt gata fotografiile?",
    "level": "Sätze"
  },
  {
    "de": "Die Aufnahme ist gelungen.",
    "lv": "Fotografia este reușită.",
    "level": "Sätze"
  },
  {
    "de": "Die Fotos sind gut geworden.",
    "lv": "Fotografiile au ieșit bine.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie das Foto auch vergrößern?",
    "lv": "Puteți mări și fotografia?",
    "level": "Sätze"
  },
  {
    "de": "Sind diese Steine echt?",
    "lv": "Pietrele acestea sunt veritabile?",
    "level": "Sätze"
  },
  {
    "de": "Ist das echtes Gold?",
    "lv": "Este aur adevărat?",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir bitte Trauringe.",
    "lv": "Arătați-mi, vă rog, niște verighete.",
    "level": "Sätze"
  },
  {
    "de": "Der Ring ist mir etwas zu weit.",
    "lv": "Inelul îmi este cam larg.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann ihn enger machen.",
    "lv": "Îl pot strâmta.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Ring passt mir.",
    "lv": "Inelul acesta mi se potrivește.",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir schöne Geschenkideen.",
    "lv": "Arătați-mi niște idei frumoase de cadouri.",
    "level": "Sätze"
  },
  {
    "de": "Wie gefallen dir diese Ohrringe?",
    "lv": "Cum ți se par cerceii aceștia?",
    "level": "Sätze"
  },
  {
    "de": "Diese Brosche ist wirklich schön.",
    "lv": "Broșa aceasta este într-adevăr frumoasă.",
    "level": "Sätze"
  },
  {
    "de": "Der Stein ist ein Saphir.",
    "lv": "Piatra este un safir.",
    "level": "Sätze"
  },
  {
    "de": "Das ist kein echter Stein, das ist Glas.",
    "lv": "Aceasta nu este o piatră adevărată, este sticlă.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Armband kann ich Ihnen besonders empfehlen.",
    "lv": "Vă pot recomanda în mod deosebit brățara aceasta.",
    "level": "Sätze"
  },
  {
    "de": "Es ist besonders schön gearbeitet.",
    "lv": "Este deosebit de frumos lucrată.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist nicht hoch.",
    "lv": "Prețul nu este mare.",
    "level": "Sätze"
  },
  {
    "de": "Bekomme ich die Schachtel gratis?",
    "lv": "Primesc cutia gratuit?",
    "level": "Sätze"
  },
  {
    "de": "Alle Schmuckstücke sind gestempelt.",
    "lv": "Toate bijuteriile sunt marcate.",
    "level": "Sätze"
  },
  {
    "de": "Falls es meiner Frau nicht gefällt, kann ich es umtauschen?",
    "lv": "Dacă nu-i place soției mele, îl pot schimba?",
    "level": "Sätze"
  },
  {
    "de": "Natürlich, jederzeit.",
    "lv": "Desigur, oricând.",
    "level": "Sätze"
  }
];

window.SENTENCE_ENTRIES = SENTENCE_ENTRIES;

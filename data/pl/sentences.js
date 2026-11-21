const SENTENCE_ENTRIES = [
  {
    "de": "Hüte dich davor!",
    "lv": "Strzeż się tego!",
    "level": "Sätze"
  },
  {
    "de": "Wenn nichts dazwischenkommt.",
    "lv": "Jeśli nic nie stanie na przeszkodzie. • Jeśli wszystko pójdzie zgodnie z planem.",
    "level": "Sätze"
  },
  {
    "de": "Das kann ich mir denken!",
    "lv": "Wyobrażam sobie!",
    "level": "Sätze"
  },
  {
    "de": "Ist er denn krank?",
    "lv": "To on jest chory?",
    "level": "Sätze"
  },
  {
    "de": "Was denn?",
    "lv": "Co takiego?",
    "level": "Sätze"
  },
  {
    "de": "Desto mehr.",
    "lv": "Tym bardziej.",
    "level": "Sätze"
  },
  {
    "de": "Je mehr, desto besser.",
    "lv": "Im więcej, tym lepiej.",
    "level": "Sätze"
  },
  {
    "de": "Alles deutet auf Regen.",
    "lv": "Wszystko wskazuje na to, że będzie padać.",
    "level": "Sätze"
  },
  {
    "de": "Damit ist mir wenig gedient.",
    "lv": "Na niewiele mi się to zda.",
    "level": "Sätze"
  },
  {
    "de": "Er ist dienstlich verhindert.",
    "lv": "Nie może przyjść z powodu obowiązków służbowych.",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie doch!",
    "lv": "Proszę mówić!",
    "level": "Sätze"
  },
  {
    "de": "Es donnert.",
    "lv": "Grzmi.",
    "level": "Sätze"
  },
  {
    "de": "Doppelt so groß.",
    "lv": "Dwa razy większy.",
    "level": "Sätze"
  },
  {
    "de": "Von dort.",
    "lv": "Stamtąd.",
    "level": "Sätze"
  },
  {
    "de": "Die Zeit drängt.",
    "lv": "Czas nagli.",
    "level": "Sätze"
  },
  {
    "de": "Ihn drücken Sorgen.",
    "lv": "Gnębią go zmartwienia.",
    "level": "Sätze"
  },
  {
    "de": "Hast du das Buch durchgearbeitet?",
    "lv": "Przestudiowałeś tę książkę?",
    "level": "Sätze"
  },
  {
    "de": "Kein Durchgang!",
    "lv": "Przejście wzbronione!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich Sie bitten?",
    "lv": "Czy mogę prosić do tańca? • Czy mogę pana prosić?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin durstig.",
    "lv": "Chce mi się pić.",
    "level": "Sätze"
  },
  {
    "de": "Eben das meine ich.",
    "lv": "Właśnie to mam na myśli.",
    "level": "Sätze"
  },
  {
    "de": "Es ist ganz egal.",
    "lv": "To zupełnie obojętne.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie eigentlich?",
    "lv": "Czego pan właściwie chce?",
    "level": "Sätze"
  },
  {
    "de": "Eilt es mit dieser Sache?",
    "lv": "Czy ta sprawa jest pilna?",
    "level": "Sätze"
  },
  {
    "de": "Eilt sehr!",
    "lv": "Bardzo pilne!",
    "level": "Sätze"
  },
  {
    "de": "Ich habe es eilig.",
    "lv": "Spieszę się.",
    "level": "Sätze"
  },
  {
    "de": "Du bildest dir nur ein, krank zu sein.",
    "lv": "Tylko sobie wmawiasz, że jesteś chory.",
    "level": "Sätze"
  },
  {
    "de": "Was fällt dir ein?",
    "lv": "Co ty sobie wyobrażasz? • Co ci przychodzi do głowy?",
    "level": "Sätze"
  },
  {
    "de": "Es war einmal.",
    "lv": "Dawno, dawno temu.",
    "level": "Sätze"
  },
  {
    "de": "Steigen Sie bitte ein!",
    "lv": "Proszę wsiadać!",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie ein!",
    "lv": "Proszę wejść!",
    "level": "Sätze"
  },
  {
    "de": "Einzelnes hat mir dort gefallen.",
    "lv": "Kilka rzeczy mi się tam podobało.",
    "level": "Sätze"
  },
  {
    "de": "Es empfiehlt sich.",
    "lv": "Jest to wskazane.",
    "level": "Sätze"
  },
  {
    "de": "Diese Flasche enthält Essig.",
    "lv": "W tej butelce jest ocet.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldigen Sie bitte!",
    "lv": "Przepraszam bardzo!",
    "level": "Sätze"
  },
  {
    "de": "Entweder... oder...",
    "lv": "Albo..., albo...",
    "level": "Sätze"
  },
  {
    "de": "Wer war der Erste?",
    "lv": "Kto był pierwszy?",
    "level": "Sätze"
  },
  {
    "de": "Wer fehlt heute?",
    "lv": "Kogo dziś nie ma?",
    "level": "Sätze"
  },
  {
    "de": "Was fehlt dir?",
    "lv": "Co ci jest?",
    "level": "Sätze"
  },
  {
    "de": "Wie heißen Sie?",
    "lv": "Jak się pan nazywa?",
    "level": "Sätze"
  },
  {
    "de": "Was soll das heißen?",
    "lv": "Co to ma znaczyć?",
    "level": "Sätze"
  },
  {
    "de": "Bitte treten Sie näher heran!",
    "lv": "Proszę podejść bliżej!",
    "level": "Sätze"
  },
  {
    "de": "Heraus mit der Sprache!",
    "lv": "Mów wreszcie! • Wyduś to z siebie!",
    "level": "Sätze"
  },
  {
    "de": "im Herbst",
    "lv": "jesienią",
    "level": "Sätze"
  },
  {
    "de": "Meine Herrschaften!",
    "lv": "Proszę państwa!",
    "level": "Sätze"
  },
  {
    "de": "von heute an",
    "lv": "począwszy od dzisiaj",
    "level": "Sätze"
  },
  {
    "de": "heute früh",
    "lv": "dziś rano",
    "level": "Sätze"
  },
  {
    "de": "heute Nacht",
    "lv": "dziś w nocy",
    "level": "Sätze"
  },
  {
    "de": "Zu Hilfe!",
    "lv": "Na pomoc!",
    "level": "Sätze"
  },
  {
    "de": "Ich lerne jeden Tag Deutsch.",
    "lv": "Codziennie uczę się niemieckiego.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das bitte wiederholen?",
    "lv": "Możesz to, proszę, powtórzyć?",
    "level": "Sätze"
  },
  {
    "de": "Wir treffen uns am Bahnhof.",
    "lv": "Spotykamy się na dworcu.",
    "level": "Sätze"
  },
  {
    "de": "Ich stimme dir teilweise zu.",
    "lv": "Częściowo się z tobą zgadzam.",
    "level": "Sätze"
  },
  {
    "de": "Diese Entscheidung hat weitreichende Folgen.",
    "lv": "Ta decyzja ma daleko idące skutki.",
    "level": "Sätze"
  },
  {
    "de": "Man sollte mehrere Perspektiven berücksichtigen.",
    "lv": "Należałoby uwzględnić kilka punktów widzenia.",
    "level": "Sätze"
  },
  {
    "de": "Könnten Sie das näher erläutern?",
    "lv": "Czy mógłby pan to bliżej wyjaśnić?",
    "level": "Sätze"
  },
  {
    "de": "Was mich anbelangt,...",
    "lv": "Jeśli chodzi o mnie,...",
    "level": "Sätze"
  },
  {
    "de": "Wie alt sind Sie?",
    "lv": "Ile pan ma lat?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zwanzig Jahre alt.",
    "lv": "Mam dwadzieścia lat.",
    "level": "Sätze"
  },
  {
    "de": "Von heute an.",
    "lv": "Od dzisiaj.",
    "level": "Sätze"
  },
  {
    "de": "Von jetzt an.",
    "lv": "Od teraz.",
    "level": "Sätze"
  },
  {
    "de": "Anders geht es nicht.",
    "lv": "Inaczej się nie da.",
    "level": "Sätze"
  },
  {
    "de": "Rufen Sie mich an.",
    "lv": "Proszę do mnie zadzwonić.",
    "level": "Sätze"
  },
  {
    "de": "Bitte stellen Sie das Radio ab.",
    "lv": "Proszę wyłączyć radio.",
    "level": "Sätze"
  },
  {
    "de": "Achte bitte auf den Verkehr.",
    "lv": "Uważaj, proszę, na ruch uliczny.",
    "level": "Sätze"
  },
  {
    "de": "Darauf musst du achten.",
    "lv": "Na to musisz uważać.",
    "level": "Sätze"
  },
  {
    "de": "Heute mache ich es anders.",
    "lv": "Dziś zrobię to inaczej.",
    "level": "Sätze"
  },
  {
    "de": "Wir warten auf den Bus.",
    "lv": "Czekamy na autobus.",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt allein.",
    "lv": "Mieszka sam.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Ausbildung absolviert.",
    "lv": "Ukończyłem kształcenie zawodowe. • Skończyłem naukę.",
    "level": "Sätze"
  },
  {
    "de": "Ich warte den Regen ab.",
    "lv": "Poczekam, aż przestanie padać.",
    "level": "Sätze"
  },
  {
    "de": "Er arbeitet in der Verkaufsabteilung.",
    "lv": "Pracuje w dziale sprzedaży.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin allergisch gegen Katzen.",
    "lv": "Jestem uczulony na koty.",
    "level": "Sätze"
  },
  {
    "de": "Andererseits verstehe ich ihn.",
    "lv": "Z drugiej strony go rozumiem.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Situation analysiert.",
    "lv": "Przeanalizowałem sytuację.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat meinen Vorschlag akzeptiert.",
    "lv": "Przyjęła moją propozycję.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte das genauer analysieren.",
    "lv": "Chciałbym to dokładniej przeanalizować.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte den Vertrag ändern.",
    "lv": "Chciałbym zmienić umowę.",
    "level": "Sätze"
  },
  {
    "de": "Er ändert ständig seine Meinung.",
    "lv": "Ciągle zmienia zdanie.",
    "level": "Sätze"
  },
  {
    "de": "Ähnliche Probleme hatten wir schon früher.",
    "lv": "Podobne problemy mieliśmy już wcześniej.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ahnung!",
    "lv": "Nie mam pojęcia!",
    "level": "Sätze"
  },
  {
    "de": "Hör auf zu jammern.",
    "lv": "Przestań marudzić.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Kleid ist akademisch gekleidet.",
    "lv": "Ta sukienka jest stylowa, ale konserwatywna.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre gerne Akkordeonmusik.",
    "lv": "Lubię słuchać muzyki akordeonowej.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das Gerät anklicken?",
    "lv": "Możesz kliknąć na to urządzenie?",
    "level": "Sätze"
  },
  {
    "de": "Bitte öffne die Datei und klicke darauf.",
    "lv": "Otwórz, proszę, plik i kliknij na niego.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe einen Unfall gehabt.",
    "lv": "Miałem wypadek.",
    "level": "Sätze"
  },
  {
    "de": "Wir laufen zum Bahnhof.",
    "lv": "Idziemy pieszo na dworzec.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schalte den Fernseher an.",
    "lv": "Włącz, proszę, telewizor.",
    "level": "Sätze"
  },
  {
    "de": "Mein Computer ist abgestürzt.",
    "lv": "Mój komputer się zawiesił.",
    "level": "Sätze"
  },
  {
    "de": "Am Wochenende gehe ich angeln.",
    "lv": "W weekend idę na ryby.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe den Anruf verpasst.",
    "lv": "Nie odebrałem telefonu.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mich später anrufen?",
    "lv": "Możesz zadzwonić do mnie później?",
    "level": "Sätze"
  },
  {
    "de": "Bitte nimm meinen Vorschlag an.",
    "lv": "Przyjmij, proszę, moją propozycję.",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme dein Angebot an.",
    "lv": "Przyjmuję twoją ofertę.",
    "level": "Sätze"
  },
  {
    "de": "Er nahm die Einladung an.",
    "lv": "Przyjął zaproszenie.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Angst vor Spinnen.",
    "lv": "Boję się pająków.",
    "level": "Sätze"
  },
  {
    "de": "Keine Angst, alles wird gut.",
    "lv": "Nie bój się, wszystko będzie dobrze.",
    "level": "Sätze"
  },
  {
    "de": "Anklang finden.",
    "lv": "Znaleźć oddźwięk. • Spotkać się z uznaniem.",
    "level": "Sätze"
  },
  {
    "de": "Es kommt darauf an.",
    "lv": "To zależy.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Anlass.",
    "lv": "Z tej okazji.",
    "level": "Sätze"
  },
  {
    "de": "Nehmen wir an, dass...",
    "lv": "Załóżmy, że...",
    "level": "Sätze"
  },
  {
    "de": "Was hast du da angerichtet?",
    "lv": "Co ty tam narobiłeś?",
    "level": "Sätze"
  },
  {
    "de": "Bis ans Ende.",
    "lv": "Do samego końca.",
    "level": "Sätze"
  },
  {
    "de": "Du glaubst mir anscheinend nicht.",
    "lv": "Najwyraźniej mi nie wierzysz.",
    "level": "Sätze"
  },
  {
    "de": "Meiner Ansicht nach...",
    "lv": "Moim zdaniem...",
    "level": "Sätze"
  },
  {
    "de": "Stell dich nicht so an!",
    "lv": "Nie wydziwiaj!",
    "level": "Sätze"
  },
  {
    "de": "An die Arbeit gehen.",
    "lv": "Zabrać się do pracy.",
    "level": "Sätze"
  },
  {
    "de": "Außer Atem sein.",
    "lv": "Być zdyszanym.",
    "level": "Sätze"
  },
  {
    "de": "Guten Appetit!",
    "lv": "Smacznego!",
    "level": "Sätze"
  },
  {
    "de": "In einem Atemzug.",
    "lv": "Jednym tchem.",
    "level": "Sätze"
  },
  {
    "de": "Auf jeden Fall.",
    "lv": "W każdym razie.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal war alles still.",
    "lv": "Nagle wszystko ucichło.",
    "level": "Sätze"
  },
  {
    "de": "Bitte mach die Tür auf!",
    "lv": "Otwórz, proszę, drzwi!",
    "level": "Sätze"
  },
  {
    "de": "Er hat den Kredit aufgenommen.",
    "lv": "Wziął kredyt.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen heute aufräumen.",
    "lv": "Musimy dziś posprzątać.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre jetzt auf.",
    "lv": "Teraz już przestanę.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schon auf.",
    "lv": "Już wstał.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen das Treffen verschieben.",
    "lv": "Musimy przełożyć spotkanie.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat mich aufgeregt.",
    "lv": "Zdenerwowała mnie.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal.",
    "lv": "Nagle.",
    "level": "Sätze"
  },
  {
    "de": "Auf der Stelle.",
    "lv": "Natychmiast.",
    "level": "Sätze"
  },
  {
    "de": "Für den Schaden aufkommen.",
    "lv": "Pokryć szkody.",
    "level": "Sätze"
  },
  {
    "de": "Bitte die Tür auf!",
    "lv": "Proszę otworzyć drzwi!",
    "level": "Sätze"
  },
  {
    "de": "Aufrecht sitzen.",
    "lv": "Siedzieć prosto.",
    "level": "Sätze"
  },
  {
    "de": "Er ist auf.",
    "lv": "Wstał.",
    "level": "Sätze"
  },
  {
    "de": "Alle Kräfte aufwenden.",
    "lv": "Wytężyć wszystkie siły.",
    "level": "Sätze"
  },
  {
    "de": "Viel Mühe aufwenden.",
    "lv": "Zadać sobie wiele trudu.",
    "level": "Sätze"
  },
  {
    "de": "Geh mir aus den Augen!",
    "lv": "Zejdź mi z oczu!",
    "level": "Sätze"
  },
  {
    "de": "Unter vier Augen.",
    "lv": "W cztery oczy.",
    "level": "Sätze"
  },
  {
    "de": "Aus Mangel an Zeit.",
    "lv": "Z braku czasu.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Grunde.",
    "lv": "Z tego powodu.",
    "level": "Sätze"
  },
  {
    "de": "Alle außer dir.",
    "lv": "Wszyscy oprócz ciebie.",
    "level": "Sätze"
  },
  {
    "de": "Auf Äußerlichkeiten Wert legen.",
    "lv": "Przywiązywać wagę do wyglądu zewnętrznego.",
    "level": "Sätze"
  },
  {
    "de": "Im äußersten Fall.",
    "lv": "W najgorszym razie.",
    "level": "Sätze"
  },
  {
    "de": "Äußerst wichtig.",
    "lv": "Niezwykle ważne.",
    "level": "Sätze"
  },
  {
    "de": "Aussicht auf die See.",
    "lv": "Widok na morze.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gute Aussichten.",
    "lv": "Ma dobre perspektywy.",
    "level": "Sätze"
  },
  {
    "de": "Wie wird dieses Wort ausgesprochen?",
    "lv": "Jak się wymawia to słowo?",
    "level": "Sätze"
  },
  {
    "de": "Sein Beileid aussprechen.",
    "lv": "Złożyć kondolencje.",
    "level": "Sätze"
  },
  {
    "de": "Wann wurden die Meisterschaftskämpfe ausgetragen?",
    "lv": "Kiedy odbyły się mistrzostwa?",
    "level": "Sätze"
  },
  {
    "de": "Welchen Beruf üben Sie aus?",
    "lv": "Jaki zawód pan wykonuje?",
    "level": "Sätze"
  },
  {
    "de": "Einfluss ausüben.",
    "lv": "Wywierać wpływ.",
    "level": "Sätze"
  },
  {
    "de": "Auswärts essen.",
    "lv": "Jeść poza domem.",
    "level": "Sätze"
  },
  {
    "de": "Per Bahn.",
    "lv": "Koleją.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Bahn.",
    "lv": "Pociągiem.",
    "level": "Sätze"
  },
  {
    "de": "Möglichst bald.",
    "lv": "Jak najszybciej.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist Angst und bange.",
    "lv": "Strasznie się boję.",
    "level": "Sätze"
  },
  {
    "de": "Auf die lange Bank schieben.",
    "lv": "Odkładać na święty nigdy.",
    "level": "Sätze"
  },
  {
    "de": "Bar zahlen.",
    "lv": "Płacić gotówką.",
    "level": "Sätze"
  },
  {
    "de": "Erz bauen.",
    "lv": "Wydobywać rudę.",
    "level": "Sätze"
  },
  {
    "de": "Mist bauen.",
    "lv": "Narobić głupstw.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin beauftragt.",
    "lv": "Powierzono mi to zadanie.",
    "level": "Sätze"
  },
  {
    "de": "Nach Bedarf.",
    "lv": "W miarę potrzeby.",
    "level": "Sätze"
  },
  {
    "de": "Ich bedauere ihn.",
    "lv": "Żal mi go.",
    "level": "Sätze"
  },
  {
    "de": "Was bedeutet dieses Wort?",
    "lv": "Co znaczy to słowo?",
    "level": "Sätze"
  },
  {
    "de": "Unter der Bedingung, dass...",
    "lv": "Pod warunkiem, że...",
    "level": "Sätze"
  },
  {
    "de": "Sie sieht bedrückt aus.",
    "lv": "Wygląda na przygnębioną.",
    "level": "Sätze"
  },
  {
    "de": "Hinweise befolgen.",
    "lv": "Stosować się do wskazówek.",
    "level": "Sätze"
  },
  {
    "de": "Befehle befolgen.",
    "lv": "Wykonywać rozkazy.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Post befördern.",
    "lv": "Wysłać pocztą.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin begierig zu wissen.",
    "lv": "Bardzo chciałbym wiedzieć.",
    "level": "Sätze"
  },
  {
    "de": "Zu Beginn.",
    "lv": "Na początku.",
    "level": "Sätze"
  },
  {
    "de": "Am Beginn.",
    "lv": "Na początku.",
    "level": "Sätze"
  },
  {
    "de": "Bei Beginn.",
    "lv": "W chwili rozpoczęcia.",
    "level": "Sätze"
  },
  {
    "de": "In Begleitung.",
    "lv": "W towarzystwie.",
    "level": "Sätze"
  },
  {
    "de": "Mit seiner Begleitung.",
    "lv": "Ze swoją osobą towarzyszącą.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schwer von Begriff.",
    "lv": "Wolno kojarzy.",
    "level": "Sätze"
  },
  {
    "de": "Im Gedächtnis behalten.",
    "lv": "Zachować w pamięci.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tisch.",
    "lv": "Przy stole.",
    "level": "Sätze"
  },
  {
    "de": "Bei Sinnen sein.",
    "lv": "Być przy zdrowych zmysłach.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tage.",
    "lv": "Za dnia.",
    "level": "Sätze"
  },
  {
    "de": "Bei weitem nicht so.",
    "lv": "Bynajmniej nie tak.",
    "level": "Sätze"
  },
  {
    "de": "Alle beide.",
    "lv": "Obydwaj.",
    "level": "Sätze"
  },
  {
    "de": "Stürmischer Beifall brach los.",
    "lv": "Rozległy się burzliwe oklaski.",
    "level": "Sätze"
  },
  {
    "de": "Beifall finden.",
    "lv": "Spotkać się z aprobatą.",
    "level": "Sätze"
  },
  {
    "de": "Beileid aussprechen.",
    "lv": "Złożyć wyrazy współczucia.",
    "level": "Sätze"
  },
  {
    "de": "Auf eigenen Beinen stehen.",
    "lv": "Stać na własnych nogach.",
    "level": "Sätze"
  },
  {
    "de": "Zum Beispiel.",
    "lv": "Na przykład.",
    "level": "Sätze"
  },
  {
    "de": "Beistand leisten.",
    "lv": "Udzielić pomocy.",
    "level": "Sätze"
  },
  {
    "de": "Beitrag leisten.",
    "lv": "Wnieść swój wkład.",
    "level": "Sätze"
  },
  {
    "de": "Jemandes Bekanntschaft machen.",
    "lv": "Poznać kogoś.",
    "level": "Sätze"
  },
  {
    "de": "Bekanntschaft anknüpfen.",
    "lv": "Nawiązać znajomość.",
    "level": "Sätze"
  },
  {
    "de": "Belegte Brötchen.",
    "lv": "Kanapki z bułek.",
    "level": "Sätze"
  },
  {
    "de": "Nach Ihrem Belieben.",
    "lv": "Jak pan sobie życzy.",
    "level": "Sätze"
  },
  {
    "de": "Zu jeder beliebigen Zeit.",
    "lv": "O dowolnej porze.",
    "level": "Sätze"
  },
  {
    "de": "Schweigen beobachten.",
    "lv": "Zachować milczenie.",
    "level": "Sätze"
  },
  {
    "de": "Zur Bequemlichkeit.",
    "lv": "Dla wygody.",
    "level": "Sätze"
  },
  {
    "de": "Bereit sein.",
    "lv": "Być gotowym. • Być skłonnym.",
    "level": "Sätze"
  },
  {
    "de": "Unfallopfer bergen.",
    "lv": "Ratować ofiary wypadku.",
    "level": "Sätze"
  },
  {
    "de": "Bericht erstatten.",
    "lv": "Złożyć sprawozdanie.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind besetzt.",
    "lv": "Wszystkie miejsca są zajęte.",
    "level": "Sätze"
  },
  {
    "de": "Neue Besen kehren gut.",
    "lv": "Nowa miotła dobrze zamiata.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt ein Haus.",
    "lv": "Jest właścicielem domu.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt viel Mut.",
    "lv": "Ma dużo odwagi.",
    "level": "Sätze"
  },
  {
    "de": "Desto besser.",
    "lv": "Tym lepiej.",
    "level": "Sätze"
  },
  {
    "de": "Gute Besserung!",
    "lv": "Szybkiego powrotu do zdrowia!",
    "level": "Sätze"
  },
  {
    "de": "Beim besten Willen.",
    "lv": "Przy najlepszych chęciach.",
    "level": "Sätze"
  },
  {
    "de": "Am besten.",
    "lv": "Najlepiej.",
    "level": "Sätze"
  },
  {
    "de": "Es besteht Zweifel.",
    "lv": "Istnieją wątpliwości.",
    "level": "Sätze"
  },
  {
    "de": "Seine Aufgabe besteht darin...",
    "lv": "Jego zadanie polega na...",
    "level": "Sätze"
  },
  {
    "de": "Grüße bestellen.",
    "lv": "Przekazać pozdrowienia.",
    "level": "Sätze"
  },
  {
    "de": "Ganz bestimmt.",
    "lv": "Z całą pewnością.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch kommen.",
    "lv": "Przyjść w odwiedziny.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch sein.",
    "lv": "Być w odwiedzinach.",
    "level": "Sätze"
  },
  {
    "de": "Oft Konzerte besuchen.",
    "lv": "Często chodzić na koncerty.",
    "level": "Sätze"
  },
  {
    "de": "Welche Schule hat er besucht?",
    "lv": "Do jakiej szkoły chodził?",
    "level": "Sätze"
  },
  {
    "de": "In Betracht ziehen.",
    "lv": "Brać pod uwagę.",
    "level": "Sätze"
  },
  {
    "de": "Außer Betracht lassen.",
    "lv": "Nie brać pod uwagę.",
    "level": "Sätze"
  },
  {
    "de": "Er betreibt ein Hotel.",
    "lv": "Prowadzi hotel.",
    "level": "Sätze"
  },
  {
    "de": "Alle beiden.",
    "lv": "Obaj.",
    "level": "Sätze"
  },
  {
    "de": "Alles bezahlen.",
    "lv": "Zapłacić za wszystko.",
    "level": "Sätze"
  },
  {
    "de": "Bezüglich auf etwas.",
    "lv": "W odniesieniu do czegoś.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön.",
    "lv": "Proszę bardzo.",
    "level": "Sätze"
  },
  {
    "de": "Wie bitte?",
    "lv": "Słucham?",
    "level": "Sätze"
  },
  {
    "de": "Bitte sehr.",
    "lv": "Bardzo proszę.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe eine Bitte an Sie.",
    "lv": "Mam do pana prośbę.",
    "level": "Sätze"
  },
  {
    "de": "Trompete blasen.",
    "lv": "Grać na trąbce.",
    "level": "Sätze"
  },
  {
    "de": "In einem Buch blättern.",
    "lv": "Kartkować książkę.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßen Füßen.",
    "lv": "Bosymi stopami.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßem Auge.",
    "lv": "Gołym okiem.",
    "level": "Sätze"
  },
  {
    "de": "Danke für die Blumen!",
    "lv": "Dziękuję za komplement!",
    "level": "Sätze"
  },
  {
    "de": "Alles in Butter.",
    "lv": "Wszystko gra.",
    "level": "Sätze"
  },
  {
    "de": "Bitte checken.",
    "lv": "Proszę sprawdzić.",
    "level": "Sätze"
  },
  {
    "de": "Da ist er!",
    "lv": "Oto on!",
    "level": "Sätze"
  },
  {
    "de": "Alles spricht dafür.",
    "lv": "Wszystko na to wskazuje.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann nichts dafür.",
    "lv": "To nie moja wina.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin dagegen.",
    "lv": "Jestem przeciw.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe nichts dagegen.",
    "lv": "Nie mam nic przeciwko temu.",
    "level": "Sätze"
  },
  {
    "de": "Von daheim.",
    "lv": "Z domu.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Dame ziehen.",
    "lv": "Zrobić ruch hetmanem.",
    "level": "Sätze"
  },
  {
    "de": "Es dämmert.",
    "lv": "Zmierzcha się. • Świta.",
    "level": "Sätze"
  },
  {
    "de": "Danke schön!",
    "lv": "Dziękuję bardzo!",
    "level": "Sätze"
  },
  {
    "de": "Dann und wann.",
    "lv": "Od czasu do czasu.",
    "level": "Sätze"
  },
  {
    "de": "Darauf kannst du dich verlassen.",
    "lv": "Możesz na to liczyć.",
    "level": "Sätze"
  },
  {
    "de": "Daraus wird nichts.",
    "lv": "Nic z tego nie będzie.",
    "level": "Sätze"
  },
  {
    "de": "So dass...",
    "lv": "Tak że...",
    "level": "Sätze"
  },
  {
    "de": "Für wen halten Sie mich?",
    "lv": "Za kogo mnie pan uważa?",
    "level": "Sätze"
  },
  {
    "de": "Hände weg!",
    "lv": "Ręce przy sobie!",
    "level": "Sätze"
  },
  {
    "de": "Lass den Kopf nicht hängen!",
    "lv": "Nie zwieszaj nosa na kwintę!",
    "level": "Sätze"
  },
  {
    "de": "zu Hause",
    "lv": "w domu",
    "level": "Sätze"
  },
  {
    "de": "nach Hause gehen",
    "lv": "iść do domu",
    "level": "Sätze"
  },
  {
    "de": "von Haus aus",
    "lv": "z pochodzenia • z natury",
    "level": "Sätze"
  },
  {
    "de": "Meinen herzlichsten Glückwunsch!",
    "lv": "Najserdeczniejsze gratulacje!",
    "level": "Sätze"
  },
  {
    "de": "Seien Sie so gut!",
    "lv": "Proszę być tak dobrym!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie die Güte!",
    "lv": "Proszę być tak uprzejmym!",
    "level": "Sätze"
  },
  {
    "de": "Was hast du?",
    "lv": "Co ci jest?",
    "level": "Sätze"
  },
  {
    "de": "Gestatten Sie bitte!",
    "lv": "Pan pozwoli!",
    "level": "Sätze"
  },
  {
    "de": "Ist es gestattet zu rauchen?",
    "lv": "Czy wolno palić?",
    "level": "Sätze"
  },
  {
    "de": "Ich muss gestehen, dass...",
    "lv": "Muszę przyznać, że...",
    "level": "Sätze"
  },
  {
    "de": "gestern früh",
    "lv": "wczoraj rano",
    "level": "Sätze"
  },
  {
    "de": "gestern Abend",
    "lv": "wczoraj wieczorem",
    "level": "Sätze"
  },
  {
    "de": "Es ist mir gleichgültig, ob...",
    "lv": "Jest mi wszystko jedno, czy...",
    "level": "Sätze"
  },
  {
    "de": "Was ist geschehen?",
    "lv": "Co się stało?",
    "level": "Sätze"
  },
  {
    "de": "Mach keine Geschichten!",
    "lv": "Nie rób głupstw!",
    "level": "Sätze"
  },
  {
    "de": "Geschweige denn...",
    "lv": "Nie mówiąc już o...",
    "level": "Sätze"
  },
  {
    "de": "Gehen Sie geradeaus!",
    "lv": "Niech pan idzie prosto!",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es Ihnen?",
    "lv": "Jak się pan ma?",
    "level": "Sätze"
  },
  {
    "de": "Frag ihn gelegentlich, ob...",
    "lv": "Zapytaj go przy okazji, czy...",
    "level": "Sätze"
  },
  {
    "de": "morgen früh",
    "lv": "jutro rano",
    "level": "Sätze"
  },
  {
    "de": "im Frühling",
    "lv": "wiosną",
    "level": "Sätze"
  },
  {
    "de": "Was gibt’s Neues?",
    "lv": "Co nowego?",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Brief folgt, dass...",
    "lv": "Z tego listu wynika, że...",
    "level": "Sätze"
  },
  {
    "de": "Fahre fort!",
    "lv": "Kontynuuj!",
    "level": "Sätze"
  },
  {
    "de": "Er ist kein Freund von...",
    "lv": "Nie przepada za...",
    "level": "Sätze"
  },
  {
    "de": "Es erwies sich, dass...",
    "lv": "Okazało się, że...",
    "level": "Sätze"
  },
  {
    "de": "Gedenkst du meiner?",
    "lv": "Pamiętasz o mnie? • Myślisz o mnie?",
    "level": "Sätze"
  },
  {
    "de": "im Winter",
    "lv": "zimą",
    "level": "Sätze"
  },
  {
    "de": "Welcher Jahrgang sind Sie?",
    "lv": "Z którego jest pan rocznika?",
    "level": "Sätze"
  },
  {
    "de": "Es jammert mich zu sehen...",
    "lv": "Żal mi patrzeć...",
    "level": "Sätze"
  },
  {
    "de": "je mehr, desto besser",
    "lv": "im więcej, tym lepiej",
    "level": "Sätze"
  },
  {
    "de": "bis jetzt",
    "lv": "do tej pory",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich zum Bahnhof?",
    "lv": "Jak się dostanę na dworzec?",
    "level": "Sätze"
  },
  {
    "de": "Komm her!",
    "lv": "Chodź tu!",
    "level": "Sätze"
  },
  {
    "de": "Könnte ich Frau N. sprechen?",
    "lv": "Czy mógłbym porozmawiać z panią N.?",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das?",
    "lv": "Ile to kosztuje?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange dauert die Vorstellung?",
    "lv": "Jak długo trwa przedstawienie?",
    "level": "Sätze"
  },
  {
    "de": "Lass das!",
    "lv": "Przestań! • Zostaw to!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich in Ruhe!",
    "lv": "Zostaw mnie w spokoju!",
    "level": "Sätze"
  },
  {
    "de": "Lassen Sie mich Ihnen helfen!",
    "lv": "Proszę pozwolić, że panu pomogę!",
    "level": "Sätze"
  },
  {
    "de": "Lasst uns gehen!",
    "lv": "Chodźmy!",
    "level": "Sätze"
  },
  {
    "de": "Na, wie läufts?",
    "lv": "No i jak leci?",
    "level": "Sätze"
  },
  {
    "de": "Es lebe!",
    "lv": "Niech żyje!",
    "level": "Sätze"
  },
  {
    "de": "Leben Sie wohl!",
    "lv": "Żegnam pana!",
    "level": "Sätze"
  },
  {
    "de": "Was ist los?",
    "lv": "Co się dzieje?",
    "level": "Sätze"
  },
  {
    "de": "Der Job ist anstrengend.",
    "lv": "Ta praca jest męcząca.",
    "level": "Sätze"
  },
  {
    "de": "Das war ein anstrengender Tag.",
    "lv": "To był męczący dzień.",
    "level": "Sätze"
  },
  {
    "de": "Deutsch lernen kann anstrengend sein.",
    "lv": "Nauka niemieckiego może być męcząca.",
    "level": "Sätze"
  },
  {
    "de": "Er verlangt eine Erklärung.",
    "lv": "Żąda wyjaśnień.",
    "level": "Sätze"
  },
  {
    "de": "Der Verkäufer verlangt zu viel Geld.",
    "lv": "Sprzedawca chce za dużo pieniędzy.",
    "level": "Sätze"
  },
  {
    "de": "Das Gesetz verlangt es so.",
    "lv": "Prawo tego wymaga.",
    "level": "Sätze"
  },
  {
    "de": "Das ist gar nicht so schwer.",
    "lv": "To wcale nie jest takie trudne.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe gar kein Geld.",
    "lv": "W ogóle nie mam pieniędzy.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gar nichts gesagt.",
    "lv": "W ogóle nic nie powiedział.",
    "level": "Sätze"
  },
  {
    "de": "Der Hund ist los.",
    "lv": "Pies biega luzem.",
    "level": "Sätze"
  },
  {
    "de": "Hier ist viel los.",
    "lv": "Dużo się tu dzieje.",
    "level": "Sätze"
  },
  {
    "de": "Halt die Luft an!",
    "lv": "Cicho bądź! • Nie przesadzaj!",
    "level": "Sätze"
  },
  {
    "de": "Was machst du?",
    "lv": "Co robisz?",
    "level": "Sätze"
  },
  {
    "de": "Sag mal!",
    "lv": "No powiedz!",
    "level": "Sätze"
  },
  {
    "de": "Was meinen Sie damit?",
    "lv": "Co pan przez to rozumie?",
    "level": "Sätze"
  },
  {
    "de": "Wir gehen mit Ihnen.",
    "lv": "Idziemy z panem.",
    "level": "Sätze"
  },
  {
    "de": "Ich fahre mit der Eisenbahn.",
    "lv": "Jadę pociągiem.",
    "level": "Sätze"
  },
  {
    "de": "am Mittwoch",
    "lv": "w środę",
    "level": "Sätze"
  },
  {
    "de": "Es mag sein.",
    "lv": "Być może.",
    "level": "Sätze"
  },
  {
    "de": "Ich mag das nicht.",
    "lv": "Nie lubię tego.",
    "level": "Sätze"
  },
  {
    "de": "am Montag",
    "lv": "w poniedziałek",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen!",
    "lv": "Dzień dobry!",
    "level": "Sätze"
  },
  {
    "de": "am Morgen",
    "lv": "rano",
    "level": "Sätze"
  },
  {
    "de": "Gute Nacht!",
    "lv": "Dobranoc!",
    "level": "Sätze"
  },
  {
    "de": "Nehmen Sie Platz!",
    "lv": "Proszę usiąść!",
    "level": "Sätze"
  },
  {
    "de": "Letzte Neuheit!",
    "lv": "Ostatnia nowość!",
    "level": "Sätze"
  },
  {
    "de": "Nicht wahr?",
    "lv": "Prawda?",
    "level": "Sätze"
  },
  {
    "de": "Nicht doch!",
    "lv": "Ależ nie! • Nie trzeba!",
    "level": "Sätze"
  },
  {
    "de": "Nun endlich!",
    "lv": "No wreszcie!",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das?",
    "lv": "Na co się to przyda?",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das alles?",
    "lv": "Po co to wszystko?",
    "level": "Sätze"
  },
  {
    "de": "Parken verboten!",
    "lv": "Zakaz parkowania!",
    "level": "Sätze"
  },
  {
    "de": "Nicht parken!",
    "lv": "Nie parkować!",
    "level": "Sätze"
  },
  {
    "de": "Er hat Recht.",
    "lv": "Ma rację.",
    "level": "Sätze"
  },
  {
    "de": "Wovon ist die Rede?",
    "lv": "O czym mowa?",
    "level": "Sätze"
  },
  {
    "de": "Davon kann keine Rede sein.",
    "lv": "Nie ma o tym mowy.",
    "level": "Sätze"
  },
  {
    "de": "Glückliche Reise!",
    "lv": "Szczęśliwej podróży!",
    "level": "Sätze"
  },
  {
    "de": "Mir reißt die Geduld.",
    "lv": "Kończy mi się cierpliwość.",
    "level": "Sätze"
  },
  {
    "de": "Man sagt, dass...",
    "lv": "Mówi się, że...",
    "level": "Sätze"
  },
  {
    "de": "Schon gut!",
    "lv": "Już dobrze!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön!",
    "lv": "Proszę bardzo!",
    "level": "Sätze"
  },
  {
    "de": "Was bin ich schuldig?",
    "lv": "Ile jestem winien? • Ile płacę?",
    "level": "Sätze"
  },
  {
    "de": "Vor dem Gebrauch schütteln!",
    "lv": "Przed użyciem wstrząsnąć!",
    "level": "Sätze"
  },
  {
    "de": "Sehen Sie mal!",
    "lv": "Proszę spojrzeć!",
    "level": "Sätze"
  },
  {
    "de": "Wie sehr auch...",
    "lv": "Choćby nie wiem jak bardzo...",
    "level": "Sätze"
  },
  {
    "de": "Seit wann?",
    "lv": "Od kiedy?",
    "level": "Sätze"
  },
  {
    "de": "Was soll ich tun?",
    "lv": "Co mam robić?",
    "level": "Sätze"
  },
  {
    "de": "im Sommer",
    "lv": "latem",
    "level": "Sätze"
  },
  {
    "de": "Nicht nur..., sondern auch...",
    "lv": "Nie tylko..., ale także...",
    "level": "Sätze"
  },
  {
    "de": "Sonst noch etwas?",
    "lv": "Coś jeszcze?",
    "level": "Sätze"
  },
  {
    "de": "Spaß beiseite!",
    "lv": "Bez żartów! • Żarty na bok!",
    "level": "Sätze"
  },
  {
    "de": "Wie spät ist es?",
    "lv": "Która godzina?",
    "level": "Sätze"
  },
  {
    "de": "Durchfahrt gesperrt!",
    "lv": "Przejazd zabroniony!",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie deutsch?",
    "lv": "Czy mówi pan po niemiecku?",
    "level": "Sätze"
  },
  {
    "de": "Statt zu...",
    "lv": "Zamiast...",
    "level": "Sätze"
  },
  {
    "de": "Wie steht’s?",
    "lv": "Co słychać?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Hut steht ihr gut.",
    "lv": "Jest jej do twarzy w tym kapeluszu.",
    "level": "Sätze"
  },
  {
    "de": "Guten Tag!",
    "lv": "Dzień dobry!",
    "level": "Sätze"
  },
  {
    "de": "Wo treffen wir uns?",
    "lv": "Gdzie się spotkamy?",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie näher!",
    "lv": "Proszę podejść bliżej!",
    "level": "Sätze"
  },
  {
    "de": "Ehrlichkeit ist eine Tugend.",
    "lv": "Uczciwość jest cnotą.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe viel zu tun.",
    "lv": "Mam dużo do zrobienia.",
    "level": "Sätze"
  },
  {
    "de": "Nicht übel!",
    "lv": "Nieźle!",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt über mir.",
    "lv": "Mieszka nade mną.",
    "level": "Sätze"
  },
  {
    "de": "Er ist davon überzeugt.",
    "lv": "Jest o tym przekonany.",
    "level": "Sätze"
  },
  {
    "de": "So ist es üblich.",
    "lv": "Tak się przyjęło.",
    "level": "Sätze"
  },
  {
    "de": "Deine Uhr geht nach.",
    "lv": "Twój zegarek się spóźnia.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel Uhr ist es?",
    "lv": "Która jest godzina?",
    "level": "Sätze"
  },
  {
    "de": "Um acht Uhr früh.",
    "lv": "O ósmej rano.",
    "level": "Sätze"
  },
  {
    "de": "umso mehr",
    "lv": "tym bardziej",
    "level": "Sätze"
  },
  {
    "de": "Rechts um!",
    "lv": "W prawo zwrot!",
    "level": "Sätze"
  },
  {
    "de": "Und ob!",
    "lv": "I to jak!",
    "level": "Sätze"
  },
  {
    "de": "und zwar",
    "lv": "a mianowicie",
    "level": "Sätze"
  },
  {
    "de": "Auf Unkosten von...",
    "lv": "Na koszt... • Kosztem...",
    "level": "Sätze"
  },
  {
    "de": "Er saß unter den Zuschauern.",
    "lv": "Siedział wśród widzów.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ursache!",
    "lv": "Nie ma za co!",
    "level": "Sätze"
  },
  {
    "de": "Es geschah, wie verabredet.",
    "lv": "Stało się tak, jak ustalono.",
    "level": "Sätze"
  },
  {
    "de": "Rauchen verboten!",
    "lv": "Zakaz palenia!",
    "level": "Sätze"
  },
  {
    "de": "Falsch verbunden!",
    "lv": "Pomyłka!",
    "level": "Sätze"
  },
  {
    "de": "Eintritt verboten!",
    "lv": "Wstęp wzbroniony!",
    "level": "Sätze"
  },
  {
    "de": "Verstehen Sie mich?",
    "lv": "Czy rozumie mnie pan?",
    "level": "Sätze"
  },
  {
    "de": "Er versteht nichts davon.",
    "lv": "Nic się na tym nie zna.",
    "level": "Sätze"
  },
  {
    "de": "Seine Ansicht vertreten.",
    "lv": "Bronić swojego zdania.",
    "level": "Sätze"
  },
  {
    "de": "Streit verursachen.",
    "lv": "Wywołać kłótnię.",
    "level": "Sätze"
  },
  {
    "de": "Viel besser.",
    "lv": "Dużo lepiej.",
    "level": "Sätze"
  },
  {
    "de": "Zu viel.",
    "lv": "Za dużo.",
    "level": "Sätze"
  },
  {
    "de": "Vom Hörensagen.",
    "lv": "Ze słyszenia.",
    "level": "Sätze"
  },
  {
    "de": "Von Zeit zu Zeit.",
    "lv": "Od czasu do czasu.",
    "level": "Sätze"
  },
  {
    "de": "Von Beruf.",
    "lv": "Z zawodu.",
    "level": "Sätze"
  },
  {
    "de": "Er ist Berliner von Geburt.",
    "lv": "Z urodzenia jest Berlińczykiem.",
    "level": "Sätze"
  },
  {
    "de": "Er steht vor dem Fenster.",
    "lv": "Stoi przed oknem.",
    "level": "Sätze"
  },
  {
    "de": "Vor Sonnenaufgang.",
    "lv": "Przed wschodem słońca.",
    "level": "Sätze"
  },
  {
    "de": "Vor vierzehn Tagen.",
    "lv": "Dwa tygodnie temu.",
    "level": "Sätze"
  },
  {
    "de": "Vor Freude.",
    "lv": "Z radości.",
    "level": "Sätze"
  },
  {
    "de": "Vor allem.",
    "lv": "Przede wszystkim.",
    "level": "Sätze"
  },
  {
    "de": "Im Voraus.",
    "lv": "Z góry.",
    "level": "Sätze"
  },
  {
    "de": "Unter der Voraussetzung, dass...",
    "lv": "Przy założeniu, że...",
    "level": "Sätze"
  },
  {
    "de": "Unter dem Vorbehalt.",
    "lv": "Z zastrzeżeniem.",
    "level": "Sätze"
  },
  {
    "de": "Vorhanden sein.",
    "lv": "Być dostępnym. • Istnieć.",
    "level": "Sätze"
  },
  {
    "de": "In der vorigen Woche.",
    "lv": "W zeszłym tygodniu.",
    "level": "Sätze"
  },
  {
    "de": "Vorkehrungen treffen.",
    "lv": "Podjąć środki ostrożności.",
    "level": "Sätze"
  },
  {
    "de": "Sie kommt mir bekannt vor.",
    "lv": "Wydaje mi się znajoma.",
    "level": "Sätze"
  },
  {
    "de": "Er hat Vorliebe für Literatur.",
    "lv": "Ma zamiłowanie do literatury.",
    "level": "Sätze"
  },
  {
    "de": "Heute Vormittag.",
    "lv": "Dziś rano. • Dziś przed południem.",
    "level": "Sätze"
  },
  {
    "de": "Von vorn.",
    "lv": "Od przodu. • Od początku.",
    "level": "Sätze"
  },
  {
    "de": "Nach vorn.",
    "lv": "Do przodu.",
    "level": "Sätze"
  },
  {
    "de": "Von vornherein.",
    "lv": "Od samego początku.",
    "level": "Sätze"
  },
  {
    "de": "Im Vorteil sein.",
    "lv": "Mieć przewagę.",
    "level": "Sätze"
  },
  {
    "de": "Wach sein.",
    "lv": "Nie spać.",
    "level": "Sätze"
  },
  {
    "de": "Wach werden.",
    "lv": "Obudzić się.",
    "level": "Sätze"
  },
  {
    "de": "Auf Wache sein.",
    "lv": "Stać na warcie.",
    "level": "Sätze"
  },
  {
    "de": "Während eines Jahres.",
    "lv": "W ciągu roku.",
    "level": "Sätze"
  },
  {
    "de": "Während des Krieges.",
    "lv": "Podczas wojny.",
    "level": "Sätze"
  },
  {
    "de": "Gegen eine Wand reden.",
    "lv": "Mówić jak do ściany.",
    "level": "Sätze"
  },
  {
    "de": "Hier haben die Wände Ohren.",
    "lv": "Tu ściany mają uszy.",
    "level": "Sätze"
  },
  {
    "de": "Bis wann?",
    "lv": "Do kiedy?",
    "level": "Sätze"
  },
  {
    "de": "Es ist warm.",
    "lv": "Jest ciepło.",
    "level": "Sätze"
  },
  {
    "de": "Auf eine Nachricht warten.",
    "lv": "Czekać na wiadomość.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie?",
    "lv": "Czego pan chce?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein...?",
    "lv": "Jaki...? • Co to za...?",
    "level": "Sätze"
  },
  {
    "de": "Auf halbem Wege.",
    "lv": "W połowie drogi.",
    "level": "Sätze"
  },
  {
    "de": "Auf diesem Wege.",
    "lv": "Tą drogą. • W ten sposób.",
    "level": "Sätze"
  },
  {
    "de": "Auf friedlichem Wege.",
    "lv": "Na drodze pokojowej.",
    "level": "Sätze"
  },
  {
    "de": "Unserer Freundschaft wegen.",
    "lv": "Przez wzgląd na naszą przyjaźń.",
    "level": "Sätze"
  },
  {
    "de": "Von Rechts wegen.",
    "lv": "Zgodnie z prawem. • Po sprawiedliwości.",
    "level": "Sätze"
  },
  {
    "de": "Weh tun.",
    "lv": "Boleć.",
    "level": "Sätze"
  },
  {
    "de": "Zu Weihnachten.",
    "lv": "Na Boże Narodzenie.",
    "level": "Sätze"
  },
  {
    "de": "Auf welche Weise?",
    "lv": "W jaki sposób?",
    "level": "Sätze"
  },
  {
    "de": "Art und Weise.",
    "lv": "Sposób.",
    "level": "Sätze"
  },
  {
    "de": "Ohne weiteres.",
    "lv": "Bez wahania. • Bez trudu.",
    "level": "Sätze"
  },
  {
    "de": "Bis auf weiteres.",
    "lv": "Do odwołania.",
    "level": "Sätze"
  },
  {
    "de": "Und so weiter.",
    "lv": "I tak dalej.",
    "level": "Sätze"
  },
  {
    "de": "Weiter nichts.",
    "lv": "Nic więcej.",
    "level": "Sätze"
  },
  {
    "de": "An welchem Tag?",
    "lv": "Którego dnia?",
    "level": "Sätze"
  },
  {
    "de": "Alle Welt.",
    "lv": "Cały świat. • Wszyscy.",
    "level": "Sätze"
  },
  {
    "de": "In wenigen Tagen.",
    "lv": "Za kilka dni.",
    "level": "Sätze"
  },
  {
    "de": "Zu wenig.",
    "lv": "Za mało.",
    "level": "Sätze"
  },
  {
    "de": "Wenn auch.",
    "lv": "Chociaż.",
    "level": "Sätze"
  },
  {
    "de": "Wer da?",
    "lv": "Kto tam?",
    "level": "Sätze"
  },
  {
    "de": "Gesammelte Werke von Schiller.",
    "lv": "Dzieła zebrane Schillera.",
    "level": "Sätze"
  },
  {
    "de": "Ausgewählte Werke.",
    "lv": "Dzieła wybrane.",
    "level": "Sätze"
  },
  {
    "de": "Er ist wert, dass...",
    "lv": "Zasługuje na to, żeby...",
    "level": "Sätze"
  },
  {
    "de": "Es ist zwei Euro wert.",
    "lv": "To jest warte dwa euro.",
    "level": "Sätze"
  },
  {
    "de": "Nach Westen.",
    "lv": "Na zachód.",
    "level": "Sätze"
  },
  {
    "de": "Von Westen.",
    "lv": "Z zachodu.",
    "level": "Sätze"
  },
  {
    "de": "In Wettbewerb treten.",
    "lv": "Przystąpić do rywalizacji.",
    "level": "Sätze"
  },
  {
    "de": "Um die Wette laufen.",
    "lv": "Biec na wyścigi.",
    "level": "Sätze"
  },
  {
    "de": "Was gilt die Wette?",
    "lv": "O co się zakładamy?",
    "level": "Sätze"
  },
  {
    "de": "Wie wird das Wetter?",
    "lv": "Jaka będzie pogoda?",
    "level": "Sätze"
  },
  {
    "de": "Wettkampf im Turnen.",
    "lv": "Zawody gimnastyczne.",
    "level": "Sätze"
  },
  {
    "de": "Wider meinen Willen.",
    "lv": "Wbrew mojej woli.",
    "level": "Sätze"
  },
  {
    "de": "Widerspruch erheben.",
    "lv": "Zaprotestować. • Zgłosić sprzeciw.",
    "level": "Sätze"
  },
  {
    "de": "Wie alt ist er?",
    "lv": "Ile on ma lat?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange?",
    "lv": "Jak długo?",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiederhören!",
    "lv": "Do usłyszenia!",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiedersehen!",
    "lv": "Do widzenia!",
    "level": "Sätze"
  },
  {
    "de": "Wilde Tiere.",
    "lv": "Dzikie zwierzęta.",
    "level": "Sätze"
  },
  {
    "de": "Herzlich willkommen!",
    "lv": "Serdecznie witamy!",
    "level": "Sätze"
  },
  {
    "de": "Du musst ziehen.",
    "lv": "Twój ruch.",
    "level": "Sätze"
  },
  {
    "de": "Es zieht.",
    "lv": "Jest przeciąg.",
    "level": "Sätze"
  },
  {
    "de": "Ziemlich kalt.",
    "lv": "Dość zimno.",
    "level": "Sätze"
  },
  {
    "de": "Zipfel einer Wurst.",
    "lv": "Końcówka kiełbasy.",
    "level": "Sätze"
  },
  {
    "de": "Zu ihm gehen.",
    "lv": "Iść do niego.",
    "level": "Sätze"
  },
  {
    "de": "Zur Schule gehen.",
    "lv": "Chodzić do szkoły.",
    "level": "Sätze"
  },
  {
    "de": "Zu Hause bleiben.",
    "lv": "Zostać w domu.",
    "level": "Sätze"
  },
  {
    "de": "Von Tag zu Tag.",
    "lv": "Z dnia na dzień.",
    "level": "Sätze"
  },
  {
    "de": "Zum Glück.",
    "lv": "Na szczęście.",
    "level": "Sätze"
  },
  {
    "de": "Wasser zum Trinken.",
    "lv": "Woda do picia.",
    "level": "Sätze"
  },
  {
    "de": "Zu Fuß.",
    "lv": "Pieszo.",
    "level": "Sätze"
  },
  {
    "de": "Zu Pferde.",
    "lv": "Konno.",
    "level": "Sätze"
  },
  {
    "de": "Zu Rad.",
    "lv": "Rowerem.",
    "level": "Sätze"
  },
  {
    "de": "Es hörte auf zu regnen.",
    "lv": "Przestało padać.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe noch viel zu tun.",
    "lv": "Mam jeszcze dużo do zrobienia.",
    "level": "Sätze"
  },
  {
    "de": "Zu früh.",
    "lv": "Za wcześnie.",
    "level": "Sätze"
  },
  {
    "de": "Zu groß.",
    "lv": "Za duży.",
    "level": "Sätze"
  },
  {
    "de": "Mit den Achseln zucken.",
    "lv": "Wzruszyć ramionami.",
    "level": "Sätze"
  },
  {
    "de": "In einem Zug trinken.",
    "lv": "Wypić jednym haustem.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde gehen.",
    "lv": "Zginąć.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde legen.",
    "lv": "Przyjąć za podstawę.",
    "level": "Sätze"
  },
  {
    "de": "Zum ersten Mal.",
    "lv": "Po raz pierwszy.",
    "level": "Sätze"
  },
  {
    "de": "Machen Sie bitte die Tür zu!",
    "lv": "Proszę zamknąć drzwi!",
    "level": "Sätze"
  },
  {
    "de": "Er hat zugenommen.",
    "lv": "Przytył.",
    "level": "Sätze"
  },
  {
    "de": "Die Tage nehmen zu.",
    "lv": "Dni się wydłużają.",
    "level": "Sätze"
  },
  {
    "de": "Zusammenhängen mit etwas.",
    "lv": "Wiązać się z czymś.",
    "level": "Sätze"
  },
  {
    "de": "Die Tür ist zu.",
    "lv": "Drzwi są zamknięte.",
    "level": "Sätze"
  },
  {
    "de": "Das hätte ich ihm nicht zugetraut.",
    "lv": "Nie spodziewałbym się tego po nim.",
    "level": "Sätze"
  },
  {
    "de": "Freier Zutritt.",
    "lv": "Wstęp wolny.",
    "level": "Sätze"
  },
  {
    "de": "Zutritt verboten!",
    "lv": "Wstęp wzbroniony!",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu viel!",
    "lv": "To za dużo!",
    "level": "Sätze"
  },
  {
    "de": "Zuwider werden.",
    "lv": "Stać się wstrętnym. • Obrzydnąć.",
    "level": "Sätze"
  },
  {
    "de": "Und zwar.",
    "lv": "A mianowicie.",
    "level": "Sätze"
  },
  {
    "de": "Es steht außer Zweifel.",
    "lv": "Nie ulega wątpliwości.",
    "level": "Sätze"
  },
  {
    "de": "Ohne Zweifel.",
    "lv": "Bez wątpienia.",
    "level": "Sätze"
  },
  {
    "de": "Zum Zweiten.",
    "lv": "Po drugie.",
    "level": "Sätze"
  },
  {
    "de": "Frohes neues Jahr!",
    "lv": "Szczęśliwego Nowego Roku!",
    "level": "Sätze"
  },
  {
    "de": "Herzlichen Glückwunsch zum Geburtstag!",
    "lv": "Wszystkiego najlepszego z okazji urodzin!",
    "level": "Sätze"
  },
  {
    "de": "Gute Reise!",
    "lv": "Szczęśliwej podróży!",
    "level": "Sätze"
  },
  {
    "de": "Es freut mich, Sie kennenzulernen.",
    "lv": "Miło mi pana poznać.",
    "level": "Sätze"
  },
  {
    "de": "Wären Sie bitte so nett?",
    "lv": "Czy byłby pan tak uprzejmy?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin Ihnen sehr dankbar.",
    "lv": "Jestem panu bardzo wdzięczny.",
    "level": "Sätze"
  },
  {
    "de": "Setzt euch bitte hin!",
    "lv": "Usiądźcie, proszę!",
    "level": "Sätze"
  },
  {
    "de": "Ben, komm bitte an die Tafel!",
    "lv": "Benie, podejdź, proszę, do tablicy!",
    "level": "Sätze"
  },
  {
    "de": "Schlagt bitte die Lehrbücher auf!",
    "lv": "Otwórzcie, proszę, podręczniki!",
    "level": "Sätze"
  },
  {
    "de": "Geht bitte in die Sporthalle!",
    "lv": "Idźcie, proszę, do sali gimnastycznej!",
    "level": "Sätze"
  },
  {
    "de": "Schläfst du noch?",
    "lv": "Jeszcze śpisz?",
    "level": "Sätze"
  },
  {
    "de": "Schlafen Sie noch?",
    "lv": "Czy pan jeszcze śpi?",
    "level": "Sätze"
  },
  {
    "de": "Er ist fest eingeschlafen.",
    "lv": "Twardo zasnął.",
    "level": "Sätze"
  },
  {
    "de": "Wecke ihn bitte auf, es ist schon spät!",
    "lv": "Obudź go, proszę, jest już późno!",
    "level": "Sätze"
  },
  {
    "de": "Es tut mir sehr leid!",
    "lv": "Bardzo mi przykro!",
    "level": "Sätze"
  },
  {
    "de": "Vielen Dank!",
    "lv": "Bardzo dziękuję!",
    "level": "Sätze"
  },
  {
    "de": "Finn, fang bitte an!",
    "lv": "Finnie, zacznij, proszę!",
    "level": "Sätze"
  },
  {
    "de": "Lest bitte mit!",
    "lv": "Czytajcie, proszę, razem z nami!",
    "level": "Sätze"
  },
  {
    "de": "Emma, schau bitte nicht aus dem Fenster!",
    "lv": "Emmo, nie wyglądaj, proszę, przez okno!",
    "level": "Sätze"
  },
  {
    "de": "Jonas, bring bitte die Hefte!",
    "lv": "Jonasie, przynieś, proszę, zeszyty!",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte zurück an deinen Platz!",
    "lv": "Wróć, proszę, na swoje miejsce!",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb acht.",
    "lv": "Jest wpół do ósmej.",
    "level": "Sätze"
  },
  {
    "de": "Wann wachst du gewöhnlich auf?",
    "lv": "Kiedy zwykle się budzisz?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe gleich auf.",
    "lv": "Zaraz wstanę.",
    "level": "Sätze"
  },
  {
    "de": "Steh auf, Hanna, es klingelt!",
    "lv": "Wstawaj, Hanno, dzwoni!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich noch fünf Minuten schlafen!",
    "lv": "Daj mi pospać jeszcze pięć minut!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss nicht, das Zimmer zu lüften!",
    "lv": "Nie zapomnij przewietrzyć pokoju!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist das Handtuch?",
    "lv": "Gdzie jest ręcznik?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mir die Zähne putzen.",
    "lv": "Chciałbym umyć zęby.",
    "level": "Sätze"
  },
  {
    "de": "Mit was putzt du dir die Zähne?",
    "lv": "Czym myjesz zęby?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mich anziehen.",
    "lv": "Chciałbym się ubrać.",
    "level": "Sätze"
  },
  {
    "de": "Zieh dich bitte schnell an!",
    "lv": "Ubierz się, proszę, szybko!",
    "level": "Sätze"
  },
  {
    "de": "Kleide dich wärmer an, draußen ist es kühl.",
    "lv": "Ubierz się cieplej, na dworze jest chłodno.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, wie geht es dir?",
    "lv": "Dzień dobry, jak się masz?",
    "level": "Sätze"
  },
  {
    "de": "Mir geht es gut, danke.",
    "lv": "Mam się dobrze, dziękuję.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es Neues?",
    "lv": "Co nowego?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein Chaos hier!",
    "lv": "Co tu za chaos!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich beim Aufräumen helfen?",
    "lv": "Czy mogę pomóc w sprzątaniu?",
    "level": "Sätze"
  },
  {
    "de": "Was trinkst du morgens, Kaffee oder Tee?",
    "lv": "Co pijesz rano, kawę czy herbatę?",
    "level": "Sätze"
  },
  {
    "de": "Gewöhnlich trinke ich morgens eine Tasse Kaffee.",
    "lv": "Zwykle rano piję filiżankę kawy.",
    "level": "Sätze"
  },
  {
    "de": "Am liebsten trinke ich schwarzen Kaffee.",
    "lv": "Najchętniej piję czarną kawę.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, hast du gut geschlafen?",
    "lv": "Dzień dobry, dobrze spałeś?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin noch sehr müde.",
    "lv": "Nadal jestem bardzo zmęczony.",
    "level": "Sätze"
  },
  {
    "de": "Willst du Kaffee oder Milch?",
    "lv": "Chcesz kawy czy mleka?",
    "level": "Sätze"
  },
  {
    "de": "Gib mir bitte ein Brötchen mit Käse.",
    "lv": "Daj mi, proszę, bułkę z serem.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss jetzt los!",
    "lv": "Muszę już iść!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss dein Frühstück nicht!",
    "lv": "Nie zapomnij o śniadaniu!",
    "level": "Sätze"
  },
  {
    "de": "Klara, deck bitte den Tisch!",
    "lv": "Klaro, nakryj, proszę, do stołu!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss die Servietten nicht!",
    "lv": "Nie zapomnij o serwetkach!",
    "level": "Sätze"
  },
  {
    "de": "Wann esst ihr zu Mittag?",
    "lv": "Kiedy jecie obiad?",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit zu essen.",
    "lv": "Czas jeść.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es heute zu Mittag?",
    "lv": "Co jest dzisiaj na obiad?",
    "level": "Sätze"
  },
  {
    "de": "Wie schmeckt dir die Suppe?",
    "lv": "Jak ci smakuje zupa?",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt ist sie etwas zu salzig.",
    "lv": "Szczerze mówiąc, jest trochę za słona.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dir ein Stück Brot geben?",
    "lv": "Czy mogę ci podać kawałek chleba?",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich habe schon.",
    "lv": "Dziękuję, już mam.",
    "level": "Sätze"
  },
  {
    "de": "Das Fleisch schmeckt ausgezeichnet.",
    "lv": "Mięso smakuje wyśmienicie.",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich bin schon satt.",
    "lv": "Dziękuję, jestem już najedzony.",
    "level": "Sätze"
  },
  {
    "de": "Heute haben wir Besuch.",
    "lv": "Dziś mamy gości.",
    "level": "Sätze"
  },
  {
    "de": "Bist du heute Abend frei?",
    "lv": "Jesteś dziś wieczorem wolny?",
    "level": "Sätze"
  },
  {
    "de": "Komm doch heute zum Mittagessen vorbei!",
    "lv": "Wpadnij dziś na obiad!",
    "level": "Sätze"
  },
  {
    "de": "Setzen wir uns an den Tisch.",
    "lv": "Usiądźmy do stołu.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, bedien dich!",
    "lv": "Proszę, częstuj się!",
    "level": "Sätze"
  },
  {
    "de": "Stört dich das Rauchen?",
    "lv": "Czy przeszkadza ci palenie?",
    "level": "Sätze"
  },
  {
    "de": "Danke für die nette Aufnahme!",
    "lv": "Dziękuję za miłe przyjęcie!",
    "level": "Sätze"
  },
  {
    "de": "Wann gehst du ins Bett?",
    "lv": "Kiedy chodzisz spać?",
    "level": "Sätze"
  },
  {
    "de": "Wenn ich von der Arbeit komme, bin ich immer müde.",
    "lv": "Kiedy wracam z pracy, zawsze jestem zmęczony.",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, ins Bett zu gehen.",
    "lv": "Czas iść spać.",
    "level": "Sätze"
  },
  {
    "de": "Es ist schönes Wetter.",
    "lv": "Jest piękna pogoda.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mit mir spazieren gehen?",
    "lv": "Pójdziesz ze mną na spacer?",
    "level": "Sätze"
  },
  {
    "de": "Sieh mal, es wird gleich regnen.",
    "lv": "Popatrz, zaraz zacznie padać.",
    "level": "Sätze"
  },
  {
    "de": "Nimm den Regenschirm mit!",
    "lv": "Weź ze sobą parasol!",
    "level": "Sätze"
  },
  {
    "de": "Es regnet.",
    "lv": "Pada deszcz.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin schon ganz nass.",
    "lv": "Jestem już cały mokry.",
    "level": "Sätze"
  },
  {
    "de": "Glaubst du, dass es den ganzen Tag regnen wird?",
    "lv": "Myślisz, że będzie padać cały dzień?",
    "level": "Sätze"
  },
  {
    "de": "Es hört auf zu regnen.",
    "lv": "Przestaje padać.",
    "level": "Sätze"
  },
  {
    "de": "Die Sonne scheint wieder.",
    "lv": "Znowu świeci słońce.",
    "level": "Sätze"
  },
  {
    "de": "Es ist sehr warm.",
    "lv": "Jest bardzo ciepło.",
    "level": "Sätze"
  },
  {
    "de": "Es sieht nach Regen aus.",
    "lv": "Zanosi się na deszcz.",
    "level": "Sätze"
  },
  {
    "de": "Wir bekommen gleich ein Gewitter.",
    "lv": "Zaraz będzie burza.",
    "level": "Sätze"
  },
  {
    "de": "Das Gewitter zieht vorüber.",
    "lv": "Burza przechodzi.",
    "level": "Sätze"
  },
  {
    "de": "Die Wolken verziehen sich.",
    "lv": "Chmury się rozchodzą.",
    "level": "Sätze"
  },
  {
    "de": "Siehst du den Regenbogen?",
    "lv": "Widzisz tęczę?",
    "level": "Sätze"
  },
  {
    "de": "Der Winter ist da, es hat geschneit.",
    "lv": "Przyszła zima, spadł śnieg.",
    "level": "Sätze"
  },
  {
    "de": "Es schneit.",
    "lv": "Pada śnieg.",
    "level": "Sätze"
  },
  {
    "de": "Wie schön ist es im Wald im Winter!",
    "lv": "Jak pięknie jest zimą w lesie!",
    "level": "Sätze"
  },
  {
    "de": "Mir ist kalt, ich friere.",
    "lv": "Zimno mi, marznę.",
    "level": "Sätze"
  },
  {
    "de": "Draußen ist Glatteis, pass auf!",
    "lv": "Na dworze jest gołoledź, uważaj!",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir auf die Eisbahn gehen?",
    "lv": "Pójdziemy na lodowisko?",
    "level": "Sätze"
  },
  {
    "de": "Zieh die Jacke an, du kannst dich erkälten.",
    "lv": "Włóż kurtkę, bo możesz się przeziębić.",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb sieben.",
    "lv": "Jest wpół do siódmej.",
    "level": "Sätze"
  },
  {
    "de": "Meine Uhr geht fünf Minuten vor.",
    "lv": "Mój zegarek spieszy się o pięć minut.",
    "level": "Sätze"
  },
  {
    "de": "Weck mich morgen früh um sieben Uhr!",
    "lv": "Obudź mnie jutro rano o siódmej!",
    "level": "Sätze"
  },
  {
    "de": "Was ist heute für ein Datum?",
    "lv": "Jaka jest dziś data?",
    "level": "Sätze"
  },
  {
    "de": "Heute ist der elfte Juli.",
    "lv": "Dziś jest jedenasty lipca.",
    "level": "Sätze"
  },
  {
    "de": "Was machst du gewöhnlich am Abend?",
    "lv": "Co zwykle robisz wieczorem?",
    "level": "Sätze"
  },
  {
    "de": "Es ist schon lange her, dass wir uns gesehen haben.",
    "lv": "Dawno się nie widzieliśmy.",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es dir?",
    "lv": "Jak się masz?",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, ich möchte etwas mit dir besprechen.",
    "lv": "Przepraszam, chciałbym coś z tobą omówić.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir spazieren!",
    "lv": "Chodźmy na spacer!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Lust, mit mir in den Park zu gehen?",
    "lv": "Masz ochotę pójść ze mną do parku?",
    "level": "Sätze"
  },
  {
    "de": "Ich komme, um dich zum Spaziergang abzuholen.",
    "lv": "Przychodzę, żeby zabrać cię na spacer.",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte etwas langsamer, ich kann dir nicht folgen!",
    "lv": "Idź, proszę, trochę wolniej, nie nadążam za tobą!",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zum ersten Mal in dieser Gegend.",
    "lv": "Jestem w tej okolicy po raz pierwszy.",
    "level": "Sätze"
  },
  {
    "de": "Ruhen wir uns ein wenig aus.",
    "lv": "Odpocznijmy trochę.",
    "level": "Sätze"
  },
  {
    "de": "Jetzt können wir zurückgehen.",
    "lv": "Teraz możemy wracać.",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt bin ich ziemlich müde.",
    "lv": "Szczerze mówiąc, jestem dość zmęczony.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, wo ist die nächste U-Bahn-Station?",
    "lv": "Przepraszam, gdzie jest najbliższa stacja metra?",
    "level": "Sätze"
  },
  {
    "de": "Welcher ist der kürzeste Weg?",
    "lv": "Która droga jest najkrótsza?",
    "level": "Sätze"
  },
  {
    "de": "Geh hier die zweite Straße links und dann immer geradeaus.",
    "lv": "Skręć tu w drugą ulicę w lewo, a potem idź cały czas prosto.",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich am schnellsten zum Bahnhof?",
    "lv": "Którędy najszybciej dojdę na dworzec?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe vor, morgen zu verreisen.",
    "lv": "Zamierzam jutro wyjechać.",
    "level": "Sätze"
  },
  {
    "de": "Wohin willst du fahren?",
    "lv": "Dokąd chcesz jechać?",
    "level": "Sätze"
  },
  {
    "de": "Reist du geschäftlich oder privat?",
    "lv": "Podróżujesz służbowo czy prywatnie?",
    "level": "Sätze"
  },
  {
    "de": "Finn fährt bis Berlin mit, dann geht er ans Meer.",
    "lv": "Finn jedzie z nami do Berlina, potem pojedzie nad morze.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt das Schiff ab?",
    "lv": "Kiedy odpływa statek?",
    "level": "Sätze"
  },
  {
    "de": "In einer halben Stunde.",
    "lv": "Za pół godziny.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich noch eine Kabine bekommen?",
    "lv": "Czy mogę jeszcze dostać kabinę?",
    "level": "Sätze"
  },
  {
    "de": "Vergiss deinen Pass nicht!",
    "lv": "Nie zapomnij paszportu!",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, den Koffer zu packen.",
    "lv": "Czas spakować walizkę.",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt um halb sieben ab.",
    "lv": "Pociąg odjeżdża o wpół do siódmej.",
    "level": "Sätze"
  },
  {
    "de": "Hol mir bitte ein Taxi, ich verpasse sonst den Zug!",
    "lv": "Zamów mi, proszę, taksówkę, bo inaczej spóźnię się na pociąg!",
    "level": "Sätze"
  },
  {
    "de": "Fahr bitte zum Bahnhof!",
    "lv": "Jedź, proszę, na dworzec!",
    "level": "Sätze"
  },
  {
    "de": "Ich muss mich beeilen.",
    "lv": "Muszę się spieszyć.",
    "level": "Sätze"
  },
  {
    "de": "Ist der Schalter schon offen?",
    "lv": "Czy kasa jest już otwarta?",
    "level": "Sätze"
  },
  {
    "de": "Eine Fahrkarte nach Köln, bitte.",
    "lv": "Jeden bilet do Kolonii, proszę.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt der Zug ab?",
    "lv": "Kiedy odjeżdża pociąg?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt gleich ab.",
    "lv": "Pociąg zaraz odjeżdża.",
    "level": "Sätze"
  },
  {
    "de": "Muss ich in Koblenz umsteigen?",
    "lv": "Czy muszę się przesiąść w Koblencji?",
    "level": "Sätze"
  },
  {
    "de": "Ja, dort musst du umsteigen.",
    "lv": "Tak, tam musisz się przesiąść.",
    "level": "Sätze"
  },
  {
    "de": "Ist dieser Platz frei?",
    "lv": "Czy to miejsce jest wolne?",
    "level": "Sätze"
  },
  {
    "de": "Nein, hier sitzt niemand.",
    "lv": "Nie, nikt tu nie siedzi.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der Bahnsteigkartenautomat?",
    "lv": "Gdzie jest automat z biletami peronowymi?",
    "level": "Sätze"
  },
  {
    "de": "Stell mein Handgepäck ins Gepäcknetz.",
    "lv": "Połóż mój bagaż podręczny na półce bagażowej.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das Fenster aufmachen?",
    "lv": "Czy mogę otworzyć okno?",
    "level": "Sätze"
  },
  {
    "de": "Es zieht, schließ bitte das Fenster!",
    "lv": "Jest przeciąg, zamknij, proszę, okno!",
    "level": "Sätze"
  },
  {
    "de": "Welche ist die nächste Station?",
    "lv": "Jaka jest następna stacja?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange hält der Zug?",
    "lv": "Jak długo stoi pociąg?",
    "level": "Sätze"
  },
  {
    "de": "Wo muss ich umsteigen?",
    "lv": "Gdzie muszę się przesiąść?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug hat Verspätung.",
    "lv": "Pociąg ma opóźnienie.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Wagen ist für Nichtraucher.",
    "lv": "Ten wagon jest dla niepalących.",
    "level": "Sätze"
  },
  {
    "de": "Wir fahren jetzt über die Grenze.",
    "lv": "Teraz przejeżdżamy przez granicę.",
    "level": "Sätze"
  },
  {
    "de": "Hast du etwas zu verzollen?",
    "lv": "Czy masz coś do oclenia?",
    "level": "Sätze"
  },
  {
    "de": "Wir sind in Berlin angekommen.",
    "lv": "Przyjechaliśmy do Berlina.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir ein gutes Hotel empfehlen?",
    "lv": "Czy możesz polecić mi dobry hotel?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie freie Zimmer?",
    "lv": "Czy mają państwo wolne pokoje?",
    "level": "Sätze"
  },
  {
    "de": "Ein Zimmer mit zwei Betten, bitte.",
    "lv": "Pokój z dwoma łóżkami, proszę.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Zimmer pro Nacht?",
    "lv": "Ile kosztuje pokój za noc?",
    "level": "Sätze"
  },
  {
    "de": "Morgen reise ich ab. Weck mich um sieben Uhr!",
    "lv": "Jutro wyjeżdżam. Obudź mnie o siódmej!",
    "level": "Sätze"
  },
  {
    "de": "Die Rechnung, bitte!",
    "lv": "Rachunek, proszę!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Stadtbibliothek?",
    "lv": "Gdzie jest biblioteka miejska?",
    "level": "Sätze"
  },
  {
    "de": "Wann hat das Museum geöffnet?",
    "lv": "Kiedy muzeum jest otwarte?",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir ins Museum gehen?",
    "lv": "Pójdziemy do muzeum?",
    "level": "Sätze"
  },
  {
    "de": "Fahren wir mit dem Bus oder der U-Bahn?",
    "lv": "Jedziemy autobusem czy metrem?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die nächste Bushaltestelle?",
    "lv": "Gdzie jest najbliższy przystanek autobusowy?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe großen Hunger.",
    "lv": "Jestem bardzo głodny.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir zusammen essen?",
    "lv": "Pójdziemy razem coś zjeść?",
    "level": "Sätze"
  },
  {
    "de": "Kellner, die Speisekarte, bitte!",
    "lv": "Panie kelnerze, kartę, proszę!",
    "level": "Sätze"
  },
  {
    "de": "Ist der Fisch frisch?",
    "lv": "Czy ryba jest świeża?",
    "level": "Sätze"
  },
  {
    "de": "Das schmeckt ausgezeichnet!",
    "lv": "To smakuje wyśmienicie!",
    "level": "Sätze"
  },
  {
    "de": "Kellner, zahlen bitte!",
    "lv": "Panie kelnerze, proszę o rachunek!",
    "level": "Sätze"
  },
  {
    "de": "Ich gehe ins Café einen Kaffee trinken.",
    "lv": "Idę do kawiarni na kawę.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mitkommen?",
    "lv": "Chcesz pójść ze mną?",
    "level": "Sätze"
  },
  {
    "de": "Eine Tasse Kaffee mit Milch, bitte!",
    "lv": "Filiżankę kawy z mlekiem, proszę!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneller, ich habe es eilig!",
    "lv": "Szybciej, proszę, spieszę się!",
    "level": "Sätze"
  },
  {
    "de": "Lass deinen Kaffee nicht kalt werden!",
    "lv": "Nie pozwól, żeby ci kawa wystygła!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie etwas Erfrischendes?",
    "lv": "Czy ma pan coś orzeźwiającego?",
    "level": "Sätze"
  },
  {
    "de": "Eine Portion Eis, bitte!",
    "lv": "Porcję lodów, proszę!",
    "level": "Sätze"
  },
  {
    "de": "Heute Morgen habe ich einen Brief bekommen.",
    "lv": "Dziś rano dostałem list.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss ihm gleich schreiben.",
    "lv": "Muszę do niego zaraz napisać.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der nächste Briefkasten?",
    "lv": "Gdzie jest najbliższa skrzynka pocztowa?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Post?",
    "lv": "Gdzie jest poczta?",
    "level": "Sätze"
  },
  {
    "de": "Erinnere mich morgen daran zu schreiben!",
    "lv": "Przypomnij mi jutro, żebym napisał!",
    "level": "Sätze"
  },
  {
    "de": "Werfen Sie bitte diesen Brief in den Briefkasten.",
    "lv": "Proszę wrzucić ten list do skrzynki pocztowej.",
    "level": "Sätze"
  },
  {
    "de": "Hallo, hier spricht Emma.",
    "lv": "Halo, mówi Emma.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich dich später anrufen?",
    "lv": "Czy mogę do ciebie później zadzwonić?",
    "level": "Sätze"
  },
  {
    "de": "Muss ich lange warten?",
    "lv": "Czy muszę długo czekać?",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneiden Sie mir die Haare.",
    "lv": "Proszę mnie ostrzyc.",
    "level": "Sätze"
  },
  {
    "de": "Hinten bitte nicht zu kurz.",
    "lv": "Z tyłu, proszę, nie za krótko.",
    "level": "Sätze"
  },
  {
    "de": "Wann beginnt die Vorstellung?",
    "lv": "Kiedy zaczyna się przedstawienie?",
    "level": "Sätze"
  },
  {
    "de": "Es fängt um halb acht an.",
    "lv": "Zaczyna się o wpół do ósmej.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind ausverkauft.",
    "lv": "Wszystkie miejsca są wyprzedane.",
    "level": "Sätze"
  },
  {
    "de": "Drei Karten, bitte!",
    "lv": "Trzy bilety, proszę!",
    "level": "Sätze"
  },
  {
    "de": "Wir lassen die Jacken in der Garderobe.",
    "lv": "Zostawimy kurtki w szatni.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schnell, der Vorhang geht gleich auf!",
    "lv": "Szybko, proszę, kurtyna zaraz się podniesie!",
    "level": "Sätze"
  },
  {
    "de": "Der Vorhang fällt.",
    "lv": "Kurtyna opada.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dich zum Tanz bitten?",
    "lv": "Czy mogę cię prosić do tańca?",
    "level": "Sätze"
  },
  {
    "de": "Wann ist eure Hochzeit?",
    "lv": "Kiedy jest wasz ślub?",
    "level": "Sätze"
  },
  {
    "de": "Ich suche eine Wohnung.",
    "lv": "Szukam mieszkania.",
    "level": "Sätze"
  },
  {
    "de": "Ist in diesem Haus eine Wohnung frei?",
    "lv": "Czy w tym budynku jest wolne mieszkanie?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet die Miete?",
    "lv": "Ile wynosi czynsz?",
    "level": "Sätze"
  },
  {
    "de": "Die Wohnung hat drei Zimmer und eine Küche.",
    "lv": "Mieszkanie ma trzy pokoje i kuchnię.",
    "level": "Sätze"
  },
  {
    "de": "Heute ziehen wir um.",
    "lv": "Dziś się przeprowadzamy.",
    "level": "Sätze"
  },
  {
    "de": "Mia, pack die Sachen bitte in Kisten!",
    "lv": "Mio, spakuj, proszę, rzeczy do pudeł!",
    "level": "Sätze"
  },
  {
    "de": "Hast du alles eingepackt?",
    "lv": "Spakowałeś wszystko?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe mit meinem Freund in Kontakt.",
    "lv": "Utrzymuję kontakt ze swoim przyjacielem.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir ins Theater?",
    "lv": "Pójdziemy do teatru?",
    "level": "Sätze"
  },
  {
    "de": "Ist alles eingeladen?",
    "lv": "Czy wszystko jest załadowane?",
    "level": "Sätze"
  },
  {
    "de": "Welch schöne Aussicht!",
    "lv": "Jaki piękny widok!",
    "level": "Sätze"
  },
  {
    "de": "Nun können wir alles wieder aufräumen.",
    "lv": "Teraz możemy znowu wszystko uporządkować.",
    "level": "Sätze"
  },
  {
    "de": "Wie viele Zimmer habt ihr?",
    "lv": "Ile macie pokoi?",
    "level": "Sätze"
  },
  {
    "de": "Im Sommer fahre ich ans Meer.",
    "lv": "Latem pojadę nad morze.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du schwimmen?",
    "lv": "Umiesz pływać?",
    "level": "Sätze"
  },
  {
    "de": "Schwimm nicht zu weit hinaus!",
    "lv": "Nie odpływaj za daleko!",
    "level": "Sätze"
  },
  {
    "de": "Badest du jeden Tag?",
    "lv": "Czy codziennie się kąpiesz?",
    "level": "Sätze"
  },
  {
    "de": "Bei schönem Wetter gehe ich angeln.",
    "lv": "Kiedy jest ładna pogoda, chodzę na ryby.",
    "level": "Sätze"
  },
  {
    "de": "Wie sieht er aus?",
    "lv": "Jak on wygląda?",
    "level": "Sätze"
  },
  {
    "de": "Er hat sich aber recht verändert.",
    "lv": "Bardzo się jednak zmienił.",
    "level": "Sätze"
  },
  {
    "de": "Wie ist er als Mensch?",
    "lv": "Jaki jest jako człowiek?",
    "level": "Sätze"
  },
  {
    "de": "Er ist immer nett und freundlich.",
    "lv": "Zawsze jest miły i uprzejmy.",
    "level": "Sätze"
  },
  {
    "de": "Ich fühle mich nicht wohl.",
    "lv": "Nie czuję się dobrze.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe starke Kopfschmerzen.",
    "lv": "Mam silny ból głowy.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe mich erkältet.",
    "lv": "Przeziębiłem się.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Schnupfen.",
    "lv": "Mam katar.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist schwindlig.",
    "lv": "Kręci mi się w głowie.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Arzt gehen.",
    "lv": "Muszę iść do lekarza.",
    "level": "Sätze"
  },
  {
    "de": "Leg dich ins Bett!",
    "lv": "Połóż się do łóżka!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Fieber?",
    "lv": "Czy masz gorączkę?",
    "level": "Sätze"
  },
  {
    "de": "Gestern hatte ich erhöhte Temperatur.",
    "lv": "Wczoraj miałem podwyższoną temperaturę.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Zahnschmerzen.",
    "lv": "Boli mnie ząb.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Zahnarzt gehen.",
    "lv": "Muszę iść do dentysty.",
    "level": "Sätze"
  },
  {
    "de": "Weißt du, dass Finn krank ist?",
    "lv": "Wiesz, że Finn jest chory?",
    "level": "Sätze"
  },
  {
    "de": "Laut Arzt wird er bald wieder gesund.",
    "lv": "Według lekarza wkrótce znów będzie zdrowy.",
    "level": "Sätze"
  },
  {
    "de": "Ich will meine Wohnung neu möblieren.",
    "lv": "Chcę na nowo umeblować mieszkanie.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das auf Raten kaufen?",
    "lv": "Czy mogę to kupić na raty?",
    "level": "Sätze"
  },
  {
    "de": "Bleib im Bett, bis es dir besser geht!",
    "lv": "Zostań w łóżku, dopóki nie poczujesz się lepiej!",
    "level": "Sätze"
  },
  {
    "de": "Noah hat in zwei Wochen schwimmen gelernt.",
    "lv": "Noah nauczył się pływać w dwa tygodnie.",
    "level": "Sätze"
  },
  {
    "de": "Sei mit dem Essen noch vorsichtig.",
    "lv": "Bądź jeszcze ostrożny z jedzeniem.",
    "level": "Sätze"
  },
  {
    "de": "Sprichst du Deutsch?",
    "lv": "Mówisz po niemiecku?",
    "level": "Sätze"
  },
  {
    "de": "Ja, ein bisschen.",
    "lv": "Tak, trochę.",
    "level": "Sätze"
  },
  {
    "de": "Du sprichst ziemlich fließend.",
    "lv": "Mówisz całkiem płynnie.",
    "level": "Sätze"
  },
  {
    "de": "Wo hast du Deutsch gelernt?",
    "lv": "Gdzie nauczyłeś się niemieckiego?",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme seit einem Jahr Deutschstunden.",
    "lv": "Od roku chodzę na lekcje niemieckiego.",
    "level": "Sätze"
  },
  {
    "de": "Ich suche immer Gelegenheit, Deutsch zu sprechen.",
    "lv": "Zawsze szukam okazji, żeby mówić po niemiecku.",
    "level": "Sätze"
  },
  {
    "de": "Ist das Buch noch vorrätig?",
    "lv": "Czy ta książka jest jeszcze dostępna?",
    "level": "Sätze"
  },
  {
    "de": "Das Buch ist leider ausverkauft.",
    "lv": "Ta książka jest niestety wyprzedana.",
    "level": "Sätze"
  },
  {
    "de": "Wann erscheint die neue Auflage?",
    "lv": "Kiedy ukaże się nowe wydanie?",
    "level": "Sätze"
  },
  {
    "de": "Womit kann ich Ihnen helfen?",
    "lv": "W czym mogę panu pomóc?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie ganz frische Eier?",
    "lv": "Czy ma pan naprawdę świeże jajka?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die?",
    "lv": "Ile one kosztują?",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu teuer.",
    "lv": "To jest za drogie.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir ein halbes Kilo abwiegen?",
    "lv": "Czy może mi pan odważyć pół kilo?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel muss ich zahlen?",
    "lv": "Ile muszę zapłacić?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet das Kilo?",
    "lv": "Ile kosztuje kilogram?",
    "level": "Sätze"
  },
  {
    "de": "Wiegen Sie mir bitte zwei Kilo ab.",
    "lv": "Proszę mi odważyć dwa kilogramy.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch Karotten?",
    "lv": "Czy ma pan też marchewkę?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie gutes Rindfleisch?",
    "lv": "Czy ma pan dobrą wołowinę?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir zwei Kilo Hackfleisch.",
    "lv": "Proszę mi dać dwa kilogramy mięsa mielonego.",
    "level": "Sätze"
  },
  {
    "de": "Ein Laib Brot, bitte, aber nicht zu knusprig.",
    "lv": "Bochenek chleba, proszę, ale niezbyt chrupiący.",
    "level": "Sätze"
  },
  {
    "de": "Das Brot ist frisch gebacken.",
    "lv": "Chleb jest świeżo upieczony.",
    "level": "Sätze"
  },
  {
    "de": "Was für Obst haben Sie heute?",
    "lv": "Jakie owoce ma pan dzisiaj?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die Äpfel?",
    "lv": "Ile kosztują jabłka?",
    "level": "Sätze"
  },
  {
    "de": "Dann nehme ich zwei Kilo Äpfel.",
    "lv": "To wezmę dwa kilogramy jabłek.",
    "level": "Sätze"
  },
  {
    "de": "Die Birnen sind sehr teuer.",
    "lv": "Gruszki są bardzo drogie.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir alles nach Hause liefern?",
    "lv": "Czy może mi pan dostarczyć wszystko do domu?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie Reis?",
    "lv": "Czy ma pan ryż?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir bitte ein Kilo Reis.",
    "lv": "Proszę mi dać kilogram ryżu.",
    "level": "Sätze"
  },
  {
    "de": "Danke, diesmal nicht.",
    "lv": "Dziękuję, tym razem nie.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet dieser Teppich?",
    "lv": "Ile kosztuje ten dywan?",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Möbel in meine Wohnung liefern?",
    "lv": "Czy może pan dostarczyć meble do mojego mieszkania?",
    "level": "Sätze"
  },
  {
    "de": "Bitte an der Kasse zahlen.",
    "lv": "Proszę płacić w kasie.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, machen Sie die Rechnung.",
    "lv": "Proszę wystawić rachunek.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Meter?",
    "lv": "Ile kosztuje metr?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Stoff gefällt mir.",
    "lv": "Podoba mi się ten materiał.",
    "level": "Sätze"
  },
  {
    "de": "Schneiden Sie mir bitte drei Meter ab.",
    "lv": "Proszę mi uciąć trzy metry.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch andere Muster?",
    "lv": "Czy ma pan też inne wzory? • Czy ma pan też inne próbki?",
    "level": "Sätze"
  },
  {
    "de": "Diese Farbe gefällt mir nicht.",
    "lv": "Nie podoba mi się ten kolor.",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir eine hellere.",
    "lv": "Proszę mi dać jaśniejszy.",
    "level": "Sätze"
  },
  {
    "de": "Was kosten diese Socken?",
    "lv": "Ile kosztują te skarpetki?",
    "level": "Sätze"
  },
  {
    "de": "Welche Handschuhe wünschen Sie?",
    "lv": "Jakich rękawiczek pan sobie życzy?",
    "level": "Sätze"
  },
  {
    "de": "Die sind mir etwas zu eng.",
    "lv": "Są na mnie trochę za ciasne.",
    "level": "Sätze"
  },
  {
    "de": "So, nun passen sie gut.",
    "lv": "No, teraz dobrze pasują.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir einen guten Schneider empfehlen?",
    "lv": "Możesz mi polecić dobrego krawca?",
    "level": "Sätze"
  },
  {
    "de": "Ich will einen Anzug bestellen.",
    "lv": "Chcę zamówić garnitur.",
    "level": "Sätze"
  },
  {
    "de": "Wann wird er fertig sein?",
    "lv": "Kiedy będzie gotowy?",
    "level": "Sätze"
  },
  {
    "de": "Der Anzug sitzt gut.",
    "lv": "Garnitur dobrze leży.",
    "level": "Sätze"
  },
  {
    "de": "Die Hose ist zu lang.",
    "lv": "Spodnie są za długie.",
    "level": "Sätze"
  },
  {
    "de": "Bitte reinigen und bügeln Sie ihn!",
    "lv": "Proszę go wyczyścić i wyprasować!",
    "level": "Sätze"
  },
  {
    "de": "Wann wird das Kleid fertig sein?",
    "lv": "Kiedy sukienka będzie gotowa?",
    "level": "Sätze"
  },
  {
    "de": "Die Schuhe sind zu eng.",
    "lv": "Buty są za ciasne.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Schuhe heute reparieren?",
    "lv": "Czy może pan dzisiaj naprawić buty?",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich die Schuhe abholen?",
    "lv": "Kiedy mogę odebrać buty?",
    "level": "Sätze"
  },
  {
    "de": "Meine Armbanduhr funktioniert nicht.",
    "lv": "Mój zegarek nie działa.",
    "level": "Sätze"
  },
  {
    "de": "Sie geht fünf Minuten vor.",
    "lv": "Spieszy się o pięć minut.",
    "level": "Sätze"
  },
  {
    "de": "Bist du kurzsichtig oder weitsichtig?",
    "lv": "Jesteś krótkowzroczny czy dalekowzroczny?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte eine Brille kaufen.",
    "lv": "Chciałbym kupić okulary.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie meine Brille reparieren?",
    "lv": "Czy może pan naprawić moje okulary?",
    "level": "Sätze"
  },
  {
    "de": "Das dauert nur eine Viertelstunde.",
    "lv": "To potrwa tylko kwadrans.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist mir zu hoch.",
    "lv": "Cena jest dla mnie za wysoka.",
    "level": "Sätze"
  },
  {
    "de": "Ich brauche zwei Fotos für meinen Pass.",
    "lv": "Potrzebuję dwóch zdjęć do paszportu.",
    "level": "Sätze"
  },
  {
    "de": "Bitte packen Sie es ein und schicken Sie es mir nach Hause.",
    "lv": "Proszę to zapakować i wysłać mi do domu.",
    "level": "Sätze"
  },
  {
    "de": "Wir haben feste Preise.",
    "lv": "Mamy stałe ceny.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, fotografieren Sie mich.",
    "lv": "Proszę zrobić mi zdjęcie.",
    "level": "Sätze"
  },
  {
    "de": "Setzen Sie sich, schauen Sie gerade in die Kamera und bewegen Sie sich nicht!",
    "lv": "Proszę usiąść, patrzeć prosto w obiektyw i nie ruszać się!",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich das Probebild sehen?",
    "lv": "Kiedy mogę zobaczyć próbną odbitkę?",
    "level": "Sätze"
  },
  {
    "de": "Wann sind die Fotos fertig?",
    "lv": "Kiedy zdjęcia będą gotowe?",
    "level": "Sätze"
  },
  {
    "de": "Die Aufnahme ist gelungen.",
    "lv": "Ujęcie się udało.",
    "level": "Sätze"
  },
  {
    "de": "Die Fotos sind gut geworden.",
    "lv": "Zdjęcia dobrze wyszły.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie das Foto auch vergrößern?",
    "lv": "Czy może pan też powiększyć to zdjęcie?",
    "level": "Sätze"
  },
  {
    "de": "Sind diese Steine echt?",
    "lv": "Czy te kamienie są prawdziwe?",
    "level": "Sätze"
  },
  {
    "de": "Ist das echtes Gold?",
    "lv": "Czy to prawdziwe złoto?",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir bitte Trauringe.",
    "lv": "Proszę mi pokazać obrączki.",
    "level": "Sätze"
  },
  {
    "de": "Der Ring ist mir etwas zu weit.",
    "lv": "Pierścionek jest na mnie trochę za luźny.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann ihn enger machen.",
    "lv": "Mogę go zmniejszyć.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Ring passt mir.",
    "lv": "Ten pierścionek na mnie pasuje.",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir schöne Geschenkideen.",
    "lv": "Proszę mi pokazać ładne pomysły na prezenty.",
    "level": "Sätze"
  },
  {
    "de": "Wie gefallen dir diese Ohrringe?",
    "lv": "Jak ci się podobają te kolczyki?",
    "level": "Sätze"
  },
  {
    "de": "Diese Brosche ist wirklich schön.",
    "lv": "Ta broszka jest naprawdę piękna.",
    "level": "Sätze"
  },
  {
    "de": "Der Stein ist ein Saphir.",
    "lv": "Ten kamień to szafir.",
    "level": "Sätze"
  },
  {
    "de": "Das ist kein echter Stein, das ist Glas.",
    "lv": "To nie jest prawdziwy kamień, to szkło.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Armband kann ich Ihnen besonders empfehlen.",
    "lv": "Tę bransoletkę mogę panu szczególnie polecić.",
    "level": "Sätze"
  },
  {
    "de": "Es ist besonders schön gearbeitet.",
    "lv": "Jest wyjątkowo pięknie wykonana.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist nicht hoch.",
    "lv": "Cena nie jest wysoka.",
    "level": "Sätze"
  },
  {
    "de": "Bekomme ich die Schachtel gratis?",
    "lv": "Czy dostanę pudełko gratis?",
    "level": "Sätze"
  },
  {
    "de": "Alle Schmuckstücke sind gestempelt.",
    "lv": "Cała biżuteria jest ocechowana.",
    "level": "Sätze"
  },
  {
    "de": "Falls es meiner Frau nicht gefällt, kann ich es umtauschen?",
    "lv": "Jeśli mojej żonie się nie spodoba, czy mogę to wymienić?",
    "level": "Sätze"
  },
  {
    "de": "Natürlich, jederzeit.",
    "lv": "Oczywiście, w każdej chwili.",
    "level": "Sätze"
  }
];

window.SENTENCE_ENTRIES = SENTENCE_ENTRIES;

const SENTENCE_ENTRIES = [
  {
    "de": "Hüte dich davor!",
    "lv": "Uważaj na to!",
    "level": "Sätze"
  },
  {
    "de": "Wenn nichts dazwischenkommt.",
    "lv": "Jeśli nic nie przeszkadza. • Jeśli wszystko pójdzie zgodnie z planem.",
    "level": "Sätze"
  },
  {
    "de": "Das kann ich mir denken!",
    "lv": "Wiem to!",
    "level": "Sätze"
  },
  {
    "de": "Ist er denn krank?",
    "lv": "Czy jest wtedy chory?",
    "level": "Sätze"
  },
  {
    "de": "Was denn?",
    "lv": "Co wtedy?",
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
    "lv": "Wszystko wskazuje na sprawę.",
    "level": "Sätze"
  },
  {
    "de": "Damit ist mir wenig gedient.",
    "lv": "Dla mnie to nie ma większego sensu.",
    "level": "Sätze"
  },
  {
    "de": "Er ist dienstlich verhindert.",
    "lv": "Nie może przyjechać ze względu na pracę.",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie doch!",
    "lv": "Mówić głośno!",
    "level": "Sätze"
  },
  {
    "de": "Es donnert.",
    "lv": "Ryczy grzmot.",
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
    "lv": "Czas ucieka.",
    "level": "Sätze"
  },
  {
    "de": "Ihn drücken Sorgen.",
    "lv": "Jest przytłoczony niepokojem.",
    "level": "Sätze"
  },
  {
    "de": "Hast du das Buch durchgearbeitet?",
    "lv": "Czy dokładnie przejrzałeś książkę?",
    "level": "Sätze"
  },
  {
    "de": "Kein Durchgang!",
    "lv": "Nie przechodź! • Wyjście zamknięte!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich Sie bitten?",
    "lv": "Czy mogę cię zapytać",
    "level": "Sätze"
  },
  {
    "de": "Ich bin durstig.",
    "lv": "Jestem spragniony.",
    "level": "Sätze"
  },
  {
    "de": "Eben das meine ich.",
    "lv": "Właśnie to mam na myśli.",
    "level": "Sätze"
  },
  {
    "de": "Es ist ganz egal.",
    "lv": "To nie ma żadnego znaczenia.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie eigentlich?",
    "lv": "Czego naprawdę chcesz?",
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
    "lv": "Po prostu wyobrażasz sobie, że jesteś chory.",
    "level": "Sätze"
  },
  {
    "de": "Was fällt dir ein?",
    "lv": "Co przychodzi Ci do głowy?",
    "level": "Sätze"
  },
  {
    "de": "Es war einmal.",
    "lv": "Kiedyś było.",
    "level": "Sätze"
  },
  {
    "de": "Steigen Sie bitte ein!",
    "lv": "Proszę wejść!",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie ein!",
    "lv": "Proszę wejść!",
    "level": "Sätze"
  },
  {
    "de": "Einzelnes hat mir dort gefallen.",
    "lv": "Podobało mi się tam kilka rzeczy.",
    "level": "Sätze"
  },
  {
    "de": "Es empfiehlt sich.",
    "lv": "Jest to zalecane.",
    "level": "Sätze"
  },
  {
    "de": "Diese Flasche enthält Essig.",
    "lv": "Ta butelka zawiera ocet.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldigen Sie bitte!",
    "lv": "Przepraszam, proszę!",
    "level": "Sätze"
  },
  {
    "de": "Entweder... oder...",
    "lv": "Albo... albo...",
    "level": "Sätze"
  },
  {
    "de": "Wer war der Erste?",
    "lv": "Kto był pierwszy?",
    "level": "Sätze"
  },
  {
    "de": "Wer fehlt heute?",
    "lv": "Kto dzisiaj nie przyszedł?",
    "level": "Sätze"
  },
  {
    "de": "Was fehlt dir?",
    "lv": "Co jest z tobą nie tak?",
    "level": "Sätze"
  },
  {
    "de": "Wie heißen Sie?",
    "lv": "Jak masz na imię?",
    "level": "Sätze"
  },
  {
    "de": "Was soll das heißen?",
    "lv": "Co to oznacza?",
    "level": "Sätze"
  },
  {
    "de": "Bitte treten Sie näher heran!",
    "lv": "Proszę, podejdź bliżej!",
    "level": "Sätze"
  },
  {
    "de": "Heraus mit der Sprache!",
    "lv": "Rozmawiać! • Historie!",
    "level": "Sätze"
  },
  {
    "de": "im Herbst",
    "lv": "Jesienią",
    "level": "Sätze"
  },
  {
    "de": "Meine Herrschaften!",
    "lv": "Panie i panowie!",
    "level": "Sätze"
  },
  {
    "de": "von heute an",
    "lv": "Począwszy od dzisiaj",
    "level": "Sätze"
  },
  {
    "de": "heute früh",
    "lv": "Dziś rano",
    "level": "Sätze"
  },
  {
    "de": "heute Nacht",
    "lv": "Ubiegłej nocy",
    "level": "Sätze"
  },
  {
    "de": "Zu Hilfe!",
    "lv": "Pomoc!",
    "level": "Sätze"
  },
  {
    "de": "Ich lerne jeden Tag Deutsch.",
    "lv": "Na co dzień uczę się języka niemieckiego.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das bitte wiederholen?",
    "lv": "Czy możesz to powtórzyć?",
    "level": "Sätze"
  },
  {
    "de": "Wir treffen uns am Bahnhof.",
    "lv": "Spotykamy się na stacji kolejowej.",
    "level": "Sätze"
  },
  {
    "de": "Ich stimme dir teilweise zu.",
    "lv": "Częściowo się z Tobą zgadzam.",
    "level": "Sätze"
  },
  {
    "de": "Diese Entscheidung hat weitreichende Folgen.",
    "lv": "Decyzja ta ma daleko idące konsekwencje.",
    "level": "Sätze"
  },
  {
    "de": "Man sollte mehrere Perspektiven berücksichtigen.",
    "lv": "Należy rozważyć kilka perspektyw.",
    "level": "Sätze"
  },
  {
    "de": "Könnten Sie das näher erläutern?",
    "lv": "Czy mógłbyś wyjaśnić to bardziej szczegółowo?",
    "level": "Sätze"
  },
  {
    "de": "Was mich anbelangt,...",
    "lv": "Jeśli chodzi o mnie...",
    "level": "Sätze"
  },
  {
    "de": "Wie alt sind Sie?",
    "lv": "Ile masz lat?",
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
    "lv": "Odtąd.",
    "level": "Sätze"
  },
  {
    "de": "Anders geht es nicht.",
    "lv": "Nie ma innego sposobu.",
    "level": "Sätze"
  },
  {
    "de": "Rufen Sie mich an.",
    "lv": "Zadzwoń do mnie.",
    "level": "Sätze"
  },
  {
    "de": "Bitte stellen Sie das Radio ab.",
    "lv": "Proszę wyłączyć radio.",
    "level": "Sätze"
  },
  {
    "de": "Achte bitte auf den Verkehr.",
    "lv": "Proszę zwrócić uwagę na ruch.",
    "level": "Sätze"
  },
  {
    "de": "Darauf musst du achten.",
    "lv": "Powinieneś zwrócić na to uwagę.",
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
    "lv": "Skończyłem szkolenie. • Skończyłem edukację.",
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
    "lv": "Mam alergię na koty.",
    "level": "Sätze"
  },
  {
    "de": "Andererseits verstehe ich ihn.",
    "lv": "Z drugiej strony rozumiem go.",
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
    "lv": "Chcę to dokładniej przeanalizować.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte den Vertrag ändern.",
    "lv": "Chcę zmienić umowę.",
    "level": "Sätze"
  },
  {
    "de": "Er ändert ständig seine Meinung.",
    "lv": "Ciągle zmienia swoje zdanie.",
    "level": "Sätze"
  },
  {
    "de": "Ähnliche Probleme hatten wir schon früher.",
    "lv": "Mieliśmy już podobne problemy.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ahnung!",
    "lv": "Nie mam pojęcia!",
    "level": "Sätze"
  },
  {
    "de": "Hör auf zu jammern.",
    "lv": "Przestań narzekać.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Kleid ist akademisch gekleidet.",
    "lv": "Ta sukienka jest stylowo konserwatywna.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre gerne Akkordeonmusik.",
    "lv": "Lubię słuchać muzyki akordeonowej.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das Gerät anklicken?",
    "lv": "Czy możesz kliknąć urządzenie?",
    "level": "Sätze"
  },
  {
    "de": "Bitte öffne die Datei und klicke darauf.",
    "lv": "Proszę otworzyć plik i kliknąć na niego.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe einen Unfall gehabt.",
    "lv": "Miałem wypadek.",
    "level": "Sätze"
  },
  {
    "de": "Wir laufen zum Bahnhof.",
    "lv": "Idziemy na stację.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schalte den Fernseher an.",
    "lv": "Proszę włączyć telewizor.",
    "level": "Sätze"
  },
  {
    "de": "Mein Computer ist abgestürzt.",
    "lv": "Mój komputer uległ awarii.",
    "level": "Sätze"
  },
  {
    "de": "Am Wochenende gehe ich angeln.",
    "lv": "W weekend pojadę na ryby.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe den Anruf verpasst.",
    "lv": "Przegapiłem połączenie.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mich später anrufen?",
    "lv": "Czy możesz zadzwonić do mnie później?",
    "level": "Sätze"
  },
  {
    "de": "Bitte nimm meinen Vorschlag an.",
    "lv": "Proszę przyjąć moją propozycję.",
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
    "lv": "Znajdź echo. • Znajdź responsywność",
    "level": "Sätze"
  },
  {
    "de": "Es kommt darauf an.",
    "lv": "To zależy od tego.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Anlass.",
    "lv": "Z powodu tego czasu. • W tym zakresie",
    "level": "Sätze"
  },
  {
    "de": "Nehmen wir an, dass...",
    "lv": "Załóżmy, że...",
    "level": "Sätze"
  },
  {
    "de": "Was hast du da angerichtet?",
    "lv": "Co tam zrobiłeś",
    "level": "Sätze"
  },
  {
    "de": "Bis ans Ende.",
    "lv": "Do końca.",
    "level": "Sätze"
  },
  {
    "de": "Du glaubst mir anscheinend nicht.",
    "lv": "Wygląda na to, że mi nie wierzysz.",
    "level": "Sätze"
  },
  {
    "de": "Meiner Ansicht nach...",
    "lv": "Moim zdaniem...",
    "level": "Sätze"
  },
  {
    "de": "Stell dich nicht so an!",
    "lv": "Nie udawaj!",
    "level": "Sätze"
  },
  {
    "de": "An die Arbeit gehen.",
    "lv": "Bierz się do pracy.",
    "level": "Sätze"
  },
  {
    "de": "Außer Atem sein.",
    "lv": "Brakować tchu.",
    "level": "Sätze"
  },
  {
    "de": "Guten Appetit!",
    "lv": "Dobry apetyt!",
    "level": "Sätze"
  },
  {
    "de": "In einem Atemzug.",
    "lv": "Jednym tchem.",
    "level": "Sätze"
  },
  {
    "de": "Auf jeden Fall.",
    "lv": "W każdym przypadku.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal war alles still.",
    "lv": "Nagle wszystko ucichło.",
    "level": "Sätze"
  },
  {
    "de": "Bitte mach die Tür auf!",
    "lv": "Proszę otworzyć drzwi!",
    "level": "Sätze"
  },
  {
    "de": "Er hat den Kredit aufgenommen.",
    "lv": "Wziął pożyczkę.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen heute aufräumen.",
    "lv": "Musimy dziś posprzątać pokój.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre jetzt auf.",
    "lv": "Przestanę teraz.",
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
    "lv": "Pokryj szkody.",
    "level": "Sätze"
  },
  {
    "de": "Bitte die Tür auf!",
    "lv": "Otwórz drzwi, proszę!",
    "level": "Sätze"
  },
  {
    "de": "Aufrecht sitzen.",
    "lv": "Usiądź prosto.",
    "level": "Sätze"
  },
  {
    "de": "Er ist auf.",
    "lv": "Wstał.",
    "level": "Sätze"
  },
  {
    "de": "Alle Kräfte aufwenden.",
    "lv": "Poświęć całą swoją siłę.",
    "level": "Sätze"
  },
  {
    "de": "Viel Mühe aufwenden.",
    "lv": "Bardzo się staraj.",
    "level": "Sätze"
  },
  {
    "de": "Geh mir aus den Augen!",
    "lv": "Nie patrz już na mnie!",
    "level": "Sätze"
  },
  {
    "de": "Unter vier Augen.",
    "lv": "W dwóch. • Cicho",
    "level": "Sätze"
  },
  {
    "de": "Aus Mangel an Zeit.",
    "lv": "Z powodu braku czasu.",
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
    "lv": "Przywiązuj wagę do wyglądu.",
    "level": "Sätze"
  },
  {
    "de": "Im äußersten Fall.",
    "lv": "W najgorszym przypadku.",
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
    "lv": "Ma duże szanse.",
    "level": "Sätze"
  },
  {
    "de": "Wie wird dieses Wort ausgesprochen?",
    "lv": "Jak wymawia się to słowo?",
    "level": "Sätze"
  },
  {
    "de": "Sein Beileid aussprechen.",
    "lv": "Wyraź kondolencje.",
    "level": "Sätze"
  },
  {
    "de": "Wann wurden die Meisterschaftskämpfe ausgetragen?",
    "lv": "Kiedy były mistrzostwa?",
    "level": "Sätze"
  },
  {
    "de": "Welchen Beruf üben Sie aus?",
    "lv": "Jaki jest Twój zawód?",
    "level": "Sätze"
  },
  {
    "de": "Einfluss ausüben.",
    "lv": "Wpływać.",
    "level": "Sätze"
  },
  {
    "de": "Auswärts essen.",
    "lv": "Zjedz poza domem.",
    "level": "Sätze"
  },
  {
    "de": "Per Bahn.",
    "lv": "Koleją.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Bahn.",
    "lv": "Koleją.",
    "level": "Sätze"
  },
  {
    "de": "Möglichst bald.",
    "lv": "Jak najszybciej.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist Angst und bange.",
    "lv": "Bardzo się boję.",
    "level": "Sätze"
  },
  {
    "de": "Auf die lange Bank schieben.",
    "lv": "Ociągać się. • Przeciągnij na długość • Odłóż na czas nieokreślony",
    "level": "Sätze"
  },
  {
    "de": "Bar zahlen.",
    "lv": "Zapłać gotówką.",
    "level": "Sätze"
  },
  {
    "de": "Erz bauen.",
    "lv": "Zdobądź rudę.",
    "level": "Sätze"
  },
  {
    "de": "Mist bauen.",
    "lv": "Strzelać. • Zrób z siebie głupca",
    "level": "Sätze"
  },
  {
    "de": "Ich bin beauftragt.",
    "lv": "Przydzielono mi pracę.",
    "level": "Sätze"
  },
  {
    "de": "Nach Bedarf.",
    "lv": "W razie potrzeby.",
    "level": "Sätze"
  },
  {
    "de": "Ich bedauere ihn.",
    "lv": "Żal mi go.",
    "level": "Sätze"
  },
  {
    "de": "Was bedeutet dieses Wort?",
    "lv": "Co oznacza to słowo?",
    "level": "Sätze"
  },
  {
    "de": "Unter der Bedingung, dass...",
    "lv": "Pod warunkiem że...",
    "level": "Sätze"
  },
  {
    "de": "Sie sieht bedrückt aus.",
    "lv": "Wygląda na przygnębioną.",
    "level": "Sätze"
  },
  {
    "de": "Hinweise befolgen.",
    "lv": "Postępuj zgodnie z instrukcjami.",
    "level": "Sätze"
  },
  {
    "de": "Befehle befolgen.",
    "lv": "Wykonuj polecenia.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Post befördern.",
    "lv": "Wyślij pocztą.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin begierig zu wissen.",
    "lv": "Naprawdę chcę wiedzieć.",
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
    "lv": "Startowy",
    "level": "Sätze"
  },
  {
    "de": "In Begleitung.",
    "lv": "Towarzyszy.",
    "level": "Sätze"
  },
  {
    "de": "Mit seiner Begleitung.",
    "lv": "Z akompaniamentem.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schwer von Begriff.",
    "lv": "Jest powolny w postrzeganiu. • Ma powolne myślenie",
    "level": "Sätze"
  },
  {
    "de": "Im Gedächtnis behalten.",
    "lv": "Pamiętać. • Zachowaj w pamięci",
    "level": "Sätze"
  },
  {
    "de": "Bei Tisch.",
    "lv": "Przy stole.",
    "level": "Sätze"
  },
  {
    "de": "Bei Sinnen sein.",
    "lv": "Być rozsądnym.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tage.",
    "lv": "W ciągu dnia.",
    "level": "Sätze"
  },
  {
    "de": "Bei weitem nicht so.",
    "lv": "Zupełnie nie.",
    "level": "Sätze"
  },
  {
    "de": "Alle beide.",
    "lv": "Obydwa dwa.",
    "level": "Sätze"
  },
  {
    "de": "Stürmischer Beifall brach los.",
    "lv": "Rozległ się gromki aplauz.",
    "level": "Sätze"
  },
  {
    "de": "Beifall finden.",
    "lv": "Uzyskaj zgodę.",
    "level": "Sätze"
  },
  {
    "de": "Beileid aussprechen.",
    "lv": "Wyraź kondolencje.",
    "level": "Sätze"
  },
  {
    "de": "Auf eigenen Beinen stehen.",
    "lv": "Być niezależnym finansowo.",
    "level": "Sätze"
  },
  {
    "de": "Zum Beispiel.",
    "lv": "Na przykład.",
    "level": "Sätze"
  },
  {
    "de": "Beistand leisten.",
    "lv": "Aby pomóc. • Zapewnij pomoc",
    "level": "Sätze"
  },
  {
    "de": "Beitrag leisten.",
    "lv": "Zainwestuj swój udział.",
    "level": "Sätze"
  },
  {
    "de": "Jemandes Bekanntschaft machen.",
    "lv": "Poznaj kogoś.",
    "level": "Sätze"
  },
  {
    "de": "Bekanntschaft anknüpfen.",
    "lv": "Poznajcie się. • Nawiąż kontakt",
    "level": "Sätze"
  },
  {
    "de": "Belegte Brötchen.",
    "lv": "Kanapki z dodatkami.",
    "level": "Sätze"
  },
  {
    "de": "Nach Ihrem Belieben.",
    "lv": "Jak chcesz.",
    "level": "Sätze"
  },
  {
    "de": "Zu jeder beliebigen Zeit.",
    "lv": "Kiedykolwiek.",
    "level": "Sätze"
  },
  {
    "de": "Schweigen beobachten.",
    "lv": "Aby zachować ciszę.",
    "level": "Sätze"
  },
  {
    "de": "Zur Bequemlichkeit.",
    "lv": "Dla wygody.",
    "level": "Sätze"
  },
  {
    "de": "Bereit sein.",
    "lv": "Bądź gotów. • Zachowaj spokój",
    "level": "Sätze"
  },
  {
    "de": "Unfallopfer bergen.",
    "lv": "Ratuj ofiary w razie wypadku.",
    "level": "Sätze"
  },
  {
    "de": "Bericht erstatten.",
    "lv": "Raport. • Przedstaw raport • Przedstaw przegląd",
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
    "lv": "Ma wielką odwagę.",
    "level": "Sätze"
  },
  {
    "de": "Desto besser.",
    "lv": "Im lepiej.",
    "level": "Sätze"
  },
  {
    "de": "Gute Besserung!",
    "lv": "Wyzdrowieć! • Wyzdrowiej!",
    "level": "Sätze"
  },
  {
    "de": "Beim besten Willen.",
    "lv": "Cokolwiek chcesz.",
    "level": "Sätze"
  },
  {
    "de": "Am besten.",
    "lv": "Najlepsze.",
    "level": "Sätze"
  },
  {
    "de": "Es besteht Zweifel.",
    "lv": "Są wątpliwości.",
    "level": "Sätze"
  },
  {
    "de": "Seine Aufgabe besteht darin...",
    "lv": "Jego zadaniem jest...",
    "level": "Sätze"
  },
  {
    "de": "Grüße bestellen.",
    "lv": "Przywitaj się.",
    "level": "Sätze"
  },
  {
    "de": "Ganz bestimmt.",
    "lv": "Zdecydowanie. • Całkowicie bezpieczny",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch kommen.",
    "lv": "Przyjdź odwiedzić.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch sein.",
    "lv": "Odwiedzić. • Aby odwiedzić",
    "level": "Sätze"
  },
  {
    "de": "Oft Konzerte besuchen.",
    "lv": "Często chodzą na koncerty.",
    "level": "Sätze"
  },
  {
    "de": "Welche Schule hat er besucht?",
    "lv": "Do jakiej szkoły chodził?",
    "level": "Sätze"
  },
  {
    "de": "In Betracht ziehen.",
    "lv": "Brać pod uwagę. • Rozważać",
    "level": "Sätze"
  },
  {
    "de": "Außer Betracht lassen.",
    "lv": "Lekceważenie. • Nie zastanawiaj się",
    "level": "Sätze"
  },
  {
    "de": "Er betreibt ein Hotel.",
    "lv": "Prowadzi hotel.",
    "level": "Sätze"
  },
  {
    "de": "Alle beiden.",
    "lv": "Obydwa dwa.",
    "level": "Sätze"
  },
  {
    "de": "Alles bezahlen.",
    "lv": "Zapłać wszystko.",
    "level": "Sätze"
  },
  {
    "de": "Bezüglich auf etwas.",
    "lv": "Jeśli chodzi o coś.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön.",
    "lv": "Proszę",
    "level": "Sätze"
  },
  {
    "de": "Wie bitte?",
    "lv": "Jak proszę",
    "level": "Sätze"
  },
  {
    "de": "Bitte sehr.",
    "lv": "Proszę",
    "level": "Sätze"
  },
  {
    "de": "Ich habe eine Bitte an Sie.",
    "lv": "Mam do ciebie prośbę.",
    "level": "Sätze"
  },
  {
    "de": "Trompete blasen.",
    "lv": "Zadmij w trąbkę.",
    "level": "Sätze"
  },
  {
    "de": "In einem Buch blättern.",
    "lv": "Posortuj książkę.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßen Füßen.",
    "lv": "Bose stopy.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßem Auge.",
    "lv": "Gołym okiem.",
    "level": "Sätze"
  },
  {
    "de": "Danke für die Blumen!",
    "lv": "Dziękuję za kwiaty!",
    "level": "Sätze"
  },
  {
    "de": "Alles in Butter.",
    "lv": "Wszystko jest w porządku.",
    "level": "Sätze"
  },
  {
    "de": "Bitte checken.",
    "lv": "Sprawdzać. • Sprawdzać",
    "level": "Sätze"
  },
  {
    "de": "Da ist er!",
    "lv": "Oto on!",
    "level": "Sätze"
  },
  {
    "de": "Alles spricht dafür.",
    "lv": "Wszystko dobrze mówi.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann nichts dafür.",
    "lv": "Nie mogę tam nic zrobić.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin dagegen.",
    "lv": "Jestem temu przeciwny.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe nichts dagegen.",
    "lv": "Nie mam co do tego żadnych zastrzeżeń.",
    "level": "Sätze"
  },
  {
    "de": "Von daheim.",
    "lv": "Z domu.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Dame ziehen.",
    "lv": "Wykonaj damski ruch.",
    "level": "Sätze"
  },
  {
    "de": "Es dämmert.",
    "lv": "Robi się ciemno. • Wstaje świt.",
    "level": "Sätze"
  },
  {
    "de": "Danke schön!",
    "lv": "Dziękuję! • Dziękuję!",
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
    "lv": "Aby...",
    "level": "Sätze"
  },
  {
    "de": "Für wen halten Sie mich?",
    "lv": "Jak myślisz, czym jestem?",
    "level": "Sätze"
  },
  {
    "de": "Hände weg!",
    "lv": "Ręce przy sobie!",
    "level": "Sätze"
  },
  {
    "de": "Lass den Kopf nicht hängen!",
    "lv": "Nie opuszczaj głowy!",
    "level": "Sätze"
  },
  {
    "de": "zu Hause",
    "lv": "U siebie w domu",
    "level": "Sätze"
  },
  {
    "de": "nach Hause gehen",
    "lv": "Idź do domu",
    "level": "Sätze"
  },
  {
    "de": "von Haus aus",
    "lv": "Od dzieciństwa • Od samego początku",
    "level": "Sätze"
  },
  {
    "de": "Meinen herzlichsten Glückwunsch!",
    "lv": "Gratulacje!",
    "level": "Sätze"
  },
  {
    "de": "Seien Sie so gut!",
    "lv": "Bądź taki miły! • Bądź taki dobry!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie die Güte!",
    "lv": "Bądź taki miły!",
    "level": "Sätze"
  },
  {
    "de": "Was hast du?",
    "lv": "Co jest z tobą nie tak? • Co się stało?",
    "level": "Sätze"
  },
  {
    "de": "Gestatten Sie bitte!",
    "lv": "Pozwól mi, proszę!",
    "level": "Sätze"
  },
  {
    "de": "Ist es gestattet zu rauchen?",
    "lv": "Czy mogę palić?",
    "level": "Sätze"
  },
  {
    "de": "Ich muss gestehen, dass...",
    "lv": "Muszę przyznać, że...",
    "level": "Sätze"
  },
  {
    "de": "gestern früh",
    "lv": "Wczoraj rano",
    "level": "Sätze"
  },
  {
    "de": "gestern Abend",
    "lv": "Ubiegłej nocy",
    "level": "Sätze"
  },
  {
    "de": "Es ist mir gleichgültig, ob...",
    "lv": "Nie obchodzi mnie, czy...",
    "level": "Sätze"
  },
  {
    "de": "Was ist geschehen?",
    "lv": "Co się stało?",
    "level": "Sätze"
  },
  {
    "de": "Mach keine Geschichten!",
    "lv": "Nie rób głupot! • Nie żartuj!",
    "level": "Sätze"
  },
  {
    "de": "Geschweige denn...",
    "lv": "Nie wspominając o tym. • Gdzie indziej",
    "level": "Sätze"
  },
  {
    "de": "Gehen Sie geradeaus!",
    "lv": "Idź prosto!",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es Ihnen?",
    "lv": "Jak się masz • Jak się masz?",
    "level": "Sätze"
  },
  {
    "de": "Frag ihn gelegentlich, ob...",
    "lv": "Zapytaj go, czy wyjdzie, jeśli...",
    "level": "Sätze"
  },
  {
    "de": "morgen früh",
    "lv": "Jutro rano",
    "level": "Sätze"
  },
  {
    "de": "im Frühling",
    "lv": "Na wiosnę",
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
    "lv": "Tak trzymaj!",
    "level": "Sätze"
  },
  {
    "de": "Er ist kein Freund von...",
    "lv": "On nie lubi...",
    "level": "Sätze"
  },
  {
    "de": "Es erwies sich, dass...",
    "lv": "Okazało się, że...",
    "level": "Sätze"
  },
  {
    "de": "Gedenkst du meiner?",
    "lv": "Czy mnie pamiętasz • Czy myślałeś o mnie?",
    "level": "Sätze"
  },
  {
    "de": "im Winter",
    "lv": "Zimą",
    "level": "Sätze"
  },
  {
    "de": "Welcher Jahrgang sind Sie?",
    "lv": "W którym roku się urodziłeś?",
    "level": "Sätze"
  },
  {
    "de": "Es jammert mich zu sehen...",
    "lv": "Smutno to oglądać...",
    "level": "Sätze"
  },
  {
    "de": "je mehr, desto besser",
    "lv": "Im więcej, tym lepiej",
    "level": "Sätze"
  },
  {
    "de": "bis jetzt",
    "lv": "Aż do teraz",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich zum Bahnhof?",
    "lv": "Jak dojechać na stację?",
    "level": "Sätze"
  },
  {
    "de": "Komm her!",
    "lv": "Chodź tutaj!",
    "level": "Sätze"
  },
  {
    "de": "Könnte ich Frau N. sprechen?",
    "lv": "Czy mógłbym rozmawiać z panią N.?",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das?",
    "lv": "Ile to kosztuje?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange dauert die Vorstellung?",
    "lv": "Jak długo będzie trwał występ?",
    "level": "Sätze"
  },
  {
    "de": "Lass das!",
    "lv": "Przestań! • Rzuć to!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich in Ruhe!",
    "lv": "Zostaw mnie w spokoju!",
    "level": "Sätze"
  },
  {
    "de": "Lassen Sie mich Ihnen helfen!",
    "lv": "Pozwól, że ci pomogę!",
    "level": "Sätze"
  },
  {
    "de": "Lasst uns gehen!",
    "lv": "Chodźmy!",
    "level": "Sätze"
  },
  {
    "de": "Na, wie läufts?",
    "lv": "Jak się masz",
    "level": "Sätze"
  },
  {
    "de": "Es lebe!",
    "lv": "Niech żyje!",
    "level": "Sätze"
  },
  {
    "de": "Leben Sie wohl!",
    "lv": "Żyj zdrowo! • Do widzenia!",
    "level": "Sätze"
  },
  {
    "de": "Was ist los?",
    "lv": "Co się stało?",
    "level": "Sätze"
  },
  {
    "de": "Der Job ist anstrengend.",
    "lv": "Praca jest wyczerpująca.",
    "level": "Sätze"
  },
  {
    "de": "Das war ein anstrengender Tag.",
    "lv": "To był pracowity dzień.",
    "level": "Sätze"
  },
  {
    "de": "Deutsch lernen kann anstrengend sein.",
    "lv": "Nauka języka niemieckiego może być wyczerpująca.",
    "level": "Sätze"
  },
  {
    "de": "Er verlangt eine Erklärung.",
    "lv": "Żąda wyjaśnień.",
    "level": "Sätze"
  },
  {
    "de": "Der Verkäufer verlangt zu viel Geld.",
    "lv": "Sprzedawca żąda za dużo pieniędzy.",
    "level": "Sätze"
  },
  {
    "de": "Das Gesetz verlangt es so.",
    "lv": "Wymaga tego prawo.",
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
    "lv": "Pies został wypuszczony.",
    "level": "Sätze"
  },
  {
    "de": "Hier ist viel los.",
    "lv": "Dużo się tu dzieje.",
    "level": "Sätze"
  },
  {
    "de": "Halt die Luft an!",
    "lv": "Wstrzymaj oddech!",
    "level": "Sätze"
  },
  {
    "de": "Was machst du?",
    "lv": "Co robisz",
    "level": "Sätze"
  },
  {
    "de": "Sag mal!",
    "lv": "Powiedz tak!",
    "level": "Sätze"
  },
  {
    "de": "Was meinen Sie damit?",
    "lv": "Co przez to rozumiesz? • Co o tym myślisz?",
    "level": "Sätze"
  },
  {
    "de": "Wir gehen mit Ihnen.",
    "lv": "Idziemy z tobą.",
    "level": "Sätze"
  },
  {
    "de": "Ich fahre mit der Eisenbahn.",
    "lv": "Podróżuję pociągiem.",
    "level": "Sätze"
  },
  {
    "de": "am Mittwoch",
    "lv": "W środę",
    "level": "Sätze"
  },
  {
    "de": "Es mag sein.",
    "lv": "Może.",
    "level": "Sätze"
  },
  {
    "de": "Ich mag das nicht.",
    "lv": "Nie podoba mi się to.",
    "level": "Sätze"
  },
  {
    "de": "am Montag",
    "lv": "W poniedziałek",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen!",
    "lv": "Dzień dobry!",
    "level": "Sätze"
  },
  {
    "de": "am Morgen",
    "lv": "Rano",
    "level": "Sätze"
  },
  {
    "de": "Gute Nacht!",
    "lv": "Dobranoc!",
    "level": "Sätze"
  },
  {
    "de": "Nehmen Sie Platz!",
    "lv": "Usiąść!",
    "level": "Sätze"
  },
  {
    "de": "Letzte Neuheit!",
    "lv": "Najnowsze wiadomości!",
    "level": "Sätze"
  },
  {
    "de": "Nicht wahr?",
    "lv": "Prawidłowy?",
    "level": "Sätze"
  },
  {
    "de": "Nicht doch!",
    "lv": "Nie, oczywiście! • Nie!",
    "level": "Sätze"
  },
  {
    "de": "Nun endlich!",
    "lv": "No wreszcie!",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das?",
    "lv": "Do czego to jest dobre?",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das alles?",
    "lv": "Po co to wszystko?",
    "level": "Sätze"
  },
  {
    "de": "Parken verboten!",
    "lv": "Parkowanie jest zabronione!",
    "level": "Sätze"
  },
  {
    "de": "Nicht parken!",
    "lv": "Parkowanie jest zabronione!",
    "level": "Sätze"
  },
  {
    "de": "Er hat Recht.",
    "lv": "On ma rację.",
    "level": "Sätze"
  },
  {
    "de": "Wovon ist die Rede?",
    "lv": "O co chodzi?",
    "level": "Sätze"
  },
  {
    "de": "Davon kann keine Rede sein.",
    "lv": "To nie wchodzi w grę.",
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
    "lv": "Mówią, że...",
    "level": "Sätze"
  },
  {
    "de": "Schon gut!",
    "lv": "Już jest dobrze!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön!",
    "lv": "Proszę!",
    "level": "Sätze"
  },
  {
    "de": "Was bin ich schuldig?",
    "lv": "Ile się należy? • Ile muszę zapłacić?",
    "level": "Sätze"
  },
  {
    "de": "Vor dem Gebrauch schütteln!",
    "lv": "Wstrząsnąć przed użyciem!",
    "level": "Sätze"
  },
  {
    "de": "Sehen Sie mal!",
    "lv": "Spójrz!",
    "level": "Sätze"
  },
  {
    "de": "Wie sehr auch...",
    "lv": "Ile...",
    "level": "Sätze"
  },
  {
    "de": "Seit wann?",
    "lv": "Odkąd?",
    "level": "Sätze"
  },
  {
    "de": "Was soll ich tun?",
    "lv": "Co powinienem zrobić?",
    "level": "Sätze"
  },
  {
    "de": "im Sommer",
    "lv": "Latem",
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
    "lv": "Bez żartów! • Żarty na krawędzi!",
    "level": "Sätze"
  },
  {
    "de": "Wie spät ist es?",
    "lv": "Która godzina",
    "level": "Sätze"
  },
  {
    "de": "Durchfahrt gesperrt!",
    "lv": "Zakaz przejeżdżania!",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie deutsch?",
    "lv": "Czy mówisz po niemiecku?",
    "level": "Sätze"
  },
  {
    "de": "Statt zu...",
    "lv": "Zamiast...",
    "level": "Sätze"
  },
  {
    "de": "Wie steht’s?",
    "lv": "Jak się masz",
    "level": "Sätze"
  },
  {
    "de": "Dieser Hut steht ihr gut.",
    "lv": "Ten kapelusz bardzo jej pasuje.",
    "level": "Sätze"
  },
  {
    "de": "Guten Tag!",
    "lv": "Cześć!",
    "level": "Sätze"
  },
  {
    "de": "Wo treffen wir uns?",
    "lv": "Gdzie się spotkamy?",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie näher!",
    "lv": "Podejdź bliżej!",
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
    "lv": "Bardzo dobry! • Nie ma sprzeciwu",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt über mir.",
    "lv": "Mieszka nade mną.",
    "level": "Sätze"
  },
  {
    "de": "Er ist davon überzeugt.",
    "lv": "Jest tego pewien.",
    "level": "Sätze"
  },
  {
    "de": "So ist es üblich.",
    "lv": "Jest to akceptowane.",
    "level": "Sätze"
  },
  {
    "de": "Deine Uhr geht nach.",
    "lv": "Twój zegarek się spóźnił.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel Uhr ist es?",
    "lv": "Która godzina?",
    "level": "Sätze"
  },
  {
    "de": "Um acht Uhr früh.",
    "lv": "O ósmej rano.",
    "level": "Sätze"
  },
  {
    "de": "umso mehr",
    "lv": "Tym bardziej",
    "level": "Sätze"
  },
  {
    "de": "Rechts um!",
    "lv": "Skręć w prawo!",
    "level": "Sätze"
  },
  {
    "de": "Und ob!",
    "lv": "I co jeszcze!",
    "level": "Sätze"
  },
  {
    "de": "und zwar",
    "lv": "Mianowicie",
    "level": "Sätze"
  },
  {
    "de": "Auf Unkosten von...",
    "lv": "Kosztem...",
    "level": "Sätze"
  },
  {
    "de": "Er saß unter den Zuschauern.",
    "lv": "Usiadł wśród publiczności.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ursache!",
    "lv": "Nic za nic!",
    "level": "Sätze"
  },
  {
    "de": "Es geschah, wie verabredet.",
    "lv": "Stało się zgodnie z ustaleniami.",
    "level": "Sätze"
  },
  {
    "de": "Rauchen verboten!",
    "lv": "Palenie jest zabronione!",
    "level": "Sätze"
  },
  {
    "de": "Falsch verbunden!",
    "lv": "Błędne połączenie!",
    "level": "Sätze"
  },
  {
    "de": "Eintritt verboten!",
    "lv": "Zakaz wstępu!",
    "level": "Sätze"
  },
  {
    "de": "Verstehen Sie mich?",
    "lv": "Czy mnie rozumiesz?",
    "level": "Sätze"
  },
  {
    "de": "Er versteht nichts davon.",
    "lv": "Nic z tego nie rozumie.",
    "level": "Sätze"
  },
  {
    "de": "Seine Ansicht vertreten.",
    "lv": "Broń swojego zdania.",
    "level": "Sätze"
  },
  {
    "de": "Streit verursachen.",
    "lv": "Wywołaj kłótnię.",
    "level": "Sätze"
  },
  {
    "de": "Viel besser.",
    "lv": "Znacznie lepiej.",
    "level": "Sätze"
  },
  {
    "de": "Zu viel.",
    "lv": "Za dużo.",
    "level": "Sätze"
  },
  {
    "de": "Vom Hörensagen.",
    "lv": "Po przesłuchaniu.",
    "level": "Sätze"
  },
  {
    "de": "Von Zeit zu Zeit.",
    "lv": "Niekiedy.",
    "level": "Sätze"
  },
  {
    "de": "Von Beruf.",
    "lv": "Z zawodu.",
    "level": "Sätze"
  },
  {
    "de": "Er ist Berliner von Geburt.",
    "lv": "Z urodzenia jest berlińczykiem.",
    "level": "Sätze"
  },
  {
    "de": "Er steht vor dem Fenster.",
    "lv": "Stoi przy oknie.",
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
    "lv": "Dla zabawy.",
    "level": "Sätze"
  },
  {
    "de": "Vor allem.",
    "lv": "Przede wszystkim. • Przede wszystkim",
    "level": "Sätze"
  },
  {
    "de": "Im Voraus.",
    "lv": "Poprzednio.",
    "level": "Sätze"
  },
  {
    "de": "Unter der Voraussetzung, dass...",
    "lv": "Zakładając, że...",
    "level": "Sätze"
  },
  {
    "de": "Unter dem Vorbehalt.",
    "lv": "Warunkowo.",
    "level": "Sätze"
  },
  {
    "de": "Vorhanden sein.",
    "lv": "Być. • Bądź obecny • Bądź dostępny",
    "level": "Sätze"
  },
  {
    "de": "In der vorigen Woche.",
    "lv": "Ostatni tydzień.",
    "level": "Sätze"
  },
  {
    "de": "Vorkehrungen treffen.",
    "lv": "Podejmij działania ochronne.",
    "level": "Sätze"
  },
  {
    "de": "Sie kommt mir bekannt vor.",
    "lv": "Wygląda mi znajomo.",
    "level": "Sätze"
  },
  {
    "de": "Er hat Vorliebe für Literatur.",
    "lv": "Bardzo lubi literaturę.",
    "level": "Sätze"
  },
  {
    "de": "Heute Vormittag.",
    "lv": "Dziś rano. • Dziś rano",
    "level": "Sätze"
  },
  {
    "de": "Von vorn.",
    "lv": "Od przodu.",
    "level": "Sätze"
  },
  {
    "de": "Nach vorn.",
    "lv": "Do przodu.",
    "level": "Sätze"
  },
  {
    "de": "Von vornherein.",
    "lv": "Na samym początku.",
    "level": "Sätze"
  },
  {
    "de": "Im Vorteil sein.",
    "lv": "Bądź w lepszej sytuacji.",
    "level": "Sätze"
  },
  {
    "de": "Wach sein.",
    "lv": "Być przytomnym.",
    "level": "Sätze"
  },
  {
    "de": "Wach werden.",
    "lv": "Budzić się.",
    "level": "Sätze"
  },
  {
    "de": "Auf Wache sein.",
    "lv": "Stań na straży.",
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
    "lv": "Rozmawiaj na próżno.",
    "level": "Sätze"
  },
  {
    "de": "Hier haben die Wände Ohren.",
    "lv": "Tutaj ściany mają uszy.",
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
    "lv": "Poczekaj na wiadomość.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie?",
    "lv": "Czego chcesz?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein...?",
    "lv": "Kto...? • A co z...?",
    "level": "Sätze"
  },
  {
    "de": "Auf halbem Wege.",
    "lv": "Wpół.",
    "level": "Sätze"
  },
  {
    "de": "Auf diesem Wege.",
    "lv": "W ten sposób. • O takie fundusze",
    "level": "Sätze"
  },
  {
    "de": "Auf friedlichem Wege.",
    "lv": "Na ścieżce pokoju.",
    "level": "Sätze"
  },
  {
    "de": "Unserer Freundschaft wegen.",
    "lv": "Z powodu naszej przyjaźni.",
    "level": "Sätze"
  },
  {
    "de": "Von Rechts wegen.",
    "lv": "Przez sprawiedliwość.",
    "level": "Sätze"
  },
  {
    "de": "Weh tun.",
    "lv": "Zaboleć.",
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
    "lv": "Typ.",
    "level": "Sätze"
  },
  {
    "de": "Ohne weiteres.",
    "lv": "Natychmiast. • Natychmiast",
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
    "lv": "Cały świat. • Wszyscy",
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
    "lv": "Co tam jest?",
    "level": "Sätze"
  },
  {
    "de": "Gesammelte Werke von Schiller.",
    "lv": "Pisma zebrane Schillera.",
    "level": "Sätze"
  },
  {
    "de": "Ausgewählte Werke.",
    "lv": "Wybór prac.",
    "level": "Sätze"
  },
  {
    "de": "Er ist wert, dass...",
    "lv": "On zasługuje na...",
    "level": "Sätze"
  },
  {
    "de": "Es ist zwei Euro wert.",
    "lv": "Kosztuje dwa euro.",
    "level": "Sätze"
  },
  {
    "de": "Nach Westen.",
    "lv": "Na zachód.",
    "level": "Sätze"
  },
  {
    "de": "Von Westen.",
    "lv": "Od zachodu.",
    "level": "Sätze"
  },
  {
    "de": "In Wettbewerb treten.",
    "lv": "Weź udział w konkursie.",
    "level": "Sätze"
  },
  {
    "de": "Um die Wette laufen.",
    "lv": "Uruchom wyścig.",
    "level": "Sätze"
  },
  {
    "de": "Was gilt die Wette?",
    "lv": "O co się targujemy?",
    "level": "Sätze"
  },
  {
    "de": "Wie wird das Wetter?",
    "lv": "Jaka będzie pogoda?",
    "level": "Sätze"
  },
  {
    "de": "Wettkampf im Turnen.",
    "lv": "Zawody w gimnastyce.",
    "level": "Sätze"
  },
  {
    "de": "Wider meinen Willen.",
    "lv": "Wbrew mojej woli.",
    "level": "Sätze"
  },
  {
    "de": "Widerspruch erheben.",
    "lv": "Aby zaprotestować. • Zgłoś sprzeciw",
    "level": "Sätze"
  },
  {
    "de": "Wie alt ist er?",
    "lv": "Ile on ma lat?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange?",
    "lv": "Jak długo",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiederhören!",
    "lv": "Do widzenia!",
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
    "lv": "Serdecznie pozdrawiam!",
    "level": "Sätze"
  },
  {
    "de": "Du musst ziehen.",
    "lv": "Masz ruch.",
    "level": "Sätze"
  },
  {
    "de": "Es zieht.",
    "lv": "Ciągnąć",
    "level": "Sätze"
  },
  {
    "de": "Ziemlich kalt.",
    "lv": "Całkiem zimno.",
    "level": "Sätze"
  },
  {
    "de": "Zipfel einer Wurst.",
    "lv": "Końcówka kiełbasy.",
    "level": "Sätze"
  },
  {
    "de": "Zu ihm gehen.",
    "lv": "Idź do niego.",
    "level": "Sätze"
  },
  {
    "de": "Zur Schule gehen.",
    "lv": "Uczęszczać.",
    "level": "Sätze"
  },
  {
    "de": "Zu Hause bleiben.",
    "lv": "Siedzieć w domu.",
    "level": "Sätze"
  },
  {
    "de": "Von Tag zu Tag.",
    "lv": "Na co dzień.",
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
    "lv": "Na nogi.",
    "level": "Sätze"
  },
  {
    "de": "Zu Pferde.",
    "lv": "Tak.",
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
    "lv": "Nadal mam wiele do zrobienia.",
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
    "lv": "Wzruszać ramionami.",
    "level": "Sätze"
  },
  {
    "de": "In einem Zug trinken.",
    "lv": "Wypij jednym haustem.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde gehen.",
    "lv": "Zginąć.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde legen.",
    "lv": "Połóż na podstawie. • Weź jako podstawę.",
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
    "lv": "Przybrał na wadze.",
    "level": "Sätze"
  },
  {
    "de": "Die Tage nehmen zu.",
    "lv": "Dni stają się coraz dłuższe.",
    "level": "Sätze"
  },
  {
    "de": "Zusammenhängen mit etwas.",
    "lv": "Być z czymś kojarzonym.",
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
    "lv": "Bezpłatny wstęp.",
    "level": "Sätze"
  },
  {
    "de": "Zutritt verboten!",
    "lv": "Zakaz wstępu!",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu viel!",
    "lv": "To za dużo!",
    "level": "Sätze"
  },
  {
    "de": "Zuwider werden.",
    "lv": "Stań się obrzydliwy. • Zachoruj",
    "level": "Sätze"
  },
  {
    "de": "Und zwar.",
    "lv": "Mianowicie.",
    "level": "Sätze"
  },
  {
    "de": "Es steht außer Zweifel.",
    "lv": "Nie ma wątpliwości.",
    "level": "Sätze"
  },
  {
    "de": "Ohne Zweifel.",
    "lv": "Bez zająknięnia.",
    "level": "Sätze"
  },
  {
    "de": "Zum Zweiten.",
    "lv": "Po drugie.",
    "level": "Sätze"
  },
  {
    "de": "Frohes neues Jahr!",
    "lv": "Szczęśliwego nowego roku!",
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
    "lv": "Cieszę się, że cię poznałem.",
    "level": "Sätze"
  },
  {
    "de": "Wären Sie bitte so nett?",
    "lv": "Czy byłbyś tak miły?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin Ihnen sehr dankbar.",
    "lv": "Jestem ci bardzo wdzięczny.",
    "level": "Sätze"
  },
  {
    "de": "Setzt euch bitte hin!",
    "lv": "Usiądź, proszę!",
    "level": "Sätze"
  },
  {
    "de": "Ben, komm bitte an die Tafel!",
    "lv": "Ben, proszę podejdź do tablicy!",
    "level": "Sätze"
  },
  {
    "de": "Schlagt bitte die Lehrbücher auf!",
    "lv": "Otwórz podręczniki, proszę!",
    "level": "Sätze"
  },
  {
    "de": "Geht bitte in die Sporthalle!",
    "lv": "Proszę, idź na siłownię!",
    "level": "Sätze"
  },
  {
    "de": "Schläfst du noch?",
    "lv": "Czy nadal śpisz?",
    "level": "Sätze"
  },
  {
    "de": "Schlafen Sie noch?",
    "lv": "Czy nadal śpisz?",
    "level": "Sätze"
  },
  {
    "de": "Er ist fest eingeschlafen.",
    "lv": "On szybko śpi.",
    "level": "Sätze"
  },
  {
    "de": "Wecke ihn bitte auf, es ist schon spät!",
    "lv": "Proszę go obudzić, jest już późno!",
    "level": "Sätze"
  },
  {
    "de": "Es tut mir sehr leid!",
    "lv": "Bardzo mi przykro!",
    "level": "Sätze"
  },
  {
    "de": "Vielen Dank!",
    "lv": "Dziękuję bardzo!",
    "level": "Sätze"
  },
  {
    "de": "Finn, fang bitte an!",
    "lv": "Finn, zacznij, proszę!",
    "level": "Sätze"
  },
  {
    "de": "Lest bitte mit!",
    "lv": "Czytaj dalej, proszę!",
    "level": "Sätze"
  },
  {
    "de": "Emma, schau bitte nicht aus dem Fenster!",
    "lv": "Emmo, proszę, nie patrz przez okno!",
    "level": "Sätze"
  },
  {
    "de": "Jonas, bring bitte die Hefte!",
    "lv": "Jonas, proszę przynieść zeszyty!",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte zurück an deinen Platz!",
    "lv": "Wracaj na swoje miejsce!",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb acht.",
    "lv": "Jest wpół do siódmej.",
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
    "lv": "Wstawaj, Hannah, dzwoni dzwonek!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich noch fünf Minuten schlafen!",
    "lv": "Daj mi spać jeszcze pięć minut!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss nicht, das Zimmer zu lüften!",
    "lv": "Nie zapomnij o wietrzeniu pomieszczenia!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist das Handtuch?",
    "lv": "Gdzie jest ręcznik",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mir die Zähne putzen.",
    "lv": "Chcę umyć zęby.",
    "level": "Sätze"
  },
  {
    "de": "Mit was putzt du dir die Zähne?",
    "lv": "Czym myjesz zęby?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mich anziehen.",
    "lv": "Chcę się ubrać.",
    "level": "Sätze"
  },
  {
    "de": "Zieh dich bitte schnell an!",
    "lv": "Ubierz się szybko, proszę!",
    "level": "Sätze"
  },
  {
    "de": "Kleide dich wärmer an, draußen ist es kühl.",
    "lv": "Ubierz się ciepło, na zewnątrz jest zimno.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, wie geht es dir?",
    "lv": "Dzień dobry, jak się masz?",
    "level": "Sätze"
  },
  {
    "de": "Mir geht es gut, danke.",
    "lv": "Nic mi nie jest, dziękuję.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es Neues?",
    "lv": "Co nowego?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein Chaos hier!",
    "lv": "Cóż tu za bałagan!",
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
    "lv": "Najlepiej piję czarną kawę.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, hast du gut geschlafen?",
    "lv": "Dzień dobry, czy dobrze spałeś?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin noch sehr müde.",
    "lv": "Nadal jestem bardzo zmęczony.",
    "level": "Sätze"
  },
  {
    "de": "Willst du Kaffee oder Milch?",
    "lv": "Chcesz kawę czy mleko?",
    "level": "Sätze"
  },
  {
    "de": "Gib mir bitte ein Brötchen mit Käse.",
    "lv": "Proszę, daj mi bułkę serową.",
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
    "lv": "Clara, proszę nakryć do stołu!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss die Servietten nicht!",
    "lv": "Nie zapomnij o serwetkach!",
    "level": "Sätze"
  },
  {
    "de": "Wann esst ihr zu Mittag?",
    "lv": "Kiedy jesz lunch",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit zu essen.",
    "lv": "Czas jeść.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es heute zu Mittag?",
    "lv": "Co dzisiaj na lunch?",
    "level": "Sätze"
  },
  {
    "de": "Wie schmeckt dir die Suppe?",
    "lv": "Jak ci się podoba zupa?",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt ist sie etwas zu salzig.",
    "lv": "Szczerze mówiąc, jest odrobinę za słony.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dir ein Stück Brot geben?",
    "lv": "Czy mogę dać ci kromkę chleba?",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich habe schon.",
    "lv": "Dziękuję, już to zrobiłem.",
    "level": "Sätze"
  },
  {
    "de": "Das Fleisch schmeckt ausgezeichnet.",
    "lv": "Mięso smakuje wyśmienicie.",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich bin schon satt.",
    "lv": "Dziękuję, już jestem pełny.",
    "level": "Sätze"
  },
  {
    "de": "Heute haben wir Besuch.",
    "lv": "Dziś mamy gości.",
    "level": "Sätze"
  },
  {
    "de": "Bist du heute Abend frei?",
    "lv": "Czy jesteś wolny dziś wieczorem?",
    "level": "Sätze"
  },
  {
    "de": "Komm doch heute zum Mittagessen vorbei!",
    "lv": "Przyjdź dziś na lunch!",
    "level": "Sätze"
  },
  {
    "de": "Setzen wir uns an den Tisch.",
    "lv": "Usiądźmy przy stole.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, bedien dich!",
    "lv": "Proszę, jedz tyle, ile chcesz!",
    "level": "Sätze"
  },
  {
    "de": "Stört dich das Rauchen?",
    "lv": "Czy palenie Ci przeszkadza?",
    "level": "Sätze"
  },
  {
    "de": "Danke für die nette Aufnahme!",
    "lv": "Dziękuję za ciepłe powitanie!",
    "level": "Sätze"
  },
  {
    "de": "Wann gehst du ins Bett?",
    "lv": "Kiedy idziesz spać",
    "level": "Sätze"
  },
  {
    "de": "Wenn ich von der Arbeit komme, bin ich immer müde.",
    "lv": "Zawsze jestem zmęczony, kiedy wracam do domu z pracy.",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, ins Bett zu gehen.",
    "lv": "Czas iść spać.",
    "level": "Sätze"
  },
  {
    "de": "Es ist schönes Wetter.",
    "lv": "To miły czas.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mit mir spazieren gehen?",
    "lv": "Czy chcesz iść ze mną?",
    "level": "Sätze"
  },
  {
    "de": "Sieh mal, es wird gleich regnen.",
    "lv": "Spójrz, wkrótce będzie padać.",
    "level": "Sätze"
  },
  {
    "de": "Nimm den Regenschirm mit!",
    "lv": "Zabierz ze sobą parasol!",
    "level": "Sätze"
  },
  {
    "de": "Es regnet.",
    "lv": "Pada deszcz.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin schon ganz nass.",
    "lv": "Jestem już całkowicie mokry.",
    "level": "Sätze"
  },
  {
    "de": "Glaubst du, dass es den ganzen Tag regnen wird?",
    "lv": "Myślisz, że będzie padać przez cały dzień?",
    "level": "Sätze"
  },
  {
    "de": "Es hört auf zu regnen.",
    "lv": "Deszcz przestaje padać.",
    "level": "Sätze"
  },
  {
    "de": "Die Sonne scheint wieder.",
    "lv": "Znowu świeci słońce.",
    "level": "Sätze"
  },
  {
    "de": "Es ist sehr warm.",
    "lv": "Jest bardzo gorąco.",
    "level": "Sätze"
  },
  {
    "de": "Es sieht nach Regen aus.",
    "lv": "Wygląda na to, że będzie padać.",
    "level": "Sätze"
  },
  {
    "de": "Wir bekommen gleich ein Gewitter.",
    "lv": "Zaraz rozpęta się burza.",
    "level": "Sätze"
  },
  {
    "de": "Das Gewitter zieht vorüber.",
    "lv": "Burza minęła.",
    "level": "Sätze"
  },
  {
    "de": "Die Wolken verziehen sich.",
    "lv": "Chmury się rozpraszają.",
    "level": "Sätze"
  },
  {
    "de": "Siehst du den Regenbogen?",
    "lv": "Widzisz tęczę?",
    "level": "Sätze"
  },
  {
    "de": "Der Winter ist da, es hat geschneit.",
    "lv": "Nadeszła zima, w nocy padał śnieg.",
    "level": "Sätze"
  },
  {
    "de": "Es schneit.",
    "lv": "Pada śnieg.",
    "level": "Sätze"
  },
  {
    "de": "Wie schön ist es im Wald im Winter!",
    "lv": "Jak pięknie jest w lesie zimą!",
    "level": "Sätze"
  },
  {
    "de": "Mir ist kalt, ich friere.",
    "lv": "Jest mi zimno, marznę.",
    "level": "Sätze"
  },
  {
    "de": "Draußen ist Glatteis, pass auf!",
    "lv": "Na zewnątrz jest ślisko, uważajcie!",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir auf die Eisbahn gehen?",
    "lv": "Może pójdziemy na łyżwy?",
    "level": "Sätze"
  },
  {
    "de": "Zieh die Jacke an, du kannst dich erkälten.",
    "lv": "Załóż kurtkę, bo możesz się przeziębić.",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb sieben.",
    "lv": "Jest wpół do siódmej.",
    "level": "Sätze"
  },
  {
    "de": "Meine Uhr geht fünf Minuten vor.",
    "lv": "Mój zegarek śpieszy się pięć minut.",
    "level": "Sätze"
  },
  {
    "de": "Weck mich morgen früh um sieben Uhr!",
    "lv": "Obudź mnie jutro o siódmej!",
    "level": "Sätze"
  },
  {
    "de": "Was ist heute für ein Datum?",
    "lv": "Jaka jest dzisiaj data?",
    "level": "Sätze"
  },
  {
    "de": "Heute ist der elfte Juli.",
    "lv": "Dziś jest jedenasty lipca.",
    "level": "Sätze"
  },
  {
    "de": "Was machst du gewöhnlich am Abend?",
    "lv": "Co zwykle robisz wieczorami?",
    "level": "Sätze"
  },
  {
    "de": "Es ist schon lange her, dass wir uns gesehen haben.",
    "lv": "Nie spotykaliśmy się przez długi czas.",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es dir?",
    "lv": "Jak się masz",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, ich möchte etwas mit dir besprechen.",
    "lv": "Przepraszam, chcę z tobą o czymś porozmawiać.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir spazieren!",
    "lv": "Chodźmy na spacer!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Lust, mit mir in den Park zu gehen?",
    "lv": "Chcesz iść ze mną do parku?",
    "level": "Sätze"
  },
  {
    "de": "Ich komme, um dich zum Spaziergang abzuholen.",
    "lv": "Przyszedłem zabrać cię na spacer.",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte etwas langsamer, ich kann dir nicht folgen!",
    "lv": "Jedź trochę wolniej, nie nadążam za tobą!",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zum ersten Mal in dieser Gegend.",
    "lv": "Jestem tu po raz pierwszy.",
    "level": "Sätze"
  },
  {
    "de": "Ruhen wir uns ein wenig aus.",
    "lv": "Odpocznijmy trochę.",
    "level": "Sätze"
  },
  {
    "de": "Jetzt können wir zurückgehen.",
    "lv": "Teraz możemy wrócić.",
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
    "lv": "Która ścieżka jest najkrótsza?",
    "level": "Sätze"
  },
  {
    "de": "Geh hier die zweite Straße links und dann immer geradeaus.",
    "lv": "Tutaj skręć w drugą ulicę w lewo i jedź prosto.",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich am schnellsten zum Bahnhof?",
    "lv": "Jak szybciej dotrzeć na stację?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe vor, morgen zu verreisen.",
    "lv": "Zamierzam wyjechać jutro.",
    "level": "Sätze"
  },
  {
    "de": "Wohin willst du fahren?",
    "lv": "Gdzie chcesz iść?",
    "level": "Sätze"
  },
  {
    "de": "Reist du geschäftlich oder privat?",
    "lv": "Podróżujesz w celach zawodowych lub rekreacyjnych?",
    "level": "Sätze"
  },
  {
    "de": "Finn fährt bis Berlin mit, dann geht er ans Meer.",
    "lv": "Finn jedzie do Berlina, potem pojedzie nad morze.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt das Schiff ab?",
    "lv": "Kiedy statek odpływa?",
    "level": "Sätze"
  },
  {
    "de": "In einer halben Stunde.",
    "lv": "Po pół godzinie.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich noch eine Kabine bekommen?",
    "lv": "Czy nadal mogę dostać kabinę?",
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
    "lv": "Proszę zadzwonić po taksówkę, inaczej spóźnię się na pociąg!",
    "level": "Sätze"
  },
  {
    "de": "Fahr bitte zum Bahnhof!",
    "lv": "Proszę, zabierz mnie na stację!",
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
    "lv": "Poproszę jeden bilet do Kolonii.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt der Zug ab?",
    "lv": "Kiedy odjeżdża pociąg?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt gleich ab.",
    "lv": "Pociąg wkrótce odjeżdża.",
    "level": "Sätze"
  },
  {
    "de": "Muss ich in Koblenz umsteigen?",
    "lv": "Czy muszę zmieniać miejsce w Koblencji?",
    "level": "Sätze"
  },
  {
    "de": "Ja, dort musst du umsteigen.",
    "lv": "Tak, musisz tam zmienić miejsce.",
    "level": "Sätze"
  },
  {
    "de": "Ist dieser Platz frei?",
    "lv": "Czy to miejsce jest dostępne?",
    "level": "Sätze"
  },
  {
    "de": "Nein, hier sitzt niemand.",
    "lv": "Nie, nikt tu nie siedzi.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der Bahnsteigkartenautomat?",
    "lv": "Gdzie jest automat biletowy na peronie?",
    "level": "Sätze"
  },
  {
    "de": "Stell mein Handgepäck ins Gepäcknetz.",
    "lv": "Umieść mój bagaż podręczny w siatce.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das Fenster aufmachen?",
    "lv": "Czy mogę otworzyć okno?",
    "level": "Sätze"
  },
  {
    "de": "Es zieht, schließ bitte das Fenster!",
    "lv": "Proszę przejść, proszę zamknąć okno!",
    "level": "Sätze"
  },
  {
    "de": "Welche ist die nächste Station?",
    "lv": "Jaki jest następny przystanek?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange hält der Zug?",
    "lv": "Jak długo stoi pociąg?",
    "level": "Sätze"
  },
  {
    "de": "Wo muss ich umsteigen?",
    "lv": "Gdzie mam się przenieść?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug hat Verspätung.",
    "lv": "Pociąg się spóźnia.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Wagen ist für Nichtraucher.",
    "lv": "W tym wagonie obowiązuje zakaz palenia.",
    "level": "Sätze"
  },
  {
    "de": "Wir fahren jetzt über die Grenze.",
    "lv": "Teraz jedziemy przez granicę.",
    "level": "Sätze"
  },
  {
    "de": "Hast du etwas zu verzollen?",
    "lv": "Czy masz coś do oczyszczenia?",
    "level": "Sätze"
  },
  {
    "de": "Wir sind in Berlin angekommen.",
    "lv": "Dotarliśmy do Berlina.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir ein gutes Hotel empfehlen?",
    "lv": "Czy możecie polecić dobry hotel?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie freie Zimmer?",
    "lv": "Czy masz wolne pokoje?",
    "level": "Sätze"
  },
  {
    "de": "Ein Zimmer mit zwei Betten, bitte.",
    "lv": "Proszę pokój z dwoma łóżkami.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Zimmer pro Nacht?",
    "lv": "Ile kosztuje pokój za noc?",
    "level": "Sätze"
  },
  {
    "de": "Morgen reise ich ab. Weck mich um sieben Uhr!",
    "lv": "Wyjeżdżam jutro. Obudź mnie o siódmej!",
    "level": "Sätze"
  },
  {
    "de": "Die Rechnung, bitte!",
    "lv": "Billu, proszę!",
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
    "lv": "Pójdziemy razem zjeść?",
    "level": "Sätze"
  },
  {
    "de": "Kellner, die Speisekarte, bitte!",
    "lv": "Kelnerzy, menu, proszę!",
    "level": "Sätze"
  },
  {
    "de": "Ist der Fisch frisch?",
    "lv": "Czy ryba jest świeża?",
    "level": "Sätze"
  },
  {
    "de": "Das schmeckt ausgezeichnet!",
    "lv": "Smakuje wspaniale!",
    "level": "Sätze"
  },
  {
    "de": "Kellner, zahlen bitte!",
    "lv": "Kelnerzy, proszę zapłacić!",
    "level": "Sätze"
  },
  {
    "de": "Ich gehe ins Café einen Kaffee trinken.",
    "lv": "Pójdę do kawiarni napić się kawy.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mitkommen?",
    "lv": "Chcesz przyjść?",
    "level": "Sätze"
  },
  {
    "de": "Eine Tasse Kaffee mit Milch, bitte!",
    "lv": "Poproszę filiżankę kawy z mlekiem!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneller, ich habe es eilig!",
    "lv": "Szybciej, proszę, muszę się spieszyć!",
    "level": "Sätze"
  },
  {
    "de": "Lass deinen Kaffee nicht kalt werden!",
    "lv": "Nie pozwól, aby kawa wystygła!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie etwas Erfrischendes?",
    "lv": "Masz coś orzeźwiającego?",
    "level": "Sätze"
  },
  {
    "de": "Eine Portion Eis, bitte!",
    "lv": "Poproszę porcję lodów!",
    "level": "Sätze"
  },
  {
    "de": "Heute Morgen habe ich einen Brief bekommen.",
    "lv": "Dziś rano otrzymałem list.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss ihm gleich schreiben.",
    "lv": "Muszę do niego teraz napisać.",
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
    "lv": "Przypomnij mi, żebym jutro podpisał!",
    "level": "Sätze"
  },
  {
    "de": "Werfen Sie bitte diesen Brief in den Briefkasten.",
    "lv": "Proszę wrzucić ten list do skrzynki pocztowej!",
    "level": "Sätze"
  },
  {
    "de": "Hallo, hier spricht Emma.",
    "lv": "Cześć, tu Emma.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich dich später anrufen?",
    "lv": "Czy mogę zadzwonić do ciebie później?",
    "level": "Sätze"
  },
  {
    "de": "Muss ich lange warten?",
    "lv": "Czy muszę długo czekać?",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneiden Sie mir die Haare.",
    "lv": "Proszę o obcięcie moich włosów.",
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
    "lv": "Zaczyna się o wpół do siódmej.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind ausverkauft.",
    "lv": "Wszystkie bilety zostały wyprzedane.",
    "level": "Sätze"
  },
  {
    "de": "Drei Karten, bitte!",
    "lv": "Proszę o trzy bilety!",
    "level": "Sätze"
  },
  {
    "de": "Wir lassen die Jacken in der Garderobe.",
    "lv": "Zostawmy kurtki w szafie.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schnell, der Vorhang geht gleich auf!",
    "lv": "Szybciej, proszę, kurtyna zaraz się otworzy!",
    "level": "Sätze"
  },
  {
    "de": "Der Vorhang fällt.",
    "lv": "Kurtyna opada.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dich zum Tanz bitten?",
    "lv": "Czy mogę poprosić cię do tańca?",
    "level": "Sätze"
  },
  {
    "de": "Wann ist eure Hochzeit?",
    "lv": "Kiedy jest twój ślub?",
    "level": "Sätze"
  },
  {
    "de": "Ich suche eine Wohnung.",
    "lv": "Szukam mieszkania.",
    "level": "Sätze"
  },
  {
    "de": "Ist in diesem Haus eine Wohnung frei?",
    "lv": "Czy w tym domu jest wolne mieszkanie?",
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
    "lv": "Dzisiaj się przeprowadzamy.",
    "level": "Sätze"
  },
  {
    "de": "Mia, pack die Sachen bitte in Kisten!",
    "lv": "Mia, proszę, spakuj rzeczy do pudełek!",
    "level": "Sätze"
  },
  {
    "de": "Hast du alles eingepackt?",
    "lv": "Czy wszystko jest już zapakowane?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe mit meinem Freund in Kontakt.",
    "lv": "Prowadzę korespondencję z kolegą.",
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
    "lv": "Cóż za piękny widok!",
    "level": "Sätze"
  },
  {
    "de": "Nun können wir alles wieder aufräumen.",
    "lv": "Teraz możemy wszystko złożyć w całość.",
    "level": "Sätze"
  },
  {
    "de": "Wie viele Zimmer habt ihr?",
    "lv": "Ile masz pokoi?",
    "level": "Sätze"
  },
  {
    "de": "Im Sommer fahre ich ans Meer.",
    "lv": "Latem pojadę nad morze.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du schwimmen?",
    "lv": "Czy umie Pan pływać",
    "level": "Sätze"
  },
  {
    "de": "Schwimm nicht zu weit hinaus!",
    "lv": "Nie pływaj za daleko!",
    "level": "Sätze"
  },
  {
    "de": "Badest du jeden Tag?",
    "lv": "Czy pływasz codziennie?",
    "level": "Sätze"
  },
  {
    "de": "Bei schönem Wetter gehe ich angeln.",
    "lv": "Jeśli pogoda dopisze, jadę na ryby.",
    "level": "Sätze"
  },
  {
    "de": "Wie sieht er aus?",
    "lv": "Jak on wygląda?",
    "level": "Sätze"
  },
  {
    "de": "Er hat sich aber recht verändert.",
    "lv": "Jednak zmienił się całkiem sporo.",
    "level": "Sätze"
  },
  {
    "de": "Wie ist er als Mensch?",
    "lv": "Jaki jest jako osoba?",
    "level": "Sätze"
  },
  {
    "de": "Er ist immer nett und freundlich.",
    "lv": "Zawsze jest miły i miły.",
    "level": "Sätze"
  },
  {
    "de": "Ich fühle mich nicht wohl.",
    "lv": "Źle się czuję.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe starke Kopfschmerzen.",
    "lv": "Mam silny ból głowy.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe mich erkältet.",
    "lv": "Jestem przeziębiony.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Schnupfen.",
    "lv": "Mam katar.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist schwindlig.",
    "lv": "Mam zawroty głowy.",
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
    "lv": "Wczoraj miałam wysoką temperaturę.",
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
    "lv": "Czy wiesz, że Finn jest chory?",
    "level": "Sätze"
  },
  {
    "de": "Laut Arzt wird er bald wieder gesund.",
    "lv": "Według lekarza wkrótce wróci do zdrowia.",
    "level": "Sätze"
  },
  {
    "de": "Ich will meine Wohnung neu möblieren.",
    "lv": "Chcę odnowić mieszkanie.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das auf Raten kaufen?",
    "lv": "Czy mogę kupić na raty?",
    "level": "Sätze"
  },
  {
    "de": "Bleib im Bett, bis es dir besser geht!",
    "lv": "Pozostań w łóżku, aż poczujesz się lepiej!",
    "level": "Sätze"
  },
  {
    "de": "Noah hat in zwei Wochen schwimmen gelernt.",
    "lv": "Noah nauczył się pływać w ciągu dwóch tygodni.",
    "level": "Sätze"
  },
  {
    "de": "Sei mit dem Essen noch vorsichtig.",
    "lv": "Bądź ostrożny z jedzeniem.",
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
    "lv": "Od roku chodzę na lekcje języka niemieckiego.",
    "level": "Sätze"
  },
  {
    "de": "Ich suche immer Gelegenheit, Deutsch zu sprechen.",
    "lv": "Zawsze szukam okazji do rozmowy po niemiecku.",
    "level": "Sätze"
  },
  {
    "de": "Ist das Buch noch vorrätig?",
    "lv": "Czy ta książka jest nadal dostępna?",
    "level": "Sätze"
  },
  {
    "de": "Das Buch ist leider ausverkauft.",
    "lv": "Niestety książka jest wyprzedana.",
    "level": "Sätze"
  },
  {
    "de": "Wann erscheint die neue Auflage?",
    "lv": "Kiedy ukaże się nowe wydanie?",
    "level": "Sätze"
  },
  {
    "de": "Womit kann ich Ihnen helfen?",
    "lv": "Jak mogę pomóc?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie ganz frische Eier?",
    "lv": "Masz świeże jajka?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die?",
    "lv": "Ile kosztują?",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu teuer.",
    "lv": "To jest za drogie.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir ein halbes Kilo abwiegen?",
    "lv": "Czy możesz ważyć pół kilo?",
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
    "lv": "Proszę zważyć dwa kilogramy.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch Karotten?",
    "lv": "Czy Wy też macie marchewki?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie gutes Rindfleisch?",
    "lv": "Czy masz dobrą wołowinę?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir zwei Kilo Hackfleisch.",
    "lv": "Daj dwa kilogramy mięsa mielonego.",
    "level": "Sätze"
  },
  {
    "de": "Ein Laib Brot, bitte, aber nicht zu knusprig.",
    "lv": "Poproszę jeden bochenek chleba, ale nie za twardy.",
    "level": "Sätze"
  },
  {
    "de": "Das Brot ist frisch gebacken.",
    "lv": "Chleb jest świeżo upieczony.",
    "level": "Sätze"
  },
  {
    "de": "Was für Obst haben Sie heute?",
    "lv": "Jakie owoce masz dzisiaj?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die Äpfel?",
    "lv": "Ile kosztują jabłka?",
    "level": "Sätze"
  },
  {
    "de": "Dann nehme ich zwei Kilo Äpfel.",
    "lv": "Potem wezmę dwa kilogramy jabłek.",
    "level": "Sätze"
  },
  {
    "de": "Die Birnen sind sehr teuer.",
    "lv": "Gruszki są bardzo drogie.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir alles nach Hause liefern?",
    "lv": "Czy możesz dostarczyć wszystko do swojego domu?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie Reis?",
    "lv": "Czy masz ryż?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir bitte ein Kilo Reis.",
    "lv": "Proszę, daj mi kilogram ryżu.",
    "level": "Sätze"
  },
  {
    "de": "Danke, diesmal nicht.",
    "lv": "Dziękuję, nie tym razem.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet dieser Teppich?",
    "lv": "Ile kosztuje ten dywan?",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Möbel in meine Wohnung liefern?",
    "lv": "Czy istnieje możliwość dostarczenia mebli do mieszkania?",
    "level": "Sätze"
  },
  {
    "de": "Bitte an der Kasse zahlen.",
    "lv": "Proszę zapłacić w kasie.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, machen Sie die Rechnung.",
    "lv": "Proszę o wystawienie faktury.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Meter?",
    "lv": "Ile kosztuje metr?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Stoff gefällt mir.",
    "lv": "Uwielbiam tę tkaninę.",
    "level": "Sätze"
  },
  {
    "de": "Schneiden Sie mir bitte drei Meter ab.",
    "lv": "Proszę obciąć trzy metry.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch andere Muster?",
    "lv": "Czy masz inne próbki?",
    "level": "Sätze"
  },
  {
    "de": "Diese Farbe gefällt mir nicht.",
    "lv": "Nie podoba mi się ten kolor.",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir eine hellere.",
    "lv": "Daj jaśniejsze.",
    "level": "Sätze"
  },
  {
    "de": "Was kosten diese Socken?",
    "lv": "Ile kosztują te skarpetki?",
    "level": "Sätze"
  },
  {
    "de": "Welche Handschuhe wünschen Sie?",
    "lv": "Jakie chcesz rękawiczki?",
    "level": "Sätze"
  },
  {
    "de": "Die sind mir etwas zu eng.",
    "lv": "Są dla mnie trochę za ciasne.",
    "level": "Sätze"
  },
  {
    "de": "So, nun passen sie gut.",
    "lv": "Więc teraz działa dobrze.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir einen guten Schneider empfehlen?",
    "lv": "Czy możecie polecić dobrego krawca?",
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
    "lv": "Garnitur pasuje dobrze.",
    "level": "Sätze"
  },
  {
    "de": "Die Hose ist zu lang.",
    "lv": "Spodnie są za długie.",
    "level": "Sätze"
  },
  {
    "de": "Bitte reinigen und bügeln Sie ihn!",
    "lv": "Proszę wyczyścić i wyprasować!",
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
    "lv": "Czy możesz dzisiaj naprawić swoje buty?",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich die Schuhe abholen?",
    "lv": "Kiedy mogę przynieść buty?",
    "level": "Sätze"
  },
  {
    "de": "Meine Armbanduhr funktioniert nicht.",
    "lv": "Mój zegarek nie działa.",
    "level": "Sätze"
  },
  {
    "de": "Sie geht fünf Minuten vor.",
    "lv": "Jest pięć minut za wcześnie.",
    "level": "Sätze"
  },
  {
    "de": "Bist du kurzsichtig oder weitsichtig?",
    "lv": "Czy jesteś krótkowzroczny czy dalekowzroczny?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte eine Brille kaufen.",
    "lv": "Chcę kupić okulary.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie meine Brille reparieren?",
    "lv": "Czy możesz naprawić moje okulary?",
    "level": "Sätze"
  },
  {
    "de": "Das dauert nur eine Viertelstunde.",
    "lv": "To zajmie tylko piętnaście minut.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist mir zu hoch.",
    "lv": "Cena jest dla mnie za wysoka.",
    "level": "Sätze"
  },
  {
    "de": "Ich brauche zwei Fotos für meinen Pass.",
    "lv": "Potrzebuję dwóch zdjęć paszportowych.",
    "level": "Sätze"
  },
  {
    "de": "Bitte packen Sie es ein und schicken Sie es mir nach Hause.",
    "lv": "Proszę spakować i wysłać do domu.",
    "level": "Sätze"
  },
  {
    "de": "Wir haben feste Preise.",
    "lv": "Mamy stałe ceny.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, fotografieren Sie mich.",
    "lv": "Proszę, zrób mi zdjęcie.",
    "level": "Sätze"
  },
  {
    "de": "Setzen Sie sich, schauen Sie gerade in die Kamera und bewegen Sie sich nicht!",
    "lv": "Usiądź, spójrz prosto w kamerę i nie ruszaj się!",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich das Probebild sehen?",
    "lv": "Kiedy mogę zobaczyć próbkę?",
    "level": "Sätze"
  },
  {
    "de": "Wann sind die Fotos fertig?",
    "lv": "Kiedy zdjęcia będą gotowe?",
    "level": "Sätze"
  },
  {
    "de": "Die Aufnahme ist gelungen.",
    "lv": "Zdjęcie się udało.",
    "level": "Sätze"
  },
  {
    "de": "Die Fotos sind gut geworden.",
    "lv": "Zdjęcia wyszły dobrze.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie das Foto auch vergrößern?",
    "lv": "Czy możesz także powiększyć zdjęcie?",
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
    "lv": "Pokaż mi obrączki, proszę.",
    "level": "Sätze"
  },
  {
    "de": "Der Ring ist mir etwas zu weit.",
    "lv": "Pierścionek jest dla mnie trochę za duży.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann ihn enger machen.",
    "lv": "Mogę to zawęzić.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Ring passt mir.",
    "lv": "Ten pierścionek mi odpowiada.",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir schöne Geschenkideen.",
    "lv": "Zaprezentuj piękne pomysły na prezenty.",
    "level": "Sätze"
  },
  {
    "de": "Wie gefallen dir diese Ohrringe?",
    "lv": "Jak podobają Wam się te kolczyki?",
    "level": "Sätze"
  },
  {
    "de": "Diese Brosche ist wirklich schön.",
    "lv": "Ta broszka jest bardzo piękna.",
    "level": "Sätze"
  },
  {
    "de": "Der Stein ist ein Saphir.",
    "lv": "Ten kamień to szafir.",
    "level": "Sätze"
  },
  {
    "de": "Das ist kein echter Stein, das ist Glas.",
    "lv": "To nie jest prawdziwy kamień, to jest szkło.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Armband kann ich Ihnen besonders empfehlen.",
    "lv": "Szczególnie mogę polecić tę bransoletkę.",
    "level": "Sätze"
  },
  {
    "de": "Es ist besonders schön gearbeitet.",
    "lv": "Jest niezwykle precyzyjnie wykonany.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist nicht hoch.",
    "lv": "Cena nie jest wysoka.",
    "level": "Sätze"
  },
  {
    "de": "Bekomme ich die Schachtel gratis?",
    "lv": "Czy dostałem pudełko za darmo?",
    "level": "Sätze"
  },
  {
    "de": "Alle Schmuckstücke sind gestempelt.",
    "lv": "Cała biżuteria jest stemplowana.",
    "level": "Sätze"
  },
  {
    "de": "Falls es meiner Frau nicht gefällt, kann ich es umtauschen?",
    "lv": "Jeśli mojej żonie się to nie podoba, czy mogę to wymienić?",
    "level": "Sätze"
  },
  {
    "de": "Natürlich, jederzeit.",
    "lv": "Oczywiście, że kiedykolwiek.",
    "level": "Sätze"
  }
];

window.SENTENCE_ENTRIES = SENTENCE_ENTRIES;

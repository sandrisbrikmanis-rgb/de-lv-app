const SENTENCE_ENTRIES = [
  {
    "de": "Hüte dich davor!",
    "lv": "Пази се от това!",
    "level": "Sätze"
  },
  {
    "de": "Wenn nichts dazwischenkommt.",
    "lv": "Ако нищо не попречи. • Ако всичко върви по план.",
    "level": "Sätze"
  },
  {
    "de": "Das kann ich mir denken!",
    "lv": "Мога да си представя!",
    "level": "Sätze"
  },
  {
    "de": "Ist er denn krank?",
    "lv": "Нима е болен?",
    "level": "Sätze"
  },
  {
    "de": "Was denn?",
    "lv": "Какво има?",
    "level": "Sätze"
  },
  {
    "de": "Desto mehr.",
    "lv": "Толкова повече.",
    "level": "Sätze"
  },
  {
    "de": "Je mehr, desto besser.",
    "lv": "Колкото повече, толкова по-добре.",
    "level": "Sätze"
  },
  {
    "de": "Alles deutet auf Regen.",
    "lv": "Всичко показва, че ще вали.",
    "level": "Sätze"
  },
  {
    "de": "Damit ist mir wenig gedient.",
    "lv": "От това нямам голяма полза.",
    "level": "Sätze"
  },
  {
    "de": "Er ist dienstlich verhindert.",
    "lv": "Не може да дойде по служебни причини.",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie doch!",
    "lv": "Хайде, говорете!",
    "level": "Sätze"
  },
  {
    "de": "Es donnert.",
    "lv": "Гърми.",
    "level": "Sätze"
  },
  {
    "de": "Doppelt so groß.",
    "lv": "Два пъти по-голям.",
    "level": "Sätze"
  },
  {
    "de": "Von dort.",
    "lv": "Оттам.",
    "level": "Sätze"
  },
  {
    "de": "Die Zeit drängt.",
    "lv": "Времето не чака.",
    "level": "Sätze"
  },
  {
    "de": "Ihn drücken Sorgen.",
    "lv": "Грижите го потискат.",
    "level": "Sätze"
  },
  {
    "de": "Hast du das Buch durchgearbeitet?",
    "lv": "Проучи ли подробно книгата?",
    "level": "Sätze"
  },
  {
    "de": "Kein Durchgang!",
    "lv": "Минаването забранено!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich Sie bitten?",
    "lv": "Може ли да Ви помоля?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin durstig.",
    "lv": "Жаден съм.",
    "level": "Sätze"
  },
  {
    "de": "Eben das meine ich.",
    "lv": "Точно това имам предвид.",
    "level": "Sätze"
  },
  {
    "de": "Es ist ganz egal.",
    "lv": "Няма никакво значение.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie eigentlich?",
    "lv": "Всъщност какво искате?",
    "level": "Sätze"
  },
  {
    "de": "Eilt es mit dieser Sache?",
    "lv": "Спешен ли е този въпрос?",
    "level": "Sätze"
  },
  {
    "de": "Eilt sehr!",
    "lv": "Много спешно!",
    "level": "Sätze"
  },
  {
    "de": "Ich habe es eilig.",
    "lv": "Бързам.",
    "level": "Sätze"
  },
  {
    "de": "Du bildest dir nur ein, krank zu sein.",
    "lv": "Само си въобразяваш, че си болен.",
    "level": "Sätze"
  },
  {
    "de": "Was fällt dir ein?",
    "lv": "Какво си позволяваш? • Какво ти идва наум?",
    "level": "Sätze"
  },
  {
    "de": "Es war einmal.",
    "lv": "Имало едно време.",
    "level": "Sätze"
  },
  {
    "de": "Steigen Sie bitte ein!",
    "lv": "Качете се, моля!",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie ein!",
    "lv": "Влезте!",
    "level": "Sätze"
  },
  {
    "de": "Einzelnes hat mir dort gefallen.",
    "lv": "Някои неща там ми харесаха.",
    "level": "Sätze"
  },
  {
    "de": "Es empfiehlt sich.",
    "lv": "Препоръчително е.",
    "level": "Sätze"
  },
  {
    "de": "Diese Flasche enthält Essig.",
    "lv": "В тази бутилка има оцет.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldigen Sie bitte!",
    "lv": "Извинете, моля!",
    "level": "Sätze"
  },
  {
    "de": "Entweder ... oder ...",
    "lv": "Или... или...",
    "level": "Sätze"
  },
  {
    "de": "Wer war der Erste?",
    "lv": "Кой беше първи?",
    "level": "Sätze"
  },
  {
    "de": "Wer fehlt heute?",
    "lv": "Кой отсъства днес?",
    "level": "Sätze"
  },
  {
    "de": "Was fehlt dir?",
    "lv": "Какво ти е?",
    "level": "Sätze"
  },
  {
    "de": "Wie heißen Sie?",
    "lv": "Как се казвате?",
    "level": "Sätze"
  },
  {
    "de": "Was soll das heißen?",
    "lv": "Какво значи това?",
    "level": "Sätze"
  },
  {
    "de": "Bitte treten Sie näher heran!",
    "lv": "Моля, приближете се!",
    "level": "Sätze"
  },
  {
    "de": "Heraus mit der Sprache!",
    "lv": "Казвай! • Разказвай!",
    "level": "Sätze"
  },
  {
    "de": "im Herbst",
    "lv": "през есента",
    "level": "Sätze"
  },
  {
    "de": "Meine Herrschaften!",
    "lv": "Дами и господа!",
    "level": "Sätze"
  },
  {
    "de": "von heute an",
    "lv": "от днес нататък",
    "level": "Sätze"
  },
  {
    "de": "heute früh",
    "lv": "тази сутрин",
    "level": "Sätze"
  },
  {
    "de": "heute Nacht",
    "lv": "тази нощ",
    "level": "Sätze"
  },
  {
    "de": "Zu Hilfe!",
    "lv": "Помощ!",
    "level": "Sätze"
  },
  {
    "de": "Ich lerne jeden Tag Deutsch.",
    "lv": "Всеки ден уча немски.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das bitte wiederholen?",
    "lv": "Можеш ли, моля, да го повториш?",
    "level": "Sätze"
  },
  {
    "de": "Wir treffen uns am Bahnhof.",
    "lv": "Срещаме се на гарата.",
    "level": "Sätze"
  },
  {
    "de": "Ich stimme dir teilweise zu.",
    "lv": "Отчасти съм съгласен с теб.",
    "level": "Sätze"
  },
  {
    "de": "Diese Entscheidung hat weitreichende Folgen.",
    "lv": "Това решение има далечни последици.",
    "level": "Sätze"
  },
  {
    "de": "Man sollte mehrere Perspektiven berücksichtigen.",
    "lv": "Би трябвало да се вземат предвид няколко гледни точки.",
    "level": "Sätze"
  },
  {
    "de": "Könnten Sie das näher erläutern?",
    "lv": "Бихте ли обяснили това по-подробно?",
    "level": "Sätze"
  },
  {
    "de": "Was mich anbelangt, ...",
    "lv": "Що се отнася до мен,...",
    "level": "Sätze"
  },
  {
    "de": "Wie alt sind Sie?",
    "lv": "На колко години сте?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zwanzig Jahre alt.",
    "lv": "На двадесет години съм.",
    "level": "Sätze"
  },
  {
    "de": "Von heute an.",
    "lv": "От днес.",
    "level": "Sätze"
  },
  {
    "de": "Von jetzt an.",
    "lv": "Отсега нататък.",
    "level": "Sätze"
  },
  {
    "de": "Anders geht es nicht.",
    "lv": "Иначе не може.",
    "level": "Sätze"
  },
  {
    "de": "Rufen Sie mich an.",
    "lv": "Обадете ми се.",
    "level": "Sätze"
  },
  {
    "de": "Bitte stellen Sie das Radio ab.",
    "lv": "Моля, изключете радиото.",
    "level": "Sätze"
  },
  {
    "de": "Achte bitte auf den Verkehr.",
    "lv": "Внимавай, моля, за движението.",
    "level": "Sätze"
  },
  {
    "de": "Darauf musst du achten.",
    "lv": "На това трябва да обърнеш внимание.",
    "level": "Sätze"
  },
  {
    "de": "Heute mache ich es anders.",
    "lv": "Днес ще го направя по друг начин.",
    "level": "Sätze"
  },
  {
    "de": "Wir warten auf den Bus.",
    "lv": "Чакаме автобуса.",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt allein.",
    "lv": "Живее сам.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Ausbildung absolviert.",
    "lv": "Завърших обучението си. • Завърших образованието си.",
    "level": "Sätze"
  },
  {
    "de": "Ich warte den Regen ab.",
    "lv": "Ще изчакам да спре дъждът.",
    "level": "Sätze"
  },
  {
    "de": "Er arbeitet in der Verkaufsabteilung.",
    "lv": "Работи в отдела за продажби.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin allergisch gegen Katzen.",
    "lv": "Имам алергия към котки.",
    "level": "Sätze"
  },
  {
    "de": "Andererseits verstehe ich ihn.",
    "lv": "От друга страна, аз го разбирам.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Situation analysiert.",
    "lv": "Анализирах положението.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat meinen Vorschlag akzeptiert.",
    "lv": "Тя прие предложението ми.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte das genauer analysieren.",
    "lv": "Бих искал да анализирам това по-подробно.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte den Vertrag ändern.",
    "lv": "Бих искал да променя договора.",
    "level": "Sätze"
  },
  {
    "de": "Er ändert ständig seine Meinung.",
    "lv": "Постоянно променя мнението си.",
    "level": "Sätze"
  },
  {
    "de": "Ähnliche Probleme hatten wir schon früher.",
    "lv": "И преди сме имали подобни проблеми.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ahnung!",
    "lv": "Нямам представа!",
    "level": "Sätze"
  },
  {
    "de": "Hör auf zu jammern.",
    "lv": "Престани да хленчиш.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Kleid ist stilvoll und konservativ.",
    "lv": "Тази рокля е елегантна и класическа.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre gerne Akkordeonmusik.",
    "lv": "Обичам да слушам музика на акордеон.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das Gerät anklicken?",
    "lv": "Можеш ли да щракнеш върху устройството?",
    "level": "Sätze"
  },
  {
    "de": "Bitte öffne die Datei und klicke darauf.",
    "lv": "Моля, отвори файла и щракни върху него.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe einen Unfall gehabt.",
    "lv": "Претърпях злополука.",
    "level": "Sätze"
  },
  {
    "de": "Wir laufen zum Bahnhof.",
    "lv": "Отиваме пеша до гарата.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schalte den Fernseher an.",
    "lv": "Моля, включи телевизора.",
    "level": "Sätze"
  },
  {
    "de": "Mein Computer ist abgestürzt.",
    "lv": "Компютърът ми блокира.",
    "level": "Sätze"
  },
  {
    "de": "Am Wochenende gehe ich angeln.",
    "lv": "През почивните дни ще отида на риболов.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe den Anruf verpasst.",
    "lv": "Пропуснах обаждането.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mich später anrufen?",
    "lv": "Можеш ли да ми се обадиш по-късно?",
    "level": "Sätze"
  },
  {
    "de": "Bitte nimm meinen Vorschlag an.",
    "lv": "Моля, приеми предложението ми.",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme dein Angebot an.",
    "lv": "Приемам предложението ти.",
    "level": "Sätze"
  },
  {
    "de": "Er nahm die Einladung an.",
    "lv": "Той прие поканата.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Angst vor Spinnen.",
    "lv": "Страх ме е от паяци.",
    "level": "Sätze"
  },
  {
    "de": "Keine Angst, alles wird gut.",
    "lv": "Не се бой, всичко ще бъде наред.",
    "level": "Sätze"
  },
  {
    "de": "Anklang finden.",
    "lv": "Намирам отзвук. • Срещам одобрение.",
    "level": "Sätze"
  },
  {
    "de": "Es kommt darauf an.",
    "lv": "Зависи.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Anlass.",
    "lv": "По този повод.",
    "level": "Sätze"
  },
  {
    "de": "Nehmen wir an, dass ...",
    "lv": "Да предположим, че...",
    "level": "Sätze"
  },
  {
    "de": "Was hast du da angerichtet?",
    "lv": "Каква беля си направил?",
    "level": "Sätze"
  },
  {
    "de": "Bis ans Ende.",
    "lv": "До края.",
    "level": "Sätze"
  },
  {
    "de": "Du glaubst mir anscheinend nicht.",
    "lv": "Явно не ми вярваш.",
    "level": "Sätze"
  },
  {
    "de": "Meiner Ansicht nach ...",
    "lv": "Според мен...",
    "level": "Sätze"
  },
  {
    "de": "Stell dich nicht so an!",
    "lv": "Не прави такива сцени!",
    "level": "Sätze"
  },
  {
    "de": "An die Arbeit gehen.",
    "lv": "Захващам се за работа.",
    "level": "Sätze"
  },
  {
    "de": "Außer Atem sein.",
    "lv": "Задъхан съм.",
    "level": "Sätze"
  },
  {
    "de": "Guten Appetit!",
    "lv": "Добър апетит!",
    "level": "Sätze"
  },
  {
    "de": "In einem Atemzug.",
    "lv": "На един дъх.",
    "level": "Sätze"
  },
  {
    "de": "Auf jeden Fall.",
    "lv": "Във всеки случай.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal war alles still.",
    "lv": "Изведнъж всичко утихна.",
    "level": "Sätze"
  },
  {
    "de": "Bitte mach die Tür auf!",
    "lv": "Моля, отвори вратата!",
    "level": "Sätze"
  },
  {
    "de": "Er hat den Kredit aufgenommen.",
    "lv": "Той изтегли кредит.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen heute aufräumen.",
    "lv": "Днес трябва да разтребим.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre jetzt auf.",
    "lv": "Сега спирам.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schon auf.",
    "lv": "Той вече е станал.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen das Treffen verschieben.",
    "lv": "Трябва да отложим срещата.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat mich aufgeregt.",
    "lv": "Тя ме ядоса.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal.",
    "lv": "Изведнъж.",
    "level": "Sätze"
  },
  {
    "de": "Auf der Stelle.",
    "lv": "Веднага.",
    "level": "Sätze"
  },
  {
    "de": "Für den Schaden aufkommen.",
    "lv": "Покривам щетите.",
    "level": "Sätze"
  },
  {
    "de": "Bitte die Tür auf!",
    "lv": "Моля, отворете вратата!",
    "level": "Sätze"
  },
  {
    "de": "Aufrecht sitzen.",
    "lv": "Седя изправен.",
    "level": "Sätze"
  },
  {
    "de": "Er ist auf.",
    "lv": "Той е станал.",
    "level": "Sätze"
  },
  {
    "de": "Alle Kräfte aufwenden.",
    "lv": "Полагам всички сили.",
    "level": "Sätze"
  },
  {
    "de": "Viel Mühe aufwenden.",
    "lv": "Полагам много усилия.",
    "level": "Sätze"
  },
  {
    "de": "Geh mir aus den Augen!",
    "lv": "Махай се от очите ми!",
    "level": "Sätze"
  },
  {
    "de": "Unter vier Augen.",
    "lv": "Насаме.",
    "level": "Sätze"
  },
  {
    "de": "Aus Mangel an Zeit.",
    "lv": "Поради липса на време.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Grunde.",
    "lv": "По тази причина.",
    "level": "Sätze"
  },
  {
    "de": "Alle außer dir.",
    "lv": "Всички освен теб.",
    "level": "Sätze"
  },
  {
    "de": "Auf Äußerlichkeiten Wert legen.",
    "lv": "Отдавам значение на външния вид.",
    "level": "Sätze"
  },
  {
    "de": "Im äußersten Fall.",
    "lv": "В най-лошия случай.",
    "level": "Sätze"
  },
  {
    "de": "Äußerst wichtig.",
    "lv": "Изключително важен.",
    "level": "Sätze"
  },
  {
    "de": "Aussicht auf die See.",
    "lv": "Изглед към морето.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gute Aussichten.",
    "lv": "Той има добри перспективи.",
    "level": "Sätze"
  },
  {
    "de": "Wie wird dieses Wort ausgesprochen?",
    "lv": "Как се произнася тази дума?",
    "level": "Sätze"
  },
  {
    "de": "Sein Beileid aussprechen.",
    "lv": "Изказвам съболезнованията си.",
    "level": "Sätze"
  },
  {
    "de": "Wann wurden die Meisterschaftskämpfe ausgetragen?",
    "lv": "Кога се проведе първенството?",
    "level": "Sätze"
  },
  {
    "de": "Welchen Beruf üben Sie aus?",
    "lv": "Каква е Вашата професия?",
    "level": "Sätze"
  },
  {
    "de": "Einfluss ausüben.",
    "lv": "Оказвам влияние.",
    "level": "Sätze"
  },
  {
    "de": "Auswärts essen.",
    "lv": "Храня се навън.",
    "level": "Sätze"
  },
  {
    "de": "Per Bahn.",
    "lv": "По железопътен път.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Bahn.",
    "lv": "С влак.",
    "level": "Sätze"
  },
  {
    "de": "Möglichst bald.",
    "lv": "Колкото може по-скоро.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist Angst und bange.",
    "lv": "Много ме е страх.",
    "level": "Sätze"
  },
  {
    "de": "Auf die lange Bank schieben.",
    "lv": "Отлагам за неопределено време. • Протакам.",
    "level": "Sätze"
  },
  {
    "de": "Bar zahlen.",
    "lv": "Плащам в брой.",
    "level": "Sätze"
  },
  {
    "de": "Erz bauen.",
    "lv": "Добивам руда.",
    "level": "Sätze"
  },
  {
    "de": "Mist bauen.",
    "lv": "Правя бели.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin beauftragt.",
    "lv": "Възложено ми е.",
    "level": "Sätze"
  },
  {
    "de": "Nach Bedarf.",
    "lv": "При нужда.",
    "level": "Sätze"
  },
  {
    "de": "Ich bedauere ihn.",
    "lv": "Съжалявам го.",
    "level": "Sätze"
  },
  {
    "de": "Was bedeutet dieses Wort?",
    "lv": "Какво означава тази дума?",
    "level": "Sätze"
  },
  {
    "de": "Unter der Bedingung, dass ...",
    "lv": "При условие че...",
    "level": "Sätze"
  },
  {
    "de": "Sie sieht bedrückt aus.",
    "lv": "Тя изглежда потисната.",
    "level": "Sätze"
  },
  {
    "de": "Hinweise befolgen.",
    "lv": "Следвам указанията.",
    "level": "Sätze"
  },
  {
    "de": "Befehle befolgen.",
    "lv": "Изпълнявам заповеди.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Post befördern.",
    "lv": "Изпращам по пощата.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin begierig zu wissen.",
    "lv": "Много искам да зная.",
    "level": "Sätze"
  },
  {
    "de": "Zu Beginn.",
    "lv": "В началото.",
    "level": "Sätze"
  },
  {
    "de": "Am Beginn.",
    "lv": "В началото.",
    "level": "Sätze"
  },
  {
    "de": "Bei Beginn.",
    "lv": "При започването.",
    "level": "Sätze"
  },
  {
    "de": "In Begleitung.",
    "lv": "Придружен.",
    "level": "Sätze"
  },
  {
    "de": "Mit seiner Begleitung.",
    "lv": "С придружителя си.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schwer von Begriff.",
    "lv": "Той трудно схваща. • Той е бавен в мисленето.",
    "level": "Sätze"
  },
  {
    "de": "Im Gedächtnis behalten.",
    "lv": "Запомням. • Запазвам в паметта си.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tisch.",
    "lv": "На масата.",
    "level": "Sätze"
  },
  {
    "de": "Bei Sinnen sein.",
    "lv": "Със здрав разсъдък съм.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tage.",
    "lv": "През деня.",
    "level": "Sätze"
  },
  {
    "de": "Bei weitem nicht so.",
    "lv": "Далеч не толкова.",
    "level": "Sätze"
  },
  {
    "de": "Alle beide.",
    "lv": "И двамата.",
    "level": "Sätze"
  },
  {
    "de": "Stürmischer Beifall brach los.",
    "lv": "Избухнаха бурни аплодисменти.",
    "level": "Sätze"
  },
  {
    "de": "Beifall finden.",
    "lv": "Срещам одобрение.",
    "level": "Sätze"
  },
  {
    "de": "Beileid aussprechen.",
    "lv": "Изказвам съболезнования.",
    "level": "Sätze"
  },
  {
    "de": "Auf eigenen Beinen stehen.",
    "lv": "Стоя на собствените си крака.",
    "level": "Sätze"
  },
  {
    "de": "Zum Beispiel.",
    "lv": "Например.",
    "level": "Sätze"
  },
  {
    "de": "Beistand leisten.",
    "lv": "Помагам. • Оказвам помощ.",
    "level": "Sätze"
  },
  {
    "de": "Beitrag leisten.",
    "lv": "Давам своя принос.",
    "level": "Sätze"
  },
  {
    "de": "Jemandes Bekanntschaft machen.",
    "lv": "Запознавам се с някого.",
    "level": "Sätze"
  },
  {
    "de": "Bekanntschaft anknüpfen.",
    "lv": "Запознавам се. • Създавам контакт.",
    "level": "Sätze"
  },
  {
    "de": "Belegte Brötchen.",
    "lv": "Сандвичи.",
    "level": "Sätze"
  },
  {
    "de": "Nach Ihrem Belieben.",
    "lv": "По Ваше желание.",
    "level": "Sätze"
  },
  {
    "de": "Zu jeder beliebigen Zeit.",
    "lv": "По всяко време.",
    "level": "Sätze"
  },
  {
    "de": "Schweigen beobachten.",
    "lv": "Пазя тишина.",
    "level": "Sätze"
  },
  {
    "de": "Zur Bequemlichkeit.",
    "lv": "За удобство.",
    "level": "Sätze"
  },
  {
    "de": "Bereit sein.",
    "lv": "Готов съм. • Съгласен съм.",
    "level": "Sätze"
  },
  {
    "de": "Unfallopfer bergen.",
    "lv": "Спасявам пострадалите при злополука.",
    "level": "Sätze"
  },
  {
    "de": "Bericht erstatten.",
    "lv": "Докладвам. • Представям доклад.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind besetzt.",
    "lv": "Всички места са заети.",
    "level": "Sätze"
  },
  {
    "de": "Neue Besen kehren gut.",
    "lv": "Нова метла чисто мете.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt ein Haus.",
    "lv": "Той притежава къща.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt viel Mut.",
    "lv": "Той притежава голяма смелост.",
    "level": "Sätze"
  },
  {
    "de": "Desto besser.",
    "lv": "Толкова по-добре.",
    "level": "Sätze"
  },
  {
    "de": "Gute Besserung!",
    "lv": "Бързо оздравяване!",
    "level": "Sätze"
  },
  {
    "de": "Beim besten Willen.",
    "lv": "При цялото си желание.",
    "level": "Sätze"
  },
  {
    "de": "Am besten.",
    "lv": "Най-добре.",
    "level": "Sätze"
  },
  {
    "de": "Es besteht Zweifel.",
    "lv": "Съществува съмнение.",
    "level": "Sätze"
  },
  {
    "de": "Seine Aufgabe besteht darin ...",
    "lv": "Задачата му се състои в това да...",
    "level": "Sätze"
  },
  {
    "de": "Grüße bestellen.",
    "lv": "Предавам поздрави.",
    "level": "Sätze"
  },
  {
    "de": "Ganz bestimmt.",
    "lv": "Със сигурност.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch kommen.",
    "lv": "Идвам на гости.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch sein.",
    "lv": "На гости съм. • Гостувам.",
    "level": "Sätze"
  },
  {
    "de": "Oft Konzerte besuchen.",
    "lv": "Често ходя на концерти.",
    "level": "Sätze"
  },
  {
    "de": "Welche Schule hat er besucht?",
    "lv": "В кое училище е учил?",
    "level": "Sätze"
  },
  {
    "de": "In Betracht ziehen.",
    "lv": "Вземам предвид. • Обмислям.",
    "level": "Sätze"
  },
  {
    "de": "Außer Betracht lassen.",
    "lv": "Не вземам предвид.",
    "level": "Sätze"
  },
  {
    "de": "Er betreibt ein Hotel.",
    "lv": "Той държи хотел.",
    "level": "Sätze"
  },
  {
    "de": "Alle beiden.",
    "lv": "И двамата. • И двете.",
    "level": "Sätze"
  },
  {
    "de": "Alles bezahlen.",
    "lv": "Плащам всичко.",
    "level": "Sätze"
  },
  {
    "de": "In Bezug auf etwas.",
    "lv": "По отношение на нещо.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön.",
    "lv": "Моля. • Заповядайте.",
    "level": "Sätze"
  },
  {
    "de": "Wie bitte?",
    "lv": "Моля?",
    "level": "Sätze"
  },
  {
    "de": "Bitte sehr.",
    "lv": "Няма защо. • Заповядайте.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe eine Bitte an Sie.",
    "lv": "Имам една молба към Вас.",
    "level": "Sätze"
  },
  {
    "de": "Trompete blasen.",
    "lv": "Свиря на тромпет.",
    "level": "Sätze"
  },
  {
    "de": "In einem Buch blättern.",
    "lv": "Прелиствам книга.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßen Füßen.",
    "lv": "С боси крака.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßem Auge.",
    "lv": "С просто око.",
    "level": "Sätze"
  },
  {
    "de": "Danke für die Blumen!",
    "lv": "Благодаря за комплимента!",
    "level": "Sätze"
  },
  {
    "de": "Alles in Butter.",
    "lv": "Всичко е наред.",
    "level": "Sätze"
  },
  {
    "de": "Bitte checken.",
    "lv": "Моля, проверете.",
    "level": "Sätze"
  },
  {
    "de": "Da ist er!",
    "lv": "Ето го!",
    "level": "Sätze"
  },
  {
    "de": "Alles spricht dafür.",
    "lv": "Всичко говори в полза на това.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann nichts dafür.",
    "lv": "Не съм виновен.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin dagegen.",
    "lv": "Против съм.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe nichts dagegen.",
    "lv": "Нямам нищо против.",
    "level": "Sätze"
  },
  {
    "de": "Von daheim.",
    "lv": "От вкъщи.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Dame ziehen.",
    "lv": "Правя ход с дамата.",
    "level": "Sätze"
  },
  {
    "de": "Es dämmert.",
    "lv": "Здрачава се. • Зазорява се.",
    "level": "Sätze"
  },
  {
    "de": "Danke schön!",
    "lv": "Много благодаря!",
    "level": "Sätze"
  },
  {
    "de": "Dann und wann.",
    "lv": "От време на време.",
    "level": "Sätze"
  },
  {
    "de": "Darauf kannst du dich verlassen.",
    "lv": "На това можеш да разчиташ.",
    "level": "Sätze"
  },
  {
    "de": "Daraus wird nichts.",
    "lv": "От това нищо няма да излезе.",
    "level": "Sätze"
  },
  {
    "de": "So dass ...",
    "lv": "Така че...",
    "level": "Sätze"
  },
  {
    "de": "Für wen halten Sie mich?",
    "lv": "За кого ме смятате?",
    "level": "Sätze"
  },
  {
    "de": "Hände weg!",
    "lv": "Ръцете долу!",
    "level": "Sätze"
  },
  {
    "de": "Lass den Kopf nicht hängen!",
    "lv": "Не падай духом!",
    "level": "Sätze"
  },
  {
    "de": "zu Hause",
    "lv": "вкъщи",
    "level": "Sätze"
  },
  {
    "de": "nach Hause gehen",
    "lv": "отивам си вкъщи",
    "level": "Sätze"
  },
  {
    "de": "von Haus aus",
    "lv": "по произход • по природа",
    "level": "Sätze"
  },
  {
    "de": "Meinen herzlichsten Glückwunsch!",
    "lv": "Най-сърдечни поздравления!",
    "level": "Sätze"
  },
  {
    "de": "Seien Sie so gut!",
    "lv": "Бъдете така добър!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie die Güte!",
    "lv": "Бъдете така любезен!",
    "level": "Sätze"
  },
  {
    "de": "Was hast du?",
    "lv": "Какво ти е? • Какво стана?",
    "level": "Sätze"
  },
  {
    "de": "Gestatten Sie bitte!",
    "lv": "Позволете, моля!",
    "level": "Sätze"
  },
  {
    "de": "Ist es gestattet zu rauchen?",
    "lv": "Позволено ли е да се пуши?",
    "level": "Sätze"
  },
  {
    "de": "Ich muss gestehen, dass ...",
    "lv": "Трябва да призная, че...",
    "level": "Sätze"
  },
  {
    "de": "gestern früh",
    "lv": "вчера сутринта",
    "level": "Sätze"
  },
  {
    "de": "gestern Abend",
    "lv": "снощи",
    "level": "Sätze"
  },
  {
    "de": "Es ist mir gleichgültig, ob ...",
    "lv": "Безразлично ми е дали...",
    "level": "Sätze"
  },
  {
    "de": "Was ist geschehen?",
    "lv": "Какво се е случило?",
    "level": "Sätze"
  },
  {
    "de": "Mach keine Geschichten!",
    "lv": "Не прави глупости!",
    "level": "Sätze"
  },
  {
    "de": "Geschweige denn ...",
    "lv": "Да не говорим за... • Още по-малко...",
    "level": "Sätze"
  },
  {
    "de": "Gehen Sie geradeaus!",
    "lv": "Вървете направо!",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es Ihnen?",
    "lv": "Как сте?",
    "level": "Sätze"
  },
  {
    "de": "Frag ihn gelegentlich, ob ...",
    "lv": "Попитай го, когато имаш възможност, дали...",
    "level": "Sätze"
  },
  {
    "de": "morgen früh",
    "lv": "утре сутринта",
    "level": "Sätze"
  },
  {
    "de": "im Frühling",
    "lv": "през пролетта",
    "level": "Sätze"
  },
  {
    "de": "Was gibt’s Neues?",
    "lv": "Какво ново?",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Brief folgt, dass ...",
    "lv": "От това писмо следва, че...",
    "level": "Sätze"
  },
  {
    "de": "Fahre fort!",
    "lv": "Продължавай!",
    "level": "Sätze"
  },
  {
    "de": "Er ist kein Freund von ...",
    "lv": "Той не е любител на...",
    "level": "Sätze"
  },
  {
    "de": "Es erwies sich, dass ...",
    "lv": "Оказа се, че...",
    "level": "Sätze"
  },
  {
    "de": "Gedenkst du meiner?",
    "lv": "Помниш ли ме? • Мислиш ли за мен?",
    "level": "Sätze"
  },
  {
    "de": "im Winter",
    "lv": "през зимата",
    "level": "Sätze"
  },
  {
    "de": "Welcher Jahrgang sind Sie?",
    "lv": "През коя година сте роден?",
    "level": "Sätze"
  },
  {
    "de": "Es jammert mich zu sehen ...",
    "lv": "Жал ми е да гледам...",
    "level": "Sätze"
  },
  {
    "de": "je mehr, desto besser",
    "lv": "колкото повече, толкова по-добре",
    "level": "Sätze"
  },
  {
    "de": "bis jetzt",
    "lv": "досега",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich zum Bahnhof?",
    "lv": "Как да стигна до гарата?",
    "level": "Sätze"
  },
  {
    "de": "Komm her!",
    "lv": "Ела насам!",
    "level": "Sätze"
  },
  {
    "de": "Könnte ich Frau N. sprechen?",
    "lv": "Може ли да говоря с госпожа Н.?",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das?",
    "lv": "Колко струва това?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange dauert die Vorstellung?",
    "lv": "Колко трае представлението?",
    "level": "Sätze"
  },
  {
    "de": "Lass das!",
    "lv": "Престани! • Остави това!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich in Ruhe!",
    "lv": "Остави ме на мира!",
    "level": "Sätze"
  },
  {
    "de": "Lassen Sie mich Ihnen helfen!",
    "lv": "Позволете ми да Ви помогна!",
    "level": "Sätze"
  },
  {
    "de": "Lasst uns gehen!",
    "lv": "Да вървим!",
    "level": "Sätze"
  },
  {
    "de": "Na, wie läufts?",
    "lv": "Е, как върви?",
    "level": "Sätze"
  },
  {
    "de": "Es lebe!",
    "lv": "Да живее!",
    "level": "Sätze"
  },
  {
    "de": "Leben Sie wohl!",
    "lv": "Бъдете здрав! • Сбогом!",
    "level": "Sätze"
  },
  {
    "de": "Was ist los?",
    "lv": "Какво става?",
    "level": "Sätze"
  },
  {
    "de": "Der Job ist anstrengend.",
    "lv": "Работата е изморителна.",
    "level": "Sätze"
  },
  {
    "de": "Das war ein anstrengender Tag.",
    "lv": "Това беше изморителен ден.",
    "level": "Sätze"
  },
  {
    "de": "Deutsch lernen kann anstrengend sein.",
    "lv": "Ученето на немски може да бъде изморително.",
    "level": "Sätze"
  },
  {
    "de": "Er verlangt eine Erklärung.",
    "lv": "Той изисква обяснение.",
    "level": "Sätze"
  },
  {
    "de": "Der Verkäufer verlangt zu viel Geld.",
    "lv": "Продавачът иска твърде много пари.",
    "level": "Sätze"
  },
  {
    "de": "Das Gesetz verlangt es so.",
    "lv": "Така изисква законът.",
    "level": "Sätze"
  },
  {
    "de": "Das ist gar nicht so schwer.",
    "lv": "Това изобщо не е толкова трудно.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe gar kein Geld.",
    "lv": "Нямам никакви пари.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gar nichts gesagt.",
    "lv": "Той изобщо нищо не каза.",
    "level": "Sätze"
  },
  {
    "de": "Der Hund ist los.",
    "lv": "Кучето е пуснато.",
    "level": "Sätze"
  },
  {
    "de": "Hier ist viel los.",
    "lv": "Тук е много оживено.",
    "level": "Sätze"
  },
  {
    "de": "Halt die Luft an!",
    "lv": "Замълчи! • Не преувеличавай!",
    "level": "Sätze"
  },
  {
    "de": "Was machst du?",
    "lv": "Какво правиш?",
    "level": "Sätze"
  },
  {
    "de": "Sag mal!",
    "lv": "Кажи де!",
    "level": "Sätze"
  },
  {
    "de": "Was meinen Sie damit?",
    "lv": "Какво имате предвид? • Как да разбирам това?",
    "level": "Sätze"
  },
  {
    "de": "Wir gehen mit Ihnen.",
    "lv": "Идваме с Вас.",
    "level": "Sätze"
  },
  {
    "de": "Ich fahre mit der Eisenbahn.",
    "lv": "Пътувам с влак.",
    "level": "Sätze"
  },
  {
    "de": "am Mittwoch",
    "lv": "в сряда",
    "level": "Sätze"
  },
  {
    "de": "Es mag sein.",
    "lv": "Възможно е.",
    "level": "Sätze"
  },
  {
    "de": "Ich mag das nicht.",
    "lv": "Това не ми харесва.",
    "level": "Sätze"
  },
  {
    "de": "am Montag",
    "lv": "в понеделник",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen!",
    "lv": "Добро утро!",
    "level": "Sätze"
  },
  {
    "de": "am Morgen",
    "lv": "сутринта",
    "level": "Sätze"
  },
  {
    "de": "Gute Nacht!",
    "lv": "Лека нощ!",
    "level": "Sätze"
  },
  {
    "de": "Nehmen Sie Platz!",
    "lv": "Заповядайте, седнете!",
    "level": "Sätze"
  },
  {
    "de": "Letzte Neuheit!",
    "lv": "Последна новост!",
    "level": "Sätze"
  },
  {
    "de": "Nicht wahr?",
    "lv": "Нали?",
    "level": "Sätze"
  },
  {
    "de": "Nicht doch!",
    "lv": "Не, не! • Недей!",
    "level": "Sätze"
  },
  {
    "de": "Nun endlich!",
    "lv": "Е, най-после!",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das?",
    "lv": "Каква полза от това?",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das alles?",
    "lv": "За какво е всичко това?",
    "level": "Sätze"
  },
  {
    "de": "Parken verboten!",
    "lv": "Паркирането забранено!",
    "level": "Sätze"
  },
  {
    "de": "Nicht parken!",
    "lv": "Паркирането забранено!",
    "level": "Sätze"
  },
  {
    "de": "Er hat Recht.",
    "lv": "Прав е.",
    "level": "Sätze"
  },
  {
    "de": "Wovon ist die Rede?",
    "lv": "За какво става дума?",
    "level": "Sätze"
  },
  {
    "de": "Davon kann keine Rede sein.",
    "lv": "За това и дума не може да става.",
    "level": "Sätze"
  },
  {
    "de": "Glückliche Reise!",
    "lv": "На добър път!",
    "level": "Sätze"
  },
  {
    "de": "Mir reißt die Geduld.",
    "lv": "Търпението ми се изчерпва.",
    "level": "Sätze"
  },
  {
    "de": "Man sagt, dass ...",
    "lv": "Казват, че...",
    "level": "Sätze"
  },
  {
    "de": "Schon gut!",
    "lv": "Всичко е наред!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön!",
    "lv": "Заповядайте! • Моля!",
    "level": "Sätze"
  },
  {
    "de": "Was bin ich schuldig?",
    "lv": "Колко дължа?",
    "level": "Sätze"
  },
  {
    "de": "Vor dem Gebrauch schütteln!",
    "lv": "Разклатете преди употреба!",
    "level": "Sätze"
  },
  {
    "de": "Sehen Sie mal!",
    "lv": "Погледнете!",
    "level": "Sätze"
  },
  {
    "de": "Wie sehr auch ...",
    "lv": "Колкото и да...",
    "level": "Sätze"
  },
  {
    "de": "Seit wann?",
    "lv": "Откога?",
    "level": "Sätze"
  },
  {
    "de": "Was soll ich tun?",
    "lv": "Какво да правя?",
    "level": "Sätze"
  },
  {
    "de": "im Sommer",
    "lv": "през лятото",
    "level": "Sätze"
  },
  {
    "de": "Nicht nur ..., sondern auch ...",
    "lv": "Не само..., но и...",
    "level": "Sätze"
  },
  {
    "de": "Sonst noch etwas?",
    "lv": "Нещо друго?",
    "level": "Sätze"
  },
  {
    "de": "Spaß beiseite!",
    "lv": "Шегата настрана!",
    "level": "Sätze"
  },
  {
    "de": "Wie spät ist es?",
    "lv": "Колко е часът?",
    "level": "Sätze"
  },
  {
    "de": "Durchfahrt gesperrt!",
    "lv": "Преминаването забранено!",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie deutsch?",
    "lv": "Говорите ли немски?",
    "level": "Sätze"
  },
  {
    "de": "Statt zu ...",
    "lv": "Вместо да...",
    "level": "Sätze"
  },
  {
    "de": "Wie steht’s?",
    "lv": "Как вървят нещата?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Hut steht ihr gut.",
    "lv": "Тази шапка ѝ отива.",
    "level": "Sätze"
  },
  {
    "de": "Guten Tag!",
    "lv": "Добър ден!",
    "level": "Sätze"
  },
  {
    "de": "Wo treffen wir uns?",
    "lv": "Къде ще се срещнем?",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie näher!",
    "lv": "Приближете се!",
    "level": "Sätze"
  },
  {
    "de": "Ehrlichkeit ist eine Tugend.",
    "lv": "Честността е добродетел.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe viel zu tun.",
    "lv": "Имам много работа.",
    "level": "Sätze"
  },
  {
    "de": "Nicht übel!",
    "lv": "Никак не е зле!",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt über mir.",
    "lv": "Живее над мен.",
    "level": "Sätze"
  },
  {
    "de": "Er ist davon überzeugt.",
    "lv": "Убеден е в това.",
    "level": "Sätze"
  },
  {
    "de": "So ist es üblich.",
    "lv": "Така е прието.",
    "level": "Sätze"
  },
  {
    "de": "Deine Uhr geht nach.",
    "lv": "Часовникът ти изостава.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel Uhr ist es?",
    "lv": "Колко е часът?",
    "level": "Sätze"
  },
  {
    "de": "Um acht Uhr früh.",
    "lv": "В осем часа сутринта.",
    "level": "Sätze"
  },
  {
    "de": "umso mehr",
    "lv": "толкова повече",
    "level": "Sätze"
  },
  {
    "de": "Rechts um!",
    "lv": "Надясно!",
    "level": "Sätze"
  },
  {
    "de": "Und ob!",
    "lv": "И още как!",
    "level": "Sätze"
  },
  {
    "de": "und zwar",
    "lv": "а именно",
    "level": "Sätze"
  },
  {
    "de": "Auf Unkosten von ...",
    "lv": "За сметка на...",
    "level": "Sätze"
  },
  {
    "de": "Er saß unter den Zuschauern.",
    "lv": "Седеше сред зрителите.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ursache!",
    "lv": "Няма защо!",
    "level": "Sätze"
  },
  {
    "de": "Es geschah, wie verabredet.",
    "lv": "Стана, както беше уговорено.",
    "level": "Sätze"
  },
  {
    "de": "Rauchen verboten!",
    "lv": "Пушенето забранено!",
    "level": "Sätze"
  },
  {
    "de": "Falsch verbunden!",
    "lv": "Грешен номер!",
    "level": "Sätze"
  },
  {
    "de": "Eintritt verboten!",
    "lv": "Вход забранен!",
    "level": "Sätze"
  },
  {
    "de": "Verstehen Sie mich?",
    "lv": "Разбирате ли ме?",
    "level": "Sätze"
  },
  {
    "de": "Er versteht nichts davon.",
    "lv": "Нищо не разбира от това.",
    "level": "Sätze"
  },
  {
    "de": "Seine Ansicht vertreten.",
    "lv": "Отстоявам мнението си.",
    "level": "Sätze"
  },
  {
    "de": "Streit verursachen.",
    "lv": "Предизвиквам спор.",
    "level": "Sätze"
  },
  {
    "de": "Viel besser.",
    "lv": "Много по-добре.",
    "level": "Sätze"
  },
  {
    "de": "Zu viel.",
    "lv": "Твърде много.",
    "level": "Sätze"
  },
  {
    "de": "Vom Hörensagen.",
    "lv": "По слухове.",
    "level": "Sätze"
  },
  {
    "de": "Von Zeit zu Zeit.",
    "lv": "От време на време.",
    "level": "Sätze"
  },
  {
    "de": "Von Beruf.",
    "lv": "По професия.",
    "level": "Sätze"
  },
  {
    "de": "Er ist Berliner von Geburt.",
    "lv": "Берлинчанин е по рождение.",
    "level": "Sätze"
  },
  {
    "de": "Er steht vor dem Fenster.",
    "lv": "Стои пред прозореца.",
    "level": "Sätze"
  },
  {
    "de": "Vor Sonnenaufgang.",
    "lv": "Преди изгрев слънце.",
    "level": "Sätze"
  },
  {
    "de": "Vor vierzehn Tagen.",
    "lv": "Преди две седмици.",
    "level": "Sätze"
  },
  {
    "de": "Vor Freude.",
    "lv": "От радост.",
    "level": "Sätze"
  },
  {
    "de": "Vor allem.",
    "lv": "Преди всичко.",
    "level": "Sätze"
  },
  {
    "de": "Im Voraus.",
    "lv": "Предварително.",
    "level": "Sätze"
  },
  {
    "de": "Unter der Voraussetzung, dass ...",
    "lv": "При условие че...",
    "level": "Sätze"
  },
  {
    "de": "Unter dem Vorbehalt.",
    "lv": "С тази уговорка.",
    "level": "Sätze"
  },
  {
    "de": "Vorhanden sein.",
    "lv": "На разположение съм. • Съществувам.",
    "level": "Sätze"
  },
  {
    "de": "In der vorigen Woche.",
    "lv": "Миналата седмица.",
    "level": "Sätze"
  },
  {
    "de": "Vorkehrungen treffen.",
    "lv": "Вземам предпазни мерки.",
    "level": "Sätze"
  },
  {
    "de": "Sie kommt mir bekannt vor.",
    "lv": "Струва ми се позната.",
    "level": "Sätze"
  },
  {
    "de": "Er hat eine Vorliebe für Literatur.",
    "lv": "Има слабост към литературата.",
    "level": "Sätze"
  },
  {
    "de": "Heute Vormittag.",
    "lv": "Тази сутрин. • Днес преди обяд.",
    "level": "Sätze"
  },
  {
    "de": "Von vorn.",
    "lv": "Отпред. • Отначало.",
    "level": "Sätze"
  },
  {
    "de": "Nach vorn.",
    "lv": "Напред.",
    "level": "Sätze"
  },
  {
    "de": "Von vornherein.",
    "lv": "От самото начало.",
    "level": "Sätze"
  },
  {
    "de": "Im Vorteil sein.",
    "lv": "Имам предимство.",
    "level": "Sätze"
  },
  {
    "de": "Wach sein.",
    "lv": "Буден съм.",
    "level": "Sätze"
  },
  {
    "de": "Wach werden.",
    "lv": "Събуждам се.",
    "level": "Sätze"
  },
  {
    "de": "Auf Wache sein.",
    "lv": "Стоя на пост.",
    "level": "Sätze"
  },
  {
    "de": "Während eines Jahres.",
    "lv": "В продължение на една година.",
    "level": "Sätze"
  },
  {
    "de": "Während des Krieges.",
    "lv": "По време на войната.",
    "level": "Sätze"
  },
  {
    "de": "Gegen eine Wand reden.",
    "lv": "Говоря на вятъра.",
    "level": "Sätze"
  },
  {
    "de": "Hier haben die Wände Ohren.",
    "lv": "Тук и стените имат уши.",
    "level": "Sätze"
  },
  {
    "de": "Bis wann?",
    "lv": "Докога?",
    "level": "Sätze"
  },
  {
    "de": "Es ist warm.",
    "lv": "Топло е.",
    "level": "Sätze"
  },
  {
    "de": "Auf eine Nachricht warten.",
    "lv": "Чакам съобщение.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie?",
    "lv": "Какво искате?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein ...?",
    "lv": "Какъв...? • Що за...?",
    "level": "Sätze"
  },
  {
    "de": "Auf halbem Wege.",
    "lv": "По средата на пътя.",
    "level": "Sätze"
  },
  {
    "de": "Auf diesem Wege.",
    "lv": "По този път. • По този начин.",
    "level": "Sätze"
  },
  {
    "de": "Auf friedlichem Wege.",
    "lv": "По мирен път.",
    "level": "Sätze"
  },
  {
    "de": "Unserer Freundschaft wegen.",
    "lv": "Заради приятелството ни.",
    "level": "Sätze"
  },
  {
    "de": "Von Rechts wegen.",
    "lv": "По закон. • По право.",
    "level": "Sätze"
  },
  {
    "de": "Weh tun.",
    "lv": "Боли ме.",
    "level": "Sätze"
  },
  {
    "de": "Zu Weihnachten.",
    "lv": "За Коледа.",
    "level": "Sätze"
  },
  {
    "de": "Auf welche Weise?",
    "lv": "По какъв начин?",
    "level": "Sätze"
  },
  {
    "de": "Art und Weise.",
    "lv": "Начин.",
    "level": "Sätze"
  },
  {
    "de": "Ohne weiteres.",
    "lv": "Без колебание. • Без затруднения.",
    "level": "Sätze"
  },
  {
    "de": "Bis auf weiteres.",
    "lv": "До второ нареждане.",
    "level": "Sätze"
  },
  {
    "de": "Und so weiter.",
    "lv": "И така нататък.",
    "level": "Sätze"
  },
  {
    "de": "Weiter nichts.",
    "lv": "Нищо повече.",
    "level": "Sätze"
  },
  {
    "de": "An welchem Tag?",
    "lv": "В кой ден?",
    "level": "Sätze"
  },
  {
    "de": "Alle Welt.",
    "lv": "Целият свят. • Всички.",
    "level": "Sätze"
  },
  {
    "de": "In wenigen Tagen.",
    "lv": "След няколко дни.",
    "level": "Sätze"
  },
  {
    "de": "Zu wenig.",
    "lv": "Твърде малко.",
    "level": "Sätze"
  },
  {
    "de": "Wenn auch.",
    "lv": "Макар и.",
    "level": "Sätze"
  },
  {
    "de": "Wer da?",
    "lv": "Кой е там?",
    "level": "Sätze"
  },
  {
    "de": "Gesammelte Werke von Schiller.",
    "lv": "Събрани съчинения на Шилер.",
    "level": "Sätze"
  },
  {
    "de": "Ausgewählte Werke.",
    "lv": "Избрани произведения.",
    "level": "Sätze"
  },
  {
    "de": "Er ist wert, dass ...",
    "lv": "Заслужава да...",
    "level": "Sätze"
  },
  {
    "de": "Es ist zwei Euro wert.",
    "lv": "Струва две евро.",
    "level": "Sätze"
  },
  {
    "de": "Nach Westen.",
    "lv": "На запад.",
    "level": "Sätze"
  },
  {
    "de": "Von Westen.",
    "lv": "От запад.",
    "level": "Sätze"
  },
  {
    "de": "In Wettbewerb treten.",
    "lv": "Включвам се в състезание.",
    "level": "Sätze"
  },
  {
    "de": "Um die Wette laufen.",
    "lv": "Надбягвам се.",
    "level": "Sätze"
  },
  {
    "de": "Was gilt die Wette?",
    "lv": "На какво се обзалагаме?",
    "level": "Sätze"
  },
  {
    "de": "Wie wird das Wetter?",
    "lv": "Какво ще бъде времето?",
    "level": "Sätze"
  },
  {
    "de": "Wettkampf im Turnen.",
    "lv": "Състезание по гимнастика.",
    "level": "Sätze"
  },
  {
    "de": "Wider meinen Willen.",
    "lv": "Против волята ми.",
    "level": "Sätze"
  },
  {
    "de": "Widerspruch erheben.",
    "lv": "Протестирам. • Възразявам.",
    "level": "Sätze"
  },
  {
    "de": "Wie alt ist er?",
    "lv": "На колко години е?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange?",
    "lv": "Колко време?",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiederhören!",
    "lv": "Чуваме се!",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiedersehen!",
    "lv": "Довиждане!",
    "level": "Sätze"
  },
  {
    "de": "Wilde Tiere.",
    "lv": "Диви животни.",
    "level": "Sätze"
  },
  {
    "de": "Herzlich willkommen!",
    "lv": "Сърдечно добре дошли!",
    "level": "Sätze"
  },
  {
    "de": "Du musst ziehen.",
    "lv": "Ти си на ход.",
    "level": "Sätze"
  },
  {
    "de": "Es zieht.",
    "lv": "Има течение.",
    "level": "Sätze"
  },
  {
    "de": "Ziemlich kalt.",
    "lv": "Доста студено.",
    "level": "Sätze"
  },
  {
    "de": "Zipfel einer Wurst.",
    "lv": "Крайче от наденица.",
    "level": "Sätze"
  },
  {
    "de": "Zu ihm gehen.",
    "lv": "Отивам при него.",
    "level": "Sätze"
  },
  {
    "de": "Zur Schule gehen.",
    "lv": "Ходя на училище.",
    "level": "Sätze"
  },
  {
    "de": "Zu Hause bleiben.",
    "lv": "Оставам вкъщи.",
    "level": "Sätze"
  },
  {
    "de": "Von Tag zu Tag.",
    "lv": "От ден на ден.",
    "level": "Sätze"
  },
  {
    "de": "Zum Glück.",
    "lv": "За щастие.",
    "level": "Sätze"
  },
  {
    "de": "Wasser zum Trinken.",
    "lv": "Вода за пиене.",
    "level": "Sätze"
  },
  {
    "de": "Zu Fuß.",
    "lv": "Пеша.",
    "level": "Sätze"
  },
  {
    "de": "Zu Pferde.",
    "lv": "На кон.",
    "level": "Sätze"
  },
  {
    "de": "Zu Rad.",
    "lv": "С велосипед.",
    "level": "Sätze"
  },
  {
    "de": "Es hörte auf zu regnen.",
    "lv": "Спря да вали.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe noch viel zu tun.",
    "lv": "Имам още много работа.",
    "level": "Sätze"
  },
  {
    "de": "Zu früh.",
    "lv": "Твърде рано.",
    "level": "Sätze"
  },
  {
    "de": "Zu groß.",
    "lv": "Твърде голям.",
    "level": "Sätze"
  },
  {
    "de": "Mit den Achseln zucken.",
    "lv": "Свивам рамене.",
    "level": "Sätze"
  },
  {
    "de": "In einem Zug trinken.",
    "lv": "Изпивам на един дъх.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde gehen.",
    "lv": "Загивам.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde legen.",
    "lv": "Поставям в основата. • Вземам за основа.",
    "level": "Sätze"
  },
  {
    "de": "Zum ersten Mal.",
    "lv": "За първи път.",
    "level": "Sätze"
  },
  {
    "de": "Machen Sie bitte die Tür zu!",
    "lv": "Затворете, моля, вратата!",
    "level": "Sätze"
  },
  {
    "de": "Er hat zugenommen.",
    "lv": "Напълнял е.",
    "level": "Sätze"
  },
  {
    "de": "Die Tage nehmen zu.",
    "lv": "Дните стават по-дълги.",
    "level": "Sätze"
  },
  {
    "de": "Zusammenhängen mit etwas.",
    "lv": "Свързан съм с нещо.",
    "level": "Sätze"
  },
  {
    "de": "Die Tür ist zu.",
    "lv": "Вратата е затворена.",
    "level": "Sätze"
  },
  {
    "de": "Das hätte ich ihm nicht zugetraut.",
    "lv": "Не бих очаквал това от него.",
    "level": "Sätze"
  },
  {
    "de": "Freier Zutritt.",
    "lv": "Свободен вход.",
    "level": "Sätze"
  },
  {
    "de": "Zutritt verboten!",
    "lv": "Влизането забранено!",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu viel!",
    "lv": "Това е твърде много!",
    "level": "Sätze"
  },
  {
    "de": "Zuwider werden.",
    "lv": "Ставам противен. • Омръзвам.",
    "level": "Sätze"
  },
  {
    "de": "Und zwar.",
    "lv": "А именно.",
    "level": "Sätze"
  },
  {
    "de": "Es steht außer Zweifel.",
    "lv": "Няма никакво съмнение.",
    "level": "Sätze"
  },
  {
    "de": "Ohne Zweifel.",
    "lv": "Без съмнение.",
    "level": "Sätze"
  },
  {
    "de": "Zum Zweiten.",
    "lv": "Второ.",
    "level": "Sätze"
  },
  {
    "de": "Frohes neues Jahr!",
    "lv": "Честита Нова година!",
    "level": "Sätze"
  },
  {
    "de": "Herzlichen Glückwunsch zum Geburtstag!",
    "lv": "Честит рожден ден!",
    "level": "Sätze"
  },
  {
    "de": "Gute Reise!",
    "lv": "На добър път!",
    "level": "Sätze"
  },
  {
    "de": "Es freut mich, Sie kennenzulernen.",
    "lv": "Радвам се да се запозная с Вас.",
    "level": "Sätze"
  },
  {
    "de": "Wären Sie bitte so nett?",
    "lv": "Бихте ли били така любезен?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin Ihnen sehr dankbar.",
    "lv": "Много съм Ви благодарен.",
    "level": "Sätze"
  },
  {
    "de": "Setzt euch bitte hin!",
    "lv": "Седнете, моля!",
    "level": "Sätze"
  },
  {
    "de": "Ben, komm bitte an die Tafel!",
    "lv": "Бен, ела, моля, на дъската!",
    "level": "Sätze"
  },
  {
    "de": "Schlagt bitte die Lehrbücher auf!",
    "lv": "Отворете, моля, учебниците!",
    "level": "Sätze"
  },
  {
    "de": "Geht bitte in die Sporthalle!",
    "lv": "Отидете, моля, във физкултурния салон!",
    "level": "Sätze"
  },
  {
    "de": "Schläfst du noch?",
    "lv": "Още ли спиш?",
    "level": "Sätze"
  },
  {
    "de": "Schlafen Sie noch?",
    "lv": "Още ли спите?",
    "level": "Sätze"
  },
  {
    "de": "Er ist fest eingeschlafen.",
    "lv": "Заспал е дълбоко.",
    "level": "Sätze"
  },
  {
    "de": "Wecke ihn bitte auf, es ist schon spät!",
    "lv": "Събуди го, моля, вече е късно!",
    "level": "Sätze"
  },
  {
    "de": "Es tut mir sehr leid!",
    "lv": "Много съжалявам!",
    "level": "Sätze"
  },
  {
    "de": "Vielen Dank!",
    "lv": "Много благодаря!",
    "level": "Sätze"
  },
  {
    "de": "Finn, fang bitte an!",
    "lv": "Фин, започни, моля!",
    "level": "Sätze"
  },
  {
    "de": "Lest bitte mit!",
    "lv": "Следете, моля, текста!",
    "level": "Sätze"
  },
  {
    "de": "Emma, schau bitte nicht aus dem Fenster!",
    "lv": "Ема, моля, не гледай през прозореца!",
    "level": "Sätze"
  },
  {
    "de": "Jonas, bring bitte die Hefte!",
    "lv": "Йонас, донеси, моля, тетрадките!",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte zurück an deinen Platz!",
    "lv": "Върни се, моля, на мястото си!",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb acht.",
    "lv": "Седем и половина е.",
    "level": "Sätze"
  },
  {
    "de": "Wann wachst du gewöhnlich auf?",
    "lv": "Кога обикновено се събуждаш?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe gleich auf.",
    "lv": "Веднага ставам.",
    "level": "Sätze"
  },
  {
    "de": "Steh auf, Hanna, es klingelt!",
    "lv": "Ставай, Хана, звъни!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich noch fünf Minuten schlafen!",
    "lv": "Остави ме да поспя още пет минути!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss nicht, das Zimmer zu lüften!",
    "lv": "Не забравяй да проветриш стаята!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist das Handtuch?",
    "lv": "Къде е кърпата?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mir die Zähne putzen.",
    "lv": "Искам да си измия зъбите.",
    "level": "Sätze"
  },
  {
    "de": "Womit putzt du dir die Zähne?",
    "lv": "С какво си миеш зъбите?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mich anziehen.",
    "lv": "Искам да се облека.",
    "level": "Sätze"
  },
  {
    "de": "Zieh dich bitte schnell an!",
    "lv": "Облечи се бързо, моля!",
    "level": "Sätze"
  },
  {
    "de": "Kleide dich wärmer an, draußen ist es kühl.",
    "lv": "Облечи се по-топло, навън е хладно.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, wie geht es dir?",
    "lv": "Добро утро, как си?",
    "level": "Sätze"
  },
  {
    "de": "Mir geht es gut, danke.",
    "lv": "Добре съм, благодаря.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es Neues?",
    "lv": "Какво ново?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein Chaos hier!",
    "lv": "Какъв хаос има тук!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich beim Aufräumen helfen?",
    "lv": "Може ли да помогна в разтребването?",
    "level": "Sätze"
  },
  {
    "de": "Was trinkst du morgens, Kaffee oder Tee?",
    "lv": "Какво пиеш сутрин, кафе или чай?",
    "level": "Sätze"
  },
  {
    "de": "Gewöhnlich trinke ich morgens eine Tasse Kaffee.",
    "lv": "Обикновено сутрин пия чаша кафе.",
    "level": "Sätze"
  },
  {
    "de": "Am liebsten trinke ich schwarzen Kaffee.",
    "lv": "Най-много обичам черно кафе.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, hast du gut geschlafen?",
    "lv": "Добро утро, добре ли спа?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin noch sehr müde.",
    "lv": "Още съм много уморен.",
    "level": "Sätze"
  },
  {
    "de": "Willst du Kaffee oder Milch?",
    "lv": "Искаш ли кафе или мляко?",
    "level": "Sätze"
  },
  {
    "de": "Gib mir bitte ein Brötchen mit Käse.",
    "lv": "Дай ми, моля, едно хлебче със сирене.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss jetzt los!",
    "lv": "Вече трябва да тръгвам!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss dein Frühstück nicht!",
    "lv": "Не забравяй закуската си!",
    "level": "Sätze"
  },
  {
    "de": "Klara, deck bitte den Tisch!",
    "lv": "Клара, моля, сложи масата!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss die Servietten nicht!",
    "lv": "Не забравяй салфетките!",
    "level": "Sätze"
  },
  {
    "de": "Wann esst ihr zu Mittag?",
    "lv": "Кога обядвате?",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit zu essen.",
    "lv": "Време е за ядене.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es heute zu Mittag?",
    "lv": "Какво има днес за обяд?",
    "level": "Sätze"
  },
  {
    "de": "Wie schmeckt dir die Suppe?",
    "lv": "Как ти се струва супата?",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt ist sie etwas zu salzig.",
    "lv": "Честно казано, малко е пресолена.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dir ein Stück Brot geben?",
    "lv": "Може ли да ти дам парче хляб?",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich habe schon.",
    "lv": "Благодаря, вече имам.",
    "level": "Sätze"
  },
  {
    "de": "Das Fleisch schmeckt ausgezeichnet.",
    "lv": "Месото е превъзходно.",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich bin schon satt.",
    "lv": "Благодаря, вече съм сит.",
    "level": "Sätze"
  },
  {
    "de": "Heute haben wir Besuch.",
    "lv": "Днес имаме гости.",
    "level": "Sätze"
  },
  {
    "de": "Bist du heute Abend frei?",
    "lv": "Свободен ли си довечера?",
    "level": "Sätze"
  },
  {
    "de": "Komm doch heute zum Mittagessen vorbei!",
    "lv": "Хайде, намини днес на обяд!",
    "level": "Sätze"
  },
  {
    "de": "Setzen wir uns an den Tisch.",
    "lv": "Да седнем на масата.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, bedien dich!",
    "lv": "Заповядай, вземи си!",
    "level": "Sätze"
  },
  {
    "de": "Stört dich das Rauchen?",
    "lv": "Пречи ли ти пушенето?",
    "level": "Sätze"
  },
  {
    "de": "Danke für die nette Aufnahme!",
    "lv": "Благодаря за милото посрещане!",
    "level": "Sätze"
  },
  {
    "de": "Wann gehst du ins Bett?",
    "lv": "Кога си лягаш?",
    "level": "Sätze"
  },
  {
    "de": "Wenn ich von der Arbeit komme, bin ich immer müde.",
    "lv": "Когато се прибера от работа, винаги съм уморен.",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, ins Bett zu gehen.",
    "lv": "Време е за лягане.",
    "level": "Sätze"
  },
  {
    "de": "Es ist schönes Wetter.",
    "lv": "Времето е хубаво.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mit mir spazieren gehen?",
    "lv": "Искаш ли да се разходиш с мен?",
    "level": "Sätze"
  },
  {
    "de": "Sieh mal, es wird gleich regnen.",
    "lv": "Виж, всеки момент ще завали.",
    "level": "Sätze"
  },
  {
    "de": "Nimm den Regenschirm mit!",
    "lv": "Вземи си чадъра!",
    "level": "Sätze"
  },
  {
    "de": "Es regnet.",
    "lv": "Вали.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin schon ganz nass.",
    "lv": "Вече съм целият мокър.",
    "level": "Sätze"
  },
  {
    "de": "Glaubst du, dass es den ganzen Tag regnen wird?",
    "lv": "Мислиш ли, че ще вали цял ден?",
    "level": "Sätze"
  },
  {
    "de": "Es hört auf zu regnen.",
    "lv": "Спира да вали.",
    "level": "Sätze"
  },
  {
    "de": "Die Sonne scheint wieder.",
    "lv": "Слънцето отново грее.",
    "level": "Sätze"
  },
  {
    "de": "Es ist sehr warm.",
    "lv": "Много е топло.",
    "level": "Sätze"
  },
  {
    "de": "Es sieht nach Regen aus.",
    "lv": "Изглежда, че ще вали.",
    "level": "Sätze"
  },
  {
    "de": "Wir bekommen gleich ein Gewitter.",
    "lv": "Всеки момент ще започне буря.",
    "level": "Sätze"
  },
  {
    "de": "Das Gewitter zieht vorüber.",
    "lv": "Бурята отминава.",
    "level": "Sätze"
  },
  {
    "de": "Die Wolken verziehen sich.",
    "lv": "Облаците се разсейват.",
    "level": "Sätze"
  },
  {
    "de": "Siehst du den Regenbogen?",
    "lv": "Виждаш ли дъгата?",
    "level": "Sätze"
  },
  {
    "de": "Der Winter ist da, es hat geschneit.",
    "lv": "Зимата дойде, падна сняг.",
    "level": "Sätze"
  },
  {
    "de": "Es schneit.",
    "lv": "Вали сняг.",
    "level": "Sätze"
  },
  {
    "de": "Wie schön ist es im Wald im Winter!",
    "lv": "Колко е красиво в гората през зимата!",
    "level": "Sätze"
  },
  {
    "de": "Mir ist kalt, ich friere.",
    "lv": "Студено ми е, мръзна.",
    "level": "Sätze"
  },
  {
    "de": "Draußen ist Glatteis, pass auf!",
    "lv": "Навън има поледица, внимавай!",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir auf die Eisbahn gehen?",
    "lv": "Да отидем ли на ледената пързалка?",
    "level": "Sätze"
  },
  {
    "de": "Zieh die Jacke an, du kannst dich erkälten.",
    "lv": "Облечи си якето, може да настинеш.",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb sieben.",
    "lv": "Шест и половина е.",
    "level": "Sätze"
  },
  {
    "de": "Meine Uhr geht fünf Minuten vor.",
    "lv": "Часовникът ми избързва с пет минути.",
    "level": "Sätze"
  },
  {
    "de": "Weck mich morgen früh um sieben Uhr!",
    "lv": "Събуди ме утре сутрин в седем часа!",
    "level": "Sätze"
  },
  {
    "de": "Was ist heute für ein Datum?",
    "lv": "Коя дата е днес?",
    "level": "Sätze"
  },
  {
    "de": "Heute ist der elfte Juli.",
    "lv": "Днес е единадесети юли.",
    "level": "Sätze"
  },
  {
    "de": "Was machst du gewöhnlich am Abend?",
    "lv": "Какво правиш обикновено вечер?",
    "level": "Sätze"
  },
  {
    "de": "Es ist schon lange her, dass wir uns gesehen haben.",
    "lv": "Отдавна не сме се виждали.",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es dir?",
    "lv": "Как си?",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, ich möchte etwas mit dir besprechen.",
    "lv": "Извинявай, искам да обсъдя нещо с теб.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir spazieren!",
    "lv": "Хайде да се разходим!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Lust, mit mir in den Park zu gehen?",
    "lv": "Имаш ли желание да дойдеш с мен в парка?",
    "level": "Sätze"
  },
  {
    "de": "Ich komme, um dich zum Spaziergang abzuholen.",
    "lv": "Дойдох да те взема на разходка.",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte etwas langsamer, ich kann dir nicht folgen!",
    "lv": "Върви, моля, малко по-бавно, не смогвам да вървя с теб!",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zum ersten Mal in dieser Gegend.",
    "lv": "За първи път съм в този край.",
    "level": "Sätze"
  },
  {
    "de": "Ruhen wir uns ein wenig aus.",
    "lv": "Да си починем малко.",
    "level": "Sätze"
  },
  {
    "de": "Jetzt können wir zurückgehen.",
    "lv": "Сега можем да се върнем.",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt bin ich ziemlich müde.",
    "lv": "Честно казано, доста съм уморен.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, wo ist die nächste U-Bahn-Station?",
    "lv": "Извинявай, къде е най-близката станция на метрото?",
    "level": "Sätze"
  },
  {
    "de": "Welcher ist der kürzeste Weg?",
    "lv": "Кой е най-краткият път?",
    "level": "Sätze"
  },
  {
    "de": "Geh hier die zweite Straße links und dann immer geradeaus.",
    "lv": "Тук завий по втората улица наляво и после върви все направо.",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich am schnellsten zum Bahnhof?",
    "lv": "Как да стигна най-бързо до гарата?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe vor, morgen zu verreisen.",
    "lv": "Смятам да замина утре.",
    "level": "Sätze"
  },
  {
    "de": "Wohin willst du fahren?",
    "lv": "Къде искаш да отидеш?",
    "level": "Sätze"
  },
  {
    "de": "Reist du geschäftlich oder privat?",
    "lv": "Служебно ли пътуваш или по лични причини?",
    "level": "Sätze"
  },
  {
    "de": "Finn fährt bis Berlin mit, dann geht er ans Meer.",
    "lv": "Фин пътува с нас до Берлин, а после отива на море.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt das Schiff ab?",
    "lv": "Кога отплава корабът?",
    "level": "Sätze"
  },
  {
    "de": "In einer halben Stunde.",
    "lv": "След половин час.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich noch eine Kabine bekommen?",
    "lv": "Мога ли все още да получа каюта?",
    "level": "Sätze"
  },
  {
    "de": "Vergiss deinen Pass nicht!",
    "lv": "Не забравяй паспорта си!",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, den Koffer zu packen.",
    "lv": "Време е да стегнем куфара.",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt um halb sieben ab.",
    "lv": "Влакът тръгва в шест и половина.",
    "level": "Sätze"
  },
  {
    "de": "Hol mir bitte ein Taxi, ich verpasse sonst den Zug!",
    "lv": "Повикай ми, моля, такси, иначе ще изпусна влака!",
    "level": "Sätze"
  },
  {
    "de": "Fahr bitte zum Bahnhof!",
    "lv": "Закарай ме, моля, до гарата!",
    "level": "Sätze"
  },
  {
    "de": "Ich muss mich beeilen.",
    "lv": "Трябва да побързам.",
    "level": "Sätze"
  },
  {
    "de": "Ist der Schalter schon offen?",
    "lv": "Отворено ли е вече гишето?",
    "level": "Sätze"
  },
  {
    "de": "Eine Fahrkarte nach Köln, bitte.",
    "lv": "Един билет за Кьолн, моля.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt der Zug ab?",
    "lv": "Кога тръгва влакът?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt gleich ab.",
    "lv": "Влакът всеки момент ще тръгне.",
    "level": "Sätze"
  },
  {
    "de": "Muss ich in Koblenz umsteigen?",
    "lv": "Трябва ли да се прекача в Кобленц?",
    "level": "Sätze"
  },
  {
    "de": "Ja, dort musst du umsteigen.",
    "lv": "Да, там трябва да се прекачиш.",
    "level": "Sätze"
  },
  {
    "de": "Ist dieser Platz frei?",
    "lv": "Свободно ли е това място?",
    "level": "Sätze"
  },
  {
    "de": "Nein, hier sitzt niemand.",
    "lv": "Не, тук никой не седи.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der Bahnsteigkartenautomat?",
    "lv": "Къде е автоматът за перонни билети?",
    "level": "Sätze"
  },
  {
    "de": "Stell mein Handgepäck ins Gepäcknetz.",
    "lv": "Сложи ръчния ми багаж на багажника.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das Fenster aufmachen?",
    "lv": "Може ли да отворя прозореца?",
    "level": "Sätze"
  },
  {
    "de": "Es zieht, schließ bitte das Fenster!",
    "lv": "Има течение, затвори, моля, прозореца!",
    "level": "Sätze"
  },
  {
    "de": "Welche ist die nächste Station?",
    "lv": "Коя е следващата гара?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange hält der Zug?",
    "lv": "Колко време стои влакът?",
    "level": "Sätze"
  },
  {
    "de": "Wo muss ich umsteigen?",
    "lv": "Къде трябва да се прекача?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug hat Verspätung.",
    "lv": "Влакът закъснява.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Wagen ist für Nichtraucher.",
    "lv": "Този вагон е за непушачи.",
    "level": "Sätze"
  },
  {
    "de": "Wir fahren jetzt über die Grenze.",
    "lv": "Сега преминаваме границата.",
    "level": "Sätze"
  },
  {
    "de": "Hast du etwas zu verzollen?",
    "lv": "Имаш ли нещо за деклариране?",
    "level": "Sätze"
  },
  {
    "de": "Wir sind in Berlin angekommen.",
    "lv": "Пристигнахме в Берлин.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir ein gutes Hotel empfehlen?",
    "lv": "Можеш ли да ми препоръчаш добър хотел?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie freie Zimmer?",
    "lv": "Имате ли свободни стаи?",
    "level": "Sätze"
  },
  {
    "de": "Ein Zimmer mit zwei Betten, bitte.",
    "lv": "Една стая с две легла, моля.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Zimmer pro Nacht?",
    "lv": "Колко струва стаята за една нощ?",
    "level": "Sätze"
  },
  {
    "de": "Morgen reise ich ab. Weck mich um sieben Uhr!",
    "lv": "Утре заминавам. Събуди ме в седем часа!",
    "level": "Sätze"
  },
  {
    "de": "Die Rechnung, bitte!",
    "lv": "Сметката, моля!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Stadtbibliothek?",
    "lv": "Къде е градската библиотека?",
    "level": "Sätze"
  },
  {
    "de": "Wann hat das Museum geöffnet?",
    "lv": "Кога е отворен музеят?",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir ins Museum gehen?",
    "lv": "Да отидем ли в музея?",
    "level": "Sätze"
  },
  {
    "de": "Fahren wir mit dem Bus oder der U-Bahn?",
    "lv": "Ще пътуваме с автобус или с метро?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die nächste Bushaltestelle?",
    "lv": "Къде е най-близката автобусна спирка?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe großen Hunger.",
    "lv": "Много съм гладен.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir zusammen essen?",
    "lv": "Ще отидем ли заедно на ресторант?",
    "level": "Sätze"
  },
  {
    "de": "Kellner, die Speisekarte, bitte!",
    "lv": "Келнер, менюто, моля!",
    "level": "Sätze"
  },
  {
    "de": "Ist der Fisch frisch?",
    "lv": "Прясна ли е рибата?",
    "level": "Sätze"
  },
  {
    "de": "Das schmeckt ausgezeichnet!",
    "lv": "Това е изключително вкусно!",
    "level": "Sätze"
  },
  {
    "de": "Kellner, zahlen bitte!",
    "lv": "Келнер, сметката, моля!",
    "level": "Sätze"
  },
  {
    "de": "Ich gehe ins Café einen Kaffee trinken.",
    "lv": "Отивам в кафенето да изпия едно кафе.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mitkommen?",
    "lv": "Искаш ли да дойдеш с мен?",
    "level": "Sätze"
  },
  {
    "de": "Eine Tasse Kaffee mit Milch, bitte!",
    "lv": "Една чаша кафе с мляко, моля!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneller, ich habe es eilig!",
    "lv": "По-бързо, моля, бързам!",
    "level": "Sätze"
  },
  {
    "de": "Lass deinen Kaffee nicht kalt werden!",
    "lv": "Не оставяй кафето си да изстине!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie etwas Erfrischendes?",
    "lv": "Имате ли нещо освежаващо?",
    "level": "Sätze"
  },
  {
    "de": "Eine Portion Eis, bitte!",
    "lv": "Една порция сладолед, моля!",
    "level": "Sätze"
  },
  {
    "de": "Heute Morgen habe ich einen Brief bekommen.",
    "lv": "Тази сутрин получих писмо.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss ihm gleich schreiben.",
    "lv": "Трябва веднага да му пиша.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der nächste Briefkasten?",
    "lv": "Къде е най-близката пощенска кутия?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Post?",
    "lv": "Къде е пощата?",
    "level": "Sätze"
  },
  {
    "de": "Erinnere mich morgen daran, zu schreiben!",
    "lv": "Напомни ми утре да пиша!",
    "level": "Sätze"
  },
  {
    "de": "Werfen Sie bitte diesen Brief in den Briefkasten.",
    "lv": "Пуснете, моля, това писмо в пощенската кутия.",
    "level": "Sätze"
  },
  {
    "de": "Hallo, hier spricht Emma.",
    "lv": "Ало, обажда се Ема.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich dich später anrufen?",
    "lv": "Може ли да ти се обадя по-късно?",
    "level": "Sätze"
  },
  {
    "de": "Muss ich lange warten?",
    "lv": "Трябва ли да чакам дълго?",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneiden Sie mir die Haare.",
    "lv": "Подстрижете ме, моля.",
    "level": "Sätze"
  },
  {
    "de": "Hinten bitte nicht zu kurz.",
    "lv": "Отзад не много късо, моля.",
    "level": "Sätze"
  },
  {
    "de": "Wann beginnt die Vorstellung?",
    "lv": "Кога започва представлението?",
    "level": "Sätze"
  },
  {
    "de": "Es fängt um halb acht an.",
    "lv": "Започва в седем и половина.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind ausverkauft.",
    "lv": "Всички места са разпродадени.",
    "level": "Sätze"
  },
  {
    "de": "Drei Karten, bitte!",
    "lv": "Три билета, моля!",
    "level": "Sätze"
  },
  {
    "de": "Wir lassen die Jacken in der Garderobe.",
    "lv": "Оставяме якетата на гардероба.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schnell, der Vorhang geht gleich auf!",
    "lv": "Бързо, моля, завесата всеки момент ще се вдигне!",
    "level": "Sätze"
  },
  {
    "de": "Der Vorhang fällt.",
    "lv": "Завесата пада.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dich zum Tanz bitten?",
    "lv": "Може ли да те поканя на танц?",
    "level": "Sätze"
  },
  {
    "de": "Wann ist eure Hochzeit?",
    "lv": "Кога е сватбата ви?",
    "level": "Sätze"
  },
  {
    "de": "Ich suche eine Wohnung.",
    "lv": "Търся апартамент.",
    "level": "Sätze"
  },
  {
    "de": "Ist in diesem Haus eine Wohnung frei?",
    "lv": "Има ли свободен апартамент в тази сграда?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet die Miete?",
    "lv": "Колко е наемът?",
    "level": "Sätze"
  },
  {
    "de": "Die Wohnung hat drei Zimmer und eine Küche.",
    "lv": "Апартаментът има три стаи и кухня.",
    "level": "Sätze"
  },
  {
    "de": "Heute ziehen wir um.",
    "lv": "Днес се местим.",
    "level": "Sätze"
  },
  {
    "de": "Mia, pack die Sachen bitte in Kisten!",
    "lv": "Мия, опаковай, моля, нещата в кашони!",
    "level": "Sätze"
  },
  {
    "de": "Hast du alles eingepackt?",
    "lv": "Опакова ли всичко?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe mit meinem Freund in Kontakt.",
    "lv": "Поддържам връзка с приятеля си.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir ins Theater?",
    "lv": "Отиваме ли на театър?",
    "level": "Sätze"
  },
  {
    "de": "Ist alles eingeladen?",
    "lv": "Всичко натоварено ли е?",
    "level": "Sätze"
  },
  {
    "de": "Welch schöne Aussicht!",
    "lv": "Каква красива гледка!",
    "level": "Sätze"
  },
  {
    "de": "Nun können wir alles wieder aufräumen.",
    "lv": "Сега можем отново да подредим всичко.",
    "level": "Sätze"
  },
  {
    "de": "Wie viele Zimmer habt ihr?",
    "lv": "Колко стаи имате?",
    "level": "Sätze"
  },
  {
    "de": "Im Sommer fahre ich ans Meer.",
    "lv": "През лятото отивам на море.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du schwimmen?",
    "lv": "Можеш ли да плуваш?",
    "level": "Sätze"
  },
  {
    "de": "Schwimm nicht zu weit hinaus!",
    "lv": "Не плувай твърде навътре!",
    "level": "Sätze"
  },
  {
    "de": "Badest du jeden Tag?",
    "lv": "Къпеш ли се всеки ден?",
    "level": "Sätze"
  },
  {
    "de": "Bei schönem Wetter gehe ich angeln.",
    "lv": "При хубаво време ходя на риба.",
    "level": "Sätze"
  },
  {
    "de": "Wie sieht er aus?",
    "lv": "Как изглежда?",
    "level": "Sätze"
  },
  {
    "de": "Er hat sich aber recht verändert.",
    "lv": "Наистина доста се е променил.",
    "level": "Sätze"
  },
  {
    "de": "Wie ist er als Mensch?",
    "lv": "Какъв е като човек?",
    "level": "Sätze"
  },
  {
    "de": "Er ist immer nett und freundlich.",
    "lv": "Винаги е мил и любезен.",
    "level": "Sätze"
  },
  {
    "de": "Ich fühle mich nicht wohl.",
    "lv": "Не се чувствам добре.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe starke Kopfschmerzen.",
    "lv": "Имам силно главоболие.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe mich erkältet.",
    "lv": "Настинах.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Schnupfen.",
    "lv": "Имам хрема.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist schwindlig.",
    "lv": "Вие ми се свят.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Arzt gehen.",
    "lv": "Трябва да отида на лекар.",
    "level": "Sätze"
  },
  {
    "de": "Leg dich ins Bett!",
    "lv": "Легни си в леглото!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Fieber?",
    "lv": "Имаш ли температура?",
    "level": "Sätze"
  },
  {
    "de": "Gestern hatte ich erhöhte Temperatur.",
    "lv": "Вчера имах повишена температура.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Zahnschmerzen.",
    "lv": "Боли ме зъб.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Zahnarzt gehen.",
    "lv": "Трябва да отида на зъболекар.",
    "level": "Sätze"
  },
  {
    "de": "Weißt du, dass Finn krank ist?",
    "lv": "Знаеш ли, че Фин е болен?",
    "level": "Sätze"
  },
  {
    "de": "Laut Arzt wird er bald wieder gesund.",
    "lv": "Според лекаря скоро ще оздравее.",
    "level": "Sätze"
  },
  {
    "de": "Ich will meine Wohnung neu möblieren.",
    "lv": "Искам да обзаведа апартамента си наново.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das auf Raten kaufen?",
    "lv": "Мога ли да го купя на изплащане?",
    "level": "Sätze"
  },
  {
    "de": "Bleib im Bett, bis es dir besser geht!",
    "lv": "Остани в леглото, докато не се почувстваш по-добре!",
    "level": "Sätze"
  },
  {
    "de": "Noah hat in zwei Wochen schwimmen gelernt.",
    "lv": "Ноа се научи да плува за две седмици.",
    "level": "Sätze"
  },
  {
    "de": "Sei mit dem Essen noch vorsichtig.",
    "lv": "Засега внимавай с храната.",
    "level": "Sätze"
  },
  {
    "de": "Sprichst du Deutsch?",
    "lv": "Говориш ли немски?",
    "level": "Sätze"
  },
  {
    "de": "Ja, ein bisschen.",
    "lv": "Да, малко.",
    "level": "Sätze"
  },
  {
    "de": "Du sprichst ziemlich fließend.",
    "lv": "Говориш доста свободно.",
    "level": "Sätze"
  },
  {
    "de": "Wo hast du Deutsch gelernt?",
    "lv": "Къде научи немски?",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme seit einem Jahr Deutschstunden.",
    "lv": "От една година вземам уроци по немски.",
    "level": "Sätze"
  },
  {
    "de": "Ich suche immer Gelegenheit, Deutsch zu sprechen.",
    "lv": "Винаги търся възможност да говоря немски.",
    "level": "Sätze"
  },
  {
    "de": "Ist das Buch noch vorrätig?",
    "lv": "Книгата налична ли е още?",
    "level": "Sätze"
  },
  {
    "de": "Das Buch ist leider ausverkauft.",
    "lv": "Книгата, за съжаление, е изчерпана.",
    "level": "Sätze"
  },
  {
    "de": "Wann erscheint die neue Auflage?",
    "lv": "Кога ще излезе новото издание?",
    "level": "Sätze"
  },
  {
    "de": "Womit kann ich Ihnen helfen?",
    "lv": "С какво мога да Ви помогна?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie ganz frische Eier?",
    "lv": "Имате ли съвсем пресни яйца?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die?",
    "lv": "Колко струват?",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu teuer.",
    "lv": "Това е твърде скъпо.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir ein halbes Kilo abwiegen?",
    "lv": "Можете ли да ми претеглите половин килограм?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel muss ich zahlen?",
    "lv": "Колко трябва да платя?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet das Kilo?",
    "lv": "Колко струва килограмът?",
    "level": "Sätze"
  },
  {
    "de": "Wiegen Sie mir bitte zwei Kilo ab.",
    "lv": "Претеглете ми, моля, два килограма.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch Karotten?",
    "lv": "Имате ли и моркови?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie gutes Rindfleisch?",
    "lv": "Имате ли хубаво говеждо месо?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir zwei Kilo Hackfleisch.",
    "lv": "Дайте ми два килограма кайма.",
    "level": "Sätze"
  },
  {
    "de": "Ein Laib Brot, bitte, aber nicht zu knusprig.",
    "lv": "Един хляб, моля, но не много хрупкав.",
    "level": "Sätze"
  },
  {
    "de": "Das Brot ist frisch gebacken.",
    "lv": "Хлябът е прясно изпечен.",
    "level": "Sätze"
  },
  {
    "de": "Was für Obst haben Sie heute?",
    "lv": "Какви плодове имате днес?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die Äpfel?",
    "lv": "Колко струват ябълките?",
    "level": "Sätze"
  },
  {
    "de": "Dann nehme ich zwei Kilo Äpfel.",
    "lv": "Тогава ще взема два килограма ябълки.",
    "level": "Sätze"
  },
  {
    "de": "Die Birnen sind sehr teuer.",
    "lv": "Крушите са много скъпи.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir alles nach Hause liefern?",
    "lv": "Можете ли да ми доставите всичко до вкъщи?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie Reis?",
    "lv": "Имате ли ориз?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir bitte ein Kilo Reis.",
    "lv": "Дайте ми, моля, един килограм ориз.",
    "level": "Sätze"
  },
  {
    "de": "Danke, diesmal nicht.",
    "lv": "Благодаря, този път не.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet dieser Teppich?",
    "lv": "Колко струва този килим?",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Möbel in meine Wohnung liefern?",
    "lv": "Можете ли да доставите мебелите в апартамента ми?",
    "level": "Sätze"
  },
  {
    "de": "Bitte an der Kasse zahlen.",
    "lv": "Моля, платете на касата.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, machen Sie die Rechnung.",
    "lv": "Моля, пригответе ми сметката.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Meter?",
    "lv": "Колко струва метърът?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Stoff gefällt mir.",
    "lv": "Този плат ми харесва.",
    "level": "Sätze"
  },
  {
    "de": "Schneiden Sie mir bitte drei Meter ab.",
    "lv": "Отрежете ми, моля, три метра.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch andere Muster?",
    "lv": "Имате ли и други шарки? • Имате ли и други мостри?",
    "level": "Sätze"
  },
  {
    "de": "Diese Farbe gefällt mir nicht.",
    "lv": "Този цвят не ми харесва.",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir eine hellere.",
    "lv": "Дайте ми по-светъл.",
    "level": "Sätze"
  },
  {
    "de": "Was kosten diese Socken?",
    "lv": "Колко струват тези чорапи?",
    "level": "Sätze"
  },
  {
    "de": "Welche Handschuhe wünschen Sie?",
    "lv": "Какви ръкавици желаете?",
    "level": "Sätze"
  },
  {
    "de": "Die sind mir etwas zu eng.",
    "lv": "Малко са ми тесни.",
    "level": "Sätze"
  },
  {
    "de": "So, nun passen sie gut.",
    "lv": "Така, сега стават добре.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir einen guten Schneider empfehlen?",
    "lv": "Можеш ли да ми препоръчаш добър шивач?",
    "level": "Sätze"
  },
  {
    "de": "Ich will einen Anzug bestellen.",
    "lv": "Искам да си поръчам костюм.",
    "level": "Sätze"
  },
  {
    "de": "Wann wird er fertig sein?",
    "lv": "Кога ще бъде готов?",
    "level": "Sätze"
  },
  {
    "de": "Der Anzug sitzt gut.",
    "lv": "Костюмът стои добре.",
    "level": "Sätze"
  },
  {
    "de": "Die Hose ist zu lang.",
    "lv": "Панталонът е твърде дълъг.",
    "level": "Sätze"
  },
  {
    "de": "Bitte reinigen und bügeln Sie ihn!",
    "lv": "Моля, почистете го и го изгладете!",
    "level": "Sätze"
  },
  {
    "de": "Wann wird das Kleid fertig sein?",
    "lv": "Кога ще бъде готова роклята?",
    "level": "Sätze"
  },
  {
    "de": "Die Schuhe sind zu eng.",
    "lv": "Обувките са твърде тесни.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Schuhe heute reparieren?",
    "lv": "Можете ли да поправите обувките днес?",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich die Schuhe abholen?",
    "lv": "Кога мога да взема обувките?",
    "level": "Sätze"
  },
  {
    "de": "Meine Armbanduhr funktioniert nicht.",
    "lv": "Ръчният ми часовник не работи.",
    "level": "Sätze"
  },
  {
    "de": "Sie geht fünf Minuten vor.",
    "lv": "Избързва с пет минути.",
    "level": "Sätze"
  },
  {
    "de": "Bist du kurzsichtig oder weitsichtig?",
    "lv": "Имаш ли късогледство или далекогледство?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte eine Brille kaufen.",
    "lv": "Бих искал да си купя очила.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie meine Brille reparieren?",
    "lv": "Можете ли да поправите очилата ми?",
    "level": "Sätze"
  },
  {
    "de": "Das dauert nur eine Viertelstunde.",
    "lv": "Това отнема само четвърт час.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist mir zu hoch.",
    "lv": "Цената е твърде висока за мен.",
    "level": "Sätze"
  },
  {
    "de": "Ich brauche zwei Fotos für meinen Pass.",
    "lv": "Трябват ми две снимки за паспорта.",
    "level": "Sätze"
  },
  {
    "de": "Bitte packen Sie es ein und schicken Sie es mir nach Hause.",
    "lv": "Моля, опаковайте го и ми го изпратете вкъщи.",
    "level": "Sätze"
  },
  {
    "de": "Wir haben feste Preise.",
    "lv": "Цените ни са фиксирани.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, fotografieren Sie mich.",
    "lv": "Моля, снимайте ме.",
    "level": "Sätze"
  },
  {
    "de": "Setzen Sie sich, schauen Sie gerade in die Kamera und bewegen Sie sich nicht!",
    "lv": "Седнете, гледайте право в камерата и не се движете!",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich das Probebild sehen?",
    "lv": "Кога мога да видя пробната снимка?",
    "level": "Sätze"
  },
  {
    "de": "Wann sind die Fotos fertig?",
    "lv": "Кога ще бъдат готови снимките?",
    "level": "Sätze"
  },
  {
    "de": "Die Aufnahme ist gelungen.",
    "lv": "Снимката е сполучлива.",
    "level": "Sätze"
  },
  {
    "de": "Die Fotos sind gut geworden.",
    "lv": "Снимките са се получили добре.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie das Foto auch vergrößern?",
    "lv": "Можете ли и да увеличите снимката?",
    "level": "Sätze"
  },
  {
    "de": "Sind diese Steine echt?",
    "lv": "Тези камъни истински ли са?",
    "level": "Sätze"
  },
  {
    "de": "Ist das echtes Gold?",
    "lv": "Това истинско злато ли е?",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir bitte Trauringe.",
    "lv": "Покажете ми, моля, брачни халки.",
    "level": "Sätze"
  },
  {
    "de": "Der Ring ist mir etwas zu weit.",
    "lv": "Пръстенът ми е малко широк.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann ihn enger machen.",
    "lv": "Мога да го стесня.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Ring passt mir.",
    "lv": "Този пръстен ми става.",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir schöne Geschenkideen.",
    "lv": "Покажете ми хубави идеи за подаръци.",
    "level": "Sätze"
  },
  {
    "de": "Wie gefallen dir diese Ohrringe?",
    "lv": "Как ти харесват тези обеци?",
    "level": "Sätze"
  },
  {
    "de": "Diese Brosche ist wirklich schön.",
    "lv": "Тази брошка е наистина хубава.",
    "level": "Sätze"
  },
  {
    "de": "Der Stein ist ein Saphir.",
    "lv": "Камъкът е сапфир.",
    "level": "Sätze"
  },
  {
    "de": "Das ist kein echter Stein, das ist Glas.",
    "lv": "Това не е истински камък, това е стъкло.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Armband kann ich Ihnen besonders empfehlen.",
    "lv": "Особено тази гривна мога да Ви препоръчам.",
    "level": "Sätze"
  },
  {
    "de": "Es ist besonders schön gearbeitet.",
    "lv": "Изработена е особено красиво.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist nicht hoch.",
    "lv": "Цената не е висока.",
    "level": "Sätze"
  },
  {
    "de": "Bekomme ich die Schachtel gratis?",
    "lv": "Ще получа ли кутийката безплатно?",
    "level": "Sätze"
  },
  {
    "de": "Alle Schmuckstücke sind gestempelt.",
    "lv": "Всички бижута са с проба.",
    "level": "Sätze"
  },
  {
    "de": "Falls es meiner Frau nicht gefällt, kann ich es umtauschen?",
    "lv": "Ако на жена ми не ѝ хареса, мога ли да го заменя?",
    "level": "Sätze"
  },
  {
    "de": "Natürlich, jederzeit.",
    "lv": "Разбира се, по всяко време.",
    "level": "Sätze"
  }
];

window.SENTENCE_ENTRIES = SENTENCE_ENTRIES;

const SENTENCE_ENTRIES = [
  {
    "de": "Hüte dich davor!",
    "lv": "Остерегайтесь этого!",
    "level": "Sätze"
  },
  {
    "de": "Wenn nichts dazwischenkommt.",
    "lv": "Если ничего не мешает. • Если все пойдет по плану.",
    "level": "Sätze"
  },
  {
    "de": "Das kann ich mir denken!",
    "lv": "Јас го знам тоа!",
    "level": "Sätze"
  },
  {
    "de": "Ist er denn krank?",
    "lv": "Он тогда болен?",
    "level": "Sätze"
  },
  {
    "de": "Was denn?",
    "lv": "Какво тогава?",
    "level": "Sätze"
  },
  {
    "de": "Desto mehr.",
    "lv": "Тем более.",
    "level": "Sätze"
  },
  {
    "de": "Je mehr, desto besser.",
    "lv": "Чем больше, тем лучше.",
    "level": "Sätze"
  },
  {
    "de": "Alles deutet auf Regen.",
    "lv": "Все указывает на дело.",
    "level": "Sätze"
  },
  {
    "de": "Damit ist mir wenig gedient.",
    "lv": "Для меня это не имеет особого смысла.",
    "level": "Sätze"
  },
  {
    "de": "Er ist dienstlich verhindert.",
    "lv": "Он не может прийти из-за работы.",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie doch!",
    "lv": "Зборувај!",
    "level": "Sätze"
  },
  {
    "de": "Es donnert.",
    "lv": "Гром гремит.",
    "level": "Sätze"
  },
  {
    "de": "Doppelt so groß.",
    "lv": "В два раза больше.",
    "level": "Sätze"
  },
  {
    "de": "Von dort.",
    "lv": "Оттуда.",
    "level": "Sätze"
  },
  {
    "de": "Die Zeit drängt.",
    "lv": "Время истекает.",
    "level": "Sätze"
  },
  {
    "de": "Ihn drücken Sorgen.",
    "lv": "Его охватывает беспокойство.",
    "level": "Sätze"
  },
  {
    "de": "Hast du das Buch durchgearbeitet?",
    "lv": "Вы внимательно прочитали книгу?",
    "level": "Sätze"
  },
  {
    "de": "Kein Durchgang!",
    "lv": "Не проходите! • Выход закрыт!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich Sie bitten?",
    "lv": "Могу я спросить тебя",
    "level": "Sätze"
  },
  {
    "de": "Ich bin durstig.",
    "lv": "Я хочу пить.",
    "level": "Sätze"
  },
  {
    "de": "Eben das meine ich.",
    "lv": "Это именно то, что я имею в виду.",
    "level": "Sätze"
  },
  {
    "de": "Es ist ganz egal.",
    "lv": "Это вообще не имеет значения.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie eigentlich?",
    "lv": "Чего ты действительно хочешь?",
    "level": "Sätze"
  },
  {
    "de": "Eilt es mit dieser Sache?",
    "lv": "Это дело срочное?",
    "level": "Sätze"
  },
  {
    "de": "Eilt sehr!",
    "lv": "Очень срочно!",
    "level": "Sätze"
  },
  {
    "de": "Ich habe es eilig.",
    "lv": "Ја заспав.",
    "level": "Sätze"
  },
  {
    "de": "Du bildest dir nur ein, krank zu sein.",
    "lv": "Вы просто представляете, что вы больны.",
    "level": "Sätze"
  },
  {
    "de": "Was fällt dir ein?",
    "lv": "Что вам приходит на ум?",
    "level": "Sätze"
  },
  {
    "de": "Es war einmal.",
    "lv": "Когда-то было.",
    "level": "Sätze"
  },
  {
    "de": "Steigen Sie bitte ein!",
    "lv": "Пожалуйста, заходите!",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie ein!",
    "lv": "Пожалуйста, заходите!",
    "level": "Sätze"
  },
  {
    "de": "Einzelnes hat mir dort gefallen.",
    "lv": "Мне там понравились некоторые вещи.",
    "level": "Sätze"
  },
  {
    "de": "Es empfiehlt sich.",
    "lv": "Рекомендуется.",
    "level": "Sätze"
  },
  {
    "de": "Diese Flasche enthält Essig.",
    "lv": "Эта бутылка содержит уксус.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldigen Sie bitte!",
    "lv": "Извините, пожалуйста!",
    "level": "Sätze"
  },
  {
    "de": "Entweder... oder...",
    "lv": "Либо... либо...",
    "level": "Sätze"
  },
  {
    "de": "Wer war der Erste?",
    "lv": "Кто был первым?",
    "level": "Sätze"
  },
  {
    "de": "Wer fehlt heute?",
    "lv": "Кто сегодня не пришел?",
    "level": "Sätze"
  },
  {
    "de": "Was fehlt dir?",
    "lv": "Какво става с теб",
    "level": "Sätze"
  },
  {
    "de": "Wie heißen Sie?",
    "lv": "Како се викаш?",
    "level": "Sätze"
  },
  {
    "de": "Was soll das heißen?",
    "lv": "Какво означава?",
    "level": "Sätze"
  },
  {
    "de": "Bitte treten Sie näher heran!",
    "lv": "Пожалуйста, подойди ближе!",
    "level": "Sätze"
  },
  {
    "de": "Heraus mit der Sprache!",
    "lv": "Разговаривать! • Истории!",
    "level": "Sätze"
  },
  {
    "de": "im Herbst",
    "lv": "Осенью",
    "level": "Sätze"
  },
  {
    "de": "Meine Herrschaften!",
    "lv": "Дамы и господа!",
    "level": "Sätze"
  },
  {
    "de": "von heute an",
    "lv": "Начиная с сегодняшнего дня",
    "level": "Sätze"
  },
  {
    "de": "heute früh",
    "lv": "Сегодня утром",
    "level": "Sätze"
  },
  {
    "de": "heute Nacht",
    "lv": "Вчера вечером",
    "level": "Sätze"
  },
  {
    "de": "Zu Hilfe!",
    "lv": "Помощь!",
    "level": "Sätze"
  },
  {
    "de": "Ich lerne jeden Tag Deutsch.",
    "lv": "Я изучаю немецкий каждый день.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das bitte wiederholen?",
    "lv": "Можете ли да го повторите тоа, ве молам?",
    "level": "Sätze"
  },
  {
    "de": "Wir treffen uns am Bahnhof.",
    "lv": "Срещни ме на гарата.",
    "level": "Sätze"
  },
  {
    "de": "Ich stimme dir teilweise zu.",
    "lv": "Частично я с вами согласен.",
    "level": "Sätze"
  },
  {
    "de": "Diese Entscheidung hat weitreichende Folgen.",
    "lv": "Это решение имеет далеко идущие последствия.",
    "level": "Sätze"
  },
  {
    "de": "Man sollte mehrere Perspektiven berücksichtigen.",
    "lv": "Следует рассмотреть несколько точек зрения.",
    "level": "Sätze"
  },
  {
    "de": "Könnten Sie das näher erläutern?",
    "lv": "Можете ли да го објасните ова подетално?",
    "level": "Sätze"
  },
  {
    "de": "Was mich anbelangt,...",
    "lv": "Что касается меня...",
    "level": "Sätze"
  },
  {
    "de": "Wie alt sind Sie?",
    "lv": "Сколько тебе лет?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zwanzig Jahre alt.",
    "lv": "Мне двадцать лет.",
    "level": "Sätze"
  },
  {
    "de": "Von heute an.",
    "lv": "С сегодняшнего дня.",
    "level": "Sätze"
  },
  {
    "de": "Von jetzt an.",
    "lv": "Впредь.",
    "level": "Sätze"
  },
  {
    "de": "Anders geht es nicht.",
    "lv": "Другого пути нет.",
    "level": "Sätze"
  },
  {
    "de": "Rufen Sie mich an.",
    "lv": "Позвоните мне.",
    "level": "Sätze"
  },
  {
    "de": "Bitte stellen Sie das Radio ab.",
    "lv": "Ве молиме исклучете го радиото.",
    "level": "Sätze"
  },
  {
    "de": "Achte bitte auf den Verkehr.",
    "lv": "Пожалуйста, обратите внимание на трафик.",
    "level": "Sätze"
  },
  {
    "de": "Darauf musst du achten.",
    "lv": "Вам следует обратить на это внимание.",
    "level": "Sätze"
  },
  {
    "de": "Heute mache ich es anders.",
    "lv": "Сегодня я сделаю это по-другому.",
    "level": "Sätze"
  },
  {
    "de": "Wir warten auf den Bus.",
    "lv": "Мы ждем автобус.",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt allein.",
    "lv": "Он живет один.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Ausbildung absolviert.",
    "lv": "Я закончил обучение. • Я закончил образование.",
    "level": "Sätze"
  },
  {
    "de": "Ich warte den Regen ab.",
    "lv": "Я подожду, пока дождь прекратится.",
    "level": "Sätze"
  },
  {
    "de": "Er arbeitet in der Verkaufsabteilung.",
    "lv": "Он работает в отделе продаж.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin allergisch gegen Katzen.",
    "lv": "У меня аллергия на кошек.",
    "level": "Sätze"
  },
  {
    "de": "Andererseits verstehe ich ihn.",
    "lv": "С другой стороны, я его понимаю.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Situation analysiert.",
    "lv": "Я проанализировал ситуацию.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat meinen Vorschlag akzeptiert.",
    "lv": "Она приняла мое предложение.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte das genauer analysieren.",
    "lv": "Я хочу проанализировать это более точно.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte den Vertrag ändern.",
    "lv": "Я хочу изменить договор.",
    "level": "Sätze"
  },
  {
    "de": "Er ändert ständig seine Meinung.",
    "lv": "Он постоянно меняет свое мнение.",
    "level": "Sätze"
  },
  {
    "de": "Ähnliche Probleme hatten wir schon früher.",
    "lv": "И претходно имавме слични проблеми.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ahnung!",
    "lv": "Без понятия!",
    "level": "Sätze"
  },
  {
    "de": "Hör auf zu jammern.",
    "lv": "Перестаньте жаловаться.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Kleid ist akademisch gekleidet.",
    "lv": "Овој фустан е стилски и конзервативен.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre gerne Akkordeonmusik.",
    "lv": "Мне нравится слушать музыку на аккордеоне.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das Gerät anklicken?",
    "lv": "Можете ли вы нажать на устройство?",
    "level": "Sätze"
  },
  {
    "de": "Bitte öffne die Datei und klicke darauf.",
    "lv": "Пожалуйста, откройте файл и нажмите на него.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe einen Unfall gehabt.",
    "lv": "Я попал в аварию.",
    "level": "Sätze"
  },
  {
    "de": "Wir laufen zum Bahnhof.",
    "lv": "Одиме до станицата.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schalte den Fernseher an.",
    "lv": "Моля, включете телевизора.",
    "level": "Sätze"
  },
  {
    "de": "Mein Computer ist abgestürzt.",
    "lv": "Мой компьютер сломался.",
    "level": "Sätze"
  },
  {
    "de": "Am Wochenende gehe ich angeln.",
    "lv": "Я пойду на рыбалку на выходных.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe den Anruf verpasst.",
    "lv": "Я пропустил звонок.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mich später anrufen?",
    "lv": "Можешь позвонить мне позже",
    "level": "Sätze"
  },
  {
    "de": "Bitte nimm meinen Vorschlag an.",
    "lv": "Пожалуйста, примите мое предложение.",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme dein Angebot an.",
    "lv": "Я принимаю ваше предложение.",
    "level": "Sätze"
  },
  {
    "de": "Er nahm die Einladung an.",
    "lv": "Он принял приглашение.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Angst vor Spinnen.",
    "lv": "Я боюсь пауков.",
    "level": "Sätze"
  },
  {
    "de": "Keine Angst, alles wird gut.",
    "lv": "Не бойтесь, все будет хорошо.",
    "level": "Sätze"
  },
  {
    "de": "Anklang finden.",
    "lv": "Найдите эхо. • Найдите отзывчивость",
    "level": "Sätze"
  },
  {
    "de": "Es kommt darauf an.",
    "lv": "Это зависит от этого.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Anlass.",
    "lv": "Из-за этого времени. • В этом отношении",
    "level": "Sätze"
  },
  {
    "de": "Nehmen wir an, dass...",
    "lv": "Да претпоставиме дека ...",
    "level": "Sätze"
  },
  {
    "de": "Was hast du da angerichtet?",
    "lv": "Што направи таму?",
    "level": "Sätze"
  },
  {
    "de": "Bis ans Ende.",
    "lv": "До конца.",
    "level": "Sätze"
  },
  {
    "de": "Du glaubst mir anscheinend nicht.",
    "lv": "Кажется, ты мне не веришь.",
    "level": "Sätze"
  },
  {
    "de": "Meiner Ansicht nach...",
    "lv": "По моему мнению...",
    "level": "Sätze"
  },
  {
    "de": "Stell dich nicht so an!",
    "lv": "Не притворяйся!",
    "level": "Sätze"
  },
  {
    "de": "An die Arbeit gehen.",
    "lv": "Приступайте к работе.",
    "level": "Sätze"
  },
  {
    "de": "Außer Atem sein.",
    "lv": "Запыхаться.",
    "level": "Sätze"
  },
  {
    "de": "Guten Appetit!",
    "lv": "Добър апетит!",
    "level": "Sätze"
  },
  {
    "de": "In einem Atemzug.",
    "lv": "На одном дыхании.",
    "level": "Sätze"
  },
  {
    "de": "Auf jeden Fall.",
    "lv": "В каждом случае.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal war alles still.",
    "lv": "Внезапно все стало тихо.",
    "level": "Sätze"
  },
  {
    "de": "Bitte mach die Tür auf!",
    "lv": "Пожалуйста, откройте дверь!",
    "level": "Sätze"
  },
  {
    "de": "Er hat den Kredit aufgenommen.",
    "lv": "Он взял кредит.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen heute aufräumen.",
    "lv": "Сегодня нам нужно привести в порядок комнату.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre jetzt auf.",
    "lv": "Я остановлюсь сейчас.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schon auf.",
    "lv": "Тој веќе стана.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen das Treffen verschieben.",
    "lv": "Ќе мораме да го презакажеме состанокот.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat mich aufgeregt.",
    "lv": "Она меня раздражала.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal.",
    "lv": "Внезапно.",
    "level": "Sätze"
  },
  {
    "de": "Auf der Stelle.",
    "lv": "Немедленно.",
    "level": "Sätze"
  },
  {
    "de": "Für den Schaden aufkommen.",
    "lv": "Покрыть ущерб.",
    "level": "Sätze"
  },
  {
    "de": "Bitte die Tür auf!",
    "lv": "Откройте дверь, пожалуйста!",
    "level": "Sätze"
  },
  {
    "de": "Aufrecht sitzen.",
    "lv": "Сядьте прямо.",
    "level": "Sätze"
  },
  {
    "de": "Er ist auf.",
    "lv": "Он встал.",
    "level": "Sätze"
  },
  {
    "de": "Alle Kräfte aufwenden.",
    "lv": "Посвятите все свои силы.",
    "level": "Sätze"
  },
  {
    "de": "Viel Mühe aufwenden.",
    "lv": "Обидете се многу напорно.",
    "level": "Sätze"
  },
  {
    "de": "Geh mir aus den Augen!",
    "lv": "Не смотри на меня больше!",
    "level": "Sätze"
  },
  {
    "de": "Unter vier Augen.",
    "lv": "Через два. • Тихо",
    "level": "Sätze"
  },
  {
    "de": "Aus Mangel an Zeit.",
    "lv": "Из-за нехватки времени.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Grunde.",
    "lv": "По этой причине.",
    "level": "Sätze"
  },
  {
    "de": "Alle außer dir.",
    "lv": "Все, кроме тебя.",
    "level": "Sätze"
  },
  {
    "de": "Auf Äußerlichkeiten Wert legen.",
    "lv": "Придавайте большое значение внешнему виду.",
    "level": "Sätze"
  },
  {
    "de": "Im äußersten Fall.",
    "lv": "Во најлош случај.",
    "level": "Sätze"
  },
  {
    "de": "Äußerst wichtig.",
    "lv": "Чрезвычайно важно.",
    "level": "Sätze"
  },
  {
    "de": "Aussicht auf die See.",
    "lv": "Вид на море.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gute Aussichten.",
    "lv": "У него хорошие шансы.",
    "level": "Sätze"
  },
  {
    "de": "Wie wird dieses Wort ausgesprochen?",
    "lv": "Как произносится это слово?",
    "level": "Sätze"
  },
  {
    "de": "Sein Beileid aussprechen.",
    "lv": "Выразить соболезнования.",
    "level": "Sätze"
  },
  {
    "de": "Wann wurden die Meisterschaftskämpfe ausgetragen?",
    "lv": "Когда был чемпионат?",
    "level": "Sätze"
  },
  {
    "de": "Welchen Beruf üben Sie aus?",
    "lv": "Какова ваша профессия?",
    "level": "Sätze"
  },
  {
    "de": "Einfluss ausüben.",
    "lv": "Чтобы повлиять.",
    "level": "Sätze"
  },
  {
    "de": "Auswärts essen.",
    "lv": "Јадете надвор.",
    "level": "Sätze"
  },
  {
    "de": "Per Bahn.",
    "lv": "По железной дороге.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Bahn.",
    "lv": "По железной дороге.",
    "level": "Sätze"
  },
  {
    "de": "Möglichst bald.",
    "lv": "Как можно скорее.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist Angst und bange.",
    "lv": "Многу се плашам од неа.",
    "level": "Sätze"
  },
  {
    "de": "Auf die lange Bank schieben.",
    "lv": "Откладывать. • Перетащите на нужное расстояние. • Отложите на неопределенный срок.",
    "level": "Sätze"
  },
  {
    "de": "Bar zahlen.",
    "lv": "Оплата наличными.",
    "level": "Sätze"
  },
  {
    "de": "Erz bauen.",
    "lv": "Получите руду.",
    "level": "Sätze"
  },
  {
    "de": "Mist bauen.",
    "lv": "Стрелять. • Выставить себя дураком",
    "level": "Sätze"
  },
  {
    "de": "Ich bin beauftragt.",
    "lv": "Ми доделија работа.",
    "level": "Sätze"
  },
  {
    "de": "Nach Bedarf.",
    "lv": "По мере необходимости.",
    "level": "Sätze"
  },
  {
    "de": "Ich bedauere ihn.",
    "lv": "Мне его жаль.",
    "level": "Sätze"
  },
  {
    "de": "Was bedeutet dieses Wort?",
    "lv": "Што значи овој збор?",
    "level": "Sätze"
  },
  {
    "de": "Unter der Bedingung, dass...",
    "lv": "При условии, что...",
    "level": "Sätze"
  },
  {
    "de": "Sie sieht bedrückt aus.",
    "lv": "Она выглядит подавленной.",
    "level": "Sätze"
  },
  {
    "de": "Hinweise befolgen.",
    "lv": "Следуйте инструкциям.",
    "level": "Sätze"
  },
  {
    "de": "Befehle befolgen.",
    "lv": "Выполняйте приказы.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Post befördern.",
    "lv": "Отправьте по почте.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin begierig zu wissen.",
    "lv": "Я действительно хочу знать.",
    "level": "Sätze"
  },
  {
    "de": "Zu Beginn.",
    "lv": "В начале.",
    "level": "Sätze"
  },
  {
    "de": "Am Beginn.",
    "lv": "В начале.",
    "level": "Sätze"
  },
  {
    "de": "Bei Beginn.",
    "lv": "Започнете",
    "level": "Sätze"
  },
  {
    "de": "In Begleitung.",
    "lv": "Сопровождается.",
    "level": "Sätze"
  },
  {
    "de": "Mit seiner Begleitung.",
    "lv": "С сопровождением.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schwer von Begriff.",
    "lv": "Он медленно воспринимает. • У него медленное мышление",
    "level": "Sätze"
  },
  {
    "de": "Im Gedächtnis behalten.",
    "lv": "Помнить. • Храните в памяти",
    "level": "Sätze"
  },
  {
    "de": "Bei Tisch.",
    "lv": "За столом.",
    "level": "Sätze"
  },
  {
    "de": "Bei Sinnen sein.",
    "lv": "Быть в здравом уме.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tage.",
    "lv": "В течение дня.",
    "level": "Sätze"
  },
  {
    "de": "Bei weitem nicht so.",
    "lv": "Нисколько.",
    "level": "Sätze"
  },
  {
    "de": "Alle beide.",
    "lv": "Оба два.",
    "level": "Sätze"
  },
  {
    "de": "Stürmischer Beifall brach los.",
    "lv": "Раздались бурные аплодисменты.",
    "level": "Sätze"
  },
  {
    "de": "Beifall finden.",
    "lv": "Получите согласие.",
    "level": "Sätze"
  },
  {
    "de": "Beileid aussprechen.",
    "lv": "Выразить соболезнования.",
    "level": "Sätze"
  },
  {
    "de": "Auf eigenen Beinen stehen.",
    "lv": "Быть финансово независимым.",
    "level": "Sätze"
  },
  {
    "de": "Zum Beispiel.",
    "lv": "Например.",
    "level": "Sätze"
  },
  {
    "de": "Beistand leisten.",
    "lv": "Чтобы помочь. • Оказать помощь",
    "level": "Sätze"
  },
  {
    "de": "Beitrag leisten.",
    "lv": "Инвестируйте свою долю.",
    "level": "Sätze"
  },
  {
    "de": "Jemandes Bekanntschaft machen.",
    "lv": "Познакомьтесь с кем-нибудь.",
    "level": "Sätze"
  },
  {
    "de": "Bekanntschaft anknüpfen.",
    "lv": "Познакомьтесь друг с другом. • Установить контакт",
    "level": "Sätze"
  },
  {
    "de": "Belegte Brötchen.",
    "lv": "Сэндвичи с начинкой.",
    "level": "Sätze"
  },
  {
    "de": "Nach Ihrem Belieben.",
    "lv": "Как хочешь.",
    "level": "Sätze"
  },
  {
    "de": "Zu jeder beliebigen Zeit.",
    "lv": "В любое время.",
    "level": "Sätze"
  },
  {
    "de": "Schweigen beobachten.",
    "lv": "Соблюдать тишину.",
    "level": "Sätze"
  },
  {
    "de": "Zur Bequemlichkeit.",
    "lv": "Для удобства.",
    "level": "Sätze"
  },
  {
    "de": "Bereit sein.",
    "lv": "Будьте готовы. • Будьте спокойны",
    "level": "Sätze"
  },
  {
    "de": "Unfallopfer bergen.",
    "lv": "Спасение пострадавших в случае аварии.",
    "level": "Sätze"
  },
  {
    "de": "Bericht erstatten.",
    "lv": "Отчет. • Предоставить отчет. • Предоставить обзор.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind besetzt.",
    "lv": "Все места заняты.",
    "level": "Sätze"
  },
  {
    "de": "Neue Besen kehren gut.",
    "lv": "Новая метла хорошо метет.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt ein Haus.",
    "lv": "У него есть дом.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt viel Mut.",
    "lv": "Он обладает большим мужеством.",
    "level": "Sätze"
  },
  {
    "de": "Desto besser.",
    "lv": "Тем лучше.",
    "level": "Sätze"
  },
  {
    "de": "Gute Besserung!",
    "lv": "Поправляйся! • Поправляйся!",
    "level": "Sätze"
  },
  {
    "de": "Beim besten Willen.",
    "lv": "Что вы хотите.",
    "level": "Sätze"
  },
  {
    "de": "Am besten.",
    "lv": "Лучшее.",
    "level": "Sätze"
  },
  {
    "de": "Es besteht Zweifel.",
    "lv": "Есть сомнения.",
    "level": "Sätze"
  },
  {
    "de": "Seine Aufgabe besteht darin...",
    "lv": "Его задача...",
    "level": "Sätze"
  },
  {
    "de": "Grüße bestellen.",
    "lv": "Скажи привет.",
    "level": "Sätze"
  },
  {
    "de": "Ganz bestimmt.",
    "lv": "Определенно. • Полностью безопасно",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch kommen.",
    "lv": "Приходите в гости.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch sein.",
    "lv": "Посетить. • Посетить",
    "level": "Sätze"
  },
  {
    "de": "Oft Konzerte besuchen.",
    "lv": "Часто хожу на концерты.",
    "level": "Sätze"
  },
  {
    "de": "Welche Schule hat er besucht?",
    "lv": "В какой школе он учился?",
    "level": "Sätze"
  },
  {
    "de": "In Betracht ziehen.",
    "lv": "Примите во внимание. • Учитывать",
    "level": "Sätze"
  },
  {
    "de": "Außer Betracht lassen.",
    "lv": "Игнорировать. • Не считайте",
    "level": "Sätze"
  },
  {
    "de": "Er betreibt ein Hotel.",
    "lv": "Он управляет отелем.",
    "level": "Sätze"
  },
  {
    "de": "Alle beiden.",
    "lv": "Оба два.",
    "level": "Sätze"
  },
  {
    "de": "Alles bezahlen.",
    "lv": "Платите все.",
    "level": "Sätze"
  },
  {
    "de": "Bezüglich auf etwas.",
    "lv": "Касательно чего-то.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön.",
    "lv": "Ве молам",
    "level": "Sätze"
  },
  {
    "de": "Wie bitte?",
    "lv": "Как, пожалуйста",
    "level": "Sätze"
  },
  {
    "de": "Bitte sehr.",
    "lv": "Ве молам",
    "level": "Sätze"
  },
  {
    "de": "Ich habe eine Bitte an Sie.",
    "lv": "У меня к вам просьба.",
    "level": "Sätze"
  },
  {
    "de": "Trompete blasen.",
    "lv": "Протрубите в трубу.",
    "level": "Sätze"
  },
  {
    "de": "In einem Buch blättern.",
    "lv": "Подреди книга.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßen Füßen.",
    "lv": "Боси нозе.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßem Auge.",
    "lv": "Невооруженным глазом.",
    "level": "Sätze"
  },
  {
    "de": "Danke für die Blumen!",
    "lv": "Спасибо за цветы!",
    "level": "Sätze"
  },
  {
    "de": "Alles in Butter.",
    "lv": "Се е во ред",
    "level": "Sätze"
  },
  {
    "de": "Bitte checken.",
    "lv": "Да се ​​провери. • Проверете",
    "level": "Sätze"
  },
  {
    "de": "Da ist er!",
    "lv": "Вот он!",
    "level": "Sätze"
  },
  {
    "de": "Alles spricht dafür.",
    "lv": "Все говорит хорошо.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann nichts dafür.",
    "lv": "Я ничего не могу там сделать.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin dagegen.",
    "lv": "Аз съм против това.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe nichts dagegen.",
    "lv": "Я не возражаю против этого.",
    "level": "Sätze"
  },
  {
    "de": "Von daheim.",
    "lv": "Из дома.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Dame ziehen.",
    "lv": "Сделайте женственный ход.",
    "level": "Sätze"
  },
  {
    "de": "Es dämmert.",
    "lv": "Темнеет. • Рассвет.",
    "level": "Sätze"
  },
  {
    "de": "Danke schön!",
    "lv": "Спасибо! • Спасибо!",
    "level": "Sätze"
  },
  {
    "de": "Dann und wann.",
    "lv": "Время от времени.",
    "level": "Sätze"
  },
  {
    "de": "Darauf kannst du dich verlassen.",
    "lv": "Можете да разчитате на това.",
    "level": "Sätze"
  },
  {
    "de": "Daraus wird nichts.",
    "lv": "Ничего из этого не выйдет.",
    "level": "Sätze"
  },
  {
    "de": "So dass...",
    "lv": "Так что...",
    "level": "Sätze"
  },
  {
    "de": "Für wen halten Sie mich?",
    "lv": "Как ты думаешь, кто я?",
    "level": "Sätze"
  },
  {
    "de": "Hände weg!",
    "lv": "Руки прочь!",
    "level": "Sätze"
  },
  {
    "de": "Lass den Kopf nicht hängen!",
    "lv": "Не опускайте голову!",
    "level": "Sätze"
  },
  {
    "de": "zu Hause",
    "lv": "У дома",
    "level": "Sätze"
  },
  {
    "de": "nach Hause gehen",
    "lv": "Иди домой",
    "level": "Sätze"
  },
  {
    "de": "von Haus aus",
    "lv": "С детства • С самого начала",
    "level": "Sätze"
  },
  {
    "de": "Meinen herzlichsten Glückwunsch!",
    "lv": "Поздравляем!",
    "level": "Sätze"
  },
  {
    "de": "Seien Sie so gut!",
    "lv": "Будьте так любезны! • Будь такой хорошей!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie die Güte!",
    "lv": "Будьте так любезны!",
    "level": "Sätze"
  },
  {
    "de": "Was hast du?",
    "lv": "Что с тобой не так? • Что случилось?",
    "level": "Sätze"
  },
  {
    "de": "Gestatten Sie bitte!",
    "lv": "Разрешите мне, пожалуйста!",
    "level": "Sätze"
  },
  {
    "de": "Ist es gestattet zu rauchen?",
    "lv": "Може ли да ја пушам",
    "level": "Sätze"
  },
  {
    "de": "Ich muss gestehen, dass...",
    "lv": "Морам да признаам...",
    "level": "Sätze"
  },
  {
    "de": "gestern früh",
    "lv": "Вчера рано утром",
    "level": "Sätze"
  },
  {
    "de": "gestern Abend",
    "lv": "Вчера вечером",
    "level": "Sätze"
  },
  {
    "de": "Es ist mir gleichgültig, ob...",
    "lv": "Мне все равно, если...",
    "level": "Sätze"
  },
  {
    "de": "Was ist geschehen?",
    "lv": "Какво е станало",
    "level": "Sätze"
  },
  {
    "de": "Mach keine Geschichten!",
    "lv": "Не делайте глупостей! • Не шутите!",
    "level": "Sätze"
  },
  {
    "de": "Geschweige denn...",
    "lv": "Не говоря уже об этом. • Где еще",
    "level": "Sätze"
  },
  {
    "de": "Gehen Sie geradeaus!",
    "lv": "Идите прямо!",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es Ihnen?",
    "lv": "Как дела • Как дела?",
    "level": "Sätze"
  },
  {
    "de": "Frag ihn gelegentlich, ob...",
    "lv": "Спроси его, выйдет ли он, если...",
    "level": "Sätze"
  },
  {
    "de": "morgen früh",
    "lv": "Завтра утром",
    "level": "Sätze"
  },
  {
    "de": "im Frühling",
    "lv": "Весной",
    "level": "Sätze"
  },
  {
    "de": "Was gibt’s Neues?",
    "lv": "Что нового?",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Brief folgt, dass...",
    "lv": "Из этого письма следует, что...",
    "level": "Sätze"
  },
  {
    "de": "Fahre fort!",
    "lv": "Так держать!",
    "level": "Sätze"
  },
  {
    "de": "Er ist kein Freund von...",
    "lv": "Ему не нравится...",
    "level": "Sätze"
  },
  {
    "de": "Es erwies sich, dass...",
    "lv": "Оказалось, что...",
    "level": "Sätze"
  },
  {
    "de": "Gedenkst du meiner?",
    "lv": "Ты меня помнишь • Ты думал обо мне?",
    "level": "Sätze"
  },
  {
    "de": "im Winter",
    "lv": "Зима",
    "level": "Sätze"
  },
  {
    "de": "Welcher Jahrgang sind Sie?",
    "lv": "В каком году ты родился?",
    "level": "Sätze"
  },
  {
    "de": "Es jammert mich zu sehen...",
    "lv": "Грустно смотреть...",
    "level": "Sätze"
  },
  {
    "de": "je mehr, desto besser",
    "lv": "Чем больше, тем лучше",
    "level": "Sätze"
  },
  {
    "de": "bis jetzt",
    "lv": "До сега",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich zum Bahnhof?",
    "lv": "Како да стигнете до железничката станица?",
    "level": "Sätze"
  },
  {
    "de": "Komm her!",
    "lv": "Ела тук!",
    "level": "Sätze"
  },
  {
    "de": "Könnte ich Frau N. sprechen?",
    "lv": "Могу ли я поговорить с миссис Н.?",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das?",
    "lv": "Сколько это стоит?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange dauert die Vorstellung?",
    "lv": "Как долго продлится спектакль?",
    "level": "Sätze"
  },
  {
    "de": "Lass das!",
    "lv": "Прекрати! • Брось это!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich in Ruhe!",
    "lv": "Остави ме на мира!",
    "level": "Sätze"
  },
  {
    "de": "Lassen Sie mich Ihnen helfen!",
    "lv": "Позвольте мне помочь вам!",
    "level": "Sätze"
  },
  {
    "de": "Lasst uns gehen!",
    "lv": "Пойдем!",
    "level": "Sätze"
  },
  {
    "de": "Na, wie läufts?",
    "lv": "Как си",
    "level": "Sätze"
  },
  {
    "de": "Es lebe!",
    "lv": "Да здравствует!",
    "level": "Sätze"
  },
  {
    "de": "Leben Sie wohl!",
    "lv": "Живите здорово! • До свидания!",
    "level": "Sätze"
  },
  {
    "de": "Was ist los?",
    "lv": "Какво е станало",
    "level": "Sätze"
  },
  {
    "de": "Der Job ist anstrengend.",
    "lv": "Работата е заморна.",
    "level": "Sätze"
  },
  {
    "de": "Das war ein anstrengender Tag.",
    "lv": "Это был напряженный день.",
    "level": "Sätze"
  },
  {
    "de": "Deutsch lernen kann anstrengend sein.",
    "lv": "Ученето на немски може да бъде досадно.",
    "level": "Sätze"
  },
  {
    "de": "Er verlangt eine Erklärung.",
    "lv": "Той иска обяснение.",
    "level": "Sätze"
  },
  {
    "de": "Der Verkäufer verlangt zu viel Geld.",
    "lv": "Продавачът иска твърде много пари.",
    "level": "Sätze"
  },
  {
    "de": "Das Gesetz verlangt es so.",
    "lv": "Законот го бара тоа.",
    "level": "Sätze"
  },
  {
    "de": "Das ist gar nicht so schwer.",
    "lv": "Воопшто не е толку тешко.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe gar kein Geld.",
    "lv": "У меня вообще нет денег.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gar nichts gesagt.",
    "lv": "Той не каза абсолютно нищо.",
    "level": "Sätze"
  },
  {
    "de": "Der Hund ist los.",
    "lv": "Собаку отпустили.",
    "level": "Sätze"
  },
  {
    "de": "Hier ist viel los.",
    "lv": "Здесь многое происходит.",
    "level": "Sätze"
  },
  {
    "de": "Halt die Luft an!",
    "lv": "Задржете го здивот!",
    "level": "Sätze"
  },
  {
    "de": "Was machst du?",
    "lv": "Какво правиш",
    "level": "Sätze"
  },
  {
    "de": "Sag mal!",
    "lv": "Скажи да!",
    "level": "Sätze"
  },
  {
    "de": "Was meinen Sie damit?",
    "lv": "Что ты имеешь в виду? • Что вы думаете?",
    "level": "Sätze"
  },
  {
    "de": "Wir gehen mit Ihnen.",
    "lv": "Мы идем с тобой.",
    "level": "Sätze"
  },
  {
    "de": "Ich fahre mit der Eisenbahn.",
    "lv": "Пътувам с влак.",
    "level": "Sätze"
  },
  {
    "de": "am Mittwoch",
    "lv": "В среду",
    "level": "Sätze"
  },
  {
    "de": "Es mag sein.",
    "lv": "Может быть.",
    "level": "Sätze"
  },
  {
    "de": "Ich mag das nicht.",
    "lv": "Мне это не нравится.",
    "level": "Sätze"
  },
  {
    "de": "am Montag",
    "lv": "В понедельник",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen!",
    "lv": "Добро утро",
    "level": "Sätze"
  },
  {
    "de": "am Morgen",
    "lv": "На сутринта",
    "level": "Sätze"
  },
  {
    "de": "Gute Nacht!",
    "lv": "Спокойной ночи!",
    "level": "Sätze"
  },
  {
    "de": "Nehmen Sie Platz!",
    "lv": "Садиться!",
    "level": "Sätze"
  },
  {
    "de": "Letzte Neuheit!",
    "lv": "Последние новости!",
    "level": "Sätze"
  },
  {
    "de": "Nicht wahr?",
    "lv": "Верно?",
    "level": "Sätze"
  },
  {
    "de": "Nicht doch!",
    "lv": "Не, секако! • Не!",
    "level": "Sätze"
  },
  {
    "de": "Nun endlich!",
    "lv": "Ну наконец-то!",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das?",
    "lv": "Чем это полезно?",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das alles?",
    "lv": "Для чего все это?",
    "level": "Sätze"
  },
  {
    "de": "Parken verboten!",
    "lv": "Парковка запрещена!",
    "level": "Sätze"
  },
  {
    "de": "Nicht parken!",
    "lv": "Парковка запрещена!",
    "level": "Sätze"
  },
  {
    "de": "Er hat Recht.",
    "lv": "Он прав.",
    "level": "Sätze"
  },
  {
    "de": "Wovon ist die Rede?",
    "lv": "О чем идет речь?",
    "level": "Sätze"
  },
  {
    "de": "Davon kann keine Rede sein.",
    "lv": "Это исключено.",
    "level": "Sätze"
  },
  {
    "de": "Glückliche Reise!",
    "lv": "Счастливого путешествия!",
    "level": "Sätze"
  },
  {
    "de": "Mir reißt die Geduld.",
    "lv": "У меня кончается терпение.",
    "level": "Sätze"
  },
  {
    "de": "Man sagt, dass...",
    "lv": "Они говорят, что...",
    "level": "Sätze"
  },
  {
    "de": "Schon gut!",
    "lv": "Тоа е веќе добро!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön!",
    "lv": "Ве молам!",
    "level": "Sätze"
  },
  {
    "de": "Was bin ich schuldig?",
    "lv": "Сколько я должен? • Сколько я должен заплатить?",
    "level": "Sätze"
  },
  {
    "de": "Vor dem Gebrauch schütteln!",
    "lv": "Перед использованием взболтайте!",
    "level": "Sätze"
  },
  {
    "de": "Sehen Sie mal!",
    "lv": "Взгляните!",
    "level": "Sätze"
  },
  {
    "de": "Wie sehr auch...",
    "lv": "Сколько...",
    "level": "Sätze"
  },
  {
    "de": "Seit wann?",
    "lv": "С каких это пор?",
    "level": "Sätze"
  },
  {
    "de": "Was soll ich tun?",
    "lv": "Что я должен делать?",
    "level": "Sätze"
  },
  {
    "de": "im Sommer",
    "lv": "Летом",
    "level": "Sätze"
  },
  {
    "de": "Nicht nur..., sondern auch...",
    "lv": "Не только... но и...",
    "level": "Sätze"
  },
  {
    "de": "Sonst noch etwas?",
    "lv": "Что-нибудь еще?",
    "level": "Sätze"
  },
  {
    "de": "Spaß beiseite!",
    "lv": "Без шуток! • Шутки на грани!",
    "level": "Sätze"
  },
  {
    "de": "Wie spät ist es?",
    "lv": "Который сейчас час",
    "level": "Sätze"
  },
  {
    "de": "Durchfahrt gesperrt!",
    "lv": "Проезд запрещен!",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie deutsch?",
    "lv": "Вы говорите по-немецки?",
    "level": "Sätze"
  },
  {
    "de": "Statt zu...",
    "lv": "Вместо...",
    "level": "Sätze"
  },
  {
    "de": "Wie steht’s?",
    "lv": "Как си",
    "level": "Sätze"
  },
  {
    "de": "Dieser Hut steht ihr gut.",
    "lv": "Оваа капа оди навистина добро.",
    "level": "Sätze"
  },
  {
    "de": "Guten Tag!",
    "lv": "Привет!",
    "level": "Sätze"
  },
  {
    "de": "Wo treffen wir uns?",
    "lv": "Где мы встретимся?",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie näher!",
    "lv": "Подойди ближе!",
    "level": "Sätze"
  },
  {
    "de": "Ehrlichkeit ist eine Tugend.",
    "lv": "Искреноста е доблест.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe viel zu tun.",
    "lv": "Мне нужно многое сделать.",
    "level": "Sätze"
  },
  {
    "de": "Nicht übel!",
    "lv": "Очень хороший! • Нет возражений",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt über mir.",
    "lv": "Тој живее над мене.",
    "level": "Sätze"
  },
  {
    "de": "Er ist davon überzeugt.",
    "lv": "Он в этом уверен.",
    "level": "Sätze"
  },
  {
    "de": "So ist es üblich.",
    "lv": "Это принято.",
    "level": "Sätze"
  },
  {
    "de": "Deine Uhr geht nach.",
    "lv": "Твои часы отстают.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel Uhr ist es?",
    "lv": "Который сейчас час?",
    "level": "Sätze"
  },
  {
    "de": "Um acht Uhr früh.",
    "lv": "В восемь часов утра.",
    "level": "Sätze"
  },
  {
    "de": "umso mehr",
    "lv": "Тем больше",
    "level": "Sätze"
  },
  {
    "de": "Rechts um!",
    "lv": "Поверните направо!",
    "level": "Sätze"
  },
  {
    "de": "Und ob!",
    "lv": "И что еще!",
    "level": "Sätze"
  },
  {
    "de": "und zwar",
    "lv": "А именно",
    "level": "Sätze"
  },
  {
    "de": "Auf Unkosten von...",
    "lv": "За счет...",
    "level": "Sätze"
  },
  {
    "de": "Er saß unter den Zuschauern.",
    "lv": "Он сидел среди зрителей.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ursache!",
    "lv": "Ничего просто так!",
    "level": "Sätze"
  },
  {
    "de": "Es geschah, wie verabredet.",
    "lv": "Все произошло так, как было согласовано.",
    "level": "Sätze"
  },
  {
    "de": "Rauchen verboten!",
    "lv": "Забрането пушење!",
    "level": "Sätze"
  },
  {
    "de": "Falsch verbunden!",
    "lv": "Неправильное подключение!",
    "level": "Sätze"
  },
  {
    "de": "Eintritt verboten!",
    "lv": "Вход запрещен!",
    "level": "Sätze"
  },
  {
    "de": "Verstehen Sie mich?",
    "lv": "Вы понимаете меня?",
    "level": "Sätze"
  },
  {
    "de": "Er versteht nichts davon.",
    "lv": "Он ничего в этом не понимает.",
    "level": "Sätze"
  },
  {
    "de": "Seine Ansicht vertreten.",
    "lv": "Одбрани го своето мислење.",
    "level": "Sätze"
  },
  {
    "de": "Streit verursachen.",
    "lv": "Предизвика расправија.",
    "level": "Sätze"
  },
  {
    "de": "Viel besser.",
    "lv": "Гораздо лучше.",
    "level": "Sätze"
  },
  {
    "de": "Zu viel.",
    "lv": "Слишком.",
    "level": "Sätze"
  },
  {
    "de": "Vom Hörensagen.",
    "lv": "После прослушивания.",
    "level": "Sätze"
  },
  {
    "de": "Von Zeit zu Zeit.",
    "lv": "Время от времени.",
    "level": "Sätze"
  },
  {
    "de": "Von Beruf.",
    "lv": "По профессии.",
    "level": "Sätze"
  },
  {
    "de": "Er ist Berliner von Geburt.",
    "lv": "Он берлинец по происхождению.",
    "level": "Sätze"
  },
  {
    "de": "Er steht vor dem Fenster.",
    "lv": "Он стоит у окна.",
    "level": "Sätze"
  },
  {
    "de": "Vor Sonnenaufgang.",
    "lv": "Перед восходом солнца.",
    "level": "Sätze"
  },
  {
    "de": "Vor vierzehn Tagen.",
    "lv": "Две недели назад.",
    "level": "Sätze"
  },
  {
    "de": "Vor Freude.",
    "lv": "Для развлечения.",
    "level": "Sätze"
  },
  {
    "de": "Vor allem.",
    "lv": "Прежде всего. • Прежде всего",
    "level": "Sätze"
  },
  {
    "de": "Im Voraus.",
    "lv": "Ранее.",
    "level": "Sätze"
  },
  {
    "de": "Unter der Voraussetzung, dass...",
    "lv": "Предполагая, что...",
    "level": "Sätze"
  },
  {
    "de": "Unter dem Vorbehalt.",
    "lv": "Условно.",
    "level": "Sätze"
  },
  {
    "de": "Vorhanden sein.",
    "lv": "Быть. • Присутствовать • Быть доступным",
    "level": "Sätze"
  },
  {
    "de": "In der vorigen Woche.",
    "lv": "На прошлой неделе.",
    "level": "Sätze"
  },
  {
    "de": "Vorkehrungen treffen.",
    "lv": "Примите меры защиты.",
    "level": "Sätze"
  },
  {
    "de": "Sie kommt mir bekannt vor.",
    "lv": "Она кажется мне знакомой.",
    "level": "Sätze"
  },
  {
    "de": "Er hat Vorliebe für Literatur.",
    "lv": "Тој многу ја сака литературата.",
    "level": "Sätze"
  },
  {
    "de": "Heute Vormittag.",
    "lv": "Сегодня утром. • Сегодня утром",
    "level": "Sätze"
  },
  {
    "de": "Von vorn.",
    "lv": "С фронта.",
    "level": "Sätze"
  },
  {
    "de": "Nach vorn.",
    "lv": "Вперед.",
    "level": "Sätze"
  },
  {
    "de": "Von vornherein.",
    "lv": "В самом начале.",
    "level": "Sätze"
  },
  {
    "de": "Im Vorteil sein.",
    "lv": "Будьте в лучшем положении.",
    "level": "Sätze"
  },
  {
    "de": "Wach sein.",
    "lv": "Чтобы бодрствовать.",
    "level": "Sätze"
  },
  {
    "de": "Wach werden.",
    "lv": "Проснуться.",
    "level": "Sätze"
  },
  {
    "de": "Auf Wache sein.",
    "lv": "Стой на страже.",
    "level": "Sätze"
  },
  {
    "de": "Während eines Jahres.",
    "lv": "В течение года.",
    "level": "Sätze"
  },
  {
    "de": "Während des Krieges.",
    "lv": "Во время войны.",
    "level": "Sätze"
  },
  {
    "de": "Gegen eine Wand reden.",
    "lv": "Разговоры напрасны.",
    "level": "Sätze"
  },
  {
    "de": "Hier haben die Wände Ohren.",
    "lv": "Здесь у стен есть уши.",
    "level": "Sätze"
  },
  {
    "de": "Bis wann?",
    "lv": "До каких пор?",
    "level": "Sätze"
  },
  {
    "de": "Es ist warm.",
    "lv": "Тепло.",
    "level": "Sätze"
  },
  {
    "de": "Auf eine Nachricht warten.",
    "lv": "Подождите сообщения.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie?",
    "lv": "Что ты хочешь?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein...?",
    "lv": "ВОЗ...? • А как насчет...?",
    "level": "Sätze"
  },
  {
    "de": "Auf halbem Wege.",
    "lv": "Наполовину.",
    "level": "Sätze"
  },
  {
    "de": "Auf diesem Wege.",
    "lv": "Таким образом. • Для таких фондов",
    "level": "Sätze"
  },
  {
    "de": "Auf friedlichem Wege.",
    "lv": "На пути мира.",
    "level": "Sätze"
  },
  {
    "de": "Unserer Freundschaft wegen.",
    "lv": "Из-за нашей дружбы.",
    "level": "Sätze"
  },
  {
    "de": "Von Rechts wegen.",
    "lv": "По справедливости.",
    "level": "Sätze"
  },
  {
    "de": "Weh tun.",
    "lv": "Да предизвика болка.",
    "level": "Sätze"
  },
  {
    "de": "Zu Weihnachten.",
    "lv": "На Божиќ.",
    "level": "Sätze"
  },
  {
    "de": "Auf welche Weise?",
    "lv": "Како?",
    "level": "Sätze"
  },
  {
    "de": "Art und Weise.",
    "lv": "Тип.",
    "level": "Sätze"
  },
  {
    "de": "Ohne weiteres.",
    "lv": "Немедленно. • Немедленно",
    "level": "Sätze"
  },
  {
    "de": "Bis auf weiteres.",
    "lv": "До дальнейшего уведомления.",
    "level": "Sätze"
  },
  {
    "de": "Und so weiter.",
    "lv": "И так далее.",
    "level": "Sätze"
  },
  {
    "de": "Weiter nichts.",
    "lv": "Ничего больше.",
    "level": "Sätze"
  },
  {
    "de": "An welchem Tag?",
    "lv": "В какой день?",
    "level": "Sätze"
  },
  {
    "de": "Alle Welt.",
    "lv": "Весь мир. • Каждый",
    "level": "Sätze"
  },
  {
    "de": "In wenigen Tagen.",
    "lv": "Через несколько дней.",
    "level": "Sätze"
  },
  {
    "de": "Zu wenig.",
    "lv": "Премалку.",
    "level": "Sätze"
  },
  {
    "de": "Wenn auch.",
    "lv": "Хотя.",
    "level": "Sätze"
  },
  {
    "de": "Wer da?",
    "lv": "Что там?",
    "level": "Sätze"
  },
  {
    "de": "Gesammelte Werke von Schiller.",
    "lv": "Собрание сочинений Шиллера.",
    "level": "Sätze"
  },
  {
    "de": "Ausgewählte Werke.",
    "lv": "Подборка работ.",
    "level": "Sätze"
  },
  {
    "de": "Er ist wert, dass...",
    "lv": "Тој заслужува да ...",
    "level": "Sätze"
  },
  {
    "de": "Es ist zwei Euro wert.",
    "lv": "Это стоит два евро.",
    "level": "Sätze"
  },
  {
    "de": "Nach Westen.",
    "lv": "На запад.",
    "level": "Sätze"
  },
  {
    "de": "Von Westen.",
    "lv": "С запада.",
    "level": "Sätze"
  },
  {
    "de": "In Wettbewerb treten.",
    "lv": "Примите участие в соревновании.",
    "level": "Sätze"
  },
  {
    "de": "Um die Wette laufen.",
    "lv": "Управляйте гонкой.",
    "level": "Sätze"
  },
  {
    "de": "Was gilt die Wette?",
    "lv": "О чем мы торгуемся?",
    "level": "Sätze"
  },
  {
    "de": "Wie wird das Wetter?",
    "lv": "Какая будет погода?",
    "level": "Sätze"
  },
  {
    "de": "Wettkampf im Turnen.",
    "lv": "Соревнования по гимнастике.",
    "level": "Sätze"
  },
  {
    "de": "Wider meinen Willen.",
    "lv": "Против моей воли.",
    "level": "Sätze"
  },
  {
    "de": "Widerspruch erheben.",
    "lv": "Протестовать. • Выдвигать возражения",
    "level": "Sätze"
  },
  {
    "de": "Wie alt ist er?",
    "lv": "Сколько ему лет?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange?",
    "lv": "Сколько",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiederhören!",
    "lv": "До свидания!",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiedersehen!",
    "lv": "До свидания!",
    "level": "Sätze"
  },
  {
    "de": "Wilde Tiere.",
    "lv": "Диви животни.",
    "level": "Sätze"
  },
  {
    "de": "Herzlich willkommen!",
    "lv": "Горячий привет!",
    "level": "Sätze"
  },
  {
    "de": "Du musst ziehen.",
    "lv": "У вас есть ход.",
    "level": "Sätze"
  },
  {
    "de": "Es zieht.",
    "lv": "Издърпайте",
    "level": "Sätze"
  },
  {
    "de": "Ziemlich kalt.",
    "lv": "Прилично студено.",
    "level": "Sätze"
  },
  {
    "de": "Zipfel einer Wurst.",
    "lv": "Совет за колбас.",
    "level": "Sätze"
  },
  {
    "de": "Zu ihm gehen.",
    "lv": "Иди к нему.",
    "level": "Sätze"
  },
  {
    "de": "Zur Schule gehen.",
    "lv": "Ходить в школу.",
    "level": "Sätze"
  },
  {
    "de": "Zu Hause bleiben.",
    "lv": "Оставайтесь дома.",
    "level": "Sätze"
  },
  {
    "de": "Von Tag zu Tag.",
    "lv": "Ежедневно.",
    "level": "Sätze"
  },
  {
    "de": "Zum Glück.",
    "lv": "К счастью.",
    "level": "Sätze"
  },
  {
    "de": "Wasser zum Trinken.",
    "lv": "Вода для питья.",
    "level": "Sätze"
  },
  {
    "de": "Zu Fuß.",
    "lv": "Для ног.",
    "level": "Sätze"
  },
  {
    "de": "Zu Pferde.",
    "lv": "Да.",
    "level": "Sätze"
  },
  {
    "de": "Zu Rad.",
    "lv": "На велосипеде.",
    "level": "Sätze"
  },
  {
    "de": "Es hörte auf zu regnen.",
    "lv": "Дождь прекратился.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe noch viel zu tun.",
    "lv": "Мне еще многое предстоит сделать.",
    "level": "Sätze"
  },
  {
    "de": "Zu früh.",
    "lv": "Слишком рано.",
    "level": "Sätze"
  },
  {
    "de": "Zu groß.",
    "lv": "Слишком большой.",
    "level": "Sätze"
  },
  {
    "de": "Mit den Achseln zucken.",
    "lv": "Пожимаю плечами.",
    "level": "Sätze"
  },
  {
    "de": "In einem Zug trinken.",
    "lv": "Выпить залпом.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde gehen.",
    "lv": "Погибнуть.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde legen.",
    "lv": "Ставим на основу. • Взять за основу.",
    "level": "Sätze"
  },
  {
    "de": "Zum ersten Mal.",
    "lv": "Впервые.",
    "level": "Sätze"
  },
  {
    "de": "Machen Sie bitte die Tür zu!",
    "lv": "Пожалуйста, закройте дверь!",
    "level": "Sätze"
  },
  {
    "de": "Er hat zugenommen.",
    "lv": "Напълня.",
    "level": "Sätze"
  },
  {
    "de": "Die Tage nehmen zu.",
    "lv": "Дни становятся длиннее.",
    "level": "Sätze"
  },
  {
    "de": "Zusammenhängen mit etwas.",
    "lv": "Быть связанным с чем-либо.",
    "level": "Sätze"
  },
  {
    "de": "Die Tür ist zu.",
    "lv": "Дверь закрыта.",
    "level": "Sätze"
  },
  {
    "de": "Das hätte ich ihm nicht zugetraut.",
    "lv": "Я бы не ожидал от него такого.",
    "level": "Sätze"
  },
  {
    "de": "Freier Zutritt.",
    "lv": "Бесплатный вход.",
    "level": "Sätze"
  },
  {
    "de": "Zutritt verboten!",
    "lv": "Вход запрещен!",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu viel!",
    "lv": "Это слишком!",
    "level": "Sätze"
  },
  {
    "de": "Zuwider werden.",
    "lv": "Стать отвратительным. • Заболеть",
    "level": "Sätze"
  },
  {
    "de": "Und zwar.",
    "lv": "А именно.",
    "level": "Sätze"
  },
  {
    "de": "Es steht außer Zweifel.",
    "lv": "Без сомнение.",
    "level": "Sätze"
  },
  {
    "de": "Ohne Zweifel.",
    "lv": "Без двоумење.",
    "level": "Sätze"
  },
  {
    "de": "Zum Zweiten.",
    "lv": "Во-вторых.",
    "level": "Sätze"
  },
  {
    "de": "Frohes neues Jahr!",
    "lv": "С Новым Годом!",
    "level": "Sätze"
  },
  {
    "de": "Herzlichen Glückwunsch zum Geburtstag!",
    "lv": "С днем ​​рождения!",
    "level": "Sätze"
  },
  {
    "de": "Gute Reise!",
    "lv": "Счастливого путешествия!",
    "level": "Sätze"
  },
  {
    "de": "Es freut mich, Sie kennenzulernen.",
    "lv": "Я рад познакомиться с вами.",
    "level": "Sätze"
  },
  {
    "de": "Wären Sie bitte so nett?",
    "lv": "Не могли бы вы быть так любезны?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin Ihnen sehr dankbar.",
    "lv": "Многу сум ти благодарен.",
    "level": "Sätze"
  },
  {
    "de": "Setzt euch bitte hin!",
    "lv": "Садитесь, пожалуйста!",
    "level": "Sätze"
  },
  {
    "de": "Ben, komm bitte an die Tafel!",
    "lv": "Бен, пожалуйста, подойди к доске!",
    "level": "Sätze"
  },
  {
    "de": "Schlagt bitte die Lehrbücher auf!",
    "lv": "Отворете ги учебниците, ве молам!",
    "level": "Sätze"
  },
  {
    "de": "Geht bitte in die Sporthalle!",
    "lv": "Пожалуйста, идите в спортзал!",
    "level": "Sätze"
  },
  {
    "de": "Schläfst du noch?",
    "lv": "Ты все еще спишь?",
    "level": "Sätze"
  },
  {
    "de": "Schlafen Sie noch?",
    "lv": "Ты все еще спишь?",
    "level": "Sätze"
  },
  {
    "de": "Er ist fest eingeschlafen.",
    "lv": "Он крепко спит.",
    "level": "Sätze"
  },
  {
    "de": "Wecke ihn bitte auf, es ist schon spät!",
    "lv": "Пожалуйста, разбудите его, уже поздно!",
    "level": "Sätze"
  },
  {
    "de": "Es tut mir sehr leid!",
    "lv": "Мне очень жаль!",
    "level": "Sätze"
  },
  {
    "de": "Vielen Dank!",
    "lv": "Благодаря много!",
    "level": "Sätze"
  },
  {
    "de": "Finn, fang bitte an!",
    "lv": "Финн, начни, пожалуйста!",
    "level": "Sätze"
  },
  {
    "de": "Lest bitte mit!",
    "lv": "Читайте дальше, пожалуйста!",
    "level": "Sätze"
  },
  {
    "de": "Emma, schau bitte nicht aus dem Fenster!",
    "lv": "Эмма, пожалуйста, не смотри в окно!",
    "level": "Sätze"
  },
  {
    "de": "Jonas, bring bitte die Hefte!",
    "lv": "Йонас, принеси, пожалуйста, тетради!",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte zurück an deinen Platz!",
    "lv": "Возвращайся на свое место!",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb acht.",
    "lv": "Сейчас половина восьмого.",
    "level": "Sätze"
  },
  {
    "de": "Wann wachst du gewöhnlich auf?",
    "lv": "Когда ты обычно просыпаешься?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe gleich auf.",
    "lv": "Я сейчас встану.",
    "level": "Sätze"
  },
  {
    "de": "Steh auf, Hanna, es klingelt!",
    "lv": "Вставай, Ханна, звонит звонок!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich noch fünf Minuten schlafen!",
    "lv": "Дайте мне поспать еще пять минут!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss nicht, das Zimmer zu lüften!",
    "lv": "Не забывайте проветривать помещение!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist das Handtuch?",
    "lv": "Где полотенце",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mir die Zähne putzen.",
    "lv": "Сакам да и ги мијам забите.",
    "level": "Sätze"
  },
  {
    "de": "Mit was putzt du dir die Zähne?",
    "lv": "Со што ги чистите забите?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mich anziehen.",
    "lv": "Я хочу одеться.",
    "level": "Sätze"
  },
  {
    "de": "Zieh dich bitte schnell an!",
    "lv": "Одевайтесь быстрее, пожалуйста!",
    "level": "Sätze"
  },
  {
    "de": "Kleide dich wärmer an, draußen ist es kühl.",
    "lv": "Одевайтесь теплее, на улице холодно.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, wie geht es dir?",
    "lv": "Доброе утро, как дела?",
    "level": "Sätze"
  },
  {
    "de": "Mir geht es gut, danke.",
    "lv": "Я хорошо, спасибо.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es Neues?",
    "lv": "Что нового?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein Chaos hier!",
    "lv": "Каков хаос овде!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich beim Aufräumen helfen?",
    "lv": "Могу ли я помочь с уборкой?",
    "level": "Sätze"
  },
  {
    "de": "Was trinkst du morgens, Kaffee oder Tee?",
    "lv": "Что вы пьете утром, кофе или чай?",
    "level": "Sätze"
  },
  {
    "de": "Gewöhnlich trinke ich morgens eine Tasse Kaffee.",
    "lv": "Я обычно выпиваю чашку кофе утром.",
    "level": "Sätze"
  },
  {
    "de": "Am liebsten trinke ich schwarzen Kaffee.",
    "lv": "Я лучше всего пью черный кофе.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, hast du gut geschlafen?",
    "lv": "Добро утро, дали спиевте добро?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin noch sehr müde.",
    "lv": "Я все еще очень устал.",
    "level": "Sätze"
  },
  {
    "de": "Willst du Kaffee oder Milch?",
    "lv": "Хочешь кофе или молока?",
    "level": "Sätze"
  },
  {
    "de": "Gib mir bitte ein Brötchen mit Käse.",
    "lv": "Дайте мне сырную булочку, пожалуйста.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss jetzt los!",
    "lv": "Морам да одам сега!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss dein Frühstück nicht!",
    "lv": "Не забудьте завтрак!",
    "level": "Sätze"
  },
  {
    "de": "Klara, deck bitte den Tisch!",
    "lv": "Клара, пожалуйста, накрой на стол!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss die Servietten nicht!",
    "lv": "Не забудьте салфетки!",
    "level": "Sätze"
  },
  {
    "de": "Wann esst ihr zu Mittag?",
    "lv": "Когда ты обедаешь",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit zu essen.",
    "lv": "Пришло время поесть.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es heute zu Mittag?",
    "lv": "Что сегодня на обед?",
    "level": "Sätze"
  },
  {
    "de": "Wie schmeckt dir die Suppe?",
    "lv": "Как вам суп?",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt ist sie etwas zu salzig.",
    "lv": "Честно говоря, оно слишком соленое.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dir ein Stück Brot geben?",
    "lv": "Могу я дать вам кусок хлеба?",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich habe schon.",
    "lv": "Спасибо, у меня уже есть.",
    "level": "Sätze"
  },
  {
    "de": "Das Fleisch schmeckt ausgezeichnet.",
    "lv": "Мясо имеет прекрасный вкус.",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich bin schon satt.",
    "lv": "Спасибо, я уже сыт.",
    "level": "Sätze"
  },
  {
    "de": "Heute haben wir Besuch.",
    "lv": "Сегодня у нас гости.",
    "level": "Sätze"
  },
  {
    "de": "Bist du heute Abend frei?",
    "lv": "Ты свободен сегодня вечером?",
    "level": "Sätze"
  },
  {
    "de": "Komm doch heute zum Mittagessen vorbei!",
    "lv": "Приходите сегодня на обед!",
    "level": "Sätze"
  },
  {
    "de": "Setzen wir uns an den Tisch.",
    "lv": "Ајде да седнеме на стол.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, bedien dich!",
    "lv": "Пожалуйста, ешьте столько, сколько хотите!",
    "level": "Sätze"
  },
  {
    "de": "Stört dich das Rauchen?",
    "lv": "Дали ви пречи пушењето?",
    "level": "Sätze"
  },
  {
    "de": "Danke für die nette Aufnahme!",
    "lv": "Спасибо за теплый прием!",
    "level": "Sätze"
  },
  {
    "de": "Wann gehst du ins Bett?",
    "lv": "Когда ты идешь спать",
    "level": "Sätze"
  },
  {
    "de": "Wenn ich von der Arbeit komme, bin ich immer müde.",
    "lv": "Я всегда уставший, когда прихожу с работы.",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, ins Bett zu gehen.",
    "lv": "Пора идти спать.",
    "level": "Sätze"
  },
  {
    "de": "Es ist schönes Wetter.",
    "lv": "Это хорошее время.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mit mir spazieren gehen?",
    "lv": "Хочешь прогуляться со мной?",
    "level": "Sätze"
  },
  {
    "de": "Sieh mal, es wird gleich regnen.",
    "lv": "Смотри, скоро пойдет дождь.",
    "level": "Sätze"
  },
  {
    "de": "Nimm den Regenschirm mit!",
    "lv": "Возьмите с собой зонтик!",
    "level": "Sätze"
  },
  {
    "de": "Es regnet.",
    "lv": "Вали дъжд.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin schon ganz nass.",
    "lv": "Я уже совсем мокрый.",
    "level": "Sätze"
  },
  {
    "de": "Glaubst du, dass es den ganzen Tag regnen wird?",
    "lv": "Думаешь, весь день будет идти дождь?",
    "level": "Sätze"
  },
  {
    "de": "Es hört auf zu regnen.",
    "lv": "Дождь прекращается.",
    "level": "Sätze"
  },
  {
    "de": "Die Sonne scheint wieder.",
    "lv": "Солнце светит снова.",
    "level": "Sätze"
  },
  {
    "de": "Es ist sehr warm.",
    "lv": "Очень жарко.",
    "level": "Sätze"
  },
  {
    "de": "Es sieht nach Regen aus.",
    "lv": "Изгледа дека ќе врне.",
    "level": "Sätze"
  },
  {
    "de": "Wir bekommen gleich ein Gewitter.",
    "lv": "Нас ждет гроза.",
    "level": "Sätze"
  },
  {
    "de": "Das Gewitter zieht vorüber.",
    "lv": "Гроза прошла.",
    "level": "Sätze"
  },
  {
    "de": "Die Wolken verziehen sich.",
    "lv": "Облака расходятся.",
    "level": "Sätze"
  },
  {
    "de": "Siehst du den Regenbogen?",
    "lv": "Видите радугу?",
    "level": "Sätze"
  },
  {
    "de": "Der Winter ist da, es hat geschneit.",
    "lv": "Зима пришла, ночью пошел снег.",
    "level": "Sätze"
  },
  {
    "de": "Es schneit.",
    "lv": "Идет снег.",
    "level": "Sätze"
  },
  {
    "de": "Wie schön ist es im Wald im Winter!",
    "lv": "Колку е убаво во зима во шумата!",
    "level": "Sätze"
  },
  {
    "de": "Mir ist kalt, ich friere.",
    "lv": "Мне холодно, я замерзаю.",
    "level": "Sätze"
  },
  {
    "de": "Draußen ist Glatteis, pass auf!",
    "lv": "На улице скользко, будьте осторожны!",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir auf die Eisbahn gehen?",
    "lv": "Пойдем кататься на коньках?",
    "level": "Sätze"
  },
  {
    "de": "Zieh die Jacke an, du kannst dich erkälten.",
    "lv": "Надень куртку, можешь простудиться.",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb sieben.",
    "lv": "Сейчас половина восьмого.",
    "level": "Sätze"
  },
  {
    "de": "Meine Uhr geht fünf Minuten vor.",
    "lv": "Мои часы спешат на пять минут.",
    "level": "Sätze"
  },
  {
    "de": "Weck mich morgen früh um sieben Uhr!",
    "lv": "Разбуди меня завтра в семь часов!",
    "level": "Sätze"
  },
  {
    "de": "Was ist heute für ein Datum?",
    "lv": "Какая сегодня дата?",
    "level": "Sätze"
  },
  {
    "de": "Heute ist der elfte Juli.",
    "lv": "Сегодня одиннадцатое июля.",
    "level": "Sätze"
  },
  {
    "de": "Was machst du gewöhnlich am Abend?",
    "lv": "Что ты обычно делаешь по вечерам?",
    "level": "Sätze"
  },
  {
    "de": "Es ist schon lange her, dass wir uns gesehen haben.",
    "lv": "Мы давно не встречались.",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es dir?",
    "lv": "Как си",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, ich möchte etwas mit dir besprechen.",
    "lv": "Извините, я хочу с вами кое-что обсудить.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir spazieren!",
    "lv": "Пойдем гулять!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Lust, mit mir in den Park zu gehen?",
    "lv": "Хочешь пойти со мной в парк?",
    "level": "Sätze"
  },
  {
    "de": "Ich komme, um dich zum Spaziergang abzuholen.",
    "lv": "Я пришел, чтобы отвезти тебя на прогулку.",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte etwas langsamer, ich kann dir nicht folgen!",
    "lv": "Иди немного медленнее, я не успеваю за тобой!",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zum ersten Mal in dieser Gegend.",
    "lv": "Прв пат ми е овде.",
    "level": "Sätze"
  },
  {
    "de": "Ruhen wir uns ein wenig aus.",
    "lv": "Ајде да се одмориме.",
    "level": "Sätze"
  },
  {
    "de": "Jetzt können wir zurückgehen.",
    "lv": "Теперь мы можем вернуться назад.",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt bin ich ziemlich müde.",
    "lv": "Честно говоря, я очень устал.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, wo ist die nächste U-Bahn-Station?",
    "lv": "Простите, где ближайшая станция метро?",
    "level": "Sätze"
  },
  {
    "de": "Welcher ist der kürzeste Weg?",
    "lv": "Какой путь самый короткий?",
    "level": "Sätze"
  },
  {
    "de": "Geh hier die zweite Straße links und dann immer geradeaus.",
    "lv": "Здесь поверните на вторую улицу налево и идите прямо.",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich am schnellsten zum Bahnhof?",
    "lv": "Как быстрее добраться до вокзала?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe vor, morgen zu verreisen.",
    "lv": "Я намерен уехать завтра.",
    "level": "Sätze"
  },
  {
    "de": "Wohin willst du fahren?",
    "lv": "Куда вы хотите пойти?",
    "level": "Sätze"
  },
  {
    "de": "Reist du geschäftlich oder privat?",
    "lv": "Вы путешествуете по работе или на отдых?",
    "level": "Sätze"
  },
  {
    "de": "Finn fährt bis Berlin mit, dann geht er ans Meer.",
    "lv": "Финн едет в Берлин, потом поедет на море.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt das Schiff ab?",
    "lv": "Когда корабль отправляется?",
    "level": "Sätze"
  },
  {
    "de": "In einer halben Stunde.",
    "lv": "Через полчаса.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich noch eine Kabine bekommen?",
    "lv": "Може ли сè уште да ја имам кабината?",
    "level": "Sätze"
  },
  {
    "de": "Vergiss deinen Pass nicht!",
    "lv": "Не забудьте паспорт!",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, den Koffer zu packen.",
    "lv": "Пришло время собирать чемодан.",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt um halb sieben ab.",
    "lv": "Поезд отправляется в половине восьмого.",
    "level": "Sätze"
  },
  {
    "de": "Hol mir bitte ein Taxi, ich verpasse sonst den Zug!",
    "lv": "Вызовите такси, пожалуйста, а то я опоздаю на поезд!",
    "level": "Sätze"
  },
  {
    "de": "Fahr bitte zum Bahnhof!",
    "lv": "Пожалуйста, отвезите меня на станцию!",
    "level": "Sätze"
  },
  {
    "de": "Ich muss mich beeilen.",
    "lv": "Трябва да побързам.",
    "level": "Sätze"
  },
  {
    "de": "Ist der Schalter schon offen?",
    "lv": "Наплатата веќе е отворена?",
    "level": "Sätze"
  },
  {
    "de": "Eine Fahrkarte nach Köln, bitte.",
    "lv": "Один билет до Кёльна, пожалуйста.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt der Zug ab?",
    "lv": "Когда отправляется поезд?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt gleich ab.",
    "lv": "Поезд скоро отправляется.",
    "level": "Sätze"
  },
  {
    "de": "Muss ich in Koblenz umsteigen?",
    "lv": "Нужно ли мне пересаживаться в Кобленце?",
    "level": "Sätze"
  },
  {
    "de": "Ja, dort musst du umsteigen.",
    "lv": "Да, вам придется пересесть там.",
    "level": "Sätze"
  },
  {
    "de": "Ist dieser Platz frei?",
    "lv": "Это место доступно?",
    "level": "Sätze"
  },
  {
    "de": "Nein, hier sitzt niemand.",
    "lv": "Нет, здесь никто не сидит.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der Bahnsteigkartenautomat?",
    "lv": "Где находится билетный автомат на платформе?",
    "level": "Sätze"
  },
  {
    "de": "Stell mein Handgepäck ins Gepäcknetz.",
    "lv": "Положи мою ручную кладь в сетку.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das Fenster aufmachen?",
    "lv": "Можно мне открыть окно?",
    "level": "Sätze"
  },
  {
    "de": "Es zieht, schließ bitte das Fenster!",
    "lv": "Выходите, пожалуйста, закройте окно!",
    "level": "Sätze"
  },
  {
    "de": "Welche ist die nächste Station?",
    "lv": "Какая следующая остановка?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange hält der Zug?",
    "lv": "Колку чини возот?",
    "level": "Sätze"
  },
  {
    "de": "Wo muss ich umsteigen?",
    "lv": "Куда мне следует перевестись?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug hat Verspätung.",
    "lv": "Поезд опаздывает.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Wagen ist für Nichtraucher.",
    "lv": "В этом вагоне курение запрещено.",
    "level": "Sätze"
  },
  {
    "de": "Wir fahren jetzt über die Grenze.",
    "lv": "Сейчас мы едем через границу.",
    "level": "Sätze"
  },
  {
    "de": "Hast du etwas zu verzollen?",
    "lv": "У вас есть что очистить?",
    "level": "Sätze"
  },
  {
    "de": "Wir sind in Berlin angekommen.",
    "lv": "Мы прибыли в Берлин.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir ein gutes Hotel empfehlen?",
    "lv": "Можете ли вы порекомендовать хороший отель?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie freie Zimmer?",
    "lv": "Есть ли у вас свободные номера?",
    "level": "Sätze"
  },
  {
    "de": "Ein Zimmer mit zwei Betten, bitte.",
    "lv": "Пожалуйста, номер с двумя кроватями.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Zimmer pro Nacht?",
    "lv": "Сколько стоит номер за ночь?",
    "level": "Sätze"
  },
  {
    "de": "Morgen reise ich ab. Weck mich um sieben Uhr!",
    "lv": "Я уезжаю завтра. Разбуди меня в семь!",
    "level": "Sätze"
  },
  {
    "de": "Die Rechnung, bitte!",
    "lv": "Счет, пожалуйста!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Stadtbibliothek?",
    "lv": "Где находится городская библиотека?",
    "level": "Sätze"
  },
  {
    "de": "Wann hat das Museum geöffnet?",
    "lv": "Когда музей открыт?",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir ins Museum gehen?",
    "lv": "Пойдем в музей?",
    "level": "Sätze"
  },
  {
    "de": "Fahren wir mit dem Bus oder der U-Bahn?",
    "lv": "Мы поедем на автобусе или метро?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die nächste Bushaltestelle?",
    "lv": "Где находится ближайшая автобусная остановка?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe großen Hunger.",
    "lv": "Я очень голоден.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir zusammen essen?",
    "lv": "Да одиме на ручек заедно?",
    "level": "Sätze"
  },
  {
    "de": "Kellner, die Speisekarte, bitte!",
    "lv": "Официанты, меню, пожалуйста!",
    "level": "Sätze"
  },
  {
    "de": "Ist der Fisch frisch?",
    "lv": "Эта рыба свежая?",
    "level": "Sätze"
  },
  {
    "de": "Das schmeckt ausgezeichnet!",
    "lv": "Это очень вкусно!",
    "level": "Sätze"
  },
  {
    "de": "Kellner, zahlen bitte!",
    "lv": "Официанты, пожалуйста, заплатите!",
    "level": "Sätze"
  },
  {
    "de": "Ich gehe ins Café einen Kaffee trinken.",
    "lv": "Я пойду в кафе выпить кофе.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mitkommen?",
    "lv": "Хотите пойти вместе?",
    "level": "Sätze"
  },
  {
    "de": "Eine Tasse Kaffee mit Milch, bitte!",
    "lv": "Чашку кофе с молоком, пожалуйста!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneller, ich habe es eilig!",
    "lv": "Быстрее, пожалуйста, мне нужно торопиться!",
    "level": "Sätze"
  },
  {
    "de": "Lass deinen Kaffee nicht kalt werden!",
    "lv": "Не позволяйте кофе остыть!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie etwas Erfrischendes?",
    "lv": "У вас есть что-нибудь освежающее?",
    "level": "Sätze"
  },
  {
    "de": "Eine Portion Eis, bitte!",
    "lv": "Порцию мороженого, пожалуйста!",
    "level": "Sätze"
  },
  {
    "de": "Heute Morgen habe ich einen Brief bekommen.",
    "lv": "Сегодня утром я получил письмо.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss ihm gleich schreiben.",
    "lv": "Я должен написать ему сейчас.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der nächste Briefkasten?",
    "lv": "Где ближайший почтовый ящик?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Post?",
    "lv": "Где почта?",
    "level": "Sätze"
  },
  {
    "de": "Erinnere mich morgen daran zu schreiben!",
    "lv": "Напомни мне подписать завтра!",
    "level": "Sätze"
  },
  {
    "de": "Werfen Sie bitte diesen Brief in den Briefkasten.",
    "lv": "Ве молиме пуштете го ова писмо во поштенското сандаче!",
    "level": "Sätze"
  },
  {
    "de": "Hallo, hier spricht Emma.",
    "lv": "Привет, это Эмма.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich dich später anrufen?",
    "lv": "Можам да и се јавам подоцна",
    "level": "Sätze"
  },
  {
    "de": "Muss ich lange warten?",
    "lv": "Мне придется долго ждать?",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneiden Sie mir die Haare.",
    "lv": "Пожалуйста, подстригите мне волосы.",
    "level": "Sätze"
  },
  {
    "de": "Hinten bitte nicht zu kurz.",
    "lv": "Сзади, пожалуйста, не слишком коротко.",
    "level": "Sätze"
  },
  {
    "de": "Wann beginnt die Vorstellung?",
    "lv": "Кога започнува шоуто?",
    "level": "Sätze"
  },
  {
    "de": "Es fängt um halb acht an.",
    "lv": "Начало в половине седьмого.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind ausverkauft.",
    "lv": "Все билеты распроданы.",
    "level": "Sätze"
  },
  {
    "de": "Drei Karten, bitte!",
    "lv": "Три билета, пожалуйста!",
    "level": "Sätze"
  },
  {
    "de": "Wir lassen die Jacken in der Garderobe.",
    "lv": "Давай оставим куртки в гардеробе.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schnell, der Vorhang geht gleich auf!",
    "lv": "Побыстрее, пожалуйста, занавес вот-вот откроется!",
    "level": "Sätze"
  },
  {
    "de": "Der Vorhang fällt.",
    "lv": "Занавес падает.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dich zum Tanz bitten?",
    "lv": "Могу я пригласить вас потанцевать?",
    "level": "Sätze"
  },
  {
    "de": "Wann ist eure Hochzeit?",
    "lv": "Когда у тебя свадьба?",
    "level": "Sätze"
  },
  {
    "de": "Ich suche eine Wohnung.",
    "lv": "Я ищу квартиру.",
    "level": "Sätze"
  },
  {
    "de": "Ist in diesem Haus eine Wohnung frei?",
    "lv": "Есть ли свободная квартира в этом доме?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet die Miete?",
    "lv": "Сколько стоит аренда?",
    "level": "Sätze"
  },
  {
    "de": "Die Wohnung hat drei Zimmer und eine Küche.",
    "lv": "В квартире три комнаты и кухня.",
    "level": "Sätze"
  },
  {
    "de": "Heute ziehen wir um.",
    "lv": "Мы переезжаем сегодня.",
    "level": "Sätze"
  },
  {
    "de": "Mia, pack die Sachen bitte in Kisten!",
    "lv": "Миа, сложи вещи в коробки, пожалуйста!",
    "level": "Sätze"
  },
  {
    "de": "Hast du alles eingepackt?",
    "lv": "Всё уже запаковано?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe mit meinem Freund in Kontakt.",
    "lv": "Я веду переписку со своим другом.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir ins Theater?",
    "lv": "Пойдем в театр?",
    "level": "Sätze"
  },
  {
    "de": "Ist alles eingeladen?",
    "lv": "Все ли загружено?",
    "level": "Sätze"
  },
  {
    "de": "Welch schöne Aussicht!",
    "lv": "Какой красивый вид!",
    "level": "Sätze"
  },
  {
    "de": "Nun können wir alles wieder aufräumen.",
    "lv": "Теперь мы можем собрать все обратно.",
    "level": "Sätze"
  },
  {
    "de": "Wie viele Zimmer habt ihr?",
    "lv": "Сколько у вас комнат?",
    "level": "Sätze"
  },
  {
    "de": "Im Sommer fahre ich ans Meer.",
    "lv": "Летом я поеду на море.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du schwimmen?",
    "lv": "Вы умеете плавать",
    "level": "Sätze"
  },
  {
    "de": "Schwimm nicht zu weit hinaus!",
    "lv": "Не заплывайте слишком далеко!",
    "level": "Sätze"
  },
  {
    "de": "Badest du jeden Tag?",
    "lv": "Ты плаваешь каждый день?",
    "level": "Sätze"
  },
  {
    "de": "Bei schönem Wetter gehe ich angeln.",
    "lv": "Если погода хорошая, я иду на рыбалку.",
    "level": "Sätze"
  },
  {
    "de": "Wie sieht er aus?",
    "lv": "На што личи?",
    "level": "Sätze"
  },
  {
    "de": "Er hat sich aber recht verändert.",
    "lv": "Сепак, тој прилично се промени.",
    "level": "Sätze"
  },
  {
    "de": "Wie ist er als Mensch?",
    "lv": "Какой он как человек?",
    "level": "Sätze"
  },
  {
    "de": "Er ist immer nett und freundlich.",
    "lv": "Он всегда милый и добрый.",
    "level": "Sätze"
  },
  {
    "de": "Ich fühle mich nicht wohl.",
    "lv": "Я плохо себя чувствую.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe starke Kopfschmerzen.",
    "lv": "У меня сильная головная боль.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe mich erkältet.",
    "lv": "Я простудился.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Schnupfen.",
    "lv": "У меня насморк.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist schwindlig.",
    "lv": "У меня кружится голова.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Arzt gehen.",
    "lv": "Мне нужно пойти к врачу.",
    "level": "Sätze"
  },
  {
    "de": "Leg dich ins Bett!",
    "lv": "Легнете во кревет!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Fieber?",
    "lv": "У вас жар?",
    "level": "Sätze"
  },
  {
    "de": "Gestern hatte ich erhöhte Temperatur.",
    "lv": "Вчера у меня была высокая температура.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Zahnschmerzen.",
    "lv": "У меня болит зуб.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Zahnarzt gehen.",
    "lv": "Мне нужно пойти к дантисту.",
    "level": "Sätze"
  },
  {
    "de": "Weißt du, dass Finn krank ist?",
    "lv": "Ты знаешь, что Финн болен?",
    "level": "Sätze"
  },
  {
    "de": "Laut Arzt wird er bald wieder gesund.",
    "lv": "По словам врача, скоро он поправится.",
    "level": "Sätze"
  },
  {
    "de": "Ich will meine Wohnung neu möblieren.",
    "lv": "Я хочу сделать ремонт в квартире.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das auf Raten kaufen?",
    "lv": "Могу ли я купить в рассрочку?",
    "level": "Sätze"
  },
  {
    "de": "Bleib im Bett, bis es dir besser geht!",
    "lv": "Оставайтесь в постели, пока не почувствуете себя лучше!",
    "level": "Sätze"
  },
  {
    "de": "Noah hat in zwei Wochen schwimmen gelernt.",
    "lv": "Ной научился плавать за две недели.",
    "level": "Sätze"
  },
  {
    "de": "Sei mit dem Essen noch vorsichtig.",
    "lv": "Будьте осторожны с едой.",
    "level": "Sätze"
  },
  {
    "de": "Sprichst du Deutsch?",
    "lv": "Ты говоришь по-немецки?",
    "level": "Sätze"
  },
  {
    "de": "Ja, ein bisschen.",
    "lv": "Да, немного.",
    "level": "Sätze"
  },
  {
    "de": "Du sprichst ziemlich fließend.",
    "lv": "Вы говорите довольно свободно.",
    "level": "Sätze"
  },
  {
    "de": "Wo hast du Deutsch gelernt?",
    "lv": "Каде научи германски?",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme seit einem Jahr Deutschstunden.",
    "lv": "Я беру уроки немецкого языка уже год.",
    "level": "Sätze"
  },
  {
    "de": "Ich suche immer Gelegenheit, Deutsch zu sprechen.",
    "lv": "Всегда ищу возможность говорить по-немецки.",
    "level": "Sätze"
  },
  {
    "de": "Ist das Buch noch vorrätig?",
    "lv": "Эта книга еще доступна?",
    "level": "Sätze"
  },
  {
    "de": "Das Buch ist leider ausverkauft.",
    "lv": "К сожалению, книга распродана.",
    "level": "Sätze"
  },
  {
    "de": "Wann erscheint die neue Auflage?",
    "lv": "Когда выйдет новое издание?",
    "level": "Sätze"
  },
  {
    "de": "Womit kann ich Ihnen helfen?",
    "lv": "Как я могу помочь?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie ganz frische Eier?",
    "lv": "Дали имате свежи јајца?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die?",
    "lv": "Сколько они стоят?",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu teuer.",
    "lv": "Твърде скъпо е.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir ein halbes Kilo abwiegen?",
    "lv": "Ты можешь весить полкило?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel muss ich zahlen?",
    "lv": "Сколько я должен заплатить?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet das Kilo?",
    "lv": "Колку е килограм?",
    "level": "Sätze"
  },
  {
    "de": "Wiegen Sie mir bitte zwei Kilo ab.",
    "lv": "Пожалуйста, весите два килограмма.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch Karotten?",
    "lv": "У тебя тоже есть морковь?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie gutes Rindfleisch?",
    "lv": "У вас есть хорошая говядина?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir zwei Kilo Hackfleisch.",
    "lv": "Дайте два килограмма фарша.",
    "level": "Sätze"
  },
  {
    "de": "Ein Laib Brot, bitte, aber nicht zu knusprig.",
    "lv": "Одну буханку хлеба, пожалуйста, но не слишком твердую.",
    "level": "Sätze"
  },
  {
    "de": "Das Brot ist frisch gebacken.",
    "lv": "Хлеб свежеиспеченный.",
    "level": "Sätze"
  },
  {
    "de": "Was für Obst haben Sie heute?",
    "lv": "Какие фрукты у тебя сегодня?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die Äpfel?",
    "lv": "Сколько стоят яблоки?",
    "level": "Sätze"
  },
  {
    "de": "Dann nehme ich zwei Kilo Äpfel.",
    "lv": "Тогда я возьму два килограмма яблок.",
    "level": "Sätze"
  },
  {
    "de": "Die Birnen sind sehr teuer.",
    "lv": "Груши очень дорогие.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir alles nach Hause liefern?",
    "lv": "Можете ли вы доставить все на дом?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie Reis?",
    "lv": "У вас есть рис?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir bitte ein Kilo Reis.",
    "lv": "Дайте мне, пожалуйста, килограмм риса.",
    "level": "Sätze"
  },
  {
    "de": "Danke, diesmal nicht.",
    "lv": "Спасибо, не в этот раз.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet dieser Teppich?",
    "lv": "Сколько стоит этот коврик?",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Möbel in meine Wohnung liefern?",
    "lv": "Возможна ли доставка мебели в квартиру?",
    "level": "Sätze"
  },
  {
    "de": "Bitte an der Kasse zahlen.",
    "lv": "Пожалуйста, оплатите в кассе.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, machen Sie die Rechnung.",
    "lv": "Пожалуйста, выставьте счет.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Meter?",
    "lv": "Колку чини еден метар?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Stoff gefällt mir.",
    "lv": "Я люблю эту ткань.",
    "level": "Sätze"
  },
  {
    "de": "Schneiden Sie mir bitte drei Meter ab.",
    "lv": "Ве молиме пресечете три метри.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch andere Muster?",
    "lv": "Есть ли у вас другие образцы?",
    "level": "Sätze"
  },
  {
    "de": "Diese Farbe gefällt mir nicht.",
    "lv": "Мне не нравится этот цвет.",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir eine hellere.",
    "lv": "Дайте ярче.",
    "level": "Sätze"
  },
  {
    "de": "Was kosten diese Socken?",
    "lv": "Сколько стоят эти носки?",
    "level": "Sätze"
  },
  {
    "de": "Welche Handschuhe wünschen Sie?",
    "lv": "Какие перчатки ты хочешь?",
    "level": "Sätze"
  },
  {
    "de": "Die sind mir etwas zu eng.",
    "lv": "Они мне немного тесноваты.",
    "level": "Sätze"
  },
  {
    "de": "So, nun passen sie gut.",
    "lv": "Итак, теперь все работает нормально.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir einen guten Schneider empfehlen?",
    "lv": "Можете ли вы порекомендовать хорошего портного?",
    "level": "Sätze"
  },
  {
    "de": "Ich will einen Anzug bestellen.",
    "lv": "Я хочу заказать костюм.",
    "level": "Sätze"
  },
  {
    "de": "Wann wird er fertig sein?",
    "lv": "Когда он будет готов?",
    "level": "Sätze"
  },
  {
    "de": "Der Anzug sitzt gut.",
    "lv": "Костюм сидит хорошо.",
    "level": "Sätze"
  },
  {
    "de": "Die Hose ist zu lang.",
    "lv": "Штаны слишком длинные.",
    "level": "Sätze"
  },
  {
    "de": "Bitte reinigen und bügeln Sie ihn!",
    "lv": "Пожалуйста, очистите и погладьте его!",
    "level": "Sätze"
  },
  {
    "de": "Wann wird das Kleid fertig sein?",
    "lv": "Когда платье будет готово?",
    "level": "Sätze"
  },
  {
    "de": "Die Schuhe sind zu eng.",
    "lv": "Обувь слишком тесная.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Schuhe heute reparieren?",
    "lv": "Ты можешь починить свою обувь сегодня?",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich die Schuhe abholen?",
    "lv": "Кога можам да и донесам чевли?",
    "level": "Sätze"
  },
  {
    "de": "Meine Armbanduhr funktioniert nicht.",
    "lv": "Мои наручные часы не работают.",
    "level": "Sätze"
  },
  {
    "de": "Sie geht fünf Minuten vor.",
    "lv": "Это на пять минут раньше.",
    "level": "Sätze"
  },
  {
    "de": "Bist du kurzsichtig oder weitsichtig?",
    "lv": "Вы близорукий или дальнозоркий?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte eine Brille kaufen.",
    "lv": "Я хочу купить очки.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie meine Brille reparieren?",
    "lv": "Ты можешь починить мои очки?",
    "level": "Sätze"
  },
  {
    "de": "Das dauert nur eine Viertelstunde.",
    "lv": "Это займет всего пятнадцать минут.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist mir zu hoch.",
    "lv": "Цена для меня слишком высока.",
    "level": "Sätze"
  },
  {
    "de": "Ich brauche zwei Fotos für meinen Pass.",
    "lv": "Мне нужны две фотографии на паспорт.",
    "level": "Sätze"
  },
  {
    "de": "Bitte packen Sie es ein und schicken Sie es mir nach Hause.",
    "lv": "Спакувајте се и одете дома.",
    "level": "Sätze"
  },
  {
    "de": "Wir haben feste Preise.",
    "lv": "У нас фиксированные цены.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, fotografieren Sie mich.",
    "lv": "Пожалуйста, сфотографируйте меня.",
    "level": "Sätze"
  },
  {
    "de": "Setzen Sie sich, schauen Sie gerade in die Kamera und bewegen Sie sich nicht!",
    "lv": "Сядьте, посмотрите прямо в камеру и не двигайтесь!",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich das Probebild sehen?",
    "lv": "Когда я смогу увидеть образец?",
    "level": "Sätze"
  },
  {
    "de": "Wann sind die Fotos fertig?",
    "lv": "Когда будут готовы фотографии?",
    "level": "Sätze"
  },
  {
    "de": "Die Aufnahme ist gelungen.",
    "lv": "Фотография удалась.",
    "level": "Sätze"
  },
  {
    "de": "Die Fotos sind gut geworden.",
    "lv": "Фотографии получились удачными.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie das Foto auch vergrößern?",
    "lv": "А можно еще увеличить фото?",
    "level": "Sätze"
  },
  {
    "de": "Sind diese Steine echt?",
    "lv": "Эти камни настоящие?",
    "level": "Sätze"
  },
  {
    "de": "Ist das echtes Gold?",
    "lv": "Это настоящее золото?",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir bitte Trauringe.",
    "lv": "Покажите мне обручальные кольца, пожалуйста.",
    "level": "Sätze"
  },
  {
    "de": "Der Ring ist mir etwas zu weit.",
    "lv": "Кольцо мне великовато.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann ihn enger machen.",
    "lv": "Можам да го стеснам.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Ring passt mir.",
    "lv": "Это кольцо мне подходит.",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir schöne Geschenkideen.",
    "lv": "Продемонстрируйте красивые идеи подарков.",
    "level": "Sätze"
  },
  {
    "de": "Wie gefallen dir diese Ohrringe?",
    "lv": "Как вам эти серьги?",
    "level": "Sätze"
  },
  {
    "de": "Diese Brosche ist wirklich schön.",
    "lv": "Эта брошь очень красивая.",
    "level": "Sätze"
  },
  {
    "de": "Der Stein ist ein Saphir.",
    "lv": "Этот камень — сапфир.",
    "level": "Sätze"
  },
  {
    "de": "Das ist kein echter Stein, das ist Glas.",
    "lv": "Это не настоящий камень, это стекло.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Armband kann ich Ihnen besonders empfehlen.",
    "lv": "Особено можам да ја препорачам оваа нараквица.",
    "level": "Sätze"
  },
  {
    "de": "Es ist besonders schön gearbeitet.",
    "lv": "Он сделан чрезвычайно тонко.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist nicht hoch.",
    "lv": "Цена не высокая.",
    "level": "Sätze"
  },
  {
    "de": "Bekomme ich die Schachtel gratis?",
    "lv": "Я получил коробку бесплатно?",
    "level": "Sätze"
  },
  {
    "de": "Alle Schmuckstücke sind gestempelt.",
    "lv": "Сите украси со печат.",
    "level": "Sätze"
  },
  {
    "de": "Falls es meiner Frau nicht gefällt, kann ich es umtauschen?",
    "lv": "Если жене не понравится, могу ли я его обменять?",
    "level": "Sätze"
  },
  {
    "de": "Natürlich, jederzeit.",
    "lv": "В любое время, конечно.",
    "level": "Sätze"
  }
];

window.SENTENCE_ENTRIES = SENTENCE_ENTRIES;

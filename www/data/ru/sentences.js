const SENTENCE_ENTRIES = [
  {
    "de": "Hüte dich davor!",
    "lv": "Берегись этого!",
    "level": "Sätze"
  },
  {
    "de": "Wenn nichts dazwischenkommt.",
    "lv": "Если ничего не помешает. • Если всё пойдёт по плану.",
    "level": "Sätze"
  },
  {
    "de": "Das kann ich mir denken!",
    "lv": "Могу себе представить!",
    "level": "Sätze"
  },
  {
    "de": "Ist er denn krank?",
    "lv": "Разве он болен?",
    "level": "Sätze"
  },
  {
    "de": "Was denn?",
    "lv": "А что такое?",
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
    "lv": "Всё говорит о том, что пойдёт дождь.",
    "level": "Sätze"
  },
  {
    "de": "Damit ist mir wenig gedient.",
    "lv": "Мне от этого мало пользы.",
    "level": "Sätze"
  },
  {
    "de": "Er ist dienstlich verhindert.",
    "lv": "Он не может прийти по служебным причинам.",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie doch!",
    "lv": "Говорите же!",
    "level": "Sätze"
  },
  {
    "de": "Es donnert.",
    "lv": "Гремит гром.",
    "level": "Sätze"
  },
  {
    "de": "Doppelt so groß.",
    "lv": "Вдвое больше.",
    "level": "Sätze"
  },
  {
    "de": "Von dort.",
    "lv": "Оттуда.",
    "level": "Sätze"
  },
  {
    "de": "Die Zeit drängt.",
    "lv": "Время не ждёт.",
    "level": "Sätze"
  },
  {
    "de": "Ihn drücken Sorgen.",
    "lv": "Его одолевают заботы.",
    "level": "Sätze"
  },
  {
    "de": "Hast du das Buch durchgearbeitet?",
    "lv": "Ты проработал эту книгу?",
    "level": "Sätze"
  },
  {
    "de": "Kein Durchgang!",
    "lv": "Прохода нет!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich Sie bitten?",
    "lv": "Разрешите вас пригласить?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin durstig.",
    "lv": "Я хочу пить.",
    "level": "Sätze"
  },
  {
    "de": "Eben das meine ich.",
    "lv": "Именно это я и имею в виду.",
    "level": "Sätze"
  },
  {
    "de": "Es ist ganz egal.",
    "lv": "Это совершенно неважно.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie eigentlich?",
    "lv": "Чего же вы, собственно, хотите?",
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
    "lv": "Я спешу.",
    "level": "Sätze"
  },
  {
    "de": "Du bildest dir nur ein, krank zu sein.",
    "lv": "Тебе только кажется, что ты болен.",
    "level": "Sätze"
  },
  {
    "de": "Was fällt dir ein?",
    "lv": "Что ты себе позволяешь? • Что тебе приходит в голову?",
    "level": "Sätze"
  },
  {
    "de": "Es war einmal.",
    "lv": "Жили-были.",
    "level": "Sätze"
  },
  {
    "de": "Steigen Sie bitte ein!",
    "lv": "Садитесь, пожалуйста!",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie ein!",
    "lv": "Входите!",
    "level": "Sätze"
  },
  {
    "de": "Einzelnes hat mir dort gefallen.",
    "lv": "Кое-что мне там понравилось.",
    "level": "Sätze"
  },
  {
    "de": "Es empfiehlt sich.",
    "lv": "Это рекомендуется.",
    "level": "Sätze"
  },
  {
    "de": "Diese Flasche enthält Essig.",
    "lv": "В этой бутылке уксус.",
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
    "lv": "Кого сегодня нет?",
    "level": "Sätze"
  },
  {
    "de": "Was fehlt dir?",
    "lv": "Что с тобой?",
    "level": "Sätze"
  },
  {
    "de": "Wie heißen Sie?",
    "lv": "Как вас зовут?",
    "level": "Sätze"
  },
  {
    "de": "Was soll das heißen?",
    "lv": "Что это значит?",
    "level": "Sätze"
  },
  {
    "de": "Bitte treten Sie näher heran!",
    "lv": "Подойдите, пожалуйста, поближе!",
    "level": "Sätze"
  },
  {
    "de": "Heraus mit der Sprache!",
    "lv": "Ну, говори же!",
    "level": "Sätze"
  },
  {
    "de": "im Herbst",
    "lv": "осенью",
    "level": "Sätze"
  },
  {
    "de": "Meine Herrschaften!",
    "lv": "Дамы и господа!",
    "level": "Sätze"
  },
  {
    "de": "von heute an",
    "lv": "с сегодняшнего дня",
    "level": "Sätze"
  },
  {
    "de": "heute früh",
    "lv": "сегодня утром",
    "level": "Sätze"
  },
  {
    "de": "heute Nacht",
    "lv": "сегодня ночью",
    "level": "Sätze"
  },
  {
    "de": "Zu Hilfe!",
    "lv": "На помощь!",
    "level": "Sätze"
  },
  {
    "de": "Ich lerne jeden Tag Deutsch.",
    "lv": "Я каждый день учу немецкий.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das bitte wiederholen?",
    "lv": "Ты можешь, пожалуйста, это повторить?",
    "level": "Sätze"
  },
  {
    "de": "Wir treffen uns am Bahnhof.",
    "lv": "Мы встречаемся на вокзале.",
    "level": "Sätze"
  },
  {
    "de": "Ich stimme dir teilweise zu.",
    "lv": "Я частично с тобой согласен.",
    "level": "Sätze"
  },
  {
    "de": "Diese Entscheidung hat weitreichende Folgen.",
    "lv": "Это решение имеет далекоидущие последствия.",
    "level": "Sätze"
  },
  {
    "de": "Man sollte mehrere Perspektiven berücksichtigen.",
    "lv": "Следует учитывать несколько точек зрения.",
    "level": "Sätze"
  },
  {
    "de": "Könnten Sie das näher erläutern?",
    "lv": "Не могли бы вы объяснить это подробнее?",
    "level": "Sätze"
  },
  {
    "de": "Was mich anbelangt,...",
    "lv": "Что касается меня,...",
    "level": "Sätze"
  },
  {
    "de": "Wie alt sind Sie?",
    "lv": "Сколько вам лет?",
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
    "lv": "С этого момента.",
    "level": "Sätze"
  },
  {
    "de": "Anders geht es nicht.",
    "lv": "Иначе нельзя.",
    "level": "Sätze"
  },
  {
    "de": "Rufen Sie mich an.",
    "lv": "Позвоните мне.",
    "level": "Sätze"
  },
  {
    "de": "Bitte stellen Sie das Radio ab.",
    "lv": "Выключите, пожалуйста, радио.",
    "level": "Sätze"
  },
  {
    "de": "Achte bitte auf den Verkehr.",
    "lv": "Следи, пожалуйста, за движением.",
    "level": "Sätze"
  },
  {
    "de": "Darauf musst du achten.",
    "lv": "На это ты должен обращать внимание.",
    "level": "Sätze"
  },
  {
    "de": "Heute mache ich es anders.",
    "lv": "Сегодня я сделаю это иначе.",
    "level": "Sätze"
  },
  {
    "de": "Wir warten auf den Bus.",
    "lv": "Мы ждём автобус.",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt allein.",
    "lv": "Он живёт один.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Ausbildung absolviert.",
    "lv": "Я прошёл обучение. • Я получил образование.",
    "level": "Sätze"
  },
  {
    "de": "Ich warte den Regen ab.",
    "lv": "Я пережду дождь.",
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
    "lv": "Она приняла моё предложение.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte das genauer analysieren.",
    "lv": "Я хотел бы проанализировать это подробнее.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte den Vertrag ändern.",
    "lv": "Я хотел бы изменить договор.",
    "level": "Sätze"
  },
  {
    "de": "Er ändert ständig seine Meinung.",
    "lv": "Он постоянно меняет своё мнение.",
    "level": "Sätze"
  },
  {
    "de": "Ähnliche Probleme hatten wir schon früher.",
    "lv": "Похожие проблемы у нас уже были раньше.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ahnung!",
    "lv": "Понятия не имею!",
    "level": "Sätze"
  },
  {
    "de": "Hör auf zu jammern.",
    "lv": "Перестань жаловаться.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Kleid ist akademisch gekleidet.",
    "lv": "Это платье элегантно и консервативно.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre gerne Akkordeonmusik.",
    "lv": "Я люблю слушать музыку для аккордеона.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das Gerät anklicken?",
    "lv": "Ты можешь щёлкнуть по устройству?",
    "level": "Sätze"
  },
  {
    "de": "Bitte öffne die Datei und klicke darauf.",
    "lv": "Открой, пожалуйста, файл и щёлкни по нему.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe einen Unfall gehabt.",
    "lv": "Я попал в аварию.",
    "level": "Sätze"
  },
  {
    "de": "Wir laufen zum Bahnhof.",
    "lv": "Мы идём на вокзал.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schalte den Fernseher an.",
    "lv": "Включи, пожалуйста, телевизор.",
    "level": "Sätze"
  },
  {
    "de": "Mein Computer ist abgestürzt.",
    "lv": "Мой компьютер дал сбой.",
    "level": "Sätze"
  },
  {
    "de": "Am Wochenende gehe ich angeln.",
    "lv": "В выходные я пойду ловить рыбу.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe den Anruf verpasst.",
    "lv": "Я пропустил звонок.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mich später anrufen?",
    "lv": "Ты можешь позвонить мне позже?",
    "level": "Sätze"
  },
  {
    "de": "Bitte nimm meinen Vorschlag an.",
    "lv": "Пожалуйста, прими моё предложение.",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme dein Angebot an.",
    "lv": "Я принимаю твоё предложение.",
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
    "lv": "Не бойся, всё будет хорошо.",
    "level": "Sätze"
  },
  {
    "de": "Anklang finden.",
    "lv": "Находить отклик. • Встречать одобрение.",
    "level": "Sätze"
  },
  {
    "de": "Es kommt darauf an.",
    "lv": "Это зависит от обстоятельств.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Anlass.",
    "lv": "По этому поводу.",
    "level": "Sätze"
  },
  {
    "de": "Nehmen wir an, dass...",
    "lv": "Предположим, что...",
    "level": "Sätze"
  },
  {
    "de": "Was hast du da angerichtet?",
    "lv": "Что ты там наделал?",
    "level": "Sätze"
  },
  {
    "de": "Bis ans Ende.",
    "lv": "До самого конца.",
    "level": "Sätze"
  },
  {
    "de": "Du glaubst mir anscheinend nicht.",
    "lv": "Ты мне, видимо, не веришь.",
    "level": "Sätze"
  },
  {
    "de": "Meiner Ansicht nach...",
    "lv": "На мой взгляд...",
    "level": "Sätze"
  },
  {
    "de": "Stell dich nicht so an!",
    "lv": "Не устраивай сцен!",
    "level": "Sätze"
  },
  {
    "de": "An die Arbeit gehen.",
    "lv": "Приниматься за работу.",
    "level": "Sätze"
  },
  {
    "de": "Außer Atem sein.",
    "lv": "Запыхаться.",
    "level": "Sätze"
  },
  {
    "de": "Guten Appetit!",
    "lv": "Приятного аппетита!",
    "level": "Sätze"
  },
  {
    "de": "In einem Atemzug.",
    "lv": "На одном дыхании.",
    "level": "Sätze"
  },
  {
    "de": "Auf jeden Fall.",
    "lv": "В любом случае.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal war alles still.",
    "lv": "Вдруг всё стихло.",
    "level": "Sätze"
  },
  {
    "de": "Bitte mach die Tür auf!",
    "lv": "Открой, пожалуйста, дверь!",
    "level": "Sätze"
  },
  {
    "de": "Er hat den Kredit aufgenommen.",
    "lv": "Он взял кредит.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen heute aufräumen.",
    "lv": "Нам сегодня нужно навести порядок.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre jetzt auf.",
    "lv": "Сейчас я закончу.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schon auf.",
    "lv": "Он уже встал.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen das Treffen verschieben.",
    "lv": "Нам нужно перенести встречу.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat mich aufgeregt.",
    "lv": "Она меня рассердила.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal.",
    "lv": "Вдруг.",
    "level": "Sätze"
  },
  {
    "de": "Auf der Stelle.",
    "lv": "Немедленно.",
    "level": "Sätze"
  },
  {
    "de": "Für den Schaden aufkommen.",
    "lv": "Возмещать ущерб.",
    "level": "Sätze"
  },
  {
    "de": "Bitte die Tür auf!",
    "lv": "Откройте, пожалуйста, дверь!",
    "level": "Sätze"
  },
  {
    "de": "Aufrecht sitzen.",
    "lv": "Сидеть прямо.",
    "level": "Sätze"
  },
  {
    "de": "Er ist auf.",
    "lv": "Он встал.",
    "level": "Sätze"
  },
  {
    "de": "Alle Kräfte aufwenden.",
    "lv": "Прилагать все силы.",
    "level": "Sätze"
  },
  {
    "de": "Viel Mühe aufwenden.",
    "lv": "Прилагать много усилий.",
    "level": "Sätze"
  },
  {
    "de": "Geh mir aus den Augen!",
    "lv": "Уйди с глаз моих!",
    "level": "Sätze"
  },
  {
    "de": "Unter vier Augen.",
    "lv": "С глазу на глаз.",
    "level": "Sätze"
  },
  {
    "de": "Aus Mangel an Zeit.",
    "lv": "За недостатком времени.",
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
    "lv": "Придавать значение внешнему виду.",
    "level": "Sätze"
  },
  {
    "de": "Im äußersten Fall.",
    "lv": "В крайнем случае.",
    "level": "Sätze"
  },
  {
    "de": "Äußerst wichtig.",
    "lv": "Чрезвычайно важный.",
    "level": "Sätze"
  },
  {
    "de": "Aussicht auf die See.",
    "lv": "Вид на море.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gute Aussichten.",
    "lv": "У него хорошие перспективы.",
    "level": "Sätze"
  },
  {
    "de": "Wie wird dieses Wort ausgesprochen?",
    "lv": "Как произносится это слово?",
    "level": "Sätze"
  },
  {
    "de": "Sein Beileid aussprechen.",
    "lv": "Выражать свои соболезнования.",
    "level": "Sätze"
  },
  {
    "de": "Wann wurden die Meisterschaftskämpfe ausgetragen?",
    "lv": "Когда проходил чемпионат?",
    "level": "Sätze"
  },
  {
    "de": "Welchen Beruf üben Sie aus?",
    "lv": "Какая у вас профессия?",
    "level": "Sätze"
  },
  {
    "de": "Einfluss ausüben.",
    "lv": "Оказывать влияние.",
    "level": "Sätze"
  },
  {
    "de": "Auswärts essen.",
    "lv": "Питаться вне дома.",
    "level": "Sätze"
  },
  {
    "de": "Per Bahn.",
    "lv": "По железной дороге.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Bahn.",
    "lv": "На поезде.",
    "level": "Sätze"
  },
  {
    "de": "Möglichst bald.",
    "lv": "Как можно скорее.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist Angst und bange.",
    "lv": "Мне очень страшно.",
    "level": "Sätze"
  },
  {
    "de": "Auf die lange Bank schieben.",
    "lv": "Откладывать в долгий ящик.",
    "level": "Sätze"
  },
  {
    "de": "Bar zahlen.",
    "lv": "Платить наличными.",
    "level": "Sätze"
  },
  {
    "de": "Erz bauen.",
    "lv": "Добывать руду.",
    "level": "Sätze"
  },
  {
    "de": "Mist bauen.",
    "lv": "Наломать дров.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin beauftragt.",
    "lv": "Мне поручено.",
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
    "lv": "Что означает это слово?",
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
    "lv": "Следовать указаниям.",
    "level": "Sätze"
  },
  {
    "de": "Befehle befolgen.",
    "lv": "Выполнять приказы.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Post befördern.",
    "lv": "Отправлять по почте.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin begierig zu wissen.",
    "lv": "Мне очень хочется узнать.",
    "level": "Sätze"
  },
  {
    "de": "Zu Beginn.",
    "lv": "Вначале.",
    "level": "Sätze"
  },
  {
    "de": "Am Beginn.",
    "lv": "Вначале.",
    "level": "Sätze"
  },
  {
    "de": "Bei Beginn.",
    "lv": "В начале.",
    "level": "Sätze"
  },
  {
    "de": "In Begleitung.",
    "lv": "В сопровождении.",
    "level": "Sätze"
  },
  {
    "de": "Mit seiner Begleitung.",
    "lv": "Со своим спутником.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schwer von Begriff.",
    "lv": "Он медленно соображает.",
    "level": "Sätze"
  },
  {
    "de": "Im Gedächtnis behalten.",
    "lv": "Сохранять в памяти.",
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
    "lv": "Днём.",
    "level": "Sätze"
  },
  {
    "de": "Bei weitem nicht so.",
    "lv": "Далеко не так.",
    "level": "Sätze"
  },
  {
    "de": "Alle beide.",
    "lv": "Оба.",
    "level": "Sätze"
  },
  {
    "de": "Stürmischer Beifall brach los.",
    "lv": "Раздались бурные аплодисменты.",
    "level": "Sätze"
  },
  {
    "de": "Beifall finden.",
    "lv": "Встречать одобрение.",
    "level": "Sätze"
  },
  {
    "de": "Beileid aussprechen.",
    "lv": "Выражать соболезнование.",
    "level": "Sätze"
  },
  {
    "de": "Auf eigenen Beinen stehen.",
    "lv": "Стоять на собственных ногах.",
    "level": "Sätze"
  },
  {
    "de": "Zum Beispiel.",
    "lv": "Например.",
    "level": "Sätze"
  },
  {
    "de": "Beistand leisten.",
    "lv": "Оказывать помощь.",
    "level": "Sätze"
  },
  {
    "de": "Beitrag leisten.",
    "lv": "Вносить свой вклад.",
    "level": "Sätze"
  },
  {
    "de": "Jemandes Bekanntschaft machen.",
    "lv": "Знакомиться с кем-либо.",
    "level": "Sätze"
  },
  {
    "de": "Bekanntschaft anknüpfen.",
    "lv": "Завязывать знакомство.",
    "level": "Sätze"
  },
  {
    "de": "Belegte Brötchen.",
    "lv": "Бутерброды на булочках.",
    "level": "Sätze"
  },
  {
    "de": "Nach Ihrem Belieben.",
    "lv": "На ваше усмотрение.",
    "level": "Sätze"
  },
  {
    "de": "Zu jeder beliebigen Zeit.",
    "lv": "В любое время.",
    "level": "Sätze"
  },
  {
    "de": "Schweigen beobachten.",
    "lv": "Хранить молчание.",
    "level": "Sätze"
  },
  {
    "de": "Zur Bequemlichkeit.",
    "lv": "Для удобства.",
    "level": "Sätze"
  },
  {
    "de": "Bereit sein.",
    "lv": "Быть готовым. • Быть согласным.",
    "level": "Sätze"
  },
  {
    "de": "Unfallopfer bergen.",
    "lv": "Спасать пострадавших при несчастном случае.",
    "level": "Sätze"
  },
  {
    "de": "Bericht erstatten.",
    "lv": "Докладывать.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind besetzt.",
    "lv": "Все места заняты.",
    "level": "Sätze"
  },
  {
    "de": "Neue Besen kehren gut.",
    "lv": "Новая метла чисто метёт.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt ein Haus.",
    "lv": "Он владеет домом.",
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
    "lv": "Скорейшего выздоровления!",
    "level": "Sätze"
  },
  {
    "de": "Beim besten Willen.",
    "lv": "При всём желании.",
    "level": "Sätze"
  },
  {
    "de": "Am besten.",
    "lv": "Лучше всего.",
    "level": "Sätze"
  },
  {
    "de": "Es besteht Zweifel.",
    "lv": "Есть сомнения.",
    "level": "Sätze"
  },
  {
    "de": "Seine Aufgabe besteht darin...",
    "lv": "Его задача состоит в том, чтобы...",
    "level": "Sätze"
  },
  {
    "de": "Grüße bestellen.",
    "lv": "Передавать привет.",
    "level": "Sätze"
  },
  {
    "de": "Ganz bestimmt.",
    "lv": "Обязательно. • Совершенно точно.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch kommen.",
    "lv": "Приходить в гости.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch sein.",
    "lv": "Быть в гостях. • Гостить.",
    "level": "Sätze"
  },
  {
    "de": "Oft Konzerte besuchen.",
    "lv": "Часто ходить на концерты.",
    "level": "Sätze"
  },
  {
    "de": "Welche Schule hat er besucht?",
    "lv": "В какой школе он учился?",
    "level": "Sätze"
  },
  {
    "de": "In Betracht ziehen.",
    "lv": "Принимать во внимание. • Рассматривать как вариант.",
    "level": "Sätze"
  },
  {
    "de": "Außer Betracht lassen.",
    "lv": "Не принимать во внимание.",
    "level": "Sätze"
  },
  {
    "de": "Er betreibt ein Hotel.",
    "lv": "Он управляет гостиницей.",
    "level": "Sätze"
  },
  {
    "de": "Alle beiden.",
    "lv": "Оба.",
    "level": "Sätze"
  },
  {
    "de": "Alles bezahlen.",
    "lv": "Заплатить за всё.",
    "level": "Sätze"
  },
  {
    "de": "Bezüglich auf etwas.",
    "lv": "Относительно чего-либо.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön.",
    "lv": "Пожалуйста.",
    "level": "Sätze"
  },
  {
    "de": "Wie bitte?",
    "lv": "Простите?",
    "level": "Sätze"
  },
  {
    "de": "Bitte sehr.",
    "lv": "Пожалуйста.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe eine Bitte an Sie.",
    "lv": "У меня к вам просьба.",
    "level": "Sätze"
  },
  {
    "de": "Trompete blasen.",
    "lv": "Играть на трубе.",
    "level": "Sätze"
  },
  {
    "de": "In einem Buch blättern.",
    "lv": "Листать книгу.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßen Füßen.",
    "lv": "Босиком.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßem Auge.",
    "lv": "Невооружённым глазом.",
    "level": "Sätze"
  },
  {
    "de": "Danke für die Blumen!",
    "lv": "Спасибо за комплимент!",
    "level": "Sätze"
  },
  {
    "de": "Alles in Butter.",
    "lv": "Всё в порядке.",
    "level": "Sätze"
  },
  {
    "de": "Bitte checken.",
    "lv": "Просьба проверить.",
    "level": "Sätze"
  },
  {
    "de": "Da ist er!",
    "lv": "Вот он!",
    "level": "Sätze"
  },
  {
    "de": "Alles spricht dafür.",
    "lv": "Всё говорит в пользу этого.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann nichts dafür.",
    "lv": "Я не виноват.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin dagegen.",
    "lv": "Я против.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe nichts dagegen.",
    "lv": "Я ничего не имею против.",
    "level": "Sätze"
  },
  {
    "de": "Von daheim.",
    "lv": "Из дома.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Dame ziehen.",
    "lv": "Ходить ферзём.",
    "level": "Sätze"
  },
  {
    "de": "Es dämmert.",
    "lv": "Смеркается. • Светает.",
    "level": "Sätze"
  },
  {
    "de": "Danke schön!",
    "lv": "Большое спасибо!",
    "level": "Sätze"
  },
  {
    "de": "Dann und wann.",
    "lv": "Время от времени.",
    "level": "Sätze"
  },
  {
    "de": "Darauf kannst du dich verlassen.",
    "lv": "На это ты можешь положиться.",
    "level": "Sätze"
  },
  {
    "de": "Daraus wird nichts.",
    "lv": "Из этого ничего не выйдет.",
    "level": "Sätze"
  },
  {
    "de": "So dass...",
    "lv": "Так что...",
    "level": "Sätze"
  },
  {
    "de": "Für wen halten Sie mich?",
    "lv": "За кого вы меня принимаете?",
    "level": "Sätze"
  },
  {
    "de": "Hände weg!",
    "lv": "Руки прочь!",
    "level": "Sätze"
  },
  {
    "de": "Lass den Kopf nicht hängen!",
    "lv": "Не вешай нос!",
    "level": "Sätze"
  },
  {
    "de": "zu Hause",
    "lv": "дома",
    "level": "Sätze"
  },
  {
    "de": "nach Hause gehen",
    "lv": "идти домой",
    "level": "Sätze"
  },
  {
    "de": "von Haus aus",
    "lv": "по происхождению • от природы",
    "level": "Sätze"
  },
  {
    "de": "Meinen herzlichsten Glückwunsch!",
    "lv": "Сердечно поздравляю!",
    "level": "Sätze"
  },
  {
    "de": "Seien Sie so gut!",
    "lv": "Будьте так добры!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie die Güte!",
    "lv": "Будьте любезны!",
    "level": "Sätze"
  },
  {
    "de": "Was hast du?",
    "lv": "Что с тобой?",
    "level": "Sätze"
  },
  {
    "de": "Gestatten Sie bitte!",
    "lv": "Позвольте, пожалуйста!",
    "level": "Sätze"
  },
  {
    "de": "Ist es gestattet zu rauchen?",
    "lv": "Можно курить?",
    "level": "Sätze"
  },
  {
    "de": "Ich muss gestehen, dass...",
    "lv": "Должен признаться, что...",
    "level": "Sätze"
  },
  {
    "de": "gestern früh",
    "lv": "вчера утром",
    "level": "Sätze"
  },
  {
    "de": "gestern Abend",
    "lv": "вчера вечером",
    "level": "Sätze"
  },
  {
    "de": "Es ist mir gleichgültig, ob...",
    "lv": "Мне всё равно, будет ли...",
    "level": "Sätze"
  },
  {
    "de": "Was ist geschehen?",
    "lv": "Что случилось?",
    "level": "Sätze"
  },
  {
    "de": "Mach keine Geschichten!",
    "lv": "Не делай глупостей!",
    "level": "Sätze"
  },
  {
    "de": "Geschweige denn...",
    "lv": "Не говоря уже о...",
    "level": "Sätze"
  },
  {
    "de": "Gehen Sie geradeaus!",
    "lv": "Идите прямо!",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es Ihnen?",
    "lv": "Как у вас дела?",
    "level": "Sätze"
  },
  {
    "de": "Frag ihn gelegentlich, ob...",
    "lv": "Спроси его при случае, знает ли он...",
    "level": "Sätze"
  },
  {
    "de": "morgen früh",
    "lv": "завтра утром",
    "level": "Sätze"
  },
  {
    "de": "im Frühling",
    "lv": "весной",
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
    "lv": "Продолжай!",
    "level": "Sätze"
  },
  {
    "de": "Er ist kein Freund von...",
    "lv": "Он не любитель...",
    "level": "Sätze"
  },
  {
    "de": "Es erwies sich, dass...",
    "lv": "Оказалось, что...",
    "level": "Sätze"
  },
  {
    "de": "Gedenkst du meiner?",
    "lv": "Ты меня помнишь? • Ты думаешь обо мне?",
    "level": "Sätze"
  },
  {
    "de": "im Winter",
    "lv": "зимой",
    "level": "Sätze"
  },
  {
    "de": "Welcher Jahrgang sind Sie?",
    "lv": "Какого вы года рождения?",
    "level": "Sätze"
  },
  {
    "de": "Es jammert mich zu sehen...",
    "lv": "Мне больно видеть...",
    "level": "Sätze"
  },
  {
    "de": "je mehr, desto besser",
    "lv": "чем больше, тем лучше",
    "level": "Sätze"
  },
  {
    "de": "bis jetzt",
    "lv": "до сих пор",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich zum Bahnhof?",
    "lv": "Как мне пройти к вокзалу?",
    "level": "Sätze"
  },
  {
    "de": "Komm her!",
    "lv": "Иди сюда!",
    "level": "Sätze"
  },
  {
    "de": "Könnte ich Frau N. sprechen?",
    "lv": "Мог бы я поговорить с госпожой Н.?",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das?",
    "lv": "Сколько это стоит?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange dauert die Vorstellung?",
    "lv": "Сколько длится спектакль?",
    "level": "Sätze"
  },
  {
    "de": "Lass das!",
    "lv": "Перестань! • Оставь это!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich in Ruhe!",
    "lv": "Оставь меня в покое!",
    "level": "Sätze"
  },
  {
    "de": "Lassen Sie mich Ihnen helfen!",
    "lv": "Позвольте мне вам помочь!",
    "level": "Sätze"
  },
  {
    "de": "Lasst uns gehen!",
    "lv": "Пойдёмте!",
    "level": "Sätze"
  },
  {
    "de": "Na, wie läufts?",
    "lv": "Ну, как дела?",
    "level": "Sätze"
  },
  {
    "de": "Es lebe!",
    "lv": "Да здравствует!",
    "level": "Sätze"
  },
  {
    "de": "Leben Sie wohl!",
    "lv": "Прощайте!",
    "level": "Sätze"
  },
  {
    "de": "Was ist los?",
    "lv": "В чём дело?",
    "level": "Sätze"
  },
  {
    "de": "Der Job ist anstrengend.",
    "lv": "Работа утомительная.",
    "level": "Sätze"
  },
  {
    "de": "Das war ein anstrengender Tag.",
    "lv": "Это был тяжёлый день.",
    "level": "Sätze"
  },
  {
    "de": "Deutsch lernen kann anstrengend sein.",
    "lv": "Учить немецкий язык бывает утомительно.",
    "level": "Sätze"
  },
  {
    "de": "Er verlangt eine Erklärung.",
    "lv": "Он требует объяснений.",
    "level": "Sätze"
  },
  {
    "de": "Der Verkäufer verlangt zu viel Geld.",
    "lv": "Продавец просит слишком много денег.",
    "level": "Sätze"
  },
  {
    "de": "Das Gesetz verlangt es so.",
    "lv": "Так требует закон.",
    "level": "Sätze"
  },
  {
    "de": "Das ist gar nicht so schwer.",
    "lv": "Это совсем не так трудно.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe gar kein Geld.",
    "lv": "У меня совсем нет денег.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gar nichts gesagt.",
    "lv": "Он вообще ничего не сказал.",
    "level": "Sätze"
  },
  {
    "de": "Der Hund ist los.",
    "lv": "Собака сорвалась с привязи.",
    "level": "Sätze"
  },
  {
    "de": "Hier ist viel los.",
    "lv": "Здесь кипит жизнь.",
    "level": "Sätze"
  },
  {
    "de": "Halt die Luft an!",
    "lv": "Замолчи! • Не преувеличивай!",
    "level": "Sätze"
  },
  {
    "de": "Was machst du?",
    "lv": "Что ты делаешь?",
    "level": "Sätze"
  },
  {
    "de": "Sag mal!",
    "lv": "Скажи-ка!",
    "level": "Sätze"
  },
  {
    "de": "Was meinen Sie damit?",
    "lv": "Что вы имеете в виду?",
    "level": "Sätze"
  },
  {
    "de": "Wir gehen mit Ihnen.",
    "lv": "Мы пойдём с вами.",
    "level": "Sätze"
  },
  {
    "de": "Ich fahre mit der Eisenbahn.",
    "lv": "Я еду поездом.",
    "level": "Sätze"
  },
  {
    "de": "am Mittwoch",
    "lv": "в среду",
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
    "lv": "в понедельник",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen!",
    "lv": "Доброе утро!",
    "level": "Sätze"
  },
  {
    "de": "am Morgen",
    "lv": "утром",
    "level": "Sätze"
  },
  {
    "de": "Gute Nacht!",
    "lv": "Спокойной ночи!",
    "level": "Sätze"
  },
  {
    "de": "Nehmen Sie Platz!",
    "lv": "Садитесь!",
    "level": "Sätze"
  },
  {
    "de": "Letzte Neuheit!",
    "lv": "Последняя новинка!",
    "level": "Sätze"
  },
  {
    "de": "Nicht wahr?",
    "lv": "Не правда ли?",
    "level": "Sätze"
  },
  {
    "de": "Nicht doch!",
    "lv": "Да нет же! • Не надо!",
    "level": "Sätze"
  },
  {
    "de": "Nun endlich!",
    "lv": "Ну наконец-то!",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das?",
    "lv": "Для чего это нужно?",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das alles?",
    "lv": "К чему всё это?",
    "level": "Sätze"
  },
  {
    "de": "Parken verboten!",
    "lv": "Стоянка запрещена!",
    "level": "Sätze"
  },
  {
    "de": "Nicht parken!",
    "lv": "Стоянка запрещена!",
    "level": "Sätze"
  },
  {
    "de": "Er hat Recht.",
    "lv": "Он прав.",
    "level": "Sätze"
  },
  {
    "de": "Wovon ist die Rede?",
    "lv": "О чём идёт речь?",
    "level": "Sätze"
  },
  {
    "de": "Davon kann keine Rede sein.",
    "lv": "Об этом не может быть и речи.",
    "level": "Sätze"
  },
  {
    "de": "Glückliche Reise!",
    "lv": "Счастливого пути!",
    "level": "Sätze"
  },
  {
    "de": "Mir reißt die Geduld.",
    "lv": "У меня кончается терпение.",
    "level": "Sätze"
  },
  {
    "de": "Man sagt, dass...",
    "lv": "Говорят, что...",
    "level": "Sätze"
  },
  {
    "de": "Schon gut!",
    "lv": "Всё в порядке!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön!",
    "lv": "Пожалуйста!",
    "level": "Sätze"
  },
  {
    "de": "Was bin ich schuldig?",
    "lv": "Сколько я вам должен?",
    "level": "Sätze"
  },
  {
    "de": "Vor dem Gebrauch schütteln!",
    "lv": "Перед употреблением взбалтывать!",
    "level": "Sätze"
  },
  {
    "de": "Sehen Sie mal!",
    "lv": "Посмотрите-ка!",
    "level": "Sätze"
  },
  {
    "de": "Wie sehr auch...",
    "lv": "Как бы сильно ни...",
    "level": "Sätze"
  },
  {
    "de": "Seit wann?",
    "lv": "С каких пор?",
    "level": "Sätze"
  },
  {
    "de": "Was soll ich tun?",
    "lv": "Что мне делать?",
    "level": "Sätze"
  },
  {
    "de": "im Sommer",
    "lv": "летом",
    "level": "Sätze"
  },
  {
    "de": "Nicht nur..., sondern auch...",
    "lv": "Не только..., но и...",
    "level": "Sätze"
  },
  {
    "de": "Sonst noch etwas?",
    "lv": "Что-нибудь ещё?",
    "level": "Sätze"
  },
  {
    "de": "Spaß beiseite!",
    "lv": "Шутки в сторону!",
    "level": "Sätze"
  },
  {
    "de": "Wie spät ist es?",
    "lv": "Который час?",
    "level": "Sätze"
  },
  {
    "de": "Durchfahrt gesperrt!",
    "lv": "Проезд закрыт!",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie deutsch?",
    "lv": "Вы говорите по-немецки?",
    "level": "Sätze"
  },
  {
    "de": "Statt zu...",
    "lv": "Вместо того чтобы...",
    "level": "Sätze"
  },
  {
    "de": "Wie steht’s?",
    "lv": "Как дела?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Hut steht ihr gut.",
    "lv": "Эта шляпа ей идёт.",
    "level": "Sätze"
  },
  {
    "de": "Guten Tag!",
    "lv": "Добрый день!",
    "level": "Sätze"
  },
  {
    "de": "Wo treffen wir uns?",
    "lv": "Где мы встретимся?",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie näher!",
    "lv": "Подойдите поближе!",
    "level": "Sätze"
  },
  {
    "de": "Ehrlichkeit ist eine Tugend.",
    "lv": "Честность — это добродетель.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe viel zu tun.",
    "lv": "У меня много дел.",
    "level": "Sätze"
  },
  {
    "de": "Nicht übel!",
    "lv": "Неплохо!",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt über mir.",
    "lv": "Он живёт надо мной.",
    "level": "Sätze"
  },
  {
    "de": "Er ist davon überzeugt.",
    "lv": "Он в этом убеждён.",
    "level": "Sätze"
  },
  {
    "de": "So ist es üblich.",
    "lv": "Так принято.",
    "level": "Sätze"
  },
  {
    "de": "Deine Uhr geht nach.",
    "lv": "Твои часы отстают.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel Uhr ist es?",
    "lv": "Сколько времени?",
    "level": "Sätze"
  },
  {
    "de": "Um acht Uhr früh.",
    "lv": "В восемь часов утра.",
    "level": "Sätze"
  },
  {
    "de": "umso mehr",
    "lv": "тем более",
    "level": "Sätze"
  },
  {
    "de": "Rechts um!",
    "lv": "Напра-во!",
    "level": "Sätze"
  },
  {
    "de": "Und ob!",
    "lv": "Ещё бы!",
    "level": "Sätze"
  },
  {
    "de": "und zwar",
    "lv": "а именно",
    "level": "Sätze"
  },
  {
    "de": "Auf Unkosten von...",
    "lv": "За счёт...",
    "level": "Sätze"
  },
  {
    "de": "Er saß unter den Zuschauern.",
    "lv": "Он сидел среди зрителей.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ursache!",
    "lv": "Не за что!",
    "level": "Sätze"
  },
  {
    "de": "Es geschah, wie verabredet.",
    "lv": "Всё произошло, как было условлено.",
    "level": "Sätze"
  },
  {
    "de": "Rauchen verboten!",
    "lv": "Курить запрещено!",
    "level": "Sätze"
  },
  {
    "de": "Falsch verbunden!",
    "lv": "Вы ошиблись номером!",
    "level": "Sätze"
  },
  {
    "de": "Eintritt verboten!",
    "lv": "Вход запрещён!",
    "level": "Sätze"
  },
  {
    "de": "Verstehen Sie mich?",
    "lv": "Вы меня понимаете?",
    "level": "Sätze"
  },
  {
    "de": "Er versteht nichts davon.",
    "lv": "Он в этом ничего не понимает.",
    "level": "Sätze"
  },
  {
    "de": "Seine Ansicht vertreten.",
    "lv": "Отстаивать свою точку зрения.",
    "level": "Sätze"
  },
  {
    "de": "Streit verursachen.",
    "lv": "Вызывать ссору.",
    "level": "Sätze"
  },
  {
    "de": "Viel besser.",
    "lv": "Гораздо лучше.",
    "level": "Sätze"
  },
  {
    "de": "Zu viel.",
    "lv": "Слишком много.",
    "level": "Sätze"
  },
  {
    "de": "Vom Hörensagen.",
    "lv": "Понаслышке.",
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
    "lv": "Он берлинец по рождению.",
    "level": "Sätze"
  },
  {
    "de": "Er steht vor dem Fenster.",
    "lv": "Он стоит перед окном.",
    "level": "Sätze"
  },
  {
    "de": "Vor Sonnenaufgang.",
    "lv": "До восхода солнца.",
    "level": "Sätze"
  },
  {
    "de": "Vor vierzehn Tagen.",
    "lv": "Две недели назад.",
    "level": "Sätze"
  },
  {
    "de": "Vor Freude.",
    "lv": "От радости.",
    "level": "Sätze"
  },
  {
    "de": "Vor allem.",
    "lv": "Прежде всего.",
    "level": "Sätze"
  },
  {
    "de": "Im Voraus.",
    "lv": "Заранее.",
    "level": "Sätze"
  },
  {
    "de": "Unter der Voraussetzung, dass...",
    "lv": "При условии, что...",
    "level": "Sätze"
  },
  {
    "de": "Unter dem Vorbehalt.",
    "lv": "С этой оговоркой.",
    "level": "Sätze"
  },
  {
    "de": "Vorhanden sein.",
    "lv": "Иметься в наличии. • Существовать.",
    "level": "Sätze"
  },
  {
    "de": "In der vorigen Woche.",
    "lv": "На прошлой неделе.",
    "level": "Sätze"
  },
  {
    "de": "Vorkehrungen treffen.",
    "lv": "Принимать меры предосторожности.",
    "level": "Sätze"
  },
  {
    "de": "Sie kommt mir bekannt vor.",
    "lv": "Она кажется мне знакомой.",
    "level": "Sätze"
  },
  {
    "de": "Er hat Vorliebe für Literatur.",
    "lv": "Он особенно любит литературу.",
    "level": "Sätze"
  },
  {
    "de": "Heute Vormittag.",
    "lv": "Сегодня утром. • Сегодня до обеда.",
    "level": "Sätze"
  },
  {
    "de": "Von vorn.",
    "lv": "Спереди. • Сначала.",
    "level": "Sätze"
  },
  {
    "de": "Nach vorn.",
    "lv": "Вперёд.",
    "level": "Sätze"
  },
  {
    "de": "Von vornherein.",
    "lv": "С самого начала.",
    "level": "Sätze"
  },
  {
    "de": "Im Vorteil sein.",
    "lv": "Быть в выгодном положении.",
    "level": "Sätze"
  },
  {
    "de": "Wach sein.",
    "lv": "Бодрствовать.",
    "level": "Sätze"
  },
  {
    "de": "Wach werden.",
    "lv": "Просыпаться.",
    "level": "Sätze"
  },
  {
    "de": "Auf Wache sein.",
    "lv": "Стоять на посту.",
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
    "lv": "Говорить впустую.",
    "level": "Sätze"
  },
  {
    "de": "Hier haben die Wände Ohren.",
    "lv": "И у стен есть уши.",
    "level": "Sätze"
  },
  {
    "de": "Bis wann?",
    "lv": "До какого времени?",
    "level": "Sätze"
  },
  {
    "de": "Es ist warm.",
    "lv": "Тепло.",
    "level": "Sätze"
  },
  {
    "de": "Auf eine Nachricht warten.",
    "lv": "Ждать сообщения.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie?",
    "lv": "Чего вы хотите?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein...?",
    "lv": "Какой...? • Что за...?",
    "level": "Sätze"
  },
  {
    "de": "Auf halbem Wege.",
    "lv": "На полпути.",
    "level": "Sätze"
  },
  {
    "de": "Auf diesem Wege.",
    "lv": "Таким путём. • Таким способом.",
    "level": "Sätze"
  },
  {
    "de": "Auf friedlichem Wege.",
    "lv": "Мирным путём.",
    "level": "Sätze"
  },
  {
    "de": "Unserer Freundschaft wegen.",
    "lv": "Ради нашей дружбы.",
    "level": "Sätze"
  },
  {
    "de": "Von Rechts wegen.",
    "lv": "По закону. • По справедливости.",
    "level": "Sätze"
  },
  {
    "de": "Weh tun.",
    "lv": "Болеть. • Причинять боль.",
    "level": "Sätze"
  },
  {
    "de": "Zu Weihnachten.",
    "lv": "На Рождество.",
    "level": "Sätze"
  },
  {
    "de": "Auf welche Weise?",
    "lv": "Каким образом?",
    "level": "Sätze"
  },
  {
    "de": "Art und Weise.",
    "lv": "Способ.",
    "level": "Sätze"
  },
  {
    "de": "Ohne weiteres.",
    "lv": "Без промедления. • Без труда.",
    "level": "Sätze"
  },
  {
    "de": "Bis auf weiteres.",
    "lv": "До особого распоряжения.",
    "level": "Sätze"
  },
  {
    "de": "Und so weiter.",
    "lv": "И так далее.",
    "level": "Sätze"
  },
  {
    "de": "Weiter nichts.",
    "lv": "Больше ничего.",
    "level": "Sätze"
  },
  {
    "de": "An welchem Tag?",
    "lv": "В какой день?",
    "level": "Sätze"
  },
  {
    "de": "Alle Welt.",
    "lv": "Весь мир. • Все.",
    "level": "Sätze"
  },
  {
    "de": "In wenigen Tagen.",
    "lv": "Через несколько дней.",
    "level": "Sätze"
  },
  {
    "de": "Zu wenig.",
    "lv": "Слишком мало.",
    "level": "Sätze"
  },
  {
    "de": "Wenn auch.",
    "lv": "Хотя и.",
    "level": "Sätze"
  },
  {
    "de": "Wer da?",
    "lv": "Кто там?",
    "level": "Sätze"
  },
  {
    "de": "Gesammelte Werke von Schiller.",
    "lv": "Собрание сочинений Шиллера.",
    "level": "Sätze"
  },
  {
    "de": "Ausgewählte Werke.",
    "lv": "Избранные произведения.",
    "level": "Sätze"
  },
  {
    "de": "Er ist wert, dass...",
    "lv": "Он достоин того, чтобы...",
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
    "lv": "Вступать в соревнование.",
    "level": "Sätze"
  },
  {
    "de": "Um die Wette laufen.",
    "lv": "Состязаться в беге.",
    "level": "Sätze"
  },
  {
    "de": "Was gilt die Wette?",
    "lv": "На что спорим?",
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
    "lv": "Протестовать. • Выдвигать возражения.",
    "level": "Sätze"
  },
  {
    "de": "Wie alt ist er?",
    "lv": "Сколько ему лет?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange?",
    "lv": "Как долго?",
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
    "lv": "Дикие животные.",
    "level": "Sätze"
  },
  {
    "de": "Herzlich willkommen!",
    "lv": "Добро пожаловать!",
    "level": "Sätze"
  },
  {
    "de": "Du musst ziehen.",
    "lv": "Твой ход.",
    "level": "Sätze"
  },
  {
    "de": "Es zieht.",
    "lv": "Сквозит.",
    "level": "Sätze"
  },
  {
    "de": "Ziemlich kalt.",
    "lv": "Довольно холодно.",
    "level": "Sätze"
  },
  {
    "de": "Zipfel einer Wurst.",
    "lv": "Кончик колбасы.",
    "level": "Sätze"
  },
  {
    "de": "Zu ihm gehen.",
    "lv": "Идти к нему.",
    "level": "Sätze"
  },
  {
    "de": "Zur Schule gehen.",
    "lv": "Ходить в школу.",
    "level": "Sätze"
  },
  {
    "de": "Zu Hause bleiben.",
    "lv": "Оставаться дома.",
    "level": "Sätze"
  },
  {
    "de": "Von Tag zu Tag.",
    "lv": "С каждым днём.",
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
    "lv": "Пешком.",
    "level": "Sätze"
  },
  {
    "de": "Zu Pferde.",
    "lv": "Верхом.",
    "level": "Sätze"
  },
  {
    "de": "Zu Rad.",
    "lv": "На велосипеде.",
    "level": "Sätze"
  },
  {
    "de": "Es hörte auf zu regnen.",
    "lv": "Дождь перестал.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe noch viel zu tun.",
    "lv": "У меня ещё много дел.",
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
    "lv": "Пожимать плечами.",
    "level": "Sätze"
  },
  {
    "de": "In einem Zug trinken.",
    "lv": "Выпить залпом.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde gehen.",
    "lv": "Погибать.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde legen.",
    "lv": "Класть в основу. • Брать за основу.",
    "level": "Sätze"
  },
  {
    "de": "Zum ersten Mal.",
    "lv": "В первый раз.",
    "level": "Sätze"
  },
  {
    "de": "Machen Sie bitte die Tür zu!",
    "lv": "Закройте, пожалуйста, дверь!",
    "level": "Sätze"
  },
  {
    "de": "Er hat zugenommen.",
    "lv": "Он прибавил в весе.",
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
    "lv": "Я бы от него такого не ожидал.",
    "level": "Sätze"
  },
  {
    "de": "Freier Zutritt.",
    "lv": "Свободный вход.",
    "level": "Sätze"
  },
  {
    "de": "Zutritt verboten!",
    "lv": "Вход запрещён!",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu viel!",
    "lv": "Это уже слишком!",
    "level": "Sätze"
  },
  {
    "de": "Zuwider werden.",
    "lv": "Становиться противным. • Надоедать.",
    "level": "Sätze"
  },
  {
    "de": "Und zwar.",
    "lv": "А именно.",
    "level": "Sätze"
  },
  {
    "de": "Es steht außer Zweifel.",
    "lv": "Это не подлежит сомнению.",
    "level": "Sätze"
  },
  {
    "de": "Ohne Zweifel.",
    "lv": "Без сомнения.",
    "level": "Sätze"
  },
  {
    "de": "Zum Zweiten.",
    "lv": "Во-вторых.",
    "level": "Sätze"
  },
  {
    "de": "Frohes neues Jahr!",
    "lv": "С Новым годом!",
    "level": "Sätze"
  },
  {
    "de": "Herzlichen Glückwunsch zum Geburtstag!",
    "lv": "Поздравляю с днём рождения!",
    "level": "Sätze"
  },
  {
    "de": "Gute Reise!",
    "lv": "Счастливого пути!",
    "level": "Sätze"
  },
  {
    "de": "Es freut mich, Sie kennenzulernen.",
    "lv": "Рад с вами познакомиться.",
    "level": "Sätze"
  },
  {
    "de": "Wären Sie bitte so nett?",
    "lv": "Не будете ли вы так любезны?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin Ihnen sehr dankbar.",
    "lv": "Я вам очень благодарен.",
    "level": "Sätze"
  },
  {
    "de": "Setzt euch bitte hin!",
    "lv": "Садитесь, пожалуйста!",
    "level": "Sätze"
  },
  {
    "de": "Ben, komm bitte an die Tafel!",
    "lv": "Бен, иди, пожалуйста, к доске!",
    "level": "Sätze"
  },
  {
    "de": "Schlagt bitte die Lehrbücher auf!",
    "lv": "Откройте, пожалуйста, учебники!",
    "level": "Sätze"
  },
  {
    "de": "Geht bitte in die Sporthalle!",
    "lv": "Идите, пожалуйста, в спортзал!",
    "level": "Sätze"
  },
  {
    "de": "Schläfst du noch?",
    "lv": "Ты ещё спишь?",
    "level": "Sätze"
  },
  {
    "de": "Schlafen Sie noch?",
    "lv": "Вы ещё спите?",
    "level": "Sätze"
  },
  {
    "de": "Er ist fest eingeschlafen.",
    "lv": "Он крепко заснул.",
    "level": "Sätze"
  },
  {
    "de": "Wecke ihn bitte auf, es ist schon spät!",
    "lv": "Разбуди его, пожалуйста, уже поздно!",
    "level": "Sätze"
  },
  {
    "de": "Es tut mir sehr leid!",
    "lv": "Мне очень жаль!",
    "level": "Sätze"
  },
  {
    "de": "Vielen Dank!",
    "lv": "Большое спасибо!",
    "level": "Sätze"
  },
  {
    "de": "Finn, fang bitte an!",
    "lv": "Финн, начинай, пожалуйста!",
    "level": "Sätze"
  },
  {
    "de": "Lest bitte mit!",
    "lv": "Читайте, пожалуйста, вместе со мной!",
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
    "lv": "Вернись, пожалуйста, на своё место!",
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
    "lv": "Вставай, Ханна, будильник звенит! • Вставай, Ханна, звонят в дверь!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich noch fünf Minuten schlafen!",
    "lv": "Дай мне поспать ещё пять минут!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss nicht, das Zimmer zu lüften!",
    "lv": "Не забудь проветрить комнату!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist das Handtuch?",
    "lv": "Где полотенце?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mir die Zähne putzen.",
    "lv": "Я хочу почистить зубы.",
    "level": "Sätze"
  },
  {
    "de": "Mit was putzt du dir die Zähne?",
    "lv": "Чем ты чистишь зубы?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mich anziehen.",
    "lv": "Я хочу одеться.",
    "level": "Sätze"
  },
  {
    "de": "Zieh dich bitte schnell an!",
    "lv": "Одевайся, пожалуйста, быстрее!",
    "level": "Sätze"
  },
  {
    "de": "Kleide dich wärmer an, draußen ist es kühl.",
    "lv": "Оденься потеплее, на улице прохладно.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, wie geht es dir?",
    "lv": "Доброе утро, как у тебя дела?",
    "level": "Sätze"
  },
  {
    "de": "Mir geht es gut, danke.",
    "lv": "У меня всё хорошо, спасибо.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es Neues?",
    "lv": "Что нового?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein Chaos hier!",
    "lv": "Какой здесь беспорядок!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich beim Aufräumen helfen?",
    "lv": "Можно помочь с уборкой?",
    "level": "Sätze"
  },
  {
    "de": "Was trinkst du morgens, Kaffee oder Tee?",
    "lv": "Что ты пьёшь по утрам, кофе или чай?",
    "level": "Sätze"
  },
  {
    "de": "Gewöhnlich trinke ich morgens eine Tasse Kaffee.",
    "lv": "Обычно по утрам я выпиваю чашку кофе.",
    "level": "Sätze"
  },
  {
    "de": "Am liebsten trinke ich schwarzen Kaffee.",
    "lv": "Больше всего я люблю чёрный кофе.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, hast du gut geschlafen?",
    "lv": "Доброе утро, ты хорошо спал?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin noch sehr müde.",
    "lv": "Я всё ещё очень устал.",
    "level": "Sätze"
  },
  {
    "de": "Willst du Kaffee oder Milch?",
    "lv": "Хочешь кофе или молока?",
    "level": "Sätze"
  },
  {
    "de": "Gib mir bitte ein Brötchen mit Käse.",
    "lv": "Дай мне, пожалуйста, булочку с сыром.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss jetzt los!",
    "lv": "Мне пора идти!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss dein Frühstück nicht!",
    "lv": "Не забудь завтрак!",
    "level": "Sätze"
  },
  {
    "de": "Klara, deck bitte den Tisch!",
    "lv": "Клара, накрой, пожалуйста, на стол!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss die Servietten nicht!",
    "lv": "Не забудь салфетки!",
    "level": "Sätze"
  },
  {
    "de": "Wann esst ihr zu Mittag?",
    "lv": "Когда вы обедаете?",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit zu essen.",
    "lv": "Пора есть.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es heute zu Mittag?",
    "lv": "Что сегодня на обед?",
    "level": "Sätze"
  },
  {
    "de": "Wie schmeckt dir die Suppe?",
    "lv": "Как тебе суп?",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt ist sie etwas zu salzig.",
    "lv": "Честно говоря, он немного пересолен.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dir ein Stück Brot geben?",
    "lv": "Можно предложить тебе кусок хлеба?",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich habe schon.",
    "lv": "Спасибо, у меня уже есть.",
    "level": "Sätze"
  },
  {
    "de": "Das Fleisch schmeckt ausgezeichnet.",
    "lv": "Мясо превосходное.",
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
    "lv": "Ты сегодня вечером свободен?",
    "level": "Sätze"
  },
  {
    "de": "Komm doch heute zum Mittagessen vorbei!",
    "lv": "Обязательно заходи сегодня к нам на обед!",
    "level": "Sätze"
  },
  {
    "de": "Setzen wir uns an den Tisch.",
    "lv": "Давайте сядем за стол.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, bedien dich!",
    "lv": "Пожалуйста, угощайся!",
    "level": "Sätze"
  },
  {
    "de": "Stört dich das Rauchen?",
    "lv": "Тебе мешает курение?",
    "level": "Sätze"
  },
  {
    "de": "Danke für die nette Aufnahme!",
    "lv": "Спасибо за радушный приём!",
    "level": "Sätze"
  },
  {
    "de": "Wann gehst du ins Bett?",
    "lv": "Когда ты ложишься спать?",
    "level": "Sätze"
  },
  {
    "de": "Wenn ich von der Arbeit komme, bin ich immer müde.",
    "lv": "Когда я прихожу с работы, я всегда чувствую себя усталым.",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, ins Bett zu gehen.",
    "lv": "Пора ложиться спать.",
    "level": "Sätze"
  },
  {
    "de": "Es ist schönes Wetter.",
    "lv": "Прекрасная погода.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mit mir spazieren gehen?",
    "lv": "Хочешь пойти со мной погулять?",
    "level": "Sätze"
  },
  {
    "de": "Sieh mal, es wird gleich regnen.",
    "lv": "Смотри, сейчас пойдёт дождь.",
    "level": "Sätze"
  },
  {
    "de": "Nimm den Regenschirm mit!",
    "lv": "Возьми с собой зонт!",
    "level": "Sätze"
  },
  {
    "de": "Es regnet.",
    "lv": "Идёт дождь.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin schon ganz nass.",
    "lv": "Я уже весь промок.",
    "level": "Sätze"
  },
  {
    "de": "Glaubst du, dass es den ganzen Tag regnen wird?",
    "lv": "Ты думаешь, что дождь будет идти весь день?",
    "level": "Sätze"
  },
  {
    "de": "Es hört auf zu regnen.",
    "lv": "Дождь прекращается.",
    "level": "Sätze"
  },
  {
    "de": "Die Sonne scheint wieder.",
    "lv": "Снова светит солнце.",
    "level": "Sätze"
  },
  {
    "de": "Es ist sehr warm.",
    "lv": "Очень тепло.",
    "level": "Sätze"
  },
  {
    "de": "Es sieht nach Regen aus.",
    "lv": "Похоже, будет дождь.",
    "level": "Sätze"
  },
  {
    "de": "Wir bekommen gleich ein Gewitter.",
    "lv": "Сейчас начнётся гроза.",
    "level": "Sätze"
  },
  {
    "de": "Das Gewitter zieht vorüber.",
    "lv": "Гроза проходит.",
    "level": "Sätze"
  },
  {
    "de": "Die Wolken verziehen sich.",
    "lv": "Тучи расходятся.",
    "level": "Sätze"
  },
  {
    "de": "Siehst du den Regenbogen?",
    "lv": "Ты видишь радугу?",
    "level": "Sätze"
  },
  {
    "de": "Der Winter ist da, es hat geschneit.",
    "lv": "Пришла зима, выпал снег.",
    "level": "Sätze"
  },
  {
    "de": "Es schneit.",
    "lv": "Идёт снег.",
    "level": "Sätze"
  },
  {
    "de": "Wie schön ist es im Wald im Winter!",
    "lv": "Как красиво зимой в лесу!",
    "level": "Sätze"
  },
  {
    "de": "Mir ist kalt, ich friere.",
    "lv": "Мне холодно, я мёрзну.",
    "level": "Sätze"
  },
  {
    "de": "Draußen ist Glatteis, pass auf!",
    "lv": "На улице гололёд, будь осторожен!",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir auf die Eisbahn gehen?",
    "lv": "Пойдём на каток?",
    "level": "Sätze"
  },
  {
    "de": "Zieh die Jacke an, du kannst dich erkälten.",
    "lv": "Надень куртку, ты можешь простудиться.",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb sieben.",
    "lv": "Сейчас половина седьмого.",
    "level": "Sätze"
  },
  {
    "de": "Meine Uhr geht fünf Minuten vor.",
    "lv": "Мои часы спешат на пять минут.",
    "level": "Sätze"
  },
  {
    "de": "Weck mich morgen früh um sieben Uhr!",
    "lv": "Разбуди меня завтра утром в семь часов!",
    "level": "Sätze"
  },
  {
    "de": "Was ist heute für ein Datum?",
    "lv": "Какое сегодня число?",
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
    "lv": "Мы уже давно не виделись.",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es dir?",
    "lv": "Как у тебя дела?",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, ich möchte etwas mit dir besprechen.",
    "lv": "Извини, я хотел бы кое-что с тобой обсудить.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir spazieren!",
    "lv": "Пойдём гулять!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Lust, mit mir in den Park zu gehen?",
    "lv": "Не хочешь сходить со мной в парк?",
    "level": "Sätze"
  },
  {
    "de": "Ich komme, um dich zum Spaziergang abzuholen.",
    "lv": "Я пришёл, чтобы позвать тебя на прогулку.",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte etwas langsamer, ich kann dir nicht folgen!",
    "lv": "Иди, пожалуйста, немного медленнее, я за тобой не успеваю!",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zum ersten Mal in dieser Gegend.",
    "lv": "Я впервые в этих местах.",
    "level": "Sätze"
  },
  {
    "de": "Ruhen wir uns ein wenig aus.",
    "lv": "Давай немного отдохнём.",
    "level": "Sätze"
  },
  {
    "de": "Jetzt können wir zurückgehen.",
    "lv": "Теперь мы можем идти обратно.",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt bin ich ziemlich müde.",
    "lv": "Честно говоря, я довольно сильно устал.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, wo ist die nächste U-Bahn-Station?",
    "lv": "Извини, где ближайшая станция метро?",
    "level": "Sätze"
  },
  {
    "de": "Welcher ist der kürzeste Weg?",
    "lv": "Какая дорога самая короткая?",
    "level": "Sätze"
  },
  {
    "de": "Geh hier die zweite Straße links und dann immer geradeaus.",
    "lv": "Здесь сверни на вторую улицу налево, а потом иди всё время прямо.",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich am schnellsten zum Bahnhof?",
    "lv": "Как мне быстрее всего добраться до вокзала?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe vor, morgen zu verreisen.",
    "lv": "Я собираюсь завтра уехать.",
    "level": "Sätze"
  },
  {
    "de": "Wohin willst du fahren?",
    "lv": "Куда ты хочешь поехать?",
    "level": "Sätze"
  },
  {
    "de": "Reist du geschäftlich oder privat?",
    "lv": "Ты едешь в командировку или по личным делам?",
    "level": "Sätze"
  },
  {
    "de": "Finn fährt bis Berlin mit, dann geht er ans Meer.",
    "lv": "Финн поедет с нами до Берлина, а потом отправится на море.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt das Schiff ab?",
    "lv": "Когда отплывает корабль?",
    "level": "Sätze"
  },
  {
    "de": "In einer halben Stunde.",
    "lv": "Через полчаса.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich noch eine Kabine bekommen?",
    "lv": "Могу ли я ещё получить каюту?",
    "level": "Sätze"
  },
  {
    "de": "Vergiss deinen Pass nicht!",
    "lv": "Не забудь паспорт!",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, den Koffer zu packen.",
    "lv": "Пора собирать чемодан.",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt um halb sieben ab.",
    "lv": "Поезд отправляется в половине седьмого.",
    "level": "Sätze"
  },
  {
    "de": "Hol mir bitte ein Taxi, ich verpasse sonst den Zug!",
    "lv": "Вызови мне, пожалуйста, такси, а то я опоздаю на поезд!",
    "level": "Sätze"
  },
  {
    "de": "Fahr bitte zum Bahnhof!",
    "lv": "Отвези меня, пожалуйста, на вокзал!",
    "level": "Sätze"
  },
  {
    "de": "Ich muss mich beeilen.",
    "lv": "Мне нужно торопиться.",
    "level": "Sätze"
  },
  {
    "de": "Ist der Schalter schon offen?",
    "lv": "Касса уже открыта?",
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
    "lv": "Поезд вот-вот отправится.",
    "level": "Sätze"
  },
  {
    "de": "Muss ich in Koblenz umsteigen?",
    "lv": "Мне нужно делать пересадку в Кобленце?",
    "level": "Sätze"
  },
  {
    "de": "Ja, dort musst du umsteigen.",
    "lv": "Да, там тебе нужно сделать пересадку.",
    "level": "Sätze"
  },
  {
    "de": "Ist dieser Platz frei?",
    "lv": "Это место свободно?",
    "level": "Sätze"
  },
  {
    "de": "Nein, hier sitzt niemand.",
    "lv": "Нет, здесь никто не сидит.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der Bahnsteigkartenautomat?",
    "lv": "Где автомат по продаже перронных билетов?",
    "level": "Sätze"
  },
  {
    "de": "Stell mein Handgepäck ins Gepäcknetz.",
    "lv": "Положи мою ручную кладь на багажную полку.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das Fenster aufmachen?",
    "lv": "Можно мне открыть окно?",
    "level": "Sätze"
  },
  {
    "de": "Es zieht, schließ bitte das Fenster!",
    "lv": "Сквозит, закрой, пожалуйста, окно!",
    "level": "Sätze"
  },
  {
    "de": "Welche ist die nächste Station?",
    "lv": "Какая следующая станция?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange hält der Zug?",
    "lv": "Сколько времени стоит поезд?",
    "level": "Sätze"
  },
  {
    "de": "Wo muss ich umsteigen?",
    "lv": "Где мне нужно делать пересадку?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug hat Verspätung.",
    "lv": "Поезд опаздывает.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Wagen ist für Nichtraucher.",
    "lv": "Этот вагон для некурящих.",
    "level": "Sätze"
  },
  {
    "de": "Wir fahren jetzt über die Grenze.",
    "lv": "Сейчас мы пересекаем границу.",
    "level": "Sätze"
  },
  {
    "de": "Hast du etwas zu verzollen?",
    "lv": "Тебе есть что декларировать?",
    "level": "Sätze"
  },
  {
    "de": "Wir sind in Berlin angekommen.",
    "lv": "Мы приехали в Берлин.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir ein gutes Hotel empfehlen?",
    "lv": "Ты можешь посоветовать мне хорошую гостиницу?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie freie Zimmer?",
    "lv": "У вас есть свободные номера?",
    "level": "Sätze"
  },
  {
    "de": "Ein Zimmer mit zwei Betten, bitte.",
    "lv": "Номер с двумя кроватями, пожалуйста.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Zimmer pro Nacht?",
    "lv": "Сколько стоит номер за ночь?",
    "level": "Sätze"
  },
  {
    "de": "Morgen reise ich ab. Weck mich um sieben Uhr!",
    "lv": "Завтра я уезжаю. Разбуди меня в семь часов!",
    "level": "Sätze"
  },
  {
    "de": "Die Rechnung, bitte!",
    "lv": "Счёт, пожалуйста!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Stadtbibliothek?",
    "lv": "Где городская библиотека?",
    "level": "Sätze"
  },
  {
    "de": "Wann hat das Museum geöffnet?",
    "lv": "Когда открыт музей?",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir ins Museum gehen?",
    "lv": "Пойдём в музей?",
    "level": "Sätze"
  },
  {
    "de": "Fahren wir mit dem Bus oder der U-Bahn?",
    "lv": "Мы поедем на автобусе или на метро?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die nächste Bushaltestelle?",
    "lv": "Где ближайшая автобусная остановка?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe großen Hunger.",
    "lv": "Я очень голоден.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir zusammen essen?",
    "lv": "Пойдём вместе поесть?",
    "level": "Sätze"
  },
  {
    "de": "Kellner, die Speisekarte, bitte!",
    "lv": "Официант, меню, пожалуйста!",
    "level": "Sätze"
  },
  {
    "de": "Ist der Fisch frisch?",
    "lv": "Рыба свежая?",
    "level": "Sätze"
  },
  {
    "de": "Das schmeckt ausgezeichnet!",
    "lv": "Это очень вкусно!",
    "level": "Sätze"
  },
  {
    "de": "Kellner, zahlen bitte!",
    "lv": "Официант, счёт, пожалуйста!",
    "level": "Sätze"
  },
  {
    "de": "Ich gehe ins Café einen Kaffee trinken.",
    "lv": "Я иду в кафе выпить кофе.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mitkommen?",
    "lv": "Хочешь пойти со мной?",
    "level": "Sätze"
  },
  {
    "de": "Eine Tasse Kaffee mit Milch, bitte!",
    "lv": "Чашку кофе с молоком, пожалуйста!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneller, ich habe es eilig!",
    "lv": "Быстрее, пожалуйста, я тороплюсь!",
    "level": "Sätze"
  },
  {
    "de": "Lass deinen Kaffee nicht kalt werden!",
    "lv": "Не дай кофе остыть!",
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
    "lv": "Мне нужно сейчас же ему написать.",
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
    "lv": "Напомни мне завтра написать!",
    "level": "Sätze"
  },
  {
    "de": "Werfen Sie bitte diesen Brief in den Briefkasten.",
    "lv": "Опустите, пожалуйста, это письмо в почтовый ящик.",
    "level": "Sätze"
  },
  {
    "de": "Hallo, hier spricht Emma.",
    "lv": "Алло, говорит Эмма.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich dich später anrufen?",
    "lv": "Можно мне позвонить тебе позже?",
    "level": "Sätze"
  },
  {
    "de": "Muss ich lange warten?",
    "lv": "Мне придётся долго ждать?",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneiden Sie mir die Haare.",
    "lv": "Подстригите меня, пожалуйста.",
    "level": "Sätze"
  },
  {
    "de": "Hinten bitte nicht zu kurz.",
    "lv": "Сзади, пожалуйста, не слишком коротко.",
    "level": "Sätze"
  },
  {
    "de": "Wann beginnt die Vorstellung?",
    "lv": "Когда начинается спектакль?",
    "level": "Sätze"
  },
  {
    "de": "Es fängt um halb acht an.",
    "lv": "Он начинается в половине восьмого.",
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
    "lv": "Мы оставим куртки в гардеробе.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schnell, der Vorhang geht gleich auf!",
    "lv": "Быстрее, пожалуйста, занавес вот-вот поднимется!",
    "level": "Sätze"
  },
  {
    "de": "Der Vorhang fällt.",
    "lv": "Занавес опускается.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dich zum Tanz bitten?",
    "lv": "Можно пригласить тебя на танец?",
    "level": "Sätze"
  },
  {
    "de": "Wann ist eure Hochzeit?",
    "lv": "Когда ваша свадьба?",
    "level": "Sätze"
  },
  {
    "de": "Ich suche eine Wohnung.",
    "lv": "Я ищу квартиру.",
    "level": "Sätze"
  },
  {
    "de": "Ist in diesem Haus eine Wohnung frei?",
    "lv": "В этом доме есть свободная квартира?",
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
    "lv": "Сегодня мы переезжаем.",
    "level": "Sätze"
  },
  {
    "de": "Mia, pack die Sachen bitte in Kisten!",
    "lv": "Мия, сложи, пожалуйста, вещи в коробки!",
    "level": "Sätze"
  },
  {
    "de": "Hast du alles eingepackt?",
    "lv": "Ты всё упаковал?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe mit meinem Freund in Kontakt.",
    "lv": "Я поддерживаю связь со своим другом.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir ins Theater?",
    "lv": "Пойдём в театр?",
    "level": "Sätze"
  },
  {
    "de": "Ist alles eingeladen?",
    "lv": "Всё погружено?",
    "level": "Sätze"
  },
  {
    "de": "Welch schöne Aussicht!",
    "lv": "Какой красивый вид!",
    "level": "Sätze"
  },
  {
    "de": "Nun können wir alles wieder aufräumen.",
    "lv": "Теперь мы можем снова привести всё в порядок.",
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
    "lv": "Ты умеешь плавать?",
    "level": "Sätze"
  },
  {
    "de": "Schwimm nicht zu weit hinaus!",
    "lv": "Не заплывай слишком далеко!",
    "level": "Sätze"
  },
  {
    "de": "Badest du jeden Tag?",
    "lv": "Ты купаешься каждый день?",
    "level": "Sätze"
  },
  {
    "de": "Bei schönem Wetter gehe ich angeln.",
    "lv": "В хорошую погоду я хожу ловить рыбу.",
    "level": "Sätze"
  },
  {
    "de": "Wie sieht er aus?",
    "lv": "Как он выглядит?",
    "level": "Sätze"
  },
  {
    "de": "Er hat sich aber recht verändert.",
    "lv": "Он и правда сильно изменился.",
    "level": "Sätze"
  },
  {
    "de": "Wie ist er als Mensch?",
    "lv": "Какой он человек?",
    "level": "Sätze"
  },
  {
    "de": "Er ist immer nett und freundlich.",
    "lv": "Он всегда милый и приветливый.",
    "level": "Sätze"
  },
  {
    "de": "Ich fühle mich nicht wohl.",
    "lv": "Я плохо себя чувствую.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe starke Kopfschmerzen.",
    "lv": "У меня сильно болит голова.",
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
    "lv": "Мне нужно сходить к врачу.",
    "level": "Sätze"
  },
  {
    "de": "Leg dich ins Bett!",
    "lv": "Ложись в постель!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Fieber?",
    "lv": "У тебя температура?",
    "level": "Sätze"
  },
  {
    "de": "Gestern hatte ich erhöhte Temperatur.",
    "lv": "Вчера у меня была повышенная температура.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Zahnschmerzen.",
    "lv": "У меня болит зуб.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Zahnarzt gehen.",
    "lv": "Мне нужно сходить к зубному врачу.",
    "level": "Sätze"
  },
  {
    "de": "Weißt du, dass Finn krank ist?",
    "lv": "Ты знаешь, что Финн болен?",
    "level": "Sätze"
  },
  {
    "de": "Laut Arzt wird er bald wieder gesund.",
    "lv": "По словам врача, он скоро поправится.",
    "level": "Sätze"
  },
  {
    "de": "Ich will meine Wohnung neu möblieren.",
    "lv": "Я хочу заново обставить свою квартиру.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das auf Raten kaufen?",
    "lv": "Можно купить это в рассрочку?",
    "level": "Sätze"
  },
  {
    "de": "Bleib im Bett, bis es dir besser geht!",
    "lv": "Лежи в постели, пока тебе не станет лучше!",
    "level": "Sätze"
  },
  {
    "de": "Noah hat in zwei Wochen schwimmen gelernt.",
    "lv": "Ноа научился плавать за две недели.",
    "level": "Sätze"
  },
  {
    "de": "Sei mit dem Essen noch vorsichtig.",
    "lv": "С едой пока ещё будь осторожен.",
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
    "lv": "Ты говоришь довольно бегло.",
    "level": "Sätze"
  },
  {
    "de": "Wo hast du Deutsch gelernt?",
    "lv": "Где ты учил немецкий?",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme seit einem Jahr Deutschstunden.",
    "lv": "Я уже год беру уроки немецкого языка.",
    "level": "Sätze"
  },
  {
    "de": "Ich suche immer Gelegenheit, Deutsch zu sprechen.",
    "lv": "Я всегда ищу возможность поговорить по-немецки.",
    "level": "Sätze"
  },
  {
    "de": "Ist das Buch noch vorrätig?",
    "lv": "Эта книга ещё есть в наличии?",
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
    "lv": "Чем я могу вам помочь?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie ganz frische Eier?",
    "lv": "У вас есть совсем свежие яйца?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die?",
    "lv": "Сколько они стоят?",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu teuer.",
    "lv": "Это слишком дорого.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir ein halbes Kilo abwiegen?",
    "lv": "Не могли бы вы взвесить мне полкило?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel muss ich zahlen?",
    "lv": "Сколько я должен заплатить?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet das Kilo?",
    "lv": "Сколько стоит килограмм?",
    "level": "Sätze"
  },
  {
    "de": "Wiegen Sie mir bitte zwei Kilo ab.",
    "lv": "Взвесьте мне, пожалуйста, два килограмма.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch Karotten?",
    "lv": "Морковь у вас тоже есть?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie gutes Rindfleisch?",
    "lv": "У вас есть хорошая говядина?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir zwei Kilo Hackfleisch.",
    "lv": "Дайте мне два килограмма фарша.",
    "level": "Sätze"
  },
  {
    "de": "Ein Laib Brot, bitte, aber nicht zu knusprig.",
    "lv": "Буханку хлеба, пожалуйста, но не слишком хрустящую.",
    "level": "Sätze"
  },
  {
    "de": "Das Brot ist frisch gebacken.",
    "lv": "Хлеб свежеиспечённый.",
    "level": "Sätze"
  },
  {
    "de": "Was für Obst haben Sie heute?",
    "lv": "Какие фрукты у вас сегодня есть?",
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
    "lv": "Вы можете доставить мне всё на дом?",
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
    "lv": "Спасибо, на этот раз не нужно.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet dieser Teppich?",
    "lv": "Сколько стоит этот ковёр?",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Möbel in meine Wohnung liefern?",
    "lv": "Вы можете доставить мебель ко мне в квартиру?",
    "level": "Sätze"
  },
  {
    "de": "Bitte an der Kasse zahlen.",
    "lv": "Просьба оплачивать покупки на кассе.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, machen Sie die Rechnung.",
    "lv": "Выпишите, пожалуйста, счёт.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Meter?",
    "lv": "Сколько стоит метр?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Stoff gefällt mir.",
    "lv": "Мне нравится эта ткань.",
    "level": "Sätze"
  },
  {
    "de": "Schneiden Sie mir bitte drei Meter ab.",
    "lv": "Отрежьте мне, пожалуйста, три метра.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch andere Muster?",
    "lv": "У вас есть и другие образцы?",
    "level": "Sätze"
  },
  {
    "de": "Diese Farbe gefällt mir nicht.",
    "lv": "Мне не нравится этот цвет.",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir eine hellere.",
    "lv": "Дайте мне посветлее.",
    "level": "Sätze"
  },
  {
    "de": "Was kosten diese Socken?",
    "lv": "Сколько стоят эти носки?",
    "level": "Sätze"
  },
  {
    "de": "Welche Handschuhe wünschen Sie?",
    "lv": "Какие перчатки вы желаете?",
    "level": "Sätze"
  },
  {
    "de": "Die sind mir etwas zu eng.",
    "lv": "Они мне немного тесны.",
    "level": "Sätze"
  },
  {
    "de": "So, nun passen sie gut.",
    "lv": "Так, теперь они хорошо сидят.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir einen guten Schneider empfehlen?",
    "lv": "Ты можешь посоветовать мне хорошего портного?",
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
    "lv": "Костюм хорошо сидит.",
    "level": "Sätze"
  },
  {
    "de": "Die Hose ist zu lang.",
    "lv": "Брюки слишком длинные.",
    "level": "Sätze"
  },
  {
    "de": "Bitte reinigen und bügeln Sie ihn!",
    "lv": "Пожалуйста, почистите и погладьте его!",
    "level": "Sätze"
  },
  {
    "de": "Wann wird das Kleid fertig sein?",
    "lv": "Когда будет готово платье?",
    "level": "Sätze"
  },
  {
    "de": "Die Schuhe sind zu eng.",
    "lv": "Туфли слишком тесные.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Schuhe heute reparieren?",
    "lv": "Вы можете починить туфли сегодня?",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich die Schuhe abholen?",
    "lv": "Когда я могу забрать туфли?",
    "level": "Sätze"
  },
  {
    "de": "Meine Armbanduhr funktioniert nicht.",
    "lv": "Мои наручные часы не работают.",
    "level": "Sätze"
  },
  {
    "de": "Sie geht fünf Minuten vor.",
    "lv": "Они спешат на пять минут.",
    "level": "Sätze"
  },
  {
    "de": "Bist du kurzsichtig oder weitsichtig?",
    "lv": "Ты близорукий или дальнозоркий?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte eine Brille kaufen.",
    "lv": "Я хотел бы купить очки.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie meine Brille reparieren?",
    "lv": "Вы можете починить мои очки?",
    "level": "Sätze"
  },
  {
    "de": "Das dauert nur eine Viertelstunde.",
    "lv": "Это займёт всего четверть часа.",
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
    "lv": "Пожалуйста, упакуйте это и пришлите мне домой.",
    "level": "Sätze"
  },
  {
    "de": "Wir haben feste Preise.",
    "lv": "У нас твёрдые цены.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, fotografieren Sie mich.",
    "lv": "Пожалуйста, сфотографируйте меня.",
    "level": "Sätze"
  },
  {
    "de": "Setzen Sie sich, schauen Sie gerade in die Kamera und bewegen Sie sich nicht!",
    "lv": "Садитесь, смотрите прямо в камеру и не двигайтесь!",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich das Probebild sehen?",
    "lv": "Когда я смогу посмотреть пробный снимок?",
    "level": "Sätze"
  },
  {
    "de": "Wann sind die Fotos fertig?",
    "lv": "Когда будут готовы фотографии?",
    "level": "Sätze"
  },
  {
    "de": "Die Aufnahme ist gelungen.",
    "lv": "Снимок удался.",
    "level": "Sätze"
  },
  {
    "de": "Die Fotos sind gut geworden.",
    "lv": "Фотографии хорошо получились.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie das Foto auch vergrößern?",
    "lv": "Вы можете также увеличить фотографию?",
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
    "lv": "Покажите мне, пожалуйста, обручальные кольца.",
    "level": "Sätze"
  },
  {
    "de": "Der Ring ist mir etwas zu weit.",
    "lv": "Кольцо мне немного велико.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann ihn enger machen.",
    "lv": "Я могу его уменьшить.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Ring passt mir.",
    "lv": "Это кольцо мне впору.",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir schöne Geschenkideen.",
    "lv": "Покажите мне что-нибудь красивое для подарка.",
    "level": "Sätze"
  },
  {
    "de": "Wie gefallen dir diese Ohrringe?",
    "lv": "Как тебе эти серьги?",
    "level": "Sätze"
  },
  {
    "de": "Diese Brosche ist wirklich schön.",
    "lv": "Эта брошь действительно красивая.",
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
    "lv": "Этот браслет я могу вам особенно порекомендовать.",
    "level": "Sätze"
  },
  {
    "de": "Es ist besonders schön gearbeitet.",
    "lv": "Он выполнен особенно искусно.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist nicht hoch.",
    "lv": "Цена невысокая.",
    "level": "Sätze"
  },
  {
    "de": "Bekomme ich die Schachtel gratis?",
    "lv": "Коробку я получу бесплатно?",
    "level": "Sätze"
  },
  {
    "de": "Alle Schmuckstücke sind gestempelt.",
    "lv": "На всех украшениях стоит проба.",
    "level": "Sätze"
  },
  {
    "de": "Falls es meiner Frau nicht gefällt, kann ich es umtauschen?",
    "lv": "Если моей жене не понравится, я смогу это обменять?",
    "level": "Sätze"
  },
  {
    "de": "Natürlich, jederzeit.",
    "lv": "Конечно, в любое время.",
    "level": "Sätze"
  }
];

window.SENTENCE_ENTRIES = SENTENCE_ENTRIES;

const SENTENCE_ENTRIES = [
  {
    "de": "Hüte dich davor!",
    "lv": "Стережіться цього!",
    "level": "Sätze"
  },
  {
    "de": "Wenn nichts dazwischenkommt.",
    "lv": "Якщо нічого не заважає. • Якщо все піде за планом.",
    "level": "Sätze"
  },
  {
    "de": "Das kann ich mir denken!",
    "lv": "я це знаю!",
    "level": "Sätze"
  },
  {
    "de": "Ist er denn krank?",
    "lv": "Він тоді хворий?",
    "level": "Sätze"
  },
  {
    "de": "Was denn?",
    "lv": "що тоді?",
    "level": "Sätze"
  },
  {
    "de": "Desto mehr.",
    "lv": "Чим більше.",
    "level": "Sätze"
  },
  {
    "de": "Je mehr, desto besser.",
    "lv": "Чим більше, тим краще.",
    "level": "Sätze"
  },
  {
    "de": "Alles deutet auf Regen.",
    "lv": "Все вказує на справу.",
    "level": "Sätze"
  },
  {
    "de": "Damit ist mir wenig gedient.",
    "lv": "Для мене це мало сенсу.",
    "level": "Sätze"
  },
  {
    "de": "Er ist dienstlich verhindert.",
    "lv": "Він не може прийти через роботу.",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie doch!",
    "lv": "Говоріть!",
    "level": "Sätze"
  },
  {
    "de": "Es donnert.",
    "lv": "Грім гримить.",
    "level": "Sätze"
  },
  {
    "de": "Doppelt so groß.",
    "lv": "Вдвічі більший.",
    "level": "Sätze"
  },
  {
    "de": "Von dort.",
    "lv": "Звідти.",
    "level": "Sätze"
  },
  {
    "de": "Die Zeit drängt.",
    "lv": "Час йде.",
    "level": "Sätze"
  },
  {
    "de": "Ihn drücken Sorgen.",
    "lv": "Його охоплює хвилювання.",
    "level": "Sätze"
  },
  {
    "de": "Hast du das Buch durchgearbeitet?",
    "lv": "Ви уважно прочитали книгу?",
    "level": "Sätze"
  },
  {
    "de": "Kein Durchgang!",
    "lv": "Не проходь! • Вихід закрито!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich Sie bitten?",
    "lv": "можу я вас запитати",
    "level": "Sätze"
  },
  {
    "de": "Ich bin durstig.",
    "lv": "я відчуваю спрагу",
    "level": "Sätze"
  },
  {
    "de": "Eben das meine ich.",
    "lv": "Це саме те, що я маю на увазі.",
    "level": "Sätze"
  },
  {
    "de": "Es ist ganz egal.",
    "lv": "Це взагалі неважливо.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie eigentlich?",
    "lv": "Чого ти насправді хочеш?",
    "level": "Sätze"
  },
  {
    "de": "Eilt es mit dieser Sache?",
    "lv": "Ця справа термінова?",
    "level": "Sätze"
  },
  {
    "de": "Eilt sehr!",
    "lv": "Дуже терміново!",
    "level": "Sätze"
  },
  {
    "de": "Ich habe es eilig.",
    "lv": "Я поспішаю.",
    "level": "Sätze"
  },
  {
    "de": "Du bildest dir nur ein, krank zu sein.",
    "lv": "Ви просто уявіть, що ви хворі.",
    "level": "Sätze"
  },
  {
    "de": "Was fällt dir ein?",
    "lv": "Що вам спадає на думку?",
    "level": "Sätze"
  },
  {
    "de": "Es war einmal.",
    "lv": "Колись було.",
    "level": "Sätze"
  },
  {
    "de": "Steigen Sie bitte ein!",
    "lv": "Будь ласка, зайдіть!",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie ein!",
    "lv": "Будь ласка, заходьте!",
    "level": "Sätze"
  },
  {
    "de": "Einzelnes hat mir dort gefallen.",
    "lv": "Деякі речі мені там сподобалися.",
    "level": "Sätze"
  },
  {
    "de": "Es empfiehlt sich.",
    "lv": "Рекомендується.",
    "level": "Sätze"
  },
  {
    "de": "Diese Flasche enthält Essig.",
    "lv": "Ця пляшка містить оцет.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldigen Sie bitte!",
    "lv": "Вибачте, будь ласка!",
    "level": "Sätze"
  },
  {
    "de": "Entweder... oder...",
    "lv": "Або... або...",
    "level": "Sätze"
  },
  {
    "de": "Wer war der Erste?",
    "lv": "Хто був першим?",
    "level": "Sätze"
  },
  {
    "de": "Wer fehlt heute?",
    "lv": "Хто сьогодні не прийшов?",
    "level": "Sätze"
  },
  {
    "de": "Was fehlt dir?",
    "lv": "Що з тобою не так?",
    "level": "Sätze"
  },
  {
    "de": "Wie heißen Sie?",
    "lv": "як тебе звуть",
    "level": "Sätze"
  },
  {
    "de": "Was soll das heißen?",
    "lv": "Що це означає?",
    "level": "Sätze"
  },
  {
    "de": "Bitte treten Sie näher heran!",
    "lv": "Будь ласка, підійди ближче!",
    "level": "Sätze"
  },
  {
    "de": "Heraus mit der Sprache!",
    "lv": "говорити! • Історії!",
    "level": "Sätze"
  },
  {
    "de": "im Herbst",
    "lv": "восени",
    "level": "Sätze"
  },
  {
    "de": "Meine Herrschaften!",
    "lv": "Пані та панове!",
    "level": "Sätze"
  },
  {
    "de": "von heute an",
    "lv": "починаючи з сьогоднішнього дня",
    "level": "Sätze"
  },
  {
    "de": "heute früh",
    "lv": "цього ранку",
    "level": "Sätze"
  },
  {
    "de": "heute Nacht",
    "lv": "минулої ночі",
    "level": "Sätze"
  },
  {
    "de": "Zu Hilfe!",
    "lv": "Допоможіть!",
    "level": "Sätze"
  },
  {
    "de": "Ich lerne jeden Tag Deutsch.",
    "lv": "Я вивчаю німецьку щодня.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das bitte wiederholen?",
    "lv": "Ви можете повторити це, будь ласка?",
    "level": "Sätze"
  },
  {
    "de": "Wir treffen uns am Bahnhof.",
    "lv": "Зустрічаємося на вокзалі.",
    "level": "Sätze"
  },
  {
    "de": "Ich stimme dir teilweise zu.",
    "lv": "Частково погоджуюсь з вами.",
    "level": "Sätze"
  },
  {
    "de": "Diese Entscheidung hat weitreichende Folgen.",
    "lv": "Це рішення має далекосяжні наслідки.",
    "level": "Sätze"
  },
  {
    "de": "Man sollte mehrere Perspektiven berücksichtigen.",
    "lv": "Слід розглянути кілька точок зору.",
    "level": "Sätze"
  },
  {
    "de": "Könnten Sie das näher erläutern?",
    "lv": "Не могли б ви пояснити це більш детально?",
    "level": "Sätze"
  },
  {
    "de": "Was mich anbelangt,...",
    "lv": "Щодо мене...",
    "level": "Sätze"
  },
  {
    "de": "Wie alt sind Sie?",
    "lv": "скільки тобі років",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zwanzig Jahre alt.",
    "lv": "Мені двадцять років.",
    "level": "Sätze"
  },
  {
    "de": "Von heute an.",
    "lv": "З сьогоднішнього дня.",
    "level": "Sätze"
  },
  {
    "de": "Von jetzt an.",
    "lv": "Відтепер.",
    "level": "Sätze"
  },
  {
    "de": "Anders geht es nicht.",
    "lv": "Іншого шляху немає.",
    "level": "Sätze"
  },
  {
    "de": "Rufen Sie mich an.",
    "lv": "подзвони мені",
    "level": "Sätze"
  },
  {
    "de": "Bitte stellen Sie das Radio ab.",
    "lv": "Будь ласка, вимкніть radio.",
    "level": "Sätze"
  },
  {
    "de": "Achte bitte auf den Verkehr.",
    "lv": "Будь ласка, зверніть увагу на трафік.",
    "level": "Sätze"
  },
  {
    "de": "Darauf musst du achten.",
    "lv": "Ви повинні звернути на це увагу.",
    "level": "Sätze"
  },
  {
    "de": "Heute mache ich es anders.",
    "lv": "Сьогодні я зроблю це інакше.",
    "level": "Sätze"
  },
  {
    "de": "Wir warten auf den Bus.",
    "lv": "Чекаємо на автобус.",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt allein.",
    "lv": "Він живе один.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Ausbildung absolviert.",
    "lv": "Я закінчив навчання. • Я закінчив навчання.",
    "level": "Sätze"
  },
  {
    "de": "Ich warte den Regen ab.",
    "lv": "Я почекаю, поки закінчиться дощ.",
    "level": "Sätze"
  },
  {
    "de": "Er arbeitet in der Verkaufsabteilung.",
    "lv": "Працює у відділі продажів.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin allergisch gegen Katzen.",
    "lv": "У мене алергія на котів.",
    "level": "Sätze"
  },
  {
    "de": "Andererseits verstehe ich ihn.",
    "lv": "З іншого боку, я його розумію.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Situation analysiert.",
    "lv": "Я проаналізував ситуацію.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat meinen Vorschlag akzeptiert.",
    "lv": "Вона прийняла мою пропозицію.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte das genauer analysieren.",
    "lv": "Хочу детальніше проаналізувати.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte den Vertrag ändern.",
    "lv": "Я хочу змінити договір.",
    "level": "Sätze"
  },
  {
    "de": "Er ändert ständig seine Meinung.",
    "lv": "Він постійно змінює свою думку.",
    "level": "Sätze"
  },
  {
    "de": "Ähnliche Probleme hatten wir schon früher.",
    "lv": "У нас раніше були подібні проблеми.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ahnung!",
    "lv": "Не знаю!",
    "level": "Sätze"
  },
  {
    "de": "Hör auf zu jammern.",
    "lv": "Припиніть скаржитися.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Kleid ist akademisch gekleidet.",
    "lv": "Ця сукня стильно консервативна.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre gerne Akkordeonmusik.",
    "lv": "Я люблю слухати музику під акордеон.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das Gerät anklicken?",
    "lv": "Чи можете ви натиснути на пристрій?",
    "level": "Sätze"
  },
  {
    "de": "Bitte öffne die Datei und klicke darauf.",
    "lv": "Будь ласка, відкрийте файл і натисніть на нього.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe einen Unfall gehabt.",
    "lv": "Я потрапив в аварію.",
    "level": "Sätze"
  },
  {
    "de": "Wir laufen zum Bahnhof.",
    "lv": "Йдемо на вокзал.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schalte den Fernseher an.",
    "lv": "Будь ласка, увімкніть телевізор.",
    "level": "Sätze"
  },
  {
    "de": "Mein Computer ist abgestürzt.",
    "lv": "Мій комп'ютер зламався.",
    "level": "Sätze"
  },
  {
    "de": "Am Wochenende gehe ich angeln.",
    "lv": "На вихідних поїду рибалити.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe den Anruf verpasst.",
    "lv": "Я пропустив дзвінок.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mich später anrufen?",
    "lv": "ти можеш подзвонити мені пізніше?",
    "level": "Sätze"
  },
  {
    "de": "Bitte nimm meinen Vorschlag an.",
    "lv": "Будь ласка, прийміть мою пропозицію.",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme dein Angebot an.",
    "lv": "Я приймаю вашу пропозицію.",
    "level": "Sätze"
  },
  {
    "de": "Er nahm die Einladung an.",
    "lv": "Він прийняв запрошення.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Angst vor Spinnen.",
    "lv": "Я боюся павуків.",
    "level": "Sätze"
  },
  {
    "de": "Keine Angst, alles wird gut.",
    "lv": "Не бійся, все буде добре.",
    "level": "Sätze"
  },
  {
    "de": "Anklang finden.",
    "lv": "Rast відлуння. • Знайдіть чуйність",
    "level": "Sätze"
  },
  {
    "de": "Es kommt darauf an.",
    "lv": "Це залежить від цього.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Anlass.",
    "lv": "Через цей час. • З цього приводу",
    "level": "Sätze"
  },
  {
    "de": "Nehmen wir an, dass...",
    "lv": "Припустимо, що...",
    "level": "Sätze"
  },
  {
    "de": "Was hast du da angerichtet?",
    "lv": "що ти там зробив",
    "level": "Sätze"
  },
  {
    "de": "Bis ans Ende.",
    "lv": "До кінця.",
    "level": "Sätze"
  },
  {
    "de": "Du glaubst mir anscheinend nicht.",
    "lv": "Здається, ти мені не віриш.",
    "level": "Sätze"
  },
  {
    "de": "Meiner Ansicht nach...",
    "lv": "На мій погляд...",
    "level": "Sätze"
  },
  {
    "de": "Stell dich nicht so an!",
    "lv": "Не прикидайся!",
    "level": "Sätze"
  },
  {
    "de": "An die Arbeit gehen.",
    "lv": "Приступайте до роботи.",
    "level": "Sätze"
  },
  {
    "de": "Außer Atem sein.",
    "lv": "Задихатись.",
    "level": "Sätze"
  },
  {
    "de": "Guten Appetit!",
    "lv": "Приємного апетиту!",
    "level": "Sätze"
  },
  {
    "de": "In einem Atemzug.",
    "lv": "На одному подиху.",
    "level": "Sätze"
  },
  {
    "de": "Auf jeden Fall.",
    "lv": "У кожному випадку.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal war alles still.",
    "lv": "Раптом усе затихло.",
    "level": "Sätze"
  },
  {
    "de": "Bitte mach die Tür auf!",
    "lv": "Будь ласка, відчиніть двері!",
    "level": "Sätze"
  },
  {
    "de": "Er hat den Kredit aufgenommen.",
    "lv": "Взяв кредит.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen heute aufräumen.",
    "lv": "Ми повинні сьогодні навести порядок у кімнаті.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre jetzt auf.",
    "lv": "Я зараз зупинюся.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schon auf.",
    "lv": "Він уже встав.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen das Treffen verschieben.",
    "lv": "Ми повинні перенести зустріч.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat mich aufgeregt.",
    "lv": "Вона мене дратувала.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal.",
    "lv": "Раптом.",
    "level": "Sätze"
  },
  {
    "de": "Auf der Stelle.",
    "lv": "Негайно.",
    "level": "Sätze"
  },
  {
    "de": "Für den Schaden aufkommen.",
    "lv": "Покрити збитки.",
    "level": "Sätze"
  },
  {
    "de": "Bitte die Tür auf!",
    "lv": "Відкрийте двері, будь ласка!",
    "level": "Sätze"
  },
  {
    "de": "Aufrecht sitzen.",
    "lv": "Сядьте прямо.",
    "level": "Sätze"
  },
  {
    "de": "Er ist auf.",
    "lv": "Він підвівся.",
    "level": "Sätze"
  },
  {
    "de": "Alle Kräfte aufwenden.",
    "lv": "Віддати всі свої сили.",
    "level": "Sätze"
  },
  {
    "de": "Viel Mühe aufwenden.",
    "lv": "Дуже старайся.",
    "level": "Sätze"
  },
  {
    "de": "Geh mir aus den Augen!",
    "lv": "Не дивись на мене знову!",
    "level": "Sätze"
  },
  {
    "de": "Unter vier Augen.",
    "lv": "Через два. • Тихо",
    "level": "Sätze"
  },
  {
    "de": "Aus Mangel an Zeit.",
    "lv": "Через брак часу.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Grunde.",
    "lv": "З цієї причини.",
    "level": "Sätze"
  },
  {
    "de": "Alle außer dir.",
    "lv": "Всі крім тебе.",
    "level": "Sätze"
  },
  {
    "de": "Auf Äußerlichkeiten Wert legen.",
    "lv": "Надавайте значення зовнішньому вигляду.",
    "level": "Sätze"
  },
  {
    "de": "Im äußersten Fall.",
    "lv": "У гіршому випадку.",
    "level": "Sätze"
  },
  {
    "de": "Äußerst wichtig.",
    "lv": "Надзвичайно важливо.",
    "level": "Sätze"
  },
  {
    "de": "Aussicht auf die See.",
    "lv": "Вид на море.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gute Aussichten.",
    "lv": "У нього хороші шанси.",
    "level": "Sätze"
  },
  {
    "de": "Wie wird dieses Wort ausgesprochen?",
    "lv": "Як вимовляється це слово?",
    "level": "Sätze"
  },
  {
    "de": "Sein Beileid aussprechen.",
    "lv": "Висловити співчуття.",
    "level": "Sätze"
  },
  {
    "de": "Wann wurden die Meisterschaftskämpfe ausgetragen?",
    "lv": "Коли був чемпіонат?",
    "level": "Sätze"
  },
  {
    "de": "Welchen Beruf üben Sie aus?",
    "lv": "яка твоя професія",
    "level": "Sätze"
  },
  {
    "de": "Einfluss ausüben.",
    "lv": "Впливати.",
    "level": "Sätze"
  },
  {
    "de": "Auswärts essen.",
    "lv": "Їсти поза домом.",
    "level": "Sätze"
  },
  {
    "de": "Per Bahn.",
    "lv": "Залізницею.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Bahn.",
    "lv": "Залізницею.",
    "level": "Sätze"
  },
  {
    "de": "Möglichst bald.",
    "lv": "Якнайшвидше.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist Angst und bange.",
    "lv": "Я дуже боюся.",
    "level": "Sätze"
  },
  {
    "de": "Auf die lange Bank schieben.",
    "lv": "Зволікати. • Перетягнути до потрібної довжини • Відкласти на невизначений час",
    "level": "Sätze"
  },
  {
    "de": "Bar zahlen.",
    "lv": "Оплата готівкою.",
    "level": "Sätze"
  },
  {
    "de": "Erz bauen.",
    "lv": "Отримати руду.",
    "level": "Sätze"
  },
  {
    "de": "Mist bauen.",
    "lv": "Стріляти. • Зробити дурницю",
    "level": "Sätze"
  },
  {
    "de": "Ich bin beauftragt.",
    "lv": "Мені призначили роботу.",
    "level": "Sätze"
  },
  {
    "de": "Nach Bedarf.",
    "lv": "Як потрібно.",
    "level": "Sätze"
  },
  {
    "de": "Ich bedauere ihn.",
    "lv": "Мені його шкода.",
    "level": "Sätze"
  },
  {
    "de": "Was bedeutet dieses Wort?",
    "lv": "Що означає це слово?",
    "level": "Sätze"
  },
  {
    "de": "Unter der Bedingung, dass...",
    "lv": "За умови, що...",
    "level": "Sätze"
  },
  {
    "de": "Sie sieht bedrückt aus.",
    "lv": "Вона виглядає пригніченою.",
    "level": "Sätze"
  },
  {
    "de": "Hinweise befolgen.",
    "lv": "Дотримуйтесь інструкцій.",
    "level": "Sätze"
  },
  {
    "de": "Befehle befolgen.",
    "lv": "Виконуйте накази.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Post befördern.",
    "lv": "Відправити поштою.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin begierig zu wissen.",
    "lv": "Я дуже хочу знати.",
    "level": "Sätze"
  },
  {
    "de": "Zu Beginn.",
    "lv": "На початку.",
    "level": "Sätze"
  },
  {
    "de": "Am Beginn.",
    "lv": "На початку.",
    "level": "Sätze"
  },
  {
    "de": "Bei Beginn.",
    "lv": "Запуск",
    "level": "Sätze"
  },
  {
    "de": "In Begleitung.",
    "lv": "У супроводі.",
    "level": "Sätze"
  },
  {
    "de": "Mit seiner Begleitung.",
    "lv": "З супроводом.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schwer von Begriff.",
    "lv": "Він повільно сприймає. • У нього сповільнене мислення",
    "level": "Sätze"
  },
  {
    "de": "Im Gedächtnis behalten.",
    "lv": "Пам'ятайте. • Зберігати в пам'яті",
    "level": "Sätze"
  },
  {
    "de": "Bei Tisch.",
    "lv": "За столом.",
    "level": "Sätze"
  },
  {
    "de": "Bei Sinnen sein.",
    "lv": "Щоб бути здоровим.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tage.",
    "lv": "Протягом дня.",
    "level": "Sätze"
  },
  {
    "de": "Bei weitem nicht so.",
    "lv": "Зовсім ні.",
    "level": "Sätze"
  },
  {
    "de": "Alle beide.",
    "lv": "Обидва.",
    "level": "Sätze"
  },
  {
    "de": "Stürmischer Beifall brach los.",
    "lv": "Пролунали бурхливі оплески.",
    "level": "Sätze"
  },
  {
    "de": "Beifall finden.",
    "lv": "Отримати згоду.",
    "level": "Sätze"
  },
  {
    "de": "Beileid aussprechen.",
    "lv": "Висловити співчуття.",
    "level": "Sätze"
  },
  {
    "de": "Auf eigenen Beinen stehen.",
    "lv": "Бути фінансово незалежним.",
    "level": "Sätze"
  },
  {
    "de": "Zum Beispiel.",
    "lv": "Наприклад.",
    "level": "Sätze"
  },
  {
    "de": "Beistand leisten.",
    "lv": "Щоб допомогти. • Надавати допомогу",
    "level": "Sätze"
  },
  {
    "de": "Beitrag leisten.",
    "lv": "Інвестуйте свою частку.",
    "level": "Sätze"
  },
  {
    "de": "Jemandes Bekanntschaft machen.",
    "lv": "Познайомитися з кимось.",
    "level": "Sätze"
  },
  {
    "de": "Bekanntschaft anknüpfen.",
    "lv": "Познайомтеся. • Встановити контакт",
    "level": "Sätze"
  },
  {
    "de": "Belegte Brötchen.",
    "lv": "Бутерброди з начинкою.",
    "level": "Sätze"
  },
  {
    "de": "Nach Ihrem Belieben.",
    "lv": "Як хочеш.",
    "level": "Sätze"
  },
  {
    "de": "Zu jeder beliebigen Zeit.",
    "lv": "У будь-який час.",
    "level": "Sätze"
  },
  {
    "de": "Schweigen beobachten.",
    "lv": "Дотримуватись тиші.",
    "level": "Sätze"
  },
  {
    "de": "Zur Bequemlichkeit.",
    "lv": "Для зручності.",
    "level": "Sätze"
  },
  {
    "de": "Bereit sein.",
    "lv": "Будьте готові. • Будьте спокійні",
    "level": "Sätze"
  },
  {
    "de": "Unfallopfer bergen.",
    "lv": "Порятунок потерпілих у разі аварії.",
    "level": "Sätze"
  },
  {
    "de": "Bericht erstatten.",
    "lv": "звіт. • Надати звіт • Надати огляд",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind besetzt.",
    "lv": "Усі місця зайняті.",
    "level": "Sätze"
  },
  {
    "de": "Neue Besen kehren gut.",
    "lv": "Новий віник добре мете.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt ein Haus.",
    "lv": "У нього є будинок.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt viel Mut.",
    "lv": "Він має велику мужність.",
    "level": "Sätze"
  },
  {
    "de": "Desto besser.",
    "lv": "Тим краще.",
    "level": "Sätze"
  },
  {
    "de": "Gute Besserung!",
    "lv": "одужуйте! • Одужуй!",
    "level": "Sätze"
  },
  {
    "de": "Beim besten Willen.",
    "lv": "Що хочеш.",
    "level": "Sätze"
  },
  {
    "de": "Am besten.",
    "lv": "найкращий.",
    "level": "Sätze"
  },
  {
    "de": "Es besteht Zweifel.",
    "lv": "Є сумніви.",
    "level": "Sätze"
  },
  {
    "de": "Seine Aufgabe besteht darin...",
    "lv": "Його завдання...",
    "level": "Sätze"
  },
  {
    "de": "Grüße bestellen.",
    "lv": "передай привіт",
    "level": "Sätze"
  },
  {
    "de": "Ganz bestimmt.",
    "lv": "Однозначно. • Повністю безпечний",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch kommen.",
    "lv": "Приходьте в гості.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch sein.",
    "lv": "Відвідати. • Відвідати",
    "level": "Sätze"
  },
  {
    "de": "Oft Konzerte besuchen.",
    "lv": "Часто ходять на концерти.",
    "level": "Sätze"
  },
  {
    "de": "Welche Schule hat er besucht?",
    "lv": "В якій школі він навчався?",
    "level": "Sätze"
  },
  {
    "de": "In Betracht ziehen.",
    "lv": "Візьміть до уваги. • Поміркуйте",
    "level": "Sätze"
  },
  {
    "de": "Außer Betracht lassen.",
    "lv": "Ігнорування. • Не розглядати",
    "level": "Sätze"
  },
  {
    "de": "Er betreibt ein Hotel.",
    "lv": "Він керує готелем.",
    "level": "Sätze"
  },
  {
    "de": "Alle beiden.",
    "lv": "Обидва.",
    "level": "Sätze"
  },
  {
    "de": "Alles bezahlen.",
    "lv": "Оплатіть все.",
    "level": "Sätze"
  },
  {
    "de": "Bezüglich auf etwas.",
    "lv": "Щодо чогось.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön.",
    "lv": "Будь ласка",
    "level": "Sätze"
  },
  {
    "de": "Wie bitte?",
    "lv": "як будь ласка",
    "level": "Sätze"
  },
  {
    "de": "Bitte sehr.",
    "lv": "Будь ласка",
    "level": "Sätze"
  },
  {
    "de": "Ich habe eine Bitte an Sie.",
    "lv": "У мене до вас прохання.",
    "level": "Sätze"
  },
  {
    "de": "Trompete blasen.",
    "lv": "Затрубити.",
    "level": "Sätze"
  },
  {
    "de": "In einem Buch blättern.",
    "lv": "Розсортуйте книгу.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßen Füßen.",
    "lv": "Босі ноги.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßem Auge.",
    "lv": "Неозброєним оком.",
    "level": "Sätze"
  },
  {
    "de": "Danke für die Blumen!",
    "lv": "Дякую за квіти!",
    "level": "Sätze"
  },
  {
    "de": "Alles in Butter.",
    "lv": "все добре.",
    "level": "Sätze"
  },
  {
    "de": "Bitte checken.",
    "lv": "Перевірте. • Перевірити",
    "level": "Sätze"
  },
  {
    "de": "Da ist er!",
    "lv": "Ось він!",
    "level": "Sätze"
  },
  {
    "de": "Alles spricht dafür.",
    "lv": "Все добре говорить.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann nichts dafür.",
    "lv": "Я нічого не можу там зробити.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin dagegen.",
    "lv": "Я проти цього.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe nichts dagegen.",
    "lv": "Я не заперечую проти цього.",
    "level": "Sätze"
  },
  {
    "de": "Von daheim.",
    "lv": "З дому.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Dame ziehen.",
    "lv": "Зробіть жіночий хід.",
    "level": "Sätze"
  },
  {
    "de": "Es dämmert.",
    "lv": "Почало темніти. • Світає.",
    "level": "Sätze"
  },
  {
    "de": "Danke schön!",
    "lv": "дякую! • Дякую!",
    "level": "Sätze"
  },
  {
    "de": "Dann und wann.",
    "lv": "Час від часу.",
    "level": "Sätze"
  },
  {
    "de": "Darauf kannst du dich verlassen.",
    "lv": "Ви можете на це розраховувати.",
    "level": "Sätze"
  },
  {
    "de": "Daraus wird nichts.",
    "lv": "Нічого з цього не вийде.",
    "level": "Sätze"
  },
  {
    "de": "So dass...",
    "lv": "Так що...",
    "level": "Sätze"
  },
  {
    "de": "Für wen halten Sie mich?",
    "lv": "Як ти мене вважаєш?",
    "level": "Sätze"
  },
  {
    "de": "Hände weg!",
    "lv": "Руки геть!",
    "level": "Sätze"
  },
  {
    "de": "Lass den Kopf nicht hängen!",
    "lv": "Не опускай голови!",
    "level": "Sätze"
  },
  {
    "de": "zu Hause",
    "lv": "вдома",
    "level": "Sätze"
  },
  {
    "de": "nach Hause gehen",
    "lv": "йти додому",
    "level": "Sätze"
  },
  {
    "de": "von Haus aus",
    "lv": "з дитинства • з самого початку",
    "level": "Sätze"
  },
  {
    "de": "Meinen herzlichsten Glückwunsch!",
    "lv": "Щиро вітаю!",
    "level": "Sätze"
  },
  {
    "de": "Seien Sie so gut!",
    "lv": "Будьте такими добрими! • Будь таким добрим!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie die Güte!",
    "lv": "Будьте такими добрими!",
    "level": "Sätze"
  },
  {
    "de": "Was hast du?",
    "lv": "Що з тобою не так? • Що сталося?",
    "level": "Sätze"
  },
  {
    "de": "Gestatten Sie bitte!",
    "lv": "Дозвольте, будь ласка!",
    "level": "Sätze"
  },
  {
    "de": "Ist es gestattet zu rauchen?",
    "lv": "Чи можна курити?",
    "level": "Sätze"
  },
  {
    "de": "Ich muss gestehen, dass...",
    "lv": "Я повинен визнати, що...",
    "level": "Sätze"
  },
  {
    "de": "gestern früh",
    "lv": "вчора рано вранці",
    "level": "Sätze"
  },
  {
    "de": "gestern Abend",
    "lv": "минулої ночі",
    "level": "Sätze"
  },
  {
    "de": "Es ist mir gleichgültig, ob...",
    "lv": "Мені байдуже, якщо...",
    "level": "Sätze"
  },
  {
    "de": "Was ist geschehen?",
    "lv": "що сталося",
    "level": "Sätze"
  },
  {
    "de": "Mach keine Geschichten!",
    "lv": "Не роби дурниць! • Не жартуйте!",
    "level": "Sätze"
  },
  {
    "de": "Geschweige denn...",
    "lv": "Не кажучи вже про це. • Де ще",
    "level": "Sätze"
  },
  {
    "de": "Gehen Sie geradeaus!",
    "lv": "Прямо вперед!",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es Ihnen?",
    "lv": "як справи • Як справи?",
    "level": "Sätze"
  },
  {
    "de": "Frag ihn gelegentlich, ob...",
    "lv": "Запитайте його, чи вийде він, якщо...",
    "level": "Sätze"
  },
  {
    "de": "morgen früh",
    "lv": "завтра вранці",
    "level": "Sätze"
  },
  {
    "de": "im Frühling",
    "lv": "навесні",
    "level": "Sätze"
  },
  {
    "de": "Was gibt’s Neues?",
    "lv": "що нового",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Brief folgt, dass...",
    "lv": "З цього листа випливає, що...",
    "level": "Sätze"
  },
  {
    "de": "Fahre fort!",
    "lv": "Так тримати!",
    "level": "Sätze"
  },
  {
    "de": "Er ist kein Freund von...",
    "lv": "Він не любить...",
    "level": "Sätze"
  },
  {
    "de": "Es erwies sich, dass...",
    "lv": "Виявилося, що...",
    "level": "Sätze"
  },
  {
    "de": "Gedenkst du meiner?",
    "lv": "Ви пам'ятай мене? • Ти думав про мене?",
    "level": "Sätze"
  },
  {
    "de": "im Winter",
    "lv": "взимку",
    "level": "Sätze"
  },
  {
    "de": "Welcher Jahrgang sind Sie?",
    "lv": "в якому році ви народилися?",
    "level": "Sätze"
  },
  {
    "de": "Es jammert mich zu sehen...",
    "lv": "Сумно дивитись...",
    "level": "Sätze"
  },
  {
    "de": "je mehr, desto besser",
    "lv": "чим більше, тим краще",
    "level": "Sätze"
  },
  {
    "de": "bis jetzt",
    "lv": "дотепер",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich zum Bahnhof?",
    "lv": "Як дістатися до вокзалу?",
    "level": "Sätze"
  },
  {
    "de": "Komm her!",
    "lv": "Іди сюди!",
    "level": "Sätze"
  },
  {
    "de": "Könnte ich Frau N. sprechen?",
    "lv": "Чи можу я поговорити з N. мадам?",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das?",
    "lv": "Скільки це коштує?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange dauert die Vorstellung?",
    "lv": "Скільки триватиме вистава?",
    "level": "Sätze"
  },
  {
    "de": "Lass das!",
    "lv": "Припиніть це! • Киньте це!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich in Ruhe!",
    "lv": "Залиште мене!",
    "level": "Sätze"
  },
  {
    "de": "Lassen Sie mich Ihnen helfen!",
    "lv": "Дозволь мені допомогти тобі!",
    "level": "Sätze"
  },
  {
    "de": "Lasst uns gehen!",
    "lv": "ходімо!",
    "level": "Sätze"
  },
  {
    "de": "Na, wie läufts?",
    "lv": "як справи",
    "level": "Sätze"
  },
  {
    "de": "Es lebe!",
    "lv": "Хай живе!",
    "level": "Sätze"
  },
  {
    "de": "Leben Sie wohl!",
    "lv": "Живіть здорові! • До побачення!",
    "level": "Sätze"
  },
  {
    "de": "Was ist los?",
    "lv": "що сталося",
    "level": "Sätze"
  },
  {
    "de": "Der Job ist anstrengend.",
    "lv": "Робота виснажлива.",
    "level": "Sätze"
  },
  {
    "de": "Das war ein anstrengender Tag.",
    "lv": "Це був насичений день.",
    "level": "Sätze"
  },
  {
    "de": "Deutsch lernen kann anstrengend sein.",
    "lv": "Вивчення німецької може бути виснажливим.",
    "level": "Sätze"
  },
  {
    "de": "Er verlangt eine Erklärung.",
    "lv": "Він вимагає пояснень.",
    "level": "Sätze"
  },
  {
    "de": "Der Verkäufer verlangt zu viel Geld.",
    "lv": "Продавець просить забагато грошей.",
    "level": "Sätze"
  },
  {
    "de": "Das Gesetz verlangt es so.",
    "lv": "Цього вимагає закон.",
    "level": "Sätze"
  },
  {
    "de": "Das ist gar nicht so schwer.",
    "lv": "Це зовсім не так важко.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe gar kein Geld.",
    "lv": "У мене зовсім немає грошей.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gar nichts gesagt.",
    "lv": "Він взагалі нічого не сказав.",
    "level": "Sätze"
  },
  {
    "de": "Der Hund ist los.",
    "lv": "Собаку відпустили.",
    "level": "Sätze"
  },
  {
    "de": "Hier ist viel los.",
    "lv": "Тут багато чого відбувається.",
    "level": "Sätze"
  },
  {
    "de": "Halt die Luft an!",
    "lv": "Затримай подих!",
    "level": "Sätze"
  },
  {
    "de": "Was machst du?",
    "lv": "що ти робиш",
    "level": "Sätze"
  },
  {
    "de": "Sag mal!",
    "lv": "Скажи так!",
    "level": "Sätze"
  },
  {
    "de": "Was meinen Sie damit?",
    "lv": "Що ви маєте на увазі? • Як ви думаєте?",
    "level": "Sätze"
  },
  {
    "de": "Wir gehen mit Ihnen.",
    "lv": "Ми йдемо з тобою.",
    "level": "Sätze"
  },
  {
    "de": "Ich fahre mit der Eisenbahn.",
    "lv": "Я подорожую поїздом.",
    "level": "Sätze"
  },
  {
    "de": "am Mittwoch",
    "lv": "в середу",
    "level": "Sätze"
  },
  {
    "de": "Es mag sein.",
    "lv": "можливо.",
    "level": "Sätze"
  },
  {
    "de": "Ich mag das nicht.",
    "lv": "мені це не подобається",
    "level": "Sätze"
  },
  {
    "de": "am Montag",
    "lv": "в понеділок",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen!",
    "lv": "Доброго ранку!",
    "level": "Sätze"
  },
  {
    "de": "am Morgen",
    "lv": "вранці",
    "level": "Sätze"
  },
  {
    "de": "Gute Nacht!",
    "lv": "на добраніч!",
    "level": "Sätze"
  },
  {
    "de": "Nehmen Sie Platz!",
    "lv": "Сідайте!",
    "level": "Sätze"
  },
  {
    "de": "Letzte Neuheit!",
    "lv": "Останні новини!",
    "level": "Sätze"
  },
  {
    "de": "Nicht wahr?",
    "lv": "правильно?",
    "level": "Sätze"
  },
  {
    "de": "Nicht doch!",
    "lv": "Ні, звичайно! • Не треба!",
    "level": "Sätze"
  },
  {
    "de": "Nun endlich!",
    "lv": "Ну нарешті!",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das?",
    "lv": "Чим це корисно?",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das alles?",
    "lv": "Для чого все це?",
    "level": "Sätze"
  },
  {
    "de": "Parken verboten!",
    "lv": "Стоянка заборонена!",
    "level": "Sätze"
  },
  {
    "de": "Nicht parken!",
    "lv": "Стоянка заборонена!",
    "level": "Sätze"
  },
  {
    "de": "Er hat Recht.",
    "lv": "Він правий.",
    "level": "Sätze"
  },
  {
    "de": "Wovon ist die Rede?",
    "lv": "Про що йдеться?",
    "level": "Sätze"
  },
  {
    "de": "Davon kann keine Rede sein.",
    "lv": "Про це не може бути й мови.",
    "level": "Sätze"
  },
  {
    "de": "Glückliche Reise!",
    "lv": "Щасливої ​​дороги!",
    "level": "Sätze"
  },
  {
    "de": "Mir reißt die Geduld.",
    "lv": "У мене закінчується терпіння.",
    "level": "Sätze"
  },
  {
    "de": "Man sagt, dass...",
    "lv": "Кажуть, що...",
    "level": "Sätze"
  },
  {
    "de": "Schon gut!",
    "lv": "Це вже добре!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön!",
    "lv": "Будь ласка!",
    "level": "Sätze"
  },
  {
    "de": "Was bin ich schuldig?",
    "lv": "Скільки я винен? • Скільки я маю заплатити?",
    "level": "Sätze"
  },
  {
    "de": "Vor dem Gebrauch schütteln!",
    "lv": "Перед використанням збовтати!",
    "level": "Sätze"
  },
  {
    "de": "Sehen Sie mal!",
    "lv": "Подивіться!",
    "level": "Sätze"
  },
  {
    "de": "Wie sehr auch...",
    "lv": "скільки...",
    "level": "Sätze"
  },
  {
    "de": "Seit wann?",
    "lv": "Відколи?",
    "level": "Sätze"
  },
  {
    "de": "Was soll ich tun?",
    "lv": "Що мені робити?",
    "level": "Sätze"
  },
  {
    "de": "im Sommer",
    "lv": "влітку",
    "level": "Sätze"
  },
  {
    "de": "Nicht nur..., sondern auch...",
    "lv": "Не тільки... а й...",
    "level": "Sätze"
  },
  {
    "de": "Sonst noch etwas?",
    "lv": "Ще трохи хто?",
    "level": "Sätze"
  },
  {
    "de": "Spaß beiseite!",
    "lv": "Без жартів! • Жарти на межі!",
    "level": "Sätze"
  },
  {
    "de": "Wie spät ist es?",
    "lv": "котра година",
    "level": "Sätze"
  },
  {
    "de": "Durchfahrt gesperrt!",
    "lv": "Проїзд заборонено!",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie deutsch?",
    "lv": "ти розмовляєш німецькою?",
    "level": "Sätze"
  },
  {
    "de": "Statt zu...",
    "lv": "Замість...",
    "level": "Sätze"
  },
  {
    "de": "Wie steht’s?",
    "lv": "як справи",
    "level": "Sätze"
  },
  {
    "de": "Dieser Hut steht ihr gut.",
    "lv": "Цей капелюх їй пасує.",
    "level": "Sätze"
  },
  {
    "de": "Guten Tag!",
    "lv": "Привіт!",
    "level": "Sätze"
  },
  {
    "de": "Wo treffen wir uns?",
    "lv": "Де ми зустрінемось?",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie näher!",
    "lv": "Підійди ближче!",
    "level": "Sätze"
  },
  {
    "de": "Ehrlichkeit ist eine Tugend.",
    "lv": "Чесність – це чеснота.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe viel zu tun.",
    "lv": "у мене багато справ.",
    "level": "Sätze"
  },
  {
    "de": "Nicht übel!",
    "lv": "Дуже добре! • Немає заперечень",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt über mir.",
    "lv": "Він живе наді мною.",
    "level": "Sätze"
  },
  {
    "de": "Er ist davon überzeugt.",
    "lv": "Він у цьому впевнений.",
    "level": "Sätze"
  },
  {
    "de": "So ist es üblich.",
    "lv": "Це прийнято.",
    "level": "Sätze"
  },
  {
    "de": "Deine Uhr geht nach.",
    "lv": "Ваш годинник позаду.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel Uhr ist es?",
    "lv": "котра година",
    "level": "Sätze"
  },
  {
    "de": "Um acht Uhr früh.",
    "lv": "О восьмій ранку.",
    "level": "Sätze"
  },
  {
    "de": "umso mehr",
    "lv": "тим більше",
    "level": "Sätze"
  },
  {
    "de": "Rechts um!",
    "lv": "Поверніть праворуч!",
    "level": "Sätze"
  },
  {
    "de": "Und ob!",
    "lv": "А що ще!",
    "level": "Sätze"
  },
  {
    "de": "und zwar",
    "lv": "а саме",
    "level": "Sätze"
  },
  {
    "de": "Auf Unkosten von...",
    "lv": "За рахунок...",
    "level": "Sätze"
  },
  {
    "de": "Er saß unter den Zuschauern.",
    "lv": "Він сидів серед публіки.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ursache!",
    "lv": "Ні за що!",
    "level": "Sätze"
  },
  {
    "de": "Es geschah, wie verabredet.",
    "lv": "Сталося, як і домовились.",
    "level": "Sätze"
  },
  {
    "de": "Rauchen verboten!",
    "lv": "Палити заборонено!",
    "level": "Sätze"
  },
  {
    "de": "Falsch verbunden!",
    "lv": "Неправильне підключення!",
    "level": "Sätze"
  },
  {
    "de": "Eintritt verboten!",
    "lv": "Вхід заборонено!",
    "level": "Sätze"
  },
  {
    "de": "Verstehen Sie mich?",
    "lv": "Ти мене розумієш?",
    "level": "Sätze"
  },
  {
    "de": "Er versteht nichts davon.",
    "lv": "Він нічого в цьому не розуміє.",
    "level": "Sätze"
  },
  {
    "de": "Seine Ansicht vertreten.",
    "lv": "Відстоювати свою думку.",
    "level": "Sätze"
  },
  {
    "de": "Streit verursachen.",
    "lv": "Викликати суперечку.",
    "level": "Sätze"
  },
  {
    "de": "Viel besser.",
    "lv": "Набагато краще.",
    "level": "Sätze"
  },
  {
    "de": "Zu viel.",
    "lv": "Занадто багато.",
    "level": "Sätze"
  },
  {
    "de": "Vom Hörensagen.",
    "lv": "Почувши.",
    "level": "Sätze"
  },
  {
    "de": "Von Zeit zu Zeit.",
    "lv": "Час від часу.",
    "level": "Sätze"
  },
  {
    "de": "Von Beruf.",
    "lv": "За фахом.",
    "level": "Sätze"
  },
  {
    "de": "Er ist Berliner von Geburt.",
    "lv": "Він берлінець за походженням.",
    "level": "Sätze"
  },
  {
    "de": "Er steht vor dem Fenster.",
    "lv": "Він стоїть біля вікна.",
    "level": "Sätze"
  },
  {
    "de": "Vor Sonnenaufgang.",
    "lv": "До сходу сонця.",
    "level": "Sätze"
  },
  {
    "de": "Vor vierzehn Tagen.",
    "lv": "Два тижні тому.",
    "level": "Sätze"
  },
  {
    "de": "Vor Freude.",
    "lv": "Для розваги.",
    "level": "Sätze"
  },
  {
    "de": "Vor allem.",
    "lv": "Перш за все. • Перш за все",
    "level": "Sätze"
  },
  {
    "de": "Im Voraus.",
    "lv": "Раніше.",
    "level": "Sätze"
  },
  {
    "de": "Unter der Voraussetzung, dass...",
    "lv": "Припускаючи, що...",
    "level": "Sätze"
  },
  {
    "de": "Unter dem Vorbehalt.",
    "lv": "Умовно.",
    "level": "Sätze"
  },
  {
    "de": "Vorhanden sein.",
    "lv": "Бути. • Будьте присутні • Будьте доступні",
    "level": "Sätze"
  },
  {
    "de": "In der vorigen Woche.",
    "lv": "Минулого тижня.",
    "level": "Sätze"
  },
  {
    "de": "Vorkehrungen treffen.",
    "lv": "Вжити заходів щодо захисту.",
    "level": "Sätze"
  },
  {
    "de": "Sie kommt mir bekannt vor.",
    "lv": "Вона здається мені знайомою.",
    "level": "Sätze"
  },
  {
    "de": "Er hat Vorliebe für Literatur.",
    "lv": "Він дуже любить літературу.",
    "level": "Sätze"
  },
  {
    "de": "Heute Vormittag.",
    "lv": "Сьогодні вранці. • Сьогодні вранці",
    "level": "Sätze"
  },
  {
    "de": "Von vorn.",
    "lv": "З фронту.",
    "level": "Sätze"
  },
  {
    "de": "Nach vorn.",
    "lv": "вперед.",
    "level": "Sätze"
  },
  {
    "de": "Von vornherein.",
    "lv": "На самому початку.",
    "level": "Sätze"
  },
  {
    "de": "Im Vorteil sein.",
    "lv": "Бути в кращому становищі.",
    "level": "Sätze"
  },
  {
    "de": "Wach sein.",
    "lv": "Щоб не спати.",
    "level": "Sätze"
  },
  {
    "de": "Wach werden.",
    "lv": "Прокинься.",
    "level": "Sätze"
  },
  {
    "de": "Auf Wache sein.",
    "lv": "Стояти на варті.",
    "level": "Sätze"
  },
  {
    "de": "Während eines Jahres.",
    "lv": "Протягом року.",
    "level": "Sätze"
  },
  {
    "de": "Während des Krieges.",
    "lv": "Під час війни.",
    "level": "Sätze"
  },
  {
    "de": "Gegen eine Wand reden.",
    "lv": "Розмови даремно.",
    "level": "Sätze"
  },
  {
    "de": "Hier haben die Wände Ohren.",
    "lv": "Тут стіни мають вуха.",
    "level": "Sätze"
  },
  {
    "de": "Bis wann?",
    "lv": "До коликому?",
    "level": "Sätze"
  },
  {
    "de": "Es ist warm.",
    "lv": "Це тепло.",
    "level": "Sätze"
  },
  {
    "de": "Auf eine Nachricht warten.",
    "lv": "Чекайте повідомлення.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie?",
    "lv": "що ти хочеш",
    "level": "Sätze"
  },
  {
    "de": "Was für ein...?",
    "lv": "ВООЗ...? • А як щодо...?",
    "level": "Sätze"
  },
  {
    "de": "Auf halbem Wege.",
    "lv": "На півдорозі.",
    "level": "Sätze"
  },
  {
    "de": "Auf diesem Wege.",
    "lv": "таким чином. • За такі кошти",
    "level": "Sätze"
  },
  {
    "de": "Auf friedlichem Wege.",
    "lv": "На шляху миру.",
    "level": "Sätze"
  },
  {
    "de": "Unserer Freundschaft wegen.",
    "lv": "Через нашу дружбу.",
    "level": "Sätze"
  },
  {
    "de": "Von Rechts wegen.",
    "lv": "По справедливості.",
    "level": "Sätze"
  },
  {
    "de": "Weh tun.",
    "lv": "Зашкодити.",
    "level": "Sätze"
  },
  {
    "de": "Zu Weihnachten.",
    "lv": "На Різдво.",
    "level": "Sätze"
  },
  {
    "de": "Auf welche Weise?",
    "lv": "Яким чином?",
    "level": "Sätze"
  },
  {
    "de": "Art und Weise.",
    "lv": "Тип.",
    "level": "Sätze"
  },
  {
    "de": "Ohne weiteres.",
    "lv": "Негайно. • Негайно",
    "level": "Sätze"
  },
  {
    "de": "Bis auf weiteres.",
    "lv": "До подальших повідомлень.",
    "level": "Sätze"
  },
  {
    "de": "Und so weiter.",
    "lv": "І так далі.",
    "level": "Sätze"
  },
  {
    "de": "Weiter nichts.",
    "lv": "більше нічого.",
    "level": "Sätze"
  },
  {
    "de": "An welchem Tag?",
    "lv": "в який день?",
    "level": "Sätze"
  },
  {
    "de": "Alle Welt.",
    "lv": "Visa світ. • Всі",
    "level": "Sätze"
  },
  {
    "de": "In wenigen Tagen.",
    "lv": "Через декілька днів.",
    "level": "Sätze"
  },
  {
    "de": "Zu wenig.",
    "lv": "Замало.",
    "level": "Sätze"
  },
  {
    "de": "Wenn auch.",
    "lv": "Хоча.",
    "level": "Sätze"
  },
  {
    "de": "Wer da?",
    "lv": "Що там?",
    "level": "Sätze"
  },
  {
    "de": "Gesammelte Werke von Schiller.",
    "lv": "Зібрання творів Шиллера.",
    "level": "Sätze"
  },
  {
    "de": "Ausgewählte Werke.",
    "lv": "Підбірка творів.",
    "level": "Sätze"
  },
  {
    "de": "Er ist wert, dass...",
    "lv": "Він заслуговує...",
    "level": "Sätze"
  },
  {
    "de": "Es ist zwei Euro wert.",
    "lv": "Коштує два євро.",
    "level": "Sätze"
  },
  {
    "de": "Nach Westen.",
    "lv": "На захід.",
    "level": "Sätze"
  },
  {
    "de": "Von Westen.",
    "lv": "Із заходу.",
    "level": "Sätze"
  },
  {
    "de": "In Wettbewerb treten.",
    "lv": "Участь у конкурсі.",
    "level": "Sätze"
  },
  {
    "de": "Um die Wette laufen.",
    "lv": "Запустіть гонку.",
    "level": "Sätze"
  },
  {
    "de": "Was gilt die Wette?",
    "lv": "Про що ми торгуємося?",
    "level": "Sätze"
  },
  {
    "de": "Wie wird das Wetter?",
    "lv": "Якою буде погода?",
    "level": "Sätze"
  },
  {
    "de": "Wettkampf im Turnen.",
    "lv": "Змагання зі спортивної гімнастики.",
    "level": "Sätze"
  },
  {
    "de": "Wider meinen Willen.",
    "lv": "Проти моєї волі.",
    "level": "Sätze"
  },
  {
    "de": "Widerspruch erheben.",
    "lv": "Протестувати. • Висловлювати заперечення",
    "level": "Sätze"
  },
  {
    "de": "Wie alt ist er?",
    "lv": "скільки йому років",
    "level": "Sätze"
  },
  {
    "de": "Wie lange?",
    "lv": "як довго",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiederhören!",
    "lv": "До побачення!",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiedersehen!",
    "lv": "До побачення!",
    "level": "Sätze"
  },
  {
    "de": "Wilde Tiere.",
    "lv": "Дикі тварини.",
    "level": "Sätze"
  },
  {
    "de": "Herzlich willkommen!",
    "lv": "Гарячі вітання!",
    "level": "Sätze"
  },
  {
    "de": "Du musst ziehen.",
    "lv": "У вас є хід.",
    "level": "Sätze"
  },
  {
    "de": "Es zieht.",
    "lv": "Потягнути",
    "level": "Sätze"
  },
  {
    "de": "Ziemlich kalt.",
    "lv": "Досить холодно.",
    "level": "Sätze"
  },
  {
    "de": "Zipfel einer Wurst.",
    "lv": "Наконечник ковбаси.",
    "level": "Sätze"
  },
  {
    "de": "Zu ihm gehen.",
    "lv": "Іди до нього.",
    "level": "Sätze"
  },
  {
    "de": "Zur Schule gehen.",
    "lv": "Іди до школи.",
    "level": "Sätze"
  },
  {
    "de": "Zu Hause bleiben.",
    "lv": "Залишайся вдома.",
    "level": "Sätze"
  },
  {
    "de": "Von Tag zu Tag.",
    "lv": "Щодня.",
    "level": "Sätze"
  },
  {
    "de": "Zum Glück.",
    "lv": "На щастя.",
    "level": "Sätze"
  },
  {
    "de": "Wasser zum Trinken.",
    "lv": "Вода для пиття.",
    "level": "Sätze"
  },
  {
    "de": "Zu Fuß.",
    "lv": "Для ніжок.",
    "level": "Sätze"
  },
  {
    "de": "Zu Pferde.",
    "lv": "так",
    "level": "Sätze"
  },
  {
    "de": "Zu Rad.",
    "lv": "На велосипеді.",
    "level": "Sätze"
  },
  {
    "de": "Es hörte auf zu regnen.",
    "lv": "Дощ перестав.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe noch viel zu tun.",
    "lv": "Я ще маю багато зробити.",
    "level": "Sätze"
  },
  {
    "de": "Zu früh.",
    "lv": "Занадто рано.",
    "level": "Sätze"
  },
  {
    "de": "Zu groß.",
    "lv": "Занадто великий.",
    "level": "Sätze"
  },
  {
    "de": "Mit den Achseln zucken.",
    "lv": "Знизати плечима.",
    "level": "Sätze"
  },
  {
    "de": "In einem Zug trinken.",
    "lv": "Випити залпом.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde gehen.",
    "lv": "Загинути.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde legen.",
    "lv": "Покласти на основу. • Взяти за основу.",
    "level": "Sätze"
  },
  {
    "de": "Zum ersten Mal.",
    "lv": "Вперше.",
    "level": "Sätze"
  },
  {
    "de": "Machen Sie bitte die Tür zu!",
    "lv": "Будь ласка, закрийте двері!",
    "level": "Sätze"
  },
  {
    "de": "Er hat zugenommen.",
    "lv": "Він набрав вагу.",
    "level": "Sätze"
  },
  {
    "de": "Die Tage nehmen zu.",
    "lv": "Дні стають довшими.",
    "level": "Sätze"
  },
  {
    "de": "Zusammenhängen mit etwas.",
    "lv": "Асоціюватися з чимось.",
    "level": "Sätze"
  },
  {
    "de": "Die Tür ist zu.",
    "lv": "Двері закриті.",
    "level": "Sätze"
  },
  {
    "de": "Das hätte ich ihm nicht zugetraut.",
    "lv": "Я б не очікував від нього такого.",
    "level": "Sätze"
  },
  {
    "de": "Freier Zutritt.",
    "lv": "Вхід вільний.",
    "level": "Sätze"
  },
  {
    "de": "Zutritt verboten!",
    "lv": "Вхід заборонено!",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu viel!",
    "lv": "Це занадто!",
    "level": "Sätze"
  },
  {
    "de": "Zuwider werden.",
    "lv": "Стати огидним. • Захворіти",
    "level": "Sätze"
  },
  {
    "de": "Und zwar.",
    "lv": "А саме.",
    "level": "Sätze"
  },
  {
    "de": "Es steht außer Zweifel.",
    "lv": "Сумнівів немає.",
    "level": "Sätze"
  },
  {
    "de": "Ohne Zweifel.",
    "lv": "Без вагань.",
    "level": "Sätze"
  },
  {
    "de": "Zum Zweiten.",
    "lv": "По друге.",
    "level": "Sätze"
  },
  {
    "de": "Frohes neues Jahr!",
    "lv": "З новим роком!",
    "level": "Sätze"
  },
  {
    "de": "Herzlichen Glückwunsch zum Geburtstag!",
    "lv": "З днем ​​народження!",
    "level": "Sätze"
  },
  {
    "de": "Gute Reise!",
    "lv": "Щасливої ​​дороги!",
    "level": "Sätze"
  },
  {
    "de": "Es freut mich, Sie kennenzulernen.",
    "lv": "Я радий зустрічі з вами.",
    "level": "Sätze"
  },
  {
    "de": "Wären Sie bitte so nett?",
    "lv": "Будьте ласкаві, будь ласка?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin Ihnen sehr dankbar.",
    "lv": "Я дуже тобі вдячна.",
    "level": "Sätze"
  },
  {
    "de": "Setzt euch bitte hin!",
    "lv": "Сідайте, будь ласка!",
    "level": "Sätze"
  },
  {
    "de": "Ben, komm bitte an die Tafel!",
    "lv": "Ben, будь ласка, підійдіть до дошки!",
    "level": "Sätze"
  },
  {
    "de": "Schlagt bitte die Lehrbücher auf!",
    "lv": "Відкрийте, будь ласка, підручники!",
    "level": "Sätze"
  },
  {
    "de": "Geht bitte in die Sporthalle!",
    "lv": "Будь ласка, йди в спортзал!",
    "level": "Sätze"
  },
  {
    "de": "Schläfst du noch?",
    "lv": "ти ще спиш?",
    "level": "Sätze"
  },
  {
    "de": "Schlafen Sie noch?",
    "lv": "Ти ще спиш?",
    "level": "Sätze"
  },
  {
    "de": "Er ist fest eingeschlafen.",
    "lv": "Він міцно спить.",
    "level": "Sätze"
  },
  {
    "de": "Wecke ihn bitte auf, es ist schon spät!",
    "lv": "Будь ласка, розбуди його, вже пізно!",
    "level": "Sätze"
  },
  {
    "de": "Es tut mir sehr leid!",
    "lv": "мені дуже шкода!",
    "level": "Sätze"
  },
  {
    "de": "Vielen Dank!",
    "lv": "Дуже дякую!",
    "level": "Sätze"
  },
  {
    "de": "Finn, fang bitte an!",
    "lv": "Finn, починайте, будь ласка!",
    "level": "Sätze"
  },
  {
    "de": "Lest bitte mit!",
    "lv": "Прочитайте, будь ласка!",
    "level": "Sätze"
  },
  {
    "de": "Emma, schau bitte nicht aus dem Fenster!",
    "lv": "Emma, будь ласка, не дивіться у вікно!",
    "level": "Sätze"
  },
  {
    "de": "Jonas, bring bitte die Hefte!",
    "lv": "Jonas, будь ласка, принесіть зошити!",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte zurück an deinen Platz!",
    "lv": "Вертайся на своє місце!",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb acht.",
    "lv": "Зараз пів на сьому.",
    "level": "Sätze"
  },
  {
    "de": "Wann wachst du gewöhnlich auf?",
    "lv": "Коли ти зазвичай прокидаєшся?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe gleich auf.",
    "lv": "Я зараз встану.",
    "level": "Sätze"
  },
  {
    "de": "Steh auf, Hanna, es klingelt!",
    "lv": "Вставай, Hanna, дзвони!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich noch fünf Minuten schlafen!",
    "lv": "Дай мені поспати ще п'ять хвилин!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss nicht, das Zimmer zu lüften!",
    "lv": "Не забувайте провітрювати приміщення!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist das Handtuch?",
    "lv": "де рушник",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mir die Zähne putzen.",
    "lv": "Я хочу почистити зуби.",
    "level": "Sätze"
  },
  {
    "de": "Mit was putzt du dir die Zähne?",
    "lv": "Чим ти чистиш зуби?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mich anziehen.",
    "lv": "Я хочу одягнутися.",
    "level": "Sätze"
  },
  {
    "de": "Zieh dich bitte schnell an!",
    "lv": "Швидше одягайся, будь ласка!",
    "level": "Sätze"
  },
  {
    "de": "Kleide dich wärmer an, draußen ist es kühl.",
    "lv": "Одягайся тепліше, на вулиці холодно.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, wie geht es dir?",
    "lv": "Доброго ранку, як справи?",
    "level": "Sätze"
  },
  {
    "de": "Mir geht es gut, danke.",
    "lv": "Я в порядку, дякую.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es Neues?",
    "lv": "що нового",
    "level": "Sätze"
  },
  {
    "de": "Was für ein Chaos hier!",
    "lv": "Який тут безлад!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich beim Aufräumen helfen?",
    "lv": "Чи можу я допомогти навести порядок?",
    "level": "Sätze"
  },
  {
    "de": "Was trinkst du morgens, Kaffee oder Tee?",
    "lv": "Що ви п'єте вранці, каву чи чай?",
    "level": "Sätze"
  },
  {
    "de": "Gewöhnlich trinke ich morgens eine Tasse Kaffee.",
    "lv": "Я зазвичай випиваю чашку кави вранці.",
    "level": "Sätze"
  },
  {
    "de": "Am liebsten trinke ich schwarzen Kaffee.",
    "lv": "Найкраще п'ю чорну каву.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, hast du gut geschlafen?",
    "lv": "Доброго ранку, ти добре спав?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin noch sehr müde.",
    "lv": "Я ще дуже втомився.",
    "level": "Sätze"
  },
  {
    "de": "Willst du Kaffee oder Milch?",
    "lv": "Хочеш кави чи молока?",
    "level": "Sätze"
  },
  {
    "de": "Gib mir bitte ein Brötchen mit Käse.",
    "lv": "Дайте мені, будь ласка, сирну булочку.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss jetzt los!",
    "lv": "Я мушу йти зараз!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss dein Frühstück nicht!",
    "lv": "Не забудьте снідати!",
    "level": "Sätze"
  },
  {
    "de": "Klara, deck bitte den Tisch!",
    "lv": "Klara, будь ласка, накрийте стіл!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss die Servietten nicht!",
    "lv": "Не забудьте про серветки!",
    "level": "Sätze"
  },
  {
    "de": "Wann esst ihr zu Mittag?",
    "lv": "коли ти обідаєш",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit zu essen.",
    "lv": "Настав час їсти.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es heute zu Mittag?",
    "lv": "Що сьогодні на обід?",
    "level": "Sätze"
  },
  {
    "de": "Wie schmeckt dir die Suppe?",
    "lv": "Як вам суп?",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt ist sie etwas zu salzig.",
    "lv": "Відверто кажучи, це занадто солоно.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dir ein Stück Brot geben?",
    "lv": "Можна дати тобі шматочок хліба?",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich habe schon.",
    "lv": "Дякую, вже є.",
    "level": "Sätze"
  },
  {
    "de": "Das Fleisch schmeckt ausgezeichnet.",
    "lv": "М'ясо чудове на смак.",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich bin schon satt.",
    "lv": "Дякую, я вже ситий.",
    "level": "Sätze"
  },
  {
    "de": "Heute haben wir Besuch.",
    "lv": "Сьогодні у нас гості.",
    "level": "Sätze"
  },
  {
    "de": "Bist du heute Abend frei?",
    "lv": "ти вільний сьогодні ввечері?",
    "level": "Sätze"
  },
  {
    "de": "Komm doch heute zum Mittagessen vorbei!",
    "lv": "Приходьте сьогодні на обід!",
    "level": "Sätze"
  },
  {
    "de": "Setzen wir uns an den Tisch.",
    "lv": "Сідаймо за стіл.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, bedien dich!",
    "lv": "Будь ласка, їжте скільки хочете!",
    "level": "Sätze"
  },
  {
    "de": "Stört dich das Rauchen?",
    "lv": "Вам заважає куріння?",
    "level": "Sätze"
  },
  {
    "de": "Danke für die nette Aufnahme!",
    "lv": "Дякуємо за теплий прийом!",
    "level": "Sätze"
  },
  {
    "de": "Wann gehst du ins Bett?",
    "lv": "коли ти лягаєш спати",
    "level": "Sätze"
  },
  {
    "de": "Wenn ich von der Arbeit komme, bin ich immer müde.",
    "lv": "Я завжди втомлений, коли повертаюся з роботи.",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, ins Bett zu gehen.",
    "lv": "Пора йти спати.",
    "level": "Sätze"
  },
  {
    "de": "Es ist schönes Wetter.",
    "lv": "Це гарний час.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mit mir spazieren gehen?",
    "lv": "Хочеш погуляти зі мною?",
    "level": "Sätze"
  },
  {
    "de": "Sieh mal, es wird gleich regnen.",
    "lv": "Подивіться, скоро піде дощ.",
    "level": "Sätze"
  },
  {
    "de": "Nimm den Regenschirm mit!",
    "lv": "Візьміть із собою парасольку!",
    "level": "Sätze"
  },
  {
    "de": "Es regnet.",
    "lv": "Йде дощ.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin schon ganz nass.",
    "lv": "Я вже зовсім мокрий.",
    "level": "Sätze"
  },
  {
    "de": "Glaubst du, dass es den ganzen Tag regnen wird?",
    "lv": "Думаєте, цілий день буде дощ?",
    "level": "Sätze"
  },
  {
    "de": "Es hört auf zu regnen.",
    "lv": "Дощ припиняється.",
    "level": "Sätze"
  },
  {
    "de": "Die Sonne scheint wieder.",
    "lv": "Знову сонце світить.",
    "level": "Sätze"
  },
  {
    "de": "Es ist sehr warm.",
    "lv": "Дуже жарко.",
    "level": "Sätze"
  },
  {
    "de": "Es sieht nach Regen aus.",
    "lv": "Здається, буде дощ.",
    "level": "Sätze"
  },
  {
    "de": "Wir bekommen gleich ein Gewitter.",
    "lv": "Ми ось-ось отримаємо шторм.",
    "level": "Sätze"
  },
  {
    "de": "Das Gewitter zieht vorüber.",
    "lv": "Гроза минула.",
    "level": "Sätze"
  },
  {
    "de": "Die Wolken verziehen sich.",
    "lv": "Хмари розсіюються.",
    "level": "Sätze"
  },
  {
    "de": "Siehst du den Regenbogen?",
    "lv": "Бачите веселку?",
    "level": "Sätze"
  },
  {
    "de": "Der Winter ist da, es hat geschneit.",
    "lv": "Зима тут, вночі випав сніг.",
    "level": "Sätze"
  },
  {
    "de": "Es schneit.",
    "lv": "Йде сніг.",
    "level": "Sätze"
  },
  {
    "de": "Wie schön ist es im Wald im Winter!",
    "lv": "Як гарно в лісі взимку!",
    "level": "Sätze"
  },
  {
    "de": "Mir ist kalt, ich friere.",
    "lv": "Мені холодно, я мерзну.",
    "level": "Sätze"
  },
  {
    "de": "Draußen ist Glatteis, pass auf!",
    "lv": "На вулиці слизько, будьте обережні!",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir auf die Eisbahn gehen?",
    "lv": "Покатаємось на ковзанах?",
    "level": "Sätze"
  },
  {
    "de": "Zieh die Jacke an, du kannst dich erkälten.",
    "lv": "Одягніть куртку, можете застудитися.",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb sieben.",
    "lv": "Зараз пів на сьому.",
    "level": "Sätze"
  },
  {
    "de": "Meine Uhr geht fünf Minuten vor.",
    "lv": "Мій годинник швидкий на п'ять хвилин.",
    "level": "Sätze"
  },
  {
    "de": "Weck mich morgen früh um sieben Uhr!",
    "lv": "Розбуди мене завтра о сьомій!",
    "level": "Sätze"
  },
  {
    "de": "Was ist heute für ein Datum?",
    "lv": "Яка сьогодні дата?",
    "level": "Sätze"
  },
  {
    "de": "Heute ist der elfte Juli.",
    "lv": "Сьогодні одинадцяте липня.",
    "level": "Sätze"
  },
  {
    "de": "Was machst du gewöhnlich am Abend?",
    "lv": "Що ти зазвичай робиш вечорами?",
    "level": "Sätze"
  },
  {
    "de": "Es ist schon lange her, dass wir uns gesehen haben.",
    "lv": "Ми давно не зустрічалися.",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es dir?",
    "lv": "як справи",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, ich möchte etwas mit dir besprechen.",
    "lv": "Вибачте, я хочу з вами дещо обговорити.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir spazieren!",
    "lv": "Ходімо гуляти!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Lust, mit mir in den Park zu gehen?",
    "lv": "Хочеш піти зі мною в парк?",
    "level": "Sätze"
  },
  {
    "de": "Ich komme, um dich zum Spaziergang abzuholen.",
    "lv": "Я прийшов вас погуляти.",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte etwas langsamer, ich kann dir nicht folgen!",
    "lv": "Повільніше, я не встигну за тобою!",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zum ersten Mal in dieser Gegend.",
    "lv": "Я тут вперше.",
    "level": "Sätze"
  },
  {
    "de": "Ruhen wir uns ein wenig aus.",
    "lv": "Трохи відпочинемо.",
    "level": "Sätze"
  },
  {
    "de": "Jetzt können wir zurückgehen.",
    "lv": "Тепер ми можемо повернутися.",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt bin ich ziemlich müde.",
    "lv": "Чесно кажучи, я дуже втомився.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, wo ist die nächste U-Bahn-Station?",
    "lv": "Вибачте, а де найближча станція метро?",
    "level": "Sätze"
  },
  {
    "de": "Welcher ist der kürzeste Weg?",
    "lv": "Який найкоротший шлях?",
    "level": "Sätze"
  },
  {
    "de": "Geh hier die zweite Straße links und dann immer geradeaus.",
    "lv": "Тут поверніть на другу вулицю ліворуч і йдіть прямо.",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich am schnellsten zum Bahnhof?",
    "lv": "Як швидше дістатися до вокзалу?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe vor, morgen zu verreisen.",
    "lv": "Я маю намір виїхати завтра.",
    "level": "Sätze"
  },
  {
    "de": "Wohin willst du fahren?",
    "lv": "Куди ти хочеш поїхати?",
    "level": "Sätze"
  },
  {
    "de": "Reist du geschäftlich oder privat?",
    "lv": "Ви подорожуєте по роботі чи на відпочинок?",
    "level": "Sätze"
  },
  {
    "de": "Finn fährt bis Berlin mit, dann geht er ans Meer.",
    "lv": "Finn їхати до Берліна, потім їхати до моря.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt das Schiff ab?",
    "lv": "Коли відходить корабель?",
    "level": "Sätze"
  },
  {
    "de": "In einer halben Stunde.",
    "lv": "Через півгодини.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich noch eine Kabine bekommen?",
    "lv": "Чи можу я отримати каюту?",
    "level": "Sätze"
  },
  {
    "de": "Vergiss deinen Pass nicht!",
    "lv": "Не забудьте свій паспорт!",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, den Koffer zu packen.",
    "lv": "Пора пакувати валізу.",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt um halb sieben ab.",
    "lv": "Поїзд відправляється о пів на сьому.",
    "level": "Sätze"
  },
  {
    "de": "Hol mir bitte ein Taxi, ich verpasse sonst den Zug!",
    "lv": "Викличте, будь ласка, таксі, інакше я спізнюся на поїзд!",
    "level": "Sätze"
  },
  {
    "de": "Fahr bitte zum Bahnhof!",
    "lv": "Будь ласка, відвезіть мене на вокзал!",
    "level": "Sätze"
  },
  {
    "de": "Ich muss mich beeilen.",
    "lv": "Мені треба поспішати.",
    "level": "Sätze"
  },
  {
    "de": "Ist der Schalter schon offen?",
    "lv": "Каса вже відкрита?",
    "level": "Sätze"
  },
  {
    "de": "Eine Fahrkarte nach Köln, bitte.",
    "lv": "Один квиток до Кельна, будь ласка.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt der Zug ab?",
    "lv": "Коли відправляється поїзд?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt gleich ab.",
    "lv": "Поїзд незабаром відправляється.",
    "level": "Sätze"
  },
  {
    "de": "Muss ich in Koblenz umsteigen?",
    "lv": "Чи потрібно пересідати в Кобленці?",
    "level": "Sätze"
  },
  {
    "de": "Ja, dort musst du umsteigen.",
    "lv": "Так, там треба пересісти.",
    "level": "Sätze"
  },
  {
    "de": "Ist dieser Platz frei?",
    "lv": "Чи доступне це місце?",
    "level": "Sätze"
  },
  {
    "de": "Nein, hier sitzt niemand.",
    "lv": "Ні, тут ніхто не сидить.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der Bahnsteigkartenautomat?",
    "lv": "Де квитковий автомат на платформі?",
    "level": "Sätze"
  },
  {
    "de": "Stell mein Handgepäck ins Gepäcknetz.",
    "lv": "Покладіть мою ручну поклажу в сітку.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das Fenster aufmachen?",
    "lv": "Чи можу я відкрити вікно?",
    "level": "Sätze"
  },
  {
    "de": "Es zieht, schließ bitte das Fenster!",
    "lv": "Протягніть, будь ласка, закрийте вікно!",
    "level": "Sätze"
  },
  {
    "de": "Welche ist die nächste Station?",
    "lv": "Яка наступна зупинка?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange hält der Zug?",
    "lv": "Скільки часу стоїть потяг?",
    "level": "Sätze"
  },
  {
    "de": "Wo muss ich umsteigen?",
    "lv": "Куди мені перевести?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug hat Verspätung.",
    "lv": "Поїзд запізнюється.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Wagen ist für Nichtraucher.",
    "lv": "У вагоні заборонено палити.",
    "level": "Sätze"
  },
  {
    "de": "Wir fahren jetzt über die Grenze.",
    "lv": "Зараз їдемо через кордон.",
    "level": "Sätze"
  },
  {
    "de": "Hast du etwas zu verzollen?",
    "lv": "Вам є що розчистити?",
    "level": "Sätze"
  },
  {
    "de": "Wir sind in Berlin angekommen.",
    "lv": "Ми приїхали в Берлін.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir ein gutes Hotel empfehlen?",
    "lv": "Можете порадити хороший готель?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie freie Zimmer?",
    "lv": "Чи є у вас вільні кімнати?",
    "level": "Sätze"
  },
  {
    "de": "Ein Zimmer mit zwei Betten, bitte.",
    "lv": "Номер з двома ліжками, будь ласка.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Zimmer pro Nacht?",
    "lv": "Скільки коштує номер за ніч?",
    "level": "Sätze"
  },
  {
    "de": "Morgen reise ich ab. Weck mich um sieben Uhr!",
    "lv": "Я завтра їду. Розбуди мене о сьомій!",
    "level": "Sätze"
  },
  {
    "de": "Die Rechnung, bitte!",
    "lv": "Білл, будь ласка!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Stadtbibliothek?",
    "lv": "Де знаходиться міська бібліотека?",
    "level": "Sätze"
  },
  {
    "de": "Wann hat das Museum geöffnet?",
    "lv": "Коли відкритий музей?",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir ins Museum gehen?",
    "lv": "Підемо в музей?",
    "level": "Sätze"
  },
  {
    "de": "Fahren wir mit dem Bus oder der U-Bahn?",
    "lv": "Ми їдемо автобусом чи метро?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die nächste Bushaltestelle?",
    "lv": "Де найближча автобусна зупинка?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe großen Hunger.",
    "lv": "Я дуже голодний.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir zusammen essen?",
    "lv": "Підемо разом поїсти?",
    "level": "Sätze"
  },
  {
    "de": "Kellner, die Speisekarte, bitte!",
    "lv": "Офіціанти, меню, будь ласка!",
    "level": "Sätze"
  },
  {
    "de": "Ist der Fisch frisch?",
    "lv": "Риба свіжа?",
    "level": "Sätze"
  },
  {
    "de": "Das schmeckt ausgezeichnet!",
    "lv": "На смак чудовий!",
    "level": "Sätze"
  },
  {
    "de": "Kellner, zahlen bitte!",
    "lv": "Офіціанти, будь ласка, платіть!",
    "level": "Sätze"
  },
  {
    "de": "Ich gehe ins Café einen Kaffee trinken.",
    "lv": "Піду в кафе випити кави.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mitkommen?",
    "lv": "Хочеш піти разом?",
    "level": "Sätze"
  },
  {
    "de": "Eine Tasse Kaffee mit Milch, bitte!",
    "lv": "Чашку кави з молоком, будь ласка!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneller, ich habe es eilig!",
    "lv": "Швидше, будь ласка, мені треба поспішати!",
    "level": "Sätze"
  },
  {
    "de": "Lass deinen Kaffee nicht kalt werden!",
    "lv": "Не дай каві охолонути!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie etwas Erfrischendes?",
    "lv": "У вас є щось освіжаюче?",
    "level": "Sätze"
  },
  {
    "de": "Eine Portion Eis, bitte!",
    "lv": "Порцію морозива, будь ласка!",
    "level": "Sätze"
  },
  {
    "de": "Heute Morgen habe ich einen Brief bekommen.",
    "lv": "Сьогодні вранці я отримав листа.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss ihm gleich schreiben.",
    "lv": "Я повинен написати йому зараз.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der nächste Briefkasten?",
    "lv": "Де найближча поштова скринька?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Post?",
    "lv": "Де знаходиться пошта?",
    "level": "Sätze"
  },
  {
    "de": "Erinnere mich morgen daran zu schreiben!",
    "lv": "Нагадай мені підписати завтра!",
    "level": "Sätze"
  },
  {
    "de": "Werfen Sie bitte diesen Brief in den Briefkasten.",
    "lv": "Будь ласка, опустіть цей лист у поштову скриньку!",
    "level": "Sätze"
  },
  {
    "de": "Hallo, hier spricht Emma.",
    "lv": "Привіт, кажу Emma.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich dich später anrufen?",
    "lv": "чи можу я подзвонити тобі пізніше?",
    "level": "Sätze"
  },
  {
    "de": "Muss ich lange warten?",
    "lv": "Мені довго чекати?",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneiden Sie mir die Haare.",
    "lv": "Будь ласка, обстрижіть мене.",
    "level": "Sätze"
  },
  {
    "de": "Hinten bitte nicht zu kurz.",
    "lv": "Ззаду, будь ласка, не дуже коротко.",
    "level": "Sätze"
  },
  {
    "de": "Wann beginnt die Vorstellung?",
    "lv": "Коли починається шоу?",
    "level": "Sätze"
  },
  {
    "de": "Es fängt um halb acht an.",
    "lv": "Початок о пів на сьому.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind ausverkauft.",
    "lv": "Усі квитки розкуплені.",
    "level": "Sätze"
  },
  {
    "de": "Drei Karten, bitte!",
    "lv": "Будь ласка, три квитки!",
    "level": "Sätze"
  },
  {
    "de": "Wir lassen die Jacken in der Garderobe.",
    "lv": "Залишимо куртки в гардеробі.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schnell, der Vorhang geht gleich auf!",
    "lv": "Швидше, будь ласка, завіса ось-ось відкриється!",
    "level": "Sätze"
  },
  {
    "de": "Der Vorhang fällt.",
    "lv": "Завіса опускається.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dich zum Tanz bitten?",
    "lv": "Можна запропонувати вам потанцювати?",
    "level": "Sätze"
  },
  {
    "de": "Wann ist eure Hochzeit?",
    "lv": "Коли у вас весілля?",
    "level": "Sätze"
  },
  {
    "de": "Ich suche eine Wohnung.",
    "lv": "Шукаю квартиру.",
    "level": "Sätze"
  },
  {
    "de": "Ist in diesem Haus eine Wohnung frei?",
    "lv": "Чи є вільна квартира в цьому будинку?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet die Miete?",
    "lv": "Скільки коштує орендна плата?",
    "level": "Sätze"
  },
  {
    "de": "Die Wohnung hat drei Zimmer und eine Küche.",
    "lv": "В квартирі три кімнати та кухня.",
    "level": "Sätze"
  },
  {
    "de": "Heute ziehen wir um.",
    "lv": "Ми сьогодні переїжджаємо.",
    "level": "Sätze"
  },
  {
    "de": "Mia, pack die Sachen bitte in Kisten!",
    "lv": "Mia, складіть речі в ящики, будь ласка!",
    "level": "Sätze"
  },
  {
    "de": "Hast du alles eingepackt?",
    "lv": "Все вже запаковано?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe mit meinem Freund in Kontakt.",
    "lv": "Я листуюся зі своїм другом.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir ins Theater?",
    "lv": "Підемо в театр?",
    "level": "Sätze"
  },
  {
    "de": "Ist alles eingeladen?",
    "lv": "Чи все завантажено?",
    "level": "Sätze"
  },
  {
    "de": "Welch schöne Aussicht!",
    "lv": "Який чудовий краєвид!",
    "level": "Sätze"
  },
  {
    "de": "Nun können wir alles wieder aufräumen.",
    "lv": "Тепер ми можемо зібрати все назад.",
    "level": "Sätze"
  },
  {
    "de": "Wie viele Zimmer habt ihr?",
    "lv": "Скільки кімнат у вас?",
    "level": "Sätze"
  },
  {
    "de": "Im Sommer fahre ich ans Meer.",
    "lv": "Влітку поїду на море.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du schwimmen?",
    "lv": "ти вмієш плавати",
    "level": "Sätze"
  },
  {
    "de": "Schwimm nicht zu weit hinaus!",
    "lv": "Не запливайте занадто далеко!",
    "level": "Sätze"
  },
  {
    "de": "Badest du jeden Tag?",
    "lv": "Ви щодня плаваєте?",
    "level": "Sätze"
  },
  {
    "de": "Bei schönem Wetter gehe ich angeln.",
    "lv": "Якщо погода хороша, я йду на риболовлю.",
    "level": "Sätze"
  },
  {
    "de": "Wie sieht er aus?",
    "lv": "Як він виглядає?",
    "level": "Sätze"
  },
  {
    "de": "Er hat sich aber recht verändert.",
    "lv": "Однак він дуже змінився.",
    "level": "Sätze"
  },
  {
    "de": "Wie ist er als Mensch?",
    "lv": "Який він як особистість?",
    "level": "Sätze"
  },
  {
    "de": "Er ist immer nett und freundlich.",
    "lv": "Він завжди добрий і добрий.",
    "level": "Sätze"
  },
  {
    "de": "Ich fühle mich nicht wohl.",
    "lv": "Мені погано.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe starke Kopfschmerzen.",
    "lv": "У мене сильний головний біль.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe mich erkältet.",
    "lv": "Я застудився.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Schnupfen.",
    "lv": "У мене нежить.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist schwindlig.",
    "lv": "у мене запаморочення.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Arzt gehen.",
    "lv": "Мені треба йти до лікаря.",
    "level": "Sätze"
  },
  {
    "de": "Leg dich ins Bett!",
    "lv": "Лягай в ліжко!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Fieber?",
    "lv": "У вас лихоманка?",
    "level": "Sätze"
  },
  {
    "de": "Gestern hatte ich erhöhte Temperatur.",
    "lv": "У мене вчора була висока температура.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Zahnschmerzen.",
    "lv": "У мене болить зуб.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Zahnarzt gehen.",
    "lv": "Мені треба йти до стоматолога.",
    "level": "Sätze"
  },
  {
    "de": "Weißt du, dass Finn krank ist?",
    "lv": "Ви знаєте, що Finn хворий?",
    "level": "Sätze"
  },
  {
    "de": "Laut Arzt wird er bald wieder gesund.",
    "lv": "За словами лікаря, незабаром він одужає.",
    "level": "Sätze"
  },
  {
    "de": "Ich will meine Wohnung neu möblieren.",
    "lv": "Хочу зробити ремонт квартири.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das auf Raten kaufen?",
    "lv": "Чи можна купувати в розстрочку?",
    "level": "Sätze"
  },
  {
    "de": "Bleib im Bett, bis es dir besser geht!",
    "lv": "Залишайтеся в ліжку, поки вам не стане легше!",
    "level": "Sätze"
  },
  {
    "de": "Noah hat in zwei Wochen schwimmen gelernt.",
    "lv": "Noah навчився плавати за два тижні.",
    "level": "Sätze"
  },
  {
    "de": "Sei mit dem Essen noch vorsichtig.",
    "lv": "Будьте обережні з їжею.",
    "level": "Sätze"
  },
  {
    "de": "Sprichst du Deutsch?",
    "lv": "ти розмовляєш німецькою?",
    "level": "Sätze"
  },
  {
    "de": "Ja, ein bisschen.",
    "lv": "Так, трохи.",
    "level": "Sätze"
  },
  {
    "de": "Du sprichst ziemlich fließend.",
    "lv": "Ви говорите досить вільно.",
    "level": "Sätze"
  },
  {
    "de": "Wo hast du Deutsch gelernt?",
    "lv": "Де ти вчив німецьку?",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme seit einem Jahr Deutschstunden.",
    "lv": "Вже рік ходжу на уроки німецької мови.",
    "level": "Sätze"
  },
  {
    "de": "Ich suche immer Gelegenheit, Deutsch zu sprechen.",
    "lv": "Завжди шукаю можливість розмовляти німецькою мовою.",
    "level": "Sätze"
  },
  {
    "de": "Ist das Buch noch vorrätig?",
    "lv": "Ця книга ще доступна?",
    "level": "Sätze"
  },
  {
    "de": "Das Buch ist leider ausverkauft.",
    "lv": "На жаль, книга розпродана.",
    "level": "Sätze"
  },
  {
    "de": "Wann erscheint die neue Auflage?",
    "lv": "Коли вийде нове видання?",
    "level": "Sätze"
  },
  {
    "de": "Womit kann ich Ihnen helfen?",
    "lv": "Чим я можу допомогти?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie ganz frische Eier?",
    "lv": "У вас є свіжі яйця?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die?",
    "lv": "Скільки вони коштують?",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu teuer.",
    "lv": "Це занадто дорого.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir ein halbes Kilo abwiegen?",
    "lv": "Чи можете ви зважити половину kilo?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel muss ich zahlen?",
    "lv": "Скільки я маю заплатити?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet das Kilo?",
    "lv": "Скільки коштує кілограм?",
    "level": "Sätze"
  },
  {
    "de": "Wiegen Sie mir bitte zwei Kilo ab.",
    "lv": "Будь ласка, зважте два кілограми.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch Karotten?",
    "lv": "У вас теж є морква?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie gutes Rindfleisch?",
    "lv": "У вас хороша яловичина?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir zwei Kilo Hackfleisch.",
    "lv": "Дайте два кілограми фаршу.",
    "level": "Sätze"
  },
  {
    "de": "Ein Laib Brot, bitte, aber nicht zu knusprig.",
    "lv": "Буханець хліба, будь ласка, але не дуже жорсткий.",
    "level": "Sätze"
  },
  {
    "de": "Das Brot ist frisch gebacken.",
    "lv": "Хліб свіжоспечений.",
    "level": "Sätze"
  },
  {
    "de": "Was für Obst haben Sie heute?",
    "lv": "Які у вас сьогодні фрукти?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die Äpfel?",
    "lv": "Скільки коштують яблука?",
    "level": "Sätze"
  },
  {
    "de": "Dann nehme ich zwei Kilo Äpfel.",
    "lv": "Тоді я візьму два кілограми яблук.",
    "level": "Sätze"
  },
  {
    "de": "Die Birnen sind sehr teuer.",
    "lv": "Груші дуже дорогі.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir alles nach Hause liefern?",
    "lv": "Ви можете доставити все додому?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie Reis?",
    "lv": "У вас є рис?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir bitte ein Kilo Reis.",
    "lv": "Дайте, будь ласка, кілограм рису.",
    "level": "Sätze"
  },
  {
    "de": "Danke, diesmal nicht.",
    "lv": "Дякую, не цього разу.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet dieser Teppich?",
    "lv": "Скільки коштує цей килимок?",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Möbel in meine Wohnung liefern?",
    "lv": "Чи можете ви доставити меблі в квартиру?",
    "level": "Sätze"
  },
  {
    "de": "Bitte an der Kasse zahlen.",
    "lv": "Будь ласка, оплачуйте в касі.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, machen Sie die Rechnung.",
    "lv": "Будь ласка, виставте рахунок.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Meter?",
    "lv": "Скільки коштує лічильник?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Stoff gefällt mir.",
    "lv": "Я люблю цю тканину.",
    "level": "Sätze"
  },
  {
    "de": "Schneiden Sie mir bitte drei Meter ab.",
    "lv": "Будь ласка, відріжте три метри.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch andere Muster?",
    "lv": "У вас є інші зразки?",
    "level": "Sätze"
  },
  {
    "de": "Diese Farbe gefällt mir nicht.",
    "lv": "Мені не подобається цей колір.",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir eine hellere.",
    "lv": "Дайте яскравіше.",
    "level": "Sätze"
  },
  {
    "de": "Was kosten diese Socken?",
    "lv": "Скільки коштують ці шкарпетки?",
    "level": "Sätze"
  },
  {
    "de": "Welche Handschuhe wünschen Sie?",
    "lv": "Які рукавички ти хочеш?",
    "level": "Sätze"
  },
  {
    "de": "Die sind mir etwas zu eng.",
    "lv": "Мені вони трохи тісні.",
    "level": "Sätze"
  },
  {
    "de": "So, nun passen sie gut.",
    "lv": "Отже, тепер der добре.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir einen guten Schneider empfehlen?",
    "lv": "Можете порадити хорошого кравця?",
    "level": "Sätze"
  },
  {
    "de": "Ich will einen Anzug bestellen.",
    "lv": "Хочу замовити костюм.",
    "level": "Sätze"
  },
  {
    "de": "Wann wird er fertig sein?",
    "lv": "Коли він буде готовий?",
    "level": "Sätze"
  },
  {
    "de": "Der Anzug sitzt gut.",
    "lv": "Костюм der хороший.",
    "level": "Sätze"
  },
  {
    "de": "Die Hose ist zu lang.",
    "lv": "Штани занадто довгі.",
    "level": "Sätze"
  },
  {
    "de": "Bitte reinigen und bügeln Sie ihn!",
    "lv": "Будь ласка, почистіть і випрасуйте!",
    "level": "Sätze"
  },
  {
    "de": "Wann wird das Kleid fertig sein?",
    "lv": "Коли буде готова сукня?",
    "level": "Sätze"
  },
  {
    "de": "Die Schuhe sind zu eng.",
    "lv": "Взуття занадто тісне.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Schuhe heute reparieren?",
    "lv": "Ти можеш сьогодні полагодити своє взуття?",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich die Schuhe abholen?",
    "lv": "Коли я можу принести взуття?",
    "level": "Sätze"
  },
  {
    "de": "Meine Armbanduhr funktioniert nicht.",
    "lv": "Мій годинник не працює.",
    "level": "Sätze"
  },
  {
    "de": "Sie geht fünf Minuten vor.",
    "lv": "На п'ять хвилин раніше.",
    "level": "Sätze"
  },
  {
    "de": "Bist du kurzsichtig oder weitsichtig?",
    "lv": "Ти короткозорий чи далекозорий?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte eine Brille kaufen.",
    "lv": "Я хочу купити окуляри.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie meine Brille reparieren?",
    "lv": "Ви можете полагодити мої окуляри?",
    "level": "Sätze"
  },
  {
    "de": "Das dauert nur eine Viertelstunde.",
    "lv": "Це займе всього п'ятнадцять хвилин.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist mir zu hoch.",
    "lv": "Ціна для мене занадто висока.",
    "level": "Sätze"
  },
  {
    "de": "Ich brauche zwei Fotos für meinen Pass.",
    "lv": "Мені потрібні дві фотографії на паспорт.",
    "level": "Sätze"
  },
  {
    "de": "Bitte packen Sie es ein und schicken Sie es mir nach Hause.",
    "lv": "Будь ласка, запакуйте та відправте додому.",
    "level": "Sätze"
  },
  {
    "de": "Wir haben feste Preise.",
    "lv": "У нас фіксовані ціни.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, fotografieren Sie mich.",
    "lv": "Будь ласка, сфотографуйте мене.",
    "level": "Sätze"
  },
  {
    "de": "Setzen Sie sich, schauen Sie gerade in die Kamera und bewegen Sie sich nicht!",
    "lv": "Сідайте, дивіться прямо в камеру і не рухайтеся!",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich das Probebild sehen?",
    "lv": "Коли я можу побачити зразок?",
    "level": "Sätze"
  },
  {
    "de": "Wann sind die Fotos fertig?",
    "lv": "Коли будуть готові фото?",
    "level": "Sätze"
  },
  {
    "de": "Die Aufnahme ist gelungen.",
    "lv": "Foto вдалося.",
    "level": "Sätze"
  },
  {
    "de": "Die Fotos sind gut geworden.",
    "lv": "Фотки вийшли гарні.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie das Foto auch vergrößern?",
    "lv": "Можна також збільшити фото?",
    "level": "Sätze"
  },
  {
    "de": "Sind diese Steine echt?",
    "lv": "Чи справжні ці камені?",
    "level": "Sätze"
  },
  {
    "de": "Ist das echtes Gold?",
    "lv": "Це справжнє золото?",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir bitte Trauringe.",
    "lv": "Покажіть, будь ласка, обручки.",
    "level": "Sätze"
  },
  {
    "de": "Der Ring ist mir etwas zu weit.",
    "lv": "Каблучка мені трохи завелика.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann ihn enger machen.",
    "lv": "Я можу звузити його.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Ring passt mir.",
    "lv": "Цей перстень для мене der.",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir schöne Geschenkideen.",
    "lv": "Продемонструйте красиві ідеї подарунків.",
    "level": "Sätze"
  },
  {
    "de": "Wie gefallen dir diese Ohrringe?",
    "lv": "Як вам ці сережки?",
    "level": "Sätze"
  },
  {
    "de": "Diese Brosche ist wirklich schön.",
    "lv": "Ця брошка дуже красива.",
    "level": "Sätze"
  },
  {
    "de": "Der Stein ist ein Saphir.",
    "lv": "Цей камінь є сапфіром.",
    "level": "Sätze"
  },
  {
    "de": "Das ist kein echter Stein, das ist Glas.",
    "lv": "Це не справжній камінь, це скло.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Armband kann ich Ihnen besonders empfehlen.",
    "lv": "Можу особливо порекомендувати цей браслет.",
    "level": "Sätze"
  },
  {
    "de": "Es ist besonders schön gearbeitet.",
    "lv": "Він надзвичайно тонко виготовлений.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist nicht hoch.",
    "lv": "Ціна не висока.",
    "level": "Sätze"
  },
  {
    "de": "Bekomme ich die Schachtel gratis?",
    "lv": "Я отримав коробку безкоштовно?",
    "level": "Sätze"
  },
  {
    "de": "Alle Schmuckstücke sind gestempelt.",
    "lv": "Всі прикраси штамповані.",
    "level": "Sätze"
  },
  {
    "de": "Falls es meiner Frau nicht gefällt, kann ich es umtauschen?",
    "lv": "Якщо моїй дружині це не подобається, я можу його обміняти?",
    "level": "Sätze"
  },
  {
    "de": "Natürlich, jederzeit.",
    "lv": "У будь-який час, звичайно.",
    "level": "Sätze"
  }
];

window.SENTENCE_ENTRIES = SENTENCE_ENTRIES;

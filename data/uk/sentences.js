const SENTENCE_ENTRIES = [
  {
    "de": "Hüte dich davor!",
    "lv": "Стережися цього!",
    "level": "Sätze"
  },
  {
    "de": "Wenn nichts dazwischenkommt.",
    "lv": "Якщо ніщо не завадить. • Якщо все піде за планом.",
    "level": "Sätze"
  },
  {
    "de": "Das kann ich mir denken!",
    "lv": "Можу собі уявити!",
    "level": "Sätze"
  },
  {
    "de": "Ist er denn krank?",
    "lv": "Хіба він хворий?",
    "level": "Sätze"
  },
  {
    "de": "Was denn?",
    "lv": "А що таке?",
    "level": "Sätze"
  },
  {
    "de": "Desto mehr.",
    "lv": "Тим більше.",
    "level": "Sätze"
  },
  {
    "de": "Je mehr, desto besser.",
    "lv": "Що більше, то краще.",
    "level": "Sätze"
  },
  {
    "de": "Alles deutet auf Regen.",
    "lv": "Усе свідчить про те, що буде дощ.",
    "level": "Sätze"
  },
  {
    "de": "Damit ist mir wenig gedient.",
    "lv": "Мені із цього мало користі.",
    "level": "Sätze"
  },
  {
    "de": "Er ist dienstlich verhindert.",
    "lv": "Він не може прийти через службові справи.",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie doch!",
    "lv": "Говоріть же!",
    "level": "Sätze"
  },
  {
    "de": "Es donnert.",
    "lv": "Гримить грім.",
    "level": "Sätze"
  },
  {
    "de": "Doppelt so groß.",
    "lv": "Удвічі більший.",
    "level": "Sätze"
  },
  {
    "de": "Von dort.",
    "lv": "Звідти.",
    "level": "Sätze"
  },
  {
    "de": "Die Zeit drängt.",
    "lv": "Час не чекає.",
    "level": "Sätze"
  },
  {
    "de": "Ihn drücken Sorgen.",
    "lv": "Його гнітять турботи.",
    "level": "Sätze"
  },
  {
    "de": "Hast du das Buch durchgearbeitet?",
    "lv": "Ти ретельно опрацював книжку?",
    "level": "Sätze"
  },
  {
    "de": "Kein Durchgang!",
    "lv": "Прохід заборонено!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich Sie bitten?",
    "lv": "Можна вас запросити?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin durstig.",
    "lv": "Я хочу пити.",
    "level": "Sätze"
  },
  {
    "de": "Eben das meine ich.",
    "lv": "Саме це я й маю на увазі.",
    "level": "Sätze"
  },
  {
    "de": "Es ist ganz egal.",
    "lv": "Це зовсім не має значення.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie eigentlich?",
    "lv": "Чого ж ви, власне, хочете?",
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
    "lv": "Тобі лише здається, що ти хворий.",
    "level": "Sätze"
  },
  {
    "de": "Was fällt dir ein?",
    "lv": "Що ти собі дозволяєш? • Що тобі спадає на думку?",
    "level": "Sätze"
  },
  {
    "de": "Es war einmal.",
    "lv": "Жили-були.",
    "level": "Sätze"
  },
  {
    "de": "Steigen Sie bitte ein!",
    "lv": "Сідайте, будь ласка!",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie ein!",
    "lv": "Заходьте!",
    "level": "Sätze"
  },
  {
    "de": "Einzelnes hat mir dort gefallen.",
    "lv": "Дещо мені там сподобалося.",
    "level": "Sätze"
  },
  {
    "de": "Es empfiehlt sich.",
    "lv": "Рекомендовано.",
    "level": "Sätze"
  },
  {
    "de": "Diese Flasche enthält Essig.",
    "lv": "У цій пляшці оцет.",
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
    "lv": "Кого сьогодні немає?",
    "level": "Sätze"
  },
  {
    "de": "Was fehlt dir?",
    "lv": "Що з тобою?",
    "level": "Sätze"
  },
  {
    "de": "Wie heißen Sie?",
    "lv": "Як вас звати?",
    "level": "Sätze"
  },
  {
    "de": "Was soll das heißen?",
    "lv": "Що це має означати?",
    "level": "Sätze"
  },
  {
    "de": "Bitte treten Sie näher heran!",
    "lv": "Підійдіть, будь ласка, ближче!",
    "level": "Sätze"
  },
  {
    "de": "Heraus mit der Sprache!",
    "lv": "Ну ж бо, розповідай!",
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
    "lv": "із сьогоднішнього дня",
    "level": "Sätze"
  },
  {
    "de": "heute früh",
    "lv": "сьогодні вранці",
    "level": "Sätze"
  },
  {
    "de": "heute Nacht",
    "lv": "сьогодні вночі",
    "level": "Sätze"
  },
  {
    "de": "Zu Hilfe!",
    "lv": "На допомогу!",
    "level": "Sätze"
  },
  {
    "de": "Ich lerne jeden Tag Deutsch.",
    "lv": "Я щодня вчу німецьку.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das bitte wiederholen?",
    "lv": "Ти можеш, будь ласка, це повторити?",
    "level": "Sätze"
  },
  {
    "de": "Wir treffen uns am Bahnhof.",
    "lv": "Ми зустрічаємося на вокзалі.",
    "level": "Sätze"
  },
  {
    "de": "Ich stimme dir teilweise zu.",
    "lv": "Я частково з тобою згоден.",
    "level": "Sätze"
  },
  {
    "de": "Diese Entscheidung hat weitreichende Folgen.",
    "lv": "Це рішення має далекосяжні наслідки.",
    "level": "Sätze"
  },
  {
    "de": "Man sollte mehrere Perspektiven berücksichtigen.",
    "lv": "Варто брати до уваги кілька точок зору.",
    "level": "Sätze"
  },
  {
    "de": "Könnten Sie das näher erläutern?",
    "lv": "Чи не могли б ви пояснити це докладніше?",
    "level": "Sätze"
  },
  {
    "de": "Was mich anbelangt,...",
    "lv": "Що ж до мене,...",
    "level": "Sätze"
  },
  {
    "de": "Wie alt sind Sie?",
    "lv": "Скільки вам років?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zwanzig Jahre alt.",
    "lv": "Мені двадцять років.",
    "level": "Sätze"
  },
  {
    "de": "Von heute an.",
    "lv": "Відсьогодні.",
    "level": "Sätze"
  },
  {
    "de": "Von jetzt an.",
    "lv": "Відтепер.",
    "level": "Sätze"
  },
  {
    "de": "Anders geht es nicht.",
    "lv": "Інакше не можна.",
    "level": "Sätze"
  },
  {
    "de": "Rufen Sie mich an.",
    "lv": "Зателефонуйте мені.",
    "level": "Sätze"
  },
  {
    "de": "Bitte stellen Sie das Radio ab.",
    "lv": "Вимкніть, будь ласка, радіо.",
    "level": "Sätze"
  },
  {
    "de": "Achte bitte auf den Verkehr.",
    "lv": "Будь ласка, стеж за дорожнім рухом.",
    "level": "Sätze"
  },
  {
    "de": "Darauf musst du achten.",
    "lv": "На це ти маєш зважати.",
    "level": "Sätze"
  },
  {
    "de": "Heute mache ich es anders.",
    "lv": "Сьогодні я зроблю це інакше.",
    "level": "Sätze"
  },
  {
    "de": "Wir warten auf den Bus.",
    "lv": "Ми чекаємо на автобус.",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt allein.",
    "lv": "Він живе сам.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Ausbildung absolviert.",
    "lv": "Я закінчив професійне навчання. • Я здобув освіту.",
    "level": "Sätze"
  },
  {
    "de": "Ich warte den Regen ab.",
    "lv": "Я перечекаю дощ.",
    "level": "Sätze"
  },
  {
    "de": "Er arbeitet in der Verkaufsabteilung.",
    "lv": "Він працює у відділі продажу.",
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
    "lv": "Я хотів би проаналізувати це докладніше.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte den Vertrag ändern.",
    "lv": "Я хотів би змінити договір.",
    "level": "Sätze"
  },
  {
    "de": "Er ändert ständig seine Meinung.",
    "lv": "Він постійно змінює думку.",
    "level": "Sätze"
  },
  {
    "de": "Ähnliche Probleme hatten wir schon früher.",
    "lv": "Схожі проблеми в нас уже були раніше.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ahnung!",
    "lv": "Гадки не маю!",
    "level": "Sätze"
  },
  {
    "de": "Hör auf zu jammern.",
    "lv": "Перестань нарікати.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Kleid ist stilvoll und konservativ.",
    "lv": "Ця сукня елегантна й консервативна.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre gerne Akkordeonmusik.",
    "lv": "Я люблю слухати акордеонну музику.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das Gerät anklicken?",
    "lv": "Ти можеш клацнути на пристрій?",
    "level": "Sätze"
  },
  {
    "de": "Bitte öffne die Datei und klicke darauf.",
    "lv": "Будь ласка, відкрий файл і клацни на нього.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe einen Unfall gehabt.",
    "lv": "Я потрапив в аварію.",
    "level": "Sätze"
  },
  {
    "de": "Wir laufen zum Bahnhof.",
    "lv": "Ми йдемо на вокзал.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schalte den Fernseher an.",
    "lv": "Увімкни, будь ласка, телевізор.",
    "level": "Sätze"
  },
  {
    "de": "Mein Computer ist abgestürzt.",
    "lv": "У моєму комп’ютері стався збій.",
    "level": "Sätze"
  },
  {
    "de": "Am Wochenende gehe ich angeln.",
    "lv": "У вихідні я піду на риболовлю.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe den Anruf verpasst.",
    "lv": "Я пропустив дзвінок.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mich später anrufen?",
    "lv": "Ти можеш зателефонувати мені пізніше?",
    "level": "Sätze"
  },
  {
    "de": "Bitte nimm meinen Vorschlag an.",
    "lv": "Будь ласка, прийми мою пропозицію.",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme dein Angebot an.",
    "lv": "Я приймаю твою пропозицію.",
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
    "lv": "Не бійся, усе буде добре.",
    "level": "Sätze"
  },
  {
    "de": "Anklang finden.",
    "lv": "Знаходити відгук. • Знаходити підтримку.",
    "level": "Sätze"
  },
  {
    "de": "Es kommt darauf an.",
    "lv": "Це залежить від обставин.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Anlass.",
    "lv": "Із цієї нагоди.",
    "level": "Sätze"
  },
  {
    "de": "Nehmen wir an, dass...",
    "lv": "Припустімо, що...",
    "level": "Sätze"
  },
  {
    "de": "Was hast du da angerichtet?",
    "lv": "Що ти там накоїв?",
    "level": "Sätze"
  },
  {
    "de": "Bis ans Ende.",
    "lv": "До самого кінця.",
    "level": "Sätze"
  },
  {
    "de": "Du glaubst mir anscheinend nicht.",
    "lv": "Ти, здається, мені не віриш.",
    "level": "Sätze"
  },
  {
    "de": "Meiner Ansicht nach...",
    "lv": "На мою думку...",
    "level": "Sätze"
  },
  {
    "de": "Stell dich nicht so an!",
    "lv": "Не здіймай такого галасу!",
    "level": "Sätze"
  },
  {
    "de": "An die Arbeit gehen.",
    "lv": "Братися до роботи.",
    "level": "Sätze"
  },
  {
    "de": "Außer Atem sein.",
    "lv": "Бути задиханим.",
    "level": "Sätze"
  },
  {
    "de": "Guten Appetit!",
    "lv": "Смачного!",
    "level": "Sätze"
  },
  {
    "de": "In einem Atemzug.",
    "lv": "Одним духом.",
    "level": "Sätze"
  },
  {
    "de": "Auf jeden Fall.",
    "lv": "У будь-якому разі.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal war alles still.",
    "lv": "Раптом усе стихло.",
    "level": "Sätze"
  },
  {
    "de": "Bitte mach die Tür auf!",
    "lv": "Відчини, будь ласка, двері!",
    "level": "Sätze"
  },
  {
    "de": "Er hat den Kredit aufgenommen.",
    "lv": "Він узяв кредит.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen heute aufräumen.",
    "lv": "Сьогодні нам треба прибрати.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre jetzt auf.",
    "lv": "Я зараз закінчу.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schon auf.",
    "lv": "Він уже встав.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen das Treffen verschieben.",
    "lv": "Нам треба перенести зустріч.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat mich aufgeregt.",
    "lv": "Вона мене роздратувала.",
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
    "lv": "Відшкодовувати збитки.",
    "level": "Sätze"
  },
  {
    "de": "Bitte die Tür auf!",
    "lv": "Відчиніть, будь ласка, двері!",
    "level": "Sätze"
  },
  {
    "de": "Aufrecht sitzen.",
    "lv": "Сидіти рівно.",
    "level": "Sätze"
  },
  {
    "de": "Er ist auf.",
    "lv": "Він устав.",
    "level": "Sätze"
  },
  {
    "de": "Alle Kräfte aufwenden.",
    "lv": "Докладати всіх сил.",
    "level": "Sätze"
  },
  {
    "de": "Viel Mühe aufwenden.",
    "lv": "Докладати багато зусиль.",
    "level": "Sätze"
  },
  {
    "de": "Geh mir aus den Augen!",
    "lv": "Зникни з моїх очей!",
    "level": "Sätze"
  },
  {
    "de": "Unter vier Augen.",
    "lv": "Віч-на-віч.",
    "level": "Sätze"
  },
  {
    "de": "Aus Mangel an Zeit.",
    "lv": "Через брак часу.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Grunde.",
    "lv": "Із цієї причини.",
    "level": "Sätze"
  },
  {
    "de": "Alle außer dir.",
    "lv": "Усі, крім тебе.",
    "level": "Sätze"
  },
  {
    "de": "Auf Äußerlichkeiten Wert legen.",
    "lv": "Надавати значення зовнішності.",
    "level": "Sätze"
  },
  {
    "de": "Im äußersten Fall.",
    "lv": "У крайньому разі.",
    "level": "Sätze"
  },
  {
    "de": "Äußerst wichtig.",
    "lv": "Надзвичайно важливий.",
    "level": "Sätze"
  },
  {
    "de": "Aussicht auf die See.",
    "lv": "Вид на море.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gute Aussichten.",
    "lv": "У нього добрі перспективи.",
    "level": "Sätze"
  },
  {
    "de": "Wie wird dieses Wort ausgesprochen?",
    "lv": "Як вимовляють це слово?",
    "level": "Sätze"
  },
  {
    "de": "Sein Beileid aussprechen.",
    "lv": "Висловлювати своє співчуття.",
    "level": "Sätze"
  },
  {
    "de": "Wann wurden die Meisterschaftskämpfe ausgetragen?",
    "lv": "Коли відбувся чемпіонат?",
    "level": "Sätze"
  },
  {
    "de": "Welchen Beruf üben Sie aus?",
    "lv": "Яка у вас професія?",
    "level": "Sätze"
  },
  {
    "de": "Einfluss ausüben.",
    "lv": "Справляти вплив.",
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
    "lv": "Поїздом.",
    "level": "Sätze"
  },
  {
    "de": "Möglichst bald.",
    "lv": "Якнайшвидше.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist Angst und bange.",
    "lv": "Мені дуже страшно.",
    "level": "Sätze"
  },
  {
    "de": "Auf die lange Bank schieben.",
    "lv": "Відкладати в довгий ящик. • Зволікати.",
    "level": "Sätze"
  },
  {
    "de": "Bar zahlen.",
    "lv": "Платити готівкою.",
    "level": "Sätze"
  },
  {
    "de": "Erz bauen.",
    "lv": "Добувати руду.",
    "level": "Sätze"
  },
  {
    "de": "Mist bauen.",
    "lv": "Наробити дурниць.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin beauftragt.",
    "lv": "Мені доручено.",
    "level": "Sätze"
  },
  {
    "de": "Nach Bedarf.",
    "lv": "За потреби.",
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
    "lv": "Вона має пригнічений вигляд.",
    "level": "Sätze"
  },
  {
    "de": "Hinweise befolgen.",
    "lv": "Дотримуватися вказівок.",
    "level": "Sätze"
  },
  {
    "de": "Befehle befolgen.",
    "lv": "Виконувати накази.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Post befördern.",
    "lv": "Пересилати поштою.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin begierig zu wissen.",
    "lv": "Мені дуже хочеться знати.",
    "level": "Sätze"
  },
  {
    "de": "Zu Beginn.",
    "lv": "Спочатку.",
    "level": "Sätze"
  },
  {
    "de": "Am Beginn.",
    "lv": "На початку.",
    "level": "Sätze"
  },
  {
    "de": "Bei Beginn.",
    "lv": "З початком.",
    "level": "Sätze"
  },
  {
    "de": "In Begleitung.",
    "lv": "У супроводі.",
    "level": "Sätze"
  },
  {
    "de": "Mit seiner Begleitung.",
    "lv": "Зі своїм супутником.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schwer von Begriff.",
    "lv": "Він повільно міркує. • Він не дуже кмітливий.",
    "level": "Sätze"
  },
  {
    "de": "Im Gedächtnis behalten.",
    "lv": "Пам’ятати. • Тримати в пам’яті.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tisch.",
    "lv": "За столом.",
    "level": "Sätze"
  },
  {
    "de": "Bei Sinnen sein.",
    "lv": "Бути при здоровому глузді.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tage.",
    "lv": "Удень.",
    "level": "Sätze"
  },
  {
    "de": "Bei weitem nicht so.",
    "lv": "Далеко не так.",
    "level": "Sätze"
  },
  {
    "de": "Alle beide.",
    "lv": "Обидва.",
    "level": "Sätze"
  },
  {
    "de": "Stürmischer Beifall brach los.",
    "lv": "Залунали бурхливі оплески.",
    "level": "Sätze"
  },
  {
    "de": "Beifall finden.",
    "lv": "Здобувати схвалення.",
    "level": "Sätze"
  },
  {
    "de": "Beileid aussprechen.",
    "lv": "Висловлювати співчуття.",
    "level": "Sätze"
  },
  {
    "de": "Auf eigenen Beinen stehen.",
    "lv": "Стояти на власних ногах.",
    "level": "Sätze"
  },
  {
    "de": "Zum Beispiel.",
    "lv": "Наприклад.",
    "level": "Sätze"
  },
  {
    "de": "Beistand leisten.",
    "lv": "Допомагати. • Подавати допомогу.",
    "level": "Sätze"
  },
  {
    "de": "Beitrag leisten.",
    "lv": "Робити свій внесок.",
    "level": "Sätze"
  },
  {
    "de": "Jemandes Bekanntschaft machen.",
    "lv": "Знайомитися з кимось.",
    "level": "Sätze"
  },
  {
    "de": "Bekanntschaft anknüpfen.",
    "lv": "Зав’язувати знайомство. • Налагоджувати контакт.",
    "level": "Sätze"
  },
  {
    "de": "Belegte Brötchen.",
    "lv": "Бутерброди на булочках.",
    "level": "Sätze"
  },
  {
    "de": "Nach Ihrem Belieben.",
    "lv": "На ваш розсуд.",
    "level": "Sätze"
  },
  {
    "de": "Zu jeder beliebigen Zeit.",
    "lv": "У будь-який час.",
    "level": "Sätze"
  },
  {
    "de": "Schweigen beobachten.",
    "lv": "Зберігати мовчання.",
    "level": "Sätze"
  },
  {
    "de": "Zur Bequemlichkeit.",
    "lv": "Для зручності.",
    "level": "Sätze"
  },
  {
    "de": "Bereit sein.",
    "lv": "Бути готовим. • Бути згодним.",
    "level": "Sätze"
  },
  {
    "de": "Unfallopfer bergen.",
    "lv": "Рятувати потерпілих від нещасного випадку.",
    "level": "Sätze"
  },
  {
    "de": "Bericht erstatten.",
    "lv": "Доповідати. • Подавати звіт.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind besetzt.",
    "lv": "Усі місця зайняті.",
    "level": "Sätze"
  },
  {
    "de": "Neue Besen kehren gut.",
    "lv": "Нова мітла чисто мете.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt ein Haus.",
    "lv": "Йому належить будинок.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt viel Mut.",
    "lv": "У нього багато мужності.",
    "level": "Sätze"
  },
  {
    "de": "Desto besser.",
    "lv": "Тим краще.",
    "level": "Sätze"
  },
  {
    "de": "Gute Besserung!",
    "lv": "Одужуйте!",
    "level": "Sätze"
  },
  {
    "de": "Beim besten Willen.",
    "lv": "Хоч як би хотілося.",
    "level": "Sätze"
  },
  {
    "de": "Am besten.",
    "lv": "Найкраще.",
    "level": "Sätze"
  },
  {
    "de": "Es besteht Zweifel.",
    "lv": "Є сумніви.",
    "level": "Sätze"
  },
  {
    "de": "Seine Aufgabe besteht darin...",
    "lv": "Його завдання полягає в тому, щоб...",
    "level": "Sätze"
  },
  {
    "de": "Grüße bestellen.",
    "lv": "Передавати вітання.",
    "level": "Sätze"
  },
  {
    "de": "Ganz bestimmt.",
    "lv": "Обов’язково. • Цілком певно.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch kommen.",
    "lv": "Приходити в гості.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch sein.",
    "lv": "Бути в гостях. • Гостювати.",
    "level": "Sätze"
  },
  {
    "de": "Oft Konzerte besuchen.",
    "lv": "Часто ходити на концерти.",
    "level": "Sätze"
  },
  {
    "de": "Welche Schule hat er besucht?",
    "lv": "У якій школі він навчався?",
    "level": "Sätze"
  },
  {
    "de": "In Betracht ziehen.",
    "lv": "Брати до уваги. • Розглядати як варіант.",
    "level": "Sätze"
  },
  {
    "de": "Außer Betracht lassen.",
    "lv": "Не брати до уваги.",
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
    "lv": "Заплатити за все.",
    "level": "Sätze"
  },
  {
    "de": "In Bezug auf etwas.",
    "lv": "Щодо чогось.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön.",
    "lv": "Будь ласка.",
    "level": "Sätze"
  },
  {
    "de": "Wie bitte?",
    "lv": "Перепрошую?",
    "level": "Sätze"
  },
  {
    "de": "Bitte sehr.",
    "lv": "Прошу.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe eine Bitte an Sie.",
    "lv": "У мене до вас прохання.",
    "level": "Sätze"
  },
  {
    "de": "Trompete blasen.",
    "lv": "Грати на трубі.",
    "level": "Sätze"
  },
  {
    "de": "In einem Buch blättern.",
    "lv": "Гортати книжку.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßen Füßen.",
    "lv": "Босоніж.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßem Auge.",
    "lv": "Неозброєним оком.",
    "level": "Sätze"
  },
  {
    "de": "Danke für die Blumen!",
    "lv": "Дякую за комплімент!",
    "level": "Sätze"
  },
  {
    "de": "Alles in Butter.",
    "lv": "Усе гаразд.",
    "level": "Sätze"
  },
  {
    "de": "Bitte checken.",
    "lv": "Просимо перевірити.",
    "level": "Sätze"
  },
  {
    "de": "Da ist er!",
    "lv": "Ось він!",
    "level": "Sätze"
  },
  {
    "de": "Alles spricht dafür.",
    "lv": "Усе свідчить про це.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann nichts dafür.",
    "lv": "Я не винен.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin dagegen.",
    "lv": "Я проти.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe nichts dagegen.",
    "lv": "Я не заперечую.",
    "level": "Sätze"
  },
  {
    "de": "Von daheim.",
    "lv": "З дому.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Dame ziehen.",
    "lv": "Ходити ферзем.",
    "level": "Sätze"
  },
  {
    "de": "Es dämmert.",
    "lv": "Смеркає. • Світає.",
    "level": "Sätze"
  },
  {
    "de": "Danke schön!",
    "lv": "Щиро дякую!",
    "level": "Sätze"
  },
  {
    "de": "Dann und wann.",
    "lv": "Час від часу.",
    "level": "Sätze"
  },
  {
    "de": "Darauf kannst du dich verlassen.",
    "lv": "На це ти можеш покластися.",
    "level": "Sätze"
  },
  {
    "de": "Daraus wird nichts.",
    "lv": "Із цього нічого не вийде.",
    "level": "Sätze"
  },
  {
    "de": "So dass...",
    "lv": "Так що...",
    "level": "Sätze"
  },
  {
    "de": "Für wen halten Sie mich?",
    "lv": "За кого ви мене маєте?",
    "level": "Sätze"
  },
  {
    "de": "Hände weg!",
    "lv": "Руки геть!",
    "level": "Sätze"
  },
  {
    "de": "Lass den Kopf nicht hängen!",
    "lv": "Не вішай носа!",
    "level": "Sätze"
  },
  {
    "de": "zu Hause",
    "lv": "удома",
    "level": "Sätze"
  },
  {
    "de": "nach Hause gehen",
    "lv": "іти додому",
    "level": "Sätze"
  },
  {
    "de": "von Haus aus",
    "lv": "за походженням • від природи",
    "level": "Sätze"
  },
  {
    "de": "Meinen herzlichsten Glückwunsch!",
    "lv": "Мої найщиріші вітання!",
    "level": "Sätze"
  },
  {
    "de": "Seien Sie so gut!",
    "lv": "Будьте такий добрий!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie die Güte!",
    "lv": "Будьте ласкаві!",
    "level": "Sätze"
  },
  {
    "de": "Was hast du?",
    "lv": "Що з тобою?",
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
    "lv": "Мушу визнати, що...",
    "level": "Sätze"
  },
  {
    "de": "gestern früh",
    "lv": "учора вранці",
    "level": "Sätze"
  },
  {
    "de": "gestern Abend",
    "lv": "учора ввечері",
    "level": "Sätze"
  },
  {
    "de": "Es ist mir gleichgültig, ob...",
    "lv": "Мені байдуже, чи...",
    "level": "Sätze"
  },
  {
    "de": "Was ist geschehen?",
    "lv": "Що сталося?",
    "level": "Sätze"
  },
  {
    "de": "Mach keine Geschichten!",
    "lv": "Не роби дурниць!",
    "level": "Sätze"
  },
  {
    "de": "Geschweige denn...",
    "lv": "Не кажучи вже про... • А тим паче...",
    "level": "Sätze"
  },
  {
    "de": "Gehen Sie geradeaus!",
    "lv": "Ідіть прямо!",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es Ihnen?",
    "lv": "Як у вас справи?",
    "level": "Sätze"
  },
  {
    "de": "Frag ihn gelegentlich, ob...",
    "lv": "Спитай його при нагоді, чи...",
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
    "lv": "Що нового?",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Brief folgt, dass...",
    "lv": "Із цього листа випливає, що...",
    "level": "Sätze"
  },
  {
    "de": "Fahre fort!",
    "lv": "Продовжуй!",
    "level": "Sätze"
  },
  {
    "de": "Er ist kein Freund von...",
    "lv": "Він не прихильник...",
    "level": "Sätze"
  },
  {
    "de": "Es erwies sich, dass...",
    "lv": "Виявилося, що...",
    "level": "Sätze"
  },
  {
    "de": "Gedenkst du meiner?",
    "lv": "Ти мене пам’ятаєш? • Ти згадуєш про мене?",
    "level": "Sätze"
  },
  {
    "de": "im Winter",
    "lv": "узимку",
    "level": "Sätze"
  },
  {
    "de": "Welcher Jahrgang sind Sie?",
    "lv": "Якого ви року народження?",
    "level": "Sätze"
  },
  {
    "de": "Es jammert mich zu sehen...",
    "lv": "Мені боляче бачити...",
    "level": "Sätze"
  },
  {
    "de": "je mehr, desto besser",
    "lv": "що більше, то краще",
    "level": "Sätze"
  },
  {
    "de": "bis jetzt",
    "lv": "досі",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich zum Bahnhof?",
    "lv": "Як мені дістатися до вокзалу?",
    "level": "Sätze"
  },
  {
    "de": "Komm her!",
    "lv": "Іди сюди!",
    "level": "Sätze"
  },
  {
    "de": "Könnte ich Frau N. sprechen?",
    "lv": "Чи міг би я поговорити з пані Н.?",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das?",
    "lv": "Скільки це коштує?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange dauert die Vorstellung?",
    "lv": "Скільки триває вистава?",
    "level": "Sätze"
  },
  {
    "de": "Lass das!",
    "lv": "Припини! • Облиш це!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich in Ruhe!",
    "lv": "Дай мені спокій!",
    "level": "Sätze"
  },
  {
    "de": "Lassen Sie mich Ihnen helfen!",
    "lv": "Дозвольте мені вам допомогти!",
    "level": "Sätze"
  },
  {
    "de": "Lasst uns gehen!",
    "lv": "Ходімо!",
    "level": "Sätze"
  },
  {
    "de": "Na, wie läufts?",
    "lv": "Ну, як справи?",
    "level": "Sätze"
  },
  {
    "de": "Es lebe!",
    "lv": "Хай живе!",
    "level": "Sätze"
  },
  {
    "de": "Leben Sie wohl!",
    "lv": "Прощавайте! • Бувайте здорові!",
    "level": "Sätze"
  },
  {
    "de": "Was ist los?",
    "lv": "У чому річ?",
    "level": "Sätze"
  },
  {
    "de": "Der Job ist anstrengend.",
    "lv": "Робота втомлива.",
    "level": "Sätze"
  },
  {
    "de": "Das war ein anstrengender Tag.",
    "lv": "Це був напружений день.",
    "level": "Sätze"
  },
  {
    "de": "Deutsch lernen kann anstrengend sein.",
    "lv": "Вивчати німецьку мову буває втомливо.",
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
    "lv": "Так вимагає закон.",
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
    "lv": "Він зовсім нічого не сказав.",
    "level": "Sätze"
  },
  {
    "de": "Der Hund ist los.",
    "lv": "Собака відв’язався.",
    "level": "Sätze"
  },
  {
    "de": "Hier ist viel los.",
    "lv": "Тут багато чого відбувається.",
    "level": "Sätze"
  },
  {
    "de": "Halt die Luft an!",
    "lv": "Замовкни! • Не перебільшуй!",
    "level": "Sätze"
  },
  {
    "de": "Was machst du?",
    "lv": "Що ти робиш?",
    "level": "Sätze"
  },
  {
    "de": "Sag mal!",
    "lv": "Скажи-но!",
    "level": "Sätze"
  },
  {
    "de": "Was meinen Sie damit?",
    "lv": "Що ви маєте на увазі?",
    "level": "Sätze"
  },
  {
    "de": "Wir gehen mit Ihnen.",
    "lv": "Ми йдемо з вами.",
    "level": "Sätze"
  },
  {
    "de": "Ich fahre mit der Eisenbahn.",
    "lv": "Я їду поїздом.",
    "level": "Sätze"
  },
  {
    "de": "am Mittwoch",
    "lv": "у середу",
    "level": "Sätze"
  },
  {
    "de": "Es mag sein.",
    "lv": "Можливо.",
    "level": "Sätze"
  },
  {
    "de": "Ich mag das nicht.",
    "lv": "Мені це не подобається.",
    "level": "Sätze"
  },
  {
    "de": "am Montag",
    "lv": "у понеділок",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen!",
    "lv": "Доброго ранку!",
    "level": "Sätze"
  },
  {
    "de": "am Morgen",
    "lv": "уранці",
    "level": "Sätze"
  },
  {
    "de": "Gute Nacht!",
    "lv": "На добраніч!",
    "level": "Sätze"
  },
  {
    "de": "Nehmen Sie Platz!",
    "lv": "Сідайте!",
    "level": "Sätze"
  },
  {
    "de": "Letzte Neuheit!",
    "lv": "Остання новинка!",
    "level": "Sätze"
  },
  {
    "de": "Nicht wahr?",
    "lv": "Чи не так?",
    "level": "Sätze"
  },
  {
    "de": "Nicht doch!",
    "lv": "Та ні ж! • Не треба!",
    "level": "Sätze"
  },
  {
    "de": "Nun endlich!",
    "lv": "Ну нарешті!",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das?",
    "lv": "Навіщо це потрібно?",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das alles?",
    "lv": "Навіщо все це?",
    "level": "Sätze"
  },
  {
    "de": "Parken verboten!",
    "lv": "Стоянку заборонено!",
    "level": "Sätze"
  },
  {
    "de": "Nicht parken!",
    "lv": "Стоянку заборонено!",
    "level": "Sätze"
  },
  {
    "de": "Er hat Recht.",
    "lv": "Він має рацію.",
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
    "lv": "Щасливої дороги!",
    "level": "Sätze"
  },
  {
    "de": "Mir reißt die Geduld.",
    "lv": "Я втрачаю терпіння.",
    "level": "Sätze"
  },
  {
    "de": "Man sagt, dass...",
    "lv": "Кажуть, що...",
    "level": "Sätze"
  },
  {
    "de": "Schon gut!",
    "lv": "Усе гаразд!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön!",
    "lv": "Будь ласка!",
    "level": "Sätze"
  },
  {
    "de": "Was bin ich schuldig?",
    "lv": "Скільки я вам винен?",
    "level": "Sätze"
  },
  {
    "de": "Vor dem Gebrauch schütteln!",
    "lv": "Перед вживанням збовтати!",
    "level": "Sätze"
  },
  {
    "de": "Sehen Sie mal!",
    "lv": "Подивіться-но!",
    "level": "Sätze"
  },
  {
    "de": "Wie sehr auch...",
    "lv": "Хоч як сильно...",
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
    "lv": "улітку",
    "level": "Sätze"
  },
  {
    "de": "Nicht nur..., sondern auch...",
    "lv": "Не тільки..., а й...",
    "level": "Sätze"
  },
  {
    "de": "Sonst noch etwas?",
    "lv": "Ще щось?",
    "level": "Sätze"
  },
  {
    "de": "Spaß beiseite!",
    "lv": "Жарти набік!",
    "level": "Sätze"
  },
  {
    "de": "Wie spät ist es?",
    "lv": "Котра година?",
    "level": "Sätze"
  },
  {
    "de": "Durchfahrt gesperrt!",
    "lv": "Проїзд заборонено!",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie deutsch?",
    "lv": "Ви розмовляєте німецькою?",
    "level": "Sätze"
  },
  {
    "de": "Statt zu...",
    "lv": "Замість того щоб...",
    "level": "Sätze"
  },
  {
    "de": "Wie steht’s?",
    "lv": "Як справи?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Hut steht ihr gut.",
    "lv": "Цей капелюх їй личить.",
    "level": "Sätze"
  },
  {
    "de": "Guten Tag!",
    "lv": "Добрий день!",
    "level": "Sätze"
  },
  {
    "de": "Wo treffen wir uns?",
    "lv": "Де ми зустрінемося?",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie näher!",
    "lv": "Підійдіть ближче!",
    "level": "Sätze"
  },
  {
    "de": "Ehrlichkeit ist eine Tugend.",
    "lv": "Чесність — це чеснота.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe viel zu tun.",
    "lv": "У мене багато справ.",
    "level": "Sätze"
  },
  {
    "de": "Nicht übel!",
    "lv": "Непогано!",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt über mir.",
    "lv": "Він живе наді мною.",
    "level": "Sätze"
  },
  {
    "de": "Er ist davon überzeugt.",
    "lv": "Він у цьому переконаний.",
    "level": "Sätze"
  },
  {
    "de": "So ist es üblich.",
    "lv": "Так заведено.",
    "level": "Sätze"
  },
  {
    "de": "Deine Uhr geht nach.",
    "lv": "Твій годинник відстає.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel Uhr ist es?",
    "lv": "Котра зараз година?",
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
    "lv": "Право-руч!",
    "level": "Sätze"
  },
  {
    "de": "Und ob!",
    "lv": "Ще б пак!",
    "level": "Sätze"
  },
  {
    "de": "und zwar",
    "lv": "а саме",
    "level": "Sätze"
  },
  {
    "de": "Auf Unkosten von...",
    "lv": "Коштом...",
    "level": "Sätze"
  },
  {
    "de": "Er saß unter den Zuschauern.",
    "lv": "Він сидів серед глядачів.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ursache!",
    "lv": "Нема за що!",
    "level": "Sätze"
  },
  {
    "de": "Es geschah, wie verabredet.",
    "lv": "Сталося, як і домовлялися.",
    "level": "Sätze"
  },
  {
    "de": "Rauchen verboten!",
    "lv": "Палити заборонено!",
    "level": "Sätze"
  },
  {
    "de": "Falsch verbunden!",
    "lv": "Ви неправильно набрали номер!",
    "level": "Sätze"
  },
  {
    "de": "Eintritt verboten!",
    "lv": "Вхід заборонено!",
    "level": "Sätze"
  },
  {
    "de": "Verstehen Sie mich?",
    "lv": "Ви мене розумієте?",
    "level": "Sätze"
  },
  {
    "de": "Er versteht nichts davon.",
    "lv": "Він на цьому зовсім не розуміється.",
    "level": "Sätze"
  },
  {
    "de": "Seine Ansicht vertreten.",
    "lv": "Обстоювати свою думку.",
    "level": "Sätze"
  },
  {
    "de": "Streit verursachen.",
    "lv": "Спричиняти сварку.",
    "level": "Sätze"
  },
  {
    "de": "Viel besser.",
    "lv": "Набагато краще.",
    "level": "Sätze"
  },
  {
    "de": "Zu viel.",
    "lv": "Забагато.",
    "level": "Sätze"
  },
  {
    "de": "Vom Hörensagen.",
    "lv": "Із чуток.",
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
    "lv": "Він берлінець за народженням.",
    "level": "Sätze"
  },
  {
    "de": "Er steht vor dem Fenster.",
    "lv": "Він стоїть перед вікном.",
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
    "lv": "З радощів.",
    "level": "Sätze"
  },
  {
    "de": "Vor allem.",
    "lv": "Насамперед.",
    "level": "Sätze"
  },
  {
    "de": "Im Voraus.",
    "lv": "Заздалегідь.",
    "level": "Sätze"
  },
  {
    "de": "Unter der Voraussetzung, dass...",
    "lv": "За умови, що...",
    "level": "Sätze"
  },
  {
    "de": "Unter dem Vorbehalt.",
    "lv": "Із цим застереженням.",
    "level": "Sätze"
  },
  {
    "de": "Vorhanden sein.",
    "lv": "Бути наявним. • Існувати.",
    "level": "Sätze"
  },
  {
    "de": "In der vorigen Woche.",
    "lv": "Минулого тижня.",
    "level": "Sätze"
  },
  {
    "de": "Vorkehrungen treffen.",
    "lv": "Уживати запобіжних заходів.",
    "level": "Sätze"
  },
  {
    "de": "Sie kommt mir bekannt vor.",
    "lv": "Вона здається мені знайомою.",
    "level": "Sätze"
  },
  {
    "de": "Er hat eine Vorliebe für Literatur.",
    "lv": "Він особливо любить літературу.",
    "level": "Sätze"
  },
  {
    "de": "Heute Vormittag.",
    "lv": "Сьогодні вранці. • Сьогодні до обіду.",
    "level": "Sätze"
  },
  {
    "de": "Von vorn.",
    "lv": "Спереду. • Спочатку.",
    "level": "Sätze"
  },
  {
    "de": "Nach vorn.",
    "lv": "Уперед.",
    "level": "Sätze"
  },
  {
    "de": "Von vornherein.",
    "lv": "Від самого початку.",
    "level": "Sätze"
  },
  {
    "de": "Im Vorteil sein.",
    "lv": "Мати перевагу.",
    "level": "Sätze"
  },
  {
    "de": "Wach sein.",
    "lv": "Не спати.",
    "level": "Sätze"
  },
  {
    "de": "Wach werden.",
    "lv": "Прокидатися.",
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
    "lv": "Говорити як до стіни.",
    "level": "Sätze"
  },
  {
    "de": "Hier haben die Wände Ohren.",
    "lv": "Тут і стіни мають вуха.",
    "level": "Sätze"
  },
  {
    "de": "Bis wann?",
    "lv": "До якого часу?",
    "level": "Sätze"
  },
  {
    "de": "Es ist warm.",
    "lv": "Тепло.",
    "level": "Sätze"
  },
  {
    "de": "Auf eine Nachricht warten.",
    "lv": "Чекати на повідомлення.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie?",
    "lv": "Чого ви хочете?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein...?",
    "lv": "Який...? • Що за...?",
    "level": "Sätze"
  },
  {
    "de": "Auf halbem Wege.",
    "lv": "На півдорозі.",
    "level": "Sätze"
  },
  {
    "de": "Auf diesem Wege.",
    "lv": "У такий спосіб. • Такими засобами.",
    "level": "Sätze"
  },
  {
    "de": "Auf friedlichem Wege.",
    "lv": "Мирним шляхом.",
    "level": "Sätze"
  },
  {
    "de": "Unserer Freundschaft wegen.",
    "lv": "Заради нашої дружби.",
    "level": "Sätze"
  },
  {
    "de": "Von Rechts wegen.",
    "lv": "За законом. • По справедливості.",
    "level": "Sätze"
  },
  {
    "de": "Weh tun.",
    "lv": "Боліти.",
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
    "lv": "Спосіб.",
    "level": "Sätze"
  },
  {
    "de": "Ohne weiteres.",
    "lv": "Без зволікань. • Без труднощів.",
    "level": "Sätze"
  },
  {
    "de": "Bis auf weiteres.",
    "lv": "До подальшого повідомлення.",
    "level": "Sätze"
  },
  {
    "de": "Und so weiter.",
    "lv": "І так далі.",
    "level": "Sätze"
  },
  {
    "de": "Weiter nichts.",
    "lv": "Більше нічого.",
    "level": "Sätze"
  },
  {
    "de": "An welchem Tag?",
    "lv": "Якого дня?",
    "level": "Sätze"
  },
  {
    "de": "Alle Welt.",
    "lv": "Увесь світ. • Усі.",
    "level": "Sätze"
  },
  {
    "de": "In wenigen Tagen.",
    "lv": "За кілька днів.",
    "level": "Sätze"
  },
  {
    "de": "Zu wenig.",
    "lv": "Замало.",
    "level": "Sätze"
  },
  {
    "de": "Wenn auch.",
    "lv": "Хоча й.",
    "level": "Sätze"
  },
  {
    "de": "Wer da?",
    "lv": "Хто там?",
    "level": "Sätze"
  },
  {
    "de": "Gesammelte Werke von Schiller.",
    "lv": "Зібрання творів Шиллера.",
    "level": "Sätze"
  },
  {
    "de": "Ausgewählte Werke.",
    "lv": "Вибрані твори.",
    "level": "Sätze"
  },
  {
    "de": "Er ist wert, dass...",
    "lv": "Він заслуговує на те, щоб...",
    "level": "Sätze"
  },
  {
    "de": "Es ist zwei Euro wert.",
    "lv": "Це варте двох євро.",
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
    "lv": "Вступати в змагання.",
    "level": "Sätze"
  },
  {
    "de": "Um die Wette laufen.",
    "lv": "Бігати наввипередки.",
    "level": "Sätze"
  },
  {
    "de": "Was gilt die Wette?",
    "lv": "На що б’ємося об заклад?",
    "level": "Sätze"
  },
  {
    "de": "Wie wird das Wetter?",
    "lv": "Яка буде погода?",
    "level": "Sätze"
  },
  {
    "de": "Wettkampf im Turnen.",
    "lv": "Змагання з гімнастики.",
    "level": "Sätze"
  },
  {
    "de": "Wider meinen Willen.",
    "lv": "Проти моєї волі.",
    "level": "Sätze"
  },
  {
    "de": "Widerspruch erheben.",
    "lv": "Протестувати. • Висловлювати заперечення.",
    "level": "Sätze"
  },
  {
    "de": "Wie alt ist er?",
    "lv": "Скільки йому років?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange?",
    "lv": "Як довго?",
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
    "lv": "Ласкаво просимо!",
    "level": "Sätze"
  },
  {
    "de": "Du musst ziehen.",
    "lv": "Тобі ходити.",
    "level": "Sätze"
  },
  {
    "de": "Es zieht.",
    "lv": "Протяг.",
    "level": "Sätze"
  },
  {
    "de": "Ziemlich kalt.",
    "lv": "Досить холодно.",
    "level": "Sätze"
  },
  {
    "de": "Zipfel einer Wurst.",
    "lv": "Кінчик ковбаси.",
    "level": "Sätze"
  },
  {
    "de": "Zu ihm gehen.",
    "lv": "Іти до нього.",
    "level": "Sätze"
  },
  {
    "de": "Zur Schule gehen.",
    "lv": "Ходити до школи.",
    "level": "Sätze"
  },
  {
    "de": "Zu Hause bleiben.",
    "lv": "Залишатися вдома.",
    "level": "Sätze"
  },
  {
    "de": "Von Tag zu Tag.",
    "lv": "З кожним днем.",
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
    "lv": "Пішки.",
    "level": "Sätze"
  },
  {
    "de": "Zu Pferde.",
    "lv": "Верхи.",
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
    "lv": "У мене ще багато справ.",
    "level": "Sätze"
  },
  {
    "de": "Zu früh.",
    "lv": "Зарано.",
    "level": "Sätze"
  },
  {
    "de": "Zu groß.",
    "lv": "Завеликий.",
    "level": "Sätze"
  },
  {
    "de": "Mit den Achseln zucken.",
    "lv": "Знизувати плечима.",
    "level": "Sätze"
  },
  {
    "de": "In einem Zug trinken.",
    "lv": "Випити одним ковтком.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde gehen.",
    "lv": "Гинути.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde legen.",
    "lv": "Класти в основу. • Брати за основу.",
    "level": "Sätze"
  },
  {
    "de": "Zum ersten Mal.",
    "lv": "Уперше.",
    "level": "Sätze"
  },
  {
    "de": "Machen Sie bitte die Tür zu!",
    "lv": "Зачиніть, будь ласка, двері!",
    "level": "Sätze"
  },
  {
    "de": "Er hat zugenommen.",
    "lv": "Він погладшав.",
    "level": "Sätze"
  },
  {
    "de": "Die Tage nehmen zu.",
    "lv": "Дні стають довшими.",
    "level": "Sätze"
  },
  {
    "de": "Zusammenhängen mit etwas.",
    "lv": "Бути пов’язаним із чимось.",
    "level": "Sätze"
  },
  {
    "de": "Die Tür ist zu.",
    "lv": "Двері зачинені.",
    "level": "Sätze"
  },
  {
    "de": "Das hätte ich ihm nicht zugetraut.",
    "lv": "Такого я б від нього не чекав.",
    "level": "Sätze"
  },
  {
    "de": "Freier Zutritt.",
    "lv": "Вільний вхід.",
    "level": "Sätze"
  },
  {
    "de": "Zutritt verboten!",
    "lv": "Вхід заборонено!",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu viel!",
    "lv": "Це забагато!",
    "level": "Sätze"
  },
  {
    "de": "Zuwider werden.",
    "lv": "Ставати огидним. • Набридати.",
    "level": "Sätze"
  },
  {
    "de": "Und zwar.",
    "lv": "А саме.",
    "level": "Sätze"
  },
  {
    "de": "Es steht außer Zweifel.",
    "lv": "Це поза сумнівом.",
    "level": "Sätze"
  },
  {
    "de": "Ohne Zweifel.",
    "lv": "Без сумніву.",
    "level": "Sätze"
  },
  {
    "de": "Zum Zweiten.",
    "lv": "По-друге.",
    "level": "Sätze"
  },
  {
    "de": "Frohes neues Jahr!",
    "lv": "З Новим роком!",
    "level": "Sätze"
  },
  {
    "de": "Herzlichen Glückwunsch zum Geburtstag!",
    "lv": "Щиро вітаю з днем народження!",
    "level": "Sätze"
  },
  {
    "de": "Gute Reise!",
    "lv": "Щасливої дороги!",
    "level": "Sätze"
  },
  {
    "de": "Es freut mich, Sie kennenzulernen.",
    "lv": "Радий з вами познайомитися.",
    "level": "Sätze"
  },
  {
    "de": "Wären Sie bitte so nett?",
    "lv": "Чи не були б ви такий люб’язний?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin Ihnen sehr dankbar.",
    "lv": "Я вам дуже вдячний.",
    "level": "Sätze"
  },
  {
    "de": "Setzt euch bitte hin!",
    "lv": "Сідайте, будь ласка!",
    "level": "Sätze"
  },
  {
    "de": "Ben, komm bitte an die Tafel!",
    "lv": "Бене, вийди, будь ласка, до дошки!",
    "level": "Sätze"
  },
  {
    "de": "Schlagt bitte die Lehrbücher auf!",
    "lv": "Розгорніть, будь ласка, підручники!",
    "level": "Sätze"
  },
  {
    "de": "Geht bitte in die Sporthalle!",
    "lv": "Ідіть, будь ласка, до спортивної зали!",
    "level": "Sätze"
  },
  {
    "de": "Schläfst du noch?",
    "lv": "Ти ще спиш?",
    "level": "Sätze"
  },
  {
    "de": "Schlafen Sie noch?",
    "lv": "Ви ще спите?",
    "level": "Sätze"
  },
  {
    "de": "Er ist fest eingeschlafen.",
    "lv": "Він міцно заснув.",
    "level": "Sätze"
  },
  {
    "de": "Wecke ihn bitte auf, es ist schon spät!",
    "lv": "Розбуди його, будь ласка, уже пізно!",
    "level": "Sätze"
  },
  {
    "de": "Es tut mir sehr leid!",
    "lv": "Мені дуже шкода!",
    "level": "Sätze"
  },
  {
    "de": "Vielen Dank!",
    "lv": "Щиро дякую!",
    "level": "Sätze"
  },
  {
    "de": "Finn, fang bitte an!",
    "lv": "Фінне, починай, будь ласка!",
    "level": "Sätze"
  },
  {
    "de": "Lest bitte mit!",
    "lv": "Читайте, будь ласка, разом зі мною!",
    "level": "Sätze"
  },
  {
    "de": "Emma, schau bitte nicht aus dem Fenster!",
    "lv": "Еммо, не дивися, будь ласка, у вікно!",
    "level": "Sätze"
  },
  {
    "de": "Jonas, bring bitte die Hefte!",
    "lv": "Йонасе, принеси, будь ласка, зошити!",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte zurück an deinen Platz!",
    "lv": "Повернися, будь ласка, на своє місце!",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb acht.",
    "lv": "Зараз пів на восьму.",
    "level": "Sätze"
  },
  {
    "de": "Wann wachst du gewöhnlich auf?",
    "lv": "Коли ти зазвичай прокидаєшся?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe gleich auf.",
    "lv": "Я зараз устану.",
    "level": "Sätze"
  },
  {
    "de": "Steh auf, Hanna, es klingelt!",
    "lv": "Вставай, Ганно, дзвонить будильник! • Вставай, Ганно, дзвонять у двері!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich noch fünf Minuten schlafen!",
    "lv": "Дай мені поспати ще п’ять хвилин!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss nicht, das Zimmer zu lüften!",
    "lv": "Не забудь провітрити кімнату!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist das Handtuch?",
    "lv": "Де рушник?",
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
    "lv": "Одягайся, будь ласка, швидко!",
    "level": "Sätze"
  },
  {
    "de": "Kleide dich wärmer an, draußen ist es kühl.",
    "lv": "Одягнися тепліше, надворі прохолодно.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, wie geht es dir?",
    "lv": "Доброго ранку, як у тебе справи?",
    "level": "Sätze"
  },
  {
    "de": "Mir geht es gut, danke.",
    "lv": "У мене все добре, дякую.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es Neues?",
    "lv": "Що нового?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein Chaos hier!",
    "lv": "Який тут безлад!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich beim Aufräumen helfen?",
    "lv": "Можна допомогти з прибиранням?",
    "level": "Sätze"
  },
  {
    "de": "Was trinkst du morgens, Kaffee oder Tee?",
    "lv": "Що ти п’єш зранку, каву чи чай?",
    "level": "Sätze"
  },
  {
    "de": "Gewöhnlich trinke ich morgens eine Tasse Kaffee.",
    "lv": "Зазвичай зранку я випиваю чашку кави.",
    "level": "Sätze"
  },
  {
    "de": "Am liebsten trinke ich schwarzen Kaffee.",
    "lv": "Найбільше я люблю чорну каву.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, hast du gut geschlafen?",
    "lv": "Доброго ранку, ти добре спав?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin noch sehr müde.",
    "lv": "Я ще дуже втомлений.",
    "level": "Sätze"
  },
  {
    "de": "Willst du Kaffee oder Milch?",
    "lv": "Хочеш кави чи молока?",
    "level": "Sätze"
  },
  {
    "de": "Gib mir bitte ein Brötchen mit Käse.",
    "lv": "Дай мені, будь ласка, булочку із сиром.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss jetzt los!",
    "lv": "Мені вже треба йти!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss dein Frühstück nicht!",
    "lv": "Не забудь сніданок!",
    "level": "Sätze"
  },
  {
    "de": "Klara, deck bitte den Tisch!",
    "lv": "Кларо, накрий, будь ласка, на стіл!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss die Servietten nicht!",
    "lv": "Не забудь серветки!",
    "level": "Sätze"
  },
  {
    "de": "Wann esst ihr zu Mittag?",
    "lv": "Коли ви обідаєте?",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit zu essen.",
    "lv": "Час їсти.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es heute zu Mittag?",
    "lv": "Що сьогодні на обід?",
    "level": "Sätze"
  },
  {
    "de": "Wie schmeckt dir die Suppe?",
    "lv": "Як тобі суп?",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt ist sie etwas zu salzig.",
    "lv": "Чесно кажучи, він трохи пересолений.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dir ein Stück Brot geben?",
    "lv": "Можна дати тобі шматок хліба?",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich habe schon.",
    "lv": "Дякую, у мене вже є.",
    "level": "Sätze"
  },
  {
    "de": "Das Fleisch schmeckt ausgezeichnet.",
    "lv": "М’ясо чудове на смак.",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich bin schon satt.",
    "lv": "Дякую, я вже наївся.",
    "level": "Sätze"
  },
  {
    "de": "Heute haben wir Besuch.",
    "lv": "Сьогодні в нас гості.",
    "level": "Sätze"
  },
  {
    "de": "Bist du heute Abend frei?",
    "lv": "Ти сьогодні ввечері вільний?",
    "level": "Sätze"
  },
  {
    "de": "Komm doch heute zum Mittagessen vorbei!",
    "lv": "Заходь же сьогодні до нас на обід!",
    "level": "Sätze"
  },
  {
    "de": "Setzen wir uns an den Tisch.",
    "lv": "Сядьмо за стіл.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, bedien dich!",
    "lv": "Будь ласка, пригощайся!",
    "level": "Sätze"
  },
  {
    "de": "Stört dich das Rauchen?",
    "lv": "Тобі заважає куріння?",
    "level": "Sätze"
  },
  {
    "de": "Danke für die nette Aufnahme!",
    "lv": "Дякую за теплий прийом!",
    "level": "Sätze"
  },
  {
    "de": "Wann gehst du ins Bett?",
    "lv": "Коли ти лягаєш спати?",
    "level": "Sätze"
  },
  {
    "de": "Wenn ich von der Arbeit komme, bin ich immer müde.",
    "lv": "Коли я приходжу з роботи, я завжди втомлений.",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, ins Bett zu gehen.",
    "lv": "Час лягати спати.",
    "level": "Sätze"
  },
  {
    "de": "Es ist schönes Wetter.",
    "lv": "Гарна погода.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mit mir spazieren gehen?",
    "lv": "Хочеш піти зі мною погуляти?",
    "level": "Sätze"
  },
  {
    "de": "Sieh mal, es wird gleich regnen.",
    "lv": "Подивися, зараз піде дощ.",
    "level": "Sätze"
  },
  {
    "de": "Nimm den Regenschirm mit!",
    "lv": "Візьми із собою парасольку!",
    "level": "Sätze"
  },
  {
    "de": "Es regnet.",
    "lv": "Іде дощ.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin schon ganz nass.",
    "lv": "Я вже весь промок.",
    "level": "Sätze"
  },
  {
    "de": "Glaubst du, dass es den ganzen Tag regnen wird?",
    "lv": "Ти думаєш, що дощ ітиме цілий день?",
    "level": "Sätze"
  },
  {
    "de": "Es hört auf zu regnen.",
    "lv": "Дощ ущухає.",
    "level": "Sätze"
  },
  {
    "de": "Die Sonne scheint wieder.",
    "lv": "Знову світить сонце.",
    "level": "Sätze"
  },
  {
    "de": "Es ist sehr warm.",
    "lv": "Дуже тепло.",
    "level": "Sätze"
  },
  {
    "de": "Es sieht nach Regen aus.",
    "lv": "Схоже, буде дощ.",
    "level": "Sätze"
  },
  {
    "de": "Wir bekommen gleich ein Gewitter.",
    "lv": "Зараз почнеться гроза.",
    "level": "Sätze"
  },
  {
    "de": "Das Gewitter zieht vorüber.",
    "lv": "Гроза минає.",
    "level": "Sätze"
  },
  {
    "de": "Die Wolken verziehen sich.",
    "lv": "Хмари розходяться.",
    "level": "Sätze"
  },
  {
    "de": "Siehst du den Regenbogen?",
    "lv": "Ти бачиш веселку?",
    "level": "Sätze"
  },
  {
    "de": "Der Winter ist da, es hat geschneit.",
    "lv": "Настала зима, випав сніг.",
    "level": "Sätze"
  },
  {
    "de": "Es schneit.",
    "lv": "Іде сніг.",
    "level": "Sätze"
  },
  {
    "de": "Wie schön ist es im Wald im Winter!",
    "lv": "Як гарно взимку в лісі!",
    "level": "Sätze"
  },
  {
    "de": "Mir ist kalt, ich friere.",
    "lv": "Мені холодно, я мерзну.",
    "level": "Sätze"
  },
  {
    "de": "Draußen ist Glatteis, pass auf!",
    "lv": "Надворі ожеледиця, будь обережний!",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir auf die Eisbahn gehen?",
    "lv": "Підемо на ковзанку?",
    "level": "Sätze"
  },
  {
    "de": "Zieh die Jacke an, du kannst dich erkälten.",
    "lv": "Одягни куртку, ти можеш застудитися.",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb sieben.",
    "lv": "Зараз пів на сьому.",
    "level": "Sätze"
  },
  {
    "de": "Meine Uhr geht fünf Minuten vor.",
    "lv": "Мій годинник поспішає на п’ять хвилин.",
    "level": "Sätze"
  },
  {
    "de": "Weck mich morgen früh um sieben Uhr!",
    "lv": "Розбуди мене завтра о сьомій годині ранку!",
    "level": "Sätze"
  },
  {
    "de": "Was ist heute für ein Datum?",
    "lv": "Яке сьогодні число?",
    "level": "Sätze"
  },
  {
    "de": "Heute ist der elfte Juli.",
    "lv": "Сьогодні одинадцяте липня.",
    "level": "Sätze"
  },
  {
    "de": "Was machst du gewöhnlich am Abend?",
    "lv": "Що ти зазвичай робиш увечері?",
    "level": "Sätze"
  },
  {
    "de": "Es ist schon lange her, dass wir uns gesehen haben.",
    "lv": "Ми вже давно не бачилися.",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es dir?",
    "lv": "Як у тебе справи?",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, ich möchte etwas mit dir besprechen.",
    "lv": "Вибач, я хотів би дещо з тобою обговорити.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir spazieren!",
    "lv": "Ходімо гуляти!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Lust, mit mir in den Park zu gehen?",
    "lv": "Хочеш піти зі мною до парку?",
    "level": "Sätze"
  },
  {
    "de": "Ich komme, um dich zum Spaziergang abzuholen.",
    "lv": "Я прийшов, щоб покликати тебе на прогулянку.",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte etwas langsamer, ich kann dir nicht folgen!",
    "lv": "Іди, будь ласка, трохи повільніше, я не встигаю за тобою!",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zum ersten Mal in dieser Gegend.",
    "lv": "Я вперше в цих місцях.",
    "level": "Sätze"
  },
  {
    "de": "Ruhen wir uns ein wenig aus.",
    "lv": "Трохи відпочиньмо.",
    "level": "Sätze"
  },
  {
    "de": "Jetzt können wir zurückgehen.",
    "lv": "Тепер ми можемо повертатися.",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt bin ich ziemlich müde.",
    "lv": "Чесно кажучи, я досить утомлений.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, wo ist die nächste U-Bahn-Station?",
    "lv": "Вибач, де найближча станція метро?",
    "level": "Sätze"
  },
  {
    "de": "Welcher ist der kürzeste Weg?",
    "lv": "Яка дорога найкоротша?",
    "level": "Sätze"
  },
  {
    "de": "Geh hier die zweite Straße links und dann immer geradeaus.",
    "lv": "Тут поверни на другу вулицю ліворуч, а потім іди весь час прямо.",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich am schnellsten zum Bahnhof?",
    "lv": "Як мені найшвидше дістатися до вокзалу?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe vor, morgen zu verreisen.",
    "lv": "Я збираюся завтра поїхати.",
    "level": "Sätze"
  },
  {
    "de": "Wohin willst du fahren?",
    "lv": "Куди ти хочеш поїхати?",
    "level": "Sätze"
  },
  {
    "de": "Reist du geschäftlich oder privat?",
    "lv": "Ти їдеш у службових справах чи в особистих?",
    "level": "Sätze"
  },
  {
    "de": "Finn fährt bis Berlin mit, dann geht er ans Meer.",
    "lv": "Фінн їде з нами до Берліна, а потім вирушить на море.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt das Schiff ab?",
    "lv": "Коли відпливає корабель?",
    "level": "Sätze"
  },
  {
    "de": "In einer halben Stunde.",
    "lv": "За пів години.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich noch eine Kabine bekommen?",
    "lv": "Чи можу я ще отримати каюту?",
    "level": "Sätze"
  },
  {
    "de": "Vergiss deinen Pass nicht!",
    "lv": "Не забудь паспорт!",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, den Koffer zu packen.",
    "lv": "Час пакувати валізу.",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt um halb sieben ab.",
    "lv": "Потяг відходить о пів на сьому.",
    "level": "Sätze"
  },
  {
    "de": "Hol mir bitte ein Taxi, ich verpasse sonst den Zug!",
    "lv": "Виклич мені, будь ласка, таксі, бо я запізнюся на потяг!",
    "level": "Sätze"
  },
  {
    "de": "Fahr bitte zum Bahnhof!",
    "lv": "Їдь, будь ласка, до вокзалу!",
    "level": "Sätze"
  },
  {
    "de": "Ich muss mich beeilen.",
    "lv": "Мені треба поспішати.",
    "level": "Sätze"
  },
  {
    "de": "Ist der Schalter schon offen?",
    "lv": "Каса вже відчинена?",
    "level": "Sätze"
  },
  {
    "de": "Eine Fahrkarte nach Köln, bitte.",
    "lv": "Один квиток до Кельна, будь ласка.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt der Zug ab?",
    "lv": "Коли відходить потяг?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt gleich ab.",
    "lv": "Потяг зараз відходить.",
    "level": "Sätze"
  },
  {
    "de": "Muss ich in Koblenz umsteigen?",
    "lv": "Мені треба пересідати в Кобленці?",
    "level": "Sätze"
  },
  {
    "de": "Ja, dort musst du umsteigen.",
    "lv": "Так, там тобі треба пересісти.",
    "level": "Sätze"
  },
  {
    "de": "Ist dieser Platz frei?",
    "lv": "Це місце вільне?",
    "level": "Sätze"
  },
  {
    "de": "Nein, hier sitzt niemand.",
    "lv": "Ні, тут ніхто не сидить.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der Bahnsteigkartenautomat?",
    "lv": "Де автомат для перонних квитків?",
    "level": "Sätze"
  },
  {
    "de": "Stell mein Handgepäck ins Gepäcknetz.",
    "lv": "Поклади мою ручну поклажу на багажну полицю.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das Fenster aufmachen?",
    "lv": "Можна мені відчинити вікно?",
    "level": "Sätze"
  },
  {
    "de": "Es zieht, schließ bitte das Fenster!",
    "lv": "Протяг, зачини, будь ласка, вікно!",
    "level": "Sätze"
  },
  {
    "de": "Welche ist die nächste Station?",
    "lv": "Яка наступна станція?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange hält der Zug?",
    "lv": "Скільки часу стоїть потяг?",
    "level": "Sätze"
  },
  {
    "de": "Wo muss ich umsteigen?",
    "lv": "Де мені треба пересідати?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug hat Verspätung.",
    "lv": "Потяг запізнюється.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Wagen ist für Nichtraucher.",
    "lv": "Цей вагон для некурців.",
    "level": "Sätze"
  },
  {
    "de": "Wir fahren jetzt über die Grenze.",
    "lv": "Зараз ми перетинаємо кордон.",
    "level": "Sätze"
  },
  {
    "de": "Hast du etwas zu verzollen?",
    "lv": "У тебе є що декларувати?",
    "level": "Sätze"
  },
  {
    "de": "Wir sind in Berlin angekommen.",
    "lv": "Ми приїхали до Берліна.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir ein gutes Hotel empfehlen?",
    "lv": "Ти можеш порадити мені добрий готель?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie freie Zimmer?",
    "lv": "У вас є вільні номери?",
    "level": "Sätze"
  },
  {
    "de": "Ein Zimmer mit zwei Betten, bitte.",
    "lv": "Номер із двома ліжками, будь ласка.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Zimmer pro Nacht?",
    "lv": "Скільки коштує номер за ніч?",
    "level": "Sätze"
  },
  {
    "de": "Morgen reise ich ab. Weck mich um sieben Uhr!",
    "lv": "Завтра я від’їжджаю. Розбуди мене о сьомій годині!",
    "level": "Sätze"
  },
  {
    "de": "Die Rechnung, bitte!",
    "lv": "Рахунок, будь ласка!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Stadtbibliothek?",
    "lv": "Де міська бібліотека?",
    "level": "Sätze"
  },
  {
    "de": "Wann hat das Museum geöffnet?",
    "lv": "Коли працює музей?",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir ins Museum gehen?",
    "lv": "Підемо до музею?",
    "level": "Sätze"
  },
  {
    "de": "Fahren wir mit dem Bus oder der U-Bahn?",
    "lv": "Поїдемо автобусом чи метро?",
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
    "lv": "Офіціанте, меню, будь ласка!",
    "level": "Sätze"
  },
  {
    "de": "Ist der Fisch frisch?",
    "lv": "Риба свіжа?",
    "level": "Sätze"
  },
  {
    "de": "Das schmeckt ausgezeichnet!",
    "lv": "Це надзвичайно смачно!",
    "level": "Sätze"
  },
  {
    "de": "Kellner, zahlen bitte!",
    "lv": "Офіціанте, рахунок, будь ласка!",
    "level": "Sätze"
  },
  {
    "de": "Ich gehe ins Café einen Kaffee trinken.",
    "lv": "Я йду в кафе випити кави.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mitkommen?",
    "lv": "Хочеш піти зі мною?",
    "level": "Sätze"
  },
  {
    "de": "Eine Tasse Kaffee mit Milch, bitte!",
    "lv": "Чашку кави з молоком, будь ласка!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneller, ich habe es eilig!",
    "lv": "Швидше, будь ласка, я поспішаю!",
    "level": "Sätze"
  },
  {
    "de": "Lass deinen Kaffee nicht kalt werden!",
    "lv": "Не дай своїй каві вихолонути!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie etwas Erfrischendes?",
    "lv": "У вас є щось освіжальне?",
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
    "lv": "Мені треба негайно йому написати.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der nächste Briefkasten?",
    "lv": "Де найближча поштова скринька?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Post?",
    "lv": "Де пошта?",
    "level": "Sätze"
  },
  {
    "de": "Erinnere mich morgen daran, zu schreiben!",
    "lv": "Нагадай мені завтра написати!",
    "level": "Sätze"
  },
  {
    "de": "Werfen Sie bitte diesen Brief in den Briefkasten.",
    "lv": "Киньте, будь ласка, цей лист у поштову скриньку.",
    "level": "Sätze"
  },
  {
    "de": "Hallo, hier spricht Emma.",
    "lv": "Алло, це Емма.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich dich später anrufen?",
    "lv": "Можна мені подзвонити тобі пізніше?",
    "level": "Sätze"
  },
  {
    "de": "Muss ich lange warten?",
    "lv": "Мені доведеться довго чекати?",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneiden Sie mir die Haare.",
    "lv": "Будь ласка, підстрижіть мене.",
    "level": "Sätze"
  },
  {
    "de": "Hinten bitte nicht zu kurz.",
    "lv": "Ззаду, будь ласка, не надто коротко.",
    "level": "Sätze"
  },
  {
    "de": "Wann beginnt die Vorstellung?",
    "lv": "Коли починається вистава?",
    "level": "Sätze"
  },
  {
    "de": "Es fängt um halb acht an.",
    "lv": "Вона починається о пів на восьму.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind ausverkauft.",
    "lv": "Усі місця розпродано.",
    "level": "Sätze"
  },
  {
    "de": "Drei Karten, bitte!",
    "lv": "Три квитки, будь ласка!",
    "level": "Sätze"
  },
  {
    "de": "Wir lassen die Jacken in der Garderobe.",
    "lv": "Ми залишимо куртки в гардеробі.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schnell, der Vorhang geht gleich auf!",
    "lv": "Швидше, будь ласка, завіса зараз підніметься!",
    "level": "Sätze"
  },
  {
    "de": "Der Vorhang fällt.",
    "lv": "Завіса опускається.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dich zum Tanz bitten?",
    "lv": "Можна запросити тебе на танець?",
    "level": "Sätze"
  },
  {
    "de": "Wann ist eure Hochzeit?",
    "lv": "Коли ваше весілля?",
    "level": "Sätze"
  },
  {
    "de": "Ich suche eine Wohnung.",
    "lv": "Я шукаю квартиру.",
    "level": "Sätze"
  },
  {
    "de": "Ist in diesem Haus eine Wohnung frei?",
    "lv": "У цьому будинку є вільна квартира?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet die Miete?",
    "lv": "Скільки коштує оренда?",
    "level": "Sätze"
  },
  {
    "de": "Die Wohnung hat drei Zimmer und eine Küche.",
    "lv": "У квартирі три кімнати й кухня.",
    "level": "Sätze"
  },
  {
    "de": "Heute ziehen wir um.",
    "lv": "Сьогодні ми переїжджаємо.",
    "level": "Sätze"
  },
  {
    "de": "Mia, pack die Sachen bitte in Kisten!",
    "lv": "Міє, склади, будь ласка, речі в коробки!",
    "level": "Sätze"
  },
  {
    "de": "Hast du alles eingepackt?",
    "lv": "Ти все спакував?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe mit meinem Freund in Kontakt.",
    "lv": "Я підтримую зв’язок зі своїм другом.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir ins Theater?",
    "lv": "Підемо до театру?",
    "level": "Sätze"
  },
  {
    "de": "Ist alles eingeladen?",
    "lv": "Усе завантажено?",
    "level": "Sätze"
  },
  {
    "de": "Welch schöne Aussicht!",
    "lv": "Який гарний краєвид!",
    "level": "Sätze"
  },
  {
    "de": "Nun können wir alles wieder aufräumen.",
    "lv": "Тепер ми можемо знову все прибрати.",
    "level": "Sätze"
  },
  {
    "de": "Wie viele Zimmer habt ihr?",
    "lv": "Скільки у вас кімнат?",
    "level": "Sätze"
  },
  {
    "de": "Im Sommer fahre ich ans Meer.",
    "lv": "Улітку я поїду на море.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du schwimmen?",
    "lv": "Ти вмієш плавати?",
    "level": "Sätze"
  },
  {
    "de": "Schwimm nicht zu weit hinaus!",
    "lv": "Не запливай надто далеко!",
    "level": "Sätze"
  },
  {
    "de": "Badest du jeden Tag?",
    "lv": "Ти купаєшся щодня?",
    "level": "Sätze"
  },
  {
    "de": "Bei schönem Wetter gehe ich angeln.",
    "lv": "У гарну погоду я ходжу на риболовлю.",
    "level": "Sätze"
  },
  {
    "de": "Wie sieht er aus?",
    "lv": "Який він на вигляд?",
    "level": "Sätze"
  },
  {
    "de": "Er hat sich aber recht verändert.",
    "lv": "Він і справді неабияк змінився.",
    "level": "Sätze"
  },
  {
    "de": "Wie ist er als Mensch?",
    "lv": "Який він як людина?",
    "level": "Sätze"
  },
  {
    "de": "Er ist immer nett und freundlich.",
    "lv": "Він завжди милий і привітний.",
    "level": "Sätze"
  },
  {
    "de": "Ich fühle mich nicht wohl.",
    "lv": "Я погано почуваюся.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe starke Kopfschmerzen.",
    "lv": "У мене сильно болить голова.",
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
    "lv": "У мене паморочиться голова.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Arzt gehen.",
    "lv": "Мені треба піти до лікаря.",
    "level": "Sätze"
  },
  {
    "de": "Leg dich ins Bett!",
    "lv": "Лягай у ліжко!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Fieber?",
    "lv": "У тебе температура?",
    "level": "Sätze"
  },
  {
    "de": "Gestern hatte ich erhöhte Temperatur.",
    "lv": "Учора в мене була підвищена температура.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Zahnschmerzen.",
    "lv": "У мене болить зуб.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Zahnarzt gehen.",
    "lv": "Мені треба піти до зубного лікаря.",
    "level": "Sätze"
  },
  {
    "de": "Weißt du, dass Finn krank ist?",
    "lv": "Ти знаєш, що Фінн хворий?",
    "level": "Sätze"
  },
  {
    "de": "Laut Arzt wird er bald wieder gesund.",
    "lv": "За словами лікаря, він скоро одужає.",
    "level": "Sätze"
  },
  {
    "de": "Ich will meine Wohnung neu möblieren.",
    "lv": "Я хочу заново умеблювати свою квартиру.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das auf Raten kaufen?",
    "lv": "Чи можу я купити це в розстрочку?",
    "level": "Sätze"
  },
  {
    "de": "Bleib im Bett, bis es dir besser geht!",
    "lv": "Залишайся в ліжку, поки тобі не стане краще!",
    "level": "Sätze"
  },
  {
    "de": "Noah hat in zwei Wochen schwimmen gelernt.",
    "lv": "Ноа навчився плавати за два тижні.",
    "level": "Sätze"
  },
  {
    "de": "Sei mit dem Essen noch vorsichtig.",
    "lv": "Поки що будь обережний із їжею.",
    "level": "Sätze"
  },
  {
    "de": "Sprichst du Deutsch?",
    "lv": "Ти розмовляєш німецькою?",
    "level": "Sätze"
  },
  {
    "de": "Ja, ein bisschen.",
    "lv": "Так, трохи.",
    "level": "Sätze"
  },
  {
    "de": "Du sprichst ziemlich fließend.",
    "lv": "Ти розмовляєш досить вільно.",
    "level": "Sätze"
  },
  {
    "de": "Wo hast du Deutsch gelernt?",
    "lv": "Де ти вивчив німецьку?",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme seit einem Jahr Deutschstunden.",
    "lv": "Я вже рік відвідую уроки німецької мови.",
    "level": "Sätze"
  },
  {
    "de": "Ich suche immer Gelegenheit, Deutsch zu sprechen.",
    "lv": "Я завжди шукаю нагоди поговорити німецькою.",
    "level": "Sätze"
  },
  {
    "de": "Ist das Buch noch vorrätig?",
    "lv": "Ця книжка ще є в наявності?",
    "level": "Sätze"
  },
  {
    "de": "Das Buch ist leider ausverkauft.",
    "lv": "Книжку, на жаль, розпродано.",
    "level": "Sätze"
  },
  {
    "de": "Wann erscheint die neue Auflage?",
    "lv": "Коли вийде нове видання?",
    "level": "Sätze"
  },
  {
    "de": "Womit kann ich Ihnen helfen?",
    "lv": "Чим я можу вам допомогти?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie ganz frische Eier?",
    "lv": "У вас є зовсім свіжі яйця?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die?",
    "lv": "Скільки вони коштують?",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu teuer.",
    "lv": "Це надто дорого.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir ein halbes Kilo abwiegen?",
    "lv": "Чи не могли б ви зважити мені пів кілограма?",
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
    "lv": "Зважте мені, будь ласка, два кілограми.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch Karotten?",
    "lv": "У вас також є морква?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie gutes Rindfleisch?",
    "lv": "У вас є хороша яловичина?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir zwei Kilo Hackfleisch.",
    "lv": "Дайте мені два кілограми фаршу.",
    "level": "Sätze"
  },
  {
    "de": "Ein Laib Brot, bitte, aber nicht zu knusprig.",
    "lv": "Хлібину, будь ласка, але не надто хрустку.",
    "level": "Sätze"
  },
  {
    "de": "Das Brot ist frisch gebacken.",
    "lv": "Хліб свіжоспечений.",
    "level": "Sätze"
  },
  {
    "de": "Was für Obst haben Sie heute?",
    "lv": "Які фрукти у вас сьогодні є?",
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
    "lv": "Чи можете ви доставити мені все додому?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie Reis?",
    "lv": "У вас є рис?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir bitte ein Kilo Reis.",
    "lv": "Дайте мені, будь ласка, кілограм рису.",
    "level": "Sätze"
  },
  {
    "de": "Danke, diesmal nicht.",
    "lv": "Дякую, цього разу ні.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet dieser Teppich?",
    "lv": "Скільки коштує цей килим?",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Möbel in meine Wohnung liefern?",
    "lv": "Чи можете ви доставити меблі до моєї квартири?",
    "level": "Sätze"
  },
  {
    "de": "Bitte an der Kasse zahlen.",
    "lv": "Просимо оплачувати покупки на касі.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, machen Sie die Rechnung.",
    "lv": "Будь ласка, випишіть рахунок.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Meter?",
    "lv": "Скільки коштує метр?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Stoff gefällt mir.",
    "lv": "Мені подобається ця тканина.",
    "level": "Sätze"
  },
  {
    "de": "Schneiden Sie mir bitte drei Meter ab.",
    "lv": "Відріжте мені, будь ласка, три метри.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch andere Muster?",
    "lv": "У вас є й інші зразки?",
    "level": "Sätze"
  },
  {
    "de": "Diese Farbe gefällt mir nicht.",
    "lv": "Мені не подобається цей колір.",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir eine hellere.",
    "lv": "Дайте мені світліший.",
    "level": "Sätze"
  },
  {
    "de": "Was kosten diese Socken?",
    "lv": "Скільки коштують ці шкарпетки?",
    "level": "Sätze"
  },
  {
    "de": "Welche Handschuhe wünschen Sie?",
    "lv": "Які рукавички ви бажаєте?",
    "level": "Sätze"
  },
  {
    "de": "Die sind mir etwas zu eng.",
    "lv": "Вони мені трохи затісні.",
    "level": "Sätze"
  },
  {
    "de": "So, nun passen sie gut.",
    "lv": "Ну ось, тепер вони добре сидять.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir einen guten Schneider empfehlen?",
    "lv": "Ти можеш порадити мені доброго кравця?",
    "level": "Sätze"
  },
  {
    "de": "Ich will einen Anzug bestellen.",
    "lv": "Я хочу замовити костюм.",
    "level": "Sätze"
  },
  {
    "de": "Wann wird er fertig sein?",
    "lv": "Коли він буде готовий?",
    "level": "Sätze"
  },
  {
    "de": "Der Anzug sitzt gut.",
    "lv": "Костюм добре сидить.",
    "level": "Sätze"
  },
  {
    "de": "Die Hose ist zu lang.",
    "lv": "Штани надто довгі.",
    "level": "Sätze"
  },
  {
    "de": "Bitte reinigen und bügeln Sie ihn!",
    "lv": "Будь ласка, почистіть і випрасуйте його!",
    "level": "Sätze"
  },
  {
    "de": "Wann wird das Kleid fertig sein?",
    "lv": "Коли буде готова сукня?",
    "level": "Sätze"
  },
  {
    "de": "Die Schuhe sind zu eng.",
    "lv": "Туфлі надто тісні.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Schuhe heute reparieren?",
    "lv": "Чи можете ви полагодити туфлі сьогодні?",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich die Schuhe abholen?",
    "lv": "Коли я можу забрати туфлі?",
    "level": "Sätze"
  },
  {
    "de": "Meine Armbanduhr funktioniert nicht.",
    "lv": "Мій наручний годинник не працює.",
    "level": "Sätze"
  },
  {
    "de": "Sie geht fünf Minuten vor.",
    "lv": "Він поспішає на п’ять хвилин.",
    "level": "Sätze"
  },
  {
    "de": "Bist du kurzsichtig oder weitsichtig?",
    "lv": "Ти короткозорий чи далекозорий?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte eine Brille kaufen.",
    "lv": "Я хотів би купити окуляри.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie meine Brille reparieren?",
    "lv": "Чи можете ви полагодити мої окуляри?",
    "level": "Sätze"
  },
  {
    "de": "Das dauert nur eine Viertelstunde.",
    "lv": "Це триватиме лише чверть години.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist mir zu hoch.",
    "lv": "Ціна для мене зависока.",
    "level": "Sätze"
  },
  {
    "de": "Ich brauche zwei Fotos für meinen Pass.",
    "lv": "Мені потрібні дві фотографії для паспорта.",
    "level": "Sätze"
  },
  {
    "de": "Bitte packen Sie es ein und schicken Sie es mir nach Hause.",
    "lv": "Будь ласка, запакуйте це й надішліть мені додому.",
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
    "lv": "Сідайте, дивіться прямо в камеру й не рухайтеся!",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich das Probebild sehen?",
    "lv": "Коли я можу побачити пробний знімок?",
    "level": "Sätze"
  },
  {
    "de": "Wann sind die Fotos fertig?",
    "lv": "Коли будуть готові фотографії?",
    "level": "Sätze"
  },
  {
    "de": "Die Aufnahme ist gelungen.",
    "lv": "Знімок удався.",
    "level": "Sätze"
  },
  {
    "de": "Die Fotos sind gut geworden.",
    "lv": "Фотографії вийшли добре.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie das Foto auch vergrößern?",
    "lv": "Чи можете ви також збільшити фотографію?",
    "level": "Sätze"
  },
  {
    "de": "Sind diese Steine echt?",
    "lv": "Ці камені справжні?",
    "level": "Sätze"
  },
  {
    "de": "Ist das echtes Gold?",
    "lv": "Це справжнє золото?",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir bitte Trauringe.",
    "lv": "Покажіть мені, будь ласка, обручки.",
    "level": "Sätze"
  },
  {
    "de": "Der Ring ist mir etwas zu weit.",
    "lv": "Каблучка мені трохи завелика.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann ihn enger machen.",
    "lv": "Я можу її зменшити.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Ring passt mir.",
    "lv": "Ця каблучка мені якраз.",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir schöne Geschenkideen.",
    "lv": "Покажіть мені щось гарне на подарунок.",
    "level": "Sätze"
  },
  {
    "de": "Wie gefallen dir diese Ohrringe?",
    "lv": "Як тобі ці сережки?",
    "level": "Sätze"
  },
  {
    "de": "Diese Brosche ist wirklich schön.",
    "lv": "Ця брошка справді гарна.",
    "level": "Sätze"
  },
  {
    "de": "Der Stein ist ein Saphir.",
    "lv": "Цей камінь — сапфір.",
    "level": "Sätze"
  },
  {
    "de": "Das ist kein echter Stein, das ist Glas.",
    "lv": "Це не справжній камінь, це скло.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Armband kann ich Ihnen besonders empfehlen.",
    "lv": "Цей браслет я можу вам особливо порекомендувати.",
    "level": "Sätze"
  },
  {
    "de": "Es ist besonders schön gearbeitet.",
    "lv": "Він особливо майстерно зроблений.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist nicht hoch.",
    "lv": "Ціна невисока.",
    "level": "Sätze"
  },
  {
    "de": "Bekomme ich die Schachtel gratis?",
    "lv": "Чи отримаю я коробочку безкоштовно?",
    "level": "Sätze"
  },
  {
    "de": "Alle Schmuckstücke sind gestempelt.",
    "lv": "На всіх прикрасах є проба.",
    "level": "Sätze"
  },
  {
    "de": "Falls es meiner Frau nicht gefällt, kann ich es umtauschen?",
    "lv": "Якщо моїй дружині не сподобається, чи зможу я це обміняти?",
    "level": "Sätze"
  },
  {
    "de": "Natürlich, jederzeit.",
    "lv": "Звичайно, будь-коли.",
    "level": "Sätze"
  }
];

window.SENTENCE_ENTRIES = SENTENCE_ENTRIES;

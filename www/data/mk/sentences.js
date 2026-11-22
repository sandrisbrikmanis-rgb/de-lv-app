const SENTENCE_ENTRIES = [
  {
    "de": "Hüte dich davor!",
    "lv": "Чувај се од тоа!",
    "level": "Sätze"
  },
  {
    "de": "Wenn nichts dazwischenkommt.",
    "lv": "Ако ништо не се испречи. • Ако сѐ оди според планот.",
    "level": "Sätze"
  },
  {
    "de": "Das kann ich mir denken!",
    "lv": "Можам да си замислам!",
    "level": "Sätze"
  },
  {
    "de": "Ist er denn krank?",
    "lv": "Зар е болен?",
    "level": "Sätze"
  },
  {
    "de": "Was denn?",
    "lv": "Што тогаш?",
    "level": "Sätze"
  },
  {
    "de": "Desto mehr.",
    "lv": "Толку повеќе.",
    "level": "Sätze"
  },
  {
    "de": "Je mehr, desto besser.",
    "lv": "Колку повеќе, толку подобро.",
    "level": "Sätze"
  },
  {
    "de": "Alles deutet auf Regen.",
    "lv": "Сѐ укажува дека ќе врне.",
    "level": "Sätze"
  },
  {
    "de": "Damit ist mir wenig gedient.",
    "lv": "Од тоа немам голема корист.",
    "level": "Sätze"
  },
  {
    "de": "Er ist dienstlich verhindert.",
    "lv": "Не може да дојде поради службени обврски.",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie doch!",
    "lv": "Ајде, зборувајте!",
    "level": "Sätze"
  },
  {
    "de": "Es donnert.",
    "lv": "Грми.",
    "level": "Sätze"
  },
  {
    "de": "Doppelt so groß.",
    "lv": "Двојно поголем.",
    "level": "Sätze"
  },
  {
    "de": "Von dort.",
    "lv": "Оттаму.",
    "level": "Sätze"
  },
  {
    "de": "Die Zeit drängt.",
    "lv": "Времето истекува.",
    "level": "Sätze"
  },
  {
    "de": "Ihn drücken Sorgen.",
    "lv": "Го мачат грижи.",
    "level": "Sätze"
  },
  {
    "de": "Hast du das Buch durchgearbeitet?",
    "lv": "Ја проучи ли темелно книгата?",
    "level": "Sätze"
  },
  {
    "de": "Kein Durchgang!",
    "lv": "Забрането минување!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich Sie bitten?",
    "lv": "Може ли да Ве замолам?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin durstig.",
    "lv": "Жеден сум.",
    "level": "Sätze"
  },
  {
    "de": "Eben das meine ich.",
    "lv": "Токму на тоа мислам.",
    "level": "Sätze"
  },
  {
    "de": "Es ist ganz egal.",
    "lv": "Сосема е сеедно.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie eigentlich?",
    "lv": "Што всушност сакате?",
    "level": "Sätze"
  },
  {
    "de": "Eilt es mit dieser Sache?",
    "lv": "Дали е итна оваа работа?",
    "level": "Sätze"
  },
  {
    "de": "Eilt sehr!",
    "lv": "Многу итно!",
    "level": "Sätze"
  },
  {
    "de": "Ich habe es eilig.",
    "lv": "Брзам.",
    "level": "Sätze"
  },
  {
    "de": "Du bildest dir nur ein, krank zu sein.",
    "lv": "Само ти се чини дека си болен.",
    "level": "Sätze"
  },
  {
    "de": "Was fällt dir ein?",
    "lv": "Што си дозволуваш? • Што ти паѓа на ум?",
    "level": "Sätze"
  },
  {
    "de": "Es war einmal.",
    "lv": "Си беше еднаш.",
    "level": "Sätze"
  },
  {
    "de": "Steigen Sie bitte ein!",
    "lv": "Качете се, Ве молам!",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie ein!",
    "lv": "Влезете!",
    "level": "Sätze"
  },
  {
    "de": "Einzelnes hat mir dort gefallen.",
    "lv": "Некои работи таму ми се допаднаа.",
    "level": "Sätze"
  },
  {
    "de": "Es empfiehlt sich.",
    "lv": "Се препорачува.",
    "level": "Sätze"
  },
  {
    "de": "Diese Flasche enthält Essig.",
    "lv": "Во ова шише има оцет.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldigen Sie bitte!",
    "lv": "Извинете, Ве молам!",
    "level": "Sätze"
  },
  {
    "de": "Entweder... oder...",
    "lv": "Или... или...",
    "level": "Sätze"
  },
  {
    "de": "Wer war der Erste?",
    "lv": "Кој беше прв?",
    "level": "Sätze"
  },
  {
    "de": "Wer fehlt heute?",
    "lv": "Кој отсуствува денес?",
    "level": "Sätze"
  },
  {
    "de": "Was fehlt dir?",
    "lv": "Што ти е?",
    "level": "Sätze"
  },
  {
    "de": "Wie heißen Sie?",
    "lv": "Како се викате?",
    "level": "Sätze"
  },
  {
    "de": "Was soll das heißen?",
    "lv": "Што треба да значи тоа?",
    "level": "Sätze"
  },
  {
    "de": "Bitte treten Sie näher heran!",
    "lv": "Ве молам, приближете се!",
    "level": "Sätze"
  },
  {
    "de": "Heraus mit der Sprache!",
    "lv": "Зборувај! • Раскажувај!",
    "level": "Sätze"
  },
  {
    "de": "im Herbst",
    "lv": "наесен",
    "level": "Sätze"
  },
  {
    "de": "Meine Herrschaften!",
    "lv": "Дами и господа!",
    "level": "Sätze"
  },
  {
    "de": "von heute an",
    "lv": "од денес натаму",
    "level": "Sätze"
  },
  {
    "de": "heute früh",
    "lv": "утрово",
    "level": "Sätze"
  },
  {
    "de": "heute Nacht",
    "lv": "ноќва",
    "level": "Sätze"
  },
  {
    "de": "Zu Hilfe!",
    "lv": "Помош!",
    "level": "Sätze"
  },
  {
    "de": "Ich lerne jeden Tag Deutsch.",
    "lv": "Секој ден учам германски.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das bitte wiederholen?",
    "lv": "Можеш ли, те молам, да го повториш тоа?",
    "level": "Sätze"
  },
  {
    "de": "Wir treffen uns am Bahnhof.",
    "lv": "Се среќаваме на железничката станица.",
    "level": "Sätze"
  },
  {
    "de": "Ich stimme dir teilweise zu.",
    "lv": "Делумно се согласувам со тебе.",
    "level": "Sätze"
  },
  {
    "de": "Diese Entscheidung hat weitreichende Folgen.",
    "lv": "Оваа одлука има далекусежни последици.",
    "level": "Sätze"
  },
  {
    "de": "Man sollte mehrere Perspektiven berücksichtigen.",
    "lv": "Би требало да се земат предвид повеќе гледишта.",
    "level": "Sätze"
  },
  {
    "de": "Könnten Sie das näher erläutern?",
    "lv": "Дали би можеле да го објасните тоа подетално?",
    "level": "Sätze"
  },
  {
    "de": "Was mich anbelangt,...",
    "lv": "Што се однесува до мене,...",
    "level": "Sätze"
  },
  {
    "de": "Wie alt sind Sie?",
    "lv": "Колку години имате?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zwanzig Jahre alt.",
    "lv": "Имам дваесет години.",
    "level": "Sätze"
  },
  {
    "de": "Von heute an.",
    "lv": "Од денес.",
    "level": "Sätze"
  },
  {
    "de": "Von jetzt an.",
    "lv": "Отсега натаму.",
    "level": "Sätze"
  },
  {
    "de": "Anders geht es nicht.",
    "lv": "Поинаку не може.",
    "level": "Sätze"
  },
  {
    "de": "Rufen Sie mich an.",
    "lv": "Јавете ми се.",
    "level": "Sätze"
  },
  {
    "de": "Bitte stellen Sie das Radio ab.",
    "lv": "Ве молам, исклучете го радиото.",
    "level": "Sätze"
  },
  {
    "de": "Achte bitte auf den Verkehr.",
    "lv": "Внимавај, те молам, на сообраќајот.",
    "level": "Sätze"
  },
  {
    "de": "Darauf musst du achten.",
    "lv": "На тоа мора да внимаваш.",
    "level": "Sätze"
  },
  {
    "de": "Heute mache ich es anders.",
    "lv": "Денес ќе го направам поинаку.",
    "level": "Sätze"
  },
  {
    "de": "Wir warten auf den Bus.",
    "lv": "Го чекаме автобусот.",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt allein.",
    "lv": "Живее сам.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Ausbildung absolviert.",
    "lv": "Ја завршив обуката. • Го завршив образованието.",
    "level": "Sätze"
  },
  {
    "de": "Ich warte den Regen ab.",
    "lv": "Ќе почекам да престане дождот.",
    "level": "Sätze"
  },
  {
    "de": "Er arbeitet in der Verkaufsabteilung.",
    "lv": "Работи во одделот за продажба.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin allergisch gegen Katzen.",
    "lv": "Алергичен сум на мачки.",
    "level": "Sätze"
  },
  {
    "de": "Andererseits verstehe ich ihn.",
    "lv": "Од друга страна, го разбирам.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Situation analysiert.",
    "lv": "Ја анализирав ситуацијата.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat meinen Vorschlag akzeptiert.",
    "lv": "Таа го прифати мојот предлог.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte das genauer analysieren.",
    "lv": "Би сакал да го анализирам ова подетално.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte den Vertrag ändern.",
    "lv": "Би сакал да го изменам договорот.",
    "level": "Sätze"
  },
  {
    "de": "Er ändert ständig seine Meinung.",
    "lv": "Постојано го менува мислењето.",
    "level": "Sätze"
  },
  {
    "de": "Ähnliche Probleme hatten wir schon früher.",
    "lv": "Слични проблеми сме имале и порано.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ahnung!",
    "lv": "Немам поим!",
    "level": "Sätze"
  },
  {
    "de": "Hör auf zu jammern.",
    "lv": "Престани да се жалиш.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Kleid ist akademisch gekleidet.",
    "lv": "Овој фустан е елегантен и класичен.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre gerne Akkordeonmusik.",
    "lv": "Сакам да слушам музика на хармоника.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das Gerät anklicken?",
    "lv": "Можеш ли да кликнеш на уредот?",
    "level": "Sätze"
  },
  {
    "de": "Bitte öffne die Datei und klicke darauf.",
    "lv": "Те молам, отвори ја датотеката и кликни на неа.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe einen Unfall gehabt.",
    "lv": "Имав несреќа.",
    "level": "Sätze"
  },
  {
    "de": "Wir laufen zum Bahnhof.",
    "lv": "Одиме пешки до станицата.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schalte den Fernseher an.",
    "lv": "Те молам, вклучи го телевизорот.",
    "level": "Sätze"
  },
  {
    "de": "Mein Computer ist abgestürzt.",
    "lv": "Компјутерот ми се сруши.",
    "level": "Sätze"
  },
  {
    "de": "Am Wochenende gehe ich angeln.",
    "lv": "За викендот ќе одам на риболов.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe den Anruf verpasst.",
    "lv": "Го пропуштив повикот.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mich später anrufen?",
    "lv": "Можеш ли да ми се јавиш подоцна?",
    "level": "Sätze"
  },
  {
    "de": "Bitte nimm meinen Vorschlag an.",
    "lv": "Те молам, прифати го мојот предлог.",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme dein Angebot an.",
    "lv": "Ја прифаќам твојата понуда.",
    "level": "Sätze"
  },
  {
    "de": "Er nahm die Einladung an.",
    "lv": "Ја прифати поканата.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Angst vor Spinnen.",
    "lv": "Се плашам од пајаци.",
    "level": "Sätze"
  },
  {
    "de": "Keine Angst, alles wird gut.",
    "lv": "Не се плаши, сѐ ќе биде добро.",
    "level": "Sätze"
  },
  {
    "de": "Anklang finden.",
    "lv": "Наидува на одзив. • Наидува на одобрување.",
    "level": "Sätze"
  },
  {
    "de": "Es kommt darauf an.",
    "lv": "Зависи.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Anlass.",
    "lv": "По овој повод.",
    "level": "Sätze"
  },
  {
    "de": "Nehmen wir an, dass...",
    "lv": "Да претпоставиме дека...",
    "level": "Sätze"
  },
  {
    "de": "Was hast du da angerichtet?",
    "lv": "Каков неред си направил?",
    "level": "Sätze"
  },
  {
    "de": "Bis ans Ende.",
    "lv": "До крај.",
    "level": "Sätze"
  },
  {
    "de": "Du glaubst mir anscheinend nicht.",
    "lv": "Изгледа дека не ми веруваш.",
    "level": "Sätze"
  },
  {
    "de": "Meiner Ansicht nach...",
    "lv": "Според мене...",
    "level": "Sätze"
  },
  {
    "de": "Stell dich nicht so an!",
    "lv": "Не претерувај толку!",
    "level": "Sätze"
  },
  {
    "de": "An die Arbeit gehen.",
    "lv": "Се фаќа за работа.",
    "level": "Sätze"
  },
  {
    "de": "Außer Atem sein.",
    "lv": "Без здив е.",
    "level": "Sätze"
  },
  {
    "de": "Guten Appetit!",
    "lv": "Пријатно!",
    "level": "Sätze"
  },
  {
    "de": "In einem Atemzug.",
    "lv": "Во еден здив.",
    "level": "Sätze"
  },
  {
    "de": "Auf jeden Fall.",
    "lv": "Во секој случај.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal war alles still.",
    "lv": "Одеднаш сѐ замолкна.",
    "level": "Sätze"
  },
  {
    "de": "Bitte mach die Tür auf!",
    "lv": "Отвори ја вратата, те молам!",
    "level": "Sätze"
  },
  {
    "de": "Er hat den Kredit aufgenommen.",
    "lv": "Зеде кредит.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen heute aufräumen.",
    "lv": "Денес мораме да средиме.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre jetzt auf.",
    "lv": "Сега престанувам.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schon auf.",
    "lv": "Веќе стана.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen das Treffen verschieben.",
    "lv": "Мораме да ја одложиме средбата.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat mich aufgeregt.",
    "lv": "Ме налути.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal.",
    "lv": "Одеднаш.",
    "level": "Sätze"
  },
  {
    "de": "Auf der Stelle.",
    "lv": "Веднаш.",
    "level": "Sätze"
  },
  {
    "de": "Für den Schaden aufkommen.",
    "lv": "Ја надоместува штетата.",
    "level": "Sätze"
  },
  {
    "de": "Bitte die Tür auf!",
    "lv": "Отворете ја вратата, Ве молам!",
    "level": "Sätze"
  },
  {
    "de": "Aufrecht sitzen.",
    "lv": "Седи исправено.",
    "level": "Sätze"
  },
  {
    "de": "Er ist auf.",
    "lv": "Стана.",
    "level": "Sätze"
  },
  {
    "de": "Alle Kräfte aufwenden.",
    "lv": "Ги вложува сите сили.",
    "level": "Sätze"
  },
  {
    "de": "Viel Mühe aufwenden.",
    "lv": "Вложува многу труд.",
    "level": "Sätze"
  },
  {
    "de": "Geh mir aus den Augen!",
    "lv": "Губи ми се од очи!",
    "level": "Sätze"
  },
  {
    "de": "Unter vier Augen.",
    "lv": "Насамо.",
    "level": "Sätze"
  },
  {
    "de": "Aus Mangel an Zeit.",
    "lv": "Поради недостиг на време.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Grunde.",
    "lv": "Од оваа причина.",
    "level": "Sätze"
  },
  {
    "de": "Alle außer dir.",
    "lv": "Сите освен тебе.",
    "level": "Sätze"
  },
  {
    "de": "Auf Äußerlichkeiten Wert legen.",
    "lv": "Му придава значење на надворешниот изглед.",
    "level": "Sätze"
  },
  {
    "de": "Im äußersten Fall.",
    "lv": "Во најлош случај.",
    "level": "Sätze"
  },
  {
    "de": "Äußerst wichtig.",
    "lv": "Исклучително важен.",
    "level": "Sätze"
  },
  {
    "de": "Aussicht auf die See.",
    "lv": "Поглед кон морето.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gute Aussichten.",
    "lv": "Има добри изгледи.",
    "level": "Sätze"
  },
  {
    "de": "Wie wird dieses Wort ausgesprochen?",
    "lv": "Како се изговара овој збор?",
    "level": "Sätze"
  },
  {
    "de": "Sein Beileid aussprechen.",
    "lv": "Го изразува своето сочувство.",
    "level": "Sätze"
  },
  {
    "de": "Wann wurden die Meisterschaftskämpfe ausgetragen?",
    "lv": "Кога се одржа првенството?",
    "level": "Sätze"
  },
  {
    "de": "Welchen Beruf üben Sie aus?",
    "lv": "Со што се занимавате?",
    "level": "Sätze"
  },
  {
    "de": "Einfluss ausüben.",
    "lv": "Врши влијание.",
    "level": "Sätze"
  },
  {
    "de": "Auswärts essen.",
    "lv": "Јаде надвор.",
    "level": "Sätze"
  },
  {
    "de": "Per Bahn.",
    "lv": "Со железница.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Bahn.",
    "lv": "Со воз.",
    "level": "Sätze"
  },
  {
    "de": "Möglichst bald.",
    "lv": "Што е можно поскоро.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist Angst und bange.",
    "lv": "Многу ми е страв.",
    "level": "Sätze"
  },
  {
    "de": "Auf die lange Bank schieben.",
    "lv": "Одлага. • Одолговлекува.",
    "level": "Sätze"
  },
  {
    "de": "Bar zahlen.",
    "lv": "Плаќа во готово.",
    "level": "Sätze"
  },
  {
    "de": "Erz bauen.",
    "lv": "Ископува руда.",
    "level": "Sätze"
  },
  {
    "de": "Mist bauen.",
    "lv": "Прави глупости.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin beauftragt.",
    "lv": "Задолжен сум.",
    "level": "Sätze"
  },
  {
    "de": "Nach Bedarf.",
    "lv": "По потреба.",
    "level": "Sätze"
  },
  {
    "de": "Ich bedauere ihn.",
    "lv": "Ми е жал за него.",
    "level": "Sätze"
  },
  {
    "de": "Was bedeutet dieses Wort?",
    "lv": "Што значи овој збор?",
    "level": "Sätze"
  },
  {
    "de": "Unter der Bedingung, dass...",
    "lv": "Под услов да...",
    "level": "Sätze"
  },
  {
    "de": "Sie sieht bedrückt aus.",
    "lv": "Изгледа потиштена.",
    "level": "Sätze"
  },
  {
    "de": "Hinweise befolgen.",
    "lv": "Се придржува до упатствата.",
    "level": "Sätze"
  },
  {
    "de": "Befehle befolgen.",
    "lv": "Извршува наредби.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Post befördern.",
    "lv": "Испраќа по пошта.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin begierig zu wissen.",
    "lv": "Многу сакам да знам.",
    "level": "Sätze"
  },
  {
    "de": "Zu Beginn.",
    "lv": "На почетокот.",
    "level": "Sätze"
  },
  {
    "de": "Am Beginn.",
    "lv": "Во почетокот.",
    "level": "Sätze"
  },
  {
    "de": "Bei Beginn.",
    "lv": "При почетокот.",
    "level": "Sätze"
  },
  {
    "de": "In Begleitung.",
    "lv": "Во придружба.",
    "level": "Sätze"
  },
  {
    "de": "Mit seiner Begleitung.",
    "lv": "Со својот придружник.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schwer von Begriff.",
    "lv": "Бавно сфаќа. • Бавно размислува.",
    "level": "Sätze"
  },
  {
    "de": "Im Gedächtnis behalten.",
    "lv": "Запомнува. • Чува во сеќавањето.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tisch.",
    "lv": "На маса.",
    "level": "Sätze"
  },
  {
    "de": "Bei Sinnen sein.",
    "lv": "При здрав разум е.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tage.",
    "lv": "Преку ден.",
    "level": "Sätze"
  },
  {
    "de": "Bei weitem nicht so.",
    "lv": "Ни оддалеку не толку.",
    "level": "Sätze"
  },
  {
    "de": "Alle beide.",
    "lv": "И двајцата.",
    "level": "Sätze"
  },
  {
    "de": "Stürmischer Beifall brach los.",
    "lv": "Избувна бурен аплауз.",
    "level": "Sätze"
  },
  {
    "de": "Beifall finden.",
    "lv": "Наидува на одобрување.",
    "level": "Sätze"
  },
  {
    "de": "Beileid aussprechen.",
    "lv": "Изразува сочувство.",
    "level": "Sätze"
  },
  {
    "de": "Auf eigenen Beinen stehen.",
    "lv": "Стои на свои нозе.",
    "level": "Sätze"
  },
  {
    "de": "Zum Beispiel.",
    "lv": "На пример.",
    "level": "Sätze"
  },
  {
    "de": "Beistand leisten.",
    "lv": "Помага. • Дава помош.",
    "level": "Sätze"
  },
  {
    "de": "Beitrag leisten.",
    "lv": "Дава свој придонес.",
    "level": "Sätze"
  },
  {
    "de": "Jemandes Bekanntschaft machen.",
    "lv": "Се запознава со некого.",
    "level": "Sätze"
  },
  {
    "de": "Bekanntschaft anknüpfen.",
    "lv": "Се запознава. • Воспоставува контакт.",
    "level": "Sätze"
  },
  {
    "de": "Belegte Brötchen.",
    "lv": "Сендвичи.",
    "level": "Sätze"
  },
  {
    "de": "Nach Ihrem Belieben.",
    "lv": "По Ваша желба.",
    "level": "Sätze"
  },
  {
    "de": "Zu jeder beliebigen Zeit.",
    "lv": "Во секое време.",
    "level": "Sätze"
  },
  {
    "de": "Schweigen beobachten.",
    "lv": "Чува тишина.",
    "level": "Sätze"
  },
  {
    "de": "Zur Bequemlichkeit.",
    "lv": "За удобност.",
    "level": "Sätze"
  },
  {
    "de": "Bereit sein.",
    "lv": "Подготвен е. • Согласен е.",
    "level": "Sätze"
  },
  {
    "de": "Unfallopfer bergen.",
    "lv": "Спасува настрадани во несреќа.",
    "level": "Sätze"
  },
  {
    "de": "Bericht erstatten.",
    "lv": "Известува. • Поднесува извештај.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind besetzt.",
    "lv": "Сите места се зафатени.",
    "level": "Sätze"
  },
  {
    "de": "Neue Besen kehren gut.",
    "lv": "Нова метла чисто мете.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt ein Haus.",
    "lv": "Поседува куќа.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt viel Mut.",
    "lv": "Има многу храброст.",
    "level": "Sätze"
  },
  {
    "de": "Desto besser.",
    "lv": "Толку подобро.",
    "level": "Sätze"
  },
  {
    "de": "Gute Besserung!",
    "lv": "Брзо оздравување!",
    "level": "Sätze"
  },
  {
    "de": "Beim besten Willen.",
    "lv": "И покрај најдобрата волја.",
    "level": "Sätze"
  },
  {
    "de": "Am besten.",
    "lv": "Најдобро.",
    "level": "Sätze"
  },
  {
    "de": "Es besteht Zweifel.",
    "lv": "Постои сомнеж.",
    "level": "Sätze"
  },
  {
    "de": "Seine Aufgabe besteht darin...",
    "lv": "Неговата задача се состои во тоа...",
    "level": "Sätze"
  },
  {
    "de": "Grüße bestellen.",
    "lv": "Пренесува поздрави.",
    "level": "Sätze"
  },
  {
    "de": "Ganz bestimmt.",
    "lv": "Сосема сигурно.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch kommen.",
    "lv": "Доаѓа на гости.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch sein.",
    "lv": "На гости е. • Гостува.",
    "level": "Sätze"
  },
  {
    "de": "Oft Konzerte besuchen.",
    "lv": "Често оди на концерти.",
    "level": "Sätze"
  },
  {
    "de": "Welche Schule hat er besucht?",
    "lv": "Во кое училиште учел?",
    "level": "Sätze"
  },
  {
    "de": "In Betracht ziehen.",
    "lv": "Зема предвид. • Размислува.",
    "level": "Sätze"
  },
  {
    "de": "Außer Betracht lassen.",
    "lv": "Не зема предвид.",
    "level": "Sätze"
  },
  {
    "de": "Er betreibt ein Hotel.",
    "lv": "Води хотел.",
    "level": "Sätze"
  },
  {
    "de": "Alle beiden.",
    "lv": "И двајцата.",
    "level": "Sätze"
  },
  {
    "de": "Alles bezahlen.",
    "lv": "Плаќа сѐ.",
    "level": "Sätze"
  },
  {
    "de": "Bezüglich auf etwas.",
    "lv": "Во однос на нешто.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön.",
    "lv": "Молам. • Повелете.",
    "level": "Sätze"
  },
  {
    "de": "Wie bitte?",
    "lv": "Молам?",
    "level": "Sätze"
  },
  {
    "de": "Bitte sehr.",
    "lv": "Нема зошто. • Повелете.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe eine Bitte an Sie.",
    "lv": "Имам една молба до Вас.",
    "level": "Sätze"
  },
  {
    "de": "Trompete blasen.",
    "lv": "Свири на труба.",
    "level": "Sätze"
  },
  {
    "de": "In einem Buch blättern.",
    "lv": "Прелистува книга.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßen Füßen.",
    "lv": "Со боси нозе.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßem Auge.",
    "lv": "Со голо око.",
    "level": "Sätze"
  },
  {
    "de": "Danke für die Blumen!",
    "lv": "Благодарам за комплиментот!",
    "level": "Sätze"
  },
  {
    "de": "Alles in Butter.",
    "lv": "Сѐ е во најдобар ред.",
    "level": "Sätze"
  },
  {
    "de": "Bitte checken.",
    "lv": "Ве молиме, проверете.",
    "level": "Sätze"
  },
  {
    "de": "Da ist er!",
    "lv": "Еве го!",
    "level": "Sätze"
  },
  {
    "de": "Alles spricht dafür.",
    "lv": "Сѐ укажува на тоа.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann nichts dafür.",
    "lv": "Не сум виновен.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin dagegen.",
    "lv": "Против сум.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe nichts dagegen.",
    "lv": "Немам ништо против.",
    "level": "Sätze"
  },
  {
    "de": "Von daheim.",
    "lv": "Од дома.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Dame ziehen.",
    "lv": "Прави потег со кралицата.",
    "level": "Sätze"
  },
  {
    "de": "Es dämmert.",
    "lv": "Се смрачува. • Се разденува.",
    "level": "Sätze"
  },
  {
    "de": "Danke schön!",
    "lv": "Многу благодарам!",
    "level": "Sätze"
  },
  {
    "de": "Dann und wann.",
    "lv": "Од време на време.",
    "level": "Sätze"
  },
  {
    "de": "Darauf kannst du dich verlassen.",
    "lv": "На тоа можеш да сметаш.",
    "level": "Sätze"
  },
  {
    "de": "Daraus wird nichts.",
    "lv": "Од тоа нема ништо да биде.",
    "level": "Sätze"
  },
  {
    "de": "So dass...",
    "lv": "Така што...",
    "level": "Sätze"
  },
  {
    "de": "Für wen halten Sie mich?",
    "lv": "За кого ме сметате?",
    "level": "Sätze"
  },
  {
    "de": "Hände weg!",
    "lv": "Рацете настрана!",
    "level": "Sätze"
  },
  {
    "de": "Lass den Kopf nicht hängen!",
    "lv": "Не губи надеж!",
    "level": "Sätze"
  },
  {
    "de": "zu Hause",
    "lv": "дома",
    "level": "Sätze"
  },
  {
    "de": "nach Hause gehen",
    "lv": "оди дома",
    "level": "Sätze"
  },
  {
    "de": "von Haus aus",
    "lv": "по потекло • по природа",
    "level": "Sätze"
  },
  {
    "de": "Meinen herzlichsten Glückwunsch!",
    "lv": "Најсрдечни честитки!",
    "level": "Sätze"
  },
  {
    "de": "Seien Sie so gut!",
    "lv": "Бидете толку добар!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie die Güte!",
    "lv": "Бидете толку љубезен!",
    "level": "Sätze"
  },
  {
    "de": "Was hast du?",
    "lv": "Што ти е? • Што се случи?",
    "level": "Sätze"
  },
  {
    "de": "Gestatten Sie bitte!",
    "lv": "Дозволете, Ве молам!",
    "level": "Sätze"
  },
  {
    "de": "Ist es gestattet zu rauchen?",
    "lv": "Дали е дозволено да се пуши?",
    "level": "Sätze"
  },
  {
    "de": "Ich muss gestehen, dass...",
    "lv": "Морам да признаам дека...",
    "level": "Sätze"
  },
  {
    "de": "gestern früh",
    "lv": "вчера наутро",
    "level": "Sätze"
  },
  {
    "de": "gestern Abend",
    "lv": "вчера навечер",
    "level": "Sätze"
  },
  {
    "de": "Es ist mir gleichgültig, ob...",
    "lv": "Ми е сеедно дали...",
    "level": "Sätze"
  },
  {
    "de": "Was ist geschehen?",
    "lv": "Што се случи?",
    "level": "Sätze"
  },
  {
    "de": "Mach keine Geschichten!",
    "lv": "Не прави глупости!",
    "level": "Sätze"
  },
  {
    "de": "Geschweige denn...",
    "lv": "А камоли...",
    "level": "Sätze"
  },
  {
    "de": "Gehen Sie geradeaus!",
    "lv": "Одете право!",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es Ihnen?",
    "lv": "Како сте?",
    "level": "Sätze"
  },
  {
    "de": "Frag ihn gelegentlich, ob...",
    "lv": "Кога ќе имаш прилика, прашај го дали...",
    "level": "Sätze"
  },
  {
    "de": "morgen früh",
    "lv": "утре наутро",
    "level": "Sätze"
  },
  {
    "de": "im Frühling",
    "lv": "во пролет",
    "level": "Sätze"
  },
  {
    "de": "Was gibt’s Neues?",
    "lv": "Што има ново?",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Brief folgt, dass...",
    "lv": "Од ова писмо произлегува дека...",
    "level": "Sätze"
  },
  {
    "de": "Fahre fort!",
    "lv": "Продолжи!",
    "level": "Sätze"
  },
  {
    "de": "Er ist kein Freund von...",
    "lv": "Не е љубител на...",
    "level": "Sätze"
  },
  {
    "de": "Es erwies sich, dass...",
    "lv": "Се покажа дека...",
    "level": "Sätze"
  },
  {
    "de": "Gedenkst du meiner?",
    "lv": "Се сеќаваш ли на мене? • Мислиш ли на мене?",
    "level": "Sätze"
  },
  {
    "de": "im Winter",
    "lv": "во зима",
    "level": "Sätze"
  },
  {
    "de": "Welcher Jahrgang sind Sie?",
    "lv": "Која година сте роден?",
    "level": "Sätze"
  },
  {
    "de": "Es jammert mich zu sehen...",
    "lv": "Ми е жал да гледам...",
    "level": "Sätze"
  },
  {
    "de": "je mehr, desto besser",
    "lv": "колку повеќе, толку подобро",
    "level": "Sätze"
  },
  {
    "de": "bis jetzt",
    "lv": "досега",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich zum Bahnhof?",
    "lv": "Како да стигнам до железничката станица?",
    "level": "Sätze"
  },
  {
    "de": "Komm her!",
    "lv": "Дојди овде!",
    "level": "Sätze"
  },
  {
    "de": "Könnte ich Frau N. sprechen?",
    "lv": "Би можел ли да зборувам со госпоѓа Н.?",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das?",
    "lv": "Колку чини тоа?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange dauert die Vorstellung?",
    "lv": "Колку трае претставата?",
    "level": "Sätze"
  },
  {
    "de": "Lass das!",
    "lv": "Престани! • Остави го тоа!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich in Ruhe!",
    "lv": "Остави ме на мира!",
    "level": "Sätze"
  },
  {
    "de": "Lassen Sie mich Ihnen helfen!",
    "lv": "Дозволете ми да Ви помогнам!",
    "level": "Sätze"
  },
  {
    "de": "Lasst uns gehen!",
    "lv": "Ајде да одиме!",
    "level": "Sätze"
  },
  {
    "de": "Na, wie läufts?",
    "lv": "Па, како оди?",
    "level": "Sätze"
  },
  {
    "de": "Es lebe!",
    "lv": "Да живее!",
    "level": "Sätze"
  },
  {
    "de": "Leben Sie wohl!",
    "lv": "Збогум!",
    "level": "Sätze"
  },
  {
    "de": "Was ist los?",
    "lv": "Што се случува?",
    "level": "Sätze"
  },
  {
    "de": "Der Job ist anstrengend.",
    "lv": "Работата е напорна.",
    "level": "Sätze"
  },
  {
    "de": "Das war ein anstrengender Tag.",
    "lv": "Тоа беше напорен ден.",
    "level": "Sätze"
  },
  {
    "de": "Deutsch lernen kann anstrengend sein.",
    "lv": "Учењето германски јазик може да биде напорно.",
    "level": "Sätze"
  },
  {
    "de": "Er verlangt eine Erklärung.",
    "lv": "Бара објаснување.",
    "level": "Sätze"
  },
  {
    "de": "Der Verkäufer verlangt zu viel Geld.",
    "lv": "Продавачот бара премногу пари.",
    "level": "Sätze"
  },
  {
    "de": "Das Gesetz verlangt es so.",
    "lv": "Законот така бара.",
    "level": "Sätze"
  },
  {
    "de": "Das ist gar nicht so schwer.",
    "lv": "Тоа воопшто не е толку тешко.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe gar kein Geld.",
    "lv": "Немам никакви пари.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gar nichts gesagt.",
    "lv": "Не рече воопшто ништо.",
    "level": "Sätze"
  },
  {
    "de": "Der Hund ist los.",
    "lv": "Кучето е пуштено.",
    "level": "Sätze"
  },
  {
    "de": "Hier ist viel los.",
    "lv": "Овде е многу живо.",
    "level": "Sätze"
  },
  {
    "de": "Halt die Luft an!",
    "lv": "Замолчи! • Не претерувај!",
    "level": "Sätze"
  },
  {
    "de": "Was machst du?",
    "lv": "Што правиш?",
    "level": "Sätze"
  },
  {
    "de": "Sag mal!",
    "lv": "Кажи де!",
    "level": "Sätze"
  },
  {
    "de": "Was meinen Sie damit?",
    "lv": "Што сакате да кажете со тоа? • Како го мислите тоа?",
    "level": "Sätze"
  },
  {
    "de": "Wir gehen mit Ihnen.",
    "lv": "Одиме со Вас.",
    "level": "Sätze"
  },
  {
    "de": "Ich fahre mit der Eisenbahn.",
    "lv": "Патувам со воз.",
    "level": "Sätze"
  },
  {
    "de": "am Mittwoch",
    "lv": "во среда",
    "level": "Sätze"
  },
  {
    "de": "Es mag sein.",
    "lv": "Може да биде.",
    "level": "Sätze"
  },
  {
    "de": "Ich mag das nicht.",
    "lv": "Тоа не ми се допаѓа.",
    "level": "Sätze"
  },
  {
    "de": "am Montag",
    "lv": "во понеделник",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen!",
    "lv": "Добро утро!",
    "level": "Sätze"
  },
  {
    "de": "am Morgen",
    "lv": "наутро",
    "level": "Sätze"
  },
  {
    "de": "Gute Nacht!",
    "lv": "Добра ноќ!",
    "level": "Sätze"
  },
  {
    "de": "Nehmen Sie Platz!",
    "lv": "Повелете, седнете!",
    "level": "Sätze"
  },
  {
    "de": "Letzte Neuheit!",
    "lv": "Последна новост!",
    "level": "Sätze"
  },
  {
    "de": "Nicht wahr?",
    "lv": "Нели?",
    "level": "Sätze"
  },
  {
    "de": "Nicht doch!",
    "lv": "Не, не! • Немој!",
    "level": "Sätze"
  },
  {
    "de": "Nun endlich!",
    "lv": "Е, конечно!",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das?",
    "lv": "Каква корист има од тоа?",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das alles?",
    "lv": "Каква корист има од сето тоа?",
    "level": "Sätze"
  },
  {
    "de": "Parken verboten!",
    "lv": "Забрането паркирање!",
    "level": "Sätze"
  },
  {
    "de": "Nicht parken!",
    "lv": "Забрането паркирање!",
    "level": "Sätze"
  },
  {
    "de": "Er hat Recht.",
    "lv": "Во право е.",
    "level": "Sätze"
  },
  {
    "de": "Wovon ist die Rede?",
    "lv": "За што станува збор?",
    "level": "Sätze"
  },
  {
    "de": "Davon kann keine Rede sein.",
    "lv": "За тоа не може ни да стане збор.",
    "level": "Sätze"
  },
  {
    "de": "Glückliche Reise!",
    "lv": "Среќен пат!",
    "level": "Sätze"
  },
  {
    "de": "Mir reißt die Geduld.",
    "lv": "Го губам трпението.",
    "level": "Sätze"
  },
  {
    "de": "Man sagt, dass...",
    "lv": "Велат дека...",
    "level": "Sätze"
  },
  {
    "de": "Schon gut!",
    "lv": "Во ред е!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön!",
    "lv": "Повелете! • Нема зошто!",
    "level": "Sätze"
  },
  {
    "de": "Was bin ich schuldig?",
    "lv": "Колку должам?",
    "level": "Sätze"
  },
  {
    "de": "Vor dem Gebrauch schütteln!",
    "lv": "Протресете пред употреба!",
    "level": "Sätze"
  },
  {
    "de": "Sehen Sie mal!",
    "lv": "Погледнете!",
    "level": "Sätze"
  },
  {
    "de": "Wie sehr auch...",
    "lv": "Колку и да...",
    "level": "Sätze"
  },
  {
    "de": "Seit wann?",
    "lv": "Откога?",
    "level": "Sätze"
  },
  {
    "de": "Was soll ich tun?",
    "lv": "Што да правам?",
    "level": "Sätze"
  },
  {
    "de": "im Sommer",
    "lv": "во лето",
    "level": "Sätze"
  },
  {
    "de": "Nicht nur..., sondern auch...",
    "lv": "Не само..., туку и...",
    "level": "Sätze"
  },
  {
    "de": "Sonst noch etwas?",
    "lv": "Уште нешто?",
    "level": "Sätze"
  },
  {
    "de": "Spaß beiseite!",
    "lv": "Шега настрана!",
    "level": "Sätze"
  },
  {
    "de": "Wie spät ist es?",
    "lv": "Колку е часот?",
    "level": "Sätze"
  },
  {
    "de": "Durchfahrt gesperrt!",
    "lv": "Забранет сообраќај!",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie deutsch?",
    "lv": "Зборувате ли германски?",
    "level": "Sätze"
  },
  {
    "de": "Statt zu...",
    "lv": "Наместо да...",
    "level": "Sätze"
  },
  {
    "de": "Wie steht’s?",
    "lv": "Како стојат работите?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Hut steht ihr gut.",
    "lv": "Оваа шапка добро ѝ стои.",
    "level": "Sätze"
  },
  {
    "de": "Guten Tag!",
    "lv": "Добар ден!",
    "level": "Sätze"
  },
  {
    "de": "Wo treffen wir uns?",
    "lv": "Каде ќе се сретнеме?",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie näher!",
    "lv": "Приближете се!",
    "level": "Sätze"
  },
  {
    "de": "Ehrlichkeit ist eine Tugend.",
    "lv": "Чесноста е доблест.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe viel zu tun.",
    "lv": "Имам многу работа.",
    "level": "Sätze"
  },
  {
    "de": "Nicht übel!",
    "lv": "Не е лошо!",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt über mir.",
    "lv": "Живее над мене.",
    "level": "Sätze"
  },
  {
    "de": "Er ist davon überzeugt.",
    "lv": "Убеден е во тоа.",
    "level": "Sätze"
  },
  {
    "de": "So ist es üblich.",
    "lv": "Така е вообичаено.",
    "level": "Sätze"
  },
  {
    "de": "Deine Uhr geht nach.",
    "lv": "Часовникот ти доцни.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel Uhr ist es?",
    "lv": "Колку е часот?",
    "level": "Sätze"
  },
  {
    "de": "Um acht Uhr früh.",
    "lv": "Во осум часот наутро.",
    "level": "Sätze"
  },
  {
    "de": "umso mehr",
    "lv": "толку повеќе",
    "level": "Sätze"
  },
  {
    "de": "Rechts um!",
    "lv": "Надесно!",
    "level": "Sätze"
  },
  {
    "de": "Und ob!",
    "lv": "И уште како!",
    "level": "Sätze"
  },
  {
    "de": "und zwar",
    "lv": "и тоа",
    "level": "Sätze"
  },
  {
    "de": "Auf Unkosten von...",
    "lv": "На сметка на...",
    "level": "Sätze"
  },
  {
    "de": "Er saß unter den Zuschauern.",
    "lv": "Седеше меѓу гледачите.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ursache!",
    "lv": "Нема зошто!",
    "level": "Sätze"
  },
  {
    "de": "Es geschah, wie verabredet.",
    "lv": "Се случи како што беше договорено.",
    "level": "Sätze"
  },
  {
    "de": "Rauchen verboten!",
    "lv": "Забрането пушење!",
    "level": "Sätze"
  },
  {
    "de": "Falsch verbunden!",
    "lv": "Погрешен број!",
    "level": "Sätze"
  },
  {
    "de": "Eintritt verboten!",
    "lv": "Забранет влез!",
    "level": "Sätze"
  },
  {
    "de": "Verstehen Sie mich?",
    "lv": "Ме разбирате ли?",
    "level": "Sätze"
  },
  {
    "de": "Er versteht nichts davon.",
    "lv": "Ништо не разбира од тоа.",
    "level": "Sätze"
  },
  {
    "de": "Seine Ansicht vertreten.",
    "lv": "Го брани своето мислење.",
    "level": "Sätze"
  },
  {
    "de": "Streit verursachen.",
    "lv": "Предизвикува расправија.",
    "level": "Sätze"
  },
  {
    "de": "Viel besser.",
    "lv": "Многу подобро.",
    "level": "Sätze"
  },
  {
    "de": "Zu viel.",
    "lv": "Премногу.",
    "level": "Sätze"
  },
  {
    "de": "Vom Hörensagen.",
    "lv": "Од туѓо кажување.",
    "level": "Sätze"
  },
  {
    "de": "Von Zeit zu Zeit.",
    "lv": "Од време на време.",
    "level": "Sätze"
  },
  {
    "de": "Von Beruf.",
    "lv": "По професија.",
    "level": "Sätze"
  },
  {
    "de": "Er ist Berliner von Geburt.",
    "lv": "Тој е берлинчанец по раѓање.",
    "level": "Sätze"
  },
  {
    "de": "Er steht vor dem Fenster.",
    "lv": "Стои пред прозорецот.",
    "level": "Sätze"
  },
  {
    "de": "Vor Sonnenaufgang.",
    "lv": "Пред изгрејсонце.",
    "level": "Sätze"
  },
  {
    "de": "Vor vierzehn Tagen.",
    "lv": "Пред две недели.",
    "level": "Sätze"
  },
  {
    "de": "Vor Freude.",
    "lv": "Од радост.",
    "level": "Sätze"
  },
  {
    "de": "Vor allem.",
    "lv": "Пред сѐ.",
    "level": "Sätze"
  },
  {
    "de": "Im Voraus.",
    "lv": "Однапред.",
    "level": "Sätze"
  },
  {
    "de": "Unter der Voraussetzung, dass...",
    "lv": "Под услов да...",
    "level": "Sätze"
  },
  {
    "de": "Unter dem Vorbehalt.",
    "lv": "Со таа резерва.",
    "level": "Sätze"
  },
  {
    "de": "Vorhanden sein.",
    "lv": "На располагање е. • Постои.",
    "level": "Sätze"
  },
  {
    "de": "In der vorigen Woche.",
    "lv": "Минатата недела.",
    "level": "Sätze"
  },
  {
    "de": "Vorkehrungen treffen.",
    "lv": "Презема мерки на претпазливост.",
    "level": "Sätze"
  },
  {
    "de": "Sie kommt mir bekannt vor.",
    "lv": "Ми се чини позната.",
    "level": "Sätze"
  },
  {
    "de": "Er hat Vorliebe für Literatur.",
    "lv": "Има наклонетост кон литературата.",
    "level": "Sätze"
  },
  {
    "de": "Heute Vormittag.",
    "lv": "Утрово. • Денеска претпладне.",
    "level": "Sätze"
  },
  {
    "de": "Von vorn.",
    "lv": "Од предната страна. • Од почеток.",
    "level": "Sätze"
  },
  {
    "de": "Nach vorn.",
    "lv": "Напред.",
    "level": "Sätze"
  },
  {
    "de": "Von vornherein.",
    "lv": "Од самиот почеток.",
    "level": "Sätze"
  },
  {
    "de": "Im Vorteil sein.",
    "lv": "Има предност.",
    "level": "Sätze"
  },
  {
    "de": "Wach sein.",
    "lv": "Буден е.",
    "level": "Sätze"
  },
  {
    "de": "Wach werden.",
    "lv": "Се буди.",
    "level": "Sätze"
  },
  {
    "de": "Auf Wache sein.",
    "lv": "Стои на стража.",
    "level": "Sätze"
  },
  {
    "de": "Während eines Jahres.",
    "lv": "Во текот на една година.",
    "level": "Sätze"
  },
  {
    "de": "Während des Krieges.",
    "lv": "За време на војната.",
    "level": "Sätze"
  },
  {
    "de": "Gegen eine Wand reden.",
    "lv": "Зборува во празно.",
    "level": "Sätze"
  },
  {
    "de": "Hier haben die Wände Ohren.",
    "lv": "Тука и ѕидовите имаат уши.",
    "level": "Sätze"
  },
  {
    "de": "Bis wann?",
    "lv": "До кога?",
    "level": "Sätze"
  },
  {
    "de": "Es ist warm.",
    "lv": "Топло е.",
    "level": "Sätze"
  },
  {
    "de": "Auf eine Nachricht warten.",
    "lv": "Чека порака.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie?",
    "lv": "Што сакате?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein...?",
    "lv": "Каков...? • Што за...?",
    "level": "Sätze"
  },
  {
    "de": "Auf halbem Wege.",
    "lv": "На половина пат.",
    "level": "Sätze"
  },
  {
    "de": "Auf diesem Wege.",
    "lv": "На овој начин. • По овој пат.",
    "level": "Sätze"
  },
  {
    "de": "Auf friedlichem Wege.",
    "lv": "По мирен пат.",
    "level": "Sätze"
  },
  {
    "de": "Unserer Freundschaft wegen.",
    "lv": "Заради нашето пријателство.",
    "level": "Sätze"
  },
  {
    "de": "Von Rechts wegen.",
    "lv": "Според законот. • По право.",
    "level": "Sätze"
  },
  {
    "de": "Weh tun.",
    "lv": "Боли.",
    "level": "Sätze"
  },
  {
    "de": "Zu Weihnachten.",
    "lv": "За Божиќ.",
    "level": "Sätze"
  },
  {
    "de": "Auf welche Weise?",
    "lv": "На кој начин?",
    "level": "Sätze"
  },
  {
    "de": "Art und Weise.",
    "lv": "Начин.",
    "level": "Sätze"
  },
  {
    "de": "Ohne weiteres.",
    "lv": "Без одлагање. • Без тешкотии.",
    "level": "Sätze"
  },
  {
    "de": "Bis auf weiteres.",
    "lv": "До понатамошно известување.",
    "level": "Sätze"
  },
  {
    "de": "Und so weiter.",
    "lv": "И така натаму.",
    "level": "Sätze"
  },
  {
    "de": "Weiter nichts.",
    "lv": "Ништо повеќе.",
    "level": "Sätze"
  },
  {
    "de": "An welchem Tag?",
    "lv": "Во кој ден?",
    "level": "Sätze"
  },
  {
    "de": "Alle Welt.",
    "lv": "Целиот свет. • Сите.",
    "level": "Sätze"
  },
  {
    "de": "In wenigen Tagen.",
    "lv": "За неколку дена.",
    "level": "Sätze"
  },
  {
    "de": "Zu wenig.",
    "lv": "Премалку.",
    "level": "Sätze"
  },
  {
    "de": "Wenn auch.",
    "lv": "Макар и.",
    "level": "Sätze"
  },
  {
    "de": "Wer da?",
    "lv": "Кој е таму?",
    "level": "Sätze"
  },
  {
    "de": "Gesammelte Werke von Schiller.",
    "lv": "Собрани дела на Шилер.",
    "level": "Sätze"
  },
  {
    "de": "Ausgewählte Werke.",
    "lv": "Избрани дела.",
    "level": "Sätze"
  },
  {
    "de": "Er ist wert, dass...",
    "lv": "Заслужува да...",
    "level": "Sätze"
  },
  {
    "de": "Es ist zwei Euro wert.",
    "lv": "Вреди две евра.",
    "level": "Sätze"
  },
  {
    "de": "Nach Westen.",
    "lv": "На запад.",
    "level": "Sätze"
  },
  {
    "de": "Von Westen.",
    "lv": "Од запад.",
    "level": "Sätze"
  },
  {
    "de": "In Wettbewerb treten.",
    "lv": "Влегува во натпревар.",
    "level": "Sätze"
  },
  {
    "de": "Um die Wette laufen.",
    "lv": "Се натпреварува во трчање.",
    "level": "Sätze"
  },
  {
    "de": "Was gilt die Wette?",
    "lv": "Во што се обложуваме?",
    "level": "Sätze"
  },
  {
    "de": "Wie wird das Wetter?",
    "lv": "Какво ќе биде времето?",
    "level": "Sätze"
  },
  {
    "de": "Wettkampf im Turnen.",
    "lv": "Натпревар во гимнастика.",
    "level": "Sätze"
  },
  {
    "de": "Wider meinen Willen.",
    "lv": "Против мојата волја.",
    "level": "Sätze"
  },
  {
    "de": "Widerspruch erheben.",
    "lv": "Протестира. • Приговара.",
    "level": "Sätze"
  },
  {
    "de": "Wie alt ist er?",
    "lv": "Колку години има?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange?",
    "lv": "Колку долго?",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiederhören!",
    "lv": "Се слушаме!",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiedersehen!",
    "lv": "Довидување!",
    "level": "Sätze"
  },
  {
    "de": "Wilde Tiere.",
    "lv": "Диви животни.",
    "level": "Sätze"
  },
  {
    "de": "Herzlich willkommen!",
    "lv": "Срдечно добредојдовте!",
    "level": "Sätze"
  },
  {
    "de": "Du musst ziehen.",
    "lv": "Ти си на потег.",
    "level": "Sätze"
  },
  {
    "de": "Es zieht.",
    "lv": "Има промаја.",
    "level": "Sätze"
  },
  {
    "de": "Ziemlich kalt.",
    "lv": "Прилично студено.",
    "level": "Sätze"
  },
  {
    "de": "Zipfel einer Wurst.",
    "lv": "Крајче од колбас.",
    "level": "Sätze"
  },
  {
    "de": "Zu ihm gehen.",
    "lv": "Оди кај него.",
    "level": "Sätze"
  },
  {
    "de": "Zur Schule gehen.",
    "lv": "Оди на училиште.",
    "level": "Sätze"
  },
  {
    "de": "Zu Hause bleiben.",
    "lv": "Останува дома.",
    "level": "Sätze"
  },
  {
    "de": "Von Tag zu Tag.",
    "lv": "Од ден на ден.",
    "level": "Sätze"
  },
  {
    "de": "Zum Glück.",
    "lv": "За среќа.",
    "level": "Sätze"
  },
  {
    "de": "Wasser zum Trinken.",
    "lv": "Вода за пиење.",
    "level": "Sätze"
  },
  {
    "de": "Zu Fuß.",
    "lv": "Пешки.",
    "level": "Sätze"
  },
  {
    "de": "Zu Pferde.",
    "lv": "На коњ.",
    "level": "Sätze"
  },
  {
    "de": "Zu Rad.",
    "lv": "Со велосипед.",
    "level": "Sätze"
  },
  {
    "de": "Es hörte auf zu regnen.",
    "lv": "Престана да врне.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe noch viel zu tun.",
    "lv": "Имам уште многу работа.",
    "level": "Sätze"
  },
  {
    "de": "Zu früh.",
    "lv": "Прерано.",
    "level": "Sätze"
  },
  {
    "de": "Zu groß.",
    "lv": "Преголем.",
    "level": "Sätze"
  },
  {
    "de": "Mit den Achseln zucken.",
    "lv": "Крева раменици.",
    "level": "Sätze"
  },
  {
    "de": "In einem Zug trinken.",
    "lv": "Испива на една голтка.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde gehen.",
    "lv": "Пропаѓа.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde legen.",
    "lv": "Зема за основа. • Става во основата.",
    "level": "Sätze"
  },
  {
    "de": "Zum ersten Mal.",
    "lv": "За прв пат.",
    "level": "Sätze"
  },
  {
    "de": "Machen Sie bitte die Tür zu!",
    "lv": "Затворете ја вратата, Ве молам!",
    "level": "Sätze"
  },
  {
    "de": "Er hat zugenommen.",
    "lv": "Се здебели.",
    "level": "Sätze"
  },
  {
    "de": "Die Tage nehmen zu.",
    "lv": "Деновите стануваат подолги.",
    "level": "Sätze"
  },
  {
    "de": "Zusammenhängen mit etwas.",
    "lv": "Има врска со нешто.",
    "level": "Sätze"
  },
  {
    "de": "Die Tür ist zu.",
    "lv": "Вратата е затворена.",
    "level": "Sätze"
  },
  {
    "de": "Das hätte ich ihm nicht zugetraut.",
    "lv": "Тоа не би го очекувал од него.",
    "level": "Sätze"
  },
  {
    "de": "Freier Zutritt.",
    "lv": "Слободен влез.",
    "level": "Sätze"
  },
  {
    "de": "Zutritt verboten!",
    "lv": "Забранет влез!",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu viel!",
    "lv": "Тоа е премногу!",
    "level": "Sätze"
  },
  {
    "de": "Zuwider werden.",
    "lv": "Станува одвратен. • Здодева.",
    "level": "Sätze"
  },
  {
    "de": "Und zwar.",
    "lv": "Имено.",
    "level": "Sätze"
  },
  {
    "de": "Es steht außer Zweifel.",
    "lv": "Нема никакво сомнение.",
    "level": "Sätze"
  },
  {
    "de": "Ohne Zweifel.",
    "lv": "Без сомнение.",
    "level": "Sätze"
  },
  {
    "de": "Zum Zweiten.",
    "lv": "Второ.",
    "level": "Sätze"
  },
  {
    "de": "Frohes neues Jahr!",
    "lv": "Среќна Нова година!",
    "level": "Sätze"
  },
  {
    "de": "Herzlichen Glückwunsch zum Geburtstag!",
    "lv": "Честит роденден!",
    "level": "Sätze"
  },
  {
    "de": "Gute Reise!",
    "lv": "Среќен пат!",
    "level": "Sätze"
  },
  {
    "de": "Es freut mich, Sie kennenzulernen.",
    "lv": "Ми е мило што Ве запознавам.",
    "level": "Sätze"
  },
  {
    "de": "Wären Sie bitte so nett?",
    "lv": "Дали би биле толку љубезен, Ве молам?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin Ihnen sehr dankbar.",
    "lv": "Многу сум Ви благодарен.",
    "level": "Sätze"
  },
  {
    "de": "Setzt euch bitte hin!",
    "lv": "Седнете, ве молам!",
    "level": "Sätze"
  },
  {
    "de": "Ben, komm bitte an die Tafel!",
    "lv": "Бен, дојди, те молам, на таблата!",
    "level": "Sätze"
  },
  {
    "de": "Schlagt bitte die Lehrbücher auf!",
    "lv": "Отворете ги учебниците, ве молам!",
    "level": "Sätze"
  },
  {
    "de": "Geht bitte in die Sporthalle!",
    "lv": "Одете во спортската сала, ве молам!",
    "level": "Sätze"
  },
  {
    "de": "Schläfst du noch?",
    "lv": "Дали уште спиеш?",
    "level": "Sätze"
  },
  {
    "de": "Schlafen Sie noch?",
    "lv": "Дали уште спиете?",
    "level": "Sätze"
  },
  {
    "de": "Er ist fest eingeschlafen.",
    "lv": "Заспа длабоко.",
    "level": "Sätze"
  },
  {
    "de": "Wecke ihn bitte auf, es ist schon spät!",
    "lv": "Разбуди го, те молам, веќе е доцна!",
    "level": "Sätze"
  },
  {
    "de": "Es tut mir sehr leid!",
    "lv": "Многу ми е жал!",
    "level": "Sätze"
  },
  {
    "de": "Vielen Dank!",
    "lv": "Многу благодарам!",
    "level": "Sätze"
  },
  {
    "de": "Finn, fang bitte an!",
    "lv": "Фин, започни, те молам!",
    "level": "Sätze"
  },
  {
    "de": "Lest bitte mit!",
    "lv": "Следете го текстот, ве молам!",
    "level": "Sätze"
  },
  {
    "de": "Emma, schau bitte nicht aus dem Fenster!",
    "lv": "Ема, те молам, не гледај низ прозорецот!",
    "level": "Sätze"
  },
  {
    "de": "Jonas, bring bitte die Hefte!",
    "lv": "Јонас, донеси ги тетратките, те молам!",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte zurück an deinen Platz!",
    "lv": "Врати се на своето место, те молам!",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb acht.",
    "lv": "Седум и пол е.",
    "level": "Sätze"
  },
  {
    "de": "Wann wachst du gewöhnlich auf?",
    "lv": "Кога обично се будиш?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe gleich auf.",
    "lv": "Веднаш ќе станам.",
    "level": "Sätze"
  },
  {
    "de": "Steh auf, Hanna, es klingelt!",
    "lv": "Стани, Хана, ѕвони!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich noch fünf Minuten schlafen!",
    "lv": "Остави ме да спијам уште пет минути!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss nicht, das Zimmer zu lüften!",
    "lv": "Не заборавај да ја проветриш собата!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist das Handtuch?",
    "lv": "Каде е пешкирот?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mir die Zähne putzen.",
    "lv": "Сакам да си ги измијам забите.",
    "level": "Sätze"
  },
  {
    "de": "Mit was putzt du dir die Zähne?",
    "lv": "Со што си ги миеш забите?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mich anziehen.",
    "lv": "Сакам да се облечам.",
    "level": "Sätze"
  },
  {
    "de": "Zieh dich bitte schnell an!",
    "lv": "Облечи се брзо, те молам!",
    "level": "Sätze"
  },
  {
    "de": "Kleide dich wärmer an, draußen ist es kühl.",
    "lv": "Облечи се потопло, надвор е свежо.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, wie geht es dir?",
    "lv": "Добро утро, како си?",
    "level": "Sätze"
  },
  {
    "de": "Mir geht es gut, danke.",
    "lv": "Добро сум, благодарам.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es Neues?",
    "lv": "Што има ново?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein Chaos hier!",
    "lv": "Каков неред има тука!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich beim Aufräumen helfen?",
    "lv": "Може ли да помогнам во средувањето?",
    "level": "Sätze"
  },
  {
    "de": "Was trinkst du morgens, Kaffee oder Tee?",
    "lv": "Што пиеш наутро, кафе или чај?",
    "level": "Sätze"
  },
  {
    "de": "Gewöhnlich trinke ich morgens eine Tasse Kaffee.",
    "lv": "Обично наутро пијам шолја кафе.",
    "level": "Sätze"
  },
  {
    "de": "Am liebsten trinke ich schwarzen Kaffee.",
    "lv": "Најрадо пијам црно кафе.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, hast du gut geschlafen?",
    "lv": "Добро утро, добро ли спиеше?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin noch sehr müde.",
    "lv": "Уште сум многу уморен.",
    "level": "Sätze"
  },
  {
    "de": "Willst du Kaffee oder Milch?",
    "lv": "Сакаш ли кафе или млеко?",
    "level": "Sätze"
  },
  {
    "de": "Gib mir bitte ein Brötchen mit Käse.",
    "lv": "Дај ми, те молам, едно лепче со сирење.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss jetzt los!",
    "lv": "Сега морам да одам!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss dein Frühstück nicht!",
    "lv": "Не го заборавај појадокот!",
    "level": "Sätze"
  },
  {
    "de": "Klara, deck bitte den Tisch!",
    "lv": "Клара, те молам, постави ја масата!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss die Servietten nicht!",
    "lv": "Не ги заборавај салфетите!",
    "level": "Sätze"
  },
  {
    "de": "Wann esst ihr zu Mittag?",
    "lv": "Кога ручате?",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit zu essen.",
    "lv": "Време е за јадење.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es heute zu Mittag?",
    "lv": "Што има денес за ручек?",
    "level": "Sätze"
  },
  {
    "de": "Wie schmeckt dir die Suppe?",
    "lv": "Како ти се допаѓа супата?",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt ist sie etwas zu salzig.",
    "lv": "Искрено речено, малку е пресолена.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dir ein Stück Brot geben?",
    "lv": "Може ли да ти дадам парче леб?",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich habe schon.",
    "lv": "Благодарам, веќе имам.",
    "level": "Sätze"
  },
  {
    "de": "Das Fleisch schmeckt ausgezeichnet.",
    "lv": "Месото има одличен вкус.",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich bin schon satt.",
    "lv": "Благодарам, веќе сум сит.",
    "level": "Sätze"
  },
  {
    "de": "Heute haben wir Besuch.",
    "lv": "Денес имаме гости.",
    "level": "Sätze"
  },
  {
    "de": "Bist du heute Abend frei?",
    "lv": "Слободен ли си вечерва?",
    "level": "Sätze"
  },
  {
    "de": "Komm doch heute zum Mittagessen vorbei!",
    "lv": "Ајде, наврати денес на ручек!",
    "level": "Sätze"
  },
  {
    "de": "Setzen wir uns an den Tisch.",
    "lv": "Да седнеме на масата.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, bedien dich!",
    "lv": "Повели, послужи се!",
    "level": "Sätze"
  },
  {
    "de": "Stört dich das Rauchen?",
    "lv": "Ти пречи ли пушењето?",
    "level": "Sätze"
  },
  {
    "de": "Danke für die nette Aufnahme!",
    "lv": "Благодарам за љубезниот пречек!",
    "level": "Sätze"
  },
  {
    "de": "Wann gehst du ins Bett?",
    "lv": "Кога одиш на спиење?",
    "level": "Sätze"
  },
  {
    "de": "Wenn ich von der Arbeit komme, bin ich immer müde.",
    "lv": "Кога доаѓам од работа, секогаш сум уморен.",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, ins Bett zu gehen.",
    "lv": "Време е за спиење.",
    "level": "Sätze"
  },
  {
    "de": "Es ist schönes Wetter.",
    "lv": "Времето е убаво.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mit mir spazieren gehen?",
    "lv": "Сакаш ли да одиш на прошетка со мене?",
    "level": "Sätze"
  },
  {
    "de": "Sieh mal, es wird gleich regnen.",
    "lv": "Види, наскоро ќе заврне.",
    "level": "Sätze"
  },
  {
    "de": "Nimm den Regenschirm mit!",
    "lv": "Понеси го чадорот!",
    "level": "Sätze"
  },
  {
    "de": "Es regnet.",
    "lv": "Врне.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin schon ganz nass.",
    "lv": "Веќе сум сосема мокар.",
    "level": "Sätze"
  },
  {
    "de": "Glaubst du, dass es den ganzen Tag regnen wird?",
    "lv": "Мислиш ли дека ќе врне цел ден?",
    "level": "Sätze"
  },
  {
    "de": "Es hört auf zu regnen.",
    "lv": "Престанува да врне.",
    "level": "Sätze"
  },
  {
    "de": "Die Sonne scheint wieder.",
    "lv": "Сонцето повторно грее.",
    "level": "Sätze"
  },
  {
    "de": "Es ist sehr warm.",
    "lv": "Многу е топло.",
    "level": "Sätze"
  },
  {
    "de": "Es sieht nach Regen aus.",
    "lv": "Изгледа дека ќе врне.",
    "level": "Sätze"
  },
  {
    "de": "Wir bekommen gleich ein Gewitter.",
    "lv": "Наскоро ќе нѐ фати невреме.",
    "level": "Sätze"
  },
  {
    "de": "Das Gewitter zieht vorüber.",
    "lv": "Невремето поминува.",
    "level": "Sätze"
  },
  {
    "de": "Die Wolken verziehen sich.",
    "lv": "Облаците се разотидуваат.",
    "level": "Sätze"
  },
  {
    "de": "Siehst du den Regenbogen?",
    "lv": "Го гледаш ли виножитото?",
    "level": "Sätze"
  },
  {
    "de": "Der Winter ist da, es hat geschneit.",
    "lv": "Зимата дојде, падна снег.",
    "level": "Sätze"
  },
  {
    "de": "Es schneit.",
    "lv": "Паѓа снег.",
    "level": "Sätze"
  },
  {
    "de": "Wie schön ist es im Wald im Winter!",
    "lv": "Колку е убаво во шумата во зима!",
    "level": "Sätze"
  },
  {
    "de": "Mir ist kalt, ich friere.",
    "lv": "Студено ми е, мрзнам.",
    "level": "Sätze"
  },
  {
    "de": "Draußen ist Glatteis, pass auf!",
    "lv": "Надвор има поледица, внимавај!",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir auf die Eisbahn gehen?",
    "lv": "Да одиме ли на лизгалиште?",
    "level": "Sätze"
  },
  {
    "de": "Zieh die Jacke an, du kannst dich erkälten.",
    "lv": "Облечи ја јакната, може да настинеш.",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb sieben.",
    "lv": "Шест и пол е.",
    "level": "Sätze"
  },
  {
    "de": "Meine Uhr geht fünf Minuten vor.",
    "lv": "Часовникот ми брза пет минути.",
    "level": "Sätze"
  },
  {
    "de": "Weck mich morgen früh um sieben Uhr!",
    "lv": "Разбуди ме утре наутро во седум часот!",
    "level": "Sätze"
  },
  {
    "de": "Was ist heute für ein Datum?",
    "lv": "Кој датум е денес?",
    "level": "Sätze"
  },
  {
    "de": "Heute ist der elfte Juli.",
    "lv": "Денес е единаесетти јули.",
    "level": "Sätze"
  },
  {
    "de": "Was machst du gewöhnlich am Abend?",
    "lv": "Што правиш обично навечер?",
    "level": "Sätze"
  },
  {
    "de": "Es ist schon lange her, dass wir uns gesehen haben.",
    "lv": "Одамна не сме се виделе.",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es dir?",
    "lv": "Како си?",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, ich möchte etwas mit dir besprechen.",
    "lv": "Извини, сакам да разговарам со тебе за нешто.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir spazieren!",
    "lv": "Да одиме на прошетка!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Lust, mit mir in den Park zu gehen?",
    "lv": "Имаш ли желба да одиш со мене во паркот?",
    "level": "Sätze"
  },
  {
    "de": "Ich komme, um dich zum Spaziergang abzuholen.",
    "lv": "Дојдов да те земам на прошетка.",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte etwas langsamer, ich kann dir nicht folgen!",
    "lv": "Оди, те молам, малку побавно, не можам да те следам!",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zum ersten Mal in dieser Gegend.",
    "lv": "Првпат сум во овој крај.",
    "level": "Sätze"
  },
  {
    "de": "Ruhen wir uns ein wenig aus.",
    "lv": "Да се одмориме малку.",
    "level": "Sätze"
  },
  {
    "de": "Jetzt können wir zurückgehen.",
    "lv": "Сега можеме да се вратиме.",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt bin ich ziemlich müde.",
    "lv": "Искрено речено, прилично сум уморен.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, wo ist die nächste U-Bahn-Station?",
    "lv": "Извини, каде е најблиската станица на метрото?",
    "level": "Sätze"
  },
  {
    "de": "Welcher ist der kürzeste Weg?",
    "lv": "Кој е најкраткиот пат?",
    "level": "Sätze"
  },
  {
    "de": "Geh hier die zweite Straße links und dann immer geradeaus.",
    "lv": "Тука сврти во втората улица лево, а потоа оди сѐ право.",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich am schnellsten zum Bahnhof?",
    "lv": "Како најбрзо да стигнам до железничката станица?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe vor, morgen zu verreisen.",
    "lv": "Планирам утре да отпатувам.",
    "level": "Sätze"
  },
  {
    "de": "Wohin willst du fahren?",
    "lv": "Каде сакаш да патуваш?",
    "level": "Sätze"
  },
  {
    "de": "Reist du geschäftlich oder privat?",
    "lv": "Патуваш ли службено или приватно?",
    "level": "Sätze"
  },
  {
    "de": "Finn fährt bis Berlin mit, dann geht er ans Meer.",
    "lv": "Фин патува со нас до Берлин, а потоа оди на море.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt das Schiff ab?",
    "lv": "Кога тргнува бродот?",
    "level": "Sätze"
  },
  {
    "de": "In einer halben Stunde.",
    "lv": "За половина час.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich noch eine Kabine bekommen?",
    "lv": "Можам ли уште да добијам кабина?",
    "level": "Sätze"
  },
  {
    "de": "Vergiss deinen Pass nicht!",
    "lv": "Не го заборавај пасошот!",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, den Koffer zu packen.",
    "lv": "Време е да се спакува куферот.",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt um halb sieben ab.",
    "lv": "Возот тргнува во шест и пол.",
    "level": "Sätze"
  },
  {
    "de": "Hol mir bitte ein Taxi, ich verpasse sonst den Zug!",
    "lv": "Викни ми, те молам, такси, инаку ќе го пропуштам возот!",
    "level": "Sätze"
  },
  {
    "de": "Fahr bitte zum Bahnhof!",
    "lv": "Вози, те молам, до железничката станица!",
    "level": "Sätze"
  },
  {
    "de": "Ich muss mich beeilen.",
    "lv": "Морам да побрзам.",
    "level": "Sätze"
  },
  {
    "de": "Ist der Schalter schon offen?",
    "lv": "Отворен ли е веќе шалтерот?",
    "level": "Sätze"
  },
  {
    "de": "Eine Fahrkarte nach Köln, bitte.",
    "lv": "Еден билет за Келн, Ве молам.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt der Zug ab?",
    "lv": "Кога тргнува возот?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt gleich ab.",
    "lv": "Возот ќе тргне секој момент.",
    "level": "Sätze"
  },
  {
    "de": "Muss ich in Koblenz umsteigen?",
    "lv": "Морам ли да преседнам во Кобленц?",
    "level": "Sätze"
  },
  {
    "de": "Ja, dort musst du umsteigen.",
    "lv": "Да, таму мораш да преседнеш.",
    "level": "Sätze"
  },
  {
    "de": "Ist dieser Platz frei?",
    "lv": "Слободно ли е ова место?",
    "level": "Sätze"
  },
  {
    "de": "Nein, hier sitzt niemand.",
    "lv": "Не, тука никој не седи.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der Bahnsteigkartenautomat?",
    "lv": "Каде е автоматот за перонски билети?",
    "level": "Sätze"
  },
  {
    "de": "Stell mein Handgepäck ins Gepäcknetz.",
    "lv": "Стави ми го рачниот багаж на полицата за багаж.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das Fenster aufmachen?",
    "lv": "Може ли да го отворам прозорецот?",
    "level": "Sätze"
  },
  {
    "de": "Es zieht, schließ bitte das Fenster!",
    "lv": "Дува, затвори го, те молам, прозорецот!",
    "level": "Sätze"
  },
  {
    "de": "Welche ist die nächste Station?",
    "lv": "Која е следната станица?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange hält der Zug?",
    "lv": "Колку долго стои возот?",
    "level": "Sätze"
  },
  {
    "de": "Wo muss ich umsteigen?",
    "lv": "Каде морам да преседнам?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug hat Verspätung.",
    "lv": "Возот доцни.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Wagen ist für Nichtraucher.",
    "lv": "Овој вагон е за непушачи.",
    "level": "Sätze"
  },
  {
    "de": "Wir fahren jetzt über die Grenze.",
    "lv": "Сега ја преминуваме границата.",
    "level": "Sätze"
  },
  {
    "de": "Hast du etwas zu verzollen?",
    "lv": "Имаш ли нешто да пријавиш на царина?",
    "level": "Sätze"
  },
  {
    "de": "Wir sind in Berlin angekommen.",
    "lv": "Пристигнавме во Берлин.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir ein gutes Hotel empfehlen?",
    "lv": "Можеш ли да ми препорачаш добар хотел?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie freie Zimmer?",
    "lv": "Имате ли слободни соби?",
    "level": "Sätze"
  },
  {
    "de": "Ein Zimmer mit zwei Betten, bitte.",
    "lv": "Една соба со два кревета, Ве молам.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Zimmer pro Nacht?",
    "lv": "Колку чини собата за една ноќ?",
    "level": "Sätze"
  },
  {
    "de": "Morgen reise ich ab. Weck mich um sieben Uhr!",
    "lv": "Утре заминувам. Разбуди ме во седум часот!",
    "level": "Sätze"
  },
  {
    "de": "Die Rechnung, bitte!",
    "lv": "Сметката, Ве молам!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Stadtbibliothek?",
    "lv": "Каде е градската библиотека?",
    "level": "Sätze"
  },
  {
    "de": "Wann hat das Museum geöffnet?",
    "lv": "Кога е отворен музејот?",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir ins Museum gehen?",
    "lv": "Да одиме ли во музејот?",
    "level": "Sätze"
  },
  {
    "de": "Fahren wir mit dem Bus oder der U-Bahn?",
    "lv": "Ќе одиме со автобус или со метро?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die nächste Bushaltestelle?",
    "lv": "Каде е најблиската автобуска постојка?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe großen Hunger.",
    "lv": "Многу сум гладен.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir zusammen essen?",
    "lv": "Одиме ли заедно да јадеме?",
    "level": "Sätze"
  },
  {
    "de": "Kellner, die Speisekarte, bitte!",
    "lv": "Келнер, менито, Ве молам!",
    "level": "Sätze"
  },
  {
    "de": "Ist der Fisch frisch?",
    "lv": "Свежа ли е рибата?",
    "level": "Sätze"
  },
  {
    "de": "Das schmeckt ausgezeichnet!",
    "lv": "Ова е извонредно вкусно!",
    "level": "Sätze"
  },
  {
    "de": "Kellner, zahlen bitte!",
    "lv": "Келнер, сметката, Ве молам!",
    "level": "Sätze"
  },
  {
    "de": "Ich gehe ins Café einen Kaffee trinken.",
    "lv": "Одам во кафуле да испијам кафе.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mitkommen?",
    "lv": "Сакаш ли да дојдеш со мене?",
    "level": "Sätze"
  },
  {
    "de": "Eine Tasse Kaffee mit Milch, bitte!",
    "lv": "Една шолја кафе со млеко, Ве молам!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneller, ich habe es eilig!",
    "lv": "Ве молам, побрзо, брзам!",
    "level": "Sätze"
  },
  {
    "de": "Lass deinen Kaffee nicht kalt werden!",
    "lv": "Не го оставај кафето да ти истине!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie etwas Erfrischendes?",
    "lv": "Имате ли нешто освежително?",
    "level": "Sätze"
  },
  {
    "de": "Eine Portion Eis, bitte!",
    "lv": "Една порција сладолед, Ве молам!",
    "level": "Sätze"
  },
  {
    "de": "Heute Morgen habe ich einen Brief bekommen.",
    "lv": "Утрово добив писмо.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss ihm gleich schreiben.",
    "lv": "Морам веднаш да му пишам.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der nächste Briefkasten?",
    "lv": "Каде е најблиското поштенско сандаче?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Post?",
    "lv": "Каде е поштата?",
    "level": "Sätze"
  },
  {
    "de": "Erinnere mich morgen daran zu schreiben!",
    "lv": "Потсети ме утре да пишам!",
    "level": "Sätze"
  },
  {
    "de": "Werfen Sie bitte diesen Brief in den Briefkasten.",
    "lv": "Ве молам, пуштете го ова писмо во поштенското сандаче.",
    "level": "Sätze"
  },
  {
    "de": "Hallo, hier spricht Emma.",
    "lv": "Ало, јас сум Ема.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich dich später anrufen?",
    "lv": "Може ли да ти се јавам подоцна?",
    "level": "Sätze"
  },
  {
    "de": "Muss ich lange warten?",
    "lv": "Морам ли долго да чекам?",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneiden Sie mir die Haare.",
    "lv": "Ве молам, исечете ми ја косата.",
    "level": "Sätze"
  },
  {
    "de": "Hinten bitte nicht zu kurz.",
    "lv": "Одзади не премногу кратко, Ве молам.",
    "level": "Sätze"
  },
  {
    "de": "Wann beginnt die Vorstellung?",
    "lv": "Кога почнува претставата?",
    "level": "Sätze"
  },
  {
    "de": "Es fängt um halb acht an.",
    "lv": "Почнува во седум и пол.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind ausverkauft.",
    "lv": "Сите места се распродадени.",
    "level": "Sätze"
  },
  {
    "de": "Drei Karten, bitte!",
    "lv": "Три билета, Ве молам!",
    "level": "Sätze"
  },
  {
    "de": "Wir lassen die Jacken in der Garderobe.",
    "lv": "Ги оставаме јакните во гардеробата.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schnell, der Vorhang geht gleich auf!",
    "lv": "Брзо, ве молам, завесата ќе се крене секој момент!",
    "level": "Sätze"
  },
  {
    "de": "Der Vorhang fällt.",
    "lv": "Завесата паѓа.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dich zum Tanz bitten?",
    "lv": "Може ли да те поканам на танц?",
    "level": "Sätze"
  },
  {
    "de": "Wann ist eure Hochzeit?",
    "lv": "Кога е вашата свадба?",
    "level": "Sätze"
  },
  {
    "de": "Ich suche eine Wohnung.",
    "lv": "Барам стан.",
    "level": "Sätze"
  },
  {
    "de": "Ist in diesem Haus eine Wohnung frei?",
    "lv": "Има ли слободен стан во оваа зграда?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet die Miete?",
    "lv": "Колку изнесува киријата?",
    "level": "Sätze"
  },
  {
    "de": "Die Wohnung hat drei Zimmer und eine Küche.",
    "lv": "Станот има три соби и кујна.",
    "level": "Sätze"
  },
  {
    "de": "Heute ziehen wir um.",
    "lv": "Денес се селиме.",
    "level": "Sätze"
  },
  {
    "de": "Mia, pack die Sachen bitte in Kisten!",
    "lv": "Мија, спакувај ги, те молам, работите во кутии!",
    "level": "Sätze"
  },
  {
    "de": "Hast du alles eingepackt?",
    "lv": "Спакува ли сѐ?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe mit meinem Freund in Kontakt.",
    "lv": "Во контакт сум со мојот пријател.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir ins Theater?",
    "lv": "Одиме ли во театар?",
    "level": "Sätze"
  },
  {
    "de": "Ist alles eingeladen?",
    "lv": "Натоварено ли е сѐ?",
    "level": "Sätze"
  },
  {
    "de": "Welch schöne Aussicht!",
    "lv": "Каков убав поглед!",
    "level": "Sätze"
  },
  {
    "de": "Nun können wir alles wieder aufräumen.",
    "lv": "Сега можеме повторно да средиме сѐ.",
    "level": "Sätze"
  },
  {
    "de": "Wie viele Zimmer habt ihr?",
    "lv": "Колку соби имате?",
    "level": "Sätze"
  },
  {
    "de": "Im Sommer fahre ich ans Meer.",
    "lv": "Во лето одам на море.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du schwimmen?",
    "lv": "Знаеш ли да пливаш?",
    "level": "Sätze"
  },
  {
    "de": "Schwimm nicht zu weit hinaus!",
    "lv": "Не пливај премногу далеку!",
    "level": "Sätze"
  },
  {
    "de": "Badest du jeden Tag?",
    "lv": "Се капеш ли секој ден?",
    "level": "Sätze"
  },
  {
    "de": "Bei schönem Wetter gehe ich angeln.",
    "lv": "Кога е убаво времето, одам на риболов.",
    "level": "Sätze"
  },
  {
    "de": "Wie sieht er aus?",
    "lv": "Како изгледа?",
    "level": "Sätze"
  },
  {
    "de": "Er hat sich aber recht verändert.",
    "lv": "Навистина доста се променил.",
    "level": "Sätze"
  },
  {
    "de": "Wie ist er als Mensch?",
    "lv": "Каков е како човек?",
    "level": "Sätze"
  },
  {
    "de": "Er ist immer nett und freundlich.",
    "lv": "Секогаш е мил и љубезен.",
    "level": "Sätze"
  },
  {
    "de": "Ich fühle mich nicht wohl.",
    "lv": "Не се чувствувам добро.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe starke Kopfschmerzen.",
    "lv": "Имам силна главоболка.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe mich erkältet.",
    "lv": "Настинав.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Schnupfen.",
    "lv": "Имам хрема.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist schwindlig.",
    "lv": "Ми се врти во главата.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Arzt gehen.",
    "lv": "Морам да одам на лекар.",
    "level": "Sätze"
  },
  {
    "de": "Leg dich ins Bett!",
    "lv": "Легни во кревет!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Fieber?",
    "lv": "Имаш ли температура?",
    "level": "Sätze"
  },
  {
    "de": "Gestern hatte ich erhöhte Temperatur.",
    "lv": "Вчера имав покачена температура.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Zahnschmerzen.",
    "lv": "Ме боли заб.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Zahnarzt gehen.",
    "lv": "Морам да одам на забар.",
    "level": "Sätze"
  },
  {
    "de": "Weißt du, dass Finn krank ist?",
    "lv": "Знаеш ли дека Фин е болен?",
    "level": "Sätze"
  },
  {
    "de": "Laut Arzt wird er bald wieder gesund.",
    "lv": "Според лекарот, наскоро ќе оздрави.",
    "level": "Sätze"
  },
  {
    "de": "Ich will meine Wohnung neu möblieren.",
    "lv": "Сакам да го опремам станот со нов мебел.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das auf Raten kaufen?",
    "lv": "Може ли да го купам ова на рати?",
    "level": "Sätze"
  },
  {
    "de": "Bleib im Bett, bis es dir besser geht!",
    "lv": "Остани во кревет додека не ти биде подобро!",
    "level": "Sätze"
  },
  {
    "de": "Noah hat in zwei Wochen schwimmen gelernt.",
    "lv": "Ноа научи да плива за две недели.",
    "level": "Sätze"
  },
  {
    "de": "Sei mit dem Essen noch vorsichtig.",
    "lv": "Засега внимавај со храната.",
    "level": "Sätze"
  },
  {
    "de": "Sprichst du Deutsch?",
    "lv": "Зборуваш ли германски?",
    "level": "Sätze"
  },
  {
    "de": "Ja, ein bisschen.",
    "lv": "Да, малку.",
    "level": "Sätze"
  },
  {
    "de": "Du sprichst ziemlich fließend.",
    "lv": "Зборуваш доста течно.",
    "level": "Sätze"
  },
  {
    "de": "Wo hast du Deutsch gelernt?",
    "lv": "Каде научи германски?",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme seit einem Jahr Deutschstunden.",
    "lv": "Веќе една година земам часови по германски.",
    "level": "Sätze"
  },
  {
    "de": "Ich suche immer Gelegenheit, Deutsch zu sprechen.",
    "lv": "Секогаш барам прилика да зборувам германски.",
    "level": "Sätze"
  },
  {
    "de": "Ist das Buch noch vorrätig?",
    "lv": "Дали книгата е сѐ уште на залиха?",
    "level": "Sätze"
  },
  {
    "de": "Das Buch ist leider ausverkauft.",
    "lv": "За жал, книгата е распродадена.",
    "level": "Sätze"
  },
  {
    "de": "Wann erscheint die neue Auflage?",
    "lv": "Кога ќе излезе новото издание?",
    "level": "Sätze"
  },
  {
    "de": "Womit kann ich Ihnen helfen?",
    "lv": "Со што можам да Ви помогнам?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie ganz frische Eier?",
    "lv": "Имате ли сосема свежи јајца?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die?",
    "lv": "Колку чинат?",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu teuer.",
    "lv": "Тоа е прескапо.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir ein halbes Kilo abwiegen?",
    "lv": "Можете ли да ми измерите половина килограм?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel muss ich zahlen?",
    "lv": "Колку треба да платам?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet das Kilo?",
    "lv": "Колку чини килограмот?",
    "level": "Sätze"
  },
  {
    "de": "Wiegen Sie mir bitte zwei Kilo ab.",
    "lv": "Измерете ми, Ве молам, два килограма.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch Karotten?",
    "lv": "Имате ли и моркови?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie gutes Rindfleisch?",
    "lv": "Имате ли добро говедско месо?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir zwei Kilo Hackfleisch.",
    "lv": "Дајте ми два килограма мелено месо.",
    "level": "Sätze"
  },
  {
    "de": "Ein Laib Brot, bitte, aber nicht zu knusprig.",
    "lv": "Еден леб, Ве молам, но не премногу крцкав.",
    "level": "Sätze"
  },
  {
    "de": "Das Brot ist frisch gebacken.",
    "lv": "Лебот е свежо печен.",
    "level": "Sätze"
  },
  {
    "de": "Was für Obst haben Sie heute?",
    "lv": "Какво овошје имате денес?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die Äpfel?",
    "lv": "Колку чинат јаболката?",
    "level": "Sätze"
  },
  {
    "de": "Dann nehme ich zwei Kilo Äpfel.",
    "lv": "Тогаш ќе земам два килограма јаболка.",
    "level": "Sätze"
  },
  {
    "de": "Die Birnen sind sehr teuer.",
    "lv": "Крушите се многу скапи.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir alles nach Hause liefern?",
    "lv": "Можете ли да ми доставите сѐ дома?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie Reis?",
    "lv": "Имате ли ориз?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir bitte ein Kilo Reis.",
    "lv": "Дајте ми, Ве молам, еден килограм ориз.",
    "level": "Sätze"
  },
  {
    "de": "Danke, diesmal nicht.",
    "lv": "Благодарам, овој пат не.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet dieser Teppich?",
    "lv": "Колку чини овој тепих?",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Möbel in meine Wohnung liefern?",
    "lv": "Можете ли да го доставите мебелот во мојот стан?",
    "level": "Sätze"
  },
  {
    "de": "Bitte an der Kasse zahlen.",
    "lv": "Ве молиме, платете на каса.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, machen Sie die Rechnung.",
    "lv": "Ве молам, издадете ми сметка.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Meter?",
    "lv": "Колку чини метарот?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Stoff gefällt mir.",
    "lv": "Ми се допаѓа оваа ткаенина.",
    "level": "Sätze"
  },
  {
    "de": "Schneiden Sie mir bitte drei Meter ab.",
    "lv": "Отсечете ми, Ве молам, три метри.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch andere Muster?",
    "lv": "Имате ли и други шари? • Имате ли и други мостри?",
    "level": "Sätze"
  },
  {
    "de": "Diese Farbe gefällt mir nicht.",
    "lv": "Не ми се допаѓа оваа боја.",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir eine hellere.",
    "lv": "Дајте ми посветла.",
    "level": "Sätze"
  },
  {
    "de": "Was kosten diese Socken?",
    "lv": "Колку чинат овие чорапи?",
    "level": "Sätze"
  },
  {
    "de": "Welche Handschuhe wünschen Sie?",
    "lv": "Какви ракавици сакате?",
    "level": "Sätze"
  },
  {
    "de": "Die sind mir etwas zu eng.",
    "lv": "Малку ми се претесни.",
    "level": "Sätze"
  },
  {
    "de": "So, nun passen sie gut.",
    "lv": "Така, сега ми стојат добро.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir einen guten Schneider empfehlen?",
    "lv": "Можеш ли да ми препорачаш добар кројач?",
    "level": "Sätze"
  },
  {
    "de": "Ich will einen Anzug bestellen.",
    "lv": "Сакам да нарачам костум.",
    "level": "Sätze"
  },
  {
    "de": "Wann wird er fertig sein?",
    "lv": "Кога ќе биде готов?",
    "level": "Sätze"
  },
  {
    "de": "Der Anzug sitzt gut.",
    "lv": "Костумот стои добро.",
    "level": "Sätze"
  },
  {
    "de": "Die Hose ist zu lang.",
    "lv": "Панталоните се предолги.",
    "level": "Sätze"
  },
  {
    "de": "Bitte reinigen und bügeln Sie ihn!",
    "lv": "Ве молам, исчистете го и испеглајте го!",
    "level": "Sätze"
  },
  {
    "de": "Wann wird das Kleid fertig sein?",
    "lv": "Кога ќе биде готов фустанот?",
    "level": "Sätze"
  },
  {
    "de": "Die Schuhe sind zu eng.",
    "lv": "Чевлите се претесни.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Schuhe heute reparieren?",
    "lv": "Можете ли денес да ги поправите чевлите?",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich die Schuhe abholen?",
    "lv": "Кога можам да ги подигнам чевлите?",
    "level": "Sätze"
  },
  {
    "de": "Meine Armbanduhr funktioniert nicht.",
    "lv": "Рачниот часовник не ми работи.",
    "level": "Sätze"
  },
  {
    "de": "Sie geht fünf Minuten vor.",
    "lv": "Брза пет минути.",
    "level": "Sätze"
  },
  {
    "de": "Bist du kurzsichtig oder weitsichtig?",
    "lv": "Дали си кратковид или далековид?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte eine Brille kaufen.",
    "lv": "Би сакал да купам очила.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie meine Brille reparieren?",
    "lv": "Можете ли да ми ги поправите очилата?",
    "level": "Sätze"
  },
  {
    "de": "Das dauert nur eine Viertelstunde.",
    "lv": "Тоа трае само четвртина час.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist mir zu hoch.",
    "lv": "Цената ми е превисока.",
    "level": "Sätze"
  },
  {
    "de": "Ich brauche zwei Fotos für meinen Pass.",
    "lv": "Ми требаат две фотографии за пасошот.",
    "level": "Sätze"
  },
  {
    "de": "Bitte packen Sie es ein und schicken Sie es mir nach Hause.",
    "lv": "Ве молам, спакувајте го и пратете ми го дома.",
    "level": "Sätze"
  },
  {
    "de": "Wir haben feste Preise.",
    "lv": "Имаме фиксни цени.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, fotografieren Sie mich.",
    "lv": "Ве молам, фотографирајте ме.",
    "level": "Sätze"
  },
  {
    "de": "Setzen Sie sich, schauen Sie gerade in die Kamera und bewegen Sie sich nicht!",
    "lv": "Седнете, гледајте право во камерата и не се движете!",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich das Probebild sehen?",
    "lv": "Кога можам да ја видам пробната фотографија?",
    "level": "Sätze"
  },
  {
    "de": "Wann sind die Fotos fertig?",
    "lv": "Кога ќе бидат готови фотографиите?",
    "level": "Sätze"
  },
  {
    "de": "Die Aufnahme ist gelungen.",
    "lv": "Снимката успеа.",
    "level": "Sätze"
  },
  {
    "de": "Die Fotos sind gut geworden.",
    "lv": "Фотографиите испаднаа добри.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie das Foto auch vergrößern?",
    "lv": "Можете ли и да ја зголемите фотографијата?",
    "level": "Sätze"
  },
  {
    "de": "Sind diese Steine echt?",
    "lv": "Дали овие камења се вистински?",
    "level": "Sätze"
  },
  {
    "de": "Ist das echtes Gold?",
    "lv": "Дали е ова вистинско злато?",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir bitte Trauringe.",
    "lv": "Покажете ми, Ве молам, бурми.",
    "level": "Sätze"
  },
  {
    "de": "Der Ring ist mir etwas zu weit.",
    "lv": "Прстенот ми е малку преширок.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann ihn enger machen.",
    "lv": "Можам да го стеснам.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Ring passt mir.",
    "lv": "Овој прстен ми одговара.",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir schöne Geschenkideen.",
    "lv": "Покажете ми убави идеи за подароци.",
    "level": "Sätze"
  },
  {
    "de": "Wie gefallen dir diese Ohrringe?",
    "lv": "Како ти се допаѓаат овие обетки?",
    "level": "Sätze"
  },
  {
    "de": "Diese Brosche ist wirklich schön.",
    "lv": "Оваа брошка е навистина убава.",
    "level": "Sätze"
  },
  {
    "de": "Der Stein ist ein Saphir.",
    "lv": "Каменот е сафир.",
    "level": "Sätze"
  },
  {
    "de": "Das ist kein echter Stein, das ist Glas.",
    "lv": "Ова не е вистински камен, тоа е стакло.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Armband kann ich Ihnen besonders empfehlen.",
    "lv": "Оваа нараквица можам особено да Ви ја препорачам.",
    "level": "Sätze"
  },
  {
    "de": "Es ist besonders schön gearbeitet.",
    "lv": "Особено убаво е изработена.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist nicht hoch.",
    "lv": "Цената не е висока.",
    "level": "Sätze"
  },
  {
    "de": "Bekomme ich die Schachtel gratis?",
    "lv": "Дали ја добивам кутијата бесплатно?",
    "level": "Sätze"
  },
  {
    "de": "Alle Schmuckstücke sind gestempelt.",
    "lv": "Сите накити се жигосани.",
    "level": "Sätze"
  },
  {
    "de": "Falls es meiner Frau nicht gefällt, kann ich es umtauschen?",
    "lv": "Ако не ѝ се допадне на жена ми, можам ли да го заменам?",
    "level": "Sätze"
  },
  {
    "de": "Natürlich, jederzeit.",
    "lv": "Секако, во секое време.",
    "level": "Sätze"
  }
];

window.SENTENCE_ENTRIES = SENTENCE_ENTRIES;

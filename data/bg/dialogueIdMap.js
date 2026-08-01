const DIALOGUE_ID_MAP = {
  "diag_001": {
    "de": "Gute Besserung!",
    "lv": "Поправляйся! • Поправляйся!"
  },
  "diag_002": {
    "de": "Frohes neues Jahr!",
    "lv": "С Новым Годом!"
  },
  "diag_003": {
    "de": "Herzlichen Glückwunsch zum Geburtstag!",
    "lv": "С днем ​​рождения!"
  },
  "diag_004": {
    "de": "Gute Reise!",
    "lv": "Счастливого путешествия!"
  },
  "diag_005": {
    "de": "Es freut mich, Sie kennenzulernen.",
    "lv": "Я рад познакомиться с вами."
  },
  "diag_006": {
    "de": "Wären Sie bitte so nett?",
    "lv": "Не могли бы вы быть так любезны?"
  },
  "diag_007": {
    "de": "Ich bin Ihnen sehr dankbar.",
    "lv": "Я очень благодарен вам."
  },
  "diag_008": {
    "de": "Keine Ursache!",
    "lv": "Ничего просто так!"
  },
  "diag_009": {
    "de": "Setzt euch bitte hin!",
    "lv": "Садитесь, пожалуйста!"
  },
  "diag_010": {
    "de": "Ben, komm bitte an die Tafel!",
    "lv": "Бен, пожалуйста, подойди к доске!"
  },
  "diag_011": {
    "de": "Schlagt bitte die Lehrbücher auf!",
    "lv": "Откройте учебники, пожалуйста!"
  },
  "diag_012": {
    "de": "Geht bitte in die Sporthalle!",
    "lv": "Пожалуйста, идите в спортзал!"
  },
  "diag_013": {
    "de": "Schläfst du noch?",
    "lv": "Ты все еще спишь?"
  },
  "diag_014": {
    "de": "Schlafen Sie noch?",
    "lv": "Ты все еще спишь?"
  },
  "diag_015": {
    "de": "Er ist fest eingeschlafen.",
    "lv": "Он крепко спит."
  },
  "diag_016": {
    "de": "Wecke ihn bitte auf, es ist schon spät!",
    "lv": "Пожалуйста, разбудите его, уже поздно!"
  },
  "diag_017": {
    "de": "Guten Morgen!",
    "lv": "Добро утро"
  },
  "diag_018": {
    "de": "Guten Tag!",
    "lv": "Привет!"
  },
  "diag_019": {
    "de": "Gute Nacht!",
    "lv": "Спокойной ночи!"
  },
  "diag_020": {
    "de": "Entschuldigen Sie bitte!",
    "lv": "Извините, пожалуйста!"
  },
  "diag_021": {
    "de": "Es tut mir sehr leid!",
    "lv": "Мне очень жаль!"
  },
  "diag_022": {
    "de": "Vielen Dank!",
    "lv": "Благодаря много!"
  },
  "diag_023": {
    "de": "Finn, fang bitte an!",
    "lv": "Финн, начни, пожалуйста!"
  },
  "diag_024": {
    "de": "Lest bitte mit!",
    "lv": "Читайте дальше, пожалуйста!"
  },
  "diag_025": {
    "de": "Emma, schau bitte nicht aus dem Fenster!",
    "lv": "Эмма, пожалуйста, не смотри в окно!"
  },
  "diag_026": {
    "de": "Jonas, bring bitte die Hefte!",
    "lv": "Йонас, принеси, пожалуйста, тетради!"
  },
  "diag_027": {
    "de": "Geh bitte zurück an deinen Platz!",
    "lv": "Возвращайся на свое место!"
  },
  "diag_028": {
    "de": "Wie viel Uhr ist es?",
    "lv": "Который сейчас час?"
  },
  "diag_029": {
    "de": "Es ist halb acht.",
    "lv": "Сейчас половина восьмого."
  },
  "diag_030": {
    "de": "Wann wachst du gewöhnlich auf?",
    "lv": "Когда ты обычно просыпаешься?"
  },
  "diag_031": {
    "de": "Ich stehe gleich auf.",
    "lv": "Я сейчас встану."
  },
  "diag_032": {
    "de": "Steh auf, Hanna, es klingelt!",
    "lv": "Вставай, Ханна, звонит звонок!"
  },
  "diag_033": {
    "de": "Lass mich noch fünf Minuten schlafen!",
    "lv": "Дайте мне поспать еще пять минут!"
  },
  "diag_034": {
    "de": "Vergiss nicht, das Zimmer zu lüften!",
    "lv": "Не забывайте проветривать помещение!"
  },
  "diag_035": {
    "de": "Wo ist das Handtuch?",
    "lv": "Где полотенце"
  },
  "diag_036": {
    "de": "Ich möchte mir die Zähne putzen.",
    "lv": "Я хочу почистить зубы."
  },
  "diag_037": {
    "de": "Mit was putzt du dir die Zähne?",
    "lv": "Чем вы чистите зубы?"
  },
  "diag_038": {
    "de": "Ich möchte mich anziehen.",
    "lv": "Я хочу одеться."
  },
  "diag_039": {
    "de": "Zieh dich bitte schnell an!",
    "lv": "Одевайтесь быстрее, пожалуйста!"
  },
  "diag_040": {
    "de": "Kleide dich wärmer an, draußen ist es kühl.",
    "lv": "Одевайтесь теплее, на улице холодно."
  },
  "diag_041": {
    "de": "Guten Morgen, wie geht es dir?",
    "lv": "Доброе утро, как дела?"
  },
  "diag_042": {
    "de": "Mir geht es gut, danke.",
    "lv": "Я хорошо, спасибо."
  },
  "diag_043": {
    "de": "Was gibt es Neues?",
    "lv": "Что нового?"
  },
  "diag_044": {
    "de": "Auf Wiedersehen!",
    "lv": "До свидания!"
  },
  "diag_045": {
    "de": "Was für ein Chaos hier!",
    "lv": "Какой здесь бардак!"
  },
  "diag_046": {
    "de": "Darf ich beim Aufräumen helfen?",
    "lv": "Могу ли я помочь с уборкой?"
  },
  "diag_047": {
    "de": "Was trinkst du morgens, Kaffee oder Tee?",
    "lv": "Что вы пьете утром, кофе или чай?"
  },
  "diag_048": {
    "de": "Gewöhnlich trinke ich morgens eine Tasse Kaffee.",
    "lv": "Я обычно выпиваю чашку кофе утром."
  },
  "diag_049": {
    "de": "Am liebsten trinke ich schwarzen Kaffee.",
    "lv": "Я лучше всего пью черный кофе."
  },
  "diag_050": {
    "de": "Guten Morgen, hast du gut geschlafen?",
    "lv": "Доброе утро, ты хорошо спал?"
  },
  "diag_051": {
    "de": "Ich bin noch sehr müde.",
    "lv": "Я все еще очень устал."
  },
  "diag_052": {
    "de": "Willst du Kaffee oder Milch?",
    "lv": "Хочешь кофе или молока?"
  },
  "diag_053": {
    "de": "Gib mir bitte ein Brötchen mit Käse.",
    "lv": "Дайте мне сырную булочку, пожалуйста."
  },
  "diag_054": {
    "de": "Ich muss jetzt los!",
    "lv": "Сейчас я должен идти!"
  },
  "diag_055": {
    "de": "Vergiss dein Frühstück nicht!",
    "lv": "Не забудьте завтрак!"
  },
  "diag_056": {
    "de": "Klara, deck bitte den Tisch!",
    "lv": "Клара, пожалуйста, накрой на стол!"
  },
  "diag_057": {
    "de": "Vergiss die Servietten nicht!",
    "lv": "Не забудьте салфетки!"
  },
  "diag_058": {
    "de": "Wann esst ihr zu Mittag?",
    "lv": "Когда ты обедаешь"
  },
  "diag_059": {
    "de": "Es ist Zeit zu essen.",
    "lv": "Пришло время поесть."
  },
  "diag_060": {
    "de": "Was gibt es heute zu Mittag?",
    "lv": "Что сегодня на обед?"
  },
  "diag_061": {
    "de": "Wie schmeckt dir die Suppe?",
    "lv": "Как вам суп?"
  },
  "diag_062": {
    "de": "Ehrlich gesagt ist sie etwas zu salzig.",
    "lv": "Честно говоря, оно слишком соленое."
  },
  "diag_063": {
    "de": "Darf ich dir ein Stück Brot geben?",
    "lv": "Могу я дать вам кусок хлеба?"
  },
  "diag_064": {
    "de": "Danke, ich habe schon.",
    "lv": "Спасибо, у меня уже есть."
  },
  "diag_065": {
    "de": "Das Fleisch schmeckt ausgezeichnet.",
    "lv": "Мясо имеет прекрасный вкус."
  },
  "diag_066": {
    "de": "Danke, ich bin schon satt.",
    "lv": "Спасибо, я уже сыт."
  },
  "diag_067": {
    "de": "Heute haben wir Besuch.",
    "lv": "Сегодня у нас гости."
  },
  "diag_068": {
    "de": "Bist du heute Abend frei?",
    "lv": "Ты свободен сегодня вечером?"
  },
  "diag_069": {
    "de": "Komm doch heute zum Mittagessen vorbei!",
    "lv": "Приходите сегодня на обед!"
  },
  "diag_070": {
    "de": "Setzen wir uns an den Tisch.",
    "lv": "Давайте сядем за стол."
  },
  "diag_071": {
    "de": "Bitte, bedien dich!",
    "lv": "Пожалуйста, ешьте столько, сколько хотите!"
  },
  "diag_072": {
    "de": "Stört dich das Rauchen?",
    "lv": "Вас беспокоит курение?"
  },
  "diag_073": {
    "de": "Danke für die nette Aufnahme!",
    "lv": "Спасибо за теплый прием!"
  },
  "diag_074": {
    "de": "Wann gehst du ins Bett?",
    "lv": "Когда ты идешь спать"
  },
  "diag_075": {
    "de": "Wenn ich von der Arbeit komme, bin ich immer müde.",
    "lv": "Я всегда уставший, когда прихожу с работы."
  },
  "diag_076": {
    "de": "Es ist Zeit, ins Bett zu gehen.",
    "lv": "Пора идти спать."
  },
  "diag_077": {
    "de": "Es ist schönes Wetter.",
    "lv": "Это хорошее время."
  },
  "diag_078": {
    "de": "Willst du mit mir spazieren gehen?",
    "lv": "Хочешь прогуляться со мной?"
  },
  "diag_079": {
    "de": "Sieh mal, es wird gleich regnen.",
    "lv": "Смотри, скоро пойдет дождь."
  },
  "diag_080": {
    "de": "Nimm den Regenschirm mit!",
    "lv": "Возьмите с собой зонтик!"
  },
  "diag_081": {
    "de": "Es regnet.",
    "lv": "Вали дъжд."
  },
  "diag_082": {
    "de": "Ich bin schon ganz nass.",
    "lv": "Я уже совсем мокрый."
  },
  "diag_083": {
    "de": "Glaubst du, dass es den ganzen Tag regnen wird?",
    "lv": "Думаешь, весь день будет идти дождь?"
  },
  "diag_084": {
    "de": "Es hört auf zu regnen.",
    "lv": "Дождь прекращается."
  },
  "diag_085": {
    "de": "Die Sonne scheint wieder.",
    "lv": "Солнце светит снова."
  },
  "diag_086": {
    "de": "Es ist sehr warm.",
    "lv": "Очень жарко."
  },
  "diag_087": {
    "de": "Es sieht nach Regen aus.",
    "lv": "Похоже, собирается пойти дождь."
  },
  "diag_088": {
    "de": "Wir bekommen gleich ein Gewitter.",
    "lv": "Нас ждет гроза."
  },
  "diag_089": {
    "de": "Das Gewitter zieht vorüber.",
    "lv": "Гроза прошла."
  },
  "diag_090": {
    "de": "Die Wolken verziehen sich.",
    "lv": "Облака расходятся."
  },
  "diag_091": {
    "de": "Siehst du den Regenbogen?",
    "lv": "Видите радугу?"
  },
  "diag_092": {
    "de": "Der Winter ist da, es hat geschneit.",
    "lv": "Зима пришла, ночью пошел снег."
  },
  "diag_093": {
    "de": "Es schneit.",
    "lv": "Идет снег."
  },
  "diag_094": {
    "de": "Wie schön ist es im Wald im Winter!",
    "lv": "Как красиво зимой в лесу!"
  },
  "diag_095": {
    "de": "Mir ist kalt, ich friere.",
    "lv": "Мне холодно, я замерзаю."
  },
  "diag_096": {
    "de": "Draußen ist Glatteis, pass auf!",
    "lv": "На улице скользко, будьте осторожны!"
  },
  "diag_097": {
    "de": "Wollen wir auf die Eisbahn gehen?",
    "lv": "Пойдем кататься на коньках?"
  },
  "diag_098": {
    "de": "Zieh die Jacke an, du kannst dich erkälten.",
    "lv": "Надень куртку, можешь простудиться."
  },
  "diag_099": {
    "de": "Wie spät ist es?",
    "lv": "Который сейчас час"
  },
  "diag_100": {
    "de": "Es ist halb sieben.",
    "lv": "Сейчас половина восьмого."
  },
  "diag_101": {
    "de": "Meine Uhr geht fünf Minuten vor.",
    "lv": "Мои часы спешат на пять минут."
  },
  "diag_102": {
    "de": "Weck mich morgen früh um sieben Uhr!",
    "lv": "Разбуди меня завтра в семь часов!"
  },
  "diag_103": {
    "de": "Was ist heute für ein Datum?",
    "lv": "Какая сегодня дата?"
  },
  "diag_104": {
    "de": "Heute ist der elfte Juli.",
    "lv": "Сегодня одиннадцатое июля."
  },
  "diag_105": {
    "de": "Was machst du gewöhnlich am Abend?",
    "lv": "Что ты обычно делаешь по вечерам?"
  },
  "diag_106": {
    "de": "Es ist schon lange her, dass wir uns gesehen haben.",
    "lv": "Мы давно не встречались."
  },
  "diag_107": {
    "de": "Wie geht es dir?",
    "lv": "Как си"
  },
  "diag_108": {
    "de": "Entschuldige, ich möchte etwas mit dir besprechen.",
    "lv": "Извините, я хочу с вами кое-что обсудить."
  },
  "diag_109": {
    "de": "Gehen wir spazieren!",
    "lv": "Пойдем гулять!"
  },
  "diag_110": {
    "de": "Hast du Lust, mit mir in den Park zu gehen?",
    "lv": "Хочешь пойти со мной в парк?"
  },
  "diag_111": {
    "de": "Ich komme, um dich zum Spaziergang abzuholen.",
    "lv": "Я пришел, чтобы отвезти тебя на прогулку."
  },
  "diag_112": {
    "de": "Geh bitte etwas langsamer, ich kann dir nicht folgen!",
    "lv": "Иди немного медленнее, я не успеваю за тобой!"
  },
  "diag_113": {
    "de": "Ich bin zum ersten Mal in dieser Gegend.",
    "lv": "Я здесь впервые."
  },
  "diag_114": {
    "de": "Ruhen wir uns ein wenig aus.",
    "lv": "Давайте немного отдохнем."
  },
  "diag_115": {
    "de": "Jetzt können wir zurückgehen.",
    "lv": "Теперь мы можем вернуться назад."
  },
  "diag_116": {
    "de": "Ehrlich gesagt bin ich ziemlich müde.",
    "lv": "Честно говоря, я очень устал."
  },
  "diag_117": {
    "de": "Entschuldige, wo ist die nächste U-Bahn-Station?",
    "lv": "Простите, где ближайшая станция метро?"
  },
  "diag_118": {
    "de": "Welcher ist der kürzeste Weg?",
    "lv": "Какой путь самый короткий?"
  },
  "diag_119": {
    "de": "Geh hier die zweite Straße links und dann immer geradeaus.",
    "lv": "Здесь поверните на вторую улицу налево и идите прямо."
  },
  "diag_120": {
    "de": "Wie komme ich am schnellsten zum Bahnhof?",
    "lv": "Как быстрее добраться до вокзала?"
  },
  "diag_121": {
    "de": "Ich habe vor, morgen zu verreisen.",
    "lv": "Я намерен уехать завтра."
  },
  "diag_122": {
    "de": "Wohin willst du fahren?",
    "lv": "Куда вы хотите пойти?"
  },
  "diag_123": {
    "de": "Reist du geschäftlich oder privat?",
    "lv": "Вы путешествуете по работе или на отдых?"
  },
  "diag_124": {
    "de": "Finn fährt bis Berlin mit, dann geht er ans Meer.",
    "lv": "Финн едет в Берлин, потом поедет на море."
  },
  "diag_125": {
    "de": "Wann fährt das Schiff ab?",
    "lv": "Когда корабль отправляется?"
  },
  "diag_126": {
    "de": "In einer halben Stunde.",
    "lv": "Через полчаса."
  },
  "diag_127": {
    "de": "Kann ich noch eine Kabine bekommen?",
    "lv": "Могу ли я еще получить каюту?"
  },
  "diag_128": {
    "de": "Vergiss deinen Pass nicht!",
    "lv": "Не забудьте паспорт!"
  },
  "diag_129": {
    "de": "Es ist Zeit, den Koffer zu packen.",
    "lv": "Пришло время собирать чемодан."
  },
  "diag_130": {
    "de": "Der Zug fährt um halb sieben ab.",
    "lv": "Поезд отправляется в половине восьмого."
  },
  "diag_131": {
    "de": "Hol mir bitte ein Taxi, ich verpasse sonst den Zug!",
    "lv": "Вызовите такси, пожалуйста, а то я опоздаю на поезд!"
  },
  "diag_132": {
    "de": "Fahr bitte zum Bahnhof!",
    "lv": "Пожалуйста, отвезите меня на станцию!"
  },
  "diag_133": {
    "de": "Ich muss mich beeilen.",
    "lv": "Трябва да побързам."
  },
  "diag_134": {
    "de": "Ist der Schalter schon offen?",
    "lv": "Касса уже открыта?"
  },
  "diag_135": {
    "de": "Eine Fahrkarte nach Köln, bitte.",
    "lv": "Один билет до Кёльна, пожалуйста."
  },
  "diag_136": {
    "de": "Wann fährt der Zug ab?",
    "lv": "Когда отправляется поезд?"
  },
  "diag_137": {
    "de": "Der Zug fährt gleich ab.",
    "lv": "Поезд скоро отправляется."
  },
  "diag_138": {
    "de": "Muss ich in Koblenz umsteigen?",
    "lv": "Нужно ли мне пересаживаться в Кобленце?"
  },
  "diag_139": {
    "de": "Ja, dort musst du umsteigen.",
    "lv": "Да, вам придется пересесть там."
  },
  "diag_140": {
    "de": "Ist dieser Platz frei?",
    "lv": "Это место доступно?"
  },
  "diag_141": {
    "de": "Nein, hier sitzt niemand.",
    "lv": "Нет, здесь никто не сидит."
  },
  "diag_142": {
    "de": "Wo ist der Bahnsteigkartenautomat?",
    "lv": "Где находится билетный автомат на платформе?"
  },
  "diag_143": {
    "de": "Stell mein Handgepäck ins Gepäcknetz.",
    "lv": "Положи мою ручную кладь в сетку."
  },
  "diag_144": {
    "de": "Kann ich das Fenster aufmachen?",
    "lv": "Можно мне открыть окно?"
  },
  "diag_145": {
    "de": "Es zieht, schließ bitte das Fenster!",
    "lv": "Выходите, пожалуйста, закройте окно!"
  },
  "diag_146": {
    "de": "Welche ist die nächste Station?",
    "lv": "Какая следующая остановка?"
  },
  "diag_147": {
    "de": "Wie lange hält der Zug?",
    "lv": "Сколько стоит поезд?"
  },
  "diag_148": {
    "de": "Wo muss ich umsteigen?",
    "lv": "Куда мне следует перевестись?"
  },
  "diag_149": {
    "de": "Der Zug hat Verspätung.",
    "lv": "Поезд опаздывает."
  },
  "diag_150": {
    "de": "Dieser Wagen ist für Nichtraucher.",
    "lv": "В этом вагоне курение запрещено."
  },
  "diag_151": {
    "de": "Wir fahren jetzt über die Grenze.",
    "lv": "Сейчас мы едем через границу."
  },
  "diag_152": {
    "de": "Hast du etwas zu verzollen?",
    "lv": "У вас есть что очистить?"
  },
  "diag_153": {
    "de": "Wir sind in Berlin angekommen.",
    "lv": "Мы прибыли в Берлин."
  },
  "diag_154": {
    "de": "Kannst du mir ein gutes Hotel empfehlen?",
    "lv": "Можете ли вы порекомендовать хороший отель?"
  },
  "diag_155": {
    "de": "Haben Sie freie Zimmer?",
    "lv": "Есть ли у вас свободные номера?"
  },
  "diag_156": {
    "de": "Ein Zimmer mit zwei Betten, bitte.",
    "lv": "Пожалуйста, номер с двумя кроватями."
  },
  "diag_157": {
    "de": "Was kostet das Zimmer pro Nacht?",
    "lv": "Сколько стоит номер за ночь?"
  },
  "diag_158": {
    "de": "Morgen reise ich ab. Weck mich um sieben Uhr!",
    "lv": "Я уезжаю завтра. Разбуди меня в семь!"
  },
  "diag_159": {
    "de": "Die Rechnung, bitte!",
    "lv": "Счет, пожалуйста!"
  },
  "diag_160": {
    "de": "Wo ist die Stadtbibliothek?",
    "lv": "Где находится городская библиотека?"
  },
  "diag_161": {
    "de": "Wann hat das Museum geöffnet?",
    "lv": "Когда музей открыт?"
  },
  "diag_162": {
    "de": "Wollen wir ins Museum gehen?",
    "lv": "Пойдем в музей?"
  },
  "diag_163": {
    "de": "Fahren wir mit dem Bus oder der U-Bahn?",
    "lv": "Мы поедем на автобусе или метро?"
  },
  "diag_164": {
    "de": "Wo ist die nächste Bushaltestelle?",
    "lv": "Где находится ближайшая автобусная остановка?"
  },
  "diag_165": {
    "de": "Ich habe großen Hunger.",
    "lv": "Я очень голоден."
  },
  "diag_166": {
    "de": "Gehen wir zusammen essen?",
    "lv": "Пойдем пообедаем вместе?"
  },
  "diag_167": {
    "de": "Kellner, die Speisekarte, bitte!",
    "lv": "Официанты, меню, пожалуйста!"
  },
  "diag_168": {
    "de": "Ist der Fisch frisch?",
    "lv": "Эта рыба свежая?"
  },
  "diag_169": {
    "de": "Das schmeckt ausgezeichnet!",
    "lv": "Это очень вкусно!"
  },
  "diag_170": {
    "de": "Kellner, zahlen bitte!",
    "lv": "Официанты, пожалуйста, заплатите!"
  },
  "diag_171": {
    "de": "Was kostet das?",
    "lv": "Сколько это стоит?"
  },
  "diag_172": {
    "de": "Ich gehe ins Café einen Kaffee trinken.",
    "lv": "Я пойду в кафе выпить кофе."
  },
  "diag_173": {
    "de": "Willst du mitkommen?",
    "lv": "Хотите пойти вместе?"
  },
  "diag_174": {
    "de": "Eine Tasse Kaffee mit Milch, bitte!",
    "lv": "Чашку кофе с молоком, пожалуйста!"
  },
  "diag_175": {
    "de": "Bitte schneller, ich habe es eilig!",
    "lv": "Быстрее, пожалуйста, мне нужно торопиться!"
  },
  "diag_176": {
    "de": "Lass deinen Kaffee nicht kalt werden!",
    "lv": "Не позволяйте кофе остыть!"
  },
  "diag_177": {
    "de": "Haben Sie etwas Erfrischendes?",
    "lv": "У вас есть что-нибудь освежающее?"
  },
  "diag_178": {
    "de": "Eine Portion Eis, bitte!",
    "lv": "Порцию мороженого, пожалуйста!"
  },
  "diag_179": {
    "de": "Heute Morgen habe ich einen Brief bekommen.",
    "lv": "Сегодня утром я получил письмо."
  },
  "diag_180": {
    "de": "Ich muss ihm gleich schreiben.",
    "lv": "Я должен написать ему сейчас."
  },
  "diag_181": {
    "de": "Wo ist der nächste Briefkasten?",
    "lv": "Где ближайший почтовый ящик?"
  },
  "diag_182": {
    "de": "Wo ist die Post?",
    "lv": "Где почта?"
  },
  "diag_183": {
    "de": "Erinnere mich morgen daran zu schreiben!",
    "lv": "Напомни мне подписать завтра!"
  },
  "diag_184": {
    "de": "Werfen Sie bitte diesen Brief in den Briefkasten.",
    "lv": "Пожалуйста, опустите это письмо в почтовый ящик!"
  },
  "diag_185": {
    "de": "Hallo, hier spricht Emma.",
    "lv": "Привет, это Эмма."
  },
  "diag_186": {
    "de": "Kann ich dich später anrufen?",
    "lv": "Могу я позвонить тебе позже"
  },
  "diag_187": {
    "de": "Muss ich lange warten?",
    "lv": "Мне придется долго ждать?"
  },
  "diag_188": {
    "de": "Bitte schneiden Sie mir die Haare.",
    "lv": "Пожалуйста, подстригите мне волосы."
  },
  "diag_189": {
    "de": "Hinten bitte nicht zu kurz.",
    "lv": "Сзади, пожалуйста, не слишком коротко."
  },
  "diag_190": {
    "de": "Wann beginnt die Vorstellung?",
    "lv": "Когда начинается шоу?"
  },
  "diag_191": {
    "de": "Es fängt um halb acht an.",
    "lv": "Начало в половине седьмого."
  },
  "diag_192": {
    "de": "Alle Plätze sind ausverkauft.",
    "lv": "Все билеты распроданы."
  },
  "diag_193": {
    "de": "Drei Karten, bitte!",
    "lv": "Три билета, пожалуйста!"
  },
  "diag_194": {
    "de": "Wir lassen die Jacken in der Garderobe.",
    "lv": "Давай оставим куртки в гардеробе."
  },
  "diag_195": {
    "de": "Bitte schnell, der Vorhang geht gleich auf!",
    "lv": "Побыстрее, пожалуйста, занавес вот-вот откроется!"
  },
  "diag_196": {
    "de": "Der Vorhang fällt.",
    "lv": "Занавес падает."
  },
  "diag_197": {
    "de": "Darf ich dich zum Tanz bitten?",
    "lv": "Могу я пригласить вас потанцевать?"
  },
  "diag_198": {
    "de": "Wann ist eure Hochzeit?",
    "lv": "Когда у тебя свадьба?"
  },
  "diag_199": {
    "de": "Ich suche eine Wohnung.",
    "lv": "Я ищу квартиру."
  },
  "diag_200": {
    "de": "Ist in diesem Haus eine Wohnung frei?",
    "lv": "Есть ли свободная квартира в этом доме?"
  },
  "diag_201": {
    "de": "Wie viel kostet die Miete?",
    "lv": "Сколько стоит аренда?"
  },
  "diag_202": {
    "de": "Die Wohnung hat drei Zimmer und eine Küche.",
    "lv": "В квартире три комнаты и кухня."
  },
  "diag_203": {
    "de": "Heute ziehen wir um.",
    "lv": "Мы переезжаем сегодня."
  },
  "diag_204": {
    "de": "Mia, pack die Sachen bitte in Kisten!",
    "lv": "Миа, сложи вещи в коробки, пожалуйста!"
  },
  "diag_205": {
    "de": "Hast du alles eingepackt?",
    "lv": "Всё уже запаковано?"
  },
  "diag_206": {
    "de": "Ich stehe mit meinem Freund in Kontakt.",
    "lv": "Я веду переписку со своим другом."
  },
  "diag_207": {
    "de": "Gehen wir ins Theater?",
    "lv": "Пойдем в театр?"
  },
  "diag_208": {
    "de": "Ist alles eingeladen?",
    "lv": "Все ли загружено?"
  },
  "diag_209": {
    "de": "Welch schöne Aussicht!",
    "lv": "Какой красивый вид!"
  },
  "diag_210": {
    "de": "Nun können wir alles wieder aufräumen.",
    "lv": "Теперь мы можем собрать все обратно."
  },
  "diag_211": {
    "de": "Wie viele Zimmer habt ihr?",
    "lv": "Сколько у вас комнат?"
  },
  "diag_212": {
    "de": "Im Sommer fahre ich ans Meer.",
    "lv": "Летом я поеду на море."
  },
  "diag_213": {
    "de": "Kannst du schwimmen?",
    "lv": "Вы умеете плавать"
  },
  "diag_214": {
    "de": "Schwimm nicht zu weit hinaus!",
    "lv": "Не заплывайте слишком далеко!"
  },
  "diag_215": {
    "de": "Badest du jeden Tag?",
    "lv": "Ты плаваешь каждый день?"
  },
  "diag_216": {
    "de": "Bei schönem Wetter gehe ich angeln.",
    "lv": "Если погода хорошая, я иду на рыбалку."
  },
  "diag_217": {
    "de": "Wie sieht er aus?",
    "lv": "Как он выглядит?"
  },
  "diag_218": {
    "de": "Er hat sich aber recht verändert.",
    "lv": "Однако он довольно сильно изменился."
  },
  "diag_219": {
    "de": "Wie ist er als Mensch?",
    "lv": "Какой он как человек?"
  },
  "diag_220": {
    "de": "Er ist immer nett und freundlich.",
    "lv": "Он всегда милый и добрый."
  },
  "diag_221": {
    "de": "Ich fühle mich nicht wohl.",
    "lv": "Я плохо себя чувствую."
  },
  "diag_222": {
    "de": "Was fehlt dir?",
    "lv": "Какво става с теб"
  },
  "diag_223": {
    "de": "Ich habe starke Kopfschmerzen.",
    "lv": "У меня сильная головная боль."
  },
  "diag_224": {
    "de": "Ich habe mich erkältet.",
    "lv": "Я простудился."
  },
  "diag_225": {
    "de": "Ich habe Schnupfen.",
    "lv": "У меня насморк."
  },
  "diag_226": {
    "de": "Mir ist schwindlig.",
    "lv": "У меня кружится голова."
  },
  "diag_227": {
    "de": "Ich muss zum Arzt gehen.",
    "lv": "Мне нужно пойти к врачу."
  },
  "diag_228": {
    "de": "Leg dich ins Bett!",
    "lv": "Ложись в кровать!"
  },
  "diag_229": {
    "de": "Hast du Fieber?",
    "lv": "У вас жар?"
  },
  "diag_230": {
    "de": "Gestern hatte ich erhöhte Temperatur.",
    "lv": "Вчера у меня была высокая температура."
  },
  "diag_231": {
    "de": "Ich habe Zahnschmerzen.",
    "lv": "У меня болит зуб."
  },
  "diag_232": {
    "de": "Ich muss zum Zahnarzt gehen.",
    "lv": "Мне нужно пойти к дантисту."
  },
  "diag_233": {
    "de": "Weißt du, dass Finn krank ist?",
    "lv": "Ты знаешь, что Финн болен?"
  },
  "diag_234": {
    "de": "Laut Arzt wird er bald wieder gesund.",
    "lv": "По словам врача, скоро он поправится."
  },
  "diag_235": {
    "de": "Ich will meine Wohnung neu möblieren.",
    "lv": "Я хочу сделать ремонт в квартире."
  },
  "diag_236": {
    "de": "Kann ich das auf Raten kaufen?",
    "lv": "Могу ли я купить в рассрочку?"
  },
  "diag_237": {
    "de": "Bleib im Bett, bis es dir besser geht!",
    "lv": "Оставайтесь в постели, пока не почувствуете себя лучше!"
  },
  "diag_238": {
    "de": "Noah hat in zwei Wochen schwimmen gelernt.",
    "lv": "Ной научился плавать за две недели."
  },
  "diag_239": {
    "de": "Sei mit dem Essen noch vorsichtig.",
    "lv": "Будьте осторожны с едой."
  },
  "diag_240": {
    "de": "Sprichst du Deutsch?",
    "lv": "Ты говоришь по-немецки?"
  },
  "diag_241": {
    "de": "Ja, ein bisschen.",
    "lv": "Да, немного."
  },
  "diag_242": {
    "de": "Du sprichst ziemlich fließend.",
    "lv": "Вы говорите довольно свободно."
  },
  "diag_243": {
    "de": "Wo hast du Deutsch gelernt?",
    "lv": "Где ты выучил немецкий?"
  },
  "diag_244": {
    "de": "Ich nehme seit einem Jahr Deutschstunden.",
    "lv": "Я беру уроки немецкого языка уже год."
  },
  "diag_245": {
    "de": "Ich suche immer Gelegenheit, Deutsch zu sprechen.",
    "lv": "Всегда ищу возможность говорить по-немецки."
  },
  "diag_246": {
    "de": "Ist das Buch noch vorrätig?",
    "lv": "Эта книга еще доступна?"
  },
  "diag_247": {
    "de": "Das Buch ist leider ausverkauft.",
    "lv": "К сожалению, книга распродана."
  },
  "diag_248": {
    "de": "Wann erscheint die neue Auflage?",
    "lv": "Когда выйдет новое издание?"
  },
  "diag_249": {
    "de": "Womit kann ich Ihnen helfen?",
    "lv": "Как я могу помочь?"
  },
  "diag_250": {
    "de": "Haben Sie ganz frische Eier?",
    "lv": "У вас есть свежие яйца?"
  },
  "diag_251": {
    "de": "Was kosten die?",
    "lv": "Сколько они стоят?"
  },
  "diag_252": {
    "de": "Das ist zu teuer.",
    "lv": "Твърде скъпо е."
  },
  "diag_253": {
    "de": "Können Sie mir ein halbes Kilo abwiegen?",
    "lv": "Ты можешь весить полкило?"
  },
  "diag_254": {
    "de": "Wie viel muss ich zahlen?",
    "lv": "Сколько я должен заплатить?"
  },
  "diag_255": {
    "de": "Wie viel kostet das Kilo?",
    "lv": "Сколько стоит килограмм?"
  },
  "diag_256": {
    "de": "Wiegen Sie mir bitte zwei Kilo ab.",
    "lv": "Пожалуйста, весите два килограмма."
  },
  "diag_257": {
    "de": "Haben Sie auch Karotten?",
    "lv": "У тебя тоже есть морковь?"
  },
  "diag_258": {
    "de": "Haben Sie gutes Rindfleisch?",
    "lv": "У вас есть хорошая говядина?"
  },
  "diag_259": {
    "de": "Geben Sie mir zwei Kilo Hackfleisch.",
    "lv": "Дайте два килограмма фарша."
  },
  "diag_260": {
    "de": "Ein Laib Brot, bitte, aber nicht zu knusprig.",
    "lv": "Одну буханку хлеба, пожалуйста, но не слишком твердую."
  },
  "diag_261": {
    "de": "Das Brot ist frisch gebacken.",
    "lv": "Хлеб свежеиспеченный."
  },
  "diag_262": {
    "de": "Was für Obst haben Sie heute?",
    "lv": "Какие фрукты у тебя сегодня?"
  },
  "diag_263": {
    "de": "Was kosten die Äpfel?",
    "lv": "Сколько стоят яблоки?"
  },
  "diag_264": {
    "de": "Dann nehme ich zwei Kilo Äpfel.",
    "lv": "Тогда я возьму два килограмма яблок."
  },
  "diag_265": {
    "de": "Die Birnen sind sehr teuer.",
    "lv": "Груши очень дорогие."
  },
  "diag_266": {
    "de": "Können Sie mir alles nach Hause liefern?",
    "lv": "Можете ли вы доставить все на дом?"
  },
  "diag_267": {
    "de": "Haben Sie Reis?",
    "lv": "У вас есть рис?"
  },
  "diag_268": {
    "de": "Geben Sie mir bitte ein Kilo Reis.",
    "lv": "Дайте мне, пожалуйста, килограмм риса."
  },
  "diag_269": {
    "de": "Danke, diesmal nicht.",
    "lv": "Спасибо, не в этот раз."
  },
  "diag_270": {
    "de": "Wie viel kostet dieser Teppich?",
    "lv": "Сколько стоит этот коврик?"
  },
  "diag_271": {
    "de": "Können Sie die Möbel in meine Wohnung liefern?",
    "lv": "Возможна ли доставка мебели в квартиру?"
  },
  "diag_272": {
    "de": "Bitte an der Kasse zahlen.",
    "lv": "Пожалуйста, оплатите в кассе."
  },
  "diag_273": {
    "de": "Bitte, machen Sie die Rechnung.",
    "lv": "Пожалуйста, выставьте счет."
  },
  "diag_274": {
    "de": "Was kostet das Meter?",
    "lv": "Сколько стоит метр?"
  },
  "diag_275": {
    "de": "Dieser Stoff gefällt mir.",
    "lv": "Я люблю эту ткань."
  },
  "diag_276": {
    "de": "Schneiden Sie mir bitte drei Meter ab.",
    "lv": "Пожалуйста, отрежьте три метра."
  },
  "diag_277": {
    "de": "Haben Sie auch andere Muster?",
    "lv": "Есть ли у вас другие образцы?"
  },
  "diag_278": {
    "de": "Diese Farbe gefällt mir nicht.",
    "lv": "Мне не нравится этот цвет."
  },
  "diag_279": {
    "de": "Geben Sie mir eine hellere.",
    "lv": "Дайте ярче."
  },
  "diag_280": {
    "de": "Was kosten diese Socken?",
    "lv": "Сколько стоят эти носки?"
  },
  "diag_281": {
    "de": "Welche Handschuhe wünschen Sie?",
    "lv": "Какие перчатки ты хочешь?"
  },
  "diag_282": {
    "de": "Die sind mir etwas zu eng.",
    "lv": "Они мне немного тесноваты."
  },
  "diag_283": {
    "de": "So, nun passen sie gut.",
    "lv": "Итак, теперь все работает нормально."
  },
  "diag_284": {
    "de": "Kannst du mir einen guten Schneider empfehlen?",
    "lv": "Можете ли вы порекомендовать хорошего портного?"
  },
  "diag_285": {
    "de": "Ich will einen Anzug bestellen.",
    "lv": "Я хочу заказать костюм."
  },
  "diag_286": {
    "de": "Wann wird er fertig sein?",
    "lv": "Когда он будет готов?"
  },
  "diag_287": {
    "de": "Der Anzug sitzt gut.",
    "lv": "Костюм сидит хорошо."
  },
  "diag_288": {
    "de": "Die Hose ist zu lang.",
    "lv": "Штаны слишком длинные."
  },
  "diag_289": {
    "de": "Bitte reinigen und bügeln Sie ihn!",
    "lv": "Пожалуйста, очистите и погладьте его!"
  },
  "diag_290": {
    "de": "Wann wird das Kleid fertig sein?",
    "lv": "Когда платье будет готово?"
  },
  "diag_291": {
    "de": "Die Schuhe sind zu eng.",
    "lv": "Обувь слишком тесная."
  },
  "diag_292": {
    "de": "Können Sie die Schuhe heute reparieren?",
    "lv": "Ты можешь починить свою обувь сегодня?"
  },
  "diag_293": {
    "de": "Wann kann ich die Schuhe abholen?",
    "lv": "Когда я могу принести туфли?"
  },
  "diag_294": {
    "de": "Meine Armbanduhr funktioniert nicht.",
    "lv": "Мои наручные часы не работают."
  },
  "diag_295": {
    "de": "Sie geht fünf Minuten vor.",
    "lv": "Это на пять минут раньше."
  },
  "diag_296": {
    "de": "Bist du kurzsichtig oder weitsichtig?",
    "lv": "Вы близорукий или дальнозоркий?"
  },
  "diag_297": {
    "de": "Ich möchte eine Brille kaufen.",
    "lv": "Я хочу купить очки."
  },
  "diag_298": {
    "de": "Können Sie meine Brille reparieren?",
    "lv": "Ты можешь починить мои очки?"
  },
  "diag_299": {
    "de": "Das dauert nur eine Viertelstunde.",
    "lv": "Это займет всего пятнадцать минут."
  },
  "diag_300": {
    "de": "Der Preis ist mir zu hoch.",
    "lv": "Цена для меня слишком высока."
  },
  "diag_301": {
    "de": "Ich brauche zwei Fotos für meinen Pass.",
    "lv": "Мне нужны две фотографии на паспорт."
  },
  "diag_302": {
    "de": "Bitte packen Sie es ein und schicken Sie es mir nach Hause.",
    "lv": "Пожалуйста, упакуйте и отправьте домой."
  },
  "diag_303": {
    "de": "Wir haben feste Preise.",
    "lv": "У нас фиксированные цены."
  },
  "diag_304": {
    "de": "Bitte, fotografieren Sie mich.",
    "lv": "Пожалуйста, сфотографируйте меня."
  },
  "diag_305": {
    "de": "Setzen Sie sich, schauen Sie gerade in die Kamera und bewegen Sie sich nicht!",
    "lv": "Сядьте, посмотрите прямо в камеру и не двигайтесь!"
  },
  "diag_306": {
    "de": "Wann kann ich das Probebild sehen?",
    "lv": "Когда я смогу увидеть образец?"
  },
  "diag_307": {
    "de": "Wann sind die Fotos fertig?",
    "lv": "Когда будут готовы фотографии?"
  },
  "diag_308": {
    "de": "Die Aufnahme ist gelungen.",
    "lv": "Фотография удалась."
  },
  "diag_309": {
    "de": "Die Fotos sind gut geworden.",
    "lv": "Фотографии получились удачными."
  },
  "diag_310": {
    "de": "Können Sie das Foto auch vergrößern?",
    "lv": "А можно еще увеличить фото?"
  },
  "diag_311": {
    "de": "Sind diese Steine echt?",
    "lv": "Эти камни настоящие?"
  },
  "diag_312": {
    "de": "Ist das echtes Gold?",
    "lv": "Это настоящее золото?"
  },
  "diag_313": {
    "de": "Zeigen Sie mir bitte Trauringe.",
    "lv": "Покажите мне обручальные кольца, пожалуйста."
  },
  "diag_314": {
    "de": "Der Ring ist mir etwas zu weit.",
    "lv": "Кольцо мне великовато."
  },
  "diag_315": {
    "de": "Ich kann ihn enger machen.",
    "lv": "Я могу сузить это."
  },
  "diag_316": {
    "de": "Dieser Ring passt mir.",
    "lv": "Это кольцо мне подходит."
  },
  "diag_317": {
    "de": "Zeigen Sie mir schöne Geschenkideen.",
    "lv": "Продемонстрируйте красивые идеи подарков."
  },
  "diag_318": {
    "de": "Wie gefallen dir diese Ohrringe?",
    "lv": "Как вам эти серьги?"
  },
  "diag_319": {
    "de": "Diese Brosche ist wirklich schön.",
    "lv": "Эта брошь очень красивая."
  },
  "diag_320": {
    "de": "Der Stein ist ein Saphir.",
    "lv": "Этот камень — сапфир."
  },
  "diag_321": {
    "de": "Das ist kein echter Stein, das ist Glas.",
    "lv": "Это не настоящий камень, это стекло."
  },
  "diag_322": {
    "de": "Dieses Armband kann ich Ihnen besonders empfehlen.",
    "lv": "Особенно могу порекомендовать этот браслет."
  },
  "diag_323": {
    "de": "Es ist besonders schön gearbeitet.",
    "lv": "Он сделан чрезвычайно тонко."
  },
  "diag_324": {
    "de": "Der Preis ist nicht hoch.",
    "lv": "Цена не высокая."
  },
  "diag_325": {
    "de": "Bekomme ich die Schachtel gratis?",
    "lv": "Я получил коробку бесплатно?"
  },
  "diag_326": {
    "de": "Alle Schmuckstücke sind gestempelt.",
    "lv": "Все украшения штампованы."
  },
  "diag_327": {
    "de": "Falls es meiner Frau nicht gefällt, kann ich es umtauschen?",
    "lv": "Если жене не понравится, могу ли я его обменять?"
  },
  "diag_328": {
    "de": "Natürlich, jederzeit.",
    "lv": "В любое время, конечно."
  }
};

window.DIALOGUE_ID_MAP = DIALOGUE_ID_MAP;

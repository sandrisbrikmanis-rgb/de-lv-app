const DIALOGUE_ID_MAP = {
  "diag_001": {
    "de": "Gute Besserung!",
    "lv": "İyileşmek! • İyileşmek!"
  },
  "diag_002": {
    "de": "Frohes neues Jahr!",
    "lv": "Mutlu yıllar!"
  },
  "diag_003": {
    "de": "Herzlichen Glückwunsch zum Geburtstag!",
    "lv": "Wszystkiego najlepszego z okazji urodzin!"
  },
  "diag_004": {
    "de": "Gute Reise!",
    "lv": "Szczęśliwej podróży!"
  },
  "diag_005": {
    "de": "Es freut mich, Sie kennenzulernen.",
    "lv": "Seninle tanıştığıma sevindim."
  },
  "diag_006": {
    "de": "Wären Sie bitte so nett?",
    "lv": "Bu kadar nazik olur muydun?"
  },
  "diag_007": {
    "de": "Ich bin Ihnen sehr dankbar.",
    "lv": "Size çok minnettarım."
  },
  "diag_008": {
    "de": "Keine Ursache!",
    "lv": "Nic za nic!"
  },
  "diag_009": {
    "de": "Setzt euch bitte hin!",
    "lv": "Lütfen oturun!"
  },
  "diag_010": {
    "de": "Ben, komm bitte an die Tafel!",
    "lv": "Ben, lütfen tahtaya gel!"
  },
  "diag_011": {
    "de": "Schlagt bitte die Lehrbücher auf!",
    "lv": "Ders kitaplarınızı açın lütfen!"
  },
  "diag_012": {
    "de": "Geht bitte in die Sporthalle!",
    "lv": "Proszę, idź na siłownię!"
  },
  "diag_013": {
    "de": "Schläfst du noch?",
    "lv": "Hala uyuyor musun?"
  },
  "diag_014": {
    "de": "Schlafen Sie noch?",
    "lv": "Hala uyuyor musun?"
  },
  "diag_015": {
    "de": "Er ist fest eingeschlafen.",
    "lv": "Çabuk uyuyor."
  },
  "diag_016": {
    "de": "Wecke ihn bitte auf, es ist schon spät!",
    "lv": "Lütfen onu uyandırın, çoktan geç oldu!"
  },
  "diag_017": {
    "de": "Guten Morgen!",
    "lv": "Mirëmëngjes."
  },
  "diag_018": {
    "de": "Guten Tag!",
    "lv": "MERHABA!"
  },
  "diag_019": {
    "de": "Gute Nacht!",
    "lv": "Dobranoc!"
  },
  "diag_020": {
    "de": "Entschuldigen Sie bitte!",
    "lv": "Özür dilerim, lütfen!"
  },
  "diag_021": {
    "de": "Es tut mir sehr leid!",
    "lv": "Bardzo mi przykro!"
  },
  "diag_022": {
    "de": "Vielen Dank!",
    "lv": "Çok teşekkür ederim!"
  },
  "diag_023": {
    "de": "Finn, fang bitte an!",
    "lv": "Finn, başla lütfen!"
  },
  "diag_024": {
    "de": "Lest bitte mit!",
    "lv": "Czytaj dalej, proszę!"
  },
  "diag_025": {
    "de": "Emma, schau bitte nicht aus dem Fenster!",
    "lv": "Emma, ​​lütfen pencereden dışarı bakma!"
  },
  "diag_026": {
    "de": "Jonas, bring bitte die Hefte!",
    "lv": "Jonas, lütfen defterlerini getir!"
  },
  "diag_027": {
    "de": "Geh bitte zurück an deinen Platz!",
    "lv": "Wracaj na swoje miejsce!"
  },
  "diag_028": {
    "de": "Wie viel Uhr ist es?",
    "lv": "Saat kaç?"
  },
  "diag_029": {
    "de": "Es ist halb acht.",
    "lv": "Saat yedi buçuk."
  },
  "diag_030": {
    "de": "Wann wachst du gewöhnlich auf?",
    "lv": "Genelde ne zaman uyanırsın?"
  },
  "diag_031": {
    "de": "Ich stehe gleich auf.",
    "lv": "Yakında kalkacağım."
  },
  "diag_032": {
    "de": "Steh auf, Hanna, es klingelt!",
    "lv": "Wstawaj, Hannah, dzwoni dzwonek!"
  },
  "diag_033": {
    "de": "Lass mich noch fünf Minuten schlafen!",
    "lv": "Beş dakika daha uyuyayım!"
  },
  "diag_034": {
    "de": "Vergiss nicht, das Zimmer zu lüften!",
    "lv": "Nie zapomnij o wietrzeniu pomieszczenia!"
  },
  "diag_035": {
    "de": "Wo ist das Handtuch?",
    "lv": "Gdzie jest ręcznik"
  },
  "diag_036": {
    "de": "Ich möchte mir die Zähne putzen.",
    "lv": "Dişlerimi fırçalamak istiyorum."
  },
  "diag_037": {
    "de": "Mit was putzt du dir die Zähne?",
    "lv": "Dişlerinizi nasıl fırçalarsınız?"
  },
  "diag_038": {
    "de": "Ich möchte mich anziehen.",
    "lv": "Giyinmek istiyorum."
  },
  "diag_039": {
    "de": "Zieh dich bitte schnell an!",
    "lv": "Çabuk giyin lütfen!"
  },
  "diag_040": {
    "de": "Kleide dich wärmer an, draußen ist es kühl.",
    "lv": "Sıkı giyinin, dışarısı soğuk."
  },
  "diag_041": {
    "de": "Guten Morgen, wie geht es dir?",
    "lv": "Günaydın, nasılsın?"
  },
  "diag_042": {
    "de": "Mir geht es gut, danke.",
    "lv": "İyiyim teşekkürler."
  },
  "diag_043": {
    "de": "Was gibt es Neues?",
    "lv": "Co nowego?"
  },
  "diag_044": {
    "de": "Auf Wiedersehen!",
    "lv": "Do widzenia!"
  },
  "diag_045": {
    "de": "Was für ein Chaos hier!",
    "lv": "Bu ne büyük bir karmaşa!"
  },
  "diag_046": {
    "de": "Darf ich beim Aufräumen helfen?",
    "lv": "Temizlik konusunda yardımcı olabilir miyim?"
  },
  "diag_047": {
    "de": "Was trinkst du morgens, Kaffee oder Tee?",
    "lv": "Sabahları ne içersiniz, kahve mi çay mı?"
  },
  "diag_048": {
    "de": "Gewöhnlich trinke ich morgens eine Tasse Kaffee.",
    "lv": "Sabahları genellikle bir fincan kahve içerim."
  },
  "diag_049": {
    "de": "Am liebsten trinke ich schwarzen Kaffee.",
    "lv": "Siyah kahveyi tercih ederim."
  },
  "diag_050": {
    "de": "Guten Morgen, hast du gut geschlafen?",
    "lv": "Günaydın, iyi uyudun mu?"
  },
  "diag_051": {
    "de": "Ich bin noch sehr müde.",
    "lv": "Hala çok yorgunum."
  },
  "diag_052": {
    "de": "Willst du Kaffee oder Milch?",
    "lv": "Kahve mi süt mü istersin?"
  },
  "diag_053": {
    "de": "Gib mir bitte ein Brötchen mit Käse.",
    "lv": "Lütfen bana bir peynirli rulo ver."
  },
  "diag_054": {
    "de": "Ich muss jetzt los!",
    "lv": "Şimdi gitmek zorundayım!"
  },
  "diag_055": {
    "de": "Vergiss dein Frühstück nicht!",
    "lv": "Kahvaltıyı unutmayın!"
  },
  "diag_056": {
    "de": "Klara, deck bitte den Tisch!",
    "lv": "Clara, lütfen masayı hazırla!"
  },
  "diag_057": {
    "de": "Vergiss die Servietten nicht!",
    "lv": "Nie zapomnij o serwetkach!"
  },
  "diag_058": {
    "de": "Wann esst ihr zu Mittag?",
    "lv": "Kiedy jesz lunch"
  },
  "diag_059": {
    "de": "Es ist Zeit zu essen.",
    "lv": "Yemek zamanı."
  },
  "diag_060": {
    "de": "Was gibt es heute zu Mittag?",
    "lv": "Drekë e përbashkët?"
  },
  "diag_061": {
    "de": "Wie schmeckt dir die Suppe?",
    "lv": "Çorbayı nasıl seversin?"
  },
  "diag_062": {
    "de": "Ehrlich gesagt ist sie etwas zu salzig.",
    "lv": "Doğrusunu söylemek gerekirse biraz fazla tuzlu."
  },
  "diag_063": {
    "de": "Darf ich dir ein Stück Brot geben?",
    "lv": "Sana bir dilim ekmek vereyim mi?"
  },
  "diag_064": {
    "de": "Danke, ich habe schon.",
    "lv": "Teşekkür ederim, zaten yaptım."
  },
  "diag_065": {
    "de": "Das Fleisch schmeckt ausgezeichnet.",
    "lv": "Etin tadı çok lezzetli."
  },
  "diag_066": {
    "de": "Danke, ich bin schon satt.",
    "lv": "Teşekkür ederim, zaten doluyum."
  },
  "diag_067": {
    "de": "Heute haben wir Besuch.",
    "lv": "Bugün misafirlerimiz var."
  },
  "diag_068": {
    "de": "Bist du heute Abend frei?",
    "lv": "Bu gece boş musun?"
  },
  "diag_069": {
    "de": "Komm doch heute zum Mittagessen vorbei!",
    "lv": "Bugün öğle yemeğine gel!"
  },
  "diag_070": {
    "de": "Setzen wir uns an den Tisch.",
    "lv": "Hadi masaya oturalım."
  },
  "diag_071": {
    "de": "Bitte, bedien dich!",
    "lv": "Lütfen istediğiniz kadar yiyin!"
  },
  "diag_072": {
    "de": "Stört dich das Rauchen?",
    "lv": "Czy palenie Ci przeszkadza?"
  },
  "diag_073": {
    "de": "Danke für die nette Aufnahme!",
    "lv": "Sıcak karşılamanız için teşekkür ederiz!"
  },
  "diag_074": {
    "de": "Wann gehst du ins Bett?",
    "lv": "Uyumaya gittiğinde"
  },
  "diag_075": {
    "de": "Wenn ich von der Arbeit komme, bin ich immer müde.",
    "lv": "İşten eve geldiğimde hep yorgun oluyorum."
  },
  "diag_076": {
    "de": "Es ist Zeit, ins Bett zu gehen.",
    "lv": "Uyuma zamanı."
  },
  "diag_077": {
    "de": "Es ist schönes Wetter.",
    "lv": "To miły czas."
  },
  "diag_078": {
    "de": "Willst du mit mir spazieren gehen?",
    "lv": "Benimle gelmek ister misin?"
  },
  "diag_079": {
    "de": "Sieh mal, es wird gleich regnen.",
    "lv": "Bak, yakında yağmur yağacak."
  },
  "diag_080": {
    "de": "Nimm den Regenschirm mit!",
    "lv": "Yanınıza bir şemsiye alın!"
  },
  "diag_081": {
    "de": "Es regnet.",
    "lv": "Pada deszcz."
  },
  "diag_082": {
    "de": "Ich bin schon ganz nass.",
    "lv": "Artık tamamen ıslağım."
  },
  "diag_083": {
    "de": "Glaubst du, dass es den ganzen Tag regnen wird?",
    "lv": "Bütün gün yağmur yağacağını mı düşünüyorsun?"
  },
  "diag_084": {
    "de": "Es hört auf zu regnen.",
    "lv": "Yağmur duruyor."
  },
  "diag_085": {
    "de": "Die Sonne scheint wieder.",
    "lv": "Güneş yeniden parlıyor."
  },
  "diag_086": {
    "de": "Es ist sehr warm.",
    "lv": "Çok sıcak."
  },
  "diag_087": {
    "de": "Es sieht nach Regen aus.",
    "lv": "Yağmur yağacak gibi görünüyor."
  },
  "diag_088": {
    "de": "Wir bekommen gleich ein Gewitter.",
    "lv": "Bir fırtına kopmak üzere."
  },
  "diag_089": {
    "de": "Das Gewitter zieht vorüber.",
    "lv": "Fırtına geçti."
  },
  "diag_090": {
    "de": "Die Wolken verziehen sich.",
    "lv": "Bulutlar dağılıyor."
  },
  "diag_091": {
    "de": "Siehst du den Regenbogen?",
    "lv": "Gökkuşağını görüyor musun?"
  },
  "diag_092": {
    "de": "Der Winter ist da, es hat geschneit.",
    "lv": "Kış geldi ve geceleri kar yağdı."
  },
  "diag_093": {
    "de": "Es schneit.",
    "lv": "Kar yağıyor."
  },
  "diag_094": {
    "de": "Wie schön ist es im Wald im Winter!",
    "lv": "Kışın ormanda ne kadar güzel!"
  },
  "diag_095": {
    "de": "Mir ist kalt, ich friere.",
    "lv": "Üşüyorum, donuyorum."
  },
  "diag_096": {
    "de": "Draußen ist Glatteis, pass auf!",
    "lv": "Na zewnątrz jest ślisko, uważajcie!"
  },
  "diag_097": {
    "de": "Wollen wir auf die Eisbahn gehen?",
    "lv": "Belki buz patenine gitmeliyiz?"
  },
  "diag_098": {
    "de": "Zieh die Jacke an, du kannst dich erkälten.",
    "lv": "Bir ceket giy çünkü üşütebilirsin."
  },
  "diag_099": {
    "de": "Wie spät ist es?",
    "lv": "Saat kaç"
  },
  "diag_100": {
    "de": "Es ist halb sieben.",
    "lv": "Saat yedi buçuk."
  },
  "diag_101": {
    "de": "Meine Uhr geht fünf Minuten vor.",
    "lv": "Saatim beş dakika ileri."
  },
  "diag_102": {
    "de": "Weck mich morgen früh um sieben Uhr!",
    "lv": "Yarın beni yedide uyandır!"
  },
  "diag_103": {
    "de": "Was ist heute für ein Datum?",
    "lv": "Jaka jest dzisiaj data?"
  },
  "diag_104": {
    "de": "Heute ist der elfte Juli.",
    "lv": "Bugün onbir Temmuz."
  },
  "diag_105": {
    "de": "Was machst du gewöhnlich am Abend?",
    "lv": "Co zwykle robisz wieczorami?"
  },
  "diag_106": {
    "de": "Es ist schon lange her, dass wir uns gesehen haben.",
    "lv": "Uzun zamandır görüşemedik."
  },
  "diag_107": {
    "de": "Wie geht es dir?",
    "lv": "Si jeni"
  },
  "diag_108": {
    "de": "Entschuldige, ich möchte etwas mit dir besprechen.",
    "lv": "Özür dilerim, seninle bir konu hakkında konuşmak istiyorum."
  },
  "diag_109": {
    "de": "Gehen wir spazieren!",
    "lv": "Hadi yürüyüşe çıkalım!"
  },
  "diag_110": {
    "de": "Hast du Lust, mit mir in den Park zu gehen?",
    "lv": "Benimle parka gitmek ister misin?"
  },
  "diag_111": {
    "de": "Ich komme, um dich zum Spaziergang abzuholen.",
    "lv": "Seni yürüyüşe çıkarmaya geldim."
  },
  "diag_112": {
    "de": "Geh bitte etwas langsamer, ich kann dir nicht folgen!",
    "lv": "Biraz daha yavaş sür, sana yetişemiyorum!"
  },
  "diag_113": {
    "de": "Ich bin zum ersten Mal in dieser Gegend.",
    "lv": "Jestem tu po raz pierwszy."
  },
  "diag_114": {
    "de": "Ruhen wir uns ein wenig aus.",
    "lv": "Biraz dinlenelim."
  },
  "diag_115": {
    "de": "Jetzt können wir zurückgehen.",
    "lv": "Teraz możemy wrócić."
  },
  "diag_116": {
    "de": "Ehrlich gesagt bin ich ziemlich müde.",
    "lv": "Doğrusunu söylemek gerekirse oldukça yoruldum."
  },
  "diag_117": {
    "de": "Entschuldige, wo ist die nächste U-Bahn-Station?",
    "lv": "Affedersiniz, en yakın metro istasyonu nerede?"
  },
  "diag_118": {
    "de": "Welcher ist der kürzeste Weg?",
    "lv": "En kısa yol hangisidir?"
  },
  "diag_119": {
    "de": "Geh hier die zweite Straße links und dann immer geradeaus.",
    "lv": "Burada soldan ikinci sokağa girin ve düz ilerleyin."
  },
  "diag_120": {
    "de": "Wie komme ich am schnellsten zum Bahnhof?",
    "lv": "İstasyona daha hızlı nasıl gidilir?"
  },
  "diag_121": {
    "de": "Ich habe vor, morgen zu verreisen.",
    "lv": "Yarın ayrılmayı planlıyorum."
  },
  "diag_122": {
    "de": "Wohin willst du fahren?",
    "lv": "Nereye gitmek istiyorsun?"
  },
  "diag_123": {
    "de": "Reist du geschäftlich oder privat?",
    "lv": "İş için mi yoksa zevk için mi seyahat ediyorsunuz?"
  },
  "diag_124": {
    "de": "Finn fährt bis Berlin mit, dann geht er ans Meer.",
    "lv": "Finn jedzie do Berlina, potem pojedzie nad morze."
  },
  "diag_125": {
    "de": "Wann fährt das Schiff ab?",
    "lv": "Gemi ne zaman kalkıyor?"
  },
  "diag_126": {
    "de": "In einer halben Stunde.",
    "lv": "Yarım saat sonra."
  },
  "diag_127": {
    "de": "Kann ich noch eine Kabine bekommen?",
    "lv": "Yine de bir kabin alabilir miyim?"
  },
  "diag_128": {
    "de": "Vergiss deinen Pass nicht!",
    "lv": "Nie zapomnij paszportu!"
  },
  "diag_129": {
    "de": "Es ist Zeit, den Koffer zu packen.",
    "lv": "Bavulunuzu hazırlamanın zamanı geldi."
  },
  "diag_130": {
    "de": "Der Zug fährt um halb sieben ab.",
    "lv": "Tren altı buçukta kalkıyor."
  },
  "diag_131": {
    "de": "Hol mir bitte ein Taxi, ich verpasse sonst den Zug!",
    "lv": "Lütfen bir taksi çağırın, yoksa treni kaçıracağım!"
  },
  "diag_132": {
    "de": "Fahr bitte zum Bahnhof!",
    "lv": "Të lutem më ço në stacion!"
  },
  "diag_133": {
    "de": "Ich muss mich beeilen.",
    "lv": "Acele etmeliyim."
  },
  "diag_134": {
    "de": "Ist der Schalter schon offen?",
    "lv": "Yazar kasa zaten açık mı?"
  },
  "diag_135": {
    "de": "Eine Fahrkarte nach Köln, bitte.",
    "lv": "Köln'e bir bilet istiyorum."
  },
  "diag_136": {
    "de": "Wann fährt der Zug ab?",
    "lv": "Tren ne zaman kalkıyor?"
  },
  "diag_137": {
    "de": "Der Zug fährt gleich ab.",
    "lv": "Tren yakında kalkıyor."
  },
  "diag_138": {
    "de": "Muss ich in Koblenz umsteigen?",
    "lv": "Czy muszę zmieniać miejsce w Koblencji?"
  },
  "diag_139": {
    "de": "Ja, dort musst du umsteigen.",
    "lv": "Evet, oradaki yeri değiştirmeniz gerekiyor."
  },
  "diag_140": {
    "de": "Ist dieser Platz frei?",
    "lv": "Burası müsait mi?"
  },
  "diag_141": {
    "de": "Nein, hier sitzt niemand.",
    "lv": "Nie, nikt tu nie siedzi."
  },
  "diag_142": {
    "de": "Wo ist der Bahnsteigkartenautomat?",
    "lv": "Gdzie jest automat biletowy na peronie?"
  },
  "diag_143": {
    "de": "Stell mein Handgepäck ins Gepäcknetz.",
    "lv": "El bagajımı ağa koy."
  },
  "diag_144": {
    "de": "Kann ich das Fenster aufmachen?",
    "lv": "Camı açabilir miyim?"
  },
  "diag_145": {
    "de": "Es zieht, schließ bitte das Fenster!",
    "lv": "Lütfen içeri girin, lütfen pencereyi kapatın!"
  },
  "diag_146": {
    "de": "Welche ist die nächste Station?",
    "lv": "Bir sonraki durak neresi?"
  },
  "diag_147": {
    "de": "Wie lange hält der Zug?",
    "lv": "Tren ne zamandır bekliyor?"
  },
  "diag_148": {
    "de": "Wo muss ich umsteigen?",
    "lv": "Nereye taşınmalıyım?"
  },
  "diag_149": {
    "de": "Der Zug hat Verspätung.",
    "lv": "Tren gecikti."
  },
  "diag_150": {
    "de": "Dieser Wagen ist für Nichtraucher.",
    "lv": "Bu vagonda sigara içmek yasaktır."
  },
  "diag_151": {
    "de": "Wir fahren jetzt über die Grenze.",
    "lv": "Teraz jedziemy przez granicę."
  },
  "diag_152": {
    "de": "Hast du etwas zu verzollen?",
    "lv": "Temizleyecek bir şeyin var mı?"
  },
  "diag_153": {
    "de": "Wir sind in Berlin angekommen.",
    "lv": "Berlin'e ulaştık."
  },
  "diag_154": {
    "de": "Kannst du mir ein gutes Hotel empfehlen?",
    "lv": "İyi bir otel tavsiye edebilir misiniz?"
  },
  "diag_155": {
    "de": "Haben Sie freie Zimmer?",
    "lv": "Czy masz wolne pokoje?"
  },
  "diag_156": {
    "de": "Ein Zimmer mit zwei Betten, bitte.",
    "lv": "İki yataklı bir oda istiyorum lütfen."
  },
  "diag_157": {
    "de": "Was kostet das Zimmer pro Nacht?",
    "lv": "Odanın gecelik fiyatı ne kadar?"
  },
  "diag_158": {
    "de": "Morgen reise ich ab. Weck mich um sieben Uhr!",
    "lv": "Wyjeżdżam jutro. Obudź mnie o siódmej!"
  },
  "diag_159": {
    "de": "Die Rechnung, bitte!",
    "lv": "Hesap lütfen!"
  },
  "diag_160": {
    "de": "Wo ist die Stadtbibliothek?",
    "lv": "Gdzie jest biblioteka miejska?"
  },
  "diag_161": {
    "de": "Wann hat das Museum geöffnet?",
    "lv": "Kiedy muzeum jest otwarte?"
  },
  "diag_162": {
    "de": "Wollen wir ins Museum gehen?",
    "lv": "Müzeye gidelim mi?"
  },
  "diag_163": {
    "de": "Fahren wir mit dem Bus oder der U-Bahn?",
    "lv": "Jedziemy autobusem czy metrem?"
  },
  "diag_164": {
    "de": "Wo ist die nächste Bushaltestelle?",
    "lv": "En yakın otobüs durağı nerede?"
  },
  "diag_165": {
    "de": "Ich habe großen Hunger.",
    "lv": "Çok açım."
  },
  "diag_166": {
    "de": "Gehen wir zusammen essen?",
    "lv": "Birlikte yemek yemeye gidelim mi?"
  },
  "diag_167": {
    "de": "Kellner, die Speisekarte, bitte!",
    "lv": "Garsonlar, menü lütfen!"
  },
  "diag_168": {
    "de": "Ist der Fisch frisch?",
    "lv": "Balık taze mi?"
  },
  "diag_169": {
    "de": "Das schmeckt ausgezeichnet!",
    "lv": "Smakuje wspaniale!"
  },
  "diag_170": {
    "de": "Kellner, zahlen bitte!",
    "lv": "Garsonlar, lütfen ödeyin!"
  },
  "diag_171": {
    "de": "Was kostet das?",
    "lv": "Ile to kosztuje?"
  },
  "diag_172": {
    "de": "Ich gehe ins Café einen Kaffee trinken.",
    "lv": "Pójdę do kawiarni napić się kawy."
  },
  "diag_173": {
    "de": "Willst du mitkommen?",
    "lv": "Gelmek ister misin?"
  },
  "diag_174": {
    "de": "Eine Tasse Kaffee mit Milch, bitte!",
    "lv": "Bir fincan sütlü kahve istiyorum!"
  },
  "diag_175": {
    "de": "Bitte schneller, ich habe es eilig!",
    "lv": "Acele edin lütfen, acele etmeliyim!"
  },
  "diag_176": {
    "de": "Lass deinen Kaffee nicht kalt werden!",
    "lv": "Kahveniz soğumasın!"
  },
  "diag_177": {
    "de": "Haben Sie etwas Erfrischendes?",
    "lv": "Masz coś orzeźwiającego?"
  },
  "diag_178": {
    "de": "Eine Portion Eis, bitte!",
    "lv": "Dondurma yardımı istiyorum!"
  },
  "diag_179": {
    "de": "Heute Morgen habe ich einen Brief bekommen.",
    "lv": "Bu sabah bir mektup aldım."
  },
  "diag_180": {
    "de": "Ich muss ihm gleich schreiben.",
    "lv": "Şimdi ona yazmalıyım."
  },
  "diag_181": {
    "de": "Wo ist der nächste Briefkasten?",
    "lv": "En yakın posta kutusu nerede?"
  },
  "diag_182": {
    "de": "Wo ist die Post?",
    "lv": "Gdzie jest poczta?"
  },
  "diag_183": {
    "de": "Erinnere mich morgen daran zu schreiben!",
    "lv": "Yarın imzalamayı bana hatırlat!"
  },
  "diag_184": {
    "de": "Werfen Sie bitte diesen Brief in den Briefkasten.",
    "lv": "Lütfen bu mektubu posta kutunuza koyun!"
  },
  "diag_185": {
    "de": "Hallo, hier spricht Emma.",
    "lv": "Merhaba, bu Emma."
  },
  "diag_186": {
    "de": "Kann ich dich später anrufen?",
    "lv": "Të të marr më vonë në telefon?"
  },
  "diag_187": {
    "de": "Muss ich lange warten?",
    "lv": "Uzun süre beklemem gerekiyor mu?"
  },
  "diag_188": {
    "de": "Bitte schneiden Sie mir die Haare.",
    "lv": "Lütfen saçımı kesin."
  },
  "diag_189": {
    "de": "Hinten bitte nicht zu kurz.",
    "lv": "Arkada lütfen çok kısa olmasın."
  },
  "diag_190": {
    "de": "Wann beginnt die Vorstellung?",
    "lv": "Gösteri ne zaman başlıyor?"
  },
  "diag_191": {
    "de": "Es fängt um halb acht an.",
    "lv": "Zaczyna się o wpół do siódmej."
  },
  "diag_192": {
    "de": "Alle Plätze sind ausverkauft.",
    "lv": "Tüm biletler tükendi."
  },
  "diag_193": {
    "de": "Drei Karten, bitte!",
    "lv": "Üç bilet lütfen!"
  },
  "diag_194": {
    "de": "Wir lassen die Jacken in der Garderobe.",
    "lv": "Zostawmy kurtki w szafie."
  },
  "diag_195": {
    "de": "Bitte schnell, der Vorhang geht gleich auf!",
    "lv": "Acele edin lütfen, perde açılmak üzere!"
  },
  "diag_196": {
    "de": "Der Vorhang fällt.",
    "lv": "Kurtyna opada."
  },
  "diag_197": {
    "de": "Darf ich dich zum Tanz bitten?",
    "lv": "Senden dans etmeni isteyebilir miyim?"
  },
  "diag_198": {
    "de": "Wann ist eure Hochzeit?",
    "lv": "Düğünün ne zaman?"
  },
  "diag_199": {
    "de": "Ich suche eine Wohnung.",
    "lv": "Szukam mieszkania."
  },
  "diag_200": {
    "de": "Ist in diesem Haus eine Wohnung frei?",
    "lv": "Czy w tym domu jest wolne mieszkanie?"
  },
  "diag_201": {
    "de": "Wie viel kostet die Miete?",
    "lv": "Ile wynosi czynsz?"
  },
  "diag_202": {
    "de": "Die Wohnung hat drei Zimmer und eine Küche.",
    "lv": "Mieszkanie ma trzy pokoje i kuchnię."
  },
  "diag_203": {
    "de": "Heute ziehen wir um.",
    "lv": "Bugün taşınıyoruz."
  },
  "diag_204": {
    "de": "Mia, pack die Sachen bitte in Kisten!",
    "lv": "Mia, proszę, spakuj rzeczy do pudełek!"
  },
  "diag_205": {
    "de": "Hast du alles eingepackt?",
    "lv": "Her şey zaten paketlenmiş mi?"
  },
  "diag_206": {
    "de": "Ich stehe mit meinem Freund in Kontakt.",
    "lv": "Bir arkadaşımla yazışıyorum."
  },
  "diag_207": {
    "de": "Gehen wir ins Theater?",
    "lv": "Tiyatroya gidelim mi?"
  },
  "diag_208": {
    "de": "Ist alles eingeladen?",
    "lv": "Her şey yüklendi mi?"
  },
  "diag_209": {
    "de": "Welch schöne Aussicht!",
    "lv": "Ne güzel bir manzara!"
  },
  "diag_210": {
    "de": "Nun können wir alles wieder aufräumen.",
    "lv": "Artık her şeyi bir araya getirebiliriz."
  },
  "diag_211": {
    "de": "Wie viele Zimmer habt ihr?",
    "lv": "Ile masz pokoi?"
  },
  "diag_212": {
    "de": "Im Sommer fahre ich ans Meer.",
    "lv": "Yazın deniz kenarına gideceğim."
  },
  "diag_213": {
    "de": "Kannst du schwimmen?",
    "lv": "Czy umie Pan pływać"
  },
  "diag_214": {
    "de": "Schwimm nicht zu weit hinaus!",
    "lv": "Çok uzağa yüzmeyin!"
  },
  "diag_215": {
    "de": "Badest du jeden Tag?",
    "lv": "Her gün yüzüyor musun?"
  },
  "diag_216": {
    "de": "Bei schönem Wetter gehe ich angeln.",
    "lv": "Hava güzel olursa balık tutmaya giderim."
  },
  "diag_217": {
    "de": "Wie sieht er aus?",
    "lv": "Neye benziyor?"
  },
  "diag_218": {
    "de": "Er hat sich aber recht verändert.",
    "lv": "Ancak oldukça değişti."
  },
  "diag_219": {
    "de": "Wie ist er als Mensch?",
    "lv": "Jaki jest jako osoba?"
  },
  "diag_220": {
    "de": "Er ist immer nett und freundlich.",
    "lv": "O her zaman nazik ve hoştur."
  },
  "diag_221": {
    "de": "Ich fühle mich nicht wohl.",
    "lv": "Kendimi kötü hissediyorum."
  },
  "diag_222": {
    "de": "Was fehlt dir?",
    "lv": "Senin derdin ne?"
  },
  "diag_223": {
    "de": "Ich habe starke Kopfschmerzen.",
    "lv": "Başım çok kötü ağrıyor."
  },
  "diag_224": {
    "de": "Ich habe mich erkältet.",
    "lv": "Soğuk algınlığım var."
  },
  "diag_225": {
    "de": "Ich habe Schnupfen.",
    "lv": "Mam katar."
  },
  "diag_226": {
    "de": "Mir ist schwindlig.",
    "lv": "Başım dönüyor."
  },
  "diag_227": {
    "de": "Ich muss zum Arzt gehen.",
    "lv": "Doktora gitmeliyim."
  },
  "diag_228": {
    "de": "Leg dich ins Bett!",
    "lv": "Yatmak!"
  },
  "diag_229": {
    "de": "Hast du Fieber?",
    "lv": "Ateşin mi var?"
  },
  "diag_230": {
    "de": "Gestern hatte ich erhöhte Temperatur.",
    "lv": "Dün ateşim yüksekti."
  },
  "diag_231": {
    "de": "Ich habe Zahnschmerzen.",
    "lv": "Diş ağrım var."
  },
  "diag_232": {
    "de": "Ich muss zum Zahnarzt gehen.",
    "lv": "Dişçiye gitmem gerekiyor."
  },
  "diag_233": {
    "de": "Weißt du, dass Finn krank ist?",
    "lv": "Finn'in hasta olduğunu biliyor muydun?"
  },
  "diag_234": {
    "de": "Laut Arzt wird er bald wieder gesund.",
    "lv": "Doktorun söylediğine göre yakında iyileşecek."
  },
  "diag_235": {
    "de": "Ich will meine Wohnung neu möblieren.",
    "lv": "Dairemi yenilemek istiyorum."
  },
  "diag_236": {
    "de": "Kann ich das auf Raten kaufen?",
    "lv": "Taksitle satın alabilir miyim?"
  },
  "diag_237": {
    "de": "Bleib im Bett, bis es dir besser geht!",
    "lv": "Kendinizi daha iyi hissedene kadar yatakta kalın!"
  },
  "diag_238": {
    "de": "Noah hat in zwei Wochen schwimmen gelernt.",
    "lv": "Noah yüzmeyi iki haftada öğrendi."
  },
  "diag_239": {
    "de": "Sei mit dem Essen noch vorsichtig.",
    "lv": "Yiyeceklere dikkat edin."
  },
  "diag_240": {
    "de": "Sprichst du Deutsch?",
    "lv": "Almanca biliyor musun?"
  },
  "diag_241": {
    "de": "Ja, ein bisschen.",
    "lv": "Evet, biraz."
  },
  "diag_242": {
    "de": "Du sprichst ziemlich fließend.",
    "lv": "Gayet akıcı konuşuyorsun."
  },
  "diag_243": {
    "de": "Wo hast du Deutsch gelernt?",
    "lv": "Almancayı nerede öğrendin?"
  },
  "diag_244": {
    "de": "Ich nehme seit einem Jahr Deutschstunden.",
    "lv": "Bir yıldır Almanca dersi alıyorum."
  },
  "diag_245": {
    "de": "Ich suche immer Gelegenheit, Deutsch zu sprechen.",
    "lv": "Zawsze szukam okazji do rozmowy po niemiecku."
  },
  "diag_246": {
    "de": "Ist das Buch noch vorrätig?",
    "lv": "Bu kitap hâlâ mevcut mu?"
  },
  "diag_247": {
    "de": "Das Buch ist leider ausverkauft.",
    "lv": "Ne yazık ki kitap tükendi."
  },
  "diag_248": {
    "de": "Wann erscheint die neue Auflage?",
    "lv": "Yeni baskı ne zaman çıkacak?"
  },
  "diag_249": {
    "de": "Womit kann ich Ihnen helfen?",
    "lv": "Nasıl yardımcı olabilirim?"
  },
  "diag_250": {
    "de": "Haben Sie ganz frische Eier?",
    "lv": "Taze yumurtanız var mı?"
  },
  "diag_251": {
    "de": "Was kosten die?",
    "lv": "Maliyetleri ne kadar?"
  },
  "diag_252": {
    "de": "Das ist zu teuer.",
    "lv": "Çok pahalı."
  },
  "diag_253": {
    "de": "Können Sie mir ein halbes Kilo abwiegen?",
    "lv": "Yarım kilo alabilir misin?"
  },
  "diag_254": {
    "de": "Wie viel muss ich zahlen?",
    "lv": "Ne kadar ödemem gerekiyor?"
  },
  "diag_255": {
    "de": "Wie viel kostet das Kilo?",
    "lv": "Ile kosztuje kilogram?"
  },
  "diag_256": {
    "de": "Wiegen Sie mir bitte zwei Kilo ab.",
    "lv": "Lütfen iki kilogram tartın."
  },
  "diag_257": {
    "de": "Haben Sie auch Karotten?",
    "lv": "Havuç da var mı?"
  },
  "diag_258": {
    "de": "Haben Sie gutes Rindfleisch?",
    "lv": "İyi sığır eti var mı?"
  },
  "diag_259": {
    "de": "Geben Sie mir zwei Kilo Hackfleisch.",
    "lv": "İki kilo kıyma verin."
  },
  "diag_260": {
    "de": "Ein Laib Brot, bitte, aber nicht zu knusprig.",
    "lv": "Bir somun ekmek istiyorum ama çok sert değil."
  },
  "diag_261": {
    "de": "Das Brot ist frisch gebacken.",
    "lv": "Ekmek taze pişmiştir."
  },
  "diag_262": {
    "de": "Was für Obst haben Sie heute?",
    "lv": "Jakie owoce masz dzisiaj?"
  },
  "diag_263": {
    "de": "Was kosten die Äpfel?",
    "lv": "Elmanın fiyatı ne kadar?"
  },
  "diag_264": {
    "de": "Dann nehme ich zwei Kilo Äpfel.",
    "lv": "Sonra iki kilo elma alacağım."
  },
  "diag_265": {
    "de": "Die Birnen sind sehr teuer.",
    "lv": "Armut çok pahalıdır."
  },
  "diag_266": {
    "de": "Können Sie mir alles nach Hause liefern?",
    "lv": "Her şeyi evinize teslim edebilir misiniz?"
  },
  "diag_267": {
    "de": "Haben Sie Reis?",
    "lv": "Pirinç var mı?"
  },
  "diag_268": {
    "de": "Geben Sie mir bitte ein Kilo Reis.",
    "lv": "Lütfen bana bir kilo pirinç ver."
  },
  "diag_269": {
    "de": "Danke, diesmal nicht.",
    "lv": "Teşekkür ederim, bu sefer değil."
  },
  "diag_270": {
    "de": "Wie viel kostet dieser Teppich?",
    "lv": "Ile kosztuje ten dywan?"
  },
  "diag_271": {
    "de": "Können Sie die Möbel in meine Wohnung liefern?",
    "lv": "Daireye mobilya teslim etmek mümkün mü?"
  },
  "diag_272": {
    "de": "Bitte an der Kasse zahlen.",
    "lv": "Lütfen ödeme sırasında ödeme yapın."
  },
  "diag_273": {
    "de": "Bitte, machen Sie die Rechnung.",
    "lv": "Lütfen fatura düzenleyin."
  },
  "diag_274": {
    "de": "Was kostet das Meter?",
    "lv": "Ile kosztuje metr?"
  },
  "diag_275": {
    "de": "Dieser Stoff gefällt mir.",
    "lv": "Uwielbiam tę tkaninę."
  },
  "diag_276": {
    "de": "Schneiden Sie mir bitte drei Meter ab.",
    "lv": "Lütfen üç metreyi kesin."
  },
  "diag_277": {
    "de": "Haben Sie auch andere Muster?",
    "lv": "Başka örnekleriniz var mı?"
  },
  "diag_278": {
    "de": "Diese Farbe gefällt mir nicht.",
    "lv": "Bu rengi sevmiyorum."
  },
  "diag_279": {
    "de": "Geben Sie mir eine hellere.",
    "lv": "Daha parlak hale getirin."
  },
  "diag_280": {
    "de": "Was kosten diese Socken?",
    "lv": "Bu çorapların fiyatı ne kadar?"
  },
  "diag_281": {
    "de": "Welche Handschuhe wünschen Sie?",
    "lv": "Ne tür eldiven istiyorsun?"
  },
  "diag_282": {
    "de": "Die sind mir etwas zu eng.",
    "lv": "Benim için biraz fazla sıkılar."
  },
  "diag_283": {
    "de": "So, nun passen sie gut.",
    "lv": "Yani şimdi iyi çalışıyor."
  },
  "diag_284": {
    "de": "Kannst du mir einen guten Schneider empfehlen?",
    "lv": "İyi bir terzi önerebilir misiniz?"
  },
  "diag_285": {
    "de": "Ich will einen Anzug bestellen.",
    "lv": "Takım elbise sipariş etmek istiyorum."
  },
  "diag_286": {
    "de": "Wann wird er fertig sein?",
    "lv": "Ne zaman hazır olacak?"
  },
  "diag_287": {
    "de": "Der Anzug sitzt gut.",
    "lv": "Garnitur pasuje dobrze."
  },
  "diag_288": {
    "de": "Die Hose ist zu lang.",
    "lv": "Pantolon çok uzun."
  },
  "diag_289": {
    "de": "Bitte reinigen und bügeln Sie ihn!",
    "lv": "Lütfen temizleyin ve ütüleyin!"
  },
  "diag_290": {
    "de": "Wann wird das Kleid fertig sein?",
    "lv": "Elbise ne zaman hazır olacak?"
  },
  "diag_291": {
    "de": "Die Schuhe sind zu eng.",
    "lv": "Ayakkabılar çok dar."
  },
  "diag_292": {
    "de": "Können Sie die Schuhe heute reparieren?",
    "lv": "Bugün ayakkabılarını tamir edebilir misin?"
  },
  "diag_293": {
    "de": "Wann kann ich die Schuhe abholen?",
    "lv": "Ayakkabılarımı ne zaman getirebilirim?"
  },
  "diag_294": {
    "de": "Meine Armbanduhr funktioniert nicht.",
    "lv": "Saatim çalışmıyor."
  },
  "diag_295": {
    "de": "Sie geht fünf Minuten vor.",
    "lv": "Beş dakika erken."
  },
  "diag_296": {
    "de": "Bist du kurzsichtig oder weitsichtig?",
    "lv": "Kısa görüşlü müsünüz yoksa uzak görüşlü müsünüz?"
  },
  "diag_297": {
    "de": "Ich möchte eine Brille kaufen.",
    "lv": "Gözlük satın almak istiyorum."
  },
  "diag_298": {
    "de": "Können Sie meine Brille reparieren?",
    "lv": "Czy możesz naprawić moje okulary?"
  },
  "diag_299": {
    "de": "Das dauert nur eine Viertelstunde.",
    "lv": "Sadece on beş dakika sürecektir."
  },
  "diag_300": {
    "de": "Der Preis ist mir zu hoch.",
    "lv": "Cena jest dla mnie za wysoka."
  },
  "diag_301": {
    "de": "Ich brauche zwei Fotos für meinen Pass.",
    "lv": "İki adet vesikalık fotoğrafa ihtiyacım var."
  },
  "diag_302": {
    "de": "Bitte packen Sie es ein und schicken Sie es mir nach Hause.",
    "lv": "Lütfen paketleyip evinize gönderin."
  },
  "diag_303": {
    "de": "Wir haben feste Preise.",
    "lv": "Sabit fiyatlarımız var."
  },
  "diag_304": {
    "de": "Bitte, fotografieren Sie mich.",
    "lv": "Lütfen bir fotoğrafımı çek."
  },
  "diag_305": {
    "de": "Setzen Sie sich, schauen Sie gerade in die Kamera und bewegen Sie sich nicht!",
    "lv": "Oturun, doğrudan kameraya bakın ve hareket etmeyin!"
  },
  "diag_306": {
    "de": "Wann kann ich das Probebild sehen?",
    "lv": "Bir örneği ne zaman görebilirim?"
  },
  "diag_307": {
    "de": "Wann sind die Fotos fertig?",
    "lv": "Fotoğraflar ne zaman hazır olacak?"
  },
  "diag_308": {
    "de": "Die Aufnahme ist gelungen.",
    "lv": "Fotoğraf başarılıydı."
  },
  "diag_309": {
    "de": "Die Fotos sind gut geworden.",
    "lv": "Fotoğraflar iyi çıktı."
  },
  "diag_310": {
    "de": "Können Sie das Foto auch vergrößern?",
    "lv": "Fotoğrafı da büyütebilir misiniz?"
  },
  "diag_311": {
    "de": "Sind diese Steine echt?",
    "lv": "Bu taşlar gerçek mi?"
  },
  "diag_312": {
    "de": "Ist das echtes Gold?",
    "lv": "Bu gerçek altın mı?"
  },
  "diag_313": {
    "de": "Zeigen Sie mir bitte Trauringe.",
    "lv": "Bana evlilik yüzüklerini göster lütfen."
  },
  "diag_314": {
    "de": "Der Ring ist mir etwas zu weit.",
    "lv": "Pierścionek jest dla mnie trochę za duży."
  },
  "diag_315": {
    "de": "Ich kann ihn enger machen.",
    "lv": "Bunu daraltabilirim."
  },
  "diag_316": {
    "de": "Dieser Ring passt mir.",
    "lv": "Bu yüzük bana yakışıyor."
  },
  "diag_317": {
    "de": "Zeigen Sie mir schöne Geschenkideen.",
    "lv": "Güzel hediye fikirleri sunun."
  },
  "diag_318": {
    "de": "Wie gefallen dir diese Ohrringe?",
    "lv": "Bu küpeleri beğendin mi?"
  },
  "diag_319": {
    "de": "Diese Brosche ist wirklich schön.",
    "lv": "Bu broş çok güzel."
  },
  "diag_320": {
    "de": "Der Stein ist ein Saphir.",
    "lv": "Bu taş safirdir."
  },
  "diag_321": {
    "de": "Das ist kein echter Stein, das ist Glas.",
    "lv": "Gerçek taş değil, cam."
  },
  "diag_322": {
    "de": "Dieses Armband kann ich Ihnen besonders empfehlen.",
    "lv": "Bu bilekliği özellikle tavsiye ediyorum."
  },
  "diag_323": {
    "de": "Es ist besonders schön gearbeitet.",
    "lv": "Jest niezwykle precyzyjnie wykonany."
  },
  "diag_324": {
    "de": "Der Preis ist nicht hoch.",
    "lv": "Cena nie jest wysoka."
  },
  "diag_325": {
    "de": "Bekomme ich die Schachtel gratis?",
    "lv": "Ücretsiz bir kutu aldım mı?"
  },
  "diag_326": {
    "de": "Alle Schmuckstücke sind gestempelt.",
    "lv": "Tüm mücevherler damgalanmıştır."
  },
  "diag_327": {
    "de": "Falls es meiner Frau nicht gefällt, kann ich es umtauschen?",
    "lv": "Eşim beğenmezse değiştirebilir miyim?"
  },
  "diag_328": {
    "de": "Natürlich, jederzeit.",
    "lv": "Tabii ki asla."
  }
};

window.DIALOGUE_ID_MAP = DIALOGUE_ID_MAP;

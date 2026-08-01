const DIALOGUE_ID_MAP = {
  "diag_001": {
    "de": "Gute Besserung!",
    "lv": "Veseļojieties! • Atveseļojies!"
  },
  "diag_002": {
    "de": "Frohes neues Jahr!",
    "lv": "Laimīgu Jauno gadu!"
  },
  "diag_003": {
    "de": "Herzlichen Glückwunsch zum Geburtstag!",
    "lv": "Daudz laimes dzimšanas dienā!"
  },
  "diag_004": {
    "de": "Gute Reise!",
    "lv": "Laimīgu ceļu!"
  },
  "diag_005": {
    "de": "Es freut mich, Sie kennenzulernen.",
    "lv": "Priecājos ar Jums iepazīties."
  },
  "diag_006": {
    "de": "Wären Sie bitte so nett?",
    "lv": "Vai Jūs, lūdzu, būtu tik laipns?"
  },
  "diag_007": {
    "de": "Ich bin Ihnen sehr dankbar.",
    "lv": "Esmu Jums ļoti pateicīgs."
  },
  "diag_008": {
    "de": "Keine Ursache!",
    "lv": "Nav par ko!"
  },
  "diag_009": {
    "de": "Setzt euch bitte hin!",
    "lv": "Sēdieties, lūdzu!"
  },
  "diag_010": {
    "de": "Ben, komm bitte an die Tafel!",
    "lv": "Ben, nāc, lūdzu, pie tāfeles!"
  },
  "diag_011": {
    "de": "Schlagt bitte die Lehrbücher auf!",
    "lv": "Atveriet, lūdzu, mācību grāmatas!"
  },
  "diag_012": {
    "de": "Geht bitte in die Sporthalle!",
    "lv": "Noejiet, lūdzu, uz sporta zāli!"
  },
  "diag_013": {
    "de": "Schläfst du noch?",
    "lv": "Vai tu vēl guļi?"
  },
  "diag_014": {
    "de": "Schlafen Sie noch?",
    "lv": "Vai Jūs vēl guļat?"
  },
  "diag_015": {
    "de": "Er ist fest eingeschlafen.",
    "lv": "Viņš ir cieši aizmidzis."
  },
  "diag_016": {
    "de": "Wecke ihn bitte auf, es ist schon spät!",
    "lv": "Lūdzu, pamodini viņu, jau ir vēls!"
  },
  "diag_017": {
    "de": "Guten Morgen!",
    "lv": "-Kaj je FT?"
  },
  "diag_018": {
    "de": "Guten Tag!",
    "lv": "Labdien!"
  },
  "diag_019": {
    "de": "Gute Nacht!",
    "lv": "Ar labu nakti!"
  },
  "diag_020": {
    "de": "Entschuldigen Sie bitte!",
    "lv": "Atvainojiet, lūdzu!"
  },
  "diag_021": {
    "de": "Es tut mir sehr leid!",
    "lv": "Man ļoti žēl!"
  },
  "diag_022": {
    "de": "Vielen Dank!",
    "lv": "Liels paldies!"
  },
  "diag_023": {
    "de": "Finn, fang bitte an!",
    "lv": "Finn, sāc, lūdzu!"
  },
  "diag_024": {
    "de": "Lest bitte mit!",
    "lv": "Lasiet līdz, lūdzu!"
  },
  "diag_025": {
    "de": "Emma, schau bitte nicht aus dem Fenster!",
    "lv": "Emma, ​​prosim ne glej skozi okno!"
  },
  "diag_026": {
    "de": "Jonas, bring bitte die Hefte!",
    "lv": "Jonas, atnes, lūdzu, burtnīcas!"
  },
  "diag_027": {
    "de": "Geh bitte zurück an deinen Platz!",
    "lv": "Ej atpakaļ uz savu vietu!"
  },
  "diag_028": {
    "de": "Wie viel Uhr ist es?",
    "lv": "Koliko je ura"
  },
  "diag_029": {
    "de": "Es ist halb acht.",
    "lv": "Pulkstenis ir pus astoņi."
  },
  "diag_030": {
    "de": "Wann wachst du gewöhnlich auf?",
    "lv": "Kad tu parasti pamosties?"
  },
  "diag_031": {
    "de": "Ich stehe gleich auf.",
    "lv": "Es tūlīt celšos."
  },
  "diag_032": {
    "de": "Steh auf, Hanna, es klingelt!",
    "lv": "Vstani, Hannah, zvonec zvoni!"
  },
  "diag_033": {
    "de": "Lass mich noch fünf Minuten schlafen!",
    "lv": "Ļauj man vēl piecas minūtes pagulēt!"
  },
  "diag_034": {
    "de": "Vergiss nicht, das Zimmer zu lüften!",
    "lv": "Neaizmirsti istabu izvēdināt!"
  },
  "diag_035": {
    "de": "Wo ist das Handtuch?",
    "lv": "Kur ir dvielis?"
  },
  "diag_036": {
    "de": "Ich möchte mir die Zähne putzen.",
    "lv": "Gribu notīrīt zobus."
  },
  "diag_037": {
    "de": "Mit was putzt du dir die Zähne?",
    "lv": "Ar ko tu tīri zobus?"
  },
  "diag_038": {
    "de": "Ich möchte mich anziehen.",
    "lv": "Gribu apģērbties."
  },
  "diag_039": {
    "de": "Zieh dich bitte schnell an!",
    "lv": "Ģērbies ātri, lūdzu!"
  },
  "diag_040": {
    "de": "Kleide dich wärmer an, draußen ist es kühl.",
    "lv": "Ģērbies siltāk, ārā ir vēss."
  },
  "diag_041": {
    "de": "Guten Morgen, wie geht es dir?",
    "lv": "Labrīt, kā tev klājas?"
  },
  "diag_042": {
    "de": "Mir geht es gut, danke.",
    "lv": "Man klājas labi, paldies."
  },
  "diag_043": {
    "de": "Was gibt es Neues?",
    "lv": "Kas jauns?"
  },
  "diag_044": {
    "de": "Auf Wiedersehen!",
    "lv": "Uz redzēšanos!"
  },
  "diag_045": {
    "de": "Was für ein Chaos hier!",
    "lv": "Cik šeit ir nekārtība!"
  },
  "diag_046": {
    "de": "Darf ich beim Aufräumen helfen?",
    "lv": "Vai drīkstu palīdzēt sakārtot?"
  },
  "diag_047": {
    "de": "Was trinkst du morgens, Kaffee oder Tee?",
    "lv": "Ko tu no rīta dzer, kafiju vai tēju?"
  },
  "diag_048": {
    "de": "Gewöhnlich trinke ich morgens eine Tasse Kaffee.",
    "lv": "Parasti no rīta izdzeru tasi kafijas."
  },
  "diag_049": {
    "de": "Am liebsten trinke ich schwarzen Kaffee.",
    "lv": "Najbolje pijem črno kavo."
  },
  "diag_050": {
    "de": "Guten Morgen, hast du gut geschlafen?",
    "lv": "Labrīt, vai labi gulēji?"
  },
  "diag_051": {
    "de": "Ich bin noch sehr müde.",
    "lv": "Es joprojām esmu ļoti noguris."
  },
  "diag_052": {
    "de": "Willst du Kaffee oder Milch?",
    "lv": "Gribi kafiju vai pienu?"
  },
  "diag_053": {
    "de": "Gib mir bitte ein Brötchen mit Käse.",
    "lv": "Dod man, lūdzu, bulciņu ar sieru."
  },
  "diag_054": {
    "de": "Ich muss jetzt los!",
    "lv": "Man tagad jāiet!"
  },
  "diag_055": {
    "de": "Vergiss dein Frühstück nicht!",
    "lv": "Neaizmirsti brokastis!"
  },
  "diag_056": {
    "de": "Klara, deck bitte den Tisch!",
    "lv": "Klara, lūdzu, klāj galdu!"
  },
  "diag_057": {
    "de": "Vergiss die Servietten nicht!",
    "lv": "Neaizmirsti salvetītes!"
  },
  "diag_058": {
    "de": "Wann esst ihr zu Mittag?",
    "lv": "Kad jūs ēdat pusdienās?"
  },
  "diag_059": {
    "de": "Es ist Zeit zu essen.",
    "lv": "Ir laiks ēst."
  },
  "diag_060": {
    "de": "Was gibt es heute zu Mittag?",
    "lv": "Kas šodien ir pusdienās?"
  },
  "diag_061": {
    "de": "Wie schmeckt dir die Suppe?",
    "lv": "Kā tev garšo zupa?"
  },
  "diag_062": {
    "de": "Ehrlich gesagt ist sie etwas zu salzig.",
    "lv": "Atklāti sakot, tā ir drusciņ pārāk sāļa."
  },
  "diag_063": {
    "de": "Darf ich dir ein Stück Brot geben?",
    "lv": "Vai drīkstu iedot tev šķēli maizes?"
  },
  "diag_064": {
    "de": "Danke, ich habe schon.",
    "lv": "Paldies, man jau ir."
  },
  "diag_065": {
    "de": "Das Fleisch schmeckt ausgezeichnet.",
    "lv": "Gaļa garšo lieliski."
  },
  "diag_066": {
    "de": "Danke, ich bin schon satt.",
    "lv": "Paldies, es jau esmu paēdis."
  },
  "diag_067": {
    "de": "Heute haben wir Besuch.",
    "lv": "Šodien mums ir ciemiņi."
  },
  "diag_068": {
    "de": "Bist du heute Abend frei?",
    "lv": "Vai tev šovakar ir brīvs?"
  },
  "diag_069": {
    "de": "Komm doch heute zum Mittagessen vorbei!",
    "lv": "Nāc šodien pusdienās ciemos!"
  },
  "diag_070": {
    "de": "Setzen wir uns an den Tisch.",
    "lv": "Usedimo se za mizo."
  },
  "diag_071": {
    "de": "Bitte, bedien dich!",
    "lv": "Lūdzu, ēd, cik gribi!"
  },
  "diag_072": {
    "de": "Stört dich das Rauchen?",
    "lv": "Vai tevi traucē smēķēšana?"
  },
  "diag_073": {
    "de": "Danke für die nette Aufnahme!",
    "lv": "Paldies par laipno uzņemšanu!"
  },
  "diag_074": {
    "de": "Wann gehst du ins Bett?",
    "lv": "Kad tu ej gulēt?"
  },
  "diag_075": {
    "de": "Wenn ich von der Arbeit komme, bin ich immer müde.",
    "lv": "Kad atnāku no darba, vienmēr esmu noguris."
  },
  "diag_076": {
    "de": "Es ist Zeit, ins Bett zu gehen.",
    "lv": "Ir laiks iet gulēt."
  },
  "diag_077": {
    "de": "Es ist schönes Wetter.",
    "lv": "Ir jauks laiks."
  },
  "diag_078": {
    "de": "Willst du mit mir spazieren gehen?",
    "lv": "Gribi ar mani pastaigāties?"
  },
  "diag_079": {
    "de": "Sieh mal, es wird gleich regnen.",
    "lv": "Skaties, drīz līs."
  },
  "diag_080": {
    "de": "Nimm den Regenschirm mit!",
    "lv": "Paņem līdzi lietussargu!"
  },
  "diag_081": {
    "de": "Es regnet.",
    "lv": "Līst lietus."
  },
  "diag_082": {
    "de": "Ich bin schon ganz nass.",
    "lv": "Sem že čisto mokra."
  },
  "diag_083": {
    "de": "Glaubst du, dass es den ganzen Tag regnen wird?",
    "lv": "Domā, ka līs visu dienu?"
  },
  "diag_084": {
    "de": "Es hört auf zu regnen.",
    "lv": "Lietus beidz līt."
  },
  "diag_085": {
    "de": "Die Sonne scheint wieder.",
    "lv": "Saule atkal spīd."
  },
  "diag_086": {
    "de": "Es ist sehr warm.",
    "lv": "Ir ļoti karsti."
  },
  "diag_087": {
    "de": "Es sieht nach Regen aus.",
    "lv": "Izskatās, ka līs."
  },
  "diag_088": {
    "de": "Wir bekommen gleich ein Gewitter.",
    "lv": "Mēs drīz dabūsim negaisu."
  },
  "diag_089": {
    "de": "Das Gewitter zieht vorüber.",
    "lv": "Negaiss ir garām pagājis."
  },
  "diag_090": {
    "de": "Die Wolken verziehen sich.",
    "lv": "Mākoņi izklīst."
  },
  "diag_091": {
    "de": "Siehst du den Regenbogen?",
    "lv": "Redzi varavīksni?"
  },
  "diag_092": {
    "de": "Der Winter ist da, es hat geschneit.",
    "lv": "Ziema ir klāt, naktī sniga."
  },
  "diag_093": {
    "de": "Es schneit.",
    "lv": "Snieg."
  },
  "diag_094": {
    "de": "Wie schön ist es im Wald im Winter!",
    "lv": "Cik skaisti ir mežā ziemā!"
  },
  "diag_095": {
    "de": "Mir ist kalt, ich friere.",
    "lv": "Man ir auksti, man salst."
  },
  "diag_096": {
    "de": "Draußen ist Glatteis, pass auf!",
    "lv": "Ārā ir slideni, uzmanies!"
  },
  "diag_097": {
    "de": "Wollen wir auf die Eisbahn gehen?",
    "lv": "Aiziesim slidot?"
  },
  "diag_098": {
    "de": "Zieh die Jacke an, du kannst dich erkälten.",
    "lv": "Uzvelc jaku, var saaukstēties."
  },
  "diag_099": {
    "de": "Wie spät ist es?",
    "lv": "Cik ir pulkstenis?"
  },
  "diag_100": {
    "de": "Es ist halb sieben.",
    "lv": "Pulkstenis ir pus septiņi."
  },
  "diag_101": {
    "de": "Meine Uhr geht fünf Minuten vor.",
    "lv": "Mans pulkstenis steidzas par piecām minūtēm."
  },
  "diag_102": {
    "de": "Weck mich morgen früh um sieben Uhr!",
    "lv": "Pamodini mani rīt pulksten septiņos!"
  },
  "diag_103": {
    "de": "Was ist heute für ein Datum?",
    "lv": "Kateri je danes datum?"
  },
  "diag_104": {
    "de": "Heute ist der elfte Juli.",
    "lv": "Šodien ir vienpadsmitais jūlijs."
  },
  "diag_105": {
    "de": "Was machst du gewöhnlich am Abend?",
    "lv": "Ko tu parasti dari vakaros?"
  },
  "diag_106": {
    "de": "Es ist schon lange her, dass wir uns gesehen haben.",
    "lv": "Jau sen neesam satikušies."
  },
  "diag_107": {
    "de": "Wie geht es dir?",
    "lv": "Kā tev iet?"
  },
  "diag_108": {
    "de": "Entschuldige, ich möchte etwas mit dir besprechen.",
    "lv": "Piedod, gribu ar tevi kaut ko pārrunāt."
  },
  "diag_109": {
    "de": "Gehen wir spazieren!",
    "lv": "Iesim pastaigā!"
  },
  "diag_110": {
    "de": "Hast du Lust, mit mir in den Park zu gehen?",
    "lv": "Gribi ar mani aiziet uz parku?"
  },
  "diag_111": {
    "de": "Ich komme, um dich zum Spaziergang abzuholen.",
    "lv": "Es atnācu tevi ņemt līdz pastaigā."
  },
  "diag_112": {
    "de": "Geh bitte etwas langsamer, ich kann dir nicht folgen!",
    "lv": "Ej mazliet lēnāk, es nevaru tev tikt līdzi!"
  },
  "diag_113": {
    "de": "Ich bin zum ersten Mal in dieser Gegend.",
    "lv": "Esmu šeit pirmo reizi."
  },
  "diag_114": {
    "de": "Ruhen wir uns ein wenig aus.",
    "lv": "Nedaudz atpūtīsimies."
  },
  "diag_115": {
    "de": "Jetzt können wir zurückgehen.",
    "lv": "Tagad varam doties atpakaļ."
  },
  "diag_116": {
    "de": "Ehrlich gesagt bin ich ziemlich müde.",
    "lv": "Atklāti sakot, esmu diezgan noguris."
  },
  "diag_117": {
    "de": "Entschuldige, wo ist die nächste U-Bahn-Station?",
    "lv": "Piedod, kur ir tuvākā metro stacija?"
  },
  "diag_118": {
    "de": "Welcher ist der kürzeste Weg?",
    "lv": "Kurš ir īsākais ceļš?"
  },
  "diag_119": {
    "de": "Geh hier die zweite Straße links und dann immer geradeaus.",
    "lv": "Šeit nogriezies otrajā ielā pa kreisi un ej taisni uz priekšu."
  },
  "diag_120": {
    "de": "Wie komme ich am schnellsten zum Bahnhof?",
    "lv": "Kā ātrāk nokļūt uz staciju?"
  },
  "diag_121": {
    "de": "Ich habe vor, morgen zu verreisen.",
    "lv": "Esmu nodomājis rīt aizbraukt."
  },
  "diag_122": {
    "de": "Wohin willst du fahren?",
    "lv": "Kur tu gribi braukt?"
  },
  "diag_123": {
    "de": "Reist du geschäftlich oder privat?",
    "lv": "Tu brauc darba dēļ vai atpūtai?"
  },
  "diag_124": {
    "de": "Finn fährt bis Berlin mit, dann geht er ans Meer.",
    "lv": "Finn se vozi v Berlin, potem bo šel na morje."
  },
  "diag_125": {
    "de": "Wann fährt das Schiff ab?",
    "lv": "Kad kuģis atiet?"
  },
  "diag_126": {
    "de": "In einer halben Stunde.",
    "lv": "Pēc pusstundas."
  },
  "diag_127": {
    "de": "Kann ich noch eine Kabine bekommen?",
    "lv": "Vai vēl varu dabūt kajīti?"
  },
  "diag_128": {
    "de": "Vergiss deinen Pass nicht!",
    "lv": "Neaizmirsti pasi!"
  },
  "diag_129": {
    "de": "Es ist Zeit, den Koffer zu packen.",
    "lv": "Ir laiks sakravāt čemodānu."
  },
  "diag_130": {
    "de": "Der Zug fährt um halb sieben ab.",
    "lv": "Vlak odpelje ob pol sedmih."
  },
  "diag_131": {
    "de": "Hol mir bitte ein Taxi, ich verpasse sonst den Zug!",
    "lv": "Pasauc, lūdzu, taksometru, citādi nokavēšu vilcienu!"
  },
  "diag_132": {
    "de": "Fahr bitte zum Bahnhof!",
    "lv": "Aizved, lūdzu, uz staciju!"
  },
  "diag_133": {
    "de": "Ich muss mich beeilen.",
    "lv": "Man jāsteidzas."
  },
  "diag_134": {
    "de": "Ist der Schalter schon offen?",
    "lv": "Vai kase jau ir atvērta?"
  },
  "diag_135": {
    "de": "Eine Fahrkarte nach Köln, bitte.",
    "lv": "Vienu biļeti līdz Ķelnei, lūdzu."
  },
  "diag_136": {
    "de": "Wann fährt der Zug ab?",
    "lv": "Kad vilciens atiet?"
  },
  "diag_137": {
    "de": "Der Zug fährt gleich ab.",
    "lv": "Vilciens drīz atiet."
  },
  "diag_138": {
    "de": "Muss ich in Koblenz umsteigen?",
    "lv": "Ali moram zamenjati sedež v Koblenzu?"
  },
  "diag_139": {
    "de": "Ja, dort musst du umsteigen.",
    "lv": "Jā, tur tev jāpārsēžas."
  },
  "diag_140": {
    "de": "Ist dieser Platz frei?",
    "lv": "Vai šī vieta ir brīva?"
  },
  "diag_141": {
    "de": "Nein, hier sitzt niemand.",
    "lv": "Nē, šeit neviens nesēž."
  },
  "diag_142": {
    "de": "Wo ist der Bahnsteigkartenautomat?",
    "lv": "Kur ir automāts platformas biļetēm?"
  },
  "diag_143": {
    "de": "Stell mein Handgepäck ins Gepäcknetz.",
    "lv": "Ieliec manu rokas bagāžu režģī."
  },
  "diag_144": {
    "de": "Kann ich das Fenster aufmachen?",
    "lv": "Vai drīkstu atvērt logu?"
  },
  "diag_145": {
    "de": "Es zieht, schließ bitte das Fenster!",
    "lv": "Velk cauri, aizver, lūdzu, logu!"
  },
  "diag_146": {
    "de": "Welche ist die nächste Station?",
    "lv": "Kāda ir nākamā pietura?"
  },
  "diag_147": {
    "de": "Wie lange hält der Zug?",
    "lv": "Cik ilgi vilciens stāv?"
  },
  "diag_148": {
    "de": "Wo muss ich umsteigen?",
    "lv": "Kur man jāpārsēžas?"
  },
  "diag_149": {
    "de": "Der Zug hat Verspätung.",
    "lv": "Vilciens kavējas."
  },
  "diag_150": {
    "de": "Dieser Wagen ist für Nichtraucher.",
    "lv": "Šis vagons ir nesmēķētājiem."
  },
  "diag_151": {
    "de": "Wir fahren jetzt über die Grenze.",
    "lv": "Tagad braucam pāri robežai."
  },
  "diag_152": {
    "de": "Hast du etwas zu verzollen?",
    "lv": "Vai tev ir kas jāmuito?"
  },
  "diag_153": {
    "de": "Wir sind in Berlin angekommen.",
    "lv": "Esam pienākuši Berlīnē."
  },
  "diag_154": {
    "de": "Kannst du mir ein gutes Hotel empfehlen?",
    "lv": "Vai vari ieteikt labu viesnīcu?"
  },
  "diag_155": {
    "de": "Haben Sie freie Zimmer?",
    "lv": "Ali imate proste sobe?"
  },
  "diag_156": {
    "de": "Ein Zimmer mit zwei Betten, bitte.",
    "lv": "Istabu ar divām gultām, lūdzu."
  },
  "diag_157": {
    "de": "Was kostet das Zimmer pro Nacht?",
    "lv": "Cik maksā istaba par nakti?"
  },
  "diag_158": {
    "de": "Morgen reise ich ab. Weck mich um sieben Uhr!",
    "lv": "Rīt braucu prom. Pamodini mani pulksten septiņos!"
  },
  "diag_159": {
    "de": "Die Rechnung, bitte!",
    "lv": "Rēķinu, lūdzu!"
  },
  "diag_160": {
    "de": "Wo ist die Stadtbibliothek?",
    "lv": "Kur ir pilsētas bibliotēka?"
  },
  "diag_161": {
    "de": "Wann hat das Museum geöffnet?",
    "lv": "Kad muzejs ir atvērts?"
  },
  "diag_162": {
    "de": "Wollen wir ins Museum gehen?",
    "lv": "Iesim muzejā?"
  },
  "diag_163": {
    "de": "Fahren wir mit dem Bus oder der U-Bahn?",
    "lv": "Braucam ar autobusu vai metro?"
  },
  "diag_164": {
    "de": "Wo ist die nächste Bushaltestelle?",
    "lv": "Kur ir tuvākā autobusa pietura?"
  },
  "diag_165": {
    "de": "Ich habe großen Hunger.",
    "lv": "Man ir liels izsalkums."
  },
  "diag_166": {
    "de": "Gehen wir zusammen essen?",
    "lv": "Ejam kopā paēst?"
  },
  "diag_167": {
    "de": "Kellner, die Speisekarte, bitte!",
    "lv": "Viesmīli, ēdienkarti, lūdzu!"
  },
  "diag_168": {
    "de": "Ist der Fisch frisch?",
    "lv": "Vai zivs ir svaiga?"
  },
  "diag_169": {
    "de": "Das schmeckt ausgezeichnet!",
    "lv": "Garšo lieliski!"
  },
  "diag_170": {
    "de": "Kellner, zahlen bitte!",
    "lv": "Viesmīli, lūdzu, maksāt!"
  },
  "diag_171": {
    "de": "Was kostet das?",
    "lv": "Cik tas maksā?"
  },
  "diag_172": {
    "de": "Ich gehe ins Café einen Kaffee trinken.",
    "lv": "Iešu kafejnīcā izdzert kafiju."
  },
  "diag_173": {
    "de": "Willst du mitkommen?",
    "lv": "Gribi nākt līdz?"
  },
  "diag_174": {
    "de": "Eine Tasse Kaffee mit Milch, bitte!",
    "lv": "Tasi kafijas ar pienu, lūdzu!"
  },
  "diag_175": {
    "de": "Bitte schneller, ich habe es eilig!",
    "lv": "Ātrāk, lūdzu, man jāsteidzas!"
  },
  "diag_176": {
    "de": "Lass deinen Kaffee nicht kalt werden!",
    "lv": "Neļauj kafijai atdzist!"
  },
  "diag_177": {
    "de": "Haben Sie etwas Erfrischendes?",
    "lv": "Vai jums ir kas atsvaidzinošs?"
  },
  "diag_178": {
    "de": "Eine Portion Eis, bitte!",
    "lv": "Porciju saldējuma, lūdzu!"
  },
  "diag_179": {
    "de": "Heute Morgen habe ich einen Brief bekommen.",
    "lv": "Šorīt saņēmu vēstuli."
  },
  "diag_180": {
    "de": "Ich muss ihm gleich schreiben.",
    "lv": "Man viņam tūlīt jāraksta."
  },
  "diag_181": {
    "de": "Wo ist der nächste Briefkasten?",
    "lv": "Kur ir tuvākā pastkaste?"
  },
  "diag_182": {
    "de": "Wo ist die Post?",
    "lv": "Kje je pošta?"
  },
  "diag_183": {
    "de": "Erinnere mich morgen daran zu schreiben!",
    "lv": "Atgādini man rīt parakstīt!"
  },
  "diag_184": {
    "de": "Werfen Sie bitte diesen Brief in den Briefkasten.",
    "lv": "Lūdzu, iemet šo vēstuli pastkastē!"
  },
  "diag_185": {
    "de": "Hallo, hier spricht Emma.",
    "lv": "Sveiki, runā Emma."
  },
  "diag_186": {
    "de": "Kann ich dich später anrufen?",
    "lv": "Vai drīkstu tev vēlāk piezvanīt?"
  },
  "diag_187": {
    "de": "Muss ich lange warten?",
    "lv": "Vai man ilgi jāgaida?"
  },
  "diag_188": {
    "de": "Bitte schneiden Sie mir die Haare.",
    "lv": "Lūdzu, apgrieziet man matus."
  },
  "diag_189": {
    "de": "Hinten bitte nicht zu kurz.",
    "lv": "Aizmugurē, lūdzu, ne pārāk īsi."
  },
  "diag_190": {
    "de": "Wann beginnt die Vorstellung?",
    "lv": "Kad sākas izrāde?"
  },
  "diag_191": {
    "de": "Es fängt um halb acht an.",
    "lv": "Sākas pus astoņos."
  },
  "diag_192": {
    "de": "Alle Plätze sind ausverkauft.",
    "lv": "Visas biļetes ir izpārdotas."
  },
  "diag_193": {
    "de": "Drei Karten, bitte!",
    "lv": "Trīs biļetes, lūdzu!"
  },
  "diag_194": {
    "de": "Wir lassen die Jacken in der Garderobe.",
    "lv": "Atstāsim jakas garderobē."
  },
  "diag_195": {
    "de": "Bitte schnell, der Vorhang geht gleich auf!",
    "lv": "Ātrāk, lūdzu, priekškars tūlīt atvērsies!"
  },
  "diag_196": {
    "de": "Der Vorhang fällt.",
    "lv": "Priekškars krīt."
  },
  "diag_197": {
    "de": "Darf ich dich zum Tanz bitten?",
    "lv": "Vai drīkstu uzaicināt dejot?"
  },
  "diag_198": {
    "de": "Wann ist eure Hochzeit?",
    "lv": "Kdaj je tvoja poroka?"
  },
  "diag_199": {
    "de": "Ich suche eine Wohnung.",
    "lv": "Meklēju dzīvokli."
  },
  "diag_200": {
    "de": "Ist in diesem Haus eine Wohnung frei?",
    "lv": "Vai šajā mājā ir brīvs dzīvoklis?"
  },
  "diag_201": {
    "de": "Wie viel kostet die Miete?",
    "lv": "Cik maksā īre?"
  },
  "diag_202": {
    "de": "Die Wohnung hat drei Zimmer und eine Küche.",
    "lv": "Dzīvoklim ir trīs istabas un virtuve."
  },
  "diag_203": {
    "de": "Heute ziehen wir um.",
    "lv": "Šodien pārceļamies."
  },
  "diag_204": {
    "de": "Mia, pack die Sachen bitte in Kisten!",
    "lv": "Mia, saliec, lūdzu, mantas kastēs!"
  },
  "diag_205": {
    "de": "Hast du alles eingepackt?",
    "lv": "Vai viss jau ir salikts kastēs?"
  },
  "diag_206": {
    "de": "Ich stehe mit meinem Freund in Kontakt.",
    "lv": "Esmu sarakstē ar savu draugu."
  },
  "diag_207": {
    "de": "Gehen wir ins Theater?",
    "lv": "Iesim teātrī?"
  },
  "diag_208": {
    "de": "Ist alles eingeladen?",
    "lv": "Vai viss ir iekrauts?"
  },
  "diag_209": {
    "de": "Welch schöne Aussicht!",
    "lv": "Cik skaists skats!"
  },
  "diag_210": {
    "de": "Nun können wir alles wieder aufräumen.",
    "lv": "Tagad varam visu atkal sakārtot."
  },
  "diag_211": {
    "de": "Wie viele Zimmer habt ihr?",
    "lv": "Cik jums istabu?"
  },
  "diag_212": {
    "de": "Im Sommer fahre ich ans Meer.",
    "lv": "Poleti bom šla na morje."
  },
  "diag_213": {
    "de": "Kannst du schwimmen?",
    "lv": "Vai tu proti peldēt?"
  },
  "diag_214": {
    "de": "Schwimm nicht zu weit hinaus!",
    "lv": "Nepeldi pārāk tālu!"
  },
  "diag_215": {
    "de": "Badest du jeden Tag?",
    "lv": "Vai tu peldies katru dienu?"
  },
  "diag_216": {
    "de": "Bei schönem Wetter gehe ich angeln.",
    "lv": "Ja laiks labs, eju makšķerēt."
  },
  "diag_217": {
    "de": "Wie sieht er aus?",
    "lv": "Kā viņš izskatās?"
  },
  "diag_218": {
    "de": "Er hat sich aber recht verändert.",
    "lv": "Se je pa precej spremenil."
  },
  "diag_219": {
    "de": "Wie ist er als Mensch?",
    "lv": "Kāds viņš ir kā cilvēks?"
  },
  "diag_220": {
    "de": "Er ist immer nett und freundlich.",
    "lv": "Viņš vienmēr ir jauks un laipns."
  },
  "diag_221": {
    "de": "Ich fühle mich nicht wohl.",
    "lv": "Jūtos slikti."
  },
  "diag_222": {
    "de": "Was fehlt dir?",
    "lv": "Kas tev kait?"
  },
  "diag_223": {
    "de": "Ich habe starke Kopfschmerzen.",
    "lv": "Man ir stipras galvas sāpes."
  },
  "diag_224": {
    "de": "Ich habe mich erkältet.",
    "lv": "Esmu saaukstējies."
  },
  "diag_225": {
    "de": "Ich habe Schnupfen.",
    "lv": "Man ir iesnas."
  },
  "diag_226": {
    "de": "Mir ist schwindlig.",
    "lv": "Man ir reibonis."
  },
  "diag_227": {
    "de": "Ich muss zum Arzt gehen.",
    "lv": "Moram k zdravniku."
  },
  "diag_228": {
    "de": "Leg dich ins Bett!",
    "lv": "Noliecies gultā!"
  },
  "diag_229": {
    "de": "Hast du Fieber?",
    "lv": "Vai tev ir drudzis?"
  },
  "diag_230": {
    "de": "Gestern hatte ich erhöhte Temperatur.",
    "lv": "Vakar man bija paaugstināta temperatūra."
  },
  "diag_231": {
    "de": "Ich habe Zahnschmerzen.",
    "lv": "Man sāp zobs."
  },
  "diag_232": {
    "de": "Ich muss zum Zahnarzt gehen.",
    "lv": "Man jāiet pie zobarsta."
  },
  "diag_233": {
    "de": "Weißt du, dass Finn krank ist?",
    "lv": "Vai zini, ka Finn ir slims?"
  },
  "diag_234": {
    "de": "Laut Arzt wird er bald wieder gesund.",
    "lv": "Pēc ārsta domām, viņš drīz atkal būs vesels."
  },
  "diag_235": {
    "de": "Ich will meine Wohnung neu möblieren.",
    "lv": "Gribu no jauna mēbelēt dzīvokli."
  },
  "diag_236": {
    "de": "Kann ich das auf Raten kaufen?",
    "lv": "Vai varu nopirkt nomaksā?"
  },
  "diag_237": {
    "de": "Bleib im Bett, bis es dir besser geht!",
    "lv": "Paliec gultā, kamēr jūties labāk!"
  },
  "diag_238": {
    "de": "Noah hat in zwei Wochen schwimmen gelernt.",
    "lv": "Noah divās nedēļās iemācījās peldēt."
  },
  "diag_239": {
    "de": "Sei mit dem Essen noch vorsichtig.",
    "lv": "Previdno pri hrani."
  },
  "diag_240": {
    "de": "Sprichst du Deutsch?",
    "lv": "Vai tu runā vācu?"
  },
  "diag_241": {
    "de": "Ja, ein bisschen.",
    "lv": "Jā, drusku."
  },
  "diag_242": {
    "de": "Du sprichst ziemlich fließend.",
    "lv": "Tu runā diezgan tekoši."
  },
  "diag_243": {
    "de": "Wo hast du Deutsch gelernt?",
    "lv": "Kur tu mācījies vācu?"
  },
  "diag_244": {
    "de": "Ich nehme seit einem Jahr Deutschstunden.",
    "lv": "Jau gadu ņemu vācu stundas."
  },
  "diag_245": {
    "de": "Ich suche immer Gelegenheit, Deutsch zu sprechen.",
    "lv": "Vienmēr meklēju iespēju runāt vāciski."
  },
  "diag_246": {
    "de": "Ist das Buch noch vorrätig?",
    "lv": "Vai šī grāmata vēl ir pieejama?"
  },
  "diag_247": {
    "de": "Das Buch ist leider ausverkauft.",
    "lv": "Diemžēl grāmata ir izpārdota."
  },
  "diag_248": {
    "de": "Wann erscheint die neue Auflage?",
    "lv": "Kad iznāks jaunais izdevums?"
  },
  "diag_249": {
    "de": "Womit kann ich Ihnen helfen?",
    "lv": "Ar ko varu palīdzēt?"
  },
  "diag_250": {
    "de": "Haben Sie ganz frische Eier?",
    "lv": "Vai jums ir svaigas olas?"
  },
  "diag_251": {
    "de": "Was kosten die?",
    "lv": "Cik tās maksā?"
  },
  "diag_252": {
    "de": "Das ist zu teuer.",
    "lv": "Tas ir par dārgu."
  },
  "diag_253": {
    "de": "Können Sie mir ein halbes Kilo abwiegen?",
    "lv": "Vai varat nosvērt pus kilo?"
  },
  "diag_254": {
    "de": "Wie viel muss ich zahlen?",
    "lv": "Cik man jāmaksā?"
  },
  "diag_255": {
    "de": "Wie viel kostet das Kilo?",
    "lv": "Cik maksā kilograms?"
  },
  "diag_256": {
    "de": "Wiegen Sie mir bitte zwei Kilo ab.",
    "lv": "Nosveriet, lūdzu, divus kilogramus."
  },
  "diag_257": {
    "de": "Haben Sie auch Karotten?",
    "lv": "Vai jums ir arī burkāni?"
  },
  "diag_258": {
    "de": "Haben Sie gutes Rindfleisch?",
    "lv": "Vai jums ir laba liellopa gaļa?"
  },
  "diag_259": {
    "de": "Geben Sie mir zwei Kilo Hackfleisch.",
    "lv": "Dodiet divus kilogramus maltās gaļas."
  },
  "diag_260": {
    "de": "Ein Laib Brot, bitte, aber nicht zu knusprig.",
    "lv": "Vienu maizes kukuli, lūdzu, bet ne pārāk cietu."
  },
  "diag_261": {
    "de": "Das Brot ist frisch gebacken.",
    "lv": "Maize ir svaigi cepta."
  },
  "diag_262": {
    "de": "Was für Obst haben Sie heute?",
    "lv": "Kādi augļi jums šodien ir?"
  },
  "diag_263": {
    "de": "Was kosten die Äpfel?",
    "lv": "Cik maksā āboli?"
  },
  "diag_264": {
    "de": "Dann nehme ich zwei Kilo Äpfel.",
    "lv": "Tad ņemšu divus kilogramus ābolu."
  },
  "diag_265": {
    "de": "Die Birnen sind sehr teuer.",
    "lv": "Bumbieri ir ļoti dārgi."
  },
  "diag_266": {
    "de": "Können Sie mir alles nach Hause liefern?",
    "lv": "Vai varat visu piegādāt uz mājām?"
  },
  "diag_267": {
    "de": "Haben Sie Reis?",
    "lv": "Ali imate riž?"
  },
  "diag_268": {
    "de": "Geben Sie mir bitte ein Kilo Reis.",
    "lv": "Dodiet, lūdzu, kilogramu rīsu."
  },
  "diag_269": {
    "de": "Danke, diesmal nicht.",
    "lv": "Paldies, šoreiz nē."
  },
  "diag_270": {
    "de": "Wie viel kostet dieser Teppich?",
    "lv": "Cik maksā šis paklājs?"
  },
  "diag_271": {
    "de": "Können Sie die Möbel in meine Wohnung liefern?",
    "lv": "Vai varat piegādāt mēbeles uz dzīvokli?"
  },
  "diag_272": {
    "de": "Bitte an der Kasse zahlen.",
    "lv": "Lūdzu, maksājiet pie kases."
  },
  "diag_273": {
    "de": "Bitte, machen Sie die Rechnung.",
    "lv": "Izrakstiet rēķinu, lūdzu."
  },
  "diag_274": {
    "de": "Was kostet das Meter?",
    "lv": "Cik maksā metrs?"
  },
  "diag_275": {
    "de": "Dieser Stoff gefällt mir.",
    "lv": "Man patīk šis audums."
  },
  "diag_276": {
    "de": "Schneiden Sie mir bitte drei Meter ab.",
    "lv": "Nogrieziet, lūdzu, trīs metrus."
  },
  "diag_277": {
    "de": "Haben Sie auch andere Muster?",
    "lv": "Vai jums ir arī citi paraugi?"
  },
  "diag_278": {
    "de": "Diese Farbe gefällt mir nicht.",
    "lv": "Man nepatīk šī krāsa."
  },
  "diag_279": {
    "de": "Geben Sie mir eine hellere.",
    "lv": "Dodiet gaišāku."
  },
  "diag_280": {
    "de": "Was kosten diese Socken?",
    "lv": "Cik maksā šīs zeķes?"
  },
  "diag_281": {
    "de": "Welche Handschuhe wünschen Sie?",
    "lv": "Kādus cimdus vēlaties?"
  },
  "diag_282": {
    "de": "Die sind mir etwas zu eng.",
    "lv": "Tie man ir drusku par šauri."
  },
  "diag_283": {
    "de": "So, nun passen sie gut.",
    "lv": "Torej, zdaj deluje dobro."
  },
  "diag_284": {
    "de": "Kannst du mir einen guten Schneider empfehlen?",
    "lv": "Vai vari ieteikt labu drēbnieku?"
  },
  "diag_285": {
    "de": "Ich will einen Anzug bestellen.",
    "lv": "Gribu pasūtīt uzvalku."
  },
  "diag_286": {
    "de": "Wann wird er fertig sein?",
    "lv": "Kad būs gatavs?"
  },
  "diag_287": {
    "de": "Der Anzug sitzt gut.",
    "lv": "Uzvalks der labi."
  },
  "diag_288": {
    "de": "Die Hose ist zu lang.",
    "lv": "Bikses ir par garām."
  },
  "diag_289": {
    "de": "Bitte reinigen und bügeln Sie ihn!",
    "lv": "Lūdzu, iztīriet un izgludinat to!"
  },
  "diag_290": {
    "de": "Wann wird das Kleid fertig sein?",
    "lv": "Kad kleita būs gatava?"
  },
  "diag_291": {
    "de": "Die Schuhe sind zu eng.",
    "lv": "Kurpes ir par šauras."
  },
  "diag_292": {
    "de": "Können Sie die Schuhe heute reparieren?",
    "lv": "Vai varat šodien salabot kurpes?"
  },
  "diag_293": {
    "de": "Wann kann ich die Schuhe abholen?",
    "lv": "Kad varu atnest kurpes?"
  },
  "diag_294": {
    "de": "Meine Armbanduhr funktioniert nicht.",
    "lv": "Mana rokas pulkstenis nedarbojas."
  },
  "diag_295": {
    "de": "Sie geht fünf Minuten vor.",
    "lv": "Tas steidzas par piecām minūtēm."
  },
  "diag_296": {
    "de": "Bist du kurzsichtig oder weitsichtig?",
    "lv": "Vai esi tuvredzīgs vai tālredzīgs?"
  },
  "diag_297": {
    "de": "Ich möchte eine Brille kaufen.",
    "lv": "Gribu nopirkt brilles."
  },
  "diag_298": {
    "de": "Können Sie meine Brille reparieren?",
    "lv": "Vai varat salabot manas brilles?"
  },
  "diag_299": {
    "de": "Das dauert nur eine Viertelstunde.",
    "lv": "Trajalo bo samo petnajst minut."
  },
  "diag_300": {
    "de": "Der Preis ist mir zu hoch.",
    "lv": "Cena man par augstu."
  },
  "diag_301": {
    "de": "Ich brauche zwei Fotos für meinen Pass.",
    "lv": "Man vajag divas fotogrāfijas pasē."
  },
  "diag_302": {
    "de": "Bitte packen Sie es ein und schicken Sie es mir nach Hause.",
    "lv": "Lūdzu, iesaiņojiet un nosūtiet uz mājām."
  },
  "diag_303": {
    "de": "Wir haben feste Preise.",
    "lv": "Mums ir fiksētas cenas."
  },
  "diag_304": {
    "de": "Bitte, fotografieren Sie mich.",
    "lv": "Lūdzu, nofotografējiet mani."
  },
  "diag_305": {
    "de": "Setzen Sie sich, schauen Sie gerade in die Kamera und bewegen Sie sich nicht!",
    "lv": "Apsēdieties, skatieties taisni kamerā un nekustieties!"
  },
  "diag_306": {
    "de": "Wann kann ich das Probebild sehen?",
    "lv": "Kad varu redzēt paraugu?"
  },
  "diag_307": {
    "de": "Wann sind die Fotos fertig?",
    "lv": "Kad fotogrāfijas būs gatavas?"
  },
  "diag_308": {
    "de": "Die Aufnahme ist gelungen.",
    "lv": "Foto izdevās."
  },
  "diag_309": {
    "de": "Die Fotos sind gut geworden.",
    "lv": "Fotogrāfijas labi izdevušās."
  },
  "diag_310": {
    "de": "Können Sie das Foto auch vergrößern?",
    "lv": "Vai varat arī palielināt fotogrāfiju?"
  },
  "diag_311": {
    "de": "Sind diese Steine echt?",
    "lv": "Vai šie akmeņi ir īsti?"
  },
  "diag_312": {
    "de": "Ist das echtes Gold?",
    "lv": "Vai tas ir īsts zelts?"
  },
  "diag_313": {
    "de": "Zeigen Sie mir bitte Trauringe.",
    "lv": "Parādiet, lūdzu, laulības gredzenus."
  },
  "diag_314": {
    "de": "Der Ring ist mir etwas zu weit.",
    "lv": "Gredzens man ir drusku par lielu."
  },
  "diag_315": {
    "de": "Ich kann ihn enger machen.",
    "lv": "Es to varu sašaurināt."
  },
  "diag_316": {
    "de": "Dieser Ring passt mir.",
    "lv": "Šis gredzens man der."
  },
  "diag_317": {
    "de": "Zeigen Sie mir schöne Geschenkideen.",
    "lv": "Parādiet skaistas dāvanu idejas."
  },
  "diag_318": {
    "de": "Wie gefallen dir diese Ohrringe?",
    "lv": "Kā tev patīk šie auskari?"
  },
  "diag_319": {
    "de": "Diese Brosche ist wirklich schön.",
    "lv": "Šī sakta ir ļoti skaista."
  },
  "diag_320": {
    "de": "Der Stein ist ein Saphir.",
    "lv": "Šis akmens ir safīrs."
  },
  "diag_321": {
    "de": "Das ist kein echter Stein, das ist Glas.",
    "lv": "Šis nav īsts akmens, tas ir stikls."
  },
  "diag_322": {
    "de": "Dieses Armband kann ich Ihnen besonders empfehlen.",
    "lv": "Šo aproci īpaši varu ieteikt."
  },
  "diag_323": {
    "de": "Es ist besonders schön gearbeitet.",
    "lv": "Tā ir īpaši smalki izstrādāta."
  },
  "diag_324": {
    "de": "Der Preis ist nicht hoch.",
    "lv": "Cena nav augsta."
  },
  "diag_325": {
    "de": "Bekomme ich die Schachtel gratis?",
    "lv": "Vai kastīti dabūju bez maksas?"
  },
  "diag_326": {
    "de": "Alle Schmuckstücke sind gestempelt.",
    "lv": "Visas rotaslietas ir ar zīmogu."
  },
  "diag_327": {
    "de": "Falls es meiner Frau nicht gefällt, kann ich es umtauschen?",
    "lv": "Ja manai sievai nepatiks, vai varu apmainīt?"
  },
  "diag_328": {
    "de": "Natürlich, jederzeit.",
    "lv": "Protams, jebkurā laikā."
  }
};

window.DIALOGUE_ID_MAP = DIALOGUE_ID_MAP;

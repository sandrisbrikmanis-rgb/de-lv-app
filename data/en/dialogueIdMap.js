const DIALOGUE_ID_MAP = {
  "diag_001": {
    "de": "Gute Besserung!",
    "lv": "Get well! • Get well!"
  },
  "diag_002": {
    "de": "Frohes neues Jahr!",
    "lv": "Happy New Year!"
  },
  "diag_003": {
    "de": "Herzlichen Glückwunsch zum Geburtstag!",
    "lv": "Happy birthday!"
  },
  "diag_004": {
    "de": "Gute Reise!",
    "lv": "Happy journey!"
  },
  "diag_005": {
    "de": "Es freut mich, Sie kennenzulernen.",
    "lv": "I am glad to meet you."
  },
  "diag_006": {
    "de": "Wären Sie bitte so nett?",
    "lv": "Would you please be so kind?"
  },
  "diag_007": {
    "de": "Ich bin Ihnen sehr dankbar.",
    "lv": "I am very grateful to you."
  },
  "diag_008": {
    "de": "Keine Ursache!",
    "lv": "Nothing for nothing!"
  },
  "diag_009": {
    "de": "Setzt euch bitte hin!",
    "lv": "Sit down, please!"
  },
  "diag_010": {
    "de": "Ben, komm bitte an die Tafel!",
    "lv": "Ben, please come to the board!"
  },
  "diag_011": {
    "de": "Schlagt bitte die Lehrbücher auf!",
    "lv": "Open the textbooks, please!"
  },
  "diag_012": {
    "de": "Geht bitte in die Sporthalle!",
    "lv": "Please go to the gym!"
  },
  "diag_013": {
    "de": "Schläfst du noch?",
    "lv": "Are you still sleeping"
  },
  "diag_014": {
    "de": "Schlafen Sie noch?",
    "lv": "Are you still sleeping?"
  },
  "diag_015": {
    "de": "Er ist fest eingeschlafen.",
    "lv": "He is fast asleep."
  },
  "diag_016": {
    "de": "Wecke ihn bitte auf, es ist schon spät!",
    "lv": "Please wake him up, it's already late!"
  },
  "diag_017": {
    "de": "Guten Morgen!",
    "lv": "Good morning!"
  },
  "diag_018": {
    "de": "Guten Tag!",
    "lv": "Hello!"
  },
  "diag_019": {
    "de": "Gute Nacht!",
    "lv": "Good night!"
  },
  "diag_020": {
    "de": "Entschuldigen Sie bitte!",
    "lv": "Excuse me, please!"
  },
  "diag_021": {
    "de": "Es tut mir sehr leid!",
    "lv": "I'm so sorry!"
  },
  "diag_022": {
    "de": "Vielen Dank!",
    "lv": "Thank you very much!"
  },
  "diag_023": {
    "de": "Finn, fang bitte an!",
    "lv": "Finn, start, please!"
  },
  "diag_024": {
    "de": "Lest bitte mit!",
    "lv": "Read on, please!"
  },
  "diag_025": {
    "de": "Emma, schau bitte nicht aus dem Fenster!",
    "lv": "Emma, ​​please don't look out the window!"
  },
  "diag_026": {
    "de": "Jonas, bring bitte die Hefte!",
    "lv": "Jonas, please bring the notebooks!"
  },
  "diag_027": {
    "de": "Geh bitte zurück an deinen Platz!",
    "lv": "Go back to your place!"
  },
  "diag_028": {
    "de": "Wie viel Uhr ist es?",
    "lv": "What time is it?"
  },
  "diag_029": {
    "de": "Es ist halb acht.",
    "lv": "It is half past seven."
  },
  "diag_030": {
    "de": "Wann wachst du gewöhnlich auf?",
    "lv": "When do you usually wake up?"
  },
  "diag_031": {
    "de": "Ich stehe gleich auf.",
    "lv": "I'll get up right away."
  },
  "diag_032": {
    "de": "Steh auf, Hanna, es klingelt!",
    "lv": "Get up, Hannah, the bell is ringing!"
  },
  "diag_033": {
    "de": "Lass mich noch fünf Minuten schlafen!",
    "lv": "Let me sleep for five more minutes!"
  },
  "diag_034": {
    "de": "Vergiss nicht, das Zimmer zu lüften!",
    "lv": "Do not forget to ventilate the room!"
  },
  "diag_035": {
    "de": "Wo ist das Handtuch?",
    "lv": "Where is the towel"
  },
  "diag_036": {
    "de": "Ich möchte mir die Zähne putzen.",
    "lv": "I want to brush my teeth."
  },
  "diag_037": {
    "de": "Mit was putzt du dir die Zähne?",
    "lv": "What do you brush your teeth with?"
  },
  "diag_038": {
    "de": "Ich möchte mich anziehen.",
    "lv": "I want to get dressed."
  },
  "diag_039": {
    "de": "Zieh dich bitte schnell an!",
    "lv": "Get dressed quickly, please!"
  },
  "diag_040": {
    "de": "Kleide dich wärmer an, draußen ist es kühl.",
    "lv": "Dress warmly, it's cold outside."
  },
  "diag_041": {
    "de": "Guten Morgen, wie geht es dir?",
    "lv": "Good morning, how are you?"
  },
  "diag_042": {
    "de": "Mir geht es gut, danke.",
    "lv": "I'm fine, thanks."
  },
  "diag_043": {
    "de": "Was gibt es Neues?",
    "lv": "What's new?"
  },
  "diag_044": {
    "de": "Auf Wiedersehen!",
    "lv": "Goodbye!"
  },
  "diag_045": {
    "de": "Was für ein Chaos hier!",
    "lv": "What a mess it is here!"
  },
  "diag_046": {
    "de": "Darf ich beim Aufräumen helfen?",
    "lv": "May I help tidy up?"
  },
  "diag_047": {
    "de": "Was trinkst du morgens, Kaffee oder Tee?",
    "lv": "What do you drink in the morning, coffee or tea?"
  },
  "diag_048": {
    "de": "Gewöhnlich trinke ich morgens eine Tasse Kaffee.",
    "lv": "I usually drink a cup of coffee in the morning."
  },
  "diag_049": {
    "de": "Am liebsten trinke ich schwarzen Kaffee.",
    "lv": "I drink black coffee best."
  },
  "diag_050": {
    "de": "Guten Morgen, hast du gut geschlafen?",
    "lv": "Good morning, did you sleep well?"
  },
  "diag_051": {
    "de": "Ich bin noch sehr müde.",
    "lv": "I'm still very tired."
  },
  "diag_052": {
    "de": "Willst du Kaffee oder Milch?",
    "lv": "Do you want coffee or milk?"
  },
  "diag_053": {
    "de": "Gib mir bitte ein Brötchen mit Käse.",
    "lv": "Give me a cheese bun, please."
  },
  "diag_054": {
    "de": "Ich muss jetzt los!",
    "lv": "I have to go now!"
  },
  "diag_055": {
    "de": "Vergiss dein Frühstück nicht!",
    "lv": "Don't forget breakfast!"
  },
  "diag_056": {
    "de": "Klara, deck bitte den Tisch!",
    "lv": "Clara, please set the table!"
  },
  "diag_057": {
    "de": "Vergiss die Servietten nicht!",
    "lv": "Don't forget the napkins!"
  },
  "diag_058": {
    "de": "Wann esst ihr zu Mittag?",
    "lv": "When do you eat lunch"
  },
  "diag_059": {
    "de": "Es ist Zeit zu essen.",
    "lv": "It's time to eat."
  },
  "diag_060": {
    "de": "Was gibt es heute zu Mittag?",
    "lv": "What's for lunch today?"
  },
  "diag_061": {
    "de": "Wie schmeckt dir die Suppe?",
    "lv": "How do you like the soup?"
  },
  "diag_062": {
    "de": "Ehrlich gesagt ist sie etwas zu salzig.",
    "lv": "Frankly, it's a tad too salty."
  },
  "diag_063": {
    "de": "Darf ich dir ein Stück Brot geben?",
    "lv": "May I give you a slice of bread?"
  },
  "diag_064": {
    "de": "Danke, ich habe schon.",
    "lv": "Thanks, I already have."
  },
  "diag_065": {
    "de": "Das Fleisch schmeckt ausgezeichnet.",
    "lv": "The meat tastes great."
  },
  "diag_066": {
    "de": "Danke, ich bin schon satt.",
    "lv": "Thanks, I'm already full."
  },
  "diag_067": {
    "de": "Heute haben wir Besuch.",
    "lv": "Today we have visitors."
  },
  "diag_068": {
    "de": "Bist du heute Abend frei?",
    "lv": "Are you free tonight"
  },
  "diag_069": {
    "de": "Komm doch heute zum Mittagessen vorbei!",
    "lv": "Come visit for lunch today!"
  },
  "diag_070": {
    "de": "Setzen wir uns an den Tisch.",
    "lv": "Let's sit down at the table."
  },
  "diag_071": {
    "de": "Bitte, bedien dich!",
    "lv": "Please eat as much as you want!"
  },
  "diag_072": {
    "de": "Stört dich das Rauchen?",
    "lv": "Does smoking bother you?"
  },
  "diag_073": {
    "de": "Danke für die nette Aufnahme!",
    "lv": "Thank you for the warm welcome!"
  },
  "diag_074": {
    "de": "Wann gehst du ins Bett?",
    "lv": "When do you go to sleep"
  },
  "diag_075": {
    "de": "Wenn ich von der Arbeit komme, bin ich immer müde.",
    "lv": "I'm always tired when I come home from work."
  },
  "diag_076": {
    "de": "Es ist Zeit, ins Bett zu gehen.",
    "lv": "It's time to go to sleep."
  },
  "diag_077": {
    "de": "Es ist schönes Wetter.",
    "lv": "It's a nice time."
  },
  "diag_078": {
    "de": "Willst du mit mir spazieren gehen?",
    "lv": "Do you want to walk with me?"
  },
  "diag_079": {
    "de": "Sieh mal, es wird gleich regnen.",
    "lv": "Look, it will rain soon."
  },
  "diag_080": {
    "de": "Nimm den Regenschirm mit!",
    "lv": "Take an umbrella with you!"
  },
  "diag_081": {
    "de": "Es regnet.",
    "lv": "It's raining."
  },
  "diag_082": {
    "de": "Ich bin schon ganz nass.",
    "lv": "I'm already completely wet."
  },
  "diag_083": {
    "de": "Glaubst du, dass es den ganzen Tag regnen wird?",
    "lv": "Think it's going to rain all day?"
  },
  "diag_084": {
    "de": "Es hört auf zu regnen.",
    "lv": "The rain stops."
  },
  "diag_085": {
    "de": "Die Sonne scheint wieder.",
    "lv": "The sun is shining again."
  },
  "diag_086": {
    "de": "Es ist sehr warm.",
    "lv": "It is very hot."
  },
  "diag_087": {
    "de": "Es sieht nach Regen aus.",
    "lv": "It looks like it's going to rain."
  },
  "diag_088": {
    "de": "Wir bekommen gleich ein Gewitter.",
    "lv": "We're about to get a storm."
  },
  "diag_089": {
    "de": "Das Gewitter zieht vorüber.",
    "lv": "The storm has passed."
  },
  "diag_090": {
    "de": "Die Wolken verziehen sich.",
    "lv": "The clouds are dispersing."
  },
  "diag_091": {
    "de": "Siehst du den Regenbogen?",
    "lv": "See the rainbow?"
  },
  "diag_092": {
    "de": "Der Winter ist da, es hat geschneit.",
    "lv": "Winter is here, it snowed at night."
  },
  "diag_093": {
    "de": "Es schneit.",
    "lv": "It is snowing."
  },
  "diag_094": {
    "de": "Wie schön ist es im Wald im Winter!",
    "lv": "How beautiful it is in the forest in winter!"
  },
  "diag_095": {
    "de": "Mir ist kalt, ich friere.",
    "lv": "I'm cold, I'm freezing."
  },
  "diag_096": {
    "de": "Draußen ist Glatteis, pass auf!",
    "lv": "It's slippery outside, be careful!"
  },
  "diag_097": {
    "de": "Wollen wir auf die Eisbahn gehen?",
    "lv": "Shall we go ice skating?"
  },
  "diag_098": {
    "de": "Zieh die Jacke an, du kannst dich erkälten.",
    "lv": "Put on a jacket, you might catch a cold."
  },
  "diag_099": {
    "de": "Wie spät ist es?",
    "lv": "What time is it"
  },
  "diag_100": {
    "de": "Es ist halb sieben.",
    "lv": "It is half past seven."
  },
  "diag_101": {
    "de": "Meine Uhr geht fünf Minuten vor.",
    "lv": "My watch is fast five minutes."
  },
  "diag_102": {
    "de": "Weck mich morgen früh um sieben Uhr!",
    "lv": "Wake me up at seven o'clock tomorrow!"
  },
  "diag_103": {
    "de": "Was ist heute für ein Datum?",
    "lv": "What is the date today?"
  },
  "diag_104": {
    "de": "Heute ist der elfte Juli.",
    "lv": "Today is the eleventh of July."
  },
  "diag_105": {
    "de": "Was machst du gewöhnlich am Abend?",
    "lv": "What do you usually do in the evenings?"
  },
  "diag_106": {
    "de": "Es ist schon lange her, dass wir uns gesehen haben.",
    "lv": "We have not met for a long time."
  },
  "diag_107": {
    "de": "Wie geht es dir?",
    "lv": "How are you"
  },
  "diag_108": {
    "de": "Entschuldige, ich möchte etwas mit dir besprechen.",
    "lv": "Excuse me, I want to discuss something with you."
  },
  "diag_109": {
    "de": "Gehen wir spazieren!",
    "lv": "Let's go for a walk!"
  },
  "diag_110": {
    "de": "Hast du Lust, mit mir in den Park zu gehen?",
    "lv": "Do you want to go to the park with me?"
  },
  "diag_111": {
    "de": "Ich komme, um dich zum Spaziergang abzuholen.",
    "lv": "I came to take you for a walk."
  },
  "diag_112": {
    "de": "Geh bitte etwas langsamer, ich kann dir nicht folgen!",
    "lv": "Go a little slower, I can't keep up with you!"
  },
  "diag_113": {
    "de": "Ich bin zum ersten Mal in dieser Gegend.",
    "lv": "I am here for the first time."
  },
  "diag_114": {
    "de": "Ruhen wir uns ein wenig aus.",
    "lv": "Let's rest a little."
  },
  "diag_115": {
    "de": "Jetzt können wir zurückgehen.",
    "lv": "Now we can go back."
  },
  "diag_116": {
    "de": "Ehrlich gesagt bin ich ziemlich müde.",
    "lv": "Frankly, I'm pretty tired."
  },
  "diag_117": {
    "de": "Entschuldige, wo ist die nächste U-Bahn-Station?",
    "lv": "Excuse me, where is the nearest metro station?"
  },
  "diag_118": {
    "de": "Welcher ist der kürzeste Weg?",
    "lv": "Which is the shortest path?"
  },
  "diag_119": {
    "de": "Geh hier die zweite Straße links und dann immer geradeaus.",
    "lv": "Here, take the second street to the left and go straight ahead."
  },
  "diag_120": {
    "de": "Wie komme ich am schnellsten zum Bahnhof?",
    "lv": "How to get to the station faster?"
  },
  "diag_121": {
    "de": "Ich habe vor, morgen zu verreisen.",
    "lv": "I intend to leave tomorrow."
  },
  "diag_122": {
    "de": "Wohin willst du fahren?",
    "lv": "Where do you want to go?"
  },
  "diag_123": {
    "de": "Reist du geschäftlich oder privat?",
    "lv": "Are you travelling for work or leisure?"
  },
  "diag_124": {
    "de": "Finn fährt bis Berlin mit, dann geht er ans Meer.",
    "lv": "Finn is driving to Berlin, then he will go to the sea."
  },
  "diag_125": {
    "de": "Wann fährt das Schiff ab?",
    "lv": "When does the ship leave?"
  },
  "diag_126": {
    "de": "In einer halben Stunde.",
    "lv": "After half an hour."
  },
  "diag_127": {
    "de": "Kann ich noch eine Kabine bekommen?",
    "lv": "Can I still get a cabin?"
  },
  "diag_128": {
    "de": "Vergiss deinen Pass nicht!",
    "lv": "Don't forget your passport!"
  },
  "diag_129": {
    "de": "Es ist Zeit, den Koffer zu packen.",
    "lv": "It's time to pack your suitcase."
  },
  "diag_130": {
    "de": "Der Zug fährt um halb sieben ab.",
    "lv": "The train leaves at half past seven."
  },
  "diag_131": {
    "de": "Hol mir bitte ein Taxi, ich verpasse sonst den Zug!",
    "lv": "Call a taxi, please, otherwise I'll miss the train!"
  },
  "diag_132": {
    "de": "Fahr bitte zum Bahnhof!",
    "lv": "Please take me to the station!"
  },
  "diag_133": {
    "de": "Ich muss mich beeilen.",
    "lv": "I have to hurry."
  },
  "diag_134": {
    "de": "Ist der Schalter schon offen?",
    "lv": "Is the box office open yet?"
  },
  "diag_135": {
    "de": "Eine Fahrkarte nach Köln, bitte.",
    "lv": "One ticket to Cologne, please."
  },
  "diag_136": {
    "de": "Wann fährt der Zug ab?",
    "lv": "When does the train leave?"
  },
  "diag_137": {
    "de": "Der Zug fährt gleich ab.",
    "lv": "The train is leaving soon."
  },
  "diag_138": {
    "de": "Muss ich in Koblenz umsteigen?",
    "lv": "Do I have to change seats in Koblenz?"
  },
  "diag_139": {
    "de": "Ja, dort musst du umsteigen.",
    "lv": "Yes, you have to change seats there."
  },
  "diag_140": {
    "de": "Ist dieser Platz frei?",
    "lv": "Is this place available?"
  },
  "diag_141": {
    "de": "Nein, hier sitzt niemand.",
    "lv": "No, no one is sitting here."
  },
  "diag_142": {
    "de": "Wo ist der Bahnsteigkartenautomat?",
    "lv": "Where is the platform ticket machine?"
  },
  "diag_143": {
    "de": "Stell mein Handgepäck ins Gepäcknetz.",
    "lv": "Put my carry-on in the grid."
  },
  "diag_144": {
    "de": "Kann ich das Fenster aufmachen?",
    "lv": "May I open the window?"
  },
  "diag_145": {
    "de": "Es zieht, schließ bitte das Fenster!",
    "lv": "Pull through, please close the window!"
  },
  "diag_146": {
    "de": "Welche ist die nächste Station?",
    "lv": "What's the next stop?"
  },
  "diag_147": {
    "de": "Wie lange hält der Zug?",
    "lv": "How long does the train stand?"
  },
  "diag_148": {
    "de": "Wo muss ich umsteigen?",
    "lv": "Where should I transfer?"
  },
  "diag_149": {
    "de": "Der Zug hat Verspätung.",
    "lv": "The train is late."
  },
  "diag_150": {
    "de": "Dieser Wagen ist für Nichtraucher.",
    "lv": "This carriage is non-smoking."
  },
  "diag_151": {
    "de": "Wir fahren jetzt über die Grenze.",
    "lv": "Now we are driving across the border."
  },
  "diag_152": {
    "de": "Hast du etwas zu verzollen?",
    "lv": "Do you have something to clear?"
  },
  "diag_153": {
    "de": "Wir sind in Berlin angekommen.",
    "lv": "We have arrived in Berlin."
  },
  "diag_154": {
    "de": "Kannst du mir ein gutes Hotel empfehlen?",
    "lv": "Can you recommend a good hotel?"
  },
  "diag_155": {
    "de": "Haben Sie freie Zimmer?",
    "lv": "Do you have any rooms available?"
  },
  "diag_156": {
    "de": "Ein Zimmer mit zwei Betten, bitte.",
    "lv": "A room with two beds, please."
  },
  "diag_157": {
    "de": "Was kostet das Zimmer pro Nacht?",
    "lv": "How much is the room per night?"
  },
  "diag_158": {
    "de": "Morgen reise ich ab. Weck mich um sieben Uhr!",
    "lv": "I'm leaving tomorrow. Wake me up at seven!"
  },
  "diag_159": {
    "de": "Die Rechnung, bitte!",
    "lv": "Bill, please!"
  },
  "diag_160": {
    "de": "Wo ist die Stadtbibliothek?",
    "lv": "Where is the city library?"
  },
  "diag_161": {
    "de": "Wann hat das Museum geöffnet?",
    "lv": "When is the museum open?"
  },
  "diag_162": {
    "de": "Wollen wir ins Museum gehen?",
    "lv": "Shall we go to the museum?"
  },
  "diag_163": {
    "de": "Fahren wir mit dem Bus oder der U-Bahn?",
    "lv": "Are we going by bus or subway?"
  },
  "diag_164": {
    "de": "Wo ist die nächste Bushaltestelle?",
    "lv": "Where is the nearest bus stop?"
  },
  "diag_165": {
    "de": "Ich habe großen Hunger.",
    "lv": "I am very hungry."
  },
  "diag_166": {
    "de": "Gehen wir zusammen essen?",
    "lv": "Shall we go eat together?"
  },
  "diag_167": {
    "de": "Kellner, die Speisekarte, bitte!",
    "lv": "Waiters, menu, please!"
  },
  "diag_168": {
    "de": "Ist der Fisch frisch?",
    "lv": "Is the fish fresh?"
  },
  "diag_169": {
    "de": "Das schmeckt ausgezeichnet!",
    "lv": "It tastes great!"
  },
  "diag_170": {
    "de": "Kellner, zahlen bitte!",
    "lv": "Waiters, please pay!"
  },
  "diag_171": {
    "de": "Was kostet das?",
    "lv": "How much does it cost?"
  },
  "diag_172": {
    "de": "Ich gehe ins Café einen Kaffee trinken.",
    "lv": "I will go to a cafe to drink coffee."
  },
  "diag_173": {
    "de": "Willst du mitkommen?",
    "lv": "Want to come along?"
  },
  "diag_174": {
    "de": "Eine Tasse Kaffee mit Milch, bitte!",
    "lv": "A cup of coffee with milk, please!"
  },
  "diag_175": {
    "de": "Bitte schneller, ich habe es eilig!",
    "lv": "Faster please, I have to hurry!"
  },
  "diag_176": {
    "de": "Lass deinen Kaffee nicht kalt werden!",
    "lv": "Don't let the coffee get cold!"
  },
  "diag_177": {
    "de": "Haben Sie etwas Erfrischendes?",
    "lv": "Do you have something refreshing?"
  },
  "diag_178": {
    "de": "Eine Portion Eis, bitte!",
    "lv": "A serving of ice cream, please!"
  },
  "diag_179": {
    "de": "Heute Morgen habe ich einen Brief bekommen.",
    "lv": "I received a letter this morning."
  },
  "diag_180": {
    "de": "Ich muss ihm gleich schreiben.",
    "lv": "I must write to him now."
  },
  "diag_181": {
    "de": "Wo ist der nächste Briefkasten?",
    "lv": "Where is the nearest mailbox?"
  },
  "diag_182": {
    "de": "Wo ist die Post?",
    "lv": "Where is the post office?"
  },
  "diag_183": {
    "de": "Erinnere mich morgen daran zu schreiben!",
    "lv": "Remind me to sign tomorrow!"
  },
  "diag_184": {
    "de": "Werfen Sie bitte diesen Brief in den Briefkasten.",
    "lv": "Please drop this letter in the mailbox!"
  },
  "diag_185": {
    "de": "Hallo, hier spricht Emma.",
    "lv": "Hello, this is Emma."
  },
  "diag_186": {
    "de": "Kann ich dich später anrufen?",
    "lv": "Can i call you later"
  },
  "diag_187": {
    "de": "Muss ich lange warten?",
    "lv": "Do I have to wait long?"
  },
  "diag_188": {
    "de": "Bitte schneiden Sie mir die Haare.",
    "lv": "Please cut my hair."
  },
  "diag_189": {
    "de": "Hinten bitte nicht zu kurz.",
    "lv": "In the back, please, not too short."
  },
  "diag_190": {
    "de": "Wann beginnt die Vorstellung?",
    "lv": "When does the show start?"
  },
  "diag_191": {
    "de": "Es fängt um halb acht an.",
    "lv": "It starts at half past eight."
  },
  "diag_192": {
    "de": "Alle Plätze sind ausverkauft.",
    "lv": "All tickets are sold out."
  },
  "diag_193": {
    "de": "Drei Karten, bitte!",
    "lv": "Three tickets, please!"
  },
  "diag_194": {
    "de": "Wir lassen die Jacken in der Garderobe.",
    "lv": "Let's leave the jackets in the wardrobe."
  },
  "diag_195": {
    "de": "Bitte schnell, der Vorhang geht gleich auf!",
    "lv": "Quicker please, the curtain is about to open!"
  },
  "diag_196": {
    "de": "Der Vorhang fällt.",
    "lv": "The curtain falls."
  },
  "diag_197": {
    "de": "Darf ich dich zum Tanz bitten?",
    "lv": "May I ask you to dance?"
  },
  "diag_198": {
    "de": "Wann ist eure Hochzeit?",
    "lv": "When is your wedding?"
  },
  "diag_199": {
    "de": "Ich suche eine Wohnung.",
    "lv": "I am looking for an apartment."
  },
  "diag_200": {
    "de": "Ist in diesem Haus eine Wohnung frei?",
    "lv": "Is there an apartment available in this house?"
  },
  "diag_201": {
    "de": "Wie viel kostet die Miete?",
    "lv": "How much is the rent?"
  },
  "diag_202": {
    "de": "Die Wohnung hat drei Zimmer und eine Küche.",
    "lv": "The apartment has three rooms and a kitchen."
  },
  "diag_203": {
    "de": "Heute ziehen wir um.",
    "lv": "We are moving today."
  },
  "diag_204": {
    "de": "Mia, pack die Sachen bitte in Kisten!",
    "lv": "Mia, put things in boxes, please!"
  },
  "diag_205": {
    "de": "Hast du alles eingepackt?",
    "lv": "Is everything already boxed?"
  },
  "diag_206": {
    "de": "Ich stehe mit meinem Freund in Kontakt.",
    "lv": "I am in correspondence with my friend."
  },
  "diag_207": {
    "de": "Gehen wir ins Theater?",
    "lv": "Shall we go to the theatre?"
  },
  "diag_208": {
    "de": "Ist alles eingeladen?",
    "lv": "Is everything loaded?"
  },
  "diag_209": {
    "de": "Welch schöne Aussicht!",
    "lv": "What a beautiful view!"
  },
  "diag_210": {
    "de": "Nun können wir alles wieder aufräumen.",
    "lv": "Now we can put everything back together."
  },
  "diag_211": {
    "de": "Wie viele Zimmer habt ihr?",
    "lv": "How many rooms do you have?"
  },
  "diag_212": {
    "de": "Im Sommer fahre ich ans Meer.",
    "lv": "I will go to the sea in the summer."
  },
  "diag_213": {
    "de": "Kannst du schwimmen?",
    "lv": "Can you swim"
  },
  "diag_214": {
    "de": "Schwimm nicht zu weit hinaus!",
    "lv": "Don't swim too far!"
  },
  "diag_215": {
    "de": "Badest du jeden Tag?",
    "lv": "Do you swim every day?"
  },
  "diag_216": {
    "de": "Bei schönem Wetter gehe ich angeln.",
    "lv": "If the weather is good, I go fishing."
  },
  "diag_217": {
    "de": "Wie sieht er aus?",
    "lv": "What does he look like?"
  },
  "diag_218": {
    "de": "Er hat sich aber recht verändert.",
    "lv": "However, he has changed quite a bit."
  },
  "diag_219": {
    "de": "Wie ist er als Mensch?",
    "lv": "What is he like as a person?"
  },
  "diag_220": {
    "de": "Er ist immer nett und freundlich.",
    "lv": "He is always nice and kind."
  },
  "diag_221": {
    "de": "Ich fühle mich nicht wohl.",
    "lv": "I feel bad."
  },
  "diag_222": {
    "de": "Was fehlt dir?",
    "lv": "What's wrong with you?"
  },
  "diag_223": {
    "de": "Ich habe starke Kopfschmerzen.",
    "lv": "I have a severe headache."
  },
  "diag_224": {
    "de": "Ich habe mich erkältet.",
    "lv": "I have a cold."
  },
  "diag_225": {
    "de": "Ich habe Schnupfen.",
    "lv": "I have a runny nose."
  },
  "diag_226": {
    "de": "Mir ist schwindlig.",
    "lv": "I'm dizzy."
  },
  "diag_227": {
    "de": "Ich muss zum Arzt gehen.",
    "lv": "I have to go to the doctor."
  },
  "diag_228": {
    "de": "Leg dich ins Bett!",
    "lv": "Lie down in bed!"
  },
  "diag_229": {
    "de": "Hast du Fieber?",
    "lv": "Do you have a fever?"
  },
  "diag_230": {
    "de": "Gestern hatte ich erhöhte Temperatur.",
    "lv": "I had a high temperature yesterday."
  },
  "diag_231": {
    "de": "Ich habe Zahnschmerzen.",
    "lv": "I have a toothache."
  },
  "diag_232": {
    "de": "Ich muss zum Zahnarzt gehen.",
    "lv": "I have to go to the dentist."
  },
  "diag_233": {
    "de": "Weißt du, dass Finn krank ist?",
    "lv": "Do you know that Finn is sick?"
  },
  "diag_234": {
    "de": "Laut Arzt wird er bald wieder gesund.",
    "lv": "According to the doctor, he will be well again soon."
  },
  "diag_235": {
    "de": "Ich will meine Wohnung neu möblieren.",
    "lv": "I want to refurnish the apartment."
  },
  "diag_236": {
    "de": "Kann ich das auf Raten kaufen?",
    "lv": "Can I buy in installments?"
  },
  "diag_237": {
    "de": "Bleib im Bett, bis es dir besser geht!",
    "lv": "Stay in bed until you feel better!"
  },
  "diag_238": {
    "de": "Noah hat in zwei Wochen schwimmen gelernt.",
    "lv": "Noah learned to swim in two weeks."
  },
  "diag_239": {
    "de": "Sei mit dem Essen noch vorsichtig.",
    "lv": "Be careful with food."
  },
  "diag_240": {
    "de": "Sprichst du Deutsch?",
    "lv": "Do you speak german"
  },
  "diag_241": {
    "de": "Ja, ein bisschen.",
    "lv": "Yes, a little."
  },
  "diag_242": {
    "de": "Du sprichst ziemlich fließend.",
    "lv": "You speak quite fluently."
  },
  "diag_243": {
    "de": "Wo hast du Deutsch gelernt?",
    "lv": "Where did you learn German?"
  },
  "diag_244": {
    "de": "Ich nehme seit einem Jahr Deutschstunden.",
    "lv": "I have been taking German lessons for a year."
  },
  "diag_245": {
    "de": "Ich suche immer Gelegenheit, Deutsch zu sprechen.",
    "lv": "Always looking for an opportunity to speak German."
  },
  "diag_246": {
    "de": "Ist das Buch noch vorrätig?",
    "lv": "Is this book still available?"
  },
  "diag_247": {
    "de": "Das Buch ist leider ausverkauft.",
    "lv": "Unfortunately, the book is sold out."
  },
  "diag_248": {
    "de": "Wann erscheint die neue Auflage?",
    "lv": "When will the new edition come out?"
  },
  "diag_249": {
    "de": "Womit kann ich Ihnen helfen?",
    "lv": "How can I help?"
  },
  "diag_250": {
    "de": "Haben Sie ganz frische Eier?",
    "lv": "Do you have fresh eggs?"
  },
  "diag_251": {
    "de": "Was kosten die?",
    "lv": "How much do they cost?"
  },
  "diag_252": {
    "de": "Das ist zu teuer.",
    "lv": "It's too expensive."
  },
  "diag_253": {
    "de": "Können Sie mir ein halbes Kilo abwiegen?",
    "lv": "Can you weigh half a kilo?"
  },
  "diag_254": {
    "de": "Wie viel muss ich zahlen?",
    "lv": "How much do I have to pay?"
  },
  "diag_255": {
    "de": "Wie viel kostet das Kilo?",
    "lv": "How much does a kilogram cost?"
  },
  "diag_256": {
    "de": "Wiegen Sie mir bitte zwei Kilo ab.",
    "lv": "Please weigh two kilograms."
  },
  "diag_257": {
    "de": "Haben Sie auch Karotten?",
    "lv": "Do you have carrots too?"
  },
  "diag_258": {
    "de": "Haben Sie gutes Rindfleisch?",
    "lv": "Do you have good beef?"
  },
  "diag_259": {
    "de": "Geben Sie mir zwei Kilo Hackfleisch.",
    "lv": "Give two kilograms of minced meat."
  },
  "diag_260": {
    "de": "Ein Laib Brot, bitte, aber nicht zu knusprig.",
    "lv": "One loaf of bread, please, but not too hard."
  },
  "diag_261": {
    "de": "Das Brot ist frisch gebacken.",
    "lv": "The bread is freshly baked."
  },
  "diag_262": {
    "de": "Was für Obst haben Sie heute?",
    "lv": "What fruit do you have today?"
  },
  "diag_263": {
    "de": "Was kosten die Äpfel?",
    "lv": "How much do apples cost?"
  },
  "diag_264": {
    "de": "Dann nehme ich zwei Kilo Äpfel.",
    "lv": "Then I will take two kilograms of apples."
  },
  "diag_265": {
    "de": "Die Birnen sind sehr teuer.",
    "lv": "Pears are very expensive."
  },
  "diag_266": {
    "de": "Können Sie mir alles nach Hause liefern?",
    "lv": "Can you deliver everything to your home?"
  },
  "diag_267": {
    "de": "Haben Sie Reis?",
    "lv": "Do you have rice?"
  },
  "diag_268": {
    "de": "Geben Sie mir bitte ein Kilo Reis.",
    "lv": "Give me a kilogram of rice, please."
  },
  "diag_269": {
    "de": "Danke, diesmal nicht.",
    "lv": "Thanks, not this time."
  },
  "diag_270": {
    "de": "Wie viel kostet dieser Teppich?",
    "lv": "How much is this rug?"
  },
  "diag_271": {
    "de": "Können Sie die Möbel in meine Wohnung liefern?",
    "lv": "Can you deliver furniture to the apartment?"
  },
  "diag_272": {
    "de": "Bitte an der Kasse zahlen.",
    "lv": "Please pay at the cashier."
  },
  "diag_273": {
    "de": "Bitte, machen Sie die Rechnung.",
    "lv": "Please issue an invoice."
  },
  "diag_274": {
    "de": "Was kostet das Meter?",
    "lv": "How much does a meter cost?"
  },
  "diag_275": {
    "de": "Dieser Stoff gefällt mir.",
    "lv": "I love this fabric."
  },
  "diag_276": {
    "de": "Schneiden Sie mir bitte drei Meter ab.",
    "lv": "Please cut three meters."
  },
  "diag_277": {
    "de": "Haben Sie auch andere Muster?",
    "lv": "Do you have other samples?"
  },
  "diag_278": {
    "de": "Diese Farbe gefällt mir nicht.",
    "lv": "I don't like this colour."
  },
  "diag_279": {
    "de": "Geben Sie mir eine hellere.",
    "lv": "Give brighter."
  },
  "diag_280": {
    "de": "Was kosten diese Socken?",
    "lv": "How much are these socks?"
  },
  "diag_281": {
    "de": "Welche Handschuhe wünschen Sie?",
    "lv": "What kind of gloves do you want?"
  },
  "diag_282": {
    "de": "Die sind mir etwas zu eng.",
    "lv": "They are a little too tight for me."
  },
  "diag_283": {
    "de": "So, nun passen sie gut.",
    "lv": "So, it works fine now."
  },
  "diag_284": {
    "de": "Kannst du mir einen guten Schneider empfehlen?",
    "lv": "Can you recommend a good tailor?"
  },
  "diag_285": {
    "de": "Ich will einen Anzug bestellen.",
    "lv": "I want to order a suit."
  },
  "diag_286": {
    "de": "Wann wird er fertig sein?",
    "lv": "When will it be ready?"
  },
  "diag_287": {
    "de": "Der Anzug sitzt gut.",
    "lv": "The suit fits well."
  },
  "diag_288": {
    "de": "Die Hose ist zu lang.",
    "lv": "The pants are too long."
  },
  "diag_289": {
    "de": "Bitte reinigen und bügeln Sie ihn!",
    "lv": "Please clean and iron it!"
  },
  "diag_290": {
    "de": "Wann wird das Kleid fertig sein?",
    "lv": "When will the dress be ready?"
  },
  "diag_291": {
    "de": "Die Schuhe sind zu eng.",
    "lv": "The shoes are too tight."
  },
  "diag_292": {
    "de": "Können Sie die Schuhe heute reparieren?",
    "lv": "Can you fix your shoes today?"
  },
  "diag_293": {
    "de": "Wann kann ich die Schuhe abholen?",
    "lv": "When can I bring the shoes?"
  },
  "diag_294": {
    "de": "Meine Armbanduhr funktioniert nicht.",
    "lv": "My wristwatch is not working."
  },
  "diag_295": {
    "de": "Sie geht fünf Minuten vor.",
    "lv": "It's five minutes early."
  },
  "diag_296": {
    "de": "Bist du kurzsichtig oder weitsichtig?",
    "lv": "Are you nearsighted or farsighted?"
  },
  "diag_297": {
    "de": "Ich möchte eine Brille kaufen.",
    "lv": "I want to buy glasses."
  },
  "diag_298": {
    "de": "Können Sie meine Brille reparieren?",
    "lv": "Can you fix my glasses?"
  },
  "diag_299": {
    "de": "Das dauert nur eine Viertelstunde.",
    "lv": "It will only take fifteen minutes."
  },
  "diag_300": {
    "de": "Der Preis ist mir zu hoch.",
    "lv": "The price is too high for me."
  },
  "diag_301": {
    "de": "Ich brauche zwei Fotos für meinen Pass.",
    "lv": "I need two passport photos."
  },
  "diag_302": {
    "de": "Bitte packen Sie es ein und schicken Sie es mir nach Hause.",
    "lv": "Please pack and send home."
  },
  "diag_303": {
    "de": "Wir haben feste Preise.",
    "lv": "We have fixed prices."
  },
  "diag_304": {
    "de": "Bitte, fotografieren Sie mich.",
    "lv": "Please take a picture of me."
  },
  "diag_305": {
    "de": "Setzen Sie sich, schauen Sie gerade in die Kamera und bewegen Sie sich nicht!",
    "lv": "Sit down, look straight into the camera and don't move!"
  },
  "diag_306": {
    "de": "Wann kann ich das Probebild sehen?",
    "lv": "When can I see a sample?"
  },
  "diag_307": {
    "de": "Wann sind die Fotos fertig?",
    "lv": "When will the photos be ready?"
  },
  "diag_308": {
    "de": "Die Aufnahme ist gelungen.",
    "lv": "The photo was successful."
  },
  "diag_309": {
    "de": "Die Fotos sind gut geworden.",
    "lv": "The photos turned out well."
  },
  "diag_310": {
    "de": "Können Sie das Foto auch vergrößern?",
    "lv": "Can you also enlarge the photo?"
  },
  "diag_311": {
    "de": "Sind diese Steine echt?",
    "lv": "Are these stones real?"
  },
  "diag_312": {
    "de": "Ist das echtes Gold?",
    "lv": "Is it real gold?"
  },
  "diag_313": {
    "de": "Zeigen Sie mir bitte Trauringe.",
    "lv": "Show me the wedding rings, please."
  },
  "diag_314": {
    "de": "Der Ring ist mir etwas zu weit.",
    "lv": "The ring is a little too big for me."
  },
  "diag_315": {
    "de": "Ich kann ihn enger machen.",
    "lv": "I can narrow it down."
  },
  "diag_316": {
    "de": "Dieser Ring passt mir.",
    "lv": "This ring suits me."
  },
  "diag_317": {
    "de": "Zeigen Sie mir schöne Geschenkideen.",
    "lv": "Showcase beautiful gift ideas."
  },
  "diag_318": {
    "de": "Wie gefallen dir diese Ohrringe?",
    "lv": "How do you like these earrings?"
  },
  "diag_319": {
    "de": "Diese Brosche ist wirklich schön.",
    "lv": "This brooch is very beautiful."
  },
  "diag_320": {
    "de": "Der Stein ist ein Saphir.",
    "lv": "This stone is a sapphire."
  },
  "diag_321": {
    "de": "Das ist kein echter Stein, das ist Glas.",
    "lv": "This is not real stone, it is glass."
  },
  "diag_322": {
    "de": "Dieses Armband kann ich Ihnen besonders empfehlen.",
    "lv": "I can especially recommend this bracelet."
  },
  "diag_323": {
    "de": "Es ist besonders schön gearbeitet.",
    "lv": "It is extremely finely crafted."
  },
  "diag_324": {
    "de": "Der Preis ist nicht hoch.",
    "lv": "The price is not high."
  },
  "diag_325": {
    "de": "Bekomme ich die Schachtel gratis?",
    "lv": "Did I get the box for free?"
  },
  "diag_326": {
    "de": "Alle Schmuckstücke sind gestempelt.",
    "lv": "All jewelry is stamped."
  },
  "diag_327": {
    "de": "Falls es meiner Frau nicht gefällt, kann ich es umtauschen?",
    "lv": "If my wife doesn't like it, can I exchange it?"
  },
  "diag_328": {
    "de": "Natürlich, jederzeit.",
    "lv": "Anytime, of course."
  }
};

window.DIALOGUE_ID_MAP = DIALOGUE_ID_MAP;

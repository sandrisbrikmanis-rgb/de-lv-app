const DIALOGUE_ID_MAP = {
  "diag_001": {
    "de": "Gute Besserung!",
    "lv": "Få det godt! • Bliv rask!"
  },
  "diag_002": {
    "de": "Frohes neues Jahr!",
    "lv": "Godt nytår!"
  },
  "diag_003": {
    "de": "Herzlichen Glückwunsch zum Geburtstag!",
    "lv": "Tillykke med fødselsdagen!"
  },
  "diag_004": {
    "de": "Gute Reise!",
    "lv": "God rejse!"
  },
  "diag_005": {
    "de": "Es freut mich, Sie kennenzulernen.",
    "lv": "Jeg er glad for at møde dig."
  },
  "diag_006": {
    "de": "Wären Sie bitte so nett?",
    "lv": "Vil du venligst være så venlig?"
  },
  "diag_007": {
    "de": "Ich bin Ihnen sehr dankbar.",
    "lv": "Jeg er dig meget taknemmelig."
  },
  "diag_008": {
    "de": "Keine Ursache!",
    "lv": "Intet for ingenting!"
  },
  "diag_009": {
    "de": "Setzt euch bitte hin!",
    "lv": "Sæt dig ned, tak!"
  },
  "diag_010": {
    "de": "Ben, komm bitte an die Tafel!",
    "lv": "Ben, kom venligst til bestyrelsen!"
  },
  "diag_011": {
    "de": "Schlagt bitte die Lehrbücher auf!",
    "lv": "Åbn lærebøgerne, tak!"
  },
  "diag_012": {
    "de": "Geht bitte in die Sporthalle!",
    "lv": "Gå venligst i fitnesscenteret!"
  },
  "diag_013": {
    "de": "Schläfst du noch?",
    "lv": "Sover du stadig"
  },
  "diag_014": {
    "de": "Schlafen Sie noch?",
    "lv": "Sover du stadig?"
  },
  "diag_015": {
    "de": "Er ist fest eingeschlafen.",
    "lv": "Han sover hurtigt."
  },
  "diag_016": {
    "de": "Wecke ihn bitte auf, es ist schon spät!",
    "lv": "Væk ham venligst, det er allerede sent!"
  },
  "diag_017": {
    "de": "Guten Morgen!",
    "lv": "Godmorgen!"
  },
  "diag_018": {
    "de": "Guten Tag!",
    "lv": "Hej!"
  },
  "diag_019": {
    "de": "Gute Nacht!",
    "lv": "Godnat!"
  },
  "diag_020": {
    "de": "Entschuldigen Sie bitte!",
    "lv": "Undskyld mig, tak!"
  },
  "diag_021": {
    "de": "Es tut mir sehr leid!",
    "lv": "Jeg er så ked af det!"
  },
  "diag_022": {
    "de": "Vielen Dank!",
    "lv": "Mange tak!"
  },
  "diag_023": {
    "de": "Finn, fang bitte an!",
    "lv": "Finn, start, tak!"
  },
  "diag_024": {
    "de": "Lest bitte mit!",
    "lv": "Læs venligst videre!"
  },
  "diag_025": {
    "de": "Emma, schau bitte nicht aus dem Fenster!",
    "lv": "Emma, ​​kig venligst ikke ud af vinduet!"
  },
  "diag_026": {
    "de": "Jonas, bring bitte die Hefte!",
    "lv": "Jonas, tag venligst notesbøgerne med!"
  },
  "diag_027": {
    "de": "Geh bitte zurück an deinen Platz!",
    "lv": "Gå tilbage til dit sted!"
  },
  "diag_028": {
    "de": "Wie viel Uhr ist es?",
    "lv": "Hvad er klokken?"
  },
  "diag_029": {
    "de": "Es ist halb acht.",
    "lv": "Klokken er halv otte."
  },
  "diag_030": {
    "de": "Wann wachst du gewöhnlich auf?",
    "lv": "Hvornår plejer du at vågne?"
  },
  "diag_031": {
    "de": "Ich stehe gleich auf.",
    "lv": "Jeg rejser mig med det samme."
  },
  "diag_032": {
    "de": "Steh auf, Hanna, es klingelt!",
    "lv": "Rejs dig op, Hannah, klokken ringer!"
  },
  "diag_033": {
    "de": "Lass mich noch fünf Minuten schlafen!",
    "lv": "Lad mig sove i fem minutter mere!"
  },
  "diag_034": {
    "de": "Vergiss nicht, das Zimmer zu lüften!",
    "lv": "Glem ikke at ventilere rummet!"
  },
  "diag_035": {
    "de": "Wo ist das Handtuch?",
    "lv": "Hvor er håndklædet"
  },
  "diag_036": {
    "de": "Ich möchte mir die Zähne putzen.",
    "lv": "Jeg vil gerne børste mine tænder."
  },
  "diag_037": {
    "de": "Mit was putzt du dir die Zähne?",
    "lv": "Hvad børster du tænder med?"
  },
  "diag_038": {
    "de": "Ich möchte mich anziehen.",
    "lv": "Jeg vil gerne klædes på."
  },
  "diag_039": {
    "de": "Zieh dich bitte schnell an!",
    "lv": "Klæd dig hurtigt på, tak!"
  },
  "diag_040": {
    "de": "Kleide dich wärmer an, draußen ist es kühl.",
    "lv": "Klæd dig varmt på, det er koldt udenfor."
  },
  "diag_041": {
    "de": "Guten Morgen, wie geht es dir?",
    "lv": "Godmorgen, hvordan har du det?"
  },
  "diag_042": {
    "de": "Mir geht es gut, danke.",
    "lv": "Jeg har det godt, tak."
  },
  "diag_043": {
    "de": "Was gibt es Neues?",
    "lv": "Hvad er nyt?"
  },
  "diag_044": {
    "de": "Auf Wiedersehen!",
    "lv": "Farvel!"
  },
  "diag_045": {
    "de": "Was für ein Chaos hier!",
    "lv": "Hvilket rod det er her!"
  },
  "diag_046": {
    "de": "Darf ich beim Aufräumen helfen?",
    "lv": "Må jeg hjælpe med at rydde op?"
  },
  "diag_047": {
    "de": "Was trinkst du morgens, Kaffee oder Tee?",
    "lv": "Hvad drikker du om morgenen, kaffe eller te?"
  },
  "diag_048": {
    "de": "Gewöhnlich trinke ich morgens eine Tasse Kaffee.",
    "lv": "Jeg plejer at drikke en kop kaffe om morgenen."
  },
  "diag_049": {
    "de": "Am liebsten trinke ich schwarzen Kaffee.",
    "lv": "Jeg drikker bedst sort kaffe."
  },
  "diag_050": {
    "de": "Guten Morgen, hast du gut geschlafen?",
    "lv": "Godmorgen, sov du godt?"
  },
  "diag_051": {
    "de": "Ich bin noch sehr müde.",
    "lv": "Jeg er stadig meget træt."
  },
  "diag_052": {
    "de": "Willst du Kaffee oder Milch?",
    "lv": "Vil du have kaffe eller mælk?"
  },
  "diag_053": {
    "de": "Gib mir bitte ein Brötchen mit Käse.",
    "lv": "Giv mig en ostebolle, tak."
  },
  "diag_054": {
    "de": "Ich muss jetzt los!",
    "lv": "Jeg er nødt til at gå nu!"
  },
  "diag_055": {
    "de": "Vergiss dein Frühstück nicht!",
    "lv": "Glem ikke morgenmad!"
  },
  "diag_056": {
    "de": "Klara, deck bitte den Tisch!",
    "lv": "Clara, vær venlig at dække bordet!"
  },
  "diag_057": {
    "de": "Vergiss die Servietten nicht!",
    "lv": "Glem ikke servietterne!"
  },
  "diag_058": {
    "de": "Wann esst ihr zu Mittag?",
    "lv": "Hvornår spiser du frokost"
  },
  "diag_059": {
    "de": "Es ist Zeit zu essen.",
    "lv": "Det er tid til at spise."
  },
  "diag_060": {
    "de": "Was gibt es heute zu Mittag?",
    "lv": "Hvad skal der til frokost i dag?"
  },
  "diag_061": {
    "de": "Wie schmeckt dir die Suppe?",
    "lv": "Hvordan kan du lide suppen?"
  },
  "diag_062": {
    "de": "Ehrlich gesagt ist sie etwas zu salzig.",
    "lv": "Helt ærligt, det er en anelse for salt."
  },
  "diag_063": {
    "de": "Darf ich dir ein Stück Brot geben?",
    "lv": "Må jeg give dig en skive brød?"
  },
  "diag_064": {
    "de": "Danke, ich habe schon.",
    "lv": "Tak, det har jeg allerede."
  },
  "diag_065": {
    "de": "Das Fleisch schmeckt ausgezeichnet.",
    "lv": "Kødet smager fantastisk."
  },
  "diag_066": {
    "de": "Danke, ich bin schon satt.",
    "lv": "Tak, jeg er allerede mæt."
  },
  "diag_067": {
    "de": "Heute haben wir Besuch.",
    "lv": "I dag har vi besøg."
  },
  "diag_068": {
    "de": "Bist du heute Abend frei?",
    "lv": "Har du fri i aften"
  },
  "diag_069": {
    "de": "Komm doch heute zum Mittagessen vorbei!",
    "lv": "Kom og besøg til frokost i dag!"
  },
  "diag_070": {
    "de": "Setzen wir uns an den Tisch.",
    "lv": "Lad os sætte os ved bordet."
  },
  "diag_071": {
    "de": "Bitte, bedien dich!",
    "lv": "Spis så meget som du vil!"
  },
  "diag_072": {
    "de": "Stört dich das Rauchen?",
    "lv": "Generer rygning dig?"
  },
  "diag_073": {
    "de": "Danke für die nette Aufnahme!",
    "lv": "Tak for den varme velkomst!"
  },
  "diag_074": {
    "de": "Wann gehst du ins Bett?",
    "lv": "Hvornår går du i seng"
  },
  "diag_075": {
    "de": "Wenn ich von der Arbeit komme, bin ich immer müde.",
    "lv": "Jeg er altid træt, når jeg kommer hjem fra arbejde."
  },
  "diag_076": {
    "de": "Es ist Zeit, ins Bett zu gehen.",
    "lv": "Det er tid til at gå i seng."
  },
  "diag_077": {
    "de": "Es ist schönes Wetter.",
    "lv": "Det er en dejlig tid."
  },
  "diag_078": {
    "de": "Willst du mit mir spazieren gehen?",
    "lv": "Vil du gå med mig?"
  },
  "diag_079": {
    "de": "Sieh mal, es wird gleich regnen.",
    "lv": "Se, det vil snart regne."
  },
  "diag_080": {
    "de": "Nimm den Regenschirm mit!",
    "lv": "Tag en paraply med!"
  },
  "diag_081": {
    "de": "Es regnet.",
    "lv": "Det regner."
  },
  "diag_082": {
    "de": "Ich bin schon ganz nass.",
    "lv": "Jeg er allerede helt våd."
  },
  "diag_083": {
    "de": "Glaubst du, dass es den ganzen Tag regnen wird?",
    "lv": "Tror du, det kommer til at regne hele dagen?"
  },
  "diag_084": {
    "de": "Es hört auf zu regnen.",
    "lv": "Regnen stopper."
  },
  "diag_085": {
    "de": "Die Sonne scheint wieder.",
    "lv": "Solen skinner igen."
  },
  "diag_086": {
    "de": "Es ist sehr warm.",
    "lv": "Det er meget varmt."
  },
  "diag_087": {
    "de": "Es sieht nach Regen aus.",
    "lv": "Det ser ud til, at det kommer til at regne."
  },
  "diag_088": {
    "de": "Wir bekommen gleich ein Gewitter.",
    "lv": "Vi er ved at få en storm."
  },
  "diag_089": {
    "de": "Das Gewitter zieht vorüber.",
    "lv": "Stormen er forbi."
  },
  "diag_090": {
    "de": "Die Wolken verziehen sich.",
    "lv": "Skyerne spreder sig."
  },
  "diag_091": {
    "de": "Siehst du den Regenbogen?",
    "lv": "Ser du regnbuen?"
  },
  "diag_092": {
    "de": "Der Winter ist da, es hat geschneit.",
    "lv": "Vinteren er her, det sneede om natten."
  },
  "diag_093": {
    "de": "Es schneit.",
    "lv": "Det sner."
  },
  "diag_094": {
    "de": "Wie schön ist es im Wald im Winter!",
    "lv": "Hvor er det smukt i skoven om vinteren!"
  },
  "diag_095": {
    "de": "Mir ist kalt, ich friere.",
    "lv": "Jeg er kold, jeg fryser."
  },
  "diag_096": {
    "de": "Draußen ist Glatteis, pass auf!",
    "lv": "Det er glat udenfor, pas på!"
  },
  "diag_097": {
    "de": "Wollen wir auf die Eisbahn gehen?",
    "lv": "Skal vi stå på skøjter?"
  },
  "diag_098": {
    "de": "Zieh die Jacke an, du kannst dich erkälten.",
    "lv": "Tag en jakke på, du kan blive forkølet."
  },
  "diag_099": {
    "de": "Wie spät ist es?",
    "lv": "Hvad er klokken"
  },
  "diag_100": {
    "de": "Es ist halb sieben.",
    "lv": "Klokken er halv otte."
  },
  "diag_101": {
    "de": "Meine Uhr geht fünf Minuten vor.",
    "lv": "Mit ur er hurtigt fem minutter."
  },
  "diag_102": {
    "de": "Weck mich morgen früh um sieben Uhr!",
    "lv": "Væk mig klokken syv i morgen!"
  },
  "diag_103": {
    "de": "Was ist heute für ein Datum?",
    "lv": "Hvad er datoen i dag?"
  },
  "diag_104": {
    "de": "Heute ist der elfte Juli.",
    "lv": "I dag er det den ellevte juli."
  },
  "diag_105": {
    "de": "Was machst du gewöhnlich am Abend?",
    "lv": "Hvad plejer du at lave om aftenen?"
  },
  "diag_106": {
    "de": "Es ist schon lange her, dass wir uns gesehen haben.",
    "lv": "Vi har ikke mødt hinanden i lang tid."
  },
  "diag_107": {
    "de": "Wie geht es dir?",
    "lv": "Hvordan har du det"
  },
  "diag_108": {
    "de": "Entschuldige, ich möchte etwas mit dir besprechen.",
    "lv": "Undskyld mig, jeg vil diskutere noget med dig."
  },
  "diag_109": {
    "de": "Gehen wir spazieren!",
    "lv": "Lad os gå en tur!"
  },
  "diag_110": {
    "de": "Hast du Lust, mit mir in den Park zu gehen?",
    "lv": "Vil du med mig i parken?"
  },
  "diag_111": {
    "de": "Ich komme, um dich zum Spaziergang abzuholen.",
    "lv": "Jeg kom for at tage dig en tur."
  },
  "diag_112": {
    "de": "Geh bitte etwas langsamer, ich kann dir nicht folgen!",
    "lv": "Gå lidt langsommere, jeg kan ikke følge med dig!"
  },
  "diag_113": {
    "de": "Ich bin zum ersten Mal in dieser Gegend.",
    "lv": "Jeg er her for første gang."
  },
  "diag_114": {
    "de": "Ruhen wir uns ein wenig aus.",
    "lv": "Lad os hvile lidt."
  },
  "diag_115": {
    "de": "Jetzt können wir zurückgehen.",
    "lv": "Nu kan vi gå tilbage."
  },
  "diag_116": {
    "de": "Ehrlich gesagt bin ich ziemlich müde.",
    "lv": "Helt ærligt, jeg er ret træt."
  },
  "diag_117": {
    "de": "Entschuldige, wo ist die nächste U-Bahn-Station?",
    "lv": "Undskyld mig, hvor er den nærmeste metrostation?"
  },
  "diag_118": {
    "de": "Welcher ist der kürzeste Weg?",
    "lv": "Hvilken er den korteste vej?"
  },
  "diag_119": {
    "de": "Geh hier die zweite Straße links und dann immer geradeaus.",
    "lv": "Her tager du den anden gade til venstre og går ligeud."
  },
  "diag_120": {
    "de": "Wie komme ich am schnellsten zum Bahnhof?",
    "lv": "Hvordan kommer man hurtigere til stationen?"
  },
  "diag_121": {
    "de": "Ich habe vor, morgen zu verreisen.",
    "lv": "Jeg har tænkt mig at tage afsted i morgen."
  },
  "diag_122": {
    "de": "Wohin willst du fahren?",
    "lv": "Hvor vil du hen?"
  },
  "diag_123": {
    "de": "Reist du geschäftlich oder privat?",
    "lv": "Rejser du for arbejde eller fritid?"
  },
  "diag_124": {
    "de": "Finn fährt bis Berlin mit, dann geht er ans Meer.",
    "lv": "Finn kører til Berlin, så skal han til havet."
  },
  "diag_125": {
    "de": "Wann fährt das Schiff ab?",
    "lv": "Hvornår afgår skibet?"
  },
  "diag_126": {
    "de": "In einer halben Stunde.",
    "lv": "Efter en halv time."
  },
  "diag_127": {
    "de": "Kann ich noch eine Kabine bekommen?",
    "lv": "Kan jeg stadig få en hytte?"
  },
  "diag_128": {
    "de": "Vergiss deinen Pass nicht!",
    "lv": "Glem ikke dit pas!"
  },
  "diag_129": {
    "de": "Es ist Zeit, den Koffer zu packen.",
    "lv": "Det er tid til at pakke kufferten."
  },
  "diag_130": {
    "de": "Der Zug fährt um halb sieben ab.",
    "lv": "Toget går klokken halv otte."
  },
  "diag_131": {
    "de": "Hol mir bitte ein Taxi, ich verpasse sonst den Zug!",
    "lv": "Ring til en taxa, ellers går jeg glip af toget!"
  },
  "diag_132": {
    "de": "Fahr bitte zum Bahnhof!",
    "lv": "Tag mig venligst til stationen!"
  },
  "diag_133": {
    "de": "Ich muss mich beeilen.",
    "lv": "Jeg skal skynde mig."
  },
  "diag_134": {
    "de": "Ist der Schalter schon offen?",
    "lv": "Er billetkontoret åbent endnu?"
  },
  "diag_135": {
    "de": "Eine Fahrkarte nach Köln, bitte.",
    "lv": "En billet til Köln, tak."
  },
  "diag_136": {
    "de": "Wann fährt der Zug ab?",
    "lv": "Hvornår kører toget?"
  },
  "diag_137": {
    "de": "Der Zug fährt gleich ab.",
    "lv": "Toget kører snart."
  },
  "diag_138": {
    "de": "Muss ich in Koblenz umsteigen?",
    "lv": "Skal jeg skifte plads i Koblenz?"
  },
  "diag_139": {
    "de": "Ja, dort musst du umsteigen.",
    "lv": "Ja, du skal skifte plads der."
  },
  "diag_140": {
    "de": "Ist dieser Platz frei?",
    "lv": "Er dette sted ledigt?"
  },
  "diag_141": {
    "de": "Nein, hier sitzt niemand.",
    "lv": "Nej, her sidder ingen."
  },
  "diag_142": {
    "de": "Wo ist der Bahnsteigkartenautomat?",
    "lv": "Hvor er platformsbilletautomaten?"
  },
  "diag_143": {
    "de": "Stell mein Handgepäck ins Gepäcknetz.",
    "lv": "Læg min håndbagage i nettet."
  },
  "diag_144": {
    "de": "Kann ich das Fenster aufmachen?",
    "lv": "Må jeg åbne vinduet?"
  },
  "diag_145": {
    "de": "Es zieht, schließ bitte das Fenster!",
    "lv": "Træk igennem, luk venligst vinduet!"
  },
  "diag_146": {
    "de": "Welche ist die nächste Station?",
    "lv": "Hvad er næste stop?"
  },
  "diag_147": {
    "de": "Wie lange hält der Zug?",
    "lv": "Hvor længe står toget?"
  },
  "diag_148": {
    "de": "Wo muss ich umsteigen?",
    "lv": "Hvor skal jeg overføre?"
  },
  "diag_149": {
    "de": "Der Zug hat Verspätung.",
    "lv": "Toget er forsinket."
  },
  "diag_150": {
    "de": "Dieser Wagen ist für Nichtraucher.",
    "lv": "Denne vogn er ikke-ryger."
  },
  "diag_151": {
    "de": "Wir fahren jetzt über die Grenze.",
    "lv": "Nu kører vi over grænsen."
  },
  "diag_152": {
    "de": "Hast du etwas zu verzollen?",
    "lv": "Har du noget at rydde op?"
  },
  "diag_153": {
    "de": "Wir sind in Berlin angekommen.",
    "lv": "Vi er ankommet til Berlin."
  },
  "diag_154": {
    "de": "Kannst du mir ein gutes Hotel empfehlen?",
    "lv": "Kan du anbefale et godt hotel?"
  },
  "diag_155": {
    "de": "Haben Sie freie Zimmer?",
    "lv": "Har du nogle ledige værelser?"
  },
  "diag_156": {
    "de": "Ein Zimmer mit zwei Betten, bitte.",
    "lv": "Et værelse med to senge, tak."
  },
  "diag_157": {
    "de": "Was kostet das Zimmer pro Nacht?",
    "lv": "Hvor meget koster værelset per nat?"
  },
  "diag_158": {
    "de": "Morgen reise ich ab. Weck mich um sieben Uhr!",
    "lv": "Jeg tager afsted i morgen. Væk mig klokken syv!"
  },
  "diag_159": {
    "de": "Die Rechnung, bitte!",
    "lv": "Bill, tak!"
  },
  "diag_160": {
    "de": "Wo ist die Stadtbibliothek?",
    "lv": "Hvor er byens bibliotek?"
  },
  "diag_161": {
    "de": "Wann hat das Museum geöffnet?",
    "lv": "Hvornår er museet åbent?"
  },
  "diag_162": {
    "de": "Wollen wir ins Museum gehen?",
    "lv": "Skal vi gå på museum?"
  },
  "diag_163": {
    "de": "Fahren wir mit dem Bus oder der U-Bahn?",
    "lv": "Skal vi med bus eller metro?"
  },
  "diag_164": {
    "de": "Wo ist die nächste Bushaltestelle?",
    "lv": "Hvor er det nærmeste busstoppested?"
  },
  "diag_165": {
    "de": "Ich habe großen Hunger.",
    "lv": "Jeg er meget sulten."
  },
  "diag_166": {
    "de": "Gehen wir zusammen essen?",
    "lv": "Skal vi spise sammen?"
  },
  "diag_167": {
    "de": "Kellner, die Speisekarte, bitte!",
    "lv": "Tjener, menu, tak!"
  },
  "diag_168": {
    "de": "Ist der Fisch frisch?",
    "lv": "Er fisken frisk?"
  },
  "diag_169": {
    "de": "Das schmeckt ausgezeichnet!",
    "lv": "Det smager fantastisk!"
  },
  "diag_170": {
    "de": "Kellner, zahlen bitte!",
    "lv": "Tjener, betal venligst!"
  },
  "diag_171": {
    "de": "Was kostet das?",
    "lv": "Hvor meget koster det?"
  },
  "diag_172": {
    "de": "Ich gehe ins Café einen Kaffee trinken.",
    "lv": "Jeg vil gå på cafe for at drikke kaffe."
  },
  "diag_173": {
    "de": "Willst du mitkommen?",
    "lv": "Vil du med?"
  },
  "diag_174": {
    "de": "Eine Tasse Kaffee mit Milch, bitte!",
    "lv": "En kop kaffe med mælk, tak!"
  },
  "diag_175": {
    "de": "Bitte schneller, ich habe es eilig!",
    "lv": "Hurtigere tak, jeg skal skynde mig!"
  },
  "diag_176": {
    "de": "Lass deinen Kaffee nicht kalt werden!",
    "lv": "Lad ikke kaffen blive kold!"
  },
  "diag_177": {
    "de": "Haben Sie etwas Erfrischendes?",
    "lv": "Har du noget forfriskende?"
  },
  "diag_178": {
    "de": "Eine Portion Eis, bitte!",
    "lv": "En portion is, tak!"
  },
  "diag_179": {
    "de": "Heute Morgen habe ich einen Brief bekommen.",
    "lv": "Jeg modtog et brev i morges."
  },
  "diag_180": {
    "de": "Ich muss ihm gleich schreiben.",
    "lv": "Jeg må skrive til ham nu."
  },
  "diag_181": {
    "de": "Wo ist der nächste Briefkasten?",
    "lv": "Hvor er den nærmeste postkasse?"
  },
  "diag_182": {
    "de": "Wo ist die Post?",
    "lv": "Hvor er posthuset?"
  },
  "diag_183": {
    "de": "Erinnere mich morgen daran zu schreiben!",
    "lv": "Mind mig om at skrive under i morgen!"
  },
  "diag_184": {
    "de": "Werfen Sie bitte diesen Brief in den Briefkasten.",
    "lv": "Send venligst dette brev i postkassen!"
  },
  "diag_185": {
    "de": "Hallo, hier spricht Emma.",
    "lv": "Hej, det er Emma."
  },
  "diag_186": {
    "de": "Kann ich dich später anrufen?",
    "lv": "Kan jeg ringe til dig senere"
  },
  "diag_187": {
    "de": "Muss ich lange warten?",
    "lv": "Skal jeg vente længe?"
  },
  "diag_188": {
    "de": "Bitte schneiden Sie mir die Haare.",
    "lv": "Klip venligst mit hår."
  },
  "diag_189": {
    "de": "Hinten bitte nicht zu kurz.",
    "lv": "I ryggen, tak, ikke for kort."
  },
  "diag_190": {
    "de": "Wann beginnt die Vorstellung?",
    "lv": "Hvornår starter showet?"
  },
  "diag_191": {
    "de": "Es fängt um halb acht an.",
    "lv": "Det starter klokken halv ni."
  },
  "diag_192": {
    "de": "Alle Plätze sind ausverkauft.",
    "lv": "Alle billetter er udsolgt."
  },
  "diag_193": {
    "de": "Drei Karten, bitte!",
    "lv": "Tre billetter, tak!"
  },
  "diag_194": {
    "de": "Wir lassen die Jacken in der Garderobe.",
    "lv": "Lad os lade jakkerne blive i garderoben."
  },
  "diag_195": {
    "de": "Bitte schnell, der Vorhang geht gleich auf!",
    "lv": "Hurtigere tak, gardinet er ved at åbne sig!"
  },
  "diag_196": {
    "de": "Der Vorhang fällt.",
    "lv": "Gardinet falder."
  },
  "diag_197": {
    "de": "Darf ich dich zum Tanz bitten?",
    "lv": "Må jeg bede dig om at danse?"
  },
  "diag_198": {
    "de": "Wann ist eure Hochzeit?",
    "lv": "Hvornår er jeres bryllup?"
  },
  "diag_199": {
    "de": "Ich suche eine Wohnung.",
    "lv": "Jeg leder efter en lejlighed."
  },
  "diag_200": {
    "de": "Ist in diesem Haus eine Wohnung frei?",
    "lv": "Er der en ledig lejlighed i dette hus?"
  },
  "diag_201": {
    "de": "Wie viel kostet die Miete?",
    "lv": "Hvor meget er huslejen?"
  },
  "diag_202": {
    "de": "Die Wohnung hat drei Zimmer und eine Küche.",
    "lv": "Lejligheden har tre værelser og køkken."
  },
  "diag_203": {
    "de": "Heute ziehen wir um.",
    "lv": "Vi flytter i dag."
  },
  "diag_204": {
    "de": "Mia, pack die Sachen bitte in Kisten!",
    "lv": "Mia, læg tingene i kasser, tak!"
  },
  "diag_205": {
    "de": "Hast du alles eingepackt?",
    "lv": "Er alt allerede pakket ind?"
  },
  "diag_206": {
    "de": "Ich stehe mit meinem Freund in Kontakt.",
    "lv": "Jeg er i korrespondance med min ven."
  },
  "diag_207": {
    "de": "Gehen wir ins Theater?",
    "lv": "Skal vi gå i teatret?"
  },
  "diag_208": {
    "de": "Ist alles eingeladen?",
    "lv": "Er alt indlæst?"
  },
  "diag_209": {
    "de": "Welch schöne Aussicht!",
    "lv": "Hvilken smuk udsigt!"
  },
  "diag_210": {
    "de": "Nun können wir alles wieder aufräumen.",
    "lv": "Nu kan vi samle det hele igen."
  },
  "diag_211": {
    "de": "Wie viele Zimmer habt ihr?",
    "lv": "Hvor mange rum har du?"
  },
  "diag_212": {
    "de": "Im Sommer fahre ich ans Meer.",
    "lv": "Jeg tager til havet om sommeren."
  },
  "diag_213": {
    "de": "Kannst du schwimmen?",
    "lv": "Kan du svømme"
  },
  "diag_214": {
    "de": "Schwimm nicht zu weit hinaus!",
    "lv": "Svøm ikke for langt!"
  },
  "diag_215": {
    "de": "Badest du jeden Tag?",
    "lv": "Svømmer du hver dag?"
  },
  "diag_216": {
    "de": "Bei schönem Wetter gehe ich angeln.",
    "lv": "Hvis vejret er godt, tager jeg ud og fiske."
  },
  "diag_217": {
    "de": "Wie sieht er aus?",
    "lv": "Hvordan ser han ud?"
  },
  "diag_218": {
    "de": "Er hat sich aber recht verändert.",
    "lv": "Han har dog ændret sig en del."
  },
  "diag_219": {
    "de": "Wie ist er als Mensch?",
    "lv": "Hvordan er han som person?"
  },
  "diag_220": {
    "de": "Er ist immer nett und freundlich.",
    "lv": "Han er altid sød og venlig."
  },
  "diag_221": {
    "de": "Ich fühle mich nicht wohl.",
    "lv": "Jeg har det dårligt."
  },
  "diag_222": {
    "de": "Was fehlt dir?",
    "lv": "Hvad er der galt med dig?"
  },
  "diag_223": {
    "de": "Ich habe starke Kopfschmerzen.",
    "lv": "Jeg har en voldsom hovedpine."
  },
  "diag_224": {
    "de": "Ich habe mich erkältet.",
    "lv": "Jeg er forkølet."
  },
  "diag_225": {
    "de": "Ich habe Schnupfen.",
    "lv": "Jeg har en løbende næse."
  },
  "diag_226": {
    "de": "Mir ist schwindlig.",
    "lv": "Jeg er svimmel."
  },
  "diag_227": {
    "de": "Ich muss zum Arzt gehen.",
    "lv": "Jeg er nødt til at gå til lægen."
  },
  "diag_228": {
    "de": "Leg dich ins Bett!",
    "lv": "Læg dig i sengen!"
  },
  "diag_229": {
    "de": "Hast du Fieber?",
    "lv": "Har du feber?"
  },
  "diag_230": {
    "de": "Gestern hatte ich erhöhte Temperatur.",
    "lv": "Jeg havde høj temperatur i går."
  },
  "diag_231": {
    "de": "Ich habe Zahnschmerzen.",
    "lv": "Jeg har tandpine."
  },
  "diag_232": {
    "de": "Ich muss zum Zahnarzt gehen.",
    "lv": "Jeg skal til tandlægen."
  },
  "diag_233": {
    "de": "Weißt du, dass Finn krank ist?",
    "lv": "Ved du, at Finn er syg?"
  },
  "diag_234": {
    "de": "Laut Arzt wird er bald wieder gesund.",
    "lv": "Ifølge lægen bliver han snart rask igen."
  },
  "diag_235": {
    "de": "Ich will meine Wohnung neu möblieren.",
    "lv": "Jeg vil gerne ommøblere lejligheden."
  },
  "diag_236": {
    "de": "Kann ich das auf Raten kaufen?",
    "lv": "Kan jeg købe på afbetaling?"
  },
  "diag_237": {
    "de": "Bleib im Bett, bis es dir besser geht!",
    "lv": "Bliv i sengen, indtil du har det bedre!"
  },
  "diag_238": {
    "de": "Noah hat in zwei Wochen schwimmen gelernt.",
    "lv": "Noah lærte at svømme på to uger."
  },
  "diag_239": {
    "de": "Sei mit dem Essen noch vorsichtig.",
    "lv": "Vær forsigtig med mad."
  },
  "diag_240": {
    "de": "Sprichst du Deutsch?",
    "lv": "Taler du tysk"
  },
  "diag_241": {
    "de": "Ja, ein bisschen.",
    "lv": "Ja, lidt."
  },
  "diag_242": {
    "de": "Du sprichst ziemlich fließend.",
    "lv": "Du taler ret flydende."
  },
  "diag_243": {
    "de": "Wo hast du Deutsch gelernt?",
    "lv": "Hvor lærte du tysk?"
  },
  "diag_244": {
    "de": "Ich nehme seit einem Jahr Deutschstunden.",
    "lv": "Jeg har taget tyskundervisning i et år."
  },
  "diag_245": {
    "de": "Ich suche immer Gelegenheit, Deutsch zu sprechen.",
    "lv": "Altid på udkig efter en mulighed for at tale tysk."
  },
  "diag_246": {
    "de": "Ist das Buch noch vorrätig?",
    "lv": "Er denne bog stadig tilgængelig?"
  },
  "diag_247": {
    "de": "Das Buch ist leider ausverkauft.",
    "lv": "Bogen er desværre udsolgt."
  },
  "diag_248": {
    "de": "Wann erscheint die neue Auflage?",
    "lv": "Hvornår udkommer den nye udgave?"
  },
  "diag_249": {
    "de": "Womit kann ich Ihnen helfen?",
    "lv": "Hvordan kan jeg hjælpe?"
  },
  "diag_250": {
    "de": "Haben Sie ganz frische Eier?",
    "lv": "Har du friske æg?"
  },
  "diag_251": {
    "de": "Was kosten die?",
    "lv": "Hvor meget koster de?"
  },
  "diag_252": {
    "de": "Das ist zu teuer.",
    "lv": "Det er for dyrt."
  },
  "diag_253": {
    "de": "Können Sie mir ein halbes Kilo abwiegen?",
    "lv": "Kan du veje et halvt kilo?"
  },
  "diag_254": {
    "de": "Wie viel muss ich zahlen?",
    "lv": "Hvor meget skal jeg betale?"
  },
  "diag_255": {
    "de": "Wie viel kostet das Kilo?",
    "lv": "Hvor meget koster et kilo?"
  },
  "diag_256": {
    "de": "Wiegen Sie mir bitte zwei Kilo ab.",
    "lv": "Vej venligst to kilo."
  },
  "diag_257": {
    "de": "Haben Sie auch Karotten?",
    "lv": "Har du også gulerødder?"
  },
  "diag_258": {
    "de": "Haben Sie gutes Rindfleisch?",
    "lv": "Har du godt oksekød?"
  },
  "diag_259": {
    "de": "Geben Sie mir zwei Kilo Hackfleisch.",
    "lv": "Giv to kilo hakket kød."
  },
  "diag_260": {
    "de": "Ein Laib Brot, bitte, aber nicht zu knusprig.",
    "lv": "Et brød, tak, men ikke for hårdt."
  },
  "diag_261": {
    "de": "Das Brot ist frisch gebacken.",
    "lv": "Brødet er nybagt."
  },
  "diag_262": {
    "de": "Was für Obst haben Sie heute?",
    "lv": "Hvilken frugt har du i dag?"
  },
  "diag_263": {
    "de": "Was kosten die Äpfel?",
    "lv": "Hvor meget koster æbler?"
  },
  "diag_264": {
    "de": "Dann nehme ich zwei Kilo Äpfel.",
    "lv": "Så tager jeg to kilo æbler."
  },
  "diag_265": {
    "de": "Die Birnen sind sehr teuer.",
    "lv": "Pærer er meget dyre."
  },
  "diag_266": {
    "de": "Können Sie mir alles nach Hause liefern?",
    "lv": "Kan du levere alt hjem til dig?"
  },
  "diag_267": {
    "de": "Haben Sie Reis?",
    "lv": "Har du ris?"
  },
  "diag_268": {
    "de": "Geben Sie mir bitte ein Kilo Reis.",
    "lv": "Giv mig et kilo ris, tak."
  },
  "diag_269": {
    "de": "Danke, diesmal nicht.",
    "lv": "Tak, ikke denne gang."
  },
  "diag_270": {
    "de": "Wie viel kostet dieser Teppich?",
    "lv": "Hvor meget koster dette tæppe?"
  },
  "diag_271": {
    "de": "Können Sie die Möbel in meine Wohnung liefern?",
    "lv": "Kan du levere møbler til lejligheden?"
  },
  "diag_272": {
    "de": "Bitte an der Kasse zahlen.",
    "lv": "Betal venligst i kassen."
  },
  "diag_273": {
    "de": "Bitte, machen Sie die Rechnung.",
    "lv": "Udsted venligst en faktura."
  },
  "diag_274": {
    "de": "Was kostet das Meter?",
    "lv": "Hvor meget koster en måler?"
  },
  "diag_275": {
    "de": "Dieser Stoff gefällt mir.",
    "lv": "Jeg elsker dette stof."
  },
  "diag_276": {
    "de": "Schneiden Sie mir bitte drei Meter ab.",
    "lv": "Klip venligst tre meter."
  },
  "diag_277": {
    "de": "Haben Sie auch andere Muster?",
    "lv": "Har du andre prøver?"
  },
  "diag_278": {
    "de": "Diese Farbe gefällt mir nicht.",
    "lv": "Jeg kan ikke lide denne farve."
  },
  "diag_279": {
    "de": "Geben Sie mir eine hellere.",
    "lv": "Giv lysere."
  },
  "diag_280": {
    "de": "Was kosten diese Socken?",
    "lv": "Hvor meget koster disse sokker?"
  },
  "diag_281": {
    "de": "Welche Handschuhe wünschen Sie?",
    "lv": "Hvilken slags handsker vil du have?"
  },
  "diag_282": {
    "de": "Die sind mir etwas zu eng.",
    "lv": "De er lidt for stramme til mig."
  },
  "diag_283": {
    "de": "So, nun passen sie gut.",
    "lv": "Så det fungerer fint nu."
  },
  "diag_284": {
    "de": "Kannst du mir einen guten Schneider empfehlen?",
    "lv": "Kan du anbefale en god skrædder?"
  },
  "diag_285": {
    "de": "Ich will einen Anzug bestellen.",
    "lv": "Jeg vil bestille et jakkesæt."
  },
  "diag_286": {
    "de": "Wann wird er fertig sein?",
    "lv": "Hvornår vil den være klar?"
  },
  "diag_287": {
    "de": "Der Anzug sitzt gut.",
    "lv": "Dragten sidder godt."
  },
  "diag_288": {
    "de": "Die Hose ist zu lang.",
    "lv": "Bukserne er for lange."
  },
  "diag_289": {
    "de": "Bitte reinigen und bügeln Sie ihn!",
    "lv": "Rengør og stryg det!"
  },
  "diag_290": {
    "de": "Wann wird das Kleid fertig sein?",
    "lv": "Hvornår er kjolen klar?"
  },
  "diag_291": {
    "de": "Die Schuhe sind zu eng.",
    "lv": "Skoene er for stramme."
  },
  "diag_292": {
    "de": "Können Sie die Schuhe heute reparieren?",
    "lv": "Kan du ordne dine sko i dag?"
  },
  "diag_293": {
    "de": "Wann kann ich die Schuhe abholen?",
    "lv": "Hvornår kan jeg medbringe skoene?"
  },
  "diag_294": {
    "de": "Meine Armbanduhr funktioniert nicht.",
    "lv": "Mit armbåndsur virker ikke."
  },
  "diag_295": {
    "de": "Sie geht fünf Minuten vor.",
    "lv": "Det er fem minutter for tidligt."
  },
  "diag_296": {
    "de": "Bist du kurzsichtig oder weitsichtig?",
    "lv": "Er du nærsynet eller langsynet?"
  },
  "diag_297": {
    "de": "Ich möchte eine Brille kaufen.",
    "lv": "Jeg vil gerne købe briller."
  },
  "diag_298": {
    "de": "Können Sie meine Brille reparieren?",
    "lv": "Kan du ordne mine briller?"
  },
  "diag_299": {
    "de": "Das dauert nur eine Viertelstunde.",
    "lv": "Det vil kun tage femten minutter."
  },
  "diag_300": {
    "de": "Der Preis ist mir zu hoch.",
    "lv": "Prisen er for høj for mig."
  },
  "diag_301": {
    "de": "Ich brauche zwei Fotos für meinen Pass.",
    "lv": "Jeg skal bruge to pasbilleder."
  },
  "diag_302": {
    "de": "Bitte packen Sie es ein und schicken Sie es mir nach Hause.",
    "lv": "Pak venligst og send hjem."
  },
  "diag_303": {
    "de": "Wir haben feste Preise.",
    "lv": "Vi har faste priser."
  },
  "diag_304": {
    "de": "Bitte, fotografieren Sie mich.",
    "lv": "Tag venligst et billede af mig."
  },
  "diag_305": {
    "de": "Setzen Sie sich, schauen Sie gerade in die Kamera und bewegen Sie sich nicht!",
    "lv": "Sæt dig ned, kig direkte ind i kameraet og bevæg dig ikke!"
  },
  "diag_306": {
    "de": "Wann kann ich das Probebild sehen?",
    "lv": "Hvornår kan jeg se en prøve?"
  },
  "diag_307": {
    "de": "Wann sind die Fotos fertig?",
    "lv": "Hvornår er billederne klar?"
  },
  "diag_308": {
    "de": "Die Aufnahme ist gelungen.",
    "lv": "Billedet var vellykket."
  },
  "diag_309": {
    "de": "Die Fotos sind gut geworden.",
    "lv": "Billederne blev godt."
  },
  "diag_310": {
    "de": "Können Sie das Foto auch vergrößern?",
    "lv": "Kan du også forstørre billedet?"
  },
  "diag_311": {
    "de": "Sind diese Steine echt?",
    "lv": "Er disse sten ægte?"
  },
  "diag_312": {
    "de": "Ist das echtes Gold?",
    "lv": "Er det ægte guld?"
  },
  "diag_313": {
    "de": "Zeigen Sie mir bitte Trauringe.",
    "lv": "Vis mig vielsesringene, tak."
  },
  "diag_314": {
    "de": "Der Ring ist mir etwas zu weit.",
    "lv": "Ringen er lidt for stor til mig."
  },
  "diag_315": {
    "de": "Ich kann ihn enger machen.",
    "lv": "Jeg kan indsnævre det."
  },
  "diag_316": {
    "de": "Dieser Ring passt mir.",
    "lv": "Denne ring passer til mig."
  },
  "diag_317": {
    "de": "Zeigen Sie mir schöne Geschenkideen.",
    "lv": "Fremvis smukke gaveideer."
  },
  "diag_318": {
    "de": "Wie gefallen dir diese Ohrringe?",
    "lv": "Hvordan kan du lide disse øreringe?"
  },
  "diag_319": {
    "de": "Diese Brosche ist wirklich schön.",
    "lv": "Denne broche er meget smuk."
  },
  "diag_320": {
    "de": "Der Stein ist ein Saphir.",
    "lv": "Denne sten er en safir."
  },
  "diag_321": {
    "de": "Das ist kein echter Stein, das ist Glas.",
    "lv": "Dette er ikke ægte sten, det er glas."
  },
  "diag_322": {
    "de": "Dieses Armband kann ich Ihnen besonders empfehlen.",
    "lv": "Jeg kan især anbefale dette armbånd."
  },
  "diag_323": {
    "de": "Es ist besonders schön gearbeitet.",
    "lv": "Det er ekstremt fint udformet."
  },
  "diag_324": {
    "de": "Der Preis ist nicht hoch.",
    "lv": "Prisen er ikke høj."
  },
  "diag_325": {
    "de": "Bekomme ich die Schachtel gratis?",
    "lv": "Fik jeg kassen gratis?"
  },
  "diag_326": {
    "de": "Alle Schmuckstücke sind gestempelt.",
    "lv": "Alle smykker er stemplet."
  },
  "diag_327": {
    "de": "Falls es meiner Frau nicht gefällt, kann ich es umtauschen?",
    "lv": "Hvis min kone ikke kan lide det, kan jeg så bytte det?"
  },
  "diag_328": {
    "de": "Natürlich, jederzeit.",
    "lv": "Når som helst, selvfølgelig."
  }
};

window.DIALOGUE_ID_MAP = DIALOGUE_ID_MAP;

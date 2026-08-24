const SENTENCE_ENTRIES = [
  {
    "de": "Hüte dich davor!",
    "lv": "Hoia end selle eest!",
    "level": "Sätze"
  },
  {
    "de": "Wenn nichts dazwischenkommt.",
    "lv": "Kui miski ei sega.",
    "level": "Sätze"
  },
  {
    "de": "Das kann ich mir denken!",
    "lv": "Seda ma juba tean!",
    "level": "Sätze"
  },
  {
    "de": "Ist er denn krank?",
    "lv": "Kas ta siis on haige?",
    "level": "Sätze"
  },
  {
    "de": "Was denn?",
    "lv": "Mis siis?",
    "level": "Sätze"
  },
  {
    "de": "Desto mehr.",
    "lv": "Seda enam.",
    "level": "Sätze"
  },
  {
    "de": "Je mehr, desto besser.",
    "lv": "Mida rohkem, seda parem.",
    "level": "Sätze"
  },
  {
    "de": "Alles deutet auf Regen.",
    "lv": "Kõik viitab vihmale.",
    "level": "Sätze"
  },
  {
    "de": "Damit ist mir wenig gedient.",
    "lv": "Sellest on mulle vähe kasu.",
    "level": "Sätze"
  },
  {
    "de": "Er ist dienstlich verhindert.",
    "lv": "Ta ei saa tulla teenistuskohustuste tõttu.",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie doch!",
    "lv": "Rääkige juba!",
    "level": "Sätze"
  },
  {
    "de": "Es donnert.",
    "lv": "Müristab.",
    "level": "Sätze"
  },
  {
    "de": "Doppelt so groß.",
    "lv": "Kaks korda suurem.",
    "level": "Sätze"
  },
  {
    "de": "Von dort.",
    "lv": "Sealt.",
    "level": "Sätze"
  },
  {
    "de": "Die Zeit drängt.",
    "lv": "Aeg surub tagant.",
    "level": "Sätze"
  },
  {
    "de": "Ihn drücken Sorgen.",
    "lv": "Teda rõhuvad mured.",
    "level": "Sätze"
  },
  {
    "de": "Hast du das Buch durchgearbeitet?",
    "lv": "Kas sa oled raamatu hoolikalt läbi töötanud?",
    "level": "Sätze"
  },
  {
    "de": "Kein Durchgang!",
    "lv": "Läbipääs suletud!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich Sie bitten?",
    "lv": "Kas ma tohin teid paluda?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin durstig.",
    "lv": "Mul on janu.",
    "level": "Sätze"
  },
  {
    "de": "Eben das meine ich.",
    "lv": "Just seda ma mõtlengi.",
    "level": "Sätze"
  },
  {
    "de": "Es ist ganz egal.",
    "lv": "See on täiesti ükskõik.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie eigentlich?",
    "lv": "Mida te õigupoolest tahate?",
    "level": "Sätze"
  },
  {
    "de": "Eilt es mit dieser Sache?",
    "lv": "Kas see asi on kiireloomuline?",
    "level": "Sätze"
  },
  {
    "de": "Eilt sehr!",
    "lv": "Väga kiire!",
    "level": "Sätze"
  },
  {
    "de": "Ich habe es eilig.",
    "lv": "Mul on kiire.",
    "level": "Sätze"
  },
  {
    "de": "Du bildest dir nur ein, krank zu sein.",
    "lv": "Sa ainult kujutled, et oled haige.",
    "level": "Sätze"
  },
  {
    "de": "Was fällt dir ein?",
    "lv": "Kuidas sa julged?",
    "level": "Sätze"
  },
  {
    "de": "Es war einmal.",
    "lv": "Elas kord.",
    "level": "Sätze"
  },
  {
    "de": "Steigen Sie bitte ein!",
    "lv": "Palun astuge peale!",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie ein!",
    "lv": "Palun tulge sisse!",
    "level": "Sätze"
  },
  {
    "de": "Einzelnes hat mir dort gefallen.",
    "lv": "Mõned asjad meeldisid mulle seal.",
    "level": "Sätze"
  },
  {
    "de": "Es empfiehlt sich.",
    "lv": "On soovitatav.",
    "level": "Sätze"
  },
  {
    "de": "Diese Flasche enthält Essig.",
    "lv": "Selles pudelis on äädikas.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldigen Sie bitte!",
    "lv": "Vabandage, palun!",
    "level": "Sätze"
  },
  {
    "de": "Entweder... oder...",
    "lv": "Kas... või...",
    "level": "Sätze"
  },
  {
    "de": "Wer war der Erste?",
    "lv": "Kes oli esimene?",
    "level": "Sätze"
  },
  {
    "de": "Wer fehlt heute?",
    "lv": "Kes täna puudub?",
    "level": "Sätze"
  },
  {
    "de": "Was fehlt dir?",
    "lv": "Mis sul viga on?",
    "level": "Sätze"
  },
  {
    "de": "Wie heißen Sie?",
    "lv": "Mis on teie nimi?",
    "level": "Sätze"
  },
  {
    "de": "Was soll das heißen?",
    "lv": "Mida see tähendab?",
    "level": "Sätze"
  },
  {
    "de": "Bitte treten Sie näher heran!",
    "lv": "Palun tulge lähemale!",
    "level": "Sätze"
  },
  {
    "de": "Heraus mit der Sprache!",
    "lv": "Räägi ära!",
    "level": "Sätze"
  },
  {
    "de": "im Herbst",
    "lv": "sügisel",
    "level": "Sätze"
  },
  {
    "de": "Meine Herrschaften!",
    "lv": "Daamid ja härrad!",
    "level": "Sätze"
  },
  {
    "de": "von heute an",
    "lv": "alates tänasest",
    "level": "Sätze"
  },
  {
    "de": "heute früh",
    "lv": "täna hommikul",
    "level": "Sätze"
  },
  {
    "de": "heute Nacht",
    "lv": "täna öösel",
    "level": "Sätze"
  },
  {
    "de": "Zu Hilfe!",
    "lv": "Appi!",
    "level": "Sätze"
  },
  {
    "de": "Ich lerne jeden Tag Deutsch.",
    "lv": "Ma õpin iga päev saksa keelt.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das bitte wiederholen?",
    "lv": "Kas sa saad seda palun korrata?",
    "level": "Sätze"
  },
  {
    "de": "Wir treffen uns am Bahnhof.",
    "lv": "Me kohtume raudteejaamas.",
    "level": "Sätze"
  },
  {
    "de": "Ich stimme dir teilweise zu.",
    "lv": "Ma olen sinuga osaliselt nõus.",
    "level": "Sätze"
  },
  {
    "de": "Diese Entscheidung hat weitreichende Folgen.",
    "lv": "Sellel otsusel on kaugeleulatuvad tagajärjed.",
    "level": "Sätze"
  },
  {
    "de": "Man sollte mehrere Perspektiven berücksichtigen.",
    "lv": "Tuleks arvestada mitme vaatenurgaga.",
    "level": "Sätze"
  },
  {
    "de": "Könnten Sie das näher erläutern?",
    "lv": "Kas te võiksite seda täpsemalt selgitada?",
    "level": "Sätze"
  },
  {
    "de": "Was mich anbelangt,...",
    "lv": "Mis minusse puutub,...",
    "level": "Sätze"
  },
  {
    "de": "Wie alt sind Sie?",
    "lv": "Kui vana te olete?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zwanzig Jahre alt.",
    "lv": "Ma olen kakskümmend aastat vana.",
    "level": "Sätze"
  },
  {
    "de": "Von heute an.",
    "lv": "Alates tänasest.",
    "level": "Sätze"
  },
  {
    "de": "Von jetzt an.",
    "lv": "Nüüdsest.",
    "level": "Sätze"
  },
  {
    "de": "Anders geht es nicht.",
    "lv": "Teisiti ei saa.",
    "level": "Sätze"
  },
  {
    "de": "Rufen Sie mich an.",
    "lv": "Helistage mulle.",
    "level": "Sätze"
  },
  {
    "de": "Bitte stellen Sie das Radio ab.",
    "lv": "Palun lülitage raadio välja.",
    "level": "Sätze"
  },
  {
    "de": "Achte bitte auf den Verkehr.",
    "lv": "Palun pööra tähelepanu liiklusele.",
    "level": "Sätze"
  },
  {
    "de": "Darauf musst du achten.",
    "lv": "Sellele pead sa tähelepanu pöörama.",
    "level": "Sätze"
  },
  {
    "de": "Heute mache ich es anders.",
    "lv": "Täna teen ma seda teisiti.",
    "level": "Sätze"
  },
  {
    "de": "Wir warten auf den Bus.",
    "lv": "Me ootame bussi.",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt allein.",
    "lv": "Ta elab üksi.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Ausbildung absolviert.",
    "lv": "Ma läbisin väljaõppe.",
    "level": "Sätze"
  },
  {
    "de": "Ich warte den Regen ab.",
    "lv": "Ma ootan ära, kuni vihm lakkab.",
    "level": "Sätze"
  },
  {
    "de": "Er arbeitet in der Verkaufsabteilung.",
    "lv": "Ta töötab müügiosakonnas.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin allergisch gegen Katzen.",
    "lv": "Mul on allergia kasside vastu.",
    "level": "Sätze"
  },
  {
    "de": "Andererseits verstehe ich ihn.",
    "lv": "Teisest küljest ma saan temast aru.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Situation analysiert.",
    "lv": "Ma analüüsisin olukorda.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat meinen Vorschlag akzeptiert.",
    "lv": "Ta võttis vastu minu ettepaneku.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte das genauer analysieren.",
    "lv": "Ma soovin seda täpsemalt analüüsida.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte den Vertrag ändern.",
    "lv": "Ma soovin lepingut muuta.",
    "level": "Sätze"
  },
  {
    "de": "Er ändert ständig seine Meinung.",
    "lv": "Ta muudab pidevalt oma arvamust.",
    "level": "Sätze"
  },
  {
    "de": "Ähnliche Probleme hatten wir schon früher.",
    "lv": "Sarnaseid probleeme oli meil juba varem.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ahnung!",
    "lv": "Pole aimugi!",
    "level": "Sätze"
  },
  {
    "de": "Hör auf zu jammern.",
    "lv": "Lõpeta virisemine.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Kleid ist akademisch gekleidet.",
    "lv": "See kleit on stiilselt konservatiivne.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre gerne Akkordeonmusik.",
    "lv": "Mulle meeldib kuulata akordionimuusikat.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das Gerät anklicken?",
    "lv": "Kas sa saad seadmel klõpsata?",
    "level": "Sätze"
  },
  {
    "de": "Bitte öffne die Datei und klicke darauf.",
    "lv": "Palun ava fail ja klõpsa sellel.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe einen Unfall gehabt.",
    "lv": "Sattusin õnnetusse.",
    "level": "Sätze"
  },
  {
    "de": "Wir laufen zum Bahnhof.",
    "lv": "Me läheme jaama.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schalte den Fernseher an.",
    "lv": "Palun lülita televiisor sisse.",
    "level": "Sätze"
  },
  {
    "de": "Mein Computer ist abgestürzt.",
    "lv": "Minu arvuti jooksis kokku.",
    "level": "Sätze"
  },
  {
    "de": "Am Wochenende gehe ich angeln.",
    "lv": "Nädalavahetusel lähen ma kalale.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe den Anruf verpasst.",
    "lv": "Ma jäin kõnest ilma.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mich später anrufen?",
    "lv": "Kas sa saad mulle hiljem helistada?",
    "level": "Sätze"
  },
  {
    "de": "Bitte nimm meinen Vorschlag an.",
    "lv": "Palun võta mu ettepanek vastu.",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme dein Angebot an.",
    "lv": "Ma võtan su pakkumise vastu.",
    "level": "Sätze"
  },
  {
    "de": "Er nahm die Einladung an.",
    "lv": "Ta võttis kutse vastu.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Angst vor Spinnen.",
    "lv": "Mul on hirm ämblike ees.",
    "level": "Sätze"
  },
  {
    "de": "Keine Angst, alles wird gut.",
    "lv": "Ära karda, kõik saab korda.",
    "level": "Sätze"
  },
  {
    "de": "Anklang finden.",
    "lv": "Leida vastukaja.",
    "level": "Sätze"
  },
  {
    "de": "Es kommt darauf an.",
    "lv": "See sõltub sellest.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Anlass.",
    "lv": "Sel puhul.",
    "level": "Sätze"
  },
  {
    "de": "Nehmen wir an, dass...",
    "lv": "Oletame, et...",
    "level": "Sätze"
  },
  {
    "de": "Was hast du da angerichtet?",
    "lv": "Mida sa seal oled korda saatnud?",
    "level": "Sätze"
  },
  {
    "de": "Bis ans Ende.",
    "lv": "Lõpuni.",
    "level": "Sätze"
  },
  {
    "de": "Du glaubst mir anscheinend nicht.",
    "lv": "Näib, et sa ei usu mind.",
    "level": "Sätze"
  },
  {
    "de": "Meiner Ansicht nach...",
    "lv": "Minu arvates...",
    "level": "Sätze"
  },
  {
    "de": "Stell dich nicht so an!",
    "lv": "Ära tee numbrit!",
    "level": "Sätze"
  },
  {
    "de": "An die Arbeit gehen.",
    "lv": "Asuda tööle.",
    "level": "Sätze"
  },
  {
    "de": "Außer Atem sein.",
    "lv": "Olla hingetu.",
    "level": "Sätze"
  },
  {
    "de": "Guten Appetit!",
    "lv": "Head isu!",
    "level": "Sätze"
  },
  {
    "de": "In einem Atemzug.",
    "lv": "Ühe hingetõmbega.",
    "level": "Sätze"
  },
  {
    "de": "Auf jeden Fall.",
    "lv": "Igal juhul.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal war alles still.",
    "lv": "Järsku jäi kõik vaikseks.",
    "level": "Sätze"
  },
  {
    "de": "Bitte mach die Tür auf!",
    "lv": "Ava palun uks!",
    "level": "Sätze"
  },
  {
    "de": "Er hat den Kredit aufgenommen.",
    "lv": "Ta võttis laenu.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen heute aufräumen.",
    "lv": "Meil tuleb täna ruum korda teha.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre jetzt auf.",
    "lv": "Ma lõpetan nüüd.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schon auf.",
    "lv": "Ta on juba üleval.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen das Treffen verschieben.",
    "lv": "Meil tuleb kohtumine edasi lükata.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat mich aufgeregt.",
    "lv": "Ta ärritas mind.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal.",
    "lv": "Järsku.",
    "level": "Sätze"
  },
  {
    "de": "Auf der Stelle.",
    "lv": "Viivitamatult.",
    "level": "Sätze"
  },
  {
    "de": "Für den Schaden aufkommen.",
    "lv": "Katta tekitatud kahju.",
    "level": "Sätze"
  },
  {
    "de": "Bitte die Tür auf!",
    "lv": "Ava palun uks!",
    "level": "Sätze"
  },
  {
    "de": "Aufrecht sitzen.",
    "lv": "Istuda sirgelt.",
    "level": "Sätze"
  },
  {
    "de": "Er ist auf.",
    "lv": "Ta on üleval.",
    "level": "Sätze"
  },
  {
    "de": "Alle Kräfte aufwenden.",
    "lv": "Rakendada kõiki jõude.",
    "level": "Sätze"
  },
  {
    "de": "Viel Mühe aufwenden.",
    "lv": "Palju vaeva nägema.",
    "level": "Sätze"
  },
  {
    "de": "Geh mir aus den Augen!",
    "lv": "Kao mu silmist!",
    "level": "Sätze"
  },
  {
    "de": "Unter vier Augen.",
    "lv": "Kahekesi.",
    "level": "Sätze"
  },
  {
    "de": "Aus Mangel an Zeit.",
    "lv": "Ajapuuduse tõttu.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Grunde.",
    "lv": "Sel põhjusel.",
    "level": "Sätze"
  },
  {
    "de": "Alle außer dir.",
    "lv": "Kõik peale sinu.",
    "level": "Sätze"
  },
  {
    "de": "Auf Äußerlichkeiten Wert legen.",
    "lv": "Panna rõhku välimusele.",
    "level": "Sätze"
  },
  {
    "de": "Im äußersten Fall.",
    "lv": "Äärmisel juhul.",
    "level": "Sätze"
  },
  {
    "de": "Äußerst wichtig.",
    "lv": "Äärmiselt tähtis.",
    "level": "Sätze"
  },
  {
    "de": "Aussicht auf die See.",
    "lv": "Vaade merele.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gute Aussichten.",
    "lv": "Tal on head väljavaated.",
    "level": "Sätze"
  },
  {
    "de": "Wie wird dieses Wort ausgesprochen?",
    "lv": "Kuidas seda sõna hääldatakse?",
    "level": "Sätze"
  },
  {
    "de": "Sein Beileid aussprechen.",
    "lv": "Avaldada kaastunnet.",
    "level": "Sätze"
  },
  {
    "de": "Wann wurden die Meisterschaftskämpfe ausgetragen?",
    "lv": "Millal toimusid meistrivõistlused?",
    "level": "Sätze"
  },
  {
    "de": "Welchen Beruf üben Sie aus?",
    "lv": "Milline on teie amet?",
    "level": "Sätze"
  },
  {
    "de": "Einfluss ausüben.",
    "lv": "Mõjutada.",
    "level": "Sätze"
  },
  {
    "de": "Auswärts essen.",
    "lv": "Süüa väljas.",
    "level": "Sätze"
  },
  {
    "de": "Per Bahn.",
    "lv": "Rongiga.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Bahn.",
    "lv": "Rongiga.",
    "level": "Sätze"
  },
  {
    "de": "Möglichst bald.",
    "lv": "Nii pea kui võimalik.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist Angst und bange.",
    "lv": "Ma kardan väga.",
    "level": "Sätze"
  },
  {
    "de": "Auf die lange Bank schieben.",
    "lv": "Edasi lükata.",
    "level": "Sätze"
  },
  {
    "de": "Bar zahlen.",
    "lv": "Maksta sularahas.",
    "level": "Sätze"
  },
  {
    "de": "Erz bauen.",
    "lv": "Maaki kaevandada.",
    "level": "Sätze"
  },
  {
    "de": "Mist bauen.",
    "lv": "Untsu keerata.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin beauftragt.",
    "lv": "Mulle on antud ülesanne.",
    "level": "Sätze"
  },
  {
    "de": "Nach Bedarf.",
    "lv": "Vastavalt vajadusele.",
    "level": "Sätze"
  },
  {
    "de": "Ich bedauere ihn.",
    "lv": "Mul on temast kahju.",
    "level": "Sätze"
  },
  {
    "de": "Was bedeutet dieses Wort?",
    "lv": "Mida see sõna tähendab?",
    "level": "Sätze"
  },
  {
    "de": "Unter der Bedingung, dass...",
    "lv": "Tingimusel, et...",
    "level": "Sätze"
  },
  {
    "de": "Sie sieht bedrückt aus.",
    "lv": "Ta näeb rusutud välja.",
    "level": "Sätze"
  },
  {
    "de": "Hinweise befolgen.",
    "lv": "Järgida juhiseid.",
    "level": "Sätze"
  },
  {
    "de": "Befehle befolgen.",
    "lv": "Täita käske.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Post befördern.",
    "lv": "Saata posti teel.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin begierig zu wissen.",
    "lv": "Soovin väga teada saada.",
    "level": "Sätze"
  },
  {
    "de": "Zu Beginn.",
    "lv": "Alguses.",
    "level": "Sätze"
  },
  {
    "de": "Am Beginn.",
    "lv": "Alguses.",
    "level": "Sätze"
  },
  {
    "de": "Bei Beginn.",
    "lv": "Alguses.",
    "level": "Sätze"
  },
  {
    "de": "In Begleitung.",
    "lv": "Seltsis.",
    "level": "Sätze"
  },
  {
    "de": "Mit seiner Begleitung.",
    "lv": "Tema kaaslasega.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schwer von Begriff.",
    "lv": "Ta taipab aeglaselt.",
    "level": "Sätze"
  },
  {
    "de": "Im Gedächtnis behalten.",
    "lv": "Meelde jätta.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tisch.",
    "lv": "Laua ääres.",
    "level": "Sätze"
  },
  {
    "de": "Bei Sinnen sein.",
    "lv": "Olla täie mõistuse juures.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tage.",
    "lv": "Päevasel ajal.",
    "level": "Sätze"
  },
  {
    "de": "Bei weitem nicht so.",
    "lv": "Kaugeltki mitte nii.",
    "level": "Sätze"
  },
  {
    "de": "Alle beide.",
    "lv": "Mõlemad.",
    "level": "Sätze"
  },
  {
    "de": "Stürmischer Beifall brach los.",
    "lv": "Kõlas tormiline aplaus.",
    "level": "Sätze"
  },
  {
    "de": "Beifall finden.",
    "lv": "Leida heakskiitu.",
    "level": "Sätze"
  },
  {
    "de": "Beileid aussprechen.",
    "lv": "Avaldada kaastunnet.",
    "level": "Sätze"
  },
  {
    "de": "Auf eigenen Beinen stehen.",
    "lv": "Olla rahaliselt iseseisev.",
    "level": "Sätze"
  },
  {
    "de": "Zum Beispiel.",
    "lv": "Näiteks.",
    "level": "Sätze"
  },
  {
    "de": "Beistand leisten.",
    "lv": "Osutada abi.",
    "level": "Sätze"
  },
  {
    "de": "Beitrag leisten.",
    "lv": "Anda oma panus.",
    "level": "Sätze"
  },
  {
    "de": "Jemandes Bekanntschaft machen.",
    "lv": "Kellegagi tuttavaks saada.",
    "level": "Sätze"
  },
  {
    "de": "Bekanntschaft anknüpfen.",
    "lv": "Tuttavaks saada.",
    "level": "Sätze"
  },
  {
    "de": "Belegte Brötchen.",
    "lv": "Kattega võileivad.",
    "level": "Sätze"
  },
  {
    "de": "Nach Ihrem Belieben.",
    "lv": "Nagu te soovite.",
    "level": "Sätze"
  },
  {
    "de": "Zu jeder beliebigen Zeit.",
    "lv": "Igal ajal.",
    "level": "Sätze"
  },
  {
    "de": "Schweigen beobachten.",
    "lv": "Hoida vaikust.",
    "level": "Sätze"
  },
  {
    "de": "Zur Bequemlichkeit.",
    "lv": "Mugavuse mõttes.",
    "level": "Sätze"
  },
  {
    "de": "Bereit sein.",
    "lv": "Olla valmis.",
    "level": "Sätze"
  },
  {
    "de": "Unfallopfer bergen.",
    "lv": "Päästa õnnetuses kannatanuid.",
    "level": "Sätze"
  },
  {
    "de": "Bericht erstatten.",
    "lv": "Teatada.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind besetzt.",
    "lv": "Kõik kohad on hõivatud.",
    "level": "Sätze"
  },
  {
    "de": "Neue Besen kehren gut.",
    "lv": "Uued luuad pühivad hästi.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt ein Haus.",
    "lv": "Talle kuulub maja.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt viel Mut.",
    "lv": "Tal on suur julgus.",
    "level": "Sätze"
  },
  {
    "de": "Desto besser.",
    "lv": "Seda parem.",
    "level": "Sätze"
  },
  {
    "de": "Gute Besserung!",
    "lv": "Paranege!",
    "level": "Sätze"
  },
  {
    "de": "Beim besten Willen.",
    "lv": "Kui väga ka ei tahaks.",
    "level": "Sätze"
  },
  {
    "de": "Am besten.",
    "lv": "Kõige paremini.",
    "level": "Sätze"
  },
  {
    "de": "Es besteht Zweifel.",
    "lv": "On kahtlusi.",
    "level": "Sätze"
  },
  {
    "de": "Seine Aufgabe besteht darin...",
    "lv": "Tema ülesanne seisneb...",
    "level": "Sätze"
  },
  {
    "de": "Grüße bestellen.",
    "lv": "Tervitusi edastada.",
    "level": "Sätze"
  },
  {
    "de": "Ganz bestimmt.",
    "lv": "Kindlasti.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch kommen.",
    "lv": "Külla tulla.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch sein.",
    "lv": "Külas olla.",
    "level": "Sätze"
  },
  {
    "de": "Oft Konzerte besuchen.",
    "lv": "Sageli kontsertidel käia.",
    "level": "Sätze"
  },
  {
    "de": "Welche Schule hat er besucht?",
    "lv": "Millises koolis ta õppis?",
    "level": "Sätze"
  },
  {
    "de": "In Betracht ziehen.",
    "lv": "Arvesse võtta.",
    "level": "Sätze"
  },
  {
    "de": "Außer Betracht lassen.",
    "lv": "Mitte arvesse võtta.",
    "level": "Sätze"
  },
  {
    "de": "Er betreibt ein Hotel.",
    "lv": "Ta juhib hotelli.",
    "level": "Sätze"
  },
  {
    "de": "Alle beiden.",
    "lv": "Mõlemad.",
    "level": "Sätze"
  },
  {
    "de": "Alles bezahlen.",
    "lv": "Maksta kõik ära.",
    "level": "Sätze"
  },
  {
    "de": "Bezüglich auf etwas.",
    "lv": "Millegi suhtes.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön.",
    "lv": "Palun.",
    "level": "Sätze"
  },
  {
    "de": "Wie bitte?",
    "lv": "Kuidas, palun?",
    "level": "Sätze"
  },
  {
    "de": "Bitte sehr.",
    "lv": "Palun.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe eine Bitte an Sie.",
    "lv": "Mul on teile palve.",
    "level": "Sätze"
  },
  {
    "de": "Trompete blasen.",
    "lv": "Puhuda trompetit.",
    "level": "Sätze"
  },
  {
    "de": "In einem Buch blättern.",
    "lv": "Lehitseda raamatut.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßen Füßen.",
    "lv": "Paljajalu.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßem Auge.",
    "lv": "Palja silmaga.",
    "level": "Sätze"
  },
  {
    "de": "Danke für die Blumen!",
    "lv": "Aitäh komplimendi eest!",
    "level": "Sätze"
  },
  {
    "de": "Alles in Butter.",
    "lv": "Kõik korras.",
    "level": "Sätze"
  },
  {
    "de": "Bitte checken.",
    "lv": "Kontrollida.",
    "level": "Sätze"
  },
  {
    "de": "Da ist er!",
    "lv": "Seal ta on!",
    "level": "Sätze"
  },
  {
    "de": "Alles spricht dafür.",
    "lv": "Kõik räägib selle kasuks.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann nichts dafür.",
    "lv": "Ma ei saa selle vastu midagi teha.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin dagegen.",
    "lv": "Ma olen selle vastu.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe nichts dagegen.",
    "lv": "Mul ei ole selle vastu midagi.",
    "level": "Sätze"
  },
  {
    "de": "Von daheim.",
    "lv": "Kodust.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Dame ziehen.",
    "lv": "Käia lipuga.",
    "level": "Sätze"
  },
  {
    "de": "Es dämmert.",
    "lv": "Hakkab hämarduma.",
    "level": "Sätze"
  },
  {
    "de": "Danke schön!",
    "lv": "Aitäh!",
    "level": "Sätze"
  },
  {
    "de": "Dann und wann.",
    "lv": "Aeg-ajalt.",
    "level": "Sätze"
  },
  {
    "de": "Darauf kannst du dich verlassen.",
    "lv": "Selle peale võid sa kindel olla.",
    "level": "Sätze"
  },
  {
    "de": "Daraus wird nichts.",
    "lv": "Sellest ei tule midagi välja.",
    "level": "Sätze"
  },
  {
    "de": "So dass...",
    "lv": "Nii et...",
    "level": "Sätze"
  },
  {
    "de": "Für wen halten Sie mich?",
    "lv": "Kelleks te mind peate?",
    "level": "Sätze"
  },
  {
    "de": "Hände weg!",
    "lv": "Käed eemale!",
    "level": "Sätze"
  },
  {
    "de": "Lass den Kopf nicht hängen!",
    "lv": "Ära lase pead norgu!",
    "level": "Sätze"
  },
  {
    "de": "zu Hause",
    "lv": "kodus",
    "level": "Sätze"
  },
  {
    "de": "nach Hause gehen",
    "lv": "koju minema",
    "level": "Sätze"
  },
  {
    "de": "von Haus aus",
    "lv": "loomu poolest",
    "level": "Sätze"
  },
  {
    "de": "Meinen herzlichsten Glückwunsch!",
    "lv": "Südamlikud õnnitlused!",
    "level": "Sätze"
  },
  {
    "de": "Seien Sie so gut!",
    "lv": "Olge nii lahke!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie die Güte!",
    "lv": "Olge nii lahke!",
    "level": "Sätze"
  },
  {
    "de": "Was hast du?",
    "lv": "Mis sul viga on?",
    "level": "Sätze"
  },
  {
    "de": "Gestatten Sie bitte!",
    "lv": "Lubage, palun!",
    "level": "Sätze"
  },
  {
    "de": "Ist es gestattet zu rauchen?",
    "lv": "Kas tohib suitsetada?",
    "level": "Sätze"
  },
  {
    "de": "Ich muss gestehen, dass...",
    "lv": "Pean tunnistama, et...",
    "level": "Sätze"
  },
  {
    "de": "gestern früh",
    "lv": "eile vara hommikul",
    "level": "Sätze"
  },
  {
    "de": "gestern Abend",
    "lv": "eile õhtul",
    "level": "Sätze"
  },
  {
    "de": "Es ist mir gleichgültig, ob...",
    "lv": "Mulle on ükskõik, kas...",
    "level": "Sätze"
  },
  {
    "de": "Was ist geschehen?",
    "lv": "Mis on juhtunud?",
    "level": "Sätze"
  },
  {
    "de": "Mach keine Geschichten!",
    "lv": "Ära aja jama!",
    "level": "Sätze"
  },
  {
    "de": "Geschweige denn...",
    "lv": "Rääkimata sellest.",
    "level": "Sätze"
  },
  {
    "de": "Gehen Sie geradeaus!",
    "lv": "Minge otse edasi!",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es Ihnen?",
    "lv": "Kuidas teil läheb?",
    "level": "Sätze"
  },
  {
    "de": "Frag ihn gelegentlich, ob...",
    "lv": "Küsi temalt aeg-ajalt, kas...",
    "level": "Sätze"
  },
  {
    "de": "morgen früh",
    "lv": "homme hommikul",
    "level": "Sätze"
  },
  {
    "de": "im Frühling",
    "lv": "kevadel",
    "level": "Sätze"
  },
  {
    "de": "Was gibt’s Neues?",
    "lv": "Mis uudist?",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Brief folgt, dass...",
    "lv": "Sellest kirjast selgub, et...",
    "level": "Sätze"
  },
  {
    "de": "Fahre fort!",
    "lv": "Jätka!",
    "level": "Sätze"
  },
  {
    "de": "Er ist kein Freund von...",
    "lv": "Talle ei meeldi...",
    "level": "Sätze"
  },
  {
    "de": "Es erwies sich, dass...",
    "lv": "Selgus, et...",
    "level": "Sätze"
  },
  {
    "de": "Gedenkst du meiner?",
    "lv": "Kas sa mind mäletad?",
    "level": "Sätze"
  },
  {
    "de": "im Winter",
    "lv": "talvel",
    "level": "Sätze"
  },
  {
    "de": "Welcher Jahrgang sind Sie?",
    "lv": "Mis aastal te olete sündinud?",
    "level": "Sätze"
  },
  {
    "de": "Es jammert mich zu sehen...",
    "lv": "Mul on valus näha...",
    "level": "Sätze"
  },
  {
    "de": "je mehr, desto besser",
    "lv": "mida rohkem, seda parem",
    "level": "Sätze"
  },
  {
    "de": "bis jetzt",
    "lv": "praeguse hetkeni",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich zum Bahnhof?",
    "lv": "Kuidas jaama jõuab?",
    "level": "Sätze"
  },
  {
    "de": "Komm her!",
    "lv": "Tule siia!",
    "level": "Sätze"
  },
  {
    "de": "Könnte ich Frau N. sprechen?",
    "lv": "Kas ma saaksin rääkida proua N-iga?",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das?",
    "lv": "Kui palju see maksab?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange dauert die Vorstellung?",
    "lv": "Kui kaua etendus kestab?",
    "level": "Sätze"
  },
  {
    "de": "Lass das!",
    "lv": "Lõpeta!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich in Ruhe!",
    "lv": "Jäta mind rahule!",
    "level": "Sätze"
  },
  {
    "de": "Lassen Sie mich Ihnen helfen!",
    "lv": "Lubage mul teid aidata!",
    "level": "Sätze"
  },
  {
    "de": "Lasst uns gehen!",
    "lv": "Lähme!",
    "level": "Sätze"
  },
  {
    "de": "Na, wie läufts?",
    "lv": "Kuidas läheb?",
    "level": "Sätze"
  },
  {
    "de": "Es lebe!",
    "lv": "Elagu!",
    "level": "Sätze"
  },
  {
    "de": "Leben Sie wohl!",
    "lv": "Elage õnnelikult!",
    "level": "Sätze"
  },
  {
    "de": "Was ist los?",
    "lv": "Mis lahti on?",
    "level": "Sätze"
  },
  {
    "de": "Der Job ist anstrengend.",
    "lv": "Töö on väsitav.",
    "level": "Sätze"
  },
  {
    "de": "Das war ein anstrengender Tag.",
    "lv": "See oli kurnav päev.",
    "level": "Sätze"
  },
  {
    "de": "Deutsch lernen kann anstrengend sein.",
    "lv": "Saksa keele õppimine võib olla väsitav.",
    "level": "Sätze"
  },
  {
    "de": "Er verlangt eine Erklärung.",
    "lv": "Ta nõuab selgitust.",
    "level": "Sätze"
  },
  {
    "de": "Der Verkäufer verlangt zu viel Geld.",
    "lv": "Müüja küsib liiga palju raha.",
    "level": "Sätze"
  },
  {
    "de": "Das Gesetz verlangt es so.",
    "lv": "Seadus nõuab seda nii.",
    "level": "Sätze"
  },
  {
    "de": "Das ist gar nicht so schwer.",
    "lv": "See ei ole sugugi nii raske.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe gar kein Geld.",
    "lv": "Mul ei ole üldse raha.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gar nichts gesagt.",
    "lv": "Ta ei öelnud üldse midagi.",
    "level": "Sätze"
  },
  {
    "de": "Der Hund ist los.",
    "lv": "Koer on lahti.",
    "level": "Sätze"
  },
  {
    "de": "Hier ist viel los.",
    "lv": "Siin toimub palju.",
    "level": "Sätze"
  },
  {
    "de": "Halt die Luft an!",
    "lv": "Hoia hinge kinni!",
    "level": "Sätze"
  },
  {
    "de": "Was machst du?",
    "lv": "Mida sa teed?",
    "level": "Sätze"
  },
  {
    "de": "Sag mal!",
    "lv": "Ütle juba!",
    "level": "Sätze"
  },
  {
    "de": "Was meinen Sie damit?",
    "lv": "Mida te sellega mõtlete?",
    "level": "Sätze"
  },
  {
    "de": "Wir gehen mit Ihnen.",
    "lv": "Me läheme koos teiega.",
    "level": "Sätze"
  },
  {
    "de": "Ich fahre mit der Eisenbahn.",
    "lv": "Ma sõidan rongiga.",
    "level": "Sätze"
  },
  {
    "de": "am Mittwoch",
    "lv": "kolmapäeval",
    "level": "Sätze"
  },
  {
    "de": "Es mag sein.",
    "lv": "Võib-olla.",
    "level": "Sätze"
  },
  {
    "de": "Ich mag das nicht.",
    "lv": "Mulle see ei meeldi.",
    "level": "Sätze"
  },
  {
    "de": "am Montag",
    "lv": "esmaspäeval",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen!",
    "lv": "Tere hommikust!",
    "level": "Sätze"
  },
  {
    "de": "am Morgen",
    "lv": "hommikul",
    "level": "Sätze"
  },
  {
    "de": "Gute Nacht!",
    "lv": "Head ööd!",
    "level": "Sätze"
  },
  {
    "de": "Nehmen Sie Platz!",
    "lv": "Istuge!",
    "level": "Sätze"
  },
  {
    "de": "Letzte Neuheit!",
    "lv": "Viimane uudis!",
    "level": "Sätze"
  },
  {
    "de": "Nicht wahr?",
    "lv": "Kas pole?",
    "level": "Sätze"
  },
  {
    "de": "Nicht doch!",
    "lv": "Ei ometi!",
    "level": "Sätze"
  },
  {
    "de": "Nun endlich!",
    "lv": "Noh, lõpuks ometi!",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das?",
    "lv": "Milleks see kõlbab?",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das alles?",
    "lv": "Mis kasu sellest kõigest on?",
    "level": "Sätze"
  },
  {
    "de": "Parken verboten!",
    "lv": "Parkimine keelatud!",
    "level": "Sätze"
  },
  {
    "de": "Nicht parken!",
    "lv": "Parkimine keelatud!",
    "level": "Sätze"
  },
  {
    "de": "Er hat Recht.",
    "lv": "Tal on õigus.",
    "level": "Sätze"
  },
  {
    "de": "Wovon ist die Rede?",
    "lv": "Millest on jutt?",
    "level": "Sätze"
  },
  {
    "de": "Davon kann keine Rede sein.",
    "lv": "Sellest ei saa juttugi olla.",
    "level": "Sätze"
  },
  {
    "de": "Glückliche Reise!",
    "lv": "Head reisi!",
    "level": "Sätze"
  },
  {
    "de": "Mir reißt die Geduld.",
    "lv": "Mu kannatus saab otsa.",
    "level": "Sätze"
  },
  {
    "de": "Man sagt, dass...",
    "lv": "Räägitakse, et...",
    "level": "Sätze"
  },
  {
    "de": "Schon gut!",
    "lv": "Hea küll!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön!",
    "lv": "Palun!",
    "level": "Sätze"
  },
  {
    "de": "Was bin ich schuldig?",
    "lv": "Kui palju ma võlgnen?",
    "level": "Sätze"
  },
  {
    "de": "Vor dem Gebrauch schütteln!",
    "lv": "Enne kasutamist loksutada!",
    "level": "Sätze"
  },
  {
    "de": "Sehen Sie mal!",
    "lv": "Vaadake!",
    "level": "Sätze"
  },
  {
    "de": "Wie sehr auch...",
    "lv": "Kui väga ka...",
    "level": "Sätze"
  },
  {
    "de": "Seit wann?",
    "lv": "Mis ajast?",
    "level": "Sätze"
  },
  {
    "de": "Was soll ich tun?",
    "lv": "Mida ma peaksin tegema?",
    "level": "Sätze"
  },
  {
    "de": "im Sommer",
    "lv": "suvel",
    "level": "Sätze"
  },
  {
    "de": "Nicht nur..., sondern auch...",
    "lv": "Mitte ainult..., vaid ka...",
    "level": "Sätze"
  },
  {
    "de": "Sonst noch etwas?",
    "lv": "Veel midagi?",
    "level": "Sätze"
  },
  {
    "de": "Spaß beiseite!",
    "lv": "Ilma naljata!",
    "level": "Sätze"
  },
  {
    "de": "Wie spät ist es?",
    "lv": "Mis kell on?",
    "level": "Sätze"
  },
  {
    "de": "Durchfahrt gesperrt!",
    "lv": "Läbisõit keelatud!",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie deutsch?",
    "lv": "Kas te räägite saksa keelt?",
    "level": "Sätze"
  },
  {
    "de": "Statt zu...",
    "lv": "Selle asemel, et...",
    "level": "Sätze"
  },
  {
    "de": "Wie steht’s?",
    "lv": "Kuidas läheb?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Hut steht ihr gut.",
    "lv": "See müts sobib talle hästi.",
    "level": "Sätze"
  },
  {
    "de": "Guten Tag!",
    "lv": "Tere päevast!",
    "level": "Sätze"
  },
  {
    "de": "Wo treffen wir uns?",
    "lv": "Kus me kohtume?",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie näher!",
    "lv": "Tulge lähemale!",
    "level": "Sätze"
  },
  {
    "de": "Ehrlichkeit ist eine Tugend.",
    "lv": "Ausus on voorus.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe viel zu tun.",
    "lv": "Mul on palju tegemist.",
    "level": "Sätze"
  },
  {
    "de": "Nicht übel!",
    "lv": "Üsna hea!",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt über mir.",
    "lv": "Ta elab minu kohal.",
    "level": "Sätze"
  },
  {
    "de": "Er ist davon überzeugt.",
    "lv": "Ta on selles veendunud.",
    "level": "Sätze"
  },
  {
    "de": "So ist es üblich.",
    "lv": "Nii on kombeks.",
    "level": "Sätze"
  },
  {
    "de": "Deine Uhr geht nach.",
    "lv": "Sinu kell jääb maha.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel Uhr ist es?",
    "lv": "Mis kell on?",
    "level": "Sätze"
  },
  {
    "de": "Um acht Uhr früh.",
    "lv": "Kell kaheksa hommikul.",
    "level": "Sätze"
  },
  {
    "de": "umso mehr",
    "lv": "seda enam",
    "level": "Sätze"
  },
  {
    "de": "Rechts um!",
    "lv": "Pöörduge paremale!",
    "level": "Sätze"
  },
  {
    "de": "Und ob!",
    "lv": "Ja kuidas veel!",
    "level": "Sätze"
  },
  {
    "de": "und zwar",
    "lv": "nimelt",
    "level": "Sätze"
  },
  {
    "de": "Auf Unkosten von...",
    "lv": "... arvel.",
    "level": "Sätze"
  },
  {
    "de": "Er saß unter den Zuschauern.",
    "lv": "Ta istus pealtvaatajate hulgas.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ursache!",
    "lv": "Pole tänu väärt!",
    "level": "Sätze"
  },
  {
    "de": "Es geschah, wie verabredet.",
    "lv": "Läks nii, nagu oli kokku lepitud.",
    "level": "Sätze"
  },
  {
    "de": "Rauchen verboten!",
    "lv": "Suitsetamine keelatud!",
    "level": "Sätze"
  },
  {
    "de": "Falsch verbunden!",
    "lv": "Vale ühendus!",
    "level": "Sätze"
  },
  {
    "de": "Eintritt verboten!",
    "lv": "Sissepääs keelatud!",
    "level": "Sätze"
  },
  {
    "de": "Verstehen Sie mich?",
    "lv": "Kas te saate minust aru?",
    "level": "Sätze"
  },
  {
    "de": "Er versteht nichts davon.",
    "lv": "Ta ei saa sellest midagi aru.",
    "level": "Sätze"
  },
  {
    "de": "Seine Ansicht vertreten.",
    "lv": "Kaitsta oma seisukohta.",
    "level": "Sätze"
  },
  {
    "de": "Streit verursachen.",
    "lv": "Põhjustada tüli.",
    "level": "Sätze"
  },
  {
    "de": "Viel besser.",
    "lv": "Palju parem.",
    "level": "Sätze"
  },
  {
    "de": "Zu viel.",
    "lv": "Liiga palju.",
    "level": "Sätze"
  },
  {
    "de": "Vom Hörensagen.",
    "lv": "Kuulduste järgi.",
    "level": "Sätze"
  },
  {
    "de": "Von Zeit zu Zeit.",
    "lv": "Aeg-ajalt.",
    "level": "Sätze"
  },
  {
    "de": "Von Beruf.",
    "lv": "Elukutselt.",
    "level": "Sätze"
  },
  {
    "de": "Er ist Berliner von Geburt.",
    "lv": "Ta on sünnilt berliinlane.",
    "level": "Sätze"
  },
  {
    "de": "Er steht vor dem Fenster.",
    "lv": "Ta seisab akna ees.",
    "level": "Sätze"
  },
  {
    "de": "Vor Sonnenaufgang.",
    "lv": "Enne päikesetõusu.",
    "level": "Sätze"
  },
  {
    "de": "Vor vierzehn Tagen.",
    "lv": "Kaks nädalat tagasi.",
    "level": "Sätze"
  },
  {
    "de": "Vor Freude.",
    "lv": "Rõõmust.",
    "level": "Sätze"
  },
  {
    "de": "Vor allem.",
    "lv": "Esiteks.",
    "level": "Sätze"
  },
  {
    "de": "Im Voraus.",
    "lv": "Ette.",
    "level": "Sätze"
  },
  {
    "de": "Unter der Voraussetzung, dass...",
    "lv": "Eeldusel, et...",
    "level": "Sätze"
  },
  {
    "de": "Unter dem Vorbehalt.",
    "lv": "Tingimusel.",
    "level": "Sätze"
  },
  {
    "de": "Vorhanden sein.",
    "lv": "Olemas olla.",
    "level": "Sätze"
  },
  {
    "de": "In der vorigen Woche.",
    "lv": "Eelmisel nädalal.",
    "level": "Sätze"
  },
  {
    "de": "Vorkehrungen treffen.",
    "lv": "Tarvitusele võtta ettevaatusabinõud.",
    "level": "Sätze"
  },
  {
    "de": "Sie kommt mir bekannt vor.",
    "lv": "Ta tundub mulle tuttav.",
    "level": "Sätze"
  },
  {
    "de": "Er hat Vorliebe für Literatur.",
    "lv": "Talle meeldib väga kirjandus.",
    "level": "Sätze"
  },
  {
    "de": "Heute Vormittag.",
    "lv": "Täna hommikul.",
    "level": "Sätze"
  },
  {
    "de": "Von vorn.",
    "lv": "Eest.",
    "level": "Sätze"
  },
  {
    "de": "Nach vorn.",
    "lv": "Edasi.",
    "level": "Sätze"
  },
  {
    "de": "Von vornherein.",
    "lv": "Algusest peale.",
    "level": "Sätze"
  },
  {
    "de": "Im Vorteil sein.",
    "lv": "Olla soodsamas seisus.",
    "level": "Sätze"
  },
  {
    "de": "Wach sein.",
    "lv": "Olla ärkvel.",
    "level": "Sätze"
  },
  {
    "de": "Wach werden.",
    "lv": "Ärgata.",
    "level": "Sätze"
  },
  {
    "de": "Auf Wache sein.",
    "lv": "Seista valves.",
    "level": "Sätze"
  },
  {
    "de": "Während eines Jahres.",
    "lv": "Aasta jooksul.",
    "level": "Sätze"
  },
  {
    "de": "Während des Krieges.",
    "lv": "Sõja ajal.",
    "level": "Sätze"
  },
  {
    "de": "Gegen eine Wand reden.",
    "lv": "Rääkida nagu seinale.",
    "level": "Sätze"
  },
  {
    "de": "Hier haben die Wände Ohren.",
    "lv": "Siin on seintel kõrvad.",
    "level": "Sätze"
  },
  {
    "de": "Bis wann?",
    "lv": "Kuni millise ajani?",
    "level": "Sätze"
  },
  {
    "de": "Es ist warm.",
    "lv": "On soe.",
    "level": "Sätze"
  },
  {
    "de": "Auf eine Nachricht warten.",
    "lv": "Oodata teadet.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie?",
    "lv": "Mida te soovite?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein...?",
    "lv": "Milline...?",
    "level": "Sätze"
  },
  {
    "de": "Auf halbem Wege.",
    "lv": "Poolel teel.",
    "level": "Sätze"
  },
  {
    "de": "Auf diesem Wege.",
    "lv": "Sel viisil.",
    "level": "Sätze"
  },
  {
    "de": "Auf friedlichem Wege.",
    "lv": "Rahumeelsel teel.",
    "level": "Sätze"
  },
  {
    "de": "Unserer Freundschaft wegen.",
    "lv": "Meie sõpruse pärast.",
    "level": "Sätze"
  },
  {
    "de": "Von Rechts wegen.",
    "lv": "Õiguse järgi.",
    "level": "Sätze"
  },
  {
    "de": "Weh tun.",
    "lv": "Valutada.",
    "level": "Sätze"
  },
  {
    "de": "Zu Weihnachten.",
    "lv": "Jõulude ajal.",
    "level": "Sätze"
  },
  {
    "de": "Auf welche Weise?",
    "lv": "Mil viisil?",
    "level": "Sätze"
  },
  {
    "de": "Art und Weise.",
    "lv": "Viis.",
    "level": "Sätze"
  },
  {
    "de": "Ohne weiteres.",
    "lv": "Ilma pikemata.",
    "level": "Sätze"
  },
  {
    "de": "Bis auf weiteres.",
    "lv": "Kuni edasise korralduseni.",
    "level": "Sätze"
  },
  {
    "de": "Und so weiter.",
    "lv": "Ja nii edasi.",
    "level": "Sätze"
  },
  {
    "de": "Weiter nichts.",
    "lv": "Rohkem midagi pole.",
    "level": "Sätze"
  },
  {
    "de": "An welchem Tag?",
    "lv": "Millisel päeval?",
    "level": "Sätze"
  },
  {
    "de": "Alle Welt.",
    "lv": "Kogu maailm.",
    "level": "Sätze"
  },
  {
    "de": "In wenigen Tagen.",
    "lv": "Mõne päeva pärast.",
    "level": "Sätze"
  },
  {
    "de": "Zu wenig.",
    "lv": "Liiga vähe.",
    "level": "Sätze"
  },
  {
    "de": "Wenn auch.",
    "lv": "Kuigi.",
    "level": "Sätze"
  },
  {
    "de": "Wer da?",
    "lv": "Kes seal on?",
    "level": "Sätze"
  },
  {
    "de": "Gesammelte Werke von Schiller.",
    "lv": "Schilleri kogutud teosed.",
    "level": "Sätze"
  },
  {
    "de": "Ausgewählte Werke.",
    "lv": "Valik teoseid.",
    "level": "Sätze"
  },
  {
    "de": "Er ist wert, dass...",
    "lv": "Ta on ära teeninud, et...",
    "level": "Sätze"
  },
  {
    "de": "Es ist zwei Euro wert.",
    "lv": "See maksab kaks eurot.",
    "level": "Sätze"
  },
  {
    "de": "Nach Westen.",
    "lv": "Läände.",
    "level": "Sätze"
  },
  {
    "de": "Von Westen.",
    "lv": "Läänest.",
    "level": "Sätze"
  },
  {
    "de": "In Wettbewerb treten.",
    "lv": "Astuda võistlusse.",
    "level": "Sätze"
  },
  {
    "de": "Um die Wette laufen.",
    "lv": "Võidu jooksma.",
    "level": "Sätze"
  },
  {
    "de": "Was gilt die Wette?",
    "lv": "Mis on kihlveo panuseks?",
    "level": "Sätze"
  },
  {
    "de": "Wie wird das Wetter?",
    "lv": "Milline ilm tuleb?",
    "level": "Sätze"
  },
  {
    "de": "Wettkampf im Turnen.",
    "lv": "Võistlused võimlemises.",
    "level": "Sätze"
  },
  {
    "de": "Wider meinen Willen.",
    "lv": "Vastu minu tahtmist.",
    "level": "Sätze"
  },
  {
    "de": "Widerspruch erheben.",
    "lv": "Protesteerida.",
    "level": "Sätze"
  },
  {
    "de": "Wie alt ist er?",
    "lv": "Kui vana ta on?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange?",
    "lv": "Kui kaua?",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiederhören!",
    "lv": "Kuulmiseni!",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiedersehen!",
    "lv": "Nägemiseni!",
    "level": "Sätze"
  },
  {
    "de": "Wilde Tiere.",
    "lv": "Metsloomad.",
    "level": "Sätze"
  },
  {
    "de": "Herzlich willkommen!",
    "lv": "Tere tulemast!",
    "level": "Sätze"
  },
  {
    "de": "Du musst ziehen.",
    "lv": "Sinu kord käia.",
    "level": "Sätze"
  },
  {
    "de": "Es zieht.",
    "lv": "Tõmbab tuult.",
    "level": "Sätze"
  },
  {
    "de": "Ziemlich kalt.",
    "lv": "Üsna külm.",
    "level": "Sätze"
  },
  {
    "de": "Zipfel einer Wurst.",
    "lv": "Vorstiots.",
    "level": "Sätze"
  },
  {
    "de": "Zu ihm gehen.",
    "lv": "Minna tema juurde.",
    "level": "Sätze"
  },
  {
    "de": "Zur Schule gehen.",
    "lv": "Kooli minna.",
    "level": "Sätze"
  },
  {
    "de": "Zu Hause bleiben.",
    "lv": "Koju jääda.",
    "level": "Sätze"
  },
  {
    "de": "Von Tag zu Tag.",
    "lv": "Päevast päeva.",
    "level": "Sätze"
  },
  {
    "de": "Zum Glück.",
    "lv": "Õnneks.",
    "level": "Sätze"
  },
  {
    "de": "Wasser zum Trinken.",
    "lv": "Joogivesi.",
    "level": "Sätze"
  },
  {
    "de": "Zu Fuß.",
    "lv": "Jalgsi.",
    "level": "Sätze"
  },
  {
    "de": "Zu Pferde.",
    "lv": "Ratsa.",
    "level": "Sätze"
  },
  {
    "de": "Zu Rad.",
    "lv": "Jalgrattaga.",
    "level": "Sätze"
  },
  {
    "de": "Es hörte auf zu regnen.",
    "lv": "Vihm lakkas sadamast.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe noch viel zu tun.",
    "lv": "Mul on veel palju teha.",
    "level": "Sätze"
  },
  {
    "de": "Zu früh.",
    "lv": "Liiga vara.",
    "level": "Sätze"
  },
  {
    "de": "Zu groß.",
    "lv": "Liiga suur.",
    "level": "Sätze"
  },
  {
    "de": "Mit den Achseln zucken.",
    "lv": "Kehitada õlgu.",
    "level": "Sätze"
  },
  {
    "de": "In einem Zug trinken.",
    "lv": "Juua ühe sõõmuga.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde gehen.",
    "lv": "Hukka minna.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde legen.",
    "lv": "Panna aluseks.",
    "level": "Sätze"
  },
  {
    "de": "Zum ersten Mal.",
    "lv": "Esmakordselt.",
    "level": "Sätze"
  },
  {
    "de": "Machen Sie bitte die Tür zu!",
    "lv": "Sulgege palun uks!",
    "level": "Sätze"
  },
  {
    "de": "Er hat zugenommen.",
    "lv": "Ta on juurde võtnud.",
    "level": "Sätze"
  },
  {
    "de": "Die Tage nehmen zu.",
    "lv": "Päevad muutuvad pikemaks.",
    "level": "Sätze"
  },
  {
    "de": "Zusammenhängen mit etwas.",
    "lv": "Olla millegagi seotud.",
    "level": "Sätze"
  },
  {
    "de": "Die Tür ist zu.",
    "lv": "Uks on suletud.",
    "level": "Sätze"
  },
  {
    "de": "Das hätte ich ihm nicht zugetraut.",
    "lv": "Seda ma poleks temalt oodanud.",
    "level": "Sätze"
  },
  {
    "de": "Freier Zutritt.",
    "lv": "Vaba sissepääs.",
    "level": "Sätze"
  },
  {
    "de": "Zutritt verboten!",
    "lv": "Sissepääs keelatud!",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu viel!",
    "lv": "See on liiga palju!",
    "level": "Sätze"
  },
  {
    "de": "Zuwider werden.",
    "lv": "Muutuda vastikuks.",
    "level": "Sätze"
  },
  {
    "de": "Und zwar.",
    "lv": "Nimelt.",
    "level": "Sätze"
  },
  {
    "de": "Es steht außer Zweifel.",
    "lv": "Pole mingit kahtlust.",
    "level": "Sätze"
  },
  {
    "de": "Ohne Zweifel.",
    "lv": "Kahtlemata.",
    "level": "Sätze"
  },
  {
    "de": "Zum Zweiten.",
    "lv": "Teiseks.",
    "level": "Sätze"
  },
  {
    "de": "Frohes neues Jahr!",
    "lv": "Head uut aastat!",
    "level": "Sätze"
  },
  {
    "de": "Herzlichen Glückwunsch zum Geburtstag!",
    "lv": "Palju õnne sünnipäevaks!",
    "level": "Sätze"
  },
  {
    "de": "Gute Reise!",
    "lv": "Head reisi!",
    "level": "Sätze"
  },
  {
    "de": "Es freut mich, Sie kennenzulernen.",
    "lv": "Rõõm on teiega tuttavaks saada.",
    "level": "Sätze"
  },
  {
    "de": "Wären Sie bitte so nett?",
    "lv": "Kas te oleksite palun nii lahke?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin Ihnen sehr dankbar.",
    "lv": "Olen teile väga tänulik.",
    "level": "Sätze"
  },
  {
    "de": "Setzt euch bitte hin!",
    "lv": "Istuge palun!",
    "level": "Sätze"
  },
  {
    "de": "Ben, komm bitte an die Tafel!",
    "lv": "Ben, tule palun tahvli juurde!",
    "level": "Sätze"
  },
  {
    "de": "Schlagt bitte die Lehrbücher auf!",
    "lv": "Avage palun õpikud!",
    "level": "Sätze"
  },
  {
    "de": "Geht bitte in die Sporthalle!",
    "lv": "Minge palun spordisaali!",
    "level": "Sätze"
  },
  {
    "de": "Schläfst du noch?",
    "lv": "Kas sa veel magad?",
    "level": "Sätze"
  },
  {
    "de": "Schlafen Sie noch?",
    "lv": "Kas te veel magate?",
    "level": "Sätze"
  },
  {
    "de": "Er ist fest eingeschlafen.",
    "lv": "Ta on sügavalt magama jäänud.",
    "level": "Sätze"
  },
  {
    "de": "Wecke ihn bitte auf, es ist schon spät!",
    "lv": "Palun ärata ta, on juba hilja!",
    "level": "Sätze"
  },
  {
    "de": "Es tut mir sehr leid!",
    "lv": "Mul on väga kahju!",
    "level": "Sätze"
  },
  {
    "de": "Vielen Dank!",
    "lv": "Suur aitäh!",
    "level": "Sätze"
  },
  {
    "de": "Finn, fang bitte an!",
    "lv": "Finn, alusta palun!",
    "level": "Sätze"
  },
  {
    "de": "Lest bitte mit!",
    "lv": "Lugege kaasa, palun!",
    "level": "Sätze"
  },
  {
    "de": "Emma, schau bitte nicht aus dem Fenster!",
    "lv": "Emma, palun ära vaata aknast välja!",
    "level": "Sätze"
  },
  {
    "de": "Jonas, bring bitte die Hefte!",
    "lv": "Jonas, too palun vihikud!",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte zurück an deinen Platz!",
    "lv": "Mine tagasi oma kohale!",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb acht.",
    "lv": "Kell on pool kaheksa.",
    "level": "Sätze"
  },
  {
    "de": "Wann wachst du gewöhnlich auf?",
    "lv": "Millal sa tavaliselt ärkad?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe gleich auf.",
    "lv": "Ma tõusen kohe üles.",
    "level": "Sätze"
  },
  {
    "de": "Steh auf, Hanna, es klingelt!",
    "lv": "Tõuse üles, Hanna, kell heliseb!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich noch fünf Minuten schlafen!",
    "lv": "Luba mul veel viis minutit magada!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss nicht, das Zimmer zu lüften!",
    "lv": "Ära unusta tuba tuulutada!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist das Handtuch?",
    "lv": "Kus on käterätik?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mir die Zähne putzen.",
    "lv": "Tahan hambaid pesta.",
    "level": "Sätze"
  },
  {
    "de": "Mit was putzt du dir die Zähne?",
    "lv": "Millega sa hambaid pesed?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mich anziehen.",
    "lv": "Tahan riidesse panna.",
    "level": "Sätze"
  },
  {
    "de": "Zieh dich bitte schnell an!",
    "lv": "Pane kiiresti riidesse, palun!",
    "level": "Sätze"
  },
  {
    "de": "Kleide dich wärmer an, draußen ist es kühl.",
    "lv": "Pane soojemalt riidesse, väljas on jahe.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, wie geht es dir?",
    "lv": "Tere hommikust, kuidas sul läheb?",
    "level": "Sätze"
  },
  {
    "de": "Mir geht es gut, danke.",
    "lv": "Mul läheb hästi, aitäh.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es Neues?",
    "lv": "Mis uudist?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein Chaos hier!",
    "lv": "Küll siin on segadus!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich beim Aufräumen helfen?",
    "lv": "Kas ma tohin koristada aidata?",
    "level": "Sätze"
  },
  {
    "de": "Was trinkst du morgens, Kaffee oder Tee?",
    "lv": "Mida sa hommikul jood, kohvi või teed?",
    "level": "Sätze"
  },
  {
    "de": "Gewöhnlich trinke ich morgens eine Tasse Kaffee.",
    "lv": "Tavaliselt joon hommikul tassi kohvi.",
    "level": "Sätze"
  },
  {
    "de": "Am liebsten trinke ich schwarzen Kaffee.",
    "lv": "Kõige rohkem meeldib mulle musta kohvi juua.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, hast du gut geschlafen?",
    "lv": "Tere hommikust, kas magasid hästi?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin noch sehr müde.",
    "lv": "Ma olen ikka veel väga väsinud.",
    "level": "Sätze"
  },
  {
    "de": "Willst du Kaffee oder Milch?",
    "lv": "Kas tahad kohvi või piima?",
    "level": "Sätze"
  },
  {
    "de": "Gib mir bitte ein Brötchen mit Käse.",
    "lv": "Anna mulle palun juustusai.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss jetzt los!",
    "lv": "Ma pean nüüd minema!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss dein Frühstück nicht!",
    "lv": "Ära unusta hommikusööki!",
    "level": "Sätze"
  },
  {
    "de": "Klara, deck bitte den Tisch!",
    "lv": "Klara, palun kata laud!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss die Servietten nicht!",
    "lv": "Ära unusta salvrätte!",
    "level": "Sätze"
  },
  {
    "de": "Wann esst ihr zu Mittag?",
    "lv": "Millal te sööte lõunat?",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit zu essen.",
    "lv": "On aeg süüa.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es heute zu Mittag?",
    "lv": "Mis on täna lõunaks?",
    "level": "Sätze"
  },
  {
    "de": "Wie schmeckt dir die Suppe?",
    "lv": "Kuidas supp sulle maitseb?",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt ist sie etwas zu salzig.",
    "lv": "Ausalt öeldes on see pisut liiga soolane.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dir ein Stück Brot geben?",
    "lv": "Kas ma tohin sulle viilu leiba anda?",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich habe schon.",
    "lv": "Aitäh, mul juba on.",
    "level": "Sätze"
  },
  {
    "de": "Das Fleisch schmeckt ausgezeichnet.",
    "lv": "Liha maitseb suurepäraselt.",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich bin schon satt.",
    "lv": "Aitäh, kõht on juba täis.",
    "level": "Sätze"
  },
  {
    "de": "Heute haben wir Besuch.",
    "lv": "Täna on meil külalised.",
    "level": "Sätze"
  },
  {
    "de": "Bist du heute Abend frei?",
    "lv": "Kas sul on täna õhtul vaba aega?",
    "level": "Sätze"
  },
  {
    "de": "Komm doch heute zum Mittagessen vorbei!",
    "lv": "Tule täna lõunale külla!",
    "level": "Sätze"
  },
  {
    "de": "Setzen wir uns an den Tisch.",
    "lv": "Istume laua taha.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, bedien dich!",
    "lv": "Palun, võta ise!",
    "level": "Sätze"
  },
  {
    "de": "Stört dich das Rauchen?",
    "lv": "Kas suitsetamine häirib sind?",
    "level": "Sätze"
  },
  {
    "de": "Danke für die nette Aufnahme!",
    "lv": "Aitäh lahke vastuvõtu eest!",
    "level": "Sätze"
  },
  {
    "de": "Wann gehst du ins Bett?",
    "lv": "Millal sa magama lähed?",
    "level": "Sätze"
  },
  {
    "de": "Wenn ich von der Arbeit komme, bin ich immer müde.",
    "lv": "Kui ma töölt tulen, olen alati väsinud.",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, ins Bett zu gehen.",
    "lv": "On aeg magama minna.",
    "level": "Sätze"
  },
  {
    "de": "Es ist schönes Wetter.",
    "lv": "On ilus ilm.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mit mir spazieren gehen?",
    "lv": "Kas tahad minuga jalutada?",
    "level": "Sätze"
  },
  {
    "de": "Sieh mal, es wird gleich regnen.",
    "lv": "Vaata, kohe hakkab sadama.",
    "level": "Sätze"
  },
  {
    "de": "Nimm den Regenschirm mit!",
    "lv": "Võta vihmavari kaasa!",
    "level": "Sätze"
  },
  {
    "de": "Es regnet.",
    "lv": "Sajab vihma.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin schon ganz nass.",
    "lv": "Olen juba täiesti märg.",
    "level": "Sätze"
  },
  {
    "de": "Glaubst du, dass es den ganzen Tag regnen wird?",
    "lv": "Kas arvad, et sajab kogu päeva?",
    "level": "Sätze"
  },
  {
    "de": "Es hört auf zu regnen.",
    "lv": "Vihm lakkab sadamast.",
    "level": "Sätze"
  },
  {
    "de": "Die Sonne scheint wieder.",
    "lv": "Päike paistab jälle.",
    "level": "Sätze"
  },
  {
    "de": "Es ist sehr warm.",
    "lv": "On väga palav.",
    "level": "Sätze"
  },
  {
    "de": "Es sieht nach Regen aus.",
    "lv": "Näib, et hakkab sadama.",
    "level": "Sätze"
  },
  {
    "de": "Wir bekommen gleich ein Gewitter.",
    "lv": "Varsti tuleb äikesetorm.",
    "level": "Sätze"
  },
  {
    "de": "Das Gewitter zieht vorüber.",
    "lv": "Äikesetorm läheb üle.",
    "level": "Sätze"
  },
  {
    "de": "Die Wolken verziehen sich.",
    "lv": "Pilved hajuvad.",
    "level": "Sätze"
  },
  {
    "de": "Siehst du den Regenbogen?",
    "lv": "Kas näed vikerkaart?",
    "level": "Sätze"
  },
  {
    "de": "Der Winter ist da, es hat geschneit.",
    "lv": "Talv on käes, on lund sadanud.",
    "level": "Sätze"
  },
  {
    "de": "Es schneit.",
    "lv": "Sajab lund.",
    "level": "Sätze"
  },
  {
    "de": "Wie schön ist es im Wald im Winter!",
    "lv": "Kui ilus on metsas talvel!",
    "level": "Sätze"
  },
  {
    "de": "Mir ist kalt, ich friere.",
    "lv": "Mul on külm, ma külmetan.",
    "level": "Sätze"
  },
  {
    "de": "Draußen ist Glatteis, pass auf!",
    "lv": "Väljas on kiilasjää, ole ettevaatlik!",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir auf die Eisbahn gehen?",
    "lv": "Kas läheme uisutama?",
    "level": "Sätze"
  },
  {
    "de": "Zieh die Jacke an, du kannst dich erkälten.",
    "lv": "Pane jope selga, võid külmetuda.",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb sieben.",
    "lv": "Kell on pool seitse.",
    "level": "Sätze"
  },
  {
    "de": "Meine Uhr geht fünf Minuten vor.",
    "lv": "Minu kell käib viis minutit ees.",
    "level": "Sätze"
  },
  {
    "de": "Weck mich morgen früh um sieben Uhr!",
    "lv": "Ärata mind homme kell seitse!",
    "level": "Sätze"
  },
  {
    "de": "Was ist heute für ein Datum?",
    "lv": "Mis kuupäev täna on?",
    "level": "Sätze"
  },
  {
    "de": "Heute ist der elfte Juli.",
    "lv": "Täna on üheteistkümnes juuli.",
    "level": "Sätze"
  },
  {
    "de": "Was machst du gewöhnlich am Abend?",
    "lv": "Mida sa tavaliselt õhtuti teed?",
    "level": "Sätze"
  },
  {
    "de": "Es ist schon lange her, dass wir uns gesehen haben.",
    "lv": "Me pole ammu kohtunud.",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es dir?",
    "lv": "Kuidas sul läheb?",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, ich möchte etwas mit dir besprechen.",
    "lv": "Vabanda, tahan sinuga midagi arutada.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir spazieren!",
    "lv": "Lähme jalutama!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Lust, mit mir in den Park zu gehen?",
    "lv": "Kas tahad minuga parki minna?",
    "level": "Sätze"
  },
  {
    "de": "Ich komme, um dich zum Spaziergang abzuholen.",
    "lv": "Tulen sulle jalutama järele.",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte etwas langsamer, ich kann dir nicht folgen!",
    "lv": "Mine pisut aeglasemalt, ma ei jõua sulle järele!",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zum ersten Mal in dieser Gegend.",
    "lv": "Olen selles piirkonnas esimest korda.",
    "level": "Sätze"
  },
  {
    "de": "Ruhen wir uns ein wenig aus.",
    "lv": "Puhkame veidi.",
    "level": "Sätze"
  },
  {
    "de": "Jetzt können wir zurückgehen.",
    "lv": "Nüüd võime tagasi minna.",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt bin ich ziemlich müde.",
    "lv": "Ausalt öeldes olen üsna väsinud.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, wo ist die nächste U-Bahn-Station?",
    "lv": "Vabanda, kus on lähim metroojaam?",
    "level": "Sätze"
  },
  {
    "de": "Welcher ist der kürzeste Weg?",
    "lv": "Milline on lühim tee?",
    "level": "Sätze"
  },
  {
    "de": "Geh hier die zweite Straße links und dann immer geradeaus.",
    "lv": "Pööra siin teisel tänaval vasakule ja mine otse edasi.",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich am schnellsten zum Bahnhof?",
    "lv": "Kuidas ma kõige kiiremini jaama jõuan?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe vor, morgen zu verreisen.",
    "lv": "Kavatsen homme ära sõita.",
    "level": "Sätze"
  },
  {
    "de": "Wohin willst du fahren?",
    "lv": "Kuhu sa tahad sõita?",
    "level": "Sätze"
  },
  {
    "de": "Reist du geschäftlich oder privat?",
    "lv": "Kas sõidad tööasjus või eraviisiliselt?",
    "level": "Sätze"
  },
  {
    "de": "Finn fährt bis Berlin mit, dann geht er ans Meer.",
    "lv": "Finn sõidab Berliinini, siis läheb mere äärde.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt das Schiff ab?",
    "lv": "Millal laev väljub?",
    "level": "Sätze"
  },
  {
    "de": "In einer halben Stunde.",
    "lv": "Pool tunni pärast.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich noch eine Kabine bekommen?",
    "lv": "Kas ma saan veel kajuti?",
    "level": "Sätze"
  },
  {
    "de": "Vergiss deinen Pass nicht!",
    "lv": "Ära unusta passi!",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, den Koffer zu packen.",
    "lv": "On aeg kohver pakkida.",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt um halb sieben ab.",
    "lv": "Rong väljub pool seitse.",
    "level": "Sätze"
  },
  {
    "de": "Hol mir bitte ein Taxi, ich verpasse sonst den Zug!",
    "lv": "Kutsu palun takso, muidu jään rongist maha!",
    "level": "Sätze"
  },
  {
    "de": "Fahr bitte zum Bahnhof!",
    "lv": "Sõida palun jaama!",
    "level": "Sätze"
  },
  {
    "de": "Ich muss mich beeilen.",
    "lv": "Ma pean kiirustama.",
    "level": "Sätze"
  },
  {
    "de": "Ist der Schalter schon offen?",
    "lv": "Kas kassa on juba avatud?",
    "level": "Sätze"
  },
  {
    "de": "Eine Fahrkarte nach Köln, bitte.",
    "lv": "Üks pilet Kölni, palun.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt der Zug ab?",
    "lv": "Millal rong väljub?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt gleich ab.",
    "lv": "Rong väljub kohe.",
    "level": "Sätze"
  },
  {
    "de": "Muss ich in Koblenz umsteigen?",
    "lv": "Kas ma pean Koblenzis ümber istuma?",
    "level": "Sätze"
  },
  {
    "de": "Ja, dort musst du umsteigen.",
    "lv": "Jah, seal pead sa ümber istuma.",
    "level": "Sätze"
  },
  {
    "de": "Ist dieser Platz frei?",
    "lv": "Kas see koht on vaba?",
    "level": "Sätze"
  },
  {
    "de": "Nein, hier sitzt niemand.",
    "lv": "Ei, siin ei istu keegi.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der Bahnsteigkartenautomat?",
    "lv": "Kus on perroonipiletite automaat?",
    "level": "Sätze"
  },
  {
    "de": "Stell mein Handgepäck ins Gepäcknetz.",
    "lv": "Pane mu käsipagas pagasivõrku.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das Fenster aufmachen?",
    "lv": "Kas ma tohin akna avada?",
    "level": "Sätze"
  },
  {
    "de": "Es zieht, schließ bitte das Fenster!",
    "lv": "Tõmbab tuult, sulge palun aken!",
    "level": "Sätze"
  },
  {
    "de": "Welche ist die nächste Station?",
    "lv": "Milline on järgmine peatus?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange hält der Zug?",
    "lv": "Kui kaua rong seisab?",
    "level": "Sätze"
  },
  {
    "de": "Wo muss ich umsteigen?",
    "lv": "Kus ma pean ümber istuma?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug hat Verspätung.",
    "lv": "Rong hilineb.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Wagen ist für Nichtraucher.",
    "lv": "See vagun on mittesuitsetajatele.",
    "level": "Sätze"
  },
  {
    "de": "Wir fahren jetzt über die Grenze.",
    "lv": "Nüüd sõidame üle piiri.",
    "level": "Sätze"
  },
  {
    "de": "Hast du etwas zu verzollen?",
    "lv": "Kas sul on midagi tollile deklareerida?",
    "level": "Sätze"
  },
  {
    "de": "Wir sind in Berlin angekommen.",
    "lv": "Oleme jõudnud Berliini.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir ein gutes Hotel empfehlen?",
    "lv": "Kas sa saad head hotelli soovitada?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie freie Zimmer?",
    "lv": "Kas teil on vabu tube?",
    "level": "Sätze"
  },
  {
    "de": "Ein Zimmer mit zwei Betten, bitte.",
    "lv": "Tuba kahe voodiga, palun.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Zimmer pro Nacht?",
    "lv": "Kui palju maksab tuba öö kohta?",
    "level": "Sätze"
  },
  {
    "de": "Morgen reise ich ab. Weck mich um sieben Uhr!",
    "lv": "Homme sõidan ära. Ärata mind kell seitse!",
    "level": "Sätze"
  },
  {
    "de": "Die Rechnung, bitte!",
    "lv": "Arve, palun!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Stadtbibliothek?",
    "lv": "Kus on linnaraamatukogu?",
    "level": "Sätze"
  },
  {
    "de": "Wann hat das Museum geöffnet?",
    "lv": "Millal muuseum on avatud?",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir ins Museum gehen?",
    "lv": "Kas läheme muuseumisse?",
    "level": "Sätze"
  },
  {
    "de": "Fahren wir mit dem Bus oder der U-Bahn?",
    "lv": "Kas sõidame bussi või metrooga?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die nächste Bushaltestelle?",
    "lv": "Kus on lähim bussipeatus?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe großen Hunger.",
    "lv": "Mul on suur nälg.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir zusammen essen?",
    "lv": "Kas läheme koos sööma?",
    "level": "Sätze"
  },
  {
    "de": "Kellner, die Speisekarte, bitte!",
    "lv": "Ettekandja, menüü, palun!",
    "level": "Sätze"
  },
  {
    "de": "Ist der Fisch frisch?",
    "lv": "Kas kala on värske?",
    "level": "Sätze"
  },
  {
    "de": "Das schmeckt ausgezeichnet!",
    "lv": "Maitseb suurepäraselt!",
    "level": "Sätze"
  },
  {
    "de": "Kellner, zahlen bitte!",
    "lv": "Ettekandja, palun arve!",
    "level": "Sätze"
  },
  {
    "de": "Ich gehe ins Café einen Kaffee trinken.",
    "lv": "Lähen kohvikusse kohvi jooma.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mitkommen?",
    "lv": "Kas tahad kaasa tulla?",
    "level": "Sätze"
  },
  {
    "de": "Eine Tasse Kaffee mit Milch, bitte!",
    "lv": "Tass kohvi piimaga, palun!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneller, ich habe es eilig!",
    "lv": "Kiiremini, palun, mul on kiire!",
    "level": "Sätze"
  },
  {
    "de": "Lass deinen Kaffee nicht kalt werden!",
    "lv": "Ära lase kohvil jahtuda!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie etwas Erfrischendes?",
    "lv": "Kas teil on midagi karastavat?",
    "level": "Sätze"
  },
  {
    "de": "Eine Portion Eis, bitte!",
    "lv": "Portsjon jäätist, palun!",
    "level": "Sätze"
  },
  {
    "de": "Heute Morgen habe ich einen Brief bekommen.",
    "lv": "Täna hommikul sain kirja.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss ihm gleich schreiben.",
    "lv": "Ma pean talle kohe kirjutama.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der nächste Briefkasten?",
    "lv": "Kus on lähim postkast?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Post?",
    "lv": "Kus on postkontor?",
    "level": "Sätze"
  },
  {
    "de": "Erinnere mich morgen daran zu schreiben!",
    "lv": "Tuleta mulle homme meelde, et ma kirjutaksin!",
    "level": "Sätze"
  },
  {
    "de": "Werfen Sie bitte diesen Brief in den Briefkasten.",
    "lv": "Palun pange see kiri postkasti!",
    "level": "Sätze"
  },
  {
    "de": "Hallo, hier spricht Emma.",
    "lv": "Tere, siin räägib Emma.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich dich später anrufen?",
    "lv": "Kas ma tohin sulle hiljem helistada?",
    "level": "Sätze"
  },
  {
    "de": "Muss ich lange warten?",
    "lv": "Kas ma pean kaua ootama?",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneiden Sie mir die Haare.",
    "lv": "Palun lõigake mul juukseid.",
    "level": "Sätze"
  },
  {
    "de": "Hinten bitte nicht zu kurz.",
    "lv": "Tagant palun mitte liiga lühikeseks.",
    "level": "Sätze"
  },
  {
    "de": "Wann beginnt die Vorstellung?",
    "lv": "Millal etendus algab?",
    "level": "Sätze"
  },
  {
    "de": "Es fängt um halb acht an.",
    "lv": "See algab kell pool kaheksa.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind ausverkauft.",
    "lv": "Kõik kohad on välja müüdud.",
    "level": "Sätze"
  },
  {
    "de": "Drei Karten, bitte!",
    "lv": "Kolm piletit, palun!",
    "level": "Sätze"
  },
  {
    "de": "Wir lassen die Jacken in der Garderobe.",
    "lv": "Jätame joped garderoobi.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schnell, der Vorhang geht gleich auf!",
    "lv": "Kiiremini, palun, eesriie avaneb kohe!",
    "level": "Sätze"
  },
  {
    "de": "Der Vorhang fällt.",
    "lv": "Eesriie langeb.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dich zum Tanz bitten?",
    "lv": "Kas ma tohin sind tantsule kutsuda?",
    "level": "Sätze"
  },
  {
    "de": "Wann ist eure Hochzeit?",
    "lv": "Millal on teie pulmad?",
    "level": "Sätze"
  },
  {
    "de": "Ich suche eine Wohnung.",
    "lv": "Otsin korterit.",
    "level": "Sätze"
  },
  {
    "de": "Ist in diesem Haus eine Wohnung frei?",
    "lv": "Kas selles majas on vaba korter?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet die Miete?",
    "lv": "Kui palju maksab üür?",
    "level": "Sätze"
  },
  {
    "de": "Die Wohnung hat drei Zimmer und eine Küche.",
    "lv": "Korteris on kolm tuba ja köök.",
    "level": "Sätze"
  },
  {
    "de": "Heute ziehen wir um.",
    "lv": "Täna kolime.",
    "level": "Sätze"
  },
  {
    "de": "Mia, pack die Sachen bitte in Kisten!",
    "lv": "Mia, pane palun asjad kastidesse!",
    "level": "Sätze"
  },
  {
    "de": "Hast du alles eingepackt?",
    "lv": "Kas oled kõik juba sisse pakkinud?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe mit meinem Freund in Kontakt.",
    "lv": "Olen oma sõbraga kontaktis.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir ins Theater?",
    "lv": "Kas läheme teatrisse?",
    "level": "Sätze"
  },
  {
    "de": "Ist alles eingeladen?",
    "lv": "Kas kõik on peale laaditud?",
    "level": "Sätze"
  },
  {
    "de": "Welch schöne Aussicht!",
    "lv": "Küll on kaunis vaade!",
    "level": "Sätze"
  },
  {
    "de": "Nun können wir alles wieder aufräumen.",
    "lv": "Nüüd võime kõik jälle korda teha.",
    "level": "Sätze"
  },
  {
    "de": "Wie viele Zimmer habt ihr?",
    "lv": "Mitu tuba teil on?",
    "level": "Sätze"
  },
  {
    "de": "Im Sommer fahre ich ans Meer.",
    "lv": "Suvel sõidan mere äärde.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du schwimmen?",
    "lv": "Kas sa oskad ujuda?",
    "level": "Sätze"
  },
  {
    "de": "Schwimm nicht zu weit hinaus!",
    "lv": "Ära uju liiga kaugele!",
    "level": "Sätze"
  },
  {
    "de": "Badest du jeden Tag?",
    "lv": "Kas sa käid iga päev ujumas?",
    "level": "Sätze"
  },
  {
    "de": "Bei schönem Wetter gehe ich angeln.",
    "lv": "Kui ilm on ilus, lähen kalale.",
    "level": "Sätze"
  },
  {
    "de": "Wie sieht er aus?",
    "lv": "Kuidas ta välja näeb?",
    "level": "Sätze"
  },
  {
    "de": "Er hat sich aber recht verändert.",
    "lv": "Ta on aga üsna palju muutunud.",
    "level": "Sätze"
  },
  {
    "de": "Wie ist er als Mensch?",
    "lv": "Milline ta on inimesena?",
    "level": "Sätze"
  },
  {
    "de": "Er ist immer nett und freundlich.",
    "lv": "Ta on alati tore ja sõbralik.",
    "level": "Sätze"
  },
  {
    "de": "Ich fühle mich nicht wohl.",
    "lv": "Tunnen end halvasti.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe starke Kopfschmerzen.",
    "lv": "Mul on tugev peavalu.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe mich erkältet.",
    "lv": "Olen külmetunud.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Schnupfen.",
    "lv": "Mul on nohu.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist schwindlig.",
    "lv": "Mul on peapööritus.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Arzt gehen.",
    "lv": "Ma pean arsti juurde minema.",
    "level": "Sätze"
  },
  {
    "de": "Leg dich ins Bett!",
    "lv": "Heida voodisse!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Fieber?",
    "lv": "Kas sul on palavik?",
    "level": "Sätze"
  },
  {
    "de": "Gestern hatte ich erhöhte Temperatur.",
    "lv": "Eile oli mul kõrgenenud temperatuur.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Zahnschmerzen.",
    "lv": "Mul valutavad hambad.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Zahnarzt gehen.",
    "lv": "Ma pean hambaarsti juurde minema.",
    "level": "Sätze"
  },
  {
    "de": "Weißt du, dass Finn krank ist?",
    "lv": "Kas sa tead, et Finn on haige?",
    "level": "Sätze"
  },
  {
    "de": "Laut Arzt wird er bald wieder gesund.",
    "lv": "Arsti sõnul saab ta varsti jälle terveks.",
    "level": "Sätze"
  },
  {
    "de": "Ich will meine Wohnung neu möblieren.",
    "lv": "Tahan oma korterit uuesti sisustada.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das auf Raten kaufen?",
    "lv": "Kas ma saan järelmaksuga osta?",
    "level": "Sätze"
  },
  {
    "de": "Bleib im Bett, bis es dir besser geht!",
    "lv": "Jää voodisse, kuni tunned end paremini!",
    "level": "Sätze"
  },
  {
    "de": "Noah hat in zwei Wochen schwimmen gelernt.",
    "lv": "Noah õppis kahe nädalaga ujuma.",
    "level": "Sätze"
  },
  {
    "de": "Sei mit dem Essen noch vorsichtig.",
    "lv": "Ole toiduga veel ettevaatlik.",
    "level": "Sätze"
  },
  {
    "de": "Sprichst du Deutsch?",
    "lv": "Kas sa räägid saksa keelt?",
    "level": "Sätze"
  },
  {
    "de": "Ja, ein bisschen.",
    "lv": "Jah, natuke.",
    "level": "Sätze"
  },
  {
    "de": "Du sprichst ziemlich fließend.",
    "lv": "Sa räägid üsna ladusalt.",
    "level": "Sätze"
  },
  {
    "de": "Wo hast du Deutsch gelernt?",
    "lv": "Kus sa saksa keelt õppisid?",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme seit einem Jahr Deutschstunden.",
    "lv": "Olen juba aasta aega saksa keele tunde võtnud.",
    "level": "Sätze"
  },
  {
    "de": "Ich suche immer Gelegenheit, Deutsch zu sprechen.",
    "lv": "Otsin alati võimalust saksa keelt rääkida.",
    "level": "Sätze"
  },
  {
    "de": "Ist das Buch noch vorrätig?",
    "lv": "Kas see raamat on veel saadaval?",
    "level": "Sätze"
  },
  {
    "de": "Das Buch ist leider ausverkauft.",
    "lv": "Kahjuks on raamat välja müüdud.",
    "level": "Sätze"
  },
  {
    "de": "Wann erscheint die neue Auflage?",
    "lv": "Millal ilmub uus trükk?",
    "level": "Sätze"
  },
  {
    "de": "Womit kann ich Ihnen helfen?",
    "lv": "Millega saan aidata?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie ganz frische Eier?",
    "lv": "Kas teil on värskeid mune?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die?",
    "lv": "Kui palju need maksavad?",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu teuer.",
    "lv": "See on liiga kallis.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir ein halbes Kilo abwiegen?",
    "lv": "Kas te saate poole kilo maha kaaluda?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel muss ich zahlen?",
    "lv": "Kui palju ma pean maksma?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet das Kilo?",
    "lv": "Kui palju maksab kilogramm?",
    "level": "Sätze"
  },
  {
    "de": "Wiegen Sie mir bitte zwei Kilo ab.",
    "lv": "Kaaluge mulle palun kaks kilogrammi.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch Karotten?",
    "lv": "Kas teil on ka porgandeid?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie gutes Rindfleisch?",
    "lv": "Kas teil on head veiseliha?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir zwei Kilo Hackfleisch.",
    "lv": "Andke mulle kaks kilogrammi hakkliha.",
    "level": "Sätze"
  },
  {
    "de": "Ein Laib Brot, bitte, aber nicht zu knusprig.",
    "lv": "Üks leivapäts, palun, aga mitte liiga krõbe.",
    "level": "Sätze"
  },
  {
    "de": "Das Brot ist frisch gebacken.",
    "lv": "Leib on värskelt küpsetatud.",
    "level": "Sätze"
  },
  {
    "de": "Was für Obst haben Sie heute?",
    "lv": "Milliseid puuvilju teil täna on?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die Äpfel?",
    "lv": "Kui palju maksavad õunad?",
    "level": "Sätze"
  },
  {
    "de": "Dann nehme ich zwei Kilo Äpfel.",
    "lv": "Siis võtan kaks kilogrammi õunu.",
    "level": "Sätze"
  },
  {
    "de": "Die Birnen sind sehr teuer.",
    "lv": "Pirnid on väga kallid.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir alles nach Hause liefern?",
    "lv": "Kas te saate kõik koju tuua?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie Reis?",
    "lv": "Kas teil on riisi?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir bitte ein Kilo Reis.",
    "lv": "Andke mulle palun kilogramm riisi.",
    "level": "Sätze"
  },
  {
    "de": "Danke, diesmal nicht.",
    "lv": "Aitäh, seekord mitte.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet dieser Teppich?",
    "lv": "Kui palju maksab see vaip?",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Möbel in meine Wohnung liefern?",
    "lv": "Kas te saate mööbli minu korterisse toimetada?",
    "level": "Sätze"
  },
  {
    "de": "Bitte an der Kasse zahlen.",
    "lv": "Palun makske kassas.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, machen Sie die Rechnung.",
    "lv": "Kirjutage palun arve.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Meter?",
    "lv": "Kui palju maksab meeter?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Stoff gefällt mir.",
    "lv": "Mulle meeldib see riie.",
    "level": "Sätze"
  },
  {
    "de": "Schneiden Sie mir bitte drei Meter ab.",
    "lv": "Lõigake mulle palun kolm meetrit.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch andere Muster?",
    "lv": "Kas teil on ka teisi mustreid?",
    "level": "Sätze"
  },
  {
    "de": "Diese Farbe gefällt mir nicht.",
    "lv": "Mulle ei meeldi see värv.",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir eine hellere.",
    "lv": "Andke mulle heledam.",
    "level": "Sätze"
  },
  {
    "de": "Was kosten diese Socken?",
    "lv": "Kui palju maksavad need sokid?",
    "level": "Sätze"
  },
  {
    "de": "Welche Handschuhe wünschen Sie?",
    "lv": "Milliseid kindaid soovite?",
    "level": "Sätze"
  },
  {
    "de": "Die sind mir etwas zu eng.",
    "lv": "Need on mulle pisut liiga kitsad.",
    "level": "Sätze"
  },
  {
    "de": "So, nun passen sie gut.",
    "lv": "Nii, nüüd sobivad need hästi.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir einen guten Schneider empfehlen?",
    "lv": "Kas sa saad head rätsepat soovitada?",
    "level": "Sätze"
  },
  {
    "de": "Ich will einen Anzug bestellen.",
    "lv": "Tahan tellida ülikonna.",
    "level": "Sätze"
  },
  {
    "de": "Wann wird er fertig sein?",
    "lv": "Millal ta valmis saab?",
    "level": "Sätze"
  },
  {
    "de": "Der Anzug sitzt gut.",
    "lv": "Ülikond sobib hästi.",
    "level": "Sätze"
  },
  {
    "de": "Die Hose ist zu lang.",
    "lv": "Püksid on liiga pikad.",
    "level": "Sätze"
  },
  {
    "de": "Bitte reinigen und bügeln Sie ihn!",
    "lv": "Palun puhastage ja triikige see!",
    "level": "Sätze"
  },
  {
    "de": "Wann wird das Kleid fertig sein?",
    "lv": "Millal kleit valmis saab?",
    "level": "Sätze"
  },
  {
    "de": "Die Schuhe sind zu eng.",
    "lv": "Kingad on liiga kitsad.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Schuhe heute reparieren?",
    "lv": "Kas te saate täna kingad parandada?",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich die Schuhe abholen?",
    "lv": "Millal ma saan kingad kätte?",
    "level": "Sätze"
  },
  {
    "de": "Meine Armbanduhr funktioniert nicht.",
    "lv": "Minu käekell ei tööta.",
    "level": "Sätze"
  },
  {
    "de": "Sie geht fünf Minuten vor.",
    "lv": "See käib viis minutit ees.",
    "level": "Sätze"
  },
  {
    "de": "Bist du kurzsichtig oder weitsichtig?",
    "lv": "Kas sa oled lühinägelik või kaugelenägelik?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte eine Brille kaufen.",
    "lv": "Tahan prille osta.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie meine Brille reparieren?",
    "lv": "Kas te saate mu prillid ära parandada?",
    "level": "Sätze"
  },
  {
    "de": "Das dauert nur eine Viertelstunde.",
    "lv": "See kestab ainult veerand tundi.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist mir zu hoch.",
    "lv": "Hind on mulle liiga kõrge.",
    "level": "Sätze"
  },
  {
    "de": "Ich brauche zwei Fotos für meinen Pass.",
    "lv": "Mul on vaja kahte fotot passi jaoks.",
    "level": "Sätze"
  },
  {
    "de": "Bitte packen Sie es ein und schicken Sie es mir nach Hause.",
    "lv": "Palun pakkige see sisse ja saatke see mulle koju.",
    "level": "Sätze"
  },
  {
    "de": "Wir haben feste Preise.",
    "lv": "Meil on fikseeritud hinnad.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, fotografieren Sie mich.",
    "lv": "Palun tehke minust foto.",
    "level": "Sätze"
  },
  {
    "de": "Setzen Sie sich, schauen Sie gerade in die Kamera und bewegen Sie sich nicht!",
    "lv": "Istuge, vaadake otse kaamerasse ja ärge liikuge!",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich das Probebild sehen?",
    "lv": "Millal ma saan proovipilti näha?",
    "level": "Sätze"
  },
  {
    "de": "Wann sind die Fotos fertig?",
    "lv": "Millal fotod valmis saavad?",
    "level": "Sätze"
  },
  {
    "de": "Die Aufnahme ist gelungen.",
    "lv": "Foto õnnestus.",
    "level": "Sätze"
  },
  {
    "de": "Die Fotos sind gut geworden.",
    "lv": "Fotod õnnestusid hästi.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie das Foto auch vergrößern?",
    "lv": "Kas te saate ka fotot suurendada?",
    "level": "Sätze"
  },
  {
    "de": "Sind diese Steine echt?",
    "lv": "Kas need kivid on ehtsad?",
    "level": "Sätze"
  },
  {
    "de": "Ist das echtes Gold?",
    "lv": "Kas see on ehtne kuld?",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir bitte Trauringe.",
    "lv": "Näidake palun abielusõrmuseid.",
    "level": "Sätze"
  },
  {
    "de": "Der Ring ist mir etwas zu weit.",
    "lv": "Sõrmus on mulle pisut liiga suur.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann ihn enger machen.",
    "lv": "Ma saan seda kitsamaks teha.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Ring passt mir.",
    "lv": "See sõrmus sobib mulle.",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir schöne Geschenkideen.",
    "lv": "Näidake ilusaid kingiideid.",
    "level": "Sätze"
  },
  {
    "de": "Wie gefallen dir diese Ohrringe?",
    "lv": "Kuidas need kõrvarõngad sulle meeldivad?",
    "level": "Sätze"
  },
  {
    "de": "Diese Brosche ist wirklich schön.",
    "lv": "See sõlg on väga ilus.",
    "level": "Sätze"
  },
  {
    "de": "Der Stein ist ein Saphir.",
    "lv": "See kivi on safiir.",
    "level": "Sätze"
  },
  {
    "de": "Das ist kein echter Stein, das ist Glas.",
    "lv": "See ei ole ehtne kivi, see on klaas.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Armband kann ich Ihnen besonders empfehlen.",
    "lv": "Seda käevõru võin eriti soovitada.",
    "level": "Sätze"
  },
  {
    "de": "Es ist besonders schön gearbeitet.",
    "lv": "See on eriti peenelt valmistatud.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist nicht hoch.",
    "lv": "Hind ei ole kõrge.",
    "level": "Sätze"
  },
  {
    "de": "Bekomme ich die Schachtel gratis?",
    "lv": "Kas ma saan karbi tasuta?",
    "level": "Sätze"
  },
  {
    "de": "Alle Schmuckstücke sind gestempelt.",
    "lv": "Kõik ehted on templiga.",
    "level": "Sätze"
  },
  {
    "de": "Falls es meiner Frau nicht gefällt, kann ich es umtauschen?",
    "lv": "Kui mu naisele ei meeldi, kas ma saan vahetada?",
    "level": "Sätze"
  },
  {
    "de": "Natürlich, jederzeit.",
    "lv": "Muidugi, igal ajal.",
    "level": "Sätze"
  }
];

window.SENTENCE_ENTRIES = SENTENCE_ENTRIES;

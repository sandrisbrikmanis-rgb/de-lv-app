const SENTENCE_ENTRIES = [
  {
    "de": "Hüte dich davor!",
    "lv": "Varo sitä!",
    "level": "Sätze"
  },
  {
    "de": "Wenn nichts dazwischenkommt.",
    "lv": "Jos mitään ei tule väliin. • Jos kaikki menee suunnitellusti.",
    "level": "Sätze"
  },
  {
    "de": "Das kann ich mir denken!",
    "lv": "Sen voin kuvitella!",
    "level": "Sätze"
  },
  {
    "de": "Ist er denn krank?",
    "lv": "Onko hän sitten sairas?",
    "level": "Sätze"
  },
  {
    "de": "Was denn?",
    "lv": "No mitä?",
    "level": "Sätze"
  },
  {
    "de": "Desto mehr.",
    "lv": "Sitä enemmän.",
    "level": "Sätze"
  },
  {
    "de": "Je mehr, desto besser.",
    "lv": "Mitä enemmän, sitä parempi.",
    "level": "Sätze"
  },
  {
    "de": "Alles deutet auf Regen.",
    "lv": "Kaikki viittaa sateeseen.",
    "level": "Sätze"
  },
  {
    "de": "Damit ist mir wenig gedient.",
    "lv": "Siitä on minulle vain vähän hyötyä.",
    "level": "Sätze"
  },
  {
    "de": "Er ist dienstlich verhindert.",
    "lv": "Hän ei pääse tulemaan työesteen vuoksi.",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie doch!",
    "lv": "Puhukaa nyt!",
    "level": "Sätze"
  },
  {
    "de": "Es donnert.",
    "lv": "Ukkostaa.",
    "level": "Sätze"
  },
  {
    "de": "Doppelt so groß.",
    "lv": "Kaksi kertaa niin suuri.",
    "level": "Sätze"
  },
  {
    "de": "Von dort.",
    "lv": "Sieltä.",
    "level": "Sätze"
  },
  {
    "de": "Die Zeit drängt.",
    "lv": "Aika käy vähiin.",
    "level": "Sätze"
  },
  {
    "de": "Ihn drücken Sorgen.",
    "lv": "Häntä painavat huolet.",
    "level": "Sätze"
  },
  {
    "de": "Hast du das Buch durchgearbeitet?",
    "lv": "Oletko käynyt kirjan perusteellisesti läpi?",
    "level": "Sätze"
  },
  {
    "de": "Kein Durchgang!",
    "lv": "Läpikulku kielletty!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich Sie bitten?",
    "lv": "Saanko luvan?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin durstig.",
    "lv": "Minulla on jano.",
    "level": "Sätze"
  },
  {
    "de": "Eben das meine ich.",
    "lv": "Juuri sitä tarkoitan.",
    "level": "Sätze"
  },
  {
    "de": "Es ist ganz egal.",
    "lv": "Se on aivan sama.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie eigentlich?",
    "lv": "Mitä te oikeastaan haluatte?",
    "level": "Sätze"
  },
  {
    "de": "Eilt es mit dieser Sache?",
    "lv": "Onko tällä asialla kiire?",
    "level": "Sätze"
  },
  {
    "de": "Eilt sehr!",
    "lv": "Erittäin kiireellinen!",
    "level": "Sätze"
  },
  {
    "de": "Ich habe es eilig.",
    "lv": "Minulla on kiire.",
    "level": "Sätze"
  },
  {
    "de": "Du bildest dir nur ein, krank zu sein.",
    "lv": "Kuvittelet vain olevasi sairas.",
    "level": "Sätze"
  },
  {
    "de": "Was fällt dir ein?",
    "lv": "Mitä oikein kuvittelet? • Mitä sinulle tulee mieleen?",
    "level": "Sätze"
  },
  {
    "de": "Es war einmal.",
    "lv": "Olipa kerran.",
    "level": "Sätze"
  },
  {
    "de": "Steigen Sie bitte ein!",
    "lv": "Olkaa hyvä ja nouskaa kyytiin!",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie ein!",
    "lv": "Käykää sisään!",
    "level": "Sätze"
  },
  {
    "de": "Einzelnes hat mir dort gefallen.",
    "lv": "Pidin siellä joistakin asioista.",
    "level": "Sätze"
  },
  {
    "de": "Es empfiehlt sich.",
    "lv": "Se on suositeltavaa.",
    "level": "Sätze"
  },
  {
    "de": "Diese Flasche enthält Essig.",
    "lv": "Tässä pullossa on etikkaa.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldigen Sie bitte!",
    "lv": "Suokaa anteeksi!",
    "level": "Sätze"
  },
  {
    "de": "Entweder ... oder ...",
    "lv": "Joko... tai...",
    "level": "Sätze"
  },
  {
    "de": "Wer war der Erste?",
    "lv": "Kuka oli ensimmäinen?",
    "level": "Sätze"
  },
  {
    "de": "Wer fehlt heute?",
    "lv": "Kuka on tänään poissa?",
    "level": "Sätze"
  },
  {
    "de": "Was fehlt dir?",
    "lv": "Mikä sinua vaivaa?",
    "level": "Sätze"
  },
  {
    "de": "Wie heißen Sie?",
    "lv": "Mikä teidän nimenne on?",
    "level": "Sätze"
  },
  {
    "de": "Was soll das heißen?",
    "lv": "Mitä tämä on tarkoittavinaan?",
    "level": "Sätze"
  },
  {
    "de": "Bitte treten Sie näher heran!",
    "lv": "Olkaa hyvä ja tulkaa lähemmäs!",
    "level": "Sätze"
  },
  {
    "de": "Heraus mit der Sprache!",
    "lv": "Puhu suusi puhtaaksi! • Kerro jo!",
    "level": "Sätze"
  },
  {
    "de": "im Herbst",
    "lv": "syksyllä",
    "level": "Sätze"
  },
  {
    "de": "Meine Herrschaften!",
    "lv": "Hyvät naiset ja herrat!",
    "level": "Sätze"
  },
  {
    "de": "von heute an",
    "lv": "tästä päivästä alkaen",
    "level": "Sätze"
  },
  {
    "de": "heute früh",
    "lv": "tänä aamuna",
    "level": "Sätze"
  },
  {
    "de": "heute Nacht",
    "lv": "tänä yönä • viime yönä",
    "level": "Sätze"
  },
  {
    "de": "Zu Hilfe!",
    "lv": "Apua!",
    "level": "Sätze"
  },
  {
    "de": "Ich lerne jeden Tag Deutsch.",
    "lv": "Opiskelen saksaa joka päivä.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das bitte wiederholen?",
    "lv": "Voisitko toistaa sen?",
    "level": "Sätze"
  },
  {
    "de": "Wir treffen uns am Bahnhof.",
    "lv": "Tapaamme rautatieasemalla.",
    "level": "Sätze"
  },
  {
    "de": "Ich stimme dir teilweise zu.",
    "lv": "Olen osittain samaa mieltä kanssasi.",
    "level": "Sätze"
  },
  {
    "de": "Diese Entscheidung hat weitreichende Folgen.",
    "lv": "Tällä päätöksellä on kauaskantoisia seurauksia.",
    "level": "Sätze"
  },
  {
    "de": "Man sollte mehrere Perspektiven berücksichtigen.",
    "lv": "Useita näkökulmia pitäisi ottaa huomioon.",
    "level": "Sätze"
  },
  {
    "de": "Könnten Sie das näher erläutern?",
    "lv": "Voisitteko selittää sen tarkemmin?",
    "level": "Sätze"
  },
  {
    "de": "Was mich anbelangt, ...",
    "lv": "Mitä minuun tulee,...",
    "level": "Sätze"
  },
  {
    "de": "Wie alt sind Sie?",
    "lv": "Kuinka vanha olette?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zwanzig Jahre alt.",
    "lv": "Olen kaksikymmentä vuotta vanha.",
    "level": "Sätze"
  },
  {
    "de": "Von heute an.",
    "lv": "Tästä päivästä alkaen.",
    "level": "Sätze"
  },
  {
    "de": "Von jetzt an.",
    "lv": "Tästä lähtien.",
    "level": "Sätze"
  },
  {
    "de": "Anders geht es nicht.",
    "lv": "Muuten se ei onnistu.",
    "level": "Sätze"
  },
  {
    "de": "Rufen Sie mich an.",
    "lv": "Soittakaa minulle.",
    "level": "Sätze"
  },
  {
    "de": "Bitte stellen Sie das Radio ab.",
    "lv": "Sammuttakaa radio, kiitos.",
    "level": "Sätze"
  },
  {
    "de": "Achte bitte auf den Verkehr.",
    "lv": "Ole hyvä ja varo liikennettä.",
    "level": "Sätze"
  },
  {
    "de": "Darauf musst du achten.",
    "lv": "Siihen sinun täytyy kiinnittää huomiota.",
    "level": "Sätze"
  },
  {
    "de": "Heute mache ich es anders.",
    "lv": "Tänään teen sen toisin.",
    "level": "Sätze"
  },
  {
    "de": "Wir warten auf den Bus.",
    "lv": "Odotamme bussia.",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt allein.",
    "lv": "Hän asuu yksin.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Ausbildung absolviert.",
    "lv": "Olen suorittanut koulutukseni. • Olen saanut opintoni päätökseen.",
    "level": "Sätze"
  },
  {
    "de": "Ich warte den Regen ab.",
    "lv": "Odotan, että sade lakkaa.",
    "level": "Sätze"
  },
  {
    "de": "Er arbeitet in der Verkaufsabteilung.",
    "lv": "Hän työskentelee myyntiosastolla.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin allergisch gegen Katzen.",
    "lv": "Olen allerginen kissoille.",
    "level": "Sätze"
  },
  {
    "de": "Andererseits verstehe ich ihn.",
    "lv": "Toisaalta ymmärrän häntä.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Situation analysiert.",
    "lv": "Olen analysoinut tilanteen.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat meinen Vorschlag akzeptiert.",
    "lv": "Hän hyväksyi ehdotukseni.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte das genauer analysieren.",
    "lv": "Haluaisin analysoida tätä tarkemmin.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte den Vertrag ändern.",
    "lv": "Haluaisin muuttaa sopimusta.",
    "level": "Sätze"
  },
  {
    "de": "Er ändert ständig seine Meinung.",
    "lv": "Hän muuttaa jatkuvasti mielipidettään.",
    "level": "Sätze"
  },
  {
    "de": "Ähnliche Probleme hatten wir schon früher.",
    "lv": "Samanlaisia ongelmia meillä on ollut jo aiemminkin.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ahnung!",
    "lv": "Ei aavistustakaan!",
    "level": "Sätze"
  },
  {
    "de": "Hör auf zu jammern.",
    "lv": "Lakkaa valittamasta.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Kleid ist stilvoll und konservativ.",
    "lv": "Tämä mekko on tyylikkään konservatiivinen.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre gerne Akkordeonmusik.",
    "lv": "Kuuntelen mielelläni harmonikkamusiikkia.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das Gerät anklicken?",
    "lv": "Voitko napsauttaa laitetta?",
    "level": "Sätze"
  },
  {
    "de": "Bitte öffne die Datei und klicke darauf.",
    "lv": "Avaa tiedosto ja napsauta sitä, kiitos.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe einen Unfall gehabt.",
    "lv": "Olen joutunut onnettomuuteen.",
    "level": "Sätze"
  },
  {
    "de": "Wir laufen zum Bahnhof.",
    "lv": "Kävelemme rautatieasemalle.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schalte den Fernseher an.",
    "lv": "Laita televisio päälle, kiitos.",
    "level": "Sätze"
  },
  {
    "de": "Mein Computer ist abgestürzt.",
    "lv": "Tietokoneeni on kaatunut.",
    "level": "Sätze"
  },
  {
    "de": "Am Wochenende gehe ich angeln.",
    "lv": "Viikonloppuna lähden kalaan.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe den Anruf verpasst.",
    "lv": "En ehtinyt vastata puheluun.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mich später anrufen?",
    "lv": "Voitko soittaa minulle myöhemmin?",
    "level": "Sätze"
  },
  {
    "de": "Bitte nimm meinen Vorschlag an.",
    "lv": "Ole kiltti ja hyväksy ehdotukseni.",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme dein Angebot an.",
    "lv": "Otan tarjouksesi vastaan.",
    "level": "Sätze"
  },
  {
    "de": "Er nahm die Einladung an.",
    "lv": "Hän otti kutsun vastaan.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Angst vor Spinnen.",
    "lv": "Pelkään hämähäkkejä.",
    "level": "Sätze"
  },
  {
    "de": "Keine Angst, alles wird gut.",
    "lv": "Älä pelkää, kaikki järjestyy.",
    "level": "Sätze"
  },
  {
    "de": "Anklang finden.",
    "lv": "Saada vastakaikua. • Saavuttaa suosiota.",
    "level": "Sätze"
  },
  {
    "de": "Es kommt darauf an.",
    "lv": "Se riippuu tilanteesta.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Anlass.",
    "lv": "Tämän johdosta.",
    "level": "Sätze"
  },
  {
    "de": "Nehmen wir an, dass ...",
    "lv": "Oletetaan, että...",
    "level": "Sätze"
  },
  {
    "de": "Was hast du da angerichtet?",
    "lv": "Mitä sinä olet mennyt tekemään?",
    "level": "Sätze"
  },
  {
    "de": "Bis ans Ende.",
    "lv": "Loppuun asti.",
    "level": "Sätze"
  },
  {
    "de": "Du glaubst mir anscheinend nicht.",
    "lv": "Et näköjään usko minua.",
    "level": "Sätze"
  },
  {
    "de": "Meiner Ansicht nach ...",
    "lv": "Minun mielestäni...",
    "level": "Sätze"
  },
  {
    "de": "Stell dich nicht so an!",
    "lv": "Älä nyt tee siitä numeroa!",
    "level": "Sätze"
  },
  {
    "de": "An die Arbeit gehen.",
    "lv": "Ryhtyä töihin.",
    "level": "Sätze"
  },
  {
    "de": "Außer Atem sein.",
    "lv": "Olla hengästynyt.",
    "level": "Sätze"
  },
  {
    "de": "Guten Appetit!",
    "lv": "Hyvää ruokahalua!",
    "level": "Sätze"
  },
  {
    "de": "In einem Atemzug.",
    "lv": "Yhdellä henkäyksellä.",
    "level": "Sätze"
  },
  {
    "de": "Auf jeden Fall.",
    "lv": "Joka tapauksessa.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal war alles still.",
    "lv": "Yhtäkkiä kaikki hiljeni.",
    "level": "Sätze"
  },
  {
    "de": "Bitte mach die Tür auf!",
    "lv": "Avaathan oven!",
    "level": "Sätze"
  },
  {
    "de": "Er hat den Kredit aufgenommen.",
    "lv": "Hän otti lainan.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen heute aufräumen.",
    "lv": "Meidän täytyy siivota tänään.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre jetzt auf.",
    "lv": "Lopetan nyt.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schon auf.",
    "lv": "Hän on jo jalkeilla.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen das Treffen verschieben.",
    "lv": "Meidän täytyy siirtää tapaaminen.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat mich aufgeregt.",
    "lv": "Hän ärsytti minua.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal.",
    "lv": "Yhtäkkiä.",
    "level": "Sätze"
  },
  {
    "de": "Auf der Stelle.",
    "lv": "Heti paikalla.",
    "level": "Sätze"
  },
  {
    "de": "Für den Schaden aufkommen.",
    "lv": "Korvata vahinko.",
    "level": "Sätze"
  },
  {
    "de": "Bitte die Tür auf!",
    "lv": "Ovi auki, kiitos!",
    "level": "Sätze"
  },
  {
    "de": "Aufrecht sitzen.",
    "lv": "Istua suorassa.",
    "level": "Sätze"
  },
  {
    "de": "Er ist auf.",
    "lv": "Hän on jalkeilla.",
    "level": "Sätze"
  },
  {
    "de": "Alle Kräfte aufwenden.",
    "lv": "Käyttää kaikki voimansa.",
    "level": "Sätze"
  },
  {
    "de": "Viel Mühe aufwenden.",
    "lv": "Nähdä paljon vaivaa.",
    "level": "Sätze"
  },
  {
    "de": "Geh mir aus den Augen!",
    "lv": "Häivy silmistäni!",
    "level": "Sätze"
  },
  {
    "de": "Unter vier Augen.",
    "lv": "Kahden kesken.",
    "level": "Sätze"
  },
  {
    "de": "Aus Mangel an Zeit.",
    "lv": "Ajan puutteen vuoksi.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Grunde.",
    "lv": "Tästä syystä.",
    "level": "Sätze"
  },
  {
    "de": "Alle außer dir.",
    "lv": "Kaikki paitsi sinä.",
    "level": "Sätze"
  },
  {
    "de": "Auf Äußerlichkeiten Wert legen.",
    "lv": "Panna painoa ulkonäölle.",
    "level": "Sätze"
  },
  {
    "de": "Im äußersten Fall.",
    "lv": "Pahimmassa tapauksessa.",
    "level": "Sätze"
  },
  {
    "de": "Äußerst wichtig.",
    "lv": "Äärimmäisen tärkeä.",
    "level": "Sätze"
  },
  {
    "de": "Aussicht auf die See.",
    "lv": "Näköala merelle.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gute Aussichten.",
    "lv": "Hänellä on hyvät mahdollisuudet.",
    "level": "Sätze"
  },
  {
    "de": "Wie wird dieses Wort ausgesprochen?",
    "lv": "Miten tämä sana äännetään?",
    "level": "Sätze"
  },
  {
    "de": "Sein Beileid aussprechen.",
    "lv": "Esittää osanottonsa.",
    "level": "Sätze"
  },
  {
    "de": "Wann wurden die Meisterschaftskämpfe ausgetragen?",
    "lv": "Milloin mestaruuskilpailut pidettiin?",
    "level": "Sätze"
  },
  {
    "de": "Welchen Beruf üben Sie aus?",
    "lv": "Mikä teidän ammattinne on?",
    "level": "Sätze"
  },
  {
    "de": "Einfluss ausüben.",
    "lv": "Käyttää vaikutusvaltaa.",
    "level": "Sätze"
  },
  {
    "de": "Auswärts essen.",
    "lv": "Syödä ulkona.",
    "level": "Sätze"
  },
  {
    "de": "Per Bahn.",
    "lv": "Rautateitse.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Bahn.",
    "lv": "Junalla.",
    "level": "Sätze"
  },
  {
    "de": "Möglichst bald.",
    "lv": "Mahdollisimman pian.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist Angst und bange.",
    "lv": "Minua pelottaa kovasti.",
    "level": "Sätze"
  },
  {
    "de": "Auf die lange Bank schieben.",
    "lv": "Lykätä tuonnemmaksi. • Pitkittää asiaa.",
    "level": "Sätze"
  },
  {
    "de": "Bar zahlen.",
    "lv": "Maksaa käteisellä.",
    "level": "Sätze"
  },
  {
    "de": "Erz bauen.",
    "lv": "Louhia malmia.",
    "level": "Sätze"
  },
  {
    "de": "Mist bauen.",
    "lv": "Tehdä tyhmyyksiä.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin beauftragt.",
    "lv": "Olen saanut tehtävän.",
    "level": "Sätze"
  },
  {
    "de": "Nach Bedarf.",
    "lv": "Tarpeen mukaan.",
    "level": "Sätze"
  },
  {
    "de": "Ich bedauere ihn.",
    "lv": "Säälin häntä.",
    "level": "Sätze"
  },
  {
    "de": "Was bedeutet dieses Wort?",
    "lv": "Mitä tämä sana tarkoittaa?",
    "level": "Sätze"
  },
  {
    "de": "Unter der Bedingung, dass ...",
    "lv": "Sillä ehdolla, että...",
    "level": "Sätze"
  },
  {
    "de": "Sie sieht bedrückt aus.",
    "lv": "Hän näyttää masentuneelta.",
    "level": "Sätze"
  },
  {
    "de": "Hinweise befolgen.",
    "lv": "Noudattaa ohjeita.",
    "level": "Sätze"
  },
  {
    "de": "Befehle befolgen.",
    "lv": "Totella käskyjä.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Post befördern.",
    "lv": "Lähettää postitse.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin begierig zu wissen.",
    "lv": "Haluan kovasti tietää.",
    "level": "Sätze"
  },
  {
    "de": "Zu Beginn.",
    "lv": "Aluksi.",
    "level": "Sätze"
  },
  {
    "de": "Am Beginn.",
    "lv": "Alussa.",
    "level": "Sätze"
  },
  {
    "de": "Bei Beginn.",
    "lv": "Heti alussa.",
    "level": "Sätze"
  },
  {
    "de": "In Begleitung.",
    "lv": "Seurassa.",
    "level": "Sätze"
  },
  {
    "de": "Mit seiner Begleitung.",
    "lv": "Seuralaisensa kanssa.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schwer von Begriff.",
    "lv": "Hän on hidas tajuamaan. • Hän on hidasjärkinen.",
    "level": "Sätze"
  },
  {
    "de": "Im Gedächtnis behalten.",
    "lv": "Muistaa. • Pitää mielessä.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tisch.",
    "lv": "Pöydässä.",
    "level": "Sätze"
  },
  {
    "de": "Bei Sinnen sein.",
    "lv": "Olla täysissä järjissään.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tage.",
    "lv": "Päiväsaikaan.",
    "level": "Sätze"
  },
  {
    "de": "Bei weitem nicht so.",
    "lv": "Ei läheskään niin.",
    "level": "Sätze"
  },
  {
    "de": "Alle beide.",
    "lv": "Molemmat.",
    "level": "Sätze"
  },
  {
    "de": "Stürmischer Beifall brach los.",
    "lv": "Yleisö puhkesi myrskyisiin suosionosoituksiin.",
    "level": "Sätze"
  },
  {
    "de": "Beifall finden.",
    "lv": "Saada hyväksyntää.",
    "level": "Sätze"
  },
  {
    "de": "Beileid aussprechen.",
    "lv": "Esittää surunvalittelut.",
    "level": "Sätze"
  },
  {
    "de": "Auf eigenen Beinen stehen.",
    "lv": "Seistä omilla jaloillaan.",
    "level": "Sätze"
  },
  {
    "de": "Zum Beispiel.",
    "lv": "Esimerkiksi.",
    "level": "Sätze"
  },
  {
    "de": "Beistand leisten.",
    "lv": "Auttaa. • Antaa tukea.",
    "level": "Sätze"
  },
  {
    "de": "Beitrag leisten.",
    "lv": "Antaa oma panoksensa.",
    "level": "Sätze"
  },
  {
    "de": "Jemandes Bekanntschaft machen.",
    "lv": "Tutustua johonkuhun.",
    "level": "Sätze"
  },
  {
    "de": "Bekanntschaft anknüpfen.",
    "lv": "Tutustua. • Solmia suhteita.",
    "level": "Sätze"
  },
  {
    "de": "Belegte Brötchen.",
    "lv": "Täytetyt sämpylät.",
    "level": "Sätze"
  },
  {
    "de": "Nach Ihrem Belieben.",
    "lv": "Mielenne mukaan.",
    "level": "Sätze"
  },
  {
    "de": "Zu jeder beliebigen Zeit.",
    "lv": "Milloin tahansa.",
    "level": "Sätze"
  },
  {
    "de": "Schweigen beobachten.",
    "lv": "Noudattaa hiljaisuutta.",
    "level": "Sätze"
  },
  {
    "de": "Zur Bequemlichkeit.",
    "lv": "Mukavuuden vuoksi.",
    "level": "Sätze"
  },
  {
    "de": "Bereit sein.",
    "lv": "Olla valmis. • Olla halukas.",
    "level": "Sätze"
  },
  {
    "de": "Unfallopfer bergen.",
    "lv": "Pelastaa onnettomuuden uhreja.",
    "level": "Sätze"
  },
  {
    "de": "Bericht erstatten.",
    "lv": "Raportoida. • Antaa selostus.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind besetzt.",
    "lv": "Kaikki paikat on varattu.",
    "level": "Sätze"
  },
  {
    "de": "Neue Besen kehren gut.",
    "lv": "Uusi luuta lakaisee hyvin.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt ein Haus.",
    "lv": "Hän omistaa talon.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt viel Mut.",
    "lv": "Hänellä on paljon rohkeutta.",
    "level": "Sätze"
  },
  {
    "de": "Desto besser.",
    "lv": "Sitä parempi.",
    "level": "Sätze"
  },
  {
    "de": "Gute Besserung!",
    "lv": "Pikaista paranemista!",
    "level": "Sätze"
  },
  {
    "de": "Beim besten Willen.",
    "lv": "Parhaalla tahdollakaan.",
    "level": "Sätze"
  },
  {
    "de": "Am besten.",
    "lv": "Parhaiten.",
    "level": "Sätze"
  },
  {
    "de": "Es besteht Zweifel.",
    "lv": "On epäilyksiä.",
    "level": "Sätze"
  },
  {
    "de": "Seine Aufgabe besteht darin ...",
    "lv": "Hänen tehtävänsä on...",
    "level": "Sätze"
  },
  {
    "de": "Grüße bestellen.",
    "lv": "Välittää terveisiä.",
    "level": "Sätze"
  },
  {
    "de": "Ganz bestimmt.",
    "lv": "Aivan varmasti.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch kommen.",
    "lv": "Tulla kylään.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch sein.",
    "lv": "Olla kylässä.",
    "level": "Sätze"
  },
  {
    "de": "Oft Konzerte besuchen.",
    "lv": "Käydä usein konserteissa.",
    "level": "Sätze"
  },
  {
    "de": "Welche Schule hat er besucht?",
    "lv": "Missä koulussa hän kävi?",
    "level": "Sätze"
  },
  {
    "de": "In Betracht ziehen.",
    "lv": "Ottaa huomioon. • Harkita.",
    "level": "Sätze"
  },
  {
    "de": "Außer Betracht lassen.",
    "lv": "Jättää huomiotta.",
    "level": "Sätze"
  },
  {
    "de": "Er betreibt ein Hotel.",
    "lv": "Hän pitää hotellia.",
    "level": "Sätze"
  },
  {
    "de": "Alle beiden.",
    "lv": "Molemmat.",
    "level": "Sätze"
  },
  {
    "de": "Alles bezahlen.",
    "lv": "Maksaa kaikki.",
    "level": "Sätze"
  },
  {
    "de": "In Bezug auf etwas.",
    "lv": "Jonkin suhteen.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön.",
    "lv": "Ole hyvä.",
    "level": "Sätze"
  },
  {
    "de": "Wie bitte?",
    "lv": "Anteeksi kuinka?",
    "level": "Sätze"
  },
  {
    "de": "Bitte sehr.",
    "lv": "Ole hyvä vain.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe eine Bitte an Sie.",
    "lv": "Minulla on teille pyyntö.",
    "level": "Sätze"
  },
  {
    "de": "Trompete blasen.",
    "lv": "Soittaa trumpettia.",
    "level": "Sätze"
  },
  {
    "de": "In einem Buch blättern.",
    "lv": "Selata kirjaa.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßen Füßen.",
    "lv": "Paljain jaloin.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßem Auge.",
    "lv": "Paljaalla silmällä.",
    "level": "Sätze"
  },
  {
    "de": "Danke für die Blumen!",
    "lv": "Kiitos kohteliaisuudesta!",
    "level": "Sätze"
  },
  {
    "de": "Alles in Butter.",
    "lv": "Kaikki mallillaan.",
    "level": "Sätze"
  },
  {
    "de": "Bitte checken.",
    "lv": "Pyydetään tarkistamaan.",
    "level": "Sätze"
  },
  {
    "de": "Da ist er!",
    "lv": "Tuossa hän on!",
    "level": "Sätze"
  },
  {
    "de": "Alles spricht dafür.",
    "lv": "Kaikki puhuu sen puolesta.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann nichts dafür.",
    "lv": "Se ei ole minun syyni.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin dagegen.",
    "lv": "Olen sitä vastaan.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe nichts dagegen.",
    "lv": "Minulla ei ole mitään sitä vastaan.",
    "level": "Sätze"
  },
  {
    "de": "Von daheim.",
    "lv": "Kotoa.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Dame ziehen.",
    "lv": "Siirtää kuningatarta.",
    "level": "Sätze"
  },
  {
    "de": "Es dämmert.",
    "lv": "Hämärtää. • Sarastaa.",
    "level": "Sätze"
  },
  {
    "de": "Danke schön!",
    "lv": "Kiitos paljon!",
    "level": "Sätze"
  },
  {
    "de": "Dann und wann.",
    "lv": "Silloin tällöin.",
    "level": "Sätze"
  },
  {
    "de": "Darauf kannst du dich verlassen.",
    "lv": "Siihen voit luottaa.",
    "level": "Sätze"
  },
  {
    "de": "Daraus wird nichts.",
    "lv": "Siitä ei tule mitään.",
    "level": "Sätze"
  },
  {
    "de": "So dass ...",
    "lv": "Niin että...",
    "level": "Sätze"
  },
  {
    "de": "Für wen halten Sie mich?",
    "lv": "Kenenä te minua pidätte?",
    "level": "Sätze"
  },
  {
    "de": "Hände weg!",
    "lv": "Kädet irti!",
    "level": "Sätze"
  },
  {
    "de": "Lass den Kopf nicht hängen!",
    "lv": "Älä masennu!",
    "level": "Sätze"
  },
  {
    "de": "zu Hause",
    "lv": "kotona",
    "level": "Sätze"
  },
  {
    "de": "nach Hause gehen",
    "lv": "mennä kotiin",
    "level": "Sätze"
  },
  {
    "de": "von Haus aus",
    "lv": "alun perin • luonnostaan",
    "level": "Sätze"
  },
  {
    "de": "Meinen herzlichsten Glückwunsch!",
    "lv": "Sydämelliset onnitteluni!",
    "level": "Sätze"
  },
  {
    "de": "Seien Sie so gut!",
    "lv": "Olkaa niin ystävällinen!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie die Güte!",
    "lv": "Olkaa niin hyvä!",
    "level": "Sätze"
  },
  {
    "de": "Was hast du?",
    "lv": "Mikä sinulla on?",
    "level": "Sätze"
  },
  {
    "de": "Gestatten Sie bitte!",
    "lv": "Jos sallitte!",
    "level": "Sätze"
  },
  {
    "de": "Ist es gestattet zu rauchen?",
    "lv": "Saako täällä tupakoida?",
    "level": "Sätze"
  },
  {
    "de": "Ich muss gestehen, dass ...",
    "lv": "Minun täytyy myöntää, että...",
    "level": "Sätze"
  },
  {
    "de": "gestern früh",
    "lv": "eilen aamulla",
    "level": "Sätze"
  },
  {
    "de": "gestern Abend",
    "lv": "eilen illalla",
    "level": "Sätze"
  },
  {
    "de": "Es ist mir gleichgültig, ob ...",
    "lv": "Minulle on yhdentekevää, onko...",
    "level": "Sätze"
  },
  {
    "de": "Was ist geschehen?",
    "lv": "Mitä on tapahtunut?",
    "level": "Sätze"
  },
  {
    "de": "Mach keine Geschichten!",
    "lv": "Älä tee tyhmyyksiä!",
    "level": "Sätze"
  },
  {
    "de": "Geschweige denn ...",
    "lv": "Saati sitten...",
    "level": "Sätze"
  },
  {
    "de": "Gehen Sie geradeaus!",
    "lv": "Menkää suoraan eteenpäin!",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es Ihnen?",
    "lv": "Mitä teille kuuluu?",
    "level": "Sätze"
  },
  {
    "de": "Frag ihn gelegentlich, ob ...",
    "lv": "Kysy häneltä tilaisuuden tullen, onko...",
    "level": "Sätze"
  },
  {
    "de": "morgen früh",
    "lv": "huomenna aamulla",
    "level": "Sätze"
  },
  {
    "de": "im Frühling",
    "lv": "keväällä",
    "level": "Sätze"
  },
  {
    "de": "Was gibt’s Neues?",
    "lv": "Mitä uutta?",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Brief folgt, dass ...",
    "lv": "Tästä kirjeestä käy ilmi, että...",
    "level": "Sätze"
  },
  {
    "de": "Fahre fort!",
    "lv": "Jatka!",
    "level": "Sätze"
  },
  {
    "de": "Er ist kein Freund von ...",
    "lv": "Hän ei pidä...",
    "level": "Sätze"
  },
  {
    "de": "Es erwies sich, dass ...",
    "lv": "Osoittautui, että...",
    "level": "Sätze"
  },
  {
    "de": "Gedenkst du meiner?",
    "lv": "Muistatko minua? • Ajatteletko minua?",
    "level": "Sätze"
  },
  {
    "de": "im Winter",
    "lv": "talvella",
    "level": "Sätze"
  },
  {
    "de": "Welcher Jahrgang sind Sie?",
    "lv": "Minä vuonna olette syntynyt?",
    "level": "Sätze"
  },
  {
    "de": "Es jammert mich zu sehen ...",
    "lv": "Minua surettaa nähdä...",
    "level": "Sätze"
  },
  {
    "de": "je mehr, desto besser",
    "lv": "mitä enemmän, sitä parempi",
    "level": "Sätze"
  },
  {
    "de": "bis jetzt",
    "lv": "tähän asti",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich zum Bahnhof?",
    "lv": "Miten pääsen rautatieasemalle?",
    "level": "Sätze"
  },
  {
    "de": "Komm her!",
    "lv": "Tule tänne!",
    "level": "Sätze"
  },
  {
    "de": "Könnte ich Frau N. sprechen?",
    "lv": "Voisinko puhua rouva N:n kanssa?",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das?",
    "lv": "Paljonko tämä maksaa?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange dauert die Vorstellung?",
    "lv": "Kuinka kauan esitys kestää?",
    "level": "Sätze"
  },
  {
    "de": "Lass das!",
    "lv": "Lopeta! • Anna olla!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich in Ruhe!",
    "lv": "Jätä minut rauhaan!",
    "level": "Sätze"
  },
  {
    "de": "Lassen Sie mich Ihnen helfen!",
    "lv": "Sallikaa minun auttaa teitä!",
    "level": "Sätze"
  },
  {
    "de": "Lasst uns gehen!",
    "lv": "Mennään!",
    "level": "Sätze"
  },
  {
    "de": "Na, wie läufts?",
    "lv": "No, miten menee?",
    "level": "Sätze"
  },
  {
    "de": "Es lebe!",
    "lv": "Eläköön!",
    "level": "Sätze"
  },
  {
    "de": "Leben Sie wohl!",
    "lv": "Voikaa hyvin! • Hyvästi!",
    "level": "Sätze"
  },
  {
    "de": "Was ist los?",
    "lv": "Mikä hätänä?",
    "level": "Sätze"
  },
  {
    "de": "Der Job ist anstrengend.",
    "lv": "Työ on raskas.",
    "level": "Sätze"
  },
  {
    "de": "Das war ein anstrengender Tag.",
    "lv": "Se oli väsyttävä päivä.",
    "level": "Sätze"
  },
  {
    "de": "Deutsch lernen kann anstrengend sein.",
    "lv": "Saksan opiskelu voi olla raskasta.",
    "level": "Sätze"
  },
  {
    "de": "Er verlangt eine Erklärung.",
    "lv": "Hän vaatii selitystä.",
    "level": "Sätze"
  },
  {
    "de": "Der Verkäufer verlangt zu viel Geld.",
    "lv": "Myyjä pyytää liikaa rahaa.",
    "level": "Sätze"
  },
  {
    "de": "Das Gesetz verlangt es so.",
    "lv": "Laki vaatii niin.",
    "level": "Sätze"
  },
  {
    "de": "Das ist gar nicht so schwer.",
    "lv": "Se ei ole lainkaan niin vaikeaa.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe gar kein Geld.",
    "lv": "Minulla ei ole lainkaan rahaa.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gar nichts gesagt.",
    "lv": "Hän ei sanonut yhtään mitään.",
    "level": "Sätze"
  },
  {
    "de": "Der Hund ist los.",
    "lv": "Koira on irti.",
    "level": "Sätze"
  },
  {
    "de": "Hier ist viel los.",
    "lv": "Täällä tapahtuu paljon.",
    "level": "Sätze"
  },
  {
    "de": "Halt die Luft an!",
    "lv": "Ole hiljaa! • Älä liioittele!",
    "level": "Sätze"
  },
  {
    "de": "Was machst du?",
    "lv": "Mitä teet?",
    "level": "Sätze"
  },
  {
    "de": "Sag mal!",
    "lv": "Kerropa!",
    "level": "Sätze"
  },
  {
    "de": "Was meinen Sie damit?",
    "lv": "Mitä tarkoitatte sillä?",
    "level": "Sätze"
  },
  {
    "de": "Wir gehen mit Ihnen.",
    "lv": "Tulemme teidän kanssanne.",
    "level": "Sätze"
  },
  {
    "de": "Ich fahre mit der Eisenbahn.",
    "lv": "Matkustan junalla.",
    "level": "Sätze"
  },
  {
    "de": "am Mittwoch",
    "lv": "keskiviikkona",
    "level": "Sätze"
  },
  {
    "de": "Es mag sein.",
    "lv": "Voi olla.",
    "level": "Sätze"
  },
  {
    "de": "Ich mag das nicht.",
    "lv": "En pidä siitä.",
    "level": "Sätze"
  },
  {
    "de": "am Montag",
    "lv": "maanantaina",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen!",
    "lv": "Hyvää huomenta!",
    "level": "Sätze"
  },
  {
    "de": "am Morgen",
    "lv": "aamulla",
    "level": "Sätze"
  },
  {
    "de": "Gute Nacht!",
    "lv": "Hyvää yötä!",
    "level": "Sätze"
  },
  {
    "de": "Nehmen Sie Platz!",
    "lv": "Istukaa!",
    "level": "Sätze"
  },
  {
    "de": "Letzte Neuheit!",
    "lv": "Viimeisin uutuus!",
    "level": "Sätze"
  },
  {
    "de": "Nicht wahr?",
    "lv": "Eikö totta?",
    "level": "Sätze"
  },
  {
    "de": "Nicht doch!",
    "lv": "Ei toki! • Älä nyt!",
    "level": "Sätze"
  },
  {
    "de": "Nun endlich!",
    "lv": "No vihdoinkin!",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das?",
    "lv": "Mitä hyötyä siitä on?",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das alles?",
    "lv": "Mitä hyötyä tästä kaikesta on?",
    "level": "Sätze"
  },
  {
    "de": "Parken verboten!",
    "lv": "Pysäköinti kielletty!",
    "level": "Sätze"
  },
  {
    "de": "Nicht parken!",
    "lv": "Ei pysäköintiä!",
    "level": "Sätze"
  },
  {
    "de": "Er hat Recht.",
    "lv": "Hän on oikeassa.",
    "level": "Sätze"
  },
  {
    "de": "Wovon ist die Rede?",
    "lv": "Mistä on kyse?",
    "level": "Sätze"
  },
  {
    "de": "Davon kann keine Rede sein.",
    "lv": "Siitä ei voi olla puhettakaan.",
    "level": "Sätze"
  },
  {
    "de": "Glückliche Reise!",
    "lv": "Hyvää matkaa!",
    "level": "Sätze"
  },
  {
    "de": "Mir reißt die Geduld.",
    "lv": "Kärsivällisyyteni loppuu.",
    "level": "Sätze"
  },
  {
    "de": "Man sagt, dass ...",
    "lv": "Sanotaan, että...",
    "level": "Sätze"
  },
  {
    "de": "Schon gut!",
    "lv": "Ei se mitään!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön!",
    "lv": "Ole hyvä!",
    "level": "Sätze"
  },
  {
    "de": "Was bin ich schuldig?",
    "lv": "Paljonko olen velkaa? • Paljonko minun pitää maksaa?",
    "level": "Sätze"
  },
  {
    "de": "Vor dem Gebrauch schütteln!",
    "lv": "Ravistettava ennen käyttöä!",
    "level": "Sätze"
  },
  {
    "de": "Sehen Sie mal!",
    "lv": "Katsokaapa!",
    "level": "Sätze"
  },
  {
    "de": "Wie sehr auch ...",
    "lv": "Kuinka paljon tahansa...",
    "level": "Sätze"
  },
  {
    "de": "Seit wann?",
    "lv": "Mistä lähtien?",
    "level": "Sätze"
  },
  {
    "de": "Was soll ich tun?",
    "lv": "Mitä minun pitäisi tehdä?",
    "level": "Sätze"
  },
  {
    "de": "im Sommer",
    "lv": "kesällä",
    "level": "Sätze"
  },
  {
    "de": "Nicht nur ..., sondern auch ...",
    "lv": "Ei vain..., vaan myös...",
    "level": "Sätze"
  },
  {
    "de": "Sonst noch etwas?",
    "lv": "Vielä jotain muuta?",
    "level": "Sätze"
  },
  {
    "de": "Spaß beiseite!",
    "lv": "Leikki sikseen!",
    "level": "Sätze"
  },
  {
    "de": "Wie spät ist es?",
    "lv": "Paljonko kello on?",
    "level": "Sätze"
  },
  {
    "de": "Durchfahrt gesperrt!",
    "lv": "Läpiajo kielletty!",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie deutsch?",
    "lv": "Puhutteko saksaa?",
    "level": "Sätze"
  },
  {
    "de": "Statt zu ...",
    "lv": "Sen sijaan, että...",
    "level": "Sätze"
  },
  {
    "de": "Wie steht’s?",
    "lv": "Mitä kuuluu?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Hut steht ihr gut.",
    "lv": "Tämä hattu sopii hänelle hyvin.",
    "level": "Sätze"
  },
  {
    "de": "Guten Tag!",
    "lv": "Hyvää päivää!",
    "level": "Sätze"
  },
  {
    "de": "Wo treffen wir uns?",
    "lv": "Missä tapaamme?",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie näher!",
    "lv": "Tulkaa lähemmäs!",
    "level": "Sätze"
  },
  {
    "de": "Ehrlichkeit ist eine Tugend.",
    "lv": "Rehellisyys on hyve.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe viel zu tun.",
    "lv": "Minulla on paljon tekemistä.",
    "level": "Sätze"
  },
  {
    "de": "Nicht übel!",
    "lv": "Ei hassumpaa!",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt über mir.",
    "lv": "Hän asuu yläpuolellani.",
    "level": "Sätze"
  },
  {
    "de": "Er ist davon überzeugt.",
    "lv": "Hän on siitä vakuuttunut.",
    "level": "Sätze"
  },
  {
    "de": "So ist es üblich.",
    "lv": "Niin on tapana.",
    "level": "Sätze"
  },
  {
    "de": "Deine Uhr geht nach.",
    "lv": "Kellosi jätättää.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel Uhr ist es?",
    "lv": "Kuinka paljon kello on?",
    "level": "Sätze"
  },
  {
    "de": "Um acht Uhr früh.",
    "lv": "Kello kahdeksalta aamulla.",
    "level": "Sätze"
  },
  {
    "de": "umso mehr",
    "lv": "sitäkin enemmän",
    "level": "Sätze"
  },
  {
    "de": "Rechts um!",
    "lv": "Oikeaan päin!",
    "level": "Sätze"
  },
  {
    "de": "Und ob!",
    "lv": "Totta kai!",
    "level": "Sätze"
  },
  {
    "de": "und zwar",
    "lv": "nimittäin",
    "level": "Sätze"
  },
  {
    "de": "Auf Unkosten von ...",
    "lv": "Jonkun kustannuksella...",
    "level": "Sätze"
  },
  {
    "de": "Er saß unter den Zuschauern.",
    "lv": "Hän istui katsojien joukossa.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ursache!",
    "lv": "Ei kestä!",
    "level": "Sätze"
  },
  {
    "de": "Es geschah, wie verabredet.",
    "lv": "Se tapahtui, kuten oli sovittu.",
    "level": "Sätze"
  },
  {
    "de": "Rauchen verboten!",
    "lv": "Tupakointi kielletty!",
    "level": "Sätze"
  },
  {
    "de": "Falsch verbunden!",
    "lv": "Väärä numero!",
    "level": "Sätze"
  },
  {
    "de": "Eintritt verboten!",
    "lv": "Pääsy kielletty!",
    "level": "Sätze"
  },
  {
    "de": "Verstehen Sie mich?",
    "lv": "Ymmärrättekö minua?",
    "level": "Sätze"
  },
  {
    "de": "Er versteht nichts davon.",
    "lv": "Hän ei ymmärrä siitä mitään.",
    "level": "Sätze"
  },
  {
    "de": "Seine Ansicht vertreten.",
    "lv": "Puolustaa mielipidettään.",
    "level": "Sätze"
  },
  {
    "de": "Streit verursachen.",
    "lv": "Aiheuttaa riitaa.",
    "level": "Sätze"
  },
  {
    "de": "Viel besser.",
    "lv": "Paljon parempi.",
    "level": "Sätze"
  },
  {
    "de": "Zu viel.",
    "lv": "Liian paljon.",
    "level": "Sätze"
  },
  {
    "de": "Vom Hörensagen.",
    "lv": "Kuulopuheiden perusteella.",
    "level": "Sätze"
  },
  {
    "de": "Von Zeit zu Zeit.",
    "lv": "Aika ajoin.",
    "level": "Sätze"
  },
  {
    "de": "Von Beruf.",
    "lv": "Ammatiltaan.",
    "level": "Sätze"
  },
  {
    "de": "Er ist Berliner von Geburt.",
    "lv": "Hän on syntyjään berliiniläinen.",
    "level": "Sätze"
  },
  {
    "de": "Er steht vor dem Fenster.",
    "lv": "Hän seisoo ikkunan edessä.",
    "level": "Sätze"
  },
  {
    "de": "Vor Sonnenaufgang.",
    "lv": "Ennen auringonnousua.",
    "level": "Sätze"
  },
  {
    "de": "Vor vierzehn Tagen.",
    "lv": "Kaksi viikkoa sitten.",
    "level": "Sätze"
  },
  {
    "de": "Vor Freude.",
    "lv": "Ilosta.",
    "level": "Sätze"
  },
  {
    "de": "Vor allem.",
    "lv": "Ennen kaikkea.",
    "level": "Sätze"
  },
  {
    "de": "Im Voraus.",
    "lv": "Etukäteen.",
    "level": "Sätze"
  },
  {
    "de": "Unter der Voraussetzung, dass ...",
    "lv": "Sillä edellytyksellä, että...",
    "level": "Sätze"
  },
  {
    "de": "Unter dem Vorbehalt.",
    "lv": "Sillä varauksella.",
    "level": "Sätze"
  },
  {
    "de": "Vorhanden sein.",
    "lv": "Olla saatavilla. • Olla olemassa.",
    "level": "Sätze"
  },
  {
    "de": "In der vorigen Woche.",
    "lv": "Viime viikolla.",
    "level": "Sätze"
  },
  {
    "de": "Vorkehrungen treffen.",
    "lv": "Ryhtyä varotoimiin.",
    "level": "Sätze"
  },
  {
    "de": "Sie kommt mir bekannt vor.",
    "lv": "Hän vaikuttaa minusta tutulta.",
    "level": "Sätze"
  },
  {
    "de": "Er hat eine Vorliebe für Literatur.",
    "lv": "Hän pitää erityisesti kirjallisuudesta.",
    "level": "Sätze"
  },
  {
    "de": "Heute Vormittag.",
    "lv": "Tänä aamuna. • Tänään aamupäivällä.",
    "level": "Sätze"
  },
  {
    "de": "Von vorn.",
    "lv": "Edestä. • Alusta.",
    "level": "Sätze"
  },
  {
    "de": "Nach vorn.",
    "lv": "Eteenpäin.",
    "level": "Sätze"
  },
  {
    "de": "Von vornherein.",
    "lv": "Alusta alkaen.",
    "level": "Sätze"
  },
  {
    "de": "Im Vorteil sein.",
    "lv": "Olla etulyöntiasemassa.",
    "level": "Sätze"
  },
  {
    "de": "Wach sein.",
    "lv": "Olla hereillä.",
    "level": "Sätze"
  },
  {
    "de": "Wach werden.",
    "lv": "Herätä.",
    "level": "Sätze"
  },
  {
    "de": "Auf Wache sein.",
    "lv": "Olla vartiossa.",
    "level": "Sätze"
  },
  {
    "de": "Während eines Jahres.",
    "lv": "Vuoden aikana.",
    "level": "Sätze"
  },
  {
    "de": "Während des Krieges.",
    "lv": "Sodan aikana.",
    "level": "Sätze"
  },
  {
    "de": "Gegen eine Wand reden.",
    "lv": "Puhua kuuroille korville.",
    "level": "Sätze"
  },
  {
    "de": "Hier haben die Wände Ohren.",
    "lv": "Täällä seinilläkin on korvat.",
    "level": "Sätze"
  },
  {
    "de": "Bis wann?",
    "lv": "Mihin asti? • Mihin mennessä?",
    "level": "Sätze"
  },
  {
    "de": "Es ist warm.",
    "lv": "On lämmin.",
    "level": "Sätze"
  },
  {
    "de": "Auf eine Nachricht warten.",
    "lv": "Odottaa viestiä.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie?",
    "lv": "Mitä te haluatte?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein ...?",
    "lv": "Millainen...?",
    "level": "Sätze"
  },
  {
    "de": "Auf halbem Wege.",
    "lv": "Puolimatkassa.",
    "level": "Sätze"
  },
  {
    "de": "Auf diesem Wege.",
    "lv": "Tällä tavalla. • Tätä kautta.",
    "level": "Sätze"
  },
  {
    "de": "Auf friedlichem Wege.",
    "lv": "Rauhanomaisin keinoin.",
    "level": "Sätze"
  },
  {
    "de": "Unserer Freundschaft wegen.",
    "lv": "Ystävyytemme vuoksi.",
    "level": "Sätze"
  },
  {
    "de": "Von Rechts wegen.",
    "lv": "Lain mukaan. • Oikeuden mukaan.",
    "level": "Sätze"
  },
  {
    "de": "Weh tun.",
    "lv": "Sattua. • Tehdä kipeää.",
    "level": "Sätze"
  },
  {
    "de": "Zu Weihnachten.",
    "lv": "Jouluna.",
    "level": "Sätze"
  },
  {
    "de": "Auf welche Weise?",
    "lv": "Millä tavalla?",
    "level": "Sätze"
  },
  {
    "de": "Art und Weise.",
    "lv": "Tapa.",
    "level": "Sätze"
  },
  {
    "de": "Ohne weiteres.",
    "lv": "Epäröimättä. • Vaivatta.",
    "level": "Sätze"
  },
  {
    "de": "Bis auf weiteres.",
    "lv": "Toistaiseksi.",
    "level": "Sätze"
  },
  {
    "de": "Und so weiter.",
    "lv": "Ja niin edelleen.",
    "level": "Sätze"
  },
  {
    "de": "Weiter nichts.",
    "lv": "Ei muuta.",
    "level": "Sätze"
  },
  {
    "de": "An welchem Tag?",
    "lv": "Minä päivänä?",
    "level": "Sätze"
  },
  {
    "de": "Alle Welt.",
    "lv": "Koko maailma. • Kaikki.",
    "level": "Sätze"
  },
  {
    "de": "In wenigen Tagen.",
    "lv": "Muutaman päivän kuluttua.",
    "level": "Sätze"
  },
  {
    "de": "Zu wenig.",
    "lv": "Liian vähän.",
    "level": "Sätze"
  },
  {
    "de": "Wenn auch.",
    "lv": "Vaikkakin.",
    "level": "Sätze"
  },
  {
    "de": "Wer da?",
    "lv": "Kuka siellä?",
    "level": "Sätze"
  },
  {
    "de": "Gesammelte Werke von Schiller.",
    "lv": "Schillerin kootut teokset.",
    "level": "Sätze"
  },
  {
    "de": "Ausgewählte Werke.",
    "lv": "Valitut teokset.",
    "level": "Sätze"
  },
  {
    "de": "Er ist wert, dass ...",
    "lv": "Hän ansaitsee, että...",
    "level": "Sätze"
  },
  {
    "de": "Es ist zwei Euro wert.",
    "lv": "Se on kahden euron arvoinen.",
    "level": "Sätze"
  },
  {
    "de": "Nach Westen.",
    "lv": "Länteen.",
    "level": "Sätze"
  },
  {
    "de": "Von Westen.",
    "lv": "Lännestä.",
    "level": "Sätze"
  },
  {
    "de": "In Wettbewerb treten.",
    "lv": "Ryhtyä kilpailemaan.",
    "level": "Sätze"
  },
  {
    "de": "Um die Wette laufen.",
    "lv": "Juosta kilpaa.",
    "level": "Sätze"
  },
  {
    "de": "Was gilt die Wette?",
    "lv": "Mistä lyömme vetoa?",
    "level": "Sätze"
  },
  {
    "de": "Wie wird das Wetter?",
    "lv": "Millainen säästä tulee?",
    "level": "Sätze"
  },
  {
    "de": "Wettkampf im Turnen.",
    "lv": "Voimistelukilpailu.",
    "level": "Sätze"
  },
  {
    "de": "Wider meinen Willen.",
    "lv": "Vastoin tahtoani.",
    "level": "Sätze"
  },
  {
    "de": "Widerspruch erheben.",
    "lv": "Protestoida. • Esittää vastalause.",
    "level": "Sätze"
  },
  {
    "de": "Wie alt ist er?",
    "lv": "Kuinka vanha hän on?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange?",
    "lv": "Kuinka kauan?",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiederhören!",
    "lv": "Kuulemiin!",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiedersehen!",
    "lv": "Näkemiin!",
    "level": "Sätze"
  },
  {
    "de": "Wilde Tiere.",
    "lv": "Villieläimet.",
    "level": "Sätze"
  },
  {
    "de": "Herzlich willkommen!",
    "lv": "Lämpimästi tervetuloa!",
    "level": "Sätze"
  },
  {
    "de": "Du musst ziehen.",
    "lv": "On sinun siirtosi.",
    "level": "Sätze"
  },
  {
    "de": "Es zieht.",
    "lv": "Vetää.",
    "level": "Sätze"
  },
  {
    "de": "Ziemlich kalt.",
    "lv": "Melko kylmä.",
    "level": "Sätze"
  },
  {
    "de": "Zipfel einer Wurst.",
    "lv": "Makkaran pää.",
    "level": "Sätze"
  },
  {
    "de": "Zu ihm gehen.",
    "lv": "Mennä hänen luokseen.",
    "level": "Sätze"
  },
  {
    "de": "Zur Schule gehen.",
    "lv": "Mennä kouluun.",
    "level": "Sätze"
  },
  {
    "de": "Zu Hause bleiben.",
    "lv": "Jäädä kotiin.",
    "level": "Sätze"
  },
  {
    "de": "Von Tag zu Tag.",
    "lv": "Päivä päivältä.",
    "level": "Sätze"
  },
  {
    "de": "Zum Glück.",
    "lv": "Onneksi.",
    "level": "Sätze"
  },
  {
    "de": "Wasser zum Trinken.",
    "lv": "Juomavesi.",
    "level": "Sätze"
  },
  {
    "de": "Zu Fuß.",
    "lv": "Jalkaisin.",
    "level": "Sätze"
  },
  {
    "de": "Zu Pferde.",
    "lv": "Ratsain.",
    "level": "Sätze"
  },
  {
    "de": "Zu Rad.",
    "lv": "Pyörällä.",
    "level": "Sätze"
  },
  {
    "de": "Es hörte auf zu regnen.",
    "lv": "Sade lakkasi.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe noch viel zu tun.",
    "lv": "Minulla on vielä paljon tehtävää.",
    "level": "Sätze"
  },
  {
    "de": "Zu früh.",
    "lv": "Liian aikaisin.",
    "level": "Sätze"
  },
  {
    "de": "Zu groß.",
    "lv": "Liian suuri.",
    "level": "Sätze"
  },
  {
    "de": "Mit den Achseln zucken.",
    "lv": "Kohauttaa olkapäitään.",
    "level": "Sätze"
  },
  {
    "de": "In einem Zug trinken.",
    "lv": "Juoda yhdellä kulauksella.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde gehen.",
    "lv": "Tuhoutua.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde legen.",
    "lv": "Panna pohjaksi. • Ottaa perustaksi.",
    "level": "Sätze"
  },
  {
    "de": "Zum ersten Mal.",
    "lv": "Ensimmäistä kertaa.",
    "level": "Sätze"
  },
  {
    "de": "Machen Sie bitte die Tür zu!",
    "lv": "Sulkekaa ovi, kiitos!",
    "level": "Sätze"
  },
  {
    "de": "Er hat zugenommen.",
    "lv": "Hän on lihonut.",
    "level": "Sätze"
  },
  {
    "de": "Die Tage nehmen zu.",
    "lv": "Päivät pitenevät.",
    "level": "Sätze"
  },
  {
    "de": "Zusammenhängen mit etwas.",
    "lv": "Liittyä johonkin.",
    "level": "Sätze"
  },
  {
    "de": "Die Tür ist zu.",
    "lv": "Ovi on kiinni.",
    "level": "Sätze"
  },
  {
    "de": "Das hätte ich ihm nicht zugetraut.",
    "lv": "Sitä en olisi hänestä uskonut.",
    "level": "Sätze"
  },
  {
    "de": "Freier Zutritt.",
    "lv": "Vapaa pääsy.",
    "level": "Sätze"
  },
  {
    "de": "Zutritt verboten!",
    "lv": "Pääsy kielletty!",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu viel!",
    "lv": "Tämä on liikaa!",
    "level": "Sätze"
  },
  {
    "de": "Zuwider werden.",
    "lv": "Tulla vastenmieliseksi. • Alkaa inhottaa.",
    "level": "Sätze"
  },
  {
    "de": "Und zwar.",
    "lv": "Nimittäin.",
    "level": "Sätze"
  },
  {
    "de": "Es steht außer Zweifel.",
    "lv": "Siitä ei ole epäilystäkään.",
    "level": "Sätze"
  },
  {
    "de": "Ohne Zweifel.",
    "lv": "Epäilemättä.",
    "level": "Sätze"
  },
  {
    "de": "Zum Zweiten.",
    "lv": "Toiseksi.",
    "level": "Sätze"
  },
  {
    "de": "Frohes neues Jahr!",
    "lv": "Hyvää uutta vuotta!",
    "level": "Sätze"
  },
  {
    "de": "Herzlichen Glückwunsch zum Geburtstag!",
    "lv": "Hyvää syntymäpäivää!",
    "level": "Sätze"
  },
  {
    "de": "Gute Reise!",
    "lv": "Hyvää matkaa!",
    "level": "Sätze"
  },
  {
    "de": "Es freut mich, Sie kennenzulernen.",
    "lv": "Hauska tutustua teihin.",
    "level": "Sätze"
  },
  {
    "de": "Wären Sie bitte so nett?",
    "lv": "Olisitteko niin ystävällinen?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin Ihnen sehr dankbar.",
    "lv": "Olen teille hyvin kiitollinen.",
    "level": "Sätze"
  },
  {
    "de": "Setzt euch bitte hin!",
    "lv": "Olkaa hyvä ja istukaa!",
    "level": "Sätze"
  },
  {
    "de": "Ben, komm bitte an die Tafel!",
    "lv": "Ben, tule taululle, kiitos!",
    "level": "Sätze"
  },
  {
    "de": "Schlagt bitte die Lehrbücher auf!",
    "lv": "Avatkaa oppikirjanne, kiitos!",
    "level": "Sätze"
  },
  {
    "de": "Geht bitte in die Sporthalle!",
    "lv": "Menkää liikuntasaliin, kiitos!",
    "level": "Sätze"
  },
  {
    "de": "Schläfst du noch?",
    "lv": "Nukutko vielä?",
    "level": "Sätze"
  },
  {
    "de": "Schlafen Sie noch?",
    "lv": "Nukutteko vielä?",
    "level": "Sätze"
  },
  {
    "de": "Er ist fest eingeschlafen.",
    "lv": "Hän on nukahtanut sikeään uneen.",
    "level": "Sätze"
  },
  {
    "de": "Wecke ihn bitte auf, es ist schon spät!",
    "lv": "Herätäthän hänet, on jo myöhä!",
    "level": "Sätze"
  },
  {
    "de": "Es tut mir sehr leid!",
    "lv": "Olen todella pahoillani!",
    "level": "Sätze"
  },
  {
    "de": "Vielen Dank!",
    "lv": "Kiitos paljon!",
    "level": "Sätze"
  },
  {
    "de": "Finn, fang bitte an!",
    "lv": "Finn, aloita, kiitos!",
    "level": "Sätze"
  },
  {
    "de": "Lest bitte mit!",
    "lv": "Lukekaa mukana!",
    "level": "Sätze"
  },
  {
    "de": "Emma, schau bitte nicht aus dem Fenster!",
    "lv": "Emma, älä nyt katsele ulos ikkunasta!",
    "level": "Sätze"
  },
  {
    "de": "Jonas, bring bitte die Hefte!",
    "lv": "Jonas, tuo vihot, kiitos!",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte zurück an deinen Platz!",
    "lv": "Menehän takaisin paikallesi!",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb acht.",
    "lv": "Kello on puoli kahdeksan.",
    "level": "Sätze"
  },
  {
    "de": "Wann wachst du gewöhnlich auf?",
    "lv": "Milloin yleensä heräät?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe gleich auf.",
    "lv": "Nousen ihan kohta.",
    "level": "Sätze"
  },
  {
    "de": "Steh auf, Hanna, es klingelt!",
    "lv": "Nouse, Hanna, kello soi!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich noch fünf Minuten schlafen!",
    "lv": "Anna minun nukkua vielä viisi minuuttia!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss nicht, das Zimmer zu lüften!",
    "lv": "Älä unohda tuulettaa huonetta!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist das Handtuch?",
    "lv": "Missä pyyhe on?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mir die Zähne putzen.",
    "lv": "Haluaisin pestä hampaani.",
    "level": "Sätze"
  },
  {
    "de": "Womit putzt du dir die Zähne?",
    "lv": "Millä peset hampaasi?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mich anziehen.",
    "lv": "Haluaisin pukeutua.",
    "level": "Sätze"
  },
  {
    "de": "Zieh dich bitte schnell an!",
    "lv": "Pukeudu nopeasti, kiitos!",
    "level": "Sätze"
  },
  {
    "de": "Kleide dich wärmer an, draußen ist es kühl.",
    "lv": "Pukeudu lämpimämmin, ulkona on viileä.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, wie geht es dir?",
    "lv": "Hyvää huomenta, mitä sinulle kuuluu?",
    "level": "Sätze"
  },
  {
    "de": "Mir geht es gut, danke.",
    "lv": "Minulle kuuluu hyvää, kiitos.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es Neues?",
    "lv": "Mitä uutta?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein Chaos hier!",
    "lv": "Onpa täällä sotkuista!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich beim Aufräumen helfen?",
    "lv": "Saanko auttaa siivoamisessa?",
    "level": "Sätze"
  },
  {
    "de": "Was trinkst du morgens, Kaffee oder Tee?",
    "lv": "Mitä juot aamuisin, kahvia vai teetä?",
    "level": "Sätze"
  },
  {
    "de": "Gewöhnlich trinke ich morgens eine Tasse Kaffee.",
    "lv": "Yleensä juon aamuisin kupin kahvia.",
    "level": "Sätze"
  },
  {
    "de": "Am liebsten trinke ich schwarzen Kaffee.",
    "lv": "Juon mieluiten mustaa kahvia.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, hast du gut geschlafen?",
    "lv": "Hyvää huomenta, nukuitko hyvin?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin noch sehr müde.",
    "lv": "Olen vielä hyvin väsynyt.",
    "level": "Sätze"
  },
  {
    "de": "Willst du Kaffee oder Milch?",
    "lv": "Haluatko kahvia vai maitoa?",
    "level": "Sätze"
  },
  {
    "de": "Gib mir bitte ein Brötchen mit Käse.",
    "lv": "Anna minulle juustosämpylä, kiitos.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss jetzt los!",
    "lv": "Nyt minun täytyy lähteä!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss dein Frühstück nicht!",
    "lv": "Älä unohda aamiaistasi!",
    "level": "Sätze"
  },
  {
    "de": "Klara, deck bitte den Tisch!",
    "lv": "Klara, kata pöytä, kiitos!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss die Servietten nicht!",
    "lv": "Älä unohda lautasliinoja!",
    "level": "Sätze"
  },
  {
    "de": "Wann esst ihr zu Mittag?",
    "lv": "Milloin te syötte lounasta?",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit zu essen.",
    "lv": "On aika syödä.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es heute zu Mittag?",
    "lv": "Mitä tänään on lounaaksi?",
    "level": "Sätze"
  },
  {
    "de": "Wie schmeckt dir die Suppe?",
    "lv": "Miltä keitto sinusta maistuu?",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt ist sie etwas zu salzig.",
    "lv": "Rehellisesti sanottuna se on vähän liian suolaista.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dir ein Stück Brot geben?",
    "lv": "Saanko tarjota sinulle palan leipää?",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich habe schon.",
    "lv": "Kiitos, minulla on jo.",
    "level": "Sätze"
  },
  {
    "de": "Das Fleisch schmeckt ausgezeichnet.",
    "lv": "Liha maistuu erinomaiselta.",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich bin schon satt.",
    "lv": "Kiitos, olen jo kylläinen.",
    "level": "Sätze"
  },
  {
    "de": "Heute haben wir Besuch.",
    "lv": "Tänään meillä on vieraita.",
    "level": "Sätze"
  },
  {
    "de": "Bist du heute Abend frei?",
    "lv": "Oletko vapaa tänä iltana?",
    "level": "Sätze"
  },
  {
    "de": "Komm doch heute zum Mittagessen vorbei!",
    "lv": "Tulehan tänään meille lounaalle!",
    "level": "Sätze"
  },
  {
    "de": "Setzen wir uns an den Tisch.",
    "lv": "Istutaan pöytään.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, bedien dich!",
    "lv": "Ole hyvä ja ota!",
    "level": "Sätze"
  },
  {
    "de": "Stört dich das Rauchen?",
    "lv": "Häiritseekö tupakointi sinua?",
    "level": "Sätze"
  },
  {
    "de": "Danke für die nette Aufnahme!",
    "lv": "Kiitos ystävällisestä vastaanotosta!",
    "level": "Sätze"
  },
  {
    "de": "Wann gehst du ins Bett?",
    "lv": "Milloin menet nukkumaan?",
    "level": "Sätze"
  },
  {
    "de": "Wenn ich von der Arbeit komme, bin ich immer müde.",
    "lv": "Kun tulen töistä, olen aina väsynyt.",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, ins Bett zu gehen.",
    "lv": "On aika mennä nukkumaan.",
    "level": "Sätze"
  },
  {
    "de": "Es ist schönes Wetter.",
    "lv": "On kaunis ilma.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mit mir spazieren gehen?",
    "lv": "Haluatko lähteä kanssani kävelylle?",
    "level": "Sätze"
  },
  {
    "de": "Sieh mal, es wird gleich regnen.",
    "lv": "Katso, kohta alkaa sataa.",
    "level": "Sätze"
  },
  {
    "de": "Nimm den Regenschirm mit!",
    "lv": "Ota sateenvarjo mukaan!",
    "level": "Sätze"
  },
  {
    "de": "Es regnet.",
    "lv": "Sataa.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin schon ganz nass.",
    "lv": "Olen jo aivan märkä.",
    "level": "Sätze"
  },
  {
    "de": "Glaubst du, dass es den ganzen Tag regnen wird?",
    "lv": "Luuletko, että sataa koko päivän?",
    "level": "Sätze"
  },
  {
    "de": "Es hört auf zu regnen.",
    "lv": "Sade lakkaa.",
    "level": "Sätze"
  },
  {
    "de": "Die Sonne scheint wieder.",
    "lv": "Aurinko paistaa taas.",
    "level": "Sätze"
  },
  {
    "de": "Es ist sehr warm.",
    "lv": "On hyvin lämmin.",
    "level": "Sätze"
  },
  {
    "de": "Es sieht nach Regen aus.",
    "lv": "Näyttää sateelta.",
    "level": "Sätze"
  },
  {
    "de": "Wir bekommen gleich ein Gewitter.",
    "lv": "Kohta alkaa ukkostaa.",
    "level": "Sätze"
  },
  {
    "de": "Das Gewitter zieht vorüber.",
    "lv": "Ukkonen menee ohi.",
    "level": "Sätze"
  },
  {
    "de": "Die Wolken verziehen sich.",
    "lv": "Pilvet hälvenevät.",
    "level": "Sätze"
  },
  {
    "de": "Siehst du den Regenbogen?",
    "lv": "Näetkö sateenkaaren?",
    "level": "Sätze"
  },
  {
    "de": "Der Winter ist da, es hat geschneit.",
    "lv": "Talvi on tullut, on satanut lunta.",
    "level": "Sätze"
  },
  {
    "de": "Es schneit.",
    "lv": "Sataa lunta.",
    "level": "Sätze"
  },
  {
    "de": "Wie schön ist es im Wald im Winter!",
    "lv": "Kuinka kaunista metsässä on talvella!",
    "level": "Sätze"
  },
  {
    "de": "Mir ist kalt, ich friere.",
    "lv": "Minulla on kylmä, palelen.",
    "level": "Sätze"
  },
  {
    "de": "Draußen ist Glatteis, pass auf!",
    "lv": "Ulkona on liukasta, ole varovainen!",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir auf die Eisbahn gehen?",
    "lv": "Mennäänkö luistinradalle?",
    "level": "Sätze"
  },
  {
    "de": "Zieh die Jacke an, du kannst dich erkälten.",
    "lv": "Pue takki päällesi, voit vilustua.",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb sieben.",
    "lv": "Kello on puoli seitsemän.",
    "level": "Sätze"
  },
  {
    "de": "Meine Uhr geht fünf Minuten vor.",
    "lv": "Kelloni edistää viisi minuuttia.",
    "level": "Sätze"
  },
  {
    "de": "Weck mich morgen früh um sieben Uhr!",
    "lv": "Herätä minut huomenna aamulla kello seitsemältä!",
    "level": "Sätze"
  },
  {
    "de": "Was ist heute für ein Datum?",
    "lv": "Monesko päivä tänään on?",
    "level": "Sätze"
  },
  {
    "de": "Heute ist der elfte Juli.",
    "lv": "Tänään on yhdestoista heinäkuuta.",
    "level": "Sätze"
  },
  {
    "de": "Was machst du gewöhnlich am Abend?",
    "lv": "Mitä yleensä teet iltaisin?",
    "level": "Sätze"
  },
  {
    "de": "Es ist schon lange her, dass wir uns gesehen haben.",
    "lv": "Siitä on jo pitkä aika, kun viimeksi näimme toisemme.",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es dir?",
    "lv": "Mitä sinulle kuuluu?",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, ich möchte etwas mit dir besprechen.",
    "lv": "Anteeksi, haluaisin keskustella kanssasi eräästä asiasta.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir spazieren!",
    "lv": "Lähdetään kävelylle!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Lust, mit mir in den Park zu gehen?",
    "lv": "Huvittaako sinua lähteä kanssani puistoon?",
    "level": "Sätze"
  },
  {
    "de": "Ich komme, um dich zum Spaziergang abzuholen.",
    "lv": "Tulin hakemaan sinut kävelylle.",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte etwas langsamer, ich kann dir nicht folgen!",
    "lv": "Kävelehän vähän hitaammin, en pysy perässäsi!",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zum ersten Mal in dieser Gegend.",
    "lv": "Olen ensimmäistä kertaa tällä seudulla.",
    "level": "Sätze"
  },
  {
    "de": "Ruhen wir uns ein wenig aus.",
    "lv": "Levätään vähän.",
    "level": "Sätze"
  },
  {
    "de": "Jetzt können wir zurückgehen.",
    "lv": "Nyt voimme lähteä takaisin.",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt bin ich ziemlich müde.",
    "lv": "Rehellisesti sanottuna olen melko väsynyt.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, wo ist die nächste U-Bahn-Station?",
    "lv": "Anteeksi, missä on lähin metroasema?",
    "level": "Sätze"
  },
  {
    "de": "Welcher ist der kürzeste Weg?",
    "lv": "Mikä on lyhin reitti?",
    "level": "Sätze"
  },
  {
    "de": "Geh hier die zweite Straße links und dann immer geradeaus.",
    "lv": "Käänny tästä toiselle kadulle vasemmalle ja jatka sitten suoraan eteenpäin.",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich am schnellsten zum Bahnhof?",
    "lv": "Miten pääsen nopeimmin rautatieasemalle?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe vor, morgen zu verreisen.",
    "lv": "Aion lähteä huomenna matkalle.",
    "level": "Sätze"
  },
  {
    "de": "Wohin willst du fahren?",
    "lv": "Minne haluat matkustaa?",
    "level": "Sätze"
  },
  {
    "de": "Reist du geschäftlich oder privat?",
    "lv": "Matkustatko työasioissa vai yksityisesti?",
    "level": "Sätze"
  },
  {
    "de": "Finn fährt bis Berlin mit, dann geht er ans Meer.",
    "lv": "Finn tulee mukaan Berliiniin asti, sitten hän jatkaa meren rannalle.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt das Schiff ab?",
    "lv": "Milloin laiva lähtee?",
    "level": "Sätze"
  },
  {
    "de": "In einer halben Stunde.",
    "lv": "Puolen tunnin päästä.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich noch eine Kabine bekommen?",
    "lv": "Voinko vielä saada hytin?",
    "level": "Sätze"
  },
  {
    "de": "Vergiss deinen Pass nicht!",
    "lv": "Älä unohda passiasi!",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, den Koffer zu packen.",
    "lv": "On aika pakata matkalaukku.",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt um halb sieben ab.",
    "lv": "Juna lähtee puoli seitsemältä.",
    "level": "Sätze"
  },
  {
    "de": "Hol mir bitte ein Taxi, ich verpasse sonst den Zug!",
    "lv": "Tilaa minulle taksi, kiitos, muuten myöhästyn junasta!",
    "level": "Sätze"
  },
  {
    "de": "Fahr bitte zum Bahnhof!",
    "lv": "Aja asemalle, kiitos!",
    "level": "Sätze"
  },
  {
    "de": "Ich muss mich beeilen.",
    "lv": "Minun täytyy kiirehtiä.",
    "level": "Sätze"
  },
  {
    "de": "Ist der Schalter schon offen?",
    "lv": "Onko lippuluukku jo auki?",
    "level": "Sätze"
  },
  {
    "de": "Eine Fahrkarte nach Köln, bitte.",
    "lv": "Yksi lippu Kölniin, kiitos.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt der Zug ab?",
    "lv": "Milloin juna lähtee?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt gleich ab.",
    "lv": "Juna lähtee aivan kohta.",
    "level": "Sätze"
  },
  {
    "de": "Muss ich in Koblenz umsteigen?",
    "lv": "Täytyykö minun vaihtaa junaa Koblenzissa?",
    "level": "Sätze"
  },
  {
    "de": "Ja, dort musst du umsteigen.",
    "lv": "Kyllä, siellä sinun täytyy vaihtaa junaa.",
    "level": "Sätze"
  },
  {
    "de": "Ist dieser Platz frei?",
    "lv": "Onko tämä paikka vapaa?",
    "level": "Sätze"
  },
  {
    "de": "Nein, hier sitzt niemand.",
    "lv": "Ei, tässä ei istu kukaan.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der Bahnsteigkartenautomat?",
    "lv": "Missä on laiturilippuautomaatti?",
    "level": "Sätze"
  },
  {
    "de": "Stell mein Handgepäck ins Gepäcknetz.",
    "lv": "Nosta käsimatkatavarani tavarahyllylle.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das Fenster aufmachen?",
    "lv": "Saanko avata ikkunan?",
    "level": "Sätze"
  },
  {
    "de": "Es zieht, schließ bitte das Fenster!",
    "lv": "Täällä vetää, sulje ikkuna, kiitos!",
    "level": "Sätze"
  },
  {
    "de": "Welche ist die nächste Station?",
    "lv": "Mikä on seuraava asema?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange hält der Zug?",
    "lv": "Kuinka kauan juna seisoo?",
    "level": "Sätze"
  },
  {
    "de": "Wo muss ich umsteigen?",
    "lv": "Missä minun täytyy vaihtaa junaa?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug hat Verspätung.",
    "lv": "Juna on myöhässä.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Wagen ist für Nichtraucher.",
    "lv": "Tämä vaunu on tupakoimattomille.",
    "level": "Sätze"
  },
  {
    "de": "Wir fahren jetzt über die Grenze.",
    "lv": "Ylitämme nyt rajan.",
    "level": "Sätze"
  },
  {
    "de": "Hast du etwas zu verzollen?",
    "lv": "Onko sinulla jotakin tullattavaa?",
    "level": "Sätze"
  },
  {
    "de": "Wir sind in Berlin angekommen.",
    "lv": "Olemme saapuneet Berliiniin.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir ein gutes Hotel empfehlen?",
    "lv": "Voitko suositella minulle hyvää hotellia?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie freie Zimmer?",
    "lv": "Onko teillä vapaita huoneita?",
    "level": "Sätze"
  },
  {
    "de": "Ein Zimmer mit zwei Betten, bitte.",
    "lv": "Huone, jossa on kaksi vuodetta, kiitos.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Zimmer pro Nacht?",
    "lv": "Paljonko huone maksaa yöltä?",
    "level": "Sätze"
  },
  {
    "de": "Morgen reise ich ab. Weck mich um sieben Uhr!",
    "lv": "Huomenna lähden. Herätä minut kello seitsemän!",
    "level": "Sätze"
  },
  {
    "de": "Die Rechnung, bitte!",
    "lv": "Lasku, kiitos!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Stadtbibliothek?",
    "lv": "Missä on kaupunginkirjasto?",
    "level": "Sätze"
  },
  {
    "de": "Wann hat das Museum geöffnet?",
    "lv": "Milloin museo on auki?",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir ins Museum gehen?",
    "lv": "Mennäänkö museoon?",
    "level": "Sätze"
  },
  {
    "de": "Fahren wir mit dem Bus oder der U-Bahn?",
    "lv": "Mennäänkö bussilla vai metrolla?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die nächste Bushaltestelle?",
    "lv": "Missä on lähin bussipysäkki?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe großen Hunger.",
    "lv": "Minulla on kova nälkä.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir zusammen essen?",
    "lv": "Mennäänkö yhdessä syömään?",
    "level": "Sätze"
  },
  {
    "de": "Kellner, die Speisekarte, bitte!",
    "lv": "Tarjoilija, ruokalista, kiitos!",
    "level": "Sätze"
  },
  {
    "de": "Ist der Fisch frisch?",
    "lv": "Onko kala tuoretta?",
    "level": "Sätze"
  },
  {
    "de": "Das schmeckt ausgezeichnet!",
    "lv": "Tämä maistuu erinomaiselta!",
    "level": "Sätze"
  },
  {
    "de": "Kellner, zahlen bitte!",
    "lv": "Tarjoilija, haluaisimme maksaa!",
    "level": "Sätze"
  },
  {
    "de": "Ich gehe ins Café einen Kaffee trinken.",
    "lv": "Menen kahvilaan juomaan kahvia.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mitkommen?",
    "lv": "Haluatko tulla mukaan?",
    "level": "Sätze"
  },
  {
    "de": "Eine Tasse Kaffee mit Milch, bitte!",
    "lv": "Kuppi kahvia maidon kanssa, kiitos!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneller, ich habe es eilig!",
    "lv": "Nopeammin, kiitos, minulla on kiire!",
    "level": "Sätze"
  },
  {
    "de": "Lass deinen Kaffee nicht kalt werden!",
    "lv": "Älä anna kahvisi jäähtyä!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie etwas Erfrischendes?",
    "lv": "Onko teillä jotakin virkistävää?",
    "level": "Sätze"
  },
  {
    "de": "Eine Portion Eis, bitte!",
    "lv": "Yksi annos jäätelöä, kiitos!",
    "level": "Sätze"
  },
  {
    "de": "Heute Morgen habe ich einen Brief bekommen.",
    "lv": "Tänä aamuna sain kirjeen.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss ihm gleich schreiben.",
    "lv": "Minun täytyy kirjoittaa hänelle heti.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der nächste Briefkasten?",
    "lv": "Missä on lähin postilaatikko?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Post?",
    "lv": "Missä on posti?",
    "level": "Sätze"
  },
  {
    "de": "Erinnere mich morgen daran, zu schreiben!",
    "lv": "Muistuta minua huomenna kirjoittamaan!",
    "level": "Sätze"
  },
  {
    "de": "Werfen Sie bitte diesen Brief in den Briefkasten.",
    "lv": "Pankaa tämä kirje postilaatikkoon, kiitos.",
    "level": "Sätze"
  },
  {
    "de": "Hallo, hier spricht Emma.",
    "lv": "Hei, täällä on Emma.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich dich später anrufen?",
    "lv": "Voinko soittaa sinulle myöhemmin?",
    "level": "Sätze"
  },
  {
    "de": "Muss ich lange warten?",
    "lv": "Joudunko odottamaan kauan?",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneiden Sie mir die Haare.",
    "lv": "Leikatkaa hiukseni, kiitos.",
    "level": "Sätze"
  },
  {
    "de": "Hinten bitte nicht zu kurz.",
    "lv": "Takaa ei liian lyhyeksi, kiitos.",
    "level": "Sätze"
  },
  {
    "de": "Wann beginnt die Vorstellung?",
    "lv": "Milloin esitys alkaa?",
    "level": "Sätze"
  },
  {
    "de": "Es fängt um halb acht an.",
    "lv": "Se alkaa puoli kahdeksalta.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind ausverkauft.",
    "lv": "Kaikki paikat on myyty loppuun.",
    "level": "Sätze"
  },
  {
    "de": "Drei Karten, bitte!",
    "lv": "Kolme lippua, kiitos!",
    "level": "Sätze"
  },
  {
    "de": "Wir lassen die Jacken in der Garderobe.",
    "lv": "Jätämme takit vaatesäilöön.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schnell, der Vorhang geht gleich auf!",
    "lv": "Nopeasti, kiitos, esirippu nousee aivan kohta!",
    "level": "Sätze"
  },
  {
    "de": "Der Vorhang fällt.",
    "lv": "Esirippu laskeutuu.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dich zum Tanz bitten?",
    "lv": "Saanko pyytää sinua tanssimaan?",
    "level": "Sätze"
  },
  {
    "de": "Wann ist eure Hochzeit?",
    "lv": "Milloin teidän häänne ovat?",
    "level": "Sätze"
  },
  {
    "de": "Ich suche eine Wohnung.",
    "lv": "Etsin asuntoa.",
    "level": "Sätze"
  },
  {
    "de": "Ist in diesem Haus eine Wohnung frei?",
    "lv": "Onko tässä talossa vapaata asuntoa?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet die Miete?",
    "lv": "Paljonko vuokra on?",
    "level": "Sätze"
  },
  {
    "de": "Die Wohnung hat drei Zimmer und eine Küche.",
    "lv": "Asunnossa on kolme huonetta ja keittiö.",
    "level": "Sätze"
  },
  {
    "de": "Heute ziehen wir um.",
    "lv": "Tänään muutamme.",
    "level": "Sätze"
  },
  {
    "de": "Mia, pack die Sachen bitte in Kisten!",
    "lv": "Mia, pakkaa tavarat laatikoihin, kiitos!",
    "level": "Sätze"
  },
  {
    "de": "Hast du alles eingepackt?",
    "lv": "Pakkasitko kaiken?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe mit meinem Freund in Kontakt.",
    "lv": "Olen yhteydessä ystävääni.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir ins Theater?",
    "lv": "Mennäänkö teatteriin?",
    "level": "Sätze"
  },
  {
    "de": "Ist alles eingeladen?",
    "lv": "Onko kaikki lastattu?",
    "level": "Sätze"
  },
  {
    "de": "Welch schöne Aussicht!",
    "lv": "Mikä kaunis näköala!",
    "level": "Sätze"
  },
  {
    "de": "Nun können wir alles wieder aufräumen.",
    "lv": "Nyt voimme taas laittaa kaiken järjestykseen.",
    "level": "Sätze"
  },
  {
    "de": "Wie viele Zimmer habt ihr?",
    "lv": "Montako huonetta teillä on?",
    "level": "Sätze"
  },
  {
    "de": "Im Sommer fahre ich ans Meer.",
    "lv": "Kesällä matkustan meren rannalle.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du schwimmen?",
    "lv": "Osaatko uida?",
    "level": "Sätze"
  },
  {
    "de": "Schwimm nicht zu weit hinaus!",
    "lv": "Älä ui liian kauas!",
    "level": "Sätze"
  },
  {
    "de": "Badest du jeden Tag?",
    "lv": "Käytkö uimassa joka päivä?",
    "level": "Sätze"
  },
  {
    "de": "Bei schönem Wetter gehe ich angeln.",
    "lv": "Kauniilla säällä lähden kalaan.",
    "level": "Sätze"
  },
  {
    "de": "Wie sieht er aus?",
    "lv": "Miltä hän näyttää?",
    "level": "Sätze"
  },
  {
    "de": "Er hat sich aber recht verändert.",
    "lv": "Hän on kyllä muuttunut melkoisesti.",
    "level": "Sätze"
  },
  {
    "de": "Wie ist er als Mensch?",
    "lv": "Millainen hän on ihmisenä?",
    "level": "Sätze"
  },
  {
    "de": "Er ist immer nett und freundlich.",
    "lv": "Hän on aina mukava ja ystävällinen.",
    "level": "Sätze"
  },
  {
    "de": "Ich fühle mich nicht wohl.",
    "lv": "En voi hyvin.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe starke Kopfschmerzen.",
    "lv": "Minulla on kova päänsärky.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe mich erkältet.",
    "lv": "Olen vilustunut.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Schnupfen.",
    "lv": "Minulla on nuha.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist schwindlig.",
    "lv": "Minua huimaa.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Arzt gehen.",
    "lv": "Minun täytyy mennä lääkäriin.",
    "level": "Sätze"
  },
  {
    "de": "Leg dich ins Bett!",
    "lv": "Mene sänkyyn!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Fieber?",
    "lv": "Onko sinulla kuumetta?",
    "level": "Sätze"
  },
  {
    "de": "Gestern hatte ich erhöhte Temperatur.",
    "lv": "Eilen minulla oli lämpöä.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Zahnschmerzen.",
    "lv": "Minulla on hammassärkyä.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Zahnarzt gehen.",
    "lv": "Minun täytyy mennä hammaslääkäriin.",
    "level": "Sätze"
  },
  {
    "de": "Weißt du, dass Finn krank ist?",
    "lv": "Tiedätkö, että Finn on sairas?",
    "level": "Sätze"
  },
  {
    "de": "Laut Arzt wird er bald wieder gesund.",
    "lv": "Lääkärin mukaan hän tulee pian taas terveeksi.",
    "level": "Sätze"
  },
  {
    "de": "Ich will meine Wohnung neu möblieren.",
    "lv": "Haluan kalustaa asuntoni uudelleen.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das auf Raten kaufen?",
    "lv": "Voinko ostaa sen osamaksulla?",
    "level": "Sätze"
  },
  {
    "de": "Bleib im Bett, bis es dir besser geht!",
    "lv": "Pysy sängyssä, kunnes voit paremmin!",
    "level": "Sätze"
  },
  {
    "de": "Noah hat in zwei Wochen schwimmen gelernt.",
    "lv": "Noah oppi uimaan kahdessa viikossa.",
    "level": "Sätze"
  },
  {
    "de": "Sei mit dem Essen noch vorsichtig.",
    "lv": "Ole vielä varovainen ruoan kanssa.",
    "level": "Sätze"
  },
  {
    "de": "Sprichst du Deutsch?",
    "lv": "Puhutko saksaa?",
    "level": "Sätze"
  },
  {
    "de": "Ja, ein bisschen.",
    "lv": "Kyllä, vähän.",
    "level": "Sätze"
  },
  {
    "de": "Du sprichst ziemlich fließend.",
    "lv": "Puhut melko sujuvasti.",
    "level": "Sätze"
  },
  {
    "de": "Wo hast du Deutsch gelernt?",
    "lv": "Missä opit saksaa?",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme seit einem Jahr Deutschstunden.",
    "lv": "Olen käynyt saksan tunneilla vuoden ajan.",
    "level": "Sätze"
  },
  {
    "de": "Ich suche immer Gelegenheit, Deutsch zu sprechen.",
    "lv": "Etsin aina tilaisuutta puhua saksaa.",
    "level": "Sätze"
  },
  {
    "de": "Ist das Buch noch vorrätig?",
    "lv": "Onko kirjaa vielä varastossa?",
    "level": "Sätze"
  },
  {
    "de": "Das Buch ist leider ausverkauft.",
    "lv": "Kirja on valitettavasti loppuunmyyty.",
    "level": "Sätze"
  },
  {
    "de": "Wann erscheint die neue Auflage?",
    "lv": "Milloin uusi painos ilmestyy?",
    "level": "Sätze"
  },
  {
    "de": "Womit kann ich Ihnen helfen?",
    "lv": "Miten voin auttaa teitä?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie ganz frische Eier?",
    "lv": "Onko teillä aivan tuoreita munia?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die?",
    "lv": "Mitä ne maksavat?",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu teuer.",
    "lv": "Se on liian kallis.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir ein halbes Kilo abwiegen?",
    "lv": "Voitteko punnita minulle puoli kiloa?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel muss ich zahlen?",
    "lv": "Paljonko minun täytyy maksaa?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet das Kilo?",
    "lv": "Paljonko kilo maksaa?",
    "level": "Sätze"
  },
  {
    "de": "Wiegen Sie mir bitte zwei Kilo ab.",
    "lv": "Punnitkaa minulle kaksi kiloa, kiitos.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch Karotten?",
    "lv": "Onko teillä myös porkkanoita?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie gutes Rindfleisch?",
    "lv": "Onko teillä hyvää naudanlihaa?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir zwei Kilo Hackfleisch.",
    "lv": "Antakaa minulle kaksi kiloa jauhelihaa.",
    "level": "Sätze"
  },
  {
    "de": "Ein Laib Brot, bitte, aber nicht zu knusprig.",
    "lv": "Yksi leipä, kiitos, mutta ei liian rapeakuorinen.",
    "level": "Sätze"
  },
  {
    "de": "Das Brot ist frisch gebacken.",
    "lv": "Leipä on vastaleivottua.",
    "level": "Sätze"
  },
  {
    "de": "Was für Obst haben Sie heute?",
    "lv": "Mitä hedelmiä teillä on tänään?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die Äpfel?",
    "lv": "Mitä omenat maksavat?",
    "level": "Sätze"
  },
  {
    "de": "Dann nehme ich zwei Kilo Äpfel.",
    "lv": "Sitten otan kaksi kiloa omenoita.",
    "level": "Sätze"
  },
  {
    "de": "Die Birnen sind sehr teuer.",
    "lv": "Päärynät ovat hyvin kalliita.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir alles nach Hause liefern?",
    "lv": "Voitteko toimittaa kaiken minulle kotiin?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie Reis?",
    "lv": "Onko teillä riisiä?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir bitte ein Kilo Reis.",
    "lv": "Antakaa minulle kilo riisiä, kiitos.",
    "level": "Sätze"
  },
  {
    "de": "Danke, diesmal nicht.",
    "lv": "Kiitos, ei tällä kertaa.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet dieser Teppich?",
    "lv": "Paljonko tämä matto maksaa?",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Möbel in meine Wohnung liefern?",
    "lv": "Voitteko toimittaa huonekalut asuntooni?",
    "level": "Sätze"
  },
  {
    "de": "Bitte an der Kasse zahlen.",
    "lv": "Pyydetään maksamaan kassalle.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, machen Sie die Rechnung.",
    "lv": "Kirjoittakaa lasku, kiitos.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Meter?",
    "lv": "Paljonko metri maksaa?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Stoff gefällt mir.",
    "lv": "Pidän tästä kankaasta.",
    "level": "Sätze"
  },
  {
    "de": "Schneiden Sie mir bitte drei Meter ab.",
    "lv": "Leikatkaa minulle kolme metriä, kiitos.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch andere Muster?",
    "lv": "Onko teillä myös muita kuoseja? • Onko teillä myös muita näytteitä?",
    "level": "Sätze"
  },
  {
    "de": "Diese Farbe gefällt mir nicht.",
    "lv": "En pidä tästä väristä.",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir eine hellere.",
    "lv": "Antakaa minulle vaaleampi.",
    "level": "Sätze"
  },
  {
    "de": "Was kosten diese Socken?",
    "lv": "Mitä nämä sukat maksavat?",
    "level": "Sätze"
  },
  {
    "de": "Welche Handschuhe wünschen Sie?",
    "lv": "Millaisia käsineitä haluatte?",
    "level": "Sätze"
  },
  {
    "de": "Die sind mir etwas zu eng.",
    "lv": "Ne ovat minulle hieman liian tiukat.",
    "level": "Sätze"
  },
  {
    "de": "So, nun passen sie gut.",
    "lv": "Kas niin, nyt ne sopivat hyvin.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir einen guten Schneider empfehlen?",
    "lv": "Voitko suositella minulle hyvää räätäliä?",
    "level": "Sätze"
  },
  {
    "de": "Ich will einen Anzug bestellen.",
    "lv": "Haluan teettää puvun.",
    "level": "Sätze"
  },
  {
    "de": "Wann wird er fertig sein?",
    "lv": "Milloin se on valmis?",
    "level": "Sätze"
  },
  {
    "de": "Der Anzug sitzt gut.",
    "lv": "Puku istuu hyvin.",
    "level": "Sätze"
  },
  {
    "de": "Die Hose ist zu lang.",
    "lv": "Housut ovat liian pitkät.",
    "level": "Sätze"
  },
  {
    "de": "Bitte reinigen und bügeln Sie ihn!",
    "lv": "Puhdistakaa ja silittäkää se, kiitos!",
    "level": "Sätze"
  },
  {
    "de": "Wann wird das Kleid fertig sein?",
    "lv": "Milloin mekko on valmis?",
    "level": "Sätze"
  },
  {
    "de": "Die Schuhe sind zu eng.",
    "lv": "Kengät ovat liian ahtaat.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Schuhe heute reparieren?",
    "lv": "Voitteko korjata kengät tänään?",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich die Schuhe abholen?",
    "lv": "Milloin voin hakea kengät?",
    "level": "Sätze"
  },
  {
    "de": "Meine Armbanduhr funktioniert nicht.",
    "lv": "Rannekelloni ei toimi.",
    "level": "Sätze"
  },
  {
    "de": "Sie geht fünf Minuten vor.",
    "lv": "Se edistää viisi minuuttia.",
    "level": "Sätze"
  },
  {
    "de": "Bist du kurzsichtig oder weitsichtig?",
    "lv": "Oletko likinäköinen vai kaukonäköinen?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte eine Brille kaufen.",
    "lv": "Haluaisin ostaa silmälasit.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie meine Brille reparieren?",
    "lv": "Voitteko korjata silmälasini?",
    "level": "Sätze"
  },
  {
    "de": "Das dauert nur eine Viertelstunde.",
    "lv": "Se kestää vain vartin.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist mir zu hoch.",
    "lv": "Hinta on minulle liian korkea.",
    "level": "Sätze"
  },
  {
    "de": "Ich brauche zwei Fotos für meinen Pass.",
    "lv": "Tarvitsen kaksi valokuvaa passiani varten.",
    "level": "Sätze"
  },
  {
    "de": "Bitte packen Sie es ein und schicken Sie es mir nach Hause.",
    "lv": "Paketoikaa se ja lähettäkää se minulle kotiin, kiitos.",
    "level": "Sätze"
  },
  {
    "de": "Wir haben feste Preise.",
    "lv": "Meillä on kiinteät hinnat.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, fotografieren Sie mich.",
    "lv": "Ottakaa minusta valokuva, kiitos.",
    "level": "Sätze"
  },
  {
    "de": "Setzen Sie sich, schauen Sie gerade in die Kamera und bewegen Sie sich nicht!",
    "lv": "Istukaa, katsokaa suoraan kameraan ja älkää liikkuko!",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich das Probebild sehen?",
    "lv": "Milloin voin nähdä koevedoksen?",
    "level": "Sätze"
  },
  {
    "de": "Wann sind die Fotos fertig?",
    "lv": "Milloin valokuvat ovat valmiit?",
    "level": "Sätze"
  },
  {
    "de": "Die Aufnahme ist gelungen.",
    "lv": "Kuva onnistui.",
    "level": "Sätze"
  },
  {
    "de": "Die Fotos sind gut geworden.",
    "lv": "Valokuvista tuli hyviä.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie das Foto auch vergrößern?",
    "lv": "Voitteko myös suurentaa valokuvan?",
    "level": "Sätze"
  },
  {
    "de": "Sind diese Steine echt?",
    "lv": "Ovatko nämä kivet aitoja?",
    "level": "Sätze"
  },
  {
    "de": "Ist das echtes Gold?",
    "lv": "Onko tämä aitoa kultaa?",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir bitte Trauringe.",
    "lv": "Näyttäkää minulle vihkisormuksia, kiitos.",
    "level": "Sätze"
  },
  {
    "de": "Der Ring ist mir etwas zu weit.",
    "lv": "Sormus on minulle hieman liian väljä.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann ihn enger machen.",
    "lv": "Voin pienentää sen.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Ring passt mir.",
    "lv": "Tämä sormus sopii minulle.",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir schöne Geschenkideen.",
    "lv": "Näyttäkää minulle kauniita lahjaideoita.",
    "level": "Sätze"
  },
  {
    "de": "Wie gefallen dir diese Ohrringe?",
    "lv": "Mitä pidät näistä korvakoruista?",
    "level": "Sätze"
  },
  {
    "de": "Diese Brosche ist wirklich schön.",
    "lv": "Tämä rintakoru on todella kaunis.",
    "level": "Sätze"
  },
  {
    "de": "Der Stein ist ein Saphir.",
    "lv": "Kivi on safiiri.",
    "level": "Sätze"
  },
  {
    "de": "Das ist kein echter Stein, das ist Glas.",
    "lv": "Tämä ei ole aito kivi, se on lasia.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Armband kann ich Ihnen besonders empfehlen.",
    "lv": "Tätä rannekorua voin erityisesti suositella teille.",
    "level": "Sätze"
  },
  {
    "de": "Es ist besonders schön gearbeitet.",
    "lv": "Se on erityisen kauniisti tehty.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist nicht hoch.",
    "lv": "Hinta ei ole korkea.",
    "level": "Sätze"
  },
  {
    "de": "Bekomme ich die Schachtel gratis?",
    "lv": "Saanko rasian ilmaiseksi?",
    "level": "Sätze"
  },
  {
    "de": "Alle Schmuckstücke sind gestempelt.",
    "lv": "Kaikki korut on leimattu.",
    "level": "Sätze"
  },
  {
    "de": "Falls es meiner Frau nicht gefällt, kann ich es umtauschen?",
    "lv": "Jos vaimoni ei pidä siitä, voinko vaihtaa sen?",
    "level": "Sätze"
  },
  {
    "de": "Natürlich, jederzeit.",
    "lv": "Tietysti, milloin tahansa.",
    "level": "Sätze"
  }
];

window.SENTENCE_ENTRIES = SENTENCE_ENTRIES;

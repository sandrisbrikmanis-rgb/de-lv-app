const SENTENCE_ENTRIES = [
  {
    "de": "Hüte dich davor!",
    "lv": "Gættu þín á því!",
    "level": "Sätze"
  },
  {
    "de": "Wenn nichts dazwischenkommt.",
    "lv": "Ef ekkert kemur upp á. • Ef allt gengur að óskum.",
    "level": "Sätze"
  },
  {
    "de": "Das kann ich mir denken!",
    "lv": "Það get ég ímyndað mér!",
    "level": "Sätze"
  },
  {
    "de": "Ist er denn krank?",
    "lv": "Er hann þá veikur?",
    "level": "Sätze"
  },
  {
    "de": "Was denn?",
    "lv": "Hvað er það?",
    "level": "Sätze"
  },
  {
    "de": "Desto mehr.",
    "lv": "Þeim mun meira.",
    "level": "Sätze"
  },
  {
    "de": "Je mehr, desto besser.",
    "lv": "Því meira, því betra.",
    "level": "Sätze"
  },
  {
    "de": "Alles deutet auf Regen.",
    "lv": "Allt bendir til þess að það fari að rigna.",
    "level": "Sätze"
  },
  {
    "de": "Damit ist mir wenig gedient.",
    "lv": "Það gagnast mér lítið.",
    "level": "Sätze"
  },
  {
    "de": "Er ist dienstlich verhindert.",
    "lv": "Hann kemst ekki vegna anna í vinnunni.",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie doch!",
    "lv": "Segðu nú eitthvað!",
    "level": "Sätze"
  },
  {
    "de": "Es donnert.",
    "lv": "Það þrumar.",
    "level": "Sätze"
  },
  {
    "de": "Doppelt so groß.",
    "lv": "Tvöfalt stærra.",
    "level": "Sätze"
  },
  {
    "de": "Von dort.",
    "lv": "Þaðan.",
    "level": "Sätze"
  },
  {
    "de": "Die Zeit drängt.",
    "lv": "Tíminn er naumur.",
    "level": "Sätze"
  },
  {
    "de": "Ihn drücken Sorgen.",
    "lv": "Áhyggjur íþyngja honum.",
    "level": "Sätze"
  },
  {
    "de": "Hast du das Buch durchgearbeitet?",
    "lv": "Hefurðu farið vandlega í gegnum bókina?",
    "level": "Sätze"
  },
  {
    "de": "Kein Durchgang!",
    "lv": "Bannað að ganga í gegn!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich Sie bitten?",
    "lv": "Má ég bjóða þér upp í dans? • Viltu gjöra svo vel að koma með mér?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin durstig.",
    "lv": "Ég er þyrstur.",
    "level": "Sätze"
  },
  {
    "de": "Eben das meine ich.",
    "lv": "Einmitt það á ég við.",
    "level": "Sätze"
  },
  {
    "de": "Es ist ganz egal.",
    "lv": "Það skiptir alls engu máli.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie eigentlich?",
    "lv": "Hvað viltu eiginlega?",
    "level": "Sätze"
  },
  {
    "de": "Eilt es mit dieser Sache?",
    "lv": "Liggur á þessu máli?",
    "level": "Sätze"
  },
  {
    "de": "Eilt sehr!",
    "lv": "Mjög áríðandi!",
    "level": "Sätze"
  },
  {
    "de": "Ich habe es eilig.",
    "lv": "Mér liggur á.",
    "level": "Sätze"
  },
  {
    "de": "Du bildest dir nur ein, krank zu sein.",
    "lv": "Þú ímyndar þér bara að þú sért veikur.",
    "level": "Sätze"
  },
  {
    "de": "Was fällt dir ein?",
    "lv": "Hvað leyfirðu þér? • Hvað dettur þér í hug?",
    "level": "Sätze"
  },
  {
    "de": "Es war einmal.",
    "lv": "Einu sinni var.",
    "level": "Sätze"
  },
  {
    "de": "Steigen Sie bitte ein!",
    "lv": "Gjörðu svo vel að stíga inn! • Gjörðu svo vel að stíga um borð!",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie ein!",
    "lv": "Gjörðu svo vel að ganga inn!",
    "level": "Sätze"
  },
  {
    "de": "Einzelnes hat mir dort gefallen.",
    "lv": "Mér líkaði sumt þar.",
    "level": "Sätze"
  },
  {
    "de": "Es empfiehlt sich.",
    "lv": "Það er ráðlegt.",
    "level": "Sätze"
  },
  {
    "de": "Diese Flasche enthält Essig.",
    "lv": "Í þessari flösku er edik.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldigen Sie bitte!",
    "lv": "Fyrirgefðu!",
    "level": "Sätze"
  },
  {
    "de": "Entweder ... oder ...",
    "lv": "Annaðhvort ... eða ...",
    "level": "Sätze"
  },
  {
    "de": "Wer war der Erste?",
    "lv": "Hver var fyrstur?",
    "level": "Sätze"
  },
  {
    "de": "Wer fehlt heute?",
    "lv": "Hvern vantar í dag?",
    "level": "Sätze"
  },
  {
    "de": "Was fehlt dir?",
    "lv": "Hvað amar að þér?",
    "level": "Sätze"
  },
  {
    "de": "Wie heißen Sie?",
    "lv": "Hvað heitir þú?",
    "level": "Sätze"
  },
  {
    "de": "Was soll das heißen?",
    "lv": "Hvað á þetta að þýða?",
    "level": "Sätze"
  },
  {
    "de": "Bitte treten Sie näher heran!",
    "lv": "Gjörðu svo vel að koma nær!",
    "level": "Sätze"
  },
  {
    "de": "Heraus mit der Sprache!",
    "lv": "Láttu það flakka!",
    "level": "Sätze"
  },
  {
    "de": "im Herbst",
    "lv": "á haustin",
    "level": "Sätze"
  },
  {
    "de": "Meine Herrschaften!",
    "lv": "Dömur mínar og herrar!",
    "level": "Sätze"
  },
  {
    "de": "von heute an",
    "lv": "frá og með deginum í dag",
    "level": "Sätze"
  },
  {
    "de": "heute früh",
    "lv": "í morgun",
    "level": "Sätze"
  },
  {
    "de": "heute Nacht",
    "lv": "í nótt",
    "level": "Sätze"
  },
  {
    "de": "Zu Hilfe!",
    "lv": "Hjálp!",
    "level": "Sätze"
  },
  {
    "de": "Ich lerne jeden Tag Deutsch.",
    "lv": "Ég læri þýsku á hverjum degi.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das bitte wiederholen?",
    "lv": "Geturðu vinsamlegast endurtekið þetta?",
    "level": "Sätze"
  },
  {
    "de": "Wir treffen uns am Bahnhof.",
    "lv": "Við hittumst á lestarstöðinni.",
    "level": "Sätze"
  },
  {
    "de": "Ich stimme dir teilweise zu.",
    "lv": "Ég er þér að hluta til sammála.",
    "level": "Sätze"
  },
  {
    "de": "Diese Entscheidung hat weitreichende Folgen.",
    "lv": "Þessi ákvörðun hefur víðtækar afleiðingar.",
    "level": "Sätze"
  },
  {
    "de": "Man sollte mehrere Perspektiven berücksichtigen.",
    "lv": "Taka ætti tillit til margra sjónarmiða.",
    "level": "Sätze"
  },
  {
    "de": "Könnten Sie das näher erläutern?",
    "lv": "Gætirðu útskýrt þetta nánar?",
    "level": "Sätze"
  },
  {
    "de": "Was mich anbelangt, ...",
    "lv": "Hvað mig varðar ...",
    "level": "Sätze"
  },
  {
    "de": "Wie alt sind Sie?",
    "lv": "Hvað ertu gamall?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zwanzig Jahre alt.",
    "lv": "Ég er tuttugu ára.",
    "level": "Sätze"
  },
  {
    "de": "Von heute an.",
    "lv": "Frá og með deginum í dag.",
    "level": "Sätze"
  },
  {
    "de": "Von jetzt an.",
    "lv": "Héðan í frá.",
    "level": "Sätze"
  },
  {
    "de": "Anders geht es nicht.",
    "lv": "Það er engin önnur leið.",
    "level": "Sätze"
  },
  {
    "de": "Rufen Sie mich an.",
    "lv": "Hringdu í mig.",
    "level": "Sätze"
  },
  {
    "de": "Bitte stellen Sie das Radio ab.",
    "lv": "Vinsamlegast slökktu á útvarpinu.",
    "level": "Sätze"
  },
  {
    "de": "Achte bitte auf den Verkehr.",
    "lv": "Gættu þín á umferðinni.",
    "level": "Sätze"
  },
  {
    "de": "Darauf musst du achten.",
    "lv": "Þú verður að gæta að þessu.",
    "level": "Sätze"
  },
  {
    "de": "Heute mache ich es anders.",
    "lv": "Í dag geri ég það öðruvísi.",
    "level": "Sätze"
  },
  {
    "de": "Wir warten auf den Bus.",
    "lv": "Við erum að bíða eftir strætó.",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt allein.",
    "lv": "Hann býr einn.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Ausbildung absolviert.",
    "lv": "Ég hef lokið starfsnáminu. • Ég hef lokið náminu.",
    "level": "Sätze"
  },
  {
    "de": "Ich warte den Regen ab.",
    "lv": "Ég bíð þangað til styttir upp.",
    "level": "Sätze"
  },
  {
    "de": "Er arbeitet in der Verkaufsabteilung.",
    "lv": "Hann vinnur í söludeildinni.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin allergisch gegen Katzen.",
    "lv": "Ég er með ofnæmi fyrir köttum.",
    "level": "Sätze"
  },
  {
    "de": "Andererseits verstehe ich ihn.",
    "lv": "Á hinn bóginn skil ég hann.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Situation analysiert.",
    "lv": "Ég hef greint stöðuna.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat meinen Vorschlag akzeptiert.",
    "lv": "Hún samþykkti tillöguna mína.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte das genauer analysieren.",
    "lv": "Mig langar að greina þetta nánar.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte den Vertrag ändern.",
    "lv": "Mig langar að breyta samningnum.",
    "level": "Sätze"
  },
  {
    "de": "Er ändert ständig seine Meinung.",
    "lv": "Hann skiptir sífellt um skoðun.",
    "level": "Sätze"
  },
  {
    "de": "Ähnliche Probleme hatten wir schon früher.",
    "lv": "Við höfum áður glímt við svipuð vandamál.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ahnung!",
    "lv": "Ekki hugmynd!",
    "level": "Sätze"
  },
  {
    "de": "Hör auf zu jammern.",
    "lv": "Hættu að væla.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Kleid ist stilvoll und konservativ.",
    "lv": "Þessi kjóll er smekklega íhaldssamur.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre gerne Akkordeonmusik.",
    "lv": "Mér finnst gaman að hlusta á harmonikutónlist.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das Gerät anklicken?",
    "lv": "Geturðu smellt á tækið?",
    "level": "Sätze"
  },
  {
    "de": "Bitte öffne die Datei und klicke darauf.",
    "lv": "Vinsamlegast opnaðu skrána og smelltu á hana.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe einen Unfall gehabt.",
    "lv": "Ég lenti í slysi.",
    "level": "Sätze"
  },
  {
    "de": "Wir laufen zum Bahnhof.",
    "lv": "Við göngum á lestarstöðina.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schalte den Fernseher an.",
    "lv": "Vinsamlegast kveiktu á sjónvarpinu.",
    "level": "Sätze"
  },
  {
    "de": "Mein Computer ist abgestürzt.",
    "lv": "Tölvan mín hrundi.",
    "level": "Sätze"
  },
  {
    "de": "Am Wochenende gehe ich angeln.",
    "lv": "Um helgina fer ég að veiða.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe den Anruf verpasst.",
    "lv": "Ég missti af símtalinu.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mich später anrufen?",
    "lv": "Geturðu hringt í mig seinna?",
    "level": "Sätze"
  },
  {
    "de": "Bitte nimm meinen Vorschlag an.",
    "lv": "Vinsamlegast samþykktu tillöguna mína.",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme dein Angebot an.",
    "lv": "Ég tek tilboði þínu.",
    "level": "Sätze"
  },
  {
    "de": "Er nahm die Einladung an.",
    "lv": "Hann þáði boðið.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Angst vor Spinnen.",
    "lv": "Ég er hræddur við köngulær.",
    "level": "Sätze"
  },
  {
    "de": "Keine Angst, alles wird gut.",
    "lv": "Engar áhyggjur, þetta fer allt vel.",
    "level": "Sätze"
  },
  {
    "de": "Anklang finden.",
    "lv": "Að fá góðar undirtektir. • Að hitta í mark.",
    "level": "Sätze"
  },
  {
    "de": "Es kommt darauf an.",
    "lv": "Það fer eftir atvikum.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Anlass.",
    "lv": "Af þessu tilefni.",
    "level": "Sätze"
  },
  {
    "de": "Nehmen wir an, dass ...",
    "lv": "Gefum okkur að ...",
    "level": "Sätze"
  },
  {
    "de": "Was hast du da angerichtet?",
    "lv": "Hvað hefurðu nú gert af þér?",
    "level": "Sätze"
  },
  {
    "de": "Bis ans Ende.",
    "lv": "Allt til enda.",
    "level": "Sätze"
  },
  {
    "de": "Du glaubst mir anscheinend nicht.",
    "lv": "Þú virðist ekki trúa mér.",
    "level": "Sätze"
  },
  {
    "de": "Meiner Ansicht nach ...",
    "lv": "Að mínu mati ...",
    "level": "Sätze"
  },
  {
    "de": "Stell dich nicht so an!",
    "lv": "Láttu ekki svona!",
    "level": "Sätze"
  },
  {
    "de": "An die Arbeit gehen.",
    "lv": "Að hefjast handa.",
    "level": "Sätze"
  },
  {
    "de": "Außer Atem sein.",
    "lv": "Að vera móður.",
    "level": "Sätze"
  },
  {
    "de": "Guten Appetit!",
    "lv": "Verði þér að góðu!",
    "level": "Sätze"
  },
  {
    "de": "In einem Atemzug.",
    "lv": "Í einni bunu.",
    "level": "Sätze"
  },
  {
    "de": "Auf jeden Fall.",
    "lv": "Í öllu falli.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal war alles still.",
    "lv": "Allt í einu varð allt hljótt.",
    "level": "Sätze"
  },
  {
    "de": "Bitte mach die Tür auf!",
    "lv": "Vinsamlegast opnaðu dyrnar!",
    "level": "Sätze"
  },
  {
    "de": "Er hat den Kredit aufgenommen.",
    "lv": "Hann tók lánið.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen heute aufräumen.",
    "lv": "Við þurfum að taka til í dag.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre jetzt auf.",
    "lv": "Ég hætti núna.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schon auf.",
    "lv": "Hann er þegar kominn á fætur.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen das Treffen verschieben.",
    "lv": "Við þurfum að fresta fundinum.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat mich aufgeregt.",
    "lv": "Hún æsti mig upp.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal.",
    "lv": "Allt í einu.",
    "level": "Sätze"
  },
  {
    "de": "Auf der Stelle.",
    "lv": "Á stundinni.",
    "level": "Sätze"
  },
  {
    "de": "Für den Schaden aufkommen.",
    "lv": "Að greiða fyrir tjónið.",
    "level": "Sätze"
  },
  {
    "de": "Bitte die Tür auf!",
    "lv": "Opnaðu dyrnar, takk!",
    "level": "Sätze"
  },
  {
    "de": "Aufrecht sitzen.",
    "lv": "Að sitja uppréttur.",
    "level": "Sätze"
  },
  {
    "de": "Er ist auf.",
    "lv": "Hann er kominn á fætur.",
    "level": "Sätze"
  },
  {
    "de": "Alle Kräfte aufwenden.",
    "lv": "Að beita öllum kröftum sínum.",
    "level": "Sätze"
  },
  {
    "de": "Viel Mühe aufwenden.",
    "lv": "Að leggja mikið á sig.",
    "level": "Sätze"
  },
  {
    "de": "Geh mir aus den Augen!",
    "lv": "Farðu úr augsýn minni!",
    "level": "Sätze"
  },
  {
    "de": "Unter vier Augen.",
    "lv": "Undir fjögur augu.",
    "level": "Sätze"
  },
  {
    "de": "Aus Mangel an Zeit.",
    "lv": "Vegna tímaskorts.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Grunde.",
    "lv": "Af þessari ástæðu.",
    "level": "Sätze"
  },
  {
    "de": "Alle außer dir.",
    "lv": "Allir nema þú.",
    "level": "Sätze"
  },
  {
    "de": "Auf Äußerlichkeiten Wert legen.",
    "lv": "Að leggja mikið upp úr ytra útliti.",
    "level": "Sätze"
  },
  {
    "de": "Im äußersten Fall.",
    "lv": "Ef í harðbakkann slær.",
    "level": "Sätze"
  },
  {
    "de": "Äußerst wichtig.",
    "lv": "Afar mikilvægt.",
    "level": "Sätze"
  },
  {
    "de": "Aussicht auf die See.",
    "lv": "Útsýni yfir hafið.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gute Aussichten.",
    "lv": "Hann á góða möguleika.",
    "level": "Sätze"
  },
  {
    "de": "Wie wird dieses Wort ausgesprochen?",
    "lv": "Hvernig er þetta orð borið fram?",
    "level": "Sätze"
  },
  {
    "de": "Sein Beileid aussprechen.",
    "lv": "Að votta samúð sína.",
    "level": "Sätze"
  },
  {
    "de": "Wann wurden die Meisterschaftskämpfe ausgetragen?",
    "lv": "Hvenær var meistaramótið haldið?",
    "level": "Sätze"
  },
  {
    "de": "Welchen Beruf üben Sie aus?",
    "lv": "Við hvað starfar þú?",
    "level": "Sätze"
  },
  {
    "de": "Einfluss ausüben.",
    "lv": "Að hafa áhrif.",
    "level": "Sätze"
  },
  {
    "de": "Auswärts essen.",
    "lv": "Að borða úti.",
    "level": "Sätze"
  },
  {
    "de": "Per Bahn.",
    "lv": "Með járnbraut.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Bahn.",
    "lv": "Með lest.",
    "level": "Sätze"
  },
  {
    "de": "Möglichst bald.",
    "lv": "Sem fyrst.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist Angst und bange.",
    "lv": "Ég er dauðhræddur.",
    "level": "Sätze"
  },
  {
    "de": "Auf die lange Bank schieben.",
    "lv": "Að skjóta einhverju á frest.",
    "level": "Sätze"
  },
  {
    "de": "Bar zahlen.",
    "lv": "Að greiða í reiðufé.",
    "level": "Sätze"
  },
  {
    "de": "Erz bauen.",
    "lv": "Að vinna málmgrýti.",
    "level": "Sätze"
  },
  {
    "de": "Mist bauen.",
    "lv": "Að klúðra málunum.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin beauftragt.",
    "lv": "Mér hefur verið falið þetta verkefni.",
    "level": "Sätze"
  },
  {
    "de": "Nach Bedarf.",
    "lv": "Eftir þörfum.",
    "level": "Sätze"
  },
  {
    "de": "Ich bedauere ihn.",
    "lv": "Ég vorkenni honum.",
    "level": "Sätze"
  },
  {
    "de": "Was bedeutet dieses Wort?",
    "lv": "Hvað þýðir þetta orð?",
    "level": "Sätze"
  },
  {
    "de": "Unter der Bedingung, dass ...",
    "lv": "Með því skilyrði að ...",
    "level": "Sätze"
  },
  {
    "de": "Sie sieht bedrückt aus.",
    "lv": "Hún virðist niðurdregin.",
    "level": "Sätze"
  },
  {
    "de": "Hinweise befolgen.",
    "lv": "Að fara eftir leiðbeiningum.",
    "level": "Sätze"
  },
  {
    "de": "Befehle befolgen.",
    "lv": "Að hlýða skipunum.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Post befördern.",
    "lv": "Að senda í pósti.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin begierig zu wissen.",
    "lv": "Ég er spenntur að fá að vita það.",
    "level": "Sätze"
  },
  {
    "de": "Zu Beginn.",
    "lv": "Í upphafi.",
    "level": "Sätze"
  },
  {
    "de": "Am Beginn.",
    "lv": "Í byrjun.",
    "level": "Sätze"
  },
  {
    "de": "Bei Beginn.",
    "lv": "Við upphafið.",
    "level": "Sätze"
  },
  {
    "de": "In Begleitung.",
    "lv": "Í fylgd.",
    "level": "Sätze"
  },
  {
    "de": "Mit seiner Begleitung.",
    "lv": "Með förunaut sínum.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schwer von Begriff.",
    "lv": "Hann er lengi að kveikja á perunni.",
    "level": "Sätze"
  },
  {
    "de": "Im Gedächtnis behalten.",
    "lv": "Að geyma í minni.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tisch.",
    "lv": "Undir borðum.",
    "level": "Sätze"
  },
  {
    "de": "Bei Sinnen sein.",
    "lv": "Að vera með réttu ráði.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tage.",
    "lv": "Að degi til.",
    "level": "Sätze"
  },
  {
    "de": "Bei weitem nicht so.",
    "lv": "Ekki nærri því eins.",
    "level": "Sätze"
  },
  {
    "de": "Alle beide.",
    "lv": "Bæði tvö.",
    "level": "Sätze"
  },
  {
    "de": "Stürmischer Beifall brach los.",
    "lv": "Dynjandi lófatak brast á.",
    "level": "Sätze"
  },
  {
    "de": "Beifall finden.",
    "lv": "Að falla í góðan jarðveg.",
    "level": "Sätze"
  },
  {
    "de": "Beileid aussprechen.",
    "lv": "Að votta samúð.",
    "level": "Sätze"
  },
  {
    "de": "Auf eigenen Beinen stehen.",
    "lv": "Að standa á eigin fótum.",
    "level": "Sätze"
  },
  {
    "de": "Zum Beispiel.",
    "lv": "Til dæmis.",
    "level": "Sätze"
  },
  {
    "de": "Beistand leisten.",
    "lv": "Að veita liðsinni.",
    "level": "Sätze"
  },
  {
    "de": "Beitrag leisten.",
    "lv": "Að leggja sitt af mörkum.",
    "level": "Sätze"
  },
  {
    "de": "Jemandes Bekanntschaft machen.",
    "lv": "Að kynnast einhverjum.",
    "level": "Sätze"
  },
  {
    "de": "Bekanntschaft anknüpfen.",
    "lv": "Að stofna til kunningsskapar.",
    "level": "Sätze"
  },
  {
    "de": "Belegte Brötchen.",
    "lv": "Smurð rúnstykki.",
    "level": "Sätze"
  },
  {
    "de": "Nach Ihrem Belieben.",
    "lv": "Eftir þínu höfði.",
    "level": "Sätze"
  },
  {
    "de": "Zu jeder beliebigen Zeit.",
    "lv": "Hvenær sem er.",
    "level": "Sätze"
  },
  {
    "de": "Schweigen beobachten.",
    "lv": "Að gæta þagnar.",
    "level": "Sätze"
  },
  {
    "de": "Zur Bequemlichkeit.",
    "lv": "Til hægðarauka.",
    "level": "Sätze"
  },
  {
    "de": "Bereit sein.",
    "lv": "Að vera tilbúinn. • Að vera fús.",
    "level": "Sätze"
  },
  {
    "de": "Unfallopfer bergen.",
    "lv": "Að bjarga fórnarlömbum slyss.",
    "level": "Sätze"
  },
  {
    "de": "Bericht erstatten.",
    "lv": "Að gefa skýrslu.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind besetzt.",
    "lv": "Öll sæti eru setin.",
    "level": "Sätze"
  },
  {
    "de": "Neue Besen kehren gut.",
    "lv": "Nýir vendir sópa best.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt ein Haus.",
    "lv": "Hann á hús.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt viel Mut.",
    "lv": "Hann býr yfir miklu hugrekki.",
    "level": "Sätze"
  },
  {
    "de": "Desto besser.",
    "lv": "Þeim mun betra.",
    "level": "Sätze"
  },
  {
    "de": "Gute Besserung!",
    "lv": "Góðan bata!",
    "level": "Sätze"
  },
  {
    "de": "Beim besten Willen.",
    "lv": "Með besta vilja.",
    "level": "Sätze"
  },
  {
    "de": "Am besten.",
    "lv": "Best af öllu.",
    "level": "Sätze"
  },
  {
    "de": "Es besteht Zweifel.",
    "lv": "Vafi leikur á því.",
    "level": "Sätze"
  },
  {
    "de": "Seine Aufgabe besteht darin ...",
    "lv": "Verkefni hans felst í því að ...",
    "level": "Sätze"
  },
  {
    "de": "Grüße bestellen.",
    "lv": "Að skila kveðju.",
    "level": "Sätze"
  },
  {
    "de": "Ganz bestimmt.",
    "lv": "Alveg örugglega.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch kommen.",
    "lv": "Að koma í heimsókn.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch sein.",
    "lv": "Að vera í heimsókn.",
    "level": "Sätze"
  },
  {
    "de": "Oft Konzerte besuchen.",
    "lv": "Að fara oft á tónleika.",
    "level": "Sätze"
  },
  {
    "de": "Welche Schule hat er besucht?",
    "lv": "Í hvaða skóla gekk hann?",
    "level": "Sätze"
  },
  {
    "de": "In Betracht ziehen.",
    "lv": "Að taka til greina.",
    "level": "Sätze"
  },
  {
    "de": "Außer Betracht lassen.",
    "lv": "Að taka ekki til greina.",
    "level": "Sätze"
  },
  {
    "de": "Er betreibt ein Hotel.",
    "lv": "Hann rekur hótel.",
    "level": "Sätze"
  },
  {
    "de": "Alle beiden.",
    "lv": "Báðir tveir.",
    "level": "Sätze"
  },
  {
    "de": "Alles bezahlen.",
    "lv": "Að borga allt.",
    "level": "Sätze"
  },
  {
    "de": "In Bezug auf etwas.",
    "lv": "Með tilliti til einhvers.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön.",
    "lv": "Ekkert að þakka. • Gjörðu svo vel.",
    "level": "Sätze"
  },
  {
    "de": "Wie bitte?",
    "lv": "Fyrirgefðu?",
    "level": "Sätze"
  },
  {
    "de": "Bitte sehr.",
    "lv": "Það var ekkert. • Gjörðu svo vel.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe eine Bitte an Sie.",
    "lv": "Mig langar að biðja þig bónar.",
    "level": "Sätze"
  },
  {
    "de": "Trompete blasen.",
    "lv": "Að spila á trompet.",
    "level": "Sätze"
  },
  {
    "de": "In einem Buch blättern.",
    "lv": "Að fletta í bók.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßen Füßen.",
    "lv": "Berfættur.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßem Auge.",
    "lv": "Með berum augum.",
    "level": "Sätze"
  },
  {
    "de": "Danke für die Blumen!",
    "lv": "Takk fyrir hrósið!",
    "level": "Sätze"
  },
  {
    "de": "Alles in Butter.",
    "lv": "Allt í himnalagi.",
    "level": "Sätze"
  },
  {
    "de": "Bitte checken.",
    "lv": "Vinsamlegast athugaðu.",
    "level": "Sätze"
  },
  {
    "de": "Da ist er!",
    "lv": "Þarna er hann!",
    "level": "Sätze"
  },
  {
    "de": "Alles spricht dafür.",
    "lv": "Allt bendir til þess.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann nichts dafür.",
    "lv": "Það er ekki mér að kenna.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin dagegen.",
    "lv": "Ég er á móti því.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe nichts dagegen.",
    "lv": "Ég hef ekkert á móti því.",
    "level": "Sätze"
  },
  {
    "de": "Von daheim.",
    "lv": "Að heiman.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Dame ziehen.",
    "lv": "Að leika drottningunni.",
    "level": "Sätze"
  },
  {
    "de": "Es dämmert.",
    "lv": "Það rökkvar. • Það dagar.",
    "level": "Sätze"
  },
  {
    "de": "Danke schön!",
    "lv": "Kærar þakkir!",
    "level": "Sätze"
  },
  {
    "de": "Dann und wann.",
    "lv": "Öðru hverju.",
    "level": "Sätze"
  },
  {
    "de": "Darauf kannst du dich verlassen.",
    "lv": "Þú getur treyst því.",
    "level": "Sätze"
  },
  {
    "de": "Daraus wird nichts.",
    "lv": "Það verður ekkert úr því.",
    "level": "Sätze"
  },
  {
    "de": "So dass ...",
    "lv": "Þannig að ...",
    "level": "Sätze"
  },
  {
    "de": "Für wen halten Sie mich?",
    "lv": "Hvað heldurðu eiginlega að ég sé?",
    "level": "Sätze"
  },
  {
    "de": "Hände weg!",
    "lv": "Burt með hendurnar!",
    "level": "Sätze"
  },
  {
    "de": "Lass den Kopf nicht hängen!",
    "lv": "Láttu ekki deigan síga!",
    "level": "Sätze"
  },
  {
    "de": "zu Hause",
    "lv": "heima",
    "level": "Sätze"
  },
  {
    "de": "nach Hause gehen",
    "lv": "að fara heim",
    "level": "Sätze"
  },
  {
    "de": "von Haus aus",
    "lv": "upphaflega • að eðlisfari",
    "level": "Sätze"
  },
  {
    "de": "Meinen herzlichsten Glückwunsch!",
    "lv": "Innilegar hamingjuóskir!",
    "level": "Sätze"
  },
  {
    "de": "Seien Sie so gut!",
    "lv": "Vertu svo vænn!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie die Güte!",
    "lv": "Vertu svo góður!",
    "level": "Sätze"
  },
  {
    "de": "Was hast du?",
    "lv": "Hvað er að þér?",
    "level": "Sätze"
  },
  {
    "de": "Gestatten Sie bitte!",
    "lv": "Með leyfi! • Leyfðu mér!",
    "level": "Sätze"
  },
  {
    "de": "Ist es gestattet zu rauchen?",
    "lv": "Er leyfilegt að reykja?",
    "level": "Sätze"
  },
  {
    "de": "Ich muss gestehen, dass ...",
    "lv": "Ég verð að viðurkenna að ...",
    "level": "Sätze"
  },
  {
    "de": "gestern früh",
    "lv": "í gærmorgun",
    "level": "Sätze"
  },
  {
    "de": "gestern Abend",
    "lv": "í gærkvöldi",
    "level": "Sätze"
  },
  {
    "de": "Es ist mir gleichgültig, ob ...",
    "lv": "Mér er sama hvort ...",
    "level": "Sätze"
  },
  {
    "de": "Was ist geschehen?",
    "lv": "Hvað gerðist?",
    "level": "Sätze"
  },
  {
    "de": "Mach keine Geschichten!",
    "lv": "Ekki vera með neina vitleysu! • Ekki gera veður út af þessu!",
    "level": "Sätze"
  },
  {
    "de": "Geschweige denn ...",
    "lv": "Hvað þá ...",
    "level": "Sätze"
  },
  {
    "de": "Gehen Sie geradeaus!",
    "lv": "Farðu beint áfram!",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es Ihnen?",
    "lv": "Hvernig hefurðu það?",
    "level": "Sätze"
  },
  {
    "de": "Frag ihn gelegentlich, ob ...",
    "lv": "Spurðu hann við tækifæri hvort ...",
    "level": "Sätze"
  },
  {
    "de": "morgen früh",
    "lv": "í fyrramálið",
    "level": "Sätze"
  },
  {
    "de": "im Frühling",
    "lv": "á vorin",
    "level": "Sätze"
  },
  {
    "de": "Was gibt’s Neues?",
    "lv": "Hvað er að frétta?",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Brief folgt, dass ...",
    "lv": "Af þessu bréfi má ráða að ...",
    "level": "Sätze"
  },
  {
    "de": "Fahre fort!",
    "lv": "Haltu áfram!",
    "level": "Sätze"
  },
  {
    "de": "Er ist kein Freund von ...",
    "lv": "Hann er ekki hrifinn af ...",
    "level": "Sätze"
  },
  {
    "de": "Es erwies sich, dass ...",
    "lv": "Í ljós kom að ...",
    "level": "Sätze"
  },
  {
    "de": "Gedenkst du meiner?",
    "lv": "Manstu eftir mér? • Hugsarðu til mín?",
    "level": "Sätze"
  },
  {
    "de": "im Winter",
    "lv": "á veturna",
    "level": "Sätze"
  },
  {
    "de": "Welcher Jahrgang sind Sie?",
    "lv": "Hvaða ár ertu fæddur?",
    "level": "Sätze"
  },
  {
    "de": "Es jammert mich zu sehen ...",
    "lv": "Það tekur mig sárt að sjá ...",
    "level": "Sätze"
  },
  {
    "de": "je mehr, desto besser",
    "lv": "því meira, því betra",
    "level": "Sätze"
  },
  {
    "de": "bis jetzt",
    "lv": "hingað til",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich zum Bahnhof?",
    "lv": "Hvernig kemst ég á lestarstöðina?",
    "level": "Sätze"
  },
  {
    "de": "Komm her!",
    "lv": "Komdu hingað!",
    "level": "Sätze"
  },
  {
    "de": "Könnte ich Frau N. sprechen?",
    "lv": "Gæti ég fengið að tala við frú N.?",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das?",
    "lv": "Hvað kostar þetta?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange dauert die Vorstellung?",
    "lv": "Hversu lengi stendur sýningin?",
    "level": "Sätze"
  },
  {
    "de": "Lass das!",
    "lv": "Hættu þessu! • Láttu þetta vera!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich in Ruhe!",
    "lv": "Láttu mig í friði!",
    "level": "Sätze"
  },
  {
    "de": "Lassen Sie mich Ihnen helfen!",
    "lv": "Leyfðu mér að hjálpa þér!",
    "level": "Sätze"
  },
  {
    "de": "Lasst uns gehen!",
    "lv": "Förum!",
    "level": "Sätze"
  },
  {
    "de": "Na, wie läufts?",
    "lv": "Jæja, hvernig gengur?",
    "level": "Sätze"
  },
  {
    "de": "Es lebe!",
    "lv": "Lengi lifi!",
    "level": "Sätze"
  },
  {
    "de": "Leben Sie wohl!",
    "lv": "Vertu sæll!",
    "level": "Sätze"
  },
  {
    "de": "Was ist los?",
    "lv": "Hvað er að? • Hvað er í gangi?",
    "level": "Sätze"
  },
  {
    "de": "Der Job ist anstrengend.",
    "lv": "Starfið er lýjandi.",
    "level": "Sätze"
  },
  {
    "de": "Das war ein anstrengender Tag.",
    "lv": "Þetta var erfiður dagur.",
    "level": "Sätze"
  },
  {
    "de": "Deutsch lernen kann anstrengend sein.",
    "lv": "Það getur verið erfitt að læra þýsku.",
    "level": "Sätze"
  },
  {
    "de": "Er verlangt eine Erklärung.",
    "lv": "Hann krefst skýringar.",
    "level": "Sätze"
  },
  {
    "de": "Der Verkäufer verlangt zu viel Geld.",
    "lv": "Seljandinn setur upp of hátt verð.",
    "level": "Sätze"
  },
  {
    "de": "Das Gesetz verlangt es so.",
    "lv": "Lögin krefjast þess.",
    "level": "Sätze"
  },
  {
    "de": "Das ist gar nicht so schwer.",
    "lv": "Þetta er alls ekki svo erfitt.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe gar kein Geld.",
    "lv": "Ég á alls enga peninga.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gar nichts gesagt.",
    "lv": "Hann sagði alls ekkert.",
    "level": "Sätze"
  },
  {
    "de": "Der Hund ist los.",
    "lv": "Hundurinn er laus.",
    "level": "Sätze"
  },
  {
    "de": "Hier ist viel los.",
    "lv": "Hér er mikið um að vera.",
    "level": "Sätze"
  },
  {
    "de": "Halt die Luft an!",
    "lv": "Hafðu hægt um þig! • Ekki ýkja svona!",
    "level": "Sätze"
  },
  {
    "de": "Was machst du?",
    "lv": "Hvað ertu að gera?",
    "level": "Sätze"
  },
  {
    "de": "Sag mal!",
    "lv": "Segðu mér!",
    "level": "Sätze"
  },
  {
    "de": "Was meinen Sie damit?",
    "lv": "Hvað áttu við með því?",
    "level": "Sätze"
  },
  {
    "de": "Wir gehen mit Ihnen.",
    "lv": "Við komum með þér.",
    "level": "Sätze"
  },
  {
    "de": "Ich fahre mit der Eisenbahn.",
    "lv": "Ég fer með lest.",
    "level": "Sätze"
  },
  {
    "de": "am Mittwoch",
    "lv": "á miðvikudaginn",
    "level": "Sätze"
  },
  {
    "de": "Es mag sein.",
    "lv": "Það má vel vera.",
    "level": "Sätze"
  },
  {
    "de": "Ich mag das nicht.",
    "lv": "Mér líkar það ekki.",
    "level": "Sätze"
  },
  {
    "de": "am Montag",
    "lv": "á mánudaginn",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen!",
    "lv": "Góðan daginn!",
    "level": "Sätze"
  },
  {
    "de": "am Morgen",
    "lv": "á morgnana",
    "level": "Sätze"
  },
  {
    "de": "Gute Nacht!",
    "lv": "Góða nótt!",
    "level": "Sätze"
  },
  {
    "de": "Nehmen Sie Platz!",
    "lv": "Fáðu þér sæti!",
    "level": "Sätze"
  },
  {
    "de": "Letzte Neuheit!",
    "lv": "Nýjasta nýtt!",
    "level": "Sätze"
  },
  {
    "de": "Nicht wahr?",
    "lv": "Ekki satt?",
    "level": "Sätze"
  },
  {
    "de": "Nicht doch!",
    "lv": "Nei, alls ekki! • Ekki gera það!",
    "level": "Sätze"
  },
  {
    "de": "Nun endlich!",
    "lv": "Loksins!",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das?",
    "lv": "Hvaða gagn er að þessu?",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das alles?",
    "lv": "Til hvers er þetta allt saman?",
    "level": "Sätze"
  },
  {
    "de": "Parken verboten!",
    "lv": "Bannað að leggja!",
    "level": "Sätze"
  },
  {
    "de": "Nicht parken!",
    "lv": "Ekki leggja!",
    "level": "Sätze"
  },
  {
    "de": "Er hat Recht.",
    "lv": "Hann hefur rétt fyrir sér.",
    "level": "Sätze"
  },
  {
    "de": "Wovon ist die Rede?",
    "lv": "Um hvað er verið að tala?",
    "level": "Sätze"
  },
  {
    "de": "Davon kann keine Rede sein.",
    "lv": "Það kemur ekki til greina.",
    "level": "Sätze"
  },
  {
    "de": "Glückliche Reise!",
    "lv": "Góða ferð!",
    "level": "Sätze"
  },
  {
    "de": "Mir reißt die Geduld.",
    "lv": "Þolinmæði mín er á þrotum.",
    "level": "Sätze"
  },
  {
    "de": "Man sagt, dass ...",
    "lv": "Sagt er að ...",
    "level": "Sätze"
  },
  {
    "de": "Schon gut!",
    "lv": "Allt í lagi!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön!",
    "lv": "Gjörðu svo vel! • Ekkert að þakka!",
    "level": "Sätze"
  },
  {
    "de": "Was bin ich schuldig?",
    "lv": "Hvað skulda ég þér?",
    "level": "Sätze"
  },
  {
    "de": "Vor dem Gebrauch schütteln!",
    "lv": "Hristist fyrir notkun!",
    "level": "Sätze"
  },
  {
    "de": "Sehen Sie mal!",
    "lv": "Líttu á!",
    "level": "Sätze"
  },
  {
    "de": "Wie sehr auch ...",
    "lv": "Hversu mikið sem ...",
    "level": "Sätze"
  },
  {
    "de": "Seit wann?",
    "lv": "Síðan hvenær?",
    "level": "Sätze"
  },
  {
    "de": "Was soll ich tun?",
    "lv": "Hvað á ég að gera?",
    "level": "Sätze"
  },
  {
    "de": "im Sommer",
    "lv": "á sumrin",
    "level": "Sätze"
  },
  {
    "de": "Nicht nur ..., sondern auch ...",
    "lv": "Ekki aðeins ... heldur einnig ...",
    "level": "Sätze"
  },
  {
    "de": "Sonst noch etwas?",
    "lv": "Eitthvað fleira?",
    "level": "Sätze"
  },
  {
    "de": "Spaß beiseite!",
    "lv": "Að öllu gamni slepptu!",
    "level": "Sätze"
  },
  {
    "de": "Wie spät ist es?",
    "lv": "Hvað er klukkan?",
    "level": "Sätze"
  },
  {
    "de": "Durchfahrt gesperrt!",
    "lv": "Gegnumakstur bannaður!",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie deutsch?",
    "lv": "Talar þú þýsku?",
    "level": "Sätze"
  },
  {
    "de": "Statt zu ...",
    "lv": "Í stað þess að ...",
    "level": "Sätze"
  },
  {
    "de": "Wie steht’s?",
    "lv": "Hvernig gengur?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Hut steht ihr gut.",
    "lv": "Þessi hattur fer henni vel.",
    "level": "Sätze"
  },
  {
    "de": "Guten Tag!",
    "lv": "Góðan dag!",
    "level": "Sätze"
  },
  {
    "de": "Wo treffen wir uns?",
    "lv": "Hvar hittumst við?",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie näher!",
    "lv": "Komdu nær!",
    "level": "Sätze"
  },
  {
    "de": "Ehrlichkeit ist eine Tugend.",
    "lv": "Heiðarleiki er dyggð.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe viel zu tun.",
    "lv": "Ég hef mikið að gera.",
    "level": "Sätze"
  },
  {
    "de": "Nicht übel!",
    "lv": "Ekki sem verst!",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt über mir.",
    "lv": "Hann býr fyrir ofan mig.",
    "level": "Sätze"
  },
  {
    "de": "Er ist davon überzeugt.",
    "lv": "Hann er sannfærður um það.",
    "level": "Sätze"
  },
  {
    "de": "So ist es üblich.",
    "lv": "Þannig er venjan.",
    "level": "Sätze"
  },
  {
    "de": "Deine Uhr geht nach.",
    "lv": "Úrið þitt er of seint.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel Uhr ist es?",
    "lv": "Hvað er klukkan?",
    "level": "Sätze"
  },
  {
    "de": "Um acht Uhr früh.",
    "lv": "Klukkan átta að morgni.",
    "level": "Sätze"
  },
  {
    "de": "umso mehr",
    "lv": "þeim mun frekar",
    "level": "Sätze"
  },
  {
    "de": "Rechts um!",
    "lv": "Hægri snú!",
    "level": "Sätze"
  },
  {
    "de": "Und ob!",
    "lv": "Heldur betur!",
    "level": "Sätze"
  },
  {
    "de": "und zwar",
    "lv": "nánar tiltekið",
    "level": "Sätze"
  },
  {
    "de": "Auf Unkosten von ...",
    "lv": "Á kostnað ... • Til skaða fyrir ...",
    "level": "Sätze"
  },
  {
    "de": "Er saß unter den Zuschauern.",
    "lv": "Hann sat meðal áhorfenda.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ursache!",
    "lv": "Ekkert að þakka!",
    "level": "Sätze"
  },
  {
    "de": "Es geschah, wie verabredet.",
    "lv": "Það gerðist eins og um var samið.",
    "level": "Sätze"
  },
  {
    "de": "Rauchen verboten!",
    "lv": "Reykingar bannaðar!",
    "level": "Sätze"
  },
  {
    "de": "Falsch verbunden!",
    "lv": "Rangt númer!",
    "level": "Sätze"
  },
  {
    "de": "Eintritt verboten!",
    "lv": "Aðgangur bannaður!",
    "level": "Sätze"
  },
  {
    "de": "Verstehen Sie mich?",
    "lv": "Skilur þú mig?",
    "level": "Sätze"
  },
  {
    "de": "Er versteht nichts davon.",
    "lv": "Hann hefur ekkert vit á því.",
    "level": "Sätze"
  },
  {
    "de": "Seine Ansicht vertreten.",
    "lv": "Að verja skoðun sína.",
    "level": "Sätze"
  },
  {
    "de": "Streit verursachen.",
    "lv": "Að valda deilum.",
    "level": "Sätze"
  },
  {
    "de": "Viel besser.",
    "lv": "Miklu betra.",
    "level": "Sätze"
  },
  {
    "de": "Zu viel.",
    "lv": "Of mikið.",
    "level": "Sätze"
  },
  {
    "de": "Vom Hörensagen.",
    "lv": "Af afspurn.",
    "level": "Sätze"
  },
  {
    "de": "Von Zeit zu Zeit.",
    "lv": "Öðru hverju.",
    "level": "Sätze"
  },
  {
    "de": "Von Beruf.",
    "lv": "Að atvinnu.",
    "level": "Sätze"
  },
  {
    "de": "Er ist Berliner von Geburt.",
    "lv": "Hann er Berlínarbúi að uppruna.",
    "level": "Sätze"
  },
  {
    "de": "Er steht vor dem Fenster.",
    "lv": "Hann stendur fyrir framan gluggann.",
    "level": "Sätze"
  },
  {
    "de": "Vor Sonnenaufgang.",
    "lv": "Fyrir sólarupprás.",
    "level": "Sätze"
  },
  {
    "de": "Vor vierzehn Tagen.",
    "lv": "Fyrir tveimur vikum.",
    "level": "Sätze"
  },
  {
    "de": "Vor Freude.",
    "lv": "Af gleði.",
    "level": "Sätze"
  },
  {
    "de": "Vor allem.",
    "lv": "Fyrst og fremst.",
    "level": "Sätze"
  },
  {
    "de": "Im Voraus.",
    "lv": "Fyrir fram.",
    "level": "Sätze"
  },
  {
    "de": "Unter der Voraussetzung, dass ...",
    "lv": "Með því skilyrði að ...",
    "level": "Sätze"
  },
  {
    "de": "Unter dem Vorbehalt.",
    "lv": "Með þeim fyrirvara.",
    "level": "Sätze"
  },
  {
    "de": "Vorhanden sein.",
    "lv": "Að vera fyrir hendi. • Að vera til.",
    "level": "Sätze"
  },
  {
    "de": "In der vorigen Woche.",
    "lv": "Í síðustu viku.",
    "level": "Sätze"
  },
  {
    "de": "Vorkehrungen treffen.",
    "lv": "Að gera varúðarráðstafanir.",
    "level": "Sätze"
  },
  {
    "de": "Sie kommt mir bekannt vor.",
    "lv": "Mér finnst ég kannast við hana.",
    "level": "Sätze"
  },
  {
    "de": "Er hat eine Vorliebe für Literatur.",
    "lv": "Hann hefur dálæti á bókmenntum.",
    "level": "Sätze"
  },
  {
    "de": "Heute Vormittag.",
    "lv": "Í morgun. • Fyrir hádegi í dag.",
    "level": "Sätze"
  },
  {
    "de": "Von vorn.",
    "lv": "Að framan. • Frá byrjun.",
    "level": "Sätze"
  },
  {
    "de": "Nach vorn.",
    "lv": "Áfram.",
    "level": "Sätze"
  },
  {
    "de": "Von vornherein.",
    "lv": "Frá upphafi.",
    "level": "Sätze"
  },
  {
    "de": "Im Vorteil sein.",
    "lv": "Að standa betur að vígi.",
    "level": "Sätze"
  },
  {
    "de": "Wach sein.",
    "lv": "Að vera vakandi.",
    "level": "Sätze"
  },
  {
    "de": "Wach werden.",
    "lv": "Að vakna.",
    "level": "Sätze"
  },
  {
    "de": "Auf Wache sein.",
    "lv": "Að standa vörð.",
    "level": "Sätze"
  },
  {
    "de": "Während eines Jahres.",
    "lv": "Á einu ári.",
    "level": "Sätze"
  },
  {
    "de": "Während des Krieges.",
    "lv": "Meðan á stríðinu stóð.",
    "level": "Sätze"
  },
  {
    "de": "Gegen eine Wand reden.",
    "lv": "Að tala fyrir daufum eyrum.",
    "level": "Sätze"
  },
  {
    "de": "Hier haben die Wände Ohren.",
    "lv": "Hér hafa veggirnir eyru.",
    "level": "Sätze"
  },
  {
    "de": "Bis wann?",
    "lv": "Til hvenær? • Fyrir hvaða tíma?",
    "level": "Sätze"
  },
  {
    "de": "Es ist warm.",
    "lv": "Það er hlýtt.",
    "level": "Sätze"
  },
  {
    "de": "Auf eine Nachricht warten.",
    "lv": "Að bíða eftir skilaboðum.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie?",
    "lv": "Hvað viltu?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein ...?",
    "lv": "Hvers konar ...?",
    "level": "Sätze"
  },
  {
    "de": "Auf halbem Wege.",
    "lv": "Á miðri leið.",
    "level": "Sätze"
  },
  {
    "de": "Auf diesem Wege.",
    "lv": "Á þennan hátt.",
    "level": "Sätze"
  },
  {
    "de": "Auf friedlichem Wege.",
    "lv": "Með friðsamlegum hætti.",
    "level": "Sätze"
  },
  {
    "de": "Unserer Freundschaft wegen.",
    "lv": "Vináttu okkar vegna.",
    "level": "Sätze"
  },
  {
    "de": "Von Rechts wegen.",
    "lv": "Með réttu. • Lögum samkvæmt.",
    "level": "Sätze"
  },
  {
    "de": "Weh tun.",
    "lv": "Að verkja.",
    "level": "Sätze"
  },
  {
    "de": "Zu Weihnachten.",
    "lv": "Um jólin.",
    "level": "Sätze"
  },
  {
    "de": "Auf welche Weise?",
    "lv": "Á hvaða hátt?",
    "level": "Sätze"
  },
  {
    "de": "Art und Weise.",
    "lv": "Aðferð.",
    "level": "Sätze"
  },
  {
    "de": "Ohne weiteres.",
    "lv": "Umsvifalaust. • Án vandkvæða.",
    "level": "Sätze"
  },
  {
    "de": "Bis auf weiteres.",
    "lv": "Þar til annað verður ákveðið.",
    "level": "Sätze"
  },
  {
    "de": "Und so weiter.",
    "lv": "Og svo framvegis.",
    "level": "Sätze"
  },
  {
    "de": "Weiter nichts.",
    "lv": "Ekkert annað.",
    "level": "Sätze"
  },
  {
    "de": "An welchem Tag?",
    "lv": "Hvaða dag?",
    "level": "Sätze"
  },
  {
    "de": "Alle Welt.",
    "lv": "Allur heimurinn. • Hver einasti maður.",
    "level": "Sätze"
  },
  {
    "de": "In wenigen Tagen.",
    "lv": "Eftir nokkra daga.",
    "level": "Sätze"
  },
  {
    "de": "Zu wenig.",
    "lv": "Of lítið.",
    "level": "Sätze"
  },
  {
    "de": "Wenn auch.",
    "lv": "Þó að. • Jafnvel þó að.",
    "level": "Sätze"
  },
  {
    "de": "Wer da?",
    "lv": "Hver er þar? • Hver fer þar?",
    "level": "Sätze"
  },
  {
    "de": "Gesammelte Werke von Schiller.",
    "lv": "Ritsafn Schillers.",
    "level": "Sätze"
  },
  {
    "de": "Ausgewählte Werke.",
    "lv": "Valin verk.",
    "level": "Sätze"
  },
  {
    "de": "Er ist wert, dass ...",
    "lv": "Hann á skilið að ...",
    "level": "Sätze"
  },
  {
    "de": "Es ist zwei Euro wert.",
    "lv": "Það er tveggja evra virði.",
    "level": "Sätze"
  },
  {
    "de": "Nach Westen.",
    "lv": "Í vestur.",
    "level": "Sätze"
  },
  {
    "de": "Von Westen.",
    "lv": "Úr vestri.",
    "level": "Sätze"
  },
  {
    "de": "In Wettbewerb treten.",
    "lv": "Að taka þátt í keppni.",
    "level": "Sätze"
  },
  {
    "de": "Um die Wette laufen.",
    "lv": "Að fara í kapphlaup.",
    "level": "Sätze"
  },
  {
    "de": "Was gilt die Wette?",
    "lv": "Um hvað eigum við að veðja?",
    "level": "Sätze"
  },
  {
    "de": "Wie wird das Wetter?",
    "lv": "Hvernig verður veðrið?",
    "level": "Sätze"
  },
  {
    "de": "Wettkampf im Turnen.",
    "lv": "Keppni í fimleikum.",
    "level": "Sätze"
  },
  {
    "de": "Wider meinen Willen.",
    "lv": "Gegn vilja mínum.",
    "level": "Sätze"
  },
  {
    "de": "Widerspruch erheben.",
    "lv": "Að hreyfa andmælum.",
    "level": "Sätze"
  },
  {
    "de": "Wie alt ist er?",
    "lv": "Hvað er hann gamall?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange?",
    "lv": "Hversu lengi?",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiederhören!",
    "lv": "Við heyrumst!",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiedersehen!",
    "lv": "Bless!",
    "level": "Sätze"
  },
  {
    "de": "Wilde Tiere.",
    "lv": "Villt dýr.",
    "level": "Sätze"
  },
  {
    "de": "Herzlich willkommen!",
    "lv": "Hjartanlega velkomin!",
    "level": "Sätze"
  },
  {
    "de": "Du musst ziehen.",
    "lv": "Þú átt leik.",
    "level": "Sätze"
  },
  {
    "de": "Es zieht.",
    "lv": "Það er dragsúgur.",
    "level": "Sätze"
  },
  {
    "de": "Ziemlich kalt.",
    "lv": "Frekar kalt.",
    "level": "Sätze"
  },
  {
    "de": "Zipfel einer Wurst.",
    "lv": "Endinn á pylsu.",
    "level": "Sätze"
  },
  {
    "de": "Zu ihm gehen.",
    "lv": "Að fara til hans.",
    "level": "Sätze"
  },
  {
    "de": "Zur Schule gehen.",
    "lv": "Að ganga í skóla.",
    "level": "Sätze"
  },
  {
    "de": "Zu Hause bleiben.",
    "lv": "Að vera heima.",
    "level": "Sätze"
  },
  {
    "de": "Von Tag zu Tag.",
    "lv": "Dag frá degi.",
    "level": "Sätze"
  },
  {
    "de": "Zum Glück.",
    "lv": "Sem betur fer.",
    "level": "Sätze"
  },
  {
    "de": "Wasser zum Trinken.",
    "lv": "Drykkjarvatn.",
    "level": "Sätze"
  },
  {
    "de": "Zu Fuß.",
    "lv": "Fótgangandi.",
    "level": "Sätze"
  },
  {
    "de": "Zu Pferde.",
    "lv": "Á hestbaki.",
    "level": "Sätze"
  },
  {
    "de": "Zu Rad.",
    "lv": "Á hjóli.",
    "level": "Sätze"
  },
  {
    "de": "Es hörte auf zu regnen.",
    "lv": "Það hætti að rigna.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe noch viel zu tun.",
    "lv": "Ég á enn mikið eftir að gera.",
    "level": "Sätze"
  },
  {
    "de": "Zu früh.",
    "lv": "Of snemma.",
    "level": "Sätze"
  },
  {
    "de": "Zu groß.",
    "lv": "Of stór.",
    "level": "Sätze"
  },
  {
    "de": "Mit den Achseln zucken.",
    "lv": "Að yppa öxlum.",
    "level": "Sätze"
  },
  {
    "de": "In einem Zug trinken.",
    "lv": "Að drekka í einum teyg.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde gehen.",
    "lv": "Að farast.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde legen.",
    "lv": "Að leggja til grundvallar.",
    "level": "Sätze"
  },
  {
    "de": "Zum ersten Mal.",
    "lv": "Í fyrsta sinn.",
    "level": "Sätze"
  },
  {
    "de": "Machen Sie bitte die Tür zu!",
    "lv": "Vinsamlegast lokaðu dyrunum!",
    "level": "Sätze"
  },
  {
    "de": "Er hat zugenommen.",
    "lv": "Hann hefur fitnað.",
    "level": "Sätze"
  },
  {
    "de": "Die Tage nehmen zu.",
    "lv": "Dagarnir lengjast.",
    "level": "Sätze"
  },
  {
    "de": "Zusammenhängen mit etwas.",
    "lv": "Að tengjast einhverju.",
    "level": "Sätze"
  },
  {
    "de": "Die Tür ist zu.",
    "lv": "Hurðin er lokuð.",
    "level": "Sätze"
  },
  {
    "de": "Das hätte ich ihm nicht zugetraut.",
    "lv": "Ég hefði ekki trúað honum til þess.",
    "level": "Sätze"
  },
  {
    "de": "Freier Zutritt.",
    "lv": "Ókeypis aðgangur.",
    "level": "Sätze"
  },
  {
    "de": "Zutritt verboten!",
    "lv": "Aðgangur bannaður!",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu viel!",
    "lv": "Þetta er of mikið!",
    "level": "Sätze"
  },
  {
    "de": "Zuwider werden.",
    "lv": "Að verða ógeðfelldur.",
    "level": "Sätze"
  },
  {
    "de": "Und zwar.",
    "lv": "Nefnilega.",
    "level": "Sätze"
  },
  {
    "de": "Es steht außer Zweifel.",
    "lv": "Það er hafið yfir allan vafa.",
    "level": "Sätze"
  },
  {
    "de": "Ohne Zweifel.",
    "lv": "Án efa.",
    "level": "Sätze"
  },
  {
    "de": "Zum Zweiten.",
    "lv": "Í öðru lagi.",
    "level": "Sätze"
  },
  {
    "de": "Frohes neues Jahr!",
    "lv": "Gleðilegt nýtt ár!",
    "level": "Sätze"
  },
  {
    "de": "Herzlichen Glückwunsch zum Geburtstag!",
    "lv": "Til hamingju með afmælið!",
    "level": "Sätze"
  },
  {
    "de": "Gute Reise!",
    "lv": "Góða ferð!",
    "level": "Sätze"
  },
  {
    "de": "Es freut mich, Sie kennenzulernen.",
    "lv": "Það gleður mig að kynnast þér.",
    "level": "Sätze"
  },
  {
    "de": "Wären Sie bitte so nett?",
    "lv": "Viltu vera svo vænn?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin Ihnen sehr dankbar.",
    "lv": "Ég er þér mjög þakklátur.",
    "level": "Sätze"
  },
  {
    "de": "Setzt euch bitte hin!",
    "lv": "Gjörið svo vel að setjast!",
    "level": "Sätze"
  },
  {
    "de": "Ben, komm bitte an die Tafel!",
    "lv": "Ben, komdu upp að töflunni, takk!",
    "level": "Sätze"
  },
  {
    "de": "Schlagt bitte die Lehrbücher auf!",
    "lv": "Vinsamlegast opnið kennslubækurnar!",
    "level": "Sätze"
  },
  {
    "de": "Geht bitte in die Sporthalle!",
    "lv": "Vinsamlegast farið í íþróttasalinn!",
    "level": "Sätze"
  },
  {
    "de": "Schläfst du noch?",
    "lv": "Sefurðu enn?",
    "level": "Sätze"
  },
  {
    "de": "Schlafen Sie noch?",
    "lv": "Ertu enn sofandi?",
    "level": "Sätze"
  },
  {
    "de": "Er ist fest eingeschlafen.",
    "lv": "Hann er steinsofnaður.",
    "level": "Sätze"
  },
  {
    "de": "Wecke ihn bitte auf, es ist schon spät!",
    "lv": "Vinsamlegast vektu hann, það er orðið seint!",
    "level": "Sätze"
  },
  {
    "de": "Es tut mir sehr leid!",
    "lv": "Mér þykir það mjög leitt!",
    "level": "Sätze"
  },
  {
    "de": "Vielen Dank!",
    "lv": "Kærar þakkir!",
    "level": "Sätze"
  },
  {
    "de": "Finn, fang bitte an!",
    "lv": "Finn, gjörðu svo vel að byrja!",
    "level": "Sätze"
  },
  {
    "de": "Lest bitte mit!",
    "lv": "Vinsamlegast lesið með!",
    "level": "Sätze"
  },
  {
    "de": "Emma, schau bitte nicht aus dem Fenster!",
    "lv": "Emma, vinsamlegast horfðu ekki út um gluggann!",
    "level": "Sätze"
  },
  {
    "de": "Jonas, bring bitte die Hefte!",
    "lv": "Jonas, vinsamlegast komdu með stílabækurnar!",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte zurück an deinen Platz!",
    "lv": "Vinsamlegast farðu aftur í sætið þitt!",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb acht.",
    "lv": "Klukkan er hálf átta.",
    "level": "Sätze"
  },
  {
    "de": "Wann wachst du gewöhnlich auf?",
    "lv": "Hvenær vaknar þú venjulega?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe gleich auf.",
    "lv": "Ég er alveg að fara á fætur.",
    "level": "Sätze"
  },
  {
    "de": "Steh auf, Hanna, es klingelt!",
    "lv": "Farðu á fætur, Hanna, vekjaraklukkan hringir! • Farðu á fætur, Hanna, það er hringt dyrabjöllunni!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich noch fünf Minuten schlafen!",
    "lv": "Leyfðu mér að sofa í fimm mínútur í viðbót!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss nicht, das Zimmer zu lüften!",
    "lv": "Ekki gleyma að viðra herbergið!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist das Handtuch?",
    "lv": "Hvar er handklæðið?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mir die Zähne putzen.",
    "lv": "Mig langar að bursta tennurnar.",
    "level": "Sätze"
  },
  {
    "de": "Womit putzt du dir die Zähne?",
    "lv": "Með hverju burstar þú tennurnar?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mich anziehen.",
    "lv": "Mig langar að klæða mig.",
    "level": "Sätze"
  },
  {
    "de": "Zieh dich bitte schnell an!",
    "lv": "Vinsamlegast klæddu þig fljótt!",
    "level": "Sätze"
  },
  {
    "de": "Kleide dich wärmer an, draußen ist es kühl.",
    "lv": "Klæddu þig betur, það er svalt úti.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, wie geht es dir?",
    "lv": "Góðan daginn, hvernig hefur þú það?",
    "level": "Sätze"
  },
  {
    "de": "Mir geht es gut, danke.",
    "lv": "Ég hef það gott, takk.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es Neues?",
    "lv": "Hvað er að frétta?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein Chaos hier!",
    "lv": "Hvílík óreiða hérna!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich beim Aufräumen helfen?",
    "lv": "Má ég hjálpa til við að taka til?",
    "level": "Sätze"
  },
  {
    "de": "Was trinkst du morgens, Kaffee oder Tee?",
    "lv": "Hvað drekkur þú á morgnana, kaffi eða te?",
    "level": "Sätze"
  },
  {
    "de": "Gewöhnlich trinke ich morgens eine Tasse Kaffee.",
    "lv": "Ég drekk venjulega einn kaffibolla á morgnana.",
    "level": "Sätze"
  },
  {
    "de": "Am liebsten trinke ich schwarzen Kaffee.",
    "lv": "Mér finnst best að drekka svart kaffi.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, hast du gut geschlafen?",
    "lv": "Góðan daginn, svafstu vel?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin noch sehr müde.",
    "lv": "Ég er enn mjög þreyttur.",
    "level": "Sätze"
  },
  {
    "de": "Willst du Kaffee oder Milch?",
    "lv": "Viltu kaffi eða mjólk?",
    "level": "Sätze"
  },
  {
    "de": "Gib mir bitte ein Brötchen mit Käse.",
    "lv": "Gefðu mér rúnstykki með osti, takk.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss jetzt los!",
    "lv": "Ég verð að fara núna!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss dein Frühstück nicht!",
    "lv": "Ekki gleyma morgunmatnum þínum!",
    "level": "Sätze"
  },
  {
    "de": "Klara, deck bitte den Tisch!",
    "lv": "Klara, vinsamlegast leggðu á borð!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss die Servietten nicht!",
    "lv": "Ekki gleyma munnþurrkunum!",
    "level": "Sätze"
  },
  {
    "de": "Wann esst ihr zu Mittag?",
    "lv": "Hvenær borðið þið hádegismat?",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit zu essen.",
    "lv": "Það er kominn tími til að borða.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es heute zu Mittag?",
    "lv": "Hvað er í hádegismatinn í dag?",
    "level": "Sätze"
  },
  {
    "de": "Wie schmeckt dir die Suppe?",
    "lv": "Hvernig finnst þér súpan?",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt ist sie etwas zu salzig.",
    "lv": "Satt best að segja er hún aðeins of sölt.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dir ein Stück Brot geben?",
    "lv": "Má ég bjóða þér brauðsneið?",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich habe schon.",
    "lv": "Takk, ég er búinn að fá mér.",
    "level": "Sätze"
  },
  {
    "de": "Das Fleisch schmeckt ausgezeichnet.",
    "lv": "Kjötið er afbragðsgott.",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich bin schon satt.",
    "lv": "Takk, ég er orðinn saddur.",
    "level": "Sätze"
  },
  {
    "de": "Heute haben wir Besuch.",
    "lv": "Í dag fáum við gesti.",
    "level": "Sätze"
  },
  {
    "de": "Bist du heute Abend frei?",
    "lv": "Ertu laus í kvöld?",
    "level": "Sätze"
  },
  {
    "de": "Komm doch heute zum Mittagessen vorbei!",
    "lv": "Komdu endilega í hádegismat í dag!",
    "level": "Sätze"
  },
  {
    "de": "Setzen wir uns an den Tisch.",
    "lv": "Setjumst til borðs.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, bedien dich!",
    "lv": "Gjörðu svo vel, fáðu þér!",
    "level": "Sätze"
  },
  {
    "de": "Stört dich das Rauchen?",
    "lv": "Truflar það þig að reykt sé?",
    "level": "Sätze"
  },
  {
    "de": "Danke für die nette Aufnahme!",
    "lv": "Takk fyrir góðar móttökur!",
    "level": "Sätze"
  },
  {
    "de": "Wann gehst du ins Bett?",
    "lv": "Hvenær ferðu að sofa?",
    "level": "Sätze"
  },
  {
    "de": "Wenn ich von der Arbeit komme, bin ich immer müde.",
    "lv": "Þegar ég kem úr vinnunni er ég alltaf þreyttur.",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, ins Bett zu gehen.",
    "lv": "Það er kominn tími til að fara að sofa.",
    "level": "Sätze"
  },
  {
    "de": "Es ist schönes Wetter.",
    "lv": "Það er fallegt veður.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mit mir spazieren gehen?",
    "lv": "Viltu fara í göngutúr með mér?",
    "level": "Sätze"
  },
  {
    "de": "Sieh mal, es wird gleich regnen.",
    "lv": "Sjáðu, það er alveg að fara að rigna.",
    "level": "Sätze"
  },
  {
    "de": "Nimm den Regenschirm mit!",
    "lv": "Taktu regnhlífina með þér!",
    "level": "Sätze"
  },
  {
    "de": "Es regnet.",
    "lv": "Það rignir.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin schon ganz nass.",
    "lv": "Ég er orðinn alveg rennblautur.",
    "level": "Sätze"
  },
  {
    "de": "Glaubst du, dass es den ganzen Tag regnen wird?",
    "lv": "Heldurðu að það rigni allan daginn?",
    "level": "Sätze"
  },
  {
    "de": "Es hört auf zu regnen.",
    "lv": "Það er að stytta upp.",
    "level": "Sätze"
  },
  {
    "de": "Die Sonne scheint wieder.",
    "lv": "Sólin skín aftur.",
    "level": "Sätze"
  },
  {
    "de": "Es ist sehr warm.",
    "lv": "Það er mjög hlýtt.",
    "level": "Sätze"
  },
  {
    "de": "Es sieht nach Regen aus.",
    "lv": "Það lítur út fyrir rigningu.",
    "level": "Sätze"
  },
  {
    "de": "Wir bekommen gleich ein Gewitter.",
    "lv": "Það er alveg að skella á þrumuveður.",
    "level": "Sätze"
  },
  {
    "de": "Das Gewitter zieht vorüber.",
    "lv": "Þrumuveðrið er að ganga yfir.",
    "level": "Sätze"
  },
  {
    "de": "Die Wolken verziehen sich.",
    "lv": "Skýin eru að hverfa.",
    "level": "Sätze"
  },
  {
    "de": "Siehst du den Regenbogen?",
    "lv": "Sérðu regnbogann?",
    "level": "Sätze"
  },
  {
    "de": "Der Winter ist da, es hat geschneit.",
    "lv": "Veturinn er kominn, það hefur snjóað.",
    "level": "Sätze"
  },
  {
    "de": "Es schneit.",
    "lv": "Það snjóar.",
    "level": "Sätze"
  },
  {
    "de": "Wie schön ist es im Wald im Winter!",
    "lv": "Hvað það er fallegt í skóginum á veturna!",
    "level": "Sätze"
  },
  {
    "de": "Mir ist kalt, ich friere.",
    "lv": "Mér er kalt, ég skelf úr kulda.",
    "level": "Sätze"
  },
  {
    "de": "Draußen ist Glatteis, pass auf!",
    "lv": "Það er hálka úti, farðu varlega!",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir auf die Eisbahn gehen?",
    "lv": "Eigum við að fara á skautasvellið?",
    "level": "Sätze"
  },
  {
    "de": "Zieh die Jacke an, du kannst dich erkälten.",
    "lv": "Farðu í jakkann, þú gætir kvefast.",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb sieben.",
    "lv": "Klukkan er hálf sjö.",
    "level": "Sätze"
  },
  {
    "de": "Meine Uhr geht fünf Minuten vor.",
    "lv": "Úrið mitt er fimm mínútum of fljótt.",
    "level": "Sätze"
  },
  {
    "de": "Weck mich morgen früh um sieben Uhr!",
    "lv": "Vektu mig klukkan sjö í fyrramálið!",
    "level": "Sätze"
  },
  {
    "de": "Was ist heute für ein Datum?",
    "lv": "Hvaða dagsetning er í dag?",
    "level": "Sätze"
  },
  {
    "de": "Heute ist der elfte Juli.",
    "lv": "Í dag er ellefti júlí.",
    "level": "Sätze"
  },
  {
    "de": "Was machst du gewöhnlich am Abend?",
    "lv": "Hvað gerir þú venjulega á kvöldin?",
    "level": "Sätze"
  },
  {
    "de": "Es ist schon lange her, dass wir uns gesehen haben.",
    "lv": "Það er langt síðan við sáumst.",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es dir?",
    "lv": "Hvernig hefur þú það?",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, ich möchte etwas mit dir besprechen.",
    "lv": "Afsakaðu, mig langar að ræða dálítið við þig.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir spazieren!",
    "lv": "Förum í göngutúr!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Lust, mit mir in den Park zu gehen?",
    "lv": "Langar þig að koma með mér í garðinn?",
    "level": "Sätze"
  },
  {
    "de": "Ich komme, um dich zum Spaziergang abzuholen.",
    "lv": "Ég kem til að sækja þig í göngutúr.",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte etwas langsamer, ich kann dir nicht folgen!",
    "lv": "Vinsamlegast gakktu aðeins hægar, ég held ekki í við þig!",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zum ersten Mal in dieser Gegend.",
    "lv": "Ég er í fyrsta skipti á þessum slóðum.",
    "level": "Sätze"
  },
  {
    "de": "Ruhen wir uns ein wenig aus.",
    "lv": "Hvílum okkur aðeins.",
    "level": "Sätze"
  },
  {
    "de": "Jetzt können wir zurückgehen.",
    "lv": "Nú getum við farið til baka.",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt bin ich ziemlich müde.",
    "lv": "Satt best að segja er ég frekar þreyttur.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, wo ist die nächste U-Bahn-Station?",
    "lv": "Afsakaðu, hvar er næsta neðanjarðarlestarstöð?",
    "level": "Sätze"
  },
  {
    "de": "Welcher ist der kürzeste Weg?",
    "lv": "Hver er stysta leiðin?",
    "level": "Sätze"
  },
  {
    "de": "Geh hier die zweite Straße links und dann immer geradeaus.",
    "lv": "Taktu aðra götu til vinstri hérna og haltu svo beint áfram.",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich am schnellsten zum Bahnhof?",
    "lv": "Hvernig kemst ég fljótast á lestarstöðina?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe vor, morgen zu verreisen.",
    "lv": "Ég hef í hyggju að fara í ferðalag á morgun.",
    "level": "Sätze"
  },
  {
    "de": "Wohin willst du fahren?",
    "lv": "Hvert viltu fara?",
    "level": "Sätze"
  },
  {
    "de": "Reist du geschäftlich oder privat?",
    "lv": "Ertu að ferðast vegna vinnu eða í einkaerindum?",
    "level": "Sätze"
  },
  {
    "de": "Finn fährt bis Berlin mit, dann geht er ans Meer.",
    "lv": "Finn verður samferða til Berlínar, svo fer hann á ströndina.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt das Schiff ab?",
    "lv": "Hvenær leggur skipið úr höfn?",
    "level": "Sätze"
  },
  {
    "de": "In einer halben Stunde.",
    "lv": "Eftir hálftíma.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich noch eine Kabine bekommen?",
    "lv": "Get ég enn fengið klefa?",
    "level": "Sätze"
  },
  {
    "de": "Vergiss deinen Pass nicht!",
    "lv": "Ekki gleyma vegabréfinu þínu!",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, den Koffer zu packen.",
    "lv": "Það er kominn tími til að pakka niður í ferðatöskuna.",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt um halb sieben ab.",
    "lv": "Lestin fer klukkan hálf sjö.",
    "level": "Sätze"
  },
  {
    "de": "Hol mir bitte ein Taxi, ich verpasse sonst den Zug!",
    "lv": "Pantaðu fyrir mig leigubíl, annars missi ég af lestinni!",
    "level": "Sätze"
  },
  {
    "de": "Fahr bitte zum Bahnhof!",
    "lv": "Keyrðu mig á lestarstöðina, takk!",
    "level": "Sätze"
  },
  {
    "de": "Ich muss mich beeilen.",
    "lv": "Ég verð að flýta mér.",
    "level": "Sätze"
  },
  {
    "de": "Ist der Schalter schon offen?",
    "lv": "Er miðasalan búin að opna?",
    "level": "Sätze"
  },
  {
    "de": "Eine Fahrkarte nach Köln, bitte.",
    "lv": "Einn miða til Kölnar, takk.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt der Zug ab?",
    "lv": "Hvenær fer lestin?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt gleich ab.",
    "lv": "Lestin er í þann veginn að fara.",
    "level": "Sätze"
  },
  {
    "de": "Muss ich in Koblenz umsteigen?",
    "lv": "Þarf ég að skipta um lest í Koblenz?",
    "level": "Sätze"
  },
  {
    "de": "Ja, dort musst du umsteigen.",
    "lv": "Já, þar þarftu að skipta um lest.",
    "level": "Sätze"
  },
  {
    "de": "Ist dieser Platz frei?",
    "lv": "Er þetta sæti laust?",
    "level": "Sätze"
  },
  {
    "de": "Nein, hier sitzt niemand.",
    "lv": "Nei, hér situr enginn.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der Bahnsteigkartenautomat?",
    "lv": "Hvar er sjálfsalinn fyrir brautarpallsmiða?",
    "level": "Sätze"
  },
  {
    "de": "Stell mein Handgepäck ins Gepäcknetz.",
    "lv": "Settu handfarangurinn minn í farangursgrindina.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das Fenster aufmachen?",
    "lv": "Má ég opna gluggann?",
    "level": "Sätze"
  },
  {
    "de": "Es zieht, schließ bitte das Fenster!",
    "lv": "Það er dragsúgur, lokaðu glugganum, takk!",
    "level": "Sätze"
  },
  {
    "de": "Welche ist die nächste Station?",
    "lv": "Hver er næsta stöð?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange hält der Zug?",
    "lv": "Hvað stoppar lestin lengi?",
    "level": "Sätze"
  },
  {
    "de": "Wo muss ich umsteigen?",
    "lv": "Hvar þarf ég að skipta um lest?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug hat Verspätung.",
    "lv": "Lestinni seinkar.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Wagen ist für Nichtraucher.",
    "lv": "Þessi vagn er reyklaus.",
    "level": "Sätze"
  },
  {
    "de": "Wir fahren jetzt über die Grenze.",
    "lv": "Nú förum við yfir landamærin.",
    "level": "Sätze"
  },
  {
    "de": "Hast du etwas zu verzollen?",
    "lv": "Ertu með eitthvað tollskylt?",
    "level": "Sätze"
  },
  {
    "de": "Wir sind in Berlin angekommen.",
    "lv": "Við erum komin til Berlínar.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir ein gutes Hotel empfehlen?",
    "lv": "Getur þú mælt með góðu hóteli?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie freie Zimmer?",
    "lv": "Eru einhver herbergi laus?",
    "level": "Sätze"
  },
  {
    "de": "Ein Zimmer mit zwei Betten, bitte.",
    "lv": "Herbergi með tveimur rúmum, takk.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Zimmer pro Nacht?",
    "lv": "Hvað kostar herbergið fyrir eina nótt?",
    "level": "Sätze"
  },
  {
    "de": "Morgen reise ich ab. Weck mich um sieben Uhr!",
    "lv": "Á morgun fer ég héðan. Vektu mig klukkan sjö!",
    "level": "Sätze"
  },
  {
    "de": "Die Rechnung, bitte!",
    "lv": "Reikninginn, takk!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Stadtbibliothek?",
    "lv": "Hvar er borgarbókasafnið?",
    "level": "Sätze"
  },
  {
    "de": "Wann hat das Museum geöffnet?",
    "lv": "Hvenær er safnið opið?",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir ins Museum gehen?",
    "lv": "Eigum við að fara á safnið?",
    "level": "Sätze"
  },
  {
    "de": "Fahren wir mit dem Bus oder der U-Bahn?",
    "lv": "Tökum við strætó eða neðanjarðarlestina?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die nächste Bushaltestelle?",
    "lv": "Hvar er næsta biðstöð strætó?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe großen Hunger.",
    "lv": "Ég er mjög svangur.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir zusammen essen?",
    "lv": "Eigum við að fara saman út að borða?",
    "level": "Sätze"
  },
  {
    "de": "Kellner, die Speisekarte, bitte!",
    "lv": "Þjónn, matseðilinn, takk!",
    "level": "Sätze"
  },
  {
    "de": "Ist der Fisch frisch?",
    "lv": "Er fiskurinn nýr?",
    "level": "Sätze"
  },
  {
    "de": "Das schmeckt ausgezeichnet!",
    "lv": "Þetta er afbragðsgott!",
    "level": "Sätze"
  },
  {
    "de": "Kellner, zahlen bitte!",
    "lv": "Þjónn, ég ætla að borga, takk!",
    "level": "Sätze"
  },
  {
    "de": "Ich gehe ins Café einen Kaffee trinken.",
    "lv": "Ég ætla á kaffihús að fá mér kaffi.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mitkommen?",
    "lv": "Viltu koma með?",
    "level": "Sätze"
  },
  {
    "de": "Eine Tasse Kaffee mit Milch, bitte!",
    "lv": "Einn kaffibolla með mjólk, takk!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneller, ich habe es eilig!",
    "lv": "Hraðar, takk, mér liggur á!",
    "level": "Sätze"
  },
  {
    "de": "Lass deinen Kaffee nicht kalt werden!",
    "lv": "Láttu kaffið þitt ekki kólna!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie etwas Erfrischendes?",
    "lv": "Áttu eitthvað svalandi?",
    "level": "Sätze"
  },
  {
    "de": "Eine Portion Eis, bitte!",
    "lv": "Einn skammt af ís, takk!",
    "level": "Sätze"
  },
  {
    "de": "Heute Morgen habe ich einen Brief bekommen.",
    "lv": "Í morgun fékk ég bréf.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss ihm gleich schreiben.",
    "lv": "Ég verð að skrifa honum strax.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der nächste Briefkasten?",
    "lv": "Hvar er næsti póstkassi?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Post?",
    "lv": "Hvar er pósthúsið?",
    "level": "Sätze"
  },
  {
    "de": "Erinnere mich morgen daran, zu schreiben!",
    "lv": "Minntu mig á það á morgun að skrifa!",
    "level": "Sätze"
  },
  {
    "de": "Werfen Sie bitte diesen Brief in den Briefkasten.",
    "lv": "Gjörðu svo vel að setja þetta bréf í póstkassann.",
    "level": "Sätze"
  },
  {
    "de": "Hallo, hier spricht Emma.",
    "lv": "Halló, þetta er Emma.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich dich später anrufen?",
    "lv": "Má ég hringja í þig seinna?",
    "level": "Sätze"
  },
  {
    "de": "Muss ich lange warten?",
    "lv": "Þarf ég að bíða lengi?",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneiden Sie mir die Haare.",
    "lv": "Gjörðu svo vel að klippa mig.",
    "level": "Sätze"
  },
  {
    "de": "Hinten bitte nicht zu kurz.",
    "lv": "Ekki of stutt að aftan, takk.",
    "level": "Sätze"
  },
  {
    "de": "Wann beginnt die Vorstellung?",
    "lv": "Hvenær byrjar sýningin?",
    "level": "Sätze"
  },
  {
    "de": "Es fängt um halb acht an.",
    "lv": "Hún byrjar klukkan hálf átta.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind ausverkauft.",
    "lv": "Það er uppselt í öll sæti.",
    "level": "Sätze"
  },
  {
    "de": "Drei Karten, bitte!",
    "lv": "Þrjá miða, takk!",
    "level": "Sätze"
  },
  {
    "de": "Wir lassen die Jacken in der Garderobe.",
    "lv": "Við skiljum jakkana eftir í fatahenginu.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schnell, der Vorhang geht gleich auf!",
    "lv": "Fljótt nú, tjaldið er alveg að fara að lyftast!",
    "level": "Sätze"
  },
  {
    "de": "Der Vorhang fällt.",
    "lv": "Tjaldið fellur.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dich zum Tanz bitten?",
    "lv": "Má ég bjóða þér upp í dans?",
    "level": "Sätze"
  },
  {
    "de": "Wann ist eure Hochzeit?",
    "lv": "Hvenær er brúðkaupið ykkar?",
    "level": "Sätze"
  },
  {
    "de": "Ich suche eine Wohnung.",
    "lv": "Ég er að leita að íbúð.",
    "level": "Sätze"
  },
  {
    "de": "Ist in diesem Haus eine Wohnung frei?",
    "lv": "Er laus íbúð í þessu húsi?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet die Miete?",
    "lv": "Hvað kostar leigan?",
    "level": "Sätze"
  },
  {
    "de": "Die Wohnung hat drei Zimmer und eine Küche.",
    "lv": "Í íbúðinni eru þrjú herbergi og eldhús.",
    "level": "Sätze"
  },
  {
    "de": "Heute ziehen wir um.",
    "lv": "Í dag flytjum við.",
    "level": "Sätze"
  },
  {
    "de": "Mia, pack die Sachen bitte in Kisten!",
    "lv": "Mia, pakkaðu dótinu niður í kassa, takk!",
    "level": "Sätze"
  },
  {
    "de": "Hast du alles eingepackt?",
    "lv": "Hefur þú pakkað öllu niður?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe mit meinem Freund in Kontakt.",
    "lv": "Ég er í sambandi við vin minn.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir ins Theater?",
    "lv": "Eigum við að fara í leikhúsið?",
    "level": "Sätze"
  },
  {
    "de": "Ist alles eingeladen?",
    "lv": "Er búið að setja allt í bílinn?",
    "level": "Sätze"
  },
  {
    "de": "Welch schöne Aussicht!",
    "lv": "Mikið er útsýnið fallegt!",
    "level": "Sätze"
  },
  {
    "de": "Nun können wir alles wieder aufräumen.",
    "lv": "Nú getum við tekið allt til aftur.",
    "level": "Sätze"
  },
  {
    "de": "Wie viele Zimmer habt ihr?",
    "lv": "Hvað eruð þið með mörg herbergi?",
    "level": "Sätze"
  },
  {
    "de": "Im Sommer fahre ich ans Meer.",
    "lv": "Í sumar ætla ég á ströndina.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du schwimmen?",
    "lv": "Kanntu að synda?",
    "level": "Sätze"
  },
  {
    "de": "Schwimm nicht zu weit hinaus!",
    "lv": "Ekki synda of langt út!",
    "level": "Sätze"
  },
  {
    "de": "Badest du jeden Tag?",
    "lv": "Ferðu í sund á hverjum degi?",
    "level": "Sätze"
  },
  {
    "de": "Bei schönem Wetter gehe ich angeln.",
    "lv": "Þegar veðrið er gott fer ég að veiða.",
    "level": "Sätze"
  },
  {
    "de": "Wie sieht er aus?",
    "lv": "Hvernig lítur hann út?",
    "level": "Sätze"
  },
  {
    "de": "Er hat sich aber recht verändert.",
    "lv": "Hann hefur nú aldeilis breyst.",
    "level": "Sätze"
  },
  {
    "de": "Wie ist er als Mensch?",
    "lv": "Hvernig manneskja er hann?",
    "level": "Sätze"
  },
  {
    "de": "Er ist immer nett und freundlich.",
    "lv": "Hann er alltaf indæll og vingjarnlegur.",
    "level": "Sätze"
  },
  {
    "de": "Ich fühle mich nicht wohl.",
    "lv": "Mér líður ekki vel.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe starke Kopfschmerzen.",
    "lv": "Ég er með mikinn höfuðverk.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe mich erkältet.",
    "lv": "Ég hef kvefast.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Schnupfen.",
    "lv": "Ég er með kvef.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist schwindlig.",
    "lv": "Mig svimar.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Arzt gehen.",
    "lv": "Ég verð að fara til læknis.",
    "level": "Sätze"
  },
  {
    "de": "Leg dich ins Bett!",
    "lv": "Leggstu upp í rúm!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Fieber?",
    "lv": "Ertu með hita?",
    "level": "Sätze"
  },
  {
    "de": "Gestern hatte ich erhöhte Temperatur.",
    "lv": "Í gær var ég með dálítinn hita.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Zahnschmerzen.",
    "lv": "Ég er með tannpínu.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Zahnarzt gehen.",
    "lv": "Ég verð að fara til tannlæknis.",
    "level": "Sätze"
  },
  {
    "de": "Weißt du, dass Finn krank ist?",
    "lv": "Veistu að Finn er veikur?",
    "level": "Sätze"
  },
  {
    "de": "Laut Arzt wird er bald wieder gesund.",
    "lv": "Að sögn læknisins verður hann bráðum heill heilsu á ný.",
    "level": "Sätze"
  },
  {
    "de": "Ich will meine Wohnung neu möblieren.",
    "lv": "Ég vil fá ný húsgögn í íbúðina mína.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das auf Raten kaufen?",
    "lv": "Get ég keypt þetta með afborgunum?",
    "level": "Sätze"
  },
  {
    "de": "Bleib im Bett, bis es dir besser geht!",
    "lv": "Vertu í rúminu þangað til þér líður betur!",
    "level": "Sätze"
  },
  {
    "de": "Noah hat in zwei Wochen schwimmen gelernt.",
    "lv": "Noah lærði að synda á tveimur vikum.",
    "level": "Sätze"
  },
  {
    "de": "Sei mit dem Essen noch vorsichtig.",
    "lv": "Farðu enn varlega í því sem þú borðar.",
    "level": "Sätze"
  },
  {
    "de": "Sprichst du Deutsch?",
    "lv": "Talar þú þýsku?",
    "level": "Sätze"
  },
  {
    "de": "Ja, ein bisschen.",
    "lv": "Já, svolítið.",
    "level": "Sätze"
  },
  {
    "de": "Du sprichst ziemlich fließend.",
    "lv": "Þú talar nokkuð reiprennandi.",
    "level": "Sätze"
  },
  {
    "de": "Wo hast du Deutsch gelernt?",
    "lv": "Hvar lærðir þú þýsku?",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme seit einem Jahr Deutschstunden.",
    "lv": "Ég hef verið í þýskutímum í eitt ár.",
    "level": "Sätze"
  },
  {
    "de": "Ich suche immer Gelegenheit, Deutsch zu sprechen.",
    "lv": "Ég leita alltaf tækifæra til að tala þýsku.",
    "level": "Sätze"
  },
  {
    "de": "Ist das Buch noch vorrätig?",
    "lv": "Er bókin enn fáanleg?",
    "level": "Sätze"
  },
  {
    "de": "Das Buch ist leider ausverkauft.",
    "lv": "Því miður er bókin uppseld.",
    "level": "Sätze"
  },
  {
    "de": "Wann erscheint die neue Auflage?",
    "lv": "Hvenær kemur nýja útgáfan út?",
    "level": "Sätze"
  },
  {
    "de": "Womit kann ich Ihnen helfen?",
    "lv": "Hvernig get ég aðstoðað þig?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie ganz frische Eier?",
    "lv": "Ertu með glæný egg?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die?",
    "lv": "Hvað kosta þau?",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu teuer.",
    "lv": "Þetta er of dýrt.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir ein halbes Kilo abwiegen?",
    "lv": "Getur þú vigtað hálft kíló fyrir mig?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel muss ich zahlen?",
    "lv": "Hvað þarf ég að borga mikið?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet das Kilo?",
    "lv": "Hvað kostar kílóið?",
    "level": "Sätze"
  },
  {
    "de": "Wiegen Sie mir bitte zwei Kilo ab.",
    "lv": "Vinsamlegast vigtaðu tvö kíló fyrir mig.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch Karotten?",
    "lv": "Ertu líka með gulrætur?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie gutes Rindfleisch?",
    "lv": "Ertu með gott nautakjöt?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir zwei Kilo Hackfleisch.",
    "lv": "Láttu mig fá tvö kíló af hakki.",
    "level": "Sätze"
  },
  {
    "de": "Ein Laib Brot, bitte, aber nicht zu knusprig.",
    "lv": "Eitt brauð, takk, en ekki of stökkt.",
    "level": "Sätze"
  },
  {
    "de": "Das Brot ist frisch gebacken.",
    "lv": "Brauðið er nýbakað.",
    "level": "Sätze"
  },
  {
    "de": "Was für Obst haben Sie heute?",
    "lv": "Hvaða ávexti ertu með í dag?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die Äpfel?",
    "lv": "Hvað kosta eplin?",
    "level": "Sätze"
  },
  {
    "de": "Dann nehme ich zwei Kilo Äpfel.",
    "lv": "Þá ætla ég að fá tvö kíló af eplum.",
    "level": "Sätze"
  },
  {
    "de": "Die Birnen sind sehr teuer.",
    "lv": "Perurnar eru mjög dýrar.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir alles nach Hause liefern?",
    "lv": "Getur þú sent þetta allt heim til mín?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie Reis?",
    "lv": "Ertu með hrísgrjón?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir bitte ein Kilo Reis.",
    "lv": "Láttu mig fá eitt kíló af hrísgrjónum, takk.",
    "level": "Sätze"
  },
  {
    "de": "Danke, diesmal nicht.",
    "lv": "Takk, ekki í þetta skipti.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet dieser Teppich?",
    "lv": "Hvað kostar þetta gólfteppi?",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Möbel in meine Wohnung liefern?",
    "lv": "Getur þú sent húsgögnin í íbúðina mína?",
    "level": "Sätze"
  },
  {
    "de": "Bitte an der Kasse zahlen.",
    "lv": "Vinsamlegast borgaðu við kassann.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, machen Sie die Rechnung.",
    "lv": "Vinsamlegast útbúðu reikninginn.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Meter?",
    "lv": "Hvað kostar metrinn?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Stoff gefällt mir.",
    "lv": "Mér líkar þetta efni vel.",
    "level": "Sätze"
  },
  {
    "de": "Schneiden Sie mir bitte drei Meter ab.",
    "lv": "Vinsamlegast klipptu þrjá metra fyrir mig.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch andere Muster?",
    "lv": "Ertu líka með önnur mynstur? • Ertu líka með aðrar prufur?",
    "level": "Sätze"
  },
  {
    "de": "Diese Farbe gefällt mir nicht.",
    "lv": "Mér líkar ekki þessi litur.",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir eine hellere.",
    "lv": "Láttu mig fá ljósari lit.",
    "level": "Sätze"
  },
  {
    "de": "Was kosten diese Socken?",
    "lv": "Hvað kosta þessir sokkar?",
    "level": "Sätze"
  },
  {
    "de": "Welche Handschuhe wünschen Sie?",
    "lv": "Hvaða hanska viltu fá?",
    "level": "Sätze"
  },
  {
    "de": "Die sind mir etwas zu eng.",
    "lv": "Þeir eru aðeins of þröngir á mig.",
    "level": "Sätze"
  },
  {
    "de": "So, nun passen sie gut.",
    "lv": "Svona, nú eru þeir mátulegir.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir einen guten Schneider empfehlen?",
    "lv": "Getur þú mælt með góðum klæðskera?",
    "level": "Sätze"
  },
  {
    "de": "Ich will einen Anzug bestellen.",
    "lv": "Ég vil láta sauma á mig jakkaföt.",
    "level": "Sätze"
  },
  {
    "de": "Wann wird er fertig sein?",
    "lv": "Hvenær verða þau tilbúin?",
    "level": "Sätze"
  },
  {
    "de": "Der Anzug sitzt gut.",
    "lv": "Jakkafötin fara vel.",
    "level": "Sätze"
  },
  {
    "de": "Die Hose ist zu lang.",
    "lv": "Buxurnar eru of síðar.",
    "level": "Sätze"
  },
  {
    "de": "Bitte reinigen und bügeln Sie ihn!",
    "lv": "Vinsamlegast hreinsaðu og pressaðu þau!",
    "level": "Sätze"
  },
  {
    "de": "Wann wird das Kleid fertig sein?",
    "lv": "Hvenær verður kjóllinn tilbúinn?",
    "level": "Sätze"
  },
  {
    "de": "Die Schuhe sind zu eng.",
    "lv": "Skórnir eru of þröngir.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Schuhe heute reparieren?",
    "lv": "Getur þú gert við skóna í dag?",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich die Schuhe abholen?",
    "lv": "Hvenær get ég sótt skóna?",
    "level": "Sätze"
  },
  {
    "de": "Meine Armbanduhr funktioniert nicht.",
    "lv": "Armbandsúrið mitt gengur ekki.",
    "level": "Sätze"
  },
  {
    "de": "Sie geht fünf Minuten vor.",
    "lv": "Það er fimm mínútum of fljótt.",
    "level": "Sätze"
  },
  {
    "de": "Bist du kurzsichtig oder weitsichtig?",
    "lv": "Ertu nærsýnn eða fjarsýnn?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte eine Brille kaufen.",
    "lv": "Mig langar að kaupa gleraugu.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie meine Brille reparieren?",
    "lv": "Getur þú gert við gleraugun mín?",
    "level": "Sätze"
  },
  {
    "de": "Das dauert nur eine Viertelstunde.",
    "lv": "Það tekur bara korter.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist mir zu hoch.",
    "lv": "Verðið er of hátt fyrir mig.",
    "level": "Sätze"
  },
  {
    "de": "Ich brauche zwei Fotos für meinen Pass.",
    "lv": "Ég þarf tvær myndir í vegabréfið mitt.",
    "level": "Sätze"
  },
  {
    "de": "Bitte packen Sie es ein und schicken Sie es mir nach Hause.",
    "lv": "Vinsamlegast pakkaðu þessu inn og sendu það heim til mín.",
    "level": "Sätze"
  },
  {
    "de": "Wir haben feste Preise.",
    "lv": "Við erum með fast verð.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, fotografieren Sie mich.",
    "lv": "Vinsamlegast taktu mynd af mér.",
    "level": "Sätze"
  },
  {
    "de": "Setzen Sie sich, schauen Sie gerade in die Kamera und bewegen Sie sich nicht!",
    "lv": "Sestu, horfðu beint í myndavélina og hreyfðu þig ekki!",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich das Probebild sehen?",
    "lv": "Hvenær get ég séð prufumyndina?",
    "level": "Sätze"
  },
  {
    "de": "Wann sind die Fotos fertig?",
    "lv": "Hvenær verða myndirnar tilbúnar?",
    "level": "Sätze"
  },
  {
    "de": "Die Aufnahme ist gelungen.",
    "lv": "Myndin heppnaðist.",
    "level": "Sätze"
  },
  {
    "de": "Die Fotos sind gut geworden.",
    "lv": "Myndirnar komu vel út.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie das Foto auch vergrößern?",
    "lv": "Getur þú líka stækkað myndina?",
    "level": "Sätze"
  },
  {
    "de": "Sind diese Steine echt?",
    "lv": "Eru þessir steinar ekta?",
    "level": "Sätze"
  },
  {
    "de": "Ist das echtes Gold?",
    "lv": "Er þetta ekta gull?",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir bitte Trauringe.",
    "lv": "Vinsamlegast sýndu mér giftingarhringa.",
    "level": "Sätze"
  },
  {
    "de": "Der Ring ist mir etwas zu weit.",
    "lv": "Hringurinn er aðeins of víður á mig.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann ihn enger machen.",
    "lv": "Ég get þrengt hann.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Ring passt mir.",
    "lv": "Þessi hringur er mátulegur á mig.",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir schöne Geschenkideen.",
    "lv": "Sýndu mér fallegar gjafahugmyndir.",
    "level": "Sätze"
  },
  {
    "de": "Wie gefallen dir diese Ohrringe?",
    "lv": "Hvernig líst þér á þessa eyrnalokka?",
    "level": "Sätze"
  },
  {
    "de": "Diese Brosche ist wirklich schön.",
    "lv": "Þessi brjóstnæla er virkilega falleg.",
    "level": "Sätze"
  },
  {
    "de": "Der Stein ist ein Saphir.",
    "lv": "Steinninn er safír.",
    "level": "Sätze"
  },
  {
    "de": "Das ist kein echter Stein, das ist Glas.",
    "lv": "Þetta er ekki ekta steinn, þetta er gler.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Armband kann ich Ihnen besonders empfehlen.",
    "lv": "Ég get sérstaklega mælt með þessu armbandi.",
    "level": "Sätze"
  },
  {
    "de": "Es ist besonders schön gearbeitet.",
    "lv": "Það er einstaklega vel smíðað.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist nicht hoch.",
    "lv": "Verðið er ekki hátt.",
    "level": "Sätze"
  },
  {
    "de": "Bekomme ich die Schachtel gratis?",
    "lv": "Fæ ég öskjuna ókeypis?",
    "level": "Sätze"
  },
  {
    "de": "Alle Schmuckstücke sind gestempelt.",
    "lv": "Allir skartgripirnir eru stimplaðir.",
    "level": "Sätze"
  },
  {
    "de": "Falls es meiner Frau nicht gefällt, kann ich es umtauschen?",
    "lv": "Ef konunni minni líkar það ekki get ég þá skipt því?",
    "level": "Sätze"
  },
  {
    "de": "Natürlich, jederzeit.",
    "lv": "Auðvitað, hvenær sem er.",
    "level": "Sätze"
  }
];

window.SENTENCE_ENTRIES = SENTENCE_ENTRIES;

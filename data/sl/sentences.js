const SENTENCE_ENTRIES = [
  {
    "de": "Hüte dich davor!",
    "lv": "Varuj se tega!",
    "level": "Sätze"
  },
  {
    "de": "Wenn nichts dazwischenkommt.",
    "lv": "Če se nič ne zaplete. • Če bo vse po načrtu.",
    "level": "Sätze"
  },
  {
    "de": "Das kann ich mir denken!",
    "lv": "To si lahko mislim!",
    "level": "Sätze"
  },
  {
    "de": "Ist er denn krank?",
    "lv": "Je mar bolan?",
    "level": "Sätze"
  },
  {
    "de": "Was denn?",
    "lv": "Kaj pa?",
    "level": "Sätze"
  },
  {
    "de": "Desto mehr.",
    "lv": "Toliko več.",
    "level": "Sätze"
  },
  {
    "de": "Je mehr, desto besser.",
    "lv": "Čim več, tem bolje.",
    "level": "Sätze"
  },
  {
    "de": "Alles deutet auf Regen.",
    "lv": "Vse kaže na dež.",
    "level": "Sätze"
  },
  {
    "de": "Damit ist mir wenig gedient.",
    "lv": "To mi ne pomaga kaj dosti.",
    "level": "Sätze"
  },
  {
    "de": "Er ist dienstlich verhindert.",
    "lv": "Zaradi službenih obveznosti ne more priti.",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie doch!",
    "lv": "Pa govorite!",
    "level": "Sätze"
  },
  {
    "de": "Es donnert.",
    "lv": "Grmi.",
    "level": "Sätze"
  },
  {
    "de": "Doppelt so groß.",
    "lv": "Dvakrat večji.",
    "level": "Sätze"
  },
  {
    "de": "Von dort.",
    "lv": "Od tam.",
    "level": "Sätze"
  },
  {
    "de": "Die Zeit drängt.",
    "lv": "Čas se izteka.",
    "level": "Sätze"
  },
  {
    "de": "Ihn drücken Sorgen.",
    "lv": "Tarejo ga skrbi.",
    "level": "Sätze"
  },
  {
    "de": "Hast du das Buch durchgearbeitet?",
    "lv": "Si knjigo temeljito predelal?",
    "level": "Sätze"
  },
  {
    "de": "Kein Durchgang!",
    "lv": "Prehod prepovedan!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich Sie bitten?",
    "lv": "Smem vas prositi?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin durstig.",
    "lv": "Žejen sem.",
    "level": "Sätze"
  },
  {
    "de": "Eben das meine ich.",
    "lv": "Prav to mislim.",
    "level": "Sätze"
  },
  {
    "de": "Es ist ganz egal.",
    "lv": "Popolnoma vseeno je.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie eigentlich?",
    "lv": "Kaj pravzaprav hočete?",
    "level": "Sätze"
  },
  {
    "de": "Eilt es mit dieser Sache?",
    "lv": "Se s to zadevo mudi?",
    "level": "Sätze"
  },
  {
    "de": "Eilt sehr!",
    "lv": "Zelo nujno!",
    "level": "Sätze"
  },
  {
    "de": "Ich habe es eilig.",
    "lv": "Mudi se mi.",
    "level": "Sätze"
  },
  {
    "de": "Du bildest dir nur ein, krank zu sein.",
    "lv": "Samo si domišljaš, da si bolan.",
    "level": "Sätze"
  },
  {
    "de": "Was fällt dir ein?",
    "lv": "Kako si drzneš? • Kaj ti pride na misel?",
    "level": "Sätze"
  },
  {
    "de": "Es war einmal.",
    "lv": "Nekoč je bilo.",
    "level": "Sätze"
  },
  {
    "de": "Steigen Sie bitte ein!",
    "lv": "Vstopite, prosim!",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie ein!",
    "lv": "Izvolite, vstopite!",
    "level": "Sätze"
  },
  {
    "de": "Einzelnes hat mir dort gefallen.",
    "lv": "Nekatere stvari so mi bile tam všeč.",
    "level": "Sätze"
  },
  {
    "de": "Es empfiehlt sich.",
    "lv": "Priporočljivo je.",
    "level": "Sätze"
  },
  {
    "de": "Diese Flasche enthält Essig.",
    "lv": "V tej steklenici je kis.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldigen Sie bitte!",
    "lv": "Oprostite, prosim!",
    "level": "Sätze"
  },
  {
    "de": "Entweder ... oder ...",
    "lv": "Bodisi... bodisi...",
    "level": "Sätze"
  },
  {
    "de": "Wer war der Erste?",
    "lv": "Kdo je bil prvi?",
    "level": "Sätze"
  },
  {
    "de": "Wer fehlt heute?",
    "lv": "Kdo danes manjka?",
    "level": "Sätze"
  },
  {
    "de": "Was fehlt dir?",
    "lv": "Kaj ti je?",
    "level": "Sätze"
  },
  {
    "de": "Wie heißen Sie?",
    "lv": "Kako vam je ime?",
    "level": "Sätze"
  },
  {
    "de": "Was soll das heißen?",
    "lv": "Kaj naj bi to pomenilo?",
    "level": "Sätze"
  },
  {
    "de": "Bitte treten Sie näher heran!",
    "lv": "Prosim, stopite bliže!",
    "level": "Sätze"
  },
  {
    "de": "Heraus mit der Sprache!",
    "lv": "Na dan z besedo!",
    "level": "Sätze"
  },
  {
    "de": "im Herbst",
    "lv": "jeseni",
    "level": "Sätze"
  },
  {
    "de": "Meine Herrschaften!",
    "lv": "Dame in gospodje!",
    "level": "Sätze"
  },
  {
    "de": "von heute an",
    "lv": "od danes naprej",
    "level": "Sätze"
  },
  {
    "de": "heute früh",
    "lv": "danes zjutraj",
    "level": "Sätze"
  },
  {
    "de": "heute Nacht",
    "lv": "nocoj",
    "level": "Sätze"
  },
  {
    "de": "Zu Hilfe!",
    "lv": "Na pomoč!",
    "level": "Sätze"
  },
  {
    "de": "Ich lerne jeden Tag Deutsch.",
    "lv": "Vsak dan se učim nemščine.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das bitte wiederholen?",
    "lv": "Lahko to, prosim, ponoviš?",
    "level": "Sätze"
  },
  {
    "de": "Wir treffen uns am Bahnhof.",
    "lv": "Dobimo se na železniški postaji.",
    "level": "Sätze"
  },
  {
    "de": "Ich stimme dir teilweise zu.",
    "lv": "Deloma se strinjam s teboj.",
    "level": "Sätze"
  },
  {
    "de": "Diese Entscheidung hat weitreichende Folgen.",
    "lv": "Ta odločitev ima daljnosežne posledice.",
    "level": "Sätze"
  },
  {
    "de": "Man sollte mehrere Perspektiven berücksichtigen.",
    "lv": "Upoštevati bi bilo treba več vidikov.",
    "level": "Sätze"
  },
  {
    "de": "Könnten Sie das näher erläutern?",
    "lv": "Bi lahko to podrobneje pojasnili?",
    "level": "Sätze"
  },
  {
    "de": "Was mich anbelangt, ...",
    "lv": "Kar se mene tiče,...",
    "level": "Sätze"
  },
  {
    "de": "Wie alt sind Sie?",
    "lv": "Koliko ste stari?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zwanzig Jahre alt.",
    "lv": "Star sem dvajset let.",
    "level": "Sätze"
  },
  {
    "de": "Von heute an.",
    "lv": "Od danes naprej.",
    "level": "Sätze"
  },
  {
    "de": "Von jetzt an.",
    "lv": "Od zdaj naprej.",
    "level": "Sätze"
  },
  {
    "de": "Anders geht es nicht.",
    "lv": "Drugače ne gre.",
    "level": "Sätze"
  },
  {
    "de": "Rufen Sie mich an.",
    "lv": "Pokličite me.",
    "level": "Sätze"
  },
  {
    "de": "Bitte stellen Sie das Radio ab.",
    "lv": "Prosim, izklopite radio.",
    "level": "Sätze"
  },
  {
    "de": "Achte bitte auf den Verkehr.",
    "lv": "Pazi, prosim, na promet.",
    "level": "Sätze"
  },
  {
    "de": "Darauf musst du achten.",
    "lv": "Na to moraš paziti.",
    "level": "Sätze"
  },
  {
    "de": "Heute mache ich es anders.",
    "lv": "Danes bom to naredil drugače.",
    "level": "Sätze"
  },
  {
    "de": "Wir warten auf den Bus.",
    "lv": "Čakamo na avtobus.",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt allein.",
    "lv": "Živi sam.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Ausbildung absolviert.",
    "lv": "Zaključil sem usposabljanje. • Končal sem šolanje.",
    "level": "Sätze"
  },
  {
    "de": "Ich warte den Regen ab.",
    "lv": "Počakal bom, da dež poneha.",
    "level": "Sätze"
  },
  {
    "de": "Er arbeitet in der Verkaufsabteilung.",
    "lv": "Dela v prodajnem oddelku.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin allergisch gegen Katzen.",
    "lv": "Alergičen sem na mačke.",
    "level": "Sätze"
  },
  {
    "de": "Andererseits verstehe ich ihn.",
    "lv": "Po drugi strani ga razumem.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Situation analysiert.",
    "lv": "Analiziral sem položaj.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat meinen Vorschlag akzeptiert.",
    "lv": "Sprejela je moj predlog.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte das genauer analysieren.",
    "lv": "Rad bi to natančneje analiziral.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte den Vertrag ändern.",
    "lv": "Rad bi spremenil pogodbo.",
    "level": "Sätze"
  },
  {
    "de": "Er ändert ständig seine Meinung.",
    "lv": "Nenehno spreminja svoje mnenje.",
    "level": "Sätze"
  },
  {
    "de": "Ähnliche Probleme hatten wir schon früher.",
    "lv": "Podobne težave smo imeli že prej.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ahnung!",
    "lv": "Nimam pojma!",
    "level": "Sätze"
  },
  {
    "de": "Hör auf zu jammern.",
    "lv": "Nehaj tarnati.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Kleid ist stilvoll und konservativ.",
    "lv": "Ta obleka je klasično elegantna.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre gerne Akkordeonmusik.",
    "lv": "Rad poslušam glasbo za harmoniko.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das Gerät anklicken?",
    "lv": "Lahko klikneš na napravo?",
    "level": "Sätze"
  },
  {
    "de": "Bitte öffne die Datei und klicke darauf.",
    "lv": "Prosim, odpri datoteko in klikni nanjo.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe einen Unfall gehabt.",
    "lv": "Imel sem nesrečo.",
    "level": "Sätze"
  },
  {
    "de": "Wir laufen zum Bahnhof.",
    "lv": "Peš gremo na železniško postajo.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schalte den Fernseher an.",
    "lv": "Prosim, prižgi televizor.",
    "level": "Sätze"
  },
  {
    "de": "Mein Computer ist abgestürzt.",
    "lv": "Računalnik mi je odpovedal.",
    "level": "Sätze"
  },
  {
    "de": "Am Wochenende gehe ich angeln.",
    "lv": "Ob koncu tedna grem lovit ribe.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe den Anruf verpasst.",
    "lv": "Zamudil sem klic.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mich später anrufen?",
    "lv": "Me lahko pokličeš pozneje?",
    "level": "Sätze"
  },
  {
    "de": "Bitte nimm meinen Vorschlag an.",
    "lv": "Prosim, sprejmi moj predlog.",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme dein Angebot an.",
    "lv": "Sprejmem tvojo ponudbo.",
    "level": "Sätze"
  },
  {
    "de": "Er nahm die Einladung an.",
    "lv": "Sprejel je povabilo.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Angst vor Spinnen.",
    "lv": "Bojim se pajkov.",
    "level": "Sätze"
  },
  {
    "de": "Keine Angst, alles wird gut.",
    "lv": "Ne boj se, vse bo dobro.",
    "level": "Sätze"
  },
  {
    "de": "Anklang finden.",
    "lv": "Naleteti na odobravanje. • Najti odmev.",
    "level": "Sätze"
  },
  {
    "de": "Es kommt darauf an.",
    "lv": "Odvisno je.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Anlass.",
    "lv": "Ob tej priložnosti.",
    "level": "Sätze"
  },
  {
    "de": "Nehmen wir an, dass ...",
    "lv": "Predpostavimo, da...",
    "level": "Sätze"
  },
  {
    "de": "Was hast du da angerichtet?",
    "lv": "Kaj si pa zakrivil?",
    "level": "Sätze"
  },
  {
    "de": "Bis ans Ende.",
    "lv": "Do konca.",
    "level": "Sätze"
  },
  {
    "de": "Du glaubst mir anscheinend nicht.",
    "lv": "Očitno mi ne verjameš.",
    "level": "Sätze"
  },
  {
    "de": "Meiner Ansicht nach ...",
    "lv": "Po mojem mnenju...",
    "level": "Sätze"
  },
  {
    "de": "Stell dich nicht so an!",
    "lv": "Ne pretiravaj!",
    "level": "Sätze"
  },
  {
    "de": "An die Arbeit gehen.",
    "lv": "Lotiti se dela.",
    "level": "Sätze"
  },
  {
    "de": "Außer Atem sein.",
    "lv": "Biti brez sape.",
    "level": "Sätze"
  },
  {
    "de": "Guten Appetit!",
    "lv": "Dober tek!",
    "level": "Sätze"
  },
  {
    "de": "In einem Atemzug.",
    "lv": "V eni sapi.",
    "level": "Sätze"
  },
  {
    "de": "Auf jeden Fall.",
    "lv": "Vsekakor.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal war alles still.",
    "lv": "Naenkrat je bilo vse tiho.",
    "level": "Sätze"
  },
  {
    "de": "Bitte mach die Tür auf!",
    "lv": "Odpri, prosim, vrata!",
    "level": "Sätze"
  },
  {
    "de": "Er hat den Kredit aufgenommen.",
    "lv": "Vzel je kredit.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen heute aufräumen.",
    "lv": "Danes moramo pospraviti.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre jetzt auf.",
    "lv": "Zdaj bom nehal.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schon auf.",
    "lv": "Že je pokonci.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen das Treffen verschieben.",
    "lv": "Sestanek moramo prestaviti.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat mich aufgeregt.",
    "lv": "Razjezila me je.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal.",
    "lv": "Naenkrat.",
    "level": "Sätze"
  },
  {
    "de": "Auf der Stelle.",
    "lv": "Takoj.",
    "level": "Sätze"
  },
  {
    "de": "Für den Schaden aufkommen.",
    "lv": "Povrniti škodo.",
    "level": "Sätze"
  },
  {
    "de": "Bitte die Tür auf!",
    "lv": "Odprite, prosim, vrata!",
    "level": "Sätze"
  },
  {
    "de": "Aufrecht sitzen.",
    "lv": "Sedeti vzravnano.",
    "level": "Sätze"
  },
  {
    "de": "Er ist auf.",
    "lv": "Pokonci je.",
    "level": "Sätze"
  },
  {
    "de": "Alle Kräfte aufwenden.",
    "lv": "Napeti vse sile.",
    "level": "Sätze"
  },
  {
    "de": "Viel Mühe aufwenden.",
    "lv": "Vložiti veliko truda.",
    "level": "Sätze"
  },
  {
    "de": "Geh mir aus den Augen!",
    "lv": "Izgini mi izpred oči!",
    "level": "Sätze"
  },
  {
    "de": "Unter vier Augen.",
    "lv": "Na štiri oči.",
    "level": "Sätze"
  },
  {
    "de": "Aus Mangel an Zeit.",
    "lv": "Zaradi pomanjkanja časa.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Grunde.",
    "lv": "Iz tega razloga.",
    "level": "Sätze"
  },
  {
    "de": "Alle außer dir.",
    "lv": "Vsi razen tebe.",
    "level": "Sätze"
  },
  {
    "de": "Auf Äußerlichkeiten Wert legen.",
    "lv": "Dajati veliko na zunanji videz.",
    "level": "Sätze"
  },
  {
    "de": "Im äußersten Fall.",
    "lv": "V skrajnem primeru.",
    "level": "Sätze"
  },
  {
    "de": "Äußerst wichtig.",
    "lv": "Izjemno pomembno.",
    "level": "Sätze"
  },
  {
    "de": "Aussicht auf die See.",
    "lv": "Razgled na morje.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gute Aussichten.",
    "lv": "Ima dobre obete.",
    "level": "Sätze"
  },
  {
    "de": "Wie wird dieses Wort ausgesprochen?",
    "lv": "Kako se izgovarja ta beseda?",
    "level": "Sätze"
  },
  {
    "de": "Sein Beileid aussprechen.",
    "lv": "Izreči sožalje.",
    "level": "Sätze"
  },
  {
    "de": "Wann wurden die Meisterschaftskämpfe ausgetragen?",
    "lv": "Kdaj je potekalo prvenstvo?",
    "level": "Sätze"
  },
  {
    "de": "Welchen Beruf üben Sie aus?",
    "lv": "Kaj ste po poklicu?",
    "level": "Sätze"
  },
  {
    "de": "Einfluss ausüben.",
    "lv": "Vplivati.",
    "level": "Sätze"
  },
  {
    "de": "Auswärts essen.",
    "lv": "Jesti zunaj doma.",
    "level": "Sätze"
  },
  {
    "de": "Per Bahn.",
    "lv": "Po železnici.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Bahn.",
    "lv": "Z vlakom.",
    "level": "Sätze"
  },
  {
    "de": "Möglichst bald.",
    "lv": "Čim prej.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist Angst und bange.",
    "lv": "Zelo me je strah.",
    "level": "Sätze"
  },
  {
    "de": "Auf die lange Bank schieben.",
    "lv": "Odlašati.",
    "level": "Sätze"
  },
  {
    "de": "Bar zahlen.",
    "lv": "Plačati z gotovino.",
    "level": "Sätze"
  },
  {
    "de": "Erz bauen.",
    "lv": "Kopati rudo.",
    "level": "Sätze"
  },
  {
    "de": "Mist bauen.",
    "lv": "Narediti neumnost.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin beauftragt.",
    "lv": "Zadolžen sem.",
    "level": "Sätze"
  },
  {
    "de": "Nach Bedarf.",
    "lv": "Po potrebi.",
    "level": "Sätze"
  },
  {
    "de": "Ich bedauere ihn.",
    "lv": "Žal mi je zanj.",
    "level": "Sätze"
  },
  {
    "de": "Was bedeutet dieses Wort?",
    "lv": "Kaj pomeni ta beseda?",
    "level": "Sätze"
  },
  {
    "de": "Unter der Bedingung, dass ...",
    "lv": "Pod pogojem, da...",
    "level": "Sätze"
  },
  {
    "de": "Sie sieht bedrückt aus.",
    "lv": "Videti je potrta.",
    "level": "Sätze"
  },
  {
    "de": "Hinweise befolgen.",
    "lv": "Upoštevati navodila.",
    "level": "Sätze"
  },
  {
    "de": "Befehle befolgen.",
    "lv": "Izvrševati ukaze.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Post befördern.",
    "lv": "Poslati po pošti.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin begierig zu wissen.",
    "lv": "Zelo me zanima.",
    "level": "Sätze"
  },
  {
    "de": "Zu Beginn.",
    "lv": "V začetku.",
    "level": "Sätze"
  },
  {
    "de": "Am Beginn.",
    "lv": "Na začetku.",
    "level": "Sätze"
  },
  {
    "de": "Bei Beginn.",
    "lv": "Ob začetku.",
    "level": "Sätze"
  },
  {
    "de": "In Begleitung.",
    "lv": "V spremstvu.",
    "level": "Sätze"
  },
  {
    "de": "Mit seiner Begleitung.",
    "lv": "S svojim spremljevalcem.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schwer von Begriff.",
    "lv": "Počasi dojema.",
    "level": "Sätze"
  },
  {
    "de": "Im Gedächtnis behalten.",
    "lv": "Ohraniti v spominu.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tisch.",
    "lv": "Pri mizi.",
    "level": "Sätze"
  },
  {
    "de": "Bei Sinnen sein.",
    "lv": "Biti pri zdravi pameti.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tage.",
    "lv": "Podnevi.",
    "level": "Sätze"
  },
  {
    "de": "Bei weitem nicht so.",
    "lv": "Še zdaleč ne tako.",
    "level": "Sätze"
  },
  {
    "de": "Alle beide.",
    "lv": "Oba.",
    "level": "Sätze"
  },
  {
    "de": "Stürmischer Beifall brach los.",
    "lv": "Izbruhnil je viharen aplavz.",
    "level": "Sätze"
  },
  {
    "de": "Beifall finden.",
    "lv": "Naleteti na odobravanje.",
    "level": "Sätze"
  },
  {
    "de": "Beileid aussprechen.",
    "lv": "Izraziti sožalje.",
    "level": "Sätze"
  },
  {
    "de": "Auf eigenen Beinen stehen.",
    "lv": "Stati na lastnih nogah.",
    "level": "Sätze"
  },
  {
    "de": "Zum Beispiel.",
    "lv": "Na primer.",
    "level": "Sätze"
  },
  {
    "de": "Beistand leisten.",
    "lv": "Nuditi pomoč.",
    "level": "Sätze"
  },
  {
    "de": "Beitrag leisten.",
    "lv": "Prispevati svoj delež.",
    "level": "Sätze"
  },
  {
    "de": "Jemandes Bekanntschaft machen.",
    "lv": "Seznaniti se s kom.",
    "level": "Sätze"
  },
  {
    "de": "Bekanntschaft anknüpfen.",
    "lv": "Navezati poznanstvo.",
    "level": "Sätze"
  },
  {
    "de": "Belegte Brötchen.",
    "lv": "Obložene žemlje.",
    "level": "Sätze"
  },
  {
    "de": "Nach Ihrem Belieben.",
    "lv": "Po vaši želji.",
    "level": "Sätze"
  },
  {
    "de": "Zu jeder beliebigen Zeit.",
    "lv": "Kadar koli.",
    "level": "Sätze"
  },
  {
    "de": "Schweigen beobachten.",
    "lv": "Ohranjati molk.",
    "level": "Sätze"
  },
  {
    "de": "Zur Bequemlichkeit.",
    "lv": "Zaradi udobja.",
    "level": "Sätze"
  },
  {
    "de": "Bereit sein.",
    "lv": "Biti pripravljen.",
    "level": "Sätze"
  },
  {
    "de": "Unfallopfer bergen.",
    "lv": "Reševati ponesrečence.",
    "level": "Sätze"
  },
  {
    "de": "Bericht erstatten.",
    "lv": "Podati poročilo.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind besetzt.",
    "lv": "Vsa mesta so zasedena.",
    "level": "Sätze"
  },
  {
    "de": "Neue Besen kehren gut.",
    "lv": "Nova metla dobro pometa.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt ein Haus.",
    "lv": "Je lastnik hiše.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt viel Mut.",
    "lv": "Ima veliko poguma.",
    "level": "Sätze"
  },
  {
    "de": "Desto besser.",
    "lv": "Toliko bolje.",
    "level": "Sätze"
  },
  {
    "de": "Gute Besserung!",
    "lv": "Hitro okrevanje!",
    "level": "Sätze"
  },
  {
    "de": "Beim besten Willen.",
    "lv": "Kljub najboljši volji.",
    "level": "Sätze"
  },
  {
    "de": "Am besten.",
    "lv": "Najbolje.",
    "level": "Sätze"
  },
  {
    "de": "Es besteht Zweifel.",
    "lv": "Obstaja dvom.",
    "level": "Sätze"
  },
  {
    "de": "Seine Aufgabe besteht darin ...",
    "lv": "Njegova naloga je v tem, da...",
    "level": "Sätze"
  },
  {
    "de": "Grüße bestellen.",
    "lv": "Prenesti pozdrave.",
    "level": "Sätze"
  },
  {
    "de": "Ganz bestimmt.",
    "lv": "Čisto zagotovo. • Prav gotovo.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch kommen.",
    "lv": "Priti na obisk.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch sein.",
    "lv": "Biti na obisku. • Biti v gosteh.",
    "level": "Sätze"
  },
  {
    "de": "Oft Konzerte besuchen.",
    "lv": "Pogosto hoditi na koncerte.",
    "level": "Sätze"
  },
  {
    "de": "Welche Schule hat er besucht?",
    "lv": "Katero šolo je obiskoval?",
    "level": "Sätze"
  },
  {
    "de": "In Betracht ziehen.",
    "lv": "Vzeti v poštev. • Pretehtati.",
    "level": "Sätze"
  },
  {
    "de": "Außer Betracht lassen.",
    "lv": "Ne upoštevati.",
    "level": "Sätze"
  },
  {
    "de": "Er betreibt ein Hotel.",
    "lv": "Vodi hotel.",
    "level": "Sätze"
  },
  {
    "de": "Alle beiden.",
    "lv": "Oba.",
    "level": "Sätze"
  },
  {
    "de": "Alles bezahlen.",
    "lv": "Plačati vse.",
    "level": "Sätze"
  },
  {
    "de": "In Bezug auf etwas.",
    "lv": "V zvezi z nečim.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön.",
    "lv": "Prosim. • Izvolite.",
    "level": "Sätze"
  },
  {
    "de": "Wie bitte?",
    "lv": "Kako, prosim?",
    "level": "Sätze"
  },
  {
    "de": "Bitte sehr.",
    "lv": "Ni za kaj. • Kar izvolite.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe eine Bitte an Sie.",
    "lv": "Imam prošnjo do vas.",
    "level": "Sätze"
  },
  {
    "de": "Trompete blasen.",
    "lv": "Igrati trobento.",
    "level": "Sätze"
  },
  {
    "de": "In einem Buch blättern.",
    "lv": "Listati po knjigi.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßen Füßen.",
    "lv": "Z bosimi nogami.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßem Auge.",
    "lv": "S prostim očesom.",
    "level": "Sätze"
  },
  {
    "de": "Danke für die Blumen!",
    "lv": "Hvala za kompliment!",
    "level": "Sätze"
  },
  {
    "de": "Alles in Butter.",
    "lv": "Vse v najlepšem redu.",
    "level": "Sätze"
  },
  {
    "de": "Bitte checken.",
    "lv": "Preveriti, prosim.",
    "level": "Sätze"
  },
  {
    "de": "Da ist er!",
    "lv": "Tu je!",
    "level": "Sätze"
  },
  {
    "de": "Alles spricht dafür.",
    "lv": "Vse kaže na to.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann nichts dafür.",
    "lv": "Nisem jaz kriv.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin dagegen.",
    "lv": "Sem proti temu.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe nichts dagegen.",
    "lv": "Nimam nič proti.",
    "level": "Sätze"
  },
  {
    "de": "Von daheim.",
    "lv": "Od doma.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Dame ziehen.",
    "lv": "Narediti potezo z damo.",
    "level": "Sätze"
  },
  {
    "de": "Es dämmert.",
    "lv": "Mrači se. • Dani se.",
    "level": "Sätze"
  },
  {
    "de": "Danke schön!",
    "lv": "Hvala lepa! • Najlepša hvala!",
    "level": "Sätze"
  },
  {
    "de": "Dann und wann.",
    "lv": "Kdaj pa kdaj.",
    "level": "Sätze"
  },
  {
    "de": "Darauf kannst du dich verlassen.",
    "lv": "Na to se lahko zaneseš.",
    "level": "Sätze"
  },
  {
    "de": "Daraus wird nichts.",
    "lv": "Iz tega ne bo nič.",
    "level": "Sätze"
  },
  {
    "de": "So dass ...",
    "lv": "Tako da...",
    "level": "Sätze"
  },
  {
    "de": "Für wen halten Sie mich?",
    "lv": "Za koga me imate?",
    "level": "Sätze"
  },
  {
    "de": "Hände weg!",
    "lv": "Roke proč!",
    "level": "Sätze"
  },
  {
    "de": "Lass den Kopf nicht hängen!",
    "lv": "Ne povešaj glave!",
    "level": "Sätze"
  },
  {
    "de": "zu Hause",
    "lv": "doma",
    "level": "Sätze"
  },
  {
    "de": "nach Hause gehen",
    "lv": "iti domov",
    "level": "Sätze"
  },
  {
    "de": "von Haus aus",
    "lv": "po poreklu • po naravi",
    "level": "Sätze"
  },
  {
    "de": "Meinen herzlichsten Glückwunsch!",
    "lv": "Najprisrčnejše čestitke!",
    "level": "Sätze"
  },
  {
    "de": "Seien Sie so gut!",
    "lv": "Bodite tako prijazni! • Bodite tako dobri!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie die Güte!",
    "lv": "Bodite tako ljubeznivi!",
    "level": "Sätze"
  },
  {
    "de": "Was hast du?",
    "lv": "Kaj ti je? • Kaj se ti je zgodilo?",
    "level": "Sätze"
  },
  {
    "de": "Gestatten Sie bitte!",
    "lv": "Dovolite, prosim!",
    "level": "Sätze"
  },
  {
    "de": "Ist es gestattet zu rauchen?",
    "lv": "Ali je dovoljeno kaditi?",
    "level": "Sätze"
  },
  {
    "de": "Ich muss gestehen, dass ...",
    "lv": "Moram priznati, da...",
    "level": "Sätze"
  },
  {
    "de": "gestern früh",
    "lv": "včeraj zjutraj",
    "level": "Sätze"
  },
  {
    "de": "gestern Abend",
    "lv": "včeraj zvečer",
    "level": "Sätze"
  },
  {
    "de": "Es ist mir gleichgültig, ob ...",
    "lv": "Vseeno mi je, ali...",
    "level": "Sätze"
  },
  {
    "de": "Was ist geschehen?",
    "lv": "Kaj se je zgodilo?",
    "level": "Sätze"
  },
  {
    "de": "Mach keine Geschichten!",
    "lv": "Ne delaj neumnosti!",
    "level": "Sätze"
  },
  {
    "de": "Geschweige denn ...",
    "lv": "Kaj šele... • Da ne omenjam...",
    "level": "Sätze"
  },
  {
    "de": "Gehen Sie geradeaus!",
    "lv": "Pojdite naravnost!",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es Ihnen?",
    "lv": "Kako ste? • Kako se imate?",
    "level": "Sätze"
  },
  {
    "de": "Frag ihn gelegentlich, ob ...",
    "lv": "Ob priložnosti ga vprašaj, ali...",
    "level": "Sätze"
  },
  {
    "de": "morgen früh",
    "lv": "jutri zjutraj",
    "level": "Sätze"
  },
  {
    "de": "im Frühling",
    "lv": "spomladi",
    "level": "Sätze"
  },
  {
    "de": "Was gibt’s Neues?",
    "lv": "Kaj je novega?",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Brief folgt, dass ...",
    "lv": "Iz tega pisma izhaja, da...",
    "level": "Sätze"
  },
  {
    "de": "Fahre fort!",
    "lv": "Nadaljuj!",
    "level": "Sätze"
  },
  {
    "de": "Er ist kein Freund von ...",
    "lv": "Ni ljubitelj...",
    "level": "Sätze"
  },
  {
    "de": "Es erwies sich, dass ...",
    "lv": "Izkazalo se je, da...",
    "level": "Sätze"
  },
  {
    "de": "Gedenkst du meiner?",
    "lv": "Se me spominjaš? • Misliš name?",
    "level": "Sätze"
  },
  {
    "de": "im Winter",
    "lv": "pozimi",
    "level": "Sätze"
  },
  {
    "de": "Welcher Jahrgang sind Sie?",
    "lv": "Katerega leta ste rojeni?",
    "level": "Sätze"
  },
  {
    "de": "Es jammert mich zu sehen ...",
    "lv": "Hudo mi je gledati...",
    "level": "Sätze"
  },
  {
    "de": "je mehr, desto besser",
    "lv": "čim več, tem bolje",
    "level": "Sätze"
  },
  {
    "de": "bis jetzt",
    "lv": "doslej",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich zum Bahnhof?",
    "lv": "Kako pridem do železniške postaje?",
    "level": "Sätze"
  },
  {
    "de": "Komm her!",
    "lv": "Pridi sem!",
    "level": "Sätze"
  },
  {
    "de": "Könnte ich Frau N. sprechen?",
    "lv": "Bi lahko govoril z gospo N.?",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das?",
    "lv": "Koliko to stane?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange dauert die Vorstellung?",
    "lv": "Koliko časa traja predstava?",
    "level": "Sätze"
  },
  {
    "de": "Lass das!",
    "lv": "Nehaj! • Pusti to!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich in Ruhe!",
    "lv": "Pusti me pri miru!",
    "level": "Sätze"
  },
  {
    "de": "Lassen Sie mich Ihnen helfen!",
    "lv": "Dovolite, da vam pomagam!",
    "level": "Sätze"
  },
  {
    "de": "Lasst uns gehen!",
    "lv": "Pojdimo!",
    "level": "Sätze"
  },
  {
    "de": "Na, wie läufts?",
    "lv": "No, kako gre?",
    "level": "Sätze"
  },
  {
    "de": "Es lebe!",
    "lv": "Naj živi!",
    "level": "Sätze"
  },
  {
    "de": "Leben Sie wohl!",
    "lv": "Ostanite zdravi! • Zbogom!",
    "level": "Sätze"
  },
  {
    "de": "Was ist los?",
    "lv": "Kaj je narobe? • Kaj se dogaja?",
    "level": "Sätze"
  },
  {
    "de": "Der Job ist anstrengend.",
    "lv": "Služba je naporna.",
    "level": "Sätze"
  },
  {
    "de": "Das war ein anstrengender Tag.",
    "lv": "To je bil naporen dan.",
    "level": "Sätze"
  },
  {
    "de": "Deutsch lernen kann anstrengend sein.",
    "lv": "Učenje nemščine je lahko naporno.",
    "level": "Sätze"
  },
  {
    "de": "Er verlangt eine Erklärung.",
    "lv": "Zahteva pojasnilo.",
    "level": "Sätze"
  },
  {
    "de": "Der Verkäufer verlangt zu viel Geld.",
    "lv": "Prodajalec zahteva preveč denarja.",
    "level": "Sätze"
  },
  {
    "de": "Das Gesetz verlangt es so.",
    "lv": "Tako zahteva zakon.",
    "level": "Sätze"
  },
  {
    "de": "Das ist gar nicht so schwer.",
    "lv": "To sploh ni tako težko.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe gar kein Geld.",
    "lv": "Sploh nimam denarja.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gar nichts gesagt.",
    "lv": "Sploh ni ničesar rekel.",
    "level": "Sätze"
  },
  {
    "de": "Der Hund ist los.",
    "lv": "Pes je spuščen.",
    "level": "Sätze"
  },
  {
    "de": "Hier ist viel los.",
    "lv": "Tu se veliko dogaja.",
    "level": "Sätze"
  },
  {
    "de": "Halt die Luft an!",
    "lv": "Utihni! • Ne pretiravaj!",
    "level": "Sätze"
  },
  {
    "de": "Was machst du?",
    "lv": "Kaj delaš?",
    "level": "Sätze"
  },
  {
    "de": "Sag mal!",
    "lv": "Povej no!",
    "level": "Sätze"
  },
  {
    "de": "Was meinen Sie damit?",
    "lv": "Kaj mislite s tem? • Kako to mislite?",
    "level": "Sätze"
  },
  {
    "de": "Wir gehen mit Ihnen.",
    "lv": "Gremo z vami.",
    "level": "Sätze"
  },
  {
    "de": "Ich fahre mit der Eisenbahn.",
    "lv": "Peljem se z vlakom.",
    "level": "Sätze"
  },
  {
    "de": "am Mittwoch",
    "lv": "v sredo",
    "level": "Sätze"
  },
  {
    "de": "Es mag sein.",
    "lv": "Mogoče je tako.",
    "level": "Sätze"
  },
  {
    "de": "Ich mag das nicht.",
    "lv": "To mi ni všeč.",
    "level": "Sätze"
  },
  {
    "de": "am Montag",
    "lv": "v ponedeljek",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen!",
    "lv": "Dobro jutro!",
    "level": "Sätze"
  },
  {
    "de": "am Morgen",
    "lv": "zjutraj",
    "level": "Sätze"
  },
  {
    "de": "Gute Nacht!",
    "lv": "Lahko noč!",
    "level": "Sätze"
  },
  {
    "de": "Nehmen Sie Platz!",
    "lv": "Izvolite sesti!",
    "level": "Sätze"
  },
  {
    "de": "Letzte Neuheit!",
    "lv": "Zadnja novost!",
    "level": "Sätze"
  },
  {
    "de": "Nicht wahr?",
    "lv": "Kajne?",
    "level": "Sätze"
  },
  {
    "de": "Nicht doch!",
    "lv": "Ah, kje pa! • Nikar!",
    "level": "Sätze"
  },
  {
    "de": "Nun endlich!",
    "lv": "No, končno!",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das?",
    "lv": "Čemu to koristi?",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das alles?",
    "lv": "Čemu vse to koristi?",
    "level": "Sätze"
  },
  {
    "de": "Parken verboten!",
    "lv": "Parkiranje prepovedano!",
    "level": "Sätze"
  },
  {
    "de": "Nicht parken!",
    "lv": "Ne parkirati!",
    "level": "Sätze"
  },
  {
    "de": "Er hat Recht.",
    "lv": "Prav ima.",
    "level": "Sätze"
  },
  {
    "de": "Wovon ist die Rede?",
    "lv": "O čem je govor?",
    "level": "Sätze"
  },
  {
    "de": "Davon kann keine Rede sein.",
    "lv": "O tem ne more biti niti govora.",
    "level": "Sätze"
  },
  {
    "de": "Glückliche Reise!",
    "lv": "Srečno pot!",
    "level": "Sätze"
  },
  {
    "de": "Mir reißt die Geduld.",
    "lv": "Zmanjkuje mi potrpljenja.",
    "level": "Sätze"
  },
  {
    "de": "Man sagt, dass ...",
    "lv": "Pravijo, da...",
    "level": "Sätze"
  },
  {
    "de": "Schon gut!",
    "lv": "Že dobro!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön!",
    "lv": "Izvolite! • Prosim!",
    "level": "Sätze"
  },
  {
    "de": "Was bin ich schuldig?",
    "lv": "Koliko sem dolžan?",
    "level": "Sätze"
  },
  {
    "de": "Vor dem Gebrauch schütteln!",
    "lv": "Pred uporabo pretresti!",
    "level": "Sätze"
  },
  {
    "de": "Sehen Sie mal!",
    "lv": "Le poglejte!",
    "level": "Sätze"
  },
  {
    "de": "Wie sehr auch ...",
    "lv": "Naj še tako...",
    "level": "Sätze"
  },
  {
    "de": "Seit wann?",
    "lv": "Od kdaj?",
    "level": "Sätze"
  },
  {
    "de": "Was soll ich tun?",
    "lv": "Kaj naj storim?",
    "level": "Sätze"
  },
  {
    "de": "im Sommer",
    "lv": "poleti",
    "level": "Sätze"
  },
  {
    "de": "Nicht nur ..., sondern auch ...",
    "lv": "Ne samo..., ampak tudi...",
    "level": "Sätze"
  },
  {
    "de": "Sonst noch etwas?",
    "lv": "Še kaj?",
    "level": "Sätze"
  },
  {
    "de": "Spaß beiseite!",
    "lv": "Šalo na stran!",
    "level": "Sätze"
  },
  {
    "de": "Wie spät ist es?",
    "lv": "Koliko je ura?",
    "level": "Sätze"
  },
  {
    "de": "Durchfahrt gesperrt!",
    "lv": "Zaprto za promet!",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie deutsch?",
    "lv": "Ali govorite nemško?",
    "level": "Sätze"
  },
  {
    "de": "Statt zu ...",
    "lv": "Namesto da...",
    "level": "Sätze"
  },
  {
    "de": "Wie steht’s?",
    "lv": "Kako gre?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Hut steht ihr gut.",
    "lv": "Ta klobuk ji lepo pristaja.",
    "level": "Sätze"
  },
  {
    "de": "Guten Tag!",
    "lv": "Dober dan!",
    "level": "Sätze"
  },
  {
    "de": "Wo treffen wir uns?",
    "lv": "Kje se bomo srečali?",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie näher!",
    "lv": "Stopite bliže!",
    "level": "Sätze"
  },
  {
    "de": "Ehrlichkeit ist eine Tugend.",
    "lv": "Poštenost je vrlina.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe viel zu tun.",
    "lv": "Imam veliko dela.",
    "level": "Sätze"
  },
  {
    "de": "Nicht übel!",
    "lv": "Ni slabo!",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt über mir.",
    "lv": "Stanuje nad mano.",
    "level": "Sätze"
  },
  {
    "de": "Er ist davon überzeugt.",
    "lv": "O tem je prepričan.",
    "level": "Sätze"
  },
  {
    "de": "So ist es üblich.",
    "lv": "Tako je navada.",
    "level": "Sätze"
  },
  {
    "de": "Deine Uhr geht nach.",
    "lv": "Tvoja ura zaostaja.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel Uhr ist es?",
    "lv": "Koliko je ura?",
    "level": "Sätze"
  },
  {
    "de": "Um acht Uhr früh.",
    "lv": "Ob osmih zjutraj.",
    "level": "Sätze"
  },
  {
    "de": "umso mehr",
    "lv": "tem bolj",
    "level": "Sätze"
  },
  {
    "de": "Rechts um!",
    "lv": "Na desno!",
    "level": "Sätze"
  },
  {
    "de": "Und ob!",
    "lv": "Še kako!",
    "level": "Sätze"
  },
  {
    "de": "und zwar",
    "lv": "in sicer",
    "level": "Sätze"
  },
  {
    "de": "Auf Unkosten von ...",
    "lv": "Na stroške... • Na račun...",
    "level": "Sätze"
  },
  {
    "de": "Er saß unter den Zuschauern.",
    "lv": "Sedel je med gledalci.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ursache!",
    "lv": "Ni za kaj!",
    "level": "Sätze"
  },
  {
    "de": "Es geschah, wie verabredet.",
    "lv": "Zgodilo se je, kot je bilo dogovorjeno.",
    "level": "Sätze"
  },
  {
    "de": "Rauchen verboten!",
    "lv": "Kajenje prepovedano!",
    "level": "Sätze"
  },
  {
    "de": "Falsch verbunden!",
    "lv": "Napačna številka!",
    "level": "Sätze"
  },
  {
    "de": "Eintritt verboten!",
    "lv": "Vstop prepovedan!",
    "level": "Sätze"
  },
  {
    "de": "Verstehen Sie mich?",
    "lv": "Ali me razumete?",
    "level": "Sätze"
  },
  {
    "de": "Er versteht nichts davon.",
    "lv": "Na to se nič ne spozna.",
    "level": "Sätze"
  },
  {
    "de": "Seine Ansicht vertreten.",
    "lv": "Zagovarjati svoje stališče.",
    "level": "Sätze"
  },
  {
    "de": "Streit verursachen.",
    "lv": "Povzročiti prepir.",
    "level": "Sätze"
  },
  {
    "de": "Viel besser.",
    "lv": "Veliko bolje.",
    "level": "Sätze"
  },
  {
    "de": "Zu viel.",
    "lv": "Preveč.",
    "level": "Sätze"
  },
  {
    "de": "Vom Hörensagen.",
    "lv": "Po pripovedovanju.",
    "level": "Sätze"
  },
  {
    "de": "Von Zeit zu Zeit.",
    "lv": "Od časa do časa.",
    "level": "Sätze"
  },
  {
    "de": "Von Beruf.",
    "lv": "Po poklicu.",
    "level": "Sätze"
  },
  {
    "de": "Er ist Berliner von Geburt.",
    "lv": "Po rodu je Berlinčan.",
    "level": "Sätze"
  },
  {
    "de": "Er steht vor dem Fenster.",
    "lv": "Stoji pred oknom.",
    "level": "Sätze"
  },
  {
    "de": "Vor Sonnenaufgang.",
    "lv": "Pred sončnim vzhodom.",
    "level": "Sätze"
  },
  {
    "de": "Vor vierzehn Tagen.",
    "lv": "Pred dvema tednoma.",
    "level": "Sätze"
  },
  {
    "de": "Vor Freude.",
    "lv": "Od veselja.",
    "level": "Sätze"
  },
  {
    "de": "Vor allem.",
    "lv": "Predvsem.",
    "level": "Sätze"
  },
  {
    "de": "Im Voraus.",
    "lv": "Vnaprej.",
    "level": "Sätze"
  },
  {
    "de": "Unter der Voraussetzung, dass ...",
    "lv": "Pod pogojem, da...",
    "level": "Sätze"
  },
  {
    "de": "Unter dem Vorbehalt.",
    "lv": "S tem pridržkom.",
    "level": "Sätze"
  },
  {
    "de": "Vorhanden sein.",
    "lv": "Obstajati. • Biti na voljo.",
    "level": "Sätze"
  },
  {
    "de": "In der vorigen Woche.",
    "lv": "Prejšnji teden.",
    "level": "Sätze"
  },
  {
    "de": "Vorkehrungen treffen.",
    "lv": "Sprejeti previdnostne ukrepe.",
    "level": "Sätze"
  },
  {
    "de": "Sie kommt mir bekannt vor.",
    "lv": "Zdi se mi znana.",
    "level": "Sätze"
  },
  {
    "de": "Er hat eine Vorliebe für Literatur.",
    "lv": "Posebno rad ima književnost.",
    "level": "Sätze"
  },
  {
    "de": "Heute Vormittag.",
    "lv": "Danes dopoldne.",
    "level": "Sätze"
  },
  {
    "de": "Von vorn.",
    "lv": "Od spredaj. • Od začetka.",
    "level": "Sätze"
  },
  {
    "de": "Nach vorn.",
    "lv": "Naprej.",
    "level": "Sätze"
  },
  {
    "de": "Von vornherein.",
    "lv": "Od vsega začetka.",
    "level": "Sätze"
  },
  {
    "de": "Im Vorteil sein.",
    "lv": "Biti v prednosti.",
    "level": "Sätze"
  },
  {
    "de": "Wach sein.",
    "lv": "Biti buden.",
    "level": "Sätze"
  },
  {
    "de": "Wach werden.",
    "lv": "Zbuditi se.",
    "level": "Sätze"
  },
  {
    "de": "Auf Wache sein.",
    "lv": "Biti na straži.",
    "level": "Sätze"
  },
  {
    "de": "Während eines Jahres.",
    "lv": "V enem letu.",
    "level": "Sätze"
  },
  {
    "de": "Während des Krieges.",
    "lv": "Med vojno.",
    "level": "Sätze"
  },
  {
    "de": "Gegen eine Wand reden.",
    "lv": "Govoriti gluhim ušesom.",
    "level": "Sätze"
  },
  {
    "de": "Hier haben die Wände Ohren.",
    "lv": "Tukaj imajo tudi stene ušesa.",
    "level": "Sätze"
  },
  {
    "de": "Bis wann?",
    "lv": "Do kdaj?",
    "level": "Sätze"
  },
  {
    "de": "Es ist warm.",
    "lv": "Toplo je.",
    "level": "Sätze"
  },
  {
    "de": "Auf eine Nachricht warten.",
    "lv": "Čakati na sporočilo.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie?",
    "lv": "Kaj želite?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein ...?",
    "lv": "Kakšen...?",
    "level": "Sätze"
  },
  {
    "de": "Auf halbem Wege.",
    "lv": "Na pol poti.",
    "level": "Sätze"
  },
  {
    "de": "Auf diesem Wege.",
    "lv": "Po tej poti. • Na ta način.",
    "level": "Sätze"
  },
  {
    "de": "Auf friedlichem Wege.",
    "lv": "Po mirni poti.",
    "level": "Sätze"
  },
  {
    "de": "Unserer Freundschaft wegen.",
    "lv": "Zaradi našega prijateljstva.",
    "level": "Sätze"
  },
  {
    "de": "Von Rechts wegen.",
    "lv": "Po zakonu. • Po pravici.",
    "level": "Sätze"
  },
  {
    "de": "Weh tun.",
    "lv": "Boleti.",
    "level": "Sätze"
  },
  {
    "de": "Zu Weihnachten.",
    "lv": "Za božič.",
    "level": "Sätze"
  },
  {
    "de": "Auf welche Weise?",
    "lv": "Na kakšen način?",
    "level": "Sätze"
  },
  {
    "de": "Art und Weise.",
    "lv": "Način.",
    "level": "Sätze"
  },
  {
    "de": "Ohne weiteres.",
    "lv": "Brez oklevanja. • Brez težav.",
    "level": "Sätze"
  },
  {
    "de": "Bis auf weiteres.",
    "lv": "Do nadaljnjega.",
    "level": "Sätze"
  },
  {
    "de": "Und so weiter.",
    "lv": "In tako naprej.",
    "level": "Sätze"
  },
  {
    "de": "Weiter nichts.",
    "lv": "Nič več.",
    "level": "Sätze"
  },
  {
    "de": "An welchem Tag?",
    "lv": "Na kateri dan?",
    "level": "Sätze"
  },
  {
    "de": "Alle Welt.",
    "lv": "Ves svet. • Vsi.",
    "level": "Sätze"
  },
  {
    "de": "In wenigen Tagen.",
    "lv": "Čez nekaj dni.",
    "level": "Sätze"
  },
  {
    "de": "Zu wenig.",
    "lv": "Premalo.",
    "level": "Sätze"
  },
  {
    "de": "Wenn auch.",
    "lv": "Čeprav.",
    "level": "Sätze"
  },
  {
    "de": "Wer da?",
    "lv": "Kdo je tam?",
    "level": "Sätze"
  },
  {
    "de": "Gesammelte Werke von Schiller.",
    "lv": "Schillerjeva zbrana dela.",
    "level": "Sätze"
  },
  {
    "de": "Ausgewählte Werke.",
    "lv": "Izbrana dela.",
    "level": "Sätze"
  },
  {
    "de": "Er ist wert, dass ...",
    "lv": "Zasluži si, da...",
    "level": "Sätze"
  },
  {
    "de": "Es ist zwei Euro wert.",
    "lv": "Vredno je dva evra.",
    "level": "Sätze"
  },
  {
    "de": "Nach Westen.",
    "lv": "Na zahod.",
    "level": "Sätze"
  },
  {
    "de": "Von Westen.",
    "lv": "Z zahoda.",
    "level": "Sätze"
  },
  {
    "de": "In Wettbewerb treten.",
    "lv": "Vključiti se v tekmovanje.",
    "level": "Sätze"
  },
  {
    "de": "Um die Wette laufen.",
    "lv": "Tekmovati v teku.",
    "level": "Sätze"
  },
  {
    "de": "Was gilt die Wette?",
    "lv": "Za kaj stavimo?",
    "level": "Sätze"
  },
  {
    "de": "Wie wird das Wetter?",
    "lv": "Kakšno bo vreme?",
    "level": "Sätze"
  },
  {
    "de": "Wettkampf im Turnen.",
    "lv": "Tekmovanje v gimnastiki.",
    "level": "Sätze"
  },
  {
    "de": "Wider meinen Willen.",
    "lv": "Proti moji volji.",
    "level": "Sätze"
  },
  {
    "de": "Widerspruch erheben.",
    "lv": "Protestirati. • Vložiti ugovor.",
    "level": "Sätze"
  },
  {
    "de": "Wie alt ist er?",
    "lv": "Koliko je star?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange?",
    "lv": "Kako dolgo?",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiederhören!",
    "lv": "Na slišanje!",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiedersehen!",
    "lv": "Na svidenje!",
    "level": "Sätze"
  },
  {
    "de": "Wilde Tiere.",
    "lv": "Divje živali.",
    "level": "Sätze"
  },
  {
    "de": "Herzlich willkommen!",
    "lv": "Prisrčno dobrodošli!",
    "level": "Sätze"
  },
  {
    "de": "Du musst ziehen.",
    "lv": "Na potezi si.",
    "level": "Sätze"
  },
  {
    "de": "Es zieht.",
    "lv": "Vleče.",
    "level": "Sätze"
  },
  {
    "de": "Ziemlich kalt.",
    "lv": "Precej mrzlo.",
    "level": "Sätze"
  },
  {
    "de": "Zipfel einer Wurst.",
    "lv": "Konček klobase.",
    "level": "Sätze"
  },
  {
    "de": "Zu ihm gehen.",
    "lv": "Iti k njemu.",
    "level": "Sätze"
  },
  {
    "de": "Zur Schule gehen.",
    "lv": "Hoditi v šolo.",
    "level": "Sätze"
  },
  {
    "de": "Zu Hause bleiben.",
    "lv": "Ostati doma.",
    "level": "Sätze"
  },
  {
    "de": "Von Tag zu Tag.",
    "lv": "Iz dneva v dan.",
    "level": "Sätze"
  },
  {
    "de": "Zum Glück.",
    "lv": "Na srečo.",
    "level": "Sätze"
  },
  {
    "de": "Wasser zum Trinken.",
    "lv": "Voda za pitje.",
    "level": "Sätze"
  },
  {
    "de": "Zu Fuß.",
    "lv": "Peš.",
    "level": "Sätze"
  },
  {
    "de": "Zu Pferde.",
    "lv": "Na konju.",
    "level": "Sätze"
  },
  {
    "de": "Zu Rad.",
    "lv": "S kolesom.",
    "level": "Sätze"
  },
  {
    "de": "Es hörte auf zu regnen.",
    "lv": "Nehalo je deževati.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe noch viel zu tun.",
    "lv": "Imam še veliko dela.",
    "level": "Sätze"
  },
  {
    "de": "Zu früh.",
    "lv": "Prezgodaj.",
    "level": "Sätze"
  },
  {
    "de": "Zu groß.",
    "lv": "Prevelik.",
    "level": "Sätze"
  },
  {
    "de": "Mit den Achseln zucken.",
    "lv": "Skomigniti z rameni.",
    "level": "Sätze"
  },
  {
    "de": "In einem Zug trinken.",
    "lv": "Izpiti na dušek.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde gehen.",
    "lv": "Propasti.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde legen.",
    "lv": "Postaviti za osnovo. • Vzeti za podlago.",
    "level": "Sätze"
  },
  {
    "de": "Zum ersten Mal.",
    "lv": "Prvič.",
    "level": "Sätze"
  },
  {
    "de": "Machen Sie bitte die Tür zu!",
    "lv": "Zaprite, prosim, vrata!",
    "level": "Sätze"
  },
  {
    "de": "Er hat zugenommen.",
    "lv": "Zredil se je.",
    "level": "Sätze"
  },
  {
    "de": "Die Tage nehmen zu.",
    "lv": "Dnevi se daljšajo.",
    "level": "Sätze"
  },
  {
    "de": "Zusammenhängen mit etwas.",
    "lv": "Biti povezan s čim.",
    "level": "Sätze"
  },
  {
    "de": "Die Tür ist zu.",
    "lv": "Vrata so zaprta.",
    "level": "Sätze"
  },
  {
    "de": "Das hätte ich ihm nicht zugetraut.",
    "lv": "Tega od njega ne bi pričakoval.",
    "level": "Sätze"
  },
  {
    "de": "Freier Zutritt.",
    "lv": "Prost vstop.",
    "level": "Sätze"
  },
  {
    "de": "Zutritt verboten!",
    "lv": "Vstop prepovedan!",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu viel!",
    "lv": "To je preveč!",
    "level": "Sätze"
  },
  {
    "de": "Zuwider werden.",
    "lv": "Postati zoprn. • Priskutiti se.",
    "level": "Sätze"
  },
  {
    "de": "Und zwar.",
    "lv": "In sicer.",
    "level": "Sätze"
  },
  {
    "de": "Es steht außer Zweifel.",
    "lv": "O tem ni dvoma.",
    "level": "Sätze"
  },
  {
    "de": "Ohne Zweifel.",
    "lv": "Brez dvoma.",
    "level": "Sätze"
  },
  {
    "de": "Zum Zweiten.",
    "lv": "Drugič.",
    "level": "Sätze"
  },
  {
    "de": "Frohes neues Jahr!",
    "lv": "Srečno novo leto!",
    "level": "Sätze"
  },
  {
    "de": "Herzlichen Glückwunsch zum Geburtstag!",
    "lv": "Vse najboljše za rojstni dan!",
    "level": "Sätze"
  },
  {
    "de": "Gute Reise!",
    "lv": "Srečno pot!",
    "level": "Sätze"
  },
  {
    "de": "Es freut mich, Sie kennenzulernen.",
    "lv": "Veseli me, da sem vas spoznal.",
    "level": "Sätze"
  },
  {
    "de": "Wären Sie bitte so nett?",
    "lv": "Bi bili, prosim, tako prijazni?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin Ihnen sehr dankbar.",
    "lv": "Zelo sem vam hvaležen.",
    "level": "Sätze"
  },
  {
    "de": "Setzt euch bitte hin!",
    "lv": "Sedite, prosim!",
    "level": "Sätze"
  },
  {
    "de": "Ben, komm bitte an die Tafel!",
    "lv": "Ben, pridi, prosim, k tabli!",
    "level": "Sätze"
  },
  {
    "de": "Schlagt bitte die Lehrbücher auf!",
    "lv": "Odprite, prosim, učbenike!",
    "level": "Sätze"
  },
  {
    "de": "Geht bitte in die Sporthalle!",
    "lv": "Pojdite, prosim, v telovadnico!",
    "level": "Sätze"
  },
  {
    "de": "Schläfst du noch?",
    "lv": "Še spiš?",
    "level": "Sätze"
  },
  {
    "de": "Schlafen Sie noch?",
    "lv": "Še spite?",
    "level": "Sätze"
  },
  {
    "de": "Er ist fest eingeschlafen.",
    "lv": "Trdno je zaspal.",
    "level": "Sätze"
  },
  {
    "de": "Wecke ihn bitte auf, es ist schon spät!",
    "lv": "Zbudi ga, prosim, že je pozno!",
    "level": "Sätze"
  },
  {
    "de": "Es tut mir sehr leid!",
    "lv": "Zelo mi je žal!",
    "level": "Sätze"
  },
  {
    "de": "Vielen Dank!",
    "lv": "Najlepša hvala!",
    "level": "Sätze"
  },
  {
    "de": "Finn, fang bitte an!",
    "lv": "Finn, začni, prosim!",
    "level": "Sätze"
  },
  {
    "de": "Lest bitte mit!",
    "lv": "Berite, prosim, z nami!",
    "level": "Sätze"
  },
  {
    "de": "Emma, schau bitte nicht aus dem Fenster!",
    "lv": "Emma, prosim, ne glej skozi okno!",
    "level": "Sätze"
  },
  {
    "de": "Jonas, bring bitte die Hefte!",
    "lv": "Jonas, prinesi, prosim, zvezke!",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte zurück an deinen Platz!",
    "lv": "Vrni se, prosim, na svoje mesto!",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb acht.",
    "lv": "Ura je pol osmih.",
    "level": "Sätze"
  },
  {
    "de": "Wann wachst du gewöhnlich auf?",
    "lv": "Kdaj se običajno zbudiš?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe gleich auf.",
    "lv": "Takoj vstanem.",
    "level": "Sätze"
  },
  {
    "de": "Steh auf, Hanna, es klingelt!",
    "lv": "Vstani, Hanna, zvoni!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich noch fünf Minuten schlafen!",
    "lv": "Pusti me spati še pet minut!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss nicht, das Zimmer zu lüften!",
    "lv": "Ne pozabi prezračiti sobe!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist das Handtuch?",
    "lv": "Kje je brisača?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mir die Zähne putzen.",
    "lv": "Rad bi si umil zobe.",
    "level": "Sätze"
  },
  {
    "de": "Womit putzt du dir die Zähne?",
    "lv": "S čim si umivaš zobe?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mich anziehen.",
    "lv": "Rad bi se oblekel.",
    "level": "Sätze"
  },
  {
    "de": "Zieh dich bitte schnell an!",
    "lv": "Hitro se obleci, prosim!",
    "level": "Sätze"
  },
  {
    "de": "Kleide dich wärmer an, draußen ist es kühl.",
    "lv": "Obleci se topleje, zunaj je hladno.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, wie geht es dir?",
    "lv": "Dobro jutro, kako si?",
    "level": "Sätze"
  },
  {
    "de": "Mir geht es gut, danke.",
    "lv": "Dobro sem, hvala.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es Neues?",
    "lv": "Kaj je novega?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein Chaos hier!",
    "lv": "Kakšen nered tukaj!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich beim Aufräumen helfen?",
    "lv": "Ali ti smem pomagati pri pospravljanju?",
    "level": "Sätze"
  },
  {
    "de": "Was trinkst du morgens, Kaffee oder Tee?",
    "lv": "Kaj piješ zjutraj, kavo ali čaj?",
    "level": "Sätze"
  },
  {
    "de": "Gewöhnlich trinke ich morgens eine Tasse Kaffee.",
    "lv": "Običajno zjutraj spijem skodelico kave.",
    "level": "Sätze"
  },
  {
    "de": "Am liebsten trinke ich schwarzen Kaffee.",
    "lv": "Najraje pijem črno kavo.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, hast du gut geschlafen?",
    "lv": "Dobro jutro, ali si dobro spal?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin noch sehr müde.",
    "lv": "Še vedno sem zelo utrujen.",
    "level": "Sätze"
  },
  {
    "de": "Willst du Kaffee oder Milch?",
    "lv": "Hočeš kavo ali mleko?",
    "level": "Sätze"
  },
  {
    "de": "Gib mir bitte ein Brötchen mit Käse.",
    "lv": "Daj mi, prosim, žemljico s sirom.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss jetzt los!",
    "lv": "Zdaj moram iti!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss dein Frühstück nicht!",
    "lv": "Ne pozabi zajtrka!",
    "level": "Sätze"
  },
  {
    "de": "Klara, deck bitte den Tisch!",
    "lv": "Klara, prosim, pogrni mizo!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss die Servietten nicht!",
    "lv": "Ne pozabi prtičkov!",
    "level": "Sätze"
  },
  {
    "de": "Wann esst ihr zu Mittag?",
    "lv": "Kdaj imate kosilo?",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit zu essen.",
    "lv": "Čas je, da jemo.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es heute zu Mittag?",
    "lv": "Kaj je danes za kosilo?",
    "level": "Sätze"
  },
  {
    "de": "Wie schmeckt dir die Suppe?",
    "lv": "Kako ti tekne juha?",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt ist sie etwas zu salzig.",
    "lv": "Iskreno rečeno, malo je preslana.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dir ein Stück Brot geben?",
    "lv": "Ali ti smem dati kos kruha?",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich habe schon.",
    "lv": "Hvala, že imam.",
    "level": "Sätze"
  },
  {
    "de": "Das Fleisch schmeckt ausgezeichnet.",
    "lv": "Meso je odlično.",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich bin schon satt.",
    "lv": "Hvala, že sem sit.",
    "level": "Sätze"
  },
  {
    "de": "Heute haben wir Besuch.",
    "lv": "Danes imamo obisk.",
    "level": "Sätze"
  },
  {
    "de": "Bist du heute Abend frei?",
    "lv": "Ali si danes zvečer prost?",
    "level": "Sätze"
  },
  {
    "de": "Komm doch heute zum Mittagessen vorbei!",
    "lv": "Kar pridi danes na kosilo!",
    "level": "Sätze"
  },
  {
    "de": "Setzen wir uns an den Tisch.",
    "lv": "Sedimo za mizo.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, bedien dich!",
    "lv": "Izvoli, postrezi si!",
    "level": "Sätze"
  },
  {
    "de": "Stört dich das Rauchen?",
    "lv": "Ali te moti kajenje?",
    "level": "Sätze"
  },
  {
    "de": "Danke für die nette Aufnahme!",
    "lv": "Hvala za prijazen sprejem!",
    "level": "Sätze"
  },
  {
    "de": "Wann gehst du ins Bett?",
    "lv": "Kdaj greš spat?",
    "level": "Sätze"
  },
  {
    "de": "Wenn ich von der Arbeit komme, bin ich immer müde.",
    "lv": "Ko pridem iz službe, sem vedno utrujen.",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, ins Bett zu gehen.",
    "lv": "Čas je, da gremo spat.",
    "level": "Sätze"
  },
  {
    "de": "Es ist schönes Wetter.",
    "lv": "Lepo vreme je.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mit mir spazieren gehen?",
    "lv": "Hočeš iti z mano na sprehod?",
    "level": "Sätze"
  },
  {
    "de": "Sieh mal, es wird gleich regnen.",
    "lv": "Poglej, vsak hip bo začelo deževati.",
    "level": "Sätze"
  },
  {
    "de": "Nimm den Regenschirm mit!",
    "lv": "Vzemi dežnik s seboj!",
    "level": "Sätze"
  },
  {
    "de": "Es regnet.",
    "lv": "Dežuje.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin schon ganz nass.",
    "lv": "Ves sem že moker.",
    "level": "Sätze"
  },
  {
    "de": "Glaubst du, dass es den ganzen Tag regnen wird?",
    "lv": "Ali misliš, da bo deževalo ves dan?",
    "level": "Sätze"
  },
  {
    "de": "Es hört auf zu regnen.",
    "lv": "Neha deževati.",
    "level": "Sätze"
  },
  {
    "de": "Die Sonne scheint wieder.",
    "lv": "Sonce spet sije.",
    "level": "Sätze"
  },
  {
    "de": "Es ist sehr warm.",
    "lv": "Zelo toplo je.",
    "level": "Sätze"
  },
  {
    "de": "Es sieht nach Regen aus.",
    "lv": "Videti je, da bo deževalo.",
    "level": "Sätze"
  },
  {
    "de": "Wir bekommen gleich ein Gewitter.",
    "lv": "Vsak hip bo nevihta.",
    "level": "Sätze"
  },
  {
    "de": "Das Gewitter zieht vorüber.",
    "lv": "Nevihta mineva.",
    "level": "Sätze"
  },
  {
    "de": "Die Wolken verziehen sich.",
    "lv": "Oblaki se razhajajo.",
    "level": "Sätze"
  },
  {
    "de": "Siehst du den Regenbogen?",
    "lv": "Ali vidiš mavrico?",
    "level": "Sätze"
  },
  {
    "de": "Der Winter ist da, es hat geschneit.",
    "lv": "Zima je tu, zapadel je sneg.",
    "level": "Sätze"
  },
  {
    "de": "Es schneit.",
    "lv": "Sneži.",
    "level": "Sätze"
  },
  {
    "de": "Wie schön ist es im Wald im Winter!",
    "lv": "Kako lepo je pozimi v gozdu!",
    "level": "Sätze"
  },
  {
    "de": "Mir ist kalt, ich friere.",
    "lv": "Mraz mi je, zebe me.",
    "level": "Sätze"
  },
  {
    "de": "Draußen ist Glatteis, pass auf!",
    "lv": "Zunaj je poledica, pazi!",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir auf die Eisbahn gehen?",
    "lv": "Gremo na drsališče?",
    "level": "Sätze"
  },
  {
    "de": "Zieh die Jacke an, du kannst dich erkälten.",
    "lv": "Obleci jakno, lahko se prehladiš.",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb sieben.",
    "lv": "Ura je pol sedmih.",
    "level": "Sätze"
  },
  {
    "de": "Meine Uhr geht fünf Minuten vor.",
    "lv": "Moja ura prehiteva za pet minut.",
    "level": "Sätze"
  },
  {
    "de": "Weck mich morgen früh um sieben Uhr!",
    "lv": "Zbudi me jutri zjutraj ob sedmih!",
    "level": "Sätze"
  },
  {
    "de": "Was ist heute für ein Datum?",
    "lv": "Katerega smo danes?",
    "level": "Sätze"
  },
  {
    "de": "Heute ist der elfte Juli.",
    "lv": "Danes je enajsti julij.",
    "level": "Sätze"
  },
  {
    "de": "Was machst du gewöhnlich am Abend?",
    "lv": "Kaj običajno počneš zvečer?",
    "level": "Sätze"
  },
  {
    "de": "Es ist schon lange her, dass wir uns gesehen haben.",
    "lv": "Že dolgo se nismo videli.",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es dir?",
    "lv": "Kako se imaš?",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, ich möchte etwas mit dir besprechen.",
    "lv": "Oprosti, rad bi se s tabo o nečem pogovoril.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir spazieren!",
    "lv": "Gremo na sprehod!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Lust, mit mir in den Park zu gehen?",
    "lv": "Ali imaš voljo iti z mano v park?",
    "level": "Sätze"
  },
  {
    "de": "Ich komme, um dich zum Spaziergang abzuholen.",
    "lv": "Prihajam, da te odpeljem na sprehod.",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte etwas langsamer, ich kann dir nicht folgen!",
    "lv": "Hodi, prosim, malo počasneje, ne morem ti slediti!",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zum ersten Mal in dieser Gegend.",
    "lv": "Prvič sem v teh krajih.",
    "level": "Sätze"
  },
  {
    "de": "Ruhen wir uns ein wenig aus.",
    "lv": "Malo se odpočijmo.",
    "level": "Sätze"
  },
  {
    "de": "Jetzt können wir zurückgehen.",
    "lv": "Zdaj lahko gremo nazaj.",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt bin ich ziemlich müde.",
    "lv": "Iskreno rečeno, precej sem utrujen.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, wo ist die nächste U-Bahn-Station?",
    "lv": "Oprosti, kje je najbližja postaja podzemne železnice?",
    "level": "Sätze"
  },
  {
    "de": "Welcher ist der kürzeste Weg?",
    "lv": "Katera je najkrajša pot?",
    "level": "Sätze"
  },
  {
    "de": "Geh hier die zweite Straße links und dann immer geradeaus.",
    "lv": "Tukaj zavij v drugo ulico na levo in potem pojdi ves čas naravnost.",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich am schnellsten zum Bahnhof?",
    "lv": "Kako najhitreje pridem do železniške postaje?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe vor, morgen zu verreisen.",
    "lv": "Jutri nameravam odpotovati.",
    "level": "Sätze"
  },
  {
    "de": "Wohin willst du fahren?",
    "lv": "Kam hočeš potovati?",
    "level": "Sätze"
  },
  {
    "de": "Reist du geschäftlich oder privat?",
    "lv": "Potuješ službeno ali zasebno?",
    "level": "Sätze"
  },
  {
    "de": "Finn fährt bis Berlin mit, dann geht er ans Meer.",
    "lv": "Finn se pelje z nami do Berlina, potem pa gre na morje.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt das Schiff ab?",
    "lv": "Kdaj odpluje ladja?",
    "level": "Sätze"
  },
  {
    "de": "In einer halben Stunde.",
    "lv": "Čez pol ure.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich noch eine Kabine bekommen?",
    "lv": "Ali lahko še dobim kabino?",
    "level": "Sätze"
  },
  {
    "de": "Vergiss deinen Pass nicht!",
    "lv": "Ne pozabi potnega lista!",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, den Koffer zu packen.",
    "lv": "Čas je, da zložimo stvari v kovček.",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt um halb sieben ab.",
    "lv": "Vlak odpelje ob pol sedmih.",
    "level": "Sätze"
  },
  {
    "de": "Hol mir bitte ein Taxi, ich verpasse sonst den Zug!",
    "lv": "Pokliči mi, prosim, taksi, sicer bom zamudil vlak!",
    "level": "Sätze"
  },
  {
    "de": "Fahr bitte zum Bahnhof!",
    "lv": "Pelji, prosim, na železniško postajo!",
    "level": "Sätze"
  },
  {
    "de": "Ich muss mich beeilen.",
    "lv": "Moram pohiteti.",
    "level": "Sätze"
  },
  {
    "de": "Ist der Schalter schon offen?",
    "lv": "Je blagajna že odprta?",
    "level": "Sätze"
  },
  {
    "de": "Eine Fahrkarte nach Köln, bitte.",
    "lv": "Eno vozovnico do Kölna, prosim.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt der Zug ab?",
    "lv": "Kdaj odpelje vlak?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt gleich ab.",
    "lv": "Vlak bo takoj odpeljal.",
    "level": "Sätze"
  },
  {
    "de": "Muss ich in Koblenz umsteigen?",
    "lv": "Ali moram prestopiti v Koblenzu?",
    "level": "Sätze"
  },
  {
    "de": "Ja, dort musst du umsteigen.",
    "lv": "Da, tam moraš prestopiti.",
    "level": "Sätze"
  },
  {
    "de": "Ist dieser Platz frei?",
    "lv": "Je ta sedež prost?",
    "level": "Sätze"
  },
  {
    "de": "Nein, hier sitzt niemand.",
    "lv": "Ne, tukaj ne sedi nihče.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der Bahnsteigkartenautomat?",
    "lv": "Kje je avtomat za peronske karte?",
    "level": "Sätze"
  },
  {
    "de": "Stell mein Handgepäck ins Gepäcknetz.",
    "lv": "Postavi mojo ročno prtljago na polico za prtljago.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das Fenster aufmachen?",
    "lv": "Ali lahko odprem okno?",
    "level": "Sätze"
  },
  {
    "de": "Es zieht, schließ bitte das Fenster!",
    "lv": "Vleče, zapri, prosim, okno!",
    "level": "Sätze"
  },
  {
    "de": "Welche ist die nächste Station?",
    "lv": "Katera je naslednja postaja?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange hält der Zug?",
    "lv": "Koliko časa stoji vlak?",
    "level": "Sätze"
  },
  {
    "de": "Wo muss ich umsteigen?",
    "lv": "Kje moram prestopiti?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug hat Verspätung.",
    "lv": "Vlak ima zamudo.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Wagen ist für Nichtraucher.",
    "lv": "Ta vagon je za nekadilce.",
    "level": "Sätze"
  },
  {
    "de": "Wir fahren jetzt über die Grenze.",
    "lv": "Zdaj prečkamo mejo.",
    "level": "Sätze"
  },
  {
    "de": "Hast du etwas zu verzollen?",
    "lv": "Imaš kaj za ocarinjenje?",
    "level": "Sätze"
  },
  {
    "de": "Wir sind in Berlin angekommen.",
    "lv": "Prispeli smo v Berlin.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir ein gutes Hotel empfehlen?",
    "lv": "Mi lahko priporočiš dober hotel?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie freie Zimmer?",
    "lv": "Ali imate proste sobe?",
    "level": "Sätze"
  },
  {
    "de": "Ein Zimmer mit zwei Betten, bitte.",
    "lv": "Sobo z dvema posteljama, prosim.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Zimmer pro Nacht?",
    "lv": "Koliko stane soba na noč?",
    "level": "Sätze"
  },
  {
    "de": "Morgen reise ich ab. Weck mich um sieben Uhr!",
    "lv": "Jutri odpotujem. Zbudi me ob sedmih!",
    "level": "Sätze"
  },
  {
    "de": "Die Rechnung, bitte!",
    "lv": "Račun, prosim!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Stadtbibliothek?",
    "lv": "Kje je mestna knjižnica?",
    "level": "Sätze"
  },
  {
    "de": "Wann hat das Museum geöffnet?",
    "lv": "Kdaj je muzej odprt?",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir ins Museum gehen?",
    "lv": "Bi šli v muzej?",
    "level": "Sätze"
  },
  {
    "de": "Fahren wir mit dem Bus oder der U-Bahn?",
    "lv": "Se peljemo z avtobusom ali s podzemno železnico?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die nächste Bushaltestelle?",
    "lv": "Kje je najbližje avtobusno postajališče?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe großen Hunger.",
    "lv": "Zelo sem lačen.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir zusammen essen?",
    "lv": "Gremo skupaj jest?",
    "level": "Sätze"
  },
  {
    "de": "Kellner, die Speisekarte, bitte!",
    "lv": "Natakar, jedilni list, prosim!",
    "level": "Sätze"
  },
  {
    "de": "Ist der Fisch frisch?",
    "lv": "Ali je riba sveža?",
    "level": "Sätze"
  },
  {
    "de": "Das schmeckt ausgezeichnet!",
    "lv": "To je odlično!",
    "level": "Sätze"
  },
  {
    "de": "Kellner, zahlen bitte!",
    "lv": "Natakar, plačali bi, prosim!",
    "level": "Sätze"
  },
  {
    "de": "Ich gehe ins Café einen Kaffee trinken.",
    "lv": "Grem v kavarno pit kavo.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mitkommen?",
    "lv": "Greš z mano?",
    "level": "Sätze"
  },
  {
    "de": "Eine Tasse Kaffee mit Milch, bitte!",
    "lv": "Skodelico kave z mlekom, prosim!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneller, ich habe es eilig!",
    "lv": "Hitreje, prosim, mudi se mi!",
    "level": "Sätze"
  },
  {
    "de": "Lass deinen Kaffee nicht kalt werden!",
    "lv": "Ne pusti, da se ti kava ohladi!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie etwas Erfrischendes?",
    "lv": "Imate kaj osvežilnega?",
    "level": "Sätze"
  },
  {
    "de": "Eine Portion Eis, bitte!",
    "lv": "Eno porcijo sladoleda, prosim!",
    "level": "Sätze"
  },
  {
    "de": "Heute Morgen habe ich einen Brief bekommen.",
    "lv": "Danes zjutraj sem dobil pismo.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss ihm gleich schreiben.",
    "lv": "Takoj mu moram pisati.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der nächste Briefkasten?",
    "lv": "Kje je najbližji poštni nabiralnik?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Post?",
    "lv": "Kje je pošta?",
    "level": "Sätze"
  },
  {
    "de": "Erinnere mich morgen daran, zu schreiben!",
    "lv": "Jutri me spomni, da moram pisati!",
    "level": "Sätze"
  },
  {
    "de": "Werfen Sie bitte diesen Brief in den Briefkasten.",
    "lv": "Vrzite, prosim, to pismo v poštni nabiralnik.",
    "level": "Sätze"
  },
  {
    "de": "Hallo, hier spricht Emma.",
    "lv": "Halo, tukaj Emma.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich dich später anrufen?",
    "lv": "Ali te lahko pokličem pozneje?",
    "level": "Sätze"
  },
  {
    "de": "Muss ich lange warten?",
    "lv": "Ali moram dolgo čakati?",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneiden Sie mir die Haare.",
    "lv": "Prosim, postrizite me.",
    "level": "Sätze"
  },
  {
    "de": "Hinten bitte nicht zu kurz.",
    "lv": "Zadaj, prosim, ne prekratko.",
    "level": "Sätze"
  },
  {
    "de": "Wann beginnt die Vorstellung?",
    "lv": "Kdaj se začne predstava?",
    "level": "Sätze"
  },
  {
    "de": "Es fängt um halb acht an.",
    "lv": "Začne se ob pol osmih.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind ausverkauft.",
    "lv": "Vsi sedeži so razprodani.",
    "level": "Sätze"
  },
  {
    "de": "Drei Karten, bitte!",
    "lv": "Tri vstopnice, prosim!",
    "level": "Sätze"
  },
  {
    "de": "Wir lassen die Jacken in der Garderobe.",
    "lv": "Jakne bomo pustili v garderobi.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schnell, der Vorhang geht gleich auf!",
    "lv": "Hitro, prosim, zavesa se bo vsak hip dvignila!",
    "level": "Sätze"
  },
  {
    "de": "Der Vorhang fällt.",
    "lv": "Zavesa pade.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dich zum Tanz bitten?",
    "lv": "Ali te smem povabiti na ples?",
    "level": "Sätze"
  },
  {
    "de": "Wann ist eure Hochzeit?",
    "lv": "Kdaj je vajina poroka?",
    "level": "Sätze"
  },
  {
    "de": "Ich suche eine Wohnung.",
    "lv": "Iščem stanovanje.",
    "level": "Sätze"
  },
  {
    "de": "Ist in diesem Haus eine Wohnung frei?",
    "lv": "Ali je v tej hiši prosto stanovanje?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet die Miete?",
    "lv": "Koliko znaša najemnina?",
    "level": "Sätze"
  },
  {
    "de": "Die Wohnung hat drei Zimmer und eine Küche.",
    "lv": "Stanovanje ima tri sobe in kuhinjo.",
    "level": "Sätze"
  },
  {
    "de": "Heute ziehen wir um.",
    "lv": "Danes se selimo.",
    "level": "Sätze"
  },
  {
    "de": "Mia, pack die Sachen bitte in Kisten!",
    "lv": "Mia, zloži, prosim, stvari v škatle!",
    "level": "Sätze"
  },
  {
    "de": "Hast du alles eingepackt?",
    "lv": "Si vse zapakiral?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe mit meinem Freund in Kontakt.",
    "lv": "S prijateljem sem v stiku.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir ins Theater?",
    "lv": "Gremo v gledališče?",
    "level": "Sätze"
  },
  {
    "de": "Ist alles eingeladen?",
    "lv": "Je vse naloženo?",
    "level": "Sätze"
  },
  {
    "de": "Welch schöne Aussicht!",
    "lv": "Kako lep razgled!",
    "level": "Sätze"
  },
  {
    "de": "Nun können wir alles wieder aufräumen.",
    "lv": "Zdaj lahko spet vse pospravimo.",
    "level": "Sätze"
  },
  {
    "de": "Wie viele Zimmer habt ihr?",
    "lv": "Koliko sob imate?",
    "level": "Sätze"
  },
  {
    "de": "Im Sommer fahre ich ans Meer.",
    "lv": "Poleti grem na morje.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du schwimmen?",
    "lv": "Ali znaš plavati?",
    "level": "Sätze"
  },
  {
    "de": "Schwimm nicht zu weit hinaus!",
    "lv": "Ne plavaj predaleč!",
    "level": "Sätze"
  },
  {
    "de": "Badest du jeden Tag?",
    "lv": "Ali se kopaš vsak dan?",
    "level": "Sätze"
  },
  {
    "de": "Bei schönem Wetter gehe ich angeln.",
    "lv": "Ob lepem vremenu grem lovit ribe.",
    "level": "Sätze"
  },
  {
    "de": "Wie sieht er aus?",
    "lv": "Kako je videti?",
    "level": "Sätze"
  },
  {
    "de": "Er hat sich aber recht verändert.",
    "lv": "Pa se je kar precej spremenil.",
    "level": "Sätze"
  },
  {
    "de": "Wie ist er als Mensch?",
    "lv": "Kakšen je kot človek?",
    "level": "Sätze"
  },
  {
    "de": "Er ist immer nett und freundlich.",
    "lv": "Vedno je prijeten in prijazen.",
    "level": "Sätze"
  },
  {
    "de": "Ich fühle mich nicht wohl.",
    "lv": "Ne počutim se dobro.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe starke Kopfschmerzen.",
    "lv": "Močno me boli glava.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe mich erkältet.",
    "lv": "Prehladil sem se.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Schnupfen.",
    "lv": "Imam nahod.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist schwindlig.",
    "lv": "V glavi se mi vrti.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Arzt gehen.",
    "lv": "Moram k zdravniku.",
    "level": "Sätze"
  },
  {
    "de": "Leg dich ins Bett!",
    "lv": "Lezi v posteljo!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Fieber?",
    "lv": "Ali imaš vročino?",
    "level": "Sätze"
  },
  {
    "de": "Gestern hatte ich erhöhte Temperatur.",
    "lv": "Včeraj sem imel povišano temperaturo.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Zahnschmerzen.",
    "lv": "Zob me boli.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Zahnarzt gehen.",
    "lv": "Moram k zobozdravniku.",
    "level": "Sätze"
  },
  {
    "de": "Weißt du, dass Finn krank ist?",
    "lv": "Ali veš, da je Finn bolan?",
    "level": "Sätze"
  },
  {
    "de": "Laut Arzt wird er bald wieder gesund.",
    "lv": "Po zdravnikovih besedah bo kmalu spet zdrav.",
    "level": "Sätze"
  },
  {
    "de": "Ich will meine Wohnung neu möblieren.",
    "lv": "Stanovanje hočem na novo opremiti.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das auf Raten kaufen?",
    "lv": "Ali lahko to kupim na obroke?",
    "level": "Sätze"
  },
  {
    "de": "Bleib im Bett, bis es dir besser geht!",
    "lv": "Ostani v postelji, dokler ti ne bo bolje!",
    "level": "Sätze"
  },
  {
    "de": "Noah hat in zwei Wochen schwimmen gelernt.",
    "lv": "Noah se je v dveh tednih naučil plavati.",
    "level": "Sätze"
  },
  {
    "de": "Sei mit dem Essen noch vorsichtig.",
    "lv": "Pri hrani bodi še previden.",
    "level": "Sätze"
  },
  {
    "de": "Sprichst du Deutsch?",
    "lv": "Ali govoriš nemško?",
    "level": "Sätze"
  },
  {
    "de": "Ja, ein bisschen.",
    "lv": "Da, malo.",
    "level": "Sätze"
  },
  {
    "de": "Du sprichst ziemlich fließend.",
    "lv": "Govoriš kar tekoče.",
    "level": "Sätze"
  },
  {
    "de": "Wo hast du Deutsch gelernt?",
    "lv": "Kje si se učil nemščine?",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme seit einem Jahr Deutschstunden.",
    "lv": "Že leto dni hodim na ure nemščine.",
    "level": "Sätze"
  },
  {
    "de": "Ich suche immer Gelegenheit, Deutsch zu sprechen.",
    "lv": "Vedno iščem priložnost, da bi govoril nemško.",
    "level": "Sätze"
  },
  {
    "de": "Ist das Buch noch vorrätig?",
    "lv": "Ali je knjiga še na zalogi?",
    "level": "Sätze"
  },
  {
    "de": "Das Buch ist leider ausverkauft.",
    "lv": "Knjiga je žal razprodana.",
    "level": "Sätze"
  },
  {
    "de": "Wann erscheint die neue Auflage?",
    "lv": "Kdaj izide nova izdaja?",
    "level": "Sätze"
  },
  {
    "de": "Womit kann ich Ihnen helfen?",
    "lv": "S čim vam lahko pomagam?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie ganz frische Eier?",
    "lv": "Ali imate čisto sveža jajca?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die?",
    "lv": "Koliko stanejo?",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu teuer.",
    "lv": "To je predrago.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir ein halbes Kilo abwiegen?",
    "lv": "Ali mi lahko odtehtate pol kilograma?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel muss ich zahlen?",
    "lv": "Koliko moram plačati?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet das Kilo?",
    "lv": "Koliko stane kilogram?",
    "level": "Sätze"
  },
  {
    "de": "Wiegen Sie mir bitte zwei Kilo ab.",
    "lv": "Odtehtajte mi, prosim, dva kilograma.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch Karotten?",
    "lv": "Ali imate tudi korenje?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie gutes Rindfleisch?",
    "lv": "Ali imate dobro govedino?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir zwei Kilo Hackfleisch.",
    "lv": "Dajte mi dva kilograma mletega mesa.",
    "level": "Sätze"
  },
  {
    "de": "Ein Laib Brot, bitte, aber nicht zu knusprig.",
    "lv": "Hlebec kruha, prosim, vendar ne preveč hrustljavega.",
    "level": "Sätze"
  },
  {
    "de": "Das Brot ist frisch gebacken.",
    "lv": "Kruh je sveže pečen.",
    "level": "Sätze"
  },
  {
    "de": "Was für Obst haben Sie heute?",
    "lv": "Kakšno sadje imate danes?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die Äpfel?",
    "lv": "Koliko stanejo jabolka?",
    "level": "Sätze"
  },
  {
    "de": "Dann nehme ich zwei Kilo Äpfel.",
    "lv": "Potem bom vzel dva kilograma jabolk.",
    "level": "Sätze"
  },
  {
    "de": "Die Birnen sind sehr teuer.",
    "lv": "Hruške so zelo drage.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir alles nach Hause liefern?",
    "lv": "Ali mi lahko vse dostavite domov?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie Reis?",
    "lv": "Ali imate riž?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir bitte ein Kilo Reis.",
    "lv": "Dajte mi, prosim, kilogram riža.",
    "level": "Sätze"
  },
  {
    "de": "Danke, diesmal nicht.",
    "lv": "Hvala, tokrat ne.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet dieser Teppich?",
    "lv": "Koliko stane ta preproga?",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Möbel in meine Wohnung liefern?",
    "lv": "Ali mi lahko pohištvo dostavite v stanovanje?",
    "level": "Sätze"
  },
  {
    "de": "Bitte an der Kasse zahlen.",
    "lv": "Plačati na blagajni, prosim.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, machen Sie die Rechnung.",
    "lv": "Prosim, izstavite mi račun.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Meter?",
    "lv": "Koliko stane meter?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Stoff gefällt mir.",
    "lv": "To blago mi je všeč.",
    "level": "Sätze"
  },
  {
    "de": "Schneiden Sie mir bitte drei Meter ab.",
    "lv": "Odrežite mi, prosim, tri metre.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch andere Muster?",
    "lv": "Ali imate tudi druge vzorce?",
    "level": "Sätze"
  },
  {
    "de": "Diese Farbe gefällt mir nicht.",
    "lv": "Ta barva mi ni všeč.",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir eine hellere.",
    "lv": "Dajte mi svetlejšo.",
    "level": "Sätze"
  },
  {
    "de": "Was kosten diese Socken?",
    "lv": "Koliko stanejo te nogavice?",
    "level": "Sätze"
  },
  {
    "de": "Welche Handschuhe wünschen Sie?",
    "lv": "Kakšne rokavice želite?",
    "level": "Sätze"
  },
  {
    "de": "Die sind mir etwas zu eng.",
    "lv": "Te so mi malo pretesne.",
    "level": "Sätze"
  },
  {
    "de": "So, nun passen sie gut.",
    "lv": "Tako, zdaj se dobro prilegajo.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir einen guten Schneider empfehlen?",
    "lv": "Ali mi lahko priporočiš dobrega krojača?",
    "level": "Sätze"
  },
  {
    "de": "Ich will einen Anzug bestellen.",
    "lv": "Hočem naročiti obleko.",
    "level": "Sätze"
  },
  {
    "de": "Wann wird er fertig sein?",
    "lv": "Kdaj bo gotova?",
    "level": "Sätze"
  },
  {
    "de": "Der Anzug sitzt gut.",
    "lv": "Obleka se dobro prilega.",
    "level": "Sätze"
  },
  {
    "de": "Die Hose ist zu lang.",
    "lv": "Hlače so predolge.",
    "level": "Sätze"
  },
  {
    "de": "Bitte reinigen und bügeln Sie ihn!",
    "lv": "Prosim, očistite in zlikajte jo!",
    "level": "Sätze"
  },
  {
    "de": "Wann wird das Kleid fertig sein?",
    "lv": "Kdaj bo obleka gotova?",
    "level": "Sätze"
  },
  {
    "de": "Die Schuhe sind zu eng.",
    "lv": "Čevlji so pretesni.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Schuhe heute reparieren?",
    "lv": "Ali lahko čevlje popravite danes?",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich die Schuhe abholen?",
    "lv": "Kdaj lahko prevzamem čevlje?",
    "level": "Sätze"
  },
  {
    "de": "Meine Armbanduhr funktioniert nicht.",
    "lv": "Moja zapestna ura ne deluje.",
    "level": "Sätze"
  },
  {
    "de": "Sie geht fünf Minuten vor.",
    "lv": "Prehiteva pet minut.",
    "level": "Sätze"
  },
  {
    "de": "Bist du kurzsichtig oder weitsichtig?",
    "lv": "Ali si kratkoviden ali daljnoviden?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte eine Brille kaufen.",
    "lv": "Rad bi kupil očala.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie meine Brille reparieren?",
    "lv": "Ali lahko popravite moja očala?",
    "level": "Sätze"
  },
  {
    "de": "Das dauert nur eine Viertelstunde.",
    "lv": "To traja samo četrt ure.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist mir zu hoch.",
    "lv": "Cena je zame previsoka.",
    "level": "Sätze"
  },
  {
    "de": "Ich brauche zwei Fotos für meinen Pass.",
    "lv": "Potrebujem dve fotografiji za potni list.",
    "level": "Sätze"
  },
  {
    "de": "Bitte packen Sie es ein und schicken Sie es mir nach Hause.",
    "lv": "Prosim, zavijte to in mi pošljite domov.",
    "level": "Sätze"
  },
  {
    "de": "Wir haben feste Preise.",
    "lv": "Imamo fiksne cene.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, fotografieren Sie mich.",
    "lv": "Prosim, fotografirajte me.",
    "level": "Sätze"
  },
  {
    "de": "Setzen Sie sich, schauen Sie gerade in die Kamera und bewegen Sie sich nicht!",
    "lv": "Sedite, glejte naravnost v kamero in se ne premikajte!",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich das Probebild sehen?",
    "lv": "Kdaj lahko vidim poskusno fotografijo?",
    "level": "Sätze"
  },
  {
    "de": "Wann sind die Fotos fertig?",
    "lv": "Kdaj bodo fotografije gotove?",
    "level": "Sätze"
  },
  {
    "de": "Die Aufnahme ist gelungen.",
    "lv": "Posnetek je uspel.",
    "level": "Sätze"
  },
  {
    "de": "Die Fotos sind gut geworden.",
    "lv": "Fotografije so dobro uspele.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie das Foto auch vergrößern?",
    "lv": "Ali lahko fotografijo tudi povečate?",
    "level": "Sätze"
  },
  {
    "de": "Sind diese Steine echt?",
    "lv": "Ali so ti kamni pravi?",
    "level": "Sätze"
  },
  {
    "de": "Ist das echtes Gold?",
    "lv": "Ali je to pravo zlato?",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir bitte Trauringe.",
    "lv": "Pokažite mi, prosim, poročne prstane.",
    "level": "Sätze"
  },
  {
    "de": "Der Ring ist mir etwas zu weit.",
    "lv": "Prstan mi je malo preširok.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann ihn enger machen.",
    "lv": "Lahko ga zožim.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Ring passt mir.",
    "lv": "Ta prstan mi je prav.",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir schöne Geschenkideen.",
    "lv": "Pokažite mi lepe ideje za darila.",
    "level": "Sätze"
  },
  {
    "de": "Wie gefallen dir diese Ohrringe?",
    "lv": "Kako so ti všeč ti uhani?",
    "level": "Sätze"
  },
  {
    "de": "Diese Brosche ist wirklich schön.",
    "lv": "Ta broška je res lepa.",
    "level": "Sätze"
  },
  {
    "de": "Der Stein ist ein Saphir.",
    "lv": "Kamen je safir.",
    "level": "Sätze"
  },
  {
    "de": "Das ist kein echter Stein, das ist Glas.",
    "lv": "To ni pravi kamen, to je steklo.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Armband kann ich Ihnen besonders empfehlen.",
    "lv": "To zapestnico vam lahko še posebej priporočim.",
    "level": "Sätze"
  },
  {
    "de": "Es ist besonders schön gearbeitet.",
    "lv": "Posebej lepo je izdelana.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist nicht hoch.",
    "lv": "Cena ni visoka.",
    "level": "Sätze"
  },
  {
    "de": "Bekomme ich die Schachtel gratis?",
    "lv": "Ali dobim škatlico brezplačno?",
    "level": "Sätze"
  },
  {
    "de": "Alle Schmuckstücke sind gestempelt.",
    "lv": "Ves nakit je žigosan.",
    "level": "Sätze"
  },
  {
    "de": "Falls es meiner Frau nicht gefällt, kann ich es umtauschen?",
    "lv": "Če moji ženi ne bo všeč, ali ga lahko zamenjam?",
    "level": "Sätze"
  },
  {
    "de": "Natürlich, jederzeit.",
    "lv": "Seveda, kadar koli.",
    "level": "Sätze"
  }
];

window.SENTENCE_ENTRIES = SENTENCE_ENTRIES;

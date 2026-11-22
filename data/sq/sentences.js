const SENTENCE_ENTRIES = [
  {
    "de": "Hüte dich davor!",
    "lv": "Ruhu nga kjo!",
    "level": "Sätze"
  },
  {
    "de": "Wenn nichts dazwischenkommt.",
    "lv": "Nëse nuk ndodh asgjë e papritur. • Nëse gjithçka shkon sipas planit.",
    "level": "Sätze"
  },
  {
    "de": "Das kann ich mir denken!",
    "lv": "E marr me mend!",
    "level": "Sätze"
  },
  {
    "de": "Ist er denn krank?",
    "lv": "Mos është i sëmurë?",
    "level": "Sätze"
  },
  {
    "de": "Was denn?",
    "lv": "Po çfarë?",
    "level": "Sätze"
  },
  {
    "de": "Desto mehr.",
    "lv": "Aq më tepër.",
    "level": "Sätze"
  },
  {
    "de": "Je mehr, desto besser.",
    "lv": "Sa më shumë, aq më mirë.",
    "level": "Sätze"
  },
  {
    "de": "Alles deutet auf Regen.",
    "lv": "Gjithçka tregon se do të bjerë shi.",
    "level": "Sätze"
  },
  {
    "de": "Damit ist mir wenig gedient.",
    "lv": "Kjo nuk më hyn shumë në punë.",
    "level": "Sätze"
  },
  {
    "de": "Er ist dienstlich verhindert.",
    "lv": "Ai nuk mund të vijë për shkak të detyrave të punës.",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie doch!",
    "lv": "Flisni, pra!",
    "level": "Sätze"
  },
  {
    "de": "Es donnert.",
    "lv": "Bubullin.",
    "level": "Sätze"
  },
  {
    "de": "Doppelt so groß.",
    "lv": "Dy herë më i madh.",
    "level": "Sätze"
  },
  {
    "de": "Von dort.",
    "lv": "Që andej.",
    "level": "Sätze"
  },
  {
    "de": "Die Zeit drängt.",
    "lv": "Koha nuk pret.",
    "level": "Sätze"
  },
  {
    "de": "Ihn drücken Sorgen.",
    "lv": "Atë e rëndojnë hallet.",
    "level": "Sätze"
  },
  {
    "de": "Hast du das Buch durchgearbeitet?",
    "lv": "E ke studiuar librin me themel?",
    "level": "Sätze"
  },
  {
    "de": "Kein Durchgang!",
    "lv": "Ndalohet kalimi!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich Sie bitten?",
    "lv": "Mund t'ju ftoj për një valle? • A vini me mua, ju lutem?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin durstig.",
    "lv": "Kam etje.",
    "level": "Sätze"
  },
  {
    "de": "Eben das meine ich.",
    "lv": "Pikërisht këtë dua të them.",
    "level": "Sätze"
  },
  {
    "de": "Es ist ganz egal.",
    "lv": "Nuk ka fare rëndësi.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie eigentlich?",
    "lv": "Çfarë doni në të vërtetë?",
    "level": "Sätze"
  },
  {
    "de": "Eilt es mit dieser Sache?",
    "lv": "Ka ngut kjo punë?",
    "level": "Sätze"
  },
  {
    "de": "Eilt sehr!",
    "lv": "Shumë urgjente!",
    "level": "Sätze"
  },
  {
    "de": "Ich habe es eilig.",
    "lv": "Kam ngut.",
    "level": "Sätze"
  },
  {
    "de": "Du bildest dir nur ein, krank zu sein.",
    "lv": "Vetëm të duket se je i sëmurë.",
    "level": "Sätze"
  },
  {
    "de": "Was fällt dir ein?",
    "lv": "Si guxon? • Çfarë të shkon ndër mend?",
    "level": "Sätze"
  },
  {
    "de": "Es war einmal.",
    "lv": "Na ishte një herë.",
    "level": "Sätze"
  },
  {
    "de": "Steigen Sie bitte ein!",
    "lv": "Hipni, ju lutem!",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie ein!",
    "lv": "Urdhëroni brenda!",
    "level": "Sätze"
  },
  {
    "de": "Einzelnes hat mir dort gefallen.",
    "lv": "Disa gjëra atje më pëlqyen.",
    "level": "Sätze"
  },
  {
    "de": "Es empfiehlt sich.",
    "lv": "Këshillohet.",
    "level": "Sätze"
  },
  {
    "de": "Diese Flasche enthält Essig.",
    "lv": "Kjo shishe përmban uthull.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldigen Sie bitte!",
    "lv": "Më falni, ju lutem!",
    "level": "Sätze"
  },
  {
    "de": "Entweder... oder...",
    "lv": "Ose..., ose...",
    "level": "Sätze"
  },
  {
    "de": "Wer war der Erste?",
    "lv": "Kush ishte i pari?",
    "level": "Sätze"
  },
  {
    "de": "Wer fehlt heute?",
    "lv": "Kush mungon sot?",
    "level": "Sätze"
  },
  {
    "de": "Was fehlt dir?",
    "lv": "Çfarë ke?",
    "level": "Sätze"
  },
  {
    "de": "Wie heißen Sie?",
    "lv": "Si quheni?",
    "level": "Sätze"
  },
  {
    "de": "Was soll das heißen?",
    "lv": "Çfarë do të thotë kjo?",
    "level": "Sätze"
  },
  {
    "de": "Bitte treten Sie näher heran!",
    "lv": "Afrohuni, ju lutem!",
    "level": "Sätze"
  },
  {
    "de": "Heraus mit der Sprache!",
    "lv": "Fol hapur! • Trego!",
    "level": "Sätze"
  },
  {
    "de": "im Herbst",
    "lv": "në vjeshtë",
    "level": "Sätze"
  },
  {
    "de": "Meine Herrschaften!",
    "lv": "Zonja dhe zotërinj!",
    "level": "Sätze"
  },
  {
    "de": "von heute an",
    "lv": "nga sot e tutje",
    "level": "Sätze"
  },
  {
    "de": "heute früh",
    "lv": "sot në mëngjes",
    "level": "Sätze"
  },
  {
    "de": "heute Nacht",
    "lv": "sonte • mbrëmë",
    "level": "Sätze"
  },
  {
    "de": "Zu Hilfe!",
    "lv": "Ndihmë!",
    "level": "Sätze"
  },
  {
    "de": "Ich lerne jeden Tag Deutsch.",
    "lv": "Mësoj gjermanisht çdo ditë.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das bitte wiederholen?",
    "lv": "Mund ta përsëritësh, të lutem?",
    "level": "Sätze"
  },
  {
    "de": "Wir treffen uns am Bahnhof.",
    "lv": "Takohemi te stacioni i trenit.",
    "level": "Sätze"
  },
  {
    "de": "Ich stimme dir teilweise zu.",
    "lv": "Pjesërisht pajtohem me ty.",
    "level": "Sätze"
  },
  {
    "de": "Diese Entscheidung hat weitreichende Folgen.",
    "lv": "Ky vendim ka pasoja të gjera.",
    "level": "Sätze"
  },
  {
    "de": "Man sollte mehrere Perspektiven berücksichtigen.",
    "lv": "Duhet të merren parasysh disa këndvështrime.",
    "level": "Sätze"
  },
  {
    "de": "Könnten Sie das näher erläutern?",
    "lv": "A mund ta shpjegoni më hollësisht?",
    "level": "Sätze"
  },
  {
    "de": "Was mich anbelangt,...",
    "lv": "Sa për mua,...",
    "level": "Sätze"
  },
  {
    "de": "Wie alt sind Sie?",
    "lv": "Sa vjeç jeni?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zwanzig Jahre alt.",
    "lv": "Jam njëzet vjeç.",
    "level": "Sätze"
  },
  {
    "de": "Von heute an.",
    "lv": "Që nga sot.",
    "level": "Sätze"
  },
  {
    "de": "Von jetzt an.",
    "lv": "Që tani e tutje.",
    "level": "Sätze"
  },
  {
    "de": "Anders geht es nicht.",
    "lv": "Ndryshe nuk bëhet.",
    "level": "Sätze"
  },
  {
    "de": "Rufen Sie mich an.",
    "lv": "Më telefononi.",
    "level": "Sätze"
  },
  {
    "de": "Bitte stellen Sie das Radio ab.",
    "lv": "Ju lutem, fikeni radion.",
    "level": "Sätze"
  },
  {
    "de": "Achte bitte auf den Verkehr.",
    "lv": "Ki kujdes në trafik, të lutem.",
    "level": "Sätze"
  },
  {
    "de": "Darauf musst du achten.",
    "lv": "Për këtë duhet të kesh kujdes.",
    "level": "Sätze"
  },
  {
    "de": "Heute mache ich es anders.",
    "lv": "Sot do ta bëj ndryshe.",
    "level": "Sätze"
  },
  {
    "de": "Wir warten auf den Bus.",
    "lv": "Po presim autobusin.",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt allein.",
    "lv": "Ai jeton vetëm.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Ausbildung absolviert.",
    "lv": "Kam përfunduar formimin profesional. • Kam mbaruar shkollimin.",
    "level": "Sätze"
  },
  {
    "de": "Ich warte den Regen ab.",
    "lv": "Pres sa të pushojë shiu.",
    "level": "Sätze"
  },
  {
    "de": "Er arbeitet in der Verkaufsabteilung.",
    "lv": "Ai punon në sektorin e shitjeve.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin allergisch gegen Katzen.",
    "lv": "Jam alergjik ndaj maceve.",
    "level": "Sätze"
  },
  {
    "de": "Andererseits verstehe ich ihn.",
    "lv": "Nga ana tjetër, e kuptoj.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Situation analysiert.",
    "lv": "E kam analizuar situatën.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat meinen Vorschlag akzeptiert.",
    "lv": "Ajo e pranoi propozimin tim.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte das genauer analysieren.",
    "lv": "Do të doja ta analizoja këtë më hollësisht.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte den Vertrag ändern.",
    "lv": "Do të doja ta ndryshoja kontratën.",
    "level": "Sätze"
  },
  {
    "de": "Er ändert ständig seine Meinung.",
    "lv": "Ai ndërron vazhdimisht mendim.",
    "level": "Sätze"
  },
  {
    "de": "Ähnliche Probleme hatten wir schon früher.",
    "lv": "Probleme të ngjashme kemi pasur edhe më parë.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ahnung!",
    "lv": "S'e kam idenë!",
    "level": "Sätze"
  },
  {
    "de": "Hör auf zu jammern.",
    "lv": "Mos u anko më.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Kleid ist stilvoll und konservativ.",
    "lv": "Ky fustan ka një stil elegant e të përmbajtur.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre gerne Akkordeonmusik.",
    "lv": "Më pëlqen të dëgjoj muzikë me fizarmonikë.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das Gerät anklicken?",
    "lv": "Mund të klikosh mbi pajisjen?",
    "level": "Sätze"
  },
  {
    "de": "Bitte öffne die Datei und klicke darauf.",
    "lv": "Të lutem, hape skedarin dhe kliko mbi të.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe einen Unfall gehabt.",
    "lv": "Kam pësuar një aksident.",
    "level": "Sätze"
  },
  {
    "de": "Wir laufen zum Bahnhof.",
    "lv": "Po shkojmë në këmbë te stacioni.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schalte den Fernseher an.",
    "lv": "Të lutem, ndize televizorin.",
    "level": "Sätze"
  },
  {
    "de": "Mein Computer ist abgestürzt.",
    "lv": "Kompjuteri më është bllokuar.",
    "level": "Sätze"
  },
  {
    "de": "Am Wochenende gehe ich angeln.",
    "lv": "Në fundjavë shkoj për peshk.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe den Anruf verpasst.",
    "lv": "Më shpëtoi telefonata.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mich später anrufen?",
    "lv": "Mund të më telefonosh më vonë?",
    "level": "Sätze"
  },
  {
    "de": "Bitte nimm meinen Vorschlag an.",
    "lv": "Të lutem, pranoje propozimin tim.",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme dein Angebot an.",
    "lv": "E pranoj ofertën tënde.",
    "level": "Sätze"
  },
  {
    "de": "Er nahm die Einladung an.",
    "lv": "Ai e pranoi ftesën.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Angst vor Spinnen.",
    "lv": "Kam frikë nga merimangat.",
    "level": "Sätze"
  },
  {
    "de": "Keine Angst, alles wird gut.",
    "lv": "Mos ki frikë, gjithçka do të shkojë mirë.",
    "level": "Sätze"
  },
  {
    "de": "Anklang finden.",
    "lv": "Të gjesh pëlqim. • Të gjesh jehonë.",
    "level": "Sätze"
  },
  {
    "de": "Es kommt darauf an.",
    "lv": "Varet.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Anlass.",
    "lv": "Me këtë rast.",
    "level": "Sätze"
  },
  {
    "de": "Nehmen wir an, dass...",
    "lv": "Le të supozojmë se...",
    "level": "Sätze"
  },
  {
    "de": "Was hast du da angerichtet?",
    "lv": "Çfarë rrëmuje ke bërë aty?",
    "level": "Sätze"
  },
  {
    "de": "Bis ans Ende.",
    "lv": "Deri në fund.",
    "level": "Sätze"
  },
  {
    "de": "Du glaubst mir anscheinend nicht.",
    "lv": "Me sa duket, nuk më beson.",
    "level": "Sätze"
  },
  {
    "de": "Meiner Ansicht nach...",
    "lv": "Për mendimin tim...",
    "level": "Sätze"
  },
  {
    "de": "Stell dich nicht so an!",
    "lv": "Mos bëj kaq naze!",
    "level": "Sätze"
  },
  {
    "de": "An die Arbeit gehen.",
    "lv": "T'i hysh punës.",
    "level": "Sätze"
  },
  {
    "de": "Außer Atem sein.",
    "lv": "Të jesh pa frymë.",
    "level": "Sätze"
  },
  {
    "de": "Guten Appetit!",
    "lv": "Ju bëftë mirë!",
    "level": "Sätze"
  },
  {
    "de": "In einem Atemzug.",
    "lv": "Me një frymë.",
    "level": "Sätze"
  },
  {
    "de": "Auf jeden Fall.",
    "lv": "Në çdo rast. • Patjetër.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal war alles still.",
    "lv": "Papritur gjithçka heshti.",
    "level": "Sätze"
  },
  {
    "de": "Bitte mach die Tür auf!",
    "lv": "Hape derën, të lutem!",
    "level": "Sätze"
  },
  {
    "de": "Er hat den Kredit aufgenommen.",
    "lv": "Ai mori kredinë.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen heute aufräumen.",
    "lv": "Sot duhet të vëmë rregull.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre jetzt auf.",
    "lv": "Tani po ndaloj.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schon auf.",
    "lv": "Ai është ngritur tashmë.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen das Treffen verschieben.",
    "lv": "Duhet ta shtyjmë takimin.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat mich aufgeregt.",
    "lv": "Ajo më nervozoi.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal.",
    "lv": "Befas.",
    "level": "Sätze"
  },
  {
    "de": "Auf der Stelle.",
    "lv": "Aty për aty.",
    "level": "Sätze"
  },
  {
    "de": "Für den Schaden aufkommen.",
    "lv": "Të paguash dëmin.",
    "level": "Sätze"
  },
  {
    "de": "Bitte die Tür auf!",
    "lv": "Hapeni derën, ju lutem!",
    "level": "Sätze"
  },
  {
    "de": "Aufrecht sitzen.",
    "lv": "Të rrish drejt.",
    "level": "Sätze"
  },
  {
    "de": "Er ist auf.",
    "lv": "Ai është ngritur.",
    "level": "Sätze"
  },
  {
    "de": "Alle Kräfte aufwenden.",
    "lv": "Të japësh të gjitha forcat.",
    "level": "Sätze"
  },
  {
    "de": "Viel Mühe aufwenden.",
    "lv": "Të mundohesh shumë.",
    "level": "Sätze"
  },
  {
    "de": "Geh mir aus den Augen!",
    "lv": "Zhduku nga sytë e mi!",
    "level": "Sätze"
  },
  {
    "de": "Unter vier Augen.",
    "lv": "Kokë më kokë.",
    "level": "Sätze"
  },
  {
    "de": "Aus Mangel an Zeit.",
    "lv": "Për mungesë kohe.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Grunde.",
    "lv": "Për këtë arsye.",
    "level": "Sätze"
  },
  {
    "de": "Alle außer dir.",
    "lv": "Të gjithë përveç teje.",
    "level": "Sätze"
  },
  {
    "de": "Auf Äußerlichkeiten Wert legen.",
    "lv": "T'i japësh rëndësi pamjes së jashtme.",
    "level": "Sätze"
  },
  {
    "de": "Im äußersten Fall.",
    "lv": "Në rastin më të keq.",
    "level": "Sätze"
  },
  {
    "de": "Äußerst wichtig.",
    "lv": "Jashtëzakonisht i rëndësishëm.",
    "level": "Sätze"
  },
  {
    "de": "Aussicht auf die See.",
    "lv": "Pamje nga deti.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gute Aussichten.",
    "lv": "Ai ka shanse të mira.",
    "level": "Sätze"
  },
  {
    "de": "Wie wird dieses Wort ausgesprochen?",
    "lv": "Si shqiptohet kjo fjalë?",
    "level": "Sätze"
  },
  {
    "de": "Sein Beileid aussprechen.",
    "lv": "Të shprehësh ngushëllimet e tua.",
    "level": "Sätze"
  },
  {
    "de": "Wann wurden die Meisterschaftskämpfe ausgetragen?",
    "lv": "Kur u zhvilluan kampionatet?",
    "level": "Sätze"
  },
  {
    "de": "Welchen Beruf üben Sie aus?",
    "lv": "Çfarë profesioni ushtroni?",
    "level": "Sätze"
  },
  {
    "de": "Einfluss ausüben.",
    "lv": "Të ushtrosh ndikim.",
    "level": "Sätze"
  },
  {
    "de": "Auswärts essen.",
    "lv": "Të hash jashtë.",
    "level": "Sätze"
  },
  {
    "de": "Per Bahn.",
    "lv": "Me hekurudhë.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Bahn.",
    "lv": "Me tren.",
    "level": "Sätze"
  },
  {
    "de": "Möglichst bald.",
    "lv": "Sa më parë.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist Angst und bange.",
    "lv": "Kam një frikë të tmerrshme.",
    "level": "Sätze"
  },
  {
    "de": "Auf die lange Bank schieben.",
    "lv": "Ta shtysh për më vonë. • Ta zvarrisësh.",
    "level": "Sätze"
  },
  {
    "de": "Bar zahlen.",
    "lv": "Të paguash me para në dorë.",
    "level": "Sätze"
  },
  {
    "de": "Erz bauen.",
    "lv": "Të nxjerrësh xeheror.",
    "level": "Sätze"
  },
  {
    "de": "Mist bauen.",
    "lv": "Të bësh marrëzira.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin beauftragt.",
    "lv": "Më kanë ngarkuar me këtë detyrë.",
    "level": "Sätze"
  },
  {
    "de": "Nach Bedarf.",
    "lv": "Sipas nevojës.",
    "level": "Sätze"
  },
  {
    "de": "Ich bedauere ihn.",
    "lv": "Më vjen keq për të.",
    "level": "Sätze"
  },
  {
    "de": "Was bedeutet dieses Wort?",
    "lv": "Çfarë do të thotë kjo fjalë?",
    "level": "Sätze"
  },
  {
    "de": "Unter der Bedingung, dass...",
    "lv": "Me kusht që...",
    "level": "Sätze"
  },
  {
    "de": "Sie sieht bedrückt aus.",
    "lv": "Ajo duket e brengosur.",
    "level": "Sätze"
  },
  {
    "de": "Hinweise befolgen.",
    "lv": "Të ndjekësh udhëzimet.",
    "level": "Sätze"
  },
  {
    "de": "Befehle befolgen.",
    "lv": "Të zbatosh urdhrat.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Post befördern.",
    "lv": "Të dërgosh me postë.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin begierig zu wissen.",
    "lv": "Mezi pres ta di.",
    "level": "Sätze"
  },
  {
    "de": "Zu Beginn.",
    "lv": "Në fillim.",
    "level": "Sätze"
  },
  {
    "de": "Am Beginn.",
    "lv": "Fillimisht.",
    "level": "Sätze"
  },
  {
    "de": "Bei Beginn.",
    "lv": "Me të filluar.",
    "level": "Sätze"
  },
  {
    "de": "In Begleitung.",
    "lv": "Me shoqërues.",
    "level": "Sätze"
  },
  {
    "de": "Mit seiner Begleitung.",
    "lv": "Me shoqëruesin e tij.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schwer von Begriff.",
    "lv": "Ai e kap me vështirësi. • Ai mendon ngadalë.",
    "level": "Sätze"
  },
  {
    "de": "Im Gedächtnis behalten.",
    "lv": "Ta mbash mend. • Ta ruash në kujtesë.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tisch.",
    "lv": "Në tryezë.",
    "level": "Sätze"
  },
  {
    "de": "Bei Sinnen sein.",
    "lv": "Të jesh në vete.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tage.",
    "lv": "Gjatë ditës.",
    "level": "Sätze"
  },
  {
    "de": "Bei weitem nicht so.",
    "lv": "As për së afërmi kaq.",
    "level": "Sätze"
  },
  {
    "de": "Alle beide.",
    "lv": "Që të dy.",
    "level": "Sätze"
  },
  {
    "de": "Stürmischer Beifall brach los.",
    "lv": "Shpërthyen duartrokitje të stuhishme.",
    "level": "Sätze"
  },
  {
    "de": "Beifall finden.",
    "lv": "Të gjesh miratim.",
    "level": "Sätze"
  },
  {
    "de": "Beileid aussprechen.",
    "lv": "Të shprehësh ngushëllime.",
    "level": "Sätze"
  },
  {
    "de": "Auf eigenen Beinen stehen.",
    "lv": "Të qëndrosh mbi këmbët e tua.",
    "level": "Sätze"
  },
  {
    "de": "Zum Beispiel.",
    "lv": "Për shembull.",
    "level": "Sätze"
  },
  {
    "de": "Beistand leisten.",
    "lv": "Të ndihmosh. • Të japësh ndihmë.",
    "level": "Sätze"
  },
  {
    "de": "Beitrag leisten.",
    "lv": "Të japësh kontributin tënd.",
    "level": "Sätze"
  },
  {
    "de": "Jemandes Bekanntschaft machen.",
    "lv": "Të njihesh me dikë.",
    "level": "Sätze"
  },
  {
    "de": "Bekanntschaft anknüpfen.",
    "lv": "Të lidhësh njohje. • Të krijosh një kontakt.",
    "level": "Sätze"
  },
  {
    "de": "Belegte Brötchen.",
    "lv": "Simite të mbushura.",
    "level": "Sätze"
  },
  {
    "de": "Nach Ihrem Belieben.",
    "lv": "Sipas dëshirës suaj.",
    "level": "Sätze"
  },
  {
    "de": "Zu jeder beliebigen Zeit.",
    "lv": "Në çdo kohë.",
    "level": "Sätze"
  },
  {
    "de": "Schweigen beobachten.",
    "lv": "Të ruash heshtjen.",
    "level": "Sätze"
  },
  {
    "de": "Zur Bequemlichkeit.",
    "lv": "Për lehtësi.",
    "level": "Sätze"
  },
  {
    "de": "Bereit sein.",
    "lv": "Të jesh gati. • Të jesh i gatshëm.",
    "level": "Sätze"
  },
  {
    "de": "Unfallopfer bergen.",
    "lv": "Të shpëtosh viktimat e aksidentit.",
    "level": "Sätze"
  },
  {
    "de": "Bericht erstatten.",
    "lv": "Të raportosh. • Të japësh raport.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind besetzt.",
    "lv": "Të gjitha vendet janë të zëna.",
    "level": "Sätze"
  },
  {
    "de": "Neue Besen kehren gut.",
    "lv": "Fshesa e re fshin mirë.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt ein Haus.",
    "lv": "Ai zotëron një shtëpi.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt viel Mut.",
    "lv": "Ai ka shumë guxim.",
    "level": "Sätze"
  },
  {
    "de": "Desto besser.",
    "lv": "Aq më mirë.",
    "level": "Sätze"
  },
  {
    "de": "Gute Besserung!",
    "lv": "Shërim të shpejtë!",
    "level": "Sätze"
  },
  {
    "de": "Beim besten Willen.",
    "lv": "Me gjithë vullnetin e mirë.",
    "level": "Sätze"
  },
  {
    "de": "Am besten.",
    "lv": "Më së miri.",
    "level": "Sätze"
  },
  {
    "de": "Es besteht Zweifel.",
    "lv": "Ka dyshime.",
    "level": "Sätze"
  },
  {
    "de": "Seine Aufgabe besteht darin...",
    "lv": "Detyra e tij qëndron në...",
    "level": "Sätze"
  },
  {
    "de": "Grüße bestellen.",
    "lv": "Të përcjellësh të fala.",
    "level": "Sätze"
  },
  {
    "de": "Ganz bestimmt.",
    "lv": "Patjetër. • Pa asnjë dyshim.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch kommen.",
    "lv": "Të vish për vizitë.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch sein.",
    "lv": "Të jesh për vizitë. • Të jesh mik te dikush.",
    "level": "Sätze"
  },
  {
    "de": "Oft Konzerte besuchen.",
    "lv": "Të shkosh shpesh në koncerte.",
    "level": "Sätze"
  },
  {
    "de": "Welche Schule hat er besucht?",
    "lv": "Në cilën shkollë ka mësuar?",
    "level": "Sätze"
  },
  {
    "de": "In Betracht ziehen.",
    "lv": "Të marrësh parasysh. • Të shqyrtosh.",
    "level": "Sätze"
  },
  {
    "de": "Außer Betracht lassen.",
    "lv": "Të mos marrësh parasysh.",
    "level": "Sätze"
  },
  {
    "de": "Er betreibt ein Hotel.",
    "lv": "Ai drejton një hotel.",
    "level": "Sätze"
  },
  {
    "de": "Alle beiden.",
    "lv": "Të dy.",
    "level": "Sätze"
  },
  {
    "de": "Alles bezahlen.",
    "lv": "Të paguash gjithçka.",
    "level": "Sätze"
  },
  {
    "de": "In Bezug auf etwas.",
    "lv": "Në lidhje me diçka.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön.",
    "lv": "S'ka përse. • Urdhëro.",
    "level": "Sätze"
  },
  {
    "de": "Wie bitte?",
    "lv": "Si?",
    "level": "Sätze"
  },
  {
    "de": "Bitte sehr.",
    "lv": "S'ka fare përse. • Urdhëroni.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe eine Bitte an Sie.",
    "lv": "Kam një lutje për ju.",
    "level": "Sätze"
  },
  {
    "de": "Trompete blasen.",
    "lv": "T'i biesh trumbetës.",
    "level": "Sätze"
  },
  {
    "de": "In einem Buch blättern.",
    "lv": "Të shfletosh një libër.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßen Füßen.",
    "lv": "Me këmbë të zbathura.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßem Auge.",
    "lv": "Me sy të lirë.",
    "level": "Sätze"
  },
  {
    "de": "Danke für die Blumen!",
    "lv": "Faleminderit për komplimentin!",
    "level": "Sätze"
  },
  {
    "de": "Alles in Butter.",
    "lv": "Gjithçka shkon vaj.",
    "level": "Sätze"
  },
  {
    "de": "Bitte checken.",
    "lv": "Ju lutemi të kontrolloni.",
    "level": "Sätze"
  },
  {
    "de": "Da ist er!",
    "lv": "Ja ku është!",
    "level": "Sätze"
  },
  {
    "de": "Alles spricht dafür.",
    "lv": "Gjithçka tregon se është kështu.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann nichts dafür.",
    "lv": "Nuk është faji im.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin dagegen.",
    "lv": "Jam kundër.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe nichts dagegen.",
    "lv": "Nuk kam asgjë kundër.",
    "level": "Sätze"
  },
  {
    "de": "Von daheim.",
    "lv": "Nga shtëpia.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Dame ziehen.",
    "lv": "Të lëvizësh mbretëreshën.",
    "level": "Sätze"
  },
  {
    "de": "Es dämmert.",
    "lv": "Po bie muzgu. • Po agon.",
    "level": "Sätze"
  },
  {
    "de": "Danke schön!",
    "lv": "Faleminderit shumë!",
    "level": "Sätze"
  },
  {
    "de": "Dann und wann.",
    "lv": "Herë pas here.",
    "level": "Sätze"
  },
  {
    "de": "Darauf kannst du dich verlassen.",
    "lv": "Mund të mbështetesh në këtë.",
    "level": "Sätze"
  },
  {
    "de": "Daraus wird nichts.",
    "lv": "Nga kjo nuk do të dalë asgjë.",
    "level": "Sätze"
  },
  {
    "de": "So dass...",
    "lv": "Kështu që...",
    "level": "Sätze"
  },
  {
    "de": "Für wen halten Sie mich?",
    "lv": "Për kë më merrni?",
    "level": "Sätze"
  },
  {
    "de": "Hände weg!",
    "lv": "Hiqi duart!",
    "level": "Sätze"
  },
  {
    "de": "Lass den Kopf nicht hängen!",
    "lv": "Mos e ul kokën!",
    "level": "Sätze"
  },
  {
    "de": "zu Hause",
    "lv": "në shtëpi",
    "level": "Sätze"
  },
  {
    "de": "nach Hause gehen",
    "lv": "të shkosh në shtëpi",
    "level": "Sätze"
  },
  {
    "de": "von Haus aus",
    "lv": "nga prejardhja • prej natyre",
    "level": "Sätze"
  },
  {
    "de": "Meinen herzlichsten Glückwunsch!",
    "lv": "Urimet e mia më të përzemërta!",
    "level": "Sätze"
  },
  {
    "de": "Seien Sie so gut!",
    "lv": "Jini kaq i mirë!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie die Güte!",
    "lv": "Kini mirësinë!",
    "level": "Sätze"
  },
  {
    "de": "Was hast du?",
    "lv": "Çfarë ke?",
    "level": "Sätze"
  },
  {
    "de": "Gestatten Sie bitte!",
    "lv": "Më lejoni, ju lutem!",
    "level": "Sätze"
  },
  {
    "de": "Ist es gestattet zu rauchen?",
    "lv": "A lejohet të pihet duhan?",
    "level": "Sätze"
  },
  {
    "de": "Ich muss gestehen, dass...",
    "lv": "Duhet të pranoj se...",
    "level": "Sätze"
  },
  {
    "de": "gestern früh",
    "lv": "dje në mëngjes",
    "level": "Sätze"
  },
  {
    "de": "gestern Abend",
    "lv": "dje në mbrëmje",
    "level": "Sätze"
  },
  {
    "de": "Es ist mir gleichgültig, ob...",
    "lv": "Për mua është njësoj nëse...",
    "level": "Sätze"
  },
  {
    "de": "Was ist geschehen?",
    "lv": "Çfarë ka ndodhur?",
    "level": "Sätze"
  },
  {
    "de": "Mach keine Geschichten!",
    "lv": "Mos bëj naze! • Mos bëj marrëzira!",
    "level": "Sätze"
  },
  {
    "de": "Geschweige denn...",
    "lv": "Lëre më...",
    "level": "Sätze"
  },
  {
    "de": "Gehen Sie geradeaus!",
    "lv": "Shkoni drejt përpara!",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es Ihnen?",
    "lv": "Si jeni?",
    "level": "Sätze"
  },
  {
    "de": "Frag ihn gelegentlich, ob...",
    "lv": "Pyete kur të kesh rast nëse...",
    "level": "Sätze"
  },
  {
    "de": "morgen früh",
    "lv": "nesër në mëngjes",
    "level": "Sätze"
  },
  {
    "de": "im Frühling",
    "lv": "në pranverë",
    "level": "Sätze"
  },
  {
    "de": "Was gibt’s Neues?",
    "lv": "Ç'ka të re?",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Brief folgt, dass...",
    "lv": "Nga kjo letër del se...",
    "level": "Sätze"
  },
  {
    "de": "Fahre fort!",
    "lv": "Vazhdo!",
    "level": "Sätze"
  },
  {
    "de": "Er ist kein Freund von...",
    "lv": "Nuk është i dhënë pas...",
    "level": "Sätze"
  },
  {
    "de": "Es erwies sich, dass...",
    "lv": "Doli se...",
    "level": "Sätze"
  },
  {
    "de": "Gedenkst du meiner?",
    "lv": "Më kujton? • Më mendon ndonjëherë?",
    "level": "Sätze"
  },
  {
    "de": "im Winter",
    "lv": "në dimër",
    "level": "Sätze"
  },
  {
    "de": "Welcher Jahrgang sind Sie?",
    "lv": "Në cilin vit keni lindur?",
    "level": "Sätze"
  },
  {
    "de": "Es jammert mich zu sehen...",
    "lv": "Më vjen keq të shoh...",
    "level": "Sätze"
  },
  {
    "de": "je mehr, desto besser",
    "lv": "sa më shumë, aq më mirë",
    "level": "Sätze"
  },
  {
    "de": "bis jetzt",
    "lv": "deri tani",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich zum Bahnhof?",
    "lv": "Si të shkoj në stacionin e trenit?",
    "level": "Sätze"
  },
  {
    "de": "Komm her!",
    "lv": "Eja këtu!",
    "level": "Sätze"
  },
  {
    "de": "Könnte ich Frau N. sprechen?",
    "lv": "A mund të flas me zonjën N.?",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das?",
    "lv": "Sa kushton kjo?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange dauert die Vorstellung?",
    "lv": "Sa zgjat shfaqja?",
    "level": "Sätze"
  },
  {
    "de": "Lass das!",
    "lv": "Mjaft! • Lëre!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich in Ruhe!",
    "lv": "Më lër të qetë!",
    "level": "Sätze"
  },
  {
    "de": "Lassen Sie mich Ihnen helfen!",
    "lv": "Më lejoni t'ju ndihmoj!",
    "level": "Sätze"
  },
  {
    "de": "Lasst uns gehen!",
    "lv": "Le të shkojmë!",
    "level": "Sätze"
  },
  {
    "de": "Na, wie läufts?",
    "lv": "Hë, si po shkon?",
    "level": "Sätze"
  },
  {
    "de": "Es lebe!",
    "lv": "Rroftë!",
    "level": "Sätze"
  },
  {
    "de": "Leben Sie wohl!",
    "lv": "Qofshi mirë! • Lamtumirë!",
    "level": "Sätze"
  },
  {
    "de": "Was ist los?",
    "lv": "Ç'është puna?",
    "level": "Sätze"
  },
  {
    "de": "Der Job ist anstrengend.",
    "lv": "Puna është e lodhshme.",
    "level": "Sätze"
  },
  {
    "de": "Das war ein anstrengender Tag.",
    "lv": "Ishte një ditë e lodhshme.",
    "level": "Sätze"
  },
  {
    "de": "Deutsch lernen kann anstrengend sein.",
    "lv": "Të mësosh gjermanisht mund të jetë e lodhshme.",
    "level": "Sätze"
  },
  {
    "de": "Er verlangt eine Erklärung.",
    "lv": "Ai kërkon një shpjegim.",
    "level": "Sätze"
  },
  {
    "de": "Der Verkäufer verlangt zu viel Geld.",
    "lv": "Shitësi kërkon më shumë para se ç'duhet.",
    "level": "Sätze"
  },
  {
    "de": "Das Gesetz verlangt es so.",
    "lv": "Kështu e kërkon ligji.",
    "level": "Sätze"
  },
  {
    "de": "Das ist gar nicht so schwer.",
    "lv": "Nuk është fare aq e vështirë.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe gar kein Geld.",
    "lv": "Nuk kam fare para.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gar nichts gesagt.",
    "lv": "Ai nuk tha asgjë fare.",
    "level": "Sätze"
  },
  {
    "de": "Der Hund ist los.",
    "lv": "Qeni është i zgjidhur.",
    "level": "Sätze"
  },
  {
    "de": "Hier ist viel los.",
    "lv": "Këtu ndodhin shumë gjëra.",
    "level": "Sätze"
  },
  {
    "de": "Halt die Luft an!",
    "lv": "Pusho! • Mos e tepro!",
    "level": "Sätze"
  },
  {
    "de": "Was machst du?",
    "lv": "Çfarë po bën?",
    "level": "Sätze"
  },
  {
    "de": "Sag mal!",
    "lv": "Më thuaj!",
    "level": "Sätze"
  },
  {
    "de": "Was meinen Sie damit?",
    "lv": "Çfarë doni të thoni me këtë?",
    "level": "Sätze"
  },
  {
    "de": "Wir gehen mit Ihnen.",
    "lv": "Vijmë me ju.",
    "level": "Sätze"
  },
  {
    "de": "Ich fahre mit der Eisenbahn.",
    "lv": "Udhëtoj me tren.",
    "level": "Sätze"
  },
  {
    "de": "am Mittwoch",
    "lv": "të mërkurën",
    "level": "Sätze"
  },
  {
    "de": "Es mag sein.",
    "lv": "Mund të jetë.",
    "level": "Sätze"
  },
  {
    "de": "Ich mag das nicht.",
    "lv": "Kjo nuk më pëlqen.",
    "level": "Sätze"
  },
  {
    "de": "am Montag",
    "lv": "të hënën",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen!",
    "lv": "Mirëmëngjesi!",
    "level": "Sätze"
  },
  {
    "de": "am Morgen",
    "lv": "në mëngjes",
    "level": "Sätze"
  },
  {
    "de": "Gute Nacht!",
    "lv": "Natën e mirë!",
    "level": "Sätze"
  },
  {
    "de": "Nehmen Sie Platz!",
    "lv": "Uluni!",
    "level": "Sätze"
  },
  {
    "de": "Letzte Neuheit!",
    "lv": "Risia e fundit!",
    "level": "Sätze"
  },
  {
    "de": "Nicht wahr?",
    "lv": "Apo jo?",
    "level": "Sätze"
  },
  {
    "de": "Nicht doch!",
    "lv": "Jo, jo! • Mos!",
    "level": "Sätze"
  },
  {
    "de": "Nun endlich!",
    "lv": "Më në fund!",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das?",
    "lv": "Për çfarë shërben kjo?",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das alles?",
    "lv": "Ç'dobi kanë të gjitha këto?",
    "level": "Sätze"
  },
  {
    "de": "Parken verboten!",
    "lv": "Ndalohet parkimi!",
    "level": "Sätze"
  },
  {
    "de": "Nicht parken!",
    "lv": "Mos parkoni!",
    "level": "Sätze"
  },
  {
    "de": "Er hat Recht.",
    "lv": "Ka të drejtë.",
    "level": "Sätze"
  },
  {
    "de": "Wovon ist die Rede?",
    "lv": "Për çfarë bëhet fjalë?",
    "level": "Sätze"
  },
  {
    "de": "Davon kann keine Rede sein.",
    "lv": "Për këtë as që bëhet fjalë.",
    "level": "Sätze"
  },
  {
    "de": "Glückliche Reise!",
    "lv": "Udhë të mbarë!",
    "level": "Sätze"
  },
  {
    "de": "Mir reißt die Geduld.",
    "lv": "Po më mbaron durimi.",
    "level": "Sätze"
  },
  {
    "de": "Man sagt, dass...",
    "lv": "Thonë se...",
    "level": "Sätze"
  },
  {
    "de": "Schon gut!",
    "lv": "Mirë, mirë!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön!",
    "lv": "Urdhëroni! • Ju lutem!",
    "level": "Sätze"
  },
  {
    "de": "Was bin ich schuldig?",
    "lv": "Sa ju detyrohem? • Sa duhet të paguaj?",
    "level": "Sätze"
  },
  {
    "de": "Vor dem Gebrauch schütteln!",
    "lv": "Të tundet para përdorimit!",
    "level": "Sätze"
  },
  {
    "de": "Sehen Sie mal!",
    "lv": "Shikoni pak!",
    "level": "Sätze"
  },
  {
    "de": "Wie sehr auch...",
    "lv": "Sado...",
    "level": "Sätze"
  },
  {
    "de": "Seit wann?",
    "lv": "Që kur?",
    "level": "Sätze"
  },
  {
    "de": "Was soll ich tun?",
    "lv": "Çfarë të bëj?",
    "level": "Sätze"
  },
  {
    "de": "im Sommer",
    "lv": "në verë",
    "level": "Sätze"
  },
  {
    "de": "Nicht nur..., sondern auch...",
    "lv": "Jo vetëm..., por edhe...",
    "level": "Sätze"
  },
  {
    "de": "Sonst noch etwas?",
    "lv": "Diçka tjetër?",
    "level": "Sätze"
  },
  {
    "de": "Spaß beiseite!",
    "lv": "Lëmë shakatë!",
    "level": "Sätze"
  },
  {
    "de": "Wie spät ist es?",
    "lv": "Sa është ora?",
    "level": "Sätze"
  },
  {
    "de": "Durchfahrt gesperrt!",
    "lv": "Ndalohet kalimi!",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie deutsch?",
    "lv": "Flisni gjermanisht?",
    "level": "Sätze"
  },
  {
    "de": "Statt zu...",
    "lv": "Në vend që të...",
    "level": "Sätze"
  },
  {
    "de": "Wie steht’s?",
    "lv": "Si janë punët?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Hut steht ihr gut.",
    "lv": "Kjo kapelë i rri mirë.",
    "level": "Sätze"
  },
  {
    "de": "Guten Tag!",
    "lv": "Mirëdita!",
    "level": "Sätze"
  },
  {
    "de": "Wo treffen wir uns?",
    "lv": "Ku takohemi?",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie näher!",
    "lv": "Afrohuni!",
    "level": "Sätze"
  },
  {
    "de": "Ehrlichkeit ist eine Tugend.",
    "lv": "Ndershmëria është virtyt.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe viel zu tun.",
    "lv": "Kam shumë punë.",
    "level": "Sätze"
  },
  {
    "de": "Nicht übel!",
    "lv": "Jo keq!",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt über mir.",
    "lv": "Banon sipër meje.",
    "level": "Sätze"
  },
  {
    "de": "Er ist davon überzeugt.",
    "lv": "Është i bindur për këtë.",
    "level": "Sätze"
  },
  {
    "de": "So ist es üblich.",
    "lv": "Kështu është zakoni.",
    "level": "Sätze"
  },
  {
    "de": "Deine Uhr geht nach.",
    "lv": "Ora jote mbetet prapa.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel Uhr ist es?",
    "lv": "Ç'orë është?",
    "level": "Sätze"
  },
  {
    "de": "Um acht Uhr früh.",
    "lv": "Në orën tetë të mëngjesit.",
    "level": "Sätze"
  },
  {
    "de": "umso mehr",
    "lv": "aq më tepër",
    "level": "Sätze"
  },
  {
    "de": "Rechts um!",
    "lv": "Djathtas!",
    "level": "Sätze"
  },
  {
    "de": "Und ob!",
    "lv": "Si jo!",
    "level": "Sätze"
  },
  {
    "de": "und zwar",
    "lv": "domethënë",
    "level": "Sätze"
  },
  {
    "de": "Auf Unkosten von...",
    "lv": "Me shpenzimet e... • Në kurriz të...",
    "level": "Sätze"
  },
  {
    "de": "Er saß unter den Zuschauern.",
    "lv": "Ishte ulur mes spektatorëve.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ursache!",
    "lv": "S'ka përse!",
    "level": "Sätze"
  },
  {
    "de": "Es geschah, wie verabredet.",
    "lv": "Ndodhi siç ishte rënë dakord.",
    "level": "Sätze"
  },
  {
    "de": "Rauchen verboten!",
    "lv": "Ndalohet duhani!",
    "level": "Sätze"
  },
  {
    "de": "Falsch verbunden!",
    "lv": "Numër i gabuar!",
    "level": "Sätze"
  },
  {
    "de": "Eintritt verboten!",
    "lv": "Ndalohet hyrja!",
    "level": "Sätze"
  },
  {
    "de": "Verstehen Sie mich?",
    "lv": "Më kuptoni?",
    "level": "Sätze"
  },
  {
    "de": "Er versteht nichts davon.",
    "lv": "Nuk merr vesh asgjë nga kjo.",
    "level": "Sätze"
  },
  {
    "de": "Seine Ansicht vertreten.",
    "lv": "Të mbrosh mendimin tënd.",
    "level": "Sätze"
  },
  {
    "de": "Streit verursachen.",
    "lv": "Të shkaktosh grindje.",
    "level": "Sätze"
  },
  {
    "de": "Viel besser.",
    "lv": "Shumë më mirë.",
    "level": "Sätze"
  },
  {
    "de": "Zu viel.",
    "lv": "Tepër.",
    "level": "Sätze"
  },
  {
    "de": "Vom Hörensagen.",
    "lv": "Nga sa kam dëgjuar.",
    "level": "Sätze"
  },
  {
    "de": "Von Zeit zu Zeit.",
    "lv": "Herë pas here.",
    "level": "Sätze"
  },
  {
    "de": "Von Beruf.",
    "lv": "Me profesion.",
    "level": "Sätze"
  },
  {
    "de": "Er ist Berliner von Geburt.",
    "lv": "Ka lindur në Berlin.",
    "level": "Sätze"
  },
  {
    "de": "Er steht vor dem Fenster.",
    "lv": "Qëndron para dritares.",
    "level": "Sätze"
  },
  {
    "de": "Vor Sonnenaufgang.",
    "lv": "Para lindjes së diellit.",
    "level": "Sätze"
  },
  {
    "de": "Vor vierzehn Tagen.",
    "lv": "Para dy javësh.",
    "level": "Sätze"
  },
  {
    "de": "Vor Freude.",
    "lv": "Nga gëzimi.",
    "level": "Sätze"
  },
  {
    "de": "Vor allem.",
    "lv": "Mbi të gjitha. • Para së gjithash.",
    "level": "Sätze"
  },
  {
    "de": "Im Voraus.",
    "lv": "Paraprakisht.",
    "level": "Sätze"
  },
  {
    "de": "Unter der Voraussetzung, dass...",
    "lv": "Me kusht që...",
    "level": "Sätze"
  },
  {
    "de": "Unter dem Vorbehalt.",
    "lv": "Me rezervë.",
    "level": "Sätze"
  },
  {
    "de": "Vorhanden sein.",
    "lv": "Të jesh në dispozicion. • Të ekzistosh.",
    "level": "Sätze"
  },
  {
    "de": "In der vorigen Woche.",
    "lv": "Javën e kaluar.",
    "level": "Sätze"
  },
  {
    "de": "Vorkehrungen treffen.",
    "lv": "Të marrësh masa paraprake.",
    "level": "Sätze"
  },
  {
    "de": "Sie kommt mir bekannt vor.",
    "lv": "Më duket e njohur.",
    "level": "Sätze"
  },
  {
    "de": "Er hat eine Vorliebe für Literatur.",
    "lv": "Ka një dashuri të veçantë për letërsinë.",
    "level": "Sätze"
  },
  {
    "de": "Heute Vormittag.",
    "lv": "Sot në mëngjes. • Sot paradite.",
    "level": "Sätze"
  },
  {
    "de": "Von vorn.",
    "lv": "Nga përpara. • Nga fillimi.",
    "level": "Sätze"
  },
  {
    "de": "Nach vorn.",
    "lv": "Përpara.",
    "level": "Sätze"
  },
  {
    "de": "Von vornherein.",
    "lv": "Që në fillim.",
    "level": "Sätze"
  },
  {
    "de": "Im Vorteil sein.",
    "lv": "Të jesh në avantazh.",
    "level": "Sätze"
  },
  {
    "de": "Wach sein.",
    "lv": "Të jesh zgjuar.",
    "level": "Sätze"
  },
  {
    "de": "Wach werden.",
    "lv": "Të zgjohesh.",
    "level": "Sätze"
  },
  {
    "de": "Auf Wache sein.",
    "lv": "Të bësh roje.",
    "level": "Sätze"
  },
  {
    "de": "Während eines Jahres.",
    "lv": "Gjatë një viti.",
    "level": "Sätze"
  },
  {
    "de": "Während des Krieges.",
    "lv": "Gjatë luftës.",
    "level": "Sätze"
  },
  {
    "de": "Gegen eine Wand reden.",
    "lv": "T'i flasësh murit.",
    "level": "Sätze"
  },
  {
    "de": "Hier haben die Wände Ohren.",
    "lv": "Këtu edhe muret kanë veshë.",
    "level": "Sätze"
  },
  {
    "de": "Bis wann?",
    "lv": "Deri kur?",
    "level": "Sätze"
  },
  {
    "de": "Es ist warm.",
    "lv": "Bën ngrohtë.",
    "level": "Sätze"
  },
  {
    "de": "Auf eine Nachricht warten.",
    "lv": "Të presësh një mesazh.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie?",
    "lv": "Çfarë dëshironi?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein...?",
    "lv": "Ç'lloj...? • Çfarë...?",
    "level": "Sätze"
  },
  {
    "de": "Auf halbem Wege.",
    "lv": "Në gjysmë të rrugës.",
    "level": "Sätze"
  },
  {
    "de": "Auf diesem Wege.",
    "lv": "Në këtë mënyrë. • Me këto mjete.",
    "level": "Sätze"
  },
  {
    "de": "Auf friedlichem Wege.",
    "lv": "Në rrugë paqësore.",
    "level": "Sätze"
  },
  {
    "de": "Unserer Freundschaft wegen.",
    "lv": "Për hir të miqësisë sonë.",
    "level": "Sätze"
  },
  {
    "de": "Von Rechts wegen.",
    "lv": "Sipas ligjit. • Me të drejtë.",
    "level": "Sätze"
  },
  {
    "de": "Weh tun.",
    "lv": "Të ndiesh dhembje.",
    "level": "Sätze"
  },
  {
    "de": "Zu Weihnachten.",
    "lv": "Për Krishtlindje.",
    "level": "Sätze"
  },
  {
    "de": "Auf welche Weise?",
    "lv": "Në ç'mënyrë?",
    "level": "Sätze"
  },
  {
    "de": "Art und Weise.",
    "lv": "Mënyra.",
    "level": "Sätze"
  },
  {
    "de": "Ohne weiteres.",
    "lv": "Pa vonesë. • Pa vështirësi.",
    "level": "Sätze"
  },
  {
    "de": "Bis auf weiteres.",
    "lv": "Deri në njoftim të mëtejshëm.",
    "level": "Sätze"
  },
  {
    "de": "Und so weiter.",
    "lv": "E kështu me radhë.",
    "level": "Sätze"
  },
  {
    "de": "Weiter nichts.",
    "lv": "Asgjë tjetër.",
    "level": "Sätze"
  },
  {
    "de": "An welchem Tag?",
    "lv": "Në cilën ditë?",
    "level": "Sätze"
  },
  {
    "de": "Alle Welt.",
    "lv": "Gjithë bota. • Të gjithë.",
    "level": "Sätze"
  },
  {
    "de": "In wenigen Tagen.",
    "lv": "Pas pak ditësh.",
    "level": "Sätze"
  },
  {
    "de": "Zu wenig.",
    "lv": "Tepër pak.",
    "level": "Sätze"
  },
  {
    "de": "Wenn auch.",
    "lv": "Edhe pse.",
    "level": "Sätze"
  },
  {
    "de": "Wer da?",
    "lv": "Kush është aty?",
    "level": "Sätze"
  },
  {
    "de": "Gesammelte Werke von Schiller.",
    "lv": "Veprat e përmbledhura të Shilerit.",
    "level": "Sätze"
  },
  {
    "de": "Ausgewählte Werke.",
    "lv": "Vepra të zgjedhura.",
    "level": "Sätze"
  },
  {
    "de": "Er ist wert, dass...",
    "lv": "Ai e meriton që...",
    "level": "Sätze"
  },
  {
    "de": "Es ist zwei Euro wert.",
    "lv": "Vlen dy euro.",
    "level": "Sätze"
  },
  {
    "de": "Nach Westen.",
    "lv": "Drejt perëndimit.",
    "level": "Sätze"
  },
  {
    "de": "Von Westen.",
    "lv": "Nga perëndimi.",
    "level": "Sätze"
  },
  {
    "de": "In Wettbewerb treten.",
    "lv": "Të hysh në garë.",
    "level": "Sätze"
  },
  {
    "de": "Um die Wette laufen.",
    "lv": "Të bësh garë në vrapim.",
    "level": "Sätze"
  },
  {
    "de": "Was gilt die Wette?",
    "lv": "Për çfarë vëmë bast?",
    "level": "Sätze"
  },
  {
    "de": "Wie wird das Wetter?",
    "lv": "Si do të jetë koha?",
    "level": "Sätze"
  },
  {
    "de": "Wettkampf im Turnen.",
    "lv": "Garë gjimnastike.",
    "level": "Sätze"
  },
  {
    "de": "Wider meinen Willen.",
    "lv": "Kundër vullnetit tim.",
    "level": "Sätze"
  },
  {
    "de": "Widerspruch erheben.",
    "lv": "Të protestosh. • Të ngresh kundërshtime.",
    "level": "Sätze"
  },
  {
    "de": "Wie alt ist er?",
    "lv": "Sa vjeç është?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange?",
    "lv": "Sa kohë?",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiederhören!",
    "lv": "Mirë u dëgjofshim!",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiedersehen!",
    "lv": "Mirupafshim!",
    "level": "Sätze"
  },
  {
    "de": "Wilde Tiere.",
    "lv": "Kafshë të egra.",
    "level": "Sätze"
  },
  {
    "de": "Herzlich willkommen!",
    "lv": "Mirë se vini!",
    "level": "Sätze"
  },
  {
    "de": "Du musst ziehen.",
    "lv": "Është radha jote.",
    "level": "Sätze"
  },
  {
    "de": "Es zieht.",
    "lv": "Ka rrymë ajri.",
    "level": "Sätze"
  },
  {
    "de": "Ziemlich kalt.",
    "lv": "Mjaft ftohtë.",
    "level": "Sätze"
  },
  {
    "de": "Zipfel einer Wurst.",
    "lv": "Bishti i një suxhuku.",
    "level": "Sätze"
  },
  {
    "de": "Zu ihm gehen.",
    "lv": "Të shkosh tek ai.",
    "level": "Sätze"
  },
  {
    "de": "Zur Schule gehen.",
    "lv": "Të shkosh në shkollë.",
    "level": "Sätze"
  },
  {
    "de": "Zu Hause bleiben.",
    "lv": "Të rrish në shtëpi.",
    "level": "Sätze"
  },
  {
    "de": "Von Tag zu Tag.",
    "lv": "Nga dita në ditë.",
    "level": "Sätze"
  },
  {
    "de": "Zum Glück.",
    "lv": "Për fat.",
    "level": "Sätze"
  },
  {
    "de": "Wasser zum Trinken.",
    "lv": "Ujë për të pirë.",
    "level": "Sätze"
  },
  {
    "de": "Zu Fuß.",
    "lv": "Më këmbë.",
    "level": "Sätze"
  },
  {
    "de": "Zu Pferde.",
    "lv": "Me kalë.",
    "level": "Sätze"
  },
  {
    "de": "Zu Rad.",
    "lv": "Me biçikletë.",
    "level": "Sätze"
  },
  {
    "de": "Es hörte auf zu regnen.",
    "lv": "Pushoi shiu.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe noch viel zu tun.",
    "lv": "Kam ende shumë për të bërë.",
    "level": "Sätze"
  },
  {
    "de": "Zu früh.",
    "lv": "Tepër herët.",
    "level": "Sätze"
  },
  {
    "de": "Zu groß.",
    "lv": "Tepër i madh.",
    "level": "Sätze"
  },
  {
    "de": "Mit den Achseln zucken.",
    "lv": "Të ngresh supet.",
    "level": "Sätze"
  },
  {
    "de": "In einem Zug trinken.",
    "lv": "Të pish me një frymë.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde gehen.",
    "lv": "Të shkatërrohesh.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde legen.",
    "lv": "Të vësh në themel. • Të marrësh si bazë.",
    "level": "Sätze"
  },
  {
    "de": "Zum ersten Mal.",
    "lv": "Për herë të parë.",
    "level": "Sätze"
  },
  {
    "de": "Machen Sie bitte die Tür zu!",
    "lv": "Ju lutem, mbylleni derën!",
    "level": "Sätze"
  },
  {
    "de": "Er hat zugenommen.",
    "lv": "Është shëndoshur.",
    "level": "Sätze"
  },
  {
    "de": "Die Tage nehmen zu.",
    "lv": "Ditët po zgjaten.",
    "level": "Sätze"
  },
  {
    "de": "Zusammenhängen mit etwas.",
    "lv": "Të kesh lidhje me diçka.",
    "level": "Sätze"
  },
  {
    "de": "Die Tür ist zu.",
    "lv": "Dera është e mbyllur.",
    "level": "Sätze"
  },
  {
    "de": "Das hätte ich ihm nicht zugetraut.",
    "lv": "Nuk do ta kisha pritur këtë prej tij.",
    "level": "Sätze"
  },
  {
    "de": "Freier Zutritt.",
    "lv": "Hyrje e lirë.",
    "level": "Sätze"
  },
  {
    "de": "Zutritt verboten!",
    "lv": "Ndalohet hyrja!",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu viel!",
    "lv": "Kjo është tepër!",
    "level": "Sätze"
  },
  {
    "de": "Zuwider werden.",
    "lv": "Të bëhet i neveritshëm. • T'i bëhet i bezdisshëm dikujt.",
    "level": "Sätze"
  },
  {
    "de": "Und zwar.",
    "lv": "Domethënë.",
    "level": "Sätze"
  },
  {
    "de": "Es steht außer Zweifel.",
    "lv": "Është jashtë çdo dyshimi.",
    "level": "Sätze"
  },
  {
    "de": "Ohne Zweifel.",
    "lv": "Pa dyshim.",
    "level": "Sätze"
  },
  {
    "de": "Zum Zweiten.",
    "lv": "Së dyti.",
    "level": "Sätze"
  },
  {
    "de": "Frohes neues Jahr!",
    "lv": "Gëzuar Vitin e Ri!",
    "level": "Sätze"
  },
  {
    "de": "Herzlichen Glückwunsch zum Geburtstag!",
    "lv": "Gëzuar ditëlindjen!",
    "level": "Sätze"
  },
  {
    "de": "Gute Reise!",
    "lv": "Rrugë të mbarë!",
    "level": "Sätze"
  },
  {
    "de": "Es freut mich, Sie kennenzulernen.",
    "lv": "Më vjen mirë që ju njoh.",
    "level": "Sätze"
  },
  {
    "de": "Wären Sie bitte so nett?",
    "lv": "A do të ishit kaq i sjellshëm, ju lutem?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin Ihnen sehr dankbar.",
    "lv": "Ju jam shumë mirënjohës.",
    "level": "Sätze"
  },
  {
    "de": "Setzt euch bitte hin!",
    "lv": "Uluni, ju lutem!",
    "level": "Sätze"
  },
  {
    "de": "Ben, komm bitte an die Tafel!",
    "lv": "Ben, dil në dërrasë, të lutem!",
    "level": "Sätze"
  },
  {
    "de": "Schlagt bitte die Lehrbücher auf!",
    "lv": "Hapni tekstet, ju lutem!",
    "level": "Sätze"
  },
  {
    "de": "Geht bitte in die Sporthalle!",
    "lv": "Shkoni në sallën e sportit, ju lutem!",
    "level": "Sätze"
  },
  {
    "de": "Schläfst du noch?",
    "lv": "Po fle ende?",
    "level": "Sätze"
  },
  {
    "de": "Schlafen Sie noch?",
    "lv": "Po flini ende?",
    "level": "Sätze"
  },
  {
    "de": "Er ist fest eingeschlafen.",
    "lv": "Ka rënë në gjumë të thellë.",
    "level": "Sätze"
  },
  {
    "de": "Wecke ihn bitte auf, es ist schon spät!",
    "lv": "Zgjoje, të lutem, është bërë vonë!",
    "level": "Sätze"
  },
  {
    "de": "Es tut mir sehr leid!",
    "lv": "Më vjen shumë keq!",
    "level": "Sätze"
  },
  {
    "de": "Vielen Dank!",
    "lv": "Faleminderit shumë!",
    "level": "Sätze"
  },
  {
    "de": "Finn, fang bitte an!",
    "lv": "Fin, fillo, të lutem!",
    "level": "Sätze"
  },
  {
    "de": "Lest bitte mit!",
    "lv": "Ndiqni leximin, ju lutem!",
    "level": "Sätze"
  },
  {
    "de": "Emma, schau bitte nicht aus dem Fenster!",
    "lv": "Ema, mos shiko nga dritarja, të lutem!",
    "level": "Sätze"
  },
  {
    "de": "Jonas, bring bitte die Hefte!",
    "lv": "Jonas, sill fletoret, të lutem!",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte zurück an deinen Platz!",
    "lv": "Kthehu në vendin tënd, të lutem!",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb acht.",
    "lv": "Është ora shtatë e gjysmë.",
    "level": "Sätze"
  },
  {
    "de": "Wann wachst du gewöhnlich auf?",
    "lv": "Kur zgjohesh zakonisht?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe gleich auf.",
    "lv": "Ngrihem menjëherë.",
    "level": "Sätze"
  },
  {
    "de": "Steh auf, Hanna, es klingelt!",
    "lv": "Ngrihu, Hana, bie zilja e orës! • Ngrihu, Hana, dikush i bie ziles së derës!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich noch fünf Minuten schlafen!",
    "lv": "Lërmë të fle edhe pesë minuta!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss nicht, das Zimmer zu lüften!",
    "lv": "Mos harro ta ajrosësh dhomën!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist das Handtuch?",
    "lv": "Ku është peshqiri?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mir die Zähne putzen.",
    "lv": "Dua të laj dhëmbët.",
    "level": "Sätze"
  },
  {
    "de": "Mit was putzt du dir die Zähne?",
    "lv": "Me çfarë i lan dhëmbët?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mich anziehen.",
    "lv": "Dua të vishem.",
    "level": "Sätze"
  },
  {
    "de": "Zieh dich bitte schnell an!",
    "lv": "Vishu shpejt, të lutem!",
    "level": "Sätze"
  },
  {
    "de": "Kleide dich wärmer an, draußen ist es kühl.",
    "lv": "Vishu më trashë, jashtë bën freskët.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, wie geht es dir?",
    "lv": "Mirëmëngjesi, si je?",
    "level": "Sätze"
  },
  {
    "de": "Mir geht es gut, danke.",
    "lv": "Jam mirë, faleminderit.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es Neues?",
    "lv": "Çfarë ka të re?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein Chaos hier!",
    "lv": "Sa rrëmujë këtu!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich beim Aufräumen helfen?",
    "lv": "Mund të ndihmoj në rregullim?",
    "level": "Sätze"
  },
  {
    "de": "Was trinkst du morgens, Kaffee oder Tee?",
    "lv": "Çfarë pi në mëngjes, kafe apo çaj?",
    "level": "Sätze"
  },
  {
    "de": "Gewöhnlich trinke ich morgens eine Tasse Kaffee.",
    "lv": "Zakonisht në mëngjes pi një filxhan kafe.",
    "level": "Sätze"
  },
  {
    "de": "Am liebsten trinke ich schwarzen Kaffee.",
    "lv": "Më së shumti më pëlqen të pi kafe të zezë.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, hast du gut geschlafen?",
    "lv": "Mirëmëngjesi, a fjete mirë?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin noch sehr müde.",
    "lv": "Jam ende shumë i lodhur.",
    "level": "Sätze"
  },
  {
    "de": "Willst du Kaffee oder Milch?",
    "lv": "Do kafe apo qumësht?",
    "level": "Sätze"
  },
  {
    "de": "Gib mir bitte ein Brötchen mit Käse.",
    "lv": "Më jep, të lutem, një simite me djathë.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss jetzt los!",
    "lv": "Tani duhet të iki!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss dein Frühstück nicht!",
    "lv": "Mos e harro mëngjesin!",
    "level": "Sätze"
  },
  {
    "de": "Klara, deck bitte den Tisch!",
    "lv": "Klara, shtro tryezën, të lutem!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss die Servietten nicht!",
    "lv": "Mos i harro pecetat!",
    "level": "Sätze"
  },
  {
    "de": "Wann esst ihr zu Mittag?",
    "lv": "Kur hani drekë?",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit zu essen.",
    "lv": "Është koha për të ngrënë.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es heute zu Mittag?",
    "lv": "Çfarë ka për drekë sot?",
    "level": "Sätze"
  },
  {
    "de": "Wie schmeckt dir die Suppe?",
    "lv": "Si të duket supa?",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt ist sie etwas zu salzig.",
    "lv": "Për të thënë të drejtën, është pak tepër e kripur.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dir ein Stück Brot geben?",
    "lv": "A mund të të jap një copë bukë?",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich habe schon.",
    "lv": "Faleminderit, kam marrë tashmë.",
    "level": "Sätze"
  },
  {
    "de": "Das Fleisch schmeckt ausgezeichnet.",
    "lv": "Mishi ka shije të shkëlqyer.",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich bin schon satt.",
    "lv": "Faleminderit, tashmë jam ngopur.",
    "level": "Sätze"
  },
  {
    "de": "Heute haben wir Besuch.",
    "lv": "Sot kemi mysafirë.",
    "level": "Sätze"
  },
  {
    "de": "Bist du heute Abend frei?",
    "lv": "Je i lirë sonte?",
    "level": "Sätze"
  },
  {
    "de": "Komm doch heute zum Mittagessen vorbei!",
    "lv": "Eja sot te ne për drekë!",
    "level": "Sätze"
  },
  {
    "de": "Setzen wir uns an den Tisch.",
    "lv": "Le të ulemi në tryezë.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, bedien dich!",
    "lv": "Urdhëro, shërbehu!",
    "level": "Sätze"
  },
  {
    "de": "Stört dich das Rauchen?",
    "lv": "Të shqetëson pirja e duhanit?",
    "level": "Sätze"
  },
  {
    "de": "Danke für die nette Aufnahme!",
    "lv": "Faleminderit për pritjen e përzemërt!",
    "level": "Sätze"
  },
  {
    "de": "Wann gehst du ins Bett?",
    "lv": "Kur shkon të flesh?",
    "level": "Sätze"
  },
  {
    "de": "Wenn ich von der Arbeit komme, bin ich immer müde.",
    "lv": "Kur kthehem nga puna, jam gjithmonë i lodhur.",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, ins Bett zu gehen.",
    "lv": "Është koha për të fjetur.",
    "level": "Sätze"
  },
  {
    "de": "Es ist schönes Wetter.",
    "lv": "Është mot i bukur.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mit mir spazieren gehen?",
    "lv": "Dëshiron të dalësh për shëtitje me mua?",
    "level": "Sätze"
  },
  {
    "de": "Sieh mal, es wird gleich regnen.",
    "lv": "Shiko, tani do të bjerë shi.",
    "level": "Sätze"
  },
  {
    "de": "Nimm den Regenschirm mit!",
    "lv": "Merr çadrën me vete!",
    "level": "Sätze"
  },
  {
    "de": "Es regnet.",
    "lv": "Bie shi.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin schon ganz nass.",
    "lv": "Tashmë jam bërë qull.",
    "level": "Sätze"
  },
  {
    "de": "Glaubst du, dass es den ganzen Tag regnen wird?",
    "lv": "Mendon se do të bjerë shi gjithë ditën?",
    "level": "Sätze"
  },
  {
    "de": "Es hört auf zu regnen.",
    "lv": "Shiu po pushon.",
    "level": "Sätze"
  },
  {
    "de": "Die Sonne scheint wieder.",
    "lv": "Dielli ndriçon përsëri.",
    "level": "Sätze"
  },
  {
    "de": "Es ist sehr warm.",
    "lv": "Bën shumë ngrohtë.",
    "level": "Sätze"
  },
  {
    "de": "Es sieht nach Regen aus.",
    "lv": "Duket sikur do të bjerë shi.",
    "level": "Sätze"
  },
  {
    "de": "Wir bekommen gleich ein Gewitter.",
    "lv": "Tani do të fillojë një shtrëngatë.",
    "level": "Sätze"
  },
  {
    "de": "Das Gewitter zieht vorüber.",
    "lv": "Shtrëngata po kalon.",
    "level": "Sätze"
  },
  {
    "de": "Die Wolken verziehen sich.",
    "lv": "Retë po shpërndahen.",
    "level": "Sätze"
  },
  {
    "de": "Siehst du den Regenbogen?",
    "lv": "E sheh ylberin?",
    "level": "Sätze"
  },
  {
    "de": "Der Winter ist da, es hat geschneit.",
    "lv": "Erdhi dimri, ka rënë borë.",
    "level": "Sätze"
  },
  {
    "de": "Es schneit.",
    "lv": "Bie borë.",
    "level": "Sätze"
  },
  {
    "de": "Wie schön ist es im Wald im Winter!",
    "lv": "Sa bukur është në pyll në dimër!",
    "level": "Sätze"
  },
  {
    "de": "Mir ist kalt, ich friere.",
    "lv": "Kam ftohtë, po mërdhij.",
    "level": "Sätze"
  },
  {
    "de": "Draußen ist Glatteis, pass auf!",
    "lv": "Jashtë ka akull, ki kujdes!",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir auf die Eisbahn gehen?",
    "lv": "Shkojmë në pistën e patinazhit?",
    "level": "Sätze"
  },
  {
    "de": "Zieh die Jacke an, du kannst dich erkälten.",
    "lv": "Vish xhaketën, se mund të ftohesh.",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb sieben.",
    "lv": "Është ora gjashtë e gjysmë.",
    "level": "Sätze"
  },
  {
    "de": "Meine Uhr geht fünf Minuten vor.",
    "lv": "Ora ime shkon pesë minuta përpara.",
    "level": "Sätze"
  },
  {
    "de": "Weck mich morgen früh um sieben Uhr!",
    "lv": "Më zgjo nesër në mëngjes në orën shtatë!",
    "level": "Sätze"
  },
  {
    "de": "Was ist heute für ein Datum?",
    "lv": "Çfarë date kemi sot?",
    "level": "Sätze"
  },
  {
    "de": "Heute ist der elfte Juli.",
    "lv": "Sot është njëmbëdhjetë korrik.",
    "level": "Sätze"
  },
  {
    "de": "Was machst du gewöhnlich am Abend?",
    "lv": "Çfarë bën zakonisht në mbrëmje?",
    "level": "Sätze"
  },
  {
    "de": "Es ist schon lange her, dass wir uns gesehen haben.",
    "lv": "Ka shumë kohë që nuk jemi parë.",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es dir?",
    "lv": "Si je?",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, ich möchte etwas mit dir besprechen.",
    "lv": "Më fal, dua të flas për diçka me ty.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir spazieren!",
    "lv": "Le të dalim për shëtitje!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Lust, mit mir in den Park zu gehen?",
    "lv": "Ke dëshirë të vish me mua në park?",
    "level": "Sätze"
  },
  {
    "de": "Ich komme, um dich zum Spaziergang abzuholen.",
    "lv": "Vij të të marr për shëtitje.",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte etwas langsamer, ich kann dir nicht folgen!",
    "lv": "Ec pak më ngadalë, të lutem, nuk të arrij dot!",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zum ersten Mal in dieser Gegend.",
    "lv": "Jam për herë të parë në këtë zonë.",
    "level": "Sätze"
  },
  {
    "de": "Ruhen wir uns ein wenig aus.",
    "lv": "Le të pushojmë pak.",
    "level": "Sätze"
  },
  {
    "de": "Jetzt können wir zurückgehen.",
    "lv": "Tani mund të kthehemi.",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt bin ich ziemlich müde.",
    "lv": "Për të thënë të drejtën, jam mjaft i lodhur.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, wo ist die nächste U-Bahn-Station?",
    "lv": "Më fal, ku është stacioni më i afërt i metrosë?",
    "level": "Sätze"
  },
  {
    "de": "Welcher ist der kürzeste Weg?",
    "lv": "Cila është rruga më e shkurtër?",
    "level": "Sätze"
  },
  {
    "de": "Geh hier die zweite Straße links und dann immer geradeaus.",
    "lv": "Këtu merr rrugën e dytë majtas dhe pastaj vazhdo gjithmonë drejt.",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich am schnellsten zum Bahnhof?",
    "lv": "Si mund të arrij sa më shpejt në stacionin e trenit?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe vor, morgen zu verreisen.",
    "lv": "Kam në plan të udhëtoj nesër.",
    "level": "Sätze"
  },
  {
    "de": "Wohin willst du fahren?",
    "lv": "Ku do të shkosh?",
    "level": "Sätze"
  },
  {
    "de": "Reist du geschäftlich oder privat?",
    "lv": "Udhëton për punë apo për arsye personale?",
    "level": "Sätze"
  },
  {
    "de": "Finn fährt bis Berlin mit, dann geht er ans Meer.",
    "lv": "Fini udhëton me ne deri në Berlin, pastaj shkon në det.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt das Schiff ab?",
    "lv": "Kur niset anija?",
    "level": "Sätze"
  },
  {
    "de": "In einer halben Stunde.",
    "lv": "Pas gjysmë ore.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich noch eine Kabine bekommen?",
    "lv": "A mund të marr ende një kabinë?",
    "level": "Sätze"
  },
  {
    "de": "Vergiss deinen Pass nicht!",
    "lv": "Mos e harro pasaportën!",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, den Koffer zu packen.",
    "lv": "Është koha për të bërë valixhen.",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt um halb sieben ab.",
    "lv": "Treni niset në gjashtë e gjysmë.",
    "level": "Sätze"
  },
  {
    "de": "Hol mir bitte ein Taxi, ich verpasse sonst den Zug!",
    "lv": "Më thirr një taksi, të lutem, përndryshe do ta humbas trenin!",
    "level": "Sätze"
  },
  {
    "de": "Fahr bitte zum Bahnhof!",
    "lv": "Më ço në stacion, të lutem!",
    "level": "Sätze"
  },
  {
    "de": "Ich muss mich beeilen.",
    "lv": "Duhet të nxitoj.",
    "level": "Sätze"
  },
  {
    "de": "Ist der Schalter schon offen?",
    "lv": "A është hapur tashmë sporteli?",
    "level": "Sätze"
  },
  {
    "de": "Eine Fahrkarte nach Köln, bitte.",
    "lv": "Një biletë për në Këln, ju lutem.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt der Zug ab?",
    "lv": "Kur niset treni?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt gleich ab.",
    "lv": "Treni po niset.",
    "level": "Sätze"
  },
  {
    "de": "Muss ich in Koblenz umsteigen?",
    "lv": "A duhet të ndërroj tren në Koblenc?",
    "level": "Sätze"
  },
  {
    "de": "Ja, dort musst du umsteigen.",
    "lv": "Po, atje duhet të ndërrosh tren.",
    "level": "Sätze"
  },
  {
    "de": "Ist dieser Platz frei?",
    "lv": "A është i lirë ky vend?",
    "level": "Sätze"
  },
  {
    "de": "Nein, hier sitzt niemand.",
    "lv": "Jo, këtu nuk rri askush.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der Bahnsteigkartenautomat?",
    "lv": "Ku është automati i biletave të peronit?",
    "level": "Sätze"
  },
  {
    "de": "Stell mein Handgepäck ins Gepäcknetz.",
    "lv": "Vendose bagazhin tim të dorës në raftin e bagazheve.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das Fenster aufmachen?",
    "lv": "A mund ta hap dritaren?",
    "level": "Sätze"
  },
  {
    "de": "Es zieht, schließ bitte das Fenster!",
    "lv": "Ka rrymë ajri, mbylle dritaren, të lutem!",
    "level": "Sätze"
  },
  {
    "de": "Welche ist die nächste Station?",
    "lv": "Cili është stacioni tjetër?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange hält der Zug?",
    "lv": "Sa kohë ndalon treni?",
    "level": "Sätze"
  },
  {
    "de": "Wo muss ich umsteigen?",
    "lv": "Ku duhet të ndërroj tren?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug hat Verspätung.",
    "lv": "Treni ka vonesë.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Wagen ist für Nichtraucher.",
    "lv": "Ky vagon është për ata që nuk pinë duhan.",
    "level": "Sätze"
  },
  {
    "de": "Wir fahren jetzt über die Grenze.",
    "lv": "Tani po kalojmë kufirin.",
    "level": "Sätze"
  },
  {
    "de": "Hast du etwas zu verzollen?",
    "lv": "A ke diçka për të deklaruar në doganë?",
    "level": "Sätze"
  },
  {
    "de": "Wir sind in Berlin angekommen.",
    "lv": "Kemi arritur në Berlin.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir ein gutes Hotel empfehlen?",
    "lv": "A mund të më rekomandosh një hotel të mirë?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie freie Zimmer?",
    "lv": "A keni dhoma të lira?",
    "level": "Sätze"
  },
  {
    "de": "Ein Zimmer mit zwei Betten, bitte.",
    "lv": "Një dhomë me dy shtretër, ju lutem.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Zimmer pro Nacht?",
    "lv": "Sa kushton dhoma për një natë?",
    "level": "Sätze"
  },
  {
    "de": "Morgen reise ich ab. Weck mich um sieben Uhr!",
    "lv": "Nesër nisem. Më zgjo në orën shtatë!",
    "level": "Sätze"
  },
  {
    "de": "Die Rechnung, bitte!",
    "lv": "Llogarinë, ju lutem!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Stadtbibliothek?",
    "lv": "Ku është biblioteka e qytetit?",
    "level": "Sätze"
  },
  {
    "de": "Wann hat das Museum geöffnet?",
    "lv": "Kur është i hapur muzeu?",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir ins Museum gehen?",
    "lv": "Të shkojmë në muze?",
    "level": "Sätze"
  },
  {
    "de": "Fahren wir mit dem Bus oder der U-Bahn?",
    "lv": "A shkojmë me autobus apo me metro?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die nächste Bushaltestelle?",
    "lv": "Ku është stacioni më i afërt i autobusit?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe großen Hunger.",
    "lv": "Kam shumë uri.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir zusammen essen?",
    "lv": "A shkojmë të hamë bashkë?",
    "level": "Sätze"
  },
  {
    "de": "Kellner, die Speisekarte, bitte!",
    "lv": "Kamerier, listën e gjellëve, ju lutem!",
    "level": "Sätze"
  },
  {
    "de": "Ist der Fisch frisch?",
    "lv": "A është i freskët peshku?",
    "level": "Sätze"
  },
  {
    "de": "Das schmeckt ausgezeichnet!",
    "lv": "Kjo ka shije të shkëlqyer!",
    "level": "Sätze"
  },
  {
    "de": "Kellner, zahlen bitte!",
    "lv": "Kamerier, dua të paguaj, ju lutem!",
    "level": "Sätze"
  },
  {
    "de": "Ich gehe ins Café einen Kaffee trinken.",
    "lv": "Po shkoj në kafene të pi një kafe.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mitkommen?",
    "lv": "Do të vish me mua?",
    "level": "Sätze"
  },
  {
    "de": "Eine Tasse Kaffee mit Milch, bitte!",
    "lv": "Një filxhan kafe me qumësht, ju lutem!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneller, ich habe es eilig!",
    "lv": "Më shpejt, ju lutem, se jam me nxitim!",
    "level": "Sätze"
  },
  {
    "de": "Lass deinen Kaffee nicht kalt werden!",
    "lv": "Mos e lër kafen të ftohet!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie etwas Erfrischendes?",
    "lv": "A keni diçka freskuese?",
    "level": "Sätze"
  },
  {
    "de": "Eine Portion Eis, bitte!",
    "lv": "Një porcion akullore, ju lutem!",
    "level": "Sätze"
  },
  {
    "de": "Heute Morgen habe ich einen Brief bekommen.",
    "lv": "Sot në mëngjes mora një letër.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss ihm gleich schreiben.",
    "lv": "Duhet t'i shkruaj menjëherë.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der nächste Briefkasten?",
    "lv": "Ku është kutia postare më e afërt?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Post?",
    "lv": "Ku është posta?",
    "level": "Sätze"
  },
  {
    "de": "Erinnere mich morgen daran, zu schreiben!",
    "lv": "Më kujto nesër të shkruaj!",
    "level": "Sätze"
  },
  {
    "de": "Werfen Sie bitte diesen Brief in den Briefkasten.",
    "lv": "Ju lutem, hidheni këtë letër në kutinë postare.",
    "level": "Sätze"
  },
  {
    "de": "Hallo, hier spricht Emma.",
    "lv": "Alo, jam Ema.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich dich später anrufen?",
    "lv": "A mund të të telefonoj më vonë?",
    "level": "Sätze"
  },
  {
    "de": "Muss ich lange warten?",
    "lv": "A duhet të pres gjatë?",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneiden Sie mir die Haare.",
    "lv": "Ju lutem, m'i prisni flokët.",
    "level": "Sätze"
  },
  {
    "de": "Hinten bitte nicht zu kurz.",
    "lv": "Prapa, ju lutem, jo shumë shkurt.",
    "level": "Sätze"
  },
  {
    "de": "Wann beginnt die Vorstellung?",
    "lv": "Kur fillon shfaqja?",
    "level": "Sätze"
  },
  {
    "de": "Es fängt um halb acht an.",
    "lv": "Fillon në shtatë e gjysmë.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind ausverkauft.",
    "lv": "Të gjitha vendet janë shitur.",
    "level": "Sätze"
  },
  {
    "de": "Drei Karten, bitte!",
    "lv": "Tri bileta, ju lutem!",
    "level": "Sätze"
  },
  {
    "de": "Wir lassen die Jacken in der Garderobe.",
    "lv": "Xhaketat i lëmë në gardërobë.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schnell, der Vorhang geht gleich auf!",
    "lv": "Shpejt, ju lutem, perdja po ngrihet!",
    "level": "Sätze"
  },
  {
    "de": "Der Vorhang fällt.",
    "lv": "Perdja bie.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dich zum Tanz bitten?",
    "lv": "A mund të të ftoj për një valle?",
    "level": "Sätze"
  },
  {
    "de": "Wann ist eure Hochzeit?",
    "lv": "Kur është dasma juaj?",
    "level": "Sätze"
  },
  {
    "de": "Ich suche eine Wohnung.",
    "lv": "Po kërkoj një apartament.",
    "level": "Sätze"
  },
  {
    "de": "Ist in diesem Haus eine Wohnung frei?",
    "lv": "A ka ndonjë apartament të lirë në këtë pallat?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet die Miete?",
    "lv": "Sa është qiraja?",
    "level": "Sätze"
  },
  {
    "de": "Die Wohnung hat drei Zimmer und eine Küche.",
    "lv": "Apartamenti ka tri dhoma dhe një kuzhinë.",
    "level": "Sätze"
  },
  {
    "de": "Heute ziehen wir um.",
    "lv": "Sot shpërngulemi.",
    "level": "Sätze"
  },
  {
    "de": "Mia, pack die Sachen bitte in Kisten!",
    "lv": "Mia, futi gjërat në kuti, të lutem!",
    "level": "Sätze"
  },
  {
    "de": "Hast du alles eingepackt?",
    "lv": "I ke paketuar të gjitha?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe mit meinem Freund in Kontakt.",
    "lv": "Jam në kontakt me mikun tim.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir ins Theater?",
    "lv": "A shkojmë në teatër?",
    "level": "Sätze"
  },
  {
    "de": "Ist alles eingeladen?",
    "lv": "A është ngarkuar gjithçka?",
    "level": "Sätze"
  },
  {
    "de": "Welch schöne Aussicht!",
    "lv": "Çfarë pamje e bukur!",
    "level": "Sätze"
  },
  {
    "de": "Nun können wir alles wieder aufräumen.",
    "lv": "Tani mund t'i rregullojmë përsëri të gjitha.",
    "level": "Sätze"
  },
  {
    "de": "Wie viele Zimmer habt ihr?",
    "lv": "Sa dhoma keni?",
    "level": "Sätze"
  },
  {
    "de": "Im Sommer fahre ich ans Meer.",
    "lv": "Në verë do të shkoj në det.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du schwimmen?",
    "lv": "A di të notosh?",
    "level": "Sätze"
  },
  {
    "de": "Schwimm nicht zu weit hinaus!",
    "lv": "Mos noto shumë larg!",
    "level": "Sätze"
  },
  {
    "de": "Badest du jeden Tag?",
    "lv": "A lahesh në det çdo ditë?",
    "level": "Sätze"
  },
  {
    "de": "Bei schönem Wetter gehe ich angeln.",
    "lv": "Kur bën kohë e mirë, shkoj për peshk.",
    "level": "Sätze"
  },
  {
    "de": "Wie sieht er aus?",
    "lv": "Si duket?",
    "level": "Sätze"
  },
  {
    "de": "Er hat sich aber recht verändert.",
    "lv": "Ka ndryshuar vërtet mjaft.",
    "level": "Sätze"
  },
  {
    "de": "Wie ist er als Mensch?",
    "lv": "Si është ai si njeri?",
    "level": "Sätze"
  },
  {
    "de": "Er ist immer nett und freundlich.",
    "lv": "Është gjithmonë i këndshëm dhe i sjellshëm.",
    "level": "Sätze"
  },
  {
    "de": "Ich fühle mich nicht wohl.",
    "lv": "Nuk ndihem mirë.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe starke Kopfschmerzen.",
    "lv": "Kam dhimbje të forta koke.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe mich erkältet.",
    "lv": "Jam ftohur.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Schnupfen.",
    "lv": "Kam rrufë.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist schwindlig.",
    "lv": "Më merren mendtë.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Arzt gehen.",
    "lv": "Duhet të shkoj te mjeku.",
    "level": "Sätze"
  },
  {
    "de": "Leg dich ins Bett!",
    "lv": "Shtrihu në shtrat!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Fieber?",
    "lv": "A ke temperaturë?",
    "level": "Sätze"
  },
  {
    "de": "Gestern hatte ich erhöhte Temperatur.",
    "lv": "Dje kisha pak temperaturë.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Zahnschmerzen.",
    "lv": "Më dhemb dhëmbi.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Zahnarzt gehen.",
    "lv": "Duhet të shkoj te dentisti.",
    "level": "Sätze"
  },
  {
    "de": "Weißt du, dass Finn krank ist?",
    "lv": "A e di që Fini është i sëmurë?",
    "level": "Sätze"
  },
  {
    "de": "Laut Arzt wird er bald wieder gesund.",
    "lv": "Sipas mjekut, ai do të shërohet së shpejti.",
    "level": "Sätze"
  },
  {
    "de": "Ich will meine Wohnung neu möblieren.",
    "lv": "Dua ta mobiloj nga e para banesën time.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das auf Raten kaufen?",
    "lv": "A mund ta blej këtë me këste?",
    "level": "Sätze"
  },
  {
    "de": "Bleib im Bett, bis es dir besser geht!",
    "lv": "Rri në shtrat derisa të ndihesh më mirë!",
    "level": "Sätze"
  },
  {
    "de": "Noah hat in zwei Wochen schwimmen gelernt.",
    "lv": "Noa mësoi të notonte për dy javë.",
    "level": "Sätze"
  },
  {
    "de": "Sei mit dem Essen noch vorsichtig.",
    "lv": "Ki ende kujdes me ushqimin.",
    "level": "Sätze"
  },
  {
    "de": "Sprichst du Deutsch?",
    "lv": "Flet gjermanisht?",
    "level": "Sätze"
  },
  {
    "de": "Ja, ein bisschen.",
    "lv": "Po, pak.",
    "level": "Sätze"
  },
  {
    "de": "Du sprichst ziemlich fließend.",
    "lv": "Flet mjaft rrjedhshëm.",
    "level": "Sätze"
  },
  {
    "de": "Wo hast du Deutsch gelernt?",
    "lv": "Ku e mësove gjermanishten?",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme seit einem Jahr Deutschstunden.",
    "lv": "Prej një viti marr mësime gjermanishteje.",
    "level": "Sätze"
  },
  {
    "de": "Ich suche immer Gelegenheit, Deutsch zu sprechen.",
    "lv": "Gjithmonë kërkoj rast për të folur gjermanisht.",
    "level": "Sätze"
  },
  {
    "de": "Ist das Buch noch vorrätig?",
    "lv": "A gjendet ende libri?",
    "level": "Sätze"
  },
  {
    "de": "Das Buch ist leider ausverkauft.",
    "lv": "Për fat të keq, libri është shitur krejt.",
    "level": "Sätze"
  },
  {
    "de": "Wann erscheint die neue Auflage?",
    "lv": "Kur del botimi i ri?",
    "level": "Sätze"
  },
  {
    "de": "Womit kann ich Ihnen helfen?",
    "lv": "Me çfarë mund t'ju ndihmoj?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie ganz frische Eier?",
    "lv": "A keni vezë shumë të freskëta?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die?",
    "lv": "Sa kushtojnë?",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu teuer.",
    "lv": "Është tepër shtrenjtë.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir ein halbes Kilo abwiegen?",
    "lv": "A mund të më peshoni gjysmë kilogrami?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel muss ich zahlen?",
    "lv": "Sa duhet të paguaj?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet das Kilo?",
    "lv": "Sa kushton kilogrami?",
    "level": "Sätze"
  },
  {
    "de": "Wiegen Sie mir bitte zwei Kilo ab.",
    "lv": "Më peshoni, ju lutem, dy kilogramë.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch Karotten?",
    "lv": "A keni edhe karota?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie gutes Rindfleisch?",
    "lv": "A keni mish viçi të mirë?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir zwei Kilo Hackfleisch.",
    "lv": "Më jepni dy kilogramë mish të grirë.",
    "level": "Sätze"
  },
  {
    "de": "Ein Laib Brot, bitte, aber nicht zu knusprig.",
    "lv": "Një bukë, ju lutem, por jo me kore shumë të fortë.",
    "level": "Sätze"
  },
  {
    "de": "Das Brot ist frisch gebacken.",
    "lv": "Buka sapo është pjekur.",
    "level": "Sätze"
  },
  {
    "de": "Was für Obst haben Sie heute?",
    "lv": "Çfarë frutash keni sot?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die Äpfel?",
    "lv": "Sa kushtojnë mollët?",
    "level": "Sätze"
  },
  {
    "de": "Dann nehme ich zwei Kilo Äpfel.",
    "lv": "Atëherë po marr dy kilogramë mollë.",
    "level": "Sätze"
  },
  {
    "de": "Die Birnen sind sehr teuer.",
    "lv": "Dardhat janë shumë të shtrenjta.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir alles nach Hause liefern?",
    "lv": "A mund të m'i dërgoni të gjitha në shtëpi?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie Reis?",
    "lv": "A keni oriz?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir bitte ein Kilo Reis.",
    "lv": "Më jepni, ju lutem, një kilogram oriz.",
    "level": "Sätze"
  },
  {
    "de": "Danke, diesmal nicht.",
    "lv": "Faleminderit, këtë herë jo.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet dieser Teppich?",
    "lv": "Sa kushton ky qilim?",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Möbel in meine Wohnung liefern?",
    "lv": "A mund t'i dërgoni mobiliet në banesën time?",
    "level": "Sätze"
  },
  {
    "de": "Bitte an der Kasse zahlen.",
    "lv": "Ju lutem, paguani në arkë.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, machen Sie die Rechnung.",
    "lv": "Ju lutem, ma bëni faturën.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Meter?",
    "lv": "Sa kushton metri?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Stoff gefällt mir.",
    "lv": "Ky stof më pëlqen.",
    "level": "Sätze"
  },
  {
    "de": "Schneiden Sie mir bitte drei Meter ab.",
    "lv": "Më prisni, ju lutem, tre metra.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch andere Muster?",
    "lv": "A keni edhe modele të tjera? • A keni edhe mostra të tjera?",
    "level": "Sätze"
  },
  {
    "de": "Diese Farbe gefällt mir nicht.",
    "lv": "Kjo ngjyrë nuk më pëlqen.",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir eine hellere.",
    "lv": "Më jepni një më të çelët.",
    "level": "Sätze"
  },
  {
    "de": "Was kosten diese Socken?",
    "lv": "Sa kushtojnë këto çorape?",
    "level": "Sätze"
  },
  {
    "de": "Welche Handschuhe wünschen Sie?",
    "lv": "Çfarë dorezash dëshironi?",
    "level": "Sätze"
  },
  {
    "de": "Die sind mir etwas zu eng.",
    "lv": "Më rrinë pak si tepër të ngushta.",
    "level": "Sätze"
  },
  {
    "de": "So, nun passen sie gut.",
    "lv": "Ja, tani rrinë mirë.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir einen guten Schneider empfehlen?",
    "lv": "A mund të më rekomandosh një rrobaqepës të mirë?",
    "level": "Sätze"
  },
  {
    "de": "Ich will einen Anzug bestellen.",
    "lv": "Dua të porosis një kostum.",
    "level": "Sätze"
  },
  {
    "de": "Wann wird er fertig sein?",
    "lv": "Kur do të jetë gati?",
    "level": "Sätze"
  },
  {
    "de": "Der Anzug sitzt gut.",
    "lv": "Kostumi rri mirë.",
    "level": "Sätze"
  },
  {
    "de": "Die Hose ist zu lang.",
    "lv": "Pantallonat janë tepër të gjata.",
    "level": "Sätze"
  },
  {
    "de": "Bitte reinigen und bügeln Sie ihn!",
    "lv": "Ju lutem, ma pastroni dhe ma hekurosni!",
    "level": "Sätze"
  },
  {
    "de": "Wann wird das Kleid fertig sein?",
    "lv": "Kur do të jetë gati fustani?",
    "level": "Sätze"
  },
  {
    "de": "Die Schuhe sind zu eng.",
    "lv": "Këpucët janë tepër të ngushta.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Schuhe heute reparieren?",
    "lv": "A mund t'i rregulloni këpucët sot?",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich die Schuhe abholen?",
    "lv": "Kur mund t'i marr këpucët?",
    "level": "Sätze"
  },
  {
    "de": "Meine Armbanduhr funktioniert nicht.",
    "lv": "Ora ime e dorës nuk punon.",
    "level": "Sätze"
  },
  {
    "de": "Sie geht fünf Minuten vor.",
    "lv": "Shkon pesë minuta përpara.",
    "level": "Sätze"
  },
  {
    "de": "Bist du kurzsichtig oder weitsichtig?",
    "lv": "Je dritëshkurtër apo dritëgjatë?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte eine Brille kaufen.",
    "lv": "Do të doja të blija një palë syze.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie meine Brille reparieren?",
    "lv": "A mund t'i rregulloni syzet e mia?",
    "level": "Sätze"
  },
  {
    "de": "Das dauert nur eine Viertelstunde.",
    "lv": "Kjo zgjat vetëm një çerek ore.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist mir zu hoch.",
    "lv": "Çmimi është tepër i lartë për mua.",
    "level": "Sätze"
  },
  {
    "de": "Ich brauche zwei Fotos für meinen Pass.",
    "lv": "Më duhen dy fotografi për pasaportën.",
    "level": "Sätze"
  },
  {
    "de": "Bitte packen Sie es ein und schicken Sie es mir nach Hause.",
    "lv": "Ju lutem, mbështilleni dhe ma dërgoni në shtëpi.",
    "level": "Sätze"
  },
  {
    "de": "Wir haben feste Preise.",
    "lv": "Kemi çmime fikse.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, fotografieren Sie mich.",
    "lv": "Ju lutem, më bëni një fotografi.",
    "level": "Sätze"
  },
  {
    "de": "Setzen Sie sich, schauen Sie gerade in die Kamera und bewegen Sie sich nicht!",
    "lv": "Uluni, shikoni drejt në aparat dhe mos lëvizni!",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich das Probebild sehen?",
    "lv": "Kur mund ta shoh fotografinë e provës?",
    "level": "Sätze"
  },
  {
    "de": "Wann sind die Fotos fertig?",
    "lv": "Kur do të jenë gati fotografitë?",
    "level": "Sätze"
  },
  {
    "de": "Die Aufnahme ist gelungen.",
    "lv": "Fotografia doli mirë.",
    "level": "Sätze"
  },
  {
    "de": "Die Fotos sind gut geworden.",
    "lv": "Fotografitë kanë dalë mirë.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie das Foto auch vergrößern?",
    "lv": "A mund ta zmadhoni edhe fotografinë?",
    "level": "Sätze"
  },
  {
    "de": "Sind diese Steine echt?",
    "lv": "A janë të vërtetë këta gurë?",
    "level": "Sätze"
  },
  {
    "de": "Ist das echtes Gold?",
    "lv": "A është ar i vërtetë?",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir bitte Trauringe.",
    "lv": "Më tregoni, ju lutem, unaza martese.",
    "level": "Sätze"
  },
  {
    "de": "Der Ring ist mir etwas zu weit.",
    "lv": "Unaza më rri pak e gjerë.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann ihn enger machen.",
    "lv": "Mund ta ngushtoj.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Ring passt mir.",
    "lv": "Kjo unazë më rri mirë.",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir schöne Geschenkideen.",
    "lv": "Më tregoni ide të bukura për dhurata.",
    "level": "Sätze"
  },
  {
    "de": "Wie gefallen dir diese Ohrringe?",
    "lv": "Si të pëlqejnë këta vathë?",
    "level": "Sätze"
  },
  {
    "de": "Diese Brosche ist wirklich schön.",
    "lv": "Kjo karficë është vërtet e bukur.",
    "level": "Sätze"
  },
  {
    "de": "Der Stein ist ein Saphir.",
    "lv": "Guri është safir.",
    "level": "Sätze"
  },
  {
    "de": "Das ist kein echter Stein, das ist Glas.",
    "lv": "Ky nuk është gur i vërtetë, është xham.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Armband kann ich Ihnen besonders empfehlen.",
    "lv": "Këtë byzylyk mund t'jua rekomandoj veçanërisht.",
    "level": "Sätze"
  },
  {
    "de": "Es ist besonders schön gearbeitet.",
    "lv": "Është punuar veçanërisht bukur.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist nicht hoch.",
    "lv": "Çmimi nuk është i lartë.",
    "level": "Sätze"
  },
  {
    "de": "Bekomme ich die Schachtel gratis?",
    "lv": "A e marr kutinë falas?",
    "level": "Sätze"
  },
  {
    "de": "Alle Schmuckstücke sind gestempelt.",
    "lv": "Të gjitha stolitë janë të vulosura.",
    "level": "Sätze"
  },
  {
    "de": "Falls es meiner Frau nicht gefällt, kann ich es umtauschen?",
    "lv": "Nëse gruas sime nuk i pëlqen, a mund ta ndërroj?",
    "level": "Sätze"
  },
  {
    "de": "Natürlich, jederzeit.",
    "lv": "Sigurisht, në çdo kohë.",
    "level": "Sätze"
  }
];

window.SENTENCE_ENTRIES = SENTENCE_ENTRIES;

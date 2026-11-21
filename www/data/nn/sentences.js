const SENTENCE_ENTRIES = [
  {
    "de": "Hüte dich davor!",
    "lv": "Pass deg for det!",
    "level": "Sätze"
  },
  {
    "de": "Wenn nichts dazwischenkommt.",
    "lv": "Viss ingenting kjem i vegen. • Viss alt går etter planen.",
    "level": "Sätze"
  },
  {
    "de": "Das kann ich mir denken!",
    "lv": "Det kan eg tenke meg!",
    "level": "Sätze"
  },
  {
    "de": "Ist er denn krank?",
    "lv": "Er han sjuk, då?",
    "level": "Sätze"
  },
  {
    "de": "Was denn?",
    "lv": "Kva då?",
    "level": "Sätze"
  },
  {
    "de": "Desto mehr.",
    "lv": "Desto meir.",
    "level": "Sätze"
  },
  {
    "de": "Je mehr, desto besser.",
    "lv": "Jo meir, desto betre.",
    "level": "Sätze"
  },
  {
    "de": "Alles deutet auf Regen.",
    "lv": "Alt tyder på regn.",
    "level": "Sätze"
  },
  {
    "de": "Damit ist mir wenig gedient.",
    "lv": "Det har eg lite nytte av.",
    "level": "Sätze"
  },
  {
    "de": "Er ist dienstlich verhindert.",
    "lv": "Han er forhindra på grunn av jobben.",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie doch!",
    "lv": "Snakk då!",
    "level": "Sätze"
  },
  {
    "de": "Es donnert.",
    "lv": "Det torar.",
    "level": "Sätze"
  },
  {
    "de": "Doppelt so groß.",
    "lv": "Dobbelt så stor.",
    "level": "Sätze"
  },
  {
    "de": "Von dort.",
    "lv": "Derfrå.",
    "level": "Sätze"
  },
  {
    "de": "Die Zeit drängt.",
    "lv": "Tida er knapp.",
    "level": "Sätze"
  },
  {
    "de": "Ihn drücken Sorgen.",
    "lv": "Han er tynga av bekymringar.",
    "level": "Sätze"
  },
  {
    "de": "Hast du das Buch durchgearbeitet?",
    "lv": "Har du arbeidd deg gjennom boka?",
    "level": "Sätze"
  },
  {
    "de": "Kein Durchgang!",
    "lv": "Ingen gjennomgang!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich Sie bitten?",
    "lv": "Får eg be om ein dans? • Får eg be deg bli med?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin durstig.",
    "lv": "Eg er tørst.",
    "level": "Sätze"
  },
  {
    "de": "Eben das meine ich.",
    "lv": "Det er nettopp det eg meiner.",
    "level": "Sätze"
  },
  {
    "de": "Es ist ganz egal.",
    "lv": "Det er heilt det same.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie eigentlich?",
    "lv": "Kva er det eigentleg du vil?",
    "level": "Sätze"
  },
  {
    "de": "Eilt es mit dieser Sache?",
    "lv": "Hastar det med denne saka?",
    "level": "Sätze"
  },
  {
    "de": "Eilt sehr!",
    "lv": "Hastar svært!",
    "level": "Sätze"
  },
  {
    "de": "Ich habe es eilig.",
    "lv": "Eg har det travelt.",
    "level": "Sätze"
  },
  {
    "de": "Du bildest dir nur ein, krank zu sein.",
    "lv": "Du berre innbiller deg at du er sjuk.",
    "level": "Sätze"
  },
  {
    "de": "Was fällt dir ein?",
    "lv": "Kva går det av deg? • Kva kjem du på?",
    "level": "Sätze"
  },
  {
    "de": "Es war einmal.",
    "lv": "Det var ein gong.",
    "level": "Sätze"
  },
  {
    "de": "Steigen Sie bitte ein!",
    "lv": "Ver så god og stig inn!",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie ein!",
    "lv": "Kom inn!",
    "level": "Sätze"
  },
  {
    "de": "Einzelnes hat mir dort gefallen.",
    "lv": "Enkelte ting likte eg der.",
    "level": "Sätze"
  },
  {
    "de": "Es empfiehlt sich.",
    "lv": "Det er tilrådeleg.",
    "level": "Sätze"
  },
  {
    "de": "Diese Flasche enthält Essig.",
    "lv": "Denne flaska inneheld eddik.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldigen Sie bitte!",
    "lv": "Orsak!",
    "level": "Sätze"
  },
  {
    "de": "Entweder... oder...",
    "lv": "Anten ... eller ...",
    "level": "Sätze"
  },
  {
    "de": "Wer war der Erste?",
    "lv": "Kven var først?",
    "level": "Sätze"
  },
  {
    "de": "Wer fehlt heute?",
    "lv": "Kven manglar i dag?",
    "level": "Sätze"
  },
  {
    "de": "Was fehlt dir?",
    "lv": "Kva er i vegen med deg?",
    "level": "Sätze"
  },
  {
    "de": "Wie heißen Sie?",
    "lv": "Kva heiter du?",
    "level": "Sätze"
  },
  {
    "de": "Was soll das heißen?",
    "lv": "Kva skal det bety?",
    "level": "Sätze"
  },
  {
    "de": "Bitte treten Sie näher heran!",
    "lv": "Ver så snill og kom nærmare!",
    "level": "Sätze"
  },
  {
    "de": "Heraus mit der Sprache!",
    "lv": "Ut med språket!",
    "level": "Sätze"
  },
  {
    "de": "im Herbst",
    "lv": "om hausten",
    "level": "Sätze"
  },
  {
    "de": "Meine Herrschaften!",
    "lv": "Mine damer og herrar!",
    "level": "Sätze"
  },
  {
    "de": "von heute an",
    "lv": "frå i dag av",
    "level": "Sätze"
  },
  {
    "de": "heute früh",
    "lv": "i dag tidleg",
    "level": "Sätze"
  },
  {
    "de": "heute Nacht",
    "lv": "i natt",
    "level": "Sätze"
  },
  {
    "de": "Zu Hilfe!",
    "lv": "Hjelp!",
    "level": "Sätze"
  },
  {
    "de": "Ich lerne jeden Tag Deutsch.",
    "lv": "Eg lærer tysk kvar dag.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das bitte wiederholen?",
    "lv": "Kan du gjenta det, er du snill?",
    "level": "Sätze"
  },
  {
    "de": "Wir treffen uns am Bahnhof.",
    "lv": "Vi møtest på stasjonen.",
    "level": "Sätze"
  },
  {
    "de": "Ich stimme dir teilweise zu.",
    "lv": "Eg er delvis samd med deg.",
    "level": "Sätze"
  },
  {
    "de": "Diese Entscheidung hat weitreichende Folgen.",
    "lv": "Denne avgjerda har vidtrekkande konsekvensar.",
    "level": "Sätze"
  },
  {
    "de": "Man sollte mehrere Perspektiven berücksichtigen.",
    "lv": "Ein bør ta omsyn til fleire perspektiv.",
    "level": "Sätze"
  },
  {
    "de": "Könnten Sie das näher erläutern?",
    "lv": "Kunne du forklare det nærmare?",
    "level": "Sätze"
  },
  {
    "de": "Was mich anbelangt,...",
    "lv": "Kva meg angår, ...",
    "level": "Sätze"
  },
  {
    "de": "Wie alt sind Sie?",
    "lv": "Kor gammal er du?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zwanzig Jahre alt.",
    "lv": "Eg er tjue år gammal.",
    "level": "Sätze"
  },
  {
    "de": "Von heute an.",
    "lv": "Frå i dag av.",
    "level": "Sätze"
  },
  {
    "de": "Von jetzt an.",
    "lv": "Frå no av.",
    "level": "Sätze"
  },
  {
    "de": "Anders geht es nicht.",
    "lv": "Det går ikkje på nokon annan måte.",
    "level": "Sätze"
  },
  {
    "de": "Rufen Sie mich an.",
    "lv": "Ring meg.",
    "level": "Sätze"
  },
  {
    "de": "Bitte stellen Sie das Radio ab.",
    "lv": "Ver så snill og slå av radioen.",
    "level": "Sätze"
  },
  {
    "de": "Achte bitte auf den Verkehr.",
    "lv": "Ver så snill og pass på trafikken.",
    "level": "Sätze"
  },
  {
    "de": "Darauf musst du achten.",
    "lv": "Det må du passe på.",
    "level": "Sätze"
  },
  {
    "de": "Heute mache ich es anders.",
    "lv": "I dag gjer eg det annleis.",
    "level": "Sätze"
  },
  {
    "de": "Wir warten auf den Bus.",
    "lv": "Vi ventar på bussen.",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt allein.",
    "lv": "Han bur åleine.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Ausbildung absolviert.",
    "lv": "Eg har fullført opplæringa. • Eg har fullført utdanninga.",
    "level": "Sätze"
  },
  {
    "de": "Ich warte den Regen ab.",
    "lv": "Eg ventar til regnet gir seg.",
    "level": "Sätze"
  },
  {
    "de": "Er arbeitet in der Verkaufsabteilung.",
    "lv": "Han jobbar i salsavdelinga.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin allergisch gegen Katzen.",
    "lv": "Eg er allergisk mot kattar.",
    "level": "Sätze"
  },
  {
    "de": "Andererseits verstehe ich ihn.",
    "lv": "På den andre sida forstår eg han.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Situation analysiert.",
    "lv": "Eg har analysert situasjonen.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat meinen Vorschlag akzeptiert.",
    "lv": "Ho godtok forslaget mitt.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte das genauer analysieren.",
    "lv": "Eg vil gjerne analysere dette nærmare.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte den Vertrag ändern.",
    "lv": "Eg vil gjerne endre kontrakten.",
    "level": "Sätze"
  },
  {
    "de": "Er ändert ständig seine Meinung.",
    "lv": "Han skiftar meining heile tida.",
    "level": "Sätze"
  },
  {
    "de": "Ähnliche Probleme hatten wir schon früher.",
    "lv": "Liknande problem har vi hatt før.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ahnung!",
    "lv": "Inga aning!",
    "level": "Sätze"
  },
  {
    "de": "Hör auf zu jammern.",
    "lv": "Slutt å sutre.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Kleid ist akademisch gekleidet.",
    "lv": "Denne kjolen er stilig og konservativ.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre gerne Akkordeonmusik.",
    "lv": "Eg høyrer gjerne på trekkspelmusikk.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das Gerät anklicken?",
    "lv": "Kan du klikke på eininga?",
    "level": "Sätze"
  },
  {
    "de": "Bitte öffne die Datei und klicke darauf.",
    "lv": "Opne fila og klikk på henne, er du snill.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe einen Unfall gehabt.",
    "lv": "Eg har vore ute for ei ulukke.",
    "level": "Sätze"
  },
  {
    "de": "Wir laufen zum Bahnhof.",
    "lv": "Vi går til stasjonen.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schalte den Fernseher an.",
    "lv": "Ver så snill og slå på fjernsynet.",
    "level": "Sätze"
  },
  {
    "de": "Mein Computer ist abgestürzt.",
    "lv": "Datamaskina mi har krasja.",
    "level": "Sätze"
  },
  {
    "de": "Am Wochenende gehe ich angeln.",
    "lv": "I helga skal eg ut og fiske.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe den Anruf verpasst.",
    "lv": "Eg gjekk glipp av oppringinga.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mich später anrufen?",
    "lv": "Kan du ringe meg seinare?",
    "level": "Sätze"
  },
  {
    "de": "Bitte nimm meinen Vorschlag an.",
    "lv": "Ver så snill og godta forslaget mitt.",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme dein Angebot an.",
    "lv": "Eg tek imot tilbodet ditt.",
    "level": "Sätze"
  },
  {
    "de": "Er nahm die Einladung an.",
    "lv": "Han tok imot invitasjonen.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Angst vor Spinnen.",
    "lv": "Eg er redd for edderkoppar.",
    "level": "Sätze"
  },
  {
    "de": "Keine Angst, alles wird gut.",
    "lv": "Ikkje ver redd, alt kjem til å gå bra.",
    "level": "Sätze"
  },
  {
    "de": "Anklang finden.",
    "lv": "Å finne gjenklang. • Å slå an.",
    "level": "Sätze"
  },
  {
    "de": "Es kommt darauf an.",
    "lv": "Det kjem an på.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Anlass.",
    "lv": "Ved dette høvet.",
    "level": "Sätze"
  },
  {
    "de": "Nehmen wir an, dass...",
    "lv": "La oss gå ut frå at ...",
    "level": "Sätze"
  },
  {
    "de": "Was hast du da angerichtet?",
    "lv": "Kva har du no stelt i stand?",
    "level": "Sätze"
  },
  {
    "de": "Bis ans Ende.",
    "lv": "Heilt til slutten.",
    "level": "Sätze"
  },
  {
    "de": "Du glaubst mir anscheinend nicht.",
    "lv": "Du trur meg visst ikkje.",
    "level": "Sätze"
  },
  {
    "de": "Meiner Ansicht nach...",
    "lv": "Etter mi meining ...",
    "level": "Sätze"
  },
  {
    "de": "Stell dich nicht so an!",
    "lv": "Ikkje lag slikt oppstyr!",
    "level": "Sätze"
  },
  {
    "de": "An die Arbeit gehen.",
    "lv": "Å gå i gang med arbeidet.",
    "level": "Sätze"
  },
  {
    "de": "Außer Atem sein.",
    "lv": "Å vere andpusten.",
    "level": "Sätze"
  },
  {
    "de": "Guten Appetit!",
    "lv": "God appetitt!",
    "level": "Sätze"
  },
  {
    "de": "In einem Atemzug.",
    "lv": "I eitt andedrag.",
    "level": "Sätze"
  },
  {
    "de": "Auf jeden Fall.",
    "lv": "I alle fall.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal war alles still.",
    "lv": "Brått vart alt stille.",
    "level": "Sätze"
  },
  {
    "de": "Bitte mach die Tür auf!",
    "lv": "Ver så snill og opne døra!",
    "level": "Sätze"
  },
  {
    "de": "Er hat den Kredit aufgenommen.",
    "lv": "Han tok opp lånet.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen heute aufräumen.",
    "lv": "Vi må rydde opp i dag.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre jetzt auf.",
    "lv": "Eg sluttar no.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schon auf.",
    "lv": "Han er allereie oppe.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen das Treffen verschieben.",
    "lv": "Vi må utsette møtet.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat mich aufgeregt.",
    "lv": "Ho irriterte meg.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal.",
    "lv": "Brått.",
    "level": "Sätze"
  },
  {
    "de": "Auf der Stelle.",
    "lv": "Med ein gong.",
    "level": "Sätze"
  },
  {
    "de": "Für den Schaden aufkommen.",
    "lv": "Å betale for skaden.",
    "level": "Sätze"
  },
  {
    "de": "Bitte die Tür auf!",
    "lv": "Opne døra, takk!",
    "level": "Sätze"
  },
  {
    "de": "Aufrecht sitzen.",
    "lv": "Å sitte rett.",
    "level": "Sätze"
  },
  {
    "de": "Er ist auf.",
    "lv": "Han er oppe.",
    "level": "Sätze"
  },
  {
    "de": "Alle Kräfte aufwenden.",
    "lv": "Å sette inn alle krefter.",
    "level": "Sätze"
  },
  {
    "de": "Viel Mühe aufwenden.",
    "lv": "Å gjere seg mykje bry.",
    "level": "Sätze"
  },
  {
    "de": "Geh mir aus den Augen!",
    "lv": "Gå meg av syne!",
    "level": "Sätze"
  },
  {
    "de": "Unter vier Augen.",
    "lv": "På tomannshand.",
    "level": "Sätze"
  },
  {
    "de": "Aus Mangel an Zeit.",
    "lv": "Av mangel på tid.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Grunde.",
    "lv": "Av denne grunnen.",
    "level": "Sätze"
  },
  {
    "de": "Alle außer dir.",
    "lv": "Alle utanom deg.",
    "level": "Sätze"
  },
  {
    "de": "Auf Äußerlichkeiten Wert legen.",
    "lv": "Å legge vekt på det ytre.",
    "level": "Sätze"
  },
  {
    "de": "Im äußersten Fall.",
    "lv": "I verste fall.",
    "level": "Sätze"
  },
  {
    "de": "Äußerst wichtig.",
    "lv": "Svært viktig.",
    "level": "Sätze"
  },
  {
    "de": "Aussicht auf die See.",
    "lv": "Utsikt over havet.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gute Aussichten.",
    "lv": "Han har gode utsikter.",
    "level": "Sätze"
  },
  {
    "de": "Wie wird dieses Wort ausgesprochen?",
    "lv": "Korleis blir dette ordet uttalt?",
    "level": "Sätze"
  },
  {
    "de": "Sein Beileid aussprechen.",
    "lv": "Å gi uttrykk for medkjensle.",
    "level": "Sätze"
  },
  {
    "de": "Wann wurden die Meisterschaftskämpfe ausgetragen?",
    "lv": "Når vart meisterskapet halde?",
    "level": "Sätze"
  },
  {
    "de": "Welchen Beruf üben Sie aus?",
    "lv": "Kva jobbar du med?",
    "level": "Sätze"
  },
  {
    "de": "Einfluss ausüben.",
    "lv": "Å øve innverknad.",
    "level": "Sätze"
  },
  {
    "de": "Auswärts essen.",
    "lv": "Å ete ute.",
    "level": "Sätze"
  },
  {
    "de": "Per Bahn.",
    "lv": "Med jernbane.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Bahn.",
    "lv": "Med toget.",
    "level": "Sätze"
  },
  {
    "de": "Möglichst bald.",
    "lv": "Så snart som mogleg.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist Angst und bange.",
    "lv": "Eg er livredd.",
    "level": "Sätze"
  },
  {
    "de": "Auf die lange Bank schieben.",
    "lv": "Å skyve noko framfor seg. • Å trekke noko ut i langdrag.",
    "level": "Sätze"
  },
  {
    "de": "Bar zahlen.",
    "lv": "Å betale kontant.",
    "level": "Sätze"
  },
  {
    "de": "Erz bauen.",
    "lv": "Å bryte malm.",
    "level": "Sätze"
  },
  {
    "de": "Mist bauen.",
    "lv": "Å rote det til.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin beauftragt.",
    "lv": "Eg har fått eit oppdrag.",
    "level": "Sätze"
  },
  {
    "de": "Nach Bedarf.",
    "lv": "Etter behov.",
    "level": "Sätze"
  },
  {
    "de": "Ich bedauere ihn.",
    "lv": "Eg synest synd på han.",
    "level": "Sätze"
  },
  {
    "de": "Was bedeutet dieses Wort?",
    "lv": "Kva tyder dette ordet?",
    "level": "Sätze"
  },
  {
    "de": "Unter der Bedingung, dass...",
    "lv": "På vilkår av at ...",
    "level": "Sätze"
  },
  {
    "de": "Sie sieht bedrückt aus.",
    "lv": "Ho ser nedfor ut.",
    "level": "Sätze"
  },
  {
    "de": "Hinweise befolgen.",
    "lv": "Å følgje rettleiinga.",
    "level": "Sätze"
  },
  {
    "de": "Befehle befolgen.",
    "lv": "Å lyde ordrar.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Post befördern.",
    "lv": "Å sende med posten.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin begierig zu wissen.",
    "lv": "Eg er spent på å få vite det.",
    "level": "Sätze"
  },
  {
    "de": "Zu Beginn.",
    "lv": "I byrjinga.",
    "level": "Sätze"
  },
  {
    "de": "Am Beginn.",
    "lv": "I starten.",
    "level": "Sätze"
  },
  {
    "de": "Bei Beginn.",
    "lv": "Ved byrjinga.",
    "level": "Sätze"
  },
  {
    "de": "In Begleitung.",
    "lv": "Med følgje.",
    "level": "Sätze"
  },
  {
    "de": "Mit seiner Begleitung.",
    "lv": "Med følgjet sitt.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schwer von Begriff.",
    "lv": "Han er treg i oppfatninga.",
    "level": "Sätze"
  },
  {
    "de": "Im Gedächtnis behalten.",
    "lv": "Å hugse.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tisch.",
    "lv": "Ved bordet.",
    "level": "Sätze"
  },
  {
    "de": "Bei Sinnen sein.",
    "lv": "Å vere ved sine fulle fem.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tage.",
    "lv": "Om dagen.",
    "level": "Sätze"
  },
  {
    "de": "Bei weitem nicht so.",
    "lv": "Ikkje på langt nær så.",
    "level": "Sätze"
  },
  {
    "de": "Alle beide.",
    "lv": "Begge to.",
    "level": "Sätze"
  },
  {
    "de": "Stürmischer Beifall brach los.",
    "lv": "Det braut ut stormande applaus.",
    "level": "Sätze"
  },
  {
    "de": "Beifall finden.",
    "lv": "Å få medhald.",
    "level": "Sätze"
  },
  {
    "de": "Beileid aussprechen.",
    "lv": "Å kondolere.",
    "level": "Sätze"
  },
  {
    "de": "Auf eigenen Beinen stehen.",
    "lv": "Å stå på eigne bein.",
    "level": "Sätze"
  },
  {
    "de": "Zum Beispiel.",
    "lv": "Til dømes.",
    "level": "Sätze"
  },
  {
    "de": "Beistand leisten.",
    "lv": "Å yte hjelp.",
    "level": "Sätze"
  },
  {
    "de": "Beitrag leisten.",
    "lv": "Å gi bidraget sitt.",
    "level": "Sätze"
  },
  {
    "de": "Jemandes Bekanntschaft machen.",
    "lv": "Å bli kjent med nokon.",
    "level": "Sätze"
  },
  {
    "de": "Bekanntschaft anknüpfen.",
    "lv": "Å knyte kontakt.",
    "level": "Sätze"
  },
  {
    "de": "Belegte Brötchen.",
    "lv": "Rundstykke med pålegg.",
    "level": "Sätze"
  },
  {
    "de": "Nach Ihrem Belieben.",
    "lv": "Som du vil.",
    "level": "Sätze"
  },
  {
    "de": "Zu jeder beliebigen Zeit.",
    "lv": "Når som helst.",
    "level": "Sätze"
  },
  {
    "de": "Schweigen beobachten.",
    "lv": "Å halde seg taus.",
    "level": "Sätze"
  },
  {
    "de": "Zur Bequemlichkeit.",
    "lv": "Av praktiske omsyn.",
    "level": "Sätze"
  },
  {
    "de": "Bereit sein.",
    "lv": "Å vere klar. • Å vere villig.",
    "level": "Sätze"
  },
  {
    "de": "Unfallopfer bergen.",
    "lv": "Å berge ulukkesoffer.",
    "level": "Sätze"
  },
  {
    "de": "Bericht erstatten.",
    "lv": "Å gi rapport.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind besetzt.",
    "lv": "Alle plassane er opptekne.",
    "level": "Sätze"
  },
  {
    "de": "Neue Besen kehren gut.",
    "lv": "Nye kostar feiar best.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt ein Haus.",
    "lv": "Han eig eit hus.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt viel Mut.",
    "lv": "Han har mykje mot.",
    "level": "Sätze"
  },
  {
    "de": "Desto besser.",
    "lv": "Desto betre.",
    "level": "Sätze"
  },
  {
    "de": "Gute Besserung!",
    "lv": "God betring!",
    "level": "Sätze"
  },
  {
    "de": "Beim besten Willen.",
    "lv": "Sjølv med den beste vilje.",
    "level": "Sätze"
  },
  {
    "de": "Am besten.",
    "lv": "Aller best.",
    "level": "Sätze"
  },
  {
    "de": "Es besteht Zweifel.",
    "lv": "Det er tvil.",
    "level": "Sätze"
  },
  {
    "de": "Seine Aufgabe besteht darin...",
    "lv": "Oppgåva hans består i ...",
    "level": "Sätze"
  },
  {
    "de": "Grüße bestellen.",
    "lv": "Å helse frå nokon.",
    "level": "Sätze"
  },
  {
    "de": "Ganz bestimmt.",
    "lv": "Heilt sikkert.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch kommen.",
    "lv": "Å kome på besøk.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch sein.",
    "lv": "Å vere på besøk.",
    "level": "Sätze"
  },
  {
    "de": "Oft Konzerte besuchen.",
    "lv": "Å gå ofte på konsertar.",
    "level": "Sätze"
  },
  {
    "de": "Welche Schule hat er besucht?",
    "lv": "Kva skule gjekk han på?",
    "level": "Sätze"
  },
  {
    "de": "In Betracht ziehen.",
    "lv": "Å ta i betraktning. • Å vurdere.",
    "level": "Sätze"
  },
  {
    "de": "Außer Betracht lassen.",
    "lv": "Å sjå bort frå.",
    "level": "Sätze"
  },
  {
    "de": "Er betreibt ein Hotel.",
    "lv": "Han driv eit hotell.",
    "level": "Sätze"
  },
  {
    "de": "Alle beiden.",
    "lv": "Begge to.",
    "level": "Sätze"
  },
  {
    "de": "Alles bezahlen.",
    "lv": "Å betale alt.",
    "level": "Sätze"
  },
  {
    "de": "Bezüglich auf etwas.",
    "lv": "Med omsyn til noko.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön.",
    "lv": "Berre hyggeleg. • Ver så god.",
    "level": "Sätze"
  },
  {
    "de": "Wie bitte?",
    "lv": "Orsak?",
    "level": "Sätze"
  },
  {
    "de": "Bitte sehr.",
    "lv": "Ingen årsak. • Ver så god.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe eine Bitte an Sie.",
    "lv": "Eg har ei teneste å be deg om.",
    "level": "Sätze"
  },
  {
    "de": "Trompete blasen.",
    "lv": "Å spele trompet.",
    "level": "Sätze"
  },
  {
    "de": "In einem Buch blättern.",
    "lv": "Å bla i ei bok.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßen Füßen.",
    "lv": "Med berre føter.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßem Auge.",
    "lv": "Med det blotte auget.",
    "level": "Sätze"
  },
  {
    "de": "Danke für die Blumen!",
    "lv": "Takk for komplimentet!",
    "level": "Sätze"
  },
  {
    "de": "Alles in Butter.",
    "lv": "Alt i skjønaste orden.",
    "level": "Sätze"
  },
  {
    "de": "Bitte checken.",
    "lv": "Ver så snill og sjekk.",
    "level": "Sätze"
  },
  {
    "de": "Da ist er!",
    "lv": "Der er han!",
    "level": "Sätze"
  },
  {
    "de": "Alles spricht dafür.",
    "lv": "Alt talar for det.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann nichts dafür.",
    "lv": "Det er ikkje mi skuld.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin dagegen.",
    "lv": "Eg er imot det.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe nichts dagegen.",
    "lv": "Eg har ingenting imot det.",
    "level": "Sätze"
  },
  {
    "de": "Von daheim.",
    "lv": "Heimanfrå.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Dame ziehen.",
    "lv": "Å flytte dronninga.",
    "level": "Sätze"
  },
  {
    "de": "Es dämmert.",
    "lv": "Det skymer. • Det lysnar.",
    "level": "Sätze"
  },
  {
    "de": "Danke schön!",
    "lv": "Tusen takk!",
    "level": "Sätze"
  },
  {
    "de": "Dann und wann.",
    "lv": "No og då.",
    "level": "Sätze"
  },
  {
    "de": "Darauf kannst du dich verlassen.",
    "lv": "Det kan du stole på.",
    "level": "Sätze"
  },
  {
    "de": "Daraus wird nichts.",
    "lv": "Det blir det ikkje noko av.",
    "level": "Sätze"
  },
  {
    "de": "So dass...",
    "lv": "Slik at ...",
    "level": "Sätze"
  },
  {
    "de": "Für wen halten Sie mich?",
    "lv": "Kven trur du eg er?",
    "level": "Sätze"
  },
  {
    "de": "Hände weg!",
    "lv": "Fingrane av fatet!",
    "level": "Sätze"
  },
  {
    "de": "Lass den Kopf nicht hängen!",
    "lv": "Ikkje heng med hovudet!",
    "level": "Sätze"
  },
  {
    "de": "zu Hause",
    "lv": "heime",
    "level": "Sätze"
  },
  {
    "de": "nach Hause gehen",
    "lv": "å gå heim",
    "level": "Sätze"
  },
  {
    "de": "von Haus aus",
    "lv": "opphavleg • av natur",
    "level": "Sätze"
  },
  {
    "de": "Meinen herzlichsten Glückwunsch!",
    "lv": "Hjarteleg til lukke!",
    "level": "Sätze"
  },
  {
    "de": "Seien Sie so gut!",
    "lv": "Ver så snill!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie die Güte!",
    "lv": "Ver så venleg!",
    "level": "Sätze"
  },
  {
    "de": "Was hast du?",
    "lv": "Kva er det med deg?",
    "level": "Sätze"
  },
  {
    "de": "Gestatten Sie bitte!",
    "lv": "Orsak meg! • Tillat meg!",
    "level": "Sätze"
  },
  {
    "de": "Ist es gestattet zu rauchen?",
    "lv": "Er det lov å røykje?",
    "level": "Sätze"
  },
  {
    "de": "Ich muss gestehen, dass...",
    "lv": "Eg må innrømme at ...",
    "level": "Sätze"
  },
  {
    "de": "gestern früh",
    "lv": "i går morgon",
    "level": "Sätze"
  },
  {
    "de": "gestern Abend",
    "lv": "i går kveld",
    "level": "Sätze"
  },
  {
    "de": "Es ist mir gleichgültig, ob...",
    "lv": "Det er det same for meg om ...",
    "level": "Sätze"
  },
  {
    "de": "Was ist geschehen?",
    "lv": "Kva har skjedd?",
    "level": "Sätze"
  },
  {
    "de": "Mach keine Geschichten!",
    "lv": "Ikkje gjer noko dumt! • Ikkje lag så mykje oppstyr!",
    "level": "Sätze"
  },
  {
    "de": "Geschweige denn...",
    "lv": "For ikkje å snakke om ...",
    "level": "Sätze"
  },
  {
    "de": "Gehen Sie geradeaus!",
    "lv": "Gå rett fram!",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es Ihnen?",
    "lv": "Korleis har du det?",
    "level": "Sätze"
  },
  {
    "de": "Frag ihn gelegentlich, ob...",
    "lv": "Spør han ved høve om ...",
    "level": "Sätze"
  },
  {
    "de": "morgen früh",
    "lv": "i morgon tidleg",
    "level": "Sätze"
  },
  {
    "de": "im Frühling",
    "lv": "om våren",
    "level": "Sätze"
  },
  {
    "de": "Was gibt’s Neues?",
    "lv": "Kva er nytt?",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Brief folgt, dass...",
    "lv": "Av dette brevet går det fram at ...",
    "level": "Sätze"
  },
  {
    "de": "Fahre fort!",
    "lv": "Hald fram!",
    "level": "Sätze"
  },
  {
    "de": "Er ist kein Freund von...",
    "lv": "Han er ingen venn av ...",
    "level": "Sätze"
  },
  {
    "de": "Es erwies sich, dass...",
    "lv": "Det viste seg at ...",
    "level": "Sätze"
  },
  {
    "de": "Gedenkst du meiner?",
    "lv": "Hugsar du meg? • Tenker du på meg?",
    "level": "Sätze"
  },
  {
    "de": "im Winter",
    "lv": "om vinteren",
    "level": "Sätze"
  },
  {
    "de": "Welcher Jahrgang sind Sie?",
    "lv": "Kva år er du fødd?",
    "level": "Sätze"
  },
  {
    "de": "Es jammert mich zu sehen...",
    "lv": "Det gjer meg vondt å sjå ...",
    "level": "Sätze"
  },
  {
    "de": "je mehr, desto besser",
    "lv": "jo meir, desto betre",
    "level": "Sätze"
  },
  {
    "de": "bis jetzt",
    "lv": "til no",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich zum Bahnhof?",
    "lv": "Korleis kjem eg meg til stasjonen?",
    "level": "Sätze"
  },
  {
    "de": "Komm her!",
    "lv": "Kom hit!",
    "level": "Sätze"
  },
  {
    "de": "Könnte ich Frau N. sprechen?",
    "lv": "Kunne eg få snakke med fru N.?",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das?",
    "lv": "Kva kostar det?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange dauert die Vorstellung?",
    "lv": "Kor lenge varer framsyninga?",
    "level": "Sätze"
  },
  {
    "de": "Lass das!",
    "lv": "Slutt med det! • La det vere!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich in Ruhe!",
    "lv": "La meg vere i fred!",
    "level": "Sätze"
  },
  {
    "de": "Lassen Sie mich Ihnen helfen!",
    "lv": "La meg hjelpe deg!",
    "level": "Sätze"
  },
  {
    "de": "Lasst uns gehen!",
    "lv": "La oss gå!",
    "level": "Sätze"
  },
  {
    "de": "Na, wie läufts?",
    "lv": "No, korleis går det?",
    "level": "Sätze"
  },
  {
    "de": "Es lebe!",
    "lv": "Lenge leve!",
    "level": "Sätze"
  },
  {
    "de": "Leben Sie wohl!",
    "lv": "Lev vel! • Farvel!",
    "level": "Sätze"
  },
  {
    "de": "Was ist los?",
    "lv": "Kva er i vegen? • Kva skjer?",
    "level": "Sätze"
  },
  {
    "de": "Der Job ist anstrengend.",
    "lv": "Jobben er slitsam.",
    "level": "Sätze"
  },
  {
    "de": "Das war ein anstrengender Tag.",
    "lv": "Det var ein slitsam dag.",
    "level": "Sätze"
  },
  {
    "de": "Deutsch lernen kann anstrengend sein.",
    "lv": "Å lære tysk kan vere slitsamt.",
    "level": "Sätze"
  },
  {
    "de": "Er verlangt eine Erklärung.",
    "lv": "Han krev ei forklaring.",
    "level": "Sätze"
  },
  {
    "de": "Der Verkäufer verlangt zu viel Geld.",
    "lv": "Seljaren krev for mykje pengar.",
    "level": "Sätze"
  },
  {
    "de": "Das Gesetz verlangt es so.",
    "lv": "Lova krev det.",
    "level": "Sätze"
  },
  {
    "de": "Das ist gar nicht so schwer.",
    "lv": "Det er slett ikkje så vanskeleg.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe gar kein Geld.",
    "lv": "Eg har ingen pengar i det heile.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gar nichts gesagt.",
    "lv": "Han sa ingenting i det heile.",
    "level": "Sätze"
  },
  {
    "de": "Der Hund ist los.",
    "lv": "Hunden er laus.",
    "level": "Sätze"
  },
  {
    "de": "Hier ist viel los.",
    "lv": "Her skjer det mykje.",
    "level": "Sätze"
  },
  {
    "de": "Halt die Luft an!",
    "lv": "Hald munn! • Ikkje overdriv!",
    "level": "Sätze"
  },
  {
    "de": "Was machst du?",
    "lv": "Kva gjer du?",
    "level": "Sätze"
  },
  {
    "de": "Sag mal!",
    "lv": "Sei meg ein ting!",
    "level": "Sätze"
  },
  {
    "de": "Was meinen Sie damit?",
    "lv": "Kva meiner du med det?",
    "level": "Sätze"
  },
  {
    "de": "Wir gehen mit Ihnen.",
    "lv": "Vi blir med deg.",
    "level": "Sätze"
  },
  {
    "de": "Ich fahre mit der Eisenbahn.",
    "lv": "Eg reiser med tog.",
    "level": "Sätze"
  },
  {
    "de": "am Mittwoch",
    "lv": "på onsdag",
    "level": "Sätze"
  },
  {
    "de": "Es mag sein.",
    "lv": "Det kan godt vere.",
    "level": "Sätze"
  },
  {
    "de": "Ich mag das nicht.",
    "lv": "Det liker eg ikkje.",
    "level": "Sätze"
  },
  {
    "de": "am Montag",
    "lv": "på måndag",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen!",
    "lv": "God morgon!",
    "level": "Sätze"
  },
  {
    "de": "am Morgen",
    "lv": "om morgonen",
    "level": "Sätze"
  },
  {
    "de": "Gute Nacht!",
    "lv": "God natt!",
    "level": "Sätze"
  },
  {
    "de": "Nehmen Sie Platz!",
    "lv": "Ver så god og set deg!",
    "level": "Sätze"
  },
  {
    "de": "Letzte Neuheit!",
    "lv": "Siste nytt!",
    "level": "Sätze"
  },
  {
    "de": "Nicht wahr?",
    "lv": "Ikkje sant?",
    "level": "Sätze"
  },
  {
    "de": "Nicht doch!",
    "lv": "Nei, nei! • La vere!",
    "level": "Sätze"
  },
  {
    "de": "Nun endlich!",
    "lv": "No endeleg!",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das?",
    "lv": "Kva hjelper det?",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das alles?",
    "lv": "Kva hjelper alt dette?",
    "level": "Sätze"
  },
  {
    "de": "Parken verboten!",
    "lv": "Parkering forbode!",
    "level": "Sätze"
  },
  {
    "de": "Nicht parken!",
    "lv": "Ikkje parker!",
    "level": "Sätze"
  },
  {
    "de": "Er hat Recht.",
    "lv": "Han har rett.",
    "level": "Sätze"
  },
  {
    "de": "Wovon ist die Rede?",
    "lv": "Kva er det snakk om?",
    "level": "Sätze"
  },
  {
    "de": "Davon kann keine Rede sein.",
    "lv": "Det kan det ikkje vere snakk om.",
    "level": "Sätze"
  },
  {
    "de": "Glückliche Reise!",
    "lv": "God reise!",
    "level": "Sätze"
  },
  {
    "de": "Mir reißt die Geduld.",
    "lv": "Eg mistar tolmodet.",
    "level": "Sätze"
  },
  {
    "de": "Man sagt, dass...",
    "lv": "Ein seier at ...",
    "level": "Sätze"
  },
  {
    "de": "Schon gut!",
    "lv": "Det er greitt!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön!",
    "lv": "Ver så god! • Berre hyggeleg!",
    "level": "Sätze"
  },
  {
    "de": "Was bin ich schuldig?",
    "lv": "Kor mykje skuldar eg? • Kva blir det?",
    "level": "Sätze"
  },
  {
    "de": "Vor dem Gebrauch schütteln!",
    "lv": "Rist før bruk!",
    "level": "Sätze"
  },
  {
    "de": "Sehen Sie mal!",
    "lv": "Sjå her!",
    "level": "Sätze"
  },
  {
    "de": "Wie sehr auch...",
    "lv": "Same kor mykje ...",
    "level": "Sätze"
  },
  {
    "de": "Seit wann?",
    "lv": "Sidan når?",
    "level": "Sätze"
  },
  {
    "de": "Was soll ich tun?",
    "lv": "Kva skal eg gjere?",
    "level": "Sätze"
  },
  {
    "de": "im Sommer",
    "lv": "om sommaren",
    "level": "Sätze"
  },
  {
    "de": "Nicht nur..., sondern auch...",
    "lv": "Ikkje berre ..., men også ...",
    "level": "Sätze"
  },
  {
    "de": "Sonst noch etwas?",
    "lv": "Elles noko?",
    "level": "Sätze"
  },
  {
    "de": "Spaß beiseite!",
    "lv": "Spøk til side!",
    "level": "Sätze"
  },
  {
    "de": "Wie spät ist es?",
    "lv": "Kva er klokka?",
    "level": "Sätze"
  },
  {
    "de": "Durchfahrt gesperrt!",
    "lv": "Gjennomkøyring forbode!",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie deutsch?",
    "lv": "Snakkar du tysk?",
    "level": "Sätze"
  },
  {
    "de": "Statt zu...",
    "lv": "I staden for å ...",
    "level": "Sätze"
  },
  {
    "de": "Wie steht’s?",
    "lv": "Korleis står det til?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Hut steht ihr gut.",
    "lv": "Denne hatten kler henne godt.",
    "level": "Sätze"
  },
  {
    "de": "Guten Tag!",
    "lv": "God dag!",
    "level": "Sätze"
  },
  {
    "de": "Wo treffen wir uns?",
    "lv": "Kvar skal vi møtast?",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie näher!",
    "lv": "Kom nærmare!",
    "level": "Sätze"
  },
  {
    "de": "Ehrlichkeit ist eine Tugend.",
    "lv": "Ærlegdom er ei dygd.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe viel zu tun.",
    "lv": "Eg har mykje å gjere.",
    "level": "Sätze"
  },
  {
    "de": "Nicht übel!",
    "lv": "Ikkje verst!",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt über mir.",
    "lv": "Han bur over meg.",
    "level": "Sätze"
  },
  {
    "de": "Er ist davon überzeugt.",
    "lv": "Han er overtydd om det.",
    "level": "Sätze"
  },
  {
    "de": "So ist es üblich.",
    "lv": "Slik er skikken.",
    "level": "Sätze"
  },
  {
    "de": "Deine Uhr geht nach.",
    "lv": "Klokka di går for seint.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel Uhr ist es?",
    "lv": "Kor mykje er klokka?",
    "level": "Sätze"
  },
  {
    "de": "Um acht Uhr früh.",
    "lv": "Klokka åtte om morgonen.",
    "level": "Sätze"
  },
  {
    "de": "umso mehr",
    "lv": "desto meir",
    "level": "Sätze"
  },
  {
    "de": "Rechts um!",
    "lv": "Høgre om!",
    "level": "Sätze"
  },
  {
    "de": "Und ob!",
    "lv": "Det kan du banne på!",
    "level": "Sätze"
  },
  {
    "de": "und zwar",
    "lv": "nemleg",
    "level": "Sätze"
  },
  {
    "de": "Auf Unkosten von...",
    "lv": "På kostnad av ...",
    "level": "Sätze"
  },
  {
    "de": "Er saß unter den Zuschauern.",
    "lv": "Han sat blant tilskodarane.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ursache!",
    "lv": "Ingen årsak!",
    "level": "Sätze"
  },
  {
    "de": "Es geschah, wie verabredet.",
    "lv": "Det skjedde som avtalt.",
    "level": "Sätze"
  },
  {
    "de": "Rauchen verboten!",
    "lv": "Røyking forbode!",
    "level": "Sätze"
  },
  {
    "de": "Falsch verbunden!",
    "lv": "Feil nummer!",
    "level": "Sätze"
  },
  {
    "de": "Eintritt verboten!",
    "lv": "Ingen tilgang!",
    "level": "Sätze"
  },
  {
    "de": "Verstehen Sie mich?",
    "lv": "Forstår du meg?",
    "level": "Sätze"
  },
  {
    "de": "Er versteht nichts davon.",
    "lv": "Han har ikkje greie på det.",
    "level": "Sätze"
  },
  {
    "de": "Seine Ansicht vertreten.",
    "lv": "Å forsvare synspunktet sitt.",
    "level": "Sätze"
  },
  {
    "de": "Streit verursachen.",
    "lv": "Å skape strid.",
    "level": "Sätze"
  },
  {
    "de": "Viel besser.",
    "lv": "Mykje betre.",
    "level": "Sätze"
  },
  {
    "de": "Zu viel.",
    "lv": "For mykje.",
    "level": "Sätze"
  },
  {
    "de": "Vom Hörensagen.",
    "lv": "Etter seiande.",
    "level": "Sätze"
  },
  {
    "de": "Von Zeit zu Zeit.",
    "lv": "Frå tid til anna.",
    "level": "Sätze"
  },
  {
    "de": "Von Beruf.",
    "lv": "Av yrke.",
    "level": "Sätze"
  },
  {
    "de": "Er ist Berliner von Geburt.",
    "lv": "Han er berlinar av fødsel.",
    "level": "Sätze"
  },
  {
    "de": "Er steht vor dem Fenster.",
    "lv": "Han står framfor vindauget.",
    "level": "Sätze"
  },
  {
    "de": "Vor Sonnenaufgang.",
    "lv": "Før soloppgang.",
    "level": "Sätze"
  },
  {
    "de": "Vor vierzehn Tagen.",
    "lv": "For fjorten dagar sidan.",
    "level": "Sätze"
  },
  {
    "de": "Vor Freude.",
    "lv": "Av glede.",
    "level": "Sätze"
  },
  {
    "de": "Vor allem.",
    "lv": "Framfor alt.",
    "level": "Sätze"
  },
  {
    "de": "Im Voraus.",
    "lv": "På førehand.",
    "level": "Sätze"
  },
  {
    "de": "Unter der Voraussetzung, dass...",
    "lv": "Under føresetnad av at ...",
    "level": "Sätze"
  },
  {
    "de": "Unter dem Vorbehalt.",
    "lv": "Med det atterhaldet.",
    "level": "Sätze"
  },
  {
    "de": "Vorhanden sein.",
    "lv": "Å vere tilgjengeleg. • Å finnast.",
    "level": "Sätze"
  },
  {
    "de": "In der vorigen Woche.",
    "lv": "I førre veke.",
    "level": "Sätze"
  },
  {
    "de": "Vorkehrungen treffen.",
    "lv": "Å ta forholdsreglar.",
    "level": "Sätze"
  },
  {
    "de": "Sie kommt mir bekannt vor.",
    "lv": "Ho verkar kjent.",
    "level": "Sätze"
  },
  {
    "de": "Er hat Vorliebe für Literatur.",
    "lv": "Han har ein forkjærleik for litteratur.",
    "level": "Sätze"
  },
  {
    "de": "Heute Vormittag.",
    "lv": "I formiddag.",
    "level": "Sätze"
  },
  {
    "de": "Von vorn.",
    "lv": "Framanfrå.",
    "level": "Sätze"
  },
  {
    "de": "Nach vorn.",
    "lv": "Framover.",
    "level": "Sätze"
  },
  {
    "de": "Von vornherein.",
    "lv": "Frå første stund.",
    "level": "Sätze"
  },
  {
    "de": "Im Vorteil sein.",
    "lv": "Å ha ein fordel.",
    "level": "Sätze"
  },
  {
    "de": "Wach sein.",
    "lv": "Å vere vaken.",
    "level": "Sätze"
  },
  {
    "de": "Wach werden.",
    "lv": "Å vakne.",
    "level": "Sätze"
  },
  {
    "de": "Auf Wache sein.",
    "lv": "Å stå vakt.",
    "level": "Sätze"
  },
  {
    "de": "Während eines Jahres.",
    "lv": "I løpet av eit år.",
    "level": "Sätze"
  },
  {
    "de": "Während des Krieges.",
    "lv": "Under krigen.",
    "level": "Sätze"
  },
  {
    "de": "Gegen eine Wand reden.",
    "lv": "Å snakke for døve øyre.",
    "level": "Sätze"
  },
  {
    "de": "Hier haben die Wände Ohren.",
    "lv": "Her har veggene øyre.",
    "level": "Sätze"
  },
  {
    "de": "Bis wann?",
    "lv": "Til når?",
    "level": "Sätze"
  },
  {
    "de": "Es ist warm.",
    "lv": "Det er varmt.",
    "level": "Sätze"
  },
  {
    "de": "Auf eine Nachricht warten.",
    "lv": "Å vente på ei melding.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie?",
    "lv": "Kva vil du?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein...?",
    "lv": "Kva slags ...?",
    "level": "Sätze"
  },
  {
    "de": "Auf halbem Wege.",
    "lv": "Halvvegs.",
    "level": "Sätze"
  },
  {
    "de": "Auf diesem Wege.",
    "lv": "På denne måten. • Med desse midla.",
    "level": "Sätze"
  },
  {
    "de": "Auf friedlichem Wege.",
    "lv": "På fredeleg vis.",
    "level": "Sätze"
  },
  {
    "de": "Unserer Freundschaft wegen.",
    "lv": "Av omsyn til venskapen vår.",
    "level": "Sätze"
  },
  {
    "de": "Von Rechts wegen.",
    "lv": "Med rette. • Etter lova.",
    "level": "Sätze"
  },
  {
    "de": "Weh tun.",
    "lv": "Å gjere vondt.",
    "level": "Sätze"
  },
  {
    "de": "Zu Weihnachten.",
    "lv": "Til jul.",
    "level": "Sätze"
  },
  {
    "de": "Auf welche Weise?",
    "lv": "På kva måte?",
    "level": "Sätze"
  },
  {
    "de": "Art und Weise.",
    "lv": "Framgangsmåte.",
    "level": "Sätze"
  },
  {
    "de": "Ohne weiteres.",
    "lv": "Utan vidare.",
    "level": "Sätze"
  },
  {
    "de": "Bis auf weiteres.",
    "lv": "Inntil vidare.",
    "level": "Sätze"
  },
  {
    "de": "Und so weiter.",
    "lv": "Og så vidare.",
    "level": "Sätze"
  },
  {
    "de": "Weiter nichts.",
    "lv": "Ikkje noko meir.",
    "level": "Sätze"
  },
  {
    "de": "An welchem Tag?",
    "lv": "Kva dag?",
    "level": "Sätze"
  },
  {
    "de": "Alle Welt.",
    "lv": "Heile verda. • Alle og einkvar.",
    "level": "Sätze"
  },
  {
    "de": "In wenigen Tagen.",
    "lv": "Om nokre få dagar.",
    "level": "Sätze"
  },
  {
    "de": "Zu wenig.",
    "lv": "For lite.",
    "level": "Sätze"
  },
  {
    "de": "Wenn auch.",
    "lv": "Sjølv om.",
    "level": "Sätze"
  },
  {
    "de": "Wer da?",
    "lv": "Kven der?",
    "level": "Sätze"
  },
  {
    "de": "Gesammelte Werke von Schiller.",
    "lv": "Samla verk av Schiller.",
    "level": "Sätze"
  },
  {
    "de": "Ausgewählte Werke.",
    "lv": "Utvalde verk.",
    "level": "Sätze"
  },
  {
    "de": "Er ist wert, dass...",
    "lv": "Han fortener at ...",
    "level": "Sätze"
  },
  {
    "de": "Es ist zwei Euro wert.",
    "lv": "Det er verdt to euro.",
    "level": "Sätze"
  },
  {
    "de": "Nach Westen.",
    "lv": "Mot vest.",
    "level": "Sätze"
  },
  {
    "de": "Von Westen.",
    "lv": "Frå vest.",
    "level": "Sätze"
  },
  {
    "de": "In Wettbewerb treten.",
    "lv": "Å delta i ein konkurranse.",
    "level": "Sätze"
  },
  {
    "de": "Um die Wette laufen.",
    "lv": "Å løpe om kapp.",
    "level": "Sätze"
  },
  {
    "de": "Was gilt die Wette?",
    "lv": "Kva skal vi vedde?",
    "level": "Sätze"
  },
  {
    "de": "Wie wird das Wetter?",
    "lv": "Korleis blir vêret?",
    "level": "Sätze"
  },
  {
    "de": "Wettkampf im Turnen.",
    "lv": "Konkurranse i turn.",
    "level": "Sätze"
  },
  {
    "de": "Wider meinen Willen.",
    "lv": "Mot viljen min.",
    "level": "Sätze"
  },
  {
    "de": "Widerspruch erheben.",
    "lv": "Å protestere. • Å kome med innvendingar.",
    "level": "Sätze"
  },
  {
    "de": "Wie alt ist er?",
    "lv": "Kor gammal er han?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange?",
    "lv": "Kor lenge?",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiederhören!",
    "lv": "Vi høyrest!",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiedersehen!",
    "lv": "Ha det bra!",
    "level": "Sätze"
  },
  {
    "de": "Wilde Tiere.",
    "lv": "Ville dyr.",
    "level": "Sätze"
  },
  {
    "de": "Herzlich willkommen!",
    "lv": "Hjarteleg velkomen!",
    "level": "Sätze"
  },
  {
    "de": "Du musst ziehen.",
    "lv": "Det er ditt trekk.",
    "level": "Sätze"
  },
  {
    "de": "Es zieht.",
    "lv": "Det trekker.",
    "level": "Sätze"
  },
  {
    "de": "Ziemlich kalt.",
    "lv": "Ganske kaldt.",
    "level": "Sätze"
  },
  {
    "de": "Zipfel einer Wurst.",
    "lv": "Enden av ei pølse.",
    "level": "Sätze"
  },
  {
    "de": "Zu ihm gehen.",
    "lv": "Å gå til han.",
    "level": "Sätze"
  },
  {
    "de": "Zur Schule gehen.",
    "lv": "Å gå på skulen.",
    "level": "Sätze"
  },
  {
    "de": "Zu Hause bleiben.",
    "lv": "Å bli heime.",
    "level": "Sätze"
  },
  {
    "de": "Von Tag zu Tag.",
    "lv": "Dag for dag.",
    "level": "Sätze"
  },
  {
    "de": "Zum Glück.",
    "lv": "Heldigvis.",
    "level": "Sätze"
  },
  {
    "de": "Wasser zum Trinken.",
    "lv": "Drikkevatn.",
    "level": "Sätze"
  },
  {
    "de": "Zu Fuß.",
    "lv": "Til fots.",
    "level": "Sätze"
  },
  {
    "de": "Zu Pferde.",
    "lv": "Til hest.",
    "level": "Sätze"
  },
  {
    "de": "Zu Rad.",
    "lv": "På sykkel.",
    "level": "Sätze"
  },
  {
    "de": "Es hörte auf zu regnen.",
    "lv": "Det slutta å regne.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe noch viel zu tun.",
    "lv": "Eg har framleis mykje å gjere.",
    "level": "Sätze"
  },
  {
    "de": "Zu früh.",
    "lv": "For tidleg.",
    "level": "Sätze"
  },
  {
    "de": "Zu groß.",
    "lv": "For stor.",
    "level": "Sätze"
  },
  {
    "de": "Mit den Achseln zucken.",
    "lv": "Å trekke på skuldrene.",
    "level": "Sätze"
  },
  {
    "de": "In einem Zug trinken.",
    "lv": "Å drikke i éin slurk.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde gehen.",
    "lv": "Å gå til grunne.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde legen.",
    "lv": "Å legge til grunn.",
    "level": "Sätze"
  },
  {
    "de": "Zum ersten Mal.",
    "lv": "For første gong.",
    "level": "Sätze"
  },
  {
    "de": "Machen Sie bitte die Tür zu!",
    "lv": "Ver så snill og lat att døra!",
    "level": "Sätze"
  },
  {
    "de": "Er hat zugenommen.",
    "lv": "Han har lagt på seg.",
    "level": "Sätze"
  },
  {
    "de": "Die Tage nehmen zu.",
    "lv": "Dagane blir lengre.",
    "level": "Sätze"
  },
  {
    "de": "Zusammenhängen mit etwas.",
    "lv": "Å henge saman med noko.",
    "level": "Sätze"
  },
  {
    "de": "Die Tür ist zu.",
    "lv": "Døra er att.",
    "level": "Sätze"
  },
  {
    "de": "Das hätte ich ihm nicht zugetraut.",
    "lv": "Det hadde eg ikkje trudd om han.",
    "level": "Sätze"
  },
  {
    "de": "Freier Zutritt.",
    "lv": "Fri tilgang.",
    "level": "Sätze"
  },
  {
    "de": "Zutritt verboten!",
    "lv": "Ingen tilgang!",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu viel!",
    "lv": "Det er for mykje!",
    "level": "Sätze"
  },
  {
    "de": "Zuwider werden.",
    "lv": "Å bli motbydeleg. • Å begynne å by ein imot.",
    "level": "Sätze"
  },
  {
    "de": "Und zwar.",
    "lv": "Nemleg.",
    "level": "Sätze"
  },
  {
    "de": "Es steht außer Zweifel.",
    "lv": "Det er heva over all tvil.",
    "level": "Sätze"
  },
  {
    "de": "Ohne Zweifel.",
    "lv": "Utan tvil.",
    "level": "Sätze"
  },
  {
    "de": "Zum Zweiten.",
    "lv": "For det andre.",
    "level": "Sätze"
  },
  {
    "de": "Frohes neues Jahr!",
    "lv": "Godt nytt år!",
    "level": "Sätze"
  },
  {
    "de": "Herzlichen Glückwunsch zum Geburtstag!",
    "lv": "Hjarteleg gratulerer med dagen!",
    "level": "Sätze"
  },
  {
    "de": "Gute Reise!",
    "lv": "God tur!",
    "level": "Sätze"
  },
  {
    "de": "Es freut mich, Sie kennenzulernen.",
    "lv": "Det er hyggeleg å bli kjent med deg.",
    "level": "Sätze"
  },
  {
    "de": "Wären Sie bitte so nett?",
    "lv": "Kunne du vere så snill?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin Ihnen sehr dankbar.",
    "lv": "Eg er svært takksam overfor deg.",
    "level": "Sätze"
  },
  {
    "de": "Setzt euch bitte hin!",
    "lv": "Set dykk ned, er de snille!",
    "level": "Sätze"
  },
  {
    "de": "Ben, komm bitte an die Tafel!",
    "lv": "Ben, ver så snill og kom opp til tavla!",
    "level": "Sätze"
  },
  {
    "de": "Schlagt bitte die Lehrbücher auf!",
    "lv": "Opne lærebøkene dykkar, takk!",
    "level": "Sätze"
  },
  {
    "de": "Geht bitte in die Sporthalle!",
    "lv": "Gå til idrettshallen, er de snille!",
    "level": "Sätze"
  },
  {
    "de": "Schläfst du noch?",
    "lv": "Søv du framleis?",
    "level": "Sätze"
  },
  {
    "de": "Schlafen Sie noch?",
    "lv": "Søv du framleis?",
    "level": "Sätze"
  },
  {
    "de": "Er ist fest eingeschlafen.",
    "lv": "Han har falle i djup søvn.",
    "level": "Sätze"
  },
  {
    "de": "Wecke ihn bitte auf, es ist schon spät!",
    "lv": "Ver så snill og vekk han, det er allereie seint!",
    "level": "Sätze"
  },
  {
    "de": "Es tut mir sehr leid!",
    "lv": "Eg er veldig lei meg!",
    "level": "Sätze"
  },
  {
    "de": "Vielen Dank!",
    "lv": "Tusen takk!",
    "level": "Sätze"
  },
  {
    "de": "Finn, fang bitte an!",
    "lv": "Finn, ver så snill og begynn!",
    "level": "Sätze"
  },
  {
    "de": "Lest bitte mit!",
    "lv": "Les med, er de snille!",
    "level": "Sätze"
  },
  {
    "de": "Emma, schau bitte nicht aus dem Fenster!",
    "lv": "Emma, ikkje sjå ut av vindauget, er du snill!",
    "level": "Sätze"
  },
  {
    "de": "Jonas, bring bitte die Hefte!",
    "lv": "Jonas, ver så snill og kom med skrivebøkene!",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte zurück an deinen Platz!",
    "lv": "Gå tilbake til plassen din, er du snill!",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb acht.",
    "lv": "Klokka er halv åtte.",
    "level": "Sätze"
  },
  {
    "de": "Wann wachst du gewöhnlich auf?",
    "lv": "Når vaknar du vanlegvis?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe gleich auf.",
    "lv": "Eg står opp om litt.",
    "level": "Sätze"
  },
  {
    "de": "Steh auf, Hanna, es klingelt!",
    "lv": "Stå opp, Hanna, det ringer!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich noch fünf Minuten schlafen!",
    "lv": "La meg sove fem minutt til!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss nicht, das Zimmer zu lüften!",
    "lv": "Ikkje gløym å lufte ut i rommet!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist das Handtuch?",
    "lv": "Kvar er handkleet?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mir die Zähne putzen.",
    "lv": "Eg vil gjerne pusse tennene.",
    "level": "Sätze"
  },
  {
    "de": "Mit was putzt du dir die Zähne?",
    "lv": "Kva pussar du tennene med?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mich anziehen.",
    "lv": "Eg vil gjerne kle på meg.",
    "level": "Sätze"
  },
  {
    "de": "Zieh dich bitte schnell an!",
    "lv": "Kle på deg fort, er du snill!",
    "level": "Sätze"
  },
  {
    "de": "Kleide dich wärmer an, draußen ist es kühl.",
    "lv": "Kle deg varmare, det er kjølig ute.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, wie geht es dir?",
    "lv": "God morgon, korleis har du det?",
    "level": "Sätze"
  },
  {
    "de": "Mir geht es gut, danke.",
    "lv": "Eg har det bra, takk.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es Neues?",
    "lv": "Kva er nytt?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein Chaos hier!",
    "lv": "For eit rot her!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich beim Aufräumen helfen?",
    "lv": "Kan eg få hjelpe til med å rydde?",
    "level": "Sätze"
  },
  {
    "de": "Was trinkst du morgens, Kaffee oder Tee?",
    "lv": "Kva drikk du om morgonen, kaffi eller te?",
    "level": "Sätze"
  },
  {
    "de": "Gewöhnlich trinke ich morgens eine Tasse Kaffee.",
    "lv": "Vanlegvis drikk eg ein kopp kaffi om morgonen.",
    "level": "Sätze"
  },
  {
    "de": "Am liebsten trinke ich schwarzen Kaffee.",
    "lv": "Eg drikk helst svart kaffi.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, hast du gut geschlafen?",
    "lv": "God morgon, har du sove godt?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin noch sehr müde.",
    "lv": "Eg er framleis veldig trøytt.",
    "level": "Sätze"
  },
  {
    "de": "Willst du Kaffee oder Milch?",
    "lv": "Vil du ha kaffi eller mjølk?",
    "level": "Sätze"
  },
  {
    "de": "Gib mir bitte ein Brötchen mit Käse.",
    "lv": "Gi meg eit rundstykke med ost, er du snill.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss jetzt los!",
    "lv": "Eg må gå no!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss dein Frühstück nicht!",
    "lv": "Ikkje gløym frukosten din!",
    "level": "Sätze"
  },
  {
    "de": "Klara, deck bitte den Tisch!",
    "lv": "Klara, ver så snill og dekk bordet!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss die Servietten nicht!",
    "lv": "Ikkje gløym serviettane!",
    "level": "Sätze"
  },
  {
    "de": "Wann esst ihr zu Mittag?",
    "lv": "Når et de lunsj?",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit zu essen.",
    "lv": "Det er på tide å ete.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es heute zu Mittag?",
    "lv": "Kva blir det til lunsj i dag?",
    "level": "Sätze"
  },
  {
    "de": "Wie schmeckt dir die Suppe?",
    "lv": "Korleis smakar suppa?",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt ist sie etwas zu salzig.",
    "lv": "Ærleg talt er ho litt for salt.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dir ein Stück Brot geben?",
    "lv": "Kan eg gi deg eit stykke brød?",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich habe schon.",
    "lv": "Takk, eg har allereie fått.",
    "level": "Sätze"
  },
  {
    "de": "Das Fleisch schmeckt ausgezeichnet.",
    "lv": "Kjøtet smakar utmerkt.",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich bin schon satt.",
    "lv": "Takk, eg er allereie mett.",
    "level": "Sätze"
  },
  {
    "de": "Heute haben wir Besuch.",
    "lv": "I dag har vi besøk.",
    "level": "Sätze"
  },
  {
    "de": "Bist du heute Abend frei?",
    "lv": "Er du ledig i kveld?",
    "level": "Sätze"
  },
  {
    "de": "Komm doch heute zum Mittagessen vorbei!",
    "lv": "Kom innom til lunsj i dag, då!",
    "level": "Sätze"
  },
  {
    "de": "Setzen wir uns an den Tisch.",
    "lv": "La oss sette oss ved bordet.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, bedien dich!",
    "lv": "Ver så god, forsyn deg!",
    "level": "Sätze"
  },
  {
    "de": "Stört dich das Rauchen?",
    "lv": "Plagar røykinga deg?",
    "level": "Sätze"
  },
  {
    "de": "Danke für die nette Aufnahme!",
    "lv": "Takk for den hyggelege mottakinga!",
    "level": "Sätze"
  },
  {
    "de": "Wann gehst du ins Bett?",
    "lv": "Når går du og legg deg?",
    "level": "Sätze"
  },
  {
    "de": "Wenn ich von der Arbeit komme, bin ich immer müde.",
    "lv": "Når eg kjem frå jobben, er eg alltid trøytt.",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, ins Bett zu gehen.",
    "lv": "Det er på tide å gå og legge seg.",
    "level": "Sätze"
  },
  {
    "de": "Es ist schönes Wetter.",
    "lv": "Det er fint vêr.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mit mir spazieren gehen?",
    "lv": "Vil du gå ein tur med meg?",
    "level": "Sätze"
  },
  {
    "de": "Sieh mal, es wird gleich regnen.",
    "lv": "Sjå, det kjem til å regne snart.",
    "level": "Sätze"
  },
  {
    "de": "Nimm den Regenschirm mit!",
    "lv": "Ta med paraplyen!",
    "level": "Sätze"
  },
  {
    "de": "Es regnet.",
    "lv": "Det regnar.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin schon ganz nass.",
    "lv": "Eg er allereie heilt våt.",
    "level": "Sätze"
  },
  {
    "de": "Glaubst du, dass es den ganzen Tag regnen wird?",
    "lv": "Trur du det kjem til å regne heile dagen?",
    "level": "Sätze"
  },
  {
    "de": "Es hört auf zu regnen.",
    "lv": "Det sluttar å regne.",
    "level": "Sätze"
  },
  {
    "de": "Die Sonne scheint wieder.",
    "lv": "Sola skin igjen.",
    "level": "Sätze"
  },
  {
    "de": "Es ist sehr warm.",
    "lv": "Det er veldig varmt.",
    "level": "Sätze"
  },
  {
    "de": "Es sieht nach Regen aus.",
    "lv": "Det ser ut til å bli regn.",
    "level": "Sätze"
  },
  {
    "de": "Wir bekommen gleich ein Gewitter.",
    "lv": "Vi får snart torevêr.",
    "level": "Sätze"
  },
  {
    "de": "Das Gewitter zieht vorüber.",
    "lv": "Torevêret går over.",
    "level": "Sätze"
  },
  {
    "de": "Die Wolken verziehen sich.",
    "lv": "Skyene forsvinn.",
    "level": "Sätze"
  },
  {
    "de": "Siehst du den Regenbogen?",
    "lv": "Ser du regnbogen?",
    "level": "Sätze"
  },
  {
    "de": "Der Winter ist da, es hat geschneit.",
    "lv": "Vinteren er her, det har snødd.",
    "level": "Sätze"
  },
  {
    "de": "Es schneit.",
    "lv": "Det snør.",
    "level": "Sätze"
  },
  {
    "de": "Wie schön ist es im Wald im Winter!",
    "lv": "Så vakkert det er i skogen om vinteren!",
    "level": "Sätze"
  },
  {
    "de": "Mir ist kalt, ich friere.",
    "lv": "Eg er kald, eg frys.",
    "level": "Sätze"
  },
  {
    "de": "Draußen ist Glatteis, pass auf!",
    "lv": "Det er glatt ute, pass på!",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir auf die Eisbahn gehen?",
    "lv": "Skal vi gå på skøytebanen?",
    "level": "Sätze"
  },
  {
    "de": "Zieh die Jacke an, du kannst dich erkälten.",
    "lv": "Ta på deg jakka, du kan bli forkjølt.",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb sieben.",
    "lv": "Klokka er halv sju.",
    "level": "Sätze"
  },
  {
    "de": "Meine Uhr geht fünf Minuten vor.",
    "lv": "Klokka mi går fem minutt for fort.",
    "level": "Sätze"
  },
  {
    "de": "Weck mich morgen früh um sieben Uhr!",
    "lv": "Vekk meg klokka sju i morgon tidleg!",
    "level": "Sätze"
  },
  {
    "de": "Was ist heute für ein Datum?",
    "lv": "Kva dato er det i dag?",
    "level": "Sätze"
  },
  {
    "de": "Heute ist der elfte Juli.",
    "lv": "I dag er det den ellevte juli.",
    "level": "Sätze"
  },
  {
    "de": "Was machst du gewöhnlich am Abend?",
    "lv": "Kva pleier du å gjere om kvelden?",
    "level": "Sätze"
  },
  {
    "de": "Es ist schon lange her, dass wir uns gesehen haben.",
    "lv": "Det er lenge sidan vi såg kvarandre sist.",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es dir?",
    "lv": "Korleis har du det?",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, ich möchte etwas mit dir besprechen.",
    "lv": "Orsak, eg vil gjerne snakke med deg om noko.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir spazieren!",
    "lv": "La oss gå ein tur!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Lust, mit mir in den Park zu gehen?",
    "lv": "Har du lyst til å bli med meg i parken?",
    "level": "Sätze"
  },
  {
    "de": "Ich komme, um dich zum Spaziergang abzuholen.",
    "lv": "Eg kjem for å hente deg med på tur.",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte etwas langsamer, ich kann dir nicht folgen!",
    "lv": "Gå litt saktare, er du snill, eg klarer ikkje å halde følgje med deg!",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zum ersten Mal in dieser Gegend.",
    "lv": "Det er første gong eg er i dette området.",
    "level": "Sätze"
  },
  {
    "de": "Ruhen wir uns ein wenig aus.",
    "lv": "La oss kvile litt.",
    "level": "Sätze"
  },
  {
    "de": "Jetzt können wir zurückgehen.",
    "lv": "No kan vi gå tilbake.",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt bin ich ziemlich müde.",
    "lv": "Ærleg talt er eg ganske trøytt.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, wo ist die nächste U-Bahn-Station?",
    "lv": "Orsak, kvar er næraste T-banestasjon?",
    "level": "Sätze"
  },
  {
    "de": "Welcher ist der kürzeste Weg?",
    "lv": "Kva veg er kortast?",
    "level": "Sätze"
  },
  {
    "de": "Geh hier die zweite Straße links und dann immer geradeaus.",
    "lv": "Ta den andre gata til venstre her, og gå så rett fram.",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich am schnellsten zum Bahnhof?",
    "lv": "Korleis kjem eg raskast til stasjonen?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe vor, morgen zu verreisen.",
    "lv": "Eg har tenkt å reise bort i morgon.",
    "level": "Sätze"
  },
  {
    "de": "Wohin willst du fahren?",
    "lv": "Kvar vil du reise?",
    "level": "Sätze"
  },
  {
    "de": "Reist du geschäftlich oder privat?",
    "lv": "Reiser du i jobbsamanheng eller privat?",
    "level": "Sätze"
  },
  {
    "de": "Finn fährt bis Berlin mit, dann geht er ans Meer.",
    "lv": "Finn blir med til Berlin, så dreg han til sjøen.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt das Schiff ab?",
    "lv": "Når går skipet?",
    "level": "Sätze"
  },
  {
    "de": "In einer halben Stunde.",
    "lv": "Om ein halvtime.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich noch eine Kabine bekommen?",
    "lv": "Kan eg enno få ein lugar?",
    "level": "Sätze"
  },
  {
    "de": "Vergiss deinen Pass nicht!",
    "lv": "Ikkje gløym passet ditt!",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, den Koffer zu packen.",
    "lv": "Det er på tide å pakke kofferten.",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt um halb sieben ab.",
    "lv": "Toget går klokka halv sju.",
    "level": "Sätze"
  },
  {
    "de": "Hol mir bitte ein Taxi, ich verpasse sonst den Zug!",
    "lv": "Bestill ein taxi til meg, er du snill, elles rekk eg ikkje toget!",
    "level": "Sätze"
  },
  {
    "de": "Fahr bitte zum Bahnhof!",
    "lv": "Køyr til stasjonen, er du snill!",
    "level": "Sätze"
  },
  {
    "de": "Ich muss mich beeilen.",
    "lv": "Eg må skunde meg.",
    "level": "Sätze"
  },
  {
    "de": "Ist der Schalter schon offen?",
    "lv": "Er billettluka alt open?",
    "level": "Sätze"
  },
  {
    "de": "Eine Fahrkarte nach Köln, bitte.",
    "lv": "Ein billett til Köln, takk.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt der Zug ab?",
    "lv": "Når går toget?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt gleich ab.",
    "lv": "Toget går straks.",
    "level": "Sätze"
  },
  {
    "de": "Muss ich in Koblenz umsteigen?",
    "lv": "Må eg byte tog i Koblenz?",
    "level": "Sätze"
  },
  {
    "de": "Ja, dort musst du umsteigen.",
    "lv": "Ja, der må du byte.",
    "level": "Sätze"
  },
  {
    "de": "Ist dieser Platz frei?",
    "lv": "Er denne plassen ledig?",
    "level": "Sätze"
  },
  {
    "de": "Nein, hier sitzt niemand.",
    "lv": "Nei, det sit ingen her.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der Bahnsteigkartenautomat?",
    "lv": "Kvar er automaten for perrongbillettar?",
    "level": "Sätze"
  },
  {
    "de": "Stell mein Handgepäck ins Gepäcknetz.",
    "lv": "Legg handbagasjen min i bagasjehylla.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das Fenster aufmachen?",
    "lv": "Kan eg opne vindauget?",
    "level": "Sätze"
  },
  {
    "de": "Es zieht, schließ bitte das Fenster!",
    "lv": "Det trekker, lukk vindauget, er du snill!",
    "level": "Sätze"
  },
  {
    "de": "Welche ist die nächste Station?",
    "lv": "Kva er neste stasjon?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange hält der Zug?",
    "lv": "Kor lenge stoppar toget?",
    "level": "Sätze"
  },
  {
    "de": "Wo muss ich umsteigen?",
    "lv": "Kvar må eg byte?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug hat Verspätung.",
    "lv": "Toget er forseinka.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Wagen ist für Nichtraucher.",
    "lv": "Denne vogna er for ikkje-røykjarar.",
    "level": "Sätze"
  },
  {
    "de": "Wir fahren jetzt über die Grenze.",
    "lv": "No køyrer vi over grensa.",
    "level": "Sätze"
  },
  {
    "de": "Hast du etwas zu verzollen?",
    "lv": "Har du noko å fortolle?",
    "level": "Sätze"
  },
  {
    "de": "Wir sind in Berlin angekommen.",
    "lv": "Vi har kome fram til Berlin.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir ein gutes Hotel empfehlen?",
    "lv": "Kan du anbefale meg eit godt hotell?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie freie Zimmer?",
    "lv": "Har du ledige rom?",
    "level": "Sätze"
  },
  {
    "de": "Ein Zimmer mit zwei Betten, bitte.",
    "lv": "Eit rom med to senger, takk.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Zimmer pro Nacht?",
    "lv": "Kva kostar rommet per natt?",
    "level": "Sätze"
  },
  {
    "de": "Morgen reise ich ab. Weck mich um sieben Uhr!",
    "lv": "I morgon reiser eg. Vekk meg klokka sju!",
    "level": "Sätze"
  },
  {
    "de": "Die Rechnung, bitte!",
    "lv": "Rekninga, takk!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Stadtbibliothek?",
    "lv": "Kvar er biblioteket i byen?",
    "level": "Sätze"
  },
  {
    "de": "Wann hat das Museum geöffnet?",
    "lv": "Når er museet ope?",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir ins Museum gehen?",
    "lv": "Skal vi gå på museum?",
    "level": "Sätze"
  },
  {
    "de": "Fahren wir mit dem Bus oder der U-Bahn?",
    "lv": "Skal vi ta bussen eller T-banen?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die nächste Bushaltestelle?",
    "lv": "Kvar er næraste busshaldeplass?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe großen Hunger.",
    "lv": "Eg er veldig svolten.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir zusammen essen?",
    "lv": "Skal vi gå ut og ete saman?",
    "level": "Sätze"
  },
  {
    "de": "Kellner, die Speisekarte, bitte!",
    "lv": "Kelner, menyen, takk!",
    "level": "Sätze"
  },
  {
    "de": "Ist der Fisch frisch?",
    "lv": "Er fisken fersk?",
    "level": "Sätze"
  },
  {
    "de": "Das schmeckt ausgezeichnet!",
    "lv": "Dette smakar utmerkt!",
    "level": "Sätze"
  },
  {
    "de": "Kellner, zahlen bitte!",
    "lv": "Kelner, eg vil gjerne betale!",
    "level": "Sätze"
  },
  {
    "de": "Ich gehe ins Café einen Kaffee trinken.",
    "lv": "Eg går på kafé for å drikke ein kopp kaffi.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mitkommen?",
    "lv": "Vil du bli med?",
    "level": "Sätze"
  },
  {
    "de": "Eine Tasse Kaffee mit Milch, bitte!",
    "lv": "Ein kopp kaffi med mjølk, takk!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneller, ich habe es eilig!",
    "lv": "Fortare, er du snill, eg har det travelt!",
    "level": "Sätze"
  },
  {
    "de": "Lass deinen Kaffee nicht kalt werden!",
    "lv": "Ikkje la kaffien din bli kald!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie etwas Erfrischendes?",
    "lv": "Har du noko forfriskande?",
    "level": "Sätze"
  },
  {
    "de": "Eine Portion Eis, bitte!",
    "lv": "Ein porsjon is, takk!",
    "level": "Sätze"
  },
  {
    "de": "Heute Morgen habe ich einen Brief bekommen.",
    "lv": "I dag tidleg fekk eg eit brev.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss ihm gleich schreiben.",
    "lv": "Eg må skrive til han med ein gong.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der nächste Briefkasten?",
    "lv": "Kvar er næraste postkasse?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Post?",
    "lv": "Kvar er postkontoret?",
    "level": "Sätze"
  },
  {
    "de": "Erinnere mich morgen daran zu schreiben!",
    "lv": "Minn meg på å skrive i morgon!",
    "level": "Sätze"
  },
  {
    "de": "Werfen Sie bitte diesen Brief in den Briefkasten.",
    "lv": "Ver så snill og legg dette brevet i postkassa.",
    "level": "Sätze"
  },
  {
    "de": "Hallo, hier spricht Emma.",
    "lv": "Hallo, det er Emma.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich dich später anrufen?",
    "lv": "Kan eg ringe deg seinare?",
    "level": "Sätze"
  },
  {
    "de": "Muss ich lange warten?",
    "lv": "Må eg vente lenge?",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneiden Sie mir die Haare.",
    "lv": "Ver så snill og klipp håret mitt.",
    "level": "Sätze"
  },
  {
    "de": "Hinten bitte nicht zu kurz.",
    "lv": "Ikkje for kort bak, takk.",
    "level": "Sätze"
  },
  {
    "de": "Wann beginnt die Vorstellung?",
    "lv": "Når begynner framsyninga?",
    "level": "Sätze"
  },
  {
    "de": "Es fängt um halb acht an.",
    "lv": "Det begynner halv åtte.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind ausverkauft.",
    "lv": "Alle plassane er utselde.",
    "level": "Sätze"
  },
  {
    "de": "Drei Karten, bitte!",
    "lv": "Tre billettar, takk!",
    "level": "Sätze"
  },
  {
    "de": "Wir lassen die Jacken in der Garderobe.",
    "lv": "Vi legg jakkene igjen i garderoben.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schnell, der Vorhang geht gleich auf!",
    "lv": "Fort, er du snill, teppet går opp straks!",
    "level": "Sätze"
  },
  {
    "de": "Der Vorhang fällt.",
    "lv": "Teppet fell.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dich zum Tanz bitten?",
    "lv": "Får eg be deg opp til dans?",
    "level": "Sätze"
  },
  {
    "de": "Wann ist eure Hochzeit?",
    "lv": "Når er bryllaupet dykkar?",
    "level": "Sätze"
  },
  {
    "de": "Ich suche eine Wohnung.",
    "lv": "Eg leitar etter ei leilegheit.",
    "level": "Sätze"
  },
  {
    "de": "Ist in diesem Haus eine Wohnung frei?",
    "lv": "Er det ei ledig leilegheit i dette huset?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet die Miete?",
    "lv": "Kor mykje er husleiga?",
    "level": "Sätze"
  },
  {
    "de": "Die Wohnung hat drei Zimmer und eine Küche.",
    "lv": "Leilegheita har tre rom og kjøkken.",
    "level": "Sätze"
  },
  {
    "de": "Heute ziehen wir um.",
    "lv": "I dag flyttar vi.",
    "level": "Sätze"
  },
  {
    "de": "Mia, pack die Sachen bitte in Kisten!",
    "lv": "Mia, pakk tinga ned i esker, er du snill!",
    "level": "Sätze"
  },
  {
    "de": "Hast du alles eingepackt?",
    "lv": "Har du pakka alt?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe mit meinem Freund in Kontakt.",
    "lv": "Eg er i kontakt med vennen min.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir ins Theater?",
    "lv": "Skal vi gå på teater?",
    "level": "Sätze"
  },
  {
    "de": "Ist alles eingeladen?",
    "lv": "Er alt lasta inn?",
    "level": "Sätze"
  },
  {
    "de": "Welch schöne Aussicht!",
    "lv": "For ei vakker utsikt!",
    "level": "Sätze"
  },
  {
    "de": "Nun können wir alles wieder aufräumen.",
    "lv": "No kan vi rydde alt på plass igjen.",
    "level": "Sätze"
  },
  {
    "de": "Wie viele Zimmer habt ihr?",
    "lv": "Kor mange rom har de?",
    "level": "Sätze"
  },
  {
    "de": "Im Sommer fahre ich ans Meer.",
    "lv": "Om sommaren reiser eg til sjøen.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du schwimmen?",
    "lv": "Kan du symje?",
    "level": "Sätze"
  },
  {
    "de": "Schwimm nicht zu weit hinaus!",
    "lv": "Ikkje sym for langt ut!",
    "level": "Sätze"
  },
  {
    "de": "Badest du jeden Tag?",
    "lv": "Badar du kvar dag?",
    "level": "Sätze"
  },
  {
    "de": "Bei schönem Wetter gehe ich angeln.",
    "lv": "Når det er fint vêr, går eg og fiskar.",
    "level": "Sätze"
  },
  {
    "de": "Wie sieht er aus?",
    "lv": "Korleis ser han ut?",
    "level": "Sätze"
  },
  {
    "de": "Er hat sich aber recht verändert.",
    "lv": "Han har jammen endra seg ganske mykje.",
    "level": "Sätze"
  },
  {
    "de": "Wie ist er als Mensch?",
    "lv": "Korleis er han som menneske?",
    "level": "Sätze"
  },
  {
    "de": "Er ist immer nett und freundlich.",
    "lv": "Han er alltid hyggeleg og vennleg.",
    "level": "Sätze"
  },
  {
    "de": "Ich fühle mich nicht wohl.",
    "lv": "Eg kjenner meg ikkje bra.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe starke Kopfschmerzen.",
    "lv": "Eg har sterk hovudverk.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe mich erkältet.",
    "lv": "Eg har blitt forkjølt.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Schnupfen.",
    "lv": "Eg har snue.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist schwindlig.",
    "lv": "Eg er svimmel.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Arzt gehen.",
    "lv": "Eg må gå til legen.",
    "level": "Sätze"
  },
  {
    "de": "Leg dich ins Bett!",
    "lv": "Legg deg i senga!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Fieber?",
    "lv": "Har du feber?",
    "level": "Sätze"
  },
  {
    "de": "Gestern hatte ich erhöhte Temperatur.",
    "lv": "I går hadde eg forhøgd temperatur.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Zahnschmerzen.",
    "lv": "Eg har tannverk.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Zahnarzt gehen.",
    "lv": "Eg må gå til tannlegen.",
    "level": "Sätze"
  },
  {
    "de": "Weißt du, dass Finn krank ist?",
    "lv": "Veit du at Finn er sjuk?",
    "level": "Sätze"
  },
  {
    "de": "Laut Arzt wird er bald wieder gesund.",
    "lv": "Ifølgje legen blir han snart frisk igjen.",
    "level": "Sätze"
  },
  {
    "de": "Ich will meine Wohnung neu möblieren.",
    "lv": "Eg vil møblere leilegheita mi på nytt.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das auf Raten kaufen?",
    "lv": "Kan eg kjøpe det på avbetaling?",
    "level": "Sätze"
  },
  {
    "de": "Bleib im Bett, bis es dir besser geht!",
    "lv": "Bli i senga til du kjenner deg betre!",
    "level": "Sätze"
  },
  {
    "de": "Noah hat in zwei Wochen schwimmen gelernt.",
    "lv": "Noah lærte å symje på to veker.",
    "level": "Sätze"
  },
  {
    "de": "Sei mit dem Essen noch vorsichtig.",
    "lv": "Ver framleis forsiktig med maten.",
    "level": "Sätze"
  },
  {
    "de": "Sprichst du Deutsch?",
    "lv": "Snakkar du tysk?",
    "level": "Sätze"
  },
  {
    "de": "Ja, ein bisschen.",
    "lv": "Ja, litt.",
    "level": "Sätze"
  },
  {
    "de": "Du sprichst ziemlich fließend.",
    "lv": "Du snakkar ganske flytande.",
    "level": "Sätze"
  },
  {
    "de": "Wo hast du Deutsch gelernt?",
    "lv": "Kvar har du lært tysk?",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme seit einem Jahr Deutschstunden.",
    "lv": "Eg har hatt tysktimar i eit år.",
    "level": "Sätze"
  },
  {
    "de": "Ich suche immer Gelegenheit, Deutsch zu sprechen.",
    "lv": "Eg ser alltid etter høve til å snakke tysk.",
    "level": "Sätze"
  },
  {
    "de": "Ist das Buch noch vorrätig?",
    "lv": "Er boka framleis på lager?",
    "level": "Sätze"
  },
  {
    "de": "Das Buch ist leider ausverkauft.",
    "lv": "Boka er dessverre utseld.",
    "level": "Sätze"
  },
  {
    "de": "Wann erscheint die neue Auflage?",
    "lv": "Når kjem den nye utgåva ut?",
    "level": "Sätze"
  },
  {
    "de": "Womit kann ich Ihnen helfen?",
    "lv": "Kva kan eg hjelpe deg med?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie ganz frische Eier?",
    "lv": "Har du heilt ferske egg?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die?",
    "lv": "Kva kostar dei?",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu teuer.",
    "lv": "Det er for dyrt.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir ein halbes Kilo abwiegen?",
    "lv": "Kan du vege opp ein halv kilo til meg?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel muss ich zahlen?",
    "lv": "Kor mykje må eg betale?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet das Kilo?",
    "lv": "Kor mykje kostar det per kilo?",
    "level": "Sätze"
  },
  {
    "de": "Wiegen Sie mir bitte zwei Kilo ab.",
    "lv": "Ver så snill og veg opp to kilo til meg.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch Karotten?",
    "lv": "Har du gulrøter også?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie gutes Rindfleisch?",
    "lv": "Har du godt oksekjøt?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir zwei Kilo Hackfleisch.",
    "lv": "Gi meg to kilo kjøtdeig.",
    "level": "Sätze"
  },
  {
    "de": "Ein Laib Brot, bitte, aber nicht zu knusprig.",
    "lv": "Eit brød, takk, men ikkje for sprøtt.",
    "level": "Sätze"
  },
  {
    "de": "Das Brot ist frisch gebacken.",
    "lv": "Brødet er nybakt.",
    "level": "Sätze"
  },
  {
    "de": "Was für Obst haben Sie heute?",
    "lv": "Kva slags frukt har du i dag?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die Äpfel?",
    "lv": "Kva kostar epla?",
    "level": "Sätze"
  },
  {
    "de": "Dann nehme ich zwei Kilo Äpfel.",
    "lv": "Då tek eg to kilo eple.",
    "level": "Sätze"
  },
  {
    "de": "Die Birnen sind sehr teuer.",
    "lv": "Pærene er svært dyre.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir alles nach Hause liefern?",
    "lv": "Kan du levere alt heim til meg?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie Reis?",
    "lv": "Har du ris?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir bitte ein Kilo Reis.",
    "lv": "Gi meg ein kilo ris, takk.",
    "level": "Sätze"
  },
  {
    "de": "Danke, diesmal nicht.",
    "lv": "Takk, ikkje denne gongen.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet dieser Teppich?",
    "lv": "Kor mykje kostar dette teppet?",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Möbel in meine Wohnung liefern?",
    "lv": "Kan du levere møblane til leilegheita mi?",
    "level": "Sätze"
  },
  {
    "de": "Bitte an der Kasse zahlen.",
    "lv": "Betal i kassa, takk.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, machen Sie die Rechnung.",
    "lv": "Ver så snill og skriv ut rekninga.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Meter?",
    "lv": "Kva kostar meteren?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Stoff gefällt mir.",
    "lv": "Eg liker dette stoffet.",
    "level": "Sätze"
  },
  {
    "de": "Schneiden Sie mir bitte drei Meter ab.",
    "lv": "Ver så snill og klipp av tre meter til meg.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch andere Muster?",
    "lv": "Har du andre mønster også? • Har du andre prøver også?",
    "level": "Sätze"
  },
  {
    "de": "Diese Farbe gefällt mir nicht.",
    "lv": "Eg liker ikkje denne fargen.",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir eine hellere.",
    "lv": "Gi meg ein lysare.",
    "level": "Sätze"
  },
  {
    "de": "Was kosten diese Socken?",
    "lv": "Kva kostar desse sokkane?",
    "level": "Sätze"
  },
  {
    "de": "Welche Handschuhe wünschen Sie?",
    "lv": "Kva for hanskar vil du ha?",
    "level": "Sätze"
  },
  {
    "de": "Die sind mir etwas zu eng.",
    "lv": "Dei er litt for tronge for meg.",
    "level": "Sätze"
  },
  {
    "de": "So, nun passen sie gut.",
    "lv": "Sånn, no passar dei godt.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir einen guten Schneider empfehlen?",
    "lv": "Kan du anbefale meg ein god skreddar?",
    "level": "Sätze"
  },
  {
    "de": "Ich will einen Anzug bestellen.",
    "lv": "Eg vil bestille ein dress.",
    "level": "Sätze"
  },
  {
    "de": "Wann wird er fertig sein?",
    "lv": "Når blir han ferdig?",
    "level": "Sätze"
  },
  {
    "de": "Der Anzug sitzt gut.",
    "lv": "Dressen sit godt.",
    "level": "Sätze"
  },
  {
    "de": "Die Hose ist zu lang.",
    "lv": "Buksa er for lang.",
    "level": "Sätze"
  },
  {
    "de": "Bitte reinigen und bügeln Sie ihn!",
    "lv": "Reins og stryk han, takk!",
    "level": "Sätze"
  },
  {
    "de": "Wann wird das Kleid fertig sein?",
    "lv": "Når blir kjolen ferdig?",
    "level": "Sätze"
  },
  {
    "de": "Die Schuhe sind zu eng.",
    "lv": "Skorne er for tronge.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Schuhe heute reparieren?",
    "lv": "Kan du reparere skorne i dag?",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich die Schuhe abholen?",
    "lv": "Når kan eg hente skorne?",
    "level": "Sätze"
  },
  {
    "de": "Meine Armbanduhr funktioniert nicht.",
    "lv": "Armbandsuret mitt fungerer ikkje.",
    "level": "Sätze"
  },
  {
    "de": "Sie geht fünf Minuten vor.",
    "lv": "Det går fem minutt for fort.",
    "level": "Sätze"
  },
  {
    "de": "Bist du kurzsichtig oder weitsichtig?",
    "lv": "Er du nærsynt eller langsynt?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte eine Brille kaufen.",
    "lv": "Eg vil gjerne kjøpe briller.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie meine Brille reparieren?",
    "lv": "Kan du reparere brillene mine?",
    "level": "Sätze"
  },
  {
    "de": "Das dauert nur eine Viertelstunde.",
    "lv": "Det tek berre eit kvarter.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist mir zu hoch.",
    "lv": "Prisen er for høg for meg.",
    "level": "Sätze"
  },
  {
    "de": "Ich brauche zwei Fotos für meinen Pass.",
    "lv": "Eg treng to bilete til passet mitt.",
    "level": "Sätze"
  },
  {
    "de": "Bitte packen Sie es ein und schicken Sie es mir nach Hause.",
    "lv": "Pakk det inn og send det heim til meg, takk.",
    "level": "Sätze"
  },
  {
    "de": "Wir haben feste Preise.",
    "lv": "Vi har faste prisar.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, fotografieren Sie mich.",
    "lv": "Ver så snill og ta eit bilete av meg.",
    "level": "Sätze"
  },
  {
    "de": "Setzen Sie sich, schauen Sie gerade in die Kamera und bewegen Sie sich nicht!",
    "lv": "Set deg, sjå rett inn i kameraet og ikkje rør deg!",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich das Probebild sehen?",
    "lv": "Når kan eg sjå prøvekopien?",
    "level": "Sätze"
  },
  {
    "de": "Wann sind die Fotos fertig?",
    "lv": "Når er bileta ferdige?",
    "level": "Sätze"
  },
  {
    "de": "Die Aufnahme ist gelungen.",
    "lv": "Biletet er vellukka.",
    "level": "Sätze"
  },
  {
    "de": "Die Fotos sind gut geworden.",
    "lv": "Bileta vart bra.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie das Foto auch vergrößern?",
    "lv": "Kan du også forstørre biletet?",
    "level": "Sätze"
  },
  {
    "de": "Sind diese Steine echt?",
    "lv": "Er desse steinane ekte?",
    "level": "Sätze"
  },
  {
    "de": "Ist das echtes Gold?",
    "lv": "Er det ekte gull?",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir bitte Trauringe.",
    "lv": "Ver så snill og vis meg nokre giftarringar.",
    "level": "Sätze"
  },
  {
    "de": "Der Ring ist mir etwas zu weit.",
    "lv": "Ringen er litt for stor for meg.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann ihn enger machen.",
    "lv": "Eg kan gjere han mindre.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Ring passt mir.",
    "lv": "Denne ringen passar meg.",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir schöne Geschenkideen.",
    "lv": "Vis meg nokre fine gåveidear.",
    "level": "Sätze"
  },
  {
    "de": "Wie gefallen dir diese Ohrringe?",
    "lv": "Kva synest du om desse øyreringane?",
    "level": "Sätze"
  },
  {
    "de": "Diese Brosche ist wirklich schön.",
    "lv": "Denne brosja er verkeleg fin.",
    "level": "Sätze"
  },
  {
    "de": "Der Stein ist ein Saphir.",
    "lv": "Steinen er ein safir.",
    "level": "Sätze"
  },
  {
    "de": "Das ist kein echter Stein, das ist Glas.",
    "lv": "Det er ikkje ein ekte stein, det er glas.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Armband kann ich Ihnen besonders empfehlen.",
    "lv": "Dette armbandet kan eg særleg anbefale deg.",
    "level": "Sätze"
  },
  {
    "de": "Es ist besonders schön gearbeitet.",
    "lv": "Det er særleg fint laga.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist nicht hoch.",
    "lv": "Prisen er ikkje høg.",
    "level": "Sätze"
  },
  {
    "de": "Bekomme ich die Schachtel gratis?",
    "lv": "Får eg eska gratis?",
    "level": "Sätze"
  },
  {
    "de": "Alle Schmuckstücke sind gestempelt.",
    "lv": "Alle smykka er stempla.",
    "level": "Sätze"
  },
  {
    "de": "Falls es meiner Frau nicht gefällt, kann ich es umtauschen?",
    "lv": "Viss kona mi ikkje liker det, kan eg byte det?",
    "level": "Sätze"
  },
  {
    "de": "Natürlich, jederzeit.",
    "lv": "Sjølvsagt, når som helst.",
    "level": "Sätze"
  }
];

window.SENTENCE_ENTRIES = SENTENCE_ENTRIES;

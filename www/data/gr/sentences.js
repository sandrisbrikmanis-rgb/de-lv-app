const SENTENCE_ENTRIES = [
  {
    "de": "Hüte dich davor!",
    "lv": "Προσοχή!",
    "level": "Sätze"
  },
  {
    "de": "Wenn nichts dazwischenkommt.",
    "lv": "Αν δεν παρεμβαίνει τίποτα. • Αν όλα πάνε σύμφωνα με το σχέδιο.",
    "level": "Sätze"
  },
  {
    "de": "Das kann ich mir denken!",
    "lv": "Το ξέρω ήδη!",
    "level": "Sätze"
  },
  {
    "de": "Ist er denn krank?",
    "lv": "Είναι άρρωστος λοιπόν • ",
    "level": "Sätze"
  },
  {
    "de": "Was denn?",
    "lv": "Και λοιπόν • ",
    "level": "Sätze"
  },
  {
    "de": "Desto mehr.",
    "lv": "Πόσο μάλλον.",
    "level": "Sätze"
  },
  {
    "de": "Je mehr, desto besser.",
    "lv": "Όσο περισσότερα τόσο καλύτερα.",
    "level": "Sätze"
  },
  {
    "de": "Alles deutet auf Regen.",
    "lv": "Όλα δείχνουν βροχή.",
    "level": "Sätze"
  },
  {
    "de": "Damit ist mir wenig gedient.",
    "lv": "Ελάχιστα μου χρησιμεύει.",
    "level": "Sätze"
  },
  {
    "de": "Er ist dienstlich verhindert.",
    "lv": "Δεν μπορεί να έρθει λόγω υπηρεσιακών υποχρεώσεων.",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie doch!",
    "lv": "Μίλα ήδη!",
    "level": "Sätze"
  },
  {
    "de": "Es donnert.",
    "lv": "Γουργουρίζει.",
    "level": "Sätze"
  },
  {
    "de": "Doppelt so groß.",
    "lv": "Διπλάσια.",
    "level": "Sätze"
  },
  {
    "de": "Von dort.",
    "lv": "Από εκεί.",
    "level": "Sätze"
  },
  {
    "de": "Die Zeit drängt.",
    "lv": "Ο χρόνος τελειώνει.",
    "level": "Sätze"
  },
  {
    "de": "Ihn drücken Sorgen.",
    "lv": "Καταπιέζεται από ανησυχίες.",
    "level": "Sätze"
  },
  {
    "de": "Hast du das Buch durchgearbeitet?",
    "lv": "Έχετε μελετήσει προσεκτικά το βιβλίο • ",
    "level": "Sätze"
  },
  {
    "de": "Kein Durchgang!",
    "lv": "Το πέρασμα έκλεισε!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich Sie bitten?",
    "lv": "Να σε ρωτήσω • ",
    "level": "Sätze"
  },
  {
    "de": "Ich bin durstig.",
    "lv": "Διψάω.",
    "level": "Sätze"
  },
  {
    "de": "Eben das meine ich.",
    "lv": "Αυτό ακριβώς εννοώ.",
    "level": "Sätze"
  },
  {
    "de": "Es ist ganz egal.",
    "lv": "Δεν πειράζει καθόλου.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie eigentlich?",
    "lv": "Τι πραγματικά θέλεις • ",
    "level": "Sätze"
  },
  {
    "de": "Eilt es mit dieser Sache?",
    "lv": "Είναι επείγον αυτό το θέμα • ",
    "level": "Sätze"
  },
  {
    "de": "Eilt sehr!",
    "lv": "Πολύ γρήγορα!",
    "level": "Sätze"
  },
  {
    "de": "Ich habe es eilig.",
    "lv": "Βιάζομαι.",
    "level": "Sätze"
  },
  {
    "de": "Du bildest dir nur ein, krank zu sein.",
    "lv": "Φαντάζεσαι μόνο ότι είσαι άρρωστος.",
    "level": "Sätze"
  },
  {
    "de": "Was fällt dir ein?",
    "lv": "Τι σου έρχεται στο μυαλό • ",
    "level": "Sätze"
  },
  {
    "de": "Es war einmal.",
    "lv": "Υπήρχε κάποτε.",
    "level": "Sätze"
  },
  {
    "de": "Steigen Sie bitte ein!",
    "lv": "Παρακαλώ προχωρήστε!",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie ein!",
    "lv": "Παρακαλώ μπείτε!",
    "level": "Sätze"
  },
  {
    "de": "Einzelnes hat mir dort gefallen.",
    "lv": "Μου άρεσαν κάποια πράγματα εκεί.",
    "level": "Sätze"
  },
  {
    "de": "Es empfiehlt sich.",
    "lv": "Συνιστάται.",
    "level": "Sätze"
  },
  {
    "de": "Diese Flasche enthält Essig.",
    "lv": "Υπάρχει ξύδι σε αυτό το μπουκάλι.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldigen Sie bitte!",
    "lv": "Με συγχωρείτε, παρακαλώ!",
    "level": "Sätze"
  },
  {
    "de": "Entweder... oder...",
    "lv": "Είτε... είτε...",
    "level": "Sätze"
  },
  {
    "de": "Wer war der Erste?",
    "lv": "Ποιος ήταν ο πρώτος • ",
    "level": "Sätze"
  },
  {
    "de": "Wer fehlt heute?",
    "lv": "Ποιος απουσιάζει σήμερα • ",
    "level": "Sätze"
  },
  {
    "de": "Was fehlt dir?",
    "lv": "Τι σου συμβαίνει",
    "level": "Sätze"
  },
  {
    "de": "Wie heißen Sie?",
    "lv": "Ποιο είναι το όνομά σου",
    "level": "Sätze"
  },
  {
    "de": "Was soll das heißen?",
    "lv": "Τι σημαίνει αυτό • ",
    "level": "Sätze"
  },
  {
    "de": "Bitte treten Sie näher heran!",
    "lv": "Παρακαλώ ελάτε πιο κοντά!",
    "level": "Sätze"
  },
  {
    "de": "Heraus mit der Sprache!",
    "lv": "Μιλώ ανοιχτά! • Μίλα!",
    "level": "Sätze"
  },
  {
    "de": "im Herbst",
    "lv": "Το φθινόπωρο",
    "level": "Sätze"
  },
  {
    "de": "Meine Herrschaften!",
    "lv": "Κυρίες και κύριοι!",
    "level": "Sätze"
  },
  {
    "de": "von heute an",
    "lv": "Από σήμερα",
    "level": "Sätze"
  },
  {
    "de": "heute früh",
    "lv": "Σήμερα το πρωί",
    "level": "Sätze"
  },
  {
    "de": "heute Nacht",
    "lv": "Απόψε",
    "level": "Sätze"
  },
  {
    "de": "Zu Hilfe!",
    "lv": "Βοήθεια!",
    "level": "Sätze"
  },
  {
    "de": "Ich lerne jeden Tag Deutsch.",
    "lv": "Καθημερινά μελετώ γερμανικά.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das bitte wiederholen?",
    "lv": "Μπορείτε να το επαναλάβετε παρακαλώ • ",
    "level": "Sätze"
  },
  {
    "de": "Wir treffen uns am Bahnhof.",
    "lv": "Θα βρεθούμε στο σιδηροδρομικό σταθμό.",
    "level": "Sätze"
  },
  {
    "de": "Ich stimme dir teilweise zu.",
    "lv": "Συμφωνώ εν μέρει μαζί σου.",
    "level": "Sätze"
  },
  {
    "de": "Diese Entscheidung hat weitreichende Folgen.",
    "lv": "Αυτή η απόφαση έχει εκτεταμένες συνέπειες.",
    "level": "Sätze"
  },
  {
    "de": "Man sollte mehrere Perspektiven berücksichtigen.",
    "lv": "Θα πρέπει να εξεταστούν πολλές προοπτικές.",
    "level": "Sätze"
  },
  {
    "de": "Könnten Sie das näher erläutern?",
    "lv": "Θα μπορούσατε να το αναλύσετε αυτό • ",
    "level": "Sätze"
  },
  {
    "de": "Was mich anbelangt,...",
    "lv": "Όσο για μένα...",
    "level": "Sätze"
  },
  {
    "de": "Wie alt sind Sie?",
    "lv": "Πόσων χρονών είστε • ",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zwanzig Jahre alt.",
    "lv": "Είμαι είκοσι χρονών.",
    "level": "Sätze"
  },
  {
    "de": "Von heute an.",
    "lv": "Ξεκινώντας σήμερα.",
    "level": "Sätze"
  },
  {
    "de": "Von jetzt an.",
    "lv": "Από εκείνη τη στιγμή.",
    "level": "Sätze"
  },
  {
    "de": "Anders geht es nicht.",
    "lv": "Δεν υπάρχει άλλος τρόπος.",
    "level": "Sätze"
  },
  {
    "de": "Rufen Sie mich an.",
    "lv": "Τηλεφώνησέ με.",
    "level": "Sätze"
  },
  {
    "de": "Bitte stellen Sie das Radio ab.",
    "lv": "Παρακαλώ κλείστε το ραδιόφωνο.",
    "level": "Sätze"
  },
  {
    "de": "Achte bitte auf den Verkehr.",
    "lv": "Παρακαλούμε δώστε προσοχή στην κίνηση.",
    "level": "Sätze"
  },
  {
    "de": "Darauf musst du achten.",
    "lv": "Πρέπει να προσέξεις αυτό.",
    "level": "Sätze"
  },
  {
    "de": "Heute mache ich es anders.",
    "lv": "Σήμερα το κάνω διαφορετικά.",
    "level": "Sätze"
  },
  {
    "de": "Wir warten auf den Bus.",
    "lv": "Περιμένουμε το λεωφορείο.",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt allein.",
    "lv": "Ζει μόνος.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Ausbildung absolviert.",
    "lv": "Τελείωσα την προπόνησή μου. • Τελείωσα την εκπαίδευσή μου.",
    "level": "Sätze"
  },
  {
    "de": "Ich warte den Regen ab.",
    "lv": "Θα περιμένω μέχρι να σταματήσει η βροχή.",
    "level": "Sätze"
  },
  {
    "de": "Er arbeitet in der Verkaufsabteilung.",
    "lv": "Εργάζεται στο τμήμα πωλήσεων.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin allergisch gegen Katzen.",
    "lv": "Είμαι αλλεργικός στις γάτες.",
    "level": "Sätze"
  },
  {
    "de": "Andererseits verstehe ich ihn.",
    "lv": "Από την άλλη τον καταλαβαίνω.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Situation analysiert.",
    "lv": "Ανέλυσα την κατάσταση.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat meinen Vorschlag akzeptiert.",
    "lv": "Δέχτηκε την πρότασή μου.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte das genauer analysieren.",
    "lv": "Θα ήθελα να το αναλύσω πιο αναλυτικά.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte den Vertrag ändern.",
    "lv": "Θα ήθελα να αλλάξω το συμβόλαιο.",
    "level": "Sätze"
  },
  {
    "de": "Er ändert ständig seine Meinung.",
    "lv": "Αλλάζει συνέχεια γνώμη.",
    "level": "Sätze"
  },
  {
    "de": "Ähnliche Probleme hatten wir schon früher.",
    "lv": "Είχαμε παρόμοια προβλήματα στο παρελθόν.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ahnung!",
    "lv": "Καμία ιδέα!",
    "level": "Sätze"
  },
  {
    "de": "Hör auf zu jammern.",
    "lv": "Σταμάτα να γκρινιάζεις.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Kleid ist akademisch gekleidet.",
    "lv": "Αυτό το φόρεμα είναι κομψά συντηρητικό.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre gerne Akkordeonmusik.",
    "lv": "Μου αρέσει να ακούω μουσική ακορντεόν.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das Gerät anklicken?",
    "lv": "Μπορείτε να κάνετε κλικ στη συσκευή • ",
    "level": "Sätze"
  },
  {
    "de": "Bitte öffne die Datei und klicke darauf.",
    "lv": "Ανοίξτε το αρχείο και κάντε κλικ σε αυτό.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe einen Unfall gehabt.",
    "lv": "Είχα ένα ατύχημα.",
    "level": "Sätze"
  },
  {
    "de": "Wir laufen zum Bahnhof.",
    "lv": "Πηγαίνουμε στο σταθμό.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schalte den Fernseher an.",
    "lv": "Παρακαλώ ανοίξτε την τηλεόραση.",
    "level": "Sätze"
  },
  {
    "de": "Mein Computer ist abgestürzt.",
    "lv": "Ο υπολογιστής μου χάλασε.",
    "level": "Sätze"
  },
  {
    "de": "Am Wochenende gehe ich angeln.",
    "lv": "Πάω για ψάρεμα το Σαββατοκύριακο.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe den Anruf verpasst.",
    "lv": "Έχασα την κλήση.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mich später anrufen?",
    "lv": "Μπορείς να με καλέσεις αργότερα",
    "level": "Sätze"
  },
  {
    "de": "Bitte nimm meinen Vorschlag an.",
    "lv": "Παρακαλώ αποδεχτείτε την πρότασή μου.",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme dein Angebot an.",
    "lv": "Θα δεχτώ την προσφορά σας.",
    "level": "Sätze"
  },
  {
    "de": "Er nahm die Einladung an.",
    "lv": "Αποδέχτηκε την πρόσκληση.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Angst vor Spinnen.",
    "lv": "Φοβάμαι τις αράχνες.",
    "level": "Sätze"
  },
  {
    "de": "Keine Angst, alles wird gut.",
    "lv": "Μην ανησυχείς, όλα θα πάνε καλά.",
    "level": "Sätze"
  },
  {
    "de": "Anklang finden.",
    "lv": "Βρείτε μια απάντηση. • Βρείτε εύνοια.",
    "level": "Sätze"
  },
  {
    "de": "Es kommt darauf an.",
    "lv": "Εξαρτάται από αυτό.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Anlass.",
    "lv": "Στην προκειμένη περίπτωση. • Από αυτή την άποψη.",
    "level": "Sätze"
  },
  {
    "de": "Nehmen wir an, dass...",
    "lv": "Ας υποθέσουμε ότι...",
    "level": "Sätze"
  },
  {
    "de": "Was hast du da angerichtet?",
    "lv": "Τι έχεις κάνει εκεί • ",
    "level": "Sätze"
  },
  {
    "de": "Bis ans Ende.",
    "lv": "Μέχρι το τέλος.",
    "level": "Sätze"
  },
  {
    "de": "Du glaubst mir anscheinend nicht.",
    "lv": "Δεν φαίνεται να με πιστεύεις.",
    "level": "Sätze"
  },
  {
    "de": "Meiner Ansicht nach...",
    "lv": "Κατά τη γνώμη μου...",
    "level": "Sätze"
  },
  {
    "de": "Stell dich nicht so an!",
    "lv": "Μην προσποιείσαι!",
    "level": "Sätze"
  },
  {
    "de": "An die Arbeit gehen.",
    "lv": "Πήγαινε στη δουλειά.",
    "level": "Sätze"
  },
  {
    "de": "Außer Atem sein.",
    "lv": "Να με κόβει η ανάσα.",
    "level": "Sätze"
  },
  {
    "de": "Guten Appetit!",
    "lv": "Καλή όρεξη!",
    "level": "Sätze"
  },
  {
    "de": "In einem Atemzug.",
    "lv": "Σε μια ανάσα.",
    "level": "Sätze"
  },
  {
    "de": "Auf jeden Fall.",
    "lv": "Πάντως.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal war alles still.",
    "lv": "Ξαφνικά όλα ήταν ήσυχα.",
    "level": "Sätze"
  },
  {
    "de": "Bitte mach die Tür auf!",
    "lv": "Παρακαλώ ανοίξτε την πόρτα!",
    "level": "Sätze"
  },
  {
    "de": "Er hat den Kredit aufgenommen.",
    "lv": "Πήρε δάνειο.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen heute aufräumen.",
    "lv": "Πρέπει να τακτοποιήσουμε το δωμάτιο σήμερα.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre jetzt auf.",
    "lv": "Θα σταματήσω τώρα.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schon auf.",
    "lv": "Έχει ήδη σηκωθεί.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen das Treffen verschieben.",
    "lv": "Πρέπει να αναβάλουμε τη συνάντηση.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat mich aufgeregt.",
    "lv": "Με εκνεύρισε.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal.",
    "lv": "Ξαφνικά.",
    "level": "Sätze"
  },
  {
    "de": "Auf der Stelle.",
    "lv": "Αμέσως.",
    "level": "Sätze"
  },
  {
    "de": "Für den Schaden aufkommen.",
    "lv": "Καλύψτε τις ζημιές που προκλήθηκαν.",
    "level": "Sätze"
  },
  {
    "de": "Bitte die Tür auf!",
    "lv": "Παρακαλώ ανοίξτε την πόρτα!",
    "level": "Sätze"
  },
  {
    "de": "Aufrecht sitzen.",
    "lv": "Καθίστε όρθια.",
    "level": "Sätze"
  },
  {
    "de": "Er ist auf.",
    "lv": "Είναι πάνω.",
    "level": "Sätze"
  },
  {
    "de": "Alle Kräfte aufwenden.",
    "lv": "Αφιέρωσε όλη σου τη δύναμη.",
    "level": "Sätze"
  },
  {
    "de": "Viel Mühe aufwenden.",
    "lv": "Προσπαθήστε πολύ σκληρά.",
    "level": "Sätze"
  },
  {
    "de": "Geh mir aus den Augen!",
    "lv": "Μην μου ξαναδείχνετε τον εαυτό σας!",
    "level": "Sätze"
  },
  {
    "de": "Unter vier Augen.",
    "lv": "Οι δυο μας. • Σιωπηλά.",
    "level": "Sätze"
  },
  {
    "de": "Aus Mangel an Zeit.",
    "lv": "Λόγω έλλειψης χρόνου.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Grunde.",
    "lv": "Για το λόγο αυτό.",
    "level": "Sätze"
  },
  {
    "de": "Alle außer dir.",
    "lv": "Όλοι εκτός από εσάς.",
    "level": "Sätze"
  },
  {
    "de": "Auf Äußerlichkeiten Wert legen.",
    "lv": "Δώστε έμφαση στην εμφάνιση.",
    "level": "Sätze"
  },
  {
    "de": "Im äußersten Fall.",
    "lv": "Στη χειρότερη περίπτωση.",
    "level": "Sätze"
  },
  {
    "de": "Äußerst wichtig.",
    "lv": "Εξαιρετικά σημαντικό.",
    "level": "Sätze"
  },
  {
    "de": "Aussicht auf die See.",
    "lv": "Θέα στη θάλασσα.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gute Aussichten.",
    "lv": "Έχει καλές προοπτικές.",
    "level": "Sätze"
  },
  {
    "de": "Wie wird dieses Wort ausgesprochen?",
    "lv": "Πώς προφέρεται αυτή η λέξη • ",
    "level": "Sätze"
  },
  {
    "de": "Sein Beileid aussprechen.",
    "lv": "Να εκφράσω συμπάθεια.",
    "level": "Sätze"
  },
  {
    "de": "Wann wurden die Meisterschaftskämpfe ausgetragen?",
    "lv": "Πότε έγιναν τα πρωταθλήματα • ",
    "level": "Sätze"
  },
  {
    "de": "Welchen Beruf üben Sie aus?",
    "lv": "Ποιο είναι το επάγγελμά σας • ",
    "level": "Sätze"
  },
  {
    "de": "Einfluss ausüben.",
    "lv": "Να επηρεάσει.",
    "level": "Sätze"
  },
  {
    "de": "Auswärts essen.",
    "lv": "Φάτε έξω.",
    "level": "Sätze"
  },
  {
    "de": "Per Bahn.",
    "lv": "Με τρένο.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Bahn.",
    "lv": "Με τρένο.",
    "level": "Sätze"
  },
  {
    "de": "Möglichst bald.",
    "lv": "Το συντομότερο δυνατό.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist Angst und bange.",
    "lv": "Πολύ φοβάμαι.",
    "level": "Sätze"
  },
  {
    "de": "Auf die lange Bank schieben.",
    "lv": "Αναβάλλω. • Να τεντωθεί. • Αναβολή επ' αόριστον.",
    "level": "Sätze"
  },
  {
    "de": "Bar zahlen.",
    "lv": "Πληρώστε με μετρητά.",
    "level": "Sätze"
  },
  {
    "de": "Erz bauen.",
    "lv": "Στείλτε μετάλλευμα.",
    "level": "Sätze"
  },
  {
    "de": "Mist bauen.",
    "lv": "Γυρίστε μια ουγγιά. • Κάνε ανόητα πράγματα.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin beauftragt.",
    "lv": "Μου έχει ανατεθεί μια εργασία.",
    "level": "Sätze"
  },
  {
    "de": "Nach Bedarf.",
    "lv": "Όσο χρειάζεται.",
    "level": "Sätze"
  },
  {
    "de": "Ich bedauere ihn.",
    "lv": "Τον λυπάμαι.",
    "level": "Sätze"
  },
  {
    "de": "Was bedeutet dieses Wort?",
    "lv": "Τι σημαίνει αυτή η λέξη • ",
    "level": "Sätze"
  },
  {
    "de": "Unter der Bedingung, dass...",
    "lv": "Υπό τον όρο...",
    "level": "Sätze"
  },
  {
    "de": "Sie sieht bedrückt aus.",
    "lv": "Φαίνεται συντετριμμένος.",
    "level": "Sätze"
  },
  {
    "de": "Hinweise befolgen.",
    "lv": "Ακολουθήστε τις οδηγίες.",
    "level": "Sätze"
  },
  {
    "de": "Befehle befolgen.",
    "lv": "Ακολουθήστε τις εντολές.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Post befördern.",
    "lv": "Αποστολή μέσω ταχυδρομείου.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin begierig zu wissen.",
    "lv": "Με ενδιαφέρει πολύ να μάθω.",
    "level": "Sätze"
  },
  {
    "de": "Zu Beginn.",
    "lv": "Στην αρχή.",
    "level": "Sätze"
  },
  {
    "de": "Am Beginn.",
    "lv": "Στην αρχή.",
    "level": "Sätze"
  },
  {
    "de": "Bei Beginn.",
    "lv": "Από.",
    "level": "Sätze"
  },
  {
    "de": "In Begleitung.",
    "lv": "Στην εκπομπή.",
    "level": "Sätze"
  },
  {
    "de": "Mit seiner Begleitung.",
    "lv": "Με μια συντροφιά.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schwer von Begriff.",
    "lv": "Σιγά σιγά το συνειδητοποιεί. • Έχει αργή σκέψη.",
    "level": "Sätze"
  },
  {
    "de": "Im Gedächtnis behalten.",
    "lv": "Για να θυμάστε. • Διατηρήστε στη μνήμη.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tisch.",
    "lv": "Στο τραπέζι.",
    "level": "Sätze"
  },
  {
    "de": "Bei Sinnen sein.",
    "lv": "Να είσαι λογικός.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tage.",
    "lv": "Κατά τη διάρκεια της ημέρας.",
    "level": "Sätze"
  },
  {
    "de": "Bei weitem nicht so.",
    "lv": "Καθόλου.",
    "level": "Sätze"
  },
  {
    "de": "Alle beide.",
    "lv": "Και οι δύο.",
    "level": "Sätze"
  },
  {
    "de": "Stürmischer Beifall brach los.",
    "lv": "Ακούστηκαν βροντερό χειροκρότημα.",
    "level": "Sätze"
  },
  {
    "de": "Beifall finden.",
    "lv": "Βρείτε έγκριση.",
    "level": "Sätze"
  },
  {
    "de": "Beileid aussprechen.",
    "lv": "Να εκφράσω συμπάθεια.",
    "level": "Sätze"
  },
  {
    "de": "Auf eigenen Beinen stehen.",
    "lv": "Να είσαι οικονομικά ανεξάρτητος.",
    "level": "Sätze"
  },
  {
    "de": "Zum Beispiel.",
    "lv": "Για παράδειγμα.",
    "level": "Sätze"
  },
  {
    "de": "Beistand leisten.",
    "lv": "Να βοηθήσει. • Παροχή βοήθειας.",
    "level": "Sätze"
  },
  {
    "de": "Beitrag leisten.",
    "lv": "Δώστε τη συμβολή σας.",
    "level": "Sätze"
  },
  {
    "de": "Jemandes Bekanntschaft machen.",
    "lv": "Για να γνωρίσω κάποιον.",
    "level": "Sätze"
  },
  {
    "de": "Bekanntschaft anknüpfen.",
    "lv": "Για να γνωριστούμε. • Δημιουργήστε μια επαφή.",
    "level": "Sätze"
  },
  {
    "de": "Belegte Brötchen.",
    "lv": "Σάντουιτς με γαρνιτούρες.",
    "level": "Sätze"
  },
  {
    "de": "Nach Ihrem Belieben.",
    "lv": "Όπως θέλετε.",
    "level": "Sätze"
  },
  {
    "de": "Zu jeder beliebigen Zeit.",
    "lv": "Ανά πάσα στιγμή.",
    "level": "Sätze"
  },
  {
    "de": "Schweigen beobachten.",
    "lv": "Μείνε ήσυχος.",
    "level": "Sätze"
  },
  {
    "de": "Zur Bequemlichkeit.",
    "lv": "Από πλευράς ευκολίας.",
    "level": "Sätze"
  },
  {
    "de": "Bereit sein.",
    "lv": "Να είστε προετοιμασμένοι. • Να συμφωνήσω.",
    "level": "Sätze"
  },
  {
    "de": "Unfallopfer bergen.",
    "lv": "Σώστε τα θύματα του δυστυχήματος.",
    "level": "Sätze"
  },
  {
    "de": "Bericht erstatten.",
    "lv": "Εκθεση. • Για αναφορά. • Παρέχετε μια επισκόπηση.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind besetzt.",
    "lv": "Όλες οι θέσεις είναι πιασμένες.",
    "level": "Sätze"
  },
  {
    "de": "Neue Besen kehren gut.",
    "lv": "Η νέα σκούπα σκουπίζει καλά.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt ein Haus.",
    "lv": "Έχει ένα σπίτι.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt viel Mut.",
    "lv": "Έχει μεγάλο θάρρος.",
    "level": "Sätze"
  },
  {
    "de": "Desto besser.",
    "lv": "Όσο καλύτερα.",
    "level": "Sätze"
  },
  {
    "de": "Gute Besserung!",
    "lv": "Να είσαι καλά! • Να είσαι καλά!",
    "level": "Sätze"
  },
  {
    "de": "Beim besten Willen.",
    "lv": "Όσο και να το θέλεις.",
    "level": "Sätze"
  },
  {
    "de": "Am besten.",
    "lv": "Το καλύτερο.",
    "level": "Sätze"
  },
  {
    "de": "Es besteht Zweifel.",
    "lv": "Υπάρχουν αμφιβολίες.",
    "level": "Sätze"
  },
  {
    "de": "Seine Aufgabe besteht darin...",
    "lv": "Η δουλειά του είναι να...",
    "level": "Sätze"
  },
  {
    "de": "Grüße bestellen.",
    "lv": "Στείλτε χαιρετισμούς.",
    "level": "Sätze"
  },
  {
    "de": "Ganz bestimmt.",
    "lv": "Οριστικά. • Απόλυτα σίγουρος.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch kommen.",
    "lv": "Να έρθω στο χωριό.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch sein.",
    "lv": "Να είμαι στο χωριό. • Για επίσκεψη.",
    "level": "Sätze"
  },
  {
    "de": "Oft Konzerte besuchen.",
    "lv": "Πηγαίνετε συχνά σε συναυλίες.",
    "level": "Sätze"
  },
  {
    "de": "Welche Schule hat er besucht?",
    "lv": "Σε ποιο σχολείο πήγε • ",
    "level": "Sätze"
  },
  {
    "de": "In Betracht ziehen.",
    "lv": "Να ληφθούν υπόψη. • Σκεφτείτε.",
    "level": "Sätze"
  },
  {
    "de": "Außer Betracht lassen.",
    "lv": "Δεν πρέπει να λαμβάνεται υπόψη. • Δεν λαμβάνεται υπόψη.",
    "level": "Sätze"
  },
  {
    "de": "Er betreibt ein Hotel.",
    "lv": "Διαχειρίζεται ένα ξενοδοχείο.",
    "level": "Sätze"
  },
  {
    "de": "Alle beiden.",
    "lv": "Και οι δύο.",
    "level": "Sätze"
  },
  {
    "de": "Alles bezahlen.",
    "lv": "Πληρώστε τα όλα.",
    "level": "Sätze"
  },
  {
    "de": "Bezüglich auf etwas.",
    "lv": "Σε σχέση με κάτι.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön.",
    "lv": "Παρακαλώ.",
    "level": "Sätze"
  },
  {
    "de": "Wie bitte?",
    "lv": "Πώς, παρακαλώ • ",
    "level": "Sätze"
  },
  {
    "de": "Bitte sehr.",
    "lv": "Παρακαλώ.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe eine Bitte an Sie.",
    "lv": "Έχω ένα αίτημα για εσάς.",
    "level": "Sätze"
  },
  {
    "de": "Trompete blasen.",
    "lv": "Σάλπισε τη σάλπιγγα.",
    "level": "Sätze"
  },
  {
    "de": "In einem Buch blättern.",
    "lv": "Ξεφυλλίστε το βιβλίο.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßen Füßen.",
    "lv": "Ξυπόλυτος.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßem Auge.",
    "lv": "Με γυμνό μάτι.",
    "level": "Sätze"
  },
  {
    "de": "Danke für die Blumen!",
    "lv": "Ευχαριστώ για τα λουλούδια!",
    "level": "Sätze"
  },
  {
    "de": "Alles in Butter.",
    "lv": "Εντάξει.",
    "level": "Sätze"
  },
  {
    "de": "Bitte checken.",
    "lv": "Για έλεγχο. • Έλεγχος.",
    "level": "Sätze"
  },
  {
    "de": "Da ist er!",
    "lv": "Εκεί είναι!",
    "level": "Sätze"
  },
  {
    "de": "Alles spricht dafür.",
    "lv": "Όλα μιλούν υπέρ τους.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann nichts dafür.",
    "lv": "Δεν μπορώ να κάνω τίποτα γι' αυτό.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin dagegen.",
    "lv": "Είμαι αντίθετος.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe nichts dagegen.",
    "lv": "Δεν με πειράζει.",
    "level": "Sätze"
  },
  {
    "de": "Von daheim.",
    "lv": "Από το σπίτι.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Dame ziehen.",
    "lv": "Κάντε τη σημαία να κινηθεί.",
    "level": "Sätze"
  },
  {
    "de": "Es dämmert.",
    "lv": "Νυχτώνει. • Ξημερώνει.",
    "level": "Sätze"
  },
  {
    "de": "Danke schön!",
    "lv": "Σας ευχαριστώ! • Σας ευχαριστώ!",
    "level": "Sätze"
  },
  {
    "de": "Dann und wann.",
    "lv": "Από καιρό σε καιρό.",
    "level": "Sätze"
  },
  {
    "de": "Darauf kannst du dich verlassen.",
    "lv": "Μπορείτε να είστε σίγουροι για αυτό.",
    "level": "Sätze"
  },
  {
    "de": "Daraus wird nichts.",
    "lv": "Δεν βγαίνει τίποτα από αυτό.",
    "level": "Sätze"
  },
  {
    "de": "So dass...",
    "lv": "Ετσι...",
    "level": "Sätze"
  },
  {
    "de": "Für wen halten Sie mich?",
    "lv": "Ποιος νομίζεις ότι είμαι • ",
    "level": "Sätze"
  },
  {
    "de": "Hände weg!",
    "lv": "Κάτω τα χέρια!",
    "level": "Sätze"
  },
  {
    "de": "Lass den Kopf nicht hängen!",
    "lv": "Μην αφήσεις το κεφάλι σου να κρέμεται!",
    "level": "Sätze"
  },
  {
    "de": "zu Hause",
    "lv": "Κατά οίκον",
    "level": "Sätze"
  },
  {
    "de": "nach Hause gehen",
    "lv": "Να πάει σπίτι",
    "level": "Sätze"
  },
  {
    "de": "von Haus aus",
    "lv": "Από την παιδική ηλικία • Από την αρχή",
    "level": "Sätze"
  },
  {
    "de": "Meinen herzlichsten Glückwunsch!",
    "lv": "Θερμά συγχαρητήρια!",
    "level": "Sätze"
  },
  {
    "de": "Seien Sie so gut!",
    "lv": "Να είστε τόσο ευγενικοί! • Να είσαι τόσο καλός!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie die Güte!",
    "lv": "Να είστε τόσο ευγενικοί!",
    "level": "Sätze"
  },
  {
    "de": "Was hast du?",
    "lv": "Τι συμβαίνει με εσάς • Τι έχει συμβεί • ",
    "level": "Sätze"
  },
  {
    "de": "Gestatten Sie bitte!",
    "lv": "Επιτρέψτε μου, σας παρακαλώ!",
    "level": "Sätze"
  },
  {
    "de": "Ist es gestattet zu rauchen?",
    "lv": "Επιτρέπεται το κάπνισμα • ",
    "level": "Sätze"
  },
  {
    "de": "Ich muss gestehen, dass...",
    "lv": "Οφείλω να ομολογήσω ότι...",
    "level": "Sätze"
  },
  {
    "de": "gestern früh",
    "lv": "Νωρίς χθες το πρωί",
    "level": "Sätze"
  },
  {
    "de": "gestern Abend",
    "lv": "Χτές βράδυ",
    "level": "Sätze"
  },
  {
    "de": "Es ist mir gleichgültig, ob...",
    "lv": "Δεν με νοιάζει αν...",
    "level": "Sätze"
  },
  {
    "de": "Was ist geschehen?",
    "lv": "Τι έχει συμβεί • ",
    "level": "Sätze"
  },
  {
    "de": "Mach keine Geschichten!",
    "lv": "Μην κάνετε ανόητα πράγματα! • Μην αστειεύεστε!",
    "level": "Sätze"
  },
  {
    "de": "Geschweige denn...",
    "lv": "Για να μην το αναφέρω αυτό. • Πού αλλού.",
    "level": "Sätze"
  },
  {
    "de": "Gehen Sie geradeaus!",
    "lv": "Προχώρα ευθεία!",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es Ihnen?",
    "lv": "Πώς είσαι • Πώς λειτουργεί το χέρι • ",
    "level": "Sätze"
  },
  {
    "de": "Frag ihn gelegentlich, ob...",
    "lv": "Ρωτήστε τον πότε συμβαίνει αν...",
    "level": "Sätze"
  },
  {
    "de": "morgen früh",
    "lv": "Αύριο το πρωί",
    "level": "Sätze"
  },
  {
    "de": "im Frühling",
    "lv": "Την άνοιξη",
    "level": "Sätze"
  },
  {
    "de": "Was gibt’s Neues?",
    "lv": "Τι νέα • ",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Brief folgt, dass...",
    "lv": "Αυτή η επιστολή αποκαλύπτει ότι...",
    "level": "Sätze"
  },
  {
    "de": "Fahre fort!",
    "lv": "Συνεχίστε την καλή δουλειά!",
    "level": "Sätze"
  },
  {
    "de": "Er ist kein Freund von...",
    "lv": "Δεν του αρέσει...",
    "level": "Sätze"
  },
  {
    "de": "Es erwies sich, dass...",
    "lv": "Αποδείχθηκε ότι...",
    "level": "Sätze"
  },
  {
    "de": "Gedenkst du meiner?",
    "lv": "Με θυμάσαι •  • Με σκέφτεσαι • ",
    "level": "Sätze"
  },
  {
    "de": "im Winter",
    "lv": "Το χειμώνα",
    "level": "Sätze"
  },
  {
    "de": "Welcher Jahrgang sind Sie?",
    "lv": "Ποιο έτος γεννηθήκατε • ",
    "level": "Sätze"
  },
  {
    "de": "Es jammert mich zu sehen...",
    "lv": "Λυπάμαι που βλέπω...",
    "level": "Sätze"
  },
  {
    "de": "je mehr, desto besser",
    "lv": "Όσο περισσότερα τόσο καλύτερα",
    "level": "Sätze"
  },
  {
    "de": "bis jetzt",
    "lv": "Μέχρι την παρούσα στιγμή",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich zum Bahnhof?",
    "lv": "Πώς να φτάσετε στο σταθμό • ",
    "level": "Sätze"
  },
  {
    "de": "Komm her!",
    "lv": "Έλα εδώ!",
    "level": "Sätze"
  },
  {
    "de": "Könnte ich Frau N. sprechen?",
    "lv": "Θα μπορούσα να μιλήσω με την κυρία Ν • ",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das?",
    "lv": "Πόσο κοστίζει • ",
    "level": "Sätze"
  },
  {
    "de": "Wie lange dauert die Vorstellung?",
    "lv": "Πόσο διαρκεί η παράσταση • ",
    "level": "Sätze"
  },
  {
    "de": "Lass das!",
    "lv": "Σταμάτα το! • Αφήστε το!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich in Ruhe!",
    "lv": "Άσε με ήσυχο!",
    "level": "Sätze"
  },
  {
    "de": "Lassen Sie mich Ihnen helfen!",
    "lv": "Άσε με να σε βοηθήσω!",
    "level": "Sätze"
  },
  {
    "de": "Lasst uns gehen!",
    "lv": "Πάμε!",
    "level": "Sätze"
  },
  {
    "de": "Na, wie läufts?",
    "lv": "Τι κάνετε",
    "level": "Sätze"
  },
  {
    "de": "Es lebe!",
    "lv": "Ζήτω!",
    "level": "Sätze"
  },
  {
    "de": "Leben Sie wohl!",
    "lv": "Ζήστε ευτυχισμένοι! • Αντίο!",
    "level": "Sätze"
  },
  {
    "de": "Was ist los?",
    "lv": "Τι έχει συμβεί • ",
    "level": "Sätze"
  },
  {
    "de": "Der Job ist anstrengend.",
    "lv": "Η δουλειά είναι κουραστική.",
    "level": "Sätze"
  },
  {
    "de": "Das war ein anstrengender Tag.",
    "lv": "Ήταν μια κουραστική μέρα.",
    "level": "Sätze"
  },
  {
    "de": "Deutsch lernen kann anstrengend sein.",
    "lv": "Η εκμάθηση γερμανικών μπορεί να είναι κουραστική.",
    "level": "Sätze"
  },
  {
    "de": "Er verlangt eine Erklärung.",
    "lv": "Ζητά εξηγήσεις.",
    "level": "Sätze"
  },
  {
    "de": "Der Verkäufer verlangt zu viel Geld.",
    "lv": "Ο πωλητής ζητάει πάρα πολλά χρήματα.",
    "level": "Sätze"
  },
  {
    "de": "Das Gesetz verlangt es so.",
    "lv": "Ο νόμος επιβάλλει να είναι έτσι.",
    "level": "Sätze"
  },
  {
    "de": "Das ist gar nicht so schwer.",
    "lv": "Δεν είναι καθόλου δύσκολο.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe gar kein Geld.",
    "lv": "Δεν έχω καθόλου χρήματα.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gar nichts gesagt.",
    "lv": "Δεν είπε απολύτως τίποτα.",
    "level": "Sätze"
  },
  {
    "de": "Der Hund ist los.",
    "lv": "Ο σκύλος αφήνεται ελεύθερος.",
    "level": "Sätze"
  },
  {
    "de": "Hier ist viel los.",
    "lv": "Εδώ συμβαίνουν πολλά.",
    "level": "Sätze"
  },
  {
    "de": "Halt die Luft an!",
    "lv": "Κράτα την αναπνοή σου!",
    "level": "Sätze"
  },
  {
    "de": "Was machst du?",
    "lv": "Τι κάνεις",
    "level": "Sätze"
  },
  {
    "de": "Sag mal!",
    "lv": "Πες το ήδη!",
    "level": "Sätze"
  },
  {
    "de": "Was meinen Sie damit?",
    "lv": "Τι εννοείς με αυτό •  • Πώς το εννοείς αυτό • ",
    "level": "Sätze"
  },
  {
    "de": "Wir gehen mit Ihnen.",
    "lv": "Θα πάμε μαζί σας.",
    "level": "Sätze"
  },
  {
    "de": "Ich fahre mit der Eisenbahn.",
    "lv": "Ταξιδεύω με τρένο.",
    "level": "Sätze"
  },
  {
    "de": "am Mittwoch",
    "lv": "Την Τετάρτη",
    "level": "Sätze"
  },
  {
    "de": "Es mag sein.",
    "lv": "Ισως.",
    "level": "Sätze"
  },
  {
    "de": "Ich mag das nicht.",
    "lv": "Δεν μου αρέσει.",
    "level": "Sätze"
  },
  {
    "de": "am Montag",
    "lv": "Τη Δευτέρα",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen!",
    "lv": "Καλημέρα!",
    "level": "Sätze"
  },
  {
    "de": "am Morgen",
    "lv": "Το πρωί",
    "level": "Sätze"
  },
  {
    "de": "Gute Nacht!",
    "lv": "Καληνύχτα!",
    "level": "Sätze"
  },
  {
    "de": "Nehmen Sie Platz!",
    "lv": "Κάτσε κάτω!",
    "level": "Sätze"
  },
  {
    "de": "Letzte Neuheit!",
    "lv": "Τελευταία νέα!",
    "level": "Sätze"
  },
  {
    "de": "Nicht wahr?",
    "lv": "Δεν είναι • ",
    "level": "Sätze"
  },
  {
    "de": "Nicht doch!",
    "lv": "Οχι ακόμη! • Δεν χρειάζεται!",
    "level": "Sätze"
  },
  {
    "de": "Nun endlich!",
    "lv": "Λοιπόν, επιτέλους!",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das?",
    "lv": "Σε τι είναι καλό • ",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das alles?",
    "lv": "Γιατί όλα αυτά • ",
    "level": "Sätze"
  },
  {
    "de": "Parken verboten!",
    "lv": "Απαγορεύεται η στάθμευση!",
    "level": "Sätze"
  },
  {
    "de": "Nicht parken!",
    "lv": "Απαγορεύεται η στάθμευση!",
    "level": "Sätze"
  },
  {
    "de": "Er hat Recht.",
    "lv": "Έχει δίκιο.",
    "level": "Sätze"
  },
  {
    "de": "Wovon ist die Rede?",
    "lv": "Περί τίνος πρόκειται • ",
    "level": "Sätze"
  },
  {
    "de": "Davon kann keine Rede sein.",
    "lv": "Αυτό αποκλείεται.",
    "level": "Sätze"
  },
  {
    "de": "Glückliche Reise!",
    "lv": "Καλό ταξίδι!",
    "level": "Sätze"
  },
  {
    "de": "Mir reißt die Geduld.",
    "lv": "Η υπομονή μου εξαντλείται.",
    "level": "Sätze"
  },
  {
    "de": "Man sagt, dass...",
    "lv": "Λέγεται ότι...",
    "level": "Sätze"
  },
  {
    "de": "Schon gut!",
    "lv": "Είναι ήδη καλό!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön!",
    "lv": "Παρακαλώ!",
    "level": "Sätze"
  },
  {
    "de": "Was bin ich schuldig?",
    "lv": "Πόσα χρωστάω •  • Πόσα πρέπει να πληρώσω • ",
    "level": "Sätze"
  },
  {
    "de": "Vor dem Gebrauch schütteln!",
    "lv": "Ανακινήστε πριν τη χρήση!",
    "level": "Sätze"
  },
  {
    "de": "Sehen Sie mal!",
    "lv": "Ματιά!",
    "level": "Sätze"
  },
  {
    "de": "Wie sehr auch...",
    "lv": "Πόσα...",
    "level": "Sätze"
  },
  {
    "de": "Seit wann?",
    "lv": "Από πότε • ",
    "level": "Sätze"
  },
  {
    "de": "Was soll ich tun?",
    "lv": "Τι πρέπει να κάνω • ",
    "level": "Sätze"
  },
  {
    "de": "im Sommer",
    "lv": "Το καλοκαίρι",
    "level": "Sätze"
  },
  {
    "de": "Nicht nur..., sondern auch...",
    "lv": "Όχι μόνο... αλλά και...",
    "level": "Sätze"
  },
  {
    "de": "Sonst noch etwas?",
    "lv": "Κάτι άλλο • ",
    "level": "Sätze"
  },
  {
    "de": "Spaß beiseite!",
    "lv": "Χωρίς πλάκα! • Αστειεύομαι!",
    "level": "Sätze"
  },
  {
    "de": "Wie spät ist es?",
    "lv": "Τι ώρα είναι • ",
    "level": "Sätze"
  },
  {
    "de": "Durchfahrt gesperrt!",
    "lv": "Απαγορεύεται η οδήγηση!",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie deutsch?",
    "lv": "Μιλάς Γερμανικά • ",
    "level": "Sätze"
  },
  {
    "de": "Statt zu...",
    "lv": "Αντί για...",
    "level": "Sätze"
  },
  {
    "de": "Wie steht’s?",
    "lv": "Τι κάνετε",
    "level": "Sätze"
  },
  {
    "de": "Dieser Hut steht ihr gut.",
    "lv": "Αυτό το καπέλο του ταιριάζει πολύ.",
    "level": "Sätze"
  },
  {
    "de": "Guten Tag!",
    "lv": "Καλημέρα!",
    "level": "Sätze"
  },
  {
    "de": "Wo treffen wir uns?",
    "lv": "Πού συναντιόμαστε • ",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie näher!",
    "lv": "Έλα πιο κοντά!",
    "level": "Sätze"
  },
  {
    "de": "Ehrlichkeit ist eine Tugend.",
    "lv": "Η ειλικρίνεια είναι αρετή.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe viel zu tun.",
    "lv": "Έχω πολλά να κάνω.",
    "level": "Sätze"
  },
  {
    "de": "Nicht übel!",
    "lv": "Αρκετά καλό! • Τίποτα για παράπονο.",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt über mir.",
    "lv": "Ζει από πάνω μου.",
    "level": "Sätze"
  },
  {
    "de": "Er ist davon überzeugt.",
    "lv": "Είναι πεπεισμένος γι' αυτό.",
    "level": "Sätze"
  },
  {
    "de": "So ist es üblich.",
    "lv": "Αυτό είναι το έθιμο.",
    "level": "Sätze"
  },
  {
    "de": "Deine Uhr geht nach.",
    "lv": "Το ρολόι σου έχει αργήσει.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel Uhr ist es?",
    "lv": "Τι ώρα είναι • ",
    "level": "Sätze"
  },
  {
    "de": "Um acht Uhr früh.",
    "lv": "Οκτώ το πρωί.",
    "level": "Sätze"
  },
  {
    "de": "umso mehr",
    "lv": "Τόσο περισσότερο",
    "level": "Sätze"
  },
  {
    "de": "Rechts um!",
    "lv": "Στρίψτε δεξιά!",
    "level": "Sätze"
  },
  {
    "de": "Und ob!",
    "lv": "Και πώς!",
    "level": "Sätze"
  },
  {
    "de": "und zwar",
    "lv": "Δηλαδή",
    "level": "Sätze"
  },
  {
    "de": "Auf Unkosten von...",
    "lv": "... σε βάρος του",
    "level": "Sätze"
  },
  {
    "de": "Er saß unter den Zuschauern.",
    "lv": "Κάθισε ανάμεσα στους θεατές.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ursache!",
    "lv": "Δεν αξίζει να ευχαριστήσω!",
    "level": "Sätze"
  },
  {
    "de": "Es geschah, wie verabredet.",
    "lv": "Πήγε όπως συμφωνήθηκε.",
    "level": "Sätze"
  },
  {
    "de": "Rauchen verboten!",
    "lv": "Απαγορεύεται το κάπνισμα!",
    "level": "Sätze"
  },
  {
    "de": "Falsch verbunden!",
    "lv": "Λάθος σύνδεση!",
    "level": "Sätze"
  },
  {
    "de": "Eintritt verboten!",
    "lv": "Απαγορεύεται η είσοδος!",
    "level": "Sätze"
  },
  {
    "de": "Verstehen Sie mich?",
    "lv": "Με καταλαβαίνεις • ",
    "level": "Sätze"
  },
  {
    "de": "Er versteht nichts davon.",
    "lv": "Δεν καταλαβαίνει τίποτα από αυτά.",
    "level": "Sätze"
  },
  {
    "de": "Seine Ansicht vertreten.",
    "lv": "Υπερασπιστείτε τη θέση σας.",
    "level": "Sätze"
  },
  {
    "de": "Streit verursachen.",
    "lv": "Να προκαλέσει καβγά.",
    "level": "Sätze"
  },
  {
    "de": "Viel besser.",
    "lv": "Πολύ καλύτερα.",
    "level": "Sätze"
  },
  {
    "de": "Zu viel.",
    "lv": "Πάρα πολύ.",
    "level": "Sätze"
  },
  {
    "de": "Vom Hörensagen.",
    "lv": "Σύμφωνα με φήμες.",
    "level": "Sätze"
  },
  {
    "de": "Von Zeit zu Zeit.",
    "lv": "Από καιρό σε καιρό.",
    "level": "Sätze"
  },
  {
    "de": "Von Beruf.",
    "lv": "Κατά επάγγελμα.",
    "level": "Sätze"
  },
  {
    "de": "Er ist Berliner von Geburt.",
    "lv": "Είναι Βερολινέζος εκ γενετής.",
    "level": "Sätze"
  },
  {
    "de": "Er steht vor dem Fenster.",
    "lv": "Στέκεται μπροστά στο παράθυρο.",
    "level": "Sätze"
  },
  {
    "de": "Vor Sonnenaufgang.",
    "lv": "Πριν την ανατολή του ηλίου.",
    "level": "Sätze"
  },
  {
    "de": "Vor vierzehn Tagen.",
    "lv": "Πριν από δύο εβδομάδες.",
    "level": "Sätze"
  },
  {
    "de": "Vor Freude.",
    "lv": "Για χαρά.",
    "level": "Sätze"
  },
  {
    "de": "Vor allem.",
    "lv": "Προπαντός. • Πρώτα απ' όλα.",
    "level": "Sätze"
  },
  {
    "de": "Im Voraus.",
    "lv": "Προς τα εμπρός. • Εκ των προτέρων.",
    "level": "Sätze"
  },
  {
    "de": "Unter der Voraussetzung, dass...",
    "lv": "Υπό τον όρο...",
    "level": "Sätze"
  },
  {
    "de": "Unter dem Vorbehalt.",
    "lv": "Υπό όρους.",
    "level": "Sätze"
  },
  {
    "de": "Vorhanden sein.",
    "lv": "Να υπάρχει. • Να είναι παρών. • Να είστε διαθέσιμοι.",
    "level": "Sätze"
  },
  {
    "de": "In der vorigen Woche.",
    "lv": "Την περασμένη εβδομάδα.",
    "level": "Sätze"
  },
  {
    "de": "Vorkehrungen treffen.",
    "lv": "Λάβετε προστατευτικά μέτρα.",
    "level": "Sätze"
  },
  {
    "de": "Sie kommt mir bekannt vor.",
    "lv": "Μου φαίνεται οικείος.",
    "level": "Sätze"
  },
  {
    "de": "Er hat Vorliebe für Literatur.",
    "lv": "Του αρέσει πολύ η λογοτεχνία.",
    "level": "Sätze"
  },
  {
    "de": "Heute Vormittag.",
    "lv": "Σήμερα το πρωί. • Σήμερα πριν το μεσημεριανό γεύμα.",
    "level": "Sätze"
  },
  {
    "de": "Von vorn.",
    "lv": "Για.",
    "level": "Sätze"
  },
  {
    "de": "Nach vorn.",
    "lv": "Επόμενος.",
    "level": "Sätze"
  },
  {
    "de": "Von vornherein.",
    "lv": "Από την αρχή.",
    "level": "Sätze"
  },
  {
    "de": "Im Vorteil sein.",
    "lv": "Να είναι σε πιο ευνοϊκή θέση.",
    "level": "Sätze"
  },
  {
    "de": "Wach sein.",
    "lv": "Να είσαι ξύπνιος.",
    "level": "Sätze"
  },
  {
    "de": "Wach werden.",
    "lv": "Ξύπνα.",
    "level": "Sätze"
  },
  {
    "de": "Auf Wache sein.",
    "lv": "Σταθείτε φρουροί.",
    "level": "Sätze"
  },
  {
    "de": "Während eines Jahres.",
    "lv": "Κατά τη διάρκεια του έτους.",
    "level": "Sätze"
  },
  {
    "de": "Während des Krieges.",
    "lv": "Κατά τη διάρκεια του πολέμου.",
    "level": "Sätze"
  },
  {
    "de": "Gegen eine Wand reden.",
    "lv": "Να μιλάμε μάταια.",
    "level": "Sätze"
  },
  {
    "de": "Hier haben die Wände Ohren.",
    "lv": "Υπάρχουν αυτιά στους τοίχους εδώ.",
    "level": "Sätze"
  },
  {
    "de": "Bis wann?",
    "lv": "Μέχρι τι ώρα • ",
    "level": "Sätze"
  },
  {
    "de": "Es ist warm.",
    "lv": "Είναι ζεστό.",
    "level": "Sätze"
  },
  {
    "de": "Auf eine Nachricht warten.",
    "lv": "Περιμένετε για ειδοποίηση.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie?",
    "lv": "Τι θέλετε • ",
    "level": "Sätze"
  },
  {
    "de": "Was für ein...?",
    "lv": "Τι είδους... •  • Τι... • ",
    "level": "Sätze"
  },
  {
    "de": "Auf halbem Wege.",
    "lv": "Στα μισά του δρόμου.",
    "level": "Sätze"
  },
  {
    "de": "Auf diesem Wege.",
    "lv": "Τοιουτοτροπώς. • Με τέτοια μέσα.",
    "level": "Sätze"
  },
  {
    "de": "Auf friedlichem Wege.",
    "lv": "Με ειρηνικό τρόπο.",
    "level": "Sätze"
  },
  {
    "de": "Unserer Freundschaft wegen.",
    "lv": "Λόγω της φιλίας μας.",
    "level": "Sätze"
  },
  {
    "de": "Von Rechts wegen.",
    "lv": "Με δικαιοσύνη.",
    "level": "Sätze"
  },
  {
    "de": "Weh tun.",
    "lv": "Να πονέσει.",
    "level": "Sätze"
  },
  {
    "de": "Zu Weihnachten.",
    "lv": "Κατά τη διάρκεια των Χριστουγέννων.",
    "level": "Sätze"
  },
  {
    "de": "Auf welche Weise?",
    "lv": "Με ποιον τρόπο • ",
    "level": "Sätze"
  },
  {
    "de": "Art und Weise.",
    "lv": "Πέντε.",
    "level": "Sätze"
  },
  {
    "de": "Ohne weiteres.",
    "lv": "Αμέσως. • Αμέσως.",
    "level": "Sätze"
  },
  {
    "de": "Bis auf weiteres.",
    "lv": "Μέχρι νεωτέρας.",
    "level": "Sätze"
  },
  {
    "de": "Und so weiter.",
    "lv": "Και ούτω καθεξής.",
    "level": "Sätze"
  },
  {
    "de": "Weiter nichts.",
    "lv": "Κάτι άλλο.",
    "level": "Sätze"
  },
  {
    "de": "An welchem Tag?",
    "lv": "Ποια μέρα • ",
    "level": "Sätze"
  },
  {
    "de": "Alle Welt.",
    "lv": "Όλος ο κόσμος. • Όλα.",
    "level": "Sätze"
  },
  {
    "de": "In wenigen Tagen.",
    "lv": "Σε λίγες μέρες.",
    "level": "Sätze"
  },
  {
    "de": "Zu wenig.",
    "lv": "Πολύ λίγο.",
    "level": "Sätze"
  },
  {
    "de": "Wenn auch.",
    "lv": "Αν και.",
    "level": "Sätze"
  },
  {
    "de": "Wer da?",
    "lv": "Ποιος είναι εκεί • ",
    "level": "Sätze"
  },
  {
    "de": "Gesammelte Werke von Schiller.",
    "lv": "Τα Συλλεκτικά Έργα του Σίλερ.",
    "level": "Sätze"
  },
  {
    "de": "Ausgewählte Werke.",
    "lv": "Επιλογή έργων.",
    "level": "Sätze"
  },
  {
    "de": "Er ist wert, dass...",
    "lv": "Του άξιζε να...",
    "level": "Sätze"
  },
  {
    "de": "Es ist zwei Euro wert.",
    "lv": "Κοστίζει δύο ευρώ.",
    "level": "Sätze"
  },
  {
    "de": "Nach Westen.",
    "lv": "Προς τα δυτικά.",
    "level": "Sätze"
  },
  {
    "de": "Von Westen.",
    "lv": "Από τα δυτικά.",
    "level": "Sätze"
  },
  {
    "de": "In Wettbewerb treten.",
    "lv": "Δηλώστε συμμετοχή στον διαγωνισμό.",
    "level": "Sätze"
  },
  {
    "de": "Um die Wette laufen.",
    "lv": "Να ανταγωνιστεί στο τρέξιμο.",
    "level": "Sätze"
  },
  {
    "de": "Was gilt die Wette?",
    "lv": "Σε τι ποντάρουμε • ",
    "level": "Sätze"
  },
  {
    "de": "Wie wird das Wetter?",
    "lv": "Πώς είναι ο καιρός • ",
    "level": "Sätze"
  },
  {
    "de": "Wettkampf im Turnen.",
    "lv": "Αγώνες στη γυμναστική.",
    "level": "Sätze"
  },
  {
    "de": "Wider meinen Willen.",
    "lv": "Παρά τη θέλησή μου.",
    "level": "Sätze"
  },
  {
    "de": "Widerspruch erheben.",
    "lv": "Να διαμαρτυρηθεί. • Υποβολή αντιρρήσεων.",
    "level": "Sätze"
  },
  {
    "de": "Wie alt ist er?",
    "lv": "Πόσο χρονών είναι • ",
    "level": "Sätze"
  },
  {
    "de": "Wie lange?",
    "lv": "Πόση ώρα • ",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiederhören!",
    "lv": "Τα λέμε σύντομα!",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiedersehen!",
    "lv": "Τα λέμε σύντομα!",
    "level": "Sätze"
  },
  {
    "de": "Wilde Tiere.",
    "lv": "Άγρια ζώα.",
    "level": "Sätze"
  },
  {
    "de": "Herzlich willkommen!",
    "lv": "Θερμά καλωσόρισμα!",
    "level": "Sätze"
  },
  {
    "de": "Du musst ziehen.",
    "lv": "Σειρά σου να πας.",
    "level": "Sätze"
  },
  {
    "de": "Es zieht.",
    "lv": "Τραβάει τον άνεμο.",
    "level": "Sätze"
  },
  {
    "de": "Ziemlich kalt.",
    "lv": "Αρκετά κρύο.",
    "level": "Sätze"
  },
  {
    "de": "Zipfel einer Wurst.",
    "lv": "Τελικό κομμάτι λουκάνικου.",
    "level": "Sätze"
  },
  {
    "de": "Zu ihm gehen.",
    "lv": "Πήγαινε σε αυτόν.",
    "level": "Sätze"
  },
  {
    "de": "Zur Schule gehen.",
    "lv": "Να πάω στο σχολείο.",
    "level": "Sätze"
  },
  {
    "de": "Zu Hause bleiben.",
    "lv": "Σπιτόγατος.",
    "level": "Sätze"
  },
  {
    "de": "Von Tag zu Tag.",
    "lv": "Μέρα με τη μέρα.",
    "level": "Sätze"
  },
  {
    "de": "Zum Glück.",
    "lv": "Ευτυχώς.",
    "level": "Sätze"
  },
  {
    "de": "Wasser zum Trinken.",
    "lv": "Πόσιμο νερό.",
    "level": "Sätze"
  },
  {
    "de": "Zu Fuß.",
    "lv": "Με τα πόδια.",
    "level": "Sätze"
  },
  {
    "de": "Zu Pferde.",
    "lv": "Ένα άλογο.",
    "level": "Sätze"
  },
  {
    "de": "Zu Rad.",
    "lv": "Με ποδήλατο.",
    "level": "Sätze"
  },
  {
    "de": "Es hörte auf zu regnen.",
    "lv": "Η βροχή σταμάτησε.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe noch viel zu tun.",
    "lv": "Έχω πολλά να κάνω ακόμα.",
    "level": "Sätze"
  },
  {
    "de": "Zu früh.",
    "lv": "Πολύ σύντομα.",
    "level": "Sätze"
  },
  {
    "de": "Zu groß.",
    "lv": "Πολύ μεγάλο.",
    "level": "Sätze"
  },
  {
    "de": "Mit den Achseln zucken.",
    "lv": "Σήκωμα των ώμων.",
    "level": "Sätze"
  },
  {
    "de": "In einem Zug trinken.",
    "lv": "Πιείτε με μια γουλιά.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde gehen.",
    "lv": "Να χαθεί.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde legen.",
    "lv": "Βάλτε ως βάση. • Πάρτε ως βάση.",
    "level": "Sätze"
  },
  {
    "de": "Zum ersten Mal.",
    "lv": "Για πρώτη φορά.",
    "level": "Sätze"
  },
  {
    "de": "Machen Sie bitte die Tür zu!",
    "lv": "Παρακαλώ κλείστε την πόρτα!",
    "level": "Sätze"
  },
  {
    "de": "Er hat zugenommen.",
    "lv": "Έχει πάρει βάρος.",
    "level": "Sätze"
  },
  {
    "de": "Die Tage nehmen zu.",
    "lv": "Οι μέρες μεγαλώνουν.",
    "level": "Sätze"
  },
  {
    "de": "Zusammenhängen mit etwas.",
    "lv": "Να συσχετιστεί με κάτι.",
    "level": "Sätze"
  },
  {
    "de": "Die Tür ist zu.",
    "lv": "Η πόρτα είναι κλειστή.",
    "level": "Sätze"
  },
  {
    "de": "Das hätte ich ihm nicht zugetraut.",
    "lv": "Δεν θα το περίμενα αυτό από αυτόν.",
    "level": "Sätze"
  },
  {
    "de": "Freier Zutritt.",
    "lv": "Είσοδος ελεύθερη.",
    "level": "Sätze"
  },
  {
    "de": "Zutritt verboten!",
    "lv": "Απαγορεύεται η είσοδος!",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu viel!",
    "lv": "Αυτό είναι πάρα πολύ!",
    "level": "Sätze"
  },
  {
    "de": "Zuwider werden.",
    "lv": "Γίνε αηδιαστικός. • Γίνε ενοχλητικός.",
    "level": "Sätze"
  },
  {
    "de": "Und zwar.",
    "lv": "Δηλαδή.",
    "level": "Sätze"
  },
  {
    "de": "Es steht außer Zweifel.",
    "lv": "Δεν υπάρχει αμφιβολία.",
    "level": "Sätze"
  },
  {
    "de": "Ohne Zweifel.",
    "lv": "Χωρίς αμφιβολία.",
    "level": "Sätze"
  },
  {
    "de": "Zum Zweiten.",
    "lv": "Δεύτερο.",
    "level": "Sätze"
  },
  {
    "de": "Frohes neues Jahr!",
    "lv": "Καλή χρονιά!",
    "level": "Sätze"
  },
  {
    "de": "Herzlichen Glückwunsch zum Geburtstag!",
    "lv": "Χρόνια πολλά!",
    "level": "Sätze"
  },
  {
    "de": "Gute Reise!",
    "lv": "Καλό ταξίδι!",
    "level": "Sätze"
  },
  {
    "de": "Es freut mich, Sie kennenzulernen.",
    "lv": "Χαίρομαι που σε γνωρίζω.",
    "level": "Sätze"
  },
  {
    "de": "Wären Sie bitte so nett?",
    "lv": "Θα ήσουν τόσο ευγενικός, σε παρακαλώ • ",
    "level": "Sätze"
  },
  {
    "de": "Ich bin Ihnen sehr dankbar.",
    "lv": "Σας είμαι πολύ ευγνώμων.",
    "level": "Sätze"
  },
  {
    "de": "Setzt euch bitte hin!",
    "lv": "Κάτσε σε παρακαλώ!",
    "level": "Sätze"
  },
  {
    "de": "Ben, komm bitte an die Tafel!",
    "lv": "Μπεν, έλα στο σανίδι!",
    "level": "Sätze"
  },
  {
    "de": "Schlagt bitte die Lehrbücher auf!",
    "lv": "Παρακαλώ ανοίξτε τα σχολικά βιβλία!",
    "level": "Sätze"
  },
  {
    "de": "Geht bitte in die Sporthalle!",
    "lv": "Παρακαλώ πηγαίνετε στο γυμναστήριο!",
    "level": "Sätze"
  },
  {
    "de": "Schläfst du noch?",
    "lv": "Κοιμάσαι ακόμα",
    "level": "Sätze"
  },
  {
    "de": "Schlafen Sie noch?",
    "lv": "Κοιμάσαι ακόμα • ",
    "level": "Sätze"
  },
  {
    "de": "Er ist fest eingeschlafen.",
    "lv": "Κοιμάται βαθιά.",
    "level": "Sätze"
  },
  {
    "de": "Wecke ihn bitte auf, es ist schon spät!",
    "lv": "Ξυπνήστε τον, είναι ήδη αργά!",
    "level": "Sätze"
  },
  {
    "de": "Es tut mir sehr leid!",
    "lv": "Λυπάμαι πολύ!",
    "level": "Sätze"
  },
  {
    "de": "Vielen Dank!",
    "lv": "Σας ευχαριστώ πολύ!",
    "level": "Sätze"
  },
  {
    "de": "Finn, fang bitte an!",
    "lv": "Φιν, ξεκίνα σε παρακαλώ!",
    "level": "Sätze"
  },
  {
    "de": "Lest bitte mit!",
    "lv": "Διαβάστε παρακαλώ!",
    "level": "Sätze"
  },
  {
    "de": "Emma, schau bitte nicht aus dem Fenster!",
    "lv": "Έμμα, σε παρακαλώ μην κοιτάς έξω από το παράθυρο!",
    "level": "Sätze"
  },
  {
    "de": "Jonas, bring bitte die Hefte!",
    "lv": "Jonas, φέρε τα σημειωματάρια!",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte zurück an deinen Platz!",
    "lv": "Επιστρέψτε στη θέση σας!",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb acht.",
    "lv": "Η ώρα είναι επτά και μισή.",
    "level": "Sätze"
  },
  {
    "de": "Wann wachst du gewöhnlich auf?",
    "lv": "Τι ώρα ξυπνάτε συνήθως • ",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe gleich auf.",
    "lv": "Θα σηκωθώ αμέσως.",
    "level": "Sätze"
  },
  {
    "de": "Steh auf, Hanna, es klingelt!",
    "lv": "Σήκω, Χάνα, χτυπάει το κουδούνι!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich noch fünf Minuten schlafen!",
    "lv": "Άσε με να κοιμηθώ άλλα πέντε λεπτά!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss nicht, das Zimmer zu lüften!",
    "lv": "Μην ξεχνάτε να αερίζετε το δωμάτιο!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist das Handtuch?",
    "lv": "Πού είναι η πετσέτα • ",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mir die Zähne putzen.",
    "lv": "Θέλω να βουρτσίσω τα δόντια μου.",
    "level": "Sätze"
  },
  {
    "de": "Mit was putzt du dir die Zähne?",
    "lv": "Με τι βουρτσίζετε τα δόντια σας • ",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mich anziehen.",
    "lv": "Θέλω να ντυθώ.",
    "level": "Sätze"
  },
  {
    "de": "Zieh dich bitte schnell an!",
    "lv": "Ντύσου γρήγορα, σε παρακαλώ!",
    "level": "Sätze"
  },
  {
    "de": "Kleide dich wärmer an, draußen ist es kühl.",
    "lv": "Φορέστε πιο ζεστά ρούχα, κάνει κρύο έξω.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, wie geht es dir?",
    "lv": "Καλημέρα, πώς είσαι • ",
    "level": "Sätze"
  },
  {
    "de": "Mir geht es gut, danke.",
    "lv": "Είμαι καλά, ευχαριστώ.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es Neues?",
    "lv": "Τι νέα • ",
    "level": "Sätze"
  },
  {
    "de": "Was für ein Chaos hier!",
    "lv": "Εδώ υπάρχει σύγχυση!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich beim Aufräumen helfen?",
    "lv": "Μπορώ να βοηθήσω στον καθαρισμό • ",
    "level": "Sätze"
  },
  {
    "de": "Was trinkst du morgens, Kaffee oder Tee?",
    "lv": "Τι πίνετε το πρωί, καφέ ή τσάι • ",
    "level": "Sätze"
  },
  {
    "de": "Gewöhnlich trinke ich morgens eine Tasse Kaffee.",
    "lv": "Συνήθως πίνω ένα φλιτζάνι καφέ το πρωί.",
    "level": "Sätze"
  },
  {
    "de": "Am liebsten trinke ich schwarzen Kaffee.",
    "lv": "Πιο πολύ μου αρέσει να πίνω μαύρο καφέ.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, hast du gut geschlafen?",
    "lv": "Καλημέρα, κοιμήθηκες καλά • ",
    "level": "Sätze"
  },
  {
    "de": "Ich bin noch sehr müde.",
    "lv": "Είμαι ακόμα πολύ κουρασμένος.",
    "level": "Sätze"
  },
  {
    "de": "Willst du Kaffee oder Milch?",
    "lv": "Θέλετε καφέ ή γάλα • ",
    "level": "Sätze"
  },
  {
    "de": "Gib mir bitte ein Brötchen mit Käse.",
    "lv": "Δώσε μου το σάντουιτς με τυρί, σε παρακαλώ.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss jetzt los!",
    "lv": "Πρέπει να φύγω τώρα!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss dein Frühstück nicht!",
    "lv": "Μην ξεχνάτε το πρωινό!",
    "level": "Sätze"
  },
  {
    "de": "Klara, deck bitte den Tisch!",
    "lv": "Κλάρα, σε παρακαλώ, στρώσε το τραπέζι!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss die Servietten nicht!",
    "lv": "Μην ξεχάσετε τις χαρτοπετσέτες!",
    "level": "Sätze"
  },
  {
    "de": "Wann esst ihr zu Mittag?",
    "lv": "Πότε τρως μεσημεριανό",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit zu essen.",
    "lv": "Είναι ώρα για φαγητό.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es heute zu Mittag?",
    "lv": "Τι είναι για μεσημεριανό σήμερα • ",
    "level": "Sätze"
  },
  {
    "de": "Wie schmeckt dir die Suppe?",
    "lv": "Πώς σας αρέσει η σούπα • ",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt ist sie etwas zu salzig.",
    "lv": "Για να είμαι ειλικρινής, είναι λίγο πολύ αλμυρό.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dir ein Stück Brot geben?",
    "lv": "Μπορώ να σας δώσω μια φέτα ψωμί • ",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich habe schon.",
    "lv": "Ευχαριστώ, το έχω ήδη.",
    "level": "Sätze"
  },
  {
    "de": "Das Fleisch schmeckt ausgezeichnet.",
    "lv": "Το κρέας έχει υπέροχη γεύση.",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich bin schon satt.",
    "lv": "Ευχαριστώ, έχω φάει ήδη.",
    "level": "Sätze"
  },
  {
    "de": "Heute haben wir Besuch.",
    "lv": "Σήμερα έχουμε καλεσμένους.",
    "level": "Sätze"
  },
  {
    "de": "Bist du heute Abend frei?",
    "lv": "Έχεις ελεύθερο χρόνο απόψε • ",
    "level": "Sätze"
  },
  {
    "de": "Komm doch heute zum Mittagessen vorbei!",
    "lv": "Ελάτε να μας επισκεφθείτε για μεσημεριανό γεύμα σήμερα!",
    "level": "Sätze"
  },
  {
    "de": "Setzen wir uns an den Tisch.",
    "lv": "Καθόμαστε στο τραπέζι.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, bedien dich!",
    "lv": "Παρακαλώ τρώτε όσο θέλετε!",
    "level": "Sätze"
  },
  {
    "de": "Stört dich das Rauchen?",
    "lv": "Σας ενοχλεί το κάπνισμα • ",
    "level": "Sätze"
  },
  {
    "de": "Danke für die nette Aufnahme!",
    "lv": "Σας ευχαριστώ για το ευγενικό καλωσόρισμα!",
    "level": "Sätze"
  },
  {
    "de": "Wann gehst du ins Bett?",
    "lv": "Πότε πας για ύπνο",
    "level": "Sätze"
  },
  {
    "de": "Wenn ich von der Arbeit komme, bin ich immer müde.",
    "lv": "Είμαι πάντα κουρασμένος όταν έρχομαι στη δουλειά.",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, ins Bett zu gehen.",
    "lv": "Είναι ώρα να πάτε για ύπνο.",
    "level": "Sätze"
  },
  {
    "de": "Es ist schönes Wetter.",
    "lv": "Είναι καλός καιρός.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mit mir spazieren gehen?",
    "lv": "Θέλεις να περπατήσεις μαζί μου • ",
    "level": "Sätze"
  },
  {
    "de": "Sieh mal, es wird gleich regnen.",
    "lv": "Κοίτα, κοντεύει να βρέξει.",
    "level": "Sätze"
  },
  {
    "de": "Nimm den Regenschirm mit!",
    "lv": "Πάρτε μια ομπρέλα μαζί σας!",
    "level": "Sätze"
  },
  {
    "de": "Es regnet.",
    "lv": "Βρέχει.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin schon ganz nass.",
    "lv": "Είμαι ήδη τελείως βρεγμένος.",
    "level": "Sätze"
  },
  {
    "de": "Glaubst du, dass es den ganzen Tag regnen wird?",
    "lv": "Πιστεύετε ότι θα βρέχει όλη μέρα • ",
    "level": "Sätze"
  },
  {
    "de": "Es hört auf zu regnen.",
    "lv": "Η βροχή σταματά.",
    "level": "Sätze"
  },
  {
    "de": "Die Sonne scheint wieder.",
    "lv": "Ο ήλιος λάμπει ξανά.",
    "level": "Sätze"
  },
  {
    "de": "Es ist sehr warm.",
    "lv": "Κάνει πολύ ζέστη.",
    "level": "Sätze"
  },
  {
    "de": "Es sieht nach Regen aus.",
    "lv": "Φαίνεται ότι θα βρέξει.",
    "level": "Sätze"
  },
  {
    "de": "Wir bekommen gleich ein Gewitter.",
    "lv": "Σε λίγο έρχεται καταιγίδα.",
    "level": "Sätze"
  },
  {
    "de": "Das Gewitter zieht vorüber.",
    "lv": "Η καταιγίδα τελείωσε.",
    "level": "Sätze"
  },
  {
    "de": "Die Wolken verziehen sich.",
    "lv": "Τα σύννεφα διαλύονται.",
    "level": "Sätze"
  },
  {
    "de": "Siehst du den Regenbogen?",
    "lv": "Μπορείτε να δείτε το ουράνιο τόξο • ",
    "level": "Sätze"
  },
  {
    "de": "Der Winter ist da, es hat geschneit.",
    "lv": "Ο χειμώνας είναι εδώ, χιόνισε τη νύχτα.",
    "level": "Sätze"
  },
  {
    "de": "Es schneit.",
    "lv": "Χιονίζει.",
    "level": "Sätze"
  },
  {
    "de": "Wie schön ist es im Wald im Winter!",
    "lv": "Πόσο όμορφο είναι το δάσος το χειμώνα!",
    "level": "Sätze"
  },
  {
    "de": "Mir ist kalt, ich friere.",
    "lv": "Κρυώνω, κρυώνω.",
    "level": "Sätze"
  },
  {
    "de": "Draußen ist Glatteis, pass auf!",
    "lv": "Έξω γλιστράει, προσοχή!",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir auf die Eisbahn gehen?",
    "lv": "Πάμε για πατινάζ στον πάγο • ",
    "level": "Sätze"
  },
  {
    "de": "Zieh die Jacke an, du kannst dich erkälten.",
    "lv": "Φορέστε ένα σακάκι, μπορεί να κρυώσετε.",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb sieben.",
    "lv": "Η ώρα είναι επτά και μισή.",
    "level": "Sätze"
  },
  {
    "de": "Meine Uhr geht fünf Minuten vor.",
    "lv": "Το ρολόι μου είναι πέντε λεπτά μπροστά.",
    "level": "Sätze"
  },
  {
    "de": "Weck mich morgen früh um sieben Uhr!",
    "lv": "Ξύπνα με αύριο στις επτά!",
    "level": "Sätze"
  },
  {
    "de": "Was ist heute für ein Datum?",
    "lv": "Τι ημερομηνία είναι σήμερα • ",
    "level": "Sätze"
  },
  {
    "de": "Heute ist der elfte Juli.",
    "lv": "Σήμερα είναι ενδέκατη Ιουλίου.",
    "level": "Sätze"
  },
  {
    "de": "Was machst du gewöhnlich am Abend?",
    "lv": "Τι κάνετε συνήθως τα βράδια • ",
    "level": "Sätze"
  },
  {
    "de": "Es ist schon lange her, dass wir uns gesehen haben.",
    "lv": "Δεν έχουμε γνωριστεί για πολύ καιρό.",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es dir?",
    "lv": "Τι κάνετε",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, ich möchte etwas mit dir besprechen.",
    "lv": "Με συγχωρείτε, θέλω να συζητήσουμε κάτι μαζί σας.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir spazieren!",
    "lv": "Πάμε μια βόλτα!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Lust, mit mir in den Park zu gehen?",
    "lv": "Θέλεις να πάμε στο πάρκο μαζί μου • ",
    "level": "Sätze"
  },
  {
    "de": "Ich komme, um dich zum Spaziergang abzuholen.",
    "lv": "Σε πήρα για μια βόλτα.",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte etwas langsamer, ich kann dir nicht folgen!",
    "lv": "Πήγαινε λίγο πιο αργά, δεν μπορώ να σε προλάβω!",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zum ersten Mal in dieser Gegend.",
    "lv": "Είναι η πρώτη μου φορά εδώ.",
    "level": "Sätze"
  },
  {
    "de": "Ruhen wir uns ein wenig aus.",
    "lv": "Ας ξεκουραστούμε λίγο.",
    "level": "Sätze"
  },
  {
    "de": "Jetzt können wir zurückgehen.",
    "lv": "Τώρα μπορούμε να επιστρέψουμε.",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt bin ich ziemlich müde.",
    "lv": "Για να είμαι ειλικρινής, είμαι αρκετά κουρασμένος.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, wo ist die nächste U-Bahn-Station?",
    "lv": "Με συγχωρείτε, πού είναι ο πλησιέστερος σταθμός του μετρό • ",
    "level": "Sätze"
  },
  {
    "de": "Welcher ist der kürzeste Weg?",
    "lv": "Ποιος είναι ο συντομότερος δρόμος • ",
    "level": "Sätze"
  },
  {
    "de": "Geh hier die zweite Straße links und dann immer geradeaus.",
    "lv": "Στρίψτε αριστερά εδώ στον δεύτερο δρόμο και προχωρήστε ευθεία.",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich am schnellsten zum Bahnhof?",
    "lv": "Πώς να φτάσετε στο σταθμό πιο γρήγορα • ",
    "level": "Sätze"
  },
  {
    "de": "Ich habe vor, morgen zu verreisen.",
    "lv": "Σκοπεύω να φύγω αύριο.",
    "level": "Sätze"
  },
  {
    "de": "Wohin willst du fahren?",
    "lv": "Πού θέλετε να πάτε • ",
    "level": "Sätze"
  },
  {
    "de": "Reist du geschäftlich oder privat?",
    "lv": "Οδηγείτε για δουλειά ή για διακοπές • ",
    "level": "Sätze"
  },
  {
    "de": "Finn fährt bis Berlin mit, dann geht er ans Meer.",
    "lv": "Ο Φιν ταξιδεύει στο Βερολίνο και μετά πηγαίνει στη θάλασσα.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt das Schiff ab?",
    "lv": "Πότε φεύγει το πλοίο • ",
    "level": "Sätze"
  },
  {
    "de": "In einer halben Stunde.",
    "lv": "Σε μισή ώρα.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich noch eine Kabine bekommen?",
    "lv": "Μπορώ να πάρω ακόμα καμπίνα • ",
    "level": "Sätze"
  },
  {
    "de": "Vergiss deinen Pass nicht!",
    "lv": "Μην ξεχάσετε το διαβατήριό σας!",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, den Koffer zu packen.",
    "lv": "Ήρθε η ώρα να ετοιμάσεις τη βαλίτσα σου.",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt um halb sieben ab.",
    "lv": "Το τρένο φεύγει στις επτά και μισή.",
    "level": "Sätze"
  },
  {
    "de": "Hol mir bitte ein Taxi, ich verpasse sonst den Zug!",
    "lv": "Καλέστε ένα ταξί, αλλιώς θα χάσω το τρένο!",
    "level": "Sätze"
  },
  {
    "de": "Fahr bitte zum Bahnhof!",
    "lv": "Σε παρακαλώ πάρε με στο σταθμό!",
    "level": "Sätze"
  },
  {
    "de": "Ich muss mich beeilen.",
    "lv": "Πρέπει να βιαστώ.",
    "level": "Sätze"
  },
  {
    "de": "Ist der Schalter schon offen?",
    "lv": "Ανοίγει ακόμα το ταμείο • ",
    "level": "Sätze"
  },
  {
    "de": "Eine Fahrkarte nach Köln, bitte.",
    "lv": "Ένα εισιτήριο για την Κολωνία, παρακαλώ.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt der Zug ab?",
    "lv": "Πότε φεύγει το τρένο • ",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt gleich ab.",
    "lv": "Το τρένο φεύγει αμέσως.",
    "level": "Sätze"
  },
  {
    "de": "Muss ich in Koblenz umsteigen?",
    "lv": "Πρέπει να αλλάξω τρένο στο Koblenz • ",
    "level": "Sätze"
  },
  {
    "de": "Ja, dort musst du umsteigen.",
    "lv": "Ναι, πρέπει να αλλάξετε θέση εκεί.",
    "level": "Sätze"
  },
  {
    "de": "Ist dieser Platz frei?",
    "lv": "Αυτή η θέση είναι κατειλημμένη • ",
    "level": "Sätze"
  },
  {
    "de": "Nein, hier sitzt niemand.",
    "lv": "Όχι, δεν κάθεται κανείς εδώ.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der Bahnsteigkartenautomat?",
    "lv": "Πού είναι το μηχάνημα εισιτηρίων πλατφόρμας • ",
    "level": "Sätze"
  },
  {
    "de": "Stell mein Handgepäck ins Gepäcknetz.",
    "lv": "Βάλτε την χειραποσκευή μου στο ράφι.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das Fenster aufmachen?",
    "lv": "Μπορώ να ανοίξω το παράθυρο • ",
    "level": "Sätze"
  },
  {
    "de": "Es zieht, schließ bitte das Fenster!",
    "lv": "Ο άνεμος φυσάει, παρακαλώ κλείστε το παράθυρο!",
    "level": "Sätze"
  },
  {
    "de": "Welche ist die nächste Station?",
    "lv": "Ποια είναι η επόμενη στάση • ",
    "level": "Sätze"
  },
  {
    "de": "Wie lange hält der Zug?",
    "lv": "Πόσο καιρό θα σταματήσει το τρένο • ",
    "level": "Sätze"
  },
  {
    "de": "Wo muss ich umsteigen?",
    "lv": "Πού πρέπει να αλλάξω θέση • ",
    "level": "Sätze"
  },
  {
    "de": "Der Zug hat Verspätung.",
    "lv": "Το τρένο αργεί.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Wagen ist für Nichtraucher.",
    "lv": "Αυτή η άμαξα είναι μη καπνιζόντων.",
    "level": "Sätze"
  },
  {
    "de": "Wir fahren jetzt über die Grenze.",
    "lv": "Τώρα οδηγούμε πέρα ​​από τα σύνορα.",
    "level": "Sätze"
  },
  {
    "de": "Hast du etwas zu verzollen?",
    "lv": "Έχετε κάτι να δηλώσετε στο τελωνείο • ",
    "level": "Sätze"
  },
  {
    "de": "Wir sind in Berlin angekommen.",
    "lv": "Φτάσαμε στο Βερολίνο.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir ein gutes Hotel empfehlen?",
    "lv": "Μπορείτε να προτείνετε ένα καλό ξενοδοχείο • ",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie freie Zimmer?",
    "lv": "Έχετε διαθέσιμα δωμάτια • ",
    "level": "Sätze"
  },
  {
    "de": "Ein Zimmer mit zwei Betten, bitte.",
    "lv": "Δίκλινο δωμάτιο, παρακαλώ.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Zimmer pro Nacht?",
    "lv": "Πόσο κοστίζει το δωμάτιο ανά διανυκτέρευση • ",
    "level": "Sätze"
  },
  {
    "de": "Morgen reise ich ab. Weck mich um sieben Uhr!",
    "lv": "Φεύγω αύριο. Ξύπνα με στις επτά!",
    "level": "Sätze"
  },
  {
    "de": "Die Rechnung, bitte!",
    "lv": "Μπιλ, παρακαλώ!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Stadtbibliothek?",
    "lv": "Πού είναι η βιβλιοθήκη της πόλης • ",
    "level": "Sätze"
  },
  {
    "de": "Wann hat das Museum geöffnet?",
    "lv": "Πότε είναι ανοιχτό το μουσείο • ",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir ins Museum gehen?",
    "lv": "Πάμε στο μουσείο • ",
    "level": "Sätze"
  },
  {
    "de": "Fahren wir mit dem Bus oder der U-Bahn?",
    "lv": "Να πάρουμε το λεωφορείο ή το μετρό • ",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die nächste Bushaltestelle?",
    "lv": "Πού είναι η πλησιέστερη στάση λεωφορείου • ",
    "level": "Sätze"
  },
  {
    "de": "Ich habe großen Hunger.",
    "lv": "Πεινάω πολύ.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir zusammen essen?",
    "lv": "Θα φάμε μαζί • ",
    "level": "Sätze"
  },
  {
    "de": "Kellner, die Speisekarte, bitte!",
    "lv": "Σερβιτόρα, μενού, παρακαλώ!",
    "level": "Sätze"
  },
  {
    "de": "Ist der Fisch frisch?",
    "lv": "Είναι φρέσκο ​​το ψάρι • ",
    "level": "Sätze"
  },
  {
    "de": "Das schmeckt ausgezeichnet!",
    "lv": "Έχει υπέροχη γεύση!",
    "level": "Sätze"
  },
  {
    "de": "Kellner, zahlen bitte!",
    "lv": "Σερβιτόρα, λογαριασμό παρακαλώ!",
    "level": "Sätze"
  },
  {
    "de": "Ich gehe ins Café einen Kaffee trinken.",
    "lv": "Πάω στο καφενείο να πιω καφέ.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mitkommen?",
    "lv": "Θέλεις να έρθεις μαζί • ",
    "level": "Sätze"
  },
  {
    "de": "Eine Tasse Kaffee mit Milch, bitte!",
    "lv": "Ένα φλιτζάνι καφέ με γάλα, παρακαλώ!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneller, ich habe es eilig!",
    "lv": "Πιο γρήγορα παρακαλώ, βιάζομαι!",
    "level": "Sätze"
  },
  {
    "de": "Lass deinen Kaffee nicht kalt werden!",
    "lv": "Μην αφήσετε τον καφέ να κρυώσει!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie etwas Erfrischendes?",
    "lv": "Έχεις κάτι να μετριάσεις • ",
    "level": "Sätze"
  },
  {
    "de": "Eine Portion Eis, bitte!",
    "lv": "Μια μερίδα παγωτό, παρακαλώ!",
    "level": "Sätze"
  },
  {
    "de": "Heute Morgen habe ich einen Brief bekommen.",
    "lv": "Έλαβα ένα γράμμα σήμερα το πρωί.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss ihm gleich schreiben.",
    "lv": "Πρέπει να του γράψω τώρα.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der nächste Briefkasten?",
    "lv": "Πού είναι το πλησιέστερο γραμματοκιβώτιο • ",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Post?",
    "lv": "Πού είναι το ταχυδρομείο • ",
    "level": "Sätze"
  },
  {
    "de": "Erinnere mich morgen daran zu schreiben!",
    "lv": "Θύμισέ μου να γράψω γράμμα αύριο!",
    "level": "Sätze"
  },
  {
    "de": "Werfen Sie bitte diesen Brief in den Briefkasten.",
    "lv": "Παρακαλώ βάλτε αυτό το γράμμα στο γραμματοκιβώτιο!",
    "level": "Sätze"
  },
  {
    "de": "Hallo, hier spricht Emma.",
    "lv": "Γεια, αυτή είναι η Έμμα.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich dich später anrufen?",
    "lv": "Μπορώ να σε καλέσω αργότερα",
    "level": "Sätze"
  },
  {
    "de": "Muss ich lange warten?",
    "lv": "Πρέπει να περιμένω πολύ • ",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneiden Sie mir die Haare.",
    "lv": "Κόψτε μου τα μαλλιά.",
    "level": "Sätze"
  },
  {
    "de": "Hinten bitte nicht zu kurz.",
    "lv": "Πίσω, παρακαλώ, όχι πολύ κοντό.",
    "level": "Sätze"
  },
  {
    "de": "Wann beginnt die Vorstellung?",
    "lv": "Πότε ξεκινά η παράσταση • ",
    "level": "Sätze"
  },
  {
    "de": "Es fängt um halb acht an.",
    "lv": "Ξεκινά στις οκτώ και μισή.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind ausverkauft.",
    "lv": "Όλα τα εισιτήρια έχουν εξαντληθεί.",
    "level": "Sätze"
  },
  {
    "de": "Drei Karten, bitte!",
    "lv": "Τρία εισιτήρια, παρακαλώ!",
    "level": "Sätze"
  },
  {
    "de": "Wir lassen die Jacken in der Garderobe.",
    "lv": "Αφήνουμε τα μπουφάν στην ντουλάπα.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schnell, der Vorhang geht gleich auf!",
    "lv": "Πιο γρήγορα, παρακαλώ, η αυλαία ανοίγει τώρα!",
    "level": "Sätze"
  },
  {
    "de": "Der Vorhang fällt.",
    "lv": "Η αυλαία πέφτει.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dich zum Tanz bitten?",
    "lv": "Να σε προσκαλέσω στο χορό • ",
    "level": "Sätze"
  },
  {
    "de": "Wann ist eure Hochzeit?",
    "lv": "Πότε είναι ο γάμος σας • ",
    "level": "Sätze"
  },
  {
    "de": "Ich suche eine Wohnung.",
    "lv": "Ψάχνω για διαμέρισμα.",
    "level": "Sätze"
  },
  {
    "de": "Ist in diesem Haus eine Wohnung frei?",
    "lv": "Υπάρχει διαθέσιμο διαμέρισμα σε αυτό το κτίριο • ",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet die Miete?",
    "lv": "Πόσο είναι το ενοίκιο • ",
    "level": "Sätze"
  },
  {
    "de": "Die Wohnung hat drei Zimmer und eine Küche.",
    "lv": "Το διαμέρισμα έχει τρία δωμάτια και κουζίνα.",
    "level": "Sätze"
  },
  {
    "de": "Heute ziehen wir um.",
    "lv": "Μετακομίζουμε σήμερα.",
    "level": "Sätze"
  },
  {
    "de": "Mia, pack die Sachen bitte in Kisten!",
    "lv": "Μία, βάλε τα πράγματα στα κουτιά, σε παρακαλώ!",
    "level": "Sätze"
  },
  {
    "de": "Hast du alles eingepackt?",
    "lv": "Είναι όλα ήδη συσκευασμένα • ",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe mit meinem Freund in Kontakt.",
    "lv": "Είμαι σε αλληλογραφία με τον φίλο μου.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir ins Theater?",
    "lv": "Πάμε θέατρο • ",
    "level": "Sätze"
  },
  {
    "de": "Ist alles eingeladen?",
    "lv": "Είναι όλα φορτωμένα • ",
    "level": "Sätze"
  },
  {
    "de": "Welch schöne Aussicht!",
    "lv": "Είναι μια όμορφη θέα!",
    "level": "Sätze"
  },
  {
    "de": "Nun können wir alles wieder aufräumen.",
    "lv": "Τώρα μπορούμε να τα φτιάξουμε όλα ξανά.",
    "level": "Sätze"
  },
  {
    "de": "Wie viele Zimmer habt ihr?",
    "lv": "Πόσα δωμάτια έχετε • ",
    "level": "Sätze"
  },
  {
    "de": "Im Sommer fahre ich ans Meer.",
    "lv": "Το καλοκαίρι πηγαίνω στη θάλασσα.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du schwimmen?",
    "lv": "Ξέρετε κολύμπι",
    "level": "Sätze"
  },
  {
    "de": "Schwimm nicht zu weit hinaus!",
    "lv": "Μην κολυμπάτε πολύ μακριά!",
    "level": "Sätze"
  },
  {
    "de": "Badest du jeden Tag?",
    "lv": "Πηγαίνεις για κολύμπι κάθε μέρα • ",
    "level": "Sätze"
  },
  {
    "de": "Bei schönem Wetter gehe ich angeln.",
    "lv": "Αν ο καιρός είναι καλός, πάω για ψάρεμα.",
    "level": "Sätze"
  },
  {
    "de": "Wie sieht er aus?",
    "lv": "Πώς μοιάζει • ",
    "level": "Sätze"
  },
  {
    "de": "Er hat sich aber recht verändert.",
    "lv": "Είναι ακόμα αρκετά αλλαγμένος.",
    "level": "Sätze"
  },
  {
    "de": "Wie ist er als Mensch?",
    "lv": "Πώς είναι σαν άνθρωπος • ",
    "level": "Sätze"
  },
  {
    "de": "Er ist immer nett und freundlich.",
    "lv": "Είναι πάντα καλός και φιλικός.",
    "level": "Sätze"
  },
  {
    "de": "Ich fühle mich nicht wohl.",
    "lv": "Νιώθω άσχημα.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe starke Kopfschmerzen.",
    "lv": "Έχω άσχημο πονοκέφαλο.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe mich erkältet.",
    "lv": "Έχω κρυώσει.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Schnupfen.",
    "lv": "Έχω κρυώσει.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist schwindlig.",
    "lv": "Ζαλίζομαι.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Arzt gehen.",
    "lv": "Πρέπει να πάω στο γιατρό.",
    "level": "Sätze"
  },
  {
    "de": "Leg dich ins Bett!",
    "lv": "Ξάπλωσε στο κρεβάτι!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Fieber?",
    "lv": "Έχετε πυρετό • ",
    "level": "Sätze"
  },
  {
    "de": "Gestern hatte ich erhöhte Temperatur.",
    "lv": "Χθες είχα υψηλή θερμοκρασία.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Zahnschmerzen.",
    "lv": "Έχω πονόδοντο.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Zahnarzt gehen.",
    "lv": "Πρέπει να πάω στον οδοντίατρο.",
    "level": "Sätze"
  },
  {
    "de": "Weißt du, dass Finn krank ist?",
    "lv": "Ξέρεις ότι ο Φιν είναι άρρωστος • ",
    "level": "Sätze"
  },
  {
    "de": "Laut Arzt wird er bald wieder gesund.",
    "lv": "Σύμφωνα με τον γιατρό, σύντομα θα είναι και πάλι καλά.",
    "level": "Sätze"
  },
  {
    "de": "Ich will meine Wohnung neu möblieren.",
    "lv": "Θέλω να ανανεώσω το διαμέρισμα.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das auf Raten kaufen?",
    "lv": "Μπορώ να αγοράσω με δόσεις • ",
    "level": "Sätze"
  },
  {
    "de": "Bleib im Bett, bis es dir besser geht!",
    "lv": "Μείνε στο κρεβάτι μέχρι να νιώσεις καλύτερα!",
    "level": "Sätze"
  },
  {
    "de": "Noah hat in zwei Wochen schwimmen gelernt.",
    "lv": "Ο Νώε έμαθε να κολυμπάει σε δύο εβδομάδες.",
    "level": "Sätze"
  },
  {
    "de": "Sei mit dem Essen noch vorsichtig.",
    "lv": "Να είστε προσεκτικοί με το φαγητό.",
    "level": "Sätze"
  },
  {
    "de": "Sprichst du Deutsch?",
    "lv": "Μιλάς γερμανικά",
    "level": "Sätze"
  },
  {
    "de": "Ja, ein bisschen.",
    "lv": "Ναι, λίγο.",
    "level": "Sätze"
  },
  {
    "de": "Du sprichst ziemlich fließend.",
    "lv": "Μιλάς αρκετά άπταιστα.",
    "level": "Sätze"
  },
  {
    "de": "Wo hast du Deutsch gelernt?",
    "lv": "Πού έμαθες γερμανικά • ",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme seit einem Jahr Deutschstunden.",
    "lv": "Εδώ και ένα χρόνο κάνω μαθήματα γερμανικών.",
    "level": "Sätze"
  },
  {
    "de": "Ich suche immer Gelegenheit, Deutsch zu sprechen.",
    "lv": "Πάντα ψάχνω μια ευκαιρία να μιλήσω γερμανικά.",
    "level": "Sätze"
  },
  {
    "de": "Ist das Buch noch vorrätig?",
    "lv": "Είναι ακόμα διαθέσιμο αυτό το βιβλίο • ",
    "level": "Sätze"
  },
  {
    "de": "Das Buch ist leider ausverkauft.",
    "lv": "Δυστυχώς, το βιβλίο έχει εξαντληθεί.",
    "level": "Sätze"
  },
  {
    "de": "Wann erscheint die neue Auflage?",
    "lv": "Πότε θα κυκλοφορήσει η νέα έκδοση • ",
    "level": "Sätze"
  },
  {
    "de": "Womit kann ich Ihnen helfen?",
    "lv": "Σε τι μπορώ να βοηθήσω • ",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie ganz frische Eier?",
    "lv": "Έχετε φρέσκα αυγά • ",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die?",
    "lv": "Πόσο κοστίζουν • ",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu teuer.",
    "lv": "Είναι πολύ ακριβό.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir ein halbes Kilo abwiegen?",
    "lv": "Μπορείς να χάσεις μισό κιλό • ",
    "level": "Sätze"
  },
  {
    "de": "Wie viel muss ich zahlen?",
    "lv": "Πόσα πρέπει να πληρώσω • ",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet das Kilo?",
    "lv": "Πόσο κοστίζει ένα κιλό • ",
    "level": "Sätze"
  },
  {
    "de": "Wiegen Sie mir bitte zwei Kilo ab.",
    "lv": "Ζυγίστε δύο κιλά.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch Karotten?",
    "lv": "Έχετε και εσείς καρότα • ",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie gutes Rindfleisch?",
    "lv": "Έχετε καλό βοδινό κρέας • ",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir zwei Kilo Hackfleisch.",
    "lv": "Δώστε δύο κιλά κιμά.",
    "level": "Sätze"
  },
  {
    "de": "Ein Laib Brot, bitte, aber nicht zu knusprig.",
    "lv": "Ένα καρβέλι ψωμί, παρακαλώ, αλλά όχι πολύ σκληρό.",
    "level": "Sätze"
  },
  {
    "de": "Das Brot ist frisch gebacken.",
    "lv": "Το ψωμί είναι φρεσκοψημένο.",
    "level": "Sätze"
  },
  {
    "de": "Was für Obst haben Sie heute?",
    "lv": "Τι φρούτα έχετε σήμερα • ",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die Äpfel?",
    "lv": "Πόσο κοστίζουν τα μήλα • ",
    "level": "Sätze"
  },
  {
    "de": "Dann nehme ich zwei Kilo Äpfel.",
    "lv": "Μετά παίρνω δύο κιλά μήλα.",
    "level": "Sätze"
  },
  {
    "de": "Die Birnen sind sehr teuer.",
    "lv": "Οι βολβοί είναι πολύ ακριβοί.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir alles nach Hause liefern?",
    "lv": "Μπορείτε να φέρετε τα πάντα στο σπίτι • ",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie Reis?",
    "lv": "Έχεις ρύζι • ",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir bitte ein Kilo Reis.",
    "lv": "Παρακαλώ δώστε ένα κιλό ρύζι.",
    "level": "Sätze"
  },
  {
    "de": "Danke, diesmal nicht.",
    "lv": "Ευχαριστώ, όχι αυτή τη φορά.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet dieser Teppich?",
    "lv": "Πόσο κοστίζει αυτό το χαλί • ",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Möbel in meine Wohnung liefern?",
    "lv": "Μπορείτε να παραδώσετε τα έπιπλα στο διαμέρισμα • ",
    "level": "Sätze"
  },
  {
    "de": "Bitte an der Kasse zahlen.",
    "lv": "Παρακαλούμε πληρώστε στο ταμείο.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, machen Sie die Rechnung.",
    "lv": "Γράψτε ένα τιμολόγιο.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Meter?",
    "lv": "Πόσο κοστίζει ένας μετρητής • ",
    "level": "Sätze"
  },
  {
    "de": "Dieser Stoff gefällt mir.",
    "lv": "Λατρεύω αυτό το ύφασμα.",
    "level": "Sätze"
  },
  {
    "de": "Schneiden Sie mir bitte drei Meter ab.",
    "lv": "Παρακαλώ κόψτε τρία μέτρα.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch andere Muster?",
    "lv": "Έχετε άλλα δείγματα • ",
    "level": "Sätze"
  },
  {
    "de": "Diese Farbe gefällt mir nicht.",
    "lv": "Δεν μου αρέσει αυτό το χρώμα.",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir eine hellere.",
    "lv": "Δώστε πιο φωτεινό.",
    "level": "Sätze"
  },
  {
    "de": "Was kosten diese Socken?",
    "lv": "Πόσο είναι αυτές οι κάλτσες • ",
    "level": "Sätze"
  },
  {
    "de": "Welche Handschuhe wünschen Sie?",
    "lv": "Τι είδους γάντια θέλετε • ",
    "level": "Sätze"
  },
  {
    "de": "Die sind mir etwas zu eng.",
    "lv": "Μου είναι λίγο πολύ σφιχτά.",
    "level": "Sätze"
  },
  {
    "de": "So, nun passen sie gut.",
    "lv": "Λοιπόν, είναι μια χαρά τώρα.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir einen guten Schneider empfehlen?",
    "lv": "Μπορείτε να προτείνετε έναν καλό ράφτη • ",
    "level": "Sätze"
  },
  {
    "de": "Ich will einen Anzug bestellen.",
    "lv": "Θέλω να παραγγείλω ένα κοστούμι.",
    "level": "Sätze"
  },
  {
    "de": "Wann wird er fertig sein?",
    "lv": "Πότε θα είναι έτοιμο • ",
    "level": "Sätze"
  },
  {
    "de": "Der Anzug sitzt gut.",
    "lv": "Το κοστούμι ταιριάζει καλά.",
    "level": "Sätze"
  },
  {
    "de": "Die Hose ist zu lang.",
    "lv": "Το παντελόνι είναι πολύ μακρύ.",
    "level": "Sätze"
  },
  {
    "de": "Bitte reinigen und bügeln Sie ihn!",
    "lv": "Παρακαλώ καθαρίστε και σιδερώστε το!",
    "level": "Sätze"
  },
  {
    "de": "Wann wird das Kleid fertig sein?",
    "lv": "Πότε θα είναι έτοιμο το φόρεμα • ",
    "level": "Sätze"
  },
  {
    "de": "Die Schuhe sind zu eng.",
    "lv": "Τα παπούτσια είναι πολύ στενά.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Schuhe heute reparieren?",
    "lv": "Μπορείς να φτιάξεις τα παπούτσια σήμερα • ",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich die Schuhe abholen?",
    "lv": "Πότε μπορώ να πάρω τα παπούτσια • ",
    "level": "Sätze"
  },
  {
    "de": "Meine Armbanduhr funktioniert nicht.",
    "lv": "Το ρολόι μου δεν λειτουργεί.",
    "level": "Sätze"
  },
  {
    "de": "Sie geht fünf Minuten vor.",
    "lv": "Είναι πέντε λεπτά μπροστά.",
    "level": "Sätze"
  },
  {
    "de": "Bist du kurzsichtig oder weitsichtig?",
    "lv": "Είσαι μυωπικός ή υπερμετρωπικός • ",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte eine Brille kaufen.",
    "lv": "Θέλω να αγοράσω γυαλιά.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie meine Brille reparieren?",
    "lv": "Μπορείς να μου φτιάξεις τα γυαλιά • ",
    "level": "Sätze"
  },
  {
    "de": "Das dauert nur eine Viertelstunde.",
    "lv": "Διαρκεί μόνο ένα τέταρτο της ώρας.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist mir zu hoch.",
    "lv": "Η τιμή είναι πολύ υψηλή για μένα.",
    "level": "Sätze"
  },
  {
    "de": "Ich brauche zwei Fotos für meinen Pass.",
    "lv": "Χρειάζομαι δύο φωτογραφίες για το διαβατήριό μου.",
    "level": "Sätze"
  },
  {
    "de": "Bitte packen Sie es ein und schicken Sie es mir nach Hause.",
    "lv": "Παρακαλώ συσκευάστε και στείλτε το σπίτι.",
    "level": "Sätze"
  },
  {
    "de": "Wir haben feste Preise.",
    "lv": "Έχουμε σταθερές τιμές.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, fotografieren Sie mich.",
    "lv": "Τραβήξτε με μια φωτογραφία.",
    "level": "Sätze"
  },
  {
    "de": "Setzen Sie sich, schauen Sie gerade in die Kamera und bewegen Sie sich nicht!",
    "lv": "Κάτσε, κοίτα κατευθείαν στην κάμερα και μην κουνηθείς!",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich das Probebild sehen?",
    "lv": "Πότε θα δω δείγμα • ",
    "level": "Sätze"
  },
  {
    "de": "Wann sind die Fotos fertig?",
    "lv": "Πότε θα είναι έτοιμες οι φωτογραφίες • ",
    "level": "Sätze"
  },
  {
    "de": "Die Aufnahme ist gelungen.",
    "lv": "Η φωτογραφία ήταν επιτυχημένη.",
    "level": "Sätze"
  },
  {
    "de": "Die Fotos sind gut geworden.",
    "lv": "Οι φωτογραφίες βγήκαν καλές.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie das Foto auch vergrößern?",
    "lv": "Μπορείτε να μεγεθύνετε και τη φωτογραφία • ",
    "level": "Sätze"
  },
  {
    "de": "Sind diese Steine echt?",
    "lv": "Είναι αληθινές αυτές οι πέτρες • ",
    "level": "Sätze"
  },
  {
    "de": "Ist das echtes Gold?",
    "lv": "Είναι πραγματικός χρυσός • ",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir bitte Trauringe.",
    "lv": "Δείξε μου τις βέρες, σε παρακαλώ.",
    "level": "Sätze"
  },
  {
    "de": "Der Ring ist mir etwas zu weit.",
    "lv": "Το δαχτυλίδι είναι λίγο πολύ μεγάλο για μένα.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann ihn enger machen.",
    "lv": "Μπορώ να το κάνω πιο στενό.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Ring passt mir.",
    "lv": "Αυτό το δαχτυλίδι μου ταιριάζει.",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir schöne Geschenkideen.",
    "lv": "Δείξτε όμορφες ιδέες για δώρα.",
    "level": "Sätze"
  },
  {
    "de": "Wie gefallen dir diese Ohrringe?",
    "lv": "Πώς σας φαίνονται αυτά τα σκουλαρίκια • ",
    "level": "Sätze"
  },
  {
    "de": "Diese Brosche ist wirklich schön.",
    "lv": "Αυτός ο ώμος είναι πολύ όμορφος.",
    "level": "Sätze"
  },
  {
    "de": "Der Stein ist ein Saphir.",
    "lv": "Αυτή η πέτρα είναι ζαφείρι.",
    "level": "Sätze"
  },
  {
    "de": "Das ist kein echter Stein, das ist Glas.",
    "lv": "Δεν είναι αληθινή πέτρα, είναι γυαλί.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Armband kann ich Ihnen besonders empfehlen.",
    "lv": "Μπορώ να συστήσω ανεπιφύλακτα αυτό το βραχιόλι.",
    "level": "Sätze"
  },
  {
    "de": "Es ist besonders schön gearbeitet.",
    "lv": "Είναι εξαιρετικά φιλοτεχνημένο.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist nicht hoch.",
    "lv": "Η τιμή δεν είναι υψηλή.",
    "level": "Sätze"
  },
  {
    "de": "Bekomme ich die Schachtel gratis?",
    "lv": "Μπορώ να πάρω ένα κουτί δωρεάν • ",
    "level": "Sätze"
  },
  {
    "de": "Alle Schmuckstücke sind gestempelt.",
    "lv": "Όλα τα κοσμήματα είναι σφραγισμένα.",
    "level": "Sätze"
  },
  {
    "de": "Falls es meiner Frau nicht gefällt, kann ich es umtauschen?",
    "lv": "Αν δεν αρέσει στη γυναίκα μου, μπορώ να αλλάξω • ",
    "level": "Sätze"
  },
  {
    "de": "Natürlich, jederzeit.",
    "lv": "Σίγουρα, ανά πάσα στιγμή.",
    "level": "Sätze"
  }
];

window.SENTENCE_ENTRIES = SENTENCE_ENTRIES;

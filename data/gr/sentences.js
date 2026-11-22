const SENTENCE_ENTRIES = [
  {
    "de": "Hüte dich davor!",
    "lv": "Φυλάξου από αυτό!",
    "level": "Sätze"
  },
  {
    "de": "Wenn nichts dazwischenkommt.",
    "lv": "Αν δεν μεσολαβήσει κάτι. • Αν όλα πάνε όπως τα σχεδιάσαμε.",
    "level": "Sätze"
  },
  {
    "de": "Das kann ich mir denken!",
    "lv": "Το φαντάζομαι!",
    "level": "Sätze"
  },
  {
    "de": "Ist er denn krank?",
    "lv": "Είναι άρρωστος δηλαδή;",
    "level": "Sätze"
  },
  {
    "de": "Was denn?",
    "lv": "Τι δηλαδή;",
    "level": "Sätze"
  },
  {
    "de": "Desto mehr.",
    "lv": "Τόσο περισσότερο.",
    "level": "Sätze"
  },
  {
    "de": "Je mehr, desto besser.",
    "lv": "Όσο περισσότερα, τόσο καλύτερα.",
    "level": "Sätze"
  },
  {
    "de": "Alles deutet auf Regen.",
    "lv": "Όλα δείχνουν ότι θα βρέξει.",
    "level": "Sätze"
  },
  {
    "de": "Damit ist mir wenig gedient.",
    "lv": "Αυτό δεν με εξυπηρετεί πολύ.",
    "level": "Sätze"
  },
  {
    "de": "Er ist dienstlich verhindert.",
    "lv": "Δεν μπορεί να έρθει λόγω υπηρεσιακών υποχρεώσεων.",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie doch!",
    "lv": "Μιλήστε επιτέλους!",
    "level": "Sätze"
  },
  {
    "de": "Es donnert.",
    "lv": "Βροντάει.",
    "level": "Sätze"
  },
  {
    "de": "Doppelt so groß.",
    "lv": "Δύο φορές μεγαλύτερος.",
    "level": "Sätze"
  },
  {
    "de": "Von dort.",
    "lv": "Από εκεί.",
    "level": "Sätze"
  },
  {
    "de": "Die Zeit drängt.",
    "lv": "Ο χρόνος πιέζει.",
    "level": "Sätze"
  },
  {
    "de": "Ihn drücken Sorgen.",
    "lv": "Τον βαραίνουν οι έγνοιες.",
    "level": "Sätze"
  },
  {
    "de": "Hast du das Buch durchgearbeitet?",
    "lv": "Μελέτησες το βιβλίο διεξοδικά;",
    "level": "Sätze"
  },
  {
    "de": "Kein Durchgang!",
    "lv": "Απαγορεύεται η διέλευση!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich Sie bitten?",
    "lv": "Μου χαρίζετε αυτόν τον χορό; • Θα με ακολουθήσετε, παρακαλώ;",
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
    "lv": "Δεν έχει καμία απολύτως σημασία.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie eigentlich?",
    "lv": "Τι θέλετε τελικά;",
    "level": "Sätze"
  },
  {
    "de": "Eilt es mit dieser Sache?",
    "lv": "Είναι επείγουσα αυτή η υπόθεση;",
    "level": "Sätze"
  },
  {
    "de": "Eilt sehr!",
    "lv": "Πολύ επείγον!",
    "level": "Sätze"
  },
  {
    "de": "Ich habe es eilig.",
    "lv": "Βιάζομαι.",
    "level": "Sätze"
  },
  {
    "de": "Du bildest dir nur ein, krank zu sein.",
    "lv": "Απλώς φαντάζεσαι ότι είσαι άρρωστος.",
    "level": "Sätze"
  },
  {
    "de": "Was fällt dir ein?",
    "lv": "Πώς τολμάς; • Τι σου έρχεται στο μυαλό;",
    "level": "Sätze"
  },
  {
    "de": "Es war einmal.",
    "lv": "Μια φορά κι έναν καιρό.",
    "level": "Sätze"
  },
  {
    "de": "Steigen Sie bitte ein!",
    "lv": "Ανεβείτε, παρακαλώ!",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie ein!",
    "lv": "Περάστε!",
    "level": "Sätze"
  },
  {
    "de": "Einzelnes hat mir dort gefallen.",
    "lv": "Κάποια πράγματα μου άρεσαν εκεί.",
    "level": "Sätze"
  },
  {
    "de": "Es empfiehlt sich.",
    "lv": "Συνιστάται.",
    "level": "Sätze"
  },
  {
    "de": "Diese Flasche enthält Essig.",
    "lv": "Αυτό το μπουκάλι περιέχει ξίδι.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldigen Sie bitte!",
    "lv": "Με συγχωρείτε, παρακαλώ!",
    "level": "Sätze"
  },
  {
    "de": "Entweder ... oder ...",
    "lv": "Είτε... είτε...",
    "level": "Sätze"
  },
  {
    "de": "Wer war der Erste?",
    "lv": "Ποιος ήταν ο πρώτος;",
    "level": "Sätze"
  },
  {
    "de": "Wer fehlt heute?",
    "lv": "Ποιος λείπει σήμερα;",
    "level": "Sätze"
  },
  {
    "de": "Was fehlt dir?",
    "lv": "Τι έχεις;",
    "level": "Sätze"
  },
  {
    "de": "Wie heißen Sie?",
    "lv": "Πώς λέγεστε;",
    "level": "Sätze"
  },
  {
    "de": "Was soll das heißen?",
    "lv": "Τι θέλει να πει αυτό;",
    "level": "Sätze"
  },
  {
    "de": "Bitte treten Sie näher heran!",
    "lv": "Παρακαλώ, πλησιάστε!",
    "level": "Sätze"
  },
  {
    "de": "Heraus mit der Sprache!",
    "lv": "Λέγε επιτέλους!",
    "level": "Sätze"
  },
  {
    "de": "im Herbst",
    "lv": "το φθινόπωρο",
    "level": "Sätze"
  },
  {
    "de": "Meine Herrschaften!",
    "lv": "Κυρίες και κύριοι!",
    "level": "Sätze"
  },
  {
    "de": "von heute an",
    "lv": "από σήμερα και στο εξής",
    "level": "Sätze"
  },
  {
    "de": "heute früh",
    "lv": "σήμερα το πρωί",
    "level": "Sätze"
  },
  {
    "de": "heute Nacht",
    "lv": "απόψε • χτες τη νύχτα",
    "level": "Sätze"
  },
  {
    "de": "Zu Hilfe!",
    "lv": "Βοήθεια!",
    "level": "Sätze"
  },
  {
    "de": "Ich lerne jeden Tag Deutsch.",
    "lv": "Μαθαίνω γερμανικά κάθε μέρα.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das bitte wiederholen?",
    "lv": "Μπορείς να το επαναλάβεις, σε παρακαλώ;",
    "level": "Sätze"
  },
  {
    "de": "Wir treffen uns am Bahnhof.",
    "lv": "Συναντιόμαστε στον σιδηροδρομικό σταθμό.",
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
    "lv": "Θα έπρεπε να λαμβάνονται υπόψη διάφορες οπτικές γωνίες.",
    "level": "Sätze"
  },
  {
    "de": "Könnten Sie das näher erläutern?",
    "lv": "Θα μπορούσατε να το εξηγήσετε πιο αναλυτικά;",
    "level": "Sätze"
  },
  {
    "de": "Was mich anbelangt, ...",
    "lv": "Όσο για μένα,...",
    "level": "Sätze"
  },
  {
    "de": "Wie alt sind Sie?",
    "lv": "Πόσων χρονών είστε;",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zwanzig Jahre alt.",
    "lv": "Είμαι είκοσι χρονών.",
    "level": "Sätze"
  },
  {
    "de": "Von heute an.",
    "lv": "Από σήμερα.",
    "level": "Sätze"
  },
  {
    "de": "Von jetzt an.",
    "lv": "Από τώρα και στο εξής.",
    "level": "Sätze"
  },
  {
    "de": "Anders geht es nicht.",
    "lv": "Αλλιώς δεν γίνεται.",
    "level": "Sätze"
  },
  {
    "de": "Rufen Sie mich an.",
    "lv": "Τηλεφωνήστε μου.",
    "level": "Sätze"
  },
  {
    "de": "Bitte stellen Sie das Radio ab.",
    "lv": "Παρακαλώ, κλείστε το ραδιόφωνο.",
    "level": "Sätze"
  },
  {
    "de": "Achte bitte auf den Verkehr.",
    "lv": "Πρόσεχε την κυκλοφορία, σε παρακαλώ.",
    "level": "Sätze"
  },
  {
    "de": "Darauf musst du achten.",
    "lv": "Αυτό πρέπει να το προσέξεις.",
    "level": "Sätze"
  },
  {
    "de": "Heute mache ich es anders.",
    "lv": "Σήμερα το κάνω αλλιώς.",
    "level": "Sätze"
  },
  {
    "de": "Wir warten auf den Bus.",
    "lv": "Περιμένουμε το λεωφορείο.",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt allein.",
    "lv": "Μένει μόνος του.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Ausbildung absolviert.",
    "lv": "Ολοκλήρωσα την κατάρτισή μου. • Ολοκλήρωσα την εκπαίδευσή μου.",
    "level": "Sätze"
  },
  {
    "de": "Ich warte den Regen ab.",
    "lv": "Περιμένω να σταματήσει η βροχή.",
    "level": "Sätze"
  },
  {
    "de": "Er arbeitet in der Verkaufsabteilung.",
    "lv": "Δουλεύει στο τμήμα πωλήσεων.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin allergisch gegen Katzen.",
    "lv": "Είμαι αλλεργικός στις γάτες.",
    "level": "Sätze"
  },
  {
    "de": "Andererseits verstehe ich ihn.",
    "lv": "Από την άλλη, τον καταλαβαίνω.",
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
    "lv": "Θα ήθελα να το αναλύσω πιο λεπτομερώς.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte den Vertrag ändern.",
    "lv": "Θα ήθελα να τροποποιήσω το συμβόλαιο.",
    "level": "Sätze"
  },
  {
    "de": "Er ändert ständig seine Meinung.",
    "lv": "Αλλάζει συνέχεια γνώμη.",
    "level": "Sätze"
  },
  {
    "de": "Ähnliche Probleme hatten wir schon früher.",
    "lv": "Είχαμε παρόμοια προβλήματα και στο παρελθόν.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ahnung!",
    "lv": "Δεν έχω ιδέα!",
    "level": "Sätze"
  },
  {
    "de": "Hör auf zu jammern.",
    "lv": "Σταμάτα να παραπονιέσαι.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Kleid ist stilvoll und konservativ.",
    "lv": "Αυτό το φόρεμα είναι κομψό και κλασικό.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre gerne Akkordeonmusik.",
    "lv": "Μου αρέσει να ακούω μουσική για ακορντεόν.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das Gerät anklicken?",
    "lv": "Μπορείς να κάνεις κλικ στη συσκευή;",
    "level": "Sätze"
  },
  {
    "de": "Bitte öffne die Datei und klicke darauf.",
    "lv": "Σε παρακαλώ, άνοιξε το αρχείο και κάνε κλικ πάνω του.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe einen Unfall gehabt.",
    "lv": "Είχα ατύχημα.",
    "level": "Sätze"
  },
  {
    "de": "Wir laufen zum Bahnhof.",
    "lv": "Πηγαίνουμε με τα πόδια στον σταθμό.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schalte den Fernseher an.",
    "lv": "Σε παρακαλώ, άνοιξε την τηλεόραση.",
    "level": "Sätze"
  },
  {
    "de": "Mein Computer ist abgestürzt.",
    "lv": "Ο υπολογιστής μου κόλλησε.",
    "level": "Sätze"
  },
  {
    "de": "Am Wochenende gehe ich angeln.",
    "lv": "Το Σαββατοκύριακο πάω για ψάρεμα.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe den Anruf verpasst.",
    "lv": "Έχασα την κλήση.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mich später anrufen?",
    "lv": "Μπορείς να με πάρεις τηλέφωνο αργότερα;",
    "level": "Sätze"
  },
  {
    "de": "Bitte nimm meinen Vorschlag an.",
    "lv": "Σε παρακαλώ, δέξου την πρότασή μου.",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme dein Angebot an.",
    "lv": "Δέχομαι την προσφορά σου.",
    "level": "Sätze"
  },
  {
    "de": "Er nahm die Einladung an.",
    "lv": "Δέχτηκε την πρόσκληση.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Angst vor Spinnen.",
    "lv": "Φοβάμαι τις αράχνες.",
    "level": "Sätze"
  },
  {
    "de": "Keine Angst, alles wird gut.",
    "lv": "Μη φοβάσαι, όλα θα πάνε καλά.",
    "level": "Sätze"
  },
  {
    "de": "Anklang finden.",
    "lv": "Βρίσκω απήχηση. • Βρίσκω ανταπόκριση.",
    "level": "Sätze"
  },
  {
    "de": "Es kommt darauf an.",
    "lv": "Εξαρτάται.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Anlass.",
    "lv": "Με αυτή την αφορμή.",
    "level": "Sätze"
  },
  {
    "de": "Nehmen wir an, dass ...",
    "lv": "Ας υποθέσουμε ότι...",
    "level": "Sätze"
  },
  {
    "de": "Was hast du da angerichtet?",
    "lv": "Τι ζημιά έκανες εκεί;",
    "level": "Sätze"
  },
  {
    "de": "Bis ans Ende.",
    "lv": "Μέχρι το τέλος.",
    "level": "Sätze"
  },
  {
    "de": "Du glaubst mir anscheinend nicht.",
    "lv": "Όπως φαίνεται, δεν με πιστεύεις.",
    "level": "Sätze"
  },
  {
    "de": "Meiner Ansicht nach ...",
    "lv": "Κατά τη γνώμη μου...",
    "level": "Sätze"
  },
  {
    "de": "Stell dich nicht so an!",
    "lv": "Μην κάνεις έτσι!",
    "level": "Sätze"
  },
  {
    "de": "An die Arbeit gehen.",
    "lv": "Στρώνομαι στη δουλειά.",
    "level": "Sätze"
  },
  {
    "de": "Außer Atem sein.",
    "lv": "Είμαι λαχανιασμένος.",
    "level": "Sätze"
  },
  {
    "de": "Guten Appetit!",
    "lv": "Καλή όρεξη!",
    "level": "Sätze"
  },
  {
    "de": "In einem Atemzug.",
    "lv": "Με μια ανάσα.",
    "level": "Sätze"
  },
  {
    "de": "Auf jeden Fall.",
    "lv": "Σε κάθε περίπτωση.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal war alles still.",
    "lv": "Ξαφνικά όλα σώπασαν.",
    "level": "Sätze"
  },
  {
    "de": "Bitte mach die Tür auf!",
    "lv": "Άνοιξε την πόρτα, σε παρακαλώ!",
    "level": "Sätze"
  },
  {
    "de": "Er hat den Kredit aufgenommen.",
    "lv": "Πήρε το δάνειο.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen heute aufräumen.",
    "lv": "Σήμερα πρέπει να συγυρίσουμε.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre jetzt auf.",
    "lv": "Τώρα σταματώ.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schon auf.",
    "lv": "Έχει κιόλας σηκωθεί.",
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
    "lv": "Καλύπτω τη ζημιά.",
    "level": "Sätze"
  },
  {
    "de": "Bitte die Tür auf!",
    "lv": "Ανοίξτε την πόρτα, παρακαλώ!",
    "level": "Sätze"
  },
  {
    "de": "Aufrecht sitzen.",
    "lv": "Κάθομαι ίσια.",
    "level": "Sätze"
  },
  {
    "de": "Er ist auf.",
    "lv": "Έχει σηκωθεί.",
    "level": "Sätze"
  },
  {
    "de": "Alle Kräfte aufwenden.",
    "lv": "Βάζω όλες μου τις δυνάμεις.",
    "level": "Sätze"
  },
  {
    "de": "Viel Mühe aufwenden.",
    "lv": "Καταβάλλω μεγάλη προσπάθεια.",
    "level": "Sätze"
  },
  {
    "de": "Geh mir aus den Augen!",
    "lv": "Φύγε από μπροστά μου!",
    "level": "Sätze"
  },
  {
    "de": "Unter vier Augen.",
    "lv": "Κατ’ ιδίαν.",
    "level": "Sätze"
  },
  {
    "de": "Aus Mangel an Zeit.",
    "lv": "Λόγω έλλειψης χρόνου.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Grunde.",
    "lv": "Για τον λόγο αυτό.",
    "level": "Sätze"
  },
  {
    "de": "Alle außer dir.",
    "lv": "Όλοι εκτός από σένα.",
    "level": "Sätze"
  },
  {
    "de": "Auf Äußerlichkeiten Wert legen.",
    "lv": "Δίνω σημασία στην εξωτερική εμφάνιση.",
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
    "lv": "Πώς προφέρεται αυτή η λέξη;",
    "level": "Sätze"
  },
  {
    "de": "Sein Beileid aussprechen.",
    "lv": "Εκφράζω τα συλλυπητήριά μου.",
    "level": "Sätze"
  },
  {
    "de": "Wann wurden die Meisterschaftskämpfe ausgetragen?",
    "lv": "Πότε διεξήχθησαν οι αγώνες του πρωταθλήματος;",
    "level": "Sätze"
  },
  {
    "de": "Welchen Beruf üben Sie aus?",
    "lv": "Τι επάγγελμα ασκείτε;",
    "level": "Sätze"
  },
  {
    "de": "Einfluss ausüben.",
    "lv": "Ασκώ επιρροή.",
    "level": "Sätze"
  },
  {
    "de": "Auswärts essen.",
    "lv": "Τρώω έξω.",
    "level": "Sätze"
  },
  {
    "de": "Per Bahn.",
    "lv": "Σιδηροδρομικώς.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Bahn.",
    "lv": "Με το τρένο.",
    "level": "Sätze"
  },
  {
    "de": "Möglichst bald.",
    "lv": "Το συντομότερο δυνατόν.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist Angst und bange.",
    "lv": "Φοβάμαι πάρα πολύ.",
    "level": "Sätze"
  },
  {
    "de": "Auf die lange Bank schieben.",
    "lv": "Το αναβάλλω συνεχώς. • Το τραβάω σε μάκρος.",
    "level": "Sätze"
  },
  {
    "de": "Bar zahlen.",
    "lv": "Πληρώνω τοις μετρητοίς.",
    "level": "Sätze"
  },
  {
    "de": "Erz bauen.",
    "lv": "Εξορύσσω μετάλλευμα.",
    "level": "Sätze"
  },
  {
    "de": "Mist bauen.",
    "lv": "Τα κάνω θάλασσα.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin beauftragt.",
    "lv": "Έχω εντολή.",
    "level": "Sätze"
  },
  {
    "de": "Nach Bedarf.",
    "lv": "Ανάλογα με τις ανάγκες.",
    "level": "Sätze"
  },
  {
    "de": "Ich bedauere ihn.",
    "lv": "Τον λυπάμαι.",
    "level": "Sätze"
  },
  {
    "de": "Was bedeutet dieses Wort?",
    "lv": "Τι σημαίνει αυτή η λέξη;",
    "level": "Sätze"
  },
  {
    "de": "Unter der Bedingung, dass ...",
    "lv": "Με την προϋπόθεση ότι...",
    "level": "Sätze"
  },
  {
    "de": "Sie sieht bedrückt aus.",
    "lv": "Δείχνει στενοχωρημένη.",
    "level": "Sätze"
  },
  {
    "de": "Hinweise befolgen.",
    "lv": "Ακολουθώ τις οδηγίες.",
    "level": "Sätze"
  },
  {
    "de": "Befehle befolgen.",
    "lv": "Εκτελώ τις διαταγές.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Post befördern.",
    "lv": "Στέλνω ταχυδρομικώς.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin begierig zu wissen.",
    "lv": "Ανυπομονώ να μάθω.",
    "level": "Sätze"
  },
  {
    "de": "Zu Beginn.",
    "lv": "Στην αρχή.",
    "level": "Sätze"
  },
  {
    "de": "Am Beginn.",
    "lv": "Στο ξεκίνημα.",
    "level": "Sätze"
  },
  {
    "de": "Bei Beginn.",
    "lv": "Κατά την έναρξη.",
    "level": "Sätze"
  },
  {
    "de": "In Begleitung.",
    "lv": "Με συνοδεία.",
    "level": "Sätze"
  },
  {
    "de": "Mit seiner Begleitung.",
    "lv": "Με τον συνοδό του.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schwer von Begriff.",
    "lv": "Αργεί να καταλάβει. • Είναι αργόστροφος.",
    "level": "Sätze"
  },
  {
    "de": "Im Gedächtnis behalten.",
    "lv": "Κρατώ στη μνήμη μου.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tisch.",
    "lv": "Στο τραπέζι.",
    "level": "Sätze"
  },
  {
    "de": "Bei Sinnen sein.",
    "lv": "Είμαι στα καλά μου.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tage.",
    "lv": "Την ημέρα.",
    "level": "Sätze"
  },
  {
    "de": "Bei weitem nicht so.",
    "lv": "Ούτε κατά προσέγγιση τόσο.",
    "level": "Sätze"
  },
  {
    "de": "Alle beide.",
    "lv": "Και οι δύο.",
    "level": "Sätze"
  },
  {
    "de": "Stürmischer Beifall brach los.",
    "lv": "Ξέσπασαν θυελλώδη χειροκροτήματα.",
    "level": "Sätze"
  },
  {
    "de": "Beifall finden.",
    "lv": "Βρίσκω απήχηση.",
    "level": "Sätze"
  },
  {
    "de": "Beileid aussprechen.",
    "lv": "Εκφράζω συλλυπητήρια.",
    "level": "Sätze"
  },
  {
    "de": "Auf eigenen Beinen stehen.",
    "lv": "Στέκομαι στα πόδια μου.",
    "level": "Sätze"
  },
  {
    "de": "Zum Beispiel.",
    "lv": "Για παράδειγμα.",
    "level": "Sätze"
  },
  {
    "de": "Beistand leisten.",
    "lv": "Συμπαραστέκομαι.",
    "level": "Sätze"
  },
  {
    "de": "Beitrag leisten.",
    "lv": "Κάνω τη συνεισφορά μου.",
    "level": "Sätze"
  },
  {
    "de": "Jemandes Bekanntschaft machen.",
    "lv": "Κάνω τη γνωριμία κάποιου.",
    "level": "Sätze"
  },
  {
    "de": "Bekanntschaft anknüpfen.",
    "lv": "Πιάνω γνωριμία.",
    "level": "Sätze"
  },
  {
    "de": "Belegte Brötchen.",
    "lv": "Γεμιστά ψωμάκια.",
    "level": "Sätze"
  },
  {
    "de": "Nach Ihrem Belieben.",
    "lv": "Όπως επιθυμείτε.",
    "level": "Sätze"
  },
  {
    "de": "Zu jeder beliebigen Zeit.",
    "lv": "Οποιαδήποτε στιγμή.",
    "level": "Sätze"
  },
  {
    "de": "Schweigen beobachten.",
    "lv": "Τηρώ σιγή.",
    "level": "Sätze"
  },
  {
    "de": "Zur Bequemlichkeit.",
    "lv": "Για λόγους ευκολίας.",
    "level": "Sätze"
  },
  {
    "de": "Bereit sein.",
    "lv": "Είμαι έτοιμος. • Είμαι πρόθυμος.",
    "level": "Sätze"
  },
  {
    "de": "Unfallopfer bergen.",
    "lv": "Διασώζω τα θύματα του ατυχήματος.",
    "level": "Sätze"
  },
  {
    "de": "Bericht erstatten.",
    "lv": "Υποβάλλω αναφορά.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind besetzt.",
    "lv": "Όλες οι θέσεις είναι πιασμένες.",
    "level": "Sätze"
  },
  {
    "de": "Neue Besen kehren gut.",
    "lv": "Η καινούρια σκούπα σκουπίζει καλά.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt ein Haus.",
    "lv": "Του ανήκει ένα σπίτι.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt viel Mut.",
    "lv": "Έχει πολύ θάρρος.",
    "level": "Sätze"
  },
  {
    "de": "Desto besser.",
    "lv": "Τόσο το καλύτερο.",
    "level": "Sätze"
  },
  {
    "de": "Gute Besserung!",
    "lv": "Περαστικά!",
    "level": "Sätze"
  },
  {
    "de": "Beim besten Willen.",
    "lv": "Όσο κι αν θέλω.",
    "level": "Sätze"
  },
  {
    "de": "Am besten.",
    "lv": "Το καλύτερο.",
    "level": "Sätze"
  },
  {
    "de": "Es besteht Zweifel.",
    "lv": "Υπάρχει αμφιβολία.",
    "level": "Sätze"
  },
  {
    "de": "Seine Aufgabe besteht darin ...",
    "lv": "Το καθήκον του είναι να...",
    "level": "Sätze"
  },
  {
    "de": "Grüße bestellen.",
    "lv": "Μεταφέρω χαιρετίσματα.",
    "level": "Sätze"
  },
  {
    "de": "Ganz bestimmt.",
    "lv": "Οπωσδήποτε.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch kommen.",
    "lv": "Έρχομαι για επίσκεψη.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch sein.",
    "lv": "Βρίσκομαι σε επίσκεψη.",
    "level": "Sätze"
  },
  {
    "de": "Oft Konzerte besuchen.",
    "lv": "Πηγαίνω συχνά σε συναυλίες.",
    "level": "Sätze"
  },
  {
    "de": "Welche Schule hat er besucht?",
    "lv": "Σε ποιο σχολείο πήγε;",
    "level": "Sätze"
  },
  {
    "de": "In Betracht ziehen.",
    "lv": "Λαμβάνω υπόψη. • Εξετάζω.",
    "level": "Sätze"
  },
  {
    "de": "Außer Betracht lassen.",
    "lv": "Δεν λαμβάνω υπόψη.",
    "level": "Sätze"
  },
  {
    "de": "Er betreibt ein Hotel.",
    "lv": "Διευθύνει ένα ξενοδοχείο.",
    "level": "Sätze"
  },
  {
    "de": "Alle beiden.",
    "lv": "Και οι δύο.",
    "level": "Sätze"
  },
  {
    "de": "Alles bezahlen.",
    "lv": "Τα πληρώνω όλα.",
    "level": "Sätze"
  },
  {
    "de": "In Bezug auf etwas.",
    "lv": "Σχετικά με κάτι.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön.",
    "lv": "Παρακαλώ. • Ορίστε.",
    "level": "Sätze"
  },
  {
    "de": "Wie bitte?",
    "lv": "Ορίστε;",
    "level": "Sätze"
  },
  {
    "de": "Bitte sehr.",
    "lv": "Παρακαλώ πολύ. • Ορίστε.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe eine Bitte an Sie.",
    "lv": "Έχω να σας ζητήσω μια χάρη.",
    "level": "Sätze"
  },
  {
    "de": "Trompete blasen.",
    "lv": "Παίζω τρομπέτα.",
    "level": "Sätze"
  },
  {
    "de": "In einem Buch blättern.",
    "lv": "Ξεφυλλίζω ένα βιβλίο.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßen Füßen.",
    "lv": "Με γυμνά πόδια.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßem Auge.",
    "lv": "Με γυμνό μάτι.",
    "level": "Sätze"
  },
  {
    "de": "Danke für die Blumen!",
    "lv": "Ευχαριστώ για τα καλά λόγια!",
    "level": "Sätze"
  },
  {
    "de": "Alles in Butter.",
    "lv": "Όλα πάνε ρολόι.",
    "level": "Sätze"
  },
  {
    "de": "Bitte checken.",
    "lv": "Παρακαλώ ελέγξτε.",
    "level": "Sätze"
  },
  {
    "de": "Da ist er!",
    "lv": "Να τος!",
    "level": "Sätze"
  },
  {
    "de": "Alles spricht dafür.",
    "lv": "Όλα δείχνουν προς τα εκεί.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann nichts dafür.",
    "lv": "Δεν φταίω εγώ.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin dagegen.",
    "lv": "Είμαι κατά.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe nichts dagegen.",
    "lv": "Δεν έχω αντίρρηση.",
    "level": "Sätze"
  },
  {
    "de": "Von daheim.",
    "lv": "Από το σπίτι.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Dame ziehen.",
    "lv": "Κινώ τη βασίλισσα.",
    "level": "Sätze"
  },
  {
    "de": "Es dämmert.",
    "lv": "Σουρουπώνει. • Χαράζει.",
    "level": "Sätze"
  },
  {
    "de": "Danke schön!",
    "lv": "Ευχαριστώ πολύ!",
    "level": "Sätze"
  },
  {
    "de": "Dann und wann.",
    "lv": "Πού και πού.",
    "level": "Sätze"
  },
  {
    "de": "Darauf kannst du dich verlassen.",
    "lv": "Μπορείς να βασιστείς σε αυτό.",
    "level": "Sätze"
  },
  {
    "de": "Daraus wird nichts.",
    "lv": "Δεν θα βγει τίποτε από αυτό.",
    "level": "Sätze"
  },
  {
    "de": "So dass ...",
    "lv": "Έτσι ώστε...",
    "level": "Sätze"
  },
  {
    "de": "Für wen halten Sie mich?",
    "lv": "Για ποιον με περνάτε;",
    "level": "Sätze"
  },
  {
    "de": "Hände weg!",
    "lv": "Κάτω τα χέρια!",
    "level": "Sätze"
  },
  {
    "de": "Lass den Kopf nicht hängen!",
    "lv": "Μην απογοητεύεσαι!",
    "level": "Sätze"
  },
  {
    "de": "zu Hause",
    "lv": "στο σπίτι",
    "level": "Sätze"
  },
  {
    "de": "nach Hause gehen",
    "lv": "πηγαίνω σπίτι",
    "level": "Sätze"
  },
  {
    "de": "von Haus aus",
    "lv": "εκ καταγωγής • εκ φύσεως",
    "level": "Sätze"
  },
  {
    "de": "Meinen herzlichsten Glückwunsch!",
    "lv": "Θερμά συγχαρητήρια!",
    "level": "Sätze"
  },
  {
    "de": "Seien Sie so gut!",
    "lv": "Κάντε μου τη χάρη!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie die Güte!",
    "lv": "Έχετε την καλοσύνη!",
    "level": "Sätze"
  },
  {
    "de": "Was hast du?",
    "lv": "Τι έχεις;",
    "level": "Sätze"
  },
  {
    "de": "Gestatten Sie bitte!",
    "lv": "Επιτρέψτε μου, παρακαλώ!",
    "level": "Sätze"
  },
  {
    "de": "Ist es gestattet zu rauchen?",
    "lv": "Επιτρέπεται το κάπνισμα;",
    "level": "Sätze"
  },
  {
    "de": "Ich muss gestehen, dass ...",
    "lv": "Πρέπει να ομολογήσω ότι...",
    "level": "Sätze"
  },
  {
    "de": "gestern früh",
    "lv": "χτες το πρωί",
    "level": "Sätze"
  },
  {
    "de": "gestern Abend",
    "lv": "χτες το βράδυ",
    "level": "Sätze"
  },
  {
    "de": "Es ist mir gleichgültig, ob ...",
    "lv": "Μου είναι αδιάφορο αν...",
    "level": "Sätze"
  },
  {
    "de": "Was ist geschehen?",
    "lv": "Τι συνέβη;",
    "level": "Sätze"
  },
  {
    "de": "Mach keine Geschichten!",
    "lv": "Μην κάνεις φασαρία! • Μην κάνεις ανοησίες!",
    "level": "Sätze"
  },
  {
    "de": "Geschweige denn ...",
    "lv": "Πόσο μάλλον...",
    "level": "Sätze"
  },
  {
    "de": "Gehen Sie geradeaus!",
    "lv": "Πηγαίνετε ευθεία!",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es Ihnen?",
    "lv": "Πώς είστε;",
    "level": "Sätze"
  },
  {
    "de": "Frag ihn gelegentlich, ob ...",
    "lv": "Ρώτα τον κάποια στιγμή αν...",
    "level": "Sätze"
  },
  {
    "de": "morgen früh",
    "lv": "αύριο το πρωί",
    "level": "Sätze"
  },
  {
    "de": "im Frühling",
    "lv": "την άνοιξη",
    "level": "Sätze"
  },
  {
    "de": "Was gibt’s Neues?",
    "lv": "Τι νέα;",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Brief folgt, dass ...",
    "lv": "Από αυτό το γράμμα προκύπτει ότι...",
    "level": "Sätze"
  },
  {
    "de": "Fahre fort!",
    "lv": "Συνέχισε!",
    "level": "Sätze"
  },
  {
    "de": "Er ist kein Freund von ...",
    "lv": "Δεν του αρέσει ιδιαίτερα...",
    "level": "Sätze"
  },
  {
    "de": "Es erwies sich, dass ...",
    "lv": "Αποδείχτηκε ότι...",
    "level": "Sätze"
  },
  {
    "de": "Gedenkst du meiner?",
    "lv": "Με θυμάσαι; • Με σκέφτεσαι;",
    "level": "Sätze"
  },
  {
    "de": "im Winter",
    "lv": "τον χειμώνα",
    "level": "Sätze"
  },
  {
    "de": "Welcher Jahrgang sind Sie?",
    "lv": "Ποια χρονιά γεννηθήκατε;",
    "level": "Sätze"
  },
  {
    "de": "Es jammert mich zu sehen ...",
    "lv": "Με θλίβει να βλέπω...",
    "level": "Sätze"
  },
  {
    "de": "je mehr, desto besser",
    "lv": "όσο περισσότερα, τόσο καλύτερα",
    "level": "Sätze"
  },
  {
    "de": "bis jetzt",
    "lv": "μέχρι τώρα",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich zum Bahnhof?",
    "lv": "Πώς πάω στον σταθμό;",
    "level": "Sätze"
  },
  {
    "de": "Komm her!",
    "lv": "Έλα εδώ!",
    "level": "Sätze"
  },
  {
    "de": "Könnte ich Frau N. sprechen?",
    "lv": "Θα μπορούσα να μιλήσω με την κυρία Ν.;",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das?",
    "lv": "Πόσο κάνει αυτό;",
    "level": "Sätze"
  },
  {
    "de": "Wie lange dauert die Vorstellung?",
    "lv": "Πόσο διαρκεί η παράσταση;",
    "level": "Sätze"
  },
  {
    "de": "Lass das!",
    "lv": "Σταμάτα! • Άφησέ το!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich in Ruhe!",
    "lv": "Άφησέ με ήσυχο!",
    "level": "Sätze"
  },
  {
    "de": "Lassen Sie mich Ihnen helfen!",
    "lv": "Επιτρέψτε μου να σας βοηθήσω!",
    "level": "Sätze"
  },
  {
    "de": "Lasst uns gehen!",
    "lv": "Πάμε!",
    "level": "Sätze"
  },
  {
    "de": "Na, wie läufts?",
    "lv": "Λοιπόν, πώς πάει;",
    "level": "Sätze"
  },
  {
    "de": "Es lebe!",
    "lv": "Ζήτω!",
    "level": "Sätze"
  },
  {
    "de": "Leben Sie wohl!",
    "lv": "Να είστε καλά! • Αντίο!",
    "level": "Sätze"
  },
  {
    "de": "Was ist los?",
    "lv": "Τι συμβαίνει;",
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
    "lv": "Το να μαθαίνεις γερμανικά μπορεί να είναι κουραστικό.",
    "level": "Sätze"
  },
  {
    "de": "Er verlangt eine Erklärung.",
    "lv": "Απαιτεί μια εξήγηση.",
    "level": "Sätze"
  },
  {
    "de": "Der Verkäufer verlangt zu viel Geld.",
    "lv": "Ο πωλητής ζητάει πάρα πολλά χρήματα.",
    "level": "Sätze"
  },
  {
    "de": "Das Gesetz verlangt es so.",
    "lv": "Έτσι ορίζει ο νόμος.",
    "level": "Sätze"
  },
  {
    "de": "Das ist gar nicht so schwer.",
    "lv": "Δεν είναι και τόσο δύσκολο.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe gar kein Geld.",
    "lv": "Δεν έχω καθόλου χρήματα.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gar nichts gesagt.",
    "lv": "Δεν είπε απολύτως τίποτε.",
    "level": "Sätze"
  },
  {
    "de": "Der Hund ist los.",
    "lv": "Ο σκύλος είναι λυμένος.",
    "level": "Sätze"
  },
  {
    "de": "Hier ist viel los.",
    "lv": "Εδώ γίνονται πολλά.",
    "level": "Sätze"
  },
  {
    "de": "Halt die Luft an!",
    "lv": "Σώπα! • Μην υπερβάλλεις!",
    "level": "Sätze"
  },
  {
    "de": "Was machst du?",
    "lv": "Τι κάνεις;",
    "level": "Sätze"
  },
  {
    "de": "Sag mal!",
    "lv": "Πες μου λοιπόν!",
    "level": "Sätze"
  },
  {
    "de": "Was meinen Sie damit?",
    "lv": "Τι εννοείτε με αυτό;",
    "level": "Sätze"
  },
  {
    "de": "Wir gehen mit Ihnen.",
    "lv": "Ερχόμαστε μαζί σας.",
    "level": "Sätze"
  },
  {
    "de": "Ich fahre mit der Eisenbahn.",
    "lv": "Πηγαίνω με το τρένο.",
    "level": "Sätze"
  },
  {
    "de": "am Mittwoch",
    "lv": "την Τετάρτη",
    "level": "Sätze"
  },
  {
    "de": "Es mag sein.",
    "lv": "Μπορεί να είναι έτσι.",
    "level": "Sätze"
  },
  {
    "de": "Ich mag das nicht.",
    "lv": "Δεν μου αρέσει αυτό.",
    "level": "Sätze"
  },
  {
    "de": "am Montag",
    "lv": "τη Δευτέρα",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen!",
    "lv": "Καλημέρα!",
    "level": "Sätze"
  },
  {
    "de": "am Morgen",
    "lv": "το πρωί",
    "level": "Sätze"
  },
  {
    "de": "Gute Nacht!",
    "lv": "Καληνύχτα!",
    "level": "Sätze"
  },
  {
    "de": "Nehmen Sie Platz!",
    "lv": "Καθίστε!",
    "level": "Sätze"
  },
  {
    "de": "Letzte Neuheit!",
    "lv": "Η τελευταία λέξη της μόδας!",
    "level": "Sätze"
  },
  {
    "de": "Nicht wahr?",
    "lv": "Έτσι δεν είναι;",
    "level": "Sätze"
  },
  {
    "de": "Nicht doch!",
    "lv": "Όχι δα! • Μην το κάνεις!",
    "level": "Sätze"
  },
  {
    "de": "Nun endlich!",
    "lv": "Επιτέλους!",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das?",
    "lv": "Σε τι χρησιμεύει αυτό;",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das alles?",
    "lv": "Τι νόημα έχουν όλα αυτά;",
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
    "lv": "Για τι πρόκειται;",
    "level": "Sätze"
  },
  {
    "de": "Davon kann keine Rede sein.",
    "lv": "Ούτε λόγος να γίνεται.",
    "level": "Sätze"
  },
  {
    "de": "Glückliche Reise!",
    "lv": "Καλό ταξίδι!",
    "level": "Sätze"
  },
  {
    "de": "Mir reißt die Geduld.",
    "lv": "Χάνω την υπομονή μου.",
    "level": "Sätze"
  },
  {
    "de": "Man sagt, dass ...",
    "lv": "Λένε ότι...",
    "level": "Sätze"
  },
  {
    "de": "Schon gut!",
    "lv": "Εντάξει!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön!",
    "lv": "Ορίστε! • Παρακαλώ!",
    "level": "Sätze"
  },
  {
    "de": "Was bin ich schuldig?",
    "lv": "Τι σας χρωστώ; • Πόσο πρέπει να πληρώσω;",
    "level": "Sätze"
  },
  {
    "de": "Vor dem Gebrauch schütteln!",
    "lv": "Ανακινήστε πριν από τη χρήση!",
    "level": "Sätze"
  },
  {
    "de": "Sehen Sie mal!",
    "lv": "Για κοιτάξτε!",
    "level": "Sätze"
  },
  {
    "de": "Wie sehr auch ...",
    "lv": "Όσο κι αν...",
    "level": "Sätze"
  },
  {
    "de": "Seit wann?",
    "lv": "Από πότε;",
    "level": "Sätze"
  },
  {
    "de": "Was soll ich tun?",
    "lv": "Τι να κάνω;",
    "level": "Sätze"
  },
  {
    "de": "im Sommer",
    "lv": "το καλοκαίρι",
    "level": "Sätze"
  },
  {
    "de": "Nicht nur ..., sondern auch ...",
    "lv": "Όχι μόνο..., αλλά και...",
    "level": "Sätze"
  },
  {
    "de": "Sonst noch etwas?",
    "lv": "Κάτι άλλο;",
    "level": "Sätze"
  },
  {
    "de": "Spaß beiseite!",
    "lv": "Εκτός αστείου!",
    "level": "Sätze"
  },
  {
    "de": "Wie spät ist es?",
    "lv": "Τι ώρα είναι;",
    "level": "Sätze"
  },
  {
    "de": "Durchfahrt gesperrt!",
    "lv": "Απαγορεύεται η διέλευση!",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie deutsch?",
    "lv": "Μιλάτε γερμανικά;",
    "level": "Sätze"
  },
  {
    "de": "Statt zu ...",
    "lv": "Αντί να...",
    "level": "Sätze"
  },
  {
    "de": "Wie steht’s?",
    "lv": "Πώς πάνε τα πράγματα;",
    "level": "Sätze"
  },
  {
    "de": "Dieser Hut steht ihr gut.",
    "lv": "Αυτό το καπέλο της πάει.",
    "level": "Sätze"
  },
  {
    "de": "Guten Tag!",
    "lv": "Γεια σας!",
    "level": "Sätze"
  },
  {
    "de": "Wo treffen wir uns?",
    "lv": "Πού θα συναντηθούμε;",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie näher!",
    "lv": "Ελάτε πιο κοντά!",
    "level": "Sätze"
  },
  {
    "de": "Ehrlichkeit ist eine Tugend.",
    "lv": "Η τιμιότητα είναι αρετή.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe viel zu tun.",
    "lv": "Έχω πολλά να κάνω.",
    "level": "Sätze"
  },
  {
    "de": "Nicht übel!",
    "lv": "Καθόλου άσχημα!",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt über mir.",
    "lv": "Μένει από πάνω μου.",
    "level": "Sätze"
  },
  {
    "de": "Er ist davon überzeugt.",
    "lv": "Είναι πεπεισμένος γι’ αυτό.",
    "level": "Sätze"
  },
  {
    "de": "So ist es üblich.",
    "lv": "Έτσι συνηθίζεται.",
    "level": "Sätze"
  },
  {
    "de": "Deine Uhr geht nach.",
    "lv": "Το ρολόι σου πάει πίσω.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel Uhr ist es?",
    "lv": "Τι ώρα είναι;",
    "level": "Sätze"
  },
  {
    "de": "Um acht Uhr früh.",
    "lv": "Στις οχτώ το πρωί.",
    "level": "Sätze"
  },
  {
    "de": "umso mehr",
    "lv": "τόσο περισσότερο",
    "level": "Sätze"
  },
  {
    "de": "Rechts um!",
    "lv": "Δεξιά στροφή!",
    "level": "Sätze"
  },
  {
    "de": "Und ob!",
    "lv": "Και βέβαια!",
    "level": "Sätze"
  },
  {
    "de": "und zwar",
    "lv": "και συγκεκριμένα",
    "level": "Sätze"
  },
  {
    "de": "Auf Unkosten von ...",
    "lv": "Με έξοδα του...",
    "level": "Sätze"
  },
  {
    "de": "Er saß unter den Zuschauern.",
    "lv": "Καθόταν ανάμεσα στους θεατές.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ursache!",
    "lv": "Τίποτε!",
    "level": "Sätze"
  },
  {
    "de": "Es geschah, wie verabredet.",
    "lv": "Έγινε όπως είχαμε συμφωνήσει.",
    "level": "Sätze"
  },
  {
    "de": "Rauchen verboten!",
    "lv": "Απαγορεύεται το κάπνισμα!",
    "level": "Sätze"
  },
  {
    "de": "Falsch verbunden!",
    "lv": "Λάθος αριθμός!",
    "level": "Sätze"
  },
  {
    "de": "Eintritt verboten!",
    "lv": "Απαγορεύεται η είσοδος!",
    "level": "Sätze"
  },
  {
    "de": "Verstehen Sie mich?",
    "lv": "Με καταλαβαίνετε;",
    "level": "Sätze"
  },
  {
    "de": "Er versteht nichts davon.",
    "lv": "Δεν καταλαβαίνει τίποτε από αυτά.",
    "level": "Sätze"
  },
  {
    "de": "Seine Ansicht vertreten.",
    "lv": "Υπερασπίζομαι τη γνώμη μου.",
    "level": "Sätze"
  },
  {
    "de": "Streit verursachen.",
    "lv": "Προκαλώ καβγά.",
    "level": "Sätze"
  },
  {
    "de": "Viel besser.",
    "lv": "Πολύ καλύτερα.",
    "level": "Sätze"
  },
  {
    "de": "Zu viel.",
    "lv": "Υπερβολικά πολύ.",
    "level": "Sätze"
  },
  {
    "de": "Vom Hörensagen.",
    "lv": "Εξ ακοής.",
    "level": "Sätze"
  },
  {
    "de": "Von Zeit zu Zeit.",
    "lv": "Από καιρό σε καιρό.",
    "level": "Sätze"
  },
  {
    "de": "Von Beruf.",
    "lv": "Στο επάγγελμα.",
    "level": "Sätze"
  },
  {
    "de": "Er ist Berliner von Geburt.",
    "lv": "Είναι γέννημα θρέμμα Βερολινέζος.",
    "level": "Sätze"
  },
  {
    "de": "Er steht vor dem Fenster.",
    "lv": "Στέκεται μπροστά στο παράθυρο.",
    "level": "Sätze"
  },
  {
    "de": "Vor Sonnenaufgang.",
    "lv": "Πριν από την ανατολή του ηλίου.",
    "level": "Sätze"
  },
  {
    "de": "Vor vierzehn Tagen.",
    "lv": "Πριν από δύο εβδομάδες.",
    "level": "Sätze"
  },
  {
    "de": "Vor Freude.",
    "lv": "Από τη χαρά.",
    "level": "Sätze"
  },
  {
    "de": "Vor allem.",
    "lv": "Κυρίως. • Πρώτα απ’ όλα.",
    "level": "Sätze"
  },
  {
    "de": "Im Voraus.",
    "lv": "Εκ των προτέρων.",
    "level": "Sätze"
  },
  {
    "de": "Unter der Voraussetzung, dass ...",
    "lv": "Με την προϋπόθεση ότι...",
    "level": "Sätze"
  },
  {
    "de": "Unter dem Vorbehalt.",
    "lv": "Με αυτή την επιφύλαξη.",
    "level": "Sätze"
  },
  {
    "de": "Vorhanden sein.",
    "lv": "Είμαι διαθέσιμος. • Υπάρχω.",
    "level": "Sätze"
  },
  {
    "de": "In der vorigen Woche.",
    "lv": "Την προηγούμενη εβδομάδα.",
    "level": "Sätze"
  },
  {
    "de": "Vorkehrungen treffen.",
    "lv": "Παίρνω προληπτικά μέτρα.",
    "level": "Sätze"
  },
  {
    "de": "Sie kommt mir bekannt vor.",
    "lv": "Μου φαίνεται γνωστή.",
    "level": "Sätze"
  },
  {
    "de": "Er hat eine Vorliebe für Literatur.",
    "lv": "Έχει αδυναμία στη λογοτεχνία.",
    "level": "Sätze"
  },
  {
    "de": "Heute Vormittag.",
    "lv": "Σήμερα το πρωί.",
    "level": "Sätze"
  },
  {
    "de": "Von vorn.",
    "lv": "Από μπροστά. • Από την αρχή.",
    "level": "Sätze"
  },
  {
    "de": "Nach vorn.",
    "lv": "Προς τα εμπρός.",
    "level": "Sätze"
  },
  {
    "de": "Von vornherein.",
    "lv": "Εξαρχής.",
    "level": "Sätze"
  },
  {
    "de": "Im Vorteil sein.",
    "lv": "Βρίσκομαι σε πλεονεκτική θέση.",
    "level": "Sätze"
  },
  {
    "de": "Wach sein.",
    "lv": "Είμαι ξύπνιος.",
    "level": "Sätze"
  },
  {
    "de": "Wach werden.",
    "lv": "Ξυπνώ.",
    "level": "Sätze"
  },
  {
    "de": "Auf Wache sein.",
    "lv": "Φυλάω σκοπιά.",
    "level": "Sätze"
  },
  {
    "de": "Während eines Jahres.",
    "lv": "Στη διάρκεια ενός χρόνου.",
    "level": "Sätze"
  },
  {
    "de": "Während des Krieges.",
    "lv": "Κατά τη διάρκεια του πολέμου.",
    "level": "Sätze"
  },
  {
    "de": "Gegen eine Wand reden.",
    "lv": "Μιλώ στον τοίχο.",
    "level": "Sätze"
  },
  {
    "de": "Hier haben die Wände Ohren.",
    "lv": "Εδώ και οι τοίχοι έχουν αυτιά.",
    "level": "Sätze"
  },
  {
    "de": "Bis wann?",
    "lv": "Μέχρι πότε;",
    "level": "Sätze"
  },
  {
    "de": "Es ist warm.",
    "lv": "Κάνει ζέστη.",
    "level": "Sätze"
  },
  {
    "de": "Auf eine Nachricht warten.",
    "lv": "Περιμένω ένα μήνυμα.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie?",
    "lv": "Τι θέλετε;",
    "level": "Sätze"
  },
  {
    "de": "Was für ein ...?",
    "lv": "Τι είδους...;",
    "level": "Sätze"
  },
  {
    "de": "Auf halbem Wege.",
    "lv": "Στα μισά του δρόμου.",
    "level": "Sätze"
  },
  {
    "de": "Auf diesem Wege.",
    "lv": "Με αυτόν τον τρόπο. • Με αυτά τα μέσα.",
    "level": "Sätze"
  },
  {
    "de": "Auf friedlichem Wege.",
    "lv": "Με ειρηνικά μέσα.",
    "level": "Sätze"
  },
  {
    "de": "Unserer Freundschaft wegen.",
    "lv": "Για χάρη της φιλίας μας.",
    "level": "Sätze"
  },
  {
    "de": "Von Rechts wegen.",
    "lv": "Σύμφωνα με τον νόμο. • Κατά δικαιοσύνη.",
    "level": "Sätze"
  },
  {
    "de": "Weh tun.",
    "lv": "Πονάω.",
    "level": "Sätze"
  },
  {
    "de": "Zu Weihnachten.",
    "lv": "Τα Χριστούγεννα.",
    "level": "Sätze"
  },
  {
    "de": "Auf welche Weise?",
    "lv": "Με ποιον τρόπο;",
    "level": "Sätze"
  },
  {
    "de": "Art und Weise.",
    "lv": "Ο τρόπος.",
    "level": "Sätze"
  },
  {
    "de": "Ohne weiteres.",
    "lv": "Χωρίς καθυστέρηση. • Χωρίς δυσκολία.",
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
    "lv": "Τίποτε άλλο.",
    "level": "Sätze"
  },
  {
    "de": "An welchem Tag?",
    "lv": "Ποια μέρα;",
    "level": "Sätze"
  },
  {
    "de": "Alle Welt.",
    "lv": "Όλος ο κόσμος. • Όλοι.",
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
    "lv": "Ποιος είναι εκεί;",
    "level": "Sätze"
  },
  {
    "de": "Gesammelte Werke von Schiller.",
    "lv": "Τα άπαντα του Σίλερ.",
    "level": "Sätze"
  },
  {
    "de": "Ausgewählte Werke.",
    "lv": "Επιλεγμένα έργα.",
    "level": "Sätze"
  },
  {
    "de": "Er ist wert, dass ...",
    "lv": "Αξίζει να...",
    "level": "Sätze"
  },
  {
    "de": "Es ist zwei Euro wert.",
    "lv": "Αξίζει δύο ευρώ.",
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
    "lv": "Μπαίνω σε ανταγωνισμό.",
    "level": "Sätze"
  },
  {
    "de": "Um die Wette laufen.",
    "lv": "Κάνω αγώνα δρόμου.",
    "level": "Sätze"
  },
  {
    "de": "Was gilt die Wette?",
    "lv": "Τι βάζουμε στοίχημα;",
    "level": "Sätze"
  },
  {
    "de": "Wie wird das Wetter?",
    "lv": "Τι καιρό θα κάνει;",
    "level": "Sätze"
  },
  {
    "de": "Wettkampf im Turnen.",
    "lv": "Αγώνας γυμναστικής.",
    "level": "Sätze"
  },
  {
    "de": "Wider meinen Willen.",
    "lv": "Παρά τη θέλησή μου.",
    "level": "Sätze"
  },
  {
    "de": "Widerspruch erheben.",
    "lv": "Διαμαρτύρομαι. • Προβάλλω αντιρρήσεις.",
    "level": "Sätze"
  },
  {
    "de": "Wie alt ist er?",
    "lv": "Πόσων χρονών είναι;",
    "level": "Sätze"
  },
  {
    "de": "Wie lange?",
    "lv": "Πόσο καιρό;",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiederhören!",
    "lv": "Θα τα ξαναπούμε!",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiedersehen!",
    "lv": "Γεια σας!",
    "level": "Sätze"
  },
  {
    "de": "Wilde Tiere.",
    "lv": "Άγρια ζώα.",
    "level": "Sätze"
  },
  {
    "de": "Herzlich willkommen!",
    "lv": "Καλώς ορίσατε!",
    "level": "Sätze"
  },
  {
    "de": "Du musst ziehen.",
    "lv": "Είναι η σειρά σου να παίξεις.",
    "level": "Sätze"
  },
  {
    "de": "Es zieht.",
    "lv": "Κάνει ρεύμα.",
    "level": "Sätze"
  },
  {
    "de": "Ziemlich kalt.",
    "lv": "Αρκετά κρύο.",
    "level": "Sätze"
  },
  {
    "de": "Zipfel einer Wurst.",
    "lv": "Η άκρη ενός λουκάνικου.",
    "level": "Sätze"
  },
  {
    "de": "Zu ihm gehen.",
    "lv": "Πηγαίνω σε αυτόν.",
    "level": "Sätze"
  },
  {
    "de": "Zur Schule gehen.",
    "lv": "Πηγαίνω στο σχολείο.",
    "level": "Sätze"
  },
  {
    "de": "Zu Hause bleiben.",
    "lv": "Μένω στο σπίτι.",
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
    "lv": "Με άλογο.",
    "level": "Sätze"
  },
  {
    "de": "Zu Rad.",
    "lv": "Με ποδήλατο.",
    "level": "Sätze"
  },
  {
    "de": "Es hörte auf zu regnen.",
    "lv": "Σταμάτησε να βρέχει.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe noch viel zu tun.",
    "lv": "Έχω ακόμη πολλά να κάνω.",
    "level": "Sätze"
  },
  {
    "de": "Zu früh.",
    "lv": "Πολύ νωρίς.",
    "level": "Sätze"
  },
  {
    "de": "Zu groß.",
    "lv": "Πολύ μεγάλο.",
    "level": "Sätze"
  },
  {
    "de": "Mit den Achseln zucken.",
    "lv": "Σηκώνω τους ώμους.",
    "level": "Sätze"
  },
  {
    "de": "In einem Zug trinken.",
    "lv": "Πίνω μονορούφι.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde gehen.",
    "lv": "Καταστρέφομαι.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde legen.",
    "lv": "Παίρνω ως βάση.",
    "level": "Sätze"
  },
  {
    "de": "Zum ersten Mal.",
    "lv": "Για πρώτη φορά.",
    "level": "Sätze"
  },
  {
    "de": "Machen Sie bitte die Tür zu!",
    "lv": "Κλείστε την πόρτα, παρακαλώ!",
    "level": "Sätze"
  },
  {
    "de": "Er hat zugenommen.",
    "lv": "Πήρε βάρος.",
    "level": "Sätze"
  },
  {
    "de": "Die Tage nehmen zu.",
    "lv": "Οι μέρες μεγαλώνουν.",
    "level": "Sätze"
  },
  {
    "de": "Zusammenhängen mit etwas.",
    "lv": "Σχετίζομαι με κάτι.",
    "level": "Sätze"
  },
  {
    "de": "Die Tür ist zu.",
    "lv": "Η πόρτα είναι κλειστή.",
    "level": "Sätze"
  },
  {
    "de": "Das hätte ich ihm nicht zugetraut.",
    "lv": "Δεν θα το περίμενα από αυτόν.",
    "level": "Sätze"
  },
  {
    "de": "Freier Zutritt.",
    "lv": "Ελεύθερη είσοδος.",
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
    "lv": "Γίνομαι αποκρουστικός. • Αρχίζω να προκαλώ αποστροφή.",
    "level": "Sätze"
  },
  {
    "de": "Und zwar.",
    "lv": "Και συγκεκριμένα.",
    "level": "Sätze"
  },
  {
    "de": "Es steht außer Zweifel.",
    "lv": "Είναι εκτός αμφιβολίας.",
    "level": "Sätze"
  },
  {
    "de": "Ohne Zweifel.",
    "lv": "Χωρίς αμφιβολία.",
    "level": "Sätze"
  },
  {
    "de": "Zum Zweiten.",
    "lv": "Δεύτερον.",
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
    "lv": "Χαίρομαι που σας γνωρίζω.",
    "level": "Sätze"
  },
  {
    "de": "Wären Sie bitte so nett?",
    "lv": "Θα είχατε την καλοσύνη, παρακαλώ;",
    "level": "Sätze"
  },
  {
    "de": "Ich bin Ihnen sehr dankbar.",
    "lv": "Σας είμαι πολύ ευγνώμων.",
    "level": "Sätze"
  },
  {
    "de": "Setzt euch bitte hin!",
    "lv": "Καθίστε, παρακαλώ!",
    "level": "Sätze"
  },
  {
    "de": "Ben, komm bitte an die Tafel!",
    "lv": "Μπεν, έλα στον πίνακα, σε παρακαλώ!",
    "level": "Sätze"
  },
  {
    "de": "Schlagt bitte die Lehrbücher auf!",
    "lv": "Ανοίξτε τα βιβλία σας, παρακαλώ!",
    "level": "Sätze"
  },
  {
    "de": "Geht bitte in die Sporthalle!",
    "lv": "Πηγαίνετε στο γυμναστήριο, παρακαλώ!",
    "level": "Sätze"
  },
  {
    "de": "Schläfst du noch?",
    "lv": "Κοιμάσαι ακόμη;",
    "level": "Sätze"
  },
  {
    "de": "Schlafen Sie noch?",
    "lv": "Κοιμάστε ακόμη;",
    "level": "Sätze"
  },
  {
    "de": "Er ist fest eingeschlafen.",
    "lv": "Τον πήρε βαθύς ύπνος.",
    "level": "Sätze"
  },
  {
    "de": "Wecke ihn bitte auf, es ist schon spät!",
    "lv": "Ξύπνα τον, σε παρακαλώ, είναι ήδη αργά!",
    "level": "Sätze"
  },
  {
    "de": "Es tut mir sehr leid!",
    "lv": "Λυπάμαι πολύ!",
    "level": "Sätze"
  },
  {
    "de": "Vielen Dank!",
    "lv": "Ευχαριστώ πολύ!",
    "level": "Sätze"
  },
  {
    "de": "Finn, fang bitte an!",
    "lv": "Φιν, ξεκίνα, σε παρακαλώ!",
    "level": "Sätze"
  },
  {
    "de": "Lest bitte mit!",
    "lv": "Παρακολουθείτε το κείμενο, παρακαλώ!",
    "level": "Sätze"
  },
  {
    "de": "Emma, schau bitte nicht aus dem Fenster!",
    "lv": "Έμα, μην κοιτάς έξω από το παράθυρο, σε παρακαλώ!",
    "level": "Sätze"
  },
  {
    "de": "Jonas, bring bitte die Hefte!",
    "lv": "Γιόνα, φέρε τα τετράδια, σε παρακαλώ!",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte zurück an deinen Platz!",
    "lv": "Γύρνα πίσω στη θέση σου, σε παρακαλώ!",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb acht.",
    "lv": "Είναι εφτά και μισή.",
    "level": "Sätze"
  },
  {
    "de": "Wann wachst du gewöhnlich auf?",
    "lv": "Πότε ξυπνάς συνήθως;",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe gleich auf.",
    "lv": "Σηκώνομαι αμέσως.",
    "level": "Sätze"
  },
  {
    "de": "Steh auf, Hanna, es klingelt!",
    "lv": "Σήκω, Χάνα, χτυπάει το ξυπνητήρι! • Σήκω, Χάνα, χτυπάει το κουδούνι!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich noch fünf Minuten schlafen!",
    "lv": "Άσε με να κοιμηθώ άλλα πέντε λεπτά!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss nicht, das Zimmer zu lüften!",
    "lv": "Μην ξεχάσεις να αερίσεις το δωμάτιο!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist das Handtuch?",
    "lv": "Πού είναι η πετσέτα;",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mir die Zähne putzen.",
    "lv": "Θα ήθελα να πλύνω τα δόντια μου.",
    "level": "Sätze"
  },
  {
    "de": "Womit putzt du dir die Zähne?",
    "lv": "Με τι πλένεις τα δόντια σου;",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mich anziehen.",
    "lv": "Θα ήθελα να ντυθώ.",
    "level": "Sätze"
  },
  {
    "de": "Zieh dich bitte schnell an!",
    "lv": "Ντύσου γρήγορα, σε παρακαλώ!",
    "level": "Sätze"
  },
  {
    "de": "Kleide dich wärmer an, draußen ist es kühl.",
    "lv": "Ντύσου πιο ζεστά, έξω κάνει ψύχρα.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, wie geht es dir?",
    "lv": "Καλημέρα, πώς είσαι;",
    "level": "Sätze"
  },
  {
    "de": "Mir geht es gut, danke.",
    "lv": "Είμαι καλά, ευχαριστώ.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es Neues?",
    "lv": "Τι νέα;",
    "level": "Sätze"
  },
  {
    "de": "Was für ein Chaos hier!",
    "lv": "Τι χάος εδώ!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich beim Aufräumen helfen?",
    "lv": "Μπορώ να βοηθήσω στο συγύρισμα;",
    "level": "Sätze"
  },
  {
    "de": "Was trinkst du morgens, Kaffee oder Tee?",
    "lv": "Τι πίνεις το πρωί, καφέ ή τσάι;",
    "level": "Sätze"
  },
  {
    "de": "Gewöhnlich trinke ich morgens eine Tasse Kaffee.",
    "lv": "Συνήθως το πρωί πίνω ένα φλιτζάνι καφέ.",
    "level": "Sätze"
  },
  {
    "de": "Am liebsten trinke ich schwarzen Kaffee.",
    "lv": "Προτιμώ να πίνω μαύρο καφέ.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, hast du gut geschlafen?",
    "lv": "Καλημέρα, κοιμήθηκες καλά;",
    "level": "Sätze"
  },
  {
    "de": "Ich bin noch sehr müde.",
    "lv": "Είμαι ακόμη πολύ κουρασμένος.",
    "level": "Sätze"
  },
  {
    "de": "Willst du Kaffee oder Milch?",
    "lv": "Θέλεις καφέ ή γάλα;",
    "level": "Sätze"
  },
  {
    "de": "Gib mir bitte ein Brötchen mit Käse.",
    "lv": "Δώσε μου, σε παρακαλώ, ένα ψωμάκι με τυρί.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss jetzt los!",
    "lv": "Πρέπει να φύγω τώρα!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss dein Frühstück nicht!",
    "lv": "Μην ξεχάσεις το πρωινό σου!",
    "level": "Sätze"
  },
  {
    "de": "Klara, deck bitte den Tisch!",
    "lv": "Κλάρα, στρώσε το τραπέζι, σε παρακαλώ!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss die Servietten nicht!",
    "lv": "Μην ξεχάσεις τις χαρτοπετσέτες!",
    "level": "Sätze"
  },
  {
    "de": "Wann esst ihr zu Mittag?",
    "lv": "Πότε τρώτε μεσημεριανό;",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit zu essen.",
    "lv": "Είναι ώρα να φάμε.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es heute zu Mittag?",
    "lv": "Τι έχει για μεσημεριανό σήμερα;",
    "level": "Sätze"
  },
  {
    "de": "Wie schmeckt dir die Suppe?",
    "lv": "Πώς σου φαίνεται η σούπα;",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt ist sie etwas zu salzig.",
    "lv": "Για να πω την αλήθεια, είναι λίγο αλμυρή.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dir ein Stück Brot geben?",
    "lv": "Μπορώ να σου δώσω ένα κομμάτι ψωμί;",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich habe schon.",
    "lv": "Ευχαριστώ, έχω ήδη.",
    "level": "Sätze"
  },
  {
    "de": "Das Fleisch schmeckt ausgezeichnet.",
    "lv": "Το κρέας είναι εξαιρετικό.",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich bin schon satt.",
    "lv": "Ευχαριστώ, έχω ήδη χορτάσει.",
    "level": "Sätze"
  },
  {
    "de": "Heute haben wir Besuch.",
    "lv": "Σήμερα έχουμε καλεσμένους.",
    "level": "Sätze"
  },
  {
    "de": "Bist du heute Abend frei?",
    "lv": "Είσαι ελεύθερος απόψε;",
    "level": "Sätze"
  },
  {
    "de": "Komm doch heute zum Mittagessen vorbei!",
    "lv": "Έλα σήμερα για μεσημεριανό!",
    "level": "Sätze"
  },
  {
    "de": "Setzen wir uns an den Tisch.",
    "lv": "Ας καθίσουμε στο τραπέζι.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, bedien dich!",
    "lv": "Σε παρακαλώ, σερβιρίσου!",
    "level": "Sätze"
  },
  {
    "de": "Stört dich das Rauchen?",
    "lv": "Σε ενοχλεί το κάπνισμα;",
    "level": "Sätze"
  },
  {
    "de": "Danke für die nette Aufnahme!",
    "lv": "Ευχαριστώ για τη θερμή υποδοχή!",
    "level": "Sätze"
  },
  {
    "de": "Wann gehst du ins Bett?",
    "lv": "Πότε πας για ύπνο;",
    "level": "Sätze"
  },
  {
    "de": "Wenn ich von der Arbeit komme, bin ich immer müde.",
    "lv": "Όταν γυρίζω από τη δουλειά, είμαι πάντα κουρασμένος.",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, ins Bett zu gehen.",
    "lv": "Είναι ώρα για ύπνο.",
    "level": "Sätze"
  },
  {
    "de": "Es ist schönes Wetter.",
    "lv": "Έχει ωραίο καιρό.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mit mir spazieren gehen?",
    "lv": "Θέλεις να πάμε μια βόλτα μαζί;",
    "level": "Sätze"
  },
  {
    "de": "Sieh mal, es wird gleich regnen.",
    "lv": "Κοίτα, σε λίγο θα βρέξει.",
    "level": "Sätze"
  },
  {
    "de": "Nimm den Regenschirm mit!",
    "lv": "Πάρε μαζί σου την ομπρέλα!",
    "level": "Sätze"
  },
  {
    "de": "Es regnet.",
    "lv": "Βρέχει.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin schon ganz nass.",
    "lv": "Έχω γίνει ήδη μούσκεμα.",
    "level": "Sätze"
  },
  {
    "de": "Glaubst du, dass es den ganzen Tag regnen wird?",
    "lv": "Πιστεύεις ότι θα βρέχει όλη τη μέρα;",
    "level": "Sätze"
  },
  {
    "de": "Es hört auf zu regnen.",
    "lv": "Σταματάει να βρέχει.",
    "level": "Sätze"
  },
  {
    "de": "Die Sonne scheint wieder.",
    "lv": "Ο ήλιος λάμπει ξανά.",
    "level": "Sätze"
  },
  {
    "de": "Es ist sehr warm.",
    "lv": "Κάνει πολλή ζέστη.",
    "level": "Sätze"
  },
  {
    "de": "Es sieht nach Regen aus.",
    "lv": "Φαίνεται ότι θα βρέξει.",
    "level": "Sätze"
  },
  {
    "de": "Wir bekommen gleich ein Gewitter.",
    "lv": "Σε λίγο θα έχουμε καταιγίδα.",
    "level": "Sätze"
  },
  {
    "de": "Das Gewitter zieht vorüber.",
    "lv": "Η καταιγίδα περνάει.",
    "level": "Sätze"
  },
  {
    "de": "Die Wolken verziehen sich.",
    "lv": "Τα σύννεφα διαλύονται.",
    "level": "Sätze"
  },
  {
    "de": "Siehst du den Regenbogen?",
    "lv": "Βλέπεις το ουράνιο τόξο;",
    "level": "Sätze"
  },
  {
    "de": "Der Winter ist da, es hat geschneit.",
    "lv": "Ήρθε ο χειμώνας, χιόνισε.",
    "level": "Sätze"
  },
  {
    "de": "Es schneit.",
    "lv": "Χιονίζει.",
    "level": "Sätze"
  },
  {
    "de": "Wie schön ist es im Wald im Winter!",
    "lv": "Πόσο ωραία είναι στο δάσος τον χειμώνα!",
    "level": "Sätze"
  },
  {
    "de": "Mir ist kalt, ich friere.",
    "lv": "Κρυώνω, ξεπάγιασα.",
    "level": "Sätze"
  },
  {
    "de": "Draußen ist Glatteis, pass auf!",
    "lv": "Έξω έχει πάγο, πρόσεχε!",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir auf die Eisbahn gehen?",
    "lv": "Πάμε στο παγοδρόμιο;",
    "level": "Sätze"
  },
  {
    "de": "Zieh die Jacke an, du kannst dich erkälten.",
    "lv": "Φόρεσε το μπουφάν, μπορεί να κρυώσεις.",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb sieben.",
    "lv": "Είναι έξι και μισή.",
    "level": "Sätze"
  },
  {
    "de": "Meine Uhr geht fünf Minuten vor.",
    "lv": "Το ρολόι μου πάει πέντε λεπτά μπροστά.",
    "level": "Sätze"
  },
  {
    "de": "Weck mich morgen früh um sieben Uhr!",
    "lv": "Ξύπνα με αύριο το πρωί στις εφτά!",
    "level": "Sätze"
  },
  {
    "de": "Was ist heute für ein Datum?",
    "lv": "Τι ημερομηνία έχουμε σήμερα;",
    "level": "Sätze"
  },
  {
    "de": "Heute ist der elfte Juli.",
    "lv": "Σήμερα είναι έντεκα Ιουλίου.",
    "level": "Sätze"
  },
  {
    "de": "Was machst du gewöhnlich am Abend?",
    "lv": "Τι κάνεις συνήθως το βράδυ;",
    "level": "Sätze"
  },
  {
    "de": "Es ist schon lange her, dass wir uns gesehen haben.",
    "lv": "Έχουμε πολύ καιρό να βρεθούμε.",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es dir?",
    "lv": "Πώς είσαι;",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, ich möchte etwas mit dir besprechen.",
    "lv": "Συγγνώμη, θα ήθελα να συζητήσω κάτι μαζί σου.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir spazieren!",
    "lv": "Πάμε βόλτα!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Lust, mit mir in den Park zu gehen?",
    "lv": "Έχεις όρεξη να πάμε μαζί στο πάρκο;",
    "level": "Sätze"
  },
  {
    "de": "Ich komme, um dich zum Spaziergang abzuholen.",
    "lv": "Ήρθα να σε πάρω για περίπατο.",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte etwas langsamer, ich kann dir nicht folgen!",
    "lv": "Περπάτα λίγο πιο αργά, σε παρακαλώ, δεν σε προλαβαίνω!",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zum ersten Mal in dieser Gegend.",
    "lv": "Είναι η πρώτη φορά που έρχομαι σε αυτή την περιοχή.",
    "level": "Sätze"
  },
  {
    "de": "Ruhen wir uns ein wenig aus.",
    "lv": "Ας ξεκουραστούμε λίγο.",
    "level": "Sätze"
  },
  {
    "de": "Jetzt können wir zurückgehen.",
    "lv": "Τώρα μπορούμε να γυρίσουμε πίσω.",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt bin ich ziemlich müde.",
    "lv": "Για να πω την αλήθεια, είμαι αρκετά κουρασμένος.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, wo ist die nächste U-Bahn-Station?",
    "lv": "Συγγνώμη, πού είναι ο πιο κοντινός σταθμός του μετρό;",
    "level": "Sätze"
  },
  {
    "de": "Welcher ist der kürzeste Weg?",
    "lv": "Ποιος είναι ο πιο σύντομος δρόμος;",
    "level": "Sätze"
  },
  {
    "de": "Geh hier die zweite Straße links und dann immer geradeaus.",
    "lv": "Στρίψε εδώ στον δεύτερο δρόμο αριστερά και μετά συνέχισε ευθεία.",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich am schnellsten zum Bahnhof?",
    "lv": "Πώς θα φτάσω πιο γρήγορα στον σταθμό;",
    "level": "Sätze"
  },
  {
    "de": "Ich habe vor, morgen zu verreisen.",
    "lv": "Σκοπεύω να φύγω αύριο για ταξίδι.",
    "level": "Sätze"
  },
  {
    "de": "Wohin willst du fahren?",
    "lv": "Πού θέλεις να πας;",
    "level": "Sätze"
  },
  {
    "de": "Reist du geschäftlich oder privat?",
    "lv": "Ταξιδεύεις για δουλειά ή για προσωπικούς λόγους;",
    "level": "Sätze"
  },
  {
    "de": "Finn fährt bis Berlin mit, dann geht er ans Meer.",
    "lv": "Ο Φιν θα έρθει μαζί μας μέχρι το Βερολίνο και μετά θα πάει στη θάλασσα.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt das Schiff ab?",
    "lv": "Πότε αναχωρεί το πλοίο;",
    "level": "Sätze"
  },
  {
    "de": "In einer halben Stunde.",
    "lv": "Σε μισή ώρα.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich noch eine Kabine bekommen?",
    "lv": "Μπορώ ακόμη να πάρω καμπίνα;",
    "level": "Sätze"
  },
  {
    "de": "Vergiss deinen Pass nicht!",
    "lv": "Μην ξεχάσεις το διαβατήριό σου!",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, den Koffer zu packen.",
    "lv": "Είναι ώρα να φτιάξω τη βαλίτσα.",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt um halb sieben ab.",
    "lv": "Το τρένο αναχωρεί στις έξι και μισή.",
    "level": "Sätze"
  },
  {
    "de": "Hol mir bitte ein Taxi, ich verpasse sonst den Zug!",
    "lv": "Φώναξέ μου ένα ταξί, σε παρακαλώ, αλλιώς θα χάσω το τρένο!",
    "level": "Sätze"
  },
  {
    "de": "Fahr bitte zum Bahnhof!",
    "lv": "Πήγαινέ με στον σταθμό, σε παρακαλώ!",
    "level": "Sätze"
  },
  {
    "de": "Ich muss mich beeilen.",
    "lv": "Πρέπει να βιαστώ.",
    "level": "Sätze"
  },
  {
    "de": "Ist der Schalter schon offen?",
    "lv": "Είναι ήδη ανοιχτό το ταμείο;",
    "level": "Sätze"
  },
  {
    "de": "Eine Fahrkarte nach Köln, bitte.",
    "lv": "Ένα εισιτήριο για την Κολωνία, παρακαλώ.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt der Zug ab?",
    "lv": "Πότε φεύγει το τρένο;",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt gleich ab.",
    "lv": "Το τρένο φεύγει σε λίγο.",
    "level": "Sätze"
  },
  {
    "de": "Muss ich in Koblenz umsteigen?",
    "lv": "Πρέπει να αλλάξω τρένο στο Κόμπλεντς;",
    "level": "Sätze"
  },
  {
    "de": "Ja, dort musst du umsteigen.",
    "lv": "Ναι, εκεί πρέπει να αλλάξεις.",
    "level": "Sätze"
  },
  {
    "de": "Ist dieser Platz frei?",
    "lv": "Είναι ελεύθερη αυτή η θέση;",
    "level": "Sätze"
  },
  {
    "de": "Nein, hier sitzt niemand.",
    "lv": "Όχι, εδώ δεν κάθεται κανείς.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der Bahnsteigkartenautomat?",
    "lv": "Πού είναι το αυτόματο μηχάνημα για εισιτήρια αποβάθρας;",
    "level": "Sätze"
  },
  {
    "de": "Stell mein Handgepäck ins Gepäcknetz.",
    "lv": "Βάλε τη χειραποσκευή μου στο ράφι των αποσκευών.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das Fenster aufmachen?",
    "lv": "Μπορώ να ανοίξω το παράθυρο;",
    "level": "Sätze"
  },
  {
    "de": "Es zieht, schließ bitte das Fenster!",
    "lv": "Κάνει ρεύμα, κλείσε το παράθυρο, σε παρακαλώ!",
    "level": "Sätze"
  },
  {
    "de": "Welche ist die nächste Station?",
    "lv": "Ποιος είναι ο επόμενος σταθμός;",
    "level": "Sätze"
  },
  {
    "de": "Wie lange hält der Zug?",
    "lv": "Πόση ώρα κάνει στάση το τρένο;",
    "level": "Sätze"
  },
  {
    "de": "Wo muss ich umsteigen?",
    "lv": "Πού πρέπει να αλλάξω τρένο;",
    "level": "Sätze"
  },
  {
    "de": "Der Zug hat Verspätung.",
    "lv": "Το τρένο έχει καθυστέρηση.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Wagen ist für Nichtraucher.",
    "lv": "Αυτό το βαγόνι είναι για μη καπνιστές.",
    "level": "Sätze"
  },
  {
    "de": "Wir fahren jetzt über die Grenze.",
    "lv": "Τώρα περνάμε τα σύνορα.",
    "level": "Sätze"
  },
  {
    "de": "Hast du etwas zu verzollen?",
    "lv": "Έχεις κάτι να δηλώσεις στο τελωνείο;",
    "level": "Sätze"
  },
  {
    "de": "Wir sind in Berlin angekommen.",
    "lv": "Φτάσαμε στο Βερολίνο.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir ein gutes Hotel empfehlen?",
    "lv": "Μπορείς να μου προτείνεις ένα καλό ξενοδοχείο;",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie freie Zimmer?",
    "lv": "Έχετε ελεύθερα δωμάτια;",
    "level": "Sätze"
  },
  {
    "de": "Ein Zimmer mit zwei Betten, bitte.",
    "lv": "Ένα δωμάτιο με δύο κρεβάτια, παρακαλώ.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Zimmer pro Nacht?",
    "lv": "Πόσο κοστίζει το δωμάτιο τη βραδιά;",
    "level": "Sätze"
  },
  {
    "de": "Morgen reise ich ab. Weck mich um sieben Uhr!",
    "lv": "Αύριο φεύγω. Ξύπνα με στις εφτά!",
    "level": "Sätze"
  },
  {
    "de": "Die Rechnung, bitte!",
    "lv": "Τον λογαριασμό, παρακαλώ!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Stadtbibliothek?",
    "lv": "Πού είναι η δημοτική βιβλιοθήκη;",
    "level": "Sätze"
  },
  {
    "de": "Wann hat das Museum geöffnet?",
    "lv": "Πότε είναι ανοιχτό το μουσείο;",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir ins Museum gehen?",
    "lv": "Πάμε στο μουσείο;",
    "level": "Sätze"
  },
  {
    "de": "Fahren wir mit dem Bus oder der U-Bahn?",
    "lv": "Θα πάμε με το λεωφορείο ή με το μετρό;",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die nächste Bushaltestelle?",
    "lv": "Πού είναι η πιο κοντινή στάση λεωφορείου;",
    "level": "Sätze"
  },
  {
    "de": "Ich habe großen Hunger.",
    "lv": "Πεινάω πολύ.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir zusammen essen?",
    "lv": "Πάμε να φάμε μαζί;",
    "level": "Sätze"
  },
  {
    "de": "Kellner, die Speisekarte, bitte!",
    "lv": "Σερβιτόρε, τον κατάλογο, παρακαλώ!",
    "level": "Sätze"
  },
  {
    "de": "Ist der Fisch frisch?",
    "lv": "Είναι φρέσκο το ψάρι;",
    "level": "Sätze"
  },
  {
    "de": "Das schmeckt ausgezeichnet!",
    "lv": "Είναι εξαιρετικά νόστιμο!",
    "level": "Sätze"
  },
  {
    "de": "Kellner, zahlen bitte!",
    "lv": "Σερβιτόρε, τον λογαριασμό, παρακαλώ!",
    "level": "Sätze"
  },
  {
    "de": "Ich gehe ins Café einen Kaffee trinken.",
    "lv": "Πάω στην καφετέρια να πιω έναν καφέ.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mitkommen?",
    "lv": "Θέλεις να έρθεις κι εσύ;",
    "level": "Sätze"
  },
  {
    "de": "Eine Tasse Kaffee mit Milch, bitte!",
    "lv": "Ένα φλιτζάνι καφέ με γάλα, παρακαλώ!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneller, ich habe es eilig!",
    "lv": "Πιο γρήγορα, παρακαλώ, βιάζομαι!",
    "level": "Sätze"
  },
  {
    "de": "Lass deinen Kaffee nicht kalt werden!",
    "lv": "Μην αφήσεις τον καφέ σου να κρυώσει!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie etwas Erfrischendes?",
    "lv": "Έχετε κάτι δροσιστικό;",
    "level": "Sätze"
  },
  {
    "de": "Eine Portion Eis, bitte!",
    "lv": "Μια μερίδα παγωτό, παρακαλώ!",
    "level": "Sätze"
  },
  {
    "de": "Heute Morgen habe ich einen Brief bekommen.",
    "lv": "Σήμερα το πρωί έλαβα ένα γράμμα.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss ihm gleich schreiben.",
    "lv": "Πρέπει να του γράψω αμέσως.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der nächste Briefkasten?",
    "lv": "Πού είναι το πιο κοντινό γραμματοκιβώτιο;",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Post?",
    "lv": "Πού είναι το ταχυδρομείο;",
    "level": "Sätze"
  },
  {
    "de": "Erinnere mich morgen daran, zu schreiben!",
    "lv": "Θύμισέ μου αύριο να γράψω!",
    "level": "Sätze"
  },
  {
    "de": "Werfen Sie bitte diesen Brief in den Briefkasten.",
    "lv": "Ρίξτε, παρακαλώ, αυτό το γράμμα στο γραμματοκιβώτιο.",
    "level": "Sätze"
  },
  {
    "de": "Hallo, hier spricht Emma.",
    "lv": "Γεια, η Έμα είμαι.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich dich später anrufen?",
    "lv": "Μπορώ να σου τηλεφωνήσω αργότερα;",
    "level": "Sätze"
  },
  {
    "de": "Muss ich lange warten?",
    "lv": "Πρέπει να περιμένω πολύ;",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneiden Sie mir die Haare.",
    "lv": "Κόψτε μου, παρακαλώ, τα μαλλιά.",
    "level": "Sätze"
  },
  {
    "de": "Hinten bitte nicht zu kurz.",
    "lv": "Πίσω, παρακαλώ, όχι πολύ κοντά.",
    "level": "Sätze"
  },
  {
    "de": "Wann beginnt die Vorstellung?",
    "lv": "Πότε αρχίζει η παράσταση;",
    "level": "Sätze"
  },
  {
    "de": "Es fängt um halb acht an.",
    "lv": "Αρχίζει στις εφτά και μισή.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind ausverkauft.",
    "lv": "Όλες οι θέσεις έχουν εξαντληθεί.",
    "level": "Sätze"
  },
  {
    "de": "Drei Karten, bitte!",
    "lv": "Τρία εισιτήρια, παρακαλώ!",
    "level": "Sätze"
  },
  {
    "de": "Wir lassen die Jacken in der Garderobe.",
    "lv": "Αφήνουμε τα μπουφάν στο βεστιάριο.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schnell, der Vorhang geht gleich auf!",
    "lv": "Γρήγορα, παρακαλώ, η αυλαία ανοίγει σε λίγο!",
    "level": "Sätze"
  },
  {
    "de": "Der Vorhang fällt.",
    "lv": "Η αυλαία πέφτει.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dich zum Tanz bitten?",
    "lv": "Μπορώ να σε καλέσω να χορέψουμε;",
    "level": "Sätze"
  },
  {
    "de": "Wann ist eure Hochzeit?",
    "lv": "Πότε είναι ο γάμος σας;",
    "level": "Sätze"
  },
  {
    "de": "Ich suche eine Wohnung.",
    "lv": "Ψάχνω διαμέρισμα.",
    "level": "Sätze"
  },
  {
    "de": "Ist in diesem Haus eine Wohnung frei?",
    "lv": "Υπάρχει ελεύθερο διαμέρισμα σε αυτή την πολυκατοικία;",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet die Miete?",
    "lv": "Πόσο είναι το ενοίκιο;",
    "level": "Sätze"
  },
  {
    "de": "Die Wohnung hat drei Zimmer und eine Küche.",
    "lv": "Το διαμέρισμα έχει τρία δωμάτια και μια κουζίνα.",
    "level": "Sätze"
  },
  {
    "de": "Heute ziehen wir um.",
    "lv": "Σήμερα μετακομίζουμε.",
    "level": "Sätze"
  },
  {
    "de": "Mia, pack die Sachen bitte in Kisten!",
    "lv": "Μία, βάλε, σε παρακαλώ, τα πράγματα σε κούτες!",
    "level": "Sätze"
  },
  {
    "de": "Hast du alles eingepackt?",
    "lv": "Τα μάζεψες όλα;",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe mit meinem Freund in Kontakt.",
    "lv": "Βρίσκομαι σε επαφή με τον φίλο μου.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir ins Theater?",
    "lv": "Πάμε στο θέατρο;",
    "level": "Sätze"
  },
  {
    "de": "Ist alles eingeladen?",
    "lv": "Φορτώθηκαν όλα;",
    "level": "Sätze"
  },
  {
    "de": "Welch schöne Aussicht!",
    "lv": "Τι ωραία θέα!",
    "level": "Sätze"
  },
  {
    "de": "Nun können wir alles wieder aufräumen.",
    "lv": "Τώρα μπορούμε να τα τακτοποιήσουμε πάλι όλα.",
    "level": "Sätze"
  },
  {
    "de": "Wie viele Zimmer habt ihr?",
    "lv": "Πόσα δωμάτια έχετε;",
    "level": "Sätze"
  },
  {
    "de": "Im Sommer fahre ich ans Meer.",
    "lv": "Το καλοκαίρι πάω στη θάλασσα.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du schwimmen?",
    "lv": "Ξέρεις να κολυμπάς;",
    "level": "Sätze"
  },
  {
    "de": "Schwimm nicht zu weit hinaus!",
    "lv": "Μην κολυμπήσεις πολύ προς τα ανοιχτά!",
    "level": "Sätze"
  },
  {
    "de": "Badest du jeden Tag?",
    "lv": "Κάνεις μπάνιο κάθε μέρα;",
    "level": "Sätze"
  },
  {
    "de": "Bei schönem Wetter gehe ich angeln.",
    "lv": "Όταν κάνει καλό καιρό, πάω για ψάρεμα.",
    "level": "Sätze"
  },
  {
    "de": "Wie sieht er aus?",
    "lv": "Τι εμφάνιση έχει;",
    "level": "Sätze"
  },
  {
    "de": "Er hat sich aber recht verändert.",
    "lv": "Έχει αλλάξει πραγματικά πολύ.",
    "level": "Sätze"
  },
  {
    "de": "Wie ist er als Mensch?",
    "lv": "Τι άνθρωπος είναι;",
    "level": "Sätze"
  },
  {
    "de": "Er ist immer nett und freundlich.",
    "lv": "Είναι πάντα καλός και φιλικός.",
    "level": "Sätze"
  },
  {
    "de": "Ich fühle mich nicht wohl.",
    "lv": "Δεν αισθάνομαι καλά.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe starke Kopfschmerzen.",
    "lv": "Έχω δυνατό πονοκέφαλο.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe mich erkältet.",
    "lv": "Κρυολόγησα.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Schnupfen.",
    "lv": "Έχω συνάχι.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist schwindlig.",
    "lv": "Ζαλίζομαι.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Arzt gehen.",
    "lv": "Πρέπει να πάω στον γιατρό.",
    "level": "Sätze"
  },
  {
    "de": "Leg dich ins Bett!",
    "lv": "Ξάπλωσε στο κρεβάτι!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Fieber?",
    "lv": "Έχεις πυρετό;",
    "level": "Sätze"
  },
  {
    "de": "Gestern hatte ich erhöhte Temperatur.",
    "lv": "Χτες είχα δέκατα.",
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
    "lv": "Ξέρεις ότι ο Φιν είναι άρρωστος;",
    "level": "Sätze"
  },
  {
    "de": "Laut Arzt wird er bald wieder gesund.",
    "lv": "Σύμφωνα με τον γιατρό, σύντομα θα γίνει πάλι καλά.",
    "level": "Sätze"
  },
  {
    "de": "Ich will meine Wohnung neu möblieren.",
    "lv": "Θέλω να επιπλώσω από την αρχή το διαμέρισμά μου.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das auf Raten kaufen?",
    "lv": "Μπορώ να το αγοράσω με δόσεις;",
    "level": "Sätze"
  },
  {
    "de": "Bleib im Bett, bis es dir besser geht!",
    "lv": "Μείνε στο κρεβάτι μέχρι να νιώσεις καλύτερα!",
    "level": "Sätze"
  },
  {
    "de": "Noah hat in zwei Wochen schwimmen gelernt.",
    "lv": "Ο Νόα έμαθε κολύμπι σε δύο εβδομάδες.",
    "level": "Sätze"
  },
  {
    "de": "Sei mit dem Essen noch vorsichtig.",
    "lv": "Πρόσεχε ακόμη τι τρως.",
    "level": "Sätze"
  },
  {
    "de": "Sprichst du Deutsch?",
    "lv": "Μιλάς γερμανικά;",
    "level": "Sätze"
  },
  {
    "de": "Ja, ein bisschen.",
    "lv": "Ναι, λίγο.",
    "level": "Sätze"
  },
  {
    "de": "Du sprichst ziemlich fließend.",
    "lv": "Μιλάς με αρκετή ευχέρεια.",
    "level": "Sätze"
  },
  {
    "de": "Wo hast du Deutsch gelernt?",
    "lv": "Πού έμαθες γερμανικά;",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme seit einem Jahr Deutschstunden.",
    "lv": "Κάνω μαθήματα γερμανικών εδώ και έναν χρόνο.",
    "level": "Sätze"
  },
  {
    "de": "Ich suche immer Gelegenheit, Deutsch zu sprechen.",
    "lv": "Ψάχνω πάντα ευκαιρία να μιλήσω γερμανικά.",
    "level": "Sätze"
  },
  {
    "de": "Ist das Buch noch vorrätig?",
    "lv": "Είναι ακόμη διαθέσιμο το βιβλίο;",
    "level": "Sätze"
  },
  {
    "de": "Das Buch ist leider ausverkauft.",
    "lv": "Το βιβλίο δυστυχώς έχει εξαντληθεί.",
    "level": "Sätze"
  },
  {
    "de": "Wann erscheint die neue Auflage?",
    "lv": "Πότε κυκλοφορεί η νέα έκδοση;",
    "level": "Sätze"
  },
  {
    "de": "Womit kann ich Ihnen helfen?",
    "lv": "Σε τι μπορώ να σας βοηθήσω;",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie ganz frische Eier?",
    "lv": "Έχετε πολύ φρέσκα αυγά;",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die?",
    "lv": "Πόσο κάνουν;",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu teuer.",
    "lv": "Είναι πολύ ακριβό.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir ein halbes Kilo abwiegen?",
    "lv": "Μπορείτε να μου ζυγίσετε μισό κιλό;",
    "level": "Sätze"
  },
  {
    "de": "Wie viel muss ich zahlen?",
    "lv": "Πόσα πρέπει να πληρώσω;",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet das Kilo?",
    "lv": "Πόσο κάνει το κιλό;",
    "level": "Sätze"
  },
  {
    "de": "Wiegen Sie mir bitte zwei Kilo ab.",
    "lv": "Ζυγίστε μου, παρακαλώ, δύο κιλά.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch Karotten?",
    "lv": "Έχετε και καρότα;",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie gutes Rindfleisch?",
    "lv": "Έχετε καλό μοσχαρίσιο κρέας;",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir zwei Kilo Hackfleisch.",
    "lv": "Δώστε μου δύο κιλά κιμά.",
    "level": "Sätze"
  },
  {
    "de": "Ein Laib Brot, bitte, aber nicht zu knusprig.",
    "lv": "Ένα καρβέλι ψωμί, παρακαλώ, αλλά όχι πολύ τραγανό.",
    "level": "Sätze"
  },
  {
    "de": "Das Brot ist frisch gebacken.",
    "lv": "Το ψωμί μόλις ψήθηκε.",
    "level": "Sätze"
  },
  {
    "de": "Was für Obst haben Sie heute?",
    "lv": "Τι φρούτα έχετε σήμερα;",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die Äpfel?",
    "lv": "Πόσο κάνουν τα μήλα;",
    "level": "Sätze"
  },
  {
    "de": "Dann nehme ich zwei Kilo Äpfel.",
    "lv": "Τότε θα πάρω δύο κιλά μήλα.",
    "level": "Sätze"
  },
  {
    "de": "Die Birnen sind sehr teuer.",
    "lv": "Τα αχλάδια είναι πολύ ακριβά.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir alles nach Hause liefern?",
    "lv": "Μπορείτε να μου τα φέρετε όλα στο σπίτι;",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie Reis?",
    "lv": "Έχετε ρύζι;",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir bitte ein Kilo Reis.",
    "lv": "Δώστε μου, παρακαλώ, ένα κιλό ρύζι.",
    "level": "Sätze"
  },
  {
    "de": "Danke, diesmal nicht.",
    "lv": "Ευχαριστώ, αυτή τη φορά όχι.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet dieser Teppich?",
    "lv": "Πόσο κάνει αυτό το χαλί;",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Möbel in meine Wohnung liefern?",
    "lv": "Μπορείτε να φέρετε τα έπιπλα στο διαμέρισμά μου;",
    "level": "Sätze"
  },
  {
    "de": "Bitte an der Kasse zahlen.",
    "lv": "Παρακαλούμε πληρώστε στο ταμείο.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, machen Sie die Rechnung.",
    "lv": "Παρακαλώ, ετοιμάστε μου τον λογαριασμό.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Meter?",
    "lv": "Πόσο κάνει το μέτρο;",
    "level": "Sätze"
  },
  {
    "de": "Dieser Stoff gefällt mir.",
    "lv": "Μου αρέσει αυτό το ύφασμα.",
    "level": "Sätze"
  },
  {
    "de": "Schneiden Sie mir bitte drei Meter ab.",
    "lv": "Κόψτε μου, παρακαλώ, τρία μέτρα.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch andere Muster?",
    "lv": "Έχετε και άλλα σχέδια;",
    "level": "Sätze"
  },
  {
    "de": "Diese Farbe gefällt mir nicht.",
    "lv": "Αυτό το χρώμα δεν μου αρέσει.",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir eine hellere.",
    "lv": "Δώστε μου ένα πιο ανοιχτό.",
    "level": "Sätze"
  },
  {
    "de": "Was kosten diese Socken?",
    "lv": "Πόσο κάνουν αυτές οι κάλτσες;",
    "level": "Sätze"
  },
  {
    "de": "Welche Handschuhe wünschen Sie?",
    "lv": "Τι γάντια θα θέλατε;",
    "level": "Sätze"
  },
  {
    "de": "Die sind mir etwas zu eng.",
    "lv": "Αυτά είναι λίγο στενά για μένα.",
    "level": "Sätze"
  },
  {
    "de": "So, nun passen sie gut.",
    "lv": "Να, τώρα εφαρμόζουν καλά.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir einen guten Schneider empfehlen?",
    "lv": "Μπορείς να μου συστήσεις έναν καλό ράφτη;",
    "level": "Sätze"
  },
  {
    "de": "Ich will einen Anzug bestellen.",
    "lv": "Θέλω να παραγγείλω ένα κοστούμι.",
    "level": "Sätze"
  },
  {
    "de": "Wann wird er fertig sein?",
    "lv": "Πότε θα είναι έτοιμο;",
    "level": "Sätze"
  },
  {
    "de": "Der Anzug sitzt gut.",
    "lv": "Το κοστούμι εφαρμόζει καλά.",
    "level": "Sätze"
  },
  {
    "de": "Die Hose ist zu lang.",
    "lv": "Το παντελόνι είναι πολύ μακρύ.",
    "level": "Sätze"
  },
  {
    "de": "Bitte reinigen und bügeln Sie ihn!",
    "lv": "Παρακαλώ, καθαρίστε το και σιδερώστε το!",
    "level": "Sätze"
  },
  {
    "de": "Wann wird das Kleid fertig sein?",
    "lv": "Πότε θα είναι έτοιμο το φόρεμα;",
    "level": "Sätze"
  },
  {
    "de": "Die Schuhe sind zu eng.",
    "lv": "Τα παπούτσια είναι πολύ στενά.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Schuhe heute reparieren?",
    "lv": "Μπορείτε να επιδιορθώσετε τα παπούτσια σήμερα;",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich die Schuhe abholen?",
    "lv": "Πότε μπορώ να παραλάβω τα παπούτσια;",
    "level": "Sätze"
  },
  {
    "de": "Meine Armbanduhr funktioniert nicht.",
    "lv": "Το ρολόι χειρός μου δεν λειτουργεί.",
    "level": "Sätze"
  },
  {
    "de": "Sie geht fünf Minuten vor.",
    "lv": "Πάει πέντε λεπτά μπροστά.",
    "level": "Sätze"
  },
  {
    "de": "Bist du kurzsichtig oder weitsichtig?",
    "lv": "Έχεις μυωπία ή υπερμετρωπία;",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte eine Brille kaufen.",
    "lv": "Θα ήθελα να αγοράσω γυαλιά.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie meine Brille reparieren?",
    "lv": "Μπορείτε να επιδιορθώσετε τα γυαλιά μου;",
    "level": "Sätze"
  },
  {
    "de": "Das dauert nur eine Viertelstunde.",
    "lv": "Θα κρατήσει μόνο ένα τέταρτο.",
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
    "lv": "Παρακαλώ, τυλίξτε το και στείλτε μού το στο σπίτι.",
    "level": "Sätze"
  },
  {
    "de": "Wir haben feste Preise.",
    "lv": "Έχουμε σταθερές τιμές.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, fotografieren Sie mich.",
    "lv": "Παρακαλώ, φωτογραφίστε με.",
    "level": "Sätze"
  },
  {
    "de": "Setzen Sie sich, schauen Sie gerade in die Kamera und bewegen Sie sich nicht!",
    "lv": "Καθίστε, κοιτάξτε ίσια στην κάμερα και μην κουνιέστε!",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich das Probebild sehen?",
    "lv": "Πότε μπορώ να δω τη δοκιμαστική φωτογραφία;",
    "level": "Sätze"
  },
  {
    "de": "Wann sind die Fotos fertig?",
    "lv": "Πότε θα είναι έτοιμες οι φωτογραφίες;",
    "level": "Sätze"
  },
  {
    "de": "Die Aufnahme ist gelungen.",
    "lv": "Η λήψη πέτυχε.",
    "level": "Sätze"
  },
  {
    "de": "Die Fotos sind gut geworden.",
    "lv": "Οι φωτογραφίες βγήκαν καλές.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie das Foto auch vergrößern?",
    "lv": "Μπορείτε να μεγεθύνετε και τη φωτογραφία;",
    "level": "Sätze"
  },
  {
    "de": "Sind diese Steine echt?",
    "lv": "Είναι αληθινές αυτές οι πέτρες;",
    "level": "Sätze"
  },
  {
    "de": "Ist das echtes Gold?",
    "lv": "Είναι αυτό γνήσιος χρυσός;",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir bitte Trauringe.",
    "lv": "Δείξτε μου, παρακαλώ, βέρες.",
    "level": "Sätze"
  },
  {
    "de": "Der Ring ist mir etwas zu weit.",
    "lv": "Το δαχτυλίδι είναι λίγο φαρδύ για μένα.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann ihn enger machen.",
    "lv": "Μπορώ να το στενέψω.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Ring passt mir.",
    "lv": "Αυτό το δαχτυλίδι μού κάνει.",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir schöne Geschenkideen.",
    "lv": "Δείξτε μου ωραίες ιδέες για δώρα.",
    "level": "Sätze"
  },
  {
    "de": "Wie gefallen dir diese Ohrringe?",
    "lv": "Πώς σου φαίνονται αυτά τα σκουλαρίκια;",
    "level": "Sätze"
  },
  {
    "de": "Diese Brosche ist wirklich schön.",
    "lv": "Αυτή η καρφίτσα είναι πραγματικά ωραία.",
    "level": "Sätze"
  },
  {
    "de": "Der Stein ist ein Saphir.",
    "lv": "Η πέτρα είναι ζαφείρι.",
    "level": "Sätze"
  },
  {
    "de": "Das ist kein echter Stein, das ist Glas.",
    "lv": "Αυτή δεν είναι αληθινή πέτρα, είναι γυαλί.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Armband kann ich Ihnen besonders empfehlen.",
    "lv": "Αυτό το βραχιόλι μπορώ να σας το συστήσω ιδιαίτερα.",
    "level": "Sätze"
  },
  {
    "de": "Es ist besonders schön gearbeitet.",
    "lv": "Είναι ιδιαίτερα καλοδουλεμένο.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist nicht hoch.",
    "lv": "Η τιμή δεν είναι υψηλή.",
    "level": "Sätze"
  },
  {
    "de": "Bekomme ich die Schachtel gratis?",
    "lv": "Το κουτί το παίρνω δωρεάν;",
    "level": "Sätze"
  },
  {
    "de": "Alle Schmuckstücke sind gestempelt.",
    "lv": "Όλα τα κοσμήματα φέρουν σφραγίδα.",
    "level": "Sätze"
  },
  {
    "de": "Falls es meiner Frau nicht gefällt, kann ich es umtauschen?",
    "lv": "Αν δεν αρέσει στη γυναίκα μου, μπορώ να το αλλάξω;",
    "level": "Sätze"
  },
  {
    "de": "Natürlich, jederzeit.",
    "lv": "Φυσικά, οποτεδήποτε.",
    "level": "Sätze"
  }
];

window.SENTENCE_ENTRIES = SENTENCE_ENTRIES;

const VERB_ENTRIES = [
  {
    "infinitiv": {
      "de": "backen",
      "lv": "Να μαγειρέψουν"
    },
    "praesens": {
      "de": "er bäckt",
      "lv": "Μαγειρεύει"
    },
    "imperfektIndikativ": {
      "de": "er buk",
      "lv": "Μαγείρευε"
    },
    "imperfektKonjunktiv": {
      "de": "er büke",
      "lv": "Θα μαγείρευε"
    },
    "partizipVergangenheit": {
      "de": "gebacken",
      "lv": "Ψητό"
    }
  },
  {
    "infinitiv": {
      "de": "befehlen",
      "lv": "Να διατάξει"
    },
    "praesens": {
      "de": "er befiehlt",
      "lv": "Διατάζει"
    },
    "imperfektIndikativ": {
      "de": "er befahl",
      "lv": "Διέταξε"
    },
    "imperfektKonjunktiv": {
      "de": "er beföhle",
      "lv": "Μπορούσε να διαχειριστεί"
    },
    "partizipVergangenheit": {
      "de": "befohlen",
      "lv": "Διέταξε"
    }
  },
  {
    "infinitiv": {
      "de": "beginnen",
      "lv": "Για να ξεκινήσετε"
    },
    "praesens": {
      "de": "er beginnt",
      "lv": "Ξεκινάει"
    },
    "imperfektIndikativ": {
      "de": "er begann",
      "lv": "Άρχισε"
    },
    "imperfektKonjunktiv": {
      "de": "er begönne / er begänne",
      "lv": "Θα ξεκινούσε"
    },
    "partizipVergangenheit": {
      "de": "begonnen",
      "lv": "Ξεκίνησε"
    }
  },
  {
    "infinitiv": {
      "de": "beißen",
      "lv": "Να δαγκώσει"
    },
    "praesens": {
      "de": "er beißt",
      "lv": "Δαγκώνει"
    },
    "imperfektIndikativ": {
      "de": "er biss",
      "lv": "Δάγκωσε"
    },
    "imperfektKonjunktiv": {
      "de": "er bisse",
      "lv": "Θα δάγκωνε"
    },
    "partizipVergangenheit": {
      "de": "gebissen",
      "lv": "Δαγκωμένος / μη δαγκωμένος"
    }
  },
  {
    "infinitiv": {
      "de": "bergen",
      "lv": "Απόκρυψη / αποθήκευση"
    },
    "praesens": {
      "de": "er birgt",
      "lv": "Κρύβεται"
    },
    "imperfektIndikativ": {
      "de": "er barg",
      "lv": "Κρύφτηκε"
    },
    "imperfektKonjunktiv": {
      "de": "er bürge / er bärge",
      "lv": "Θα κρυβόταν"
    },
    "partizipVergangenheit": {
      "de": "geborgen",
      "lv": "Κρυφό / αποθηκευμένο"
    }
  },
  {
    "infinitiv": {
      "de": "bersten",
      "lv": "Να εκραγεί"
    },
    "praesens": {
      "de": "er birst",
      "lv": "Εκρήγνυται"
    },
    "imperfektIndikativ": {
      "de": "er barst / er borst",
      "lv": "Ξέσπασε"
    },
    "imperfektKonjunktiv": {
      "de": "er bärste / er börste",
      "lv": "Θα έσκαγε"
    },
    "partizipVergangenheit": {
      "de": "geborsten (er ist)",
      "lv": "Εξερράγη"
    }
  },
  {
    "infinitiv": {
      "de": "bewegen",
      "lv": "Να οδηγείτε"
    },
    "praesens": {
      "de": "er bewegt",
      "lv": "Προτρέπει"
    },
    "imperfektIndikativ": {
      "de": "er bewog",
      "lv": "Προέτρεψε"
    },
    "imperfektKonjunktiv": {
      "de": "er bewöge",
      "lv": "Θα οδηγούσε"
    },
    "partizipVergangenheit": {
      "de": "bewogen",
      "lv": "Οδηγείται από"
    }
  },
  {
    "infinitiv": {
      "de": "biegen",
      "lv": "Να λυγίσει"
    },
    "praesens": {
      "de": "er biegt",
      "lv": "Λυγίζει"
    },
    "imperfektIndikativ": {
      "de": "er bog",
      "lv": "Λύγισε"
    },
    "imperfektKonjunktiv": {
      "de": "er böge",
      "lv": "Θα λύγιζε"
    },
    "partizipVergangenheit": {
      "de": "gebogen",
      "lv": "Κλίση"
    }
  },
  {
    "infinitiv": {
      "de": "bieten",
      "lv": "Να προσφέρει"
    },
    "praesens": {
      "de": "er bietet",
      "lv": "Προσφέρει"
    },
    "imperfektIndikativ": {
      "de": "er bot",
      "lv": "Προσέφερε"
    },
    "imperfektKonjunktiv": {
      "de": "er böte",
      "lv": "Θα πρόσφερε"
    },
    "partizipVergangenheit": {
      "de": "geboten",
      "lv": "Προτεινόμενος / προτεινόμενος"
    }
  },
  {
    "infinitiv": {
      "de": "binden",
      "lv": "Δένω"
    },
    "praesens": {
      "de": "er bindet",
      "lv": "Δεσμεύει"
    },
    "imperfektIndikativ": {
      "de": "er band",
      "lv": "Έδεσε"
    },
    "imperfektKonjunktiv": {
      "de": "er bände",
      "lv": "Θα έδενε"
    },
    "partizipVergangenheit": {
      "de": "gebunden",
      "lv": "Συγγενεύων"
    }
  },
  {
    "infinitiv": {
      "de": "bitten",
      "lv": "Να ρωτήσω"
    },
    "praesens": {
      "de": "er bittet",
      "lv": "Παρακαλεί"
    },
    "imperfektIndikativ": {
      "de": "er bat",
      "lv": "Ρώτησε"
    },
    "imperfektKonjunktiv": {
      "de": "er bäte",
      "lv": "Θα παρακαλούσε"
    },
    "partizipVergangenheit": {
      "de": "gebeten",
      "lv": "Ζήτησε"
    }
  },
  {
    "infinitiv": {
      "de": "blasen",
      "lv": "Να φυσήξει"
    },
    "praesens": {
      "de": "er bläst",
      "lv": "Φυσάει"
    },
    "imperfektIndikativ": {
      "de": "er blies",
      "lv": "Φύσηξε"
    },
    "imperfektKonjunktiv": {
      "de": "er bliese",
      "lv": "Θα φυσούσε"
    },
    "partizipVergangenheit": {
      "de": "geblasen",
      "lv": "Ανοιγμένος"
    }
  },
  {
    "infinitiv": {
      "de": "gären",
      "lv": "Να ζυμώσει"
    },
    "praesens": {
      "de": "es gärt",
      "lv": "Ζυμώνει"
    },
    "imperfektIndikativ": {
      "de": "es gor / es gärte",
      "lv": "Έβρασε"
    },
    "imperfektKonjunktiv": {
      "de": "es göre / es gärte",
      "lv": "Θα ζυμωνόταν"
    },
    "partizipVergangenheit": {
      "de": "gegoren / gegärt",
      "lv": "Ζυμωμένο"
    }
  },
  {
    "infinitiv": {
      "de": "gebären",
      "lv": "Να γεννήσει"
    },
    "praesens": {
      "de": "sie gebiert",
      "lv": "Γεννάει"
    },
    "imperfektIndikativ": {
      "de": "sie gebar",
      "lv": "Γέννησε"
    },
    "imperfektKonjunktiv": {
      "de": "sie gebäre",
      "lv": "Θα γεννούσε"
    },
    "partizipVergangenheit": {
      "de": "geboren",
      "lv": "Γεννημένος / γεννημένος"
    }
  },
  {
    "infinitiv": {
      "de": "gelingen",
      "lv": "Να πετύχει"
    },
    "praesens": {
      "de": "es gelingt",
      "lv": "Θα πετύχει"
    },
    "imperfektIndikativ": {
      "de": "es gelang",
      "lv": "Πέτυχε"
    },
    "imperfektKonjunktiv": {
      "de": "es gelänge",
      "lv": "Θα λειτουργούσε"
    },
    "partizipVergangenheit": {
      "de": "gelungen (es ist)",
      "lv": "Πέτυχε"
    }
  },
  {
    "infinitiv": {
      "de": "gelten",
      "lv": "Εφαρμόζω"
    },
    "praesens": {
      "de": "er gilt",
      "lv": "Είναι έγκυρος"
    },
    "imperfektIndikativ": {
      "de": "er galt",
      "lv": "Ήταν έγκυρος"
    },
    "imperfektKonjunktiv": {
      "de": "er gölte / es gälte",
      "lv": "Θα εφάρμοζε / θα ίσχυε"
    },
    "partizipVergangenheit": {
      "de": "gegolten",
      "lv": "Εφαρμοσμένος"
    }
  },
  {
    "infinitiv": {
      "de": "genesen",
      "lv": "Να θεραπεύσει"
    },
    "praesens": {
      "de": "er genest",
      "lv": "Γίνεται καλύτερος"
    },
    "imperfektIndikativ": {
      "de": "er genas",
      "lv": "Συνήλθε"
    },
    "imperfektKonjunktiv": {
      "de": "er genäse",
      "lv": "Θα γινόταν καλύτερος"
    },
    "partizipVergangenheit": {
      "de": "genesen (er ist)",
      "lv": "Βελτιωμένη"
    }
  },
  {
    "infinitiv": {
      "de": "genießen",
      "lv": "Για να απολαύσετε"
    },
    "praesens": {
      "de": "er genießt",
      "lv": "Απολαμβάνει"
    },
    "imperfektIndikativ": {
      "de": "er genoss",
      "lv": "Απολάμβανε"
    },
    "imperfektKonjunktiv": {
      "de": "er genösse",
      "lv": "Θα απολάμβανε"
    },
    "partizipVergangenheit": {
      "de": "genossen",
      "lv": "Απόλαυσε"
    }
  },
  {
    "infinitiv": {
      "de": "geschehen",
      "lv": "Συμβαίνω"
    },
    "praesens": {
      "de": "es geschieht",
      "lv": "Συμβαίνει"
    },
    "imperfektIndikativ": {
      "de": "es geschah",
      "lv": "Συνέβη"
    },
    "imperfektKonjunktiv": {
      "de": "es geschähe",
      "lv": "Θα συνέβαινε"
    },
    "partizipVergangenheit": {
      "de": "geschehen (es ist)",
      "lv": "Συνέβη"
    }
  },
  {
    "infinitiv": {
      "de": "gießen",
      "lv": "Να χύνει"
    },
    "praesens": {
      "de": "er gießt",
      "lv": "Χύνει"
    },
    "imperfektIndikativ": {
      "de": "er goss",
      "lv": "Έχυσε"
    },
    "imperfektKonjunktiv": {
      "de": "er gösse",
      "lv": "Θα έριχνε"
    },
    "partizipVergangenheit": {
      "de": "gegossen",
      "lv": "Εκμαγείο"
    }
  },
  {
    "infinitiv": {
      "de": "gleichen",
      "lv": "Μοιάζω"
    },
    "praesens": {
      "de": "er gleicht",
      "lv": "Μοιάζει"
    },
    "imperfektIndikativ": {
      "de": "er glich",
      "lv": "Έμοιαζε"
    },
    "imperfektKonjunktiv": {
      "de": "er gliche",
      "lv": "Θα έμοιαζε"
    },
    "partizipVergangenheit": {
      "de": "geglichen",
      "lv": "Έμοιαζε"
    }
  },
  {
    "infinitiv": {
      "de": "gleiten",
      "lv": "Να γλιστρήσει"
    },
    "praesens": {
      "de": "er gleitet",
      "lv": "Γλιστράει"
    },
    "imperfektIndikativ": {
      "de": "er glitt",
      "lv": "Γλίστρησε"
    },
    "imperfektKonjunktiv": {
      "de": "er glitte",
      "lv": "Θα γλιστρούσε"
    },
    "partizipVergangenheit": {
      "de": "geglitten (er ist)",
      "lv": "Γλίστρησε"
    }
  },
  {
    "infinitiv": {
      "de": "glimmen",
      "lv": "Να λάμπει"
    },
    "praesens": {
      "de": "er glimmt",
      "lv": "Αυτή λάμπει"
    },
    "imperfektIndikativ": {
      "de": "er glimmte / glomm",
      "lv": "Έλαμπε εκείνη"
    },
    "imperfektKonjunktiv": {
      "de": "er glimmte",
      "lv": "Θα έλαμπε"
    },
    "partizipVergangenheit": {
      "de": "geglimmt / geglommen",
      "lv": "Λαμπερός"
    }
  },
  {
    "infinitiv": {
      "de": "graben",
      "lv": "Να σκάψει"
    },
    "praesens": {
      "de": "er gräbt",
      "lv": "Σκάβει"
    },
    "imperfektIndikativ": {
      "de": "er grub",
      "lv": "Έσκαψε"
    },
    "imperfektKonjunktiv": {
      "de": "er grübe",
      "lv": "Θα έσκαβε"
    },
    "partizipVergangenheit": {
      "de": "gegraben",
      "lv": "Έσκαψε"
    }
  },
  {
    "infinitiv": {
      "de": "greifen",
      "lv": "Αραπάζω"
    },
    "praesens": {
      "de": "er greift",
      "lv": "Αρπάζει"
    },
    "imperfektIndikativ": {
      "de": "er griff",
      "lv": "Άρπαξε"
    },
    "imperfektKonjunktiv": {
      "de": "er griffe",
      "lv": "Θα άρπαζε"
    },
    "partizipVergangenheit": {
      "de": "gegriffen",
      "lv": "Άρπαξε / άρπαξε"
    }
  },
  {
    "infinitiv": {
      "de": "hauen",
      "lv": "Να χαράξει"
    },
    "praesens": {
      "de": "er haut",
      "lv": "Κόβει"
    },
    "imperfektIndikativ": {
      "de": "er hieb",
      "lv": "Έκοψε"
    },
    "imperfektKonjunktiv": {
      "de": "er hiebe",
      "lv": "Θα έκοβε"
    },
    "partizipVergangenheit": {
      "de": "gehauen",
      "lv": "Σκαλισμένα"
    }
  },
  {
    "infinitiv": {
      "de": "heben",
      "lv": "Αύξηση"
    },
    "praesens": {
      "de": "er hebt",
      "lv": "Σηκώνει"
    },
    "imperfektIndikativ": {
      "de": "er hob",
      "lv": "Σήκωσε"
    },
    "imperfektKonjunktiv": {
      "de": "er höbe",
      "lv": "Θα σήκωνε"
    },
    "partizipVergangenheit": {
      "de": "gehoben",
      "lv": "Ανυψώθηκε"
    }
  },
  {
    "infinitiv": {
      "de": "kennen",
      "lv": "Νιώθω / γνωρίζω"
    },
    "praesens": {
      "de": "er kennt",
      "lv": "Αισθάνεται"
    },
    "imperfektIndikativ": {
      "de": "kannte",
      "lv": "Ένιωθε"
    },
    "imperfektKonjunktiv": {
      "de": "kannte",
      "lv": "Ένιωθε"
    },
    "partizipVergangenheit": {
      "de": "gekannt",
      "lv": "Τσόχα"
    }
  },
  {
    "infinitiv": {
      "de": "klingen",
      "lv": "Να ακούγεται"
    },
    "praesens": {
      "de": "er klingt",
      "lv": "Ακούγεται"
    },
    "imperfektIndikativ": {
      "de": "er klang",
      "lv": "Ακούστηκε"
    },
    "imperfektKonjunktiv": {
      "de": "er klänge",
      "lv": "Θα ακουγόταν"
    },
    "partizipVergangenheit": {
      "de": "geklungen",
      "lv": "Ακούστηκε"
    }
  },
  {
    "infinitiv": {
      "de": "kneifen",
      "lv": "Να τσιμπήσει"
    },
    "praesens": {
      "de": "er kneift",
      "lv": "Τσιμπάει"
    },
    "imperfektIndikativ": {
      "de": "er kniff",
      "lv": "Τσίμπησε"
    },
    "imperfektKonjunktiv": {
      "de": "er kniffe",
      "lv": "Θα τσιμπούσε"
    },
    "partizipVergangenheit": {
      "de": "gekniffen",
      "lv": "Τροποποιημένο"
    }
  },
  {
    "infinitiv": {
      "de": "bleiben",
      "lv": "Να μείνεις"
    },
    "praesens": {
      "de": "er bleibt",
      "lv": "Μένει"
    },
    "imperfektIndikativ": {
      "de": "er blieb",
      "lv": "Έμεινε"
    },
    "imperfektKonjunktiv": {
      "de": "er bliebe",
      "lv": "Θα έμενε"
    },
    "partizipVergangenheit": {
      "de": "geblieben (er ist)",
      "lv": "Αριστερά"
    }
  },
  {
    "infinitiv": {
      "de": "bleichen",
      "lv": "Να χλωρίνη"
    },
    "praesens": {
      "de": "er bleicht",
      "lv": "Λευκαίνει"
    },
    "imperfektIndikativ": {
      "de": "blich",
      "lv": "Άσπρισε"
    },
    "imperfektKonjunktiv": {
      "de": "blich",
      "lv": "Άσπρισε"
    },
    "partizipVergangenheit": {
      "de": "geblichen",
      "lv": "Ξεθωριασμένος"
    }
  },
  {
    "infinitiv": {
      "de": "braten",
      "lv": "Να μαγειρέψουν"
    },
    "praesens": {
      "de": "er brät",
      "lv": "Μαγειρεύει"
    },
    "imperfektIndikativ": {
      "de": "er briet",
      "lv": "Μαγείρευε"
    },
    "imperfektKonjunktiv": {
      "de": "er briete",
      "lv": "Θα μαγείρευε"
    },
    "partizipVergangenheit": {
      "de": "gebraten",
      "lv": "Ψητό"
    }
  },
  {
    "infinitiv": {
      "de": "brechen",
      "lv": "Να σπάσει"
    },
    "praesens": {
      "de": "er bricht",
      "lv": "Σπάει"
    },
    "imperfektIndikativ": {
      "de": "er brach",
      "lv": "Έσπασε"
    },
    "imperfektKonjunktiv": {
      "de": "er bräche",
      "lv": "Θα έσπαγε"
    },
    "partizipVergangenheit": {
      "de": "gebrochen",
      "lv": "Σπασμένο / σπασμένο σπασμένο"
    }
  },
  {
    "infinitiv": {
      "de": "brennen",
      "lv": "Να καεί"
    },
    "praesens": {
      "de": "er brennt",
      "lv": "Φλέγεται"
    },
    "imperfektIndikativ": {
      "de": "brannte",
      "lv": "Φλεγόταν"
    },
    "imperfektKonjunktiv": {
      "de": "brannte",
      "lv": "Φλεγόταν"
    },
    "partizipVergangenheit": {
      "de": "gebrannt",
      "lv": "Κάηκε"
    }
  },
  {
    "infinitiv": {
      "de": "bringen",
      "lv": "Να φέρει"
    },
    "praesens": {
      "de": "er bringt",
      "lv": "Φέρνει"
    },
    "imperfektIndikativ": {
      "de": "er brachte",
      "lv": "Έφερε"
    },
    "imperfektKonjunktiv": {
      "de": "er brächte",
      "lv": "Θα έφερνε"
    },
    "partizipVergangenheit": {
      "de": "gebracht",
      "lv": "Έφερε / παραδόθηκε"
    }
  },
  {
    "infinitiv": {
      "de": "denken",
      "lv": "Να σκεφτεί"
    },
    "praesens": {
      "de": "er denkt",
      "lv": "Σκέφτεται"
    },
    "imperfektIndikativ": {
      "de": "er dachte",
      "lv": "Σκέφτηκε"
    },
    "imperfektKonjunktiv": {
      "de": "er dächte",
      "lv": "Θα σκεφτόταν"
    },
    "partizipVergangenheit": {
      "de": "gedacht",
      "lv": "Προορίζονται"
    }
  },
  {
    "infinitiv": {
      "de": "dingen",
      "lv": "Προσλαμβάνω / κανονίζω"
    },
    "praesens": {
      "de": "er dingt",
      "lv": "Προσλαμβάνει"
    },
    "imperfektIndikativ": {
      "de": "dingte",
      "lv": "Προσέλαβε"
    },
    "imperfektKonjunktiv": {
      "de": "dingte",
      "lv": "Προσέλαβε"
    },
    "partizipVergangenheit": {
      "de": "gedungen",
      "lv": "Μισθωτός"
    }
  },
  {
    "infinitiv": {
      "de": "dreschen",
      "lv": "Να νικήσει"
    },
    "praesens": {
      "de": "er drischt",
      "lv": "Χτυπάει"
    },
    "imperfektIndikativ": {
      "de": "er drasch / er drosch",
      "lv": "Χτύπησε"
    },
    "imperfektKonjunktiv": {
      "de": "er dräsche / er drösche",
      "lv": "Θα χτυπούσε"
    },
    "partizipVergangenheit": {
      "de": "gedroschen",
      "lv": "Χτυπημένος"
    }
  },
  {
    "infinitiv": {
      "de": "dringen",
      "lv": "Να διεισδύσει"
    },
    "praesens": {
      "de": "er dringt",
      "lv": "Διεισδύει"
    },
    "imperfektIndikativ": {
      "de": "er drang",
      "lv": "Επέμεινε"
    },
    "imperfektKonjunktiv": {
      "de": "er dränge",
      "lv": "Θα διείσδυε"
    },
    "partizipVergangenheit": {
      "de": "gedrungen (er ist)",
      "lv": "Διείσδυσε"
    }
  },
  {
    "infinitiv": {
      "de": "dünken",
      "lv": "Φαίνομαι"
    },
    "praesens": {
      "de": "es dünkt",
      "lv": "Φαίνεται"
    },
    "imperfektIndikativ": {
      "de": "deuchte",
      "lv": "Φαινόταν"
    },
    "imperfektKonjunktiv": {
      "de": "deuchte",
      "lv": "Φαινόταν"
    },
    "partizipVergangenheit": {
      "de": "gedünkt",
      "lv": "Φαινόταν"
    }
  },
  {
    "infinitiv": {
      "de": "dürfen",
      "lv": "Να επιτρέπεται"
    },
    "praesens": {
      "de": "er darf",
      "lv": "Μπορεί"
    },
    "imperfektIndikativ": {
      "de": "durfte",
      "lv": "Του επετράπη"
    },
    "imperfektKonjunktiv": {
      "de": "durfte",
      "lv": "Του επετράπη"
    },
    "partizipVergangenheit": {
      "de": "gedurft",
      "lv": "Θα έπρεπε να έχει"
    }
  },
  {
    "infinitiv": {
      "de": "empfehlen",
      "lv": "Συνιστώ"
    },
    "praesens": {
      "de": "er empfiehlt",
      "lv": "Προτείνει"
    },
    "imperfektIndikativ": {
      "de": "er empfahl",
      "lv": "Πρότεινε"
    },
    "imperfektKonjunktiv": {
      "de": "er empfähle / er empföhle",
      "lv": "Θα συνιστούσε"
    },
    "partizipVergangenheit": {
      "de": "empfohlen",
      "lv": "Συνιστάται"
    }
  },
  {
    "infinitiv": {
      "de": "empfinden",
      "lv": "Να νιώθεις"
    },
    "praesens": {
      "de": "er empfindet",
      "lv": "Αισθάνεται"
    },
    "imperfektIndikativ": {
      "de": "er empfand",
      "lv": "Ένιωθε"
    },
    "imperfektKonjunktiv": {
      "de": "er empfände",
      "lv": "Θα ήξερε"
    },
    "partizipVergangenheit": {
      "de": "empfunden",
      "lv": "Γνωστός"
    }
  },
  {
    "infinitiv": {
      "de": "erlöschen",
      "lv": "Να σβήσει"
    },
    "praesens": {
      "de": "er erlischt",
      "lv": "Σβήνει"
    },
    "imperfektIndikativ": {
      "de": "er erlosch",
      "lv": "Βγήκε έξω"
    },
    "imperfektKonjunktiv": {
      "de": "er erlösche",
      "lv": "Θα εξαφανιζόταν"
    },
    "partizipVergangenheit": {
      "de": "erloschen (er ist)",
      "lv": "Σβηστός"
    }
  },
  {
    "infinitiv": {
      "de": "erschrecken",
      "lv": "Τρομάξτε"
    },
    "praesens": {
      "de": "er erschrickt",
      "lv": "Φοβάται"
    },
    "imperfektIndikativ": {
      "de": "er erschrak",
      "lv": "Τρόμαξε"
    },
    "imperfektKonjunktiv": {
      "de": "er erschräke",
      "lv": "Θα φοβόταν"
    },
    "partizipVergangenheit": {
      "de": "erschrocken (er ist)",
      "lv": "Έντρομος"
    }
  },
  {
    "infinitiv": {
      "de": "essen",
      "lv": "Να φάει"
    },
    "praesens": {
      "de": "er isst",
      "lv": "Τρώει"
    },
    "imperfektIndikativ": {
      "de": "er ass",
      "lv": "Έφαγε"
    },
    "imperfektKonjunktiv": {
      "de": "er äße",
      "lv": "Θα έτρωγε"
    },
    "partizipVergangenheit": {
      "de": "gegessen",
      "lv": "Φαγωμένος / δεν τρώγεται"
    }
  },
  {
    "infinitiv": {
      "de": "fahren",
      "lv": "Να οδηγείτε"
    },
    "praesens": {
      "de": "er fährt",
      "lv": "Οδηγεί"
    },
    "imperfektIndikativ": {
      "de": "er fuhr",
      "lv": "Οδηγούσε"
    },
    "imperfektKonjunktiv": {
      "de": "er führe",
      "lv": "Θα οδηγούσε"
    },
    "partizipVergangenheit": {
      "de": "gefahren (er ist)",
      "lv": "Έδιωξε / έδιωξε"
    }
  },
  {
    "infinitiv": {
      "de": "fallen",
      "lv": "Να πέσει"
    },
    "praesens": {
      "de": "er fällt",
      "lv": "Πέφτει"
    },
    "imperfektIndikativ": {
      "de": "er fiel",
      "lv": "Έπεσε"
    },
    "imperfektKonjunktiv": {
      "de": "er fiele",
      "lv": "Θα έπεφτε"
    },
    "partizipVergangenheit": {
      "de": "gefallen (er ist)",
      "lv": "Πεσμένος"
    }
  },
  {
    "infinitiv": {
      "de": "fangen",
      "lv": "Να πιάσει"
    },
    "praesens": {
      "de": "er fängt",
      "lv": "Προσπαθεί"
    },
    "imperfektIndikativ": {
      "de": "er fing",
      "lv": "Προσπάθησε"
    },
    "imperfektKonjunktiv": {
      "de": "er finge",
      "lv": "Θα προσπαθούσε"
    },
    "partizipVergangenheit": {
      "de": "gefangen",
      "lv": "Έπιασε / έπιασε"
    }
  },
  {
    "infinitiv": {
      "de": "finden",
      "lv": "Να βρεις"
    },
    "praesens": {
      "de": "er findet",
      "lv": "Βρίσκει"
    },
    "imperfektIndikativ": {
      "de": "er fand",
      "lv": "Βρήκε"
    },
    "imperfektKonjunktiv": {
      "de": "er fände",
      "lv": "Θα έβρισκε"
    },
    "partizipVergangenheit": {
      "de": "gefunden",
      "lv": "Θεμελιώ"
    }
  },
  {
    "infinitiv": {
      "de": "fliegen",
      "lv": "Να πετάξει"
    },
    "praesens": {
      "de": "er fliegt",
      "lv": "Πετάει"
    },
    "imperfektIndikativ": {
      "de": "er flog",
      "lv": "Πέταξε"
    },
    "imperfektKonjunktiv": {
      "de": "er flöge",
      "lv": "Θα πετούσε"
    },
    "partizipVergangenheit": {
      "de": "geflogen (er ist)",
      "lv": "Έχουν πετάξει"
    }
  },
  {
    "infinitiv": {
      "de": "fliehen",
      "lv": "Να ξεφύγουν"
    },
    "praesens": {
      "de": "er flieht",
      "lv": "Τρέχει μακριά"
    },
    "imperfektIndikativ": {
      "de": "er floh",
      "lv": "Έφυγε τρέχοντας"
    },
    "imperfektKonjunktiv": {
      "de": "er flöhe",
      "lv": "Θα έτρεχε μακριά"
    },
    "partizipVergangenheit": {
      "de": "geflohen (er ist)",
      "lv": "Δραπέτευσε"
    }
  },
  {
    "infinitiv": {
      "de": "fließen",
      "lv": "Να ρέει"
    },
    "praesens": {
      "de": "er fließt",
      "lv": "Ρέει"
    },
    "imperfektIndikativ": {
      "de": "er floss",
      "lv": "Έρεε"
    },
    "imperfektKonjunktiv": {
      "de": "er flösse",
      "lv": "Θα έρεε"
    },
    "partizipVergangenheit": {
      "de": "geflossen (er ist)",
      "lv": "Κυλούσε"
    }
  },
  {
    "infinitiv": {
      "de": "fressen",
      "lv": "Τρώω / καταβροχθίζω"
    },
    "praesens": {
      "de": "er frisst",
      "lv": "Τρώει / τρώει"
    },
    "imperfektIndikativ": {
      "de": "er frass",
      "lv": "Έφαγε / καταβρόχθισε"
    },
    "imperfektKonjunktiv": {
      "de": "er fräße",
      "lv": "Θα έτρωγε / θα καταβρόχθιζε"
    },
    "partizipVergangenheit": {
      "de": "gefressen",
      "lv": "Φαγωμένος / καταβροχθισμένος"
    }
  },
  {
    "infinitiv": {
      "de": "frieren",
      "lv": "Να κρυώσει"
    },
    "praesens": {
      "de": "er friert",
      "lv": "Είναι κρύος"
    },
    "imperfektIndikativ": {
      "de": "er fror",
      "lv": "Ήταν κρύος"
    },
    "imperfektKonjunktiv": {
      "de": "er fröre",
      "lv": "Θα κρυωνόταν"
    },
    "partizipVergangenheit": {
      "de": "gefroren",
      "lv": "Παγωμένος"
    }
  },
  {
    "infinitiv": {
      "de": "geben",
      "lv": "Να δώσει"
    },
    "praesens": {
      "de": "er gibt",
      "lv": "Δίνει"
    },
    "imperfektIndikativ": {
      "de": "er gab",
      "lv": "Έδωσε"
    },
    "imperfektKonjunktiv": {
      "de": "er gäbe",
      "lv": "Θα έδινε"
    },
    "partizipVergangenheit": {
      "de": "gegeben",
      "lv": "Δεδομένος"
    }
  },
  {
    "infinitiv": {
      "de": "gedeihen",
      "lv": "Να πετύχει"
    },
    "praesens": {
      "de": "er gedeiht",
      "lv": "Τα καταφέρνει"
    },
    "imperfektIndikativ": {
      "de": "er gedieh",
      "lv": "Τα κατάφερε"
    },
    "imperfektKonjunktiv": {
      "de": "er gediehe",
      "lv": "Θα τα κατάφερνε"
    },
    "partizipVergangenheit": {
      "de": "gediehen (er ist)",
      "lv": "Πέτυχε"
    }
  },
  {
    "infinitiv": {
      "de": "gehen",
      "lv": "Φύγε"
    },
    "praesens": {
      "de": "er geht",
      "lv": "Πάει"
    },
    "imperfektIndikativ": {
      "de": "er ging",
      "lv": "Πήγε"
    },
    "imperfektKonjunktiv": {
      "de": "er ginge",
      "lv": "Θα πήγαινε"
    },
    "partizipVergangenheit": {
      "de": "gegangen (er ist)",
      "lv": "Χαμένος"
    }
  },
  {
    "infinitiv": {
      "de": "gewinnen",
      "lv": "Να κερδίσει"
    },
    "praesens": {
      "de": "er gewinnt",
      "lv": "Κερδίζει"
    },
    "imperfektIndikativ": {
      "de": "er gewann",
      "lv": "Κέρδισε"
    },
    "imperfektKonjunktiv": {
      "de": "er gewönne / er gewänne",
      "lv": "Θα κέρδιζε"
    },
    "partizipVergangenheit": {
      "de": "gewonnen",
      "lv": "Νικημένος"
    }
  },
  {
    "infinitiv": {
      "de": "haben",
      "lv": "Να είσαι / να έχεις"
    },
    "praesens": {
      "de": "er hat",
      "lv": "Έχει"
    },
    "imperfektIndikativ": {
      "de": "hatte",
      "lv": "Είχε"
    },
    "imperfektKonjunktiv": {
      "de": "hatte",
      "lv": "Είχε"
    },
    "partizipVergangenheit": {
      "de": "gehabt",
      "lv": "Ήταν"
    }
  },
  {
    "infinitiv": {
      "de": "halten",
      "lv": "Να κρατήσει"
    },
    "praesens": {
      "de": "er hält",
      "lv": "Κρατάει"
    },
    "imperfektIndikativ": {
      "de": "er hielt",
      "lv": "Κράτησε"
    },
    "imperfektKonjunktiv": {
      "de": "er hielte",
      "lv": "Θα κρατούσε"
    },
    "partizipVergangenheit": {
      "de": "gehalten",
      "lv": "Διατηρήθηκε"
    }
  },
  {
    "infinitiv": {
      "de": "heißen",
      "lv": "Για να ονομάσουμε"
    },
    "praesens": {
      "de": "er heißt",
      "lv": "Καλεί / καλείται"
    },
    "imperfektIndikativ": {
      "de": "er hieß",
      "lv": "Ονόμασε / ονομάστηκε"
    },
    "imperfektKonjunktiv": {
      "de": "er hieße",
      "lv": "Θα ονομαζόταν / θα ονομαζόταν"
    },
    "partizipVergangenheit": {
      "de": "geheißen",
      "lv": "Αναφέρεται"
    }
  },
  {
    "infinitiv": {
      "de": "helfen",
      "lv": "Να βοηθήσει"
    },
    "praesens": {
      "de": "er hilft",
      "lv": "Βοηθάει"
    },
    "imperfektIndikativ": {
      "de": "er half",
      "lv": "Βοήθησε"
    },
    "imperfektKonjunktiv": {
      "de": "er hülfe / er hälfe",
      "lv": "Θα βοηθούσε"
    },
    "partizipVergangenheit": {
      "de": "geholfen",
      "lv": "Βοήθησε"
    }
  },
  {
    "infinitiv": {
      "de": "kommen",
      "lv": "Να έρθει"
    },
    "praesens": {
      "de": "er kommt",
      "lv": "Θα έρθει"
    },
    "imperfektIndikativ": {
      "de": "er kam",
      "lv": "Ήρθε"
    },
    "imperfektKonjunktiv": {
      "de": "er käme",
      "lv": "Θα ερχόταν"
    },
    "partizipVergangenheit": {
      "de": "gekommen (er ist)",
      "lv": "Ήρθε"
    }
  },
  {
    "infinitiv": {
      "de": "können",
      "lv": "Να μπορώ να / να μπορώ να"
    },
    "praesens": {
      "de": "er kann",
      "lv": "Μπορεί / μπορεί"
    },
    "imperfektIndikativ": {
      "de": "konnte",
      "lv": "Μπορούσε / μπορούσε"
    },
    "imperfektKonjunktiv": {
      "de": "konnte",
      "lv": "Μπορούσε / μπορούσε"
    },
    "partizipVergangenheit": {
      "de": "gekonnt",
      "lv": "Μπόρεσαν"
    }
  },
  {
    "infinitiv": {
      "de": "kriechen",
      "lv": "Να σέρνεται"
    },
    "praesens": {
      "de": "er kriecht",
      "lv": "Σέρνεται"
    },
    "imperfektIndikativ": {
      "de": "er kroch",
      "lv": "Σύρθηκε"
    },
    "imperfektKonjunktiv": {
      "de": "er kröche",
      "lv": "Θα σερνόταν"
    },
    "partizipVergangenheit": {
      "de": "gekrochen (er ist)",
      "lv": "Σύρθηκε"
    }
  },
  {
    "infinitiv": {
      "de": "laden",
      "lv": "Φόρτωση / κλήση"
    },
    "praesens": {
      "de": "er lädt",
      "lv": "Φορτώνει / καλεί"
    },
    "imperfektIndikativ": {
      "de": "er lud",
      "lv": "Φόρτωσε / κάλεσε"
    },
    "imperfektKonjunktiv": {
      "de": "er lüde",
      "lv": "Θα φόρτωνε / θα καλούσε"
    },
    "partizipVergangenheit": {
      "de": "geladen",
      "lv": "Φορτωμένο / καλούμενο"
    }
  },
  {
    "infinitiv": {
      "de": "lassen",
      "lv": "Βάζω / αφήνω"
    },
    "praesens": {
      "de": "er lässt",
      "lv": "Βάζει / αφήνει"
    },
    "imperfektIndikativ": {
      "de": "er ließ",
      "lv": "Έβαλε / άφησε"
    },
    "imperfektKonjunktiv": {
      "de": "er ließe",
      "lv": "Θα έβαζε / άφηνε"
    },
    "partizipVergangenheit": {
      "de": "gelassen",
      "lv": "Βάζω / πυροβολώ"
    }
  },
  {
    "infinitiv": {
      "de": "laufen",
      "lv": "Να τρέξει"
    },
    "praesens": {
      "de": "er läuft",
      "lv": "Τρέχει"
    },
    "imperfektIndikativ": {
      "de": "er lief",
      "lv": "Έτρεξε"
    },
    "imperfektKonjunktiv": {
      "de": "er liefe",
      "lv": "Θα έτρεχε"
    },
    "partizipVergangenheit": {
      "de": "gelaufen (er ist)",
      "lv": "Έτρεξε"
    }
  },
  {
    "infinitiv": {
      "de": "leiden",
      "lv": "Να υποφέρουν"
    },
    "praesens": {
      "de": "er leidet",
      "lv": "Υποφέρει"
    },
    "imperfektIndikativ": {
      "de": "er litt",
      "lv": "Υπέφερε"
    },
    "imperfektKonjunktiv": {
      "de": "er litte",
      "lv": "Θα υπέφερε"
    },
    "partizipVergangenheit": {
      "de": "gelitten",
      "lv": "Υπέφερε"
    }
  },
  {
    "infinitiv": {
      "de": "leihen",
      "lv": "Να δανειστεί"
    },
    "praesens": {
      "de": "er leiht",
      "lv": "Δανείζεται"
    },
    "imperfektIndikativ": {
      "de": "er lieh",
      "lv": "Δανείστηκε"
    },
    "imperfektKonjunktiv": {
      "de": "er liehe",
      "lv": "Θα δανειζόταν"
    },
    "partizipVergangenheit": {
      "de": "geliehen",
      "lv": "Δανεισμένος"
    }
  },
  {
    "infinitiv": {
      "de": "lesen",
      "lv": "Για να διαβάσετε"
    },
    "praesens": {
      "de": "er liest",
      "lv": "Διαβάζει"
    },
    "imperfektIndikativ": {
      "de": "er las",
      "lv": "Διάβασε"
    },
    "imperfektKonjunktiv": {
      "de": "er läse",
      "lv": "Θα μετρούσε"
    },
    "partizipVergangenheit": {
      "de": "gelesen",
      "lv": "Ανάγνωση"
    }
  },
  {
    "infinitiv": {
      "de": "liegen",
      "lv": "Ψέμα / είμαι"
    },
    "praesens": {
      "de": "er liegt",
      "lv": "Είναι ξαπλωμένος"
    },
    "imperfektIndikativ": {
      "de": "er lag",
      "lv": "Ήταν ξαπλωμένος"
    },
    "imperfektKonjunktiv": {
      "de": "er läge",
      "lv": "Θα ξάπλωσε"
    },
    "partizipVergangenheit": {
      "de": "gelegen",
      "lv": "Ξαπλομένος"
    }
  },
  {
    "infinitiv": {
      "de": "lügen",
      "lv": "Να πει ψέματα"
    },
    "praesens": {
      "de": "er lügt",
      "lv": "Λέει ψέματα"
    },
    "imperfektIndikativ": {
      "de": "er log",
      "lv": "Είπε ψέματα"
    },
    "imperfektKonjunktiv": {
      "de": "er löge",
      "lv": "Θα έλεγε ψέματα"
    },
    "partizipVergangenheit": {
      "de": "gelogen",
      "lv": "Είπε ψέματα"
    }
  },
  {
    "infinitiv": {
      "de": "mahlen",
      "lv": "Να αλέσει"
    },
    "praesens": {
      "de": "er mahlt",
      "lv": "Αλέθει"
    },
    "imperfektIndikativ": {
      "de": "er mahlte",
      "lv": "Άλεσε"
    },
    "imperfektKonjunktiv": {
      "de": "er malte",
      "lv": "Θα άλεζε"
    },
    "partizipVergangenheit": {
      "de": "gemahlen",
      "lv": "Έδαφος"
    }
  },
  {
    "infinitiv": {
      "de": "meiden",
      "lv": "Για αποφυγή"
    },
    "praesens": {
      "de": "er meidet",
      "lv": "Αποφεύγει"
    },
    "imperfektIndikativ": {
      "de": "er mied",
      "lv": "Απέφυγε"
    },
    "imperfektKonjunktiv": {
      "de": "er miede",
      "lv": "Θα απέφευγε"
    },
    "partizipVergangenheit": {
      "de": "gemieden",
      "lv": "Αποφεύγεται"
    }
  },
  {
    "infinitiv": {
      "de": "melken",
      "lv": "Στο γάλα"
    },
    "praesens": {
      "de": "er milkt / er melkt",
      "lv": "Αρμέγει"
    },
    "imperfektIndikativ": {
      "de": "er molk / er melkte",
      "lv": "Άρμεγε"
    },
    "imperfektKonjunktiv": {
      "de": "er mölke / er melkte",
      "lv": "Θα άρμεγε"
    },
    "partizipVergangenheit": {
      "de": "gemolken / gemelkt",
      "lv": "Αρμέγονται"
    }
  },
  {
    "infinitiv": {
      "de": "messen",
      "lv": "Να μετρήσει"
    },
    "praesens": {
      "de": "er misst",
      "lv": "Μετράει"
    },
    "imperfektIndikativ": {
      "de": "er mass",
      "lv": "Μέτρησε"
    },
    "imperfektKonjunktiv": {
      "de": "er mäße",
      "lv": "Θα μετρούσε"
    },
    "partizipVergangenheit": {
      "de": "gemessen",
      "lv": "Μετρημένος"
    }
  },
  {
    "infinitiv": {
      "de": "misslingen",
      "lv": "Να αποτύχει"
    },
    "praesens": {
      "de": "es misslingt",
      "lv": "Αποτυγχάνει"
    },
    "imperfektIndikativ": {
      "de": "misslang",
      "lv": "Απέτυχε"
    },
    "imperfektKonjunktiv": {
      "de": "misslang",
      "lv": "Απέτυχε"
    },
    "partizipVergangenheit": {
      "de": "misslungen",
      "lv": "Αποτυχημένος"
    }
  },
  {
    "infinitiv": {
      "de": "mögen",
      "lv": "Να αρέσει"
    },
    "praesens": {
      "de": "er mag",
      "lv": "Του αρέσει"
    },
    "imperfektIndikativ": {
      "de": "mochte",
      "lv": "Του άρεσε"
    },
    "imperfektKonjunktiv": {
      "de": "mochte",
      "lv": "Του άρεσε"
    },
    "partizipVergangenheit": {
      "de": "gemocht",
      "lv": "Άρεσε"
    }
  },
  {
    "infinitiv": {
      "de": "müssen",
      "lv": "Να κρατήσει"
    },
    "praesens": {
      "de": "er muss",
      "lv": "Πρέπει"
    },
    "imperfektIndikativ": {
      "de": "musste",
      "lv": "Έπρεπε"
    },
    "imperfektKonjunktiv": {
      "de": "musste",
      "lv": "Έπρεπε"
    },
    "partizipVergangenheit": {
      "de": "gemusst",
      "lv": "Έπρεπε να"
    }
  },
  {
    "infinitiv": {
      "de": "nehmen",
      "lv": "Να πάρει"
    },
    "praesens": {
      "de": "er nimmt",
      "lv": "Παίρνει"
    },
    "imperfektIndikativ": {
      "de": "er nahm",
      "lv": "Πήρε"
    },
    "imperfektKonjunktiv": {
      "de": "er nähme",
      "lv": "Θα έπαιρνε"
    },
    "partizipVergangenheit": {
      "de": "genommen",
      "lv": "Λαμβάνονται"
    }
  },
  {
    "infinitiv": {
      "de": "nennen",
      "lv": "Για να ονομάσουμε"
    },
    "praesens": {
      "de": "er nennt",
      "lv": "Ονομάζει"
    },
    "imperfektIndikativ": {
      "de": "er nannte",
      "lv": "Κατονόμασε"
    },
    "imperfektKonjunktiv": {
      "de": "er nennte",
      "lv": "Θα κατονομαζόταν"
    },
    "partizipVergangenheit": {
      "de": "genannt",
      "lv": "Αναφέρεται"
    }
  },
  {
    "infinitiv": {
      "de": "pfeifen",
      "lv": "Να σφυρίξει"
    },
    "praesens": {
      "de": "er pfeift",
      "lv": "Σφυρίζει"
    },
    "imperfektIndikativ": {
      "de": "er pfiff",
      "lv": "Σφύριξε"
    },
    "imperfektKonjunktiv": {
      "de": "er pfiffe",
      "lv": "Θα σφύριζε"
    },
    "partizipVergangenheit": {
      "de": "gepfiffen",
      "lv": "Σφύριξε"
    }
  },
  {
    "infinitiv": {
      "de": "pflegen",
      "lv": "Να φροντίζει"
    },
    "praesens": {
      "de": "er pflegt",
      "lv": "Φροντίζει"
    },
    "imperfektIndikativ": {
      "de": "pflegte vai pflog",
      "lv": "Νοιαζόταν"
    },
    "imperfektKonjunktiv": {
      "de": "pflegte vai pflog",
      "lv": "Νοιαζόταν"
    },
    "partizipVergangenheit": {
      "de": "gepflegt vai gepflogen",
      "lv": "Φροντισμένος"
    }
  },
  {
    "infinitiv": {
      "de": "preisen",
      "lv": "Να επαινέσω"
    },
    "praesens": {
      "de": "er preist",
      "lv": "Επαινεί"
    },
    "imperfektIndikativ": {
      "de": "er pries",
      "lv": "Επαίνεσε"
    },
    "imperfektKonjunktiv": {
      "de": "er priese",
      "lv": "Θα ενέκρινε"
    },
    "partizipVergangenheit": {
      "de": "gepriesen",
      "lv": "Επαίνετο"
    }
  },
  {
    "infinitiv": {
      "de": "quellen",
      "lv": "Πρήζω"
    },
    "praesens": {
      "de": "er quillt",
      "lv": "Πρήζεται"
    },
    "imperfektIndikativ": {
      "de": "er quoll",
      "lv": "Φούσκωσε"
    },
    "imperfektKonjunktiv": {
      "de": "er quölle",
      "lv": "Θα πρήζονταν"
    },
    "partizipVergangenheit": {
      "de": "gequollen (er ist)",
      "lv": "Πρησμένος"
    }
  },
  {
    "infinitiv": {
      "de": "raten",
      "lv": "Προτείνω / μαντέψω"
    },
    "praesens": {
      "de": "er rät",
      "lv": "Προτείνει / σκέφτεται"
    },
    "imperfektIndikativ": {
      "de": "er riet",
      "lv": "Πρότεινε / σκέφτηκε"
    },
    "imperfektKonjunktiv": {
      "de": "er riete",
      "lv": "Θα πρότεινε / σκεφτόταν"
    },
    "partizipVergangenheit": {
      "de": "geraten",
      "lv": "Συνιστάται / περιλαμβάνεται"
    }
  },
  {
    "infinitiv": {
      "de": "reiben",
      "lv": "Να τρίβετε"
    },
    "praesens": {
      "de": "er reibt",
      "lv": "Τρίβει"
    },
    "imperfektIndikativ": {
      "de": "er rieb",
      "lv": "Έτριψε"
    },
    "imperfektKonjunktiv": {
      "de": "er riebe",
      "lv": "Θα έτριβε"
    },
    "partizipVergangenheit": {
      "de": "gerieben",
      "lv": "Τρίβονται"
    }
  },
  {
    "infinitiv": {
      "de": "reißen",
      "lv": "Να σκίσει"
    },
    "praesens": {
      "de": "er reißt",
      "lv": "Δακρύζει"
    },
    "imperfektIndikativ": {
      "de": "er riss",
      "lv": "Έσκισε"
    },
    "imperfektKonjunktiv": {
      "de": "er risse",
      "lv": "Θα έσκιζε"
    },
    "partizipVergangenheit": {
      "de": "gerissen",
      "lv": "Σχισμένο"
    }
  },
  {
    "infinitiv": {
      "de": "reiten",
      "lv": "Καβαλήστε ένα άλογο"
    },
    "praesens": {
      "de": "er reitet",
      "lv": "Ιππεύει"
    },
    "imperfektIndikativ": {
      "de": "er ritt",
      "lv": "Καβαλούσε"
    },
    "imperfektKonjunktiv": {
      "de": "er ritte",
      "lv": "Θα καβαλούσε"
    },
    "partizipVergangenheit": {
      "de": "geritten (er ist)",
      "lv": "Καβάλησε"
    }
  },
  {
    "infinitiv": {
      "de": "rennen",
      "lv": "Να τρέξει"
    },
    "praesens": {
      "de": "er rennt",
      "lv": "Τρέχει"
    },
    "imperfektIndikativ": {
      "de": "er rannte",
      "lv": "Έτρεξε"
    },
    "imperfektKonjunktiv": {
      "de": "er rennte",
      "lv": "Θα έτρεχε"
    },
    "partizipVergangenheit": {
      "de": "gerannt",
      "lv": "Έτρεξε"
    }
  },
  {
    "infinitiv": {
      "de": "riechen",
      "lv": "Μυρωδιά / μυρωδιά"
    },
    "praesens": {
      "de": "er riecht",
      "lv": "Μυρίζει"
    },
    "imperfektIndikativ": {
      "de": "er roch",
      "lv": "Μύρισε"
    },
    "imperfektKonjunktiv": {
      "de": "er röche",
      "lv": "Θα μύριζε"
    },
    "partizipVergangenheit": {
      "de": "gerochen",
      "lv": "Μύρισε"
    }
  },
  {
    "infinitiv": {
      "de": "ringen",
      "lv": "Διάλειμμα / αγώνας"
    },
    "praesens": {
      "de": "er ringt",
      "lv": "Παλεύει"
    },
    "imperfektIndikativ": {
      "de": "er rang",
      "lv": "Πάλεψε"
    },
    "imperfektKonjunktiv": {
      "de": "er ränge",
      "lv": "Θα πάλευε"
    },
    "partizipVergangenheit": {
      "de": "gerungen",
      "lv": "Πάλεψε"
    }
  },
  {
    "infinitiv": {
      "de": "rinnen",
      "lv": "Να ρέει"
    },
    "praesens": {
      "de": "er rinnt",
      "lv": "Ρέει"
    },
    "imperfektIndikativ": {
      "de": "er rann",
      "lv": "Έρεε"
    },
    "imperfektKonjunktiv": {
      "de": "er ränne / er rönne",
      "lv": "Θα έρεε"
    },
    "partizipVergangenheit": {
      "de": "geronnen (er ist)",
      "lv": "Κυλούσε / κατέρρευσε"
    }
  },
  {
    "infinitiv": {
      "de": "rufen",
      "lv": "Να φωνάζει"
    },
    "praesens": {
      "de": "er ruft",
      "lv": "Φωνάζει"
    },
    "imperfektIndikativ": {
      "de": "er rief",
      "lv": "Φώναξε"
    },
    "imperfektKonjunktiv": {
      "de": "er riefe",
      "lv": "Θα φώναζε"
    },
    "partizipVergangenheit": {
      "de": "gerufen",
      "lv": "Φώναξε"
    }
  },
  {
    "infinitiv": {
      "de": "salzen",
      "lv": "Στο αλάτι"
    },
    "praesens": {
      "de": "er salzt",
      "lv": "Αλατίζει"
    },
    "imperfektIndikativ": {
      "de": "er salzte",
      "lv": "Αλάτισε"
    },
    "imperfektKonjunktiv": {
      "de": "er salzte",
      "lv": "Θα αλάτιζε"
    },
    "partizipVergangenheit": {
      "de": "gesalzen",
      "lv": "Αλατισμένος"
    }
  },
  {
    "infinitiv": {
      "de": "saufen",
      "lv": "Ποτό / φαγοπότι"
    },
    "praesens": {
      "de": "er säuft",
      "lv": "Πίνει / πίνει"
    },
    "imperfektIndikativ": {
      "de": "er soff",
      "lv": "Έπινε / έπινε"
    },
    "imperfektKonjunktiv": {
      "de": "er söffe",
      "lv": "Θα έτρεχε / θα έτρεχε"
    },
    "partizipVergangenheit": {
      "de": "gesoffen",
      "lv": "Μεθυσμένος"
    }
  },
  {
    "infinitiv": {
      "de": "saugen",
      "lv": "Να ρουφήξει"
    },
    "praesens": {
      "de": "er saugt",
      "lv": "Είναι χάλια"
    },
    "imperfektIndikativ": {
      "de": "er sog",
      "lv": "Αναρωτήθηκε"
    },
    "imperfektKonjunktiv": {
      "de": "er söge",
      "lv": "Αναρωτιέται"
    },
    "partizipVergangenheit": {
      "de": "gesogen",
      "lv": "Πιπιλισμένος"
    }
  },
  {
    "infinitiv": {
      "de": "schaffen",
      "lv": "Να δημιουργήσει"
    },
    "praesens": {
      "de": "er schafft",
      "lv": "Δημιουργεί"
    },
    "imperfektIndikativ": {
      "de": "er schuf",
      "lv": "Χτύπησε"
    },
    "imperfektKonjunktiv": {
      "de": "er schüfe",
      "lv": "Θα δημιουργούσε"
    },
    "partizipVergangenheit": {
      "de": "geschaffen",
      "lv": "Δημιουργήθηκε"
    }
  },
  {
    "infinitiv": {
      "de": "schallen",
      "lv": "Να ακούγεται"
    },
    "praesens": {
      "de": "es schallt",
      "lv": "Ακούγεται"
    },
    "imperfektIndikativ": {
      "de": "schallte vai scholl",
      "lv": "Ακουγόταν"
    },
    "imperfektKonjunktiv": {
      "de": "schallte vai scholl",
      "lv": "Ακουγόταν"
    },
    "partizipVergangenheit": {
      "de": "geschallt",
      "lv": "Ακούστηκε"
    }
  },
  {
    "infinitiv": {
      "de": "scheiden",
      "lv": "Διαζύγιο / άδεια"
    },
    "praesens": {
      "de": "er scheidet",
      "lv": "Χωρίζει / φεύγει"
    },
    "imperfektIndikativ": {
      "de": "er schied",
      "lv": "Χώρισε / έφυγε"
    },
    "imperfektKonjunktiv": {
      "de": "er schiede",
      "lv": "Θα χώριζε / θα έφευγε"
    },
    "partizipVergangenheit": {
      "de": "geschieden (er hat / er ist)",
      "lv": "Διαζευγμένος / έφυγε"
    }
  },
  {
    "infinitiv": {
      "de": "scheinen",
      "lv": "Να εμφανιστεί"
    },
    "praesens": {
      "de": "er scheint",
      "lv": "Κοιτάζει"
    },
    "imperfektIndikativ": {
      "de": "er schien",
      "lv": "Φαινόταν"
    },
    "imperfektKonjunktiv": {
      "de": "er schiene",
      "lv": "Θα εμφανιζόταν"
    },
    "partizipVergangenheit": {
      "de": "geschienen",
      "lv": "Εμφανίστηκε"
    }
  },
  {
    "infinitiv": {
      "de": "schelten",
      "lv": "Να βρίζει"
    },
    "praesens": {
      "de": "er schilt",
      "lv": "Βρίζει"
    },
    "imperfektIndikativ": {
      "de": "er schalt",
      "lv": "Καταράστηκε"
    },
    "imperfektKonjunktiv": {
      "de": "er schölte / er schälte",
      "lv": "Θα έβριζε"
    },
    "partizipVergangenheit": {
      "de": "gescholten",
      "lv": "Επίπληξε"
    }
  },
  {
    "infinitiv": {
      "de": "scheren",
      "lv": "Να κλαδέψουν"
    },
    "praesens": {
      "de": "er schert",
      "lv": "Κλαδεύει"
    },
    "imperfektIndikativ": {
      "de": "schor vai scherte",
      "lv": "Κούρεψε"
    },
    "imperfektKonjunktiv": {
      "de": "schor vai scherte",
      "lv": "Κούρεψε"
    },
    "partizipVergangenheit": {
      "de": "geschoren vai geschert",
      "lv": "Κλαδεύονται"
    }
  },
  {
    "infinitiv": {
      "de": "schieben",
      "lv": "Να σπρώχνει"
    },
    "praesens": {
      "de": "er schiebt",
      "lv": "Σπρώχνει"
    },
    "imperfektIndikativ": {
      "de": "er schob",
      "lv": "Έσπρωξε"
    },
    "imperfektKonjunktiv": {
      "de": "er schöbe",
      "lv": "Θα έσπρωχνε"
    },
    "partizipVergangenheit": {
      "de": "geschoben",
      "lv": "Έσπρωξε"
    }
  },
  {
    "infinitiv": {
      "de": "schießen",
      "lv": "Να πυροβολήσει"
    },
    "praesens": {
      "de": "er schießt",
      "lv": "Σουτάρει"
    },
    "imperfektIndikativ": {
      "de": "er schoss",
      "lv": "Πυροβόλησε"
    },
    "imperfektKonjunktiv": {
      "de": "er schösse",
      "lv": "Θα πυροβολούσε"
    },
    "partizipVergangenheit": {
      "de": "geschossen",
      "lv": "Βολή"
    }
  },
  {
    "infinitiv": {
      "de": "schinden",
      "lv": "Να βασανίζουν"
    },
    "praesens": {
      "de": "er schindet",
      "lv": "Βασανίζει"
    },
    "imperfektIndikativ": {
      "de": "schindete",
      "lv": "Ήταν σε αγωνία"
    },
    "imperfektKonjunktiv": {
      "de": "schindete",
      "lv": "Ήταν σε αγωνία"
    },
    "partizipVergangenheit": {
      "de": "geschunden",
      "lv": "Βασανίστηκε"
    }
  },
  {
    "infinitiv": {
      "de": "schlafen",
      "lv": "Να κοιμηθώ"
    },
    "praesens": {
      "de": "er schläft",
      "lv": "Κοιμάται"
    },
    "imperfektIndikativ": {
      "de": "er schlief",
      "lv": "Κοιμήθηκε"
    },
    "imperfektKonjunktiv": {
      "de": "er schliefe",
      "lv": "Θα κοιμόταν"
    },
    "partizipVergangenheit": {
      "de": "geschlafen",
      "lv": "Κοιμήθηκε"
    }
  },
  {
    "infinitiv": {
      "de": "schlagen",
      "lv": "Να χτυπήσει"
    },
    "praesens": {
      "de": "er schlägt",
      "lv": "Χτυπάει"
    },
    "imperfektIndikativ": {
      "de": "er schlug",
      "lv": "Χτύπησε"
    },
    "imperfektKonjunktiv": {
      "de": "er schlüge",
      "lv": "Θα χτυπούσε"
    },
    "partizipVergangenheit": {
      "de": "geschlagen",
      "lv": "Χτυπημένος"
    }
  },
  {
    "infinitiv": {
      "de": "schleichen",
      "lv": "Να κρυφά"
    },
    "praesens": {
      "de": "er schleicht",
      "lv": "Κρυφά"
    },
    "imperfektIndikativ": {
      "de": "er schlich",
      "lv": "Κρυφά"
    },
    "imperfektKonjunktiv": {
      "de": "er schliche",
      "lv": "Θα κρυφά"
    },
    "partizipVergangenheit": {
      "de": "geschlichen (er ist)",
      "lv": "Κρυφά"
    }
  },
  {
    "infinitiv": {
      "de": "schleifen",
      "lv": "Να αλέσει"
    },
    "praesens": {
      "de": "er schleift",
      "lv": "Αλέθει"
    },
    "imperfektIndikativ": {
      "de": "er schliff",
      "lv": "Γυάλισε"
    },
    "imperfektKonjunktiv": {
      "de": "er schliffe",
      "lv": "Θα άλεζε"
    },
    "partizipVergangenheit": {
      "de": "geschliffen",
      "lv": "Άμεμπτος"
    }
  },
  {
    "infinitiv": {
      "de": "schließen",
      "lv": "Να κλείσει"
    },
    "praesens": {
      "de": "er schließt",
      "lv": "Κλείνει"
    },
    "imperfektIndikativ": {
      "de": "er schloss",
      "lv": "Έκλεισε"
    },
    "imperfektKonjunktiv": {
      "de": "er schlösse",
      "lv": "Θα έκλεινε"
    },
    "partizipVergangenheit": {
      "de": "geschlossen",
      "lv": "Κλειστό"
    }
  },
  {
    "infinitiv": {
      "de": "schlingen",
      "lv": "Να καταπιεί"
    },
    "praesens": {
      "de": "er schlingt",
      "lv": "Κλαίει"
    },
    "imperfektIndikativ": {
      "de": "er schlang",
      "lv": "Κούρσαρε"
    },
    "imperfektKonjunktiv": {
      "de": "er schlänge",
      "lv": "Θα έκλαιγε"
    },
    "partizipVergangenheit": {
      "de": "geschlungen",
      "lv": "Συνθλίβονται"
    }
  },
  {
    "infinitiv": {
      "de": "schmeißen",
      "lv": "Να ρίξει"
    },
    "praesens": {
      "de": "er schmeißt",
      "lv": "Ρίχνει"
    },
    "imperfektIndikativ": {
      "de": "er schmiss",
      "lv": "Πέταξε"
    },
    "imperfektKonjunktiv": {
      "de": "er schmisse",
      "lv": "Θα έριχνε"
    },
    "partizipVergangenheit": {
      "de": "geschmissen",
      "lv": "Πεταμένο"
    }
  },
  {
    "infinitiv": {
      "de": "schmelzen",
      "lv": "Να λιώσει"
    },
    "praesens": {
      "de": "er schmilzt",
      "lv": "Λιώνει"
    },
    "imperfektIndikativ": {
      "de": "er schmolz",
      "lv": "Έλιωσε"
    },
    "imperfektKonjunktiv": {
      "de": "er schmölze",
      "lv": "Θα έλιωνε"
    },
    "partizipVergangenheit": {
      "de": "geschmolzen (er ist)",
      "lv": "Λειωμένο"
    }
  },
  {
    "infinitiv": {
      "de": "schnauben",
      "lv": "Σφίξιμο"
    },
    "praesens": {
      "de": "er schnaubt",
      "lv": "Σφίγγει"
    },
    "imperfektIndikativ": {
      "de": "schnaubte vai schnob",
      "lv": "Έσπασε"
    },
    "imperfektKonjunktiv": {
      "de": "schnaubte vai schnob",
      "lv": "Έσπασε"
    },
    "partizipVergangenheit": {
      "de": "geschnaubt vai geschnoben",
      "lv": "Στριμωγμένος"
    }
  },
  {
    "infinitiv": {
      "de": "schneiden",
      "lv": "Να κόψει"
    },
    "praesens": {
      "de": "er schneidet",
      "lv": "Κόβει"
    },
    "imperfektIndikativ": {
      "de": "er schnitt",
      "lv": "Έκοψε"
    },
    "imperfektKonjunktiv": {
      "de": "er schnitte",
      "lv": "Θα έκοβε"
    },
    "partizipVergangenheit": {
      "de": "geschnitten",
      "lv": "Τομή"
    }
  },
  {
    "infinitiv": {
      "de": "schreiben",
      "lv": "Να γράψω"
    },
    "praesens": {
      "de": "er schreibt",
      "lv": "Γράφει"
    },
    "imperfektIndikativ": {
      "de": "er schrieb",
      "lv": "Έγραψε"
    },
    "imperfektKonjunktiv": {
      "de": "er schriebe",
      "lv": "Θα έγραφε"
    },
    "partizipVergangenheit": {
      "de": "geschrieben",
      "lv": "Γραπτός"
    }
  },
  {
    "infinitiv": {
      "de": "schreien",
      "lv": "Να φωνάζει"
    },
    "praesens": {
      "de": "er schreit",
      "lv": "Φωνάζει"
    },
    "imperfektIndikativ": {
      "de": "er schrie",
      "lv": "Ούρλιαξε"
    },
    "imperfektKonjunktiv": {
      "de": "er schriee",
      "lv": "Θα ούρλιαζε"
    },
    "partizipVergangenheit": {
      "de": "geschrien",
      "lv": "Φώναξε"
    }
  },
  {
    "infinitiv": {
      "de": "schreiten",
      "lv": "Να πατήσει"
    },
    "praesens": {
      "de": "er schreitet",
      "lv": "Περπατάει"
    },
    "imperfektIndikativ": {
      "de": "er schritt",
      "lv": "Βηματίστηκε"
    },
    "imperfektKonjunktiv": {
      "de": "er schritte",
      "lv": "Θα πατούσε"
    },
    "partizipVergangenheit": {
      "de": "geschritten (er ist)",
      "lv": "Με ρυθμό"
    }
  },
  {
    "infinitiv": {
      "de": "schweigen",
      "lv": "Να σιωπήσει"
    },
    "praesens": {
      "de": "er schweigt",
      "lv": "Είναι σιωπηλός"
    },
    "imperfektIndikativ": {
      "de": "er schwieg",
      "lv": "Ήταν σιωπηλή"
    },
    "imperfektKonjunktiv": {
      "de": "er schwiege",
      "lv": "Θα ήταν σιωπηλός"
    },
    "partizipVergangenheit": {
      "de": "geschwiegen",
      "lv": "Φίμωσε"
    }
  },
  {
    "infinitiv": {
      "de": "schwellen",
      "lv": "Πρήζω"
    },
    "praesens": {
      "de": "er schwillt",
      "lv": "Πρήζεται"
    },
    "imperfektIndikativ": {
      "de": "er schwoll",
      "lv": "Φούσκωσε"
    },
    "imperfektKonjunktiv": {
      "de": "er schwölle",
      "lv": "Θα πρήζονταν"
    },
    "partizipVergangenheit": {
      "de": "geschwollen (er ist)",
      "lv": "Πρησμένος"
    }
  },
  {
    "infinitiv": {
      "de": "schwimmen",
      "lv": "Να κολυμπήσετε"
    },
    "praesens": {
      "de": "er schwimmt",
      "lv": "Κολυμπάει"
    },
    "imperfektIndikativ": {
      "de": "er schwamm",
      "lv": "Κολυμπούσε"
    },
    "imperfektKonjunktiv": {
      "de": "er schwömme / er schwämme",
      "lv": "Θα κολυμπούσε"
    },
    "partizipVergangenheit": {
      "de": "geschwommen (er ist)",
      "lv": "Κολύμπησε"
    }
  },
  {
    "infinitiv": {
      "de": "schwinden",
      "lv": "Να εξαφανιστεί"
    },
    "praesens": {
      "de": "er schwindet",
      "lv": "Εξαφανίζεται"
    },
    "imperfektIndikativ": {
      "de": "er schwand",
      "lv": "Εξαφανίστηκε"
    },
    "imperfektKonjunktiv": {
      "de": "er schwände",
      "lv": "Θα εξαφανιζόταν"
    },
    "partizipVergangenheit": {
      "de": "geschwunden (er ist)",
      "lv": "Χαμένος"
    }
  },
  {
    "infinitiv": {
      "de": "schwingen",
      "lv": "Τόξο"
    },
    "praesens": {
      "de": "er schwingt",
      "lv": "Υποκλίνεται"
    },
    "imperfektIndikativ": {
      "de": "er schwang",
      "lv": "Κούνησε το χέρι"
    },
    "imperfektKonjunktiv": {
      "de": "er schwänge",
      "lv": "Θα προσκυνούσε"
    },
    "partizipVergangenheit": {
      "de": "geschwungen",
      "lv": "Σκυφτός"
    }
  },
  {
    "infinitiv": {
      "de": "schwören",
      "lv": "Να ορκιστεί"
    },
    "praesens": {
      "de": "er schwört",
      "lv": "Βρίζει"
    },
    "imperfektIndikativ": {
      "de": "er schwur / er schwor",
      "lv": "Ορκίστηκε"
    },
    "imperfektKonjunktiv": {
      "de": "er schwöre",
      "lv": "Θα έβριζε"
    },
    "partizipVergangenheit": {
      "de": "geschworen",
      "lv": "Ορκισμένος"
    }
  },
  {
    "infinitiv": {
      "de": "sehen",
      "lv": "Να δεις"
    },
    "praesens": {
      "de": "er sieht",
      "lv": "Βλέπει"
    },
    "imperfektIndikativ": {
      "de": "er sah",
      "lv": "Είδε"
    },
    "imperfektKonjunktiv": {
      "de": "er sähe",
      "lv": "Θα έβλεπε"
    },
    "partizipVergangenheit": {
      "de": "gesehen",
      "lv": "Δει"
    }
  },
  {
    "infinitiv": {
      "de": "sein",
      "lv": "Να είναι"
    },
    "praesens": {
      "de": "er ist",
      "lv": "Αυτός είναι"
    },
    "imperfektIndikativ": {
      "de": "war",
      "lv": "Ήταν"
    },
    "imperfektKonjunktiv": {
      "de": "war",
      "lv": "Ήταν"
    },
    "partizipVergangenheit": {
      "de": "gewesen",
      "lv": "Ήταν"
    }
  },
  {
    "infinitiv": {
      "de": "senden",
      "lv": "Στέλνω"
    },
    "praesens": {
      "de": "er sendet",
      "lv": "Στέλνει"
    },
    "imperfektIndikativ": {
      "de": "er sandte / er sendete",
      "lv": "Έστειλε"
    },
    "imperfektKonjunktiv": {
      "de": "er sendete",
      "lv": "Θα έστελνε"
    },
    "partizipVergangenheit": {
      "de": "gesandt / gesendet",
      "lv": "Έστειλε"
    }
  },
  {
    "infinitiv": {
      "de": "sieden",
      "lv": "Να βράσει"
    },
    "praesens": {
      "de": "er siedet",
      "lv": "Μαγειρεύει"
    },
    "imperfektIndikativ": {
      "de": "sott vai siedete",
      "lv": "Μαγείρευε"
    },
    "imperfektKonjunktiv": {
      "de": "sott vai siedete",
      "lv": "Μαγείρευε"
    },
    "partizipVergangenheit": {
      "de": "gesotten vai gesiedet",
      "lv": "Μαγείρευτος"
    }
  },
  {
    "infinitiv": {
      "de": "singen",
      "lv": "Να τραγουδήσει"
    },
    "praesens": {
      "de": "er singt",
      "lv": "Τραγουδάει"
    },
    "imperfektIndikativ": {
      "de": "er sang",
      "lv": "Τραγούδησε"
    },
    "imperfektKonjunktiv": {
      "de": "er sänge",
      "lv": "Θα τραγουδούσε"
    },
    "partizipVergangenheit": {
      "de": "gesungen",
      "lv": "Τραγουδήθηκε"
    }
  },
  {
    "infinitiv": {
      "de": "sinken",
      "lv": "Να βυθιστεί"
    },
    "praesens": {
      "de": "er sinkt",
      "lv": "Βουλιάζει"
    },
    "imperfektIndikativ": {
      "de": "er sank",
      "lv": "Βυθίστηκε"
    },
    "imperfektKonjunktiv": {
      "de": "er sänke",
      "lv": "Θα βυθιζόταν"
    },
    "partizipVergangenheit": {
      "de": "gesunken (er ist)",
      "lv": "Βυθισμένος"
    }
  },
  {
    "infinitiv": {
      "de": "sinnen",
      "lv": "Να συλλογιστεί"
    },
    "praesens": {
      "de": "er sinnt",
      "lv": "Συλλογίζεται"
    },
    "imperfektIndikativ": {
      "de": "er sann",
      "lv": "Συλλογίστηκε"
    },
    "imperfektKonjunktiv": {
      "de": "er sönne / er sänne",
      "lv": "Θα συλλογιζόταν"
    },
    "partizipVergangenheit": {
      "de": "gesonnen",
      "lv": "Συλλογίστηκε"
    }
  },
  {
    "infinitiv": {
      "de": "sitzen",
      "lv": "Να καθίσει"
    },
    "praesens": {
      "de": "er sitzt",
      "lv": "Κάθεται"
    },
    "imperfektIndikativ": {
      "de": "er sass",
      "lv": "Κάθισε"
    },
    "imperfektKonjunktiv": {
      "de": "er säße",
      "lv": "Θα καθόταν"
    },
    "partizipVergangenheit": {
      "de": "gesessen",
      "lv": "Σπαρμένος"
    }
  },
  {
    "infinitiv": {
      "de": "sollen",
      "lv": "Κρατώ / υποχρεώνομαι"
    },
    "praesens": {
      "de": "er soll",
      "lv": "Πρέπει"
    },
    "imperfektIndikativ": {
      "de": "sollte",
      "lv": "Έπρεπε"
    },
    "imperfektKonjunktiv": {
      "de": "sollte",
      "lv": "Έπρεπε"
    },
    "partizipVergangenheit": {
      "de": "gesollt",
      "lv": "Έπρεπε να"
    }
  },
  {
    "infinitiv": {
      "de": "speien",
      "lv": "Να φτύνω"
    },
    "praesens": {
      "de": "er speit",
      "lv": "Φτύνει"
    },
    "imperfektIndikativ": {
      "de": "er spie",
      "lv": "Έφτυσε"
    },
    "imperfektKonjunktiv": {
      "de": "er spie",
      "lv": "Θα έφτυνε"
    },
    "partizipVergangenheit": {
      "de": "gespien",
      "lv": "Έφτυσε"
    }
  },
  {
    "infinitiv": {
      "de": "spinnen",
      "lv": "Να γυρίζει"
    },
    "praesens": {
      "de": "er spinnt",
      "lv": "Γυρίζει"
    },
    "imperfektIndikativ": {
      "de": "er spann",
      "lv": "Αυτή στριφογύρισε"
    },
    "imperfektKonjunktiv": {
      "de": "er spönne / er spänne",
      "lv": "Θα γύριζε"
    },
    "partizipVergangenheit": {
      "de": "gesponnen",
      "lv": "Κλωσμένος"
    }
  },
  {
    "infinitiv": {
      "de": "spleißen",
      "lv": "Να συνδεθεί"
    },
    "praesens": {
      "de": "er spleißt",
      "lv": "Συνδέει"
    },
    "imperfektIndikativ": {
      "de": "spliss",
      "lv": "Συνδέθηκε"
    },
    "imperfektKonjunktiv": {
      "de": "spliss",
      "lv": "Συνδέθηκε"
    },
    "partizipVergangenheit": {
      "de": "gesplissen",
      "lv": "Συνδεδεμένος"
    }
  },
  {
    "infinitiv": {
      "de": "sprechen",
      "lv": "Να μιλήσει"
    },
    "praesens": {
      "de": "er spricht",
      "lv": "Μιλάει"
    },
    "imperfektIndikativ": {
      "de": "er sprach",
      "lv": "Μίλησε"
    },
    "imperfektKonjunktiv": {
      "de": "er spräche",
      "lv": "Θα μιλούσε"
    },
    "partizipVergangenheit": {
      "de": "gesprochen",
      "lv": "Ομιλούμενος"
    }
  },
  {
    "infinitiv": {
      "de": "sprießen",
      "lv": "Βλασταίνουν / βλασταίνουν"
    },
    "praesens": {
      "de": "er sprießt",
      "lv": "Φυτρώνει"
    },
    "imperfektIndikativ": {
      "de": "er spross",
      "lv": "Φύτρωσε"
    },
    "imperfektKonjunktiv": {
      "de": "er sprösse",
      "lv": "Θα φύτρωνε"
    },
    "partizipVergangenheit": {
      "de": "gesprossen (er ist)",
      "lv": "Φύτρωσε"
    }
  },
  {
    "infinitiv": {
      "de": "springen",
      "lv": "Να πηδήξει"
    },
    "praesens": {
      "de": "er springt",
      "lv": "Πηδά"
    },
    "imperfektIndikativ": {
      "de": "er sprang",
      "lv": "Πήδηξε"
    },
    "imperfektKonjunktiv": {
      "de": "er spränge",
      "lv": "Θα πηδούσε"
    },
    "partizipVergangenheit": {
      "de": "gesprungen (er ist)",
      "lv": "Πήδηξε"
    }
  },
  {
    "infinitiv": {
      "de": "stechen",
      "lv": "Να τρυπήσει"
    },
    "praesens": {
      "de": "er sticht",
      "lv": "Μαχαιρώνει"
    },
    "imperfektIndikativ": {
      "de": "er stach",
      "lv": "Τρύπωσε"
    },
    "imperfektKonjunktiv": {
      "de": "er stäche",
      "lv": "Θα μαχαιρώνει"
    },
    "partizipVergangenheit": {
      "de": "gestochen",
      "lv": "Διάτρητος"
    }
  },
  {
    "infinitiv": {
      "de": "stecken",
      "lv": "Να κολλήσει / να τρυπήσει"
    },
    "praesens": {
      "de": "er steckt",
      "lv": "Τρυπάει"
    },
    "imperfektIndikativ": {
      "de": "stak vai steckte",
      "lv": "Τρύπωσε"
    },
    "imperfektKonjunktiv": {
      "de": "stak vai steckte",
      "lv": "Τρύπωσε"
    },
    "partizipVergangenheit": {
      "de": "gesteckt",
      "lv": "Τρύπωσε"
    }
  },
  {
    "infinitiv": {
      "de": "stehen",
      "lv": "Να σταθείς"
    },
    "praesens": {
      "de": "er steht",
      "lv": "Στέκεται"
    },
    "imperfektIndikativ": {
      "de": "er stand",
      "lv": "Στάθηκε"
    },
    "imperfektKonjunktiv": {
      "de": "er stände / er stünde",
      "lv": "Θα στεκόταν"
    },
    "partizipVergangenheit": {
      "de": "gestanden",
      "lv": "Σταμάτησε"
    }
  },
  {
    "infinitiv": {
      "de": "stehlen",
      "lv": "Να κλέψει"
    },
    "praesens": {
      "de": "er stiehlt",
      "lv": "Κλέβει"
    },
    "imperfektIndikativ": {
      "de": "er stahl",
      "lv": "Έκλεψε"
    },
    "imperfektKonjunktiv": {
      "de": "er stöhle / er stähle",
      "lv": "Θα έκλεβε"
    },
    "partizipVergangenheit": {
      "de": "gestohlen",
      "lv": "Κλεμμένο"
    }
  },
  {
    "infinitiv": {
      "de": "steigen",
      "lv": "Να σκαρφαλώσει"
    },
    "praesens": {
      "de": "er steigt",
      "lv": "Ανεβαίνει"
    },
    "imperfektIndikativ": {
      "de": "er stieg",
      "lv": "Ανέβηκε"
    },
    "imperfektKonjunktiv": {
      "de": "er stiege",
      "lv": "Θα ανέβαινε"
    },
    "partizipVergangenheit": {
      "de": "gestiegen (er ist)",
      "lv": "Σκαρφάλωσε"
    }
  },
  {
    "infinitiv": {
      "de": "sterben",
      "lv": "Να πεθάνει"
    },
    "praesens": {
      "de": "er stirbt",
      "lv": "Πεθαίνει"
    },
    "imperfektIndikativ": {
      "de": "er starb",
      "lv": "Πέθανε"
    },
    "imperfektKonjunktiv": {
      "de": "er stürbe",
      "lv": "Θα πέθαινε"
    },
    "partizipVergangenheit": {
      "de": "gestorben (er ist)",
      "lv": "Νεκρός"
    }
  },
  {
    "infinitiv": {
      "de": "stieben",
      "lv": "Πετάω / ψεκάζω"
    },
    "praesens": {
      "de": "es stiebt",
      "lv": "Ψεκάζει"
    },
    "imperfektIndikativ": {
      "de": "stob vai stiebte",
      "lv": "Αυτό το σπρέι"
    },
    "imperfektKonjunktiv": {
      "de": "stob vai stiebte",
      "lv": "Αυτό το σπρέι"
    },
    "partizipVergangenheit": {
      "de": "gestoben vai gestiebt",
      "lv": "Διεσπαρμένος"
    }
  },
  {
    "infinitiv": {
      "de": "stinken",
      "lv": "Βρώμα"
    },
    "praesens": {
      "de": "es stinkt",
      "lv": "Βρωμάει"
    },
    "imperfektIndikativ": {
      "de": "stank",
      "lv": "Βρωμούσε"
    },
    "imperfektKonjunktiv": {
      "de": "stank",
      "lv": "Βρωμούσε"
    },
    "partizipVergangenheit": {
      "de": "gestunken",
      "lv": "Βρωμερός"
    }
  },
  {
    "infinitiv": {
      "de": "stoßen",
      "lv": "Να σπρώχνει"
    },
    "praesens": {
      "de": "er stößt",
      "lv": "Σπρώχνει"
    },
    "imperfektIndikativ": {
      "de": "er stieß",
      "lv": "Έσπρωξε"
    },
    "imperfektKonjunktiv": {
      "de": "er stieße",
      "lv": "Θα έσπρωχνε"
    },
    "partizipVergangenheit": {
      "de": "gestoßen",
      "lv": "Έσπρωξε"
    }
  },
  {
    "infinitiv": {
      "de": "streichen",
      "lv": "Να ζωγραφίζει"
    },
    "praesens": {
      "de": "er streicht",
      "lv": "Ζωγραφίζει"
    },
    "imperfektIndikativ": {
      "de": "er strich",
      "lv": "Ζωγράφιζε"
    },
    "imperfektKonjunktiv": {
      "de": "er striche",
      "lv": "Θα ζωγράφιζε"
    },
    "partizipVergangenheit": {
      "de": "gestrichen",
      "lv": "Έγχρωμος"
    }
  },
  {
    "infinitiv": {
      "de": "streiten",
      "lv": "Να μαλώνουν"
    },
    "praesens": {
      "de": "er streitet",
      "lv": "Υποστηρίζει"
    },
    "imperfektIndikativ": {
      "de": "er stritt",
      "lv": "Υποστήριζε"
    },
    "imperfektKonjunktiv": {
      "de": "er stritte",
      "lv": "Θα επιχειρηματολογούσε"
    },
    "partizipVergangenheit": {
      "de": "gestritten",
      "lv": "Υποστήριξε"
    }
  },
  {
    "infinitiv": {
      "de": "tragen",
      "lv": "Να φορέσει"
    },
    "praesens": {
      "de": "er trägt",
      "lv": "Φοράει"
    },
    "imperfektIndikativ": {
      "de": "er trug",
      "lv": "Φορούσε"
    },
    "imperfektKonjunktiv": {
      "de": "er trüge",
      "lv": "Θα φορούσε"
    },
    "partizipVergangenheit": {
      "de": "getragen",
      "lv": "Φέρεται"
    }
  },
  {
    "infinitiv": {
      "de": "treffen",
      "lv": "Να συναντηθούμε"
    },
    "praesens": {
      "de": "er trifft",
      "lv": "Συναντά"
    },
    "imperfektIndikativ": {
      "de": "er traf",
      "lv": "Συνάντησε"
    },
    "imperfektKonjunktiv": {
      "de": "er träfe",
      "lv": "Θα συναντούσε"
    },
    "partizipVergangenheit": {
      "de": "getroffen",
      "lv": "Συναντήθηκε"
    }
  },
  {
    "infinitiv": {
      "de": "treiben",
      "lv": "Οδηγώ"
    },
    "praesens": {
      "de": "er treibt",
      "lv": "Αυτός οδηγεί"
    },
    "imperfektIndikativ": {
      "de": "er trieb",
      "lv": "Οδήγησε"
    },
    "imperfektKonjunktiv": {
      "de": "er triebe",
      "lv": "Θα έκανε"
    },
    "partizipVergangenheit": {
      "de": "getrieben",
      "lv": "Οδηγείται"
    }
  },
  {
    "infinitiv": {
      "de": "treten",
      "lv": "Να μπω / να πάω"
    },
    "praesens": {
      "de": "er tritt",
      "lv": "Πατάει / πάει"
    },
    "imperfektIndikativ": {
      "de": "er trat",
      "lv": "Πάτησε / πήγε"
    },
    "imperfektKonjunktiv": {
      "de": "er träte",
      "lv": "Θα πατούσε / θα πήγαινε"
    },
    "partizipVergangenheit": {
      "de": "getreten (er ist)",
      "lv": "Μπήκε / έφυγε"
    }
  },
  {
    "infinitiv": {
      "de": "trinken",
      "lv": "Να πιει"
    },
    "praesens": {
      "de": "er trinkt",
      "lv": "Πίνει"
    },
    "imperfektIndikativ": {
      "de": "er trank",
      "lv": "Ήπιε"
    },
    "imperfektKonjunktiv": {
      "de": "er tränke",
      "lv": "Έτρεξε"
    },
    "partizipVergangenheit": {
      "de": "getrunken",
      "lv": "Μεθυσμένος"
    }
  },
  {
    "infinitiv": {
      "de": "trügen",
      "lv": "Απάτη"
    },
    "praesens": {
      "de": "er trögt",
      "lv": "Απατάει"
    },
    "imperfektIndikativ": {
      "de": "er trog",
      "lv": "Απάτησε"
    },
    "imperfektKonjunktiv": {
      "de": "er tröge",
      "lv": "Θα απατούσε"
    },
    "partizipVergangenheit": {
      "de": "getrogen",
      "lv": "Εξαπατημένοι"
    }
  },
  {
    "infinitiv": {
      "de": "tun",
      "lv": "Να κάνουμε"
    },
    "praesens": {
      "de": "er tut",
      "lv": "Κάνει"
    },
    "imperfektIndikativ": {
      "de": "er tat",
      "lv": "Το έκανε"
    },
    "imperfektKonjunktiv": {
      "de": "er täte",
      "lv": "Θα έκανε"
    },
    "partizipVergangenheit": {
      "de": "getan",
      "lv": "Γινώμενος"
    }
  },
  {
    "infinitiv": {
      "de": "verderben",
      "lv": "Να χαλάσει"
    },
    "praesens": {
      "de": "er verdirbt",
      "lv": "Χαλάει"
    },
    "imperfektIndikativ": {
      "de": "er verdarb",
      "lv": "Έσπασε"
    },
    "imperfektKonjunktiv": {
      "de": "er verdürbe",
      "lv": "Θα χαλούσε"
    },
    "partizipVergangenheit": {
      "de": "verdorben",
      "lv": "Διεφθαρμένη"
    }
  },
  {
    "infinitiv": {
      "de": "verdrießen",
      "lv": "Να αναστατώσει"
    },
    "praesens": {
      "de": "er verdrießt",
      "lv": "Προκαλεί δυσαρέσκεια"
    },
    "imperfektIndikativ": {
      "de": "er verdross",
      "lv": "Προκάλεσε οργή"
    },
    "imperfektKonjunktiv": {
      "de": "er verdrösse",
      "lv": "Θα προκαλούσε δυσαρέσκεια"
    },
    "partizipVergangenheit": {
      "de": "verdrossen",
      "lv": "Προσβεβλημένος"
    }
  },
  {
    "infinitiv": {
      "de": "vergessen",
      "lv": "Να ξεχάσω"
    },
    "praesens": {
      "de": "er vergisst",
      "lv": "Ξεχνάει"
    },
    "imperfektIndikativ": {
      "de": "er vergass",
      "lv": "Ξέχασε"
    },
    "imperfektKonjunktiv": {
      "de": "er vergäße",
      "lv": "Θα ξεχνούσε"
    },
    "partizipVergangenheit": {
      "de": "vergessen",
      "lv": "Ξεχασμένος"
    }
  },
  {
    "infinitiv": {
      "de": "verlieren",
      "lv": "Να χάσει"
    },
    "praesens": {
      "de": "er verliert",
      "lv": "Χάνει"
    },
    "imperfektIndikativ": {
      "de": "er verlor",
      "lv": "Έχασε"
    },
    "imperfektKonjunktiv": {
      "de": "er verlöre",
      "lv": "Θα έχανε"
    },
    "partizipVergangenheit": {
      "de": "verloren",
      "lv": "Χαμένος"
    }
  },
  {
    "infinitiv": {
      "de": "wachsen",
      "lv": "Να μεγαλώσει"
    },
    "praesens": {
      "de": "er wächst",
      "lv": "Μεγαλώνει"
    },
    "imperfektIndikativ": {
      "de": "er wuchs",
      "lv": "Μεγάλωσε"
    },
    "imperfektKonjunktiv": {
      "de": "er wüchse",
      "lv": "Θα μεγάλωνε"
    },
    "partizipVergangenheit": {
      "de": "gewachsen (er ist)",
      "lv": "Ενήλικος"
    }
  },
  {
    "infinitiv": {
      "de": "waschen",
      "lv": "Να πλύνετε"
    },
    "praesens": {
      "de": "er wäscht",
      "lv": "Αυτή πλένεται"
    },
    "imperfektIndikativ": {
      "de": "er wusch",
      "lv": "Έπλενε"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsche",
      "lv": "Θα έπλενε"
    },
    "partizipVergangenheit": {
      "de": "gewaschen",
      "lv": "Πλυμένο"
    }
  },
  {
    "infinitiv": {
      "de": "weben",
      "lv": "Πλέκω"
    },
    "praesens": {
      "de": "er webt",
      "lv": "Πλέκει"
    },
    "imperfektIndikativ": {
      "de": "wob",
      "lv": "Έπλεκε"
    },
    "imperfektKonjunktiv": {
      "de": "wob",
      "lv": "Έπλεκε"
    },
    "partizipVergangenheit": {
      "de": "gewoben",
      "lv": "Υφαντός"
    }
  },
  {
    "infinitiv": {
      "de": "weichen",
      "lv": "Υποχώρηση"
    },
    "praesens": {
      "de": "er weicht",
      "lv": "Υποχωρεί"
    },
    "imperfektIndikativ": {
      "de": "er wich",
      "lv": "Υποχώρησε"
    },
    "imperfektKonjunktiv": {
      "de": "er wiche",
      "lv": "Θα έκανε πίσω"
    },
    "partizipVergangenheit": {
      "de": "gewichen (er ist)",
      "lv": "Υποχώρησε"
    }
  },
  {
    "infinitiv": {
      "de": "weisen",
      "lv": "Να δείξει"
    },
    "praesens": {
      "de": "er weist",
      "lv": "Δείχνει"
    },
    "imperfektIndikativ": {
      "de": "er wies",
      "lv": "Έδειξε"
    },
    "imperfektKonjunktiv": {
      "de": "er wiese",
      "lv": "Θα έδειχνε"
    },
    "partizipVergangenheit": {
      "de": "gewiesen",
      "lv": "Φαίνεται"
    }
  },
  {
    "infinitiv": {
      "de": "wenden",
      "lv": "Να στρίψει"
    },
    "praesens": {
      "de": "er wendet",
      "lv": "Γυρίζει"
    },
    "imperfektIndikativ": {
      "de": "er wandte / es wendete",
      "lv": "Γύρισε"
    },
    "imperfektKonjunktiv": {
      "de": "er wendete",
      "lv": "Θα γύριζε"
    },
    "partizipVergangenheit": {
      "de": "gewandt / gewendet",
      "lv": "Περιστράφηκε"
    }
  },
  {
    "infinitiv": {
      "de": "werben",
      "lv": "Να προτείνει"
    },
    "praesens": {
      "de": "er wirbt",
      "lv": "Φλερτάρει"
    },
    "imperfektIndikativ": {
      "de": "er warb",
      "lv": "Πρότεινε"
    },
    "imperfektKonjunktiv": {
      "de": "er würbe",
      "lv": "Θα πρότεινε"
    },
    "partizipVergangenheit": {
      "de": "geworben",
      "lv": "Φλερτ"
    }
  },
  {
    "infinitiv": {
      "de": "werden",
      "lv": "Να πάρει"
    },
    "praesens": {
      "de": "er wird",
      "lv": "Μπορεί"
    },
    "imperfektIndikativ": {
      "de": "wurde",
      "lv": "Πήρε"
    },
    "imperfektKonjunktiv": {
      "de": "wurde",
      "lv": "Πήρε"
    },
    "partizipVergangenheit": {
      "de": "geworden",
      "lv": "Έλαβε"
    }
  },
  {
    "infinitiv": {
      "de": "werfen",
      "lv": "Να ρίξει"
    },
    "praesens": {
      "de": "er wirft",
      "lv": "Ρίχνει"
    },
    "imperfektIndikativ": {
      "de": "er warf",
      "lv": "Πέταξε"
    },
    "imperfektKonjunktiv": {
      "de": "er würfe",
      "lv": "Θα έριχνε"
    },
    "partizipVergangenheit": {
      "de": "geworfen",
      "lv": "Πεταμένο"
    }
  },
  {
    "infinitiv": {
      "de": "wiegen",
      "lv": "Να εξετάσει"
    },
    "praesens": {
      "de": "er wiegt",
      "lv": "Ζυγίζει"
    },
    "imperfektIndikativ": {
      "de": "er wog",
      "lv": "Ζύγιζε"
    },
    "imperfektKonjunktiv": {
      "de": "er wöge",
      "lv": "Θα ζύγιζε"
    },
    "partizipVergangenheit": {
      "de": "gewogen",
      "lv": "Σταθμισμένη"
    }
  },
  {
    "infinitiv": {
      "de": "winden",
      "lv": "Να υφαίνει"
    },
    "praesens": {
      "de": "er windet",
      "lv": "Αυτή πλεξούδες"
    },
    "imperfektIndikativ": {
      "de": "er wand",
      "lv": "Έπλεξε εκείνη"
    },
    "imperfektKonjunktiv": {
      "de": "er wände",
      "lv": "Θα έπλεκε"
    },
    "partizipVergangenheit": {
      "de": "gewunden",
      "lv": "Πλεγμένο"
    }
  },
  {
    "infinitiv": {
      "de": "wissen",
      "lv": "Να ξέρεις"
    },
    "praesens": {
      "de": "er weiß",
      "lv": "Ξέρει"
    },
    "imperfektIndikativ": {
      "de": "er wusste",
      "lv": "Ήξερε"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsste",
      "lv": "Θα ήξερε"
    },
    "partizipVergangenheit": {
      "de": "gewusst",
      "lv": "Βέβαιος"
    }
  },
  {
    "infinitiv": {
      "de": "wollen",
      "lv": "Θέλουν να"
    },
    "praesens": {
      "de": "er will",
      "lv": "Θέλει να"
    },
    "imperfektIndikativ": {
      "de": "wollte",
      "lv": "Ήθελε"
    },
    "imperfektKonjunktiv": {
      "de": "wollte",
      "lv": "Ήθελε"
    },
    "partizipVergangenheit": {
      "de": "gewollt",
      "lv": "Καταζητούμενος"
    }
  },
  {
    "infinitiv": {
      "de": "wringen",
      "lv": "Στρίβω / στύβω"
    },
    "praesens": {
      "de": "er wringt",
      "lv": "Στρίβει"
    },
    "imperfektIndikativ": {
      "de": "wrang",
      "lv": "Έστριψε"
    },
    "imperfektKonjunktiv": {
      "de": "wrang",
      "lv": "Έστριψε"
    },
    "partizipVergangenheit": {
      "de": "gewrungen",
      "lv": "Στριμμένα"
    }
  },
  {
    "infinitiv": {
      "de": "zeihen",
      "lv": "Να κατηγορήσει"
    },
    "praesens": {
      "de": "er zeiht",
      "lv": "Κατηγορεί"
    },
    "imperfektIndikativ": {
      "de": "zieh",
      "lv": "Κατηγόρησε"
    },
    "imperfektKonjunktiv": {
      "de": "zieh",
      "lv": "Κατηγόρησε"
    },
    "partizipVergangenheit": {
      "de": "geziehen",
      "lv": "Κατηγορούμενος"
    }
  },
  {
    "infinitiv": {
      "de": "ziehen",
      "lv": "Να τραβήξει"
    },
    "praesens": {
      "de": "er zieht",
      "lv": "Τραβάει"
    },
    "imperfektIndikativ": {
      "de": "er zog",
      "lv": "Τράβηξε"
    },
    "imperfektKonjunktiv": {
      "de": "er zöge",
      "lv": "Θα τραβούσε"
    },
    "partizipVergangenheit": {
      "de": "gezogen",
      "lv": "Τραβηγμένο"
    }
  },
  {
    "infinitiv": {
      "de": "zwingen",
      "lv": "Να αναγκάσει"
    },
    "praesens": {
      "de": "er zwingt",
      "lv": "Αναγκάζει"
    },
    "imperfektIndikativ": {
      "de": "er zwang",
      "lv": "Ανάγκασε"
    },
    "imperfektKonjunktiv": {
      "de": "er zwänge",
      "lv": "Θα ανάγκαζε"
    },
    "partizipVergangenheit": {
      "de": "gezwungen",
      "lv": "Αναγκαστικά"
    }
  },
  {
    "infinitiv": {
      "de": "empfangen",
      "lv": "Να δεχτεί"
    },
    "praesens": {
      "de": "er empfängt",
      "lv": "Δέχεται"
    },
    "imperfektIndikativ": {
      "de": "er empfing",
      "lv": "Δέχτηκε"
    },
    "imperfektKonjunktiv": {
      "de": "er empfinge",
      "lv": "Θα δεχόταν"
    },
    "partizipVergangenheit": {
      "de": "empfangen",
      "lv": "Δεκτός"
    }
  },
  {
    "infinitiv": {
      "de": "erwägen",
      "lv": "Να εξετάσει"
    },
    "praesens": {
      "de": "er erwägt",
      "lv": "Ζυγίζει"
    },
    "imperfektIndikativ": {
      "de": "er erwog",
      "lv": "Ζύγιζε"
    },
    "imperfektKonjunktiv": {
      "de": "er erwöge",
      "lv": "Θα ζύγιζε"
    },
    "partizipVergangenheit": {
      "de": "erwogen",
      "lv": "Σταθμισμένη"
    }
  },
  {
    "infinitiv": {
      "de": "fechten",
      "lv": "Περιφράσσω / πολεμώ"
    },
    "praesens": {
      "de": "er ficht",
      "lv": "Παλεύει"
    },
    "imperfektIndikativ": {
      "de": "er focht",
      "lv": "Πολέμησε"
    },
    "imperfektKonjunktiv": {
      "de": "er föchte",
      "lv": "Θα πολεμούσε"
    },
    "partizipVergangenheit": {
      "de": "gefochten",
      "lv": "Πολέμησε"
    }
  },
  {
    "infinitiv": {
      "de": "flechten",
      "lv": "Να υφαίνει"
    },
    "praesens": {
      "de": "er flicht",
      "lv": "Αυτή πλεξούδες"
    },
    "imperfektIndikativ": {
      "de": "er flocht",
      "lv": "Έπλεξε εκείνη"
    },
    "imperfektKonjunktiv": {
      "de": "er flöchte",
      "lv": "Θα έπλεκε"
    },
    "partizipVergangenheit": {
      "de": "geflochten",
      "lv": "Πλεγμένο"
    }
  },
  {
    "infinitiv": {
      "de": "hangen",
      "lv": "Να κρεμάσει"
    },
    "praesens": {
      "de": "er hängt",
      "lv": "Κρέμεται"
    },
    "imperfektIndikativ": {
      "de": "er hing",
      "lv": "Κρεμάστηκε"
    },
    "imperfektKonjunktiv": {
      "de": "er hinge",
      "lv": "Θα κρεμόταν"
    },
    "partizipVergangenheit": {
      "de": "gehangen",
      "lv": "Έκλεισε το τηλέφωνο"
    }
  },
  {
    "infinitiv": {
      "de": "spalten",
      "lv": "Να σπάσει"
    },
    "praesens": {
      "de": "er spaltet",
      "lv": "Σπάει"
    },
    "imperfektIndikativ": {
      "de": "er spaltete",
      "lv": "Έσπασε"
    },
    "imperfektKonjunktiv": {
      "de": "er spaltete",
      "lv": "Έσπασε"
    },
    "partizipVergangenheit": {
      "de": "gespalten",
      "lv": "Σπασμένος"
    }
  },
  {
    "infinitiv": {
      "de": "verzeihen",
      "lv": "Να συγχωρήσει"
    },
    "praesens": {
      "de": "er verzeiht",
      "lv": "Συγχωρεί"
    },
    "imperfektIndikativ": {
      "de": "er verzieh",
      "lv": "Συγχώρεσε"
    },
    "imperfektKonjunktiv": {
      "de": "er verziehe",
      "lv": "Θα συγχωρούσε"
    },
    "partizipVergangenheit": {
      "de": "verziehen",
      "lv": "Συγχωρεμένος"
    }
  }
];

window.VERB_ENTRIES = VERB_ENTRIES;

const VERB_ENTRIES = [
  {
    "infinitiv": {
      "de": "backen",
      "lv": "ψήνω"
    },
    "praesens": {
      "de": "er bäckt",
      "lv": "αυτός ψήνει"
    },
    "imperfektIndikativ": {
      "de": "er buk",
      "lv": "αυτός έψησε"
    },
    "imperfektKonjunktiv": {
      "de": "er büke",
      "lv": "αυτός θα έψηνε"
    },
    "partizipVergangenheit": {
      "de": "gebacken",
      "lv": "ψημένος"
    }
  },
  {
    "infinitiv": {
      "de": "befehlen",
      "lv": "διατάζω"
    },
    "praesens": {
      "de": "er befiehlt",
      "lv": "αυτός διατάζει"
    },
    "imperfektIndikativ": {
      "de": "er befahl",
      "lv": "αυτός διέταξε"
    },
    "imperfektKonjunktiv": {
      "de": "er beföhle",
      "lv": "αυτός θα διέταζε"
    },
    "partizipVergangenheit": {
      "de": "befohlen",
      "lv": "έχει διατάξει"
    }
  },
  {
    "infinitiv": {
      "de": "beginnen",
      "lv": "αρχίζω"
    },
    "praesens": {
      "de": "er beginnt",
      "lv": "αυτός αρχίζει"
    },
    "imperfektIndikativ": {
      "de": "er begann",
      "lv": "αυτός άρχισε"
    },
    "imperfektKonjunktiv": {
      "de": "er begönne / er begänne",
      "lv": "αυτός θα άρχιζε"
    },
    "partizipVergangenheit": {
      "de": "begonnen",
      "lv": "έχει αρχίσει"
    }
  },
  {
    "infinitiv": {
      "de": "beißen",
      "lv": "δαγκώνω"
    },
    "praesens": {
      "de": "er beißt",
      "lv": "αυτός δαγκώνει"
    },
    "imperfektIndikativ": {
      "de": "er biss",
      "lv": "αυτός δάγκωσε"
    },
    "imperfektKonjunktiv": {
      "de": "er bisse",
      "lv": "αυτός θα δάγκωνε"
    },
    "partizipVergangenheit": {
      "de": "gebissen",
      "lv": "δαγκωμένος"
    }
  },
  {
    "infinitiv": {
      "de": "bergen",
      "lv": "σώζω / κρύβω"
    },
    "praesens": {
      "de": "er birgt",
      "lv": "αυτός σώζει / κρύβει"
    },
    "imperfektIndikativ": {
      "de": "er barg",
      "lv": "αυτός έσωσε / έκρυψε"
    },
    "imperfektKonjunktiv": {
      "de": "er bürge / er bärge",
      "lv": "αυτός θα έσωζε / θα έκρυβε"
    },
    "partizipVergangenheit": {
      "de": "geborgen",
      "lv": "σωσμένος / κρυμμένος"
    }
  },
  {
    "infinitiv": {
      "de": "bersten",
      "lv": "σκάω"
    },
    "praesens": {
      "de": "er birst",
      "lv": "αυτός σκάει"
    },
    "imperfektIndikativ": {
      "de": "er barst / er borst",
      "lv": "αυτός έσκασε"
    },
    "imperfektKonjunktiv": {
      "de": "er bärste / er börste",
      "lv": "αυτός θα έσκαγε"
    },
    "partizipVergangenheit": {
      "de": "geborsten (er ist)",
      "lv": "σκασμένος"
    }
  },
  {
    "infinitiv": {
      "de": "bewegen",
      "lv": "παρακινώ"
    },
    "praesens": {
      "de": "er bewegt",
      "lv": "αυτός παρακινεί"
    },
    "imperfektIndikativ": {
      "de": "er bewog",
      "lv": "αυτός παρακίνησε"
    },
    "imperfektKonjunktiv": {
      "de": "er bewöge",
      "lv": "αυτός θα παρακινούσε"
    },
    "partizipVergangenheit": {
      "de": "bewogen",
      "lv": "έχει παρακινήσει"
    }
  },
  {
    "infinitiv": {
      "de": "biegen",
      "lv": "λυγίζω"
    },
    "praesens": {
      "de": "er biegt",
      "lv": "αυτός λυγίζει"
    },
    "imperfektIndikativ": {
      "de": "er bog",
      "lv": "αυτός λύγισε"
    },
    "imperfektKonjunktiv": {
      "de": "er böge",
      "lv": "αυτός θα λύγιζε"
    },
    "partizipVergangenheit": {
      "de": "gebogen",
      "lv": "λυγισμένος"
    }
  },
  {
    "infinitiv": {
      "de": "bieten",
      "lv": "προσφέρω"
    },
    "praesens": {
      "de": "er bietet",
      "lv": "αυτός προσφέρει"
    },
    "imperfektIndikativ": {
      "de": "er bot",
      "lv": "αυτός πρόσφερε"
    },
    "imperfektKonjunktiv": {
      "de": "er böte",
      "lv": "αυτός θα πρόσφερε"
    },
    "partizipVergangenheit": {
      "de": "geboten",
      "lv": "προσφερμένος"
    }
  },
  {
    "infinitiv": {
      "de": "binden",
      "lv": "δένω"
    },
    "praesens": {
      "de": "er bindet",
      "lv": "αυτός δένει"
    },
    "imperfektIndikativ": {
      "de": "er band",
      "lv": "αυτός έδεσε"
    },
    "imperfektKonjunktiv": {
      "de": "er bände",
      "lv": "αυτός θα έδενε"
    },
    "partizipVergangenheit": {
      "de": "gebunden",
      "lv": "δεμένος"
    }
  },
  {
    "infinitiv": {
      "de": "bitten",
      "lv": "παρακαλώ"
    },
    "praesens": {
      "de": "er bittet",
      "lv": "αυτός παρακαλεί"
    },
    "imperfektIndikativ": {
      "de": "er bat",
      "lv": "αυτός παρακάλεσε"
    },
    "imperfektKonjunktiv": {
      "de": "er bäte",
      "lv": "αυτός θα παρακαλούσε"
    },
    "partizipVergangenheit": {
      "de": "gebeten",
      "lv": "έχει παρακαλέσει"
    }
  },
  {
    "infinitiv": {
      "de": "blasen",
      "lv": "φυσάω"
    },
    "praesens": {
      "de": "er bläst",
      "lv": "αυτός φυσάει"
    },
    "imperfektIndikativ": {
      "de": "er blies",
      "lv": "αυτός φύσηξε"
    },
    "imperfektKonjunktiv": {
      "de": "er bliese",
      "lv": "αυτός θα φυσούσε"
    },
    "partizipVergangenheit": {
      "de": "geblasen",
      "lv": "έχει φυσήξει"
    }
  },
  {
    "infinitiv": {
      "de": "gären",
      "lv": "βράζω"
    },
    "praesens": {
      "de": "es gärt",
      "lv": "αυτό βράζει"
    },
    "imperfektIndikativ": {
      "de": "es gor / es gärte",
      "lv": "αυτό έβρασε"
    },
    "imperfektKonjunktiv": {
      "de": "es göre / es gärte",
      "lv": "αυτό θα έβραζε"
    },
    "partizipVergangenheit": {
      "de": "gegoren / gegärt",
      "lv": "έχει βράσει"
    }
  },
  {
    "infinitiv": {
      "de": "gebären",
      "lv": "γεννώ"
    },
    "praesens": {
      "de": "sie gebiert",
      "lv": "αυτή γεννά"
    },
    "imperfektIndikativ": {
      "de": "sie gebar",
      "lv": "αυτή γέννησε"
    },
    "imperfektKonjunktiv": {
      "de": "sie gebäre",
      "lv": "αυτή θα γεννούσε"
    },
    "partizipVergangenheit": {
      "de": "geboren",
      "lv": "γεννημένος"
    }
  },
  {
    "infinitiv": {
      "de": "gelingen",
      "lv": "πετυχαίνω"
    },
    "praesens": {
      "de": "es gelingt",
      "lv": "αυτό πετυχαίνει"
    },
    "imperfektIndikativ": {
      "de": "es gelang",
      "lv": "αυτό πέτυχε"
    },
    "imperfektKonjunktiv": {
      "de": "es gelänge",
      "lv": "αυτό θα πετύχαινε"
    },
    "partizipVergangenheit": {
      "de": "gelungen (es ist)",
      "lv": "πετυχημένος"
    }
  },
  {
    "infinitiv": {
      "de": "gelten",
      "lv": "χρησιμεύω / ισχύω"
    },
    "praesens": {
      "de": "er gilt",
      "lv": "αυτός χρησιμεύει / ισχύει"
    },
    "imperfektIndikativ": {
      "de": "er galt",
      "lv": "αυτός χρησίμευσε / ίσχυσε"
    },
    "imperfektKonjunktiv": {
      "de": "er gölte / es gälte",
      "lv": "αυτός θα χρησίμευε / θα ίσχυε"
    },
    "partizipVergangenheit": {
      "de": "gegolten",
      "lv": "έχει χρησιμεύσει / έχει ισχύσει"
    }
  },
  {
    "infinitiv": {
      "de": "genesen",
      "lv": "αναρρώνω"
    },
    "praesens": {
      "de": "er genest",
      "lv": "αυτός αναρρώνει"
    },
    "imperfektIndikativ": {
      "de": "er genas",
      "lv": "αυτός ανάρρωσε"
    },
    "imperfektKonjunktiv": {
      "de": "er genäse",
      "lv": "αυτός θα ανάρρωνε"
    },
    "partizipVergangenheit": {
      "de": "genesen (er ist)",
      "lv": "έχει αναρρώσει"
    }
  },
  {
    "infinitiv": {
      "de": "genießen",
      "lv": "απολαμβάνω"
    },
    "praesens": {
      "de": "er genießt",
      "lv": "αυτός απολαμβάνει"
    },
    "imperfektIndikativ": {
      "de": "er genoss",
      "lv": "αυτός απόλαυσε"
    },
    "imperfektKonjunktiv": {
      "de": "er genösse",
      "lv": "αυτός θα απολάμβανε"
    },
    "partizipVergangenheit": {
      "de": "genossen",
      "lv": "έχει απολαύσει"
    }
  },
  {
    "infinitiv": {
      "de": "geschehen",
      "lv": "συμβαίνει"
    },
    "praesens": {
      "de": "es geschieht",
      "lv": "αυτό συμβαίνει"
    },
    "imperfektIndikativ": {
      "de": "es geschah",
      "lv": "αυτό συνέβη"
    },
    "imperfektKonjunktiv": {
      "de": "es geschähe",
      "lv": "αυτό θα συνέβαινε"
    },
    "partizipVergangenheit": {
      "de": "geschehen (es ist)",
      "lv": "έχει συμβεί"
    }
  },
  {
    "infinitiv": {
      "de": "gießen",
      "lv": "χύνω"
    },
    "praesens": {
      "de": "er gießt",
      "lv": "αυτός χύνει"
    },
    "imperfektIndikativ": {
      "de": "er goss",
      "lv": "αυτός έχυσε"
    },
    "imperfektKonjunktiv": {
      "de": "er gösse",
      "lv": "αυτός θα έχυνε"
    },
    "partizipVergangenheit": {
      "de": "gegossen",
      "lv": "χυμένος"
    }
  },
  {
    "infinitiv": {
      "de": "gleichen",
      "lv": "μοιάζω"
    },
    "praesens": {
      "de": "er gleicht",
      "lv": "αυτός μοιάζει"
    },
    "imperfektIndikativ": {
      "de": "er glich",
      "lv": "αυτός έμοιασε"
    },
    "imperfektKonjunktiv": {
      "de": "er gliche",
      "lv": "αυτός θα έμοιαζε"
    },
    "partizipVergangenheit": {
      "de": "geglichen",
      "lv": "έχει μοιάσει"
    }
  },
  {
    "infinitiv": {
      "de": "gleiten",
      "lv": "γλιστρώ"
    },
    "praesens": {
      "de": "er gleitet",
      "lv": "αυτός γλιστρά"
    },
    "imperfektIndikativ": {
      "de": "er glitt",
      "lv": "αυτός γλίστρησε"
    },
    "imperfektKonjunktiv": {
      "de": "er glitte",
      "lv": "αυτός θα γλιστρούσε"
    },
    "partizipVergangenheit": {
      "de": "geglitten (er ist)",
      "lv": "έχει γλιστρήσει"
    }
  },
  {
    "infinitiv": {
      "de": "glimmen",
      "lv": "κορώνω"
    },
    "praesens": {
      "de": "er glimmt",
      "lv": "αυτός κορώνει"
    },
    "imperfektIndikativ": {
      "de": "er glimmte / glomm",
      "lv": "αυτός κόρωσε"
    },
    "imperfektKonjunktiv": {
      "de": "er glimmte",
      "lv": "αυτός θα κόρωνε"
    },
    "partizipVergangenheit": {
      "de": "geglimmt / geglommen",
      "lv": "κορωμένος"
    }
  },
  {
    "infinitiv": {
      "de": "graben",
      "lv": "σκάβω"
    },
    "praesens": {
      "de": "er gräbt",
      "lv": "αυτός σκάβει"
    },
    "imperfektIndikativ": {
      "de": "er grub",
      "lv": "αυτός έσκαψε"
    },
    "imperfektKonjunktiv": {
      "de": "er grübe",
      "lv": "αυτός θα έσκαβε"
    },
    "partizipVergangenheit": {
      "de": "gegraben",
      "lv": "σκαμμένος"
    }
  },
  {
    "infinitiv": {
      "de": "greifen",
      "lv": "αρπάζω"
    },
    "praesens": {
      "de": "er greift",
      "lv": "αυτός αρπάζει"
    },
    "imperfektIndikativ": {
      "de": "er griff",
      "lv": "αυτός άρπαξε"
    },
    "imperfektKonjunktiv": {
      "de": "er griffe",
      "lv": "αυτός θα άρπαζε"
    },
    "partizipVergangenheit": {
      "de": "gegriffen",
      "lv": "έχει αρπάξει"
    }
  },
  {
    "infinitiv": {
      "de": "hauen",
      "lv": "πελεκώ"
    },
    "praesens": {
      "de": "er haut",
      "lv": "αυτός πελεκά"
    },
    "imperfektIndikativ": {
      "de": "er hieb",
      "lv": "αυτός πελέκησε"
    },
    "imperfektKonjunktiv": {
      "de": "er hiebe",
      "lv": "αυτός θα πελεκούσε"
    },
    "partizipVergangenheit": {
      "de": "gehauen",
      "lv": "πελεκημένος"
    }
  },
  {
    "infinitiv": {
      "de": "heben",
      "lv": "σηκώνω"
    },
    "praesens": {
      "de": "er hebt",
      "lv": "αυτός σηκώνει"
    },
    "imperfektIndikativ": {
      "de": "er hob",
      "lv": "αυτός σήκωσε"
    },
    "imperfektKonjunktiv": {
      "de": "er höbe",
      "lv": "αυτός θα σήκωνε"
    },
    "partizipVergangenheit": {
      "de": "gehoben",
      "lv": "σηκωμένος"
    }
  },
  {
    "infinitiv": {
      "de": "kennen",
      "lv": "γνωρίζω"
    },
    "praesens": {
      "de": "er kennt",
      "lv": "αυτός γνωρίζει"
    },
    "imperfektIndikativ": {
      "de": "kannte",
      "lv": "αυτός γνώρισε"
    },
    "imperfektKonjunktiv": {
      "de": "kannte",
      "lv": "αυτός θα γνώριζε"
    },
    "partizipVergangenheit": {
      "de": "gekannt",
      "lv": "έχει γνωρίσει"
    }
  },
  {
    "infinitiv": {
      "de": "klingen",
      "lv": "ηχώ"
    },
    "praesens": {
      "de": "er klingt",
      "lv": "αυτός ηχεί"
    },
    "imperfektIndikativ": {
      "de": "er klang",
      "lv": "αυτός ήχησε"
    },
    "imperfektKonjunktiv": {
      "de": "er klänge",
      "lv": "αυτός θα ηχούσε"
    },
    "partizipVergangenheit": {
      "de": "geklungen",
      "lv": "έχει ηχήσει"
    }
  },
  {
    "infinitiv": {
      "de": "kneifen",
      "lv": "τσιμπώ"
    },
    "praesens": {
      "de": "er kneift",
      "lv": "αυτός τσιμπά"
    },
    "imperfektIndikativ": {
      "de": "er kniff",
      "lv": "αυτός τσίμπησε"
    },
    "imperfektKonjunktiv": {
      "de": "er kniffe",
      "lv": "αυτός θα τσιμπούσε"
    },
    "partizipVergangenheit": {
      "de": "gekniffen",
      "lv": "τσιμπημένος"
    }
  },
  {
    "infinitiv": {
      "de": "bleiben",
      "lv": "μένω"
    },
    "praesens": {
      "de": "er bleibt",
      "lv": "αυτός μένει"
    },
    "imperfektIndikativ": {
      "de": "er blieb",
      "lv": "αυτός έμεινε"
    },
    "imperfektKonjunktiv": {
      "de": "er bliebe",
      "lv": "αυτός θα έμενε"
    },
    "partizipVergangenheit": {
      "de": "geblieben (er ist)",
      "lv": "έχει μείνει"
    }
  },
  {
    "infinitiv": {
      "de": "bleichen",
      "lv": "ξεθωριάζω"
    },
    "praesens": {
      "de": "er bleicht",
      "lv": "αυτός ξεθωριάζει"
    },
    "imperfektIndikativ": {
      "de": "blich",
      "lv": "αυτός ξεθώριασε"
    },
    "imperfektKonjunktiv": {
      "de": "blich",
      "lv": "αυτός θα ξεθώριαζε"
    },
    "partizipVergangenheit": {
      "de": "geblichen",
      "lv": "ξεθωριασμένος"
    }
  },
  {
    "infinitiv": {
      "de": "braten",
      "lv": "τηγανίζω"
    },
    "praesens": {
      "de": "er brät",
      "lv": "αυτός τηγανίζει"
    },
    "imperfektIndikativ": {
      "de": "er briet",
      "lv": "αυτός τηγάνισε"
    },
    "imperfektKonjunktiv": {
      "de": "er briete",
      "lv": "αυτός θα τηγάνιζε"
    },
    "partizipVergangenheit": {
      "de": "gebraten",
      "lv": "τηγανισμένος"
    }
  },
  {
    "infinitiv": {
      "de": "brechen",
      "lv": "σπάζω"
    },
    "praesens": {
      "de": "er bricht",
      "lv": "αυτός σπάζει"
    },
    "imperfektIndikativ": {
      "de": "er brach",
      "lv": "αυτός έσπασε"
    },
    "imperfektKonjunktiv": {
      "de": "er bräche",
      "lv": "αυτός θα έσπαζε"
    },
    "partizipVergangenheit": {
      "de": "gebrochen",
      "lv": "σπασμένος"
    }
  },
  {
    "infinitiv": {
      "de": "brennen",
      "lv": "καίγομαι"
    },
    "praesens": {
      "de": "er brennt",
      "lv": "αυτός καίγεται"
    },
    "imperfektIndikativ": {
      "de": "brannte",
      "lv": "αυτός κάηκε"
    },
    "imperfektKonjunktiv": {
      "de": "brannte",
      "lv": "αυτός θα καιγόταν"
    },
    "partizipVergangenheit": {
      "de": "gebrannt",
      "lv": "καμένος"
    }
  },
  {
    "infinitiv": {
      "de": "bringen",
      "lv": "φέρνω"
    },
    "praesens": {
      "de": "er bringt",
      "lv": "αυτός φέρνει"
    },
    "imperfektIndikativ": {
      "de": "er brachte",
      "lv": "αυτός έφερε"
    },
    "imperfektKonjunktiv": {
      "de": "er brächte",
      "lv": "αυτός θα έφερνε"
    },
    "partizipVergangenheit": {
      "de": "gebracht",
      "lv": "φερμένος"
    }
  },
  {
    "infinitiv": {
      "de": "denken",
      "lv": "σκέφτομαι"
    },
    "praesens": {
      "de": "er denkt",
      "lv": "αυτός σκέφτεται"
    },
    "imperfektIndikativ": {
      "de": "er dachte",
      "lv": "αυτός σκέφτηκε"
    },
    "imperfektKonjunktiv": {
      "de": "er dächte",
      "lv": "αυτός θα σκεφτόταν"
    },
    "partizipVergangenheit": {
      "de": "gedacht",
      "lv": "έχει σκεφτεί"
    }
  },
  {
    "infinitiv": {
      "de": "dingen",
      "lv": "προσλαμβάνω / συμφωνώ"
    },
    "praesens": {
      "de": "er dingt",
      "lv": "αυτός προσλαμβάνει / συμφωνεί"
    },
    "imperfektIndikativ": {
      "de": "dingte",
      "lv": "αυτός προσέλαβε / συμφώνησε"
    },
    "imperfektKonjunktiv": {
      "de": "dingte",
      "lv": "αυτός θα προσλάμβανε / θα συμφωνούσε"
    },
    "partizipVergangenheit": {
      "de": "gedungen",
      "lv": "έχει προσλάβει / έχει συμφωνήσει"
    }
  },
  {
    "infinitiv": {
      "de": "dreschen",
      "lv": "αλωνίζω"
    },
    "praesens": {
      "de": "er drischt",
      "lv": "αυτός αλωνίζει"
    },
    "imperfektIndikativ": {
      "de": "er drasch / er drosch",
      "lv": "αυτός αλώνισε"
    },
    "imperfektKonjunktiv": {
      "de": "er dräsche / er drösche",
      "lv": "αυτός θα αλώνιζε"
    },
    "partizipVergangenheit": {
      "de": "gedroschen",
      "lv": "αλωνισμένος"
    }
  },
  {
    "infinitiv": {
      "de": "dringen",
      "lv": "διεισδύω"
    },
    "praesens": {
      "de": "er dringt",
      "lv": "αυτός διεισδύει"
    },
    "imperfektIndikativ": {
      "de": "er drang",
      "lv": "αυτός διείσδυσε"
    },
    "imperfektKonjunktiv": {
      "de": "er dränge",
      "lv": "αυτός θα διείσδυε"
    },
    "partizipVergangenheit": {
      "de": "gedrungen (er ist)",
      "lv": "έχει διεισδύσει"
    }
  },
  {
    "infinitiv": {
      "de": "dünken",
      "lv": "φαίνομαι"
    },
    "praesens": {
      "de": "es dünkt",
      "lv": "αυτό φαίνεται"
    },
    "imperfektIndikativ": {
      "de": "deuchte",
      "lv": "αυτό φάνηκε"
    },
    "imperfektKonjunktiv": {
      "de": "deuchte",
      "lv": "αυτό θα φαινόταν"
    },
    "partizipVergangenheit": {
      "de": "gedünkt",
      "lv": "έχει φανεί"
    }
  },
  {
    "infinitiv": {
      "de": "dürfen",
      "lv": "μπορώ"
    },
    "praesens": {
      "de": "er darf",
      "lv": "αυτός μπορεί"
    },
    "imperfektIndikativ": {
      "de": "durfte",
      "lv": "αυτός μπόρεσε"
    },
    "imperfektKonjunktiv": {
      "de": "durfte",
      "lv": "αυτός θα μπορούσε"
    },
    "partizipVergangenheit": {
      "de": "gedurft",
      "lv": "έχει μπορέσει"
    }
  },
  {
    "infinitiv": {
      "de": "empfehlen",
      "lv": "συνιστώ"
    },
    "praesens": {
      "de": "er empfiehlt",
      "lv": "αυτός συνιστά"
    },
    "imperfektIndikativ": {
      "de": "er empfahl",
      "lv": "αυτός συνέστησε"
    },
    "imperfektKonjunktiv": {
      "de": "er empfähle / er empföhle",
      "lv": "αυτός θα συνιστούσε"
    },
    "partizipVergangenheit": {
      "de": "empfohlen",
      "lv": "συστημένος"
    }
  },
  {
    "infinitiv": {
      "de": "empfinden",
      "lv": "αισθάνομαι"
    },
    "praesens": {
      "de": "er empfindet",
      "lv": "αυτός αισθάνεται"
    },
    "imperfektIndikativ": {
      "de": "er empfand",
      "lv": "αυτός αισθάνθηκε"
    },
    "imperfektKonjunktiv": {
      "de": "er empfände",
      "lv": "αυτός θα αισθανόταν"
    },
    "partizipVergangenheit": {
      "de": "empfunden",
      "lv": "έχει αισθανθεί"
    }
  },
  {
    "infinitiv": {
      "de": "erlöschen",
      "lv": "σβήνω"
    },
    "praesens": {
      "de": "er erlischt",
      "lv": "αυτός σβήνει"
    },
    "imperfektIndikativ": {
      "de": "er erlosch",
      "lv": "αυτός έσβησε"
    },
    "imperfektKonjunktiv": {
      "de": "er erlösche",
      "lv": "αυτός θα έσβηνε"
    },
    "partizipVergangenheit": {
      "de": "erloschen (er ist)",
      "lv": "σβησμένος"
    }
  },
  {
    "infinitiv": {
      "de": "erschrecken",
      "lv": "τρομάζω"
    },
    "praesens": {
      "de": "er erschrickt",
      "lv": "αυτός τρομάζει"
    },
    "imperfektIndikativ": {
      "de": "er erschrak",
      "lv": "αυτός τρόμαξε"
    },
    "imperfektKonjunktiv": {
      "de": "er erschräke",
      "lv": "αυτός θα τρόμαζε"
    },
    "partizipVergangenheit": {
      "de": "erschrocken (er ist)",
      "lv": "τρομαγμένος"
    }
  },
  {
    "infinitiv": {
      "de": "essen",
      "lv": "τρώω"
    },
    "praesens": {
      "de": "er isst",
      "lv": "αυτός τρώει"
    },
    "imperfektIndikativ": {
      "de": "er ass",
      "lv": "αυτός έφαγε"
    },
    "imperfektKonjunktiv": {
      "de": "er äße",
      "lv": "αυτός θα έτρωγε"
    },
    "partizipVergangenheit": {
      "de": "gegessen",
      "lv": "φαγωμένος"
    }
  },
  {
    "infinitiv": {
      "de": "fahren",
      "lv": "οδηγώ"
    },
    "praesens": {
      "de": "er fährt",
      "lv": "αυτός οδηγεί"
    },
    "imperfektIndikativ": {
      "de": "er fuhr",
      "lv": "αυτός οδήγησε"
    },
    "imperfektKonjunktiv": {
      "de": "er führe",
      "lv": "αυτός θα οδηγούσε"
    },
    "partizipVergangenheit": {
      "de": "gefahren (er ist)",
      "lv": "έχει οδηγήσει"
    }
  },
  {
    "infinitiv": {
      "de": "fallen",
      "lv": "πέφτω"
    },
    "praesens": {
      "de": "er fällt",
      "lv": "αυτός πέφτει"
    },
    "imperfektIndikativ": {
      "de": "er fiel",
      "lv": "αυτός έπεσε"
    },
    "imperfektKonjunktiv": {
      "de": "er fiele",
      "lv": "αυτός θα έπεφτε"
    },
    "partizipVergangenheit": {
      "de": "gefallen (er ist)",
      "lv": "πεσμένος"
    }
  },
  {
    "infinitiv": {
      "de": "fangen",
      "lv": "πιάνω"
    },
    "praesens": {
      "de": "er fängt",
      "lv": "αυτός πιάνει"
    },
    "imperfektIndikativ": {
      "de": "er fing",
      "lv": "αυτός έπιασε"
    },
    "imperfektKonjunktiv": {
      "de": "er finge",
      "lv": "αυτός θα έπιανε"
    },
    "partizipVergangenheit": {
      "de": "gefangen",
      "lv": "πιασμένος"
    }
  },
  {
    "infinitiv": {
      "de": "finden",
      "lv": "βρίσκω"
    },
    "praesens": {
      "de": "er findet",
      "lv": "αυτός βρίσκει"
    },
    "imperfektIndikativ": {
      "de": "er fand",
      "lv": "αυτός βρήκε"
    },
    "imperfektKonjunktiv": {
      "de": "er fände",
      "lv": "αυτός θα έβρισκε"
    },
    "partizipVergangenheit": {
      "de": "gefunden",
      "lv": "έχει βρει"
    }
  },
  {
    "infinitiv": {
      "de": "fliegen",
      "lv": "πετώ"
    },
    "praesens": {
      "de": "er fliegt",
      "lv": "αυτός πετά"
    },
    "imperfektIndikativ": {
      "de": "er flog",
      "lv": "αυτός πέταξε"
    },
    "imperfektKonjunktiv": {
      "de": "er flöge",
      "lv": "αυτός θα πετούσε"
    },
    "partizipVergangenheit": {
      "de": "geflogen (er ist)",
      "lv": "έχει πετάξει"
    }
  },
  {
    "infinitiv": {
      "de": "fliehen",
      "lv": "δραπετεύω"
    },
    "praesens": {
      "de": "er flieht",
      "lv": "αυτός δραπετεύει"
    },
    "imperfektIndikativ": {
      "de": "er floh",
      "lv": "αυτός δραπέτευσε"
    },
    "imperfektKonjunktiv": {
      "de": "er flöhe",
      "lv": "αυτός θα δραπέτευε"
    },
    "partizipVergangenheit": {
      "de": "geflohen (er ist)",
      "lv": "έχει δραπετεύσει"
    }
  },
  {
    "infinitiv": {
      "de": "fließen",
      "lv": "ρέω"
    },
    "praesens": {
      "de": "er fließt",
      "lv": "αυτός ρέει"
    },
    "imperfektIndikativ": {
      "de": "er floss",
      "lv": "αυτός έρευσε"
    },
    "imperfektKonjunktiv": {
      "de": "er flösse",
      "lv": "αυτός θα έρεε"
    },
    "partizipVergangenheit": {
      "de": "geflossen (er ist)",
      "lv": "έχει ρεύσει"
    }
  },
  {
    "infinitiv": {
      "de": "fressen",
      "lv": "τρώω / καταβροχθίζω"
    },
    "praesens": {
      "de": "er frisst",
      "lv": "αυτός τρώει / καταβροχθίζει"
    },
    "imperfektIndikativ": {
      "de": "er frass",
      "lv": "αυτός έφαγε / καταβρόχθισε"
    },
    "imperfektKonjunktiv": {
      "de": "er fräße",
      "lv": "αυτός θα έτρωγε / θα καταβρόχθιζε"
    },
    "partizipVergangenheit": {
      "de": "gefressen",
      "lv": "φαγωμένος / καταβροχθισμένος"
    }
  },
  {
    "infinitiv": {
      "de": "frieren",
      "lv": "κρυώνω"
    },
    "praesens": {
      "de": "er friert",
      "lv": "αυτός κρυώνει"
    },
    "imperfektIndikativ": {
      "de": "er fror",
      "lv": "αυτός κρύωσε"
    },
    "imperfektKonjunktiv": {
      "de": "er fröre",
      "lv": "αυτός θα κρύωνε"
    },
    "partizipVergangenheit": {
      "de": "gefroren",
      "lv": "έχει κρυώσει"
    }
  },
  {
    "infinitiv": {
      "de": "geben",
      "lv": "δίνω"
    },
    "praesens": {
      "de": "er gibt",
      "lv": "αυτός δίνει"
    },
    "imperfektIndikativ": {
      "de": "er gab",
      "lv": "αυτός έδωσε"
    },
    "imperfektKonjunktiv": {
      "de": "er gäbe",
      "lv": "αυτός θα έδινε"
    },
    "partizipVergangenheit": {
      "de": "gegeben",
      "lv": "δοσμένος"
    }
  },
  {
    "infinitiv": {
      "de": "gedeihen",
      "lv": "ευδοκιμώ"
    },
    "praesens": {
      "de": "er gedeiht",
      "lv": "αυτός ευδοκιμεί"
    },
    "imperfektIndikativ": {
      "de": "er gedieh",
      "lv": "αυτός ευδοκίμησε"
    },
    "imperfektKonjunktiv": {
      "de": "er gediehe",
      "lv": "αυτός θα ευδοκιμούσε"
    },
    "partizipVergangenheit": {
      "de": "gediehen (er ist)",
      "lv": "έχει ευδοκιμήσει"
    }
  },
  {
    "infinitiv": {
      "de": "gehen",
      "lv": "πηγαίνω"
    },
    "praesens": {
      "de": "er geht",
      "lv": "αυτός πηγαίνει"
    },
    "imperfektIndikativ": {
      "de": "er ging",
      "lv": "αυτός πήγε"
    },
    "imperfektKonjunktiv": {
      "de": "er ginge",
      "lv": "αυτός θα πήγαινε"
    },
    "partizipVergangenheit": {
      "de": "gegangen (er ist)",
      "lv": "έχει πάει"
    }
  },
  {
    "infinitiv": {
      "de": "gewinnen",
      "lv": "κερδίζω"
    },
    "praesens": {
      "de": "er gewinnt",
      "lv": "αυτός κερδίζει"
    },
    "imperfektIndikativ": {
      "de": "er gewann",
      "lv": "αυτός κέρδισε"
    },
    "imperfektKonjunktiv": {
      "de": "er gewönne / er gewänne",
      "lv": "αυτός θα κέρδιζε"
    },
    "partizipVergangenheit": {
      "de": "gewonnen",
      "lv": "κερδισμένος"
    }
  },
  {
    "infinitiv": {
      "de": "haben",
      "lv": "έχω"
    },
    "praesens": {
      "de": "er hat",
      "lv": "αυτός έχει"
    },
    "imperfektIndikativ": {
      "de": "hatte",
      "lv": "αυτός είχε"
    },
    "imperfektKonjunktiv": {
      "de": "hatte",
      "lv": "αυτός θα είχε"
    },
    "partizipVergangenheit": {
      "de": "gehabt",
      "lv": "έχοντας"
    }
  },
  {
    "infinitiv": {
      "de": "halten",
      "lv": "κρατώ"
    },
    "praesens": {
      "de": "er hält",
      "lv": "αυτός κρατά"
    },
    "imperfektIndikativ": {
      "de": "er hielt",
      "lv": "αυτός κράτησε"
    },
    "imperfektKonjunktiv": {
      "de": "er hielte",
      "lv": "αυτός θα κρατούσε"
    },
    "partizipVergangenheit": {
      "de": "gehalten",
      "lv": "κρατημένος"
    }
  },
  {
    "infinitiv": {
      "de": "heißen",
      "lv": "αποκαλώ / ονομάζομαι"
    },
    "praesens": {
      "de": "er heißt",
      "lv": "αυτός αποκαλεί / ονομάζεται"
    },
    "imperfektIndikativ": {
      "de": "er hieß",
      "lv": "αυτός αποκάλεσε / ονομάστηκε"
    },
    "imperfektKonjunktiv": {
      "de": "er hieße",
      "lv": "αυτός θα αποκαλούσε / θα ονομαζόταν"
    },
    "partizipVergangenheit": {
      "de": "geheißen",
      "lv": "έχει αποκαλέσει / έχει ονομαστεί"
    }
  },
  {
    "infinitiv": {
      "de": "helfen",
      "lv": "βοηθώ"
    },
    "praesens": {
      "de": "er hilft",
      "lv": "αυτός βοηθά"
    },
    "imperfektIndikativ": {
      "de": "er half",
      "lv": "αυτός βοήθησε"
    },
    "imperfektKonjunktiv": {
      "de": "er hülfe / er hälfe",
      "lv": "αυτός θα βοηθούσε"
    },
    "partizipVergangenheit": {
      "de": "geholfen",
      "lv": "έχει βοηθήσει"
    }
  },
  {
    "infinitiv": {
      "de": "kommen",
      "lv": "έρχομαι"
    },
    "praesens": {
      "de": "er kommt",
      "lv": "αυτός έρχεται"
    },
    "imperfektIndikativ": {
      "de": "er kam",
      "lv": "αυτός ήρθε"
    },
    "imperfektKonjunktiv": {
      "de": "er käme",
      "lv": "αυτός θα ερχόταν"
    },
    "partizipVergangenheit": {
      "de": "gekommen (er ist)",
      "lv": "έχει έρθει"
    }
  },
  {
    "infinitiv": {
      "de": "können",
      "lv": "μπορώ"
    },
    "praesens": {
      "de": "er kann",
      "lv": "αυτός μπορεί"
    },
    "imperfektIndikativ": {
      "de": "konnte",
      "lv": "αυτός μπόρεσε"
    },
    "imperfektKonjunktiv": {
      "de": "konnte",
      "lv": "αυτός θα μπορούσε"
    },
    "partizipVergangenheit": {
      "de": "gekonnt",
      "lv": "έχει μπορέσει"
    }
  },
  {
    "infinitiv": {
      "de": "kriechen",
      "lv": "σέρνομαι"
    },
    "praesens": {
      "de": "er kriecht",
      "lv": "αυτός σέρνεται"
    },
    "imperfektIndikativ": {
      "de": "er kroch",
      "lv": "αυτός σύρθηκε"
    },
    "imperfektKonjunktiv": {
      "de": "er kröche",
      "lv": "αυτός θα σερνόταν"
    },
    "partizipVergangenheit": {
      "de": "gekrochen (er ist)",
      "lv": "έχει συρθεί"
    }
  },
  {
    "infinitiv": {
      "de": "laden",
      "lv": "φορτώνω / καλώ"
    },
    "praesens": {
      "de": "er lädt",
      "lv": "αυτός φορτώνει / καλεί"
    },
    "imperfektIndikativ": {
      "de": "er lud",
      "lv": "αυτός φόρτωσε / κάλεσε"
    },
    "imperfektKonjunktiv": {
      "de": "er lüde",
      "lv": "αυτός θα φόρτωνε / θα καλούσε"
    },
    "partizipVergangenheit": {
      "de": "geladen",
      "lv": "φορτωμένος / καλεσμένος"
    }
  },
  {
    "infinitiv": {
      "de": "lassen",
      "lv": "βάζω / αφήνω"
    },
    "praesens": {
      "de": "er lässt",
      "lv": "αυτός βάζει / αφήνει"
    },
    "imperfektIndikativ": {
      "de": "er ließ",
      "lv": "αυτός έβαλε / άφησε"
    },
    "imperfektKonjunktiv": {
      "de": "er ließe",
      "lv": "αυτός θα έβαζε / θα άφηνε"
    },
    "partizipVergangenheit": {
      "de": "gelassen",
      "lv": "έχει βάλει / έχει αφήσει"
    }
  },
  {
    "infinitiv": {
      "de": "laufen",
      "lv": "τρέχω"
    },
    "praesens": {
      "de": "er läuft",
      "lv": "αυτός τρέχει"
    },
    "imperfektIndikativ": {
      "de": "er lief",
      "lv": "αυτός έτρεξε"
    },
    "imperfektKonjunktiv": {
      "de": "er liefe",
      "lv": "αυτός θα έτρεχε"
    },
    "partizipVergangenheit": {
      "de": "gelaufen (er ist)",
      "lv": "έχει τρέξει"
    }
  },
  {
    "infinitiv": {
      "de": "leiden",
      "lv": "υποφέρω"
    },
    "praesens": {
      "de": "er leidet",
      "lv": "αυτός υποφέρει"
    },
    "imperfektIndikativ": {
      "de": "er litt",
      "lv": "αυτός υπέφερε"
    },
    "imperfektKonjunktiv": {
      "de": "er litte",
      "lv": "αυτός θα υπέφερε"
    },
    "partizipVergangenheit": {
      "de": "gelitten",
      "lv": "έχει υποφέρει"
    }
  },
  {
    "infinitiv": {
      "de": "leihen",
      "lv": "δανείζω / δανείζομαι"
    },
    "praesens": {
      "de": "er leiht",
      "lv": "αυτός δανείζει / δανείζεται"
    },
    "imperfektIndikativ": {
      "de": "er lieh",
      "lv": "αυτός δάνεισε / δανείστηκε"
    },
    "imperfektKonjunktiv": {
      "de": "er liehe",
      "lv": "αυτός θα δάνειζε / θα δανειζόταν"
    },
    "partizipVergangenheit": {
      "de": "geliehen",
      "lv": "δανεισμένος / έχει δανειστεί"
    }
  },
  {
    "infinitiv": {
      "de": "lesen",
      "lv": "διαβάζω"
    },
    "praesens": {
      "de": "er liest",
      "lv": "αυτός διαβάζει"
    },
    "imperfektIndikativ": {
      "de": "er las",
      "lv": "αυτός διάβασε"
    },
    "imperfektKonjunktiv": {
      "de": "er läse",
      "lv": "αυτός θα διάβαζε"
    },
    "partizipVergangenheit": {
      "de": "gelesen",
      "lv": "έχει διαβάσει"
    }
  },
  {
    "infinitiv": {
      "de": "liegen",
      "lv": "ξαπλώνω"
    },
    "praesens": {
      "de": "er liegt",
      "lv": "αυτός ξαπλώνει"
    },
    "imperfektIndikativ": {
      "de": "er lag",
      "lv": "αυτός ξάπλωσε"
    },
    "imperfektKonjunktiv": {
      "de": "er läge",
      "lv": "αυτός θα ξάπλωνε"
    },
    "partizipVergangenheit": {
      "de": "gelegen",
      "lv": "ξαπλωμένος"
    }
  },
  {
    "infinitiv": {
      "de": "lügen",
      "lv": "λέω ψέματα"
    },
    "praesens": {
      "de": "er lügt",
      "lv": "αυτός λέει ψέματα"
    },
    "imperfektIndikativ": {
      "de": "er log",
      "lv": "αυτός είπε ψέματα"
    },
    "imperfektKonjunktiv": {
      "de": "er löge",
      "lv": "αυτός θα έλεγε ψέματα"
    },
    "partizipVergangenheit": {
      "de": "gelogen",
      "lv": "έχει πει ψέματα"
    }
  },
  {
    "infinitiv": {
      "de": "mahlen",
      "lv": "αλέθω"
    },
    "praesens": {
      "de": "er mahlt",
      "lv": "αυτός αλέθει"
    },
    "imperfektIndikativ": {
      "de": "er mahlte",
      "lv": "αυτός άλεσε"
    },
    "imperfektKonjunktiv": {
      "de": "er malte",
      "lv": "αυτός θα άλεθε"
    },
    "partizipVergangenheit": {
      "de": "gemahlen",
      "lv": "αλεσμένος"
    }
  },
  {
    "infinitiv": {
      "de": "meiden",
      "lv": "αποφεύγω"
    },
    "praesens": {
      "de": "er meidet",
      "lv": "αυτός αποφεύγει"
    },
    "imperfektIndikativ": {
      "de": "er mied",
      "lv": "αυτός απέφυγε"
    },
    "imperfektKonjunktiv": {
      "de": "er miede",
      "lv": "αυτός θα απέφευγε"
    },
    "partizipVergangenheit": {
      "de": "gemieden",
      "lv": "έχει αποφύγει"
    }
  },
  {
    "infinitiv": {
      "de": "melken",
      "lv": "αρμέγω"
    },
    "praesens": {
      "de": "er milkt / er melkt",
      "lv": "αυτός αρμέγει"
    },
    "imperfektIndikativ": {
      "de": "er molk / er melkte",
      "lv": "αυτός άρμεξε"
    },
    "imperfektKonjunktiv": {
      "de": "er mölke / er melkte",
      "lv": "αυτός θα άρμεγε"
    },
    "partizipVergangenheit": {
      "de": "gemolken / gemelkt",
      "lv": "αρμεγμένος"
    }
  },
  {
    "infinitiv": {
      "de": "messen",
      "lv": "μετρώ"
    },
    "praesens": {
      "de": "er misst",
      "lv": "αυτός μετρά"
    },
    "imperfektIndikativ": {
      "de": "er mass",
      "lv": "αυτός μέτρησε"
    },
    "imperfektKonjunktiv": {
      "de": "er mäße",
      "lv": "αυτός θα μετρούσε"
    },
    "partizipVergangenheit": {
      "de": "gemessen",
      "lv": "μετρημένος"
    }
  },
  {
    "infinitiv": {
      "de": "misslingen",
      "lv": "αποτυχαίνω"
    },
    "praesens": {
      "de": "es misslingt",
      "lv": "αυτό αποτυχαίνει"
    },
    "imperfektIndikativ": {
      "de": "misslang",
      "lv": "αυτό απέτυχε"
    },
    "imperfektKonjunktiv": {
      "de": "misslang",
      "lv": "αυτό θα αποτύχαινε"
    },
    "partizipVergangenheit": {
      "de": "misslungen",
      "lv": "αποτυχημένος"
    }
  },
  {
    "infinitiv": {
      "de": "mögen",
      "lv": "συμπαθώ"
    },
    "praesens": {
      "de": "er mag",
      "lv": "αυτός συμπαθεί"
    },
    "imperfektIndikativ": {
      "de": "mochte",
      "lv": "αυτός συμπάθησε"
    },
    "imperfektKonjunktiv": {
      "de": "mochte",
      "lv": "αυτός θα συμπαθούσε"
    },
    "partizipVergangenheit": {
      "de": "gemocht",
      "lv": "έχει συμπαθήσει"
    }
  },
  {
    "infinitiv": {
      "de": "müssen",
      "lv": "πρέπει"
    },
    "praesens": {
      "de": "er muss",
      "lv": "πρέπει"
    },
    "imperfektIndikativ": {
      "de": "musste",
      "lv": "έπρεπε"
    },
    "imperfektKonjunktiv": {
      "de": "musste",
      "lv": "θα έπρεπε"
    },
    "partizipVergangenheit": {
      "de": "gemusst",
      "lv": "έχει χρειαστεί"
    }
  },
  {
    "infinitiv": {
      "de": "nehmen",
      "lv": "παίρνω"
    },
    "praesens": {
      "de": "er nimmt",
      "lv": "αυτός παίρνει"
    },
    "imperfektIndikativ": {
      "de": "er nahm",
      "lv": "αυτός πήρε"
    },
    "imperfektKonjunktiv": {
      "de": "er nähme",
      "lv": "αυτός θα έπαιρνε"
    },
    "partizipVergangenheit": {
      "de": "genommen",
      "lv": "παρμένος"
    }
  },
  {
    "infinitiv": {
      "de": "nennen",
      "lv": "ονομάζω"
    },
    "praesens": {
      "de": "er nennt",
      "lv": "αυτός ονομάζει"
    },
    "imperfektIndikativ": {
      "de": "er nannte",
      "lv": "αυτός ονόμασε"
    },
    "imperfektKonjunktiv": {
      "de": "er nennte",
      "lv": "αυτός θα ονόμαζε"
    },
    "partizipVergangenheit": {
      "de": "genannt",
      "lv": "ονομασμένος"
    }
  },
  {
    "infinitiv": {
      "de": "pfeifen",
      "lv": "σφυρίζω"
    },
    "praesens": {
      "de": "er pfeift",
      "lv": "αυτός σφυρίζει"
    },
    "imperfektIndikativ": {
      "de": "er pfiff",
      "lv": "αυτός σφύριξε"
    },
    "imperfektKonjunktiv": {
      "de": "er pfiffe",
      "lv": "αυτός θα σφύριζε"
    },
    "partizipVergangenheit": {
      "de": "gepfiffen",
      "lv": "έχει σφυρίξει"
    }
  },
  {
    "infinitiv": {
      "de": "pflegen",
      "lv": "φροντίζω"
    },
    "praesens": {
      "de": "er pflegt",
      "lv": "αυτός φροντίζει"
    },
    "imperfektIndikativ": {
      "de": "pflegte / pflog",
      "lv": "αυτός φρόντισε"
    },
    "imperfektKonjunktiv": {
      "de": "pflegte / pflog",
      "lv": "αυτός θα φρόντιζε"
    },
    "partizipVergangenheit": {
      "de": "gepflegt / gepflogen",
      "lv": "φροντισμένος"
    }
  },
  {
    "infinitiv": {
      "de": "preisen",
      "lv": "επαινώ"
    },
    "praesens": {
      "de": "er preist",
      "lv": "αυτός επαινεί"
    },
    "imperfektIndikativ": {
      "de": "er pries",
      "lv": "αυτός επαίνεσε"
    },
    "imperfektKonjunktiv": {
      "de": "er priese",
      "lv": "αυτός θα επαινούσε"
    },
    "partizipVergangenheit": {
      "de": "gepriesen",
      "lv": "έχει επαινέσει"
    }
  },
  {
    "infinitiv": {
      "de": "quellen",
      "lv": "φουσκώνω"
    },
    "praesens": {
      "de": "er quillt",
      "lv": "αυτός φουσκώνει"
    },
    "imperfektIndikativ": {
      "de": "er quoll",
      "lv": "αυτός φούσκωσε"
    },
    "imperfektKonjunktiv": {
      "de": "er quölle",
      "lv": "αυτός θα φούσκωνε"
    },
    "partizipVergangenheit": {
      "de": "gequollen (er ist)",
      "lv": "φουσκωμένος"
    }
  },
  {
    "infinitiv": {
      "de": "raten",
      "lv": "συμβουλεύω / μαντεύω"
    },
    "praesens": {
      "de": "er rät",
      "lv": "αυτός συμβουλεύει / μαντεύει"
    },
    "imperfektIndikativ": {
      "de": "er riet",
      "lv": "αυτός συμβούλεψε / μάντεψε"
    },
    "imperfektKonjunktiv": {
      "de": "er riete",
      "lv": "αυτός θα συμβούλευε / θα μάντευε"
    },
    "partizipVergangenheit": {
      "de": "geraten",
      "lv": "έχει συμβουλέψει / έχει μαντέψει"
    }
  },
  {
    "infinitiv": {
      "de": "reiben",
      "lv": "τρίβω"
    },
    "praesens": {
      "de": "er reibt",
      "lv": "αυτός τρίβει"
    },
    "imperfektIndikativ": {
      "de": "er rieb",
      "lv": "αυτός έτριψε"
    },
    "imperfektKonjunktiv": {
      "de": "er riebe",
      "lv": "αυτός θα έτριβε"
    },
    "partizipVergangenheit": {
      "de": "gerieben",
      "lv": "τριμμένος"
    }
  },
  {
    "infinitiv": {
      "de": "reißen",
      "lv": "σκίζω"
    },
    "praesens": {
      "de": "er reißt",
      "lv": "αυτός σκίζει"
    },
    "imperfektIndikativ": {
      "de": "er riss",
      "lv": "αυτός έσκισε"
    },
    "imperfektKonjunktiv": {
      "de": "er risse",
      "lv": "αυτός θα έσκιζε"
    },
    "partizipVergangenheit": {
      "de": "gerissen",
      "lv": "σκισμένος"
    }
  },
  {
    "infinitiv": {
      "de": "reiten",
      "lv": "ιππεύω"
    },
    "praesens": {
      "de": "er reitet",
      "lv": "αυτός ιππεύει"
    },
    "imperfektIndikativ": {
      "de": "er ritt",
      "lv": "αυτός ίππευσε"
    },
    "imperfektKonjunktiv": {
      "de": "er ritte",
      "lv": "αυτός θα ίππευε"
    },
    "partizipVergangenheit": {
      "de": "geritten (er ist)",
      "lv": "έχει ιππεύσει"
    }
  },
  {
    "infinitiv": {
      "de": "rennen",
      "lv": "τρέχω"
    },
    "praesens": {
      "de": "er rennt",
      "lv": "αυτός τρέχει"
    },
    "imperfektIndikativ": {
      "de": "er rannte",
      "lv": "αυτός έτρεξε"
    },
    "imperfektKonjunktiv": {
      "de": "er rennte",
      "lv": "αυτός θα έτρεχε"
    },
    "partizipVergangenheit": {
      "de": "gerannt",
      "lv": "έχει τρέξει"
    }
  },
  {
    "infinitiv": {
      "de": "riechen",
      "lv": "μυρίζω"
    },
    "praesens": {
      "de": "er riecht",
      "lv": "αυτός μυρίζει"
    },
    "imperfektIndikativ": {
      "de": "er roch",
      "lv": "αυτός μύρισε"
    },
    "imperfektKonjunktiv": {
      "de": "er röche",
      "lv": "αυτός θα μύριζε"
    },
    "partizipVergangenheit": {
      "de": "gerochen",
      "lv": "έχει μυρίσει"
    }
  },
  {
    "infinitiv": {
      "de": "ringen",
      "lv": "παλεύω"
    },
    "praesens": {
      "de": "er ringt",
      "lv": "αυτός παλεύει"
    },
    "imperfektIndikativ": {
      "de": "er rang",
      "lv": "αυτός πάλεψε"
    },
    "imperfektKonjunktiv": {
      "de": "er ränge",
      "lv": "αυτός θα πάλευε"
    },
    "partizipVergangenheit": {
      "de": "gerungen",
      "lv": "έχει παλέψει"
    }
  },
  {
    "infinitiv": {
      "de": "rinnen",
      "lv": "κυλώ"
    },
    "praesens": {
      "de": "er rinnt",
      "lv": "αυτός κυλά"
    },
    "imperfektIndikativ": {
      "de": "er rann",
      "lv": "αυτός κύλησε"
    },
    "imperfektKonjunktiv": {
      "de": "er ränne / er rönne",
      "lv": "αυτός θα κυλούσε"
    },
    "partizipVergangenheit": {
      "de": "geronnen (er ist)",
      "lv": "έχει κυλήσει"
    }
  },
  {
    "infinitiv": {
      "de": "rufen",
      "lv": "καλώ"
    },
    "praesens": {
      "de": "er ruft",
      "lv": "αυτός καλεί"
    },
    "imperfektIndikativ": {
      "de": "er rief",
      "lv": "αυτός κάλεσε"
    },
    "imperfektKonjunktiv": {
      "de": "er riefe",
      "lv": "αυτός θα καλούσε"
    },
    "partizipVergangenheit": {
      "de": "gerufen",
      "lv": "καλεσμένος"
    }
  },
  {
    "infinitiv": {
      "de": "salzen",
      "lv": "αλατίζω"
    },
    "praesens": {
      "de": "er salzt",
      "lv": "αυτός αλατίζει"
    },
    "imperfektIndikativ": {
      "de": "er salzte",
      "lv": "αυτός αλάτισε"
    },
    "imperfektKonjunktiv": {
      "de": "er salzte",
      "lv": "αυτός θα αλάτιζε"
    },
    "partizipVergangenheit": {
      "de": "gesalzen",
      "lv": "αλατισμένος"
    }
  },
  {
    "infinitiv": {
      "de": "saufen",
      "lv": "μεθοκοπώ / πίνω"
    },
    "praesens": {
      "de": "er säuft",
      "lv": "αυτός μεθοκοπά / πίνει"
    },
    "imperfektIndikativ": {
      "de": "er soff",
      "lv": "αυτός μεθοκόπησε / ήπιε"
    },
    "imperfektKonjunktiv": {
      "de": "er söffe",
      "lv": "αυτός θα μεθοκοπούσε / θα έπινε"
    },
    "partizipVergangenheit": {
      "de": "gesoffen",
      "lv": "έχει μεθοκοπήσει / έχει πιει"
    }
  },
  {
    "infinitiv": {
      "de": "saugen",
      "lv": "ρουφώ"
    },
    "praesens": {
      "de": "er saugt",
      "lv": "αυτός ρουφά"
    },
    "imperfektIndikativ": {
      "de": "er sog",
      "lv": "αυτός ρούφηξε"
    },
    "imperfektKonjunktiv": {
      "de": "er söge",
      "lv": "αυτός θα ρουφούσε"
    },
    "partizipVergangenheit": {
      "de": "gesogen",
      "lv": "έχει ρουφήξει"
    }
  },
  {
    "infinitiv": {
      "de": "schaffen",
      "lv": "δημιουργώ"
    },
    "praesens": {
      "de": "er schafft",
      "lv": "αυτός δημιουργεί"
    },
    "imperfektIndikativ": {
      "de": "er schuf",
      "lv": "αυτός δημιούργησε"
    },
    "imperfektKonjunktiv": {
      "de": "er schüfe",
      "lv": "αυτός θα δημιουργούσε"
    },
    "partizipVergangenheit": {
      "de": "geschaffen",
      "lv": "δημιουργημένος"
    }
  },
  {
    "infinitiv": {
      "de": "schallen",
      "lv": "αντηχώ"
    },
    "praesens": {
      "de": "es schallt",
      "lv": "αυτό αντηχεί"
    },
    "imperfektIndikativ": {
      "de": "schallte / scholl",
      "lv": "αυτό αντήχησε"
    },
    "imperfektKonjunktiv": {
      "de": "schallte / scholl",
      "lv": "αυτό θα αντηχούσε"
    },
    "partizipVergangenheit": {
      "de": "geschallt",
      "lv": "έχει αντηχήσει"
    }
  },
  {
    "infinitiv": {
      "de": "scheiden",
      "lv": "χωρίζω"
    },
    "praesens": {
      "de": "er scheidet",
      "lv": "αυτός χωρίζει"
    },
    "imperfektIndikativ": {
      "de": "er schied",
      "lv": "αυτός χώρισε"
    },
    "imperfektKonjunktiv": {
      "de": "er schiede",
      "lv": "αυτός θα χώριζε"
    },
    "partizipVergangenheit": {
      "de": "geschieden (er hat / er ist)",
      "lv": "χωρισμένος"
    }
  },
  {
    "infinitiv": {
      "de": "scheinen",
      "lv": "λάμπω / φαίνομαι"
    },
    "praesens": {
      "de": "er scheint",
      "lv": "αυτός λάμπει / φαίνεται"
    },
    "imperfektIndikativ": {
      "de": "er schien",
      "lv": "αυτός έλαμψε / φάνηκε"
    },
    "imperfektKonjunktiv": {
      "de": "er schiene",
      "lv": "αυτός θα έλαμπε / θα φαινόταν"
    },
    "partizipVergangenheit": {
      "de": "geschienen",
      "lv": "έχει λάμψει / έχει φανεί"
    }
  },
  {
    "infinitiv": {
      "de": "schelten",
      "lv": "μαλώνω"
    },
    "praesens": {
      "de": "er schilt",
      "lv": "αυτός μαλώνει"
    },
    "imperfektIndikativ": {
      "de": "er schalt",
      "lv": "αυτός μάλωσε"
    },
    "imperfektKonjunktiv": {
      "de": "er schölte / er schälte",
      "lv": "αυτός θα μάλωνε"
    },
    "partizipVergangenheit": {
      "de": "gescholten",
      "lv": "έχει μαλώσει"
    }
  },
  {
    "infinitiv": {
      "de": "scheren",
      "lv": "κουρεύω"
    },
    "praesens": {
      "de": "er schert",
      "lv": "αυτός κουρεύει"
    },
    "imperfektIndikativ": {
      "de": "schor / scherte",
      "lv": "αυτός κούρεψε"
    },
    "imperfektKonjunktiv": {
      "de": "schor / scherte",
      "lv": "αυτός θα κούρευε"
    },
    "partizipVergangenheit": {
      "de": "geschoren / geschert",
      "lv": "κουρεμένος"
    }
  },
  {
    "infinitiv": {
      "de": "schieben",
      "lv": "σπρώχνω"
    },
    "praesens": {
      "de": "er schiebt",
      "lv": "αυτός σπρώχνει"
    },
    "imperfektIndikativ": {
      "de": "er schob",
      "lv": "αυτός έσπρωξε"
    },
    "imperfektKonjunktiv": {
      "de": "er schöbe",
      "lv": "αυτός θα έσπρωχνε"
    },
    "partizipVergangenheit": {
      "de": "geschoben",
      "lv": "σπρωγμένος"
    }
  },
  {
    "infinitiv": {
      "de": "schießen",
      "lv": "πυροβολώ"
    },
    "praesens": {
      "de": "er schießt",
      "lv": "αυτός πυροβολεί"
    },
    "imperfektIndikativ": {
      "de": "er schoss",
      "lv": "αυτός πυροβόλησε"
    },
    "imperfektKonjunktiv": {
      "de": "er schösse",
      "lv": "αυτός θα πυροβολούσε"
    },
    "partizipVergangenheit": {
      "de": "geschossen",
      "lv": "πυροβολημένος"
    }
  },
  {
    "infinitiv": {
      "de": "schinden",
      "lv": "βασανίζω"
    },
    "praesens": {
      "de": "er schindet",
      "lv": "αυτός βασανίζει"
    },
    "imperfektIndikativ": {
      "de": "schindete",
      "lv": "αυτός βασάνισε"
    },
    "imperfektKonjunktiv": {
      "de": "schindete",
      "lv": "αυτός θα βασάνιζε"
    },
    "partizipVergangenheit": {
      "de": "geschunden",
      "lv": "βασανισμένος"
    }
  },
  {
    "infinitiv": {
      "de": "schlafen",
      "lv": "κοιμάμαι"
    },
    "praesens": {
      "de": "er schläft",
      "lv": "αυτός κοιμάται"
    },
    "imperfektIndikativ": {
      "de": "er schlief",
      "lv": "αυτός κοιμήθηκε"
    },
    "imperfektKonjunktiv": {
      "de": "er schliefe",
      "lv": "αυτός θα κοιμόταν"
    },
    "partizipVergangenheit": {
      "de": "geschlafen",
      "lv": "κοιμισμένος"
    }
  },
  {
    "infinitiv": {
      "de": "schlagen",
      "lv": "χτυπώ"
    },
    "praesens": {
      "de": "er schlägt",
      "lv": "αυτός χτυπά"
    },
    "imperfektIndikativ": {
      "de": "er schlug",
      "lv": "αυτός χτύπησε"
    },
    "imperfektKonjunktiv": {
      "de": "er schlüge",
      "lv": "αυτός θα χτυπούσε"
    },
    "partizipVergangenheit": {
      "de": "geschlagen",
      "lv": "χτυπημένος"
    }
  },
  {
    "infinitiv": {
      "de": "schleichen",
      "lv": "γλιστρώ"
    },
    "praesens": {
      "de": "er schleicht",
      "lv": "αυτός γλιστρά"
    },
    "imperfektIndikativ": {
      "de": "er schlich",
      "lv": "αυτός γλίστρησε"
    },
    "imperfektKonjunktiv": {
      "de": "er schliche",
      "lv": "αυτός θα γλιστρούσε"
    },
    "partizipVergangenheit": {
      "de": "geschlichen (er ist)",
      "lv": "έχει γλιστρήσει"
    }
  },
  {
    "infinitiv": {
      "de": "schleifen",
      "lv": "λειαίνω"
    },
    "praesens": {
      "de": "er schleift",
      "lv": "αυτός λειαίνει"
    },
    "imperfektIndikativ": {
      "de": "er schliff",
      "lv": "αυτός λείανε"
    },
    "imperfektKonjunktiv": {
      "de": "er schliffe",
      "lv": "αυτός θα λείαινε"
    },
    "partizipVergangenheit": {
      "de": "geschliffen",
      "lv": "λειασμένος"
    }
  },
  {
    "infinitiv": {
      "de": "schließen",
      "lv": "κλείνω"
    },
    "praesens": {
      "de": "er schließt",
      "lv": "αυτός κλείνει"
    },
    "imperfektIndikativ": {
      "de": "er schloss",
      "lv": "αυτός έκλεισε"
    },
    "imperfektKonjunktiv": {
      "de": "er schlösse",
      "lv": "αυτός θα έκλεινε"
    },
    "partizipVergangenheit": {
      "de": "geschlossen",
      "lv": "κλεισμένος"
    }
  },
  {
    "infinitiv": {
      "de": "schlingen",
      "lv": "καταπίνω"
    },
    "praesens": {
      "de": "er schlingt",
      "lv": "αυτός καταπίνει"
    },
    "imperfektIndikativ": {
      "de": "er schlang",
      "lv": "αυτός κατάπιε"
    },
    "imperfektKonjunktiv": {
      "de": "er schlänge",
      "lv": "αυτός θα κατάπινε"
    },
    "partizipVergangenheit": {
      "de": "geschlungen",
      "lv": "έχει καταπιεί"
    }
  },
  {
    "infinitiv": {
      "de": "schmeißen",
      "lv": "πετώ"
    },
    "praesens": {
      "de": "er schmeißt",
      "lv": "αυτός πετά"
    },
    "imperfektIndikativ": {
      "de": "er schmiss",
      "lv": "αυτός πέταξε"
    },
    "imperfektKonjunktiv": {
      "de": "er schmisse",
      "lv": "αυτός θα πετούσε"
    },
    "partizipVergangenheit": {
      "de": "geschmissen",
      "lv": "πεταμένος"
    }
  },
  {
    "infinitiv": {
      "de": "schmelzen",
      "lv": "λιώνω"
    },
    "praesens": {
      "de": "er schmilzt",
      "lv": "αυτός λιώνει"
    },
    "imperfektIndikativ": {
      "de": "er schmolz",
      "lv": "αυτός έλιωσε"
    },
    "imperfektKonjunktiv": {
      "de": "er schmölze",
      "lv": "αυτός θα έλιωνε"
    },
    "partizipVergangenheit": {
      "de": "geschmolzen (er ist)",
      "lv": "λιωμένος"
    }
  },
  {
    "infinitiv": {
      "de": "schnauben",
      "lv": "ρουθουνίζω"
    },
    "praesens": {
      "de": "er schnaubt",
      "lv": "αυτός ρουθουνίζει"
    },
    "imperfektIndikativ": {
      "de": "schnaubte / schnob",
      "lv": "αυτός ρουθούνισε"
    },
    "imperfektKonjunktiv": {
      "de": "schnaubte / schnob",
      "lv": "αυτός θα ρουθούνιζε"
    },
    "partizipVergangenheit": {
      "de": "geschnaubt / geschnoben",
      "lv": "έχει ρουθουνίσει"
    }
  },
  {
    "infinitiv": {
      "de": "schneiden",
      "lv": "κόβω"
    },
    "praesens": {
      "de": "er schneidet",
      "lv": "αυτός κόβει"
    },
    "imperfektIndikativ": {
      "de": "er schnitt",
      "lv": "αυτός έκοψε"
    },
    "imperfektKonjunktiv": {
      "de": "er schnitte",
      "lv": "αυτός θα έκοβε"
    },
    "partizipVergangenheit": {
      "de": "geschnitten",
      "lv": "κομμένος"
    }
  },
  {
    "infinitiv": {
      "de": "schreiben",
      "lv": "γράφω"
    },
    "praesens": {
      "de": "er schreibt",
      "lv": "αυτός γράφει"
    },
    "imperfektIndikativ": {
      "de": "er schrieb",
      "lv": "αυτός έγραψε"
    },
    "imperfektKonjunktiv": {
      "de": "er schriebe",
      "lv": "αυτός θα έγραφε"
    },
    "partizipVergangenheit": {
      "de": "geschrieben",
      "lv": "γραμμένος"
    }
  },
  {
    "infinitiv": {
      "de": "schreien",
      "lv": "φωνάζω"
    },
    "praesens": {
      "de": "er schreit",
      "lv": "αυτός φωνάζει"
    },
    "imperfektIndikativ": {
      "de": "er schrie",
      "lv": "αυτός φώναξε"
    },
    "imperfektKonjunktiv": {
      "de": "er schriee",
      "lv": "αυτός θα φώναζε"
    },
    "partizipVergangenheit": {
      "de": "geschrien",
      "lv": "έχει φωνάξει"
    }
  },
  {
    "infinitiv": {
      "de": "schreiten",
      "lv": "βηματίζω"
    },
    "praesens": {
      "de": "er schreitet",
      "lv": "αυτός βηματίζει"
    },
    "imperfektIndikativ": {
      "de": "er schritt",
      "lv": "αυτός βημάτισε"
    },
    "imperfektKonjunktiv": {
      "de": "er schritte",
      "lv": "αυτός θα βημάτιζε"
    },
    "partizipVergangenheit": {
      "de": "geschritten (er ist)",
      "lv": "έχει βηματίσει"
    }
  },
  {
    "infinitiv": {
      "de": "schweigen",
      "lv": "σωπαίνω"
    },
    "praesens": {
      "de": "er schweigt",
      "lv": "αυτός σωπαίνει"
    },
    "imperfektIndikativ": {
      "de": "er schwieg",
      "lv": "αυτός σώπασε"
    },
    "imperfektKonjunktiv": {
      "de": "er schwiege",
      "lv": "αυτός θα σώπαινε"
    },
    "partizipVergangenheit": {
      "de": "geschwiegen",
      "lv": "έχει σωπάσει"
    }
  },
  {
    "infinitiv": {
      "de": "schwellen",
      "lv": "πρήζομαι"
    },
    "praesens": {
      "de": "er schwillt",
      "lv": "αυτός πρήζεται"
    },
    "imperfektIndikativ": {
      "de": "er schwoll",
      "lv": "αυτός πρήστηκε"
    },
    "imperfektKonjunktiv": {
      "de": "er schwölle",
      "lv": "αυτός θα πρηζόταν"
    },
    "partizipVergangenheit": {
      "de": "geschwollen (er ist)",
      "lv": "πρησμένος"
    }
  },
  {
    "infinitiv": {
      "de": "schwimmen",
      "lv": "κολυμπώ"
    },
    "praesens": {
      "de": "er schwimmt",
      "lv": "αυτός κολυμπά"
    },
    "imperfektIndikativ": {
      "de": "er schwamm",
      "lv": "αυτός κολύμπησε"
    },
    "imperfektKonjunktiv": {
      "de": "er schwömme / er schwämme",
      "lv": "αυτός θα κολυμπούσε"
    },
    "partizipVergangenheit": {
      "de": "geschwommen (er ist)",
      "lv": "έχει κολυμπήσει"
    }
  },
  {
    "infinitiv": {
      "de": "schwinden",
      "lv": "εξαφανίζομαι"
    },
    "praesens": {
      "de": "er schwindet",
      "lv": "αυτός εξαφανίζεται"
    },
    "imperfektIndikativ": {
      "de": "er schwand",
      "lv": "αυτός εξαφανίστηκε"
    },
    "imperfektKonjunktiv": {
      "de": "er schwände",
      "lv": "αυτός θα εξαφανιζόταν"
    },
    "partizipVergangenheit": {
      "de": "geschwunden (er ist)",
      "lv": "εξαφανισμένος"
    }
  },
  {
    "infinitiv": {
      "de": "schwingen",
      "lv": "ανεμίζω"
    },
    "praesens": {
      "de": "er schwingt",
      "lv": "αυτός ανεμίζει"
    },
    "imperfektIndikativ": {
      "de": "er schwang",
      "lv": "αυτός ανέμισε"
    },
    "imperfektKonjunktiv": {
      "de": "er schwänge",
      "lv": "αυτός θα ανέμιζε"
    },
    "partizipVergangenheit": {
      "de": "geschwungen",
      "lv": "έχει ανεμίσει"
    }
  },
  {
    "infinitiv": {
      "de": "schwören",
      "lv": "ορκίζομαι"
    },
    "praesens": {
      "de": "er schwört",
      "lv": "αυτός ορκίζεται"
    },
    "imperfektIndikativ": {
      "de": "er schwur / er schwor",
      "lv": "αυτός ορκίστηκε"
    },
    "imperfektKonjunktiv": {
      "de": "er schwöre",
      "lv": "αυτός θα ορκιζόταν"
    },
    "partizipVergangenheit": {
      "de": "geschworen",
      "lv": "ορκισμένος"
    }
  },
  {
    "infinitiv": {
      "de": "sehen",
      "lv": "βλέπω"
    },
    "praesens": {
      "de": "er sieht",
      "lv": "αυτός βλέπει"
    },
    "imperfektIndikativ": {
      "de": "er sah",
      "lv": "αυτός είδε"
    },
    "imperfektKonjunktiv": {
      "de": "er sähe",
      "lv": "αυτός θα έβλεπε"
    },
    "partizipVergangenheit": {
      "de": "gesehen",
      "lv": "ιδωμένος"
    }
  },
  {
    "infinitiv": {
      "de": "sein",
      "lv": "είμαι"
    },
    "praesens": {
      "de": "er ist",
      "lv": "αυτός είναι"
    },
    "imperfektIndikativ": {
      "de": "war",
      "lv": "αυτός ήταν"
    },
    "imperfektKonjunktiv": {
      "de": "war",
      "lv": "αυτός θα ήταν"
    },
    "partizipVergangenheit": {
      "de": "gewesen",
      "lv": "έχει υπάρξει"
    }
  },
  {
    "infinitiv": {
      "de": "senden",
      "lv": "στέλνω"
    },
    "praesens": {
      "de": "er sendet",
      "lv": "αυτός στέλνει"
    },
    "imperfektIndikativ": {
      "de": "er sandte / er sendete",
      "lv": "αυτός έστειλε"
    },
    "imperfektKonjunktiv": {
      "de": "er sendete",
      "lv": "αυτός θα έστελνε"
    },
    "partizipVergangenheit": {
      "de": "gesandt / gesendet",
      "lv": "σταλμένος"
    }
  },
  {
    "infinitiv": {
      "de": "sieden",
      "lv": "βράζω"
    },
    "praesens": {
      "de": "er siedet",
      "lv": "αυτός βράζει"
    },
    "imperfektIndikativ": {
      "de": "sott / siedete",
      "lv": "αυτός έβρασε"
    },
    "imperfektKonjunktiv": {
      "de": "sott / siedete",
      "lv": "αυτός θα έβραζε"
    },
    "partizipVergangenheit": {
      "de": "gesotten / gesiedet",
      "lv": "βρασμένος"
    }
  },
  {
    "infinitiv": {
      "de": "singen",
      "lv": "τραγουδώ"
    },
    "praesens": {
      "de": "er singt",
      "lv": "αυτός τραγουδά"
    },
    "imperfektIndikativ": {
      "de": "er sang",
      "lv": "αυτός τραγούδησε"
    },
    "imperfektKonjunktiv": {
      "de": "er sänge",
      "lv": "αυτός θα τραγουδούσε"
    },
    "partizipVergangenheit": {
      "de": "gesungen",
      "lv": "τραγουδισμένος"
    }
  },
  {
    "infinitiv": {
      "de": "sinken",
      "lv": "βουλιάζω"
    },
    "praesens": {
      "de": "er sinkt",
      "lv": "αυτός βουλιάζει"
    },
    "imperfektIndikativ": {
      "de": "er sank",
      "lv": "αυτός βούλιαξε"
    },
    "imperfektKonjunktiv": {
      "de": "er sänke",
      "lv": "αυτός θα βούλιαζε"
    },
    "partizipVergangenheit": {
      "de": "gesunken (er ist)",
      "lv": "βουλιαγμένος"
    }
  },
  {
    "infinitiv": {
      "de": "sinnen",
      "lv": "συλλογίζομαι"
    },
    "praesens": {
      "de": "er sinnt",
      "lv": "αυτός συλλογίζεται"
    },
    "imperfektIndikativ": {
      "de": "er sann",
      "lv": "αυτός συλλογίστηκε"
    },
    "imperfektKonjunktiv": {
      "de": "er sönne / er sänne",
      "lv": "αυτός θα συλλογιζόταν"
    },
    "partizipVergangenheit": {
      "de": "gesonnen",
      "lv": "συλλογισμένος"
    }
  },
  {
    "infinitiv": {
      "de": "sitzen",
      "lv": "κάθομαι"
    },
    "praesens": {
      "de": "er sitzt",
      "lv": "αυτός κάθεται"
    },
    "imperfektIndikativ": {
      "de": "er sass",
      "lv": "αυτός κάθισε"
    },
    "imperfektKonjunktiv": {
      "de": "er säße",
      "lv": "αυτός θα καθόταν"
    },
    "partizipVergangenheit": {
      "de": "gesessen",
      "lv": "καθισμένος"
    }
  },
  {
    "infinitiv": {
      "de": "sollen",
      "lv": "οφείλω"
    },
    "praesens": {
      "de": "er soll",
      "lv": "αυτός οφείλει"
    },
    "imperfektIndikativ": {
      "de": "sollte",
      "lv": "αυτός όφειλε"
    },
    "imperfektKonjunktiv": {
      "de": "sollte",
      "lv": "αυτός θα όφειλε"
    },
    "partizipVergangenheit": {
      "de": "gesollt",
      "lv": "υποχρεωμένος"
    }
  },
  {
    "infinitiv": {
      "de": "speien",
      "lv": "φτύνω"
    },
    "praesens": {
      "de": "er speit",
      "lv": "αυτός φτύνει"
    },
    "imperfektIndikativ": {
      "de": "er spie",
      "lv": "αυτός έφτυσε"
    },
    "imperfektKonjunktiv": {
      "de": "er spie",
      "lv": "αυτός θα έφτυνε"
    },
    "partizipVergangenheit": {
      "de": "gespien",
      "lv": "φτυσμένος"
    }
  },
  {
    "infinitiv": {
      "de": "spinnen",
      "lv": "γνέθω"
    },
    "praesens": {
      "de": "er spinnt",
      "lv": "αυτός γνέθει"
    },
    "imperfektIndikativ": {
      "de": "er spann",
      "lv": "αυτός έγνεσε"
    },
    "imperfektKonjunktiv": {
      "de": "er spönne / er spänne",
      "lv": "αυτός θα έγνεθε"
    },
    "partizipVergangenheit": {
      "de": "gesponnen",
      "lv": "έχει γνέσει"
    }
  },
  {
    "infinitiv": {
      "de": "spleißen",
      "lv": "ενώνω"
    },
    "praesens": {
      "de": "er spleißt",
      "lv": "αυτός ενώνει"
    },
    "imperfektIndikativ": {
      "de": "spliss",
      "lv": "αυτός ένωσε"
    },
    "imperfektKonjunktiv": {
      "de": "spliss",
      "lv": "αυτός θα ένωνε"
    },
    "partizipVergangenheit": {
      "de": "gesplissen",
      "lv": "ενωμένος"
    }
  },
  {
    "infinitiv": {
      "de": "sprechen",
      "lv": "μιλώ"
    },
    "praesens": {
      "de": "er spricht",
      "lv": "αυτός μιλά"
    },
    "imperfektIndikativ": {
      "de": "er sprach",
      "lv": "αυτός μίλησε"
    },
    "imperfektKonjunktiv": {
      "de": "er spräche",
      "lv": "αυτός θα μιλούσε"
    },
    "partizipVergangenheit": {
      "de": "gesprochen",
      "lv": "έχει μιλήσει"
    }
  },
  {
    "infinitiv": {
      "de": "sprießen",
      "lv": "φυτρώνω"
    },
    "praesens": {
      "de": "er sprießt",
      "lv": "αυτός φυτρώνει"
    },
    "imperfektIndikativ": {
      "de": "er spross",
      "lv": "αυτός φύτρωσε"
    },
    "imperfektKonjunktiv": {
      "de": "er sprösse",
      "lv": "αυτός θα φύτρωνε"
    },
    "partizipVergangenheit": {
      "de": "gesprossen (er ist)",
      "lv": "φυτρωμένος"
    }
  },
  {
    "infinitiv": {
      "de": "springen",
      "lv": "πηδάω"
    },
    "praesens": {
      "de": "er springt",
      "lv": "αυτός πηδάει"
    },
    "imperfektIndikativ": {
      "de": "er sprang",
      "lv": "αυτός πήδηξε"
    },
    "imperfektKonjunktiv": {
      "de": "er spränge",
      "lv": "αυτός θα πηδούσε"
    },
    "partizipVergangenheit": {
      "de": "gesprungen (er ist)",
      "lv": "έχει πηδήξει"
    }
  },
  {
    "infinitiv": {
      "de": "stechen",
      "lv": "τρυπώ"
    },
    "praesens": {
      "de": "er sticht",
      "lv": "αυτός τρυπά"
    },
    "imperfektIndikativ": {
      "de": "er stach",
      "lv": "αυτός τρύπησε"
    },
    "imperfektKonjunktiv": {
      "de": "er stäche",
      "lv": "αυτός θα τρυπούσε"
    },
    "partizipVergangenheit": {
      "de": "gestochen",
      "lv": "τρυπημένος"
    }
  },
  {
    "infinitiv": {
      "de": "stecken",
      "lv": "χώνω / μπήγω"
    },
    "praesens": {
      "de": "er steckt",
      "lv": "αυτός χώνει / μπήγει"
    },
    "imperfektIndikativ": {
      "de": "stak / steckte",
      "lv": "αυτός έχωσε / έμπηξε"
    },
    "imperfektKonjunktiv": {
      "de": "stak / steckte",
      "lv": "αυτός θα έχωνε / θα έμπηγε"
    },
    "partizipVergangenheit": {
      "de": "gesteckt",
      "lv": "χωμένος / μπηγμένος"
    }
  },
  {
    "infinitiv": {
      "de": "stehen",
      "lv": "στέκομαι"
    },
    "praesens": {
      "de": "er steht",
      "lv": "αυτός στέκεται"
    },
    "imperfektIndikativ": {
      "de": "er stand",
      "lv": "αυτός στάθηκε"
    },
    "imperfektKonjunktiv": {
      "de": "er stände / er stünde",
      "lv": "αυτός θα στεκόταν"
    },
    "partizipVergangenheit": {
      "de": "gestanden",
      "lv": "έχει σταθεί"
    }
  },
  {
    "infinitiv": {
      "de": "stehlen",
      "lv": "κλέβω"
    },
    "praesens": {
      "de": "er stiehlt",
      "lv": "αυτός κλέβει"
    },
    "imperfektIndikativ": {
      "de": "er stahl",
      "lv": "αυτός έκλεψε"
    },
    "imperfektKonjunktiv": {
      "de": "er stöhle / er stähle",
      "lv": "αυτός θα έκλεβε"
    },
    "partizipVergangenheit": {
      "de": "gestohlen",
      "lv": "κλεμμένος"
    }
  },
  {
    "infinitiv": {
      "de": "steigen",
      "lv": "ανεβαίνω"
    },
    "praesens": {
      "de": "er steigt",
      "lv": "αυτός ανεβαίνει"
    },
    "imperfektIndikativ": {
      "de": "er stieg",
      "lv": "αυτός ανέβηκε"
    },
    "imperfektKonjunktiv": {
      "de": "er stiege",
      "lv": "αυτός θα ανέβαινε"
    },
    "partizipVergangenheit": {
      "de": "gestiegen (er ist)",
      "lv": "έχει ανέβει"
    }
  },
  {
    "infinitiv": {
      "de": "sterben",
      "lv": "πεθαίνω"
    },
    "praesens": {
      "de": "er stirbt",
      "lv": "αυτός πεθαίνει"
    },
    "imperfektIndikativ": {
      "de": "er starb",
      "lv": "αυτός πέθανε"
    },
    "imperfektKonjunktiv": {
      "de": "er stürbe",
      "lv": "αυτός θα πέθαινε"
    },
    "partizipVergangenheit": {
      "de": "gestorben (er ist)",
      "lv": "πεθαμένος"
    }
  },
  {
    "infinitiv": {
      "de": "stinken",
      "lv": "βρομάω"
    },
    "praesens": {
      "de": "es stinkt",
      "lv": "αυτό βρομάει"
    },
    "imperfektIndikativ": {
      "de": "stank",
      "lv": "αυτό βρόμησε"
    },
    "imperfektKonjunktiv": {
      "de": "stank",
      "lv": "αυτό θα βρομούσε"
    },
    "partizipVergangenheit": {
      "de": "gestunken",
      "lv": "έχει βρομήσει"
    }
  },
  {
    "infinitiv": {
      "de": "stoßen",
      "lv": "σκουντώ"
    },
    "praesens": {
      "de": "er stößt",
      "lv": "αυτός σκουντά"
    },
    "imperfektIndikativ": {
      "de": "er stieß",
      "lv": "αυτός σκούντηξε"
    },
    "imperfektKonjunktiv": {
      "de": "er stieße",
      "lv": "αυτός θα σκουντούσε"
    },
    "partizipVergangenheit": {
      "de": "gestoßen",
      "lv": "έχει σκουντήξει"
    }
  },
  {
    "infinitiv": {
      "de": "streichen",
      "lv": "βάφω / διαγράφω"
    },
    "praesens": {
      "de": "er streicht",
      "lv": "αυτός βάφει / διαγράφει"
    },
    "imperfektIndikativ": {
      "de": "er strich",
      "lv": "αυτός έβαψε / διέγραψε"
    },
    "imperfektKonjunktiv": {
      "de": "er striche",
      "lv": "αυτός θα έβαφε / θα διέγραφε"
    },
    "partizipVergangenheit": {
      "de": "gestrichen",
      "lv": "βαμμένος / διαγραμμένος"
    }
  },
  {
    "infinitiv": {
      "de": "streiten",
      "lv": "καβγαδίζω"
    },
    "praesens": {
      "de": "er streitet",
      "lv": "αυτός καβγαδίζει"
    },
    "imperfektIndikativ": {
      "de": "er stritt",
      "lv": "αυτός καβγάδισε"
    },
    "imperfektKonjunktiv": {
      "de": "er stritte",
      "lv": "αυτός θα καβγάδιζε"
    },
    "partizipVergangenheit": {
      "de": "gestritten",
      "lv": "έχει καβγαδίσει"
    }
  },
  {
    "infinitiv": {
      "de": "tragen",
      "lv": "κουβαλώ"
    },
    "praesens": {
      "de": "er trägt",
      "lv": "αυτός κουβαλά"
    },
    "imperfektIndikativ": {
      "de": "er trug",
      "lv": "αυτός κουβάλησε"
    },
    "imperfektKonjunktiv": {
      "de": "er trüge",
      "lv": "αυτός θα κουβαλούσε"
    },
    "partizipVergangenheit": {
      "de": "getragen",
      "lv": "κουβαλημένος"
    }
  },
  {
    "infinitiv": {
      "de": "treffen",
      "lv": "συναντώ"
    },
    "praesens": {
      "de": "er trifft",
      "lv": "αυτός συναντά"
    },
    "imperfektIndikativ": {
      "de": "er traf",
      "lv": "αυτός συνάντησε"
    },
    "imperfektKonjunktiv": {
      "de": "er träfe",
      "lv": "αυτός θα συναντούσε"
    },
    "partizipVergangenheit": {
      "de": "getroffen",
      "lv": "έχει συναντήσει"
    }
  },
  {
    "infinitiv": {
      "de": "treiben",
      "lv": "διώχνω"
    },
    "praesens": {
      "de": "er treibt",
      "lv": "αυτός διώχνει"
    },
    "imperfektIndikativ": {
      "de": "er trieb",
      "lv": "αυτός έδιωξε"
    },
    "imperfektKonjunktiv": {
      "de": "er triebe",
      "lv": "αυτός θα έδιωχνε"
    },
    "partizipVergangenheit": {
      "de": "getrieben",
      "lv": "διωγμένος"
    }
  },
  {
    "infinitiv": {
      "de": "treten",
      "lv": "πατώ / προχωρώ"
    },
    "praesens": {
      "de": "er tritt",
      "lv": "αυτός πατά / προχωρά"
    },
    "imperfektIndikativ": {
      "de": "er trat",
      "lv": "αυτός πάτησε / προχώρησε"
    },
    "imperfektKonjunktiv": {
      "de": "er träte",
      "lv": "αυτός θα πατούσε / θα προχωρούσε"
    },
    "partizipVergangenheit": {
      "de": "getreten (er ist)",
      "lv": "έχει πατήσει / έχει προχωρήσει"
    }
  },
  {
    "infinitiv": {
      "de": "trinken",
      "lv": "πίνω"
    },
    "praesens": {
      "de": "er trinkt",
      "lv": "αυτός πίνει"
    },
    "imperfektIndikativ": {
      "de": "er trank",
      "lv": "αυτός ήπιε"
    },
    "imperfektKonjunktiv": {
      "de": "er tränke",
      "lv": "αυτός θα έπινε"
    },
    "partizipVergangenheit": {
      "de": "getrunken",
      "lv": "έχει πιει"
    }
  },
  {
    "infinitiv": {
      "de": "trügen",
      "lv": "εξαπατώ"
    },
    "praesens": {
      "de": "er trögt",
      "lv": "αυτός εξαπατά"
    },
    "imperfektIndikativ": {
      "de": "er trog",
      "lv": "αυτός εξαπάτησε"
    },
    "imperfektKonjunktiv": {
      "de": "er tröge",
      "lv": "αυτός θα εξαπατούσε"
    },
    "partizipVergangenheit": {
      "de": "getrogen",
      "lv": "εξαπατημένος"
    }
  },
  {
    "infinitiv": {
      "de": "tun",
      "lv": "κάνω"
    },
    "praesens": {
      "de": "er tut",
      "lv": "αυτός κάνει"
    },
    "imperfektIndikativ": {
      "de": "er tat",
      "lv": "αυτός έκανε"
    },
    "imperfektKonjunktiv": {
      "de": "er täte",
      "lv": "αυτός θα έκανε"
    },
    "partizipVergangenheit": {
      "de": "getan",
      "lv": "έχει κάνει"
    }
  },
  {
    "infinitiv": {
      "de": "verderben",
      "lv": "χαλώ"
    },
    "praesens": {
      "de": "er verdirbt",
      "lv": "αυτός χαλά"
    },
    "imperfektIndikativ": {
      "de": "er verdarb",
      "lv": "αυτός χάλασε"
    },
    "imperfektKonjunktiv": {
      "de": "er verdürbe",
      "lv": "αυτός θα χαλούσε"
    },
    "partizipVergangenheit": {
      "de": "verdorben",
      "lv": "χαλασμένος"
    }
  },
  {
    "infinitiv": {
      "de": "verdrießen",
      "lv": "ενοχλώ"
    },
    "praesens": {
      "de": "er verdrießt",
      "lv": "αυτός ενοχλεί"
    },
    "imperfektIndikativ": {
      "de": "er verdross",
      "lv": "αυτός ενόχλησε"
    },
    "imperfektKonjunktiv": {
      "de": "er verdrösse",
      "lv": "αυτός θα ενοχλούσε"
    },
    "partizipVergangenheit": {
      "de": "verdrossen",
      "lv": "ενοχλημένος"
    }
  },
  {
    "infinitiv": {
      "de": "vergessen",
      "lv": "ξεχνώ"
    },
    "praesens": {
      "de": "er vergisst",
      "lv": "αυτός ξεχνά"
    },
    "imperfektIndikativ": {
      "de": "er vergass",
      "lv": "αυτός ξέχασε"
    },
    "imperfektKonjunktiv": {
      "de": "er vergäße",
      "lv": "αυτός θα ξεχνούσε"
    },
    "partizipVergangenheit": {
      "de": "vergessen",
      "lv": "ξεχασμένος"
    }
  },
  {
    "infinitiv": {
      "de": "verlieren",
      "lv": "χάνω"
    },
    "praesens": {
      "de": "er verliert",
      "lv": "αυτός χάνει"
    },
    "imperfektIndikativ": {
      "de": "er verlor",
      "lv": "αυτός έχασε"
    },
    "imperfektKonjunktiv": {
      "de": "er verlöre",
      "lv": "αυτός θα έχανε"
    },
    "partizipVergangenheit": {
      "de": "verloren",
      "lv": "χαμένος"
    }
  },
  {
    "infinitiv": {
      "de": "wachsen",
      "lv": "μεγαλώνω"
    },
    "praesens": {
      "de": "er wächst",
      "lv": "αυτός μεγαλώνει"
    },
    "imperfektIndikativ": {
      "de": "er wuchs",
      "lv": "αυτός μεγάλωσε"
    },
    "imperfektKonjunktiv": {
      "de": "er wüchse",
      "lv": "αυτός θα μεγάλωνε"
    },
    "partizipVergangenheit": {
      "de": "gewachsen (er ist)",
      "lv": "έχει μεγαλώσει"
    }
  },
  {
    "infinitiv": {
      "de": "waschen",
      "lv": "πλένω"
    },
    "praesens": {
      "de": "er wäscht",
      "lv": "αυτός πλένει"
    },
    "imperfektIndikativ": {
      "de": "er wusch",
      "lv": "αυτός έπλυνε"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsche",
      "lv": "αυτός θα έπλενε"
    },
    "partizipVergangenheit": {
      "de": "gewaschen",
      "lv": "πλυμένος"
    }
  },
  {
    "infinitiv": {
      "de": "weben",
      "lv": "υφαίνω"
    },
    "praesens": {
      "de": "er webt",
      "lv": "αυτός υφαίνει"
    },
    "imperfektIndikativ": {
      "de": "wob",
      "lv": "αυτός ύφανε"
    },
    "imperfektKonjunktiv": {
      "de": "wob",
      "lv": "αυτός θα ύφαινε"
    },
    "partizipVergangenheit": {
      "de": "gewoben",
      "lv": "υφασμένος"
    }
  },
  {
    "infinitiv": {
      "de": "weichen",
      "lv": "υποχωρώ"
    },
    "praesens": {
      "de": "er weicht",
      "lv": "αυτός υποχωρεί"
    },
    "imperfektIndikativ": {
      "de": "er wich",
      "lv": "αυτός υποχώρησε"
    },
    "imperfektKonjunktiv": {
      "de": "er wiche",
      "lv": "αυτός θα υποχωρούσε"
    },
    "partizipVergangenheit": {
      "de": "gewichen (er ist)",
      "lv": "έχει υποχωρήσει"
    }
  },
  {
    "infinitiv": {
      "de": "weisen",
      "lv": "δείχνω"
    },
    "praesens": {
      "de": "er weist",
      "lv": "αυτός δείχνει"
    },
    "imperfektIndikativ": {
      "de": "er wies",
      "lv": "αυτός έδειξε"
    },
    "imperfektKonjunktiv": {
      "de": "er wiese",
      "lv": "αυτός θα έδειχνε"
    },
    "partizipVergangenheit": {
      "de": "gewiesen",
      "lv": "έχει δείξει"
    }
  },
  {
    "infinitiv": {
      "de": "wenden",
      "lv": "γυρίζω / αναποδογυρίζω"
    },
    "praesens": {
      "de": "er wendet",
      "lv": "αυτός γυρίζει / αναποδογυρίζει"
    },
    "imperfektIndikativ": {
      "de": "er wandte / es wendete",
      "lv": "αυτός γύρισε / αναποδογύρισε"
    },
    "imperfektKonjunktiv": {
      "de": "er wendete",
      "lv": "αυτός θα γύριζε / θα αναποδογύριζε"
    },
    "partizipVergangenheit": {
      "de": "gewandt / gewendet",
      "lv": "γυρισμένος / αναποδογυρισμένος"
    }
  },
  {
    "infinitiv": {
      "de": "werben",
      "lv": "κάνω πρόταση γάμου"
    },
    "praesens": {
      "de": "er wirbt",
      "lv": "αυτός κάνει πρόταση γάμου"
    },
    "imperfektIndikativ": {
      "de": "er warb",
      "lv": "αυτός έκανε πρόταση γάμου"
    },
    "imperfektKonjunktiv": {
      "de": "er würbe",
      "lv": "αυτός θα έκανε πρόταση γάμου"
    },
    "partizipVergangenheit": {
      "de": "geworben",
      "lv": "έχει κάνει πρόταση γάμου"
    }
  },
  {
    "infinitiv": {
      "de": "werden",
      "lv": "γίνομαι"
    },
    "praesens": {
      "de": "er wird",
      "lv": "αυτός γίνεται"
    },
    "imperfektIndikativ": {
      "de": "wurde",
      "lv": "αυτός έγινε"
    },
    "imperfektKonjunktiv": {
      "de": "wurde",
      "lv": "αυτός θα γινόταν"
    },
    "partizipVergangenheit": {
      "de": "geworden",
      "lv": "έχει γίνει"
    }
  },
  {
    "infinitiv": {
      "de": "werfen",
      "lv": "ρίχνω"
    },
    "praesens": {
      "de": "er wirft",
      "lv": "αυτός ρίχνει"
    },
    "imperfektIndikativ": {
      "de": "er warf",
      "lv": "αυτός έριξε"
    },
    "imperfektKonjunktiv": {
      "de": "er würfe",
      "lv": "αυτός θα έριχνε"
    },
    "partizipVergangenheit": {
      "de": "geworfen",
      "lv": "ριγμένος"
    }
  },
  {
    "infinitiv": {
      "de": "wiegen",
      "lv": "ζυγίζω"
    },
    "praesens": {
      "de": "er wiegt",
      "lv": "αυτός ζυγίζει"
    },
    "imperfektIndikativ": {
      "de": "er wog",
      "lv": "αυτός ζύγισε"
    },
    "imperfektKonjunktiv": {
      "de": "er wöge",
      "lv": "αυτός θα ζύγιζε"
    },
    "partizipVergangenheit": {
      "de": "gewogen",
      "lv": "ζυγισμένος"
    }
  },
  {
    "infinitiv": {
      "de": "winden",
      "lv": "πλέκω"
    },
    "praesens": {
      "de": "er windet",
      "lv": "αυτός πλέκει"
    },
    "imperfektIndikativ": {
      "de": "er wand",
      "lv": "αυτός έπλεξε"
    },
    "imperfektKonjunktiv": {
      "de": "er wände",
      "lv": "αυτός θα έπλεκε"
    },
    "partizipVergangenheit": {
      "de": "gewunden",
      "lv": "πλεγμένος"
    }
  },
  {
    "infinitiv": {
      "de": "wissen",
      "lv": "ξέρω"
    },
    "praesens": {
      "de": "er weiß",
      "lv": "αυτός ξέρει"
    },
    "imperfektIndikativ": {
      "de": "er wusste",
      "lv": "αυτός ήξερε"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsste",
      "lv": "αυτός θα ήξερε"
    },
    "partizipVergangenheit": {
      "de": "gewusst",
      "lv": "έχει γνωρίσει"
    }
  },
  {
    "infinitiv": {
      "de": "wollen",
      "lv": "θέλω"
    },
    "praesens": {
      "de": "er will",
      "lv": "αυτός θέλει"
    },
    "imperfektIndikativ": {
      "de": "wollte",
      "lv": "αυτός θέλησε"
    },
    "imperfektKonjunktiv": {
      "de": "wollte",
      "lv": "αυτός θα ήθελε"
    },
    "partizipVergangenheit": {
      "de": "gewollt",
      "lv": "έχει θελήσει"
    }
  },
  {
    "infinitiv": {
      "de": "wringen",
      "lv": "στύβω"
    },
    "praesens": {
      "de": "er wringt",
      "lv": "αυτός στύβει"
    },
    "imperfektIndikativ": {
      "de": "wrang",
      "lv": "αυτός έστυψε"
    },
    "imperfektKonjunktiv": {
      "de": "wrang",
      "lv": "αυτός θα έστυβε"
    },
    "partizipVergangenheit": {
      "de": "gewrungen",
      "lv": "στυμμένος"
    }
  },
  {
    "infinitiv": {
      "de": "zeihen",
      "lv": "κατηγορώ"
    },
    "praesens": {
      "de": "er zeiht",
      "lv": "αυτός κατηγορεί"
    },
    "imperfektIndikativ": {
      "de": "zieh",
      "lv": "αυτός κατηγόρησε"
    },
    "imperfektKonjunktiv": {
      "de": "zieh",
      "lv": "αυτός θα κατηγορούσε"
    },
    "partizipVergangenheit": {
      "de": "geziehen",
      "lv": "έχει κατηγορήσει"
    }
  },
  {
    "infinitiv": {
      "de": "ziehen",
      "lv": "τραβώ"
    },
    "praesens": {
      "de": "er zieht",
      "lv": "αυτός τραβά"
    },
    "imperfektIndikativ": {
      "de": "er zog",
      "lv": "αυτός τράβηξε"
    },
    "imperfektKonjunktiv": {
      "de": "er zöge",
      "lv": "αυτός θα τραβούσε"
    },
    "partizipVergangenheit": {
      "de": "gezogen",
      "lv": "τραβηγμένος"
    }
  },
  {
    "infinitiv": {
      "de": "zwingen",
      "lv": "αναγκάζω"
    },
    "praesens": {
      "de": "er zwingt",
      "lv": "αυτός αναγκάζει"
    },
    "imperfektIndikativ": {
      "de": "er zwang",
      "lv": "αυτός ανάγκασε"
    },
    "imperfektKonjunktiv": {
      "de": "er zwänge",
      "lv": "αυτός θα ανάγκαζε"
    },
    "partizipVergangenheit": {
      "de": "gezwungen",
      "lv": "αναγκασμένος"
    }
  },
  {
    "infinitiv": {
      "de": "empfangen",
      "lv": "λαμβάνω"
    },
    "praesens": {
      "de": "er empfängt",
      "lv": "αυτός λαμβάνει"
    },
    "imperfektIndikativ": {
      "de": "er empfing",
      "lv": "αυτός έλαβε"
    },
    "imperfektKonjunktiv": {
      "de": "er empfinge",
      "lv": "αυτός θα λάμβανε"
    },
    "partizipVergangenheit": {
      "de": "empfangen",
      "lv": "έχει λάβει"
    }
  },
  {
    "infinitiv": {
      "de": "erwägen",
      "lv": "σταθμίζω"
    },
    "praesens": {
      "de": "er erwägt",
      "lv": "αυτός σταθμίζει"
    },
    "imperfektIndikativ": {
      "de": "er erwog",
      "lv": "αυτός στάθμισε"
    },
    "imperfektKonjunktiv": {
      "de": "er erwöge",
      "lv": "αυτός θα στάθμιζε"
    },
    "partizipVergangenheit": {
      "de": "erwogen",
      "lv": "σταθμισμένος"
    }
  },
  {
    "infinitiv": {
      "de": "fechten",
      "lv": "πολεμώ"
    },
    "praesens": {
      "de": "er ficht",
      "lv": "αυτός πολεμά"
    },
    "imperfektIndikativ": {
      "de": "er focht",
      "lv": "αυτός πολέμησε"
    },
    "imperfektKonjunktiv": {
      "de": "er föchte",
      "lv": "αυτός θα πολεμούσε"
    },
    "partizipVergangenheit": {
      "de": "gefochten",
      "lv": "έχει πολεμήσει"
    }
  },
  {
    "infinitiv": {
      "de": "flechten",
      "lv": "πλέκω"
    },
    "praesens": {
      "de": "er flicht",
      "lv": "αυτός πλέκει"
    },
    "imperfektIndikativ": {
      "de": "er flocht",
      "lv": "αυτός έπλεξε"
    },
    "imperfektKonjunktiv": {
      "de": "er flöchte",
      "lv": "αυτός θα έπλεκε"
    },
    "partizipVergangenheit": {
      "de": "geflochten",
      "lv": "πλεγμένος"
    }
  },
  {
    "infinitiv": {
      "de": "hangen",
      "lv": "κρέμομαι"
    },
    "praesens": {
      "de": "er hängt",
      "lv": "αυτός κρέμεται"
    },
    "imperfektIndikativ": {
      "de": "er hing",
      "lv": "αυτός κρεμόταν"
    },
    "imperfektKonjunktiv": {
      "de": "er hinge",
      "lv": "αυτός θα κρεμόταν"
    },
    "partizipVergangenheit": {
      "de": "gehangen",
      "lv": "κρεμασμένος"
    }
  },
  {
    "infinitiv": {
      "de": "spalten",
      "lv": "σκίζω"
    },
    "praesens": {
      "de": "er spaltet",
      "lv": "αυτός σκίζει"
    },
    "imperfektIndikativ": {
      "de": "er spaltete",
      "lv": "αυτός έσκισε"
    },
    "imperfektKonjunktiv": {
      "de": "er spaltete",
      "lv": "αυτός θα έσκιζε"
    },
    "partizipVergangenheit": {
      "de": "gespalten",
      "lv": "σκισμένος"
    }
  },
  {
    "infinitiv": {
      "de": "verzeihen",
      "lv": "συγχωρώ"
    },
    "praesens": {
      "de": "er verzeiht",
      "lv": "αυτός συγχωρεί"
    },
    "imperfektIndikativ": {
      "de": "er verzieh",
      "lv": "αυτός συγχώρησε"
    },
    "imperfektKonjunktiv": {
      "de": "er verziehe",
      "lv": "αυτός θα συγχωρούσε"
    },
    "partizipVergangenheit": {
      "de": "verziehen",
      "lv": "συγχωρημένος"
    }
  }
];

window.VERB_ENTRIES = VERB_ENTRIES;

const VERB_ENTRIES = [
  {
    "infinitiv": {
      "de": "backen",
      "lv": "piec"
    },
    "praesens": {
      "de": "er bäckt",
      "lv": "on piecze"
    },
    "imperfektIndikativ": {
      "de": "er buk",
      "lv": "on piekł"
    },
    "imperfektKonjunktiv": {
      "de": "er büke",
      "lv": "on piekłby"
    },
    "partizipVergangenheit": {
      "de": "gebacken",
      "lv": "pieczony"
    }
  },
  {
    "infinitiv": {
      "de": "befehlen",
      "lv": "rozkazywać"
    },
    "praesens": {
      "de": "er befiehlt",
      "lv": "on rozkazuje"
    },
    "imperfektIndikativ": {
      "de": "er befahl",
      "lv": "on rozkazywał"
    },
    "imperfektKonjunktiv": {
      "de": "er beföhle",
      "lv": "on rozkazywałby"
    },
    "partizipVergangenheit": {
      "de": "befohlen",
      "lv": "rozkazywał"
    }
  },
  {
    "infinitiv": {
      "de": "beginnen",
      "lv": "zaczynać"
    },
    "praesens": {
      "de": "er beginnt",
      "lv": "on zaczyna"
    },
    "imperfektIndikativ": {
      "de": "er begann",
      "lv": "on zaczynał"
    },
    "imperfektKonjunktiv": {
      "de": "er begönne / er begänne",
      "lv": "on zaczynałby"
    },
    "partizipVergangenheit": {
      "de": "begonnen",
      "lv": "zaczynany"
    }
  },
  {
    "infinitiv": {
      "de": "beißen",
      "lv": "gryźć"
    },
    "praesens": {
      "de": "er beißt",
      "lv": "on gryzie"
    },
    "imperfektIndikativ": {
      "de": "er biss",
      "lv": "on gryzł"
    },
    "imperfektKonjunktiv": {
      "de": "er bisse",
      "lv": "on gryzłby"
    },
    "partizipVergangenheit": {
      "de": "gebissen",
      "lv": "gryziony"
    }
  },
  {
    "infinitiv": {
      "de": "bergen",
      "lv": "ratować / ukrywać"
    },
    "praesens": {
      "de": "er birgt",
      "lv": "on ratuje / ukrywa"
    },
    "imperfektIndikativ": {
      "de": "er barg",
      "lv": "on ratował / ukrywał"
    },
    "imperfektKonjunktiv": {
      "de": "er bürge / er bärge",
      "lv": "on ratowałby / ukrywałby"
    },
    "partizipVergangenheit": {
      "de": "geborgen",
      "lv": "ratowany / ukrywany"
    }
  },
  {
    "infinitiv": {
      "de": "bersten",
      "lv": "pękać"
    },
    "praesens": {
      "de": "er birst",
      "lv": "on pęka"
    },
    "imperfektIndikativ": {
      "de": "er barst / er borst",
      "lv": "on pękał"
    },
    "imperfektKonjunktiv": {
      "de": "er bärste / er börste",
      "lv": "on pękałby"
    },
    "partizipVergangenheit": {
      "de": "geborsten (er ist)",
      "lv": "pękał"
    }
  },
  {
    "infinitiv": {
      "de": "bewegen",
      "lv": "skłaniać"
    },
    "praesens": {
      "de": "er bewegt",
      "lv": "on skłania"
    },
    "imperfektIndikativ": {
      "de": "er bewog",
      "lv": "on skłaniał"
    },
    "imperfektKonjunktiv": {
      "de": "er bewöge",
      "lv": "on skłaniałby"
    },
    "partizipVergangenheit": {
      "de": "bewogen",
      "lv": "skłaniany"
    }
  },
  {
    "infinitiv": {
      "de": "biegen",
      "lv": "zginać"
    },
    "praesens": {
      "de": "er biegt",
      "lv": "on zgina"
    },
    "imperfektIndikativ": {
      "de": "er bog",
      "lv": "on zginał"
    },
    "imperfektKonjunktiv": {
      "de": "er böge",
      "lv": "on zginałby"
    },
    "partizipVergangenheit": {
      "de": "gebogen",
      "lv": "zginany"
    }
  },
  {
    "infinitiv": {
      "de": "bieten",
      "lv": "oferować"
    },
    "praesens": {
      "de": "er bietet",
      "lv": "on oferuje"
    },
    "imperfektIndikativ": {
      "de": "er bot",
      "lv": "on oferował"
    },
    "imperfektKonjunktiv": {
      "de": "er böte",
      "lv": "on oferowałby"
    },
    "partizipVergangenheit": {
      "de": "geboten",
      "lv": "oferowany"
    }
  },
  {
    "infinitiv": {
      "de": "binden",
      "lv": "wiązać"
    },
    "praesens": {
      "de": "er bindet",
      "lv": "on wiąże"
    },
    "imperfektIndikativ": {
      "de": "er band",
      "lv": "on wiązał"
    },
    "imperfektKonjunktiv": {
      "de": "er bände",
      "lv": "on wiązałby"
    },
    "partizipVergangenheit": {
      "de": "gebunden",
      "lv": "wiązany"
    }
  },
  {
    "infinitiv": {
      "de": "bitten",
      "lv": "prosić"
    },
    "praesens": {
      "de": "er bittet",
      "lv": "on prosi"
    },
    "imperfektIndikativ": {
      "de": "er bat",
      "lv": "on prosił"
    },
    "imperfektKonjunktiv": {
      "de": "er bäte",
      "lv": "on prosiłby"
    },
    "partizipVergangenheit": {
      "de": "gebeten",
      "lv": "proszony"
    }
  },
  {
    "infinitiv": {
      "de": "blasen",
      "lv": "dmuchać"
    },
    "praesens": {
      "de": "er bläst",
      "lv": "on dmucha"
    },
    "imperfektIndikativ": {
      "de": "er blies",
      "lv": "on dmuchał"
    },
    "imperfektKonjunktiv": {
      "de": "er bliese",
      "lv": "on dmuchałby"
    },
    "partizipVergangenheit": {
      "de": "geblasen",
      "lv": "dmuchany"
    }
  },
  {
    "infinitiv": {
      "de": "gären",
      "lv": "fermentować"
    },
    "praesens": {
      "de": "es gärt",
      "lv": "ono fermentuje"
    },
    "imperfektIndikativ": {
      "de": "es gor / es gärte",
      "lv": "ono fermentowało"
    },
    "imperfektKonjunktiv": {
      "de": "es göre / es gärte",
      "lv": "ono fermentowałoby"
    },
    "partizipVergangenheit": {
      "de": "gegoren / gegärt",
      "lv": "fermentował"
    }
  },
  {
    "infinitiv": {
      "de": "gebären",
      "lv": "rodzić"
    },
    "praesens": {
      "de": "sie gebiert",
      "lv": "ona rodzi"
    },
    "imperfektIndikativ": {
      "de": "sie gebar",
      "lv": "ona rodziła"
    },
    "imperfektKonjunktiv": {
      "de": "sie gebäre",
      "lv": "ona rodziłaby"
    },
    "partizipVergangenheit": {
      "de": "geboren",
      "lv": "rodzony"
    }
  },
  {
    "infinitiv": {
      "de": "gelingen",
      "lv": "udawać się"
    },
    "praesens": {
      "de": "es gelingt",
      "lv": "ono udaje się"
    },
    "imperfektIndikativ": {
      "de": "es gelang",
      "lv": "ono udawało się"
    },
    "imperfektKonjunktiv": {
      "de": "es gelänge",
      "lv": "ono udawałoby się"
    },
    "partizipVergangenheit": {
      "de": "gelungen (es ist)",
      "lv": "udawał się"
    }
  },
  {
    "infinitiv": {
      "de": "gelten",
      "lv": "nadawać się / obowiązywać"
    },
    "praesens": {
      "de": "er gilt",
      "lv": "on nadaje się / obowiązuje"
    },
    "imperfektIndikativ": {
      "de": "er galt",
      "lv": "on nadawał się / obowiązywał"
    },
    "imperfektKonjunktiv": {
      "de": "er gölte / es gälte",
      "lv": "on nadawałby się / obowiązywałby"
    },
    "partizipVergangenheit": {
      "de": "gegolten",
      "lv": "nadawał się / obowiązywał"
    }
  },
  {
    "infinitiv": {
      "de": "genesen",
      "lv": "zdrowieć"
    },
    "praesens": {
      "de": "er genest",
      "lv": "on zdrowieje"
    },
    "imperfektIndikativ": {
      "de": "er genas",
      "lv": "on zdrowiał"
    },
    "imperfektKonjunktiv": {
      "de": "er genäse",
      "lv": "on zdrowiałby"
    },
    "partizipVergangenheit": {
      "de": "genesen (er ist)",
      "lv": "zdrowiał"
    }
  },
  {
    "infinitiv": {
      "de": "genießen",
      "lv": "rozkoszować się"
    },
    "praesens": {
      "de": "er genießt",
      "lv": "on rozkoszuje się"
    },
    "imperfektIndikativ": {
      "de": "er genoss",
      "lv": "on rozkoszował się"
    },
    "imperfektKonjunktiv": {
      "de": "er genösse",
      "lv": "on rozkoszowałby się"
    },
    "partizipVergangenheit": {
      "de": "genossen",
      "lv": "rozkoszował się"
    }
  },
  {
    "infinitiv": {
      "de": "geschehen",
      "lv": "zdarzać się"
    },
    "praesens": {
      "de": "es geschieht",
      "lv": "ono zdarza się"
    },
    "imperfektIndikativ": {
      "de": "es geschah",
      "lv": "ono zdarzało się"
    },
    "imperfektKonjunktiv": {
      "de": "es geschähe",
      "lv": "ono zdarzałoby się"
    },
    "partizipVergangenheit": {
      "de": "geschehen (es ist)",
      "lv": "zdarzał się"
    }
  },
  {
    "infinitiv": {
      "de": "gießen",
      "lv": "lać"
    },
    "praesens": {
      "de": "er gießt",
      "lv": "on leje"
    },
    "imperfektIndikativ": {
      "de": "er goss",
      "lv": "on lał"
    },
    "imperfektKonjunktiv": {
      "de": "er gösse",
      "lv": "on lałby"
    },
    "partizipVergangenheit": {
      "de": "gegossen",
      "lv": "lany"
    }
  },
  {
    "infinitiv": {
      "de": "gleichen",
      "lv": "przypominać"
    },
    "praesens": {
      "de": "er gleicht",
      "lv": "on przypomina"
    },
    "imperfektIndikativ": {
      "de": "er glich",
      "lv": "on przypominał"
    },
    "imperfektKonjunktiv": {
      "de": "er gliche",
      "lv": "on przypominałby"
    },
    "partizipVergangenheit": {
      "de": "geglichen",
      "lv": "przypominał"
    }
  },
  {
    "infinitiv": {
      "de": "gleiten",
      "lv": "ślizgać się"
    },
    "praesens": {
      "de": "er gleitet",
      "lv": "on ślizga się"
    },
    "imperfektIndikativ": {
      "de": "er glitt",
      "lv": "on ślizgał się"
    },
    "imperfektKonjunktiv": {
      "de": "er glitte",
      "lv": "on ślizgałby się"
    },
    "partizipVergangenheit": {
      "de": "geglitten (er ist)",
      "lv": "ślizgał się"
    }
  },
  {
    "infinitiv": {
      "de": "glimmen",
      "lv": "tlić się"
    },
    "praesens": {
      "de": "er glimmt",
      "lv": "on tli się"
    },
    "imperfektIndikativ": {
      "de": "er glimmte / glomm",
      "lv": "on tlił się"
    },
    "imperfektKonjunktiv": {
      "de": "er glimmte",
      "lv": "on tliłby się"
    },
    "partizipVergangenheit": {
      "de": "geglimmt / geglommen",
      "lv": "tlił się"
    }
  },
  {
    "infinitiv": {
      "de": "graben",
      "lv": "kopać"
    },
    "praesens": {
      "de": "er gräbt",
      "lv": "on kopie"
    },
    "imperfektIndikativ": {
      "de": "er grub",
      "lv": "on kopał"
    },
    "imperfektKonjunktiv": {
      "de": "er grübe",
      "lv": "on kopałby"
    },
    "partizipVergangenheit": {
      "de": "gegraben",
      "lv": "kopany"
    }
  },
  {
    "infinitiv": {
      "de": "greifen",
      "lv": "chwytać"
    },
    "praesens": {
      "de": "er greift",
      "lv": "on chwyta"
    },
    "imperfektIndikativ": {
      "de": "er griff",
      "lv": "on chwytał"
    },
    "imperfektKonjunktiv": {
      "de": "er griffe",
      "lv": "on chwytałby"
    },
    "partizipVergangenheit": {
      "de": "gegriffen",
      "lv": "chwytany"
    }
  },
  {
    "infinitiv": {
      "de": "hauen",
      "lv": "rąbać"
    },
    "praesens": {
      "de": "er haut",
      "lv": "on rąbie"
    },
    "imperfektIndikativ": {
      "de": "er hieb",
      "lv": "on rąbał"
    },
    "imperfektKonjunktiv": {
      "de": "er hiebe",
      "lv": "on rąbałby"
    },
    "partizipVergangenheit": {
      "de": "gehauen",
      "lv": "rąbany"
    }
  },
  {
    "infinitiv": {
      "de": "heben",
      "lv": "podnosić"
    },
    "praesens": {
      "de": "er hebt",
      "lv": "on podnosi"
    },
    "imperfektIndikativ": {
      "de": "er hob",
      "lv": "on podnosił"
    },
    "imperfektKonjunktiv": {
      "de": "er höbe",
      "lv": "on podnosiłby"
    },
    "partizipVergangenheit": {
      "de": "gehoben",
      "lv": "podnoszony"
    }
  },
  {
    "infinitiv": {
      "de": "kennen",
      "lv": "znać / wiedzieć"
    },
    "praesens": {
      "de": "er kennt",
      "lv": "on zna / wie"
    },
    "imperfektIndikativ": {
      "de": "kannte",
      "lv": "on znał / wiedział"
    },
    "imperfektKonjunktiv": {
      "de": "kannte",
      "lv": "on znałby / wiedziałby"
    },
    "partizipVergangenheit": {
      "de": "gekannt",
      "lv": "znany / wiedział"
    }
  },
  {
    "infinitiv": {
      "de": "klingen",
      "lv": "brzmieć"
    },
    "praesens": {
      "de": "er klingt",
      "lv": "on brzmi"
    },
    "imperfektIndikativ": {
      "de": "er klang",
      "lv": "on brzmiał"
    },
    "imperfektKonjunktiv": {
      "de": "er klänge",
      "lv": "on brzmiałby"
    },
    "partizipVergangenheit": {
      "de": "geklungen",
      "lv": "brzmiał"
    }
  },
  {
    "infinitiv": {
      "de": "kneifen",
      "lv": "szczypać"
    },
    "praesens": {
      "de": "er kneift",
      "lv": "on szczypie"
    },
    "imperfektIndikativ": {
      "de": "er kniff",
      "lv": "on szczypał"
    },
    "imperfektKonjunktiv": {
      "de": "er kniffe",
      "lv": "on szczypałby"
    },
    "partizipVergangenheit": {
      "de": "gekniffen",
      "lv": "szczypany"
    }
  },
  {
    "infinitiv": {
      "de": "bleiben",
      "lv": "zostawać"
    },
    "praesens": {
      "de": "er bleibt",
      "lv": "on zostaje"
    },
    "imperfektIndikativ": {
      "de": "er blieb",
      "lv": "on zostawał"
    },
    "imperfektKonjunktiv": {
      "de": "er bliebe",
      "lv": "on zostawałby"
    },
    "partizipVergangenheit": {
      "de": "geblieben (er ist)",
      "lv": "zostawał"
    }
  },
  {
    "infinitiv": {
      "de": "bleichen",
      "lv": "blaknąć"
    },
    "praesens": {
      "de": "er bleicht",
      "lv": "on blaknie"
    },
    "imperfektIndikativ": {
      "de": "blich",
      "lv": "on blakł"
    },
    "imperfektKonjunktiv": {
      "de": "blich",
      "lv": "on blakłby"
    },
    "partizipVergangenheit": {
      "de": "geblichen",
      "lv": "blakł"
    }
  },
  {
    "infinitiv": {
      "de": "braten",
      "lv": "smażyć"
    },
    "praesens": {
      "de": "er brät",
      "lv": "on smaży"
    },
    "imperfektIndikativ": {
      "de": "er briet",
      "lv": "on smażył"
    },
    "imperfektKonjunktiv": {
      "de": "er briete",
      "lv": "on smażyłby"
    },
    "partizipVergangenheit": {
      "de": "gebraten",
      "lv": "smażony"
    }
  },
  {
    "infinitiv": {
      "de": "brechen",
      "lv": "łamać"
    },
    "praesens": {
      "de": "er bricht",
      "lv": "on łamie"
    },
    "imperfektIndikativ": {
      "de": "er brach",
      "lv": "on łamał"
    },
    "imperfektKonjunktiv": {
      "de": "er bräche",
      "lv": "on łamałby"
    },
    "partizipVergangenheit": {
      "de": "gebrochen",
      "lv": "łamany"
    }
  },
  {
    "infinitiv": {
      "de": "brennen",
      "lv": "palić się"
    },
    "praesens": {
      "de": "er brennt",
      "lv": "on pali się"
    },
    "imperfektIndikativ": {
      "de": "brannte",
      "lv": "on palił się"
    },
    "imperfektKonjunktiv": {
      "de": "brannte",
      "lv": "on paliłby się"
    },
    "partizipVergangenheit": {
      "de": "gebrannt",
      "lv": "palił się"
    }
  },
  {
    "infinitiv": {
      "de": "bringen",
      "lv": "przynosić"
    },
    "praesens": {
      "de": "er bringt",
      "lv": "on przynosi"
    },
    "imperfektIndikativ": {
      "de": "er brachte",
      "lv": "on przynosił"
    },
    "imperfektKonjunktiv": {
      "de": "er brächte",
      "lv": "on przynosiłby"
    },
    "partizipVergangenheit": {
      "de": "gebracht",
      "lv": "przynoszony"
    }
  },
  {
    "infinitiv": {
      "de": "denken",
      "lv": "myśleć"
    },
    "praesens": {
      "de": "er denkt",
      "lv": "on myśli"
    },
    "imperfektIndikativ": {
      "de": "er dachte",
      "lv": "on myślał"
    },
    "imperfektKonjunktiv": {
      "de": "er dächte",
      "lv": "on myślałby"
    },
    "partizipVergangenheit": {
      "de": "gedacht",
      "lv": "myślał"
    }
  },
  {
    "infinitiv": {
      "de": "dingen",
      "lv": "najmować / umawiać się"
    },
    "praesens": {
      "de": "er dingt",
      "lv": "on najmuje / umawia się"
    },
    "imperfektIndikativ": {
      "de": "dingte",
      "lv": "on najmował / umawiał się"
    },
    "imperfektKonjunktiv": {
      "de": "dingte",
      "lv": "on najmowałby / umawiałby się"
    },
    "partizipVergangenheit": {
      "de": "gedungen",
      "lv": "najmowany / umawiał się"
    }
  },
  {
    "infinitiv": {
      "de": "dreschen",
      "lv": "młócić"
    },
    "praesens": {
      "de": "er drischt",
      "lv": "on młóci"
    },
    "imperfektIndikativ": {
      "de": "er drasch / er drosch",
      "lv": "on młócił"
    },
    "imperfektKonjunktiv": {
      "de": "er dräsche / er drösche",
      "lv": "on młóciłby"
    },
    "partizipVergangenheit": {
      "de": "gedroschen",
      "lv": "młócony"
    }
  },
  {
    "infinitiv": {
      "de": "dringen",
      "lv": "wdzierać się"
    },
    "praesens": {
      "de": "er dringt",
      "lv": "on wdziera się"
    },
    "imperfektIndikativ": {
      "de": "er drang",
      "lv": "on wdzierał się"
    },
    "imperfektKonjunktiv": {
      "de": "er dränge",
      "lv": "on wdzierałby się"
    },
    "partizipVergangenheit": {
      "de": "gedrungen (er ist)",
      "lv": "wdzierał się"
    }
  },
  {
    "infinitiv": {
      "de": "dünken",
      "lv": "zdawać się"
    },
    "praesens": {
      "de": "es dünkt",
      "lv": "ono zdaje się"
    },
    "imperfektIndikativ": {
      "de": "deuchte",
      "lv": "ono zdawało się"
    },
    "imperfektKonjunktiv": {
      "de": "deuchte",
      "lv": "ono zdawałoby się"
    },
    "partizipVergangenheit": {
      "de": "gedünkt",
      "lv": "zdawał się"
    }
  },
  {
    "infinitiv": {
      "de": "dürfen",
      "lv": "móc"
    },
    "praesens": {
      "de": "er darf",
      "lv": "on może"
    },
    "imperfektIndikativ": {
      "de": "durfte",
      "lv": "on mógł"
    },
    "imperfektKonjunktiv": {
      "de": "durfte",
      "lv": "on mógłby"
    },
    "partizipVergangenheit": {
      "de": "gedurft",
      "lv": "mógł"
    }
  },
  {
    "infinitiv": {
      "de": "empfehlen",
      "lv": "polecać"
    },
    "praesens": {
      "de": "er empfiehlt",
      "lv": "on poleca"
    },
    "imperfektIndikativ": {
      "de": "er empfahl",
      "lv": "on polecał"
    },
    "imperfektKonjunktiv": {
      "de": "er empfähle / er empföhle",
      "lv": "on polecałby"
    },
    "partizipVergangenheit": {
      "de": "empfohlen",
      "lv": "polecany"
    }
  },
  {
    "infinitiv": {
      "de": "empfinden",
      "lv": "odczuwać"
    },
    "praesens": {
      "de": "er empfindet",
      "lv": "on odczuwa"
    },
    "imperfektIndikativ": {
      "de": "er empfand",
      "lv": "on odczuwał"
    },
    "imperfektKonjunktiv": {
      "de": "er empfände",
      "lv": "on odczuwałby"
    },
    "partizipVergangenheit": {
      "de": "empfunden",
      "lv": "odczuwany"
    }
  },
  {
    "infinitiv": {
      "de": "erlöschen",
      "lv": "gasnąć"
    },
    "praesens": {
      "de": "er erlischt",
      "lv": "on gaśnie"
    },
    "imperfektIndikativ": {
      "de": "er erlosch",
      "lv": "on gasł"
    },
    "imperfektKonjunktiv": {
      "de": "er erlösche",
      "lv": "on gasłby"
    },
    "partizipVergangenheit": {
      "de": "erloschen (er ist)",
      "lv": "gasł"
    }
  },
  {
    "infinitiv": {
      "de": "erschrecken",
      "lv": "przestraszać się"
    },
    "praesens": {
      "de": "er erschrickt",
      "lv": "on przestrasza się"
    },
    "imperfektIndikativ": {
      "de": "er erschrak",
      "lv": "on przestraszał się"
    },
    "imperfektKonjunktiv": {
      "de": "er erschräke",
      "lv": "on przestraszałby się"
    },
    "partizipVergangenheit": {
      "de": "erschrocken (er ist)",
      "lv": "przestraszał się"
    }
  },
  {
    "infinitiv": {
      "de": "essen",
      "lv": "jeść"
    },
    "praesens": {
      "de": "er isst",
      "lv": "on je"
    },
    "imperfektIndikativ": {
      "de": "er ass",
      "lv": "on jadł"
    },
    "imperfektKonjunktiv": {
      "de": "er äße",
      "lv": "on jadłby"
    },
    "partizipVergangenheit": {
      "de": "gegessen",
      "lv": "jedzony"
    }
  },
  {
    "infinitiv": {
      "de": "fahren",
      "lv": "jechać"
    },
    "praesens": {
      "de": "er fährt",
      "lv": "on jedzie"
    },
    "imperfektIndikativ": {
      "de": "er fuhr",
      "lv": "on jechał"
    },
    "imperfektKonjunktiv": {
      "de": "er führe",
      "lv": "on jechałby"
    },
    "partizipVergangenheit": {
      "de": "gefahren (er ist)",
      "lv": "jechał"
    }
  },
  {
    "infinitiv": {
      "de": "fallen",
      "lv": "padać"
    },
    "praesens": {
      "de": "er fällt",
      "lv": "on pada"
    },
    "imperfektIndikativ": {
      "de": "er fiel",
      "lv": "on padał"
    },
    "imperfektKonjunktiv": {
      "de": "er fiele",
      "lv": "on padałby"
    },
    "partizipVergangenheit": {
      "de": "gefallen (er ist)",
      "lv": "padał"
    }
  },
  {
    "infinitiv": {
      "de": "fangen",
      "lv": "łapać"
    },
    "praesens": {
      "de": "er fängt",
      "lv": "on łapie"
    },
    "imperfektIndikativ": {
      "de": "er fing",
      "lv": "on łapał"
    },
    "imperfektKonjunktiv": {
      "de": "er finge",
      "lv": "on łapałby"
    },
    "partizipVergangenheit": {
      "de": "gefangen",
      "lv": "łapany"
    }
  },
  {
    "infinitiv": {
      "de": "finden",
      "lv": "znajdować"
    },
    "praesens": {
      "de": "er findet",
      "lv": "on znajduje"
    },
    "imperfektIndikativ": {
      "de": "er fand",
      "lv": "on znajdował"
    },
    "imperfektKonjunktiv": {
      "de": "er fände",
      "lv": "on znajdowałby"
    },
    "partizipVergangenheit": {
      "de": "gefunden",
      "lv": "znajdowany"
    }
  },
  {
    "infinitiv": {
      "de": "fliegen",
      "lv": "latać"
    },
    "praesens": {
      "de": "er fliegt",
      "lv": "on lata"
    },
    "imperfektIndikativ": {
      "de": "er flog",
      "lv": "on latał"
    },
    "imperfektKonjunktiv": {
      "de": "er flöge",
      "lv": "on latałby"
    },
    "partizipVergangenheit": {
      "de": "geflogen (er ist)",
      "lv": "latał"
    }
  },
  {
    "infinitiv": {
      "de": "fliehen",
      "lv": "uciekać"
    },
    "praesens": {
      "de": "er flieht",
      "lv": "on ucieka"
    },
    "imperfektIndikativ": {
      "de": "er floh",
      "lv": "on uciekał"
    },
    "imperfektKonjunktiv": {
      "de": "er flöhe",
      "lv": "on uciekałby"
    },
    "partizipVergangenheit": {
      "de": "geflohen (er ist)",
      "lv": "uciekał"
    }
  },
  {
    "infinitiv": {
      "de": "fließen",
      "lv": "płynąć"
    },
    "praesens": {
      "de": "er fließt",
      "lv": "on płynie"
    },
    "imperfektIndikativ": {
      "de": "er floss",
      "lv": "on płynął"
    },
    "imperfektKonjunktiv": {
      "de": "er flösse",
      "lv": "on płynąłby"
    },
    "partizipVergangenheit": {
      "de": "geflossen (er ist)",
      "lv": "płynął"
    }
  },
  {
    "infinitiv": {
      "de": "fressen",
      "lv": "jeść / żreć"
    },
    "praesens": {
      "de": "er frisst",
      "lv": "on je / żre"
    },
    "imperfektIndikativ": {
      "de": "er frass",
      "lv": "on jadł / żarł"
    },
    "imperfektKonjunktiv": {
      "de": "er fräße",
      "lv": "on jadłby / żarłby"
    },
    "partizipVergangenheit": {
      "de": "gefressen",
      "lv": "jedzony / żarty"
    }
  },
  {
    "infinitiv": {
      "de": "frieren",
      "lv": "marznąć"
    },
    "praesens": {
      "de": "er friert",
      "lv": "on marznie"
    },
    "imperfektIndikativ": {
      "de": "er fror",
      "lv": "on marzł"
    },
    "imperfektKonjunktiv": {
      "de": "er fröre",
      "lv": "on marzłby"
    },
    "partizipVergangenheit": {
      "de": "gefroren",
      "lv": "marzł"
    }
  },
  {
    "infinitiv": {
      "de": "geben",
      "lv": "dawać"
    },
    "praesens": {
      "de": "er gibt",
      "lv": "on daje"
    },
    "imperfektIndikativ": {
      "de": "er gab",
      "lv": "on dawał"
    },
    "imperfektKonjunktiv": {
      "de": "er gäbe",
      "lv": "on dawałby"
    },
    "partizipVergangenheit": {
      "de": "gegeben",
      "lv": "dawany"
    }
  },
  {
    "infinitiv": {
      "de": "gedeihen",
      "lv": "rozwijać się"
    },
    "praesens": {
      "de": "er gedeiht",
      "lv": "on rozwija się"
    },
    "imperfektIndikativ": {
      "de": "er gedieh",
      "lv": "on rozwijał się"
    },
    "imperfektKonjunktiv": {
      "de": "er gediehe",
      "lv": "on rozwijałby się"
    },
    "partizipVergangenheit": {
      "de": "gediehen (er ist)",
      "lv": "rozwijał się"
    }
  },
  {
    "infinitiv": {
      "de": "gehen",
      "lv": "iść"
    },
    "praesens": {
      "de": "er geht",
      "lv": "on idzie"
    },
    "imperfektIndikativ": {
      "de": "er ging",
      "lv": "on szedł"
    },
    "imperfektKonjunktiv": {
      "de": "er ginge",
      "lv": "on szedłby"
    },
    "partizipVergangenheit": {
      "de": "gegangen (er ist)",
      "lv": "szedł"
    }
  },
  {
    "infinitiv": {
      "de": "gewinnen",
      "lv": "zdobywać"
    },
    "praesens": {
      "de": "er gewinnt",
      "lv": "on zdobywa"
    },
    "imperfektIndikativ": {
      "de": "er gewann",
      "lv": "on zdobywał"
    },
    "imperfektKonjunktiv": {
      "de": "er gewönne / er gewänne",
      "lv": "on zdobywałby"
    },
    "partizipVergangenheit": {
      "de": "gewonnen",
      "lv": "zdobywany"
    }
  },
  {
    "infinitiv": {
      "de": "haben",
      "lv": "mieć"
    },
    "praesens": {
      "de": "er hat",
      "lv": "on ma"
    },
    "imperfektIndikativ": {
      "de": "hatte",
      "lv": "on miał"
    },
    "imperfektKonjunktiv": {
      "de": "hatte",
      "lv": "on miałby"
    },
    "partizipVergangenheit": {
      "de": "gehabt",
      "lv": "miał"
    }
  },
  {
    "infinitiv": {
      "de": "halten",
      "lv": "trzymać"
    },
    "praesens": {
      "de": "er hält",
      "lv": "on trzyma"
    },
    "imperfektIndikativ": {
      "de": "er hielt",
      "lv": "on trzymał"
    },
    "imperfektKonjunktiv": {
      "de": "er hielte",
      "lv": "on trzymałby"
    },
    "partizipVergangenheit": {
      "de": "gehalten",
      "lv": "trzymany"
    }
  },
  {
    "infinitiv": {
      "de": "heißen",
      "lv": "nazywać / nazywać się"
    },
    "praesens": {
      "de": "er heißt",
      "lv": "on nazywa / nazywa się"
    },
    "imperfektIndikativ": {
      "de": "er hieß",
      "lv": "on nazywał / nazywał się"
    },
    "imperfektKonjunktiv": {
      "de": "er hieße",
      "lv": "on nazywałby / nazywałby się"
    },
    "partizipVergangenheit": {
      "de": "geheißen",
      "lv": "nazywany / nazywał się"
    }
  },
  {
    "infinitiv": {
      "de": "helfen",
      "lv": "pomagać"
    },
    "praesens": {
      "de": "er hilft",
      "lv": "on pomaga"
    },
    "imperfektIndikativ": {
      "de": "er half",
      "lv": "on pomagał"
    },
    "imperfektKonjunktiv": {
      "de": "er hülfe / er hälfe",
      "lv": "on pomagałby"
    },
    "partizipVergangenheit": {
      "de": "geholfen",
      "lv": "pomagał"
    }
  },
  {
    "infinitiv": {
      "de": "kommen",
      "lv": "przychodzić"
    },
    "praesens": {
      "de": "er kommt",
      "lv": "on przychodzi"
    },
    "imperfektIndikativ": {
      "de": "er kam",
      "lv": "on przychodził"
    },
    "imperfektKonjunktiv": {
      "de": "er käme",
      "lv": "on przychodziłby"
    },
    "partizipVergangenheit": {
      "de": "gekommen (er ist)",
      "lv": "przychodził"
    }
  },
  {
    "infinitiv": {
      "de": "können",
      "lv": "móc"
    },
    "praesens": {
      "de": "er kann",
      "lv": "on może"
    },
    "imperfektIndikativ": {
      "de": "konnte",
      "lv": "on mógł"
    },
    "imperfektKonjunktiv": {
      "de": "konnte",
      "lv": "on mógłby"
    },
    "partizipVergangenheit": {
      "de": "gekonnt",
      "lv": "mógł"
    }
  },
  {
    "infinitiv": {
      "de": "kriechen",
      "lv": "pełzać"
    },
    "praesens": {
      "de": "er kriecht",
      "lv": "on pełza"
    },
    "imperfektIndikativ": {
      "de": "er kroch",
      "lv": "on pełzał"
    },
    "imperfektKonjunktiv": {
      "de": "er kröche",
      "lv": "on pełzałby"
    },
    "partizipVergangenheit": {
      "de": "gekrochen (er ist)",
      "lv": "pełzał"
    }
  },
  {
    "infinitiv": {
      "de": "laden",
      "lv": "ładować / zapraszać"
    },
    "praesens": {
      "de": "er lädt",
      "lv": "on ładuje / zaprasza"
    },
    "imperfektIndikativ": {
      "de": "er lud",
      "lv": "on ładował / zapraszał"
    },
    "imperfektKonjunktiv": {
      "de": "er lüde",
      "lv": "on ładowałby / zapraszałby"
    },
    "partizipVergangenheit": {
      "de": "geladen",
      "lv": "ładowany / zapraszany"
    }
  },
  {
    "infinitiv": {
      "de": "lassen",
      "lv": "kazać / pozwalać"
    },
    "praesens": {
      "de": "er lässt",
      "lv": "on każe / pozwala"
    },
    "imperfektIndikativ": {
      "de": "er ließ",
      "lv": "on kazał / pozwalał"
    },
    "imperfektKonjunktiv": {
      "de": "er ließe",
      "lv": "on kazałby / pozwalałby"
    },
    "partizipVergangenheit": {
      "de": "gelassen",
      "lv": "kazał / pozwalał"
    }
  },
  {
    "infinitiv": {
      "de": "laufen",
      "lv": "biec"
    },
    "praesens": {
      "de": "er läuft",
      "lv": "on biegnie"
    },
    "imperfektIndikativ": {
      "de": "er lief",
      "lv": "on biegł"
    },
    "imperfektKonjunktiv": {
      "de": "er liefe",
      "lv": "on biegłby"
    },
    "partizipVergangenheit": {
      "de": "gelaufen (er ist)",
      "lv": "biegł"
    }
  },
  {
    "infinitiv": {
      "de": "leiden",
      "lv": "cierpieć"
    },
    "praesens": {
      "de": "er leidet",
      "lv": "on cierpi"
    },
    "imperfektIndikativ": {
      "de": "er litt",
      "lv": "on cierpiał"
    },
    "imperfektKonjunktiv": {
      "de": "er litte",
      "lv": "on cierpiałby"
    },
    "partizipVergangenheit": {
      "de": "gelitten",
      "lv": "cierpiał"
    }
  },
  {
    "infinitiv": {
      "de": "leihen",
      "lv": "pożyczać"
    },
    "praesens": {
      "de": "er leiht",
      "lv": "on pożycza"
    },
    "imperfektIndikativ": {
      "de": "er lieh",
      "lv": "on pożyczał"
    },
    "imperfektKonjunktiv": {
      "de": "er liehe",
      "lv": "on pożyczałby"
    },
    "partizipVergangenheit": {
      "de": "geliehen",
      "lv": "pożyczany"
    }
  },
  {
    "infinitiv": {
      "de": "lesen",
      "lv": "czytać"
    },
    "praesens": {
      "de": "er liest",
      "lv": "on czyta"
    },
    "imperfektIndikativ": {
      "de": "er las",
      "lv": "on czytał"
    },
    "imperfektKonjunktiv": {
      "de": "er läse",
      "lv": "on czytałby"
    },
    "partizipVergangenheit": {
      "de": "gelesen",
      "lv": "czytany"
    }
  },
  {
    "infinitiv": {
      "de": "liegen",
      "lv": "leżeć"
    },
    "praesens": {
      "de": "er liegt",
      "lv": "on leży"
    },
    "imperfektIndikativ": {
      "de": "er lag",
      "lv": "on leżał"
    },
    "imperfektKonjunktiv": {
      "de": "er läge",
      "lv": "on leżałby"
    },
    "partizipVergangenheit": {
      "de": "gelegen",
      "lv": "leżał"
    }
  },
  {
    "infinitiv": {
      "de": "lügen",
      "lv": "kłamać"
    },
    "praesens": {
      "de": "er lügt",
      "lv": "on kłamie"
    },
    "imperfektIndikativ": {
      "de": "er log",
      "lv": "on kłamał"
    },
    "imperfektKonjunktiv": {
      "de": "er löge",
      "lv": "on kłamałby"
    },
    "partizipVergangenheit": {
      "de": "gelogen",
      "lv": "kłamał"
    }
  },
  {
    "infinitiv": {
      "de": "mahlen",
      "lv": "mleć"
    },
    "praesens": {
      "de": "er mahlt",
      "lv": "on miele"
    },
    "imperfektIndikativ": {
      "de": "er mahlte",
      "lv": "on mełł"
    },
    "imperfektKonjunktiv": {
      "de": "er malte",
      "lv": "on mełłby"
    },
    "partizipVergangenheit": {
      "de": "gemahlen",
      "lv": "mielony"
    }
  },
  {
    "infinitiv": {
      "de": "meiden",
      "lv": "unikać"
    },
    "praesens": {
      "de": "er meidet",
      "lv": "on unika"
    },
    "imperfektIndikativ": {
      "de": "er mied",
      "lv": "on unikał"
    },
    "imperfektKonjunktiv": {
      "de": "er miede",
      "lv": "on unikałby"
    },
    "partizipVergangenheit": {
      "de": "gemieden",
      "lv": "unikany"
    }
  },
  {
    "infinitiv": {
      "de": "melken",
      "lv": "doić"
    },
    "praesens": {
      "de": "er milkt / er melkt",
      "lv": "on doi"
    },
    "imperfektIndikativ": {
      "de": "er molk / er melkte",
      "lv": "on doił"
    },
    "imperfektKonjunktiv": {
      "de": "er mölke / er melkte",
      "lv": "on doiłby"
    },
    "partizipVergangenheit": {
      "de": "gemolken / gemelkt",
      "lv": "dojony"
    }
  },
  {
    "infinitiv": {
      "de": "messen",
      "lv": "mierzyć"
    },
    "praesens": {
      "de": "er misst",
      "lv": "on mierzy"
    },
    "imperfektIndikativ": {
      "de": "er mass",
      "lv": "on mierzył"
    },
    "imperfektKonjunktiv": {
      "de": "er mäße",
      "lv": "on mierzyłby"
    },
    "partizipVergangenheit": {
      "de": "gemessen",
      "lv": "mierzony"
    }
  },
  {
    "infinitiv": {
      "de": "misslingen",
      "lv": "nie udawać się"
    },
    "praesens": {
      "de": "es misslingt",
      "lv": "ono nie udaje się"
    },
    "imperfektIndikativ": {
      "de": "misslang",
      "lv": "ono nie udawało się"
    },
    "imperfektKonjunktiv": {
      "de": "misslang",
      "lv": "ono nie udawałoby się"
    },
    "partizipVergangenheit": {
      "de": "misslungen",
      "lv": "nie udawał się"
    }
  },
  {
    "infinitiv": {
      "de": "mögen",
      "lv": "lubić"
    },
    "praesens": {
      "de": "er mag",
      "lv": "on lubi"
    },
    "imperfektIndikativ": {
      "de": "mochte",
      "lv": "on lubił"
    },
    "imperfektKonjunktiv": {
      "de": "mochte",
      "lv": "on lubiłby"
    },
    "partizipVergangenheit": {
      "de": "gemocht",
      "lv": "lubiany"
    }
  },
  {
    "infinitiv": {
      "de": "müssen",
      "lv": "musieć"
    },
    "praesens": {
      "de": "er muss",
      "lv": "on musi"
    },
    "imperfektIndikativ": {
      "de": "musste",
      "lv": "on musiał"
    },
    "imperfektKonjunktiv": {
      "de": "musste",
      "lv": "on musiałby"
    },
    "partizipVergangenheit": {
      "de": "gemusst",
      "lv": "musiał"
    }
  },
  {
    "infinitiv": {
      "de": "nehmen",
      "lv": "brać"
    },
    "praesens": {
      "de": "er nimmt",
      "lv": "on bierze"
    },
    "imperfektIndikativ": {
      "de": "er nahm",
      "lv": "on brał"
    },
    "imperfektKonjunktiv": {
      "de": "er nähme",
      "lv": "on brałby"
    },
    "partizipVergangenheit": {
      "de": "genommen",
      "lv": "brany"
    }
  },
  {
    "infinitiv": {
      "de": "nennen",
      "lv": "nazywać"
    },
    "praesens": {
      "de": "er nennt",
      "lv": "on nazywa"
    },
    "imperfektIndikativ": {
      "de": "er nannte",
      "lv": "on nazywał"
    },
    "imperfektKonjunktiv": {
      "de": "er nennte",
      "lv": "on nazywałby"
    },
    "partizipVergangenheit": {
      "de": "genannt",
      "lv": "nazywany"
    }
  },
  {
    "infinitiv": {
      "de": "pfeifen",
      "lv": "gwizdać"
    },
    "praesens": {
      "de": "er pfeift",
      "lv": "on gwiżdże"
    },
    "imperfektIndikativ": {
      "de": "er pfiff",
      "lv": "on gwizdał"
    },
    "imperfektKonjunktiv": {
      "de": "er pfiffe",
      "lv": "on gwizdałby"
    },
    "partizipVergangenheit": {
      "de": "gepfiffen",
      "lv": "gwizdał"
    }
  },
  {
    "infinitiv": {
      "de": "pflegen",
      "lv": "pielęgnować"
    },
    "praesens": {
      "de": "er pflegt",
      "lv": "on pielęgnuje"
    },
    "imperfektIndikativ": {
      "de": "pflegte / pflog",
      "lv": "on pielęgnował"
    },
    "imperfektKonjunktiv": {
      "de": "pflegte / pflog",
      "lv": "on pielęgnowałby"
    },
    "partizipVergangenheit": {
      "de": "gepflegt / gepflogen",
      "lv": "pielęgnowany"
    }
  },
  {
    "infinitiv": {
      "de": "preisen",
      "lv": "chwalić"
    },
    "praesens": {
      "de": "er preist",
      "lv": "on chwali"
    },
    "imperfektIndikativ": {
      "de": "er pries",
      "lv": "on chwalił"
    },
    "imperfektKonjunktiv": {
      "de": "er priese",
      "lv": "on chwaliłby"
    },
    "partizipVergangenheit": {
      "de": "gepriesen",
      "lv": "chwalony"
    }
  },
  {
    "infinitiv": {
      "de": "quellen",
      "lv": "pęcznieć"
    },
    "praesens": {
      "de": "er quillt",
      "lv": "on pęcznieje"
    },
    "imperfektIndikativ": {
      "de": "er quoll",
      "lv": "on pęczniał"
    },
    "imperfektKonjunktiv": {
      "de": "er quölle",
      "lv": "on pęczniałby"
    },
    "partizipVergangenheit": {
      "de": "gequollen (er ist)",
      "lv": "pęczniał"
    }
  },
  {
    "infinitiv": {
      "de": "raten",
      "lv": "radzić / zgadywać"
    },
    "praesens": {
      "de": "er rät",
      "lv": "on radzi / zgaduje"
    },
    "imperfektIndikativ": {
      "de": "er riet",
      "lv": "on radził / zgadywał"
    },
    "imperfektKonjunktiv": {
      "de": "er riete",
      "lv": "on radziłby / zgadywałby"
    },
    "partizipVergangenheit": {
      "de": "geraten",
      "lv": "radził / zgadywany"
    }
  },
  {
    "infinitiv": {
      "de": "reiben",
      "lv": "trzeć"
    },
    "praesens": {
      "de": "er reibt",
      "lv": "on trze"
    },
    "imperfektIndikativ": {
      "de": "er rieb",
      "lv": "on tarł"
    },
    "imperfektKonjunktiv": {
      "de": "er riebe",
      "lv": "on tarłby"
    },
    "partizipVergangenheit": {
      "de": "gerieben",
      "lv": "tarty"
    }
  },
  {
    "infinitiv": {
      "de": "reißen",
      "lv": "rwać"
    },
    "praesens": {
      "de": "er reißt",
      "lv": "on rwie"
    },
    "imperfektIndikativ": {
      "de": "er riss",
      "lv": "on rwał"
    },
    "imperfektKonjunktiv": {
      "de": "er risse",
      "lv": "on rwałby"
    },
    "partizipVergangenheit": {
      "de": "gerissen",
      "lv": "rwany"
    }
  },
  {
    "infinitiv": {
      "de": "reiten",
      "lv": "jeździć konno"
    },
    "praesens": {
      "de": "er reitet",
      "lv": "on jeździ konno"
    },
    "imperfektIndikativ": {
      "de": "er ritt",
      "lv": "on jeździł konno"
    },
    "imperfektKonjunktiv": {
      "de": "er ritte",
      "lv": "on jeździłby konno"
    },
    "partizipVergangenheit": {
      "de": "geritten (er ist)",
      "lv": "jeździł konno"
    }
  },
  {
    "infinitiv": {
      "de": "rennen",
      "lv": "biegać"
    },
    "praesens": {
      "de": "er rennt",
      "lv": "on biega"
    },
    "imperfektIndikativ": {
      "de": "er rannte",
      "lv": "on biegał"
    },
    "imperfektKonjunktiv": {
      "de": "er rennte",
      "lv": "on biegałby"
    },
    "partizipVergangenheit": {
      "de": "gerannt",
      "lv": "biegał"
    }
  },
  {
    "infinitiv": {
      "de": "riechen",
      "lv": "wąchać"
    },
    "praesens": {
      "de": "er riecht",
      "lv": "on wącha"
    },
    "imperfektIndikativ": {
      "de": "er roch",
      "lv": "on wąchał"
    },
    "imperfektKonjunktiv": {
      "de": "er röche",
      "lv": "on wąchałby"
    },
    "partizipVergangenheit": {
      "de": "gerochen",
      "lv": "wąchany"
    }
  },
  {
    "infinitiv": {
      "de": "ringen",
      "lv": "zmagać się"
    },
    "praesens": {
      "de": "er ringt",
      "lv": "on zmaga się"
    },
    "imperfektIndikativ": {
      "de": "er rang",
      "lv": "on zmagał się"
    },
    "imperfektKonjunktiv": {
      "de": "er ränge",
      "lv": "on zmagałby się"
    },
    "partizipVergangenheit": {
      "de": "gerungen",
      "lv": "zmagał się"
    }
  },
  {
    "infinitiv": {
      "de": "rinnen",
      "lv": "ciec"
    },
    "praesens": {
      "de": "er rinnt",
      "lv": "on cieknie"
    },
    "imperfektIndikativ": {
      "de": "er rann",
      "lv": "on ciekł"
    },
    "imperfektKonjunktiv": {
      "de": "er ränne / er rönne",
      "lv": "on ciekłby"
    },
    "partizipVergangenheit": {
      "de": "geronnen (er ist)",
      "lv": "ciekł"
    }
  },
  {
    "infinitiv": {
      "de": "rufen",
      "lv": "wołać"
    },
    "praesens": {
      "de": "er ruft",
      "lv": "on woła"
    },
    "imperfektIndikativ": {
      "de": "er rief",
      "lv": "on wołał"
    },
    "imperfektKonjunktiv": {
      "de": "er riefe",
      "lv": "on wołałby"
    },
    "partizipVergangenheit": {
      "de": "gerufen",
      "lv": "wołany"
    }
  },
  {
    "infinitiv": {
      "de": "salzen",
      "lv": "solić"
    },
    "praesens": {
      "de": "er salzt",
      "lv": "on soli"
    },
    "imperfektIndikativ": {
      "de": "er salzte",
      "lv": "on solił"
    },
    "imperfektKonjunktiv": {
      "de": "er salzte",
      "lv": "on soliłby"
    },
    "partizipVergangenheit": {
      "de": "gesalzen",
      "lv": "solony"
    }
  },
  {
    "infinitiv": {
      "de": "saufen",
      "lv": "chlać / pić"
    },
    "praesens": {
      "de": "er säuft",
      "lv": "on chla / pije"
    },
    "imperfektIndikativ": {
      "de": "er soff",
      "lv": "on chlał / pił"
    },
    "imperfektKonjunktiv": {
      "de": "er söffe",
      "lv": "on chlałby / piłby"
    },
    "partizipVergangenheit": {
      "de": "gesoffen",
      "lv": "chlał / pity"
    }
  },
  {
    "infinitiv": {
      "de": "saugen",
      "lv": "ssać"
    },
    "praesens": {
      "de": "er saugt",
      "lv": "on ssie"
    },
    "imperfektIndikativ": {
      "de": "er sog",
      "lv": "on ssał"
    },
    "imperfektKonjunktiv": {
      "de": "er söge",
      "lv": "on ssałby"
    },
    "partizipVergangenheit": {
      "de": "gesogen",
      "lv": "ssany"
    }
  },
  {
    "infinitiv": {
      "de": "schaffen",
      "lv": "tworzyć"
    },
    "praesens": {
      "de": "er schafft",
      "lv": "on tworzy"
    },
    "imperfektIndikativ": {
      "de": "er schuf",
      "lv": "on tworzył"
    },
    "imperfektKonjunktiv": {
      "de": "er schüfe",
      "lv": "on tworzyłby"
    },
    "partizipVergangenheit": {
      "de": "geschaffen",
      "lv": "tworzony"
    }
  },
  {
    "infinitiv": {
      "de": "schallen",
      "lv": "rozbrzmiewać"
    },
    "praesens": {
      "de": "es schallt",
      "lv": "ono rozbrzmiewa"
    },
    "imperfektIndikativ": {
      "de": "schallte / scholl",
      "lv": "ono rozbrzmiewało"
    },
    "imperfektKonjunktiv": {
      "de": "schallte / scholl",
      "lv": "ono rozbrzmiewałoby"
    },
    "partizipVergangenheit": {
      "de": "geschallt",
      "lv": "rozbrzmiewał"
    }
  },
  {
    "infinitiv": {
      "de": "scheiden",
      "lv": "oddzielać / rozstawać się"
    },
    "praesens": {
      "de": "er scheidet",
      "lv": "on oddziela / rozstaje się"
    },
    "imperfektIndikativ": {
      "de": "er schied",
      "lv": "on oddzielał / rozstawał się"
    },
    "imperfektKonjunktiv": {
      "de": "er schiede",
      "lv": "on oddzielałby / rozstawałby się"
    },
    "partizipVergangenheit": {
      "de": "geschieden (er hat / er ist)",
      "lv": "oddzielany / rozstawał się"
    }
  },
  {
    "infinitiv": {
      "de": "scheinen",
      "lv": "świecić / wydawać się"
    },
    "praesens": {
      "de": "er scheint",
      "lv": "on świeci / wydaje się"
    },
    "imperfektIndikativ": {
      "de": "er schien",
      "lv": "on świecił / wydawał się"
    },
    "imperfektKonjunktiv": {
      "de": "er schiene",
      "lv": "on świeciłby / wydawałby się"
    },
    "partizipVergangenheit": {
      "de": "geschienen",
      "lv": "świecił / wydawał się"
    }
  },
  {
    "infinitiv": {
      "de": "schelten",
      "lv": "łajać"
    },
    "praesens": {
      "de": "er schilt",
      "lv": "on łaje"
    },
    "imperfektIndikativ": {
      "de": "er schalt",
      "lv": "on łajał"
    },
    "imperfektKonjunktiv": {
      "de": "er schölte / er schälte",
      "lv": "on łajałby"
    },
    "partizipVergangenheit": {
      "de": "gescholten",
      "lv": "łajany"
    }
  },
  {
    "infinitiv": {
      "de": "scheren",
      "lv": "strzyc"
    },
    "praesens": {
      "de": "er schert",
      "lv": "on strzyże"
    },
    "imperfektIndikativ": {
      "de": "schor / scherte",
      "lv": "on strzygł"
    },
    "imperfektKonjunktiv": {
      "de": "schor / scherte",
      "lv": "on strzygłby"
    },
    "partizipVergangenheit": {
      "de": "geschoren / geschert",
      "lv": "strzyżony"
    }
  },
  {
    "infinitiv": {
      "de": "schieben",
      "lv": "pchać"
    },
    "praesens": {
      "de": "er schiebt",
      "lv": "on pcha"
    },
    "imperfektIndikativ": {
      "de": "er schob",
      "lv": "on pchał"
    },
    "imperfektKonjunktiv": {
      "de": "er schöbe",
      "lv": "on pchałby"
    },
    "partizipVergangenheit": {
      "de": "geschoben",
      "lv": "pchany"
    }
  },
  {
    "infinitiv": {
      "de": "schießen",
      "lv": "strzelać"
    },
    "praesens": {
      "de": "er schießt",
      "lv": "on strzela"
    },
    "imperfektIndikativ": {
      "de": "er schoss",
      "lv": "on strzelał"
    },
    "imperfektKonjunktiv": {
      "de": "er schösse",
      "lv": "on strzelałby"
    },
    "partizipVergangenheit": {
      "de": "geschossen",
      "lv": "strzelany"
    }
  },
  {
    "infinitiv": {
      "de": "schinden",
      "lv": "dręczyć"
    },
    "praesens": {
      "de": "er schindet",
      "lv": "on dręczy"
    },
    "imperfektIndikativ": {
      "de": "schindete",
      "lv": "on dręczył"
    },
    "imperfektKonjunktiv": {
      "de": "schindete",
      "lv": "on dręczyłby"
    },
    "partizipVergangenheit": {
      "de": "geschunden",
      "lv": "dręczony"
    }
  },
  {
    "infinitiv": {
      "de": "schlafen",
      "lv": "spać"
    },
    "praesens": {
      "de": "er schläft",
      "lv": "on śpi"
    },
    "imperfektIndikativ": {
      "de": "er schlief",
      "lv": "on spał"
    },
    "imperfektKonjunktiv": {
      "de": "er schliefe",
      "lv": "on spałby"
    },
    "partizipVergangenheit": {
      "de": "geschlafen",
      "lv": "spał"
    }
  },
  {
    "infinitiv": {
      "de": "schlagen",
      "lv": "bić"
    },
    "praesens": {
      "de": "er schlägt",
      "lv": "on bije"
    },
    "imperfektIndikativ": {
      "de": "er schlug",
      "lv": "on bił"
    },
    "imperfektKonjunktiv": {
      "de": "er schlüge",
      "lv": "on biłby"
    },
    "partizipVergangenheit": {
      "de": "geschlagen",
      "lv": "bity"
    }
  },
  {
    "infinitiv": {
      "de": "schleichen",
      "lv": "skradać się"
    },
    "praesens": {
      "de": "er schleicht",
      "lv": "on skrada się"
    },
    "imperfektIndikativ": {
      "de": "er schlich",
      "lv": "on skradał się"
    },
    "imperfektKonjunktiv": {
      "de": "er schliche",
      "lv": "on skradałby się"
    },
    "partizipVergangenheit": {
      "de": "geschlichen (er ist)",
      "lv": "skradał się"
    }
  },
  {
    "infinitiv": {
      "de": "schleifen",
      "lv": "szlifować"
    },
    "praesens": {
      "de": "er schleift",
      "lv": "on szlifuje"
    },
    "imperfektIndikativ": {
      "de": "er schliff",
      "lv": "on szlifował"
    },
    "imperfektKonjunktiv": {
      "de": "er schliffe",
      "lv": "on szlifowałby"
    },
    "partizipVergangenheit": {
      "de": "geschliffen",
      "lv": "szlifowany"
    }
  },
  {
    "infinitiv": {
      "de": "schließen",
      "lv": "zamykać"
    },
    "praesens": {
      "de": "er schließt",
      "lv": "on zamyka"
    },
    "imperfektIndikativ": {
      "de": "er schloss",
      "lv": "on zamykał"
    },
    "imperfektKonjunktiv": {
      "de": "er schlösse",
      "lv": "on zamykałby"
    },
    "partizipVergangenheit": {
      "de": "geschlossen",
      "lv": "zamykany"
    }
  },
  {
    "infinitiv": {
      "de": "schlingen",
      "lv": "połykać"
    },
    "praesens": {
      "de": "er schlingt",
      "lv": "on połyka"
    },
    "imperfektIndikativ": {
      "de": "er schlang",
      "lv": "on połykał"
    },
    "imperfektKonjunktiv": {
      "de": "er schlänge",
      "lv": "on połykałby"
    },
    "partizipVergangenheit": {
      "de": "geschlungen",
      "lv": "połykany"
    }
  },
  {
    "infinitiv": {
      "de": "schmeißen",
      "lv": "ciskać"
    },
    "praesens": {
      "de": "er schmeißt",
      "lv": "on ciska"
    },
    "imperfektIndikativ": {
      "de": "er schmiss",
      "lv": "on ciskał"
    },
    "imperfektKonjunktiv": {
      "de": "er schmisse",
      "lv": "on ciskałby"
    },
    "partizipVergangenheit": {
      "de": "geschmissen",
      "lv": "ciskany"
    }
  },
  {
    "infinitiv": {
      "de": "schmelzen",
      "lv": "topnieć"
    },
    "praesens": {
      "de": "er schmilzt",
      "lv": "on topnieje"
    },
    "imperfektIndikativ": {
      "de": "er schmolz",
      "lv": "on topniał"
    },
    "imperfektKonjunktiv": {
      "de": "er schmölze",
      "lv": "on topniałby"
    },
    "partizipVergangenheit": {
      "de": "geschmolzen (er ist)",
      "lv": "topniał"
    }
  },
  {
    "infinitiv": {
      "de": "schnauben",
      "lv": "parskać"
    },
    "praesens": {
      "de": "er schnaubt",
      "lv": "on parska"
    },
    "imperfektIndikativ": {
      "de": "schnaubte / schnob",
      "lv": "on parskał"
    },
    "imperfektKonjunktiv": {
      "de": "schnaubte / schnob",
      "lv": "on parskałby"
    },
    "partizipVergangenheit": {
      "de": "geschnaubt / geschnoben",
      "lv": "parskał"
    }
  },
  {
    "infinitiv": {
      "de": "schneiden",
      "lv": "ciąć"
    },
    "praesens": {
      "de": "er schneidet",
      "lv": "on tnie"
    },
    "imperfektIndikativ": {
      "de": "er schnitt",
      "lv": "on ciął"
    },
    "imperfektKonjunktiv": {
      "de": "er schnitte",
      "lv": "on ciąłby"
    },
    "partizipVergangenheit": {
      "de": "geschnitten",
      "lv": "cięty"
    }
  },
  {
    "infinitiv": {
      "de": "schreiben",
      "lv": "pisać"
    },
    "praesens": {
      "de": "er schreibt",
      "lv": "on pisze"
    },
    "imperfektIndikativ": {
      "de": "er schrieb",
      "lv": "on pisał"
    },
    "imperfektKonjunktiv": {
      "de": "er schriebe",
      "lv": "on pisałby"
    },
    "partizipVergangenheit": {
      "de": "geschrieben",
      "lv": "pisany"
    }
  },
  {
    "infinitiv": {
      "de": "schreien",
      "lv": "krzyczeć"
    },
    "praesens": {
      "de": "er schreit",
      "lv": "on krzyczy"
    },
    "imperfektIndikativ": {
      "de": "er schrie",
      "lv": "on krzyczał"
    },
    "imperfektKonjunktiv": {
      "de": "er schriee",
      "lv": "on krzyczałby"
    },
    "partizipVergangenheit": {
      "de": "geschrien",
      "lv": "krzyczał"
    }
  },
  {
    "infinitiv": {
      "de": "schreiten",
      "lv": "kroczyć"
    },
    "praesens": {
      "de": "er schreitet",
      "lv": "on kroczy"
    },
    "imperfektIndikativ": {
      "de": "er schritt",
      "lv": "on kroczył"
    },
    "imperfektKonjunktiv": {
      "de": "er schritte",
      "lv": "on kroczyłby"
    },
    "partizipVergangenheit": {
      "de": "geschritten (er ist)",
      "lv": "kroczył"
    }
  },
  {
    "infinitiv": {
      "de": "schweigen",
      "lv": "milczeć"
    },
    "praesens": {
      "de": "er schweigt",
      "lv": "on milczy"
    },
    "imperfektIndikativ": {
      "de": "er schwieg",
      "lv": "on milczał"
    },
    "imperfektKonjunktiv": {
      "de": "er schwiege",
      "lv": "on milczałby"
    },
    "partizipVergangenheit": {
      "de": "geschwiegen",
      "lv": "milczał"
    }
  },
  {
    "infinitiv": {
      "de": "schwellen",
      "lv": "puchnąć"
    },
    "praesens": {
      "de": "er schwillt",
      "lv": "on puchnie"
    },
    "imperfektIndikativ": {
      "de": "er schwoll",
      "lv": "on puchnął"
    },
    "imperfektKonjunktiv": {
      "de": "er schwölle",
      "lv": "on puchnąłby"
    },
    "partizipVergangenheit": {
      "de": "geschwollen (er ist)",
      "lv": "puchnął"
    }
  },
  {
    "infinitiv": {
      "de": "schwimmen",
      "lv": "pływać"
    },
    "praesens": {
      "de": "er schwimmt",
      "lv": "on pływa"
    },
    "imperfektIndikativ": {
      "de": "er schwamm",
      "lv": "on pływał"
    },
    "imperfektKonjunktiv": {
      "de": "er schwömme / er schwämme",
      "lv": "on pływałby"
    },
    "partizipVergangenheit": {
      "de": "geschwommen (er ist)",
      "lv": "pływał"
    }
  },
  {
    "infinitiv": {
      "de": "schwinden",
      "lv": "znikać"
    },
    "praesens": {
      "de": "er schwindet",
      "lv": "on znika"
    },
    "imperfektIndikativ": {
      "de": "er schwand",
      "lv": "on znikał"
    },
    "imperfektKonjunktiv": {
      "de": "er schwände",
      "lv": "on znikałby"
    },
    "partizipVergangenheit": {
      "de": "geschwunden (er ist)",
      "lv": "znikał"
    }
  },
  {
    "infinitiv": {
      "de": "schwingen",
      "lv": "machać"
    },
    "praesens": {
      "de": "er schwingt",
      "lv": "on macha"
    },
    "imperfektIndikativ": {
      "de": "er schwang",
      "lv": "on machał"
    },
    "imperfektKonjunktiv": {
      "de": "er schwänge",
      "lv": "on machałby"
    },
    "partizipVergangenheit": {
      "de": "geschwungen",
      "lv": "machał"
    }
  },
  {
    "infinitiv": {
      "de": "schwören",
      "lv": "przysięgać"
    },
    "praesens": {
      "de": "er schwört",
      "lv": "on przysięga"
    },
    "imperfektIndikativ": {
      "de": "er schwur / er schwor",
      "lv": "on przysięgał"
    },
    "imperfektKonjunktiv": {
      "de": "er schwöre",
      "lv": "on przysięgałby"
    },
    "partizipVergangenheit": {
      "de": "geschworen",
      "lv": "przysięgał"
    }
  },
  {
    "infinitiv": {
      "de": "sehen",
      "lv": "widzieć"
    },
    "praesens": {
      "de": "er sieht",
      "lv": "on widzi"
    },
    "imperfektIndikativ": {
      "de": "er sah",
      "lv": "on widział"
    },
    "imperfektKonjunktiv": {
      "de": "er sähe",
      "lv": "on widziałby"
    },
    "partizipVergangenheit": {
      "de": "gesehen",
      "lv": "widziany"
    }
  },
  {
    "infinitiv": {
      "de": "sein",
      "lv": "być"
    },
    "praesens": {
      "de": "er ist",
      "lv": "on jest"
    },
    "imperfektIndikativ": {
      "de": "war",
      "lv": "on był"
    },
    "imperfektKonjunktiv": {
      "de": "war",
      "lv": "on byłby"
    },
    "partizipVergangenheit": {
      "de": "gewesen",
      "lv": "był"
    }
  },
  {
    "infinitiv": {
      "de": "senden",
      "lv": "wysyłać"
    },
    "praesens": {
      "de": "er sendet",
      "lv": "on wysyła"
    },
    "imperfektIndikativ": {
      "de": "er sandte / er sendete",
      "lv": "on wysyłał"
    },
    "imperfektKonjunktiv": {
      "de": "er sendete",
      "lv": "on wysyłałby"
    },
    "partizipVergangenheit": {
      "de": "gesandt / gesendet",
      "lv": "wysyłany"
    }
  },
  {
    "infinitiv": {
      "de": "sieden",
      "lv": "gotować"
    },
    "praesens": {
      "de": "er siedet",
      "lv": "on gotuje"
    },
    "imperfektIndikativ": {
      "de": "sott / siedete",
      "lv": "on gotował"
    },
    "imperfektKonjunktiv": {
      "de": "sott / siedete",
      "lv": "on gotowałby"
    },
    "partizipVergangenheit": {
      "de": "gesotten / gesiedet",
      "lv": "gotowany"
    }
  },
  {
    "infinitiv": {
      "de": "singen",
      "lv": "śpiewać"
    },
    "praesens": {
      "de": "er singt",
      "lv": "on śpiewa"
    },
    "imperfektIndikativ": {
      "de": "er sang",
      "lv": "on śpiewał"
    },
    "imperfektKonjunktiv": {
      "de": "er sänge",
      "lv": "on śpiewałby"
    },
    "partizipVergangenheit": {
      "de": "gesungen",
      "lv": "śpiewany"
    }
  },
  {
    "infinitiv": {
      "de": "sinken",
      "lv": "tonąć"
    },
    "praesens": {
      "de": "er sinkt",
      "lv": "on tonie"
    },
    "imperfektIndikativ": {
      "de": "er sank",
      "lv": "on tonął"
    },
    "imperfektKonjunktiv": {
      "de": "er sänke",
      "lv": "on tonąłby"
    },
    "partizipVergangenheit": {
      "de": "gesunken (er ist)",
      "lv": "tonął"
    }
  },
  {
    "infinitiv": {
      "de": "sinnen",
      "lv": "rozmyślać"
    },
    "praesens": {
      "de": "er sinnt",
      "lv": "on rozmyśla"
    },
    "imperfektIndikativ": {
      "de": "er sann",
      "lv": "on rozmyślał"
    },
    "imperfektKonjunktiv": {
      "de": "er sönne / er sänne",
      "lv": "on rozmyślałby"
    },
    "partizipVergangenheit": {
      "de": "gesonnen",
      "lv": "rozmyślał"
    }
  },
  {
    "infinitiv": {
      "de": "sitzen",
      "lv": "siedzieć"
    },
    "praesens": {
      "de": "er sitzt",
      "lv": "on siedzi"
    },
    "imperfektIndikativ": {
      "de": "er sass",
      "lv": "on siedział"
    },
    "imperfektKonjunktiv": {
      "de": "er säße",
      "lv": "on siedziałby"
    },
    "partizipVergangenheit": {
      "de": "gesessen",
      "lv": "siedział"
    }
  },
  {
    "infinitiv": {
      "de": "sollen",
      "lv": "mieć"
    },
    "praesens": {
      "de": "er soll",
      "lv": "on ma"
    },
    "imperfektIndikativ": {
      "de": "sollte",
      "lv": "on miał"
    },
    "imperfektKonjunktiv": {
      "de": "sollte",
      "lv": "on miałby"
    },
    "partizipVergangenheit": {
      "de": "gesollt",
      "lv": "miał"
    }
  },
  {
    "infinitiv": {
      "de": "speien",
      "lv": "pluć"
    },
    "praesens": {
      "de": "er speit",
      "lv": "on pluje"
    },
    "imperfektIndikativ": {
      "de": "er spie",
      "lv": "on pluł"
    },
    "imperfektKonjunktiv": {
      "de": "er spie",
      "lv": "on plułby"
    },
    "partizipVergangenheit": {
      "de": "gespien",
      "lv": "pluł"
    }
  },
  {
    "infinitiv": {
      "de": "spinnen",
      "lv": "prząść"
    },
    "praesens": {
      "de": "er spinnt",
      "lv": "on przędzie"
    },
    "imperfektIndikativ": {
      "de": "er spann",
      "lv": "on prządł"
    },
    "imperfektKonjunktiv": {
      "de": "er spönne / er spänne",
      "lv": "on prządłby"
    },
    "partizipVergangenheit": {
      "de": "gesponnen",
      "lv": "przędziony"
    }
  },
  {
    "infinitiv": {
      "de": "spleißen",
      "lv": "splatać"
    },
    "praesens": {
      "de": "er spleißt",
      "lv": "on splata"
    },
    "imperfektIndikativ": {
      "de": "spliss",
      "lv": "on splatał"
    },
    "imperfektKonjunktiv": {
      "de": "spliss",
      "lv": "on splatałby"
    },
    "partizipVergangenheit": {
      "de": "gesplissen",
      "lv": "splatany"
    }
  },
  {
    "infinitiv": {
      "de": "sprechen",
      "lv": "mówić"
    },
    "praesens": {
      "de": "er spricht",
      "lv": "on mówi"
    },
    "imperfektIndikativ": {
      "de": "er sprach",
      "lv": "on mówił"
    },
    "imperfektKonjunktiv": {
      "de": "er spräche",
      "lv": "on mówiłby"
    },
    "partizipVergangenheit": {
      "de": "gesprochen",
      "lv": "mówiony"
    }
  },
  {
    "infinitiv": {
      "de": "sprießen",
      "lv": "kiełkować"
    },
    "praesens": {
      "de": "er sprießt",
      "lv": "on kiełkuje"
    },
    "imperfektIndikativ": {
      "de": "er spross",
      "lv": "on kiełkował"
    },
    "imperfektKonjunktiv": {
      "de": "er sprösse",
      "lv": "on kiełkowałby"
    },
    "partizipVergangenheit": {
      "de": "gesprossen (er ist)",
      "lv": "kiełkował"
    }
  },
  {
    "infinitiv": {
      "de": "springen",
      "lv": "skakać"
    },
    "praesens": {
      "de": "er springt",
      "lv": "on skacze"
    },
    "imperfektIndikativ": {
      "de": "er sprang",
      "lv": "on skakał"
    },
    "imperfektKonjunktiv": {
      "de": "er spränge",
      "lv": "on skakałby"
    },
    "partizipVergangenheit": {
      "de": "gesprungen (er ist)",
      "lv": "skakał"
    }
  },
  {
    "infinitiv": {
      "de": "stechen",
      "lv": "kłuć"
    },
    "praesens": {
      "de": "er sticht",
      "lv": "on kłuje"
    },
    "imperfektIndikativ": {
      "de": "er stach",
      "lv": "on kłuł"
    },
    "imperfektKonjunktiv": {
      "de": "er stäche",
      "lv": "on kłułby"
    },
    "partizipVergangenheit": {
      "de": "gestochen",
      "lv": "kłuty"
    }
  },
  {
    "infinitiv": {
      "de": "stecken",
      "lv": "wkładać / wtykać"
    },
    "praesens": {
      "de": "er steckt",
      "lv": "on wkłada / wtyka"
    },
    "imperfektIndikativ": {
      "de": "stak / steckte",
      "lv": "on wkładał / wtykał"
    },
    "imperfektKonjunktiv": {
      "de": "stak / steckte",
      "lv": "on wkładałby / wtykałby"
    },
    "partizipVergangenheit": {
      "de": "gesteckt",
      "lv": "wkładany / wtykany"
    }
  },
  {
    "infinitiv": {
      "de": "stehen",
      "lv": "stać"
    },
    "praesens": {
      "de": "er steht",
      "lv": "on stoi"
    },
    "imperfektIndikativ": {
      "de": "er stand",
      "lv": "on stał"
    },
    "imperfektKonjunktiv": {
      "de": "er stände / er stünde",
      "lv": "on stałby"
    },
    "partizipVergangenheit": {
      "de": "gestanden",
      "lv": "stał"
    }
  },
  {
    "infinitiv": {
      "de": "stehlen",
      "lv": "kraść"
    },
    "praesens": {
      "de": "er stiehlt",
      "lv": "on kradnie"
    },
    "imperfektIndikativ": {
      "de": "er stahl",
      "lv": "on kradł"
    },
    "imperfektKonjunktiv": {
      "de": "er stöhle / er stähle",
      "lv": "on kradłby"
    },
    "partizipVergangenheit": {
      "de": "gestohlen",
      "lv": "kradziony"
    }
  },
  {
    "infinitiv": {
      "de": "steigen",
      "lv": "wchodzić"
    },
    "praesens": {
      "de": "er steigt",
      "lv": "on wchodzi"
    },
    "imperfektIndikativ": {
      "de": "er stieg",
      "lv": "on wchodził"
    },
    "imperfektKonjunktiv": {
      "de": "er stiege",
      "lv": "on wchodziłby"
    },
    "partizipVergangenheit": {
      "de": "gestiegen (er ist)",
      "lv": "wchodził"
    }
  },
  {
    "infinitiv": {
      "de": "sterben",
      "lv": "umierać"
    },
    "praesens": {
      "de": "er stirbt",
      "lv": "on umiera"
    },
    "imperfektIndikativ": {
      "de": "er starb",
      "lv": "on umierał"
    },
    "imperfektKonjunktiv": {
      "de": "er stürbe",
      "lv": "on umierałby"
    },
    "partizipVergangenheit": {
      "de": "gestorben (er ist)",
      "lv": "umierał"
    }
  },
  {
    "infinitiv": {
      "de": "stinken",
      "lv": "cuchnąć"
    },
    "praesens": {
      "de": "es stinkt",
      "lv": "ono cuchnie"
    },
    "imperfektIndikativ": {
      "de": "stank",
      "lv": "ono cuchnęło"
    },
    "imperfektKonjunktiv": {
      "de": "stank",
      "lv": "ono cuchnęłoby"
    },
    "partizipVergangenheit": {
      "de": "gestunken",
      "lv": "cuchnął"
    }
  },
  {
    "infinitiv": {
      "de": "stoßen",
      "lv": "popychać"
    },
    "praesens": {
      "de": "er stößt",
      "lv": "on popycha"
    },
    "imperfektIndikativ": {
      "de": "er stieß",
      "lv": "on popychał"
    },
    "imperfektKonjunktiv": {
      "de": "er stieße",
      "lv": "on popychałby"
    },
    "partizipVergangenheit": {
      "de": "gestoßen",
      "lv": "popychany"
    }
  },
  {
    "infinitiv": {
      "de": "streichen",
      "lv": "malować / skreślać"
    },
    "praesens": {
      "de": "er streicht",
      "lv": "on maluje / skreśla"
    },
    "imperfektIndikativ": {
      "de": "er strich",
      "lv": "on malował / skreślał"
    },
    "imperfektKonjunktiv": {
      "de": "er striche",
      "lv": "on malowałby / skreślałby"
    },
    "partizipVergangenheit": {
      "de": "gestrichen",
      "lv": "malowany / skreślany"
    }
  },
  {
    "infinitiv": {
      "de": "streiten",
      "lv": "kłócić się"
    },
    "praesens": {
      "de": "er streitet",
      "lv": "on kłóci się"
    },
    "imperfektIndikativ": {
      "de": "er stritt",
      "lv": "on kłócił się"
    },
    "imperfektKonjunktiv": {
      "de": "er stritte",
      "lv": "on kłóciłby się"
    },
    "partizipVergangenheit": {
      "de": "gestritten",
      "lv": "kłócił się"
    }
  },
  {
    "infinitiv": {
      "de": "tragen",
      "lv": "nieść"
    },
    "praesens": {
      "de": "er trägt",
      "lv": "on niesie"
    },
    "imperfektIndikativ": {
      "de": "er trug",
      "lv": "on niósł"
    },
    "imperfektKonjunktiv": {
      "de": "er trüge",
      "lv": "on niósłby"
    },
    "partizipVergangenheit": {
      "de": "getragen",
      "lv": "niesiony"
    }
  },
  {
    "infinitiv": {
      "de": "treffen",
      "lv": "spotykać"
    },
    "praesens": {
      "de": "er trifft",
      "lv": "on spotyka"
    },
    "imperfektIndikativ": {
      "de": "er traf",
      "lv": "on spotykał"
    },
    "imperfektKonjunktiv": {
      "de": "er träfe",
      "lv": "on spotykałby"
    },
    "partizipVergangenheit": {
      "de": "getroffen",
      "lv": "spotykany"
    }
  },
  {
    "infinitiv": {
      "de": "treiben",
      "lv": "pędzić"
    },
    "praesens": {
      "de": "er treibt",
      "lv": "on pędzi"
    },
    "imperfektIndikativ": {
      "de": "er trieb",
      "lv": "on pędził"
    },
    "imperfektKonjunktiv": {
      "de": "er triebe",
      "lv": "on pędziłby"
    },
    "partizipVergangenheit": {
      "de": "getrieben",
      "lv": "pędzony"
    }
  },
  {
    "infinitiv": {
      "de": "treten",
      "lv": "wstępować / iść"
    },
    "praesens": {
      "de": "er tritt",
      "lv": "on wstępuje / idzie"
    },
    "imperfektIndikativ": {
      "de": "er trat",
      "lv": "on wstępował / szedł"
    },
    "imperfektKonjunktiv": {
      "de": "er träte",
      "lv": "on wstępowałby / szedłby"
    },
    "partizipVergangenheit": {
      "de": "getreten (er ist)",
      "lv": "wstępował / szedł"
    }
  },
  {
    "infinitiv": {
      "de": "trinken",
      "lv": "pić"
    },
    "praesens": {
      "de": "er trinkt",
      "lv": "on pije"
    },
    "imperfektIndikativ": {
      "de": "er trank",
      "lv": "on pił"
    },
    "imperfektKonjunktiv": {
      "de": "er tränke",
      "lv": "on piłby"
    },
    "partizipVergangenheit": {
      "de": "getrunken",
      "lv": "pity"
    }
  },
  {
    "infinitiv": {
      "de": "trügen",
      "lv": "oszukiwać"
    },
    "praesens": {
      "de": "er trögt",
      "lv": "on oszukuje"
    },
    "imperfektIndikativ": {
      "de": "er trog",
      "lv": "on oszukiwał"
    },
    "imperfektKonjunktiv": {
      "de": "er tröge",
      "lv": "on oszukiwałby"
    },
    "partizipVergangenheit": {
      "de": "getrogen",
      "lv": "oszukiwany"
    }
  },
  {
    "infinitiv": {
      "de": "tun",
      "lv": "robić"
    },
    "praesens": {
      "de": "er tut",
      "lv": "on robi"
    },
    "imperfektIndikativ": {
      "de": "er tat",
      "lv": "on robił"
    },
    "imperfektKonjunktiv": {
      "de": "er täte",
      "lv": "on robiłby"
    },
    "partizipVergangenheit": {
      "de": "getan",
      "lv": "robiony"
    }
  },
  {
    "infinitiv": {
      "de": "verderben",
      "lv": "psuć"
    },
    "praesens": {
      "de": "er verdirbt",
      "lv": "on psuje"
    },
    "imperfektIndikativ": {
      "de": "er verdarb",
      "lv": "on psuł"
    },
    "imperfektKonjunktiv": {
      "de": "er verdürbe",
      "lv": "on psułby"
    },
    "partizipVergangenheit": {
      "de": "verdorben",
      "lv": "psuty"
    }
  },
  {
    "infinitiv": {
      "de": "verdrießen",
      "lv": "irytować"
    },
    "praesens": {
      "de": "er verdrießt",
      "lv": "on irytuje"
    },
    "imperfektIndikativ": {
      "de": "er verdross",
      "lv": "on irytował"
    },
    "imperfektKonjunktiv": {
      "de": "er verdrösse",
      "lv": "on irytowałby"
    },
    "partizipVergangenheit": {
      "de": "verdrossen",
      "lv": "irytowany"
    }
  },
  {
    "infinitiv": {
      "de": "vergessen",
      "lv": "zapominać"
    },
    "praesens": {
      "de": "er vergisst",
      "lv": "on zapomina"
    },
    "imperfektIndikativ": {
      "de": "er vergass",
      "lv": "on zapominał"
    },
    "imperfektKonjunktiv": {
      "de": "er vergäße",
      "lv": "on zapominałby"
    },
    "partizipVergangenheit": {
      "de": "vergessen",
      "lv": "zapominany"
    }
  },
  {
    "infinitiv": {
      "de": "verlieren",
      "lv": "gubić"
    },
    "praesens": {
      "de": "er verliert",
      "lv": "on gubi"
    },
    "imperfektIndikativ": {
      "de": "er verlor",
      "lv": "on gubił"
    },
    "imperfektKonjunktiv": {
      "de": "er verlöre",
      "lv": "on gubiłby"
    },
    "partizipVergangenheit": {
      "de": "verloren",
      "lv": "gubiony"
    }
  },
  {
    "infinitiv": {
      "de": "wachsen",
      "lv": "rosnąć"
    },
    "praesens": {
      "de": "er wächst",
      "lv": "on rośnie"
    },
    "imperfektIndikativ": {
      "de": "er wuchs",
      "lv": "on rósł"
    },
    "imperfektKonjunktiv": {
      "de": "er wüchse",
      "lv": "on rósłby"
    },
    "partizipVergangenheit": {
      "de": "gewachsen (er ist)",
      "lv": "rósł"
    }
  },
  {
    "infinitiv": {
      "de": "waschen",
      "lv": "myć"
    },
    "praesens": {
      "de": "er wäscht",
      "lv": "on myje"
    },
    "imperfektIndikativ": {
      "de": "er wusch",
      "lv": "on mył"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsche",
      "lv": "on myłby"
    },
    "partizipVergangenheit": {
      "de": "gewaschen",
      "lv": "myty"
    }
  },
  {
    "infinitiv": {
      "de": "weben",
      "lv": "tkać"
    },
    "praesens": {
      "de": "er webt",
      "lv": "on tka"
    },
    "imperfektIndikativ": {
      "de": "wob",
      "lv": "on tkał"
    },
    "imperfektKonjunktiv": {
      "de": "wob",
      "lv": "on tkałby"
    },
    "partizipVergangenheit": {
      "de": "gewoben",
      "lv": "tkany"
    }
  },
  {
    "infinitiv": {
      "de": "weichen",
      "lv": "cofać się"
    },
    "praesens": {
      "de": "er weicht",
      "lv": "on cofa się"
    },
    "imperfektIndikativ": {
      "de": "er wich",
      "lv": "on cofał się"
    },
    "imperfektKonjunktiv": {
      "de": "er wiche",
      "lv": "on cofałby się"
    },
    "partizipVergangenheit": {
      "de": "gewichen (er ist)",
      "lv": "cofał się"
    }
  },
  {
    "infinitiv": {
      "de": "weisen",
      "lv": "wskazywać"
    },
    "praesens": {
      "de": "er weist",
      "lv": "on wskazuje"
    },
    "imperfektIndikativ": {
      "de": "er wies",
      "lv": "on wskazywał"
    },
    "imperfektKonjunktiv": {
      "de": "er wiese",
      "lv": "on wskazywałby"
    },
    "partizipVergangenheit": {
      "de": "gewiesen",
      "lv": "wskazywany"
    }
  },
  {
    "infinitiv": {
      "de": "wenden",
      "lv": "obracać / odwracać"
    },
    "praesens": {
      "de": "er wendet",
      "lv": "on obraca / odwraca"
    },
    "imperfektIndikativ": {
      "de": "er wandte / es wendete",
      "lv": "on obracał / odwracał"
    },
    "imperfektKonjunktiv": {
      "de": "er wendete",
      "lv": "on obracałby / odwracałby"
    },
    "partizipVergangenheit": {
      "de": "gewandt / gewendet",
      "lv": "obracany / odwracany"
    }
  },
  {
    "infinitiv": {
      "de": "werben",
      "lv": "zalecać się"
    },
    "praesens": {
      "de": "er wirbt",
      "lv": "on zaleca się"
    },
    "imperfektIndikativ": {
      "de": "er warb",
      "lv": "on zalecał się"
    },
    "imperfektKonjunktiv": {
      "de": "er würbe",
      "lv": "on zalecałby się"
    },
    "partizipVergangenheit": {
      "de": "geworben",
      "lv": "zalecał się"
    }
  },
  {
    "infinitiv": {
      "de": "werden",
      "lv": "stawać się"
    },
    "praesens": {
      "de": "er wird",
      "lv": "on staje się"
    },
    "imperfektIndikativ": {
      "de": "wurde",
      "lv": "on stawał się"
    },
    "imperfektKonjunktiv": {
      "de": "wurde",
      "lv": "on stawałby się"
    },
    "partizipVergangenheit": {
      "de": "geworden",
      "lv": "stawał się"
    }
  },
  {
    "infinitiv": {
      "de": "werfen",
      "lv": "rzucać"
    },
    "praesens": {
      "de": "er wirft",
      "lv": "on rzuca"
    },
    "imperfektIndikativ": {
      "de": "er warf",
      "lv": "on rzucał"
    },
    "imperfektKonjunktiv": {
      "de": "er würfe",
      "lv": "on rzucałby"
    },
    "partizipVergangenheit": {
      "de": "geworfen",
      "lv": "rzucany"
    }
  },
  {
    "infinitiv": {
      "de": "wiegen",
      "lv": "ważyć"
    },
    "praesens": {
      "de": "er wiegt",
      "lv": "on waży"
    },
    "imperfektIndikativ": {
      "de": "er wog",
      "lv": "on ważył"
    },
    "imperfektKonjunktiv": {
      "de": "er wöge",
      "lv": "on ważyłby"
    },
    "partizipVergangenheit": {
      "de": "gewogen",
      "lv": "ważony"
    }
  },
  {
    "infinitiv": {
      "de": "winden",
      "lv": "wić"
    },
    "praesens": {
      "de": "er windet",
      "lv": "on wije"
    },
    "imperfektIndikativ": {
      "de": "er wand",
      "lv": "on wił"
    },
    "imperfektKonjunktiv": {
      "de": "er wände",
      "lv": "on wiłby"
    },
    "partizipVergangenheit": {
      "de": "gewunden",
      "lv": "wity"
    }
  },
  {
    "infinitiv": {
      "de": "wissen",
      "lv": "wiedzieć"
    },
    "praesens": {
      "de": "er weiß",
      "lv": "on wie"
    },
    "imperfektIndikativ": {
      "de": "er wusste",
      "lv": "on wiedział"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsste",
      "lv": "on wiedziałby"
    },
    "partizipVergangenheit": {
      "de": "gewusst",
      "lv": "wiedział"
    }
  },
  {
    "infinitiv": {
      "de": "wollen",
      "lv": "chcieć"
    },
    "praesens": {
      "de": "er will",
      "lv": "on chce"
    },
    "imperfektIndikativ": {
      "de": "wollte",
      "lv": "on chciał"
    },
    "imperfektKonjunktiv": {
      "de": "wollte",
      "lv": "on chciałby"
    },
    "partizipVergangenheit": {
      "de": "gewollt",
      "lv": "chciał"
    }
  },
  {
    "infinitiv": {
      "de": "wringen",
      "lv": "wyżymać / wyciskać"
    },
    "praesens": {
      "de": "er wringt",
      "lv": "on wyżyma / wyciska"
    },
    "imperfektIndikativ": {
      "de": "wrang",
      "lv": "on wyżymał / wyciskał"
    },
    "imperfektKonjunktiv": {
      "de": "wrang",
      "lv": "on wyżymałby / wyciskałby"
    },
    "partizipVergangenheit": {
      "de": "gewrungen",
      "lv": "wyżymany / wyciskany"
    }
  },
  {
    "infinitiv": {
      "de": "zeihen",
      "lv": "obwiniać"
    },
    "praesens": {
      "de": "er zeiht",
      "lv": "on obwinia"
    },
    "imperfektIndikativ": {
      "de": "zieh",
      "lv": "on obwiniał"
    },
    "imperfektKonjunktiv": {
      "de": "zieh",
      "lv": "on obwiniałby"
    },
    "partizipVergangenheit": {
      "de": "geziehen",
      "lv": "obwiniany"
    }
  },
  {
    "infinitiv": {
      "de": "ziehen",
      "lv": "ciągnąć"
    },
    "praesens": {
      "de": "er zieht",
      "lv": "on ciągnie"
    },
    "imperfektIndikativ": {
      "de": "er zog",
      "lv": "on ciągnął"
    },
    "imperfektKonjunktiv": {
      "de": "er zöge",
      "lv": "on ciągnąłby"
    },
    "partizipVergangenheit": {
      "de": "gezogen",
      "lv": "ciągnięty"
    }
  },
  {
    "infinitiv": {
      "de": "zwingen",
      "lv": "zmuszać"
    },
    "praesens": {
      "de": "er zwingt",
      "lv": "on zmusza"
    },
    "imperfektIndikativ": {
      "de": "er zwang",
      "lv": "on zmuszał"
    },
    "imperfektKonjunktiv": {
      "de": "er zwänge",
      "lv": "on zmuszałby"
    },
    "partizipVergangenheit": {
      "de": "gezwungen",
      "lv": "zmuszany"
    }
  },
  {
    "infinitiv": {
      "de": "empfangen",
      "lv": "otrzymywać"
    },
    "praesens": {
      "de": "er empfängt",
      "lv": "on otrzymuje"
    },
    "imperfektIndikativ": {
      "de": "er empfing",
      "lv": "on otrzymywał"
    },
    "imperfektKonjunktiv": {
      "de": "er empfinge",
      "lv": "on otrzymywałby"
    },
    "partizipVergangenheit": {
      "de": "empfangen",
      "lv": "otrzymywany"
    }
  },
  {
    "infinitiv": {
      "de": "erwägen",
      "lv": "rozważać"
    },
    "praesens": {
      "de": "er erwägt",
      "lv": "on rozważa"
    },
    "imperfektIndikativ": {
      "de": "er erwog",
      "lv": "on rozważał"
    },
    "imperfektKonjunktiv": {
      "de": "er erwöge",
      "lv": "on rozważałby"
    },
    "partizipVergangenheit": {
      "de": "erwogen",
      "lv": "rozważany"
    }
  },
  {
    "infinitiv": {
      "de": "fechten",
      "lv": "walczyć"
    },
    "praesens": {
      "de": "er ficht",
      "lv": "on walczy"
    },
    "imperfektIndikativ": {
      "de": "er focht",
      "lv": "on walczył"
    },
    "imperfektKonjunktiv": {
      "de": "er föchte",
      "lv": "on walczyłby"
    },
    "partizipVergangenheit": {
      "de": "gefochten",
      "lv": "walczył"
    }
  },
  {
    "infinitiv": {
      "de": "flechten",
      "lv": "pleść"
    },
    "praesens": {
      "de": "er flicht",
      "lv": "on plecie"
    },
    "imperfektIndikativ": {
      "de": "er flocht",
      "lv": "on plótł"
    },
    "imperfektKonjunktiv": {
      "de": "er flöchte",
      "lv": "on plótłby"
    },
    "partizipVergangenheit": {
      "de": "geflochten",
      "lv": "pleciony"
    }
  },
  {
    "infinitiv": {
      "de": "hangen",
      "lv": "wisieć"
    },
    "praesens": {
      "de": "er hängt",
      "lv": "on wisi"
    },
    "imperfektIndikativ": {
      "de": "er hing",
      "lv": "on wisiał"
    },
    "imperfektKonjunktiv": {
      "de": "er hinge",
      "lv": "on wisiałby"
    },
    "partizipVergangenheit": {
      "de": "gehangen",
      "lv": "wisiał"
    }
  },
  {
    "infinitiv": {
      "de": "spalten",
      "lv": "rozłupywać"
    },
    "praesens": {
      "de": "er spaltet",
      "lv": "on rozłupuje"
    },
    "imperfektIndikativ": {
      "de": "er spaltete",
      "lv": "on rozłupywał"
    },
    "imperfektKonjunktiv": {
      "de": "er spaltete",
      "lv": "on rozłupywałby"
    },
    "partizipVergangenheit": {
      "de": "gespalten",
      "lv": "rozłupywany"
    }
  },
  {
    "infinitiv": {
      "de": "verzeihen",
      "lv": "wybaczać"
    },
    "praesens": {
      "de": "er verzeiht",
      "lv": "on wybacza"
    },
    "imperfektIndikativ": {
      "de": "er verzieh",
      "lv": "on wybaczał"
    },
    "imperfektKonjunktiv": {
      "de": "er verziehe",
      "lv": "on wybaczałby"
    },
    "partizipVergangenheit": {
      "de": "verziehen",
      "lv": "wybaczany"
    }
  }
];

window.VERB_ENTRIES = VERB_ENTRIES;

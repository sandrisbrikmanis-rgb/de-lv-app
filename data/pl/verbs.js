const VERB_ENTRIES = [
  {
    "infinitiv": {
      "de": "backen",
      "lv": "Piec"
    },
    "praesens": {
      "de": "er bäckt",
      "lv": "On piecze"
    },
    "imperfektIndikativ": {
      "de": "er buk",
      "lv": "On piecze"
    },
    "imperfektKonjunktiv": {
      "de": "er büke",
      "lv": "Piecze"
    },
    "partizipVergangenheit": {
      "de": "gebacken",
      "lv": "Smażone / pieczone"
    }
  },
  {
    "infinitiv": {
      "de": "befehlen",
      "lv": "Rozkazywać"
    },
    "praesens": {
      "de": "er befiehlt",
      "lv": "On rozkazuje"
    },
    "imperfektIndikativ": {
      "de": "er befahl",
      "lv": "– rozkazał"
    },
    "imperfektKonjunktiv": {
      "de": "er beföhle",
      "lv": "By rozkazał"
    },
    "partizipVergangenheit": {
      "de": "befohlen",
      "lv": "Rozkazał"
    }
  },
  {
    "infinitiv": {
      "de": "beginnen",
      "lv": "Zacząć"
    },
    "praesens": {
      "de": "er beginnt",
      "lv": "Zaczyna"
    },
    "imperfektIndikativ": {
      "de": "er begann",
      "lv": "Zaczął"
    },
    "imperfektKonjunktiv": {
      "de": "er begönne / er begänne",
      "lv": "Zacząłby"
    },
    "partizipVergangenheit": {
      "de": "begonnen",
      "lv": "Zaczął"
    }
  },
  {
    "infinitiv": {
      "de": "beißen",
      "lv": "Ugryzienie"
    },
    "praesens": {
      "de": "er beißt",
      "lv": "Gryzie"
    },
    "imperfektIndikativ": {
      "de": "er biss",
      "lv": "Kodował"
    },
    "imperfektKonjunktiv": {
      "de": "er bisse",
      "lv": "Gryzie"
    },
    "partizipVergangenheit": {
      "de": "gebissen",
      "lv": "Ugryziony / ugryziony"
    }
  },
  {
    "infinitiv": {
      "de": "bergen",
      "lv": "Ukrywać"
    },
    "praesens": {
      "de": "er birgt",
      "lv": "Ukrywa się"
    },
    "imperfektIndikativ": {
      "de": "er barg",
      "lv": "Ukrył się"
    },
    "imperfektKonjunktiv": {
      "de": "er bürge / er bärge",
      "lv": "By się ukrył"
    },
    "partizipVergangenheit": {
      "de": "geborgen",
      "lv": "Ukryty/zapisany"
    }
  },
  {
    "infinitiv": {
      "de": "bersten",
      "lv": "Pękanie"
    },
    "praesens": {
      "de": "er birst",
      "lv": "On pęka"
    },
    "imperfektIndikativ": {
      "de": "er barst / er borst",
      "lv": "Wybuchnął"
    },
    "imperfektKonjunktiv": {
      "de": "er bärste / er börste",
      "lv": "On pęka"
    },
    "partizipVergangenheit": {
      "de": "geborsten (er ist)",
      "lv": "Złamany"
    }
  },
  {
    "infinitiv": {
      "de": "bewegen",
      "lv": "Zachęcać"
    },
    "praesens": {
      "de": "er bewegt",
      "lv": "– podpowiada"
    },
    "imperfektIndikativ": {
      "de": "er bewog",
      "lv": "Nalegał"
    },
    "imperfektKonjunktiv": {
      "de": "er bewöge",
      "lv": "Zachęcałby"
    },
    "partizipVergangenheit": {
      "de": "bewogen",
      "lv": "Zachęcał"
    }
  },
  {
    "infinitiv": {
      "de": "biegen",
      "lv": "Schylać się"
    },
    "praesens": {
      "de": "er biegt",
      "lv": "Kłania się"
    },
    "imperfektIndikativ": {
      "de": "er bog",
      "lv": "Naprężył się"
    },
    "imperfektKonjunktiv": {
      "de": "er böge",
      "lv": "Uginałby się"
    },
    "partizipVergangenheit": {
      "de": "gebogen",
      "lv": "Zgięty"
    }
  },
  {
    "infinitiv": {
      "de": "bieten",
      "lv": "Obiecać"
    },
    "praesens": {
      "de": "er bietet",
      "lv": "Obiecuje"
    },
    "imperfektIndikativ": {
      "de": "er bot",
      "lv": "Obiecał"
    },
    "imperfektKonjunktiv": {
      "de": "er böte",
      "lv": "Obiecał"
    },
    "partizipVergangenheit": {
      "de": "geboten",
      "lv": "Obiecał/oferował"
    }
  },
  {
    "infinitiv": {
      "de": "binden",
      "lv": "Sito"
    },
    "praesens": {
      "de": "er bindet",
      "lv": "On siano"
    },
    "imperfektIndikativ": {
      "de": "er band",
      "lv": "Siał"
    },
    "imperfektKonjunktiv": {
      "de": "er bände",
      "lv": "Przesiał"
    },
    "partizipVergangenheit": {
      "de": "gebunden",
      "lv": "Sito"
    }
  },
  {
    "infinitiv": {
      "de": "bitten",
      "lv": "Zapytać"
    },
    "praesens": {
      "de": "er bittet",
      "lv": "Błaga"
    },
    "imperfektIndikativ": {
      "de": "er bat",
      "lv": "Zapytał"
    },
    "imperfektKonjunktiv": {
      "de": "er bäte",
      "lv": "Będzie się modlił"
    },
    "partizipVergangenheit": {
      "de": "gebeten",
      "lv": "Wymagany"
    }
  },
  {
    "infinitiv": {
      "de": "blasen",
      "lv": "Dmuchać"
    },
    "praesens": {
      "de": "er bläst",
      "lv": "On dmucha"
    },
    "imperfektIndikativ": {
      "de": "er blies",
      "lv": "Dmuchał"
    },
    "imperfektKonjunktiv": {
      "de": "er bliese",
      "lv": "By dmuchał"
    },
    "partizipVergangenheit": {
      "de": "geblasen",
      "lv": "Nadęty"
    }
  },
  {
    "infinitiv": {
      "de": "gären",
      "lv": "Fermentować"
    },
    "praesens": {
      "de": "es gärt",
      "lv": "Fermentuje"
    },
    "imperfektIndikativ": {
      "de": "es gor / es gärte",
      "lv": "Fermentuje"
    },
    "imperfektKonjunktiv": {
      "de": "es göre / es gärte",
      "lv": "Byłoby gorzko"
    },
    "partizipVergangenheit": {
      "de": "gegoren / gegärt",
      "lv": "Żyto"
    }
  },
  {
    "infinitiv": {
      "de": "gebären",
      "lv": "Rodzić"
    },
    "praesens": {
      "de": "sie gebiert",
      "lv": "W jej łonie"
    },
    "imperfektIndikativ": {
      "de": "sie gebar",
      "lv": "Urodziła"
    },
    "imperfektKonjunktiv": {
      "de": "sie gebäre",
      "lv": "Urodziłaby"
    },
    "partizipVergangenheit": {
      "de": "geboren",
      "lv": "Urodziłem się / urodziłem się"
    }
  },
  {
    "infinitiv": {
      "de": "gelingen",
      "lv": "Odnieść sukces"
    },
    "praesens": {
      "de": "es gelingt",
      "lv": "To się udaje"
    },
    "imperfektIndikativ": {
      "de": "es gelang",
      "lv": "Zadziałało"
    },
    "imperfektKonjunktiv": {
      "de": "es gelänge",
      "lv": "To by zadziałało"
    },
    "partizipVergangenheit": {
      "de": "gelungen (es ist)",
      "lv": "Udało się"
    }
  },
  {
    "infinitiv": {
      "de": "gelten",
      "lv": "Się przydać"
    },
    "praesens": {
      "de": "er gilt",
      "lv": "On pasuje / jest ważny"
    },
    "imperfektIndikativ": {
      "de": "er galt",
      "lv": "On pasował / był sprawny"
    },
    "imperfektKonjunktiv": {
      "de": "er gölte / es gälte",
      "lv": "Pasowałby / pasowałoby"
    },
    "partizipVergangenheit": {
      "de": "gegolten",
      "lv": "Zastosowano/było ważne"
    }
  },
  {
    "infinitiv": {
      "de": "genesen",
      "lv": "Wyzdrowieć"
    },
    "praesens": {
      "de": "er genest",
      "lv": "Jego zdrowie się poprawia"
    },
    "imperfektIndikativ": {
      "de": "er genas",
      "lv": "Wyzdrowiał"
    },
    "imperfektKonjunktiv": {
      "de": "er genäse",
      "lv": "Wyzdrowieje"
    },
    "partizipVergangenheit": {
      "de": "genesen (er ist)",
      "lv": "Wyzdrowieć"
    }
  },
  {
    "infinitiv": {
      "de": "genießen",
      "lv": "Cieszyć się"
    },
    "praesens": {
      "de": "er genießt",
      "lv": "Cieszy się"
    },
    "imperfektIndikativ": {
      "de": "er genoss",
      "lv": "Cieszył się"
    },
    "imperfektKonjunktiv": {
      "de": "er genösse",
      "lv": "Cieszyłby się"
    },
    "partizipVergangenheit": {
      "de": "genossen",
      "lv": "Cieszył się"
    }
  },
  {
    "infinitiv": {
      "de": "geschehen",
      "lv": "Stać się"
    },
    "praesens": {
      "de": "es geschieht",
      "lv": "To się zdarza"
    },
    "imperfektIndikativ": {
      "de": "es geschah",
      "lv": "To się stało"
    },
    "imperfektKonjunktiv": {
      "de": "es geschähe",
      "lv": "To by się stało"
    },
    "partizipVergangenheit": {
      "de": "geschehen (es ist)",
      "lv": "Się stało"
    }
  },
  {
    "infinitiv": {
      "de": "gießen",
      "lv": "Porucznik"
    },
    "praesens": {
      "de": "er gießt",
      "lv": "Nalewa"
    },
    "imperfektIndikativ": {
      "de": "er goss",
      "lv": "Nalał"
    },
    "imperfektKonjunktiv": {
      "de": "er gösse",
      "lv": "On pada"
    },
    "partizipVergangenheit": {
      "de": "gegossen",
      "lv": "Rzecz"
    }
  },
  {
    "infinitiv": {
      "de": "gleichen",
      "lv": "Przypominać"
    },
    "praesens": {
      "de": "er gleicht",
      "lv": "On przypomina"
    },
    "imperfektIndikativ": {
      "de": "er glich",
      "lv": "Naśladował"
    },
    "imperfektKonjunktiv": {
      "de": "er gliche",
      "lv": "Naśladowałby"
    },
    "partizipVergangenheit": {
      "de": "geglichen",
      "lv": "Przypominał"
    }
  },
  {
    "infinitiv": {
      "de": "gleiten",
      "lv": "Ślizgać się"
    },
    "praesens": {
      "de": "er gleitet",
      "lv": "On się ślizga"
    },
    "imperfektIndikativ": {
      "de": "er glitt",
      "lv": "Ślizgał się"
    },
    "imperfektKonjunktiv": {
      "de": "er glitte",
      "lv": "Poślizgnąłby się"
    },
    "partizipVergangenheit": {
      "de": "geglitten (er ist)",
      "lv": "Poślizgnął się"
    }
  },
  {
    "infinitiv": {
      "de": "glimmen",
      "lv": "Rozjarzony"
    },
    "praesens": {
      "de": "er glimmt",
      "lv": "On świeci"
    },
    "imperfektIndikativ": {
      "de": "er glimmte / glomm",
      "lv": "On świecił"
    },
    "imperfektKonjunktiv": {
      "de": "er glimmte",
      "lv": "By świecił"
    },
    "partizipVergangenheit": {
      "de": "geglimmt / geglommen",
      "lv": "Rozjarzony"
    }
  },
  {
    "infinitiv": {
      "de": "graben",
      "lv": "Kopać"
    },
    "praesens": {
      "de": "er gräbt",
      "lv": "On kopie"
    },
    "imperfektIndikativ": {
      "de": "er grub",
      "lv": "Kopał"
    },
    "imperfektKonjunktiv": {
      "de": "er grübe",
      "lv": "Kopałby"
    },
    "partizipVergangenheit": {
      "de": "gegraben",
      "lv": "Kopać"
    }
  },
  {
    "infinitiv": {
      "de": "greifen",
      "lv": "Złapać"
    },
    "praesens": {
      "de": "er greift",
      "lv": "Łapie"
    },
    "imperfektIndikativ": {
      "de": "er griff",
      "lv": "Złapał"
    },
    "imperfektKonjunktiv": {
      "de": "er griffe",
      "lv": "Złapałby"
    },
    "partizipVergangenheit": {
      "de": "gegriffen",
      "lv": "Złapany / złapany"
    }
  },
  {
    "infinitiv": {
      "de": "hauen",
      "lv": "Ciąć"
    },
    "praesens": {
      "de": "er haut",
      "lv": "Wybrał"
    },
    "imperfektIndikativ": {
      "de": "er hieb",
      "lv": "– warknął"
    },
    "imperfektKonjunktiv": {
      "de": "er hiebe",
      "lv": "By rzeźbił"
    },
    "partizipVergangenheit": {
      "de": "gehauen",
      "lv": "Rzeźbione"
    }
  },
  {
    "infinitiv": {
      "de": "heben",
      "lv": "Podnieść"
    },
    "praesens": {
      "de": "er hebt",
      "lv": "On podnosi"
    },
    "imperfektIndikativ": {
      "de": "er hob",
      "lv": "Przyniósł"
    },
    "imperfektKonjunktiv": {
      "de": "er höbe",
      "lv": "Zbudowałby"
    },
    "partizipVergangenheit": {
      "de": "gehoben",
      "lv": "Wybudowany"
    }
  },
  {
    "infinitiv": {
      "de": "kennen",
      "lv": "Wiedzieć/wiedzieć"
    },
    "praesens": {
      "de": "er kennt",
      "lv": "On wie"
    },
    "imperfektIndikativ": {
      "de": "kannte",
      "lv": "Wiedział"
    },
    "imperfektKonjunktiv": {
      "de": "kannte",
      "lv": "Wiedział"
    },
    "partizipVergangenheit": {
      "de": "gekannt",
      "lv": "Znajomy"
    }
  },
  {
    "infinitiv": {
      "de": "klingen",
      "lv": "Brzmieć"
    },
    "praesens": {
      "de": "er klingt",
      "lv": "Brzmi"
    },
    "imperfektIndikativ": {
      "de": "er klang",
      "lv": "– brzmiał"
    },
    "imperfektKonjunktiv": {
      "de": "er klänge",
      "lv": "– zabrzmi"
    },
    "partizipVergangenheit": {
      "de": "geklungen",
      "lv": "Brzmiało"
    }
  },
  {
    "infinitiv": {
      "de": "kneifen",
      "lv": "Szczypta"
    },
    "praesens": {
      "de": "er kneift",
      "lv": "– żartuje"
    },
    "imperfektIndikativ": {
      "de": "er kniff",
      "lv": "Uszczypnął"
    },
    "imperfektKonjunktiv": {
      "de": "er kniffe",
      "lv": "Uszczypnąłby"
    },
    "partizipVergangenheit": {
      "de": "gekniffen",
      "lv": "Ściągnięty"
    }
  },
  {
    "infinitiv": {
      "de": "bleiben",
      "lv": "Zostawać"
    },
    "praesens": {
      "de": "er bleibt",
      "lv": "On zostaje"
    },
    "imperfektIndikativ": {
      "de": "er blieb",
      "lv": "Został"
    },
    "imperfektKonjunktiv": {
      "de": "er bliebe",
      "lv": "Zostałby"
    },
    "partizipVergangenheit": {
      "de": "geblieben (er ist)",
      "lv": "Lewy"
    }
  },
  {
    "infinitiv": {
      "de": "bleichen",
      "lv": "Zbieleć"
    },
    "praesens": {
      "de": "er bleicht",
      "lv": "On wybiela"
    },
    "imperfektIndikativ": {
      "de": "blich",
      "lv": "Bielone"
    },
    "imperfektKonjunktiv": {
      "de": "blich",
      "lv": "Bielone"
    },
    "partizipVergangenheit": {
      "de": "geblichen",
      "lv": "Bielone"
    }
  },
  {
    "infinitiv": {
      "de": "braten",
      "lv": "Piec"
    },
    "praesens": {
      "de": "er brät",
      "lv": "On piecze"
    },
    "imperfektIndikativ": {
      "de": "er briet",
      "lv": "On piecze"
    },
    "imperfektKonjunktiv": {
      "de": "er briete",
      "lv": "Piecze"
    },
    "partizipVergangenheit": {
      "de": "gebraten",
      "lv": "Smażone / pieczone"
    }
  },
  {
    "infinitiv": {
      "de": "brechen",
      "lv": "Złamać"
    },
    "praesens": {
      "de": "er bricht",
      "lv": "On łamie"
    },
    "imperfektIndikativ": {
      "de": "er brach",
      "lv": "Złamał się"
    },
    "imperfektKonjunktiv": {
      "de": "er bräche",
      "lv": "Złamałby się"
    },
    "partizipVergangenheit": {
      "de": "gebrochen",
      "lv": "Zepsuty/zepsuty"
    }
  },
  {
    "infinitiv": {
      "de": "brennen",
      "lv": "Spalić"
    },
    "praesens": {
      "de": "er brennt",
      "lv": "On się pali"
    },
    "imperfektIndikativ": {
      "de": "brannte",
      "lv": "Płonął"
    },
    "imperfektKonjunktiv": {
      "de": "brannte",
      "lv": "Płonął"
    },
    "partizipVergangenheit": {
      "de": "gebrannt",
      "lv": "Spalony"
    }
  },
  {
    "infinitiv": {
      "de": "bringen",
      "lv": "Nosić"
    },
    "praesens": {
      "de": "er bringt",
      "lv": "On niesie"
    },
    "imperfektIndikativ": {
      "de": "er brachte",
      "lv": "Niósł"
    },
    "imperfektKonjunktiv": {
      "de": "er brächte",
      "lv": "Niósłby"
    },
    "partizipVergangenheit": {
      "de": "gebracht",
      "lv": "Przyniósł / przyniósł"
    }
  },
  {
    "infinitiv": {
      "de": "denken",
      "lv": "Myśleć"
    },
    "praesens": {
      "de": "er denkt",
      "lv": "Myśli"
    },
    "imperfektIndikativ": {
      "de": "er dachte",
      "lv": "Pomyślał"
    },
    "imperfektKonjunktiv": {
      "de": "er dächte",
      "lv": "Pomyślałby"
    },
    "partizipVergangenheit": {
      "de": "gedacht",
      "lv": "Przeznaczony"
    }
  },
  {
    "infinitiv": {
      "de": "dingen",
      "lv": "Zatrudnić / zgodzić się"
    },
    "praesens": {
      "de": "er dingt",
      "lv": "On zatrudnia"
    },
    "imperfektIndikativ": {
      "de": "dingte",
      "lv": "Zatrudniony"
    },
    "imperfektKonjunktiv": {
      "de": "dingte",
      "lv": "Zatrudniony"
    },
    "partizipVergangenheit": {
      "de": "gedungen",
      "lv": "Zatrudniony"
    }
  },
  {
    "infinitiv": {
      "de": "dreschen",
      "lv": "Kult"
    },
    "praesens": {
      "de": "er drischt",
      "lv": "On młóci"
    },
    "imperfektIndikativ": {
      "de": "er drasch / er drosch",
      "lv": "Młócił się"
    },
    "imperfektKonjunktiv": {
      "de": "er dräsche / er drösche",
      "lv": "Będzie wielbił"
    },
    "partizipVergangenheit": {
      "de": "gedroschen",
      "lv": "Kult"
    }
  },
  {
    "infinitiv": {
      "de": "dringen",
      "lv": "Włamać się"
    },
    "praesens": {
      "de": "er dringt",
      "lv": "Włamuje się"
    },
    "imperfektIndikativ": {
      "de": "er drang",
      "lv": "Włamał się"
    },
    "imperfektKonjunktiv": {
      "de": "er dränge",
      "lv": "Włamałby się"
    },
    "partizipVergangenheit": {
      "de": "gedrungen (er ist)",
      "lv": "Włamał się"
    }
  },
  {
    "infinitiv": {
      "de": "dünken",
      "lv": "Wydaje się"
    },
    "praesens": {
      "de": "es dünkt",
      "lv": "Wydaje się"
    },
    "imperfektIndikativ": {
      "de": "deuchte",
      "lv": "Wydawało się"
    },
    "imperfektKonjunktiv": {
      "de": "deuchte",
      "lv": "Wydawało się"
    },
    "partizipVergangenheit": {
      "de": "gedünkt",
      "lv": "Wydawało"
    }
  },
  {
    "infinitiv": {
      "de": "dürfen",
      "lv": "Być dozwolone"
    },
    "praesens": {
      "de": "er darf",
      "lv": "On może"
    },
    "imperfektIndikativ": {
      "de": "durfte",
      "lv": "Było dozwolone"
    },
    "imperfektKonjunktiv": {
      "de": "durfte",
      "lv": "Było dozwolone"
    },
    "partizipVergangenheit": {
      "de": "gedurft",
      "lv": "Dozwolony"
    }
  },
  {
    "infinitiv": {
      "de": "empfehlen",
      "lv": "Polecić"
    },
    "praesens": {
      "de": "er empfiehlt",
      "lv": "Sugeruje"
    },
    "imperfektIndikativ": {
      "de": "er empfahl",
      "lv": "Zasugerował"
    },
    "imperfektKonjunktiv": {
      "de": "er empfähle / er empföhle",
      "lv": "Poleciłby"
    },
    "partizipVergangenheit": {
      "de": "empfohlen",
      "lv": "Zalecony"
    }
  },
  {
    "infinitiv": {
      "de": "empfinden",
      "lv": "Czuć"
    },
    "praesens": {
      "de": "er empfindet",
      "lv": "Czuje"
    },
    "imperfektIndikativ": {
      "de": "er empfand",
      "lv": "Czuł"
    },
    "imperfektKonjunktiv": {
      "de": "er empfände",
      "lv": "Czułby"
    },
    "partizipVergangenheit": {
      "de": "empfunden",
      "lv": "Filc"
    }
  },
  {
    "infinitiv": {
      "de": "erlöschen",
      "lv": "Zanika"
    },
    "praesens": {
      "de": "er erlischt",
      "lv": "On wychodzi"
    },
    "imperfektIndikativ": {
      "de": "er erlosch",
      "lv": "Wyszedł"
    },
    "imperfektKonjunktiv": {
      "de": "er erlösche",
      "lv": "Zniknie"
    },
    "partizipVergangenheit": {
      "de": "erloschen (er ist)",
      "lv": "Zgasł"
    }
  },
  {
    "infinitiv": {
      "de": "erschrecken",
      "lv": "Peszyć się"
    },
    "praesens": {
      "de": "er erschrickt",
      "lv": "On się boi"
    },
    "imperfektIndikativ": {
      "de": "er erschrak",
      "lv": "Przestraszył się"
    },
    "imperfektKonjunktiv": {
      "de": "er erschräke",
      "lv": "By się przeraził"
    },
    "partizipVergangenheit": {
      "de": "erschrocken (er ist)",
      "lv": "Przestraszony"
    }
  },
  {
    "infinitiv": {
      "de": "essen",
      "lv": "Jeść"
    },
    "praesens": {
      "de": "er isst",
      "lv": "On je"
    },
    "imperfektIndikativ": {
      "de": "er ass",
      "lv": "Jadł"
    },
    "imperfektKonjunktiv": {
      "de": "er äße",
      "lv": "Zjadłby"
    },
    "partizipVergangenheit": {
      "de": "gegessen",
      "lv": "Zjedzony / zjedzony"
    }
  },
  {
    "infinitiv": {
      "de": "fahren",
      "lv": "Prowadzić"
    },
    "praesens": {
      "de": "er fährt",
      "lv": "On jeździ"
    },
    "imperfektIndikativ": {
      "de": "er fuhr",
      "lv": "On jechał"
    },
    "imperfektKonjunktiv": {
      "de": "er führe",
      "lv": "Jeździłby"
    },
    "partizipVergangenheit": {
      "de": "gefahren (er ist)",
      "lv": "Pojechałem/w lewo"
    }
  },
  {
    "infinitiv": {
      "de": "fallen",
      "lv": "Upaść"
    },
    "praesens": {
      "de": "er fällt",
      "lv": "On upada"
    },
    "imperfektIndikativ": {
      "de": "er fiel",
      "lv": "Upadł"
    },
    "imperfektKonjunktiv": {
      "de": "er fiele",
      "lv": "Upadłby"
    },
    "partizipVergangenheit": {
      "de": "gefallen (er ist)",
      "lv": "Ściąć"
    }
  },
  {
    "infinitiv": {
      "de": "fangen",
      "lv": "Złapać"
    },
    "praesens": {
      "de": "er fängt",
      "lv": "Łapie"
    },
    "imperfektIndikativ": {
      "de": "er fing",
      "lv": "Złapał"
    },
    "imperfektKonjunktiv": {
      "de": "er finge",
      "lv": "Złapałby"
    },
    "partizipVergangenheit": {
      "de": "gefangen",
      "lv": "Złapany / złapany"
    }
  },
  {
    "infinitiv": {
      "de": "finden",
      "lv": "Znaleźć"
    },
    "praesens": {
      "de": "er findet",
      "lv": "Znajduje"
    },
    "imperfektIndikativ": {
      "de": "er fand",
      "lv": "Znalazł"
    },
    "imperfektKonjunktiv": {
      "de": "er fände",
      "lv": "Znalazłby"
    },
    "partizipVergangenheit": {
      "de": "gefunden",
      "lv": "Znaleziony"
    }
  },
  {
    "infinitiv": {
      "de": "fliegen",
      "lv": "Puścić"
    },
    "praesens": {
      "de": "er fliegt",
      "lv": "On leci"
    },
    "imperfektIndikativ": {
      "de": "er flog",
      "lv": "Poleciał"
    },
    "imperfektKonjunktiv": {
      "de": "er flöge",
      "lv": "Latałby"
    },
    "partizipVergangenheit": {
      "de": "geflogen (er ist)",
      "lv": "Poleciał"
    }
  },
  {
    "infinitiv": {
      "de": "fliehen",
      "lv": "Uciec"
    },
    "praesens": {
      "de": "er flieht",
      "lv": "Ucieka"
    },
    "imperfektIndikativ": {
      "de": "er floh",
      "lv": "Uciekł"
    },
    "imperfektKonjunktiv": {
      "de": "er flöhe",
      "lv": "Uciekłby"
    },
    "partizipVergangenheit": {
      "de": "geflohen (er ist)",
      "lv": "Uciekł"
    }
  },
  {
    "infinitiv": {
      "de": "fließen",
      "lv": "Płynąć"
    },
    "praesens": {
      "de": "er fließt",
      "lv": "On biegnie"
    },
    "imperfektIndikativ": {
      "de": "er floss",
      "lv": "Pobiegł"
    },
    "imperfektKonjunktiv": {
      "de": "er flösse",
      "lv": "Pobiegłby"
    },
    "partizipVergangenheit": {
      "de": "geflossen (er ist)",
      "lv": "Przeszedł"
    }
  },
  {
    "infinitiv": {
      "de": "fressen",
      "lv": "Zjeść jutro"
    },
    "praesens": {
      "de": "er frisst",
      "lv": "Je / połyka"
    },
    "imperfektIndikativ": {
      "de": "er frass",
      "lv": "Zjadł / połknął"
    },
    "imperfektKonjunktiv": {
      "de": "er fräße",
      "lv": "Jadł/śniadanie"
    },
    "partizipVergangenheit": {
      "de": "gefressen",
      "lv": "Zjedzone/rano"
    }
  },
  {
    "infinitiv": {
      "de": "frieren",
      "lv": "Zimno"
    },
    "praesens": {
      "de": "er friert",
      "lv": "On marznie"
    },
    "imperfektIndikativ": {
      "de": "er fror",
      "lv": "On wyspa"
    },
    "imperfektKonjunktiv": {
      "de": "er fröre",
      "lv": "Zmarzł"
    },
    "partizipVergangenheit": {
      "de": "gefroren",
      "lv": "Wyspa"
    }
  },
  {
    "infinitiv": {
      "de": "geben",
      "lv": "Dać"
    },
    "praesens": {
      "de": "er gibt",
      "lv": "On daje"
    },
    "imperfektIndikativ": {
      "de": "er gab",
      "lv": "Dał"
    },
    "imperfektKonjunktiv": {
      "de": "er gäbe",
      "lv": "Dałby"
    },
    "partizipVergangenheit": {
      "de": "gegeben",
      "lv": "Dany"
    }
  },
  {
    "infinitiv": {
      "de": "gedeihen",
      "lv": "Odnieść sukces"
    },
    "praesens": {
      "de": "er gedeiht",
      "lv": "Udaje mu się"
    },
    "imperfektIndikativ": {
      "de": "er gedieh",
      "lv": "Udało mu się"
    },
    "imperfektKonjunktiv": {
      "de": "er gediehe",
      "lv": "By mu się to udało"
    },
    "partizipVergangenheit": {
      "de": "gediehen (er ist)",
      "lv": "Udało się"
    }
  },
  {
    "infinitiv": {
      "de": "gehen",
      "lv": "Iść"
    },
    "praesens": {
      "de": "er geht",
      "lv": "On idzie"
    },
    "imperfektIndikativ": {
      "de": "er ging",
      "lv": "Chodził"
    },
    "imperfektKonjunktiv": {
      "de": "er ginge",
      "lv": "Poszedłby"
    },
    "partizipVergangenheit": {
      "de": "gegangen (er ist)",
      "lv": "Wszedł"
    }
  },
  {
    "infinitiv": {
      "de": "gewinnen",
      "lv": "Uzyskać"
    },
    "praesens": {
      "de": "er gewinnt",
      "lv": "Dostaje"
    },
    "imperfektIndikativ": {
      "de": "er gewann",
      "lv": "Dostał"
    },
    "imperfektKonjunktiv": {
      "de": "er gewönne / er gewänne",
      "lv": "Dostałby"
    },
    "partizipVergangenheit": {
      "de": "gewonnen",
      "lv": "Uzyskany"
    }
  },
  {
    "infinitiv": {
      "de": "haben",
      "lv": "Być/należeć"
    },
    "praesens": {
      "de": "er hat",
      "lv": "On ma"
    },
    "imperfektIndikativ": {
      "de": "hatte",
      "lv": "Był"
    },
    "imperfektKonjunktiv": {
      "de": "hatte",
      "lv": "Był"
    },
    "partizipVergangenheit": {
      "de": "gehabt",
      "lv": "Został"
    }
  },
  {
    "infinitiv": {
      "de": "halten",
      "lv": "Trzymać"
    },
    "praesens": {
      "de": "er hält",
      "lv": "On tam"
    },
    "imperfektIndikativ": {
      "de": "er hielt",
      "lv": "Trzymał"
    },
    "imperfektKonjunktiv": {
      "de": "er hielte",
      "lv": "By trzymał"
    },
    "partizipVergangenheit": {
      "de": "gehalten",
      "lv": "Trzymany"
    }
  },
  {
    "infinitiv": {
      "de": "heißen",
      "lv": "Zadzwonić"
    },
    "praesens": {
      "de": "er heißt",
      "lv": "On dzwoni / jest wzywany"
    },
    "imperfektIndikativ": {
      "de": "er hieß",
      "lv": "Zadzwonił / został wezwany"
    },
    "imperfektKonjunktiv": {
      "de": "er hieße",
      "lv": "On by zadzwonił/zostałby wezwany"
    },
    "partizipVergangenheit": {
      "de": "geheißen",
      "lv": "Zwany"
    }
  },
  {
    "infinitiv": {
      "de": "helfen",
      "lv": "Pomóc"
    },
    "praesens": {
      "de": "er hilft",
      "lv": "On pomaga"
    },
    "imperfektIndikativ": {
      "de": "er half",
      "lv": "Pomógł"
    },
    "imperfektKonjunktiv": {
      "de": "er hülfe / er hälfe",
      "lv": "On by pomógł"
    },
    "partizipVergangenheit": {
      "de": "geholfen",
      "lv": "Pomogło"
    }
  },
  {
    "infinitiv": {
      "de": "kommen",
      "lv": "Przyjść"
    },
    "praesens": {
      "de": "er kommt",
      "lv": "On nadchodzi"
    },
    "imperfektIndikativ": {
      "de": "er kam",
      "lv": "Przyszedł"
    },
    "imperfektKonjunktiv": {
      "de": "er käme",
      "lv": "Przyjdzie"
    },
    "partizipVergangenheit": {
      "de": "gekommen (er ist)",
      "lv": "Nadszedł"
    }
  },
  {
    "infinitiv": {
      "de": "können",
      "lv": "Móc"
    },
    "praesens": {
      "de": "er kann",
      "lv": "On może"
    },
    "imperfektIndikativ": {
      "de": "konnte",
      "lv": "Mógł"
    },
    "imperfektKonjunktiv": {
      "de": "konnte",
      "lv": "Mógł"
    },
    "partizipVergangenheit": {
      "de": "gekonnt",
      "lv": "Mógł"
    }
  },
  {
    "infinitiv": {
      "de": "kriechen",
      "lv": "Pada deszcz"
    },
    "praesens": {
      "de": "er kriecht",
      "lv": "On się pochyla"
    },
    "imperfektIndikativ": {
      "de": "er kroch",
      "lv": "Padał deszcz"
    },
    "imperfektKonjunktiv": {
      "de": "er kröche",
      "lv": "On pada"
    },
    "partizipVergangenheit": {
      "de": "gekrochen (er ist)",
      "lv": "Zmarł"
    }
  },
  {
    "infinitiv": {
      "de": "laden",
      "lv": "Załadować, zaprosić"
    },
    "praesens": {
      "de": "er lädt",
      "lv": "On gromadzi / zaprasza"
    },
    "imperfektIndikativ": {
      "de": "er lud",
      "lv": "Załadował / zaprosił"
    },
    "imperfektKonjunktiv": {
      "de": "er lüde",
      "lv": "Ładował/zapraszał"
    },
    "partizipVergangenheit": {
      "de": "geladen",
      "lv": "Załadowany / zaproszony"
    }
  },
  {
    "infinitiv": {
      "de": "lassen",
      "lv": "Postawić, pozwolić"
    },
    "praesens": {
      "de": "er lässt",
      "lv": "On stawia / pozwala"
    },
    "imperfektIndikativ": {
      "de": "er ließ",
      "lv": "Nakazał / pozwolił"
    },
    "imperfektKonjunktiv": {
      "de": "er ließe",
      "lv": "Położyłby / pozwolił"
    },
    "partizipVergangenheit": {
      "de": "gelassen",
      "lv": "Umieścić / pozwolić"
    }
  },
  {
    "infinitiv": {
      "de": "laufen",
      "lv": "Biegać"
    },
    "praesens": {
      "de": "er läuft",
      "lv": "On biega"
    },
    "imperfektIndikativ": {
      "de": "er lief",
      "lv": "Pobiegł"
    },
    "imperfektKonjunktiv": {
      "de": "er liefe",
      "lv": "Pobiegłby"
    },
    "partizipVergangenheit": {
      "de": "gelaufen (er ist)",
      "lv": "Pobiegł"
    }
  },
  {
    "infinitiv": {
      "de": "leiden",
      "lv": "Cierpieć"
    },
    "praesens": {
      "de": "er leidet",
      "lv": "On cierpi"
    },
    "imperfektIndikativ": {
      "de": "er litt",
      "lv": "Cierpiał"
    },
    "imperfektKonjunktiv": {
      "de": "er litte",
      "lv": "Cierpiałby"
    },
    "partizipVergangenheit": {
      "de": "gelitten",
      "lv": "Cierpiał"
    }
  },
  {
    "infinitiv": {
      "de": "leihen",
      "lv": "Pożyczać / pożyczać"
    },
    "praesens": {
      "de": "er leiht",
      "lv": "Pożycza / pożycza"
    },
    "imperfektIndikativ": {
      "de": "er lieh",
      "lv": "Pożyczył / pożyczył"
    },
    "imperfektKonjunktiv": {
      "de": "er liehe",
      "lv": "Pożyczyłby/pożyczył"
    },
    "partizipVergangenheit": {
      "de": "geliehen",
      "lv": "Pożyczył/pożyczył"
    }
  },
  {
    "infinitiv": {
      "de": "lesen",
      "lv": "Czytać"
    },
    "praesens": {
      "de": "er liest",
      "lv": "On czyta"
    },
    "imperfektIndikativ": {
      "de": "er las",
      "lv": "Czytał"
    },
    "imperfektKonjunktiv": {
      "de": "er läse",
      "lv": "Przeczytałby"
    },
    "partizipVergangenheit": {
      "de": "gelesen",
      "lv": "Czytać"
    }
  },
  {
    "infinitiv": {
      "de": "liegen",
      "lv": "Spać"
    },
    "praesens": {
      "de": "er liegt",
      "lv": "On śpi"
    },
    "imperfektIndikativ": {
      "de": "er lag",
      "lv": "Spał"
    },
    "imperfektKonjunktiv": {
      "de": "er läge",
      "lv": "Spałby"
    },
    "partizipVergangenheit": {
      "de": "gelegen",
      "lv": "Spał"
    }
  },
  {
    "infinitiv": {
      "de": "lügen",
      "lv": "Kłamać"
    },
    "praesens": {
      "de": "er lügt",
      "lv": "On kłamie"
    },
    "imperfektIndikativ": {
      "de": "er log",
      "lv": "Skłamał"
    },
    "imperfektKonjunktiv": {
      "de": "er löge",
      "lv": "Skłamałby"
    },
    "partizipVergangenheit": {
      "de": "gelogen",
      "lv": "Okłamał"
    }
  },
  {
    "infinitiv": {
      "de": "mahlen",
      "lv": "Grunt"
    },
    "praesens": {
      "de": "er mahlt",
      "lv": "On miele"
    },
    "imperfektIndikativ": {
      "de": "er mahlte",
      "lv": "On krawędź"
    },
    "imperfektKonjunktiv": {
      "de": "er malte",
      "lv": "On miele"
    },
    "partizipVergangenheit": {
      "de": "gemahlen",
      "lv": "Grunt"
    }
  },
  {
    "infinitiv": {
      "de": "meiden",
      "lv": "Unikać"
    },
    "praesens": {
      "de": "er meidet",
      "lv": "Unika"
    },
    "imperfektIndikativ": {
      "de": "er mied",
      "lv": "Unikał"
    },
    "imperfektKonjunktiv": {
      "de": "er miede",
      "lv": "Unikałby"
    },
    "partizipVergangenheit": {
      "de": "gemieden",
      "lv": "Uniknąć"
    }
  },
  {
    "infinitiv": {
      "de": "melken",
      "lv": "Do mleka"
    },
    "praesens": {
      "de": "er milkt / er melkt",
      "lv": "Zamiata"
    },
    "imperfektIndikativ": {
      "de": "er molk / er melkte",
      "lv": "Zamiatał"
    },
    "imperfektKonjunktiv": {
      "de": "er mölke / er melkte",
      "lv": "Doił"
    },
    "partizipVergangenheit": {
      "de": "gemolken / gemelkt",
      "lv": "Dojone"
    }
  },
  {
    "infinitiv": {
      "de": "messen",
      "lv": "Zmierzyć"
    },
    "praesens": {
      "de": "er misst",
      "lv": "On mierzy"
    },
    "imperfektIndikativ": {
      "de": "er mass",
      "lv": "Zmierzył"
    },
    "imperfektKonjunktiv": {
      "de": "er mäße",
      "lv": "By zmierzył"
    },
    "partizipVergangenheit": {
      "de": "gemessen",
      "lv": "Wymierzony"
    }
  },
  {
    "infinitiv": {
      "de": "misslingen",
      "lv": "Ponieść porażkę"
    },
    "praesens": {
      "de": "es misslingt",
      "lv": "To zawodzi"
    },
    "imperfektIndikativ": {
      "de": "misslang",
      "lv": "Przegrany"
    },
    "imperfektKonjunktiv": {
      "de": "misslang",
      "lv": "Przegrany"
    },
    "partizipVergangenheit": {
      "de": "misslungen",
      "lv": "Przegrany"
    }
  },
  {
    "infinitiv": {
      "de": "mögen",
      "lv": "Lubić"
    },
    "praesens": {
      "de": "er mag",
      "lv": "On lubi"
    },
    "imperfektIndikativ": {
      "de": "mochte",
      "lv": "Podobało się"
    },
    "imperfektKonjunktiv": {
      "de": "mochte",
      "lv": "Podobało się"
    },
    "partizipVergangenheit": {
      "de": "gemocht",
      "lv": "Podobało się"
    }
  },
  {
    "infinitiv": {
      "de": "müssen",
      "lv": "Potrzebować"
    },
    "praesens": {
      "de": "er muss",
      "lv": "Potrzebuje"
    },
    "imperfektIndikativ": {
      "de": "musste",
      "lv": "Powinien mieć"
    },
    "imperfektKonjunktiv": {
      "de": "musste",
      "lv": "Powinien mieć"
    },
    "partizipVergangenheit": {
      "de": "gemusst",
      "lv": "Wymagany"
    }
  },
  {
    "infinitiv": {
      "de": "nehmen",
      "lv": "Wziąć"
    },
    "praesens": {
      "de": "er nimmt",
      "lv": "Bierze"
    },
    "imperfektIndikativ": {
      "de": "er nahm",
      "lv": "Wziął"
    },
    "imperfektKonjunktiv": {
      "de": "er nähme",
      "lv": "Wziąłby"
    },
    "partizipVergangenheit": {
      "de": "genommen",
      "lv": "Zajęty"
    }
  },
  {
    "infinitiv": {
      "de": "nennen",
      "lv": "Nazwać"
    },
    "praesens": {
      "de": "er nennt",
      "lv": "Nazwał"
    },
    "imperfektIndikativ": {
      "de": "er nannte",
      "lv": "Zadzwonił"
    },
    "imperfektKonjunktiv": {
      "de": "er nennte",
      "lv": "Wymieniłby"
    },
    "partizipVergangenheit": {
      "de": "genannt",
      "lv": "Nazwany"
    }
  },
  {
    "infinitiv": {
      "de": "pfeifen",
      "lv": "Gwizdać"
    },
    "praesens": {
      "de": "er pfeift",
      "lv": "On gwiżdże"
    },
    "imperfektIndikativ": {
      "de": "er pfiff",
      "lv": "– gwizdnął"
    },
    "imperfektKonjunktiv": {
      "de": "er pfiffe",
      "lv": "Gwizdnąłby"
    },
    "partizipVergangenheit": {
      "de": "gepfiffen",
      "lv": "Gwizdnął"
    }
  },
  {
    "infinitiv": {
      "de": "pflegen",
      "lv": "Utrzymywać"
    },
    "praesens": {
      "de": "er pflegt",
      "lv": "Mu zależy"
    },
    "imperfektIndikativ": {
      "de": "pflegte vai pflog",
      "lv": "Ustawić"
    },
    "imperfektKonjunktiv": {
      "de": "pflegte vai pflog",
      "lv": "Ustawić"
    },
    "partizipVergangenheit": {
      "de": "gepflegt vai gepflogen",
      "lv": "Zadbane"
    }
  },
  {
    "infinitiv": {
      "de": "preisen",
      "lv": "Pochwała"
    },
    "praesens": {
      "de": "er preist",
      "lv": "– chwali"
    },
    "imperfektIndikativ": {
      "de": "er pries",
      "lv": "– pochwalił"
    },
    "imperfektKonjunktiv": {
      "de": "er priese",
      "lv": "Pochwaliłby"
    },
    "partizipVergangenheit": {
      "de": "gepriesen",
      "lv": "Chwalony"
    }
  },
  {
    "infinitiv": {
      "de": "quellen",
      "lv": "Pulchnieć"
    },
    "praesens": {
      "de": "er quillt",
      "lv": "On przybiera na wadze"
    },
    "imperfektIndikativ": {
      "de": "er quoll",
      "lv": "Dojrzał"
    },
    "imperfektKonjunktiv": {
      "de": "er quölle",
      "lv": "On gruby"
    },
    "partizipVergangenheit": {
      "de": "gequollen (er ist)",
      "lv": "Spuchnięty"
    }
  },
  {
    "infinitiv": {
      "de": "raten",
      "lv": "Zasugerować/wspomnieć"
    },
    "praesens": {
      "de": "er rät",
      "lv": "Poleca /min"
    },
    "imperfektIndikativ": {
      "de": "er riet",
      "lv": "Zasugerował / zasugerował"
    },
    "imperfektKonjunktiv": {
      "de": "er riete",
      "lv": "Zasugerowałby/wspomniał"
    },
    "partizipVergangenheit": {
      "de": "geraten",
      "lv": "Zasugerowane/wspomniane"
    }
  },
  {
    "infinitiv": {
      "de": "reiben",
      "lv": "Pocierać"
    },
    "praesens": {
      "de": "er reibt",
      "lv": "On pociera"
    },
    "imperfektIndikativ": {
      "de": "er rieb",
      "lv": "On pociera"
    },
    "imperfektKonjunktiv": {
      "de": "er riebe",
      "lv": "Pocierałby"
    },
    "partizipVergangenheit": {
      "de": "gerieben",
      "lv": "Pocierany"
    }
  },
  {
    "infinitiv": {
      "de": "reißen",
      "lv": "Ciągnąć"
    },
    "praesens": {
      "de": "er reißt",
      "lv": "– warczy"
    },
    "imperfektIndikativ": {
      "de": "er riss",
      "lv": "– warknął"
    },
    "imperfektKonjunktiv": {
      "de": "er risse",
      "lv": "– warknął"
    },
    "partizipVergangenheit": {
      "de": "gerissen",
      "lv": "Rozdarty"
    }
  },
  {
    "infinitiv": {
      "de": "reiten",
      "lv": "Jeździć"
    },
    "praesens": {
      "de": "er reitet",
      "lv": "On jeździ"
    },
    "imperfektIndikativ": {
      "de": "er ritt",
      "lv": "Jechał"
    },
    "imperfektKonjunktiv": {
      "de": "er ritte",
      "lv": "Jeździłby"
    },
    "partizipVergangenheit": {
      "de": "geritten (er ist)",
      "lv": "Jechał"
    }
  },
  {
    "infinitiv": {
      "de": "rennen",
      "lv": "Biegać"
    },
    "praesens": {
      "de": "er rennt",
      "lv": "On biega"
    },
    "imperfektIndikativ": {
      "de": "er rannte",
      "lv": "Pobiegł"
    },
    "imperfektKonjunktiv": {
      "de": "er rennte",
      "lv": "Pobiegłby"
    },
    "partizipVergangenheit": {
      "de": "gerannt",
      "lv": "Pobiegł"
    }
  },
  {
    "infinitiv": {
      "de": "riechen",
      "lv": "Ost"
    },
    "praesens": {
      "de": "er riecht",
      "lv": "On pachnie"
    },
    "imperfektIndikativ": {
      "de": "er roch",
      "lv": "On śpiewa"
    },
    "imperfektKonjunktiv": {
      "de": "er röche",
      "lv": "On portuje"
    },
    "partizipVergangenheit": {
      "de": "gerochen",
      "lv": "Port"
    }
  },
  {
    "infinitiv": {
      "de": "ringen",
      "lv": "Złamać"
    },
    "praesens": {
      "de": "er ringt",
      "lv": "On łamie"
    },
    "imperfektIndikativ": {
      "de": "er rang",
      "lv": "Załamał się"
    },
    "imperfektKonjunktiv": {
      "de": "er ränge",
      "lv": "Złamałby się"
    },
    "partizipVergangenheit": {
      "de": "gerungen",
      "lv": "Czekać"
    }
  },
  {
    "infinitiv": {
      "de": "rinnen",
      "lv": "Płynąć"
    },
    "praesens": {
      "de": "er rinnt",
      "lv": "On biegnie"
    },
    "imperfektIndikativ": {
      "de": "er rann",
      "lv": "Pobiegł"
    },
    "imperfektKonjunktiv": {
      "de": "er ränne / er rönne",
      "lv": "Pobiegłby"
    },
    "partizipVergangenheit": {
      "de": "geronnen (er ist)",
      "lv": "Płynął/koagulował"
    }
  },
  {
    "infinitiv": {
      "de": "rufen",
      "lv": "Zadzwonić"
    },
    "praesens": {
      "de": "er ruft",
      "lv": "On dzwoni"
    },
    "imperfektIndikativ": {
      "de": "er rief",
      "lv": "Zadzwonił"
    },
    "imperfektKonjunktiv": {
      "de": "er riefe",
      "lv": "Zadzwoniłby"
    },
    "partizipVergangenheit": {
      "de": "gerufen",
      "lv": "Zwany"
    }
  },
  {
    "infinitiv": {
      "de": "salzen",
      "lv": "Do soli"
    },
    "praesens": {
      "de": "er salzt",
      "lv": "Posolił"
    },
    "imperfektIndikativ": {
      "de": "er salzte",
      "lv": "Posolił"
    },
    "imperfektKonjunktiv": {
      "de": "er salzte",
      "lv": "Soliłby"
    },
    "partizipVergangenheit": {
      "de": "gesalzen",
      "lv": "Posolony"
    }
  },
  {
    "infinitiv": {
      "de": "saufen",
      "lv": "Wysuszyć / wypić"
    },
    "praesens": {
      "de": "er säuft",
      "lv": "On pije/pije"
    },
    "imperfektIndikativ": {
      "de": "er soff",
      "lv": "Pił / pił"
    },
    "imperfektKonjunktiv": {
      "de": "er söffe",
      "lv": "Piłby/pił"
    },
    "partizipVergangenheit": {
      "de": "gesoffen",
      "lv": "Pijany"
    }
  },
  {
    "infinitiv": {
      "de": "saugen",
      "lv": "Ssać"
    },
    "praesens": {
      "de": "er saugt",
      "lv": "On jest do bani"
    },
    "imperfektIndikativ": {
      "de": "er sog",
      "lv": "Ssał"
    },
    "imperfektKonjunktiv": {
      "de": "er söge",
      "lv": "By ssał"
    },
    "partizipVergangenheit": {
      "de": "gesogen",
      "lv": "Ssane"
    }
  },
  {
    "infinitiv": {
      "de": "schaffen",
      "lv": "Stworzyć"
    },
    "praesens": {
      "de": "er schafft",
      "lv": "On tworzy"
    },
    "imperfektIndikativ": {
      "de": "er schuf",
      "lv": "Stworzył"
    },
    "imperfektKonjunktiv": {
      "de": "er schüfe",
      "lv": "Stworzyłby"
    },
    "partizipVergangenheit": {
      "de": "geschaffen",
      "lv": "Stworzony"
    }
  },
  {
    "infinitiv": {
      "de": "schallen",
      "lv": "Brzmieć"
    },
    "praesens": {
      "de": "es schallt",
      "lv": "To brzmi"
    },
    "imperfektIndikativ": {
      "de": "schallte vai scholl",
      "lv": "Brzmiało"
    },
    "imperfektKonjunktiv": {
      "de": "schallte vai scholl",
      "lv": "Brzmiało"
    },
    "partizipVergangenheit": {
      "de": "geschallt",
      "lv": "Brzmiało"
    }
  },
  {
    "infinitiv": {
      "de": "scheiden",
      "lv": "Rozwód/rozstanie"
    },
    "praesens": {
      "de": "er scheidet",
      "lv": "On się rozwodzi/rozwodzi"
    },
    "imperfektIndikativ": {
      "de": "er schied",
      "lv": "Rozwiódł się / rozwiódł się"
    },
    "imperfektKonjunktiv": {
      "de": "er schiede",
      "lv": "Rozwiódłby się/rozwiódł"
    },
    "partizipVergangenheit": {
      "de": "geschieden (er hat / er ist)",
      "lv": "W separacji/rozwiedziony"
    }
  },
  {
    "infinitiv": {
      "de": "scheinen",
      "lv": "Błyszczeć / wydawać się"
    },
    "praesens": {
      "de": "er scheint",
      "lv": "On świeci/wydaje się"
    },
    "imperfektIndikativ": {
      "de": "er schien",
      "lv": "On świecił/wydawał się"
    },
    "imperfektKonjunktiv": {
      "de": "er schiene",
      "lv": "On by świecił/wydawał się"
    },
    "partizipVergangenheit": {
      "de": "geschienen",
      "lv": "Świeciło/wydawało się"
    }
  },
  {
    "infinitiv": {
      "de": "schelten",
      "lv": "Bart"
    },
    "praesens": {
      "de": "er schilt",
      "lv": "– karci"
    },
    "imperfektIndikativ": {
      "de": "er schalt",
      "lv": "Zabronił"
    },
    "imperfektKonjunktiv": {
      "de": "er schölte / er schälte",
      "lv": "Goli się"
    },
    "partizipVergangenheit": {
      "de": "gescholten",
      "lv": "Broda"
    }
  },
  {
    "infinitiv": {
      "de": "scheren",
      "lv": "Ciąć"
    },
    "praesens": {
      "de": "er schert",
      "lv": "On tnie"
    },
    "imperfektIndikativ": {
      "de": "schor vai scherte",
      "lv": "Nożyczki"
    },
    "imperfektKonjunktiv": {
      "de": "schor vai scherte",
      "lv": "Nożyczki"
    },
    "partizipVergangenheit": {
      "de": "geschoren vai geschert",
      "lv": "Przycięty"
    }
  },
  {
    "infinitiv": {
      "de": "schieben",
      "lv": "Pchać"
    },
    "praesens": {
      "de": "er schiebt",
      "lv": "On popycha"
    },
    "imperfektIndikativ": {
      "de": "er schob",
      "lv": "Pchnął"
    },
    "imperfektKonjunktiv": {
      "de": "er schöbe",
      "lv": "Pchnąłby"
    },
    "partizipVergangenheit": {
      "de": "geschoben",
      "lv": "Pchnięty"
    }
  },
  {
    "infinitiv": {
      "de": "schießen",
      "lv": "Strzelać"
    },
    "praesens": {
      "de": "er schießt",
      "lv": "On strzela"
    },
    "imperfektIndikativ": {
      "de": "er schoss",
      "lv": "Strzelił"
    },
    "imperfektKonjunktiv": {
      "de": "er schösse",
      "lv": "Strzelałby"
    },
    "partizipVergangenheit": {
      "de": "geschossen",
      "lv": "Strzał"
    }
  },
  {
    "infinitiv": {
      "de": "schinden",
      "lv": "Dręczyć"
    },
    "praesens": {
      "de": "er schindet",
      "lv": "On dręczy"
    },
    "imperfektIndikativ": {
      "de": "schindete",
      "lv": "Zadręczany"
    },
    "imperfektKonjunktiv": {
      "de": "schindete",
      "lv": "Zadręczany"
    },
    "partizipVergangenheit": {
      "de": "geschunden",
      "lv": "Zadręczany"
    }
  },
  {
    "infinitiv": {
      "de": "schlafen",
      "lv": "Spać"
    },
    "praesens": {
      "de": "er schläft",
      "lv": "On śpi"
    },
    "imperfektIndikativ": {
      "de": "er schlief",
      "lv": "Spał"
    },
    "imperfektKonjunktiv": {
      "de": "er schliefe",
      "lv": "Spałby"
    },
    "partizipVergangenheit": {
      "de": "geschlafen",
      "lv": "Spał"
    }
  },
  {
    "infinitiv": {
      "de": "schlagen",
      "lv": "Uderzyć"
    },
    "praesens": {
      "de": "er schlägt",
      "lv": "Uderza"
    },
    "imperfektIndikativ": {
      "de": "er schlug",
      "lv": "Uderzył"
    },
    "imperfektKonjunktiv": {
      "de": "er schlüge",
      "lv": "By uderzył"
    },
    "partizipVergangenheit": {
      "de": "geschlagen",
      "lv": "Bity"
    }
  },
  {
    "infinitiv": {
      "de": "schleichen",
      "lv": "Pada deszcz"
    },
    "praesens": {
      "de": "er schleicht",
      "lv": "On się pochyla"
    },
    "imperfektIndikativ": {
      "de": "er schlich",
      "lv": "Padał deszcz"
    },
    "imperfektKonjunktiv": {
      "de": "er schliche",
      "lv": "On pada"
    },
    "partizipVergangenheit": {
      "de": "geschlichen (er ist)",
      "lv": "Zmarł"
    }
  },
  {
    "infinitiv": {
      "de": "schleifen",
      "lv": "Szlifować"
    },
    "praesens": {
      "de": "er schleift",
      "lv": "On miele"
    },
    "imperfektIndikativ": {
      "de": "er schliff",
      "lv": "Zmielił"
    },
    "imperfektKonjunktiv": {
      "de": "er schliffe",
      "lv": "Zmiażdżyłby"
    },
    "partizipVergangenheit": {
      "de": "geschliffen",
      "lv": "Błyszczący"
    }
  },
  {
    "infinitiv": {
      "de": "schließen",
      "lv": "Zamknąć"
    },
    "praesens": {
      "de": "er schließt",
      "lv": "Zamyka"
    },
    "imperfektIndikativ": {
      "de": "er schloss",
      "lv": "Zamknął"
    },
    "imperfektKonjunktiv": {
      "de": "er schlösse",
      "lv": "Zamknąłby"
    },
    "partizipVergangenheit": {
      "de": "geschlossen",
      "lv": "Zamknięte"
    }
  },
  {
    "infinitiv": {
      "de": "schlingen",
      "lv": "Jutro"
    },
    "praesens": {
      "de": "er schlingt",
      "lv": "On połyka"
    },
    "imperfektIndikativ": {
      "de": "er schlang",
      "lv": "Przełknął"
    },
    "imperfektKonjunktiv": {
      "de": "er schlänge",
      "lv": "On rano"
    },
    "partizipVergangenheit": {
      "de": "geschlungen",
      "lv": "Poranek"
    }
  },
  {
    "infinitiv": {
      "de": "schmeißen",
      "lv": "Rzucić"
    },
    "praesens": {
      "de": "er schmeißt",
      "lv": "Rzuca"
    },
    "imperfektIndikativ": {
      "de": "er schmiss",
      "lv": "Rzucił"
    },
    "imperfektKonjunktiv": {
      "de": "er schmisse",
      "lv": "Rzucił"
    },
    "partizipVergangenheit": {
      "de": "geschmissen",
      "lv": "Rzucony"
    }
  },
  {
    "infinitiv": {
      "de": "schmelzen",
      "lv": "Poruszający"
    },
    "praesens": {
      "de": "er schmilzt",
      "lv": "On się topi"
    },
    "imperfektIndikativ": {
      "de": "er schmolz",
      "lv": "Jęknął"
    },
    "imperfektKonjunktiv": {
      "de": "er schmölze",
      "lv": "Poruszał się"
    },
    "partizipVergangenheit": {
      "de": "geschmolzen (er ist)",
      "lv": "Stopiony"
    }
  },
  {
    "infinitiv": {
      "de": "schnauben",
      "lv": "Syczeć"
    },
    "praesens": {
      "de": "er schnaubt",
      "lv": "Prycha"
    },
    "imperfektIndikativ": {
      "de": "schnaubte vai schnob",
      "lv": "Parsknął"
    },
    "imperfektKonjunktiv": {
      "de": "schnaubte vai schnob",
      "lv": "Parsknął"
    },
    "partizipVergangenheit": {
      "de": "geschnaubt vai geschnoben",
      "lv": "Parsknięcie"
    }
  },
  {
    "infinitiv": {
      "de": "schneiden",
      "lv": "Ciąć"
    },
    "praesens": {
      "de": "er schneidet",
      "lv": "Kręci się"
    },
    "imperfektIndikativ": {
      "de": "er schnitt",
      "lv": "Cięł"
    },
    "imperfektKonjunktiv": {
      "de": "er schnitte",
      "lv": "Tnie"
    },
    "partizipVergangenheit": {
      "de": "geschnitten",
      "lv": "Cięcie"
    }
  },
  {
    "infinitiv": {
      "de": "schreiben",
      "lv": "Pisać"
    },
    "praesens": {
      "de": "er schreibt",
      "lv": "Pisze"
    },
    "imperfektIndikativ": {
      "de": "er schrieb",
      "lv": "Napisał"
    },
    "imperfektKonjunktiv": {
      "de": "er schriebe",
      "lv": "Napisałby"
    },
    "partizipVergangenheit": {
      "de": "geschrieben",
      "lv": "Pisemny"
    }
  },
  {
    "infinitiv": {
      "de": "schreien",
      "lv": "Krzyczeć"
    },
    "praesens": {
      "de": "er schreit",
      "lv": "– krzyczy"
    },
    "imperfektIndikativ": {
      "de": "er schrie",
      "lv": "– krzyknął"
    },
    "imperfektKonjunktiv": {
      "de": "er schriee",
      "lv": "– krzyknąłby"
    },
    "partizipVergangenheit": {
      "de": "geschrien",
      "lv": "Krzyknął"
    }
  },
  {
    "infinitiv": {
      "de": "schreiten",
      "lv": "Pieszy"
    },
    "praesens": {
      "de": "er schreitet",
      "lv": "On idzie"
    },
    "imperfektIndikativ": {
      "de": "er schritt",
      "lv": "On chodził"
    },
    "imperfektKonjunktiv": {
      "de": "er schritte",
      "lv": "Poszedłby"
    },
    "partizipVergangenheit": {
      "de": "geschritten (er ist)",
      "lv": "Chodził"
    }
  },
  {
    "infinitiv": {
      "de": "schweigen",
      "lv": "Milczeć"
    },
    "praesens": {
      "de": "er schweigt",
      "lv": "On milczy"
    },
    "imperfektIndikativ": {
      "de": "er schwieg",
      "lv": "On milczał"
    },
    "imperfektKonjunktiv": {
      "de": "er schwiege",
      "lv": "Milczałby"
    },
    "partizipVergangenheit": {
      "de": "geschwiegen",
      "lv": "Uciszony"
    }
  },
  {
    "infinitiv": {
      "de": "schwellen",
      "lv": "Pompa"
    },
    "praesens": {
      "de": "er schwillt",
      "lv": "– wydysza się"
    },
    "imperfektIndikativ": {
      "de": "er schwoll",
      "lv": "On pampas"
    },
    "imperfektKonjunktiv": {
      "de": "er schwölle",
      "lv": "Pompowałby"
    },
    "partizipVergangenheit": {
      "de": "geschwollen (er ist)",
      "lv": "Pompa"
    }
  },
  {
    "infinitiv": {
      "de": "schwimmen",
      "lv": "Pływać"
    },
    "praesens": {
      "de": "er schwimmt",
      "lv": "On pływa"
    },
    "imperfektIndikativ": {
      "de": "er schwamm",
      "lv": "Pływał"
    },
    "imperfektKonjunktiv": {
      "de": "er schwömme / er schwämme",
      "lv": "Pływałby"
    },
    "partizipVergangenheit": {
      "de": "geschwommen (er ist)",
      "lv": "Pływał"
    }
  },
  {
    "infinitiv": {
      "de": "schwinden",
      "lv": "Zniknąć"
    },
    "praesens": {
      "de": "er schwindet",
      "lv": "On znika"
    },
    "imperfektIndikativ": {
      "de": "er schwand",
      "lv": "Zniknął"
    },
    "imperfektKonjunktiv": {
      "de": "er schwände",
      "lv": "Zniknąłby"
    },
    "partizipVergangenheit": {
      "de": "geschwunden (er ist)",
      "lv": "Zaginiony"
    }
  },
  {
    "infinitiv": {
      "de": "schwingen",
      "lv": "Fala"
    },
    "praesens": {
      "de": "er schwingt",
      "lv": "Macha"
    },
    "imperfektIndikativ": {
      "de": "er schwang",
      "lv": "Pomachał"
    },
    "imperfektKonjunktiv": {
      "de": "er schwänge",
      "lv": "Pomachałby"
    },
    "partizipVergangenheit": {
      "de": "geschwungen",
      "lv": "Zaondulowany"
    }
  },
  {
    "infinitiv": {
      "de": "schwören",
      "lv": "Przysięgać"
    },
    "praesens": {
      "de": "er schwört",
      "lv": "Przysięga"
    },
    "imperfektIndikativ": {
      "de": "er schwur / er schwor",
      "lv": "Przysiągł"
    },
    "imperfektKonjunktiv": {
      "de": "er schwöre",
      "lv": "Przysiągłby"
    },
    "partizipVergangenheit": {
      "de": "geschworen",
      "lv": "Przysięgły"
    }
  },
  {
    "infinitiv": {
      "de": "sehen",
      "lv": "Zobaczyć"
    },
    "praesens": {
      "de": "er sieht",
      "lv": "Widzi"
    },
    "imperfektIndikativ": {
      "de": "er sah",
      "lv": "Widział"
    },
    "imperfektKonjunktiv": {
      "de": "er sähe",
      "lv": "Zobaczyłby"
    },
    "partizipVergangenheit": {
      "de": "gesehen",
      "lv": "Widziany"
    }
  },
  {
    "infinitiv": {
      "de": "sein",
      "lv": "Być"
    },
    "praesens": {
      "de": "er ist",
      "lv": "On jest"
    },
    "imperfektIndikativ": {
      "de": "war",
      "lv": "Był"
    },
    "imperfektKonjunktiv": {
      "de": "war",
      "lv": "Był"
    },
    "partizipVergangenheit": {
      "de": "gewesen",
      "lv": "Został"
    }
  },
  {
    "infinitiv": {
      "de": "senden",
      "lv": "Wysłać"
    },
    "praesens": {
      "de": "er sendet",
      "lv": "On wysyła"
    },
    "imperfektIndikativ": {
      "de": "er sandte / er sendete",
      "lv": "Wysłał"
    },
    "imperfektKonjunktiv": {
      "de": "er sendete",
      "lv": "Wysłałby"
    },
    "partizipVergangenheit": {
      "de": "gesandt / gesendet",
      "lv": "Wysłano"
    }
  },
  {
    "infinitiv": {
      "de": "sieden",
      "lv": "Gotować"
    },
    "praesens": {
      "de": "er siedet",
      "lv": "On gotuje"
    },
    "imperfektIndikativ": {
      "de": "sott vai siedete",
      "lv": "Gotowany"
    },
    "imperfektKonjunktiv": {
      "de": "sott vai siedete",
      "lv": "Gotowany"
    },
    "partizipVergangenheit": {
      "de": "gesotten vai gesiedet",
      "lv": "Gotowany"
    }
  },
  {
    "infinitiv": {
      "de": "singen",
      "lv": "Śpiewać"
    },
    "praesens": {
      "de": "er singt",
      "lv": "On śpiewa"
    },
    "imperfektIndikativ": {
      "de": "er sang",
      "lv": "Śpiewał"
    },
    "imperfektKonjunktiv": {
      "de": "er sänge",
      "lv": "Śpiewałby"
    },
    "partizipVergangenheit": {
      "de": "gesungen",
      "lv": "Zaśpiewany"
    }
  },
  {
    "infinitiv": {
      "de": "sinken",
      "lv": "Zatonąć"
    },
    "praesens": {
      "de": "er sinkt",
      "lv": "On tonie"
    },
    "imperfektIndikativ": {
      "de": "er sank",
      "lv": "Układał się"
    },
    "imperfektKonjunktiv": {
      "de": "er sänke",
      "lv": "Zatonąłby"
    },
    "partizipVergangenheit": {
      "de": "gesunken (er ist)",
      "lv": "Makijaż"
    }
  },
  {
    "infinitiv": {
      "de": "sinnen",
      "lv": "Zastanawiać się"
    },
    "praesens": {
      "de": "er sinnt",
      "lv": "– zastanawia się"
    },
    "imperfektIndikativ": {
      "de": "er sann",
      "lv": "– zastanawiał się"
    },
    "imperfektKonjunktiv": {
      "de": "er sönne / er sänne",
      "lv": "Zastanawiałby się"
    },
    "partizipVergangenheit": {
      "de": "gesonnen",
      "lv": "Myślący"
    }
  },
  {
    "infinitiv": {
      "de": "sitzen",
      "lv": "Siedzieć"
    },
    "praesens": {
      "de": "er sitzt",
      "lv": "On siedzi"
    },
    "imperfektIndikativ": {
      "de": "er sass",
      "lv": "Siedział"
    },
    "imperfektKonjunktiv": {
      "de": "er säße",
      "lv": "Siedziałby"
    },
    "partizipVergangenheit": {
      "de": "gesessen",
      "lv": "Usiadł"
    }
  },
  {
    "infinitiv": {
      "de": "sollen",
      "lv": "Potrzebuję/będę zobowiązany"
    },
    "praesens": {
      "de": "er soll",
      "lv": "Potrzebuje"
    },
    "imperfektIndikativ": {
      "de": "sollte",
      "lv": "Powinien mieć"
    },
    "imperfektKonjunktiv": {
      "de": "sollte",
      "lv": "Powinien mieć"
    },
    "partizipVergangenheit": {
      "de": "gesollt",
      "lv": "Wymagany"
    }
  },
  {
    "infinitiv": {
      "de": "speien",
      "lv": "Pluć"
    },
    "praesens": {
      "de": "er speit",
      "lv": "On pluje"
    },
    "imperfektIndikativ": {
      "de": "er spie",
      "lv": "Splunął"
    },
    "imperfektKonjunktiv": {
      "de": "er spie",
      "lv": "Splunąłby"
    },
    "partizipVergangenheit": {
      "de": "gespien",
      "lv": "Wypluł"
    }
  },
  {
    "infinitiv": {
      "de": "spinnen",
      "lv": "Kręcić się"
    },
    "praesens": {
      "de": "er spinnt",
      "lv": "On się przekręca"
    },
    "imperfektIndikativ": {
      "de": "er spann",
      "lv": "Obrócił się"
    },
    "imperfektKonjunktiv": {
      "de": "er spönne / er spänne",
      "lv": "Kręciłby się"
    },
    "partizipVergangenheit": {
      "de": "gesponnen",
      "lv": "Uprzedzony"
    }
  },
  {
    "infinitiv": {
      "de": "spleißen",
      "lv": "Połączyć"
    },
    "praesens": {
      "de": "er spleißt",
      "lv": "On łączy"
    },
    "imperfektIndikativ": {
      "de": "spliss",
      "lv": "Połączony"
    },
    "imperfektKonjunktiv": {
      "de": "spliss",
      "lv": "Połączony"
    },
    "partizipVergangenheit": {
      "de": "gesplissen",
      "lv": "Połączony"
    }
  },
  {
    "infinitiv": {
      "de": "sprechen",
      "lv": "Mówić"
    },
    "praesens": {
      "de": "er spricht",
      "lv": "On mówi"
    },
    "imperfektIndikativ": {
      "de": "er sprach",
      "lv": "Mówił"
    },
    "imperfektKonjunktiv": {
      "de": "er spräche",
      "lv": "By mówił"
    },
    "partizipVergangenheit": {
      "de": "gesprochen",
      "lv": "Mówiony"
    }
  },
  {
    "infinitiv": {
      "de": "sprießen",
      "lv": "Prosperować"
    },
    "praesens": {
      "de": "er sprießt",
      "lv": "On się rozwija"
    },
    "imperfektIndikativ": {
      "de": "er spross",
      "lv": "Prosperował"
    },
    "imperfektKonjunktiv": {
      "de": "er sprösse",
      "lv": "On półka"
    },
    "partizipVergangenheit": {
      "de": "gesprossen (er ist)",
      "lv": "Ramię"
    }
  },
  {
    "infinitiv": {
      "de": "springen",
      "lv": "Skakać"
    },
    "praesens": {
      "de": "er springt",
      "lv": "On skacze"
    },
    "imperfektIndikativ": {
      "de": "er sprang",
      "lv": "Skoczył"
    },
    "imperfektKonjunktiv": {
      "de": "er spränge",
      "lv": "Skoczyłby"
    },
    "partizipVergangenheit": {
      "de": "gesprungen (er ist)",
      "lv": "Obiektyw"
    }
  },
  {
    "infinitiv": {
      "de": "stechen",
      "lv": "Zasztyletować"
    },
    "praesens": {
      "de": "er sticht",
      "lv": "On dźga"
    },
    "imperfektIndikativ": {
      "de": "er stach",
      "lv": "Uderzył"
    },
    "imperfektKonjunktiv": {
      "de": "er stäche",
      "lv": "By dźgnął"
    },
    "partizipVergangenheit": {
      "de": "gestochen",
      "lv": "Dźgnięty"
    }
  },
  {
    "infinitiv": {
      "de": "stecken",
      "lv": "Wbijać się/wklejać"
    },
    "praesens": {
      "de": "er steckt",
      "lv": "On popycha"
    },
    "imperfektIndikativ": {
      "de": "stak vai steckte",
      "lv": "Nadziewany"
    },
    "imperfektKonjunktiv": {
      "de": "stak vai steckte",
      "lv": "Nadziewany"
    },
    "partizipVergangenheit": {
      "de": "gesteckt",
      "lv": "Nadziewany"
    }
  },
  {
    "infinitiv": {
      "de": "stehen",
      "lv": "Stać"
    },
    "praesens": {
      "de": "er steht",
      "lv": "On stoi"
    },
    "imperfektIndikativ": {
      "de": "er stand",
      "lv": "Stał"
    },
    "imperfektKonjunktiv": {
      "de": "er stände / er stünde",
      "lv": "Stałby"
    },
    "partizipVergangenheit": {
      "de": "gestanden",
      "lv": "Na stojąco"
    }
  },
  {
    "infinitiv": {
      "de": "stehlen",
      "lv": "Ukraść"
    },
    "praesens": {
      "de": "er stiehlt",
      "lv": "On kradnie"
    },
    "imperfektIndikativ": {
      "de": "er stahl",
      "lv": "Ukradł"
    },
    "imperfektKonjunktiv": {
      "de": "er stöhle / er stähle",
      "lv": "Ukradłby"
    },
    "partizipVergangenheit": {
      "de": "gestohlen",
      "lv": "Skradziony"
    }
  },
  {
    "infinitiv": {
      "de": "steigen",
      "lv": "Wspinać się"
    },
    "praesens": {
      "de": "er steigt",
      "lv": "Wspina się"
    },
    "imperfektIndikativ": {
      "de": "er stieg",
      "lv": "Wspiął się"
    },
    "imperfektKonjunktiv": {
      "de": "er stiege",
      "lv": "Wspinałby się"
    },
    "partizipVergangenheit": {
      "de": "gestiegen (er ist)",
      "lv": "Wspiął się"
    }
  },
  {
    "infinitiv": {
      "de": "sterben",
      "lv": "Umrzeć"
    },
    "praesens": {
      "de": "er stirbt",
      "lv": "On umiera"
    },
    "imperfektIndikativ": {
      "de": "er starb",
      "lv": "Umarł"
    },
    "imperfektKonjunktiv": {
      "de": "er stürbe",
      "lv": "Umarłby"
    },
    "partizipVergangenheit": {
      "de": "gestorben (er ist)",
      "lv": "Martwy"
    }
  },
  {
    "infinitiv": {
      "de": "stieben",
      "lv": "Piana / wir"
    },
    "praesens": {
      "de": "es stiebt",
      "lv": "Wieje"
    },
    "imperfektIndikativ": {
      "de": "stob vai stiebte",
      "lv": "Spieniony"
    },
    "imperfektKonjunktiv": {
      "de": "stob vai stiebte",
      "lv": "Spieniony"
    },
    "partizipVergangenheit": {
      "de": "gestoben vai gestiebt",
      "lv": "Rozpieszczony"
    }
  },
  {
    "infinitiv": {
      "de": "stinken",
      "lv": "Pachnieć"
    },
    "praesens": {
      "de": "es stinkt",
      "lv": "To śmierdzi"
    },
    "imperfektIndikativ": {
      "de": "stank",
      "lv": "Pachniało"
    },
    "imperfektKonjunktiv": {
      "de": "stank",
      "lv": "Pachniało"
    },
    "partizipVergangenheit": {
      "de": "gestunken",
      "lv": "Śmierdzący"
    }
  },
  {
    "infinitiv": {
      "de": "stoßen",
      "lv": "Naciskać"
    },
    "praesens": {
      "de": "er stößt",
      "lv": "On popycha"
    },
    "imperfektIndikativ": {
      "de": "er stieß",
      "lv": "Pchnął"
    },
    "imperfektKonjunktiv": {
      "de": "er stieße",
      "lv": "On naciskał"
    },
    "partizipVergangenheit": {
      "de": "gestoßen",
      "lv": "Pchnięty"
    }
  },
  {
    "infinitiv": {
      "de": "streichen",
      "lv": "Farba/pasek"
    },
    "praesens": {
      "de": "er streicht",
      "lv": "Maluje / paski"
    },
    "imperfektIndikativ": {
      "de": "er strich",
      "lv": "Malował/paski"
    },
    "imperfektKonjunktiv": {
      "de": "er striche",
      "lv": "Malował/rozbierał"
    },
    "partizipVergangenheit": {
      "de": "gestrichen",
      "lv": "Malowane / w paski"
    }
  },
  {
    "infinitiv": {
      "de": "streiten",
      "lv": "Walczyć"
    },
    "praesens": {
      "de": "er streitet",
      "lv": "On walczy"
    },
    "imperfektIndikativ": {
      "de": "er stritt",
      "lv": "Walczył"
    },
    "imperfektKonjunktiv": {
      "de": "er stritte",
      "lv": "Walczyłby"
    },
    "partizipVergangenheit": {
      "de": "gestritten",
      "lv": "Walczył"
    }
  },
  {
    "infinitiv": {
      "de": "tragen",
      "lv": "Nosić"
    },
    "praesens": {
      "de": "er trägt",
      "lv": "On niesie"
    },
    "imperfektIndikativ": {
      "de": "er trug",
      "lv": "Niósł"
    },
    "imperfektKonjunktiv": {
      "de": "er trüge",
      "lv": "Niósłby"
    },
    "partizipVergangenheit": {
      "de": "getragen",
      "lv": "Przewieziony"
    }
  },
  {
    "infinitiv": {
      "de": "treffen",
      "lv": "Spotkać"
    },
    "praesens": {
      "de": "er trifft",
      "lv": "Spotyka"
    },
    "imperfektIndikativ": {
      "de": "er traf",
      "lv": "Spotkał"
    },
    "imperfektKonjunktiv": {
      "de": "er träfe",
      "lv": "Spotkałby"
    },
    "partizipVergangenheit": {
      "de": "getroffen",
      "lv": "Napotkane"
    }
  },
  {
    "infinitiv": {
      "de": "treiben",
      "lv": "Pościg"
    },
    "praesens": {
      "de": "er treibt",
      "lv": "On jeździ"
    },
    "imperfektIndikativ": {
      "de": "er trieb",
      "lv": "Jechał"
    },
    "imperfektKonjunktiv": {
      "de": "er triebe",
      "lv": "Jeździłby"
    },
    "partizipVergangenheit": {
      "de": "getrieben",
      "lv": "Goniony"
    }
  },
  {
    "infinitiv": {
      "de": "treten",
      "lv": "Wejdź / idź"
    },
    "praesens": {
      "de": "er tritt",
      "lv": "On wchodzi/idzie"
    },
    "imperfektIndikativ": {
      "de": "er trat",
      "lv": "Stał/chodził"
    },
    "imperfektKonjunktiv": {
      "de": "er träte",
      "lv": "Stałby / poszedł"
    },
    "partizipVergangenheit": {
      "de": "getreten (er ist)",
      "lv": "Stał/chodził"
    }
  },
  {
    "infinitiv": {
      "de": "trinken",
      "lv": "Pić"
    },
    "praesens": {
      "de": "er trinkt",
      "lv": "On pije"
    },
    "imperfektIndikativ": {
      "de": "er trank",
      "lv": "Pił"
    },
    "imperfektKonjunktiv": {
      "de": "er tränke",
      "lv": "Piłby"
    },
    "partizipVergangenheit": {
      "de": "getrunken",
      "lv": "Pijany"
    }
  },
  {
    "infinitiv": {
      "de": "trügen",
      "lv": "Oszukiwać"
    },
    "praesens": {
      "de": "er trögt",
      "lv": "On oszukuje"
    },
    "imperfektIndikativ": {
      "de": "er trog",
      "lv": "Oszukał"
    },
    "imperfektKonjunktiv": {
      "de": "er tröge",
      "lv": "Oszukałby"
    },
    "partizipVergangenheit": {
      "de": "getrogen",
      "lv": "Oszukany"
    }
  },
  {
    "infinitiv": {
      "de": "tun",
      "lv": "Zrobić"
    },
    "praesens": {
      "de": "er tut",
      "lv": "On to robi"
    },
    "imperfektIndikativ": {
      "de": "er tat",
      "lv": "Zrobił"
    },
    "imperfektKonjunktiv": {
      "de": "er täte",
      "lv": "By to zrobił"
    },
    "partizipVergangenheit": {
      "de": "getan",
      "lv": "Zrobione"
    }
  },
  {
    "infinitiv": {
      "de": "verderben",
      "lv": "Uszkodzić"
    },
    "praesens": {
      "de": "er verdirbt",
      "lv": "On niszczy"
    },
    "imperfektIndikativ": {
      "de": "er verdarb",
      "lv": "Uszkodził"
    },
    "imperfektKonjunktiv": {
      "de": "er verdürbe",
      "lv": "By uszkodził"
    },
    "partizipVergangenheit": {
      "de": "verdorben",
      "lv": "Uszkodzony"
    }
  },
  {
    "infinitiv": {
      "de": "verdrießen",
      "lv": "Powodować irytację"
    },
    "praesens": {
      "de": "er verdrießt",
      "lv": "Powoduje irytację"
    },
    "imperfektIndikativ": {
      "de": "er verdross",
      "lv": "Wywołał irytację"
    },
    "imperfektKonjunktiv": {
      "de": "er verdrösse",
      "lv": "Wywołałby irytację"
    },
    "partizipVergangenheit": {
      "de": "verdrossen",
      "lv": "Zdenerwowany"
    }
  },
  {
    "infinitiv": {
      "de": "vergessen",
      "lv": "Zapominać"
    },
    "praesens": {
      "de": "er vergisst",
      "lv": "Zapomina"
    },
    "imperfektIndikativ": {
      "de": "er vergass",
      "lv": "Zapomniał"
    },
    "imperfektKonjunktiv": {
      "de": "er vergäße",
      "lv": "Zapomniałby"
    },
    "partizipVergangenheit": {
      "de": "vergessen",
      "lv": "Zapomniany"
    }
  },
  {
    "infinitiv": {
      "de": "verlieren",
      "lv": "Stracić"
    },
    "praesens": {
      "de": "er verliert",
      "lv": "On przegrywa"
    },
    "imperfektIndikativ": {
      "de": "er verlor",
      "lv": "Przegrał"
    },
    "imperfektKonjunktiv": {
      "de": "er verlöre",
      "lv": "Przegrałby"
    },
    "partizipVergangenheit": {
      "de": "verloren",
      "lv": "Zaginiony"
    }
  },
  {
    "infinitiv": {
      "de": "wachsen",
      "lv": "Rosnąć"
    },
    "praesens": {
      "de": "er wächst",
      "lv": "On rośnie"
    },
    "imperfektIndikativ": {
      "de": "er wuchs",
      "lv": "Dorastał"
    },
    "imperfektKonjunktiv": {
      "de": "er wüchse",
      "lv": "Urósłby"
    },
    "partizipVergangenheit": {
      "de": "gewachsen (er ist)",
      "lv": "Dorósł"
    }
  },
  {
    "infinitiv": {
      "de": "waschen",
      "lv": "Umyć"
    },
    "praesens": {
      "de": "er wäscht",
      "lv": "Myje"
    },
    "imperfektIndikativ": {
      "de": "er wusch",
      "lv": "Umył się"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsche",
      "lv": "By się umył"
    },
    "partizipVergangenheit": {
      "de": "gewaschen",
      "lv": "Umyty"
    }
  },
  {
    "infinitiv": {
      "de": "weben",
      "lv": "Splot"
    },
    "praesens": {
      "de": "er webt",
      "lv": "On tka"
    },
    "imperfektIndikativ": {
      "de": "wob",
      "lv": "Tkanka"
    },
    "imperfektKonjunktiv": {
      "de": "wob",
      "lv": "Tkanka"
    },
    "partizipVergangenheit": {
      "de": "gewoben",
      "lv": "Tkane"
    }
  },
  {
    "infinitiv": {
      "de": "weichen",
      "lv": "Wycofać się"
    },
    "praesens": {
      "de": "er weicht",
      "lv": "On się wycofuje"
    },
    "imperfektIndikativ": {
      "de": "er wich",
      "lv": "Cofnął się"
    },
    "imperfektKonjunktiv": {
      "de": "er wiche",
      "lv": "Wycofałby się"
    },
    "partizipVergangenheit": {
      "de": "gewichen (er ist)",
      "lv": "Cofnąć się"
    }
  },
  {
    "infinitiv": {
      "de": "weisen",
      "lv": "Pokazywać"
    },
    "praesens": {
      "de": "er weist",
      "lv": "On pokazuje"
    },
    "imperfektIndikativ": {
      "de": "er wies",
      "lv": "Pokazał"
    },
    "imperfektKonjunktiv": {
      "de": "er wiese",
      "lv": "Pokazałby"
    },
    "partizipVergangenheit": {
      "de": "gewiesen",
      "lv": "Pokazano"
    }
  },
  {
    "infinitiv": {
      "de": "wenden",
      "lv": "Modyfikować / przycinać"
    },
    "praesens": {
      "de": "er wendet",
      "lv": "On się kręci/kręci"
    },
    "imperfektIndikativ": {
      "de": "er wandte / es wendete",
      "lv": "Przekręcił się/obrócił"
    },
    "imperfektKonjunktiv": {
      "de": "er wendete",
      "lv": "On by zmienił/odwrócił"
    },
    "partizipVergangenheit": {
      "de": "gewandt / gewendet",
      "lv": "Zmienione/odwrócone"
    }
  },
  {
    "infinitiv": {
      "de": "werben",
      "lv": "Zaproponować"
    },
    "praesens": {
      "de": "er wirbt",
      "lv": "Proponuje"
    },
    "imperfektIndikativ": {
      "de": "er warb",
      "lv": "Zaproponował"
    },
    "imperfektKonjunktiv": {
      "de": "er würbe",
      "lv": "Zaproponowałby"
    },
    "partizipVergangenheit": {
      "de": "geworben",
      "lv": "Zaproponował"
    }
  },
  {
    "infinitiv": {
      "de": "werden",
      "lv": "Stać się"
    },
    "praesens": {
      "de": "er wird",
      "lv": "Staje się"
    },
    "imperfektIndikativ": {
      "de": "wurde",
      "lv": "Stał się"
    },
    "imperfektKonjunktiv": {
      "de": "wurde",
      "lv": "Stał się"
    },
    "partizipVergangenheit": {
      "de": "geworden",
      "lv": "Stało się"
    }
  },
  {
    "infinitiv": {
      "de": "werfen",
      "lv": "Rzucić"
    },
    "praesens": {
      "de": "er wirft",
      "lv": "Rzuca"
    },
    "imperfektIndikativ": {
      "de": "er warf",
      "lv": "Rzucił"
    },
    "imperfektKonjunktiv": {
      "de": "er würfe",
      "lv": "Rzucił"
    },
    "partizipVergangenheit": {
      "de": "geworfen",
      "lv": "Rzucony"
    }
  },
  {
    "infinitiv": {
      "de": "wiegen",
      "lv": "Ważyć"
    },
    "praesens": {
      "de": "er wiegt",
      "lv": "On waży"
    },
    "imperfektIndikativ": {
      "de": "er wog",
      "lv": "Ważył"
    },
    "imperfektKonjunktiv": {
      "de": "er wöge",
      "lv": "Ważyłby"
    },
    "partizipVergangenheit": {
      "de": "gewogen",
      "lv": "Ważony"
    }
  },
  {
    "infinitiv": {
      "de": "winden",
      "lv": "Warkocz"
    },
    "praesens": {
      "de": "er windet",
      "lv": "On przypina"
    },
    "imperfektIndikativ": {
      "de": "er wand",
      "lv": "On zaplata warkocze"
    },
    "imperfektKonjunktiv": {
      "de": "er wände",
      "lv": "Zaplatałby warkocz"
    },
    "partizipVergangenheit": {
      "de": "gewunden",
      "lv": "Spleciony"
    }
  },
  {
    "infinitiv": {
      "de": "wissen",
      "lv": "Wiedzieć"
    },
    "praesens": {
      "de": "er weiß",
      "lv": "On wie"
    },
    "imperfektIndikativ": {
      "de": "er wusste",
      "lv": "Wiedział"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsste",
      "lv": "Wiedziałby"
    },
    "partizipVergangenheit": {
      "de": "gewusst",
      "lv": "Znany"
    }
  },
  {
    "infinitiv": {
      "de": "wollen",
      "lv": "Chcę"
    },
    "praesens": {
      "de": "er will",
      "lv": "On chce"
    },
    "imperfektIndikativ": {
      "de": "wollte",
      "lv": "Chciałem"
    },
    "imperfektKonjunktiv": {
      "de": "wollte",
      "lv": "Chciałem"
    },
    "partizipVergangenheit": {
      "de": "gewollt",
      "lv": "Chciałem"
    }
  },
  {
    "infinitiv": {
      "de": "wringen",
      "lv": "Wyciąć/wycisnąć"
    },
    "praesens": {
      "de": "er wringt",
      "lv": "On wycina"
    },
    "imperfektIndikativ": {
      "de": "wrang",
      "lv": "Wyciąć"
    },
    "imperfektKonjunktiv": {
      "de": "wrang",
      "lv": "Wyciąć"
    },
    "partizipVergangenheit": {
      "de": "gewrungen",
      "lv": "Wyciąć"
    }
  },
  {
    "infinitiv": {
      "de": "zeihen",
      "lv": "Winić"
    },
    "praesens": {
      "de": "er zeiht",
      "lv": "On obwinia"
    },
    "imperfektIndikativ": {
      "de": "zieh",
      "lv": "Obwiniony"
    },
    "imperfektKonjunktiv": {
      "de": "zieh",
      "lv": "Obwiniony"
    },
    "partizipVergangenheit": {
      "de": "geziehen",
      "lv": "Obwiniony"
    }
  },
  {
    "infinitiv": {
      "de": "ziehen",
      "lv": "Ciągnąć"
    },
    "praesens": {
      "de": "er zieht",
      "lv": "On ciągnie"
    },
    "imperfektIndikativ": {
      "de": "er zog",
      "lv": "Pociągnął"
    },
    "imperfektKonjunktiv": {
      "de": "er zöge",
      "lv": "Ciągnąłby"
    },
    "partizipVergangenheit": {
      "de": "gezogen",
      "lv": "Przeciągnięty"
    }
  },
  {
    "infinitiv": {
      "de": "zwingen",
      "lv": "Zmuszać"
    },
    "praesens": {
      "de": "er zwingt",
      "lv": "On zmusza"
    },
    "imperfektIndikativ": {
      "de": "er zwang",
      "lv": "– zmusił"
    },
    "imperfektKonjunktiv": {
      "de": "er zwänge",
      "lv": "By zmusił"
    },
    "partizipVergangenheit": {
      "de": "gezwungen",
      "lv": "Wymuszony"
    }
  },
  {
    "infinitiv": {
      "de": "empfangen",
      "lv": "Otrzymać"
    },
    "praesens": {
      "de": "er empfängt",
      "lv": "Otrzymuje"
    },
    "imperfektIndikativ": {
      "de": "er empfing",
      "lv": "Otrzymał"
    },
    "imperfektKonjunktiv": {
      "de": "er empfinge",
      "lv": "Otrzymałby"
    },
    "partizipVergangenheit": {
      "de": "empfangen",
      "lv": "Otrzymane"
    }
  },
  {
    "infinitiv": {
      "de": "erwägen",
      "lv": "Rozważyć"
    },
    "praesens": {
      "de": "er erwägt",
      "lv": "Uważa"
    },
    "imperfektIndikativ": {
      "de": "er erwog",
      "lv": "Zastanowił się"
    },
    "imperfektKonjunktiv": {
      "de": "er erwöge",
      "lv": "Zastanowiłby się"
    },
    "partizipVergangenheit": {
      "de": "erwogen",
      "lv": "Uważany za"
    }
  },
  {
    "infinitiv": {
      "de": "fechten",
      "lv": "Walczyć"
    },
    "praesens": {
      "de": "er ficht",
      "lv": "On walczy"
    },
    "imperfektIndikativ": {
      "de": "er focht",
      "lv": "Walczył"
    },
    "imperfektKonjunktiv": {
      "de": "er föchte",
      "lv": "Walczyłby"
    },
    "partizipVergangenheit": {
      "de": "gefochten",
      "lv": "Walczył"
    }
  },
  {
    "infinitiv": {
      "de": "flechten",
      "lv": "Warkocz"
    },
    "praesens": {
      "de": "er flicht",
      "lv": "On przypina"
    },
    "imperfektIndikativ": {
      "de": "er flocht",
      "lv": "On zaplata warkocze"
    },
    "imperfektKonjunktiv": {
      "de": "er flöchte",
      "lv": "Zaplatałby warkocz"
    },
    "partizipVergangenheit": {
      "de": "geflochten",
      "lv": "Spleciony"
    }
  },
  {
    "infinitiv": {
      "de": "hangen",
      "lv": "Powiesić"
    },
    "praesens": {
      "de": "er hängt",
      "lv": "Wisi"
    },
    "imperfektIndikativ": {
      "de": "er hing",
      "lv": "Powiesił się"
    },
    "imperfektKonjunktiv": {
      "de": "er hinge",
      "lv": "Powiesiłby się"
    },
    "partizipVergangenheit": {
      "de": "gehangen",
      "lv": "Wytrzymać"
    }
  },
  {
    "infinitiv": {
      "de": "spalten",
      "lv": "Podzielić"
    },
    "praesens": {
      "de": "er spaltet",
      "lv": "On dzieli"
    },
    "imperfektIndikativ": {
      "de": "er spaltete",
      "lv": "Rozstał się"
    },
    "imperfektKonjunktiv": {
      "de": "er spaltete",
      "lv": "By się podzielił"
    },
    "partizipVergangenheit": {
      "de": "gespalten",
      "lv": "Podział"
    }
  },
  {
    "infinitiv": {
      "de": "verzeihen",
      "lv": "Wybaczyć"
    },
    "praesens": {
      "de": "er verzeiht",
      "lv": "On przebacza"
    },
    "imperfektIndikativ": {
      "de": "er verzieh",
      "lv": "Przebaczył"
    },
    "imperfektKonjunktiv": {
      "de": "er verziehe",
      "lv": "Przebaczyłby"
    },
    "partizipVergangenheit": {
      "de": "verziehen",
      "lv": "Wybaczony"
    }
  }
];

window.VERB_ENTRIES = VERB_ENTRIES;

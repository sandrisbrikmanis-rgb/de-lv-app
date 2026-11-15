const VERB_ENTRIES = [
  {
    "infinitiv": {
      "de": "backen",
      "lv": "bakken"
    },
    "praesens": {
      "de": "er bäckt",
      "lv": "hij bakt"
    },
    "imperfektIndikativ": {
      "de": "er buk",
      "lv": "hij bakte"
    },
    "imperfektKonjunktiv": {
      "de": "er büke",
      "lv": "hij zou bakken"
    },
    "partizipVergangenheit": {
      "de": "gebacken",
      "lv": "gebakken"
    }
  },
  {
    "infinitiv": {
      "de": "befehlen",
      "lv": "bevelen"
    },
    "praesens": {
      "de": "er befiehlt",
      "lv": "hij beveelt"
    },
    "imperfektIndikativ": {
      "de": "er befahl",
      "lv": "hij beval"
    },
    "imperfektKonjunktiv": {
      "de": "er beföhle",
      "lv": "hij zou bevelen"
    },
    "partizipVergangenheit": {
      "de": "befohlen",
      "lv": "bevolen"
    }
  },
  {
    "infinitiv": {
      "de": "beginnen",
      "lv": "beginnen"
    },
    "praesens": {
      "de": "er beginnt",
      "lv": "hij begint"
    },
    "imperfektIndikativ": {
      "de": "er begann",
      "lv": "hij begon"
    },
    "imperfektKonjunktiv": {
      "de": "er begönne / er begänne",
      "lv": "hij zou beginnen"
    },
    "partizipVergangenheit": {
      "de": "begonnen",
      "lv": "begonnen"
    }
  },
  {
    "infinitiv": {
      "de": "beißen",
      "lv": "bijten"
    },
    "praesens": {
      "de": "er beißt",
      "lv": "hij bijt"
    },
    "imperfektIndikativ": {
      "de": "er biss",
      "lv": "hij beet"
    },
    "imperfektKonjunktiv": {
      "de": "er bisse",
      "lv": "hij zou bijten"
    },
    "partizipVergangenheit": {
      "de": "gebissen",
      "lv": "gebeten"
    }
  },
  {
    "infinitiv": {
      "de": "bergen",
      "lv": "redden / verbergen"
    },
    "praesens": {
      "de": "er birgt",
      "lv": "hij redt / verbergt"
    },
    "imperfektIndikativ": {
      "de": "er barg",
      "lv": "hij redde / verborg"
    },
    "imperfektKonjunktiv": {
      "de": "er bürge / er bärge",
      "lv": "hij zou redden / verbergen"
    },
    "partizipVergangenheit": {
      "de": "geborgen",
      "lv": "gered / verborgen"
    }
  },
  {
    "infinitiv": {
      "de": "bersten",
      "lv": "barsten"
    },
    "praesens": {
      "de": "er birst",
      "lv": "het barst"
    },
    "imperfektIndikativ": {
      "de": "er barst / er borst",
      "lv": "het barstte"
    },
    "imperfektKonjunktiv": {
      "de": "er bärste / er börste",
      "lv": "het zou barsten"
    },
    "partizipVergangenheit": {
      "de": "geborsten (er ist)",
      "lv": "gebarsten"
    }
  },
  {
    "infinitiv": {
      "de": "bewegen",
      "lv": "bewegen"
    },
    "praesens": {
      "de": "er bewegt",
      "lv": "hij beweegt"
    },
    "imperfektIndikativ": {
      "de": "er bewog",
      "lv": "hij bewoog"
    },
    "imperfektKonjunktiv": {
      "de": "er bewöge",
      "lv": "hij zou bewegen"
    },
    "partizipVergangenheit": {
      "de": "bewogen",
      "lv": "bewogen"
    }
  },
  {
    "infinitiv": {
      "de": "biegen",
      "lv": "buigen"
    },
    "praesens": {
      "de": "er biegt",
      "lv": "hij buigt"
    },
    "imperfektIndikativ": {
      "de": "er bog",
      "lv": "hij boog"
    },
    "imperfektKonjunktiv": {
      "de": "er böge",
      "lv": "hij zou buigen"
    },
    "partizipVergangenheit": {
      "de": "gebogen",
      "lv": "gebogen"
    }
  },
  {
    "infinitiv": {
      "de": "bieten",
      "lv": "bieden"
    },
    "praesens": {
      "de": "er bietet",
      "lv": "hij biedt"
    },
    "imperfektIndikativ": {
      "de": "er bot",
      "lv": "hij bood"
    },
    "imperfektKonjunktiv": {
      "de": "er böte",
      "lv": "hij zou bieden"
    },
    "partizipVergangenheit": {
      "de": "geboten",
      "lv": "geboden"
    }
  },
  {
    "infinitiv": {
      "de": "binden",
      "lv": "binden"
    },
    "praesens": {
      "de": "er bindet",
      "lv": "hij bindt"
    },
    "imperfektIndikativ": {
      "de": "er band",
      "lv": "hij bond"
    },
    "imperfektKonjunktiv": {
      "de": "er bände",
      "lv": "hij zou binden"
    },
    "partizipVergangenheit": {
      "de": "gebunden",
      "lv": "gebonden"
    }
  },
  {
    "infinitiv": {
      "de": "bitten",
      "lv": "vragen"
    },
    "praesens": {
      "de": "er bittet",
      "lv": "hij vraagt"
    },
    "imperfektIndikativ": {
      "de": "er bat",
      "lv": "hij vroeg"
    },
    "imperfektKonjunktiv": {
      "de": "er bäte",
      "lv": "hij zou vragen"
    },
    "partizipVergangenheit": {
      "de": "gebeten",
      "lv": "gevraagd"
    }
  },
  {
    "infinitiv": {
      "de": "blasen",
      "lv": "blazen"
    },
    "praesens": {
      "de": "er bläst",
      "lv": "hij blaast"
    },
    "imperfektIndikativ": {
      "de": "er blies",
      "lv": "hij blies"
    },
    "imperfektKonjunktiv": {
      "de": "er bliese",
      "lv": "hij zou blazen"
    },
    "partizipVergangenheit": {
      "de": "geblasen",
      "lv": "geblazen"
    }
  },
  {
    "infinitiv": {
      "de": "gären",
      "lv": "gisten"
    },
    "praesens": {
      "de": "es gärt",
      "lv": "het gist"
    },
    "imperfektIndikativ": {
      "de": "es gor / es gärte",
      "lv": "het gistte"
    },
    "imperfektKonjunktiv": {
      "de": "es göre / es gärte",
      "lv": "het zou gisten"
    },
    "partizipVergangenheit": {
      "de": "gegoren / gegärt",
      "lv": "gegist"
    }
  },
  {
    "infinitiv": {
      "de": "gebären",
      "lv": "baren"
    },
    "praesens": {
      "de": "sie gebiert",
      "lv": "zij baart"
    },
    "imperfektIndikativ": {
      "de": "sie gebar",
      "lv": "zij baarde"
    },
    "imperfektKonjunktiv": {
      "de": "sie gebäre",
      "lv": "zij zou baren"
    },
    "partizipVergangenheit": {
      "de": "geboren",
      "lv": "gebaard"
    }
  },
  {
    "infinitiv": {
      "de": "gelingen",
      "lv": "lukken"
    },
    "praesens": {
      "de": "es gelingt",
      "lv": "het lukt"
    },
    "imperfektIndikativ": {
      "de": "es gelang",
      "lv": "het lukte"
    },
    "imperfektKonjunktiv": {
      "de": "es gelänge",
      "lv": "het zou lukken"
    },
    "partizipVergangenheit": {
      "de": "gelungen (es ist)",
      "lv": "gelukt"
    }
  },
  {
    "infinitiv": {
      "de": "gelten",
      "lv": "gelden"
    },
    "praesens": {
      "de": "er gilt",
      "lv": "hij geldt"
    },
    "imperfektIndikativ": {
      "de": "er galt",
      "lv": "hij gold"
    },
    "imperfektKonjunktiv": {
      "de": "er gölte / es gälte",
      "lv": "hij zou gelden"
    },
    "partizipVergangenheit": {
      "de": "gegolten",
      "lv": "gegolden"
    }
  },
  {
    "infinitiv": {
      "de": "genesen",
      "lv": "genezen"
    },
    "praesens": {
      "de": "er genest",
      "lv": "hij geneest"
    },
    "imperfektIndikativ": {
      "de": "er genas",
      "lv": "hij genas"
    },
    "imperfektKonjunktiv": {
      "de": "er genäse",
      "lv": "hij zou genezen"
    },
    "partizipVergangenheit": {
      "de": "genesen (er ist)",
      "lv": "genezen"
    }
  },
  {
    "infinitiv": {
      "de": "genießen",
      "lv": "genieten"
    },
    "praesens": {
      "de": "er genießt",
      "lv": "hij geniet"
    },
    "imperfektIndikativ": {
      "de": "er genoss",
      "lv": "hij genoot"
    },
    "imperfektKonjunktiv": {
      "de": "er genösse",
      "lv": "hij zou genieten"
    },
    "partizipVergangenheit": {
      "de": "genossen",
      "lv": "genoten"
    }
  },
  {
    "infinitiv": {
      "de": "geschehen",
      "lv": "gebeuren"
    },
    "praesens": {
      "de": "es geschieht",
      "lv": "het gebeurt"
    },
    "imperfektIndikativ": {
      "de": "es geschah",
      "lv": "het gebeurde"
    },
    "imperfektKonjunktiv": {
      "de": "es geschähe",
      "lv": "het zou gebeuren"
    },
    "partizipVergangenheit": {
      "de": "geschehen (es ist)",
      "lv": "gebeurd"
    }
  },
  {
    "infinitiv": {
      "de": "gießen",
      "lv": "gieten"
    },
    "praesens": {
      "de": "er gießt",
      "lv": "hij giet"
    },
    "imperfektIndikativ": {
      "de": "er goss",
      "lv": "hij goot"
    },
    "imperfektKonjunktiv": {
      "de": "er gösse",
      "lv": "hij zou gieten"
    },
    "partizipVergangenheit": {
      "de": "gegossen",
      "lv": "gegoten"
    }
  },
  {
    "infinitiv": {
      "de": "gleichen",
      "lv": "lijken op"
    },
    "praesens": {
      "de": "er gleicht",
      "lv": "hij lijkt op"
    },
    "imperfektIndikativ": {
      "de": "er glich",
      "lv": "hij leek op"
    },
    "imperfektKonjunktiv": {
      "de": "er gliche",
      "lv": "hij zou lijken op"
    },
    "partizipVergangenheit": {
      "de": "geglichen",
      "lv": "geleken op"
    }
  },
  {
    "infinitiv": {
      "de": "gleiten",
      "lv": "glijden"
    },
    "praesens": {
      "de": "er gleitet",
      "lv": "hij glijdt"
    },
    "imperfektIndikativ": {
      "de": "er glitt",
      "lv": "hij gleed"
    },
    "imperfektKonjunktiv": {
      "de": "er glitte",
      "lv": "hij zou glijden"
    },
    "partizipVergangenheit": {
      "de": "geglitten (er ist)",
      "lv": "gegleden"
    }
  },
  {
    "infinitiv": {
      "de": "glimmen",
      "lv": "gloeien"
    },
    "praesens": {
      "de": "er glimmt",
      "lv": "het gloeit"
    },
    "imperfektIndikativ": {
      "de": "er glimmte / glomm",
      "lv": "het gloeide"
    },
    "imperfektKonjunktiv": {
      "de": "er glimmte",
      "lv": "het zou gloeien"
    },
    "partizipVergangenheit": {
      "de": "geglimmt / geglommen",
      "lv": "gegloeid"
    }
  },
  {
    "infinitiv": {
      "de": "graben",
      "lv": "graven"
    },
    "praesens": {
      "de": "er gräbt",
      "lv": "hij graaft"
    },
    "imperfektIndikativ": {
      "de": "er grub",
      "lv": "hij groef"
    },
    "imperfektKonjunktiv": {
      "de": "er grübe",
      "lv": "hij zou graven"
    },
    "partizipVergangenheit": {
      "de": "gegraben",
      "lv": "gegraven"
    }
  },
  {
    "infinitiv": {
      "de": "greifen",
      "lv": "grijpen"
    },
    "praesens": {
      "de": "er greift",
      "lv": "hij grijpt"
    },
    "imperfektIndikativ": {
      "de": "er griff",
      "lv": "hij greep"
    },
    "imperfektKonjunktiv": {
      "de": "er griffe",
      "lv": "hij zou grijpen"
    },
    "partizipVergangenheit": {
      "de": "gegriffen",
      "lv": "gegrepen"
    }
  },
  {
    "infinitiv": {
      "de": "hauen",
      "lv": "hakken"
    },
    "praesens": {
      "de": "er haut",
      "lv": "hij hakt"
    },
    "imperfektIndikativ": {
      "de": "er hieb",
      "lv": "hij hakte"
    },
    "imperfektKonjunktiv": {
      "de": "er hiebe",
      "lv": "hij zou hakken"
    },
    "partizipVergangenheit": {
      "de": "gehauen",
      "lv": "gehakt"
    }
  },
  {
    "infinitiv": {
      "de": "heben",
      "lv": "tillen"
    },
    "praesens": {
      "de": "er hebt",
      "lv": "hij tilt"
    },
    "imperfektIndikativ": {
      "de": "er hob",
      "lv": "hij tilde"
    },
    "imperfektKonjunktiv": {
      "de": "er höbe",
      "lv": "hij zou tillen"
    },
    "partizipVergangenheit": {
      "de": "gehoben",
      "lv": "getild"
    }
  },
  {
    "infinitiv": {
      "de": "kennen",
      "lv": "kennen / weten"
    },
    "praesens": {
      "de": "er kennt",
      "lv": "hij kent / weet"
    },
    "imperfektIndikativ": {
      "de": "kannte",
      "lv": "hij kende / wist"
    },
    "imperfektKonjunktiv": {
      "de": "kannte",
      "lv": "hij zou kennen / weten"
    },
    "partizipVergangenheit": {
      "de": "gekannt",
      "lv": "gekend / geweten"
    }
  },
  {
    "infinitiv": {
      "de": "klingen",
      "lv": "klinken"
    },
    "praesens": {
      "de": "er klingt",
      "lv": "het klinkt"
    },
    "imperfektIndikativ": {
      "de": "er klang",
      "lv": "het klonk"
    },
    "imperfektKonjunktiv": {
      "de": "er klänge",
      "lv": "het zou klinken"
    },
    "partizipVergangenheit": {
      "de": "geklungen",
      "lv": "geklonken"
    }
  },
  {
    "infinitiv": {
      "de": "kneifen",
      "lv": "knijpen"
    },
    "praesens": {
      "de": "er kneift",
      "lv": "hij knijpt"
    },
    "imperfektIndikativ": {
      "de": "er kniff",
      "lv": "hij kneep"
    },
    "imperfektKonjunktiv": {
      "de": "er kniffe",
      "lv": "hij zou knijpen"
    },
    "partizipVergangenheit": {
      "de": "gekniffen",
      "lv": "geknepen"
    }
  },
  {
    "infinitiv": {
      "de": "bleiben",
      "lv": "blijven"
    },
    "praesens": {
      "de": "er bleibt",
      "lv": "hij blijft"
    },
    "imperfektIndikativ": {
      "de": "er blieb",
      "lv": "hij bleef"
    },
    "imperfektKonjunktiv": {
      "de": "er bliebe",
      "lv": "hij zou blijven"
    },
    "partizipVergangenheit": {
      "de": "geblieben (er ist)",
      "lv": "gebleven"
    }
  },
  {
    "infinitiv": {
      "de": "bleichen",
      "lv": "verbleken"
    },
    "praesens": {
      "de": "er bleicht",
      "lv": "het verbleekt"
    },
    "imperfektIndikativ": {
      "de": "blich",
      "lv": "het verbleekte"
    },
    "imperfektKonjunktiv": {
      "de": "blich",
      "lv": "het zou verbleken"
    },
    "partizipVergangenheit": {
      "de": "geblichen",
      "lv": "verbleekt"
    }
  },
  {
    "infinitiv": {
      "de": "braten",
      "lv": "braden"
    },
    "praesens": {
      "de": "er brät",
      "lv": "hij braadt"
    },
    "imperfektIndikativ": {
      "de": "er briet",
      "lv": "hij braadde"
    },
    "imperfektKonjunktiv": {
      "de": "er briete",
      "lv": "hij zou braden"
    },
    "partizipVergangenheit": {
      "de": "gebraten",
      "lv": "gebraden"
    }
  },
  {
    "infinitiv": {
      "de": "brechen",
      "lv": "breken"
    },
    "praesens": {
      "de": "er bricht",
      "lv": "hij breekt"
    },
    "imperfektIndikativ": {
      "de": "er brach",
      "lv": "hij brak"
    },
    "imperfektKonjunktiv": {
      "de": "er bräche",
      "lv": "hij zou breken"
    },
    "partizipVergangenheit": {
      "de": "gebrochen",
      "lv": "gebroken"
    }
  },
  {
    "infinitiv": {
      "de": "brennen",
      "lv": "branden"
    },
    "praesens": {
      "de": "er brennt",
      "lv": "het brandt"
    },
    "imperfektIndikativ": {
      "de": "brannte",
      "lv": "het brandde"
    },
    "imperfektKonjunktiv": {
      "de": "brannte",
      "lv": "het zou branden"
    },
    "partizipVergangenheit": {
      "de": "gebrannt",
      "lv": "gebrand"
    }
  },
  {
    "infinitiv": {
      "de": "bringen",
      "lv": "brengen"
    },
    "praesens": {
      "de": "er bringt",
      "lv": "hij brengt"
    },
    "imperfektIndikativ": {
      "de": "er brachte",
      "lv": "hij bracht"
    },
    "imperfektKonjunktiv": {
      "de": "er brächte",
      "lv": "hij zou brengen"
    },
    "partizipVergangenheit": {
      "de": "gebracht",
      "lv": "gebracht"
    }
  },
  {
    "infinitiv": {
      "de": "denken",
      "lv": "denken"
    },
    "praesens": {
      "de": "er denkt",
      "lv": "hij denkt"
    },
    "imperfektIndikativ": {
      "de": "er dachte",
      "lv": "hij dacht"
    },
    "imperfektKonjunktiv": {
      "de": "er dächte",
      "lv": "hij zou denken"
    },
    "partizipVergangenheit": {
      "de": "gedacht",
      "lv": "gedacht"
    }
  },
  {
    "infinitiv": {
      "de": "dingen",
      "lv": "inhuren / overeenkomen"
    },
    "praesens": {
      "de": "er dingt",
      "lv": "hij huurt in / komt overeen"
    },
    "imperfektIndikativ": {
      "de": "dingte",
      "lv": "hij huurde in / kwam overeen"
    },
    "imperfektKonjunktiv": {
      "de": "dingte",
      "lv": "hij zou inhuren / overeenkomen"
    },
    "partizipVergangenheit": {
      "de": "gedungen",
      "lv": "ingehuurd / overeengekomen"
    }
  },
  {
    "infinitiv": {
      "de": "dreschen",
      "lv": "dorsen"
    },
    "praesens": {
      "de": "er drischt",
      "lv": "hij dorst"
    },
    "imperfektIndikativ": {
      "de": "er drasch / er drosch",
      "lv": "hij dorste"
    },
    "imperfektKonjunktiv": {
      "de": "er dräsche / er drösche",
      "lv": "hij zou dorsen"
    },
    "partizipVergangenheit": {
      "de": "gedroschen",
      "lv": "gedorst"
    }
  },
  {
    "infinitiv": {
      "de": "dringen",
      "lv": "binnendringen"
    },
    "praesens": {
      "de": "er dringt",
      "lv": "hij dringt binnen"
    },
    "imperfektIndikativ": {
      "de": "er drang",
      "lv": "hij drong binnen"
    },
    "imperfektKonjunktiv": {
      "de": "er dränge",
      "lv": "hij zou binnendringen"
    },
    "partizipVergangenheit": {
      "de": "gedrungen (er ist)",
      "lv": "binnengedrongen"
    }
  },
  {
    "infinitiv": {
      "de": "dünken",
      "lv": "lijken"
    },
    "praesens": {
      "de": "es dünkt",
      "lv": "het lijkt"
    },
    "imperfektIndikativ": {
      "de": "deuchte",
      "lv": "het leek"
    },
    "imperfektKonjunktiv": {
      "de": "deuchte",
      "lv": "het zou lijken"
    },
    "partizipVergangenheit": {
      "de": "gedünkt",
      "lv": "geleken"
    }
  },
  {
    "infinitiv": {
      "de": "dürfen",
      "lv": "mogen"
    },
    "praesens": {
      "de": "er darf",
      "lv": "hij mag"
    },
    "imperfektIndikativ": {
      "de": "durfte",
      "lv": "hij mocht"
    },
    "imperfektKonjunktiv": {
      "de": "durfte",
      "lv": "hij zou mogen"
    },
    "partizipVergangenheit": {
      "de": "gedurft",
      "lv": "gemogen"
    }
  },
  {
    "infinitiv": {
      "de": "empfehlen",
      "lv": "aanbevelen"
    },
    "praesens": {
      "de": "er empfiehlt",
      "lv": "hij beveelt aan"
    },
    "imperfektIndikativ": {
      "de": "er empfahl",
      "lv": "hij beval aan"
    },
    "imperfektKonjunktiv": {
      "de": "er empfähle / er empföhle",
      "lv": "hij zou aanbevelen"
    },
    "partizipVergangenheit": {
      "de": "empfohlen",
      "lv": "aanbevolen"
    }
  },
  {
    "infinitiv": {
      "de": "empfinden",
      "lv": "voelen"
    },
    "praesens": {
      "de": "er empfindet",
      "lv": "hij voelt"
    },
    "imperfektIndikativ": {
      "de": "er empfand",
      "lv": "hij voelde"
    },
    "imperfektKonjunktiv": {
      "de": "er empfände",
      "lv": "hij zou voelen"
    },
    "partizipVergangenheit": {
      "de": "empfunden",
      "lv": "gevoeld"
    }
  },
  {
    "infinitiv": {
      "de": "erlöschen",
      "lv": "uitgaan"
    },
    "praesens": {
      "de": "er erlischt",
      "lv": "het gaat uit"
    },
    "imperfektIndikativ": {
      "de": "er erlosch",
      "lv": "het ging uit"
    },
    "imperfektKonjunktiv": {
      "de": "er erlösche",
      "lv": "het zou uitgaan"
    },
    "partizipVergangenheit": {
      "de": "erloschen (er ist)",
      "lv": "uitgegaan"
    }
  },
  {
    "infinitiv": {
      "de": "erschrecken",
      "lv": "schrikken"
    },
    "praesens": {
      "de": "er erschrickt",
      "lv": "hij schrikt"
    },
    "imperfektIndikativ": {
      "de": "er erschrak",
      "lv": "hij schrok"
    },
    "imperfektKonjunktiv": {
      "de": "er erschräke",
      "lv": "hij zou schrikken"
    },
    "partizipVergangenheit": {
      "de": "erschrocken (er ist)",
      "lv": "geschrokken"
    }
  },
  {
    "infinitiv": {
      "de": "essen",
      "lv": "eten"
    },
    "praesens": {
      "de": "er isst",
      "lv": "hij eet"
    },
    "imperfektIndikativ": {
      "de": "er ass",
      "lv": "hij at"
    },
    "imperfektKonjunktiv": {
      "de": "er äße",
      "lv": "hij zou eten"
    },
    "partizipVergangenheit": {
      "de": "gegessen",
      "lv": "gegeten"
    }
  },
  {
    "infinitiv": {
      "de": "fahren",
      "lv": "rijden"
    },
    "praesens": {
      "de": "er fährt",
      "lv": "hij rijdt"
    },
    "imperfektIndikativ": {
      "de": "er fuhr",
      "lv": "hij reed"
    },
    "imperfektKonjunktiv": {
      "de": "er führe",
      "lv": "hij zou rijden"
    },
    "partizipVergangenheit": {
      "de": "gefahren (er ist)",
      "lv": "gereden"
    }
  },
  {
    "infinitiv": {
      "de": "fallen",
      "lv": "vallen"
    },
    "praesens": {
      "de": "er fällt",
      "lv": "hij valt"
    },
    "imperfektIndikativ": {
      "de": "er fiel",
      "lv": "hij viel"
    },
    "imperfektKonjunktiv": {
      "de": "er fiele",
      "lv": "hij zou vallen"
    },
    "partizipVergangenheit": {
      "de": "gefallen (er ist)",
      "lv": "gevallen"
    }
  },
  {
    "infinitiv": {
      "de": "fangen",
      "lv": "vangen"
    },
    "praesens": {
      "de": "er fängt",
      "lv": "hij vangt"
    },
    "imperfektIndikativ": {
      "de": "er fing",
      "lv": "hij ving"
    },
    "imperfektKonjunktiv": {
      "de": "er finge",
      "lv": "hij zou vangen"
    },
    "partizipVergangenheit": {
      "de": "gefangen",
      "lv": "gevangen"
    }
  },
  {
    "infinitiv": {
      "de": "finden",
      "lv": "vinden"
    },
    "praesens": {
      "de": "er findet",
      "lv": "hij vindt"
    },
    "imperfektIndikativ": {
      "de": "er fand",
      "lv": "hij vond"
    },
    "imperfektKonjunktiv": {
      "de": "er fände",
      "lv": "hij zou vinden"
    },
    "partizipVergangenheit": {
      "de": "gefunden",
      "lv": "gevonden"
    }
  },
  {
    "infinitiv": {
      "de": "fliegen",
      "lv": "vliegen"
    },
    "praesens": {
      "de": "er fliegt",
      "lv": "hij vliegt"
    },
    "imperfektIndikativ": {
      "de": "er flog",
      "lv": "hij vloog"
    },
    "imperfektKonjunktiv": {
      "de": "er flöge",
      "lv": "hij zou vliegen"
    },
    "partizipVergangenheit": {
      "de": "geflogen (er ist)",
      "lv": "gevlogen"
    }
  },
  {
    "infinitiv": {
      "de": "fliehen",
      "lv": "vluchten"
    },
    "praesens": {
      "de": "er flieht",
      "lv": "hij vlucht"
    },
    "imperfektIndikativ": {
      "de": "er floh",
      "lv": "hij vluchtte"
    },
    "imperfektKonjunktiv": {
      "de": "er flöhe",
      "lv": "hij zou vluchten"
    },
    "partizipVergangenheit": {
      "de": "geflohen (er ist)",
      "lv": "gevlucht"
    }
  },
  {
    "infinitiv": {
      "de": "fließen",
      "lv": "stromen"
    },
    "praesens": {
      "de": "er fließt",
      "lv": "het stroomt"
    },
    "imperfektIndikativ": {
      "de": "er floss",
      "lv": "het stroomde"
    },
    "imperfektKonjunktiv": {
      "de": "er flösse",
      "lv": "het zou stromen"
    },
    "partizipVergangenheit": {
      "de": "geflossen (er ist)",
      "lv": "gestroomd"
    }
  },
  {
    "infinitiv": {
      "de": "fressen",
      "lv": "vreten"
    },
    "praesens": {
      "de": "er frisst",
      "lv": "hij vreet"
    },
    "imperfektIndikativ": {
      "de": "er frass",
      "lv": "hij vrat"
    },
    "imperfektKonjunktiv": {
      "de": "er fräße",
      "lv": "hij zou vreten"
    },
    "partizipVergangenheit": {
      "de": "gefressen",
      "lv": "gevreten"
    }
  },
  {
    "infinitiv": {
      "de": "frieren",
      "lv": "het koud hebben"
    },
    "praesens": {
      "de": "er friert",
      "lv": "hij heeft het koud"
    },
    "imperfektIndikativ": {
      "de": "er fror",
      "lv": "hij had het koud"
    },
    "imperfektKonjunktiv": {
      "de": "er fröre",
      "lv": "hij zou het koud hebben"
    },
    "partizipVergangenheit": {
      "de": "gefroren",
      "lv": "het koud gehad"
    }
  },
  {
    "infinitiv": {
      "de": "geben",
      "lv": "geven"
    },
    "praesens": {
      "de": "er gibt",
      "lv": "hij geeft"
    },
    "imperfektIndikativ": {
      "de": "er gab",
      "lv": "hij gaf"
    },
    "imperfektKonjunktiv": {
      "de": "er gäbe",
      "lv": "hij zou geven"
    },
    "partizipVergangenheit": {
      "de": "gegeben",
      "lv": "gegeven"
    }
  },
  {
    "infinitiv": {
      "de": "gedeihen",
      "lv": "gedijen"
    },
    "praesens": {
      "de": "er gedeiht",
      "lv": "hij gedijt"
    },
    "imperfektIndikativ": {
      "de": "er gedieh",
      "lv": "hij gedijde"
    },
    "imperfektKonjunktiv": {
      "de": "er gediehe",
      "lv": "hij zou gedijen"
    },
    "partizipVergangenheit": {
      "de": "gediehen (er ist)",
      "lv": "gedijd"
    }
  },
  {
    "infinitiv": {
      "de": "gehen",
      "lv": "gaan"
    },
    "praesens": {
      "de": "er geht",
      "lv": "hij gaat"
    },
    "imperfektIndikativ": {
      "de": "er ging",
      "lv": "hij ging"
    },
    "imperfektKonjunktiv": {
      "de": "er ginge",
      "lv": "hij zou gaan"
    },
    "partizipVergangenheit": {
      "de": "gegangen (er ist)",
      "lv": "gegaan"
    }
  },
  {
    "infinitiv": {
      "de": "gewinnen",
      "lv": "winnen"
    },
    "praesens": {
      "de": "er gewinnt",
      "lv": "hij wint"
    },
    "imperfektIndikativ": {
      "de": "er gewann",
      "lv": "hij won"
    },
    "imperfektKonjunktiv": {
      "de": "er gewönne / er gewänne",
      "lv": "hij zou winnen"
    },
    "partizipVergangenheit": {
      "de": "gewonnen",
      "lv": "gewonnen"
    }
  },
  {
    "infinitiv": {
      "de": "haben",
      "lv": "hebben"
    },
    "praesens": {
      "de": "er hat",
      "lv": "hij heeft"
    },
    "imperfektIndikativ": {
      "de": "hatte",
      "lv": "hij had"
    },
    "imperfektKonjunktiv": {
      "de": "hatte",
      "lv": "hij zou hebben"
    },
    "partizipVergangenheit": {
      "de": "gehabt",
      "lv": "gehad"
    }
  },
  {
    "infinitiv": {
      "de": "halten",
      "lv": "houden"
    },
    "praesens": {
      "de": "er hält",
      "lv": "hij houdt"
    },
    "imperfektIndikativ": {
      "de": "er hielt",
      "lv": "hij hield"
    },
    "imperfektKonjunktiv": {
      "de": "er hielte",
      "lv": "hij zou houden"
    },
    "partizipVergangenheit": {
      "de": "gehalten",
      "lv": "gehouden"
    }
  },
  {
    "infinitiv": {
      "de": "heißen",
      "lv": "noemen / heten"
    },
    "praesens": {
      "de": "er heißt",
      "lv": "hij noemt / heet"
    },
    "imperfektIndikativ": {
      "de": "er hieß",
      "lv": "hij noemde / heette"
    },
    "imperfektKonjunktiv": {
      "de": "er hieße",
      "lv": "hij zou noemen / heten"
    },
    "partizipVergangenheit": {
      "de": "geheißen",
      "lv": "genoemd / geheten"
    }
  },
  {
    "infinitiv": {
      "de": "helfen",
      "lv": "helpen"
    },
    "praesens": {
      "de": "er hilft",
      "lv": "hij helpt"
    },
    "imperfektIndikativ": {
      "de": "er half",
      "lv": "hij hielp"
    },
    "imperfektKonjunktiv": {
      "de": "er hülfe / er hälfe",
      "lv": "hij zou helpen"
    },
    "partizipVergangenheit": {
      "de": "geholfen",
      "lv": "geholpen"
    }
  },
  {
    "infinitiv": {
      "de": "kommen",
      "lv": "komen"
    },
    "praesens": {
      "de": "er kommt",
      "lv": "hij komt"
    },
    "imperfektIndikativ": {
      "de": "er kam",
      "lv": "hij kwam"
    },
    "imperfektKonjunktiv": {
      "de": "er käme",
      "lv": "hij zou komen"
    },
    "partizipVergangenheit": {
      "de": "gekommen (er ist)",
      "lv": "gekomen"
    }
  },
  {
    "infinitiv": {
      "de": "können",
      "lv": "kunnen"
    },
    "praesens": {
      "de": "er kann",
      "lv": "hij kan"
    },
    "imperfektIndikativ": {
      "de": "konnte",
      "lv": "hij kon"
    },
    "imperfektKonjunktiv": {
      "de": "konnte",
      "lv": "hij zou kunnen"
    },
    "partizipVergangenheit": {
      "de": "gekonnt",
      "lv": "gekund"
    }
  },
  {
    "infinitiv": {
      "de": "kriechen",
      "lv": "kruipen"
    },
    "praesens": {
      "de": "er kriecht",
      "lv": "hij kruipt"
    },
    "imperfektIndikativ": {
      "de": "er kroch",
      "lv": "hij kroop"
    },
    "imperfektKonjunktiv": {
      "de": "er kröche",
      "lv": "hij zou kruipen"
    },
    "partizipVergangenheit": {
      "de": "gekrochen (er ist)",
      "lv": "gekropen"
    }
  },
  {
    "infinitiv": {
      "de": "laden",
      "lv": "laden / uitnodigen"
    },
    "praesens": {
      "de": "er lädt",
      "lv": "hij laadt / nodigt uit"
    },
    "imperfektIndikativ": {
      "de": "er lud",
      "lv": "hij laadde / nodigde uit"
    },
    "imperfektKonjunktiv": {
      "de": "er lüde",
      "lv": "hij zou laden / uitnodigen"
    },
    "partizipVergangenheit": {
      "de": "geladen",
      "lv": "geladen / uitgenodigd"
    }
  },
  {
    "infinitiv": {
      "de": "lassen",
      "lv": "laten"
    },
    "praesens": {
      "de": "er lässt",
      "lv": "hij laat"
    },
    "imperfektIndikativ": {
      "de": "er ließ",
      "lv": "hij liet"
    },
    "imperfektKonjunktiv": {
      "de": "er ließe",
      "lv": "hij zou laten"
    },
    "partizipVergangenheit": {
      "de": "gelassen",
      "lv": "gelaten"
    }
  },
  {
    "infinitiv": {
      "de": "laufen",
      "lv": "rennen"
    },
    "praesens": {
      "de": "er läuft",
      "lv": "hij rent"
    },
    "imperfektIndikativ": {
      "de": "er lief",
      "lv": "hij rende"
    },
    "imperfektKonjunktiv": {
      "de": "er liefe",
      "lv": "hij zou rennen"
    },
    "partizipVergangenheit": {
      "de": "gelaufen (er ist)",
      "lv": "gerend"
    }
  },
  {
    "infinitiv": {
      "de": "leiden",
      "lv": "lijden"
    },
    "praesens": {
      "de": "er leidet",
      "lv": "hij lijdt"
    },
    "imperfektIndikativ": {
      "de": "er litt",
      "lv": "hij leed"
    },
    "imperfektKonjunktiv": {
      "de": "er litte",
      "lv": "hij zou lijden"
    },
    "partizipVergangenheit": {
      "de": "gelitten",
      "lv": "geleden"
    }
  },
  {
    "infinitiv": {
      "de": "leihen",
      "lv": "uitlenen / lenen"
    },
    "praesens": {
      "de": "er leiht",
      "lv": "hij leent uit / leent"
    },
    "imperfektIndikativ": {
      "de": "er lieh",
      "lv": "hij leende uit / leende"
    },
    "imperfektKonjunktiv": {
      "de": "er liehe",
      "lv": "hij zou uitlenen / lenen"
    },
    "partizipVergangenheit": {
      "de": "geliehen",
      "lv": "uitgeleend / geleend"
    }
  },
  {
    "infinitiv": {
      "de": "lesen",
      "lv": "lezen"
    },
    "praesens": {
      "de": "er liest",
      "lv": "hij leest"
    },
    "imperfektIndikativ": {
      "de": "er las",
      "lv": "hij las"
    },
    "imperfektKonjunktiv": {
      "de": "er läse",
      "lv": "hij zou lezen"
    },
    "partizipVergangenheit": {
      "de": "gelesen",
      "lv": "gelezen"
    }
  },
  {
    "infinitiv": {
      "de": "liegen",
      "lv": "liggen"
    },
    "praesens": {
      "de": "er liegt",
      "lv": "hij ligt"
    },
    "imperfektIndikativ": {
      "de": "er lag",
      "lv": "hij lag"
    },
    "imperfektKonjunktiv": {
      "de": "er läge",
      "lv": "hij zou liggen"
    },
    "partizipVergangenheit": {
      "de": "gelegen",
      "lv": "gelegen"
    }
  },
  {
    "infinitiv": {
      "de": "lügen",
      "lv": "liegen"
    },
    "praesens": {
      "de": "er lügt",
      "lv": "hij liegt"
    },
    "imperfektIndikativ": {
      "de": "er log",
      "lv": "hij loog"
    },
    "imperfektKonjunktiv": {
      "de": "er löge",
      "lv": "hij zou liegen"
    },
    "partizipVergangenheit": {
      "de": "gelogen",
      "lv": "gelogen"
    }
  },
  {
    "infinitiv": {
      "de": "mahlen",
      "lv": "malen"
    },
    "praesens": {
      "de": "er mahlt",
      "lv": "hij maalt"
    },
    "imperfektIndikativ": {
      "de": "er mahlte",
      "lv": "hij maalde"
    },
    "imperfektKonjunktiv": {
      "de": "er malte",
      "lv": "hij zou malen"
    },
    "partizipVergangenheit": {
      "de": "gemahlen",
      "lv": "gemalen"
    }
  },
  {
    "infinitiv": {
      "de": "meiden",
      "lv": "vermijden"
    },
    "praesens": {
      "de": "er meidet",
      "lv": "hij vermijdt"
    },
    "imperfektIndikativ": {
      "de": "er mied",
      "lv": "hij vermeed"
    },
    "imperfektKonjunktiv": {
      "de": "er miede",
      "lv": "hij zou vermijden"
    },
    "partizipVergangenheit": {
      "de": "gemieden",
      "lv": "vermeden"
    }
  },
  {
    "infinitiv": {
      "de": "melken",
      "lv": "melken"
    },
    "praesens": {
      "de": "er milkt / er melkt",
      "lv": "hij melkt"
    },
    "imperfektIndikativ": {
      "de": "er molk / er melkte",
      "lv": "hij melkte"
    },
    "imperfektKonjunktiv": {
      "de": "er mölke / er melkte",
      "lv": "hij zou melken"
    },
    "partizipVergangenheit": {
      "de": "gemolken / gemelkt",
      "lv": "gemolken"
    }
  },
  {
    "infinitiv": {
      "de": "messen",
      "lv": "meten"
    },
    "praesens": {
      "de": "er misst",
      "lv": "hij meet"
    },
    "imperfektIndikativ": {
      "de": "er mass",
      "lv": "hij mat"
    },
    "imperfektKonjunktiv": {
      "de": "er mäße",
      "lv": "hij zou meten"
    },
    "partizipVergangenheit": {
      "de": "gemessen",
      "lv": "gemeten"
    }
  },
  {
    "infinitiv": {
      "de": "misslingen",
      "lv": "mislukken"
    },
    "praesens": {
      "de": "es misslingt",
      "lv": "het mislukt"
    },
    "imperfektIndikativ": {
      "de": "misslang",
      "lv": "het mislukte"
    },
    "imperfektKonjunktiv": {
      "de": "misslang",
      "lv": "het zou mislukken"
    },
    "partizipVergangenheit": {
      "de": "misslungen",
      "lv": "mislukt"
    }
  },
  {
    "infinitiv": {
      "de": "mögen",
      "lv": "houden van"
    },
    "praesens": {
      "de": "er mag",
      "lv": "hij houdt van"
    },
    "imperfektIndikativ": {
      "de": "mochte",
      "lv": "hij hield van"
    },
    "imperfektKonjunktiv": {
      "de": "mochte",
      "lv": "hij zou houden van"
    },
    "partizipVergangenheit": {
      "de": "gemocht",
      "lv": "gehouden van"
    }
  },
  {
    "infinitiv": {
      "de": "müssen",
      "lv": "moeten"
    },
    "praesens": {
      "de": "er muss",
      "lv": "hij moet"
    },
    "imperfektIndikativ": {
      "de": "musste",
      "lv": "hij moest"
    },
    "imperfektKonjunktiv": {
      "de": "musste",
      "lv": "hij zou moeten"
    },
    "partizipVergangenheit": {
      "de": "gemusst",
      "lv": "gemoeten"
    }
  },
  {
    "infinitiv": {
      "de": "nehmen",
      "lv": "nemen"
    },
    "praesens": {
      "de": "er nimmt",
      "lv": "hij neemt"
    },
    "imperfektIndikativ": {
      "de": "er nahm",
      "lv": "hij nam"
    },
    "imperfektKonjunktiv": {
      "de": "er nähme",
      "lv": "hij zou nemen"
    },
    "partizipVergangenheit": {
      "de": "genommen",
      "lv": "genomen"
    }
  },
  {
    "infinitiv": {
      "de": "nennen",
      "lv": "noemen"
    },
    "praesens": {
      "de": "er nennt",
      "lv": "hij noemt"
    },
    "imperfektIndikativ": {
      "de": "er nannte",
      "lv": "hij noemde"
    },
    "imperfektKonjunktiv": {
      "de": "er nennte",
      "lv": "hij zou noemen"
    },
    "partizipVergangenheit": {
      "de": "genannt",
      "lv": "genoemd"
    }
  },
  {
    "infinitiv": {
      "de": "pfeifen",
      "lv": "fluiten"
    },
    "praesens": {
      "de": "er pfeift",
      "lv": "hij fluit"
    },
    "imperfektIndikativ": {
      "de": "er pfiff",
      "lv": "hij floot"
    },
    "imperfektKonjunktiv": {
      "de": "er pfiffe",
      "lv": "hij zou fluiten"
    },
    "partizipVergangenheit": {
      "de": "gepfiffen",
      "lv": "gefloten"
    }
  },
  {
    "infinitiv": {
      "de": "pflegen",
      "lv": "verzorgen"
    },
    "praesens": {
      "de": "er pflegt",
      "lv": "hij verzorgt"
    },
    "imperfektIndikativ": {
      "de": "pflegte / pflog",
      "lv": "hij verzorgde"
    },
    "imperfektKonjunktiv": {
      "de": "pflegte / pflog",
      "lv": "hij zou verzorgen"
    },
    "partizipVergangenheit": {
      "de": "gepflegt / gepflogen",
      "lv": "verzorgd"
    }
  },
  {
    "infinitiv": {
      "de": "preisen",
      "lv": "prijzen"
    },
    "praesens": {
      "de": "er preist",
      "lv": "hij prijst"
    },
    "imperfektIndikativ": {
      "de": "er pries",
      "lv": "hij prees"
    },
    "imperfektKonjunktiv": {
      "de": "er priese",
      "lv": "hij zou prijzen"
    },
    "partizipVergangenheit": {
      "de": "gepriesen",
      "lv": "geprezen"
    }
  },
  {
    "infinitiv": {
      "de": "quellen",
      "lv": "zwellen"
    },
    "praesens": {
      "de": "er quillt",
      "lv": "het zwelt"
    },
    "imperfektIndikativ": {
      "de": "er quoll",
      "lv": "het zwol"
    },
    "imperfektKonjunktiv": {
      "de": "er quölle",
      "lv": "het zou zwellen"
    },
    "partizipVergangenheit": {
      "de": "gequollen (er ist)",
      "lv": "gezwollen"
    }
  },
  {
    "infinitiv": {
      "de": "raten",
      "lv": "aanraden / raden"
    },
    "praesens": {
      "de": "er rät",
      "lv": "hij raadt aan / raadt"
    },
    "imperfektIndikativ": {
      "de": "er riet",
      "lv": "hij raadde aan / raadde"
    },
    "imperfektKonjunktiv": {
      "de": "er riete",
      "lv": "hij zou aanraden / raden"
    },
    "partizipVergangenheit": {
      "de": "geraten",
      "lv": "aangeraden / geraden"
    }
  },
  {
    "infinitiv": {
      "de": "reiben",
      "lv": "wrijven"
    },
    "praesens": {
      "de": "er reibt",
      "lv": "hij wrijft"
    },
    "imperfektIndikativ": {
      "de": "er rieb",
      "lv": "hij wreef"
    },
    "imperfektKonjunktiv": {
      "de": "er riebe",
      "lv": "hij zou wrijven"
    },
    "partizipVergangenheit": {
      "de": "gerieben",
      "lv": "gewreven"
    }
  },
  {
    "infinitiv": {
      "de": "reißen",
      "lv": "scheuren"
    },
    "praesens": {
      "de": "er reißt",
      "lv": "hij scheurt"
    },
    "imperfektIndikativ": {
      "de": "er riss",
      "lv": "hij scheurde"
    },
    "imperfektKonjunktiv": {
      "de": "er risse",
      "lv": "hij zou scheuren"
    },
    "partizipVergangenheit": {
      "de": "gerissen",
      "lv": "gescheurd"
    }
  },
  {
    "infinitiv": {
      "de": "reiten",
      "lv": "paardrijden"
    },
    "praesens": {
      "de": "er reitet",
      "lv": "hij rijdt paard"
    },
    "imperfektIndikativ": {
      "de": "er ritt",
      "lv": "hij reed paard"
    },
    "imperfektKonjunktiv": {
      "de": "er ritte",
      "lv": "hij zou paardrijden"
    },
    "partizipVergangenheit": {
      "de": "geritten (er ist)",
      "lv": "paardgereden"
    }
  },
  {
    "infinitiv": {
      "de": "rennen",
      "lv": "rennen"
    },
    "praesens": {
      "de": "er rennt",
      "lv": "hij rent"
    },
    "imperfektIndikativ": {
      "de": "er rannte",
      "lv": "hij rende"
    },
    "imperfektKonjunktiv": {
      "de": "er rennte",
      "lv": "hij zou rennen"
    },
    "partizipVergangenheit": {
      "de": "gerannt",
      "lv": "gerend"
    }
  },
  {
    "infinitiv": {
      "de": "riechen",
      "lv": "ruiken"
    },
    "praesens": {
      "de": "er riecht",
      "lv": "hij ruikt"
    },
    "imperfektIndikativ": {
      "de": "er roch",
      "lv": "hij rook"
    },
    "imperfektKonjunktiv": {
      "de": "er röche",
      "lv": "hij zou ruiken"
    },
    "partizipVergangenheit": {
      "de": "gerochen",
      "lv": "geroken"
    }
  },
  {
    "infinitiv": {
      "de": "ringen",
      "lv": "worstelen"
    },
    "praesens": {
      "de": "er ringt",
      "lv": "hij worstelt"
    },
    "imperfektIndikativ": {
      "de": "er rang",
      "lv": "hij worstelde"
    },
    "imperfektKonjunktiv": {
      "de": "er ränge",
      "lv": "hij zou worstelen"
    },
    "partizipVergangenheit": {
      "de": "gerungen",
      "lv": "geworsteld"
    }
  },
  {
    "infinitiv": {
      "de": "rinnen",
      "lv": "stromen"
    },
    "praesens": {
      "de": "er rinnt",
      "lv": "het stroomt"
    },
    "imperfektIndikativ": {
      "de": "er rann",
      "lv": "het stroomde"
    },
    "imperfektKonjunktiv": {
      "de": "er ränne / er rönne",
      "lv": "het zou stromen"
    },
    "partizipVergangenheit": {
      "de": "geronnen (er ist)",
      "lv": "gestroomd"
    }
  },
  {
    "infinitiv": {
      "de": "rufen",
      "lv": "roepen"
    },
    "praesens": {
      "de": "er ruft",
      "lv": "hij roept"
    },
    "imperfektIndikativ": {
      "de": "er rief",
      "lv": "hij riep"
    },
    "imperfektKonjunktiv": {
      "de": "er riefe",
      "lv": "hij zou roepen"
    },
    "partizipVergangenheit": {
      "de": "gerufen",
      "lv": "geroepen"
    }
  },
  {
    "infinitiv": {
      "de": "salzen",
      "lv": "zouten"
    },
    "praesens": {
      "de": "er salzt",
      "lv": "hij zout"
    },
    "imperfektIndikativ": {
      "de": "er salzte",
      "lv": "hij zoutte"
    },
    "imperfektKonjunktiv": {
      "de": "er salzte",
      "lv": "hij zou zouten"
    },
    "partizipVergangenheit": {
      "de": "gesalzen",
      "lv": "gezouten"
    }
  },
  {
    "infinitiv": {
      "de": "saufen",
      "lv": "zuipen / drinken"
    },
    "praesens": {
      "de": "er säuft",
      "lv": "hij zuipt / drinkt"
    },
    "imperfektIndikativ": {
      "de": "er soff",
      "lv": "hij zoop / dronk"
    },
    "imperfektKonjunktiv": {
      "de": "er söffe",
      "lv": "hij zou zuipen / drinken"
    },
    "partizipVergangenheit": {
      "de": "gesoffen",
      "lv": "gezopen / gedronken"
    }
  },
  {
    "infinitiv": {
      "de": "saugen",
      "lv": "zuigen"
    },
    "praesens": {
      "de": "er saugt",
      "lv": "hij zuigt"
    },
    "imperfektIndikativ": {
      "de": "er sog",
      "lv": "hij zoog"
    },
    "imperfektKonjunktiv": {
      "de": "er söge",
      "lv": "hij zou zuigen"
    },
    "partizipVergangenheit": {
      "de": "gesogen",
      "lv": "gezogen"
    }
  },
  {
    "infinitiv": {
      "de": "schaffen",
      "lv": "scheppen"
    },
    "praesens": {
      "de": "er schafft",
      "lv": "hij schept"
    },
    "imperfektIndikativ": {
      "de": "er schuf",
      "lv": "hij schiep"
    },
    "imperfektKonjunktiv": {
      "de": "er schüfe",
      "lv": "hij zou scheppen"
    },
    "partizipVergangenheit": {
      "de": "geschaffen",
      "lv": "geschapen"
    }
  },
  {
    "infinitiv": {
      "de": "schallen",
      "lv": "weerklinken"
    },
    "praesens": {
      "de": "es schallt",
      "lv": "het weerklinkt"
    },
    "imperfektIndikativ": {
      "de": "schallte / scholl",
      "lv": "het weerklonk"
    },
    "imperfektKonjunktiv": {
      "de": "schallte / scholl",
      "lv": "het zou weerklinken"
    },
    "partizipVergangenheit": {
      "de": "geschallt",
      "lv": "weerklonken"
    }
  },
  {
    "infinitiv": {
      "de": "scheiden",
      "lv": "scheiden"
    },
    "praesens": {
      "de": "er scheidet",
      "lv": "hij scheidt"
    },
    "imperfektIndikativ": {
      "de": "er schied",
      "lv": "hij scheidde"
    },
    "imperfektKonjunktiv": {
      "de": "er schiede",
      "lv": "hij zou scheiden"
    },
    "partizipVergangenheit": {
      "de": "geschieden (er hat / er ist)",
      "lv": "gescheiden"
    }
  },
  {
    "infinitiv": {
      "de": "scheinen",
      "lv": "schijnen / lijken"
    },
    "praesens": {
      "de": "er scheint",
      "lv": "hij schijnt / lijkt"
    },
    "imperfektIndikativ": {
      "de": "er schien",
      "lv": "hij scheen / leek"
    },
    "imperfektKonjunktiv": {
      "de": "er schiene",
      "lv": "hij zou schijnen / lijken"
    },
    "partizipVergangenheit": {
      "de": "geschienen",
      "lv": "geschenen / geleken"
    }
  },
  {
    "infinitiv": {
      "de": "schelten",
      "lv": "berispen"
    },
    "praesens": {
      "de": "er schilt",
      "lv": "hij berispt"
    },
    "imperfektIndikativ": {
      "de": "er schalt",
      "lv": "hij berispte"
    },
    "imperfektKonjunktiv": {
      "de": "er schölte / er schälte",
      "lv": "hij zou berispen"
    },
    "partizipVergangenheit": {
      "de": "gescholten",
      "lv": "berispt"
    }
  },
  {
    "infinitiv": {
      "de": "scheren",
      "lv": "scheren"
    },
    "praesens": {
      "de": "er schert",
      "lv": "hij scheert"
    },
    "imperfektIndikativ": {
      "de": "schor / scherte",
      "lv": "hij schoor"
    },
    "imperfektKonjunktiv": {
      "de": "schor / scherte",
      "lv": "hij zou scheren"
    },
    "partizipVergangenheit": {
      "de": "geschoren / geschert",
      "lv": "geschoren"
    }
  },
  {
    "infinitiv": {
      "de": "schieben",
      "lv": "duwen"
    },
    "praesens": {
      "de": "er schiebt",
      "lv": "hij duwt"
    },
    "imperfektIndikativ": {
      "de": "er schob",
      "lv": "hij duwde"
    },
    "imperfektKonjunktiv": {
      "de": "er schöbe",
      "lv": "hij zou duwen"
    },
    "partizipVergangenheit": {
      "de": "geschoben",
      "lv": "geduwd"
    }
  },
  {
    "infinitiv": {
      "de": "schießen",
      "lv": "schieten"
    },
    "praesens": {
      "de": "er schießt",
      "lv": "hij schiet"
    },
    "imperfektIndikativ": {
      "de": "er schoss",
      "lv": "hij schoot"
    },
    "imperfektKonjunktiv": {
      "de": "er schösse",
      "lv": "hij zou schieten"
    },
    "partizipVergangenheit": {
      "de": "geschossen",
      "lv": "geschoten"
    }
  },
  {
    "infinitiv": {
      "de": "schinden",
      "lv": "kwellen"
    },
    "praesens": {
      "de": "er schindet",
      "lv": "hij kwelt"
    },
    "imperfektIndikativ": {
      "de": "schindete",
      "lv": "hij kwelde"
    },
    "imperfektKonjunktiv": {
      "de": "schindete",
      "lv": "hij zou kwellen"
    },
    "partizipVergangenheit": {
      "de": "geschunden",
      "lv": "gekweld"
    }
  },
  {
    "infinitiv": {
      "de": "schlafen",
      "lv": "slapen"
    },
    "praesens": {
      "de": "er schläft",
      "lv": "hij slaapt"
    },
    "imperfektIndikativ": {
      "de": "er schlief",
      "lv": "hij sliep"
    },
    "imperfektKonjunktiv": {
      "de": "er schliefe",
      "lv": "hij zou slapen"
    },
    "partizipVergangenheit": {
      "de": "geschlafen",
      "lv": "geslapen"
    }
  },
  {
    "infinitiv": {
      "de": "schlagen",
      "lv": "slaan"
    },
    "praesens": {
      "de": "er schlägt",
      "lv": "hij slaat"
    },
    "imperfektIndikativ": {
      "de": "er schlug",
      "lv": "hij sloeg"
    },
    "imperfektKonjunktiv": {
      "de": "er schlüge",
      "lv": "hij zou slaan"
    },
    "partizipVergangenheit": {
      "de": "geschlagen",
      "lv": "geslagen"
    }
  },
  {
    "infinitiv": {
      "de": "schleichen",
      "lv": "sluipen"
    },
    "praesens": {
      "de": "er schleicht",
      "lv": "hij sluipt"
    },
    "imperfektIndikativ": {
      "de": "er schlich",
      "lv": "hij sloop"
    },
    "imperfektKonjunktiv": {
      "de": "er schliche",
      "lv": "hij zou sluipen"
    },
    "partizipVergangenheit": {
      "de": "geschlichen (er ist)",
      "lv": "geslopen"
    }
  },
  {
    "infinitiv": {
      "de": "schleifen",
      "lv": "slijpen"
    },
    "praesens": {
      "de": "er schleift",
      "lv": "hij slijpt"
    },
    "imperfektIndikativ": {
      "de": "er schliff",
      "lv": "hij sleep"
    },
    "imperfektKonjunktiv": {
      "de": "er schliffe",
      "lv": "hij zou slijpen"
    },
    "partizipVergangenheit": {
      "de": "geschliffen",
      "lv": "geslepen"
    }
  },
  {
    "infinitiv": {
      "de": "schließen",
      "lv": "sluiten"
    },
    "praesens": {
      "de": "er schließt",
      "lv": "hij sluit"
    },
    "imperfektIndikativ": {
      "de": "er schloss",
      "lv": "hij sloot"
    },
    "imperfektKonjunktiv": {
      "de": "er schlösse",
      "lv": "hij zou sluiten"
    },
    "partizipVergangenheit": {
      "de": "geschlossen",
      "lv": "gesloten"
    }
  },
  {
    "infinitiv": {
      "de": "schlingen",
      "lv": "verslinden"
    },
    "praesens": {
      "de": "er schlingt",
      "lv": "hij verslindt"
    },
    "imperfektIndikativ": {
      "de": "er schlang",
      "lv": "hij verslond"
    },
    "imperfektKonjunktiv": {
      "de": "er schlänge",
      "lv": "hij zou verslinden"
    },
    "partizipVergangenheit": {
      "de": "geschlungen",
      "lv": "verslonden"
    }
  },
  {
    "infinitiv": {
      "de": "schmeißen",
      "lv": "gooien"
    },
    "praesens": {
      "de": "er schmeißt",
      "lv": "hij gooit"
    },
    "imperfektIndikativ": {
      "de": "er schmiss",
      "lv": "hij gooide"
    },
    "imperfektKonjunktiv": {
      "de": "er schmisse",
      "lv": "hij zou gooien"
    },
    "partizipVergangenheit": {
      "de": "geschmissen",
      "lv": "gegooid"
    }
  },
  {
    "infinitiv": {
      "de": "schmelzen",
      "lv": "smelten"
    },
    "praesens": {
      "de": "er schmilzt",
      "lv": "het smelt"
    },
    "imperfektIndikativ": {
      "de": "er schmolz",
      "lv": "het smolt"
    },
    "imperfektKonjunktiv": {
      "de": "er schmölze",
      "lv": "het zou smelten"
    },
    "partizipVergangenheit": {
      "de": "geschmolzen (er ist)",
      "lv": "gesmolten"
    }
  },
  {
    "infinitiv": {
      "de": "schnauben",
      "lv": "snuiven"
    },
    "praesens": {
      "de": "er schnaubt",
      "lv": "hij snuift"
    },
    "imperfektIndikativ": {
      "de": "schnaubte / schnob",
      "lv": "hij snoof"
    },
    "imperfektKonjunktiv": {
      "de": "schnaubte / schnob",
      "lv": "hij zou snuiven"
    },
    "partizipVergangenheit": {
      "de": "geschnaubt / geschnoben",
      "lv": "gesnoven"
    }
  },
  {
    "infinitiv": {
      "de": "schneiden",
      "lv": "snijden"
    },
    "praesens": {
      "de": "er schneidet",
      "lv": "hij snijdt"
    },
    "imperfektIndikativ": {
      "de": "er schnitt",
      "lv": "hij sneed"
    },
    "imperfektKonjunktiv": {
      "de": "er schnitte",
      "lv": "hij zou snijden"
    },
    "partizipVergangenheit": {
      "de": "geschnitten",
      "lv": "gesneden"
    }
  },
  {
    "infinitiv": {
      "de": "schreiben",
      "lv": "schrijven"
    },
    "praesens": {
      "de": "er schreibt",
      "lv": "hij schrijft"
    },
    "imperfektIndikativ": {
      "de": "er schrieb",
      "lv": "hij schreef"
    },
    "imperfektKonjunktiv": {
      "de": "er schriebe",
      "lv": "hij zou schrijven"
    },
    "partizipVergangenheit": {
      "de": "geschrieben",
      "lv": "geschreven"
    }
  },
  {
    "infinitiv": {
      "de": "schreien",
      "lv": "schreeuwen"
    },
    "praesens": {
      "de": "er schreit",
      "lv": "hij schreeuwt"
    },
    "imperfektIndikativ": {
      "de": "er schrie",
      "lv": "hij schreeuwde"
    },
    "imperfektKonjunktiv": {
      "de": "er schriee",
      "lv": "hij zou schreeuwen"
    },
    "partizipVergangenheit": {
      "de": "geschrien",
      "lv": "geschreeuwd"
    }
  },
  {
    "infinitiv": {
      "de": "schreiten",
      "lv": "schrijden"
    },
    "praesens": {
      "de": "er schreitet",
      "lv": "hij schrijdt"
    },
    "imperfektIndikativ": {
      "de": "er schritt",
      "lv": "hij schreed"
    },
    "imperfektKonjunktiv": {
      "de": "er schritte",
      "lv": "hij zou schrijden"
    },
    "partizipVergangenheit": {
      "de": "geschritten (er ist)",
      "lv": "geschreden"
    }
  },
  {
    "infinitiv": {
      "de": "schweigen",
      "lv": "zwijgen"
    },
    "praesens": {
      "de": "er schweigt",
      "lv": "hij zwijgt"
    },
    "imperfektIndikativ": {
      "de": "er schwieg",
      "lv": "hij zweeg"
    },
    "imperfektKonjunktiv": {
      "de": "er schwiege",
      "lv": "hij zou zwijgen"
    },
    "partizipVergangenheit": {
      "de": "geschwiegen",
      "lv": "gezwegen"
    }
  },
  {
    "infinitiv": {
      "de": "schwellen",
      "lv": "opzwellen"
    },
    "praesens": {
      "de": "er schwillt",
      "lv": "het zwelt op"
    },
    "imperfektIndikativ": {
      "de": "er schwoll",
      "lv": "het zwol op"
    },
    "imperfektKonjunktiv": {
      "de": "er schwölle",
      "lv": "het zou opzwellen"
    },
    "partizipVergangenheit": {
      "de": "geschwollen (er ist)",
      "lv": "opgezwollen"
    }
  },
  {
    "infinitiv": {
      "de": "schwimmen",
      "lv": "zwemmen"
    },
    "praesens": {
      "de": "er schwimmt",
      "lv": "hij zwemt"
    },
    "imperfektIndikativ": {
      "de": "er schwamm",
      "lv": "hij zwom"
    },
    "imperfektKonjunktiv": {
      "de": "er schwömme / er schwämme",
      "lv": "hij zou zwemmen"
    },
    "partizipVergangenheit": {
      "de": "geschwommen (er ist)",
      "lv": "gezwommen"
    }
  },
  {
    "infinitiv": {
      "de": "schwinden",
      "lv": "verdwijnen"
    },
    "praesens": {
      "de": "er schwindet",
      "lv": "het verdwijnt"
    },
    "imperfektIndikativ": {
      "de": "er schwand",
      "lv": "het verdween"
    },
    "imperfektKonjunktiv": {
      "de": "er schwände",
      "lv": "het zou verdwijnen"
    },
    "partizipVergangenheit": {
      "de": "geschwunden (er ist)",
      "lv": "verdwenen"
    }
  },
  {
    "infinitiv": {
      "de": "schwingen",
      "lv": "zwaaien"
    },
    "praesens": {
      "de": "er schwingt",
      "lv": "hij zwaait"
    },
    "imperfektIndikativ": {
      "de": "er schwang",
      "lv": "hij zwaaide"
    },
    "imperfektKonjunktiv": {
      "de": "er schwänge",
      "lv": "hij zou zwaaien"
    },
    "partizipVergangenheit": {
      "de": "geschwungen",
      "lv": "gezwaaid"
    }
  },
  {
    "infinitiv": {
      "de": "schwören",
      "lv": "zweren"
    },
    "praesens": {
      "de": "er schwört",
      "lv": "hij zweert"
    },
    "imperfektIndikativ": {
      "de": "er schwur / er schwor",
      "lv": "hij zwoer"
    },
    "imperfektKonjunktiv": {
      "de": "er schwöre",
      "lv": "hij zou zweren"
    },
    "partizipVergangenheit": {
      "de": "geschworen",
      "lv": "gezworen"
    }
  },
  {
    "infinitiv": {
      "de": "sehen",
      "lv": "zien"
    },
    "praesens": {
      "de": "er sieht",
      "lv": "hij ziet"
    },
    "imperfektIndikativ": {
      "de": "er sah",
      "lv": "hij zag"
    },
    "imperfektKonjunktiv": {
      "de": "er sähe",
      "lv": "hij zou zien"
    },
    "partizipVergangenheit": {
      "de": "gesehen",
      "lv": "gezien"
    }
  },
  {
    "infinitiv": {
      "de": "sein",
      "lv": "zijn"
    },
    "praesens": {
      "de": "er ist",
      "lv": "hij is"
    },
    "imperfektIndikativ": {
      "de": "war",
      "lv": "hij was"
    },
    "imperfektKonjunktiv": {
      "de": "war",
      "lv": "hij zou zijn"
    },
    "partizipVergangenheit": {
      "de": "gewesen",
      "lv": "geweest"
    }
  },
  {
    "infinitiv": {
      "de": "senden",
      "lv": "sturen"
    },
    "praesens": {
      "de": "er sendet",
      "lv": "hij stuurt"
    },
    "imperfektIndikativ": {
      "de": "er sandte / er sendete",
      "lv": "hij stuurde"
    },
    "imperfektKonjunktiv": {
      "de": "er sendete",
      "lv": "hij zou sturen"
    },
    "partizipVergangenheit": {
      "de": "gesandt / gesendet",
      "lv": "gestuurd"
    }
  },
  {
    "infinitiv": {
      "de": "sieden",
      "lv": "koken"
    },
    "praesens": {
      "de": "er siedet",
      "lv": "hij kookt"
    },
    "imperfektIndikativ": {
      "de": "sott / siedete",
      "lv": "hij kookte"
    },
    "imperfektKonjunktiv": {
      "de": "sott / siedete",
      "lv": "hij zou koken"
    },
    "partizipVergangenheit": {
      "de": "gesotten / gesiedet",
      "lv": "gekookt"
    }
  },
  {
    "infinitiv": {
      "de": "singen",
      "lv": "zingen"
    },
    "praesens": {
      "de": "er singt",
      "lv": "hij zingt"
    },
    "imperfektIndikativ": {
      "de": "er sang",
      "lv": "hij zong"
    },
    "imperfektKonjunktiv": {
      "de": "er sänge",
      "lv": "hij zou zingen"
    },
    "partizipVergangenheit": {
      "de": "gesungen",
      "lv": "gezongen"
    }
  },
  {
    "infinitiv": {
      "de": "sinken",
      "lv": "zinken"
    },
    "praesens": {
      "de": "er sinkt",
      "lv": "hij zinkt"
    },
    "imperfektIndikativ": {
      "de": "er sank",
      "lv": "hij zonk"
    },
    "imperfektKonjunktiv": {
      "de": "er sänke",
      "lv": "hij zou zinken"
    },
    "partizipVergangenheit": {
      "de": "gesunken (er ist)",
      "lv": "gezonken"
    }
  },
  {
    "infinitiv": {
      "de": "sinnen",
      "lv": "peinzen"
    },
    "praesens": {
      "de": "er sinnt",
      "lv": "hij peinst"
    },
    "imperfektIndikativ": {
      "de": "er sann",
      "lv": "hij peinsde"
    },
    "imperfektKonjunktiv": {
      "de": "er sönne / er sänne",
      "lv": "hij zou peinzen"
    },
    "partizipVergangenheit": {
      "de": "gesonnen",
      "lv": "gepeinsd"
    }
  },
  {
    "infinitiv": {
      "de": "sitzen",
      "lv": "zitten"
    },
    "praesens": {
      "de": "er sitzt",
      "lv": "hij zit"
    },
    "imperfektIndikativ": {
      "de": "er sass",
      "lv": "hij zat"
    },
    "imperfektKonjunktiv": {
      "de": "er säße",
      "lv": "hij zou zitten"
    },
    "partizipVergangenheit": {
      "de": "gesessen",
      "lv": "gezeten"
    }
  },
  {
    "infinitiv": {
      "de": "sollen",
      "lv": "moeten"
    },
    "praesens": {
      "de": "er soll",
      "lv": "hij moet"
    },
    "imperfektIndikativ": {
      "de": "sollte",
      "lv": "hij moest"
    },
    "imperfektKonjunktiv": {
      "de": "sollte",
      "lv": "hij zou moeten"
    },
    "partizipVergangenheit": {
      "de": "gesollt",
      "lv": "gemoeten"
    }
  },
  {
    "infinitiv": {
      "de": "speien",
      "lv": "spuwen"
    },
    "praesens": {
      "de": "er speit",
      "lv": "hij spuwt"
    },
    "imperfektIndikativ": {
      "de": "er spie",
      "lv": "hij spuwde"
    },
    "imperfektKonjunktiv": {
      "de": "er spie",
      "lv": "hij zou spuwen"
    },
    "partizipVergangenheit": {
      "de": "gespien",
      "lv": "gespuwd"
    }
  },
  {
    "infinitiv": {
      "de": "spinnen",
      "lv": "spinnen"
    },
    "praesens": {
      "de": "er spinnt",
      "lv": "hij spint"
    },
    "imperfektIndikativ": {
      "de": "er spann",
      "lv": "hij spon"
    },
    "imperfektKonjunktiv": {
      "de": "er spönne / er spänne",
      "lv": "hij zou spinnen"
    },
    "partizipVergangenheit": {
      "de": "gesponnen",
      "lv": "gesponnen"
    }
  },
  {
    "infinitiv": {
      "de": "spleißen",
      "lv": "verbinden"
    },
    "praesens": {
      "de": "er spleißt",
      "lv": "hij verbindt"
    },
    "imperfektIndikativ": {
      "de": "spliss",
      "lv": "hij verbond"
    },
    "imperfektKonjunktiv": {
      "de": "spliss",
      "lv": "hij zou verbinden"
    },
    "partizipVergangenheit": {
      "de": "gesplissen",
      "lv": "verbonden"
    }
  },
  {
    "infinitiv": {
      "de": "sprechen",
      "lv": "spreken"
    },
    "praesens": {
      "de": "er spricht",
      "lv": "hij spreekt"
    },
    "imperfektIndikativ": {
      "de": "er sprach",
      "lv": "hij sprak"
    },
    "imperfektKonjunktiv": {
      "de": "er spräche",
      "lv": "hij zou spreken"
    },
    "partizipVergangenheit": {
      "de": "gesprochen",
      "lv": "gesproken"
    }
  },
  {
    "infinitiv": {
      "de": "sprießen",
      "lv": "spruiten"
    },
    "praesens": {
      "de": "er sprießt",
      "lv": "het spruit"
    },
    "imperfektIndikativ": {
      "de": "er spross",
      "lv": "het sproot"
    },
    "imperfektKonjunktiv": {
      "de": "er sprösse",
      "lv": "het zou spruiten"
    },
    "partizipVergangenheit": {
      "de": "gesprossen (er ist)",
      "lv": "gesproten"
    }
  },
  {
    "infinitiv": {
      "de": "springen",
      "lv": "springen"
    },
    "praesens": {
      "de": "er springt",
      "lv": "hij springt"
    },
    "imperfektIndikativ": {
      "de": "er sprang",
      "lv": "hij sprong"
    },
    "imperfektKonjunktiv": {
      "de": "er spränge",
      "lv": "hij zou springen"
    },
    "partizipVergangenheit": {
      "de": "gesprungen (er ist)",
      "lv": "gesprongen"
    }
  },
  {
    "infinitiv": {
      "de": "stechen",
      "lv": "steken"
    },
    "praesens": {
      "de": "er sticht",
      "lv": "hij steekt"
    },
    "imperfektIndikativ": {
      "de": "er stach",
      "lv": "hij stak"
    },
    "imperfektKonjunktiv": {
      "de": "er stäche",
      "lv": "hij zou steken"
    },
    "partizipVergangenheit": {
      "de": "gestochen",
      "lv": "gestoken"
    }
  },
  {
    "infinitiv": {
      "de": "stecken",
      "lv": "stoppen / prikken"
    },
    "praesens": {
      "de": "er steckt",
      "lv": "hij stopt / prikt"
    },
    "imperfektIndikativ": {
      "de": "stak / steckte",
      "lv": "hij stopte / prikte"
    },
    "imperfektKonjunktiv": {
      "de": "stak / steckte",
      "lv": "hij zou stoppen / prikken"
    },
    "partizipVergangenheit": {
      "de": "gesteckt",
      "lv": "gestopt / geprikt"
    }
  },
  {
    "infinitiv": {
      "de": "stehen",
      "lv": "staan"
    },
    "praesens": {
      "de": "er steht",
      "lv": "hij staat"
    },
    "imperfektIndikativ": {
      "de": "er stand",
      "lv": "hij stond"
    },
    "imperfektKonjunktiv": {
      "de": "er stände / er stünde",
      "lv": "hij zou staan"
    },
    "partizipVergangenheit": {
      "de": "gestanden",
      "lv": "gestaan"
    }
  },
  {
    "infinitiv": {
      "de": "stehlen",
      "lv": "stelen"
    },
    "praesens": {
      "de": "er stiehlt",
      "lv": "hij steelt"
    },
    "imperfektIndikativ": {
      "de": "er stahl",
      "lv": "hij stal"
    },
    "imperfektKonjunktiv": {
      "de": "er stöhle / er stähle",
      "lv": "hij zou stelen"
    },
    "partizipVergangenheit": {
      "de": "gestohlen",
      "lv": "gestolen"
    }
  },
  {
    "infinitiv": {
      "de": "steigen",
      "lv": "klimmen"
    },
    "praesens": {
      "de": "er steigt",
      "lv": "hij klimt"
    },
    "imperfektIndikativ": {
      "de": "er stieg",
      "lv": "hij klom"
    },
    "imperfektKonjunktiv": {
      "de": "er stiege",
      "lv": "hij zou klimmen"
    },
    "partizipVergangenheit": {
      "de": "gestiegen (er ist)",
      "lv": "geklommen"
    }
  },
  {
    "infinitiv": {
      "de": "sterben",
      "lv": "sterven"
    },
    "praesens": {
      "de": "er stirbt",
      "lv": "hij sterft"
    },
    "imperfektIndikativ": {
      "de": "er starb",
      "lv": "hij stierf"
    },
    "imperfektKonjunktiv": {
      "de": "er stürbe",
      "lv": "hij zou sterven"
    },
    "partizipVergangenheit": {
      "de": "gestorben (er ist)",
      "lv": "gestorven"
    }
  },
  {
    "infinitiv": {
      "de": "stinken",
      "lv": "stinken"
    },
    "praesens": {
      "de": "es stinkt",
      "lv": "het stinkt"
    },
    "imperfektIndikativ": {
      "de": "stank",
      "lv": "het stonk"
    },
    "imperfektKonjunktiv": {
      "de": "stank",
      "lv": "het zou stinken"
    },
    "partizipVergangenheit": {
      "de": "gestunken",
      "lv": "gestonken"
    }
  },
  {
    "infinitiv": {
      "de": "stoßen",
      "lv": "duwen"
    },
    "praesens": {
      "de": "er stößt",
      "lv": "hij duwt"
    },
    "imperfektIndikativ": {
      "de": "er stieß",
      "lv": "hij duwde"
    },
    "imperfektKonjunktiv": {
      "de": "er stieße",
      "lv": "hij zou duwen"
    },
    "partizipVergangenheit": {
      "de": "gestoßen",
      "lv": "geduwd"
    }
  },
  {
    "infinitiv": {
      "de": "streichen",
      "lv": "verven / schrappen"
    },
    "praesens": {
      "de": "er streicht",
      "lv": "hij verft / schrapt"
    },
    "imperfektIndikativ": {
      "de": "er strich",
      "lv": "hij verfde / schrapte"
    },
    "imperfektKonjunktiv": {
      "de": "er striche",
      "lv": "hij zou verven / schrappen"
    },
    "partizipVergangenheit": {
      "de": "gestrichen",
      "lv": "geverfd / geschrapt"
    }
  },
  {
    "infinitiv": {
      "de": "streiten",
      "lv": "ruziemaken"
    },
    "praesens": {
      "de": "er streitet",
      "lv": "hij maakt ruzie"
    },
    "imperfektIndikativ": {
      "de": "er stritt",
      "lv": "hij maakte ruzie"
    },
    "imperfektKonjunktiv": {
      "de": "er stritte",
      "lv": "hij zou ruziemaken"
    },
    "partizipVergangenheit": {
      "de": "gestritten",
      "lv": "ruziegemaakt"
    }
  },
  {
    "infinitiv": {
      "de": "tragen",
      "lv": "dragen"
    },
    "praesens": {
      "de": "er trägt",
      "lv": "hij draagt"
    },
    "imperfektIndikativ": {
      "de": "er trug",
      "lv": "hij droeg"
    },
    "imperfektKonjunktiv": {
      "de": "er trüge",
      "lv": "hij zou dragen"
    },
    "partizipVergangenheit": {
      "de": "getragen",
      "lv": "gedragen"
    }
  },
  {
    "infinitiv": {
      "de": "treffen",
      "lv": "ontmoeten"
    },
    "praesens": {
      "de": "er trifft",
      "lv": "hij ontmoet"
    },
    "imperfektIndikativ": {
      "de": "er traf",
      "lv": "hij ontmoette"
    },
    "imperfektKonjunktiv": {
      "de": "er träfe",
      "lv": "hij zou ontmoeten"
    },
    "partizipVergangenheit": {
      "de": "getroffen",
      "lv": "ontmoet"
    }
  },
  {
    "infinitiv": {
      "de": "treiben",
      "lv": "drijven"
    },
    "praesens": {
      "de": "er treibt",
      "lv": "hij drijft"
    },
    "imperfektIndikativ": {
      "de": "er trieb",
      "lv": "hij dreef"
    },
    "imperfektKonjunktiv": {
      "de": "er triebe",
      "lv": "hij zou drijven"
    },
    "partizipVergangenheit": {
      "de": "getrieben",
      "lv": "gedreven"
    }
  },
  {
    "infinitiv": {
      "de": "treten",
      "lv": "stappen / gaan"
    },
    "praesens": {
      "de": "er tritt",
      "lv": "hij stapt / gaat"
    },
    "imperfektIndikativ": {
      "de": "er trat",
      "lv": "hij stapte / ging"
    },
    "imperfektKonjunktiv": {
      "de": "er träte",
      "lv": "hij zou stappen / gaan"
    },
    "partizipVergangenheit": {
      "de": "getreten (er ist)",
      "lv": "gestapt / gegaan"
    }
  },
  {
    "infinitiv": {
      "de": "trinken",
      "lv": "drinken"
    },
    "praesens": {
      "de": "er trinkt",
      "lv": "hij drinkt"
    },
    "imperfektIndikativ": {
      "de": "er trank",
      "lv": "hij dronk"
    },
    "imperfektKonjunktiv": {
      "de": "er tränke",
      "lv": "hij zou drinken"
    },
    "partizipVergangenheit": {
      "de": "getrunken",
      "lv": "gedronken"
    }
  },
  {
    "infinitiv": {
      "de": "trügen",
      "lv": "bedriegen"
    },
    "praesens": {
      "de": "er trögt",
      "lv": "hij bedriegt"
    },
    "imperfektIndikativ": {
      "de": "er trog",
      "lv": "hij bedroog"
    },
    "imperfektKonjunktiv": {
      "de": "er tröge",
      "lv": "hij zou bedriegen"
    },
    "partizipVergangenheit": {
      "de": "getrogen",
      "lv": "bedrogen"
    }
  },
  {
    "infinitiv": {
      "de": "tun",
      "lv": "doen"
    },
    "praesens": {
      "de": "er tut",
      "lv": "hij doet"
    },
    "imperfektIndikativ": {
      "de": "er tat",
      "lv": "hij deed"
    },
    "imperfektKonjunktiv": {
      "de": "er täte",
      "lv": "hij zou doen"
    },
    "partizipVergangenheit": {
      "de": "getan",
      "lv": "gedaan"
    }
  },
  {
    "infinitiv": {
      "de": "verderben",
      "lv": "bederven"
    },
    "praesens": {
      "de": "er verdirbt",
      "lv": "hij bederft"
    },
    "imperfektIndikativ": {
      "de": "er verdarb",
      "lv": "hij bedierf"
    },
    "imperfektKonjunktiv": {
      "de": "er verdürbe",
      "lv": "hij zou bederven"
    },
    "partizipVergangenheit": {
      "de": "verdorben",
      "lv": "bedorven"
    }
  },
  {
    "infinitiv": {
      "de": "verdrießen",
      "lv": "ergeren"
    },
    "praesens": {
      "de": "er verdrießt",
      "lv": "hij ergert"
    },
    "imperfektIndikativ": {
      "de": "er verdross",
      "lv": "hij ergerde"
    },
    "imperfektKonjunktiv": {
      "de": "er verdrösse",
      "lv": "hij zou ergeren"
    },
    "partizipVergangenheit": {
      "de": "verdrossen",
      "lv": "geërgerd"
    }
  },
  {
    "infinitiv": {
      "de": "vergessen",
      "lv": "vergeten"
    },
    "praesens": {
      "de": "er vergisst",
      "lv": "hij vergeet"
    },
    "imperfektIndikativ": {
      "de": "er vergass",
      "lv": "hij vergat"
    },
    "imperfektKonjunktiv": {
      "de": "er vergäße",
      "lv": "hij zou vergeten"
    },
    "partizipVergangenheit": {
      "de": "vergessen",
      "lv": "vergeten"
    }
  },
  {
    "infinitiv": {
      "de": "verlieren",
      "lv": "verliezen"
    },
    "praesens": {
      "de": "er verliert",
      "lv": "hij verliest"
    },
    "imperfektIndikativ": {
      "de": "er verlor",
      "lv": "hij verloor"
    },
    "imperfektKonjunktiv": {
      "de": "er verlöre",
      "lv": "hij zou verliezen"
    },
    "partizipVergangenheit": {
      "de": "verloren",
      "lv": "verloren"
    }
  },
  {
    "infinitiv": {
      "de": "wachsen",
      "lv": "groeien"
    },
    "praesens": {
      "de": "er wächst",
      "lv": "hij groeit"
    },
    "imperfektIndikativ": {
      "de": "er wuchs",
      "lv": "hij groeide"
    },
    "imperfektKonjunktiv": {
      "de": "er wüchse",
      "lv": "hij zou groeien"
    },
    "partizipVergangenheit": {
      "de": "gewachsen (er ist)",
      "lv": "gegroeid"
    }
  },
  {
    "infinitiv": {
      "de": "waschen",
      "lv": "wassen"
    },
    "praesens": {
      "de": "er wäscht",
      "lv": "hij wast"
    },
    "imperfektIndikativ": {
      "de": "er wusch",
      "lv": "hij waste"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsche",
      "lv": "hij zou wassen"
    },
    "partizipVergangenheit": {
      "de": "gewaschen",
      "lv": "gewassen"
    }
  },
  {
    "infinitiv": {
      "de": "weben",
      "lv": "weven"
    },
    "praesens": {
      "de": "er webt",
      "lv": "hij weeft"
    },
    "imperfektIndikativ": {
      "de": "wob",
      "lv": "hij weefde"
    },
    "imperfektKonjunktiv": {
      "de": "wob",
      "lv": "hij zou weven"
    },
    "partizipVergangenheit": {
      "de": "gewoben",
      "lv": "geweven"
    }
  },
  {
    "infinitiv": {
      "de": "weichen",
      "lv": "wijken"
    },
    "praesens": {
      "de": "er weicht",
      "lv": "hij wijkt"
    },
    "imperfektIndikativ": {
      "de": "er wich",
      "lv": "hij week"
    },
    "imperfektKonjunktiv": {
      "de": "er wiche",
      "lv": "hij zou wijken"
    },
    "partizipVergangenheit": {
      "de": "gewichen (er ist)",
      "lv": "geweken"
    }
  },
  {
    "infinitiv": {
      "de": "weisen",
      "lv": "wijzen"
    },
    "praesens": {
      "de": "er weist",
      "lv": "hij wijst"
    },
    "imperfektIndikativ": {
      "de": "er wies",
      "lv": "hij wees"
    },
    "imperfektKonjunktiv": {
      "de": "er wiese",
      "lv": "hij zou wijzen"
    },
    "partizipVergangenheit": {
      "de": "gewiesen",
      "lv": "gewezen"
    }
  },
  {
    "infinitiv": {
      "de": "wenden",
      "lv": "draaien / omdraaien"
    },
    "praesens": {
      "de": "er wendet",
      "lv": "hij draait / draait om"
    },
    "imperfektIndikativ": {
      "de": "er wandte / es wendete",
      "lv": "hij draaide / draaide om"
    },
    "imperfektKonjunktiv": {
      "de": "er wendete",
      "lv": "hij zou draaien / omdraaien"
    },
    "partizipVergangenheit": {
      "de": "gewandt / gewendet",
      "lv": "gedraaid / omgedraaid"
    }
  },
  {
    "infinitiv": {
      "de": "werben",
      "lv": "het hof maken"
    },
    "praesens": {
      "de": "er wirbt",
      "lv": "hij maakt het hof"
    },
    "imperfektIndikativ": {
      "de": "er warb",
      "lv": "hij maakte het hof"
    },
    "imperfektKonjunktiv": {
      "de": "er würbe",
      "lv": "hij zou het hof maken"
    },
    "partizipVergangenheit": {
      "de": "geworben",
      "lv": "het hof gemaakt"
    }
  },
  {
    "infinitiv": {
      "de": "werden",
      "lv": "worden"
    },
    "praesens": {
      "de": "er wird",
      "lv": "hij wordt"
    },
    "imperfektIndikativ": {
      "de": "wurde",
      "lv": "hij werd"
    },
    "imperfektKonjunktiv": {
      "de": "wurde",
      "lv": "hij zou worden"
    },
    "partizipVergangenheit": {
      "de": "geworden",
      "lv": "geworden"
    }
  },
  {
    "infinitiv": {
      "de": "werfen",
      "lv": "gooien"
    },
    "praesens": {
      "de": "er wirft",
      "lv": "hij gooit"
    },
    "imperfektIndikativ": {
      "de": "er warf",
      "lv": "hij gooide"
    },
    "imperfektKonjunktiv": {
      "de": "er würfe",
      "lv": "hij zou gooien"
    },
    "partizipVergangenheit": {
      "de": "geworfen",
      "lv": "gegooid"
    }
  },
  {
    "infinitiv": {
      "de": "wiegen",
      "lv": "wegen"
    },
    "praesens": {
      "de": "er wiegt",
      "lv": "hij weegt"
    },
    "imperfektIndikativ": {
      "de": "er wog",
      "lv": "hij woog"
    },
    "imperfektKonjunktiv": {
      "de": "er wöge",
      "lv": "hij zou wegen"
    },
    "partizipVergangenheit": {
      "de": "gewogen",
      "lv": "gewogen"
    }
  },
  {
    "infinitiv": {
      "de": "winden",
      "lv": "winden"
    },
    "praesens": {
      "de": "er windet",
      "lv": "hij windt"
    },
    "imperfektIndikativ": {
      "de": "er wand",
      "lv": "hij wond"
    },
    "imperfektKonjunktiv": {
      "de": "er wände",
      "lv": "hij zou winden"
    },
    "partizipVergangenheit": {
      "de": "gewunden",
      "lv": "gewonden"
    }
  },
  {
    "infinitiv": {
      "de": "wissen",
      "lv": "weten"
    },
    "praesens": {
      "de": "er weiß",
      "lv": "hij weet"
    },
    "imperfektIndikativ": {
      "de": "er wusste",
      "lv": "hij wist"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsste",
      "lv": "hij zou weten"
    },
    "partizipVergangenheit": {
      "de": "gewusst",
      "lv": "geweten"
    }
  },
  {
    "infinitiv": {
      "de": "wollen",
      "lv": "willen"
    },
    "praesens": {
      "de": "er will",
      "lv": "hij wil"
    },
    "imperfektIndikativ": {
      "de": "wollte",
      "lv": "hij wilde"
    },
    "imperfektKonjunktiv": {
      "de": "wollte",
      "lv": "hij zou willen"
    },
    "partizipVergangenheit": {
      "de": "gewollt",
      "lv": "gewild"
    }
  },
  {
    "infinitiv": {
      "de": "wringen",
      "lv": "wringen / persen"
    },
    "praesens": {
      "de": "er wringt",
      "lv": "hij wringt / perst"
    },
    "imperfektIndikativ": {
      "de": "wrang",
      "lv": "hij wrong / perste"
    },
    "imperfektKonjunktiv": {
      "de": "wrang",
      "lv": "hij zou wringen / persen"
    },
    "partizipVergangenheit": {
      "de": "gewrungen",
      "lv": "gewrongen / geperst"
    }
  },
  {
    "infinitiv": {
      "de": "zeihen",
      "lv": "beschuldigen"
    },
    "praesens": {
      "de": "er zeiht",
      "lv": "hij beschuldigt"
    },
    "imperfektIndikativ": {
      "de": "zieh",
      "lv": "hij beschuldigde"
    },
    "imperfektKonjunktiv": {
      "de": "zieh",
      "lv": "hij zou beschuldigen"
    },
    "partizipVergangenheit": {
      "de": "geziehen",
      "lv": "beschuldigd"
    }
  },
  {
    "infinitiv": {
      "de": "ziehen",
      "lv": "trekken"
    },
    "praesens": {
      "de": "er zieht",
      "lv": "hij trekt"
    },
    "imperfektIndikativ": {
      "de": "er zog",
      "lv": "hij trok"
    },
    "imperfektKonjunktiv": {
      "de": "er zöge",
      "lv": "hij zou trekken"
    },
    "partizipVergangenheit": {
      "de": "gezogen",
      "lv": "getrokken"
    }
  },
  {
    "infinitiv": {
      "de": "zwingen",
      "lv": "dwingen"
    },
    "praesens": {
      "de": "er zwingt",
      "lv": "hij dwingt"
    },
    "imperfektIndikativ": {
      "de": "er zwang",
      "lv": "hij dwong"
    },
    "imperfektKonjunktiv": {
      "de": "er zwänge",
      "lv": "hij zou dwingen"
    },
    "partizipVergangenheit": {
      "de": "gezwungen",
      "lv": "gedwongen"
    }
  },
  {
    "infinitiv": {
      "de": "empfangen",
      "lv": "ontvangen"
    },
    "praesens": {
      "de": "er empfängt",
      "lv": "hij ontvangt"
    },
    "imperfektIndikativ": {
      "de": "er empfing",
      "lv": "hij ontving"
    },
    "imperfektKonjunktiv": {
      "de": "er empfinge",
      "lv": "hij zou ontvangen"
    },
    "partizipVergangenheit": {
      "de": "empfangen",
      "lv": "ontvangen"
    }
  },
  {
    "infinitiv": {
      "de": "erwägen",
      "lv": "overwegen"
    },
    "praesens": {
      "de": "er erwägt",
      "lv": "hij overweegt"
    },
    "imperfektIndikativ": {
      "de": "er erwog",
      "lv": "hij overwoog"
    },
    "imperfektKonjunktiv": {
      "de": "er erwöge",
      "lv": "hij zou overwegen"
    },
    "partizipVergangenheit": {
      "de": "erwogen",
      "lv": "overwogen"
    }
  },
  {
    "infinitiv": {
      "de": "fechten",
      "lv": "vechten"
    },
    "praesens": {
      "de": "er ficht",
      "lv": "hij vecht"
    },
    "imperfektIndikativ": {
      "de": "er focht",
      "lv": "hij vocht"
    },
    "imperfektKonjunktiv": {
      "de": "er föchte",
      "lv": "hij zou vechten"
    },
    "partizipVergangenheit": {
      "de": "gefochten",
      "lv": "gevochten"
    }
  },
  {
    "infinitiv": {
      "de": "flechten",
      "lv": "vlechten"
    },
    "praesens": {
      "de": "er flicht",
      "lv": "hij vlecht"
    },
    "imperfektIndikativ": {
      "de": "er flocht",
      "lv": "hij vlocht"
    },
    "imperfektKonjunktiv": {
      "de": "er flöchte",
      "lv": "hij zou vlechten"
    },
    "partizipVergangenheit": {
      "de": "geflochten",
      "lv": "gevlochten"
    }
  },
  {
    "infinitiv": {
      "de": "hangen",
      "lv": "hangen"
    },
    "praesens": {
      "de": "er hängt",
      "lv": "hij hangt"
    },
    "imperfektIndikativ": {
      "de": "er hing",
      "lv": "hij hing"
    },
    "imperfektKonjunktiv": {
      "de": "er hinge",
      "lv": "hij zou hangen"
    },
    "partizipVergangenheit": {
      "de": "gehangen",
      "lv": "gehangen"
    }
  },
  {
    "infinitiv": {
      "de": "spalten",
      "lv": "splijten"
    },
    "praesens": {
      "de": "er spaltet",
      "lv": "hij splijt"
    },
    "imperfektIndikativ": {
      "de": "er spaltete",
      "lv": "hij spleet"
    },
    "imperfektKonjunktiv": {
      "de": "er spaltete",
      "lv": "hij zou splijten"
    },
    "partizipVergangenheit": {
      "de": "gespalten",
      "lv": "gespleten"
    }
  },
  {
    "infinitiv": {
      "de": "verzeihen",
      "lv": "vergeven"
    },
    "praesens": {
      "de": "er verzeiht",
      "lv": "hij vergeeft"
    },
    "imperfektIndikativ": {
      "de": "er verzieh",
      "lv": "hij vergaf"
    },
    "imperfektKonjunktiv": {
      "de": "er verziehe",
      "lv": "hij zou vergeven"
    },
    "partizipVergangenheit": {
      "de": "verziehen",
      "lv": "vergeven"
    }
  }
];

window.VERB_ENTRIES = VERB_ENTRIES;

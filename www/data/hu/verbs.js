const VERB_ENTRIES = [
  {
    "infinitiv": {
      "de": "backen",
      "lv": "sütni"
    },
    "praesens": {
      "de": "er bäckt",
      "lv": "ő süt"
    },
    "imperfektIndikativ": {
      "de": "er buk",
      "lv": "ő sütött"
    },
    "imperfektKonjunktiv": {
      "de": "er büke",
      "lv": "ő sütne"
    },
    "partizipVergangenheit": {
      "de": "gebacken",
      "lv": "sütött"
    }
  },
  {
    "infinitiv": {
      "de": "befehlen",
      "lv": "parancsolni"
    },
    "praesens": {
      "de": "er befiehlt",
      "lv": "ő parancsol"
    },
    "imperfektIndikativ": {
      "de": "er befahl",
      "lv": "ő parancsolt"
    },
    "imperfektKonjunktiv": {
      "de": "er beföhle",
      "lv": "ő parancsolna"
    },
    "partizipVergangenheit": {
      "de": "befohlen",
      "lv": "parancsolt"
    }
  },
  {
    "infinitiv": {
      "de": "beginnen",
      "lv": "kezdeni"
    },
    "praesens": {
      "de": "er beginnt",
      "lv": "ő kezd"
    },
    "imperfektIndikativ": {
      "de": "er begann",
      "lv": "ő kezdett"
    },
    "imperfektKonjunktiv": {
      "de": "er begönne / er begänne",
      "lv": "ő kezdene"
    },
    "partizipVergangenheit": {
      "de": "begonnen",
      "lv": "kezdett"
    }
  },
  {
    "infinitiv": {
      "de": "beißen",
      "lv": "harapni"
    },
    "praesens": {
      "de": "er beißt",
      "lv": "ő harap"
    },
    "imperfektIndikativ": {
      "de": "er biss",
      "lv": "ő harapott"
    },
    "imperfektKonjunktiv": {
      "de": "er bisse",
      "lv": "ő harapna"
    },
    "partizipVergangenheit": {
      "de": "gebissen",
      "lv": "harapott"
    }
  },
  {
    "infinitiv": {
      "de": "bergen",
      "lv": "megmenteni / eldugni"
    },
    "praesens": {
      "de": "er birgt",
      "lv": "ő megment / eldug"
    },
    "imperfektIndikativ": {
      "de": "er barg",
      "lv": "ő megmentett / eldugott"
    },
    "imperfektKonjunktiv": {
      "de": "er bürge / er bärge",
      "lv": "ő megmentene / eldugna"
    },
    "partizipVergangenheit": {
      "de": "geborgen",
      "lv": "megmentett / eldugott"
    }
  },
  {
    "infinitiv": {
      "de": "bersten",
      "lv": "szétrepedni"
    },
    "praesens": {
      "de": "er birst",
      "lv": "szétreped"
    },
    "imperfektIndikativ": {
      "de": "er barst / er borst",
      "lv": "szétrepedt"
    },
    "imperfektKonjunktiv": {
      "de": "er bärste / er börste",
      "lv": "szétrepedne"
    },
    "partizipVergangenheit": {
      "de": "geborsten (er ist)",
      "lv": "szétrepedt"
    }
  },
  {
    "infinitiv": {
      "de": "bewegen",
      "lv": "ösztönözni"
    },
    "praesens": {
      "de": "er bewegt",
      "lv": "ő ösztönöz"
    },
    "imperfektIndikativ": {
      "de": "er bewog",
      "lv": "ő ösztönzött"
    },
    "imperfektKonjunktiv": {
      "de": "er bewöge",
      "lv": "ő ösztönözne"
    },
    "partizipVergangenheit": {
      "de": "bewogen",
      "lv": "ösztönzött"
    }
  },
  {
    "infinitiv": {
      "de": "biegen",
      "lv": "hajlítani"
    },
    "praesens": {
      "de": "er biegt",
      "lv": "ő hajlít"
    },
    "imperfektIndikativ": {
      "de": "er bog",
      "lv": "ő hajlított"
    },
    "imperfektKonjunktiv": {
      "de": "er böge",
      "lv": "ő hajlítana"
    },
    "partizipVergangenheit": {
      "de": "gebogen",
      "lv": "hajlított"
    }
  },
  {
    "infinitiv": {
      "de": "bieten",
      "lv": "kínálni"
    },
    "praesens": {
      "de": "er bietet",
      "lv": "ő kínál"
    },
    "imperfektIndikativ": {
      "de": "er bot",
      "lv": "ő kínált"
    },
    "imperfektKonjunktiv": {
      "de": "er böte",
      "lv": "ő kínálna"
    },
    "partizipVergangenheit": {
      "de": "geboten",
      "lv": "kínált"
    }
  },
  {
    "infinitiv": {
      "de": "binden",
      "lv": "kötni"
    },
    "praesens": {
      "de": "er bindet",
      "lv": "ő köt"
    },
    "imperfektIndikativ": {
      "de": "er band",
      "lv": "ő kötött"
    },
    "imperfektKonjunktiv": {
      "de": "er bände",
      "lv": "ő kötne"
    },
    "partizipVergangenheit": {
      "de": "gebunden",
      "lv": "kötött"
    }
  },
  {
    "infinitiv": {
      "de": "bitten",
      "lv": "kérni"
    },
    "praesens": {
      "de": "er bittet",
      "lv": "ő kér"
    },
    "imperfektIndikativ": {
      "de": "er bat",
      "lv": "ő kért"
    },
    "imperfektKonjunktiv": {
      "de": "er bäte",
      "lv": "ő kérne"
    },
    "partizipVergangenheit": {
      "de": "gebeten",
      "lv": "kért"
    }
  },
  {
    "infinitiv": {
      "de": "blasen",
      "lv": "fújni"
    },
    "praesens": {
      "de": "er bläst",
      "lv": "ő fúj"
    },
    "imperfektIndikativ": {
      "de": "er blies",
      "lv": "ő fújt"
    },
    "imperfektKonjunktiv": {
      "de": "er bliese",
      "lv": "ő fújna"
    },
    "partizipVergangenheit": {
      "de": "geblasen",
      "lv": "fújt"
    }
  },
  {
    "infinitiv": {
      "de": "gären",
      "lv": "erjedni"
    },
    "praesens": {
      "de": "es gärt",
      "lv": "erjed"
    },
    "imperfektIndikativ": {
      "de": "es gor / es gärte",
      "lv": "erjedt"
    },
    "imperfektKonjunktiv": {
      "de": "es göre / es gärte",
      "lv": "erjedne"
    },
    "partizipVergangenheit": {
      "de": "gegoren / gegärt",
      "lv": "erjedt"
    }
  },
  {
    "infinitiv": {
      "de": "gebären",
      "lv": "szülni"
    },
    "praesens": {
      "de": "sie gebiert",
      "lv": "ő szül"
    },
    "imperfektIndikativ": {
      "de": "sie gebar",
      "lv": "ő szült"
    },
    "imperfektKonjunktiv": {
      "de": "sie gebäre",
      "lv": "ő szülne"
    },
    "partizipVergangenheit": {
      "de": "geboren",
      "lv": "szült"
    }
  },
  {
    "infinitiv": {
      "de": "gelingen",
      "lv": "sikerülni"
    },
    "praesens": {
      "de": "es gelingt",
      "lv": "sikerül"
    },
    "imperfektIndikativ": {
      "de": "es gelang",
      "lv": "sikerült"
    },
    "imperfektKonjunktiv": {
      "de": "es gelänge",
      "lv": "sikerülne"
    },
    "partizipVergangenheit": {
      "de": "gelungen (es ist)",
      "lv": "sikerült"
    }
  },
  {
    "infinitiv": {
      "de": "gelten",
      "lv": "számítani"
    },
    "praesens": {
      "de": "er gilt",
      "lv": "ő számít"
    },
    "imperfektIndikativ": {
      "de": "er galt",
      "lv": "ő számított"
    },
    "imperfektKonjunktiv": {
      "de": "er gölte / es gälte",
      "lv": "ő számítana"
    },
    "partizipVergangenheit": {
      "de": "gegolten",
      "lv": "számított"
    }
  },
  {
    "infinitiv": {
      "de": "genesen",
      "lv": "gyógyulni"
    },
    "praesens": {
      "de": "er genest",
      "lv": "ő gyógyul"
    },
    "imperfektIndikativ": {
      "de": "er genas",
      "lv": "ő gyógyult"
    },
    "imperfektKonjunktiv": {
      "de": "er genäse",
      "lv": "ő gyógyulna"
    },
    "partizipVergangenheit": {
      "de": "genesen (er ist)",
      "lv": "gyógyult"
    }
  },
  {
    "infinitiv": {
      "de": "genießen",
      "lv": "élvezni"
    },
    "praesens": {
      "de": "er genießt",
      "lv": "ő élvez"
    },
    "imperfektIndikativ": {
      "de": "er genoss",
      "lv": "ő élvezett"
    },
    "imperfektKonjunktiv": {
      "de": "er genösse",
      "lv": "ő élvezne"
    },
    "partizipVergangenheit": {
      "de": "genossen",
      "lv": "élvezett"
    }
  },
  {
    "infinitiv": {
      "de": "geschehen",
      "lv": "történni"
    },
    "praesens": {
      "de": "es geschieht",
      "lv": "történik"
    },
    "imperfektIndikativ": {
      "de": "es geschah",
      "lv": "történt"
    },
    "imperfektKonjunktiv": {
      "de": "es geschähe",
      "lv": "történne"
    },
    "partizipVergangenheit": {
      "de": "geschehen (es ist)",
      "lv": "történt"
    }
  },
  {
    "infinitiv": {
      "de": "gießen",
      "lv": "önteni"
    },
    "praesens": {
      "de": "er gießt",
      "lv": "ő önt"
    },
    "imperfektIndikativ": {
      "de": "er goss",
      "lv": "ő öntött"
    },
    "imperfektKonjunktiv": {
      "de": "er gösse",
      "lv": "ő öntene"
    },
    "partizipVergangenheit": {
      "de": "gegossen",
      "lv": "öntött"
    }
  },
  {
    "infinitiv": {
      "de": "gleichen",
      "lv": "hasonlítani"
    },
    "praesens": {
      "de": "er gleicht",
      "lv": "ő hasonlít"
    },
    "imperfektIndikativ": {
      "de": "er glich",
      "lv": "ő hasonlított"
    },
    "imperfektKonjunktiv": {
      "de": "er gliche",
      "lv": "ő hasonlítana"
    },
    "partizipVergangenheit": {
      "de": "geglichen",
      "lv": "hasonlított"
    }
  },
  {
    "infinitiv": {
      "de": "gleiten",
      "lv": "siklani"
    },
    "praesens": {
      "de": "er gleitet",
      "lv": "ő siklik"
    },
    "imperfektIndikativ": {
      "de": "er glitt",
      "lv": "ő siklott"
    },
    "imperfektKonjunktiv": {
      "de": "er glitte",
      "lv": "ő siklana"
    },
    "partizipVergangenheit": {
      "de": "geglitten (er ist)",
      "lv": "siklott"
    }
  },
  {
    "infinitiv": {
      "de": "glimmen",
      "lv": "parázslani"
    },
    "praesens": {
      "de": "er glimmt",
      "lv": "parázslik"
    },
    "imperfektIndikativ": {
      "de": "er glimmte / glomm",
      "lv": "parázslott"
    },
    "imperfektKonjunktiv": {
      "de": "er glimmte",
      "lv": "parázslana"
    },
    "partizipVergangenheit": {
      "de": "geglimmt / geglommen",
      "lv": "parázslott"
    }
  },
  {
    "infinitiv": {
      "de": "graben",
      "lv": "ásni"
    },
    "praesens": {
      "de": "er gräbt",
      "lv": "ő ás"
    },
    "imperfektIndikativ": {
      "de": "er grub",
      "lv": "ő ásott"
    },
    "imperfektKonjunktiv": {
      "de": "er grübe",
      "lv": "ő ásna"
    },
    "partizipVergangenheit": {
      "de": "gegraben",
      "lv": "ásott"
    }
  },
  {
    "infinitiv": {
      "de": "greifen",
      "lv": "megragadni"
    },
    "praesens": {
      "de": "er greift",
      "lv": "ő megragad"
    },
    "imperfektIndikativ": {
      "de": "er griff",
      "lv": "ő megragadott"
    },
    "imperfektKonjunktiv": {
      "de": "er griffe",
      "lv": "ő megragadna"
    },
    "partizipVergangenheit": {
      "de": "gegriffen",
      "lv": "megragadott"
    }
  },
  {
    "infinitiv": {
      "de": "hauen",
      "lv": "vagdalni"
    },
    "praesens": {
      "de": "er haut",
      "lv": "ő vagdal"
    },
    "imperfektIndikativ": {
      "de": "er hieb",
      "lv": "ő vagdalt"
    },
    "imperfektKonjunktiv": {
      "de": "er hiebe",
      "lv": "ő vagdalna"
    },
    "partizipVergangenheit": {
      "de": "gehauen",
      "lv": "vagdalt"
    }
  },
  {
    "infinitiv": {
      "de": "heben",
      "lv": "emelni"
    },
    "praesens": {
      "de": "er hebt",
      "lv": "ő emel"
    },
    "imperfektIndikativ": {
      "de": "er hob",
      "lv": "ő emelt"
    },
    "imperfektKonjunktiv": {
      "de": "er höbe",
      "lv": "ő emelne"
    },
    "partizipVergangenheit": {
      "de": "gehoben",
      "lv": "emelt"
    }
  },
  {
    "infinitiv": {
      "de": "kennen",
      "lv": "ismerni / tudni"
    },
    "praesens": {
      "de": "er kennt",
      "lv": "ő ismer / tud"
    },
    "imperfektIndikativ": {
      "de": "kannte",
      "lv": "ő ismert / tudott"
    },
    "imperfektKonjunktiv": {
      "de": "kannte",
      "lv": "ő ismerne / tudna"
    },
    "partizipVergangenheit": {
      "de": "gekannt",
      "lv": "ismert / tudott"
    }
  },
  {
    "infinitiv": {
      "de": "klingen",
      "lv": "hangzani"
    },
    "praesens": {
      "de": "er klingt",
      "lv": "hangzik"
    },
    "imperfektIndikativ": {
      "de": "er klang",
      "lv": "hangzott"
    },
    "imperfektKonjunktiv": {
      "de": "er klänge",
      "lv": "hangzana"
    },
    "partizipVergangenheit": {
      "de": "geklungen",
      "lv": "hangzott"
    }
  },
  {
    "infinitiv": {
      "de": "kneifen",
      "lv": "csípni"
    },
    "praesens": {
      "de": "er kneift",
      "lv": "ő csíp"
    },
    "imperfektIndikativ": {
      "de": "er kniff",
      "lv": "ő csípett"
    },
    "imperfektKonjunktiv": {
      "de": "er kniffe",
      "lv": "ő csípne"
    },
    "partizipVergangenheit": {
      "de": "gekniffen",
      "lv": "csípett"
    }
  },
  {
    "infinitiv": {
      "de": "bleiben",
      "lv": "maradni"
    },
    "praesens": {
      "de": "er bleibt",
      "lv": "ő marad"
    },
    "imperfektIndikativ": {
      "de": "er blieb",
      "lv": "ő maradt"
    },
    "imperfektKonjunktiv": {
      "de": "er bliebe",
      "lv": "ő maradna"
    },
    "partizipVergangenheit": {
      "de": "geblieben (er ist)",
      "lv": "maradt"
    }
  },
  {
    "infinitiv": {
      "de": "bleichen",
      "lv": "fakulni"
    },
    "praesens": {
      "de": "er bleicht",
      "lv": "fakul"
    },
    "imperfektIndikativ": {
      "de": "blich",
      "lv": "fakult"
    },
    "imperfektKonjunktiv": {
      "de": "blich",
      "lv": "fakulna"
    },
    "partizipVergangenheit": {
      "de": "geblichen",
      "lv": "fakult"
    }
  },
  {
    "infinitiv": {
      "de": "braten",
      "lv": "sütni"
    },
    "praesens": {
      "de": "er brät",
      "lv": "ő süt"
    },
    "imperfektIndikativ": {
      "de": "er briet",
      "lv": "ő sütött"
    },
    "imperfektKonjunktiv": {
      "de": "er briete",
      "lv": "ő sütne"
    },
    "partizipVergangenheit": {
      "de": "gebraten",
      "lv": "sütött"
    }
  },
  {
    "infinitiv": {
      "de": "brechen",
      "lv": "törni"
    },
    "praesens": {
      "de": "er bricht",
      "lv": "ő tör"
    },
    "imperfektIndikativ": {
      "de": "er brach",
      "lv": "ő tört"
    },
    "imperfektKonjunktiv": {
      "de": "er bräche",
      "lv": "ő törne"
    },
    "partizipVergangenheit": {
      "de": "gebrochen",
      "lv": "tört"
    }
  },
  {
    "infinitiv": {
      "de": "brennen",
      "lv": "égni"
    },
    "praesens": {
      "de": "er brennt",
      "lv": "ég"
    },
    "imperfektIndikativ": {
      "de": "brannte",
      "lv": "égett"
    },
    "imperfektKonjunktiv": {
      "de": "brannte",
      "lv": "égne"
    },
    "partizipVergangenheit": {
      "de": "gebrannt",
      "lv": "égett"
    }
  },
  {
    "infinitiv": {
      "de": "bringen",
      "lv": "hozni"
    },
    "praesens": {
      "de": "er bringt",
      "lv": "ő hoz"
    },
    "imperfektIndikativ": {
      "de": "er brachte",
      "lv": "ő hozott"
    },
    "imperfektKonjunktiv": {
      "de": "er brächte",
      "lv": "ő hozna"
    },
    "partizipVergangenheit": {
      "de": "gebracht",
      "lv": "hozott"
    }
  },
  {
    "infinitiv": {
      "de": "denken",
      "lv": "gondolni"
    },
    "praesens": {
      "de": "er denkt",
      "lv": "ő gondol"
    },
    "imperfektIndikativ": {
      "de": "er dachte",
      "lv": "ő gondolt"
    },
    "imperfektKonjunktiv": {
      "de": "er dächte",
      "lv": "ő gondolna"
    },
    "partizipVergangenheit": {
      "de": "gedacht",
      "lv": "gondolt"
    }
  },
  {
    "infinitiv": {
      "de": "dingen",
      "lv": "fogadni / megegyezni"
    },
    "praesens": {
      "de": "er dingt",
      "lv": "ő fogad / megegyezik"
    },
    "imperfektIndikativ": {
      "de": "dingte",
      "lv": "ő fogadott / megegyezett"
    },
    "imperfektKonjunktiv": {
      "de": "dingte",
      "lv": "ő fogadna / megegyezne"
    },
    "partizipVergangenheit": {
      "de": "gedungen",
      "lv": "fogadott / megegyezett"
    }
  },
  {
    "infinitiv": {
      "de": "dreschen",
      "lv": "csépelni"
    },
    "praesens": {
      "de": "er drischt",
      "lv": "ő csépel"
    },
    "imperfektIndikativ": {
      "de": "er drasch / er drosch",
      "lv": "ő csépelt"
    },
    "imperfektKonjunktiv": {
      "de": "er dräsche / er drösche",
      "lv": "ő csépelne"
    },
    "partizipVergangenheit": {
      "de": "gedroschen",
      "lv": "csépelt"
    }
  },
  {
    "infinitiv": {
      "de": "dringen",
      "lv": "behatolni"
    },
    "praesens": {
      "de": "er dringt",
      "lv": "ő behatol"
    },
    "imperfektIndikativ": {
      "de": "er drang",
      "lv": "ő behatolt"
    },
    "imperfektKonjunktiv": {
      "de": "er dränge",
      "lv": "ő behatolna"
    },
    "partizipVergangenheit": {
      "de": "gedrungen (er ist)",
      "lv": "behatolt"
    }
  },
  {
    "infinitiv": {
      "de": "dünken",
      "lv": "tűnni"
    },
    "praesens": {
      "de": "es dünkt",
      "lv": "tűnik"
    },
    "imperfektIndikativ": {
      "de": "deuchte",
      "lv": "tűnt"
    },
    "imperfektKonjunktiv": {
      "de": "deuchte",
      "lv": "tűnne"
    },
    "partizipVergangenheit": {
      "de": "gedünkt",
      "lv": "tűnt"
    }
  },
  {
    "infinitiv": {
      "de": "dürfen",
      "lv": "engedélyt kapni"
    },
    "praesens": {
      "de": "er darf",
      "lv": "ő engedélyt kap"
    },
    "imperfektIndikativ": {
      "de": "durfte",
      "lv": "ő engedélyt kapott"
    },
    "imperfektKonjunktiv": {
      "de": "durfte",
      "lv": "ő engedélyt kapna"
    },
    "partizipVergangenheit": {
      "de": "gedurft",
      "lv": "engedélyt kapott"
    }
  },
  {
    "infinitiv": {
      "de": "empfehlen",
      "lv": "ajánlani"
    },
    "praesens": {
      "de": "er empfiehlt",
      "lv": "ő ajánl"
    },
    "imperfektIndikativ": {
      "de": "er empfahl",
      "lv": "ő ajánlott"
    },
    "imperfektKonjunktiv": {
      "de": "er empfähle / er empföhle",
      "lv": "ő ajánlana"
    },
    "partizipVergangenheit": {
      "de": "empfohlen",
      "lv": "ajánlott"
    }
  },
  {
    "infinitiv": {
      "de": "empfinden",
      "lv": "érezni"
    },
    "praesens": {
      "de": "er empfindet",
      "lv": "ő érez"
    },
    "imperfektIndikativ": {
      "de": "er empfand",
      "lv": "ő érzett"
    },
    "imperfektKonjunktiv": {
      "de": "er empfände",
      "lv": "ő érezne"
    },
    "partizipVergangenheit": {
      "de": "empfunden",
      "lv": "érzett"
    }
  },
  {
    "infinitiv": {
      "de": "erlöschen",
      "lv": "kialudni"
    },
    "praesens": {
      "de": "er erlischt",
      "lv": "kialszik"
    },
    "imperfektIndikativ": {
      "de": "er erlosch",
      "lv": "kialudt"
    },
    "imperfektKonjunktiv": {
      "de": "er erlösche",
      "lv": "kialudna"
    },
    "partizipVergangenheit": {
      "de": "erloschen (er ist)",
      "lv": "kialudt"
    }
  },
  {
    "infinitiv": {
      "de": "erschrecken",
      "lv": "megijedni"
    },
    "praesens": {
      "de": "er erschrickt",
      "lv": "ő megijed"
    },
    "imperfektIndikativ": {
      "de": "er erschrak",
      "lv": "ő megijedt"
    },
    "imperfektKonjunktiv": {
      "de": "er erschräke",
      "lv": "ő megijedne"
    },
    "partizipVergangenheit": {
      "de": "erschrocken (er ist)",
      "lv": "megijedt"
    }
  },
  {
    "infinitiv": {
      "de": "essen",
      "lv": "enni"
    },
    "praesens": {
      "de": "er isst",
      "lv": "ő eszik"
    },
    "imperfektIndikativ": {
      "de": "er ass",
      "lv": "ő evett"
    },
    "imperfektKonjunktiv": {
      "de": "er äße",
      "lv": "ő enne"
    },
    "partizipVergangenheit": {
      "de": "gegessen",
      "lv": "evett"
    }
  },
  {
    "infinitiv": {
      "de": "fahren",
      "lv": "utazni"
    },
    "praesens": {
      "de": "er fährt",
      "lv": "ő utazik"
    },
    "imperfektIndikativ": {
      "de": "er fuhr",
      "lv": "ő utazott"
    },
    "imperfektKonjunktiv": {
      "de": "er führe",
      "lv": "ő utazna"
    },
    "partizipVergangenheit": {
      "de": "gefahren (er ist)",
      "lv": "utazott"
    }
  },
  {
    "infinitiv": {
      "de": "fallen",
      "lv": "esni"
    },
    "praesens": {
      "de": "er fällt",
      "lv": "ő esik"
    },
    "imperfektIndikativ": {
      "de": "er fiel",
      "lv": "ő esett"
    },
    "imperfektKonjunktiv": {
      "de": "er fiele",
      "lv": "ő esne"
    },
    "partizipVergangenheit": {
      "de": "gefallen (er ist)",
      "lv": "esett"
    }
  },
  {
    "infinitiv": {
      "de": "fangen",
      "lv": "fogni"
    },
    "praesens": {
      "de": "er fängt",
      "lv": "ő fog"
    },
    "imperfektIndikativ": {
      "de": "er fing",
      "lv": "ő fogott"
    },
    "imperfektKonjunktiv": {
      "de": "er finge",
      "lv": "ő fogna"
    },
    "partizipVergangenheit": {
      "de": "gefangen",
      "lv": "fogott"
    }
  },
  {
    "infinitiv": {
      "de": "finden",
      "lv": "találni"
    },
    "praesens": {
      "de": "er findet",
      "lv": "ő talál"
    },
    "imperfektIndikativ": {
      "de": "er fand",
      "lv": "ő talált"
    },
    "imperfektKonjunktiv": {
      "de": "er fände",
      "lv": "ő találna"
    },
    "partizipVergangenheit": {
      "de": "gefunden",
      "lv": "talált"
    }
  },
  {
    "infinitiv": {
      "de": "fliegen",
      "lv": "repülni"
    },
    "praesens": {
      "de": "er fliegt",
      "lv": "ő repül"
    },
    "imperfektIndikativ": {
      "de": "er flog",
      "lv": "ő repült"
    },
    "imperfektKonjunktiv": {
      "de": "er flöge",
      "lv": "ő repülne"
    },
    "partizipVergangenheit": {
      "de": "geflogen (er ist)",
      "lv": "repült"
    }
  },
  {
    "infinitiv": {
      "de": "fliehen",
      "lv": "menekülni"
    },
    "praesens": {
      "de": "er flieht",
      "lv": "ő menekül"
    },
    "imperfektIndikativ": {
      "de": "er floh",
      "lv": "ő menekült"
    },
    "imperfektKonjunktiv": {
      "de": "er flöhe",
      "lv": "ő menekülne"
    },
    "partizipVergangenheit": {
      "de": "geflohen (er ist)",
      "lv": "menekült"
    }
  },
  {
    "infinitiv": {
      "de": "fließen",
      "lv": "folyni"
    },
    "praesens": {
      "de": "er fließt",
      "lv": "folyik"
    },
    "imperfektIndikativ": {
      "de": "er floss",
      "lv": "folyt"
    },
    "imperfektKonjunktiv": {
      "de": "er flösse",
      "lv": "folyna"
    },
    "partizipVergangenheit": {
      "de": "geflossen (er ist)",
      "lv": "folyt"
    }
  },
  {
    "infinitiv": {
      "de": "fressen",
      "lv": "enni / falni"
    },
    "praesens": {
      "de": "er frisst",
      "lv": "ő eszik / fal"
    },
    "imperfektIndikativ": {
      "de": "er frass",
      "lv": "ő evett / falt"
    },
    "imperfektKonjunktiv": {
      "de": "er fräße",
      "lv": "ő enne / falna"
    },
    "partizipVergangenheit": {
      "de": "gefressen",
      "lv": "evett / falt"
    }
  },
  {
    "infinitiv": {
      "de": "frieren",
      "lv": "fázni"
    },
    "praesens": {
      "de": "er friert",
      "lv": "ő fázik"
    },
    "imperfektIndikativ": {
      "de": "er fror",
      "lv": "ő fázott"
    },
    "imperfektKonjunktiv": {
      "de": "er fröre",
      "lv": "ő fázna"
    },
    "partizipVergangenheit": {
      "de": "gefroren",
      "lv": "fázott"
    }
  },
  {
    "infinitiv": {
      "de": "geben",
      "lv": "adni"
    },
    "praesens": {
      "de": "er gibt",
      "lv": "ő ad"
    },
    "imperfektIndikativ": {
      "de": "er gab",
      "lv": "ő adott"
    },
    "imperfektKonjunktiv": {
      "de": "er gäbe",
      "lv": "ő adna"
    },
    "partizipVergangenheit": {
      "de": "gegeben",
      "lv": "adott"
    }
  },
  {
    "infinitiv": {
      "de": "gedeihen",
      "lv": "fejlődni"
    },
    "praesens": {
      "de": "er gedeiht",
      "lv": "ő fejlődik"
    },
    "imperfektIndikativ": {
      "de": "er gedieh",
      "lv": "ő fejlődött"
    },
    "imperfektKonjunktiv": {
      "de": "er gediehe",
      "lv": "ő fejlődne"
    },
    "partizipVergangenheit": {
      "de": "gediehen (er ist)",
      "lv": "fejlődött"
    }
  },
  {
    "infinitiv": {
      "de": "gehen",
      "lv": "menni"
    },
    "praesens": {
      "de": "er geht",
      "lv": "ő megy"
    },
    "imperfektIndikativ": {
      "de": "er ging",
      "lv": "ő ment"
    },
    "imperfektKonjunktiv": {
      "de": "er ginge",
      "lv": "ő menne"
    },
    "partizipVergangenheit": {
      "de": "gegangen (er ist)",
      "lv": "ment"
    }
  },
  {
    "infinitiv": {
      "de": "gewinnen",
      "lv": "nyerni"
    },
    "praesens": {
      "de": "er gewinnt",
      "lv": "ő nyer"
    },
    "imperfektIndikativ": {
      "de": "er gewann",
      "lv": "ő nyert"
    },
    "imperfektKonjunktiv": {
      "de": "er gewönne / er gewänne",
      "lv": "ő nyerne"
    },
    "partizipVergangenheit": {
      "de": "gewonnen",
      "lv": "nyert"
    }
  },
  {
    "infinitiv": {
      "de": "haben",
      "lv": "lenni"
    },
    "praesens": {
      "de": "er hat",
      "lv": "neki van"
    },
    "imperfektIndikativ": {
      "de": "hatte",
      "lv": "neki volt"
    },
    "imperfektKonjunktiv": {
      "de": "hatte",
      "lv": "neki lenne"
    },
    "partizipVergangenheit": {
      "de": "gehabt",
      "lv": "volt"
    }
  },
  {
    "infinitiv": {
      "de": "halten",
      "lv": "tartani"
    },
    "praesens": {
      "de": "er hält",
      "lv": "ő tart"
    },
    "imperfektIndikativ": {
      "de": "er hielt",
      "lv": "ő tartott"
    },
    "imperfektKonjunktiv": {
      "de": "er hielte",
      "lv": "ő tartana"
    },
    "partizipVergangenheit": {
      "de": "gehalten",
      "lv": "tartott"
    }
  },
  {
    "infinitiv": {
      "de": "heißen",
      "lv": "hívni"
    },
    "praesens": {
      "de": "er heißt",
      "lv": "ő hív"
    },
    "imperfektIndikativ": {
      "de": "er hieß",
      "lv": "ő hívott"
    },
    "imperfektKonjunktiv": {
      "de": "er hieße",
      "lv": "ő hívna"
    },
    "partizipVergangenheit": {
      "de": "geheißen",
      "lv": "hívott"
    }
  },
  {
    "infinitiv": {
      "de": "helfen",
      "lv": "segíteni"
    },
    "praesens": {
      "de": "er hilft",
      "lv": "ő segít"
    },
    "imperfektIndikativ": {
      "de": "er half",
      "lv": "ő segített"
    },
    "imperfektKonjunktiv": {
      "de": "er hülfe / er hälfe",
      "lv": "ő segítene"
    },
    "partizipVergangenheit": {
      "de": "geholfen",
      "lv": "segített"
    }
  },
  {
    "infinitiv": {
      "de": "kommen",
      "lv": "jönni"
    },
    "praesens": {
      "de": "er kommt",
      "lv": "ő jön"
    },
    "imperfektIndikativ": {
      "de": "er kam",
      "lv": "ő jött"
    },
    "imperfektKonjunktiv": {
      "de": "er käme",
      "lv": "ő jönne"
    },
    "partizipVergangenheit": {
      "de": "gekommen (er ist)",
      "lv": "jött"
    }
  },
  {
    "infinitiv": {
      "de": "können",
      "lv": "tudni"
    },
    "praesens": {
      "de": "er kann",
      "lv": "ő tud"
    },
    "imperfektIndikativ": {
      "de": "konnte",
      "lv": "ő tudott"
    },
    "imperfektKonjunktiv": {
      "de": "konnte",
      "lv": "ő tudna"
    },
    "partizipVergangenheit": {
      "de": "gekonnt",
      "lv": "tudott"
    }
  },
  {
    "infinitiv": {
      "de": "kriechen",
      "lv": "kúszni"
    },
    "praesens": {
      "de": "er kriecht",
      "lv": "ő kúszik"
    },
    "imperfektIndikativ": {
      "de": "er kroch",
      "lv": "ő kúszott"
    },
    "imperfektKonjunktiv": {
      "de": "er kröche",
      "lv": "ő kúszna"
    },
    "partizipVergangenheit": {
      "de": "gekrochen (er ist)",
      "lv": "kúszott"
    }
  },
  {
    "infinitiv": {
      "de": "laden",
      "lv": "rakni / hívni"
    },
    "praesens": {
      "de": "er lädt",
      "lv": "ő rak / hív"
    },
    "imperfektIndikativ": {
      "de": "er lud",
      "lv": "ő rakott / hívott"
    },
    "imperfektKonjunktiv": {
      "de": "er lüde",
      "lv": "ő rakna / hívna"
    },
    "partizipVergangenheit": {
      "de": "geladen",
      "lv": "rakott / hívott"
    }
  },
  {
    "infinitiv": {
      "de": "lassen",
      "lv": "utasítani / engedni"
    },
    "praesens": {
      "de": "er lässt",
      "lv": "ő utasít / enged"
    },
    "imperfektIndikativ": {
      "de": "er ließ",
      "lv": "ő utasított / engedett"
    },
    "imperfektKonjunktiv": {
      "de": "er ließe",
      "lv": "ő utasítana / engedne"
    },
    "partizipVergangenheit": {
      "de": "gelassen",
      "lv": "utasított / engedett"
    }
  },
  {
    "infinitiv": {
      "de": "laufen",
      "lv": "futni"
    },
    "praesens": {
      "de": "er läuft",
      "lv": "ő fut"
    },
    "imperfektIndikativ": {
      "de": "er lief",
      "lv": "ő futott"
    },
    "imperfektKonjunktiv": {
      "de": "er liefe",
      "lv": "ő futna"
    },
    "partizipVergangenheit": {
      "de": "gelaufen (er ist)",
      "lv": "futott"
    }
  },
  {
    "infinitiv": {
      "de": "leiden",
      "lv": "szenvedni"
    },
    "praesens": {
      "de": "er leidet",
      "lv": "ő szenved"
    },
    "imperfektIndikativ": {
      "de": "er litt",
      "lv": "ő szenvedett"
    },
    "imperfektKonjunktiv": {
      "de": "er litte",
      "lv": "ő szenvedne"
    },
    "partizipVergangenheit": {
      "de": "gelitten",
      "lv": "szenvedett"
    }
  },
  {
    "infinitiv": {
      "de": "leihen",
      "lv": "kölcsönözni"
    },
    "praesens": {
      "de": "er leiht",
      "lv": "ő kölcsönöz"
    },
    "imperfektIndikativ": {
      "de": "er lieh",
      "lv": "ő kölcsönzött"
    },
    "imperfektKonjunktiv": {
      "de": "er liehe",
      "lv": "ő kölcsönözne"
    },
    "partizipVergangenheit": {
      "de": "geliehen",
      "lv": "kölcsönzött"
    }
  },
  {
    "infinitiv": {
      "de": "lesen",
      "lv": "olvasni"
    },
    "praesens": {
      "de": "er liest",
      "lv": "ő olvas"
    },
    "imperfektIndikativ": {
      "de": "er las",
      "lv": "ő olvasott"
    },
    "imperfektKonjunktiv": {
      "de": "er läse",
      "lv": "ő olvasna"
    },
    "partizipVergangenheit": {
      "de": "gelesen",
      "lv": "olvasott"
    }
  },
  {
    "infinitiv": {
      "de": "liegen",
      "lv": "feküdni"
    },
    "praesens": {
      "de": "er liegt",
      "lv": "ő fekszik"
    },
    "imperfektIndikativ": {
      "de": "er lag",
      "lv": "ő feküdt"
    },
    "imperfektKonjunktiv": {
      "de": "er läge",
      "lv": "ő feküdne"
    },
    "partizipVergangenheit": {
      "de": "gelegen",
      "lv": "feküdt"
    }
  },
  {
    "infinitiv": {
      "de": "lügen",
      "lv": "hazudni"
    },
    "praesens": {
      "de": "er lügt",
      "lv": "ő hazudik"
    },
    "imperfektIndikativ": {
      "de": "er log",
      "lv": "ő hazudott"
    },
    "imperfektKonjunktiv": {
      "de": "er löge",
      "lv": "ő hazudna"
    },
    "partizipVergangenheit": {
      "de": "gelogen",
      "lv": "hazudott"
    }
  },
  {
    "infinitiv": {
      "de": "mahlen",
      "lv": "őrölni"
    },
    "praesens": {
      "de": "er mahlt",
      "lv": "ő őröl"
    },
    "imperfektIndikativ": {
      "de": "er mahlte",
      "lv": "ő őrölt"
    },
    "imperfektKonjunktiv": {
      "de": "er malte",
      "lv": "ő őrölne"
    },
    "partizipVergangenheit": {
      "de": "gemahlen",
      "lv": "őrölt"
    }
  },
  {
    "infinitiv": {
      "de": "meiden",
      "lv": "kerülni"
    },
    "praesens": {
      "de": "er meidet",
      "lv": "ő kerül"
    },
    "imperfektIndikativ": {
      "de": "er mied",
      "lv": "ő került"
    },
    "imperfektKonjunktiv": {
      "de": "er miede",
      "lv": "ő kerülne"
    },
    "partizipVergangenheit": {
      "de": "gemieden",
      "lv": "került"
    }
  },
  {
    "infinitiv": {
      "de": "melken",
      "lv": "fejni"
    },
    "praesens": {
      "de": "er milkt / er melkt",
      "lv": "ő fej"
    },
    "imperfektIndikativ": {
      "de": "er molk / er melkte",
      "lv": "ő fejt"
    },
    "imperfektKonjunktiv": {
      "de": "er mölke / er melkte",
      "lv": "ő fejne"
    },
    "partizipVergangenheit": {
      "de": "gemolken / gemelkt",
      "lv": "fejt"
    }
  },
  {
    "infinitiv": {
      "de": "messen",
      "lv": "mérni"
    },
    "praesens": {
      "de": "er misst",
      "lv": "ő mér"
    },
    "imperfektIndikativ": {
      "de": "er mass",
      "lv": "ő mért"
    },
    "imperfektKonjunktiv": {
      "de": "er mäße",
      "lv": "ő mérne"
    },
    "partizipVergangenheit": {
      "de": "gemessen",
      "lv": "mért"
    }
  },
  {
    "infinitiv": {
      "de": "misslingen",
      "lv": "nem sikerülni"
    },
    "praesens": {
      "de": "es misslingt",
      "lv": "nem sikerül"
    },
    "imperfektIndikativ": {
      "de": "misslang",
      "lv": "nem sikerült"
    },
    "imperfektKonjunktiv": {
      "de": "misslang",
      "lv": "nem sikerülne"
    },
    "partizipVergangenheit": {
      "de": "misslungen",
      "lv": "nem sikerült"
    }
  },
  {
    "infinitiv": {
      "de": "mögen",
      "lv": "tetszeni"
    },
    "praesens": {
      "de": "er mag",
      "lv": "neki tetszik"
    },
    "imperfektIndikativ": {
      "de": "mochte",
      "lv": "neki tetszett"
    },
    "imperfektKonjunktiv": {
      "de": "mochte",
      "lv": "neki tetszene"
    },
    "partizipVergangenheit": {
      "de": "gemocht",
      "lv": "tetszett"
    }
  },
  {
    "infinitiv": {
      "de": "müssen",
      "lv": "kelleni"
    },
    "praesens": {
      "de": "er muss",
      "lv": "neki kell"
    },
    "imperfektIndikativ": {
      "de": "musste",
      "lv": "neki kellett"
    },
    "imperfektKonjunktiv": {
      "de": "musste",
      "lv": "neki kellene"
    },
    "partizipVergangenheit": {
      "de": "gemusst",
      "lv": "kellett"
    }
  },
  {
    "infinitiv": {
      "de": "nehmen",
      "lv": "venni"
    },
    "praesens": {
      "de": "er nimmt",
      "lv": "ő vesz"
    },
    "imperfektIndikativ": {
      "de": "er nahm",
      "lv": "ő vett"
    },
    "imperfektKonjunktiv": {
      "de": "er nähme",
      "lv": "ő venne"
    },
    "partizipVergangenheit": {
      "de": "genommen",
      "lv": "vett"
    }
  },
  {
    "infinitiv": {
      "de": "nennen",
      "lv": "nevezni"
    },
    "praesens": {
      "de": "er nennt",
      "lv": "ő nevez"
    },
    "imperfektIndikativ": {
      "de": "er nannte",
      "lv": "ő nevezett"
    },
    "imperfektKonjunktiv": {
      "de": "er nennte",
      "lv": "ő nevezne"
    },
    "partizipVergangenheit": {
      "de": "genannt",
      "lv": "nevezett"
    }
  },
  {
    "infinitiv": {
      "de": "pfeifen",
      "lv": "fütyülni"
    },
    "praesens": {
      "de": "er pfeift",
      "lv": "ő fütyül"
    },
    "imperfektIndikativ": {
      "de": "er pfiff",
      "lv": "ő fütyült"
    },
    "imperfektKonjunktiv": {
      "de": "er pfiffe",
      "lv": "ő fütyülne"
    },
    "partizipVergangenheit": {
      "de": "gepfiffen",
      "lv": "fütyült"
    }
  },
  {
    "infinitiv": {
      "de": "pflegen",
      "lv": "gondozni"
    },
    "praesens": {
      "de": "er pflegt",
      "lv": "ő gondoz"
    },
    "imperfektIndikativ": {
      "de": "pflegte / pflog",
      "lv": "ő gondozott"
    },
    "imperfektKonjunktiv": {
      "de": "pflegte / pflog",
      "lv": "ő gondozna"
    },
    "partizipVergangenheit": {
      "de": "gepflegt / gepflogen",
      "lv": "gondozott"
    }
  },
  {
    "infinitiv": {
      "de": "preisen",
      "lv": "dicsérni"
    },
    "praesens": {
      "de": "er preist",
      "lv": "ő dicsér"
    },
    "imperfektIndikativ": {
      "de": "er pries",
      "lv": "ő dicsért"
    },
    "imperfektKonjunktiv": {
      "de": "er priese",
      "lv": "ő dicsérne"
    },
    "partizipVergangenheit": {
      "de": "gepriesen",
      "lv": "dicsért"
    }
  },
  {
    "infinitiv": {
      "de": "quellen",
      "lv": "duzzadni"
    },
    "praesens": {
      "de": "er quillt",
      "lv": "duzzad"
    },
    "imperfektIndikativ": {
      "de": "er quoll",
      "lv": "duzzadt"
    },
    "imperfektKonjunktiv": {
      "de": "er quölle",
      "lv": "duzzadna"
    },
    "partizipVergangenheit": {
      "de": "gequollen (er ist)",
      "lv": "duzzadt"
    }
  },
  {
    "infinitiv": {
      "de": "raten",
      "lv": "tanácsolni / találgatni"
    },
    "praesens": {
      "de": "er rät",
      "lv": "ő tanácsol / találgat"
    },
    "imperfektIndikativ": {
      "de": "er riet",
      "lv": "ő tanácsolt / találgatott"
    },
    "imperfektKonjunktiv": {
      "de": "er riete",
      "lv": "ő tanácsolna / találgatna"
    },
    "partizipVergangenheit": {
      "de": "geraten",
      "lv": "tanácsolt / találgatott"
    }
  },
  {
    "infinitiv": {
      "de": "reiben",
      "lv": "dörzsölni"
    },
    "praesens": {
      "de": "er reibt",
      "lv": "ő dörzsöl"
    },
    "imperfektIndikativ": {
      "de": "er rieb",
      "lv": "ő dörzsölt"
    },
    "imperfektKonjunktiv": {
      "de": "er riebe",
      "lv": "ő dörzsölne"
    },
    "partizipVergangenheit": {
      "de": "gerieben",
      "lv": "dörzsölt"
    }
  },
  {
    "infinitiv": {
      "de": "reißen",
      "lv": "tépni"
    },
    "praesens": {
      "de": "er reißt",
      "lv": "ő tép"
    },
    "imperfektIndikativ": {
      "de": "er riss",
      "lv": "ő tépett"
    },
    "imperfektKonjunktiv": {
      "de": "er risse",
      "lv": "ő tépne"
    },
    "partizipVergangenheit": {
      "de": "gerissen",
      "lv": "tépett"
    }
  },
  {
    "infinitiv": {
      "de": "reiten",
      "lv": "lovagolni"
    },
    "praesens": {
      "de": "er reitet",
      "lv": "ő lovagol"
    },
    "imperfektIndikativ": {
      "de": "er ritt",
      "lv": "ő lovagolt"
    },
    "imperfektKonjunktiv": {
      "de": "er ritte",
      "lv": "ő lovagolna"
    },
    "partizipVergangenheit": {
      "de": "geritten (er ist)",
      "lv": "lovagolt"
    }
  },
  {
    "infinitiv": {
      "de": "rennen",
      "lv": "rohanni"
    },
    "praesens": {
      "de": "er rennt",
      "lv": "ő rohan"
    },
    "imperfektIndikativ": {
      "de": "er rannte",
      "lv": "ő rohant"
    },
    "imperfektKonjunktiv": {
      "de": "er rennte",
      "lv": "ő rohanna"
    },
    "partizipVergangenheit": {
      "de": "gerannt",
      "lv": "rohant"
    }
  },
  {
    "infinitiv": {
      "de": "riechen",
      "lv": "szagolni"
    },
    "praesens": {
      "de": "er riecht",
      "lv": "ő szagol"
    },
    "imperfektIndikativ": {
      "de": "er roch",
      "lv": "ő szagolt"
    },
    "imperfektKonjunktiv": {
      "de": "er röche",
      "lv": "ő szagolna"
    },
    "partizipVergangenheit": {
      "de": "gerochen",
      "lv": "szagolt"
    }
  },
  {
    "infinitiv": {
      "de": "ringen",
      "lv": "birkózni"
    },
    "praesens": {
      "de": "er ringt",
      "lv": "ő birkózik"
    },
    "imperfektIndikativ": {
      "de": "er rang",
      "lv": "ő birkózott"
    },
    "imperfektKonjunktiv": {
      "de": "er ränge",
      "lv": "ő birkózna"
    },
    "partizipVergangenheit": {
      "de": "gerungen",
      "lv": "birkózott"
    }
  },
  {
    "infinitiv": {
      "de": "rinnen",
      "lv": "folyni"
    },
    "praesens": {
      "de": "er rinnt",
      "lv": "folyik"
    },
    "imperfektIndikativ": {
      "de": "er rann",
      "lv": "folyt"
    },
    "imperfektKonjunktiv": {
      "de": "er ränne / er rönne",
      "lv": "folyna"
    },
    "partizipVergangenheit": {
      "de": "geronnen (er ist)",
      "lv": "folyt"
    }
  },
  {
    "infinitiv": {
      "de": "rufen",
      "lv": "hívni"
    },
    "praesens": {
      "de": "er ruft",
      "lv": "ő hív"
    },
    "imperfektIndikativ": {
      "de": "er rief",
      "lv": "ő hívott"
    },
    "imperfektKonjunktiv": {
      "de": "er riefe",
      "lv": "ő hívna"
    },
    "partizipVergangenheit": {
      "de": "gerufen",
      "lv": "hívott"
    }
  },
  {
    "infinitiv": {
      "de": "salzen",
      "lv": "sózni"
    },
    "praesens": {
      "de": "er salzt",
      "lv": "ő sóz"
    },
    "imperfektIndikativ": {
      "de": "er salzte",
      "lv": "ő sózott"
    },
    "imperfektKonjunktiv": {
      "de": "er salzte",
      "lv": "ő sózna"
    },
    "partizipVergangenheit": {
      "de": "gesalzen",
      "lv": "sózott"
    }
  },
  {
    "infinitiv": {
      "de": "saufen",
      "lv": "inni"
    },
    "praesens": {
      "de": "er säuft",
      "lv": "ő iszik"
    },
    "imperfektIndikativ": {
      "de": "er soff",
      "lv": "ő ivott"
    },
    "imperfektKonjunktiv": {
      "de": "er söffe",
      "lv": "ő inna"
    },
    "partizipVergangenheit": {
      "de": "gesoffen",
      "lv": "ivott"
    }
  },
  {
    "infinitiv": {
      "de": "saugen",
      "lv": "szívni"
    },
    "praesens": {
      "de": "er saugt",
      "lv": "ő szív"
    },
    "imperfektIndikativ": {
      "de": "er sog",
      "lv": "ő szívott"
    },
    "imperfektKonjunktiv": {
      "de": "er söge",
      "lv": "ő szívna"
    },
    "partizipVergangenheit": {
      "de": "gesogen",
      "lv": "szívott"
    }
  },
  {
    "infinitiv": {
      "de": "schaffen",
      "lv": "teremteni"
    },
    "praesens": {
      "de": "er schafft",
      "lv": "ő teremt"
    },
    "imperfektIndikativ": {
      "de": "er schuf",
      "lv": "ő teremtett"
    },
    "imperfektKonjunktiv": {
      "de": "er schüfe",
      "lv": "ő teremtene"
    },
    "partizipVergangenheit": {
      "de": "geschaffen",
      "lv": "teremtett"
    }
  },
  {
    "infinitiv": {
      "de": "schallen",
      "lv": "hangzani"
    },
    "praesens": {
      "de": "es schallt",
      "lv": "hangzik"
    },
    "imperfektIndikativ": {
      "de": "schallte / scholl",
      "lv": "hangzott"
    },
    "imperfektKonjunktiv": {
      "de": "schallte / scholl",
      "lv": "hangzana"
    },
    "partizipVergangenheit": {
      "de": "geschallt",
      "lv": "hangzott"
    }
  },
  {
    "infinitiv": {
      "de": "scheiden",
      "lv": "elválasztani / elválni"
    },
    "praesens": {
      "de": "er scheidet",
      "lv": "ő elválaszt / elválik"
    },
    "imperfektIndikativ": {
      "de": "er schied",
      "lv": "ő elválasztott / elvált"
    },
    "imperfektKonjunktiv": {
      "de": "er schiede",
      "lv": "ő elválasztana / elválna"
    },
    "partizipVergangenheit": {
      "de": "geschieden (er hat / er ist)",
      "lv": "elválasztott / elvált"
    }
  },
  {
    "infinitiv": {
      "de": "scheinen",
      "lv": "ragyogni / tűnni"
    },
    "praesens": {
      "de": "er scheint",
      "lv": "ő ragyog / tűnik"
    },
    "imperfektIndikativ": {
      "de": "er schien",
      "lv": "ő ragyogott / tűnt"
    },
    "imperfektKonjunktiv": {
      "de": "er schiene",
      "lv": "ő ragyogna / tűnne"
    },
    "partizipVergangenheit": {
      "de": "geschienen",
      "lv": "ragyogott / tűnt"
    }
  },
  {
    "infinitiv": {
      "de": "schelten",
      "lv": "szidni"
    },
    "praesens": {
      "de": "er schilt",
      "lv": "ő szid"
    },
    "imperfektIndikativ": {
      "de": "er schalt",
      "lv": "ő szidott"
    },
    "imperfektKonjunktiv": {
      "de": "er schölte / er schälte",
      "lv": "ő szidna"
    },
    "partizipVergangenheit": {
      "de": "gescholten",
      "lv": "szidott"
    }
  },
  {
    "infinitiv": {
      "de": "scheren",
      "lv": "nyírni"
    },
    "praesens": {
      "de": "er schert",
      "lv": "ő nyír"
    },
    "imperfektIndikativ": {
      "de": "schor / scherte",
      "lv": "ő nyírt"
    },
    "imperfektKonjunktiv": {
      "de": "schor / scherte",
      "lv": "ő nyírna"
    },
    "partizipVergangenheit": {
      "de": "geschoren / geschert",
      "lv": "nyírt"
    }
  },
  {
    "infinitiv": {
      "de": "schieben",
      "lv": "tolni"
    },
    "praesens": {
      "de": "er schiebt",
      "lv": "ő tol"
    },
    "imperfektIndikativ": {
      "de": "er schob",
      "lv": "ő tolt"
    },
    "imperfektKonjunktiv": {
      "de": "er schöbe",
      "lv": "ő tolna"
    },
    "partizipVergangenheit": {
      "de": "geschoben",
      "lv": "tolt"
    }
  },
  {
    "infinitiv": {
      "de": "schießen",
      "lv": "lőni"
    },
    "praesens": {
      "de": "er schießt",
      "lv": "ő lő"
    },
    "imperfektIndikativ": {
      "de": "er schoss",
      "lv": "ő lőtt"
    },
    "imperfektKonjunktiv": {
      "de": "er schösse",
      "lv": "ő lőne"
    },
    "partizipVergangenheit": {
      "de": "geschossen",
      "lv": "lőtt"
    }
  },
  {
    "infinitiv": {
      "de": "schinden",
      "lv": "kínozni"
    },
    "praesens": {
      "de": "er schindet",
      "lv": "ő kínoz"
    },
    "imperfektIndikativ": {
      "de": "schindete",
      "lv": "ő kínozott"
    },
    "imperfektKonjunktiv": {
      "de": "schindete",
      "lv": "ő kínozna"
    },
    "partizipVergangenheit": {
      "de": "geschunden",
      "lv": "kínozott"
    }
  },
  {
    "infinitiv": {
      "de": "schlafen",
      "lv": "aludni"
    },
    "praesens": {
      "de": "er schläft",
      "lv": "ő alszik"
    },
    "imperfektIndikativ": {
      "de": "er schlief",
      "lv": "ő aludt"
    },
    "imperfektKonjunktiv": {
      "de": "er schliefe",
      "lv": "ő aludna"
    },
    "partizipVergangenheit": {
      "de": "geschlafen",
      "lv": "aludt"
    }
  },
  {
    "infinitiv": {
      "de": "schlagen",
      "lv": "ütni"
    },
    "praesens": {
      "de": "er schlägt",
      "lv": "ő üt"
    },
    "imperfektIndikativ": {
      "de": "er schlug",
      "lv": "ő ütött"
    },
    "imperfektKonjunktiv": {
      "de": "er schlüge",
      "lv": "ő ütne"
    },
    "partizipVergangenheit": {
      "de": "geschlagen",
      "lv": "ütött"
    }
  },
  {
    "infinitiv": {
      "de": "schleichen",
      "lv": "osonni"
    },
    "praesens": {
      "de": "er schleicht",
      "lv": "ő oson"
    },
    "imperfektIndikativ": {
      "de": "er schlich",
      "lv": "ő osont"
    },
    "imperfektKonjunktiv": {
      "de": "er schliche",
      "lv": "ő osonna"
    },
    "partizipVergangenheit": {
      "de": "geschlichen (er ist)",
      "lv": "osont"
    }
  },
  {
    "infinitiv": {
      "de": "schleifen",
      "lv": "csiszolni"
    },
    "praesens": {
      "de": "er schleift",
      "lv": "ő csiszol"
    },
    "imperfektIndikativ": {
      "de": "er schliff",
      "lv": "ő csiszolt"
    },
    "imperfektKonjunktiv": {
      "de": "er schliffe",
      "lv": "ő csiszolna"
    },
    "partizipVergangenheit": {
      "de": "geschliffen",
      "lv": "csiszolt"
    }
  },
  {
    "infinitiv": {
      "de": "schließen",
      "lv": "zárni"
    },
    "praesens": {
      "de": "er schließt",
      "lv": "ő zár"
    },
    "imperfektIndikativ": {
      "de": "er schloss",
      "lv": "ő zárt"
    },
    "imperfektKonjunktiv": {
      "de": "er schlösse",
      "lv": "ő zárna"
    },
    "partizipVergangenheit": {
      "de": "geschlossen",
      "lv": "zárt"
    }
  },
  {
    "infinitiv": {
      "de": "schlingen",
      "lv": "nyelni"
    },
    "praesens": {
      "de": "er schlingt",
      "lv": "ő nyel"
    },
    "imperfektIndikativ": {
      "de": "er schlang",
      "lv": "ő nyelt"
    },
    "imperfektKonjunktiv": {
      "de": "er schlänge",
      "lv": "ő nyelne"
    },
    "partizipVergangenheit": {
      "de": "geschlungen",
      "lv": "nyelt"
    }
  },
  {
    "infinitiv": {
      "de": "schmeißen",
      "lv": "dobni"
    },
    "praesens": {
      "de": "er schmeißt",
      "lv": "ő dob"
    },
    "imperfektIndikativ": {
      "de": "er schmiss",
      "lv": "ő dobott"
    },
    "imperfektKonjunktiv": {
      "de": "er schmisse",
      "lv": "ő dobna"
    },
    "partizipVergangenheit": {
      "de": "geschmissen",
      "lv": "dobott"
    }
  },
  {
    "infinitiv": {
      "de": "schmelzen",
      "lv": "olvadni"
    },
    "praesens": {
      "de": "er schmilzt",
      "lv": "olvad"
    },
    "imperfektIndikativ": {
      "de": "er schmolz",
      "lv": "olvadt"
    },
    "imperfektKonjunktiv": {
      "de": "er schmölze",
      "lv": "olvadna"
    },
    "partizipVergangenheit": {
      "de": "geschmolzen (er ist)",
      "lv": "olvadt"
    }
  },
  {
    "infinitiv": {
      "de": "schnauben",
      "lv": "horkantani"
    },
    "praesens": {
      "de": "er schnaubt",
      "lv": "ő horkant"
    },
    "imperfektIndikativ": {
      "de": "schnaubte / schnob",
      "lv": "ő horkantott"
    },
    "imperfektKonjunktiv": {
      "de": "schnaubte / schnob",
      "lv": "ő horkantana"
    },
    "partizipVergangenheit": {
      "de": "geschnaubt / geschnoben",
      "lv": "horkantott"
    }
  },
  {
    "infinitiv": {
      "de": "schneiden",
      "lv": "vágni"
    },
    "praesens": {
      "de": "er schneidet",
      "lv": "ő vág"
    },
    "imperfektIndikativ": {
      "de": "er schnitt",
      "lv": "ő vágott"
    },
    "imperfektKonjunktiv": {
      "de": "er schnitte",
      "lv": "ő vágna"
    },
    "partizipVergangenheit": {
      "de": "geschnitten",
      "lv": "vágott"
    }
  },
  {
    "infinitiv": {
      "de": "schreiben",
      "lv": "írni"
    },
    "praesens": {
      "de": "er schreibt",
      "lv": "ő ír"
    },
    "imperfektIndikativ": {
      "de": "er schrieb",
      "lv": "ő írt"
    },
    "imperfektKonjunktiv": {
      "de": "er schriebe",
      "lv": "ő írna"
    },
    "partizipVergangenheit": {
      "de": "geschrieben",
      "lv": "írt"
    }
  },
  {
    "infinitiv": {
      "de": "schreien",
      "lv": "kiabálni"
    },
    "praesens": {
      "de": "er schreit",
      "lv": "ő kiabál"
    },
    "imperfektIndikativ": {
      "de": "er schrie",
      "lv": "ő kiabált"
    },
    "imperfektKonjunktiv": {
      "de": "er schriee",
      "lv": "ő kiabálna"
    },
    "partizipVergangenheit": {
      "de": "geschrien",
      "lv": "kiabált"
    }
  },
  {
    "infinitiv": {
      "de": "schreiten",
      "lv": "lépkedni"
    },
    "praesens": {
      "de": "er schreitet",
      "lv": "ő lépked"
    },
    "imperfektIndikativ": {
      "de": "er schritt",
      "lv": "ő lépkedett"
    },
    "imperfektKonjunktiv": {
      "de": "er schritte",
      "lv": "ő lépkedne"
    },
    "partizipVergangenheit": {
      "de": "geschritten (er ist)",
      "lv": "lépkedett"
    }
  },
  {
    "infinitiv": {
      "de": "schweigen",
      "lv": "hallgatni"
    },
    "praesens": {
      "de": "er schweigt",
      "lv": "ő hallgat"
    },
    "imperfektIndikativ": {
      "de": "er schwieg",
      "lv": "ő hallgatott"
    },
    "imperfektKonjunktiv": {
      "de": "er schwiege",
      "lv": "ő hallgatna"
    },
    "partizipVergangenheit": {
      "de": "geschwiegen",
      "lv": "hallgatott"
    }
  },
  {
    "infinitiv": {
      "de": "schwellen",
      "lv": "dagadni"
    },
    "praesens": {
      "de": "er schwillt",
      "lv": "dagad"
    },
    "imperfektIndikativ": {
      "de": "er schwoll",
      "lv": "dagadt"
    },
    "imperfektKonjunktiv": {
      "de": "er schwölle",
      "lv": "dagadna"
    },
    "partizipVergangenheit": {
      "de": "geschwollen (er ist)",
      "lv": "dagadt"
    }
  },
  {
    "infinitiv": {
      "de": "schwimmen",
      "lv": "úszni"
    },
    "praesens": {
      "de": "er schwimmt",
      "lv": "ő úszik"
    },
    "imperfektIndikativ": {
      "de": "er schwamm",
      "lv": "ő úszott"
    },
    "imperfektKonjunktiv": {
      "de": "er schwömme / er schwämme",
      "lv": "ő úszna"
    },
    "partizipVergangenheit": {
      "de": "geschwommen (er ist)",
      "lv": "úszott"
    }
  },
  {
    "infinitiv": {
      "de": "schwinden",
      "lv": "eltűnni"
    },
    "praesens": {
      "de": "er schwindet",
      "lv": "eltűnik"
    },
    "imperfektIndikativ": {
      "de": "er schwand",
      "lv": "eltűnt"
    },
    "imperfektKonjunktiv": {
      "de": "er schwände",
      "lv": "eltűnne"
    },
    "partizipVergangenheit": {
      "de": "geschwunden (er ist)",
      "lv": "eltűnt"
    }
  },
  {
    "infinitiv": {
      "de": "schwingen",
      "lv": "lengetni"
    },
    "praesens": {
      "de": "er schwingt",
      "lv": "ő lenget"
    },
    "imperfektIndikativ": {
      "de": "er schwang",
      "lv": "ő lengetett"
    },
    "imperfektKonjunktiv": {
      "de": "er schwänge",
      "lv": "ő lengetne"
    },
    "partizipVergangenheit": {
      "de": "geschwungen",
      "lv": "lengetett"
    }
  },
  {
    "infinitiv": {
      "de": "schwören",
      "lv": "esküdni"
    },
    "praesens": {
      "de": "er schwört",
      "lv": "ő esküszik"
    },
    "imperfektIndikativ": {
      "de": "er schwur / er schwor",
      "lv": "ő esküdött"
    },
    "imperfektKonjunktiv": {
      "de": "er schwöre",
      "lv": "ő esküdne"
    },
    "partizipVergangenheit": {
      "de": "geschworen",
      "lv": "esküdött"
    }
  },
  {
    "infinitiv": {
      "de": "sehen",
      "lv": "látni"
    },
    "praesens": {
      "de": "er sieht",
      "lv": "ő lát"
    },
    "imperfektIndikativ": {
      "de": "er sah",
      "lv": "ő látott"
    },
    "imperfektKonjunktiv": {
      "de": "er sähe",
      "lv": "ő látna"
    },
    "partizipVergangenheit": {
      "de": "gesehen",
      "lv": "látott"
    }
  },
  {
    "infinitiv": {
      "de": "sein",
      "lv": "lenni"
    },
    "praesens": {
      "de": "er ist",
      "lv": "ő van"
    },
    "imperfektIndikativ": {
      "de": "war",
      "lv": "ő volt"
    },
    "imperfektKonjunktiv": {
      "de": "war",
      "lv": "ő lenne"
    },
    "partizipVergangenheit": {
      "de": "gewesen",
      "lv": "volt"
    }
  },
  {
    "infinitiv": {
      "de": "senden",
      "lv": "küldeni"
    },
    "praesens": {
      "de": "er sendet",
      "lv": "ő küld"
    },
    "imperfektIndikativ": {
      "de": "er sandte / er sendete",
      "lv": "ő küldött"
    },
    "imperfektKonjunktiv": {
      "de": "er sendete",
      "lv": "ő küldene"
    },
    "partizipVergangenheit": {
      "de": "gesandt / gesendet",
      "lv": "küldött"
    }
  },
  {
    "infinitiv": {
      "de": "sieden",
      "lv": "főzni"
    },
    "praesens": {
      "de": "er siedet",
      "lv": "ő főz"
    },
    "imperfektIndikativ": {
      "de": "sott / siedete",
      "lv": "ő főzött"
    },
    "imperfektKonjunktiv": {
      "de": "sott / siedete",
      "lv": "ő főzne"
    },
    "partizipVergangenheit": {
      "de": "gesotten / gesiedet",
      "lv": "főzött"
    }
  },
  {
    "infinitiv": {
      "de": "singen",
      "lv": "énekelni"
    },
    "praesens": {
      "de": "er singt",
      "lv": "ő énekel"
    },
    "imperfektIndikativ": {
      "de": "er sang",
      "lv": "ő énekelt"
    },
    "imperfektKonjunktiv": {
      "de": "er sänge",
      "lv": "ő énekelne"
    },
    "partizipVergangenheit": {
      "de": "gesungen",
      "lv": "énekelt"
    }
  },
  {
    "infinitiv": {
      "de": "sinken",
      "lv": "süllyedni"
    },
    "praesens": {
      "de": "er sinkt",
      "lv": "ő süllyed"
    },
    "imperfektIndikativ": {
      "de": "er sank",
      "lv": "ő süllyedt"
    },
    "imperfektKonjunktiv": {
      "de": "er sänke",
      "lv": "ő süllyedne"
    },
    "partizipVergangenheit": {
      "de": "gesunken (er ist)",
      "lv": "süllyedt"
    }
  },
  {
    "infinitiv": {
      "de": "sinnen",
      "lv": "töprengeni"
    },
    "praesens": {
      "de": "er sinnt",
      "lv": "ő töpreng"
    },
    "imperfektIndikativ": {
      "de": "er sann",
      "lv": "ő töprengett"
    },
    "imperfektKonjunktiv": {
      "de": "er sönne / er sänne",
      "lv": "ő töprengene"
    },
    "partizipVergangenheit": {
      "de": "gesonnen",
      "lv": "töprengett"
    }
  },
  {
    "infinitiv": {
      "de": "sitzen",
      "lv": "ülni"
    },
    "praesens": {
      "de": "er sitzt",
      "lv": "ő ül"
    },
    "imperfektIndikativ": {
      "de": "er sass",
      "lv": "ő ült"
    },
    "imperfektKonjunktiv": {
      "de": "er säße",
      "lv": "ő ülne"
    },
    "partizipVergangenheit": {
      "de": "gesessen",
      "lv": "ült"
    }
  },
  {
    "infinitiv": {
      "de": "sollen",
      "lv": "kelleni"
    },
    "praesens": {
      "de": "er soll",
      "lv": "neki kell"
    },
    "imperfektIndikativ": {
      "de": "sollte",
      "lv": "neki kellett"
    },
    "imperfektKonjunktiv": {
      "de": "sollte",
      "lv": "neki kellene"
    },
    "partizipVergangenheit": {
      "de": "gesollt",
      "lv": "kellett"
    }
  },
  {
    "infinitiv": {
      "de": "speien",
      "lv": "köpni"
    },
    "praesens": {
      "de": "er speit",
      "lv": "ő köp"
    },
    "imperfektIndikativ": {
      "de": "er spie",
      "lv": "ő köpött"
    },
    "imperfektKonjunktiv": {
      "de": "er spie",
      "lv": "ő köpne"
    },
    "partizipVergangenheit": {
      "de": "gespien",
      "lv": "köpött"
    }
  },
  {
    "infinitiv": {
      "de": "spinnen",
      "lv": "fonni"
    },
    "praesens": {
      "de": "er spinnt",
      "lv": "ő fon"
    },
    "imperfektIndikativ": {
      "de": "er spann",
      "lv": "ő font"
    },
    "imperfektKonjunktiv": {
      "de": "er spönne / er spänne",
      "lv": "ő fonna"
    },
    "partizipVergangenheit": {
      "de": "gesponnen",
      "lv": "font"
    }
  },
  {
    "infinitiv": {
      "de": "spleißen",
      "lv": "összekötni"
    },
    "praesens": {
      "de": "er spleißt",
      "lv": "ő összeköt"
    },
    "imperfektIndikativ": {
      "de": "spliss",
      "lv": "ő összekötött"
    },
    "imperfektKonjunktiv": {
      "de": "spliss",
      "lv": "ő összekötne"
    },
    "partizipVergangenheit": {
      "de": "gesplissen",
      "lv": "összekötött"
    }
  },
  {
    "infinitiv": {
      "de": "sprechen",
      "lv": "beszélni"
    },
    "praesens": {
      "de": "er spricht",
      "lv": "ő beszél"
    },
    "imperfektIndikativ": {
      "de": "er sprach",
      "lv": "ő beszélt"
    },
    "imperfektKonjunktiv": {
      "de": "er spräche",
      "lv": "ő beszélne"
    },
    "partizipVergangenheit": {
      "de": "gesprochen",
      "lv": "beszélt"
    }
  },
  {
    "infinitiv": {
      "de": "sprießen",
      "lv": "sarjadni"
    },
    "praesens": {
      "de": "er sprießt",
      "lv": "sarjad"
    },
    "imperfektIndikativ": {
      "de": "er spross",
      "lv": "sarjadt"
    },
    "imperfektKonjunktiv": {
      "de": "er sprösse",
      "lv": "sarjadna"
    },
    "partizipVergangenheit": {
      "de": "gesprossen (er ist)",
      "lv": "sarjadt"
    }
  },
  {
    "infinitiv": {
      "de": "springen",
      "lv": "ugrani"
    },
    "praesens": {
      "de": "er springt",
      "lv": "ő ugrik"
    },
    "imperfektIndikativ": {
      "de": "er sprang",
      "lv": "ő ugrott"
    },
    "imperfektKonjunktiv": {
      "de": "er spränge",
      "lv": "ő ugrana"
    },
    "partizipVergangenheit": {
      "de": "gesprungen (er ist)",
      "lv": "ugrott"
    }
  },
  {
    "infinitiv": {
      "de": "stechen",
      "lv": "szúrni"
    },
    "praesens": {
      "de": "er sticht",
      "lv": "ő szúr"
    },
    "imperfektIndikativ": {
      "de": "er stach",
      "lv": "ő szúrt"
    },
    "imperfektKonjunktiv": {
      "de": "er stäche",
      "lv": "ő szúrna"
    },
    "partizipVergangenheit": {
      "de": "gestochen",
      "lv": "szúrt"
    }
  },
  {
    "infinitiv": {
      "de": "stecken",
      "lv": "dugni / tűzni"
    },
    "praesens": {
      "de": "er steckt",
      "lv": "ő dug / tűz"
    },
    "imperfektIndikativ": {
      "de": "stak / steckte",
      "lv": "ő dugott / tűzött"
    },
    "imperfektKonjunktiv": {
      "de": "stak / steckte",
      "lv": "ő dugna / tűzne"
    },
    "partizipVergangenheit": {
      "de": "gesteckt",
      "lv": "dugott / tűzött"
    }
  },
  {
    "infinitiv": {
      "de": "stehen",
      "lv": "állni"
    },
    "praesens": {
      "de": "er steht",
      "lv": "ő áll"
    },
    "imperfektIndikativ": {
      "de": "er stand",
      "lv": "ő állt"
    },
    "imperfektKonjunktiv": {
      "de": "er stände / er stünde",
      "lv": "ő állna"
    },
    "partizipVergangenheit": {
      "de": "gestanden",
      "lv": "állt"
    }
  },
  {
    "infinitiv": {
      "de": "stehlen",
      "lv": "lopni"
    },
    "praesens": {
      "de": "er stiehlt",
      "lv": "ő lop"
    },
    "imperfektIndikativ": {
      "de": "er stahl",
      "lv": "ő lopott"
    },
    "imperfektKonjunktiv": {
      "de": "er stöhle / er stähle",
      "lv": "ő lopna"
    },
    "partizipVergangenheit": {
      "de": "gestohlen",
      "lv": "lopott"
    }
  },
  {
    "infinitiv": {
      "de": "steigen",
      "lv": "mászni"
    },
    "praesens": {
      "de": "er steigt",
      "lv": "ő mászik"
    },
    "imperfektIndikativ": {
      "de": "er stieg",
      "lv": "ő mászott"
    },
    "imperfektKonjunktiv": {
      "de": "er stiege",
      "lv": "ő mászna"
    },
    "partizipVergangenheit": {
      "de": "gestiegen (er ist)",
      "lv": "mászott"
    }
  },
  {
    "infinitiv": {
      "de": "sterben",
      "lv": "meghalni"
    },
    "praesens": {
      "de": "er stirbt",
      "lv": "ő meghal"
    },
    "imperfektIndikativ": {
      "de": "er starb",
      "lv": "ő meghalt"
    },
    "imperfektKonjunktiv": {
      "de": "er stürbe",
      "lv": "ő meghalna"
    },
    "partizipVergangenheit": {
      "de": "gestorben (er ist)",
      "lv": "meghalt"
    }
  },
  {
    "infinitiv": {
      "de": "stinken",
      "lv": "bűzleni"
    },
    "praesens": {
      "de": "es stinkt",
      "lv": "bűzlik"
    },
    "imperfektIndikativ": {
      "de": "stank",
      "lv": "bűzlött"
    },
    "imperfektKonjunktiv": {
      "de": "stank",
      "lv": "bűzlene"
    },
    "partizipVergangenheit": {
      "de": "gestunken",
      "lv": "bűzlött"
    }
  },
  {
    "infinitiv": {
      "de": "stoßen",
      "lv": "lökni"
    },
    "praesens": {
      "de": "er stößt",
      "lv": "ő lök"
    },
    "imperfektIndikativ": {
      "de": "er stieß",
      "lv": "ő lökött"
    },
    "imperfektKonjunktiv": {
      "de": "er stieße",
      "lv": "ő lökne"
    },
    "partizipVergangenheit": {
      "de": "gestoßen",
      "lv": "lökött"
    }
  },
  {
    "infinitiv": {
      "de": "streichen",
      "lv": "festeni / áthúzni"
    },
    "praesens": {
      "de": "er streicht",
      "lv": "ő fest / áthúz"
    },
    "imperfektIndikativ": {
      "de": "er strich",
      "lv": "ő festett / áthúzott"
    },
    "imperfektKonjunktiv": {
      "de": "er striche",
      "lv": "ő festene / áthúzna"
    },
    "partizipVergangenheit": {
      "de": "gestrichen",
      "lv": "festett / áthúzott"
    }
  },
  {
    "infinitiv": {
      "de": "streiten",
      "lv": "vitatkozni"
    },
    "praesens": {
      "de": "er streitet",
      "lv": "ő vitatkozik"
    },
    "imperfektIndikativ": {
      "de": "er stritt",
      "lv": "ő vitatkozott"
    },
    "imperfektKonjunktiv": {
      "de": "er stritte",
      "lv": "ő vitatkozna"
    },
    "partizipVergangenheit": {
      "de": "gestritten",
      "lv": "vitatkozott"
    }
  },
  {
    "infinitiv": {
      "de": "tragen",
      "lv": "vinni"
    },
    "praesens": {
      "de": "er trägt",
      "lv": "ő visz"
    },
    "imperfektIndikativ": {
      "de": "er trug",
      "lv": "ő vitt"
    },
    "imperfektKonjunktiv": {
      "de": "er trüge",
      "lv": "ő vinne"
    },
    "partizipVergangenheit": {
      "de": "getragen",
      "lv": "vitt"
    }
  },
  {
    "infinitiv": {
      "de": "treffen",
      "lv": "találkozni"
    },
    "praesens": {
      "de": "er trifft",
      "lv": "ő találkozik"
    },
    "imperfektIndikativ": {
      "de": "er traf",
      "lv": "ő találkozott"
    },
    "imperfektKonjunktiv": {
      "de": "er träfe",
      "lv": "ő találkozna"
    },
    "partizipVergangenheit": {
      "de": "getroffen",
      "lv": "találkozott"
    }
  },
  {
    "infinitiv": {
      "de": "treiben",
      "lv": "hajtani"
    },
    "praesens": {
      "de": "er treibt",
      "lv": "ő hajt"
    },
    "imperfektIndikativ": {
      "de": "er trieb",
      "lv": "ő hajtott"
    },
    "imperfektKonjunktiv": {
      "de": "er triebe",
      "lv": "ő hajtana"
    },
    "partizipVergangenheit": {
      "de": "getrieben",
      "lv": "hajtott"
    }
  },
  {
    "infinitiv": {
      "de": "treten",
      "lv": "lépni / menni"
    },
    "praesens": {
      "de": "er tritt",
      "lv": "ő lép / megy"
    },
    "imperfektIndikativ": {
      "de": "er trat",
      "lv": "ő lépett / ment"
    },
    "imperfektKonjunktiv": {
      "de": "er träte",
      "lv": "ő lépne / menne"
    },
    "partizipVergangenheit": {
      "de": "getreten (er ist)",
      "lv": "lépett / ment"
    }
  },
  {
    "infinitiv": {
      "de": "trinken",
      "lv": "inni"
    },
    "praesens": {
      "de": "er trinkt",
      "lv": "ő iszik"
    },
    "imperfektIndikativ": {
      "de": "er trank",
      "lv": "ő ivott"
    },
    "imperfektKonjunktiv": {
      "de": "er tränke",
      "lv": "ő inna"
    },
    "partizipVergangenheit": {
      "de": "getrunken",
      "lv": "ivott"
    }
  },
  {
    "infinitiv": {
      "de": "trügen",
      "lv": "csalni"
    },
    "praesens": {
      "de": "er trögt",
      "lv": "ő csal"
    },
    "imperfektIndikativ": {
      "de": "er trog",
      "lv": "ő csalt"
    },
    "imperfektKonjunktiv": {
      "de": "er tröge",
      "lv": "ő csalna"
    },
    "partizipVergangenheit": {
      "de": "getrogen",
      "lv": "csalt"
    }
  },
  {
    "infinitiv": {
      "de": "tun",
      "lv": "csinálni"
    },
    "praesens": {
      "de": "er tut",
      "lv": "ő csinál"
    },
    "imperfektIndikativ": {
      "de": "er tat",
      "lv": "ő csinált"
    },
    "imperfektKonjunktiv": {
      "de": "er täte",
      "lv": "ő csinálna"
    },
    "partizipVergangenheit": {
      "de": "getan",
      "lv": "csinált"
    }
  },
  {
    "infinitiv": {
      "de": "verderben",
      "lv": "rontani"
    },
    "praesens": {
      "de": "er verdirbt",
      "lv": "ő ront"
    },
    "imperfektIndikativ": {
      "de": "er verdarb",
      "lv": "ő rontott"
    },
    "imperfektKonjunktiv": {
      "de": "er verdürbe",
      "lv": "ő rontana"
    },
    "partizipVergangenheit": {
      "de": "verdorben",
      "lv": "rontott"
    }
  },
  {
    "infinitiv": {
      "de": "verdrießen",
      "lv": "bosszantani"
    },
    "praesens": {
      "de": "er verdrießt",
      "lv": "ő bosszant"
    },
    "imperfektIndikativ": {
      "de": "er verdross",
      "lv": "ő bosszantott"
    },
    "imperfektKonjunktiv": {
      "de": "er verdrösse",
      "lv": "ő bosszantana"
    },
    "partizipVergangenheit": {
      "de": "verdrossen",
      "lv": "bosszantott"
    }
  },
  {
    "infinitiv": {
      "de": "vergessen",
      "lv": "felejteni"
    },
    "praesens": {
      "de": "er vergisst",
      "lv": "ő felejt"
    },
    "imperfektIndikativ": {
      "de": "er vergass",
      "lv": "ő felejtett"
    },
    "imperfektKonjunktiv": {
      "de": "er vergäße",
      "lv": "ő felejtene"
    },
    "partizipVergangenheit": {
      "de": "vergessen",
      "lv": "felejtett"
    }
  },
  {
    "infinitiv": {
      "de": "verlieren",
      "lv": "veszíteni"
    },
    "praesens": {
      "de": "er verliert",
      "lv": "ő veszít"
    },
    "imperfektIndikativ": {
      "de": "er verlor",
      "lv": "ő veszített"
    },
    "imperfektKonjunktiv": {
      "de": "er verlöre",
      "lv": "ő veszítene"
    },
    "partizipVergangenheit": {
      "de": "verloren",
      "lv": "veszített"
    }
  },
  {
    "infinitiv": {
      "de": "wachsen",
      "lv": "nőni"
    },
    "praesens": {
      "de": "er wächst",
      "lv": "ő nő"
    },
    "imperfektIndikativ": {
      "de": "er wuchs",
      "lv": "ő nőtt"
    },
    "imperfektKonjunktiv": {
      "de": "er wüchse",
      "lv": "ő nőne"
    },
    "partizipVergangenheit": {
      "de": "gewachsen (er ist)",
      "lv": "nőtt"
    }
  },
  {
    "infinitiv": {
      "de": "waschen",
      "lv": "mosni"
    },
    "praesens": {
      "de": "er wäscht",
      "lv": "ő mos"
    },
    "imperfektIndikativ": {
      "de": "er wusch",
      "lv": "ő mosott"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsche",
      "lv": "ő mosna"
    },
    "partizipVergangenheit": {
      "de": "gewaschen",
      "lv": "mosott"
    }
  },
  {
    "infinitiv": {
      "de": "weben",
      "lv": "szőni"
    },
    "praesens": {
      "de": "er webt",
      "lv": "ő sző"
    },
    "imperfektIndikativ": {
      "de": "wob",
      "lv": "ő szőtt"
    },
    "imperfektKonjunktiv": {
      "de": "wob",
      "lv": "ő szőne"
    },
    "partizipVergangenheit": {
      "de": "gewoben",
      "lv": "szőtt"
    }
  },
  {
    "infinitiv": {
      "de": "weichen",
      "lv": "hátrálni"
    },
    "praesens": {
      "de": "er weicht",
      "lv": "ő hátrál"
    },
    "imperfektIndikativ": {
      "de": "er wich",
      "lv": "ő hátrált"
    },
    "imperfektKonjunktiv": {
      "de": "er wiche",
      "lv": "ő hátrálna"
    },
    "partizipVergangenheit": {
      "de": "gewichen (er ist)",
      "lv": "hátrált"
    }
  },
  {
    "infinitiv": {
      "de": "weisen",
      "lv": "mutatni"
    },
    "praesens": {
      "de": "er weist",
      "lv": "ő mutat"
    },
    "imperfektIndikativ": {
      "de": "er wies",
      "lv": "ő mutatott"
    },
    "imperfektKonjunktiv": {
      "de": "er wiese",
      "lv": "ő mutatna"
    },
    "partizipVergangenheit": {
      "de": "gewiesen",
      "lv": "mutatott"
    }
  },
  {
    "infinitiv": {
      "de": "wenden",
      "lv": "forgatni / fordítani"
    },
    "praesens": {
      "de": "er wendet",
      "lv": "ő forgat / fordít"
    },
    "imperfektIndikativ": {
      "de": "er wandte / es wendete",
      "lv": "ő forgatott / fordított"
    },
    "imperfektKonjunktiv": {
      "de": "er wendete",
      "lv": "ő forgatna / fordítana"
    },
    "partizipVergangenheit": {
      "de": "gewandt / gewendet",
      "lv": "forgatott / fordított"
    }
  },
  {
    "infinitiv": {
      "de": "werben",
      "lv": "udvarolni"
    },
    "praesens": {
      "de": "er wirbt",
      "lv": "ő udvarol"
    },
    "imperfektIndikativ": {
      "de": "er warb",
      "lv": "ő udvarolt"
    },
    "imperfektKonjunktiv": {
      "de": "er würbe",
      "lv": "ő udvarolna"
    },
    "partizipVergangenheit": {
      "de": "geworben",
      "lv": "udvarolt"
    }
  },
  {
    "infinitiv": {
      "de": "werden",
      "lv": "lenni"
    },
    "praesens": {
      "de": "er wird",
      "lv": "ő lesz"
    },
    "imperfektIndikativ": {
      "de": "wurde",
      "lv": "ő lett"
    },
    "imperfektKonjunktiv": {
      "de": "wurde",
      "lv": "ő lenne"
    },
    "partizipVergangenheit": {
      "de": "geworden",
      "lv": "lett"
    }
  },
  {
    "infinitiv": {
      "de": "werfen",
      "lv": "dobni"
    },
    "praesens": {
      "de": "er wirft",
      "lv": "ő dob"
    },
    "imperfektIndikativ": {
      "de": "er warf",
      "lv": "ő dobott"
    },
    "imperfektKonjunktiv": {
      "de": "er würfe",
      "lv": "ő dobna"
    },
    "partizipVergangenheit": {
      "de": "geworfen",
      "lv": "dobott"
    }
  },
  {
    "infinitiv": {
      "de": "wiegen",
      "lv": "mérni"
    },
    "praesens": {
      "de": "er wiegt",
      "lv": "ő mér"
    },
    "imperfektIndikativ": {
      "de": "er wog",
      "lv": "ő mért"
    },
    "imperfektKonjunktiv": {
      "de": "er wöge",
      "lv": "ő mérne"
    },
    "partizipVergangenheit": {
      "de": "gewogen",
      "lv": "mért"
    }
  },
  {
    "infinitiv": {
      "de": "winden",
      "lv": "fonni"
    },
    "praesens": {
      "de": "er windet",
      "lv": "ő fon"
    },
    "imperfektIndikativ": {
      "de": "er wand",
      "lv": "ő font"
    },
    "imperfektKonjunktiv": {
      "de": "er wände",
      "lv": "ő fonna"
    },
    "partizipVergangenheit": {
      "de": "gewunden",
      "lv": "font"
    }
  },
  {
    "infinitiv": {
      "de": "wissen",
      "lv": "tudni"
    },
    "praesens": {
      "de": "er weiß",
      "lv": "ő tud"
    },
    "imperfektIndikativ": {
      "de": "er wusste",
      "lv": "ő tudott"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsste",
      "lv": "ő tudna"
    },
    "partizipVergangenheit": {
      "de": "gewusst",
      "lv": "tudott"
    }
  },
  {
    "infinitiv": {
      "de": "wollen",
      "lv": "akarni"
    },
    "praesens": {
      "de": "er will",
      "lv": "ő akar"
    },
    "imperfektIndikativ": {
      "de": "wollte",
      "lv": "ő akart"
    },
    "imperfektKonjunktiv": {
      "de": "wollte",
      "lv": "ő akarna"
    },
    "partizipVergangenheit": {
      "de": "gewollt",
      "lv": "akart"
    }
  },
  {
    "infinitiv": {
      "de": "wringen",
      "lv": "facsarni"
    },
    "praesens": {
      "de": "er wringt",
      "lv": "ő facsar"
    },
    "imperfektIndikativ": {
      "de": "wrang",
      "lv": "ő facsart"
    },
    "imperfektKonjunktiv": {
      "de": "wrang",
      "lv": "ő facsarna"
    },
    "partizipVergangenheit": {
      "de": "gewrungen",
      "lv": "facsart"
    }
  },
  {
    "infinitiv": {
      "de": "zeihen",
      "lv": "vádolni"
    },
    "praesens": {
      "de": "er zeiht",
      "lv": "ő vádol"
    },
    "imperfektIndikativ": {
      "de": "zieh",
      "lv": "ő vádolt"
    },
    "imperfektKonjunktiv": {
      "de": "zieh",
      "lv": "ő vádolna"
    },
    "partizipVergangenheit": {
      "de": "geziehen",
      "lv": "vádolt"
    }
  },
  {
    "infinitiv": {
      "de": "ziehen",
      "lv": "húzni"
    },
    "praesens": {
      "de": "er zieht",
      "lv": "ő húz"
    },
    "imperfektIndikativ": {
      "de": "er zog",
      "lv": "ő húzott"
    },
    "imperfektKonjunktiv": {
      "de": "er zöge",
      "lv": "ő húzna"
    },
    "partizipVergangenheit": {
      "de": "gezogen",
      "lv": "húzott"
    }
  },
  {
    "infinitiv": {
      "de": "zwingen",
      "lv": "kényszeríteni"
    },
    "praesens": {
      "de": "er zwingt",
      "lv": "ő kényszerít"
    },
    "imperfektIndikativ": {
      "de": "er zwang",
      "lv": "ő kényszerített"
    },
    "imperfektKonjunktiv": {
      "de": "er zwänge",
      "lv": "ő kényszerítene"
    },
    "partizipVergangenheit": {
      "de": "gezwungen",
      "lv": "kényszerített"
    }
  },
  {
    "infinitiv": {
      "de": "empfangen",
      "lv": "kapni"
    },
    "praesens": {
      "de": "er empfängt",
      "lv": "ő kap"
    },
    "imperfektIndikativ": {
      "de": "er empfing",
      "lv": "ő kapott"
    },
    "imperfektKonjunktiv": {
      "de": "er empfinge",
      "lv": "ő kapna"
    },
    "partizipVergangenheit": {
      "de": "empfangen",
      "lv": "kapott"
    }
  },
  {
    "infinitiv": {
      "de": "erwägen",
      "lv": "mérlegelni"
    },
    "praesens": {
      "de": "er erwägt",
      "lv": "ő mérlegel"
    },
    "imperfektIndikativ": {
      "de": "er erwog",
      "lv": "ő mérlegelt"
    },
    "imperfektKonjunktiv": {
      "de": "er erwöge",
      "lv": "ő mérlegelne"
    },
    "partizipVergangenheit": {
      "de": "erwogen",
      "lv": "mérlegelt"
    }
  },
  {
    "infinitiv": {
      "de": "fechten",
      "lv": "harcolni"
    },
    "praesens": {
      "de": "er ficht",
      "lv": "ő harcol"
    },
    "imperfektIndikativ": {
      "de": "er focht",
      "lv": "ő harcolt"
    },
    "imperfektKonjunktiv": {
      "de": "er föchte",
      "lv": "ő harcolna"
    },
    "partizipVergangenheit": {
      "de": "gefochten",
      "lv": "harcolt"
    }
  },
  {
    "infinitiv": {
      "de": "flechten",
      "lv": "fonni"
    },
    "praesens": {
      "de": "er flicht",
      "lv": "ő fon"
    },
    "imperfektIndikativ": {
      "de": "er flocht",
      "lv": "ő font"
    },
    "imperfektKonjunktiv": {
      "de": "er flöchte",
      "lv": "ő fonna"
    },
    "partizipVergangenheit": {
      "de": "geflochten",
      "lv": "font"
    }
  },
  {
    "infinitiv": {
      "de": "hangen",
      "lv": "lógni"
    },
    "praesens": {
      "de": "er hängt",
      "lv": "ő lóg"
    },
    "imperfektIndikativ": {
      "de": "er hing",
      "lv": "ő lógott"
    },
    "imperfektKonjunktiv": {
      "de": "er hinge",
      "lv": "ő lógna"
    },
    "partizipVergangenheit": {
      "de": "gehangen",
      "lv": "lógott"
    }
  },
  {
    "infinitiv": {
      "de": "spalten",
      "lv": "hasítani"
    },
    "praesens": {
      "de": "er spaltet",
      "lv": "ő hasít"
    },
    "imperfektIndikativ": {
      "de": "er spaltete",
      "lv": "ő hasított"
    },
    "imperfektKonjunktiv": {
      "de": "er spaltete",
      "lv": "ő hasítana"
    },
    "partizipVergangenheit": {
      "de": "gespalten",
      "lv": "hasított"
    }
  },
  {
    "infinitiv": {
      "de": "verzeihen",
      "lv": "megbocsátani"
    },
    "praesens": {
      "de": "er verzeiht",
      "lv": "ő megbocsát"
    },
    "imperfektIndikativ": {
      "de": "er verzieh",
      "lv": "ő megbocsátott"
    },
    "imperfektKonjunktiv": {
      "de": "er verziehe",
      "lv": "ő megbocsátana"
    },
    "partizipVergangenheit": {
      "de": "verziehen",
      "lv": "megbocsátott"
    }
  }
];

window.VERB_ENTRIES = VERB_ENTRIES;

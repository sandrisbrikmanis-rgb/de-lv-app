const VERB_ENTRIES = [
  {
    "infinitiv": {
      "de": "backen",
      "lv": "Sütni"
    },
    "praesens": {
      "de": "er bäckt",
      "lv": "Ő süti"
    },
    "imperfektIndikativ": {
      "de": "er buk",
      "lv": "Éppen sütött"
    },
    "imperfektKonjunktiv": {
      "de": "er büke",
      "lv": "Ő sütné"
    },
    "partizipVergangenheit": {
      "de": "gebacken",
      "lv": "Sült / sült"
    }
  },
  {
    "infinitiv": {
      "de": "befehlen",
      "lv": "Parancsolni"
    },
    "praesens": {
      "de": "er befiehlt",
      "lv": "Parancsolja"
    },
    "imperfektIndikativ": {
      "de": "er befahl",
      "lv": "– parancsolta"
    },
    "imperfektKonjunktiv": {
      "de": "er beföhle",
      "lv": "Ő parancsolna"
    },
    "partizipVergangenheit": {
      "de": "befohlen",
      "lv": "Parancsolta"
    }
  },
  {
    "infinitiv": {
      "de": "beginnen",
      "lv": "Kezdeni"
    },
    "praesens": {
      "de": "er beginnt",
      "lv": "Kezdi"
    },
    "imperfektIndikativ": {
      "de": "er begann",
      "lv": "– kezdte"
    },
    "imperfektKonjunktiv": {
      "de": "er begönne / er begänne",
      "lv": "Ő kezdené"
    },
    "partizipVergangenheit": {
      "de": "begonnen",
      "lv": "Elindult"
    }
  },
  {
    "infinitiv": {
      "de": "beißen",
      "lv": "Harapás"
    },
    "praesens": {
      "de": "er beißt",
      "lv": "Harap"
    },
    "imperfektIndikativ": {
      "de": "er biss",
      "lv": "– kódolta"
    },
    "imperfektKonjunktiv": {
      "de": "er bisse",
      "lv": "Harap"
    },
    "partizipVergangenheit": {
      "de": "gebissen",
      "lv": "Harapott / harapott"
    }
  },
  {
    "infinitiv": {
      "de": "bergen",
      "lv": "Elrejt"
    },
    "praesens": {
      "de": "er birgt",
      "lv": "Elbújik"
    },
    "imperfektIndikativ": {
      "de": "er barg",
      "lv": "Elbújt"
    },
    "imperfektKonjunktiv": {
      "de": "er bürge / er bärge",
      "lv": "Elbújna"
    },
    "partizipVergangenheit": {
      "de": "geborgen",
      "lv": "Rejtett / mentve"
    }
  },
  {
    "infinitiv": {
      "de": "bersten",
      "lv": "Felrobbanva"
    },
    "praesens": {
      "de": "er birst",
      "lv": "Felrobban"
    },
    "imperfektIndikativ": {
      "de": "er barst / er borst",
      "lv": "– tört ki belőle"
    },
    "imperfektKonjunktiv": {
      "de": "er bärste / er börste",
      "lv": "Felrobban"
    },
    "partizipVergangenheit": {
      "de": "geborsten (er ist)",
      "lv": "Törött"
    }
  },
  {
    "infinitiv": {
      "de": "bewegen",
      "lv": "Bátorítani"
    },
    "praesens": {
      "de": "er bewegt",
      "lv": "Felszólítja"
    },
    "imperfektIndikativ": {
      "de": "er bewog",
      "lv": "– sürgette"
    },
    "imperfektKonjunktiv": {
      "de": "er bewöge",
      "lv": "Biztatná"
    },
    "partizipVergangenheit": {
      "de": "bewogen",
      "lv": "Biztatott"
    }
  },
  {
    "infinitiv": {
      "de": "biegen",
      "lv": "Kanyar"
    },
    "praesens": {
      "de": "er biegt",
      "lv": "Meghajol"
    },
    "imperfektIndikativ": {
      "de": "er bog",
      "lv": "Meghajolt"
    },
    "imperfektKonjunktiv": {
      "de": "er böge",
      "lv": "Meghajolna"
    },
    "partizipVergangenheit": {
      "de": "gebogen",
      "lv": "Hajlott"
    }
  },
  {
    "infinitiv": {
      "de": "bieten",
      "lv": "Megígérni"
    },
    "praesens": {
      "de": "er bietet",
      "lv": "Megígéri"
    },
    "imperfektIndikativ": {
      "de": "er bot",
      "lv": "Megígérte"
    },
    "imperfektKonjunktiv": {
      "de": "er böte",
      "lv": "Megígérné"
    },
    "partizipVergangenheit": {
      "de": "geboten",
      "lv": "Ígért / felajánlotta"
    }
  },
  {
    "infinitiv": {
      "de": "binden",
      "lv": "Szita"
    },
    "praesens": {
      "de": "er bindet",
      "lv": "Ő széna"
    },
    "imperfektIndikativ": {
      "de": "er band",
      "lv": "Vetette"
    },
    "imperfektKonjunktiv": {
      "de": "er bände",
      "lv": "Szitált"
    },
    "partizipVergangenheit": {
      "de": "gebunden",
      "lv": "Szita"
    }
  },
  {
    "infinitiv": {
      "de": "bitten",
      "lv": "Megkérdezni"
    },
    "praesens": {
      "de": "er bittet",
      "lv": "Könyörög"
    },
    "imperfektIndikativ": {
      "de": "er bat",
      "lv": "– kérdezte"
    },
    "imperfektKonjunktiv": {
      "de": "er bäte",
      "lv": "Imádkozna"
    },
    "partizipVergangenheit": {
      "de": "gebeten",
      "lv": "Kérte"
    }
  },
  {
    "infinitiv": {
      "de": "blasen",
      "lv": "Fújni"
    },
    "praesens": {
      "de": "er bläst",
      "lv": "Fújja"
    },
    "imperfektIndikativ": {
      "de": "er blies",
      "lv": "– fújta"
    },
    "imperfektKonjunktiv": {
      "de": "er bliese",
      "lv": "Fújna"
    },
    "partizipVergangenheit": {
      "de": "geblasen",
      "lv": "Kifulladt"
    }
  },
  {
    "infinitiv": {
      "de": "gären",
      "lv": "Erjeszteni"
    },
    "praesens": {
      "de": "es gärt",
      "lv": "Erjed"
    },
    "imperfektIndikativ": {
      "de": "es gor / es gärte",
      "lv": "Erjed"
    },
    "imperfektKonjunktiv": {
      "de": "es göre / es gärte",
      "lv": "Keserű lenne"
    },
    "partizipVergangenheit": {
      "de": "gegoren / gegärt",
      "lv": "Rozs"
    }
  },
  {
    "infinitiv": {
      "de": "gebären",
      "lv": "Szülni"
    },
    "praesens": {
      "de": "sie gebiert",
      "lv": "A méhében"
    },
    "imperfektIndikativ": {
      "de": "sie gebar",
      "lv": "Szült"
    },
    "imperfektKonjunktiv": {
      "de": "sie gebäre",
      "lv": "Szülne"
    },
    "partizipVergangenheit": {
      "de": "geboren",
      "lv": "Született / született"
    }
  },
  {
    "infinitiv": {
      "de": "gelingen",
      "lv": "Sikerül"
    },
    "praesens": {
      "de": "es gelingt",
      "lv": "Ez sikerül"
    },
    "imperfektIndikativ": {
      "de": "es gelang",
      "lv": "Működött"
    },
    "imperfektKonjunktiv": {
      "de": "es gelänge",
      "lv": "Működne"
    },
    "partizipVergangenheit": {
      "de": "gelungen (es ist)",
      "lv": "Sikerült"
    }
  },
  {
    "infinitiv": {
      "de": "gelten",
      "lv": "Jól jön"
    },
    "praesens": {
      "de": "er gilt",
      "lv": "Neki megfelel / érvényes"
    },
    "imperfektIndikativ": {
      "de": "er galt",
      "lv": "Fitt / fitt volt"
    },
    "imperfektKonjunktiv": {
      "de": "er gölte / es gälte",
      "lv": "Ráférne / ráférne"
    },
    "partizipVergangenheit": {
      "de": "gegolten",
      "lv": "Alkalmazta / érvényes volt"
    }
  },
  {
    "infinitiv": {
      "de": "genesen",
      "lv": "Gyógyulni"
    },
    "praesens": {
      "de": "er genest",
      "lv": "Meggyógyul"
    },
    "imperfektIndikativ": {
      "de": "er genas",
      "lv": "Meggyógyult"
    },
    "imperfektKonjunktiv": {
      "de": "er genäse",
      "lv": "Meggyógyulna"
    },
    "partizipVergangenheit": {
      "de": "genesen (er ist)",
      "lv": "Meggyógyul"
    }
  },
  {
    "infinitiv": {
      "de": "genießen",
      "lv": "Élvezni"
    },
    "praesens": {
      "de": "er genießt",
      "lv": "Élvezi"
    },
    "imperfektIndikativ": {
      "de": "er genoss",
      "lv": "Élvezte"
    },
    "imperfektKonjunktiv": {
      "de": "er genösse",
      "lv": "Élvezné"
    },
    "partizipVergangenheit": {
      "de": "genossen",
      "lv": "Élvezte"
    }
  },
  {
    "infinitiv": {
      "de": "geschehen",
      "lv": "Történik"
    },
    "praesens": {
      "de": "es geschieht",
      "lv": "Megtörténik"
    },
    "imperfektIndikativ": {
      "de": "es geschah",
      "lv": "Megtörtént"
    },
    "imperfektKonjunktiv": {
      "de": "es geschähe",
      "lv": "Megtörténne"
    },
    "partizipVergangenheit": {
      "de": "geschehen (es ist)",
      "lv": "Történt"
    }
  },
  {
    "infinitiv": {
      "de": "gießen",
      "lv": "Hadnagy"
    },
    "praesens": {
      "de": "er gießt",
      "lv": "Önti"
    },
    "imperfektIndikativ": {
      "de": "er goss",
      "lv": "Öntötte"
    },
    "imperfektKonjunktiv": {
      "de": "er gösse",
      "lv": "Ő esik"
    },
    "partizipVergangenheit": {
      "de": "gegossen",
      "lv": "Dolog"
    }
  },
  {
    "infinitiv": {
      "de": "gleichen",
      "lv": "Hasonlítani"
    },
    "praesens": {
      "de": "er gleicht",
      "lv": "Hasonlít"
    },
    "imperfektIndikativ": {
      "de": "er glich",
      "lv": "– utánozta"
    },
    "imperfektKonjunktiv": {
      "de": "er gliche",
      "lv": "Utánozna"
    },
    "partizipVergangenheit": {
      "de": "geglichen",
      "lv": "Hasonlított"
    }
  },
  {
    "infinitiv": {
      "de": "gleiten",
      "lv": "Csúsztatni"
    },
    "praesens": {
      "de": "er gleitet",
      "lv": "Csúszik"
    },
    "imperfektIndikativ": {
      "de": "er glitt",
      "lv": "Csúszott"
    },
    "imperfektKonjunktiv": {
      "de": "er glitte",
      "lv": "Csúszna"
    },
    "partizipVergangenheit": {
      "de": "geglitten (er ist)",
      "lv": "Megcsúszott"
    }
  },
  {
    "infinitiv": {
      "de": "glimmen",
      "lv": "Izzó"
    },
    "praesens": {
      "de": "er glimmt",
      "lv": "Izzik"
    },
    "imperfektIndikativ": {
      "de": "er glimmte / glomm",
      "lv": "– izzott"
    },
    "imperfektKonjunktiv": {
      "de": "er glimmte",
      "lv": "Ragyogna"
    },
    "partizipVergangenheit": {
      "de": "geglimmt / geglommen",
      "lv": "Izzó"
    }
  },
  {
    "infinitiv": {
      "de": "graben",
      "lv": "Ásni"
    },
    "praesens": {
      "de": "er gräbt",
      "lv": "Ő ás"
    },
    "imperfektIndikativ": {
      "de": "er grub",
      "lv": "Ásott"
    },
    "imperfektKonjunktiv": {
      "de": "er grübe",
      "lv": "Ásna"
    },
    "partizipVergangenheit": {
      "de": "gegraben",
      "lv": "Dig"
    }
  },
  {
    "infinitiv": {
      "de": "greifen",
      "lv": "Elkapni"
    },
    "praesens": {
      "de": "er greift",
      "lv": "Elkapja"
    },
    "imperfektIndikativ": {
      "de": "er griff",
      "lv": "Elkapta"
    },
    "imperfektKonjunktiv": {
      "de": "er griffe",
      "lv": "Elkapná"
    },
    "partizipVergangenheit": {
      "de": "gegriffen",
      "lv": "Elkapta / megragadta"
    }
  },
  {
    "infinitiv": {
      "de": "hauen",
      "lv": "Vágni"
    },
    "praesens": {
      "de": "er haut",
      "lv": "Választotta"
    },
    "imperfektIndikativ": {
      "de": "er hieb",
      "lv": "– csattant fel"
    },
    "imperfektKonjunktiv": {
      "de": "er hiebe",
      "lv": "Faragna"
    },
    "partizipVergangenheit": {
      "de": "gehauen",
      "lv": "Faragott"
    }
  },
  {
    "infinitiv": {
      "de": "heben",
      "lv": "Emelni"
    },
    "praesens": {
      "de": "er hebt",
      "lv": "Felemeli"
    },
    "imperfektIndikativ": {
      "de": "er hob",
      "lv": "Hozta"
    },
    "imperfektKonjunktiv": {
      "de": "er höbe",
      "lv": "Építene"
    },
    "partizipVergangenheit": {
      "de": "gehoben",
      "lv": "Épült"
    }
  },
  {
    "infinitiv": {
      "de": "kennen",
      "lv": "Tudni / tudni"
    },
    "praesens": {
      "de": "er kennt",
      "lv": "Ő tudja"
    },
    "imperfektIndikativ": {
      "de": "kannte",
      "lv": "Tudta"
    },
    "imperfektKonjunktiv": {
      "de": "kannte",
      "lv": "Tudta"
    },
    "partizipVergangenheit": {
      "de": "gekannt",
      "lv": "Ismerős"
    }
  },
  {
    "infinitiv": {
      "de": "klingen",
      "lv": "Hogy megszólaljon"
    },
    "praesens": {
      "de": "er klingt",
      "lv": "Hangzik"
    },
    "imperfektIndikativ": {
      "de": "er klang",
      "lv": "– hangzott el"
    },
    "imperfektKonjunktiv": {
      "de": "er klänge",
      "lv": "Hangozna"
    },
    "partizipVergangenheit": {
      "de": "geklungen",
      "lv": "Hangzott el"
    }
  },
  {
    "infinitiv": {
      "de": "kneifen",
      "lv": "Csipet"
    },
    "praesens": {
      "de": "er kneift",
      "lv": "– viccelődik"
    },
    "imperfektIndikativ": {
      "de": "er kniff",
      "lv": "Megcsípte"
    },
    "imperfektKonjunktiv": {
      "de": "er kniffe",
      "lv": "Megcsípné"
    },
    "partizipVergangenheit": {
      "de": "gekniffen",
      "lv": "Megcsípte"
    }
  },
  {
    "infinitiv": {
      "de": "bleiben",
      "lv": "Marad"
    },
    "praesens": {
      "de": "er bleibt",
      "lv": "Ő marad"
    },
    "imperfektIndikativ": {
      "de": "er blieb",
      "lv": "Ő maradt"
    },
    "imperfektKonjunktiv": {
      "de": "er bliebe",
      "lv": "Maradna"
    },
    "partizipVergangenheit": {
      "de": "geblieben (er ist)",
      "lv": "Balra"
    }
  },
  {
    "infinitiv": {
      "de": "bleichen",
      "lv": "Fehérít"
    },
    "praesens": {
      "de": "er bleicht",
      "lv": "Ő fehéríti"
    },
    "imperfektIndikativ": {
      "de": "blich",
      "lv": "Fehérített"
    },
    "imperfektKonjunktiv": {
      "de": "blich",
      "lv": "Fehérített"
    },
    "partizipVergangenheit": {
      "de": "geblichen",
      "lv": "Fehérített"
    }
  },
  {
    "infinitiv": {
      "de": "braten",
      "lv": "Sütni"
    },
    "praesens": {
      "de": "er brät",
      "lv": "Ő süti"
    },
    "imperfektIndikativ": {
      "de": "er briet",
      "lv": "Éppen sütött"
    },
    "imperfektKonjunktiv": {
      "de": "er briete",
      "lv": "Ő sütné"
    },
    "partizipVergangenheit": {
      "de": "gebraten",
      "lv": "Sült / sült"
    }
  },
  {
    "infinitiv": {
      "de": "brechen",
      "lv": "Megtörni"
    },
    "praesens": {
      "de": "er bricht",
      "lv": "Megtöri"
    },
    "imperfektIndikativ": {
      "de": "er brach",
      "lv": "Megtörte"
    },
    "imperfektKonjunktiv": {
      "de": "er bräche",
      "lv": "Megtörne"
    },
    "partizipVergangenheit": {
      "de": "gebrochen",
      "lv": "Törött / törött"
    }
  },
  {
    "infinitiv": {
      "de": "brennen",
      "lv": "Égni"
    },
    "praesens": {
      "de": "er brennt",
      "lv": "Lángol"
    },
    "imperfektIndikativ": {
      "de": "brannte",
      "lv": "Égett"
    },
    "imperfektKonjunktiv": {
      "de": "brannte",
      "lv": "Égett"
    },
    "partizipVergangenheit": {
      "de": "gebrannt",
      "lv": "Égett"
    }
  },
  {
    "infinitiv": {
      "de": "bringen",
      "lv": "Visz"
    },
    "praesens": {
      "de": "er bringt",
      "lv": "Ő viszi"
    },
    "imperfektIndikativ": {
      "de": "er brachte",
      "lv": "Vitte"
    },
    "imperfektKonjunktiv": {
      "de": "er brächte",
      "lv": "Vinné"
    },
    "partizipVergangenheit": {
      "de": "gebracht",
      "lv": "Hozott / hozott"
    }
  },
  {
    "infinitiv": {
      "de": "denken",
      "lv": "Gondolkodni"
    },
    "praesens": {
      "de": "er denkt",
      "lv": "Azt gondolja"
    },
    "imperfektIndikativ": {
      "de": "er dachte",
      "lv": "– gondolta"
    },
    "imperfektKonjunktiv": {
      "de": "er dächte",
      "lv": "Azt gondolná"
    },
    "partizipVergangenheit": {
      "de": "gedacht",
      "lv": "Szándékolt"
    }
  },
  {
    "infinitiv": {
      "de": "dingen",
      "lv": "Felvenni / megállapodni"
    },
    "praesens": {
      "de": "er dingt",
      "lv": "Felveszi"
    },
    "imperfektIndikativ": {
      "de": "dingte",
      "lv": "Bérelt"
    },
    "imperfektKonjunktiv": {
      "de": "dingte",
      "lv": "Bérelt"
    },
    "partizipVergangenheit": {
      "de": "gedungen",
      "lv": "Bérelt"
    }
  },
  {
    "infinitiv": {
      "de": "dreschen",
      "lv": "Kultusz"
    },
    "praesens": {
      "de": "er drischt",
      "lv": "Csépel"
    },
    "imperfektIndikativ": {
      "de": "er drasch / er drosch",
      "lv": "Csépelt"
    },
    "imperfektKonjunktiv": {
      "de": "er dräsche / er drösche",
      "lv": "Imádná"
    },
    "partizipVergangenheit": {
      "de": "gedroschen",
      "lv": "Kultusz"
    }
  },
  {
    "infinitiv": {
      "de": "dringen",
      "lv": "Betör"
    },
    "praesens": {
      "de": "er dringt",
      "lv": "Betör"
    },
    "imperfektIndikativ": {
      "de": "er drang",
      "lv": "Betört"
    },
    "imperfektKonjunktiv": {
      "de": "er dränge",
      "lv": "Betörne"
    },
    "partizipVergangenheit": {
      "de": "gedrungen (er ist)",
      "lv": "Betört"
    }
  },
  {
    "infinitiv": {
      "de": "dünken",
      "lv": "Úgy tűnik"
    },
    "praesens": {
      "de": "es dünkt",
      "lv": "Úgy tűnik"
    },
    "imperfektIndikativ": {
      "de": "deuchte",
      "lv": "Úgy tűnt"
    },
    "imperfektKonjunktiv": {
      "de": "deuchte",
      "lv": "Úgy tűnt"
    },
    "partizipVergangenheit": {
      "de": "gedünkt",
      "lv": "Úgy tűnt"
    }
  },
  {
    "infinitiv": {
      "de": "dürfen",
      "lv": "Hogy megengedjék"
    },
    "praesens": {
      "de": "er darf",
      "lv": "Tudja"
    },
    "imperfektIndikativ": {
      "de": "durfte",
      "lv": "Engedélyezték"
    },
    "imperfektKonjunktiv": {
      "de": "durfte",
      "lv": "Engedélyezték"
    },
    "partizipVergangenheit": {
      "de": "gedurft",
      "lv": "Megengedett"
    }
  },
  {
    "infinitiv": {
      "de": "empfehlen",
      "lv": "Ajánlani"
    },
    "praesens": {
      "de": "er empfiehlt",
      "lv": "– javasolja"
    },
    "imperfektIndikativ": {
      "de": "er empfahl",
      "lv": "– javasolta"
    },
    "imperfektKonjunktiv": {
      "de": "er empfähle / er empföhle",
      "lv": "Ő ajánlaná"
    },
    "partizipVergangenheit": {
      "de": "empfohlen",
      "lv": "Ajánlott"
    }
  },
  {
    "infinitiv": {
      "de": "empfinden",
      "lv": "Érezni"
    },
    "praesens": {
      "de": "er empfindet",
      "lv": "Úgy érzi"
    },
    "imperfektIndikativ": {
      "de": "er empfand",
      "lv": "Úgy érezte"
    },
    "imperfektKonjunktiv": {
      "de": "er empfände",
      "lv": "Úgy érezné"
    },
    "partizipVergangenheit": {
      "de": "empfunden",
      "lv": "Filc"
    }
  },
  {
    "infinitiv": {
      "de": "erlöschen",
      "lv": "Elhalványul"
    },
    "praesens": {
      "de": "er erlischt",
      "lv": "Kimegy"
    },
    "imperfektIndikativ": {
      "de": "er erlosch",
      "lv": "Kiment"
    },
    "imperfektKonjunktiv": {
      "de": "er erlösche",
      "lv": "Elhalványulna"
    },
    "partizipVergangenheit": {
      "de": "erloschen (er ist)",
      "lv": "Kialudt"
    }
  },
  {
    "infinitiv": {
      "de": "erschrecken",
      "lv": "Összezavarodni"
    },
    "praesens": {
      "de": "er erschrickt",
      "lv": "Megijed"
    },
    "imperfektIndikativ": {
      "de": "er erschrak",
      "lv": "Megijedt"
    },
    "imperfektKonjunktiv": {
      "de": "er erschräke",
      "lv": "Kiborulna"
    },
    "partizipVergangenheit": {
      "de": "erschrocken (er ist)",
      "lv": "Megrémült"
    }
  },
  {
    "infinitiv": {
      "de": "essen",
      "lv": "Enni"
    },
    "praesens": {
      "de": "er isst",
      "lv": "Eszik"
    },
    "imperfektIndikativ": {
      "de": "er ass",
      "lv": "Evett"
    },
    "imperfektKonjunktiv": {
      "de": "er äße",
      "lv": "Enne"
    },
    "partizipVergangenheit": {
      "de": "gegessen",
      "lv": "Evett / evett"
    }
  },
  {
    "infinitiv": {
      "de": "fahren",
      "lv": "Hajtás"
    },
    "praesens": {
      "de": "er fährt",
      "lv": "Ő vezet"
    },
    "imperfektIndikativ": {
      "de": "er fuhr",
      "lv": "Ő vezetett"
    },
    "imperfektKonjunktiv": {
      "de": "er führe",
      "lv": "Ő vezetne"
    },
    "partizipVergangenheit": {
      "de": "gefahren (er ist)",
      "lv": "Vezetett / balra"
    }
  },
  {
    "infinitiv": {
      "de": "fallen",
      "lv": "Leesni"
    },
    "praesens": {
      "de": "er fällt",
      "lv": "Leesik"
    },
    "imperfektIndikativ": {
      "de": "er fiel",
      "lv": "Elesett"
    },
    "imperfektKonjunktiv": {
      "de": "er fiele",
      "lv": "Elesne"
    },
    "partizipVergangenheit": {
      "de": "gefallen (er ist)",
      "lv": "Leesett"
    }
  },
  {
    "infinitiv": {
      "de": "fangen",
      "lv": "Elkapni"
    },
    "praesens": {
      "de": "er fängt",
      "lv": "Elkapja"
    },
    "imperfektIndikativ": {
      "de": "er fing",
      "lv": "Elkapta"
    },
    "imperfektKonjunktiv": {
      "de": "er finge",
      "lv": "Elkapná"
    },
    "partizipVergangenheit": {
      "de": "gefangen",
      "lv": "Elkapott / elkapott"
    }
  },
  {
    "infinitiv": {
      "de": "finden",
      "lv": "Megtalálni"
    },
    "praesens": {
      "de": "er findet",
      "lv": "Ő találja meg"
    },
    "imperfektIndikativ": {
      "de": "er fand",
      "lv": "Megtalálta"
    },
    "imperfektKonjunktiv": {
      "de": "er fände",
      "lv": "Találna"
    },
    "partizipVergangenheit": {
      "de": "gefunden",
      "lv": "Talált"
    }
  },
  {
    "infinitiv": {
      "de": "fliegen",
      "lv": "Engedd el"
    },
    "praesens": {
      "de": "er fliegt",
      "lv": "Ő repül"
    },
    "imperfektIndikativ": {
      "de": "er flog",
      "lv": "Repült"
    },
    "imperfektKonjunktiv": {
      "de": "er flöge",
      "lv": "Repülne"
    },
    "partizipVergangenheit": {
      "de": "geflogen (er ist)",
      "lv": "Repült"
    }
  },
  {
    "infinitiv": {
      "de": "fliehen",
      "lv": "Menekülni"
    },
    "praesens": {
      "de": "er flieht",
      "lv": "Elszalad"
    },
    "imperfektIndikativ": {
      "de": "er floh",
      "lv": "Elszaladt"
    },
    "imperfektKonjunktiv": {
      "de": "er flöhe",
      "lv": "Elszaladna"
    },
    "partizipVergangenheit": {
      "de": "geflohen (er ist)",
      "lv": "Elszaladt"
    }
  },
  {
    "infinitiv": {
      "de": "fließen",
      "lv": "Folyni"
    },
    "praesens": {
      "de": "er fließt",
      "lv": "Ő fut"
    },
    "imperfektIndikativ": {
      "de": "er floss",
      "lv": "Futott"
    },
    "imperfektKonjunktiv": {
      "de": "er flösse",
      "lv": "Futna"
    },
    "partizipVergangenheit": {
      "de": "geflossen (er ist)",
      "lv": "Átment"
    }
  },
  {
    "infinitiv": {
      "de": "fressen",
      "lv": "Holnap egyél"
    },
    "praesens": {
      "de": "er frisst",
      "lv": "Eszik / lenyeli"
    },
    "imperfektIndikativ": {
      "de": "er frass",
      "lv": "Evett / nyelt"
    },
    "imperfektKonjunktiv": {
      "de": "er fräße",
      "lv": "Enne/reggelizne"
    },
    "partizipVergangenheit": {
      "de": "gefressen",
      "lv": "Evett / reggel"
    }
  },
  {
    "infinitiv": {
      "de": "frieren",
      "lv": "Hideg"
    },
    "praesens": {
      "de": "er friert",
      "lv": "Megfagy"
    },
    "imperfektIndikativ": {
      "de": "er fror",
      "lv": "Ő sziget"
    },
    "imperfektKonjunktiv": {
      "de": "er fröre",
      "lv": "Megdermedt"
    },
    "partizipVergangenheit": {
      "de": "gefroren",
      "lv": "Sziget"
    }
  },
  {
    "infinitiv": {
      "de": "geben",
      "lv": "Adni"
    },
    "praesens": {
      "de": "er gibt",
      "lv": "Ő ad"
    },
    "imperfektIndikativ": {
      "de": "er gab",
      "lv": "Adott"
    },
    "imperfektKonjunktiv": {
      "de": "er gäbe",
      "lv": "Ő adna"
    },
    "partizipVergangenheit": {
      "de": "gegeben",
      "lv": "Adott"
    }
  },
  {
    "infinitiv": {
      "de": "gedeihen",
      "lv": "Sikerül"
    },
    "praesens": {
      "de": "er gedeiht",
      "lv": "Sikerül neki"
    },
    "imperfektIndikativ": {
      "de": "er gedieh",
      "lv": "Sikerült neki"
    },
    "imperfektKonjunktiv": {
      "de": "er gediehe",
      "lv": "Sikerülne neki"
    },
    "partizipVergangenheit": {
      "de": "gediehen (er ist)",
      "lv": "Sikerült"
    }
  },
  {
    "infinitiv": {
      "de": "gehen",
      "lv": "Megy"
    },
    "praesens": {
      "de": "er geht",
      "lv": "Ő megy"
    },
    "imperfektIndikativ": {
      "de": "er ging",
      "lv": "Sétált"
    },
    "imperfektKonjunktiv": {
      "de": "er ginge",
      "lv": "Menne"
    },
    "partizipVergangenheit": {
      "de": "gegangen (er ist)",
      "lv": "Ment"
    }
  },
  {
    "infinitiv": {
      "de": "gewinnen",
      "lv": "Megszerezni"
    },
    "praesens": {
      "de": "er gewinnt",
      "lv": "Megkapja"
    },
    "imperfektIndikativ": {
      "de": "er gewann",
      "lv": "Megkapta"
    },
    "imperfektKonjunktiv": {
      "de": "er gewönne / er gewänne",
      "lv": "Megkapná"
    },
    "partizipVergangenheit": {
      "de": "gewonnen",
      "lv": "Kapott"
    }
  },
  {
    "infinitiv": {
      "de": "haben",
      "lv": "Lenni / tartozni"
    },
    "praesens": {
      "de": "er hat",
      "lv": "Van neki"
    },
    "imperfektIndikativ": {
      "de": "hatte",
      "lv": "Volt"
    },
    "imperfektKonjunktiv": {
      "de": "hatte",
      "lv": "Volt"
    },
    "partizipVergangenheit": {
      "de": "gehabt",
      "lv": "Volt"
    }
  },
  {
    "infinitiv": {
      "de": "halten",
      "lv": "Tart"
    },
    "praesens": {
      "de": "er hält",
      "lv": "Ő ott"
    },
    "imperfektIndikativ": {
      "de": "er hielt",
      "lv": "Tartotta"
    },
    "imperfektKonjunktiv": {
      "de": "er hielte",
      "lv": "Tartaná"
    },
    "partizipVergangenheit": {
      "de": "gehalten",
      "lv": "Tartott"
    }
  },
  {
    "infinitiv": {
      "de": "heißen",
      "lv": "Felhívni"
    },
    "praesens": {
      "de": "er heißt",
      "lv": "Hív / hívják"
    },
    "imperfektIndikativ": {
      "de": "er hieß",
      "lv": "Hívta / hívták"
    },
    "imperfektKonjunktiv": {
      "de": "er hieße",
      "lv": "Hívná / hívná"
    },
    "partizipVergangenheit": {
      "de": "geheißen",
      "lv": "Hívott"
    }
  },
  {
    "infinitiv": {
      "de": "helfen",
      "lv": "Hogy segítsenek"
    },
    "praesens": {
      "de": "er hilft",
      "lv": "Ő segít"
    },
    "imperfektIndikativ": {
      "de": "er half",
      "lv": "Ő segített"
    },
    "imperfektKonjunktiv": {
      "de": "er hülfe / er hälfe",
      "lv": "Ő segítene"
    },
    "partizipVergangenheit": {
      "de": "geholfen",
      "lv": "Segített"
    }
  },
  {
    "infinitiv": {
      "de": "kommen",
      "lv": "Hogy jöjjön"
    },
    "praesens": {
      "de": "er kommt",
      "lv": "Ő jön"
    },
    "imperfektIndikativ": {
      "de": "er kam",
      "lv": "Ő jött"
    },
    "imperfektKonjunktiv": {
      "de": "er käme",
      "lv": "Jönne"
    },
    "partizipVergangenheit": {
      "de": "gekommen (er ist)",
      "lv": "Megjött"
    }
  },
  {
    "infinitiv": {
      "de": "können",
      "lv": "Képes legyen"
    },
    "praesens": {
      "de": "er kann",
      "lv": "Tudja"
    },
    "imperfektIndikativ": {
      "de": "konnte",
      "lv": "Tudott"
    },
    "imperfektKonjunktiv": {
      "de": "konnte",
      "lv": "Tudott"
    },
    "partizipVergangenheit": {
      "de": "gekonnt",
      "lv": "Tudott"
    }
  },
  {
    "infinitiv": {
      "de": "kriechen",
      "lv": "Esik az eső"
    },
    "praesens": {
      "de": "er kriecht",
      "lv": "Meghajol"
    },
    "imperfektIndikativ": {
      "de": "er kroch",
      "lv": "Esett az eső"
    },
    "imperfektKonjunktiv": {
      "de": "er kröche",
      "lv": "Esik az eső"
    },
    "partizipVergangenheit": {
      "de": "gekrochen (er ist)",
      "lv": "Elhunyt"
    }
  },
  {
    "infinitiv": {
      "de": "laden",
      "lv": "Betölteni, meghívni"
    },
    "praesens": {
      "de": "er lädt",
      "lv": "Felhalmoz / meghív"
    },
    "imperfektIndikativ": {
      "de": "er lud",
      "lv": "Betöltötte / meghívta"
    },
    "imperfektKonjunktiv": {
      "de": "er lüde",
      "lv": "Betöltené / meghívná"
    },
    "partizipVergangenheit": {
      "de": "geladen",
      "lv": "Betöltve / meghívva"
    }
  },
  {
    "infinitiv": {
      "de": "lassen",
      "lv": "Rakni, engedni"
    },
    "praesens": {
      "de": "er lässt",
      "lv": "Tesz / enged"
    },
    "imperfektIndikativ": {
      "de": "er ließ",
      "lv": "Parancsolta / megengedte"
    },
    "imperfektKonjunktiv": {
      "de": "er ließe",
      "lv": "Tenné / engedné"
    },
    "partizipVergangenheit": {
      "de": "gelassen",
      "lv": "Tegye / engedélyezett"
    }
  },
  {
    "infinitiv": {
      "de": "laufen",
      "lv": "Futni"
    },
    "praesens": {
      "de": "er läuft",
      "lv": "Ő fut"
    },
    "imperfektIndikativ": {
      "de": "er lief",
      "lv": "Futott"
    },
    "imperfektKonjunktiv": {
      "de": "er liefe",
      "lv": "Futna"
    },
    "partizipVergangenheit": {
      "de": "gelaufen (er ist)",
      "lv": "Futott"
    }
  },
  {
    "infinitiv": {
      "de": "leiden",
      "lv": "Szenvedni"
    },
    "praesens": {
      "de": "er leidet",
      "lv": "Szenved"
    },
    "imperfektIndikativ": {
      "de": "er litt",
      "lv": "Szenvedett"
    },
    "imperfektKonjunktiv": {
      "de": "er litte",
      "lv": "Szenvedne"
    },
    "partizipVergangenheit": {
      "de": "gelitten",
      "lv": "Szenvedett"
    }
  },
  {
    "infinitiv": {
      "de": "leihen",
      "lv": "Kölcsön/kölcsön"
    },
    "praesens": {
      "de": "er leiht",
      "lv": "Kölcsönad / kölcsönad"
    },
    "imperfektIndikativ": {
      "de": "er lieh",
      "lv": "Kölcsönadott / kölcsönvett"
    },
    "imperfektKonjunktiv": {
      "de": "er liehe",
      "lv": "Kölcsönadna / kölcsönadna"
    },
    "partizipVergangenheit": {
      "de": "geliehen",
      "lv": "Kölcsönzött / kölcsönvett"
    }
  },
  {
    "infinitiv": {
      "de": "lesen",
      "lv": "Olvasni"
    },
    "praesens": {
      "de": "er liest",
      "lv": "Ő olvas"
    },
    "imperfektIndikativ": {
      "de": "er las",
      "lv": "Olvasott"
    },
    "imperfektKonjunktiv": {
      "de": "er läse",
      "lv": "Olvasna"
    },
    "partizipVergangenheit": {
      "de": "gelesen",
      "lv": "Olvas"
    }
  },
  {
    "infinitiv": {
      "de": "liegen",
      "lv": "Aludni"
    },
    "praesens": {
      "de": "er liegt",
      "lv": "Ő alszik"
    },
    "imperfektIndikativ": {
      "de": "er lag",
      "lv": "Aludt"
    },
    "imperfektKonjunktiv": {
      "de": "er läge",
      "lv": "Aludna"
    },
    "partizipVergangenheit": {
      "de": "gelegen",
      "lv": "Aludt"
    }
  },
  {
    "infinitiv": {
      "de": "lügen",
      "lv": "Hazudni"
    },
    "praesens": {
      "de": "er lügt",
      "lv": "Hazudik"
    },
    "imperfektIndikativ": {
      "de": "er log",
      "lv": "Hazudott"
    },
    "imperfektKonjunktiv": {
      "de": "er löge",
      "lv": "Hazudna"
    },
    "partizipVergangenheit": {
      "de": "gelogen",
      "lv": "Hazudott"
    }
  },
  {
    "infinitiv": {
      "de": "mahlen",
      "lv": "Föld"
    },
    "praesens": {
      "de": "er mahlt",
      "lv": "Őröl"
    },
    "imperfektIndikativ": {
      "de": "er mahlte",
      "lv": "Ő él"
    },
    "imperfektKonjunktiv": {
      "de": "er malte",
      "lv": "Őröl"
    },
    "partizipVergangenheit": {
      "de": "gemahlen",
      "lv": "Föld"
    }
  },
  {
    "infinitiv": {
      "de": "meiden",
      "lv": "Elkerül"
    },
    "praesens": {
      "de": "er meidet",
      "lv": "Kerüli"
    },
    "imperfektIndikativ": {
      "de": "er mied",
      "lv": "Kerülte"
    },
    "imperfektKonjunktiv": {
      "de": "er miede",
      "lv": "Elkerülné"
    },
    "partizipVergangenheit": {
      "de": "gemieden",
      "lv": "Elkerülve"
    }
  },
  {
    "infinitiv": {
      "de": "melken",
      "lv": "Fejni"
    },
    "praesens": {
      "de": "er milkt / er melkt",
      "lv": "Söpör"
    },
    "imperfektIndikativ": {
      "de": "er molk / er melkte",
      "lv": "Söpört"
    },
    "imperfektKonjunktiv": {
      "de": "er mölke / er melkte",
      "lv": "Megfejne"
    },
    "partizipVergangenheit": {
      "de": "gemolken / gemelkt",
      "lv": "Fejt"
    }
  },
  {
    "infinitiv": {
      "de": "messen",
      "lv": "Mérni"
    },
    "praesens": {
      "de": "er misst",
      "lv": "Méri"
    },
    "imperfektIndikativ": {
      "de": "er mass",
      "lv": "– mérte végig"
    },
    "imperfektKonjunktiv": {
      "de": "er mäße",
      "lv": "Megmérné"
    },
    "partizipVergangenheit": {
      "de": "gemessen",
      "lv": "Mért"
    }
  },
  {
    "infinitiv": {
      "de": "misslingen",
      "lv": "Megbukni"
    },
    "praesens": {
      "de": "es misslingt",
      "lv": "Nem sikerül"
    },
    "imperfektIndikativ": {
      "de": "misslang",
      "lv": "Sikertelen"
    },
    "imperfektKonjunktiv": {
      "de": "misslang",
      "lv": "Sikertelen"
    },
    "partizipVergangenheit": {
      "de": "misslungen",
      "lv": "Sikertelen"
    }
  },
  {
    "infinitiv": {
      "de": "mögen",
      "lv": "Kedvelni"
    },
    "praesens": {
      "de": "er mag",
      "lv": "Tetszik neki"
    },
    "imperfektIndikativ": {
      "de": "mochte",
      "lv": "Tetszett"
    },
    "imperfektKonjunktiv": {
      "de": "mochte",
      "lv": "Tetszett"
    },
    "partizipVergangenheit": {
      "de": "gemocht",
      "lv": "Tetszett"
    }
  },
  {
    "infinitiv": {
      "de": "müssen",
      "lv": "Hogy szüksége van"
    },
    "praesens": {
      "de": "er muss",
      "lv": "Kell neki"
    },
    "imperfektIndikativ": {
      "de": "musste",
      "lv": "Kellett volna"
    },
    "imperfektKonjunktiv": {
      "de": "musste",
      "lv": "Kellett volna"
    },
    "partizipVergangenheit": {
      "de": "gemusst",
      "lv": "Szükséges"
    }
  },
  {
    "infinitiv": {
      "de": "nehmen",
      "lv": "Venni"
    },
    "praesens": {
      "de": "er nimmt",
      "lv": "Veszi"
    },
    "imperfektIndikativ": {
      "de": "er nahm",
      "lv": "Elvette"
    },
    "imperfektKonjunktiv": {
      "de": "er nähme",
      "lv": "Venné"
    },
    "partizipVergangenheit": {
      "de": "genommen",
      "lv": "Vett"
    }
  },
  {
    "infinitiv": {
      "de": "nennen",
      "lv": "Megnevezni"
    },
    "praesens": {
      "de": "er nennt",
      "lv": "Nevezte meg"
    },
    "imperfektIndikativ": {
      "de": "er nannte",
      "lv": "Hívott"
    },
    "imperfektKonjunktiv": {
      "de": "er nennte",
      "lv": "Megnevezné"
    },
    "partizipVergangenheit": {
      "de": "genannt",
      "lv": "Nevű"
    }
  },
  {
    "infinitiv": {
      "de": "pfeifen",
      "lv": "Fütyülni"
    },
    "praesens": {
      "de": "er pfeift",
      "lv": "Fütyül"
    },
    "imperfektIndikativ": {
      "de": "er pfiff",
      "lv": "Füttyentett"
    },
    "imperfektKonjunktiv": {
      "de": "er pfiffe",
      "lv": "Fütyülne"
    },
    "partizipVergangenheit": {
      "de": "gepfiffen",
      "lv": "Fütyült"
    }
  },
  {
    "infinitiv": {
      "de": "pflegen",
      "lv": "Fenntartani"
    },
    "praesens": {
      "de": "er pflegt",
      "lv": "Törődik vele"
    },
    "imperfektIndikativ": {
      "de": "pflegte vai pflog",
      "lv": "Készlet"
    },
    "imperfektKonjunktiv": {
      "de": "pflegte vai pflog",
      "lv": "Készlet"
    },
    "partizipVergangenheit": {
      "de": "gepflegt vai gepflogen",
      "lv": "Ápolt"
    }
  },
  {
    "infinitiv": {
      "de": "preisen",
      "lv": "Dicséret"
    },
    "praesens": {
      "de": "er preist",
      "lv": "Dicséri"
    },
    "imperfektIndikativ": {
      "de": "er pries",
      "lv": "– dicsérte meg"
    },
    "imperfektKonjunktiv": {
      "de": "er priese",
      "lv": "Megdicsérné"
    },
    "partizipVergangenheit": {
      "de": "gepriesen",
      "lv": "Dicsérte"
    }
  },
  {
    "infinitiv": {
      "de": "quellen",
      "lv": "Felpuffad"
    },
    "praesens": {
      "de": "er quillt",
      "lv": "Meghízik"
    },
    "imperfektIndikativ": {
      "de": "er quoll",
      "lv": "Érlelődött"
    },
    "imperfektKonjunktiv": {
      "de": "er quölle",
      "lv": "Ő kövér"
    },
    "partizipVergangenheit": {
      "de": "gequollen (er ist)",
      "lv": "Duzzadt"
    }
  },
  {
    "infinitiv": {
      "de": "raten",
      "lv": "Javasol / említ"
    },
    "praesens": {
      "de": "er rät",
      "lv": "Ajánlja / min"
    },
    "imperfektIndikativ": {
      "de": "er riet",
      "lv": "Javasolta / javasolta"
    },
    "imperfektKonjunktiv": {
      "de": "er riete",
      "lv": "Javasolna / megemlítené"
    },
    "partizipVergangenheit": {
      "de": "geraten",
      "lv": "Javasolt/említett"
    }
  },
  {
    "infinitiv": {
      "de": "reiben",
      "lv": "Dörzsölni"
    },
    "praesens": {
      "de": "er reibt",
      "lv": "Dörzsöli"
    },
    "imperfektIndikativ": {
      "de": "er rieb",
      "lv": "Dörzsöli"
    },
    "imperfektKonjunktiv": {
      "de": "er riebe",
      "lv": "Dörzsölné"
    },
    "partizipVergangenheit": {
      "de": "gerieben",
      "lv": "Dörzsölte"
    }
  },
  {
    "infinitiv": {
      "de": "reißen",
      "lv": "Húzni"
    },
    "praesens": {
      "de": "er reißt",
      "lv": "– csattan fel"
    },
    "imperfektIndikativ": {
      "de": "er riss",
      "lv": "– csattant fel"
    },
    "imperfektKonjunktiv": {
      "de": "er risse",
      "lv": "– csattant fel"
    },
    "partizipVergangenheit": {
      "de": "gerissen",
      "lv": "Szakadt"
    }
  },
  {
    "infinitiv": {
      "de": "reiten",
      "lv": "Lovagolni"
    },
    "praesens": {
      "de": "er reitet",
      "lv": "Lovagol"
    },
    "imperfektIndikativ": {
      "de": "er ritt",
      "lv": "Lovagolt"
    },
    "imperfektKonjunktiv": {
      "de": "er ritte",
      "lv": "Lovagolna"
    },
    "partizipVergangenheit": {
      "de": "geritten (er ist)",
      "lv": "Lovagolt"
    }
  },
  {
    "infinitiv": {
      "de": "rennen",
      "lv": "Futni"
    },
    "praesens": {
      "de": "er rennt",
      "lv": "Ő fut"
    },
    "imperfektIndikativ": {
      "de": "er rannte",
      "lv": "Futott"
    },
    "imperfektKonjunktiv": {
      "de": "er rennte",
      "lv": "Futna"
    },
    "partizipVergangenheit": {
      "de": "gerannt",
      "lv": "Futott"
    }
  },
  {
    "infinitiv": {
      "de": "riechen",
      "lv": "Ost"
    },
    "praesens": {
      "de": "er riecht",
      "lv": "Megszagolja"
    },
    "imperfektIndikativ": {
      "de": "er roch",
      "lv": "Énekel"
    },
    "imperfektKonjunktiv": {
      "de": "er röche",
      "lv": "Ő port"
    },
    "partizipVergangenheit": {
      "de": "gerochen",
      "lv": "Kikötő"
    }
  },
  {
    "infinitiv": {
      "de": "ringen",
      "lv": "Megtörni"
    },
    "praesens": {
      "de": "er ringt",
      "lv": "Megtöri"
    },
    "imperfektIndikativ": {
      "de": "er rang",
      "lv": "Összetört"
    },
    "imperfektKonjunktiv": {
      "de": "er ränge",
      "lv": "Megtörne"
    },
    "partizipVergangenheit": {
      "de": "gerungen",
      "lv": "Várjon"
    }
  },
  {
    "infinitiv": {
      "de": "rinnen",
      "lv": "Folyni"
    },
    "praesens": {
      "de": "er rinnt",
      "lv": "Ő fut"
    },
    "imperfektIndikativ": {
      "de": "er rann",
      "lv": "Futott"
    },
    "imperfektKonjunktiv": {
      "de": "er ränne / er rönne",
      "lv": "Futna"
    },
    "partizipVergangenheit": {
      "de": "geronnen (er ist)",
      "lv": "Elfolyt / alvadt"
    }
  },
  {
    "infinitiv": {
      "de": "rufen",
      "lv": "Felhívni"
    },
    "praesens": {
      "de": "er ruft",
      "lv": "Hívja"
    },
    "imperfektIndikativ": {
      "de": "er rief",
      "lv": "Hívott"
    },
    "imperfektKonjunktiv": {
      "de": "er riefe",
      "lv": "Hívna"
    },
    "partizipVergangenheit": {
      "de": "gerufen",
      "lv": "Hívott"
    }
  },
  {
    "infinitiv": {
      "de": "salzen",
      "lv": "Sózni"
    },
    "praesens": {
      "de": "er salzt",
      "lv": "Megsózta"
    },
    "imperfektIndikativ": {
      "de": "er salzte",
      "lv": "Megsózta"
    },
    "imperfektKonjunktiv": {
      "de": "er salzte",
      "lv": "Megsózná"
    },
    "partizipVergangenheit": {
      "de": "gesalzen",
      "lv": "Sózott"
    }
  },
  {
    "infinitiv": {
      "de": "saufen",
      "lv": "Szárítani / inni"
    },
    "praesens": {
      "de": "er säuft",
      "lv": "Iszik / iszik"
    },
    "imperfektIndikativ": {
      "de": "er soff",
      "lv": "Ivott / ivott"
    },
    "imperfektKonjunktiv": {
      "de": "er söffe",
      "lv": "Inna / inna"
    },
    "partizipVergangenheit": {
      "de": "gesoffen",
      "lv": "Részeg"
    }
  },
  {
    "infinitiv": {
      "de": "saugen",
      "lv": "Szív"
    },
    "praesens": {
      "de": "er saugt",
      "lv": "Ő szívja"
    },
    "imperfektIndikativ": {
      "de": "er sog",
      "lv": "Megszívta"
    },
    "imperfektKonjunktiv": {
      "de": "er söge",
      "lv": "Megszívná"
    },
    "partizipVergangenheit": {
      "de": "gesogen",
      "lv": "Szívott"
    }
  },
  {
    "infinitiv": {
      "de": "schaffen",
      "lv": "Létrehozni"
    },
    "praesens": {
      "de": "er schafft",
      "lv": "Ő alkot"
    },
    "imperfektIndikativ": {
      "de": "er schuf",
      "lv": "Teremtett"
    },
    "imperfektKonjunktiv": {
      "de": "er schüfe",
      "lv": "Ő teremtene"
    },
    "partizipVergangenheit": {
      "de": "geschaffen",
      "lv": "Létre"
    }
  },
  {
    "infinitiv": {
      "de": "schallen",
      "lv": "Hogy megszólaljon"
    },
    "praesens": {
      "de": "es schallt",
      "lv": "Úgy hangzik"
    },
    "imperfektIndikativ": {
      "de": "schallte vai scholl",
      "lv": "Hangzott el"
    },
    "imperfektKonjunktiv": {
      "de": "schallte vai scholl",
      "lv": "Hangzott el"
    },
    "partizipVergangenheit": {
      "de": "geschallt",
      "lv": "Hangzott el"
    }
  },
  {
    "infinitiv": {
      "de": "scheiden",
      "lv": "Válás / szakítás"
    },
    "praesens": {
      "de": "er scheidet",
      "lv": "Váló / válófélben van"
    },
    "imperfektIndikativ": {
      "de": "er schied",
      "lv": "Elvált / elvált"
    },
    "imperfektKonjunktiv": {
      "de": "er schiede",
      "lv": "Elválna / válna"
    },
    "partizipVergangenheit": {
      "de": "geschieden (er hat / er ist)",
      "lv": "Elvált / elvált"
    }
  },
  {
    "infinitiv": {
      "de": "scheinen",
      "lv": "Ragyog / jelenik meg"
    },
    "praesens": {
      "de": "er scheint",
      "lv": "Ragyog / látszik"
    },
    "imperfektIndikativ": {
      "de": "er schien",
      "lv": "Ragyogott / látszott"
    },
    "imperfektKonjunktiv": {
      "de": "er schiene",
      "lv": "Ragyogna / látszana"
    },
    "partizipVergangenheit": {
      "de": "geschienen",
      "lv": "Ragyogott / látszott"
    }
  },
  {
    "infinitiv": {
      "de": "schelten",
      "lv": "Bart"
    },
    "praesens": {
      "de": "er schilt",
      "lv": "– szidja"
    },
    "imperfektIndikativ": {
      "de": "er schalt",
      "lv": "Letiltotta"
    },
    "imperfektKonjunktiv": {
      "de": "er schölte / er schälte",
      "lv": "Borotválkozik"
    },
    "partizipVergangenheit": {
      "de": "gescholten",
      "lv": "Szakáll"
    }
  },
  {
    "infinitiv": {
      "de": "scheren",
      "lv": "Vágni"
    },
    "praesens": {
      "de": "er schert",
      "lv": "Vágja"
    },
    "imperfektIndikativ": {
      "de": "schor vai scherte",
      "lv": "Olló"
    },
    "imperfektKonjunktiv": {
      "de": "schor vai scherte",
      "lv": "Olló"
    },
    "partizipVergangenheit": {
      "de": "geschoren vai geschert",
      "lv": "Vágva"
    }
  },
  {
    "infinitiv": {
      "de": "schieben",
      "lv": "Tolni"
    },
    "praesens": {
      "de": "er schiebt",
      "lv": "Löki"
    },
    "imperfektIndikativ": {
      "de": "er schob",
      "lv": "Meglökte"
    },
    "imperfektKonjunktiv": {
      "de": "er schöbe",
      "lv": "Nyomná"
    },
    "partizipVergangenheit": {
      "de": "geschoben",
      "lv": "Lökött"
    }
  },
  {
    "infinitiv": {
      "de": "schießen",
      "lv": "Lőni"
    },
    "praesens": {
      "de": "er schießt",
      "lv": "Ő lő"
    },
    "imperfektIndikativ": {
      "de": "er schoss",
      "lv": "Lőtt"
    },
    "imperfektKonjunktiv": {
      "de": "er schösse",
      "lv": "Lőne"
    },
    "partizipVergangenheit": {
      "de": "geschossen",
      "lv": "Lövés"
    }
  },
  {
    "infinitiv": {
      "de": "schinden",
      "lv": "Kín"
    },
    "praesens": {
      "de": "er schindet",
      "lv": "Gyötrődik"
    },
    "imperfektIndikativ": {
      "de": "schindete",
      "lv": "Meggyötört"
    },
    "imperfektKonjunktiv": {
      "de": "schindete",
      "lv": "Meggyötört"
    },
    "partizipVergangenheit": {
      "de": "geschunden",
      "lv": "Meggyötört"
    }
  },
  {
    "infinitiv": {
      "de": "schlafen",
      "lv": "Aludni"
    },
    "praesens": {
      "de": "er schläft",
      "lv": "Ő alszik"
    },
    "imperfektIndikativ": {
      "de": "er schlief",
      "lv": "Aludt"
    },
    "imperfektKonjunktiv": {
      "de": "er schliefe",
      "lv": "Aludna"
    },
    "partizipVergangenheit": {
      "de": "geschlafen",
      "lv": "Aludt"
    }
  },
  {
    "infinitiv": {
      "de": "schlagen",
      "lv": "Találat"
    },
    "praesens": {
      "de": "er schlägt",
      "lv": "Üti"
    },
    "imperfektIndikativ": {
      "de": "er schlug",
      "lv": "Megütötte"
    },
    "imperfektKonjunktiv": {
      "de": "er schlüge",
      "lv": "Megütné"
    },
    "partizipVergangenheit": {
      "de": "geschlagen",
      "lv": "Megverték"
    }
  },
  {
    "infinitiv": {
      "de": "schleichen",
      "lv": "Esik az eső"
    },
    "praesens": {
      "de": "er schleicht",
      "lv": "Meghajol"
    },
    "imperfektIndikativ": {
      "de": "er schlich",
      "lv": "Esett az eső"
    },
    "imperfektKonjunktiv": {
      "de": "er schliche",
      "lv": "Esik az eső"
    },
    "partizipVergangenheit": {
      "de": "geschlichen (er ist)",
      "lv": "Elhunyt"
    }
  },
  {
    "infinitiv": {
      "de": "schleifen",
      "lv": "Őrölni"
    },
    "praesens": {
      "de": "er schleift",
      "lv": "Őröl"
    },
    "imperfektIndikativ": {
      "de": "er schliff",
      "lv": "Darált"
    },
    "imperfektKonjunktiv": {
      "de": "er schliffe",
      "lv": "Őrölné"
    },
    "partizipVergangenheit": {
      "de": "geschliffen",
      "lv": "Csiszolt"
    }
  },
  {
    "infinitiv": {
      "de": "schließen",
      "lv": "Bezárni"
    },
    "praesens": {
      "de": "er schließt",
      "lv": "Bezárja"
    },
    "imperfektIndikativ": {
      "de": "er schloss",
      "lv": "– zárta be"
    },
    "imperfektKonjunktiv": {
      "de": "er schlösse",
      "lv": "Bezárná"
    },
    "partizipVergangenheit": {
      "de": "geschlossen",
      "lv": "Zárt"
    }
  },
  {
    "infinitiv": {
      "de": "schlingen",
      "lv": "Holnap"
    },
    "praesens": {
      "de": "er schlingt",
      "lv": "Nyel egyet"
    },
    "imperfektIndikativ": {
      "de": "er schlang",
      "lv": "Nyelt egyet"
    },
    "imperfektKonjunktiv": {
      "de": "er schlänge",
      "lv": "Ő reggel"
    },
    "partizipVergangenheit": {
      "de": "geschlungen",
      "lv": "A reggel"
    }
  },
  {
    "infinitiv": {
      "de": "schmeißen",
      "lv": "Dobás"
    },
    "praesens": {
      "de": "er schmeißt",
      "lv": "Bedobja"
    },
    "imperfektIndikativ": {
      "de": "er schmiss",
      "lv": "– dobta"
    },
    "imperfektKonjunktiv": {
      "de": "er schmisse",
      "lv": "– dobta"
    },
    "partizipVergangenheit": {
      "de": "geschmissen",
      "lv": "Dobott"
    }
  },
  {
    "infinitiv": {
      "de": "schmelzen",
      "lv": "Mozgó"
    },
    "praesens": {
      "de": "er schmilzt",
      "lv": "Elolvad"
    },
    "imperfektIndikativ": {
      "de": "er schmolz",
      "lv": "– nyögte fel"
    },
    "imperfektKonjunktiv": {
      "de": "er schmölze",
      "lv": "Mozgott"
    },
    "partizipVergangenheit": {
      "de": "geschmolzen (er ist)",
      "lv": "Olvasztott"
    }
  },
  {
    "infinitiv": {
      "de": "schnauben",
      "lv": "Sziszegni"
    },
    "praesens": {
      "de": "er schnaubt",
      "lv": "– horkant fel"
    },
    "imperfektIndikativ": {
      "de": "schnaubte vai schnob",
      "lv": "Felhorkantott"
    },
    "imperfektKonjunktiv": {
      "de": "schnaubte vai schnob",
      "lv": "Felhorkantott"
    },
    "partizipVergangenheit": {
      "de": "geschnaubt vai geschnoben",
      "lv": "Horkant"
    }
  },
  {
    "infinitiv": {
      "de": "schneiden",
      "lv": "Vágni"
    },
    "praesens": {
      "de": "er schneidet",
      "lv": "Pörög"
    },
    "imperfektIndikativ": {
      "de": "er schnitt",
      "lv": "Vágott"
    },
    "imperfektKonjunktiv": {
      "de": "er schnitte",
      "lv": "Vágna"
    },
    "partizipVergangenheit": {
      "de": "geschnitten",
      "lv": "Vágott"
    }
  },
  {
    "infinitiv": {
      "de": "schreiben",
      "lv": "Írni"
    },
    "praesens": {
      "de": "er schreibt",
      "lv": "– írja"
    },
    "imperfektIndikativ": {
      "de": "er schrieb",
      "lv": "– írta"
    },
    "imperfektKonjunktiv": {
      "de": "er schriebe",
      "lv": "Írna"
    },
    "partizipVergangenheit": {
      "de": "geschrieben",
      "lv": "Írott"
    }
  },
  {
    "infinitiv": {
      "de": "schreien",
      "lv": "Kiabálni"
    },
    "praesens": {
      "de": "er schreit",
      "lv": "– kiáltja"
    },
    "imperfektIndikativ": {
      "de": "er schrie",
      "lv": "– kiáltotta"
    },
    "imperfektKonjunktiv": {
      "de": "er schriee",
      "lv": "Kiabálna"
    },
    "partizipVergangenheit": {
      "de": "geschrien",
      "lv": "– kiáltotta"
    }
  },
  {
    "infinitiv": {
      "de": "schreiten",
      "lv": "Gyaloglás"
    },
    "praesens": {
      "de": "er schreitet",
      "lv": "Sétál"
    },
    "imperfektIndikativ": {
      "de": "er schritt",
      "lv": "Sétált"
    },
    "imperfektKonjunktiv": {
      "de": "er schritte",
      "lv": "Járna"
    },
    "partizipVergangenheit": {
      "de": "geschritten (er ist)",
      "lv": "Sétált"
    }
  },
  {
    "infinitiv": {
      "de": "schweigen",
      "lv": "Maradj csendben"
    },
    "praesens": {
      "de": "er schweigt",
      "lv": "Hallgat"
    },
    "imperfektIndikativ": {
      "de": "er schwieg",
      "lv": "Elhallgatott"
    },
    "imperfektKonjunktiv": {
      "de": "er schwiege",
      "lv": "Elhallgatna"
    },
    "partizipVergangenheit": {
      "de": "geschwiegen",
      "lv": "Hangtompítós"
    }
  },
  {
    "infinitiv": {
      "de": "schwellen",
      "lv": "Pamp"
    },
    "praesens": {
      "de": "er schwillt",
      "lv": "Duzzog"
    },
    "imperfektIndikativ": {
      "de": "er schwoll",
      "lv": "Ő pampa"
    },
    "imperfektKonjunktiv": {
      "de": "er schwölle",
      "lv": "Pumpálna"
    },
    "partizipVergangenheit": {
      "de": "geschwollen (er ist)",
      "lv": "Szivattyú"
    }
  },
  {
    "infinitiv": {
      "de": "schwimmen",
      "lv": "Úszni"
    },
    "praesens": {
      "de": "er schwimmt",
      "lv": "Ő úszik"
    },
    "imperfektIndikativ": {
      "de": "er schwamm",
      "lv": "Úszott"
    },
    "imperfektKonjunktiv": {
      "de": "er schwömme / er schwämme",
      "lv": "Úszna"
    },
    "partizipVergangenheit": {
      "de": "geschwommen (er ist)",
      "lv": "Úszott"
    }
  },
  {
    "infinitiv": {
      "de": "schwinden",
      "lv": "Eltűnik"
    },
    "praesens": {
      "de": "er schwindet",
      "lv": "Ő eltűnik"
    },
    "imperfektIndikativ": {
      "de": "er schwand",
      "lv": "Eltűnt"
    },
    "imperfektKonjunktiv": {
      "de": "er schwände",
      "lv": "Eltűnne"
    },
    "partizipVergangenheit": {
      "de": "geschwunden (er ist)",
      "lv": "Elveszett"
    }
  },
  {
    "infinitiv": {
      "de": "schwingen",
      "lv": "Hullám"
    },
    "praesens": {
      "de": "er schwingt",
      "lv": "Integet"
    },
    "imperfektIndikativ": {
      "de": "er schwang",
      "lv": "Legyintett"
    },
    "imperfektKonjunktiv": {
      "de": "er schwänge",
      "lv": "Integetne"
    },
    "partizipVergangenheit": {
      "de": "geschwungen",
      "lv": "Hullámos"
    }
  },
  {
    "infinitiv": {
      "de": "schwören",
      "lv": "Esküdni"
    },
    "praesens": {
      "de": "er schwört",
      "lv": "Esküszik"
    },
    "imperfektIndikativ": {
      "de": "er schwur / er schwor",
      "lv": "Megesküdött"
    },
    "imperfektKonjunktiv": {
      "de": "er schwöre",
      "lv": "Megesküdne"
    },
    "partizipVergangenheit": {
      "de": "geschworen",
      "lv": "Hites"
    }
  },
  {
    "infinitiv": {
      "de": "sehen",
      "lv": "Látni"
    },
    "praesens": {
      "de": "er sieht",
      "lv": "Látja"
    },
    "imperfektIndikativ": {
      "de": "er sah",
      "lv": "Látta"
    },
    "imperfektKonjunktiv": {
      "de": "er sähe",
      "lv": "Látná"
    },
    "partizipVergangenheit": {
      "de": "gesehen",
      "lv": "Látott"
    }
  },
  {
    "infinitiv": {
      "de": "sein",
      "lv": "Lenni"
    },
    "praesens": {
      "de": "er ist",
      "lv": "Ő az"
    },
    "imperfektIndikativ": {
      "de": "war",
      "lv": "Volt"
    },
    "imperfektKonjunktiv": {
      "de": "war",
      "lv": "Volt"
    },
    "partizipVergangenheit": {
      "de": "gewesen",
      "lv": "Volt"
    }
  },
  {
    "infinitiv": {
      "de": "senden",
      "lv": "Küldeni"
    },
    "praesens": {
      "de": "er sendet",
      "lv": "Ő küldi"
    },
    "imperfektIndikativ": {
      "de": "er sandte / er sendete",
      "lv": "Elküldte"
    },
    "imperfektKonjunktiv": {
      "de": "er sendete",
      "lv": "Küldene"
    },
    "partizipVergangenheit": {
      "de": "gesandt / gesendet",
      "lv": "Küldött"
    }
  },
  {
    "infinitiv": {
      "de": "sieden",
      "lv": "Felforralni"
    },
    "praesens": {
      "de": "er siedet",
      "lv": "Ő főz"
    },
    "imperfektIndikativ": {
      "de": "sott vai siedete",
      "lv": "Főtt"
    },
    "imperfektKonjunktiv": {
      "de": "sott vai siedete",
      "lv": "Főtt"
    },
    "partizipVergangenheit": {
      "de": "gesotten vai gesiedet",
      "lv": "Főtt"
    }
  },
  {
    "infinitiv": {
      "de": "singen",
      "lv": "Énekelni"
    },
    "praesens": {
      "de": "er singt",
      "lv": "Énekel"
    },
    "imperfektIndikativ": {
      "de": "er sang",
      "lv": "Énekelt"
    },
    "imperfektKonjunktiv": {
      "de": "er sänge",
      "lv": "Énekelne"
    },
    "partizipVergangenheit": {
      "de": "gesungen",
      "lv": "Énekelte"
    }
  },
  {
    "infinitiv": {
      "de": "sinken",
      "lv": "Elsüllyedni"
    },
    "praesens": {
      "de": "er sinkt",
      "lv": "Ő süllyed"
    },
    "imperfektIndikativ": {
      "de": "er sank",
      "lv": "Sminkelte"
    },
    "imperfektKonjunktiv": {
      "de": "er sänke",
      "lv": "Elsüllyedne"
    },
    "partizipVergangenheit": {
      "de": "gesunken (er ist)",
      "lv": "Sminkeljük"
    }
  },
  {
    "infinitiv": {
      "de": "sinnen",
      "lv": "Rácsodálkozni"
    },
    "praesens": {
      "de": "er sinnt",
      "lv": "Csodálkozik"
    },
    "imperfektIndikativ": {
      "de": "er sann",
      "lv": "– tűnődött"
    },
    "imperfektKonjunktiv": {
      "de": "er sönne / er sänne",
      "lv": "Csodálkozna"
    },
    "partizipVergangenheit": {
      "de": "gesonnen",
      "lv": "Gondolkodó"
    }
  },
  {
    "infinitiv": {
      "de": "sitzen",
      "lv": "Ülni"
    },
    "praesens": {
      "de": "er sitzt",
      "lv": "Ő ül"
    },
    "imperfektIndikativ": {
      "de": "er sass",
      "lv": "Ült"
    },
    "imperfektKonjunktiv": {
      "de": "er säße",
      "lv": "Ülne"
    },
    "partizipVergangenheit": {
      "de": "gesessen",
      "lv": "Leült"
    }
  },
  {
    "infinitiv": {
      "de": "sollen",
      "lv": "Kell / köteles"
    },
    "praesens": {
      "de": "er soll",
      "lv": "Kell neki"
    },
    "imperfektIndikativ": {
      "de": "sollte",
      "lv": "Kellett volna"
    },
    "imperfektKonjunktiv": {
      "de": "sollte",
      "lv": "Kellett volna"
    },
    "partizipVergangenheit": {
      "de": "gesollt",
      "lv": "Szükséges"
    }
  },
  {
    "infinitiv": {
      "de": "speien",
      "lv": "Köpni"
    },
    "praesens": {
      "de": "er speit",
      "lv": "Kiköpi"
    },
    "imperfektIndikativ": {
      "de": "er spie",
      "lv": "Kiköpte"
    },
    "imperfektKonjunktiv": {
      "de": "er spie",
      "lv": "Kiköpné"
    },
    "partizipVergangenheit": {
      "de": "gespien",
      "lv": "Kiköpött"
    }
  },
  {
    "infinitiv": {
      "de": "spinnen",
      "lv": "Spin"
    },
    "praesens": {
      "de": "er spinnt",
      "lv": "Csavarja"
    },
    "imperfektIndikativ": {
      "de": "er spann",
      "lv": "Megpördült"
    },
    "imperfektKonjunktiv": {
      "de": "er spönne / er spänne",
      "lv": "Pörögne"
    },
    "partizipVergangenheit": {
      "de": "gesponnen",
      "lv": "Fonott"
    }
  },
  {
    "infinitiv": {
      "de": "spleißen",
      "lv": "Csatlakozni"
    },
    "praesens": {
      "de": "er spleißt",
      "lv": "Ő kapcsol"
    },
    "imperfektIndikativ": {
      "de": "spliss",
      "lv": "Csatlakoztatva"
    },
    "imperfektKonjunktiv": {
      "de": "spliss",
      "lv": "Csatlakoztatva"
    },
    "partizipVergangenheit": {
      "de": "gesplissen",
      "lv": "Csatlakoztatva"
    }
  },
  {
    "infinitiv": {
      "de": "sprechen",
      "lv": "Beszélni"
    },
    "praesens": {
      "de": "er spricht",
      "lv": "Ő beszél"
    },
    "imperfektIndikativ": {
      "de": "er sprach",
      "lv": "Megszólalt"
    },
    "imperfektKonjunktiv": {
      "de": "er spräche",
      "lv": "Beszélne"
    },
    "partizipVergangenheit": {
      "de": "gesprochen",
      "lv": "Beszélt"
    }
  },
  {
    "infinitiv": {
      "de": "sprießen",
      "lv": "Gyarapodni"
    },
    "praesens": {
      "de": "er sprießt",
      "lv": "Gyarapodik"
    },
    "imperfektIndikativ": {
      "de": "er spross",
      "lv": "Gyarapodott"
    },
    "imperfektKonjunktiv": {
      "de": "er sprösse",
      "lv": "Ő polc"
    },
    "partizipVergangenheit": {
      "de": "gesprossen (er ist)",
      "lv": "A vállát"
    }
  },
  {
    "infinitiv": {
      "de": "springen",
      "lv": "Ugrani"
    },
    "praesens": {
      "de": "er springt",
      "lv": "Ugrik"
    },
    "imperfektIndikativ": {
      "de": "er sprang",
      "lv": "Ugrott"
    },
    "imperfektKonjunktiv": {
      "de": "er spränge",
      "lv": "Ugrálna"
    },
    "partizipVergangenheit": {
      "de": "gesprungen (er ist)",
      "lv": "Lencse"
    }
  },
  {
    "infinitiv": {
      "de": "stechen",
      "lv": "Szúr"
    },
    "praesens": {
      "de": "er sticht",
      "lv": "Ő szúr"
    },
    "imperfektIndikativ": {
      "de": "er stach",
      "lv": "Ököllel ütött"
    },
    "imperfektKonjunktiv": {
      "de": "er stäche",
      "lv": "Szúrna"
    },
    "partizipVergangenheit": {
      "de": "gestochen",
      "lv": "Leszúrta"
    }
  },
  {
    "infinitiv": {
      "de": "stecken",
      "lv": "Ragaszkodni / beragadni"
    },
    "praesens": {
      "de": "er steckt",
      "lv": "Löki"
    },
    "imperfektIndikativ": {
      "de": "stak vai steckte",
      "lv": "Töltött"
    },
    "imperfektKonjunktiv": {
      "de": "stak vai steckte",
      "lv": "Töltött"
    },
    "partizipVergangenheit": {
      "de": "gesteckt",
      "lv": "Töltött"
    }
  },
  {
    "infinitiv": {
      "de": "stehen",
      "lv": "Állni"
    },
    "praesens": {
      "de": "er steht",
      "lv": "Ő áll"
    },
    "imperfektIndikativ": {
      "de": "er stand",
      "lv": "Felállt"
    },
    "imperfektKonjunktiv": {
      "de": "er stände / er stünde",
      "lv": "Állna"
    },
    "partizipVergangenheit": {
      "de": "gestanden",
      "lv": "Álló"
    }
  },
  {
    "infinitiv": {
      "de": "stehlen",
      "lv": "Lopni"
    },
    "praesens": {
      "de": "er stiehlt",
      "lv": "Ő lop"
    },
    "imperfektIndikativ": {
      "de": "er stahl",
      "lv": "Ő lopott"
    },
    "imperfektKonjunktiv": {
      "de": "er stöhle / er stähle",
      "lv": "Lopna"
    },
    "partizipVergangenheit": {
      "de": "gestohlen",
      "lv": "Lopott"
    }
  },
  {
    "infinitiv": {
      "de": "steigen",
      "lv": "Mászni"
    },
    "praesens": {
      "de": "er steigt",
      "lv": "Felmászik"
    },
    "imperfektIndikativ": {
      "de": "er stieg",
      "lv": "Felmászott"
    },
    "imperfektKonjunktiv": {
      "de": "er stiege",
      "lv": "Mászna"
    },
    "partizipVergangenheit": {
      "de": "gestiegen (er ist)",
      "lv": "Felmászott"
    }
  },
  {
    "infinitiv": {
      "de": "sterben",
      "lv": "Meghalni"
    },
    "praesens": {
      "de": "er stirbt",
      "lv": "Haldoklik"
    },
    "imperfektIndikativ": {
      "de": "er starb",
      "lv": "Meghalt"
    },
    "imperfektKonjunktiv": {
      "de": "er stürbe",
      "lv": "Meghalna"
    },
    "partizipVergangenheit": {
      "de": "gestorben (er ist)",
      "lv": "Halott"
    }
  },
  {
    "infinitiv": {
      "de": "stieben",
      "lv": "Hab / örvény"
    },
    "praesens": {
      "de": "es stiebt",
      "lv": "Fúj"
    },
    "imperfektIndikativ": {
      "de": "stob vai stiebte",
      "lv": "Habosodott"
    },
    "imperfektKonjunktiv": {
      "de": "stob vai stiebte",
      "lv": "Habosodott"
    },
    "partizipVergangenheit": {
      "de": "gestoben vai gestiebt",
      "lv": "Elrontott"
    }
  },
  {
    "infinitiv": {
      "de": "stinken",
      "lv": "Szagolni"
    },
    "praesens": {
      "de": "es stinkt",
      "lv": "Bűzlik"
    },
    "imperfektIndikativ": {
      "de": "stank",
      "lv": "Szagolt"
    },
    "imperfektKonjunktiv": {
      "de": "stank",
      "lv": "Szagolt"
    },
    "partizipVergangenheit": {
      "de": "gestunken",
      "lv": "Büdös"
    }
  },
  {
    "infinitiv": {
      "de": "stoßen",
      "lv": "Nyomja"
    },
    "praesens": {
      "de": "er stößt",
      "lv": "Löki"
    },
    "imperfektIndikativ": {
      "de": "er stieß",
      "lv": "Meglökte"
    },
    "imperfektKonjunktiv": {
      "de": "er stieße",
      "lv": "Nyomult"
    },
    "partizipVergangenheit": {
      "de": "gestoßen",
      "lv": "Lökött"
    }
  },
  {
    "infinitiv": {
      "de": "streichen",
      "lv": "Festék / csík"
    },
    "praesens": {
      "de": "er streicht",
      "lv": "Fest / csíkoz"
    },
    "imperfektIndikativ": {
      "de": "er strich",
      "lv": "Festett / csíkozott"
    },
    "imperfektKonjunktiv": {
      "de": "er striche",
      "lv": "Festene / vetkőzne"
    },
    "partizipVergangenheit": {
      "de": "gestrichen",
      "lv": "Festett / csíkos"
    }
  },
  {
    "infinitiv": {
      "de": "streiten",
      "lv": "Harcolni"
    },
    "praesens": {
      "de": "er streitet",
      "lv": "Harcol"
    },
    "imperfektIndikativ": {
      "de": "er stritt",
      "lv": "Küzdött"
    },
    "imperfektKonjunktiv": {
      "de": "er stritte",
      "lv": "Harcolna"
    },
    "partizipVergangenheit": {
      "de": "gestritten",
      "lv": "Harcolt"
    }
  },
  {
    "infinitiv": {
      "de": "tragen",
      "lv": "Visz"
    },
    "praesens": {
      "de": "er trägt",
      "lv": "Ő viszi"
    },
    "imperfektIndikativ": {
      "de": "er trug",
      "lv": "Vitte"
    },
    "imperfektKonjunktiv": {
      "de": "er trüge",
      "lv": "Vinné"
    },
    "partizipVergangenheit": {
      "de": "getragen",
      "lv": "Hordták"
    }
  },
  {
    "infinitiv": {
      "de": "treffen",
      "lv": "Találkozni"
    },
    "praesens": {
      "de": "er trifft",
      "lv": "Találkozik"
    },
    "imperfektIndikativ": {
      "de": "er traf",
      "lv": "Találkozott"
    },
    "imperfektKonjunktiv": {
      "de": "er träfe",
      "lv": "Találkozna"
    },
    "partizipVergangenheit": {
      "de": "getroffen",
      "lv": "Találkozott"
    }
  },
  {
    "infinitiv": {
      "de": "treiben",
      "lv": "Üldözés"
    },
    "praesens": {
      "de": "er treibt",
      "lv": "Ő vezet"
    },
    "imperfektIndikativ": {
      "de": "er trieb",
      "lv": "Ő vezetett"
    },
    "imperfektKonjunktiv": {
      "de": "er triebe",
      "lv": "Ő vezetne"
    },
    "partizipVergangenheit": {
      "de": "getrieben",
      "lv": "Üldözött"
    }
  },
  {
    "infinitiv": {
      "de": "treten",
      "lv": "Belép / megy"
    },
    "praesens": {
      "de": "er tritt",
      "lv": "Belép / megy"
    },
    "imperfektIndikativ": {
      "de": "er trat",
      "lv": "Állt / járt"
    },
    "imperfektKonjunktiv": {
      "de": "er träte",
      "lv": "Állna / menne"
    },
    "partizipVergangenheit": {
      "de": "getreten (er ist)",
      "lv": "Állt / járt"
    }
  },
  {
    "infinitiv": {
      "de": "trinken",
      "lv": "Inni"
    },
    "praesens": {
      "de": "er trinkt",
      "lv": "Iszik"
    },
    "imperfektIndikativ": {
      "de": "er trank",
      "lv": "Ivott"
    },
    "imperfektKonjunktiv": {
      "de": "er tränke",
      "lv": "Inna"
    },
    "partizipVergangenheit": {
      "de": "getrunken",
      "lv": "Részeg"
    }
  },
  {
    "infinitiv": {
      "de": "trügen",
      "lv": "Megcsalni"
    },
    "praesens": {
      "de": "er trögt",
      "lv": "Megcsal"
    },
    "imperfektIndikativ": {
      "de": "er trog",
      "lv": "Megcsalt"
    },
    "imperfektKonjunktiv": {
      "de": "er tröge",
      "lv": "Megcsalna"
    },
    "partizipVergangenheit": {
      "de": "getrogen",
      "lv": "Becsapott"
    }
  },
  {
    "infinitiv": {
      "de": "tun",
      "lv": "Tenni"
    },
    "praesens": {
      "de": "er tut",
      "lv": "Ő igen"
    },
    "imperfektIndikativ": {
      "de": "er tat",
      "lv": "Megtette"
    },
    "imperfektKonjunktiv": {
      "de": "er täte",
      "lv": "Megtenné"
    },
    "partizipVergangenheit": {
      "de": "getan",
      "lv": "Kész"
    }
  },
  {
    "infinitiv": {
      "de": "verderben",
      "lv": "Kárt tenni"
    },
    "praesens": {
      "de": "er verdirbt",
      "lv": "Elpusztítja"
    },
    "imperfektIndikativ": {
      "de": "er verdarb",
      "lv": "Megsérült"
    },
    "imperfektKonjunktiv": {
      "de": "er verdürbe",
      "lv": "Kárt tenne"
    },
    "partizipVergangenheit": {
      "de": "verdorben",
      "lv": "Sérült"
    }
  },
  {
    "infinitiv": {
      "de": "verdrießen",
      "lv": "Bosszúságot okozni"
    },
    "praesens": {
      "de": "er verdrießt",
      "lv": "Bosszúságot okoz"
    },
    "imperfektIndikativ": {
      "de": "er verdross",
      "lv": "Bosszúságot keltett"
    },
    "imperfektKonjunktiv": {
      "de": "er verdrösse",
      "lv": "Bosszúságot okozna"
    },
    "partizipVergangenheit": {
      "de": "verdrossen",
      "lv": "Felborít"
    }
  },
  {
    "infinitiv": {
      "de": "vergessen",
      "lv": "Felejtsd el"
    },
    "praesens": {
      "de": "er vergisst",
      "lv": "Elfelejti"
    },
    "imperfektIndikativ": {
      "de": "er vergass",
      "lv": "Elfelejtette"
    },
    "imperfektKonjunktiv": {
      "de": "er vergäße",
      "lv": "Elfelejtené"
    },
    "partizipVergangenheit": {
      "de": "vergessen",
      "lv": "Elfelejtett"
    }
  },
  {
    "infinitiv": {
      "de": "verlieren",
      "lv": "Veszíteni"
    },
    "praesens": {
      "de": "er verliert",
      "lv": "Veszít"
    },
    "imperfektIndikativ": {
      "de": "er verlor",
      "lv": "Elvesztette"
    },
    "imperfektKonjunktiv": {
      "de": "er verlöre",
      "lv": "Veszítene"
    },
    "partizipVergangenheit": {
      "de": "verloren",
      "lv": "Elveszett"
    }
  },
  {
    "infinitiv": {
      "de": "wachsen",
      "lv": "Növekedni"
    },
    "praesens": {
      "de": "er wächst",
      "lv": "Növekszik"
    },
    "imperfektIndikativ": {
      "de": "er wuchs",
      "lv": "Nőtt fel"
    },
    "imperfektKonjunktiv": {
      "de": "er wüchse",
      "lv": "Nőne"
    },
    "partizipVergangenheit": {
      "de": "gewachsen (er ist)",
      "lv": "Nőtt fel"
    }
  },
  {
    "infinitiv": {
      "de": "waschen",
      "lv": "Mosni"
    },
    "praesens": {
      "de": "er wäscht",
      "lv": "Ő mos"
    },
    "imperfektIndikativ": {
      "de": "er wusch",
      "lv": "Megmosakodott"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsche",
      "lv": "Ő mosna"
    },
    "partizipVergangenheit": {
      "de": "gewaschen",
      "lv": "Mosott"
    }
  },
  {
    "infinitiv": {
      "de": "weben",
      "lv": "Szövés"
    },
    "praesens": {
      "de": "er webt",
      "lv": "Ő sző"
    },
    "imperfektIndikativ": {
      "de": "wob",
      "lv": "Szövet"
    },
    "imperfektKonjunktiv": {
      "de": "wob",
      "lv": "Szövet"
    },
    "partizipVergangenheit": {
      "de": "gewoben",
      "lv": "Szőtt"
    }
  },
  {
    "infinitiv": {
      "de": "weichen",
      "lv": "Visszavonni"
    },
    "praesens": {
      "de": "er weicht",
      "lv": "Meghátrál"
    },
    "imperfektIndikativ": {
      "de": "er wich",
      "lv": "Hátrébb lépett"
    },
    "imperfektKonjunktiv": {
      "de": "er wiche",
      "lv": "Meghátrálna"
    },
    "partizipVergangenheit": {
      "de": "gewichen (er ist)",
      "lv": "Hátrálni"
    }
  },
  {
    "infinitiv": {
      "de": "weisen",
      "lv": "Megmutat"
    },
    "praesens": {
      "de": "er weist",
      "lv": "Megmutatja"
    },
    "imperfektIndikativ": {
      "de": "er wies",
      "lv": "Megmutatta"
    },
    "imperfektKonjunktiv": {
      "de": "er wiese",
      "lv": "Megmutatná"
    },
    "partizipVergangenheit": {
      "de": "gewiesen",
      "lv": "Látható"
    }
  },
  {
    "infinitiv": {
      "de": "wenden",
      "lv": "Módosítani / kivágni"
    },
    "praesens": {
      "de": "er wendet",
      "lv": "Kanyarodik/fordul"
    },
    "imperfektIndikativ": {
      "de": "er wandte / es wendete",
      "lv": "Csavart / megfordult"
    },
    "imperfektKonjunktiv": {
      "de": "er wendete",
      "lv": "Módosítaná/fordítaná"
    },
    "partizipVergangenheit": {
      "de": "gewandt / gewendet",
      "lv": "Módosítva / megfordítva"
    }
  },
  {
    "infinitiv": {
      "de": "werben",
      "lv": "Javaslatot tenni"
    },
    "praesens": {
      "de": "er wirbt",
      "lv": "– javasolja"
    },
    "imperfektIndikativ": {
      "de": "er warb",
      "lv": "– javasolta"
    },
    "imperfektKonjunktiv": {
      "de": "er würbe",
      "lv": "Javasolná"
    },
    "partizipVergangenheit": {
      "de": "geworben",
      "lv": "Javasolta"
    }
  },
  {
    "infinitiv": {
      "de": "werden",
      "lv": "Válni"
    },
    "praesens": {
      "de": "er wird",
      "lv": "Ő lesz"
    },
    "imperfektIndikativ": {
      "de": "wurde",
      "lv": "Lett"
    },
    "imperfektKonjunktiv": {
      "de": "wurde",
      "lv": "Lett"
    },
    "partizipVergangenheit": {
      "de": "geworden",
      "lv": "Lett"
    }
  },
  {
    "infinitiv": {
      "de": "werfen",
      "lv": "Dobás"
    },
    "praesens": {
      "de": "er wirft",
      "lv": "Bedobja"
    },
    "imperfektIndikativ": {
      "de": "er warf",
      "lv": "– dobta"
    },
    "imperfektKonjunktiv": {
      "de": "er würfe",
      "lv": "– dobta"
    },
    "partizipVergangenheit": {
      "de": "geworfen",
      "lv": "Dobott"
    }
  },
  {
    "infinitiv": {
      "de": "wiegen",
      "lv": "Lemérni"
    },
    "praesens": {
      "de": "er wiegt",
      "lv": "Ő mér"
    },
    "imperfektIndikativ": {
      "de": "er wog",
      "lv": "Lemérte"
    },
    "imperfektKonjunktiv": {
      "de": "er wöge",
      "lv": "Ő mérne"
    },
    "partizipVergangenheit": {
      "de": "gewogen",
      "lv": "Súlyozott"
    }
  },
  {
    "infinitiv": {
      "de": "winden",
      "lv": "Fonat"
    },
    "praesens": {
      "de": "er windet",
      "lv": "Ő pin"
    },
    "imperfektIndikativ": {
      "de": "er wand",
      "lv": "Befonja"
    },
    "imperfektKonjunktiv": {
      "de": "er wände",
      "lv": "Fonná"
    },
    "partizipVergangenheit": {
      "de": "gewunden",
      "lv": "Fonott"
    }
  },
  {
    "infinitiv": {
      "de": "wissen",
      "lv": "Tudni"
    },
    "praesens": {
      "de": "er weiß",
      "lv": "Ő tudja"
    },
    "imperfektIndikativ": {
      "de": "er wusste",
      "lv": "Tudta"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsste",
      "lv": "Ő tudná"
    },
    "partizipVergangenheit": {
      "de": "gewusst",
      "lv": "Ismert"
    }
  },
  {
    "infinitiv": {
      "de": "wollen",
      "lv": "Akarni"
    },
    "praesens": {
      "de": "er will",
      "lv": "Azt akarja"
    },
    "imperfektIndikativ": {
      "de": "wollte",
      "lv": "Akarta"
    },
    "imperfektKonjunktiv": {
      "de": "wollte",
      "lv": "Akarta"
    },
    "partizipVergangenheit": {
      "de": "gewollt",
      "lv": "Akarta"
    }
  },
  {
    "infinitiv": {
      "de": "wringen",
      "lv": "Kivágni / kinyomni"
    },
    "praesens": {
      "de": "er wringt",
      "lv": "– vágja ki"
    },
    "imperfektIndikativ": {
      "de": "wrang",
      "lv": "Kivágni"
    },
    "imperfektKonjunktiv": {
      "de": "wrang",
      "lv": "Kivágni"
    },
    "partizipVergangenheit": {
      "de": "gewrungen",
      "lv": "Kivágni"
    }
  },
  {
    "infinitiv": {
      "de": "zeihen",
      "lv": "Hibáztatni"
    },
    "praesens": {
      "de": "er zeiht",
      "lv": "Ő hibáztatja"
    },
    "imperfektIndikativ": {
      "de": "zieh",
      "lv": "Hibáztatták"
    },
    "imperfektKonjunktiv": {
      "de": "zieh",
      "lv": "Hibáztatták"
    },
    "partizipVergangenheit": {
      "de": "geziehen",
      "lv": "Hibáztatták"
    }
  },
  {
    "infinitiv": {
      "de": "ziehen",
      "lv": "Húzni"
    },
    "praesens": {
      "de": "er zieht",
      "lv": "Húzza"
    },
    "imperfektIndikativ": {
      "de": "er zog",
      "lv": "Húzta"
    },
    "imperfektKonjunktiv": {
      "de": "er zöge",
      "lv": "Húzná"
    },
    "partizipVergangenheit": {
      "de": "gezogen",
      "lv": "Vonszolta"
    }
  },
  {
    "infinitiv": {
      "de": "zwingen",
      "lv": "Kényszeríteni"
    },
    "praesens": {
      "de": "er zwingt",
      "lv": "Kényszeríti"
    },
    "imperfektIndikativ": {
      "de": "er zwang",
      "lv": "Kényszerítette"
    },
    "imperfektKonjunktiv": {
      "de": "er zwänge",
      "lv": "Kényszerítené"
    },
    "partizipVergangenheit": {
      "de": "gezwungen",
      "lv": "Kényszerű"
    }
  },
  {
    "infinitiv": {
      "de": "empfangen",
      "lv": "Fogadni"
    },
    "praesens": {
      "de": "er empfängt",
      "lv": "Megkapja"
    },
    "imperfektIndikativ": {
      "de": "er empfing",
      "lv": "Megkapta"
    },
    "imperfektKonjunktiv": {
      "de": "er empfinge",
      "lv": "Megkapná"
    },
    "partizipVergangenheit": {
      "de": "empfangen",
      "lv": "Kapott"
    }
  },
  {
    "infinitiv": {
      "de": "erwägen",
      "lv": "Mérlegelni"
    },
    "praesens": {
      "de": "er erwägt",
      "lv": "Úgy véli"
    },
    "imperfektIndikativ": {
      "de": "er erwog",
      "lv": "– fontolgatta"
    },
    "imperfektKonjunktiv": {
      "de": "er erwöge",
      "lv": "Megfontolná"
    },
    "partizipVergangenheit": {
      "de": "erwogen",
      "lv": "Figyelembe vett"
    }
  },
  {
    "infinitiv": {
      "de": "fechten",
      "lv": "Harcolni"
    },
    "praesens": {
      "de": "er ficht",
      "lv": "Harcol"
    },
    "imperfektIndikativ": {
      "de": "er focht",
      "lv": "Küzdött"
    },
    "imperfektKonjunktiv": {
      "de": "er föchte",
      "lv": "Harcolna"
    },
    "partizipVergangenheit": {
      "de": "gefochten",
      "lv": "Harcolt"
    }
  },
  {
    "infinitiv": {
      "de": "flechten",
      "lv": "Fonat"
    },
    "praesens": {
      "de": "er flicht",
      "lv": "Ő pin"
    },
    "imperfektIndikativ": {
      "de": "er flocht",
      "lv": "Befonja"
    },
    "imperfektKonjunktiv": {
      "de": "er flöchte",
      "lv": "Fonná"
    },
    "partizipVergangenheit": {
      "de": "geflochten",
      "lv": "Fonott"
    }
  },
  {
    "infinitiv": {
      "de": "hangen",
      "lv": "Felakasztani"
    },
    "praesens": {
      "de": "er hängt",
      "lv": "Lóg"
    },
    "imperfektIndikativ": {
      "de": "er hing",
      "lv": "Lógott"
    },
    "imperfektKonjunktiv": {
      "de": "er hinge",
      "lv": "Felakasztotta magát"
    },
    "partizipVergangenheit": {
      "de": "gehangen",
      "lv": "Tarts ki"
    }
  },
  {
    "infinitiv": {
      "de": "spalten",
      "lv": "Szétválni"
    },
    "praesens": {
      "de": "er spaltet",
      "lv": "Szétválik"
    },
    "imperfektIndikativ": {
      "de": "er spaltete",
      "lv": "Szétvált"
    },
    "imperfektKonjunktiv": {
      "de": "er spaltete",
      "lv": "Szakadna"
    },
    "partizipVergangenheit": {
      "de": "gespalten",
      "lv": "Hasított"
    }
  },
  {
    "infinitiv": {
      "de": "verzeihen",
      "lv": "Megbocsátani"
    },
    "praesens": {
      "de": "er verzeiht",
      "lv": "Megbocsát"
    },
    "imperfektIndikativ": {
      "de": "er verzieh",
      "lv": "Megbocsátott"
    },
    "imperfektKonjunktiv": {
      "de": "er verziehe",
      "lv": "Megbocsátana"
    },
    "partizipVergangenheit": {
      "de": "verziehen",
      "lv": "Megbocsátott"
    }
  }
];

window.VERB_ENTRIES = VERB_ENTRIES;

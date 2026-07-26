const VERB_ENTRIES = [
  {
    "infinitiv": {
      "de": "backen",
      "lv": "kepti"
    },
    "praesens": {
      "de": "er bäckt",
      "lv": "jis kepa"
    },
    "imperfektIndikativ": {
      "de": "er buk",
      "lv": "jis kepė"
    },
    "imperfektKonjunktiv": {
      "de": "er büke",
      "lv": "jis keptų"
    },
    "partizipVergangenheit": {
      "de": "gebacken",
      "lv": "keptas / iškeptas"
    }
  },
  {
    "infinitiv": {
      "de": "befehlen",
      "lv": "įsakyti"
    },
    "praesens": {
      "de": "er befiehlt",
      "lv": "jis įsako"
    },
    "imperfektIndikativ": {
      "de": "er befahl",
      "lv": "jis įsakė"
    },
    "imperfektKonjunktiv": {
      "de": "er beföhle",
      "lv": "jis įsakytų"
    },
    "partizipVergangenheit": {
      "de": "befohlen",
      "lv": "įsakytas"
    }
  },
  {
    "infinitiv": {
      "de": "beginnen",
      "lv": "pradėti"
    },
    "praesens": {
      "de": "er beginnt",
      "lv": "jis pradeda"
    },
    "imperfektIndikativ": {
      "de": "er begann",
      "lv": "jis pradėjo"
    },
    "imperfektKonjunktiv": {
      "de": "er begönne / er begänne",
      "lv": "jis pradėtų"
    },
    "partizipVergangenheit": {
      "de": "begonnen",
      "lv": "pradėtas"
    }
  },
  {
    "infinitiv": {
      "de": "beißen",
      "lv": "kąsti"
    },
    "praesens": {
      "de": "er beißt",
      "lv": "jis kanda"
    },
    "imperfektIndikativ": {
      "de": "er biss",
      "lv": "jis kando"
    },
    "imperfektKonjunktiv": {
      "de": "er bisse",
      "lv": "jis kąstų"
    },
    "partizipVergangenheit": {
      "de": "gebissen",
      "lv": "kąstas / įkąstas"
    }
  },
  {
    "infinitiv": {
      "de": "bergen",
      "lv": "slėpti"
    },
    "praesens": {
      "de": "er birgt",
      "lv": "jis slepia"
    },
    "imperfektIndikativ": {
      "de": "er barg",
      "lv": "jis slėpė"
    },
    "imperfektKonjunktiv": {
      "de": "er bürge / er bärge",
      "lv": "jis slėptų"
    },
    "partizipVergangenheit": {
      "de": "geborgen",
      "lv": "paslėptas / išgelbėtas"
    }
  },
  {
    "infinitiv": {
      "de": "bersten",
      "lv": "plyšti"
    },
    "praesens": {
      "de": "er birst",
      "lv": "jis plyšta"
    },
    "imperfektIndikativ": {
      "de": "er barst / er borst",
      "lv": "jis plyšo"
    },
    "imperfektKonjunktiv": {
      "de": "er bärste / er börste",
      "lv": "jis plyštų"
    },
    "partizipVergangenheit": {
      "de": "geborsten (er ist)",
      "lv": "suplyšęs"
    }
  },
  {
    "infinitiv": {
      "de": "bewegen",
      "lv": "paraginti"
    },
    "praesens": {
      "de": "er bewegt",
      "lv": "jis paskatina"
    },
    "imperfektIndikativ": {
      "de": "er bewog",
      "lv": "jis paskatino"
    },
    "imperfektKonjunktiv": {
      "de": "er bewöge",
      "lv": "jis paskatintų"
    },
    "partizipVergangenheit": {
      "de": "bewogen",
      "lv": "paskatintas"
    }
  },
  {
    "infinitiv": {
      "de": "biegen",
      "lv": "lenkti"
    },
    "praesens": {
      "de": "er biegt",
      "lv": "jis lenkia"
    },
    "imperfektIndikativ": {
      "de": "er bog",
      "lv": "jis lenkė"
    },
    "imperfektKonjunktiv": {
      "de": "er böge",
      "lv": "jis lenktų"
    },
    "partizipVergangenheit": {
      "de": "gebogen",
      "lv": "lenktas"
    }
  },
  {
    "infinitiv": {
      "de": "bieten",
      "lv": "žadėti"
    },
    "praesens": {
      "de": "er bietet",
      "lv": "jis žada"
    },
    "imperfektIndikativ": {
      "de": "er bot",
      "lv": "jis žadėjo"
    },
    "imperfektKonjunktiv": {
      "de": "er böte",
      "lv": "jis žadėtų"
    },
    "partizipVergangenheit": {
      "de": "geboten",
      "lv": "pažadėtas / pasiūlytas"
    }
  },
  {
    "infinitiv": {
      "de": "binden",
      "lv": "rišti"
    },
    "praesens": {
      "de": "er bindet",
      "lv": "jis riša"
    },
    "imperfektIndikativ": {
      "de": "er band",
      "lv": "jis rišo"
    },
    "imperfektKonjunktiv": {
      "de": "er bände",
      "lv": "jis rištų"
    },
    "partizipVergangenheit": {
      "de": "gebunden",
      "lv": "sietas"
    }
  },
  {
    "infinitiv": {
      "de": "bitten",
      "lv": "prašyti"
    },
    "praesens": {
      "de": "er bittet",
      "lv": "jis prašo"
    },
    "imperfektIndikativ": {
      "de": "er bat",
      "lv": "jis prašė"
    },
    "imperfektKonjunktiv": {
      "de": "er bäte",
      "lv": "jis prašytų"
    },
    "partizipVergangenheit": {
      "de": "gebeten",
      "lv": "prašytas"
    }
  },
  {
    "infinitiv": {
      "de": "blasen",
      "lv": "pūsti"
    },
    "praesens": {
      "de": "er bläst",
      "lv": "jis pučia"
    },
    "imperfektIndikativ": {
      "de": "er blies",
      "lv": "jis pūtė"
    },
    "imperfektKonjunktiv": {
      "de": "er bliese",
      "lv": "jis pūstų"
    },
    "partizipVergangenheit": {
      "de": "geblasen",
      "lv": "pūstas"
    }
  },
  {
    "infinitiv": {
      "de": "gären",
      "lv": "rūgti"
    },
    "praesens": {
      "de": "es gärt",
      "lv": "tai rūgsta"
    },
    "imperfektIndikativ": {
      "de": "es gor / es gärte",
      "lv": "tai rūgo"
    },
    "imperfektKonjunktiv": {
      "de": "es göre / es gärte",
      "lv": "tai rūgtų"
    },
    "partizipVergangenheit": {
      "de": "gegoren / gegärt",
      "lv": "rūgęs"
    }
  },
  {
    "infinitiv": {
      "de": "gebären",
      "lv": "gimdyti"
    },
    "praesens": {
      "de": "sie gebiert",
      "lv": "ji gimdo"
    },
    "imperfektIndikativ": {
      "de": "sie gebar",
      "lv": "ji gimdė"
    },
    "imperfektKonjunktiv": {
      "de": "sie gebäre",
      "lv": "ji gimdytų"
    },
    "partizipVergangenheit": {
      "de": "geboren",
      "lv": "pagimdytas / gimęs"
    }
  },
  {
    "infinitiv": {
      "de": "gelingen",
      "lv": "pavykti"
    },
    "praesens": {
      "de": "es gelingt",
      "lv": "tai pavyksta"
    },
    "imperfektIndikativ": {
      "de": "es gelang",
      "lv": "tai pavyko"
    },
    "imperfektKonjunktiv": {
      "de": "es gelänge",
      "lv": "tai pavyktų"
    },
    "partizipVergangenheit": {
      "de": "gelungen (es ist)",
      "lv": "pavykęs"
    }
  },
  {
    "infinitiv": {
      "de": "gelten",
      "lv": "tikti"
    },
    "praesens": {
      "de": "er gilt",
      "lv": "jis tinka / yra galiojantis"
    },
    "imperfektIndikativ": {
      "de": "er galt",
      "lv": "jis tiko / buvo galiojantis"
    },
    "imperfektKonjunktiv": {
      "de": "er gölte / es gälte",
      "lv": "jis tiktų / tai būtų galiojantis"
    },
    "partizipVergangenheit": {
      "de": "gegolten",
      "lv": "tikęs / buvęs galiojantis"
    }
  },
  {
    "infinitiv": {
      "de": "genesen",
      "lv": "pasveikti"
    },
    "praesens": {
      "de": "er genest",
      "lv": "jis sveiksta"
    },
    "imperfektIndikativ": {
      "de": "er genas",
      "lv": "jis pasveiko"
    },
    "imperfektKonjunktiv": {
      "de": "er genäse",
      "lv": "jis pasveiktų"
    },
    "partizipVergangenheit": {
      "de": "genesen (er ist)",
      "lv": "pasveikęs"
    }
  },
  {
    "infinitiv": {
      "de": "genießen",
      "lv": "mėgautis"
    },
    "praesens": {
      "de": "er genießt",
      "lv": "jis mėgaujasi"
    },
    "imperfektIndikativ": {
      "de": "er genoss",
      "lv": "jis mėgavosi"
    },
    "imperfektKonjunktiv": {
      "de": "er genösse",
      "lv": "jis mėgautųsi"
    },
    "partizipVergangenheit": {
      "de": "genossen",
      "lv": "mėgautas"
    }
  },
  {
    "infinitiv": {
      "de": "geschehen",
      "lv": "įvykti"
    },
    "praesens": {
      "de": "es geschieht",
      "lv": "tai vyksta"
    },
    "imperfektIndikativ": {
      "de": "es geschah",
      "lv": "tai vyko"
    },
    "imperfektKonjunktiv": {
      "de": "es geschähe",
      "lv": "tai vyktų"
    },
    "partizipVergangenheit": {
      "de": "geschehen (es ist)",
      "lv": "įvykęs"
    }
  },
  {
    "infinitiv": {
      "de": "gießen",
      "lv": "lieti"
    },
    "praesens": {
      "de": "er gießt",
      "lv": "jis lieja"
    },
    "imperfektIndikativ": {
      "de": "er goss",
      "lv": "jis liejo"
    },
    "imperfektKonjunktiv": {
      "de": "er gösse",
      "lv": "jis lietų"
    },
    "partizipVergangenheit": {
      "de": "gegossen",
      "lv": "lietas"
    }
  },
  {
    "infinitiv": {
      "de": "gleichen",
      "lv": "prilygti"
    },
    "praesens": {
      "de": "er gleicht",
      "lv": "jis yra panašus"
    },
    "imperfektIndikativ": {
      "de": "er glich",
      "lv": "jis buvo panašus"
    },
    "imperfektKonjunktiv": {
      "de": "er gliche",
      "lv": "jis būtų panašus"
    },
    "partizipVergangenheit": {
      "de": "geglichen",
      "lv": "buvęs panašus"
    }
  },
  {
    "infinitiv": {
      "de": "gleiten",
      "lv": "slysti"
    },
    "praesens": {
      "de": "er gleitet",
      "lv": "jis slysta"
    },
    "imperfektIndikativ": {
      "de": "er glitt",
      "lv": "jis slydo"
    },
    "imperfektKonjunktiv": {
      "de": "er glitte",
      "lv": "jis slystų"
    },
    "partizipVergangenheit": {
      "de": "geglitten (er ist)",
      "lv": "slydęs"
    }
  },
  {
    "infinitiv": {
      "de": "glimmen",
      "lv": "kaisti (žėrėti)"
    },
    "praesens": {
      "de": "er glimmt",
      "lv": "jis žėri"
    },
    "imperfektIndikativ": {
      "de": "er glimmte / glomm",
      "lv": "jis žėrėjo"
    },
    "imperfektKonjunktiv": {
      "de": "er glimmte",
      "lv": "jis žėrėtų"
    },
    "partizipVergangenheit": {
      "de": "geglimmt / geglommen",
      "lv": "žėrėjęs"
    }
  },
  {
    "infinitiv": {
      "de": "graben",
      "lv": "kasti"
    },
    "praesens": {
      "de": "er gräbt",
      "lv": "jis kasa"
    },
    "imperfektIndikativ": {
      "de": "er grub",
      "lv": "jis kasė"
    },
    "imperfektKonjunktiv": {
      "de": "er grübe",
      "lv": "jis kastų"
    },
    "partizipVergangenheit": {
      "de": "gegraben",
      "lv": "kastas"
    }
  },
  {
    "infinitiv": {
      "de": "greifen",
      "lv": "gaudyti"
    },
    "praesens": {
      "de": "er greift",
      "lv": "jis gaudo"
    },
    "imperfektIndikativ": {
      "de": "er griff",
      "lv": "jis gaudė"
    },
    "imperfektKonjunktiv": {
      "de": "er griffe",
      "lv": "jis gaudytų"
    },
    "partizipVergangenheit": {
      "de": "gegriffen",
      "lv": "pagautas / sugautas"
    }
  },
  {
    "infinitiv": {
      "de": "hauen",
      "lv": "kirsti"
    },
    "praesens": {
      "de": "er haut",
      "lv": "jis kerta"
    },
    "imperfektIndikativ": {
      "de": "er hieb",
      "lv": "jis kirto"
    },
    "imperfektKonjunktiv": {
      "de": "er hiebe",
      "lv": "jis kirstų"
    },
    "partizipVergangenheit": {
      "de": "gehauen",
      "lv": "kirstas"
    }
  },
  {
    "infinitiv": {
      "de": "heben",
      "lv": "kelti"
    },
    "praesens": {
      "de": "er hebt",
      "lv": "jis kelia"
    },
    "imperfektIndikativ": {
      "de": "er hob",
      "lv": "jis kėlė"
    },
    "imperfektKonjunktiv": {
      "de": "er höbe",
      "lv": "jis keltų"
    },
    "partizipVergangenheit": {
      "de": "gehoben",
      "lv": "keltas"
    }
  },
  {
    "infinitiv": {
      "de": "kennen",
      "lv": "pažinti / žinoti"
    },
    "praesens": {
      "de": "er kennt",
      "lv": "jis pažįsta"
    },
    "imperfektIndikativ": {
      "de": "kannte",
      "lv": "pažino"
    },
    "imperfektKonjunktiv": {
      "de": "kannte",
      "lv": "pažino"
    },
    "partizipVergangenheit": {
      "de": "gekannt",
      "lv": "pažinęs"
    }
  },
  {
    "infinitiv": {
      "de": "klingen",
      "lv": "skambėti"
    },
    "praesens": {
      "de": "er klingt",
      "lv": "jis skamba"
    },
    "imperfektIndikativ": {
      "de": "er klang",
      "lv": "jis skambėjo"
    },
    "imperfektKonjunktiv": {
      "de": "er klänge",
      "lv": "jis skambėtų"
    },
    "partizipVergangenheit": {
      "de": "geklungen",
      "lv": "skambėjęs"
    }
  },
  {
    "infinitiv": {
      "de": "kneifen",
      "lv": "gnybti"
    },
    "praesens": {
      "de": "er kneift",
      "lv": "jis gnybia"
    },
    "imperfektIndikativ": {
      "de": "er kniff",
      "lv": "jis gnybė"
    },
    "imperfektKonjunktiv": {
      "de": "er kniffe",
      "lv": "jis gnybtų"
    },
    "partizipVergangenheit": {
      "de": "gekniffen",
      "lv": "gnybtas"
    }
  },
  {
    "infinitiv": {
      "de": "bleiben",
      "lv": "pasilikti"
    },
    "praesens": {
      "de": "er bleibt",
      "lv": "jis lieka"
    },
    "imperfektIndikativ": {
      "de": "er blieb",
      "lv": "jis liko"
    },
    "imperfektKonjunktiv": {
      "de": "er bliebe",
      "lv": "jis liktų"
    },
    "partizipVergangenheit": {
      "de": "geblieben (er ist)",
      "lv": "likęs"
    }
  },
  {
    "infinitiv": {
      "de": "bleichen",
      "lv": "baltinti"
    },
    "praesens": {
      "de": "er bleicht",
      "lv": "jis baltina"
    },
    "imperfektIndikativ": {
      "de": "blich",
      "lv": "baltino"
    },
    "imperfektKonjunktiv": {
      "de": "blich",
      "lv": "baltino"
    },
    "partizipVergangenheit": {
      "de": "geblichen",
      "lv": "baltintas"
    }
  },
  {
    "infinitiv": {
      "de": "braten",
      "lv": "kepti"
    },
    "praesens": {
      "de": "er brät",
      "lv": "jis kepa"
    },
    "imperfektIndikativ": {
      "de": "er briet",
      "lv": "jis kepė"
    },
    "imperfektKonjunktiv": {
      "de": "er briete",
      "lv": "jis keptų"
    },
    "partizipVergangenheit": {
      "de": "gebraten",
      "lv": "keptas / iškeptas"
    }
  },
  {
    "infinitiv": {
      "de": "brechen",
      "lv": "laužti"
    },
    "praesens": {
      "de": "er bricht",
      "lv": "jis laužia"
    },
    "imperfektIndikativ": {
      "de": "er brach",
      "lv": "jis laužė"
    },
    "imperfektKonjunktiv": {
      "de": "er bräche",
      "lv": "jis laužtų"
    },
    "partizipVergangenheit": {
      "de": "gebrochen",
      "lv": "laužtas / sulaužtas"
    }
  },
  {
    "infinitiv": {
      "de": "brennen",
      "lv": "degti"
    },
    "praesens": {
      "de": "er brennt",
      "lv": "jis dega"
    },
    "imperfektIndikativ": {
      "de": "brannte",
      "lv": "degė"
    },
    "imperfektKonjunktiv": {
      "de": "brannte",
      "lv": "degė"
    },
    "partizipVergangenheit": {
      "de": "gebrannt",
      "lv": "degęs"
    }
  },
  {
    "infinitiv": {
      "de": "bringen",
      "lv": "nešti"
    },
    "praesens": {
      "de": "er bringt",
      "lv": "jis neša"
    },
    "imperfektIndikativ": {
      "de": "er brachte",
      "lv": "jis nešė"
    },
    "imperfektKonjunktiv": {
      "de": "er brächte",
      "lv": "jis neštų"
    },
    "partizipVergangenheit": {
      "de": "gebracht",
      "lv": "neštas / atneštas"
    }
  },
  {
    "infinitiv": {
      "de": "denken",
      "lv": "manyti"
    },
    "praesens": {
      "de": "er denkt",
      "lv": "jis galvoja"
    },
    "imperfektIndikativ": {
      "de": "er dachte",
      "lv": "jis galvojo"
    },
    "imperfektKonjunktiv": {
      "de": "er dächte",
      "lv": "jis galvotų"
    },
    "partizipVergangenheit": {
      "de": "gedacht",
      "lv": "pagalvotas"
    }
  },
  {
    "infinitiv": {
      "de": "dingen",
      "lv": "pasamdyti / susitarti"
    },
    "praesens": {
      "de": "er dingt",
      "lv": "jis samdo"
    },
    "imperfektIndikativ": {
      "de": "dingte",
      "lv": "samdė"
    },
    "imperfektKonjunktiv": {
      "de": "dingte",
      "lv": "samdė"
    },
    "partizipVergangenheit": {
      "de": "gedungen",
      "lv": "samdytas"
    }
  },
  {
    "infinitiv": {
      "de": "dreschen",
      "lv": "kulti"
    },
    "praesens": {
      "de": "er drischt",
      "lv": "jis kulia"
    },
    "imperfektIndikativ": {
      "de": "er drasch / er drosch",
      "lv": "jis kūlė"
    },
    "imperfektKonjunktiv": {
      "de": "er dräsche / er drösche",
      "lv": "jis kultų"
    },
    "partizipVergangenheit": {
      "de": "gedroschen",
      "lv": "kultas"
    }
  },
  {
    "infinitiv": {
      "de": "dringen",
      "lv": "įsilaužti"
    },
    "praesens": {
      "de": "er dringt",
      "lv": "jis įsilaužia"
    },
    "imperfektIndikativ": {
      "de": "er drang",
      "lv": "jis įsilaužė"
    },
    "imperfektKonjunktiv": {
      "de": "er dränge",
      "lv": "jis įsilaužtų"
    },
    "partizipVergangenheit": {
      "de": "gedrungen (er ist)",
      "lv": "įsilaužęs"
    }
  },
  {
    "infinitiv": {
      "de": "dünken",
      "lv": "atrodyti"
    },
    "praesens": {
      "de": "es dünkt",
      "lv": "tai atrodo"
    },
    "imperfektIndikativ": {
      "de": "deuchte",
      "lv": "atrodė"
    },
    "imperfektKonjunktiv": {
      "de": "deuchte",
      "lv": "atrodė"
    },
    "partizipVergangenheit": {
      "de": "gedünkt",
      "lv": "atrodęs"
    }
  },
  {
    "infinitiv": {
      "de": "dürfen",
      "lv": "galėti"
    },
    "praesens": {
      "de": "er darf",
      "lv": "jis gali"
    },
    "imperfektIndikativ": {
      "de": "durfte",
      "lv": "galėjo"
    },
    "imperfektKonjunktiv": {
      "de": "durfte",
      "lv": "galėjo"
    },
    "partizipVergangenheit": {
      "de": "gedurft",
      "lv": "galėjęs"
    }
  },
  {
    "infinitiv": {
      "de": "empfehlen",
      "lv": "rekomenduoti"
    },
    "praesens": {
      "de": "er empfiehlt",
      "lv": "jis siūlo"
    },
    "imperfektIndikativ": {
      "de": "er empfahl",
      "lv": "jis siūlė"
    },
    "imperfektKonjunktiv": {
      "de": "er empfähle / er empföhle",
      "lv": "jis siūlytų"
    },
    "partizipVergangenheit": {
      "de": "empfohlen",
      "lv": "pasiūlytas"
    }
  },
  {
    "infinitiv": {
      "de": "empfinden",
      "lv": "pajusti"
    },
    "praesens": {
      "de": "er empfindet",
      "lv": "jis pajunta"
    },
    "imperfektIndikativ": {
      "de": "er empfand",
      "lv": "jis pajuto"
    },
    "imperfektKonjunktiv": {
      "de": "er empfände",
      "lv": "jis pajustų"
    },
    "partizipVergangenheit": {
      "de": "empfunden",
      "lv": "pajustas"
    }
  },
  {
    "infinitiv": {
      "de": "erlöschen",
      "lv": "užgesti"
    },
    "praesens": {
      "de": "er erlischt",
      "lv": "jis užgęsta"
    },
    "imperfektIndikativ": {
      "de": "er erlosch",
      "lv": "jis užgeso"
    },
    "imperfektKonjunktiv": {
      "de": "er erlösche",
      "lv": "jis užgestų"
    },
    "partizipVergangenheit": {
      "de": "erloschen (er ist)",
      "lv": "užgesęs"
    }
  },
  {
    "infinitiv": {
      "de": "erschrecken",
      "lv": "išsigąsti"
    },
    "praesens": {
      "de": "er erschrickt",
      "lv": "jis nusigąsta"
    },
    "imperfektIndikativ": {
      "de": "er erschrak",
      "lv": "jis nusigando"
    },
    "imperfektKonjunktiv": {
      "de": "er erschräke",
      "lv": "jis nusigąstų"
    },
    "partizipVergangenheit": {
      "de": "erschrocken (er ist)",
      "lv": "nusigandęs"
    }
  },
  {
    "infinitiv": {
      "de": "essen",
      "lv": "valgyti"
    },
    "praesens": {
      "de": "er isst",
      "lv": "jis ėda"
    },
    "imperfektIndikativ": {
      "de": "er ass",
      "lv": "jis ėdė"
    },
    "imperfektKonjunktiv": {
      "de": "er äße",
      "lv": "jis ėstų"
    },
    "partizipVergangenheit": {
      "de": "gegessen",
      "lv": "ėstas / suėstas"
    }
  },
  {
    "infinitiv": {
      "de": "fahren",
      "lv": "važiuoti"
    },
    "praesens": {
      "de": "er fährt",
      "lv": "jis važiuoja"
    },
    "imperfektIndikativ": {
      "de": "er fuhr",
      "lv": "jis važiavo"
    },
    "imperfektKonjunktiv": {
      "de": "er führe",
      "lv": "jis važiuotų"
    },
    "partizipVergangenheit": {
      "de": "gefahren (er ist)",
      "lv": "važiavęs / nuvažiavęs"
    }
  },
  {
    "infinitiv": {
      "de": "fallen",
      "lv": "kristi"
    },
    "praesens": {
      "de": "er fällt",
      "lv": "jis krenta"
    },
    "imperfektIndikativ": {
      "de": "er fiel",
      "lv": "jis krito"
    },
    "imperfektKonjunktiv": {
      "de": "er fiele",
      "lv": "jis kristų"
    },
    "partizipVergangenheit": {
      "de": "gefallen (er ist)",
      "lv": "kritęs"
    }
  },
  {
    "infinitiv": {
      "de": "fangen",
      "lv": "gaudyti"
    },
    "praesens": {
      "de": "er fängt",
      "lv": "jis gaudo"
    },
    "imperfektIndikativ": {
      "de": "er fing",
      "lv": "jis gaudė"
    },
    "imperfektKonjunktiv": {
      "de": "er finge",
      "lv": "jis gaudytų"
    },
    "partizipVergangenheit": {
      "de": "gefangen",
      "lv": "pagautas / sugautas"
    }
  },
  {
    "infinitiv": {
      "de": "finden",
      "lv": "rasti"
    },
    "praesens": {
      "de": "er findet",
      "lv": "jis randa"
    },
    "imperfektIndikativ": {
      "de": "er fand",
      "lv": "jis rado"
    },
    "imperfektKonjunktiv": {
      "de": "er fände",
      "lv": "jis rastų"
    },
    "partizipVergangenheit": {
      "de": "gefunden",
      "lv": "rastas"
    }
  },
  {
    "infinitiv": {
      "de": "fliegen",
      "lv": "skristi"
    },
    "praesens": {
      "de": "er fliegt",
      "lv": "jis skrenda"
    },
    "imperfektIndikativ": {
      "de": "er flog",
      "lv": "jis skrido"
    },
    "imperfektKonjunktiv": {
      "de": "er flöge",
      "lv": "jis skristų"
    },
    "partizipVergangenheit": {
      "de": "geflogen (er ist)",
      "lv": "skridęs"
    }
  },
  {
    "infinitiv": {
      "de": "fliehen",
      "lv": "bėgti"
    },
    "praesens": {
      "de": "er flieht",
      "lv": "jis sprunka"
    },
    "imperfektIndikativ": {
      "de": "er floh",
      "lv": "jis spruko"
    },
    "imperfektKonjunktiv": {
      "de": "er flöhe",
      "lv": "jis spruktų"
    },
    "partizipVergangenheit": {
      "de": "geflohen (er ist)",
      "lv": "pasprukęs"
    }
  },
  {
    "infinitiv": {
      "de": "fließen",
      "lv": "tekėti"
    },
    "praesens": {
      "de": "er fließt",
      "lv": "jis laksto"
    },
    "imperfektIndikativ": {
      "de": "er floss",
      "lv": "jis lakstė"
    },
    "imperfektKonjunktiv": {
      "de": "er flösse",
      "lv": "jis lakstytų"
    },
    "partizipVergangenheit": {
      "de": "geflossen (er ist)",
      "lv": "lakstęs"
    }
  },
  {
    "infinitiv": {
      "de": "fressen",
      "lv": "ėsti, ryti"
    },
    "praesens": {
      "de": "er frisst",
      "lv": "jis ėda / ryja"
    },
    "imperfektIndikativ": {
      "de": "er frass",
      "lv": "jis ėdė / rijo"
    },
    "imperfektKonjunktiv": {
      "de": "er fräße",
      "lv": "jis ėstų / rytų"
    },
    "partizipVergangenheit": {
      "de": "gefressen",
      "lv": "suėstas / surytas"
    }
  },
  {
    "infinitiv": {
      "de": "frieren",
      "lv": "šalti"
    },
    "praesens": {
      "de": "er friert",
      "lv": "jis šąla"
    },
    "imperfektIndikativ": {
      "de": "er fror",
      "lv": "jis šalo"
    },
    "imperfektKonjunktiv": {
      "de": "er fröre",
      "lv": "jis šaltų"
    },
    "partizipVergangenheit": {
      "de": "gefroren",
      "lv": "šalęs"
    }
  },
  {
    "infinitiv": {
      "de": "geben",
      "lv": "duoti"
    },
    "praesens": {
      "de": "er gibt",
      "lv": "jis duoda"
    },
    "imperfektIndikativ": {
      "de": "er gab",
      "lv": "jis davė"
    },
    "imperfektKonjunktiv": {
      "de": "er gäbe",
      "lv": "jis duotų"
    },
    "partizipVergangenheit": {
      "de": "gegeben",
      "lv": "duotas"
    }
  },
  {
    "infinitiv": {
      "de": "gedeihen",
      "lv": "pavykti"
    },
    "praesens": {
      "de": "er gedeiht",
      "lv": "jam pavyksta"
    },
    "imperfektIndikativ": {
      "de": "er gedieh",
      "lv": "jam pavyko"
    },
    "imperfektKonjunktiv": {
      "de": "er gediehe",
      "lv": "jam pavyktų"
    },
    "partizipVergangenheit": {
      "de": "gediehen (er ist)",
      "lv": "pavykęs"
    }
  },
  {
    "infinitiv": {
      "de": "gehen",
      "lv": "eiti"
    },
    "praesens": {
      "de": "er geht",
      "lv": "jis eina"
    },
    "imperfektIndikativ": {
      "de": "er ging",
      "lv": "jis ėjo"
    },
    "imperfektKonjunktiv": {
      "de": "er ginge",
      "lv": "jis eitų"
    },
    "partizipVergangenheit": {
      "de": "gegangen (er ist)",
      "lv": "ėjęs"
    }
  },
  {
    "infinitiv": {
      "de": "gewinnen",
      "lv": "gauti"
    },
    "praesens": {
      "de": "er gewinnt",
      "lv": "jis gauna"
    },
    "imperfektIndikativ": {
      "de": "er gewann",
      "lv": "jis gavo"
    },
    "imperfektKonjunktiv": {
      "de": "er gewönne / er gewänne",
      "lv": "jis gautų"
    },
    "partizipVergangenheit": {
      "de": "gewonnen",
      "lv": "gautas"
    }
  },
  {
    "infinitiv": {
      "de": "haben",
      "lv": "būti / priklausyti"
    },
    "praesens": {
      "de": "er hat",
      "lv": "jis turi"
    },
    "imperfektIndikativ": {
      "de": "hatte",
      "lv": "turėjo"
    },
    "imperfektKonjunktiv": {
      "de": "hatte",
      "lv": "turėjo"
    },
    "partizipVergangenheit": {
      "de": "gehabt",
      "lv": "turėjęs"
    }
  },
  {
    "infinitiv": {
      "de": "halten",
      "lv": "laikyti"
    },
    "praesens": {
      "de": "er hält",
      "lv": "jis laiko"
    },
    "imperfektIndikativ": {
      "de": "er hielt",
      "lv": "jis laikė"
    },
    "imperfektKonjunktiv": {
      "de": "er hielte",
      "lv": "jis laikytų"
    },
    "partizipVergangenheit": {
      "de": "gehalten",
      "lv": "laikytas"
    }
  },
  {
    "infinitiv": {
      "de": "heißen",
      "lv": "šaukti"
    },
    "praesens": {
      "de": "er heißt",
      "lv": "jis šaukia / jį vadina"
    },
    "imperfektIndikativ": {
      "de": "er hieß",
      "lv": "jis šaukė / jį vadino"
    },
    "imperfektKonjunktiv": {
      "de": "er hieße",
      "lv": "jis šauktų / jį vadintų"
    },
    "partizipVergangenheit": {
      "de": "geheißen",
      "lv": "šauktas"
    }
  },
  {
    "infinitiv": {
      "de": "helfen",
      "lv": "padėti"
    },
    "praesens": {
      "de": "er hilft",
      "lv": "jis padeda"
    },
    "imperfektIndikativ": {
      "de": "er half",
      "lv": "jis padėjo"
    },
    "imperfektKonjunktiv": {
      "de": "er hülfe / er hälfe",
      "lv": "jis padėtų"
    },
    "partizipVergangenheit": {
      "de": "geholfen",
      "lv": "padėta"
    }
  },
  {
    "infinitiv": {
      "de": "kommen",
      "lv": "ateiti"
    },
    "praesens": {
      "de": "er kommt",
      "lv": "jis ateina"
    },
    "imperfektIndikativ": {
      "de": "er kam",
      "lv": "jis atėjo"
    },
    "imperfektKonjunktiv": {
      "de": "er käme",
      "lv": "jis ateitų"
    },
    "partizipVergangenheit": {
      "de": "gekommen (er ist)",
      "lv": "atėjęs"
    }
  },
  {
    "infinitiv": {
      "de": "können",
      "lv": "galėti"
    },
    "praesens": {
      "de": "er kann",
      "lv": "jis gali"
    },
    "imperfektIndikativ": {
      "de": "konnte",
      "lv": "galėjo"
    },
    "imperfektKonjunktiv": {
      "de": "konnte",
      "lv": "galėjo"
    },
    "partizipVergangenheit": {
      "de": "gekonnt",
      "lv": "galėjęs"
    }
  },
  {
    "infinitiv": {
      "de": "kriechen",
      "lv": "šliaužti"
    },
    "praesens": {
      "de": "er kriecht",
      "lv": "jis šliaužia"
    },
    "imperfektIndikativ": {
      "de": "er kroch",
      "lv": "jis šliaužė"
    },
    "imperfektKonjunktiv": {
      "de": "er kröche",
      "lv": "jis šliaužtų"
    },
    "partizipVergangenheit": {
      "de": "gekrochen (er ist)",
      "lv": "šliaužęs"
    }
  },
  {
    "infinitiv": {
      "de": "laden",
      "lv": "krauti, pakviesti"
    },
    "praesens": {
      "de": "er lädt",
      "lv": "jis krauna / pakviečia"
    },
    "imperfektIndikativ": {
      "de": "er lud",
      "lv": "jis krovė / pakvietė"
    },
    "imperfektKonjunktiv": {
      "de": "er lüde",
      "lv": "jis krautų / pakviestų"
    },
    "partizipVergangenheit": {
      "de": "geladen",
      "lv": "krautas / pakviestas"
    }
  },
  {
    "infinitiv": {
      "de": "lassen",
      "lv": "dėti, leisti"
    },
    "praesens": {
      "de": "er lässt",
      "lv": "jis deda / leidžia"
    },
    "imperfektIndikativ": {
      "de": "er ließ",
      "lv": "jis dėjo / leido"
    },
    "imperfektKonjunktiv": {
      "de": "er ließe",
      "lv": "jis dėtų / leistų"
    },
    "partizipVergangenheit": {
      "de": "gelassen",
      "lv": "dėtas / leista"
    }
  },
  {
    "infinitiv": {
      "de": "laufen",
      "lv": "bėgti"
    },
    "praesens": {
      "de": "er läuft",
      "lv": "jis bėga"
    },
    "imperfektIndikativ": {
      "de": "er lief",
      "lv": "jis bėgo"
    },
    "imperfektKonjunktiv": {
      "de": "er liefe",
      "lv": "jis bėgtų"
    },
    "partizipVergangenheit": {
      "de": "gelaufen (er ist)",
      "lv": "bėgęs"
    }
  },
  {
    "infinitiv": {
      "de": "leiden",
      "lv": "kentėti"
    },
    "praesens": {
      "de": "er leidet",
      "lv": "jis kenčia"
    },
    "imperfektIndikativ": {
      "de": "er litt",
      "lv": "jis kentėjo"
    },
    "imperfektKonjunktiv": {
      "de": "er litte",
      "lv": "jis kentėtų"
    },
    "partizipVergangenheit": {
      "de": "gelitten",
      "lv": "kentėtas"
    }
  },
  {
    "infinitiv": {
      "de": "leihen",
      "lv": "skolinti / skolintis"
    },
    "praesens": {
      "de": "er leiht",
      "lv": "jis skolina / skolinasi"
    },
    "imperfektIndikativ": {
      "de": "er lieh",
      "lv": "jis paskolino / pasiskolino"
    },
    "imperfektKonjunktiv": {
      "de": "er liehe",
      "lv": "jis paskolintų / pasiskolintų"
    },
    "partizipVergangenheit": {
      "de": "geliehen",
      "lv": "paskolintas / pasiskolintas"
    }
  },
  {
    "infinitiv": {
      "de": "lesen",
      "lv": "skaityti"
    },
    "praesens": {
      "de": "er liest",
      "lv": "jis skaito"
    },
    "imperfektIndikativ": {
      "de": "er las",
      "lv": "jis skaitė"
    },
    "imperfektKonjunktiv": {
      "de": "er läse",
      "lv": "jis skaitytų"
    },
    "partizipVergangenheit": {
      "de": "gelesen",
      "lv": "skaitytas"
    }
  },
  {
    "infinitiv": {
      "de": "liegen",
      "lv": "miegoti"
    },
    "praesens": {
      "de": "er liegt",
      "lv": "jis guli"
    },
    "imperfektIndikativ": {
      "de": "er lag",
      "lv": "jis gulėjo"
    },
    "imperfektKonjunktiv": {
      "de": "er läge",
      "lv": "jis gulėtų"
    },
    "partizipVergangenheit": {
      "de": "gelegen",
      "lv": "gulėta"
    }
  },
  {
    "infinitiv": {
      "de": "lügen",
      "lv": "meluoti"
    },
    "praesens": {
      "de": "er lügt",
      "lv": "jis meluoja"
    },
    "imperfektIndikativ": {
      "de": "er log",
      "lv": "jis melavo"
    },
    "imperfektKonjunktiv": {
      "de": "er löge",
      "lv": "jis meluotų"
    },
    "partizipVergangenheit": {
      "de": "gelogen",
      "lv": "meluota"
    }
  },
  {
    "infinitiv": {
      "de": "mahlen",
      "lv": "malti"
    },
    "praesens": {
      "de": "er mahlt",
      "lv": "jis mala"
    },
    "imperfektIndikativ": {
      "de": "er mahlte",
      "lv": "jis malė"
    },
    "imperfektKonjunktiv": {
      "de": "er malte",
      "lv": "jis maltų"
    },
    "partizipVergangenheit": {
      "de": "gemahlen",
      "lv": "maltas"
    }
  },
  {
    "infinitiv": {
      "de": "meiden",
      "lv": "vengti"
    },
    "praesens": {
      "de": "er meidet",
      "lv": "jis vengia"
    },
    "imperfektIndikativ": {
      "de": "er mied",
      "lv": "jis išvengė"
    },
    "imperfektKonjunktiv": {
      "de": "er miede",
      "lv": "jis išvengtų"
    },
    "partizipVergangenheit": {
      "de": "gemieden",
      "lv": "išvengtas"
    }
  },
  {
    "infinitiv": {
      "de": "melken",
      "lv": "melžti"
    },
    "praesens": {
      "de": "er milkt / er melkt",
      "lv": "jis melžia"
    },
    "imperfektIndikativ": {
      "de": "er molk / er melkte",
      "lv": "jis melžė"
    },
    "imperfektKonjunktiv": {
      "de": "er mölke / er melkte",
      "lv": "jis melžtų"
    },
    "partizipVergangenheit": {
      "de": "gemolken / gemelkt",
      "lv": "melžtas"
    }
  },
  {
    "infinitiv": {
      "de": "messen",
      "lv": "matuoti"
    },
    "praesens": {
      "de": "er misst",
      "lv": "jis matuoja"
    },
    "imperfektIndikativ": {
      "de": "er mass",
      "lv": "jis matavo"
    },
    "imperfektKonjunktiv": {
      "de": "er mäße",
      "lv": "jis matuotų"
    },
    "partizipVergangenheit": {
      "de": "gemessen",
      "lv": "matuotas"
    }
  },
  {
    "infinitiv": {
      "de": "misslingen",
      "lv": "nepavykti"
    },
    "praesens": {
      "de": "es misslingt",
      "lv": "tai nepavyksta"
    },
    "imperfektIndikativ": {
      "de": "misslang",
      "lv": "nepavyko"
    },
    "imperfektKonjunktiv": {
      "de": "misslang",
      "lv": "nepavyko"
    },
    "partizipVergangenheit": {
      "de": "misslungen",
      "lv": "nepavykęs"
    }
  },
  {
    "infinitiv": {
      "de": "mögen",
      "lv": "patikti"
    },
    "praesens": {
      "de": "er mag",
      "lv": "jam patinka"
    },
    "imperfektIndikativ": {
      "de": "mochte",
      "lv": "patiko"
    },
    "imperfektKonjunktiv": {
      "de": "mochte",
      "lv": "patiko"
    },
    "partizipVergangenheit": {
      "de": "gemocht",
      "lv": "patikęs"
    }
  },
  {
    "infinitiv": {
      "de": "müssen",
      "lv": "reikėti"
    },
    "praesens": {
      "de": "er muss",
      "lv": "jam reikia"
    },
    "imperfektIndikativ": {
      "de": "musste",
      "lv": "reikėjo"
    },
    "imperfektKonjunktiv": {
      "de": "musste",
      "lv": "reikėjo"
    },
    "partizipVergangenheit": {
      "de": "gemusst",
      "lv": "reikėjęs"
    }
  },
  {
    "infinitiv": {
      "de": "nehmen",
      "lv": "imti"
    },
    "praesens": {
      "de": "er nimmt",
      "lv": "jis ima"
    },
    "imperfektIndikativ": {
      "de": "er nahm",
      "lv": "jis ėmė"
    },
    "imperfektKonjunktiv": {
      "de": "er nähme",
      "lv": "jis imtų"
    },
    "partizipVergangenheit": {
      "de": "genommen",
      "lv": "imtas"
    }
  },
  {
    "infinitiv": {
      "de": "nennen",
      "lv": "pavadinti"
    },
    "praesens": {
      "de": "er nennt",
      "lv": "jis pavadina"
    },
    "imperfektIndikativ": {
      "de": "er nannte",
      "lv": "jis pavadino"
    },
    "imperfektKonjunktiv": {
      "de": "er nennte",
      "lv": "jis pavadintų"
    },
    "partizipVergangenheit": {
      "de": "genannt",
      "lv": "pavadintas"
    }
  },
  {
    "infinitiv": {
      "de": "pfeifen",
      "lv": "švilpti"
    },
    "praesens": {
      "de": "er pfeift",
      "lv": "jis švilpia"
    },
    "imperfektIndikativ": {
      "de": "er pfiff",
      "lv": "jis švilpė"
    },
    "imperfektKonjunktiv": {
      "de": "er pfiffe",
      "lv": "jis švilptų"
    },
    "partizipVergangenheit": {
      "de": "gepfiffen",
      "lv": "švilptas"
    }
  },
  {
    "infinitiv": {
      "de": "pflegen",
      "lv": "prižiūrėti"
    },
    "praesens": {
      "de": "er pflegt",
      "lv": "jis prižiūri"
    },
    "imperfektIndikativ": {
      "de": "pflegte vai pflog",
      "lv": "prižiūrėjo"
    },
    "imperfektKonjunktiv": {
      "de": "pflegte vai pflog",
      "lv": "prižiūrėjo"
    },
    "partizipVergangenheit": {
      "de": "gepflegt vai gepflogen",
      "lv": "prižiūrėtas"
    }
  },
  {
    "infinitiv": {
      "de": "preisen",
      "lv": "girti"
    },
    "praesens": {
      "de": "er preist",
      "lv": "jis giria"
    },
    "imperfektIndikativ": {
      "de": "er pries",
      "lv": "jis gyrė"
    },
    "imperfektKonjunktiv": {
      "de": "er priese",
      "lv": "jis girtų"
    },
    "partizipVergangenheit": {
      "de": "gepriesen",
      "lv": "pagirtas"
    }
  },
  {
    "infinitiv": {
      "de": "quellen",
      "lv": "tinti"
    },
    "praesens": {
      "de": "er quillt",
      "lv": "jis tinsta"
    },
    "imperfektIndikativ": {
      "de": "er quoll",
      "lv": "jis tino"
    },
    "imperfektKonjunktiv": {
      "de": "er quölle",
      "lv": "jis tintų"
    },
    "partizipVergangenheit": {
      "de": "gequollen (er ist)",
      "lv": "patinęs"
    }
  },
  {
    "infinitiv": {
      "de": "raten",
      "lv": "siūlyti / spėti"
    },
    "praesens": {
      "de": "er rät",
      "lv": "jis siūlo / spėja"
    },
    "imperfektIndikativ": {
      "de": "er riet",
      "lv": "jis siūlė / spėjo"
    },
    "imperfektKonjunktiv": {
      "de": "er riete",
      "lv": "jis siūlytų / spėtų"
    },
    "partizipVergangenheit": {
      "de": "geraten",
      "lv": "pasiūlytas / atspėtas"
    }
  },
  {
    "infinitiv": {
      "de": "reiben",
      "lv": "trinti"
    },
    "praesens": {
      "de": "er reibt",
      "lv": "jis trina"
    },
    "imperfektIndikativ": {
      "de": "er rieb",
      "lv": "jis trynė"
    },
    "imperfektKonjunktiv": {
      "de": "er riebe",
      "lv": "jis trintų"
    },
    "partizipVergangenheit": {
      "de": "gerieben",
      "lv": "trintas"
    }
  },
  {
    "infinitiv": {
      "de": "reißen",
      "lv": "rauti"
    },
    "praesens": {
      "de": "er reißt",
      "lv": "jis rauna"
    },
    "imperfektIndikativ": {
      "de": "er riss",
      "lv": "jis rovė"
    },
    "imperfektKonjunktiv": {
      "de": "er risse",
      "lv": "jis rautų"
    },
    "partizipVergangenheit": {
      "de": "gerissen",
      "lv": "rautas"
    }
  },
  {
    "infinitiv": {
      "de": "reiten",
      "lv": "joti"
    },
    "praesens": {
      "de": "er reitet",
      "lv": "jis joja"
    },
    "imperfektIndikativ": {
      "de": "er ritt",
      "lv": "jis jojo"
    },
    "imperfektKonjunktiv": {
      "de": "er ritte",
      "lv": "jis jotų"
    },
    "partizipVergangenheit": {
      "de": "geritten (er ist)",
      "lv": "jojęs"
    }
  },
  {
    "infinitiv": {
      "de": "rennen",
      "lv": "bėgti"
    },
    "praesens": {
      "de": "er rennt",
      "lv": "jis bėga"
    },
    "imperfektIndikativ": {
      "de": "er rannte",
      "lv": "jis bėgo"
    },
    "imperfektKonjunktiv": {
      "de": "er rennte",
      "lv": "jis bėgtų"
    },
    "partizipVergangenheit": {
      "de": "gerannt",
      "lv": "bėgęs"
    }
  },
  {
    "infinitiv": {
      "de": "riechen",
      "lv": "uosti"
    },
    "praesens": {
      "de": "er riecht",
      "lv": "jis uodžia"
    },
    "imperfektIndikativ": {
      "de": "er roch",
      "lv": "jis uodė"
    },
    "imperfektKonjunktiv": {
      "de": "er röche",
      "lv": "jis uostų"
    },
    "partizipVergangenheit": {
      "de": "gerochen",
      "lv": "uostas"
    }
  },
  {
    "infinitiv": {
      "de": "ringen",
      "lv": "laužtis"
    },
    "praesens": {
      "de": "er ringt",
      "lv": "jis laužiasi"
    },
    "imperfektIndikativ": {
      "de": "er rang",
      "lv": "jis laužėsi"
    },
    "imperfektKonjunktiv": {
      "de": "er ränge",
      "lv": "jis laužtųsi"
    },
    "partizipVergangenheit": {
      "de": "gerungen",
      "lv": "laužęsis"
    }
  },
  {
    "infinitiv": {
      "de": "rinnen",
      "lv": "tekėti"
    },
    "praesens": {
      "de": "er rinnt",
      "lv": "jis laksto"
    },
    "imperfektIndikativ": {
      "de": "er rann",
      "lv": "jis lakstė"
    },
    "imperfektKonjunktiv": {
      "de": "er ränne / er rönne",
      "lv": "jis lakstytų"
    },
    "partizipVergangenheit": {
      "de": "geronnen (er ist)",
      "lv": "tekėjęs / sukrekėjęs"
    }
  },
  {
    "infinitiv": {
      "de": "rufen",
      "lv": "šaukti"
    },
    "praesens": {
      "de": "er ruft",
      "lv": "jis šaukia"
    },
    "imperfektIndikativ": {
      "de": "er rief",
      "lv": "jis šaukė"
    },
    "imperfektKonjunktiv": {
      "de": "er riefe",
      "lv": "jis šauktų"
    },
    "partizipVergangenheit": {
      "de": "gerufen",
      "lv": "šauktas"
    }
  },
  {
    "infinitiv": {
      "de": "salzen",
      "lv": "sūdyti"
    },
    "praesens": {
      "de": "er salzt",
      "lv": "jis sūdo"
    },
    "imperfektIndikativ": {
      "de": "er salzte",
      "lv": "jis sūdė"
    },
    "imperfektKonjunktiv": {
      "de": "er salzte",
      "lv": "jis sūdytų"
    },
    "partizipVergangenheit": {
      "de": "gesalzen",
      "lv": "sūdytas"
    }
  },
  {
    "infinitiv": {
      "de": "saufen",
      "lv": "girtuokliauti / gerti"
    },
    "praesens": {
      "de": "er säuft",
      "lv": "jis girtuokliauja / geria"
    },
    "imperfektIndikativ": {
      "de": "er soff",
      "lv": "jis girtuokliavo / gėrė"
    },
    "imperfektKonjunktiv": {
      "de": "er söffe",
      "lv": "jis girtuokliautų / gertų"
    },
    "partizipVergangenheit": {
      "de": "gesoffen",
      "lv": "gertas"
    }
  },
  {
    "infinitiv": {
      "de": "saugen",
      "lv": "čiulpti"
    },
    "praesens": {
      "de": "er saugt",
      "lv": "jis čiulpia"
    },
    "imperfektIndikativ": {
      "de": "er sog",
      "lv": "jis čiulpė"
    },
    "imperfektKonjunktiv": {
      "de": "er söge",
      "lv": "jis čiulptų"
    },
    "partizipVergangenheit": {
      "de": "gesogen",
      "lv": "čiulptas"
    }
  },
  {
    "infinitiv": {
      "de": "schaffen",
      "lv": "kurti"
    },
    "praesens": {
      "de": "er schafft",
      "lv": "jis kuria"
    },
    "imperfektIndikativ": {
      "de": "er schuf",
      "lv": "jis kūrė"
    },
    "imperfektKonjunktiv": {
      "de": "er schüfe",
      "lv": "jis kurtų"
    },
    "partizipVergangenheit": {
      "de": "geschaffen",
      "lv": "sukurtas"
    }
  },
  {
    "infinitiv": {
      "de": "schallen",
      "lv": "skambėti"
    },
    "praesens": {
      "de": "es schallt",
      "lv": "tai skamba"
    },
    "imperfektIndikativ": {
      "de": "schallte vai scholl",
      "lv": "skambėjo"
    },
    "imperfektKonjunktiv": {
      "de": "schallte vai scholl",
      "lv": "skambėjo"
    },
    "partizipVergangenheit": {
      "de": "geschallt",
      "lv": "skambėjęs"
    }
  },
  {
    "infinitiv": {
      "de": "scheiden",
      "lv": "skirti / skirtis"
    },
    "praesens": {
      "de": "er scheidet",
      "lv": "jis skiria / skiriasi"
    },
    "imperfektIndikativ": {
      "de": "er schied",
      "lv": "jis skyrė / skyrėsi"
    },
    "imperfektKonjunktiv": {
      "de": "er schiede",
      "lv": "jis skirtų / skirtųsi"
    },
    "partizipVergangenheit": {
      "de": "geschieden (er hat / er ist)",
      "lv": "skirtas / išsiskyręs"
    }
  },
  {
    "infinitiv": {
      "de": "scheinen",
      "lv": "šviesti / rodytis"
    },
    "praesens": {
      "de": "er scheint",
      "lv": "jis šviečia / rodosi"
    },
    "imperfektIndikativ": {
      "de": "er schien",
      "lv": "jis švietė / rodėsi"
    },
    "imperfektKonjunktiv": {
      "de": "er schiene",
      "lv": "jis šviestų / rodytųsi"
    },
    "partizipVergangenheit": {
      "de": "geschienen",
      "lv": "švietęs / rodęsis"
    }
  },
  {
    "infinitiv": {
      "de": "schelten",
      "lv": "barti"
    },
    "praesens": {
      "de": "er schilt",
      "lv": "jis bara"
    },
    "imperfektIndikativ": {
      "de": "er schalt",
      "lv": "jis barė"
    },
    "imperfektKonjunktiv": {
      "de": "er schölte / er schälte",
      "lv": "jis bartų"
    },
    "partizipVergangenheit": {
      "de": "gescholten",
      "lv": "bartas"
    }
  },
  {
    "infinitiv": {
      "de": "scheren",
      "lv": "kirpti"
    },
    "praesens": {
      "de": "er schert",
      "lv": "jis kerpa"
    },
    "imperfektIndikativ": {
      "de": "schor vai scherte",
      "lv": "kirpo"
    },
    "imperfektKonjunktiv": {
      "de": "schor vai scherte",
      "lv": "kirpo"
    },
    "partizipVergangenheit": {
      "de": "geschoren vai geschert",
      "lv": "apkirptas"
    }
  },
  {
    "infinitiv": {
      "de": "schieben",
      "lv": "stumti"
    },
    "praesens": {
      "de": "er schiebt",
      "lv": "jis stumia"
    },
    "imperfektIndikativ": {
      "de": "er schob",
      "lv": "jis stūmė"
    },
    "imperfektKonjunktiv": {
      "de": "er schöbe",
      "lv": "jis stumtų"
    },
    "partizipVergangenheit": {
      "de": "geschoben",
      "lv": "stumtas"
    }
  },
  {
    "infinitiv": {
      "de": "schießen",
      "lv": "šauti"
    },
    "praesens": {
      "de": "er schießt",
      "lv": "jis šauna"
    },
    "imperfektIndikativ": {
      "de": "er schoss",
      "lv": "jis šovė"
    },
    "imperfektKonjunktiv": {
      "de": "er schösse",
      "lv": "jis šautų"
    },
    "partizipVergangenheit": {
      "de": "geschossen",
      "lv": "šautas"
    }
  },
  {
    "infinitiv": {
      "de": "schinden",
      "lv": "kankinti"
    },
    "praesens": {
      "de": "er schindet",
      "lv": "jis kankina"
    },
    "imperfektIndikativ": {
      "de": "schindete",
      "lv": "kankino"
    },
    "imperfektKonjunktiv": {
      "de": "schindete",
      "lv": "kankino"
    },
    "partizipVergangenheit": {
      "de": "geschunden",
      "lv": "kankintas"
    }
  },
  {
    "infinitiv": {
      "de": "schlafen",
      "lv": "miegoti"
    },
    "praesens": {
      "de": "er schläft",
      "lv": "jis guli"
    },
    "imperfektIndikativ": {
      "de": "er schlief",
      "lv": "jis gulėjo"
    },
    "imperfektKonjunktiv": {
      "de": "er schliefe",
      "lv": "jis gulėtų"
    },
    "partizipVergangenheit": {
      "de": "geschlafen",
      "lv": "gulėta"
    }
  },
  {
    "infinitiv": {
      "de": "schlagen",
      "lv": "mušti"
    },
    "praesens": {
      "de": "er schlägt",
      "lv": "jis muša"
    },
    "imperfektIndikativ": {
      "de": "er schlug",
      "lv": "jis mušė"
    },
    "imperfektKonjunktiv": {
      "de": "er schlüge",
      "lv": "jis muštų"
    },
    "partizipVergangenheit": {
      "de": "geschlagen",
      "lv": "muštas"
    }
  },
  {
    "infinitiv": {
      "de": "schleichen",
      "lv": "šliaužti"
    },
    "praesens": {
      "de": "er schleicht",
      "lv": "jis šliaužia"
    },
    "imperfektIndikativ": {
      "de": "er schlich",
      "lv": "jis šliaužė"
    },
    "imperfektKonjunktiv": {
      "de": "er schliche",
      "lv": "jis šliaužtų"
    },
    "partizipVergangenheit": {
      "de": "geschlichen (er ist)",
      "lv": "šliaužęs"
    }
  },
  {
    "infinitiv": {
      "de": "schleifen",
      "lv": "šlifuoti"
    },
    "praesens": {
      "de": "er schleift",
      "lv": "jis šlifuoja"
    },
    "imperfektIndikativ": {
      "de": "er schliff",
      "lv": "jis šlifavo"
    },
    "imperfektKonjunktiv": {
      "de": "er schliffe",
      "lv": "jis šlifuotų"
    },
    "partizipVergangenheit": {
      "de": "geschliffen",
      "lv": "šlifuotas"
    }
  },
  {
    "infinitiv": {
      "de": "schließen",
      "lv": "uždaryti"
    },
    "praesens": {
      "de": "er schließt",
      "lv": "jis uždaro"
    },
    "imperfektIndikativ": {
      "de": "er schloss",
      "lv": "jis uždarė"
    },
    "imperfektKonjunktiv": {
      "de": "er schlösse",
      "lv": "jis uždarytų"
    },
    "partizipVergangenheit": {
      "de": "geschlossen",
      "lv": "uždarytas"
    }
  },
  {
    "infinitiv": {
      "de": "schlingen",
      "lv": "rytoj"
    },
    "praesens": {
      "de": "er schlingt",
      "lv": "jis ryja"
    },
    "imperfektIndikativ": {
      "de": "er schlang",
      "lv": "jis rijo"
    },
    "imperfektKonjunktiv": {
      "de": "er schlänge",
      "lv": "jis rytų"
    },
    "partizipVergangenheit": {
      "de": "geschlungen",
      "lv": "rytas"
    }
  },
  {
    "infinitiv": {
      "de": "schmeißen",
      "lv": "mesti"
    },
    "praesens": {
      "de": "er schmeißt",
      "lv": "jis meta"
    },
    "imperfektIndikativ": {
      "de": "er schmiss",
      "lv": "jis metė"
    },
    "imperfektKonjunktiv": {
      "de": "er schmisse",
      "lv": "jis mestų"
    },
    "partizipVergangenheit": {
      "de": "geschmissen",
      "lv": "mestas"
    }
  },
  {
    "infinitiv": {
      "de": "schmelzen",
      "lv": "tirpti"
    },
    "praesens": {
      "de": "er schmilzt",
      "lv": "jis tirpsta"
    },
    "imperfektIndikativ": {
      "de": "er schmolz",
      "lv": "jis tirpo"
    },
    "imperfektKonjunktiv": {
      "de": "er schmölze",
      "lv": "jis tirptų"
    },
    "partizipVergangenheit": {
      "de": "geschmolzen (er ist)",
      "lv": "tirpęs"
    }
  },
  {
    "infinitiv": {
      "de": "schnauben",
      "lv": "šnypšti"
    },
    "praesens": {
      "de": "er schnaubt",
      "lv": "jis šnypščia"
    },
    "imperfektIndikativ": {
      "de": "schnaubte vai schnob",
      "lv": "šnypštė"
    },
    "imperfektKonjunktiv": {
      "de": "schnaubte vai schnob",
      "lv": "šnypštė"
    },
    "partizipVergangenheit": {
      "de": "geschnaubt vai geschnoben",
      "lv": "nušnypštęs"
    }
  },
  {
    "infinitiv": {
      "de": "schneiden",
      "lv": "sukti"
    },
    "praesens": {
      "de": "er schneidet",
      "lv": "jis pjauna"
    },
    "imperfektIndikativ": {
      "de": "er schnitt",
      "lv": "jis pjovė"
    },
    "imperfektKonjunktiv": {
      "de": "er schnitte",
      "lv": "jis pjautų"
    },
    "partizipVergangenheit": {
      "de": "geschnitten",
      "lv": "pjautas"
    }
  },
  {
    "infinitiv": {
      "de": "schreiben",
      "lv": "rašyti"
    },
    "praesens": {
      "de": "er schreibt",
      "lv": "jis rašo"
    },
    "imperfektIndikativ": {
      "de": "er schrieb",
      "lv": "jis rašė"
    },
    "imperfektKonjunktiv": {
      "de": "er schriebe",
      "lv": "jis rašytų"
    },
    "partizipVergangenheit": {
      "de": "geschrieben",
      "lv": "rašytas"
    }
  },
  {
    "infinitiv": {
      "de": "schreien",
      "lv": "rėkti"
    },
    "praesens": {
      "de": "er schreit",
      "lv": "jis rėkia"
    },
    "imperfektIndikativ": {
      "de": "er schrie",
      "lv": "jis rėkė"
    },
    "imperfektKonjunktiv": {
      "de": "er schriee",
      "lv": "jis rėktų"
    },
    "partizipVergangenheit": {
      "de": "geschrien",
      "lv": "rėkta"
    }
  },
  {
    "infinitiv": {
      "de": "schreiten",
      "lv": "žingsniuoti"
    },
    "praesens": {
      "de": "er schreitet",
      "lv": "jis žingsniuoja"
    },
    "imperfektIndikativ": {
      "de": "er schritt",
      "lv": "jis žingsniavo"
    },
    "imperfektKonjunktiv": {
      "de": "er schritte",
      "lv": "jis žingsniuotų"
    },
    "partizipVergangenheit": {
      "de": "geschritten (er ist)",
      "lv": "žingsniavęs"
    }
  },
  {
    "infinitiv": {
      "de": "schweigen",
      "lv": "tylėti"
    },
    "praesens": {
      "de": "er schweigt",
      "lv": "jis tyli"
    },
    "imperfektIndikativ": {
      "de": "er schwieg",
      "lv": "jis tylėjo"
    },
    "imperfektKonjunktiv": {
      "de": "er schwiege",
      "lv": "jis tylėtų"
    },
    "partizipVergangenheit": {
      "de": "geschwiegen",
      "lv": "tylėta"
    }
  },
  {
    "infinitiv": {
      "de": "schwellen",
      "lv": "tinti"
    },
    "praesens": {
      "de": "er schwillt",
      "lv": "jis brinksta"
    },
    "imperfektIndikativ": {
      "de": "er schwoll",
      "lv": "jis brinko"
    },
    "imperfektKonjunktiv": {
      "de": "er schwölle",
      "lv": "jis brinktų"
    },
    "partizipVergangenheit": {
      "de": "geschwollen (er ist)",
      "lv": "brinkęs"
    }
  },
  {
    "infinitiv": {
      "de": "schwimmen",
      "lv": "plaukti"
    },
    "praesens": {
      "de": "er schwimmt",
      "lv": "jis plaukia"
    },
    "imperfektIndikativ": {
      "de": "er schwamm",
      "lv": "jis plaukė"
    },
    "imperfektKonjunktiv": {
      "de": "er schwömme / er schwämme",
      "lv": "jis plauktų"
    },
    "partizipVergangenheit": {
      "de": "geschwommen (er ist)",
      "lv": "plaukęs"
    }
  },
  {
    "infinitiv": {
      "de": "schwinden",
      "lv": "dingti"
    },
    "praesens": {
      "de": "er schwindet",
      "lv": "jis dingsta"
    },
    "imperfektIndikativ": {
      "de": "er schwand",
      "lv": "jis dingo"
    },
    "imperfektKonjunktiv": {
      "de": "er schwände",
      "lv": "jis dingtų"
    },
    "partizipVergangenheit": {
      "de": "geschwunden (er ist)",
      "lv": "dingęs"
    }
  },
  {
    "infinitiv": {
      "de": "schwingen",
      "lv": "mosuoti"
    },
    "praesens": {
      "de": "er schwingt",
      "lv": "jis mosuoja"
    },
    "imperfektIndikativ": {
      "de": "er schwang",
      "lv": "jis mosuojo"
    },
    "imperfektKonjunktiv": {
      "de": "er schwänge",
      "lv": "jis mosuotų"
    },
    "partizipVergangenheit": {
      "de": "geschwungen",
      "lv": "mosuotas"
    }
  },
  {
    "infinitiv": {
      "de": "schwören",
      "lv": "prisiekti"
    },
    "praesens": {
      "de": "er schwört",
      "lv": "jis prisiekia"
    },
    "imperfektIndikativ": {
      "de": "er schwur / er schwor",
      "lv": "jis prisiekė"
    },
    "imperfektKonjunktiv": {
      "de": "er schwöre",
      "lv": "jis prisiektų"
    },
    "partizipVergangenheit": {
      "de": "geschworen",
      "lv": "prisiekta"
    }
  },
  {
    "infinitiv": {
      "de": "sehen",
      "lv": "matyti"
    },
    "praesens": {
      "de": "er sieht",
      "lv": "jis mato"
    },
    "imperfektIndikativ": {
      "de": "er sah",
      "lv": "jis matė"
    },
    "imperfektKonjunktiv": {
      "de": "er sähe",
      "lv": "jis matytų"
    },
    "partizipVergangenheit": {
      "de": "gesehen",
      "lv": "matytas"
    }
  },
  {
    "infinitiv": {
      "de": "sein",
      "lv": "būti"
    },
    "praesens": {
      "de": "er ist",
      "lv": "jis yra"
    },
    "imperfektIndikativ": {
      "de": "war",
      "lv": "turėjo"
    },
    "imperfektKonjunktiv": {
      "de": "war",
      "lv": "turėjo"
    },
    "partizipVergangenheit": {
      "de": "gewesen",
      "lv": "turėjęs"
    }
  },
  {
    "infinitiv": {
      "de": "senden",
      "lv": "siųsti"
    },
    "praesens": {
      "de": "er sendet",
      "lv": "jis siunčia"
    },
    "imperfektIndikativ": {
      "de": "er sandte / er sendete",
      "lv": "jis siuntė"
    },
    "imperfektKonjunktiv": {
      "de": "er sendete",
      "lv": "jis siųstų"
    },
    "partizipVergangenheit": {
      "de": "gesandt / gesendet",
      "lv": "siųstas"
    }
  },
  {
    "infinitiv": {
      "de": "sieden",
      "lv": "virti"
    },
    "praesens": {
      "de": "er siedet",
      "lv": "jis verda"
    },
    "imperfektIndikativ": {
      "de": "sott vai siedete",
      "lv": "virė"
    },
    "imperfektKonjunktiv": {
      "de": "sott vai siedete",
      "lv": "virė"
    },
    "partizipVergangenheit": {
      "de": "gesotten vai gesiedet",
      "lv": "virtas"
    }
  },
  {
    "infinitiv": {
      "de": "singen",
      "lv": "dainuoti"
    },
    "praesens": {
      "de": "er singt",
      "lv": "jis dainuoja"
    },
    "imperfektIndikativ": {
      "de": "er sang",
      "lv": "jis dainavo"
    },
    "imperfektKonjunktiv": {
      "de": "er sänge",
      "lv": "jis dainuotų"
    },
    "partizipVergangenheit": {
      "de": "gesungen",
      "lv": "dainuotas"
    }
  },
  {
    "infinitiv": {
      "de": "sinken",
      "lv": "skęsti"
    },
    "praesens": {
      "de": "er sinkt",
      "lv": "jis skęsta"
    },
    "imperfektIndikativ": {
      "de": "er sank",
      "lv": "jis skendo"
    },
    "imperfektKonjunktiv": {
      "de": "er sänke",
      "lv": "jis skęstų"
    },
    "partizipVergangenheit": {
      "de": "gesunken (er ist)",
      "lv": "skendęs"
    }
  },
  {
    "infinitiv": {
      "de": "sinnen",
      "lv": "svarstyti"
    },
    "praesens": {
      "de": "er sinnt",
      "lv": "jis svarsto"
    },
    "imperfektIndikativ": {
      "de": "er sann",
      "lv": "jis svarstė"
    },
    "imperfektKonjunktiv": {
      "de": "er sönne / er sänne",
      "lv": "jis svarstytų"
    },
    "partizipVergangenheit": {
      "de": "gesonnen",
      "lv": "svarstytas"
    }
  },
  {
    "infinitiv": {
      "de": "sitzen",
      "lv": "sėdėti"
    },
    "praesens": {
      "de": "er sitzt",
      "lv": "jis sėdi"
    },
    "imperfektIndikativ": {
      "de": "er sass",
      "lv": "jis sėdėjo"
    },
    "imperfektKonjunktiv": {
      "de": "er säße",
      "lv": "jis sėdėtų"
    },
    "partizipVergangenheit": {
      "de": "gesessen",
      "lv": "sėdėta"
    }
  },
  {
    "infinitiv": {
      "de": "sollen",
      "lv": "privalėti / turėti pareigą"
    },
    "praesens": {
      "de": "er soll",
      "lv": "jam reikia"
    },
    "imperfektIndikativ": {
      "de": "sollte",
      "lv": "reikėjo"
    },
    "imperfektKonjunktiv": {
      "de": "sollte",
      "lv": "reikėjo"
    },
    "partizipVergangenheit": {
      "de": "gesollt",
      "lv": "reikėjęs"
    }
  },
  {
    "infinitiv": {
      "de": "speien",
      "lv": "spjaudyti"
    },
    "praesens": {
      "de": "er speit",
      "lv": "jis spjaudo"
    },
    "imperfektIndikativ": {
      "de": "er spie",
      "lv": "jis spjovė"
    },
    "imperfektKonjunktiv": {
      "de": "er spie",
      "lv": "jis spjautų"
    },
    "partizipVergangenheit": {
      "de": "gespien",
      "lv": "spjautas"
    }
  },
  {
    "infinitiv": {
      "de": "spinnen",
      "lv": "verpti"
    },
    "praesens": {
      "de": "er spinnt",
      "lv": "jis verpia"
    },
    "imperfektIndikativ": {
      "de": "er spann",
      "lv": "jis verpė"
    },
    "imperfektKonjunktiv": {
      "de": "er spönne / er spänne",
      "lv": "jis verptų"
    },
    "partizipVergangenheit": {
      "de": "gesponnen",
      "lv": "verptas"
    }
  },
  {
    "infinitiv": {
      "de": "spleißen",
      "lv": "sujungti"
    },
    "praesens": {
      "de": "er spleißt",
      "lv": "jis sujungia"
    },
    "imperfektIndikativ": {
      "de": "spliss",
      "lv": "sujungė"
    },
    "imperfektKonjunktiv": {
      "de": "spliss",
      "lv": "sujungė"
    },
    "partizipVergangenheit": {
      "de": "gesplissen",
      "lv": "sujungtas"
    }
  },
  {
    "infinitiv": {
      "de": "sprechen",
      "lv": "kalbėti"
    },
    "praesens": {
      "de": "er spricht",
      "lv": "jis kalba"
    },
    "imperfektIndikativ": {
      "de": "er sprach",
      "lv": "jis kalbėjo"
    },
    "imperfektKonjunktiv": {
      "de": "er spräche",
      "lv": "jis kalbėtų"
    },
    "partizipVergangenheit": {
      "de": "gesprochen",
      "lv": "kalbėta"
    }
  },
  {
    "infinitiv": {
      "de": "sprießen",
      "lv": "žydėti"
    },
    "praesens": {
      "de": "er sprießt",
      "lv": "jis žydi"
    },
    "imperfektIndikativ": {
      "de": "er spross",
      "lv": "jis žydėjo"
    },
    "imperfektKonjunktiv": {
      "de": "er sprösse",
      "lv": "jis žydėtų"
    },
    "partizipVergangenheit": {
      "de": "gesprossen (er ist)",
      "lv": "žydėjęs"
    }
  },
  {
    "infinitiv": {
      "de": "springen",
      "lv": "šokti"
    },
    "praesens": {
      "de": "er springt",
      "lv": "jis šoka"
    },
    "imperfektIndikativ": {
      "de": "er sprang",
      "lv": "jis šoko"
    },
    "imperfektKonjunktiv": {
      "de": "er spränge",
      "lv": "jis šoktų"
    },
    "partizipVergangenheit": {
      "de": "gesprungen (er ist)",
      "lv": "šokęs"
    }
  },
  {
    "infinitiv": {
      "de": "stechen",
      "lv": "durti"
    },
    "praesens": {
      "de": "er sticht",
      "lv": "jis duria"
    },
    "imperfektIndikativ": {
      "de": "er stach",
      "lv": "jis durė"
    },
    "imperfektKonjunktiv": {
      "de": "er stäche",
      "lv": "jis durtų"
    },
    "partizipVergangenheit": {
      "de": "gestochen",
      "lv": "durtas"
    }
  },
  {
    "infinitiv": {
      "de": "stecken",
      "lv": "kišti / įsprausti"
    },
    "praesens": {
      "de": "er steckt",
      "lv": "jis kiša"
    },
    "imperfektIndikativ": {
      "de": "stak vai steckte",
      "lv": "įkišo"
    },
    "imperfektKonjunktiv": {
      "de": "stak vai steckte",
      "lv": "įkišo"
    },
    "partizipVergangenheit": {
      "de": "gesteckt",
      "lv": "įkištas"
    }
  },
  {
    "infinitiv": {
      "de": "stehen",
      "lv": "stovėti"
    },
    "praesens": {
      "de": "er steht",
      "lv": "jis stovi"
    },
    "imperfektIndikativ": {
      "de": "er stand",
      "lv": "jis stovėjo"
    },
    "imperfektKonjunktiv": {
      "de": "er stände / er stünde",
      "lv": "jis stovėtų"
    },
    "partizipVergangenheit": {
      "de": "gestanden",
      "lv": "stovėta"
    }
  },
  {
    "infinitiv": {
      "de": "stehlen",
      "lv": "vogti"
    },
    "praesens": {
      "de": "er stiehlt",
      "lv": "jis vagia"
    },
    "imperfektIndikativ": {
      "de": "er stahl",
      "lv": "jis vogė"
    },
    "imperfektKonjunktiv": {
      "de": "er stöhle / er stähle",
      "lv": "jis vogtų"
    },
    "partizipVergangenheit": {
      "de": "gestohlen",
      "lv": "vogtas"
    }
  },
  {
    "infinitiv": {
      "de": "steigen",
      "lv": "lipti"
    },
    "praesens": {
      "de": "er steigt",
      "lv": "jis kopia"
    },
    "imperfektIndikativ": {
      "de": "er stieg",
      "lv": "jis kopė"
    },
    "imperfektKonjunktiv": {
      "de": "er stiege",
      "lv": "jis koptų"
    },
    "partizipVergangenheit": {
      "de": "gestiegen (er ist)",
      "lv": "kopęs"
    }
  },
  {
    "infinitiv": {
      "de": "sterben",
      "lv": "mirti"
    },
    "praesens": {
      "de": "er stirbt",
      "lv": "jis mirsta"
    },
    "imperfektIndikativ": {
      "de": "er starb",
      "lv": "jis mirė"
    },
    "imperfektKonjunktiv": {
      "de": "er stürbe",
      "lv": "jis mirtų"
    },
    "partizipVergangenheit": {
      "de": "gestorben (er ist)",
      "lv": "miręs"
    }
  },
  {
    "infinitiv": {
      "de": "stieben",
      "lv": "dulkėti / sūkuriuoti"
    },
    "praesens": {
      "de": "es stiebt",
      "lv": "tai dulkėja"
    },
    "imperfektIndikativ": {
      "de": "stob vai stiebte",
      "lv": "dulkėjo"
    },
    "imperfektKonjunktiv": {
      "de": "stob vai stiebte",
      "lv": "dulkėjo"
    },
    "partizipVergangenheit": {
      "de": "gestoben vai gestiebt",
      "lv": "išsisklaidęs"
    }
  },
  {
    "infinitiv": {
      "de": "stinken",
      "lv": "dvokti"
    },
    "praesens": {
      "de": "es stinkt",
      "lv": "tai dvokia"
    },
    "imperfektIndikativ": {
      "de": "stank",
      "lv": "dvokė"
    },
    "imperfektKonjunktiv": {
      "de": "stank",
      "lv": "dvokė"
    },
    "partizipVergangenheit": {
      "de": "gestunken",
      "lv": "dvokęs"
    }
  },
  {
    "infinitiv": {
      "de": "stoßen",
      "lv": "stumti"
    },
    "praesens": {
      "de": "er stößt",
      "lv": "jis trenkia"
    },
    "imperfektIndikativ": {
      "de": "er stieß",
      "lv": "jis trenkė"
    },
    "imperfektKonjunktiv": {
      "de": "er stieße",
      "lv": "jis trenktų"
    },
    "partizipVergangenheit": {
      "de": "gestoßen",
      "lv": "trenktas"
    }
  },
  {
    "infinitiv": {
      "de": "streichen",
      "lv": "dažyti / dryžuoti"
    },
    "praesens": {
      "de": "er streicht",
      "lv": "jis dažo / dryžuoja"
    },
    "imperfektIndikativ": {
      "de": "er strich",
      "lv": "jis dažė / dryžavo"
    },
    "imperfektKonjunktiv": {
      "de": "er striche",
      "lv": "jis dažytų / dryžuotų"
    },
    "partizipVergangenheit": {
      "de": "gestrichen",
      "lv": "dažytas / dryžuotas"
    }
  },
  {
    "infinitiv": {
      "de": "streiten",
      "lv": "kovoti"
    },
    "praesens": {
      "de": "er streitet",
      "lv": "jis kovoja"
    },
    "imperfektIndikativ": {
      "de": "er stritt",
      "lv": "jis kovojo"
    },
    "imperfektKonjunktiv": {
      "de": "er stritte",
      "lv": "jis kovotų"
    },
    "partizipVergangenheit": {
      "de": "gestritten",
      "lv": "kovojęs"
    }
  },
  {
    "infinitiv": {
      "de": "tragen",
      "lv": "nešti"
    },
    "praesens": {
      "de": "er trägt",
      "lv": "jis neša"
    },
    "imperfektIndikativ": {
      "de": "er trug",
      "lv": "jis nešė"
    },
    "imperfektKonjunktiv": {
      "de": "er trüge",
      "lv": "jis neštų"
    },
    "partizipVergangenheit": {
      "de": "getragen",
      "lv": "neštas"
    }
  },
  {
    "infinitiv": {
      "de": "treffen",
      "lv": "sutikti"
    },
    "praesens": {
      "de": "er trifft",
      "lv": "jis sutinka"
    },
    "imperfektIndikativ": {
      "de": "er traf",
      "lv": "jis sutiko"
    },
    "imperfektKonjunktiv": {
      "de": "er träfe",
      "lv": "jis sutiktų"
    },
    "partizipVergangenheit": {
      "de": "getroffen",
      "lv": "sutiktas"
    }
  },
  {
    "infinitiv": {
      "de": "treiben",
      "lv": "varyti"
    },
    "praesens": {
      "de": "er treibt",
      "lv": "jis varo"
    },
    "imperfektIndikativ": {
      "de": "er trieb",
      "lv": "jis varė"
    },
    "imperfektKonjunktiv": {
      "de": "er triebe",
      "lv": "jis varytų"
    },
    "partizipVergangenheit": {
      "de": "getrieben",
      "lv": "varytas"
    }
  },
  {
    "infinitiv": {
      "de": "treten",
      "lv": "stotis / eiti"
    },
    "praesens": {
      "de": "er tritt",
      "lv": "jis stojasi / eina"
    },
    "imperfektIndikativ": {
      "de": "er trat",
      "lv": "jis stojosi / ėjo"
    },
    "imperfektKonjunktiv": {
      "de": "er träte",
      "lv": "jis stotųsi / eitų"
    },
    "partizipVergangenheit": {
      "de": "getreten (er ist)",
      "lv": "stojęsis / ėjęs"
    }
  },
  {
    "infinitiv": {
      "de": "trinken",
      "lv": "gerti"
    },
    "praesens": {
      "de": "er trinkt",
      "lv": "jis geria"
    },
    "imperfektIndikativ": {
      "de": "er trank",
      "lv": "jis gėrė"
    },
    "imperfektKonjunktiv": {
      "de": "er tränke",
      "lv": "jis gertų"
    },
    "partizipVergangenheit": {
      "de": "getrunken",
      "lv": "gertas"
    }
  },
  {
    "infinitiv": {
      "de": "trügen",
      "lv": "apgauti"
    },
    "praesens": {
      "de": "er trögt",
      "lv": "jis apgauna"
    },
    "imperfektIndikativ": {
      "de": "er trog",
      "lv": "jis apgavo"
    },
    "imperfektKonjunktiv": {
      "de": "er tröge",
      "lv": "jis apgautų"
    },
    "partizipVergangenheit": {
      "de": "getrogen",
      "lv": "apgautas"
    }
  },
  {
    "infinitiv": {
      "de": "tun",
      "lv": "daryti"
    },
    "praesens": {
      "de": "er tut",
      "lv": "jis daro"
    },
    "imperfektIndikativ": {
      "de": "er tat",
      "lv": "jis darė"
    },
    "imperfektKonjunktiv": {
      "de": "er täte",
      "lv": "jis darytų"
    },
    "partizipVergangenheit": {
      "de": "getan",
      "lv": "darytas"
    }
  },
  {
    "infinitiv": {
      "de": "verderben",
      "lv": "gadinti"
    },
    "praesens": {
      "de": "er verdirbt",
      "lv": "jis gadina"
    },
    "imperfektIndikativ": {
      "de": "er verdarb",
      "lv": "jis gadino"
    },
    "imperfektKonjunktiv": {
      "de": "er verdürbe",
      "lv": "jis gadintų"
    },
    "partizipVergangenheit": {
      "de": "verdorben",
      "lv": "sugadintas"
    }
  },
  {
    "infinitiv": {
      "de": "verdrießen",
      "lv": "sukelti apmaudą"
    },
    "praesens": {
      "de": "er verdrießt",
      "lv": "jis sukelia apmaudą"
    },
    "imperfektIndikativ": {
      "de": "er verdross",
      "lv": "jis sukėlė apmaudą"
    },
    "imperfektKonjunktiv": {
      "de": "er verdrösse",
      "lv": "jis sukeltų apmaudą"
    },
    "partizipVergangenheit": {
      "de": "verdrossen",
      "lv": "nuliūdintas (nusiminęs)"
    }
  },
  {
    "infinitiv": {
      "de": "vergessen",
      "lv": "pamiršti"
    },
    "praesens": {
      "de": "er vergisst",
      "lv": "jis pamiršta"
    },
    "imperfektIndikativ": {
      "de": "er vergass",
      "lv": "jis pamiršo"
    },
    "imperfektKonjunktiv": {
      "de": "er vergäße",
      "lv": "jis pamirštų"
    },
    "partizipVergangenheit": {
      "de": "vergessen",
      "lv": "pamirštas"
    }
  },
  {
    "infinitiv": {
      "de": "verlieren",
      "lv": "pamesti"
    },
    "praesens": {
      "de": "er verliert",
      "lv": "jis pameta"
    },
    "imperfektIndikativ": {
      "de": "er verlor",
      "lv": "jis pametė"
    },
    "imperfektKonjunktiv": {
      "de": "er verlöre",
      "lv": "jis pamestų"
    },
    "partizipVergangenheit": {
      "de": "verloren",
      "lv": "pamestas"
    }
  },
  {
    "infinitiv": {
      "de": "wachsen",
      "lv": "augti"
    },
    "praesens": {
      "de": "er wächst",
      "lv": "jis auga"
    },
    "imperfektIndikativ": {
      "de": "er wuchs",
      "lv": "jis augo"
    },
    "imperfektKonjunktiv": {
      "de": "er wüchse",
      "lv": "jis augtų"
    },
    "partizipVergangenheit": {
      "de": "gewachsen (er ist)",
      "lv": "užaugęs"
    }
  },
  {
    "infinitiv": {
      "de": "waschen",
      "lv": "plauti"
    },
    "praesens": {
      "de": "er wäscht",
      "lv": "jis plauna"
    },
    "imperfektIndikativ": {
      "de": "er wusch",
      "lv": "jis plovė"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsche",
      "lv": "jis plautų"
    },
    "partizipVergangenheit": {
      "de": "gewaschen",
      "lv": "plautas"
    }
  },
  {
    "infinitiv": {
      "de": "weben",
      "lv": "austi"
    },
    "praesens": {
      "de": "er webt",
      "lv": "jis audžia"
    },
    "imperfektIndikativ": {
      "de": "wob",
      "lv": "audė"
    },
    "imperfektKonjunktiv": {
      "de": "wob",
      "lv": "audė"
    },
    "partizipVergangenheit": {
      "de": "gewoben",
      "lv": "išaustas"
    }
  },
  {
    "infinitiv": {
      "de": "weichen",
      "lv": "atsitraukti"
    },
    "praesens": {
      "de": "er weicht",
      "lv": "jis atsitraukia"
    },
    "imperfektIndikativ": {
      "de": "er wich",
      "lv": "jis atsitraukė"
    },
    "imperfektKonjunktiv": {
      "de": "er wiche",
      "lv": "jis atsitrauktų"
    },
    "partizipVergangenheit": {
      "de": "gewichen (er ist)",
      "lv": "atsitraukęs"
    }
  },
  {
    "infinitiv": {
      "de": "weisen",
      "lv": "rodyti"
    },
    "praesens": {
      "de": "er weist",
      "lv": "jis rodo"
    },
    "imperfektIndikativ": {
      "de": "er wies",
      "lv": "jis rodė"
    },
    "imperfektKonjunktiv": {
      "de": "er wiese",
      "lv": "jis rodytų"
    },
    "partizipVergangenheit": {
      "de": "gewiesen",
      "lv": "rodytas"
    }
  },
  {
    "infinitiv": {
      "de": "wenden",
      "lv": "sukti / apversti"
    },
    "praesens": {
      "de": "er wendet",
      "lv": "jis sukioja / apverčia"
    },
    "imperfektIndikativ": {
      "de": "er wandte / es wendete",
      "lv": "jis sukiojo / apvertė"
    },
    "imperfektKonjunktiv": {
      "de": "er wendete",
      "lv": "jis sukiotų / apverstų"
    },
    "partizipVergangenheit": {
      "de": "gewandt / gewendet",
      "lv": "sukiotas / apverstas"
    }
  },
  {
    "infinitiv": {
      "de": "werben",
      "lv": "piršti"
    },
    "praesens": {
      "de": "er wirbt",
      "lv": "jis perša"
    },
    "imperfektIndikativ": {
      "de": "er warb",
      "lv": "jis piršo"
    },
    "imperfektKonjunktiv": {
      "de": "er würbe",
      "lv": "jis pirštų"
    },
    "partizipVergangenheit": {
      "de": "geworben",
      "lv": "pirštas"
    }
  },
  {
    "infinitiv": {
      "de": "werden",
      "lv": "tapti"
    },
    "praesens": {
      "de": "er wird",
      "lv": "jis tampa"
    },
    "imperfektIndikativ": {
      "de": "wurde",
      "lv": "tapo"
    },
    "imperfektKonjunktiv": {
      "de": "wurde",
      "lv": "tapo"
    },
    "partizipVergangenheit": {
      "de": "geworden",
      "lv": "tapęs"
    }
  },
  {
    "infinitiv": {
      "de": "werfen",
      "lv": "mesti"
    },
    "praesens": {
      "de": "er wirft",
      "lv": "jis meta"
    },
    "imperfektIndikativ": {
      "de": "er warf",
      "lv": "jis metė"
    },
    "imperfektKonjunktiv": {
      "de": "er würfe",
      "lv": "jis mestų"
    },
    "partizipVergangenheit": {
      "de": "geworfen",
      "lv": "mestas"
    }
  },
  {
    "infinitiv": {
      "de": "wiegen",
      "lv": "sverti"
    },
    "praesens": {
      "de": "er wiegt",
      "lv": "jis sveria"
    },
    "imperfektIndikativ": {
      "de": "er wog",
      "lv": "jis svėrė"
    },
    "imperfektKonjunktiv": {
      "de": "er wöge",
      "lv": "jis svertų"
    },
    "partizipVergangenheit": {
      "de": "gewogen",
      "lv": "svertas"
    }
  },
  {
    "infinitiv": {
      "de": "winden",
      "lv": "pinti"
    },
    "praesens": {
      "de": "er windet",
      "lv": "jis pina"
    },
    "imperfektIndikativ": {
      "de": "er wand",
      "lv": "jis pynė"
    },
    "imperfektKonjunktiv": {
      "de": "er wände",
      "lv": "jis pintų"
    },
    "partizipVergangenheit": {
      "de": "gewunden",
      "lv": "pintas"
    }
  },
  {
    "infinitiv": {
      "de": "wissen",
      "lv": "žinoti"
    },
    "praesens": {
      "de": "er weiß",
      "lv": "jis žino"
    },
    "imperfektIndikativ": {
      "de": "er wusste",
      "lv": "jis žinojo"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsste",
      "lv": "jis žinotų"
    },
    "partizipVergangenheit": {
      "de": "gewusst",
      "lv": "žinomas"
    }
  },
  {
    "infinitiv": {
      "de": "wollen",
      "lv": "norėti"
    },
    "praesens": {
      "de": "er will",
      "lv": "jis nori"
    },
    "imperfektIndikativ": {
      "de": "wollte",
      "lv": "norėjo"
    },
    "imperfektKonjunktiv": {
      "de": "wollte",
      "lv": "norėjo"
    },
    "partizipVergangenheit": {
      "de": "gewollt",
      "lv": "norėjęs"
    }
  },
  {
    "infinitiv": {
      "de": "wringen",
      "lv": "išgręžti / išspausti"
    },
    "praesens": {
      "de": "er wringt",
      "lv": "jis išgręžia"
    },
    "imperfektIndikativ": {
      "de": "wrang",
      "lv": "išgręžė"
    },
    "imperfektKonjunktiv": {
      "de": "wrang",
      "lv": "išgręžė"
    },
    "partizipVergangenheit": {
      "de": "gewrungen",
      "lv": "išgręžtas"
    }
  },
  {
    "infinitiv": {
      "de": "zeihen",
      "lv": "kaltinti"
    },
    "praesens": {
      "de": "er zeiht",
      "lv": "jis kaltina"
    },
    "imperfektIndikativ": {
      "de": "zieh",
      "lv": "kaltino"
    },
    "imperfektKonjunktiv": {
      "de": "zieh",
      "lv": "kaltino"
    },
    "partizipVergangenheit": {
      "de": "geziehen",
      "lv": "kaltinęs"
    }
  },
  {
    "infinitiv": {
      "de": "ziehen",
      "lv": "traukti"
    },
    "praesens": {
      "de": "er zieht",
      "lv": "jis velka"
    },
    "imperfektIndikativ": {
      "de": "er zog",
      "lv": "jis vilko"
    },
    "imperfektKonjunktiv": {
      "de": "er zöge",
      "lv": "jis vilktų"
    },
    "partizipVergangenheit": {
      "de": "gezogen",
      "lv": "vilktas"
    }
  },
  {
    "infinitiv": {
      "de": "zwingen",
      "lv": "priversti"
    },
    "praesens": {
      "de": "er zwingt",
      "lv": "jis priverčia"
    },
    "imperfektIndikativ": {
      "de": "er zwang",
      "lv": "jis privertė"
    },
    "imperfektKonjunktiv": {
      "de": "er zwänge",
      "lv": "jis priverstų"
    },
    "partizipVergangenheit": {
      "de": "gezwungen",
      "lv": "priverstas"
    }
  },
  {
    "infinitiv": {
      "de": "empfangen",
      "lv": "gauti"
    },
    "praesens": {
      "de": "er empfängt",
      "lv": "jis gauna"
    },
    "imperfektIndikativ": {
      "de": "er empfing",
      "lv": "jis gavo"
    },
    "imperfektKonjunktiv": {
      "de": "er empfinge",
      "lv": "jis gautų"
    },
    "partizipVergangenheit": {
      "de": "empfangen",
      "lv": "gautas"
    }
  },
  {
    "infinitiv": {
      "de": "erwägen",
      "lv": "apsvarstyti"
    },
    "praesens": {
      "de": "er erwägt",
      "lv": "jis apsvarsto"
    },
    "imperfektIndikativ": {
      "de": "er erwog",
      "lv": "jis apsvarstė"
    },
    "imperfektKonjunktiv": {
      "de": "er erwöge",
      "lv": "jis apsvarstytų"
    },
    "partizipVergangenheit": {
      "de": "erwogen",
      "lv": "apsvarstytas"
    }
  },
  {
    "infinitiv": {
      "de": "fechten",
      "lv": "kovoti"
    },
    "praesens": {
      "de": "er ficht",
      "lv": "jis kovoja"
    },
    "imperfektIndikativ": {
      "de": "er focht",
      "lv": "jis kovojo"
    },
    "imperfektKonjunktiv": {
      "de": "er föchte",
      "lv": "jis kovotų"
    },
    "partizipVergangenheit": {
      "de": "gefochten",
      "lv": "kovojęs"
    }
  },
  {
    "infinitiv": {
      "de": "flechten",
      "lv": "pinti"
    },
    "praesens": {
      "de": "er flicht",
      "lv": "jis pina"
    },
    "imperfektIndikativ": {
      "de": "er flocht",
      "lv": "jis pynė"
    },
    "imperfektKonjunktiv": {
      "de": "er flöchte",
      "lv": "jis pintų"
    },
    "partizipVergangenheit": {
      "de": "geflochten",
      "lv": "pintas"
    }
  },
  {
    "infinitiv": {
      "de": "hangen",
      "lv": "kabėti"
    },
    "praesens": {
      "de": "er hängt",
      "lv": "jis kabo"
    },
    "imperfektIndikativ": {
      "de": "er hing",
      "lv": "jis kabojo"
    },
    "imperfektKonjunktiv": {
      "de": "er hinge",
      "lv": "jis kabotų"
    },
    "partizipVergangenheit": {
      "de": "gehangen",
      "lv": "kabojęs"
    }
  },
  {
    "infinitiv": {
      "de": "spalten",
      "lv": "skaldyti"
    },
    "praesens": {
      "de": "er spaltet",
      "lv": "jis skaldo"
    },
    "imperfektIndikativ": {
      "de": "er spaltete",
      "lv": "jis skaldė"
    },
    "imperfektKonjunktiv": {
      "de": "er spaltete",
      "lv": "jis skaldytų"
    },
    "partizipVergangenheit": {
      "de": "gespalten",
      "lv": "skaldytas"
    }
  },
  {
    "infinitiv": {
      "de": "verzeihen",
      "lv": "atleisti"
    },
    "praesens": {
      "de": "er verzeiht",
      "lv": "jis atleidžia"
    },
    "imperfektIndikativ": {
      "de": "er verzieh",
      "lv": "jis atleido"
    },
    "imperfektKonjunktiv": {
      "de": "er verziehe",
      "lv": "jis atleistų"
    },
    "partizipVergangenheit": {
      "de": "verziehen",
      "lv": "atleistas"
    }
  }
];

window.VERB_ENTRIES = VERB_ENTRIES;

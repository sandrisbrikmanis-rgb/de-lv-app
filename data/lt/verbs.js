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
      "lv": "keptas"
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
      "lv": "kąstas"
    }
  },
  {
    "infinitiv": {
      "de": "bergen",
      "lv": "gelbėti / slėpti"
    },
    "praesens": {
      "de": "er birgt",
      "lv": "jis gelbėja / slepia"
    },
    "imperfektIndikativ": {
      "de": "er barg",
      "lv": "jis gelbėjo / slėpė"
    },
    "imperfektKonjunktiv": {
      "de": "er bürge / er bärge",
      "lv": "jis gelbėtų / slėptų"
    },
    "partizipVergangenheit": {
      "de": "geborgen",
      "lv": "gelbėtas / slėptas"
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
      "lv": "plyšęs"
    }
  },
  {
    "infinitiv": {
      "de": "bewegen",
      "lv": "paskatinti"
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
      "lv": "siūlyti"
    },
    "praesens": {
      "de": "er bietet",
      "lv": "jis siūlo"
    },
    "imperfektIndikativ": {
      "de": "er bot",
      "lv": "jis siūlė"
    },
    "imperfektKonjunktiv": {
      "de": "er böte",
      "lv": "jis siūlytų"
    },
    "partizipVergangenheit": {
      "de": "geboten",
      "lv": "siūlytas"
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
      "lv": "rištas"
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
      "lv": "gimdytas"
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
      "lv": "tikti / galioti"
    },
    "praesens": {
      "de": "er gilt",
      "lv": "jis tinka / galioja"
    },
    "imperfektIndikativ": {
      "de": "er galt",
      "lv": "jis tiko / galiojo"
    },
    "imperfektKonjunktiv": {
      "de": "er gölte / es gälte",
      "lv": "jis tiktų / galiotų"
    },
    "partizipVergangenheit": {
      "de": "gegolten",
      "lv": "tikęs / galiojęs"
    }
  },
  {
    "infinitiv": {
      "de": "genesen",
      "lv": "pasveikti"
    },
    "praesens": {
      "de": "er genest",
      "lv": "jis pasveiksta"
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
      "lv": "mėgavęsis"
    }
  },
  {
    "infinitiv": {
      "de": "geschehen",
      "lv": "vykti"
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
      "lv": "vykęs"
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
      "lv": "panėšėti"
    },
    "praesens": {
      "de": "er gleicht",
      "lv": "jis panėši"
    },
    "imperfektIndikativ": {
      "de": "er glich",
      "lv": "jis panėšėjo"
    },
    "imperfektKonjunktiv": {
      "de": "er gliche",
      "lv": "jis panėšėtų"
    },
    "partizipVergangenheit": {
      "de": "geglichen",
      "lv": "panėšėjęs"
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
      "lv": "rusenti"
    },
    "praesens": {
      "de": "er glimmt",
      "lv": "jis rusena"
    },
    "imperfektIndikativ": {
      "de": "er glimmte / glomm",
      "lv": "jis ruseno"
    },
    "imperfektKonjunktiv": {
      "de": "er glimmte",
      "lv": "jis rusentų"
    },
    "partizipVergangenheit": {
      "de": "geglimmt / geglommen",
      "lv": "rusenęs"
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
      "lv": "griebti"
    },
    "praesens": {
      "de": "er greift",
      "lv": "jis griebia"
    },
    "imperfektIndikativ": {
      "de": "er griff",
      "lv": "jis griebė"
    },
    "imperfektKonjunktiv": {
      "de": "er griffe",
      "lv": "jis griebtų"
    },
    "partizipVergangenheit": {
      "de": "gegriffen",
      "lv": "griebtas"
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
      "lv": "pažinti"
    },
    "praesens": {
      "de": "er kennt",
      "lv": "jis pažįsta"
    },
    "imperfektIndikativ": {
      "de": "kannte",
      "lv": "jis pažino"
    },
    "imperfektKonjunktiv": {
      "de": "kannte",
      "lv": "jis pažintų"
    },
    "partizipVergangenheit": {
      "de": "gekannt",
      "lv": "pažintas"
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
      "lv": "žnybti"
    },
    "praesens": {
      "de": "er kneift",
      "lv": "jis žnybia"
    },
    "imperfektIndikativ": {
      "de": "er kniff",
      "lv": "jis žnybė"
    },
    "imperfektKonjunktiv": {
      "de": "er kniffe",
      "lv": "jis žnybtų"
    },
    "partizipVergangenheit": {
      "de": "gekniffen",
      "lv": "žnybtas"
    }
  },
  {
    "infinitiv": {
      "de": "bleiben",
      "lv": "likti"
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
      "lv": "blukti"
    },
    "praesens": {
      "de": "er bleicht",
      "lv": "jis blunka"
    },
    "imperfektIndikativ": {
      "de": "blich",
      "lv": "jis bluko"
    },
    "imperfektKonjunktiv": {
      "de": "blich",
      "lv": "jis bluktų"
    },
    "partizipVergangenheit": {
      "de": "geblichen",
      "lv": "blukęs"
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
      "lv": "keptas"
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
      "lv": "laužtas"
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
      "lv": "jis degė"
    },
    "imperfektKonjunktiv": {
      "de": "brannte",
      "lv": "jis degtų"
    },
    "partizipVergangenheit": {
      "de": "gebrannt",
      "lv": "degęs"
    }
  },
  {
    "infinitiv": {
      "de": "bringen",
      "lv": "atnešti"
    },
    "praesens": {
      "de": "er bringt",
      "lv": "jis atneša"
    },
    "imperfektIndikativ": {
      "de": "er brachte",
      "lv": "jis atnešė"
    },
    "imperfektKonjunktiv": {
      "de": "er brächte",
      "lv": "jis atneštų"
    },
    "partizipVergangenheit": {
      "de": "gebracht",
      "lv": "atneštas"
    }
  },
  {
    "infinitiv": {
      "de": "denken",
      "lv": "galvoti"
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
      "lv": "galvojęs"
    }
  },
  {
    "infinitiv": {
      "de": "dingen",
      "lv": "samdyti / susitarti"
    },
    "praesens": {
      "de": "er dingt",
      "lv": "jis samdo / susitaria"
    },
    "imperfektIndikativ": {
      "de": "dingte",
      "lv": "jis samdė / susitarė"
    },
    "imperfektKonjunktiv": {
      "de": "dingte",
      "lv": "jis samdytų / susitartų"
    },
    "partizipVergangenheit": {
      "de": "gedungen",
      "lv": "samdytas / susitaręs"
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
      "lv": "veržtis"
    },
    "praesens": {
      "de": "er dringt",
      "lv": "jis veržiasi"
    },
    "imperfektIndikativ": {
      "de": "er drang",
      "lv": "jis veržėsi"
    },
    "imperfektKonjunktiv": {
      "de": "er dränge",
      "lv": "jis veržtųsi"
    },
    "partizipVergangenheit": {
      "de": "gedrungen (er ist)",
      "lv": "veržęsis"
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
      "lv": "tai atrodė"
    },
    "imperfektKonjunktiv": {
      "de": "deuchte",
      "lv": "tai atrodytų"
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
      "lv": "jis galėjo"
    },
    "imperfektKonjunktiv": {
      "de": "durfte",
      "lv": "jis galėtų"
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
      "lv": "jis rekomenduoja"
    },
    "imperfektIndikativ": {
      "de": "er empfahl",
      "lv": "jis rekomendavo"
    },
    "imperfektKonjunktiv": {
      "de": "er empfähle / er empföhle",
      "lv": "jis rekomenduotų"
    },
    "partizipVergangenheit": {
      "de": "empfohlen",
      "lv": "rekomenduotas"
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
      "lv": "jis išsigąsta"
    },
    "imperfektIndikativ": {
      "de": "er erschrak",
      "lv": "jis išsigando"
    },
    "imperfektKonjunktiv": {
      "de": "er erschräke",
      "lv": "jis išsigąstų"
    },
    "partizipVergangenheit": {
      "de": "erschrocken (er ist)",
      "lv": "išsigandęs"
    }
  },
  {
    "infinitiv": {
      "de": "essen",
      "lv": "valgyti"
    },
    "praesens": {
      "de": "er isst",
      "lv": "jis valgo"
    },
    "imperfektIndikativ": {
      "de": "er ass",
      "lv": "jis valgė"
    },
    "imperfektKonjunktiv": {
      "de": "er äße",
      "lv": "jis valgytų"
    },
    "partizipVergangenheit": {
      "de": "gegessen",
      "lv": "valgytas"
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
      "lv": "važiavęs"
    }
  },
  {
    "infinitiv": {
      "de": "fallen",
      "lv": "kristi"
    },
    "praesens": {
      "de": "er fällt",
      "lv": "jis krinta"
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
      "lv": "gaudytas"
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
      "lv": "jis bėga"
    },
    "imperfektIndikativ": {
      "de": "er floh",
      "lv": "jis bėgo"
    },
    "imperfektKonjunktiv": {
      "de": "er flöhe",
      "lv": "jis bėgtų"
    },
    "partizipVergangenheit": {
      "de": "geflohen (er ist)",
      "lv": "bėgęs"
    }
  },
  {
    "infinitiv": {
      "de": "fließen",
      "lv": "tekėti"
    },
    "praesens": {
      "de": "er fließt",
      "lv": "jis teka"
    },
    "imperfektIndikativ": {
      "de": "er floss",
      "lv": "jis tekėjo"
    },
    "imperfektKonjunktiv": {
      "de": "er flösse",
      "lv": "jis tekėtų"
    },
    "partizipVergangenheit": {
      "de": "geflossen (er ist)",
      "lv": "tekėjęs"
    }
  },
  {
    "infinitiv": {
      "de": "fressen",
      "lv": "ėsti / ryti"
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
      "lv": "ėstas / rytas"
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
      "lv": "klestėti"
    },
    "praesens": {
      "de": "er gedeiht",
      "lv": "jis klesti"
    },
    "imperfektIndikativ": {
      "de": "er gedieh",
      "lv": "jis klestėjo"
    },
    "imperfektKonjunktiv": {
      "de": "er gediehe",
      "lv": "jis klestėtų"
    },
    "partizipVergangenheit": {
      "de": "gediehen (er ist)",
      "lv": "klestėjęs"
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
      "lv": "laimėti"
    },
    "praesens": {
      "de": "er gewinnt",
      "lv": "jis laimi"
    },
    "imperfektIndikativ": {
      "de": "er gewann",
      "lv": "jis laimėjo"
    },
    "imperfektKonjunktiv": {
      "de": "er gewönne / er gewänne",
      "lv": "jis laimėtų"
    },
    "partizipVergangenheit": {
      "de": "gewonnen",
      "lv": "laimėtas"
    }
  },
  {
    "infinitiv": {
      "de": "haben",
      "lv": "turėti"
    },
    "praesens": {
      "de": "er hat",
      "lv": "jis turi"
    },
    "imperfektIndikativ": {
      "de": "hatte",
      "lv": "jis turėjo"
    },
    "imperfektKonjunktiv": {
      "de": "hatte",
      "lv": "jis turėtų"
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
      "lv": "vadinti / vadintis"
    },
    "praesens": {
      "de": "er heißt",
      "lv": "jis vadina / vadinasi"
    },
    "imperfektIndikativ": {
      "de": "er hieß",
      "lv": "jis vadino / vadinosi"
    },
    "imperfektKonjunktiv": {
      "de": "er hieße",
      "lv": "jis vadintų / vadintųsi"
    },
    "partizipVergangenheit": {
      "de": "geheißen",
      "lv": "vadintas / vadinęsis"
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
      "lv": "padėjęs"
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
      "lv": "jis galėjo"
    },
    "imperfektKonjunktiv": {
      "de": "konnte",
      "lv": "jis galėtų"
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
      "lv": "krauti / kviesti"
    },
    "praesens": {
      "de": "er lädt",
      "lv": "jis krauna / kviečia"
    },
    "imperfektIndikativ": {
      "de": "er lud",
      "lv": "jis krovė / kvietė"
    },
    "imperfektKonjunktiv": {
      "de": "er lüde",
      "lv": "jis krautų / kviestų"
    },
    "partizipVergangenheit": {
      "de": "geladen",
      "lv": "krautas / kviestas"
    }
  },
  {
    "infinitiv": {
      "de": "lassen",
      "lv": "liepti / leisti"
    },
    "praesens": {
      "de": "er lässt",
      "lv": "jis liepia / leidžia"
    },
    "imperfektIndikativ": {
      "de": "er ließ",
      "lv": "jis liepė / leido"
    },
    "imperfektKonjunktiv": {
      "de": "er ließe",
      "lv": "jis lieptų / leistų"
    },
    "partizipVergangenheit": {
      "de": "gelassen",
      "lv": "lieptas / leistas"
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
      "lv": "kentėjęs"
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
      "lv": "jis skolino / skolinosi"
    },
    "imperfektKonjunktiv": {
      "de": "er liehe",
      "lv": "jis skolintų / skolintųsi"
    },
    "partizipVergangenheit": {
      "de": "geliehen",
      "lv": "skolintas / skolinęsis"
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
      "lv": "gulėti"
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
      "lv": "gulėjęs"
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
      "lv": "melavęs"
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
      "lv": "jis vengė"
    },
    "imperfektKonjunktiv": {
      "de": "er miede",
      "lv": "jis vengtų"
    },
    "partizipVergangenheit": {
      "de": "gemieden",
      "lv": "vengtas"
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
      "lv": "tai nepavyko"
    },
    "imperfektKonjunktiv": {
      "de": "misslang",
      "lv": "tai nepavyktų"
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
      "lv": "jam patiko"
    },
    "imperfektKonjunktiv": {
      "de": "mochte",
      "lv": "jam patiktų"
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
      "lv": "jam reikėjo"
    },
    "imperfektKonjunktiv": {
      "de": "musste",
      "lv": "jam reikėtų"
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
      "lv": "švilpęs"
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
      "de": "pflegte / pflog",
      "lv": "jis prižiūrėjo"
    },
    "imperfektKonjunktiv": {
      "de": "pflegte / pflog",
      "lv": "jis prižiūrėtų"
    },
    "partizipVergangenheit": {
      "de": "gepflegt / gepflogen",
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
      "lv": "girtas"
    }
  },
  {
    "infinitiv": {
      "de": "quellen",
      "lv": "brinkti"
    },
    "praesens": {
      "de": "er quillt",
      "lv": "jis brinksta"
    },
    "imperfektIndikativ": {
      "de": "er quoll",
      "lv": "jis brinko"
    },
    "imperfektKonjunktiv": {
      "de": "er quölle",
      "lv": "jis brinktų"
    },
    "partizipVergangenheit": {
      "de": "gequollen (er ist)",
      "lv": "brinkęs"
    }
  },
  {
    "infinitiv": {
      "de": "raten",
      "lv": "patarti / spėti"
    },
    "praesens": {
      "de": "er rät",
      "lv": "jis pataria / spėja"
    },
    "imperfektIndikativ": {
      "de": "er riet",
      "lv": "jis patarė / spėjo"
    },
    "imperfektKonjunktiv": {
      "de": "er riete",
      "lv": "jis patartų / spėtų"
    },
    "partizipVergangenheit": {
      "de": "geraten",
      "lv": "patartas / spėtas"
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
      "lv": "plėšti"
    },
    "praesens": {
      "de": "er reißt",
      "lv": "jis plėšia"
    },
    "imperfektIndikativ": {
      "de": "er riss",
      "lv": "jis plėšė"
    },
    "imperfektKonjunktiv": {
      "de": "er risse",
      "lv": "jis plėštų"
    },
    "partizipVergangenheit": {
      "de": "gerissen",
      "lv": "plėštas"
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
      "lv": "grumtis"
    },
    "praesens": {
      "de": "er ringt",
      "lv": "jis grumiasi"
    },
    "imperfektIndikativ": {
      "de": "er rang",
      "lv": "jis grūmėsi"
    },
    "imperfektKonjunktiv": {
      "de": "er ränge",
      "lv": "jis grumtųsi"
    },
    "partizipVergangenheit": {
      "de": "gerungen",
      "lv": "grūmęsis"
    }
  },
  {
    "infinitiv": {
      "de": "rinnen",
      "lv": "tekėti"
    },
    "praesens": {
      "de": "er rinnt",
      "lv": "jis teka"
    },
    "imperfektIndikativ": {
      "de": "er rann",
      "lv": "jis tekėjo"
    },
    "imperfektKonjunktiv": {
      "de": "er ränne / er rönne",
      "lv": "jis tekėtų"
    },
    "partizipVergangenheit": {
      "de": "geronnen (er ist)",
      "lv": "tekėjęs"
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
      "lv": "girtuokliavęs / gertas"
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
      "lv": "kurtas"
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
      "de": "schallte / scholl",
      "lv": "tai skambėjo"
    },
    "imperfektKonjunktiv": {
      "de": "schallte / scholl",
      "lv": "tai skambėtų"
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
      "lv": "skirtas / skyręsis"
    }
  },
  {
    "infinitiv": {
      "de": "scheinen",
      "lv": "šviesti / atrodyti"
    },
    "praesens": {
      "de": "er scheint",
      "lv": "jis šviečia / atrodo"
    },
    "imperfektIndikativ": {
      "de": "er schien",
      "lv": "jis švietė / atrodė"
    },
    "imperfektKonjunktiv": {
      "de": "er schiene",
      "lv": "jis šviestų / atrodytų"
    },
    "partizipVergangenheit": {
      "de": "geschienen",
      "lv": "švietęs / atrodęs"
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
      "de": "schor / scherte",
      "lv": "jis kirpo"
    },
    "imperfektKonjunktiv": {
      "de": "schor / scherte",
      "lv": "jis kirptų"
    },
    "partizipVergangenheit": {
      "de": "geschoren / geschert",
      "lv": "kirptas"
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
      "lv": "jis kankino"
    },
    "imperfektKonjunktiv": {
      "de": "schindete",
      "lv": "jis kankintų"
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
      "lv": "jis miega"
    },
    "imperfektIndikativ": {
      "de": "er schlief",
      "lv": "jis miegojo"
    },
    "imperfektKonjunktiv": {
      "de": "er schliefe",
      "lv": "jis miegotų"
    },
    "partizipVergangenheit": {
      "de": "geschlafen",
      "lv": "miegojęs"
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
      "lv": "sėlinti"
    },
    "praesens": {
      "de": "er schleicht",
      "lv": "jis sėlina"
    },
    "imperfektIndikativ": {
      "de": "er schlich",
      "lv": "jis sėlino"
    },
    "imperfektKonjunktiv": {
      "de": "er schliche",
      "lv": "jis sėlintų"
    },
    "partizipVergangenheit": {
      "de": "geschlichen (er ist)",
      "lv": "sėlinęs"
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
      "lv": "ryti"
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
      "lv": "prunkšti"
    },
    "praesens": {
      "de": "er schnaubt",
      "lv": "jis prunkščia"
    },
    "imperfektIndikativ": {
      "de": "schnaubte / schnob",
      "lv": "jis prunkštė"
    },
    "imperfektKonjunktiv": {
      "de": "schnaubte / schnob",
      "lv": "jis prunkštų"
    },
    "partizipVergangenheit": {
      "de": "geschnaubt / geschnoben",
      "lv": "prunkštęs"
    }
  },
  {
    "infinitiv": {
      "de": "schneiden",
      "lv": "pjauti"
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
      "lv": "rėkęs"
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
      "lv": "tylėjęs"
    }
  },
  {
    "infinitiv": {
      "de": "schwellen",
      "lv": "tinti"
    },
    "praesens": {
      "de": "er schwillt",
      "lv": "jis tinsta"
    },
    "imperfektIndikativ": {
      "de": "er schwoll",
      "lv": "jis tino"
    },
    "imperfektKonjunktiv": {
      "de": "er schwölle",
      "lv": "jis tintų"
    },
    "partizipVergangenheit": {
      "de": "geschwollen (er ist)",
      "lv": "tinęs"
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
      "lv": "nykti"
    },
    "praesens": {
      "de": "er schwindet",
      "lv": "jis nyksta"
    },
    "imperfektIndikativ": {
      "de": "er schwand",
      "lv": "jis nyko"
    },
    "imperfektKonjunktiv": {
      "de": "er schwände",
      "lv": "jis nyktų"
    },
    "partizipVergangenheit": {
      "de": "geschwunden (er ist)",
      "lv": "nykęs"
    }
  },
  {
    "infinitiv": {
      "de": "schwingen",
      "lv": "mojuoti"
    },
    "praesens": {
      "de": "er schwingt",
      "lv": "jis mojuoja"
    },
    "imperfektIndikativ": {
      "de": "er schwang",
      "lv": "jis mojavo"
    },
    "imperfektKonjunktiv": {
      "de": "er schwänge",
      "lv": "jis mojuotų"
    },
    "partizipVergangenheit": {
      "de": "geschwungen",
      "lv": "mojuotas"
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
      "lv": "prisiektas"
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
      "lv": "jis buvo"
    },
    "imperfektKonjunktiv": {
      "de": "war",
      "lv": "jis būtų"
    },
    "partizipVergangenheit": {
      "de": "gewesen",
      "lv": "buvęs"
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
      "de": "sott / siedete",
      "lv": "jis virė"
    },
    "imperfektKonjunktiv": {
      "de": "sott / siedete",
      "lv": "jis virtų"
    },
    "partizipVergangenheit": {
      "de": "gesotten / gesiedet",
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
      "lv": "grimzti"
    },
    "praesens": {
      "de": "er sinkt",
      "lv": "jis grimzta"
    },
    "imperfektIndikativ": {
      "de": "er sank",
      "lv": "jis grimzdo"
    },
    "imperfektKonjunktiv": {
      "de": "er sänke",
      "lv": "jis grimztų"
    },
    "partizipVergangenheit": {
      "de": "gesunken (er ist)",
      "lv": "grimzdęs"
    }
  },
  {
    "infinitiv": {
      "de": "sinnen",
      "lv": "mąstyti"
    },
    "praesens": {
      "de": "er sinnt",
      "lv": "jis mąsto"
    },
    "imperfektIndikativ": {
      "de": "er sann",
      "lv": "jis mąstė"
    },
    "imperfektKonjunktiv": {
      "de": "er sönne / er sänne",
      "lv": "jis mąstytų"
    },
    "partizipVergangenheit": {
      "de": "gesonnen",
      "lv": "mąstęs"
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
      "lv": "sėdėjęs"
    }
  },
  {
    "infinitiv": {
      "de": "sollen",
      "lv": "privalėti"
    },
    "praesens": {
      "de": "er soll",
      "lv": "jis privalo"
    },
    "imperfektIndikativ": {
      "de": "sollte",
      "lv": "jis privalėjo"
    },
    "imperfektKonjunktiv": {
      "de": "sollte",
      "lv": "jis privalėtų"
    },
    "partizipVergangenheit": {
      "de": "gesollt",
      "lv": "privalėjęs"
    }
  },
  {
    "infinitiv": {
      "de": "speien",
      "lv": "spjauti"
    },
    "praesens": {
      "de": "er speit",
      "lv": "jis spjauna"
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
      "lv": "jungti"
    },
    "praesens": {
      "de": "er spleißt",
      "lv": "jis jungia"
    },
    "imperfektIndikativ": {
      "de": "spliss",
      "lv": "jis jungė"
    },
    "imperfektKonjunktiv": {
      "de": "spliss",
      "lv": "jis jungtų"
    },
    "partizipVergangenheit": {
      "de": "gesplissen",
      "lv": "jungtas"
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
      "lv": "kalbėtas"
    }
  },
  {
    "infinitiv": {
      "de": "sprießen",
      "lv": "dygti"
    },
    "praesens": {
      "de": "er sprießt",
      "lv": "jis dygsta"
    },
    "imperfektIndikativ": {
      "de": "er spross",
      "lv": "jis dygo"
    },
    "imperfektKonjunktiv": {
      "de": "er sprösse",
      "lv": "jis dygtų"
    },
    "partizipVergangenheit": {
      "de": "gesprossen (er ist)",
      "lv": "dygęs"
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
      "lv": "jis dūrė"
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
      "lv": "kišti / smeigti"
    },
    "praesens": {
      "de": "er steckt",
      "lv": "jis kiša / smeigia"
    },
    "imperfektIndikativ": {
      "de": "stak / steckte",
      "lv": "jis kišo / smeigė"
    },
    "imperfektKonjunktiv": {
      "de": "stak / steckte",
      "lv": "jis kištų / smeigtų"
    },
    "partizipVergangenheit": {
      "de": "gesteckt",
      "lv": "kištas / smeigtas"
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
      "lv": "stovėjęs"
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
      "lv": "jis lipa"
    },
    "imperfektIndikativ": {
      "de": "er stieg",
      "lv": "jis lipo"
    },
    "imperfektKonjunktiv": {
      "de": "er stiege",
      "lv": "jis liptų"
    },
    "partizipVergangenheit": {
      "de": "gestiegen (er ist)",
      "lv": "lipęs"
    }
  },
  {
    "infinitiv": {
      "de": "sterben",
      "lv": "mirti"
    },
    "praesens": {
      "de": "er stirbt",
      "lv": "jis miršta"
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
      "de": "stinken",
      "lv": "dvokti"
    },
    "praesens": {
      "de": "es stinkt",
      "lv": "tai dvokia"
    },
    "imperfektIndikativ": {
      "de": "stank",
      "lv": "tai dvokė"
    },
    "imperfektKonjunktiv": {
      "de": "stank",
      "lv": "tai dvoktų"
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
      "lv": "jis stumia"
    },
    "imperfektIndikativ": {
      "de": "er stieß",
      "lv": "jis stūmė"
    },
    "imperfektKonjunktiv": {
      "de": "er stieße",
      "lv": "jis stumtų"
    },
    "partizipVergangenheit": {
      "de": "gestoßen",
      "lv": "stumtas"
    }
  },
  {
    "infinitiv": {
      "de": "streichen",
      "lv": "dažyti / braukti"
    },
    "praesens": {
      "de": "er streicht",
      "lv": "jis dažo / braukia"
    },
    "imperfektIndikativ": {
      "de": "er strich",
      "lv": "jis dažė / braukė"
    },
    "imperfektKonjunktiv": {
      "de": "er striche",
      "lv": "jis dažytų / brauktų"
    },
    "partizipVergangenheit": {
      "de": "gestrichen",
      "lv": "dažytas / brauktas"
    }
  },
  {
    "infinitiv": {
      "de": "streiten",
      "lv": "ginčytis"
    },
    "praesens": {
      "de": "er streitet",
      "lv": "jis ginčijasi"
    },
    "imperfektIndikativ": {
      "de": "er stritt",
      "lv": "jis ginčijosi"
    },
    "imperfektKonjunktiv": {
      "de": "er stritte",
      "lv": "jis ginčytųsi"
    },
    "partizipVergangenheit": {
      "de": "gestritten",
      "lv": "ginčijęsis"
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
      "lv": "žengti / eiti"
    },
    "praesens": {
      "de": "er tritt",
      "lv": "jis žengia / eina"
    },
    "imperfektIndikativ": {
      "de": "er trat",
      "lv": "jis žengė / ėjo"
    },
    "imperfektKonjunktiv": {
      "de": "er träte",
      "lv": "jis žengtų / eitų"
    },
    "partizipVergangenheit": {
      "de": "getreten (er ist)",
      "lv": "žengęs / ėjęs"
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
      "lv": "apgaudinėti"
    },
    "praesens": {
      "de": "er trögt",
      "lv": "jis apgaudinėja"
    },
    "imperfektIndikativ": {
      "de": "er trog",
      "lv": "jis apgaudinėjo"
    },
    "imperfektKonjunktiv": {
      "de": "er tröge",
      "lv": "jis apgaudinėtų"
    },
    "partizipVergangenheit": {
      "de": "getrogen",
      "lv": "apgaudinėtas"
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
      "lv": "gadintas"
    }
  },
  {
    "infinitiv": {
      "de": "verdrießen",
      "lv": "erzinti"
    },
    "praesens": {
      "de": "er verdrießt",
      "lv": "jis erzina"
    },
    "imperfektIndikativ": {
      "de": "er verdross",
      "lv": "jis erzino"
    },
    "imperfektKonjunktiv": {
      "de": "er verdrösse",
      "lv": "jis erzintų"
    },
    "partizipVergangenheit": {
      "de": "verdrossen",
      "lv": "erzintas"
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
      "lv": "augęs"
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
      "lv": "jis audė"
    },
    "imperfektKonjunktiv": {
      "de": "wob",
      "lv": "jis austų"
    },
    "partizipVergangenheit": {
      "de": "gewoben",
      "lv": "austas"
    }
  },
  {
    "infinitiv": {
      "de": "weichen",
      "lv": "trauktis"
    },
    "praesens": {
      "de": "er weicht",
      "lv": "jis traukiasi"
    },
    "imperfektIndikativ": {
      "de": "er wich",
      "lv": "jis traukėsi"
    },
    "imperfektKonjunktiv": {
      "de": "er wiche",
      "lv": "jis trauktųsi"
    },
    "partizipVergangenheit": {
      "de": "gewichen (er ist)",
      "lv": "traukęsis"
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
      "lv": "sukioti / apversti"
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
      "lv": "pirštis"
    },
    "praesens": {
      "de": "er wirbt",
      "lv": "jis peršasi"
    },
    "imperfektIndikativ": {
      "de": "er warb",
      "lv": "jis piršosi"
    },
    "imperfektKonjunktiv": {
      "de": "er würbe",
      "lv": "jis pirštųsi"
    },
    "partizipVergangenheit": {
      "de": "geworben",
      "lv": "piršęsis"
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
      "lv": "jis tapo"
    },
    "imperfektKonjunktiv": {
      "de": "wurde",
      "lv": "jis taptų"
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
      "lv": "žinotas"
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
      "lv": "jis norėjo"
    },
    "imperfektKonjunktiv": {
      "de": "wollte",
      "lv": "jis norėtų"
    },
    "partizipVergangenheit": {
      "de": "gewollt",
      "lv": "norėjęs"
    }
  },
  {
    "infinitiv": {
      "de": "wringen",
      "lv": "gręžti / spausti"
    },
    "praesens": {
      "de": "er wringt",
      "lv": "jis gręžia / spaudžia"
    },
    "imperfektIndikativ": {
      "de": "wrang",
      "lv": "jis gręžė / spaudė"
    },
    "imperfektKonjunktiv": {
      "de": "wrang",
      "lv": "jis gręžtų / spaustų"
    },
    "partizipVergangenheit": {
      "de": "gewrungen",
      "lv": "gręžtas / spaustas"
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
      "lv": "jis kaltino"
    },
    "imperfektKonjunktiv": {
      "de": "zieh",
      "lv": "jis kaltintų"
    },
    "partizipVergangenheit": {
      "de": "geziehen",
      "lv": "kaltintas"
    }
  },
  {
    "infinitiv": {
      "de": "ziehen",
      "lv": "traukti"
    },
    "praesens": {
      "de": "er zieht",
      "lv": "jis traukia"
    },
    "imperfektIndikativ": {
      "de": "er zog",
      "lv": "jis traukė"
    },
    "imperfektKonjunktiv": {
      "de": "er zöge",
      "lv": "jis trauktų"
    },
    "partizipVergangenheit": {
      "de": "gezogen",
      "lv": "trauktas"
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
      "lv": "svarstyti"
    },
    "praesens": {
      "de": "er erwägt",
      "lv": "jis svarsto"
    },
    "imperfektIndikativ": {
      "de": "er erwog",
      "lv": "jis svarstė"
    },
    "imperfektKonjunktiv": {
      "de": "er erwöge",
      "lv": "jis svarstytų"
    },
    "partizipVergangenheit": {
      "de": "erwogen",
      "lv": "svarstytas"
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
      "lv": "jis kaba"
    },
    "imperfektIndikativ": {
      "de": "er hing",
      "lv": "jis kabėjo"
    },
    "imperfektKonjunktiv": {
      "de": "er hinge",
      "lv": "jis kabėtų"
    },
    "partizipVergangenheit": {
      "de": "gehangen",
      "lv": "kabėjęs"
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

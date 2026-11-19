const VERB_ENTRIES = [
  {
    "infinitiv": {
      "de": "backen",
      "lv": "печь • испечь"
    },
    "praesens": {
      "de": "er bäckt",
      "lv": "он печёт"
    },
    "imperfektIndikativ": {
      "de": "er buk",
      "lv": "он пёк"
    },
    "imperfektKonjunktiv": {
      "de": "er büke",
      "lv": "он бы пёк"
    },
    "partizipVergangenheit": {
      "de": "gebacken",
      "lv": "испечённый"
    }
  },
  {
    "infinitiv": {
      "de": "befehlen",
      "lv": "приказывать • приказать"
    },
    "praesens": {
      "de": "er befiehlt",
      "lv": "он приказывает"
    },
    "imperfektIndikativ": {
      "de": "er befahl",
      "lv": "он приказывал"
    },
    "imperfektKonjunktiv": {
      "de": "er beföhle",
      "lv": "он бы приказывал"
    },
    "partizipVergangenheit": {
      "de": "befohlen",
      "lv": "приказанный"
    }
  },
  {
    "infinitiv": {
      "de": "beginnen",
      "lv": "начинать • начать"
    },
    "praesens": {
      "de": "er beginnt",
      "lv": "он начинает"
    },
    "imperfektIndikativ": {
      "de": "er begann",
      "lv": "он начинал"
    },
    "imperfektKonjunktiv": {
      "de": "er begönne / er begänne",
      "lv": "он бы начинал"
    },
    "partizipVergangenheit": {
      "de": "begonnen",
      "lv": "начатый"
    }
  },
  {
    "infinitiv": {
      "de": "beißen",
      "lv": "кусать • укусить"
    },
    "praesens": {
      "de": "er beißt",
      "lv": "он кусает"
    },
    "imperfektIndikativ": {
      "de": "er biss",
      "lv": "он кусал"
    },
    "imperfektKonjunktiv": {
      "de": "er bisse",
      "lv": "он бы кусал"
    },
    "partizipVergangenheit": {
      "de": "gebissen",
      "lv": "укушенный"
    }
  },
  {
    "infinitiv": {
      "de": "bergen",
      "lv": "спасать • спасти / прятать • спрятать"
    },
    "praesens": {
      "de": "er birgt",
      "lv": "он спасает / прячет"
    },
    "imperfektIndikativ": {
      "de": "er barg",
      "lv": "он спасал / прятал"
    },
    "imperfektKonjunktiv": {
      "de": "er bürge / er bärge",
      "lv": "он бы спасал / прятал"
    },
    "partizipVergangenheit": {
      "de": "geborgen",
      "lv": "спасённый / спрятанный"
    }
  },
  {
    "infinitiv": {
      "de": "bersten",
      "lv": "лопаться • лопнуть"
    },
    "praesens": {
      "de": "er birst",
      "lv": "он лопается"
    },
    "imperfektIndikativ": {
      "de": "er barst / er borst",
      "lv": "он лопался"
    },
    "imperfektKonjunktiv": {
      "de": "er bärste / er börste",
      "lv": "он бы лопался"
    },
    "partizipVergangenheit": {
      "de": "geborsten (er ist)",
      "lv": "лопнувший"
    }
  },
  {
    "infinitiv": {
      "de": "bewegen",
      "lv": "побуждать • побудить"
    },
    "praesens": {
      "de": "er bewegt",
      "lv": "он побуждает"
    },
    "imperfektIndikativ": {
      "de": "er bewog",
      "lv": "он побуждал"
    },
    "imperfektKonjunktiv": {
      "de": "er bewöge",
      "lv": "он бы побуждал"
    },
    "partizipVergangenheit": {
      "de": "bewogen",
      "lv": "побуждённый"
    }
  },
  {
    "infinitiv": {
      "de": "biegen",
      "lv": "гнуть • согнуть"
    },
    "praesens": {
      "de": "er biegt",
      "lv": "он гнёт"
    },
    "imperfektIndikativ": {
      "de": "er bog",
      "lv": "он гнул"
    },
    "imperfektKonjunktiv": {
      "de": "er böge",
      "lv": "он бы гнул"
    },
    "partizipVergangenheit": {
      "de": "gebogen",
      "lv": "согнутый"
    }
  },
  {
    "infinitiv": {
      "de": "bieten",
      "lv": "предлагать • предложить"
    },
    "praesens": {
      "de": "er bietet",
      "lv": "он предлагает"
    },
    "imperfektIndikativ": {
      "de": "er bot",
      "lv": "он предлагал"
    },
    "imperfektKonjunktiv": {
      "de": "er böte",
      "lv": "он бы предлагал"
    },
    "partizipVergangenheit": {
      "de": "geboten",
      "lv": "предложенный"
    }
  },
  {
    "infinitiv": {
      "de": "binden",
      "lv": "связывать • связать"
    },
    "praesens": {
      "de": "er bindet",
      "lv": "он связывает"
    },
    "imperfektIndikativ": {
      "de": "er band",
      "lv": "он связывал"
    },
    "imperfektKonjunktiv": {
      "de": "er bände",
      "lv": "он бы связывал"
    },
    "partizipVergangenheit": {
      "de": "gebunden",
      "lv": "связанный"
    }
  },
  {
    "infinitiv": {
      "de": "bitten",
      "lv": "просить • попросить"
    },
    "praesens": {
      "de": "er bittet",
      "lv": "он просит"
    },
    "imperfektIndikativ": {
      "de": "er bat",
      "lv": "он просил"
    },
    "imperfektKonjunktiv": {
      "de": "er bäte",
      "lv": "он бы просил"
    },
    "partizipVergangenheit": {
      "de": "gebeten",
      "lv": "попрошенный"
    }
  },
  {
    "infinitiv": {
      "de": "blasen",
      "lv": "дуть"
    },
    "praesens": {
      "de": "er bläst",
      "lv": "он дует"
    },
    "imperfektIndikativ": {
      "de": "er blies",
      "lv": "он дул"
    },
    "imperfektKonjunktiv": {
      "de": "er bliese",
      "lv": "он бы дул"
    },
    "partizipVergangenheit": {
      "de": "geblasen",
      "lv": "дутый"
    }
  },
  {
    "infinitiv": {
      "de": "gären",
      "lv": "бродить"
    },
    "praesens": {
      "de": "es gärt",
      "lv": "оно бродит"
    },
    "imperfektIndikativ": {
      "de": "es gor / es gärte",
      "lv": "оно бродило"
    },
    "imperfektKonjunktiv": {
      "de": "es göre / es gärte",
      "lv": "оно бы бродило"
    },
    "partizipVergangenheit": {
      "de": "gegoren / gegärt",
      "lv": "бродивший"
    }
  },
  {
    "infinitiv": {
      "de": "gebären",
      "lv": "рожать • родить"
    },
    "praesens": {
      "de": "sie gebiert",
      "lv": "она рожает"
    },
    "imperfektIndikativ": {
      "de": "sie gebar",
      "lv": "она рожала"
    },
    "imperfektKonjunktiv": {
      "de": "sie gebäre",
      "lv": "она бы рожала"
    },
    "partizipVergangenheit": {
      "de": "geboren",
      "lv": "рождённый"
    }
  },
  {
    "infinitiv": {
      "de": "gelingen",
      "lv": "удаваться • удаться"
    },
    "praesens": {
      "de": "es gelingt",
      "lv": "оно удаётся"
    },
    "imperfektIndikativ": {
      "de": "es gelang",
      "lv": "оно удавалось"
    },
    "imperfektKonjunktiv": {
      "de": "es gelänge",
      "lv": "оно бы удавалось"
    },
    "partizipVergangenheit": {
      "de": "gelungen (es ist)",
      "lv": "удавшийся"
    }
  },
  {
    "infinitiv": {
      "de": "gelten",
      "lv": "годиться / иметь силу"
    },
    "praesens": {
      "de": "er gilt",
      "lv": "он годится / имеет силу"
    },
    "imperfektIndikativ": {
      "de": "er galt",
      "lv": "он годился / имел силу"
    },
    "imperfektKonjunktiv": {
      "de": "er gölte / es gälte",
      "lv": "он бы годился / имел силу"
    },
    "partizipVergangenheit": {
      "de": "gegolten",
      "lv": "годившийся / имевший силу"
    }
  },
  {
    "infinitiv": {
      "de": "genesen",
      "lv": "выздоравливать • выздороветь"
    },
    "praesens": {
      "de": "er genest",
      "lv": "он выздоравливает"
    },
    "imperfektIndikativ": {
      "de": "er genas",
      "lv": "он выздоравливал"
    },
    "imperfektKonjunktiv": {
      "de": "er genäse",
      "lv": "он бы выздоравливал"
    },
    "partizipVergangenheit": {
      "de": "genesen (er ist)",
      "lv": "выздоровевший"
    }
  },
  {
    "infinitiv": {
      "de": "genießen",
      "lv": "наслаждаться • насладиться"
    },
    "praesens": {
      "de": "er genießt",
      "lv": "он наслаждается"
    },
    "imperfektIndikativ": {
      "de": "er genoss",
      "lv": "он наслаждался"
    },
    "imperfektKonjunktiv": {
      "de": "er genösse",
      "lv": "он бы наслаждался"
    },
    "partizipVergangenheit": {
      "de": "genossen",
      "lv": "насладившийся"
    }
  },
  {
    "infinitiv": {
      "de": "geschehen",
      "lv": "происходить • произойти"
    },
    "praesens": {
      "de": "es geschieht",
      "lv": "оно происходит"
    },
    "imperfektIndikativ": {
      "de": "es geschah",
      "lv": "оно происходило"
    },
    "imperfektKonjunktiv": {
      "de": "es geschähe",
      "lv": "оно бы происходило"
    },
    "partizipVergangenheit": {
      "de": "geschehen (es ist)",
      "lv": "произошедший"
    }
  },
  {
    "infinitiv": {
      "de": "gießen",
      "lv": "лить"
    },
    "praesens": {
      "de": "er gießt",
      "lv": "он льёт"
    },
    "imperfektIndikativ": {
      "de": "er goss",
      "lv": "он лил"
    },
    "imperfektKonjunktiv": {
      "de": "er gösse",
      "lv": "он бы лил"
    },
    "partizipVergangenheit": {
      "de": "gegossen",
      "lv": "литый"
    }
  },
  {
    "infinitiv": {
      "de": "gleichen",
      "lv": "походить"
    },
    "praesens": {
      "de": "er gleicht",
      "lv": "он походит"
    },
    "imperfektIndikativ": {
      "de": "er glich",
      "lv": "он походил"
    },
    "imperfektKonjunktiv": {
      "de": "er gliche",
      "lv": "он бы походил"
    },
    "partizipVergangenheit": {
      "de": "geglichen",
      "lv": "походивший"
    }
  },
  {
    "infinitiv": {
      "de": "gleiten",
      "lv": "скользить"
    },
    "praesens": {
      "de": "er gleitet",
      "lv": "он скользит"
    },
    "imperfektIndikativ": {
      "de": "er glitt",
      "lv": "он скользил"
    },
    "imperfektKonjunktiv": {
      "de": "er glitte",
      "lv": "он бы скользил"
    },
    "partizipVergangenheit": {
      "de": "geglitten (er ist)",
      "lv": "скользивший"
    }
  },
  {
    "infinitiv": {
      "de": "glimmen",
      "lv": "тлеть"
    },
    "praesens": {
      "de": "er glimmt",
      "lv": "он тлеет"
    },
    "imperfektIndikativ": {
      "de": "er glimmte / glomm",
      "lv": "он тлел"
    },
    "imperfektKonjunktiv": {
      "de": "er glimmte",
      "lv": "он бы тлел"
    },
    "partizipVergangenheit": {
      "de": "geglimmt / geglommen",
      "lv": "тлевший"
    }
  },
  {
    "infinitiv": {
      "de": "graben",
      "lv": "копать • выкопать"
    },
    "praesens": {
      "de": "er gräbt",
      "lv": "он копает"
    },
    "imperfektIndikativ": {
      "de": "er grub",
      "lv": "он копал"
    },
    "imperfektKonjunktiv": {
      "de": "er grübe",
      "lv": "он бы копал"
    },
    "partizipVergangenheit": {
      "de": "gegraben",
      "lv": "выкопанный"
    }
  },
  {
    "infinitiv": {
      "de": "greifen",
      "lv": "хватать • схватить"
    },
    "praesens": {
      "de": "er greift",
      "lv": "он хватает"
    },
    "imperfektIndikativ": {
      "de": "er griff",
      "lv": "он хватал"
    },
    "imperfektKonjunktiv": {
      "de": "er griffe",
      "lv": "он бы хватал"
    },
    "partizipVergangenheit": {
      "de": "gegriffen",
      "lv": "схваченный"
    }
  },
  {
    "infinitiv": {
      "de": "hauen",
      "lv": "рубить • срубить"
    },
    "praesens": {
      "de": "er haut",
      "lv": "он рубит"
    },
    "imperfektIndikativ": {
      "de": "er hieb",
      "lv": "он рубил"
    },
    "imperfektKonjunktiv": {
      "de": "er hiebe",
      "lv": "он бы рубил"
    },
    "partizipVergangenheit": {
      "de": "gehauen",
      "lv": "срубленный"
    }
  },
  {
    "infinitiv": {
      "de": "heben",
      "lv": "поднимать • поднять"
    },
    "praesens": {
      "de": "er hebt",
      "lv": "он поднимает"
    },
    "imperfektIndikativ": {
      "de": "er hob",
      "lv": "он поднимал"
    },
    "imperfektKonjunktiv": {
      "de": "er höbe",
      "lv": "он бы поднимал"
    },
    "partizipVergangenheit": {
      "de": "gehoben",
      "lv": "поднятый"
    }
  },
  {
    "infinitiv": {
      "de": "kennen",
      "lv": "знать"
    },
    "praesens": {
      "de": "er kennt",
      "lv": "он знает"
    },
    "imperfektIndikativ": {
      "de": "kannte",
      "lv": "он знал"
    },
    "imperfektKonjunktiv": {
      "de": "kannte",
      "lv": "он бы знал"
    },
    "partizipVergangenheit": {
      "de": "gekannt",
      "lv": "знавший"
    }
  },
  {
    "infinitiv": {
      "de": "klingen",
      "lv": "звучать"
    },
    "praesens": {
      "de": "er klingt",
      "lv": "он звучит"
    },
    "imperfektIndikativ": {
      "de": "er klang",
      "lv": "он звучал"
    },
    "imperfektKonjunktiv": {
      "de": "er klänge",
      "lv": "он бы звучал"
    },
    "partizipVergangenheit": {
      "de": "geklungen",
      "lv": "звучавший"
    }
  },
  {
    "infinitiv": {
      "de": "kneifen",
      "lv": "щипать • ущипнуть"
    },
    "praesens": {
      "de": "er kneift",
      "lv": "он щиплет"
    },
    "imperfektIndikativ": {
      "de": "er kniff",
      "lv": "он щипал"
    },
    "imperfektKonjunktiv": {
      "de": "er kniffe",
      "lv": "он бы щипал"
    },
    "partizipVergangenheit": {
      "de": "gekniffen",
      "lv": "ущипнутый"
    }
  },
  {
    "infinitiv": {
      "de": "bleiben",
      "lv": "оставаться • остаться"
    },
    "praesens": {
      "de": "er bleibt",
      "lv": "он остаётся"
    },
    "imperfektIndikativ": {
      "de": "er blieb",
      "lv": "он оставался"
    },
    "imperfektKonjunktiv": {
      "de": "er bliebe",
      "lv": "он бы оставался"
    },
    "partizipVergangenheit": {
      "de": "geblieben (er ist)",
      "lv": "оставшийся"
    }
  },
  {
    "infinitiv": {
      "de": "bleichen",
      "lv": "выцветать • выцвести"
    },
    "praesens": {
      "de": "er bleicht",
      "lv": "он выцветает"
    },
    "imperfektIndikativ": {
      "de": "blich",
      "lv": "он выцветал"
    },
    "imperfektKonjunktiv": {
      "de": "blich",
      "lv": "он бы выцветал"
    },
    "partizipVergangenheit": {
      "de": "geblichen",
      "lv": "выцветший"
    }
  },
  {
    "infinitiv": {
      "de": "braten",
      "lv": "жарить • зажарить"
    },
    "praesens": {
      "de": "er brät",
      "lv": "он жарит"
    },
    "imperfektIndikativ": {
      "de": "er briet",
      "lv": "он жарил"
    },
    "imperfektKonjunktiv": {
      "de": "er briete",
      "lv": "он бы жарил"
    },
    "partizipVergangenheit": {
      "de": "gebraten",
      "lv": "зажаренный"
    }
  },
  {
    "infinitiv": {
      "de": "brechen",
      "lv": "ломать • сломать"
    },
    "praesens": {
      "de": "er bricht",
      "lv": "он ломает"
    },
    "imperfektIndikativ": {
      "de": "er brach",
      "lv": "он ломал"
    },
    "imperfektKonjunktiv": {
      "de": "er bräche",
      "lv": "он бы ломал"
    },
    "partizipVergangenheit": {
      "de": "gebrochen",
      "lv": "сломанный"
    }
  },
  {
    "infinitiv": {
      "de": "brennen",
      "lv": "гореть"
    },
    "praesens": {
      "de": "er brennt",
      "lv": "он горит"
    },
    "imperfektIndikativ": {
      "de": "brannte",
      "lv": "он горел"
    },
    "imperfektKonjunktiv": {
      "de": "brannte",
      "lv": "он бы горел"
    },
    "partizipVergangenheit": {
      "de": "gebrannt",
      "lv": "горевший"
    }
  },
  {
    "infinitiv": {
      "de": "bringen",
      "lv": "приносить • принести"
    },
    "praesens": {
      "de": "er bringt",
      "lv": "он приносит"
    },
    "imperfektIndikativ": {
      "de": "er brachte",
      "lv": "он приносил"
    },
    "imperfektKonjunktiv": {
      "de": "er brächte",
      "lv": "он бы приносил"
    },
    "partizipVergangenheit": {
      "de": "gebracht",
      "lv": "принесённый"
    }
  },
  {
    "infinitiv": {
      "de": "denken",
      "lv": "думать"
    },
    "praesens": {
      "de": "er denkt",
      "lv": "он думает"
    },
    "imperfektIndikativ": {
      "de": "er dachte",
      "lv": "он думал"
    },
    "imperfektKonjunktiv": {
      "de": "er dächte",
      "lv": "он бы думал"
    },
    "partizipVergangenheit": {
      "de": "gedacht",
      "lv": "думавший"
    }
  },
  {
    "infinitiv": {
      "de": "dingen",
      "lv": "нанимать • нанять / договариваться • договориться"
    },
    "praesens": {
      "de": "er dingt",
      "lv": "он нанимает / договаривается"
    },
    "imperfektIndikativ": {
      "de": "dingte",
      "lv": "он нанимал / договаривался"
    },
    "imperfektKonjunktiv": {
      "de": "dingte",
      "lv": "он бы нанимал / договаривался"
    },
    "partizipVergangenheit": {
      "de": "gedungen",
      "lv": "нанятый / договорившийся"
    }
  },
  {
    "infinitiv": {
      "de": "dreschen",
      "lv": "молотить • обмолотить"
    },
    "praesens": {
      "de": "er drischt",
      "lv": "он молотит"
    },
    "imperfektIndikativ": {
      "de": "er drasch / er drosch",
      "lv": "он молотил"
    },
    "imperfektKonjunktiv": {
      "de": "er dräsche / er drösche",
      "lv": "он бы молотил"
    },
    "partizipVergangenheit": {
      "de": "gedroschen",
      "lv": "обмолоченный"
    }
  },
  {
    "infinitiv": {
      "de": "dringen",
      "lv": "пробиваться • пробиться"
    },
    "praesens": {
      "de": "er dringt",
      "lv": "он пробивается"
    },
    "imperfektIndikativ": {
      "de": "er drang",
      "lv": "он пробивался"
    },
    "imperfektKonjunktiv": {
      "de": "er dränge",
      "lv": "он бы пробивался"
    },
    "partizipVergangenheit": {
      "de": "gedrungen (er ist)",
      "lv": "пробившийся"
    }
  },
  {
    "infinitiv": {
      "de": "dünken",
      "lv": "казаться • показаться"
    },
    "praesens": {
      "de": "es dünkt",
      "lv": "оно кажется"
    },
    "imperfektIndikativ": {
      "de": "deuchte",
      "lv": "оно казалось"
    },
    "imperfektKonjunktiv": {
      "de": "deuchte",
      "lv": "оно бы казалось"
    },
    "partizipVergangenheit": {
      "de": "gedünkt",
      "lv": "показавшийся"
    }
  },
  {
    "infinitiv": {
      "de": "dürfen",
      "lv": "иметь право"
    },
    "praesens": {
      "de": "er darf",
      "lv": "он имеет право"
    },
    "imperfektIndikativ": {
      "de": "durfte",
      "lv": "он имел право"
    },
    "imperfektKonjunktiv": {
      "de": "durfte",
      "lv": "он бы имел право"
    },
    "partizipVergangenheit": {
      "de": "gedurft",
      "lv": "имевший право"
    }
  },
  {
    "infinitiv": {
      "de": "empfehlen",
      "lv": "рекомендовать • порекомендовать"
    },
    "praesens": {
      "de": "er empfiehlt",
      "lv": "он рекомендует"
    },
    "imperfektIndikativ": {
      "de": "er empfahl",
      "lv": "он рекомендовал"
    },
    "imperfektKonjunktiv": {
      "de": "er empfähle / er empföhle",
      "lv": "он бы рекомендовал"
    },
    "partizipVergangenheit": {
      "de": "empfohlen",
      "lv": "рекомендованный"
    }
  },
  {
    "infinitiv": {
      "de": "empfinden",
      "lv": "чувствовать • почувствовать"
    },
    "praesens": {
      "de": "er empfindet",
      "lv": "он чувствует"
    },
    "imperfektIndikativ": {
      "de": "er empfand",
      "lv": "он чувствовал"
    },
    "imperfektKonjunktiv": {
      "de": "er empfände",
      "lv": "он бы чувствовал"
    },
    "partizipVergangenheit": {
      "de": "empfunden",
      "lv": "почувствованный"
    }
  },
  {
    "infinitiv": {
      "de": "erlöschen",
      "lv": "гаснуть • погаснуть"
    },
    "praesens": {
      "de": "er erlischt",
      "lv": "он гаснет"
    },
    "imperfektIndikativ": {
      "de": "er erlosch",
      "lv": "он гас"
    },
    "imperfektKonjunktiv": {
      "de": "er erlösche",
      "lv": "он бы гас"
    },
    "partizipVergangenheit": {
      "de": "erloschen (er ist)",
      "lv": "погасший"
    }
  },
  {
    "infinitiv": {
      "de": "erschrecken",
      "lv": "пугаться • испугаться"
    },
    "praesens": {
      "de": "er erschrickt",
      "lv": "он пугается"
    },
    "imperfektIndikativ": {
      "de": "er erschrak",
      "lv": "он пугался"
    },
    "imperfektKonjunktiv": {
      "de": "er erschräke",
      "lv": "он бы пугался"
    },
    "partizipVergangenheit": {
      "de": "erschrocken (er ist)",
      "lv": "испугавшийся"
    }
  },
  {
    "infinitiv": {
      "de": "essen",
      "lv": "есть • съесть"
    },
    "praesens": {
      "de": "er isst",
      "lv": "он ест"
    },
    "imperfektIndikativ": {
      "de": "er ass",
      "lv": "он ел"
    },
    "imperfektKonjunktiv": {
      "de": "er äße",
      "lv": "он бы ел"
    },
    "partizipVergangenheit": {
      "de": "gegessen",
      "lv": "съеденный"
    }
  },
  {
    "infinitiv": {
      "de": "fahren",
      "lv": "ехать"
    },
    "praesens": {
      "de": "er fährt",
      "lv": "он едет"
    },
    "imperfektIndikativ": {
      "de": "er fuhr",
      "lv": "он ехал"
    },
    "imperfektKonjunktiv": {
      "de": "er führe",
      "lv": "он бы ехал"
    },
    "partizipVergangenheit": {
      "de": "gefahren (er ist)",
      "lv": "ехавший"
    }
  },
  {
    "infinitiv": {
      "de": "fallen",
      "lv": "падать • упасть"
    },
    "praesens": {
      "de": "er fällt",
      "lv": "он падает"
    },
    "imperfektIndikativ": {
      "de": "er fiel",
      "lv": "он падал"
    },
    "imperfektKonjunktiv": {
      "de": "er fiele",
      "lv": "он бы падал"
    },
    "partizipVergangenheit": {
      "de": "gefallen (er ist)",
      "lv": "упавший"
    }
  },
  {
    "infinitiv": {
      "de": "fangen",
      "lv": "ловить • поймать"
    },
    "praesens": {
      "de": "er fängt",
      "lv": "он ловит"
    },
    "imperfektIndikativ": {
      "de": "er fing",
      "lv": "он ловил"
    },
    "imperfektKonjunktiv": {
      "de": "er finge",
      "lv": "он бы ловил"
    },
    "partizipVergangenheit": {
      "de": "gefangen",
      "lv": "пойманный"
    }
  },
  {
    "infinitiv": {
      "de": "finden",
      "lv": "находить • найти"
    },
    "praesens": {
      "de": "er findet",
      "lv": "он находит"
    },
    "imperfektIndikativ": {
      "de": "er fand",
      "lv": "он находил"
    },
    "imperfektKonjunktiv": {
      "de": "er fände",
      "lv": "он бы находил"
    },
    "partizipVergangenheit": {
      "de": "gefunden",
      "lv": "найденный"
    }
  },
  {
    "infinitiv": {
      "de": "fliegen",
      "lv": "лететь"
    },
    "praesens": {
      "de": "er fliegt",
      "lv": "он летит"
    },
    "imperfektIndikativ": {
      "de": "er flog",
      "lv": "он летел"
    },
    "imperfektKonjunktiv": {
      "de": "er flöge",
      "lv": "он бы летел"
    },
    "partizipVergangenheit": {
      "de": "geflogen (er ist)",
      "lv": "летевший"
    }
  },
  {
    "infinitiv": {
      "de": "fliehen",
      "lv": "убегать • убежать"
    },
    "praesens": {
      "de": "er flieht",
      "lv": "он убегает"
    },
    "imperfektIndikativ": {
      "de": "er floh",
      "lv": "он убегал"
    },
    "imperfektKonjunktiv": {
      "de": "er flöhe",
      "lv": "он бы убегал"
    },
    "partizipVergangenheit": {
      "de": "geflohen (er ist)",
      "lv": "убежавший"
    }
  },
  {
    "infinitiv": {
      "de": "fließen",
      "lv": "течь"
    },
    "praesens": {
      "de": "er fließt",
      "lv": "он течёт"
    },
    "imperfektIndikativ": {
      "de": "er floss",
      "lv": "он тёк"
    },
    "imperfektKonjunktiv": {
      "de": "er flösse",
      "lv": "он бы тёк"
    },
    "partizipVergangenheit": {
      "de": "geflossen (er ist)",
      "lv": "тёкший"
    }
  },
  {
    "infinitiv": {
      "de": "fressen",
      "lv": "есть • съесть / пожирать • пожрать"
    },
    "praesens": {
      "de": "er frisst",
      "lv": "он ест / пожирает"
    },
    "imperfektIndikativ": {
      "de": "er frass",
      "lv": "он ел / пожирал"
    },
    "imperfektKonjunktiv": {
      "de": "er fräße",
      "lv": "он бы ел / пожирал"
    },
    "partizipVergangenheit": {
      "de": "gefressen",
      "lv": "съеденный / пожранный"
    }
  },
  {
    "infinitiv": {
      "de": "frieren",
      "lv": "мёрзнуть • замёрзнуть"
    },
    "praesens": {
      "de": "er friert",
      "lv": "он мёрзнет"
    },
    "imperfektIndikativ": {
      "de": "er fror",
      "lv": "он мёрз"
    },
    "imperfektKonjunktiv": {
      "de": "er fröre",
      "lv": "он бы мёрз"
    },
    "partizipVergangenheit": {
      "de": "gefroren",
      "lv": "замёрзший"
    }
  },
  {
    "infinitiv": {
      "de": "geben",
      "lv": "давать • дать"
    },
    "praesens": {
      "de": "er gibt",
      "lv": "он даёт"
    },
    "imperfektIndikativ": {
      "de": "er gab",
      "lv": "он давал"
    },
    "imperfektKonjunktiv": {
      "de": "er gäbe",
      "lv": "он бы давал"
    },
    "partizipVergangenheit": {
      "de": "gegeben",
      "lv": "данный"
    }
  },
  {
    "infinitiv": {
      "de": "gedeihen",
      "lv": "процветать"
    },
    "praesens": {
      "de": "er gedeiht",
      "lv": "он процветает"
    },
    "imperfektIndikativ": {
      "de": "er gedieh",
      "lv": "он процветал"
    },
    "imperfektKonjunktiv": {
      "de": "er gediehe",
      "lv": "он бы процветал"
    },
    "partizipVergangenheit": {
      "de": "gediehen (er ist)",
      "lv": "процветавший"
    }
  },
  {
    "infinitiv": {
      "de": "gehen",
      "lv": "идти"
    },
    "praesens": {
      "de": "er geht",
      "lv": "он идёт"
    },
    "imperfektIndikativ": {
      "de": "er ging",
      "lv": "он шёл"
    },
    "imperfektKonjunktiv": {
      "de": "er ginge",
      "lv": "он бы шёл"
    },
    "partizipVergangenheit": {
      "de": "gegangen (er ist)",
      "lv": "шедший"
    }
  },
  {
    "infinitiv": {
      "de": "gewinnen",
      "lv": "выигрывать • выиграть"
    },
    "praesens": {
      "de": "er gewinnt",
      "lv": "он выигрывает"
    },
    "imperfektIndikativ": {
      "de": "er gewann",
      "lv": "он выигрывал"
    },
    "imperfektKonjunktiv": {
      "de": "er gewönne / er gewänne",
      "lv": "он бы выигрывал"
    },
    "partizipVergangenheit": {
      "de": "gewonnen",
      "lv": "выигранный"
    }
  },
  {
    "infinitiv": {
      "de": "haben",
      "lv": "иметь"
    },
    "praesens": {
      "de": "er hat",
      "lv": "у него есть"
    },
    "imperfektIndikativ": {
      "de": "hatte",
      "lv": "у него было"
    },
    "imperfektKonjunktiv": {
      "de": "hatte",
      "lv": "у него бы было"
    },
    "partizipVergangenheit": {
      "de": "gehabt",
      "lv": "имевший"
    }
  },
  {
    "infinitiv": {
      "de": "halten",
      "lv": "держать"
    },
    "praesens": {
      "de": "er hält",
      "lv": "он держит"
    },
    "imperfektIndikativ": {
      "de": "er hielt",
      "lv": "он держал"
    },
    "imperfektKonjunktiv": {
      "de": "er hielte",
      "lv": "он бы держал"
    },
    "partizipVergangenheit": {
      "de": "gehalten",
      "lv": "держанный"
    }
  },
  {
    "infinitiv": {
      "de": "heißen",
      "lv": "называть • назвать / зваться"
    },
    "praesens": {
      "de": "er heißt",
      "lv": "он называет / зовётся"
    },
    "imperfektIndikativ": {
      "de": "er hieß",
      "lv": "он называл / звался"
    },
    "imperfektKonjunktiv": {
      "de": "er hieße",
      "lv": "он бы называл / звался"
    },
    "partizipVergangenheit": {
      "de": "geheißen",
      "lv": "названный"
    }
  },
  {
    "infinitiv": {
      "de": "helfen",
      "lv": "помогать • помочь"
    },
    "praesens": {
      "de": "er hilft",
      "lv": "он помогает"
    },
    "imperfektIndikativ": {
      "de": "er half",
      "lv": "он помогал"
    },
    "imperfektKonjunktiv": {
      "de": "er hülfe / er hälfe",
      "lv": "он бы помогал"
    },
    "partizipVergangenheit": {
      "de": "geholfen",
      "lv": "помогший"
    }
  },
  {
    "infinitiv": {
      "de": "kommen",
      "lv": "приходить • прийти"
    },
    "praesens": {
      "de": "er kommt",
      "lv": "он приходит"
    },
    "imperfektIndikativ": {
      "de": "er kam",
      "lv": "он приходил"
    },
    "imperfektKonjunktiv": {
      "de": "er käme",
      "lv": "он бы приходил"
    },
    "partizipVergangenheit": {
      "de": "gekommen (er ist)",
      "lv": "пришедший"
    }
  },
  {
    "infinitiv": {
      "de": "können",
      "lv": "мочь • смочь"
    },
    "praesens": {
      "de": "er kann",
      "lv": "он может"
    },
    "imperfektIndikativ": {
      "de": "konnte",
      "lv": "он мог"
    },
    "imperfektKonjunktiv": {
      "de": "konnte",
      "lv": "он бы мог"
    },
    "partizipVergangenheit": {
      "de": "gekonnt",
      "lv": "смогший"
    }
  },
  {
    "infinitiv": {
      "de": "kriechen",
      "lv": "ползти"
    },
    "praesens": {
      "de": "er kriecht",
      "lv": "он ползёт"
    },
    "imperfektIndikativ": {
      "de": "er kroch",
      "lv": "он полз"
    },
    "imperfektKonjunktiv": {
      "de": "er kröche",
      "lv": "он бы полз"
    },
    "partizipVergangenheit": {
      "de": "gekrochen (er ist)",
      "lv": "ползший"
    }
  },
  {
    "infinitiv": {
      "de": "laden",
      "lv": "грузить • погрузить / приглашать • пригласить"
    },
    "praesens": {
      "de": "er lädt",
      "lv": "он грузит / приглашает"
    },
    "imperfektIndikativ": {
      "de": "er lud",
      "lv": "он грузил / приглашал"
    },
    "imperfektKonjunktiv": {
      "de": "er lüde",
      "lv": "он бы грузил / приглашал"
    },
    "partizipVergangenheit": {
      "de": "geladen",
      "lv": "погруженный / приглашённый"
    }
  },
  {
    "infinitiv": {
      "de": "lassen",
      "lv": "заставлять • заставить / позволять • позволить"
    },
    "praesens": {
      "de": "er lässt",
      "lv": "он заставляет / позволяет"
    },
    "imperfektIndikativ": {
      "de": "er ließ",
      "lv": "он заставлял / позволял"
    },
    "imperfektKonjunktiv": {
      "de": "er ließe",
      "lv": "он бы заставлял / позволял"
    },
    "partizipVergangenheit": {
      "de": "gelassen",
      "lv": "заставленный / позволенный"
    }
  },
  {
    "infinitiv": {
      "de": "laufen",
      "lv": "бежать"
    },
    "praesens": {
      "de": "er läuft",
      "lv": "он бежит"
    },
    "imperfektIndikativ": {
      "de": "er lief",
      "lv": "он бежал"
    },
    "imperfektKonjunktiv": {
      "de": "er liefe",
      "lv": "он бы бежал"
    },
    "partizipVergangenheit": {
      "de": "gelaufen (er ist)",
      "lv": "бежавший"
    }
  },
  {
    "infinitiv": {
      "de": "leiden",
      "lv": "страдать"
    },
    "praesens": {
      "de": "er leidet",
      "lv": "он страдает"
    },
    "imperfektIndikativ": {
      "de": "er litt",
      "lv": "он страдал"
    },
    "imperfektKonjunktiv": {
      "de": "er litte",
      "lv": "он бы страдал"
    },
    "partizipVergangenheit": {
      "de": "gelitten",
      "lv": "страдавший"
    }
  },
  {
    "infinitiv": {
      "de": "leihen",
      "lv": "одалживать • одолжить / занимать • занять"
    },
    "praesens": {
      "de": "er leiht",
      "lv": "он одалживает / занимает"
    },
    "imperfektIndikativ": {
      "de": "er lieh",
      "lv": "он одалживал / занимал"
    },
    "imperfektKonjunktiv": {
      "de": "er liehe",
      "lv": "он бы одалживал / занимал"
    },
    "partizipVergangenheit": {
      "de": "geliehen",
      "lv": "одолженный / занятый"
    }
  },
  {
    "infinitiv": {
      "de": "lesen",
      "lv": "читать • прочитать"
    },
    "praesens": {
      "de": "er liest",
      "lv": "он читает"
    },
    "imperfektIndikativ": {
      "de": "er las",
      "lv": "он читал"
    },
    "imperfektKonjunktiv": {
      "de": "er läse",
      "lv": "он бы читал"
    },
    "partizipVergangenheit": {
      "de": "gelesen",
      "lv": "прочитанный"
    }
  },
  {
    "infinitiv": {
      "de": "liegen",
      "lv": "лежать"
    },
    "praesens": {
      "de": "er liegt",
      "lv": "он лежит"
    },
    "imperfektIndikativ": {
      "de": "er lag",
      "lv": "он лежал"
    },
    "imperfektKonjunktiv": {
      "de": "er läge",
      "lv": "он бы лежал"
    },
    "partizipVergangenheit": {
      "de": "gelegen",
      "lv": "лежавший"
    }
  },
  {
    "infinitiv": {
      "de": "lügen",
      "lv": "лгать • солгать"
    },
    "praesens": {
      "de": "er lügt",
      "lv": "он лжёт"
    },
    "imperfektIndikativ": {
      "de": "er log",
      "lv": "он лгал"
    },
    "imperfektKonjunktiv": {
      "de": "er löge",
      "lv": "он бы лгал"
    },
    "partizipVergangenheit": {
      "de": "gelogen",
      "lv": "солгавший"
    }
  },
  {
    "infinitiv": {
      "de": "mahlen",
      "lv": "молоть • смолоть"
    },
    "praesens": {
      "de": "er mahlt",
      "lv": "он мелет"
    },
    "imperfektIndikativ": {
      "de": "er mahlte",
      "lv": "он молол"
    },
    "imperfektKonjunktiv": {
      "de": "er malte",
      "lv": "он бы молол"
    },
    "partizipVergangenheit": {
      "de": "gemahlen",
      "lv": "смолотый"
    }
  },
  {
    "infinitiv": {
      "de": "meiden",
      "lv": "избегать"
    },
    "praesens": {
      "de": "er meidet",
      "lv": "он избегает"
    },
    "imperfektIndikativ": {
      "de": "er mied",
      "lv": "он избегал"
    },
    "imperfektKonjunktiv": {
      "de": "er miede",
      "lv": "он бы избегал"
    },
    "partizipVergangenheit": {
      "de": "gemieden",
      "lv": "избегавший"
    }
  },
  {
    "infinitiv": {
      "de": "melken",
      "lv": "доить • подоить"
    },
    "praesens": {
      "de": "er milkt / er melkt",
      "lv": "он доит"
    },
    "imperfektIndikativ": {
      "de": "er molk / er melkte",
      "lv": "он доил"
    },
    "imperfektKonjunktiv": {
      "de": "er mölke / er melkte",
      "lv": "он бы доил"
    },
    "partizipVergangenheit": {
      "de": "gemolken / gemelkt",
      "lv": "подоенный"
    }
  },
  {
    "infinitiv": {
      "de": "messen",
      "lv": "измерять • измерить"
    },
    "praesens": {
      "de": "er misst",
      "lv": "он измеряет"
    },
    "imperfektIndikativ": {
      "de": "er mass",
      "lv": "он измерял"
    },
    "imperfektKonjunktiv": {
      "de": "er mäße",
      "lv": "он бы измерял"
    },
    "partizipVergangenheit": {
      "de": "gemessen",
      "lv": "измеренный"
    }
  },
  {
    "infinitiv": {
      "de": "misslingen",
      "lv": "не удаваться • не удаться"
    },
    "praesens": {
      "de": "es misslingt",
      "lv": "оно не удаётся"
    },
    "imperfektIndikativ": {
      "de": "misslang",
      "lv": "оно не удавалось"
    },
    "imperfektKonjunktiv": {
      "de": "misslang",
      "lv": "оно бы не удавалось"
    },
    "partizipVergangenheit": {
      "de": "misslungen",
      "lv": "неудавшийся"
    }
  },
  {
    "infinitiv": {
      "de": "mögen",
      "lv": "нравиться • понравиться"
    },
    "praesens": {
      "de": "er mag",
      "lv": "ему нравится"
    },
    "imperfektIndikativ": {
      "de": "mochte",
      "lv": "ему нравилось"
    },
    "imperfektKonjunktiv": {
      "de": "mochte",
      "lv": "ему бы нравилось"
    },
    "partizipVergangenheit": {
      "de": "gemocht",
      "lv": "понравившийся"
    }
  },
  {
    "infinitiv": {
      "de": "müssen",
      "lv": "быть должным"
    },
    "praesens": {
      "de": "er muss",
      "lv": "он должен"
    },
    "imperfektIndikativ": {
      "de": "musste",
      "lv": "он должен был"
    },
    "imperfektKonjunktiv": {
      "de": "musste",
      "lv": "он должен был бы"
    },
    "partizipVergangenheit": {
      "de": "gemusst",
      "lv": "он должен был"
    }
  },
  {
    "infinitiv": {
      "de": "nehmen",
      "lv": "брать • взять"
    },
    "praesens": {
      "de": "er nimmt",
      "lv": "он берёт"
    },
    "imperfektIndikativ": {
      "de": "er nahm",
      "lv": "он брал"
    },
    "imperfektKonjunktiv": {
      "de": "er nähme",
      "lv": "он бы брал"
    },
    "partizipVergangenheit": {
      "de": "genommen",
      "lv": "взятый"
    }
  },
  {
    "infinitiv": {
      "de": "nennen",
      "lv": "называть • назвать"
    },
    "praesens": {
      "de": "er nennt",
      "lv": "он называет"
    },
    "imperfektIndikativ": {
      "de": "er nannte",
      "lv": "он называл"
    },
    "imperfektKonjunktiv": {
      "de": "er nennte",
      "lv": "он бы называл"
    },
    "partizipVergangenheit": {
      "de": "genannt",
      "lv": "названный"
    }
  },
  {
    "infinitiv": {
      "de": "pfeifen",
      "lv": "свистеть"
    },
    "praesens": {
      "de": "er pfeift",
      "lv": "он свистит"
    },
    "imperfektIndikativ": {
      "de": "er pfiff",
      "lv": "он свистел"
    },
    "imperfektKonjunktiv": {
      "de": "er pfiffe",
      "lv": "он бы свистел"
    },
    "partizipVergangenheit": {
      "de": "gepfiffen",
      "lv": "свистевший"
    }
  },
  {
    "infinitiv": {
      "de": "pflegen",
      "lv": "ухаживать"
    },
    "praesens": {
      "de": "er pflegt",
      "lv": "он ухаживает"
    },
    "imperfektIndikativ": {
      "de": "pflegte / pflog",
      "lv": "он ухаживал"
    },
    "imperfektKonjunktiv": {
      "de": "pflegte / pflog",
      "lv": "он бы ухаживал"
    },
    "partizipVergangenheit": {
      "de": "gepflegt / gepflogen",
      "lv": "ухаживавший"
    }
  },
  {
    "infinitiv": {
      "de": "preisen",
      "lv": "хвалить • похвалить"
    },
    "praesens": {
      "de": "er preist",
      "lv": "он хвалит"
    },
    "imperfektIndikativ": {
      "de": "er pries",
      "lv": "он хвалил"
    },
    "imperfektKonjunktiv": {
      "de": "er priese",
      "lv": "он бы хвалил"
    },
    "partizipVergangenheit": {
      "de": "gepriesen",
      "lv": "похваленный"
    }
  },
  {
    "infinitiv": {
      "de": "quellen",
      "lv": "разбухать • разбухнуть"
    },
    "praesens": {
      "de": "er quillt",
      "lv": "он разбухает"
    },
    "imperfektIndikativ": {
      "de": "er quoll",
      "lv": "он разбухал"
    },
    "imperfektKonjunktiv": {
      "de": "er quölle",
      "lv": "он бы разбухал"
    },
    "partizipVergangenheit": {
      "de": "gequollen (er ist)",
      "lv": "разбухший"
    }
  },
  {
    "infinitiv": {
      "de": "raten",
      "lv": "советовать • посоветовать / угадывать • угадать"
    },
    "praesens": {
      "de": "er rät",
      "lv": "он советует / угадывает"
    },
    "imperfektIndikativ": {
      "de": "er riet",
      "lv": "он советовал / угадывал"
    },
    "imperfektKonjunktiv": {
      "de": "er riete",
      "lv": "он бы советовал / угадывал"
    },
    "partizipVergangenheit": {
      "de": "geraten",
      "lv": "посоветованный / угаданный"
    }
  },
  {
    "infinitiv": {
      "de": "reiben",
      "lv": "тереть"
    },
    "praesens": {
      "de": "er reibt",
      "lv": "он трёт"
    },
    "imperfektIndikativ": {
      "de": "er rieb",
      "lv": "он тёр"
    },
    "imperfektKonjunktiv": {
      "de": "er riebe",
      "lv": "он бы тёр"
    },
    "partizipVergangenheit": {
      "de": "gerieben",
      "lv": "тёртый"
    }
  },
  {
    "infinitiv": {
      "de": "reißen",
      "lv": "рвать • порвать"
    },
    "praesens": {
      "de": "er reißt",
      "lv": "он рвёт"
    },
    "imperfektIndikativ": {
      "de": "er riss",
      "lv": "он рвал"
    },
    "imperfektKonjunktiv": {
      "de": "er risse",
      "lv": "он бы рвал"
    },
    "partizipVergangenheit": {
      "de": "gerissen",
      "lv": "порванный"
    }
  },
  {
    "infinitiv": {
      "de": "reiten",
      "lv": "ездить верхом"
    },
    "praesens": {
      "de": "er reitet",
      "lv": "он ездит верхом"
    },
    "imperfektIndikativ": {
      "de": "er ritt",
      "lv": "он ездил верхом"
    },
    "imperfektKonjunktiv": {
      "de": "er ritte",
      "lv": "он бы ездил верхом"
    },
    "partizipVergangenheit": {
      "de": "geritten (er ist)",
      "lv": "ездивший верхом"
    }
  },
  {
    "infinitiv": {
      "de": "rennen",
      "lv": "бежать"
    },
    "praesens": {
      "de": "er rennt",
      "lv": "он бежит"
    },
    "imperfektIndikativ": {
      "de": "er rannte",
      "lv": "он бежал"
    },
    "imperfektKonjunktiv": {
      "de": "er rennte",
      "lv": "он бы бежал"
    },
    "partizipVergangenheit": {
      "de": "gerannt",
      "lv": "бежавший"
    }
  },
  {
    "infinitiv": {
      "de": "riechen",
      "lv": "нюхать • понюхать"
    },
    "praesens": {
      "de": "er riecht",
      "lv": "он нюхает"
    },
    "imperfektIndikativ": {
      "de": "er roch",
      "lv": "он нюхал"
    },
    "imperfektKonjunktiv": {
      "de": "er röche",
      "lv": "он бы нюхал"
    },
    "partizipVergangenheit": {
      "de": "gerochen",
      "lv": "понюханный"
    }
  },
  {
    "infinitiv": {
      "de": "ringen",
      "lv": "бороться"
    },
    "praesens": {
      "de": "er ringt",
      "lv": "он борется"
    },
    "imperfektIndikativ": {
      "de": "er rang",
      "lv": "он боролся"
    },
    "imperfektKonjunktiv": {
      "de": "er ränge",
      "lv": "он бы боролся"
    },
    "partizipVergangenheit": {
      "de": "gerungen",
      "lv": "боровшийся"
    }
  },
  {
    "infinitiv": {
      "de": "rinnen",
      "lv": "течь"
    },
    "praesens": {
      "de": "er rinnt",
      "lv": "он течёт"
    },
    "imperfektIndikativ": {
      "de": "er rann",
      "lv": "он тёк"
    },
    "imperfektKonjunktiv": {
      "de": "er ränne / er rönne",
      "lv": "он бы тёк"
    },
    "partizipVergangenheit": {
      "de": "geronnen (er ist)",
      "lv": "тёкший"
    }
  },
  {
    "infinitiv": {
      "de": "rufen",
      "lv": "звать • позвать"
    },
    "praesens": {
      "de": "er ruft",
      "lv": "он зовёт"
    },
    "imperfektIndikativ": {
      "de": "er rief",
      "lv": "он звал"
    },
    "imperfektKonjunktiv": {
      "de": "er riefe",
      "lv": "он бы звал"
    },
    "partizipVergangenheit": {
      "de": "gerufen",
      "lv": "позванный"
    }
  },
  {
    "infinitiv": {
      "de": "salzen",
      "lv": "солить • посолить"
    },
    "praesens": {
      "de": "er salzt",
      "lv": "он солит"
    },
    "imperfektIndikativ": {
      "de": "er salzte",
      "lv": "он солил"
    },
    "imperfektKonjunktiv": {
      "de": "er salzte",
      "lv": "он бы солил"
    },
    "partizipVergangenheit": {
      "de": "gesalzen",
      "lv": "посоленный"
    }
  },
  {
    "infinitiv": {
      "de": "saufen",
      "lv": "пьянствовать / пить • выпить"
    },
    "praesens": {
      "de": "er säuft",
      "lv": "он пьянствует / пьёт"
    },
    "imperfektIndikativ": {
      "de": "er soff",
      "lv": "он пьянствовал / пил"
    },
    "imperfektKonjunktiv": {
      "de": "er söffe",
      "lv": "он бы пьянствовал / пил"
    },
    "partizipVergangenheit": {
      "de": "gesoffen",
      "lv": "выпитый"
    }
  },
  {
    "infinitiv": {
      "de": "saugen",
      "lv": "сосать"
    },
    "praesens": {
      "de": "er saugt",
      "lv": "он сосёт"
    },
    "imperfektIndikativ": {
      "de": "er sog",
      "lv": "он сосал"
    },
    "imperfektKonjunktiv": {
      "de": "er söge",
      "lv": "он бы сосал"
    },
    "partizipVergangenheit": {
      "de": "gesogen",
      "lv": "сосанный"
    }
  },
  {
    "infinitiv": {
      "de": "schaffen",
      "lv": "создавать • создать"
    },
    "praesens": {
      "de": "er schafft",
      "lv": "он создаёт"
    },
    "imperfektIndikativ": {
      "de": "er schuf",
      "lv": "он создавал"
    },
    "imperfektKonjunktiv": {
      "de": "er schüfe",
      "lv": "он бы создавал"
    },
    "partizipVergangenheit": {
      "de": "geschaffen",
      "lv": "созданный"
    }
  },
  {
    "infinitiv": {
      "de": "schallen",
      "lv": "звучать • прозвучать"
    },
    "praesens": {
      "de": "es schallt",
      "lv": "оно звучит"
    },
    "imperfektIndikativ": {
      "de": "schallte / scholl",
      "lv": "оно звучало"
    },
    "imperfektKonjunktiv": {
      "de": "schallte / scholl",
      "lv": "оно бы звучало"
    },
    "partizipVergangenheit": {
      "de": "geschallt",
      "lv": "прозвучавший"
    }
  },
  {
    "infinitiv": {
      "de": "scheiden",
      "lv": "разделять • разделить / расставаться • расстаться"
    },
    "praesens": {
      "de": "er scheidet",
      "lv": "он разделяет / расстаётся"
    },
    "imperfektIndikativ": {
      "de": "er schied",
      "lv": "он разделял / расставался"
    },
    "imperfektKonjunktiv": {
      "de": "er schiede",
      "lv": "он бы разделял / расставался"
    },
    "partizipVergangenheit": {
      "de": "geschieden (er hat / er ist)",
      "lv": "разделённый / расставшийся"
    }
  },
  {
    "infinitiv": {
      "de": "scheinen",
      "lv": "светить / казаться"
    },
    "praesens": {
      "de": "er scheint",
      "lv": "он светит / кажется"
    },
    "imperfektIndikativ": {
      "de": "er schien",
      "lv": "он светил / казался"
    },
    "imperfektKonjunktiv": {
      "de": "er schiene",
      "lv": "он бы светил / казался"
    },
    "partizipVergangenheit": {
      "de": "geschienen",
      "lv": "светивший / казавшийся"
    }
  },
  {
    "infinitiv": {
      "de": "schelten",
      "lv": "ругать • отругать"
    },
    "praesens": {
      "de": "er schilt",
      "lv": "он ругает"
    },
    "imperfektIndikativ": {
      "de": "er schalt",
      "lv": "он ругал"
    },
    "imperfektKonjunktiv": {
      "de": "er schölte / er schälte",
      "lv": "он бы ругал"
    },
    "partizipVergangenheit": {
      "de": "gescholten",
      "lv": "отруганный"
    }
  },
  {
    "infinitiv": {
      "de": "scheren",
      "lv": "стричь • постричь"
    },
    "praesens": {
      "de": "er schert",
      "lv": "он стрижёт"
    },
    "imperfektIndikativ": {
      "de": "schor / scherte",
      "lv": "он стриг"
    },
    "imperfektKonjunktiv": {
      "de": "schor / scherte",
      "lv": "он бы стриг"
    },
    "partizipVergangenheit": {
      "de": "geschoren / geschert",
      "lv": "постриженный"
    }
  },
  {
    "infinitiv": {
      "de": "schieben",
      "lv": "передвигать • передвинуть"
    },
    "praesens": {
      "de": "er schiebt",
      "lv": "он передвигает"
    },
    "imperfektIndikativ": {
      "de": "er schob",
      "lv": "он передвигал"
    },
    "imperfektKonjunktiv": {
      "de": "er schöbe",
      "lv": "он бы передвигал"
    },
    "partizipVergangenheit": {
      "de": "geschoben",
      "lv": "передвинутый"
    }
  },
  {
    "infinitiv": {
      "de": "schießen",
      "lv": "стрелять"
    },
    "praesens": {
      "de": "er schießt",
      "lv": "он стреляет"
    },
    "imperfektIndikativ": {
      "de": "er schoss",
      "lv": "он стрелял"
    },
    "imperfektKonjunktiv": {
      "de": "er schösse",
      "lv": "он бы стрелял"
    },
    "partizipVergangenheit": {
      "de": "geschossen",
      "lv": "стрелявший"
    }
  },
  {
    "infinitiv": {
      "de": "schinden",
      "lv": "мучить • измучить"
    },
    "praesens": {
      "de": "er schindet",
      "lv": "он мучит"
    },
    "imperfektIndikativ": {
      "de": "schindete",
      "lv": "он мучил"
    },
    "imperfektKonjunktiv": {
      "de": "schindete",
      "lv": "он бы мучил"
    },
    "partizipVergangenheit": {
      "de": "geschunden",
      "lv": "измученный"
    }
  },
  {
    "infinitiv": {
      "de": "schlafen",
      "lv": "спать"
    },
    "praesens": {
      "de": "er schläft",
      "lv": "он спит"
    },
    "imperfektIndikativ": {
      "de": "er schlief",
      "lv": "он спал"
    },
    "imperfektKonjunktiv": {
      "de": "er schliefe",
      "lv": "он бы спал"
    },
    "partizipVergangenheit": {
      "de": "geschlafen",
      "lv": "спавший"
    }
  },
  {
    "infinitiv": {
      "de": "schlagen",
      "lv": "бить • побить"
    },
    "praesens": {
      "de": "er schlägt",
      "lv": "он бьёт"
    },
    "imperfektIndikativ": {
      "de": "er schlug",
      "lv": "он бил"
    },
    "imperfektKonjunktiv": {
      "de": "er schlüge",
      "lv": "он бы бил"
    },
    "partizipVergangenheit": {
      "de": "geschlagen",
      "lv": "побитый"
    }
  },
  {
    "infinitiv": {
      "de": "schleichen",
      "lv": "красться"
    },
    "praesens": {
      "de": "er schleicht",
      "lv": "он крадётся"
    },
    "imperfektIndikativ": {
      "de": "er schlich",
      "lv": "он крался"
    },
    "imperfektKonjunktiv": {
      "de": "er schliche",
      "lv": "он бы крался"
    },
    "partizipVergangenheit": {
      "de": "geschlichen (er ist)",
      "lv": "кравшийся"
    }
  },
  {
    "infinitiv": {
      "de": "schleifen",
      "lv": "шлифовать • отшлифовать"
    },
    "praesens": {
      "de": "er schleift",
      "lv": "он шлифует"
    },
    "imperfektIndikativ": {
      "de": "er schliff",
      "lv": "он шлифовал"
    },
    "imperfektKonjunktiv": {
      "de": "er schliffe",
      "lv": "он бы шлифовал"
    },
    "partizipVergangenheit": {
      "de": "geschliffen",
      "lv": "отшлифованный"
    }
  },
  {
    "infinitiv": {
      "de": "schließen",
      "lv": "закрывать • закрыть"
    },
    "praesens": {
      "de": "er schließt",
      "lv": "он закрывает"
    },
    "imperfektIndikativ": {
      "de": "er schloss",
      "lv": "он закрывал"
    },
    "imperfektKonjunktiv": {
      "de": "er schlösse",
      "lv": "он бы закрывал"
    },
    "partizipVergangenheit": {
      "de": "geschlossen",
      "lv": "закрытый"
    }
  },
  {
    "infinitiv": {
      "de": "schlingen",
      "lv": "глотать • проглотить"
    },
    "praesens": {
      "de": "er schlingt",
      "lv": "он глотает"
    },
    "imperfektIndikativ": {
      "de": "er schlang",
      "lv": "он глотал"
    },
    "imperfektKonjunktiv": {
      "de": "er schlänge",
      "lv": "он бы глотал"
    },
    "partizipVergangenheit": {
      "de": "geschlungen",
      "lv": "проглоченный"
    }
  },
  {
    "infinitiv": {
      "de": "schmeißen",
      "lv": "бросать • бросить"
    },
    "praesens": {
      "de": "er schmeißt",
      "lv": "он бросает"
    },
    "imperfektIndikativ": {
      "de": "er schmiss",
      "lv": "он бросал"
    },
    "imperfektKonjunktiv": {
      "de": "er schmisse",
      "lv": "он бы бросал"
    },
    "partizipVergangenheit": {
      "de": "geschmissen",
      "lv": "брошенный"
    }
  },
  {
    "infinitiv": {
      "de": "schmelzen",
      "lv": "таять • растаять"
    },
    "praesens": {
      "de": "er schmilzt",
      "lv": "он тает"
    },
    "imperfektIndikativ": {
      "de": "er schmolz",
      "lv": "он таял"
    },
    "imperfektKonjunktiv": {
      "de": "er schmölze",
      "lv": "он бы таял"
    },
    "partizipVergangenheit": {
      "de": "geschmolzen (er ist)",
      "lv": "растаявший"
    }
  },
  {
    "infinitiv": {
      "de": "schnauben",
      "lv": "фыркать"
    },
    "praesens": {
      "de": "er schnaubt",
      "lv": "он фыркает"
    },
    "imperfektIndikativ": {
      "de": "schnaubte / schnob",
      "lv": "он фыркал"
    },
    "imperfektKonjunktiv": {
      "de": "schnaubte / schnob",
      "lv": "он бы фыркал"
    },
    "partizipVergangenheit": {
      "de": "geschnaubt / geschnoben",
      "lv": "фыркавший"
    }
  },
  {
    "infinitiv": {
      "de": "schneiden",
      "lv": "резать • разрезать"
    },
    "praesens": {
      "de": "er schneidet",
      "lv": "он режет"
    },
    "imperfektIndikativ": {
      "de": "er schnitt",
      "lv": "он резал"
    },
    "imperfektKonjunktiv": {
      "de": "er schnitte",
      "lv": "он бы резал"
    },
    "partizipVergangenheit": {
      "de": "geschnitten",
      "lv": "разрезанный"
    }
  },
  {
    "infinitiv": {
      "de": "schreiben",
      "lv": "писать • написать"
    },
    "praesens": {
      "de": "er schreibt",
      "lv": "он пишет"
    },
    "imperfektIndikativ": {
      "de": "er schrieb",
      "lv": "он писал"
    },
    "imperfektKonjunktiv": {
      "de": "er schriebe",
      "lv": "он бы писал"
    },
    "partizipVergangenheit": {
      "de": "geschrieben",
      "lv": "написанный"
    }
  },
  {
    "infinitiv": {
      "de": "schreien",
      "lv": "кричать"
    },
    "praesens": {
      "de": "er schreit",
      "lv": "он кричит"
    },
    "imperfektIndikativ": {
      "de": "er schrie",
      "lv": "он кричал"
    },
    "imperfektKonjunktiv": {
      "de": "er schriee",
      "lv": "он бы кричал"
    },
    "partizipVergangenheit": {
      "de": "geschrien",
      "lv": "кричавший"
    }
  },
  {
    "infinitiv": {
      "de": "schreiten",
      "lv": "шагать"
    },
    "praesens": {
      "de": "er schreitet",
      "lv": "он шагает"
    },
    "imperfektIndikativ": {
      "de": "er schritt",
      "lv": "он шагал"
    },
    "imperfektKonjunktiv": {
      "de": "er schritte",
      "lv": "он бы шагал"
    },
    "partizipVergangenheit": {
      "de": "geschritten (er ist)",
      "lv": "шагавший"
    }
  },
  {
    "infinitiv": {
      "de": "schweigen",
      "lv": "молчать"
    },
    "praesens": {
      "de": "er schweigt",
      "lv": "он молчит"
    },
    "imperfektIndikativ": {
      "de": "er schwieg",
      "lv": "он молчал"
    },
    "imperfektKonjunktiv": {
      "de": "er schwiege",
      "lv": "он бы молчал"
    },
    "partizipVergangenheit": {
      "de": "geschwiegen",
      "lv": "молчавший"
    }
  },
  {
    "infinitiv": {
      "de": "schwellen",
      "lv": "опухать • опухнуть"
    },
    "praesens": {
      "de": "er schwillt",
      "lv": "он опухает"
    },
    "imperfektIndikativ": {
      "de": "er schwoll",
      "lv": "он опухал"
    },
    "imperfektKonjunktiv": {
      "de": "er schwölle",
      "lv": "он бы опухал"
    },
    "partizipVergangenheit": {
      "de": "geschwollen (er ist)",
      "lv": "опухший"
    }
  },
  {
    "infinitiv": {
      "de": "schwimmen",
      "lv": "плавать"
    },
    "praesens": {
      "de": "er schwimmt",
      "lv": "он плавает"
    },
    "imperfektIndikativ": {
      "de": "er schwamm",
      "lv": "он плавал"
    },
    "imperfektKonjunktiv": {
      "de": "er schwömme / er schwämme",
      "lv": "он бы плавал"
    },
    "partizipVergangenheit": {
      "de": "geschwommen (er ist)",
      "lv": "плававший"
    }
  },
  {
    "infinitiv": {
      "de": "schwinden",
      "lv": "исчезать • исчезнуть"
    },
    "praesens": {
      "de": "er schwindet",
      "lv": "он исчезает"
    },
    "imperfektIndikativ": {
      "de": "er schwand",
      "lv": "он исчезал"
    },
    "imperfektKonjunktiv": {
      "de": "er schwände",
      "lv": "он бы исчезал"
    },
    "partizipVergangenheit": {
      "de": "geschwunden (er ist)",
      "lv": "исчезнувший"
    }
  },
  {
    "infinitiv": {
      "de": "schwingen",
      "lv": "махать"
    },
    "praesens": {
      "de": "er schwingt",
      "lv": "он машет"
    },
    "imperfektIndikativ": {
      "de": "er schwang",
      "lv": "он махал"
    },
    "imperfektKonjunktiv": {
      "de": "er schwänge",
      "lv": "он бы махал"
    },
    "partizipVergangenheit": {
      "de": "geschwungen",
      "lv": "махавший"
    }
  },
  {
    "infinitiv": {
      "de": "schwören",
      "lv": "клясться • поклясться"
    },
    "praesens": {
      "de": "er schwört",
      "lv": "он клянётся"
    },
    "imperfektIndikativ": {
      "de": "er schwur / er schwor",
      "lv": "он клялся"
    },
    "imperfektKonjunktiv": {
      "de": "er schwöre",
      "lv": "он бы клялся"
    },
    "partizipVergangenheit": {
      "de": "geschworen",
      "lv": "поклявшийся"
    }
  },
  {
    "infinitiv": {
      "de": "sehen",
      "lv": "видеть • увидеть"
    },
    "praesens": {
      "de": "er sieht",
      "lv": "он видит"
    },
    "imperfektIndikativ": {
      "de": "er sah",
      "lv": "он видел"
    },
    "imperfektKonjunktiv": {
      "de": "er sähe",
      "lv": "он бы видел"
    },
    "partizipVergangenheit": {
      "de": "gesehen",
      "lv": "увиденный"
    }
  },
  {
    "infinitiv": {
      "de": "sein",
      "lv": "быть"
    },
    "praesens": {
      "de": "er ist",
      "lv": "он есть"
    },
    "imperfektIndikativ": {
      "de": "war",
      "lv": "он был"
    },
    "imperfektKonjunktiv": {
      "de": "war",
      "lv": "он бы был"
    },
    "partizipVergangenheit": {
      "de": "gewesen",
      "lv": "бывший"
    }
  },
  {
    "infinitiv": {
      "de": "senden",
      "lv": "отправлять • отправить"
    },
    "praesens": {
      "de": "er sendet",
      "lv": "он отправляет"
    },
    "imperfektIndikativ": {
      "de": "er sandte / er sendete",
      "lv": "он отправлял"
    },
    "imperfektKonjunktiv": {
      "de": "er sendete",
      "lv": "он бы отправлял"
    },
    "partizipVergangenheit": {
      "de": "gesandt / gesendet",
      "lv": "отправленный"
    }
  },
  {
    "infinitiv": {
      "de": "sieden",
      "lv": "варить • сварить"
    },
    "praesens": {
      "de": "er siedet",
      "lv": "он варит"
    },
    "imperfektIndikativ": {
      "de": "sott / siedete",
      "lv": "он варил"
    },
    "imperfektKonjunktiv": {
      "de": "sott / siedete",
      "lv": "он бы варил"
    },
    "partizipVergangenheit": {
      "de": "gesotten / gesiedet",
      "lv": "сваренный"
    }
  },
  {
    "infinitiv": {
      "de": "singen",
      "lv": "петь • спеть"
    },
    "praesens": {
      "de": "er singt",
      "lv": "он поёт"
    },
    "imperfektIndikativ": {
      "de": "er sang",
      "lv": "он пел"
    },
    "imperfektKonjunktiv": {
      "de": "er sänge",
      "lv": "он бы пел"
    },
    "partizipVergangenheit": {
      "de": "gesungen",
      "lv": "спетый"
    }
  },
  {
    "infinitiv": {
      "de": "sinken",
      "lv": "тонуть • утонуть"
    },
    "praesens": {
      "de": "er sinkt",
      "lv": "он тонет"
    },
    "imperfektIndikativ": {
      "de": "er sank",
      "lv": "он тонул"
    },
    "imperfektKonjunktiv": {
      "de": "er sänke",
      "lv": "он бы тонул"
    },
    "partizipVergangenheit": {
      "de": "gesunken (er ist)",
      "lv": "утонувший"
    }
  },
  {
    "infinitiv": {
      "de": "sinnen",
      "lv": "размышлять"
    },
    "praesens": {
      "de": "er sinnt",
      "lv": "он размышляет"
    },
    "imperfektIndikativ": {
      "de": "er sann",
      "lv": "он размышлял"
    },
    "imperfektKonjunktiv": {
      "de": "er sönne / er sänne",
      "lv": "он бы размышлял"
    },
    "partizipVergangenheit": {
      "de": "gesonnen",
      "lv": "размышлявший"
    }
  },
  {
    "infinitiv": {
      "de": "sitzen",
      "lv": "сидеть"
    },
    "praesens": {
      "de": "er sitzt",
      "lv": "он сидит"
    },
    "imperfektIndikativ": {
      "de": "er sass",
      "lv": "он сидел"
    },
    "imperfektKonjunktiv": {
      "de": "er säße",
      "lv": "он бы сидел"
    },
    "partizipVergangenheit": {
      "de": "gesessen",
      "lv": "сидевший"
    }
  },
  {
    "infinitiv": {
      "de": "sollen",
      "lv": "быть должным / быть обязанным"
    },
    "praesens": {
      "de": "er soll",
      "lv": "он должен / обязан"
    },
    "imperfektIndikativ": {
      "de": "sollte",
      "lv": "он должен был / был обязан"
    },
    "imperfektKonjunktiv": {
      "de": "sollte",
      "lv": "он должен был бы / был бы обязан"
    },
    "partizipVergangenheit": {
      "de": "gesollt",
      "lv": "он должен был / обязанный"
    }
  },
  {
    "infinitiv": {
      "de": "speien",
      "lv": "плевать"
    },
    "praesens": {
      "de": "er speit",
      "lv": "он плюёт"
    },
    "imperfektIndikativ": {
      "de": "er spie",
      "lv": "он плевал"
    },
    "imperfektKonjunktiv": {
      "de": "er spie",
      "lv": "он бы плевал"
    },
    "partizipVergangenheit": {
      "de": "gespien",
      "lv": "плевавший"
    }
  },
  {
    "infinitiv": {
      "de": "spinnen",
      "lv": "прясть • спрясть"
    },
    "praesens": {
      "de": "er spinnt",
      "lv": "он прядёт"
    },
    "imperfektIndikativ": {
      "de": "er spann",
      "lv": "он прял"
    },
    "imperfektKonjunktiv": {
      "de": "er spönne / er spänne",
      "lv": "он бы прял"
    },
    "partizipVergangenheit": {
      "de": "gesponnen",
      "lv": "спрядённый"
    }
  },
  {
    "infinitiv": {
      "de": "spleißen",
      "lv": "соединять • соединить"
    },
    "praesens": {
      "de": "er spleißt",
      "lv": "он соединяет"
    },
    "imperfektIndikativ": {
      "de": "spliss",
      "lv": "он соединял"
    },
    "imperfektKonjunktiv": {
      "de": "spliss",
      "lv": "он бы соединял"
    },
    "partizipVergangenheit": {
      "de": "gesplissen",
      "lv": "соединённый"
    }
  },
  {
    "infinitiv": {
      "de": "sprechen",
      "lv": "говорить"
    },
    "praesens": {
      "de": "er spricht",
      "lv": "он говорит"
    },
    "imperfektIndikativ": {
      "de": "er sprach",
      "lv": "он говорил"
    },
    "imperfektKonjunktiv": {
      "de": "er spräche",
      "lv": "он бы говорил"
    },
    "partizipVergangenheit": {
      "de": "gesprochen",
      "lv": "говоривший"
    }
  },
  {
    "infinitiv": {
      "de": "sprießen",
      "lv": "прорастать • прорасти"
    },
    "praesens": {
      "de": "er sprießt",
      "lv": "он прорастает"
    },
    "imperfektIndikativ": {
      "de": "er spross",
      "lv": "он прорастал"
    },
    "imperfektKonjunktiv": {
      "de": "er sprösse",
      "lv": "он бы прорастал"
    },
    "partizipVergangenheit": {
      "de": "gesprossen (er ist)",
      "lv": "проросший"
    }
  },
  {
    "infinitiv": {
      "de": "springen",
      "lv": "прыгать • прыгнуть"
    },
    "praesens": {
      "de": "er springt",
      "lv": "он прыгает"
    },
    "imperfektIndikativ": {
      "de": "er sprang",
      "lv": "он прыгал"
    },
    "imperfektKonjunktiv": {
      "de": "er spränge",
      "lv": "он бы прыгал"
    },
    "partizipVergangenheit": {
      "de": "gesprungen (er ist)",
      "lv": "прыгнувший"
    }
  },
  {
    "infinitiv": {
      "de": "stechen",
      "lv": "колоть • уколоть"
    },
    "praesens": {
      "de": "er sticht",
      "lv": "он колет"
    },
    "imperfektIndikativ": {
      "de": "er stach",
      "lv": "он колол"
    },
    "imperfektKonjunktiv": {
      "de": "er stäche",
      "lv": "он бы колол"
    },
    "partizipVergangenheit": {
      "de": "gestochen",
      "lv": "уколотый"
    }
  },
  {
    "infinitiv": {
      "de": "stecken",
      "lv": "засовывать • засунуть / втыкать • воткнуть"
    },
    "praesens": {
      "de": "er steckt",
      "lv": "он засовывает / втыкает"
    },
    "imperfektIndikativ": {
      "de": "stak / steckte",
      "lv": "он засовывал / втыкал"
    },
    "imperfektKonjunktiv": {
      "de": "stak / steckte",
      "lv": "он бы засовывал / втыкал"
    },
    "partizipVergangenheit": {
      "de": "gesteckt",
      "lv": "засунутый / воткнутый"
    }
  },
  {
    "infinitiv": {
      "de": "stehen",
      "lv": "стоять"
    },
    "praesens": {
      "de": "er steht",
      "lv": "он стоит"
    },
    "imperfektIndikativ": {
      "de": "er stand",
      "lv": "он стоял"
    },
    "imperfektKonjunktiv": {
      "de": "er stände / er stünde",
      "lv": "он бы стоял"
    },
    "partizipVergangenheit": {
      "de": "gestanden",
      "lv": "стоявший"
    }
  },
  {
    "infinitiv": {
      "de": "stehlen",
      "lv": "красть • украсть"
    },
    "praesens": {
      "de": "er stiehlt",
      "lv": "он крадёт"
    },
    "imperfektIndikativ": {
      "de": "er stahl",
      "lv": "он крал"
    },
    "imperfektKonjunktiv": {
      "de": "er stöhle / er stähle",
      "lv": "он бы крал"
    },
    "partizipVergangenheit": {
      "de": "gestohlen",
      "lv": "украденный"
    }
  },
  {
    "infinitiv": {
      "de": "steigen",
      "lv": "подниматься • подняться"
    },
    "praesens": {
      "de": "er steigt",
      "lv": "он поднимается"
    },
    "imperfektIndikativ": {
      "de": "er stieg",
      "lv": "он поднимался"
    },
    "imperfektKonjunktiv": {
      "de": "er stiege",
      "lv": "он бы поднимался"
    },
    "partizipVergangenheit": {
      "de": "gestiegen (er ist)",
      "lv": "поднявшийся"
    }
  },
  {
    "infinitiv": {
      "de": "sterben",
      "lv": "умирать • умереть"
    },
    "praesens": {
      "de": "er stirbt",
      "lv": "он умирает"
    },
    "imperfektIndikativ": {
      "de": "er starb",
      "lv": "он умирал"
    },
    "imperfektKonjunktiv": {
      "de": "er stürbe",
      "lv": "он бы умирал"
    },
    "partizipVergangenheit": {
      "de": "gestorben (er ist)",
      "lv": "умерший"
    }
  },
  {
    "infinitiv": {
      "de": "stinken",
      "lv": "дурно пахнуть"
    },
    "praesens": {
      "de": "es stinkt",
      "lv": "оно дурно пахнет"
    },
    "imperfektIndikativ": {
      "de": "stank",
      "lv": "оно дурно пахло"
    },
    "imperfektKonjunktiv": {
      "de": "stank",
      "lv": "оно бы дурно пахло"
    },
    "partizipVergangenheit": {
      "de": "gestunken",
      "lv": "дурно пахнувший"
    }
  },
  {
    "infinitiv": {
      "de": "stoßen",
      "lv": "толкать • толкнуть"
    },
    "praesens": {
      "de": "er stößt",
      "lv": "он толкает"
    },
    "imperfektIndikativ": {
      "de": "er stieß",
      "lv": "он толкал"
    },
    "imperfektKonjunktiv": {
      "de": "er stieße",
      "lv": "он бы толкал"
    },
    "partizipVergangenheit": {
      "de": "gestoßen",
      "lv": "толкнувший"
    }
  },
  {
    "infinitiv": {
      "de": "streichen",
      "lv": "красить • покрасить / вычёркивать • вычеркнуть"
    },
    "praesens": {
      "de": "er streicht",
      "lv": "он красит / вычёркивает"
    },
    "imperfektIndikativ": {
      "de": "er strich",
      "lv": "он красил / вычёркивал"
    },
    "imperfektKonjunktiv": {
      "de": "er striche",
      "lv": "он бы красил / вычёркивал"
    },
    "partizipVergangenheit": {
      "de": "gestrichen",
      "lv": "покрашенный / вычеркнутый"
    }
  },
  {
    "infinitiv": {
      "de": "streiten",
      "lv": "спорить • поспорить"
    },
    "praesens": {
      "de": "er streitet",
      "lv": "он спорит"
    },
    "imperfektIndikativ": {
      "de": "er stritt",
      "lv": "он спорил"
    },
    "imperfektKonjunktiv": {
      "de": "er stritte",
      "lv": "он бы спорил"
    },
    "partizipVergangenheit": {
      "de": "gestritten",
      "lv": "поспоривший"
    }
  },
  {
    "infinitiv": {
      "de": "tragen",
      "lv": "нести"
    },
    "praesens": {
      "de": "er trägt",
      "lv": "он несёт"
    },
    "imperfektIndikativ": {
      "de": "er trug",
      "lv": "он нёс"
    },
    "imperfektKonjunktiv": {
      "de": "er trüge",
      "lv": "он бы нёс"
    },
    "partizipVergangenheit": {
      "de": "getragen",
      "lv": "несённый"
    }
  },
  {
    "infinitiv": {
      "de": "treffen",
      "lv": "встречать • встретить"
    },
    "praesens": {
      "de": "er trifft",
      "lv": "он встречает"
    },
    "imperfektIndikativ": {
      "de": "er traf",
      "lv": "он встречал"
    },
    "imperfektKonjunktiv": {
      "de": "er träfe",
      "lv": "он бы встречал"
    },
    "partizipVergangenheit": {
      "de": "getroffen",
      "lv": "встреченный"
    }
  },
  {
    "infinitiv": {
      "de": "treiben",
      "lv": "гнать"
    },
    "praesens": {
      "de": "er treibt",
      "lv": "он гонит"
    },
    "imperfektIndikativ": {
      "de": "er trieb",
      "lv": "он гнал"
    },
    "imperfektKonjunktiv": {
      "de": "er triebe",
      "lv": "он бы гнал"
    },
    "partizipVergangenheit": {
      "de": "getrieben",
      "lv": "гнавший"
    }
  },
  {
    "infinitiv": {
      "de": "treten",
      "lv": "ступать • ступить / идти"
    },
    "praesens": {
      "de": "er tritt",
      "lv": "он ступает / идёт"
    },
    "imperfektIndikativ": {
      "de": "er trat",
      "lv": "он ступал / шёл"
    },
    "imperfektKonjunktiv": {
      "de": "er träte",
      "lv": "он бы ступал / шёл"
    },
    "partizipVergangenheit": {
      "de": "getreten (er ist)",
      "lv": "ступивший / шедший"
    }
  },
  {
    "infinitiv": {
      "de": "trinken",
      "lv": "пить • выпить"
    },
    "praesens": {
      "de": "er trinkt",
      "lv": "он пьёт"
    },
    "imperfektIndikativ": {
      "de": "er trank",
      "lv": "он пил"
    },
    "imperfektKonjunktiv": {
      "de": "er tränke",
      "lv": "он бы пил"
    },
    "partizipVergangenheit": {
      "de": "getrunken",
      "lv": "выпитый"
    }
  },
  {
    "infinitiv": {
      "de": "trügen",
      "lv": "обманывать • обмануть"
    },
    "praesens": {
      "de": "er trögt",
      "lv": "он обманывает"
    },
    "imperfektIndikativ": {
      "de": "er trog",
      "lv": "он обманывал"
    },
    "imperfektKonjunktiv": {
      "de": "er tröge",
      "lv": "он бы обманывал"
    },
    "partizipVergangenheit": {
      "de": "getrogen",
      "lv": "обманутый"
    }
  },
  {
    "infinitiv": {
      "de": "tun",
      "lv": "делать • сделать"
    },
    "praesens": {
      "de": "er tut",
      "lv": "он делает"
    },
    "imperfektIndikativ": {
      "de": "er tat",
      "lv": "он делал"
    },
    "imperfektKonjunktiv": {
      "de": "er täte",
      "lv": "он бы делал"
    },
    "partizipVergangenheit": {
      "de": "getan",
      "lv": "сделанный"
    }
  },
  {
    "infinitiv": {
      "de": "verderben",
      "lv": "портить • испортить"
    },
    "praesens": {
      "de": "er verdirbt",
      "lv": "он портит"
    },
    "imperfektIndikativ": {
      "de": "er verdarb",
      "lv": "он портил"
    },
    "imperfektKonjunktiv": {
      "de": "er verdürbe",
      "lv": "он бы портил"
    },
    "partizipVergangenheit": {
      "de": "verdorben",
      "lv": "испорченный"
    }
  },
  {
    "infinitiv": {
      "de": "verdrießen",
      "lv": "раздражать • раздражить"
    },
    "praesens": {
      "de": "er verdrießt",
      "lv": "он раздражает"
    },
    "imperfektIndikativ": {
      "de": "er verdross",
      "lv": "он раздражал"
    },
    "imperfektKonjunktiv": {
      "de": "er verdrösse",
      "lv": "он бы раздражал"
    },
    "partizipVergangenheit": {
      "de": "verdrossen",
      "lv": "раздражённый"
    }
  },
  {
    "infinitiv": {
      "de": "vergessen",
      "lv": "забывать • забыть"
    },
    "praesens": {
      "de": "er vergisst",
      "lv": "он забывает"
    },
    "imperfektIndikativ": {
      "de": "er vergass",
      "lv": "он забывал"
    },
    "imperfektKonjunktiv": {
      "de": "er vergäße",
      "lv": "он бы забывал"
    },
    "partizipVergangenheit": {
      "de": "vergessen",
      "lv": "забытый"
    }
  },
  {
    "infinitiv": {
      "de": "verlieren",
      "lv": "терять • потерять"
    },
    "praesens": {
      "de": "er verliert",
      "lv": "он теряет"
    },
    "imperfektIndikativ": {
      "de": "er verlor",
      "lv": "он терял"
    },
    "imperfektKonjunktiv": {
      "de": "er verlöre",
      "lv": "он бы терял"
    },
    "partizipVergangenheit": {
      "de": "verloren",
      "lv": "потерянный"
    }
  },
  {
    "infinitiv": {
      "de": "wachsen",
      "lv": "расти • вырасти"
    },
    "praesens": {
      "de": "er wächst",
      "lv": "он растёт"
    },
    "imperfektIndikativ": {
      "de": "er wuchs",
      "lv": "он рос"
    },
    "imperfektKonjunktiv": {
      "de": "er wüchse",
      "lv": "он бы рос"
    },
    "partizipVergangenheit": {
      "de": "gewachsen (er ist)",
      "lv": "выросший"
    }
  },
  {
    "infinitiv": {
      "de": "waschen",
      "lv": "мыть • вымыть"
    },
    "praesens": {
      "de": "er wäscht",
      "lv": "он моет"
    },
    "imperfektIndikativ": {
      "de": "er wusch",
      "lv": "он мыл"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsche",
      "lv": "он бы мыл"
    },
    "partizipVergangenheit": {
      "de": "gewaschen",
      "lv": "вымытый"
    }
  },
  {
    "infinitiv": {
      "de": "weben",
      "lv": "ткать • соткать"
    },
    "praesens": {
      "de": "er webt",
      "lv": "он ткёт"
    },
    "imperfektIndikativ": {
      "de": "wob",
      "lv": "он ткал"
    },
    "imperfektKonjunktiv": {
      "de": "wob",
      "lv": "он бы ткал"
    },
    "partizipVergangenheit": {
      "de": "gewoben",
      "lv": "сотканный"
    }
  },
  {
    "infinitiv": {
      "de": "weichen",
      "lv": "отступать • отступить"
    },
    "praesens": {
      "de": "er weicht",
      "lv": "он отступает"
    },
    "imperfektIndikativ": {
      "de": "er wich",
      "lv": "он отступал"
    },
    "imperfektKonjunktiv": {
      "de": "er wiche",
      "lv": "он бы отступал"
    },
    "partizipVergangenheit": {
      "de": "gewichen (er ist)",
      "lv": "отступивший"
    }
  },
  {
    "infinitiv": {
      "de": "weisen",
      "lv": "указывать • указать"
    },
    "praesens": {
      "de": "er weist",
      "lv": "он указывает"
    },
    "imperfektIndikativ": {
      "de": "er wies",
      "lv": "он указывал"
    },
    "imperfektKonjunktiv": {
      "de": "er wiese",
      "lv": "он бы указывал"
    },
    "partizipVergangenheit": {
      "de": "gewiesen",
      "lv": "указанный"
    }
  },
  {
    "infinitiv": {
      "de": "wenden",
      "lv": "поворачивать • повернуть / переворачивать • перевернуть"
    },
    "praesens": {
      "de": "er wendet",
      "lv": "он поворачивает / переворачивает"
    },
    "imperfektIndikativ": {
      "de": "er wandte / es wendete",
      "lv": "он поворачивал / переворачивал"
    },
    "imperfektKonjunktiv": {
      "de": "er wendete",
      "lv": "он бы поворачивал / переворачивал"
    },
    "partizipVergangenheit": {
      "de": "gewandt / gewendet",
      "lv": "повёрнутый / перевёрнутый"
    }
  },
  {
    "infinitiv": {
      "de": "werben",
      "lv": "сватать • посватать"
    },
    "praesens": {
      "de": "er wirbt",
      "lv": "он сватает"
    },
    "imperfektIndikativ": {
      "de": "er warb",
      "lv": "он сватал"
    },
    "imperfektKonjunktiv": {
      "de": "er würbe",
      "lv": "он бы сватал"
    },
    "partizipVergangenheit": {
      "de": "geworben",
      "lv": "посватанный"
    }
  },
  {
    "infinitiv": {
      "de": "werden",
      "lv": "становиться • стать"
    },
    "praesens": {
      "de": "er wird",
      "lv": "он становится"
    },
    "imperfektIndikativ": {
      "de": "wurde",
      "lv": "он становился"
    },
    "imperfektKonjunktiv": {
      "de": "wurde",
      "lv": "он бы становился"
    },
    "partizipVergangenheit": {
      "de": "geworden",
      "lv": "ставший"
    }
  },
  {
    "infinitiv": {
      "de": "werfen",
      "lv": "бросать • бросить"
    },
    "praesens": {
      "de": "er wirft",
      "lv": "он бросает"
    },
    "imperfektIndikativ": {
      "de": "er warf",
      "lv": "он бросал"
    },
    "imperfektKonjunktiv": {
      "de": "er würfe",
      "lv": "он бы бросал"
    },
    "partizipVergangenheit": {
      "de": "geworfen",
      "lv": "брошенный"
    }
  },
  {
    "infinitiv": {
      "de": "wiegen",
      "lv": "взвешивать • взвесить"
    },
    "praesens": {
      "de": "er wiegt",
      "lv": "он взвешивает"
    },
    "imperfektIndikativ": {
      "de": "er wog",
      "lv": "он взвешивал"
    },
    "imperfektKonjunktiv": {
      "de": "er wöge",
      "lv": "он бы взвешивал"
    },
    "partizipVergangenheit": {
      "de": "gewogen",
      "lv": "взвешенный"
    }
  },
  {
    "infinitiv": {
      "de": "winden",
      "lv": "вить • свить"
    },
    "praesens": {
      "de": "er windet",
      "lv": "он вьёт"
    },
    "imperfektIndikativ": {
      "de": "er wand",
      "lv": "он вил"
    },
    "imperfektKonjunktiv": {
      "de": "er wände",
      "lv": "он бы вил"
    },
    "partizipVergangenheit": {
      "de": "gewunden",
      "lv": "свитый"
    }
  },
  {
    "infinitiv": {
      "de": "wissen",
      "lv": "знать"
    },
    "praesens": {
      "de": "er weiß",
      "lv": "он знает"
    },
    "imperfektIndikativ": {
      "de": "er wusste",
      "lv": "он знал"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsste",
      "lv": "он бы знал"
    },
    "partizipVergangenheit": {
      "de": "gewusst",
      "lv": "знавший"
    }
  },
  {
    "infinitiv": {
      "de": "wollen",
      "lv": "хотеть"
    },
    "praesens": {
      "de": "er will",
      "lv": "он хочет"
    },
    "imperfektIndikativ": {
      "de": "wollte",
      "lv": "он хотел"
    },
    "imperfektKonjunktiv": {
      "de": "wollte",
      "lv": "он бы хотел"
    },
    "partizipVergangenheit": {
      "de": "gewollt",
      "lv": "хотевший"
    }
  },
  {
    "infinitiv": {
      "de": "wringen",
      "lv": "выжимать • выжать"
    },
    "praesens": {
      "de": "er wringt",
      "lv": "он выжимает"
    },
    "imperfektIndikativ": {
      "de": "wrang",
      "lv": "он выжимал"
    },
    "imperfektKonjunktiv": {
      "de": "wrang",
      "lv": "он бы выжимал"
    },
    "partizipVergangenheit": {
      "de": "gewrungen",
      "lv": "выжатый"
    }
  },
  {
    "infinitiv": {
      "de": "zeihen",
      "lv": "обвинять • обвинить"
    },
    "praesens": {
      "de": "er zeiht",
      "lv": "он обвиняет"
    },
    "imperfektIndikativ": {
      "de": "zieh",
      "lv": "он обвинял"
    },
    "imperfektKonjunktiv": {
      "de": "zieh",
      "lv": "он бы обвинял"
    },
    "partizipVergangenheit": {
      "de": "geziehen",
      "lv": "обвинённый"
    }
  },
  {
    "infinitiv": {
      "de": "ziehen",
      "lv": "тянуть"
    },
    "praesens": {
      "de": "er zieht",
      "lv": "он тянет"
    },
    "imperfektIndikativ": {
      "de": "er zog",
      "lv": "он тянул"
    },
    "imperfektKonjunktiv": {
      "de": "er zöge",
      "lv": "он бы тянул"
    },
    "partizipVergangenheit": {
      "de": "gezogen",
      "lv": "тянутый"
    }
  },
  {
    "infinitiv": {
      "de": "zwingen",
      "lv": "вынуждать • вынудить"
    },
    "praesens": {
      "de": "er zwingt",
      "lv": "он вынуждает"
    },
    "imperfektIndikativ": {
      "de": "er zwang",
      "lv": "он вынуждал"
    },
    "imperfektKonjunktiv": {
      "de": "er zwänge",
      "lv": "он бы вынуждал"
    },
    "partizipVergangenheit": {
      "de": "gezwungen",
      "lv": "вынужденный"
    }
  },
  {
    "infinitiv": {
      "de": "empfangen",
      "lv": "получать • получить"
    },
    "praesens": {
      "de": "er empfängt",
      "lv": "он получает"
    },
    "imperfektIndikativ": {
      "de": "er empfing",
      "lv": "он получал"
    },
    "imperfektKonjunktiv": {
      "de": "er empfinge",
      "lv": "он бы получал"
    },
    "partizipVergangenheit": {
      "de": "empfangen",
      "lv": "полученный"
    }
  },
  {
    "infinitiv": {
      "de": "erwägen",
      "lv": "обдумывать • обдумать"
    },
    "praesens": {
      "de": "er erwägt",
      "lv": "он обдумывает"
    },
    "imperfektIndikativ": {
      "de": "er erwog",
      "lv": "он обдумывал"
    },
    "imperfektKonjunktiv": {
      "de": "er erwöge",
      "lv": "он бы обдумывал"
    },
    "partizipVergangenheit": {
      "de": "erwogen",
      "lv": "обдуманный"
    }
  },
  {
    "infinitiv": {
      "de": "fechten",
      "lv": "сражаться • сразиться"
    },
    "praesens": {
      "de": "er ficht",
      "lv": "он сражается"
    },
    "imperfektIndikativ": {
      "de": "er focht",
      "lv": "он сражался"
    },
    "imperfektKonjunktiv": {
      "de": "er föchte",
      "lv": "он бы сражался"
    },
    "partizipVergangenheit": {
      "de": "gefochten",
      "lv": "сразившийся"
    }
  },
  {
    "infinitiv": {
      "de": "flechten",
      "lv": "плести • сплести"
    },
    "praesens": {
      "de": "er flicht",
      "lv": "он плетёт"
    },
    "imperfektIndikativ": {
      "de": "er flocht",
      "lv": "он плёл"
    },
    "imperfektKonjunktiv": {
      "de": "er flöchte",
      "lv": "он бы плёл"
    },
    "partizipVergangenheit": {
      "de": "geflochten",
      "lv": "сплетённый"
    }
  },
  {
    "infinitiv": {
      "de": "hangen",
      "lv": "висеть"
    },
    "praesens": {
      "de": "er hängt",
      "lv": "он висит"
    },
    "imperfektIndikativ": {
      "de": "er hing",
      "lv": "он висел"
    },
    "imperfektKonjunktiv": {
      "de": "er hinge",
      "lv": "он бы висел"
    },
    "partizipVergangenheit": {
      "de": "gehangen",
      "lv": "висевший"
    }
  },
  {
    "infinitiv": {
      "de": "spalten",
      "lv": "раскалывать • расколоть"
    },
    "praesens": {
      "de": "er spaltet",
      "lv": "он раскалывает"
    },
    "imperfektIndikativ": {
      "de": "er spaltete",
      "lv": "он раскалывал"
    },
    "imperfektKonjunktiv": {
      "de": "er spaltete",
      "lv": "он бы раскалывал"
    },
    "partizipVergangenheit": {
      "de": "gespalten",
      "lv": "расколотый"
    }
  },
  {
    "infinitiv": {
      "de": "verzeihen",
      "lv": "прощать • простить"
    },
    "praesens": {
      "de": "er verzeiht",
      "lv": "он прощает"
    },
    "imperfektIndikativ": {
      "de": "er verzieh",
      "lv": "он прощал"
    },
    "imperfektKonjunktiv": {
      "de": "er verziehe",
      "lv": "он бы прощал"
    },
    "partizipVergangenheit": {
      "de": "verziehen",
      "lv": "прощённый"
    }
  }
];

window.VERB_ENTRIES = VERB_ENTRIES;

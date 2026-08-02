const VERB_ENTRIES = [
  {
    "infinitiv": {
      "de": "backen",
      "lv": "To bake"
    },
    "praesens": {
      "de": "er bäckt",
      "lv": "He bakes"
    },
    "imperfektIndikativ": {
      "de": "er buk",
      "lv": "He was baking"
    },
    "imperfektKonjunktiv": {
      "de": "er büke",
      "lv": "He would bake"
    },
    "partizipVergangenheit": {
      "de": "gebacken",
      "lv": "Fried / baked"
    }
  },
  {
    "infinitiv": {
      "de": "befehlen",
      "lv": "To command"
    },
    "praesens": {
      "de": "er befiehlt",
      "lv": "He commands"
    },
    "imperfektIndikativ": {
      "de": "er befahl",
      "lv": "He commanded"
    },
    "imperfektKonjunktiv": {
      "de": "er beföhle",
      "lv": "He would command"
    },
    "partizipVergangenheit": {
      "de": "befohlen",
      "lv": "Commanded"
    }
  },
  {
    "infinitiv": {
      "de": "beginnen",
      "lv": "To start"
    },
    "praesens": {
      "de": "er beginnt",
      "lv": "He starts"
    },
    "imperfektIndikativ": {
      "de": "er begann",
      "lv": "He started"
    },
    "imperfektKonjunktiv": {
      "de": "er begönne / er begänne",
      "lv": "He would start"
    },
    "partizipVergangenheit": {
      "de": "begonnen",
      "lv": "Started"
    }
  },
  {
    "infinitiv": {
      "de": "beißen",
      "lv": "Bite"
    },
    "praesens": {
      "de": "er beißt",
      "lv": "He bites"
    },
    "imperfektIndikativ": {
      "de": "er biss",
      "lv": "He coded"
    },
    "imperfektKonjunktiv": {
      "de": "er bisse",
      "lv": "He bites"
    },
    "partizipVergangenheit": {
      "de": "gebissen",
      "lv": "Bitten / bitten"
    }
  },
  {
    "infinitiv": {
      "de": "bergen",
      "lv": "Hide"
    },
    "praesens": {
      "de": "er birgt",
      "lv": "He hides"
    },
    "imperfektIndikativ": {
      "de": "er barg",
      "lv": "He hid"
    },
    "imperfektKonjunktiv": {
      "de": "er bürge / er bärge",
      "lv": "He would hide"
    },
    "partizipVergangenheit": {
      "de": "geborgen",
      "lv": "Hidden / saved"
    }
  },
  {
    "infinitiv": {
      "de": "bersten",
      "lv": "Bursting"
    },
    "praesens": {
      "de": "er birst",
      "lv": "He bursts"
    },
    "imperfektIndikativ": {
      "de": "er barst / er borst",
      "lv": "He burst out"
    },
    "imperfektKonjunktiv": {
      "de": "er bärste / er börste",
      "lv": "He bursts"
    },
    "partizipVergangenheit": {
      "de": "geborsten (er ist)",
      "lv": "Broken"
    }
  },
  {
    "infinitiv": {
      "de": "bewegen",
      "lv": "To encourage"
    },
    "praesens": {
      "de": "er bewegt",
      "lv": "He prompts"
    },
    "imperfektIndikativ": {
      "de": "er bewog",
      "lv": "He urged"
    },
    "imperfektKonjunktiv": {
      "de": "er bewöge",
      "lv": "He would encourage"
    },
    "partizipVergangenheit": {
      "de": "bewogen",
      "lv": "Encouraged"
    }
  },
  {
    "infinitiv": {
      "de": "biegen",
      "lv": "Bend"
    },
    "praesens": {
      "de": "er biegt",
      "lv": "He bows"
    },
    "imperfektIndikativ": {
      "de": "er bog",
      "lv": "He flexed"
    },
    "imperfektKonjunktiv": {
      "de": "er böge",
      "lv": "He would bend"
    },
    "partizipVergangenheit": {
      "de": "gebogen",
      "lv": "Bent"
    }
  },
  {
    "infinitiv": {
      "de": "bieten",
      "lv": "To promise"
    },
    "praesens": {
      "de": "er bietet",
      "lv": "He promises"
    },
    "imperfektIndikativ": {
      "de": "er bot",
      "lv": "He promised"
    },
    "imperfektKonjunktiv": {
      "de": "er böte",
      "lv": "He would promise"
    },
    "partizipVergangenheit": {
      "de": "geboten",
      "lv": "Promised / offered"
    }
  },
  {
    "infinitiv": {
      "de": "binden",
      "lv": "Sieve"
    },
    "praesens": {
      "de": "er bindet",
      "lv": "He hay"
    },
    "imperfektIndikativ": {
      "de": "er band",
      "lv": "He sowed"
    },
    "imperfektKonjunktiv": {
      "de": "er bände",
      "lv": "He sieved"
    },
    "partizipVergangenheit": {
      "de": "gebunden",
      "lv": "Sieve"
    }
  },
  {
    "infinitiv": {
      "de": "bitten",
      "lv": "To ask"
    },
    "praesens": {
      "de": "er bittet",
      "lv": "He begs"
    },
    "imperfektIndikativ": {
      "de": "er bat",
      "lv": "He asked"
    },
    "imperfektKonjunktiv": {
      "de": "er bäte",
      "lv": "He would pray"
    },
    "partizipVergangenheit": {
      "de": "gebeten",
      "lv": "Requested"
    }
  },
  {
    "infinitiv": {
      "de": "blasen",
      "lv": "To blow"
    },
    "praesens": {
      "de": "er bläst",
      "lv": "He blows"
    },
    "imperfektIndikativ": {
      "de": "er blies",
      "lv": "He blew"
    },
    "imperfektKonjunktiv": {
      "de": "er bliese",
      "lv": "He would blow"
    },
    "partizipVergangenheit": {
      "de": "geblasen",
      "lv": "Blown"
    }
  },
  {
    "infinitiv": {
      "de": "gären",
      "lv": "To ferment"
    },
    "praesens": {
      "de": "es gärt",
      "lv": "It ferments"
    },
    "imperfektIndikativ": {
      "de": "es gor / es gärte",
      "lv": "It ferments"
    },
    "imperfektKonjunktiv": {
      "de": "es göre / es gärte",
      "lv": "It would be bitter"
    },
    "partizipVergangenheit": {
      "de": "gegoren / gegärt",
      "lv": "Rye"
    }
  },
  {
    "infinitiv": {
      "de": "gebären",
      "lv": "To give birth"
    },
    "praesens": {
      "de": "sie gebiert",
      "lv": "In her womb"
    },
    "imperfektIndikativ": {
      "de": "sie gebar",
      "lv": "She gave birth"
    },
    "imperfektKonjunktiv": {
      "de": "sie gebäre",
      "lv": "She would give birth"
    },
    "partizipVergangenheit": {
      "de": "geboren",
      "lv": "Born / was born"
    }
  },
  {
    "infinitiv": {
      "de": "gelingen",
      "lv": "Succeed"
    },
    "praesens": {
      "de": "es gelingt",
      "lv": "It succeeds"
    },
    "imperfektIndikativ": {
      "de": "es gelang",
      "lv": "It worked"
    },
    "imperfektKonjunktiv": {
      "de": "es gelänge",
      "lv": "It would work"
    },
    "partizipVergangenheit": {
      "de": "gelungen (es ist)",
      "lv": "Succeeded"
    }
  },
  {
    "infinitiv": {
      "de": "gelten",
      "lv": "Come in handy"
    },
    "praesens": {
      "de": "er gilt",
      "lv": "He fits / is valid"
    },
    "imperfektIndikativ": {
      "de": "er galt",
      "lv": "He fit / was fit"
    },
    "imperfektKonjunktiv": {
      "de": "er gölte / es gälte",
      "lv": "He would fit / it would fit"
    },
    "partizipVergangenheit": {
      "de": "gegolten",
      "lv": "Applied / was valid"
    }
  },
  {
    "infinitiv": {
      "de": "genesen",
      "lv": "Getting well"
    },
    "praesens": {
      "de": "er genest",
      "lv": "He is getting well"
    },
    "imperfektIndikativ": {
      "de": "er genas",
      "lv": "He got well"
    },
    "imperfektKonjunktiv": {
      "de": "er genäse",
      "lv": "He would get well"
    },
    "partizipVergangenheit": {
      "de": "genesen (er ist)",
      "lv": "Get well"
    }
  },
  {
    "infinitiv": {
      "de": "genießen",
      "lv": "To enjoy"
    },
    "praesens": {
      "de": "er genießt",
      "lv": "He enjoys"
    },
    "imperfektIndikativ": {
      "de": "er genoss",
      "lv": "He enjoyed"
    },
    "imperfektKonjunktiv": {
      "de": "er genösse",
      "lv": "He would enjoy"
    },
    "partizipVergangenheit": {
      "de": "genossen",
      "lv": "Enjoyed"
    }
  },
  {
    "infinitiv": {
      "de": "geschehen",
      "lv": "Happen"
    },
    "praesens": {
      "de": "es geschieht",
      "lv": "It happens"
    },
    "imperfektIndikativ": {
      "de": "es geschah",
      "lv": "It happened"
    },
    "imperfektKonjunktiv": {
      "de": "es geschähe",
      "lv": "It would happen"
    },
    "partizipVergangenheit": {
      "de": "geschehen (es ist)",
      "lv": "Happened"
    }
  },
  {
    "infinitiv": {
      "de": "gießen",
      "lv": "Lieut"
    },
    "praesens": {
      "de": "er gießt",
      "lv": "He pours"
    },
    "imperfektIndikativ": {
      "de": "er goss",
      "lv": "He poured"
    },
    "imperfektKonjunktiv": {
      "de": "er gösse",
      "lv": "He rains"
    },
    "partizipVergangenheit": {
      "de": "gegossen",
      "lv": "Thing"
    }
  },
  {
    "infinitiv": {
      "de": "gleichen",
      "lv": "To resemble"
    },
    "praesens": {
      "de": "er gleicht",
      "lv": "He resembles"
    },
    "imperfektIndikativ": {
      "de": "er glich",
      "lv": "He emulated"
    },
    "imperfektKonjunktiv": {
      "de": "er gliche",
      "lv": "He would emulate"
    },
    "partizipVergangenheit": {
      "de": "geglichen",
      "lv": "Resembled"
    }
  },
  {
    "infinitiv": {
      "de": "gleiten",
      "lv": "To slide"
    },
    "praesens": {
      "de": "er gleitet",
      "lv": "He slides"
    },
    "imperfektIndikativ": {
      "de": "er glitt",
      "lv": "He was sliding"
    },
    "imperfektKonjunktiv": {
      "de": "er glitte",
      "lv": "He would slide"
    },
    "partizipVergangenheit": {
      "de": "geglitten (er ist)",
      "lv": "Slipped"
    }
  },
  {
    "infinitiv": {
      "de": "glimmen",
      "lv": "Glowing"
    },
    "praesens": {
      "de": "er glimmt",
      "lv": "He glows"
    },
    "imperfektIndikativ": {
      "de": "er glimmte / glomm",
      "lv": "He glowed"
    },
    "imperfektKonjunktiv": {
      "de": "er glimmte",
      "lv": "He would glow"
    },
    "partizipVergangenheit": {
      "de": "geglimmt / geglommen",
      "lv": "Glowing"
    }
  },
  {
    "infinitiv": {
      "de": "graben",
      "lv": "To dig"
    },
    "praesens": {
      "de": "er gräbt",
      "lv": "He digs"
    },
    "imperfektIndikativ": {
      "de": "er grub",
      "lv": "He dug"
    },
    "imperfektKonjunktiv": {
      "de": "er grübe",
      "lv": "He would dig"
    },
    "partizipVergangenheit": {
      "de": "gegraben",
      "lv": "Dig"
    }
  },
  {
    "infinitiv": {
      "de": "greifen",
      "lv": "To catch"
    },
    "praesens": {
      "de": "er greift",
      "lv": "He catches"
    },
    "imperfektIndikativ": {
      "de": "er griff",
      "lv": "He caught"
    },
    "imperfektKonjunktiv": {
      "de": "er griffe",
      "lv": "He would catch"
    },
    "partizipVergangenheit": {
      "de": "gegriffen",
      "lv": "Caught / grabbed"
    }
  },
  {
    "infinitiv": {
      "de": "hauen",
      "lv": "To cut"
    },
    "praesens": {
      "de": "er haut",
      "lv": "He picked"
    },
    "imperfektIndikativ": {
      "de": "er hieb",
      "lv": "He snapped"
    },
    "imperfektKonjunktiv": {
      "de": "er hiebe",
      "lv": "He would carve"
    },
    "partizipVergangenheit": {
      "de": "gehauen",
      "lv": "Carved"
    }
  },
  {
    "infinitiv": {
      "de": "heben",
      "lv": "To raise"
    },
    "praesens": {
      "de": "er hebt",
      "lv": "He raises"
    },
    "imperfektIndikativ": {
      "de": "er hob",
      "lv": "He brought"
    },
    "imperfektKonjunktiv": {
      "de": "er höbe",
      "lv": "He would build"
    },
    "partizipVergangenheit": {
      "de": "gehoben",
      "lv": "Built"
    }
  },
  {
    "infinitiv": {
      "de": "kennen",
      "lv": "To know / to know"
    },
    "praesens": {
      "de": "er kennt",
      "lv": "He knows"
    },
    "imperfektIndikativ": {
      "de": "kannte",
      "lv": "Knew"
    },
    "imperfektKonjunktiv": {
      "de": "kannte",
      "lv": "Knew"
    },
    "partizipVergangenheit": {
      "de": "gekannt",
      "lv": "Acquaintance"
    }
  },
  {
    "infinitiv": {
      "de": "klingen",
      "lv": "To sound"
    },
    "praesens": {
      "de": "er klingt",
      "lv": "He sounds"
    },
    "imperfektIndikativ": {
      "de": "er klang",
      "lv": "He sounded"
    },
    "imperfektKonjunktiv": {
      "de": "er klänge",
      "lv": "He would sound"
    },
    "partizipVergangenheit": {
      "de": "geklungen",
      "lv": "Sounded"
    }
  },
  {
    "infinitiv": {
      "de": "kneifen",
      "lv": "Pinch"
    },
    "praesens": {
      "de": "er kneift",
      "lv": "He quips"
    },
    "imperfektIndikativ": {
      "de": "er kniff",
      "lv": "He pinched"
    },
    "imperfektKonjunktiv": {
      "de": "er kniffe",
      "lv": "He would pinch"
    },
    "partizipVergangenheit": {
      "de": "gekniffen",
      "lv": "Pinched"
    }
  },
  {
    "infinitiv": {
      "de": "bleiben",
      "lv": "Stay"
    },
    "praesens": {
      "de": "er bleibt",
      "lv": "He stays"
    },
    "imperfektIndikativ": {
      "de": "er blieb",
      "lv": "He stayed"
    },
    "imperfektKonjunktiv": {
      "de": "er bliebe",
      "lv": "He would stay"
    },
    "partizipVergangenheit": {
      "de": "geblieben (er ist)",
      "lv": "Left"
    }
  },
  {
    "infinitiv": {
      "de": "bleichen",
      "lv": "Whiten"
    },
    "praesens": {
      "de": "er bleicht",
      "lv": "He bleaches"
    },
    "imperfektIndikativ": {
      "de": "blich",
      "lv": "Bleached"
    },
    "imperfektKonjunktiv": {
      "de": "blich",
      "lv": "Bleached"
    },
    "partizipVergangenheit": {
      "de": "geblichen",
      "lv": "Bleached"
    }
  },
  {
    "infinitiv": {
      "de": "braten",
      "lv": "To bake"
    },
    "praesens": {
      "de": "er brät",
      "lv": "He bakes"
    },
    "imperfektIndikativ": {
      "de": "er briet",
      "lv": "He was baking"
    },
    "imperfektKonjunktiv": {
      "de": "er briete",
      "lv": "He would bake"
    },
    "partizipVergangenheit": {
      "de": "gebraten",
      "lv": "Fried / baked"
    }
  },
  {
    "infinitiv": {
      "de": "brechen",
      "lv": "To break"
    },
    "praesens": {
      "de": "er bricht",
      "lv": "He breaks"
    },
    "imperfektIndikativ": {
      "de": "er brach",
      "lv": "He broke"
    },
    "imperfektKonjunktiv": {
      "de": "er bräche",
      "lv": "He would break"
    },
    "partizipVergangenheit": {
      "de": "gebrochen",
      "lv": "Broken / broken"
    }
  },
  {
    "infinitiv": {
      "de": "brennen",
      "lv": "To burn"
    },
    "praesens": {
      "de": "er brennt",
      "lv": "He's on fire"
    },
    "imperfektIndikativ": {
      "de": "brannte",
      "lv": "Was burning"
    },
    "imperfektKonjunktiv": {
      "de": "brannte",
      "lv": "Was burning"
    },
    "partizipVergangenheit": {
      "de": "gebrannt",
      "lv": "Burned"
    }
  },
  {
    "infinitiv": {
      "de": "bringen",
      "lv": "Carry"
    },
    "praesens": {
      "de": "er bringt",
      "lv": "He carries"
    },
    "imperfektIndikativ": {
      "de": "er brachte",
      "lv": "He carried"
    },
    "imperfektKonjunktiv": {
      "de": "er brächte",
      "lv": "He would carry"
    },
    "partizipVergangenheit": {
      "de": "gebracht",
      "lv": "Brought / brought"
    }
  },
  {
    "infinitiv": {
      "de": "denken",
      "lv": "To think"
    },
    "praesens": {
      "de": "er denkt",
      "lv": "He thinks"
    },
    "imperfektIndikativ": {
      "de": "er dachte",
      "lv": "He thought"
    },
    "imperfektKonjunktiv": {
      "de": "er dächte",
      "lv": "He would think"
    },
    "partizipVergangenheit": {
      "de": "gedacht",
      "lv": "Intended"
    }
  },
  {
    "infinitiv": {
      "de": "dingen",
      "lv": "To hire / to agree"
    },
    "praesens": {
      "de": "er dingt",
      "lv": "He hires"
    },
    "imperfektIndikativ": {
      "de": "dingte",
      "lv": "Hired"
    },
    "imperfektKonjunktiv": {
      "de": "dingte",
      "lv": "Hired"
    },
    "partizipVergangenheit": {
      "de": "gedungen",
      "lv": "Hired"
    }
  },
  {
    "infinitiv": {
      "de": "dreschen",
      "lv": "Cult"
    },
    "praesens": {
      "de": "er drischt",
      "lv": "He threshes"
    },
    "imperfektIndikativ": {
      "de": "er drasch / er drosch",
      "lv": "He threshed"
    },
    "imperfektKonjunktiv": {
      "de": "er dräsche / er drösche",
      "lv": "He would worship"
    },
    "partizipVergangenheit": {
      "de": "gedroschen",
      "lv": "Cult"
    }
  },
  {
    "infinitiv": {
      "de": "dringen",
      "lv": "Break into"
    },
    "praesens": {
      "de": "er dringt",
      "lv": "He breaks in"
    },
    "imperfektIndikativ": {
      "de": "er drang",
      "lv": "He broke in"
    },
    "imperfektKonjunktiv": {
      "de": "er dränge",
      "lv": "He would break in"
    },
    "partizipVergangenheit": {
      "de": "gedrungen (er ist)",
      "lv": "Broke into"
    }
  },
  {
    "infinitiv": {
      "de": "dünken",
      "lv": "It seems"
    },
    "praesens": {
      "de": "es dünkt",
      "lv": "It seems"
    },
    "imperfektIndikativ": {
      "de": "deuchte",
      "lv": "It seemed"
    },
    "imperfektKonjunktiv": {
      "de": "deuchte",
      "lv": "It seemed"
    },
    "partizipVergangenheit": {
      "de": "gedünkt",
      "lv": "Seemed"
    }
  },
  {
    "infinitiv": {
      "de": "dürfen",
      "lv": "To be allowed"
    },
    "praesens": {
      "de": "er darf",
      "lv": "He can"
    },
    "imperfektIndikativ": {
      "de": "durfte",
      "lv": "Was allowed"
    },
    "imperfektKonjunktiv": {
      "de": "durfte",
      "lv": "Was allowed"
    },
    "partizipVergangenheit": {
      "de": "gedurft",
      "lv": "Allowed"
    }
  },
  {
    "infinitiv": {
      "de": "empfehlen",
      "lv": "Recommend"
    },
    "praesens": {
      "de": "er empfiehlt",
      "lv": "He suggests"
    },
    "imperfektIndikativ": {
      "de": "er empfahl",
      "lv": "He suggested"
    },
    "imperfektKonjunktiv": {
      "de": "er empfähle / er empföhle",
      "lv": "He would recommend"
    },
    "partizipVergangenheit": {
      "de": "empfohlen",
      "lv": "Recommended"
    }
  },
  {
    "infinitiv": {
      "de": "empfinden",
      "lv": "To feel"
    },
    "praesens": {
      "de": "er empfindet",
      "lv": "He feels"
    },
    "imperfektIndikativ": {
      "de": "er empfand",
      "lv": "He felt"
    },
    "imperfektKonjunktiv": {
      "de": "er empfände",
      "lv": "He would feel"
    },
    "partizipVergangenheit": {
      "de": "empfunden",
      "lv": "Felt"
    }
  },
  {
    "infinitiv": {
      "de": "erlöschen",
      "lv": "Fades out"
    },
    "praesens": {
      "de": "er erlischt",
      "lv": "He goes out"
    },
    "imperfektIndikativ": {
      "de": "er erlosch",
      "lv": "He went out"
    },
    "imperfektKonjunktiv": {
      "de": "er erlösche",
      "lv": "He would fade away"
    },
    "partizipVergangenheit": {
      "de": "erloschen (er ist)",
      "lv": "Extinguished"
    }
  },
  {
    "infinitiv": {
      "de": "erschrecken",
      "lv": "Get confused"
    },
    "praesens": {
      "de": "er erschrickt",
      "lv": "He gets scared"
    },
    "imperfektIndikativ": {
      "de": "er erschrak",
      "lv": "He got scared"
    },
    "imperfektKonjunktiv": {
      "de": "er erschräke",
      "lv": "He would freak out"
    },
    "partizipVergangenheit": {
      "de": "erschrocken (er ist)",
      "lv": "Scared"
    }
  },
  {
    "infinitiv": {
      "de": "essen",
      "lv": "To eat"
    },
    "praesens": {
      "de": "er isst",
      "lv": "He eats"
    },
    "imperfektIndikativ": {
      "de": "er ass",
      "lv": "He was eating"
    },
    "imperfektKonjunktiv": {
      "de": "er äße",
      "lv": "He would eat"
    },
    "partizipVergangenheit": {
      "de": "gegessen",
      "lv": "Eaten / eaten"
    }
  },
  {
    "infinitiv": {
      "de": "fahren",
      "lv": "Drive"
    },
    "praesens": {
      "de": "er fährt",
      "lv": "He drives"
    },
    "imperfektIndikativ": {
      "de": "er fuhr",
      "lv": "He was driving"
    },
    "imperfektKonjunktiv": {
      "de": "er führe",
      "lv": "He would drive"
    },
    "partizipVergangenheit": {
      "de": "gefahren (er ist)",
      "lv": "Drove / left"
    }
  },
  {
    "infinitiv": {
      "de": "fallen",
      "lv": "To fall"
    },
    "praesens": {
      "de": "er fällt",
      "lv": "He falls"
    },
    "imperfektIndikativ": {
      "de": "er fiel",
      "lv": "He fell"
    },
    "imperfektKonjunktiv": {
      "de": "er fiele",
      "lv": "He would fall"
    },
    "partizipVergangenheit": {
      "de": "gefallen (er ist)",
      "lv": "Fell"
    }
  },
  {
    "infinitiv": {
      "de": "fangen",
      "lv": "To catch"
    },
    "praesens": {
      "de": "er fängt",
      "lv": "He catches"
    },
    "imperfektIndikativ": {
      "de": "er fing",
      "lv": "He caught"
    },
    "imperfektKonjunktiv": {
      "de": "er finge",
      "lv": "He would catch"
    },
    "partizipVergangenheit": {
      "de": "gefangen",
      "lv": "Caught / caught"
    }
  },
  {
    "infinitiv": {
      "de": "finden",
      "lv": "To find"
    },
    "praesens": {
      "de": "er findet",
      "lv": "He finds"
    },
    "imperfektIndikativ": {
      "de": "er fand",
      "lv": "He found"
    },
    "imperfektKonjunktiv": {
      "de": "er fände",
      "lv": "He would find"
    },
    "partizipVergangenheit": {
      "de": "gefunden",
      "lv": "Found"
    }
  },
  {
    "infinitiv": {
      "de": "fliegen",
      "lv": "Let go"
    },
    "praesens": {
      "de": "er fliegt",
      "lv": "He flies"
    },
    "imperfektIndikativ": {
      "de": "er flog",
      "lv": "He flew"
    },
    "imperfektKonjunktiv": {
      "de": "er flöge",
      "lv": "He would fly"
    },
    "partizipVergangenheit": {
      "de": "geflogen (er ist)",
      "lv": "Has flown"
    }
  },
  {
    "infinitiv": {
      "de": "fliehen",
      "lv": "Run away"
    },
    "praesens": {
      "de": "er flieht",
      "lv": "He runs away"
    },
    "imperfektIndikativ": {
      "de": "er floh",
      "lv": "He ran away"
    },
    "imperfektKonjunktiv": {
      "de": "er flöhe",
      "lv": "He would run away"
    },
    "partizipVergangenheit": {
      "de": "geflohen (er ist)",
      "lv": "Ran away"
    }
  },
  {
    "infinitiv": {
      "de": "fließen",
      "lv": "To flow"
    },
    "praesens": {
      "de": "er fließt",
      "lv": "He runs"
    },
    "imperfektIndikativ": {
      "de": "er floss",
      "lv": "He ran"
    },
    "imperfektKonjunktiv": {
      "de": "er flösse",
      "lv": "He would run"
    },
    "partizipVergangenheit": {
      "de": "geflossen (er ist)",
      "lv": "Passed"
    }
  },
  {
    "infinitiv": {
      "de": "fressen",
      "lv": "Eat tomorrow"
    },
    "praesens": {
      "de": "er frisst",
      "lv": "He eats / swallows"
    },
    "imperfektIndikativ": {
      "de": "er frass",
      "lv": "He ate / swallowed"
    },
    "imperfektKonjunktiv": {
      "de": "er fräße",
      "lv": "He would eat / breakfast"
    },
    "partizipVergangenheit": {
      "de": "gefressen",
      "lv": "Eaten / morning"
    }
  },
  {
    "infinitiv": {
      "de": "frieren",
      "lv": "Cold"
    },
    "praesens": {
      "de": "er friert",
      "lv": "He is freezing"
    },
    "imperfektIndikativ": {
      "de": "er fror",
      "lv": "He island"
    },
    "imperfektKonjunktiv": {
      "de": "er fröre",
      "lv": "He was freezing"
    },
    "partizipVergangenheit": {
      "de": "gefroren",
      "lv": "Island"
    }
  },
  {
    "infinitiv": {
      "de": "geben",
      "lv": "To give"
    },
    "praesens": {
      "de": "er gibt",
      "lv": "He gives"
    },
    "imperfektIndikativ": {
      "de": "er gab",
      "lv": "He gave"
    },
    "imperfektKonjunktiv": {
      "de": "er gäbe",
      "lv": "He would give"
    },
    "partizipVergangenheit": {
      "de": "gegeben",
      "lv": "Given"
    }
  },
  {
    "infinitiv": {
      "de": "gedeihen",
      "lv": "Succeed"
    },
    "praesens": {
      "de": "er gedeiht",
      "lv": "He succeeds"
    },
    "imperfektIndikativ": {
      "de": "er gedieh",
      "lv": "He succeeded"
    },
    "imperfektKonjunktiv": {
      "de": "er gediehe",
      "lv": "He would succeed"
    },
    "partizipVergangenheit": {
      "de": "gediehen (er ist)",
      "lv": "Succeeded"
    }
  },
  {
    "infinitiv": {
      "de": "gehen",
      "lv": "Go"
    },
    "praesens": {
      "de": "er geht",
      "lv": "He goes"
    },
    "imperfektIndikativ": {
      "de": "er ging",
      "lv": "He walked"
    },
    "imperfektKonjunktiv": {
      "de": "er ginge",
      "lv": "He would go"
    },
    "partizipVergangenheit": {
      "de": "gegangen (er ist)",
      "lv": "Went"
    }
  },
  {
    "infinitiv": {
      "de": "gewinnen",
      "lv": "To obtain"
    },
    "praesens": {
      "de": "er gewinnt",
      "lv": "He gets"
    },
    "imperfektIndikativ": {
      "de": "er gewann",
      "lv": "He got"
    },
    "imperfektKonjunktiv": {
      "de": "er gewönne / er gewänne",
      "lv": "He would get"
    },
    "partizipVergangenheit": {
      "de": "gewonnen",
      "lv": "Obtained"
    }
  },
  {
    "infinitiv": {
      "de": "haben",
      "lv": "To be / to belong"
    },
    "praesens": {
      "de": "er hat",
      "lv": "He has"
    },
    "imperfektIndikativ": {
      "de": "hatte",
      "lv": "Was"
    },
    "imperfektKonjunktiv": {
      "de": "hatte",
      "lv": "Was"
    },
    "partizipVergangenheit": {
      "de": "gehabt",
      "lv": "Been"
    }
  },
  {
    "infinitiv": {
      "de": "halten",
      "lv": "Hold"
    },
    "praesens": {
      "de": "er hält",
      "lv": "He there"
    },
    "imperfektIndikativ": {
      "de": "er hielt",
      "lv": "He held"
    },
    "imperfektKonjunktiv": {
      "de": "er hielte",
      "lv": "He would hold"
    },
    "partizipVergangenheit": {
      "de": "gehalten",
      "lv": "Held"
    }
  },
  {
    "infinitiv": {
      "de": "heißen",
      "lv": "To call"
    },
    "praesens": {
      "de": "er heißt",
      "lv": "He calls / he is called"
    },
    "imperfektIndikativ": {
      "de": "er hieß",
      "lv": "He called / he was called"
    },
    "imperfektKonjunktiv": {
      "de": "er hieße",
      "lv": "He would call / he would be called"
    },
    "partizipVergangenheit": {
      "de": "geheißen",
      "lv": "Called"
    }
  },
  {
    "infinitiv": {
      "de": "helfen",
      "lv": "To help"
    },
    "praesens": {
      "de": "er hilft",
      "lv": "He helps"
    },
    "imperfektIndikativ": {
      "de": "er half",
      "lv": "He helped"
    },
    "imperfektKonjunktiv": {
      "de": "er hülfe / er hälfe",
      "lv": "He would help"
    },
    "partizipVergangenheit": {
      "de": "geholfen",
      "lv": "Helped"
    }
  },
  {
    "infinitiv": {
      "de": "kommen",
      "lv": "To come"
    },
    "praesens": {
      "de": "er kommt",
      "lv": "He is coming"
    },
    "imperfektIndikativ": {
      "de": "er kam",
      "lv": "He came"
    },
    "imperfektKonjunktiv": {
      "de": "er käme",
      "lv": "He would come"
    },
    "partizipVergangenheit": {
      "de": "gekommen (er ist)",
      "lv": "Has come"
    }
  },
  {
    "infinitiv": {
      "de": "können",
      "lv": "Be able to"
    },
    "praesens": {
      "de": "er kann",
      "lv": "He can"
    },
    "imperfektIndikativ": {
      "de": "konnte",
      "lv": "Could"
    },
    "imperfektKonjunktiv": {
      "de": "konnte",
      "lv": "Could"
    },
    "partizipVergangenheit": {
      "de": "gekonnt",
      "lv": "Could"
    }
  },
  {
    "infinitiv": {
      "de": "kriechen",
      "lv": "It's raining"
    },
    "praesens": {
      "de": "er kriecht",
      "lv": "He leans"
    },
    "imperfektIndikativ": {
      "de": "er kroch",
      "lv": "He rained"
    },
    "imperfektKonjunktiv": {
      "de": "er kröche",
      "lv": "He is raining"
    },
    "partizipVergangenheit": {
      "de": "gekrochen (er ist)",
      "lv": "Passed away"
    }
  },
  {
    "infinitiv": {
      "de": "laden",
      "lv": "To load, to invite"
    },
    "praesens": {
      "de": "er lädt",
      "lv": "He piles / invites"
    },
    "imperfektIndikativ": {
      "de": "er lud",
      "lv": "He loaded / invited"
    },
    "imperfektKonjunktiv": {
      "de": "er lüde",
      "lv": "He would load / invite"
    },
    "partizipVergangenheit": {
      "de": "geladen",
      "lv": "Loaded / invited"
    }
  },
  {
    "infinitiv": {
      "de": "lassen",
      "lv": "To put, to let"
    },
    "praesens": {
      "de": "er lässt",
      "lv": "He puts / lets"
    },
    "imperfektIndikativ": {
      "de": "er ließ",
      "lv": "He ordered / allowed"
    },
    "imperfektKonjunktiv": {
      "de": "er ließe",
      "lv": "He would put / let"
    },
    "partizipVergangenheit": {
      "de": "gelassen",
      "lv": "Put / allowed"
    }
  },
  {
    "infinitiv": {
      "de": "laufen",
      "lv": "To run"
    },
    "praesens": {
      "de": "er läuft",
      "lv": "He is running"
    },
    "imperfektIndikativ": {
      "de": "er lief",
      "lv": "He ran"
    },
    "imperfektKonjunktiv": {
      "de": "er liefe",
      "lv": "He would run"
    },
    "partizipVergangenheit": {
      "de": "gelaufen (er ist)",
      "lv": "Ran"
    }
  },
  {
    "infinitiv": {
      "de": "leiden",
      "lv": "To suffer"
    },
    "praesens": {
      "de": "er leidet",
      "lv": "He suffers"
    },
    "imperfektIndikativ": {
      "de": "er litt",
      "lv": "He suffered"
    },
    "imperfektKonjunktiv": {
      "de": "er litte",
      "lv": "He would suffer"
    },
    "partizipVergangenheit": {
      "de": "gelitten",
      "lv": "Suffered"
    }
  },
  {
    "infinitiv": {
      "de": "leihen",
      "lv": "Lend / borrow"
    },
    "praesens": {
      "de": "er leiht",
      "lv": "He lends / borrows"
    },
    "imperfektIndikativ": {
      "de": "er lieh",
      "lv": "He lent / borrowed"
    },
    "imperfektKonjunktiv": {
      "de": "er liehe",
      "lv": "He would lend / borrow"
    },
    "partizipVergangenheit": {
      "de": "geliehen",
      "lv": "Lent / borrowed"
    }
  },
  {
    "infinitiv": {
      "de": "lesen",
      "lv": "To read"
    },
    "praesens": {
      "de": "er liest",
      "lv": "He is reading"
    },
    "imperfektIndikativ": {
      "de": "er las",
      "lv": "He was reading"
    },
    "imperfektKonjunktiv": {
      "de": "er läse",
      "lv": "He would read"
    },
    "partizipVergangenheit": {
      "de": "gelesen",
      "lv": "Read"
    }
  },
  {
    "infinitiv": {
      "de": "liegen",
      "lv": "To sleep"
    },
    "praesens": {
      "de": "er liegt",
      "lv": "He is sleeping"
    },
    "imperfektIndikativ": {
      "de": "er lag",
      "lv": "He was sleeping"
    },
    "imperfektKonjunktiv": {
      "de": "er läge",
      "lv": "He would sleep"
    },
    "partizipVergangenheit": {
      "de": "gelegen",
      "lv": "Slept"
    }
  },
  {
    "infinitiv": {
      "de": "lügen",
      "lv": "To lie"
    },
    "praesens": {
      "de": "er lügt",
      "lv": "He is lying"
    },
    "imperfektIndikativ": {
      "de": "er log",
      "lv": "He lied"
    },
    "imperfektKonjunktiv": {
      "de": "er löge",
      "lv": "He would lie"
    },
    "partizipVergangenheit": {
      "de": "gelogen",
      "lv": "Lied to"
    }
  },
  {
    "infinitiv": {
      "de": "mahlen",
      "lv": "Ground"
    },
    "praesens": {
      "de": "er mahlt",
      "lv": "He grinds"
    },
    "imperfektIndikativ": {
      "de": "er mahlte",
      "lv": "He edge"
    },
    "imperfektKonjunktiv": {
      "de": "er malte",
      "lv": "He grinds"
    },
    "partizipVergangenheit": {
      "de": "gemahlen",
      "lv": "Ground"
    }
  },
  {
    "infinitiv": {
      "de": "meiden",
      "lv": "Avoid"
    },
    "praesens": {
      "de": "er meidet",
      "lv": "He avoids"
    },
    "imperfektIndikativ": {
      "de": "er mied",
      "lv": "He avoided"
    },
    "imperfektKonjunktiv": {
      "de": "er miede",
      "lv": "He would avoid"
    },
    "partizipVergangenheit": {
      "de": "gemieden",
      "lv": "Avoided"
    }
  },
  {
    "infinitiv": {
      "de": "melken",
      "lv": "To milk"
    },
    "praesens": {
      "de": "er milkt / er melkt",
      "lv": "He sweeps"
    },
    "imperfektIndikativ": {
      "de": "er molk / er melkte",
      "lv": "He swept"
    },
    "imperfektKonjunktiv": {
      "de": "er mölke / er melkte",
      "lv": "He would milk"
    },
    "partizipVergangenheit": {
      "de": "gemolken / gemelkt",
      "lv": "Milked"
    }
  },
  {
    "infinitiv": {
      "de": "messen",
      "lv": "To measure"
    },
    "praesens": {
      "de": "er misst",
      "lv": "He measures"
    },
    "imperfektIndikativ": {
      "de": "er mass",
      "lv": "He measured"
    },
    "imperfektKonjunktiv": {
      "de": "er mäße",
      "lv": "He would measure"
    },
    "partizipVergangenheit": {
      "de": "gemessen",
      "lv": "Measured"
    }
  },
  {
    "infinitiv": {
      "de": "misslingen",
      "lv": "To fail"
    },
    "praesens": {
      "de": "es misslingt",
      "lv": "It fails"
    },
    "imperfektIndikativ": {
      "de": "misslang",
      "lv": "Failed"
    },
    "imperfektKonjunktiv": {
      "de": "misslang",
      "lv": "Failed"
    },
    "partizipVergangenheit": {
      "de": "misslungen",
      "lv": "Failed"
    }
  },
  {
    "infinitiv": {
      "de": "mögen",
      "lv": "To like"
    },
    "praesens": {
      "de": "er mag",
      "lv": "He likes"
    },
    "imperfektIndikativ": {
      "de": "mochte",
      "lv": "Liked it"
    },
    "imperfektKonjunktiv": {
      "de": "mochte",
      "lv": "Liked it"
    },
    "partizipVergangenheit": {
      "de": "gemocht",
      "lv": "Liked"
    }
  },
  {
    "infinitiv": {
      "de": "müssen",
      "lv": "To need"
    },
    "praesens": {
      "de": "er muss",
      "lv": "He needs"
    },
    "imperfektIndikativ": {
      "de": "musste",
      "lv": "Should have"
    },
    "imperfektKonjunktiv": {
      "de": "musste",
      "lv": "Should have"
    },
    "partizipVergangenheit": {
      "de": "gemusst",
      "lv": "Needed"
    }
  },
  {
    "infinitiv": {
      "de": "nehmen",
      "lv": "To take"
    },
    "praesens": {
      "de": "er nimmt",
      "lv": "He takes"
    },
    "imperfektIndikativ": {
      "de": "er nahm",
      "lv": "He took"
    },
    "imperfektKonjunktiv": {
      "de": "er nähme",
      "lv": "He would take"
    },
    "partizipVergangenheit": {
      "de": "genommen",
      "lv": "Taken"
    }
  },
  {
    "infinitiv": {
      "de": "nennen",
      "lv": "To name"
    },
    "praesens": {
      "de": "er nennt",
      "lv": "He named"
    },
    "imperfektIndikativ": {
      "de": "er nannte",
      "lv": "He called"
    },
    "imperfektKonjunktiv": {
      "de": "er nennte",
      "lv": "He would name"
    },
    "partizipVergangenheit": {
      "de": "genannt",
      "lv": "Named"
    }
  },
  {
    "infinitiv": {
      "de": "pfeifen",
      "lv": "To whistle"
    },
    "praesens": {
      "de": "er pfeift",
      "lv": "He whistles"
    },
    "imperfektIndikativ": {
      "de": "er pfiff",
      "lv": "He whistled"
    },
    "imperfektKonjunktiv": {
      "de": "er pfiffe",
      "lv": "He would whistle"
    },
    "partizipVergangenheit": {
      "de": "gepfiffen",
      "lv": "Whistled"
    }
  },
  {
    "infinitiv": {
      "de": "pflegen",
      "lv": "Maintain"
    },
    "praesens": {
      "de": "er pflegt",
      "lv": "He cares"
    },
    "imperfektIndikativ": {
      "de": "pflegte vai pflog",
      "lv": "Set"
    },
    "imperfektKonjunktiv": {
      "de": "pflegte vai pflog",
      "lv": "Set"
    },
    "partizipVergangenheit": {
      "de": "gepflegt vai gepflogen",
      "lv": "Groomed"
    }
  },
  {
    "infinitiv": {
      "de": "preisen",
      "lv": "Praise"
    },
    "praesens": {
      "de": "er preist",
      "lv": "He praises"
    },
    "imperfektIndikativ": {
      "de": "er pries",
      "lv": "He praised"
    },
    "imperfektKonjunktiv": {
      "de": "er priese",
      "lv": "He would praise"
    },
    "partizipVergangenheit": {
      "de": "gepriesen",
      "lv": "Praised"
    }
  },
  {
    "infinitiv": {
      "de": "quellen",
      "lv": "Plump up"
    },
    "praesens": {
      "de": "er quillt",
      "lv": "He is getting fat"
    },
    "imperfektIndikativ": {
      "de": "er quoll",
      "lv": "He matured"
    },
    "imperfektKonjunktiv": {
      "de": "er quölle",
      "lv": "He fat"
    },
    "partizipVergangenheit": {
      "de": "gequollen (er ist)",
      "lv": "Swollen"
    }
  },
  {
    "infinitiv": {
      "de": "raten",
      "lv": "Suggest / mention"
    },
    "praesens": {
      "de": "er rät",
      "lv": "He recommends / min"
    },
    "imperfektIndikativ": {
      "de": "er riet",
      "lv": "He suggested / suggested"
    },
    "imperfektKonjunktiv": {
      "de": "er riete",
      "lv": "He would suggest / mention"
    },
    "partizipVergangenheit": {
      "de": "geraten",
      "lv": "Suggested / mentioned"
    }
  },
  {
    "infinitiv": {
      "de": "reiben",
      "lv": "To rub"
    },
    "praesens": {
      "de": "er reibt",
      "lv": "He rubs"
    },
    "imperfektIndikativ": {
      "de": "er rieb",
      "lv": "He rubs"
    },
    "imperfektKonjunktiv": {
      "de": "er riebe",
      "lv": "He would rub"
    },
    "partizipVergangenheit": {
      "de": "gerieben",
      "lv": "Rubbed"
    }
  },
  {
    "infinitiv": {
      "de": "reißen",
      "lv": "Pull"
    },
    "praesens": {
      "de": "er reißt",
      "lv": "He snaps"
    },
    "imperfektIndikativ": {
      "de": "er riss",
      "lv": "He snapped"
    },
    "imperfektKonjunktiv": {
      "de": "er risse",
      "lv": "He snapped"
    },
    "partizipVergangenheit": {
      "de": "gerissen",
      "lv": "Torn"
    }
  },
  {
    "infinitiv": {
      "de": "reiten",
      "lv": "To ride"
    },
    "praesens": {
      "de": "er reitet",
      "lv": "He rides"
    },
    "imperfektIndikativ": {
      "de": "er ritt",
      "lv": "He rode"
    },
    "imperfektKonjunktiv": {
      "de": "er ritte",
      "lv": "He would ride"
    },
    "partizipVergangenheit": {
      "de": "geritten (er ist)",
      "lv": "Rode"
    }
  },
  {
    "infinitiv": {
      "de": "rennen",
      "lv": "To run"
    },
    "praesens": {
      "de": "er rennt",
      "lv": "He is running"
    },
    "imperfektIndikativ": {
      "de": "er rannte",
      "lv": "He ran"
    },
    "imperfektKonjunktiv": {
      "de": "er rennte",
      "lv": "He would run"
    },
    "partizipVergangenheit": {
      "de": "gerannt",
      "lv": "Ran"
    }
  },
  {
    "infinitiv": {
      "de": "riechen",
      "lv": "Ost"
    },
    "praesens": {
      "de": "er riecht",
      "lv": "He smells"
    },
    "imperfektIndikativ": {
      "de": "er roch",
      "lv": "He sings"
    },
    "imperfektKonjunktiv": {
      "de": "er röche",
      "lv": "He port"
    },
    "partizipVergangenheit": {
      "de": "gerochen",
      "lv": "Port"
    }
  },
  {
    "infinitiv": {
      "de": "ringen",
      "lv": "To break"
    },
    "praesens": {
      "de": "er ringt",
      "lv": "He breaks"
    },
    "imperfektIndikativ": {
      "de": "er rang",
      "lv": "He broke down"
    },
    "imperfektKonjunktiv": {
      "de": "er ränge",
      "lv": "He would break"
    },
    "partizipVergangenheit": {
      "de": "gerungen",
      "lv": "Wait"
    }
  },
  {
    "infinitiv": {
      "de": "rinnen",
      "lv": "To flow"
    },
    "praesens": {
      "de": "er rinnt",
      "lv": "He runs"
    },
    "imperfektIndikativ": {
      "de": "er rann",
      "lv": "He ran"
    },
    "imperfektKonjunktiv": {
      "de": "er ränne / er rönne",
      "lv": "He would run"
    },
    "partizipVergangenheit": {
      "de": "geronnen (er ist)",
      "lv": "Flowed / coagulated"
    }
  },
  {
    "infinitiv": {
      "de": "rufen",
      "lv": "To call"
    },
    "praesens": {
      "de": "er ruft",
      "lv": "He calls"
    },
    "imperfektIndikativ": {
      "de": "er rief",
      "lv": "He called"
    },
    "imperfektKonjunktiv": {
      "de": "er riefe",
      "lv": "He would call"
    },
    "partizipVergangenheit": {
      "de": "gerufen",
      "lv": "Called"
    }
  },
  {
    "infinitiv": {
      "de": "salzen",
      "lv": "To salt"
    },
    "praesens": {
      "de": "er salzt",
      "lv": "He salted"
    },
    "imperfektIndikativ": {
      "de": "er salzte",
      "lv": "He salted"
    },
    "imperfektKonjunktiv": {
      "de": "er salzte",
      "lv": "He would salt"
    },
    "partizipVergangenheit": {
      "de": "gesalzen",
      "lv": "Salted"
    }
  },
  {
    "infinitiv": {
      "de": "saufen",
      "lv": "Dry / drink"
    },
    "praesens": {
      "de": "er säuft",
      "lv": "He is drinking / drinking"
    },
    "imperfektIndikativ": {
      "de": "er soff",
      "lv": "He drank / drank"
    },
    "imperfektKonjunktiv": {
      "de": "er söffe",
      "lv": "He would drink / drink"
    },
    "partizipVergangenheit": {
      "de": "gesoffen",
      "lv": "Drunk"
    }
  },
  {
    "infinitiv": {
      "de": "saugen",
      "lv": "Suck"
    },
    "praesens": {
      "de": "er saugt",
      "lv": "He sucks"
    },
    "imperfektIndikativ": {
      "de": "er sog",
      "lv": "He sucked"
    },
    "imperfektKonjunktiv": {
      "de": "er söge",
      "lv": "He would suck"
    },
    "partizipVergangenheit": {
      "de": "gesogen",
      "lv": "Sucked"
    }
  },
  {
    "infinitiv": {
      "de": "schaffen",
      "lv": "To create"
    },
    "praesens": {
      "de": "er schafft",
      "lv": "He creates"
    },
    "imperfektIndikativ": {
      "de": "er schuf",
      "lv": "He created"
    },
    "imperfektKonjunktiv": {
      "de": "er schüfe",
      "lv": "He would create"
    },
    "partizipVergangenheit": {
      "de": "geschaffen",
      "lv": "Created"
    }
  },
  {
    "infinitiv": {
      "de": "schallen",
      "lv": "To sound"
    },
    "praesens": {
      "de": "es schallt",
      "lv": "It sounds"
    },
    "imperfektIndikativ": {
      "de": "schallte vai scholl",
      "lv": "Sounded"
    },
    "imperfektKonjunktiv": {
      "de": "schallte vai scholl",
      "lv": "Sounded"
    },
    "partizipVergangenheit": {
      "de": "geschallt",
      "lv": "Sounded"
    }
  },
  {
    "infinitiv": {
      "de": "scheiden",
      "lv": "Divorce / break up"
    },
    "praesens": {
      "de": "er scheidet",
      "lv": "He is divorcing / divorcing"
    },
    "imperfektIndikativ": {
      "de": "er schied",
      "lv": "He divorced / divorced"
    },
    "imperfektKonjunktiv": {
      "de": "er schiede",
      "lv": "He would divorce / divorce"
    },
    "partizipVergangenheit": {
      "de": "geschieden (er hat / er ist)",
      "lv": "Separated / divorced"
    }
  },
  {
    "infinitiv": {
      "de": "scheinen",
      "lv": "Shine / appear"
    },
    "praesens": {
      "de": "er scheint",
      "lv": "He shines / seems"
    },
    "imperfektIndikativ": {
      "de": "er schien",
      "lv": "He shone / seemed"
    },
    "imperfektKonjunktiv": {
      "de": "er schiene",
      "lv": "He would shine / seem"
    },
    "partizipVergangenheit": {
      "de": "geschienen",
      "lv": "Shone / seemed"
    }
  },
  {
    "infinitiv": {
      "de": "schelten",
      "lv": "Bart"
    },
    "praesens": {
      "de": "er schilt",
      "lv": "He scolds"
    },
    "imperfektIndikativ": {
      "de": "er schalt",
      "lv": "He barred"
    },
    "imperfektKonjunktiv": {
      "de": "er schölte / er schälte",
      "lv": "He shaves"
    },
    "partizipVergangenheit": {
      "de": "gescholten",
      "lv": "Beard"
    }
  },
  {
    "infinitiv": {
      "de": "scheren",
      "lv": "To cut"
    },
    "praesens": {
      "de": "er schert",
      "lv": "He is cutting"
    },
    "imperfektIndikativ": {
      "de": "schor vai scherte",
      "lv": "Scissors"
    },
    "imperfektKonjunktiv": {
      "de": "schor vai scherte",
      "lv": "Scissors"
    },
    "partizipVergangenheit": {
      "de": "geschoren vai geschert",
      "lv": "Cropped"
    }
  },
  {
    "infinitiv": {
      "de": "schieben",
      "lv": "To push"
    },
    "praesens": {
      "de": "er schiebt",
      "lv": "He pushes"
    },
    "imperfektIndikativ": {
      "de": "er schob",
      "lv": "He pushed"
    },
    "imperfektKonjunktiv": {
      "de": "er schöbe",
      "lv": "He would push"
    },
    "partizipVergangenheit": {
      "de": "geschoben",
      "lv": "Pushed"
    }
  },
  {
    "infinitiv": {
      "de": "schießen",
      "lv": "To shoot"
    },
    "praesens": {
      "de": "er schießt",
      "lv": "He shoots"
    },
    "imperfektIndikativ": {
      "de": "er schoss",
      "lv": "He shot"
    },
    "imperfektKonjunktiv": {
      "de": "er schösse",
      "lv": "He would shoot"
    },
    "partizipVergangenheit": {
      "de": "geschossen",
      "lv": "Shot"
    }
  },
  {
    "infinitiv": {
      "de": "schinden",
      "lv": "Torment"
    },
    "praesens": {
      "de": "er schindet",
      "lv": "He torments"
    },
    "imperfektIndikativ": {
      "de": "schindete",
      "lv": "Tormented"
    },
    "imperfektKonjunktiv": {
      "de": "schindete",
      "lv": "Tormented"
    },
    "partizipVergangenheit": {
      "de": "geschunden",
      "lv": "Tormented"
    }
  },
  {
    "infinitiv": {
      "de": "schlafen",
      "lv": "To sleep"
    },
    "praesens": {
      "de": "er schläft",
      "lv": "He is sleeping"
    },
    "imperfektIndikativ": {
      "de": "er schlief",
      "lv": "He was sleeping"
    },
    "imperfektKonjunktiv": {
      "de": "er schliefe",
      "lv": "He would sleep"
    },
    "partizipVergangenheit": {
      "de": "geschlafen",
      "lv": "Slept"
    }
  },
  {
    "infinitiv": {
      "de": "schlagen",
      "lv": "Hit"
    },
    "praesens": {
      "de": "er schlägt",
      "lv": "He hits"
    },
    "imperfektIndikativ": {
      "de": "er schlug",
      "lv": "He hit"
    },
    "imperfektKonjunktiv": {
      "de": "er schlüge",
      "lv": "He would hit"
    },
    "partizipVergangenheit": {
      "de": "geschlagen",
      "lv": "Beaten"
    }
  },
  {
    "infinitiv": {
      "de": "schleichen",
      "lv": "It's raining"
    },
    "praesens": {
      "de": "er schleicht",
      "lv": "He leans"
    },
    "imperfektIndikativ": {
      "de": "er schlich",
      "lv": "He rained"
    },
    "imperfektKonjunktiv": {
      "de": "er schliche",
      "lv": "He is raining"
    },
    "partizipVergangenheit": {
      "de": "geschlichen (er ist)",
      "lv": "Passed away"
    }
  },
  {
    "infinitiv": {
      "de": "schleifen",
      "lv": "To grind"
    },
    "praesens": {
      "de": "er schleift",
      "lv": "He grinds"
    },
    "imperfektIndikativ": {
      "de": "er schliff",
      "lv": "He grinded"
    },
    "imperfektKonjunktiv": {
      "de": "er schliffe",
      "lv": "He would grind"
    },
    "partizipVergangenheit": {
      "de": "geschliffen",
      "lv": "Polished"
    }
  },
  {
    "infinitiv": {
      "de": "schließen",
      "lv": "To close"
    },
    "praesens": {
      "de": "er schließt",
      "lv": "He closes"
    },
    "imperfektIndikativ": {
      "de": "er schloss",
      "lv": "He closed"
    },
    "imperfektKonjunktiv": {
      "de": "er schlösse",
      "lv": "He would close"
    },
    "partizipVergangenheit": {
      "de": "geschlossen",
      "lv": "Closed"
    }
  },
  {
    "infinitiv": {
      "de": "schlingen",
      "lv": "Tomorrow"
    },
    "praesens": {
      "de": "er schlingt",
      "lv": "He swallows"
    },
    "imperfektIndikativ": {
      "de": "er schlang",
      "lv": "He swallowed"
    },
    "imperfektKonjunktiv": {
      "de": "er schlänge",
      "lv": "He morning"
    },
    "partizipVergangenheit": {
      "de": "geschlungen",
      "lv": "The morning"
    }
  },
  {
    "infinitiv": {
      "de": "schmeißen",
      "lv": "Throw"
    },
    "praesens": {
      "de": "er schmeißt",
      "lv": "He throws"
    },
    "imperfektIndikativ": {
      "de": "er schmiss",
      "lv": "He threw"
    },
    "imperfektKonjunktiv": {
      "de": "er schmisse",
      "lv": "He threw"
    },
    "partizipVergangenheit": {
      "de": "geschmissen",
      "lv": "Thrown"
    }
  },
  {
    "infinitiv": {
      "de": "schmelzen",
      "lv": "Moving"
    },
    "praesens": {
      "de": "er schmilzt",
      "lv": "He melts"
    },
    "imperfektIndikativ": {
      "de": "er schmolz",
      "lv": "He moaned"
    },
    "imperfektKonjunktiv": {
      "de": "er schmölze",
      "lv": "He was moving"
    },
    "partizipVergangenheit": {
      "de": "geschmolzen (er ist)",
      "lv": "Melted"
    }
  },
  {
    "infinitiv": {
      "de": "schnauben",
      "lv": "To hiss"
    },
    "praesens": {
      "de": "er schnaubt",
      "lv": "He snorts"
    },
    "imperfektIndikativ": {
      "de": "schnaubte vai schnob",
      "lv": "Snorted"
    },
    "imperfektKonjunktiv": {
      "de": "schnaubte vai schnob",
      "lv": "Snorted"
    },
    "partizipVergangenheit": {
      "de": "geschnaubt vai geschnoben",
      "lv": "Snort"
    }
  },
  {
    "infinitiv": {
      "de": "schneiden",
      "lv": "To cut"
    },
    "praesens": {
      "de": "er schneidet",
      "lv": "He spins"
    },
    "imperfektIndikativ": {
      "de": "er schnitt",
      "lv": "He was cutting"
    },
    "imperfektKonjunktiv": {
      "de": "er schnitte",
      "lv": "He would cut"
    },
    "partizipVergangenheit": {
      "de": "geschnitten",
      "lv": "Cut"
    }
  },
  {
    "infinitiv": {
      "de": "schreiben",
      "lv": "To write"
    },
    "praesens": {
      "de": "er schreibt",
      "lv": "He writes"
    },
    "imperfektIndikativ": {
      "de": "er schrieb",
      "lv": "He wrote"
    },
    "imperfektKonjunktiv": {
      "de": "er schriebe",
      "lv": "He would write"
    },
    "partizipVergangenheit": {
      "de": "geschrieben",
      "lv": "Written"
    }
  },
  {
    "infinitiv": {
      "de": "schreien",
      "lv": "To shout"
    },
    "praesens": {
      "de": "er schreit",
      "lv": "He shouts"
    },
    "imperfektIndikativ": {
      "de": "er schrie",
      "lv": "He shouted"
    },
    "imperfektKonjunktiv": {
      "de": "er schriee",
      "lv": "He would shout"
    },
    "partizipVergangenheit": {
      "de": "geschrien",
      "lv": "Shouted"
    }
  },
  {
    "infinitiv": {
      "de": "schreiten",
      "lv": "Walking"
    },
    "praesens": {
      "de": "er schreitet",
      "lv": "He is walking"
    },
    "imperfektIndikativ": {
      "de": "er schritt",
      "lv": "He was walking"
    },
    "imperfektKonjunktiv": {
      "de": "er schritte",
      "lv": "He would walk"
    },
    "partizipVergangenheit": {
      "de": "geschritten (er ist)",
      "lv": "Walked"
    }
  },
  {
    "infinitiv": {
      "de": "schweigen",
      "lv": "Keep quiet"
    },
    "praesens": {
      "de": "er schweigt",
      "lv": "He is silent"
    },
    "imperfektIndikativ": {
      "de": "er schwieg",
      "lv": "He was silent"
    },
    "imperfektKonjunktiv": {
      "de": "er schwiege",
      "lv": "He would be silent"
    },
    "partizipVergangenheit": {
      "de": "geschwiegen",
      "lv": "Silenced"
    }
  },
  {
    "infinitiv": {
      "de": "schwellen",
      "lv": "Pamp"
    },
    "praesens": {
      "de": "er schwillt",
      "lv": "He pouts"
    },
    "imperfektIndikativ": {
      "de": "er schwoll",
      "lv": "He pampas"
    },
    "imperfektKonjunktiv": {
      "de": "er schwölle",
      "lv": "He would pump"
    },
    "partizipVergangenheit": {
      "de": "geschwollen (er ist)",
      "lv": "Pump"
    }
  },
  {
    "infinitiv": {
      "de": "schwimmen",
      "lv": "To swim"
    },
    "praesens": {
      "de": "er schwimmt",
      "lv": "He swims"
    },
    "imperfektIndikativ": {
      "de": "er schwamm",
      "lv": "He was swimming"
    },
    "imperfektKonjunktiv": {
      "de": "er schwömme / er schwämme",
      "lv": "He would swim"
    },
    "partizipVergangenheit": {
      "de": "geschwommen (er ist)",
      "lv": "Swam"
    }
  },
  {
    "infinitiv": {
      "de": "schwinden",
      "lv": "Disappear"
    },
    "praesens": {
      "de": "er schwindet",
      "lv": "He disappears"
    },
    "imperfektIndikativ": {
      "de": "er schwand",
      "lv": "He disappeared"
    },
    "imperfektKonjunktiv": {
      "de": "er schwände",
      "lv": "He would disappear"
    },
    "partizipVergangenheit": {
      "de": "geschwunden (er ist)",
      "lv": "Lost"
    }
  },
  {
    "infinitiv": {
      "de": "schwingen",
      "lv": "Wave"
    },
    "praesens": {
      "de": "er schwingt",
      "lv": "He waves"
    },
    "imperfektIndikativ": {
      "de": "er schwang",
      "lv": "He waved"
    },
    "imperfektKonjunktiv": {
      "de": "er schwänge",
      "lv": "He would wave"
    },
    "partizipVergangenheit": {
      "de": "geschwungen",
      "lv": "Waved"
    }
  },
  {
    "infinitiv": {
      "de": "schwören",
      "lv": "To swear"
    },
    "praesens": {
      "de": "er schwört",
      "lv": "He swears"
    },
    "imperfektIndikativ": {
      "de": "er schwur / er schwor",
      "lv": "He swore"
    },
    "imperfektKonjunktiv": {
      "de": "er schwöre",
      "lv": "He would swear"
    },
    "partizipVergangenheit": {
      "de": "geschworen",
      "lv": "Sworn"
    }
  },
  {
    "infinitiv": {
      "de": "sehen",
      "lv": "To see"
    },
    "praesens": {
      "de": "er sieht",
      "lv": "He sees"
    },
    "imperfektIndikativ": {
      "de": "er sah",
      "lv": "He saw"
    },
    "imperfektKonjunktiv": {
      "de": "er sähe",
      "lv": "He would see"
    },
    "partizipVergangenheit": {
      "de": "gesehen",
      "lv": "Seen"
    }
  },
  {
    "infinitiv": {
      "de": "sein",
      "lv": "To be"
    },
    "praesens": {
      "de": "er ist",
      "lv": "He is"
    },
    "imperfektIndikativ": {
      "de": "war",
      "lv": "Was"
    },
    "imperfektKonjunktiv": {
      "de": "war",
      "lv": "Was"
    },
    "partizipVergangenheit": {
      "de": "gewesen",
      "lv": "Been"
    }
  },
  {
    "infinitiv": {
      "de": "senden",
      "lv": "To send"
    },
    "praesens": {
      "de": "er sendet",
      "lv": "He sends"
    },
    "imperfektIndikativ": {
      "de": "er sandte / er sendete",
      "lv": "He sent"
    },
    "imperfektKonjunktiv": {
      "de": "er sendete",
      "lv": "He would send"
    },
    "partizipVergangenheit": {
      "de": "gesandt / gesendet",
      "lv": "Sent"
    }
  },
  {
    "infinitiv": {
      "de": "sieden",
      "lv": "To boil"
    },
    "praesens": {
      "de": "er siedet",
      "lv": "He cooks"
    },
    "imperfektIndikativ": {
      "de": "sott vai siedete",
      "lv": "Cooked"
    },
    "imperfektKonjunktiv": {
      "de": "sott vai siedete",
      "lv": "Cooked"
    },
    "partizipVergangenheit": {
      "de": "gesotten vai gesiedet",
      "lv": "Boiled"
    }
  },
  {
    "infinitiv": {
      "de": "singen",
      "lv": "To sing"
    },
    "praesens": {
      "de": "er singt",
      "lv": "He sings"
    },
    "imperfektIndikativ": {
      "de": "er sang",
      "lv": "He sang"
    },
    "imperfektKonjunktiv": {
      "de": "er sänge",
      "lv": "He would sing"
    },
    "partizipVergangenheit": {
      "de": "gesungen",
      "lv": "Sung"
    }
  },
  {
    "infinitiv": {
      "de": "sinken",
      "lv": "To sink"
    },
    "praesens": {
      "de": "er sinkt",
      "lv": "He is sinking"
    },
    "imperfektIndikativ": {
      "de": "er sank",
      "lv": "He was making up"
    },
    "imperfektKonjunktiv": {
      "de": "er sänke",
      "lv": "He would sink"
    },
    "partizipVergangenheit": {
      "de": "gesunken (er ist)",
      "lv": "Make up"
    }
  },
  {
    "infinitiv": {
      "de": "sinnen",
      "lv": "To wonder"
    },
    "praesens": {
      "de": "er sinnt",
      "lv": "He wonders"
    },
    "imperfektIndikativ": {
      "de": "er sann",
      "lv": "He wondered"
    },
    "imperfektKonjunktiv": {
      "de": "er sönne / er sänne",
      "lv": "He would wonder"
    },
    "partizipVergangenheit": {
      "de": "gesonnen",
      "lv": "Minded"
    }
  },
  {
    "infinitiv": {
      "de": "sitzen",
      "lv": "To sit"
    },
    "praesens": {
      "de": "er sitzt",
      "lv": "He is sitting"
    },
    "imperfektIndikativ": {
      "de": "er sass",
      "lv": "He was sitting"
    },
    "imperfektKonjunktiv": {
      "de": "er säße",
      "lv": "He would sit"
    },
    "partizipVergangenheit": {
      "de": "gesessen",
      "lv": "Sat down"
    }
  },
  {
    "infinitiv": {
      "de": "sollen",
      "lv": "Need / be obliged"
    },
    "praesens": {
      "de": "er soll",
      "lv": "He needs"
    },
    "imperfektIndikativ": {
      "de": "sollte",
      "lv": "Should have"
    },
    "imperfektKonjunktiv": {
      "de": "sollte",
      "lv": "Should have"
    },
    "partizipVergangenheit": {
      "de": "gesollt",
      "lv": "Needed"
    }
  },
  {
    "infinitiv": {
      "de": "speien",
      "lv": "To spit"
    },
    "praesens": {
      "de": "er speit",
      "lv": "He spits"
    },
    "imperfektIndikativ": {
      "de": "er spie",
      "lv": "He spat"
    },
    "imperfektKonjunktiv": {
      "de": "er spie",
      "lv": "He would spit"
    },
    "partizipVergangenheit": {
      "de": "gespien",
      "lv": "Spat out"
    }
  },
  {
    "infinitiv": {
      "de": "spinnen",
      "lv": "Spin"
    },
    "praesens": {
      "de": "er spinnt",
      "lv": "He twists"
    },
    "imperfektIndikativ": {
      "de": "er spann",
      "lv": "He spun"
    },
    "imperfektKonjunktiv": {
      "de": "er spönne / er spänne",
      "lv": "He would spin"
    },
    "partizipVergangenheit": {
      "de": "gesponnen",
      "lv": "Spun"
    }
  },
  {
    "infinitiv": {
      "de": "spleißen",
      "lv": "To connect"
    },
    "praesens": {
      "de": "er spleißt",
      "lv": "He connects"
    },
    "imperfektIndikativ": {
      "de": "spliss",
      "lv": "Connected"
    },
    "imperfektKonjunktiv": {
      "de": "spliss",
      "lv": "Connected"
    },
    "partizipVergangenheit": {
      "de": "gesplissen",
      "lv": "Connected"
    }
  },
  {
    "infinitiv": {
      "de": "sprechen",
      "lv": "To speak"
    },
    "praesens": {
      "de": "er spricht",
      "lv": "He speaks"
    },
    "imperfektIndikativ": {
      "de": "er sprach",
      "lv": "He spoke"
    },
    "imperfektKonjunktiv": {
      "de": "er spräche",
      "lv": "He would speak"
    },
    "partizipVergangenheit": {
      "de": "gesprochen",
      "lv": "Spoken"
    }
  },
  {
    "infinitiv": {
      "de": "sprießen",
      "lv": "Thrive"
    },
    "praesens": {
      "de": "er sprießt",
      "lv": "He thrives"
    },
    "imperfektIndikativ": {
      "de": "er spross",
      "lv": "He thrived"
    },
    "imperfektKonjunktiv": {
      "de": "er sprösse",
      "lv": "He shelf"
    },
    "partizipVergangenheit": {
      "de": "gesprossen (er ist)",
      "lv": "The shoulder"
    }
  },
  {
    "infinitiv": {
      "de": "springen",
      "lv": "To jump"
    },
    "praesens": {
      "de": "er springt",
      "lv": "He jumps"
    },
    "imperfektIndikativ": {
      "de": "er sprang",
      "lv": "He jumped"
    },
    "imperfektKonjunktiv": {
      "de": "er spränge",
      "lv": "He would jump"
    },
    "partizipVergangenheit": {
      "de": "gesprungen (er ist)",
      "lv": "Lens"
    }
  },
  {
    "infinitiv": {
      "de": "stechen",
      "lv": "Stab"
    },
    "praesens": {
      "de": "er sticht",
      "lv": "He stabs"
    },
    "imperfektIndikativ": {
      "de": "er stach",
      "lv": "He punched"
    },
    "imperfektKonjunktiv": {
      "de": "er stäche",
      "lv": "He would stab"
    },
    "partizipVergangenheit": {
      "de": "gestochen",
      "lv": "Stabbed"
    }
  },
  {
    "infinitiv": {
      "de": "stecken",
      "lv": "To stick / stick in"
    },
    "praesens": {
      "de": "er steckt",
      "lv": "He pushes"
    },
    "imperfektIndikativ": {
      "de": "stak vai steckte",
      "lv": "Stuffed"
    },
    "imperfektKonjunktiv": {
      "de": "stak vai steckte",
      "lv": "Stuffed"
    },
    "partizipVergangenheit": {
      "de": "gesteckt",
      "lv": "Stuffed"
    }
  },
  {
    "infinitiv": {
      "de": "stehen",
      "lv": "To stand"
    },
    "praesens": {
      "de": "er steht",
      "lv": "He is standing"
    },
    "imperfektIndikativ": {
      "de": "er stand",
      "lv": "He stood"
    },
    "imperfektKonjunktiv": {
      "de": "er stände / er stünde",
      "lv": "He would stand"
    },
    "partizipVergangenheit": {
      "de": "gestanden",
      "lv": "Standing"
    }
  },
  {
    "infinitiv": {
      "de": "stehlen",
      "lv": "To steal"
    },
    "praesens": {
      "de": "er stiehlt",
      "lv": "He steals"
    },
    "imperfektIndikativ": {
      "de": "er stahl",
      "lv": "He stole"
    },
    "imperfektKonjunktiv": {
      "de": "er stöhle / er stähle",
      "lv": "He would steal"
    },
    "partizipVergangenheit": {
      "de": "gestohlen",
      "lv": "Stolen"
    }
  },
  {
    "infinitiv": {
      "de": "steigen",
      "lv": "To climb"
    },
    "praesens": {
      "de": "er steigt",
      "lv": "He climbs"
    },
    "imperfektIndikativ": {
      "de": "er stieg",
      "lv": "He climbed"
    },
    "imperfektKonjunktiv": {
      "de": "er stiege",
      "lv": "He would climb"
    },
    "partizipVergangenheit": {
      "de": "gestiegen (er ist)",
      "lv": "Climbed"
    }
  },
  {
    "infinitiv": {
      "de": "sterben",
      "lv": "To die"
    },
    "praesens": {
      "de": "er stirbt",
      "lv": "He is dying"
    },
    "imperfektIndikativ": {
      "de": "er starb",
      "lv": "He died"
    },
    "imperfektKonjunktiv": {
      "de": "er stürbe",
      "lv": "He would die"
    },
    "partizipVergangenheit": {
      "de": "gestorben (er ist)",
      "lv": "Dead"
    }
  },
  {
    "infinitiv": {
      "de": "stieben",
      "lv": "Foam / swirl"
    },
    "praesens": {
      "de": "es stiebt",
      "lv": "It blows"
    },
    "imperfektIndikativ": {
      "de": "stob vai stiebte",
      "lv": "Foamed"
    },
    "imperfektKonjunktiv": {
      "de": "stob vai stiebte",
      "lv": "Foamed"
    },
    "partizipVergangenheit": {
      "de": "gestoben vai gestiebt",
      "lv": "Spoiled"
    }
  },
  {
    "infinitiv": {
      "de": "stinken",
      "lv": "To smell"
    },
    "praesens": {
      "de": "es stinkt",
      "lv": "It stinks"
    },
    "imperfektIndikativ": {
      "de": "stank",
      "lv": "Smelled"
    },
    "imperfektKonjunktiv": {
      "de": "stank",
      "lv": "Smelled"
    },
    "partizipVergangenheit": {
      "de": "gestunken",
      "lv": "Smelly"
    }
  },
  {
    "infinitiv": {
      "de": "stoßen",
      "lv": "Push"
    },
    "praesens": {
      "de": "er stößt",
      "lv": "He pushes"
    },
    "imperfektIndikativ": {
      "de": "er stieß",
      "lv": "He pushed"
    },
    "imperfektKonjunktiv": {
      "de": "er stieße",
      "lv": "He was pushing"
    },
    "partizipVergangenheit": {
      "de": "gestoßen",
      "lv": "Pushed"
    }
  },
  {
    "infinitiv": {
      "de": "streichen",
      "lv": "Paint / strip"
    },
    "praesens": {
      "de": "er streicht",
      "lv": "He paints / stripes"
    },
    "imperfektIndikativ": {
      "de": "er strich",
      "lv": "He painted / striped"
    },
    "imperfektKonjunktiv": {
      "de": "er striche",
      "lv": "He would paint / strip"
    },
    "partizipVergangenheit": {
      "de": "gestrichen",
      "lv": "Painted / striped"
    }
  },
  {
    "infinitiv": {
      "de": "streiten",
      "lv": "To fight"
    },
    "praesens": {
      "de": "er streitet",
      "lv": "He is fighting"
    },
    "imperfektIndikativ": {
      "de": "er stritt",
      "lv": "He struggled"
    },
    "imperfektKonjunktiv": {
      "de": "er stritte",
      "lv": "He would fight"
    },
    "partizipVergangenheit": {
      "de": "gestritten",
      "lv": "Fought"
    }
  },
  {
    "infinitiv": {
      "de": "tragen",
      "lv": "Carry"
    },
    "praesens": {
      "de": "er trägt",
      "lv": "He carries"
    },
    "imperfektIndikativ": {
      "de": "er trug",
      "lv": "He carried"
    },
    "imperfektKonjunktiv": {
      "de": "er trüge",
      "lv": "He would carry"
    },
    "partizipVergangenheit": {
      "de": "getragen",
      "lv": "Carried"
    }
  },
  {
    "infinitiv": {
      "de": "treffen",
      "lv": "To encounter"
    },
    "praesens": {
      "de": "er trifft",
      "lv": "He meets"
    },
    "imperfektIndikativ": {
      "de": "er traf",
      "lv": "He encountered"
    },
    "imperfektKonjunktiv": {
      "de": "er träfe",
      "lv": "He would encounter"
    },
    "partizipVergangenheit": {
      "de": "getroffen",
      "lv": "Encountered"
    }
  },
  {
    "infinitiv": {
      "de": "treiben",
      "lv": "Chase"
    },
    "praesens": {
      "de": "er treibt",
      "lv": "He drives"
    },
    "imperfektIndikativ": {
      "de": "er trieb",
      "lv": "He drove"
    },
    "imperfektKonjunktiv": {
      "de": "er triebe",
      "lv": "He would drive"
    },
    "partizipVergangenheit": {
      "de": "getrieben",
      "lv": "Chased"
    }
  },
  {
    "infinitiv": {
      "de": "treten",
      "lv": "Enter / go"
    },
    "praesens": {
      "de": "er tritt",
      "lv": "He enters / goes"
    },
    "imperfektIndikativ": {
      "de": "er trat",
      "lv": "He stood / walked"
    },
    "imperfektKonjunktiv": {
      "de": "er träte",
      "lv": "He would stand / go"
    },
    "partizipVergangenheit": {
      "de": "getreten (er ist)",
      "lv": "Stood / walked"
    }
  },
  {
    "infinitiv": {
      "de": "trinken",
      "lv": "To drink"
    },
    "praesens": {
      "de": "er trinkt",
      "lv": "He drinks"
    },
    "imperfektIndikativ": {
      "de": "er trank",
      "lv": "He was drinking"
    },
    "imperfektKonjunktiv": {
      "de": "er tränke",
      "lv": "He would drink"
    },
    "partizipVergangenheit": {
      "de": "getrunken",
      "lv": "Drunk"
    }
  },
  {
    "infinitiv": {
      "de": "trügen",
      "lv": "To cheat"
    },
    "praesens": {
      "de": "er trögt",
      "lv": "He cheats"
    },
    "imperfektIndikativ": {
      "de": "er trog",
      "lv": "He cheated"
    },
    "imperfektKonjunktiv": {
      "de": "er tröge",
      "lv": "He would cheat"
    },
    "partizipVergangenheit": {
      "de": "getrogen",
      "lv": "Cheated"
    }
  },
  {
    "infinitiv": {
      "de": "tun",
      "lv": "To do"
    },
    "praesens": {
      "de": "er tut",
      "lv": "He does"
    },
    "imperfektIndikativ": {
      "de": "er tat",
      "lv": "He did"
    },
    "imperfektKonjunktiv": {
      "de": "er täte",
      "lv": "He would do"
    },
    "partizipVergangenheit": {
      "de": "getan",
      "lv": "Done"
    }
  },
  {
    "infinitiv": {
      "de": "verderben",
      "lv": "To damage"
    },
    "praesens": {
      "de": "er verdirbt",
      "lv": "He destroys"
    },
    "imperfektIndikativ": {
      "de": "er verdarb",
      "lv": "He damaged"
    },
    "imperfektKonjunktiv": {
      "de": "er verdürbe",
      "lv": "He would damage"
    },
    "partizipVergangenheit": {
      "de": "verdorben",
      "lv": "Damaged"
    }
  },
  {
    "infinitiv": {
      "de": "verdrießen",
      "lv": "To cause annoyance"
    },
    "praesens": {
      "de": "er verdrießt",
      "lv": "He causes annoyance"
    },
    "imperfektIndikativ": {
      "de": "er verdross",
      "lv": "He caused annoyance"
    },
    "imperfektKonjunktiv": {
      "de": "er verdrösse",
      "lv": "He would cause annoyance"
    },
    "partizipVergangenheit": {
      "de": "verdrossen",
      "lv": "Upset"
    }
  },
  {
    "infinitiv": {
      "de": "vergessen",
      "lv": "Forget"
    },
    "praesens": {
      "de": "er vergisst",
      "lv": "He forgets"
    },
    "imperfektIndikativ": {
      "de": "er vergass",
      "lv": "He forgot"
    },
    "imperfektKonjunktiv": {
      "de": "er vergäße",
      "lv": "He would forget"
    },
    "partizipVergangenheit": {
      "de": "vergessen",
      "lv": "Forgotten"
    }
  },
  {
    "infinitiv": {
      "de": "verlieren",
      "lv": "To lose"
    },
    "praesens": {
      "de": "er verliert",
      "lv": "He loses"
    },
    "imperfektIndikativ": {
      "de": "er verlor",
      "lv": "He lost"
    },
    "imperfektKonjunktiv": {
      "de": "er verlöre",
      "lv": "He would lose"
    },
    "partizipVergangenheit": {
      "de": "verloren",
      "lv": "Lost"
    }
  },
  {
    "infinitiv": {
      "de": "wachsen",
      "lv": "To grow"
    },
    "praesens": {
      "de": "er wächst",
      "lv": "He is growing"
    },
    "imperfektIndikativ": {
      "de": "er wuchs",
      "lv": "He was growing up"
    },
    "imperfektKonjunktiv": {
      "de": "er wüchse",
      "lv": "He would grow"
    },
    "partizipVergangenheit": {
      "de": "gewachsen (er ist)",
      "lv": "Grew up"
    }
  },
  {
    "infinitiv": {
      "de": "waschen",
      "lv": "To wash"
    },
    "praesens": {
      "de": "er wäscht",
      "lv": "He washes"
    },
    "imperfektIndikativ": {
      "de": "er wusch",
      "lv": "He washed"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsche",
      "lv": "He would wash"
    },
    "partizipVergangenheit": {
      "de": "gewaschen",
      "lv": "Washed"
    }
  },
  {
    "infinitiv": {
      "de": "weben",
      "lv": "Weave"
    },
    "praesens": {
      "de": "er webt",
      "lv": "He weaves"
    },
    "imperfektIndikativ": {
      "de": "wob",
      "lv": "Tissue"
    },
    "imperfektKonjunktiv": {
      "de": "wob",
      "lv": "Tissue"
    },
    "partizipVergangenheit": {
      "de": "gewoben",
      "lv": "Woven"
    }
  },
  {
    "infinitiv": {
      "de": "weichen",
      "lv": "To withdraw"
    },
    "praesens": {
      "de": "er weicht",
      "lv": "He backs off"
    },
    "imperfektIndikativ": {
      "de": "er wich",
      "lv": "He stepped back"
    },
    "imperfektKonjunktiv": {
      "de": "er wiche",
      "lv": "He would back off"
    },
    "partizipVergangenheit": {
      "de": "gewichen (er ist)",
      "lv": "Back off"
    }
  },
  {
    "infinitiv": {
      "de": "weisen",
      "lv": "Show"
    },
    "praesens": {
      "de": "er weist",
      "lv": "He shows"
    },
    "imperfektIndikativ": {
      "de": "er wies",
      "lv": "He showed"
    },
    "imperfektKonjunktiv": {
      "de": "er wiese",
      "lv": "He would show"
    },
    "partizipVergangenheit": {
      "de": "gewiesen",
      "lv": "Shown"
    }
  },
  {
    "infinitiv": {
      "de": "wenden",
      "lv": "Modify / crop"
    },
    "praesens": {
      "de": "er wendet",
      "lv": "He twists / turns"
    },
    "imperfektIndikativ": {
      "de": "er wandte / es wendete",
      "lv": "He twisted / turned"
    },
    "imperfektKonjunktiv": {
      "de": "er wendete",
      "lv": "He would amend / reverse"
    },
    "partizipVergangenheit": {
      "de": "gewandt / gewendet",
      "lv": "Amended / reversed"
    }
  },
  {
    "infinitiv": {
      "de": "werben",
      "lv": "To propose"
    },
    "praesens": {
      "de": "er wirbt",
      "lv": "He proposes"
    },
    "imperfektIndikativ": {
      "de": "er warb",
      "lv": "He proposed"
    },
    "imperfektKonjunktiv": {
      "de": "er würbe",
      "lv": "He would propose"
    },
    "partizipVergangenheit": {
      "de": "geworben",
      "lv": "Proposed to"
    }
  },
  {
    "infinitiv": {
      "de": "werden",
      "lv": "To become"
    },
    "praesens": {
      "de": "er wird",
      "lv": "He becomes"
    },
    "imperfektIndikativ": {
      "de": "wurde",
      "lv": "Became"
    },
    "imperfektKonjunktiv": {
      "de": "wurde",
      "lv": "Became"
    },
    "partizipVergangenheit": {
      "de": "geworden",
      "lv": "Has become"
    }
  },
  {
    "infinitiv": {
      "de": "werfen",
      "lv": "Throw"
    },
    "praesens": {
      "de": "er wirft",
      "lv": "He throws"
    },
    "imperfektIndikativ": {
      "de": "er warf",
      "lv": "He threw"
    },
    "imperfektKonjunktiv": {
      "de": "er würfe",
      "lv": "He threw"
    },
    "partizipVergangenheit": {
      "de": "geworfen",
      "lv": "Thrown"
    }
  },
  {
    "infinitiv": {
      "de": "wiegen",
      "lv": "To weigh"
    },
    "praesens": {
      "de": "er wiegt",
      "lv": "He weighs"
    },
    "imperfektIndikativ": {
      "de": "er wog",
      "lv": "He weighed"
    },
    "imperfektKonjunktiv": {
      "de": "er wöge",
      "lv": "He would weigh"
    },
    "partizipVergangenheit": {
      "de": "gewogen",
      "lv": "Weighted"
    }
  },
  {
    "infinitiv": {
      "de": "winden",
      "lv": "Braid"
    },
    "praesens": {
      "de": "er windet",
      "lv": "He pin"
    },
    "imperfektIndikativ": {
      "de": "er wand",
      "lv": "He braids"
    },
    "imperfektKonjunktiv": {
      "de": "er wände",
      "lv": "He would braid"
    },
    "partizipVergangenheit": {
      "de": "gewunden",
      "lv": "Braided"
    }
  },
  {
    "infinitiv": {
      "de": "wissen",
      "lv": "To know"
    },
    "praesens": {
      "de": "er weiß",
      "lv": "He knows"
    },
    "imperfektIndikativ": {
      "de": "er wusste",
      "lv": "He knew"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsste",
      "lv": "He would know"
    },
    "partizipVergangenheit": {
      "de": "gewusst",
      "lv": "Known"
    }
  },
  {
    "infinitiv": {
      "de": "wollen",
      "lv": "Want to"
    },
    "praesens": {
      "de": "er will",
      "lv": "He wants"
    },
    "imperfektIndikativ": {
      "de": "wollte",
      "lv": "Wanted to"
    },
    "imperfektKonjunktiv": {
      "de": "wollte",
      "lv": "Wanted to"
    },
    "partizipVergangenheit": {
      "de": "gewollt",
      "lv": "Wanted to"
    }
  },
  {
    "infinitiv": {
      "de": "wringen",
      "lv": "Cut out / squeeze out"
    },
    "praesens": {
      "de": "er wringt",
      "lv": "He cuts out"
    },
    "imperfektIndikativ": {
      "de": "wrang",
      "lv": "Cut out"
    },
    "imperfektKonjunktiv": {
      "de": "wrang",
      "lv": "Cut out"
    },
    "partizipVergangenheit": {
      "de": "gewrungen",
      "lv": "Cut out"
    }
  },
  {
    "infinitiv": {
      "de": "zeihen",
      "lv": "To blame"
    },
    "praesens": {
      "de": "er zeiht",
      "lv": "He blames"
    },
    "imperfektIndikativ": {
      "de": "zieh",
      "lv": "Blamed"
    },
    "imperfektKonjunktiv": {
      "de": "zieh",
      "lv": "Blamed"
    },
    "partizipVergangenheit": {
      "de": "geziehen",
      "lv": "Blamed"
    }
  },
  {
    "infinitiv": {
      "de": "ziehen",
      "lv": "To pull"
    },
    "praesens": {
      "de": "er zieht",
      "lv": "He pulls"
    },
    "imperfektIndikativ": {
      "de": "er zog",
      "lv": "He pulled"
    },
    "imperfektKonjunktiv": {
      "de": "er zöge",
      "lv": "He would drag"
    },
    "partizipVergangenheit": {
      "de": "gezogen",
      "lv": "Dragged"
    }
  },
  {
    "infinitiv": {
      "de": "zwingen",
      "lv": "To force"
    },
    "praesens": {
      "de": "er zwingt",
      "lv": "He forces"
    },
    "imperfektIndikativ": {
      "de": "er zwang",
      "lv": "He forced"
    },
    "imperfektKonjunktiv": {
      "de": "er zwänge",
      "lv": "He would force"
    },
    "partizipVergangenheit": {
      "de": "gezwungen",
      "lv": "Forced"
    }
  },
  {
    "infinitiv": {
      "de": "empfangen",
      "lv": "To receive"
    },
    "praesens": {
      "de": "er empfängt",
      "lv": "He receives"
    },
    "imperfektIndikativ": {
      "de": "er empfing",
      "lv": "He received"
    },
    "imperfektKonjunktiv": {
      "de": "er empfinge",
      "lv": "He would receive"
    },
    "partizipVergangenheit": {
      "de": "empfangen",
      "lv": "Received"
    }
  },
  {
    "infinitiv": {
      "de": "erwägen",
      "lv": "To consider"
    },
    "praesens": {
      "de": "er erwägt",
      "lv": "He considers"
    },
    "imperfektIndikativ": {
      "de": "er erwog",
      "lv": "He considered"
    },
    "imperfektKonjunktiv": {
      "de": "er erwöge",
      "lv": "He would consider"
    },
    "partizipVergangenheit": {
      "de": "erwogen",
      "lv": "Considered"
    }
  },
  {
    "infinitiv": {
      "de": "fechten",
      "lv": "To fight"
    },
    "praesens": {
      "de": "er ficht",
      "lv": "He is fighting"
    },
    "imperfektIndikativ": {
      "de": "er focht",
      "lv": "He struggled"
    },
    "imperfektKonjunktiv": {
      "de": "er föchte",
      "lv": "He would fight"
    },
    "partizipVergangenheit": {
      "de": "gefochten",
      "lv": "Fought"
    }
  },
  {
    "infinitiv": {
      "de": "flechten",
      "lv": "Braid"
    },
    "praesens": {
      "de": "er flicht",
      "lv": "He pin"
    },
    "imperfektIndikativ": {
      "de": "er flocht",
      "lv": "He braids"
    },
    "imperfektKonjunktiv": {
      "de": "er flöchte",
      "lv": "He would braid"
    },
    "partizipVergangenheit": {
      "de": "geflochten",
      "lv": "Braided"
    }
  },
  {
    "infinitiv": {
      "de": "hangen",
      "lv": "To hang"
    },
    "praesens": {
      "de": "er hängt",
      "lv": "He hangs"
    },
    "imperfektIndikativ": {
      "de": "er hing",
      "lv": "He hung"
    },
    "imperfektKonjunktiv": {
      "de": "er hinge",
      "lv": "He would hang himself"
    },
    "partizipVergangenheit": {
      "de": "gehangen",
      "lv": "Hang on"
    }
  },
  {
    "infinitiv": {
      "de": "spalten",
      "lv": "To split"
    },
    "praesens": {
      "de": "er spaltet",
      "lv": "He splits"
    },
    "imperfektIndikativ": {
      "de": "er spaltete",
      "lv": "He split"
    },
    "imperfektKonjunktiv": {
      "de": "er spaltete",
      "lv": "He would split"
    },
    "partizipVergangenheit": {
      "de": "gespalten",
      "lv": "Split"
    }
  },
  {
    "infinitiv": {
      "de": "verzeihen",
      "lv": "To forgive"
    },
    "praesens": {
      "de": "er verzeiht",
      "lv": "He forgives"
    },
    "imperfektIndikativ": {
      "de": "er verzieh",
      "lv": "He forgave"
    },
    "imperfektKonjunktiv": {
      "de": "er verziehe",
      "lv": "He would forgive"
    },
    "partizipVergangenheit": {
      "de": "verziehen",
      "lv": "Forgiven"
    }
  }
];

window.VERB_ENTRIES = VERB_ENTRIES;

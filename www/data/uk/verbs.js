const VERB_ENTRIES = [
  {
    "infinitiv": {
      "de": "backen",
      "lv": "пекти • спекти"
    },
    "praesens": {
      "de": "er bäckt",
      "lv": "він пече"
    },
    "imperfektIndikativ": {
      "de": "er buk",
      "lv": "він пік"
    },
    "imperfektKonjunktiv": {
      "de": "er büke",
      "lv": "він би пік"
    },
    "partizipVergangenheit": {
      "de": "gebacken",
      "lv": "спечений"
    }
  },
  {
    "infinitiv": {
      "de": "befehlen",
      "lv": "наказувати • наказати"
    },
    "praesens": {
      "de": "er befiehlt",
      "lv": "він наказує"
    },
    "imperfektIndikativ": {
      "de": "er befahl",
      "lv": "він наказував"
    },
    "imperfektKonjunktiv": {
      "de": "er beföhle",
      "lv": "він би наказував"
    },
    "partizipVergangenheit": {
      "de": "befohlen",
      "lv": "наказаний"
    }
  },
  {
    "infinitiv": {
      "de": "beginnen",
      "lv": "починати • почати"
    },
    "praesens": {
      "de": "er beginnt",
      "lv": "він починає"
    },
    "imperfektIndikativ": {
      "de": "er begann",
      "lv": "він починав"
    },
    "imperfektKonjunktiv": {
      "de": "er begönne / er begänne",
      "lv": "він би починав"
    },
    "partizipVergangenheit": {
      "de": "begonnen",
      "lv": "початий"
    }
  },
  {
    "infinitiv": {
      "de": "beißen",
      "lv": "кусати • вкусити"
    },
    "praesens": {
      "de": "er beißt",
      "lv": "він кусає"
    },
    "imperfektIndikativ": {
      "de": "er biss",
      "lv": "він кусав"
    },
    "imperfektKonjunktiv": {
      "de": "er bisse",
      "lv": "він би кусав"
    },
    "partizipVergangenheit": {
      "de": "gebissen",
      "lv": "покусаний"
    }
  },
  {
    "infinitiv": {
      "de": "bergen",
      "lv": "рятувати • врятувати / ховати • сховати"
    },
    "praesens": {
      "de": "er birgt",
      "lv": "він рятує / ховає"
    },
    "imperfektIndikativ": {
      "de": "er barg",
      "lv": "він рятував / ховав"
    },
    "imperfektKonjunktiv": {
      "de": "er bürge / er bärge",
      "lv": "він би рятував / ховав"
    },
    "partizipVergangenheit": {
      "de": "geborgen",
      "lv": "врятований / схований"
    }
  },
  {
    "infinitiv": {
      "de": "bersten",
      "lv": "тріскатися • тріснути"
    },
    "praesens": {
      "de": "er birst",
      "lv": "він тріскається"
    },
    "imperfektIndikativ": {
      "de": "er barst / er borst",
      "lv": "він тріскався"
    },
    "imperfektKonjunktiv": {
      "de": "er bärste / er börste",
      "lv": "він би тріскався"
    },
    "partizipVergangenheit": {
      "de": "geborsten (er ist)",
      "lv": "він тріснув"
    }
  },
  {
    "infinitiv": {
      "de": "bewegen",
      "lv": "спонукати"
    },
    "praesens": {
      "de": "er bewegt",
      "lv": "він спонукає"
    },
    "imperfektIndikativ": {
      "de": "er bewog",
      "lv": "він спонукав"
    },
    "imperfektKonjunktiv": {
      "de": "er bewöge",
      "lv": "він би спонукав"
    },
    "partizipVergangenheit": {
      "de": "bewogen",
      "lv": "спонуканий"
    }
  },
  {
    "infinitiv": {
      "de": "biegen",
      "lv": "гнути • зігнути"
    },
    "praesens": {
      "de": "er biegt",
      "lv": "він гне"
    },
    "imperfektIndikativ": {
      "de": "er bog",
      "lv": "він гнув"
    },
    "imperfektKonjunktiv": {
      "de": "er böge",
      "lv": "він би гнув"
    },
    "partizipVergangenheit": {
      "de": "gebogen",
      "lv": "зігнутий"
    }
  },
  {
    "infinitiv": {
      "de": "bieten",
      "lv": "пропонувати • запропонувати"
    },
    "praesens": {
      "de": "er bietet",
      "lv": "він пропонує"
    },
    "imperfektIndikativ": {
      "de": "er bot",
      "lv": "він пропонував"
    },
    "imperfektKonjunktiv": {
      "de": "er böte",
      "lv": "він би пропонував"
    },
    "partizipVergangenheit": {
      "de": "geboten",
      "lv": "запропонований"
    }
  },
  {
    "infinitiv": {
      "de": "binden",
      "lv": "зв’язувати • зв’язати"
    },
    "praesens": {
      "de": "er bindet",
      "lv": "він зв’язує"
    },
    "imperfektIndikativ": {
      "de": "er band",
      "lv": "він зв’язував"
    },
    "imperfektKonjunktiv": {
      "de": "er bände",
      "lv": "він би зв’язував"
    },
    "partizipVergangenheit": {
      "de": "gebunden",
      "lv": "зв’язаний"
    }
  },
  {
    "infinitiv": {
      "de": "bitten",
      "lv": "просити • попросити"
    },
    "praesens": {
      "de": "er bittet",
      "lv": "він просить"
    },
    "imperfektIndikativ": {
      "de": "er bat",
      "lv": "він просив"
    },
    "imperfektKonjunktiv": {
      "de": "er bäte",
      "lv": "він би просив"
    },
    "partizipVergangenheit": {
      "de": "gebeten",
      "lv": "попрошений"
    }
  },
  {
    "infinitiv": {
      "de": "blasen",
      "lv": "дути"
    },
    "praesens": {
      "de": "er bläst",
      "lv": "він дує"
    },
    "imperfektIndikativ": {
      "de": "er blies",
      "lv": "він дув"
    },
    "imperfektKonjunktiv": {
      "de": "er bliese",
      "lv": "він би дув"
    },
    "partizipVergangenheit": {
      "de": "geblasen",
      "lv": "дутий"
    }
  },
  {
    "infinitiv": {
      "de": "gären",
      "lv": "бродити"
    },
    "praesens": {
      "de": "es gärt",
      "lv": "воно бродить"
    },
    "imperfektIndikativ": {
      "de": "es gor / es gärte",
      "lv": "воно бродило"
    },
    "imperfektKonjunktiv": {
      "de": "es göre / es gärte",
      "lv": "воно б бродило"
    },
    "partizipVergangenheit": {
      "de": "gegoren / gegärt",
      "lv": "воно перебродило"
    }
  },
  {
    "infinitiv": {
      "de": "gebären",
      "lv": "народжувати • народити"
    },
    "praesens": {
      "de": "sie gebiert",
      "lv": "вона народжує"
    },
    "imperfektIndikativ": {
      "de": "sie gebar",
      "lv": "вона народжувала"
    },
    "imperfektKonjunktiv": {
      "de": "sie gebäre",
      "lv": "вона б народжувала"
    },
    "partizipVergangenheit": {
      "de": "geboren",
      "lv": "народжений"
    }
  },
  {
    "infinitiv": {
      "de": "gelingen",
      "lv": "вдаватися • вдатися"
    },
    "praesens": {
      "de": "es gelingt",
      "lv": "воно вдається"
    },
    "imperfektIndikativ": {
      "de": "es gelang",
      "lv": "воно вдавалося"
    },
    "imperfektKonjunktiv": {
      "de": "es gelänge",
      "lv": "воно б удавалося"
    },
    "partizipVergangenheit": {
      "de": "gelungen (es ist)",
      "lv": "воно вдалося"
    }
  },
  {
    "infinitiv": {
      "de": "gelten",
      "lv": "годитися / мати силу"
    },
    "praesens": {
      "de": "er gilt",
      "lv": "він годиться / має силу"
    },
    "imperfektIndikativ": {
      "de": "er galt",
      "lv": "він годився / мав силу"
    },
    "imperfektKonjunktiv": {
      "de": "er gölte / es gälte",
      "lv": "він би годився / мав силу"
    },
    "partizipVergangenheit": {
      "de": "gegolten",
      "lv": "він годився / мав силу"
    }
  },
  {
    "infinitiv": {
      "de": "genesen",
      "lv": "одужувати • одужати"
    },
    "praesens": {
      "de": "er genest",
      "lv": "він одужує"
    },
    "imperfektIndikativ": {
      "de": "er genas",
      "lv": "він одужував"
    },
    "imperfektKonjunktiv": {
      "de": "er genäse",
      "lv": "він би одужував"
    },
    "partizipVergangenheit": {
      "de": "genesen (er ist)",
      "lv": "одужалий"
    }
  },
  {
    "infinitiv": {
      "de": "genießen",
      "lv": "насолоджуватися • насолодитися"
    },
    "praesens": {
      "de": "er genießt",
      "lv": "він насолоджується"
    },
    "imperfektIndikativ": {
      "de": "er genoss",
      "lv": "він насолоджувався"
    },
    "imperfektKonjunktiv": {
      "de": "er genösse",
      "lv": "він би насолоджувався"
    },
    "partizipVergangenheit": {
      "de": "genossen",
      "lv": "він насолодився"
    }
  },
  {
    "infinitiv": {
      "de": "geschehen",
      "lv": "траплятися • трапитися"
    },
    "praesens": {
      "de": "es geschieht",
      "lv": "воно трапляється"
    },
    "imperfektIndikativ": {
      "de": "es geschah",
      "lv": "воно траплялося"
    },
    "imperfektKonjunktiv": {
      "de": "es geschähe",
      "lv": "воно б траплялося"
    },
    "partizipVergangenheit": {
      "de": "geschehen (es ist)",
      "lv": "воно трапилося"
    }
  },
  {
    "infinitiv": {
      "de": "gießen",
      "lv": "лити"
    },
    "praesens": {
      "de": "er gießt",
      "lv": "він ллє"
    },
    "imperfektIndikativ": {
      "de": "er goss",
      "lv": "він лив"
    },
    "imperfektKonjunktiv": {
      "de": "er gösse",
      "lv": "він би лив"
    },
    "partizipVergangenheit": {
      "de": "gegossen",
      "lv": "литий"
    }
  },
  {
    "infinitiv": {
      "de": "gleichen",
      "lv": "скидатися"
    },
    "praesens": {
      "de": "er gleicht",
      "lv": "він скидається"
    },
    "imperfektIndikativ": {
      "de": "er glich",
      "lv": "він скидався"
    },
    "imperfektKonjunktiv": {
      "de": "er gliche",
      "lv": "він би скидався"
    },
    "partizipVergangenheit": {
      "de": "geglichen",
      "lv": "він скидався"
    }
  },
  {
    "infinitiv": {
      "de": "gleiten",
      "lv": "ковзати"
    },
    "praesens": {
      "de": "er gleitet",
      "lv": "він ковзає"
    },
    "imperfektIndikativ": {
      "de": "er glitt",
      "lv": "він ковзав"
    },
    "imperfektKonjunktiv": {
      "de": "er glitte",
      "lv": "він би ковзав"
    },
    "partizipVergangenheit": {
      "de": "geglitten (er ist)",
      "lv": "він ковзав"
    }
  },
  {
    "infinitiv": {
      "de": "glimmen",
      "lv": "жевріти"
    },
    "praesens": {
      "de": "er glimmt",
      "lv": "він жевріє"
    },
    "imperfektIndikativ": {
      "de": "er glimmte / glomm",
      "lv": "він жеврів"
    },
    "imperfektKonjunktiv": {
      "de": "er glimmte",
      "lv": "він би жеврів"
    },
    "partizipVergangenheit": {
      "de": "geglimmt / geglommen",
      "lv": "він жеврів"
    }
  },
  {
    "infinitiv": {
      "de": "graben",
      "lv": "копати • викопати"
    },
    "praesens": {
      "de": "er gräbt",
      "lv": "він копає"
    },
    "imperfektIndikativ": {
      "de": "er grub",
      "lv": "він копав"
    },
    "imperfektKonjunktiv": {
      "de": "er grübe",
      "lv": "він би копав"
    },
    "partizipVergangenheit": {
      "de": "gegraben",
      "lv": "викопаний"
    }
  },
  {
    "infinitiv": {
      "de": "greifen",
      "lv": "хапати • схопити"
    },
    "praesens": {
      "de": "er greift",
      "lv": "він хапає"
    },
    "imperfektIndikativ": {
      "de": "er griff",
      "lv": "він хапав"
    },
    "imperfektKonjunktiv": {
      "de": "er griffe",
      "lv": "він би хапав"
    },
    "partizipVergangenheit": {
      "de": "gegriffen",
      "lv": "схоплений"
    }
  },
  {
    "infinitiv": {
      "de": "hauen",
      "lv": "рубати • зрубати"
    },
    "praesens": {
      "de": "er haut",
      "lv": "він рубає"
    },
    "imperfektIndikativ": {
      "de": "er hieb",
      "lv": "він рубав"
    },
    "imperfektKonjunktiv": {
      "de": "er hiebe",
      "lv": "він би рубав"
    },
    "partizipVergangenheit": {
      "de": "gehauen",
      "lv": "зрубаний"
    }
  },
  {
    "infinitiv": {
      "de": "heben",
      "lv": "піднімати • підняти"
    },
    "praesens": {
      "de": "er hebt",
      "lv": "він піднімає"
    },
    "imperfektIndikativ": {
      "de": "er hob",
      "lv": "він піднімав"
    },
    "imperfektKonjunktiv": {
      "de": "er höbe",
      "lv": "він би піднімав"
    },
    "partizipVergangenheit": {
      "de": "gehoben",
      "lv": "піднятий"
    }
  },
  {
    "infinitiv": {
      "de": "kennen",
      "lv": "знати"
    },
    "praesens": {
      "de": "er kennt",
      "lv": "він знає"
    },
    "imperfektIndikativ": {
      "de": "kannte",
      "lv": "він знав"
    },
    "imperfektKonjunktiv": {
      "de": "kannte",
      "lv": "він би знав"
    },
    "partizipVergangenheit": {
      "de": "gekannt",
      "lv": "знаний"
    }
  },
  {
    "infinitiv": {
      "de": "klingen",
      "lv": "звучати • прозвучати"
    },
    "praesens": {
      "de": "er klingt",
      "lv": "він звучить"
    },
    "imperfektIndikativ": {
      "de": "er klang",
      "lv": "він звучав"
    },
    "imperfektKonjunktiv": {
      "de": "er klänge",
      "lv": "він би звучав"
    },
    "partizipVergangenheit": {
      "de": "geklungen",
      "lv": "він прозвучав"
    }
  },
  {
    "infinitiv": {
      "de": "kneifen",
      "lv": "щипати"
    },
    "praesens": {
      "de": "er kneift",
      "lv": "він щипає"
    },
    "imperfektIndikativ": {
      "de": "er kniff",
      "lv": "він щипав"
    },
    "imperfektKonjunktiv": {
      "de": "er kniffe",
      "lv": "він би щипав"
    },
    "partizipVergangenheit": {
      "de": "gekniffen",
      "lv": "щипаний"
    }
  },
  {
    "infinitiv": {
      "de": "bleiben",
      "lv": "залишатися • залишитися"
    },
    "praesens": {
      "de": "er bleibt",
      "lv": "він залишається"
    },
    "imperfektIndikativ": {
      "de": "er blieb",
      "lv": "він залишався"
    },
    "imperfektKonjunktiv": {
      "de": "er bliebe",
      "lv": "він би залишався"
    },
    "partizipVergangenheit": {
      "de": "geblieben (er ist)",
      "lv": "він залишився"
    }
  },
  {
    "infinitiv": {
      "de": "bleichen",
      "lv": "вицвітати • вицвісти"
    },
    "praesens": {
      "de": "er bleicht",
      "lv": "він вицвітає"
    },
    "imperfektIndikativ": {
      "de": "blich",
      "lv": "він вицвітав"
    },
    "imperfektKonjunktiv": {
      "de": "blich",
      "lv": "він би вицвітав"
    },
    "partizipVergangenheit": {
      "de": "geblichen",
      "lv": "вицвілий"
    }
  },
  {
    "infinitiv": {
      "de": "braten",
      "lv": "смажити • засмажити"
    },
    "praesens": {
      "de": "er brät",
      "lv": "він смажить"
    },
    "imperfektIndikativ": {
      "de": "er briet",
      "lv": "він смажив"
    },
    "imperfektKonjunktiv": {
      "de": "er briete",
      "lv": "він би смажив"
    },
    "partizipVergangenheit": {
      "de": "gebraten",
      "lv": "засмажений"
    }
  },
  {
    "infinitiv": {
      "de": "brechen",
      "lv": "ламати • зламати"
    },
    "praesens": {
      "de": "er bricht",
      "lv": "він ламає"
    },
    "imperfektIndikativ": {
      "de": "er brach",
      "lv": "він ламав"
    },
    "imperfektKonjunktiv": {
      "de": "er bräche",
      "lv": "він би ламав"
    },
    "partizipVergangenheit": {
      "de": "gebrochen",
      "lv": "зламаний"
    }
  },
  {
    "infinitiv": {
      "de": "brennen",
      "lv": "горіти"
    },
    "praesens": {
      "de": "er brennt",
      "lv": "він горить"
    },
    "imperfektIndikativ": {
      "de": "brannte",
      "lv": "він горів"
    },
    "imperfektKonjunktiv": {
      "de": "brannte",
      "lv": "він би горів"
    },
    "partizipVergangenheit": {
      "de": "gebrannt",
      "lv": "він горів"
    }
  },
  {
    "infinitiv": {
      "de": "bringen",
      "lv": "приносити • принести"
    },
    "praesens": {
      "de": "er bringt",
      "lv": "він приносить"
    },
    "imperfektIndikativ": {
      "de": "er brachte",
      "lv": "він приносив"
    },
    "imperfektKonjunktiv": {
      "de": "er brächte",
      "lv": "він би приносив"
    },
    "partizipVergangenheit": {
      "de": "gebracht",
      "lv": "принесений"
    }
  },
  {
    "infinitiv": {
      "de": "denken",
      "lv": "думати • подумати"
    },
    "praesens": {
      "de": "er denkt",
      "lv": "він думає"
    },
    "imperfektIndikativ": {
      "de": "er dachte",
      "lv": "він думав"
    },
    "imperfektKonjunktiv": {
      "de": "er dächte",
      "lv": "він би думав"
    },
    "partizipVergangenheit": {
      "de": "gedacht",
      "lv": "він подумав"
    }
  },
  {
    "infinitiv": {
      "de": "dingen",
      "lv": "наймати • найняти / домовлятися • домовитися"
    },
    "praesens": {
      "de": "er dingt",
      "lv": "він наймає / домовляється"
    },
    "imperfektIndikativ": {
      "de": "dingte",
      "lv": "він наймав / домовлявся"
    },
    "imperfektKonjunktiv": {
      "de": "dingte",
      "lv": "він би наймав / домовлявся"
    },
    "partizipVergangenheit": {
      "de": "gedungen",
      "lv": "найнятий / домовлений"
    }
  },
  {
    "infinitiv": {
      "de": "dreschen",
      "lv": "молотити • змолотити"
    },
    "praesens": {
      "de": "er drischt",
      "lv": "він молотить"
    },
    "imperfektIndikativ": {
      "de": "er drasch / er drosch",
      "lv": "він молотив"
    },
    "imperfektKonjunktiv": {
      "de": "er dräsche / er drösche",
      "lv": "він би молотив"
    },
    "partizipVergangenheit": {
      "de": "gedroschen",
      "lv": "змолочений"
    }
  },
  {
    "infinitiv": {
      "de": "dringen",
      "lv": "пробиватися • пробитися"
    },
    "praesens": {
      "de": "er dringt",
      "lv": "він пробивається"
    },
    "imperfektIndikativ": {
      "de": "er drang",
      "lv": "він пробивався"
    },
    "imperfektKonjunktiv": {
      "de": "er dränge",
      "lv": "він би пробивався"
    },
    "partizipVergangenheit": {
      "de": "gedrungen (er ist)",
      "lv": "він пробився"
    }
  },
  {
    "infinitiv": {
      "de": "dünken",
      "lv": "здаватися • здатися"
    },
    "praesens": {
      "de": "es dünkt",
      "lv": "воно здається"
    },
    "imperfektIndikativ": {
      "de": "deuchte",
      "lv": "воно здавалося"
    },
    "imperfektKonjunktiv": {
      "de": "deuchte",
      "lv": "воно б здавалося"
    },
    "partizipVergangenheit": {
      "de": "gedünkt",
      "lv": "воно здалося"
    }
  },
  {
    "infinitiv": {
      "de": "dürfen",
      "lv": "сміти"
    },
    "praesens": {
      "de": "er darf",
      "lv": "він сміє"
    },
    "imperfektIndikativ": {
      "de": "durfte",
      "lv": "він смів"
    },
    "imperfektKonjunktiv": {
      "de": "durfte",
      "lv": "він би смів"
    },
    "partizipVergangenheit": {
      "de": "gedurft",
      "lv": "він смів"
    }
  },
  {
    "infinitiv": {
      "de": "empfehlen",
      "lv": "рекомендувати • порекомендувати"
    },
    "praesens": {
      "de": "er empfiehlt",
      "lv": "він рекомендує"
    },
    "imperfektIndikativ": {
      "de": "er empfahl",
      "lv": "він рекомендував"
    },
    "imperfektKonjunktiv": {
      "de": "er empfähle / er empföhle",
      "lv": "він би рекомендував"
    },
    "partizipVergangenheit": {
      "de": "empfohlen",
      "lv": "рекомендований"
    }
  },
  {
    "infinitiv": {
      "de": "empfinden",
      "lv": "відчувати • відчути"
    },
    "praesens": {
      "de": "er empfindet",
      "lv": "він відчуває"
    },
    "imperfektIndikativ": {
      "de": "er empfand",
      "lv": "він відчував"
    },
    "imperfektKonjunktiv": {
      "de": "er empfände",
      "lv": "він би відчував"
    },
    "partizipVergangenheit": {
      "de": "empfunden",
      "lv": "відчутий"
    }
  },
  {
    "infinitiv": {
      "de": "erlöschen",
      "lv": "гаснути • згаснути"
    },
    "praesens": {
      "de": "er erlischt",
      "lv": "він гасне"
    },
    "imperfektIndikativ": {
      "de": "er erlosch",
      "lv": "він гас"
    },
    "imperfektKonjunktiv": {
      "de": "er erlösche",
      "lv": "він би гас"
    },
    "partizipVergangenheit": {
      "de": "erloschen (er ist)",
      "lv": "згаслий"
    }
  },
  {
    "infinitiv": {
      "de": "erschrecken",
      "lv": "лякатися • злякатися"
    },
    "praesens": {
      "de": "er erschrickt",
      "lv": "він лякається"
    },
    "imperfektIndikativ": {
      "de": "er erschrak",
      "lv": "він лякався"
    },
    "imperfektKonjunktiv": {
      "de": "er erschräke",
      "lv": "він би лякався"
    },
    "partizipVergangenheit": {
      "de": "erschrocken (er ist)",
      "lv": "він злякався"
    }
  },
  {
    "infinitiv": {
      "de": "essen",
      "lv": "їсти • з’їсти"
    },
    "praesens": {
      "de": "er isst",
      "lv": "він їсть"
    },
    "imperfektIndikativ": {
      "de": "er ass",
      "lv": "він їв"
    },
    "imperfektKonjunktiv": {
      "de": "er äße",
      "lv": "він би їв"
    },
    "partizipVergangenheit": {
      "de": "gegessen",
      "lv": "з’їдений"
    }
  },
  {
    "infinitiv": {
      "de": "fahren",
      "lv": "їхати • поїхати"
    },
    "praesens": {
      "de": "er fährt",
      "lv": "він їде"
    },
    "imperfektIndikativ": {
      "de": "er fuhr",
      "lv": "він їхав"
    },
    "imperfektKonjunktiv": {
      "de": "er führe",
      "lv": "він би їхав"
    },
    "partizipVergangenheit": {
      "de": "gefahren (er ist)",
      "lv": "він поїхав"
    }
  },
  {
    "infinitiv": {
      "de": "fallen",
      "lv": "падати • впасти"
    },
    "praesens": {
      "de": "er fällt",
      "lv": "він падає"
    },
    "imperfektIndikativ": {
      "de": "er fiel",
      "lv": "він падав"
    },
    "imperfektKonjunktiv": {
      "de": "er fiele",
      "lv": "він би падав"
    },
    "partizipVergangenheit": {
      "de": "gefallen (er ist)",
      "lv": "він упав"
    }
  },
  {
    "infinitiv": {
      "de": "fangen",
      "lv": "ловити • зловити"
    },
    "praesens": {
      "de": "er fängt",
      "lv": "він ловить"
    },
    "imperfektIndikativ": {
      "de": "er fing",
      "lv": "він ловив"
    },
    "imperfektKonjunktiv": {
      "de": "er finge",
      "lv": "він би ловив"
    },
    "partizipVergangenheit": {
      "de": "gefangen",
      "lv": "зловлений"
    }
  },
  {
    "infinitiv": {
      "de": "finden",
      "lv": "знаходити • знайти"
    },
    "praesens": {
      "de": "er findet",
      "lv": "він знаходить"
    },
    "imperfektIndikativ": {
      "de": "er fand",
      "lv": "він знаходив"
    },
    "imperfektKonjunktiv": {
      "de": "er fände",
      "lv": "він би знаходив"
    },
    "partizipVergangenheit": {
      "de": "gefunden",
      "lv": "знайдений"
    }
  },
  {
    "infinitiv": {
      "de": "fliegen",
      "lv": "летіти • полетіти"
    },
    "praesens": {
      "de": "er fliegt",
      "lv": "він летить"
    },
    "imperfektIndikativ": {
      "de": "er flog",
      "lv": "він летів"
    },
    "imperfektKonjunktiv": {
      "de": "er flöge",
      "lv": "він би летів"
    },
    "partizipVergangenheit": {
      "de": "geflogen (er ist)",
      "lv": "він полетів"
    }
  },
  {
    "infinitiv": {
      "de": "fliehen",
      "lv": "тікати • втекти"
    },
    "praesens": {
      "de": "er flieht",
      "lv": "він тікає"
    },
    "imperfektIndikativ": {
      "de": "er floh",
      "lv": "він тікав"
    },
    "imperfektKonjunktiv": {
      "de": "er flöhe",
      "lv": "він би тікав"
    },
    "partizipVergangenheit": {
      "de": "geflohen (er ist)",
      "lv": "він утік"
    }
  },
  {
    "infinitiv": {
      "de": "fließen",
      "lv": "текти"
    },
    "praesens": {
      "de": "er fließt",
      "lv": "він тече"
    },
    "imperfektIndikativ": {
      "de": "er floss",
      "lv": "він тік"
    },
    "imperfektKonjunktiv": {
      "de": "er flösse",
      "lv": "він би тік"
    },
    "partizipVergangenheit": {
      "de": "geflossen (er ist)",
      "lv": "він тік"
    }
  },
  {
    "infinitiv": {
      "de": "fressen",
      "lv": "їсти • з’їсти / пожирати • пожерти"
    },
    "praesens": {
      "de": "er frisst",
      "lv": "він їсть / пожирає"
    },
    "imperfektIndikativ": {
      "de": "er frass",
      "lv": "він їв / пожирав"
    },
    "imperfektKonjunktiv": {
      "de": "er fräße",
      "lv": "він би їв / пожирав"
    },
    "partizipVergangenheit": {
      "de": "gefressen",
      "lv": "з’їдений / пожертий"
    }
  },
  {
    "infinitiv": {
      "de": "frieren",
      "lv": "мерзнути • змерзнути"
    },
    "praesens": {
      "de": "er friert",
      "lv": "він мерзне"
    },
    "imperfektIndikativ": {
      "de": "er fror",
      "lv": "він мерз"
    },
    "imperfektKonjunktiv": {
      "de": "er fröre",
      "lv": "він би мерз"
    },
    "partizipVergangenheit": {
      "de": "gefroren",
      "lv": "змерзлий"
    }
  },
  {
    "infinitiv": {
      "de": "geben",
      "lv": "давати • дати"
    },
    "praesens": {
      "de": "er gibt",
      "lv": "він дає"
    },
    "imperfektIndikativ": {
      "de": "er gab",
      "lv": "він давав"
    },
    "imperfektKonjunktiv": {
      "de": "er gäbe",
      "lv": "він би давав"
    },
    "partizipVergangenheit": {
      "de": "gegeben",
      "lv": "даний"
    }
  },
  {
    "infinitiv": {
      "de": "gedeihen",
      "lv": "процвітати"
    },
    "praesens": {
      "de": "er gedeiht",
      "lv": "він процвітає"
    },
    "imperfektIndikativ": {
      "de": "er gedieh",
      "lv": "він процвітав"
    },
    "imperfektKonjunktiv": {
      "de": "er gediehe",
      "lv": "він би процвітав"
    },
    "partizipVergangenheit": {
      "de": "gediehen (er ist)",
      "lv": "він процвітав"
    }
  },
  {
    "infinitiv": {
      "de": "gehen",
      "lv": "іти • піти"
    },
    "praesens": {
      "de": "er geht",
      "lv": "він іде"
    },
    "imperfektIndikativ": {
      "de": "er ging",
      "lv": "він ішов"
    },
    "imperfektKonjunktiv": {
      "de": "er ginge",
      "lv": "він би йшов"
    },
    "partizipVergangenheit": {
      "de": "gegangen (er ist)",
      "lv": "він пішов"
    }
  },
  {
    "infinitiv": {
      "de": "gewinnen",
      "lv": "здобувати • здобути"
    },
    "praesens": {
      "de": "er gewinnt",
      "lv": "він здобуває"
    },
    "imperfektIndikativ": {
      "de": "er gewann",
      "lv": "він здобував"
    },
    "imperfektKonjunktiv": {
      "de": "er gewönne / er gewänne",
      "lv": "він би здобував"
    },
    "partizipVergangenheit": {
      "de": "gewonnen",
      "lv": "здобутий"
    }
  },
  {
    "infinitiv": {
      "de": "haben",
      "lv": "мати"
    },
    "praesens": {
      "de": "er hat",
      "lv": "він має"
    },
    "imperfektIndikativ": {
      "de": "hatte",
      "lv": "він мав"
    },
    "imperfektKonjunktiv": {
      "de": "hatte",
      "lv": "він би мав"
    },
    "partizipVergangenheit": {
      "de": "gehabt",
      "lv": "він мав"
    }
  },
  {
    "infinitiv": {
      "de": "halten",
      "lv": "тримати"
    },
    "praesens": {
      "de": "er hält",
      "lv": "він тримає"
    },
    "imperfektIndikativ": {
      "de": "er hielt",
      "lv": "він тримав"
    },
    "imperfektKonjunktiv": {
      "de": "er hielte",
      "lv": "він би тримав"
    },
    "partizipVergangenheit": {
      "de": "gehalten",
      "lv": "триманий"
    }
  },
  {
    "infinitiv": {
      "de": "heißen",
      "lv": "називати • назвати / зватися"
    },
    "praesens": {
      "de": "er heißt",
      "lv": "він називає / зветься"
    },
    "imperfektIndikativ": {
      "de": "er hieß",
      "lv": "він називав / звався"
    },
    "imperfektKonjunktiv": {
      "de": "er hieße",
      "lv": "він би називав / звався"
    },
    "partizipVergangenheit": {
      "de": "geheißen",
      "lv": "названий"
    }
  },
  {
    "infinitiv": {
      "de": "helfen",
      "lv": "допомагати • допомогти"
    },
    "praesens": {
      "de": "er hilft",
      "lv": "він допомагає"
    },
    "imperfektIndikativ": {
      "de": "er half",
      "lv": "він допомагав"
    },
    "imperfektKonjunktiv": {
      "de": "er hülfe / er hälfe",
      "lv": "він би допомагав"
    },
    "partizipVergangenheit": {
      "de": "geholfen",
      "lv": "він допоміг"
    }
  },
  {
    "infinitiv": {
      "de": "kommen",
      "lv": "приходити • прийти"
    },
    "praesens": {
      "de": "er kommt",
      "lv": "він приходить"
    },
    "imperfektIndikativ": {
      "de": "er kam",
      "lv": "він приходив"
    },
    "imperfektKonjunktiv": {
      "de": "er käme",
      "lv": "він би приходив"
    },
    "partizipVergangenheit": {
      "de": "gekommen (er ist)",
      "lv": "він прийшов"
    }
  },
  {
    "infinitiv": {
      "de": "können",
      "lv": "могти • змогти"
    },
    "praesens": {
      "de": "er kann",
      "lv": "він може"
    },
    "imperfektIndikativ": {
      "de": "konnte",
      "lv": "він міг"
    },
    "imperfektKonjunktiv": {
      "de": "konnte",
      "lv": "він би міг"
    },
    "partizipVergangenheit": {
      "de": "gekonnt",
      "lv": "він міг"
    }
  },
  {
    "infinitiv": {
      "de": "kriechen",
      "lv": "повзти"
    },
    "praesens": {
      "de": "er kriecht",
      "lv": "він повзе"
    },
    "imperfektIndikativ": {
      "de": "er kroch",
      "lv": "він повз"
    },
    "imperfektKonjunktiv": {
      "de": "er kröche",
      "lv": "він би повз"
    },
    "partizipVergangenheit": {
      "de": "gekrochen (er ist)",
      "lv": "він повз"
    }
  },
  {
    "infinitiv": {
      "de": "laden",
      "lv": "вантажити • навантажити / запрошувати • запросити"
    },
    "praesens": {
      "de": "er lädt",
      "lv": "він вантажить / запрошує"
    },
    "imperfektIndikativ": {
      "de": "er lud",
      "lv": "він вантажив / запрошував"
    },
    "imperfektKonjunktiv": {
      "de": "er lüde",
      "lv": "він би вантажив / запрошував"
    },
    "partizipVergangenheit": {
      "de": "geladen",
      "lv": "навантажений / запрошений"
    }
  },
  {
    "infinitiv": {
      "de": "lassen",
      "lv": "наказувати • наказати / дозволяти • дозволити"
    },
    "praesens": {
      "de": "er lässt",
      "lv": "він наказує / дозволяє"
    },
    "imperfektIndikativ": {
      "de": "er ließ",
      "lv": "він наказував / дозволяв"
    },
    "imperfektKonjunktiv": {
      "de": "er ließe",
      "lv": "він би наказував / дозволяв"
    },
    "partizipVergangenheit": {
      "de": "gelassen",
      "lv": "наказаний / дозволений"
    }
  },
  {
    "infinitiv": {
      "de": "laufen",
      "lv": "бігти • побігти"
    },
    "praesens": {
      "de": "er läuft",
      "lv": "він біжить"
    },
    "imperfektIndikativ": {
      "de": "er lief",
      "lv": "він біг"
    },
    "imperfektKonjunktiv": {
      "de": "er liefe",
      "lv": "він би біг"
    },
    "partizipVergangenheit": {
      "de": "gelaufen (er ist)",
      "lv": "він побіг"
    }
  },
  {
    "infinitiv": {
      "de": "leiden",
      "lv": "страждати"
    },
    "praesens": {
      "de": "er leidet",
      "lv": "він страждає"
    },
    "imperfektIndikativ": {
      "de": "er litt",
      "lv": "він страждав"
    },
    "imperfektKonjunktiv": {
      "de": "er litte",
      "lv": "він би страждав"
    },
    "partizipVergangenheit": {
      "de": "gelitten",
      "lv": "він страждав"
    }
  },
  {
    "infinitiv": {
      "de": "leihen",
      "lv": "позичати • позичити / брати • взяти в позику"
    },
    "praesens": {
      "de": "er leiht",
      "lv": "він позичає / бере в позику"
    },
    "imperfektIndikativ": {
      "de": "er lieh",
      "lv": "він позичав / брав у позику"
    },
    "imperfektKonjunktiv": {
      "de": "er liehe",
      "lv": "він би позичав / брав у позику"
    },
    "partizipVergangenheit": {
      "de": "geliehen",
      "lv": "позичений / взятий у позику"
    }
  },
  {
    "infinitiv": {
      "de": "lesen",
      "lv": "читати • прочитати"
    },
    "praesens": {
      "de": "er liest",
      "lv": "він читає"
    },
    "imperfektIndikativ": {
      "de": "er las",
      "lv": "він читав"
    },
    "imperfektKonjunktiv": {
      "de": "er läse",
      "lv": "він би читав"
    },
    "partizipVergangenheit": {
      "de": "gelesen",
      "lv": "прочитаний"
    }
  },
  {
    "infinitiv": {
      "de": "liegen",
      "lv": "лежати"
    },
    "praesens": {
      "de": "er liegt",
      "lv": "він лежить"
    },
    "imperfektIndikativ": {
      "de": "er lag",
      "lv": "він лежав"
    },
    "imperfektKonjunktiv": {
      "de": "er läge",
      "lv": "він би лежав"
    },
    "partizipVergangenheit": {
      "de": "gelegen",
      "lv": "він лежав"
    }
  },
  {
    "infinitiv": {
      "de": "lügen",
      "lv": "брехати • збрехати"
    },
    "praesens": {
      "de": "er lügt",
      "lv": "він бреше"
    },
    "imperfektIndikativ": {
      "de": "er log",
      "lv": "він брехав"
    },
    "imperfektKonjunktiv": {
      "de": "er löge",
      "lv": "він би брехав"
    },
    "partizipVergangenheit": {
      "de": "gelogen",
      "lv": "він збрехав"
    }
  },
  {
    "infinitiv": {
      "de": "mahlen",
      "lv": "молоти • змолоти"
    },
    "praesens": {
      "de": "er mahlt",
      "lv": "він меле"
    },
    "imperfektIndikativ": {
      "de": "er mahlte",
      "lv": "він молов"
    },
    "imperfektKonjunktiv": {
      "de": "er malte",
      "lv": "він би молов"
    },
    "partizipVergangenheit": {
      "de": "gemahlen",
      "lv": "змелений"
    }
  },
  {
    "infinitiv": {
      "de": "meiden",
      "lv": "уникати • уникнути"
    },
    "praesens": {
      "de": "er meidet",
      "lv": "він уникає"
    },
    "imperfektIndikativ": {
      "de": "er mied",
      "lv": "він уникав"
    },
    "imperfektKonjunktiv": {
      "de": "er miede",
      "lv": "він би уникав"
    },
    "partizipVergangenheit": {
      "de": "gemieden",
      "lv": "він уникнув"
    }
  },
  {
    "infinitiv": {
      "de": "melken",
      "lv": "доїти • подоїти"
    },
    "praesens": {
      "de": "er milkt / er melkt",
      "lv": "він доїть"
    },
    "imperfektIndikativ": {
      "de": "er molk / er melkte",
      "lv": "він доїв"
    },
    "imperfektKonjunktiv": {
      "de": "er mölke / er melkte",
      "lv": "він би доїв"
    },
    "partizipVergangenheit": {
      "de": "gemolken / gemelkt",
      "lv": "видоєний"
    }
  },
  {
    "infinitiv": {
      "de": "messen",
      "lv": "вимірювати • виміряти"
    },
    "praesens": {
      "de": "er misst",
      "lv": "він вимірює"
    },
    "imperfektIndikativ": {
      "de": "er mass",
      "lv": "він вимірював"
    },
    "imperfektKonjunktiv": {
      "de": "er mäße",
      "lv": "він би вимірював"
    },
    "partizipVergangenheit": {
      "de": "gemessen",
      "lv": "виміряний"
    }
  },
  {
    "infinitiv": {
      "de": "misslingen",
      "lv": "не вдаватися • не вдатися"
    },
    "praesens": {
      "de": "es misslingt",
      "lv": "воно не вдається"
    },
    "imperfektIndikativ": {
      "de": "misslang",
      "lv": "воно не вдавалося"
    },
    "imperfektKonjunktiv": {
      "de": "misslang",
      "lv": "воно б не вдавалося"
    },
    "partizipVergangenheit": {
      "de": "misslungen",
      "lv": "воно не вдалося"
    }
  },
  {
    "infinitiv": {
      "de": "mögen",
      "lv": "подобатися • сподобатися"
    },
    "praesens": {
      "de": "er mag",
      "lv": "йому подобається"
    },
    "imperfektIndikativ": {
      "de": "mochte",
      "lv": "йому подобалося"
    },
    "imperfektKonjunktiv": {
      "de": "mochte",
      "lv": "йому б подобалося"
    },
    "partizipVergangenheit": {
      "de": "gemocht",
      "lv": "йому сподобалося"
    }
  },
  {
    "infinitiv": {
      "de": "müssen",
      "lv": "мусити"
    },
    "praesens": {
      "de": "er muss",
      "lv": "він мусить"
    },
    "imperfektIndikativ": {
      "de": "musste",
      "lv": "він мусив"
    },
    "imperfektKonjunktiv": {
      "de": "musste",
      "lv": "він би мусив"
    },
    "partizipVergangenheit": {
      "de": "gemusst",
      "lv": "він мусив"
    }
  },
  {
    "infinitiv": {
      "de": "nehmen",
      "lv": "брати • взяти"
    },
    "praesens": {
      "de": "er nimmt",
      "lv": "він бере"
    },
    "imperfektIndikativ": {
      "de": "er nahm",
      "lv": "він брав"
    },
    "imperfektKonjunktiv": {
      "de": "er nähme",
      "lv": "він би брав"
    },
    "partizipVergangenheit": {
      "de": "genommen",
      "lv": "взятий"
    }
  },
  {
    "infinitiv": {
      "de": "nennen",
      "lv": "називати • назвати"
    },
    "praesens": {
      "de": "er nennt",
      "lv": "він називає"
    },
    "imperfektIndikativ": {
      "de": "er nannte",
      "lv": "він називав"
    },
    "imperfektKonjunktiv": {
      "de": "er nennte",
      "lv": "він би називав"
    },
    "partizipVergangenheit": {
      "de": "genannt",
      "lv": "названий"
    }
  },
  {
    "infinitiv": {
      "de": "pfeifen",
      "lv": "свистіти"
    },
    "praesens": {
      "de": "er pfeift",
      "lv": "він свистить"
    },
    "imperfektIndikativ": {
      "de": "er pfiff",
      "lv": "він свистів"
    },
    "imperfektKonjunktiv": {
      "de": "er pfiffe",
      "lv": "він би свистів"
    },
    "partizipVergangenheit": {
      "de": "gepfiffen",
      "lv": "він свистів"
    }
  },
  {
    "infinitiv": {
      "de": "pflegen",
      "lv": "доглядати • доглянути"
    },
    "praesens": {
      "de": "er pflegt",
      "lv": "він доглядає"
    },
    "imperfektIndikativ": {
      "de": "pflegte / pflog",
      "lv": "він доглядав"
    },
    "imperfektKonjunktiv": {
      "de": "pflegte / pflog",
      "lv": "він би доглядав"
    },
    "partizipVergangenheit": {
      "de": "gepflegt / gepflogen",
      "lv": "доглянутий"
    }
  },
  {
    "infinitiv": {
      "de": "preisen",
      "lv": "хвалити • похвалити"
    },
    "praesens": {
      "de": "er preist",
      "lv": "він хвалить"
    },
    "imperfektIndikativ": {
      "de": "er pries",
      "lv": "він хвалив"
    },
    "imperfektKonjunktiv": {
      "de": "er priese",
      "lv": "він би хвалив"
    },
    "partizipVergangenheit": {
      "de": "gepriesen",
      "lv": "похвалений"
    }
  },
  {
    "infinitiv": {
      "de": "quellen",
      "lv": "набухати • набухнути"
    },
    "praesens": {
      "de": "er quillt",
      "lv": "він набухає"
    },
    "imperfektIndikativ": {
      "de": "er quoll",
      "lv": "він набухав"
    },
    "imperfektKonjunktiv": {
      "de": "er quölle",
      "lv": "він би набухав"
    },
    "partizipVergangenheit": {
      "de": "gequollen (er ist)",
      "lv": "набухлий"
    }
  },
  {
    "infinitiv": {
      "de": "raten",
      "lv": "радити • порадити / відгадувати • відгадати"
    },
    "praesens": {
      "de": "er rät",
      "lv": "він радить / відгадує"
    },
    "imperfektIndikativ": {
      "de": "er riet",
      "lv": "він радив / відгадував"
    },
    "imperfektKonjunktiv": {
      "de": "er riete",
      "lv": "він би радив / відгадував"
    },
    "partizipVergangenheit": {
      "de": "geraten",
      "lv": "він порадив / відгаданий"
    }
  },
  {
    "infinitiv": {
      "de": "reiben",
      "lv": "терти"
    },
    "praesens": {
      "de": "er reibt",
      "lv": "він тре"
    },
    "imperfektIndikativ": {
      "de": "er rieb",
      "lv": "він тер"
    },
    "imperfektKonjunktiv": {
      "de": "er riebe",
      "lv": "він би тер"
    },
    "partizipVergangenheit": {
      "de": "gerieben",
      "lv": "тертий"
    }
  },
  {
    "infinitiv": {
      "de": "reißen",
      "lv": "рвати • порвати"
    },
    "praesens": {
      "de": "er reißt",
      "lv": "він рве"
    },
    "imperfektIndikativ": {
      "de": "er riss",
      "lv": "він рвав"
    },
    "imperfektKonjunktiv": {
      "de": "er risse",
      "lv": "він би рвав"
    },
    "partizipVergangenheit": {
      "de": "gerissen",
      "lv": "порваний"
    }
  },
  {
    "infinitiv": {
      "de": "reiten",
      "lv": "їздити верхи"
    },
    "praesens": {
      "de": "er reitet",
      "lv": "він їздить верхи"
    },
    "imperfektIndikativ": {
      "de": "er ritt",
      "lv": "він їздив верхи"
    },
    "imperfektKonjunktiv": {
      "de": "er ritte",
      "lv": "він би їздив верхи"
    },
    "partizipVergangenheit": {
      "de": "geritten (er ist)",
      "lv": "він їздив верхи"
    }
  },
  {
    "infinitiv": {
      "de": "rennen",
      "lv": "бігти • побігти"
    },
    "praesens": {
      "de": "er rennt",
      "lv": "він біжить"
    },
    "imperfektIndikativ": {
      "de": "er rannte",
      "lv": "він біг"
    },
    "imperfektKonjunktiv": {
      "de": "er rennte",
      "lv": "він би біг"
    },
    "partizipVergangenheit": {
      "de": "gerannt",
      "lv": "він побіг"
    }
  },
  {
    "infinitiv": {
      "de": "riechen",
      "lv": "нюхати • понюхати"
    },
    "praesens": {
      "de": "er riecht",
      "lv": "він нюхає"
    },
    "imperfektIndikativ": {
      "de": "er roch",
      "lv": "він нюхав"
    },
    "imperfektKonjunktiv": {
      "de": "er röche",
      "lv": "він би нюхав"
    },
    "partizipVergangenheit": {
      "de": "gerochen",
      "lv": "він понюхав"
    }
  },
  {
    "infinitiv": {
      "de": "ringen",
      "lv": "боротися"
    },
    "praesens": {
      "de": "er ringt",
      "lv": "він бореться"
    },
    "imperfektIndikativ": {
      "de": "er rang",
      "lv": "він боровся"
    },
    "imperfektKonjunktiv": {
      "de": "er ränge",
      "lv": "він би боровся"
    },
    "partizipVergangenheit": {
      "de": "gerungen",
      "lv": "він боровся"
    }
  },
  {
    "infinitiv": {
      "de": "rinnen",
      "lv": "текти"
    },
    "praesens": {
      "de": "er rinnt",
      "lv": "він тече"
    },
    "imperfektIndikativ": {
      "de": "er rann",
      "lv": "він тік"
    },
    "imperfektKonjunktiv": {
      "de": "er ränne / er rönne",
      "lv": "він би тік"
    },
    "partizipVergangenheit": {
      "de": "geronnen (er ist)",
      "lv": "він тік"
    }
  },
  {
    "infinitiv": {
      "de": "rufen",
      "lv": "кликати • покликати"
    },
    "praesens": {
      "de": "er ruft",
      "lv": "він кличе"
    },
    "imperfektIndikativ": {
      "de": "er rief",
      "lv": "він кликав"
    },
    "imperfektKonjunktiv": {
      "de": "er riefe",
      "lv": "він би кликав"
    },
    "partizipVergangenheit": {
      "de": "gerufen",
      "lv": "покликаний"
    }
  },
  {
    "infinitiv": {
      "de": "salzen",
      "lv": "солити • посолити"
    },
    "praesens": {
      "de": "er salzt",
      "lv": "він солить"
    },
    "imperfektIndikativ": {
      "de": "er salzte",
      "lv": "він солив"
    },
    "imperfektKonjunktiv": {
      "de": "er salzte",
      "lv": "він би солив"
    },
    "partizipVergangenheit": {
      "de": "gesalzen",
      "lv": "посолений"
    }
  },
  {
    "infinitiv": {
      "de": "saufen",
      "lv": "пиячити / пити • випити"
    },
    "praesens": {
      "de": "er säuft",
      "lv": "він пиячить / п’є"
    },
    "imperfektIndikativ": {
      "de": "er soff",
      "lv": "він пиячив / пив"
    },
    "imperfektKonjunktiv": {
      "de": "er söffe",
      "lv": "він би пиячив / пив"
    },
    "partizipVergangenheit": {
      "de": "gesoffen",
      "lv": "випитий"
    }
  },
  {
    "infinitiv": {
      "de": "saugen",
      "lv": "смоктати"
    },
    "praesens": {
      "de": "er saugt",
      "lv": "він смокче"
    },
    "imperfektIndikativ": {
      "de": "er sog",
      "lv": "він смоктав"
    },
    "imperfektKonjunktiv": {
      "de": "er söge",
      "lv": "він би смоктав"
    },
    "partizipVergangenheit": {
      "de": "gesogen",
      "lv": "висмоктаний"
    }
  },
  {
    "infinitiv": {
      "de": "schaffen",
      "lv": "створювати • створити"
    },
    "praesens": {
      "de": "er schafft",
      "lv": "він створює"
    },
    "imperfektIndikativ": {
      "de": "er schuf",
      "lv": "він створював"
    },
    "imperfektKonjunktiv": {
      "de": "er schüfe",
      "lv": "він би створював"
    },
    "partizipVergangenheit": {
      "de": "geschaffen",
      "lv": "створений"
    }
  },
  {
    "infinitiv": {
      "de": "schallen",
      "lv": "лунати • пролунати"
    },
    "praesens": {
      "de": "es schallt",
      "lv": "воно лунає"
    },
    "imperfektIndikativ": {
      "de": "schallte / scholl",
      "lv": "воно лунало"
    },
    "imperfektKonjunktiv": {
      "de": "schallte / scholl",
      "lv": "воно б лунало"
    },
    "partizipVergangenheit": {
      "de": "geschallt",
      "lv": "воно пролунало"
    }
  },
  {
    "infinitiv": {
      "de": "scheiden",
      "lv": "розлучати • розлучити / розлучатися • розлучитися"
    },
    "praesens": {
      "de": "er scheidet",
      "lv": "він розлучає / розлучається"
    },
    "imperfektIndikativ": {
      "de": "er schied",
      "lv": "він розлучав / розлучався"
    },
    "imperfektKonjunktiv": {
      "de": "er schiede",
      "lv": "він би розлучав / розлучався"
    },
    "partizipVergangenheit": {
      "de": "geschieden (er hat / er ist)",
      "lv": "розлучений"
    }
  },
  {
    "infinitiv": {
      "de": "scheinen",
      "lv": "світити / здаватися"
    },
    "praesens": {
      "de": "er scheint",
      "lv": "він світить / здається"
    },
    "imperfektIndikativ": {
      "de": "er schien",
      "lv": "він світив / здавався"
    },
    "imperfektKonjunktiv": {
      "de": "er schiene",
      "lv": "він би світив / здавався"
    },
    "partizipVergangenheit": {
      "de": "geschienen",
      "lv": "він світив / здавався"
    }
  },
  {
    "infinitiv": {
      "de": "schelten",
      "lv": "лаяти • вилаяти"
    },
    "praesens": {
      "de": "er schilt",
      "lv": "він лає"
    },
    "imperfektIndikativ": {
      "de": "er schalt",
      "lv": "він лаяв"
    },
    "imperfektKonjunktiv": {
      "de": "er schölte / er schälte",
      "lv": "він би лаяв"
    },
    "partizipVergangenheit": {
      "de": "gescholten",
      "lv": "вилаяний"
    }
  },
  {
    "infinitiv": {
      "de": "scheren",
      "lv": "стригти • обстригти"
    },
    "praesens": {
      "de": "er schert",
      "lv": "він стриже"
    },
    "imperfektIndikativ": {
      "de": "schor / scherte",
      "lv": "він стриг"
    },
    "imperfektKonjunktiv": {
      "de": "schor / scherte",
      "lv": "він би стриг"
    },
    "partizipVergangenheit": {
      "de": "geschoren / geschert",
      "lv": "обстрижений"
    }
  },
  {
    "infinitiv": {
      "de": "schieben",
      "lv": "посувати • посунути"
    },
    "praesens": {
      "de": "er schiebt",
      "lv": "він посуває"
    },
    "imperfektIndikativ": {
      "de": "er schob",
      "lv": "він посував"
    },
    "imperfektKonjunktiv": {
      "de": "er schöbe",
      "lv": "він би посував"
    },
    "partizipVergangenheit": {
      "de": "geschoben",
      "lv": "посунутий"
    }
  },
  {
    "infinitiv": {
      "de": "schießen",
      "lv": "стріляти • вистрілити"
    },
    "praesens": {
      "de": "er schießt",
      "lv": "він стріляє"
    },
    "imperfektIndikativ": {
      "de": "er schoss",
      "lv": "він стріляв"
    },
    "imperfektKonjunktiv": {
      "de": "er schösse",
      "lv": "він би стріляв"
    },
    "partizipVergangenheit": {
      "de": "geschossen",
      "lv": "вистрілений"
    }
  },
  {
    "infinitiv": {
      "de": "schinden",
      "lv": "мучити • замучити"
    },
    "praesens": {
      "de": "er schindet",
      "lv": "він мучить"
    },
    "imperfektIndikativ": {
      "de": "schindete",
      "lv": "він мучив"
    },
    "imperfektKonjunktiv": {
      "de": "schindete",
      "lv": "він би мучив"
    },
    "partizipVergangenheit": {
      "de": "geschunden",
      "lv": "замучений"
    }
  },
  {
    "infinitiv": {
      "de": "schlafen",
      "lv": "спати"
    },
    "praesens": {
      "de": "er schläft",
      "lv": "він спить"
    },
    "imperfektIndikativ": {
      "de": "er schlief",
      "lv": "він спав"
    },
    "imperfektKonjunktiv": {
      "de": "er schliefe",
      "lv": "він би спав"
    },
    "partizipVergangenheit": {
      "de": "geschlafen",
      "lv": "він спав"
    }
  },
  {
    "infinitiv": {
      "de": "schlagen",
      "lv": "бити • побити"
    },
    "praesens": {
      "de": "er schlägt",
      "lv": "він б’є"
    },
    "imperfektIndikativ": {
      "de": "er schlug",
      "lv": "він бив"
    },
    "imperfektKonjunktiv": {
      "de": "er schlüge",
      "lv": "він би бив"
    },
    "partizipVergangenheit": {
      "de": "geschlagen",
      "lv": "побитий"
    }
  },
  {
    "infinitiv": {
      "de": "schleichen",
      "lv": "крастися"
    },
    "praesens": {
      "de": "er schleicht",
      "lv": "він крадеться"
    },
    "imperfektIndikativ": {
      "de": "er schlich",
      "lv": "він крався"
    },
    "imperfektKonjunktiv": {
      "de": "er schliche",
      "lv": "він би крався"
    },
    "partizipVergangenheit": {
      "de": "geschlichen (er ist)",
      "lv": "він крався"
    }
  },
  {
    "infinitiv": {
      "de": "schleifen",
      "lv": "шліфувати • відшліфувати"
    },
    "praesens": {
      "de": "er schleift",
      "lv": "він шліфує"
    },
    "imperfektIndikativ": {
      "de": "er schliff",
      "lv": "він шліфував"
    },
    "imperfektKonjunktiv": {
      "de": "er schliffe",
      "lv": "він би шліфував"
    },
    "partizipVergangenheit": {
      "de": "geschliffen",
      "lv": "відшліфований"
    }
  },
  {
    "infinitiv": {
      "de": "schließen",
      "lv": "зачиняти • зачинити"
    },
    "praesens": {
      "de": "er schließt",
      "lv": "він зачиняє"
    },
    "imperfektIndikativ": {
      "de": "er schloss",
      "lv": "він зачиняв"
    },
    "imperfektKonjunktiv": {
      "de": "er schlösse",
      "lv": "він би зачиняв"
    },
    "partizipVergangenheit": {
      "de": "geschlossen",
      "lv": "зачинений"
    }
  },
  {
    "infinitiv": {
      "de": "schlingen",
      "lv": "ковтати • проковтнути"
    },
    "praesens": {
      "de": "er schlingt",
      "lv": "він ковтає"
    },
    "imperfektIndikativ": {
      "de": "er schlang",
      "lv": "він ковтав"
    },
    "imperfektKonjunktiv": {
      "de": "er schlänge",
      "lv": "він би ковтав"
    },
    "partizipVergangenheit": {
      "de": "geschlungen",
      "lv": "проковтнутий"
    }
  },
  {
    "infinitiv": {
      "de": "schmeißen",
      "lv": "кидати • кинути"
    },
    "praesens": {
      "de": "er schmeißt",
      "lv": "він кидає"
    },
    "imperfektIndikativ": {
      "de": "er schmiss",
      "lv": "він кидав"
    },
    "imperfektKonjunktiv": {
      "de": "er schmisse",
      "lv": "він би кидав"
    },
    "partizipVergangenheit": {
      "de": "geschmissen",
      "lv": "кинутий"
    }
  },
  {
    "infinitiv": {
      "de": "schmelzen",
      "lv": "танути • розтанути"
    },
    "praesens": {
      "de": "er schmilzt",
      "lv": "він тане"
    },
    "imperfektIndikativ": {
      "de": "er schmolz",
      "lv": "він танув"
    },
    "imperfektKonjunktiv": {
      "de": "er schmölze",
      "lv": "він би танув"
    },
    "partizipVergangenheit": {
      "de": "geschmolzen (er ist)",
      "lv": "розталий"
    }
  },
  {
    "infinitiv": {
      "de": "schnauben",
      "lv": "пирхати • пирхнути"
    },
    "praesens": {
      "de": "er schnaubt",
      "lv": "він пирхає"
    },
    "imperfektIndikativ": {
      "de": "schnaubte / schnob",
      "lv": "він пирхав"
    },
    "imperfektKonjunktiv": {
      "de": "schnaubte / schnob",
      "lv": "він би пирхав"
    },
    "partizipVergangenheit": {
      "de": "geschnaubt / geschnoben",
      "lv": "він пирхнув"
    }
  },
  {
    "infinitiv": {
      "de": "schneiden",
      "lv": "різати • порізати"
    },
    "praesens": {
      "de": "er schneidet",
      "lv": "він ріже"
    },
    "imperfektIndikativ": {
      "de": "er schnitt",
      "lv": "він різав"
    },
    "imperfektKonjunktiv": {
      "de": "er schnitte",
      "lv": "він би різав"
    },
    "partizipVergangenheit": {
      "de": "geschnitten",
      "lv": "порізаний"
    }
  },
  {
    "infinitiv": {
      "de": "schreiben",
      "lv": "писати • написати"
    },
    "praesens": {
      "de": "er schreibt",
      "lv": "він пише"
    },
    "imperfektIndikativ": {
      "de": "er schrieb",
      "lv": "він писав"
    },
    "imperfektKonjunktiv": {
      "de": "er schriebe",
      "lv": "він би писав"
    },
    "partizipVergangenheit": {
      "de": "geschrieben",
      "lv": "написаний"
    }
  },
  {
    "infinitiv": {
      "de": "schreien",
      "lv": "кричати"
    },
    "praesens": {
      "de": "er schreit",
      "lv": "він кричить"
    },
    "imperfektIndikativ": {
      "de": "er schrie",
      "lv": "він кричав"
    },
    "imperfektKonjunktiv": {
      "de": "er schriee",
      "lv": "він би кричав"
    },
    "partizipVergangenheit": {
      "de": "geschrien",
      "lv": "він кричав"
    }
  },
  {
    "infinitiv": {
      "de": "schreiten",
      "lv": "крокувати"
    },
    "praesens": {
      "de": "er schreitet",
      "lv": "він крокує"
    },
    "imperfektIndikativ": {
      "de": "er schritt",
      "lv": "він крокував"
    },
    "imperfektKonjunktiv": {
      "de": "er schritte",
      "lv": "він би крокував"
    },
    "partizipVergangenheit": {
      "de": "geschritten (er ist)",
      "lv": "він крокував"
    }
  },
  {
    "infinitiv": {
      "de": "schweigen",
      "lv": "мовчати"
    },
    "praesens": {
      "de": "er schweigt",
      "lv": "він мовчить"
    },
    "imperfektIndikativ": {
      "de": "er schwieg",
      "lv": "він мовчав"
    },
    "imperfektKonjunktiv": {
      "de": "er schwiege",
      "lv": "він би мовчав"
    },
    "partizipVergangenheit": {
      "de": "geschwiegen",
      "lv": "він мовчав"
    }
  },
  {
    "infinitiv": {
      "de": "schwellen",
      "lv": "пухнути • спухнути"
    },
    "praesens": {
      "de": "er schwillt",
      "lv": "він пухне"
    },
    "imperfektIndikativ": {
      "de": "er schwoll",
      "lv": "він пух"
    },
    "imperfektKonjunktiv": {
      "de": "er schwölle",
      "lv": "він би пух"
    },
    "partizipVergangenheit": {
      "de": "geschwollen (er ist)",
      "lv": "спухлий"
    }
  },
  {
    "infinitiv": {
      "de": "schwimmen",
      "lv": "плавати"
    },
    "praesens": {
      "de": "er schwimmt",
      "lv": "він плаває"
    },
    "imperfektIndikativ": {
      "de": "er schwamm",
      "lv": "він плавав"
    },
    "imperfektKonjunktiv": {
      "de": "er schwömme / er schwämme",
      "lv": "він би плавав"
    },
    "partizipVergangenheit": {
      "de": "geschwommen (er ist)",
      "lv": "він плавав"
    }
  },
  {
    "infinitiv": {
      "de": "schwinden",
      "lv": "зникати • зникнути"
    },
    "praesens": {
      "de": "er schwindet",
      "lv": "він зникає"
    },
    "imperfektIndikativ": {
      "de": "er schwand",
      "lv": "він зникав"
    },
    "imperfektKonjunktiv": {
      "de": "er schwände",
      "lv": "він би зникав"
    },
    "partizipVergangenheit": {
      "de": "geschwunden (er ist)",
      "lv": "зниклий"
    }
  },
  {
    "infinitiv": {
      "de": "schwingen",
      "lv": "махати • помахати"
    },
    "praesens": {
      "de": "er schwingt",
      "lv": "він махає"
    },
    "imperfektIndikativ": {
      "de": "er schwang",
      "lv": "він махав"
    },
    "imperfektKonjunktiv": {
      "de": "er schwänge",
      "lv": "він би махав"
    },
    "partizipVergangenheit": {
      "de": "geschwungen",
      "lv": "він помахав"
    }
  },
  {
    "infinitiv": {
      "de": "schwören",
      "lv": "присягати • присягнути"
    },
    "praesens": {
      "de": "er schwört",
      "lv": "він присягає"
    },
    "imperfektIndikativ": {
      "de": "er schwur / er schwor",
      "lv": "він присягав"
    },
    "imperfektKonjunktiv": {
      "de": "er schwöre",
      "lv": "він би присягав"
    },
    "partizipVergangenheit": {
      "de": "geschworen",
      "lv": "він присягнув"
    }
  },
  {
    "infinitiv": {
      "de": "sehen",
      "lv": "бачити • побачити"
    },
    "praesens": {
      "de": "er sieht",
      "lv": "він бачить"
    },
    "imperfektIndikativ": {
      "de": "er sah",
      "lv": "він бачив"
    },
    "imperfektKonjunktiv": {
      "de": "er sähe",
      "lv": "він би бачив"
    },
    "partizipVergangenheit": {
      "de": "gesehen",
      "lv": "побачений"
    }
  },
  {
    "infinitiv": {
      "de": "sein",
      "lv": "бути"
    },
    "praesens": {
      "de": "er ist",
      "lv": "він є"
    },
    "imperfektIndikativ": {
      "de": "war",
      "lv": "він був"
    },
    "imperfektKonjunktiv": {
      "de": "war",
      "lv": "він би був"
    },
    "partizipVergangenheit": {
      "de": "gewesen",
      "lv": "він був"
    }
  },
  {
    "infinitiv": {
      "de": "senden",
      "lv": "надсилати • надіслати"
    },
    "praesens": {
      "de": "er sendet",
      "lv": "він надсилає"
    },
    "imperfektIndikativ": {
      "de": "er sandte / er sendete",
      "lv": "він надсилав"
    },
    "imperfektKonjunktiv": {
      "de": "er sendete",
      "lv": "він би надсилав"
    },
    "partizipVergangenheit": {
      "de": "gesandt / gesendet",
      "lv": "надісланий"
    }
  },
  {
    "infinitiv": {
      "de": "sieden",
      "lv": "варити • зварити"
    },
    "praesens": {
      "de": "er siedet",
      "lv": "він варить"
    },
    "imperfektIndikativ": {
      "de": "sott / siedete",
      "lv": "він варив"
    },
    "imperfektKonjunktiv": {
      "de": "sott / siedete",
      "lv": "він би варив"
    },
    "partizipVergangenheit": {
      "de": "gesotten / gesiedet",
      "lv": "зварений"
    }
  },
  {
    "infinitiv": {
      "de": "singen",
      "lv": "співати • заспівати"
    },
    "praesens": {
      "de": "er singt",
      "lv": "він співає"
    },
    "imperfektIndikativ": {
      "de": "er sang",
      "lv": "він співав"
    },
    "imperfektKonjunktiv": {
      "de": "er sänge",
      "lv": "він би співав"
    },
    "partizipVergangenheit": {
      "de": "gesungen",
      "lv": "заспіваний"
    }
  },
  {
    "infinitiv": {
      "de": "sinken",
      "lv": "тонути • потонути"
    },
    "praesens": {
      "de": "er sinkt",
      "lv": "він тоне"
    },
    "imperfektIndikativ": {
      "de": "er sank",
      "lv": "він тонув"
    },
    "imperfektKonjunktiv": {
      "de": "er sänke",
      "lv": "він би тонув"
    },
    "partizipVergangenheit": {
      "de": "gesunken (er ist)",
      "lv": "потонулий"
    }
  },
  {
    "infinitiv": {
      "de": "sinnen",
      "lv": "міркувати"
    },
    "praesens": {
      "de": "er sinnt",
      "lv": "він міркує"
    },
    "imperfektIndikativ": {
      "de": "er sann",
      "lv": "він міркував"
    },
    "imperfektKonjunktiv": {
      "de": "er sönne / er sänne",
      "lv": "він би міркував"
    },
    "partizipVergangenheit": {
      "de": "gesonnen",
      "lv": "він міркував"
    }
  },
  {
    "infinitiv": {
      "de": "sitzen",
      "lv": "сидіти"
    },
    "praesens": {
      "de": "er sitzt",
      "lv": "він сидить"
    },
    "imperfektIndikativ": {
      "de": "er sass",
      "lv": "він сидів"
    },
    "imperfektKonjunktiv": {
      "de": "er säße",
      "lv": "він би сидів"
    },
    "partizipVergangenheit": {
      "de": "gesessen",
      "lv": "він сидів"
    }
  },
  {
    "infinitiv": {
      "de": "sollen",
      "lv": "бути повинним / мусити"
    },
    "praesens": {
      "de": "er soll",
      "lv": "він повинен / мусить"
    },
    "imperfektIndikativ": {
      "de": "sollte",
      "lv": "він був повинен / мусив"
    },
    "imperfektKonjunktiv": {
      "de": "sollte",
      "lv": "він би був повинен / мусив"
    },
    "partizipVergangenheit": {
      "de": "gesollt",
      "lv": "він був повинен / мусив"
    }
  },
  {
    "infinitiv": {
      "de": "speien",
      "lv": "плювати • плюнути"
    },
    "praesens": {
      "de": "er speit",
      "lv": "він плює"
    },
    "imperfektIndikativ": {
      "de": "er spie",
      "lv": "він плював"
    },
    "imperfektKonjunktiv": {
      "de": "er spie",
      "lv": "він би плював"
    },
    "partizipVergangenheit": {
      "de": "gespien",
      "lv": "він плюнув"
    }
  },
  {
    "infinitiv": {
      "de": "spinnen",
      "lv": "прясти • спрясти"
    },
    "praesens": {
      "de": "er spinnt",
      "lv": "він пряде"
    },
    "imperfektIndikativ": {
      "de": "er spann",
      "lv": "він пряв"
    },
    "imperfektKonjunktiv": {
      "de": "er spönne / er spänne",
      "lv": "він би пряв"
    },
    "partizipVergangenheit": {
      "de": "gesponnen",
      "lv": "спрядений"
    }
  },
  {
    "infinitiv": {
      "de": "spleißen",
      "lv": "з’єднувати • з’єднати"
    },
    "praesens": {
      "de": "er spleißt",
      "lv": "він з’єднує"
    },
    "imperfektIndikativ": {
      "de": "spliss",
      "lv": "він з’єднував"
    },
    "imperfektKonjunktiv": {
      "de": "spliss",
      "lv": "він би з’єднував"
    },
    "partizipVergangenheit": {
      "de": "gesplissen",
      "lv": "з’єднаний"
    }
  },
  {
    "infinitiv": {
      "de": "sprechen",
      "lv": "говорити"
    },
    "praesens": {
      "de": "er spricht",
      "lv": "він говорить"
    },
    "imperfektIndikativ": {
      "de": "er sprach",
      "lv": "він говорив"
    },
    "imperfektKonjunktiv": {
      "de": "er spräche",
      "lv": "він би говорив"
    },
    "partizipVergangenheit": {
      "de": "gesprochen",
      "lv": "він говорив"
    }
  },
  {
    "infinitiv": {
      "de": "sprießen",
      "lv": "проростати • прорости"
    },
    "praesens": {
      "de": "er sprießt",
      "lv": "він проростає"
    },
    "imperfektIndikativ": {
      "de": "er spross",
      "lv": "він проростав"
    },
    "imperfektKonjunktiv": {
      "de": "er sprösse",
      "lv": "він би проростав"
    },
    "partizipVergangenheit": {
      "de": "gesprossen (er ist)",
      "lv": "пророслий"
    }
  },
  {
    "infinitiv": {
      "de": "springen",
      "lv": "стрибати • стрибнути"
    },
    "praesens": {
      "de": "er springt",
      "lv": "він стрибає"
    },
    "imperfektIndikativ": {
      "de": "er sprang",
      "lv": "він стрибав"
    },
    "imperfektKonjunktiv": {
      "de": "er spränge",
      "lv": "він би стрибав"
    },
    "partizipVergangenheit": {
      "de": "gesprungen (er ist)",
      "lv": "він стрибнув"
    }
  },
  {
    "infinitiv": {
      "de": "stechen",
      "lv": "колоти • вколоти"
    },
    "praesens": {
      "de": "er sticht",
      "lv": "він коле"
    },
    "imperfektIndikativ": {
      "de": "er stach",
      "lv": "він колов"
    },
    "imperfektKonjunktiv": {
      "de": "er stäche",
      "lv": "він би колов"
    },
    "partizipVergangenheit": {
      "de": "gestochen",
      "lv": "вколотий"
    }
  },
  {
    "infinitiv": {
      "de": "stecken",
      "lv": "засовувати • засунути / встромляти • встромити"
    },
    "praesens": {
      "de": "er steckt",
      "lv": "він засовує / встромляє"
    },
    "imperfektIndikativ": {
      "de": "stak / steckte",
      "lv": "він засовував / встромляв"
    },
    "imperfektKonjunktiv": {
      "de": "stak / steckte",
      "lv": "він би засовував / встромляв"
    },
    "partizipVergangenheit": {
      "de": "gesteckt",
      "lv": "засунутий / встромлений"
    }
  },
  {
    "infinitiv": {
      "de": "stehen",
      "lv": "стояти"
    },
    "praesens": {
      "de": "er steht",
      "lv": "він стоїть"
    },
    "imperfektIndikativ": {
      "de": "er stand",
      "lv": "він стояв"
    },
    "imperfektKonjunktiv": {
      "de": "er stände / er stünde",
      "lv": "він би стояв"
    },
    "partizipVergangenheit": {
      "de": "gestanden",
      "lv": "він стояв"
    }
  },
  {
    "infinitiv": {
      "de": "stehlen",
      "lv": "красти • вкрасти"
    },
    "praesens": {
      "de": "er stiehlt",
      "lv": "він краде"
    },
    "imperfektIndikativ": {
      "de": "er stahl",
      "lv": "він крав"
    },
    "imperfektKonjunktiv": {
      "de": "er stöhle / er stähle",
      "lv": "він би крав"
    },
    "partizipVergangenheit": {
      "de": "gestohlen",
      "lv": "вкрадений"
    }
  },
  {
    "infinitiv": {
      "de": "steigen",
      "lv": "підніматися • піднятися"
    },
    "praesens": {
      "de": "er steigt",
      "lv": "він піднімається"
    },
    "imperfektIndikativ": {
      "de": "er stieg",
      "lv": "він піднімався"
    },
    "imperfektKonjunktiv": {
      "de": "er stiege",
      "lv": "він би піднімався"
    },
    "partizipVergangenheit": {
      "de": "gestiegen (er ist)",
      "lv": "він піднявся"
    }
  },
  {
    "infinitiv": {
      "de": "sterben",
      "lv": "помирати • померти"
    },
    "praesens": {
      "de": "er stirbt",
      "lv": "він помирає"
    },
    "imperfektIndikativ": {
      "de": "er starb",
      "lv": "він помирав"
    },
    "imperfektKonjunktiv": {
      "de": "er stürbe",
      "lv": "він би помирав"
    },
    "partizipVergangenheit": {
      "de": "gestorben (er ist)",
      "lv": "померлий"
    }
  },
  {
    "infinitiv": {
      "de": "stinken",
      "lv": "смердіти"
    },
    "praesens": {
      "de": "es stinkt",
      "lv": "воно смердить"
    },
    "imperfektIndikativ": {
      "de": "stank",
      "lv": "воно смерділо"
    },
    "imperfektKonjunktiv": {
      "de": "stank",
      "lv": "воно б смерділо"
    },
    "partizipVergangenheit": {
      "de": "gestunken",
      "lv": "воно смерділо"
    }
  },
  {
    "infinitiv": {
      "de": "stoßen",
      "lv": "штовхати • штовхнути"
    },
    "praesens": {
      "de": "er stößt",
      "lv": "він штовхає"
    },
    "imperfektIndikativ": {
      "de": "er stieß",
      "lv": "він штовхав"
    },
    "imperfektKonjunktiv": {
      "de": "er stieße",
      "lv": "він би штовхав"
    },
    "partizipVergangenheit": {
      "de": "gestoßen",
      "lv": "він штовхнув"
    }
  },
  {
    "infinitiv": {
      "de": "streichen",
      "lv": "фарбувати • пофарбувати / викреслювати • викреслити"
    },
    "praesens": {
      "de": "er streicht",
      "lv": "він фарбує / викреслює"
    },
    "imperfektIndikativ": {
      "de": "er strich",
      "lv": "він фарбував / викреслював"
    },
    "imperfektKonjunktiv": {
      "de": "er striche",
      "lv": "він би фарбував / викреслював"
    },
    "partizipVergangenheit": {
      "de": "gestrichen",
      "lv": "пофарбований / викреслений"
    }
  },
  {
    "infinitiv": {
      "de": "streiten",
      "lv": "сперечатися • посперечатися"
    },
    "praesens": {
      "de": "er streitet",
      "lv": "він сперечається"
    },
    "imperfektIndikativ": {
      "de": "er stritt",
      "lv": "він сперечався"
    },
    "imperfektKonjunktiv": {
      "de": "er stritte",
      "lv": "він би сперечався"
    },
    "partizipVergangenheit": {
      "de": "gestritten",
      "lv": "він посперечався"
    }
  },
  {
    "infinitiv": {
      "de": "tragen",
      "lv": "нести"
    },
    "praesens": {
      "de": "er trägt",
      "lv": "він несе"
    },
    "imperfektIndikativ": {
      "de": "er trug",
      "lv": "він ніс"
    },
    "imperfektKonjunktiv": {
      "de": "er trüge",
      "lv": "він би ніс"
    },
    "partizipVergangenheit": {
      "de": "getragen",
      "lv": "несений"
    }
  },
  {
    "infinitiv": {
      "de": "treffen",
      "lv": "зустрічати • зустріти"
    },
    "praesens": {
      "de": "er trifft",
      "lv": "він зустрічає"
    },
    "imperfektIndikativ": {
      "de": "er traf",
      "lv": "він зустрічав"
    },
    "imperfektKonjunktiv": {
      "de": "er träfe",
      "lv": "він би зустрічав"
    },
    "partizipVergangenheit": {
      "de": "getroffen",
      "lv": "зустрінутий"
    }
  },
  {
    "infinitiv": {
      "de": "treiben",
      "lv": "гнати"
    },
    "praesens": {
      "de": "er treibt",
      "lv": "він жене"
    },
    "imperfektIndikativ": {
      "de": "er trieb",
      "lv": "він гнав"
    },
    "imperfektKonjunktiv": {
      "de": "er triebe",
      "lv": "він би гнав"
    },
    "partizipVergangenheit": {
      "de": "getrieben",
      "lv": "гнаний"
    }
  },
  {
    "infinitiv": {
      "de": "treten",
      "lv": "ступати • ступити / іти • піти"
    },
    "praesens": {
      "de": "er tritt",
      "lv": "він ступає / іде"
    },
    "imperfektIndikativ": {
      "de": "er trat",
      "lv": "він ступав / ішов"
    },
    "imperfektKonjunktiv": {
      "de": "er träte",
      "lv": "він би ступав / ішов"
    },
    "partizipVergangenheit": {
      "de": "getreten (er ist)",
      "lv": "він ступив / пішов"
    }
  },
  {
    "infinitiv": {
      "de": "trinken",
      "lv": "пити • випити"
    },
    "praesens": {
      "de": "er trinkt",
      "lv": "він п’є"
    },
    "imperfektIndikativ": {
      "de": "er trank",
      "lv": "він пив"
    },
    "imperfektKonjunktiv": {
      "de": "er tränke",
      "lv": "він би пив"
    },
    "partizipVergangenheit": {
      "de": "getrunken",
      "lv": "випитий"
    }
  },
  {
    "infinitiv": {
      "de": "trügen",
      "lv": "обманювати • обманути"
    },
    "praesens": {
      "de": "er trögt",
      "lv": "він обманює"
    },
    "imperfektIndikativ": {
      "de": "er trog",
      "lv": "він обманював"
    },
    "imperfektKonjunktiv": {
      "de": "er tröge",
      "lv": "він би обманював"
    },
    "partizipVergangenheit": {
      "de": "getrogen",
      "lv": "обманутий"
    }
  },
  {
    "infinitiv": {
      "de": "tun",
      "lv": "робити • зробити"
    },
    "praesens": {
      "de": "er tut",
      "lv": "він робить"
    },
    "imperfektIndikativ": {
      "de": "er tat",
      "lv": "він робив"
    },
    "imperfektKonjunktiv": {
      "de": "er täte",
      "lv": "він би робив"
    },
    "partizipVergangenheit": {
      "de": "getan",
      "lv": "зроблений"
    }
  },
  {
    "infinitiv": {
      "de": "verderben",
      "lv": "псувати • зіпсувати"
    },
    "praesens": {
      "de": "er verdirbt",
      "lv": "він псує"
    },
    "imperfektIndikativ": {
      "de": "er verdarb",
      "lv": "він псував"
    },
    "imperfektKonjunktiv": {
      "de": "er verdürbe",
      "lv": "він би псував"
    },
    "partizipVergangenheit": {
      "de": "verdorben",
      "lv": "зіпсований"
    }
  },
  {
    "infinitiv": {
      "de": "verdrießen",
      "lv": "дратувати • роздратувати"
    },
    "praesens": {
      "de": "er verdrießt",
      "lv": "він дратує"
    },
    "imperfektIndikativ": {
      "de": "er verdross",
      "lv": "він дратував"
    },
    "imperfektKonjunktiv": {
      "de": "er verdrösse",
      "lv": "він би дратував"
    },
    "partizipVergangenheit": {
      "de": "verdrossen",
      "lv": "роздратований"
    }
  },
  {
    "infinitiv": {
      "de": "vergessen",
      "lv": "забувати • забути"
    },
    "praesens": {
      "de": "er vergisst",
      "lv": "він забуває"
    },
    "imperfektIndikativ": {
      "de": "er vergass",
      "lv": "він забував"
    },
    "imperfektKonjunktiv": {
      "de": "er vergäße",
      "lv": "він би забував"
    },
    "partizipVergangenheit": {
      "de": "vergessen",
      "lv": "забутий"
    }
  },
  {
    "infinitiv": {
      "de": "verlieren",
      "lv": "втрачати • втратити"
    },
    "praesens": {
      "de": "er verliert",
      "lv": "він втрачає"
    },
    "imperfektIndikativ": {
      "de": "er verlor",
      "lv": "він втрачав"
    },
    "imperfektKonjunktiv": {
      "de": "er verlöre",
      "lv": "він би втрачав"
    },
    "partizipVergangenheit": {
      "de": "verloren",
      "lv": "втрачений"
    }
  },
  {
    "infinitiv": {
      "de": "wachsen",
      "lv": "рости • вирости"
    },
    "praesens": {
      "de": "er wächst",
      "lv": "він росте"
    },
    "imperfektIndikativ": {
      "de": "er wuchs",
      "lv": "він ріс"
    },
    "imperfektKonjunktiv": {
      "de": "er wüchse",
      "lv": "він би ріс"
    },
    "partizipVergangenheit": {
      "de": "gewachsen (er ist)",
      "lv": "він виріс"
    }
  },
  {
    "infinitiv": {
      "de": "waschen",
      "lv": "мити • помити"
    },
    "praesens": {
      "de": "er wäscht",
      "lv": "він миє"
    },
    "imperfektIndikativ": {
      "de": "er wusch",
      "lv": "він мив"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsche",
      "lv": "він би мив"
    },
    "partizipVergangenheit": {
      "de": "gewaschen",
      "lv": "помитий"
    }
  },
  {
    "infinitiv": {
      "de": "weben",
      "lv": "ткати • виткати"
    },
    "praesens": {
      "de": "er webt",
      "lv": "він тче"
    },
    "imperfektIndikativ": {
      "de": "wob",
      "lv": "він ткав"
    },
    "imperfektKonjunktiv": {
      "de": "wob",
      "lv": "він би ткав"
    },
    "partizipVergangenheit": {
      "de": "gewoben",
      "lv": "витканий"
    }
  },
  {
    "infinitiv": {
      "de": "weichen",
      "lv": "відступати • відступити"
    },
    "praesens": {
      "de": "er weicht",
      "lv": "він відступає"
    },
    "imperfektIndikativ": {
      "de": "er wich",
      "lv": "він відступав"
    },
    "imperfektKonjunktiv": {
      "de": "er wiche",
      "lv": "він би відступав"
    },
    "partizipVergangenheit": {
      "de": "gewichen (er ist)",
      "lv": "він відступив"
    }
  },
  {
    "infinitiv": {
      "de": "weisen",
      "lv": "вказувати • вказати"
    },
    "praesens": {
      "de": "er weist",
      "lv": "він вказує"
    },
    "imperfektIndikativ": {
      "de": "er wies",
      "lv": "він вказував"
    },
    "imperfektKonjunktiv": {
      "de": "er wiese",
      "lv": "він би вказував"
    },
    "partizipVergangenheit": {
      "de": "gewiesen",
      "lv": "вказаний"
    }
  },
  {
    "infinitiv": {
      "de": "wenden",
      "lv": "повертати • повернути / перевертати • перевернути"
    },
    "praesens": {
      "de": "er wendet",
      "lv": "він повертає / перевертає"
    },
    "imperfektIndikativ": {
      "de": "er wandte / es wendete",
      "lv": "він повертав / перевертав"
    },
    "imperfektKonjunktiv": {
      "de": "er wendete",
      "lv": "він би повертав / перевертав"
    },
    "partizipVergangenheit": {
      "de": "gewandt / gewendet",
      "lv": "повернутий / перевернутий"
    }
  },
  {
    "infinitiv": {
      "de": "werben",
      "lv": "сватати • посватати"
    },
    "praesens": {
      "de": "er wirbt",
      "lv": "він сватає"
    },
    "imperfektIndikativ": {
      "de": "er warb",
      "lv": "він сватав"
    },
    "imperfektKonjunktiv": {
      "de": "er würbe",
      "lv": "він би сватав"
    },
    "partizipVergangenheit": {
      "de": "geworben",
      "lv": "посватаний"
    }
  },
  {
    "infinitiv": {
      "de": "werden",
      "lv": "ставати • стати"
    },
    "praesens": {
      "de": "er wird",
      "lv": "він стає"
    },
    "imperfektIndikativ": {
      "de": "wurde",
      "lv": "він ставав"
    },
    "imperfektKonjunktiv": {
      "de": "wurde",
      "lv": "він би ставав"
    },
    "partizipVergangenheit": {
      "de": "geworden",
      "lv": "він став"
    }
  },
  {
    "infinitiv": {
      "de": "werfen",
      "lv": "кидати • кинути"
    },
    "praesens": {
      "de": "er wirft",
      "lv": "він кидає"
    },
    "imperfektIndikativ": {
      "de": "er warf",
      "lv": "він кидав"
    },
    "imperfektKonjunktiv": {
      "de": "er würfe",
      "lv": "він би кидав"
    },
    "partizipVergangenheit": {
      "de": "geworfen",
      "lv": "кинутий"
    }
  },
  {
    "infinitiv": {
      "de": "wiegen",
      "lv": "зважувати • зважити"
    },
    "praesens": {
      "de": "er wiegt",
      "lv": "він зважує"
    },
    "imperfektIndikativ": {
      "de": "er wog",
      "lv": "він зважував"
    },
    "imperfektKonjunktiv": {
      "de": "er wöge",
      "lv": "він би зважував"
    },
    "partizipVergangenheit": {
      "de": "gewogen",
      "lv": "зважений"
    }
  },
  {
    "infinitiv": {
      "de": "winden",
      "lv": "вити • звити"
    },
    "praesens": {
      "de": "er windet",
      "lv": "він в’є"
    },
    "imperfektIndikativ": {
      "de": "er wand",
      "lv": "він вив"
    },
    "imperfektKonjunktiv": {
      "de": "er wände",
      "lv": "він би вив"
    },
    "partizipVergangenheit": {
      "de": "gewunden",
      "lv": "звитий"
    }
  },
  {
    "infinitiv": {
      "de": "wissen",
      "lv": "знати"
    },
    "praesens": {
      "de": "er weiß",
      "lv": "він знає"
    },
    "imperfektIndikativ": {
      "de": "er wusste",
      "lv": "він знав"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsste",
      "lv": "він би знав"
    },
    "partizipVergangenheit": {
      "de": "gewusst",
      "lv": "знаний"
    }
  },
  {
    "infinitiv": {
      "de": "wollen",
      "lv": "хотіти"
    },
    "praesens": {
      "de": "er will",
      "lv": "він хоче"
    },
    "imperfektIndikativ": {
      "de": "wollte",
      "lv": "він хотів"
    },
    "imperfektKonjunktiv": {
      "de": "wollte",
      "lv": "він би хотів"
    },
    "partizipVergangenheit": {
      "de": "gewollt",
      "lv": "він хотів"
    }
  },
  {
    "infinitiv": {
      "de": "wringen",
      "lv": "викручувати • викрутити / вичавлювати • вичавити"
    },
    "praesens": {
      "de": "er wringt",
      "lv": "він викручує / вичавлює"
    },
    "imperfektIndikativ": {
      "de": "wrang",
      "lv": "він викручував / вичавлював"
    },
    "imperfektKonjunktiv": {
      "de": "wrang",
      "lv": "він би викручував / вичавлював"
    },
    "partizipVergangenheit": {
      "de": "gewrungen",
      "lv": "викручений / вичавлений"
    }
  },
  {
    "infinitiv": {
      "de": "zeihen",
      "lv": "звинувачувати • звинуватити"
    },
    "praesens": {
      "de": "er zeiht",
      "lv": "він звинувачує"
    },
    "imperfektIndikativ": {
      "de": "zieh",
      "lv": "він звинувачував"
    },
    "imperfektKonjunktiv": {
      "de": "zieh",
      "lv": "він би звинувачував"
    },
    "partizipVergangenheit": {
      "de": "geziehen",
      "lv": "звинувачений"
    }
  },
  {
    "infinitiv": {
      "de": "ziehen",
      "lv": "тягнути • потягнути"
    },
    "praesens": {
      "de": "er zieht",
      "lv": "він тягне"
    },
    "imperfektIndikativ": {
      "de": "er zog",
      "lv": "він тягнув"
    },
    "imperfektKonjunktiv": {
      "de": "er zöge",
      "lv": "він би тягнув"
    },
    "partizipVergangenheit": {
      "de": "gezogen",
      "lv": "потягнутий"
    }
  },
  {
    "infinitiv": {
      "de": "zwingen",
      "lv": "змушувати • змусити"
    },
    "praesens": {
      "de": "er zwingt",
      "lv": "він змушує"
    },
    "imperfektIndikativ": {
      "de": "er zwang",
      "lv": "він змушував"
    },
    "imperfektKonjunktiv": {
      "de": "er zwänge",
      "lv": "він би змушував"
    },
    "partizipVergangenheit": {
      "de": "gezwungen",
      "lv": "змушений"
    }
  },
  {
    "infinitiv": {
      "de": "empfangen",
      "lv": "отримувати • отримати"
    },
    "praesens": {
      "de": "er empfängt",
      "lv": "він отримує"
    },
    "imperfektIndikativ": {
      "de": "er empfing",
      "lv": "він отримував"
    },
    "imperfektKonjunktiv": {
      "de": "er empfinge",
      "lv": "він би отримував"
    },
    "partizipVergangenheit": {
      "de": "empfangen",
      "lv": "отриманий"
    }
  },
  {
    "infinitiv": {
      "de": "erwägen",
      "lv": "обмірковувати • обміркувати"
    },
    "praesens": {
      "de": "er erwägt",
      "lv": "він обмірковує"
    },
    "imperfektIndikativ": {
      "de": "er erwog",
      "lv": "він обмірковував"
    },
    "imperfektKonjunktiv": {
      "de": "er erwöge",
      "lv": "він би обмірковував"
    },
    "partizipVergangenheit": {
      "de": "erwogen",
      "lv": "обміркований"
    }
  },
  {
    "infinitiv": {
      "de": "fechten",
      "lv": "битися"
    },
    "praesens": {
      "de": "er ficht",
      "lv": "він б’ється"
    },
    "imperfektIndikativ": {
      "de": "er focht",
      "lv": "він бився"
    },
    "imperfektKonjunktiv": {
      "de": "er föchte",
      "lv": "він би бився"
    },
    "partizipVergangenheit": {
      "de": "gefochten",
      "lv": "він бився"
    }
  },
  {
    "infinitiv": {
      "de": "flechten",
      "lv": "плести • сплести"
    },
    "praesens": {
      "de": "er flicht",
      "lv": "він плете"
    },
    "imperfektIndikativ": {
      "de": "er flocht",
      "lv": "він плів"
    },
    "imperfektKonjunktiv": {
      "de": "er flöchte",
      "lv": "він би плів"
    },
    "partizipVergangenheit": {
      "de": "geflochten",
      "lv": "сплетений"
    }
  },
  {
    "infinitiv": {
      "de": "hangen",
      "lv": "висіти"
    },
    "praesens": {
      "de": "er hängt",
      "lv": "він висить"
    },
    "imperfektIndikativ": {
      "de": "er hing",
      "lv": "він висів"
    },
    "imperfektKonjunktiv": {
      "de": "er hinge",
      "lv": "він би висів"
    },
    "partizipVergangenheit": {
      "de": "gehangen",
      "lv": "він висів"
    }
  },
  {
    "infinitiv": {
      "de": "spalten",
      "lv": "розколювати • розколоти"
    },
    "praesens": {
      "de": "er spaltet",
      "lv": "він розколює"
    },
    "imperfektIndikativ": {
      "de": "er spaltete",
      "lv": "він розколював"
    },
    "imperfektKonjunktiv": {
      "de": "er spaltete",
      "lv": "він би розколював"
    },
    "partizipVergangenheit": {
      "de": "gespalten",
      "lv": "розколотий"
    }
  },
  {
    "infinitiv": {
      "de": "verzeihen",
      "lv": "прощати • простити"
    },
    "praesens": {
      "de": "er verzeiht",
      "lv": "він прощає"
    },
    "imperfektIndikativ": {
      "de": "er verzieh",
      "lv": "він прощав"
    },
    "imperfektKonjunktiv": {
      "de": "er verziehe",
      "lv": "він би прощав"
    },
    "partizipVergangenheit": {
      "de": "verziehen",
      "lv": "прощений"
    }
  }
];

window.VERB_ENTRIES = VERB_ENTRIES;

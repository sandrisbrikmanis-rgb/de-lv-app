const VERB_ENTRIES = [
  {
    "infinitiv": {
      "de": "backen",
      "lv": "пекти"
    },
    "praesens": {
      "de": "er bäckt",
      "lv": "він пече"
    },
    "imperfektIndikativ": {
      "de": "er buk",
      "lv": "він випікав"
    },
    "imperfektKonjunktiv": {
      "de": "er büke",
      "lv": "він би випік"
    },
    "partizipVergangenheit": {
      "de": "gebacken",
      "lv": "смажені/запечені"
    }
  },
  {
    "infinitiv": {
      "de": "befehlen",
      "lv": "командувати"
    },
    "praesens": {
      "de": "er befiehlt",
      "lv": "наказує він"
    },
    "imperfektIndikativ": {
      "de": "er befahl",
      "lv": "— наказав він"
    },
    "imperfektKonjunktiv": {
      "de": "er beföhle",
      "lv": "він би командував"
    },
    "partizipVergangenheit": {
      "de": "befohlen",
      "lv": "наказав"
    }
  },
  {
    "infinitiv": {
      "de": "beginnen",
      "lv": "почати"
    },
    "praesens": {
      "de": "er beginnt",
      "lv": "він починає"
    },
    "imperfektIndikativ": {
      "de": "er begann",
      "lv": "почав він"
    },
    "imperfektKonjunktiv": {
      "de": "er begönne / er begänne",
      "lv": "він почав би"
    },
    "partizipVergangenheit": {
      "de": "begonnen",
      "lv": "почався"
    }
  },
  {
    "infinitiv": {
      "de": "beißen",
      "lv": "kost"
    },
    "praesens": {
      "de": "er beißt",
      "lv": "він кусається"
    },
    "imperfektIndikativ": {
      "de": "er biss",
      "lv": "він закодував"
    },
    "imperfektKonjunktiv": {
      "de": "er bisse",
      "lv": "він кусається"
    },
    "partizipVergangenheit": {
      "de": "gebissen",
      "lv": "покусаний / покусаний"
    }
  },
  {
    "infinitiv": {
      "de": "bergen",
      "lv": "приховати"
    },
    "praesens": {
      "de": "er birgt",
      "lv": "він ховається"
    },
    "imperfektIndikativ": {
      "de": "er barg",
      "lv": "він сховався"
    },
    "imperfektKonjunktiv": {
      "de": "er bürge / er bärge",
      "lv": "він би сховався"
    },
    "partizipVergangenheit": {
      "de": "geborgen",
      "lv": "приховано / збережено"
    }
  },
  {
    "infinitiv": {
      "de": "bersten",
      "lv": "розривається"
    },
    "praesens": {
      "de": "er birst",
      "lv": "він лопається"
    },
    "imperfektIndikativ": {
      "de": "er barst / er borst",
      "lv": "— вирвався він"
    },
    "imperfektKonjunktiv": {
      "de": "er bärste / er börste",
      "lv": "він лопається"
    },
    "partizipVergangenheit": {
      "de": "geborsten (er ist)",
      "lv": "зламаний"
    }
  },
  {
    "infinitiv": {
      "de": "bewegen",
      "lv": "заохочувати"
    },
    "praesens": {
      "de": "er bewegt",
      "lv": "— підказує він"
    },
    "imperfektIndikativ": {
      "de": "er bewog",
      "lv": "— закликав він"
    },
    "imperfektKonjunktiv": {
      "de": "er bewöge",
      "lv": "він підбадьорював би"
    },
    "partizipVergangenheit": {
      "de": "bewogen",
      "lv": "заохочували"
    }
  },
  {
    "infinitiv": {
      "de": "biegen",
      "lv": "зігнути"
    },
    "praesens": {
      "de": "er biegt",
      "lv": "він кланяється"
    },
    "imperfektIndikativ": {
      "de": "er bog",
      "lv": "він зігнувся"
    },
    "imperfektKonjunktiv": {
      "de": "er böge",
      "lv": "він би зігнувся"
    },
    "partizipVergangenheit": {
      "de": "gebogen",
      "lv": "зігнутий"
    }
  },
  {
    "infinitiv": {
      "de": "bieten",
      "lv": "обіцяти"
    },
    "praesens": {
      "de": "er bietet",
      "lv": "він обіцяє"
    },
    "imperfektIndikativ": {
      "de": "er bot",
      "lv": "він пообіцяв"
    },
    "imperfektKonjunktiv": {
      "de": "er böte",
      "lv": "він пообіцяв"
    },
    "partizipVergangenheit": {
      "de": "geboten",
      "lv": "обіцяно / запропоновано"
    }
  },
  {
    "infinitiv": {
      "de": "binden",
      "lv": "сито"
    },
    "praesens": {
      "de": "er bindet",
      "lv": "він сіно"
    },
    "imperfektIndikativ": {
      "de": "er band",
      "lv": "він посіяв"
    },
    "imperfektKonjunktiv": {
      "de": "er bände",
      "lv": "він процідив"
    },
    "partizipVergangenheit": {
      "de": "gebunden",
      "lv": "сито"
    }
  },
  {
    "infinitiv": {
      "de": "bitten",
      "lv": "просити"
    },
    "praesens": {
      "de": "er bittet",
      "lv": "— благає він"
    },
    "imperfektIndikativ": {
      "de": "er bat",
      "lv": "запитав він"
    },
    "imperfektKonjunktiv": {
      "de": "er bäte",
      "lv": "він молився б"
    },
    "partizipVergangenheit": {
      "de": "gebeten",
      "lv": "запитуваний"
    }
  },
  {
    "infinitiv": {
      "de": "blasen",
      "lv": "дути"
    },
    "praesens": {
      "de": "er bläst",
      "lv": "він дме"
    },
    "imperfektIndikativ": {
      "de": "er blies",
      "lv": "— подув він"
    },
    "imperfektKonjunktiv": {
      "de": "er bliese",
      "lv": "він би дув"
    },
    "partizipVergangenheit": {
      "de": "geblasen",
      "lv": "продутий"
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
      "lv": "воно бродить"
    },
    "imperfektKonjunktiv": {
      "de": "es göre / es gärte",
      "lv": "було б гірко"
    },
    "partizipVergangenheit": {
      "de": "gegoren / gegärt",
      "lv": "жито"
    }
  },
  {
    "infinitiv": {
      "de": "gebären",
      "lv": "народжувати"
    },
    "praesens": {
      "de": "sie gebiert",
      "lv": "в її лоні"
    },
    "imperfektIndikativ": {
      "de": "sie gebar",
      "lv": "вона народила"
    },
    "imperfektKonjunktiv": {
      "de": "sie gebäre",
      "lv": "вона б народила"
    },
    "partizipVergangenheit": {
      "de": "geboren",
      "lv": "народився / народився"
    }
  },
  {
    "infinitiv": {
      "de": "gelingen",
      "lv": "досягти успіху"
    },
    "praesens": {
      "de": "es gelingt",
      "lv": "це вдається"
    },
    "imperfektIndikativ": {
      "de": "es gelang",
      "lv": "це спрацювало"
    },
    "imperfektKonjunktiv": {
      "de": "es gelänge",
      "lv": "це спрацювало б"
    },
    "partizipVergangenheit": {
      "de": "gelungen (es ist)",
      "lv": "вдалося"
    }
  },
  {
    "infinitiv": {
      "de": "gelten",
      "lv": "стане в нагоді"
    },
    "praesens": {
      "de": "er gilt",
      "lv": "він der / дійсний"
    },
    "imperfektIndikativ": {
      "de": "er galt",
      "lv": "він придатний / був придатний"
    },
    "imperfektKonjunktiv": {
      "de": "er gölte / es gälte",
      "lv": "він підійде / це підійде"
    },
    "partizipVergangenheit": {
      "de": "gegolten",
      "lv": "застосовано / було дійсним"
    }
  },
  {
    "infinitiv": {
      "de": "genesen",
      "lv": "одужувати"
    },
    "praesens": {
      "de": "er genest",
      "lv": "йому стає краще"
    },
    "imperfektIndikativ": {
      "de": "er genas",
      "lv": "йому стало добре"
    },
    "imperfektKonjunktiv": {
      "de": "er genäse",
      "lv": "він би одужав"
    },
    "partizipVergangenheit": {
      "de": "genesen (er ist)",
      "lv": "одужувати"
    }
  },
  {
    "infinitiv": {
      "de": "genießen",
      "lv": "насолоджуватися"
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
      "lv": "насолоджувався"
    }
  },
  {
    "infinitiv": {
      "de": "geschehen",
      "lv": "статися"
    },
    "praesens": {
      "de": "es geschieht",
      "lv": "таке буває"
    },
    "imperfektIndikativ": {
      "de": "es geschah",
      "lv": "це сталося"
    },
    "imperfektKonjunktiv": {
      "de": "es geschähe",
      "lv": "це сталося б"
    },
    "partizipVergangenheit": {
      "de": "geschehen (es ist)",
      "lv": "сталося"
    }
  },
  {
    "infinitiv": {
      "de": "gießen",
      "lv": "лейтенант"
    },
    "praesens": {
      "de": "er gießt",
      "lv": "він наливає"
    },
    "imperfektIndikativ": {
      "de": "er goss",
      "lv": "він налив"
    },
    "imperfektKonjunktiv": {
      "de": "er gösse",
      "lv": "він дощить"
    },
    "partizipVergangenheit": {
      "de": "gegossen",
      "lv": "річ"
    }
  },
  {
    "infinitiv": {
      "de": "gleichen",
      "lv": "нагадувати"
    },
    "praesens": {
      "de": "er gleicht",
      "lv": "він схожий"
    },
    "imperfektIndikativ": {
      "de": "er glich",
      "lv": "він наслідував"
    },
    "imperfektKonjunktiv": {
      "de": "er gliche",
      "lv": "він буде наслідувати"
    },
    "partizipVergangenheit": {
      "de": "geglichen",
      "lv": "нагадував"
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
      "lv": "послизнувся"
    }
  },
  {
    "infinitiv": {
      "de": "glimmen",
      "lv": "світиться"
    },
    "praesens": {
      "de": "er glimmt",
      "lv": "він світиться"
    },
    "imperfektIndikativ": {
      "de": "er glimmte / glomm",
      "lv": "він світився"
    },
    "imperfektKonjunktiv": {
      "de": "er glimmte",
      "lv": "він би світився"
    },
    "partizipVergangenheit": {
      "de": "geglimmt / geglommen",
      "lv": "світиться"
    }
  },
  {
    "infinitiv": {
      "de": "graben",
      "lv": "копати"
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
      "lv": "копати"
    }
  },
  {
    "infinitiv": {
      "de": "greifen",
      "lv": "ловити"
    },
    "praesens": {
      "de": "er greift",
      "lv": "він ловить"
    },
    "imperfektIndikativ": {
      "de": "er griff",
      "lv": "він спіймав"
    },
    "imperfektKonjunktiv": {
      "de": "er griffe",
      "lv": "він би спіймав"
    },
    "partizipVergangenheit": {
      "de": "gegriffen",
      "lv": "спійманий / схоплений"
    }
  },
  {
    "infinitiv": {
      "de": "hauen",
      "lv": "різати"
    },
    "praesens": {
      "de": "er haut",
      "lv": "він вибрав"
    },
    "imperfektIndikativ": {
      "de": "er hieb",
      "lv": "— огризнувся він"
    },
    "imperfektKonjunktiv": {
      "de": "er hiebe",
      "lv": "він би вирізав"
    },
    "partizipVergangenheit": {
      "de": "gehauen",
      "lv": "різьблені"
    }
  },
  {
    "infinitiv": {
      "de": "heben",
      "lv": "піднімати"
    },
    "praesens": {
      "de": "er hebt",
      "lv": "він піднімає"
    },
    "imperfektIndikativ": {
      "de": "er hob",
      "lv": "він приніс"
    },
    "imperfektKonjunktiv": {
      "de": "er höbe",
      "lv": "він би збудував"
    },
    "partizipVergangenheit": {
      "de": "gehoben",
      "lv": "побудований"
    }
  },
  {
    "infinitiv": {
      "de": "kennen",
      "lv": "знати / знати"
    },
    "praesens": {
      "de": "er kennt",
      "lv": "він знає"
    },
    "imperfektIndikativ": {
      "de": "kannte",
      "lv": "знав"
    },
    "imperfektKonjunktiv": {
      "de": "kannte",
      "lv": "знав"
    },
    "partizipVergangenheit": {
      "de": "gekannt",
      "lv": "знайомство"
    }
  },
  {
    "infinitiv": {
      "de": "klingen",
      "lv": "звучати"
    },
    "praesens": {
      "de": "er klingt",
      "lv": "він звучить"
    },
    "imperfektIndikativ": {
      "de": "er klang",
      "lv": "— пролунав він"
    },
    "imperfektKonjunktiv": {
      "de": "er klänge",
      "lv": "він звучав би"
    },
    "partizipVergangenheit": {
      "de": "geklungen",
      "lv": "прозвучало"
    }
  },
  {
    "infinitiv": {
      "de": "kneifen",
      "lv": "щіпка"
    },
    "praesens": {
      "de": "er kneift",
      "lv": "він іронізує"
    },
    "imperfektIndikativ": {
      "de": "er kniff",
      "lv": "він ущипнув"
    },
    "imperfektKonjunktiv": {
      "de": "er kniffe",
      "lv": "він ущипнув би"
    },
    "partizipVergangenheit": {
      "de": "gekniffen",
      "lv": "прищипаний"
    }
  },
  {
    "infinitiv": {
      "de": "bleiben",
      "lv": "залишитися"
    },
    "praesens": {
      "de": "er bleibt",
      "lv": "він залишається"
    },
    "imperfektIndikativ": {
      "de": "er blieb",
      "lv": "він залишився"
    },
    "imperfektKonjunktiv": {
      "de": "er bliebe",
      "lv": "він би залишився"
    },
    "partizipVergangenheit": {
      "de": "geblieben (er ist)",
      "lv": "зліва"
    }
  },
  {
    "infinitiv": {
      "de": "bleichen",
      "lv": "відбілити"
    },
    "praesens": {
      "de": "er bleicht",
      "lv": "він відбілює"
    },
    "imperfektIndikativ": {
      "de": "blich",
      "lv": "вибілені"
    },
    "imperfektKonjunktiv": {
      "de": "blich",
      "lv": "вибілені"
    },
    "partizipVergangenheit": {
      "de": "geblichen",
      "lv": "вибілені"
    }
  },
  {
    "infinitiv": {
      "de": "braten",
      "lv": "пекти"
    },
    "praesens": {
      "de": "er brät",
      "lv": "він пече"
    },
    "imperfektIndikativ": {
      "de": "er briet",
      "lv": "він випікав"
    },
    "imperfektKonjunktiv": {
      "de": "er briete",
      "lv": "він би випік"
    },
    "partizipVergangenheit": {
      "de": "gebraten",
      "lv": "смажені/запечені"
    }
  },
  {
    "infinitiv": {
      "de": "brechen",
      "lv": "зламати"
    },
    "praesens": {
      "de": "er bricht",
      "lv": "він ламається"
    },
    "imperfektIndikativ": {
      "de": "er brach",
      "lv": "він зламався"
    },
    "imperfektKonjunktiv": {
      "de": "er bräche",
      "lv": "він би зламався"
    },
    "partizipVergangenheit": {
      "de": "gebrochen",
      "lv": "зламаний / зламаний"
    }
  },
  {
    "infinitiv": {
      "de": "brennen",
      "lv": "спалювати"
    },
    "praesens": {
      "de": "er brennt",
      "lv": "він горить"
    },
    "imperfektIndikativ": {
      "de": "brannte",
      "lv": "горів"
    },
    "imperfektKonjunktiv": {
      "de": "brannte",
      "lv": "горів"
    },
    "partizipVergangenheit": {
      "de": "gebrannt",
      "lv": "спалений"
    }
  },
  {
    "infinitiv": {
      "de": "bringen",
      "lv": "nest"
    },
    "praesens": {
      "de": "er bringt",
      "lv": "він несе"
    },
    "imperfektIndikativ": {
      "de": "er brachte",
      "lv": "він ніс"
    },
    "imperfektKonjunktiv": {
      "de": "er brächte",
      "lv": "він би ніс"
    },
    "partizipVergangenheit": {
      "de": "gebracht",
      "lv": "принесений / принесений"
    }
  },
  {
    "infinitiv": {
      "de": "denken",
      "lv": "думати"
    },
    "praesens": {
      "de": "er denkt",
      "lv": "думає він"
    },
    "imperfektIndikativ": {
      "de": "er dachte",
      "lv": "— думав він"
    },
    "imperfektKonjunktiv": {
      "de": "er dächte",
      "lv": "він думав би"
    },
    "partizipVergangenheit": {
      "de": "gedacht",
      "lv": "призначений"
    }
  },
  {
    "infinitiv": {
      "de": "dingen",
      "lv": "найняти / погодитися"
    },
    "praesens": {
      "de": "er dingt",
      "lv": "він наймає"
    },
    "imperfektIndikativ": {
      "de": "dingte",
      "lv": "найнятий"
    },
    "imperfektKonjunktiv": {
      "de": "dingte",
      "lv": "найнятий"
    },
    "partizipVergangenheit": {
      "de": "gedungen",
      "lv": "найнятий"
    }
  },
  {
    "infinitiv": {
      "de": "dreschen",
      "lv": "культ"
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
      "lv": "він би поклонявся"
    },
    "partizipVergangenheit": {
      "de": "gedroschen",
      "lv": "культ"
    }
  },
  {
    "infinitiv": {
      "de": "dringen",
      "lv": "вламати"
    },
    "praesens": {
      "de": "er dringt",
      "lv": "він вривається"
    },
    "imperfektIndikativ": {
      "de": "er drang",
      "lv": "він увірвався"
    },
    "imperfektKonjunktiv": {
      "de": "er dränge",
      "lv": "він увірвався б"
    },
    "partizipVergangenheit": {
      "de": "gedrungen (er ist)",
      "lv": "увірвалися"
    }
  },
  {
    "infinitiv": {
      "de": "dünken",
      "lv": "здається"
    },
    "praesens": {
      "de": "es dünkt",
      "lv": "здається"
    },
    "imperfektIndikativ": {
      "de": "deuchte",
      "lv": "здавалося"
    },
    "imperfektKonjunktiv": {
      "de": "deuchte",
      "lv": "здавалося"
    },
    "partizipVergangenheit": {
      "de": "gedünkt",
      "lv": "здавалося"
    }
  },
  {
    "infinitiv": {
      "de": "dürfen",
      "lv": "бути дозволеним"
    },
    "praesens": {
      "de": "er darf",
      "lv": "він може"
    },
    "imperfektIndikativ": {
      "de": "durfte",
      "lv": "було дозволено"
    },
    "imperfektKonjunktiv": {
      "de": "durfte",
      "lv": "було дозволено"
    },
    "partizipVergangenheit": {
      "de": "gedurft",
      "lv": "дозволено"
    }
  },
  {
    "infinitiv": {
      "de": "empfehlen",
      "lv": "рекомендую"
    },
    "praesens": {
      "de": "er empfiehlt",
      "lv": "він пропонує"
    },
    "imperfektIndikativ": {
      "de": "er empfahl",
      "lv": "— запропонував він"
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
      "lv": "відчувати"
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
      "lv": "він відчував би"
    },
    "partizipVergangenheit": {
      "de": "empfunden",
      "lv": "фетр"
    }
  },
  {
    "infinitiv": {
      "de": "erlöschen",
      "lv": "зникає"
    },
    "praesens": {
      "de": "er erlischt",
      "lv": "він виходить"
    },
    "imperfektIndikativ": {
      "de": "er erlosch",
      "lv": "він вийшов"
    },
    "imperfektKonjunktiv": {
      "de": "er erlösche",
      "lv": "він би зник"
    },
    "partizipVergangenheit": {
      "de": "erloschen (er ist)",
      "lv": "погашений"
    }
  },
  {
    "infinitiv": {
      "de": "erschrecken",
      "lv": "заплутатися"
    },
    "praesens": {
      "de": "er erschrickt",
      "lv": "йому стає страшно"
    },
    "imperfektIndikativ": {
      "de": "er erschrak",
      "lv": "він злякався"
    },
    "imperfektKonjunktiv": {
      "de": "er erschräke",
      "lv": "він би збожеволів"
    },
    "partizipVergangenheit": {
      "de": "erschrocken (er ist)",
      "lv": "наляканий"
    }
  },
  {
    "infinitiv": {
      "de": "essen",
      "lv": "їсти"
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
      "lv": "з'їдено / з'їдено"
    }
  },
  {
    "infinitiv": {
      "de": "fahren",
      "lv": "диск"
    },
    "praesens": {
      "de": "er fährt",
      "lv": "він керує"
    },
    "imperfektIndikativ": {
      "de": "er fuhr",
      "lv": "він був за кермом"
    },
    "imperfektKonjunktiv": {
      "de": "er führe",
      "lv": "він би водив"
    },
    "partizipVergangenheit": {
      "de": "gefahren (er ist)",
      "lv": "їхав / пішов"
    }
  },
  {
    "infinitiv": {
      "de": "fallen",
      "lv": "падати"
    },
    "praesens": {
      "de": "er fällt",
      "lv": "він падає"
    },
    "imperfektIndikativ": {
      "de": "er fiel",
      "lv": "він упав"
    },
    "imperfektKonjunktiv": {
      "de": "er fiele",
      "lv": "він би впав"
    },
    "partizipVergangenheit": {
      "de": "gefallen (er ist)",
      "lv": "впав"
    }
  },
  {
    "infinitiv": {
      "de": "fangen",
      "lv": "ловити"
    },
    "praesens": {
      "de": "er fängt",
      "lv": "він ловить"
    },
    "imperfektIndikativ": {
      "de": "er fing",
      "lv": "він спіймав"
    },
    "imperfektKonjunktiv": {
      "de": "er finge",
      "lv": "він би спіймав"
    },
    "partizipVergangenheit": {
      "de": "gefangen",
      "lv": "спійманий / спійманий"
    }
  },
  {
    "infinitiv": {
      "de": "finden",
      "lv": "знайти"
    },
    "praesens": {
      "de": "er findet",
      "lv": "він знаходить"
    },
    "imperfektIndikativ": {
      "de": "er fand",
      "lv": "він знайшов"
    },
    "imperfektKonjunktiv": {
      "de": "er fände",
      "lv": "він би знайшов"
    },
    "partizipVergangenheit": {
      "de": "gefunden",
      "lv": "знайдено"
    }
  },
  {
    "infinitiv": {
      "de": "fliegen",
      "lv": "відпустити"
    },
    "praesens": {
      "de": "er fliegt",
      "lv": "він літає"
    },
    "imperfektIndikativ": {
      "de": "er flog",
      "lv": "він полетів"
    },
    "imperfektKonjunktiv": {
      "de": "er flöge",
      "lv": "він би полетів"
    },
    "partizipVergangenheit": {
      "de": "geflogen (er ist)",
      "lv": "полетів"
    }
  },
  {
    "infinitiv": {
      "de": "fliehen",
      "lv": "тікати"
    },
    "praesens": {
      "de": "er flieht",
      "lv": "він тікає"
    },
    "imperfektIndikativ": {
      "de": "er floh",
      "lv": "він утік"
    },
    "imperfektKonjunktiv": {
      "de": "er flöhe",
      "lv": "він би втік"
    },
    "partizipVergangenheit": {
      "de": "geflohen (er ist)",
      "lv": "втік"
    }
  },
  {
    "infinitiv": {
      "de": "fließen",
      "lv": "текти"
    },
    "praesens": {
      "de": "er fließt",
      "lv": "він біжить"
    },
    "imperfektIndikativ": {
      "de": "er floss",
      "lv": "він побіг"
    },
    "imperfektKonjunktiv": {
      "de": "er flösse",
      "lv": "він би побіг"
    },
    "partizipVergangenheit": {
      "de": "geflossen (er ist)",
      "lv": "пройшли"
    }
  },
  {
    "infinitiv": {
      "de": "fressen",
      "lv": "їсти завтра"
    },
    "praesens": {
      "de": "er frisst",
      "lv": "він їсть / ковтає"
    },
    "imperfektIndikativ": {
      "de": "er frass",
      "lv": "він з'їв / проковтнув"
    },
    "imperfektKonjunktiv": {
      "de": "er fräße",
      "lv": "він би їв / снідав"
    },
    "partizipVergangenheit": {
      "de": "gefressen",
      "lv": "з'їдено / ранок"
    }
  },
  {
    "infinitiv": {
      "de": "frieren",
      "lv": "холодний"
    },
    "praesens": {
      "de": "er friert",
      "lv": "він мерзне"
    },
    "imperfektIndikativ": {
      "de": "er fror",
      "lv": "він острів"
    },
    "imperfektKonjunktiv": {
      "de": "er fröre",
      "lv": "він мерз"
    },
    "partizipVergangenheit": {
      "de": "gefroren",
      "lv": "острів"
    }
  },
  {
    "infinitiv": {
      "de": "geben",
      "lv": "дарувати"
    },
    "praesens": {
      "de": "er gibt",
      "lv": "він дає"
    },
    "imperfektIndikativ": {
      "de": "er gab",
      "lv": "він дав"
    },
    "imperfektKonjunktiv": {
      "de": "er gäbe",
      "lv": "він би дав"
    },
    "partizipVergangenheit": {
      "de": "gegeben",
      "lv": "дано"
    }
  },
  {
    "infinitiv": {
      "de": "gedeihen",
      "lv": "досягти успіху"
    },
    "praesens": {
      "de": "er gedeiht",
      "lv": "йому це вдається"
    },
    "imperfektIndikativ": {
      "de": "er gedieh",
      "lv": "йому це вдалося"
    },
    "imperfektKonjunktiv": {
      "de": "er gediehe",
      "lv": "йому б це вдалося"
    },
    "partizipVergangenheit": {
      "de": "gediehen (er ist)",
      "lv": "вдалося"
    }
  },
  {
    "infinitiv": {
      "de": "gehen",
      "lv": "йти"
    },
    "praesens": {
      "de": "er geht",
      "lv": "він іде"
    },
    "imperfektIndikativ": {
      "de": "er ging",
      "lv": "він ходив"
    },
    "imperfektKonjunktiv": {
      "de": "er ginge",
      "lv": "він пішов би"
    },
    "partizipVergangenheit": {
      "de": "gegangen (er ist)",
      "lv": "пішов"
    }
  },
  {
    "infinitiv": {
      "de": "gewinnen",
      "lv": "отримати"
    },
    "praesens": {
      "de": "er gewinnt",
      "lv": "він отримує"
    },
    "imperfektIndikativ": {
      "de": "er gewann",
      "lv": "він отримав"
    },
    "imperfektKonjunktiv": {
      "de": "er gewönne / er gewänne",
      "lv": "він отримав би"
    },
    "partizipVergangenheit": {
      "de": "gewonnen",
      "lv": "отримано"
    }
  },
  {
    "infinitiv": {
      "de": "haben",
      "lv": "бути / належати"
    },
    "praesens": {
      "de": "er hat",
      "lv": "він має"
    },
    "imperfektIndikativ": {
      "de": "hatte",
      "lv": "був"
    },
    "imperfektKonjunktiv": {
      "de": "hatte",
      "lv": "був"
    },
    "partizipVergangenheit": {
      "de": "gehabt",
      "lv": "був"
    }
  },
  {
    "infinitiv": {
      "de": "halten",
      "lv": "утримувати"
    },
    "praesens": {
      "de": "er hält",
      "lv": "він там"
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
      "lv": "проведено"
    }
  },
  {
    "infinitiv": {
      "de": "heißen",
      "lv": "дзвонити"
    },
    "praesens": {
      "de": "er heißt",
      "lv": "він кличе / його кличуть"
    },
    "imperfektIndikativ": {
      "de": "er hieß",
      "lv": "він дзвонив / його викликали"
    },
    "imperfektKonjunktiv": {
      "de": "er hieße",
      "lv": "він би подзвонив / йому б подзвонили"
    },
    "partizipVergangenheit": {
      "de": "geheißen",
      "lv": "дзвонив"
    }
  },
  {
    "infinitiv": {
      "de": "helfen",
      "lv": "допомогти"
    },
    "praesens": {
      "de": "er hilft",
      "lv": "він допомагає"
    },
    "imperfektIndikativ": {
      "de": "er half",
      "lv": "він допоміг"
    },
    "imperfektKonjunktiv": {
      "de": "er hülfe / er hälfe",
      "lv": "він би допоміг"
    },
    "partizipVergangenheit": {
      "de": "geholfen",
      "lv": "допоміг"
    }
  },
  {
    "infinitiv": {
      "de": "kommen",
      "lv": "прийти"
    },
    "praesens": {
      "de": "er kommt",
      "lv": "він приходить"
    },
    "imperfektIndikativ": {
      "de": "er kam",
      "lv": "він прийшов"
    },
    "imperfektKonjunktiv": {
      "de": "er käme",
      "lv": "він би прийшов"
    },
    "partizipVergangenheit": {
      "de": "gekommen (er ist)",
      "lv": "прийшов"
    }
  },
  {
    "infinitiv": {
      "de": "können",
      "lv": "вміти"
    },
    "praesens": {
      "de": "er kann",
      "lv": "він може"
    },
    "imperfektIndikativ": {
      "de": "konnte",
      "lv": "міг би"
    },
    "imperfektKonjunktiv": {
      "de": "konnte",
      "lv": "міг би"
    },
    "partizipVergangenheit": {
      "de": "gekonnt",
      "lv": "міг би"
    }
  },
  {
    "infinitiv": {
      "de": "kriechen",
      "lv": "іде дощ"
    },
    "praesens": {
      "de": "er kriecht",
      "lv": "він нахиляється"
    },
    "imperfektIndikativ": {
      "de": "er kroch",
      "lv": "він дощив"
    },
    "imperfektKonjunktiv": {
      "de": "er kröche",
      "lv": "він дощ"
    },
    "partizipVergangenheit": {
      "de": "gekrochen (er ist)",
      "lv": "помер"
    }
  },
  {
    "infinitiv": {
      "de": "laden",
      "lv": "kraut, запросити"
    },
    "praesens": {
      "de": "er lädt",
      "lv": "він нагромаджує / запрошує"
    },
    "imperfektIndikativ": {
      "de": "er lud",
      "lv": "він загрузив / запросив"
    },
    "imperfektKonjunktiv": {
      "de": "er lüde",
      "lv": "він би завантажив / запросив"
    },
    "partizipVergangenheit": {
      "de": "geladen",
      "lv": "завантажено / запрошено"
    }
  },
  {
    "infinitiv": {
      "de": "lassen",
      "lv": "класти, пускати"
    },
    "praesens": {
      "de": "er lässt",
      "lv": "він ставить / дозволяє"
    },
    "imperfektIndikativ": {
      "de": "er ließ",
      "lv": "він наказав / дозволив"
    },
    "imperfektKonjunktiv": {
      "de": "er ließe",
      "lv": "він би поставив / дозволив"
    },
    "partizipVergangenheit": {
      "de": "gelassen",
      "lv": "поставити / дозволити"
    }
  },
  {
    "infinitiv": {
      "de": "laufen",
      "lv": "бігти"
    },
    "praesens": {
      "de": "er läuft",
      "lv": "він біжить"
    },
    "imperfektIndikativ": {
      "de": "er lief",
      "lv": "він побіг"
    },
    "imperfektKonjunktiv": {
      "de": "er liefe",
      "lv": "він би побіг"
    },
    "partizipVergangenheit": {
      "de": "gelaufen (er ist)",
      "lv": "побіг"
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
      "lv": "постраждав"
    }
  },
  {
    "infinitiv": {
      "de": "leihen",
      "lv": "позичати / позичати"
    },
    "praesens": {
      "de": "er leiht",
      "lv": "він позичає / позичає"
    },
    "imperfektIndikativ": {
      "de": "er lieh",
      "lv": "він позичив / позичив"
    },
    "imperfektKonjunktiv": {
      "de": "er liehe",
      "lv": "він би позичив / позичив"
    },
    "partizipVergangenheit": {
      "de": "geliehen",
      "lv": "позичений / позичений"
    }
  },
  {
    "infinitiv": {
      "de": "lesen",
      "lv": "читати"
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
      "lv": "він читав би"
    },
    "partizipVergangenheit": {
      "de": "gelesen",
      "lv": "читати"
    }
  },
  {
    "infinitiv": {
      "de": "liegen",
      "lv": "спати"
    },
    "praesens": {
      "de": "er liegt",
      "lv": "він спить"
    },
    "imperfektIndikativ": {
      "de": "er lag",
      "lv": "він спав"
    },
    "imperfektKonjunktiv": {
      "de": "er läge",
      "lv": "він спав би"
    },
    "partizipVergangenheit": {
      "de": "gelegen",
      "lv": "спав"
    }
  },
  {
    "infinitiv": {
      "de": "lügen",
      "lv": "брехати"
    },
    "praesens": {
      "de": "er lügt",
      "lv": "він бреше"
    },
    "imperfektIndikativ": {
      "de": "er log",
      "lv": "він збрехав"
    },
    "imperfektKonjunktiv": {
      "de": "er löge",
      "lv": "він би збрехав"
    },
    "partizipVergangenheit": {
      "de": "gelogen",
      "lv": "збрехав"
    }
  },
  {
    "infinitiv": {
      "de": "mahlen",
      "lv": "землю"
    },
    "praesens": {
      "de": "er mahlt",
      "lv": "він меле"
    },
    "imperfektIndikativ": {
      "de": "er mahlte",
      "lv": "він краю"
    },
    "imperfektKonjunktiv": {
      "de": "er malte",
      "lv": "він меле"
    },
    "partizipVergangenheit": {
      "de": "gemahlen",
      "lv": "землю"
    }
  },
  {
    "infinitiv": {
      "de": "meiden",
      "lv": "уникнути"
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
      "lv": "уникнути"
    }
  },
  {
    "infinitiv": {
      "de": "melken",
      "lv": "доїти"
    },
    "praesens": {
      "de": "er milkt / er melkt",
      "lv": "він підмітає"
    },
    "imperfektIndikativ": {
      "de": "er molk / er melkte",
      "lv": "він підмітав"
    },
    "imperfektKonjunktiv": {
      "de": "er mölke / er melkte",
      "lv": "він би доїв"
    },
    "partizipVergangenheit": {
      "de": "gemolken / gemelkt",
      "lv": "доїли"
    }
  },
  {
    "infinitiv": {
      "de": "messen",
      "lv": "вимірювати"
    },
    "praesens": {
      "de": "er misst",
      "lv": "він міряє"
    },
    "imperfektIndikativ": {
      "de": "er mass",
      "lv": "він міряв"
    },
    "imperfektKonjunktiv": {
      "de": "er mäße",
      "lv": "він би вимірював"
    },
    "partizipVergangenheit": {
      "de": "gemessen",
      "lv": "вимірюваний"
    }
  },
  {
    "infinitiv": {
      "de": "misslingen",
      "lv": "провалитися"
    },
    "praesens": {
      "de": "es misslingt",
      "lv": "це не вдається"
    },
    "imperfektIndikativ": {
      "de": "misslang",
      "lv": "не вдалося"
    },
    "imperfektKonjunktiv": {
      "de": "misslang",
      "lv": "не вдалося"
    },
    "partizipVergangenheit": {
      "de": "misslungen",
      "lv": "не вдалося"
    }
  },
  {
    "infinitiv": {
      "de": "mögen",
      "lv": "подобатися"
    },
    "praesens": {
      "de": "er mag",
      "lv": "йому подобається"
    },
    "imperfektIndikativ": {
      "de": "mochte",
      "lv": "сподобалось"
    },
    "imperfektKonjunktiv": {
      "de": "mochte",
      "lv": "сподобалось"
    },
    "partizipVergangenheit": {
      "de": "gemocht",
      "lv": "сподобався"
    }
  },
  {
    "infinitiv": {
      "de": "müssen",
      "lv": "потребувати"
    },
    "praesens": {
      "de": "er muss",
      "lv": "йому потрібно"
    },
    "imperfektIndikativ": {
      "de": "musste",
      "lv": "повинен мати"
    },
    "imperfektKonjunktiv": {
      "de": "musste",
      "lv": "повинен мати"
    },
    "partizipVergangenheit": {
      "de": "gemusst",
      "lv": "необхідний"
    }
  },
  {
    "infinitiv": {
      "de": "nehmen",
      "lv": "брати"
    },
    "praesens": {
      "de": "er nimmt",
      "lv": "він бере"
    },
    "imperfektIndikativ": {
      "de": "er nahm",
      "lv": "він взяв"
    },
    "imperfektKonjunktiv": {
      "de": "er nähme",
      "lv": "він би взяв"
    },
    "partizipVergangenheit": {
      "de": "genommen",
      "lv": "взято"
    }
  },
  {
    "infinitiv": {
      "de": "nennen",
      "lv": "називати"
    },
    "praesens": {
      "de": "er nennt",
      "lv": "він назвав"
    },
    "imperfektIndikativ": {
      "de": "er nannte",
      "lv": "він закликав"
    },
    "imperfektKonjunktiv": {
      "de": "er nennte",
      "lv": "він назвав би"
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
      "lv": "він свиснув"
    },
    "imperfektKonjunktiv": {
      "de": "er pfiffe",
      "lv": "він свиснув би"
    },
    "partizipVergangenheit": {
      "de": "gepfiffen",
      "lv": "свистів"
    }
  },
  {
    "infinitiv": {
      "de": "pflegen",
      "lv": "підтримувати"
    },
    "praesens": {
      "de": "er pflegt",
      "lv": "він піклується"
    },
    "imperfektIndikativ": {
      "de": "pflegte vai pflog",
      "lv": "встановити"
    },
    "imperfektKonjunktiv": {
      "de": "pflegte vai pflog",
      "lv": "встановити"
    },
    "partizipVergangenheit": {
      "de": "gepflegt vai gepflogen",
      "lv": "доглянутий"
    }
  },
  {
    "infinitiv": {
      "de": "preisen",
      "lv": "похвала"
    },
    "praesens": {
      "de": "er preist",
      "lv": "він хвалить"
    },
    "imperfektIndikativ": {
      "de": "er pries",
      "lv": "— похвалив він"
    },
    "imperfektKonjunktiv": {
      "de": "er priese",
      "lv": "він би хвалив"
    },
    "partizipVergangenheit": {
      "de": "gepriesen",
      "lv": "хвалив"
    }
  },
  {
    "infinitiv": {
      "de": "quellen",
      "lv": "повніти"
    },
    "praesens": {
      "de": "er quillt",
      "lv": "він товстіє"
    },
    "imperfektIndikativ": {
      "de": "er quoll",
      "lv": "він дозрів"
    },
    "imperfektKonjunktiv": {
      "de": "er quölle",
      "lv": "він товстий"
    },
    "partizipVergangenheit": {
      "de": "gequollen (er ist)",
      "lv": "набряклі"
    }
  },
  {
    "infinitiv": {
      "de": "raten",
      "lv": "запропонувати / згадати"
    },
    "praesens": {
      "de": "er rät",
      "lv": "він рекомендує / хв"
    },
    "imperfektIndikativ": {
      "de": "er riet",
      "lv": "він запропонував / запропонував"
    },
    "imperfektKonjunktiv": {
      "de": "er riete",
      "lv": "він запропонував би / згадав"
    },
    "partizipVergangenheit": {
      "de": "geraten",
      "lv": "запропоновано / згадано"
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
      "lv": "він тре"
    },
    "imperfektKonjunktiv": {
      "de": "er riebe",
      "lv": "він би тер"
    },
    "partizipVergangenheit": {
      "de": "gerieben",
      "lv": "натертий"
    }
  },
  {
    "infinitiv": {
      "de": "reißen",
      "lv": "тягнути"
    },
    "praesens": {
      "de": "er reißt",
      "lv": "— кидається він"
    },
    "imperfektIndikativ": {
      "de": "er riss",
      "lv": "— огризнувся він"
    },
    "imperfektKonjunktiv": {
      "de": "er risse",
      "lv": "— огризнувся він"
    },
    "partizipVergangenheit": {
      "de": "gerissen",
      "lv": "порваний"
    }
  },
  {
    "infinitiv": {
      "de": "reiten",
      "lv": "їздити"
    },
    "praesens": {
      "de": "er reitet",
      "lv": "він їздить"
    },
    "imperfektIndikativ": {
      "de": "er ritt",
      "lv": "він їхав"
    },
    "imperfektKonjunktiv": {
      "de": "er ritte",
      "lv": "він би їздив"
    },
    "partizipVergangenheit": {
      "de": "geritten (er ist)",
      "lv": "їхав"
    }
  },
  {
    "infinitiv": {
      "de": "rennen",
      "lv": "бігти"
    },
    "praesens": {
      "de": "er rennt",
      "lv": "він біжить"
    },
    "imperfektIndikativ": {
      "de": "er rannte",
      "lv": "він побіг"
    },
    "imperfektKonjunktiv": {
      "de": "er rennte",
      "lv": "він би побіг"
    },
    "partizipVergangenheit": {
      "de": "gerannt",
      "lv": "побіг"
    }
  },
  {
    "infinitiv": {
      "de": "riechen",
      "lv": "ост"
    },
    "praesens": {
      "de": "er riecht",
      "lv": "він пахне"
    },
    "imperfektIndikativ": {
      "de": "er roch",
      "lv": "він співає"
    },
    "imperfektKonjunktiv": {
      "de": "er röche",
      "lv": "він порт"
    },
    "partizipVergangenheit": {
      "de": "gerochen",
      "lv": "порт"
    }
  },
  {
    "infinitiv": {
      "de": "ringen",
      "lv": "зламати"
    },
    "praesens": {
      "de": "er ringt",
      "lv": "він ламається"
    },
    "imperfektIndikativ": {
      "de": "er rang",
      "lv": "він зламався"
    },
    "imperfektKonjunktiv": {
      "de": "er ränge",
      "lv": "він би зламався"
    },
    "partizipVergangenheit": {
      "de": "gerungen",
      "lv": "чекати"
    }
  },
  {
    "infinitiv": {
      "de": "rinnen",
      "lv": "текти"
    },
    "praesens": {
      "de": "er rinnt",
      "lv": "він біжить"
    },
    "imperfektIndikativ": {
      "de": "er rann",
      "lv": "він побіг"
    },
    "imperfektKonjunktiv": {
      "de": "er ränne / er rönne",
      "lv": "він би побіг"
    },
    "partizipVergangenheit": {
      "de": "geronnen (er ist)",
      "lv": "текла / згорталася"
    }
  },
  {
    "infinitiv": {
      "de": "rufen",
      "lv": "дзвонити"
    },
    "praesens": {
      "de": "er ruft",
      "lv": "він дзвонить"
    },
    "imperfektIndikativ": {
      "de": "er rief",
      "lv": "він закликав"
    },
    "imperfektKonjunktiv": {
      "de": "er riefe",
      "lv": "він подзвонить"
    },
    "partizipVergangenheit": {
      "de": "gerufen",
      "lv": "дзвонив"
    }
  },
  {
    "infinitiv": {
      "de": "salzen",
      "lv": "посолити"
    },
    "praesens": {
      "de": "er salzt",
      "lv": "він посолив"
    },
    "imperfektIndikativ": {
      "de": "er salzte",
      "lv": "він посолив"
    },
    "imperfektKonjunktiv": {
      "de": "er salzte",
      "lv": "він би посолив"
    },
    "partizipVergangenheit": {
      "de": "gesalzen",
      "lv": "солені"
    }
  },
  {
    "infinitiv": {
      "de": "saufen",
      "lv": "сушити / пити"
    },
    "praesens": {
      "de": "er säuft",
      "lv": "він п'є / п'є"
    },
    "imperfektIndikativ": {
      "de": "er soff",
      "lv": "він випив / випив"
    },
    "imperfektKonjunktiv": {
      "de": "er söffe",
      "lv": "він би пив / пив"
    },
    "partizipVergangenheit": {
      "de": "gesoffen",
      "lv": "п'яний"
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
      "lv": "смоктати"
    }
  },
  {
    "infinitiv": {
      "de": "schaffen",
      "lv": "створювати"
    },
    "praesens": {
      "de": "er schafft",
      "lv": "він створює"
    },
    "imperfektIndikativ": {
      "de": "er schuf",
      "lv": "він створив"
    },
    "imperfektKonjunktiv": {
      "de": "er schüfe",
      "lv": "він би створив"
    },
    "partizipVergangenheit": {
      "de": "geschaffen",
      "lv": "створений"
    }
  },
  {
    "infinitiv": {
      "de": "schallen",
      "lv": "звучати"
    },
    "praesens": {
      "de": "es schallt",
      "lv": "це звучить"
    },
    "imperfektIndikativ": {
      "de": "schallte vai scholl",
      "lv": "прозвучало"
    },
    "imperfektKonjunktiv": {
      "de": "schallte vai scholl",
      "lv": "прозвучало"
    },
    "partizipVergangenheit": {
      "de": "geschallt",
      "lv": "прозвучало"
    }
  },
  {
    "infinitiv": {
      "de": "scheiden",
      "lv": "розлучення / розлучення"
    },
    "praesens": {
      "de": "er scheidet",
      "lv": "він розлучається / розлучається"
    },
    "imperfektIndikativ": {
      "de": "er schied",
      "lv": "він розлучився / розлучився"
    },
    "imperfektKonjunktiv": {
      "de": "er schiede",
      "lv": "він би розлучився / розлучився"
    },
    "partizipVergangenheit": {
      "de": "geschieden (er hat / er ist)",
      "lv": "розділений / розлучений"
    }
  },
  {
    "infinitiv": {
      "de": "scheinen",
      "lv": "сяяти / з'являтися"
    },
    "praesens": {
      "de": "er scheint",
      "lv": "він світить / здається"
    },
    "imperfektIndikativ": {
      "de": "er schien",
      "lv": "він сяяв / здавався"
    },
    "imperfektKonjunktiv": {
      "de": "er schiene",
      "lv": "він би світив / здався"
    },
    "partizipVergangenheit": {
      "de": "geschienen",
      "lv": "сяяв / здавався"
    }
  },
  {
    "infinitiv": {
      "de": "schelten",
      "lv": "барт"
    },
    "praesens": {
      "de": "er schilt",
      "lv": "він bar"
    },
    "imperfektIndikativ": {
      "de": "er schalt",
      "lv": "він заборонив"
    },
    "imperfektKonjunktiv": {
      "de": "er schölte / er schälte",
      "lv": "він голиться"
    },
    "partizipVergangenheit": {
      "de": "gescholten",
      "lv": "борода"
    }
  },
  {
    "infinitiv": {
      "de": "scheren",
      "lv": "різати"
    },
    "praesens": {
      "de": "er schert",
      "lv": "він ріже"
    },
    "imperfektIndikativ": {
      "de": "schor vai scherte",
      "lv": "ножиці"
    },
    "imperfektKonjunktiv": {
      "de": "schor vai scherte",
      "lv": "ножиці"
    },
    "partizipVergangenheit": {
      "de": "geschoren vai geschert",
      "lv": "обрізаний"
    }
  },
  {
    "infinitiv": {
      "de": "schieben",
      "lv": "штовхати"
    },
    "praesens": {
      "de": "er schiebt",
      "lv": "він штовхає"
    },
    "imperfektIndikativ": {
      "de": "er schob",
      "lv": "штовхнув він"
    },
    "imperfektKonjunktiv": {
      "de": "er schöbe",
      "lv": "він буде штовхати"
    },
    "partizipVergangenheit": {
      "de": "geschoben",
      "lv": "штовхнув"
    }
  },
  {
    "infinitiv": {
      "de": "schießen",
      "lv": "стріляти"
    },
    "praesens": {
      "de": "er schießt",
      "lv": "він стріляє"
    },
    "imperfektIndikativ": {
      "de": "er schoss",
      "lv": "він вистрілив"
    },
    "imperfektKonjunktiv": {
      "de": "er schösse",
      "lv": "він би стріляв"
    },
    "partizipVergangenheit": {
      "de": "geschossen",
      "lv": "постріл"
    }
  },
  {
    "infinitiv": {
      "de": "schinden",
      "lv": "мучити"
    },
    "praesens": {
      "de": "er schindet",
      "lv": "він мучить"
    },
    "imperfektIndikativ": {
      "de": "schindete",
      "lv": "мучився"
    },
    "imperfektKonjunktiv": {
      "de": "schindete",
      "lv": "мучився"
    },
    "partizipVergangenheit": {
      "de": "geschunden",
      "lv": "мучився"
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
      "lv": "він спав би"
    },
    "partizipVergangenheit": {
      "de": "geschlafen",
      "lv": "спав"
    }
  },
  {
    "infinitiv": {
      "de": "schlagen",
      "lv": "удар"
    },
    "praesens": {
      "de": "er schlägt",
      "lv": "він б'є"
    },
    "imperfektIndikativ": {
      "de": "er schlug",
      "lv": "він ударив"
    },
    "imperfektKonjunktiv": {
      "de": "er schlüge",
      "lv": "він би вдарив"
    },
    "partizipVergangenheit": {
      "de": "geschlagen",
      "lv": "побитий"
    }
  },
  {
    "infinitiv": {
      "de": "schleichen",
      "lv": "іде дощ"
    },
    "praesens": {
      "de": "er schleicht",
      "lv": "він нахиляється"
    },
    "imperfektIndikativ": {
      "de": "er schlich",
      "lv": "він дощив"
    },
    "imperfektKonjunktiv": {
      "de": "er schliche",
      "lv": "він дощ"
    },
    "partizipVergangenheit": {
      "de": "geschlichen (er ist)",
      "lv": "помер"
    }
  },
  {
    "infinitiv": {
      "de": "schleifen",
      "lv": "розтирати"
    },
    "praesens": {
      "de": "er schleift",
      "lv": "він меле"
    },
    "imperfektIndikativ": {
      "de": "er schliff",
      "lv": "— змолов він"
    },
    "imperfektKonjunktiv": {
      "de": "er schliffe",
      "lv": "він би змолов"
    },
    "partizipVergangenheit": {
      "de": "geschliffen",
      "lv": "полірований"
    }
  },
  {
    "infinitiv": {
      "de": "schließen",
      "lv": "закрити"
    },
    "praesens": {
      "de": "er schließt",
      "lv": "він закриває"
    },
    "imperfektIndikativ": {
      "de": "er schloss",
      "lv": "він закрився"
    },
    "imperfektKonjunktiv": {
      "de": "er schlösse",
      "lv": "він би закрився"
    },
    "partizipVergangenheit": {
      "de": "geschlossen",
      "lv": "ЗАЧИНЕНО"
    }
  },
  {
    "infinitiv": {
      "de": "schlingen",
      "lv": "завтра"
    },
    "praesens": {
      "de": "er schlingt",
      "lv": "він ковтає"
    },
    "imperfektIndikativ": {
      "de": "er schlang",
      "lv": "він проковтнув"
    },
    "imperfektKonjunktiv": {
      "de": "er schlänge",
      "lv": "він ранок"
    },
    "partizipVergangenheit": {
      "de": "geschlungen",
      "lv": "ранок"
    }
  },
  {
    "infinitiv": {
      "de": "schmeißen",
      "lv": "кинути"
    },
    "praesens": {
      "de": "er schmeißt",
      "lv": "кидає він"
    },
    "imperfektIndikativ": {
      "de": "er schmiss",
      "lv": "— кинув він"
    },
    "imperfektKonjunktiv": {
      "de": "er schmisse",
      "lv": "— кинув він"
    },
    "partizipVergangenheit": {
      "de": "geschmissen",
      "lv": "кинутий"
    }
  },
  {
    "infinitiv": {
      "de": "schmelzen",
      "lv": "переміщення"
    },
    "praesens": {
      "de": "er schmilzt",
      "lv": "він тане"
    },
    "imperfektIndikativ": {
      "de": "er schmolz",
      "lv": "— простогнав він"
    },
    "imperfektKonjunktiv": {
      "de": "er schmölze",
      "lv": "він рухався"
    },
    "partizipVergangenheit": {
      "de": "geschmolzen (er ist)",
      "lv": "розплавлений"
    }
  },
  {
    "infinitiv": {
      "de": "schnauben",
      "lv": "шипіти"
    },
    "praesens": {
      "de": "er schnaubt",
      "lv": "він пирхає"
    },
    "imperfektIndikativ": {
      "de": "schnaubte vai schnob",
      "lv": "пирхнув"
    },
    "imperfektKonjunktiv": {
      "de": "schnaubte vai schnob",
      "lv": "пирхнув"
    },
    "partizipVergangenheit": {
      "de": "geschnaubt vai geschnoben",
      "lv": "пирхати"
    }
  },
  {
    "infinitiv": {
      "de": "schneiden",
      "lv": "різати"
    },
    "praesens": {
      "de": "er schneidet",
      "lv": "він крутиться"
    },
    "imperfektIndikativ": {
      "de": "er schnitt",
      "lv": "він різав"
    },
    "imperfektKonjunktiv": {
      "de": "er schnitte",
      "lv": "він би вирізав"
    },
    "partizipVergangenheit": {
      "de": "geschnitten",
      "lv": "вирізати"
    }
  },
  {
    "infinitiv": {
      "de": "schreiben",
      "lv": "писати"
    },
    "praesens": {
      "de": "er schreibt",
      "lv": "пише він"
    },
    "imperfektIndikativ": {
      "de": "er schrieb",
      "lv": "— написав він"
    },
    "imperfektKonjunktiv": {
      "de": "er schriebe",
      "lv": "він писав би"
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
      "lv": "— кричить він"
    },
    "imperfektIndikativ": {
      "de": "er schrie",
      "lv": "— закричав він"
    },
    "imperfektKonjunktiv": {
      "de": "er schriee",
      "lv": "— кричав би він"
    },
    "partizipVergangenheit": {
      "de": "geschrien",
      "lv": "кричав"
    }
  },
  {
    "infinitiv": {
      "de": "schreiten",
      "lv": "ходьба"
    },
    "praesens": {
      "de": "er schreitet",
      "lv": "він гуляє"
    },
    "imperfektIndikativ": {
      "de": "er schritt",
      "lv": "він йшов"
    },
    "imperfektKonjunktiv": {
      "de": "er schritte",
      "lv": "він би ходив"
    },
    "partizipVergangenheit": {
      "de": "geschritten (er ist)",
      "lv": "ходили"
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
      "lv": "замовкли"
    }
  },
  {
    "infinitiv": {
      "de": "schwellen",
      "lv": "памп"
    },
    "praesens": {
      "de": "er schwillt",
      "lv": "він дується"
    },
    "imperfektIndikativ": {
      "de": "er schwoll",
      "lv": "він пампас"
    },
    "imperfektKonjunktiv": {
      "de": "er schwölle",
      "lv": "він би насос"
    },
    "partizipVergangenheit": {
      "de": "geschwollen (er ist)",
      "lv": "насос"
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
      "lv": "він би поплив"
    },
    "partizipVergangenheit": {
      "de": "geschwommen (er ist)",
      "lv": "плавав"
    }
  },
  {
    "infinitiv": {
      "de": "schwinden",
      "lv": "зникнути"
    },
    "praesens": {
      "de": "er schwindet",
      "lv": "він зникає"
    },
    "imperfektIndikativ": {
      "de": "er schwand",
      "lv": "він зник"
    },
    "imperfektKonjunktiv": {
      "de": "er schwände",
      "lv": "він би зник"
    },
    "partizipVergangenheit": {
      "de": "geschwunden (er ist)",
      "lv": "втрачено"
    }
  },
  {
    "infinitiv": {
      "de": "schwingen",
      "lv": "хвиля"
    },
    "praesens": {
      "de": "er schwingt",
      "lv": "він махає рукою"
    },
    "imperfektIndikativ": {
      "de": "er schwang",
      "lv": "— махнув він рукою"
    },
    "imperfektKonjunktiv": {
      "de": "er schwänge",
      "lv": "він би помахав"
    },
    "partizipVergangenheit": {
      "de": "geschwungen",
      "lv": "помахав"
    }
  },
  {
    "infinitiv": {
      "de": "schwören",
      "lv": "лаятися"
    },
    "praesens": {
      "de": "er schwört",
      "lv": "— лається він"
    },
    "imperfektIndikativ": {
      "de": "er schwur / er schwor",
      "lv": "— вилаявся він"
    },
    "imperfektKonjunktiv": {
      "de": "er schwöre",
      "lv": "він би лаявся"
    },
    "partizipVergangenheit": {
      "de": "geschworen",
      "lv": "присяжний"
    }
  },
  {
    "infinitiv": {
      "de": "sehen",
      "lv": "побачити"
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
      "lv": "він би побачив"
    },
    "partizipVergangenheit": {
      "de": "gesehen",
      "lv": "бачив"
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
      "lv": "був"
    },
    "imperfektKonjunktiv": {
      "de": "war",
      "lv": "був"
    },
    "partizipVergangenheit": {
      "de": "gewesen",
      "lv": "був"
    }
  },
  {
    "infinitiv": {
      "de": "senden",
      "lv": "відправити"
    },
    "praesens": {
      "de": "er sendet",
      "lv": "він посилає"
    },
    "imperfektIndikativ": {
      "de": "er sandte / er sendete",
      "lv": "він послав"
    },
    "imperfektKonjunktiv": {
      "de": "er sendete",
      "lv": "він би послав"
    },
    "partizipVergangenheit": {
      "de": "gesandt / gesendet",
      "lv": "надіслано"
    }
  },
  {
    "infinitiv": {
      "de": "sieden",
      "lv": "варити"
    },
    "praesens": {
      "de": "er siedet",
      "lv": "він готує"
    },
    "imperfektIndikativ": {
      "de": "sott vai siedete",
      "lv": "приготований"
    },
    "imperfektKonjunktiv": {
      "de": "sott vai siedete",
      "lv": "приготований"
    },
    "partizipVergangenheit": {
      "de": "gesotten vai gesiedet",
      "lv": "варені"
    }
  },
  {
    "infinitiv": {
      "de": "singen",
      "lv": "співати"
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
      "lv": "він співав би"
    },
    "partizipVergangenheit": {
      "de": "gesungen",
      "lv": "заспівана"
    }
  },
  {
    "infinitiv": {
      "de": "sinken",
      "lv": "тонути"
    },
    "praesens": {
      "de": "er sinkt",
      "lv": "він тоне"
    },
    "imperfektIndikativ": {
      "de": "er sank",
      "lv": "він складав"
    },
    "imperfektKonjunktiv": {
      "de": "er sänke",
      "lv": "він би потонув"
    },
    "partizipVergangenheit": {
      "de": "gesunken (er ist)",
      "lv": "макіяж"
    }
  },
  {
    "infinitiv": {
      "de": "sinnen",
      "lv": "дивуватися"
    },
    "praesens": {
      "de": "er sinnt",
      "lv": "дивується він"
    },
    "imperfektIndikativ": {
      "de": "er sann",
      "lv": "— дивувався він"
    },
    "imperfektKonjunktiv": {
      "de": "er sönne / er sänne",
      "lv": "він буде дивуватися"
    },
    "partizipVergangenheit": {
      "de": "gesonnen",
      "lv": "налаштований"
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
      "lv": "сіли"
    }
  },
  {
    "infinitiv": {
      "de": "sollen",
      "lv": "потребувати / бути зобов'язаним"
    },
    "praesens": {
      "de": "er soll",
      "lv": "йому потрібно"
    },
    "imperfektIndikativ": {
      "de": "sollte",
      "lv": "повинен мати"
    },
    "imperfektKonjunktiv": {
      "de": "sollte",
      "lv": "повинен мати"
    },
    "partizipVergangenheit": {
      "de": "gesollt",
      "lv": "необхідний"
    }
  },
  {
    "infinitiv": {
      "de": "speien",
      "lv": "плюватися"
    },
    "praesens": {
      "de": "er speit",
      "lv": "він плює"
    },
    "imperfektIndikativ": {
      "de": "er spie",
      "lv": "він плюнув"
    },
    "imperfektKonjunktiv": {
      "de": "er spie",
      "lv": "він би плюнув"
    },
    "partizipVergangenheit": {
      "de": "gespien",
      "lv": "виплюнув"
    }
  },
  {
    "infinitiv": {
      "de": "spinnen",
      "lv": "спина"
    },
    "praesens": {
      "de": "er spinnt",
      "lv": "він крутиться"
    },
    "imperfektIndikativ": {
      "de": "er spann",
      "lv": "— закрутився він"
    },
    "imperfektKonjunktiv": {
      "de": "er spönne / er spänne",
      "lv": "він би крутився"
    },
    "partizipVergangenheit": {
      "de": "gesponnen",
      "lv": "закрутився"
    }
  },
  {
    "infinitiv": {
      "de": "spleißen",
      "lv": "підключити"
    },
    "praesens": {
      "de": "er spleißt",
      "lv": "він з'єднується"
    },
    "imperfektIndikativ": {
      "de": "spliss",
      "lv": "підключений"
    },
    "imperfektKonjunktiv": {
      "de": "spliss",
      "lv": "підключений"
    },
    "partizipVergangenheit": {
      "de": "gesplissen",
      "lv": "підключений"
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
      "lv": "він говорив би"
    },
    "partizipVergangenheit": {
      "de": "gesprochen",
      "lv": "говорив"
    }
  },
  {
    "infinitiv": {
      "de": "sprießen",
      "lv": "процвітати"
    },
    "praesens": {
      "de": "er sprießt",
      "lv": "він процвітає"
    },
    "imperfektIndikativ": {
      "de": "er spross",
      "lv": "він процвітав"
    },
    "imperfektKonjunktiv": {
      "de": "er sprösse",
      "lv": "він полиця"
    },
    "partizipVergangenheit": {
      "de": "gesprossen (er ist)",
      "lv": "плече"
    }
  },
  {
    "infinitiv": {
      "de": "springen",
      "lv": "стрибати"
    },
    "praesens": {
      "de": "er springt",
      "lv": "він стрибає"
    },
    "imperfektIndikativ": {
      "de": "er sprang",
      "lv": "він підскочив"
    },
    "imperfektKonjunktiv": {
      "de": "er spränge",
      "lv": "він би стрибнув"
    },
    "partizipVergangenheit": {
      "de": "gesprungen (er ist)",
      "lv": "об'єктив"
    }
  },
  {
    "infinitiv": {
      "de": "stechen",
      "lv": "колоти"
    },
    "praesens": {
      "de": "er sticht",
      "lv": "він коле"
    },
    "imperfektIndikativ": {
      "de": "er stach",
      "lv": "вдарив він"
    },
    "imperfektKonjunktiv": {
      "de": "er stäche",
      "lv": "він би вколов"
    },
    "partizipVergangenheit": {
      "de": "gestochen",
      "lv": "заколоти"
    }
  },
  {
    "infinitiv": {
      "de": "stecken",
      "lv": "вклеювати / встромляти"
    },
    "praesens": {
      "de": "er steckt",
      "lv": "він штовхає"
    },
    "imperfektIndikativ": {
      "de": "stak vai steckte",
      "lv": "фаршировані"
    },
    "imperfektKonjunktiv": {
      "de": "stak vai steckte",
      "lv": "фаршировані"
    },
    "partizipVergangenheit": {
      "de": "gesteckt",
      "lv": "фаршировані"
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
      "lv": "стоячи"
    }
  },
  {
    "infinitiv": {
      "de": "stehlen",
      "lv": "красти"
    },
    "praesens": {
      "de": "er stiehlt",
      "lv": "він zog"
    },
    "imperfektIndikativ": {
      "de": "er stahl",
      "lv": "він вкрав"
    },
    "imperfektKonjunktiv": {
      "de": "er stöhle / er stähle",
      "lv": "він би вкрав"
    },
    "partizipVergangenheit": {
      "de": "gestohlen",
      "lv": "вкрадені"
    }
  },
  {
    "infinitiv": {
      "de": "steigen",
      "lv": "лазити"
    },
    "praesens": {
      "de": "er steigt",
      "lv": "він лізе"
    },
    "imperfektIndikativ": {
      "de": "er stieg",
      "lv": "він поліз"
    },
    "imperfektKonjunktiv": {
      "de": "er stiege",
      "lv": "він би поліз"
    },
    "partizipVergangenheit": {
      "de": "gestiegen (er ist)",
      "lv": "піднявся"
    }
  },
  {
    "infinitiv": {
      "de": "sterben",
      "lv": "померти"
    },
    "praesens": {
      "de": "er stirbt",
      "lv": "він помирає"
    },
    "imperfektIndikativ": {
      "de": "er starb",
      "lv": "він помер"
    },
    "imperfektKonjunktiv": {
      "de": "er stürbe",
      "lv": "він би помер"
    },
    "partizipVergangenheit": {
      "de": "gestorben (er ist)",
      "lv": "мертвий"
    }
  },
  {
    "infinitiv": {
      "de": "stieben",
      "lv": "піна / завихр"
    },
    "praesens": {
      "de": "es stiebt",
      "lv": "це дме"
    },
    "imperfektIndikativ": {
      "de": "stob vai stiebte",
      "lv": "спінений"
    },
    "imperfektKonjunktiv": {
      "de": "stob vai stiebte",
      "lv": "спінений"
    },
    "partizipVergangenheit": {
      "de": "gestoben vai gestiebt",
      "lv": "зіпсований"
    }
  },
  {
    "infinitiv": {
      "de": "stinken",
      "lv": "пахнути"
    },
    "praesens": {
      "de": "es stinkt",
      "lv": "це смердить"
    },
    "imperfektIndikativ": {
      "de": "stank",
      "lv": "пахло"
    },
    "imperfektKonjunktiv": {
      "de": "stank",
      "lv": "пахло"
    },
    "partizipVergangenheit": {
      "de": "gestunken",
      "lv": "смердючий"
    }
  },
  {
    "infinitiv": {
      "de": "stoßen",
      "lv": "штовхати"
    },
    "praesens": {
      "de": "er stößt",
      "lv": "він штовхає"
    },
    "imperfektIndikativ": {
      "de": "er stieß",
      "lv": "штовхнув він"
    },
    "imperfektKonjunktiv": {
      "de": "er stieße",
      "lv": "він штовхався"
    },
    "partizipVergangenheit": {
      "de": "gestoßen",
      "lv": "штовхнув"
    }
  },
  {
    "infinitiv": {
      "de": "streichen",
      "lv": "фарба / смужка"
    },
    "praesens": {
      "de": "er streicht",
      "lv": "він малює / смуги"
    },
    "imperfektIndikativ": {
      "de": "er strich",
      "lv": "він розмальований / смугастий"
    },
    "imperfektKonjunktiv": {
      "de": "er striche",
      "lv": "він би намалював / роздягнув"
    },
    "partizipVergangenheit": {
      "de": "gestrichen",
      "lv": "фарбований/смугастий"
    }
  },
  {
    "infinitiv": {
      "de": "streiten",
      "lv": "воювати"
    },
    "praesens": {
      "de": "er streitet",
      "lv": "він бореться"
    },
    "imperfektIndikativ": {
      "de": "er stritt",
      "lv": "він боровся"
    },
    "imperfektKonjunktiv": {
      "de": "er stritte",
      "lv": "він бився"
    },
    "partizipVergangenheit": {
      "de": "gestritten",
      "lv": "воював"
    }
  },
  {
    "infinitiv": {
      "de": "tragen",
      "lv": "nest"
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
      "lv": "несли"
    }
  },
  {
    "infinitiv": {
      "de": "treffen",
      "lv": "зіткнутися"
    },
    "praesens": {
      "de": "er trifft",
      "lv": "він зустрічає"
    },
    "imperfektIndikativ": {
      "de": "er traf",
      "lv": "він зіткнувся"
    },
    "imperfektKonjunktiv": {
      "de": "er träfe",
      "lv": "він би зіткнувся"
    },
    "partizipVergangenheit": {
      "de": "getroffen",
      "lv": "зіткнувся"
    }
  },
  {
    "infinitiv": {
      "de": "treiben",
      "lv": "погоня"
    },
    "praesens": {
      "de": "er treibt",
      "lv": "він керує"
    },
    "imperfektIndikativ": {
      "de": "er trieb",
      "lv": "він їхав"
    },
    "imperfektKonjunktiv": {
      "de": "er triebe",
      "lv": "він би водив"
    },
    "partizipVergangenheit": {
      "de": "getrieben",
      "lv": "переслідували"
    }
  },
  {
    "infinitiv": {
      "de": "treten",
      "lv": "входити / йти"
    },
    "praesens": {
      "de": "er tritt",
      "lv": "він входить / йде"
    },
    "imperfektIndikativ": {
      "de": "er trat",
      "lv": "він стояв/ходив"
    },
    "imperfektKonjunktiv": {
      "de": "er träte",
      "lv": "він би стояв / йшов"
    },
    "partizipVergangenheit": {
      "de": "getreten (er ist)",
      "lv": "стояв / ходив"
    }
  },
  {
    "infinitiv": {
      "de": "trinken",
      "lv": "пити"
    },
    "praesens": {
      "de": "er trinkt",
      "lv": "він п'є"
    },
    "imperfektIndikativ": {
      "de": "er trank",
      "lv": "він пив"
    },
    "imperfektKonjunktiv": {
      "de": "er tränke",
      "lv": "він би випив"
    },
    "partizipVergangenheit": {
      "de": "getrunken",
      "lv": "п'яний"
    }
  },
  {
    "infinitiv": {
      "de": "trügen",
      "lv": "обманювати"
    },
    "praesens": {
      "de": "er trögt",
      "lv": "він обманює"
    },
    "imperfektIndikativ": {
      "de": "er trog",
      "lv": "він обдурив"
    },
    "imperfektKonjunktiv": {
      "de": "er tröge",
      "lv": "він би обманював"
    },
    "partizipVergangenheit": {
      "de": "getrogen",
      "lv": "обдурили"
    }
  },
  {
    "infinitiv": {
      "de": "tun",
      "lv": "робити"
    },
    "praesens": {
      "de": "er tut",
      "lv": "він робить"
    },
    "imperfektIndikativ": {
      "de": "er tat",
      "lv": "він зробив"
    },
    "imperfektKonjunktiv": {
      "de": "er täte",
      "lv": "він би зробив"
    },
    "partizipVergangenheit": {
      "de": "getan",
      "lv": "зроблено"
    }
  },
  {
    "infinitiv": {
      "de": "verderben",
      "lv": "пошкодити"
    },
    "praesens": {
      "de": "er verdirbt",
      "lv": "він руйнує"
    },
    "imperfektIndikativ": {
      "de": "er verdarb",
      "lv": "він пошкодив"
    },
    "imperfektKonjunktiv": {
      "de": "er verdürbe",
      "lv": "він би пошкодив"
    },
    "partizipVergangenheit": {
      "de": "verdorben",
      "lv": "пошкоджений"
    }
  },
  {
    "infinitiv": {
      "de": "verdrießen",
      "lv": "викликати роздратування"
    },
    "praesens": {
      "de": "er verdrießt",
      "lv": "він викликає роздратування"
    },
    "imperfektIndikativ": {
      "de": "er verdross",
      "lv": "він викликав роздратування"
    },
    "imperfektKonjunktiv": {
      "de": "er verdrösse",
      "lv": "він викликав би роздратування"
    },
    "partizipVergangenheit": {
      "de": "verdrossen",
      "lv": "засмучений"
    }
  },
  {
    "infinitiv": {
      "de": "vergessen",
      "lv": "забути"
    },
    "praesens": {
      "de": "er vergisst",
      "lv": "він забуває"
    },
    "imperfektIndikativ": {
      "de": "er vergass",
      "lv": "він забув"
    },
    "imperfektKonjunktiv": {
      "de": "er vergäße",
      "lv": "він би забув"
    },
    "partizipVergangenheit": {
      "de": "vergessen",
      "lv": "забутий"
    }
  },
  {
    "infinitiv": {
      "de": "verlieren",
      "lv": "втратити"
    },
    "praesens": {
      "de": "er verliert",
      "lv": "він програє"
    },
    "imperfektIndikativ": {
      "de": "er verlor",
      "lv": "він програв"
    },
    "imperfektKonjunktiv": {
      "de": "er verlöre",
      "lv": "він би програв"
    },
    "partizipVergangenheit": {
      "de": "verloren",
      "lv": "втрачено"
    }
  },
  {
    "infinitiv": {
      "de": "wachsen",
      "lv": "рости"
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
      "lv": "він би виріс"
    },
    "partizipVergangenheit": {
      "de": "gewachsen (er ist)",
      "lv": "виріс"
    }
  },
  {
    "infinitiv": {
      "de": "waschen",
      "lv": "мити"
    },
    "praesens": {
      "de": "er wäscht",
      "lv": "він миє"
    },
    "imperfektIndikativ": {
      "de": "er wusch",
      "lv": "він вмивався"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsche",
      "lv": "він би мився"
    },
    "partizipVergangenheit": {
      "de": "gewaschen",
      "lv": "вимитий"
    }
  },
  {
    "infinitiv": {
      "de": "weben",
      "lv": "плести"
    },
    "praesens": {
      "de": "er webt",
      "lv": "він плете"
    },
    "imperfektIndikativ": {
      "de": "wob",
      "lv": "тканина"
    },
    "imperfektKonjunktiv": {
      "de": "wob",
      "lv": "тканина"
    },
    "partizipVergangenheit": {
      "de": "gewoben",
      "lv": "тканий"
    }
  },
  {
    "infinitiv": {
      "de": "weichen",
      "lv": "відкликати"
    },
    "praesens": {
      "de": "er weicht",
      "lv": "він відступає"
    },
    "imperfektIndikativ": {
      "de": "er wich",
      "lv": "він відступив"
    },
    "imperfektKonjunktiv": {
      "de": "er wiche",
      "lv": "він би відступив"
    },
    "partizipVergangenheit": {
      "de": "gewichen (er ist)",
      "lv": "відступати"
    }
  },
  {
    "infinitiv": {
      "de": "weisen",
      "lv": "шоу"
    },
    "praesens": {
      "de": "er weist",
      "lv": "він показує"
    },
    "imperfektIndikativ": {
      "de": "er wies",
      "lv": "він показав"
    },
    "imperfektKonjunktiv": {
      "de": "er wiese",
      "lv": "він би показав"
    },
    "partizipVergangenheit": {
      "de": "gewiesen",
      "lv": "показано"
    }
  },
  {
    "infinitiv": {
      "de": "wenden",
      "lv": "змінити / обрізати"
    },
    "praesens": {
      "de": "er wendet",
      "lv": "він крутить / повертає"
    },
    "imperfektIndikativ": {
      "de": "er wandte / es wendete",
      "lv": "він скрутив / повернув"
    },
    "imperfektKonjunktiv": {
      "de": "er wendete",
      "lv": "він би змінив / змінив"
    },
    "partizipVergangenheit": {
      "de": "gewandt / gewendet",
      "lv": "змінено / скасовано"
    }
  },
  {
    "infinitiv": {
      "de": "werben",
      "lv": "пропонувати"
    },
    "praesens": {
      "de": "er wirbt",
      "lv": "він пропонує"
    },
    "imperfektIndikativ": {
      "de": "er warb",
      "lv": "він запропонував"
    },
    "imperfektKonjunktiv": {
      "de": "er würbe",
      "lv": "він запропонував би"
    },
    "partizipVergangenheit": {
      "de": "geworben",
      "lv": "запропоновано"
    }
  },
  {
    "infinitiv": {
      "de": "werden",
      "lv": "стати"
    },
    "praesens": {
      "de": "er wird",
      "lv": "він стає"
    },
    "imperfektIndikativ": {
      "de": "wurde",
      "lv": "став"
    },
    "imperfektKonjunktiv": {
      "de": "wurde",
      "lv": "став"
    },
    "partizipVergangenheit": {
      "de": "geworden",
      "lv": "стало"
    }
  },
  {
    "infinitiv": {
      "de": "werfen",
      "lv": "кинути"
    },
    "praesens": {
      "de": "er wirft",
      "lv": "кидає він"
    },
    "imperfektIndikativ": {
      "de": "er warf",
      "lv": "— кинув він"
    },
    "imperfektKonjunktiv": {
      "de": "er würfe",
      "lv": "— кинув він"
    },
    "partizipVergangenheit": {
      "de": "geworfen",
      "lv": "кинутий"
    }
  },
  {
    "infinitiv": {
      "de": "wiegen",
      "lv": "зважувати"
    },
    "praesens": {
      "de": "er wiegt",
      "lv": "він важить"
    },
    "imperfektIndikativ": {
      "de": "er wog",
      "lv": "він зважив"
    },
    "imperfektKonjunktiv": {
      "de": "er wöge",
      "lv": "він би важив"
    },
    "partizipVergangenheit": {
      "de": "gewogen",
      "lv": "зважений"
    }
  },
  {
    "infinitiv": {
      "de": "winden",
      "lv": "коса"
    },
    "praesens": {
      "de": "er windet",
      "lv": "він шпилька"
    },
    "imperfektIndikativ": {
      "de": "er wand",
      "lv": "він заплітає коси"
    },
    "imperfektKonjunktiv": {
      "de": "er wände",
      "lv": "він заплітає косу"
    },
    "partizipVergangenheit": {
      "de": "gewunden",
      "lv": "плетений"
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
      "lv": "відомий"
    }
  },
  {
    "infinitiv": {
      "de": "wollen",
      "lv": "хочуть"
    },
    "praesens": {
      "de": "er will",
      "lv": "він хоче"
    },
    "imperfektIndikativ": {
      "de": "wollte",
      "lv": "хотів"
    },
    "imperfektKonjunktiv": {
      "de": "wollte",
      "lv": "хотів"
    },
    "partizipVergangenheit": {
      "de": "gewollt",
      "lv": "хотів"
    }
  },
  {
    "infinitiv": {
      "de": "wringen",
      "lv": "вирізати / витиснути"
    },
    "praesens": {
      "de": "er wringt",
      "lv": "— вирізає він"
    },
    "imperfektIndikativ": {
      "de": "wrang",
      "lv": "вирізати"
    },
    "imperfektKonjunktiv": {
      "de": "wrang",
      "lv": "вирізати"
    },
    "partizipVergangenheit": {
      "de": "gewrungen",
      "lv": "вирізати"
    }
  },
  {
    "infinitiv": {
      "de": "zeihen",
      "lv": "звинувачувати"
    },
    "praesens": {
      "de": "er zeiht",
      "lv": "він звинувачує"
    },
    "imperfektIndikativ": {
      "de": "zieh",
      "lv": "звинувачений"
    },
    "imperfektKonjunktiv": {
      "de": "zieh",
      "lv": "звинувачений"
    },
    "partizipVergangenheit": {
      "de": "geziehen",
      "lv": "звинувачений"
    }
  },
  {
    "infinitiv": {
      "de": "ziehen",
      "lv": "тягнути"
    },
    "praesens": {
      "de": "er zieht",
      "lv": "він тягне"
    },
    "imperfektIndikativ": {
      "de": "er zog",
      "lv": "він потягнув"
    },
    "imperfektKonjunktiv": {
      "de": "er zöge",
      "lv": "він би тягнув"
    },
    "partizipVergangenheit": {
      "de": "gezogen",
      "lv": "тягнули"
    }
  },
  {
    "infinitiv": {
      "de": "zwingen",
      "lv": "змушувати"
    },
    "praesens": {
      "de": "er zwingt",
      "lv": "він змушує"
    },
    "imperfektIndikativ": {
      "de": "er zwang",
      "lv": "він змусив"
    },
    "imperfektKonjunktiv": {
      "de": "er zwänge",
      "lv": "він би змусив"
    },
    "partizipVergangenheit": {
      "de": "gezwungen",
      "lv": "вимушений"
    }
  },
  {
    "infinitiv": {
      "de": "empfangen",
      "lv": "отримати"
    },
    "praesens": {
      "de": "er empfängt",
      "lv": "він отримує"
    },
    "imperfektIndikativ": {
      "de": "er empfing",
      "lv": "він отримав"
    },
    "imperfektKonjunktiv": {
      "de": "er empfinge",
      "lv": "він отримав би"
    },
    "partizipVergangenheit": {
      "de": "empfangen",
      "lv": "отримано"
    }
  },
  {
    "infinitiv": {
      "de": "erwägen",
      "lv": "розглянути"
    },
    "praesens": {
      "de": "er erwägt",
      "lv": "він вважає"
    },
    "imperfektIndikativ": {
      "de": "er erwog",
      "lv": "він розглядав"
    },
    "imperfektKonjunktiv": {
      "de": "er erwöge",
      "lv": "він би розглянув"
    },
    "partizipVergangenheit": {
      "de": "erwogen",
      "lv": "розглядається"
    }
  },
  {
    "infinitiv": {
      "de": "fechten",
      "lv": "воювати"
    },
    "praesens": {
      "de": "er ficht",
      "lv": "він бореться"
    },
    "imperfektIndikativ": {
      "de": "er focht",
      "lv": "він боровся"
    },
    "imperfektKonjunktiv": {
      "de": "er föchte",
      "lv": "він бився"
    },
    "partizipVergangenheit": {
      "de": "gefochten",
      "lv": "воював"
    }
  },
  {
    "infinitiv": {
      "de": "flechten",
      "lv": "коса"
    },
    "praesens": {
      "de": "er flicht",
      "lv": "він шпилька"
    },
    "imperfektIndikativ": {
      "de": "er flocht",
      "lv": "він заплітає коси"
    },
    "imperfektKonjunktiv": {
      "de": "er flöchte",
      "lv": "він заплітає косу"
    },
    "partizipVergangenheit": {
      "de": "geflochten",
      "lv": "плетений"
    }
  },
  {
    "infinitiv": {
      "de": "hangen",
      "lv": "повісити"
    },
    "praesens": {
      "de": "er hängt",
      "lv": "він висить"
    },
    "imperfektIndikativ": {
      "de": "er hing",
      "lv": "він повісився"
    },
    "imperfektKonjunktiv": {
      "de": "er hinge",
      "lv": "він би повісився"
    },
    "partizipVergangenheit": {
      "de": "gehangen",
      "lv": "триматися"
    }
  },
  {
    "infinitiv": {
      "de": "spalten",
      "lv": "розділити"
    },
    "praesens": {
      "de": "er spaltet",
      "lv": "він розколюється"
    },
    "imperfektIndikativ": {
      "de": "er spaltete",
      "lv": "він розколовся"
    },
    "imperfektKonjunktiv": {
      "de": "er spaltete",
      "lv": "він би розділився"
    },
    "partizipVergangenheit": {
      "de": "gespalten",
      "lv": "розкол"
    }
  },
  {
    "infinitiv": {
      "de": "verzeihen",
      "lv": "прощати"
    },
    "praesens": {
      "de": "er verzeiht",
      "lv": "він прощає"
    },
    "imperfektIndikativ": {
      "de": "er verzieh",
      "lv": "він пробачив"
    },
    "imperfektKonjunktiv": {
      "de": "er verziehe",
      "lv": "він би простив"
    },
    "partizipVergangenheit": {
      "de": "verziehen",
      "lv": "прощено"
    }
  }
];

window.VERB_ENTRIES = VERB_ENTRIES;

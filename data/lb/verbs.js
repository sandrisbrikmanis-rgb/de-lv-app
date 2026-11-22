const VERB_ENTRIES = [
  {
    "infinitiv": {
      "de": "backen",
      "lv": "baken"
    },
    "praesens": {
      "de": "er bäckt",
      "lv": "hie baakt"
    },
    "imperfektIndikativ": {
      "de": "er buk",
      "lv": "hien huet gebak"
    },
    "imperfektKonjunktiv": {
      "de": "er büke",
      "lv": "hie géif baken"
    },
    "partizipVergangenheit": {
      "de": "gebacken",
      "lv": "gebak"
    }
  },
  {
    "infinitiv": {
      "de": "befehlen",
      "lv": "befeelen"
    },
    "praesens": {
      "de": "er befiehlt",
      "lv": "hie befeelt"
    },
    "imperfektIndikativ": {
      "de": "er befahl",
      "lv": "hien huet befuel"
    },
    "imperfektKonjunktiv": {
      "de": "er beföhle",
      "lv": "hie géif befeelen"
    },
    "partizipVergangenheit": {
      "de": "befohlen",
      "lv": "befuel"
    }
  },
  {
    "infinitiv": {
      "de": "beginnen",
      "lv": "ufänken"
    },
    "praesens": {
      "de": "er beginnt",
      "lv": "hie fänkt un"
    },
    "imperfektIndikativ": {
      "de": "er begann",
      "lv": "hien huet ugefaangen"
    },
    "imperfektKonjunktiv": {
      "de": "er begönne / er begänne",
      "lv": "hie géif ufänken"
    },
    "partizipVergangenheit": {
      "de": "begonnen",
      "lv": "ugefaangen"
    }
  },
  {
    "infinitiv": {
      "de": "beißen",
      "lv": "bäissen"
    },
    "praesens": {
      "de": "er beißt",
      "lv": "hie bäisst"
    },
    "imperfektIndikativ": {
      "de": "er biss",
      "lv": "hien huet gebass"
    },
    "imperfektKonjunktiv": {
      "de": "er bisse",
      "lv": "hie géif bäissen"
    },
    "partizipVergangenheit": {
      "de": "gebissen",
      "lv": "gebass"
    }
  },
  {
    "infinitiv": {
      "de": "bergen",
      "lv": "retten / verstoppen"
    },
    "praesens": {
      "de": "er birgt",
      "lv": "hie rett / verstoppt"
    },
    "imperfektIndikativ": {
      "de": "er barg",
      "lv": "hien huet gerett / huet verstoppt"
    },
    "imperfektKonjunktiv": {
      "de": "er bürge / er bärge",
      "lv": "hie géif retten / géif verstoppen"
    },
    "partizipVergangenheit": {
      "de": "geborgen",
      "lv": "gerett / verstoppt"
    }
  },
  {
    "infinitiv": {
      "de": "bersten",
      "lv": "platzen"
    },
    "praesens": {
      "de": "er birst",
      "lv": "et platzt"
    },
    "imperfektIndikativ": {
      "de": "er barst / er borst",
      "lv": "et ass geplatzt"
    },
    "imperfektKonjunktiv": {
      "de": "er bärste / er börste",
      "lv": "et géif platzen"
    },
    "partizipVergangenheit": {
      "de": "geborsten (er ist)",
      "lv": "geplatzt"
    }
  },
  {
    "infinitiv": {
      "de": "bewegen",
      "lv": "beweegen"
    },
    "praesens": {
      "de": "er bewegt",
      "lv": "hie beweegt"
    },
    "imperfektIndikativ": {
      "de": "er bewog",
      "lv": "hien huet beweegt"
    },
    "imperfektKonjunktiv": {
      "de": "er bewöge",
      "lv": "hie géif beweegen"
    },
    "partizipVergangenheit": {
      "de": "bewogen",
      "lv": "beweegt"
    }
  },
  {
    "infinitiv": {
      "de": "biegen",
      "lv": "béien"
    },
    "praesens": {
      "de": "er biegt",
      "lv": "hie béit"
    },
    "imperfektIndikativ": {
      "de": "er bog",
      "lv": "hien huet gebéit"
    },
    "imperfektKonjunktiv": {
      "de": "er böge",
      "lv": "hie géif béien"
    },
    "partizipVergangenheit": {
      "de": "gebogen",
      "lv": "gebéit"
    }
  },
  {
    "infinitiv": {
      "de": "bieten",
      "lv": "bidden"
    },
    "praesens": {
      "de": "er bietet",
      "lv": "hie bitt"
    },
    "imperfektIndikativ": {
      "de": "er bot",
      "lv": "hien huet gebueden"
    },
    "imperfektKonjunktiv": {
      "de": "er böte",
      "lv": "hie géif bidden"
    },
    "partizipVergangenheit": {
      "de": "geboten",
      "lv": "gebueden"
    }
  },
  {
    "infinitiv": {
      "de": "binden",
      "lv": "bannen"
    },
    "praesens": {
      "de": "er bindet",
      "lv": "hie bënnt"
    },
    "imperfektIndikativ": {
      "de": "er band",
      "lv": "hien huet gebonnen"
    },
    "imperfektKonjunktiv": {
      "de": "er bände",
      "lv": "hie géif bannen"
    },
    "partizipVergangenheit": {
      "de": "gebunden",
      "lv": "gebonnen"
    }
  },
  {
    "infinitiv": {
      "de": "bitten",
      "lv": "bieden"
    },
    "praesens": {
      "de": "er bittet",
      "lv": "hie biet"
    },
    "imperfektIndikativ": {
      "de": "er bat",
      "lv": "hien huet gebieden"
    },
    "imperfektKonjunktiv": {
      "de": "er bäte",
      "lv": "hie géif bieden"
    },
    "partizipVergangenheit": {
      "de": "gebeten",
      "lv": "gebieden"
    }
  },
  {
    "infinitiv": {
      "de": "blasen",
      "lv": "blosen"
    },
    "praesens": {
      "de": "er bläst",
      "lv": "hie bléist"
    },
    "imperfektIndikativ": {
      "de": "er blies",
      "lv": "hien huet geblosen"
    },
    "imperfektKonjunktiv": {
      "de": "er bliese",
      "lv": "hie géif blosen"
    },
    "partizipVergangenheit": {
      "de": "geblasen",
      "lv": "geblosen"
    }
  },
  {
    "infinitiv": {
      "de": "gären",
      "lv": "gären"
    },
    "praesens": {
      "de": "es gärt",
      "lv": "et gäert"
    },
    "imperfektIndikativ": {
      "de": "es gor / es gärte",
      "lv": "et huet gegäert"
    },
    "imperfektKonjunktiv": {
      "de": "es göre / es gärte",
      "lv": "et géif gären"
    },
    "partizipVergangenheit": {
      "de": "gegoren / gegärt",
      "lv": "gegäert"
    }
  },
  {
    "infinitiv": {
      "de": "gebären",
      "lv": "op d'Welt bréngen"
    },
    "praesens": {
      "de": "sie gebiert",
      "lv": "si bréngt op d'Welt"
    },
    "imperfektIndikativ": {
      "de": "sie gebar",
      "lv": "si huet op d'Welt bruecht"
    },
    "imperfektKonjunktiv": {
      "de": "sie gebäre",
      "lv": "si géif op d'Welt bréngen"
    },
    "partizipVergangenheit": {
      "de": "geboren",
      "lv": "op d'Welt bruecht"
    }
  },
  {
    "infinitiv": {
      "de": "gelingen",
      "lv": "geléngen"
    },
    "praesens": {
      "de": "es gelingt",
      "lv": "et geléngt"
    },
    "imperfektIndikativ": {
      "de": "es gelang",
      "lv": "et ass gelongen"
    },
    "imperfektKonjunktiv": {
      "de": "es gelänge",
      "lv": "et géif geléngen"
    },
    "partizipVergangenheit": {
      "de": "gelungen (es ist)",
      "lv": "gelongen"
    }
  },
  {
    "infinitiv": {
      "de": "gelten",
      "lv": "gëllen"
    },
    "praesens": {
      "de": "er gilt",
      "lv": "hie gëllt"
    },
    "imperfektIndikativ": {
      "de": "er galt",
      "lv": "hien huet gegollt"
    },
    "imperfektKonjunktiv": {
      "de": "er gölte / es gälte",
      "lv": "hie géif gëllen"
    },
    "partizipVergangenheit": {
      "de": "gegolten",
      "lv": "gegollt"
    }
  },
  {
    "infinitiv": {
      "de": "genesen",
      "lv": "sech erhuelen"
    },
    "praesens": {
      "de": "er genest",
      "lv": "hien erhëlt sech"
    },
    "imperfektIndikativ": {
      "de": "er genas",
      "lv": "hien huet sech erholl"
    },
    "imperfektKonjunktiv": {
      "de": "er genäse",
      "lv": "hie géif sech erhuelen"
    },
    "partizipVergangenheit": {
      "de": "genesen (er ist)",
      "lv": "erholl"
    }
  },
  {
    "infinitiv": {
      "de": "genießen",
      "lv": "genéissen"
    },
    "praesens": {
      "de": "er genießt",
      "lv": "hie genéisst"
    },
    "imperfektIndikativ": {
      "de": "er genoss",
      "lv": "hien huet genoss"
    },
    "imperfektKonjunktiv": {
      "de": "er genösse",
      "lv": "hie géif genéissen"
    },
    "partizipVergangenheit": {
      "de": "genossen",
      "lv": "genoss"
    }
  },
  {
    "infinitiv": {
      "de": "geschehen",
      "lv": "geschéien"
    },
    "praesens": {
      "de": "es geschieht",
      "lv": "et geschitt"
    },
    "imperfektIndikativ": {
      "de": "es geschah",
      "lv": "et geschouch"
    },
    "imperfektKonjunktiv": {
      "de": "es geschähe",
      "lv": "et géif geschéien"
    },
    "partizipVergangenheit": {
      "de": "geschehen (es ist)",
      "lv": "geschitt"
    }
  },
  {
    "infinitiv": {
      "de": "gießen",
      "lv": "schëdden"
    },
    "praesens": {
      "de": "er gießt",
      "lv": "hie schëtt"
    },
    "imperfektIndikativ": {
      "de": "er goss",
      "lv": "hien huet geschott"
    },
    "imperfektKonjunktiv": {
      "de": "er gösse",
      "lv": "hie géif schëdden"
    },
    "partizipVergangenheit": {
      "de": "gegossen",
      "lv": "geschott"
    }
  },
  {
    "infinitiv": {
      "de": "gleichen",
      "lv": "gläichen"
    },
    "praesens": {
      "de": "er gleicht",
      "lv": "hie gläicht"
    },
    "imperfektIndikativ": {
      "de": "er glich",
      "lv": "hien huet geglach"
    },
    "imperfektKonjunktiv": {
      "de": "er gliche",
      "lv": "hie géif gläichen"
    },
    "partizipVergangenheit": {
      "de": "geglichen",
      "lv": "geglach"
    }
  },
  {
    "infinitiv": {
      "de": "gleiten",
      "lv": "glëtschen"
    },
    "praesens": {
      "de": "er gleitet",
      "lv": "hie glëtscht"
    },
    "imperfektIndikativ": {
      "de": "er glitt",
      "lv": "hien ass geglëtscht"
    },
    "imperfektKonjunktiv": {
      "de": "er glitte",
      "lv": "hie géif glëtschen"
    },
    "partizipVergangenheit": {
      "de": "geglitten (er ist)",
      "lv": "geglëtscht"
    }
  },
  {
    "infinitiv": {
      "de": "glimmen",
      "lv": "glousen"
    },
    "praesens": {
      "de": "er glimmt",
      "lv": "et gloust"
    },
    "imperfektIndikativ": {
      "de": "er glimmte / glomm",
      "lv": "et huet gegloust"
    },
    "imperfektKonjunktiv": {
      "de": "er glimmte",
      "lv": "et géif glousen"
    },
    "partizipVergangenheit": {
      "de": "geglimmt / geglommen",
      "lv": "gegloust"
    }
  },
  {
    "infinitiv": {
      "de": "graben",
      "lv": "gruewen"
    },
    "praesens": {
      "de": "er gräbt",
      "lv": "hie grueft"
    },
    "imperfektIndikativ": {
      "de": "er grub",
      "lv": "hien huet gegruewen"
    },
    "imperfektKonjunktiv": {
      "de": "er grübe",
      "lv": "hie géif gruewen"
    },
    "partizipVergangenheit": {
      "de": "gegraben",
      "lv": "gegruewen"
    }
  },
  {
    "infinitiv": {
      "de": "greifen",
      "lv": "gräifen"
    },
    "praesens": {
      "de": "er greift",
      "lv": "hie gräift"
    },
    "imperfektIndikativ": {
      "de": "er griff",
      "lv": "hien huet gegraff"
    },
    "imperfektKonjunktiv": {
      "de": "er griffe",
      "lv": "hie géif gräifen"
    },
    "partizipVergangenheit": {
      "de": "gegriffen",
      "lv": "gegraff"
    }
  },
  {
    "infinitiv": {
      "de": "hauen",
      "lv": "haen"
    },
    "praesens": {
      "de": "er haut",
      "lv": "hien heet"
    },
    "imperfektIndikativ": {
      "de": "er hieb",
      "lv": "hien huet gehaen"
    },
    "imperfektKonjunktiv": {
      "de": "er hiebe",
      "lv": "hie géif haen"
    },
    "partizipVergangenheit": {
      "de": "gehauen",
      "lv": "gehaen"
    }
  },
  {
    "infinitiv": {
      "de": "heben",
      "lv": "hiewen"
    },
    "praesens": {
      "de": "er hebt",
      "lv": "hien hieft"
    },
    "imperfektIndikativ": {
      "de": "er hob",
      "lv": "hien huet gehuewen"
    },
    "imperfektKonjunktiv": {
      "de": "er höbe",
      "lv": "hie géif hiewen"
    },
    "partizipVergangenheit": {
      "de": "gehoben",
      "lv": "gehuewen"
    }
  },
  {
    "infinitiv": {
      "de": "kennen",
      "lv": "kennen / wëssen"
    },
    "praesens": {
      "de": "er kennt",
      "lv": "hie kennt / weess"
    },
    "imperfektIndikativ": {
      "de": "er kannte",
      "lv": "hien huet kannt / wousst"
    },
    "imperfektKonjunktiv": {
      "de": "er kennte",
      "lv": "hie géif kennen / wéisst"
    },
    "partizipVergangenheit": {
      "de": "gekannt",
      "lv": "kannt / gewosst"
    }
  },
  {
    "infinitiv": {
      "de": "klingen",
      "lv": "kléngen"
    },
    "praesens": {
      "de": "er klingt",
      "lv": "et kléngt"
    },
    "imperfektIndikativ": {
      "de": "er klang",
      "lv": "et huet geklongen"
    },
    "imperfektKonjunktiv": {
      "de": "er klänge",
      "lv": "et géif kléngen"
    },
    "partizipVergangenheit": {
      "de": "geklungen",
      "lv": "geklongen"
    }
  },
  {
    "infinitiv": {
      "de": "kneifen",
      "lv": "pëtzen"
    },
    "praesens": {
      "de": "er kneift",
      "lv": "hie pëtzt"
    },
    "imperfektIndikativ": {
      "de": "er kniff",
      "lv": "hien huet gepëtzt"
    },
    "imperfektKonjunktiv": {
      "de": "er kniffe",
      "lv": "hie géif pëtzen"
    },
    "partizipVergangenheit": {
      "de": "gekniffen",
      "lv": "gepëtzt"
    }
  },
  {
    "infinitiv": {
      "de": "bleiben",
      "lv": "bleiwen"
    },
    "praesens": {
      "de": "er bleibt",
      "lv": "hie bleift"
    },
    "imperfektIndikativ": {
      "de": "er blieb",
      "lv": "hie blouf"
    },
    "imperfektKonjunktiv": {
      "de": "er bliebe",
      "lv": "hie bléif"
    },
    "partizipVergangenheit": {
      "de": "geblieben (er ist)",
      "lv": "bliwwen"
    }
  },
  {
    "infinitiv": {
      "de": "bleichen",
      "lv": "verblatzen"
    },
    "praesens": {
      "de": "er bleicht",
      "lv": "et verblatzt"
    },
    "imperfektIndikativ": {
      "de": "er bleichte / er blich",
      "lv": "et ass verblatzt"
    },
    "imperfektKonjunktiv": {
      "de": "er bleichte / er bliche",
      "lv": "et géif verblatzen"
    },
    "partizipVergangenheit": {
      "de": "geblichen",
      "lv": "verblatzt"
    }
  },
  {
    "infinitiv": {
      "de": "braten",
      "lv": "broden"
    },
    "praesens": {
      "de": "er brät",
      "lv": "hie bréit"
    },
    "imperfektIndikativ": {
      "de": "er briet",
      "lv": "hien huet gebroden"
    },
    "imperfektKonjunktiv": {
      "de": "er briete",
      "lv": "hie géif broden"
    },
    "partizipVergangenheit": {
      "de": "gebraten",
      "lv": "gebroden"
    }
  },
  {
    "infinitiv": {
      "de": "brechen",
      "lv": "briechen"
    },
    "praesens": {
      "de": "er bricht",
      "lv": "hie brécht"
    },
    "imperfektIndikativ": {
      "de": "er brach",
      "lv": "hien huet gebrach"
    },
    "imperfektKonjunktiv": {
      "de": "er bräche",
      "lv": "hie géif briechen"
    },
    "partizipVergangenheit": {
      "de": "gebrochen",
      "lv": "gebrach"
    }
  },
  {
    "infinitiv": {
      "de": "brennen",
      "lv": "brennen"
    },
    "praesens": {
      "de": "er brennt",
      "lv": "et brennt"
    },
    "imperfektIndikativ": {
      "de": "er brannte",
      "lv": "et huet gebrannt"
    },
    "imperfektKonjunktiv": {
      "de": "er brennte",
      "lv": "et géif brennen"
    },
    "partizipVergangenheit": {
      "de": "gebrannt",
      "lv": "gebrannt"
    }
  },
  {
    "infinitiv": {
      "de": "bringen",
      "lv": "bréngen"
    },
    "praesens": {
      "de": "er bringt",
      "lv": "hie bréngt"
    },
    "imperfektIndikativ": {
      "de": "er brachte",
      "lv": "hien huet bruecht"
    },
    "imperfektKonjunktiv": {
      "de": "er brächte",
      "lv": "hie géif bréngen"
    },
    "partizipVergangenheit": {
      "de": "gebracht",
      "lv": "bruecht"
    }
  },
  {
    "infinitiv": {
      "de": "denken",
      "lv": "denken"
    },
    "praesens": {
      "de": "er denkt",
      "lv": "hien denkt"
    },
    "imperfektIndikativ": {
      "de": "er dachte",
      "lv": "hien duecht"
    },
    "imperfektKonjunktiv": {
      "de": "er dächte",
      "lv": "hie géif denken"
    },
    "partizipVergangenheit": {
      "de": "gedacht",
      "lv": "geduecht"
    }
  },
  {
    "infinitiv": {
      "de": "dingen",
      "lv": "astellen / sech eenegen"
    },
    "praesens": {
      "de": "er dingt",
      "lv": "hie stellt an / eenegt sech"
    },
    "imperfektIndikativ": {
      "de": "er dingte",
      "lv": "hien huet agestallt / huet sech gëeenegt"
    },
    "imperfektKonjunktiv": {
      "de": "er dingte",
      "lv": "hie géif astellen / géif sech eenegen"
    },
    "partizipVergangenheit": {
      "de": "gedungen",
      "lv": "agestallt / gëeenegt"
    }
  },
  {
    "infinitiv": {
      "de": "dreschen",
      "lv": "dreschen"
    },
    "praesens": {
      "de": "er drischt",
      "lv": "hien drescht"
    },
    "imperfektIndikativ": {
      "de": "er drasch / er drosch",
      "lv": "hien huet gedresch"
    },
    "imperfektKonjunktiv": {
      "de": "er dräsche / er drösche",
      "lv": "hie géif dreschen"
    },
    "partizipVergangenheit": {
      "de": "gedroschen",
      "lv": "gedresch"
    }
  },
  {
    "infinitiv": {
      "de": "dringen",
      "lv": "andréngen"
    },
    "praesens": {
      "de": "er dringt",
      "lv": "hien dréngt an"
    },
    "imperfektIndikativ": {
      "de": "er drang",
      "lv": "hien ass agedrongen"
    },
    "imperfektKonjunktiv": {
      "de": "er dränge",
      "lv": "hie géif andréngen"
    },
    "partizipVergangenheit": {
      "de": "gedrungen (er ist)",
      "lv": "agedrongen"
    }
  },
  {
    "infinitiv": {
      "de": "dünken",
      "lv": "schéngen"
    },
    "praesens": {
      "de": "es dünkt",
      "lv": "et schéngt"
    },
    "imperfektIndikativ": {
      "de": "es dünkte / es deuchte",
      "lv": "et huet geschéngt"
    },
    "imperfektKonjunktiv": {
      "de": "es dünkte / es deuchte",
      "lv": "et géif schéngen"
    },
    "partizipVergangenheit": {
      "de": "gedünkt",
      "lv": "geschéngt"
    }
  },
  {
    "infinitiv": {
      "de": "dürfen",
      "lv": "däerfen"
    },
    "praesens": {
      "de": "er darf",
      "lv": "hien däerf"
    },
    "imperfektIndikativ": {
      "de": "er durfte",
      "lv": "hien duerft"
    },
    "imperfektKonjunktiv": {
      "de": "er dürfte",
      "lv": "hien däerft"
    },
    "partizipVergangenheit": {
      "de": "gedurft",
      "lv": "geduerft"
    }
  },
  {
    "infinitiv": {
      "de": "empfehlen",
      "lv": "recommandéieren"
    },
    "praesens": {
      "de": "er empfiehlt",
      "lv": "hie recommandéiert"
    },
    "imperfektIndikativ": {
      "de": "er empfahl",
      "lv": "hien huet recommandéiert"
    },
    "imperfektKonjunktiv": {
      "de": "er empfähle / er empföhle",
      "lv": "hie géif recommandéieren"
    },
    "partizipVergangenheit": {
      "de": "empfohlen",
      "lv": "recommandéiert"
    }
  },
  {
    "infinitiv": {
      "de": "empfinden",
      "lv": "spieren"
    },
    "praesens": {
      "de": "er empfindet",
      "lv": "hie spiert"
    },
    "imperfektIndikativ": {
      "de": "er empfand",
      "lv": "hien huet gespiert"
    },
    "imperfektKonjunktiv": {
      "de": "er empfände",
      "lv": "hie géif spieren"
    },
    "partizipVergangenheit": {
      "de": "empfunden",
      "lv": "gespiert"
    }
  },
  {
    "infinitiv": {
      "de": "erlöschen",
      "lv": "ausgoen"
    },
    "praesens": {
      "de": "er erlischt",
      "lv": "et geet aus"
    },
    "imperfektIndikativ": {
      "de": "er erlosch",
      "lv": "et goung aus"
    },
    "imperfektKonjunktiv": {
      "de": "er erlösche",
      "lv": "et géing aus"
    },
    "partizipVergangenheit": {
      "de": "erloschen (er ist)",
      "lv": "ausgaangen"
    }
  },
  {
    "infinitiv": {
      "de": "erschrecken",
      "lv": "erschrecken"
    },
    "praesens": {
      "de": "er erschrickt",
      "lv": "hien erschreckt"
    },
    "imperfektIndikativ": {
      "de": "er erschrak",
      "lv": "hien ass erschreckt"
    },
    "imperfektKonjunktiv": {
      "de": "er erschräke",
      "lv": "hie géif erschrecken"
    },
    "partizipVergangenheit": {
      "de": "erschrocken (er ist)",
      "lv": "erschreckt"
    }
  },
  {
    "infinitiv": {
      "de": "essen",
      "lv": "iessen"
    },
    "praesens": {
      "de": "er isst",
      "lv": "hien ësst"
    },
    "imperfektIndikativ": {
      "de": "er aß",
      "lv": "hien huet giess"
    },
    "imperfektKonjunktiv": {
      "de": "er äße",
      "lv": "hie géif iessen"
    },
    "partizipVergangenheit": {
      "de": "gegessen",
      "lv": "giess"
    }
  },
  {
    "infinitiv": {
      "de": "fahren",
      "lv": "fueren"
    },
    "praesens": {
      "de": "er fährt",
      "lv": "hie fiert"
    },
    "imperfektIndikativ": {
      "de": "er fuhr",
      "lv": "hien ass gefuer"
    },
    "imperfektKonjunktiv": {
      "de": "er führe",
      "lv": "hie géif fueren"
    },
    "partizipVergangenheit": {
      "de": "gefahren (er ist)",
      "lv": "gefuer"
    }
  },
  {
    "infinitiv": {
      "de": "fallen",
      "lv": "falen"
    },
    "praesens": {
      "de": "er fällt",
      "lv": "hie fält"
    },
    "imperfektIndikativ": {
      "de": "er fiel",
      "lv": "hie foul"
    },
    "imperfektKonjunktiv": {
      "de": "er fiele",
      "lv": "hie féil"
    },
    "partizipVergangenheit": {
      "de": "gefallen (er ist)",
      "lv": "gefall"
    }
  },
  {
    "infinitiv": {
      "de": "fangen",
      "lv": "fänken"
    },
    "praesens": {
      "de": "er fängt",
      "lv": "hie fänkt"
    },
    "imperfektIndikativ": {
      "de": "er fing",
      "lv": "hien huet gefaangen"
    },
    "imperfektKonjunktiv": {
      "de": "er finge",
      "lv": "hie géif fänken"
    },
    "partizipVergangenheit": {
      "de": "gefangen",
      "lv": "gefaangen"
    }
  },
  {
    "infinitiv": {
      "de": "finden",
      "lv": "fannen"
    },
    "praesens": {
      "de": "er findet",
      "lv": "hie fënnt"
    },
    "imperfektIndikativ": {
      "de": "er fand",
      "lv": "hien huet fonnt"
    },
    "imperfektKonjunktiv": {
      "de": "er fände",
      "lv": "hie géif fannen"
    },
    "partizipVergangenheit": {
      "de": "gefunden",
      "lv": "fonnt"
    }
  },
  {
    "infinitiv": {
      "de": "fliegen",
      "lv": "fléien"
    },
    "praesens": {
      "de": "er fliegt",
      "lv": "hie flitt"
    },
    "imperfektIndikativ": {
      "de": "er flog",
      "lv": "hien ass geflunn"
    },
    "imperfektKonjunktiv": {
      "de": "er flöge",
      "lv": "hie géif fléien"
    },
    "partizipVergangenheit": {
      "de": "geflogen (er ist)",
      "lv": "geflunn"
    }
  },
  {
    "infinitiv": {
      "de": "fliehen",
      "lv": "flüchten"
    },
    "praesens": {
      "de": "er flieht",
      "lv": "hie flücht"
    },
    "imperfektIndikativ": {
      "de": "er floh",
      "lv": "hien ass geflücht"
    },
    "imperfektKonjunktiv": {
      "de": "er flöhe",
      "lv": "hie géif flüchten"
    },
    "partizipVergangenheit": {
      "de": "geflohen (er ist)",
      "lv": "geflücht"
    }
  },
  {
    "infinitiv": {
      "de": "fließen",
      "lv": "fléissen"
    },
    "praesens": {
      "de": "er fließt",
      "lv": "et fléisst"
    },
    "imperfektIndikativ": {
      "de": "er floss",
      "lv": "et ass gefloss"
    },
    "imperfektKonjunktiv": {
      "de": "er flösse",
      "lv": "et géif fléissen"
    },
    "partizipVergangenheit": {
      "de": "geflossen (er ist)",
      "lv": "gefloss"
    }
  },
  {
    "infinitiv": {
      "de": "fressen",
      "lv": "friessen"
    },
    "praesens": {
      "de": "er frisst",
      "lv": "hie frësst"
    },
    "imperfektIndikativ": {
      "de": "er fraß",
      "lv": "hien huet gefriess"
    },
    "imperfektKonjunktiv": {
      "de": "er fräße",
      "lv": "hie fréiss"
    },
    "partizipVergangenheit": {
      "de": "gefressen",
      "lv": "gefriess"
    }
  },
  {
    "infinitiv": {
      "de": "frieren",
      "lv": "fréieren"
    },
    "praesens": {
      "de": "er friert",
      "lv": "hie fréiert"
    },
    "imperfektIndikativ": {
      "de": "er fror",
      "lv": "hien ass gefruer"
    },
    "imperfektKonjunktiv": {
      "de": "er fröre",
      "lv": "hie géif fréieren"
    },
    "partizipVergangenheit": {
      "de": "gefroren",
      "lv": "gefruer"
    }
  },
  {
    "infinitiv": {
      "de": "geben",
      "lv": "ginn"
    },
    "praesens": {
      "de": "er gibt",
      "lv": "hie gëtt"
    },
    "imperfektIndikativ": {
      "de": "er gab",
      "lv": "hie gouf"
    },
    "imperfektKonjunktiv": {
      "de": "er gäbe",
      "lv": "hie géif"
    },
    "partizipVergangenheit": {
      "de": "gegeben",
      "lv": "ginn"
    }
  },
  {
    "infinitiv": {
      "de": "gedeihen",
      "lv": "gedeien"
    },
    "praesens": {
      "de": "er gedeiht",
      "lv": "hie gedeit"
    },
    "imperfektIndikativ": {
      "de": "er gedieh",
      "lv": "hien huet gedeit"
    },
    "imperfektKonjunktiv": {
      "de": "er gediehe",
      "lv": "hie géif gedeien"
    },
    "partizipVergangenheit": {
      "de": "gediehen (er ist)",
      "lv": "gedeit"
    }
  },
  {
    "infinitiv": {
      "de": "gehen",
      "lv": "goen"
    },
    "praesens": {
      "de": "er geht",
      "lv": "hie geet"
    },
    "imperfektIndikativ": {
      "de": "er ging",
      "lv": "hie goung"
    },
    "imperfektKonjunktiv": {
      "de": "er ginge",
      "lv": "hie géing"
    },
    "partizipVergangenheit": {
      "de": "gegangen (er ist)",
      "lv": "gaangen"
    }
  },
  {
    "infinitiv": {
      "de": "gewinnen",
      "lv": "gewannen"
    },
    "praesens": {
      "de": "er gewinnt",
      "lv": "hie gewënnt"
    },
    "imperfektIndikativ": {
      "de": "er gewann",
      "lv": "hien huet gewonnen"
    },
    "imperfektKonjunktiv": {
      "de": "er gewönne / er gewänne",
      "lv": "hie géif gewannen"
    },
    "partizipVergangenheit": {
      "de": "gewonnen",
      "lv": "gewonnen"
    }
  },
  {
    "infinitiv": {
      "de": "haben",
      "lv": "hunn"
    },
    "praesens": {
      "de": "er hat",
      "lv": "hien huet"
    },
    "imperfektIndikativ": {
      "de": "er hatte",
      "lv": "hien hat"
    },
    "imperfektKonjunktiv": {
      "de": "er hätte",
      "lv": "hien hätt"
    },
    "partizipVergangenheit": {
      "de": "gehabt",
      "lv": "gehat"
    }
  },
  {
    "infinitiv": {
      "de": "halten",
      "lv": "halen"
    },
    "praesens": {
      "de": "er hält",
      "lv": "hien hält"
    },
    "imperfektIndikativ": {
      "de": "er hielt",
      "lv": "hien houl"
    },
    "imperfektKonjunktiv": {
      "de": "er hielte",
      "lv": "hien héil"
    },
    "partizipVergangenheit": {
      "de": "gehalten",
      "lv": "gehalen"
    }
  },
  {
    "infinitiv": {
      "de": "heißen",
      "lv": "nennen / heeschen"
    },
    "praesens": {
      "de": "er heißt",
      "lv": "hien nennt / heescht"
    },
    "imperfektIndikativ": {
      "de": "er hieß",
      "lv": "hien huet genannt / housch"
    },
    "imperfektKonjunktiv": {
      "de": "er hieße",
      "lv": "hie géif nennen / géif heeschen"
    },
    "partizipVergangenheit": {
      "de": "geheißen",
      "lv": "genannt / geheescht"
    }
  },
  {
    "infinitiv": {
      "de": "helfen",
      "lv": "hëllefen"
    },
    "praesens": {
      "de": "er hilft",
      "lv": "hien hëlleft"
    },
    "imperfektIndikativ": {
      "de": "er half",
      "lv": "hien huet gehollef"
    },
    "imperfektKonjunktiv": {
      "de": "er hülfe / er hälfe",
      "lv": "hie géif hëllefen"
    },
    "partizipVergangenheit": {
      "de": "geholfen",
      "lv": "gehollef"
    }
  },
  {
    "infinitiv": {
      "de": "kommen",
      "lv": "kommen"
    },
    "praesens": {
      "de": "er kommt",
      "lv": "hie kënnt"
    },
    "imperfektIndikativ": {
      "de": "er kam",
      "lv": "hie koum"
    },
    "imperfektKonjunktiv": {
      "de": "er käme",
      "lv": "hie kéim"
    },
    "partizipVergangenheit": {
      "de": "gekommen (er ist)",
      "lv": "komm"
    }
  },
  {
    "infinitiv": {
      "de": "können",
      "lv": "kënnen"
    },
    "praesens": {
      "de": "er kann",
      "lv": "hie kann"
    },
    "imperfektIndikativ": {
      "de": "er konnte",
      "lv": "hie konnt"
    },
    "imperfektKonjunktiv": {
      "de": "er könnte",
      "lv": "hie kéint"
    },
    "partizipVergangenheit": {
      "de": "gekonnt",
      "lv": "kënnen"
    }
  },
  {
    "infinitiv": {
      "de": "kriechen",
      "lv": "krauchen"
    },
    "praesens": {
      "de": "er kriecht",
      "lv": "hie kraucht"
    },
    "imperfektIndikativ": {
      "de": "er kroch",
      "lv": "hien ass gekroch"
    },
    "imperfektKonjunktiv": {
      "de": "er kröche",
      "lv": "hie géif krauchen"
    },
    "partizipVergangenheit": {
      "de": "gekrochen (er ist)",
      "lv": "gekroch"
    }
  },
  {
    "infinitiv": {
      "de": "laden",
      "lv": "lueden / invitéieren"
    },
    "praesens": {
      "de": "er lädt",
      "lv": "hie luet / invitéiert"
    },
    "imperfektIndikativ": {
      "de": "er lud",
      "lv": "hien huet gelueden / huet invitéiert"
    },
    "imperfektKonjunktiv": {
      "de": "er lüde",
      "lv": "hie géif lueden / géif invitéieren"
    },
    "partizipVergangenheit": {
      "de": "geladen",
      "lv": "gelueden / invitéiert"
    }
  },
  {
    "infinitiv": {
      "de": "lassen",
      "lv": "loossen"
    },
    "praesens": {
      "de": "er lässt",
      "lv": "hie léisst"
    },
    "imperfektIndikativ": {
      "de": "er ließ",
      "lv": "hien huet gelooss"
    },
    "imperfektKonjunktiv": {
      "de": "er ließe",
      "lv": "hie léiss"
    },
    "partizipVergangenheit": {
      "de": "gelassen",
      "lv": "gelooss"
    }
  },
  {
    "infinitiv": {
      "de": "laufen",
      "lv": "lafen"
    },
    "praesens": {
      "de": "er läuft",
      "lv": "hie leeft"
    },
    "imperfektIndikativ": {
      "de": "er lief",
      "lv": "hien ass gelaf"
    },
    "imperfektKonjunktiv": {
      "de": "er liefe",
      "lv": "hie géif lafen"
    },
    "partizipVergangenheit": {
      "de": "gelaufen (er ist)",
      "lv": "gelaf"
    }
  },
  {
    "infinitiv": {
      "de": "leiden",
      "lv": "leiden"
    },
    "praesens": {
      "de": "er leidet",
      "lv": "hie leit"
    },
    "imperfektIndikativ": {
      "de": "er litt",
      "lv": "hien huet gelidden"
    },
    "imperfektKonjunktiv": {
      "de": "er litte",
      "lv": "hie géif leiden"
    },
    "partizipVergangenheit": {
      "de": "gelitten",
      "lv": "gelidden"
    }
  },
  {
    "infinitiv": {
      "de": "leihen",
      "lv": "léinen"
    },
    "praesens": {
      "de": "er leiht",
      "lv": "hie léint"
    },
    "imperfektIndikativ": {
      "de": "er lieh",
      "lv": "hien huet geléint"
    },
    "imperfektKonjunktiv": {
      "de": "er liehe",
      "lv": "hie géif léinen"
    },
    "partizipVergangenheit": {
      "de": "geliehen",
      "lv": "geléint"
    }
  },
  {
    "infinitiv": {
      "de": "lesen",
      "lv": "liesen"
    },
    "praesens": {
      "de": "er liest",
      "lv": "hie liest"
    },
    "imperfektIndikativ": {
      "de": "er las",
      "lv": "hien huet gelies"
    },
    "imperfektKonjunktiv": {
      "de": "er läse",
      "lv": "hie géif liesen"
    },
    "partizipVergangenheit": {
      "de": "gelesen",
      "lv": "gelies"
    }
  },
  {
    "infinitiv": {
      "de": "liegen",
      "lv": "leien"
    },
    "praesens": {
      "de": "er liegt",
      "lv": "hie läit"
    },
    "imperfektIndikativ": {
      "de": "er lag",
      "lv": "hie louch"
    },
    "imperfektKonjunktiv": {
      "de": "er läge",
      "lv": "hie léich"
    },
    "partizipVergangenheit": {
      "de": "gelegen",
      "lv": "geleeën"
    }
  },
  {
    "infinitiv": {
      "de": "lügen",
      "lv": "léien"
    },
    "praesens": {
      "de": "er lügt",
      "lv": "hie litt"
    },
    "imperfektIndikativ": {
      "de": "er log",
      "lv": "hien huet gelunn"
    },
    "imperfektKonjunktiv": {
      "de": "er löge",
      "lv": "hie géif léien"
    },
    "partizipVergangenheit": {
      "de": "gelogen",
      "lv": "gelunn"
    }
  },
  {
    "infinitiv": {
      "de": "mahlen",
      "lv": "muelen"
    },
    "praesens": {
      "de": "er mahlt",
      "lv": "hie muelt"
    },
    "imperfektIndikativ": {
      "de": "er mahlte",
      "lv": "hien huet gemuel"
    },
    "imperfektKonjunktiv": {
      "de": "er malte",
      "lv": "hie géif muelen"
    },
    "partizipVergangenheit": {
      "de": "gemahlen",
      "lv": "gemuel"
    }
  },
  {
    "infinitiv": {
      "de": "meiden",
      "lv": "vermeiden"
    },
    "praesens": {
      "de": "er meidet",
      "lv": "hie vermeit"
    },
    "imperfektIndikativ": {
      "de": "er mied",
      "lv": "hien huet vermidden"
    },
    "imperfektKonjunktiv": {
      "de": "er miede",
      "lv": "hie géif vermeiden"
    },
    "partizipVergangenheit": {
      "de": "gemieden",
      "lv": "vermidden"
    }
  },
  {
    "infinitiv": {
      "de": "melken",
      "lv": "sträichen"
    },
    "praesens": {
      "de": "er milkt / er melkt",
      "lv": "hie sträicht"
    },
    "imperfektIndikativ": {
      "de": "er molk / er melkte",
      "lv": "hien huet gestrach"
    },
    "imperfektKonjunktiv": {
      "de": "er mölke / er melkte",
      "lv": "hie géif sträichen"
    },
    "partizipVergangenheit": {
      "de": "gemolken / gemelkt",
      "lv": "gestrach"
    }
  },
  {
    "infinitiv": {
      "de": "messen",
      "lv": "moossen"
    },
    "praesens": {
      "de": "er misst",
      "lv": "hie moosst"
    },
    "imperfektIndikativ": {
      "de": "er maß",
      "lv": "hien huet gemooss"
    },
    "imperfektKonjunktiv": {
      "de": "er mäße",
      "lv": "hie géif moossen"
    },
    "partizipVergangenheit": {
      "de": "gemessen",
      "lv": "gemooss"
    }
  },
  {
    "infinitiv": {
      "de": "misslingen",
      "lv": "net geléngen"
    },
    "praesens": {
      "de": "es misslingt",
      "lv": "et geléngt net"
    },
    "imperfektIndikativ": {
      "de": "es misslang",
      "lv": "et ass net gelongen"
    },
    "imperfektKonjunktiv": {
      "de": "es misslänge",
      "lv": "et géif net geléngen"
    },
    "partizipVergangenheit": {
      "de": "misslungen",
      "lv": "net gelongen"
    }
  },
  {
    "infinitiv": {
      "de": "mögen",
      "lv": "gär hunn"
    },
    "praesens": {
      "de": "er mag",
      "lv": "hien huet gär"
    },
    "imperfektIndikativ": {
      "de": "er mochte",
      "lv": "hien hat gär"
    },
    "imperfektKonjunktiv": {
      "de": "er möchte",
      "lv": "hien hätt gär"
    },
    "partizipVergangenheit": {
      "de": "gemocht",
      "lv": "gär gehat"
    }
  },
  {
    "infinitiv": {
      "de": "müssen",
      "lv": "mussen"
    },
    "praesens": {
      "de": "er muss",
      "lv": "hie muss"
    },
    "imperfektIndikativ": {
      "de": "er musste",
      "lv": "hie misst"
    },
    "imperfektKonjunktiv": {
      "de": "er müsste",
      "lv": "hie misst"
    },
    "partizipVergangenheit": {
      "de": "gemusst",
      "lv": "gemusst"
    }
  },
  {
    "infinitiv": {
      "de": "nehmen",
      "lv": "huelen"
    },
    "praesens": {
      "de": "er nimmt",
      "lv": "hien hëlt"
    },
    "imperfektIndikativ": {
      "de": "er nahm",
      "lv": "hien huet geholl"
    },
    "imperfektKonjunktiv": {
      "de": "er nähme",
      "lv": "hien héil"
    },
    "partizipVergangenheit": {
      "de": "genommen",
      "lv": "geholl"
    }
  },
  {
    "infinitiv": {
      "de": "nennen",
      "lv": "nennen"
    },
    "praesens": {
      "de": "er nennt",
      "lv": "hien nennt"
    },
    "imperfektIndikativ": {
      "de": "er nannte",
      "lv": "hien huet genannt"
    },
    "imperfektKonjunktiv": {
      "de": "er nennte",
      "lv": "hie géif nennen"
    },
    "partizipVergangenheit": {
      "de": "genannt",
      "lv": "genannt"
    }
  },
  {
    "infinitiv": {
      "de": "pfeifen",
      "lv": "päifen"
    },
    "praesens": {
      "de": "er pfeift",
      "lv": "hie päift"
    },
    "imperfektIndikativ": {
      "de": "er pfiff",
      "lv": "hien huet gepaff"
    },
    "imperfektKonjunktiv": {
      "de": "er pfiffe",
      "lv": "hie géif päifen"
    },
    "partizipVergangenheit": {
      "de": "gepfiffen",
      "lv": "gepaff"
    }
  },
  {
    "infinitiv": {
      "de": "pflegen",
      "lv": "fleegen"
    },
    "praesens": {
      "de": "er pflegt",
      "lv": "hie fleegt"
    },
    "imperfektIndikativ": {
      "de": "er pflegte / er pflog",
      "lv": "hien huet gefleegt"
    },
    "imperfektKonjunktiv": {
      "de": "er pflegte / er pflöge",
      "lv": "hie géif fleegen"
    },
    "partizipVergangenheit": {
      "de": "gepflegt / gepflogen",
      "lv": "gefleegt"
    }
  },
  {
    "infinitiv": {
      "de": "preisen",
      "lv": "luewen"
    },
    "praesens": {
      "de": "er preist",
      "lv": "hie lueft"
    },
    "imperfektIndikativ": {
      "de": "er pries",
      "lv": "hien huet gelueft"
    },
    "imperfektKonjunktiv": {
      "de": "er priese",
      "lv": "hie géif luewen"
    },
    "partizipVergangenheit": {
      "de": "gepriesen",
      "lv": "gelueft"
    }
  },
  {
    "infinitiv": {
      "de": "quellen",
      "lv": "quëllen"
    },
    "praesens": {
      "de": "er quillt",
      "lv": "et quëllt"
    },
    "imperfektIndikativ": {
      "de": "er quoll",
      "lv": "et ass gequollen"
    },
    "imperfektKonjunktiv": {
      "de": "er quölle",
      "lv": "et géif quëllen"
    },
    "partizipVergangenheit": {
      "de": "gequollen (er ist)",
      "lv": "gequollen"
    }
  },
  {
    "infinitiv": {
      "de": "raten",
      "lv": "roden"
    },
    "praesens": {
      "de": "er rät",
      "lv": "hie réit"
    },
    "imperfektIndikativ": {
      "de": "er riet",
      "lv": "hien huet geroden"
    },
    "imperfektKonjunktiv": {
      "de": "er riete",
      "lv": "hie géif roden"
    },
    "partizipVergangenheit": {
      "de": "geraten",
      "lv": "geroden"
    }
  },
  {
    "infinitiv": {
      "de": "reiben",
      "lv": "reiwen"
    },
    "praesens": {
      "de": "er reibt",
      "lv": "hie reift"
    },
    "imperfektIndikativ": {
      "de": "er rieb",
      "lv": "hien huet geriwwen"
    },
    "imperfektKonjunktiv": {
      "de": "er riebe",
      "lv": "hie géif reiwen"
    },
    "partizipVergangenheit": {
      "de": "gerieben",
      "lv": "geriwwen"
    }
  },
  {
    "infinitiv": {
      "de": "reißen",
      "lv": "räissen"
    },
    "praesens": {
      "de": "er reißt",
      "lv": "hie räisst"
    },
    "imperfektIndikativ": {
      "de": "er riss",
      "lv": "hien huet gerass"
    },
    "imperfektKonjunktiv": {
      "de": "er risse",
      "lv": "hie géif räissen"
    },
    "partizipVergangenheit": {
      "de": "gerissen",
      "lv": "gerass"
    }
  },
  {
    "infinitiv": {
      "de": "reiten",
      "lv": "reiden"
    },
    "praesens": {
      "de": "er reitet",
      "lv": "hie reit"
    },
    "imperfektIndikativ": {
      "de": "er ritt",
      "lv": "hien ass geridden"
    },
    "imperfektKonjunktiv": {
      "de": "er ritte",
      "lv": "hie géif reiden"
    },
    "partizipVergangenheit": {
      "de": "geritten (er ist)",
      "lv": "geridden"
    }
  },
  {
    "infinitiv": {
      "de": "rennen",
      "lv": "rennen"
    },
    "praesens": {
      "de": "er rennt",
      "lv": "hie rennt"
    },
    "imperfektIndikativ": {
      "de": "er rannte",
      "lv": "hien ass gerannt"
    },
    "imperfektKonjunktiv": {
      "de": "er rennte",
      "lv": "hie géif rennen"
    },
    "partizipVergangenheit": {
      "de": "gerannt",
      "lv": "gerannt"
    }
  },
  {
    "infinitiv": {
      "de": "riechen",
      "lv": "richen"
    },
    "praesens": {
      "de": "er riecht",
      "lv": "hie richt"
    },
    "imperfektIndikativ": {
      "de": "er roch",
      "lv": "hien huet gericht"
    },
    "imperfektKonjunktiv": {
      "de": "er röche",
      "lv": "hie géif richen"
    },
    "partizipVergangenheit": {
      "de": "gerochen",
      "lv": "gericht"
    }
  },
  {
    "infinitiv": {
      "de": "ringen",
      "lv": "réngen"
    },
    "praesens": {
      "de": "er ringt",
      "lv": "hie réngt"
    },
    "imperfektIndikativ": {
      "de": "er rang",
      "lv": "hien huet geréngt"
    },
    "imperfektKonjunktiv": {
      "de": "er ränge",
      "lv": "hie géif réngen"
    },
    "partizipVergangenheit": {
      "de": "gerungen",
      "lv": "geréngt"
    }
  },
  {
    "infinitiv": {
      "de": "rinnen",
      "lv": "fléissen"
    },
    "praesens": {
      "de": "er rinnt",
      "lv": "et fléisst"
    },
    "imperfektIndikativ": {
      "de": "er rann",
      "lv": "et ass gefloss"
    },
    "imperfektKonjunktiv": {
      "de": "er ränne / er rönne",
      "lv": "et géif fléissen"
    },
    "partizipVergangenheit": {
      "de": "geronnen (er ist)",
      "lv": "gefloss"
    }
  },
  {
    "infinitiv": {
      "de": "rufen",
      "lv": "ruffen"
    },
    "praesens": {
      "de": "er ruft",
      "lv": "hie rifft"
    },
    "imperfektIndikativ": {
      "de": "er rief",
      "lv": "hien huet geruff"
    },
    "imperfektKonjunktiv": {
      "de": "er riefe",
      "lv": "hie géif ruffen"
    },
    "partizipVergangenheit": {
      "de": "gerufen",
      "lv": "geruff"
    }
  },
  {
    "infinitiv": {
      "de": "salzen",
      "lv": "salzen"
    },
    "praesens": {
      "de": "er salzt",
      "lv": "hie salzt"
    },
    "imperfektIndikativ": {
      "de": "er salzte",
      "lv": "hien huet gesalzt"
    },
    "imperfektKonjunktiv": {
      "de": "er salzte",
      "lv": "hie géif salzen"
    },
    "partizipVergangenheit": {
      "de": "gesalzen",
      "lv": "gesalzt"
    }
  },
  {
    "infinitiv": {
      "de": "saufen",
      "lv": "saufen / drénken"
    },
    "praesens": {
      "de": "er säuft",
      "lv": "hie sëft / drénkt"
    },
    "imperfektIndikativ": {
      "de": "er soff",
      "lv": "hien huet gesoff / huet gedronk"
    },
    "imperfektKonjunktiv": {
      "de": "er söffe",
      "lv": "hie géif saufen / géif drénken"
    },
    "partizipVergangenheit": {
      "de": "gesoffen",
      "lv": "gesoff / gedronk"
    }
  },
  {
    "infinitiv": {
      "de": "saugen",
      "lv": "suckelen"
    },
    "praesens": {
      "de": "er saugt",
      "lv": "hie suckelt"
    },
    "imperfektIndikativ": {
      "de": "er sog",
      "lv": "hien huet gesuckelt"
    },
    "imperfektKonjunktiv": {
      "de": "er söge",
      "lv": "hie géif suckelen"
    },
    "partizipVergangenheit": {
      "de": "gesogen",
      "lv": "gesuckelt"
    }
  },
  {
    "infinitiv": {
      "de": "schaffen",
      "lv": "schafen"
    },
    "praesens": {
      "de": "er schafft",
      "lv": "hie schaaft"
    },
    "imperfektIndikativ": {
      "de": "er schuf",
      "lv": "hien huet geschafen"
    },
    "imperfektKonjunktiv": {
      "de": "er schüfe",
      "lv": "hie géif schafen"
    },
    "partizipVergangenheit": {
      "de": "geschaffen",
      "lv": "geschafen"
    }
  },
  {
    "infinitiv": {
      "de": "schallen",
      "lv": "schalen"
    },
    "praesens": {
      "de": "es schallt",
      "lv": "et schaalt"
    },
    "imperfektIndikativ": {
      "de": "es schallte / es scholl",
      "lv": "et huet geschaalt"
    },
    "imperfektKonjunktiv": {
      "de": "es schallte / es schölle",
      "lv": "et géif schalen"
    },
    "partizipVergangenheit": {
      "de": "geschallt",
      "lv": "geschaalt"
    }
  },
  {
    "infinitiv": {
      "de": "scheiden",
      "lv": "trennen / sech trennen"
    },
    "praesens": {
      "de": "er scheidet",
      "lv": "hien trennt / trennt sech"
    },
    "imperfektIndikativ": {
      "de": "er schied",
      "lv": "hien huet getrennt / huet sech getrennt"
    },
    "imperfektKonjunktiv": {
      "de": "er schiede",
      "lv": "hie géif trennen / géif sech trennen"
    },
    "partizipVergangenheit": {
      "de": "geschieden (er hat / er ist)",
      "lv": "getrennt / getrennt"
    }
  },
  {
    "infinitiv": {
      "de": "scheinen",
      "lv": "schéngen"
    },
    "praesens": {
      "de": "er scheint",
      "lv": "hie schéngt"
    },
    "imperfektIndikativ": {
      "de": "er schien",
      "lv": "hien huet geschéngt"
    },
    "imperfektKonjunktiv": {
      "de": "er schiene",
      "lv": "hie géif schéngen"
    },
    "partizipVergangenheit": {
      "de": "geschienen",
      "lv": "geschéngt"
    }
  },
  {
    "infinitiv": {
      "de": "schelten",
      "lv": "vernennen"
    },
    "praesens": {
      "de": "er schilt",
      "lv": "hie vernennt"
    },
    "imperfektIndikativ": {
      "de": "er schalt",
      "lv": "hien huet vernannt"
    },
    "imperfektKonjunktiv": {
      "de": "er schölte / er schälte",
      "lv": "hie géif vernennen"
    },
    "partizipVergangenheit": {
      "de": "gescholten",
      "lv": "vernannt"
    }
  },
  {
    "infinitiv": {
      "de": "scheren",
      "lv": "schieren"
    },
    "praesens": {
      "de": "er schert",
      "lv": "hie schiert"
    },
    "imperfektIndikativ": {
      "de": "er schor / er scherte",
      "lv": "hien huet geschuer"
    },
    "imperfektKonjunktiv": {
      "de": "er schöre / er scherte",
      "lv": "hie géif schieren"
    },
    "partizipVergangenheit": {
      "de": "geschoren / geschert",
      "lv": "geschuer"
    }
  },
  {
    "infinitiv": {
      "de": "schieben",
      "lv": "drécken"
    },
    "praesens": {
      "de": "er schiebt",
      "lv": "hien dréckt"
    },
    "imperfektIndikativ": {
      "de": "er schob",
      "lv": "hien huet gedréckt"
    },
    "imperfektKonjunktiv": {
      "de": "er schöbe",
      "lv": "hie géif drécken"
    },
    "partizipVergangenheit": {
      "de": "geschoben",
      "lv": "gedréckt"
    }
  },
  {
    "infinitiv": {
      "de": "schießen",
      "lv": "schéissen"
    },
    "praesens": {
      "de": "er schießt",
      "lv": "hie schéisst"
    },
    "imperfektIndikativ": {
      "de": "er schoss",
      "lv": "hien huet geschoss"
    },
    "imperfektKonjunktiv": {
      "de": "er schösse",
      "lv": "hie géif schéissen"
    },
    "partizipVergangenheit": {
      "de": "geschossen",
      "lv": "geschoss"
    }
  },
  {
    "infinitiv": {
      "de": "schinden",
      "lv": "schënnen"
    },
    "praesens": {
      "de": "er schindet",
      "lv": "hie schënnt"
    },
    "imperfektIndikativ": {
      "de": "er schindete",
      "lv": "hien huet geschënnt"
    },
    "imperfektKonjunktiv": {
      "de": "er schindete",
      "lv": "hie géif schënnen"
    },
    "partizipVergangenheit": {
      "de": "geschunden",
      "lv": "geschënnt"
    }
  },
  {
    "infinitiv": {
      "de": "schlafen",
      "lv": "schlofen"
    },
    "praesens": {
      "de": "er schläft",
      "lv": "hie schléift"
    },
    "imperfektIndikativ": {
      "de": "er schlief",
      "lv": "hien huet geschlof"
    },
    "imperfektKonjunktiv": {
      "de": "er schliefe",
      "lv": "hie géif schlofen"
    },
    "partizipVergangenheit": {
      "de": "geschlafen",
      "lv": "geschlof"
    }
  },
  {
    "infinitiv": {
      "de": "schlagen",
      "lv": "schloen"
    },
    "praesens": {
      "de": "er schlägt",
      "lv": "hie schléit"
    },
    "imperfektIndikativ": {
      "de": "er schlug",
      "lv": "hien huet geschloen"
    },
    "imperfektKonjunktiv": {
      "de": "er schlüge",
      "lv": "hie géif schloen"
    },
    "partizipVergangenheit": {
      "de": "geschlagen",
      "lv": "geschloen"
    }
  },
  {
    "infinitiv": {
      "de": "schleichen",
      "lv": "sech schläichen"
    },
    "praesens": {
      "de": "er schleicht",
      "lv": "hie schläicht sech"
    },
    "imperfektIndikativ": {
      "de": "er schlich",
      "lv": "hien huet sech geschlach"
    },
    "imperfektKonjunktiv": {
      "de": "er schliche",
      "lv": "hie géif sech schläichen"
    },
    "partizipVergangenheit": {
      "de": "geschlichen (er ist)",
      "lv": "geschlach"
    }
  },
  {
    "infinitiv": {
      "de": "schleifen",
      "lv": "schläifen"
    },
    "praesens": {
      "de": "er schleift",
      "lv": "hie schläift"
    },
    "imperfektIndikativ": {
      "de": "er schliff",
      "lv": "hien huet geschlaff"
    },
    "imperfektKonjunktiv": {
      "de": "er schliffe",
      "lv": "hie géif schläifen"
    },
    "partizipVergangenheit": {
      "de": "geschliffen",
      "lv": "geschlaff"
    }
  },
  {
    "infinitiv": {
      "de": "schließen",
      "lv": "zoumaachen"
    },
    "praesens": {
      "de": "er schließt",
      "lv": "hie mécht zou"
    },
    "imperfektIndikativ": {
      "de": "er schloss",
      "lv": "hien huet zougemaach"
    },
    "imperfektKonjunktiv": {
      "de": "er schlösse",
      "lv": "hie géif zoumaachen"
    },
    "partizipVergangenheit": {
      "de": "geschlossen",
      "lv": "zougemaach"
    }
  },
  {
    "infinitiv": {
      "de": "schlingen",
      "lv": "verschléngen"
    },
    "praesens": {
      "de": "er schlingt",
      "lv": "hie verschléngt"
    },
    "imperfektIndikativ": {
      "de": "er schlang",
      "lv": "hien huet verschlongen"
    },
    "imperfektKonjunktiv": {
      "de": "er schlänge",
      "lv": "hie géif verschléngen"
    },
    "partizipVergangenheit": {
      "de": "geschlungen",
      "lv": "verschlongen"
    }
  },
  {
    "infinitiv": {
      "de": "schmeißen",
      "lv": "geheien"
    },
    "praesens": {
      "de": "er schmeißt",
      "lv": "hie geheit"
    },
    "imperfektIndikativ": {
      "de": "er schmiss",
      "lv": "hien huet geheit"
    },
    "imperfektKonjunktiv": {
      "de": "er schmisse",
      "lv": "hie géif geheien"
    },
    "partizipVergangenheit": {
      "de": "geschmissen",
      "lv": "geheit"
    }
  },
  {
    "infinitiv": {
      "de": "schmelzen",
      "lv": "schmëlzen"
    },
    "praesens": {
      "de": "er schmilzt",
      "lv": "et schmëlzt"
    },
    "imperfektIndikativ": {
      "de": "er schmolz",
      "lv": "et ass geschmolt"
    },
    "imperfektKonjunktiv": {
      "de": "er schmölze",
      "lv": "et géif schmëlzen"
    },
    "partizipVergangenheit": {
      "de": "geschmolzen (er ist)",
      "lv": "geschmolt"
    }
  },
  {
    "infinitiv": {
      "de": "schnauben",
      "lv": "schnauwen"
    },
    "praesens": {
      "de": "er schnaubt",
      "lv": "hie schnauft"
    },
    "imperfektIndikativ": {
      "de": "er schnaubte / er schnob",
      "lv": "hien huet geschnauft"
    },
    "imperfektKonjunktiv": {
      "de": "er schnaubte / er schnöbe",
      "lv": "hie géif schnauwen"
    },
    "partizipVergangenheit": {
      "de": "geschnaubt / geschnoben",
      "lv": "geschnauft"
    }
  },
  {
    "infinitiv": {
      "de": "schneiden",
      "lv": "schneiden"
    },
    "praesens": {
      "de": "er schneidet",
      "lv": "hie schneit"
    },
    "imperfektIndikativ": {
      "de": "er schnitt",
      "lv": "hien huet geschnidden"
    },
    "imperfektKonjunktiv": {
      "de": "er schnitte",
      "lv": "hie géif schneiden"
    },
    "partizipVergangenheit": {
      "de": "geschnitten",
      "lv": "geschnidden"
    }
  },
  {
    "infinitiv": {
      "de": "schreiben",
      "lv": "schreiwen"
    },
    "praesens": {
      "de": "er schreibt",
      "lv": "hie schreift"
    },
    "imperfektIndikativ": {
      "de": "er schrieb",
      "lv": "hien huet geschriwwen"
    },
    "imperfektKonjunktiv": {
      "de": "er schriebe",
      "lv": "hie géif schreiwen"
    },
    "partizipVergangenheit": {
      "de": "geschrieben",
      "lv": "geschriwwen"
    }
  },
  {
    "infinitiv": {
      "de": "schreien",
      "lv": "jäizen"
    },
    "praesens": {
      "de": "er schreit",
      "lv": "hie jäizt"
    },
    "imperfektIndikativ": {
      "de": "er schrie",
      "lv": "hien huet gejaut"
    },
    "imperfektKonjunktiv": {
      "de": "er schriee",
      "lv": "hie géif jäizen"
    },
    "partizipVergangenheit": {
      "de": "geschrien",
      "lv": "gejaut"
    }
  },
  {
    "infinitiv": {
      "de": "schreiten",
      "lv": "schrécken"
    },
    "praesens": {
      "de": "er schreitet",
      "lv": "hie schréckt"
    },
    "imperfektIndikativ": {
      "de": "er schritt",
      "lv": "hien ass geschréckt"
    },
    "imperfektKonjunktiv": {
      "de": "er schritte",
      "lv": "hie géif schrécken"
    },
    "partizipVergangenheit": {
      "de": "geschritten (er ist)",
      "lv": "geschréckt"
    }
  },
  {
    "infinitiv": {
      "de": "schweigen",
      "lv": "stëll sinn"
    },
    "praesens": {
      "de": "er schweigt",
      "lv": "hien ass stëll"
    },
    "imperfektIndikativ": {
      "de": "er schwieg",
      "lv": "hie war stëll"
    },
    "imperfektKonjunktiv": {
      "de": "er schwiege",
      "lv": "hie wier stëll"
    },
    "partizipVergangenheit": {
      "de": "geschwiegen",
      "lv": "stëll gewiescht"
    }
  },
  {
    "infinitiv": {
      "de": "schwellen",
      "lv": "schwëllen"
    },
    "praesens": {
      "de": "er schwillt",
      "lv": "et schwëllt"
    },
    "imperfektIndikativ": {
      "de": "er schwoll",
      "lv": "et ass geschwollen"
    },
    "imperfektKonjunktiv": {
      "de": "er schwölle",
      "lv": "et géif schwëllen"
    },
    "partizipVergangenheit": {
      "de": "geschwollen (er ist)",
      "lv": "geschwollen"
    }
  },
  {
    "infinitiv": {
      "de": "schwimmen",
      "lv": "schwammen"
    },
    "praesens": {
      "de": "er schwimmt",
      "lv": "hie schwëmmt"
    },
    "imperfektIndikativ": {
      "de": "er schwamm",
      "lv": "hien ass geschwommen"
    },
    "imperfektKonjunktiv": {
      "de": "er schwömme / er schwämme",
      "lv": "hie géif schwammen"
    },
    "partizipVergangenheit": {
      "de": "geschwommen (er ist)",
      "lv": "geschwommen"
    }
  },
  {
    "infinitiv": {
      "de": "schwinden",
      "lv": "verschwannen"
    },
    "praesens": {
      "de": "er schwindet",
      "lv": "et verschwënnt"
    },
    "imperfektIndikativ": {
      "de": "er schwand",
      "lv": "et ass verschwonnen"
    },
    "imperfektKonjunktiv": {
      "de": "er schwände",
      "lv": "et géif verschwannen"
    },
    "partizipVergangenheit": {
      "de": "geschwunden (er ist)",
      "lv": "verschwonnen"
    }
  },
  {
    "infinitiv": {
      "de": "schwingen",
      "lv": "schwéngen"
    },
    "praesens": {
      "de": "er schwingt",
      "lv": "hie schwéngt"
    },
    "imperfektIndikativ": {
      "de": "er schwang",
      "lv": "hien huet geschwongen"
    },
    "imperfektKonjunktiv": {
      "de": "er schwänge",
      "lv": "hie géif schwéngen"
    },
    "partizipVergangenheit": {
      "de": "geschwungen",
      "lv": "geschwongen"
    }
  },
  {
    "infinitiv": {
      "de": "schwören",
      "lv": "schwieren"
    },
    "praesens": {
      "de": "er schwört",
      "lv": "hie schwiert"
    },
    "imperfektIndikativ": {
      "de": "er schwur / er schwor",
      "lv": "hien huet geschwuer"
    },
    "imperfektKonjunktiv": {
      "de": "er schwöre",
      "lv": "hie géif schwieren"
    },
    "partizipVergangenheit": {
      "de": "geschworen",
      "lv": "geschwuer"
    }
  },
  {
    "infinitiv": {
      "de": "sehen",
      "lv": "gesinn"
    },
    "praesens": {
      "de": "er sieht",
      "lv": "hie gesäit"
    },
    "imperfektIndikativ": {
      "de": "er sah",
      "lv": "hie gesouch"
    },
    "imperfektKonjunktiv": {
      "de": "er sähe",
      "lv": "hie geséich"
    },
    "partizipVergangenheit": {
      "de": "gesehen",
      "lv": "gesinn"
    }
  },
  {
    "infinitiv": {
      "de": "sein",
      "lv": "sinn"
    },
    "praesens": {
      "de": "er ist",
      "lv": "hien ass"
    },
    "imperfektIndikativ": {
      "de": "er war",
      "lv": "hie war"
    },
    "imperfektKonjunktiv": {
      "de": "er wäre",
      "lv": "hie wier"
    },
    "partizipVergangenheit": {
      "de": "gewesen",
      "lv": "gewiescht"
    }
  },
  {
    "infinitiv": {
      "de": "senden",
      "lv": "schécken"
    },
    "praesens": {
      "de": "er sendet",
      "lv": "hie schéckt"
    },
    "imperfektIndikativ": {
      "de": "er sandte / er sendete",
      "lv": "hien huet geschéckt"
    },
    "imperfektKonjunktiv": {
      "de": "er sendete",
      "lv": "hie géif schécken"
    },
    "partizipVergangenheit": {
      "de": "gesandt / gesendet",
      "lv": "geschéckt"
    }
  },
  {
    "infinitiv": {
      "de": "sieden",
      "lv": "kachen"
    },
    "praesens": {
      "de": "er siedet",
      "lv": "hie kacht"
    },
    "imperfektIndikativ": {
      "de": "er sott / er siedete",
      "lv": "hien huet gekacht"
    },
    "imperfektKonjunktiv": {
      "de": "er sötte / er siedete",
      "lv": "hie géif kachen"
    },
    "partizipVergangenheit": {
      "de": "gesotten / gesiedet",
      "lv": "gekacht"
    }
  },
  {
    "infinitiv": {
      "de": "singen",
      "lv": "sangen"
    },
    "praesens": {
      "de": "er singt",
      "lv": "hie séngt"
    },
    "imperfektIndikativ": {
      "de": "er sang",
      "lv": "hien huet gesongen"
    },
    "imperfektKonjunktiv": {
      "de": "er sänge",
      "lv": "hie géif sangen"
    },
    "partizipVergangenheit": {
      "de": "gesungen",
      "lv": "gesongen"
    }
  },
  {
    "infinitiv": {
      "de": "sinken",
      "lv": "sénken"
    },
    "praesens": {
      "de": "er sinkt",
      "lv": "hie sénkt"
    },
    "imperfektIndikativ": {
      "de": "er sank",
      "lv": "hien ass gesonk"
    },
    "imperfektKonjunktiv": {
      "de": "er sänke",
      "lv": "hie géif sénken"
    },
    "partizipVergangenheit": {
      "de": "gesunken (er ist)",
      "lv": "gesonk"
    }
  },
  {
    "infinitiv": {
      "de": "sinnen",
      "lv": "nodenken"
    },
    "praesens": {
      "de": "er sinnt",
      "lv": "hien denkt no"
    },
    "imperfektIndikativ": {
      "de": "er sann",
      "lv": "hien duecht no"
    },
    "imperfektKonjunktiv": {
      "de": "er sönne / er sänne",
      "lv": "hie géif nodenken"
    },
    "partizipVergangenheit": {
      "de": "gesonnen",
      "lv": "nogeduecht"
    }
  },
  {
    "infinitiv": {
      "de": "sitzen",
      "lv": "sëtzen"
    },
    "praesens": {
      "de": "er sitzt",
      "lv": "hie sëtzt"
    },
    "imperfektIndikativ": {
      "de": "er saß",
      "lv": "hie souz"
    },
    "imperfektKonjunktiv": {
      "de": "er säße",
      "lv": "hie séiz"
    },
    "partizipVergangenheit": {
      "de": "gesessen",
      "lv": "gesiess"
    }
  },
  {
    "infinitiv": {
      "de": "sollen",
      "lv": "sollen"
    },
    "praesens": {
      "de": "er soll",
      "lv": "hie soll"
    },
    "imperfektIndikativ": {
      "de": "er sollte",
      "lv": "hie sollt"
    },
    "imperfektKonjunktiv": {
      "de": "er sollte",
      "lv": "hie sollt"
    },
    "partizipVergangenheit": {
      "de": "gesollt",
      "lv": "sollen"
    }
  },
  {
    "infinitiv": {
      "de": "speien",
      "lv": "späizen"
    },
    "praesens": {
      "de": "er speit",
      "lv": "hie späizt"
    },
    "imperfektIndikativ": {
      "de": "er spie",
      "lv": "hien huet gespaut"
    },
    "imperfektKonjunktiv": {
      "de": "er spie",
      "lv": "hie géif späizen"
    },
    "partizipVergangenheit": {
      "de": "gespien",
      "lv": "gespaut"
    }
  },
  {
    "infinitiv": {
      "de": "spinnen",
      "lv": "spannen"
    },
    "praesens": {
      "de": "er spinnt",
      "lv": "hie spënnt"
    },
    "imperfektIndikativ": {
      "de": "er spann",
      "lv": "hien huet gesponnen"
    },
    "imperfektKonjunktiv": {
      "de": "er spönne / er spänne",
      "lv": "hie géif spannen"
    },
    "partizipVergangenheit": {
      "de": "gesponnen",
      "lv": "gesponnen"
    }
  },
  {
    "infinitiv": {
      "de": "spleißen",
      "lv": "verbannen"
    },
    "praesens": {
      "de": "er spleißt",
      "lv": "hie verbënnt"
    },
    "imperfektIndikativ": {
      "de": "er spliss",
      "lv": "hien huet verbonnen"
    },
    "imperfektKonjunktiv": {
      "de": "er splisse",
      "lv": "hie géif verbannen"
    },
    "partizipVergangenheit": {
      "de": "gesplissen",
      "lv": "verbonnen"
    }
  },
  {
    "infinitiv": {
      "de": "sprechen",
      "lv": "schwätzen"
    },
    "praesens": {
      "de": "er spricht",
      "lv": "hie schwätzt"
    },
    "imperfektIndikativ": {
      "de": "er sprach",
      "lv": "hien huet geschwat"
    },
    "imperfektKonjunktiv": {
      "de": "er spräche",
      "lv": "hie géif schwätzen"
    },
    "partizipVergangenheit": {
      "de": "gesprochen",
      "lv": "geschwat"
    }
  },
  {
    "infinitiv": {
      "de": "sprießen",
      "lv": "ausschéissen"
    },
    "praesens": {
      "de": "er sprießt",
      "lv": "et schéisst aus"
    },
    "imperfektIndikativ": {
      "de": "er spross",
      "lv": "et huet ausgeschoss"
    },
    "imperfektKonjunktiv": {
      "de": "er sprösse",
      "lv": "et géif ausschéissen"
    },
    "partizipVergangenheit": {
      "de": "gesprossen (er ist)",
      "lv": "ausgeschoss"
    }
  },
  {
    "infinitiv": {
      "de": "springen",
      "lv": "sprangen"
    },
    "praesens": {
      "de": "er springt",
      "lv": "hie spréngt"
    },
    "imperfektIndikativ": {
      "de": "er sprang",
      "lv": "hien ass gesprongen"
    },
    "imperfektKonjunktiv": {
      "de": "er spränge",
      "lv": "hie géif sprangen"
    },
    "partizipVergangenheit": {
      "de": "gesprungen (er ist)",
      "lv": "gesprongen"
    }
  },
  {
    "infinitiv": {
      "de": "stechen",
      "lv": "stiechen"
    },
    "praesens": {
      "de": "er sticht",
      "lv": "hie stécht"
    },
    "imperfektIndikativ": {
      "de": "er stach",
      "lv": "hie stouch"
    },
    "imperfektKonjunktiv": {
      "de": "er stäche",
      "lv": "hie stéich"
    },
    "partizipVergangenheit": {
      "de": "gestochen",
      "lv": "gestach"
    }
  },
  {
    "infinitiv": {
      "de": "stecken",
      "lv": "stiechen / astiechen"
    },
    "praesens": {
      "de": "er steckt",
      "lv": "hie stécht / stécht an"
    },
    "imperfektIndikativ": {
      "de": "er stak / er steckte",
      "lv": "hie stouch / stouch an"
    },
    "imperfektKonjunktiv": {
      "de": "er stäke / er steckte",
      "lv": "hie stéich / stéich an"
    },
    "partizipVergangenheit": {
      "de": "gesteckt",
      "lv": "gestach / agestach"
    }
  },
  {
    "infinitiv": {
      "de": "stehen",
      "lv": "stoen"
    },
    "praesens": {
      "de": "er steht",
      "lv": "hie steet"
    },
    "imperfektIndikativ": {
      "de": "er stand",
      "lv": "hie stoung"
    },
    "imperfektKonjunktiv": {
      "de": "er stände / er stünde",
      "lv": "hie stéing"
    },
    "partizipVergangenheit": {
      "de": "gestanden",
      "lv": "gestanen"
    }
  },
  {
    "infinitiv": {
      "de": "stehlen",
      "lv": "stielen"
    },
    "praesens": {
      "de": "er stiehlt",
      "lv": "hie stielt"
    },
    "imperfektIndikativ": {
      "de": "er stahl",
      "lv": "hien huet gestuel"
    },
    "imperfektKonjunktiv": {
      "de": "er stöhle / er stähle",
      "lv": "hie géif stielen"
    },
    "partizipVergangenheit": {
      "de": "gestohlen",
      "lv": "gestuel"
    }
  },
  {
    "infinitiv": {
      "de": "steigen",
      "lv": "klammen"
    },
    "praesens": {
      "de": "er steigt",
      "lv": "hie klëmmt"
    },
    "imperfektIndikativ": {
      "de": "er stieg",
      "lv": "hien ass geklommen"
    },
    "imperfektKonjunktiv": {
      "de": "er stiege",
      "lv": "hie géif klammen"
    },
    "partizipVergangenheit": {
      "de": "gestiegen (er ist)",
      "lv": "geklommen"
    }
  },
  {
    "infinitiv": {
      "de": "sterben",
      "lv": "stierwen"
    },
    "praesens": {
      "de": "er stirbt",
      "lv": "hie stierft"
    },
    "imperfektIndikativ": {
      "de": "er starb",
      "lv": "hien ass gestuerwen"
    },
    "imperfektKonjunktiv": {
      "de": "er stürbe",
      "lv": "hie géif stierwen"
    },
    "partizipVergangenheit": {
      "de": "gestorben (er ist)",
      "lv": "gestuerwen"
    }
  },
  {
    "infinitiv": {
      "de": "stinken",
      "lv": "sténken"
    },
    "praesens": {
      "de": "es stinkt",
      "lv": "et sténkt"
    },
    "imperfektIndikativ": {
      "de": "es stank",
      "lv": "et huet gestonk"
    },
    "imperfektKonjunktiv": {
      "de": "es stänke",
      "lv": "et géif sténken"
    },
    "partizipVergangenheit": {
      "de": "gestunken",
      "lv": "gestonk"
    }
  },
  {
    "infinitiv": {
      "de": "stoßen",
      "lv": "stoussen"
    },
    "praesens": {
      "de": "er stößt",
      "lv": "hie stéisst"
    },
    "imperfektIndikativ": {
      "de": "er stieß",
      "lv": "hien huet gestouss"
    },
    "imperfektKonjunktiv": {
      "de": "er stieße",
      "lv": "hie stéiss"
    },
    "partizipVergangenheit": {
      "de": "gestoßen",
      "lv": "gestouss"
    }
  },
  {
    "infinitiv": {
      "de": "streichen",
      "lv": "usträichen / duerchsträichen"
    },
    "praesens": {
      "de": "er streicht",
      "lv": "hie sträicht un / sträicht duerch"
    },
    "imperfektIndikativ": {
      "de": "er strich",
      "lv": "hien huet ugestrach / huet duerchgestrach"
    },
    "imperfektKonjunktiv": {
      "de": "er striche",
      "lv": "hie géif usträichen / géif duerchsträichen"
    },
    "partizipVergangenheit": {
      "de": "gestrichen",
      "lv": "ugestrach / duerchgestrach"
    }
  },
  {
    "infinitiv": {
      "de": "streiten",
      "lv": "sech streiden"
    },
    "praesens": {
      "de": "er streitet",
      "lv": "hie streit sech"
    },
    "imperfektIndikativ": {
      "de": "er stritt",
      "lv": "hien huet sech gestridden"
    },
    "imperfektKonjunktiv": {
      "de": "er stritte",
      "lv": "hie géif sech streiden"
    },
    "partizipVergangenheit": {
      "de": "gestritten",
      "lv": "gestridden"
    }
  },
  {
    "infinitiv": {
      "de": "tragen",
      "lv": "droen"
    },
    "praesens": {
      "de": "er trägt",
      "lv": "hien dréit"
    },
    "imperfektIndikativ": {
      "de": "er trug",
      "lv": "hien huet gedroen"
    },
    "imperfektKonjunktiv": {
      "de": "er trüge",
      "lv": "hie géif droen"
    },
    "partizipVergangenheit": {
      "de": "getragen",
      "lv": "gedroen"
    }
  },
  {
    "infinitiv": {
      "de": "treffen",
      "lv": "treffen"
    },
    "praesens": {
      "de": "er trifft",
      "lv": "hien trëfft"
    },
    "imperfektIndikativ": {
      "de": "er traf",
      "lv": "hien huet getraff"
    },
    "imperfektKonjunktiv": {
      "de": "er träfe",
      "lv": "hie géif treffen"
    },
    "partizipVergangenheit": {
      "de": "getroffen",
      "lv": "getraff"
    }
  },
  {
    "infinitiv": {
      "de": "treiben",
      "lv": "dreiwen"
    },
    "praesens": {
      "de": "er treibt",
      "lv": "hien dreift"
    },
    "imperfektIndikativ": {
      "de": "er trieb",
      "lv": "hien huet gedriwwen"
    },
    "imperfektKonjunktiv": {
      "de": "er triebe",
      "lv": "hie géif dreiwen"
    },
    "partizipVergangenheit": {
      "de": "getrieben",
      "lv": "gedriwwen"
    }
  },
  {
    "infinitiv": {
      "de": "treten",
      "lv": "trieden / goen"
    },
    "praesens": {
      "de": "er tritt",
      "lv": "hien trëtt / geet"
    },
    "imperfektIndikativ": {
      "de": "er trat",
      "lv": "hien ass getrueden / goung"
    },
    "imperfektKonjunktiv": {
      "de": "er träte",
      "lv": "hie géif trieden / géing"
    },
    "partizipVergangenheit": {
      "de": "getreten (er ist)",
      "lv": "getrueden / gaangen"
    }
  },
  {
    "infinitiv": {
      "de": "trinken",
      "lv": "drénken"
    },
    "praesens": {
      "de": "er trinkt",
      "lv": "hien drénkt"
    },
    "imperfektIndikativ": {
      "de": "er trank",
      "lv": "hien huet gedronk"
    },
    "imperfektKonjunktiv": {
      "de": "er tränke",
      "lv": "hie géif drénken"
    },
    "partizipVergangenheit": {
      "de": "getrunken",
      "lv": "gedronk"
    }
  },
  {
    "infinitiv": {
      "de": "trügen",
      "lv": "täuschen"
    },
    "praesens": {
      "de": "er trügt",
      "lv": "hien täuscht"
    },
    "imperfektIndikativ": {
      "de": "er trog",
      "lv": "hien huet getäuscht"
    },
    "imperfektKonjunktiv": {
      "de": "er tröge",
      "lv": "hie géif täuschen"
    },
    "partizipVergangenheit": {
      "de": "getrogen",
      "lv": "getäuscht"
    }
  },
  {
    "infinitiv": {
      "de": "tun",
      "lv": "doen"
    },
    "praesens": {
      "de": "er tut",
      "lv": "hien deet"
    },
    "imperfektIndikativ": {
      "de": "er tat",
      "lv": "hien doung"
    },
    "imperfektKonjunktiv": {
      "de": "er täte",
      "lv": "hien déit"
    },
    "partizipVergangenheit": {
      "de": "getan",
      "lv": "gedoen"
    }
  },
  {
    "infinitiv": {
      "de": "verderben",
      "lv": "verdierwen"
    },
    "praesens": {
      "de": "er verdirbt",
      "lv": "hie verdierft"
    },
    "imperfektIndikativ": {
      "de": "er verdarb",
      "lv": "hien huet verduerwen"
    },
    "imperfektKonjunktiv": {
      "de": "er verdürbe",
      "lv": "hie géif verdierwen"
    },
    "partizipVergangenheit": {
      "de": "verdorben",
      "lv": "verduerwen"
    }
  },
  {
    "infinitiv": {
      "de": "verdrießen",
      "lv": "verdréissen"
    },
    "praesens": {
      "de": "er verdrießt",
      "lv": "hie verdréisst"
    },
    "imperfektIndikativ": {
      "de": "er verdross",
      "lv": "hien huet verdross"
    },
    "imperfektKonjunktiv": {
      "de": "er verdrösse",
      "lv": "hie géif verdréissen"
    },
    "partizipVergangenheit": {
      "de": "verdrossen",
      "lv": "verdross"
    }
  },
  {
    "infinitiv": {
      "de": "vergessen",
      "lv": "vergiessen"
    },
    "praesens": {
      "de": "er vergisst",
      "lv": "hie vergësst"
    },
    "imperfektIndikativ": {
      "de": "er vergaß",
      "lv": "hien huet vergiess"
    },
    "imperfektKonjunktiv": {
      "de": "er vergäße",
      "lv": "hie géif vergiessen"
    },
    "partizipVergangenheit": {
      "de": "vergessen",
      "lv": "vergiess"
    }
  },
  {
    "infinitiv": {
      "de": "verlieren",
      "lv": "verléieren"
    },
    "praesens": {
      "de": "er verliert",
      "lv": "hie verléiert"
    },
    "imperfektIndikativ": {
      "de": "er verlor",
      "lv": "hien huet verluer"
    },
    "imperfektKonjunktiv": {
      "de": "er verlöre",
      "lv": "hie géif verléieren"
    },
    "partizipVergangenheit": {
      "de": "verloren",
      "lv": "verluer"
    }
  },
  {
    "infinitiv": {
      "de": "wachsen",
      "lv": "wuessen"
    },
    "praesens": {
      "de": "er wächst",
      "lv": "hie wiisst"
    },
    "imperfektIndikativ": {
      "de": "er wuchs",
      "lv": "hien ass gewuess"
    },
    "imperfektKonjunktiv": {
      "de": "er wüchse",
      "lv": "hie géif wuessen"
    },
    "partizipVergangenheit": {
      "de": "gewachsen (er ist)",
      "lv": "gewuess"
    }
  },
  {
    "infinitiv": {
      "de": "waschen",
      "lv": "wäschen"
    },
    "praesens": {
      "de": "er wäscht",
      "lv": "hie wäscht"
    },
    "imperfektIndikativ": {
      "de": "er wusch",
      "lv": "hien huet gewäsch"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsche",
      "lv": "hie géif wäschen"
    },
    "partizipVergangenheit": {
      "de": "gewaschen",
      "lv": "gewäsch"
    }
  },
  {
    "infinitiv": {
      "de": "weben",
      "lv": "wiewen"
    },
    "praesens": {
      "de": "er webt",
      "lv": "hie wieft"
    },
    "imperfektIndikativ": {
      "de": "er wob / er webte",
      "lv": "hien huet gewieft"
    },
    "imperfektKonjunktiv": {
      "de": "er wöbe / er webte",
      "lv": "hie géif wiewen"
    },
    "partizipVergangenheit": {
      "de": "gewoben",
      "lv": "gewieft"
    }
  },
  {
    "infinitiv": {
      "de": "weichen",
      "lv": "wäichen"
    },
    "praesens": {
      "de": "er weicht",
      "lv": "hie wäicht"
    },
    "imperfektIndikativ": {
      "de": "er wich",
      "lv": "hien ass gewach"
    },
    "imperfektKonjunktiv": {
      "de": "er wiche",
      "lv": "hie géif wäichen"
    },
    "partizipVergangenheit": {
      "de": "gewichen (er ist)",
      "lv": "gewach"
    }
  },
  {
    "infinitiv": {
      "de": "weisen",
      "lv": "weisen"
    },
    "praesens": {
      "de": "er weist",
      "lv": "hie weist"
    },
    "imperfektIndikativ": {
      "de": "er wies",
      "lv": "hien huet gewisen"
    },
    "imperfektKonjunktiv": {
      "de": "er wiese",
      "lv": "hie géif weisen"
    },
    "partizipVergangenheit": {
      "de": "gewiesen",
      "lv": "gewisen"
    }
  },
  {
    "infinitiv": {
      "de": "wenden",
      "lv": "dréien / ëmdréien"
    },
    "praesens": {
      "de": "er wendet",
      "lv": "hien dréit / dréit ëm"
    },
    "imperfektIndikativ": {
      "de": "er wandte / es wendete",
      "lv": "hien huet gedréit / huet ëmgedréit"
    },
    "imperfektKonjunktiv": {
      "de": "er wendete",
      "lv": "hie géif dréien / géif ëmdréien"
    },
    "partizipVergangenheit": {
      "de": "gewandt / gewendet",
      "lv": "gedréit / ëmgedréit"
    }
  },
  {
    "infinitiv": {
      "de": "werben",
      "lv": "ëm d'Hand froen"
    },
    "praesens": {
      "de": "er wirbt",
      "lv": "hie freet ëm d'Hand"
    },
    "imperfektIndikativ": {
      "de": "er warb",
      "lv": "hien huet ëm d'Hand gefrot"
    },
    "imperfektKonjunktiv": {
      "de": "er würbe",
      "lv": "hie géif ëm d'Hand froen"
    },
    "partizipVergangenheit": {
      "de": "geworben",
      "lv": "ëm d'Hand gefrot"
    }
  },
  {
    "infinitiv": {
      "de": "werden",
      "lv": "ginn"
    },
    "praesens": {
      "de": "er wird",
      "lv": "hie gëtt"
    },
    "imperfektIndikativ": {
      "de": "er wurde",
      "lv": "hie gouf"
    },
    "imperfektKonjunktiv": {
      "de": "er würde",
      "lv": "hie géif"
    },
    "partizipVergangenheit": {
      "de": "geworden",
      "lv": "ginn"
    }
  },
  {
    "infinitiv": {
      "de": "werfen",
      "lv": "werfen"
    },
    "praesens": {
      "de": "er wirft",
      "lv": "hie wërft"
    },
    "imperfektIndikativ": {
      "de": "er warf",
      "lv": "hien huet geworf"
    },
    "imperfektKonjunktiv": {
      "de": "er würfe",
      "lv": "hie géif werfen"
    },
    "partizipVergangenheit": {
      "de": "geworfen",
      "lv": "geworf"
    }
  },
  {
    "infinitiv": {
      "de": "wiegen",
      "lv": "weien"
    },
    "praesens": {
      "de": "er wiegt",
      "lv": "hie weit"
    },
    "imperfektIndikativ": {
      "de": "er wog",
      "lv": "hien huet gewien"
    },
    "imperfektKonjunktiv": {
      "de": "er wöge",
      "lv": "hie géif weien"
    },
    "partizipVergangenheit": {
      "de": "gewogen",
      "lv": "gewien"
    }
  },
  {
    "infinitiv": {
      "de": "winden",
      "lv": "trëtzen"
    },
    "praesens": {
      "de": "er windet",
      "lv": "hien trëtzt"
    },
    "imperfektIndikativ": {
      "de": "er wand",
      "lv": "hien huet getrëtzt"
    },
    "imperfektKonjunktiv": {
      "de": "er wände",
      "lv": "hie géif trëtzen"
    },
    "partizipVergangenheit": {
      "de": "gewunden",
      "lv": "getrëtzt"
    }
  },
  {
    "infinitiv": {
      "de": "wissen",
      "lv": "wëssen"
    },
    "praesens": {
      "de": "er weiß",
      "lv": "hie weess"
    },
    "imperfektIndikativ": {
      "de": "er wusste",
      "lv": "hie wousst"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsste",
      "lv": "hie wéisst"
    },
    "partizipVergangenheit": {
      "de": "gewusst",
      "lv": "gewosst"
    }
  },
  {
    "infinitiv": {
      "de": "wollen",
      "lv": "wëllen"
    },
    "praesens": {
      "de": "er will",
      "lv": "hie wëllt"
    },
    "imperfektIndikativ": {
      "de": "er wollte",
      "lv": "hie wollt"
    },
    "imperfektKonjunktiv": {
      "de": "er wollte",
      "lv": "hie wéilt"
    },
    "partizipVergangenheit": {
      "de": "gewollt",
      "lv": "gewollt"
    }
  },
  {
    "infinitiv": {
      "de": "wringen",
      "lv": "ausdrécken / pressen"
    },
    "praesens": {
      "de": "er wringt",
      "lv": "hien dréckt aus / presst"
    },
    "imperfektIndikativ": {
      "de": "er wrang",
      "lv": "hien huet ausgedréckt / huet gepresst"
    },
    "imperfektKonjunktiv": {
      "de": "er wränge",
      "lv": "hie géif ausdrécken / géif pressen"
    },
    "partizipVergangenheit": {
      "de": "gewrungen",
      "lv": "ausgedréckt / gepresst"
    }
  },
  {
    "infinitiv": {
      "de": "zeihen",
      "lv": "beschëllegen"
    },
    "praesens": {
      "de": "er zeiht",
      "lv": "hie beschëllegt"
    },
    "imperfektIndikativ": {
      "de": "er zieh",
      "lv": "hien huet beschëllegt"
    },
    "imperfektKonjunktiv": {
      "de": "er ziehe",
      "lv": "hie géif beschëllegen"
    },
    "partizipVergangenheit": {
      "de": "geziehen",
      "lv": "beschëllegt"
    }
  },
  {
    "infinitiv": {
      "de": "ziehen",
      "lv": "zéien"
    },
    "praesens": {
      "de": "er zieht",
      "lv": "hien zitt"
    },
    "imperfektIndikativ": {
      "de": "er zog",
      "lv": "hien huet gezunn"
    },
    "imperfektKonjunktiv": {
      "de": "er zöge",
      "lv": "hie géif zéien"
    },
    "partizipVergangenheit": {
      "de": "gezogen",
      "lv": "gezunn"
    }
  },
  {
    "infinitiv": {
      "de": "zwingen",
      "lv": "zwéngen"
    },
    "praesens": {
      "de": "er zwingt",
      "lv": "hien zwéngt"
    },
    "imperfektIndikativ": {
      "de": "er zwang",
      "lv": "hien huet gezwongen"
    },
    "imperfektKonjunktiv": {
      "de": "er zwänge",
      "lv": "hie géif zwéngen"
    },
    "partizipVergangenheit": {
      "de": "gezwungen",
      "lv": "gezwongen"
    }
  },
  {
    "infinitiv": {
      "de": "empfangen",
      "lv": "empfänken"
    },
    "praesens": {
      "de": "er empfängt",
      "lv": "hien empfänkt"
    },
    "imperfektIndikativ": {
      "de": "er empfing",
      "lv": "hien huet empfaangen"
    },
    "imperfektKonjunktiv": {
      "de": "er empfinge",
      "lv": "hie géif empfänken"
    },
    "partizipVergangenheit": {
      "de": "empfangen",
      "lv": "empfaangen"
    }
  },
  {
    "infinitiv": {
      "de": "erwägen",
      "lv": "iwwerleeën"
    },
    "praesens": {
      "de": "er erwägt",
      "lv": "hien iwwerleet"
    },
    "imperfektIndikativ": {
      "de": "er erwog",
      "lv": "hien huet iwwerluecht"
    },
    "imperfektKonjunktiv": {
      "de": "er erwöge",
      "lv": "hie géif iwwerleeën"
    },
    "partizipVergangenheit": {
      "de": "erwogen",
      "lv": "iwwerluecht"
    }
  },
  {
    "infinitiv": {
      "de": "fechten",
      "lv": "kämpfen"
    },
    "praesens": {
      "de": "er ficht",
      "lv": "hie kämpft"
    },
    "imperfektIndikativ": {
      "de": "er focht",
      "lv": "hien huet gekämpft"
    },
    "imperfektKonjunktiv": {
      "de": "er föchte",
      "lv": "hie géif kämpfen"
    },
    "partizipVergangenheit": {
      "de": "gefochten",
      "lv": "gekämpft"
    }
  },
  {
    "infinitiv": {
      "de": "flechten",
      "lv": "flechten"
    },
    "praesens": {
      "de": "er flicht",
      "lv": "hie flecht"
    },
    "imperfektIndikativ": {
      "de": "er flocht",
      "lv": "hien huet geflecht"
    },
    "imperfektKonjunktiv": {
      "de": "er flöchte",
      "lv": "hie géif flechten"
    },
    "partizipVergangenheit": {
      "de": "geflochten",
      "lv": "geflecht"
    }
  },
  {
    "infinitiv": {
      "de": "hangen",
      "lv": "hänken"
    },
    "praesens": {
      "de": "er hängt",
      "lv": "hien hänkt"
    },
    "imperfektIndikativ": {
      "de": "er hing",
      "lv": "hien houng"
    },
    "imperfektKonjunktiv": {
      "de": "er hinge",
      "lv": "hien héing"
    },
    "partizipVergangenheit": {
      "de": "gehangen",
      "lv": "gehaangen"
    }
  },
  {
    "infinitiv": {
      "de": "spalten",
      "lv": "splécken"
    },
    "praesens": {
      "de": "er spaltet",
      "lv": "hie spléckt"
    },
    "imperfektIndikativ": {
      "de": "er spaltete",
      "lv": "hien huet gespléckt"
    },
    "imperfektKonjunktiv": {
      "de": "er spaltete",
      "lv": "hie géif splécken"
    },
    "partizipVergangenheit": {
      "de": "gespalten",
      "lv": "gespléckt"
    }
  },
  {
    "infinitiv": {
      "de": "verzeihen",
      "lv": "verzeien"
    },
    "praesens": {
      "de": "er verzeiht",
      "lv": "hie verzeit"
    },
    "imperfektIndikativ": {
      "de": "er verzieh",
      "lv": "hien huet verzien"
    },
    "imperfektKonjunktiv": {
      "de": "er verziehe",
      "lv": "hie géif verzeien"
    },
    "partizipVergangenheit": {
      "de": "verziehen",
      "lv": "verzien"
    }
  }
];

window.VERB_ENTRIES = VERB_ENTRIES;

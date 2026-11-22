const VERB_ENTRIES = [
  {
    "infinitiv": {
      "de": "backen",
      "lv": "å bake"
    },
    "praesens": {
      "de": "er bäckt",
      "lv": "han bakar"
    },
    "imperfektIndikativ": {
      "de": "er buk",
      "lv": "han baka"
    },
    "imperfektKonjunktiv": {
      "de": "er büke",
      "lv": "han ville bake"
    },
    "partizipVergangenheit": {
      "de": "gebacken",
      "lv": "baka"
    }
  },
  {
    "infinitiv": {
      "de": "befehlen",
      "lv": "å befale"
    },
    "praesens": {
      "de": "er befiehlt",
      "lv": "han befaler"
    },
    "imperfektIndikativ": {
      "de": "er befahl",
      "lv": "han befalte"
    },
    "imperfektKonjunktiv": {
      "de": "er beföhle",
      "lv": "han ville befale"
    },
    "partizipVergangenheit": {
      "de": "befohlen",
      "lv": "befalt"
    }
  },
  {
    "infinitiv": {
      "de": "beginnen",
      "lv": "å begynne"
    },
    "praesens": {
      "de": "er beginnt",
      "lv": "han begynner"
    },
    "imperfektIndikativ": {
      "de": "er begann",
      "lv": "han begynte"
    },
    "imperfektKonjunktiv": {
      "de": "er begönne / er begänne",
      "lv": "han ville begynne"
    },
    "partizipVergangenheit": {
      "de": "begonnen",
      "lv": "begynt"
    }
  },
  {
    "infinitiv": {
      "de": "beißen",
      "lv": "å bite"
    },
    "praesens": {
      "de": "er beißt",
      "lv": "han bit"
    },
    "imperfektIndikativ": {
      "de": "er biss",
      "lv": "han beit"
    },
    "imperfektKonjunktiv": {
      "de": "er bisse",
      "lv": "han ville bite"
    },
    "partizipVergangenheit": {
      "de": "gebissen",
      "lv": "bite"
    }
  },
  {
    "infinitiv": {
      "de": "bergen",
      "lv": "å redde / å skjule"
    },
    "praesens": {
      "de": "er birgt",
      "lv": "han reddar / skjuler"
    },
    "imperfektIndikativ": {
      "de": "er barg",
      "lv": "han redda / skjulte"
    },
    "imperfektKonjunktiv": {
      "de": "er bürge / er bärge",
      "lv": "han ville redde / skjule"
    },
    "partizipVergangenheit": {
      "de": "geborgen",
      "lv": "redda / skjult"
    }
  },
  {
    "infinitiv": {
      "de": "bersten",
      "lv": "å sprekke"
    },
    "praesens": {
      "de": "er birst",
      "lv": "det sprekk"
    },
    "imperfektIndikativ": {
      "de": "er barst / er borst",
      "lv": "det sprakk"
    },
    "imperfektKonjunktiv": {
      "de": "er bärste / er börste",
      "lv": "det ville sprekke"
    },
    "partizipVergangenheit": {
      "de": "geborsten (er ist)",
      "lv": "sprokke"
    }
  },
  {
    "infinitiv": {
      "de": "bewegen",
      "lv": "å bevege"
    },
    "praesens": {
      "de": "er bewegt",
      "lv": "han bevegar"
    },
    "imperfektIndikativ": {
      "de": "er bewog",
      "lv": "han bevega"
    },
    "imperfektKonjunktiv": {
      "de": "er bewöge",
      "lv": "han ville bevege"
    },
    "partizipVergangenheit": {
      "de": "bewogen",
      "lv": "bevega"
    }
  },
  {
    "infinitiv": {
      "de": "biegen",
      "lv": "å bøye"
    },
    "praesens": {
      "de": "er biegt",
      "lv": "han bøyer"
    },
    "imperfektIndikativ": {
      "de": "er bog",
      "lv": "han bøygde"
    },
    "imperfektKonjunktiv": {
      "de": "er böge",
      "lv": "han ville bøye"
    },
    "partizipVergangenheit": {
      "de": "gebogen",
      "lv": "bøygd"
    }
  },
  {
    "infinitiv": {
      "de": "bieten",
      "lv": "å tilby"
    },
    "praesens": {
      "de": "er bietet",
      "lv": "han tilbyr"
    },
    "imperfektIndikativ": {
      "de": "er bot",
      "lv": "han tilbaud"
    },
    "imperfektKonjunktiv": {
      "de": "er böte",
      "lv": "han ville tilby"
    },
    "partizipVergangenheit": {
      "de": "geboten",
      "lv": "tilbode"
    }
  },
  {
    "infinitiv": {
      "de": "binden",
      "lv": "å binde"
    },
    "praesens": {
      "de": "er bindet",
      "lv": "han bind"
    },
    "imperfektIndikativ": {
      "de": "er band",
      "lv": "han batt"
    },
    "imperfektKonjunktiv": {
      "de": "er bände",
      "lv": "han ville binde"
    },
    "partizipVergangenheit": {
      "de": "gebunden",
      "lv": "bunde"
    }
  },
  {
    "infinitiv": {
      "de": "bitten",
      "lv": "å be"
    },
    "praesens": {
      "de": "er bittet",
      "lv": "han ber"
    },
    "imperfektIndikativ": {
      "de": "er bat",
      "lv": "han bad"
    },
    "imperfektKonjunktiv": {
      "de": "er bäte",
      "lv": "han ville be"
    },
    "partizipVergangenheit": {
      "de": "gebeten",
      "lv": "bedt"
    }
  },
  {
    "infinitiv": {
      "de": "blasen",
      "lv": "å blåse"
    },
    "praesens": {
      "de": "er bläst",
      "lv": "han blæs"
    },
    "imperfektIndikativ": {
      "de": "er blies",
      "lv": "han bles"
    },
    "imperfektKonjunktiv": {
      "de": "er bliese",
      "lv": "han ville blåse"
    },
    "partizipVergangenheit": {
      "de": "geblasen",
      "lv": "blåse"
    }
  },
  {
    "infinitiv": {
      "de": "gären",
      "lv": "å gjære"
    },
    "praesens": {
      "de": "es gärt",
      "lv": "det gjærar"
    },
    "imperfektIndikativ": {
      "de": "es gor / es gärte",
      "lv": "det gjæra"
    },
    "imperfektKonjunktiv": {
      "de": "es göre / es gärte",
      "lv": "det ville gjære"
    },
    "partizipVergangenheit": {
      "de": "gegoren / gegärt",
      "lv": "gjæra"
    }
  },
  {
    "infinitiv": {
      "de": "gebären",
      "lv": "å føde"
    },
    "praesens": {
      "de": "sie gebiert",
      "lv": "ho føder"
    },
    "imperfektIndikativ": {
      "de": "sie gebar",
      "lv": "ho fødde"
    },
    "imperfektKonjunktiv": {
      "de": "sie gebäre",
      "lv": "ho ville føde"
    },
    "partizipVergangenheit": {
      "de": "geboren",
      "lv": "fødd"
    }
  },
  {
    "infinitiv": {
      "de": "gelingen",
      "lv": "å lukkast"
    },
    "praesens": {
      "de": "es gelingt",
      "lv": "det lukkast"
    },
    "imperfektIndikativ": {
      "de": "es gelang",
      "lv": "det lukkast"
    },
    "imperfektKonjunktiv": {
      "de": "es gelänge",
      "lv": "det ville lukkast"
    },
    "partizipVergangenheit": {
      "de": "gelungen (es ist)",
      "lv": "lukkast"
    }
  },
  {
    "infinitiv": {
      "de": "gelten",
      "lv": "å gjelde / å vere gyldig"
    },
    "praesens": {
      "de": "er gilt",
      "lv": "han gjeld / er gyldig"
    },
    "imperfektIndikativ": {
      "de": "er galt",
      "lv": "han gjaldt / var gyldig"
    },
    "imperfektKonjunktiv": {
      "de": "er gölte / es gälte",
      "lv": "han ville gjelde / vere gyldig"
    },
    "partizipVergangenheit": {
      "de": "gegolten",
      "lv": "gjeldt / vore gyldig"
    }
  },
  {
    "infinitiv": {
      "de": "genesen",
      "lv": "å bli frisk"
    },
    "praesens": {
      "de": "er genest",
      "lv": "han blir frisk"
    },
    "imperfektIndikativ": {
      "de": "er genas",
      "lv": "han vart frisk"
    },
    "imperfektKonjunktiv": {
      "de": "er genäse",
      "lv": "han ville bli frisk"
    },
    "partizipVergangenheit": {
      "de": "genesen (er ist)",
      "lv": "blitt frisk"
    }
  },
  {
    "infinitiv": {
      "de": "genießen",
      "lv": "å nyte"
    },
    "praesens": {
      "de": "er genießt",
      "lv": "han nyt"
    },
    "imperfektIndikativ": {
      "de": "er genoss",
      "lv": "han naut"
    },
    "imperfektKonjunktiv": {
      "de": "er genösse",
      "lv": "han ville nyte"
    },
    "partizipVergangenheit": {
      "de": "genossen",
      "lv": "nytt"
    }
  },
  {
    "infinitiv": {
      "de": "geschehen",
      "lv": "å skje"
    },
    "praesens": {
      "de": "es geschieht",
      "lv": "det skjer"
    },
    "imperfektIndikativ": {
      "de": "es geschah",
      "lv": "det skjedde"
    },
    "imperfektKonjunktiv": {
      "de": "es geschähe",
      "lv": "det ville skje"
    },
    "partizipVergangenheit": {
      "de": "geschehen (es ist)",
      "lv": "skjedd"
    }
  },
  {
    "infinitiv": {
      "de": "gießen",
      "lv": "å helle"
    },
    "praesens": {
      "de": "er gießt",
      "lv": "han heller"
    },
    "imperfektIndikativ": {
      "de": "er goss",
      "lv": "han helte"
    },
    "imperfektKonjunktiv": {
      "de": "er gösse",
      "lv": "han ville helle"
    },
    "partizipVergangenheit": {
      "de": "gegossen",
      "lv": "helt"
    }
  },
  {
    "infinitiv": {
      "de": "gleichen",
      "lv": "å likne"
    },
    "praesens": {
      "de": "er gleicht",
      "lv": "han liknar"
    },
    "imperfektIndikativ": {
      "de": "er glich",
      "lv": "han likna"
    },
    "imperfektKonjunktiv": {
      "de": "er gliche",
      "lv": "han ville likne"
    },
    "partizipVergangenheit": {
      "de": "geglichen",
      "lv": "likna"
    }
  },
  {
    "infinitiv": {
      "de": "gleiten",
      "lv": "å gli"
    },
    "praesens": {
      "de": "er gleitet",
      "lv": "han glir"
    },
    "imperfektIndikativ": {
      "de": "er glitt",
      "lv": "han glei"
    },
    "imperfektKonjunktiv": {
      "de": "er glitte",
      "lv": "han ville gli"
    },
    "partizipVergangenheit": {
      "de": "geglitten (er ist)",
      "lv": "glidd"
    }
  },
  {
    "infinitiv": {
      "de": "glimmen",
      "lv": "å gløde"
    },
    "praesens": {
      "de": "er glimmt",
      "lv": "det gløder"
    },
    "imperfektIndikativ": {
      "de": "er glimmte / glomm",
      "lv": "det glødde"
    },
    "imperfektKonjunktiv": {
      "de": "er glimmte",
      "lv": "det ville gløde"
    },
    "partizipVergangenheit": {
      "de": "geglimmt / geglommen",
      "lv": "glødd"
    }
  },
  {
    "infinitiv": {
      "de": "graben",
      "lv": "å grave"
    },
    "praesens": {
      "de": "er gräbt",
      "lv": "han grev"
    },
    "imperfektIndikativ": {
      "de": "er grub",
      "lv": "han grov"
    },
    "imperfektKonjunktiv": {
      "de": "er grübe",
      "lv": "han ville grave"
    },
    "partizipVergangenheit": {
      "de": "gegraben",
      "lv": "grave"
    }
  },
  {
    "infinitiv": {
      "de": "greifen",
      "lv": "å gripe"
    },
    "praesens": {
      "de": "er greift",
      "lv": "han grip"
    },
    "imperfektIndikativ": {
      "de": "er griff",
      "lv": "han greip"
    },
    "imperfektKonjunktiv": {
      "de": "er griffe",
      "lv": "han ville gripe"
    },
    "partizipVergangenheit": {
      "de": "gegriffen",
      "lv": "gripe"
    }
  },
  {
    "infinitiv": {
      "de": "hauen",
      "lv": "å hogge"
    },
    "praesens": {
      "de": "er haut",
      "lv": "han høgg"
    },
    "imperfektIndikativ": {
      "de": "er hieb",
      "lv": "han hogg"
    },
    "imperfektKonjunktiv": {
      "de": "er hiebe",
      "lv": "han ville hogge"
    },
    "partizipVergangenheit": {
      "de": "gehauen",
      "lv": "hogge"
    }
  },
  {
    "infinitiv": {
      "de": "heben",
      "lv": "å løfte"
    },
    "praesens": {
      "de": "er hebt",
      "lv": "han løftar"
    },
    "imperfektIndikativ": {
      "de": "er hob",
      "lv": "han løfta"
    },
    "imperfektKonjunktiv": {
      "de": "er höbe",
      "lv": "han ville løfte"
    },
    "partizipVergangenheit": {
      "de": "gehoben",
      "lv": "løfta"
    }
  },
  {
    "infinitiv": {
      "de": "kennen",
      "lv": "å kjenne / å vite"
    },
    "praesens": {
      "de": "er kennt",
      "lv": "han kjenner / veit"
    },
    "imperfektIndikativ": {
      "de": "er kannte",
      "lv": "han kjende / visste"
    },
    "imperfektKonjunktiv": {
      "de": "er kennte",
      "lv": "han ville kjenne / vite"
    },
    "partizipVergangenheit": {
      "de": "gekannt",
      "lv": "kjent / visst"
    }
  },
  {
    "infinitiv": {
      "de": "klingen",
      "lv": "å klinge"
    },
    "praesens": {
      "de": "er klingt",
      "lv": "det kling"
    },
    "imperfektIndikativ": {
      "de": "er klang",
      "lv": "det klang"
    },
    "imperfektKonjunktiv": {
      "de": "er klänge",
      "lv": "det ville klinge"
    },
    "partizipVergangenheit": {
      "de": "geklungen",
      "lv": "klunge"
    }
  },
  {
    "infinitiv": {
      "de": "kneifen",
      "lv": "å klype"
    },
    "praesens": {
      "de": "er kneift",
      "lv": "han klyper"
    },
    "imperfektIndikativ": {
      "de": "er kniff",
      "lv": "han klypte"
    },
    "imperfektKonjunktiv": {
      "de": "er kniffe",
      "lv": "han ville klype"
    },
    "partizipVergangenheit": {
      "de": "gekniffen",
      "lv": "klypt"
    }
  },
  {
    "infinitiv": {
      "de": "bleiben",
      "lv": "å bli"
    },
    "praesens": {
      "de": "er bleibt",
      "lv": "han blir"
    },
    "imperfektIndikativ": {
      "de": "er blieb",
      "lv": "han vart"
    },
    "imperfektKonjunktiv": {
      "de": "er bliebe",
      "lv": "han ville bli"
    },
    "partizipVergangenheit": {
      "de": "geblieben (er ist)",
      "lv": "blitt"
    }
  },
  {
    "infinitiv": {
      "de": "bleichen",
      "lv": "å bleikne"
    },
    "praesens": {
      "de": "er bleicht",
      "lv": "det bleiknar"
    },
    "imperfektIndikativ": {
      "de": "er bleichte / er blich",
      "lv": "det bleikna"
    },
    "imperfektKonjunktiv": {
      "de": "er bleichte / er bliche",
      "lv": "det ville bleikne"
    },
    "partizipVergangenheit": {
      "de": "geblichen",
      "lv": "bleikna"
    }
  },
  {
    "infinitiv": {
      "de": "braten",
      "lv": "å steike"
    },
    "praesens": {
      "de": "er brät",
      "lv": "han steiker"
    },
    "imperfektIndikativ": {
      "de": "er briet",
      "lv": "han steikte"
    },
    "imperfektKonjunktiv": {
      "de": "er briete",
      "lv": "han ville steike"
    },
    "partizipVergangenheit": {
      "de": "gebraten",
      "lv": "steikt"
    }
  },
  {
    "infinitiv": {
      "de": "brechen",
      "lv": "å bryte"
    },
    "praesens": {
      "de": "er bricht",
      "lv": "han bryt"
    },
    "imperfektIndikativ": {
      "de": "er brach",
      "lv": "han braut"
    },
    "imperfektKonjunktiv": {
      "de": "er bräche",
      "lv": "han ville bryte"
    },
    "partizipVergangenheit": {
      "de": "gebrochen",
      "lv": "brote"
    }
  },
  {
    "infinitiv": {
      "de": "brennen",
      "lv": "å brenne"
    },
    "praesens": {
      "de": "er brennt",
      "lv": "det brenn"
    },
    "imperfektIndikativ": {
      "de": "er brannte",
      "lv": "det brann"
    },
    "imperfektKonjunktiv": {
      "de": "er brennte",
      "lv": "det ville brenne"
    },
    "partizipVergangenheit": {
      "de": "gebrannt",
      "lv": "brunne"
    }
  },
  {
    "infinitiv": {
      "de": "bringen",
      "lv": "å bringe"
    },
    "praesens": {
      "de": "er bringt",
      "lv": "han bringar"
    },
    "imperfektIndikativ": {
      "de": "er brachte",
      "lv": "han bringa"
    },
    "imperfektKonjunktiv": {
      "de": "er brächte",
      "lv": "han ville bringe"
    },
    "partizipVergangenheit": {
      "de": "gebracht",
      "lv": "bringa"
    }
  },
  {
    "infinitiv": {
      "de": "denken",
      "lv": "å tenke"
    },
    "praesens": {
      "de": "er denkt",
      "lv": "han tenker"
    },
    "imperfektIndikativ": {
      "de": "er dachte",
      "lv": "han tenkte"
    },
    "imperfektKonjunktiv": {
      "de": "er dächte",
      "lv": "han ville tenke"
    },
    "partizipVergangenheit": {
      "de": "gedacht",
      "lv": "tenkt"
    }
  },
  {
    "infinitiv": {
      "de": "dingen",
      "lv": "å hyre / å bli samd"
    },
    "praesens": {
      "de": "er dingt",
      "lv": "han hyrar / blir samd"
    },
    "imperfektIndikativ": {
      "de": "er dingte",
      "lv": "han hyra / vart samd"
    },
    "imperfektKonjunktiv": {
      "de": "er dingte",
      "lv": "han ville hyre / bli samd"
    },
    "partizipVergangenheit": {
      "de": "gedungen",
      "lv": "hyra / blitt samd"
    }
  },
  {
    "infinitiv": {
      "de": "dreschen",
      "lv": "å treske"
    },
    "praesens": {
      "de": "er drischt",
      "lv": "han tresker"
    },
    "imperfektIndikativ": {
      "de": "er drasch / er drosch",
      "lv": "han treskte"
    },
    "imperfektKonjunktiv": {
      "de": "er dräsche / er drösche",
      "lv": "han ville treske"
    },
    "partizipVergangenheit": {
      "de": "gedroschen",
      "lv": "treskt"
    }
  },
  {
    "infinitiv": {
      "de": "dringen",
      "lv": "å trenge inn"
    },
    "praesens": {
      "de": "er dringt",
      "lv": "han trenger inn"
    },
    "imperfektIndikativ": {
      "de": "er drang",
      "lv": "han trengde inn"
    },
    "imperfektKonjunktiv": {
      "de": "er dränge",
      "lv": "han ville trenge inn"
    },
    "partizipVergangenheit": {
      "de": "gedrungen (er ist)",
      "lv": "trengt inn"
    }
  },
  {
    "infinitiv": {
      "de": "dünken",
      "lv": "å synast"
    },
    "praesens": {
      "de": "es dünkt",
      "lv": "det synest"
    },
    "imperfektIndikativ": {
      "de": "es dünkte / es deuchte",
      "lv": "det syntest"
    },
    "imperfektKonjunktiv": {
      "de": "es dünkte / es deuchte",
      "lv": "det ville synast"
    },
    "partizipVergangenheit": {
      "de": "gedünkt",
      "lv": "synst"
    }
  },
  {
    "infinitiv": {
      "de": "dürfen",
      "lv": "å få lov"
    },
    "praesens": {
      "de": "er darf",
      "lv": "han får lov"
    },
    "imperfektIndikativ": {
      "de": "er durfte",
      "lv": "han fekk lov"
    },
    "imperfektKonjunktiv": {
      "de": "er dürfte",
      "lv": "han ville få lov"
    },
    "partizipVergangenheit": {
      "de": "gedurft",
      "lv": "fått lov"
    }
  },
  {
    "infinitiv": {
      "de": "empfehlen",
      "lv": "å anbefale"
    },
    "praesens": {
      "de": "er empfiehlt",
      "lv": "han anbefaler"
    },
    "imperfektIndikativ": {
      "de": "er empfahl",
      "lv": "han anbefalte"
    },
    "imperfektKonjunktiv": {
      "de": "er empfähle / er empföhle",
      "lv": "han ville anbefale"
    },
    "partizipVergangenheit": {
      "de": "empfohlen",
      "lv": "anbefalt"
    }
  },
  {
    "infinitiv": {
      "de": "empfinden",
      "lv": "å føle"
    },
    "praesens": {
      "de": "er empfindet",
      "lv": "han føler"
    },
    "imperfektIndikativ": {
      "de": "er empfand",
      "lv": "han følte"
    },
    "imperfektKonjunktiv": {
      "de": "er empfände",
      "lv": "han ville føle"
    },
    "partizipVergangenheit": {
      "de": "empfunden",
      "lv": "følt"
    }
  },
  {
    "infinitiv": {
      "de": "erlöschen",
      "lv": "å slokne"
    },
    "praesens": {
      "de": "er erlischt",
      "lv": "det sloknar"
    },
    "imperfektIndikativ": {
      "de": "er erlosch",
      "lv": "det slokna"
    },
    "imperfektKonjunktiv": {
      "de": "er erlösche",
      "lv": "det ville slokne"
    },
    "partizipVergangenheit": {
      "de": "erloschen (er ist)",
      "lv": "slokna"
    }
  },
  {
    "infinitiv": {
      "de": "erschrecken",
      "lv": "å bli skremd"
    },
    "praesens": {
      "de": "er erschrickt",
      "lv": "han blir skremd"
    },
    "imperfektIndikativ": {
      "de": "er erschrak",
      "lv": "han vart skremd"
    },
    "imperfektKonjunktiv": {
      "de": "er erschräke",
      "lv": "han ville bli skremd"
    },
    "partizipVergangenheit": {
      "de": "erschrocken (er ist)",
      "lv": "blitt skremd"
    }
  },
  {
    "infinitiv": {
      "de": "essen",
      "lv": "å ete"
    },
    "praesens": {
      "de": "er isst",
      "lv": "han et"
    },
    "imperfektIndikativ": {
      "de": "er aß",
      "lv": "han åt"
    },
    "imperfektKonjunktiv": {
      "de": "er äße",
      "lv": "han ville ete"
    },
    "partizipVergangenheit": {
      "de": "gegessen",
      "lv": "ete"
    }
  },
  {
    "infinitiv": {
      "de": "fahren",
      "lv": "å køyre"
    },
    "praesens": {
      "de": "er fährt",
      "lv": "han køyrer"
    },
    "imperfektIndikativ": {
      "de": "er fuhr",
      "lv": "han køyrde"
    },
    "imperfektKonjunktiv": {
      "de": "er führe",
      "lv": "han ville køyre"
    },
    "partizipVergangenheit": {
      "de": "gefahren (er ist)",
      "lv": "køyrt"
    }
  },
  {
    "infinitiv": {
      "de": "fallen",
      "lv": "å falle"
    },
    "praesens": {
      "de": "er fällt",
      "lv": "han fell"
    },
    "imperfektIndikativ": {
      "de": "er fiel",
      "lv": "han fall"
    },
    "imperfektKonjunktiv": {
      "de": "er fiele",
      "lv": "han ville falle"
    },
    "partizipVergangenheit": {
      "de": "gefallen (er ist)",
      "lv": "falle"
    }
  },
  {
    "infinitiv": {
      "de": "fangen",
      "lv": "å fange"
    },
    "praesens": {
      "de": "er fängt",
      "lv": "han fangar"
    },
    "imperfektIndikativ": {
      "de": "er fing",
      "lv": "han fanga"
    },
    "imperfektKonjunktiv": {
      "de": "er finge",
      "lv": "han ville fange"
    },
    "partizipVergangenheit": {
      "de": "gefangen",
      "lv": "fanga"
    }
  },
  {
    "infinitiv": {
      "de": "finden",
      "lv": "å finne"
    },
    "praesens": {
      "de": "er findet",
      "lv": "han finn"
    },
    "imperfektIndikativ": {
      "de": "er fand",
      "lv": "han fann"
    },
    "imperfektKonjunktiv": {
      "de": "er fände",
      "lv": "han ville finne"
    },
    "partizipVergangenheit": {
      "de": "gefunden",
      "lv": "funne"
    }
  },
  {
    "infinitiv": {
      "de": "fliegen",
      "lv": "å fly"
    },
    "praesens": {
      "de": "er fliegt",
      "lv": "han flyg"
    },
    "imperfektIndikativ": {
      "de": "er flog",
      "lv": "han flaug"
    },
    "imperfektKonjunktiv": {
      "de": "er flöge",
      "lv": "han ville fly"
    },
    "partizipVergangenheit": {
      "de": "geflogen (er ist)",
      "lv": "floge"
    }
  },
  {
    "infinitiv": {
      "de": "fliehen",
      "lv": "å flykte"
    },
    "praesens": {
      "de": "er flieht",
      "lv": "han flyktar"
    },
    "imperfektIndikativ": {
      "de": "er floh",
      "lv": "han flykta"
    },
    "imperfektKonjunktiv": {
      "de": "er flöhe",
      "lv": "han ville flykte"
    },
    "partizipVergangenheit": {
      "de": "geflohen (er ist)",
      "lv": "flykta"
    }
  },
  {
    "infinitiv": {
      "de": "fließen",
      "lv": "å flyte"
    },
    "praesens": {
      "de": "er fließt",
      "lv": "det flyt"
    },
    "imperfektIndikativ": {
      "de": "er floss",
      "lv": "det flaut"
    },
    "imperfektKonjunktiv": {
      "de": "er flösse",
      "lv": "det ville flyte"
    },
    "partizipVergangenheit": {
      "de": "geflossen (er ist)",
      "lv": "flote"
    }
  },
  {
    "infinitiv": {
      "de": "fressen",
      "lv": "å ete / å sluke"
    },
    "praesens": {
      "de": "er frisst",
      "lv": "han et / sluker"
    },
    "imperfektIndikativ": {
      "de": "er fraß",
      "lv": "han åt / slukte"
    },
    "imperfektKonjunktiv": {
      "de": "er fräße",
      "lv": "han ville ete / sluke"
    },
    "partizipVergangenheit": {
      "de": "gefressen",
      "lv": "ete / slukt"
    }
  },
  {
    "infinitiv": {
      "de": "frieren",
      "lv": "å fryse"
    },
    "praesens": {
      "de": "er friert",
      "lv": "han frys"
    },
    "imperfektIndikativ": {
      "de": "er fror",
      "lv": "han fraus"
    },
    "imperfektKonjunktiv": {
      "de": "er fröre",
      "lv": "han ville fryse"
    },
    "partizipVergangenheit": {
      "de": "gefroren",
      "lv": "frose"
    }
  },
  {
    "infinitiv": {
      "de": "geben",
      "lv": "å gi"
    },
    "praesens": {
      "de": "er gibt",
      "lv": "han gir"
    },
    "imperfektIndikativ": {
      "de": "er gab",
      "lv": "han gav"
    },
    "imperfektKonjunktiv": {
      "de": "er gäbe",
      "lv": "han ville gi"
    },
    "partizipVergangenheit": {
      "de": "gegeben",
      "lv": "gitt"
    }
  },
  {
    "infinitiv": {
      "de": "gedeihen",
      "lv": "å trivast"
    },
    "praesens": {
      "de": "er gedeiht",
      "lv": "han trivst"
    },
    "imperfektIndikativ": {
      "de": "er gedieh",
      "lv": "han treivst"
    },
    "imperfektKonjunktiv": {
      "de": "er gediehe",
      "lv": "han ville trivast"
    },
    "partizipVergangenheit": {
      "de": "gediehen (er ist)",
      "lv": "trivest"
    }
  },
  {
    "infinitiv": {
      "de": "gehen",
      "lv": "å gå"
    },
    "praesens": {
      "de": "er geht",
      "lv": "han går"
    },
    "imperfektIndikativ": {
      "de": "er ging",
      "lv": "han gjekk"
    },
    "imperfektKonjunktiv": {
      "de": "er ginge",
      "lv": "han ville gå"
    },
    "partizipVergangenheit": {
      "de": "gegangen (er ist)",
      "lv": "gått"
    }
  },
  {
    "infinitiv": {
      "de": "gewinnen",
      "lv": "å vinne"
    },
    "praesens": {
      "de": "er gewinnt",
      "lv": "han vinn"
    },
    "imperfektIndikativ": {
      "de": "er gewann",
      "lv": "han vann"
    },
    "imperfektKonjunktiv": {
      "de": "er gewönne / er gewänne",
      "lv": "han ville vinne"
    },
    "partizipVergangenheit": {
      "de": "gewonnen",
      "lv": "vunne"
    }
  },
  {
    "infinitiv": {
      "de": "haben",
      "lv": "å ha"
    },
    "praesens": {
      "de": "er hat",
      "lv": "han har"
    },
    "imperfektIndikativ": {
      "de": "er hatte",
      "lv": "han hadde"
    },
    "imperfektKonjunktiv": {
      "de": "er hätte",
      "lv": "han ville ha"
    },
    "partizipVergangenheit": {
      "de": "gehabt",
      "lv": "hatt"
    }
  },
  {
    "infinitiv": {
      "de": "halten",
      "lv": "å halde"
    },
    "praesens": {
      "de": "er hält",
      "lv": "han held"
    },
    "imperfektIndikativ": {
      "de": "er hielt",
      "lv": "han heldt"
    },
    "imperfektKonjunktiv": {
      "de": "er hielte",
      "lv": "han ville halde"
    },
    "partizipVergangenheit": {
      "de": "gehalten",
      "lv": "halde"
    }
  },
  {
    "infinitiv": {
      "de": "heißen",
      "lv": "å kalle / å heite"
    },
    "praesens": {
      "de": "er heißt",
      "lv": "han kallar / heiter"
    },
    "imperfektIndikativ": {
      "de": "er hieß",
      "lv": "han kalla / heitte"
    },
    "imperfektKonjunktiv": {
      "de": "er hieße",
      "lv": "han ville kalle / heite"
    },
    "partizipVergangenheit": {
      "de": "geheißen",
      "lv": "kalla / heitt"
    }
  },
  {
    "infinitiv": {
      "de": "helfen",
      "lv": "å hjelpe"
    },
    "praesens": {
      "de": "er hilft",
      "lv": "han hjelper"
    },
    "imperfektIndikativ": {
      "de": "er half",
      "lv": "han hjelpte"
    },
    "imperfektKonjunktiv": {
      "de": "er hülfe / er hälfe",
      "lv": "han ville hjelpe"
    },
    "partizipVergangenheit": {
      "de": "geholfen",
      "lv": "hjelpt"
    }
  },
  {
    "infinitiv": {
      "de": "kommen",
      "lv": "å kome"
    },
    "praesens": {
      "de": "er kommt",
      "lv": "han kjem"
    },
    "imperfektIndikativ": {
      "de": "er kam",
      "lv": "han kom"
    },
    "imperfektKonjunktiv": {
      "de": "er käme",
      "lv": "han ville kome"
    },
    "partizipVergangenheit": {
      "de": "gekommen (er ist)",
      "lv": "kome"
    }
  },
  {
    "infinitiv": {
      "de": "können",
      "lv": "å kunne"
    },
    "praesens": {
      "de": "er kann",
      "lv": "han kan"
    },
    "imperfektIndikativ": {
      "de": "er konnte",
      "lv": "han kunne"
    },
    "imperfektKonjunktiv": {
      "de": "er könnte",
      "lv": "han kunne"
    },
    "partizipVergangenheit": {
      "de": "gekonnt",
      "lv": "kunna"
    }
  },
  {
    "infinitiv": {
      "de": "kriechen",
      "lv": "å krype"
    },
    "praesens": {
      "de": "er kriecht",
      "lv": "han kryp"
    },
    "imperfektIndikativ": {
      "de": "er kroch",
      "lv": "han kraup"
    },
    "imperfektKonjunktiv": {
      "de": "er kröche",
      "lv": "han ville krype"
    },
    "partizipVergangenheit": {
      "de": "gekrochen (er ist)",
      "lv": "krope"
    }
  },
  {
    "infinitiv": {
      "de": "laden",
      "lv": "å laste / å invitere"
    },
    "praesens": {
      "de": "er lädt",
      "lv": "han lastar / inviterer"
    },
    "imperfektIndikativ": {
      "de": "er lud",
      "lv": "han lasta / inviterte"
    },
    "imperfektKonjunktiv": {
      "de": "er lüde",
      "lv": "han ville laste / invitere"
    },
    "partizipVergangenheit": {
      "de": "geladen",
      "lv": "lasta / invitert"
    }
  },
  {
    "infinitiv": {
      "de": "lassen",
      "lv": "å la"
    },
    "praesens": {
      "de": "er lässt",
      "lv": "han lar"
    },
    "imperfektIndikativ": {
      "de": "er ließ",
      "lv": "han lét"
    },
    "imperfektKonjunktiv": {
      "de": "er ließe",
      "lv": "han ville la"
    },
    "partizipVergangenheit": {
      "de": "gelassen",
      "lv": "latt"
    }
  },
  {
    "infinitiv": {
      "de": "laufen",
      "lv": "å løpe"
    },
    "praesens": {
      "de": "er läuft",
      "lv": "han løper"
    },
    "imperfektIndikativ": {
      "de": "er lief",
      "lv": "han løpte"
    },
    "imperfektKonjunktiv": {
      "de": "er liefe",
      "lv": "han ville løpe"
    },
    "partizipVergangenheit": {
      "de": "gelaufen (er ist)",
      "lv": "løpt"
    }
  },
  {
    "infinitiv": {
      "de": "leiden",
      "lv": "å lide"
    },
    "praesens": {
      "de": "er leidet",
      "lv": "han lid"
    },
    "imperfektIndikativ": {
      "de": "er litt",
      "lv": "han leid"
    },
    "imperfektKonjunktiv": {
      "de": "er litte",
      "lv": "han ville lide"
    },
    "partizipVergangenheit": {
      "de": "gelitten",
      "lv": "lidd"
    }
  },
  {
    "infinitiv": {
      "de": "leihen",
      "lv": "å låne ut / å låne"
    },
    "praesens": {
      "de": "er leiht",
      "lv": "han låner ut / låner"
    },
    "imperfektIndikativ": {
      "de": "er lieh",
      "lv": "han lånte ut / lånte"
    },
    "imperfektKonjunktiv": {
      "de": "er liehe",
      "lv": "han ville låne ut / låne"
    },
    "partizipVergangenheit": {
      "de": "geliehen",
      "lv": "lånt ut / lånt"
    }
  },
  {
    "infinitiv": {
      "de": "lesen",
      "lv": "å lese"
    },
    "praesens": {
      "de": "er liest",
      "lv": "han les"
    },
    "imperfektIndikativ": {
      "de": "er las",
      "lv": "han las"
    },
    "imperfektKonjunktiv": {
      "de": "er läse",
      "lv": "han ville lese"
    },
    "partizipVergangenheit": {
      "de": "gelesen",
      "lv": "lese"
    }
  },
  {
    "infinitiv": {
      "de": "liegen",
      "lv": "å ligge"
    },
    "praesens": {
      "de": "er liegt",
      "lv": "han ligg"
    },
    "imperfektIndikativ": {
      "de": "er lag",
      "lv": "han låg"
    },
    "imperfektKonjunktiv": {
      "de": "er läge",
      "lv": "han ville ligge"
    },
    "partizipVergangenheit": {
      "de": "gelegen",
      "lv": "lege"
    }
  },
  {
    "infinitiv": {
      "de": "lügen",
      "lv": "å lyge"
    },
    "praesens": {
      "de": "er lügt",
      "lv": "han lyg"
    },
    "imperfektIndikativ": {
      "de": "er log",
      "lv": "han laug"
    },
    "imperfektKonjunktiv": {
      "de": "er löge",
      "lv": "han ville lyge"
    },
    "partizipVergangenheit": {
      "de": "gelogen",
      "lv": "loge"
    }
  },
  {
    "infinitiv": {
      "de": "mahlen",
      "lv": "å male"
    },
    "praesens": {
      "de": "er mahlt",
      "lv": "han mel"
    },
    "imperfektIndikativ": {
      "de": "er mahlte",
      "lv": "han mol"
    },
    "imperfektKonjunktiv": {
      "de": "er malte",
      "lv": "han ville male"
    },
    "partizipVergangenheit": {
      "de": "gemahlen",
      "lv": "male"
    }
  },
  {
    "infinitiv": {
      "de": "meiden",
      "lv": "å unngå"
    },
    "praesens": {
      "de": "er meidet",
      "lv": "han unngår"
    },
    "imperfektIndikativ": {
      "de": "er mied",
      "lv": "han unngjekk"
    },
    "imperfektKonjunktiv": {
      "de": "er miede",
      "lv": "han ville unngå"
    },
    "partizipVergangenheit": {
      "de": "gemieden",
      "lv": "unngått"
    }
  },
  {
    "infinitiv": {
      "de": "melken",
      "lv": "å mjølke"
    },
    "praesens": {
      "de": "er milkt / er melkt",
      "lv": "han mjølkar"
    },
    "imperfektIndikativ": {
      "de": "er molk / er melkte",
      "lv": "han mjølka"
    },
    "imperfektKonjunktiv": {
      "de": "er mölke / er melkte",
      "lv": "han ville mjølke"
    },
    "partizipVergangenheit": {
      "de": "gemolken / gemelkt",
      "lv": "mjølka"
    }
  },
  {
    "infinitiv": {
      "de": "messen",
      "lv": "å måle"
    },
    "praesens": {
      "de": "er misst",
      "lv": "han måler"
    },
    "imperfektIndikativ": {
      "de": "er maß",
      "lv": "han målte"
    },
    "imperfektKonjunktiv": {
      "de": "er mäße",
      "lv": "han ville måle"
    },
    "partizipVergangenheit": {
      "de": "gemessen",
      "lv": "målt"
    }
  },
  {
    "infinitiv": {
      "de": "misslingen",
      "lv": "å mislukkast"
    },
    "praesens": {
      "de": "es misslingt",
      "lv": "det mislukkast"
    },
    "imperfektIndikativ": {
      "de": "es misslang",
      "lv": "det mislukkast"
    },
    "imperfektKonjunktiv": {
      "de": "es misslänge",
      "lv": "det ville mislukkast"
    },
    "partizipVergangenheit": {
      "de": "misslungen",
      "lv": "mislukkast"
    }
  },
  {
    "infinitiv": {
      "de": "mögen",
      "lv": "å like"
    },
    "praesens": {
      "de": "er mag",
      "lv": "han liker"
    },
    "imperfektIndikativ": {
      "de": "er mochte",
      "lv": "han likte"
    },
    "imperfektKonjunktiv": {
      "de": "er möchte",
      "lv": "han ville like"
    },
    "partizipVergangenheit": {
      "de": "gemocht",
      "lv": "likt"
    }
  },
  {
    "infinitiv": {
      "de": "müssen",
      "lv": "å måtte"
    },
    "praesens": {
      "de": "er muss",
      "lv": "han må"
    },
    "imperfektIndikativ": {
      "de": "er musste",
      "lv": "han måtte"
    },
    "imperfektKonjunktiv": {
      "de": "er müsste",
      "lv": "han måtte"
    },
    "partizipVergangenheit": {
      "de": "gemusst",
      "lv": "måtta"
    }
  },
  {
    "infinitiv": {
      "de": "nehmen",
      "lv": "å ta"
    },
    "praesens": {
      "de": "er nimmt",
      "lv": "han tek"
    },
    "imperfektIndikativ": {
      "de": "er nahm",
      "lv": "han tok"
    },
    "imperfektKonjunktiv": {
      "de": "er nähme",
      "lv": "han ville ta"
    },
    "partizipVergangenheit": {
      "de": "genommen",
      "lv": "teke"
    }
  },
  {
    "infinitiv": {
      "de": "nennen",
      "lv": "å namngi"
    },
    "praesens": {
      "de": "er nennt",
      "lv": "han namngir"
    },
    "imperfektIndikativ": {
      "de": "er nannte",
      "lv": "han namngav"
    },
    "imperfektKonjunktiv": {
      "de": "er nennte",
      "lv": "han ville namngi"
    },
    "partizipVergangenheit": {
      "de": "genannt",
      "lv": "namngitt"
    }
  },
  {
    "infinitiv": {
      "de": "pfeifen",
      "lv": "å plystre"
    },
    "praesens": {
      "de": "er pfeift",
      "lv": "han plystrar"
    },
    "imperfektIndikativ": {
      "de": "er pfiff",
      "lv": "han plystra"
    },
    "imperfektKonjunktiv": {
      "de": "er pfiffe",
      "lv": "han ville plystre"
    },
    "partizipVergangenheit": {
      "de": "gepfiffen",
      "lv": "plystra"
    }
  },
  {
    "infinitiv": {
      "de": "pflegen",
      "lv": "å stelle"
    },
    "praesens": {
      "de": "er pflegt",
      "lv": "han steller"
    },
    "imperfektIndikativ": {
      "de": "er pflegte / er pflog",
      "lv": "han stelte"
    },
    "imperfektKonjunktiv": {
      "de": "er pflegte / er pflöge",
      "lv": "han ville stelle"
    },
    "partizipVergangenheit": {
      "de": "gepflegt / gepflogen",
      "lv": "stelt"
    }
  },
  {
    "infinitiv": {
      "de": "preisen",
      "lv": "å rose"
    },
    "praesens": {
      "de": "er preist",
      "lv": "han rosar"
    },
    "imperfektIndikativ": {
      "de": "er pries",
      "lv": "han rosa"
    },
    "imperfektKonjunktiv": {
      "de": "er priese",
      "lv": "han ville rose"
    },
    "partizipVergangenheit": {
      "de": "gepriesen",
      "lv": "rosa"
    }
  },
  {
    "infinitiv": {
      "de": "quellen",
      "lv": "å svelle"
    },
    "praesens": {
      "de": "er quillt",
      "lv": "det svell"
    },
    "imperfektIndikativ": {
      "de": "er quoll",
      "lv": "det svall"
    },
    "imperfektKonjunktiv": {
      "de": "er quölle",
      "lv": "det ville svelle"
    },
    "partizipVergangenheit": {
      "de": "gequollen (er ist)",
      "lv": "svolle"
    }
  },
  {
    "infinitiv": {
      "de": "raten",
      "lv": "å råde / å gjette"
    },
    "praesens": {
      "de": "er rät",
      "lv": "han råder / gjettar"
    },
    "imperfektIndikativ": {
      "de": "er riet",
      "lv": "han rådde / gjetta"
    },
    "imperfektKonjunktiv": {
      "de": "er riete",
      "lv": "han ville råde / gjette"
    },
    "partizipVergangenheit": {
      "de": "geraten",
      "lv": "rådd / gjetta"
    }
  },
  {
    "infinitiv": {
      "de": "reiben",
      "lv": "å gni"
    },
    "praesens": {
      "de": "er reibt",
      "lv": "han gnir"
    },
    "imperfektIndikativ": {
      "de": "er rieb",
      "lv": "han gnei"
    },
    "imperfektKonjunktiv": {
      "de": "er riebe",
      "lv": "han ville gni"
    },
    "partizipVergangenheit": {
      "de": "gerieben",
      "lv": "gnide"
    }
  },
  {
    "infinitiv": {
      "de": "reißen",
      "lv": "å rive"
    },
    "praesens": {
      "de": "er reißt",
      "lv": "han riv"
    },
    "imperfektIndikativ": {
      "de": "er riss",
      "lv": "han reiv"
    },
    "imperfektKonjunktiv": {
      "de": "er risse",
      "lv": "han ville rive"
    },
    "partizipVergangenheit": {
      "de": "gerissen",
      "lv": "rive"
    }
  },
  {
    "infinitiv": {
      "de": "reiten",
      "lv": "å ri"
    },
    "praesens": {
      "de": "er reitet",
      "lv": "han rir"
    },
    "imperfektIndikativ": {
      "de": "er ritt",
      "lv": "han rei"
    },
    "imperfektKonjunktiv": {
      "de": "er ritte",
      "lv": "han ville ri"
    },
    "partizipVergangenheit": {
      "de": "geritten (er ist)",
      "lv": "ridd"
    }
  },
  {
    "infinitiv": {
      "de": "rennen",
      "lv": "å springe"
    },
    "praesens": {
      "de": "er rennt",
      "lv": "han spring"
    },
    "imperfektIndikativ": {
      "de": "er rannte",
      "lv": "han sprang"
    },
    "imperfektKonjunktiv": {
      "de": "er rennte",
      "lv": "han ville springe"
    },
    "partizipVergangenheit": {
      "de": "gerannt",
      "lv": "sprunge"
    }
  },
  {
    "infinitiv": {
      "de": "riechen",
      "lv": "å lukte"
    },
    "praesens": {
      "de": "er riecht",
      "lv": "han luktar"
    },
    "imperfektIndikativ": {
      "de": "er roch",
      "lv": "han lukta"
    },
    "imperfektKonjunktiv": {
      "de": "er röche",
      "lv": "han ville lukte"
    },
    "partizipVergangenheit": {
      "de": "gerochen",
      "lv": "lukta"
    }
  },
  {
    "infinitiv": {
      "de": "ringen",
      "lv": "å bryte"
    },
    "praesens": {
      "de": "er ringt",
      "lv": "han bryt"
    },
    "imperfektIndikativ": {
      "de": "er rang",
      "lv": "han braut"
    },
    "imperfektKonjunktiv": {
      "de": "er ränge",
      "lv": "han ville bryte"
    },
    "partizipVergangenheit": {
      "de": "gerungen",
      "lv": "brote"
    }
  },
  {
    "infinitiv": {
      "de": "rinnen",
      "lv": "å renne"
    },
    "praesens": {
      "de": "er rinnt",
      "lv": "det renn"
    },
    "imperfektIndikativ": {
      "de": "er rann",
      "lv": "det rann"
    },
    "imperfektKonjunktiv": {
      "de": "er ränne / er rönne",
      "lv": "det ville renne"
    },
    "partizipVergangenheit": {
      "de": "geronnen (er ist)",
      "lv": "runne"
    }
  },
  {
    "infinitiv": {
      "de": "rufen",
      "lv": "å rope"
    },
    "praesens": {
      "de": "er ruft",
      "lv": "han roper"
    },
    "imperfektIndikativ": {
      "de": "er rief",
      "lv": "han ropte"
    },
    "imperfektKonjunktiv": {
      "de": "er riefe",
      "lv": "han ville rope"
    },
    "partizipVergangenheit": {
      "de": "gerufen",
      "lv": "ropt"
    }
  },
  {
    "infinitiv": {
      "de": "salzen",
      "lv": "å salte"
    },
    "praesens": {
      "de": "er salzt",
      "lv": "han saltar"
    },
    "imperfektIndikativ": {
      "de": "er salzte",
      "lv": "han salta"
    },
    "imperfektKonjunktiv": {
      "de": "er salzte",
      "lv": "han ville salte"
    },
    "partizipVergangenheit": {
      "de": "gesalzen",
      "lv": "salta"
    }
  },
  {
    "infinitiv": {
      "de": "saufen",
      "lv": "å supe / å drikke"
    },
    "praesens": {
      "de": "er säuft",
      "lv": "han supar / drikk"
    },
    "imperfektIndikativ": {
      "de": "er soff",
      "lv": "han supa / drakk"
    },
    "imperfektKonjunktiv": {
      "de": "er söffe",
      "lv": "han ville supe / drikke"
    },
    "partizipVergangenheit": {
      "de": "gesoffen",
      "lv": "supa / drukke"
    }
  },
  {
    "infinitiv": {
      "de": "saugen",
      "lv": "å suge"
    },
    "praesens": {
      "de": "er saugt",
      "lv": "han syg"
    },
    "imperfektIndikativ": {
      "de": "er sog",
      "lv": "han saug"
    },
    "imperfektKonjunktiv": {
      "de": "er söge",
      "lv": "han ville suge"
    },
    "partizipVergangenheit": {
      "de": "gesogen",
      "lv": "soge"
    }
  },
  {
    "infinitiv": {
      "de": "schaffen",
      "lv": "å skape"
    },
    "praesens": {
      "de": "er schafft",
      "lv": "han skaper"
    },
    "imperfektIndikativ": {
      "de": "er schuf",
      "lv": "han skapte"
    },
    "imperfektKonjunktiv": {
      "de": "er schüfe",
      "lv": "han ville skape"
    },
    "partizipVergangenheit": {
      "de": "geschaffen",
      "lv": "skapt"
    }
  },
  {
    "infinitiv": {
      "de": "schallen",
      "lv": "å lyde"
    },
    "praesens": {
      "de": "es schallt",
      "lv": "det lyder"
    },
    "imperfektIndikativ": {
      "de": "es schallte / es scholl",
      "lv": "det lydde"
    },
    "imperfektKonjunktiv": {
      "de": "es schallte / es schölle",
      "lv": "det ville lyde"
    },
    "partizipVergangenheit": {
      "de": "geschallt",
      "lv": "lydd"
    }
  },
  {
    "infinitiv": {
      "de": "scheiden",
      "lv": "å skilje / å skiljast"
    },
    "praesens": {
      "de": "er scheidet",
      "lv": "han skil / skilst"
    },
    "imperfektIndikativ": {
      "de": "er schied",
      "lv": "han skilde / skildest"
    },
    "imperfektKonjunktiv": {
      "de": "er schiede",
      "lv": "han ville skilje / skiljast"
    },
    "partizipVergangenheit": {
      "de": "geschieden (er hat / er ist)",
      "lv": "skilt / skilst"
    }
  },
  {
    "infinitiv": {
      "de": "scheinen",
      "lv": "å skine / å verke"
    },
    "praesens": {
      "de": "er scheint",
      "lv": "han skin / verkar"
    },
    "imperfektIndikativ": {
      "de": "er schien",
      "lv": "han skein / verka"
    },
    "imperfektKonjunktiv": {
      "de": "er schiene",
      "lv": "han ville skine / verke"
    },
    "partizipVergangenheit": {
      "de": "geschienen",
      "lv": "skine / verka"
    }
  },
  {
    "infinitiv": {
      "de": "schelten",
      "lv": "å skjenne"
    },
    "praesens": {
      "de": "er schilt",
      "lv": "han skjenner"
    },
    "imperfektIndikativ": {
      "de": "er schalt",
      "lv": "han skjente"
    },
    "imperfektKonjunktiv": {
      "de": "er schölte / er schälte",
      "lv": "han ville skjenne"
    },
    "partizipVergangenheit": {
      "de": "gescholten",
      "lv": "skjent"
    }
  },
  {
    "infinitiv": {
      "de": "scheren",
      "lv": "å klippe"
    },
    "praesens": {
      "de": "er schert",
      "lv": "han klipper"
    },
    "imperfektIndikativ": {
      "de": "er schor / er scherte",
      "lv": "han klipte"
    },
    "imperfektKonjunktiv": {
      "de": "er schöre / er scherte",
      "lv": "han ville klippe"
    },
    "partizipVergangenheit": {
      "de": "geschoren / geschert",
      "lv": "klipt"
    }
  },
  {
    "infinitiv": {
      "de": "schieben",
      "lv": "å skyve"
    },
    "praesens": {
      "de": "er schiebt",
      "lv": "han skyv"
    },
    "imperfektIndikativ": {
      "de": "er schob",
      "lv": "han skauv"
    },
    "imperfektKonjunktiv": {
      "de": "er schöbe",
      "lv": "han ville skyve"
    },
    "partizipVergangenheit": {
      "de": "geschoben",
      "lv": "skove"
    }
  },
  {
    "infinitiv": {
      "de": "schießen",
      "lv": "å skyte"
    },
    "praesens": {
      "de": "er schießt",
      "lv": "han skyt"
    },
    "imperfektIndikativ": {
      "de": "er schoss",
      "lv": "han skaut"
    },
    "imperfektKonjunktiv": {
      "de": "er schösse",
      "lv": "han ville skyte"
    },
    "partizipVergangenheit": {
      "de": "geschossen",
      "lv": "skote"
    }
  },
  {
    "infinitiv": {
      "de": "schinden",
      "lv": "å plage"
    },
    "praesens": {
      "de": "er schindet",
      "lv": "han plagar"
    },
    "imperfektIndikativ": {
      "de": "er schindete",
      "lv": "han plaga"
    },
    "imperfektKonjunktiv": {
      "de": "er schindete",
      "lv": "han ville plage"
    },
    "partizipVergangenheit": {
      "de": "geschunden",
      "lv": "plaga"
    }
  },
  {
    "infinitiv": {
      "de": "schlafen",
      "lv": "å sove"
    },
    "praesens": {
      "de": "er schläft",
      "lv": "han søv"
    },
    "imperfektIndikativ": {
      "de": "er schlief",
      "lv": "han sov"
    },
    "imperfektKonjunktiv": {
      "de": "er schliefe",
      "lv": "han ville sove"
    },
    "partizipVergangenheit": {
      "de": "geschlafen",
      "lv": "sove"
    }
  },
  {
    "infinitiv": {
      "de": "schlagen",
      "lv": "å slå"
    },
    "praesens": {
      "de": "er schlägt",
      "lv": "han slår"
    },
    "imperfektIndikativ": {
      "de": "er schlug",
      "lv": "han slo"
    },
    "imperfektKonjunktiv": {
      "de": "er schlüge",
      "lv": "han ville slå"
    },
    "partizipVergangenheit": {
      "de": "geschlagen",
      "lv": "slått"
    }
  },
  {
    "infinitiv": {
      "de": "schleichen",
      "lv": "å snike seg"
    },
    "praesens": {
      "de": "er schleicht",
      "lv": "han snik seg"
    },
    "imperfektIndikativ": {
      "de": "er schlich",
      "lv": "han sneik seg"
    },
    "imperfektKonjunktiv": {
      "de": "er schliche",
      "lv": "han ville snike seg"
    },
    "partizipVergangenheit": {
      "de": "geschlichen (er ist)",
      "lv": "snike"
    }
  },
  {
    "infinitiv": {
      "de": "schleifen",
      "lv": "å slipe"
    },
    "praesens": {
      "de": "er schleift",
      "lv": "han sliper"
    },
    "imperfektIndikativ": {
      "de": "er schliff",
      "lv": "han slipte"
    },
    "imperfektKonjunktiv": {
      "de": "er schliffe",
      "lv": "han ville slipe"
    },
    "partizipVergangenheit": {
      "de": "geschliffen",
      "lv": "slipt"
    }
  },
  {
    "infinitiv": {
      "de": "schließen",
      "lv": "å lukke"
    },
    "praesens": {
      "de": "er schließt",
      "lv": "han lukkar"
    },
    "imperfektIndikativ": {
      "de": "er schloss",
      "lv": "han lukka"
    },
    "imperfektKonjunktiv": {
      "de": "er schlösse",
      "lv": "han ville lukke"
    },
    "partizipVergangenheit": {
      "de": "geschlossen",
      "lv": "lukka"
    }
  },
  {
    "infinitiv": {
      "de": "schlingen",
      "lv": "å svelgje"
    },
    "praesens": {
      "de": "er schlingt",
      "lv": "han svelgjer"
    },
    "imperfektIndikativ": {
      "de": "er schlang",
      "lv": "han svelgde"
    },
    "imperfektKonjunktiv": {
      "de": "er schlänge",
      "lv": "han ville svelgje"
    },
    "partizipVergangenheit": {
      "de": "geschlungen",
      "lv": "svelgt"
    }
  },
  {
    "infinitiv": {
      "de": "schmeißen",
      "lv": "å slenge"
    },
    "praesens": {
      "de": "er schmeißt",
      "lv": "han slenger"
    },
    "imperfektIndikativ": {
      "de": "er schmiss",
      "lv": "han slengde"
    },
    "imperfektKonjunktiv": {
      "de": "er schmisse",
      "lv": "han ville slenge"
    },
    "partizipVergangenheit": {
      "de": "geschmissen",
      "lv": "slengt"
    }
  },
  {
    "infinitiv": {
      "de": "schmelzen",
      "lv": "å smelte"
    },
    "praesens": {
      "de": "er schmilzt",
      "lv": "det smeltar"
    },
    "imperfektIndikativ": {
      "de": "er schmolz",
      "lv": "det smelta"
    },
    "imperfektKonjunktiv": {
      "de": "er schmölze",
      "lv": "det ville smelte"
    },
    "partizipVergangenheit": {
      "de": "geschmolzen (er ist)",
      "lv": "smelta"
    }
  },
  {
    "infinitiv": {
      "de": "schnauben",
      "lv": "å fnyse"
    },
    "praesens": {
      "de": "er schnaubt",
      "lv": "han fnyser"
    },
    "imperfektIndikativ": {
      "de": "er schnaubte / er schnob",
      "lv": "han fnyste"
    },
    "imperfektKonjunktiv": {
      "de": "er schnaubte / er schnöbe",
      "lv": "han ville fnyse"
    },
    "partizipVergangenheit": {
      "de": "geschnaubt / geschnoben",
      "lv": "fnyst"
    }
  },
  {
    "infinitiv": {
      "de": "schneiden",
      "lv": "å skjere"
    },
    "praesens": {
      "de": "er schneidet",
      "lv": "han skjer"
    },
    "imperfektIndikativ": {
      "de": "er schnitt",
      "lv": "han skar"
    },
    "imperfektKonjunktiv": {
      "de": "er schnitte",
      "lv": "han ville skjere"
    },
    "partizipVergangenheit": {
      "de": "geschnitten",
      "lv": "skore"
    }
  },
  {
    "infinitiv": {
      "de": "schreiben",
      "lv": "å skrive"
    },
    "praesens": {
      "de": "er schreibt",
      "lv": "han skriv"
    },
    "imperfektIndikativ": {
      "de": "er schrieb",
      "lv": "han skreiv"
    },
    "imperfektKonjunktiv": {
      "de": "er schriebe",
      "lv": "han ville skrive"
    },
    "partizipVergangenheit": {
      "de": "geschrieben",
      "lv": "skrive"
    }
  },
  {
    "infinitiv": {
      "de": "schreien",
      "lv": "å skrike"
    },
    "praesens": {
      "de": "er schreit",
      "lv": "han skrik"
    },
    "imperfektIndikativ": {
      "de": "er schrie",
      "lv": "han skreik"
    },
    "imperfektKonjunktiv": {
      "de": "er schriee",
      "lv": "han ville skrike"
    },
    "partizipVergangenheit": {
      "de": "geschrien",
      "lv": "skrike"
    }
  },
  {
    "infinitiv": {
      "de": "schreiten",
      "lv": "å skride"
    },
    "praesens": {
      "de": "er schreitet",
      "lv": "han skrid"
    },
    "imperfektIndikativ": {
      "de": "er schritt",
      "lv": "han skreid"
    },
    "imperfektKonjunktiv": {
      "de": "er schritte",
      "lv": "han ville skride"
    },
    "partizipVergangenheit": {
      "de": "geschritten (er ist)",
      "lv": "skride"
    }
  },
  {
    "infinitiv": {
      "de": "schweigen",
      "lv": "å teie"
    },
    "praesens": {
      "de": "er schweigt",
      "lv": "han teier"
    },
    "imperfektIndikativ": {
      "de": "er schwieg",
      "lv": "han tagde"
    },
    "imperfektKonjunktiv": {
      "de": "er schwiege",
      "lv": "han ville teie"
    },
    "partizipVergangenheit": {
      "de": "geschwiegen",
      "lv": "tagt"
    }
  },
  {
    "infinitiv": {
      "de": "schwellen",
      "lv": "å svulme"
    },
    "praesens": {
      "de": "er schwillt",
      "lv": "det svulmar"
    },
    "imperfektIndikativ": {
      "de": "er schwoll",
      "lv": "det svulma"
    },
    "imperfektKonjunktiv": {
      "de": "er schwölle",
      "lv": "det ville svulme"
    },
    "partizipVergangenheit": {
      "de": "geschwollen (er ist)",
      "lv": "svulma"
    }
  },
  {
    "infinitiv": {
      "de": "schwimmen",
      "lv": "å symje"
    },
    "praesens": {
      "de": "er schwimmt",
      "lv": "han sym"
    },
    "imperfektIndikativ": {
      "de": "er schwamm",
      "lv": "han sumde"
    },
    "imperfektKonjunktiv": {
      "de": "er schwömme / er schwämme",
      "lv": "han ville symje"
    },
    "partizipVergangenheit": {
      "de": "geschwommen (er ist)",
      "lv": "sumt"
    }
  },
  {
    "infinitiv": {
      "de": "schwinden",
      "lv": "å forsvinne"
    },
    "praesens": {
      "de": "er schwindet",
      "lv": "det forsvinn"
    },
    "imperfektIndikativ": {
      "de": "er schwand",
      "lv": "det forsvann"
    },
    "imperfektKonjunktiv": {
      "de": "er schwände",
      "lv": "det ville forsvinne"
    },
    "partizipVergangenheit": {
      "de": "geschwunden (er ist)",
      "lv": "forsvunne"
    }
  },
  {
    "infinitiv": {
      "de": "schwingen",
      "lv": "å svinge"
    },
    "praesens": {
      "de": "er schwingt",
      "lv": "han svingar"
    },
    "imperfektIndikativ": {
      "de": "er schwang",
      "lv": "han svinga"
    },
    "imperfektKonjunktiv": {
      "de": "er schwänge",
      "lv": "han ville svinge"
    },
    "partizipVergangenheit": {
      "de": "geschwungen",
      "lv": "svinga"
    }
  },
  {
    "infinitiv": {
      "de": "schwören",
      "lv": "å sverje"
    },
    "praesens": {
      "de": "er schwört",
      "lv": "han sver"
    },
    "imperfektIndikativ": {
      "de": "er schwur / er schwor",
      "lv": "han svor"
    },
    "imperfektKonjunktiv": {
      "de": "er schwöre",
      "lv": "han ville sverje"
    },
    "partizipVergangenheit": {
      "de": "geschworen",
      "lv": "svore"
    }
  },
  {
    "infinitiv": {
      "de": "sehen",
      "lv": "å sjå"
    },
    "praesens": {
      "de": "er sieht",
      "lv": "han ser"
    },
    "imperfektIndikativ": {
      "de": "er sah",
      "lv": "han såg"
    },
    "imperfektKonjunktiv": {
      "de": "er sähe",
      "lv": "han ville sjå"
    },
    "partizipVergangenheit": {
      "de": "gesehen",
      "lv": "sett"
    }
  },
  {
    "infinitiv": {
      "de": "sein",
      "lv": "å vere"
    },
    "praesens": {
      "de": "er ist",
      "lv": "han er"
    },
    "imperfektIndikativ": {
      "de": "er war",
      "lv": "han var"
    },
    "imperfektKonjunktiv": {
      "de": "er wäre",
      "lv": "han ville vere"
    },
    "partizipVergangenheit": {
      "de": "gewesen",
      "lv": "vore"
    }
  },
  {
    "infinitiv": {
      "de": "senden",
      "lv": "å sende"
    },
    "praesens": {
      "de": "er sendet",
      "lv": "han sender"
    },
    "imperfektIndikativ": {
      "de": "er sandte / er sendete",
      "lv": "han sende"
    },
    "imperfektKonjunktiv": {
      "de": "er sendete",
      "lv": "han ville sende"
    },
    "partizipVergangenheit": {
      "de": "gesandt / gesendet",
      "lv": "sendt"
    }
  },
  {
    "infinitiv": {
      "de": "sieden",
      "lv": "å koke"
    },
    "praesens": {
      "de": "er siedet",
      "lv": "han koker"
    },
    "imperfektIndikativ": {
      "de": "er sott / er siedete",
      "lv": "han kokte"
    },
    "imperfektKonjunktiv": {
      "de": "er sötte / er siedete",
      "lv": "han ville koke"
    },
    "partizipVergangenheit": {
      "de": "gesotten / gesiedet",
      "lv": "kokt"
    }
  },
  {
    "infinitiv": {
      "de": "singen",
      "lv": "å synge"
    },
    "praesens": {
      "de": "er singt",
      "lv": "han syng"
    },
    "imperfektIndikativ": {
      "de": "er sang",
      "lv": "han song"
    },
    "imperfektKonjunktiv": {
      "de": "er sänge",
      "lv": "han ville synge"
    },
    "partizipVergangenheit": {
      "de": "gesungen",
      "lv": "sunge"
    }
  },
  {
    "infinitiv": {
      "de": "sinken",
      "lv": "å søkke"
    },
    "praesens": {
      "de": "er sinkt",
      "lv": "han søkk"
    },
    "imperfektIndikativ": {
      "de": "er sank",
      "lv": "han sokk"
    },
    "imperfektKonjunktiv": {
      "de": "er sänke",
      "lv": "han ville søkke"
    },
    "partizipVergangenheit": {
      "de": "gesunken (er ist)",
      "lv": "sokke"
    }
  },
  {
    "infinitiv": {
      "de": "sinnen",
      "lv": "å gruble"
    },
    "praesens": {
      "de": "er sinnt",
      "lv": "han grublar"
    },
    "imperfektIndikativ": {
      "de": "er sann",
      "lv": "han grubla"
    },
    "imperfektKonjunktiv": {
      "de": "er sönne / er sänne",
      "lv": "han ville gruble"
    },
    "partizipVergangenheit": {
      "de": "gesonnen",
      "lv": "grubla"
    }
  },
  {
    "infinitiv": {
      "de": "sitzen",
      "lv": "å sitte"
    },
    "praesens": {
      "de": "er sitzt",
      "lv": "han sit"
    },
    "imperfektIndikativ": {
      "de": "er saß",
      "lv": "han sat"
    },
    "imperfektKonjunktiv": {
      "de": "er säße",
      "lv": "han ville sitte"
    },
    "partizipVergangenheit": {
      "de": "gesessen",
      "lv": "sete"
    }
  },
  {
    "infinitiv": {
      "de": "sollen",
      "lv": "å skulle"
    },
    "praesens": {
      "de": "er soll",
      "lv": "han skal"
    },
    "imperfektIndikativ": {
      "de": "er sollte",
      "lv": "han skulle"
    },
    "imperfektKonjunktiv": {
      "de": "er sollte",
      "lv": "han skulle"
    },
    "partizipVergangenheit": {
      "de": "gesollt",
      "lv": "skulla"
    }
  },
  {
    "infinitiv": {
      "de": "speien",
      "lv": "å spytte"
    },
    "praesens": {
      "de": "er speit",
      "lv": "han spyttar"
    },
    "imperfektIndikativ": {
      "de": "er spie",
      "lv": "han spytta"
    },
    "imperfektKonjunktiv": {
      "de": "er spie",
      "lv": "han ville spytte"
    },
    "partizipVergangenheit": {
      "de": "gespien",
      "lv": "spytta"
    }
  },
  {
    "infinitiv": {
      "de": "spinnen",
      "lv": "å spinne"
    },
    "praesens": {
      "de": "er spinnt",
      "lv": "han spinn"
    },
    "imperfektIndikativ": {
      "de": "er spann",
      "lv": "han spann"
    },
    "imperfektKonjunktiv": {
      "de": "er spönne / er spänne",
      "lv": "han ville spinne"
    },
    "partizipVergangenheit": {
      "de": "gesponnen",
      "lv": "spunne"
    }
  },
  {
    "infinitiv": {
      "de": "spleißen",
      "lv": "å forbinde"
    },
    "praesens": {
      "de": "er spleißt",
      "lv": "han forbind"
    },
    "imperfektIndikativ": {
      "de": "er spliss",
      "lv": "han forbatt"
    },
    "imperfektKonjunktiv": {
      "de": "er splisse",
      "lv": "han ville forbinde"
    },
    "partizipVergangenheit": {
      "de": "gesplissen",
      "lv": "forbunde"
    }
  },
  {
    "infinitiv": {
      "de": "sprechen",
      "lv": "å snakke"
    },
    "praesens": {
      "de": "er spricht",
      "lv": "han snakkar"
    },
    "imperfektIndikativ": {
      "de": "er sprach",
      "lv": "han snakka"
    },
    "imperfektKonjunktiv": {
      "de": "er spräche",
      "lv": "han ville snakke"
    },
    "partizipVergangenheit": {
      "de": "gesprochen",
      "lv": "snakka"
    }
  },
  {
    "infinitiv": {
      "de": "sprießen",
      "lv": "å spire"
    },
    "praesens": {
      "de": "er sprießt",
      "lv": "det spirer"
    },
    "imperfektIndikativ": {
      "de": "er spross",
      "lv": "det spirte"
    },
    "imperfektKonjunktiv": {
      "de": "er sprösse",
      "lv": "det ville spire"
    },
    "partizipVergangenheit": {
      "de": "gesprossen (er ist)",
      "lv": "spirt"
    }
  },
  {
    "infinitiv": {
      "de": "springen",
      "lv": "å hoppe"
    },
    "praesens": {
      "de": "er springt",
      "lv": "han hoppar"
    },
    "imperfektIndikativ": {
      "de": "er sprang",
      "lv": "han hoppa"
    },
    "imperfektKonjunktiv": {
      "de": "er spränge",
      "lv": "han ville hoppe"
    },
    "partizipVergangenheit": {
      "de": "gesprungen (er ist)",
      "lv": "hoppa"
    }
  },
  {
    "infinitiv": {
      "de": "stechen",
      "lv": "å stikke"
    },
    "praesens": {
      "de": "er sticht",
      "lv": "han stikk"
    },
    "imperfektIndikativ": {
      "de": "er stach",
      "lv": "han stakk"
    },
    "imperfektKonjunktiv": {
      "de": "er stäche",
      "lv": "han ville stikke"
    },
    "partizipVergangenheit": {
      "de": "gestochen",
      "lv": "stukke"
    }
  },
  {
    "infinitiv": {
      "de": "stecken",
      "lv": "å putte / å stikke"
    },
    "praesens": {
      "de": "er steckt",
      "lv": "han puttar / stikk"
    },
    "imperfektIndikativ": {
      "de": "er stak / er steckte",
      "lv": "han putta / stakk"
    },
    "imperfektKonjunktiv": {
      "de": "er stäke / er steckte",
      "lv": "han ville putte / stikke"
    },
    "partizipVergangenheit": {
      "de": "gesteckt",
      "lv": "putta / stukke"
    }
  },
  {
    "infinitiv": {
      "de": "stehen",
      "lv": "å stå"
    },
    "praesens": {
      "de": "er steht",
      "lv": "han står"
    },
    "imperfektIndikativ": {
      "de": "er stand",
      "lv": "han stod"
    },
    "imperfektKonjunktiv": {
      "de": "er stände / er stünde",
      "lv": "han ville stå"
    },
    "partizipVergangenheit": {
      "de": "gestanden",
      "lv": "stått"
    }
  },
  {
    "infinitiv": {
      "de": "stehlen",
      "lv": "å stele"
    },
    "praesens": {
      "de": "er stiehlt",
      "lv": "han stel"
    },
    "imperfektIndikativ": {
      "de": "er stahl",
      "lv": "han stal"
    },
    "imperfektKonjunktiv": {
      "de": "er stöhle / er stähle",
      "lv": "han ville stele"
    },
    "partizipVergangenheit": {
      "de": "gestohlen",
      "lv": "stole"
    }
  },
  {
    "infinitiv": {
      "de": "steigen",
      "lv": "å stige"
    },
    "praesens": {
      "de": "er steigt",
      "lv": "han stig"
    },
    "imperfektIndikativ": {
      "de": "er stieg",
      "lv": "han steig"
    },
    "imperfektKonjunktiv": {
      "de": "er stiege",
      "lv": "han ville stige"
    },
    "partizipVergangenheit": {
      "de": "gestiegen (er ist)",
      "lv": "stige"
    }
  },
  {
    "infinitiv": {
      "de": "sterben",
      "lv": "å døy"
    },
    "praesens": {
      "de": "er stirbt",
      "lv": "han døyr"
    },
    "imperfektIndikativ": {
      "de": "er starb",
      "lv": "han døydde"
    },
    "imperfektKonjunktiv": {
      "de": "er stürbe",
      "lv": "han ville døy"
    },
    "partizipVergangenheit": {
      "de": "gestorben (er ist)",
      "lv": "døydd"
    }
  },
  {
    "infinitiv": {
      "de": "stinken",
      "lv": "å stinke"
    },
    "praesens": {
      "de": "es stinkt",
      "lv": "det stinkar"
    },
    "imperfektIndikativ": {
      "de": "es stank",
      "lv": "det stinka"
    },
    "imperfektKonjunktiv": {
      "de": "es stänke",
      "lv": "det ville stinke"
    },
    "partizipVergangenheit": {
      "de": "gestunken",
      "lv": "stinka"
    }
  },
  {
    "infinitiv": {
      "de": "stoßen",
      "lv": "å dytte"
    },
    "praesens": {
      "de": "er stößt",
      "lv": "han dyttar"
    },
    "imperfektIndikativ": {
      "de": "er stieß",
      "lv": "han dytta"
    },
    "imperfektKonjunktiv": {
      "de": "er stieße",
      "lv": "han ville dytte"
    },
    "partizipVergangenheit": {
      "de": "gestoßen",
      "lv": "dytta"
    }
  },
  {
    "infinitiv": {
      "de": "streichen",
      "lv": "å måle / å stryke"
    },
    "praesens": {
      "de": "er streicht",
      "lv": "han målar / stryk"
    },
    "imperfektIndikativ": {
      "de": "er strich",
      "lv": "han måla / strauk"
    },
    "imperfektKonjunktiv": {
      "de": "er striche",
      "lv": "han ville måle / stryke"
    },
    "partizipVergangenheit": {
      "de": "gestrichen",
      "lv": "måla / stroke"
    }
  },
  {
    "infinitiv": {
      "de": "streiten",
      "lv": "å krangle"
    },
    "praesens": {
      "de": "er streitet",
      "lv": "han kranglar"
    },
    "imperfektIndikativ": {
      "de": "er stritt",
      "lv": "han krangla"
    },
    "imperfektKonjunktiv": {
      "de": "er stritte",
      "lv": "han ville krangle"
    },
    "partizipVergangenheit": {
      "de": "gestritten",
      "lv": "krangla"
    }
  },
  {
    "infinitiv": {
      "de": "tragen",
      "lv": "å bere"
    },
    "praesens": {
      "de": "er trägt",
      "lv": "han ber"
    },
    "imperfektIndikativ": {
      "de": "er trug",
      "lv": "han bar"
    },
    "imperfektKonjunktiv": {
      "de": "er trüge",
      "lv": "han ville bere"
    },
    "partizipVergangenheit": {
      "de": "getragen",
      "lv": "bore"
    }
  },
  {
    "infinitiv": {
      "de": "treffen",
      "lv": "å møte"
    },
    "praesens": {
      "de": "er trifft",
      "lv": "han møter"
    },
    "imperfektIndikativ": {
      "de": "er traf",
      "lv": "han møtte"
    },
    "imperfektKonjunktiv": {
      "de": "er träfe",
      "lv": "han ville møte"
    },
    "partizipVergangenheit": {
      "de": "getroffen",
      "lv": "møtt"
    }
  },
  {
    "infinitiv": {
      "de": "treiben",
      "lv": "å drive"
    },
    "praesens": {
      "de": "er treibt",
      "lv": "han driv"
    },
    "imperfektIndikativ": {
      "de": "er trieb",
      "lv": "han dreiv"
    },
    "imperfektKonjunktiv": {
      "de": "er triebe",
      "lv": "han ville drive"
    },
    "partizipVergangenheit": {
      "de": "getrieben",
      "lv": "drive"
    }
  },
  {
    "infinitiv": {
      "de": "treten",
      "lv": "å trå / å gå"
    },
    "praesens": {
      "de": "er tritt",
      "lv": "han trår / går"
    },
    "imperfektIndikativ": {
      "de": "er trat",
      "lv": "han trådde / gjekk"
    },
    "imperfektKonjunktiv": {
      "de": "er träte",
      "lv": "han ville trå / gå"
    },
    "partizipVergangenheit": {
      "de": "getreten (er ist)",
      "lv": "trådd / gått"
    }
  },
  {
    "infinitiv": {
      "de": "trinken",
      "lv": "å drikke"
    },
    "praesens": {
      "de": "er trinkt",
      "lv": "han drikk"
    },
    "imperfektIndikativ": {
      "de": "er trank",
      "lv": "han drakk"
    },
    "imperfektKonjunktiv": {
      "de": "er tränke",
      "lv": "han ville drikke"
    },
    "partizipVergangenheit": {
      "de": "getrunken",
      "lv": "drukke"
    }
  },
  {
    "infinitiv": {
      "de": "trügen",
      "lv": "å bedra"
    },
    "praesens": {
      "de": "er trügt",
      "lv": "han bedrar"
    },
    "imperfektIndikativ": {
      "de": "er trog",
      "lv": "han bedrog"
    },
    "imperfektKonjunktiv": {
      "de": "er tröge",
      "lv": "han ville bedra"
    },
    "partizipVergangenheit": {
      "de": "getrogen",
      "lv": "bedratt"
    }
  },
  {
    "infinitiv": {
      "de": "tun",
      "lv": "å gjere"
    },
    "praesens": {
      "de": "er tut",
      "lv": "han gjer"
    },
    "imperfektIndikativ": {
      "de": "er tat",
      "lv": "han gjorde"
    },
    "imperfektKonjunktiv": {
      "de": "er täte",
      "lv": "han ville gjere"
    },
    "partizipVergangenheit": {
      "de": "getan",
      "lv": "gjort"
    }
  },
  {
    "infinitiv": {
      "de": "verderben",
      "lv": "å øydeleggje"
    },
    "praesens": {
      "de": "er verdirbt",
      "lv": "han øydelegg"
    },
    "imperfektIndikativ": {
      "de": "er verdarb",
      "lv": "han øydela"
    },
    "imperfektKonjunktiv": {
      "de": "er verdürbe",
      "lv": "han ville øydeleggje"
    },
    "partizipVergangenheit": {
      "de": "verdorben",
      "lv": "øydelagt"
    }
  },
  {
    "infinitiv": {
      "de": "verdrießen",
      "lv": "å ergre"
    },
    "praesens": {
      "de": "er verdrießt",
      "lv": "han ergrar"
    },
    "imperfektIndikativ": {
      "de": "er verdross",
      "lv": "han ergra"
    },
    "imperfektKonjunktiv": {
      "de": "er verdrösse",
      "lv": "han ville ergre"
    },
    "partizipVergangenheit": {
      "de": "verdrossen",
      "lv": "ergra"
    }
  },
  {
    "infinitiv": {
      "de": "vergessen",
      "lv": "å gløyme"
    },
    "praesens": {
      "de": "er vergisst",
      "lv": "han gløymer"
    },
    "imperfektIndikativ": {
      "de": "er vergaß",
      "lv": "han gløymde"
    },
    "imperfektKonjunktiv": {
      "de": "er vergäße",
      "lv": "han ville gløyme"
    },
    "partizipVergangenheit": {
      "de": "vergessen",
      "lv": "gløymt"
    }
  },
  {
    "infinitiv": {
      "de": "verlieren",
      "lv": "å miste"
    },
    "praesens": {
      "de": "er verliert",
      "lv": "han mistar"
    },
    "imperfektIndikativ": {
      "de": "er verlor",
      "lv": "han mista"
    },
    "imperfektKonjunktiv": {
      "de": "er verlöre",
      "lv": "han ville miste"
    },
    "partizipVergangenheit": {
      "de": "verloren",
      "lv": "mista"
    }
  },
  {
    "infinitiv": {
      "de": "wachsen",
      "lv": "å vekse"
    },
    "praesens": {
      "de": "er wächst",
      "lv": "han veks"
    },
    "imperfektIndikativ": {
      "de": "er wuchs",
      "lv": "han voks"
    },
    "imperfektKonjunktiv": {
      "de": "er wüchse",
      "lv": "han ville vekse"
    },
    "partizipVergangenheit": {
      "de": "gewachsen (er ist)",
      "lv": "vakse"
    }
  },
  {
    "infinitiv": {
      "de": "waschen",
      "lv": "å vaske"
    },
    "praesens": {
      "de": "er wäscht",
      "lv": "han vaskar"
    },
    "imperfektIndikativ": {
      "de": "er wusch",
      "lv": "han vaska"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsche",
      "lv": "han ville vaske"
    },
    "partizipVergangenheit": {
      "de": "gewaschen",
      "lv": "vaska"
    }
  },
  {
    "infinitiv": {
      "de": "weben",
      "lv": "å veve"
    },
    "praesens": {
      "de": "er webt",
      "lv": "han vev"
    },
    "imperfektIndikativ": {
      "de": "er wob / er webte",
      "lv": "han vov"
    },
    "imperfektKonjunktiv": {
      "de": "er wöbe / er webte",
      "lv": "han ville veve"
    },
    "partizipVergangenheit": {
      "de": "gewoben",
      "lv": "vove"
    }
  },
  {
    "infinitiv": {
      "de": "weichen",
      "lv": "å vike"
    },
    "praesens": {
      "de": "er weicht",
      "lv": "han vik"
    },
    "imperfektIndikativ": {
      "de": "er wich",
      "lv": "han veik"
    },
    "imperfektKonjunktiv": {
      "de": "er wiche",
      "lv": "han ville vike"
    },
    "partizipVergangenheit": {
      "de": "gewichen (er ist)",
      "lv": "vike"
    }
  },
  {
    "infinitiv": {
      "de": "weisen",
      "lv": "å vise"
    },
    "praesens": {
      "de": "er weist",
      "lv": "han viser"
    },
    "imperfektIndikativ": {
      "de": "er wies",
      "lv": "han viste"
    },
    "imperfektKonjunktiv": {
      "de": "er wiese",
      "lv": "han ville vise"
    },
    "partizipVergangenheit": {
      "de": "gewiesen",
      "lv": "vist"
    }
  },
  {
    "infinitiv": {
      "de": "wenden",
      "lv": "å dreie / å snu"
    },
    "praesens": {
      "de": "er wendet",
      "lv": "han dreiar / snur"
    },
    "imperfektIndikativ": {
      "de": "er wandte / es wendete",
      "lv": "han dreia / snudde"
    },
    "imperfektKonjunktiv": {
      "de": "er wendete",
      "lv": "han ville dreie / snu"
    },
    "partizipVergangenheit": {
      "de": "gewandt / gewendet",
      "lv": "dreia / snudd"
    }
  },
  {
    "infinitiv": {
      "de": "werben",
      "lv": "å fri"
    },
    "praesens": {
      "de": "er wirbt",
      "lv": "han frir"
    },
    "imperfektIndikativ": {
      "de": "er warb",
      "lv": "han fridde"
    },
    "imperfektKonjunktiv": {
      "de": "er würbe",
      "lv": "han ville fri"
    },
    "partizipVergangenheit": {
      "de": "geworben",
      "lv": "fridd"
    }
  },
  {
    "infinitiv": {
      "de": "werden",
      "lv": "å bli"
    },
    "praesens": {
      "de": "er wird",
      "lv": "han blir"
    },
    "imperfektIndikativ": {
      "de": "er wurde",
      "lv": "han vart"
    },
    "imperfektKonjunktiv": {
      "de": "er würde",
      "lv": "han ville bli"
    },
    "partizipVergangenheit": {
      "de": "geworden",
      "lv": "blitt"
    }
  },
  {
    "infinitiv": {
      "de": "werfen",
      "lv": "å kaste"
    },
    "praesens": {
      "de": "er wirft",
      "lv": "han kastar"
    },
    "imperfektIndikativ": {
      "de": "er warf",
      "lv": "han kasta"
    },
    "imperfektKonjunktiv": {
      "de": "er würfe",
      "lv": "han ville kaste"
    },
    "partizipVergangenheit": {
      "de": "geworfen",
      "lv": "kasta"
    }
  },
  {
    "infinitiv": {
      "de": "wiegen",
      "lv": "å vege"
    },
    "praesens": {
      "de": "er wiegt",
      "lv": "han veg"
    },
    "imperfektIndikativ": {
      "de": "er wog",
      "lv": "han vog"
    },
    "imperfektKonjunktiv": {
      "de": "er wöge",
      "lv": "han ville vege"
    },
    "partizipVergangenheit": {
      "de": "gewogen",
      "lv": "vege"
    }
  },
  {
    "infinitiv": {
      "de": "winden",
      "lv": "å sno"
    },
    "praesens": {
      "de": "er windet",
      "lv": "han snor"
    },
    "imperfektIndikativ": {
      "de": "er wand",
      "lv": "han snodde"
    },
    "imperfektKonjunktiv": {
      "de": "er wände",
      "lv": "han ville sno"
    },
    "partizipVergangenheit": {
      "de": "gewunden",
      "lv": "snodd"
    }
  },
  {
    "infinitiv": {
      "de": "wissen",
      "lv": "å vite"
    },
    "praesens": {
      "de": "er weiß",
      "lv": "han veit"
    },
    "imperfektIndikativ": {
      "de": "er wusste",
      "lv": "han visste"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsste",
      "lv": "han ville vite"
    },
    "partizipVergangenheit": {
      "de": "gewusst",
      "lv": "visst"
    }
  },
  {
    "infinitiv": {
      "de": "wollen",
      "lv": "å vilje"
    },
    "praesens": {
      "de": "er will",
      "lv": "han vil"
    },
    "imperfektIndikativ": {
      "de": "er wollte",
      "lv": "han ville"
    },
    "imperfektKonjunktiv": {
      "de": "er wollte",
      "lv": "han ville"
    },
    "partizipVergangenheit": {
      "de": "gewollt",
      "lv": "vilja"
    }
  },
  {
    "infinitiv": {
      "de": "wringen",
      "lv": "å vri / å presse"
    },
    "praesens": {
      "de": "er wringt",
      "lv": "han vrir / pressar"
    },
    "imperfektIndikativ": {
      "de": "er wrang",
      "lv": "han vrei / pressa"
    },
    "imperfektKonjunktiv": {
      "de": "er wränge",
      "lv": "han ville vri / presse"
    },
    "partizipVergangenheit": {
      "de": "gewrungen",
      "lv": "vride / pressa"
    }
  },
  {
    "infinitiv": {
      "de": "zeihen",
      "lv": "å skulde"
    },
    "praesens": {
      "de": "er zeiht",
      "lv": "han skuldar"
    },
    "imperfektIndikativ": {
      "de": "er zieh",
      "lv": "han skulda"
    },
    "imperfektKonjunktiv": {
      "de": "er ziehe",
      "lv": "han ville skulde"
    },
    "partizipVergangenheit": {
      "de": "geziehen",
      "lv": "skulda"
    }
  },
  {
    "infinitiv": {
      "de": "ziehen",
      "lv": "å trekke"
    },
    "praesens": {
      "de": "er zieht",
      "lv": "han trekker"
    },
    "imperfektIndikativ": {
      "de": "er zog",
      "lv": "han trekte"
    },
    "imperfektKonjunktiv": {
      "de": "er zöge",
      "lv": "han ville trekke"
    },
    "partizipVergangenheit": {
      "de": "gezogen",
      "lv": "trekt"
    }
  },
  {
    "infinitiv": {
      "de": "zwingen",
      "lv": "å tvinge"
    },
    "praesens": {
      "de": "er zwingt",
      "lv": "han tvingar"
    },
    "imperfektIndikativ": {
      "de": "er zwang",
      "lv": "han tvinga"
    },
    "imperfektKonjunktiv": {
      "de": "er zwänge",
      "lv": "han ville tvinge"
    },
    "partizipVergangenheit": {
      "de": "gezwungen",
      "lv": "tvinga"
    }
  },
  {
    "infinitiv": {
      "de": "empfangen",
      "lv": "å motta"
    },
    "praesens": {
      "de": "er empfängt",
      "lv": "han mottar"
    },
    "imperfektIndikativ": {
      "de": "er empfing",
      "lv": "han mottok"
    },
    "imperfektKonjunktiv": {
      "de": "er empfinge",
      "lv": "han ville motta"
    },
    "partizipVergangenheit": {
      "de": "empfangen",
      "lv": "mottatt"
    }
  },
  {
    "infinitiv": {
      "de": "erwägen",
      "lv": "å vurdere"
    },
    "praesens": {
      "de": "er erwägt",
      "lv": "han vurderer"
    },
    "imperfektIndikativ": {
      "de": "er erwog",
      "lv": "han vurderte"
    },
    "imperfektKonjunktiv": {
      "de": "er erwöge",
      "lv": "han ville vurdere"
    },
    "partizipVergangenheit": {
      "de": "erwogen",
      "lv": "vurdert"
    }
  },
  {
    "infinitiv": {
      "de": "fechten",
      "lv": "å kjempe"
    },
    "praesens": {
      "de": "er ficht",
      "lv": "han kjempar"
    },
    "imperfektIndikativ": {
      "de": "er focht",
      "lv": "han kjempa"
    },
    "imperfektKonjunktiv": {
      "de": "er föchte",
      "lv": "han ville kjempe"
    },
    "partizipVergangenheit": {
      "de": "gefochten",
      "lv": "kjempa"
    }
  },
  {
    "infinitiv": {
      "de": "flechten",
      "lv": "å flette"
    },
    "praesens": {
      "de": "er flicht",
      "lv": "han flettar"
    },
    "imperfektIndikativ": {
      "de": "er flocht",
      "lv": "han fletta"
    },
    "imperfektKonjunktiv": {
      "de": "er flöchte",
      "lv": "han ville flette"
    },
    "partizipVergangenheit": {
      "de": "geflochten",
      "lv": "fletta"
    }
  },
  {
    "infinitiv": {
      "de": "hangen",
      "lv": "å henge"
    },
    "praesens": {
      "de": "er hängt",
      "lv": "han heng"
    },
    "imperfektIndikativ": {
      "de": "er hing",
      "lv": "han hang"
    },
    "imperfektKonjunktiv": {
      "de": "er hinge",
      "lv": "han ville henge"
    },
    "partizipVergangenheit": {
      "de": "gehangen",
      "lv": "hange"
    }
  },
  {
    "infinitiv": {
      "de": "spalten",
      "lv": "å kløyve"
    },
    "praesens": {
      "de": "er spaltet",
      "lv": "han kløyver"
    },
    "imperfektIndikativ": {
      "de": "er spaltete",
      "lv": "han kløyvde"
    },
    "imperfektKonjunktiv": {
      "de": "er spaltete",
      "lv": "han ville kløyve"
    },
    "partizipVergangenheit": {
      "de": "gespalten",
      "lv": "kløyvd"
    }
  },
  {
    "infinitiv": {
      "de": "verzeihen",
      "lv": "å tilgi"
    },
    "praesens": {
      "de": "er verzeiht",
      "lv": "han tilgir"
    },
    "imperfektIndikativ": {
      "de": "er verzieh",
      "lv": "han tilgav"
    },
    "imperfektKonjunktiv": {
      "de": "er verziehe",
      "lv": "han ville tilgi"
    },
    "partizipVergangenheit": {
      "de": "verziehen",
      "lv": "tilgitt"
    }
  }
];

window.VERB_ENTRIES = VERB_ENTRIES;

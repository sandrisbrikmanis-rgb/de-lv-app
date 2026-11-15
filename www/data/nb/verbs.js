const VERB_ENTRIES = [
  {
    "infinitiv": {
      "de": "backen",
      "lv": "å bake"
    },
    "praesens": {
      "de": "er bäckt",
      "lv": "han baker"
    },
    "imperfektIndikativ": {
      "de": "er buk",
      "lv": "han bakte"
    },
    "imperfektKonjunktiv": {
      "de": "er büke",
      "lv": "han ville bake"
    },
    "partizipVergangenheit": {
      "de": "gebacken",
      "lv": "bakt"
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
      "lv": "han biter"
    },
    "imperfektIndikativ": {
      "de": "er biss",
      "lv": "han bet"
    },
    "imperfektKonjunktiv": {
      "de": "er bisse",
      "lv": "han ville bite"
    },
    "partizipVergangenheit": {
      "de": "gebissen",
      "lv": "bitt"
    }
  },
  {
    "infinitiv": {
      "de": "bergen",
      "lv": "å redde / å skjule"
    },
    "praesens": {
      "de": "er birgt",
      "lv": "han redder / skjuler"
    },
    "imperfektIndikativ": {
      "de": "er barg",
      "lv": "han reddet / skjulte"
    },
    "imperfektKonjunktiv": {
      "de": "er bürge / er bärge",
      "lv": "han ville redde / skjule"
    },
    "partizipVergangenheit": {
      "de": "geborgen",
      "lv": "reddet / skjult"
    }
  },
  {
    "infinitiv": {
      "de": "bersten",
      "lv": "å sprekke"
    },
    "praesens": {
      "de": "er birst",
      "lv": "det sprekker"
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
      "lv": "sprukket"
    }
  },
  {
    "infinitiv": {
      "de": "bewegen",
      "lv": "å bevege"
    },
    "praesens": {
      "de": "er bewegt",
      "lv": "han beveger"
    },
    "imperfektIndikativ": {
      "de": "er bewog",
      "lv": "han beveget"
    },
    "imperfektKonjunktiv": {
      "de": "er bewöge",
      "lv": "han ville bevege"
    },
    "partizipVergangenheit": {
      "de": "bewogen",
      "lv": "beveget"
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
      "lv": "han bøyde"
    },
    "imperfektKonjunktiv": {
      "de": "er böge",
      "lv": "han ville bøye"
    },
    "partizipVergangenheit": {
      "de": "gebogen",
      "lv": "bøyd"
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
      "lv": "han tilbød"
    },
    "imperfektKonjunktiv": {
      "de": "er böte",
      "lv": "han ville tilby"
    },
    "partizipVergangenheit": {
      "de": "geboten",
      "lv": "tilbudt"
    }
  },
  {
    "infinitiv": {
      "de": "binden",
      "lv": "å binde"
    },
    "praesens": {
      "de": "er bindet",
      "lv": "han binder"
    },
    "imperfektIndikativ": {
      "de": "er band",
      "lv": "han bandt"
    },
    "imperfektKonjunktiv": {
      "de": "er bände",
      "lv": "han ville binde"
    },
    "partizipVergangenheit": {
      "de": "gebunden",
      "lv": "bundet"
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
      "lv": "han ba"
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
      "lv": "han blåser"
    },
    "imperfektIndikativ": {
      "de": "er blies",
      "lv": "han blåste"
    },
    "imperfektKonjunktiv": {
      "de": "er bliese",
      "lv": "han ville blåse"
    },
    "partizipVergangenheit": {
      "de": "geblasen",
      "lv": "blåst"
    }
  },
  {
    "infinitiv": {
      "de": "gären",
      "lv": "å gjære"
    },
    "praesens": {
      "de": "es gärt",
      "lv": "det gjærer"
    },
    "imperfektIndikativ": {
      "de": "es gor / es gärte",
      "lv": "det gjæret"
    },
    "imperfektKonjunktiv": {
      "de": "es göre / es gärte",
      "lv": "det ville gjære"
    },
    "partizipVergangenheit": {
      "de": "gegoren / gegärt",
      "lv": "gjæret"
    }
  },
  {
    "infinitiv": {
      "de": "gebären",
      "lv": "å føde"
    },
    "praesens": {
      "de": "sie gebiert",
      "lv": "hun føder"
    },
    "imperfektIndikativ": {
      "de": "sie gebar",
      "lv": "hun fødte"
    },
    "imperfektKonjunktiv": {
      "de": "sie gebäre",
      "lv": "hun ville føde"
    },
    "partizipVergangenheit": {
      "de": "geboren",
      "lv": "født"
    }
  },
  {
    "infinitiv": {
      "de": "gelingen",
      "lv": "å lykkes"
    },
    "praesens": {
      "de": "es gelingt",
      "lv": "det lykkes"
    },
    "imperfektIndikativ": {
      "de": "es gelang",
      "lv": "det lyktes"
    },
    "imperfektKonjunktiv": {
      "de": "es gelänge",
      "lv": "det ville lykkes"
    },
    "partizipVergangenheit": {
      "de": "gelungen (es ist)",
      "lv": "lykkes"
    }
  },
  {
    "infinitiv": {
      "de": "gelten",
      "lv": "å gjelde / å være gyldig"
    },
    "praesens": {
      "de": "er gilt",
      "lv": "han gjelder / er gyldig"
    },
    "imperfektIndikativ": {
      "de": "er galt",
      "lv": "han gjaldt / var gyldig"
    },
    "imperfektKonjunktiv": {
      "de": "er gölte / es gälte",
      "lv": "han ville gjelde / være gyldig"
    },
    "partizipVergangenheit": {
      "de": "gegolten",
      "lv": "gjeldt / vært gyldig"
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
      "lv": "han ble frisk"
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
      "lv": "han nyter"
    },
    "imperfektIndikativ": {
      "de": "er genoss",
      "lv": "han nøt"
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
      "lv": "å ligne"
    },
    "praesens": {
      "de": "er gleicht",
      "lv": "han ligner"
    },
    "imperfektIndikativ": {
      "de": "er glich",
      "lv": "han lignet"
    },
    "imperfektKonjunktiv": {
      "de": "er gliche",
      "lv": "han ville ligne"
    },
    "partizipVergangenheit": {
      "de": "geglichen",
      "lv": "lignet"
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
      "lv": "han gled"
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
      "lv": "det glødet"
    },
    "imperfektKonjunktiv": {
      "de": "er glimmte",
      "lv": "det ville gløde"
    },
    "partizipVergangenheit": {
      "de": "geglimmt / geglommen",
      "lv": "glødet"
    }
  },
  {
    "infinitiv": {
      "de": "graben",
      "lv": "å grave"
    },
    "praesens": {
      "de": "er gräbt",
      "lv": "han graver"
    },
    "imperfektIndikativ": {
      "de": "er grub",
      "lv": "han gravde"
    },
    "imperfektKonjunktiv": {
      "de": "er grübe",
      "lv": "han ville grave"
    },
    "partizipVergangenheit": {
      "de": "gegraben",
      "lv": "gravd"
    }
  },
  {
    "infinitiv": {
      "de": "greifen",
      "lv": "å gripe"
    },
    "praesens": {
      "de": "er greift",
      "lv": "han griper"
    },
    "imperfektIndikativ": {
      "de": "er griff",
      "lv": "han grep"
    },
    "imperfektKonjunktiv": {
      "de": "er griffe",
      "lv": "han ville gripe"
    },
    "partizipVergangenheit": {
      "de": "gegriffen",
      "lv": "grepet"
    }
  },
  {
    "infinitiv": {
      "de": "hauen",
      "lv": "å hogge"
    },
    "praesens": {
      "de": "er haut",
      "lv": "han hogger"
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
      "lv": "hogd"
    }
  },
  {
    "infinitiv": {
      "de": "heben",
      "lv": "å løfte"
    },
    "praesens": {
      "de": "er hebt",
      "lv": "han løfter"
    },
    "imperfektIndikativ": {
      "de": "er hob",
      "lv": "han løftet"
    },
    "imperfektKonjunktiv": {
      "de": "er höbe",
      "lv": "han ville løfte"
    },
    "partizipVergangenheit": {
      "de": "gehoben",
      "lv": "løftet"
    }
  },
  {
    "infinitiv": {
      "de": "kennen",
      "lv": "å kjenne / å vite"
    },
    "praesens": {
      "de": "er kennt",
      "lv": "han kjenner / vet"
    },
    "imperfektIndikativ": {
      "de": "kannte",
      "lv": "han kjente / visste"
    },
    "imperfektKonjunktiv": {
      "de": "kannte",
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
      "lv": "det klinger"
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
      "lv": "klinget"
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
      "lv": "han kløp"
    },
    "imperfektKonjunktiv": {
      "de": "er kniffe",
      "lv": "han ville klype"
    },
    "partizipVergangenheit": {
      "de": "gekniffen",
      "lv": "kløpet"
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
      "lv": "han ble"
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
      "lv": "å blekne"
    },
    "praesens": {
      "de": "er bleicht",
      "lv": "det blekner"
    },
    "imperfektIndikativ": {
      "de": "blich",
      "lv": "det bleknet"
    },
    "imperfektKonjunktiv": {
      "de": "blich",
      "lv": "det ville blekne"
    },
    "partizipVergangenheit": {
      "de": "geblichen",
      "lv": "bleknet"
    }
  },
  {
    "infinitiv": {
      "de": "braten",
      "lv": "å steke"
    },
    "praesens": {
      "de": "er brät",
      "lv": "han steker"
    },
    "imperfektIndikativ": {
      "de": "er briet",
      "lv": "han stekte"
    },
    "imperfektKonjunktiv": {
      "de": "er briete",
      "lv": "han ville steke"
    },
    "partizipVergangenheit": {
      "de": "gebraten",
      "lv": "stekt"
    }
  },
  {
    "infinitiv": {
      "de": "brechen",
      "lv": "å brekke"
    },
    "praesens": {
      "de": "er bricht",
      "lv": "han brekker"
    },
    "imperfektIndikativ": {
      "de": "er brach",
      "lv": "han brakk"
    },
    "imperfektKonjunktiv": {
      "de": "er bräche",
      "lv": "han ville brekke"
    },
    "partizipVergangenheit": {
      "de": "gebrochen",
      "lv": "brukket"
    }
  },
  {
    "infinitiv": {
      "de": "brennen",
      "lv": "å brenne"
    },
    "praesens": {
      "de": "er brennt",
      "lv": "det brenner"
    },
    "imperfektIndikativ": {
      "de": "brannte",
      "lv": "det brant"
    },
    "imperfektKonjunktiv": {
      "de": "brannte",
      "lv": "det ville brenne"
    },
    "partizipVergangenheit": {
      "de": "gebrannt",
      "lv": "brent"
    }
  },
  {
    "infinitiv": {
      "de": "bringen",
      "lv": "å bringe"
    },
    "praesens": {
      "de": "er bringt",
      "lv": "han bringer"
    },
    "imperfektIndikativ": {
      "de": "er brachte",
      "lv": "han brakte"
    },
    "imperfektKonjunktiv": {
      "de": "er brächte",
      "lv": "han ville bringe"
    },
    "partizipVergangenheit": {
      "de": "gebracht",
      "lv": "brakt"
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
      "lv": "å hyre / å bli enig"
    },
    "praesens": {
      "de": "er dingt",
      "lv": "han hyrer / blir enig"
    },
    "imperfektIndikativ": {
      "de": "dingte",
      "lv": "han hyret / ble enig"
    },
    "imperfektKonjunktiv": {
      "de": "dingte",
      "lv": "han ville hyre / bli enig"
    },
    "partizipVergangenheit": {
      "de": "gedungen",
      "lv": "hyret / blitt enig"
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
      "lv": "han tresket"
    },
    "imperfektKonjunktiv": {
      "de": "er dräsche / er drösche",
      "lv": "han ville treske"
    },
    "partizipVergangenheit": {
      "de": "gedroschen",
      "lv": "tresket"
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
      "lv": "han trengte inn"
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
      "lv": "å synes"
    },
    "praesens": {
      "de": "es dünkt",
      "lv": "det synes"
    },
    "imperfektIndikativ": {
      "de": "deuchte",
      "lv": "det syntes"
    },
    "imperfektKonjunktiv": {
      "de": "deuchte",
      "lv": "det ville synes"
    },
    "partizipVergangenheit": {
      "de": "gedünkt",
      "lv": "syntes"
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
      "de": "durfte",
      "lv": "han fikk lov"
    },
    "imperfektKonjunktiv": {
      "de": "durfte",
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
      "lv": "å slukne"
    },
    "praesens": {
      "de": "er erlischt",
      "lv": "det slukner"
    },
    "imperfektIndikativ": {
      "de": "er erlosch",
      "lv": "det sluknet"
    },
    "imperfektKonjunktiv": {
      "de": "er erlösche",
      "lv": "det ville slukne"
    },
    "partizipVergangenheit": {
      "de": "erloschen (er ist)",
      "lv": "sluknet"
    }
  },
  {
    "infinitiv": {
      "de": "erschrecken",
      "lv": "å bli skremt"
    },
    "praesens": {
      "de": "er erschrickt",
      "lv": "han blir skremt"
    },
    "imperfektIndikativ": {
      "de": "er erschrak",
      "lv": "han ble skremt"
    },
    "imperfektKonjunktiv": {
      "de": "er erschräke",
      "lv": "han ville bli skremt"
    },
    "partizipVergangenheit": {
      "de": "erschrocken (er ist)",
      "lv": "blitt skremt"
    }
  },
  {
    "infinitiv": {
      "de": "essen",
      "lv": "å spise"
    },
    "praesens": {
      "de": "er isst",
      "lv": "han spiser"
    },
    "imperfektIndikativ": {
      "de": "er ass",
      "lv": "han spiste"
    },
    "imperfektKonjunktiv": {
      "de": "er äße",
      "lv": "han ville spise"
    },
    "partizipVergangenheit": {
      "de": "gegessen",
      "lv": "spist"
    }
  },
  {
    "infinitiv": {
      "de": "fahren",
      "lv": "å kjøre"
    },
    "praesens": {
      "de": "er fährt",
      "lv": "han kjører"
    },
    "imperfektIndikativ": {
      "de": "er fuhr",
      "lv": "han kjørte"
    },
    "imperfektKonjunktiv": {
      "de": "er führe",
      "lv": "han ville kjøre"
    },
    "partizipVergangenheit": {
      "de": "gefahren (er ist)",
      "lv": "kjørt"
    }
  },
  {
    "infinitiv": {
      "de": "fallen",
      "lv": "å falle"
    },
    "praesens": {
      "de": "er fällt",
      "lv": "han faller"
    },
    "imperfektIndikativ": {
      "de": "er fiel",
      "lv": "han falt"
    },
    "imperfektKonjunktiv": {
      "de": "er fiele",
      "lv": "han ville falle"
    },
    "partizipVergangenheit": {
      "de": "gefallen (er ist)",
      "lv": "falt"
    }
  },
  {
    "infinitiv": {
      "de": "fangen",
      "lv": "å fange"
    },
    "praesens": {
      "de": "er fängt",
      "lv": "han fanger"
    },
    "imperfektIndikativ": {
      "de": "er fing",
      "lv": "han fanget"
    },
    "imperfektKonjunktiv": {
      "de": "er finge",
      "lv": "han ville fange"
    },
    "partizipVergangenheit": {
      "de": "gefangen",
      "lv": "fanget"
    }
  },
  {
    "infinitiv": {
      "de": "finden",
      "lv": "å finne"
    },
    "praesens": {
      "de": "er findet",
      "lv": "han finner"
    },
    "imperfektIndikativ": {
      "de": "er fand",
      "lv": "han fant"
    },
    "imperfektKonjunktiv": {
      "de": "er fände",
      "lv": "han ville finne"
    },
    "partizipVergangenheit": {
      "de": "gefunden",
      "lv": "funnet"
    }
  },
  {
    "infinitiv": {
      "de": "fliegen",
      "lv": "å fly"
    },
    "praesens": {
      "de": "er fliegt",
      "lv": "han flyr"
    },
    "imperfektIndikativ": {
      "de": "er flog",
      "lv": "han fløy"
    },
    "imperfektKonjunktiv": {
      "de": "er flöge",
      "lv": "han ville fly"
    },
    "partizipVergangenheit": {
      "de": "geflogen (er ist)",
      "lv": "fløyet"
    }
  },
  {
    "infinitiv": {
      "de": "fliehen",
      "lv": "å flykte"
    },
    "praesens": {
      "de": "er flieht",
      "lv": "han flykter"
    },
    "imperfektIndikativ": {
      "de": "er floh",
      "lv": "han flyktet"
    },
    "imperfektKonjunktiv": {
      "de": "er flöhe",
      "lv": "han ville flykte"
    },
    "partizipVergangenheit": {
      "de": "geflohen (er ist)",
      "lv": "flyktet"
    }
  },
  {
    "infinitiv": {
      "de": "fließen",
      "lv": "å flyte"
    },
    "praesens": {
      "de": "er fließt",
      "lv": "det flyter"
    },
    "imperfektIndikativ": {
      "de": "er floss",
      "lv": "det fløt"
    },
    "imperfektKonjunktiv": {
      "de": "er flösse",
      "lv": "det ville flyte"
    },
    "partizipVergangenheit": {
      "de": "geflossen (er ist)",
      "lv": "flytt"
    }
  },
  {
    "infinitiv": {
      "de": "fressen",
      "lv": "å ete / å sluke"
    },
    "praesens": {
      "de": "er frisst",
      "lv": "han eter / sluker"
    },
    "imperfektIndikativ": {
      "de": "er frass",
      "lv": "han åt / slukte"
    },
    "imperfektKonjunktiv": {
      "de": "er fräße",
      "lv": "han ville ete / sluke"
    },
    "partizipVergangenheit": {
      "de": "gefressen",
      "lv": "ett / slukt"
    }
  },
  {
    "infinitiv": {
      "de": "frieren",
      "lv": "å fryse"
    },
    "praesens": {
      "de": "er friert",
      "lv": "han fryser"
    },
    "imperfektIndikativ": {
      "de": "er fror",
      "lv": "han frøs"
    },
    "imperfektKonjunktiv": {
      "de": "er fröre",
      "lv": "han ville fryse"
    },
    "partizipVergangenheit": {
      "de": "gefroren",
      "lv": "frosset"
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
      "lv": "han ga"
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
      "lv": "å trives"
    },
    "praesens": {
      "de": "er gedeiht",
      "lv": "han trives"
    },
    "imperfektIndikativ": {
      "de": "er gedieh",
      "lv": "han trivdes"
    },
    "imperfektKonjunktiv": {
      "de": "er gediehe",
      "lv": "han ville trives"
    },
    "partizipVergangenheit": {
      "de": "gediehen (er ist)",
      "lv": "trivdes"
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
      "lv": "han gikk"
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
      "lv": "han vinner"
    },
    "imperfektIndikativ": {
      "de": "er gewann",
      "lv": "han vant"
    },
    "imperfektKonjunktiv": {
      "de": "er gewönne / er gewänne",
      "lv": "han ville vinne"
    },
    "partizipVergangenheit": {
      "de": "gewonnen",
      "lv": "vunnet"
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
      "de": "hatte",
      "lv": "han hadde"
    },
    "imperfektKonjunktiv": {
      "de": "hatte",
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
      "lv": "å holde"
    },
    "praesens": {
      "de": "er hält",
      "lv": "han holder"
    },
    "imperfektIndikativ": {
      "de": "er hielt",
      "lv": "han holdt"
    },
    "imperfektKonjunktiv": {
      "de": "er hielte",
      "lv": "han ville holde"
    },
    "partizipVergangenheit": {
      "de": "gehalten",
      "lv": "holdt"
    }
  },
  {
    "infinitiv": {
      "de": "heißen",
      "lv": "å kalle / å hete"
    },
    "praesens": {
      "de": "er heißt",
      "lv": "han kaller / heter"
    },
    "imperfektIndikativ": {
      "de": "er hieß",
      "lv": "han kalte / het"
    },
    "imperfektKonjunktiv": {
      "de": "er hieße",
      "lv": "han ville kalle / hete"
    },
    "partizipVergangenheit": {
      "de": "geheißen",
      "lv": "kalt / hett"
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
      "lv": "han hjalp"
    },
    "imperfektKonjunktiv": {
      "de": "er hülfe / er hälfe",
      "lv": "han ville hjelpe"
    },
    "partizipVergangenheit": {
      "de": "geholfen",
      "lv": "hjulpet"
    }
  },
  {
    "infinitiv": {
      "de": "kommen",
      "lv": "å komme"
    },
    "praesens": {
      "de": "er kommt",
      "lv": "han kommer"
    },
    "imperfektIndikativ": {
      "de": "er kam",
      "lv": "han kom"
    },
    "imperfektKonjunktiv": {
      "de": "er käme",
      "lv": "han ville komme"
    },
    "partizipVergangenheit": {
      "de": "gekommen (er ist)",
      "lv": "kommet"
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
      "de": "konnte",
      "lv": "han kunne"
    },
    "imperfektKonjunktiv": {
      "de": "konnte",
      "lv": "han kunne"
    },
    "partizipVergangenheit": {
      "de": "gekonnt",
      "lv": "kunnet"
    }
  },
  {
    "infinitiv": {
      "de": "kriechen",
      "lv": "å krype"
    },
    "praesens": {
      "de": "er kriecht",
      "lv": "han kryper"
    },
    "imperfektIndikativ": {
      "de": "er kroch",
      "lv": "han krøp"
    },
    "imperfektKonjunktiv": {
      "de": "er kröche",
      "lv": "han ville krype"
    },
    "partizipVergangenheit": {
      "de": "gekrochen (er ist)",
      "lv": "krøpet"
    }
  },
  {
    "infinitiv": {
      "de": "laden",
      "lv": "å laste / å invitere"
    },
    "praesens": {
      "de": "er lädt",
      "lv": "han laster / inviterer"
    },
    "imperfektIndikativ": {
      "de": "er lud",
      "lv": "han lastet / inviterte"
    },
    "imperfektKonjunktiv": {
      "de": "er lüde",
      "lv": "han ville laste / invitere"
    },
    "partizipVergangenheit": {
      "de": "geladen",
      "lv": "lastet / invitert"
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
      "lv": "han lot"
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
      "lv": "han løp"
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
      "lv": "han lider"
    },
    "imperfektIndikativ": {
      "de": "er litt",
      "lv": "han led"
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
      "lv": "han leser"
    },
    "imperfektIndikativ": {
      "de": "er las",
      "lv": "han leste"
    },
    "imperfektKonjunktiv": {
      "de": "er läse",
      "lv": "han ville lese"
    },
    "partizipVergangenheit": {
      "de": "gelesen",
      "lv": "lest"
    }
  },
  {
    "infinitiv": {
      "de": "liegen",
      "lv": "å ligge"
    },
    "praesens": {
      "de": "er liegt",
      "lv": "han ligger"
    },
    "imperfektIndikativ": {
      "de": "er lag",
      "lv": "han lå"
    },
    "imperfektKonjunktiv": {
      "de": "er läge",
      "lv": "han ville ligge"
    },
    "partizipVergangenheit": {
      "de": "gelegen",
      "lv": "ligget"
    }
  },
  {
    "infinitiv": {
      "de": "lügen",
      "lv": "å lyve"
    },
    "praesens": {
      "de": "er lügt",
      "lv": "han lyver"
    },
    "imperfektIndikativ": {
      "de": "er log",
      "lv": "han løy"
    },
    "imperfektKonjunktiv": {
      "de": "er löge",
      "lv": "han ville lyve"
    },
    "partizipVergangenheit": {
      "de": "gelogen",
      "lv": "løyet"
    }
  },
  {
    "infinitiv": {
      "de": "mahlen",
      "lv": "å male"
    },
    "praesens": {
      "de": "er mahlt",
      "lv": "han maler"
    },
    "imperfektIndikativ": {
      "de": "er mahlte",
      "lv": "han malte"
    },
    "imperfektKonjunktiv": {
      "de": "er malte",
      "lv": "han ville male"
    },
    "partizipVergangenheit": {
      "de": "gemahlen",
      "lv": "malt"
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
      "lv": "han unngikk"
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
      "lv": "å melke"
    },
    "praesens": {
      "de": "er milkt / er melkt",
      "lv": "han melker"
    },
    "imperfektIndikativ": {
      "de": "er molk / er melkte",
      "lv": "han melket"
    },
    "imperfektKonjunktiv": {
      "de": "er mölke / er melkte",
      "lv": "han ville melke"
    },
    "partizipVergangenheit": {
      "de": "gemolken / gemelkt",
      "lv": "melket"
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
      "de": "er mass",
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
      "lv": "å mislykkes"
    },
    "praesens": {
      "de": "es misslingt",
      "lv": "det mislykkes"
    },
    "imperfektIndikativ": {
      "de": "misslang",
      "lv": "det mislyktes"
    },
    "imperfektKonjunktiv": {
      "de": "misslang",
      "lv": "det ville mislykkes"
    },
    "partizipVergangenheit": {
      "de": "misslungen",
      "lv": "mislyktes"
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
      "de": "mochte",
      "lv": "han likte"
    },
    "imperfektKonjunktiv": {
      "de": "mochte",
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
      "de": "musste",
      "lv": "han måtte"
    },
    "imperfektKonjunktiv": {
      "de": "musste",
      "lv": "han måtte"
    },
    "partizipVergangenheit": {
      "de": "gemusst",
      "lv": "måttet"
    }
  },
  {
    "infinitiv": {
      "de": "nehmen",
      "lv": "å ta"
    },
    "praesens": {
      "de": "er nimmt",
      "lv": "han tar"
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
      "lv": "tatt"
    }
  },
  {
    "infinitiv": {
      "de": "nennen",
      "lv": "å navngi"
    },
    "praesens": {
      "de": "er nennt",
      "lv": "han navngir"
    },
    "imperfektIndikativ": {
      "de": "er nannte",
      "lv": "han navnga"
    },
    "imperfektKonjunktiv": {
      "de": "er nennte",
      "lv": "han ville navngi"
    },
    "partizipVergangenheit": {
      "de": "genannt",
      "lv": "navngitt"
    }
  },
  {
    "infinitiv": {
      "de": "pfeifen",
      "lv": "å plystre"
    },
    "praesens": {
      "de": "er pfeift",
      "lv": "han plystrer"
    },
    "imperfektIndikativ": {
      "de": "er pfiff",
      "lv": "han plystret"
    },
    "imperfektKonjunktiv": {
      "de": "er pfiffe",
      "lv": "han ville plystre"
    },
    "partizipVergangenheit": {
      "de": "gepfiffen",
      "lv": "plystret"
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
      "de": "pflegte / pflog",
      "lv": "han stelte"
    },
    "imperfektKonjunktiv": {
      "de": "pflegte / pflog",
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
      "lv": "han roser"
    },
    "imperfektIndikativ": {
      "de": "er pries",
      "lv": "han roste"
    },
    "imperfektKonjunktiv": {
      "de": "er priese",
      "lv": "han ville rose"
    },
    "partizipVergangenheit": {
      "de": "gepriesen",
      "lv": "rost"
    }
  },
  {
    "infinitiv": {
      "de": "quellen",
      "lv": "å svelle"
    },
    "praesens": {
      "de": "er quillt",
      "lv": "det sveller"
    },
    "imperfektIndikativ": {
      "de": "er quoll",
      "lv": "det svellet"
    },
    "imperfektKonjunktiv": {
      "de": "er quölle",
      "lv": "det ville svelle"
    },
    "partizipVergangenheit": {
      "de": "gequollen (er ist)",
      "lv": "svellet"
    }
  },
  {
    "infinitiv": {
      "de": "raten",
      "lv": "å råde / å gjette"
    },
    "praesens": {
      "de": "er rät",
      "lv": "han råder / gjetter"
    },
    "imperfektIndikativ": {
      "de": "er riet",
      "lv": "han rådet / gjettet"
    },
    "imperfektKonjunktiv": {
      "de": "er riete",
      "lv": "han ville råde / gjette"
    },
    "partizipVergangenheit": {
      "de": "geraten",
      "lv": "rådet / gjettet"
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
      "lv": "han gned"
    },
    "imperfektKonjunktiv": {
      "de": "er riebe",
      "lv": "han ville gni"
    },
    "partizipVergangenheit": {
      "de": "gerieben",
      "lv": "gnidd"
    }
  },
  {
    "infinitiv": {
      "de": "reißen",
      "lv": "å rive"
    },
    "praesens": {
      "de": "er reißt",
      "lv": "han river"
    },
    "imperfektIndikativ": {
      "de": "er riss",
      "lv": "han rev"
    },
    "imperfektKonjunktiv": {
      "de": "er risse",
      "lv": "han ville rive"
    },
    "partizipVergangenheit": {
      "de": "gerissen",
      "lv": "revet"
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
      "lv": "han red"
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
      "lv": "han springer"
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
      "lv": "sprunget"
    }
  },
  {
    "infinitiv": {
      "de": "riechen",
      "lv": "å lukte"
    },
    "praesens": {
      "de": "er riecht",
      "lv": "han lukter"
    },
    "imperfektIndikativ": {
      "de": "er roch",
      "lv": "han luktet"
    },
    "imperfektKonjunktiv": {
      "de": "er röche",
      "lv": "han ville lukte"
    },
    "partizipVergangenheit": {
      "de": "gerochen",
      "lv": "luktet"
    }
  },
  {
    "infinitiv": {
      "de": "ringen",
      "lv": "å bryte"
    },
    "praesens": {
      "de": "er ringt",
      "lv": "han bryter"
    },
    "imperfektIndikativ": {
      "de": "er rang",
      "lv": "han brøt"
    },
    "imperfektKonjunktiv": {
      "de": "er ränge",
      "lv": "han ville bryte"
    },
    "partizipVergangenheit": {
      "de": "gerungen",
      "lv": "brutt"
    }
  },
  {
    "infinitiv": {
      "de": "rinnen",
      "lv": "å renne"
    },
    "praesens": {
      "de": "er rinnt",
      "lv": "det renner"
    },
    "imperfektIndikativ": {
      "de": "er rann",
      "lv": "det rant"
    },
    "imperfektKonjunktiv": {
      "de": "er ränne / er rönne",
      "lv": "det ville renne"
    },
    "partizipVergangenheit": {
      "de": "geronnen (er ist)",
      "lv": "rent"
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
      "lv": "han salter"
    },
    "imperfektIndikativ": {
      "de": "er salzte",
      "lv": "han saltet"
    },
    "imperfektKonjunktiv": {
      "de": "er salzte",
      "lv": "han ville salte"
    },
    "partizipVergangenheit": {
      "de": "gesalzen",
      "lv": "saltet"
    }
  },
  {
    "infinitiv": {
      "de": "saufen",
      "lv": "å supe / å drikke"
    },
    "praesens": {
      "de": "er säuft",
      "lv": "han super / drikker"
    },
    "imperfektIndikativ": {
      "de": "er soff",
      "lv": "han supte / drakk"
    },
    "imperfektKonjunktiv": {
      "de": "er söffe",
      "lv": "han ville supe / drikke"
    },
    "partizipVergangenheit": {
      "de": "gesoffen",
      "lv": "supt / drukket"
    }
  },
  {
    "infinitiv": {
      "de": "saugen",
      "lv": "å suge"
    },
    "praesens": {
      "de": "er saugt",
      "lv": "han suger"
    },
    "imperfektIndikativ": {
      "de": "er sog",
      "lv": "han sugde"
    },
    "imperfektKonjunktiv": {
      "de": "er söge",
      "lv": "han ville suge"
    },
    "partizipVergangenheit": {
      "de": "gesogen",
      "lv": "sugd"
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
      "de": "schallte / scholl",
      "lv": "det lød"
    },
    "imperfektKonjunktiv": {
      "de": "schallte / scholl",
      "lv": "det ville lyde"
    },
    "partizipVergangenheit": {
      "de": "geschallt",
      "lv": "lydt"
    }
  },
  {
    "infinitiv": {
      "de": "scheiden",
      "lv": "å skille / å skilles"
    },
    "praesens": {
      "de": "er scheidet",
      "lv": "han skiller / skilles"
    },
    "imperfektIndikativ": {
      "de": "er schied",
      "lv": "han skilte / skiltes"
    },
    "imperfektKonjunktiv": {
      "de": "er schiede",
      "lv": "han ville skille / skilles"
    },
    "partizipVergangenheit": {
      "de": "geschieden (er hat / er ist)",
      "lv": "skilt / skiltes"
    }
  },
  {
    "infinitiv": {
      "de": "scheinen",
      "lv": "å skinne / å virke"
    },
    "praesens": {
      "de": "er scheint",
      "lv": "han skinner / virker"
    },
    "imperfektIndikativ": {
      "de": "er schien",
      "lv": "han skinte / virket"
    },
    "imperfektKonjunktiv": {
      "de": "er schiene",
      "lv": "han ville skinne / virke"
    },
    "partizipVergangenheit": {
      "de": "geschienen",
      "lv": "skint / virket"
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
      "de": "schor / scherte",
      "lv": "han klippet"
    },
    "imperfektKonjunktiv": {
      "de": "schor / scherte",
      "lv": "han ville klippe"
    },
    "partizipVergangenheit": {
      "de": "geschoren / geschert",
      "lv": "klippet"
    }
  },
  {
    "infinitiv": {
      "de": "schieben",
      "lv": "å skyve"
    },
    "praesens": {
      "de": "er schiebt",
      "lv": "han skyver"
    },
    "imperfektIndikativ": {
      "de": "er schob",
      "lv": "han skjøv"
    },
    "imperfektKonjunktiv": {
      "de": "er schöbe",
      "lv": "han ville skyve"
    },
    "partizipVergangenheit": {
      "de": "geschoben",
      "lv": "skjøvet"
    }
  },
  {
    "infinitiv": {
      "de": "schießen",
      "lv": "å skyte"
    },
    "praesens": {
      "de": "er schießt",
      "lv": "han skyter"
    },
    "imperfektIndikativ": {
      "de": "er schoss",
      "lv": "han skjøt"
    },
    "imperfektKonjunktiv": {
      "de": "er schösse",
      "lv": "han ville skyte"
    },
    "partizipVergangenheit": {
      "de": "geschossen",
      "lv": "skutt"
    }
  },
  {
    "infinitiv": {
      "de": "schinden",
      "lv": "å plage"
    },
    "praesens": {
      "de": "er schindet",
      "lv": "han plager"
    },
    "imperfektIndikativ": {
      "de": "schindete",
      "lv": "han plaget"
    },
    "imperfektKonjunktiv": {
      "de": "schindete",
      "lv": "han ville plage"
    },
    "partizipVergangenheit": {
      "de": "geschunden",
      "lv": "plaget"
    }
  },
  {
    "infinitiv": {
      "de": "schlafen",
      "lv": "å sove"
    },
    "praesens": {
      "de": "er schläft",
      "lv": "han sover"
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
      "lv": "sovet"
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
      "lv": "han sniker seg"
    },
    "imperfektIndikativ": {
      "de": "er schlich",
      "lv": "han snek seg"
    },
    "imperfektKonjunktiv": {
      "de": "er schliche",
      "lv": "han ville snike seg"
    },
    "partizipVergangenheit": {
      "de": "geschlichen (er ist)",
      "lv": "sneket"
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
      "lv": "han lukker"
    },
    "imperfektIndikativ": {
      "de": "er schloss",
      "lv": "han lukket"
    },
    "imperfektKonjunktiv": {
      "de": "er schlösse",
      "lv": "han ville lukke"
    },
    "partizipVergangenheit": {
      "de": "geschlossen",
      "lv": "lukket"
    }
  },
  {
    "infinitiv": {
      "de": "schlingen",
      "lv": "å svelge"
    },
    "praesens": {
      "de": "er schlingt",
      "lv": "han svelger"
    },
    "imperfektIndikativ": {
      "de": "er schlang",
      "lv": "han svelget"
    },
    "imperfektKonjunktiv": {
      "de": "er schlänge",
      "lv": "han ville svelge"
    },
    "partizipVergangenheit": {
      "de": "geschlungen",
      "lv": "svelget"
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
      "lv": "han slengte"
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
      "lv": "det smelter"
    },
    "imperfektIndikativ": {
      "de": "er schmolz",
      "lv": "det smeltet"
    },
    "imperfektKonjunktiv": {
      "de": "er schmölze",
      "lv": "det ville smelte"
    },
    "partizipVergangenheit": {
      "de": "geschmolzen (er ist)",
      "lv": "smeltet"
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
      "de": "schnaubte / schnob",
      "lv": "han fnyste"
    },
    "imperfektKonjunktiv": {
      "de": "schnaubte / schnob",
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
      "lv": "å skjære"
    },
    "praesens": {
      "de": "er schneidet",
      "lv": "han skjærer"
    },
    "imperfektIndikativ": {
      "de": "er schnitt",
      "lv": "han skar"
    },
    "imperfektKonjunktiv": {
      "de": "er schnitte",
      "lv": "han ville skjære"
    },
    "partizipVergangenheit": {
      "de": "geschnitten",
      "lv": "skåret"
    }
  },
  {
    "infinitiv": {
      "de": "schreiben",
      "lv": "å skrive"
    },
    "praesens": {
      "de": "er schreibt",
      "lv": "han skriver"
    },
    "imperfektIndikativ": {
      "de": "er schrieb",
      "lv": "han skrev"
    },
    "imperfektKonjunktiv": {
      "de": "er schriebe",
      "lv": "han ville skrive"
    },
    "partizipVergangenheit": {
      "de": "geschrieben",
      "lv": "skrevet"
    }
  },
  {
    "infinitiv": {
      "de": "schreien",
      "lv": "å skrike"
    },
    "praesens": {
      "de": "er schreit",
      "lv": "han skriker"
    },
    "imperfektIndikativ": {
      "de": "er schrie",
      "lv": "han skrek"
    },
    "imperfektKonjunktiv": {
      "de": "er schriee",
      "lv": "han ville skrike"
    },
    "partizipVergangenheit": {
      "de": "geschrien",
      "lv": "skreket"
    }
  },
  {
    "infinitiv": {
      "de": "schreiten",
      "lv": "å skride"
    },
    "praesens": {
      "de": "er schreitet",
      "lv": "han skrider"
    },
    "imperfektIndikativ": {
      "de": "er schritt",
      "lv": "han skred"
    },
    "imperfektKonjunktiv": {
      "de": "er schritte",
      "lv": "han ville skride"
    },
    "partizipVergangenheit": {
      "de": "geschritten (er ist)",
      "lv": "skredet"
    }
  },
  {
    "infinitiv": {
      "de": "schweigen",
      "lv": "å tie"
    },
    "praesens": {
      "de": "er schweigt",
      "lv": "han tier"
    },
    "imperfektIndikativ": {
      "de": "er schwieg",
      "lv": "han tidde"
    },
    "imperfektKonjunktiv": {
      "de": "er schwiege",
      "lv": "han ville tie"
    },
    "partizipVergangenheit": {
      "de": "geschwiegen",
      "lv": "tidd"
    }
  },
  {
    "infinitiv": {
      "de": "schwellen",
      "lv": "å svulme"
    },
    "praesens": {
      "de": "er schwillt",
      "lv": "det svulmer"
    },
    "imperfektIndikativ": {
      "de": "er schwoll",
      "lv": "det svulmet"
    },
    "imperfektKonjunktiv": {
      "de": "er schwölle",
      "lv": "det ville svulme"
    },
    "partizipVergangenheit": {
      "de": "geschwollen (er ist)",
      "lv": "svulmet"
    }
  },
  {
    "infinitiv": {
      "de": "schwimmen",
      "lv": "å svømme"
    },
    "praesens": {
      "de": "er schwimmt",
      "lv": "han svømmer"
    },
    "imperfektIndikativ": {
      "de": "er schwamm",
      "lv": "han svømte"
    },
    "imperfektKonjunktiv": {
      "de": "er schwömme / er schwämme",
      "lv": "han ville svømme"
    },
    "partizipVergangenheit": {
      "de": "geschwommen (er ist)",
      "lv": "svømt"
    }
  },
  {
    "infinitiv": {
      "de": "schwinden",
      "lv": "å forsvinne"
    },
    "praesens": {
      "de": "er schwindet",
      "lv": "det forsvinner"
    },
    "imperfektIndikativ": {
      "de": "er schwand",
      "lv": "det forsvant"
    },
    "imperfektKonjunktiv": {
      "de": "er schwände",
      "lv": "det ville forsvinne"
    },
    "partizipVergangenheit": {
      "de": "geschwunden (er ist)",
      "lv": "forsvunnet"
    }
  },
  {
    "infinitiv": {
      "de": "schwingen",
      "lv": "å svinge"
    },
    "praesens": {
      "de": "er schwingt",
      "lv": "han svinger"
    },
    "imperfektIndikativ": {
      "de": "er schwang",
      "lv": "han svingte"
    },
    "imperfektKonjunktiv": {
      "de": "er schwänge",
      "lv": "han ville svinge"
    },
    "partizipVergangenheit": {
      "de": "geschwungen",
      "lv": "svingt"
    }
  },
  {
    "infinitiv": {
      "de": "schwören",
      "lv": "å sverge"
    },
    "praesens": {
      "de": "er schwört",
      "lv": "han sverger"
    },
    "imperfektIndikativ": {
      "de": "er schwur / er schwor",
      "lv": "han sverget"
    },
    "imperfektKonjunktiv": {
      "de": "er schwöre",
      "lv": "han ville sverge"
    },
    "partizipVergangenheit": {
      "de": "geschworen",
      "lv": "sverget"
    }
  },
  {
    "infinitiv": {
      "de": "sehen",
      "lv": "å se"
    },
    "praesens": {
      "de": "er sieht",
      "lv": "han ser"
    },
    "imperfektIndikativ": {
      "de": "er sah",
      "lv": "han så"
    },
    "imperfektKonjunktiv": {
      "de": "er sähe",
      "lv": "han ville se"
    },
    "partizipVergangenheit": {
      "de": "gesehen",
      "lv": "sett"
    }
  },
  {
    "infinitiv": {
      "de": "sein",
      "lv": "å være"
    },
    "praesens": {
      "de": "er ist",
      "lv": "han er"
    },
    "imperfektIndikativ": {
      "de": "war",
      "lv": "han var"
    },
    "imperfektKonjunktiv": {
      "de": "war",
      "lv": "han ville være"
    },
    "partizipVergangenheit": {
      "de": "gewesen",
      "lv": "vært"
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
      "lv": "han sendte"
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
      "de": "sott / siedete",
      "lv": "han kokte"
    },
    "imperfektKonjunktiv": {
      "de": "sott / siedete",
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
      "lv": "han synger"
    },
    "imperfektIndikativ": {
      "de": "er sang",
      "lv": "han sang"
    },
    "imperfektKonjunktiv": {
      "de": "er sänge",
      "lv": "han ville synge"
    },
    "partizipVergangenheit": {
      "de": "gesungen",
      "lv": "sunget"
    }
  },
  {
    "infinitiv": {
      "de": "sinken",
      "lv": "å synke"
    },
    "praesens": {
      "de": "er sinkt",
      "lv": "han synker"
    },
    "imperfektIndikativ": {
      "de": "er sank",
      "lv": "han sank"
    },
    "imperfektKonjunktiv": {
      "de": "er sänke",
      "lv": "han ville synke"
    },
    "partizipVergangenheit": {
      "de": "gesunken (er ist)",
      "lv": "sunket"
    }
  },
  {
    "infinitiv": {
      "de": "sinnen",
      "lv": "å gruble"
    },
    "praesens": {
      "de": "er sinnt",
      "lv": "han grubler"
    },
    "imperfektIndikativ": {
      "de": "er sann",
      "lv": "han grublet"
    },
    "imperfektKonjunktiv": {
      "de": "er sönne / er sänne",
      "lv": "han ville gruble"
    },
    "partizipVergangenheit": {
      "de": "gesonnen",
      "lv": "grublet"
    }
  },
  {
    "infinitiv": {
      "de": "sitzen",
      "lv": "å sitte"
    },
    "praesens": {
      "de": "er sitzt",
      "lv": "han sitter"
    },
    "imperfektIndikativ": {
      "de": "er sass",
      "lv": "han satt"
    },
    "imperfektKonjunktiv": {
      "de": "er säße",
      "lv": "han ville sitte"
    },
    "partizipVergangenheit": {
      "de": "gesessen",
      "lv": "sittet"
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
      "de": "sollte",
      "lv": "han skulle"
    },
    "imperfektKonjunktiv": {
      "de": "sollte",
      "lv": "han skulle"
    },
    "partizipVergangenheit": {
      "de": "gesollt",
      "lv": "skullet"
    }
  },
  {
    "infinitiv": {
      "de": "speien",
      "lv": "å spytte"
    },
    "praesens": {
      "de": "er speit",
      "lv": "han spytter"
    },
    "imperfektIndikativ": {
      "de": "er spie",
      "lv": "han spyttet"
    },
    "imperfektKonjunktiv": {
      "de": "er spie",
      "lv": "han ville spytte"
    },
    "partizipVergangenheit": {
      "de": "gespien",
      "lv": "spyttet"
    }
  },
  {
    "infinitiv": {
      "de": "spinnen",
      "lv": "å spinne"
    },
    "praesens": {
      "de": "er spinnt",
      "lv": "han spinner"
    },
    "imperfektIndikativ": {
      "de": "er spann",
      "lv": "han spant"
    },
    "imperfektKonjunktiv": {
      "de": "er spönne / er spänne",
      "lv": "han ville spinne"
    },
    "partizipVergangenheit": {
      "de": "gesponnen",
      "lv": "spunnet"
    }
  },
  {
    "infinitiv": {
      "de": "spleißen",
      "lv": "å forbinde"
    },
    "praesens": {
      "de": "er spleißt",
      "lv": "han forbinder"
    },
    "imperfektIndikativ": {
      "de": "spliss",
      "lv": "han forbandt"
    },
    "imperfektKonjunktiv": {
      "de": "spliss",
      "lv": "han ville forbinde"
    },
    "partizipVergangenheit": {
      "de": "gesplissen",
      "lv": "forbundet"
    }
  },
  {
    "infinitiv": {
      "de": "sprechen",
      "lv": "å snakke"
    },
    "praesens": {
      "de": "er spricht",
      "lv": "han snakker"
    },
    "imperfektIndikativ": {
      "de": "er sprach",
      "lv": "han snakket"
    },
    "imperfektKonjunktiv": {
      "de": "er spräche",
      "lv": "han ville snakke"
    },
    "partizipVergangenheit": {
      "de": "gesprochen",
      "lv": "snakket"
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
      "lv": "han hopper"
    },
    "imperfektIndikativ": {
      "de": "er sprang",
      "lv": "han hoppet"
    },
    "imperfektKonjunktiv": {
      "de": "er spränge",
      "lv": "han ville hoppe"
    },
    "partizipVergangenheit": {
      "de": "gesprungen (er ist)",
      "lv": "hoppet"
    }
  },
  {
    "infinitiv": {
      "de": "stechen",
      "lv": "å stikke"
    },
    "praesens": {
      "de": "er sticht",
      "lv": "han stikker"
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
      "lv": "stukket"
    }
  },
  {
    "infinitiv": {
      "de": "stecken",
      "lv": "å putte / å stikke"
    },
    "praesens": {
      "de": "er steckt",
      "lv": "han putter / stikker"
    },
    "imperfektIndikativ": {
      "de": "stak / steckte",
      "lv": "han puttet / stakk"
    },
    "imperfektKonjunktiv": {
      "de": "stak / steckte",
      "lv": "han ville putte / stikke"
    },
    "partizipVergangenheit": {
      "de": "gesteckt",
      "lv": "puttet / stukket"
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
      "lv": "han sto"
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
      "lv": "å stjele"
    },
    "praesens": {
      "de": "er stiehlt",
      "lv": "han stjeler"
    },
    "imperfektIndikativ": {
      "de": "er stahl",
      "lv": "han stjal"
    },
    "imperfektKonjunktiv": {
      "de": "er stöhle / er stähle",
      "lv": "han ville stjele"
    },
    "partizipVergangenheit": {
      "de": "gestohlen",
      "lv": "stjålet"
    }
  },
  {
    "infinitiv": {
      "de": "steigen",
      "lv": "å stige"
    },
    "praesens": {
      "de": "er steigt",
      "lv": "han stiger"
    },
    "imperfektIndikativ": {
      "de": "er stieg",
      "lv": "han steg"
    },
    "imperfektKonjunktiv": {
      "de": "er stiege",
      "lv": "han ville stige"
    },
    "partizipVergangenheit": {
      "de": "gestiegen (er ist)",
      "lv": "steget"
    }
  },
  {
    "infinitiv": {
      "de": "sterben",
      "lv": "å dø"
    },
    "praesens": {
      "de": "er stirbt",
      "lv": "han dør"
    },
    "imperfektIndikativ": {
      "de": "er starb",
      "lv": "han døde"
    },
    "imperfektKonjunktiv": {
      "de": "er stürbe",
      "lv": "han ville dø"
    },
    "partizipVergangenheit": {
      "de": "gestorben (er ist)",
      "lv": "dødd"
    }
  },
  {
    "infinitiv": {
      "de": "stinken",
      "lv": "å stinke"
    },
    "praesens": {
      "de": "es stinkt",
      "lv": "det stinker"
    },
    "imperfektIndikativ": {
      "de": "stank",
      "lv": "det stinket"
    },
    "imperfektKonjunktiv": {
      "de": "stank",
      "lv": "det ville stinke"
    },
    "partizipVergangenheit": {
      "de": "gestunken",
      "lv": "stinket"
    }
  },
  {
    "infinitiv": {
      "de": "stoßen",
      "lv": "å dytte"
    },
    "praesens": {
      "de": "er stößt",
      "lv": "han dytter"
    },
    "imperfektIndikativ": {
      "de": "er stieß",
      "lv": "han dyttet"
    },
    "imperfektKonjunktiv": {
      "de": "er stieße",
      "lv": "han ville dytte"
    },
    "partizipVergangenheit": {
      "de": "gestoßen",
      "lv": "dyttet"
    }
  },
  {
    "infinitiv": {
      "de": "streichen",
      "lv": "å male / å stryke"
    },
    "praesens": {
      "de": "er streicht",
      "lv": "han maler / stryker"
    },
    "imperfektIndikativ": {
      "de": "er strich",
      "lv": "han malte / strøk"
    },
    "imperfektKonjunktiv": {
      "de": "er striche",
      "lv": "han ville male / stryke"
    },
    "partizipVergangenheit": {
      "de": "gestrichen",
      "lv": "malt / strøket"
    }
  },
  {
    "infinitiv": {
      "de": "streiten",
      "lv": "å krangle"
    },
    "praesens": {
      "de": "er streitet",
      "lv": "han krangler"
    },
    "imperfektIndikativ": {
      "de": "er stritt",
      "lv": "han kranglet"
    },
    "imperfektKonjunktiv": {
      "de": "er stritte",
      "lv": "han ville krangle"
    },
    "partizipVergangenheit": {
      "de": "gestritten",
      "lv": "kranglet"
    }
  },
  {
    "infinitiv": {
      "de": "tragen",
      "lv": "å bære"
    },
    "praesens": {
      "de": "er trägt",
      "lv": "han bærer"
    },
    "imperfektIndikativ": {
      "de": "er trug",
      "lv": "han bar"
    },
    "imperfektKonjunktiv": {
      "de": "er trüge",
      "lv": "han ville bære"
    },
    "partizipVergangenheit": {
      "de": "getragen",
      "lv": "båret"
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
      "lv": "han driver"
    },
    "imperfektIndikativ": {
      "de": "er trieb",
      "lv": "han drev"
    },
    "imperfektKonjunktiv": {
      "de": "er triebe",
      "lv": "han ville drive"
    },
    "partizipVergangenheit": {
      "de": "getrieben",
      "lv": "drevet"
    }
  },
  {
    "infinitiv": {
      "de": "treten",
      "lv": "å tre / å gå"
    },
    "praesens": {
      "de": "er tritt",
      "lv": "han trer / går"
    },
    "imperfektIndikativ": {
      "de": "er trat",
      "lv": "han trådte / gikk"
    },
    "imperfektKonjunktiv": {
      "de": "er träte",
      "lv": "han ville tre / gå"
    },
    "partizipVergangenheit": {
      "de": "getreten (er ist)",
      "lv": "trådt / gått"
    }
  },
  {
    "infinitiv": {
      "de": "trinken",
      "lv": "å drikke"
    },
    "praesens": {
      "de": "er trinkt",
      "lv": "han drikker"
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
      "lv": "drukket"
    }
  },
  {
    "infinitiv": {
      "de": "trügen",
      "lv": "å bedra"
    },
    "praesens": {
      "de": "er trögt",
      "lv": "han bedrar"
    },
    "imperfektIndikativ": {
      "de": "er trog",
      "lv": "han bedro"
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
      "lv": "å gjøre"
    },
    "praesens": {
      "de": "er tut",
      "lv": "han gjør"
    },
    "imperfektIndikativ": {
      "de": "er tat",
      "lv": "han gjorde"
    },
    "imperfektKonjunktiv": {
      "de": "er täte",
      "lv": "han ville gjøre"
    },
    "partizipVergangenheit": {
      "de": "getan",
      "lv": "gjort"
    }
  },
  {
    "infinitiv": {
      "de": "verderben",
      "lv": "å ødelegge"
    },
    "praesens": {
      "de": "er verdirbt",
      "lv": "han ødelegger"
    },
    "imperfektIndikativ": {
      "de": "er verdarb",
      "lv": "han ødela"
    },
    "imperfektKonjunktiv": {
      "de": "er verdürbe",
      "lv": "han ville ødelegge"
    },
    "partizipVergangenheit": {
      "de": "verdorben",
      "lv": "ødelagt"
    }
  },
  {
    "infinitiv": {
      "de": "verdrießen",
      "lv": "å ergre"
    },
    "praesens": {
      "de": "er verdrießt",
      "lv": "han ergrer"
    },
    "imperfektIndikativ": {
      "de": "er verdross",
      "lv": "han ergret"
    },
    "imperfektKonjunktiv": {
      "de": "er verdrösse",
      "lv": "han ville ergre"
    },
    "partizipVergangenheit": {
      "de": "verdrossen",
      "lv": "ergret"
    }
  },
  {
    "infinitiv": {
      "de": "vergessen",
      "lv": "å glemme"
    },
    "praesens": {
      "de": "er vergisst",
      "lv": "han glemmer"
    },
    "imperfektIndikativ": {
      "de": "er vergass",
      "lv": "han glemte"
    },
    "imperfektKonjunktiv": {
      "de": "er vergäße",
      "lv": "han ville glemme"
    },
    "partizipVergangenheit": {
      "de": "vergessen",
      "lv": "glemt"
    }
  },
  {
    "infinitiv": {
      "de": "verlieren",
      "lv": "å miste"
    },
    "praesens": {
      "de": "er verliert",
      "lv": "han mister"
    },
    "imperfektIndikativ": {
      "de": "er verlor",
      "lv": "han mistet"
    },
    "imperfektKonjunktiv": {
      "de": "er verlöre",
      "lv": "han ville miste"
    },
    "partizipVergangenheit": {
      "de": "verloren",
      "lv": "mistet"
    }
  },
  {
    "infinitiv": {
      "de": "wachsen",
      "lv": "å vokse"
    },
    "praesens": {
      "de": "er wächst",
      "lv": "han vokser"
    },
    "imperfektIndikativ": {
      "de": "er wuchs",
      "lv": "han vokste"
    },
    "imperfektKonjunktiv": {
      "de": "er wüchse",
      "lv": "han ville vokse"
    },
    "partizipVergangenheit": {
      "de": "gewachsen (er ist)",
      "lv": "vokst"
    }
  },
  {
    "infinitiv": {
      "de": "waschen",
      "lv": "å vaske"
    },
    "praesens": {
      "de": "er wäscht",
      "lv": "han vasker"
    },
    "imperfektIndikativ": {
      "de": "er wusch",
      "lv": "han vasket"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsche",
      "lv": "han ville vaske"
    },
    "partizipVergangenheit": {
      "de": "gewaschen",
      "lv": "vasket"
    }
  },
  {
    "infinitiv": {
      "de": "weben",
      "lv": "å veve"
    },
    "praesens": {
      "de": "er webt",
      "lv": "han vever"
    },
    "imperfektIndikativ": {
      "de": "wob",
      "lv": "han vevde"
    },
    "imperfektKonjunktiv": {
      "de": "wob",
      "lv": "han ville veve"
    },
    "partizipVergangenheit": {
      "de": "gewoben",
      "lv": "vevd"
    }
  },
  {
    "infinitiv": {
      "de": "weichen",
      "lv": "å vike"
    },
    "praesens": {
      "de": "er weicht",
      "lv": "han viker"
    },
    "imperfektIndikativ": {
      "de": "er wich",
      "lv": "han vek"
    },
    "imperfektKonjunktiv": {
      "de": "er wiche",
      "lv": "han ville vike"
    },
    "partizipVergangenheit": {
      "de": "gewichen (er ist)",
      "lv": "veket"
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
      "lv": "han dreier / snur"
    },
    "imperfektIndikativ": {
      "de": "er wandte / es wendete",
      "lv": "han dreide / snudde"
    },
    "imperfektKonjunktiv": {
      "de": "er wendete",
      "lv": "han ville dreie / snu"
    },
    "partizipVergangenheit": {
      "de": "gewandt / gewendet",
      "lv": "dreid / snudd"
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
      "de": "wurde",
      "lv": "han ble"
    },
    "imperfektKonjunktiv": {
      "de": "wurde",
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
      "lv": "han kaster"
    },
    "imperfektIndikativ": {
      "de": "er warf",
      "lv": "han kastet"
    },
    "imperfektKonjunktiv": {
      "de": "er würfe",
      "lv": "han ville kaste"
    },
    "partizipVergangenheit": {
      "de": "geworfen",
      "lv": "kastet"
    }
  },
  {
    "infinitiv": {
      "de": "wiegen",
      "lv": "å veie"
    },
    "praesens": {
      "de": "er wiegt",
      "lv": "han veier"
    },
    "imperfektIndikativ": {
      "de": "er wog",
      "lv": "han veide"
    },
    "imperfektKonjunktiv": {
      "de": "er wöge",
      "lv": "han ville veie"
    },
    "partizipVergangenheit": {
      "de": "gewogen",
      "lv": "veid"
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
      "lv": "han vet"
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
      "lv": "å ville"
    },
    "praesens": {
      "de": "er will",
      "lv": "han vil"
    },
    "imperfektIndikativ": {
      "de": "wollte",
      "lv": "han ville"
    },
    "imperfektKonjunktiv": {
      "de": "wollte",
      "lv": "han ville"
    },
    "partizipVergangenheit": {
      "de": "gewollt",
      "lv": "villet"
    }
  },
  {
    "infinitiv": {
      "de": "wringen",
      "lv": "å vri / å presse"
    },
    "praesens": {
      "de": "er wringt",
      "lv": "han vrir / presser"
    },
    "imperfektIndikativ": {
      "de": "wrang",
      "lv": "han vred / presset"
    },
    "imperfektKonjunktiv": {
      "de": "wrang",
      "lv": "han ville vri / presse"
    },
    "partizipVergangenheit": {
      "de": "gewrungen",
      "lv": "vridd / presset"
    }
  },
  {
    "infinitiv": {
      "de": "zeihen",
      "lv": "å beskylde"
    },
    "praesens": {
      "de": "er zeiht",
      "lv": "han beskylder"
    },
    "imperfektIndikativ": {
      "de": "zieh",
      "lv": "han beskyldte"
    },
    "imperfektKonjunktiv": {
      "de": "zieh",
      "lv": "han ville beskylde"
    },
    "partizipVergangenheit": {
      "de": "geziehen",
      "lv": "beskyldt"
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
      "lv": "han trakk"
    },
    "imperfektKonjunktiv": {
      "de": "er zöge",
      "lv": "han ville trekke"
    },
    "partizipVergangenheit": {
      "de": "gezogen",
      "lv": "trukket"
    }
  },
  {
    "infinitiv": {
      "de": "zwingen",
      "lv": "å tvinge"
    },
    "praesens": {
      "de": "er zwingt",
      "lv": "han tvinger"
    },
    "imperfektIndikativ": {
      "de": "er zwang",
      "lv": "han tvang"
    },
    "imperfektKonjunktiv": {
      "de": "er zwänge",
      "lv": "han ville tvinge"
    },
    "partizipVergangenheit": {
      "de": "gezwungen",
      "lv": "tvunget"
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
      "lv": "å overveie"
    },
    "praesens": {
      "de": "er erwägt",
      "lv": "han overveier"
    },
    "imperfektIndikativ": {
      "de": "er erwog",
      "lv": "han overveide"
    },
    "imperfektKonjunktiv": {
      "de": "er erwöge",
      "lv": "han ville overveie"
    },
    "partizipVergangenheit": {
      "de": "erwogen",
      "lv": "overveid"
    }
  },
  {
    "infinitiv": {
      "de": "fechten",
      "lv": "å kjempe"
    },
    "praesens": {
      "de": "er ficht",
      "lv": "han kjemper"
    },
    "imperfektIndikativ": {
      "de": "er focht",
      "lv": "han kjempet"
    },
    "imperfektKonjunktiv": {
      "de": "er föchte",
      "lv": "han ville kjempe"
    },
    "partizipVergangenheit": {
      "de": "gefochten",
      "lv": "kjempet"
    }
  },
  {
    "infinitiv": {
      "de": "flechten",
      "lv": "å flette"
    },
    "praesens": {
      "de": "er flicht",
      "lv": "han fletter"
    },
    "imperfektIndikativ": {
      "de": "er flocht",
      "lv": "han flettet"
    },
    "imperfektKonjunktiv": {
      "de": "er flöchte",
      "lv": "han ville flette"
    },
    "partizipVergangenheit": {
      "de": "geflochten",
      "lv": "flettet"
    }
  },
  {
    "infinitiv": {
      "de": "hangen",
      "lv": "å henge"
    },
    "praesens": {
      "de": "er hängt",
      "lv": "han henger"
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
      "lv": "hengt"
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
      "lv": "han tilga"
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

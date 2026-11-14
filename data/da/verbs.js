const VERB_ENTRIES = [
  {
    "infinitiv": {
      "de": "backen",
      "lv": "at bage"
    },
    "praesens": {
      "de": "er bäckt",
      "lv": "han bager"
    },
    "imperfektIndikativ": {
      "de": "er buk",
      "lv": "han bagte"
    },
    "imperfektKonjunktiv": {
      "de": "er büke",
      "lv": "han ville bage"
    },
    "partizipVergangenheit": {
      "de": "gebacken",
      "lv": "bagt"
    }
  },
  {
    "infinitiv": {
      "de": "befehlen",
      "lv": "at befale"
    },
    "praesens": {
      "de": "er befiehlt",
      "lv": "han befaler"
    },
    "imperfektIndikativ": {
      "de": "er befahl",
      "lv": "han befalede"
    },
    "imperfektKonjunktiv": {
      "de": "er beföhle",
      "lv": "han ville befale"
    },
    "partizipVergangenheit": {
      "de": "befohlen",
      "lv": "befalet"
    }
  },
  {
    "infinitiv": {
      "de": "beginnen",
      "lv": "at begynde"
    },
    "praesens": {
      "de": "er beginnt",
      "lv": "han begynder"
    },
    "imperfektIndikativ": {
      "de": "er begann",
      "lv": "han begyndte"
    },
    "imperfektKonjunktiv": {
      "de": "er begönne / er begänne",
      "lv": "han ville begynde"
    },
    "partizipVergangenheit": {
      "de": "begonnen",
      "lv": "begyndt"
    }
  },
  {
    "infinitiv": {
      "de": "beißen",
      "lv": "at bide"
    },
    "praesens": {
      "de": "er beißt",
      "lv": "han bider"
    },
    "imperfektIndikativ": {
      "de": "er biss",
      "lv": "han bed"
    },
    "imperfektKonjunktiv": {
      "de": "er bisse",
      "lv": "han ville bide"
    },
    "partizipVergangenheit": {
      "de": "gebissen",
      "lv": "bidt"
    }
  },
  {
    "infinitiv": {
      "de": "bergen",
      "lv": "at redde / at skjule"
    },
    "praesens": {
      "de": "er birgt",
      "lv": "han redder / skjuler"
    },
    "imperfektIndikativ": {
      "de": "er barg",
      "lv": "han reddede / skjulte"
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
      "lv": "at briste"
    },
    "praesens": {
      "de": "er birst",
      "lv": "det brister"
    },
    "imperfektIndikativ": {
      "de": "er barst / er borst",
      "lv": "det brast"
    },
    "imperfektKonjunktiv": {
      "de": "er bärste / er börste",
      "lv": "det ville briste"
    },
    "partizipVergangenheit": {
      "de": "geborsten (er ist)",
      "lv": "bristet"
    }
  },
  {
    "infinitiv": {
      "de": "bewegen",
      "lv": "at bevæge"
    },
    "praesens": {
      "de": "er bewegt",
      "lv": "han bevæger"
    },
    "imperfektIndikativ": {
      "de": "er bewog",
      "lv": "han bevægede"
    },
    "imperfektKonjunktiv": {
      "de": "er bewöge",
      "lv": "han ville bevæge"
    },
    "partizipVergangenheit": {
      "de": "bewogen",
      "lv": "bevæget"
    }
  },
  {
    "infinitiv": {
      "de": "biegen",
      "lv": "at bøje"
    },
    "praesens": {
      "de": "er biegt",
      "lv": "han bøjer"
    },
    "imperfektIndikativ": {
      "de": "er bog",
      "lv": "han bøjede"
    },
    "imperfektKonjunktiv": {
      "de": "er böge",
      "lv": "han ville bøje"
    },
    "partizipVergangenheit": {
      "de": "gebogen",
      "lv": "bøjet"
    }
  },
  {
    "infinitiv": {
      "de": "bieten",
      "lv": "at tilbyde"
    },
    "praesens": {
      "de": "er bietet",
      "lv": "han tilbyder"
    },
    "imperfektIndikativ": {
      "de": "er bot",
      "lv": "han tilbød"
    },
    "imperfektKonjunktiv": {
      "de": "er böte",
      "lv": "han ville tilbyde"
    },
    "partizipVergangenheit": {
      "de": "geboten",
      "lv": "tilbudt"
    }
  },
  {
    "infinitiv": {
      "de": "binden",
      "lv": "at binde"
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
      "lv": "at bede"
    },
    "praesens": {
      "de": "er bittet",
      "lv": "han beder"
    },
    "imperfektIndikativ": {
      "de": "er bat",
      "lv": "han bad"
    },
    "imperfektKonjunktiv": {
      "de": "er bäte",
      "lv": "han ville bede"
    },
    "partizipVergangenheit": {
      "de": "gebeten",
      "lv": "bedt"
    }
  },
  {
    "infinitiv": {
      "de": "blasen",
      "lv": "at blæse"
    },
    "praesens": {
      "de": "er bläst",
      "lv": "han blæser"
    },
    "imperfektIndikativ": {
      "de": "er blies",
      "lv": "han blæste"
    },
    "imperfektKonjunktiv": {
      "de": "er bliese",
      "lv": "han ville blæse"
    },
    "partizipVergangenheit": {
      "de": "geblasen",
      "lv": "blæst"
    }
  },
  {
    "infinitiv": {
      "de": "gären",
      "lv": "at gære"
    },
    "praesens": {
      "de": "es gärt",
      "lv": "det gærer"
    },
    "imperfektIndikativ": {
      "de": "es gor / es gärte",
      "lv": "det gærede"
    },
    "imperfektKonjunktiv": {
      "de": "es göre / es gärte",
      "lv": "det ville gære"
    },
    "partizipVergangenheit": {
      "de": "gegoren / gegärt",
      "lv": "gæret"
    }
  },
  {
    "infinitiv": {
      "de": "gebären",
      "lv": "at føde"
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
      "lv": "at lykkes"
    },
    "praesens": {
      "de": "es gelingt",
      "lv": "det lykkes"
    },
    "imperfektIndikativ": {
      "de": "es gelang",
      "lv": "det lykkedes"
    },
    "imperfektKonjunktiv": {
      "de": "es gelänge",
      "lv": "det ville lykkes"
    },
    "partizipVergangenheit": {
      "de": "gelungen (es ist)",
      "lv": "lykkedes"
    }
  },
  {
    "infinitiv": {
      "de": "gelten",
      "lv": "at gælde / at være gyldig"
    },
    "praesens": {
      "de": "er gilt",
      "lv": "han gælder / er gyldig"
    },
    "imperfektIndikativ": {
      "de": "er galt",
      "lv": "han gjaldt / var gyldig"
    },
    "imperfektKonjunktiv": {
      "de": "er gölte / es gälte",
      "lv": "han ville gælde / være gyldig"
    },
    "partizipVergangenheit": {
      "de": "gegolten",
      "lv": "gjaldt / været gyldig"
    }
  },
  {
    "infinitiv": {
      "de": "genesen",
      "lv": "at blive rask"
    },
    "praesens": {
      "de": "er genest",
      "lv": "han bliver rask"
    },
    "imperfektIndikativ": {
      "de": "er genas",
      "lv": "han blev rask"
    },
    "imperfektKonjunktiv": {
      "de": "er genäse",
      "lv": "han ville blive rask"
    },
    "partizipVergangenheit": {
      "de": "genesen (er ist)",
      "lv": "blevet rask"
    }
  },
  {
    "infinitiv": {
      "de": "genießen",
      "lv": "at nyde"
    },
    "praesens": {
      "de": "er genießt",
      "lv": "han nyder"
    },
    "imperfektIndikativ": {
      "de": "er genoss",
      "lv": "han nød"
    },
    "imperfektKonjunktiv": {
      "de": "er genösse",
      "lv": "han ville nyde"
    },
    "partizipVergangenheit": {
      "de": "genossen",
      "lv": "nydt"
    }
  },
  {
    "infinitiv": {
      "de": "geschehen",
      "lv": "at ske"
    },
    "praesens": {
      "de": "es geschieht",
      "lv": "det sker"
    },
    "imperfektIndikativ": {
      "de": "es geschah",
      "lv": "det skete"
    },
    "imperfektKonjunktiv": {
      "de": "es geschähe",
      "lv": "det ville ske"
    },
    "partizipVergangenheit": {
      "de": "geschehen (es ist)",
      "lv": "sket"
    }
  },
  {
    "infinitiv": {
      "de": "gießen",
      "lv": "at hælde"
    },
    "praesens": {
      "de": "er gießt",
      "lv": "han hælder"
    },
    "imperfektIndikativ": {
      "de": "er goss",
      "lv": "han hældte"
    },
    "imperfektKonjunktiv": {
      "de": "er gösse",
      "lv": "han ville hælde"
    },
    "partizipVergangenheit": {
      "de": "gegossen",
      "lv": "hældt"
    }
  },
  {
    "infinitiv": {
      "de": "gleichen",
      "lv": "at ligne"
    },
    "praesens": {
      "de": "er gleicht",
      "lv": "han ligner"
    },
    "imperfektIndikativ": {
      "de": "er glich",
      "lv": "han lignede"
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
      "lv": "at glide"
    },
    "praesens": {
      "de": "er gleitet",
      "lv": "han glider"
    },
    "imperfektIndikativ": {
      "de": "er glitt",
      "lv": "han gled"
    },
    "imperfektKonjunktiv": {
      "de": "er glitte",
      "lv": "han ville glide"
    },
    "partizipVergangenheit": {
      "de": "geglitten (er ist)",
      "lv": "gledet"
    }
  },
  {
    "infinitiv": {
      "de": "glimmen",
      "lv": "at gløde"
    },
    "praesens": {
      "de": "er glimmt",
      "lv": "det gløder"
    },
    "imperfektIndikativ": {
      "de": "er glimmte / glomm",
      "lv": "det glødede"
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
      "lv": "at grave"
    },
    "praesens": {
      "de": "er gräbt",
      "lv": "han graver"
    },
    "imperfektIndikativ": {
      "de": "er grub",
      "lv": "han gravede"
    },
    "imperfektKonjunktiv": {
      "de": "er grübe",
      "lv": "han ville grave"
    },
    "partizipVergangenheit": {
      "de": "gegraben",
      "lv": "gravet"
    }
  },
  {
    "infinitiv": {
      "de": "greifen",
      "lv": "at gribe"
    },
    "praesens": {
      "de": "er greift",
      "lv": "han griber"
    },
    "imperfektIndikativ": {
      "de": "er griff",
      "lv": "han greb"
    },
    "imperfektKonjunktiv": {
      "de": "er griffe",
      "lv": "han ville gribe"
    },
    "partizipVergangenheit": {
      "de": "gegriffen",
      "lv": "grebet"
    }
  },
  {
    "infinitiv": {
      "de": "hauen",
      "lv": "at hugge"
    },
    "praesens": {
      "de": "er haut",
      "lv": "han hugger"
    },
    "imperfektIndikativ": {
      "de": "er hieb",
      "lv": "han huggede"
    },
    "imperfektKonjunktiv": {
      "de": "er hiebe",
      "lv": "han ville hugge"
    },
    "partizipVergangenheit": {
      "de": "gehauen",
      "lv": "hugget"
    }
  },
  {
    "infinitiv": {
      "de": "heben",
      "lv": "at løfte"
    },
    "praesens": {
      "de": "er hebt",
      "lv": "han løfter"
    },
    "imperfektIndikativ": {
      "de": "er hob",
      "lv": "han løftede"
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
      "lv": "at kende / at vide"
    },
    "praesens": {
      "de": "er kennt",
      "lv": "han kender / ved"
    },
    "imperfektIndikativ": {
      "de": "kannte",
      "lv": "han kendte / vidste"
    },
    "imperfektKonjunktiv": {
      "de": "kannte",
      "lv": "han ville kende / vide"
    },
    "partizipVergangenheit": {
      "de": "gekannt",
      "lv": "kendt / vidst"
    }
  },
  {
    "infinitiv": {
      "de": "klingen",
      "lv": "at lyde"
    },
    "praesens": {
      "de": "er klingt",
      "lv": "det lyder"
    },
    "imperfektIndikativ": {
      "de": "er klang",
      "lv": "det lød"
    },
    "imperfektKonjunktiv": {
      "de": "er klänge",
      "lv": "det ville lyde"
    },
    "partizipVergangenheit": {
      "de": "geklungen",
      "lv": "lydt"
    }
  },
  {
    "infinitiv": {
      "de": "kneifen",
      "lv": "at knibe"
    },
    "praesens": {
      "de": "er kneift",
      "lv": "han kniber"
    },
    "imperfektIndikativ": {
      "de": "er kniff",
      "lv": "han kneb"
    },
    "imperfektKonjunktiv": {
      "de": "er kniffe",
      "lv": "han ville knibe"
    },
    "partizipVergangenheit": {
      "de": "gekniffen",
      "lv": "knebet"
    }
  },
  {
    "infinitiv": {
      "de": "bleiben",
      "lv": "at blive"
    },
    "praesens": {
      "de": "er bleibt",
      "lv": "han bliver"
    },
    "imperfektIndikativ": {
      "de": "er blieb",
      "lv": "han blev"
    },
    "imperfektKonjunktiv": {
      "de": "er bliebe",
      "lv": "han ville blive"
    },
    "partizipVergangenheit": {
      "de": "geblieben (er ist)",
      "lv": "blevet"
    }
  },
  {
    "infinitiv": {
      "de": "bleichen",
      "lv": "at blegne"
    },
    "praesens": {
      "de": "er bleicht",
      "lv": "det blegner"
    },
    "imperfektIndikativ": {
      "de": "blich",
      "lv": "det blegnede"
    },
    "imperfektKonjunktiv": {
      "de": "blich",
      "lv": "det ville blegne"
    },
    "partizipVergangenheit": {
      "de": "geblichen",
      "lv": "blegnet"
    }
  },
  {
    "infinitiv": {
      "de": "braten",
      "lv": "at stege"
    },
    "praesens": {
      "de": "er brät",
      "lv": "han steger"
    },
    "imperfektIndikativ": {
      "de": "er briet",
      "lv": "han stegte"
    },
    "imperfektKonjunktiv": {
      "de": "er briete",
      "lv": "han ville stege"
    },
    "partizipVergangenheit": {
      "de": "gebraten",
      "lv": "stegt"
    }
  },
  {
    "infinitiv": {
      "de": "brechen",
      "lv": "at bryde"
    },
    "praesens": {
      "de": "er bricht",
      "lv": "han bryder"
    },
    "imperfektIndikativ": {
      "de": "er brach",
      "lv": "han brød"
    },
    "imperfektKonjunktiv": {
      "de": "er bräche",
      "lv": "han ville bryde"
    },
    "partizipVergangenheit": {
      "de": "gebrochen",
      "lv": "brudt"
    }
  },
  {
    "infinitiv": {
      "de": "brennen",
      "lv": "at brænde"
    },
    "praesens": {
      "de": "er brennt",
      "lv": "det brænder"
    },
    "imperfektIndikativ": {
      "de": "brannte",
      "lv": "det brændte"
    },
    "imperfektKonjunktiv": {
      "de": "brannte",
      "lv": "det ville brænde"
    },
    "partizipVergangenheit": {
      "de": "gebrannt",
      "lv": "brændt"
    }
  },
  {
    "infinitiv": {
      "de": "bringen",
      "lv": "at bringe"
    },
    "praesens": {
      "de": "er bringt",
      "lv": "han bringer"
    },
    "imperfektIndikativ": {
      "de": "er brachte",
      "lv": "han bragte"
    },
    "imperfektKonjunktiv": {
      "de": "er brächte",
      "lv": "han ville bringe"
    },
    "partizipVergangenheit": {
      "de": "gebracht",
      "lv": "bragt"
    }
  },
  {
    "infinitiv": {
      "de": "denken",
      "lv": "at tænke"
    },
    "praesens": {
      "de": "er denkt",
      "lv": "han tænker"
    },
    "imperfektIndikativ": {
      "de": "er dachte",
      "lv": "han tænkte"
    },
    "imperfektKonjunktiv": {
      "de": "er dächte",
      "lv": "han ville tænke"
    },
    "partizipVergangenheit": {
      "de": "gedacht",
      "lv": "tænkt"
    }
  },
  {
    "infinitiv": {
      "de": "dingen",
      "lv": "at hyre / at blive enig"
    },
    "praesens": {
      "de": "er dingt",
      "lv": "han hyrer / bliver enig"
    },
    "imperfektIndikativ": {
      "de": "dingte",
      "lv": "han hyrede / blev enig"
    },
    "imperfektKonjunktiv": {
      "de": "dingte",
      "lv": "han ville hyre / blive enig"
    },
    "partizipVergangenheit": {
      "de": "gedungen",
      "lv": "hyret / blevet enig"
    }
  },
  {
    "infinitiv": {
      "de": "dreschen",
      "lv": "at tærske"
    },
    "praesens": {
      "de": "er drischt",
      "lv": "han tærsker"
    },
    "imperfektIndikativ": {
      "de": "er drasch / er drosch",
      "lv": "han tærskede"
    },
    "imperfektKonjunktiv": {
      "de": "er dräsche / er drösche",
      "lv": "han ville tærske"
    },
    "partizipVergangenheit": {
      "de": "gedroschen",
      "lv": "tærsket"
    }
  },
  {
    "infinitiv": {
      "de": "dringen",
      "lv": "at trænge ind"
    },
    "praesens": {
      "de": "er dringt",
      "lv": "han trænger ind"
    },
    "imperfektIndikativ": {
      "de": "er drang",
      "lv": "han trængte ind"
    },
    "imperfektKonjunktiv": {
      "de": "er dränge",
      "lv": "han ville trænge ind"
    },
    "partizipVergangenheit": {
      "de": "gedrungen (er ist)",
      "lv": "trængt ind"
    }
  },
  {
    "infinitiv": {
      "de": "dünken",
      "lv": "at synes"
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
      "lv": "at få lov"
    },
    "praesens": {
      "de": "er darf",
      "lv": "han får lov"
    },
    "imperfektIndikativ": {
      "de": "durfte",
      "lv": "han fik lov"
    },
    "imperfektKonjunktiv": {
      "de": "durfte",
      "lv": "han ville få lov"
    },
    "partizipVergangenheit": {
      "de": "gedurft",
      "lv": "fået lov"
    }
  },
  {
    "infinitiv": {
      "de": "empfehlen",
      "lv": "at anbefale"
    },
    "praesens": {
      "de": "er empfiehlt",
      "lv": "han anbefaler"
    },
    "imperfektIndikativ": {
      "de": "er empfahl",
      "lv": "han anbefalede"
    },
    "imperfektKonjunktiv": {
      "de": "er empfähle / er empföhle",
      "lv": "han ville anbefale"
    },
    "partizipVergangenheit": {
      "de": "empfohlen",
      "lv": "anbefalet"
    }
  },
  {
    "infinitiv": {
      "de": "empfinden",
      "lv": "at føle"
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
      "lv": "at gå ud"
    },
    "praesens": {
      "de": "er erlischt",
      "lv": "det går ud"
    },
    "imperfektIndikativ": {
      "de": "er erlosch",
      "lv": "det gik ud"
    },
    "imperfektKonjunktiv": {
      "de": "er erlösche",
      "lv": "det ville gå ud"
    },
    "partizipVergangenheit": {
      "de": "erloschen (er ist)",
      "lv": "gået ud"
    }
  },
  {
    "infinitiv": {
      "de": "erschrecken",
      "lv": "at blive forskrækket"
    },
    "praesens": {
      "de": "er erschrickt",
      "lv": "han bliver forskrækket"
    },
    "imperfektIndikativ": {
      "de": "er erschrak",
      "lv": "han blev forskrækket"
    },
    "imperfektKonjunktiv": {
      "de": "er erschräke",
      "lv": "han ville blive forskrækket"
    },
    "partizipVergangenheit": {
      "de": "erschrocken (er ist)",
      "lv": "blevet forskrækket"
    }
  },
  {
    "infinitiv": {
      "de": "essen",
      "lv": "at spise"
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
      "lv": "at køre"
    },
    "praesens": {
      "de": "er fährt",
      "lv": "han kører"
    },
    "imperfektIndikativ": {
      "de": "er fuhr",
      "lv": "han kørte"
    },
    "imperfektKonjunktiv": {
      "de": "er führe",
      "lv": "han ville køre"
    },
    "partizipVergangenheit": {
      "de": "gefahren (er ist)",
      "lv": "kørt"
    }
  },
  {
    "infinitiv": {
      "de": "fallen",
      "lv": "at falde"
    },
    "praesens": {
      "de": "er fällt",
      "lv": "han falder"
    },
    "imperfektIndikativ": {
      "de": "er fiel",
      "lv": "han faldt"
    },
    "imperfektKonjunktiv": {
      "de": "er fiele",
      "lv": "han ville falde"
    },
    "partizipVergangenheit": {
      "de": "gefallen (er ist)",
      "lv": "faldet"
    }
  },
  {
    "infinitiv": {
      "de": "fangen",
      "lv": "at fange"
    },
    "praesens": {
      "de": "er fängt",
      "lv": "han fanger"
    },
    "imperfektIndikativ": {
      "de": "er fing",
      "lv": "han fangede"
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
      "lv": "at finde"
    },
    "praesens": {
      "de": "er findet",
      "lv": "han finder"
    },
    "imperfektIndikativ": {
      "de": "er fand",
      "lv": "han fandt"
    },
    "imperfektKonjunktiv": {
      "de": "er fände",
      "lv": "han ville finde"
    },
    "partizipVergangenheit": {
      "de": "gefunden",
      "lv": "fundet"
    }
  },
  {
    "infinitiv": {
      "de": "fliegen",
      "lv": "at flyve"
    },
    "praesens": {
      "de": "er fliegt",
      "lv": "han flyver"
    },
    "imperfektIndikativ": {
      "de": "er flog",
      "lv": "han fløj"
    },
    "imperfektKonjunktiv": {
      "de": "er flöge",
      "lv": "han ville flyve"
    },
    "partizipVergangenheit": {
      "de": "geflogen (er ist)",
      "lv": "fløjet"
    }
  },
  {
    "infinitiv": {
      "de": "fliehen",
      "lv": "at flygte"
    },
    "praesens": {
      "de": "er flieht",
      "lv": "han flygter"
    },
    "imperfektIndikativ": {
      "de": "er floh",
      "lv": "han flygtede"
    },
    "imperfektKonjunktiv": {
      "de": "er flöhe",
      "lv": "han ville flygte"
    },
    "partizipVergangenheit": {
      "de": "geflohen (er ist)",
      "lv": "flygtet"
    }
  },
  {
    "infinitiv": {
      "de": "fließen",
      "lv": "at flyde"
    },
    "praesens": {
      "de": "er fließt",
      "lv": "det flyder"
    },
    "imperfektIndikativ": {
      "de": "er floss",
      "lv": "det flød"
    },
    "imperfektKonjunktiv": {
      "de": "er flösse",
      "lv": "det ville flyde"
    },
    "partizipVergangenheit": {
      "de": "geflossen (er ist)",
      "lv": "flydt"
    }
  },
  {
    "infinitiv": {
      "de": "fressen",
      "lv": "at æde / at sluge"
    },
    "praesens": {
      "de": "er frisst",
      "lv": "han æder / sluger"
    },
    "imperfektIndikativ": {
      "de": "er frass",
      "lv": "han åd / slugte"
    },
    "imperfektKonjunktiv": {
      "de": "er fräße",
      "lv": "han ville æde / sluge"
    },
    "partizipVergangenheit": {
      "de": "gefressen",
      "lv": "ædt / slugt"
    }
  },
  {
    "infinitiv": {
      "de": "frieren",
      "lv": "at fryse"
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
      "lv": "at give"
    },
    "praesens": {
      "de": "er gibt",
      "lv": "han giver"
    },
    "imperfektIndikativ": {
      "de": "er gab",
      "lv": "han gav"
    },
    "imperfektKonjunktiv": {
      "de": "er gäbe",
      "lv": "han ville give"
    },
    "partizipVergangenheit": {
      "de": "gegeben",
      "lv": "givet"
    }
  },
  {
    "infinitiv": {
      "de": "gedeihen",
      "lv": "at trives"
    },
    "praesens": {
      "de": "er gedeiht",
      "lv": "han trives"
    },
    "imperfektIndikativ": {
      "de": "er gedieh",
      "lv": "han trivedes"
    },
    "imperfektKonjunktiv": {
      "de": "er gediehe",
      "lv": "han ville trives"
    },
    "partizipVergangenheit": {
      "de": "gediehen (er ist)",
      "lv": "trivedes"
    }
  },
  {
    "infinitiv": {
      "de": "gehen",
      "lv": "at gå"
    },
    "praesens": {
      "de": "er geht",
      "lv": "han går"
    },
    "imperfektIndikativ": {
      "de": "er ging",
      "lv": "han gik"
    },
    "imperfektKonjunktiv": {
      "de": "er ginge",
      "lv": "han ville gå"
    },
    "partizipVergangenheit": {
      "de": "gegangen (er ist)",
      "lv": "gået"
    }
  },
  {
    "infinitiv": {
      "de": "gewinnen",
      "lv": "at vinde"
    },
    "praesens": {
      "de": "er gewinnt",
      "lv": "han vinder"
    },
    "imperfektIndikativ": {
      "de": "er gewann",
      "lv": "han vandt"
    },
    "imperfektKonjunktiv": {
      "de": "er gewönne / er gewänne",
      "lv": "han ville vinde"
    },
    "partizipVergangenheit": {
      "de": "gewonnen",
      "lv": "vundet"
    }
  },
  {
    "infinitiv": {
      "de": "haben",
      "lv": "at have"
    },
    "praesens": {
      "de": "er hat",
      "lv": "han har"
    },
    "imperfektIndikativ": {
      "de": "hatte",
      "lv": "han havde"
    },
    "imperfektKonjunktiv": {
      "de": "hatte",
      "lv": "han ville have"
    },
    "partizipVergangenheit": {
      "de": "gehabt",
      "lv": "haft"
    }
  },
  {
    "infinitiv": {
      "de": "halten",
      "lv": "at holde"
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
      "lv": "at kalde / at hedde"
    },
    "praesens": {
      "de": "er heißt",
      "lv": "han kalder / hedder"
    },
    "imperfektIndikativ": {
      "de": "er hieß",
      "lv": "han kaldte / hed"
    },
    "imperfektKonjunktiv": {
      "de": "er hieße",
      "lv": "han ville kalde / hedde"
    },
    "partizipVergangenheit": {
      "de": "geheißen",
      "lv": "kaldt / heddet"
    }
  },
  {
    "infinitiv": {
      "de": "helfen",
      "lv": "at hjælpe"
    },
    "praesens": {
      "de": "er hilft",
      "lv": "han hjælper"
    },
    "imperfektIndikativ": {
      "de": "er half",
      "lv": "han hjalp"
    },
    "imperfektKonjunktiv": {
      "de": "er hülfe / er hälfe",
      "lv": "han ville hjælpe"
    },
    "partizipVergangenheit": {
      "de": "geholfen",
      "lv": "hjulpet"
    }
  },
  {
    "infinitiv": {
      "de": "kommen",
      "lv": "at komme"
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
      "lv": "at kunne"
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
      "lv": "at krybe"
    },
    "praesens": {
      "de": "er kriecht",
      "lv": "han kryber"
    },
    "imperfektIndikativ": {
      "de": "er kroch",
      "lv": "han krøb"
    },
    "imperfektKonjunktiv": {
      "de": "er kröche",
      "lv": "han ville krybe"
    },
    "partizipVergangenheit": {
      "de": "gekrochen (er ist)",
      "lv": "krøbet"
    }
  },
  {
    "infinitiv": {
      "de": "laden",
      "lv": "at læsse / at invitere"
    },
    "praesens": {
      "de": "er lädt",
      "lv": "han læsser / inviterer"
    },
    "imperfektIndikativ": {
      "de": "er lud",
      "lv": "han læssede / inviterede"
    },
    "imperfektKonjunktiv": {
      "de": "er lüde",
      "lv": "han ville læsse / invitere"
    },
    "partizipVergangenheit": {
      "de": "geladen",
      "lv": "læsset / inviteret"
    }
  },
  {
    "infinitiv": {
      "de": "lassen",
      "lv": "at lade"
    },
    "praesens": {
      "de": "er lässt",
      "lv": "han lader"
    },
    "imperfektIndikativ": {
      "de": "er ließ",
      "lv": "han lod"
    },
    "imperfektKonjunktiv": {
      "de": "er ließe",
      "lv": "han ville lade"
    },
    "partizipVergangenheit": {
      "de": "gelassen",
      "lv": "ladet"
    }
  },
  {
    "infinitiv": {
      "de": "laufen",
      "lv": "at løbe"
    },
    "praesens": {
      "de": "er läuft",
      "lv": "han løber"
    },
    "imperfektIndikativ": {
      "de": "er lief",
      "lv": "han løb"
    },
    "imperfektKonjunktiv": {
      "de": "er liefe",
      "lv": "han ville løbe"
    },
    "partizipVergangenheit": {
      "de": "gelaufen (er ist)",
      "lv": "løbet"
    }
  },
  {
    "infinitiv": {
      "de": "leiden",
      "lv": "at lide"
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
      "lv": "lidt"
    }
  },
  {
    "infinitiv": {
      "de": "leihen",
      "lv": "at låne ud / at låne"
    },
    "praesens": {
      "de": "er leiht",
      "lv": "han låner ud / låner"
    },
    "imperfektIndikativ": {
      "de": "er lieh",
      "lv": "han lånte ud / lånte"
    },
    "imperfektKonjunktiv": {
      "de": "er liehe",
      "lv": "han ville låne ud / låne"
    },
    "partizipVergangenheit": {
      "de": "geliehen",
      "lv": "lånt ud / lånt"
    }
  },
  {
    "infinitiv": {
      "de": "lesen",
      "lv": "at læse"
    },
    "praesens": {
      "de": "er liest",
      "lv": "han læser"
    },
    "imperfektIndikativ": {
      "de": "er las",
      "lv": "han læste"
    },
    "imperfektKonjunktiv": {
      "de": "er läse",
      "lv": "han ville læse"
    },
    "partizipVergangenheit": {
      "de": "gelesen",
      "lv": "læst"
    }
  },
  {
    "infinitiv": {
      "de": "liegen",
      "lv": "at ligge"
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
      "lv": "at lyve"
    },
    "praesens": {
      "de": "er lügt",
      "lv": "han lyver"
    },
    "imperfektIndikativ": {
      "de": "er log",
      "lv": "han løj"
    },
    "imperfektKonjunktiv": {
      "de": "er löge",
      "lv": "han ville lyve"
    },
    "partizipVergangenheit": {
      "de": "gelogen",
      "lv": "løjet"
    }
  },
  {
    "infinitiv": {
      "de": "mahlen",
      "lv": "at male"
    },
    "praesens": {
      "de": "er mahlt",
      "lv": "han maler"
    },
    "imperfektIndikativ": {
      "de": "er mahlte",
      "lv": "han malede"
    },
    "imperfektKonjunktiv": {
      "de": "er malte",
      "lv": "han ville male"
    },
    "partizipVergangenheit": {
      "de": "gemahlen",
      "lv": "malet"
    }
  },
  {
    "infinitiv": {
      "de": "meiden",
      "lv": "at undgå"
    },
    "praesens": {
      "de": "er meidet",
      "lv": "han undgår"
    },
    "imperfektIndikativ": {
      "de": "er mied",
      "lv": "han undgik"
    },
    "imperfektKonjunktiv": {
      "de": "er miede",
      "lv": "han ville undgå"
    },
    "partizipVergangenheit": {
      "de": "gemieden",
      "lv": "undgået"
    }
  },
  {
    "infinitiv": {
      "de": "melken",
      "lv": "at malke"
    },
    "praesens": {
      "de": "er milkt / er melkt",
      "lv": "han malker"
    },
    "imperfektIndikativ": {
      "de": "er molk / er melkte",
      "lv": "han malkede"
    },
    "imperfektKonjunktiv": {
      "de": "er mölke / er melkte",
      "lv": "han ville malke"
    },
    "partizipVergangenheit": {
      "de": "gemolken / gemelkt",
      "lv": "malket"
    }
  },
  {
    "infinitiv": {
      "de": "messen",
      "lv": "at måle"
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
      "lv": "at mislykkes"
    },
    "praesens": {
      "de": "es misslingt",
      "lv": "det mislykkes"
    },
    "imperfektIndikativ": {
      "de": "misslang",
      "lv": "det mislykkedes"
    },
    "imperfektKonjunktiv": {
      "de": "misslang",
      "lv": "det ville mislykkes"
    },
    "partizipVergangenheit": {
      "de": "misslungen",
      "lv": "mislykkedes"
    }
  },
  {
    "infinitiv": {
      "de": "mögen",
      "lv": "at kunne lide"
    },
    "praesens": {
      "de": "er mag",
      "lv": "han kan lide"
    },
    "imperfektIndikativ": {
      "de": "mochte",
      "lv": "han kunne lide"
    },
    "imperfektKonjunktiv": {
      "de": "mochte",
      "lv": "han kunne lide"
    },
    "partizipVergangenheit": {
      "de": "gemocht",
      "lv": "kunnet lide"
    }
  },
  {
    "infinitiv": {
      "de": "müssen",
      "lv": "at måtte"
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
      "lv": "at tage"
    },
    "praesens": {
      "de": "er nimmt",
      "lv": "han tager"
    },
    "imperfektIndikativ": {
      "de": "er nahm",
      "lv": "han tog"
    },
    "imperfektKonjunktiv": {
      "de": "er nähme",
      "lv": "han ville tage"
    },
    "partizipVergangenheit": {
      "de": "genommen",
      "lv": "taget"
    }
  },
  {
    "infinitiv": {
      "de": "nennen",
      "lv": "at navngive"
    },
    "praesens": {
      "de": "er nennt",
      "lv": "han navngiver"
    },
    "imperfektIndikativ": {
      "de": "er nannte",
      "lv": "han navngav"
    },
    "imperfektKonjunktiv": {
      "de": "er nennte",
      "lv": "han ville navngive"
    },
    "partizipVergangenheit": {
      "de": "genannt",
      "lv": "navngivet"
    }
  },
  {
    "infinitiv": {
      "de": "pfeifen",
      "lv": "at fløjte"
    },
    "praesens": {
      "de": "er pfeift",
      "lv": "han fløjter"
    },
    "imperfektIndikativ": {
      "de": "er pfiff",
      "lv": "han fløjtede"
    },
    "imperfektKonjunktiv": {
      "de": "er pfiffe",
      "lv": "han ville fløjte"
    },
    "partizipVergangenheit": {
      "de": "gepfiffen",
      "lv": "fløjtet"
    }
  },
  {
    "infinitiv": {
      "de": "pflegen",
      "lv": "at pleje"
    },
    "praesens": {
      "de": "er pflegt",
      "lv": "han plejer"
    },
    "imperfektIndikativ": {
      "de": "pflegte / pflog",
      "lv": "han plejede"
    },
    "imperfektKonjunktiv": {
      "de": "pflegte / pflog",
      "lv": "han ville pleje"
    },
    "partizipVergangenheit": {
      "de": "gepflegt / gepflogen",
      "lv": "plejet"
    }
  },
  {
    "infinitiv": {
      "de": "preisen",
      "lv": "at rose"
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
      "lv": "at svulme op"
    },
    "praesens": {
      "de": "er quillt",
      "lv": "det svulmer op"
    },
    "imperfektIndikativ": {
      "de": "er quoll",
      "lv": "det svulmede op"
    },
    "imperfektKonjunktiv": {
      "de": "er quölle",
      "lv": "det ville svulme op"
    },
    "partizipVergangenheit": {
      "de": "gequollen (er ist)",
      "lv": "svulmet op"
    }
  },
  {
    "infinitiv": {
      "de": "raten",
      "lv": "at råde / at gætte"
    },
    "praesens": {
      "de": "er rät",
      "lv": "han råder / gætter"
    },
    "imperfektIndikativ": {
      "de": "er riet",
      "lv": "han rådede / gættede"
    },
    "imperfektKonjunktiv": {
      "de": "er riete",
      "lv": "han ville råde / gætte"
    },
    "partizipVergangenheit": {
      "de": "geraten",
      "lv": "rådet / gættet"
    }
  },
  {
    "infinitiv": {
      "de": "reiben",
      "lv": "at gnide"
    },
    "praesens": {
      "de": "er reibt",
      "lv": "han gnider"
    },
    "imperfektIndikativ": {
      "de": "er rieb",
      "lv": "han gned"
    },
    "imperfektKonjunktiv": {
      "de": "er riebe",
      "lv": "han ville gnide"
    },
    "partizipVergangenheit": {
      "de": "gerieben",
      "lv": "gnedet"
    }
  },
  {
    "infinitiv": {
      "de": "reißen",
      "lv": "at rive"
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
      "lv": "at ride"
    },
    "praesens": {
      "de": "er reitet",
      "lv": "han rider"
    },
    "imperfektIndikativ": {
      "de": "er ritt",
      "lv": "han red"
    },
    "imperfektKonjunktiv": {
      "de": "er ritte",
      "lv": "han ville ride"
    },
    "partizipVergangenheit": {
      "de": "geritten (er ist)",
      "lv": "redet"
    }
  },
  {
    "infinitiv": {
      "de": "rennen",
      "lv": "at rende"
    },
    "praesens": {
      "de": "er rennt",
      "lv": "han render"
    },
    "imperfektIndikativ": {
      "de": "er rannte",
      "lv": "han rendte"
    },
    "imperfektKonjunktiv": {
      "de": "er rennte",
      "lv": "han ville rende"
    },
    "partizipVergangenheit": {
      "de": "gerannt",
      "lv": "rendt"
    }
  },
  {
    "infinitiv": {
      "de": "riechen",
      "lv": "at lugte"
    },
    "praesens": {
      "de": "er riecht",
      "lv": "han lugter"
    },
    "imperfektIndikativ": {
      "de": "er roch",
      "lv": "han lugtede"
    },
    "imperfektKonjunktiv": {
      "de": "er röche",
      "lv": "han ville lugte"
    },
    "partizipVergangenheit": {
      "de": "gerochen",
      "lv": "lugtet"
    }
  },
  {
    "infinitiv": {
      "de": "ringen",
      "lv": "at kæmpe"
    },
    "praesens": {
      "de": "er ringt",
      "lv": "han kæmper"
    },
    "imperfektIndikativ": {
      "de": "er rang",
      "lv": "han kæmpede"
    },
    "imperfektKonjunktiv": {
      "de": "er ränge",
      "lv": "han ville kæmpe"
    },
    "partizipVergangenheit": {
      "de": "gerungen",
      "lv": "kæmpet"
    }
  },
  {
    "infinitiv": {
      "de": "rinnen",
      "lv": "at flyde"
    },
    "praesens": {
      "de": "er rinnt",
      "lv": "det flyder"
    },
    "imperfektIndikativ": {
      "de": "er rann",
      "lv": "det flød"
    },
    "imperfektKonjunktiv": {
      "de": "er ränne / er rönne",
      "lv": "det ville flyde"
    },
    "partizipVergangenheit": {
      "de": "geronnen (er ist)",
      "lv": "flydt"
    }
  },
  {
    "infinitiv": {
      "de": "rufen",
      "lv": "at kalde"
    },
    "praesens": {
      "de": "er ruft",
      "lv": "han kalder"
    },
    "imperfektIndikativ": {
      "de": "er rief",
      "lv": "han kaldte"
    },
    "imperfektKonjunktiv": {
      "de": "er riefe",
      "lv": "han ville kalde"
    },
    "partizipVergangenheit": {
      "de": "gerufen",
      "lv": "kaldt"
    }
  },
  {
    "infinitiv": {
      "de": "salzen",
      "lv": "at salte"
    },
    "praesens": {
      "de": "er salzt",
      "lv": "han salter"
    },
    "imperfektIndikativ": {
      "de": "er salzte",
      "lv": "han saltede"
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
      "lv": "at bælle / at drikke"
    },
    "praesens": {
      "de": "er säuft",
      "lv": "han bæller / drikker"
    },
    "imperfektIndikativ": {
      "de": "er soff",
      "lv": "han bællede / drak"
    },
    "imperfektKonjunktiv": {
      "de": "er söffe",
      "lv": "han ville bælle / drikke"
    },
    "partizipVergangenheit": {
      "de": "gesoffen",
      "lv": "bællet / drukket"
    }
  },
  {
    "infinitiv": {
      "de": "saugen",
      "lv": "at suge"
    },
    "praesens": {
      "de": "er saugt",
      "lv": "han suger"
    },
    "imperfektIndikativ": {
      "de": "er sog",
      "lv": "han sugede"
    },
    "imperfektKonjunktiv": {
      "de": "er söge",
      "lv": "han ville suge"
    },
    "partizipVergangenheit": {
      "de": "gesogen",
      "lv": "suget"
    }
  },
  {
    "infinitiv": {
      "de": "schaffen",
      "lv": "at skabe"
    },
    "praesens": {
      "de": "er schafft",
      "lv": "han skaber"
    },
    "imperfektIndikativ": {
      "de": "er schuf",
      "lv": "han skabte"
    },
    "imperfektKonjunktiv": {
      "de": "er schüfe",
      "lv": "han ville skabe"
    },
    "partizipVergangenheit": {
      "de": "geschaffen",
      "lv": "skabt"
    }
  },
  {
    "infinitiv": {
      "de": "schallen",
      "lv": "at lyde"
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
      "lv": "at skille / at skilles"
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
      "lv": "at skinne / at synes"
    },
    "praesens": {
      "de": "er scheint",
      "lv": "han skinner / synes"
    },
    "imperfektIndikativ": {
      "de": "er schien",
      "lv": "han skinnede / syntes"
    },
    "imperfektKonjunktiv": {
      "de": "er schiene",
      "lv": "han ville skinne / synes"
    },
    "partizipVergangenheit": {
      "de": "geschienen",
      "lv": "skinnet / syntes"
    }
  },
  {
    "infinitiv": {
      "de": "schelten",
      "lv": "at skælde ud"
    },
    "praesens": {
      "de": "er schilt",
      "lv": "han skælder ud"
    },
    "imperfektIndikativ": {
      "de": "er schalt",
      "lv": "han skældte ud"
    },
    "imperfektKonjunktiv": {
      "de": "er schölte / er schälte",
      "lv": "han ville skælde ud"
    },
    "partizipVergangenheit": {
      "de": "gescholten",
      "lv": "skældt ud"
    }
  },
  {
    "infinitiv": {
      "de": "scheren",
      "lv": "at klippe"
    },
    "praesens": {
      "de": "er schert",
      "lv": "han klipper"
    },
    "imperfektIndikativ": {
      "de": "schor / scherte",
      "lv": "han klippede"
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
      "lv": "at skubbe"
    },
    "praesens": {
      "de": "er schiebt",
      "lv": "han skubber"
    },
    "imperfektIndikativ": {
      "de": "er schob",
      "lv": "han skubbede"
    },
    "imperfektKonjunktiv": {
      "de": "er schöbe",
      "lv": "han ville skubbe"
    },
    "partizipVergangenheit": {
      "de": "geschoben",
      "lv": "skubbet"
    }
  },
  {
    "infinitiv": {
      "de": "schießen",
      "lv": "at skyde"
    },
    "praesens": {
      "de": "er schießt",
      "lv": "han skyder"
    },
    "imperfektIndikativ": {
      "de": "er schoss",
      "lv": "han skød"
    },
    "imperfektKonjunktiv": {
      "de": "er schösse",
      "lv": "han ville skyde"
    },
    "partizipVergangenheit": {
      "de": "geschossen",
      "lv": "skudt"
    }
  },
  {
    "infinitiv": {
      "de": "schinden",
      "lv": "at plage"
    },
    "praesens": {
      "de": "er schindet",
      "lv": "han plager"
    },
    "imperfektIndikativ": {
      "de": "schindete",
      "lv": "han plagede"
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
      "lv": "at sove"
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
      "lv": "at slå"
    },
    "praesens": {
      "de": "er schlägt",
      "lv": "han slår"
    },
    "imperfektIndikativ": {
      "de": "er schlug",
      "lv": "han slog"
    },
    "imperfektKonjunktiv": {
      "de": "er schlüge",
      "lv": "han ville slå"
    },
    "partizipVergangenheit": {
      "de": "geschlagen",
      "lv": "slået"
    }
  },
  {
    "infinitiv": {
      "de": "schleichen",
      "lv": "at snige sig"
    },
    "praesens": {
      "de": "er schleicht",
      "lv": "han sniger sig"
    },
    "imperfektIndikativ": {
      "de": "er schlich",
      "lv": "han sneg sig"
    },
    "imperfektKonjunktiv": {
      "de": "er schliche",
      "lv": "han ville snige sig"
    },
    "partizipVergangenheit": {
      "de": "geschlichen (er ist)",
      "lv": "sneget"
    }
  },
  {
    "infinitiv": {
      "de": "schleifen",
      "lv": "at slibe"
    },
    "praesens": {
      "de": "er schleift",
      "lv": "han sliber"
    },
    "imperfektIndikativ": {
      "de": "er schliff",
      "lv": "han sleb"
    },
    "imperfektKonjunktiv": {
      "de": "er schliffe",
      "lv": "han ville slibe"
    },
    "partizipVergangenheit": {
      "de": "geschliffen",
      "lv": "slebet"
    }
  },
  {
    "infinitiv": {
      "de": "schließen",
      "lv": "at lukke"
    },
    "praesens": {
      "de": "er schließt",
      "lv": "han lukker"
    },
    "imperfektIndikativ": {
      "de": "er schloss",
      "lv": "han lukkede"
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
      "lv": "at sluge"
    },
    "praesens": {
      "de": "er schlingt",
      "lv": "han sluger"
    },
    "imperfektIndikativ": {
      "de": "er schlang",
      "lv": "han slugte"
    },
    "imperfektKonjunktiv": {
      "de": "er schlänge",
      "lv": "han ville sluge"
    },
    "partizipVergangenheit": {
      "de": "geschlungen",
      "lv": "slugt"
    }
  },
  {
    "infinitiv": {
      "de": "schmeißen",
      "lv": "at smide"
    },
    "praesens": {
      "de": "er schmeißt",
      "lv": "han smider"
    },
    "imperfektIndikativ": {
      "de": "er schmiss",
      "lv": "han smed"
    },
    "imperfektKonjunktiv": {
      "de": "er schmisse",
      "lv": "han ville smide"
    },
    "partizipVergangenheit": {
      "de": "geschmissen",
      "lv": "smidt"
    }
  },
  {
    "infinitiv": {
      "de": "schmelzen",
      "lv": "at smelte"
    },
    "praesens": {
      "de": "er schmilzt",
      "lv": "det smelter"
    },
    "imperfektIndikativ": {
      "de": "er schmolz",
      "lv": "det smeltede"
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
      "lv": "at fnyse"
    },
    "praesens": {
      "de": "er schnaubt",
      "lv": "han fnyser"
    },
    "imperfektIndikativ": {
      "de": "schnaubte / schnob",
      "lv": "han fnøs"
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
      "lv": "at skære"
    },
    "praesens": {
      "de": "er schneidet",
      "lv": "han skærer"
    },
    "imperfektIndikativ": {
      "de": "er schnitt",
      "lv": "han skar"
    },
    "imperfektKonjunktiv": {
      "de": "er schnitte",
      "lv": "han ville skære"
    },
    "partizipVergangenheit": {
      "de": "geschnitten",
      "lv": "skåret"
    }
  },
  {
    "infinitiv": {
      "de": "schreiben",
      "lv": "at skrive"
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
      "lv": "at skrige"
    },
    "praesens": {
      "de": "er schreit",
      "lv": "han skriger"
    },
    "imperfektIndikativ": {
      "de": "er schrie",
      "lv": "han skreg"
    },
    "imperfektKonjunktiv": {
      "de": "er schriee",
      "lv": "han ville skrige"
    },
    "partizipVergangenheit": {
      "de": "geschrien",
      "lv": "skreget"
    }
  },
  {
    "infinitiv": {
      "de": "schreiten",
      "lv": "at skride"
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
      "lv": "at tie"
    },
    "praesens": {
      "de": "er schweigt",
      "lv": "han tier"
    },
    "imperfektIndikativ": {
      "de": "er schwieg",
      "lv": "han tav"
    },
    "imperfektKonjunktiv": {
      "de": "er schwiege",
      "lv": "han ville tie"
    },
    "partizipVergangenheit": {
      "de": "geschwiegen",
      "lv": "tiet"
    }
  },
  {
    "infinitiv": {
      "de": "schwellen",
      "lv": "at svulme"
    },
    "praesens": {
      "de": "er schwillt",
      "lv": "det svulmer"
    },
    "imperfektIndikativ": {
      "de": "er schwoll",
      "lv": "det svulmede"
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
      "lv": "at svømme"
    },
    "praesens": {
      "de": "er schwimmt",
      "lv": "han svømmer"
    },
    "imperfektIndikativ": {
      "de": "er schwamm",
      "lv": "han svømmede"
    },
    "imperfektKonjunktiv": {
      "de": "er schwömme / er schwämme",
      "lv": "han ville svømme"
    },
    "partizipVergangenheit": {
      "de": "geschwommen (er ist)",
      "lv": "svømmet"
    }
  },
  {
    "infinitiv": {
      "de": "schwinden",
      "lv": "at svinde"
    },
    "praesens": {
      "de": "er schwindet",
      "lv": "det svinder"
    },
    "imperfektIndikativ": {
      "de": "er schwand",
      "lv": "det svandt"
    },
    "imperfektKonjunktiv": {
      "de": "er schwände",
      "lv": "det ville svinde"
    },
    "partizipVergangenheit": {
      "de": "geschwunden (er ist)",
      "lv": "svundet"
    }
  },
  {
    "infinitiv": {
      "de": "schwingen",
      "lv": "at svinge"
    },
    "praesens": {
      "de": "er schwingt",
      "lv": "han svinger"
    },
    "imperfektIndikativ": {
      "de": "er schwang",
      "lv": "han svingede"
    },
    "imperfektKonjunktiv": {
      "de": "er schwänge",
      "lv": "han ville svinge"
    },
    "partizipVergangenheit": {
      "de": "geschwungen",
      "lv": "svinget"
    }
  },
  {
    "infinitiv": {
      "de": "schwören",
      "lv": "at sværge"
    },
    "praesens": {
      "de": "er schwört",
      "lv": "han sværger"
    },
    "imperfektIndikativ": {
      "de": "er schwur / er schwor",
      "lv": "han svor"
    },
    "imperfektKonjunktiv": {
      "de": "er schwöre",
      "lv": "han ville sværge"
    },
    "partizipVergangenheit": {
      "de": "geschworen",
      "lv": "svoret"
    }
  },
  {
    "infinitiv": {
      "de": "sehen",
      "lv": "at se"
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
      "lv": "set"
    }
  },
  {
    "infinitiv": {
      "de": "sein",
      "lv": "at være"
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
      "lv": "været"
    }
  },
  {
    "infinitiv": {
      "de": "senden",
      "lv": "at sende"
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
      "lv": "at koge"
    },
    "praesens": {
      "de": "er siedet",
      "lv": "han koger"
    },
    "imperfektIndikativ": {
      "de": "sott / siedete",
      "lv": "han kogte"
    },
    "imperfektKonjunktiv": {
      "de": "sott / siedete",
      "lv": "han ville koge"
    },
    "partizipVergangenheit": {
      "de": "gesotten / gesiedet",
      "lv": "kogt"
    }
  },
  {
    "infinitiv": {
      "de": "singen",
      "lv": "at synge"
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
      "lv": "at synke"
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
      "lv": "at grunde"
    },
    "praesens": {
      "de": "er sinnt",
      "lv": "han grunder"
    },
    "imperfektIndikativ": {
      "de": "er sann",
      "lv": "han grundede"
    },
    "imperfektKonjunktiv": {
      "de": "er sönne / er sänne",
      "lv": "han ville grunde"
    },
    "partizipVergangenheit": {
      "de": "gesonnen",
      "lv": "grundet"
    }
  },
  {
    "infinitiv": {
      "de": "sitzen",
      "lv": "at sidde"
    },
    "praesens": {
      "de": "er sitzt",
      "lv": "han sidder"
    },
    "imperfektIndikativ": {
      "de": "er sass",
      "lv": "han sad"
    },
    "imperfektKonjunktiv": {
      "de": "er säße",
      "lv": "han ville sidde"
    },
    "partizipVergangenheit": {
      "de": "gesessen",
      "lv": "siddet"
    }
  },
  {
    "infinitiv": {
      "de": "sollen",
      "lv": "at skulle"
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
      "lv": "at spytte"
    },
    "praesens": {
      "de": "er speit",
      "lv": "han spytter"
    },
    "imperfektIndikativ": {
      "de": "er spie",
      "lv": "han spyttede"
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
      "lv": "at spinde"
    },
    "praesens": {
      "de": "er spinnt",
      "lv": "han spinder"
    },
    "imperfektIndikativ": {
      "de": "er spann",
      "lv": "han spandt"
    },
    "imperfektKonjunktiv": {
      "de": "er spönne / er spänne",
      "lv": "han ville spinde"
    },
    "partizipVergangenheit": {
      "de": "gesponnen",
      "lv": "spundet"
    }
  },
  {
    "infinitiv": {
      "de": "spleißen",
      "lv": "at forbinde"
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
      "lv": "at tale"
    },
    "praesens": {
      "de": "er spricht",
      "lv": "han taler"
    },
    "imperfektIndikativ": {
      "de": "er sprach",
      "lv": "han talte"
    },
    "imperfektKonjunktiv": {
      "de": "er spräche",
      "lv": "han ville tale"
    },
    "partizipVergangenheit": {
      "de": "gesprochen",
      "lv": "talt"
    }
  },
  {
    "infinitiv": {
      "de": "sprießen",
      "lv": "at spire"
    },
    "praesens": {
      "de": "er sprießt",
      "lv": "det spirer"
    },
    "imperfektIndikativ": {
      "de": "er spross",
      "lv": "det spirede"
    },
    "imperfektKonjunktiv": {
      "de": "er sprösse",
      "lv": "det ville spire"
    },
    "partizipVergangenheit": {
      "de": "gesprossen (er ist)",
      "lv": "spiret"
    }
  },
  {
    "infinitiv": {
      "de": "springen",
      "lv": "at hoppe"
    },
    "praesens": {
      "de": "er springt",
      "lv": "han hopper"
    },
    "imperfektIndikativ": {
      "de": "er sprang",
      "lv": "han hoppede"
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
      "lv": "at stikke"
    },
    "praesens": {
      "de": "er sticht",
      "lv": "han stikker"
    },
    "imperfektIndikativ": {
      "de": "er stach",
      "lv": "han stak"
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
      "lv": "at putte / at stikke"
    },
    "praesens": {
      "de": "er steckt",
      "lv": "han putter / stikker"
    },
    "imperfektIndikativ": {
      "de": "stak / steckte",
      "lv": "han puttede / stak"
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
      "lv": "at stå"
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
      "lv": "stået"
    }
  },
  {
    "infinitiv": {
      "de": "stehlen",
      "lv": "at stjæle"
    },
    "praesens": {
      "de": "er stiehlt",
      "lv": "han stjæler"
    },
    "imperfektIndikativ": {
      "de": "er stahl",
      "lv": "han stjal"
    },
    "imperfektKonjunktiv": {
      "de": "er stöhle / er stähle",
      "lv": "han ville stjæle"
    },
    "partizipVergangenheit": {
      "de": "gestohlen",
      "lv": "stjålet"
    }
  },
  {
    "infinitiv": {
      "de": "steigen",
      "lv": "at stige"
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
      "lv": "at dø"
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
      "lv": "død"
    }
  },
  {
    "infinitiv": {
      "de": "stinken",
      "lv": "at stinke"
    },
    "praesens": {
      "de": "es stinkt",
      "lv": "det stinker"
    },
    "imperfektIndikativ": {
      "de": "stank",
      "lv": "det stank"
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
      "lv": "at støde"
    },
    "praesens": {
      "de": "er stößt",
      "lv": "han støder"
    },
    "imperfektIndikativ": {
      "de": "er stieß",
      "lv": "han stødte"
    },
    "imperfektKonjunktiv": {
      "de": "er stieße",
      "lv": "han ville støde"
    },
    "partizipVergangenheit": {
      "de": "gestoßen",
      "lv": "stødt"
    }
  },
  {
    "infinitiv": {
      "de": "streichen",
      "lv": "at male / at overstrege"
    },
    "praesens": {
      "de": "er streicht",
      "lv": "han maler / overstreger"
    },
    "imperfektIndikativ": {
      "de": "er strich",
      "lv": "han malede / overstregede"
    },
    "imperfektKonjunktiv": {
      "de": "er striche",
      "lv": "han ville male / overstrege"
    },
    "partizipVergangenheit": {
      "de": "gestrichen",
      "lv": "malet / overstreget"
    }
  },
  {
    "infinitiv": {
      "de": "streiten",
      "lv": "at skændes"
    },
    "praesens": {
      "de": "er streitet",
      "lv": "han skændes"
    },
    "imperfektIndikativ": {
      "de": "er stritt",
      "lv": "han skændtes"
    },
    "imperfektKonjunktiv": {
      "de": "er stritte",
      "lv": "han ville skændes"
    },
    "partizipVergangenheit": {
      "de": "gestritten",
      "lv": "skændtes"
    }
  },
  {
    "infinitiv": {
      "de": "tragen",
      "lv": "at bære"
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
      "lv": "at møde"
    },
    "praesens": {
      "de": "er trifft",
      "lv": "han møder"
    },
    "imperfektIndikativ": {
      "de": "er traf",
      "lv": "han mødte"
    },
    "imperfektKonjunktiv": {
      "de": "er träfe",
      "lv": "han ville møde"
    },
    "partizipVergangenheit": {
      "de": "getroffen",
      "lv": "mødt"
    }
  },
  {
    "infinitiv": {
      "de": "treiben",
      "lv": "at drive"
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
      "lv": "at træde / at gå"
    },
    "praesens": {
      "de": "er tritt",
      "lv": "han træder / går"
    },
    "imperfektIndikativ": {
      "de": "er trat",
      "lv": "han trådte / gik"
    },
    "imperfektKonjunktiv": {
      "de": "er träte",
      "lv": "han ville træde / gå"
    },
    "partizipVergangenheit": {
      "de": "getreten (er ist)",
      "lv": "trådt / gået"
    }
  },
  {
    "infinitiv": {
      "de": "trinken",
      "lv": "at drikke"
    },
    "praesens": {
      "de": "er trinkt",
      "lv": "han drikker"
    },
    "imperfektIndikativ": {
      "de": "er trank",
      "lv": "han drak"
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
      "lv": "at bedrage"
    },
    "praesens": {
      "de": "er trögt",
      "lv": "han bedrager"
    },
    "imperfektIndikativ": {
      "de": "er trog",
      "lv": "han bedrog"
    },
    "imperfektKonjunktiv": {
      "de": "er tröge",
      "lv": "han ville bedrage"
    },
    "partizipVergangenheit": {
      "de": "getrogen",
      "lv": "bedraget"
    }
  },
  {
    "infinitiv": {
      "de": "tun",
      "lv": "at gøre"
    },
    "praesens": {
      "de": "er tut",
      "lv": "han gør"
    },
    "imperfektIndikativ": {
      "de": "er tat",
      "lv": "han gjorde"
    },
    "imperfektKonjunktiv": {
      "de": "er täte",
      "lv": "han ville gøre"
    },
    "partizipVergangenheit": {
      "de": "getan",
      "lv": "gjort"
    }
  },
  {
    "infinitiv": {
      "de": "verderben",
      "lv": "at ødelægge"
    },
    "praesens": {
      "de": "er verdirbt",
      "lv": "han ødelægger"
    },
    "imperfektIndikativ": {
      "de": "er verdarb",
      "lv": "han ødelagde"
    },
    "imperfektKonjunktiv": {
      "de": "er verdürbe",
      "lv": "han ville ødelægge"
    },
    "partizipVergangenheit": {
      "de": "verdorben",
      "lv": "ødelagt"
    }
  },
  {
    "infinitiv": {
      "de": "verdrießen",
      "lv": "at ærgre"
    },
    "praesens": {
      "de": "er verdrießt",
      "lv": "han ærgrer"
    },
    "imperfektIndikativ": {
      "de": "er verdross",
      "lv": "han ærgrede"
    },
    "imperfektKonjunktiv": {
      "de": "er verdrösse",
      "lv": "han ville ærgre"
    },
    "partizipVergangenheit": {
      "de": "verdrossen",
      "lv": "ærgret"
    }
  },
  {
    "infinitiv": {
      "de": "vergessen",
      "lv": "at glemme"
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
      "lv": "at tabe"
    },
    "praesens": {
      "de": "er verliert",
      "lv": "han taber"
    },
    "imperfektIndikativ": {
      "de": "er verlor",
      "lv": "han tabte"
    },
    "imperfektKonjunktiv": {
      "de": "er verlöre",
      "lv": "han ville tabe"
    },
    "partizipVergangenheit": {
      "de": "verloren",
      "lv": "tabt"
    }
  },
  {
    "infinitiv": {
      "de": "wachsen",
      "lv": "at vokse"
    },
    "praesens": {
      "de": "er wächst",
      "lv": "han vokser"
    },
    "imperfektIndikativ": {
      "de": "er wuchs",
      "lv": "han voksede"
    },
    "imperfektKonjunktiv": {
      "de": "er wüchse",
      "lv": "han ville vokse"
    },
    "partizipVergangenheit": {
      "de": "gewachsen (er ist)",
      "lv": "vokset"
    }
  },
  {
    "infinitiv": {
      "de": "waschen",
      "lv": "at vaske"
    },
    "praesens": {
      "de": "er wäscht",
      "lv": "han vasker"
    },
    "imperfektIndikativ": {
      "de": "er wusch",
      "lv": "han vaskede"
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
      "lv": "at væve"
    },
    "praesens": {
      "de": "er webt",
      "lv": "han væver"
    },
    "imperfektIndikativ": {
      "de": "wob",
      "lv": "han vævede"
    },
    "imperfektKonjunktiv": {
      "de": "wob",
      "lv": "han ville væve"
    },
    "partizipVergangenheit": {
      "de": "gewoben",
      "lv": "vævet"
    }
  },
  {
    "infinitiv": {
      "de": "weichen",
      "lv": "at trække sig tilbage"
    },
    "praesens": {
      "de": "er weicht",
      "lv": "han trækker sig tilbage"
    },
    "imperfektIndikativ": {
      "de": "er wich",
      "lv": "han trak sig tilbage"
    },
    "imperfektKonjunktiv": {
      "de": "er wiche",
      "lv": "han ville trække sig tilbage"
    },
    "partizipVergangenheit": {
      "de": "gewichen (er ist)",
      "lv": "trukket tilbage"
    }
  },
  {
    "infinitiv": {
      "de": "weisen",
      "lv": "at vise"
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
      "lv": "at dreje / at vende"
    },
    "praesens": {
      "de": "er wendet",
      "lv": "han drejer / vender"
    },
    "imperfektIndikativ": {
      "de": "er wandte / es wendete",
      "lv": "han drejede / vendte"
    },
    "imperfektKonjunktiv": {
      "de": "er wendete",
      "lv": "han ville dreje / vende"
    },
    "partizipVergangenheit": {
      "de": "gewandt / gewendet",
      "lv": "drejet / vendt"
    }
  },
  {
    "infinitiv": {
      "de": "werben",
      "lv": "at bejle"
    },
    "praesens": {
      "de": "er wirbt",
      "lv": "han bejler"
    },
    "imperfektIndikativ": {
      "de": "er warb",
      "lv": "han bejlede"
    },
    "imperfektKonjunktiv": {
      "de": "er würbe",
      "lv": "han ville bejle"
    },
    "partizipVergangenheit": {
      "de": "geworben",
      "lv": "bejlet"
    }
  },
  {
    "infinitiv": {
      "de": "werden",
      "lv": "at blive"
    },
    "praesens": {
      "de": "er wird",
      "lv": "han bliver"
    },
    "imperfektIndikativ": {
      "de": "wurde",
      "lv": "han blev"
    },
    "imperfektKonjunktiv": {
      "de": "wurde",
      "lv": "han ville blive"
    },
    "partizipVergangenheit": {
      "de": "geworden",
      "lv": "blevet"
    }
  },
  {
    "infinitiv": {
      "de": "werfen",
      "lv": "at kaste"
    },
    "praesens": {
      "de": "er wirft",
      "lv": "han kaster"
    },
    "imperfektIndikativ": {
      "de": "er warf",
      "lv": "han kastede"
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
      "lv": "at veje"
    },
    "praesens": {
      "de": "er wiegt",
      "lv": "han vejer"
    },
    "imperfektIndikativ": {
      "de": "er wog",
      "lv": "han vejede"
    },
    "imperfektKonjunktiv": {
      "de": "er wöge",
      "lv": "han ville veje"
    },
    "partizipVergangenheit": {
      "de": "gewogen",
      "lv": "vejet"
    }
  },
  {
    "infinitiv": {
      "de": "winden",
      "lv": "at sno"
    },
    "praesens": {
      "de": "er windet",
      "lv": "han snor"
    },
    "imperfektIndikativ": {
      "de": "er wand",
      "lv": "han snoede"
    },
    "imperfektKonjunktiv": {
      "de": "er wände",
      "lv": "han ville sno"
    },
    "partizipVergangenheit": {
      "de": "gewunden",
      "lv": "snoet"
    }
  },
  {
    "infinitiv": {
      "de": "wissen",
      "lv": "at vide"
    },
    "praesens": {
      "de": "er weiß",
      "lv": "han ved"
    },
    "imperfektIndikativ": {
      "de": "er wusste",
      "lv": "han vidste"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsste",
      "lv": "han ville vide"
    },
    "partizipVergangenheit": {
      "de": "gewusst",
      "lv": "vidst"
    }
  },
  {
    "infinitiv": {
      "de": "wollen",
      "lv": "at ville"
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
      "lv": "at vride / at presse"
    },
    "praesens": {
      "de": "er wringt",
      "lv": "han vrider / presser"
    },
    "imperfektIndikativ": {
      "de": "wrang",
      "lv": "han vred / pressede"
    },
    "imperfektKonjunktiv": {
      "de": "wrang",
      "lv": "han ville vride / presse"
    },
    "partizipVergangenheit": {
      "de": "gewrungen",
      "lv": "vredet / presset"
    }
  },
  {
    "infinitiv": {
      "de": "zeihen",
      "lv": "at beskylde"
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
      "lv": "at trække"
    },
    "praesens": {
      "de": "er zieht",
      "lv": "han trækker"
    },
    "imperfektIndikativ": {
      "de": "er zog",
      "lv": "han trak"
    },
    "imperfektKonjunktiv": {
      "de": "er zöge",
      "lv": "han ville trække"
    },
    "partizipVergangenheit": {
      "de": "gezogen",
      "lv": "trukket"
    }
  },
  {
    "infinitiv": {
      "de": "zwingen",
      "lv": "at tvinge"
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
      "lv": "at modtage"
    },
    "praesens": {
      "de": "er empfängt",
      "lv": "han modtager"
    },
    "imperfektIndikativ": {
      "de": "er empfing",
      "lv": "han modtog"
    },
    "imperfektKonjunktiv": {
      "de": "er empfinge",
      "lv": "han ville modtage"
    },
    "partizipVergangenheit": {
      "de": "empfangen",
      "lv": "modtaget"
    }
  },
  {
    "infinitiv": {
      "de": "erwägen",
      "lv": "at overveje"
    },
    "praesens": {
      "de": "er erwägt",
      "lv": "han overvejer"
    },
    "imperfektIndikativ": {
      "de": "er erwog",
      "lv": "han overvejede"
    },
    "imperfektKonjunktiv": {
      "de": "er erwöge",
      "lv": "han ville overveje"
    },
    "partizipVergangenheit": {
      "de": "erwogen",
      "lv": "overvejet"
    }
  },
  {
    "infinitiv": {
      "de": "fechten",
      "lv": "at kæmpe"
    },
    "praesens": {
      "de": "er ficht",
      "lv": "han kæmper"
    },
    "imperfektIndikativ": {
      "de": "er focht",
      "lv": "han kæmpede"
    },
    "imperfektKonjunktiv": {
      "de": "er föchte",
      "lv": "han ville kæmpe"
    },
    "partizipVergangenheit": {
      "de": "gefochten",
      "lv": "kæmpet"
    }
  },
  {
    "infinitiv": {
      "de": "flechten",
      "lv": "at flette"
    },
    "praesens": {
      "de": "er flicht",
      "lv": "han fletter"
    },
    "imperfektIndikativ": {
      "de": "er flocht",
      "lv": "han flettede"
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
      "lv": "at hænge"
    },
    "praesens": {
      "de": "er hängt",
      "lv": "han hænger"
    },
    "imperfektIndikativ": {
      "de": "er hing",
      "lv": "han hang"
    },
    "imperfektKonjunktiv": {
      "de": "er hinge",
      "lv": "han ville hænge"
    },
    "partizipVergangenheit": {
      "de": "gehangen",
      "lv": "hængt"
    }
  },
  {
    "infinitiv": {
      "de": "spalten",
      "lv": "at kløve"
    },
    "praesens": {
      "de": "er spaltet",
      "lv": "han kløver"
    },
    "imperfektIndikativ": {
      "de": "er spaltete",
      "lv": "han kløvede"
    },
    "imperfektKonjunktiv": {
      "de": "er spaltete",
      "lv": "han ville kløve"
    },
    "partizipVergangenheit": {
      "de": "gespalten",
      "lv": "kløvet"
    }
  },
  {
    "infinitiv": {
      "de": "verzeihen",
      "lv": "at tilgive"
    },
    "praesens": {
      "de": "er verzeiht",
      "lv": "han tilgiver"
    },
    "imperfektIndikativ": {
      "de": "er verzieh",
      "lv": "han tilgav"
    },
    "imperfektKonjunktiv": {
      "de": "er verziehe",
      "lv": "han ville tilgive"
    },
    "partizipVergangenheit": {
      "de": "verziehen",
      "lv": "tilgivet"
    }
  }
];

window.VERB_ENTRIES = VERB_ENTRIES;

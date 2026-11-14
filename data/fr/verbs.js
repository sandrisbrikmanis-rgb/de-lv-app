const VERB_ENTRIES = [
  {
    "infinitiv": {
      "de": "backen",
      "lv": "cuire"
    },
    "praesens": {
      "de": "er bäckt",
      "lv": "il cuit"
    },
    "imperfektIndikativ": {
      "de": "er buk",
      "lv": "il cuisit"
    },
    "imperfektKonjunktiv": {
      "de": "er büke",
      "lv": "il cuirait"
    },
    "partizipVergangenheit": {
      "de": "gebacken",
      "lv": "cuit"
    }
  },
  {
    "infinitiv": {
      "de": "befehlen",
      "lv": "ordonner"
    },
    "praesens": {
      "de": "er befiehlt",
      "lv": "il ordonne"
    },
    "imperfektIndikativ": {
      "de": "er befahl",
      "lv": "il ordonna"
    },
    "imperfektKonjunktiv": {
      "de": "er beföhle",
      "lv": "il ordonnerait"
    },
    "partizipVergangenheit": {
      "de": "befohlen",
      "lv": "ordonné"
    }
  },
  {
    "infinitiv": {
      "de": "beginnen",
      "lv": "commencer"
    },
    "praesens": {
      "de": "er beginnt",
      "lv": "il commence"
    },
    "imperfektIndikativ": {
      "de": "er begann",
      "lv": "il commença"
    },
    "imperfektKonjunktiv": {
      "de": "er begönne / er begänne",
      "lv": "il commencerait"
    },
    "partizipVergangenheit": {
      "de": "begonnen",
      "lv": "commencé"
    }
  },
  {
    "infinitiv": {
      "de": "beißen",
      "lv": "mordre"
    },
    "praesens": {
      "de": "er beißt",
      "lv": "il mord"
    },
    "imperfektIndikativ": {
      "de": "er biss",
      "lv": "il mordit"
    },
    "imperfektKonjunktiv": {
      "de": "er bisse",
      "lv": "il mordrait"
    },
    "partizipVergangenheit": {
      "de": "gebissen",
      "lv": "mordu"
    }
  },
  {
    "infinitiv": {
      "de": "bergen",
      "lv": "sauver / cacher"
    },
    "praesens": {
      "de": "er birgt",
      "lv": "il sauve / cache"
    },
    "imperfektIndikativ": {
      "de": "er barg",
      "lv": "il sauva / cacha"
    },
    "imperfektKonjunktiv": {
      "de": "er bürge / er bärge",
      "lv": "il sauverait / cacherait"
    },
    "partizipVergangenheit": {
      "de": "geborgen",
      "lv": "sauvé / caché"
    }
  },
  {
    "infinitiv": {
      "de": "bersten",
      "lv": "éclater"
    },
    "praesens": {
      "de": "er birst",
      "lv": "il éclate"
    },
    "imperfektIndikativ": {
      "de": "er barst / er borst",
      "lv": "il éclata"
    },
    "imperfektKonjunktiv": {
      "de": "er bärste / er börste",
      "lv": "il éclaterait"
    },
    "partizipVergangenheit": {
      "de": "geborsten (er ist)",
      "lv": "éclaté"
    }
  },
  {
    "infinitiv": {
      "de": "bewegen",
      "lv": "inciter"
    },
    "praesens": {
      "de": "er bewegt",
      "lv": "il incite"
    },
    "imperfektIndikativ": {
      "de": "er bewog",
      "lv": "il incita"
    },
    "imperfektKonjunktiv": {
      "de": "er bewöge",
      "lv": "il inciterait"
    },
    "partizipVergangenheit": {
      "de": "bewogen",
      "lv": "incité"
    }
  },
  {
    "infinitiv": {
      "de": "biegen",
      "lv": "plier"
    },
    "praesens": {
      "de": "er biegt",
      "lv": "il plie"
    },
    "imperfektIndikativ": {
      "de": "er bog",
      "lv": "il plia"
    },
    "imperfektKonjunktiv": {
      "de": "er böge",
      "lv": "il plierait"
    },
    "partizipVergangenheit": {
      "de": "gebogen",
      "lv": "plié"
    }
  },
  {
    "infinitiv": {
      "de": "bieten",
      "lv": "offrir"
    },
    "praesens": {
      "de": "er bietet",
      "lv": "il offre"
    },
    "imperfektIndikativ": {
      "de": "er bot",
      "lv": "il offrit"
    },
    "imperfektKonjunktiv": {
      "de": "er böte",
      "lv": "il offrirait"
    },
    "partizipVergangenheit": {
      "de": "geboten",
      "lv": "offert"
    }
  },
  {
    "infinitiv": {
      "de": "binden",
      "lv": "lier"
    },
    "praesens": {
      "de": "er bindet",
      "lv": "il lie"
    },
    "imperfektIndikativ": {
      "de": "er band",
      "lv": "il lia"
    },
    "imperfektKonjunktiv": {
      "de": "er bände",
      "lv": "il lierait"
    },
    "partizipVergangenheit": {
      "de": "gebunden",
      "lv": "lié"
    }
  },
  {
    "infinitiv": {
      "de": "bitten",
      "lv": "demander"
    },
    "praesens": {
      "de": "er bittet",
      "lv": "il demande"
    },
    "imperfektIndikativ": {
      "de": "er bat",
      "lv": "il demanda"
    },
    "imperfektKonjunktiv": {
      "de": "er bäte",
      "lv": "il demanderait"
    },
    "partizipVergangenheit": {
      "de": "gebeten",
      "lv": "demandé"
    }
  },
  {
    "infinitiv": {
      "de": "blasen",
      "lv": "souffler"
    },
    "praesens": {
      "de": "er bläst",
      "lv": "il souffle"
    },
    "imperfektIndikativ": {
      "de": "er blies",
      "lv": "il souffla"
    },
    "imperfektKonjunktiv": {
      "de": "er bliese",
      "lv": "il soufflerait"
    },
    "partizipVergangenheit": {
      "de": "geblasen",
      "lv": "soufflé"
    }
  },
  {
    "infinitiv": {
      "de": "gären",
      "lv": "fermenter"
    },
    "praesens": {
      "de": "es gärt",
      "lv": "il fermente"
    },
    "imperfektIndikativ": {
      "de": "es gor / es gärte",
      "lv": "il fermenta"
    },
    "imperfektKonjunktiv": {
      "de": "es göre / es gärte",
      "lv": "il fermenterait"
    },
    "partizipVergangenheit": {
      "de": "gegoren / gegärt",
      "lv": "fermenté"
    }
  },
  {
    "infinitiv": {
      "de": "gebären",
      "lv": "mettre au monde"
    },
    "praesens": {
      "de": "sie gebiert",
      "lv": "elle met au monde"
    },
    "imperfektIndikativ": {
      "de": "sie gebar",
      "lv": "elle mit au monde"
    },
    "imperfektKonjunktiv": {
      "de": "sie gebäre",
      "lv": "elle mettrait au monde"
    },
    "partizipVergangenheit": {
      "de": "geboren",
      "lv": "mis au monde"
    }
  },
  {
    "infinitiv": {
      "de": "gelingen",
      "lv": "réussir"
    },
    "praesens": {
      "de": "es gelingt",
      "lv": "il réussit"
    },
    "imperfektIndikativ": {
      "de": "es gelang",
      "lv": "il réussit"
    },
    "imperfektKonjunktiv": {
      "de": "es gelänge",
      "lv": "il réussirait"
    },
    "partizipVergangenheit": {
      "de": "gelungen (es ist)",
      "lv": "réussi"
    }
  },
  {
    "infinitiv": {
      "de": "gelten",
      "lv": "servir / être valable"
    },
    "praesens": {
      "de": "er gilt",
      "lv": "il sert / est valable"
    },
    "imperfektIndikativ": {
      "de": "er galt",
      "lv": "il servit / fut valable"
    },
    "imperfektKonjunktiv": {
      "de": "er gölte / es gälte",
      "lv": "il servirait / serait valable"
    },
    "partizipVergangenheit": {
      "de": "gegolten",
      "lv": "servi / été valable"
    }
  },
  {
    "infinitiv": {
      "de": "genesen",
      "lv": "se rétablir"
    },
    "praesens": {
      "de": "er genest",
      "lv": "il se rétablit"
    },
    "imperfektIndikativ": {
      "de": "er genas",
      "lv": "il se rétablit"
    },
    "imperfektKonjunktiv": {
      "de": "er genäse",
      "lv": "il se rétablirait"
    },
    "partizipVergangenheit": {
      "de": "genesen (er ist)",
      "lv": "rétabli"
    }
  },
  {
    "infinitiv": {
      "de": "genießen",
      "lv": "savourer"
    },
    "praesens": {
      "de": "er genießt",
      "lv": "il savoure"
    },
    "imperfektIndikativ": {
      "de": "er genoss",
      "lv": "il savoura"
    },
    "imperfektKonjunktiv": {
      "de": "er genösse",
      "lv": "il savourerait"
    },
    "partizipVergangenheit": {
      "de": "genossen",
      "lv": "savouré"
    }
  },
  {
    "infinitiv": {
      "de": "geschehen",
      "lv": "arriver"
    },
    "praesens": {
      "de": "es geschieht",
      "lv": "il arrive"
    },
    "imperfektIndikativ": {
      "de": "es geschah",
      "lv": "il arriva"
    },
    "imperfektKonjunktiv": {
      "de": "es geschähe",
      "lv": "il arriverait"
    },
    "partizipVergangenheit": {
      "de": "geschehen (es ist)",
      "lv": "arrivé"
    }
  },
  {
    "infinitiv": {
      "de": "gießen",
      "lv": "verser"
    },
    "praesens": {
      "de": "er gießt",
      "lv": "il verse"
    },
    "imperfektIndikativ": {
      "de": "er goss",
      "lv": "il versa"
    },
    "imperfektKonjunktiv": {
      "de": "er gösse",
      "lv": "il verserait"
    },
    "partizipVergangenheit": {
      "de": "gegossen",
      "lv": "versé"
    }
  },
  {
    "infinitiv": {
      "de": "gleichen",
      "lv": "ressembler"
    },
    "praesens": {
      "de": "er gleicht",
      "lv": "il ressemble"
    },
    "imperfektIndikativ": {
      "de": "er glich",
      "lv": "il ressembla"
    },
    "imperfektKonjunktiv": {
      "de": "er gliche",
      "lv": "il ressemblerait"
    },
    "partizipVergangenheit": {
      "de": "geglichen",
      "lv": "ressemblé"
    }
  },
  {
    "infinitiv": {
      "de": "gleiten",
      "lv": "glisser"
    },
    "praesens": {
      "de": "er gleitet",
      "lv": "il glisse"
    },
    "imperfektIndikativ": {
      "de": "er glitt",
      "lv": "il glissa"
    },
    "imperfektKonjunktiv": {
      "de": "er glitte",
      "lv": "il glisserait"
    },
    "partizipVergangenheit": {
      "de": "geglitten (er ist)",
      "lv": "glissé"
    }
  },
  {
    "infinitiv": {
      "de": "glimmen",
      "lv": "rougeoyer"
    },
    "praesens": {
      "de": "er glimmt",
      "lv": "il rougeoie"
    },
    "imperfektIndikativ": {
      "de": "er glimmte / glomm",
      "lv": "il rougeoya"
    },
    "imperfektKonjunktiv": {
      "de": "er glimmte",
      "lv": "il rougeoierait"
    },
    "partizipVergangenheit": {
      "de": "geglimmt / geglommen",
      "lv": "rougeoyé"
    }
  },
  {
    "infinitiv": {
      "de": "graben",
      "lv": "creuser"
    },
    "praesens": {
      "de": "er gräbt",
      "lv": "il creuse"
    },
    "imperfektIndikativ": {
      "de": "er grub",
      "lv": "il creusa"
    },
    "imperfektKonjunktiv": {
      "de": "er grübe",
      "lv": "il creuserait"
    },
    "partizipVergangenheit": {
      "de": "gegraben",
      "lv": "creusé"
    }
  },
  {
    "infinitiv": {
      "de": "greifen",
      "lv": "saisir"
    },
    "praesens": {
      "de": "er greift",
      "lv": "il saisit"
    },
    "imperfektIndikativ": {
      "de": "er griff",
      "lv": "il saisit"
    },
    "imperfektKonjunktiv": {
      "de": "er griffe",
      "lv": "il saisirait"
    },
    "partizipVergangenheit": {
      "de": "gegriffen",
      "lv": "saisi"
    }
  },
  {
    "infinitiv": {
      "de": "hauen",
      "lv": "abattre"
    },
    "praesens": {
      "de": "er haut",
      "lv": "il abat"
    },
    "imperfektIndikativ": {
      "de": "er hieb",
      "lv": "il abattit"
    },
    "imperfektKonjunktiv": {
      "de": "er hiebe",
      "lv": "il abattrait"
    },
    "partizipVergangenheit": {
      "de": "gehauen",
      "lv": "abattu"
    }
  },
  {
    "infinitiv": {
      "de": "heben",
      "lv": "lever"
    },
    "praesens": {
      "de": "er hebt",
      "lv": "il lève"
    },
    "imperfektIndikativ": {
      "de": "er hob",
      "lv": "il leva"
    },
    "imperfektKonjunktiv": {
      "de": "er höbe",
      "lv": "il lèverait"
    },
    "partizipVergangenheit": {
      "de": "gehoben",
      "lv": "levé"
    }
  },
  {
    "infinitiv": {
      "de": "kennen",
      "lv": "connaître / savoir"
    },
    "praesens": {
      "de": "er kennt",
      "lv": "il connaît / sait"
    },
    "imperfektIndikativ": {
      "de": "kannte",
      "lv": "il connut / sut"
    },
    "imperfektKonjunktiv": {
      "de": "kannte",
      "lv": "il connaîtrait / saurait"
    },
    "partizipVergangenheit": {
      "de": "gekannt",
      "lv": "connu / su"
    }
  },
  {
    "infinitiv": {
      "de": "klingen",
      "lv": "sonner"
    },
    "praesens": {
      "de": "er klingt",
      "lv": "il sonne"
    },
    "imperfektIndikativ": {
      "de": "er klang",
      "lv": "il sonna"
    },
    "imperfektKonjunktiv": {
      "de": "er klänge",
      "lv": "il sonnerait"
    },
    "partizipVergangenheit": {
      "de": "geklungen",
      "lv": "sonné"
    }
  },
  {
    "infinitiv": {
      "de": "kneifen",
      "lv": "pincer"
    },
    "praesens": {
      "de": "er kneift",
      "lv": "il pince"
    },
    "imperfektIndikativ": {
      "de": "er kniff",
      "lv": "il pinça"
    },
    "imperfektKonjunktiv": {
      "de": "er kniffe",
      "lv": "il pincerait"
    },
    "partizipVergangenheit": {
      "de": "gekniffen",
      "lv": "pincé"
    }
  },
  {
    "infinitiv": {
      "de": "bleiben",
      "lv": "rester"
    },
    "praesens": {
      "de": "er bleibt",
      "lv": "il reste"
    },
    "imperfektIndikativ": {
      "de": "er blieb",
      "lv": "il resta"
    },
    "imperfektKonjunktiv": {
      "de": "er bliebe",
      "lv": "il resterait"
    },
    "partizipVergangenheit": {
      "de": "geblieben (er ist)",
      "lv": "resté"
    }
  },
  {
    "infinitiv": {
      "de": "bleichen",
      "lv": "pâlir"
    },
    "praesens": {
      "de": "er bleicht",
      "lv": "il pâlit"
    },
    "imperfektIndikativ": {
      "de": "blich",
      "lv": "il pâlit"
    },
    "imperfektKonjunktiv": {
      "de": "blich",
      "lv": "il pâlirait"
    },
    "partizipVergangenheit": {
      "de": "geblichen",
      "lv": "pâli"
    }
  },
  {
    "infinitiv": {
      "de": "braten",
      "lv": "rôtir"
    },
    "praesens": {
      "de": "er brät",
      "lv": "il rôtit"
    },
    "imperfektIndikativ": {
      "de": "er briet",
      "lv": "il rôtit"
    },
    "imperfektKonjunktiv": {
      "de": "er briete",
      "lv": "il rôtirait"
    },
    "partizipVergangenheit": {
      "de": "gebraten",
      "lv": "rôti"
    }
  },
  {
    "infinitiv": {
      "de": "brechen",
      "lv": "casser"
    },
    "praesens": {
      "de": "er bricht",
      "lv": "il casse"
    },
    "imperfektIndikativ": {
      "de": "er brach",
      "lv": "il cassa"
    },
    "imperfektKonjunktiv": {
      "de": "er bräche",
      "lv": "il casserait"
    },
    "partizipVergangenheit": {
      "de": "gebrochen",
      "lv": "cassé"
    }
  },
  {
    "infinitiv": {
      "de": "brennen",
      "lv": "brûler"
    },
    "praesens": {
      "de": "er brennt",
      "lv": "il brûle"
    },
    "imperfektIndikativ": {
      "de": "brannte",
      "lv": "il brûla"
    },
    "imperfektKonjunktiv": {
      "de": "brannte",
      "lv": "il brûlerait"
    },
    "partizipVergangenheit": {
      "de": "gebrannt",
      "lv": "brûlé"
    }
  },
  {
    "infinitiv": {
      "de": "bringen",
      "lv": "apporter"
    },
    "praesens": {
      "de": "er bringt",
      "lv": "il apporte"
    },
    "imperfektIndikativ": {
      "de": "er brachte",
      "lv": "il apporta"
    },
    "imperfektKonjunktiv": {
      "de": "er brächte",
      "lv": "il apporterait"
    },
    "partizipVergangenheit": {
      "de": "gebracht",
      "lv": "apporté"
    }
  },
  {
    "infinitiv": {
      "de": "denken",
      "lv": "penser"
    },
    "praesens": {
      "de": "er denkt",
      "lv": "il pense"
    },
    "imperfektIndikativ": {
      "de": "er dachte",
      "lv": "il pensa"
    },
    "imperfektKonjunktiv": {
      "de": "er dächte",
      "lv": "il penserait"
    },
    "partizipVergangenheit": {
      "de": "gedacht",
      "lv": "pensé"
    }
  },
  {
    "infinitiv": {
      "de": "dingen",
      "lv": "engager / s'accorder"
    },
    "praesens": {
      "de": "er dingt",
      "lv": "il engage / s'accorde"
    },
    "imperfektIndikativ": {
      "de": "dingte",
      "lv": "il engagea / s'accorda"
    },
    "imperfektKonjunktiv": {
      "de": "dingte",
      "lv": "il engagerait / s'accorderait"
    },
    "partizipVergangenheit": {
      "de": "gedungen",
      "lv": "engagé / accordé"
    }
  },
  {
    "infinitiv": {
      "de": "dreschen",
      "lv": "battre"
    },
    "praesens": {
      "de": "er drischt",
      "lv": "il bat"
    },
    "imperfektIndikativ": {
      "de": "er drasch / er drosch",
      "lv": "il battit"
    },
    "imperfektKonjunktiv": {
      "de": "er dräsche / er drösche",
      "lv": "il battrait"
    },
    "partizipVergangenheit": {
      "de": "gedroschen",
      "lv": "battu"
    }
  },
  {
    "infinitiv": {
      "de": "dringen",
      "lv": "pénétrer"
    },
    "praesens": {
      "de": "er dringt",
      "lv": "il pénètre"
    },
    "imperfektIndikativ": {
      "de": "er drang",
      "lv": "il pénétra"
    },
    "imperfektKonjunktiv": {
      "de": "er dränge",
      "lv": "il pénétrerait"
    },
    "partizipVergangenheit": {
      "de": "gedrungen (er ist)",
      "lv": "pénétré"
    }
  },
  {
    "infinitiv": {
      "de": "dünken",
      "lv": "sembler"
    },
    "praesens": {
      "de": "es dünkt",
      "lv": "il semble"
    },
    "imperfektIndikativ": {
      "de": "deuchte",
      "lv": "il sembla"
    },
    "imperfektKonjunktiv": {
      "de": "deuchte",
      "lv": "il semblerait"
    },
    "partizipVergangenheit": {
      "de": "gedünkt",
      "lv": "semblé"
    }
  },
  {
    "infinitiv": {
      "de": "dürfen",
      "lv": "avoir le droit"
    },
    "praesens": {
      "de": "er darf",
      "lv": "il a le droit"
    },
    "imperfektIndikativ": {
      "de": "durfte",
      "lv": "il eut le droit"
    },
    "imperfektKonjunktiv": {
      "de": "durfte",
      "lv": "il aurait le droit"
    },
    "partizipVergangenheit": {
      "de": "gedurft",
      "lv": "eu le droit"
    }
  },
  {
    "infinitiv": {
      "de": "empfehlen",
      "lv": "recommander"
    },
    "praesens": {
      "de": "er empfiehlt",
      "lv": "il recommande"
    },
    "imperfektIndikativ": {
      "de": "er empfahl",
      "lv": "il recommanda"
    },
    "imperfektKonjunktiv": {
      "de": "er empfähle / er empföhle",
      "lv": "il recommanderait"
    },
    "partizipVergangenheit": {
      "de": "empfohlen",
      "lv": "recommandé"
    }
  },
  {
    "infinitiv": {
      "de": "empfinden",
      "lv": "ressentir"
    },
    "praesens": {
      "de": "er empfindet",
      "lv": "il ressent"
    },
    "imperfektIndikativ": {
      "de": "er empfand",
      "lv": "il ressentit"
    },
    "imperfektKonjunktiv": {
      "de": "er empfände",
      "lv": "il ressentirait"
    },
    "partizipVergangenheit": {
      "de": "empfunden",
      "lv": "ressenti"
    }
  },
  {
    "infinitiv": {
      "de": "erlöschen",
      "lv": "s'éteindre"
    },
    "praesens": {
      "de": "er erlischt",
      "lv": "il s'éteint"
    },
    "imperfektIndikativ": {
      "de": "er erlosch",
      "lv": "il s'éteignit"
    },
    "imperfektKonjunktiv": {
      "de": "er erlösche",
      "lv": "il s'éteindrait"
    },
    "partizipVergangenheit": {
      "de": "erloschen (er ist)",
      "lv": "éteint"
    }
  },
  {
    "infinitiv": {
      "de": "erschrecken",
      "lv": "s'effrayer"
    },
    "praesens": {
      "de": "er erschrickt",
      "lv": "il s'effraie"
    },
    "imperfektIndikativ": {
      "de": "er erschrak",
      "lv": "il s'effraya"
    },
    "imperfektKonjunktiv": {
      "de": "er erschräke",
      "lv": "il s'effraierait"
    },
    "partizipVergangenheit": {
      "de": "erschrocken (er ist)",
      "lv": "effrayé"
    }
  },
  {
    "infinitiv": {
      "de": "essen",
      "lv": "manger"
    },
    "praesens": {
      "de": "er isst",
      "lv": "il mange"
    },
    "imperfektIndikativ": {
      "de": "er ass",
      "lv": "il mangea"
    },
    "imperfektKonjunktiv": {
      "de": "er äße",
      "lv": "il mangerait"
    },
    "partizipVergangenheit": {
      "de": "gegessen",
      "lv": "mangé"
    }
  },
  {
    "infinitiv": {
      "de": "fahren",
      "lv": "conduire"
    },
    "praesens": {
      "de": "er fährt",
      "lv": "il conduit"
    },
    "imperfektIndikativ": {
      "de": "er fuhr",
      "lv": "il conduisit"
    },
    "imperfektKonjunktiv": {
      "de": "er führe",
      "lv": "il conduirait"
    },
    "partizipVergangenheit": {
      "de": "gefahren (er ist)",
      "lv": "conduit"
    }
  },
  {
    "infinitiv": {
      "de": "fallen",
      "lv": "tomber"
    },
    "praesens": {
      "de": "er fällt",
      "lv": "il tombe"
    },
    "imperfektIndikativ": {
      "de": "er fiel",
      "lv": "il tomba"
    },
    "imperfektKonjunktiv": {
      "de": "er fiele",
      "lv": "il tomberait"
    },
    "partizipVergangenheit": {
      "de": "gefallen (er ist)",
      "lv": "tombé"
    }
  },
  {
    "infinitiv": {
      "de": "fangen",
      "lv": "attraper"
    },
    "praesens": {
      "de": "er fängt",
      "lv": "il attrape"
    },
    "imperfektIndikativ": {
      "de": "er fing",
      "lv": "il attrapa"
    },
    "imperfektKonjunktiv": {
      "de": "er finge",
      "lv": "il attraperait"
    },
    "partizipVergangenheit": {
      "de": "gefangen",
      "lv": "attrapé"
    }
  },
  {
    "infinitiv": {
      "de": "finden",
      "lv": "trouver"
    },
    "praesens": {
      "de": "er findet",
      "lv": "il trouve"
    },
    "imperfektIndikativ": {
      "de": "er fand",
      "lv": "il trouva"
    },
    "imperfektKonjunktiv": {
      "de": "er fände",
      "lv": "il trouverait"
    },
    "partizipVergangenheit": {
      "de": "gefunden",
      "lv": "trouvé"
    }
  },
  {
    "infinitiv": {
      "de": "fliegen",
      "lv": "voler"
    },
    "praesens": {
      "de": "er fliegt",
      "lv": "il vole"
    },
    "imperfektIndikativ": {
      "de": "er flog",
      "lv": "il vola"
    },
    "imperfektKonjunktiv": {
      "de": "er flöge",
      "lv": "il volerait"
    },
    "partizipVergangenheit": {
      "de": "geflogen (er ist)",
      "lv": "volé"
    }
  },
  {
    "infinitiv": {
      "de": "fliehen",
      "lv": "fuir"
    },
    "praesens": {
      "de": "er flieht",
      "lv": "il fuit"
    },
    "imperfektIndikativ": {
      "de": "er floh",
      "lv": "il fuit"
    },
    "imperfektKonjunktiv": {
      "de": "er flöhe",
      "lv": "il fuirait"
    },
    "partizipVergangenheit": {
      "de": "geflohen (er ist)",
      "lv": "fui"
    }
  },
  {
    "infinitiv": {
      "de": "fließen",
      "lv": "couler"
    },
    "praesens": {
      "de": "er fließt",
      "lv": "il coule"
    },
    "imperfektIndikativ": {
      "de": "er floss",
      "lv": "il coula"
    },
    "imperfektKonjunktiv": {
      "de": "er flösse",
      "lv": "il coulerait"
    },
    "partizipVergangenheit": {
      "de": "geflossen (er ist)",
      "lv": "coulé"
    }
  },
  {
    "infinitiv": {
      "de": "fressen",
      "lv": "manger / dévorer"
    },
    "praesens": {
      "de": "er frisst",
      "lv": "il mange / dévore"
    },
    "imperfektIndikativ": {
      "de": "er frass",
      "lv": "il mangea / dévora"
    },
    "imperfektKonjunktiv": {
      "de": "er fräße",
      "lv": "il mangerait / dévorerait"
    },
    "partizipVergangenheit": {
      "de": "gefressen",
      "lv": "mangé / dévoré"
    }
  },
  {
    "infinitiv": {
      "de": "frieren",
      "lv": "avoir froid"
    },
    "praesens": {
      "de": "er friert",
      "lv": "il a froid"
    },
    "imperfektIndikativ": {
      "de": "er fror",
      "lv": "il eut froid"
    },
    "imperfektKonjunktiv": {
      "de": "er fröre",
      "lv": "il aurait froid"
    },
    "partizipVergangenheit": {
      "de": "gefroren",
      "lv": "eu froid"
    }
  },
  {
    "infinitiv": {
      "de": "geben",
      "lv": "donner"
    },
    "praesens": {
      "de": "er gibt",
      "lv": "il donne"
    },
    "imperfektIndikativ": {
      "de": "er gab",
      "lv": "il donna"
    },
    "imperfektKonjunktiv": {
      "de": "er gäbe",
      "lv": "il donnerait"
    },
    "partizipVergangenheit": {
      "de": "gegeben",
      "lv": "donné"
    }
  },
  {
    "infinitiv": {
      "de": "gedeihen",
      "lv": "prospérer"
    },
    "praesens": {
      "de": "er gedeiht",
      "lv": "il prospère"
    },
    "imperfektIndikativ": {
      "de": "er gedieh",
      "lv": "il prospéra"
    },
    "imperfektKonjunktiv": {
      "de": "er gediehe",
      "lv": "il prospérerait"
    },
    "partizipVergangenheit": {
      "de": "gediehen (er ist)",
      "lv": "prospéré"
    }
  },
  {
    "infinitiv": {
      "de": "gehen",
      "lv": "aller"
    },
    "praesens": {
      "de": "er geht",
      "lv": "il va"
    },
    "imperfektIndikativ": {
      "de": "er ging",
      "lv": "il alla"
    },
    "imperfektKonjunktiv": {
      "de": "er ginge",
      "lv": "il irait"
    },
    "partizipVergangenheit": {
      "de": "gegangen (er ist)",
      "lv": "allé"
    }
  },
  {
    "infinitiv": {
      "de": "gewinnen",
      "lv": "gagner"
    },
    "praesens": {
      "de": "er gewinnt",
      "lv": "il gagne"
    },
    "imperfektIndikativ": {
      "de": "er gewann",
      "lv": "il gagna"
    },
    "imperfektKonjunktiv": {
      "de": "er gewönne / er gewänne",
      "lv": "il gagnerait"
    },
    "partizipVergangenheit": {
      "de": "gewonnen",
      "lv": "gagné"
    }
  },
  {
    "infinitiv": {
      "de": "haben",
      "lv": "avoir"
    },
    "praesens": {
      "de": "er hat",
      "lv": "il a"
    },
    "imperfektIndikativ": {
      "de": "hatte",
      "lv": "il eut"
    },
    "imperfektKonjunktiv": {
      "de": "hatte",
      "lv": "il aurait"
    },
    "partizipVergangenheit": {
      "de": "gehabt",
      "lv": "eu"
    }
  },
  {
    "infinitiv": {
      "de": "halten",
      "lv": "tenir"
    },
    "praesens": {
      "de": "er hält",
      "lv": "il tient"
    },
    "imperfektIndikativ": {
      "de": "er hielt",
      "lv": "il tint"
    },
    "imperfektKonjunktiv": {
      "de": "er hielte",
      "lv": "il tiendrait"
    },
    "partizipVergangenheit": {
      "de": "gehalten",
      "lv": "tenu"
    }
  },
  {
    "infinitiv": {
      "de": "heißen",
      "lv": "appeler / s'appeler"
    },
    "praesens": {
      "de": "er heißt",
      "lv": "il appelle / s'appelle"
    },
    "imperfektIndikativ": {
      "de": "er hieß",
      "lv": "il appela / s'appela"
    },
    "imperfektKonjunktiv": {
      "de": "er hieße",
      "lv": "il appellerait / s'appellerait"
    },
    "partizipVergangenheit": {
      "de": "geheißen",
      "lv": "appelé / appelé"
    }
  },
  {
    "infinitiv": {
      "de": "helfen",
      "lv": "aider"
    },
    "praesens": {
      "de": "er hilft",
      "lv": "il aide"
    },
    "imperfektIndikativ": {
      "de": "er half",
      "lv": "il aida"
    },
    "imperfektKonjunktiv": {
      "de": "er hülfe / er hälfe",
      "lv": "il aiderait"
    },
    "partizipVergangenheit": {
      "de": "geholfen",
      "lv": "aidé"
    }
  },
  {
    "infinitiv": {
      "de": "kommen",
      "lv": "venir"
    },
    "praesens": {
      "de": "er kommt",
      "lv": "il vient"
    },
    "imperfektIndikativ": {
      "de": "er kam",
      "lv": "il vint"
    },
    "imperfektKonjunktiv": {
      "de": "er käme",
      "lv": "il viendrait"
    },
    "partizipVergangenheit": {
      "de": "gekommen (er ist)",
      "lv": "venu"
    }
  },
  {
    "infinitiv": {
      "de": "können",
      "lv": "pouvoir"
    },
    "praesens": {
      "de": "er kann",
      "lv": "il peut"
    },
    "imperfektIndikativ": {
      "de": "konnte",
      "lv": "il put"
    },
    "imperfektKonjunktiv": {
      "de": "konnte",
      "lv": "il pourrait"
    },
    "partizipVergangenheit": {
      "de": "gekonnt",
      "lv": "pu"
    }
  },
  {
    "infinitiv": {
      "de": "kriechen",
      "lv": "ramper"
    },
    "praesens": {
      "de": "er kriecht",
      "lv": "il rampe"
    },
    "imperfektIndikativ": {
      "de": "er kroch",
      "lv": "il rampa"
    },
    "imperfektKonjunktiv": {
      "de": "er kröche",
      "lv": "il ramperait"
    },
    "partizipVergangenheit": {
      "de": "gekrochen (er ist)",
      "lv": "rampé"
    }
  },
  {
    "infinitiv": {
      "de": "laden",
      "lv": "charger / inviter"
    },
    "praesens": {
      "de": "er lädt",
      "lv": "il charge / invite"
    },
    "imperfektIndikativ": {
      "de": "er lud",
      "lv": "il chargea / invita"
    },
    "imperfektKonjunktiv": {
      "de": "er lüde",
      "lv": "il chargerait / inviterait"
    },
    "partizipVergangenheit": {
      "de": "geladen",
      "lv": "chargé / invité"
    }
  },
  {
    "infinitiv": {
      "de": "lassen",
      "lv": "faire / laisser"
    },
    "praesens": {
      "de": "er lässt",
      "lv": "il fait / laisse"
    },
    "imperfektIndikativ": {
      "de": "er ließ",
      "lv": "il fit / laissa"
    },
    "imperfektKonjunktiv": {
      "de": "er ließe",
      "lv": "il ferait / laisserait"
    },
    "partizipVergangenheit": {
      "de": "gelassen",
      "lv": "fait / laissé"
    }
  },
  {
    "infinitiv": {
      "de": "laufen",
      "lv": "courir"
    },
    "praesens": {
      "de": "er läuft",
      "lv": "il court"
    },
    "imperfektIndikativ": {
      "de": "er lief",
      "lv": "il courut"
    },
    "imperfektKonjunktiv": {
      "de": "er liefe",
      "lv": "il courrait"
    },
    "partizipVergangenheit": {
      "de": "gelaufen (er ist)",
      "lv": "couru"
    }
  },
  {
    "infinitiv": {
      "de": "leiden",
      "lv": "souffrir"
    },
    "praesens": {
      "de": "er leidet",
      "lv": "il souffre"
    },
    "imperfektIndikativ": {
      "de": "er litt",
      "lv": "il souffrit"
    },
    "imperfektKonjunktiv": {
      "de": "er litte",
      "lv": "il souffrirait"
    },
    "partizipVergangenheit": {
      "de": "gelitten",
      "lv": "souffert"
    }
  },
  {
    "infinitiv": {
      "de": "leihen",
      "lv": "prêter / emprunter"
    },
    "praesens": {
      "de": "er leiht",
      "lv": "il prête / emprunte"
    },
    "imperfektIndikativ": {
      "de": "er lieh",
      "lv": "il prêta / emprunta"
    },
    "imperfektKonjunktiv": {
      "de": "er liehe",
      "lv": "il prêterait / emprunterait"
    },
    "partizipVergangenheit": {
      "de": "geliehen",
      "lv": "prêté / emprunté"
    }
  },
  {
    "infinitiv": {
      "de": "lesen",
      "lv": "lire"
    },
    "praesens": {
      "de": "er liest",
      "lv": "il lit"
    },
    "imperfektIndikativ": {
      "de": "er las",
      "lv": "il lut"
    },
    "imperfektKonjunktiv": {
      "de": "er läse",
      "lv": "il lirait"
    },
    "partizipVergangenheit": {
      "de": "gelesen",
      "lv": "lu"
    }
  },
  {
    "infinitiv": {
      "de": "liegen",
      "lv": "être couché"
    },
    "praesens": {
      "de": "er liegt",
      "lv": "il est couché"
    },
    "imperfektIndikativ": {
      "de": "er lag",
      "lv": "il fut couché"
    },
    "imperfektKonjunktiv": {
      "de": "er läge",
      "lv": "il serait couché"
    },
    "partizipVergangenheit": {
      "de": "gelegen",
      "lv": "été couché"
    }
  },
  {
    "infinitiv": {
      "de": "lügen",
      "lv": "mentir"
    },
    "praesens": {
      "de": "er lügt",
      "lv": "il ment"
    },
    "imperfektIndikativ": {
      "de": "er log",
      "lv": "il mentit"
    },
    "imperfektKonjunktiv": {
      "de": "er löge",
      "lv": "il mentirait"
    },
    "partizipVergangenheit": {
      "de": "gelogen",
      "lv": "menti"
    }
  },
  {
    "infinitiv": {
      "de": "mahlen",
      "lv": "moudre"
    },
    "praesens": {
      "de": "er mahlt",
      "lv": "il moud"
    },
    "imperfektIndikativ": {
      "de": "er mahlte",
      "lv": "il moulut"
    },
    "imperfektKonjunktiv": {
      "de": "er malte",
      "lv": "il moudrait"
    },
    "partizipVergangenheit": {
      "de": "gemahlen",
      "lv": "moulu"
    }
  },
  {
    "infinitiv": {
      "de": "meiden",
      "lv": "éviter"
    },
    "praesens": {
      "de": "er meidet",
      "lv": "il évite"
    },
    "imperfektIndikativ": {
      "de": "er mied",
      "lv": "il évita"
    },
    "imperfektKonjunktiv": {
      "de": "er miede",
      "lv": "il éviterait"
    },
    "partizipVergangenheit": {
      "de": "gemieden",
      "lv": "évité"
    }
  },
  {
    "infinitiv": {
      "de": "melken",
      "lv": "traire"
    },
    "praesens": {
      "de": "er milkt / er melkt",
      "lv": "il trait"
    },
    "imperfektIndikativ": {
      "de": "er molk / er melkte",
      "lv": "il a trait"
    },
    "imperfektKonjunktiv": {
      "de": "er mölke / er melkte",
      "lv": "il trairait"
    },
    "partizipVergangenheit": {
      "de": "gemolken / gemelkt",
      "lv": "trait"
    }
  },
  {
    "infinitiv": {
      "de": "messen",
      "lv": "mesurer"
    },
    "praesens": {
      "de": "er misst",
      "lv": "il mesure"
    },
    "imperfektIndikativ": {
      "de": "er mass",
      "lv": "il mesura"
    },
    "imperfektKonjunktiv": {
      "de": "er mäße",
      "lv": "il mesurerait"
    },
    "partizipVergangenheit": {
      "de": "gemessen",
      "lv": "mesuré"
    }
  },
  {
    "infinitiv": {
      "de": "misslingen",
      "lv": "échouer"
    },
    "praesens": {
      "de": "es misslingt",
      "lv": "il échoue"
    },
    "imperfektIndikativ": {
      "de": "misslang",
      "lv": "il échoua"
    },
    "imperfektKonjunktiv": {
      "de": "misslang",
      "lv": "il échouerait"
    },
    "partizipVergangenheit": {
      "de": "misslungen",
      "lv": "échoué"
    }
  },
  {
    "infinitiv": {
      "de": "mögen",
      "lv": "aimer"
    },
    "praesens": {
      "de": "er mag",
      "lv": "il aime"
    },
    "imperfektIndikativ": {
      "de": "mochte",
      "lv": "il aima"
    },
    "imperfektKonjunktiv": {
      "de": "mochte",
      "lv": "il aimerait"
    },
    "partizipVergangenheit": {
      "de": "gemocht",
      "lv": "aimé"
    }
  },
  {
    "infinitiv": {
      "de": "müssen",
      "lv": "devoir"
    },
    "praesens": {
      "de": "er muss",
      "lv": "il doit"
    },
    "imperfektIndikativ": {
      "de": "musste",
      "lv": "il dut"
    },
    "imperfektKonjunktiv": {
      "de": "musste",
      "lv": "il devrait"
    },
    "partizipVergangenheit": {
      "de": "gemusst",
      "lv": "dû"
    }
  },
  {
    "infinitiv": {
      "de": "nehmen",
      "lv": "prendre"
    },
    "praesens": {
      "de": "er nimmt",
      "lv": "il prend"
    },
    "imperfektIndikativ": {
      "de": "er nahm",
      "lv": "il prit"
    },
    "imperfektKonjunktiv": {
      "de": "er nähme",
      "lv": "il prendrait"
    },
    "partizipVergangenheit": {
      "de": "genommen",
      "lv": "pris"
    }
  },
  {
    "infinitiv": {
      "de": "nennen",
      "lv": "nommer"
    },
    "praesens": {
      "de": "er nennt",
      "lv": "il nomme"
    },
    "imperfektIndikativ": {
      "de": "er nannte",
      "lv": "il nomma"
    },
    "imperfektKonjunktiv": {
      "de": "er nennte",
      "lv": "il nommerait"
    },
    "partizipVergangenheit": {
      "de": "genannt",
      "lv": "nommé"
    }
  },
  {
    "infinitiv": {
      "de": "pfeifen",
      "lv": "siffler"
    },
    "praesens": {
      "de": "er pfeift",
      "lv": "il siffle"
    },
    "imperfektIndikativ": {
      "de": "er pfiff",
      "lv": "il siffla"
    },
    "imperfektKonjunktiv": {
      "de": "er pfiffe",
      "lv": "il sifflerait"
    },
    "partizipVergangenheit": {
      "de": "gepfiffen",
      "lv": "sifflé"
    }
  },
  {
    "infinitiv": {
      "de": "pflegen",
      "lv": "soigner"
    },
    "praesens": {
      "de": "er pflegt",
      "lv": "il soigne"
    },
    "imperfektIndikativ": {
      "de": "pflegte / pflog",
      "lv": "il soigna"
    },
    "imperfektKonjunktiv": {
      "de": "pflegte / pflog",
      "lv": "il soignerait"
    },
    "partizipVergangenheit": {
      "de": "gepflegt / gepflogen",
      "lv": "soigné"
    }
  },
  {
    "infinitiv": {
      "de": "preisen",
      "lv": "louer"
    },
    "praesens": {
      "de": "er preist",
      "lv": "il loue"
    },
    "imperfektIndikativ": {
      "de": "er pries",
      "lv": "il loua"
    },
    "imperfektKonjunktiv": {
      "de": "er priese",
      "lv": "il louerait"
    },
    "partizipVergangenheit": {
      "de": "gepriesen",
      "lv": "loué"
    }
  },
  {
    "infinitiv": {
      "de": "quellen",
      "lv": "gonfler"
    },
    "praesens": {
      "de": "er quillt",
      "lv": "il gonfle"
    },
    "imperfektIndikativ": {
      "de": "er quoll",
      "lv": "il gonfla"
    },
    "imperfektKonjunktiv": {
      "de": "er quölle",
      "lv": "il gonflerait"
    },
    "partizipVergangenheit": {
      "de": "gequollen (er ist)",
      "lv": "gonflé"
    }
  },
  {
    "infinitiv": {
      "de": "raten",
      "lv": "conseiller / deviner"
    },
    "praesens": {
      "de": "er rät",
      "lv": "il conseille / devine"
    },
    "imperfektIndikativ": {
      "de": "er riet",
      "lv": "il conseilla / devina"
    },
    "imperfektKonjunktiv": {
      "de": "er riete",
      "lv": "il conseillerait / devinerait"
    },
    "partizipVergangenheit": {
      "de": "geraten",
      "lv": "conseillé / deviné"
    }
  },
  {
    "infinitiv": {
      "de": "reiben",
      "lv": "frotter"
    },
    "praesens": {
      "de": "er reibt",
      "lv": "il frotte"
    },
    "imperfektIndikativ": {
      "de": "er rieb",
      "lv": "il frotta"
    },
    "imperfektKonjunktiv": {
      "de": "er riebe",
      "lv": "il frotterait"
    },
    "partizipVergangenheit": {
      "de": "gerieben",
      "lv": "frotté"
    }
  },
  {
    "infinitiv": {
      "de": "reißen",
      "lv": "déchirer"
    },
    "praesens": {
      "de": "er reißt",
      "lv": "il déchire"
    },
    "imperfektIndikativ": {
      "de": "er riss",
      "lv": "il déchira"
    },
    "imperfektKonjunktiv": {
      "de": "er risse",
      "lv": "il déchirerait"
    },
    "partizipVergangenheit": {
      "de": "gerissen",
      "lv": "déchiré"
    }
  },
  {
    "infinitiv": {
      "de": "reiten",
      "lv": "monter à cheval"
    },
    "praesens": {
      "de": "er reitet",
      "lv": "il monte à cheval"
    },
    "imperfektIndikativ": {
      "de": "er ritt",
      "lv": "il monta à cheval"
    },
    "imperfektKonjunktiv": {
      "de": "er ritte",
      "lv": "il monterait à cheval"
    },
    "partizipVergangenheit": {
      "de": "geritten (er ist)",
      "lv": "monté à cheval"
    }
  },
  {
    "infinitiv": {
      "de": "rennen",
      "lv": "courir"
    },
    "praesens": {
      "de": "er rennt",
      "lv": "il court"
    },
    "imperfektIndikativ": {
      "de": "er rannte",
      "lv": "il courut"
    },
    "imperfektKonjunktiv": {
      "de": "er rennte",
      "lv": "il courrait"
    },
    "partizipVergangenheit": {
      "de": "gerannt",
      "lv": "couru"
    }
  },
  {
    "infinitiv": {
      "de": "riechen",
      "lv": "sentir"
    },
    "praesens": {
      "de": "er riecht",
      "lv": "il sent"
    },
    "imperfektIndikativ": {
      "de": "er roch",
      "lv": "il sentit"
    },
    "imperfektKonjunktiv": {
      "de": "er röche",
      "lv": "il sentirait"
    },
    "partizipVergangenheit": {
      "de": "gerochen",
      "lv": "senti"
    }
  },
  {
    "infinitiv": {
      "de": "ringen",
      "lv": "lutter"
    },
    "praesens": {
      "de": "er ringt",
      "lv": "il lutte"
    },
    "imperfektIndikativ": {
      "de": "er rang",
      "lv": "il lutta"
    },
    "imperfektKonjunktiv": {
      "de": "er ränge",
      "lv": "il lutterait"
    },
    "partizipVergangenheit": {
      "de": "gerungen",
      "lv": "lutté"
    }
  },
  {
    "infinitiv": {
      "de": "rinnen",
      "lv": "couler"
    },
    "praesens": {
      "de": "er rinnt",
      "lv": "il coule"
    },
    "imperfektIndikativ": {
      "de": "er rann",
      "lv": "il coula"
    },
    "imperfektKonjunktiv": {
      "de": "er ränne / er rönne",
      "lv": "il coulerait"
    },
    "partizipVergangenheit": {
      "de": "geronnen (er ist)",
      "lv": "coulé"
    }
  },
  {
    "infinitiv": {
      "de": "rufen",
      "lv": "appeler"
    },
    "praesens": {
      "de": "er ruft",
      "lv": "il appelle"
    },
    "imperfektIndikativ": {
      "de": "er rief",
      "lv": "il appela"
    },
    "imperfektKonjunktiv": {
      "de": "er riefe",
      "lv": "il appellerait"
    },
    "partizipVergangenheit": {
      "de": "gerufen",
      "lv": "appelé"
    }
  },
  {
    "infinitiv": {
      "de": "salzen",
      "lv": "saler"
    },
    "praesens": {
      "de": "er salzt",
      "lv": "il sale"
    },
    "imperfektIndikativ": {
      "de": "er salzte",
      "lv": "il sala"
    },
    "imperfektKonjunktiv": {
      "de": "er salzte",
      "lv": "il salerait"
    },
    "partizipVergangenheit": {
      "de": "gesalzen",
      "lv": "salé"
    }
  },
  {
    "infinitiv": {
      "de": "saufen",
      "lv": "s'enivrer / boire"
    },
    "praesens": {
      "de": "er säuft",
      "lv": "il s'enivre / boit"
    },
    "imperfektIndikativ": {
      "de": "er soff",
      "lv": "il s'enivra / but"
    },
    "imperfektKonjunktiv": {
      "de": "er söffe",
      "lv": "il s'enivrerait / boirait"
    },
    "partizipVergangenheit": {
      "de": "gesoffen",
      "lv": "enivré / bu"
    }
  },
  {
    "infinitiv": {
      "de": "saugen",
      "lv": "sucer"
    },
    "praesens": {
      "de": "er saugt",
      "lv": "il suce"
    },
    "imperfektIndikativ": {
      "de": "er sog",
      "lv": "il suça"
    },
    "imperfektKonjunktiv": {
      "de": "er söge",
      "lv": "il sucerait"
    },
    "partizipVergangenheit": {
      "de": "gesogen",
      "lv": "sucé"
    }
  },
  {
    "infinitiv": {
      "de": "schaffen",
      "lv": "créer"
    },
    "praesens": {
      "de": "er schafft",
      "lv": "il crée"
    },
    "imperfektIndikativ": {
      "de": "er schuf",
      "lv": "il créa"
    },
    "imperfektKonjunktiv": {
      "de": "er schüfe",
      "lv": "il créerait"
    },
    "partizipVergangenheit": {
      "de": "geschaffen",
      "lv": "créé"
    }
  },
  {
    "infinitiv": {
      "de": "schallen",
      "lv": "résonner"
    },
    "praesens": {
      "de": "es schallt",
      "lv": "il résonne"
    },
    "imperfektIndikativ": {
      "de": "schallte / scholl",
      "lv": "il résonna"
    },
    "imperfektKonjunktiv": {
      "de": "schallte / scholl",
      "lv": "il résonnerait"
    },
    "partizipVergangenheit": {
      "de": "geschallt",
      "lv": "résonné"
    }
  },
  {
    "infinitiv": {
      "de": "scheiden",
      "lv": "séparer / se séparer"
    },
    "praesens": {
      "de": "er scheidet",
      "lv": "il sépare / se sépare"
    },
    "imperfektIndikativ": {
      "de": "er schied",
      "lv": "il sépara / se sépara"
    },
    "imperfektKonjunktiv": {
      "de": "er schiede",
      "lv": "il séparerait / se séparerait"
    },
    "partizipVergangenheit": {
      "de": "geschieden (er hat / er ist)",
      "lv": "séparé / séparé"
    }
  },
  {
    "infinitiv": {
      "de": "scheinen",
      "lv": "briller / paraître"
    },
    "praesens": {
      "de": "er scheint",
      "lv": "il brille / paraît"
    },
    "imperfektIndikativ": {
      "de": "er schien",
      "lv": "il brilla / parut"
    },
    "imperfektKonjunktiv": {
      "de": "er schiene",
      "lv": "il brillerait / paraîtrait"
    },
    "partizipVergangenheit": {
      "de": "geschienen",
      "lv": "brillé / paru"
    }
  },
  {
    "infinitiv": {
      "de": "schelten",
      "lv": "gronder"
    },
    "praesens": {
      "de": "er schilt",
      "lv": "il gronde"
    },
    "imperfektIndikativ": {
      "de": "er schalt",
      "lv": "il gronda"
    },
    "imperfektKonjunktiv": {
      "de": "er schölte / er schälte",
      "lv": "il gronderait"
    },
    "partizipVergangenheit": {
      "de": "gescholten",
      "lv": "grondé"
    }
  },
  {
    "infinitiv": {
      "de": "scheren",
      "lv": "tondre"
    },
    "praesens": {
      "de": "er schert",
      "lv": "il tond"
    },
    "imperfektIndikativ": {
      "de": "schor / scherte",
      "lv": "il tondit"
    },
    "imperfektKonjunktiv": {
      "de": "schor / scherte",
      "lv": "il tondrait"
    },
    "partizipVergangenheit": {
      "de": "geschoren / geschert",
      "lv": "tondu"
    }
  },
  {
    "infinitiv": {
      "de": "schieben",
      "lv": "pousser"
    },
    "praesens": {
      "de": "er schiebt",
      "lv": "il pousse"
    },
    "imperfektIndikativ": {
      "de": "er schob",
      "lv": "il poussa"
    },
    "imperfektKonjunktiv": {
      "de": "er schöbe",
      "lv": "il pousserait"
    },
    "partizipVergangenheit": {
      "de": "geschoben",
      "lv": "poussé"
    }
  },
  {
    "infinitiv": {
      "de": "schießen",
      "lv": "tirer"
    },
    "praesens": {
      "de": "er schießt",
      "lv": "il tire"
    },
    "imperfektIndikativ": {
      "de": "er schoss",
      "lv": "il tira"
    },
    "imperfektKonjunktiv": {
      "de": "er schösse",
      "lv": "il tirerait"
    },
    "partizipVergangenheit": {
      "de": "geschossen",
      "lv": "tiré"
    }
  },
  {
    "infinitiv": {
      "de": "schinden",
      "lv": "tourmenter"
    },
    "praesens": {
      "de": "er schindet",
      "lv": "il tourmente"
    },
    "imperfektIndikativ": {
      "de": "schindete",
      "lv": "il tourmenta"
    },
    "imperfektKonjunktiv": {
      "de": "schindete",
      "lv": "il tourmenterait"
    },
    "partizipVergangenheit": {
      "de": "geschunden",
      "lv": "tourmenté"
    }
  },
  {
    "infinitiv": {
      "de": "schlafen",
      "lv": "dormir"
    },
    "praesens": {
      "de": "er schläft",
      "lv": "il dort"
    },
    "imperfektIndikativ": {
      "de": "er schlief",
      "lv": "il dormit"
    },
    "imperfektKonjunktiv": {
      "de": "er schliefe",
      "lv": "il dormirait"
    },
    "partizipVergangenheit": {
      "de": "geschlafen",
      "lv": "dormi"
    }
  },
  {
    "infinitiv": {
      "de": "schlagen",
      "lv": "frapper"
    },
    "praesens": {
      "de": "er schlägt",
      "lv": "il frappe"
    },
    "imperfektIndikativ": {
      "de": "er schlug",
      "lv": "il frappa"
    },
    "imperfektKonjunktiv": {
      "de": "er schlüge",
      "lv": "il frapperait"
    },
    "partizipVergangenheit": {
      "de": "geschlagen",
      "lv": "frappé"
    }
  },
  {
    "infinitiv": {
      "de": "schleichen",
      "lv": "se faufiler"
    },
    "praesens": {
      "de": "er schleicht",
      "lv": "il se faufile"
    },
    "imperfektIndikativ": {
      "de": "er schlich",
      "lv": "il se faufila"
    },
    "imperfektKonjunktiv": {
      "de": "er schliche",
      "lv": "il se faufilerait"
    },
    "partizipVergangenheit": {
      "de": "geschlichen (er ist)",
      "lv": "faufilé"
    }
  },
  {
    "infinitiv": {
      "de": "schleifen",
      "lv": "polir"
    },
    "praesens": {
      "de": "er schleift",
      "lv": "il polit"
    },
    "imperfektIndikativ": {
      "de": "er schliff",
      "lv": "il polit"
    },
    "imperfektKonjunktiv": {
      "de": "er schliffe",
      "lv": "il polirait"
    },
    "partizipVergangenheit": {
      "de": "geschliffen",
      "lv": "poli"
    }
  },
  {
    "infinitiv": {
      "de": "schließen",
      "lv": "fermer"
    },
    "praesens": {
      "de": "er schließt",
      "lv": "il ferme"
    },
    "imperfektIndikativ": {
      "de": "er schloss",
      "lv": "il ferma"
    },
    "imperfektKonjunktiv": {
      "de": "er schlösse",
      "lv": "il fermerait"
    },
    "partizipVergangenheit": {
      "de": "geschlossen",
      "lv": "fermé"
    }
  },
  {
    "infinitiv": {
      "de": "schlingen",
      "lv": "engloutir"
    },
    "praesens": {
      "de": "er schlingt",
      "lv": "il engloutit"
    },
    "imperfektIndikativ": {
      "de": "er schlang",
      "lv": "il engloutit"
    },
    "imperfektKonjunktiv": {
      "de": "er schlänge",
      "lv": "il engloutirait"
    },
    "partizipVergangenheit": {
      "de": "geschlungen",
      "lv": "englouti"
    }
  },
  {
    "infinitiv": {
      "de": "schmeißen",
      "lv": "jeter"
    },
    "praesens": {
      "de": "er schmeißt",
      "lv": "il jette"
    },
    "imperfektIndikativ": {
      "de": "er schmiss",
      "lv": "il jeta"
    },
    "imperfektKonjunktiv": {
      "de": "er schmisse",
      "lv": "il jetterait"
    },
    "partizipVergangenheit": {
      "de": "geschmissen",
      "lv": "jeté"
    }
  },
  {
    "infinitiv": {
      "de": "schmelzen",
      "lv": "fondre"
    },
    "praesens": {
      "de": "er schmilzt",
      "lv": "il fond"
    },
    "imperfektIndikativ": {
      "de": "er schmolz",
      "lv": "il fondit"
    },
    "imperfektKonjunktiv": {
      "de": "er schmölze",
      "lv": "il fondrait"
    },
    "partizipVergangenheit": {
      "de": "geschmolzen (er ist)",
      "lv": "fondu"
    }
  },
  {
    "infinitiv": {
      "de": "schnauben",
      "lv": "renâcler"
    },
    "praesens": {
      "de": "er schnaubt",
      "lv": "il renâcle"
    },
    "imperfektIndikativ": {
      "de": "schnaubte / schnob",
      "lv": "il renâcla"
    },
    "imperfektKonjunktiv": {
      "de": "schnaubte / schnob",
      "lv": "il renâclerait"
    },
    "partizipVergangenheit": {
      "de": "geschnaubt / geschnoben",
      "lv": "renâclé"
    }
  },
  {
    "infinitiv": {
      "de": "schneiden",
      "lv": "couper"
    },
    "praesens": {
      "de": "er schneidet",
      "lv": "il coupe"
    },
    "imperfektIndikativ": {
      "de": "er schnitt",
      "lv": "il coupa"
    },
    "imperfektKonjunktiv": {
      "de": "er schnitte",
      "lv": "il couperait"
    },
    "partizipVergangenheit": {
      "de": "geschnitten",
      "lv": "coupé"
    }
  },
  {
    "infinitiv": {
      "de": "schreiben",
      "lv": "écrire"
    },
    "praesens": {
      "de": "er schreibt",
      "lv": "il écrit"
    },
    "imperfektIndikativ": {
      "de": "er schrieb",
      "lv": "il écrivit"
    },
    "imperfektKonjunktiv": {
      "de": "er schriebe",
      "lv": "il écrirait"
    },
    "partizipVergangenheit": {
      "de": "geschrieben",
      "lv": "écrit"
    }
  },
  {
    "infinitiv": {
      "de": "schreien",
      "lv": "crier"
    },
    "praesens": {
      "de": "er schreit",
      "lv": "il crie"
    },
    "imperfektIndikativ": {
      "de": "er schrie",
      "lv": "il cria"
    },
    "imperfektKonjunktiv": {
      "de": "er schriee",
      "lv": "il crierait"
    },
    "partizipVergangenheit": {
      "de": "geschrien",
      "lv": "crié"
    }
  },
  {
    "infinitiv": {
      "de": "schreiten",
      "lv": "marcher à grands pas"
    },
    "praesens": {
      "de": "er schreitet",
      "lv": "il marche à grands pas"
    },
    "imperfektIndikativ": {
      "de": "er schritt",
      "lv": "il marcha à grands pas"
    },
    "imperfektKonjunktiv": {
      "de": "er schritte",
      "lv": "il marcherait à grands pas"
    },
    "partizipVergangenheit": {
      "de": "geschritten (er ist)",
      "lv": "marché à grands pas"
    }
  },
  {
    "infinitiv": {
      "de": "schweigen",
      "lv": "se taire"
    },
    "praesens": {
      "de": "er schweigt",
      "lv": "il se tait"
    },
    "imperfektIndikativ": {
      "de": "er schwieg",
      "lv": "il se tut"
    },
    "imperfektKonjunktiv": {
      "de": "er schwiege",
      "lv": "il se tairait"
    },
    "partizipVergangenheit": {
      "de": "geschwiegen",
      "lv": "tu"
    }
  },
  {
    "infinitiv": {
      "de": "schwellen",
      "lv": "enfler"
    },
    "praesens": {
      "de": "er schwillt",
      "lv": "il enfle"
    },
    "imperfektIndikativ": {
      "de": "er schwoll",
      "lv": "il enfla"
    },
    "imperfektKonjunktiv": {
      "de": "er schwölle",
      "lv": "il enflerait"
    },
    "partizipVergangenheit": {
      "de": "geschwollen (er ist)",
      "lv": "enflé"
    }
  },
  {
    "infinitiv": {
      "de": "schwimmen",
      "lv": "nager"
    },
    "praesens": {
      "de": "er schwimmt",
      "lv": "il nage"
    },
    "imperfektIndikativ": {
      "de": "er schwamm",
      "lv": "il nagea"
    },
    "imperfektKonjunktiv": {
      "de": "er schwömme / er schwämme",
      "lv": "il nagerait"
    },
    "partizipVergangenheit": {
      "de": "geschwommen (er ist)",
      "lv": "nagé"
    }
  },
  {
    "infinitiv": {
      "de": "schwinden",
      "lv": "disparaître"
    },
    "praesens": {
      "de": "er schwindet",
      "lv": "il disparaît"
    },
    "imperfektIndikativ": {
      "de": "er schwand",
      "lv": "il disparut"
    },
    "imperfektKonjunktiv": {
      "de": "er schwände",
      "lv": "il disparaîtrait"
    },
    "partizipVergangenheit": {
      "de": "geschwunden (er ist)",
      "lv": "disparu"
    }
  },
  {
    "infinitiv": {
      "de": "schwingen",
      "lv": "agiter"
    },
    "praesens": {
      "de": "er schwingt",
      "lv": "il agite"
    },
    "imperfektIndikativ": {
      "de": "er schwang",
      "lv": "il agita"
    },
    "imperfektKonjunktiv": {
      "de": "er schwänge",
      "lv": "il agiterait"
    },
    "partizipVergangenheit": {
      "de": "geschwungen",
      "lv": "agité"
    }
  },
  {
    "infinitiv": {
      "de": "schwören",
      "lv": "jurer"
    },
    "praesens": {
      "de": "er schwört",
      "lv": "il jure"
    },
    "imperfektIndikativ": {
      "de": "er schwur / er schwor",
      "lv": "il jura"
    },
    "imperfektKonjunktiv": {
      "de": "er schwöre",
      "lv": "il jurerait"
    },
    "partizipVergangenheit": {
      "de": "geschworen",
      "lv": "juré"
    }
  },
  {
    "infinitiv": {
      "de": "sehen",
      "lv": "voir"
    },
    "praesens": {
      "de": "er sieht",
      "lv": "il voit"
    },
    "imperfektIndikativ": {
      "de": "er sah",
      "lv": "il vit"
    },
    "imperfektKonjunktiv": {
      "de": "er sähe",
      "lv": "il verrait"
    },
    "partizipVergangenheit": {
      "de": "gesehen",
      "lv": "vu"
    }
  },
  {
    "infinitiv": {
      "de": "sein",
      "lv": "être"
    },
    "praesens": {
      "de": "er ist",
      "lv": "il est"
    },
    "imperfektIndikativ": {
      "de": "war",
      "lv": "il fut"
    },
    "imperfektKonjunktiv": {
      "de": "war",
      "lv": "il serait"
    },
    "partizipVergangenheit": {
      "de": "gewesen",
      "lv": "été"
    }
  },
  {
    "infinitiv": {
      "de": "senden",
      "lv": "envoyer"
    },
    "praesens": {
      "de": "er sendet",
      "lv": "il envoie"
    },
    "imperfektIndikativ": {
      "de": "er sandte / er sendete",
      "lv": "il envoya"
    },
    "imperfektKonjunktiv": {
      "de": "er sendete",
      "lv": "il enverrait"
    },
    "partizipVergangenheit": {
      "de": "gesandt / gesendet",
      "lv": "envoyé"
    }
  },
  {
    "infinitiv": {
      "de": "sieden",
      "lv": "faire bouillir"
    },
    "praesens": {
      "de": "er siedet",
      "lv": "il fait bouillir"
    },
    "imperfektIndikativ": {
      "de": "sott / siedete",
      "lv": "il fit bouillir"
    },
    "imperfektKonjunktiv": {
      "de": "sott / siedete",
      "lv": "il ferait bouillir"
    },
    "partizipVergangenheit": {
      "de": "gesotten / gesiedet",
      "lv": "fait bouillir"
    }
  },
  {
    "infinitiv": {
      "de": "singen",
      "lv": "chanter"
    },
    "praesens": {
      "de": "er singt",
      "lv": "il chante"
    },
    "imperfektIndikativ": {
      "de": "er sang",
      "lv": "il chanta"
    },
    "imperfektKonjunktiv": {
      "de": "er sänge",
      "lv": "il chanterait"
    },
    "partizipVergangenheit": {
      "de": "gesungen",
      "lv": "chanté"
    }
  },
  {
    "infinitiv": {
      "de": "sinken",
      "lv": "sombrer"
    },
    "praesens": {
      "de": "er sinkt",
      "lv": "il sombre"
    },
    "imperfektIndikativ": {
      "de": "er sank",
      "lv": "il sombra"
    },
    "imperfektKonjunktiv": {
      "de": "er sänke",
      "lv": "il sombrerait"
    },
    "partizipVergangenheit": {
      "de": "gesunken (er ist)",
      "lv": "sombré"
    }
  },
  {
    "infinitiv": {
      "de": "sinnen",
      "lv": "réfléchir"
    },
    "praesens": {
      "de": "er sinnt",
      "lv": "il réfléchit"
    },
    "imperfektIndikativ": {
      "de": "er sann",
      "lv": "il réfléchit"
    },
    "imperfektKonjunktiv": {
      "de": "er sönne / er sänne",
      "lv": "il réfléchirait"
    },
    "partizipVergangenheit": {
      "de": "gesonnen",
      "lv": "réfléchi"
    }
  },
  {
    "infinitiv": {
      "de": "sitzen",
      "lv": "être assis"
    },
    "praesens": {
      "de": "er sitzt",
      "lv": "il est assis"
    },
    "imperfektIndikativ": {
      "de": "er sass",
      "lv": "il fut assis"
    },
    "imperfektKonjunktiv": {
      "de": "er säße",
      "lv": "il serait assis"
    },
    "partizipVergangenheit": {
      "de": "gesessen",
      "lv": "été assis"
    }
  },
  {
    "infinitiv": {
      "de": "sollen",
      "lv": "devoir"
    },
    "praesens": {
      "de": "er soll",
      "lv": "il doit"
    },
    "imperfektIndikativ": {
      "de": "sollte",
      "lv": "il dut"
    },
    "imperfektKonjunktiv": {
      "de": "sollte",
      "lv": "il devrait"
    },
    "partizipVergangenheit": {
      "de": "gesollt",
      "lv": "dû"
    }
  },
  {
    "infinitiv": {
      "de": "speien",
      "lv": "cracher"
    },
    "praesens": {
      "de": "er speit",
      "lv": "il crache"
    },
    "imperfektIndikativ": {
      "de": "er spie",
      "lv": "il cracha"
    },
    "imperfektKonjunktiv": {
      "de": "er spie",
      "lv": "il cracherait"
    },
    "partizipVergangenheit": {
      "de": "gespien",
      "lv": "craché"
    }
  },
  {
    "infinitiv": {
      "de": "spinnen",
      "lv": "filer"
    },
    "praesens": {
      "de": "er spinnt",
      "lv": "il file"
    },
    "imperfektIndikativ": {
      "de": "er spann",
      "lv": "il fila"
    },
    "imperfektKonjunktiv": {
      "de": "er spönne / er spänne",
      "lv": "il filerait"
    },
    "partizipVergangenheit": {
      "de": "gesponnen",
      "lv": "filé"
    }
  },
  {
    "infinitiv": {
      "de": "spleißen",
      "lv": "joindre"
    },
    "praesens": {
      "de": "er spleißt",
      "lv": "il joint"
    },
    "imperfektIndikativ": {
      "de": "spliss",
      "lv": "il joignit"
    },
    "imperfektKonjunktiv": {
      "de": "spliss",
      "lv": "il joindrait"
    },
    "partizipVergangenheit": {
      "de": "gesplissen",
      "lv": "joint"
    }
  },
  {
    "infinitiv": {
      "de": "sprechen",
      "lv": "parler"
    },
    "praesens": {
      "de": "er spricht",
      "lv": "il parle"
    },
    "imperfektIndikativ": {
      "de": "er sprach",
      "lv": "il parla"
    },
    "imperfektKonjunktiv": {
      "de": "er spräche",
      "lv": "il parlerait"
    },
    "partizipVergangenheit": {
      "de": "gesprochen",
      "lv": "parlé"
    }
  },
  {
    "infinitiv": {
      "de": "sprießen",
      "lv": "germer"
    },
    "praesens": {
      "de": "er sprießt",
      "lv": "il germe"
    },
    "imperfektIndikativ": {
      "de": "er spross",
      "lv": "il germa"
    },
    "imperfektKonjunktiv": {
      "de": "er sprösse",
      "lv": "il germerait"
    },
    "partizipVergangenheit": {
      "de": "gesprossen (er ist)",
      "lv": "germé"
    }
  },
  {
    "infinitiv": {
      "de": "springen",
      "lv": "sauter"
    },
    "praesens": {
      "de": "er springt",
      "lv": "il saute"
    },
    "imperfektIndikativ": {
      "de": "er sprang",
      "lv": "il sauta"
    },
    "imperfektKonjunktiv": {
      "de": "er spränge",
      "lv": "il sauterait"
    },
    "partizipVergangenheit": {
      "de": "gesprungen (er ist)",
      "lv": "sauté"
    }
  },
  {
    "infinitiv": {
      "de": "stechen",
      "lv": "piquer"
    },
    "praesens": {
      "de": "er sticht",
      "lv": "il pique"
    },
    "imperfektIndikativ": {
      "de": "er stach",
      "lv": "il piqua"
    },
    "imperfektKonjunktiv": {
      "de": "er stäche",
      "lv": "il piquerait"
    },
    "partizipVergangenheit": {
      "de": "gestochen",
      "lv": "piqué"
    }
  },
  {
    "infinitiv": {
      "de": "stecken",
      "lv": "mettre / planter"
    },
    "praesens": {
      "de": "er steckt",
      "lv": "il met / plante"
    },
    "imperfektIndikativ": {
      "de": "stak / steckte",
      "lv": "il mit / planta"
    },
    "imperfektKonjunktiv": {
      "de": "stak / steckte",
      "lv": "il mettrait / planterait"
    },
    "partizipVergangenheit": {
      "de": "gesteckt",
      "lv": "mis / planté"
    }
  },
  {
    "infinitiv": {
      "de": "stehen",
      "lv": "être debout"
    },
    "praesens": {
      "de": "er steht",
      "lv": "il est debout"
    },
    "imperfektIndikativ": {
      "de": "er stand",
      "lv": "il fut debout"
    },
    "imperfektKonjunktiv": {
      "de": "er stände / er stünde",
      "lv": "il serait debout"
    },
    "partizipVergangenheit": {
      "de": "gestanden",
      "lv": "été debout"
    }
  },
  {
    "infinitiv": {
      "de": "stehlen",
      "lv": "voler"
    },
    "praesens": {
      "de": "er stiehlt",
      "lv": "il vole"
    },
    "imperfektIndikativ": {
      "de": "er stahl",
      "lv": "il vola"
    },
    "imperfektKonjunktiv": {
      "de": "er stöhle / er stähle",
      "lv": "il volerait"
    },
    "partizipVergangenheit": {
      "de": "gestohlen",
      "lv": "volé"
    }
  },
  {
    "infinitiv": {
      "de": "steigen",
      "lv": "monter"
    },
    "praesens": {
      "de": "er steigt",
      "lv": "il monte"
    },
    "imperfektIndikativ": {
      "de": "er stieg",
      "lv": "il monta"
    },
    "imperfektKonjunktiv": {
      "de": "er stiege",
      "lv": "il monterait"
    },
    "partizipVergangenheit": {
      "de": "gestiegen (er ist)",
      "lv": "monté"
    }
  },
  {
    "infinitiv": {
      "de": "sterben",
      "lv": "mourir"
    },
    "praesens": {
      "de": "er stirbt",
      "lv": "il meurt"
    },
    "imperfektIndikativ": {
      "de": "er starb",
      "lv": "il mourut"
    },
    "imperfektKonjunktiv": {
      "de": "er stürbe",
      "lv": "il mourrait"
    },
    "partizipVergangenheit": {
      "de": "gestorben (er ist)",
      "lv": "mort"
    }
  },
  {
    "infinitiv": {
      "de": "stinken",
      "lv": "puer"
    },
    "praesens": {
      "de": "es stinkt",
      "lv": "il pue"
    },
    "imperfektIndikativ": {
      "de": "stank",
      "lv": "il pua"
    },
    "imperfektKonjunktiv": {
      "de": "stank",
      "lv": "il puerait"
    },
    "partizipVergangenheit": {
      "de": "gestunken",
      "lv": "pué"
    }
  },
  {
    "infinitiv": {
      "de": "stoßen",
      "lv": "bousculer"
    },
    "praesens": {
      "de": "er stößt",
      "lv": "il bouscule"
    },
    "imperfektIndikativ": {
      "de": "er stieß",
      "lv": "il bouscula"
    },
    "imperfektKonjunktiv": {
      "de": "er stieße",
      "lv": "il bousculerait"
    },
    "partizipVergangenheit": {
      "de": "gestoßen",
      "lv": "bousculé"
    }
  },
  {
    "infinitiv": {
      "de": "streichen",
      "lv": "peindre / rayer"
    },
    "praesens": {
      "de": "er streicht",
      "lv": "il peint / raye"
    },
    "imperfektIndikativ": {
      "de": "er strich",
      "lv": "il peignit / raya"
    },
    "imperfektKonjunktiv": {
      "de": "er striche",
      "lv": "il peindrait / rayerait"
    },
    "partizipVergangenheit": {
      "de": "gestrichen",
      "lv": "peint / rayé"
    }
  },
  {
    "infinitiv": {
      "de": "streiten",
      "lv": "se disputer"
    },
    "praesens": {
      "de": "er streitet",
      "lv": "il se dispute"
    },
    "imperfektIndikativ": {
      "de": "er stritt",
      "lv": "il se disputa"
    },
    "imperfektKonjunktiv": {
      "de": "er stritte",
      "lv": "il se disputerait"
    },
    "partizipVergangenheit": {
      "de": "gestritten",
      "lv": "disputé"
    }
  },
  {
    "infinitiv": {
      "de": "tragen",
      "lv": "porter"
    },
    "praesens": {
      "de": "er trägt",
      "lv": "il porte"
    },
    "imperfektIndikativ": {
      "de": "er trug",
      "lv": "il porta"
    },
    "imperfektKonjunktiv": {
      "de": "er trüge",
      "lv": "il porterait"
    },
    "partizipVergangenheit": {
      "de": "getragen",
      "lv": "porté"
    }
  },
  {
    "infinitiv": {
      "de": "treffen",
      "lv": "rencontrer"
    },
    "praesens": {
      "de": "er trifft",
      "lv": "il rencontre"
    },
    "imperfektIndikativ": {
      "de": "er traf",
      "lv": "il rencontra"
    },
    "imperfektKonjunktiv": {
      "de": "er träfe",
      "lv": "il rencontrerait"
    },
    "partizipVergangenheit": {
      "de": "getroffen",
      "lv": "rencontré"
    }
  },
  {
    "infinitiv": {
      "de": "treiben",
      "lv": "chasser"
    },
    "praesens": {
      "de": "er treibt",
      "lv": "il chasse"
    },
    "imperfektIndikativ": {
      "de": "er trieb",
      "lv": "il chassa"
    },
    "imperfektKonjunktiv": {
      "de": "er triebe",
      "lv": "il chasserait"
    },
    "partizipVergangenheit": {
      "de": "getrieben",
      "lv": "chassé"
    }
  },
  {
    "infinitiv": {
      "de": "treten",
      "lv": "faire un pas / aller"
    },
    "praesens": {
      "de": "er tritt",
      "lv": "il fait un pas / va"
    },
    "imperfektIndikativ": {
      "de": "er trat",
      "lv": "il fit un pas / alla"
    },
    "imperfektKonjunktiv": {
      "de": "er träte",
      "lv": "il ferait un pas / irait"
    },
    "partizipVergangenheit": {
      "de": "getreten (er ist)",
      "lv": "fait un pas / allé"
    }
  },
  {
    "infinitiv": {
      "de": "trinken",
      "lv": "boire"
    },
    "praesens": {
      "de": "er trinkt",
      "lv": "il boit"
    },
    "imperfektIndikativ": {
      "de": "er trank",
      "lv": "il but"
    },
    "imperfektKonjunktiv": {
      "de": "er tränke",
      "lv": "il boirait"
    },
    "partizipVergangenheit": {
      "de": "getrunken",
      "lv": "bu"
    }
  },
  {
    "infinitiv": {
      "de": "trügen",
      "lv": "tromper"
    },
    "praesens": {
      "de": "er trögt",
      "lv": "il trompe"
    },
    "imperfektIndikativ": {
      "de": "er trog",
      "lv": "il trompa"
    },
    "imperfektKonjunktiv": {
      "de": "er tröge",
      "lv": "il tromperait"
    },
    "partizipVergangenheit": {
      "de": "getrogen",
      "lv": "trompé"
    }
  },
  {
    "infinitiv": {
      "de": "tun",
      "lv": "faire"
    },
    "praesens": {
      "de": "er tut",
      "lv": "il fait"
    },
    "imperfektIndikativ": {
      "de": "er tat",
      "lv": "il fit"
    },
    "imperfektKonjunktiv": {
      "de": "er täte",
      "lv": "il ferait"
    },
    "partizipVergangenheit": {
      "de": "getan",
      "lv": "fait"
    }
  },
  {
    "infinitiv": {
      "de": "verderben",
      "lv": "abîmer"
    },
    "praesens": {
      "de": "er verdirbt",
      "lv": "il abîme"
    },
    "imperfektIndikativ": {
      "de": "er verdarb",
      "lv": "il abîma"
    },
    "imperfektKonjunktiv": {
      "de": "er verdürbe",
      "lv": "il abîmerait"
    },
    "partizipVergangenheit": {
      "de": "verdorben",
      "lv": "abîmé"
    }
  },
  {
    "infinitiv": {
      "de": "verdrießen",
      "lv": "contrarier"
    },
    "praesens": {
      "de": "er verdrießt",
      "lv": "il contrarie"
    },
    "imperfektIndikativ": {
      "de": "er verdross",
      "lv": "il contraria"
    },
    "imperfektKonjunktiv": {
      "de": "er verdrösse",
      "lv": "il contrarierait"
    },
    "partizipVergangenheit": {
      "de": "verdrossen",
      "lv": "contrarié"
    }
  },
  {
    "infinitiv": {
      "de": "vergessen",
      "lv": "oublier"
    },
    "praesens": {
      "de": "er vergisst",
      "lv": "il oublie"
    },
    "imperfektIndikativ": {
      "de": "er vergass",
      "lv": "il oublia"
    },
    "imperfektKonjunktiv": {
      "de": "er vergäße",
      "lv": "il oublierait"
    },
    "partizipVergangenheit": {
      "de": "vergessen",
      "lv": "oublié"
    }
  },
  {
    "infinitiv": {
      "de": "verlieren",
      "lv": "perdre"
    },
    "praesens": {
      "de": "er verliert",
      "lv": "il perd"
    },
    "imperfektIndikativ": {
      "de": "er verlor",
      "lv": "il perdit"
    },
    "imperfektKonjunktiv": {
      "de": "er verlöre",
      "lv": "il perdrait"
    },
    "partizipVergangenheit": {
      "de": "verloren",
      "lv": "perdu"
    }
  },
  {
    "infinitiv": {
      "de": "wachsen",
      "lv": "grandir"
    },
    "praesens": {
      "de": "er wächst",
      "lv": "il grandit"
    },
    "imperfektIndikativ": {
      "de": "er wuchs",
      "lv": "il grandit"
    },
    "imperfektKonjunktiv": {
      "de": "er wüchse",
      "lv": "il grandirait"
    },
    "partizipVergangenheit": {
      "de": "gewachsen (er ist)",
      "lv": "grandi"
    }
  },
  {
    "infinitiv": {
      "de": "waschen",
      "lv": "laver"
    },
    "praesens": {
      "de": "er wäscht",
      "lv": "il lave"
    },
    "imperfektIndikativ": {
      "de": "er wusch",
      "lv": "il lava"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsche",
      "lv": "il laverait"
    },
    "partizipVergangenheit": {
      "de": "gewaschen",
      "lv": "lavé"
    }
  },
  {
    "infinitiv": {
      "de": "weben",
      "lv": "tisser"
    },
    "praesens": {
      "de": "er webt",
      "lv": "il tisse"
    },
    "imperfektIndikativ": {
      "de": "wob",
      "lv": "il tissa"
    },
    "imperfektKonjunktiv": {
      "de": "wob",
      "lv": "il tisserait"
    },
    "partizipVergangenheit": {
      "de": "gewoben",
      "lv": "tissé"
    }
  },
  {
    "infinitiv": {
      "de": "weichen",
      "lv": "reculer"
    },
    "praesens": {
      "de": "er weicht",
      "lv": "il recule"
    },
    "imperfektIndikativ": {
      "de": "er wich",
      "lv": "il recula"
    },
    "imperfektKonjunktiv": {
      "de": "er wiche",
      "lv": "il reculerait"
    },
    "partizipVergangenheit": {
      "de": "gewichen (er ist)",
      "lv": "reculé"
    }
  },
  {
    "infinitiv": {
      "de": "weisen",
      "lv": "montrer"
    },
    "praesens": {
      "de": "er weist",
      "lv": "il montre"
    },
    "imperfektIndikativ": {
      "de": "er wies",
      "lv": "il montra"
    },
    "imperfektKonjunktiv": {
      "de": "er wiese",
      "lv": "il montrerait"
    },
    "partizipVergangenheit": {
      "de": "gewiesen",
      "lv": "montré"
    }
  },
  {
    "infinitiv": {
      "de": "wenden",
      "lv": "tourner / retourner"
    },
    "praesens": {
      "de": "er wendet",
      "lv": "il tourne / retourne"
    },
    "imperfektIndikativ": {
      "de": "er wandte / es wendete",
      "lv": "il tourna / retourna"
    },
    "imperfektKonjunktiv": {
      "de": "er wendete",
      "lv": "il tournerait / retournerait"
    },
    "partizipVergangenheit": {
      "de": "gewandt / gewendet",
      "lv": "tourné / retourné"
    }
  },
  {
    "infinitiv": {
      "de": "werben",
      "lv": "demander en mariage"
    },
    "praesens": {
      "de": "er wirbt",
      "lv": "il demande en mariage"
    },
    "imperfektIndikativ": {
      "de": "er warb",
      "lv": "il demanda en mariage"
    },
    "imperfektKonjunktiv": {
      "de": "er würbe",
      "lv": "il demanderait en mariage"
    },
    "partizipVergangenheit": {
      "de": "geworben",
      "lv": "demandé en mariage"
    }
  },
  {
    "infinitiv": {
      "de": "werden",
      "lv": "devenir"
    },
    "praesens": {
      "de": "er wird",
      "lv": "il devient"
    },
    "imperfektIndikativ": {
      "de": "wurde",
      "lv": "il devint"
    },
    "imperfektKonjunktiv": {
      "de": "wurde",
      "lv": "il deviendrait"
    },
    "partizipVergangenheit": {
      "de": "geworden",
      "lv": "devenu"
    }
  },
  {
    "infinitiv": {
      "de": "werfen",
      "lv": "lancer"
    },
    "praesens": {
      "de": "er wirft",
      "lv": "il lance"
    },
    "imperfektIndikativ": {
      "de": "er warf",
      "lv": "il lança"
    },
    "imperfektKonjunktiv": {
      "de": "er würfe",
      "lv": "il lancerait"
    },
    "partizipVergangenheit": {
      "de": "geworfen",
      "lv": "lancé"
    }
  },
  {
    "infinitiv": {
      "de": "wiegen",
      "lv": "peser"
    },
    "praesens": {
      "de": "er wiegt",
      "lv": "il pèse"
    },
    "imperfektIndikativ": {
      "de": "er wog",
      "lv": "il pesa"
    },
    "imperfektKonjunktiv": {
      "de": "er wöge",
      "lv": "il pèserait"
    },
    "partizipVergangenheit": {
      "de": "gewogen",
      "lv": "pesé"
    }
  },
  {
    "infinitiv": {
      "de": "winden",
      "lv": "entrelacer"
    },
    "praesens": {
      "de": "er windet",
      "lv": "il entrelace"
    },
    "imperfektIndikativ": {
      "de": "er wand",
      "lv": "il entrelaça"
    },
    "imperfektKonjunktiv": {
      "de": "er wände",
      "lv": "il entrelacerait"
    },
    "partizipVergangenheit": {
      "de": "gewunden",
      "lv": "entrelacé"
    }
  },
  {
    "infinitiv": {
      "de": "wissen",
      "lv": "savoir"
    },
    "praesens": {
      "de": "er weiß",
      "lv": "il sait"
    },
    "imperfektIndikativ": {
      "de": "er wusste",
      "lv": "il sut"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsste",
      "lv": "il saurait"
    },
    "partizipVergangenheit": {
      "de": "gewusst",
      "lv": "su"
    }
  },
  {
    "infinitiv": {
      "de": "wollen",
      "lv": "vouloir"
    },
    "praesens": {
      "de": "er will",
      "lv": "il veut"
    },
    "imperfektIndikativ": {
      "de": "wollte",
      "lv": "il voulut"
    },
    "imperfektKonjunktiv": {
      "de": "wollte",
      "lv": "il voudrait"
    },
    "partizipVergangenheit": {
      "de": "gewollt",
      "lv": "voulu"
    }
  },
  {
    "infinitiv": {
      "de": "wringen",
      "lv": "essorer / presser"
    },
    "praesens": {
      "de": "er wringt",
      "lv": "il essore / presse"
    },
    "imperfektIndikativ": {
      "de": "wrang",
      "lv": "il essora / pressa"
    },
    "imperfektKonjunktiv": {
      "de": "wrang",
      "lv": "il essorerait / presserait"
    },
    "partizipVergangenheit": {
      "de": "gewrungen",
      "lv": "essoré / pressé"
    }
  },
  {
    "infinitiv": {
      "de": "zeihen",
      "lv": "accuser"
    },
    "praesens": {
      "de": "er zeiht",
      "lv": "il accuse"
    },
    "imperfektIndikativ": {
      "de": "zieh",
      "lv": "il accusa"
    },
    "imperfektKonjunktiv": {
      "de": "zieh",
      "lv": "il accuserait"
    },
    "partizipVergangenheit": {
      "de": "geziehen",
      "lv": "accusé"
    }
  },
  {
    "infinitiv": {
      "de": "ziehen",
      "lv": "tirer"
    },
    "praesens": {
      "de": "er zieht",
      "lv": "il tire"
    },
    "imperfektIndikativ": {
      "de": "er zog",
      "lv": "il tira"
    },
    "imperfektKonjunktiv": {
      "de": "er zöge",
      "lv": "il tirerait"
    },
    "partizipVergangenheit": {
      "de": "gezogen",
      "lv": "tiré"
    }
  },
  {
    "infinitiv": {
      "de": "zwingen",
      "lv": "forcer"
    },
    "praesens": {
      "de": "er zwingt",
      "lv": "il force"
    },
    "imperfektIndikativ": {
      "de": "er zwang",
      "lv": "il força"
    },
    "imperfektKonjunktiv": {
      "de": "er zwänge",
      "lv": "il forcerait"
    },
    "partizipVergangenheit": {
      "de": "gezwungen",
      "lv": "forcé"
    }
  },
  {
    "infinitiv": {
      "de": "empfangen",
      "lv": "recevoir"
    },
    "praesens": {
      "de": "er empfängt",
      "lv": "il reçoit"
    },
    "imperfektIndikativ": {
      "de": "er empfing",
      "lv": "il reçut"
    },
    "imperfektKonjunktiv": {
      "de": "er empfinge",
      "lv": "il recevrait"
    },
    "partizipVergangenheit": {
      "de": "empfangen",
      "lv": "reçu"
    }
  },
  {
    "infinitiv": {
      "de": "erwägen",
      "lv": "considérer"
    },
    "praesens": {
      "de": "er erwägt",
      "lv": "il considère"
    },
    "imperfektIndikativ": {
      "de": "er erwog",
      "lv": "il considéra"
    },
    "imperfektKonjunktiv": {
      "de": "er erwöge",
      "lv": "il considérerait"
    },
    "partizipVergangenheit": {
      "de": "erwogen",
      "lv": "considéré"
    }
  },
  {
    "infinitiv": {
      "de": "fechten",
      "lv": "combattre"
    },
    "praesens": {
      "de": "er ficht",
      "lv": "il combat"
    },
    "imperfektIndikativ": {
      "de": "er focht",
      "lv": "il combattit"
    },
    "imperfektKonjunktiv": {
      "de": "er föchte",
      "lv": "il combattrait"
    },
    "partizipVergangenheit": {
      "de": "gefochten",
      "lv": "combattu"
    }
  },
  {
    "infinitiv": {
      "de": "flechten",
      "lv": "tresser"
    },
    "praesens": {
      "de": "er flicht",
      "lv": "il tresse"
    },
    "imperfektIndikativ": {
      "de": "er flocht",
      "lv": "il tressa"
    },
    "imperfektKonjunktiv": {
      "de": "er flöchte",
      "lv": "il tresserait"
    },
    "partizipVergangenheit": {
      "de": "geflochten",
      "lv": "tressé"
    }
  },
  {
    "infinitiv": {
      "de": "hangen",
      "lv": "pendre"
    },
    "praesens": {
      "de": "er hängt",
      "lv": "il pend"
    },
    "imperfektIndikativ": {
      "de": "er hing",
      "lv": "il pendit"
    },
    "imperfektKonjunktiv": {
      "de": "er hinge",
      "lv": "il pendrait"
    },
    "partizipVergangenheit": {
      "de": "gehangen",
      "lv": "pendu"
    }
  },
  {
    "infinitiv": {
      "de": "spalten",
      "lv": "fendre"
    },
    "praesens": {
      "de": "er spaltet",
      "lv": "il fend"
    },
    "imperfektIndikativ": {
      "de": "er spaltete",
      "lv": "il fendit"
    },
    "imperfektKonjunktiv": {
      "de": "er spaltete",
      "lv": "il fendrait"
    },
    "partizipVergangenheit": {
      "de": "gespalten",
      "lv": "fendu"
    }
  },
  {
    "infinitiv": {
      "de": "verzeihen",
      "lv": "pardonner"
    },
    "praesens": {
      "de": "er verzeiht",
      "lv": "il pardonne"
    },
    "imperfektIndikativ": {
      "de": "er verzieh",
      "lv": "il pardonna"
    },
    "imperfektKonjunktiv": {
      "de": "er verziehe",
      "lv": "il pardonnerait"
    },
    "partizipVergangenheit": {
      "de": "verziehen",
      "lv": "pardonné"
    }
  }
];

window.VERB_ENTRIES = VERB_ENTRIES;

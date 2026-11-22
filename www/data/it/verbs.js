const VERB_ENTRIES = [
  {
    "infinitiv": {
      "de": "backen",
      "lv": "cuocere al forno"
    },
    "praesens": {
      "de": "er bäckt",
      "lv": "lui cuoce al forno"
    },
    "imperfektIndikativ": {
      "de": "er buk",
      "lv": "lui cosse al forno"
    },
    "imperfektKonjunktiv": {
      "de": "er büke",
      "lv": "lui cuocerebbe al forno"
    },
    "partizipVergangenheit": {
      "de": "gebacken",
      "lv": "cotto al forno"
    }
  },
  {
    "infinitiv": {
      "de": "befehlen",
      "lv": "ordinare"
    },
    "praesens": {
      "de": "er befiehlt",
      "lv": "lui ordina"
    },
    "imperfektIndikativ": {
      "de": "er befahl",
      "lv": "lui ordinò"
    },
    "imperfektKonjunktiv": {
      "de": "er beföhle",
      "lv": "lui ordinerebbe"
    },
    "partizipVergangenheit": {
      "de": "befohlen",
      "lv": "ordinato"
    }
  },
  {
    "infinitiv": {
      "de": "beginnen",
      "lv": "cominciare"
    },
    "praesens": {
      "de": "er beginnt",
      "lv": "lui comincia"
    },
    "imperfektIndikativ": {
      "de": "er begann",
      "lv": "lui cominciò"
    },
    "imperfektKonjunktiv": {
      "de": "er begönne / er begänne",
      "lv": "lui comincerebbe"
    },
    "partizipVergangenheit": {
      "de": "begonnen",
      "lv": "cominciato"
    }
  },
  {
    "infinitiv": {
      "de": "beißen",
      "lv": "mordere"
    },
    "praesens": {
      "de": "er beißt",
      "lv": "lui morde"
    },
    "imperfektIndikativ": {
      "de": "er biss",
      "lv": "lui morse"
    },
    "imperfektKonjunktiv": {
      "de": "er bisse",
      "lv": "lui morderebbe"
    },
    "partizipVergangenheit": {
      "de": "gebissen",
      "lv": "morso"
    }
  },
  {
    "infinitiv": {
      "de": "bergen",
      "lv": "salvare / nascondere"
    },
    "praesens": {
      "de": "er birgt",
      "lv": "lui salva / nasconde"
    },
    "imperfektIndikativ": {
      "de": "er barg",
      "lv": "lui salvò / nascose"
    },
    "imperfektKonjunktiv": {
      "de": "er bürge / er bärge",
      "lv": "lui salverebbe / nasconderebbe"
    },
    "partizipVergangenheit": {
      "de": "geborgen",
      "lv": "salvato / nascosto"
    }
  },
  {
    "infinitiv": {
      "de": "bersten",
      "lv": "scoppiare"
    },
    "praesens": {
      "de": "er birst",
      "lv": "lui scoppia"
    },
    "imperfektIndikativ": {
      "de": "er barst / er borst",
      "lv": "lui scoppiò"
    },
    "imperfektKonjunktiv": {
      "de": "er bärste / er börste",
      "lv": "lui scoppierebbe"
    },
    "partizipVergangenheit": {
      "de": "geborsten (er ist)",
      "lv": "scoppiato"
    }
  },
  {
    "infinitiv": {
      "de": "bewegen",
      "lv": "indurre"
    },
    "praesens": {
      "de": "er bewegt",
      "lv": "lui induce"
    },
    "imperfektIndikativ": {
      "de": "er bewog",
      "lv": "lui indusse"
    },
    "imperfektKonjunktiv": {
      "de": "er bewöge",
      "lv": "lui indurrebbe"
    },
    "partizipVergangenheit": {
      "de": "bewogen",
      "lv": "indotto"
    }
  },
  {
    "infinitiv": {
      "de": "biegen",
      "lv": "piegare"
    },
    "praesens": {
      "de": "er biegt",
      "lv": "lui piega"
    },
    "imperfektIndikativ": {
      "de": "er bog",
      "lv": "lui piegò"
    },
    "imperfektKonjunktiv": {
      "de": "er böge",
      "lv": "lui piegherebbe"
    },
    "partizipVergangenheit": {
      "de": "gebogen",
      "lv": "piegato"
    }
  },
  {
    "infinitiv": {
      "de": "bieten",
      "lv": "offrire"
    },
    "praesens": {
      "de": "er bietet",
      "lv": "lui offre"
    },
    "imperfektIndikativ": {
      "de": "er bot",
      "lv": "lui offrì"
    },
    "imperfektKonjunktiv": {
      "de": "er böte",
      "lv": "lui offrirebbe"
    },
    "partizipVergangenheit": {
      "de": "geboten",
      "lv": "offerto"
    }
  },
  {
    "infinitiv": {
      "de": "binden",
      "lv": "legare"
    },
    "praesens": {
      "de": "er bindet",
      "lv": "lui lega"
    },
    "imperfektIndikativ": {
      "de": "er band",
      "lv": "lui legò"
    },
    "imperfektKonjunktiv": {
      "de": "er bände",
      "lv": "lui legherebbe"
    },
    "partizipVergangenheit": {
      "de": "gebunden",
      "lv": "legato"
    }
  },
  {
    "infinitiv": {
      "de": "bitten",
      "lv": "chiedere"
    },
    "praesens": {
      "de": "er bittet",
      "lv": "lui chiede"
    },
    "imperfektIndikativ": {
      "de": "er bat",
      "lv": "lui chiese"
    },
    "imperfektKonjunktiv": {
      "de": "er bäte",
      "lv": "lui chiederebbe"
    },
    "partizipVergangenheit": {
      "de": "gebeten",
      "lv": "chiesto"
    }
  },
  {
    "infinitiv": {
      "de": "blasen",
      "lv": "soffiare"
    },
    "praesens": {
      "de": "er bläst",
      "lv": "lui soffia"
    },
    "imperfektIndikativ": {
      "de": "er blies",
      "lv": "lui soffiò"
    },
    "imperfektKonjunktiv": {
      "de": "er bliese",
      "lv": "lui soffierebbe"
    },
    "partizipVergangenheit": {
      "de": "geblasen",
      "lv": "soffiato"
    }
  },
  {
    "infinitiv": {
      "de": "gären",
      "lv": "fermentare"
    },
    "praesens": {
      "de": "es gärt",
      "lv": "lui fermenta"
    },
    "imperfektIndikativ": {
      "de": "es gor / es gärte",
      "lv": "lui fermentò"
    },
    "imperfektKonjunktiv": {
      "de": "es göre / es gärte",
      "lv": "lui fermenterebbe"
    },
    "partizipVergangenheit": {
      "de": "gegoren / gegärt",
      "lv": "fermentato"
    }
  },
  {
    "infinitiv": {
      "de": "gebären",
      "lv": "partorire"
    },
    "praesens": {
      "de": "sie gebiert",
      "lv": "lei partorisce"
    },
    "imperfektIndikativ": {
      "de": "sie gebar",
      "lv": "lei partorì"
    },
    "imperfektKonjunktiv": {
      "de": "sie gebäre",
      "lv": "lei partorirebbe"
    },
    "partizipVergangenheit": {
      "de": "geboren",
      "lv": "partorito"
    }
  },
  {
    "infinitiv": {
      "de": "gelingen",
      "lv": "riuscire"
    },
    "praesens": {
      "de": "es gelingt",
      "lv": "lui riesce"
    },
    "imperfektIndikativ": {
      "de": "es gelang",
      "lv": "lui riuscì"
    },
    "imperfektKonjunktiv": {
      "de": "es gelänge",
      "lv": "lui riuscirebbe"
    },
    "partizipVergangenheit": {
      "de": "gelungen (es ist)",
      "lv": "riuscito"
    }
  },
  {
    "infinitiv": {
      "de": "gelten",
      "lv": "servire / valere"
    },
    "praesens": {
      "de": "er gilt",
      "lv": "lui serve / vale"
    },
    "imperfektIndikativ": {
      "de": "er galt",
      "lv": "lui servì / valse"
    },
    "imperfektKonjunktiv": {
      "de": "er gölte / es gälte",
      "lv": "lui servirebbe / varrebbe"
    },
    "partizipVergangenheit": {
      "de": "gegolten",
      "lv": "servito / valso"
    }
  },
  {
    "infinitiv": {
      "de": "genesen",
      "lv": "guarire"
    },
    "praesens": {
      "de": "er genest",
      "lv": "lui guarisce"
    },
    "imperfektIndikativ": {
      "de": "er genas",
      "lv": "lui guarì"
    },
    "imperfektKonjunktiv": {
      "de": "er genäse",
      "lv": "lui guarirebbe"
    },
    "partizipVergangenheit": {
      "de": "genesen (er ist)",
      "lv": "guarito"
    }
  },
  {
    "infinitiv": {
      "de": "genießen",
      "lv": "godere"
    },
    "praesens": {
      "de": "er genießt",
      "lv": "lui gode"
    },
    "imperfektIndikativ": {
      "de": "er genoss",
      "lv": "lui godette"
    },
    "imperfektKonjunktiv": {
      "de": "er genösse",
      "lv": "lui godrebbe"
    },
    "partizipVergangenheit": {
      "de": "genossen",
      "lv": "goduto"
    }
  },
  {
    "infinitiv": {
      "de": "geschehen",
      "lv": "accadere"
    },
    "praesens": {
      "de": "es geschieht",
      "lv": "accade"
    },
    "imperfektIndikativ": {
      "de": "es geschah",
      "lv": "accadde"
    },
    "imperfektKonjunktiv": {
      "de": "es geschähe",
      "lv": "accadrebbe"
    },
    "partizipVergangenheit": {
      "de": "geschehen (es ist)",
      "lv": "accaduto"
    }
  },
  {
    "infinitiv": {
      "de": "gießen",
      "lv": "versare"
    },
    "praesens": {
      "de": "er gießt",
      "lv": "lui versa"
    },
    "imperfektIndikativ": {
      "de": "er goss",
      "lv": "lui versò"
    },
    "imperfektKonjunktiv": {
      "de": "er gösse",
      "lv": "lui verserebbe"
    },
    "partizipVergangenheit": {
      "de": "gegossen",
      "lv": "versato"
    }
  },
  {
    "infinitiv": {
      "de": "gleichen",
      "lv": "somigliare"
    },
    "praesens": {
      "de": "er gleicht",
      "lv": "lui somiglia"
    },
    "imperfektIndikativ": {
      "de": "er glich",
      "lv": "lui somigliò"
    },
    "imperfektKonjunktiv": {
      "de": "er gliche",
      "lv": "lui somiglierebbe"
    },
    "partizipVergangenheit": {
      "de": "geglichen",
      "lv": "somigliato"
    }
  },
  {
    "infinitiv": {
      "de": "gleiten",
      "lv": "scivolare"
    },
    "praesens": {
      "de": "er gleitet",
      "lv": "lui scivola"
    },
    "imperfektIndikativ": {
      "de": "er glitt",
      "lv": "lui scivolò"
    },
    "imperfektKonjunktiv": {
      "de": "er glitte",
      "lv": "lui scivolerebbe"
    },
    "partizipVergangenheit": {
      "de": "geglitten (er ist)",
      "lv": "scivolato"
    }
  },
  {
    "infinitiv": {
      "de": "glimmen",
      "lv": "ardere senza fiamma"
    },
    "praesens": {
      "de": "er glimmt",
      "lv": "lui arde senza fiamma"
    },
    "imperfektIndikativ": {
      "de": "er glimmte / glomm",
      "lv": "lui arse senza fiamma"
    },
    "imperfektKonjunktiv": {
      "de": "er glimmte",
      "lv": "lui arderebbe senza fiamma"
    },
    "partizipVergangenheit": {
      "de": "geglimmt / geglommen",
      "lv": "arso senza fiamma"
    }
  },
  {
    "infinitiv": {
      "de": "graben",
      "lv": "scavare"
    },
    "praesens": {
      "de": "er gräbt",
      "lv": "lui scava"
    },
    "imperfektIndikativ": {
      "de": "er grub",
      "lv": "lui scavò"
    },
    "imperfektKonjunktiv": {
      "de": "er grübe",
      "lv": "lui scaverebbe"
    },
    "partizipVergangenheit": {
      "de": "gegraben",
      "lv": "scavato"
    }
  },
  {
    "infinitiv": {
      "de": "greifen",
      "lv": "afferrare"
    },
    "praesens": {
      "de": "er greift",
      "lv": "lui afferra"
    },
    "imperfektIndikativ": {
      "de": "er griff",
      "lv": "lui afferrò"
    },
    "imperfektKonjunktiv": {
      "de": "er griffe",
      "lv": "lui afferrerebbe"
    },
    "partizipVergangenheit": {
      "de": "gegriffen",
      "lv": "afferrato"
    }
  },
  {
    "infinitiv": {
      "de": "hauen",
      "lv": "abbattere"
    },
    "praesens": {
      "de": "er haut",
      "lv": "lui abbatte"
    },
    "imperfektIndikativ": {
      "de": "er hieb",
      "lv": "lui abbatté"
    },
    "imperfektKonjunktiv": {
      "de": "er hiebe",
      "lv": "lui abbatterebbe"
    },
    "partizipVergangenheit": {
      "de": "gehauen",
      "lv": "abbattuto"
    }
  },
  {
    "infinitiv": {
      "de": "heben",
      "lv": "sollevare"
    },
    "praesens": {
      "de": "er hebt",
      "lv": "lui solleva"
    },
    "imperfektIndikativ": {
      "de": "er hob",
      "lv": "lui sollevò"
    },
    "imperfektKonjunktiv": {
      "de": "er höbe",
      "lv": "lui solleverebbe"
    },
    "partizipVergangenheit": {
      "de": "gehoben",
      "lv": "sollevato"
    }
  },
  {
    "infinitiv": {
      "de": "kennen",
      "lv": "conoscere / sapere"
    },
    "praesens": {
      "de": "er kennt",
      "lv": "lui conosce / sa"
    },
    "imperfektIndikativ": {
      "de": "er kannte",
      "lv": "lui conobbe / seppe"
    },
    "imperfektKonjunktiv": {
      "de": "er kennte",
      "lv": "lui conoscerebbe / saprebbe"
    },
    "partizipVergangenheit": {
      "de": "gekannt",
      "lv": "conosciuto / saputo"
    }
  },
  {
    "infinitiv": {
      "de": "klingen",
      "lv": "suonare"
    },
    "praesens": {
      "de": "er klingt",
      "lv": "lui suona"
    },
    "imperfektIndikativ": {
      "de": "er klang",
      "lv": "lui suonò"
    },
    "imperfektKonjunktiv": {
      "de": "er klänge",
      "lv": "lui suonerebbe"
    },
    "partizipVergangenheit": {
      "de": "geklungen",
      "lv": "suonato"
    }
  },
  {
    "infinitiv": {
      "de": "kneifen",
      "lv": "pizzicare"
    },
    "praesens": {
      "de": "er kneift",
      "lv": "lui pizzica"
    },
    "imperfektIndikativ": {
      "de": "er kniff",
      "lv": "lui pizzicò"
    },
    "imperfektKonjunktiv": {
      "de": "er kniffe",
      "lv": "lui pizzicherebbe"
    },
    "partizipVergangenheit": {
      "de": "gekniffen",
      "lv": "pizzicato"
    }
  },
  {
    "infinitiv": {
      "de": "bleiben",
      "lv": "rimanere"
    },
    "praesens": {
      "de": "er bleibt",
      "lv": "lui rimane"
    },
    "imperfektIndikativ": {
      "de": "er blieb",
      "lv": "lui rimase"
    },
    "imperfektKonjunktiv": {
      "de": "er bliebe",
      "lv": "lui rimarrebbe"
    },
    "partizipVergangenheit": {
      "de": "geblieben (er ist)",
      "lv": "rimasto"
    }
  },
  {
    "infinitiv": {
      "de": "bleichen",
      "lv": "sbiadire"
    },
    "praesens": {
      "de": "er bleicht",
      "lv": "lui sbiadisce"
    },
    "imperfektIndikativ": {
      "de": "er bleichte / er blich",
      "lv": "lui sbiadì"
    },
    "imperfektKonjunktiv": {
      "de": "er bleichte / er bliche",
      "lv": "lui sbiadirebbe"
    },
    "partizipVergangenheit": {
      "de": "geblichen",
      "lv": "sbiadito"
    }
  },
  {
    "infinitiv": {
      "de": "braten",
      "lv": "arrostire"
    },
    "praesens": {
      "de": "er brät",
      "lv": "lui arrostisce"
    },
    "imperfektIndikativ": {
      "de": "er briet",
      "lv": "lui arrostì"
    },
    "imperfektKonjunktiv": {
      "de": "er briete",
      "lv": "lui arrostirebbe"
    },
    "partizipVergangenheit": {
      "de": "gebraten",
      "lv": "arrostito"
    }
  },
  {
    "infinitiv": {
      "de": "brechen",
      "lv": "rompere"
    },
    "praesens": {
      "de": "er bricht",
      "lv": "lui rompe"
    },
    "imperfektIndikativ": {
      "de": "er brach",
      "lv": "lui ruppe"
    },
    "imperfektKonjunktiv": {
      "de": "er bräche",
      "lv": "lui romperebbe"
    },
    "partizipVergangenheit": {
      "de": "gebrochen",
      "lv": "rotto"
    }
  },
  {
    "infinitiv": {
      "de": "brennen",
      "lv": "bruciare"
    },
    "praesens": {
      "de": "er brennt",
      "lv": "lui brucia"
    },
    "imperfektIndikativ": {
      "de": "er brannte",
      "lv": "lui bruciò"
    },
    "imperfektKonjunktiv": {
      "de": "er brennte",
      "lv": "lui brucerebbe"
    },
    "partizipVergangenheit": {
      "de": "gebrannt",
      "lv": "bruciato"
    }
  },
  {
    "infinitiv": {
      "de": "bringen",
      "lv": "portare"
    },
    "praesens": {
      "de": "er bringt",
      "lv": "lui porta"
    },
    "imperfektIndikativ": {
      "de": "er brachte",
      "lv": "lui portò"
    },
    "imperfektKonjunktiv": {
      "de": "er brächte",
      "lv": "lui porterebbe"
    },
    "partizipVergangenheit": {
      "de": "gebracht",
      "lv": "portato"
    }
  },
  {
    "infinitiv": {
      "de": "denken",
      "lv": "pensare"
    },
    "praesens": {
      "de": "er denkt",
      "lv": "lui pensa"
    },
    "imperfektIndikativ": {
      "de": "er dachte",
      "lv": "lui pensò"
    },
    "imperfektKonjunktiv": {
      "de": "er dächte",
      "lv": "lui penserebbe"
    },
    "partizipVergangenheit": {
      "de": "gedacht",
      "lv": "pensato"
    }
  },
  {
    "infinitiv": {
      "de": "dingen",
      "lv": "ingaggiare / accordarsi"
    },
    "praesens": {
      "de": "er dingt",
      "lv": "lui ingaggia / si accorda"
    },
    "imperfektIndikativ": {
      "de": "er dingte",
      "lv": "lui ingaggiò / si accordò"
    },
    "imperfektKonjunktiv": {
      "de": "er dingte",
      "lv": "lui ingaggerebbe / si accorderebbe"
    },
    "partizipVergangenheit": {
      "de": "gedungen",
      "lv": "ingaggiato / accordato"
    }
  },
  {
    "infinitiv": {
      "de": "dreschen",
      "lv": "trebbiare"
    },
    "praesens": {
      "de": "er drischt",
      "lv": "lui trebbia"
    },
    "imperfektIndikativ": {
      "de": "er drasch / er drosch",
      "lv": "lui trebbiò"
    },
    "imperfektKonjunktiv": {
      "de": "er dräsche / er drösche",
      "lv": "lui trebbierebbe"
    },
    "partizipVergangenheit": {
      "de": "gedroschen",
      "lv": "trebbiato"
    }
  },
  {
    "infinitiv": {
      "de": "dringen",
      "lv": "penetrare"
    },
    "praesens": {
      "de": "er dringt",
      "lv": "lui penetra"
    },
    "imperfektIndikativ": {
      "de": "er drang",
      "lv": "lui penetrò"
    },
    "imperfektKonjunktiv": {
      "de": "er dränge",
      "lv": "lui penetrerebbe"
    },
    "partizipVergangenheit": {
      "de": "gedrungen (er ist)",
      "lv": "penetrato"
    }
  },
  {
    "infinitiv": {
      "de": "dünken",
      "lv": "sembrare"
    },
    "praesens": {
      "de": "es dünkt",
      "lv": "sembra"
    },
    "imperfektIndikativ": {
      "de": "es dünkte / es deuchte",
      "lv": "sembrò"
    },
    "imperfektKonjunktiv": {
      "de": "es dünkte / es deuchte",
      "lv": "sembrerebbe"
    },
    "partizipVergangenheit": {
      "de": "gedünkt",
      "lv": "sembrato"
    }
  },
  {
    "infinitiv": {
      "de": "dürfen",
      "lv": "avere il permesso"
    },
    "praesens": {
      "de": "er darf",
      "lv": "lui ha il permesso"
    },
    "imperfektIndikativ": {
      "de": "er durfte",
      "lv": "lui ebbe il permesso"
    },
    "imperfektKonjunktiv": {
      "de": "er dürfte",
      "lv": "lui avrebbe il permesso"
    },
    "partizipVergangenheit": {
      "de": "gedurft",
      "lv": "avuto il permesso"
    }
  },
  {
    "infinitiv": {
      "de": "empfehlen",
      "lv": "consigliare"
    },
    "praesens": {
      "de": "er empfiehlt",
      "lv": "lui consiglia"
    },
    "imperfektIndikativ": {
      "de": "er empfahl",
      "lv": "lui consigliò"
    },
    "imperfektKonjunktiv": {
      "de": "er empfähle / er empföhle",
      "lv": "lui consiglierebbe"
    },
    "partizipVergangenheit": {
      "de": "empfohlen",
      "lv": "consigliato"
    }
  },
  {
    "infinitiv": {
      "de": "empfinden",
      "lv": "sentire"
    },
    "praesens": {
      "de": "er empfindet",
      "lv": "lui sente"
    },
    "imperfektIndikativ": {
      "de": "er empfand",
      "lv": "lui sentì"
    },
    "imperfektKonjunktiv": {
      "de": "er empfände",
      "lv": "lui sentirebbe"
    },
    "partizipVergangenheit": {
      "de": "empfunden",
      "lv": "sentito"
    }
  },
  {
    "infinitiv": {
      "de": "erlöschen",
      "lv": "spegnersi"
    },
    "praesens": {
      "de": "er erlischt",
      "lv": "lui si spegne"
    },
    "imperfektIndikativ": {
      "de": "er erlosch",
      "lv": "lui si spense"
    },
    "imperfektKonjunktiv": {
      "de": "er erlösche",
      "lv": "lui si spegnerebbe"
    },
    "partizipVergangenheit": {
      "de": "erloschen (er ist)",
      "lv": "spento"
    }
  },
  {
    "infinitiv": {
      "de": "erschrecken",
      "lv": "spaventarsi"
    },
    "praesens": {
      "de": "er erschrickt",
      "lv": "lui si spaventa"
    },
    "imperfektIndikativ": {
      "de": "er erschrak",
      "lv": "lui si spaventò"
    },
    "imperfektKonjunktiv": {
      "de": "er erschräke",
      "lv": "lui si spaventerebbe"
    },
    "partizipVergangenheit": {
      "de": "erschrocken (er ist)",
      "lv": "spaventato"
    }
  },
  {
    "infinitiv": {
      "de": "essen",
      "lv": "mangiare"
    },
    "praesens": {
      "de": "er isst",
      "lv": "lui mangia"
    },
    "imperfektIndikativ": {
      "de": "er aß",
      "lv": "lui mangiò"
    },
    "imperfektKonjunktiv": {
      "de": "er äße",
      "lv": "lui mangerebbe"
    },
    "partizipVergangenheit": {
      "de": "gegessen",
      "lv": "mangiato"
    }
  },
  {
    "infinitiv": {
      "de": "fahren",
      "lv": "guidare"
    },
    "praesens": {
      "de": "er fährt",
      "lv": "lui guida"
    },
    "imperfektIndikativ": {
      "de": "er fuhr",
      "lv": "lui guidò"
    },
    "imperfektKonjunktiv": {
      "de": "er führe",
      "lv": "lui guiderebbe"
    },
    "partizipVergangenheit": {
      "de": "gefahren (er ist)",
      "lv": "guidato"
    }
  },
  {
    "infinitiv": {
      "de": "fallen",
      "lv": "cadere"
    },
    "praesens": {
      "de": "er fällt",
      "lv": "lui cade"
    },
    "imperfektIndikativ": {
      "de": "er fiel",
      "lv": "lui cadde"
    },
    "imperfektKonjunktiv": {
      "de": "er fiele",
      "lv": "lui cadrebbe"
    },
    "partizipVergangenheit": {
      "de": "gefallen (er ist)",
      "lv": "caduto"
    }
  },
  {
    "infinitiv": {
      "de": "fangen",
      "lv": "acchiappare"
    },
    "praesens": {
      "de": "er fängt",
      "lv": "lui acchiappa"
    },
    "imperfektIndikativ": {
      "de": "er fing",
      "lv": "lui acchiappò"
    },
    "imperfektKonjunktiv": {
      "de": "er finge",
      "lv": "lui acchiapperebbe"
    },
    "partizipVergangenheit": {
      "de": "gefangen",
      "lv": "acchiappato"
    }
  },
  {
    "infinitiv": {
      "de": "finden",
      "lv": "trovare"
    },
    "praesens": {
      "de": "er findet",
      "lv": "lui trova"
    },
    "imperfektIndikativ": {
      "de": "er fand",
      "lv": "lui trovò"
    },
    "imperfektKonjunktiv": {
      "de": "er fände",
      "lv": "lui troverebbe"
    },
    "partizipVergangenheit": {
      "de": "gefunden",
      "lv": "trovato"
    }
  },
  {
    "infinitiv": {
      "de": "fliegen",
      "lv": "volare"
    },
    "praesens": {
      "de": "er fliegt",
      "lv": "lui vola"
    },
    "imperfektIndikativ": {
      "de": "er flog",
      "lv": "lui volò"
    },
    "imperfektKonjunktiv": {
      "de": "er flöge",
      "lv": "lui volerebbe"
    },
    "partizipVergangenheit": {
      "de": "geflogen (er ist)",
      "lv": "volato"
    }
  },
  {
    "infinitiv": {
      "de": "fliehen",
      "lv": "fuggire"
    },
    "praesens": {
      "de": "er flieht",
      "lv": "lui fugge"
    },
    "imperfektIndikativ": {
      "de": "er floh",
      "lv": "lui fuggì"
    },
    "imperfektKonjunktiv": {
      "de": "er flöhe",
      "lv": "lui fuggirebbe"
    },
    "partizipVergangenheit": {
      "de": "geflohen (er ist)",
      "lv": "fuggito"
    }
  },
  {
    "infinitiv": {
      "de": "fließen",
      "lv": "scorrere"
    },
    "praesens": {
      "de": "er fließt",
      "lv": "lui scorre"
    },
    "imperfektIndikativ": {
      "de": "er floss",
      "lv": "lui scorse"
    },
    "imperfektKonjunktiv": {
      "de": "er flösse",
      "lv": "lui scorrerebbe"
    },
    "partizipVergangenheit": {
      "de": "geflossen (er ist)",
      "lv": "scorso"
    }
  },
  {
    "infinitiv": {
      "de": "fressen",
      "lv": "mangiare / divorare"
    },
    "praesens": {
      "de": "er frisst",
      "lv": "lui mangia / divora"
    },
    "imperfektIndikativ": {
      "de": "er fraß",
      "lv": "lui mangiò / divorò"
    },
    "imperfektKonjunktiv": {
      "de": "er fräße",
      "lv": "lui mangerebbe / divorerebbe"
    },
    "partizipVergangenheit": {
      "de": "gefressen",
      "lv": "mangiato / divorato"
    }
  },
  {
    "infinitiv": {
      "de": "frieren",
      "lv": "avere freddo"
    },
    "praesens": {
      "de": "er friert",
      "lv": "lui ha freddo"
    },
    "imperfektIndikativ": {
      "de": "er fror",
      "lv": "lui ebbe freddo"
    },
    "imperfektKonjunktiv": {
      "de": "er fröre",
      "lv": "lui avrebbe freddo"
    },
    "partizipVergangenheit": {
      "de": "gefroren",
      "lv": "avuto freddo"
    }
  },
  {
    "infinitiv": {
      "de": "geben",
      "lv": "dare"
    },
    "praesens": {
      "de": "er gibt",
      "lv": "lui dà"
    },
    "imperfektIndikativ": {
      "de": "er gab",
      "lv": "lui diede"
    },
    "imperfektKonjunktiv": {
      "de": "er gäbe",
      "lv": "lui darebbe"
    },
    "partizipVergangenheit": {
      "de": "gegeben",
      "lv": "dato"
    }
  },
  {
    "infinitiv": {
      "de": "gedeihen",
      "lv": "prosperare"
    },
    "praesens": {
      "de": "er gedeiht",
      "lv": "lui prospera"
    },
    "imperfektIndikativ": {
      "de": "er gedieh",
      "lv": "lui prosperò"
    },
    "imperfektKonjunktiv": {
      "de": "er gediehe",
      "lv": "lui prospererebbe"
    },
    "partizipVergangenheit": {
      "de": "gediehen (er ist)",
      "lv": "prosperato"
    }
  },
  {
    "infinitiv": {
      "de": "gehen",
      "lv": "andare"
    },
    "praesens": {
      "de": "er geht",
      "lv": "lui va"
    },
    "imperfektIndikativ": {
      "de": "er ging",
      "lv": "lui andò"
    },
    "imperfektKonjunktiv": {
      "de": "er ginge",
      "lv": "lui andrebbe"
    },
    "partizipVergangenheit": {
      "de": "gegangen (er ist)",
      "lv": "andato"
    }
  },
  {
    "infinitiv": {
      "de": "gewinnen",
      "lv": "ottenere"
    },
    "praesens": {
      "de": "er gewinnt",
      "lv": "lui ottiene"
    },
    "imperfektIndikativ": {
      "de": "er gewann",
      "lv": "lui ottenne"
    },
    "imperfektKonjunktiv": {
      "de": "er gewönne / er gewänne",
      "lv": "lui otterrebbe"
    },
    "partizipVergangenheit": {
      "de": "gewonnen",
      "lv": "ottenuto"
    }
  },
  {
    "infinitiv": {
      "de": "haben",
      "lv": "avere"
    },
    "praesens": {
      "de": "er hat",
      "lv": "lui ha"
    },
    "imperfektIndikativ": {
      "de": "er hatte",
      "lv": "lui ebbe"
    },
    "imperfektKonjunktiv": {
      "de": "er hätte",
      "lv": "lui avrebbe"
    },
    "partizipVergangenheit": {
      "de": "gehabt",
      "lv": "avuto"
    }
  },
  {
    "infinitiv": {
      "de": "halten",
      "lv": "tenere"
    },
    "praesens": {
      "de": "er hält",
      "lv": "lui tiene"
    },
    "imperfektIndikativ": {
      "de": "er hielt",
      "lv": "lui tenne"
    },
    "imperfektKonjunktiv": {
      "de": "er hielte",
      "lv": "lui terrebbe"
    },
    "partizipVergangenheit": {
      "de": "gehalten",
      "lv": "tenuto"
    }
  },
  {
    "infinitiv": {
      "de": "heißen",
      "lv": "chiamare / chiamarsi"
    },
    "praesens": {
      "de": "er heißt",
      "lv": "lui chiama / si chiama"
    },
    "imperfektIndikativ": {
      "de": "er hieß",
      "lv": "lui chiamò / si chiamò"
    },
    "imperfektKonjunktiv": {
      "de": "er hieße",
      "lv": "lui chiamerebbe / si chiamerebbe"
    },
    "partizipVergangenheit": {
      "de": "geheißen",
      "lv": "chiamato / chiamato"
    }
  },
  {
    "infinitiv": {
      "de": "helfen",
      "lv": "aiutare"
    },
    "praesens": {
      "de": "er hilft",
      "lv": "lui aiuta"
    },
    "imperfektIndikativ": {
      "de": "er half",
      "lv": "lui aiutò"
    },
    "imperfektKonjunktiv": {
      "de": "er hülfe / er hälfe",
      "lv": "lui aiuterebbe"
    },
    "partizipVergangenheit": {
      "de": "geholfen",
      "lv": "aiutato"
    }
  },
  {
    "infinitiv": {
      "de": "kommen",
      "lv": "venire"
    },
    "praesens": {
      "de": "er kommt",
      "lv": "lui viene"
    },
    "imperfektIndikativ": {
      "de": "er kam",
      "lv": "lui venne"
    },
    "imperfektKonjunktiv": {
      "de": "er käme",
      "lv": "lui verrebbe"
    },
    "partizipVergangenheit": {
      "de": "gekommen (er ist)",
      "lv": "venuto"
    }
  },
  {
    "infinitiv": {
      "de": "können",
      "lv": "potere"
    },
    "praesens": {
      "de": "er kann",
      "lv": "lui può"
    },
    "imperfektIndikativ": {
      "de": "er konnte",
      "lv": "lui poté"
    },
    "imperfektKonjunktiv": {
      "de": "er könnte",
      "lv": "lui potrebbe"
    },
    "partizipVergangenheit": {
      "de": "gekonnt",
      "lv": "potuto"
    }
  },
  {
    "infinitiv": {
      "de": "kriechen",
      "lv": "strisciare"
    },
    "praesens": {
      "de": "er kriecht",
      "lv": "lui striscia"
    },
    "imperfektIndikativ": {
      "de": "er kroch",
      "lv": "lui strisciò"
    },
    "imperfektKonjunktiv": {
      "de": "er kröche",
      "lv": "lui striscerebbe"
    },
    "partizipVergangenheit": {
      "de": "gekrochen (er ist)",
      "lv": "strisciato"
    }
  },
  {
    "infinitiv": {
      "de": "laden",
      "lv": "caricare / invitare"
    },
    "praesens": {
      "de": "er lädt",
      "lv": "lui carica / invita"
    },
    "imperfektIndikativ": {
      "de": "er lud",
      "lv": "lui caricò / invitò"
    },
    "imperfektKonjunktiv": {
      "de": "er lüde",
      "lv": "lui caricherebbe / inviterebbe"
    },
    "partizipVergangenheit": {
      "de": "geladen",
      "lv": "caricato / invitato"
    }
  },
  {
    "infinitiv": {
      "de": "lassen",
      "lv": "fare / lasciare"
    },
    "praesens": {
      "de": "er lässt",
      "lv": "lui fa / lascia"
    },
    "imperfektIndikativ": {
      "de": "er ließ",
      "lv": "lui fece / lasciò"
    },
    "imperfektKonjunktiv": {
      "de": "er ließe",
      "lv": "lui farebbe / lascerebbe"
    },
    "partizipVergangenheit": {
      "de": "gelassen",
      "lv": "fatto / lasciato"
    }
  },
  {
    "infinitiv": {
      "de": "laufen",
      "lv": "correre"
    },
    "praesens": {
      "de": "er läuft",
      "lv": "lui corre"
    },
    "imperfektIndikativ": {
      "de": "er lief",
      "lv": "lui corse"
    },
    "imperfektKonjunktiv": {
      "de": "er liefe",
      "lv": "lui correrebbe"
    },
    "partizipVergangenheit": {
      "de": "gelaufen (er ist)",
      "lv": "corso"
    }
  },
  {
    "infinitiv": {
      "de": "leiden",
      "lv": "soffrire"
    },
    "praesens": {
      "de": "er leidet",
      "lv": "lui soffre"
    },
    "imperfektIndikativ": {
      "de": "er litt",
      "lv": "lui soffrì"
    },
    "imperfektKonjunktiv": {
      "de": "er litte",
      "lv": "lui soffrirebbe"
    },
    "partizipVergangenheit": {
      "de": "gelitten",
      "lv": "sofferto"
    }
  },
  {
    "infinitiv": {
      "de": "leihen",
      "lv": "prestare / prendere in prestito"
    },
    "praesens": {
      "de": "er leiht",
      "lv": "lui presta / prende in prestito"
    },
    "imperfektIndikativ": {
      "de": "er lieh",
      "lv": "lui prestò / prese in prestito"
    },
    "imperfektKonjunktiv": {
      "de": "er liehe",
      "lv": "lui presterebbe / prenderebbe in prestito"
    },
    "partizipVergangenheit": {
      "de": "geliehen",
      "lv": "prestato / preso in prestito"
    }
  },
  {
    "infinitiv": {
      "de": "lesen",
      "lv": "leggere"
    },
    "praesens": {
      "de": "er liest",
      "lv": "lui legge"
    },
    "imperfektIndikativ": {
      "de": "er las",
      "lv": "lui lesse"
    },
    "imperfektKonjunktiv": {
      "de": "er läse",
      "lv": "lui leggerebbe"
    },
    "partizipVergangenheit": {
      "de": "gelesen",
      "lv": "letto"
    }
  },
  {
    "infinitiv": {
      "de": "liegen",
      "lv": "giacere"
    },
    "praesens": {
      "de": "er liegt",
      "lv": "lui giace"
    },
    "imperfektIndikativ": {
      "de": "er lag",
      "lv": "lui giacque"
    },
    "imperfektKonjunktiv": {
      "de": "er läge",
      "lv": "lui giacerebbe"
    },
    "partizipVergangenheit": {
      "de": "gelegen",
      "lv": "giaciuto"
    }
  },
  {
    "infinitiv": {
      "de": "lügen",
      "lv": "mentire"
    },
    "praesens": {
      "de": "er lügt",
      "lv": "lui mente"
    },
    "imperfektIndikativ": {
      "de": "er log",
      "lv": "lui mentì"
    },
    "imperfektKonjunktiv": {
      "de": "er löge",
      "lv": "lui mentirebbe"
    },
    "partizipVergangenheit": {
      "de": "gelogen",
      "lv": "mentito"
    }
  },
  {
    "infinitiv": {
      "de": "mahlen",
      "lv": "macinare"
    },
    "praesens": {
      "de": "er mahlt",
      "lv": "lui macina"
    },
    "imperfektIndikativ": {
      "de": "er mahlte",
      "lv": "lui macinò"
    },
    "imperfektKonjunktiv": {
      "de": "er malte",
      "lv": "lui macinerebbe"
    },
    "partizipVergangenheit": {
      "de": "gemahlen",
      "lv": "macinato"
    }
  },
  {
    "infinitiv": {
      "de": "meiden",
      "lv": "evitare"
    },
    "praesens": {
      "de": "er meidet",
      "lv": "lui evita"
    },
    "imperfektIndikativ": {
      "de": "er mied",
      "lv": "lui evitò"
    },
    "imperfektKonjunktiv": {
      "de": "er miede",
      "lv": "lui eviterebbe"
    },
    "partizipVergangenheit": {
      "de": "gemieden",
      "lv": "evitato"
    }
  },
  {
    "infinitiv": {
      "de": "melken",
      "lv": "mungere"
    },
    "praesens": {
      "de": "er milkt / er melkt",
      "lv": "lui munge"
    },
    "imperfektIndikativ": {
      "de": "er molk / er melkte",
      "lv": "lui munse"
    },
    "imperfektKonjunktiv": {
      "de": "er mölke / er melkte",
      "lv": "lui mungerebbe"
    },
    "partizipVergangenheit": {
      "de": "gemolken / gemelkt",
      "lv": "munto"
    }
  },
  {
    "infinitiv": {
      "de": "messen",
      "lv": "misurare"
    },
    "praesens": {
      "de": "er misst",
      "lv": "lui misura"
    },
    "imperfektIndikativ": {
      "de": "er maß",
      "lv": "lui misurò"
    },
    "imperfektKonjunktiv": {
      "de": "er mäße",
      "lv": "lui misurerebbe"
    },
    "partizipVergangenheit": {
      "de": "gemessen",
      "lv": "misurato"
    }
  },
  {
    "infinitiv": {
      "de": "misslingen",
      "lv": "fallire"
    },
    "praesens": {
      "de": "es misslingt",
      "lv": "lui fallisce"
    },
    "imperfektIndikativ": {
      "de": "es misslang",
      "lv": "lui fallì"
    },
    "imperfektKonjunktiv": {
      "de": "es misslänge",
      "lv": "lui fallirebbe"
    },
    "partizipVergangenheit": {
      "de": "misslungen",
      "lv": "fallito"
    }
  },
  {
    "infinitiv": {
      "de": "mögen",
      "lv": "piacere"
    },
    "praesens": {
      "de": "er mag",
      "lv": "gli piace"
    },
    "imperfektIndikativ": {
      "de": "er mochte",
      "lv": "gli piacque"
    },
    "imperfektKonjunktiv": {
      "de": "er möchte",
      "lv": "gli piacerebbe"
    },
    "partizipVergangenheit": {
      "de": "gemocht",
      "lv": "piaciuto"
    }
  },
  {
    "infinitiv": {
      "de": "müssen",
      "lv": "dovere"
    },
    "praesens": {
      "de": "er muss",
      "lv": "lui deve"
    },
    "imperfektIndikativ": {
      "de": "er musste",
      "lv": "lui dovette"
    },
    "imperfektKonjunktiv": {
      "de": "er müsste",
      "lv": "lui dovrebbe"
    },
    "partizipVergangenheit": {
      "de": "gemusst",
      "lv": "dovuto"
    }
  },
  {
    "infinitiv": {
      "de": "nehmen",
      "lv": "prendere"
    },
    "praesens": {
      "de": "er nimmt",
      "lv": "lui prende"
    },
    "imperfektIndikativ": {
      "de": "er nahm",
      "lv": "lui prese"
    },
    "imperfektKonjunktiv": {
      "de": "er nähme",
      "lv": "lui prenderebbe"
    },
    "partizipVergangenheit": {
      "de": "genommen",
      "lv": "preso"
    }
  },
  {
    "infinitiv": {
      "de": "nennen",
      "lv": "nominare"
    },
    "praesens": {
      "de": "er nennt",
      "lv": "lui nomina"
    },
    "imperfektIndikativ": {
      "de": "er nannte",
      "lv": "lui nominò"
    },
    "imperfektKonjunktiv": {
      "de": "er nennte",
      "lv": "lui nominerebbe"
    },
    "partizipVergangenheit": {
      "de": "genannt",
      "lv": "nominato"
    }
  },
  {
    "infinitiv": {
      "de": "pfeifen",
      "lv": "fischiare"
    },
    "praesens": {
      "de": "er pfeift",
      "lv": "lui fischia"
    },
    "imperfektIndikativ": {
      "de": "er pfiff",
      "lv": "lui fischiò"
    },
    "imperfektKonjunktiv": {
      "de": "er pfiffe",
      "lv": "lui fischierebbe"
    },
    "partizipVergangenheit": {
      "de": "gepfiffen",
      "lv": "fischiato"
    }
  },
  {
    "infinitiv": {
      "de": "pflegen",
      "lv": "curare"
    },
    "praesens": {
      "de": "er pflegt",
      "lv": "lui cura"
    },
    "imperfektIndikativ": {
      "de": "er pflegte / er pflog",
      "lv": "lui curò"
    },
    "imperfektKonjunktiv": {
      "de": "er pflegte / er pflöge",
      "lv": "lui curerebbe"
    },
    "partizipVergangenheit": {
      "de": "gepflegt / gepflogen",
      "lv": "curato"
    }
  },
  {
    "infinitiv": {
      "de": "preisen",
      "lv": "lodare"
    },
    "praesens": {
      "de": "er preist",
      "lv": "lui loda"
    },
    "imperfektIndikativ": {
      "de": "er pries",
      "lv": "lui lodò"
    },
    "imperfektKonjunktiv": {
      "de": "er priese",
      "lv": "lui loderebbe"
    },
    "partizipVergangenheit": {
      "de": "gepriesen",
      "lv": "lodato"
    }
  },
  {
    "infinitiv": {
      "de": "quellen",
      "lv": "gonfiarsi"
    },
    "praesens": {
      "de": "er quillt",
      "lv": "lui si gonfia"
    },
    "imperfektIndikativ": {
      "de": "er quoll",
      "lv": "lui si gonfiò"
    },
    "imperfektKonjunktiv": {
      "de": "er quölle",
      "lv": "lui si gonfierebbe"
    },
    "partizipVergangenheit": {
      "de": "gequollen (er ist)",
      "lv": "gonfiato"
    }
  },
  {
    "infinitiv": {
      "de": "raten",
      "lv": "consigliare / indovinare"
    },
    "praesens": {
      "de": "er rät",
      "lv": "lui consiglia / indovina"
    },
    "imperfektIndikativ": {
      "de": "er riet",
      "lv": "lui consigliò / indovinò"
    },
    "imperfektKonjunktiv": {
      "de": "er riete",
      "lv": "lui consiglierebbe / indovinerebbe"
    },
    "partizipVergangenheit": {
      "de": "geraten",
      "lv": "consigliato / indovinato"
    }
  },
  {
    "infinitiv": {
      "de": "reiben",
      "lv": "strofinare"
    },
    "praesens": {
      "de": "er reibt",
      "lv": "lui strofina"
    },
    "imperfektIndikativ": {
      "de": "er rieb",
      "lv": "lui strofinò"
    },
    "imperfektKonjunktiv": {
      "de": "er riebe",
      "lv": "lui strofinerebbe"
    },
    "partizipVergangenheit": {
      "de": "gerieben",
      "lv": "strofinato"
    }
  },
  {
    "infinitiv": {
      "de": "reißen",
      "lv": "strappare"
    },
    "praesens": {
      "de": "er reißt",
      "lv": "lui strappa"
    },
    "imperfektIndikativ": {
      "de": "er riss",
      "lv": "lui strappò"
    },
    "imperfektKonjunktiv": {
      "de": "er risse",
      "lv": "lui strapperebbe"
    },
    "partizipVergangenheit": {
      "de": "gerissen",
      "lv": "strappato"
    }
  },
  {
    "infinitiv": {
      "de": "reiten",
      "lv": "cavalcare"
    },
    "praesens": {
      "de": "er reitet",
      "lv": "lui cavalca"
    },
    "imperfektIndikativ": {
      "de": "er ritt",
      "lv": "lui cavalcò"
    },
    "imperfektKonjunktiv": {
      "de": "er ritte",
      "lv": "lui cavalcherebbe"
    },
    "partizipVergangenheit": {
      "de": "geritten (er ist)",
      "lv": "cavalcato"
    }
  },
  {
    "infinitiv": {
      "de": "rennen",
      "lv": "correre"
    },
    "praesens": {
      "de": "er rennt",
      "lv": "lui corre"
    },
    "imperfektIndikativ": {
      "de": "er rannte",
      "lv": "lui corse"
    },
    "imperfektKonjunktiv": {
      "de": "er rennte",
      "lv": "lui correrebbe"
    },
    "partizipVergangenheit": {
      "de": "gerannt",
      "lv": "corso"
    }
  },
  {
    "infinitiv": {
      "de": "riechen",
      "lv": "annusare"
    },
    "praesens": {
      "de": "er riecht",
      "lv": "lui annusa"
    },
    "imperfektIndikativ": {
      "de": "er roch",
      "lv": "lui annusò"
    },
    "imperfektKonjunktiv": {
      "de": "er röche",
      "lv": "lui annuserebbe"
    },
    "partizipVergangenheit": {
      "de": "gerochen",
      "lv": "annusato"
    }
  },
  {
    "infinitiv": {
      "de": "ringen",
      "lv": "lottare"
    },
    "praesens": {
      "de": "er ringt",
      "lv": "lui lotta"
    },
    "imperfektIndikativ": {
      "de": "er rang",
      "lv": "lui lottò"
    },
    "imperfektKonjunktiv": {
      "de": "er ränge",
      "lv": "lui lotterebbe"
    },
    "partizipVergangenheit": {
      "de": "gerungen",
      "lv": "lottato"
    }
  },
  {
    "infinitiv": {
      "de": "rinnen",
      "lv": "scorrere"
    },
    "praesens": {
      "de": "er rinnt",
      "lv": "lui scorre"
    },
    "imperfektIndikativ": {
      "de": "er rann",
      "lv": "lui scorse"
    },
    "imperfektKonjunktiv": {
      "de": "er ränne / er rönne",
      "lv": "lui scorrerebbe"
    },
    "partizipVergangenheit": {
      "de": "geronnen (er ist)",
      "lv": "scorso"
    }
  },
  {
    "infinitiv": {
      "de": "rufen",
      "lv": "chiamare"
    },
    "praesens": {
      "de": "er ruft",
      "lv": "lui chiama"
    },
    "imperfektIndikativ": {
      "de": "er rief",
      "lv": "lui chiamò"
    },
    "imperfektKonjunktiv": {
      "de": "er riefe",
      "lv": "lui chiamerebbe"
    },
    "partizipVergangenheit": {
      "de": "gerufen",
      "lv": "chiamato"
    }
  },
  {
    "infinitiv": {
      "de": "salzen",
      "lv": "salare"
    },
    "praesens": {
      "de": "er salzt",
      "lv": "lui sala"
    },
    "imperfektIndikativ": {
      "de": "er salzte",
      "lv": "lui salò"
    },
    "imperfektKonjunktiv": {
      "de": "er salzte",
      "lv": "lui salerebbe"
    },
    "partizipVergangenheit": {
      "de": "gesalzen",
      "lv": "salato"
    }
  },
  {
    "infinitiv": {
      "de": "saufen",
      "lv": "sbevazzare / bere"
    },
    "praesens": {
      "de": "er säuft",
      "lv": "lui sbevazza / beve"
    },
    "imperfektIndikativ": {
      "de": "er soff",
      "lv": "lui sbevazzò / bevve"
    },
    "imperfektKonjunktiv": {
      "de": "er söffe",
      "lv": "lui sbevazzerebbe / berrebbe"
    },
    "partizipVergangenheit": {
      "de": "gesoffen",
      "lv": "sbevazzato / bevuto"
    }
  },
  {
    "infinitiv": {
      "de": "saugen",
      "lv": "succhiare"
    },
    "praesens": {
      "de": "er saugt",
      "lv": "lui succhia"
    },
    "imperfektIndikativ": {
      "de": "er sog",
      "lv": "lui succhiò"
    },
    "imperfektKonjunktiv": {
      "de": "er söge",
      "lv": "lui succhierebbe"
    },
    "partizipVergangenheit": {
      "de": "gesogen",
      "lv": "succhiato"
    }
  },
  {
    "infinitiv": {
      "de": "schaffen",
      "lv": "creare"
    },
    "praesens": {
      "de": "er schafft",
      "lv": "lui crea"
    },
    "imperfektIndikativ": {
      "de": "er schuf",
      "lv": "lui creò"
    },
    "imperfektKonjunktiv": {
      "de": "er schüfe",
      "lv": "lui creerebbe"
    },
    "partizipVergangenheit": {
      "de": "geschaffen",
      "lv": "creato"
    }
  },
  {
    "infinitiv": {
      "de": "schallen",
      "lv": "risuonare"
    },
    "praesens": {
      "de": "es schallt",
      "lv": "lui risuona"
    },
    "imperfektIndikativ": {
      "de": "es schallte / es scholl",
      "lv": "lui risuonò"
    },
    "imperfektKonjunktiv": {
      "de": "es schallte / es schölle",
      "lv": "lui risuonerebbe"
    },
    "partizipVergangenheit": {
      "de": "geschallt",
      "lv": "risuonato"
    }
  },
  {
    "infinitiv": {
      "de": "scheiden",
      "lv": "separare / separarsi"
    },
    "praesens": {
      "de": "er scheidet",
      "lv": "lui separa / si separa"
    },
    "imperfektIndikativ": {
      "de": "er schied",
      "lv": "lui separò / si separò"
    },
    "imperfektKonjunktiv": {
      "de": "er schiede",
      "lv": "lui separerebbe / si separerebbe"
    },
    "partizipVergangenheit": {
      "de": "geschieden (er hat / er ist)",
      "lv": "separato / separato"
    }
  },
  {
    "infinitiv": {
      "de": "scheinen",
      "lv": "brillare / sembrare"
    },
    "praesens": {
      "de": "er scheint",
      "lv": "lui brilla / sembra"
    },
    "imperfektIndikativ": {
      "de": "er schien",
      "lv": "lui brillò / sembrò"
    },
    "imperfektKonjunktiv": {
      "de": "er schiene",
      "lv": "lui brillerebbe / sembrerebbe"
    },
    "partizipVergangenheit": {
      "de": "geschienen",
      "lv": "brillato / sembrato"
    }
  },
  {
    "infinitiv": {
      "de": "schelten",
      "lv": "sgridare"
    },
    "praesens": {
      "de": "er schilt",
      "lv": "lui sgrida"
    },
    "imperfektIndikativ": {
      "de": "er schalt",
      "lv": "lui sgridò"
    },
    "imperfektKonjunktiv": {
      "de": "er schölte / er schälte",
      "lv": "lui sgriderebbe"
    },
    "partizipVergangenheit": {
      "de": "gescholten",
      "lv": "sgridato"
    }
  },
  {
    "infinitiv": {
      "de": "scheren",
      "lv": "tosare"
    },
    "praesens": {
      "de": "er schert",
      "lv": "lui tosa"
    },
    "imperfektIndikativ": {
      "de": "er schor / er scherte",
      "lv": "lui tosò"
    },
    "imperfektKonjunktiv": {
      "de": "er schöre / er scherte",
      "lv": "lui toserebbe"
    },
    "partizipVergangenheit": {
      "de": "geschoren / geschert",
      "lv": "tosato"
    }
  },
  {
    "infinitiv": {
      "de": "schieben",
      "lv": "spingere"
    },
    "praesens": {
      "de": "er schiebt",
      "lv": "lui spinge"
    },
    "imperfektIndikativ": {
      "de": "er schob",
      "lv": "lui spinse"
    },
    "imperfektKonjunktiv": {
      "de": "er schöbe",
      "lv": "lui spingerebbe"
    },
    "partizipVergangenheit": {
      "de": "geschoben",
      "lv": "spinto"
    }
  },
  {
    "infinitiv": {
      "de": "schießen",
      "lv": "sparare"
    },
    "praesens": {
      "de": "er schießt",
      "lv": "lui spara"
    },
    "imperfektIndikativ": {
      "de": "er schoss",
      "lv": "lui sparò"
    },
    "imperfektKonjunktiv": {
      "de": "er schösse",
      "lv": "lui sparerebbe"
    },
    "partizipVergangenheit": {
      "de": "geschossen",
      "lv": "sparato"
    }
  },
  {
    "infinitiv": {
      "de": "schinden",
      "lv": "tormentare"
    },
    "praesens": {
      "de": "er schindet",
      "lv": "lui tormenta"
    },
    "imperfektIndikativ": {
      "de": "er schindete",
      "lv": "lui tormentò"
    },
    "imperfektKonjunktiv": {
      "de": "er schindete",
      "lv": "lui tormenterebbe"
    },
    "partizipVergangenheit": {
      "de": "geschunden",
      "lv": "tormentato"
    }
  },
  {
    "infinitiv": {
      "de": "schlafen",
      "lv": "dormire"
    },
    "praesens": {
      "de": "er schläft",
      "lv": "lui dorme"
    },
    "imperfektIndikativ": {
      "de": "er schlief",
      "lv": "lui dormì"
    },
    "imperfektKonjunktiv": {
      "de": "er schliefe",
      "lv": "lui dormirebbe"
    },
    "partizipVergangenheit": {
      "de": "geschlafen",
      "lv": "dormito"
    }
  },
  {
    "infinitiv": {
      "de": "schlagen",
      "lv": "colpire"
    },
    "praesens": {
      "de": "er schlägt",
      "lv": "lui colpisce"
    },
    "imperfektIndikativ": {
      "de": "er schlug",
      "lv": "lui colpì"
    },
    "imperfektKonjunktiv": {
      "de": "er schlüge",
      "lv": "lui colpirebbe"
    },
    "partizipVergangenheit": {
      "de": "geschlagen",
      "lv": "colpito"
    }
  },
  {
    "infinitiv": {
      "de": "schleichen",
      "lv": "camminare furtivamente"
    },
    "praesens": {
      "de": "er schleicht",
      "lv": "lui cammina furtivamente"
    },
    "imperfektIndikativ": {
      "de": "er schlich",
      "lv": "lui camminò furtivamente"
    },
    "imperfektKonjunktiv": {
      "de": "er schliche",
      "lv": "lui camminerebbe furtivamente"
    },
    "partizipVergangenheit": {
      "de": "geschlichen (er ist)",
      "lv": "camminato furtivamente"
    }
  },
  {
    "infinitiv": {
      "de": "schleifen",
      "lv": "levigare"
    },
    "praesens": {
      "de": "er schleift",
      "lv": "lui leviga"
    },
    "imperfektIndikativ": {
      "de": "er schliff",
      "lv": "lui levigò"
    },
    "imperfektKonjunktiv": {
      "de": "er schliffe",
      "lv": "lui levigherebbe"
    },
    "partizipVergangenheit": {
      "de": "geschliffen",
      "lv": "levigato"
    }
  },
  {
    "infinitiv": {
      "de": "schließen",
      "lv": "chiudere"
    },
    "praesens": {
      "de": "er schließt",
      "lv": "lui chiude"
    },
    "imperfektIndikativ": {
      "de": "er schloss",
      "lv": "lui chiuse"
    },
    "imperfektKonjunktiv": {
      "de": "er schlösse",
      "lv": "lui chiuderebbe"
    },
    "partizipVergangenheit": {
      "de": "geschlossen",
      "lv": "chiuso"
    }
  },
  {
    "infinitiv": {
      "de": "schlingen",
      "lv": "inghiottire"
    },
    "praesens": {
      "de": "er schlingt",
      "lv": "lui inghiottisce"
    },
    "imperfektIndikativ": {
      "de": "er schlang",
      "lv": "lui inghiottì"
    },
    "imperfektKonjunktiv": {
      "de": "er schlänge",
      "lv": "lui inghiottirebbe"
    },
    "partizipVergangenheit": {
      "de": "geschlungen",
      "lv": "inghiottito"
    }
  },
  {
    "infinitiv": {
      "de": "schmeißen",
      "lv": "gettare"
    },
    "praesens": {
      "de": "er schmeißt",
      "lv": "lui getta"
    },
    "imperfektIndikativ": {
      "de": "er schmiss",
      "lv": "lui gettò"
    },
    "imperfektKonjunktiv": {
      "de": "er schmisse",
      "lv": "lui getterebbe"
    },
    "partizipVergangenheit": {
      "de": "geschmissen",
      "lv": "gettato"
    }
  },
  {
    "infinitiv": {
      "de": "schmelzen",
      "lv": "sciogliersi"
    },
    "praesens": {
      "de": "er schmilzt",
      "lv": "lui si scioglie"
    },
    "imperfektIndikativ": {
      "de": "er schmolz",
      "lv": "lui si sciolse"
    },
    "imperfektKonjunktiv": {
      "de": "er schmölze",
      "lv": "lui si scioglierebbe"
    },
    "partizipVergangenheit": {
      "de": "geschmolzen (er ist)",
      "lv": "sciolto"
    }
  },
  {
    "infinitiv": {
      "de": "schnauben",
      "lv": "sbuffare"
    },
    "praesens": {
      "de": "er schnaubt",
      "lv": "lui sbuffa"
    },
    "imperfektIndikativ": {
      "de": "er schnaubte / er schnob",
      "lv": "lui sbuffò"
    },
    "imperfektKonjunktiv": {
      "de": "er schnaubte / er schnöbe",
      "lv": "lui sbufferebbe"
    },
    "partizipVergangenheit": {
      "de": "geschnaubt / geschnoben",
      "lv": "sbuffato"
    }
  },
  {
    "infinitiv": {
      "de": "schneiden",
      "lv": "tagliare"
    },
    "praesens": {
      "de": "er schneidet",
      "lv": "lui taglia"
    },
    "imperfektIndikativ": {
      "de": "er schnitt",
      "lv": "lui tagliò"
    },
    "imperfektKonjunktiv": {
      "de": "er schnitte",
      "lv": "lui taglierebbe"
    },
    "partizipVergangenheit": {
      "de": "geschnitten",
      "lv": "tagliato"
    }
  },
  {
    "infinitiv": {
      "de": "schreiben",
      "lv": "scrivere"
    },
    "praesens": {
      "de": "er schreibt",
      "lv": "lui scrive"
    },
    "imperfektIndikativ": {
      "de": "er schrieb",
      "lv": "lui scrisse"
    },
    "imperfektKonjunktiv": {
      "de": "er schriebe",
      "lv": "lui scriverebbe"
    },
    "partizipVergangenheit": {
      "de": "geschrieben",
      "lv": "scritto"
    }
  },
  {
    "infinitiv": {
      "de": "schreien",
      "lv": "gridare"
    },
    "praesens": {
      "de": "er schreit",
      "lv": "lui grida"
    },
    "imperfektIndikativ": {
      "de": "er schrie",
      "lv": "lui gridò"
    },
    "imperfektKonjunktiv": {
      "de": "er schriee",
      "lv": "lui griderebbe"
    },
    "partizipVergangenheit": {
      "de": "geschrien",
      "lv": "gridato"
    }
  },
  {
    "infinitiv": {
      "de": "schreiten",
      "lv": "camminare a grandi passi"
    },
    "praesens": {
      "de": "er schreitet",
      "lv": "lui cammina a grandi passi"
    },
    "imperfektIndikativ": {
      "de": "er schritt",
      "lv": "lui camminò a grandi passi"
    },
    "imperfektKonjunktiv": {
      "de": "er schritte",
      "lv": "lui camminerebbe a grandi passi"
    },
    "partizipVergangenheit": {
      "de": "geschritten (er ist)",
      "lv": "camminato a grandi passi"
    }
  },
  {
    "infinitiv": {
      "de": "schweigen",
      "lv": "tacere"
    },
    "praesens": {
      "de": "er schweigt",
      "lv": "lui tace"
    },
    "imperfektIndikativ": {
      "de": "er schwieg",
      "lv": "lui tacque"
    },
    "imperfektKonjunktiv": {
      "de": "er schwiege",
      "lv": "lui tacerebbe"
    },
    "partizipVergangenheit": {
      "de": "geschwiegen",
      "lv": "taciuto"
    }
  },
  {
    "infinitiv": {
      "de": "schwellen",
      "lv": "gonfiarsi"
    },
    "praesens": {
      "de": "er schwillt",
      "lv": "lui si gonfia"
    },
    "imperfektIndikativ": {
      "de": "er schwoll",
      "lv": "lui si gonfiò"
    },
    "imperfektKonjunktiv": {
      "de": "er schwölle",
      "lv": "lui si gonfierebbe"
    },
    "partizipVergangenheit": {
      "de": "geschwollen (er ist)",
      "lv": "gonfiato"
    }
  },
  {
    "infinitiv": {
      "de": "schwimmen",
      "lv": "nuotare"
    },
    "praesens": {
      "de": "er schwimmt",
      "lv": "lui nuota"
    },
    "imperfektIndikativ": {
      "de": "er schwamm",
      "lv": "lui nuotò"
    },
    "imperfektKonjunktiv": {
      "de": "er schwömme / er schwämme",
      "lv": "lui nuoterebbe"
    },
    "partizipVergangenheit": {
      "de": "geschwommen (er ist)",
      "lv": "nuotato"
    }
  },
  {
    "infinitiv": {
      "de": "schwinden",
      "lv": "svanire"
    },
    "praesens": {
      "de": "er schwindet",
      "lv": "lui svanisce"
    },
    "imperfektIndikativ": {
      "de": "er schwand",
      "lv": "lui svanì"
    },
    "imperfektKonjunktiv": {
      "de": "er schwände",
      "lv": "lui svanirebbe"
    },
    "partizipVergangenheit": {
      "de": "geschwunden (er ist)",
      "lv": "svanito"
    }
  },
  {
    "infinitiv": {
      "de": "schwingen",
      "lv": "agitare"
    },
    "praesens": {
      "de": "er schwingt",
      "lv": "lui agita"
    },
    "imperfektIndikativ": {
      "de": "er schwang",
      "lv": "lui agitò"
    },
    "imperfektKonjunktiv": {
      "de": "er schwänge",
      "lv": "lui agiterebbe"
    },
    "partizipVergangenheit": {
      "de": "geschwungen",
      "lv": "agitato"
    }
  },
  {
    "infinitiv": {
      "de": "schwören",
      "lv": "giurare"
    },
    "praesens": {
      "de": "er schwört",
      "lv": "lui giura"
    },
    "imperfektIndikativ": {
      "de": "er schwur / er schwor",
      "lv": "lui giurò"
    },
    "imperfektKonjunktiv": {
      "de": "er schwöre",
      "lv": "lui giurerebbe"
    },
    "partizipVergangenheit": {
      "de": "geschworen",
      "lv": "giurato"
    }
  },
  {
    "infinitiv": {
      "de": "sehen",
      "lv": "vedere"
    },
    "praesens": {
      "de": "er sieht",
      "lv": "lui vede"
    },
    "imperfektIndikativ": {
      "de": "er sah",
      "lv": "lui vide"
    },
    "imperfektKonjunktiv": {
      "de": "er sähe",
      "lv": "lui vedrebbe"
    },
    "partizipVergangenheit": {
      "de": "gesehen",
      "lv": "visto"
    }
  },
  {
    "infinitiv": {
      "de": "sein",
      "lv": "essere"
    },
    "praesens": {
      "de": "er ist",
      "lv": "lui è"
    },
    "imperfektIndikativ": {
      "de": "er war",
      "lv": "lui fu"
    },
    "imperfektKonjunktiv": {
      "de": "er wäre",
      "lv": "lui sarebbe"
    },
    "partizipVergangenheit": {
      "de": "gewesen",
      "lv": "stato"
    }
  },
  {
    "infinitiv": {
      "de": "senden",
      "lv": "inviare"
    },
    "praesens": {
      "de": "er sendet",
      "lv": "lui invia"
    },
    "imperfektIndikativ": {
      "de": "er sandte / er sendete",
      "lv": "lui inviò"
    },
    "imperfektKonjunktiv": {
      "de": "er sendete",
      "lv": "lui invierebbe"
    },
    "partizipVergangenheit": {
      "de": "gesandt / gesendet",
      "lv": "inviato"
    }
  },
  {
    "infinitiv": {
      "de": "sieden",
      "lv": "bollire"
    },
    "praesens": {
      "de": "er siedet",
      "lv": "lui bolle"
    },
    "imperfektIndikativ": {
      "de": "er sott / er siedete",
      "lv": "lui bollì"
    },
    "imperfektKonjunktiv": {
      "de": "er sötte / er siedete",
      "lv": "lui bollirebbe"
    },
    "partizipVergangenheit": {
      "de": "gesotten / gesiedet",
      "lv": "bollito"
    }
  },
  {
    "infinitiv": {
      "de": "singen",
      "lv": "cantare"
    },
    "praesens": {
      "de": "er singt",
      "lv": "lui canta"
    },
    "imperfektIndikativ": {
      "de": "er sang",
      "lv": "lui cantò"
    },
    "imperfektKonjunktiv": {
      "de": "er sänge",
      "lv": "lui canterebbe"
    },
    "partizipVergangenheit": {
      "de": "gesungen",
      "lv": "cantato"
    }
  },
  {
    "infinitiv": {
      "de": "sinken",
      "lv": "affondare"
    },
    "praesens": {
      "de": "er sinkt",
      "lv": "lui affonda"
    },
    "imperfektIndikativ": {
      "de": "er sank",
      "lv": "lui affondò"
    },
    "imperfektKonjunktiv": {
      "de": "er sänke",
      "lv": "lui affonderebbe"
    },
    "partizipVergangenheit": {
      "de": "gesunken (er ist)",
      "lv": "affondato"
    }
  },
  {
    "infinitiv": {
      "de": "sinnen",
      "lv": "riflettere"
    },
    "praesens": {
      "de": "er sinnt",
      "lv": "lui riflette"
    },
    "imperfektIndikativ": {
      "de": "er sann",
      "lv": "lui rifletté"
    },
    "imperfektKonjunktiv": {
      "de": "er sönne / er sänne",
      "lv": "lui rifletterebbe"
    },
    "partizipVergangenheit": {
      "de": "gesonnen",
      "lv": "riflettuto"
    }
  },
  {
    "infinitiv": {
      "de": "sitzen",
      "lv": "sedere"
    },
    "praesens": {
      "de": "er sitzt",
      "lv": "lui siede"
    },
    "imperfektIndikativ": {
      "de": "er saß",
      "lv": "lui sedé"
    },
    "imperfektKonjunktiv": {
      "de": "er säße",
      "lv": "lui sederebbe"
    },
    "partizipVergangenheit": {
      "de": "gesessen",
      "lv": "seduto"
    }
  },
  {
    "infinitiv": {
      "de": "sollen",
      "lv": "dovere"
    },
    "praesens": {
      "de": "er soll",
      "lv": "lui deve"
    },
    "imperfektIndikativ": {
      "de": "er sollte",
      "lv": "lui dovette"
    },
    "imperfektKonjunktiv": {
      "de": "er sollte",
      "lv": "lui dovrebbe"
    },
    "partizipVergangenheit": {
      "de": "gesollt",
      "lv": "dovuto"
    }
  },
  {
    "infinitiv": {
      "de": "speien",
      "lv": "sputare"
    },
    "praesens": {
      "de": "er speit",
      "lv": "lui sputa"
    },
    "imperfektIndikativ": {
      "de": "er spie",
      "lv": "lui sputò"
    },
    "imperfektKonjunktiv": {
      "de": "er spie",
      "lv": "lui sputerebbe"
    },
    "partizipVergangenheit": {
      "de": "gespien",
      "lv": "sputato"
    }
  },
  {
    "infinitiv": {
      "de": "spinnen",
      "lv": "filare"
    },
    "praesens": {
      "de": "er spinnt",
      "lv": "lui fila"
    },
    "imperfektIndikativ": {
      "de": "er spann",
      "lv": "lui filò"
    },
    "imperfektKonjunktiv": {
      "de": "er spönne / er spänne",
      "lv": "lui filerebbe"
    },
    "partizipVergangenheit": {
      "de": "gesponnen",
      "lv": "filato"
    }
  },
  {
    "infinitiv": {
      "de": "spleißen",
      "lv": "unire"
    },
    "praesens": {
      "de": "er spleißt",
      "lv": "lui unisce"
    },
    "imperfektIndikativ": {
      "de": "er spliss",
      "lv": "lui unì"
    },
    "imperfektKonjunktiv": {
      "de": "er splisse",
      "lv": "lui unirebbe"
    },
    "partizipVergangenheit": {
      "de": "gesplissen",
      "lv": "unito"
    }
  },
  {
    "infinitiv": {
      "de": "sprechen",
      "lv": "parlare"
    },
    "praesens": {
      "de": "er spricht",
      "lv": "lui parla"
    },
    "imperfektIndikativ": {
      "de": "er sprach",
      "lv": "lui parlò"
    },
    "imperfektKonjunktiv": {
      "de": "er spräche",
      "lv": "lui parlerebbe"
    },
    "partizipVergangenheit": {
      "de": "gesprochen",
      "lv": "parlato"
    }
  },
  {
    "infinitiv": {
      "de": "sprießen",
      "lv": "germogliare"
    },
    "praesens": {
      "de": "er sprießt",
      "lv": "lui germoglia"
    },
    "imperfektIndikativ": {
      "de": "er spross",
      "lv": "lui germogliò"
    },
    "imperfektKonjunktiv": {
      "de": "er sprösse",
      "lv": "lui germoglierebbe"
    },
    "partizipVergangenheit": {
      "de": "gesprossen (er ist)",
      "lv": "germogliato"
    }
  },
  {
    "infinitiv": {
      "de": "springen",
      "lv": "saltare"
    },
    "praesens": {
      "de": "er springt",
      "lv": "lui salta"
    },
    "imperfektIndikativ": {
      "de": "er sprang",
      "lv": "lui saltò"
    },
    "imperfektKonjunktiv": {
      "de": "er spränge",
      "lv": "lui salterebbe"
    },
    "partizipVergangenheit": {
      "de": "gesprungen (er ist)",
      "lv": "saltato"
    }
  },
  {
    "infinitiv": {
      "de": "stechen",
      "lv": "pungere"
    },
    "praesens": {
      "de": "er sticht",
      "lv": "lui punge"
    },
    "imperfektIndikativ": {
      "de": "er stach",
      "lv": "lui punse"
    },
    "imperfektKonjunktiv": {
      "de": "er stäche",
      "lv": "lui pungerebbe"
    },
    "partizipVergangenheit": {
      "de": "gestochen",
      "lv": "punto"
    }
  },
  {
    "infinitiv": {
      "de": "stecken",
      "lv": "infilare / conficcare"
    },
    "praesens": {
      "de": "er steckt",
      "lv": "lui infila / conficca"
    },
    "imperfektIndikativ": {
      "de": "er stak / er steckte",
      "lv": "lui infilò / conficcò"
    },
    "imperfektKonjunktiv": {
      "de": "er stäke / er steckte",
      "lv": "lui infilerebbe / conficcherebbe"
    },
    "partizipVergangenheit": {
      "de": "gesteckt",
      "lv": "infilato / conficcato"
    }
  },
  {
    "infinitiv": {
      "de": "stehen",
      "lv": "stare in piedi"
    },
    "praesens": {
      "de": "er steht",
      "lv": "lui sta in piedi"
    },
    "imperfektIndikativ": {
      "de": "er stand",
      "lv": "lui stette in piedi"
    },
    "imperfektKonjunktiv": {
      "de": "er stände / er stünde",
      "lv": "lui starebbe in piedi"
    },
    "partizipVergangenheit": {
      "de": "gestanden",
      "lv": "stato in piedi"
    }
  },
  {
    "infinitiv": {
      "de": "stehlen",
      "lv": "rubare"
    },
    "praesens": {
      "de": "er stiehlt",
      "lv": "lui ruba"
    },
    "imperfektIndikativ": {
      "de": "er stahl",
      "lv": "lui rubò"
    },
    "imperfektKonjunktiv": {
      "de": "er stöhle / er stähle",
      "lv": "lui ruberebbe"
    },
    "partizipVergangenheit": {
      "de": "gestohlen",
      "lv": "rubato"
    }
  },
  {
    "infinitiv": {
      "de": "steigen",
      "lv": "salire"
    },
    "praesens": {
      "de": "er steigt",
      "lv": "lui sale"
    },
    "imperfektIndikativ": {
      "de": "er stieg",
      "lv": "lui salì"
    },
    "imperfektKonjunktiv": {
      "de": "er stiege",
      "lv": "lui salirebbe"
    },
    "partizipVergangenheit": {
      "de": "gestiegen (er ist)",
      "lv": "salito"
    }
  },
  {
    "infinitiv": {
      "de": "sterben",
      "lv": "morire"
    },
    "praesens": {
      "de": "er stirbt",
      "lv": "lui muore"
    },
    "imperfektIndikativ": {
      "de": "er starb",
      "lv": "lui morì"
    },
    "imperfektKonjunktiv": {
      "de": "er stürbe",
      "lv": "lui morirebbe"
    },
    "partizipVergangenheit": {
      "de": "gestorben (er ist)",
      "lv": "morto"
    }
  },
  {
    "infinitiv": {
      "de": "stinken",
      "lv": "puzzare"
    },
    "praesens": {
      "de": "es stinkt",
      "lv": "lui puzza"
    },
    "imperfektIndikativ": {
      "de": "es stank",
      "lv": "lui puzzò"
    },
    "imperfektKonjunktiv": {
      "de": "es stänke",
      "lv": "lui puzzerebbe"
    },
    "partizipVergangenheit": {
      "de": "gestunken",
      "lv": "puzzato"
    }
  },
  {
    "infinitiv": {
      "de": "stoßen",
      "lv": "spingere"
    },
    "praesens": {
      "de": "er stößt",
      "lv": "lui spinge"
    },
    "imperfektIndikativ": {
      "de": "er stieß",
      "lv": "lui spinse"
    },
    "imperfektKonjunktiv": {
      "de": "er stieße",
      "lv": "lui spingerebbe"
    },
    "partizipVergangenheit": {
      "de": "gestoßen",
      "lv": "spinto"
    }
  },
  {
    "infinitiv": {
      "de": "streichen",
      "lv": "verniciare / cancellare"
    },
    "praesens": {
      "de": "er streicht",
      "lv": "lui vernicia / cancella"
    },
    "imperfektIndikativ": {
      "de": "er strich",
      "lv": "lui verniciò / cancellò"
    },
    "imperfektKonjunktiv": {
      "de": "er striche",
      "lv": "lui vernicerebbe / cancellerebbe"
    },
    "partizipVergangenheit": {
      "de": "gestrichen",
      "lv": "verniciato / cancellato"
    }
  },
  {
    "infinitiv": {
      "de": "streiten",
      "lv": "litigare"
    },
    "praesens": {
      "de": "er streitet",
      "lv": "lui litiga"
    },
    "imperfektIndikativ": {
      "de": "er stritt",
      "lv": "lui litigò"
    },
    "imperfektKonjunktiv": {
      "de": "er stritte",
      "lv": "lui litigherebbe"
    },
    "partizipVergangenheit": {
      "de": "gestritten",
      "lv": "litigato"
    }
  },
  {
    "infinitiv": {
      "de": "tragen",
      "lv": "portare"
    },
    "praesens": {
      "de": "er trägt",
      "lv": "lui porta"
    },
    "imperfektIndikativ": {
      "de": "er trug",
      "lv": "lui portò"
    },
    "imperfektKonjunktiv": {
      "de": "er trüge",
      "lv": "lui porterebbe"
    },
    "partizipVergangenheit": {
      "de": "getragen",
      "lv": "portato"
    }
  },
  {
    "infinitiv": {
      "de": "treffen",
      "lv": "incontrare"
    },
    "praesens": {
      "de": "er trifft",
      "lv": "lui incontra"
    },
    "imperfektIndikativ": {
      "de": "er traf",
      "lv": "lui incontrò"
    },
    "imperfektKonjunktiv": {
      "de": "er träfe",
      "lv": "lui incontrerebbe"
    },
    "partizipVergangenheit": {
      "de": "getroffen",
      "lv": "incontrato"
    }
  },
  {
    "infinitiv": {
      "de": "treiben",
      "lv": "cacciare"
    },
    "praesens": {
      "de": "er treibt",
      "lv": "lui caccia"
    },
    "imperfektIndikativ": {
      "de": "er trieb",
      "lv": "lui cacciò"
    },
    "imperfektKonjunktiv": {
      "de": "er triebe",
      "lv": "lui caccerebbe"
    },
    "partizipVergangenheit": {
      "de": "getrieben",
      "lv": "cacciato"
    }
  },
  {
    "infinitiv": {
      "de": "treten",
      "lv": "fare un passo / andare"
    },
    "praesens": {
      "de": "er tritt",
      "lv": "lui fa un passo / va"
    },
    "imperfektIndikativ": {
      "de": "er trat",
      "lv": "lui fece un passo / andò"
    },
    "imperfektKonjunktiv": {
      "de": "er träte",
      "lv": "lui farebbe un passo / andrebbe"
    },
    "partizipVergangenheit": {
      "de": "getreten (er ist)",
      "lv": "fatto un passo / andato"
    }
  },
  {
    "infinitiv": {
      "de": "trinken",
      "lv": "bere"
    },
    "praesens": {
      "de": "er trinkt",
      "lv": "lui beve"
    },
    "imperfektIndikativ": {
      "de": "er trank",
      "lv": "lui bevve"
    },
    "imperfektKonjunktiv": {
      "de": "er tränke",
      "lv": "lui berrebbe"
    },
    "partizipVergangenheit": {
      "de": "getrunken",
      "lv": "bevuto"
    }
  },
  {
    "infinitiv": {
      "de": "trügen",
      "lv": "ingannare"
    },
    "praesens": {
      "de": "er trügt",
      "lv": "lui inganna"
    },
    "imperfektIndikativ": {
      "de": "er trog",
      "lv": "lui ingannò"
    },
    "imperfektKonjunktiv": {
      "de": "er tröge",
      "lv": "lui ingannerebbe"
    },
    "partizipVergangenheit": {
      "de": "getrogen",
      "lv": "ingannato"
    }
  },
  {
    "infinitiv": {
      "de": "tun",
      "lv": "fare"
    },
    "praesens": {
      "de": "er tut",
      "lv": "lui fa"
    },
    "imperfektIndikativ": {
      "de": "er tat",
      "lv": "lui fece"
    },
    "imperfektKonjunktiv": {
      "de": "er täte",
      "lv": "lui farebbe"
    },
    "partizipVergangenheit": {
      "de": "getan",
      "lv": "fatto"
    }
  },
  {
    "infinitiv": {
      "de": "verderben",
      "lv": "rovinare"
    },
    "praesens": {
      "de": "er verdirbt",
      "lv": "lui rovina"
    },
    "imperfektIndikativ": {
      "de": "er verdarb",
      "lv": "lui rovinò"
    },
    "imperfektKonjunktiv": {
      "de": "er verdürbe",
      "lv": "lui rovinerebbe"
    },
    "partizipVergangenheit": {
      "de": "verdorben",
      "lv": "rovinato"
    }
  },
  {
    "infinitiv": {
      "de": "verdrießen",
      "lv": "infastidire"
    },
    "praesens": {
      "de": "er verdrießt",
      "lv": "lui infastidisce"
    },
    "imperfektIndikativ": {
      "de": "er verdross",
      "lv": "lui infastidì"
    },
    "imperfektKonjunktiv": {
      "de": "er verdrösse",
      "lv": "lui infastidirebbe"
    },
    "partizipVergangenheit": {
      "de": "verdrossen",
      "lv": "infastidito"
    }
  },
  {
    "infinitiv": {
      "de": "vergessen",
      "lv": "dimenticare"
    },
    "praesens": {
      "de": "er vergisst",
      "lv": "lui dimentica"
    },
    "imperfektIndikativ": {
      "de": "er vergaß",
      "lv": "lui dimenticò"
    },
    "imperfektKonjunktiv": {
      "de": "er vergäße",
      "lv": "lui dimenticherebbe"
    },
    "partizipVergangenheit": {
      "de": "vergessen",
      "lv": "dimenticato"
    }
  },
  {
    "infinitiv": {
      "de": "verlieren",
      "lv": "perdere"
    },
    "praesens": {
      "de": "er verliert",
      "lv": "lui perde"
    },
    "imperfektIndikativ": {
      "de": "er verlor",
      "lv": "lui perse"
    },
    "imperfektKonjunktiv": {
      "de": "er verlöre",
      "lv": "lui perderebbe"
    },
    "partizipVergangenheit": {
      "de": "verloren",
      "lv": "perso"
    }
  },
  {
    "infinitiv": {
      "de": "wachsen",
      "lv": "crescere"
    },
    "praesens": {
      "de": "er wächst",
      "lv": "lui cresce"
    },
    "imperfektIndikativ": {
      "de": "er wuchs",
      "lv": "lui crebbe"
    },
    "imperfektKonjunktiv": {
      "de": "er wüchse",
      "lv": "lui crescerebbe"
    },
    "partizipVergangenheit": {
      "de": "gewachsen (er ist)",
      "lv": "cresciuto"
    }
  },
  {
    "infinitiv": {
      "de": "waschen",
      "lv": "lavare"
    },
    "praesens": {
      "de": "er wäscht",
      "lv": "lui lava"
    },
    "imperfektIndikativ": {
      "de": "er wusch",
      "lv": "lui lavò"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsche",
      "lv": "lui laverebbe"
    },
    "partizipVergangenheit": {
      "de": "gewaschen",
      "lv": "lavato"
    }
  },
  {
    "infinitiv": {
      "de": "weben",
      "lv": "tessere"
    },
    "praesens": {
      "de": "er webt",
      "lv": "lui tesse"
    },
    "imperfektIndikativ": {
      "de": "er wob / er webte",
      "lv": "lui tessé"
    },
    "imperfektKonjunktiv": {
      "de": "er wöbe / er webte",
      "lv": "lui tesserebbe"
    },
    "partizipVergangenheit": {
      "de": "gewoben",
      "lv": "tessuto"
    }
  },
  {
    "infinitiv": {
      "de": "weichen",
      "lv": "ritirarsi"
    },
    "praesens": {
      "de": "er weicht",
      "lv": "lui si ritira"
    },
    "imperfektIndikativ": {
      "de": "er wich",
      "lv": "lui si ritirò"
    },
    "imperfektKonjunktiv": {
      "de": "er wiche",
      "lv": "lui si ritirerebbe"
    },
    "partizipVergangenheit": {
      "de": "gewichen (er ist)",
      "lv": "ritirato"
    }
  },
  {
    "infinitiv": {
      "de": "weisen",
      "lv": "mostrare"
    },
    "praesens": {
      "de": "er weist",
      "lv": "lui mostra"
    },
    "imperfektIndikativ": {
      "de": "er wies",
      "lv": "lui mostrò"
    },
    "imperfektKonjunktiv": {
      "de": "er wiese",
      "lv": "lui mostrerebbe"
    },
    "partizipVergangenheit": {
      "de": "gewiesen",
      "lv": "mostrato"
    }
  },
  {
    "infinitiv": {
      "de": "wenden",
      "lv": "girare / rivoltare"
    },
    "praesens": {
      "de": "er wendet",
      "lv": "lui gira / rivolta"
    },
    "imperfektIndikativ": {
      "de": "er wandte / es wendete",
      "lv": "lui girò / rivoltò"
    },
    "imperfektKonjunktiv": {
      "de": "er wendete",
      "lv": "lui girerebbe / rivolterebbe"
    },
    "partizipVergangenheit": {
      "de": "gewandt / gewendet",
      "lv": "girato / rivoltato"
    }
  },
  {
    "infinitiv": {
      "de": "werben",
      "lv": "chiedere in matrimonio"
    },
    "praesens": {
      "de": "er wirbt",
      "lv": "lui chiede in matrimonio"
    },
    "imperfektIndikativ": {
      "de": "er warb",
      "lv": "lui chiese in matrimonio"
    },
    "imperfektKonjunktiv": {
      "de": "er würbe",
      "lv": "lui chiederebbe in matrimonio"
    },
    "partizipVergangenheit": {
      "de": "geworben",
      "lv": "chiesto in matrimonio"
    }
  },
  {
    "infinitiv": {
      "de": "werden",
      "lv": "diventare"
    },
    "praesens": {
      "de": "er wird",
      "lv": "lui diventa"
    },
    "imperfektIndikativ": {
      "de": "er wurde",
      "lv": "lui diventò"
    },
    "imperfektKonjunktiv": {
      "de": "er würde",
      "lv": "lui diventerebbe"
    },
    "partizipVergangenheit": {
      "de": "geworden",
      "lv": "diventato"
    }
  },
  {
    "infinitiv": {
      "de": "werfen",
      "lv": "lanciare"
    },
    "praesens": {
      "de": "er wirft",
      "lv": "lui lancia"
    },
    "imperfektIndikativ": {
      "de": "er warf",
      "lv": "lui lanciò"
    },
    "imperfektKonjunktiv": {
      "de": "er würfe",
      "lv": "lui lancerebbe"
    },
    "partizipVergangenheit": {
      "de": "geworfen",
      "lv": "lanciato"
    }
  },
  {
    "infinitiv": {
      "de": "wiegen",
      "lv": "pesare"
    },
    "praesens": {
      "de": "er wiegt",
      "lv": "lui pesa"
    },
    "imperfektIndikativ": {
      "de": "er wog",
      "lv": "lui pesò"
    },
    "imperfektKonjunktiv": {
      "de": "er wöge",
      "lv": "lui peserebbe"
    },
    "partizipVergangenheit": {
      "de": "gewogen",
      "lv": "pesato"
    }
  },
  {
    "infinitiv": {
      "de": "winden",
      "lv": "intrecciare"
    },
    "praesens": {
      "de": "er windet",
      "lv": "lui intreccia"
    },
    "imperfektIndikativ": {
      "de": "er wand",
      "lv": "lui intrecciò"
    },
    "imperfektKonjunktiv": {
      "de": "er wände",
      "lv": "lui intreccerebbe"
    },
    "partizipVergangenheit": {
      "de": "gewunden",
      "lv": "intrecciato"
    }
  },
  {
    "infinitiv": {
      "de": "wissen",
      "lv": "sapere"
    },
    "praesens": {
      "de": "er weiß",
      "lv": "lui sa"
    },
    "imperfektIndikativ": {
      "de": "er wusste",
      "lv": "lui seppe"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsste",
      "lv": "lui saprebbe"
    },
    "partizipVergangenheit": {
      "de": "gewusst",
      "lv": "saputo"
    }
  },
  {
    "infinitiv": {
      "de": "wollen",
      "lv": "volere"
    },
    "praesens": {
      "de": "er will",
      "lv": "lui vuole"
    },
    "imperfektIndikativ": {
      "de": "er wollte",
      "lv": "lui volle"
    },
    "imperfektKonjunktiv": {
      "de": "er wollte",
      "lv": "lui vorrebbe"
    },
    "partizipVergangenheit": {
      "de": "gewollt",
      "lv": "voluto"
    }
  },
  {
    "infinitiv": {
      "de": "wringen",
      "lv": "strizzare / spremere"
    },
    "praesens": {
      "de": "er wringt",
      "lv": "lui strizza / spreme"
    },
    "imperfektIndikativ": {
      "de": "er wrang",
      "lv": "lui strizzò / spremette"
    },
    "imperfektKonjunktiv": {
      "de": "er wränge",
      "lv": "lui strizzerebbe / spremerebbe"
    },
    "partizipVergangenheit": {
      "de": "gewrungen",
      "lv": "strizzato / spremuto"
    }
  },
  {
    "infinitiv": {
      "de": "zeihen",
      "lv": "accusare"
    },
    "praesens": {
      "de": "er zeiht",
      "lv": "lui accusa"
    },
    "imperfektIndikativ": {
      "de": "er zieh",
      "lv": "lui accusò"
    },
    "imperfektKonjunktiv": {
      "de": "er ziehe",
      "lv": "lui accuserebbe"
    },
    "partizipVergangenheit": {
      "de": "geziehen",
      "lv": "accusato"
    }
  },
  {
    "infinitiv": {
      "de": "ziehen",
      "lv": "tirare"
    },
    "praesens": {
      "de": "er zieht",
      "lv": "lui tira"
    },
    "imperfektIndikativ": {
      "de": "er zog",
      "lv": "lui tirò"
    },
    "imperfektKonjunktiv": {
      "de": "er zöge",
      "lv": "lui tirerebbe"
    },
    "partizipVergangenheit": {
      "de": "gezogen",
      "lv": "tirato"
    }
  },
  {
    "infinitiv": {
      "de": "zwingen",
      "lv": "costringere"
    },
    "praesens": {
      "de": "er zwingt",
      "lv": "lui costringe"
    },
    "imperfektIndikativ": {
      "de": "er zwang",
      "lv": "lui costrinse"
    },
    "imperfektKonjunktiv": {
      "de": "er zwänge",
      "lv": "lui costringerebbe"
    },
    "partizipVergangenheit": {
      "de": "gezwungen",
      "lv": "costretto"
    }
  },
  {
    "infinitiv": {
      "de": "empfangen",
      "lv": "ricevere"
    },
    "praesens": {
      "de": "er empfängt",
      "lv": "lui riceve"
    },
    "imperfektIndikativ": {
      "de": "er empfing",
      "lv": "lui ricevette"
    },
    "imperfektKonjunktiv": {
      "de": "er empfinge",
      "lv": "lui riceverebbe"
    },
    "partizipVergangenheit": {
      "de": "empfangen",
      "lv": "ricevuto"
    }
  },
  {
    "infinitiv": {
      "de": "erwägen",
      "lv": "considerare"
    },
    "praesens": {
      "de": "er erwägt",
      "lv": "lui considera"
    },
    "imperfektIndikativ": {
      "de": "er erwog",
      "lv": "lui considerò"
    },
    "imperfektKonjunktiv": {
      "de": "er erwöge",
      "lv": "lui considererebbe"
    },
    "partizipVergangenheit": {
      "de": "erwogen",
      "lv": "considerato"
    }
  },
  {
    "infinitiv": {
      "de": "fechten",
      "lv": "combattere"
    },
    "praesens": {
      "de": "er ficht",
      "lv": "lui combatte"
    },
    "imperfektIndikativ": {
      "de": "er focht",
      "lv": "lui combatté"
    },
    "imperfektKonjunktiv": {
      "de": "er föchte",
      "lv": "lui combatterebbe"
    },
    "partizipVergangenheit": {
      "de": "gefochten",
      "lv": "combattuto"
    }
  },
  {
    "infinitiv": {
      "de": "flechten",
      "lv": "intrecciare"
    },
    "praesens": {
      "de": "er flicht",
      "lv": "lui intreccia"
    },
    "imperfektIndikativ": {
      "de": "er flocht",
      "lv": "lui intrecciò"
    },
    "imperfektKonjunktiv": {
      "de": "er flöchte",
      "lv": "lui intreccerebbe"
    },
    "partizipVergangenheit": {
      "de": "geflochten",
      "lv": "intrecciato"
    }
  },
  {
    "infinitiv": {
      "de": "hangen",
      "lv": "essere appeso"
    },
    "praesens": {
      "de": "er hängt",
      "lv": "lui è appeso"
    },
    "imperfektIndikativ": {
      "de": "er hing",
      "lv": "lui fu appeso"
    },
    "imperfektKonjunktiv": {
      "de": "er hinge",
      "lv": "lui sarebbe appeso"
    },
    "partizipVergangenheit": {
      "de": "gehangen",
      "lv": "stato appeso"
    }
  },
  {
    "infinitiv": {
      "de": "spalten",
      "lv": "spaccare"
    },
    "praesens": {
      "de": "er spaltet",
      "lv": "lui spacca"
    },
    "imperfektIndikativ": {
      "de": "er spaltete",
      "lv": "lui spaccò"
    },
    "imperfektKonjunktiv": {
      "de": "er spaltete",
      "lv": "lui spaccherebbe"
    },
    "partizipVergangenheit": {
      "de": "gespalten",
      "lv": "spaccato"
    }
  },
  {
    "infinitiv": {
      "de": "verzeihen",
      "lv": "perdonare"
    },
    "praesens": {
      "de": "er verzeiht",
      "lv": "lui perdona"
    },
    "imperfektIndikativ": {
      "de": "er verzieh",
      "lv": "lui perdonò"
    },
    "imperfektKonjunktiv": {
      "de": "er verziehe",
      "lv": "lui perdonerebbe"
    },
    "partizipVergangenheit": {
      "de": "verziehen",
      "lv": "perdonato"
    }
  }
];

window.VERB_ENTRIES = VERB_ENTRIES;

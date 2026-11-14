const VERB_ENTRIES = [
  {
    "infinitiv": {
      "de": "backen",
      "lv": "hornear"
    },
    "praesens": {
      "de": "er bäckt",
      "lv": "él hornea"
    },
    "imperfektIndikativ": {
      "de": "er buk",
      "lv": "él horneó"
    },
    "imperfektKonjunktiv": {
      "de": "er büke",
      "lv": "él hornearía"
    },
    "partizipVergangenheit": {
      "de": "gebacken",
      "lv": "horneado"
    }
  },
  {
    "infinitiv": {
      "de": "befehlen",
      "lv": "ordenar"
    },
    "praesens": {
      "de": "er befiehlt",
      "lv": "él ordena"
    },
    "imperfektIndikativ": {
      "de": "er befahl",
      "lv": "él ordenó"
    },
    "imperfektKonjunktiv": {
      "de": "er beföhle",
      "lv": "él ordenaría"
    },
    "partizipVergangenheit": {
      "de": "befohlen",
      "lv": "ordenado"
    }
  },
  {
    "infinitiv": {
      "de": "beginnen",
      "lv": "empezar"
    },
    "praesens": {
      "de": "er beginnt",
      "lv": "él empieza"
    },
    "imperfektIndikativ": {
      "de": "er begann",
      "lv": "él empezó"
    },
    "imperfektKonjunktiv": {
      "de": "er begönne / er begänne",
      "lv": "él empezaría"
    },
    "partizipVergangenheit": {
      "de": "begonnen",
      "lv": "empezado"
    }
  },
  {
    "infinitiv": {
      "de": "beißen",
      "lv": "morder"
    },
    "praesens": {
      "de": "er beißt",
      "lv": "él muerde"
    },
    "imperfektIndikativ": {
      "de": "er biss",
      "lv": "él mordió"
    },
    "imperfektKonjunktiv": {
      "de": "er bisse",
      "lv": "él mordería"
    },
    "partizipVergangenheit": {
      "de": "gebissen",
      "lv": "mordido"
    }
  },
  {
    "infinitiv": {
      "de": "bergen",
      "lv": "salvar / esconder"
    },
    "praesens": {
      "de": "er birgt",
      "lv": "él salva / esconde"
    },
    "imperfektIndikativ": {
      "de": "er barg",
      "lv": "él salvó / escondió"
    },
    "imperfektKonjunktiv": {
      "de": "er bürge / er bärge",
      "lv": "él salvaría / escondería"
    },
    "partizipVergangenheit": {
      "de": "geborgen",
      "lv": "salvado / escondido"
    }
  },
  {
    "infinitiv": {
      "de": "bersten",
      "lv": "reventar"
    },
    "praesens": {
      "de": "er birst",
      "lv": "revienta"
    },
    "imperfektIndikativ": {
      "de": "er barst / er borst",
      "lv": "reventó"
    },
    "imperfektKonjunktiv": {
      "de": "er bärste / er börste",
      "lv": "reventaría"
    },
    "partizipVergangenheit": {
      "de": "geborsten (er ist)",
      "lv": "reventado"
    }
  },
  {
    "infinitiv": {
      "de": "bewegen",
      "lv": "animar"
    },
    "praesens": {
      "de": "er bewegt",
      "lv": "él anima"
    },
    "imperfektIndikativ": {
      "de": "er bewog",
      "lv": "él animó"
    },
    "imperfektKonjunktiv": {
      "de": "er bewöge",
      "lv": "él animaría"
    },
    "partizipVergangenheit": {
      "de": "bewogen",
      "lv": "animado"
    }
  },
  {
    "infinitiv": {
      "de": "biegen",
      "lv": "doblar"
    },
    "praesens": {
      "de": "er biegt",
      "lv": "él dobla"
    },
    "imperfektIndikativ": {
      "de": "er bog",
      "lv": "él dobló"
    },
    "imperfektKonjunktiv": {
      "de": "er böge",
      "lv": "él doblaría"
    },
    "partizipVergangenheit": {
      "de": "gebogen",
      "lv": "doblado"
    }
  },
  {
    "infinitiv": {
      "de": "bieten",
      "lv": "ofrecer"
    },
    "praesens": {
      "de": "er bietet",
      "lv": "él ofrece"
    },
    "imperfektIndikativ": {
      "de": "er bot",
      "lv": "él ofreció"
    },
    "imperfektKonjunktiv": {
      "de": "er böte",
      "lv": "él ofrecería"
    },
    "partizipVergangenheit": {
      "de": "geboten",
      "lv": "ofrecido"
    }
  },
  {
    "infinitiv": {
      "de": "binden",
      "lv": "atar"
    },
    "praesens": {
      "de": "er bindet",
      "lv": "él ata"
    },
    "imperfektIndikativ": {
      "de": "er band",
      "lv": "él ató"
    },
    "imperfektKonjunktiv": {
      "de": "er bände",
      "lv": "él ataría"
    },
    "partizipVergangenheit": {
      "de": "gebunden",
      "lv": "atado"
    }
  },
  {
    "infinitiv": {
      "de": "bitten",
      "lv": "pedir"
    },
    "praesens": {
      "de": "er bittet",
      "lv": "él pide"
    },
    "imperfektIndikativ": {
      "de": "er bat",
      "lv": "él pidió"
    },
    "imperfektKonjunktiv": {
      "de": "er bäte",
      "lv": "él pediría"
    },
    "partizipVergangenheit": {
      "de": "gebeten",
      "lv": "pedido"
    }
  },
  {
    "infinitiv": {
      "de": "blasen",
      "lv": "soplar"
    },
    "praesens": {
      "de": "er bläst",
      "lv": "él sopla"
    },
    "imperfektIndikativ": {
      "de": "er blies",
      "lv": "él sopló"
    },
    "imperfektKonjunktiv": {
      "de": "er bliese",
      "lv": "él soplaría"
    },
    "partizipVergangenheit": {
      "de": "geblasen",
      "lv": "soplado"
    }
  },
  {
    "infinitiv": {
      "de": "gären",
      "lv": "fermentar"
    },
    "praesens": {
      "de": "es gärt",
      "lv": "fermenta"
    },
    "imperfektIndikativ": {
      "de": "es gor / es gärte",
      "lv": "fermentó"
    },
    "imperfektKonjunktiv": {
      "de": "es göre / es gärte",
      "lv": "fermentaría"
    },
    "partizipVergangenheit": {
      "de": "gegoren / gegärt",
      "lv": "fermentado"
    }
  },
  {
    "infinitiv": {
      "de": "gebären",
      "lv": "dar a luz"
    },
    "praesens": {
      "de": "sie gebiert",
      "lv": "ella da a luz"
    },
    "imperfektIndikativ": {
      "de": "sie gebar",
      "lv": "ella dio a luz"
    },
    "imperfektKonjunktiv": {
      "de": "sie gebäre",
      "lv": "ella daría a luz"
    },
    "partizipVergangenheit": {
      "de": "geboren",
      "lv": "dado a luz"
    }
  },
  {
    "infinitiv": {
      "de": "gelingen",
      "lv": "salir bien"
    },
    "praesens": {
      "de": "es gelingt",
      "lv": "sale bien"
    },
    "imperfektIndikativ": {
      "de": "es gelang",
      "lv": "salió bien"
    },
    "imperfektKonjunktiv": {
      "de": "es gelänge",
      "lv": "saldría bien"
    },
    "partizipVergangenheit": {
      "de": "gelungen (es ist)",
      "lv": "salido bien"
    }
  },
  {
    "infinitiv": {
      "de": "gelten",
      "lv": "servir / ser válido"
    },
    "praesens": {
      "de": "er gilt",
      "lv": "él sirve / es válido"
    },
    "imperfektIndikativ": {
      "de": "er galt",
      "lv": "él sirvió / fue válido"
    },
    "imperfektKonjunktiv": {
      "de": "er gölte / es gälte",
      "lv": "él serviría / sería válido"
    },
    "partizipVergangenheit": {
      "de": "gegolten",
      "lv": "servido / sido válido"
    }
  },
  {
    "infinitiv": {
      "de": "genesen",
      "lv": "recuperarse"
    },
    "praesens": {
      "de": "er genest",
      "lv": "él se recupera"
    },
    "imperfektIndikativ": {
      "de": "er genas",
      "lv": "él se recuperó"
    },
    "imperfektKonjunktiv": {
      "de": "er genäse",
      "lv": "él se recuperaría"
    },
    "partizipVergangenheit": {
      "de": "genesen (er ist)",
      "lv": "recuperado"
    }
  },
  {
    "infinitiv": {
      "de": "genießen",
      "lv": "disfrutar"
    },
    "praesens": {
      "de": "er genießt",
      "lv": "él disfruta"
    },
    "imperfektIndikativ": {
      "de": "er genoss",
      "lv": "él disfrutó"
    },
    "imperfektKonjunktiv": {
      "de": "er genösse",
      "lv": "él disfrutaría"
    },
    "partizipVergangenheit": {
      "de": "genossen",
      "lv": "disfrutado"
    }
  },
  {
    "infinitiv": {
      "de": "geschehen",
      "lv": "suceder"
    },
    "praesens": {
      "de": "es geschieht",
      "lv": "sucede"
    },
    "imperfektIndikativ": {
      "de": "es geschah",
      "lv": "sucedió"
    },
    "imperfektKonjunktiv": {
      "de": "es geschähe",
      "lv": "sucedería"
    },
    "partizipVergangenheit": {
      "de": "geschehen (es ist)",
      "lv": "sucedido"
    }
  },
  {
    "infinitiv": {
      "de": "gießen",
      "lv": "verter"
    },
    "praesens": {
      "de": "er gießt",
      "lv": "él vierte"
    },
    "imperfektIndikativ": {
      "de": "er goss",
      "lv": "él vertió"
    },
    "imperfektKonjunktiv": {
      "de": "er gösse",
      "lv": "él vertería"
    },
    "partizipVergangenheit": {
      "de": "gegossen",
      "lv": "vertido"
    }
  },
  {
    "infinitiv": {
      "de": "gleichen",
      "lv": "parecerse"
    },
    "praesens": {
      "de": "er gleicht",
      "lv": "él se parece"
    },
    "imperfektIndikativ": {
      "de": "er glich",
      "lv": "él se pareció"
    },
    "imperfektKonjunktiv": {
      "de": "er gliche",
      "lv": "él se parecería"
    },
    "partizipVergangenheit": {
      "de": "geglichen",
      "lv": "parecido"
    }
  },
  {
    "infinitiv": {
      "de": "gleiten",
      "lv": "deslizarse"
    },
    "praesens": {
      "de": "er gleitet",
      "lv": "él se desliza"
    },
    "imperfektIndikativ": {
      "de": "er glitt",
      "lv": "él se deslizó"
    },
    "imperfektKonjunktiv": {
      "de": "er glitte",
      "lv": "él se deslizaría"
    },
    "partizipVergangenheit": {
      "de": "geglitten (er ist)",
      "lv": "deslizado"
    }
  },
  {
    "infinitiv": {
      "de": "glimmen",
      "lv": "arder sin llama"
    },
    "praesens": {
      "de": "er glimmt",
      "lv": "arde sin llama"
    },
    "imperfektIndikativ": {
      "de": "er glimmte / glomm",
      "lv": "ardió sin llama"
    },
    "imperfektKonjunktiv": {
      "de": "er glimmte",
      "lv": "ardería sin llama"
    },
    "partizipVergangenheit": {
      "de": "geglimmt / geglommen",
      "lv": "ardido sin llama"
    }
  },
  {
    "infinitiv": {
      "de": "graben",
      "lv": "cavar"
    },
    "praesens": {
      "de": "er gräbt",
      "lv": "él cava"
    },
    "imperfektIndikativ": {
      "de": "er grub",
      "lv": "él cavó"
    },
    "imperfektKonjunktiv": {
      "de": "er grübe",
      "lv": "él cavaría"
    },
    "partizipVergangenheit": {
      "de": "gegraben",
      "lv": "cavado"
    }
  },
  {
    "infinitiv": {
      "de": "greifen",
      "lv": "agarrar"
    },
    "praesens": {
      "de": "er greift",
      "lv": "él agarra"
    },
    "imperfektIndikativ": {
      "de": "er griff",
      "lv": "él agarró"
    },
    "imperfektKonjunktiv": {
      "de": "er griffe",
      "lv": "él agarraría"
    },
    "partizipVergangenheit": {
      "de": "gegriffen",
      "lv": "agarrado"
    }
  },
  {
    "infinitiv": {
      "de": "hauen",
      "lv": "talar"
    },
    "praesens": {
      "de": "er haut",
      "lv": "él tala"
    },
    "imperfektIndikativ": {
      "de": "er hieb",
      "lv": "él taló"
    },
    "imperfektKonjunktiv": {
      "de": "er hiebe",
      "lv": "él talaría"
    },
    "partizipVergangenheit": {
      "de": "gehauen",
      "lv": "talado"
    }
  },
  {
    "infinitiv": {
      "de": "heben",
      "lv": "levantar"
    },
    "praesens": {
      "de": "er hebt",
      "lv": "él levanta"
    },
    "imperfektIndikativ": {
      "de": "er hob",
      "lv": "él levantó"
    },
    "imperfektKonjunktiv": {
      "de": "er höbe",
      "lv": "él levantaría"
    },
    "partizipVergangenheit": {
      "de": "gehoben",
      "lv": "levantado"
    }
  },
  {
    "infinitiv": {
      "de": "kennen",
      "lv": "conocer / saber"
    },
    "praesens": {
      "de": "er kennt",
      "lv": "él conoce / sabe"
    },
    "imperfektIndikativ": {
      "de": "kannte",
      "lv": "él conoció / supo"
    },
    "imperfektKonjunktiv": {
      "de": "kannte",
      "lv": "él conocería / sabría"
    },
    "partizipVergangenheit": {
      "de": "gekannt",
      "lv": "conocido / sabido"
    }
  },
  {
    "infinitiv": {
      "de": "klingen",
      "lv": "sonar"
    },
    "praesens": {
      "de": "er klingt",
      "lv": "suena"
    },
    "imperfektIndikativ": {
      "de": "er klang",
      "lv": "sonó"
    },
    "imperfektKonjunktiv": {
      "de": "er klänge",
      "lv": "sonaría"
    },
    "partizipVergangenheit": {
      "de": "geklungen",
      "lv": "sonado"
    }
  },
  {
    "infinitiv": {
      "de": "kneifen",
      "lv": "pellizcar"
    },
    "praesens": {
      "de": "er kneift",
      "lv": "él pellizca"
    },
    "imperfektIndikativ": {
      "de": "er kniff",
      "lv": "él pellizcó"
    },
    "imperfektKonjunktiv": {
      "de": "er kniffe",
      "lv": "él pellizcaría"
    },
    "partizipVergangenheit": {
      "de": "gekniffen",
      "lv": "pellizcado"
    }
  },
  {
    "infinitiv": {
      "de": "bleiben",
      "lv": "quedarse"
    },
    "praesens": {
      "de": "er bleibt",
      "lv": "él se queda"
    },
    "imperfektIndikativ": {
      "de": "er blieb",
      "lv": "él se quedó"
    },
    "imperfektKonjunktiv": {
      "de": "er bliebe",
      "lv": "él se quedaría"
    },
    "partizipVergangenheit": {
      "de": "geblieben (er ist)",
      "lv": "quedado"
    }
  },
  {
    "infinitiv": {
      "de": "bleichen",
      "lv": "decolorarse"
    },
    "praesens": {
      "de": "er bleicht",
      "lv": "se decolora"
    },
    "imperfektIndikativ": {
      "de": "blich",
      "lv": "se decoloró"
    },
    "imperfektKonjunktiv": {
      "de": "blich",
      "lv": "se decoloraría"
    },
    "partizipVergangenheit": {
      "de": "geblichen",
      "lv": "decolorado"
    }
  },
  {
    "infinitiv": {
      "de": "braten",
      "lv": "freír"
    },
    "praesens": {
      "de": "er brät",
      "lv": "él fríe"
    },
    "imperfektIndikativ": {
      "de": "er briet",
      "lv": "él frio"
    },
    "imperfektKonjunktiv": {
      "de": "er briete",
      "lv": "él freiría"
    },
    "partizipVergangenheit": {
      "de": "gebraten",
      "lv": "frito"
    }
  },
  {
    "infinitiv": {
      "de": "brechen",
      "lv": "romper"
    },
    "praesens": {
      "de": "er bricht",
      "lv": "él rompe"
    },
    "imperfektIndikativ": {
      "de": "er brach",
      "lv": "él rompió"
    },
    "imperfektKonjunktiv": {
      "de": "er bräche",
      "lv": "él rompería"
    },
    "partizipVergangenheit": {
      "de": "gebrochen",
      "lv": "roto"
    }
  },
  {
    "infinitiv": {
      "de": "brennen",
      "lv": "arder"
    },
    "praesens": {
      "de": "er brennt",
      "lv": "arde"
    },
    "imperfektIndikativ": {
      "de": "brannte",
      "lv": "ardió"
    },
    "imperfektKonjunktiv": {
      "de": "brannte",
      "lv": "ardería"
    },
    "partizipVergangenheit": {
      "de": "gebrannt",
      "lv": "ardido"
    }
  },
  {
    "infinitiv": {
      "de": "bringen",
      "lv": "traer"
    },
    "praesens": {
      "de": "er bringt",
      "lv": "él trae"
    },
    "imperfektIndikativ": {
      "de": "er brachte",
      "lv": "él trajo"
    },
    "imperfektKonjunktiv": {
      "de": "er brächte",
      "lv": "él traería"
    },
    "partizipVergangenheit": {
      "de": "gebracht",
      "lv": "traído"
    }
  },
  {
    "infinitiv": {
      "de": "denken",
      "lv": "pensar"
    },
    "praesens": {
      "de": "er denkt",
      "lv": "él piensa"
    },
    "imperfektIndikativ": {
      "de": "er dachte",
      "lv": "él pensó"
    },
    "imperfektKonjunktiv": {
      "de": "er dächte",
      "lv": "él pensaría"
    },
    "partizipVergangenheit": {
      "de": "gedacht",
      "lv": "pensado"
    }
  },
  {
    "infinitiv": {
      "de": "dingen",
      "lv": "contratar / acordar"
    },
    "praesens": {
      "de": "er dingt",
      "lv": "él contrata / acuerda"
    },
    "imperfektIndikativ": {
      "de": "dingte",
      "lv": "él contrató / acordó"
    },
    "imperfektKonjunktiv": {
      "de": "dingte",
      "lv": "él contrataría / acordaría"
    },
    "partizipVergangenheit": {
      "de": "gedungen",
      "lv": "contratado / acordado"
    }
  },
  {
    "infinitiv": {
      "de": "dreschen",
      "lv": "trillar"
    },
    "praesens": {
      "de": "er drischt",
      "lv": "él trilla"
    },
    "imperfektIndikativ": {
      "de": "er drasch / er drosch",
      "lv": "él trilló"
    },
    "imperfektKonjunktiv": {
      "de": "er dräsche / er drösche",
      "lv": "él trillaría"
    },
    "partizipVergangenheit": {
      "de": "gedroschen",
      "lv": "trillado"
    }
  },
  {
    "infinitiv": {
      "de": "dringen",
      "lv": "irrumpir"
    },
    "praesens": {
      "de": "er dringt",
      "lv": "él irrumpe"
    },
    "imperfektIndikativ": {
      "de": "er drang",
      "lv": "él irrumpió"
    },
    "imperfektKonjunktiv": {
      "de": "er dränge",
      "lv": "él irrumpiría"
    },
    "partizipVergangenheit": {
      "de": "gedrungen (er ist)",
      "lv": "irrumpido"
    }
  },
  {
    "infinitiv": {
      "de": "dünken",
      "lv": "parecer"
    },
    "praesens": {
      "de": "es dünkt",
      "lv": "parece"
    },
    "imperfektIndikativ": {
      "de": "deuchte",
      "lv": "pareció"
    },
    "imperfektKonjunktiv": {
      "de": "deuchte",
      "lv": "parecería"
    },
    "partizipVergangenheit": {
      "de": "gedünkt",
      "lv": "parecido"
    }
  },
  {
    "infinitiv": {
      "de": "dürfen",
      "lv": "tener permiso"
    },
    "praesens": {
      "de": "er darf",
      "lv": "él tiene permiso"
    },
    "imperfektIndikativ": {
      "de": "durfte",
      "lv": "él tuvo permiso"
    },
    "imperfektKonjunktiv": {
      "de": "durfte",
      "lv": "él tendría permiso"
    },
    "partizipVergangenheit": {
      "de": "gedurft",
      "lv": "tenido permiso"
    }
  },
  {
    "infinitiv": {
      "de": "empfehlen",
      "lv": "recomendar"
    },
    "praesens": {
      "de": "er empfiehlt",
      "lv": "él recomienda"
    },
    "imperfektIndikativ": {
      "de": "er empfahl",
      "lv": "él recomendó"
    },
    "imperfektKonjunktiv": {
      "de": "er empfähle / er empföhle",
      "lv": "él recomendaría"
    },
    "partizipVergangenheit": {
      "de": "empfohlen",
      "lv": "recomendado"
    }
  },
  {
    "infinitiv": {
      "de": "empfinden",
      "lv": "sentir"
    },
    "praesens": {
      "de": "er empfindet",
      "lv": "él siente"
    },
    "imperfektIndikativ": {
      "de": "er empfand",
      "lv": "él sintió"
    },
    "imperfektKonjunktiv": {
      "de": "er empfände",
      "lv": "él sentiría"
    },
    "partizipVergangenheit": {
      "de": "empfunden",
      "lv": "sentido"
    }
  },
  {
    "infinitiv": {
      "de": "erlöschen",
      "lv": "apagarse"
    },
    "praesens": {
      "de": "er erlischt",
      "lv": "se apaga"
    },
    "imperfektIndikativ": {
      "de": "er erlosch",
      "lv": "se apagó"
    },
    "imperfektKonjunktiv": {
      "de": "er erlösche",
      "lv": "se apagaría"
    },
    "partizipVergangenheit": {
      "de": "erloschen (er ist)",
      "lv": "apagado"
    }
  },
  {
    "infinitiv": {
      "de": "erschrecken",
      "lv": "asustarse"
    },
    "praesens": {
      "de": "er erschrickt",
      "lv": "él se asusta"
    },
    "imperfektIndikativ": {
      "de": "er erschrak",
      "lv": "él se asustó"
    },
    "imperfektKonjunktiv": {
      "de": "er erschräke",
      "lv": "él se asustaría"
    },
    "partizipVergangenheit": {
      "de": "erschrocken (er ist)",
      "lv": "asustado"
    }
  },
  {
    "infinitiv": {
      "de": "essen",
      "lv": "comer"
    },
    "praesens": {
      "de": "er isst",
      "lv": "él come"
    },
    "imperfektIndikativ": {
      "de": "er ass",
      "lv": "él comió"
    },
    "imperfektKonjunktiv": {
      "de": "er äße",
      "lv": "él comería"
    },
    "partizipVergangenheit": {
      "de": "gegessen",
      "lv": "comido"
    }
  },
  {
    "infinitiv": {
      "de": "fahren",
      "lv": "conducir"
    },
    "praesens": {
      "de": "er fährt",
      "lv": "él conduce"
    },
    "imperfektIndikativ": {
      "de": "er fuhr",
      "lv": "él condujo"
    },
    "imperfektKonjunktiv": {
      "de": "er führe",
      "lv": "él conduciría"
    },
    "partizipVergangenheit": {
      "de": "gefahren (er ist)",
      "lv": "conducido"
    }
  },
  {
    "infinitiv": {
      "de": "fallen",
      "lv": "caer"
    },
    "praesens": {
      "de": "er fällt",
      "lv": "él cae"
    },
    "imperfektIndikativ": {
      "de": "er fiel",
      "lv": "él cayó"
    },
    "imperfektKonjunktiv": {
      "de": "er fiele",
      "lv": "él caería"
    },
    "partizipVergangenheit": {
      "de": "gefallen (er ist)",
      "lv": "caído"
    }
  },
  {
    "infinitiv": {
      "de": "fangen",
      "lv": "atrapar"
    },
    "praesens": {
      "de": "er fängt",
      "lv": "él atrapa"
    },
    "imperfektIndikativ": {
      "de": "er fing",
      "lv": "él atrapó"
    },
    "imperfektKonjunktiv": {
      "de": "er finge",
      "lv": "él atraparía"
    },
    "partizipVergangenheit": {
      "de": "gefangen",
      "lv": "atrapado"
    }
  },
  {
    "infinitiv": {
      "de": "finden",
      "lv": "encontrar"
    },
    "praesens": {
      "de": "er findet",
      "lv": "él encuentra"
    },
    "imperfektIndikativ": {
      "de": "er fand",
      "lv": "él encontró"
    },
    "imperfektKonjunktiv": {
      "de": "er fände",
      "lv": "él encontraría"
    },
    "partizipVergangenheit": {
      "de": "gefunden",
      "lv": "encontrado"
    }
  },
  {
    "infinitiv": {
      "de": "fliegen",
      "lv": "volar"
    },
    "praesens": {
      "de": "er fliegt",
      "lv": "él vuela"
    },
    "imperfektIndikativ": {
      "de": "er flog",
      "lv": "él voló"
    },
    "imperfektKonjunktiv": {
      "de": "er flöge",
      "lv": "él volaría"
    },
    "partizipVergangenheit": {
      "de": "geflogen (er ist)",
      "lv": "volado"
    }
  },
  {
    "infinitiv": {
      "de": "fliehen",
      "lv": "huir"
    },
    "praesens": {
      "de": "er flieht",
      "lv": "él huye"
    },
    "imperfektIndikativ": {
      "de": "er floh",
      "lv": "él huyó"
    },
    "imperfektKonjunktiv": {
      "de": "er flöhe",
      "lv": "él huiría"
    },
    "partizipVergangenheit": {
      "de": "geflohen (er ist)",
      "lv": "huido"
    }
  },
  {
    "infinitiv": {
      "de": "fließen",
      "lv": "fluir"
    },
    "praesens": {
      "de": "er fließt",
      "lv": "fluye"
    },
    "imperfektIndikativ": {
      "de": "er floss",
      "lv": "fluyó"
    },
    "imperfektKonjunktiv": {
      "de": "er flösse",
      "lv": "fluiría"
    },
    "partizipVergangenheit": {
      "de": "geflossen (er ist)",
      "lv": "fluido"
    }
  },
  {
    "infinitiv": {
      "de": "fressen",
      "lv": "comer / devorar"
    },
    "praesens": {
      "de": "er frisst",
      "lv": "él come / devora"
    },
    "imperfektIndikativ": {
      "de": "er frass",
      "lv": "él comió / devoró"
    },
    "imperfektKonjunktiv": {
      "de": "er fräße",
      "lv": "él comería / devoraría"
    },
    "partizipVergangenheit": {
      "de": "gefressen",
      "lv": "comido / devorado"
    }
  },
  {
    "infinitiv": {
      "de": "frieren",
      "lv": "tener frío"
    },
    "praesens": {
      "de": "er friert",
      "lv": "él tiene frío"
    },
    "imperfektIndikativ": {
      "de": "er fror",
      "lv": "él tuvo frío"
    },
    "imperfektKonjunktiv": {
      "de": "er fröre",
      "lv": "él tendría frío"
    },
    "partizipVergangenheit": {
      "de": "gefroren",
      "lv": "tenido frío"
    }
  },
  {
    "infinitiv": {
      "de": "geben",
      "lv": "dar"
    },
    "praesens": {
      "de": "er gibt",
      "lv": "él da"
    },
    "imperfektIndikativ": {
      "de": "er gab",
      "lv": "él dio"
    },
    "imperfektKonjunktiv": {
      "de": "er gäbe",
      "lv": "él daría"
    },
    "partizipVergangenheit": {
      "de": "gegeben",
      "lv": "dado"
    }
  },
  {
    "infinitiv": {
      "de": "gedeihen",
      "lv": "prosperar"
    },
    "praesens": {
      "de": "er gedeiht",
      "lv": "él prospera"
    },
    "imperfektIndikativ": {
      "de": "er gedieh",
      "lv": "él prosperó"
    },
    "imperfektKonjunktiv": {
      "de": "er gediehe",
      "lv": "él prosperaría"
    },
    "partizipVergangenheit": {
      "de": "gediehen (er ist)",
      "lv": "prosperado"
    }
  },
  {
    "infinitiv": {
      "de": "gehen",
      "lv": "ir"
    },
    "praesens": {
      "de": "er geht",
      "lv": "él va"
    },
    "imperfektIndikativ": {
      "de": "er ging",
      "lv": "él fue"
    },
    "imperfektKonjunktiv": {
      "de": "er ginge",
      "lv": "él iría"
    },
    "partizipVergangenheit": {
      "de": "gegangen (er ist)",
      "lv": "ido"
    }
  },
  {
    "infinitiv": {
      "de": "gewinnen",
      "lv": "ganar"
    },
    "praesens": {
      "de": "er gewinnt",
      "lv": "él gana"
    },
    "imperfektIndikativ": {
      "de": "er gewann",
      "lv": "él ganó"
    },
    "imperfektKonjunktiv": {
      "de": "er gewönne / er gewänne",
      "lv": "él ganaría"
    },
    "partizipVergangenheit": {
      "de": "gewonnen",
      "lv": "ganado"
    }
  },
  {
    "infinitiv": {
      "de": "haben",
      "lv": "tener"
    },
    "praesens": {
      "de": "er hat",
      "lv": "él tiene"
    },
    "imperfektIndikativ": {
      "de": "hatte",
      "lv": "él tuvo"
    },
    "imperfektKonjunktiv": {
      "de": "hatte",
      "lv": "él tendría"
    },
    "partizipVergangenheit": {
      "de": "gehabt",
      "lv": "tenido"
    }
  },
  {
    "infinitiv": {
      "de": "halten",
      "lv": "sostener"
    },
    "praesens": {
      "de": "er hält",
      "lv": "él sostiene"
    },
    "imperfektIndikativ": {
      "de": "er hielt",
      "lv": "él sostuvo"
    },
    "imperfektKonjunktiv": {
      "de": "er hielte",
      "lv": "él sostendría"
    },
    "partizipVergangenheit": {
      "de": "gehalten",
      "lv": "sostenido"
    }
  },
  {
    "infinitiv": {
      "de": "heißen",
      "lv": "llamar / llamarse"
    },
    "praesens": {
      "de": "er heißt",
      "lv": "él llama / se llama"
    },
    "imperfektIndikativ": {
      "de": "er hieß",
      "lv": "él llamó / se llamó"
    },
    "imperfektKonjunktiv": {
      "de": "er hieße",
      "lv": "él llamaría / se llamaría"
    },
    "partizipVergangenheit": {
      "de": "geheißen",
      "lv": "llamado / llamado"
    }
  },
  {
    "infinitiv": {
      "de": "helfen",
      "lv": "ayudar"
    },
    "praesens": {
      "de": "er hilft",
      "lv": "él ayuda"
    },
    "imperfektIndikativ": {
      "de": "er half",
      "lv": "él ayudó"
    },
    "imperfektKonjunktiv": {
      "de": "er hülfe / er hälfe",
      "lv": "él ayudaría"
    },
    "partizipVergangenheit": {
      "de": "geholfen",
      "lv": "ayudado"
    }
  },
  {
    "infinitiv": {
      "de": "kommen",
      "lv": "venir"
    },
    "praesens": {
      "de": "er kommt",
      "lv": "él viene"
    },
    "imperfektIndikativ": {
      "de": "er kam",
      "lv": "él vino"
    },
    "imperfektKonjunktiv": {
      "de": "er käme",
      "lv": "él vendría"
    },
    "partizipVergangenheit": {
      "de": "gekommen (er ist)",
      "lv": "venido"
    }
  },
  {
    "infinitiv": {
      "de": "können",
      "lv": "poder"
    },
    "praesens": {
      "de": "er kann",
      "lv": "él puede"
    },
    "imperfektIndikativ": {
      "de": "konnte",
      "lv": "él pudo"
    },
    "imperfektKonjunktiv": {
      "de": "konnte",
      "lv": "él podría"
    },
    "partizipVergangenheit": {
      "de": "gekonnt",
      "lv": "podido"
    }
  },
  {
    "infinitiv": {
      "de": "kriechen",
      "lv": "arrastrarse"
    },
    "praesens": {
      "de": "er kriecht",
      "lv": "él se arrastra"
    },
    "imperfektIndikativ": {
      "de": "er kroch",
      "lv": "él se arrastró"
    },
    "imperfektKonjunktiv": {
      "de": "er kröche",
      "lv": "él se arrastraría"
    },
    "partizipVergangenheit": {
      "de": "gekrochen (er ist)",
      "lv": "arrastrado"
    }
  },
  {
    "infinitiv": {
      "de": "laden",
      "lv": "cargar / invitar"
    },
    "praesens": {
      "de": "er lädt",
      "lv": "él carga / invita"
    },
    "imperfektIndikativ": {
      "de": "er lud",
      "lv": "él cargó / invitó"
    },
    "imperfektKonjunktiv": {
      "de": "er lüde",
      "lv": "él cargaría / invitaría"
    },
    "partizipVergangenheit": {
      "de": "geladen",
      "lv": "cargado / invitado"
    }
  },
  {
    "infinitiv": {
      "de": "lassen",
      "lv": "hacer / dejar"
    },
    "praesens": {
      "de": "er lässt",
      "lv": "él hace / deja"
    },
    "imperfektIndikativ": {
      "de": "er ließ",
      "lv": "él hizo / dejó"
    },
    "imperfektKonjunktiv": {
      "de": "er ließe",
      "lv": "él haría / dejaría"
    },
    "partizipVergangenheit": {
      "de": "gelassen",
      "lv": "hecho / dejado"
    }
  },
  {
    "infinitiv": {
      "de": "laufen",
      "lv": "correr"
    },
    "praesens": {
      "de": "er läuft",
      "lv": "él corre"
    },
    "imperfektIndikativ": {
      "de": "er lief",
      "lv": "él corrió"
    },
    "imperfektKonjunktiv": {
      "de": "er liefe",
      "lv": "él correría"
    },
    "partizipVergangenheit": {
      "de": "gelaufen (er ist)",
      "lv": "corrido"
    }
  },
  {
    "infinitiv": {
      "de": "leiden",
      "lv": "sufrir"
    },
    "praesens": {
      "de": "er leidet",
      "lv": "él sufre"
    },
    "imperfektIndikativ": {
      "de": "er litt",
      "lv": "él sufrió"
    },
    "imperfektKonjunktiv": {
      "de": "er litte",
      "lv": "él sufriría"
    },
    "partizipVergangenheit": {
      "de": "gelitten",
      "lv": "sufrido"
    }
  },
  {
    "infinitiv": {
      "de": "leihen",
      "lv": "prestar / pedir prestado"
    },
    "praesens": {
      "de": "er leiht",
      "lv": "él presta / pide prestado"
    },
    "imperfektIndikativ": {
      "de": "er lieh",
      "lv": "él prestó / pidió prestado"
    },
    "imperfektKonjunktiv": {
      "de": "er liehe",
      "lv": "él prestaría / pediría prestado"
    },
    "partizipVergangenheit": {
      "de": "geliehen",
      "lv": "prestado / pedido prestado"
    }
  },
  {
    "infinitiv": {
      "de": "lesen",
      "lv": "leer"
    },
    "praesens": {
      "de": "er liest",
      "lv": "él lee"
    },
    "imperfektIndikativ": {
      "de": "er las",
      "lv": "él leyó"
    },
    "imperfektKonjunktiv": {
      "de": "er läse",
      "lv": "él leería"
    },
    "partizipVergangenheit": {
      "de": "gelesen",
      "lv": "leído"
    }
  },
  {
    "infinitiv": {
      "de": "liegen",
      "lv": "estar tumbado"
    },
    "praesens": {
      "de": "er liegt",
      "lv": "él está tumbado"
    },
    "imperfektIndikativ": {
      "de": "er lag",
      "lv": "él estuvo tumbado"
    },
    "imperfektKonjunktiv": {
      "de": "er läge",
      "lv": "él estaría tumbado"
    },
    "partizipVergangenheit": {
      "de": "gelegen",
      "lv": "estado tumbado"
    }
  },
  {
    "infinitiv": {
      "de": "lügen",
      "lv": "mentir"
    },
    "praesens": {
      "de": "er lügt",
      "lv": "él miente"
    },
    "imperfektIndikativ": {
      "de": "er log",
      "lv": "él mintió"
    },
    "imperfektKonjunktiv": {
      "de": "er löge",
      "lv": "él mentiría"
    },
    "partizipVergangenheit": {
      "de": "gelogen",
      "lv": "mentido"
    }
  },
  {
    "infinitiv": {
      "de": "mahlen",
      "lv": "moler"
    },
    "praesens": {
      "de": "er mahlt",
      "lv": "él muele"
    },
    "imperfektIndikativ": {
      "de": "er mahlte",
      "lv": "él molió"
    },
    "imperfektKonjunktiv": {
      "de": "er malte",
      "lv": "él molería"
    },
    "partizipVergangenheit": {
      "de": "gemahlen",
      "lv": "molido"
    }
  },
  {
    "infinitiv": {
      "de": "meiden",
      "lv": "evitar"
    },
    "praesens": {
      "de": "er meidet",
      "lv": "él evita"
    },
    "imperfektIndikativ": {
      "de": "er mied",
      "lv": "él evitó"
    },
    "imperfektKonjunktiv": {
      "de": "er miede",
      "lv": "él evitaría"
    },
    "partizipVergangenheit": {
      "de": "gemieden",
      "lv": "evitado"
    }
  },
  {
    "infinitiv": {
      "de": "melken",
      "lv": "ordeñar"
    },
    "praesens": {
      "de": "er milkt / er melkt",
      "lv": "él ordeña"
    },
    "imperfektIndikativ": {
      "de": "er molk / er melkte",
      "lv": "él ordeñó"
    },
    "imperfektKonjunktiv": {
      "de": "er mölke / er melkte",
      "lv": "él ordeñaría"
    },
    "partizipVergangenheit": {
      "de": "gemolken / gemelkt",
      "lv": "ordeñado"
    }
  },
  {
    "infinitiv": {
      "de": "messen",
      "lv": "medir"
    },
    "praesens": {
      "de": "er misst",
      "lv": "él mide"
    },
    "imperfektIndikativ": {
      "de": "er mass",
      "lv": "él midió"
    },
    "imperfektKonjunktiv": {
      "de": "er mäße",
      "lv": "él mediría"
    },
    "partizipVergangenheit": {
      "de": "gemessen",
      "lv": "medido"
    }
  },
  {
    "infinitiv": {
      "de": "misslingen",
      "lv": "salir mal"
    },
    "praesens": {
      "de": "es misslingt",
      "lv": "sale mal"
    },
    "imperfektIndikativ": {
      "de": "misslang",
      "lv": "salió mal"
    },
    "imperfektKonjunktiv": {
      "de": "misslang",
      "lv": "saldría mal"
    },
    "partizipVergangenheit": {
      "de": "misslungen",
      "lv": "salido mal"
    }
  },
  {
    "infinitiv": {
      "de": "mögen",
      "lv": "gustar"
    },
    "praesens": {
      "de": "er mag",
      "lv": "le gusta"
    },
    "imperfektIndikativ": {
      "de": "mochte",
      "lv": "le gustó"
    },
    "imperfektKonjunktiv": {
      "de": "mochte",
      "lv": "le gustaría"
    },
    "partizipVergangenheit": {
      "de": "gemocht",
      "lv": "gustado"
    }
  },
  {
    "infinitiv": {
      "de": "müssen",
      "lv": "tener que"
    },
    "praesens": {
      "de": "er muss",
      "lv": "él tiene que"
    },
    "imperfektIndikativ": {
      "de": "musste",
      "lv": "él tuvo que"
    },
    "imperfektKonjunktiv": {
      "de": "musste",
      "lv": "él tendría que"
    },
    "partizipVergangenheit": {
      "de": "gemusst",
      "lv": "tenido que"
    }
  },
  {
    "infinitiv": {
      "de": "nehmen",
      "lv": "tomar"
    },
    "praesens": {
      "de": "er nimmt",
      "lv": "él toma"
    },
    "imperfektIndikativ": {
      "de": "er nahm",
      "lv": "él tomó"
    },
    "imperfektKonjunktiv": {
      "de": "er nähme",
      "lv": "él tomaría"
    },
    "partizipVergangenheit": {
      "de": "genommen",
      "lv": "tomado"
    }
  },
  {
    "infinitiv": {
      "de": "nennen",
      "lv": "nombrar"
    },
    "praesens": {
      "de": "er nennt",
      "lv": "él nombra"
    },
    "imperfektIndikativ": {
      "de": "er nannte",
      "lv": "él nombró"
    },
    "imperfektKonjunktiv": {
      "de": "er nennte",
      "lv": "él nombraría"
    },
    "partizipVergangenheit": {
      "de": "genannt",
      "lv": "nombrado"
    }
  },
  {
    "infinitiv": {
      "de": "pfeifen",
      "lv": "silbar"
    },
    "praesens": {
      "de": "er pfeift",
      "lv": "él silba"
    },
    "imperfektIndikativ": {
      "de": "er pfiff",
      "lv": "él silbó"
    },
    "imperfektKonjunktiv": {
      "de": "er pfiffe",
      "lv": "él silbaría"
    },
    "partizipVergangenheit": {
      "de": "gepfiffen",
      "lv": "silbado"
    }
  },
  {
    "infinitiv": {
      "de": "pflegen",
      "lv": "cuidar"
    },
    "praesens": {
      "de": "er pflegt",
      "lv": "él cuida"
    },
    "imperfektIndikativ": {
      "de": "pflegte / pflog",
      "lv": "él cuidó"
    },
    "imperfektKonjunktiv": {
      "de": "pflegte / pflog",
      "lv": "él cuidaría"
    },
    "partizipVergangenheit": {
      "de": "gepflegt / gepflogen",
      "lv": "cuidado"
    }
  },
  {
    "infinitiv": {
      "de": "preisen",
      "lv": "elogiar"
    },
    "praesens": {
      "de": "er preist",
      "lv": "él elogia"
    },
    "imperfektIndikativ": {
      "de": "er pries",
      "lv": "él elogió"
    },
    "imperfektKonjunktiv": {
      "de": "er priese",
      "lv": "él elogiaría"
    },
    "partizipVergangenheit": {
      "de": "gepriesen",
      "lv": "elogiado"
    }
  },
  {
    "infinitiv": {
      "de": "quellen",
      "lv": "hincharse"
    },
    "praesens": {
      "de": "er quillt",
      "lv": "se hincha"
    },
    "imperfektIndikativ": {
      "de": "er quoll",
      "lv": "se hinchó"
    },
    "imperfektKonjunktiv": {
      "de": "er quölle",
      "lv": "se hincharía"
    },
    "partizipVergangenheit": {
      "de": "gequollen (er ist)",
      "lv": "hinchado"
    }
  },
  {
    "infinitiv": {
      "de": "raten",
      "lv": "aconsejar / adivinar"
    },
    "praesens": {
      "de": "er rät",
      "lv": "él aconseja / adivina"
    },
    "imperfektIndikativ": {
      "de": "er riet",
      "lv": "él aconsejó / adivinó"
    },
    "imperfektKonjunktiv": {
      "de": "er riete",
      "lv": "él aconsejaría / adivinaría"
    },
    "partizipVergangenheit": {
      "de": "geraten",
      "lv": "aconsejado / adivinado"
    }
  },
  {
    "infinitiv": {
      "de": "reiben",
      "lv": "frotar"
    },
    "praesens": {
      "de": "er reibt",
      "lv": "él frota"
    },
    "imperfektIndikativ": {
      "de": "er rieb",
      "lv": "él frotó"
    },
    "imperfektKonjunktiv": {
      "de": "er riebe",
      "lv": "él frotaría"
    },
    "partizipVergangenheit": {
      "de": "gerieben",
      "lv": "frotado"
    }
  },
  {
    "infinitiv": {
      "de": "reißen",
      "lv": "rasgar"
    },
    "praesens": {
      "de": "er reißt",
      "lv": "él rasga"
    },
    "imperfektIndikativ": {
      "de": "er riss",
      "lv": "él rasgó"
    },
    "imperfektKonjunktiv": {
      "de": "er risse",
      "lv": "él rasgaría"
    },
    "partizipVergangenheit": {
      "de": "gerissen",
      "lv": "rasgado"
    }
  },
  {
    "infinitiv": {
      "de": "reiten",
      "lv": "montar a caballo"
    },
    "praesens": {
      "de": "er reitet",
      "lv": "él monta a caballo"
    },
    "imperfektIndikativ": {
      "de": "er ritt",
      "lv": "él montó a caballo"
    },
    "imperfektKonjunktiv": {
      "de": "er ritte",
      "lv": "él montaría a caballo"
    },
    "partizipVergangenheit": {
      "de": "geritten (er ist)",
      "lv": "montado a caballo"
    }
  },
  {
    "infinitiv": {
      "de": "rennen",
      "lv": "correr"
    },
    "praesens": {
      "de": "er rennt",
      "lv": "él corre"
    },
    "imperfektIndikativ": {
      "de": "er rannte",
      "lv": "él corrió"
    },
    "imperfektKonjunktiv": {
      "de": "er rennte",
      "lv": "él correría"
    },
    "partizipVergangenheit": {
      "de": "gerannt",
      "lv": "corrido"
    }
  },
  {
    "infinitiv": {
      "de": "riechen",
      "lv": "oler"
    },
    "praesens": {
      "de": "er riecht",
      "lv": "él huele"
    },
    "imperfektIndikativ": {
      "de": "er roch",
      "lv": "él olió"
    },
    "imperfektKonjunktiv": {
      "de": "er röche",
      "lv": "él olería"
    },
    "partizipVergangenheit": {
      "de": "gerochen",
      "lv": "olido"
    }
  },
  {
    "infinitiv": {
      "de": "ringen",
      "lv": "luchar"
    },
    "praesens": {
      "de": "er ringt",
      "lv": "él lucha"
    },
    "imperfektIndikativ": {
      "de": "er rang",
      "lv": "él luchó"
    },
    "imperfektKonjunktiv": {
      "de": "er ränge",
      "lv": "él lucharía"
    },
    "partizipVergangenheit": {
      "de": "gerungen",
      "lv": "luchado"
    }
  },
  {
    "infinitiv": {
      "de": "rinnen",
      "lv": "fluir"
    },
    "praesens": {
      "de": "er rinnt",
      "lv": "fluye"
    },
    "imperfektIndikativ": {
      "de": "er rann",
      "lv": "fluyó"
    },
    "imperfektKonjunktiv": {
      "de": "er ränne / er rönne",
      "lv": "fluiría"
    },
    "partizipVergangenheit": {
      "de": "geronnen (er ist)",
      "lv": "fluido"
    }
  },
  {
    "infinitiv": {
      "de": "rufen",
      "lv": "llamar"
    },
    "praesens": {
      "de": "er ruft",
      "lv": "él llama"
    },
    "imperfektIndikativ": {
      "de": "er rief",
      "lv": "él llamó"
    },
    "imperfektKonjunktiv": {
      "de": "er riefe",
      "lv": "él llamaría"
    },
    "partizipVergangenheit": {
      "de": "gerufen",
      "lv": "llamado"
    }
  },
  {
    "infinitiv": {
      "de": "salzen",
      "lv": "salar"
    },
    "praesens": {
      "de": "er salzt",
      "lv": "él sala"
    },
    "imperfektIndikativ": {
      "de": "er salzte",
      "lv": "él saló"
    },
    "imperfektKonjunktiv": {
      "de": "er salzte",
      "lv": "él salaría"
    },
    "partizipVergangenheit": {
      "de": "gesalzen",
      "lv": "salado"
    }
  },
  {
    "infinitiv": {
      "de": "saufen",
      "lv": "emborracharse / beber"
    },
    "praesens": {
      "de": "er säuft",
      "lv": "él se emborracha / bebe"
    },
    "imperfektIndikativ": {
      "de": "er soff",
      "lv": "él se emborrachó / bebió"
    },
    "imperfektKonjunktiv": {
      "de": "er söffe",
      "lv": "él se emborracharía / bebería"
    },
    "partizipVergangenheit": {
      "de": "gesoffen",
      "lv": "emborrachado / bebido"
    }
  },
  {
    "infinitiv": {
      "de": "saugen",
      "lv": "chupar"
    },
    "praesens": {
      "de": "er saugt",
      "lv": "él chupa"
    },
    "imperfektIndikativ": {
      "de": "er sog",
      "lv": "él chupó"
    },
    "imperfektKonjunktiv": {
      "de": "er söge",
      "lv": "él chuparía"
    },
    "partizipVergangenheit": {
      "de": "gesogen",
      "lv": "chupado"
    }
  },
  {
    "infinitiv": {
      "de": "schaffen",
      "lv": "crear"
    },
    "praesens": {
      "de": "er schafft",
      "lv": "él crea"
    },
    "imperfektIndikativ": {
      "de": "er schuf",
      "lv": "él creó"
    },
    "imperfektKonjunktiv": {
      "de": "er schüfe",
      "lv": "él crearía"
    },
    "partizipVergangenheit": {
      "de": "geschaffen",
      "lv": "creado"
    }
  },
  {
    "infinitiv": {
      "de": "schallen",
      "lv": "sonar"
    },
    "praesens": {
      "de": "es schallt",
      "lv": "suena"
    },
    "imperfektIndikativ": {
      "de": "schallte / scholl",
      "lv": "sonó"
    },
    "imperfektKonjunktiv": {
      "de": "schallte / scholl",
      "lv": "sonaría"
    },
    "partizipVergangenheit": {
      "de": "geschallt",
      "lv": "sonado"
    }
  },
  {
    "infinitiv": {
      "de": "scheiden",
      "lv": "separar / separarse"
    },
    "praesens": {
      "de": "er scheidet",
      "lv": "él separa / se separa"
    },
    "imperfektIndikativ": {
      "de": "er schied",
      "lv": "él separó / se separó"
    },
    "imperfektKonjunktiv": {
      "de": "er schiede",
      "lv": "él separaría / se separaría"
    },
    "partizipVergangenheit": {
      "de": "geschieden (er hat / er ist)",
      "lv": "separado / separado"
    }
  },
  {
    "infinitiv": {
      "de": "scheinen",
      "lv": "brillar / parecer"
    },
    "praesens": {
      "de": "er scheint",
      "lv": "él brilla / parece"
    },
    "imperfektIndikativ": {
      "de": "er schien",
      "lv": "él brilló / pareció"
    },
    "imperfektKonjunktiv": {
      "de": "er schiene",
      "lv": "él brillaría / parecería"
    },
    "partizipVergangenheit": {
      "de": "geschienen",
      "lv": "brillado / parecido"
    }
  },
  {
    "infinitiv": {
      "de": "schelten",
      "lv": "regañar"
    },
    "praesens": {
      "de": "er schilt",
      "lv": "él regaña"
    },
    "imperfektIndikativ": {
      "de": "er schalt",
      "lv": "él regañó"
    },
    "imperfektKonjunktiv": {
      "de": "er schölte / er schälte",
      "lv": "él regañaría"
    },
    "partizipVergangenheit": {
      "de": "gescholten",
      "lv": "regañado"
    }
  },
  {
    "infinitiv": {
      "de": "scheren",
      "lv": "esquilar"
    },
    "praesens": {
      "de": "er schert",
      "lv": "él esquila"
    },
    "imperfektIndikativ": {
      "de": "schor / scherte",
      "lv": "él esquiló"
    },
    "imperfektKonjunktiv": {
      "de": "schor / scherte",
      "lv": "él esquilaría"
    },
    "partizipVergangenheit": {
      "de": "geschoren / geschert",
      "lv": "esquilado"
    }
  },
  {
    "infinitiv": {
      "de": "schieben",
      "lv": "empujar"
    },
    "praesens": {
      "de": "er schiebt",
      "lv": "él empuja"
    },
    "imperfektIndikativ": {
      "de": "er schob",
      "lv": "él empujó"
    },
    "imperfektKonjunktiv": {
      "de": "er schöbe",
      "lv": "él empujaría"
    },
    "partizipVergangenheit": {
      "de": "geschoben",
      "lv": "empujado"
    }
  },
  {
    "infinitiv": {
      "de": "schießen",
      "lv": "disparar"
    },
    "praesens": {
      "de": "er schießt",
      "lv": "él dispara"
    },
    "imperfektIndikativ": {
      "de": "er schoss",
      "lv": "él disparó"
    },
    "imperfektKonjunktiv": {
      "de": "er schösse",
      "lv": "él dispararía"
    },
    "partizipVergangenheit": {
      "de": "geschossen",
      "lv": "disparado"
    }
  },
  {
    "infinitiv": {
      "de": "schinden",
      "lv": "atormentar"
    },
    "praesens": {
      "de": "er schindet",
      "lv": "él atormenta"
    },
    "imperfektIndikativ": {
      "de": "schindete",
      "lv": "él atormentó"
    },
    "imperfektKonjunktiv": {
      "de": "schindete",
      "lv": "él atormentaría"
    },
    "partizipVergangenheit": {
      "de": "geschunden",
      "lv": "atormentado"
    }
  },
  {
    "infinitiv": {
      "de": "schlafen",
      "lv": "dormir"
    },
    "praesens": {
      "de": "er schläft",
      "lv": "él duerme"
    },
    "imperfektIndikativ": {
      "de": "er schlief",
      "lv": "él durmió"
    },
    "imperfektKonjunktiv": {
      "de": "er schliefe",
      "lv": "él dormiría"
    },
    "partizipVergangenheit": {
      "de": "geschlafen",
      "lv": "dormido"
    }
  },
  {
    "infinitiv": {
      "de": "schlagen",
      "lv": "golpear"
    },
    "praesens": {
      "de": "er schlägt",
      "lv": "él golpea"
    },
    "imperfektIndikativ": {
      "de": "er schlug",
      "lv": "él golpeó"
    },
    "imperfektKonjunktiv": {
      "de": "er schlüge",
      "lv": "él golpearía"
    },
    "partizipVergangenheit": {
      "de": "geschlagen",
      "lv": "golpeado"
    }
  },
  {
    "infinitiv": {
      "de": "schleichen",
      "lv": "andar a hurtadillas"
    },
    "praesens": {
      "de": "er schleicht",
      "lv": "él anda a hurtadillas"
    },
    "imperfektIndikativ": {
      "de": "er schlich",
      "lv": "él anduvo a hurtadillas"
    },
    "imperfektKonjunktiv": {
      "de": "er schliche",
      "lv": "él andaría a hurtadillas"
    },
    "partizipVergangenheit": {
      "de": "geschlichen (er ist)",
      "lv": "andado a hurtadillas"
    }
  },
  {
    "infinitiv": {
      "de": "schleifen",
      "lv": "pulir"
    },
    "praesens": {
      "de": "er schleift",
      "lv": "él pule"
    },
    "imperfektIndikativ": {
      "de": "er schliff",
      "lv": "él pulió"
    },
    "imperfektKonjunktiv": {
      "de": "er schliffe",
      "lv": "él puliría"
    },
    "partizipVergangenheit": {
      "de": "geschliffen",
      "lv": "pulido"
    }
  },
  {
    "infinitiv": {
      "de": "schließen",
      "lv": "cerrar"
    },
    "praesens": {
      "de": "er schließt",
      "lv": "él cierra"
    },
    "imperfektIndikativ": {
      "de": "er schloss",
      "lv": "él cerró"
    },
    "imperfektKonjunktiv": {
      "de": "er schlösse",
      "lv": "él cerraría"
    },
    "partizipVergangenheit": {
      "de": "geschlossen",
      "lv": "cerrado"
    }
  },
  {
    "infinitiv": {
      "de": "schlingen",
      "lv": "engullir"
    },
    "praesens": {
      "de": "er schlingt",
      "lv": "él engulle"
    },
    "imperfektIndikativ": {
      "de": "er schlang",
      "lv": "él engulló"
    },
    "imperfektKonjunktiv": {
      "de": "er schlänge",
      "lv": "él engulliría"
    },
    "partizipVergangenheit": {
      "de": "geschlungen",
      "lv": "engullido"
    }
  },
  {
    "infinitiv": {
      "de": "schmeißen",
      "lv": "arrojar"
    },
    "praesens": {
      "de": "er schmeißt",
      "lv": "él arroja"
    },
    "imperfektIndikativ": {
      "de": "er schmiss",
      "lv": "él arrojó"
    },
    "imperfektKonjunktiv": {
      "de": "er schmisse",
      "lv": "él arrojaría"
    },
    "partizipVergangenheit": {
      "de": "geschmissen",
      "lv": "arrojado"
    }
  },
  {
    "infinitiv": {
      "de": "schmelzen",
      "lv": "derretirse"
    },
    "praesens": {
      "de": "er schmilzt",
      "lv": "se derrite"
    },
    "imperfektIndikativ": {
      "de": "er schmolz",
      "lv": "se derritió"
    },
    "imperfektKonjunktiv": {
      "de": "er schmölze",
      "lv": "se derretiría"
    },
    "partizipVergangenheit": {
      "de": "geschmolzen (er ist)",
      "lv": "derretido"
    }
  },
  {
    "infinitiv": {
      "de": "schnauben",
      "lv": "resoplar"
    },
    "praesens": {
      "de": "er schnaubt",
      "lv": "él resopla"
    },
    "imperfektIndikativ": {
      "de": "schnaubte / schnob",
      "lv": "él resopló"
    },
    "imperfektKonjunktiv": {
      "de": "schnaubte / schnob",
      "lv": "él resoplaría"
    },
    "partizipVergangenheit": {
      "de": "geschnaubt / geschnoben",
      "lv": "resoplado"
    }
  },
  {
    "infinitiv": {
      "de": "schneiden",
      "lv": "cortar"
    },
    "praesens": {
      "de": "er schneidet",
      "lv": "él corta"
    },
    "imperfektIndikativ": {
      "de": "er schnitt",
      "lv": "él cortó"
    },
    "imperfektKonjunktiv": {
      "de": "er schnitte",
      "lv": "él cortaría"
    },
    "partizipVergangenheit": {
      "de": "geschnitten",
      "lv": "cortado"
    }
  },
  {
    "infinitiv": {
      "de": "schreiben",
      "lv": "escribir"
    },
    "praesens": {
      "de": "er schreibt",
      "lv": "él escribe"
    },
    "imperfektIndikativ": {
      "de": "er schrieb",
      "lv": "él escribió"
    },
    "imperfektKonjunktiv": {
      "de": "er schriebe",
      "lv": "él escribiría"
    },
    "partizipVergangenheit": {
      "de": "geschrieben",
      "lv": "escrito"
    }
  },
  {
    "infinitiv": {
      "de": "schreien",
      "lv": "gritar"
    },
    "praesens": {
      "de": "er schreit",
      "lv": "él grita"
    },
    "imperfektIndikativ": {
      "de": "er schrie",
      "lv": "él gritó"
    },
    "imperfektKonjunktiv": {
      "de": "er schriee",
      "lv": "él gritaría"
    },
    "partizipVergangenheit": {
      "de": "geschrien",
      "lv": "gritado"
    }
  },
  {
    "infinitiv": {
      "de": "schreiten",
      "lv": "marchar"
    },
    "praesens": {
      "de": "er schreitet",
      "lv": "él marcha"
    },
    "imperfektIndikativ": {
      "de": "er schritt",
      "lv": "él marchó"
    },
    "imperfektKonjunktiv": {
      "de": "er schritte",
      "lv": "él marcharía"
    },
    "partizipVergangenheit": {
      "de": "geschritten (er ist)",
      "lv": "marchado"
    }
  },
  {
    "infinitiv": {
      "de": "schweigen",
      "lv": "callar"
    },
    "praesens": {
      "de": "er schweigt",
      "lv": "él calla"
    },
    "imperfektIndikativ": {
      "de": "er schwieg",
      "lv": "él calló"
    },
    "imperfektKonjunktiv": {
      "de": "er schwiege",
      "lv": "él callaría"
    },
    "partizipVergangenheit": {
      "de": "geschwiegen",
      "lv": "callado"
    }
  },
  {
    "infinitiv": {
      "de": "schwellen",
      "lv": "hincharse"
    },
    "praesens": {
      "de": "er schwillt",
      "lv": "se hincha"
    },
    "imperfektIndikativ": {
      "de": "er schwoll",
      "lv": "se hinchó"
    },
    "imperfektKonjunktiv": {
      "de": "er schwölle",
      "lv": "se hincharía"
    },
    "partizipVergangenheit": {
      "de": "geschwollen (er ist)",
      "lv": "hinchado"
    }
  },
  {
    "infinitiv": {
      "de": "schwimmen",
      "lv": "nadar"
    },
    "praesens": {
      "de": "er schwimmt",
      "lv": "él nada"
    },
    "imperfektIndikativ": {
      "de": "er schwamm",
      "lv": "él nadó"
    },
    "imperfektKonjunktiv": {
      "de": "er schwömme / er schwämme",
      "lv": "él nadaría"
    },
    "partizipVergangenheit": {
      "de": "geschwommen (er ist)",
      "lv": "nadado"
    }
  },
  {
    "infinitiv": {
      "de": "schwinden",
      "lv": "desaparecer"
    },
    "praesens": {
      "de": "er schwindet",
      "lv": "desaparece"
    },
    "imperfektIndikativ": {
      "de": "er schwand",
      "lv": "desapareció"
    },
    "imperfektKonjunktiv": {
      "de": "er schwände",
      "lv": "desaparecería"
    },
    "partizipVergangenheit": {
      "de": "geschwunden (er ist)",
      "lv": "desaparecido"
    }
  },
  {
    "infinitiv": {
      "de": "schwingen",
      "lv": "agitar"
    },
    "praesens": {
      "de": "er schwingt",
      "lv": "él agita"
    },
    "imperfektIndikativ": {
      "de": "er schwang",
      "lv": "él agitó"
    },
    "imperfektKonjunktiv": {
      "de": "er schwänge",
      "lv": "él agitaría"
    },
    "partizipVergangenheit": {
      "de": "geschwungen",
      "lv": "agitado"
    }
  },
  {
    "infinitiv": {
      "de": "schwören",
      "lv": "jurar"
    },
    "praesens": {
      "de": "er schwört",
      "lv": "él jura"
    },
    "imperfektIndikativ": {
      "de": "er schwur / er schwor",
      "lv": "él juró"
    },
    "imperfektKonjunktiv": {
      "de": "er schwöre",
      "lv": "él juraría"
    },
    "partizipVergangenheit": {
      "de": "geschworen",
      "lv": "jurado"
    }
  },
  {
    "infinitiv": {
      "de": "sehen",
      "lv": "ver"
    },
    "praesens": {
      "de": "er sieht",
      "lv": "él ve"
    },
    "imperfektIndikativ": {
      "de": "er sah",
      "lv": "él vio"
    },
    "imperfektKonjunktiv": {
      "de": "er sähe",
      "lv": "él vería"
    },
    "partizipVergangenheit": {
      "de": "gesehen",
      "lv": "visto"
    }
  },
  {
    "infinitiv": {
      "de": "sein",
      "lv": "ser"
    },
    "praesens": {
      "de": "er ist",
      "lv": "él es"
    },
    "imperfektIndikativ": {
      "de": "war",
      "lv": "él fue"
    },
    "imperfektKonjunktiv": {
      "de": "war",
      "lv": "él sería"
    },
    "partizipVergangenheit": {
      "de": "gewesen",
      "lv": "sido"
    }
  },
  {
    "infinitiv": {
      "de": "senden",
      "lv": "enviar"
    },
    "praesens": {
      "de": "er sendet",
      "lv": "él envía"
    },
    "imperfektIndikativ": {
      "de": "er sandte / er sendete",
      "lv": "él envió"
    },
    "imperfektKonjunktiv": {
      "de": "er sendete",
      "lv": "él enviaría"
    },
    "partizipVergangenheit": {
      "de": "gesandt / gesendet",
      "lv": "enviado"
    }
  },
  {
    "infinitiv": {
      "de": "sieden",
      "lv": "hervir"
    },
    "praesens": {
      "de": "er siedet",
      "lv": "él hierve"
    },
    "imperfektIndikativ": {
      "de": "sott / siedete",
      "lv": "él hirvió"
    },
    "imperfektKonjunktiv": {
      "de": "sott / siedete",
      "lv": "él herviría"
    },
    "partizipVergangenheit": {
      "de": "gesotten / gesiedet",
      "lv": "hervido"
    }
  },
  {
    "infinitiv": {
      "de": "singen",
      "lv": "cantar"
    },
    "praesens": {
      "de": "er singt",
      "lv": "él canta"
    },
    "imperfektIndikativ": {
      "de": "er sang",
      "lv": "él cantó"
    },
    "imperfektKonjunktiv": {
      "de": "er sänge",
      "lv": "él cantaría"
    },
    "partizipVergangenheit": {
      "de": "gesungen",
      "lv": "cantado"
    }
  },
  {
    "infinitiv": {
      "de": "sinken",
      "lv": "hundirse"
    },
    "praesens": {
      "de": "er sinkt",
      "lv": "él se hunde"
    },
    "imperfektIndikativ": {
      "de": "er sank",
      "lv": "él se hundió"
    },
    "imperfektKonjunktiv": {
      "de": "er sänke",
      "lv": "él se hundiría"
    },
    "partizipVergangenheit": {
      "de": "gesunken (er ist)",
      "lv": "hundido"
    }
  },
  {
    "infinitiv": {
      "de": "sinnen",
      "lv": "reflexionar"
    },
    "praesens": {
      "de": "er sinnt",
      "lv": "él reflexiona"
    },
    "imperfektIndikativ": {
      "de": "er sann",
      "lv": "él reflexionó"
    },
    "imperfektKonjunktiv": {
      "de": "er sönne / er sänne",
      "lv": "él reflexionaría"
    },
    "partizipVergangenheit": {
      "de": "gesonnen",
      "lv": "reflexionado"
    }
  },
  {
    "infinitiv": {
      "de": "sitzen",
      "lv": "estar sentado"
    },
    "praesens": {
      "de": "er sitzt",
      "lv": "él está sentado"
    },
    "imperfektIndikativ": {
      "de": "er sass",
      "lv": "él estuvo sentado"
    },
    "imperfektKonjunktiv": {
      "de": "er säße",
      "lv": "él estaría sentado"
    },
    "partizipVergangenheit": {
      "de": "gesessen",
      "lv": "estado sentado"
    }
  },
  {
    "infinitiv": {
      "de": "sollen",
      "lv": "deber"
    },
    "praesens": {
      "de": "er soll",
      "lv": "él debe"
    },
    "imperfektIndikativ": {
      "de": "sollte",
      "lv": "él debió"
    },
    "imperfektKonjunktiv": {
      "de": "sollte",
      "lv": "él debería"
    },
    "partizipVergangenheit": {
      "de": "gesollt",
      "lv": "debido"
    }
  },
  {
    "infinitiv": {
      "de": "speien",
      "lv": "escupir"
    },
    "praesens": {
      "de": "er speit",
      "lv": "él escupe"
    },
    "imperfektIndikativ": {
      "de": "er spie",
      "lv": "él escupió"
    },
    "imperfektKonjunktiv": {
      "de": "er spie",
      "lv": "él escupiría"
    },
    "partizipVergangenheit": {
      "de": "gespien",
      "lv": "escupido"
    }
  },
  {
    "infinitiv": {
      "de": "spinnen",
      "lv": "hilar"
    },
    "praesens": {
      "de": "er spinnt",
      "lv": "él hila"
    },
    "imperfektIndikativ": {
      "de": "er spann",
      "lv": "él hiló"
    },
    "imperfektKonjunktiv": {
      "de": "er spönne / er spänne",
      "lv": "él hilaría"
    },
    "partizipVergangenheit": {
      "de": "gesponnen",
      "lv": "hilado"
    }
  },
  {
    "infinitiv": {
      "de": "spleißen",
      "lv": "unir"
    },
    "praesens": {
      "de": "er spleißt",
      "lv": "él une"
    },
    "imperfektIndikativ": {
      "de": "spliss",
      "lv": "él unió"
    },
    "imperfektKonjunktiv": {
      "de": "spliss",
      "lv": "él uniría"
    },
    "partizipVergangenheit": {
      "de": "gesplissen",
      "lv": "unido"
    }
  },
  {
    "infinitiv": {
      "de": "sprechen",
      "lv": "hablar"
    },
    "praesens": {
      "de": "er spricht",
      "lv": "él habla"
    },
    "imperfektIndikativ": {
      "de": "er sprach",
      "lv": "él habló"
    },
    "imperfektKonjunktiv": {
      "de": "er spräche",
      "lv": "él hablaría"
    },
    "partizipVergangenheit": {
      "de": "gesprochen",
      "lv": "hablado"
    }
  },
  {
    "infinitiv": {
      "de": "sprießen",
      "lv": "brotar"
    },
    "praesens": {
      "de": "er sprießt",
      "lv": "brota"
    },
    "imperfektIndikativ": {
      "de": "er spross",
      "lv": "brotó"
    },
    "imperfektKonjunktiv": {
      "de": "er sprösse",
      "lv": "brotaría"
    },
    "partizipVergangenheit": {
      "de": "gesprossen (er ist)",
      "lv": "brotado"
    }
  },
  {
    "infinitiv": {
      "de": "springen",
      "lv": "saltar"
    },
    "praesens": {
      "de": "er springt",
      "lv": "él salta"
    },
    "imperfektIndikativ": {
      "de": "er sprang",
      "lv": "él saltó"
    },
    "imperfektKonjunktiv": {
      "de": "er spränge",
      "lv": "él saltaría"
    },
    "partizipVergangenheit": {
      "de": "gesprungen (er ist)",
      "lv": "saltado"
    }
  },
  {
    "infinitiv": {
      "de": "stechen",
      "lv": "pinchar"
    },
    "praesens": {
      "de": "er sticht",
      "lv": "él pincha"
    },
    "imperfektIndikativ": {
      "de": "er stach",
      "lv": "él pinchó"
    },
    "imperfektKonjunktiv": {
      "de": "er stäche",
      "lv": "él pincharía"
    },
    "partizipVergangenheit": {
      "de": "gestochen",
      "lv": "pinchado"
    }
  },
  {
    "infinitiv": {
      "de": "stecken",
      "lv": "meter / clavar"
    },
    "praesens": {
      "de": "er steckt",
      "lv": "él mete / clava"
    },
    "imperfektIndikativ": {
      "de": "stak / steckte",
      "lv": "él metió / clavó"
    },
    "imperfektKonjunktiv": {
      "de": "stak / steckte",
      "lv": "él metería / clavaría"
    },
    "partizipVergangenheit": {
      "de": "gesteckt",
      "lv": "metido / clavado"
    }
  },
  {
    "infinitiv": {
      "de": "stehen",
      "lv": "estar de pie"
    },
    "praesens": {
      "de": "er steht",
      "lv": "él está de pie"
    },
    "imperfektIndikativ": {
      "de": "er stand",
      "lv": "él estuvo de pie"
    },
    "imperfektKonjunktiv": {
      "de": "er stände / er stünde",
      "lv": "él estaría de pie"
    },
    "partizipVergangenheit": {
      "de": "gestanden",
      "lv": "estado de pie"
    }
  },
  {
    "infinitiv": {
      "de": "stehlen",
      "lv": "robar"
    },
    "praesens": {
      "de": "er stiehlt",
      "lv": "él roba"
    },
    "imperfektIndikativ": {
      "de": "er stahl",
      "lv": "él robó"
    },
    "imperfektKonjunktiv": {
      "de": "er stöhle / er stähle",
      "lv": "él robaría"
    },
    "partizipVergangenheit": {
      "de": "gestohlen",
      "lv": "robado"
    }
  },
  {
    "infinitiv": {
      "de": "steigen",
      "lv": "subir"
    },
    "praesens": {
      "de": "er steigt",
      "lv": "él sube"
    },
    "imperfektIndikativ": {
      "de": "er stieg",
      "lv": "él subió"
    },
    "imperfektKonjunktiv": {
      "de": "er stiege",
      "lv": "él subiría"
    },
    "partizipVergangenheit": {
      "de": "gestiegen (er ist)",
      "lv": "subido"
    }
  },
  {
    "infinitiv": {
      "de": "sterben",
      "lv": "morir"
    },
    "praesens": {
      "de": "er stirbt",
      "lv": "él muere"
    },
    "imperfektIndikativ": {
      "de": "er starb",
      "lv": "él murió"
    },
    "imperfektKonjunktiv": {
      "de": "er stürbe",
      "lv": "él moriría"
    },
    "partizipVergangenheit": {
      "de": "gestorben (er ist)",
      "lv": "muerto"
    }
  },
  {
    "infinitiv": {
      "de": "stinken",
      "lv": "apestar"
    },
    "praesens": {
      "de": "es stinkt",
      "lv": "apesta"
    },
    "imperfektIndikativ": {
      "de": "stank",
      "lv": "apestó"
    },
    "imperfektKonjunktiv": {
      "de": "stank",
      "lv": "apestaría"
    },
    "partizipVergangenheit": {
      "de": "gestunken",
      "lv": "apestado"
    }
  },
  {
    "infinitiv": {
      "de": "stoßen",
      "lv": "dar un empujón"
    },
    "praesens": {
      "de": "er stößt",
      "lv": "él da un empujón"
    },
    "imperfektIndikativ": {
      "de": "er stieß",
      "lv": "él dio un empujón"
    },
    "imperfektKonjunktiv": {
      "de": "er stieße",
      "lv": "él daría un empujón"
    },
    "partizipVergangenheit": {
      "de": "gestoßen",
      "lv": "dado un empujón"
    }
  },
  {
    "infinitiv": {
      "de": "streichen",
      "lv": "pintar / tachar"
    },
    "praesens": {
      "de": "er streicht",
      "lv": "él pinta / tacha"
    },
    "imperfektIndikativ": {
      "de": "er strich",
      "lv": "él pintó / tachó"
    },
    "imperfektKonjunktiv": {
      "de": "er striche",
      "lv": "él pintaría / tacharía"
    },
    "partizipVergangenheit": {
      "de": "gestrichen",
      "lv": "pintado / tachado"
    }
  },
  {
    "infinitiv": {
      "de": "streiten",
      "lv": "discutir"
    },
    "praesens": {
      "de": "er streitet",
      "lv": "él discute"
    },
    "imperfektIndikativ": {
      "de": "er stritt",
      "lv": "él discutió"
    },
    "imperfektKonjunktiv": {
      "de": "er stritte",
      "lv": "él discutiría"
    },
    "partizipVergangenheit": {
      "de": "gestritten",
      "lv": "discutido"
    }
  },
  {
    "infinitiv": {
      "de": "tragen",
      "lv": "llevar"
    },
    "praesens": {
      "de": "er trägt",
      "lv": "él lleva"
    },
    "imperfektIndikativ": {
      "de": "er trug",
      "lv": "él llevó"
    },
    "imperfektKonjunktiv": {
      "de": "er trüge",
      "lv": "él llevaría"
    },
    "partizipVergangenheit": {
      "de": "getragen",
      "lv": "llevado"
    }
  },
  {
    "infinitiv": {
      "de": "treffen",
      "lv": "encontrarse con"
    },
    "praesens": {
      "de": "er trifft",
      "lv": "él se encuentra con"
    },
    "imperfektIndikativ": {
      "de": "er traf",
      "lv": "él se encontró con"
    },
    "imperfektKonjunktiv": {
      "de": "er träfe",
      "lv": "él se encontraría con"
    },
    "partizipVergangenheit": {
      "de": "getroffen",
      "lv": "encontrado con"
    }
  },
  {
    "infinitiv": {
      "de": "treiben",
      "lv": "impulsar"
    },
    "praesens": {
      "de": "er treibt",
      "lv": "él impulsa"
    },
    "imperfektIndikativ": {
      "de": "er trieb",
      "lv": "él impulsó"
    },
    "imperfektKonjunktiv": {
      "de": "er triebe",
      "lv": "él impulsaría"
    },
    "partizipVergangenheit": {
      "de": "getrieben",
      "lv": "impulsado"
    }
  },
  {
    "infinitiv": {
      "de": "treten",
      "lv": "dar un paso / ir"
    },
    "praesens": {
      "de": "er tritt",
      "lv": "él da un paso / va"
    },
    "imperfektIndikativ": {
      "de": "er trat",
      "lv": "él dio un paso / fue"
    },
    "imperfektKonjunktiv": {
      "de": "er träte",
      "lv": "él daría un paso / iría"
    },
    "partizipVergangenheit": {
      "de": "getreten (er ist)",
      "lv": "dado un paso / ido"
    }
  },
  {
    "infinitiv": {
      "de": "trinken",
      "lv": "beber"
    },
    "praesens": {
      "de": "er trinkt",
      "lv": "él bebe"
    },
    "imperfektIndikativ": {
      "de": "er trank",
      "lv": "él bebió"
    },
    "imperfektKonjunktiv": {
      "de": "er tränke",
      "lv": "él bebería"
    },
    "partizipVergangenheit": {
      "de": "getrunken",
      "lv": "bebido"
    }
  },
  {
    "infinitiv": {
      "de": "trügen",
      "lv": "engañar"
    },
    "praesens": {
      "de": "er trögt",
      "lv": "él engaña"
    },
    "imperfektIndikativ": {
      "de": "er trog",
      "lv": "él engañó"
    },
    "imperfektKonjunktiv": {
      "de": "er tröge",
      "lv": "él engañaría"
    },
    "partizipVergangenheit": {
      "de": "getrogen",
      "lv": "engañado"
    }
  },
  {
    "infinitiv": {
      "de": "tun",
      "lv": "hacer"
    },
    "praesens": {
      "de": "er tut",
      "lv": "él hace"
    },
    "imperfektIndikativ": {
      "de": "er tat",
      "lv": "él hizo"
    },
    "imperfektKonjunktiv": {
      "de": "er täte",
      "lv": "él haría"
    },
    "partizipVergangenheit": {
      "de": "getan",
      "lv": "hecho"
    }
  },
  {
    "infinitiv": {
      "de": "verderben",
      "lv": "estropear"
    },
    "praesens": {
      "de": "er verdirbt",
      "lv": "él estropea"
    },
    "imperfektIndikativ": {
      "de": "er verdarb",
      "lv": "él estropeó"
    },
    "imperfektKonjunktiv": {
      "de": "er verdürbe",
      "lv": "él estropearía"
    },
    "partizipVergangenheit": {
      "de": "verdorben",
      "lv": "estropeado"
    }
  },
  {
    "infinitiv": {
      "de": "verdrießen",
      "lv": "molestar"
    },
    "praesens": {
      "de": "er verdrießt",
      "lv": "él molesta"
    },
    "imperfektIndikativ": {
      "de": "er verdross",
      "lv": "él molestó"
    },
    "imperfektKonjunktiv": {
      "de": "er verdrösse",
      "lv": "él molestaría"
    },
    "partizipVergangenheit": {
      "de": "verdrossen",
      "lv": "molestado"
    }
  },
  {
    "infinitiv": {
      "de": "vergessen",
      "lv": "olvidar"
    },
    "praesens": {
      "de": "er vergisst",
      "lv": "él olvida"
    },
    "imperfektIndikativ": {
      "de": "er vergass",
      "lv": "él olvidó"
    },
    "imperfektKonjunktiv": {
      "de": "er vergäße",
      "lv": "él olvidaría"
    },
    "partizipVergangenheit": {
      "de": "vergessen",
      "lv": "olvidado"
    }
  },
  {
    "infinitiv": {
      "de": "verlieren",
      "lv": "perder"
    },
    "praesens": {
      "de": "er verliert",
      "lv": "él pierde"
    },
    "imperfektIndikativ": {
      "de": "er verlor",
      "lv": "él perdió"
    },
    "imperfektKonjunktiv": {
      "de": "er verlöre",
      "lv": "él perdería"
    },
    "partizipVergangenheit": {
      "de": "verloren",
      "lv": "perdido"
    }
  },
  {
    "infinitiv": {
      "de": "wachsen",
      "lv": "crecer"
    },
    "praesens": {
      "de": "er wächst",
      "lv": "él crece"
    },
    "imperfektIndikativ": {
      "de": "er wuchs",
      "lv": "él creció"
    },
    "imperfektKonjunktiv": {
      "de": "er wüchse",
      "lv": "él crecería"
    },
    "partizipVergangenheit": {
      "de": "gewachsen (er ist)",
      "lv": "crecido"
    }
  },
  {
    "infinitiv": {
      "de": "waschen",
      "lv": "lavar"
    },
    "praesens": {
      "de": "er wäscht",
      "lv": "él lava"
    },
    "imperfektIndikativ": {
      "de": "er wusch",
      "lv": "él lavó"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsche",
      "lv": "él lavaría"
    },
    "partizipVergangenheit": {
      "de": "gewaschen",
      "lv": "lavado"
    }
  },
  {
    "infinitiv": {
      "de": "weben",
      "lv": "tejer"
    },
    "praesens": {
      "de": "er webt",
      "lv": "él teje"
    },
    "imperfektIndikativ": {
      "de": "wob",
      "lv": "él tejió"
    },
    "imperfektKonjunktiv": {
      "de": "wob",
      "lv": "él tejería"
    },
    "partizipVergangenheit": {
      "de": "gewoben",
      "lv": "tejido"
    }
  },
  {
    "infinitiv": {
      "de": "weichen",
      "lv": "retirarse"
    },
    "praesens": {
      "de": "er weicht",
      "lv": "él se retira"
    },
    "imperfektIndikativ": {
      "de": "er wich",
      "lv": "él se retiró"
    },
    "imperfektKonjunktiv": {
      "de": "er wiche",
      "lv": "él se retiraría"
    },
    "partizipVergangenheit": {
      "de": "gewichen (er ist)",
      "lv": "retirado"
    }
  },
  {
    "infinitiv": {
      "de": "weisen",
      "lv": "mostrar"
    },
    "praesens": {
      "de": "er weist",
      "lv": "él muestra"
    },
    "imperfektIndikativ": {
      "de": "er wies",
      "lv": "él mostró"
    },
    "imperfektKonjunktiv": {
      "de": "er wiese",
      "lv": "él mostraría"
    },
    "partizipVergangenheit": {
      "de": "gewiesen",
      "lv": "mostrado"
    }
  },
  {
    "infinitiv": {
      "de": "wenden",
      "lv": "girar / dar la vuelta"
    },
    "praesens": {
      "de": "er wendet",
      "lv": "él gira / da la vuelta"
    },
    "imperfektIndikativ": {
      "de": "er wandte / es wendete",
      "lv": "él giró / dio la vuelta"
    },
    "imperfektKonjunktiv": {
      "de": "er wendete",
      "lv": "él giraría / daría la vuelta"
    },
    "partizipVergangenheit": {
      "de": "gewandt / gewendet",
      "lv": "girado / dado la vuelta"
    }
  },
  {
    "infinitiv": {
      "de": "werben",
      "lv": "pedir en matrimonio"
    },
    "praesens": {
      "de": "er wirbt",
      "lv": "él pide en matrimonio"
    },
    "imperfektIndikativ": {
      "de": "er warb",
      "lv": "él pidió en matrimonio"
    },
    "imperfektKonjunktiv": {
      "de": "er würbe",
      "lv": "él pediría en matrimonio"
    },
    "partizipVergangenheit": {
      "de": "geworben",
      "lv": "pedido en matrimonio"
    }
  },
  {
    "infinitiv": {
      "de": "werden",
      "lv": "convertirse en"
    },
    "praesens": {
      "de": "er wird",
      "lv": "él se convierte en"
    },
    "imperfektIndikativ": {
      "de": "wurde",
      "lv": "él se convirtió en"
    },
    "imperfektKonjunktiv": {
      "de": "wurde",
      "lv": "él se convertiría en"
    },
    "partizipVergangenheit": {
      "de": "geworden",
      "lv": "convertido en"
    }
  },
  {
    "infinitiv": {
      "de": "werfen",
      "lv": "lanzar"
    },
    "praesens": {
      "de": "er wirft",
      "lv": "él lanza"
    },
    "imperfektIndikativ": {
      "de": "er warf",
      "lv": "él lanzó"
    },
    "imperfektKonjunktiv": {
      "de": "er würfe",
      "lv": "él lanzaría"
    },
    "partizipVergangenheit": {
      "de": "geworfen",
      "lv": "lanzado"
    }
  },
  {
    "infinitiv": {
      "de": "wiegen",
      "lv": "pesar"
    },
    "praesens": {
      "de": "er wiegt",
      "lv": "él pesa"
    },
    "imperfektIndikativ": {
      "de": "er wog",
      "lv": "él pesó"
    },
    "imperfektKonjunktiv": {
      "de": "er wöge",
      "lv": "él pesaría"
    },
    "partizipVergangenheit": {
      "de": "gewogen",
      "lv": "pesado"
    }
  },
  {
    "infinitiv": {
      "de": "winden",
      "lv": "entrelazar"
    },
    "praesens": {
      "de": "er windet",
      "lv": "él entrelaza"
    },
    "imperfektIndikativ": {
      "de": "er wand",
      "lv": "él entrelazó"
    },
    "imperfektKonjunktiv": {
      "de": "er wände",
      "lv": "él entrelazaría"
    },
    "partizipVergangenheit": {
      "de": "gewunden",
      "lv": "entrelazado"
    }
  },
  {
    "infinitiv": {
      "de": "wissen",
      "lv": "saber"
    },
    "praesens": {
      "de": "er weiß",
      "lv": "él sabe"
    },
    "imperfektIndikativ": {
      "de": "er wusste",
      "lv": "él supo"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsste",
      "lv": "él sabría"
    },
    "partizipVergangenheit": {
      "de": "gewusst",
      "lv": "sabido"
    }
  },
  {
    "infinitiv": {
      "de": "wollen",
      "lv": "querer"
    },
    "praesens": {
      "de": "er will",
      "lv": "él quiere"
    },
    "imperfektIndikativ": {
      "de": "wollte",
      "lv": "él quiso"
    },
    "imperfektKonjunktiv": {
      "de": "wollte",
      "lv": "él querría"
    },
    "partizipVergangenheit": {
      "de": "gewollt",
      "lv": "querido"
    }
  },
  {
    "infinitiv": {
      "de": "wringen",
      "lv": "escurrir / exprimir"
    },
    "praesens": {
      "de": "er wringt",
      "lv": "él escurre / exprime"
    },
    "imperfektIndikativ": {
      "de": "wrang",
      "lv": "él escurrió / exprimió"
    },
    "imperfektKonjunktiv": {
      "de": "wrang",
      "lv": "él escurriría / exprimiría"
    },
    "partizipVergangenheit": {
      "de": "gewrungen",
      "lv": "escurrido / exprimido"
    }
  },
  {
    "infinitiv": {
      "de": "zeihen",
      "lv": "acusar"
    },
    "praesens": {
      "de": "er zeiht",
      "lv": "él acusa"
    },
    "imperfektIndikativ": {
      "de": "zieh",
      "lv": "él acusó"
    },
    "imperfektKonjunktiv": {
      "de": "zieh",
      "lv": "él acusaría"
    },
    "partizipVergangenheit": {
      "de": "geziehen",
      "lv": "acusado"
    }
  },
  {
    "infinitiv": {
      "de": "ziehen",
      "lv": "tirar"
    },
    "praesens": {
      "de": "er zieht",
      "lv": "él tira"
    },
    "imperfektIndikativ": {
      "de": "er zog",
      "lv": "él tiró"
    },
    "imperfektKonjunktiv": {
      "de": "er zöge",
      "lv": "él tiraría"
    },
    "partizipVergangenheit": {
      "de": "gezogen",
      "lv": "tirado"
    }
  },
  {
    "infinitiv": {
      "de": "zwingen",
      "lv": "obligar"
    },
    "praesens": {
      "de": "er zwingt",
      "lv": "él obliga"
    },
    "imperfektIndikativ": {
      "de": "er zwang",
      "lv": "él obligó"
    },
    "imperfektKonjunktiv": {
      "de": "er zwänge",
      "lv": "él obligaría"
    },
    "partizipVergangenheit": {
      "de": "gezwungen",
      "lv": "obligado"
    }
  },
  {
    "infinitiv": {
      "de": "empfangen",
      "lv": "recibir"
    },
    "praesens": {
      "de": "er empfängt",
      "lv": "él recibe"
    },
    "imperfektIndikativ": {
      "de": "er empfing",
      "lv": "él recibió"
    },
    "imperfektKonjunktiv": {
      "de": "er empfinge",
      "lv": "él recibiría"
    },
    "partizipVergangenheit": {
      "de": "empfangen",
      "lv": "recibido"
    }
  },
  {
    "infinitiv": {
      "de": "erwägen",
      "lv": "considerar"
    },
    "praesens": {
      "de": "er erwägt",
      "lv": "él considera"
    },
    "imperfektIndikativ": {
      "de": "er erwog",
      "lv": "él consideró"
    },
    "imperfektKonjunktiv": {
      "de": "er erwöge",
      "lv": "él consideraría"
    },
    "partizipVergangenheit": {
      "de": "erwogen",
      "lv": "considerado"
    }
  },
  {
    "infinitiv": {
      "de": "fechten",
      "lv": "combatir"
    },
    "praesens": {
      "de": "er ficht",
      "lv": "él combate"
    },
    "imperfektIndikativ": {
      "de": "er focht",
      "lv": "él combatió"
    },
    "imperfektKonjunktiv": {
      "de": "er föchte",
      "lv": "él combatiría"
    },
    "partizipVergangenheit": {
      "de": "gefochten",
      "lv": "combatido"
    }
  },
  {
    "infinitiv": {
      "de": "flechten",
      "lv": "trenzar"
    },
    "praesens": {
      "de": "er flicht",
      "lv": "él trenza"
    },
    "imperfektIndikativ": {
      "de": "er flocht",
      "lv": "él trenzó"
    },
    "imperfektKonjunktiv": {
      "de": "er flöchte",
      "lv": "él trenzaría"
    },
    "partizipVergangenheit": {
      "de": "geflochten",
      "lv": "trenzado"
    }
  },
  {
    "infinitiv": {
      "de": "hangen",
      "lv": "colgar"
    },
    "praesens": {
      "de": "er hängt",
      "lv": "él cuelga"
    },
    "imperfektIndikativ": {
      "de": "er hing",
      "lv": "él colgó"
    },
    "imperfektKonjunktiv": {
      "de": "er hinge",
      "lv": "él colgaría"
    },
    "partizipVergangenheit": {
      "de": "gehangen",
      "lv": "colgado"
    }
  },
  {
    "infinitiv": {
      "de": "spalten",
      "lv": "partir"
    },
    "praesens": {
      "de": "er spaltet",
      "lv": "él parte"
    },
    "imperfektIndikativ": {
      "de": "er spaltete",
      "lv": "él partió"
    },
    "imperfektKonjunktiv": {
      "de": "er spaltete",
      "lv": "él partiría"
    },
    "partizipVergangenheit": {
      "de": "gespalten",
      "lv": "partido"
    }
  },
  {
    "infinitiv": {
      "de": "verzeihen",
      "lv": "perdonar"
    },
    "praesens": {
      "de": "er verzeiht",
      "lv": "él perdona"
    },
    "imperfektIndikativ": {
      "de": "er verzieh",
      "lv": "él perdonó"
    },
    "imperfektKonjunktiv": {
      "de": "er verziehe",
      "lv": "él perdonaría"
    },
    "partizipVergangenheit": {
      "de": "verziehen",
      "lv": "perdonado"
    }
  }
];

window.VERB_ENTRIES = VERB_ENTRIES;

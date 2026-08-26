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
      "lv": "mandar"
    },
    "praesens": {
      "de": "er befiehlt",
      "lv": "él manda"
    },
    "imperfektIndikativ": {
      "de": "er befahl",
      "lv": "él ordenó"
    },
    "imperfektKonjunktiv": {
      "de": "er beföhle",
      "lv": "él mandaría"
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
      "lv": "él comienza"
    },
    "imperfektIndikativ": {
      "de": "er begann",
      "lv": "el empezó"
    },
    "imperfektKonjunktiv": {
      "de": "er begönne / er begänne",
      "lv": "él comenzaría"
    },
    "partizipVergangenheit": {
      "de": "begonnen",
      "lv": "comenzado"
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
      "lv": "esconder"
    },
    "praesens": {
      "de": "er birgt",
      "lv": "él se esconde"
    },
    "imperfektIndikativ": {
      "de": "er barg",
      "lv": "él se escondió"
    },
    "imperfektKonjunktiv": {
      "de": "er bürge / er bärge",
      "lv": "él se escondería"
    },
    "partizipVergangenheit": {
      "de": "geborgen",
      "lv": "oculto / guardado"
    }
  },
  {
    "infinitiv": {
      "de": "bersten",
      "lv": "estallar"
    },
    "praesens": {
      "de": "er birst",
      "lv": "él estalla"
    },
    "imperfektIndikativ": {
      "de": "er barst / er borst",
      "lv": "él estalló"
    },
    "imperfektKonjunktiv": {
      "de": "er bärste / er börste",
      "lv": "él estallaría"
    },
    "partizipVergangenheit": {
      "de": "geborsten (er ist)",
      "lv": "reventado"
    }
  },
  {
    "infinitiv": {
      "de": "bewegen",
      "lv": "alentar"
    },
    "praesens": {
      "de": "er bewegt",
      "lv": "el incita"
    },
    "imperfektIndikativ": {
      "de": "er bewog",
      "lv": "él instó"
    },
    "imperfektKonjunktiv": {
      "de": "er bewöge",
      "lv": "él alentaría"
    },
    "partizipVergangenheit": {
      "de": "bewogen",
      "lv": "motivado"
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
      "lv": "él se doblaría"
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
      "lv": "él lo ofrecería"
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
      "lv": "el suplica"
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
      "lv": "solicitado"
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
      "lv": "nacido"
    }
  },
  {
    "infinitiv": {
      "de": "gelingen",
      "lv": "tener éxito"
    },
    "praesens": {
      "de": "es gelingt",
      "lv": "tiene éxito"
    },
    "imperfektIndikativ": {
      "de": "es gelang",
      "lv": "funcionó"
    },
    "imperfektKonjunktiv": {
      "de": "es gelänge",
      "lv": "funcionaría"
    },
    "partizipVergangenheit": {
      "de": "gelungen (es ist)",
      "lv": "logrado"
    }
  },
  {
    "infinitiv": {
      "de": "gelten",
      "lv": "ser útil"
    },
    "praesens": {
      "de": "er gilt",
      "lv": "él encaja / es válido"
    },
    "imperfektIndikativ": {
      "de": "er galt",
      "lv": "él era válido"
    },
    "imperfektKonjunktiv": {
      "de": "er gölte / es gälte",
      "lv": "él sería válido"
    },
    "partizipVergangenheit": {
      "de": "gegolten",
      "lv": "considerado válido"
    }
  },
  {
    "infinitiv": {
      "de": "genesen",
      "lv": "recuperarse"
    },
    "praesens": {
      "de": "er genest",
      "lv": "él está mejorando"
    },
    "imperfektIndikativ": {
      "de": "er genas",
      "lv": "se puso bien"
    },
    "imperfektKonjunktiv": {
      "de": "er genäse",
      "lv": "él se pondría bien"
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
      "lv": "él se parecía"
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
      "lv": "brillar"
    },
    "praesens": {
      "de": "er glimmt",
      "lv": "él brilla"
    },
    "imperfektIndikativ": {
      "de": "er glimmte / glomm",
      "lv": "el brilló"
    },
    "imperfektKonjunktiv": {
      "de": "er glimmte",
      "lv": "él brillaría"
    },
    "partizipVergangenheit": {
      "de": "geglimmt / geglommen",
      "lv": "brillado"
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
      "lv": "atrapar"
    },
    "praesens": {
      "de": "er greift",
      "lv": "él atrapa"
    },
    "imperfektIndikativ": {
      "de": "er griff",
      "lv": "él atrapó"
    },
    "imperfektKonjunktiv": {
      "de": "er griffe",
      "lv": "él atraparía"
    },
    "partizipVergangenheit": {
      "de": "gegriffen",
      "lv": "atrapado / agarrado"
    }
  },
  {
    "infinitiv": {
      "de": "hauen",
      "lv": "cortar"
    },
    "praesens": {
      "de": "er haut",
      "lv": "él golpea"
    },
    "imperfektIndikativ": {
      "de": "er hieb",
      "lv": "él golpeó"
    },
    "imperfektKonjunktiv": {
      "de": "er hiebe",
      "lv": "él golpearía"
    },
    "partizipVergangenheit": {
      "de": "gehauen",
      "lv": "tallado"
    }
  },
  {
    "infinitiv": {
      "de": "heben",
      "lv": "elevar"
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
      "lv": "conocer"
    },
    "praesens": {
      "de": "er kennt",
      "lv": "él conoce"
    },
    "imperfektIndikativ": {
      "de": "kannte",
      "lv": "conocía"
    },
    "imperfektKonjunktiv": {
      "de": "kannte",
      "lv": "sabía"
    },
    "partizipVergangenheit": {
      "de": "gekannt",
      "lv": "conocido"
    }
  },
  {
    "infinitiv": {
      "de": "klingen",
      "lv": "sonar"
    },
    "praesens": {
      "de": "er klingt",
      "lv": "él suena"
    },
    "imperfektIndikativ": {
      "de": "er klang",
      "lv": "el sonó"
    },
    "imperfektKonjunktiv": {
      "de": "er klänge",
      "lv": "él sonaría"
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
      "lv": "permanecer"
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
      "lv": "permanecido"
    }
  },
  {
    "infinitiv": {
      "de": "bleichen",
      "lv": "blanquear"
    },
    "praesens": {
      "de": "er bleicht",
      "lv": "el blanquea"
    },
    "imperfektIndikativ": {
      "de": "blich",
      "lv": "blanqueó"
    },
    "imperfektKonjunktiv": {
      "de": "blich",
      "lv": "blanqueado"
    },
    "partizipVergangenheit": {
      "de": "geblichen",
      "lv": "blanqueado"
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
      "lv": "él frió"
    },
    "imperfektKonjunktiv": {
      "de": "er briete",
      "lv": "él freiría"
    },
    "partizipVergangenheit": {
      "de": "gebraten",
      "lv": "frito / al horno"
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
      "lv": "quemar"
    },
    "praesens": {
      "de": "er brennt",
      "lv": "él está en llamas"
    },
    "imperfektIndikativ": {
      "de": "brannte",
      "lv": "ardía"
    },
    "imperfektKonjunktiv": {
      "de": "brannte",
      "lv": "estaba ardiendo"
    },
    "partizipVergangenheit": {
      "de": "gebrannt",
      "lv": "quemado"
    }
  },
  {
    "infinitiv": {
      "de": "bringen",
      "lv": "llevar"
    },
    "praesens": {
      "de": "er bringt",
      "lv": "él lleva"
    },
    "imperfektIndikativ": {
      "de": "er brachte",
      "lv": "él llevó"
    },
    "imperfektKonjunktiv": {
      "de": "er brächte",
      "lv": "él llevaría"
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
      "lv": "el pensó"
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
      "lv": "él contrata"
    },
    "imperfektIndikativ": {
      "de": "dingte",
      "lv": "contrató"
    },
    "imperfektKonjunktiv": {
      "de": "dingte",
      "lv": "contratado"
    },
    "partizipVergangenheit": {
      "de": "gedungen",
      "lv": "contratado"
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
      "lv": "él tr||||aría"
    },
    "partizipVergangenheit": {
      "de": "gedroschen",
      "lv": "trillado"
    }
  },
  {
    "infinitiv": {
      "de": "dringen",
      "lv": "forzar"
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
      "lv": "parecía"
    },
    "imperfektKonjunktiv": {
      "de": "deuchte",
      "lv": "parecía"
    },
    "partizipVergangenheit": {
      "de": "gedünkt",
      "lv": "parecido"
    }
  },
  {
    "infinitiv": {
      "de": "dürfen",
      "lv": "ser permitido"
    },
    "praesens": {
      "de": "er darf",
      "lv": "él puede"
    },
    "imperfektIndikativ": {
      "de": "durfte",
      "lv": "estaba permitido"
    },
    "imperfektKonjunktiv": {
      "de": "durfte",
      "lv": "estaba permitido"
    },
    "partizipVergangenheit": {
      "de": "gedurft",
      "lv": "permitido"
    }
  },
  {
    "infinitiv": {
      "de": "empfehlen",
      "lv": "recomendar"
    },
    "praesens": {
      "de": "er empfiehlt",
      "lv": "él sugiere"
    },
    "imperfektIndikativ": {
      "de": "er empfahl",
      "lv": "él sugirió"
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
      "lv": "extinguirse"
    },
    "praesens": {
      "de": "er erlischt",
      "lv": "él se extingue"
    },
    "imperfektIndikativ": {
      "de": "er erlosch",
      "lv": "él se extinguió"
    },
    "imperfektKonjunktiv": {
      "de": "er erlösche",
      "lv": "él se extinguiría"
    },
    "partizipVergangenheit": {
      "de": "erloschen (er ist)",
      "lv": "extinguido"
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
      "lv": "se asustó"
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
      "lv": "conducido / ido"
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
      "lv": "ha volado"
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
      "lv": "él se escapó"
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
      "lv": "él fluye"
    },
    "imperfektIndikativ": {
      "de": "er floss",
      "lv": "él fluyó"
    },
    "imperfektKonjunktiv": {
      "de": "er flösse",
      "lv": "él fluiría"
    },
    "partizipVergangenheit": {
      "de": "geflossen (er ist)",
      "lv": "fluido"
    }
  },
  {
    "infinitiv": {
      "de": "fressen",
      "lv": "comer"
    },
    "praesens": {
      "de": "er frisst",
      "lv": "él come / traga"
    },
    "imperfektIndikativ": {
      "de": "er frass",
      "lv": "comió / tragó"
    },
    "imperfektKonjunktiv": {
      "de": "er fräße",
      "lv": "él comería"
    },
    "partizipVergangenheit": {
      "de": "gefressen",
      "lv": "comido"
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
      "lv": "tener éxito"
    },
    "praesens": {
      "de": "er gedeiht",
      "lv": "él tiene éxito"
    },
    "imperfektIndikativ": {
      "de": "er gedieh",
      "lv": "tuvo éxito"
    },
    "imperfektKonjunktiv": {
      "de": "er gediehe",
      "lv": "él tendría éxito"
    },
    "partizipVergangenheit": {
      "de": "gediehen (er ist)",
      "lv": "tenido éxito"
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
      "lv": "él caminó"
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
      "lv": "tenía"
    },
    "imperfektKonjunktiv": {
      "de": "hatte",
      "lv": "era"
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
      "lv": "llamarse"
    },
    "praesens": {
      "de": "er heißt",
      "lv": "él llama / él es llamado"
    },
    "imperfektIndikativ": {
      "de": "er hieß",
      "lv": "llamó / fue llamado"
    },
    "imperfektKonjunktiv": {
      "de": "er hieße",
      "lv": "él llamaría / sería llamado"
    },
    "partizipVergangenheit": {
      "de": "geheißen",
      "lv": "llamado"
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
      "lv": "él está viniendo"
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
      "lv": "ha llegado"
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
      "lv": "podía"
    },
    "imperfektKonjunktiv": {
      "de": "konnte",
      "lv": "podría"
    },
    "partizipVergangenheit": {
      "de": "gekonnt",
      "lv": "podido"
    }
  },
  {
    "infinitiv": {
      "de": "kriechen",
      "lv": "gatear"
    },
    "praesens": {
      "de": "er kriecht",
      "lv": "él gatea"
    },
    "imperfektIndikativ": {
      "de": "er kroch",
      "lv": "él gateó"
    },
    "imperfektKonjunktiv": {
      "de": "er kröche",
      "lv": "él gatearía"
    },
    "partizipVergangenheit": {
      "de": "gekrochen (er ist)",
      "lv": "gateado"
    }
  },
  {
    "infinitiv": {
      "de": "laden",
      "lv": "cargar, invitar"
    },
    "praesens": {
      "de": "er lädt",
      "lv": "él carga / invita"
    },
    "imperfektIndikativ": {
      "de": "er lud",
      "lv": "cargó / invitó"
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
      "lv": "poner, dejar"
    },
    "praesens": {
      "de": "er lässt",
      "lv": "él pone / deja"
    },
    "imperfektIndikativ": {
      "de": "er ließ",
      "lv": "él ordenó / permitió"
    },
    "imperfektKonjunktiv": {
      "de": "er ließe",
      "lv": "él pondría / dejaría"
    },
    "partizipVergangenheit": {
      "de": "gelassen",
      "lv": "dejado / permitido"
    }
  },
  {
    "infinitiv": {
      "de": "laufen",
      "lv": "correr"
    },
    "praesens": {
      "de": "er läuft",
      "lv": "él está corriendo"
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
      "lv": "él presta / toma prestado"
    },
    "imperfektIndikativ": {
      "de": "er lieh",
      "lv": "él prestó / tomó prestado"
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
      "lv": "él está leyendo"
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
      "lv": "él estaba tumbado"
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
      "lv": "él está mintiendo"
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
      "lv": "el muele"
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
      "lv": "fallar"
    },
    "praesens": {
      "de": "es misslingt",
      "lv": "falla"
    },
    "imperfektIndikativ": {
      "de": "misslang",
      "lv": "fracasó"
    },
    "imperfektKonjunktiv": {
      "de": "misslang",
      "lv": "fallido"
    },
    "partizipVergangenheit": {
      "de": "misslungen",
      "lv": "fracasado"
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
      "lv": "le gustaba"
    },
    "imperfektKonjunktiv": {
      "de": "mochte",
      "lv": "le gustó"
    },
    "partizipVergangenheit": {
      "de": "gemocht",
      "lv": "gustado"
    }
  },
  {
    "infinitiv": {
      "de": "müssen",
      "lv": "necesitar"
    },
    "praesens": {
      "de": "er muss",
      "lv": "él necesita"
    },
    "imperfektIndikativ": {
      "de": "musste",
      "lv": "tuvo que"
    },
    "imperfektKonjunktiv": {
      "de": "musste",
      "lv": "debería tener"
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
      "lv": "él llamó"
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
      "de": "pflegte vai pflog",
      "lv": "cuidó"
    },
    "imperfektKonjunktiv": {
      "de": "pflegte vai pflog",
      "lv": "cuidaría"
    },
    "partizipVergangenheit": {
      "de": "gepflegt vai gepflogen",
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
      "lv": "él alabaría"
    },
    "partizipVergangenheit": {
      "de": "gepriesen",
      "lv": "alabado"
    }
  },
  {
    "infinitiv": {
      "de": "quellen",
      "lv": "hincharse"
    },
    "praesens": {
      "de": "er quillt",
      "lv": "él se hincha"
    },
    "imperfektIndikativ": {
      "de": "er quoll",
      "lv": "él se hinchó"
    },
    "imperfektKonjunktiv": {
      "de": "er quölle",
      "lv": "él se hincharía"
    },
    "partizipVergangenheit": {
      "de": "gequollen (er ist)",
      "lv": "hinchado"
    }
  },
  {
    "infinitiv": {
      "de": "raten",
      "lv": "recomendar / aconsejar"
    },
    "praesens": {
      "de": "er rät",
      "lv": "él recomienda / aconseja"
    },
    "imperfektIndikativ": {
      "de": "er riet",
      "lv": "él recomendó / aconsejó"
    },
    "imperfektKonjunktiv": {
      "de": "er riete",
      "lv": "él recomendaría / aconsejaría"
    },
    "partizipVergangenheit": {
      "de": "geraten",
      "lv": "recomendado / aconsejado"
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
      "lv": "jalar"
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
      "lv": "montar"
    },
    "praesens": {
      "de": "er reitet",
      "lv": "el cabalga"
    },
    "imperfektIndikativ": {
      "de": "er ritt",
      "lv": "él montó"
    },
    "imperfektKonjunktiv": {
      "de": "er ritte",
      "lv": "él montaría"
    },
    "partizipVergangenheit": {
      "de": "geritten (er ist)",
      "lv": "montado"
    }
  },
  {
    "infinitiv": {
      "de": "rennen",
      "lv": "correr"
    },
    "praesens": {
      "de": "er rennt",
      "lv": "él está corriendo"
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
      "lv": "él fluye"
    },
    "imperfektIndikativ": {
      "de": "er rann",
      "lv": "él fluyó"
    },
    "imperfektKonjunktiv": {
      "de": "er ränne / er rönne",
      "lv": "él fluiría"
    },
    "partizipVergangenheit": {
      "de": "geronnen (er ist)",
      "lv": "fluido / coagulado"
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
      "lv": "beber"
    },
    "praesens": {
      "de": "er säuft",
      "lv": "él está bebiendo"
    },
    "imperfektIndikativ": {
      "de": "er soff",
      "lv": "bebió"
    },
    "imperfektKonjunktiv": {
      "de": "er söffe",
      "lv": "él bebería"
    },
    "partizipVergangenheit": {
      "de": "gesoffen",
      "lv": "bebido"
    }
  },
  {
    "infinitiv": {
      "de": "saugen",
      "lv": "chupar"
    },
    "praesens": {
      "de": "er saugt",
      "lv": "él succiona"
    },
    "imperfektIndikativ": {
      "de": "er sog",
      "lv": "él succionó"
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
      "de": "schallte vai scholl",
      "lv": "sonó"
    },
    "imperfektKonjunktiv": {
      "de": "schallte vai scholl",
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
      "lv": "divorciarse / separarse"
    },
    "praesens": {
      "de": "er scheidet",
      "lv": "él se divorcia / se separa"
    },
    "imperfektIndikativ": {
      "de": "er schied",
      "lv": "se divorció / se separó"
    },
    "imperfektKonjunktiv": {
      "de": "er schiede",
      "lv": "él se divorciaría / se separaría"
    },
    "partizipVergangenheit": {
      "de": "geschieden (er hat / er ist)",
      "lv": "separado / divorciado"
    }
  },
  {
    "infinitiv": {
      "de": "scheinen",
      "lv": "brillar / aparecer"
    },
    "praesens": {
      "de": "er scheint",
      "lv": "él brilla / parece"
    },
    "imperfektIndikativ": {
      "de": "er schien",
      "lv": "él brillaba / parecía"
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
      "lv": "él regañaría / se pelaría"
    },
    "partizipVergangenheit": {
      "de": "gescholten",
      "lv": "regañado"
    }
  },
  {
    "infinitiv": {
      "de": "scheren",
      "lv": "cortar"
    },
    "praesens": {
      "de": "er schert",
      "lv": "él corta"
    },
    "imperfektIndikativ": {
      "de": "schor vai scherte",
      "lv": "afeitó / esquiló"
    },
    "imperfektKonjunktiv": {
      "de": "schor vai scherte",
      "lv": "afeitaría / esquilaría"
    },
    "partizipVergangenheit": {
      "de": "geschoren vai geschert",
      "lv": "afeitado / esquilado"
    }
  },
  {
    "infinitiv": {
      "de": "schieben",
      "lv": "empujar"
    },
    "praesens": {
      "de": "er schiebt",
      "lv": "el empuja"
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
      "lv": "disparó"
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
      "lv": "atormentó"
    },
    "imperfektKonjunktiv": {
      "de": "schindete",
      "lv": "atormentaría"
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
      "lv": "el estaba durmiendo"
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
      "lv": "escabullirse"
    },
    "praesens": {
      "de": "er schleicht",
      "lv": "él se escabulle"
    },
    "imperfektIndikativ": {
      "de": "er schlich",
      "lv": "él se escabulló"
    },
    "imperfektKonjunktiv": {
      "de": "er schliche",
      "lv": "él se escabulliría"
    },
    "partizipVergangenheit": {
      "de": "geschlichen (er ist)",
      "lv": "escabullido"
    }
  },
  {
    "infinitiv": {
      "de": "schleifen",
      "lv": "moler"
    },
    "praesens": {
      "de": "er schleift",
      "lv": "el muele"
    },
    "imperfektIndikativ": {
      "de": "er schliff",
      "lv": "él molió"
    },
    "imperfektKonjunktiv": {
      "de": "er schliffe",
      "lv": "él molería"
    },
    "partizipVergangenheit": {
      "de": "geschliffen",
      "lv": "molido"
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
      "lv": "tragar"
    },
    "praesens": {
      "de": "er schlingt",
      "lv": "él traga"
    },
    "imperfektIndikativ": {
      "de": "er schlang",
      "lv": "él tragó"
    },
    "imperfektKonjunktiv": {
      "de": "er schlänge",
      "lv": "él tragaría"
    },
    "partizipVergangenheit": {
      "de": "geschlungen",
      "lv": "tragado"
    }
  },
  {
    "infinitiv": {
      "de": "schmeißen",
      "lv": "tirar"
    },
    "praesens": {
      "de": "er schmeißt",
      "lv": "el tira"
    },
    "imperfektIndikativ": {
      "de": "er schmiss",
      "lv": "el arrojó"
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
      "lv": "él se derrite"
    },
    "imperfektIndikativ": {
      "de": "er schmolz",
      "lv": "él se derritió"
    },
    "imperfektKonjunktiv": {
      "de": "er schmölze",
      "lv": "él se derretiría"
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
      "de": "schnaubte vai schnob",
      "lv": "resopló"
    },
    "imperfektKonjunktiv": {
      "de": "schnaubte vai schnob",
      "lv": "resoplaría"
    },
    "partizipVergangenheit": {
      "de": "geschnaubt vai geschnoben",
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
      "lv": "caminar"
    },
    "praesens": {
      "de": "er schreitet",
      "lv": "él camina"
    },
    "imperfektIndikativ": {
      "de": "er schritt",
      "lv": "él caminó"
    },
    "imperfektKonjunktiv": {
      "de": "er schritte",
      "lv": "el caminaria"
    },
    "partizipVergangenheit": {
      "de": "geschritten (er ist)",
      "lv": "caminado"
    }
  },
  {
    "infinitiv": {
      "de": "schweigen",
      "lv": "callar"
    },
    "praesens": {
      "de": "er schweigt",
      "lv": "él está en silencio"
    },
    "imperfektIndikativ": {
      "de": "er schwieg",
      "lv": "el estaba en silencio"
    },
    "imperfektKonjunktiv": {
      "de": "er schwiege",
      "lv": "el estaría en silencio"
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
      "lv": "él se hincha"
    },
    "imperfektIndikativ": {
      "de": "er schwoll",
      "lv": "él se hinchó"
    },
    "imperfektKonjunktiv": {
      "de": "er schwölle",
      "lv": "él se hincharía"
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
      "lv": "él desaparece"
    },
    "imperfektIndikativ": {
      "de": "er schwand",
      "lv": "él desapareció"
    },
    "imperfektKonjunktiv": {
      "de": "er schwände",
      "lv": "él desaparecería"
    },
    "partizipVergangenheit": {
      "de": "geschwunden (er ist)",
      "lv": "desaparecido"
    }
  },
  {
    "infinitiv": {
      "de": "schwingen",
      "lv": "oscilar"
    },
    "praesens": {
      "de": "er schwingt",
      "lv": "él oscila"
    },
    "imperfektIndikativ": {
      "de": "er schwang",
      "lv": "él osciló"
    },
    "imperfektKonjunktiv": {
      "de": "er schwänge",
      "lv": "él oscilaría"
    },
    "partizipVergangenheit": {
      "de": "geschwungen",
      "lv": "oscilado"
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
      "lv": "era"
    },
    "imperfektKonjunktiv": {
      "de": "war",
      "lv": "era"
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
      "lv": "el envió"
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
      "de": "sott vai siedete",
      "lv": "hirvió"
    },
    "imperfektKonjunktiv": {
      "de": "sott vai siedete",
      "lv": "herviría"
    },
    "partizipVergangenheit": {
      "de": "gesotten vai gesiedet",
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
      "lv": "él se está hundiendo"
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
      "lv": "preguntarse"
    },
    "praesens": {
      "de": "er sinnt",
      "lv": "él se pregunta"
    },
    "imperfektIndikativ": {
      "de": "er sann",
      "lv": "se preguntó"
    },
    "imperfektKonjunktiv": {
      "de": "er sönne / er sänne",
      "lv": "él se preguntaría"
    },
    "partizipVergangenheit": {
      "de": "gesonnen",
      "lv": "dispuesto"
    }
  },
  {
    "infinitiv": {
      "de": "sitzen",
      "lv": "sentarse"
    },
    "praesens": {
      "de": "er sitzt",
      "lv": "él está sentado"
    },
    "imperfektIndikativ": {
      "de": "er sass",
      "lv": "el estaba sentado"
    },
    "imperfektKonjunktiv": {
      "de": "er säße",
      "lv": "él estaría sentado"
    },
    "partizipVergangenheit": {
      "de": "gesessen",
      "lv": "sentado"
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
      "lv": "debía"
    },
    "imperfektKonjunktiv": {
      "de": "sollte",
      "lv": "debería"
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
      "lv": "el escupió"
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
      "lv": "girar"
    },
    "praesens": {
      "de": "er spinnt",
      "lv": "el gira"
    },
    "imperfektIndikativ": {
      "de": "er spann",
      "lv": "el giró"
    },
    "imperfektKonjunktiv": {
      "de": "er spönne / er spänne",
      "lv": "él daría vueltas"
    },
    "partizipVergangenheit": {
      "de": "gesponnen",
      "lv": "girado"
    }
  },
  {
    "infinitiv": {
      "de": "spleißen",
      "lv": "conectar"
    },
    "praesens": {
      "de": "er spleißt",
      "lv": "él conecta"
    },
    "imperfektIndikativ": {
      "de": "spliss",
      "lv": "conectó"
    },
    "imperfektKonjunktiv": {
      "de": "spliss",
      "lv": "conectaría"
    },
    "partizipVergangenheit": {
      "de": "gesplissen",
      "lv": "conectado"
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
      "lv": "él brota"
    },
    "imperfektIndikativ": {
      "de": "er spross",
      "lv": "él brotó"
    },
    "imperfektKonjunktiv": {
      "de": "er sprösse",
      "lv": "él brotaría"
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
      "lv": "apuñalar"
    },
    "praesens": {
      "de": "er sticht",
      "lv": "el apuñala"
    },
    "imperfektIndikativ": {
      "de": "er stach",
      "lv": "él apuñaló"
    },
    "imperfektKonjunktiv": {
      "de": "er stäche",
      "lv": "él apuñalaría"
    },
    "partizipVergangenheit": {
      "de": "gestochen",
      "lv": "apuñalado"
    }
  },
  {
    "infinitiv": {
      "de": "stecken",
      "lv": "meter / estar metido"
    },
    "praesens": {
      "de": "er steckt",
      "lv": "él mete / está metido"
    },
    "imperfektIndikativ": {
      "de": "stak vai steckte",
      "lv": "metió / estuvo metido"
    },
    "imperfektKonjunktiv": {
      "de": "stak vai steckte",
      "lv": "metería / estaría metido"
    },
    "partizipVergangenheit": {
      "de": "gesteckt",
      "lv": "metido"
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
      "lv": "escalar"
    },
    "praesens": {
      "de": "er steigt",
      "lv": "el sube"
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
      "de": "stieben",
      "lv": "dispersarse / salir disparado"
    },
    "praesens": {
      "de": "es stiebt",
      "lv": "se dispersa"
    },
    "imperfektIndikativ": {
      "de": "stob vai stiebte",
      "lv": "se dispersó"
    },
    "imperfektKonjunktiv": {
      "de": "stob vai stiebte",
      "lv": "se dispersaría"
    },
    "partizipVergangenheit": {
      "de": "gestoben vai gestiebt",
      "lv": "dispersado"
    }
  },
  {
    "infinitiv": {
      "de": "stinken",
      "lv": "oler"
    },
    "praesens": {
      "de": "es stinkt",
      "lv": "apesta"
    },
    "imperfektIndikativ": {
      "de": "stank",
      "lv": "olía"
    },
    "imperfektKonjunktiv": {
      "de": "stank",
      "lv": "olía"
    },
    "partizipVergangenheit": {
      "de": "gestunken",
      "lv": "olido"
    }
  },
  {
    "infinitiv": {
      "de": "stoßen",
      "lv": "empujar"
    },
    "praesens": {
      "de": "er stößt",
      "lv": "él empuja"
    },
    "imperfektIndikativ": {
      "de": "er stieß",
      "lv": "él empujó"
    },
    "imperfektKonjunktiv": {
      "de": "er stieße",
      "lv": "él empujaría"
    },
    "partizipVergangenheit": {
      "de": "gestoßen",
      "lv": "empujado"
    }
  },
  {
    "infinitiv": {
      "de": "streichen",
      "lv": "pintar / quitar"
    },
    "praesens": {
      "de": "er streicht",
      "lv": "él pinta / quita"
    },
    "imperfektIndikativ": {
      "de": "er strich",
      "lv": "él pintó / quitó"
    },
    "imperfektKonjunktiv": {
      "de": "er striche",
      "lv": "él pintaría / quitaría"
    },
    "partizipVergangenheit": {
      "de": "gestrichen",
      "lv": "pintado / quitado"
    }
  },
  {
    "infinitiv": {
      "de": "streiten",
      "lv": "pelear"
    },
    "praesens": {
      "de": "er streitet",
      "lv": "él está peleando"
    },
    "imperfektIndikativ": {
      "de": "er stritt",
      "lv": "él peleó"
    },
    "imperfektKonjunktiv": {
      "de": "er stritte",
      "lv": "él pelearía"
    },
    "partizipVergangenheit": {
      "de": "gestritten",
      "lv": "peleado"
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
      "lv": "él llevaba"
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
      "lv": "encontrar"
    },
    "praesens": {
      "de": "er trifft",
      "lv": "él se encuentra"
    },
    "imperfektIndikativ": {
      "de": "er traf",
      "lv": "él encontró"
    },
    "imperfektKonjunktiv": {
      "de": "er träfe",
      "lv": "él se encontraría"
    },
    "partizipVergangenheit": {
      "de": "getroffen",
      "lv": "encontrado"
    }
  },
  {
    "infinitiv": {
      "de": "treiben",
      "lv": "perseguir"
    },
    "praesens": {
      "de": "er treibt",
      "lv": "él conduce"
    },
    "imperfektIndikativ": {
      "de": "er trieb",
      "lv": "él condujo"
    },
    "imperfektKonjunktiv": {
      "de": "er triebe",
      "lv": "él conduciría"
    },
    "partizipVergangenheit": {
      "de": "getrieben",
      "lv": "perseguido"
    }
  },
  {
    "infinitiv": {
      "de": "treten",
      "lv": "entrar / ir"
    },
    "praesens": {
      "de": "er tritt",
      "lv": "él entra / va"
    },
    "imperfektIndikativ": {
      "de": "er trat",
      "lv": "él se puso de pie / caminó"
    },
    "imperfektKonjunktiv": {
      "de": "er träte",
      "lv": "él se pararía/iría"
    },
    "partizipVergangenheit": {
      "de": "getreten (er ist)",
      "lv": "se ha puesto de pie / ha caminado"
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
      "lv": "él estaba bebiendo"
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
      "lv": "hacer trampa"
    },
    "praesens": {
      "de": "er trögt",
      "lv": "el hace trampa"
    },
    "imperfektIndikativ": {
      "de": "er trog",
      "lv": "él hizo trampa"
    },
    "imperfektKonjunktiv": {
      "de": "er tröge",
      "lv": "él haría trampa"
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
      "lv": "él lo hace"
    },
    "imperfektIndikativ": {
      "de": "er tat",
      "lv": "él lo hizo"
    },
    "imperfektKonjunktiv": {
      "de": "er täte",
      "lv": "él lo haría"
    },
    "partizipVergangenheit": {
      "de": "getan",
      "lv": "hecho"
    }
  },
  {
    "infinitiv": {
      "de": "verderben",
      "lv": "dañar"
    },
    "praesens": {
      "de": "er verdirbt",
      "lv": "él destruye"
    },
    "imperfektIndikativ": {
      "de": "er verdarb",
      "lv": "él dañó"
    },
    "imperfektKonjunktiv": {
      "de": "er verdürbe",
      "lv": "él dañaría"
    },
    "partizipVergangenheit": {
      "de": "verdorben",
      "lv": "dañado"
    }
  },
  {
    "infinitiv": {
      "de": "verdrießen",
      "lv": "causar molestia"
    },
    "praesens": {
      "de": "er verdrießt",
      "lv": "él causa molestia"
    },
    "imperfektIndikativ": {
      "de": "er verdross",
      "lv": "él causó molestia"
    },
    "imperfektKonjunktiv": {
      "de": "er verdrösse",
      "lv": "él causaría molestia"
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
      "lv": "se olvidó"
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
      "lv": "él está creciendo"
    },
    "imperfektIndikativ": {
      "de": "er wuchs",
      "lv": "él estaba creciendo"
    },
    "imperfektKonjunktiv": {
      "de": "er wüchse",
      "lv": "él crecería"
    },
    "partizipVergangenheit": {
      "de": "gewachsen (er ist)",
      "lv": "creció"
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
      "lv": "él se lavaría"
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
      "lv": "él retrocede"
    },
    "imperfektIndikativ": {
      "de": "er wich",
      "lv": "él dio un paso atrás"
    },
    "imperfektKonjunktiv": {
      "de": "er wiche",
      "lv": "él retrocedería"
    },
    "partizipVergangenheit": {
      "de": "gewichen (er ist)",
      "lv": "se ha retirado"
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
      "lv": "modificar / recortar"
    },
    "praesens": {
      "de": "er wendet",
      "lv": "él gira / gira"
    },
    "imperfektIndikativ": {
      "de": "er wandte / es wendete",
      "lv": "él giró / giró"
    },
    "imperfektKonjunktiv": {
      "de": "er wendete",
      "lv": "él enmendaría / revertiría"
    },
    "partizipVergangenheit": {
      "de": "gewandt / gewendet",
      "lv": "modificado / revertido"
    }
  },
  {
    "infinitiv": {
      "de": "werben",
      "lv": "proponer"
    },
    "praesens": {
      "de": "er wirbt",
      "lv": "él propone"
    },
    "imperfektIndikativ": {
      "de": "er warb",
      "lv": "él propuso"
    },
    "imperfektKonjunktiv": {
      "de": "er würbe",
      "lv": "él propondría"
    },
    "partizipVergangenheit": {
      "de": "geworben",
      "lv": "promocionado"
    }
  },
  {
    "infinitiv": {
      "de": "werden",
      "lv": "convertirse en"
    },
    "praesens": {
      "de": "er wird",
      "lv": "él se convierte"
    },
    "imperfektIndikativ": {
      "de": "wurde",
      "lv": "se convirtió"
    },
    "imperfektKonjunktiv": {
      "de": "wurde",
      "lv": "se convertiría"
    },
    "partizipVergangenheit": {
      "de": "geworden",
      "lv": "se ha convertido"
    }
  },
  {
    "infinitiv": {
      "de": "werfen",
      "lv": "tirar"
    },
    "praesens": {
      "de": "er wirft",
      "lv": "él tira"
    },
    "imperfektIndikativ": {
      "de": "er warf",
      "lv": "él arrojó"
    },
    "imperfektKonjunktiv": {
      "de": "er würfe",
      "lv": "él arrojaría"
    },
    "partizipVergangenheit": {
      "de": "geworfen",
      "lv": "arrojado"
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
      "lv": "retorcer"
    },
    "praesens": {
      "de": "er windet",
      "lv": "él retuerce"
    },
    "imperfektIndikativ": {
      "de": "er wand",
      "lv": "él retorció"
    },
    "imperfektKonjunktiv": {
      "de": "er wände",
      "lv": "él trenzaría"
    },
    "partizipVergangenheit": {
      "de": "gewunden",
      "lv": "trenzado"
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
      "lv": "él sabía"
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
      "lv": "quería"
    },
    "imperfektKonjunktiv": {
      "de": "wollte",
      "lv": "quería"
    },
    "partizipVergangenheit": {
      "de": "gewollt",
      "lv": "querido"
    }
  },
  {
    "infinitiv": {
      "de": "wringen",
      "lv": "cortar / exprimir"
    },
    "praesens": {
      "de": "er wringt",
      "lv": "él exprime"
    },
    "imperfektIndikativ": {
      "de": "wrang",
      "lv": "él exprimió"
    },
    "imperfektKonjunktiv": {
      "de": "wrang",
      "lv": "él exprimiría"
    },
    "partizipVergangenheit": {
      "de": "gewrungen",
      "lv": "exprimido"
    }
  },
  {
    "infinitiv": {
      "de": "zeihen",
      "lv": "culpar"
    },
    "praesens": {
      "de": "er zeiht",
      "lv": "él culpa"
    },
    "imperfektIndikativ": {
      "de": "zieh",
      "lv": "culpado"
    },
    "imperfektKonjunktiv": {
      "de": "zieh",
      "lv": "culpado"
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
      "lv": "él arrastraría"
    },
    "partizipVergangenheit": {
      "de": "gezogen",
      "lv": "arrastrado"
    }
  },
  {
    "infinitiv": {
      "de": "zwingen",
      "lv": "forzar"
    },
    "praesens": {
      "de": "er zwingt",
      "lv": "él obliga"
    },
    "imperfektIndikativ": {
      "de": "er zwang",
      "lv": "él forzó"
    },
    "imperfektKonjunktiv": {
      "de": "er zwänge",
      "lv": "él obligaría"
    },
    "partizipVergangenheit": {
      "de": "gezwungen",
      "lv": "forzado"
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
      "lv": "el recibió"
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
      "lv": "pelear"
    },
    "praesens": {
      "de": "er ficht",
      "lv": "él está peleando"
    },
    "imperfektIndikativ": {
      "de": "er focht",
      "lv": "él peleó"
    },
    "imperfektKonjunktiv": {
      "de": "er föchte",
      "lv": "él pelearía"
    },
    "partizipVergangenheit": {
      "de": "gefochten",
      "lv": "peleado"
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
      "lv": "dividir"
    },
    "praesens": {
      "de": "er spaltet",
      "lv": "él se divide"
    },
    "imperfektIndikativ": {
      "de": "er spaltete",
      "lv": "él se dividió"
    },
    "imperfektKonjunktiv": {
      "de": "er spaltete",
      "lv": "él se dividiría"
    },
    "partizipVergangenheit": {
      "de": "gespalten",
      "lv": "dividido"
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

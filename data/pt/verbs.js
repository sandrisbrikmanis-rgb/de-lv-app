const VERB_ENTRIES = [
  {
    "infinitiv": {
      "de": "backen",
      "lv": "cozer no forno"
    },
    "praesens": {
      "de": "er bäckt",
      "lv": "ele coze no forno"
    },
    "imperfektIndikativ": {
      "de": "er buk",
      "lv": "ele cozeu no forno"
    },
    "imperfektKonjunktiv": {
      "de": "er büke",
      "lv": "ele cozeria no forno"
    },
    "partizipVergangenheit": {
      "de": "gebacken",
      "lv": "cozido no forno"
    }
  },
  {
    "infinitiv": {
      "de": "befehlen",
      "lv": "ordenar"
    },
    "praesens": {
      "de": "er befiehlt",
      "lv": "ele ordena"
    },
    "imperfektIndikativ": {
      "de": "er befahl",
      "lv": "ele ordenou"
    },
    "imperfektKonjunktiv": {
      "de": "er beföhle",
      "lv": "ele ordenaria"
    },
    "partizipVergangenheit": {
      "de": "befohlen",
      "lv": "ordenado"
    }
  },
  {
    "infinitiv": {
      "de": "beginnen",
      "lv": "começar"
    },
    "praesens": {
      "de": "er beginnt",
      "lv": "ele começa"
    },
    "imperfektIndikativ": {
      "de": "er begann",
      "lv": "ele começou"
    },
    "imperfektKonjunktiv": {
      "de": "er begönne / er begänne",
      "lv": "ele começaria"
    },
    "partizipVergangenheit": {
      "de": "begonnen",
      "lv": "começado"
    }
  },
  {
    "infinitiv": {
      "de": "beißen",
      "lv": "morder"
    },
    "praesens": {
      "de": "er beißt",
      "lv": "ele morde"
    },
    "imperfektIndikativ": {
      "de": "er biss",
      "lv": "ele mordeu"
    },
    "imperfektKonjunktiv": {
      "de": "er bisse",
      "lv": "ele morderia"
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
      "lv": "ele salva / esconde"
    },
    "imperfektIndikativ": {
      "de": "er barg",
      "lv": "ele salvou / escondeu"
    },
    "imperfektKonjunktiv": {
      "de": "er bürge / er bärge",
      "lv": "ele salvaria / esconderia"
    },
    "partizipVergangenheit": {
      "de": "geborgen",
      "lv": "salvado / escondido"
    }
  },
  {
    "infinitiv": {
      "de": "bersten",
      "lv": "rebentar"
    },
    "praesens": {
      "de": "er birst",
      "lv": "rebenta"
    },
    "imperfektIndikativ": {
      "de": "er barst / er borst",
      "lv": "rebentou"
    },
    "imperfektKonjunktiv": {
      "de": "er bärste / er börste",
      "lv": "rebentaria"
    },
    "partizipVergangenheit": {
      "de": "geborsten (er ist)",
      "lv": "rebentado"
    }
  },
  {
    "infinitiv": {
      "de": "bewegen",
      "lv": "induzir"
    },
    "praesens": {
      "de": "er bewegt",
      "lv": "ele induz"
    },
    "imperfektIndikativ": {
      "de": "er bewog",
      "lv": "ele induziu"
    },
    "imperfektKonjunktiv": {
      "de": "er bewöge",
      "lv": "ele induziria"
    },
    "partizipVergangenheit": {
      "de": "bewogen",
      "lv": "induzido"
    }
  },
  {
    "infinitiv": {
      "de": "biegen",
      "lv": "dobrar"
    },
    "praesens": {
      "de": "er biegt",
      "lv": "ele dobra"
    },
    "imperfektIndikativ": {
      "de": "er bog",
      "lv": "ele dobrou"
    },
    "imperfektKonjunktiv": {
      "de": "er böge",
      "lv": "ele dobraria"
    },
    "partizipVergangenheit": {
      "de": "gebogen",
      "lv": "dobrado"
    }
  },
  {
    "infinitiv": {
      "de": "bieten",
      "lv": "oferecer"
    },
    "praesens": {
      "de": "er bietet",
      "lv": "ele oferece"
    },
    "imperfektIndikativ": {
      "de": "er bot",
      "lv": "ele ofereceu"
    },
    "imperfektKonjunktiv": {
      "de": "er böte",
      "lv": "ele ofereceria"
    },
    "partizipVergangenheit": {
      "de": "geboten",
      "lv": "oferecido"
    }
  },
  {
    "infinitiv": {
      "de": "binden",
      "lv": "atar"
    },
    "praesens": {
      "de": "er bindet",
      "lv": "ele ata"
    },
    "imperfektIndikativ": {
      "de": "er band",
      "lv": "ele atou"
    },
    "imperfektKonjunktiv": {
      "de": "er bände",
      "lv": "ele ataria"
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
      "lv": "ele pede"
    },
    "imperfektIndikativ": {
      "de": "er bat",
      "lv": "ele pediu"
    },
    "imperfektKonjunktiv": {
      "de": "er bäte",
      "lv": "ele pediria"
    },
    "partizipVergangenheit": {
      "de": "gebeten",
      "lv": "pedido"
    }
  },
  {
    "infinitiv": {
      "de": "blasen",
      "lv": "soprar"
    },
    "praesens": {
      "de": "er bläst",
      "lv": "ele sopra"
    },
    "imperfektIndikativ": {
      "de": "er blies",
      "lv": "ele soprou"
    },
    "imperfektKonjunktiv": {
      "de": "er bliese",
      "lv": "ele sopraria"
    },
    "partizipVergangenheit": {
      "de": "geblasen",
      "lv": "soprado"
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
      "lv": "fermentou"
    },
    "imperfektKonjunktiv": {
      "de": "es göre / es gärte",
      "lv": "fermentaria"
    },
    "partizipVergangenheit": {
      "de": "gegoren / gegärt",
      "lv": "fermentado"
    }
  },
  {
    "infinitiv": {
      "de": "gebären",
      "lv": "dar à luz"
    },
    "praesens": {
      "de": "sie gebiert",
      "lv": "ela dá à luz"
    },
    "imperfektIndikativ": {
      "de": "sie gebar",
      "lv": "ela deu à luz"
    },
    "imperfektKonjunktiv": {
      "de": "sie gebäre",
      "lv": "ela daria à luz"
    },
    "partizipVergangenheit": {
      "de": "geboren",
      "lv": "dado à luz"
    }
  },
  {
    "infinitiv": {
      "de": "gelingen",
      "lv": "correr bem"
    },
    "praesens": {
      "de": "es gelingt",
      "lv": "corre bem"
    },
    "imperfektIndikativ": {
      "de": "es gelang",
      "lv": "correu bem"
    },
    "imperfektKonjunktiv": {
      "de": "es gelänge",
      "lv": "correria bem"
    },
    "partizipVergangenheit": {
      "de": "gelungen (es ist)",
      "lv": "corrido bem"
    }
  },
  {
    "infinitiv": {
      "de": "gelten",
      "lv": "servir / valer"
    },
    "praesens": {
      "de": "er gilt",
      "lv": "ele serve / vale"
    },
    "imperfektIndikativ": {
      "de": "er galt",
      "lv": "ele serviu / valeu"
    },
    "imperfektKonjunktiv": {
      "de": "er gölte / es gälte",
      "lv": "ele serviria / valeria"
    },
    "partizipVergangenheit": {
      "de": "gegolten",
      "lv": "servido / valido"
    }
  },
  {
    "infinitiv": {
      "de": "genesen",
      "lv": "recuperar-se"
    },
    "praesens": {
      "de": "er genest",
      "lv": "ele recupera-se"
    },
    "imperfektIndikativ": {
      "de": "er genas",
      "lv": "ele recuperou-se"
    },
    "imperfektKonjunktiv": {
      "de": "er genäse",
      "lv": "ele recuperar-se-ia"
    },
    "partizipVergangenheit": {
      "de": "genesen (er ist)",
      "lv": "recuperado"
    }
  },
  {
    "infinitiv": {
      "de": "genießen",
      "lv": "desfrutar"
    },
    "praesens": {
      "de": "er genießt",
      "lv": "ele desfruta"
    },
    "imperfektIndikativ": {
      "de": "er genoss",
      "lv": "ele desfrutou"
    },
    "imperfektKonjunktiv": {
      "de": "er genösse",
      "lv": "ele desfrutaria"
    },
    "partizipVergangenheit": {
      "de": "genossen",
      "lv": "desfrutado"
    }
  },
  {
    "infinitiv": {
      "de": "geschehen",
      "lv": "acontecer"
    },
    "praesens": {
      "de": "es geschieht",
      "lv": "acontece"
    },
    "imperfektIndikativ": {
      "de": "es geschah",
      "lv": "aconteceu"
    },
    "imperfektKonjunktiv": {
      "de": "es geschähe",
      "lv": "aconteceria"
    },
    "partizipVergangenheit": {
      "de": "geschehen (es ist)",
      "lv": "acontecido"
    }
  },
  {
    "infinitiv": {
      "de": "gießen",
      "lv": "verter"
    },
    "praesens": {
      "de": "er gießt",
      "lv": "ele verte"
    },
    "imperfektIndikativ": {
      "de": "er goss",
      "lv": "ele verteu"
    },
    "imperfektKonjunktiv": {
      "de": "er gösse",
      "lv": "ele verteria"
    },
    "partizipVergangenheit": {
      "de": "gegossen",
      "lv": "vertido"
    }
  },
  {
    "infinitiv": {
      "de": "gleichen",
      "lv": "parecer-se"
    },
    "praesens": {
      "de": "er gleicht",
      "lv": "ele parece-se"
    },
    "imperfektIndikativ": {
      "de": "er glich",
      "lv": "ele pareceu-se"
    },
    "imperfektKonjunktiv": {
      "de": "er gliche",
      "lv": "ele parecer-se-ia"
    },
    "partizipVergangenheit": {
      "de": "geglichen",
      "lv": "parecido"
    }
  },
  {
    "infinitiv": {
      "de": "gleiten",
      "lv": "deslizar"
    },
    "praesens": {
      "de": "er gleitet",
      "lv": "ele desliza"
    },
    "imperfektIndikativ": {
      "de": "er glitt",
      "lv": "ele deslizou"
    },
    "imperfektKonjunktiv": {
      "de": "er glitte",
      "lv": "ele deslizaria"
    },
    "partizipVergangenheit": {
      "de": "geglitten (er ist)",
      "lv": "deslizado"
    }
  },
  {
    "infinitiv": {
      "de": "glimmen",
      "lv": "arder sem chama"
    },
    "praesens": {
      "de": "er glimmt",
      "lv": "arde sem chama"
    },
    "imperfektIndikativ": {
      "de": "er glimmte / glomm",
      "lv": "ardeu sem chama"
    },
    "imperfektKonjunktiv": {
      "de": "er glimmte",
      "lv": "arderia sem chama"
    },
    "partizipVergangenheit": {
      "de": "geglimmt / geglommen",
      "lv": "ardido sem chama"
    }
  },
  {
    "infinitiv": {
      "de": "graben",
      "lv": "cavar"
    },
    "praesens": {
      "de": "er gräbt",
      "lv": "ele cava"
    },
    "imperfektIndikativ": {
      "de": "er grub",
      "lv": "ele cavou"
    },
    "imperfektKonjunktiv": {
      "de": "er grübe",
      "lv": "ele cavaria"
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
      "lv": "ele agarra"
    },
    "imperfektIndikativ": {
      "de": "er griff",
      "lv": "ele agarrou"
    },
    "imperfektKonjunktiv": {
      "de": "er griffe",
      "lv": "ele agarraria"
    },
    "partizipVergangenheit": {
      "de": "gegriffen",
      "lv": "agarrado"
    }
  },
  {
    "infinitiv": {
      "de": "hauen",
      "lv": "abater"
    },
    "praesens": {
      "de": "er haut",
      "lv": "ele abate"
    },
    "imperfektIndikativ": {
      "de": "er hieb",
      "lv": "ele abateu"
    },
    "imperfektKonjunktiv": {
      "de": "er hiebe",
      "lv": "ele abateria"
    },
    "partizipVergangenheit": {
      "de": "gehauen",
      "lv": "abatido"
    }
  },
  {
    "infinitiv": {
      "de": "heben",
      "lv": "levantar"
    },
    "praesens": {
      "de": "er hebt",
      "lv": "ele levanta"
    },
    "imperfektIndikativ": {
      "de": "er hob",
      "lv": "ele levantou"
    },
    "imperfektKonjunktiv": {
      "de": "er höbe",
      "lv": "ele levantaria"
    },
    "partizipVergangenheit": {
      "de": "gehoben",
      "lv": "levantado"
    }
  },
  {
    "infinitiv": {
      "de": "kennen",
      "lv": "conhecer / saber"
    },
    "praesens": {
      "de": "er kennt",
      "lv": "ele conhece / sabe"
    },
    "imperfektIndikativ": {
      "de": "kannte",
      "lv": "ele conheceu / soube"
    },
    "imperfektKonjunktiv": {
      "de": "kannte",
      "lv": "ele conheceria / saberia"
    },
    "partizipVergangenheit": {
      "de": "gekannt",
      "lv": "conhecido / sabido"
    }
  },
  {
    "infinitiv": {
      "de": "klingen",
      "lv": "soar"
    },
    "praesens": {
      "de": "er klingt",
      "lv": "soa"
    },
    "imperfektIndikativ": {
      "de": "er klang",
      "lv": "soou"
    },
    "imperfektKonjunktiv": {
      "de": "er klänge",
      "lv": "soaria"
    },
    "partizipVergangenheit": {
      "de": "geklungen",
      "lv": "soado"
    }
  },
  {
    "infinitiv": {
      "de": "kneifen",
      "lv": "beliscar"
    },
    "praesens": {
      "de": "er kneift",
      "lv": "ele belisca"
    },
    "imperfektIndikativ": {
      "de": "er kniff",
      "lv": "ele beliscou"
    },
    "imperfektKonjunktiv": {
      "de": "er kniffe",
      "lv": "ele beliscaria"
    },
    "partizipVergangenheit": {
      "de": "gekniffen",
      "lv": "beliscado"
    }
  },
  {
    "infinitiv": {
      "de": "bleiben",
      "lv": "ficar"
    },
    "praesens": {
      "de": "er bleibt",
      "lv": "ele fica"
    },
    "imperfektIndikativ": {
      "de": "er blieb",
      "lv": "ele ficou"
    },
    "imperfektKonjunktiv": {
      "de": "er bliebe",
      "lv": "ele ficaria"
    },
    "partizipVergangenheit": {
      "de": "geblieben (er ist)",
      "lv": "ficado"
    }
  },
  {
    "infinitiv": {
      "de": "bleichen",
      "lv": "desbotar"
    },
    "praesens": {
      "de": "er bleicht",
      "lv": "desbota"
    },
    "imperfektIndikativ": {
      "de": "blich",
      "lv": "desbotou"
    },
    "imperfektKonjunktiv": {
      "de": "blich",
      "lv": "desbotaria"
    },
    "partizipVergangenheit": {
      "de": "geblichen",
      "lv": "desbotado"
    }
  },
  {
    "infinitiv": {
      "de": "braten",
      "lv": "assar"
    },
    "praesens": {
      "de": "er brät",
      "lv": "ele assa"
    },
    "imperfektIndikativ": {
      "de": "er briet",
      "lv": "ele assou"
    },
    "imperfektKonjunktiv": {
      "de": "er briete",
      "lv": "ele assaria"
    },
    "partizipVergangenheit": {
      "de": "gebraten",
      "lv": "assado"
    }
  },
  {
    "infinitiv": {
      "de": "brechen",
      "lv": "partir"
    },
    "praesens": {
      "de": "er bricht",
      "lv": "ele parte"
    },
    "imperfektIndikativ": {
      "de": "er brach",
      "lv": "ele partiu"
    },
    "imperfektKonjunktiv": {
      "de": "er bräche",
      "lv": "ele partiria"
    },
    "partizipVergangenheit": {
      "de": "gebrochen",
      "lv": "partido"
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
      "lv": "ardeu"
    },
    "imperfektKonjunktiv": {
      "de": "brannte",
      "lv": "arderia"
    },
    "partizipVergangenheit": {
      "de": "gebrannt",
      "lv": "ardido"
    }
  },
  {
    "infinitiv": {
      "de": "bringen",
      "lv": "trazer"
    },
    "praesens": {
      "de": "er bringt",
      "lv": "ele traz"
    },
    "imperfektIndikativ": {
      "de": "er brachte",
      "lv": "ele trouxe"
    },
    "imperfektKonjunktiv": {
      "de": "er brächte",
      "lv": "ele traria"
    },
    "partizipVergangenheit": {
      "de": "gebracht",
      "lv": "trazido"
    }
  },
  {
    "infinitiv": {
      "de": "denken",
      "lv": "pensar"
    },
    "praesens": {
      "de": "er denkt",
      "lv": "ele pensa"
    },
    "imperfektIndikativ": {
      "de": "er dachte",
      "lv": "ele pensou"
    },
    "imperfektKonjunktiv": {
      "de": "er dächte",
      "lv": "ele pensaria"
    },
    "partizipVergangenheit": {
      "de": "gedacht",
      "lv": "pensado"
    }
  },
  {
    "infinitiv": {
      "de": "dingen",
      "lv": "contratar / combinar"
    },
    "praesens": {
      "de": "er dingt",
      "lv": "ele contrata / combina"
    },
    "imperfektIndikativ": {
      "de": "dingte",
      "lv": "ele contratou / combinou"
    },
    "imperfektKonjunktiv": {
      "de": "dingte",
      "lv": "ele contrataria / combinaria"
    },
    "partizipVergangenheit": {
      "de": "gedungen",
      "lv": "contratado / combinado"
    }
  },
  {
    "infinitiv": {
      "de": "dreschen",
      "lv": "debulhar"
    },
    "praesens": {
      "de": "er drischt",
      "lv": "ele debulha"
    },
    "imperfektIndikativ": {
      "de": "er drasch / er drosch",
      "lv": "ele debulhou"
    },
    "imperfektKonjunktiv": {
      "de": "er dräsche / er drösche",
      "lv": "ele debulharia"
    },
    "partizipVergangenheit": {
      "de": "gedroschen",
      "lv": "debulhado"
    }
  },
  {
    "infinitiv": {
      "de": "dringen",
      "lv": "irromper"
    },
    "praesens": {
      "de": "er dringt",
      "lv": "ele irrompe"
    },
    "imperfektIndikativ": {
      "de": "er drang",
      "lv": "ele irrompeu"
    },
    "imperfektKonjunktiv": {
      "de": "er dränge",
      "lv": "ele irromperia"
    },
    "partizipVergangenheit": {
      "de": "gedrungen (er ist)",
      "lv": "irrompido"
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
      "lv": "pareceu"
    },
    "imperfektKonjunktiv": {
      "de": "deuchte",
      "lv": "pareceria"
    },
    "partizipVergangenheit": {
      "de": "gedünkt",
      "lv": "parecido"
    }
  },
  {
    "infinitiv": {
      "de": "dürfen",
      "lv": "ter permissão"
    },
    "praesens": {
      "de": "er darf",
      "lv": "ele tem permissão"
    },
    "imperfektIndikativ": {
      "de": "durfte",
      "lv": "ele teve permissão"
    },
    "imperfektKonjunktiv": {
      "de": "durfte",
      "lv": "ele teria permissão"
    },
    "partizipVergangenheit": {
      "de": "gedurft",
      "lv": "tido permissão"
    }
  },
  {
    "infinitiv": {
      "de": "empfehlen",
      "lv": "recomendar"
    },
    "praesens": {
      "de": "er empfiehlt",
      "lv": "ele recomenda"
    },
    "imperfektIndikativ": {
      "de": "er empfahl",
      "lv": "ele recomendou"
    },
    "imperfektKonjunktiv": {
      "de": "er empfähle / er empföhle",
      "lv": "ele recomendaria"
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
      "lv": "ele sente"
    },
    "imperfektIndikativ": {
      "de": "er empfand",
      "lv": "ele sentiu"
    },
    "imperfektKonjunktiv": {
      "de": "er empfände",
      "lv": "ele sentiria"
    },
    "partizipVergangenheit": {
      "de": "empfunden",
      "lv": "sentido"
    }
  },
  {
    "infinitiv": {
      "de": "erlöschen",
      "lv": "apagar-se"
    },
    "praesens": {
      "de": "er erlischt",
      "lv": "apaga-se"
    },
    "imperfektIndikativ": {
      "de": "er erlosch",
      "lv": "apagou-se"
    },
    "imperfektKonjunktiv": {
      "de": "er erlösche",
      "lv": "apagar-se-ia"
    },
    "partizipVergangenheit": {
      "de": "erloschen (er ist)",
      "lv": "apagado"
    }
  },
  {
    "infinitiv": {
      "de": "erschrecken",
      "lv": "assustar-se"
    },
    "praesens": {
      "de": "er erschrickt",
      "lv": "ele assusta-se"
    },
    "imperfektIndikativ": {
      "de": "er erschrak",
      "lv": "ele assustou-se"
    },
    "imperfektKonjunktiv": {
      "de": "er erschräke",
      "lv": "ele assustar-se-ia"
    },
    "partizipVergangenheit": {
      "de": "erschrocken (er ist)",
      "lv": "assustado"
    }
  },
  {
    "infinitiv": {
      "de": "essen",
      "lv": "comer"
    },
    "praesens": {
      "de": "er isst",
      "lv": "ele come"
    },
    "imperfektIndikativ": {
      "de": "er ass",
      "lv": "ele comeu"
    },
    "imperfektKonjunktiv": {
      "de": "er äße",
      "lv": "ele comeria"
    },
    "partizipVergangenheit": {
      "de": "gegessen",
      "lv": "comido"
    }
  },
  {
    "infinitiv": {
      "de": "fahren",
      "lv": "conduzir"
    },
    "praesens": {
      "de": "er fährt",
      "lv": "ele conduz"
    },
    "imperfektIndikativ": {
      "de": "er fuhr",
      "lv": "ele conduziu"
    },
    "imperfektKonjunktiv": {
      "de": "er führe",
      "lv": "ele conduziria"
    },
    "partizipVergangenheit": {
      "de": "gefahren (er ist)",
      "lv": "conduzido"
    }
  },
  {
    "infinitiv": {
      "de": "fallen",
      "lv": "cair"
    },
    "praesens": {
      "de": "er fällt",
      "lv": "ele cai"
    },
    "imperfektIndikativ": {
      "de": "er fiel",
      "lv": "ele caiu"
    },
    "imperfektKonjunktiv": {
      "de": "er fiele",
      "lv": "ele cairia"
    },
    "partizipVergangenheit": {
      "de": "gefallen (er ist)",
      "lv": "caído"
    }
  },
  {
    "infinitiv": {
      "de": "fangen",
      "lv": "apanhar"
    },
    "praesens": {
      "de": "er fängt",
      "lv": "ele apanha"
    },
    "imperfektIndikativ": {
      "de": "er fing",
      "lv": "ele apanhou"
    },
    "imperfektKonjunktiv": {
      "de": "er finge",
      "lv": "ele apanharia"
    },
    "partizipVergangenheit": {
      "de": "gefangen",
      "lv": "apanhado"
    }
  },
  {
    "infinitiv": {
      "de": "finden",
      "lv": "encontrar"
    },
    "praesens": {
      "de": "er findet",
      "lv": "ele encontra"
    },
    "imperfektIndikativ": {
      "de": "er fand",
      "lv": "ele encontrou"
    },
    "imperfektKonjunktiv": {
      "de": "er fände",
      "lv": "ele encontraria"
    },
    "partizipVergangenheit": {
      "de": "gefunden",
      "lv": "encontrado"
    }
  },
  {
    "infinitiv": {
      "de": "fliegen",
      "lv": "voar"
    },
    "praesens": {
      "de": "er fliegt",
      "lv": "ele voa"
    },
    "imperfektIndikativ": {
      "de": "er flog",
      "lv": "ele voou"
    },
    "imperfektKonjunktiv": {
      "de": "er flöge",
      "lv": "ele voaria"
    },
    "partizipVergangenheit": {
      "de": "geflogen (er ist)",
      "lv": "voado"
    }
  },
  {
    "infinitiv": {
      "de": "fliehen",
      "lv": "fugir"
    },
    "praesens": {
      "de": "er flieht",
      "lv": "ele foge"
    },
    "imperfektIndikativ": {
      "de": "er floh",
      "lv": "ele fugiu"
    },
    "imperfektKonjunktiv": {
      "de": "er flöhe",
      "lv": "ele fugiria"
    },
    "partizipVergangenheit": {
      "de": "geflohen (er ist)",
      "lv": "fugido"
    }
  },
  {
    "infinitiv": {
      "de": "fließen",
      "lv": "fluir"
    },
    "praesens": {
      "de": "er fließt",
      "lv": "flui"
    },
    "imperfektIndikativ": {
      "de": "er floss",
      "lv": "fluiu"
    },
    "imperfektKonjunktiv": {
      "de": "er flösse",
      "lv": "fluiria"
    },
    "partizipVergangenheit": {
      "de": "geflossen (er ist)",
      "lv": "fluído"
    }
  },
  {
    "infinitiv": {
      "de": "fressen",
      "lv": "comer / devorar"
    },
    "praesens": {
      "de": "er frisst",
      "lv": "ele come / devora"
    },
    "imperfektIndikativ": {
      "de": "er frass",
      "lv": "ele comeu / devorou"
    },
    "imperfektKonjunktiv": {
      "de": "er fräße",
      "lv": "ele comeria / devoraria"
    },
    "partizipVergangenheit": {
      "de": "gefressen",
      "lv": "comido / devorado"
    }
  },
  {
    "infinitiv": {
      "de": "frieren",
      "lv": "ter frio"
    },
    "praesens": {
      "de": "er friert",
      "lv": "ele tem frio"
    },
    "imperfektIndikativ": {
      "de": "er fror",
      "lv": "ele teve frio"
    },
    "imperfektKonjunktiv": {
      "de": "er fröre",
      "lv": "ele teria frio"
    },
    "partizipVergangenheit": {
      "de": "gefroren",
      "lv": "tido frio"
    }
  },
  {
    "infinitiv": {
      "de": "geben",
      "lv": "dar"
    },
    "praesens": {
      "de": "er gibt",
      "lv": "ele dá"
    },
    "imperfektIndikativ": {
      "de": "er gab",
      "lv": "ele deu"
    },
    "imperfektKonjunktiv": {
      "de": "er gäbe",
      "lv": "ele daria"
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
      "lv": "ele prospera"
    },
    "imperfektIndikativ": {
      "de": "er gedieh",
      "lv": "ele prosperou"
    },
    "imperfektKonjunktiv": {
      "de": "er gediehe",
      "lv": "ele prosperaria"
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
      "lv": "ele vai"
    },
    "imperfektIndikativ": {
      "de": "er ging",
      "lv": "ele foi"
    },
    "imperfektKonjunktiv": {
      "de": "er ginge",
      "lv": "ele iria"
    },
    "partizipVergangenheit": {
      "de": "gegangen (er ist)",
      "lv": "ido"
    }
  },
  {
    "infinitiv": {
      "de": "gewinnen",
      "lv": "ganhar"
    },
    "praesens": {
      "de": "er gewinnt",
      "lv": "ele ganha"
    },
    "imperfektIndikativ": {
      "de": "er gewann",
      "lv": "ele ganhou"
    },
    "imperfektKonjunktiv": {
      "de": "er gewönne / er gewänne",
      "lv": "ele ganharia"
    },
    "partizipVergangenheit": {
      "de": "gewonnen",
      "lv": "ganhado"
    }
  },
  {
    "infinitiv": {
      "de": "haben",
      "lv": "ter"
    },
    "praesens": {
      "de": "er hat",
      "lv": "ele tem"
    },
    "imperfektIndikativ": {
      "de": "hatte",
      "lv": "ele teve"
    },
    "imperfektKonjunktiv": {
      "de": "hatte",
      "lv": "ele teria"
    },
    "partizipVergangenheit": {
      "de": "gehabt",
      "lv": "tido"
    }
  },
  {
    "infinitiv": {
      "de": "halten",
      "lv": "segurar"
    },
    "praesens": {
      "de": "er hält",
      "lv": "ele segura"
    },
    "imperfektIndikativ": {
      "de": "er hielt",
      "lv": "ele segurou"
    },
    "imperfektKonjunktiv": {
      "de": "er hielte",
      "lv": "ele seguraria"
    },
    "partizipVergangenheit": {
      "de": "gehalten",
      "lv": "segurado"
    }
  },
  {
    "infinitiv": {
      "de": "heißen",
      "lv": "chamar / chamar-se"
    },
    "praesens": {
      "de": "er heißt",
      "lv": "ele chama / chama-se"
    },
    "imperfektIndikativ": {
      "de": "er hieß",
      "lv": "ele chamou / chamou-se"
    },
    "imperfektKonjunktiv": {
      "de": "er hieße",
      "lv": "ele chamaria / chamar-se-ia"
    },
    "partizipVergangenheit": {
      "de": "geheißen",
      "lv": "chamado / chamado"
    }
  },
  {
    "infinitiv": {
      "de": "helfen",
      "lv": "ajudar"
    },
    "praesens": {
      "de": "er hilft",
      "lv": "ele ajuda"
    },
    "imperfektIndikativ": {
      "de": "er half",
      "lv": "ele ajudou"
    },
    "imperfektKonjunktiv": {
      "de": "er hülfe / er hälfe",
      "lv": "ele ajudaria"
    },
    "partizipVergangenheit": {
      "de": "geholfen",
      "lv": "ajudado"
    }
  },
  {
    "infinitiv": {
      "de": "kommen",
      "lv": "vir"
    },
    "praesens": {
      "de": "er kommt",
      "lv": "ele vem"
    },
    "imperfektIndikativ": {
      "de": "er kam",
      "lv": "ele veio"
    },
    "imperfektKonjunktiv": {
      "de": "er käme",
      "lv": "ele viria"
    },
    "partizipVergangenheit": {
      "de": "gekommen (er ist)",
      "lv": "vindo"
    }
  },
  {
    "infinitiv": {
      "de": "können",
      "lv": "poder"
    },
    "praesens": {
      "de": "er kann",
      "lv": "ele pode"
    },
    "imperfektIndikativ": {
      "de": "konnte",
      "lv": "ele pôde"
    },
    "imperfektKonjunktiv": {
      "de": "konnte",
      "lv": "ele poderia"
    },
    "partizipVergangenheit": {
      "de": "gekonnt",
      "lv": "podido"
    }
  },
  {
    "infinitiv": {
      "de": "kriechen",
      "lv": "rastejar"
    },
    "praesens": {
      "de": "er kriecht",
      "lv": "ele rasteja"
    },
    "imperfektIndikativ": {
      "de": "er kroch",
      "lv": "ele rastejou"
    },
    "imperfektKonjunktiv": {
      "de": "er kröche",
      "lv": "ele rastejaria"
    },
    "partizipVergangenheit": {
      "de": "gekrochen (er ist)",
      "lv": "rastejado"
    }
  },
  {
    "infinitiv": {
      "de": "laden",
      "lv": "carregar / convidar"
    },
    "praesens": {
      "de": "er lädt",
      "lv": "ele carrega / convida"
    },
    "imperfektIndikativ": {
      "de": "er lud",
      "lv": "ele carregou / convidou"
    },
    "imperfektKonjunktiv": {
      "de": "er lüde",
      "lv": "ele carregaria / convidaria"
    },
    "partizipVergangenheit": {
      "de": "geladen",
      "lv": "carregado / convidado"
    }
  },
  {
    "infinitiv": {
      "de": "lassen",
      "lv": "fazer / deixar"
    },
    "praesens": {
      "de": "er lässt",
      "lv": "ele faz / deixa"
    },
    "imperfektIndikativ": {
      "de": "er ließ",
      "lv": "ele fez / deixou"
    },
    "imperfektKonjunktiv": {
      "de": "er ließe",
      "lv": "ele faria / deixaria"
    },
    "partizipVergangenheit": {
      "de": "gelassen",
      "lv": "feito / deixado"
    }
  },
  {
    "infinitiv": {
      "de": "laufen",
      "lv": "correr"
    },
    "praesens": {
      "de": "er läuft",
      "lv": "ele corre"
    },
    "imperfektIndikativ": {
      "de": "er lief",
      "lv": "ele correu"
    },
    "imperfektKonjunktiv": {
      "de": "er liefe",
      "lv": "ele correria"
    },
    "partizipVergangenheit": {
      "de": "gelaufen (er ist)",
      "lv": "corrido"
    }
  },
  {
    "infinitiv": {
      "de": "leiden",
      "lv": "sofrer"
    },
    "praesens": {
      "de": "er leidet",
      "lv": "ele sofre"
    },
    "imperfektIndikativ": {
      "de": "er litt",
      "lv": "ele sofreu"
    },
    "imperfektKonjunktiv": {
      "de": "er litte",
      "lv": "ele sofreria"
    },
    "partizipVergangenheit": {
      "de": "gelitten",
      "lv": "sofrido"
    }
  },
  {
    "infinitiv": {
      "de": "leihen",
      "lv": "emprestar / pedir emprestado"
    },
    "praesens": {
      "de": "er leiht",
      "lv": "ele empresta / pede emprestado"
    },
    "imperfektIndikativ": {
      "de": "er lieh",
      "lv": "ele emprestou / pediu emprestado"
    },
    "imperfektKonjunktiv": {
      "de": "er liehe",
      "lv": "ele emprestaria / pediria emprestado"
    },
    "partizipVergangenheit": {
      "de": "geliehen",
      "lv": "emprestado / pedido emprestado"
    }
  },
  {
    "infinitiv": {
      "de": "lesen",
      "lv": "ler"
    },
    "praesens": {
      "de": "er liest",
      "lv": "ele lê"
    },
    "imperfektIndikativ": {
      "de": "er las",
      "lv": "ele leu"
    },
    "imperfektKonjunktiv": {
      "de": "er läse",
      "lv": "ele leria"
    },
    "partizipVergangenheit": {
      "de": "gelesen",
      "lv": "lido"
    }
  },
  {
    "infinitiv": {
      "de": "liegen",
      "lv": "estar deitado"
    },
    "praesens": {
      "de": "er liegt",
      "lv": "ele está deitado"
    },
    "imperfektIndikativ": {
      "de": "er lag",
      "lv": "ele esteve deitado"
    },
    "imperfektKonjunktiv": {
      "de": "er läge",
      "lv": "ele estaria deitado"
    },
    "partizipVergangenheit": {
      "de": "gelegen",
      "lv": "estado deitado"
    }
  },
  {
    "infinitiv": {
      "de": "lügen",
      "lv": "mentir"
    },
    "praesens": {
      "de": "er lügt",
      "lv": "ele mente"
    },
    "imperfektIndikativ": {
      "de": "er log",
      "lv": "ele mentiu"
    },
    "imperfektKonjunktiv": {
      "de": "er löge",
      "lv": "ele mentiria"
    },
    "partizipVergangenheit": {
      "de": "gelogen",
      "lv": "mentido"
    }
  },
  {
    "infinitiv": {
      "de": "mahlen",
      "lv": "moer"
    },
    "praesens": {
      "de": "er mahlt",
      "lv": "ele mói"
    },
    "imperfektIndikativ": {
      "de": "er mahlte",
      "lv": "ele moeu"
    },
    "imperfektKonjunktiv": {
      "de": "er malte",
      "lv": "ele moeria"
    },
    "partizipVergangenheit": {
      "de": "gemahlen",
      "lv": "moído"
    }
  },
  {
    "infinitiv": {
      "de": "meiden",
      "lv": "evitar"
    },
    "praesens": {
      "de": "er meidet",
      "lv": "ele evita"
    },
    "imperfektIndikativ": {
      "de": "er mied",
      "lv": "ele evitou"
    },
    "imperfektKonjunktiv": {
      "de": "er miede",
      "lv": "ele evitaria"
    },
    "partizipVergangenheit": {
      "de": "gemieden",
      "lv": "evitado"
    }
  },
  {
    "infinitiv": {
      "de": "melken",
      "lv": "ordenhar"
    },
    "praesens": {
      "de": "er milkt / er melkt",
      "lv": "ele ordenha"
    },
    "imperfektIndikativ": {
      "de": "er molk / er melkte",
      "lv": "ele ordenhou"
    },
    "imperfektKonjunktiv": {
      "de": "er mölke / er melkte",
      "lv": "ele ordenharia"
    },
    "partizipVergangenheit": {
      "de": "gemolken / gemelkt",
      "lv": "ordenhado"
    }
  },
  {
    "infinitiv": {
      "de": "messen",
      "lv": "medir"
    },
    "praesens": {
      "de": "er misst",
      "lv": "ele mede"
    },
    "imperfektIndikativ": {
      "de": "er mass",
      "lv": "ele mediu"
    },
    "imperfektKonjunktiv": {
      "de": "er mäße",
      "lv": "ele mediria"
    },
    "partizipVergangenheit": {
      "de": "gemessen",
      "lv": "medido"
    }
  },
  {
    "infinitiv": {
      "de": "misslingen",
      "lv": "falhar"
    },
    "praesens": {
      "de": "es misslingt",
      "lv": "falha"
    },
    "imperfektIndikativ": {
      "de": "misslang",
      "lv": "falhou"
    },
    "imperfektKonjunktiv": {
      "de": "misslang",
      "lv": "falharia"
    },
    "partizipVergangenheit": {
      "de": "misslungen",
      "lv": "falhado"
    }
  },
  {
    "infinitiv": {
      "de": "mögen",
      "lv": "gostar"
    },
    "praesens": {
      "de": "er mag",
      "lv": "ele gosta"
    },
    "imperfektIndikativ": {
      "de": "mochte",
      "lv": "ele gostou"
    },
    "imperfektKonjunktiv": {
      "de": "mochte",
      "lv": "ele gostaria"
    },
    "partizipVergangenheit": {
      "de": "gemocht",
      "lv": "gostado"
    }
  },
  {
    "infinitiv": {
      "de": "müssen",
      "lv": "ter de"
    },
    "praesens": {
      "de": "er muss",
      "lv": "ele tem de"
    },
    "imperfektIndikativ": {
      "de": "musste",
      "lv": "ele teve de"
    },
    "imperfektKonjunktiv": {
      "de": "musste",
      "lv": "ele teria de"
    },
    "partizipVergangenheit": {
      "de": "gemusst",
      "lv": "tido de"
    }
  },
  {
    "infinitiv": {
      "de": "nehmen",
      "lv": "tomar"
    },
    "praesens": {
      "de": "er nimmt",
      "lv": "ele toma"
    },
    "imperfektIndikativ": {
      "de": "er nahm",
      "lv": "ele tomou"
    },
    "imperfektKonjunktiv": {
      "de": "er nähme",
      "lv": "ele tomaria"
    },
    "partizipVergangenheit": {
      "de": "genommen",
      "lv": "tomado"
    }
  },
  {
    "infinitiv": {
      "de": "nennen",
      "lv": "nomear"
    },
    "praesens": {
      "de": "er nennt",
      "lv": "ele nomeia"
    },
    "imperfektIndikativ": {
      "de": "er nannte",
      "lv": "ele nomeou"
    },
    "imperfektKonjunktiv": {
      "de": "er nennte",
      "lv": "ele nomearia"
    },
    "partizipVergangenheit": {
      "de": "genannt",
      "lv": "nomeado"
    }
  },
  {
    "infinitiv": {
      "de": "pfeifen",
      "lv": "assobiar"
    },
    "praesens": {
      "de": "er pfeift",
      "lv": "ele assobia"
    },
    "imperfektIndikativ": {
      "de": "er pfiff",
      "lv": "ele assobiou"
    },
    "imperfektKonjunktiv": {
      "de": "er pfiffe",
      "lv": "ele assobiaria"
    },
    "partizipVergangenheit": {
      "de": "gepfiffen",
      "lv": "assobiado"
    }
  },
  {
    "infinitiv": {
      "de": "pflegen",
      "lv": "cuidar"
    },
    "praesens": {
      "de": "er pflegt",
      "lv": "ele cuida"
    },
    "imperfektIndikativ": {
      "de": "pflegte / pflog",
      "lv": "ele cuidou"
    },
    "imperfektKonjunktiv": {
      "de": "pflegte / pflog",
      "lv": "ele cuidaria"
    },
    "partizipVergangenheit": {
      "de": "gepflegt / gepflogen",
      "lv": "cuidado"
    }
  },
  {
    "infinitiv": {
      "de": "preisen",
      "lv": "louvar"
    },
    "praesens": {
      "de": "er preist",
      "lv": "ele louva"
    },
    "imperfektIndikativ": {
      "de": "er pries",
      "lv": "ele louvou"
    },
    "imperfektKonjunktiv": {
      "de": "er priese",
      "lv": "ele louvaria"
    },
    "partizipVergangenheit": {
      "de": "gepriesen",
      "lv": "louvado"
    }
  },
  {
    "infinitiv": {
      "de": "quellen",
      "lv": "inchar"
    },
    "praesens": {
      "de": "er quillt",
      "lv": "incha"
    },
    "imperfektIndikativ": {
      "de": "er quoll",
      "lv": "inchou"
    },
    "imperfektKonjunktiv": {
      "de": "er quölle",
      "lv": "incharia"
    },
    "partizipVergangenheit": {
      "de": "gequollen (er ist)",
      "lv": "inchado"
    }
  },
  {
    "infinitiv": {
      "de": "raten",
      "lv": "aconselhar / adivinhar"
    },
    "praesens": {
      "de": "er rät",
      "lv": "ele aconselha / adivinha"
    },
    "imperfektIndikativ": {
      "de": "er riet",
      "lv": "ele aconselhou / adivinhou"
    },
    "imperfektKonjunktiv": {
      "de": "er riete",
      "lv": "ele aconselharia / adivinharia"
    },
    "partizipVergangenheit": {
      "de": "geraten",
      "lv": "aconselhado / adivinhado"
    }
  },
  {
    "infinitiv": {
      "de": "reiben",
      "lv": "esfregar"
    },
    "praesens": {
      "de": "er reibt",
      "lv": "ele esfrega"
    },
    "imperfektIndikativ": {
      "de": "er rieb",
      "lv": "ele esfregou"
    },
    "imperfektKonjunktiv": {
      "de": "er riebe",
      "lv": "ele esfregaria"
    },
    "partizipVergangenheit": {
      "de": "gerieben",
      "lv": "esfregado"
    }
  },
  {
    "infinitiv": {
      "de": "reißen",
      "lv": "arrancar"
    },
    "praesens": {
      "de": "er reißt",
      "lv": "ele arranca"
    },
    "imperfektIndikativ": {
      "de": "er riss",
      "lv": "ele arrancou"
    },
    "imperfektKonjunktiv": {
      "de": "er risse",
      "lv": "ele arrancaria"
    },
    "partizipVergangenheit": {
      "de": "gerissen",
      "lv": "arrancado"
    }
  },
  {
    "infinitiv": {
      "de": "reiten",
      "lv": "andar a cavalo"
    },
    "praesens": {
      "de": "er reitet",
      "lv": "ele anda a cavalo"
    },
    "imperfektIndikativ": {
      "de": "er ritt",
      "lv": "ele andou a cavalo"
    },
    "imperfektKonjunktiv": {
      "de": "er ritte",
      "lv": "ele andaria a cavalo"
    },
    "partizipVergangenheit": {
      "de": "geritten (er ist)",
      "lv": "andado a cavalo"
    }
  },
  {
    "infinitiv": {
      "de": "rennen",
      "lv": "correr"
    },
    "praesens": {
      "de": "er rennt",
      "lv": "ele corre"
    },
    "imperfektIndikativ": {
      "de": "er rannte",
      "lv": "ele correu"
    },
    "imperfektKonjunktiv": {
      "de": "er rennte",
      "lv": "ele correria"
    },
    "partizipVergangenheit": {
      "de": "gerannt",
      "lv": "corrido"
    }
  },
  {
    "infinitiv": {
      "de": "riechen",
      "lv": "cheirar"
    },
    "praesens": {
      "de": "er riecht",
      "lv": "ele cheira"
    },
    "imperfektIndikativ": {
      "de": "er roch",
      "lv": "ele cheirou"
    },
    "imperfektKonjunktiv": {
      "de": "er röche",
      "lv": "ele cheiraria"
    },
    "partizipVergangenheit": {
      "de": "gerochen",
      "lv": "cheirado"
    }
  },
  {
    "infinitiv": {
      "de": "ringen",
      "lv": "lutar"
    },
    "praesens": {
      "de": "er ringt",
      "lv": "ele luta"
    },
    "imperfektIndikativ": {
      "de": "er rang",
      "lv": "ele lutou"
    },
    "imperfektKonjunktiv": {
      "de": "er ränge",
      "lv": "ele lutaria"
    },
    "partizipVergangenheit": {
      "de": "gerungen",
      "lv": "lutado"
    }
  },
  {
    "infinitiv": {
      "de": "rinnen",
      "lv": "escorrer"
    },
    "praesens": {
      "de": "er rinnt",
      "lv": "escorre"
    },
    "imperfektIndikativ": {
      "de": "er rann",
      "lv": "escorreu"
    },
    "imperfektKonjunktiv": {
      "de": "er ränne / er rönne",
      "lv": "escorreria"
    },
    "partizipVergangenheit": {
      "de": "geronnen (er ist)",
      "lv": "escorrido"
    }
  },
  {
    "infinitiv": {
      "de": "rufen",
      "lv": "chamar"
    },
    "praesens": {
      "de": "er ruft",
      "lv": "ele chama"
    },
    "imperfektIndikativ": {
      "de": "er rief",
      "lv": "ele chamou"
    },
    "imperfektKonjunktiv": {
      "de": "er riefe",
      "lv": "ele chamaria"
    },
    "partizipVergangenheit": {
      "de": "gerufen",
      "lv": "chamado"
    }
  },
  {
    "infinitiv": {
      "de": "salzen",
      "lv": "salgar"
    },
    "praesens": {
      "de": "er salzt",
      "lv": "ele salga"
    },
    "imperfektIndikativ": {
      "de": "er salzte",
      "lv": "ele salgou"
    },
    "imperfektKonjunktiv": {
      "de": "er salzte",
      "lv": "ele salgaria"
    },
    "partizipVergangenheit": {
      "de": "gesalzen",
      "lv": "salgado"
    }
  },
  {
    "infinitiv": {
      "de": "saufen",
      "lv": "embebedar-se / beber"
    },
    "praesens": {
      "de": "er säuft",
      "lv": "ele embebeda-se / bebe"
    },
    "imperfektIndikativ": {
      "de": "er soff",
      "lv": "ele embebedou-se / bebeu"
    },
    "imperfektKonjunktiv": {
      "de": "er söffe",
      "lv": "ele embebedar-se-ia / beberia"
    },
    "partizipVergangenheit": {
      "de": "gesoffen",
      "lv": "embebedado / bebido"
    }
  },
  {
    "infinitiv": {
      "de": "saugen",
      "lv": "chupar"
    },
    "praesens": {
      "de": "er saugt",
      "lv": "ele chupa"
    },
    "imperfektIndikativ": {
      "de": "er sog",
      "lv": "ele chupou"
    },
    "imperfektKonjunktiv": {
      "de": "er söge",
      "lv": "ele chuparia"
    },
    "partizipVergangenheit": {
      "de": "gesogen",
      "lv": "chupado"
    }
  },
  {
    "infinitiv": {
      "de": "schaffen",
      "lv": "criar"
    },
    "praesens": {
      "de": "er schafft",
      "lv": "ele cria"
    },
    "imperfektIndikativ": {
      "de": "er schuf",
      "lv": "ele criou"
    },
    "imperfektKonjunktiv": {
      "de": "er schüfe",
      "lv": "ele criaria"
    },
    "partizipVergangenheit": {
      "de": "geschaffen",
      "lv": "criado"
    }
  },
  {
    "infinitiv": {
      "de": "schallen",
      "lv": "ressoar"
    },
    "praesens": {
      "de": "es schallt",
      "lv": "ressoa"
    },
    "imperfektIndikativ": {
      "de": "schallte / scholl",
      "lv": "ressoou"
    },
    "imperfektKonjunktiv": {
      "de": "schallte / scholl",
      "lv": "ressoaria"
    },
    "partizipVergangenheit": {
      "de": "geschallt",
      "lv": "ressoado"
    }
  },
  {
    "infinitiv": {
      "de": "scheiden",
      "lv": "separar / separar-se"
    },
    "praesens": {
      "de": "er scheidet",
      "lv": "ele separa / separa-se"
    },
    "imperfektIndikativ": {
      "de": "er schied",
      "lv": "ele separou / separou-se"
    },
    "imperfektKonjunktiv": {
      "de": "er schiede",
      "lv": "ele separaria / separar-se-ia"
    },
    "partizipVergangenheit": {
      "de": "geschieden (er hat / er ist)",
      "lv": "separado / separado"
    }
  },
  {
    "infinitiv": {
      "de": "scheinen",
      "lv": "brilhar / parecer"
    },
    "praesens": {
      "de": "er scheint",
      "lv": "ele brilha / parece"
    },
    "imperfektIndikativ": {
      "de": "er schien",
      "lv": "ele brilhou / pareceu"
    },
    "imperfektKonjunktiv": {
      "de": "er schiene",
      "lv": "ele brilharia / pareceria"
    },
    "partizipVergangenheit": {
      "de": "geschienen",
      "lv": "brilhado / parecido"
    }
  },
  {
    "infinitiv": {
      "de": "schelten",
      "lv": "repreender"
    },
    "praesens": {
      "de": "er schilt",
      "lv": "ele repreende"
    },
    "imperfektIndikativ": {
      "de": "er schalt",
      "lv": "ele repreendeu"
    },
    "imperfektKonjunktiv": {
      "de": "er schölte / er schälte",
      "lv": "ele repreenderia"
    },
    "partizipVergangenheit": {
      "de": "gescholten",
      "lv": "repreendido"
    }
  },
  {
    "infinitiv": {
      "de": "scheren",
      "lv": "tosquiar"
    },
    "praesens": {
      "de": "er schert",
      "lv": "ele tosquia"
    },
    "imperfektIndikativ": {
      "de": "schor / scherte",
      "lv": "ele tosquiou"
    },
    "imperfektKonjunktiv": {
      "de": "schor / scherte",
      "lv": "ele tosquiaria"
    },
    "partizipVergangenheit": {
      "de": "geschoren / geschert",
      "lv": "tosquiado"
    }
  },
  {
    "infinitiv": {
      "de": "schieben",
      "lv": "empurrar"
    },
    "praesens": {
      "de": "er schiebt",
      "lv": "ele empurra"
    },
    "imperfektIndikativ": {
      "de": "er schob",
      "lv": "ele empurrou"
    },
    "imperfektKonjunktiv": {
      "de": "er schöbe",
      "lv": "ele empurraria"
    },
    "partizipVergangenheit": {
      "de": "geschoben",
      "lv": "empurrado"
    }
  },
  {
    "infinitiv": {
      "de": "schießen",
      "lv": "disparar"
    },
    "praesens": {
      "de": "er schießt",
      "lv": "ele dispara"
    },
    "imperfektIndikativ": {
      "de": "er schoss",
      "lv": "ele disparou"
    },
    "imperfektKonjunktiv": {
      "de": "er schösse",
      "lv": "ele dispararia"
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
      "lv": "ele atormenta"
    },
    "imperfektIndikativ": {
      "de": "schindete",
      "lv": "ele atormentou"
    },
    "imperfektKonjunktiv": {
      "de": "schindete",
      "lv": "ele atormentaria"
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
      "lv": "ele dorme"
    },
    "imperfektIndikativ": {
      "de": "er schlief",
      "lv": "ele dormiu"
    },
    "imperfektKonjunktiv": {
      "de": "er schliefe",
      "lv": "ele dormiria"
    },
    "partizipVergangenheit": {
      "de": "geschlafen",
      "lv": "dormido"
    }
  },
  {
    "infinitiv": {
      "de": "schlagen",
      "lv": "bater"
    },
    "praesens": {
      "de": "er schlägt",
      "lv": "ele bate"
    },
    "imperfektIndikativ": {
      "de": "er schlug",
      "lv": "ele bateu"
    },
    "imperfektKonjunktiv": {
      "de": "er schlüge",
      "lv": "ele bateria"
    },
    "partizipVergangenheit": {
      "de": "geschlagen",
      "lv": "batido"
    }
  },
  {
    "infinitiv": {
      "de": "schleichen",
      "lv": "andar furtivamente"
    },
    "praesens": {
      "de": "er schleicht",
      "lv": "ele anda furtivamente"
    },
    "imperfektIndikativ": {
      "de": "er schlich",
      "lv": "ele andou furtivamente"
    },
    "imperfektKonjunktiv": {
      "de": "er schliche",
      "lv": "ele andaria furtivamente"
    },
    "partizipVergangenheit": {
      "de": "geschlichen (er ist)",
      "lv": "andado furtivamente"
    }
  },
  {
    "infinitiv": {
      "de": "schleifen",
      "lv": "polir"
    },
    "praesens": {
      "de": "er schleift",
      "lv": "ele pule"
    },
    "imperfektIndikativ": {
      "de": "er schliff",
      "lv": "ele poliu"
    },
    "imperfektKonjunktiv": {
      "de": "er schliffe",
      "lv": "ele poliria"
    },
    "partizipVergangenheit": {
      "de": "geschliffen",
      "lv": "polido"
    }
  },
  {
    "infinitiv": {
      "de": "schließen",
      "lv": "fechar"
    },
    "praesens": {
      "de": "er schließt",
      "lv": "ele fecha"
    },
    "imperfektIndikativ": {
      "de": "er schloss",
      "lv": "ele fechou"
    },
    "imperfektKonjunktiv": {
      "de": "er schlösse",
      "lv": "ele fecharia"
    },
    "partizipVergangenheit": {
      "de": "geschlossen",
      "lv": "fechado"
    }
  },
  {
    "infinitiv": {
      "de": "schlingen",
      "lv": "engolir"
    },
    "praesens": {
      "de": "er schlingt",
      "lv": "ele engole"
    },
    "imperfektIndikativ": {
      "de": "er schlang",
      "lv": "ele engoliu"
    },
    "imperfektKonjunktiv": {
      "de": "er schlänge",
      "lv": "ele engoliria"
    },
    "partizipVergangenheit": {
      "de": "geschlungen",
      "lv": "engolido"
    }
  },
  {
    "infinitiv": {
      "de": "schmeißen",
      "lv": "arremessar"
    },
    "praesens": {
      "de": "er schmeißt",
      "lv": "ele arremessa"
    },
    "imperfektIndikativ": {
      "de": "er schmiss",
      "lv": "ele arremessou"
    },
    "imperfektKonjunktiv": {
      "de": "er schmisse",
      "lv": "ele arremessaria"
    },
    "partizipVergangenheit": {
      "de": "geschmissen",
      "lv": "arremessado"
    }
  },
  {
    "infinitiv": {
      "de": "schmelzen",
      "lv": "derreter-se"
    },
    "praesens": {
      "de": "er schmilzt",
      "lv": "derrete-se"
    },
    "imperfektIndikativ": {
      "de": "er schmolz",
      "lv": "derreteu-se"
    },
    "imperfektKonjunktiv": {
      "de": "er schmölze",
      "lv": "derreter-se-ia"
    },
    "partizipVergangenheit": {
      "de": "geschmolzen (er ist)",
      "lv": "derretido"
    }
  },
  {
    "infinitiv": {
      "de": "schnauben",
      "lv": "bufar"
    },
    "praesens": {
      "de": "er schnaubt",
      "lv": "ele bufa"
    },
    "imperfektIndikativ": {
      "de": "schnaubte / schnob",
      "lv": "ele bufou"
    },
    "imperfektKonjunktiv": {
      "de": "schnaubte / schnob",
      "lv": "ele bufaria"
    },
    "partizipVergangenheit": {
      "de": "geschnaubt / geschnoben",
      "lv": "bufado"
    }
  },
  {
    "infinitiv": {
      "de": "schneiden",
      "lv": "cortar"
    },
    "praesens": {
      "de": "er schneidet",
      "lv": "ele corta"
    },
    "imperfektIndikativ": {
      "de": "er schnitt",
      "lv": "ele cortou"
    },
    "imperfektKonjunktiv": {
      "de": "er schnitte",
      "lv": "ele cortaria"
    },
    "partizipVergangenheit": {
      "de": "geschnitten",
      "lv": "cortado"
    }
  },
  {
    "infinitiv": {
      "de": "schreiben",
      "lv": "escrever"
    },
    "praesens": {
      "de": "er schreibt",
      "lv": "ele escreve"
    },
    "imperfektIndikativ": {
      "de": "er schrieb",
      "lv": "ele escreveu"
    },
    "imperfektKonjunktiv": {
      "de": "er schriebe",
      "lv": "ele escreveria"
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
      "lv": "ele grita"
    },
    "imperfektIndikativ": {
      "de": "er schrie",
      "lv": "ele gritou"
    },
    "imperfektKonjunktiv": {
      "de": "er schriee",
      "lv": "ele gritaria"
    },
    "partizipVergangenheit": {
      "de": "geschrien",
      "lv": "gritado"
    }
  },
  {
    "infinitiv": {
      "de": "schreiten",
      "lv": "andar a passo largo"
    },
    "praesens": {
      "de": "er schreitet",
      "lv": "ele anda a passo largo"
    },
    "imperfektIndikativ": {
      "de": "er schritt",
      "lv": "ele andou a passo largo"
    },
    "imperfektKonjunktiv": {
      "de": "er schritte",
      "lv": "ele andaria a passo largo"
    },
    "partizipVergangenheit": {
      "de": "geschritten (er ist)",
      "lv": "andado a passo largo"
    }
  },
  {
    "infinitiv": {
      "de": "schweigen",
      "lv": "calar-se"
    },
    "praesens": {
      "de": "er schweigt",
      "lv": "ele cala-se"
    },
    "imperfektIndikativ": {
      "de": "er schwieg",
      "lv": "ele calou-se"
    },
    "imperfektKonjunktiv": {
      "de": "er schwiege",
      "lv": "ele calar-se-ia"
    },
    "partizipVergangenheit": {
      "de": "geschwiegen",
      "lv": "calado"
    }
  },
  {
    "infinitiv": {
      "de": "schwellen",
      "lv": "inchar"
    },
    "praesens": {
      "de": "er schwillt",
      "lv": "incha"
    },
    "imperfektIndikativ": {
      "de": "er schwoll",
      "lv": "inchou"
    },
    "imperfektKonjunktiv": {
      "de": "er schwölle",
      "lv": "incharia"
    },
    "partizipVergangenheit": {
      "de": "geschwollen (er ist)",
      "lv": "inchado"
    }
  },
  {
    "infinitiv": {
      "de": "schwimmen",
      "lv": "nadar"
    },
    "praesens": {
      "de": "er schwimmt",
      "lv": "ele nada"
    },
    "imperfektIndikativ": {
      "de": "er schwamm",
      "lv": "ele nadou"
    },
    "imperfektKonjunktiv": {
      "de": "er schwömme / er schwämme",
      "lv": "ele nadaria"
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
      "lv": "desapareceu"
    },
    "imperfektKonjunktiv": {
      "de": "er schwände",
      "lv": "desapareceria"
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
      "lv": "ele agita"
    },
    "imperfektIndikativ": {
      "de": "er schwang",
      "lv": "ele agitou"
    },
    "imperfektKonjunktiv": {
      "de": "er schwänge",
      "lv": "ele agitaria"
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
      "lv": "ele jura"
    },
    "imperfektIndikativ": {
      "de": "er schwur / er schwor",
      "lv": "ele jurou"
    },
    "imperfektKonjunktiv": {
      "de": "er schwöre",
      "lv": "ele juraria"
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
      "lv": "ele vê"
    },
    "imperfektIndikativ": {
      "de": "er sah",
      "lv": "ele viu"
    },
    "imperfektKonjunktiv": {
      "de": "er sähe",
      "lv": "ele veria"
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
      "lv": "ele é"
    },
    "imperfektIndikativ": {
      "de": "war",
      "lv": "ele foi"
    },
    "imperfektKonjunktiv": {
      "de": "war",
      "lv": "ele seria"
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
      "lv": "ele envia"
    },
    "imperfektIndikativ": {
      "de": "er sandte / er sendete",
      "lv": "ele enviou"
    },
    "imperfektKonjunktiv": {
      "de": "er sendete",
      "lv": "ele enviaria"
    },
    "partizipVergangenheit": {
      "de": "gesandt / gesendet",
      "lv": "enviado"
    }
  },
  {
    "infinitiv": {
      "de": "sieden",
      "lv": "ferver"
    },
    "praesens": {
      "de": "er siedet",
      "lv": "ele ferve"
    },
    "imperfektIndikativ": {
      "de": "sott / siedete",
      "lv": "ele ferveu"
    },
    "imperfektKonjunktiv": {
      "de": "sott / siedete",
      "lv": "ele ferveria"
    },
    "partizipVergangenheit": {
      "de": "gesotten / gesiedet",
      "lv": "fervido"
    }
  },
  {
    "infinitiv": {
      "de": "singen",
      "lv": "cantar"
    },
    "praesens": {
      "de": "er singt",
      "lv": "ele canta"
    },
    "imperfektIndikativ": {
      "de": "er sang",
      "lv": "ele cantou"
    },
    "imperfektKonjunktiv": {
      "de": "er sänge",
      "lv": "ele cantaria"
    },
    "partizipVergangenheit": {
      "de": "gesungen",
      "lv": "cantado"
    }
  },
  {
    "infinitiv": {
      "de": "sinken",
      "lv": "afundar-se"
    },
    "praesens": {
      "de": "er sinkt",
      "lv": "ele afunda-se"
    },
    "imperfektIndikativ": {
      "de": "er sank",
      "lv": "ele afundou-se"
    },
    "imperfektKonjunktiv": {
      "de": "er sänke",
      "lv": "ele afundar-se-ia"
    },
    "partizipVergangenheit": {
      "de": "gesunken (er ist)",
      "lv": "afundado"
    }
  },
  {
    "infinitiv": {
      "de": "sinnen",
      "lv": "meditar"
    },
    "praesens": {
      "de": "er sinnt",
      "lv": "ele medita"
    },
    "imperfektIndikativ": {
      "de": "er sann",
      "lv": "ele meditou"
    },
    "imperfektKonjunktiv": {
      "de": "er sönne / er sänne",
      "lv": "ele meditaria"
    },
    "partizipVergangenheit": {
      "de": "gesonnen",
      "lv": "meditado"
    }
  },
  {
    "infinitiv": {
      "de": "sitzen",
      "lv": "estar sentado"
    },
    "praesens": {
      "de": "er sitzt",
      "lv": "ele está sentado"
    },
    "imperfektIndikativ": {
      "de": "er sass",
      "lv": "ele esteve sentado"
    },
    "imperfektKonjunktiv": {
      "de": "er säße",
      "lv": "ele estaria sentado"
    },
    "partizipVergangenheit": {
      "de": "gesessen",
      "lv": "estado sentado"
    }
  },
  {
    "infinitiv": {
      "de": "sollen",
      "lv": "dever"
    },
    "praesens": {
      "de": "er soll",
      "lv": "ele deve"
    },
    "imperfektIndikativ": {
      "de": "sollte",
      "lv": "ele deveu"
    },
    "imperfektKonjunktiv": {
      "de": "sollte",
      "lv": "ele deveria"
    },
    "partizipVergangenheit": {
      "de": "gesollt",
      "lv": "devido"
    }
  },
  {
    "infinitiv": {
      "de": "speien",
      "lv": "cuspir"
    },
    "praesens": {
      "de": "er speit",
      "lv": "ele cospe"
    },
    "imperfektIndikativ": {
      "de": "er spie",
      "lv": "ele cuspiu"
    },
    "imperfektKonjunktiv": {
      "de": "er spie",
      "lv": "ele cuspiria"
    },
    "partizipVergangenheit": {
      "de": "gespien",
      "lv": "cuspido"
    }
  },
  {
    "infinitiv": {
      "de": "spinnen",
      "lv": "fiar"
    },
    "praesens": {
      "de": "er spinnt",
      "lv": "ele fia"
    },
    "imperfektIndikativ": {
      "de": "er spann",
      "lv": "ele fiou"
    },
    "imperfektKonjunktiv": {
      "de": "er spönne / er spänne",
      "lv": "ele fiaria"
    },
    "partizipVergangenheit": {
      "de": "gesponnen",
      "lv": "fiado"
    }
  },
  {
    "infinitiv": {
      "de": "spleißen",
      "lv": "unir"
    },
    "praesens": {
      "de": "er spleißt",
      "lv": "ele une"
    },
    "imperfektIndikativ": {
      "de": "spliss",
      "lv": "ele uniu"
    },
    "imperfektKonjunktiv": {
      "de": "spliss",
      "lv": "ele uniria"
    },
    "partizipVergangenheit": {
      "de": "gesplissen",
      "lv": "unido"
    }
  },
  {
    "infinitiv": {
      "de": "sprechen",
      "lv": "falar"
    },
    "praesens": {
      "de": "er spricht",
      "lv": "ele fala"
    },
    "imperfektIndikativ": {
      "de": "er sprach",
      "lv": "ele falou"
    },
    "imperfektKonjunktiv": {
      "de": "er spräche",
      "lv": "ele falaria"
    },
    "partizipVergangenheit": {
      "de": "gesprochen",
      "lv": "falado"
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
      "lv": "brotou"
    },
    "imperfektKonjunktiv": {
      "de": "er sprösse",
      "lv": "brotaria"
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
      "lv": "ele salta"
    },
    "imperfektIndikativ": {
      "de": "er sprang",
      "lv": "ele saltou"
    },
    "imperfektKonjunktiv": {
      "de": "er spränge",
      "lv": "ele saltaria"
    },
    "partizipVergangenheit": {
      "de": "gesprungen (er ist)",
      "lv": "saltado"
    }
  },
  {
    "infinitiv": {
      "de": "stechen",
      "lv": "picar"
    },
    "praesens": {
      "de": "er sticht",
      "lv": "ele pica"
    },
    "imperfektIndikativ": {
      "de": "er stach",
      "lv": "ele picou"
    },
    "imperfektKonjunktiv": {
      "de": "er stäche",
      "lv": "ele picaria"
    },
    "partizipVergangenheit": {
      "de": "gestochen",
      "lv": "picado"
    }
  },
  {
    "infinitiv": {
      "de": "stecken",
      "lv": "meter / espetar"
    },
    "praesens": {
      "de": "er steckt",
      "lv": "ele mete / espeta"
    },
    "imperfektIndikativ": {
      "de": "stak / steckte",
      "lv": "ele meteu / espetou"
    },
    "imperfektKonjunktiv": {
      "de": "stak / steckte",
      "lv": "ele meteria / espetaria"
    },
    "partizipVergangenheit": {
      "de": "gesteckt",
      "lv": "metido / espetado"
    }
  },
  {
    "infinitiv": {
      "de": "stehen",
      "lv": "estar de pé"
    },
    "praesens": {
      "de": "er steht",
      "lv": "ele está de pé"
    },
    "imperfektIndikativ": {
      "de": "er stand",
      "lv": "ele esteve de pé"
    },
    "imperfektKonjunktiv": {
      "de": "er stände / er stünde",
      "lv": "ele estaria de pé"
    },
    "partizipVergangenheit": {
      "de": "gestanden",
      "lv": "estado de pé"
    }
  },
  {
    "infinitiv": {
      "de": "stehlen",
      "lv": "roubar"
    },
    "praesens": {
      "de": "er stiehlt",
      "lv": "ele rouba"
    },
    "imperfektIndikativ": {
      "de": "er stahl",
      "lv": "ele roubou"
    },
    "imperfektKonjunktiv": {
      "de": "er stöhle / er stähle",
      "lv": "ele roubaria"
    },
    "partizipVergangenheit": {
      "de": "gestohlen",
      "lv": "roubado"
    }
  },
  {
    "infinitiv": {
      "de": "steigen",
      "lv": "subir"
    },
    "praesens": {
      "de": "er steigt",
      "lv": "ele sobe"
    },
    "imperfektIndikativ": {
      "de": "er stieg",
      "lv": "ele subiu"
    },
    "imperfektKonjunktiv": {
      "de": "er stiege",
      "lv": "ele subiria"
    },
    "partizipVergangenheit": {
      "de": "gestiegen (er ist)",
      "lv": "subido"
    }
  },
  {
    "infinitiv": {
      "de": "sterben",
      "lv": "morrer"
    },
    "praesens": {
      "de": "er stirbt",
      "lv": "ele morre"
    },
    "imperfektIndikativ": {
      "de": "er starb",
      "lv": "ele morreu"
    },
    "imperfektKonjunktiv": {
      "de": "er stürbe",
      "lv": "ele morreria"
    },
    "partizipVergangenheit": {
      "de": "gestorben (er ist)",
      "lv": "morrido"
    }
  },
  {
    "infinitiv": {
      "de": "stinken",
      "lv": "cheirar mal"
    },
    "praesens": {
      "de": "es stinkt",
      "lv": "cheira mal"
    },
    "imperfektIndikativ": {
      "de": "stank",
      "lv": "cheirou mal"
    },
    "imperfektKonjunktiv": {
      "de": "stank",
      "lv": "cheiraria mal"
    },
    "partizipVergangenheit": {
      "de": "gestunken",
      "lv": "cheirado mal"
    }
  },
  {
    "infinitiv": {
      "de": "stoßen",
      "lv": "dar um empurrão"
    },
    "praesens": {
      "de": "er stößt",
      "lv": "ele dá um empurrão"
    },
    "imperfektIndikativ": {
      "de": "er stieß",
      "lv": "ele deu um empurrão"
    },
    "imperfektKonjunktiv": {
      "de": "er stieße",
      "lv": "ele daria um empurrão"
    },
    "partizipVergangenheit": {
      "de": "gestoßen",
      "lv": "dado um empurrão"
    }
  },
  {
    "infinitiv": {
      "de": "streichen",
      "lv": "pintar / riscar"
    },
    "praesens": {
      "de": "er streicht",
      "lv": "ele pinta / risca"
    },
    "imperfektIndikativ": {
      "de": "er strich",
      "lv": "ele pintou / riscou"
    },
    "imperfektKonjunktiv": {
      "de": "er striche",
      "lv": "ele pintaria / riscaria"
    },
    "partizipVergangenheit": {
      "de": "gestrichen",
      "lv": "pintado / riscado"
    }
  },
  {
    "infinitiv": {
      "de": "streiten",
      "lv": "discutir"
    },
    "praesens": {
      "de": "er streitet",
      "lv": "ele discute"
    },
    "imperfektIndikativ": {
      "de": "er stritt",
      "lv": "ele discutiu"
    },
    "imperfektKonjunktiv": {
      "de": "er stritte",
      "lv": "ele discutiria"
    },
    "partizipVergangenheit": {
      "de": "gestritten",
      "lv": "discutido"
    }
  },
  {
    "infinitiv": {
      "de": "tragen",
      "lv": "levar"
    },
    "praesens": {
      "de": "er trägt",
      "lv": "ele leva"
    },
    "imperfektIndikativ": {
      "de": "er trug",
      "lv": "ele levou"
    },
    "imperfektKonjunktiv": {
      "de": "er trüge",
      "lv": "ele levaria"
    },
    "partizipVergangenheit": {
      "de": "getragen",
      "lv": "levado"
    }
  },
  {
    "infinitiv": {
      "de": "treffen",
      "lv": "encontrar-se com"
    },
    "praesens": {
      "de": "er trifft",
      "lv": "ele encontra-se com"
    },
    "imperfektIndikativ": {
      "de": "er traf",
      "lv": "ele encontrou-se com"
    },
    "imperfektKonjunktiv": {
      "de": "er träfe",
      "lv": "ele encontrar-se-ia com"
    },
    "partizipVergangenheit": {
      "de": "getroffen",
      "lv": "encontrado com"
    }
  },
  {
    "infinitiv": {
      "de": "treiben",
      "lv": "impelir"
    },
    "praesens": {
      "de": "er treibt",
      "lv": "ele impele"
    },
    "imperfektIndikativ": {
      "de": "er trieb",
      "lv": "ele impeliu"
    },
    "imperfektKonjunktiv": {
      "de": "er triebe",
      "lv": "ele impeliria"
    },
    "partizipVergangenheit": {
      "de": "getrieben",
      "lv": "impelido"
    }
  },
  {
    "infinitiv": {
      "de": "treten",
      "lv": "dar um passo / ir"
    },
    "praesens": {
      "de": "er tritt",
      "lv": "ele dá um passo / vai"
    },
    "imperfektIndikativ": {
      "de": "er trat",
      "lv": "ele deu um passo / foi"
    },
    "imperfektKonjunktiv": {
      "de": "er träte",
      "lv": "ele daria um passo / iria"
    },
    "partizipVergangenheit": {
      "de": "getreten (er ist)",
      "lv": "dado um passo / ido"
    }
  },
  {
    "infinitiv": {
      "de": "trinken",
      "lv": "beber"
    },
    "praesens": {
      "de": "er trinkt",
      "lv": "ele bebe"
    },
    "imperfektIndikativ": {
      "de": "er trank",
      "lv": "ele bebeu"
    },
    "imperfektKonjunktiv": {
      "de": "er tränke",
      "lv": "ele beberia"
    },
    "partizipVergangenheit": {
      "de": "getrunken",
      "lv": "bebido"
    }
  },
  {
    "infinitiv": {
      "de": "trügen",
      "lv": "enganar"
    },
    "praesens": {
      "de": "er trögt",
      "lv": "ele engana"
    },
    "imperfektIndikativ": {
      "de": "er trog",
      "lv": "ele enganou"
    },
    "imperfektKonjunktiv": {
      "de": "er tröge",
      "lv": "ele enganaria"
    },
    "partizipVergangenheit": {
      "de": "getrogen",
      "lv": "enganado"
    }
  },
  {
    "infinitiv": {
      "de": "tun",
      "lv": "fazer"
    },
    "praesens": {
      "de": "er tut",
      "lv": "ele faz"
    },
    "imperfektIndikativ": {
      "de": "er tat",
      "lv": "ele fez"
    },
    "imperfektKonjunktiv": {
      "de": "er täte",
      "lv": "ele faria"
    },
    "partizipVergangenheit": {
      "de": "getan",
      "lv": "feito"
    }
  },
  {
    "infinitiv": {
      "de": "verderben",
      "lv": "estragar"
    },
    "praesens": {
      "de": "er verdirbt",
      "lv": "ele estraga"
    },
    "imperfektIndikativ": {
      "de": "er verdarb",
      "lv": "ele estragou"
    },
    "imperfektKonjunktiv": {
      "de": "er verdürbe",
      "lv": "ele estragaria"
    },
    "partizipVergangenheit": {
      "de": "verdorben",
      "lv": "estragado"
    }
  },
  {
    "infinitiv": {
      "de": "verdrießen",
      "lv": "aborrecer"
    },
    "praesens": {
      "de": "er verdrießt",
      "lv": "ele aborrece"
    },
    "imperfektIndikativ": {
      "de": "er verdross",
      "lv": "ele aborreceu"
    },
    "imperfektKonjunktiv": {
      "de": "er verdrösse",
      "lv": "ele aborreceria"
    },
    "partizipVergangenheit": {
      "de": "verdrossen",
      "lv": "aborrecido"
    }
  },
  {
    "infinitiv": {
      "de": "vergessen",
      "lv": "esquecer"
    },
    "praesens": {
      "de": "er vergisst",
      "lv": "ele esquece"
    },
    "imperfektIndikativ": {
      "de": "er vergass",
      "lv": "ele esqueceu"
    },
    "imperfektKonjunktiv": {
      "de": "er vergäße",
      "lv": "ele esqueceria"
    },
    "partizipVergangenheit": {
      "de": "vergessen",
      "lv": "esquecido"
    }
  },
  {
    "infinitiv": {
      "de": "verlieren",
      "lv": "perder"
    },
    "praesens": {
      "de": "er verliert",
      "lv": "ele perde"
    },
    "imperfektIndikativ": {
      "de": "er verlor",
      "lv": "ele perdeu"
    },
    "imperfektKonjunktiv": {
      "de": "er verlöre",
      "lv": "ele perderia"
    },
    "partizipVergangenheit": {
      "de": "verloren",
      "lv": "perdido"
    }
  },
  {
    "infinitiv": {
      "de": "wachsen",
      "lv": "crescer"
    },
    "praesens": {
      "de": "er wächst",
      "lv": "ele cresce"
    },
    "imperfektIndikativ": {
      "de": "er wuchs",
      "lv": "ele cresceu"
    },
    "imperfektKonjunktiv": {
      "de": "er wüchse",
      "lv": "ele cresceria"
    },
    "partizipVergangenheit": {
      "de": "gewachsen (er ist)",
      "lv": "crescido"
    }
  },
  {
    "infinitiv": {
      "de": "waschen",
      "lv": "lavar"
    },
    "praesens": {
      "de": "er wäscht",
      "lv": "ele lava"
    },
    "imperfektIndikativ": {
      "de": "er wusch",
      "lv": "ele lavou"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsche",
      "lv": "ele lavaria"
    },
    "partizipVergangenheit": {
      "de": "gewaschen",
      "lv": "lavado"
    }
  },
  {
    "infinitiv": {
      "de": "weben",
      "lv": "tecer"
    },
    "praesens": {
      "de": "er webt",
      "lv": "ele tece"
    },
    "imperfektIndikativ": {
      "de": "wob",
      "lv": "ele teceu"
    },
    "imperfektKonjunktiv": {
      "de": "wob",
      "lv": "ele teceria"
    },
    "partizipVergangenheit": {
      "de": "gewoben",
      "lv": "tecido"
    }
  },
  {
    "infinitiv": {
      "de": "weichen",
      "lv": "recuar"
    },
    "praesens": {
      "de": "er weicht",
      "lv": "ele recua"
    },
    "imperfektIndikativ": {
      "de": "er wich",
      "lv": "ele recuou"
    },
    "imperfektKonjunktiv": {
      "de": "er wiche",
      "lv": "ele recuaria"
    },
    "partizipVergangenheit": {
      "de": "gewichen (er ist)",
      "lv": "recuado"
    }
  },
  {
    "infinitiv": {
      "de": "weisen",
      "lv": "mostrar"
    },
    "praesens": {
      "de": "er weist",
      "lv": "ele mostra"
    },
    "imperfektIndikativ": {
      "de": "er wies",
      "lv": "ele mostrou"
    },
    "imperfektKonjunktiv": {
      "de": "er wiese",
      "lv": "ele mostraria"
    },
    "partizipVergangenheit": {
      "de": "gewiesen",
      "lv": "mostrado"
    }
  },
  {
    "infinitiv": {
      "de": "wenden",
      "lv": "girar / virar"
    },
    "praesens": {
      "de": "er wendet",
      "lv": "ele gira / vira"
    },
    "imperfektIndikativ": {
      "de": "er wandte / es wendete",
      "lv": "ele girou / virou"
    },
    "imperfektKonjunktiv": {
      "de": "er wendete",
      "lv": "ele giraria / viraria"
    },
    "partizipVergangenheit": {
      "de": "gewandt / gewendet",
      "lv": "girado / virado"
    }
  },
  {
    "infinitiv": {
      "de": "werben",
      "lv": "pedir em casamento"
    },
    "praesens": {
      "de": "er wirbt",
      "lv": "ele pede em casamento"
    },
    "imperfektIndikativ": {
      "de": "er warb",
      "lv": "ele pediu em casamento"
    },
    "imperfektKonjunktiv": {
      "de": "er würbe",
      "lv": "ele pediria em casamento"
    },
    "partizipVergangenheit": {
      "de": "geworben",
      "lv": "pedido em casamento"
    }
  },
  {
    "infinitiv": {
      "de": "werden",
      "lv": "tornar-se"
    },
    "praesens": {
      "de": "er wird",
      "lv": "ele torna-se"
    },
    "imperfektIndikativ": {
      "de": "wurde",
      "lv": "ele tornou-se"
    },
    "imperfektKonjunktiv": {
      "de": "wurde",
      "lv": "ele tornar-se-ia"
    },
    "partizipVergangenheit": {
      "de": "geworden",
      "lv": "tornado"
    }
  },
  {
    "infinitiv": {
      "de": "werfen",
      "lv": "atirar"
    },
    "praesens": {
      "de": "er wirft",
      "lv": "ele atira"
    },
    "imperfektIndikativ": {
      "de": "er warf",
      "lv": "ele atirou"
    },
    "imperfektKonjunktiv": {
      "de": "er würfe",
      "lv": "ele atiraria"
    },
    "partizipVergangenheit": {
      "de": "geworfen",
      "lv": "atirado"
    }
  },
  {
    "infinitiv": {
      "de": "wiegen",
      "lv": "pesar"
    },
    "praesens": {
      "de": "er wiegt",
      "lv": "ele pesa"
    },
    "imperfektIndikativ": {
      "de": "er wog",
      "lv": "ele pesou"
    },
    "imperfektKonjunktiv": {
      "de": "er wöge",
      "lv": "ele pesaria"
    },
    "partizipVergangenheit": {
      "de": "gewogen",
      "lv": "pesado"
    }
  },
  {
    "infinitiv": {
      "de": "winden",
      "lv": "entrelaçar"
    },
    "praesens": {
      "de": "er windet",
      "lv": "ele entrelaça"
    },
    "imperfektIndikativ": {
      "de": "er wand",
      "lv": "ele entrelaçou"
    },
    "imperfektKonjunktiv": {
      "de": "er wände",
      "lv": "ele entrelaçaria"
    },
    "partizipVergangenheit": {
      "de": "gewunden",
      "lv": "entrelaçado"
    }
  },
  {
    "infinitiv": {
      "de": "wissen",
      "lv": "saber"
    },
    "praesens": {
      "de": "er weiß",
      "lv": "ele sabe"
    },
    "imperfektIndikativ": {
      "de": "er wusste",
      "lv": "ele soube"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsste",
      "lv": "ele saberia"
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
      "lv": "ele quer"
    },
    "imperfektIndikativ": {
      "de": "wollte",
      "lv": "ele quis"
    },
    "imperfektKonjunktiv": {
      "de": "wollte",
      "lv": "ele quereria"
    },
    "partizipVergangenheit": {
      "de": "gewollt",
      "lv": "querido"
    }
  },
  {
    "infinitiv": {
      "de": "wringen",
      "lv": "torcer / espremer"
    },
    "praesens": {
      "de": "er wringt",
      "lv": "ele torce / espreme"
    },
    "imperfektIndikativ": {
      "de": "wrang",
      "lv": "ele torceu / espremeu"
    },
    "imperfektKonjunktiv": {
      "de": "wrang",
      "lv": "ele torceria / espremeria"
    },
    "partizipVergangenheit": {
      "de": "gewrungen",
      "lv": "torcido / espremido"
    }
  },
  {
    "infinitiv": {
      "de": "zeihen",
      "lv": "acusar"
    },
    "praesens": {
      "de": "er zeiht",
      "lv": "ele acusa"
    },
    "imperfektIndikativ": {
      "de": "zieh",
      "lv": "ele acusou"
    },
    "imperfektKonjunktiv": {
      "de": "zieh",
      "lv": "ele acusaria"
    },
    "partizipVergangenheit": {
      "de": "geziehen",
      "lv": "acusado"
    }
  },
  {
    "infinitiv": {
      "de": "ziehen",
      "lv": "puxar"
    },
    "praesens": {
      "de": "er zieht",
      "lv": "ele puxa"
    },
    "imperfektIndikativ": {
      "de": "er zog",
      "lv": "ele puxou"
    },
    "imperfektKonjunktiv": {
      "de": "er zöge",
      "lv": "ele puxaria"
    },
    "partizipVergangenheit": {
      "de": "gezogen",
      "lv": "puxado"
    }
  },
  {
    "infinitiv": {
      "de": "zwingen",
      "lv": "obrigar"
    },
    "praesens": {
      "de": "er zwingt",
      "lv": "ele obriga"
    },
    "imperfektIndikativ": {
      "de": "er zwang",
      "lv": "ele obrigou"
    },
    "imperfektKonjunktiv": {
      "de": "er zwänge",
      "lv": "ele obrigaria"
    },
    "partizipVergangenheit": {
      "de": "gezwungen",
      "lv": "obrigado"
    }
  },
  {
    "infinitiv": {
      "de": "empfangen",
      "lv": "receber"
    },
    "praesens": {
      "de": "er empfängt",
      "lv": "ele recebe"
    },
    "imperfektIndikativ": {
      "de": "er empfing",
      "lv": "ele recebeu"
    },
    "imperfektKonjunktiv": {
      "de": "er empfinge",
      "lv": "ele receberia"
    },
    "partizipVergangenheit": {
      "de": "empfangen",
      "lv": "recebido"
    }
  },
  {
    "infinitiv": {
      "de": "erwägen",
      "lv": "ponderar"
    },
    "praesens": {
      "de": "er erwägt",
      "lv": "ele pondera"
    },
    "imperfektIndikativ": {
      "de": "er erwog",
      "lv": "ele ponderou"
    },
    "imperfektKonjunktiv": {
      "de": "er erwöge",
      "lv": "ele ponderaria"
    },
    "partizipVergangenheit": {
      "de": "erwogen",
      "lv": "ponderado"
    }
  },
  {
    "infinitiv": {
      "de": "fechten",
      "lv": "combater"
    },
    "praesens": {
      "de": "er ficht",
      "lv": "ele combate"
    },
    "imperfektIndikativ": {
      "de": "er focht",
      "lv": "ele combateu"
    },
    "imperfektKonjunktiv": {
      "de": "er föchte",
      "lv": "ele combateria"
    },
    "partizipVergangenheit": {
      "de": "gefochten",
      "lv": "combatido"
    }
  },
  {
    "infinitiv": {
      "de": "flechten",
      "lv": "entrançar"
    },
    "praesens": {
      "de": "er flicht",
      "lv": "ele entrança"
    },
    "imperfektIndikativ": {
      "de": "er flocht",
      "lv": "ele entrançou"
    },
    "imperfektKonjunktiv": {
      "de": "er flöchte",
      "lv": "ele entrançaria"
    },
    "partizipVergangenheit": {
      "de": "geflochten",
      "lv": "entrançado"
    }
  },
  {
    "infinitiv": {
      "de": "hangen",
      "lv": "estar pendurado"
    },
    "praesens": {
      "de": "er hängt",
      "lv": "ele está pendurado"
    },
    "imperfektIndikativ": {
      "de": "er hing",
      "lv": "ele esteve pendurado"
    },
    "imperfektKonjunktiv": {
      "de": "er hinge",
      "lv": "ele estaria pendurado"
    },
    "partizipVergangenheit": {
      "de": "gehangen",
      "lv": "estado pendurado"
    }
  },
  {
    "infinitiv": {
      "de": "spalten",
      "lv": "rachar"
    },
    "praesens": {
      "de": "er spaltet",
      "lv": "ele racha"
    },
    "imperfektIndikativ": {
      "de": "er spaltete",
      "lv": "ele rachou"
    },
    "imperfektKonjunktiv": {
      "de": "er spaltete",
      "lv": "ele racharia"
    },
    "partizipVergangenheit": {
      "de": "gespalten",
      "lv": "rachado"
    }
  },
  {
    "infinitiv": {
      "de": "verzeihen",
      "lv": "perdoar"
    },
    "praesens": {
      "de": "er verzeiht",
      "lv": "ele perdoa"
    },
    "imperfektIndikativ": {
      "de": "er verzieh",
      "lv": "ele perdoou"
    },
    "imperfektKonjunktiv": {
      "de": "er verziehe",
      "lv": "ele perdoaria"
    },
    "partizipVergangenheit": {
      "de": "verziehen",
      "lv": "perdoado"
    }
  }
];

window.VERB_ENTRIES = VERB_ENTRIES;

const VERB_ENTRIES = [
  {
    "infinitiv": {
      "de": "backen",
      "lv": "a coace"
    },
    "praesens": {
      "de": "er bäckt",
      "lv": "el coace"
    },
    "imperfektIndikativ": {
      "de": "er buk",
      "lv": "el coapse"
    },
    "imperfektKonjunktiv": {
      "de": "er büke",
      "lv": "el ar coace"
    },
    "partizipVergangenheit": {
      "de": "gebacken",
      "lv": "copt"
    }
  },
  {
    "infinitiv": {
      "de": "befehlen",
      "lv": "a ordona"
    },
    "praesens": {
      "de": "er befiehlt",
      "lv": "el ordonă"
    },
    "imperfektIndikativ": {
      "de": "er befahl",
      "lv": "el ordonă"
    },
    "imperfektKonjunktiv": {
      "de": "er beföhle",
      "lv": "el ar ordona"
    },
    "partizipVergangenheit": {
      "de": "befohlen",
      "lv": "ordonat"
    }
  },
  {
    "infinitiv": {
      "de": "beginnen",
      "lv": "a începe"
    },
    "praesens": {
      "de": "er beginnt",
      "lv": "el începe"
    },
    "imperfektIndikativ": {
      "de": "er begann",
      "lv": "el începu"
    },
    "imperfektKonjunktiv": {
      "de": "er begönne / er begänne",
      "lv": "el ar începe"
    },
    "partizipVergangenheit": {
      "de": "begonnen",
      "lv": "început"
    }
  },
  {
    "infinitiv": {
      "de": "beißen",
      "lv": "a mușca"
    },
    "praesens": {
      "de": "er beißt",
      "lv": "el mușcă"
    },
    "imperfektIndikativ": {
      "de": "er biss",
      "lv": "el mușcă"
    },
    "imperfektKonjunktiv": {
      "de": "er bisse",
      "lv": "el ar mușca"
    },
    "partizipVergangenheit": {
      "de": "gebissen",
      "lv": "mușcat"
    }
  },
  {
    "infinitiv": {
      "de": "bergen",
      "lv": "a salva / a ascunde"
    },
    "praesens": {
      "de": "er birgt",
      "lv": "el salvează / ascunde"
    },
    "imperfektIndikativ": {
      "de": "er barg",
      "lv": "el salvă / ascunse"
    },
    "imperfektKonjunktiv": {
      "de": "er bürge / er bärge",
      "lv": "el ar salva / ar ascunde"
    },
    "partizipVergangenheit": {
      "de": "geborgen",
      "lv": "salvat / ascuns"
    }
  },
  {
    "infinitiv": {
      "de": "bersten",
      "lv": "a crăpa"
    },
    "praesens": {
      "de": "er birst",
      "lv": "crapă"
    },
    "imperfektIndikativ": {
      "de": "er barst / er borst",
      "lv": "crăpă"
    },
    "imperfektKonjunktiv": {
      "de": "er bärste / er börste",
      "lv": "ar crăpa"
    },
    "partizipVergangenheit": {
      "de": "geborsten (er ist)",
      "lv": "crăpat"
    }
  },
  {
    "infinitiv": {
      "de": "bewegen",
      "lv": "a îndemna"
    },
    "praesens": {
      "de": "er bewegt",
      "lv": "el îndeamnă"
    },
    "imperfektIndikativ": {
      "de": "er bewog",
      "lv": "el îndemnă"
    },
    "imperfektKonjunktiv": {
      "de": "er bewöge",
      "lv": "el ar îndemna"
    },
    "partizipVergangenheit": {
      "de": "bewogen",
      "lv": "îndemnat"
    }
  },
  {
    "infinitiv": {
      "de": "biegen",
      "lv": "a îndoi"
    },
    "praesens": {
      "de": "er biegt",
      "lv": "el îndoaie"
    },
    "imperfektIndikativ": {
      "de": "er bog",
      "lv": "el îndoi"
    },
    "imperfektKonjunktiv": {
      "de": "er böge",
      "lv": "el ar îndoi"
    },
    "partizipVergangenheit": {
      "de": "gebogen",
      "lv": "îndoit"
    }
  },
  {
    "infinitiv": {
      "de": "bieten",
      "lv": "a oferi"
    },
    "praesens": {
      "de": "er bietet",
      "lv": "el oferă"
    },
    "imperfektIndikativ": {
      "de": "er bot",
      "lv": "el oferi"
    },
    "imperfektKonjunktiv": {
      "de": "er böte",
      "lv": "el ar oferi"
    },
    "partizipVergangenheit": {
      "de": "geboten",
      "lv": "oferit"
    }
  },
  {
    "infinitiv": {
      "de": "binden",
      "lv": "a lega"
    },
    "praesens": {
      "de": "er bindet",
      "lv": "el leagă"
    },
    "imperfektIndikativ": {
      "de": "er band",
      "lv": "el legă"
    },
    "imperfektKonjunktiv": {
      "de": "er bände",
      "lv": "el ar lega"
    },
    "partizipVergangenheit": {
      "de": "gebunden",
      "lv": "legat"
    }
  },
  {
    "infinitiv": {
      "de": "bitten",
      "lv": "a ruga"
    },
    "praesens": {
      "de": "er bittet",
      "lv": "el roagă"
    },
    "imperfektIndikativ": {
      "de": "er bat",
      "lv": "el rugă"
    },
    "imperfektKonjunktiv": {
      "de": "er bäte",
      "lv": "el ar ruga"
    },
    "partizipVergangenheit": {
      "de": "gebeten",
      "lv": "rugat"
    }
  },
  {
    "infinitiv": {
      "de": "blasen",
      "lv": "a sufla"
    },
    "praesens": {
      "de": "er bläst",
      "lv": "el suflă"
    },
    "imperfektIndikativ": {
      "de": "er blies",
      "lv": "el suflă"
    },
    "imperfektKonjunktiv": {
      "de": "er bliese",
      "lv": "el ar sufla"
    },
    "partizipVergangenheit": {
      "de": "geblasen",
      "lv": "suflat"
    }
  },
  {
    "infinitiv": {
      "de": "gären",
      "lv": "a fermenta"
    },
    "praesens": {
      "de": "es gärt",
      "lv": "fermentează"
    },
    "imperfektIndikativ": {
      "de": "es gor / es gärte",
      "lv": "fermentă"
    },
    "imperfektKonjunktiv": {
      "de": "es göre / es gärte",
      "lv": "ar fermenta"
    },
    "partizipVergangenheit": {
      "de": "gegoren / gegärt",
      "lv": "fermentat"
    }
  },
  {
    "infinitiv": {
      "de": "gebären",
      "lv": "a naște"
    },
    "praesens": {
      "de": "sie gebiert",
      "lv": "ea naște"
    },
    "imperfektIndikativ": {
      "de": "sie gebar",
      "lv": "ea născu"
    },
    "imperfektKonjunktiv": {
      "de": "sie gebäre",
      "lv": "ea ar naște"
    },
    "partizipVergangenheit": {
      "de": "geboren",
      "lv": "născut"
    }
  },
  {
    "infinitiv": {
      "de": "gelingen",
      "lv": "a reuși"
    },
    "praesens": {
      "de": "es gelingt",
      "lv": "reușește"
    },
    "imperfektIndikativ": {
      "de": "es gelang",
      "lv": "reuși"
    },
    "imperfektKonjunktiv": {
      "de": "es gelänge",
      "lv": "ar reuși"
    },
    "partizipVergangenheit": {
      "de": "gelungen (es ist)",
      "lv": "reușit"
    }
  },
  {
    "infinitiv": {
      "de": "gelten",
      "lv": "a servi / a fi valabil"
    },
    "praesens": {
      "de": "er gilt",
      "lv": "el servește / este valabil"
    },
    "imperfektIndikativ": {
      "de": "er galt",
      "lv": "el servi / fu valabil"
    },
    "imperfektKonjunktiv": {
      "de": "er gölte / es gälte",
      "lv": "el ar servi / ar fi valabil"
    },
    "partizipVergangenheit": {
      "de": "gegolten",
      "lv": "servit / fost valabil"
    }
  },
  {
    "infinitiv": {
      "de": "genesen",
      "lv": "a se însănătoși"
    },
    "praesens": {
      "de": "er genest",
      "lv": "el se însănătoșește"
    },
    "imperfektIndikativ": {
      "de": "er genas",
      "lv": "el se însănătoși"
    },
    "imperfektKonjunktiv": {
      "de": "er genäse",
      "lv": "el s-ar însănătoși"
    },
    "partizipVergangenheit": {
      "de": "genesen (er ist)",
      "lv": "însănătoșit"
    }
  },
  {
    "infinitiv": {
      "de": "genießen",
      "lv": "a savura"
    },
    "praesens": {
      "de": "er genießt",
      "lv": "el savurează"
    },
    "imperfektIndikativ": {
      "de": "er genoss",
      "lv": "el savură"
    },
    "imperfektKonjunktiv": {
      "de": "er genösse",
      "lv": "el ar savura"
    },
    "partizipVergangenheit": {
      "de": "genossen",
      "lv": "savurat"
    }
  },
  {
    "infinitiv": {
      "de": "geschehen",
      "lv": "a se întâmpla"
    },
    "praesens": {
      "de": "es geschieht",
      "lv": "se întâmplă"
    },
    "imperfektIndikativ": {
      "de": "es geschah",
      "lv": "se întâmplă"
    },
    "imperfektKonjunktiv": {
      "de": "es geschähe",
      "lv": "s-ar întâmpla"
    },
    "partizipVergangenheit": {
      "de": "geschehen (es ist)",
      "lv": "întâmplat"
    }
  },
  {
    "infinitiv": {
      "de": "gießen",
      "lv": "a turna"
    },
    "praesens": {
      "de": "er gießt",
      "lv": "el toarnă"
    },
    "imperfektIndikativ": {
      "de": "er goss",
      "lv": "el turnă"
    },
    "imperfektKonjunktiv": {
      "de": "er gösse",
      "lv": "el ar turna"
    },
    "partizipVergangenheit": {
      "de": "gegossen",
      "lv": "turnat"
    }
  },
  {
    "infinitiv": {
      "de": "gleichen",
      "lv": "a semăna"
    },
    "praesens": {
      "de": "er gleicht",
      "lv": "el seamănă"
    },
    "imperfektIndikativ": {
      "de": "er glich",
      "lv": "el semănă"
    },
    "imperfektKonjunktiv": {
      "de": "er gliche",
      "lv": "el ar semăna"
    },
    "partizipVergangenheit": {
      "de": "geglichen",
      "lv": "semănat"
    }
  },
  {
    "infinitiv": {
      "de": "gleiten",
      "lv": "a aluneca"
    },
    "praesens": {
      "de": "er gleitet",
      "lv": "el alunecă"
    },
    "imperfektIndikativ": {
      "de": "er glitt",
      "lv": "el alunecă"
    },
    "imperfektKonjunktiv": {
      "de": "er glitte",
      "lv": "el ar aluneca"
    },
    "partizipVergangenheit": {
      "de": "geglitten (er ist)",
      "lv": "alunecat"
    }
  },
  {
    "infinitiv": {
      "de": "glimmen",
      "lv": "a mocni"
    },
    "praesens": {
      "de": "er glimmt",
      "lv": "mocnește"
    },
    "imperfektIndikativ": {
      "de": "er glimmte / glomm",
      "lv": "mocni"
    },
    "imperfektKonjunktiv": {
      "de": "er glimmte",
      "lv": "ar mocni"
    },
    "partizipVergangenheit": {
      "de": "geglimmt / geglommen",
      "lv": "mocnit"
    }
  },
  {
    "infinitiv": {
      "de": "graben",
      "lv": "a săpa"
    },
    "praesens": {
      "de": "er gräbt",
      "lv": "el sapă"
    },
    "imperfektIndikativ": {
      "de": "er grub",
      "lv": "el săpă"
    },
    "imperfektKonjunktiv": {
      "de": "er grübe",
      "lv": "el ar săpa"
    },
    "partizipVergangenheit": {
      "de": "gegraben",
      "lv": "săpat"
    }
  },
  {
    "infinitiv": {
      "de": "greifen",
      "lv": "a apuca"
    },
    "praesens": {
      "de": "er greift",
      "lv": "el apucă"
    },
    "imperfektIndikativ": {
      "de": "er griff",
      "lv": "el apucă"
    },
    "imperfektKonjunktiv": {
      "de": "er griffe",
      "lv": "el ar apuca"
    },
    "partizipVergangenheit": {
      "de": "gegriffen",
      "lv": "apucat"
    }
  },
  {
    "infinitiv": {
      "de": "hauen",
      "lv": "a doborî"
    },
    "praesens": {
      "de": "er haut",
      "lv": "el doboară"
    },
    "imperfektIndikativ": {
      "de": "er hieb",
      "lv": "el doborî"
    },
    "imperfektKonjunktiv": {
      "de": "er hiebe",
      "lv": "el ar doborî"
    },
    "partizipVergangenheit": {
      "de": "gehauen",
      "lv": "doborât"
    }
  },
  {
    "infinitiv": {
      "de": "heben",
      "lv": "a ridica"
    },
    "praesens": {
      "de": "er hebt",
      "lv": "el ridică"
    },
    "imperfektIndikativ": {
      "de": "er hob",
      "lv": "el ridică"
    },
    "imperfektKonjunktiv": {
      "de": "er höbe",
      "lv": "el ar ridica"
    },
    "partizipVergangenheit": {
      "de": "gehoben",
      "lv": "ridicat"
    }
  },
  {
    "infinitiv": {
      "de": "kennen",
      "lv": "a cunoaște / a ști"
    },
    "praesens": {
      "de": "er kennt",
      "lv": "el cunoaște / știe"
    },
    "imperfektIndikativ": {
      "de": "kannte",
      "lv": "el cunoscu / știu"
    },
    "imperfektKonjunktiv": {
      "de": "kannte",
      "lv": "el ar cunoaște / ar ști"
    },
    "partizipVergangenheit": {
      "de": "gekannt",
      "lv": "cunoscut / știut"
    }
  },
  {
    "infinitiv": {
      "de": "klingen",
      "lv": "a suna"
    },
    "praesens": {
      "de": "er klingt",
      "lv": "sună"
    },
    "imperfektIndikativ": {
      "de": "er klang",
      "lv": "sună"
    },
    "imperfektKonjunktiv": {
      "de": "er klänge",
      "lv": "ar suna"
    },
    "partizipVergangenheit": {
      "de": "geklungen",
      "lv": "sunat"
    }
  },
  {
    "infinitiv": {
      "de": "kneifen",
      "lv": "a ciupi"
    },
    "praesens": {
      "de": "er kneift",
      "lv": "el ciupește"
    },
    "imperfektIndikativ": {
      "de": "er kniff",
      "lv": "el ciupi"
    },
    "imperfektKonjunktiv": {
      "de": "er kniffe",
      "lv": "el ar ciupi"
    },
    "partizipVergangenheit": {
      "de": "gekniffen",
      "lv": "ciupit"
    }
  },
  {
    "infinitiv": {
      "de": "bleiben",
      "lv": "a rămâne"
    },
    "praesens": {
      "de": "er bleibt",
      "lv": "el rămâne"
    },
    "imperfektIndikativ": {
      "de": "er blieb",
      "lv": "el rămase"
    },
    "imperfektKonjunktiv": {
      "de": "er bliebe",
      "lv": "el ar rămâne"
    },
    "partizipVergangenheit": {
      "de": "geblieben (er ist)",
      "lv": "rămas"
    }
  },
  {
    "infinitiv": {
      "de": "bleichen",
      "lv": "a se decolora"
    },
    "praesens": {
      "de": "er bleicht",
      "lv": "se decolorează"
    },
    "imperfektIndikativ": {
      "de": "blich",
      "lv": "se decoloră"
    },
    "imperfektKonjunktiv": {
      "de": "blich",
      "lv": "s-ar decolora"
    },
    "partizipVergangenheit": {
      "de": "geblichen",
      "lv": "decolorat"
    }
  },
  {
    "infinitiv": {
      "de": "braten",
      "lv": "a prăji"
    },
    "praesens": {
      "de": "er brät",
      "lv": "el prăjește"
    },
    "imperfektIndikativ": {
      "de": "er briet",
      "lv": "el prăji"
    },
    "imperfektKonjunktiv": {
      "de": "er briete",
      "lv": "el ar prăji"
    },
    "partizipVergangenheit": {
      "de": "gebraten",
      "lv": "prăjit"
    }
  },
  {
    "infinitiv": {
      "de": "brechen",
      "lv": "a rupe"
    },
    "praesens": {
      "de": "er bricht",
      "lv": "el rupe"
    },
    "imperfektIndikativ": {
      "de": "er brach",
      "lv": "el rupse"
    },
    "imperfektKonjunktiv": {
      "de": "er bräche",
      "lv": "el ar rupe"
    },
    "partizipVergangenheit": {
      "de": "gebrochen",
      "lv": "rupt"
    }
  },
  {
    "infinitiv": {
      "de": "brennen",
      "lv": "a arde"
    },
    "praesens": {
      "de": "er brennt",
      "lv": "arde"
    },
    "imperfektIndikativ": {
      "de": "brannte",
      "lv": "arse"
    },
    "imperfektKonjunktiv": {
      "de": "brannte",
      "lv": "ar arde"
    },
    "partizipVergangenheit": {
      "de": "gebrannt",
      "lv": "ars"
    }
  },
  {
    "infinitiv": {
      "de": "bringen",
      "lv": "a aduce"
    },
    "praesens": {
      "de": "er bringt",
      "lv": "el aduce"
    },
    "imperfektIndikativ": {
      "de": "er brachte",
      "lv": "el aduse"
    },
    "imperfektKonjunktiv": {
      "de": "er brächte",
      "lv": "el ar aduce"
    },
    "partizipVergangenheit": {
      "de": "gebracht",
      "lv": "adus"
    }
  },
  {
    "infinitiv": {
      "de": "denken",
      "lv": "a gândi"
    },
    "praesens": {
      "de": "er denkt",
      "lv": "el gândește"
    },
    "imperfektIndikativ": {
      "de": "er dachte",
      "lv": "el gândi"
    },
    "imperfektKonjunktiv": {
      "de": "er dächte",
      "lv": "el ar gândi"
    },
    "partizipVergangenheit": {
      "de": "gedacht",
      "lv": "gândit"
    }
  },
  {
    "infinitiv": {
      "de": "dingen",
      "lv": "a angaja / a se învoi"
    },
    "praesens": {
      "de": "er dingt",
      "lv": "el angajează / se învoiește"
    },
    "imperfektIndikativ": {
      "de": "dingte",
      "lv": "el angajă / se învoi"
    },
    "imperfektKonjunktiv": {
      "de": "dingte",
      "lv": "el ar angaja / s-ar învoi"
    },
    "partizipVergangenheit": {
      "de": "gedungen",
      "lv": "angajat / învoit"
    }
  },
  {
    "infinitiv": {
      "de": "dreschen",
      "lv": "a treiera"
    },
    "praesens": {
      "de": "er drischt",
      "lv": "el treieră"
    },
    "imperfektIndikativ": {
      "de": "er drasch / er drosch",
      "lv": "el treieră"
    },
    "imperfektKonjunktiv": {
      "de": "er dräsche / er drösche",
      "lv": "el ar treiera"
    },
    "partizipVergangenheit": {
      "de": "gedroschen",
      "lv": "treierat"
    }
  },
  {
    "infinitiv": {
      "de": "dringen",
      "lv": "a pătrunde"
    },
    "praesens": {
      "de": "er dringt",
      "lv": "el pătrunde"
    },
    "imperfektIndikativ": {
      "de": "er drang",
      "lv": "el pătrunse"
    },
    "imperfektKonjunktiv": {
      "de": "er dränge",
      "lv": "el ar pătrunde"
    },
    "partizipVergangenheit": {
      "de": "gedrungen (er ist)",
      "lv": "pătruns"
    }
  },
  {
    "infinitiv": {
      "de": "dünken",
      "lv": "a părea"
    },
    "praesens": {
      "de": "es dünkt",
      "lv": "pare"
    },
    "imperfektIndikativ": {
      "de": "deuchte",
      "lv": "păru"
    },
    "imperfektKonjunktiv": {
      "de": "deuchte",
      "lv": "ar părea"
    },
    "partizipVergangenheit": {
      "de": "gedünkt",
      "lv": "părut"
    }
  },
  {
    "infinitiv": {
      "de": "dürfen",
      "lv": "a avea voie"
    },
    "praesens": {
      "de": "er darf",
      "lv": "el are voie"
    },
    "imperfektIndikativ": {
      "de": "durfte",
      "lv": "el avu voie"
    },
    "imperfektKonjunktiv": {
      "de": "durfte",
      "lv": "el ar avea voie"
    },
    "partizipVergangenheit": {
      "de": "gedurft",
      "lv": "avut voie"
    }
  },
  {
    "infinitiv": {
      "de": "empfehlen",
      "lv": "a recomanda"
    },
    "praesens": {
      "de": "er empfiehlt",
      "lv": "el recomandă"
    },
    "imperfektIndikativ": {
      "de": "er empfahl",
      "lv": "el recomandă"
    },
    "imperfektKonjunktiv": {
      "de": "er empfähle / er empföhle",
      "lv": "el ar recomanda"
    },
    "partizipVergangenheit": {
      "de": "empfohlen",
      "lv": "recomandat"
    }
  },
  {
    "infinitiv": {
      "de": "empfinden",
      "lv": "a simți"
    },
    "praesens": {
      "de": "er empfindet",
      "lv": "el simte"
    },
    "imperfektIndikativ": {
      "de": "er empfand",
      "lv": "el simți"
    },
    "imperfektKonjunktiv": {
      "de": "er empfände",
      "lv": "el ar simți"
    },
    "partizipVergangenheit": {
      "de": "empfunden",
      "lv": "simțit"
    }
  },
  {
    "infinitiv": {
      "de": "erlöschen",
      "lv": "a se stinge"
    },
    "praesens": {
      "de": "er erlischt",
      "lv": "se stinge"
    },
    "imperfektIndikativ": {
      "de": "er erlosch",
      "lv": "se stinse"
    },
    "imperfektKonjunktiv": {
      "de": "er erlösche",
      "lv": "s-ar stinge"
    },
    "partizipVergangenheit": {
      "de": "erloschen (er ist)",
      "lv": "stins"
    }
  },
  {
    "infinitiv": {
      "de": "erschrecken",
      "lv": "a se speria"
    },
    "praesens": {
      "de": "er erschrickt",
      "lv": "el se sperie"
    },
    "imperfektIndikativ": {
      "de": "er erschrak",
      "lv": "el se sperie"
    },
    "imperfektKonjunktiv": {
      "de": "er erschräke",
      "lv": "el s-ar speria"
    },
    "partizipVergangenheit": {
      "de": "erschrocken (er ist)",
      "lv": "speriat"
    }
  },
  {
    "infinitiv": {
      "de": "essen",
      "lv": "a mânca"
    },
    "praesens": {
      "de": "er isst",
      "lv": "el mănâncă"
    },
    "imperfektIndikativ": {
      "de": "er ass",
      "lv": "el mâncă"
    },
    "imperfektKonjunktiv": {
      "de": "er äße",
      "lv": "el ar mânca"
    },
    "partizipVergangenheit": {
      "de": "gegessen",
      "lv": "mâncat"
    }
  },
  {
    "infinitiv": {
      "de": "fahren",
      "lv": "a conduce"
    },
    "praesens": {
      "de": "er fährt",
      "lv": "el conduce"
    },
    "imperfektIndikativ": {
      "de": "er fuhr",
      "lv": "el conduse"
    },
    "imperfektKonjunktiv": {
      "de": "er führe",
      "lv": "el ar conduce"
    },
    "partizipVergangenheit": {
      "de": "gefahren (er ist)",
      "lv": "condus"
    }
  },
  {
    "infinitiv": {
      "de": "fallen",
      "lv": "a cădea"
    },
    "praesens": {
      "de": "er fällt",
      "lv": "el cade"
    },
    "imperfektIndikativ": {
      "de": "er fiel",
      "lv": "el căzu"
    },
    "imperfektKonjunktiv": {
      "de": "er fiele",
      "lv": "el ar cădea"
    },
    "partizipVergangenheit": {
      "de": "gefallen (er ist)",
      "lv": "căzut"
    }
  },
  {
    "infinitiv": {
      "de": "fangen",
      "lv": "a prinde"
    },
    "praesens": {
      "de": "er fängt",
      "lv": "el prinde"
    },
    "imperfektIndikativ": {
      "de": "er fing",
      "lv": "el prinse"
    },
    "imperfektKonjunktiv": {
      "de": "er finge",
      "lv": "el ar prinde"
    },
    "partizipVergangenheit": {
      "de": "gefangen",
      "lv": "prins"
    }
  },
  {
    "infinitiv": {
      "de": "finden",
      "lv": "a găsi"
    },
    "praesens": {
      "de": "er findet",
      "lv": "el găsește"
    },
    "imperfektIndikativ": {
      "de": "er fand",
      "lv": "el găsi"
    },
    "imperfektKonjunktiv": {
      "de": "er fände",
      "lv": "el ar găsi"
    },
    "partizipVergangenheit": {
      "de": "gefunden",
      "lv": "găsit"
    }
  },
  {
    "infinitiv": {
      "de": "fliegen",
      "lv": "a zbura"
    },
    "praesens": {
      "de": "er fliegt",
      "lv": "el zboară"
    },
    "imperfektIndikativ": {
      "de": "er flog",
      "lv": "el zbură"
    },
    "imperfektKonjunktiv": {
      "de": "er flöge",
      "lv": "el ar zbura"
    },
    "partizipVergangenheit": {
      "de": "geflogen (er ist)",
      "lv": "zburat"
    }
  },
  {
    "infinitiv": {
      "de": "fliehen",
      "lv": "a fugi"
    },
    "praesens": {
      "de": "er flieht",
      "lv": "el fuge"
    },
    "imperfektIndikativ": {
      "de": "er floh",
      "lv": "el fugi"
    },
    "imperfektKonjunktiv": {
      "de": "er flöhe",
      "lv": "el ar fugi"
    },
    "partizipVergangenheit": {
      "de": "geflohen (er ist)",
      "lv": "fugit"
    }
  },
  {
    "infinitiv": {
      "de": "fließen",
      "lv": "a curge"
    },
    "praesens": {
      "de": "er fließt",
      "lv": "curge"
    },
    "imperfektIndikativ": {
      "de": "er floss",
      "lv": "curse"
    },
    "imperfektKonjunktiv": {
      "de": "er flösse",
      "lv": "ar curge"
    },
    "partizipVergangenheit": {
      "de": "geflossen (er ist)",
      "lv": "curs"
    }
  },
  {
    "infinitiv": {
      "de": "fressen",
      "lv": "a mânca / a devora"
    },
    "praesens": {
      "de": "er frisst",
      "lv": "el mănâncă / devorează"
    },
    "imperfektIndikativ": {
      "de": "er frass",
      "lv": "el mâncă / devoră"
    },
    "imperfektKonjunktiv": {
      "de": "er fräße",
      "lv": "el ar mânca / ar devora"
    },
    "partizipVergangenheit": {
      "de": "gefressen",
      "lv": "mâncat / devorat"
    }
  },
  {
    "infinitiv": {
      "de": "frieren",
      "lv": "a îngheța"
    },
    "praesens": {
      "de": "er friert",
      "lv": "el îngheață"
    },
    "imperfektIndikativ": {
      "de": "er fror",
      "lv": "el îngheță"
    },
    "imperfektKonjunktiv": {
      "de": "er fröre",
      "lv": "el ar îngheța"
    },
    "partizipVergangenheit": {
      "de": "gefroren",
      "lv": "înghețat"
    }
  },
  {
    "infinitiv": {
      "de": "geben",
      "lv": "a da"
    },
    "praesens": {
      "de": "er gibt",
      "lv": "el dă"
    },
    "imperfektIndikativ": {
      "de": "er gab",
      "lv": "el dădu"
    },
    "imperfektKonjunktiv": {
      "de": "er gäbe",
      "lv": "el ar da"
    },
    "partizipVergangenheit": {
      "de": "gegeben",
      "lv": "dat"
    }
  },
  {
    "infinitiv": {
      "de": "gedeihen",
      "lv": "a prospera"
    },
    "praesens": {
      "de": "er gedeiht",
      "lv": "el prosperă"
    },
    "imperfektIndikativ": {
      "de": "er gedieh",
      "lv": "el prosperă"
    },
    "imperfektKonjunktiv": {
      "de": "er gediehe",
      "lv": "el ar prospera"
    },
    "partizipVergangenheit": {
      "de": "gediehen (er ist)",
      "lv": "prosperat"
    }
  },
  {
    "infinitiv": {
      "de": "gehen",
      "lv": "a merge"
    },
    "praesens": {
      "de": "er geht",
      "lv": "el merge"
    },
    "imperfektIndikativ": {
      "de": "er ging",
      "lv": "el merse"
    },
    "imperfektKonjunktiv": {
      "de": "er ginge",
      "lv": "el ar merge"
    },
    "partizipVergangenheit": {
      "de": "gegangen (er ist)",
      "lv": "mers"
    }
  },
  {
    "infinitiv": {
      "de": "gewinnen",
      "lv": "a obține"
    },
    "praesens": {
      "de": "er gewinnt",
      "lv": "el obține"
    },
    "imperfektIndikativ": {
      "de": "er gewann",
      "lv": "el obținu"
    },
    "imperfektKonjunktiv": {
      "de": "er gewönne / er gewänne",
      "lv": "el ar obține"
    },
    "partizipVergangenheit": {
      "de": "gewonnen",
      "lv": "obținut"
    }
  },
  {
    "infinitiv": {
      "de": "haben",
      "lv": "a avea"
    },
    "praesens": {
      "de": "er hat",
      "lv": "el are"
    },
    "imperfektIndikativ": {
      "de": "hatte",
      "lv": "el avu"
    },
    "imperfektKonjunktiv": {
      "de": "hatte",
      "lv": "el ar avea"
    },
    "partizipVergangenheit": {
      "de": "gehabt",
      "lv": "avut"
    }
  },
  {
    "infinitiv": {
      "de": "halten",
      "lv": "a ține"
    },
    "praesens": {
      "de": "er hält",
      "lv": "el ține"
    },
    "imperfektIndikativ": {
      "de": "er hielt",
      "lv": "el ținu"
    },
    "imperfektKonjunktiv": {
      "de": "er hielte",
      "lv": "el ar ține"
    },
    "partizipVergangenheit": {
      "de": "gehalten",
      "lv": "ținut"
    }
  },
  {
    "infinitiv": {
      "de": "heißen",
      "lv": "a chema / a se numi"
    },
    "praesens": {
      "de": "er heißt",
      "lv": "el cheamă / se numește"
    },
    "imperfektIndikativ": {
      "de": "er hieß",
      "lv": "el chemă / se numi"
    },
    "imperfektKonjunktiv": {
      "de": "er hieße",
      "lv": "el ar chema / s-ar numi"
    },
    "partizipVergangenheit": {
      "de": "geheißen",
      "lv": "chemat / numit"
    }
  },
  {
    "infinitiv": {
      "de": "helfen",
      "lv": "a ajuta"
    },
    "praesens": {
      "de": "er hilft",
      "lv": "el ajută"
    },
    "imperfektIndikativ": {
      "de": "er half",
      "lv": "el ajută"
    },
    "imperfektKonjunktiv": {
      "de": "er hülfe / er hälfe",
      "lv": "el ar ajuta"
    },
    "partizipVergangenheit": {
      "de": "geholfen",
      "lv": "ajutat"
    }
  },
  {
    "infinitiv": {
      "de": "kommen",
      "lv": "a veni"
    },
    "praesens": {
      "de": "er kommt",
      "lv": "el vine"
    },
    "imperfektIndikativ": {
      "de": "er kam",
      "lv": "el veni"
    },
    "imperfektKonjunktiv": {
      "de": "er käme",
      "lv": "el ar veni"
    },
    "partizipVergangenheit": {
      "de": "gekommen (er ist)",
      "lv": "venit"
    }
  },
  {
    "infinitiv": {
      "de": "können",
      "lv": "a putea"
    },
    "praesens": {
      "de": "er kann",
      "lv": "el poate"
    },
    "imperfektIndikativ": {
      "de": "konnte",
      "lv": "el putu"
    },
    "imperfektKonjunktiv": {
      "de": "konnte",
      "lv": "el ar putea"
    },
    "partizipVergangenheit": {
      "de": "gekonnt",
      "lv": "putut"
    }
  },
  {
    "infinitiv": {
      "de": "kriechen",
      "lv": "a se târî"
    },
    "praesens": {
      "de": "er kriecht",
      "lv": "el se târăște"
    },
    "imperfektIndikativ": {
      "de": "er kroch",
      "lv": "el se târî"
    },
    "imperfektKonjunktiv": {
      "de": "er kröche",
      "lv": "el s-ar târî"
    },
    "partizipVergangenheit": {
      "de": "gekrochen (er ist)",
      "lv": "târât"
    }
  },
  {
    "infinitiv": {
      "de": "laden",
      "lv": "a încărca / a invita"
    },
    "praesens": {
      "de": "er lädt",
      "lv": "el încarcă / invită"
    },
    "imperfektIndikativ": {
      "de": "er lud",
      "lv": "el încărcă / invită"
    },
    "imperfektKonjunktiv": {
      "de": "er lüde",
      "lv": "el ar încărca / ar invita"
    },
    "partizipVergangenheit": {
      "de": "geladen",
      "lv": "încărcat / invitat"
    }
  },
  {
    "infinitiv": {
      "de": "lassen",
      "lv": "a face / a lăsa"
    },
    "praesens": {
      "de": "er lässt",
      "lv": "el face / lasă"
    },
    "imperfektIndikativ": {
      "de": "er ließ",
      "lv": "el făcu / lăsă"
    },
    "imperfektKonjunktiv": {
      "de": "er ließe",
      "lv": "el ar face / ar lăsa"
    },
    "partizipVergangenheit": {
      "de": "gelassen",
      "lv": "făcut / lăsat"
    }
  },
  {
    "infinitiv": {
      "de": "laufen",
      "lv": "a alerga"
    },
    "praesens": {
      "de": "er läuft",
      "lv": "el aleargă"
    },
    "imperfektIndikativ": {
      "de": "er lief",
      "lv": "el alergă"
    },
    "imperfektKonjunktiv": {
      "de": "er liefe",
      "lv": "el ar alerga"
    },
    "partizipVergangenheit": {
      "de": "gelaufen (er ist)",
      "lv": "alergat"
    }
  },
  {
    "infinitiv": {
      "de": "leiden",
      "lv": "a suferi"
    },
    "praesens": {
      "de": "er leidet",
      "lv": "el suferă"
    },
    "imperfektIndikativ": {
      "de": "er litt",
      "lv": "el suferi"
    },
    "imperfektKonjunktiv": {
      "de": "er litte",
      "lv": "el ar suferi"
    },
    "partizipVergangenheit": {
      "de": "gelitten",
      "lv": "suferit"
    }
  },
  {
    "infinitiv": {
      "de": "leihen",
      "lv": "a da cu împrumut / a lua cu împrumut"
    },
    "praesens": {
      "de": "er leiht",
      "lv": "el dă cu împrumut / ia cu împrumut"
    },
    "imperfektIndikativ": {
      "de": "er lieh",
      "lv": "el dădu cu împrumut / luă cu împrumut"
    },
    "imperfektKonjunktiv": {
      "de": "er liehe",
      "lv": "el ar da cu împrumut / ar lua cu împrumut"
    },
    "partizipVergangenheit": {
      "de": "geliehen",
      "lv": "dat cu împrumut / luat cu împrumut"
    }
  },
  {
    "infinitiv": {
      "de": "lesen",
      "lv": "a citi"
    },
    "praesens": {
      "de": "er liest",
      "lv": "el citește"
    },
    "imperfektIndikativ": {
      "de": "er las",
      "lv": "el citi"
    },
    "imperfektKonjunktiv": {
      "de": "er läse",
      "lv": "el ar citi"
    },
    "partizipVergangenheit": {
      "de": "gelesen",
      "lv": "citit"
    }
  },
  {
    "infinitiv": {
      "de": "liegen",
      "lv": "a sta întins"
    },
    "praesens": {
      "de": "er liegt",
      "lv": "el stă întins"
    },
    "imperfektIndikativ": {
      "de": "er lag",
      "lv": "el stătu întins"
    },
    "imperfektKonjunktiv": {
      "de": "er läge",
      "lv": "el ar sta întins"
    },
    "partizipVergangenheit": {
      "de": "gelegen",
      "lv": "stat întins"
    }
  },
  {
    "infinitiv": {
      "de": "lügen",
      "lv": "a minți"
    },
    "praesens": {
      "de": "er lügt",
      "lv": "el minte"
    },
    "imperfektIndikativ": {
      "de": "er log",
      "lv": "el minți"
    },
    "imperfektKonjunktiv": {
      "de": "er löge",
      "lv": "el ar minți"
    },
    "partizipVergangenheit": {
      "de": "gelogen",
      "lv": "mințit"
    }
  },
  {
    "infinitiv": {
      "de": "mahlen",
      "lv": "a măcina"
    },
    "praesens": {
      "de": "er mahlt",
      "lv": "el macină"
    },
    "imperfektIndikativ": {
      "de": "er mahlte",
      "lv": "el măcină"
    },
    "imperfektKonjunktiv": {
      "de": "er malte",
      "lv": "el ar măcina"
    },
    "partizipVergangenheit": {
      "de": "gemahlen",
      "lv": "măcinat"
    }
  },
  {
    "infinitiv": {
      "de": "meiden",
      "lv": "a evita"
    },
    "praesens": {
      "de": "er meidet",
      "lv": "el evită"
    },
    "imperfektIndikativ": {
      "de": "er mied",
      "lv": "el evită"
    },
    "imperfektKonjunktiv": {
      "de": "er miede",
      "lv": "el ar evita"
    },
    "partizipVergangenheit": {
      "de": "gemieden",
      "lv": "evitat"
    }
  },
  {
    "infinitiv": {
      "de": "melken",
      "lv": "a mulge"
    },
    "praesens": {
      "de": "er milkt / er melkt",
      "lv": "el mulge"
    },
    "imperfektIndikativ": {
      "de": "er molk / er melkte",
      "lv": "el mulse"
    },
    "imperfektKonjunktiv": {
      "de": "er mölke / er melkte",
      "lv": "el ar mulge"
    },
    "partizipVergangenheit": {
      "de": "gemolken / gemelkt",
      "lv": "muls"
    }
  },
  {
    "infinitiv": {
      "de": "messen",
      "lv": "a măsura"
    },
    "praesens": {
      "de": "er misst",
      "lv": "el măsoară"
    },
    "imperfektIndikativ": {
      "de": "er mass",
      "lv": "el măsură"
    },
    "imperfektKonjunktiv": {
      "de": "er mäße",
      "lv": "el ar măsura"
    },
    "partizipVergangenheit": {
      "de": "gemessen",
      "lv": "măsurat"
    }
  },
  {
    "infinitiv": {
      "de": "misslingen",
      "lv": "a eșua"
    },
    "praesens": {
      "de": "es misslingt",
      "lv": "eșuează"
    },
    "imperfektIndikativ": {
      "de": "misslang",
      "lv": "eșuă"
    },
    "imperfektKonjunktiv": {
      "de": "misslang",
      "lv": "ar eșua"
    },
    "partizipVergangenheit": {
      "de": "misslungen",
      "lv": "eșuat"
    }
  },
  {
    "infinitiv": {
      "de": "mögen",
      "lv": "a plăcea"
    },
    "praesens": {
      "de": "er mag",
      "lv": "îi place"
    },
    "imperfektIndikativ": {
      "de": "mochte",
      "lv": "îi plăcu"
    },
    "imperfektKonjunktiv": {
      "de": "mochte",
      "lv": "i-ar plăcea"
    },
    "partizipVergangenheit": {
      "de": "gemocht",
      "lv": "plăcut"
    }
  },
  {
    "infinitiv": {
      "de": "müssen",
      "lv": "a trebui"
    },
    "praesens": {
      "de": "er muss",
      "lv": "el trebuie"
    },
    "imperfektIndikativ": {
      "de": "musste",
      "lv": "el trebui"
    },
    "imperfektKonjunktiv": {
      "de": "musste",
      "lv": "el ar trebui"
    },
    "partizipVergangenheit": {
      "de": "gemusst",
      "lv": "trebuit"
    }
  },
  {
    "infinitiv": {
      "de": "nehmen",
      "lv": "a lua"
    },
    "praesens": {
      "de": "er nimmt",
      "lv": "el ia"
    },
    "imperfektIndikativ": {
      "de": "er nahm",
      "lv": "el luă"
    },
    "imperfektKonjunktiv": {
      "de": "er nähme",
      "lv": "el ar lua"
    },
    "partizipVergangenheit": {
      "de": "genommen",
      "lv": "luat"
    }
  },
  {
    "infinitiv": {
      "de": "nennen",
      "lv": "a numi"
    },
    "praesens": {
      "de": "er nennt",
      "lv": "el numește"
    },
    "imperfektIndikativ": {
      "de": "er nannte",
      "lv": "el numi"
    },
    "imperfektKonjunktiv": {
      "de": "er nennte",
      "lv": "el ar numi"
    },
    "partizipVergangenheit": {
      "de": "genannt",
      "lv": "numit"
    }
  },
  {
    "infinitiv": {
      "de": "pfeifen",
      "lv": "a fluiera"
    },
    "praesens": {
      "de": "er pfeift",
      "lv": "el fluieră"
    },
    "imperfektIndikativ": {
      "de": "er pfiff",
      "lv": "el fluieră"
    },
    "imperfektKonjunktiv": {
      "de": "er pfiffe",
      "lv": "el ar fluiera"
    },
    "partizipVergangenheit": {
      "de": "gepfiffen",
      "lv": "fluierat"
    }
  },
  {
    "infinitiv": {
      "de": "pflegen",
      "lv": "a îngriji"
    },
    "praesens": {
      "de": "er pflegt",
      "lv": "el îngrijește"
    },
    "imperfektIndikativ": {
      "de": "pflegte / pflog",
      "lv": "el îngriji"
    },
    "imperfektKonjunktiv": {
      "de": "pflegte / pflog",
      "lv": "el ar îngriji"
    },
    "partizipVergangenheit": {
      "de": "gepflegt / gepflogen",
      "lv": "îngrijit"
    }
  },
  {
    "infinitiv": {
      "de": "preisen",
      "lv": "a lăuda"
    },
    "praesens": {
      "de": "er preist",
      "lv": "el laudă"
    },
    "imperfektIndikativ": {
      "de": "er pries",
      "lv": "el lăudă"
    },
    "imperfektKonjunktiv": {
      "de": "er priese",
      "lv": "el ar lăuda"
    },
    "partizipVergangenheit": {
      "de": "gepriesen",
      "lv": "lăudat"
    }
  },
  {
    "infinitiv": {
      "de": "quellen",
      "lv": "a se umfla"
    },
    "praesens": {
      "de": "er quillt",
      "lv": "se umflă"
    },
    "imperfektIndikativ": {
      "de": "er quoll",
      "lv": "se umflă"
    },
    "imperfektKonjunktiv": {
      "de": "er quölle",
      "lv": "s-ar umfla"
    },
    "partizipVergangenheit": {
      "de": "gequollen (er ist)",
      "lv": "umflat"
    }
  },
  {
    "infinitiv": {
      "de": "raten",
      "lv": "a sfătui / a ghici"
    },
    "praesens": {
      "de": "er rät",
      "lv": "el sfătuiește / ghicește"
    },
    "imperfektIndikativ": {
      "de": "er riet",
      "lv": "el sfătui / ghici"
    },
    "imperfektKonjunktiv": {
      "de": "er riete",
      "lv": "el ar sfătui / ar ghici"
    },
    "partizipVergangenheit": {
      "de": "geraten",
      "lv": "sfătuit / ghicit"
    }
  },
  {
    "infinitiv": {
      "de": "reiben",
      "lv": "a freca"
    },
    "praesens": {
      "de": "er reibt",
      "lv": "el freacă"
    },
    "imperfektIndikativ": {
      "de": "er rieb",
      "lv": "el frecă"
    },
    "imperfektKonjunktiv": {
      "de": "er riebe",
      "lv": "el ar freca"
    },
    "partizipVergangenheit": {
      "de": "gerieben",
      "lv": "frecat"
    }
  },
  {
    "infinitiv": {
      "de": "reißen",
      "lv": "a smulge"
    },
    "praesens": {
      "de": "er reißt",
      "lv": "el smulge"
    },
    "imperfektIndikativ": {
      "de": "er riss",
      "lv": "el smulse"
    },
    "imperfektKonjunktiv": {
      "de": "er risse",
      "lv": "el ar smulge"
    },
    "partizipVergangenheit": {
      "de": "gerissen",
      "lv": "smuls"
    }
  },
  {
    "infinitiv": {
      "de": "reiten",
      "lv": "a călări"
    },
    "praesens": {
      "de": "er reitet",
      "lv": "el călărește"
    },
    "imperfektIndikativ": {
      "de": "er ritt",
      "lv": "el călări"
    },
    "imperfektKonjunktiv": {
      "de": "er ritte",
      "lv": "el ar călări"
    },
    "partizipVergangenheit": {
      "de": "geritten (er ist)",
      "lv": "călărit"
    }
  },
  {
    "infinitiv": {
      "de": "rennen",
      "lv": "a alerga"
    },
    "praesens": {
      "de": "er rennt",
      "lv": "el aleargă"
    },
    "imperfektIndikativ": {
      "de": "er rannte",
      "lv": "el alergă"
    },
    "imperfektKonjunktiv": {
      "de": "er rennte",
      "lv": "el ar alerga"
    },
    "partizipVergangenheit": {
      "de": "gerannt",
      "lv": "alergat"
    }
  },
  {
    "infinitiv": {
      "de": "riechen",
      "lv": "a mirosi"
    },
    "praesens": {
      "de": "er riecht",
      "lv": "el miroase"
    },
    "imperfektIndikativ": {
      "de": "er roch",
      "lv": "el mirosi"
    },
    "imperfektKonjunktiv": {
      "de": "er röche",
      "lv": "el ar mirosi"
    },
    "partizipVergangenheit": {
      "de": "gerochen",
      "lv": "mirosit"
    }
  },
  {
    "infinitiv": {
      "de": "ringen",
      "lv": "a se lupta"
    },
    "praesens": {
      "de": "er ringt",
      "lv": "el se luptă"
    },
    "imperfektIndikativ": {
      "de": "er rang",
      "lv": "el se luptă"
    },
    "imperfektKonjunktiv": {
      "de": "er ränge",
      "lv": "el s-ar lupta"
    },
    "partizipVergangenheit": {
      "de": "gerungen",
      "lv": "luptat"
    }
  },
  {
    "infinitiv": {
      "de": "rinnen",
      "lv": "a se scurge"
    },
    "praesens": {
      "de": "er rinnt",
      "lv": "se scurge"
    },
    "imperfektIndikativ": {
      "de": "er rann",
      "lv": "se scurse"
    },
    "imperfektKonjunktiv": {
      "de": "er ränne / er rönne",
      "lv": "s-ar scurge"
    },
    "partizipVergangenheit": {
      "de": "geronnen (er ist)",
      "lv": "scurs"
    }
  },
  {
    "infinitiv": {
      "de": "rufen",
      "lv": "a chema"
    },
    "praesens": {
      "de": "er ruft",
      "lv": "el cheamă"
    },
    "imperfektIndikativ": {
      "de": "er rief",
      "lv": "el chemă"
    },
    "imperfektKonjunktiv": {
      "de": "er riefe",
      "lv": "el ar chema"
    },
    "partizipVergangenheit": {
      "de": "gerufen",
      "lv": "chemat"
    }
  },
  {
    "infinitiv": {
      "de": "salzen",
      "lv": "a săra"
    },
    "praesens": {
      "de": "er salzt",
      "lv": "el sărează"
    },
    "imperfektIndikativ": {
      "de": "er salzte",
      "lv": "el sără"
    },
    "imperfektKonjunktiv": {
      "de": "er salzte",
      "lv": "el ar săra"
    },
    "partizipVergangenheit": {
      "de": "gesalzen",
      "lv": "sărat"
    }
  },
  {
    "infinitiv": {
      "de": "saufen",
      "lv": "a se îmbăta / a bea"
    },
    "praesens": {
      "de": "er säuft",
      "lv": "el se îmbată / bea"
    },
    "imperfektIndikativ": {
      "de": "er soff",
      "lv": "el se îmbătă / bău"
    },
    "imperfektKonjunktiv": {
      "de": "er söffe",
      "lv": "el s-ar îmbăta / ar bea"
    },
    "partizipVergangenheit": {
      "de": "gesoffen",
      "lv": "îmbătat / băut"
    }
  },
  {
    "infinitiv": {
      "de": "saugen",
      "lv": "a suge"
    },
    "praesens": {
      "de": "er saugt",
      "lv": "el suge"
    },
    "imperfektIndikativ": {
      "de": "er sog",
      "lv": "el supse"
    },
    "imperfektKonjunktiv": {
      "de": "er söge",
      "lv": "el ar suge"
    },
    "partizipVergangenheit": {
      "de": "gesogen",
      "lv": "supt"
    }
  },
  {
    "infinitiv": {
      "de": "schaffen",
      "lv": "a crea"
    },
    "praesens": {
      "de": "er schafft",
      "lv": "el creează"
    },
    "imperfektIndikativ": {
      "de": "er schuf",
      "lv": "el creă"
    },
    "imperfektKonjunktiv": {
      "de": "er schüfe",
      "lv": "el ar crea"
    },
    "partizipVergangenheit": {
      "de": "geschaffen",
      "lv": "creat"
    }
  },
  {
    "infinitiv": {
      "de": "schallen",
      "lv": "a răsuna"
    },
    "praesens": {
      "de": "es schallt",
      "lv": "răsună"
    },
    "imperfektIndikativ": {
      "de": "schallte / scholl",
      "lv": "răsună"
    },
    "imperfektKonjunktiv": {
      "de": "schallte / scholl",
      "lv": "ar răsuna"
    },
    "partizipVergangenheit": {
      "de": "geschallt",
      "lv": "răsunat"
    }
  },
  {
    "infinitiv": {
      "de": "scheiden",
      "lv": "a despărți / a se despărți"
    },
    "praesens": {
      "de": "er scheidet",
      "lv": "el desparte / se desparte"
    },
    "imperfektIndikativ": {
      "de": "er schied",
      "lv": "el despărți / se despărți"
    },
    "imperfektKonjunktiv": {
      "de": "er schiede",
      "lv": "el ar despărți / s-ar despărți"
    },
    "partizipVergangenheit": {
      "de": "geschieden (er hat / er ist)",
      "lv": "despărțit / despărțit"
    }
  },
  {
    "infinitiv": {
      "de": "scheinen",
      "lv": "a străluci / a părea"
    },
    "praesens": {
      "de": "er scheint",
      "lv": "el strălucește / pare"
    },
    "imperfektIndikativ": {
      "de": "er schien",
      "lv": "el străluci / păru"
    },
    "imperfektKonjunktiv": {
      "de": "er schiene",
      "lv": "el ar străluci / ar părea"
    },
    "partizipVergangenheit": {
      "de": "geschienen",
      "lv": "strălucit / părut"
    }
  },
  {
    "infinitiv": {
      "de": "schelten",
      "lv": "a certa"
    },
    "praesens": {
      "de": "er schilt",
      "lv": "el ceartă"
    },
    "imperfektIndikativ": {
      "de": "er schalt",
      "lv": "el certă"
    },
    "imperfektKonjunktiv": {
      "de": "er schölte / er schälte",
      "lv": "el ar certa"
    },
    "partizipVergangenheit": {
      "de": "gescholten",
      "lv": "certat"
    }
  },
  {
    "infinitiv": {
      "de": "scheren",
      "lv": "a tunde"
    },
    "praesens": {
      "de": "er schert",
      "lv": "el tunde"
    },
    "imperfektIndikativ": {
      "de": "schor / scherte",
      "lv": "el tunse"
    },
    "imperfektKonjunktiv": {
      "de": "schor / scherte",
      "lv": "el ar tunde"
    },
    "partizipVergangenheit": {
      "de": "geschoren / geschert",
      "lv": "tuns"
    }
  },
  {
    "infinitiv": {
      "de": "schieben",
      "lv": "a împinge"
    },
    "praesens": {
      "de": "er schiebt",
      "lv": "el împinge"
    },
    "imperfektIndikativ": {
      "de": "er schob",
      "lv": "el împinse"
    },
    "imperfektKonjunktiv": {
      "de": "er schöbe",
      "lv": "el ar împinge"
    },
    "partizipVergangenheit": {
      "de": "geschoben",
      "lv": "împins"
    }
  },
  {
    "infinitiv": {
      "de": "schießen",
      "lv": "a trage cu arma"
    },
    "praesens": {
      "de": "er schießt",
      "lv": "el trage cu arma"
    },
    "imperfektIndikativ": {
      "de": "er schoss",
      "lv": "el trase cu arma"
    },
    "imperfektKonjunktiv": {
      "de": "er schösse",
      "lv": "el ar trage cu arma"
    },
    "partizipVergangenheit": {
      "de": "geschossen",
      "lv": "tras cu arma"
    }
  },
  {
    "infinitiv": {
      "de": "schinden",
      "lv": "a chinui"
    },
    "praesens": {
      "de": "er schindet",
      "lv": "el chinuie"
    },
    "imperfektIndikativ": {
      "de": "schindete",
      "lv": "el chinui"
    },
    "imperfektKonjunktiv": {
      "de": "schindete",
      "lv": "el ar chinui"
    },
    "partizipVergangenheit": {
      "de": "geschunden",
      "lv": "chinuit"
    }
  },
  {
    "infinitiv": {
      "de": "schlafen",
      "lv": "a dormi"
    },
    "praesens": {
      "de": "er schläft",
      "lv": "el doarme"
    },
    "imperfektIndikativ": {
      "de": "er schlief",
      "lv": "el dormi"
    },
    "imperfektKonjunktiv": {
      "de": "er schliefe",
      "lv": "el ar dormi"
    },
    "partizipVergangenheit": {
      "de": "geschlafen",
      "lv": "dormit"
    }
  },
  {
    "infinitiv": {
      "de": "schlagen",
      "lv": "a lovi"
    },
    "praesens": {
      "de": "er schlägt",
      "lv": "el lovește"
    },
    "imperfektIndikativ": {
      "de": "er schlug",
      "lv": "el lovi"
    },
    "imperfektKonjunktiv": {
      "de": "er schlüge",
      "lv": "el ar lovi"
    },
    "partizipVergangenheit": {
      "de": "geschlagen",
      "lv": "lovit"
    }
  },
  {
    "infinitiv": {
      "de": "schleichen",
      "lv": "a se furișa"
    },
    "praesens": {
      "de": "er schleicht",
      "lv": "el se furișează"
    },
    "imperfektIndikativ": {
      "de": "er schlich",
      "lv": "el se furișă"
    },
    "imperfektKonjunktiv": {
      "de": "er schliche",
      "lv": "el s-ar furișa"
    },
    "partizipVergangenheit": {
      "de": "geschlichen (er ist)",
      "lv": "furișat"
    }
  },
  {
    "infinitiv": {
      "de": "schleifen",
      "lv": "a șlefui"
    },
    "praesens": {
      "de": "er schleift",
      "lv": "el șlefuiește"
    },
    "imperfektIndikativ": {
      "de": "er schliff",
      "lv": "el șlefui"
    },
    "imperfektKonjunktiv": {
      "de": "er schliffe",
      "lv": "el ar șlefui"
    },
    "partizipVergangenheit": {
      "de": "geschliffen",
      "lv": "șlefuit"
    }
  },
  {
    "infinitiv": {
      "de": "schließen",
      "lv": "a închide"
    },
    "praesens": {
      "de": "er schließt",
      "lv": "el închide"
    },
    "imperfektIndikativ": {
      "de": "er schloss",
      "lv": "el închise"
    },
    "imperfektKonjunktiv": {
      "de": "er schlösse",
      "lv": "el ar închide"
    },
    "partizipVergangenheit": {
      "de": "geschlossen",
      "lv": "închis"
    }
  },
  {
    "infinitiv": {
      "de": "schlingen",
      "lv": "a înghiți"
    },
    "praesens": {
      "de": "er schlingt",
      "lv": "el înghite"
    },
    "imperfektIndikativ": {
      "de": "er schlang",
      "lv": "el înghiți"
    },
    "imperfektKonjunktiv": {
      "de": "er schlänge",
      "lv": "el ar înghiți"
    },
    "partizipVergangenheit": {
      "de": "geschlungen",
      "lv": "înghițit"
    }
  },
  {
    "infinitiv": {
      "de": "schmeißen",
      "lv": "a azvârli"
    },
    "praesens": {
      "de": "er schmeißt",
      "lv": "el azvârle"
    },
    "imperfektIndikativ": {
      "de": "er schmiss",
      "lv": "el azvârli"
    },
    "imperfektKonjunktiv": {
      "de": "er schmisse",
      "lv": "el ar azvârli"
    },
    "partizipVergangenheit": {
      "de": "geschmissen",
      "lv": "azvârlit"
    }
  },
  {
    "infinitiv": {
      "de": "schmelzen",
      "lv": "a se topi"
    },
    "praesens": {
      "de": "er schmilzt",
      "lv": "se topește"
    },
    "imperfektIndikativ": {
      "de": "er schmolz",
      "lv": "se topi"
    },
    "imperfektKonjunktiv": {
      "de": "er schmölze",
      "lv": "s-ar topi"
    },
    "partizipVergangenheit": {
      "de": "geschmolzen (er ist)",
      "lv": "topit"
    }
  },
  {
    "infinitiv": {
      "de": "schnauben",
      "lv": "a pufni"
    },
    "praesens": {
      "de": "er schnaubt",
      "lv": "el pufnește"
    },
    "imperfektIndikativ": {
      "de": "schnaubte / schnob",
      "lv": "el pufni"
    },
    "imperfektKonjunktiv": {
      "de": "schnaubte / schnob",
      "lv": "el ar pufni"
    },
    "partizipVergangenheit": {
      "de": "geschnaubt / geschnoben",
      "lv": "pufnit"
    }
  },
  {
    "infinitiv": {
      "de": "schneiden",
      "lv": "a tăia"
    },
    "praesens": {
      "de": "er schneidet",
      "lv": "el taie"
    },
    "imperfektIndikativ": {
      "de": "er schnitt",
      "lv": "el tăie"
    },
    "imperfektKonjunktiv": {
      "de": "er schnitte",
      "lv": "el ar tăia"
    },
    "partizipVergangenheit": {
      "de": "geschnitten",
      "lv": "tăiat"
    }
  },
  {
    "infinitiv": {
      "de": "schreiben",
      "lv": "a scrie"
    },
    "praesens": {
      "de": "er schreibt",
      "lv": "el scrie"
    },
    "imperfektIndikativ": {
      "de": "er schrieb",
      "lv": "el scrise"
    },
    "imperfektKonjunktiv": {
      "de": "er schriebe",
      "lv": "el ar scrie"
    },
    "partizipVergangenheit": {
      "de": "geschrieben",
      "lv": "scris"
    }
  },
  {
    "infinitiv": {
      "de": "schreien",
      "lv": "a striga"
    },
    "praesens": {
      "de": "er schreit",
      "lv": "el strigă"
    },
    "imperfektIndikativ": {
      "de": "er schrie",
      "lv": "el strigă"
    },
    "imperfektKonjunktiv": {
      "de": "er schriee",
      "lv": "el ar striga"
    },
    "partizipVergangenheit": {
      "de": "geschrien",
      "lv": "strigat"
    }
  },
  {
    "infinitiv": {
      "de": "schreiten",
      "lv": "a păși"
    },
    "praesens": {
      "de": "er schreitet",
      "lv": "el pășește"
    },
    "imperfektIndikativ": {
      "de": "er schritt",
      "lv": "el păși"
    },
    "imperfektKonjunktiv": {
      "de": "er schritte",
      "lv": "el ar păși"
    },
    "partizipVergangenheit": {
      "de": "geschritten (er ist)",
      "lv": "pășit"
    }
  },
  {
    "infinitiv": {
      "de": "schweigen",
      "lv": "a tăcea"
    },
    "praesens": {
      "de": "er schweigt",
      "lv": "el tace"
    },
    "imperfektIndikativ": {
      "de": "er schwieg",
      "lv": "el tăcu"
    },
    "imperfektKonjunktiv": {
      "de": "er schwiege",
      "lv": "el ar tăcea"
    },
    "partizipVergangenheit": {
      "de": "geschwiegen",
      "lv": "tăcut"
    }
  },
  {
    "infinitiv": {
      "de": "schwellen",
      "lv": "a se umfla"
    },
    "praesens": {
      "de": "er schwillt",
      "lv": "se umflă"
    },
    "imperfektIndikativ": {
      "de": "er schwoll",
      "lv": "se umflă"
    },
    "imperfektKonjunktiv": {
      "de": "er schwölle",
      "lv": "s-ar umfla"
    },
    "partizipVergangenheit": {
      "de": "geschwollen (er ist)",
      "lv": "umflat"
    }
  },
  {
    "infinitiv": {
      "de": "schwimmen",
      "lv": "a înota"
    },
    "praesens": {
      "de": "er schwimmt",
      "lv": "el înoată"
    },
    "imperfektIndikativ": {
      "de": "er schwamm",
      "lv": "el înotă"
    },
    "imperfektKonjunktiv": {
      "de": "er schwömme / er schwämme",
      "lv": "el ar înota"
    },
    "partizipVergangenheit": {
      "de": "geschwommen (er ist)",
      "lv": "înotat"
    }
  },
  {
    "infinitiv": {
      "de": "schwinden",
      "lv": "a dispărea"
    },
    "praesens": {
      "de": "er schwindet",
      "lv": "dispare"
    },
    "imperfektIndikativ": {
      "de": "er schwand",
      "lv": "dispăru"
    },
    "imperfektKonjunktiv": {
      "de": "er schwände",
      "lv": "ar dispărea"
    },
    "partizipVergangenheit": {
      "de": "geschwunden (er ist)",
      "lv": "dispărut"
    }
  },
  {
    "infinitiv": {
      "de": "schwingen",
      "lv": "a flutura"
    },
    "praesens": {
      "de": "er schwingt",
      "lv": "el flutură"
    },
    "imperfektIndikativ": {
      "de": "er schwang",
      "lv": "el flutură"
    },
    "imperfektKonjunktiv": {
      "de": "er schwänge",
      "lv": "el ar flutura"
    },
    "partizipVergangenheit": {
      "de": "geschwungen",
      "lv": "fluturat"
    }
  },
  {
    "infinitiv": {
      "de": "schwören",
      "lv": "a jura"
    },
    "praesens": {
      "de": "er schwört",
      "lv": "el jură"
    },
    "imperfektIndikativ": {
      "de": "er schwur / er schwor",
      "lv": "el jură"
    },
    "imperfektKonjunktiv": {
      "de": "er schwöre",
      "lv": "el ar jura"
    },
    "partizipVergangenheit": {
      "de": "geschworen",
      "lv": "jurat"
    }
  },
  {
    "infinitiv": {
      "de": "sehen",
      "lv": "a vedea"
    },
    "praesens": {
      "de": "er sieht",
      "lv": "el vede"
    },
    "imperfektIndikativ": {
      "de": "er sah",
      "lv": "el văzu"
    },
    "imperfektKonjunktiv": {
      "de": "er sähe",
      "lv": "el ar vedea"
    },
    "partizipVergangenheit": {
      "de": "gesehen",
      "lv": "văzut"
    }
  },
  {
    "infinitiv": {
      "de": "sein",
      "lv": "a fi"
    },
    "praesens": {
      "de": "er ist",
      "lv": "el este"
    },
    "imperfektIndikativ": {
      "de": "war",
      "lv": "el fu"
    },
    "imperfektKonjunktiv": {
      "de": "war",
      "lv": "el ar fi"
    },
    "partizipVergangenheit": {
      "de": "gewesen",
      "lv": "fost"
    }
  },
  {
    "infinitiv": {
      "de": "senden",
      "lv": "a trimite"
    },
    "praesens": {
      "de": "er sendet",
      "lv": "el trimite"
    },
    "imperfektIndikativ": {
      "de": "er sandte / er sendete",
      "lv": "el trimise"
    },
    "imperfektKonjunktiv": {
      "de": "er sendete",
      "lv": "el ar trimite"
    },
    "partizipVergangenheit": {
      "de": "gesandt / gesendet",
      "lv": "trimis"
    }
  },
  {
    "infinitiv": {
      "de": "sieden",
      "lv": "a fierbe"
    },
    "praesens": {
      "de": "er siedet",
      "lv": "el fierbe"
    },
    "imperfektIndikativ": {
      "de": "sott / siedete",
      "lv": "el fierse"
    },
    "imperfektKonjunktiv": {
      "de": "sott / siedete",
      "lv": "el ar fierbe"
    },
    "partizipVergangenheit": {
      "de": "gesotten / gesiedet",
      "lv": "fiert"
    }
  },
  {
    "infinitiv": {
      "de": "singen",
      "lv": "a cânta"
    },
    "praesens": {
      "de": "er singt",
      "lv": "el cântă"
    },
    "imperfektIndikativ": {
      "de": "er sang",
      "lv": "el cântă"
    },
    "imperfektKonjunktiv": {
      "de": "er sänge",
      "lv": "el ar cânta"
    },
    "partizipVergangenheit": {
      "de": "gesungen",
      "lv": "cântat"
    }
  },
  {
    "infinitiv": {
      "de": "sinken",
      "lv": "a se scufunda"
    },
    "praesens": {
      "de": "er sinkt",
      "lv": "el se scufundă"
    },
    "imperfektIndikativ": {
      "de": "er sank",
      "lv": "el se scufundă"
    },
    "imperfektKonjunktiv": {
      "de": "er sänke",
      "lv": "el s-ar scufunda"
    },
    "partizipVergangenheit": {
      "de": "gesunken (er ist)",
      "lv": "scufundat"
    }
  },
  {
    "infinitiv": {
      "de": "sinnen",
      "lv": "a reflecta"
    },
    "praesens": {
      "de": "er sinnt",
      "lv": "el reflectează"
    },
    "imperfektIndikativ": {
      "de": "er sann",
      "lv": "el reflectă"
    },
    "imperfektKonjunktiv": {
      "de": "er sönne / er sänne",
      "lv": "el ar reflecta"
    },
    "partizipVergangenheit": {
      "de": "gesonnen",
      "lv": "reflectat"
    }
  },
  {
    "infinitiv": {
      "de": "sitzen",
      "lv": "a ședea"
    },
    "praesens": {
      "de": "er sitzt",
      "lv": "el șade"
    },
    "imperfektIndikativ": {
      "de": "er sass",
      "lv": "el șezu"
    },
    "imperfektKonjunktiv": {
      "de": "er säße",
      "lv": "el ar ședea"
    },
    "partizipVergangenheit": {
      "de": "gesessen",
      "lv": "șezut"
    }
  },
  {
    "infinitiv": {
      "de": "sollen",
      "lv": "a trebui"
    },
    "praesens": {
      "de": "er soll",
      "lv": "el trebuie"
    },
    "imperfektIndikativ": {
      "de": "sollte",
      "lv": "el trebui"
    },
    "imperfektKonjunktiv": {
      "de": "sollte",
      "lv": "el ar trebui"
    },
    "partizipVergangenheit": {
      "de": "gesollt",
      "lv": "trebuit"
    }
  },
  {
    "infinitiv": {
      "de": "speien",
      "lv": "a scuipa"
    },
    "praesens": {
      "de": "er speit",
      "lv": "el scuipă"
    },
    "imperfektIndikativ": {
      "de": "er spie",
      "lv": "el scuipă"
    },
    "imperfektKonjunktiv": {
      "de": "er spie",
      "lv": "el ar scuipa"
    },
    "partizipVergangenheit": {
      "de": "gespien",
      "lv": "scuipat"
    }
  },
  {
    "infinitiv": {
      "de": "spinnen",
      "lv": "a toarce"
    },
    "praesens": {
      "de": "er spinnt",
      "lv": "el toarce"
    },
    "imperfektIndikativ": {
      "de": "er spann",
      "lv": "el toarse"
    },
    "imperfektKonjunktiv": {
      "de": "er spönne / er spänne",
      "lv": "el ar toarce"
    },
    "partizipVergangenheit": {
      "de": "gesponnen",
      "lv": "tors"
    }
  },
  {
    "infinitiv": {
      "de": "spleißen",
      "lv": "a îmbina"
    },
    "praesens": {
      "de": "er spleißt",
      "lv": "el îmbină"
    },
    "imperfektIndikativ": {
      "de": "spliss",
      "lv": "el îmbină"
    },
    "imperfektKonjunktiv": {
      "de": "spliss",
      "lv": "el ar îmbina"
    },
    "partizipVergangenheit": {
      "de": "gesplissen",
      "lv": "îmbinat"
    }
  },
  {
    "infinitiv": {
      "de": "sprechen",
      "lv": "a vorbi"
    },
    "praesens": {
      "de": "er spricht",
      "lv": "el vorbește"
    },
    "imperfektIndikativ": {
      "de": "er sprach",
      "lv": "el vorbi"
    },
    "imperfektKonjunktiv": {
      "de": "er spräche",
      "lv": "el ar vorbi"
    },
    "partizipVergangenheit": {
      "de": "gesprochen",
      "lv": "vorbit"
    }
  },
  {
    "infinitiv": {
      "de": "sprießen",
      "lv": "a încolți"
    },
    "praesens": {
      "de": "er sprießt",
      "lv": "încolțește"
    },
    "imperfektIndikativ": {
      "de": "er spross",
      "lv": "încolți"
    },
    "imperfektKonjunktiv": {
      "de": "er sprösse",
      "lv": "ar încolți"
    },
    "partizipVergangenheit": {
      "de": "gesprossen (er ist)",
      "lv": "încolțit"
    }
  },
  {
    "infinitiv": {
      "de": "springen",
      "lv": "a sări"
    },
    "praesens": {
      "de": "er springt",
      "lv": "el sare"
    },
    "imperfektIndikativ": {
      "de": "er sprang",
      "lv": "el sări"
    },
    "imperfektKonjunktiv": {
      "de": "er spränge",
      "lv": "el ar sări"
    },
    "partizipVergangenheit": {
      "de": "gesprungen (er ist)",
      "lv": "sărit"
    }
  },
  {
    "infinitiv": {
      "de": "stechen",
      "lv": "a înțepa"
    },
    "praesens": {
      "de": "er sticht",
      "lv": "el înțeapă"
    },
    "imperfektIndikativ": {
      "de": "er stach",
      "lv": "el înțepă"
    },
    "imperfektKonjunktiv": {
      "de": "er stäche",
      "lv": "el ar înțepa"
    },
    "partizipVergangenheit": {
      "de": "gestochen",
      "lv": "înțepat"
    }
  },
  {
    "infinitiv": {
      "de": "stecken",
      "lv": "a băga / a înfige"
    },
    "praesens": {
      "de": "er steckt",
      "lv": "el bagă / înfige"
    },
    "imperfektIndikativ": {
      "de": "stak / steckte",
      "lv": "el băgă / înfipse"
    },
    "imperfektKonjunktiv": {
      "de": "stak / steckte",
      "lv": "el ar băga / ar înfige"
    },
    "partizipVergangenheit": {
      "de": "gesteckt",
      "lv": "băgat / înfipt"
    }
  },
  {
    "infinitiv": {
      "de": "stehen",
      "lv": "a sta în picioare"
    },
    "praesens": {
      "de": "er steht",
      "lv": "el stă în picioare"
    },
    "imperfektIndikativ": {
      "de": "er stand",
      "lv": "el stătu în picioare"
    },
    "imperfektKonjunktiv": {
      "de": "er stände / er stünde",
      "lv": "el ar sta în picioare"
    },
    "partizipVergangenheit": {
      "de": "gestanden",
      "lv": "stat în picioare"
    }
  },
  {
    "infinitiv": {
      "de": "stehlen",
      "lv": "a fura"
    },
    "praesens": {
      "de": "er stiehlt",
      "lv": "el fură"
    },
    "imperfektIndikativ": {
      "de": "er stahl",
      "lv": "el fură"
    },
    "imperfektKonjunktiv": {
      "de": "er stöhle / er stähle",
      "lv": "el ar fura"
    },
    "partizipVergangenheit": {
      "de": "gestohlen",
      "lv": "furat"
    }
  },
  {
    "infinitiv": {
      "de": "steigen",
      "lv": "a urca"
    },
    "praesens": {
      "de": "er steigt",
      "lv": "el urcă"
    },
    "imperfektIndikativ": {
      "de": "er stieg",
      "lv": "el urcă"
    },
    "imperfektKonjunktiv": {
      "de": "er stiege",
      "lv": "el ar urca"
    },
    "partizipVergangenheit": {
      "de": "gestiegen (er ist)",
      "lv": "urcat"
    }
  },
  {
    "infinitiv": {
      "de": "sterben",
      "lv": "a muri"
    },
    "praesens": {
      "de": "er stirbt",
      "lv": "el moare"
    },
    "imperfektIndikativ": {
      "de": "er starb",
      "lv": "el muri"
    },
    "imperfektKonjunktiv": {
      "de": "er stürbe",
      "lv": "el ar muri"
    },
    "partizipVergangenheit": {
      "de": "gestorben (er ist)",
      "lv": "murit"
    }
  },
  {
    "infinitiv": {
      "de": "stinken",
      "lv": "a puți"
    },
    "praesens": {
      "de": "es stinkt",
      "lv": "pute"
    },
    "imperfektIndikativ": {
      "de": "stank",
      "lv": "puți"
    },
    "imperfektKonjunktiv": {
      "de": "stank",
      "lv": "ar puți"
    },
    "partizipVergangenheit": {
      "de": "gestunken",
      "lv": "puțit"
    }
  },
  {
    "infinitiv": {
      "de": "stoßen",
      "lv": "a îmbrânci"
    },
    "praesens": {
      "de": "er stößt",
      "lv": "el îmbrâncește"
    },
    "imperfektIndikativ": {
      "de": "er stieß",
      "lv": "el îmbrânci"
    },
    "imperfektKonjunktiv": {
      "de": "er stieße",
      "lv": "el ar îmbrânci"
    },
    "partizipVergangenheit": {
      "de": "gestoßen",
      "lv": "îmbrâncit"
    }
  },
  {
    "infinitiv": {
      "de": "streichen",
      "lv": "a vopsi / a bara"
    },
    "praesens": {
      "de": "er streicht",
      "lv": "el vopsește / barează"
    },
    "imperfektIndikativ": {
      "de": "er strich",
      "lv": "el vopsi / bară"
    },
    "imperfektKonjunktiv": {
      "de": "er striche",
      "lv": "el ar vopsi / ar bara"
    },
    "partizipVergangenheit": {
      "de": "gestrichen",
      "lv": "vopsit / barat"
    }
  },
  {
    "infinitiv": {
      "de": "streiten",
      "lv": "a se certa"
    },
    "praesens": {
      "de": "er streitet",
      "lv": "el se ceartă"
    },
    "imperfektIndikativ": {
      "de": "er stritt",
      "lv": "el se certă"
    },
    "imperfektKonjunktiv": {
      "de": "er stritte",
      "lv": "el s-ar certa"
    },
    "partizipVergangenheit": {
      "de": "gestritten",
      "lv": "certat"
    }
  },
  {
    "infinitiv": {
      "de": "tragen",
      "lv": "a duce"
    },
    "praesens": {
      "de": "er trägt",
      "lv": "el duce"
    },
    "imperfektIndikativ": {
      "de": "er trug",
      "lv": "el duse"
    },
    "imperfektKonjunktiv": {
      "de": "er trüge",
      "lv": "el ar duce"
    },
    "partizipVergangenheit": {
      "de": "getragen",
      "lv": "dus"
    }
  },
  {
    "infinitiv": {
      "de": "treffen",
      "lv": "a întâlni"
    },
    "praesens": {
      "de": "er trifft",
      "lv": "el întâlnește"
    },
    "imperfektIndikativ": {
      "de": "er traf",
      "lv": "el întâlni"
    },
    "imperfektKonjunktiv": {
      "de": "er träfe",
      "lv": "el ar întâlni"
    },
    "partizipVergangenheit": {
      "de": "getroffen",
      "lv": "întâlnit"
    }
  },
  {
    "infinitiv": {
      "de": "treiben",
      "lv": "a mâna"
    },
    "praesens": {
      "de": "er treibt",
      "lv": "el mână"
    },
    "imperfektIndikativ": {
      "de": "er trieb",
      "lv": "el mână"
    },
    "imperfektKonjunktiv": {
      "de": "er triebe",
      "lv": "el ar mâna"
    },
    "partizipVergangenheit": {
      "de": "getrieben",
      "lv": "mânat"
    }
  },
  {
    "infinitiv": {
      "de": "treten",
      "lv": "a păși / a merge"
    },
    "praesens": {
      "de": "er tritt",
      "lv": "el pășește / merge"
    },
    "imperfektIndikativ": {
      "de": "er trat",
      "lv": "el păși / merse"
    },
    "imperfektKonjunktiv": {
      "de": "er träte",
      "lv": "el ar păși / ar merge"
    },
    "partizipVergangenheit": {
      "de": "getreten (er ist)",
      "lv": "pășit / mers"
    }
  },
  {
    "infinitiv": {
      "de": "trinken",
      "lv": "a bea"
    },
    "praesens": {
      "de": "er trinkt",
      "lv": "el bea"
    },
    "imperfektIndikativ": {
      "de": "er trank",
      "lv": "el bău"
    },
    "imperfektKonjunktiv": {
      "de": "er tränke",
      "lv": "el ar bea"
    },
    "partizipVergangenheit": {
      "de": "getrunken",
      "lv": "băut"
    }
  },
  {
    "infinitiv": {
      "de": "trügen",
      "lv": "a înșela"
    },
    "praesens": {
      "de": "er trögt",
      "lv": "el înșală"
    },
    "imperfektIndikativ": {
      "de": "er trog",
      "lv": "el înșelă"
    },
    "imperfektKonjunktiv": {
      "de": "er tröge",
      "lv": "el ar înșela"
    },
    "partizipVergangenheit": {
      "de": "getrogen",
      "lv": "înșelat"
    }
  },
  {
    "infinitiv": {
      "de": "tun",
      "lv": "a face"
    },
    "praesens": {
      "de": "er tut",
      "lv": "el face"
    },
    "imperfektIndikativ": {
      "de": "er tat",
      "lv": "el făcu"
    },
    "imperfektKonjunktiv": {
      "de": "er täte",
      "lv": "el ar face"
    },
    "partizipVergangenheit": {
      "de": "getan",
      "lv": "făcut"
    }
  },
  {
    "infinitiv": {
      "de": "verderben",
      "lv": "a strica"
    },
    "praesens": {
      "de": "er verdirbt",
      "lv": "el strică"
    },
    "imperfektIndikativ": {
      "de": "er verdarb",
      "lv": "el strică"
    },
    "imperfektKonjunktiv": {
      "de": "er verdürbe",
      "lv": "el ar strica"
    },
    "partizipVergangenheit": {
      "de": "verdorben",
      "lv": "stricat"
    }
  },
  {
    "infinitiv": {
      "de": "verdrießen",
      "lv": "a supăra"
    },
    "praesens": {
      "de": "er verdrießt",
      "lv": "el supără"
    },
    "imperfektIndikativ": {
      "de": "er verdross",
      "lv": "el supără"
    },
    "imperfektKonjunktiv": {
      "de": "er verdrösse",
      "lv": "el ar supăra"
    },
    "partizipVergangenheit": {
      "de": "verdrossen",
      "lv": "supărat"
    }
  },
  {
    "infinitiv": {
      "de": "vergessen",
      "lv": "a uita"
    },
    "praesens": {
      "de": "er vergisst",
      "lv": "el uită"
    },
    "imperfektIndikativ": {
      "de": "er vergass",
      "lv": "el uită"
    },
    "imperfektKonjunktiv": {
      "de": "er vergäße",
      "lv": "el ar uita"
    },
    "partizipVergangenheit": {
      "de": "vergessen",
      "lv": "uitat"
    }
  },
  {
    "infinitiv": {
      "de": "verlieren",
      "lv": "a pierde"
    },
    "praesens": {
      "de": "er verliert",
      "lv": "el pierde"
    },
    "imperfektIndikativ": {
      "de": "er verlor",
      "lv": "el pierdu"
    },
    "imperfektKonjunktiv": {
      "de": "er verlöre",
      "lv": "el ar pierde"
    },
    "partizipVergangenheit": {
      "de": "verloren",
      "lv": "pierdut"
    }
  },
  {
    "infinitiv": {
      "de": "wachsen",
      "lv": "a crește"
    },
    "praesens": {
      "de": "er wächst",
      "lv": "el crește"
    },
    "imperfektIndikativ": {
      "de": "er wuchs",
      "lv": "el crescu"
    },
    "imperfektKonjunktiv": {
      "de": "er wüchse",
      "lv": "el ar crește"
    },
    "partizipVergangenheit": {
      "de": "gewachsen (er ist)",
      "lv": "crescut"
    }
  },
  {
    "infinitiv": {
      "de": "waschen",
      "lv": "a spăla"
    },
    "praesens": {
      "de": "er wäscht",
      "lv": "el spală"
    },
    "imperfektIndikativ": {
      "de": "er wusch",
      "lv": "el spălă"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsche",
      "lv": "el ar spăla"
    },
    "partizipVergangenheit": {
      "de": "gewaschen",
      "lv": "spălat"
    }
  },
  {
    "infinitiv": {
      "de": "weben",
      "lv": "a țese"
    },
    "praesens": {
      "de": "er webt",
      "lv": "el țese"
    },
    "imperfektIndikativ": {
      "de": "wob",
      "lv": "el țesu"
    },
    "imperfektKonjunktiv": {
      "de": "wob",
      "lv": "el ar țese"
    },
    "partizipVergangenheit": {
      "de": "gewoben",
      "lv": "țesut"
    }
  },
  {
    "infinitiv": {
      "de": "weichen",
      "lv": "a se retrage"
    },
    "praesens": {
      "de": "er weicht",
      "lv": "el se retrage"
    },
    "imperfektIndikativ": {
      "de": "er wich",
      "lv": "el se retrase"
    },
    "imperfektKonjunktiv": {
      "de": "er wiche",
      "lv": "el s-ar retrage"
    },
    "partizipVergangenheit": {
      "de": "gewichen (er ist)",
      "lv": "retras"
    }
  },
  {
    "infinitiv": {
      "de": "weisen",
      "lv": "a arăta"
    },
    "praesens": {
      "de": "er weist",
      "lv": "el arată"
    },
    "imperfektIndikativ": {
      "de": "er wies",
      "lv": "el arătă"
    },
    "imperfektKonjunktiv": {
      "de": "er wiese",
      "lv": "el ar arăta"
    },
    "partizipVergangenheit": {
      "de": "gewiesen",
      "lv": "arătat"
    }
  },
  {
    "infinitiv": {
      "de": "wenden",
      "lv": "a învârti / a întoarce"
    },
    "praesens": {
      "de": "er wendet",
      "lv": "el învârte / întoarce"
    },
    "imperfektIndikativ": {
      "de": "er wandte / es wendete",
      "lv": "el învârti / întoarse"
    },
    "imperfektKonjunktiv": {
      "de": "er wendete",
      "lv": "el ar învârti / ar întoarce"
    },
    "partizipVergangenheit": {
      "de": "gewandt / gewendet",
      "lv": "învârtit / întors"
    }
  },
  {
    "infinitiv": {
      "de": "werben",
      "lv": "a cere în căsătorie"
    },
    "praesens": {
      "de": "er wirbt",
      "lv": "el cere în căsătorie"
    },
    "imperfektIndikativ": {
      "de": "er warb",
      "lv": "el ceru în căsătorie"
    },
    "imperfektKonjunktiv": {
      "de": "er würbe",
      "lv": "el ar cere în căsătorie"
    },
    "partizipVergangenheit": {
      "de": "geworben",
      "lv": "cerut în căsătorie"
    }
  },
  {
    "infinitiv": {
      "de": "werden",
      "lv": "a deveni"
    },
    "praesens": {
      "de": "er wird",
      "lv": "el devine"
    },
    "imperfektIndikativ": {
      "de": "wurde",
      "lv": "el deveni"
    },
    "imperfektKonjunktiv": {
      "de": "wurde",
      "lv": "el ar deveni"
    },
    "partizipVergangenheit": {
      "de": "geworden",
      "lv": "devenit"
    }
  },
  {
    "infinitiv": {
      "de": "werfen",
      "lv": "a arunca"
    },
    "praesens": {
      "de": "er wirft",
      "lv": "el aruncă"
    },
    "imperfektIndikativ": {
      "de": "er warf",
      "lv": "el aruncă"
    },
    "imperfektKonjunktiv": {
      "de": "er würfe",
      "lv": "el ar arunca"
    },
    "partizipVergangenheit": {
      "de": "geworfen",
      "lv": "aruncat"
    }
  },
  {
    "infinitiv": {
      "de": "wiegen",
      "lv": "a cântări"
    },
    "praesens": {
      "de": "er wiegt",
      "lv": "el cântărește"
    },
    "imperfektIndikativ": {
      "de": "er wog",
      "lv": "el cântări"
    },
    "imperfektKonjunktiv": {
      "de": "er wöge",
      "lv": "el ar cântări"
    },
    "partizipVergangenheit": {
      "de": "gewogen",
      "lv": "cântărit"
    }
  },
  {
    "infinitiv": {
      "de": "winden",
      "lv": "a împleti"
    },
    "praesens": {
      "de": "er windet",
      "lv": "el împletește"
    },
    "imperfektIndikativ": {
      "de": "er wand",
      "lv": "el împleti"
    },
    "imperfektKonjunktiv": {
      "de": "er wände",
      "lv": "el ar împleti"
    },
    "partizipVergangenheit": {
      "de": "gewunden",
      "lv": "împletit"
    }
  },
  {
    "infinitiv": {
      "de": "wissen",
      "lv": "a ști"
    },
    "praesens": {
      "de": "er weiß",
      "lv": "el știe"
    },
    "imperfektIndikativ": {
      "de": "er wusste",
      "lv": "el știu"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsste",
      "lv": "el ar ști"
    },
    "partizipVergangenheit": {
      "de": "gewusst",
      "lv": "știut"
    }
  },
  {
    "infinitiv": {
      "de": "wollen",
      "lv": "a vrea"
    },
    "praesens": {
      "de": "er will",
      "lv": "el vrea"
    },
    "imperfektIndikativ": {
      "de": "wollte",
      "lv": "el vru"
    },
    "imperfektKonjunktiv": {
      "de": "wollte",
      "lv": "el ar vrea"
    },
    "partizipVergangenheit": {
      "de": "gewollt",
      "lv": "vrut"
    }
  },
  {
    "infinitiv": {
      "de": "wringen",
      "lv": "a stoarce / a presa"
    },
    "praesens": {
      "de": "er wringt",
      "lv": "el stoarce / presează"
    },
    "imperfektIndikativ": {
      "de": "wrang",
      "lv": "el stoarse / presă"
    },
    "imperfektKonjunktiv": {
      "de": "wrang",
      "lv": "el ar stoarce / ar presa"
    },
    "partizipVergangenheit": {
      "de": "gewrungen",
      "lv": "stors / presat"
    }
  },
  {
    "infinitiv": {
      "de": "zeihen",
      "lv": "a acuza"
    },
    "praesens": {
      "de": "er zeiht",
      "lv": "el acuză"
    },
    "imperfektIndikativ": {
      "de": "zieh",
      "lv": "el acuză"
    },
    "imperfektKonjunktiv": {
      "de": "zieh",
      "lv": "el ar acuza"
    },
    "partizipVergangenheit": {
      "de": "geziehen",
      "lv": "acuzat"
    }
  },
  {
    "infinitiv": {
      "de": "ziehen",
      "lv": "a trage"
    },
    "praesens": {
      "de": "er zieht",
      "lv": "el trage"
    },
    "imperfektIndikativ": {
      "de": "er zog",
      "lv": "el trase"
    },
    "imperfektKonjunktiv": {
      "de": "er zöge",
      "lv": "el ar trage"
    },
    "partizipVergangenheit": {
      "de": "gezogen",
      "lv": "tras"
    }
  },
  {
    "infinitiv": {
      "de": "zwingen",
      "lv": "a obliga"
    },
    "praesens": {
      "de": "er zwingt",
      "lv": "el obligă"
    },
    "imperfektIndikativ": {
      "de": "er zwang",
      "lv": "el obligă"
    },
    "imperfektKonjunktiv": {
      "de": "er zwänge",
      "lv": "el ar obliga"
    },
    "partizipVergangenheit": {
      "de": "gezwungen",
      "lv": "obligat"
    }
  },
  {
    "infinitiv": {
      "de": "empfangen",
      "lv": "a primi"
    },
    "praesens": {
      "de": "er empfängt",
      "lv": "el primește"
    },
    "imperfektIndikativ": {
      "de": "er empfing",
      "lv": "el primi"
    },
    "imperfektKonjunktiv": {
      "de": "er empfinge",
      "lv": "el ar primi"
    },
    "partizipVergangenheit": {
      "de": "empfangen",
      "lv": "primit"
    }
  },
  {
    "infinitiv": {
      "de": "erwägen",
      "lv": "a chibzui"
    },
    "praesens": {
      "de": "er erwägt",
      "lv": "el chibzuiește"
    },
    "imperfektIndikativ": {
      "de": "er erwog",
      "lv": "el chibzui"
    },
    "imperfektKonjunktiv": {
      "de": "er erwöge",
      "lv": "el ar chibzui"
    },
    "partizipVergangenheit": {
      "de": "erwogen",
      "lv": "chibzuit"
    }
  },
  {
    "infinitiv": {
      "de": "fechten",
      "lv": "a lupta"
    },
    "praesens": {
      "de": "er ficht",
      "lv": "el luptă"
    },
    "imperfektIndikativ": {
      "de": "er focht",
      "lv": "el luptă"
    },
    "imperfektKonjunktiv": {
      "de": "er föchte",
      "lv": "el ar lupta"
    },
    "partizipVergangenheit": {
      "de": "gefochten",
      "lv": "luptat"
    }
  },
  {
    "infinitiv": {
      "de": "flechten",
      "lv": "a împleti"
    },
    "praesens": {
      "de": "er flicht",
      "lv": "el împletește"
    },
    "imperfektIndikativ": {
      "de": "er flocht",
      "lv": "el împleti"
    },
    "imperfektKonjunktiv": {
      "de": "er flöchte",
      "lv": "el ar împleti"
    },
    "partizipVergangenheit": {
      "de": "geflochten",
      "lv": "împletit"
    }
  },
  {
    "infinitiv": {
      "de": "hangen",
      "lv": "a atârna"
    },
    "praesens": {
      "de": "er hängt",
      "lv": "el atârnă"
    },
    "imperfektIndikativ": {
      "de": "er hing",
      "lv": "el atârnă"
    },
    "imperfektKonjunktiv": {
      "de": "er hinge",
      "lv": "el ar atârna"
    },
    "partizipVergangenheit": {
      "de": "gehangen",
      "lv": "atârnat"
    }
  },
  {
    "infinitiv": {
      "de": "spalten",
      "lv": "a despica"
    },
    "praesens": {
      "de": "er spaltet",
      "lv": "el despică"
    },
    "imperfektIndikativ": {
      "de": "er spaltete",
      "lv": "el despică"
    },
    "imperfektKonjunktiv": {
      "de": "er spaltete",
      "lv": "el ar despica"
    },
    "partizipVergangenheit": {
      "de": "gespalten",
      "lv": "despicat"
    }
  },
  {
    "infinitiv": {
      "de": "verzeihen",
      "lv": "a ierta"
    },
    "praesens": {
      "de": "er verzeiht",
      "lv": "el iartă"
    },
    "imperfektIndikativ": {
      "de": "er verzieh",
      "lv": "el iertă"
    },
    "imperfektKonjunktiv": {
      "de": "er verziehe",
      "lv": "el ar ierta"
    },
    "partizipVergangenheit": {
      "de": "verziehen",
      "lv": "iertat"
    }
  }
];

window.VERB_ENTRIES = VERB_ENTRIES;

const VERB_ENTRIES = [
  {
    "infinitiv": {
      "de": "backen",
      "lv": "A coace"
    },
    "praesens": {
      "de": "er bäckt",
      "lv": "El coace"
    },
    "imperfektIndikativ": {
      "de": "er buk",
      "lv": "El cocea"
    },
    "imperfektKonjunktiv": {
      "de": "er büke",
      "lv": "El ar coace"
    },
    "partizipVergangenheit": {
      "de": "gebacken",
      "lv": "Prăjit / copt"
    }
  },
  {
    "infinitiv": {
      "de": "befehlen",
      "lv": "A comanda"
    },
    "praesens": {
      "de": "er befiehlt",
      "lv": "Porunceşte el"
    },
    "imperfektIndikativ": {
      "de": "er befahl",
      "lv": "Porunci el"
    },
    "imperfektKonjunktiv": {
      "de": "er beföhle",
      "lv": "El ar porunci"
    },
    "partizipVergangenheit": {
      "de": "befohlen",
      "lv": "A poruncit"
    }
  },
  {
    "infinitiv": {
      "de": "beginnen",
      "lv": "Pentru a începe"
    },
    "praesens": {
      "de": "er beginnt",
      "lv": "Începe el"
    },
    "imperfektIndikativ": {
      "de": "er begann",
      "lv": "Începu el"
    },
    "imperfektKonjunktiv": {
      "de": "er begönne / er begänne",
      "lv": "Avea să înceapă"
    },
    "partizipVergangenheit": {
      "de": "begonnen",
      "lv": "A început"
    }
  },
  {
    "infinitiv": {
      "de": "beißen",
      "lv": "Mușcă"
    },
    "praesens": {
      "de": "er beißt",
      "lv": "El mușcă"
    },
    "imperfektIndikativ": {
      "de": "er biss",
      "lv": "A codificat el"
    },
    "imperfektKonjunktiv": {
      "de": "er bisse",
      "lv": "El mușcă"
    },
    "partizipVergangenheit": {
      "de": "gebissen",
      "lv": "Muscat / muscat"
    }
  },
  {
    "infinitiv": {
      "de": "bergen",
      "lv": "Ascunde"
    },
    "praesens": {
      "de": "er birgt",
      "lv": "El se ascunde"
    },
    "imperfektIndikativ": {
      "de": "er barg",
      "lv": "S-a ascuns"
    },
    "imperfektKonjunktiv": {
      "de": "er bürge / er bärge",
      "lv": "S-ar ascunde"
    },
    "partizipVergangenheit": {
      "de": "geborgen",
      "lv": "Ascuns/salvat"
    }
  },
  {
    "infinitiv": {
      "de": "bersten",
      "lv": "Izbucnind"
    },
    "praesens": {
      "de": "er birst",
      "lv": "El izbucnește"
    },
    "imperfektIndikativ": {
      "de": "er barst / er borst",
      "lv": "Izbucni el"
    },
    "imperfektKonjunktiv": {
      "de": "er bärste / er börste",
      "lv": "El izbucnește"
    },
    "partizipVergangenheit": {
      "de": "geborsten (er ist)",
      "lv": "Spart"
    }
  },
  {
    "infinitiv": {
      "de": "bewegen",
      "lv": "A încuraja"
    },
    "praesens": {
      "de": "er bewegt",
      "lv": "Îndeamnă el"
    },
    "imperfektIndikativ": {
      "de": "er bewog",
      "lv": "A îndemnat el"
    },
    "imperfektKonjunktiv": {
      "de": "er bewöge",
      "lv": "El ar încuraja"
    },
    "partizipVergangenheit": {
      "de": "bewogen",
      "lv": "Încurajat"
    }
  },
  {
    "infinitiv": {
      "de": "biegen",
      "lv": "Îndoi"
    },
    "praesens": {
      "de": "er biegt",
      "lv": "Se înclină"
    },
    "imperfektIndikativ": {
      "de": "er bog",
      "lv": "S-a îndoit"
    },
    "imperfektKonjunktiv": {
      "de": "er böge",
      "lv": "S-ar apleca"
    },
    "partizipVergangenheit": {
      "de": "gebogen",
      "lv": "Îndoit"
    }
  },
  {
    "infinitiv": {
      "de": "bieten",
      "lv": "A promite"
    },
    "praesens": {
      "de": "er bietet",
      "lv": "El promite"
    },
    "imperfektIndikativ": {
      "de": "er bot",
      "lv": "A promis el"
    },
    "imperfektKonjunktiv": {
      "de": "er böte",
      "lv": "Ar promite"
    },
    "partizipVergangenheit": {
      "de": "geboten",
      "lv": "Promis/oferit"
    }
  },
  {
    "infinitiv": {
      "de": "binden",
      "lv": "Sită"
    },
    "praesens": {
      "de": "er bindet",
      "lv": "El fân"
    },
    "imperfektIndikativ": {
      "de": "er band",
      "lv": "A semănat"
    },
    "imperfektKonjunktiv": {
      "de": "er bände",
      "lv": "A cernut"
    },
    "partizipVergangenheit": {
      "de": "gebunden",
      "lv": "Sită"
    }
  },
  {
    "infinitiv": {
      "de": "bitten",
      "lv": "A intreba"
    },
    "praesens": {
      "de": "er bittet",
      "lv": "El implora"
    },
    "imperfektIndikativ": {
      "de": "er bat",
      "lv": "Întrebă el"
    },
    "imperfektKonjunktiv": {
      "de": "er bäte",
      "lv": "S-ar ruga"
    },
    "partizipVergangenheit": {
      "de": "gebeten",
      "lv": "Solicitat"
    }
  },
  {
    "infinitiv": {
      "de": "blasen",
      "lv": "A sufla"
    },
    "praesens": {
      "de": "er bläst",
      "lv": "Suflă el"
    },
    "imperfektIndikativ": {
      "de": "er blies",
      "lv": "A suflat"
    },
    "imperfektKonjunktiv": {
      "de": "er bliese",
      "lv": "Ar sufla"
    },
    "partizipVergangenheit": {
      "de": "geblasen",
      "lv": "Suflat"
    }
  },
  {
    "infinitiv": {
      "de": "gären",
      "lv": "Să fermenteze"
    },
    "praesens": {
      "de": "es gärt",
      "lv": "Fermentează"
    },
    "imperfektIndikativ": {
      "de": "es gor / es gärte",
      "lv": "Fermentează"
    },
    "imperfektKonjunktiv": {
      "de": "es göre / es gärte",
      "lv": "Ar fi amar"
    },
    "partizipVergangenheit": {
      "de": "gegoren / gegärt",
      "lv": "Secară"
    }
  },
  {
    "infinitiv": {
      "de": "gebären",
      "lv": "A naste"
    },
    "praesens": {
      "de": "sie gebiert",
      "lv": "În pântecele ei"
    },
    "imperfektIndikativ": {
      "de": "sie gebar",
      "lv": "Ea a născut"
    },
    "imperfektKonjunktiv": {
      "de": "sie gebäre",
      "lv": "Ea avea să nască"
    },
    "partizipVergangenheit": {
      "de": "geboren",
      "lv": "Născut / s-a născut"
    }
  },
  {
    "infinitiv": {
      "de": "gelingen",
      "lv": "Reuşi"
    },
    "praesens": {
      "de": "es gelingt",
      "lv": "Reuseste"
    },
    "imperfektIndikativ": {
      "de": "es gelang",
      "lv": "A funcționat"
    },
    "imperfektKonjunktiv": {
      "de": "es gelänge",
      "lv": "Ar merge"
    },
    "partizipVergangenheit": {
      "de": "gelungen (es ist)",
      "lv": "A reusit"
    }
  },
  {
    "infinitiv": {
      "de": "gelten",
      "lv": "Veni la îndemână"
    },
    "praesens": {
      "de": "er gilt",
      "lv": "El se potriveste / este valabil"
    },
    "imperfektIndikativ": {
      "de": "er galt",
      "lv": "El se potrivea / era apt"
    },
    "imperfektKonjunktiv": {
      "de": "er gölte / es gälte",
      "lv": "El s-ar potrivi / s-ar potrivi"
    },
    "partizipVergangenheit": {
      "de": "gegolten",
      "lv": "Aplicat / a fost valabil"
    }
  },
  {
    "infinitiv": {
      "de": "genesen",
      "lv": "Facand bine"
    },
    "praesens": {
      "de": "er genest",
      "lv": "Se face bine"
    },
    "imperfektIndikativ": {
      "de": "er genas",
      "lv": "S-a făcut bine"
    },
    "imperfektKonjunktiv": {
      "de": "er genäse",
      "lv": "S-ar face bine"
    },
    "partizipVergangenheit": {
      "de": "genesen (er ist)",
      "lv": "Să vă faceţi bine"
    }
  },
  {
    "infinitiv": {
      "de": "genießen",
      "lv": "A se bucura"
    },
    "praesens": {
      "de": "er genießt",
      "lv": "El se bucură"
    },
    "imperfektIndikativ": {
      "de": "er genoss",
      "lv": "S-a bucurat"
    },
    "imperfektKonjunktiv": {
      "de": "er genösse",
      "lv": "El s-ar bucura"
    },
    "partizipVergangenheit": {
      "de": "genossen",
      "lv": "Savurat"
    }
  },
  {
    "infinitiv": {
      "de": "geschehen",
      "lv": "Întâmpla"
    },
    "praesens": {
      "de": "es geschieht",
      "lv": "Se întâmplă"
    },
    "imperfektIndikativ": {
      "de": "es geschah",
      "lv": "Sa întâmplat"
    },
    "imperfektKonjunktiv": {
      "de": "es geschähe",
      "lv": "S-ar întâmpla"
    },
    "partizipVergangenheit": {
      "de": "geschehen (es ist)",
      "lv": "Sa întâmplat"
    }
  },
  {
    "infinitiv": {
      "de": "gießen",
      "lv": "Locotenentul"
    },
    "praesens": {
      "de": "er gießt",
      "lv": "El toarnă"
    },
    "imperfektIndikativ": {
      "de": "er goss",
      "lv": "A turnat el"
    },
    "imperfektKonjunktiv": {
      "de": "er gösse",
      "lv": "El plouă"
    },
    "partizipVergangenheit": {
      "de": "gegossen",
      "lv": "Lucru"
    }
  },
  {
    "infinitiv": {
      "de": "gleichen",
      "lv": "A semăna"
    },
    "praesens": {
      "de": "er gleicht",
      "lv": "El seamănă"
    },
    "imperfektIndikativ": {
      "de": "er glich",
      "lv": "A emulat el"
    },
    "imperfektKonjunktiv": {
      "de": "er gliche",
      "lv": "El ar imita"
    },
    "partizipVergangenheit": {
      "de": "geglichen",
      "lv": "Semăna"
    }
  },
  {
    "infinitiv": {
      "de": "gleiten",
      "lv": "A aluneca"
    },
    "praesens": {
      "de": "er gleitet",
      "lv": "El alunecă"
    },
    "imperfektIndikativ": {
      "de": "er glitt",
      "lv": "Aluneca"
    },
    "imperfektKonjunktiv": {
      "de": "er glitte",
      "lv": "Ar aluneca"
    },
    "partizipVergangenheit": {
      "de": "geglitten (er ist)",
      "lv": "A alunecat"
    }
  },
  {
    "infinitiv": {
      "de": "glimmen",
      "lv": "Strălucitoare"
    },
    "praesens": {
      "de": "er glimmt",
      "lv": "El strălucește"
    },
    "imperfektIndikativ": {
      "de": "er glimmte / glomm",
      "lv": "A strălucit"
    },
    "imperfektKonjunktiv": {
      "de": "er glimmte",
      "lv": "El ar străluci"
    },
    "partizipVergangenheit": {
      "de": "geglimmt / geglommen",
      "lv": "Strălucitoare"
    }
  },
  {
    "infinitiv": {
      "de": "graben",
      "lv": "A sapa"
    },
    "praesens": {
      "de": "er gräbt",
      "lv": "El sapă"
    },
    "imperfektIndikativ": {
      "de": "er grub",
      "lv": "A săpat"
    },
    "imperfektKonjunktiv": {
      "de": "er grübe",
      "lv": "El ar sapa"
    },
    "partizipVergangenheit": {
      "de": "gegraben",
      "lv": "Sapa"
    }
  },
  {
    "infinitiv": {
      "de": "greifen",
      "lv": "A prinde"
    },
    "praesens": {
      "de": "er greift",
      "lv": "El prinde"
    },
    "imperfektIndikativ": {
      "de": "er griff",
      "lv": "A prins"
    },
    "imperfektKonjunktiv": {
      "de": "er griffe",
      "lv": "Ar prinde"
    },
    "partizipVergangenheit": {
      "de": "gegriffen",
      "lv": "Prins / apucat"
    }
  },
  {
    "infinitiv": {
      "de": "hauen",
      "lv": "A tăia"
    },
    "praesens": {
      "de": "er haut",
      "lv": "A ales el"
    },
    "imperfektIndikativ": {
      "de": "er hieb",
      "lv": "Se răsti el"
    },
    "imperfektKonjunktiv": {
      "de": "er hiebe",
      "lv": "El ar sculpta"
    },
    "partizipVergangenheit": {
      "de": "gehauen",
      "lv": "Sculptate"
    }
  },
  {
    "infinitiv": {
      "de": "heben",
      "lv": "A ridica"
    },
    "praesens": {
      "de": "er hebt",
      "lv": "El ridică"
    },
    "imperfektIndikativ": {
      "de": "er hob",
      "lv": "El a adus"
    },
    "imperfektKonjunktiv": {
      "de": "er höbe",
      "lv": "El ar construi"
    },
    "partizipVergangenheit": {
      "de": "gehoben",
      "lv": "Construit"
    }
  },
  {
    "infinitiv": {
      "de": "kennen",
      "lv": "A cunoaște / a cunoaște"
    },
    "praesens": {
      "de": "er kennt",
      "lv": "El stie"
    },
    "imperfektIndikativ": {
      "de": "kannte",
      "lv": "Știa"
    },
    "imperfektKonjunktiv": {
      "de": "kannte",
      "lv": "Știa"
    },
    "partizipVergangenheit": {
      "de": "gekannt",
      "lv": "Cunoştinţă"
    }
  },
  {
    "infinitiv": {
      "de": "klingen",
      "lv": "A suna"
    },
    "praesens": {
      "de": "er klingt",
      "lv": "El sună"
    },
    "imperfektIndikativ": {
      "de": "er klang",
      "lv": "A sunat el"
    },
    "imperfektKonjunktiv": {
      "de": "er klänge",
      "lv": "El ar suna"
    },
    "partizipVergangenheit": {
      "de": "geklungen",
      "lv": "A sunat"
    }
  },
  {
    "infinitiv": {
      "de": "kneifen",
      "lv": "Ciupit"
    },
    "praesens": {
      "de": "er kneift",
      "lv": "Glumește el"
    },
    "imperfektIndikativ": {
      "de": "er kniff",
      "lv": "Ciupi el"
    },
    "imperfektKonjunktiv": {
      "de": "er kniffe",
      "lv": "Ar ciupi"
    },
    "partizipVergangenheit": {
      "de": "gekniffen",
      "lv": "Ciupit"
    }
  },
  {
    "infinitiv": {
      "de": "bleiben",
      "lv": "Şedere"
    },
    "praesens": {
      "de": "er bleibt",
      "lv": "El rămâne"
    },
    "imperfektIndikativ": {
      "de": "er blieb",
      "lv": "A ramas"
    },
    "imperfektKonjunktiv": {
      "de": "er bliebe",
      "lv": "El ar rămâne"
    },
    "partizipVergangenheit": {
      "de": "geblieben (er ist)",
      "lv": "Stânga"
    }
  },
  {
    "infinitiv": {
      "de": "bleichen",
      "lv": "Albi"
    },
    "praesens": {
      "de": "er bleicht",
      "lv": "El albește"
    },
    "imperfektIndikativ": {
      "de": "blich",
      "lv": "Albit"
    },
    "imperfektKonjunktiv": {
      "de": "blich",
      "lv": "Albit"
    },
    "partizipVergangenheit": {
      "de": "geblichen",
      "lv": "Albit"
    }
  },
  {
    "infinitiv": {
      "de": "braten",
      "lv": "A coace"
    },
    "praesens": {
      "de": "er brät",
      "lv": "El coace"
    },
    "imperfektIndikativ": {
      "de": "er briet",
      "lv": "El cocea"
    },
    "imperfektKonjunktiv": {
      "de": "er briete",
      "lv": "El ar coace"
    },
    "partizipVergangenheit": {
      "de": "gebraten",
      "lv": "Prăjit / copt"
    }
  },
  {
    "infinitiv": {
      "de": "brechen",
      "lv": "A rupe"
    },
    "praesens": {
      "de": "er bricht",
      "lv": "El se rupe"
    },
    "imperfektIndikativ": {
      "de": "er brach",
      "lv": "S-a rupt"
    },
    "imperfektKonjunktiv": {
      "de": "er bräche",
      "lv": "S-ar rupe"
    },
    "partizipVergangenheit": {
      "de": "gebrochen",
      "lv": "Spart / spart"
    }
  },
  {
    "infinitiv": {
      "de": "brennen",
      "lv": "A arde"
    },
    "praesens": {
      "de": "er brennt",
      "lv": "E în flăcări"
    },
    "imperfektIndikativ": {
      "de": "brannte",
      "lv": "Ardea"
    },
    "imperfektKonjunktiv": {
      "de": "brannte",
      "lv": "Ardea"
    },
    "partizipVergangenheit": {
      "de": "gebrannt",
      "lv": "Ars"
    }
  },
  {
    "infinitiv": {
      "de": "bringen",
      "lv": "Transporta"
    },
    "praesens": {
      "de": "er bringt",
      "lv": "El poartă"
    },
    "imperfektIndikativ": {
      "de": "er brachte",
      "lv": "A purtat"
    },
    "imperfektKonjunktiv": {
      "de": "er brächte",
      "lv": "El ar duce"
    },
    "partizipVergangenheit": {
      "de": "gebracht",
      "lv": "Adus / adus"
    }
  },
  {
    "infinitiv": {
      "de": "denken",
      "lv": "A gândi"
    },
    "praesens": {
      "de": "er denkt",
      "lv": "Crede el"
    },
    "imperfektIndikativ": {
      "de": "er dachte",
      "lv": "Se gândi el"
    },
    "imperfektKonjunktiv": {
      "de": "er dächte",
      "lv": "S-ar gândi el"
    },
    "partizipVergangenheit": {
      "de": "gedacht",
      "lv": "Destinat"
    }
  },
  {
    "infinitiv": {
      "de": "dingen",
      "lv": "A angaja / a fi de acord"
    },
    "praesens": {
      "de": "er dingt",
      "lv": "El angajează"
    },
    "imperfektIndikativ": {
      "de": "dingte",
      "lv": "Angajat"
    },
    "imperfektKonjunktiv": {
      "de": "dingte",
      "lv": "Angajat"
    },
    "partizipVergangenheit": {
      "de": "gedungen",
      "lv": "Angajat"
    }
  },
  {
    "infinitiv": {
      "de": "dreschen",
      "lv": "Cult"
    },
    "praesens": {
      "de": "er drischt",
      "lv": "El bate"
    },
    "imperfektIndikativ": {
      "de": "er drasch / er drosch",
      "lv": "El treiera"
    },
    "imperfektKonjunktiv": {
      "de": "er dräsche / er drösche",
      "lv": "El s-ar închina"
    },
    "partizipVergangenheit": {
      "de": "gedroschen",
      "lv": "Cult"
    }
  },
  {
    "infinitiv": {
      "de": "dringen",
      "lv": "Sparge în"
    },
    "praesens": {
      "de": "er dringt",
      "lv": "El se sparge"
    },
    "imperfektIndikativ": {
      "de": "er drang",
      "lv": "El a intrat"
    },
    "imperfektKonjunktiv": {
      "de": "er dränge",
      "lv": "Avea să pătrundă"
    },
    "partizipVergangenheit": {
      "de": "gedrungen (er ist)",
      "lv": "A spart"
    }
  },
  {
    "infinitiv": {
      "de": "dünken",
      "lv": "Se pare"
    },
    "praesens": {
      "de": "es dünkt",
      "lv": "Se pare"
    },
    "imperfektIndikativ": {
      "de": "deuchte",
      "lv": "Părea"
    },
    "imperfektKonjunktiv": {
      "de": "deuchte",
      "lv": "Părea"
    },
    "partizipVergangenheit": {
      "de": "gedünkt",
      "lv": "Părea"
    }
  },
  {
    "infinitiv": {
      "de": "dürfen",
      "lv": "A fi permis"
    },
    "praesens": {
      "de": "er darf",
      "lv": "El poate"
    },
    "imperfektIndikativ": {
      "de": "durfte",
      "lv": "A fost permis"
    },
    "imperfektKonjunktiv": {
      "de": "durfte",
      "lv": "A fost permis"
    },
    "partizipVergangenheit": {
      "de": "gedurft",
      "lv": "Permis"
    }
  },
  {
    "infinitiv": {
      "de": "empfehlen",
      "lv": "Recomanda"
    },
    "praesens": {
      "de": "er empfiehlt",
      "lv": "Sugerează el"
    },
    "imperfektIndikativ": {
      "de": "er empfahl",
      "lv": "A sugerat el"
    },
    "imperfektKonjunktiv": {
      "de": "er empfähle / er empföhle",
      "lv": "El ar recomanda"
    },
    "partizipVergangenheit": {
      "de": "empfohlen",
      "lv": "Recomandat"
    }
  },
  {
    "infinitiv": {
      "de": "empfinden",
      "lv": "A simți"
    },
    "praesens": {
      "de": "er empfindet",
      "lv": "El simte"
    },
    "imperfektIndikativ": {
      "de": "er empfand",
      "lv": "A simțit"
    },
    "imperfektKonjunktiv": {
      "de": "er empfände",
      "lv": "Ar simți"
    },
    "partizipVergangenheit": {
      "de": "empfunden",
      "lv": "Pâslă"
    }
  },
  {
    "infinitiv": {
      "de": "erlöschen",
      "lv": "Se estompează"
    },
    "praesens": {
      "de": "er erlischt",
      "lv": "El iese"
    },
    "imperfektIndikativ": {
      "de": "er erlosch",
      "lv": "A ieșit"
    },
    "imperfektKonjunktiv": {
      "de": "er erlösche",
      "lv": "Avea să dispară"
    },
    "partizipVergangenheit": {
      "de": "erloschen (er ist)",
      "lv": "Stins"
    }
  },
  {
    "infinitiv": {
      "de": "erschrecken",
      "lv": "Deruta"
    },
    "praesens": {
      "de": "er erschrickt",
      "lv": "Se sperie"
    },
    "imperfektIndikativ": {
      "de": "er erschrak",
      "lv": "S-a speriat"
    },
    "imperfektKonjunktiv": {
      "de": "er erschräke",
      "lv": "S-ar speria"
    },
    "partizipVergangenheit": {
      "de": "erschrocken (er ist)",
      "lv": "Speriat"
    }
  },
  {
    "infinitiv": {
      "de": "essen",
      "lv": "Să mănânce"
    },
    "praesens": {
      "de": "er isst",
      "lv": "El mănâncă"
    },
    "imperfektIndikativ": {
      "de": "er ass",
      "lv": "El mânca"
    },
    "imperfektKonjunktiv": {
      "de": "er äße",
      "lv": "Ar mânca"
    },
    "partizipVergangenheit": {
      "de": "gegessen",
      "lv": "Mâncat / mâncat"
    }
  },
  {
    "infinitiv": {
      "de": "fahren",
      "lv": "Conduce"
    },
    "praesens": {
      "de": "er fährt",
      "lv": "El conduce"
    },
    "imperfektIndikativ": {
      "de": "er fuhr",
      "lv": "El conducea"
    },
    "imperfektKonjunktiv": {
      "de": "er führe",
      "lv": "El ar conduce"
    },
    "partizipVergangenheit": {
      "de": "gefahren (er ist)",
      "lv": "Condus/la stânga"
    }
  },
  {
    "infinitiv": {
      "de": "fallen",
      "lv": "A cădea"
    },
    "praesens": {
      "de": "er fällt",
      "lv": "El cade"
    },
    "imperfektIndikativ": {
      "de": "er fiel",
      "lv": "A căzut"
    },
    "imperfektKonjunktiv": {
      "de": "er fiele",
      "lv": "Ar cădea"
    },
    "partizipVergangenheit": {
      "de": "gefallen (er ist)",
      "lv": "A căzut"
    }
  },
  {
    "infinitiv": {
      "de": "fangen",
      "lv": "A prinde"
    },
    "praesens": {
      "de": "er fängt",
      "lv": "El prinde"
    },
    "imperfektIndikativ": {
      "de": "er fing",
      "lv": "A prins"
    },
    "imperfektKonjunktiv": {
      "de": "er finge",
      "lv": "Ar prinde"
    },
    "partizipVergangenheit": {
      "de": "gefangen",
      "lv": "Prins / prins"
    }
  },
  {
    "infinitiv": {
      "de": "finden",
      "lv": "A găsi"
    },
    "praesens": {
      "de": "er findet",
      "lv": "El gaseste"
    },
    "imperfektIndikativ": {
      "de": "er fand",
      "lv": "A găsit"
    },
    "imperfektKonjunktiv": {
      "de": "er fände",
      "lv": "Avea să găsească"
    },
    "partizipVergangenheit": {
      "de": "gefunden",
      "lv": "Găsit"
    }
  },
  {
    "infinitiv": {
      "de": "fliegen",
      "lv": "Dă drumul"
    },
    "praesens": {
      "de": "er fliegt",
      "lv": "El zboară"
    },
    "imperfektIndikativ": {
      "de": "er flog",
      "lv": "A zburat"
    },
    "imperfektKonjunktiv": {
      "de": "er flöge",
      "lv": "Ar zbura"
    },
    "partizipVergangenheit": {
      "de": "geflogen (er ist)",
      "lv": "A zburat"
    }
  },
  {
    "infinitiv": {
      "de": "fliehen",
      "lv": "Fugi"
    },
    "praesens": {
      "de": "er flieht",
      "lv": "El fuge"
    },
    "imperfektIndikativ": {
      "de": "er floh",
      "lv": "A fugit"
    },
    "imperfektKonjunktiv": {
      "de": "er flöhe",
      "lv": "Ar fugi"
    },
    "partizipVergangenheit": {
      "de": "geflohen (er ist)",
      "lv": "A fugit"
    }
  },
  {
    "infinitiv": {
      "de": "fließen",
      "lv": "A curge"
    },
    "praesens": {
      "de": "er fließt",
      "lv": "El aleargă"
    },
    "imperfektIndikativ": {
      "de": "er floss",
      "lv": "A alergat"
    },
    "imperfektKonjunktiv": {
      "de": "er flösse",
      "lv": "Ar alerga"
    },
    "partizipVergangenheit": {
      "de": "geflossen (er ist)",
      "lv": "A trecut"
    }
  },
  {
    "infinitiv": {
      "de": "fressen",
      "lv": "Mananca maine"
    },
    "praesens": {
      "de": "er frisst",
      "lv": "El mănâncă/înghite"
    },
    "imperfektIndikativ": {
      "de": "er frass",
      "lv": "A mâncat/a înghițit"
    },
    "imperfektKonjunktiv": {
      "de": "er fräße",
      "lv": "El ar mânca / micul dejun"
    },
    "partizipVergangenheit": {
      "de": "gefressen",
      "lv": "Mâncat / dimineața"
    }
  },
  {
    "infinitiv": {
      "de": "frieren",
      "lv": "Rece"
    },
    "praesens": {
      "de": "er friert",
      "lv": "El îngheață"
    },
    "imperfektIndikativ": {
      "de": "er fror",
      "lv": "El insula"
    },
    "imperfektKonjunktiv": {
      "de": "er fröre",
      "lv": "Îngheța"
    },
    "partizipVergangenheit": {
      "de": "gefroren",
      "lv": "Insulă"
    }
  },
  {
    "infinitiv": {
      "de": "geben",
      "lv": "A da"
    },
    "praesens": {
      "de": "er gibt",
      "lv": "El dă"
    },
    "imperfektIndikativ": {
      "de": "er gab",
      "lv": "A dat"
    },
    "imperfektKonjunktiv": {
      "de": "er gäbe",
      "lv": "El ar da"
    },
    "partizipVergangenheit": {
      "de": "gegeben",
      "lv": "Dat"
    }
  },
  {
    "infinitiv": {
      "de": "gedeihen",
      "lv": "Reuşi"
    },
    "praesens": {
      "de": "er gedeiht",
      "lv": "El reușește"
    },
    "imperfektIndikativ": {
      "de": "er gedieh",
      "lv": "A reusit"
    },
    "imperfektKonjunktiv": {
      "de": "er gediehe",
      "lv": "Ar reuși"
    },
    "partizipVergangenheit": {
      "de": "gediehen (er ist)",
      "lv": "A reusit"
    }
  },
  {
    "infinitiv": {
      "de": "gehen",
      "lv": "Merge"
    },
    "praesens": {
      "de": "er geht",
      "lv": "El merge"
    },
    "imperfektIndikativ": {
      "de": "er ging",
      "lv": "A mers"
    },
    "imperfektKonjunktiv": {
      "de": "er ginge",
      "lv": "El ar merge"
    },
    "partizipVergangenheit": {
      "de": "gegangen (er ist)",
      "lv": "A mers"
    }
  },
  {
    "infinitiv": {
      "de": "gewinnen",
      "lv": "A obtine"
    },
    "praesens": {
      "de": "er gewinnt",
      "lv": "El primeste"
    },
    "imperfektIndikativ": {
      "de": "er gewann",
      "lv": "El a primit"
    },
    "imperfektKonjunktiv": {
      "de": "er gewönne / er gewänne",
      "lv": "El ar primi"
    },
    "partizipVergangenheit": {
      "de": "gewonnen",
      "lv": "Obtinut"
    }
  },
  {
    "infinitiv": {
      "de": "haben",
      "lv": "A fi / a aparține"
    },
    "praesens": {
      "de": "er hat",
      "lv": "El are"
    },
    "imperfektIndikativ": {
      "de": "hatte",
      "lv": "A fost"
    },
    "imperfektKonjunktiv": {
      "de": "hatte",
      "lv": "A fost"
    },
    "partizipVergangenheit": {
      "de": "gehabt",
      "lv": "Fost"
    }
  },
  {
    "infinitiv": {
      "de": "halten",
      "lv": "Tine"
    },
    "praesens": {
      "de": "er hält",
      "lv": "El acolo"
    },
    "imperfektIndikativ": {
      "de": "er hielt",
      "lv": "El ținea"
    },
    "imperfektKonjunktiv": {
      "de": "er hielte",
      "lv": "El ar ține"
    },
    "partizipVergangenheit": {
      "de": "gehalten",
      "lv": "Ținută"
    }
  },
  {
    "infinitiv": {
      "de": "heißen",
      "lv": "A suna"
    },
    "praesens": {
      "de": "er heißt",
      "lv": "El cheamă / el este chemat"
    },
    "imperfektIndikativ": {
      "de": "er hieß",
      "lv": "A sunat / a fost chemat"
    },
    "imperfektKonjunktiv": {
      "de": "er hieße",
      "lv": "El ar suna / ar fi chemat"
    },
    "partizipVergangenheit": {
      "de": "geheißen",
      "lv": "Numit"
    }
  },
  {
    "infinitiv": {
      "de": "helfen",
      "lv": "Pentru a ajuta"
    },
    "praesens": {
      "de": "er hilft",
      "lv": "El ajută"
    },
    "imperfektIndikativ": {
      "de": "er half",
      "lv": "A ajutat"
    },
    "imperfektKonjunktiv": {
      "de": "er hülfe / er hälfe",
      "lv": "El ar ajuta"
    },
    "partizipVergangenheit": {
      "de": "geholfen",
      "lv": "Ajutat"
    }
  },
  {
    "infinitiv": {
      "de": "kommen",
      "lv": "Să vină"
    },
    "praesens": {
      "de": "er kommt",
      "lv": "El vine"
    },
    "imperfektIndikativ": {
      "de": "er kam",
      "lv": "A venit"
    },
    "imperfektKonjunktiv": {
      "de": "er käme",
      "lv": "El ar veni"
    },
    "partizipVergangenheit": {
      "de": "gekommen (er ist)",
      "lv": "A venit"
    }
  },
  {
    "infinitiv": {
      "de": "können",
      "lv": "A putea"
    },
    "praesens": {
      "de": "er kann",
      "lv": "El poate"
    },
    "imperfektIndikativ": {
      "de": "konnte",
      "lv": "Putea"
    },
    "imperfektKonjunktiv": {
      "de": "konnte",
      "lv": "Putea"
    },
    "partizipVergangenheit": {
      "de": "gekonnt",
      "lv": "Putea"
    }
  },
  {
    "infinitiv": {
      "de": "kriechen",
      "lv": "Plouă"
    },
    "praesens": {
      "de": "er kriecht",
      "lv": "El se apleacă"
    },
    "imperfektIndikativ": {
      "de": "er kroch",
      "lv": "A plouat"
    },
    "imperfektKonjunktiv": {
      "de": "er kröche",
      "lv": "El ploua"
    },
    "partizipVergangenheit": {
      "de": "gekrochen (er ist)",
      "lv": "A decedat"
    }
  },
  {
    "infinitiv": {
      "de": "laden",
      "lv": "A încărca, a invita"
    },
    "praesens": {
      "de": "er lädt",
      "lv": "El îngrămădește / invită"
    },
    "imperfektIndikativ": {
      "de": "er lud",
      "lv": "A încărcat/a invitat"
    },
    "imperfektKonjunktiv": {
      "de": "er lüde",
      "lv": "El ar încărca / invita"
    },
    "partizipVergangenheit": {
      "de": "geladen",
      "lv": "Încărcat/invitat"
    }
  },
  {
    "infinitiv": {
      "de": "lassen",
      "lv": "A pune, a lăsa"
    },
    "praesens": {
      "de": "er lässt",
      "lv": "El pune / lasa"
    },
    "imperfektIndikativ": {
      "de": "er ließ",
      "lv": "A ordonat/a permis"
    },
    "imperfektKonjunktiv": {
      "de": "er ließe",
      "lv": "El ar pune/lasa"
    },
    "partizipVergangenheit": {
      "de": "gelassen",
      "lv": "Pus/permis"
    }
  },
  {
    "infinitiv": {
      "de": "laufen",
      "lv": "A alerga"
    },
    "praesens": {
      "de": "er läuft",
      "lv": "El aleargă"
    },
    "imperfektIndikativ": {
      "de": "er lief",
      "lv": "A alergat"
    },
    "imperfektKonjunktiv": {
      "de": "er liefe",
      "lv": "Ar alerga"
    },
    "partizipVergangenheit": {
      "de": "gelaufen (er ist)",
      "lv": "A alergat"
    }
  },
  {
    "infinitiv": {
      "de": "leiden",
      "lv": "A suferi"
    },
    "praesens": {
      "de": "er leidet",
      "lv": "El suferă"
    },
    "imperfektIndikativ": {
      "de": "er litt",
      "lv": "A suferit"
    },
    "imperfektKonjunktiv": {
      "de": "er litte",
      "lv": "Ar suferi"
    },
    "partizipVergangenheit": {
      "de": "gelitten",
      "lv": "Suferit"
    }
  },
  {
    "infinitiv": {
      "de": "leihen",
      "lv": "Împrumuta / împrumuta"
    },
    "praesens": {
      "de": "er leiht",
      "lv": "El împrumută / împrumută"
    },
    "imperfektIndikativ": {
      "de": "er lieh",
      "lv": "A împrumutat/a împrumutat"
    },
    "imperfektKonjunktiv": {
      "de": "er liehe",
      "lv": "Ar împrumuta/ar împrumuta"
    },
    "partizipVergangenheit": {
      "de": "geliehen",
      "lv": "Împrumutat / împrumutat"
    }
  },
  {
    "infinitiv": {
      "de": "lesen",
      "lv": "A citi"
    },
    "praesens": {
      "de": "er liest",
      "lv": "El citește"
    },
    "imperfektIndikativ": {
      "de": "er las",
      "lv": "Citea"
    },
    "imperfektKonjunktiv": {
      "de": "er läse",
      "lv": "Ar citi"
    },
    "partizipVergangenheit": {
      "de": "gelesen",
      "lv": "Citire"
    }
  },
  {
    "infinitiv": {
      "de": "liegen",
      "lv": "A dormi"
    },
    "praesens": {
      "de": "er liegt",
      "lv": "El doarme"
    },
    "imperfektIndikativ": {
      "de": "er lag",
      "lv": "El dormea"
    },
    "imperfektKonjunktiv": {
      "de": "er läge",
      "lv": "Ar dormi"
    },
    "partizipVergangenheit": {
      "de": "gelegen",
      "lv": "A dormit"
    }
  },
  {
    "infinitiv": {
      "de": "lügen",
      "lv": "A minti"
    },
    "praesens": {
      "de": "er lügt",
      "lv": "El minte"
    },
    "imperfektIndikativ": {
      "de": "er log",
      "lv": "A mințit"
    },
    "imperfektKonjunktiv": {
      "de": "er löge",
      "lv": "Ar minți"
    },
    "partizipVergangenheit": {
      "de": "gelogen",
      "lv": "Mințit"
    }
  },
  {
    "infinitiv": {
      "de": "mahlen",
      "lv": "Sol"
    },
    "praesens": {
      "de": "er mahlt",
      "lv": "El macină"
    },
    "imperfektIndikativ": {
      "de": "er mahlte",
      "lv": "El marginea"
    },
    "imperfektKonjunktiv": {
      "de": "er malte",
      "lv": "El macină"
    },
    "partizipVergangenheit": {
      "de": "gemahlen",
      "lv": "Sol"
    }
  },
  {
    "infinitiv": {
      "de": "meiden",
      "lv": "Evita"
    },
    "praesens": {
      "de": "er meidet",
      "lv": "El evită"
    },
    "imperfektIndikativ": {
      "de": "er mied",
      "lv": "A evitat"
    },
    "imperfektKonjunktiv": {
      "de": "er miede",
      "lv": "El ar evita"
    },
    "partizipVergangenheit": {
      "de": "gemieden",
      "lv": "Evitat"
    }
  },
  {
    "infinitiv": {
      "de": "melken",
      "lv": "A mulge"
    },
    "praesens": {
      "de": "er milkt / er melkt",
      "lv": "Mătură el"
    },
    "imperfektIndikativ": {
      "de": "er molk / er melkte",
      "lv": "A măturat"
    },
    "imperfektKonjunktiv": {
      "de": "er mölke / er melkte",
      "lv": "El ar mulge"
    },
    "partizipVergangenheit": {
      "de": "gemolken / gemelkt",
      "lv": "Muls"
    }
  },
  {
    "infinitiv": {
      "de": "messen",
      "lv": "A măsura"
    },
    "praesens": {
      "de": "er misst",
      "lv": "El masoara"
    },
    "imperfektIndikativ": {
      "de": "er mass",
      "lv": "A măsurat"
    },
    "imperfektKonjunktiv": {
      "de": "er mäße",
      "lv": "El ar măsura"
    },
    "partizipVergangenheit": {
      "de": "gemessen",
      "lv": "Măsurat"
    }
  },
  {
    "infinitiv": {
      "de": "misslingen",
      "lv": "A eșua"
    },
    "praesens": {
      "de": "es misslingt",
      "lv": "Eșuează"
    },
    "imperfektIndikativ": {
      "de": "misslang",
      "lv": "A eșuat"
    },
    "imperfektKonjunktiv": {
      "de": "misslang",
      "lv": "A eșuat"
    },
    "partizipVergangenheit": {
      "de": "misslungen",
      "lv": "A eșuat"
    }
  },
  {
    "infinitiv": {
      "de": "mögen",
      "lv": "Să placă"
    },
    "praesens": {
      "de": "er mag",
      "lv": "Ii place"
    },
    "imperfektIndikativ": {
      "de": "mochte",
      "lv": "I-a placut"
    },
    "imperfektKonjunktiv": {
      "de": "mochte",
      "lv": "I-a placut"
    },
    "partizipVergangenheit": {
      "de": "gemocht",
      "lv": "Placut"
    }
  },
  {
    "infinitiv": {
      "de": "müssen",
      "lv": "A avea nevoie"
    },
    "praesens": {
      "de": "er muss",
      "lv": "Are nevoie"
    },
    "imperfektIndikativ": {
      "de": "musste",
      "lv": "Ar trebui să aibă"
    },
    "imperfektKonjunktiv": {
      "de": "musste",
      "lv": "Ar trebui să aibă"
    },
    "partizipVergangenheit": {
      "de": "gemusst",
      "lv": "Necesare"
    }
  },
  {
    "infinitiv": {
      "de": "nehmen",
      "lv": "A lua"
    },
    "praesens": {
      "de": "er nimmt",
      "lv": "El ia"
    },
    "imperfektIndikativ": {
      "de": "er nahm",
      "lv": "A luat"
    },
    "imperfektKonjunktiv": {
      "de": "er nähme",
      "lv": "Ar lua"
    },
    "partizipVergangenheit": {
      "de": "genommen",
      "lv": "Luate"
    }
  },
  {
    "infinitiv": {
      "de": "nennen",
      "lv": "A numi"
    },
    "praesens": {
      "de": "er nennt",
      "lv": "A numit el"
    },
    "imperfektIndikativ": {
      "de": "er nannte",
      "lv": "A sunat el"
    },
    "imperfektKonjunktiv": {
      "de": "er nennte",
      "lv": "El ar numi"
    },
    "partizipVergangenheit": {
      "de": "genannt",
      "lv": "Numit"
    }
  },
  {
    "infinitiv": {
      "de": "pfeifen",
      "lv": "A fluiera"
    },
    "praesens": {
      "de": "er pfeift",
      "lv": "Fluieră el"
    },
    "imperfektIndikativ": {
      "de": "er pfiff",
      "lv": "Fluiera el"
    },
    "imperfektKonjunktiv": {
      "de": "er pfiffe",
      "lv": "El ar fluiera"
    },
    "partizipVergangenheit": {
      "de": "gepfiffen",
      "lv": "Fluierat"
    }
  },
  {
    "infinitiv": {
      "de": "pflegen",
      "lv": "Menţine"
    },
    "praesens": {
      "de": "er pflegt",
      "lv": "Îi pasă"
    },
    "imperfektIndikativ": {
      "de": "pflegte vai pflog",
      "lv": "Set"
    },
    "imperfektKonjunktiv": {
      "de": "pflegte vai pflog",
      "lv": "Set"
    },
    "partizipVergangenheit": {
      "de": "gepflegt vai gepflogen",
      "lv": "Îngrijit"
    }
  },
  {
    "infinitiv": {
      "de": "preisen",
      "lv": "Laudă"
    },
    "praesens": {
      "de": "er preist",
      "lv": "El laudă"
    },
    "imperfektIndikativ": {
      "de": "er pries",
      "lv": "A lăudat el"
    },
    "imperfektKonjunktiv": {
      "de": "er priese",
      "lv": "Ar lăuda"
    },
    "partizipVergangenheit": {
      "de": "gepriesen",
      "lv": "Lăudat"
    }
  },
  {
    "infinitiv": {
      "de": "quellen",
      "lv": "Înfoia"
    },
    "praesens": {
      "de": "er quillt",
      "lv": "Se ingrasa"
    },
    "imperfektIndikativ": {
      "de": "er quoll",
      "lv": "S-a maturizat"
    },
    "imperfektKonjunktiv": {
      "de": "er quölle",
      "lv": "El gras"
    },
    "partizipVergangenheit": {
      "de": "gequollen (er ist)",
      "lv": "Umflat"
    }
  },
  {
    "infinitiv": {
      "de": "raten",
      "lv": "Sugerează/menționează"
    },
    "praesens": {
      "de": "er rät",
      "lv": "El recomanda / min"
    },
    "imperfektIndikativ": {
      "de": "er riet",
      "lv": "A sugerat/a sugerat"
    },
    "imperfektKonjunktiv": {
      "de": "er riete",
      "lv": "El ar sugera/menționa"
    },
    "partizipVergangenheit": {
      "de": "geraten",
      "lv": "Sugerat/menționat"
    }
  },
  {
    "infinitiv": {
      "de": "reiben",
      "lv": "A freca"
    },
    "praesens": {
      "de": "er reibt",
      "lv": "El se freacă"
    },
    "imperfektIndikativ": {
      "de": "er rieb",
      "lv": "El se freacă"
    },
    "imperfektKonjunktiv": {
      "de": "er riebe",
      "lv": "El ar freca"
    },
    "partizipVergangenheit": {
      "de": "gerieben",
      "lv": "Frecat"
    }
  },
  {
    "infinitiv": {
      "de": "reißen",
      "lv": "Trage"
    },
    "praesens": {
      "de": "er reißt",
      "lv": "Se repezi el"
    },
    "imperfektIndikativ": {
      "de": "er riss",
      "lv": "Se răsti el"
    },
    "imperfektKonjunktiv": {
      "de": "er risse",
      "lv": "Se răsti el"
    },
    "partizipVergangenheit": {
      "de": "gerissen",
      "lv": "Rupt"
    }
  },
  {
    "infinitiv": {
      "de": "reiten",
      "lv": "Să călărească"
    },
    "praesens": {
      "de": "er reitet",
      "lv": "El calare"
    },
    "imperfektIndikativ": {
      "de": "er ritt",
      "lv": "A călărit"
    },
    "imperfektKonjunktiv": {
      "de": "er ritte",
      "lv": "Avea să călărească"
    },
    "partizipVergangenheit": {
      "de": "geritten (er ist)",
      "lv": "Călare"
    }
  },
  {
    "infinitiv": {
      "de": "rennen",
      "lv": "A alerga"
    },
    "praesens": {
      "de": "er rennt",
      "lv": "El aleargă"
    },
    "imperfektIndikativ": {
      "de": "er rannte",
      "lv": "A alergat"
    },
    "imperfektKonjunktiv": {
      "de": "er rennte",
      "lv": "Ar alerga"
    },
    "partizipVergangenheit": {
      "de": "gerannt",
      "lv": "A alergat"
    }
  },
  {
    "infinitiv": {
      "de": "riechen",
      "lv": "Ost"
    },
    "praesens": {
      "de": "er riecht",
      "lv": "El miroase"
    },
    "imperfektIndikativ": {
      "de": "er roch",
      "lv": "El cântă"
    },
    "imperfektKonjunktiv": {
      "de": "er röche",
      "lv": "El port"
    },
    "partizipVergangenheit": {
      "de": "gerochen",
      "lv": "Port"
    }
  },
  {
    "infinitiv": {
      "de": "ringen",
      "lv": "A rupe"
    },
    "praesens": {
      "de": "er ringt",
      "lv": "El se rupe"
    },
    "imperfektIndikativ": {
      "de": "er rang",
      "lv": "S-a stricat"
    },
    "imperfektKonjunktiv": {
      "de": "er ränge",
      "lv": "S-ar rupe"
    },
    "partizipVergangenheit": {
      "de": "gerungen",
      "lv": "Așteaptă"
    }
  },
  {
    "infinitiv": {
      "de": "rinnen",
      "lv": "A curge"
    },
    "praesens": {
      "de": "er rinnt",
      "lv": "El aleargă"
    },
    "imperfektIndikativ": {
      "de": "er rann",
      "lv": "A alergat"
    },
    "imperfektKonjunktiv": {
      "de": "er ränne / er rönne",
      "lv": "Ar alerga"
    },
    "partizipVergangenheit": {
      "de": "geronnen (er ist)",
      "lv": "Curgeat / coagulat"
    }
  },
  {
    "infinitiv": {
      "de": "rufen",
      "lv": "A suna"
    },
    "praesens": {
      "de": "er ruft",
      "lv": "Sună el"
    },
    "imperfektIndikativ": {
      "de": "er rief",
      "lv": "A sunat el"
    },
    "imperfektKonjunktiv": {
      "de": "er riefe",
      "lv": "Ar suna el"
    },
    "partizipVergangenheit": {
      "de": "gerufen",
      "lv": "Numit"
    }
  },
  {
    "infinitiv": {
      "de": "salzen",
      "lv": "La sare"
    },
    "praesens": {
      "de": "er salzt",
      "lv": "A sărat"
    },
    "imperfektIndikativ": {
      "de": "er salzte",
      "lv": "A sărat"
    },
    "imperfektKonjunktiv": {
      "de": "er salzte",
      "lv": "El ar sare"
    },
    "partizipVergangenheit": {
      "de": "gesalzen",
      "lv": "Sărat"
    }
  },
  {
    "infinitiv": {
      "de": "saufen",
      "lv": "Uscat / bea"
    },
    "praesens": {
      "de": "er säuft",
      "lv": "El bea / bea"
    },
    "imperfektIndikativ": {
      "de": "er soff",
      "lv": "A băut / a băut"
    },
    "imperfektKonjunktiv": {
      "de": "er söffe",
      "lv": "Ar bea / bea"
    },
    "partizipVergangenheit": {
      "de": "gesoffen",
      "lv": "Beat"
    }
  },
  {
    "infinitiv": {
      "de": "saugen",
      "lv": "Suge"
    },
    "praesens": {
      "de": "er saugt",
      "lv": "El naiba"
    },
    "imperfektIndikativ": {
      "de": "er sog",
      "lv": "A supt"
    },
    "imperfektKonjunktiv": {
      "de": "er söge",
      "lv": "Ar suge"
    },
    "partizipVergangenheit": {
      "de": "gesogen",
      "lv": "Supt"
    }
  },
  {
    "infinitiv": {
      "de": "schaffen",
      "lv": "A crea"
    },
    "praesens": {
      "de": "er schafft",
      "lv": "El creează"
    },
    "imperfektIndikativ": {
      "de": "er schuf",
      "lv": "El a creat"
    },
    "imperfektKonjunktiv": {
      "de": "er schüfe",
      "lv": "El ar crea"
    },
    "partizipVergangenheit": {
      "de": "geschaffen",
      "lv": "Creat"
    }
  },
  {
    "infinitiv": {
      "de": "schallen",
      "lv": "A suna"
    },
    "praesens": {
      "de": "es schallt",
      "lv": "Suna"
    },
    "imperfektIndikativ": {
      "de": "schallte vai scholl",
      "lv": "A sunat"
    },
    "imperfektKonjunktiv": {
      "de": "schallte vai scholl",
      "lv": "A sunat"
    },
    "partizipVergangenheit": {
      "de": "geschallt",
      "lv": "A sunat"
    }
  },
  {
    "infinitiv": {
      "de": "scheiden",
      "lv": "Divorț / despărțire"
    },
    "praesens": {
      "de": "er scheidet",
      "lv": "El divorțează / divorțează"
    },
    "imperfektIndikativ": {
      "de": "er schied",
      "lv": "A divorțat / a divorțat"
    },
    "imperfektKonjunktiv": {
      "de": "er schiede",
      "lv": "El ar divorţa / divorţa"
    },
    "partizipVergangenheit": {
      "de": "geschieden (er hat / er ist)",
      "lv": "Despărțiți/divorțați"
    }
  },
  {
    "infinitiv": {
      "de": "scheinen",
      "lv": "Strălucește / pare"
    },
    "praesens": {
      "de": "er scheint",
      "lv": "El strălucește / pare"
    },
    "imperfektIndikativ": {
      "de": "er schien",
      "lv": "A strălucit / părea"
    },
    "imperfektKonjunktiv": {
      "de": "er schiene",
      "lv": "El ar străluci / părea"
    },
    "partizipVergangenheit": {
      "de": "geschienen",
      "lv": "A strălucit / părea"
    }
  },
  {
    "infinitiv": {
      "de": "schelten",
      "lv": "Bart"
    },
    "praesens": {
      "de": "er schilt",
      "lv": "Certa el"
    },
    "imperfektIndikativ": {
      "de": "er schalt",
      "lv": "A interzis el"
    },
    "imperfektKonjunktiv": {
      "de": "er schölte / er schälte",
      "lv": "Se rade"
    },
    "partizipVergangenheit": {
      "de": "gescholten",
      "lv": "Barbă"
    }
  },
  {
    "infinitiv": {
      "de": "scheren",
      "lv": "A tăia"
    },
    "praesens": {
      "de": "er schert",
      "lv": "El taie"
    },
    "imperfektIndikativ": {
      "de": "schor vai scherte",
      "lv": "Foarfece"
    },
    "imperfektKonjunktiv": {
      "de": "schor vai scherte",
      "lv": "Foarfece"
    },
    "partizipVergangenheit": {
      "de": "geschoren vai geschert",
      "lv": "Decupat"
    }
  },
  {
    "infinitiv": {
      "de": "schieben",
      "lv": "A împinge"
    },
    "praesens": {
      "de": "er schiebt",
      "lv": "El împinge"
    },
    "imperfektIndikativ": {
      "de": "er schob",
      "lv": "A împins el"
    },
    "imperfektKonjunktiv": {
      "de": "er schöbe",
      "lv": "El ar împinge"
    },
    "partizipVergangenheit": {
      "de": "geschoben",
      "lv": "Împins"
    }
  },
  {
    "infinitiv": {
      "de": "schießen",
      "lv": "A trage"
    },
    "praesens": {
      "de": "er schießt",
      "lv": "El trage"
    },
    "imperfektIndikativ": {
      "de": "er schoss",
      "lv": "El a tras"
    },
    "imperfektKonjunktiv": {
      "de": "er schösse",
      "lv": "Ar trage"
    },
    "partizipVergangenheit": {
      "de": "geschossen",
      "lv": "Shot"
    }
  },
  {
    "infinitiv": {
      "de": "schinden",
      "lv": "Chin"
    },
    "praesens": {
      "de": "er schindet",
      "lv": "Se chinuie"
    },
    "imperfektIndikativ": {
      "de": "schindete",
      "lv": "Chinuit"
    },
    "imperfektKonjunktiv": {
      "de": "schindete",
      "lv": "Chinuit"
    },
    "partizipVergangenheit": {
      "de": "geschunden",
      "lv": "Chinuit"
    }
  },
  {
    "infinitiv": {
      "de": "schlafen",
      "lv": "A dormi"
    },
    "praesens": {
      "de": "er schläft",
      "lv": "El doarme"
    },
    "imperfektIndikativ": {
      "de": "er schlief",
      "lv": "El dormea"
    },
    "imperfektKonjunktiv": {
      "de": "er schliefe",
      "lv": "Ar dormi"
    },
    "partizipVergangenheit": {
      "de": "geschlafen",
      "lv": "A dormit"
    }
  },
  {
    "infinitiv": {
      "de": "schlagen",
      "lv": "Lovit"
    },
    "praesens": {
      "de": "er schlägt",
      "lv": "El loveste"
    },
    "imperfektIndikativ": {
      "de": "er schlug",
      "lv": "A lovit"
    },
    "imperfektKonjunktiv": {
      "de": "er schlüge",
      "lv": "Ar lovi"
    },
    "partizipVergangenheit": {
      "de": "geschlagen",
      "lv": "Bătut"
    }
  },
  {
    "infinitiv": {
      "de": "schleichen",
      "lv": "Plouă"
    },
    "praesens": {
      "de": "er schleicht",
      "lv": "El se apleacă"
    },
    "imperfektIndikativ": {
      "de": "er schlich",
      "lv": "A plouat"
    },
    "imperfektKonjunktiv": {
      "de": "er schliche",
      "lv": "El ploua"
    },
    "partizipVergangenheit": {
      "de": "geschlichen (er ist)",
      "lv": "A decedat"
    }
  },
  {
    "infinitiv": {
      "de": "schleifen",
      "lv": "A macina"
    },
    "praesens": {
      "de": "er schleift",
      "lv": "El macină"
    },
    "imperfektIndikativ": {
      "de": "er schliff",
      "lv": "Macina el"
    },
    "imperfektKonjunktiv": {
      "de": "er schliffe",
      "lv": "El ar macina"
    },
    "partizipVergangenheit": {
      "de": "geschliffen",
      "lv": "Lustruit"
    }
  },
  {
    "infinitiv": {
      "de": "schließen",
      "lv": "A inchide"
    },
    "praesens": {
      "de": "er schließt",
      "lv": "El inchide"
    },
    "imperfektIndikativ": {
      "de": "er schloss",
      "lv": "A închis"
    },
    "imperfektKonjunktiv": {
      "de": "er schlösse",
      "lv": "Ar închide"
    },
    "partizipVergangenheit": {
      "de": "geschlossen",
      "lv": "Închis"
    }
  },
  {
    "infinitiv": {
      "de": "schlingen",
      "lv": "Mâine"
    },
    "praesens": {
      "de": "er schlingt",
      "lv": "El înghite"
    },
    "imperfektIndikativ": {
      "de": "er schlang",
      "lv": "A înghițit"
    },
    "imperfektKonjunktiv": {
      "de": "er schlänge",
      "lv": "El dimineata"
    },
    "partizipVergangenheit": {
      "de": "geschlungen",
      "lv": "Dimineata"
    }
  },
  {
    "infinitiv": {
      "de": "schmeißen",
      "lv": "Arunca"
    },
    "praesens": {
      "de": "er schmeißt",
      "lv": "El aruncă"
    },
    "imperfektIndikativ": {
      "de": "er schmiss",
      "lv": "A aruncat"
    },
    "imperfektKonjunktiv": {
      "de": "er schmisse",
      "lv": "A aruncat"
    },
    "partizipVergangenheit": {
      "de": "geschmissen",
      "lv": "Aruncat"
    }
  },
  {
    "infinitiv": {
      "de": "schmelzen",
      "lv": "În mișcare"
    },
    "praesens": {
      "de": "er schmilzt",
      "lv": "El se topește"
    },
    "imperfektIndikativ": {
      "de": "er schmolz",
      "lv": "Gemu el"
    },
    "imperfektKonjunktiv": {
      "de": "er schmölze",
      "lv": "Se mişca"
    },
    "partizipVergangenheit": {
      "de": "geschmolzen (er ist)",
      "lv": "Topit"
    }
  },
  {
    "infinitiv": {
      "de": "schnauben",
      "lv": "La şuierat"
    },
    "praesens": {
      "de": "er schnaubt",
      "lv": "El pufnește"
    },
    "imperfektIndikativ": {
      "de": "schnaubte vai schnob",
      "lv": "Pufni"
    },
    "imperfektKonjunktiv": {
      "de": "schnaubte vai schnob",
      "lv": "Pufni"
    },
    "partizipVergangenheit": {
      "de": "geschnaubt vai geschnoben",
      "lv": "Pufni"
    }
  },
  {
    "infinitiv": {
      "de": "schneiden",
      "lv": "A tăia"
    },
    "praesens": {
      "de": "er schneidet",
      "lv": "El se învârte"
    },
    "imperfektIndikativ": {
      "de": "er schnitt",
      "lv": "El tăia"
    },
    "imperfektKonjunktiv": {
      "de": "er schnitte",
      "lv": "Ar tăia"
    },
    "partizipVergangenheit": {
      "de": "geschnitten",
      "lv": "Tăiat"
    }
  },
  {
    "infinitiv": {
      "de": "schreiben",
      "lv": "A scrie"
    },
    "praesens": {
      "de": "er schreibt",
      "lv": "Scrie el"
    },
    "imperfektIndikativ": {
      "de": "er schrieb",
      "lv": "A scris el"
    },
    "imperfektKonjunktiv": {
      "de": "er schriebe",
      "lv": "El ar scrie"
    },
    "partizipVergangenheit": {
      "de": "geschrieben",
      "lv": "Scris"
    }
  },
  {
    "infinitiv": {
      "de": "schreien",
      "lv": "A striga"
    },
    "praesens": {
      "de": "er schreit",
      "lv": "Strigă el"
    },
    "imperfektIndikativ": {
      "de": "er schrie",
      "lv": "A strigat el"
    },
    "imperfektKonjunktiv": {
      "de": "er schriee",
      "lv": "Ar striga el"
    },
    "partizipVergangenheit": {
      "de": "geschrien",
      "lv": "Strigă"
    }
  },
  {
    "infinitiv": {
      "de": "schreiten",
      "lv": "Mers pe jos"
    },
    "praesens": {
      "de": "er schreitet",
      "lv": "El merge"
    },
    "imperfektIndikativ": {
      "de": "er schritt",
      "lv": "El mergea"
    },
    "imperfektKonjunktiv": {
      "de": "er schritte",
      "lv": "Ar merge"
    },
    "partizipVergangenheit": {
      "de": "geschritten (er ist)",
      "lv": "Mers"
    }
  },
  {
    "infinitiv": {
      "de": "schweigen",
      "lv": "Taci"
    },
    "praesens": {
      "de": "er schweigt",
      "lv": "El tace"
    },
    "imperfektIndikativ": {
      "de": "er schwieg",
      "lv": "Tăcea"
    },
    "imperfektKonjunktiv": {
      "de": "er schwiege",
      "lv": "Ar fi tăcut"
    },
    "partizipVergangenheit": {
      "de": "geschwiegen",
      "lv": "Redus la tăcere"
    }
  },
  {
    "infinitiv": {
      "de": "schwellen",
      "lv": "Pamp"
    },
    "praesens": {
      "de": "er schwillt",
      "lv": "Se ciufulie"
    },
    "imperfektIndikativ": {
      "de": "er schwoll",
      "lv": "El pampas"
    },
    "imperfektKonjunktiv": {
      "de": "er schwölle",
      "lv": "Ar pompa"
    },
    "partizipVergangenheit": {
      "de": "geschwollen (er ist)",
      "lv": "Pompa"
    }
  },
  {
    "infinitiv": {
      "de": "schwimmen",
      "lv": "A înota"
    },
    "praesens": {
      "de": "er schwimmt",
      "lv": "El înoată"
    },
    "imperfektIndikativ": {
      "de": "er schwamm",
      "lv": "El înota"
    },
    "imperfektKonjunktiv": {
      "de": "er schwömme / er schwämme",
      "lv": "Ar înota"
    },
    "partizipVergangenheit": {
      "de": "geschwommen (er ist)",
      "lv": "Înotat"
    }
  },
  {
    "infinitiv": {
      "de": "schwinden",
      "lv": "Dispărea"
    },
    "praesens": {
      "de": "er schwindet",
      "lv": "El dispare"
    },
    "imperfektIndikativ": {
      "de": "er schwand",
      "lv": "El a dispărut"
    },
    "imperfektKonjunktiv": {
      "de": "er schwände",
      "lv": "El ar dispărea"
    },
    "partizipVergangenheit": {
      "de": "geschwunden (er ist)",
      "lv": "Pierdut"
    }
  },
  {
    "infinitiv": {
      "de": "schwingen",
      "lv": "Val"
    },
    "praesens": {
      "de": "er schwingt",
      "lv": "El face cu mâna"
    },
    "imperfektIndikativ": {
      "de": "er schwang",
      "lv": "Făcu cu mâna"
    },
    "imperfektKonjunktiv": {
      "de": "er schwänge",
      "lv": "Ar face cu mâna"
    },
    "partizipVergangenheit": {
      "de": "geschwungen",
      "lv": "Ondulat"
    }
  },
  {
    "infinitiv": {
      "de": "schwören",
      "lv": "A jura"
    },
    "praesens": {
      "de": "er schwört",
      "lv": "Înjură el"
    },
    "imperfektIndikativ": {
      "de": "er schwur / er schwor",
      "lv": "A înjurat"
    },
    "imperfektKonjunktiv": {
      "de": "er schwöre",
      "lv": "Ar jura"
    },
    "partizipVergangenheit": {
      "de": "geschworen",
      "lv": "Jurat"
    }
  },
  {
    "infinitiv": {
      "de": "sehen",
      "lv": "Pentru a vedea"
    },
    "praesens": {
      "de": "er sieht",
      "lv": "El vede"
    },
    "imperfektIndikativ": {
      "de": "er sah",
      "lv": "A văzut"
    },
    "imperfektKonjunktiv": {
      "de": "er sähe",
      "lv": "Ar vedea"
    },
    "partizipVergangenheit": {
      "de": "gesehen",
      "lv": "Văzut"
    }
  },
  {
    "infinitiv": {
      "de": "sein",
      "lv": "A fi"
    },
    "praesens": {
      "de": "er ist",
      "lv": "El este"
    },
    "imperfektIndikativ": {
      "de": "war",
      "lv": "A fost"
    },
    "imperfektKonjunktiv": {
      "de": "war",
      "lv": "A fost"
    },
    "partizipVergangenheit": {
      "de": "gewesen",
      "lv": "Fost"
    }
  },
  {
    "infinitiv": {
      "de": "senden",
      "lv": "A trimite"
    },
    "praesens": {
      "de": "er sendet",
      "lv": "El trimite"
    },
    "imperfektIndikativ": {
      "de": "er sandte / er sendete",
      "lv": "A trimis"
    },
    "imperfektKonjunktiv": {
      "de": "er sendete",
      "lv": "Ar trimite"
    },
    "partizipVergangenheit": {
      "de": "gesandt / gesendet",
      "lv": "Trimis"
    }
  },
  {
    "infinitiv": {
      "de": "sieden",
      "lv": "A fierbe"
    },
    "praesens": {
      "de": "er siedet",
      "lv": "El gătește"
    },
    "imperfektIndikativ": {
      "de": "sott vai siedete",
      "lv": "Fierte"
    },
    "imperfektKonjunktiv": {
      "de": "sott vai siedete",
      "lv": "Fierte"
    },
    "partizipVergangenheit": {
      "de": "gesotten vai gesiedet",
      "lv": "Fiert"
    }
  },
  {
    "infinitiv": {
      "de": "singen",
      "lv": "A cânta"
    },
    "praesens": {
      "de": "er singt",
      "lv": "El cântă"
    },
    "imperfektIndikativ": {
      "de": "er sang",
      "lv": "A cântat"
    },
    "imperfektKonjunktiv": {
      "de": "er sänge",
      "lv": "El ar cânta"
    },
    "partizipVergangenheit": {
      "de": "gesungen",
      "lv": "Cântat"
    }
  },
  {
    "infinitiv": {
      "de": "sinken",
      "lv": "A se scufunda"
    },
    "praesens": {
      "de": "er sinkt",
      "lv": "El se scufundă"
    },
    "imperfektIndikativ": {
      "de": "er sank",
      "lv": "El se inventa"
    },
    "imperfektKonjunktiv": {
      "de": "er sänke",
      "lv": "S-ar scufunda"
    },
    "partizipVergangenheit": {
      "de": "gesunken (er ist)",
      "lv": "Inventa"
    }
  },
  {
    "infinitiv": {
      "de": "sinnen",
      "lv": "A se mira"
    },
    "praesens": {
      "de": "er sinnt",
      "lv": "Se întreabă el"
    },
    "imperfektIndikativ": {
      "de": "er sann",
      "lv": "Se întrebă el"
    },
    "imperfektKonjunktiv": {
      "de": "er sönne / er sänne",
      "lv": "S-ar întreba el"
    },
    "partizipVergangenheit": {
      "de": "gesonnen",
      "lv": "Minte"
    }
  },
  {
    "infinitiv": {
      "de": "sitzen",
      "lv": "A sta"
    },
    "praesens": {
      "de": "er sitzt",
      "lv": "El stă"
    },
    "imperfektIndikativ": {
      "de": "er sass",
      "lv": "El stătea"
    },
    "imperfektKonjunktiv": {
      "de": "er säße",
      "lv": "El ar sta"
    },
    "partizipVergangenheit": {
      "de": "gesessen",
      "lv": "S-a asezat"
    }
  },
  {
    "infinitiv": {
      "de": "sollen",
      "lv": "Nevoie / fi obligat"
    },
    "praesens": {
      "de": "er soll",
      "lv": "Are nevoie"
    },
    "imperfektIndikativ": {
      "de": "sollte",
      "lv": "Ar trebui să aibă"
    },
    "imperfektKonjunktiv": {
      "de": "sollte",
      "lv": "Ar trebui să aibă"
    },
    "partizipVergangenheit": {
      "de": "gesollt",
      "lv": "Necesare"
    }
  },
  {
    "infinitiv": {
      "de": "speien",
      "lv": "A scuipa"
    },
    "praesens": {
      "de": "er speit",
      "lv": "Scuipă el"
    },
    "imperfektIndikativ": {
      "de": "er spie",
      "lv": "A scuipat"
    },
    "imperfektKonjunktiv": {
      "de": "er spie",
      "lv": "Ar scuipa"
    },
    "partizipVergangenheit": {
      "de": "gespien",
      "lv": "Scuipat afară"
    }
  },
  {
    "infinitiv": {
      "de": "spinnen",
      "lv": "Rotire"
    },
    "praesens": {
      "de": "er spinnt",
      "lv": "El se rasuceste"
    },
    "imperfektIndikativ": {
      "de": "er spann",
      "lv": "S-a învârtit"
    },
    "imperfektKonjunktiv": {
      "de": "er spönne / er spänne",
      "lv": "S-ar învârti"
    },
    "partizipVergangenheit": {
      "de": "gesponnen",
      "lv": "Filat"
    }
  },
  {
    "infinitiv": {
      "de": "spleißen",
      "lv": "Să se conecteze"
    },
    "praesens": {
      "de": "er spleißt",
      "lv": "El conectează"
    },
    "imperfektIndikativ": {
      "de": "spliss",
      "lv": "Conectat"
    },
    "imperfektKonjunktiv": {
      "de": "spliss",
      "lv": "Conectat"
    },
    "partizipVergangenheit": {
      "de": "gesplissen",
      "lv": "Conectat"
    }
  },
  {
    "infinitiv": {
      "de": "sprechen",
      "lv": "A vorbi"
    },
    "praesens": {
      "de": "er spricht",
      "lv": "El vorbeste"
    },
    "imperfektIndikativ": {
      "de": "er sprach",
      "lv": "A vorbit"
    },
    "imperfektKonjunktiv": {
      "de": "er spräche",
      "lv": "El ar vorbi"
    },
    "partizipVergangenheit": {
      "de": "gesprochen",
      "lv": "Vorbit"
    }
  },
  {
    "infinitiv": {
      "de": "sprießen",
      "lv": "Prospera"
    },
    "praesens": {
      "de": "er sprießt",
      "lv": "El prosperă"
    },
    "imperfektIndikativ": {
      "de": "er spross",
      "lv": "A prosperat"
    },
    "imperfektKonjunktiv": {
      "de": "er sprösse",
      "lv": "El raftul"
    },
    "partizipVergangenheit": {
      "de": "gesprossen (er ist)",
      "lv": "Umărul"
    }
  },
  {
    "infinitiv": {
      "de": "springen",
      "lv": "A sari"
    },
    "praesens": {
      "de": "er springt",
      "lv": "El sare"
    },
    "imperfektIndikativ": {
      "de": "er sprang",
      "lv": "A sărit"
    },
    "imperfektKonjunktiv": {
      "de": "er spränge",
      "lv": "Ar sări"
    },
    "partizipVergangenheit": {
      "de": "gesprungen (er ist)",
      "lv": "Obiectiv"
    }
  },
  {
    "infinitiv": {
      "de": "stechen",
      "lv": "Înjunghia"
    },
    "praesens": {
      "de": "er sticht",
      "lv": "El înjunghie"
    },
    "imperfektIndikativ": {
      "de": "er stach",
      "lv": "A dat cu pumnul"
    },
    "imperfektKonjunktiv": {
      "de": "er stäche",
      "lv": "Ar înjunghia"
    },
    "partizipVergangenheit": {
      "de": "gestochen",
      "lv": "Înjunghiat"
    }
  },
  {
    "infinitiv": {
      "de": "stecken",
      "lv": "A lipi / a lipi înăuntru"
    },
    "praesens": {
      "de": "er steckt",
      "lv": "El împinge"
    },
    "imperfektIndikativ": {
      "de": "stak vai steckte",
      "lv": "Umplute"
    },
    "imperfektKonjunktiv": {
      "de": "stak vai steckte",
      "lv": "Umplute"
    },
    "partizipVergangenheit": {
      "de": "gesteckt",
      "lv": "Umplute"
    }
  },
  {
    "infinitiv": {
      "de": "stehen",
      "lv": "A sta în picioare"
    },
    "praesens": {
      "de": "er steht",
      "lv": "El stă în picioare"
    },
    "imperfektIndikativ": {
      "de": "er stand",
      "lv": "Stătea în picioare"
    },
    "imperfektKonjunktiv": {
      "de": "er stände / er stünde",
      "lv": "El ar sta în picioare"
    },
    "partizipVergangenheit": {
      "de": "gestanden",
      "lv": "Permanent"
    }
  },
  {
    "infinitiv": {
      "de": "stehlen",
      "lv": "A fura"
    },
    "praesens": {
      "de": "er stiehlt",
      "lv": "El fură"
    },
    "imperfektIndikativ": {
      "de": "er stahl",
      "lv": "A furat"
    },
    "imperfektKonjunktiv": {
      "de": "er stöhle / er stähle",
      "lv": "Ar fura"
    },
    "partizipVergangenheit": {
      "de": "gestohlen",
      "lv": "Furat"
    }
  },
  {
    "infinitiv": {
      "de": "steigen",
      "lv": "A urca"
    },
    "praesens": {
      "de": "er steigt",
      "lv": "El urcă"
    },
    "imperfektIndikativ": {
      "de": "er stieg",
      "lv": "A urcat"
    },
    "imperfektKonjunktiv": {
      "de": "er stiege",
      "lv": "El ar urca"
    },
    "partizipVergangenheit": {
      "de": "gestiegen (er ist)",
      "lv": "Urcat"
    }
  },
  {
    "infinitiv": {
      "de": "sterben",
      "lv": "A muri"
    },
    "praesens": {
      "de": "er stirbt",
      "lv": "El este pe moarte"
    },
    "imperfektIndikativ": {
      "de": "er starb",
      "lv": "A murit"
    },
    "imperfektKonjunktiv": {
      "de": "er stürbe",
      "lv": "El ar muri"
    },
    "partizipVergangenheit": {
      "de": "gestorben (er ist)",
      "lv": "Mort"
    }
  },
  {
    "infinitiv": {
      "de": "stieben",
      "lv": "Spumă / vârtej"
    },
    "praesens": {
      "de": "es stiebt",
      "lv": "Suflă"
    },
    "imperfektIndikativ": {
      "de": "stob vai stiebte",
      "lv": "Spumat"
    },
    "imperfektKonjunktiv": {
      "de": "stob vai stiebte",
      "lv": "Spumat"
    },
    "partizipVergangenheit": {
      "de": "gestoben vai gestiebt",
      "lv": "Stricat"
    }
  },
  {
    "infinitiv": {
      "de": "stinken",
      "lv": "A mirosi"
    },
    "praesens": {
      "de": "es stinkt",
      "lv": "Miroase"
    },
    "imperfektIndikativ": {
      "de": "stank",
      "lv": "Mirosit"
    },
    "imperfektKonjunktiv": {
      "de": "stank",
      "lv": "Mirosit"
    },
    "partizipVergangenheit": {
      "de": "gestunken",
      "lv": "Mirositoare"
    }
  },
  {
    "infinitiv": {
      "de": "stoßen",
      "lv": "Apăsaţi"
    },
    "praesens": {
      "de": "er stößt",
      "lv": "El împinge"
    },
    "imperfektIndikativ": {
      "de": "er stieß",
      "lv": "A împins el"
    },
    "imperfektKonjunktiv": {
      "de": "er stieße",
      "lv": "El împingea"
    },
    "partizipVergangenheit": {
      "de": "gestoßen",
      "lv": "Împins"
    }
  },
  {
    "infinitiv": {
      "de": "streichen",
      "lv": "Vopsea / bandă"
    },
    "praesens": {
      "de": "er streicht",
      "lv": "El pictează / dungi"
    },
    "imperfektIndikativ": {
      "de": "er strich",
      "lv": "A pictat / dungi"
    },
    "imperfektKonjunktiv": {
      "de": "er striche",
      "lv": "El ar picta / depuia"
    },
    "partizipVergangenheit": {
      "de": "gestrichen",
      "lv": "Pictat / dungi"
    }
  },
  {
    "infinitiv": {
      "de": "streiten",
      "lv": "A lupta"
    },
    "praesens": {
      "de": "er streitet",
      "lv": "El se lupta"
    },
    "imperfektIndikativ": {
      "de": "er stritt",
      "lv": "S-a zbătut"
    },
    "imperfektKonjunktiv": {
      "de": "er stritte",
      "lv": "El ar lupta"
    },
    "partizipVergangenheit": {
      "de": "gestritten",
      "lv": "Luptat"
    }
  },
  {
    "infinitiv": {
      "de": "tragen",
      "lv": "Transporta"
    },
    "praesens": {
      "de": "er trägt",
      "lv": "El poartă"
    },
    "imperfektIndikativ": {
      "de": "er trug",
      "lv": "A purtat"
    },
    "imperfektKonjunktiv": {
      "de": "er trüge",
      "lv": "El ar duce"
    },
    "partizipVergangenheit": {
      "de": "getragen",
      "lv": "Purtat"
    }
  },
  {
    "infinitiv": {
      "de": "treffen",
      "lv": "A întâlni"
    },
    "praesens": {
      "de": "er trifft",
      "lv": "El intalneste"
    },
    "imperfektIndikativ": {
      "de": "er traf",
      "lv": "A întâlnit"
    },
    "imperfektKonjunktiv": {
      "de": "er träfe",
      "lv": "El ar întâlni"
    },
    "partizipVergangenheit": {
      "de": "getroffen",
      "lv": "Întâlnit"
    }
  },
  {
    "infinitiv": {
      "de": "treiben",
      "lv": "Goana"
    },
    "praesens": {
      "de": "er treibt",
      "lv": "El conduce"
    },
    "imperfektIndikativ": {
      "de": "er trieb",
      "lv": "A condus"
    },
    "imperfektKonjunktiv": {
      "de": "er triebe",
      "lv": "El ar conduce"
    },
    "partizipVergangenheit": {
      "de": "getrieben",
      "lv": "Urmărit"
    }
  },
  {
    "infinitiv": {
      "de": "treten",
      "lv": "Intra/du-te"
    },
    "praesens": {
      "de": "er tritt",
      "lv": "El intră / pleacă"
    },
    "imperfektIndikativ": {
      "de": "er trat",
      "lv": "A stat/a mers"
    },
    "imperfektKonjunktiv": {
      "de": "er träte",
      "lv": "El ar sta / ar merge"
    },
    "partizipVergangenheit": {
      "de": "getreten (er ist)",
      "lv": "A stat / a mers"
    }
  },
  {
    "infinitiv": {
      "de": "trinken",
      "lv": "A bea"
    },
    "praesens": {
      "de": "er trinkt",
      "lv": "El bea"
    },
    "imperfektIndikativ": {
      "de": "er trank",
      "lv": "El bea"
    },
    "imperfektKonjunktiv": {
      "de": "er tränke",
      "lv": "Ar bea"
    },
    "partizipVergangenheit": {
      "de": "getrunken",
      "lv": "Beat"
    }
  },
  {
    "infinitiv": {
      "de": "trügen",
      "lv": "A înșela"
    },
    "praesens": {
      "de": "er trögt",
      "lv": "El inseala"
    },
    "imperfektIndikativ": {
      "de": "er trog",
      "lv": "A înșelat"
    },
    "imperfektKonjunktiv": {
      "de": "er tröge",
      "lv": "Ar înșela"
    },
    "partizipVergangenheit": {
      "de": "getrogen",
      "lv": "Înșelat"
    }
  },
  {
    "infinitiv": {
      "de": "tun",
      "lv": "A face"
    },
    "praesens": {
      "de": "er tut",
      "lv": "El face"
    },
    "imperfektIndikativ": {
      "de": "er tat",
      "lv": "A făcut-o"
    },
    "imperfektKonjunktiv": {
      "de": "er täte",
      "lv": "El ar face"
    },
    "partizipVergangenheit": {
      "de": "getan",
      "lv": "Făcut"
    }
  },
  {
    "infinitiv": {
      "de": "verderben",
      "lv": "A deteriora"
    },
    "praesens": {
      "de": "er verdirbt",
      "lv": "El distruge"
    },
    "imperfektIndikativ": {
      "de": "er verdarb",
      "lv": "A deteriorat"
    },
    "imperfektKonjunktiv": {
      "de": "er verdürbe",
      "lv": "El ar strica"
    },
    "partizipVergangenheit": {
      "de": "verdorben",
      "lv": "Deteriorat"
    }
  },
  {
    "infinitiv": {
      "de": "verdrießen",
      "lv": "A provoca supărare"
    },
    "praesens": {
      "de": "er verdrießt",
      "lv": "El provoacă supărare"
    },
    "imperfektIndikativ": {
      "de": "er verdross",
      "lv": "A provocat supărare"
    },
    "imperfektKonjunktiv": {
      "de": "er verdrösse",
      "lv": "Ar provoca supărare"
    },
    "partizipVergangenheit": {
      "de": "verdrossen",
      "lv": "Supărat"
    }
  },
  {
    "infinitiv": {
      "de": "vergessen",
      "lv": "Uita"
    },
    "praesens": {
      "de": "er vergisst",
      "lv": "El uită"
    },
    "imperfektIndikativ": {
      "de": "er vergass",
      "lv": "A uitat"
    },
    "imperfektKonjunktiv": {
      "de": "er vergäße",
      "lv": "Ar uita"
    },
    "partizipVergangenheit": {
      "de": "vergessen",
      "lv": "Uitat"
    }
  },
  {
    "infinitiv": {
      "de": "verlieren",
      "lv": "A pierde"
    },
    "praesens": {
      "de": "er verliert",
      "lv": "El pierde"
    },
    "imperfektIndikativ": {
      "de": "er verlor",
      "lv": "A pierdut"
    },
    "imperfektKonjunktiv": {
      "de": "er verlöre",
      "lv": "El ar pierde"
    },
    "partizipVergangenheit": {
      "de": "verloren",
      "lv": "Pierdut"
    }
  },
  {
    "infinitiv": {
      "de": "wachsen",
      "lv": "Să crească"
    },
    "praesens": {
      "de": "er wächst",
      "lv": "El creste"
    },
    "imperfektIndikativ": {
      "de": "er wuchs",
      "lv": "El creștea"
    },
    "imperfektKonjunktiv": {
      "de": "er wüchse",
      "lv": "Avea să crească"
    },
    "partizipVergangenheit": {
      "de": "gewachsen (er ist)",
      "lv": "A crescut"
    }
  },
  {
    "infinitiv": {
      "de": "waschen",
      "lv": "A se spala"
    },
    "praesens": {
      "de": "er wäscht",
      "lv": "El spală"
    },
    "imperfektIndikativ": {
      "de": "er wusch",
      "lv": "S-a spălat"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsche",
      "lv": "El s-ar spăla"
    },
    "partizipVergangenheit": {
      "de": "gewaschen",
      "lv": "Spălat"
    }
  },
  {
    "infinitiv": {
      "de": "weben",
      "lv": "Ţese"
    },
    "praesens": {
      "de": "er webt",
      "lv": "El țese"
    },
    "imperfektIndikativ": {
      "de": "wob",
      "lv": "Tesut"
    },
    "imperfektKonjunktiv": {
      "de": "wob",
      "lv": "Tesut"
    },
    "partizipVergangenheit": {
      "de": "gewoben",
      "lv": "Țesute"
    }
  },
  {
    "infinitiv": {
      "de": "weichen",
      "lv": "A se retrage"
    },
    "praesens": {
      "de": "er weicht",
      "lv": "Se dă înapoi"
    },
    "imperfektIndikativ": {
      "de": "er wich",
      "lv": "S-a dat înapoi"
    },
    "imperfektKonjunktiv": {
      "de": "er wiche",
      "lv": "S-ar da înapoi"
    },
    "partizipVergangenheit": {
      "de": "gewichen (er ist)",
      "lv": "Da înapoi"
    }
  },
  {
    "infinitiv": {
      "de": "weisen",
      "lv": "Spectacol"
    },
    "praesens": {
      "de": "er weist",
      "lv": "Arată el"
    },
    "imperfektIndikativ": {
      "de": "er wies",
      "lv": "A arătat el"
    },
    "imperfektKonjunktiv": {
      "de": "er wiese",
      "lv": "El ar arăta"
    },
    "partizipVergangenheit": {
      "de": "gewiesen",
      "lv": "Arătat"
    }
  },
  {
    "infinitiv": {
      "de": "wenden",
      "lv": "Modifica/decupează"
    },
    "praesens": {
      "de": "er wendet",
      "lv": "El se răsucește / se întoarce"
    },
    "imperfektIndikativ": {
      "de": "er wandte / es wendete",
      "lv": "S-a răsucit / s-a întors"
    },
    "imperfektKonjunktiv": {
      "de": "er wendete",
      "lv": "El ar modifica / invers"
    },
    "partizipVergangenheit": {
      "de": "gewandt / gewendet",
      "lv": "Modificat/inversat"
    }
  },
  {
    "infinitiv": {
      "de": "werben",
      "lv": "A propune"
    },
    "praesens": {
      "de": "er wirbt",
      "lv": "Propune el"
    },
    "imperfektIndikativ": {
      "de": "er warb",
      "lv": "A propus el"
    },
    "imperfektKonjunktiv": {
      "de": "er würbe",
      "lv": "El ar propune"
    },
    "partizipVergangenheit": {
      "de": "geworben",
      "lv": "Propus să"
    }
  },
  {
    "infinitiv": {
      "de": "werden",
      "lv": "A deveni"
    },
    "praesens": {
      "de": "er wird",
      "lv": "El devine"
    },
    "imperfektIndikativ": {
      "de": "wurde",
      "lv": "Devenit"
    },
    "imperfektKonjunktiv": {
      "de": "wurde",
      "lv": "Devenit"
    },
    "partizipVergangenheit": {
      "de": "geworden",
      "lv": "A devenit"
    }
  },
  {
    "infinitiv": {
      "de": "werfen",
      "lv": "Arunca"
    },
    "praesens": {
      "de": "er wirft",
      "lv": "El aruncă"
    },
    "imperfektIndikativ": {
      "de": "er warf",
      "lv": "A aruncat"
    },
    "imperfektKonjunktiv": {
      "de": "er würfe",
      "lv": "A aruncat"
    },
    "partizipVergangenheit": {
      "de": "geworfen",
      "lv": "Aruncat"
    }
  },
  {
    "infinitiv": {
      "de": "wiegen",
      "lv": "A cantari"
    },
    "praesens": {
      "de": "er wiegt",
      "lv": "El cantareste"
    },
    "imperfektIndikativ": {
      "de": "er wog",
      "lv": "A cântărit"
    },
    "imperfektKonjunktiv": {
      "de": "er wöge",
      "lv": "El ar cântări"
    },
    "partizipVergangenheit": {
      "de": "gewogen",
      "lv": "Ponderat"
    }
  },
  {
    "infinitiv": {
      "de": "winden",
      "lv": "Împletitură"
    },
    "praesens": {
      "de": "er windet",
      "lv": "El pin"
    },
    "imperfektIndikativ": {
      "de": "er wand",
      "lv": "El împletește"
    },
    "imperfektKonjunktiv": {
      "de": "er wände",
      "lv": "El ar împleti"
    },
    "partizipVergangenheit": {
      "de": "gewunden",
      "lv": "Împletit"
    }
  },
  {
    "infinitiv": {
      "de": "wissen",
      "lv": "A sti"
    },
    "praesens": {
      "de": "er weiß",
      "lv": "El stie"
    },
    "imperfektIndikativ": {
      "de": "er wusste",
      "lv": "El știa"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsste",
      "lv": "El ar ști"
    },
    "partizipVergangenheit": {
      "de": "gewusst",
      "lv": "Cunoscut"
    }
  },
  {
    "infinitiv": {
      "de": "wollen",
      "lv": "Vreau să"
    },
    "praesens": {
      "de": "er will",
      "lv": "El vrea"
    },
    "imperfektIndikativ": {
      "de": "wollte",
      "lv": "Voia"
    },
    "imperfektKonjunktiv": {
      "de": "wollte",
      "lv": "Voia"
    },
    "partizipVergangenheit": {
      "de": "gewollt",
      "lv": "Voia"
    }
  },
  {
    "infinitiv": {
      "de": "wringen",
      "lv": "Decupat / stoarce"
    },
    "praesens": {
      "de": "er wringt",
      "lv": "Decupează el"
    },
    "imperfektIndikativ": {
      "de": "wrang",
      "lv": "Elimina"
    },
    "imperfektKonjunktiv": {
      "de": "wrang",
      "lv": "Elimina"
    },
    "partizipVergangenheit": {
      "de": "gewrungen",
      "lv": "Elimina"
    }
  },
  {
    "infinitiv": {
      "de": "zeihen",
      "lv": "De vina"
    },
    "praesens": {
      "de": "er zeiht",
      "lv": "El da vina"
    },
    "imperfektIndikativ": {
      "de": "zieh",
      "lv": "Blamat"
    },
    "imperfektKonjunktiv": {
      "de": "zieh",
      "lv": "Blamat"
    },
    "partizipVergangenheit": {
      "de": "geziehen",
      "lv": "Blamat"
    }
  },
  {
    "infinitiv": {
      "de": "ziehen",
      "lv": "A trage"
    },
    "praesens": {
      "de": "er zieht",
      "lv": "El trage"
    },
    "imperfektIndikativ": {
      "de": "er zog",
      "lv": "A tras"
    },
    "imperfektKonjunktiv": {
      "de": "er zöge",
      "lv": "El ar târî"
    },
    "partizipVergangenheit": {
      "de": "gezogen",
      "lv": "Târât"
    }
  },
  {
    "infinitiv": {
      "de": "zwingen",
      "lv": "A forţa"
    },
    "praesens": {
      "de": "er zwingt",
      "lv": "El forțează"
    },
    "imperfektIndikativ": {
      "de": "er zwang",
      "lv": "A forțat"
    },
    "imperfektKonjunktiv": {
      "de": "er zwänge",
      "lv": "El ar forţa"
    },
    "partizipVergangenheit": {
      "de": "gezwungen",
      "lv": "Forţat"
    }
  },
  {
    "infinitiv": {
      "de": "empfangen",
      "lv": "A primi"
    },
    "praesens": {
      "de": "er empfängt",
      "lv": "El primeste"
    },
    "imperfektIndikativ": {
      "de": "er empfing",
      "lv": "El a primit"
    },
    "imperfektKonjunktiv": {
      "de": "er empfinge",
      "lv": "El ar primi"
    },
    "partizipVergangenheit": {
      "de": "empfangen",
      "lv": "Primit"
    }
  },
  {
    "infinitiv": {
      "de": "erwägen",
      "lv": "A lua în considerare"
    },
    "praesens": {
      "de": "er erwägt",
      "lv": "Consideră el"
    },
    "imperfektIndikativ": {
      "de": "er erwog",
      "lv": "Se gândi el"
    },
    "imperfektKonjunktiv": {
      "de": "er erwöge",
      "lv": "El ar lua în considerare"
    },
    "partizipVergangenheit": {
      "de": "erwogen",
      "lv": "Considerată"
    }
  },
  {
    "infinitiv": {
      "de": "fechten",
      "lv": "A lupta"
    },
    "praesens": {
      "de": "er ficht",
      "lv": "El se lupta"
    },
    "imperfektIndikativ": {
      "de": "er focht",
      "lv": "S-a zbătut"
    },
    "imperfektKonjunktiv": {
      "de": "er föchte",
      "lv": "El ar lupta"
    },
    "partizipVergangenheit": {
      "de": "gefochten",
      "lv": "Luptat"
    }
  },
  {
    "infinitiv": {
      "de": "flechten",
      "lv": "Împletitură"
    },
    "praesens": {
      "de": "er flicht",
      "lv": "El pin"
    },
    "imperfektIndikativ": {
      "de": "er flocht",
      "lv": "El împletește"
    },
    "imperfektKonjunktiv": {
      "de": "er flöchte",
      "lv": "El ar împleti"
    },
    "partizipVergangenheit": {
      "de": "geflochten",
      "lv": "Împletit"
    }
  },
  {
    "infinitiv": {
      "de": "hangen",
      "lv": "A atârna"
    },
    "praesens": {
      "de": "er hängt",
      "lv": "El atârnă"
    },
    "imperfektIndikativ": {
      "de": "er hing",
      "lv": "A atârnat"
    },
    "imperfektKonjunktiv": {
      "de": "er hinge",
      "lv": "S-ar spânzura"
    },
    "partizipVergangenheit": {
      "de": "gehangen",
      "lv": "Rezistă"
    }
  },
  {
    "infinitiv": {
      "de": "spalten",
      "lv": "A despica"
    },
    "praesens": {
      "de": "er spaltet",
      "lv": "El se desparte"
    },
    "imperfektIndikativ": {
      "de": "er spaltete",
      "lv": "S-a despărțit"
    },
    "imperfektKonjunktiv": {
      "de": "er spaltete",
      "lv": "El s-ar despărţi"
    },
    "partizipVergangenheit": {
      "de": "gespalten",
      "lv": "Despică"
    }
  },
  {
    "infinitiv": {
      "de": "verzeihen",
      "lv": "A ierta"
    },
    "praesens": {
      "de": "er verzeiht",
      "lv": "El iartă"
    },
    "imperfektIndikativ": {
      "de": "er verzieh",
      "lv": "A iertat"
    },
    "imperfektKonjunktiv": {
      "de": "er verziehe",
      "lv": "El ar ierta"
    },
    "partizipVergangenheit": {
      "de": "verziehen",
      "lv": "Iertat"
    }
  }
];

window.VERB_ENTRIES = VERB_ENTRIES;

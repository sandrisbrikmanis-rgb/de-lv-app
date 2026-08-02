const VERB_ENTRIES = [
  {
    "infinitiv": {
      "de": "backen",
      "lv": "Küpsetama"
    },
    "praesens": {
      "de": "er bäckt",
      "lv": "Ta küpsetab"
    },
    "imperfektIndikativ": {
      "de": "er buk",
      "lv": "Ta küpsetas"
    },
    "imperfektKonjunktiv": {
      "de": "er büke",
      "lv": "Ta küpsetaks"
    },
    "partizipVergangenheit": {
      "de": "gebacken",
      "lv": "Küpsetatud"
    }
  },
  {
    "infinitiv": {
      "de": "befehlen",
      "lv": "Käskima"
    },
    "praesens": {
      "de": "er befiehlt",
      "lv": "Ta käsib"
    },
    "imperfektIndikativ": {
      "de": "er befahl",
      "lv": "Ta käskis"
    },
    "imperfektKonjunktiv": {
      "de": "er beföhle",
      "lv": "Ta käsiks"
    },
    "partizipVergangenheit": {
      "de": "befohlen",
      "lv": "Kästud"
    }
  },
  {
    "infinitiv": {
      "de": "beginnen",
      "lv": "Alustama"
    },
    "praesens": {
      "de": "er beginnt",
      "lv": "Ta alustab"
    },
    "imperfektIndikativ": {
      "de": "er begann",
      "lv": "Ta alustas"
    },
    "imperfektKonjunktiv": {
      "de": "er begönne / er begänne",
      "lv": "Ta alustaks"
    },
    "partizipVergangenheit": {
      "de": "begonnen",
      "lv": "Alustatud"
    }
  },
  {
    "infinitiv": {
      "de": "beißen",
      "lv": "Hammustama"
    },
    "praesens": {
      "de": "er beißt",
      "lv": "Ta hammustab"
    },
    "imperfektIndikativ": {
      "de": "er biss",
      "lv": "Ta hammustas"
    },
    "imperfektKonjunktiv": {
      "de": "er bisse",
      "lv": "Ta hammustaks"
    },
    "partizipVergangenheit": {
      "de": "gebissen",
      "lv": "Hammustatud / ära hammustatud"
    }
  },
  {
    "infinitiv": {
      "de": "bergen",
      "lv": "Peitma / päästma"
    },
    "praesens": {
      "de": "er birgt",
      "lv": "Ta peidab"
    },
    "imperfektIndikativ": {
      "de": "er barg",
      "lv": "Ta peitis"
    },
    "imperfektKonjunktiv": {
      "de": "er bürge / er bärge",
      "lv": "Ta peidaks"
    },
    "partizipVergangenheit": {
      "de": "geborgen",
      "lv": "Peidetud / päästetud"
    }
  },
  {
    "infinitiv": {
      "de": "bersten",
      "lv": "Lõhkema"
    },
    "praesens": {
      "de": "er birst",
      "lv": "Ta lõhkeb"
    },
    "imperfektIndikativ": {
      "de": "er barst / er borst",
      "lv": "Ta lõhkes"
    },
    "imperfektKonjunktiv": {
      "de": "er bärste / er börste",
      "lv": "Ta lõhkeks"
    },
    "partizipVergangenheit": {
      "de": "geborsten (er ist)",
      "lv": "Lõhkenud"
    }
  },
  {
    "infinitiv": {
      "de": "bewegen",
      "lv": "Ajendama"
    },
    "praesens": {
      "de": "er bewegt",
      "lv": "Ta ajendab"
    },
    "imperfektIndikativ": {
      "de": "er bewog",
      "lv": "Ta ajendas"
    },
    "imperfektKonjunktiv": {
      "de": "er bewöge",
      "lv": "Ta ajendaks"
    },
    "partizipVergangenheit": {
      "de": "bewogen",
      "lv": "Ajendatud"
    }
  },
  {
    "infinitiv": {
      "de": "biegen",
      "lv": "Painutama"
    },
    "praesens": {
      "de": "er biegt",
      "lv": "Ta painutab"
    },
    "imperfektIndikativ": {
      "de": "er bog",
      "lv": "Ta painutas"
    },
    "imperfektKonjunktiv": {
      "de": "er böge",
      "lv": "Ta painutaks"
    },
    "partizipVergangenheit": {
      "de": "gebogen",
      "lv": "Painutatud"
    }
  },
  {
    "infinitiv": {
      "de": "bieten",
      "lv": "Pakkuma"
    },
    "praesens": {
      "de": "er bietet",
      "lv": "Ta pakub"
    },
    "imperfektIndikativ": {
      "de": "er bot",
      "lv": "Ta pakkus"
    },
    "imperfektKonjunktiv": {
      "de": "er böte",
      "lv": "Ta pakuks"
    },
    "partizipVergangenheit": {
      "de": "geboten",
      "lv": "Pakutud / pakutud välja"
    }
  },
  {
    "infinitiv": {
      "de": "binden",
      "lv": "Siduma"
    },
    "praesens": {
      "de": "er bindet",
      "lv": "Ta seob"
    },
    "imperfektIndikativ": {
      "de": "er band",
      "lv": "Ta sidus"
    },
    "imperfektKonjunktiv": {
      "de": "er bände",
      "lv": "Ta seoks"
    },
    "partizipVergangenheit": {
      "de": "gebunden",
      "lv": "Seotud"
    }
  },
  {
    "infinitiv": {
      "de": "bitten",
      "lv": "Paluma"
    },
    "praesens": {
      "de": "er bittet",
      "lv": "Ta palub"
    },
    "imperfektIndikativ": {
      "de": "er bat",
      "lv": "Ta palus"
    },
    "imperfektKonjunktiv": {
      "de": "er bäte",
      "lv": "Ta paluks"
    },
    "partizipVergangenheit": {
      "de": "gebeten",
      "lv": "Palutud"
    }
  },
  {
    "infinitiv": {
      "de": "blasen",
      "lv": "Puhuma"
    },
    "praesens": {
      "de": "er bläst",
      "lv": "Ta puhub"
    },
    "imperfektIndikativ": {
      "de": "er blies",
      "lv": "Ta puhus"
    },
    "imperfektKonjunktiv": {
      "de": "er bliese",
      "lv": "Ta puhuks"
    },
    "partizipVergangenheit": {
      "de": "geblasen",
      "lv": "Puhutud"
    }
  },
  {
    "infinitiv": {
      "de": "gären",
      "lv": "Käärima"
    },
    "praesens": {
      "de": "es gärt",
      "lv": "See kääritab"
    },
    "imperfektIndikativ": {
      "de": "es gor / es gärte",
      "lv": "See kääris"
    },
    "imperfektKonjunktiv": {
      "de": "es göre / es gärte",
      "lv": "See kääriks"
    },
    "partizipVergangenheit": {
      "de": "gegoren / gegärt",
      "lv": "Kääritanud"
    }
  },
  {
    "infinitiv": {
      "de": "gebären",
      "lv": "Sünnitama"
    },
    "praesens": {
      "de": "sie gebiert",
      "lv": "Ta sünnitab"
    },
    "imperfektIndikativ": {
      "de": "sie gebar",
      "lv": "Ta sünnitas"
    },
    "imperfektKonjunktiv": {
      "de": "sie gebäre",
      "lv": "Ta sünnitaks"
    },
    "partizipVergangenheit": {
      "de": "geboren",
      "lv": "Sünnitatud / sündinud"
    }
  },
  {
    "infinitiv": {
      "de": "gelingen",
      "lv": "Õnnestuma"
    },
    "praesens": {
      "de": "es gelingt",
      "lv": "See õnnestub"
    },
    "imperfektIndikativ": {
      "de": "es gelang",
      "lv": "See õnnestus"
    },
    "imperfektKonjunktiv": {
      "de": "es gelänge",
      "lv": "See õnnestuks"
    },
    "partizipVergangenheit": {
      "de": "gelungen (es ist)",
      "lv": "Õnnestunud"
    }
  },
  {
    "infinitiv": {
      "de": "gelten",
      "lv": "Kehtima"
    },
    "praesens": {
      "de": "er gilt",
      "lv": "Ta kehtib"
    },
    "imperfektIndikativ": {
      "de": "er galt",
      "lv": "Ta kehtis"
    },
    "imperfektKonjunktiv": {
      "de": "er gölte / es gälte",
      "lv": "Ta kehtiks / see kehtiks"
    },
    "partizipVergangenheit": {
      "de": "gegolten",
      "lv": "Kehtinud"
    }
  },
  {
    "infinitiv": {
      "de": "genesen",
      "lv": "Paranema"
    },
    "praesens": {
      "de": "er genest",
      "lv": "Ta paraneb"
    },
    "imperfektIndikativ": {
      "de": "er genas",
      "lv": "Ta paranes"
    },
    "imperfektKonjunktiv": {
      "de": "er genäse",
      "lv": "Ta paraneks"
    },
    "partizipVergangenheit": {
      "de": "genesen (er ist)",
      "lv": "Paranenud"
    }
  },
  {
    "infinitiv": {
      "de": "genießen",
      "lv": "Nautima"
    },
    "praesens": {
      "de": "er genießt",
      "lv": "Ta naudib"
    },
    "imperfektIndikativ": {
      "de": "er genoss",
      "lv": "Ta nautis"
    },
    "imperfektKonjunktiv": {
      "de": "er genösse",
      "lv": "Ta naudiks"
    },
    "partizipVergangenheit": {
      "de": "genossen",
      "lv": "Nauditud"
    }
  },
  {
    "infinitiv": {
      "de": "geschehen",
      "lv": "Juhtuma"
    },
    "praesens": {
      "de": "es geschieht",
      "lv": "See juhtub"
    },
    "imperfektIndikativ": {
      "de": "es geschah",
      "lv": "See juhtus"
    },
    "imperfektKonjunktiv": {
      "de": "es geschähe",
      "lv": "See juhtuks"
    },
    "partizipVergangenheit": {
      "de": "geschehen (es ist)",
      "lv": "Juhtunud"
    }
  },
  {
    "infinitiv": {
      "de": "gießen",
      "lv": "Velge"
    },
    "praesens": {
      "de": "er gießt",
      "lv": "Ta valab"
    },
    "imperfektIndikativ": {
      "de": "er goss",
      "lv": "Ta valas"
    },
    "imperfektKonjunktiv": {
      "de": "er gösse",
      "lv": "Ta valaks"
    },
    "partizipVergangenheit": {
      "de": "gegossen",
      "lv": "Valatud"
    }
  },
  {
    "infinitiv": {
      "de": "gleichen",
      "lv": "Sarnanema"
    },
    "praesens": {
      "de": "er gleicht",
      "lv": "Ta sarnaneb"
    },
    "imperfektIndikativ": {
      "de": "er glich",
      "lv": "Ta sarnanes"
    },
    "imperfektKonjunktiv": {
      "de": "er gliche",
      "lv": "Ta sarnaneks"
    },
    "partizipVergangenheit": {
      "de": "geglichen",
      "lv": "Sarnanenud"
    }
  },
  {
    "infinitiv": {
      "de": "gleiten",
      "lv": "Libisema"
    },
    "praesens": {
      "de": "er gleitet",
      "lv": "Ta libiseb"
    },
    "imperfektIndikativ": {
      "de": "er glitt",
      "lv": "Ta libises"
    },
    "imperfektKonjunktiv": {
      "de": "er glitte",
      "lv": "Ta libiseks"
    },
    "partizipVergangenheit": {
      "de": "geglitten (er ist)",
      "lv": "Libisenud"
    }
  },
  {
    "infinitiv": {
      "de": "glimmen",
      "lv": "Hõõguma"
    },
    "praesens": {
      "de": "er glimmt",
      "lv": "Ta hõõgub"
    },
    "imperfektIndikativ": {
      "de": "er glimmte / glomm",
      "lv": "Ta hõõgus"
    },
    "imperfektKonjunktiv": {
      "de": "er glimmte",
      "lv": "Ta hõõguks"
    },
    "partizipVergangenheit": {
      "de": "geglimmt / geglommen",
      "lv": "Hõõgunud"
    }
  },
  {
    "infinitiv": {
      "de": "graben",
      "lv": "Kaevama"
    },
    "praesens": {
      "de": "er gräbt",
      "lv": "Ta kaevab"
    },
    "imperfektIndikativ": {
      "de": "er grub",
      "lv": "Ta kaevas"
    },
    "imperfektKonjunktiv": {
      "de": "er grübe",
      "lv": "Ta kaevaks"
    },
    "partizipVergangenheit": {
      "de": "gegraben",
      "lv": "Kaevatud"
    }
  },
  {
    "infinitiv": {
      "de": "greifen",
      "lv": "Haarama"
    },
    "praesens": {
      "de": "er greift",
      "lv": "Ta haarab"
    },
    "imperfektIndikativ": {
      "de": "er griff",
      "lv": "Ta haaras"
    },
    "imperfektKonjunktiv": {
      "de": "er griffe",
      "lv": "Ta haaraks"
    },
    "partizipVergangenheit": {
      "de": "gegriffen",
      "lv": "Haaratud / kinni haaratud"
    }
  },
  {
    "infinitiv": {
      "de": "hauen",
      "lv": "Raiuma"
    },
    "praesens": {
      "de": "er haut",
      "lv": "Ta raiub"
    },
    "imperfektIndikativ": {
      "de": "er hieb",
      "lv": "Ta raius"
    },
    "imperfektKonjunktiv": {
      "de": "er hiebe",
      "lv": "Ta raiuks"
    },
    "partizipVergangenheit": {
      "de": "gehauen",
      "lv": "Raiutud"
    }
  },
  {
    "infinitiv": {
      "de": "heben",
      "lv": "Hoste"
    },
    "praesens": {
      "de": "er hebt",
      "lv": "Ta tõstab"
    },
    "imperfektIndikativ": {
      "de": "er hob",
      "lv": "Ta tõstis"
    },
    "imperfektKonjunktiv": {
      "de": "er höbe",
      "lv": "Ta tõstaks"
    },
    "partizipVergangenheit": {
      "de": "gehoben",
      "lv": "Tõstetud"
    }
  },
  {
    "infinitiv": {
      "de": "kennen",
      "lv": "Tundma / teadma"
    },
    "praesens": {
      "de": "er kennt",
      "lv": "Ta tunneb"
    },
    "imperfektIndikativ": {
      "de": "kannte",
      "lv": "Ta tundis"
    },
    "imperfektKonjunktiv": {
      "de": "kannte",
      "lv": "Ta tundis"
    },
    "partizipVergangenheit": {
      "de": "gekannt",
      "lv": "Tundnud"
    }
  },
  {
    "infinitiv": {
      "de": "klingen",
      "lv": "Kõlama"
    },
    "praesens": {
      "de": "er klingt",
      "lv": "Ta kõlab"
    },
    "imperfektIndikativ": {
      "de": "er klang",
      "lv": "Ta kõlas"
    },
    "imperfektKonjunktiv": {
      "de": "er klänge",
      "lv": "Ta kõlaks"
    },
    "partizipVergangenheit": {
      "de": "geklungen",
      "lv": "Kõlanud"
    }
  },
  {
    "infinitiv": {
      "de": "kneifen",
      "lv": "Näpistama"
    },
    "praesens": {
      "de": "er kneift",
      "lv": "Ta näpistab"
    },
    "imperfektIndikativ": {
      "de": "er kniff",
      "lv": "Ta näpistas"
    },
    "imperfektKonjunktiv": {
      "de": "er kniffe",
      "lv": "Ta näpistaks"
    },
    "partizipVergangenheit": {
      "de": "gekniffen",
      "lv": "Näpistatud"
    }
  },
  {
    "infinitiv": {
      "de": "bleiben",
      "lv": "Jääma"
    },
    "praesens": {
      "de": "er bleibt",
      "lv": "Ta jääb"
    },
    "imperfektIndikativ": {
      "de": "er blieb",
      "lv": "Ta jäi"
    },
    "imperfektKonjunktiv": {
      "de": "er bliebe",
      "lv": "Ta jääks"
    },
    "partizipVergangenheit": {
      "de": "geblieben (er ist)",
      "lv": "Jäänud"
    }
  },
  {
    "infinitiv": {
      "de": "bleichen",
      "lv": "Pleegitama"
    },
    "praesens": {
      "de": "er bleicht",
      "lv": "Ta pleegitab"
    },
    "imperfektIndikativ": {
      "de": "blich",
      "lv": "Ta pleegitas"
    },
    "imperfektKonjunktiv": {
      "de": "blich",
      "lv": "Ta pleegitas"
    },
    "partizipVergangenheit": {
      "de": "geblichen",
      "lv": "Pleegitatud"
    }
  },
  {
    "infinitiv": {
      "de": "braten",
      "lv": "Küpsetama"
    },
    "praesens": {
      "de": "er brät",
      "lv": "Ta küpsetab"
    },
    "imperfektIndikativ": {
      "de": "er briet",
      "lv": "Ta küpsetas"
    },
    "imperfektKonjunktiv": {
      "de": "er briete",
      "lv": "Ta küpsetaks"
    },
    "partizipVergangenheit": {
      "de": "gebraten",
      "lv": "Küpsetatud"
    }
  },
  {
    "infinitiv": {
      "de": "brechen",
      "lv": "Murdma"
    },
    "praesens": {
      "de": "er bricht",
      "lv": "Ta murrab"
    },
    "imperfektIndikativ": {
      "de": "er brach",
      "lv": "Ta murdis"
    },
    "imperfektKonjunktiv": {
      "de": "er bräche",
      "lv": "Ta murraks"
    },
    "partizipVergangenheit": {
      "de": "gebrochen",
      "lv": "Murtud / katki murtud"
    }
  },
  {
    "infinitiv": {
      "de": "brennen",
      "lv": "Põlema"
    },
    "praesens": {
      "de": "er brennt",
      "lv": "Ta põleb"
    },
    "imperfektIndikativ": {
      "de": "brannte",
      "lv": "Ta põles"
    },
    "imperfektKonjunktiv": {
      "de": "brannte",
      "lv": "Ta põles"
    },
    "partizipVergangenheit": {
      "de": "gebrannt",
      "lv": "Põlenud"
    }
  },
  {
    "infinitiv": {
      "de": "bringen",
      "lv": "Tooma"
    },
    "praesens": {
      "de": "er bringt",
      "lv": "Ta toob"
    },
    "imperfektIndikativ": {
      "de": "er brachte",
      "lv": "Ta tõi"
    },
    "imperfektKonjunktiv": {
      "de": "er brächte",
      "lv": "Ta tooks"
    },
    "partizipVergangenheit": {
      "de": "gebracht",
      "lv": "Toodud / kohale toodud"
    }
  },
  {
    "infinitiv": {
      "de": "denken",
      "lv": "Mõtlema"
    },
    "praesens": {
      "de": "er denkt",
      "lv": "Ta mõtleb"
    },
    "imperfektIndikativ": {
      "de": "er dachte",
      "lv": "Ta mõtles"
    },
    "imperfektKonjunktiv": {
      "de": "er dächte",
      "lv": "Ta mõtleks"
    },
    "partizipVergangenheit": {
      "de": "gedacht",
      "lv": "Mõeldud"
    }
  },
  {
    "infinitiv": {
      "de": "dingen",
      "lv": "Palkama / kokku leppima"
    },
    "praesens": {
      "de": "er dingt",
      "lv": "Ta palkab"
    },
    "imperfektIndikativ": {
      "de": "dingte",
      "lv": "Ta palkas"
    },
    "imperfektKonjunktiv": {
      "de": "dingte",
      "lv": "Ta palkas"
    },
    "partizipVergangenheit": {
      "de": "gedungen",
      "lv": "Palgatud"
    }
  },
  {
    "infinitiv": {
      "de": "dreschen",
      "lv": "Peksma"
    },
    "praesens": {
      "de": "er drischt",
      "lv": "Ta peksab"
    },
    "imperfektIndikativ": {
      "de": "er drasch / er drosch",
      "lv": "Ta peksis"
    },
    "imperfektKonjunktiv": {
      "de": "er dräsche / er drösche",
      "lv": "Ta peksaks"
    },
    "partizipVergangenheit": {
      "de": "gedroschen",
      "lv": "Pekstud"
    }
  },
  {
    "infinitiv": {
      "de": "dringen",
      "lv": "Tungima"
    },
    "praesens": {
      "de": "er dringt",
      "lv": "Ta tungib"
    },
    "imperfektIndikativ": {
      "de": "er drang",
      "lv": "Ta tungis"
    },
    "imperfektKonjunktiv": {
      "de": "er dränge",
      "lv": "Ta tungiks"
    },
    "partizipVergangenheit": {
      "de": "gedrungen (er ist)",
      "lv": "Tunginud"
    }
  },
  {
    "infinitiv": {
      "de": "dünken",
      "lv": "Tunduma"
    },
    "praesens": {
      "de": "es dünkt",
      "lv": "See tundub"
    },
    "imperfektIndikativ": {
      "de": "deuchte",
      "lv": "See tundus"
    },
    "imperfektKonjunktiv": {
      "de": "deuchte",
      "lv": "See tundus"
    },
    "partizipVergangenheit": {
      "de": "gedünkt",
      "lv": "Tundunud"
    }
  },
  {
    "infinitiv": {
      "de": "dürfen",
      "lv": "Tohtima"
    },
    "praesens": {
      "de": "er darf",
      "lv": "Ta tohib"
    },
    "imperfektIndikativ": {
      "de": "durfte",
      "lv": "Ta tohtis"
    },
    "imperfektKonjunktiv": {
      "de": "durfte",
      "lv": "Ta tohtis"
    },
    "partizipVergangenheit": {
      "de": "gedurft",
      "lv": "Tohtinud"
    }
  },
  {
    "infinitiv": {
      "de": "empfehlen",
      "lv": "Anbefalt"
    },
    "praesens": {
      "de": "er empfiehlt",
      "lv": "Ta soovitab"
    },
    "imperfektIndikativ": {
      "de": "er empfahl",
      "lv": "Ta soovitas"
    },
    "imperfektKonjunktiv": {
      "de": "er empfähle / er empföhle",
      "lv": "Ta soovitaks"
    },
    "partizipVergangenheit": {
      "de": "empfohlen",
      "lv": "Soovitatud"
    }
  },
  {
    "infinitiv": {
      "de": "empfinden",
      "lv": "Tynning"
    },
    "praesens": {
      "de": "er empfindet",
      "lv": "Ta tunneb"
    },
    "imperfektIndikativ": {
      "de": "er empfand",
      "lv": "Ta tundis"
    },
    "imperfektKonjunktiv": {
      "de": "er empfände",
      "lv": "Ta tunneks"
    },
    "partizipVergangenheit": {
      "de": "empfunden",
      "lv": "Tuntud"
    }
  },
  {
    "infinitiv": {
      "de": "erlöschen",
      "lv": "Kustuma"
    },
    "praesens": {
      "de": "er erlischt",
      "lv": "Ta kustub"
    },
    "imperfektIndikativ": {
      "de": "er erlosch",
      "lv": "Ta kustus"
    },
    "imperfektKonjunktiv": {
      "de": "er erlösche",
      "lv": "Ta kustuks"
    },
    "partizipVergangenheit": {
      "de": "erloschen (er ist)",
      "lv": "Kustunud"
    }
  },
  {
    "infinitiv": {
      "de": "erschrecken",
      "lv": "Ehmuma"
    },
    "praesens": {
      "de": "er erschrickt",
      "lv": "Ta ehmub"
    },
    "imperfektIndikativ": {
      "de": "er erschrak",
      "lv": "Ta ehmus"
    },
    "imperfektKonjunktiv": {
      "de": "er erschräke",
      "lv": "Ta ehmuks"
    },
    "partizipVergangenheit": {
      "de": "erschrocken (er ist)",
      "lv": "Ehmunud"
    }
  },
  {
    "infinitiv": {
      "de": "essen",
      "lv": "Sy"
    },
    "praesens": {
      "de": "er isst",
      "lv": "Ta sööb"
    },
    "imperfektIndikativ": {
      "de": "er ass",
      "lv": "Ta sõi"
    },
    "imperfektKonjunktiv": {
      "de": "er äße",
      "lv": "Ta sööks"
    },
    "partizipVergangenheit": {
      "de": "gegessen",
      "lv": "Söödud / ära söödud"
    }
  },
  {
    "infinitiv": {
      "de": "fahren",
      "lv": "Sõitma"
    },
    "praesens": {
      "de": "er fährt",
      "lv": "Ta sõidab"
    },
    "imperfektIndikativ": {
      "de": "er fuhr",
      "lv": "Ta sõitis"
    },
    "imperfektKonjunktiv": {
      "de": "er führe",
      "lv": "Ta sõidaks"
    },
    "partizipVergangenheit": {
      "de": "gefahren (er ist)",
      "lv": "Sõitnud / ära sõitnud"
    }
  },
  {
    "infinitiv": {
      "de": "fallen",
      "lv": "Gjøk"
    },
    "praesens": {
      "de": "er fällt",
      "lv": "Ta kukub"
    },
    "imperfektIndikativ": {
      "de": "er fiel",
      "lv": "Ta kukkus"
    },
    "imperfektKonjunktiv": {
      "de": "er fiele",
      "lv": "Ta kukuks"
    },
    "partizipVergangenheit": {
      "de": "gefallen (er ist)",
      "lv": "Kukkunud"
    }
  },
  {
    "infinitiv": {
      "de": "fangen",
      "lv": "Püüdma"
    },
    "praesens": {
      "de": "er fängt",
      "lv": "Ta püüab"
    },
    "imperfektIndikativ": {
      "de": "er fing",
      "lv": "Ta püüdis"
    },
    "imperfektKonjunktiv": {
      "de": "er finge",
      "lv": "Ta püüaks"
    },
    "partizipVergangenheit": {
      "de": "gefangen",
      "lv": "Püütud / kinni püütud"
    }
  },
  {
    "infinitiv": {
      "de": "finden",
      "lv": "Leidma"
    },
    "praesens": {
      "de": "er findet",
      "lv": "Ta leiab"
    },
    "imperfektIndikativ": {
      "de": "er fand",
      "lv": "Ta leidis"
    },
    "imperfektKonjunktiv": {
      "de": "er fände",
      "lv": "Ta leiaks"
    },
    "partizipVergangenheit": {
      "de": "gefunden",
      "lv": "Leitud"
    }
  },
  {
    "infinitiv": {
      "de": "fliegen",
      "lv": "Lendama"
    },
    "praesens": {
      "de": "er fliegt",
      "lv": "Ta lendab"
    },
    "imperfektIndikativ": {
      "de": "er flog",
      "lv": "Ta lendas"
    },
    "imperfektKonjunktiv": {
      "de": "er flöge",
      "lv": "Ta lendaks"
    },
    "partizipVergangenheit": {
      "de": "geflogen (er ist)",
      "lv": "Lennanud"
    }
  },
  {
    "infinitiv": {
      "de": "fliehen",
      "lv": "Põgenema"
    },
    "praesens": {
      "de": "er flieht",
      "lv": "Ta põgeneb"
    },
    "imperfektIndikativ": {
      "de": "er floh",
      "lv": "Ta põgenes"
    },
    "imperfektKonjunktiv": {
      "de": "er flöhe",
      "lv": "Ta põgeneks"
    },
    "partizipVergangenheit": {
      "de": "geflohen (er ist)",
      "lv": "Põgenenud"
    }
  },
  {
    "infinitiv": {
      "de": "fließen",
      "lv": "Voolama"
    },
    "praesens": {
      "de": "er fließt",
      "lv": "Ta voolab"
    },
    "imperfektIndikativ": {
      "de": "er floss",
      "lv": "Ta voolas"
    },
    "imperfektKonjunktiv": {
      "de": "er flösse",
      "lv": "Ta voolaks"
    },
    "partizipVergangenheit": {
      "de": "geflossen (er ist)",
      "lv": "Voolanud"
    }
  },
  {
    "infinitiv": {
      "de": "fressen",
      "lv": "Sööma / kugistama"
    },
    "praesens": {
      "de": "er frisst",
      "lv": "Ta sööb / kugistab"
    },
    "imperfektIndikativ": {
      "de": "er frass",
      "lv": "Ta sõi / kugistas"
    },
    "imperfektKonjunktiv": {
      "de": "er fräße",
      "lv": "Ta sööks / kugistaks"
    },
    "partizipVergangenheit": {
      "de": "gefressen",
      "lv": "Ära söödud / kugistatud"
    }
  },
  {
    "infinitiv": {
      "de": "frieren",
      "lv": "Külmetama"
    },
    "praesens": {
      "de": "er friert",
      "lv": "Ta külmetab"
    },
    "imperfektIndikativ": {
      "de": "er fror",
      "lv": "Ta külmetas"
    },
    "imperfektKonjunktiv": {
      "de": "er fröre",
      "lv": "Ta külmetaks"
    },
    "partizipVergangenheit": {
      "de": "gefroren",
      "lv": "Külmunud"
    }
  },
  {
    "infinitiv": {
      "de": "geben",
      "lv": "Puste"
    },
    "praesens": {
      "de": "er gibt",
      "lv": "Ta annab"
    },
    "imperfektIndikativ": {
      "de": "er gab",
      "lv": "Ta andis"
    },
    "imperfektKonjunktiv": {
      "de": "er gäbe",
      "lv": "Ta annaks"
    },
    "partizipVergangenheit": {
      "de": "gegeben",
      "lv": "Antud"
    }
  },
  {
    "infinitiv": {
      "de": "gedeihen",
      "lv": "Õnnestuma"
    },
    "praesens": {
      "de": "er gedeiht",
      "lv": "Tal õnnestub"
    },
    "imperfektIndikativ": {
      "de": "er gedieh",
      "lv": "Tal õnnestus"
    },
    "imperfektKonjunktiv": {
      "de": "er gediehe",
      "lv": "Tal õnnestuks"
    },
    "partizipVergangenheit": {
      "de": "gediehen (er ist)",
      "lv": "Õnnestunud"
    }
  },
  {
    "infinitiv": {
      "de": "gehen",
      "lv": "Minema"
    },
    "praesens": {
      "de": "er geht",
      "lv": "Ta läheb"
    },
    "imperfektIndikativ": {
      "de": "er ging",
      "lv": "Ta läks"
    },
    "imperfektKonjunktiv": {
      "de": "er ginge",
      "lv": "Ta läheks"
    },
    "partizipVergangenheit": {
      "de": "gegangen (er ist)",
      "lv": "Läinud"
    }
  },
  {
    "infinitiv": {
      "de": "gewinnen",
      "lv": "Seier"
    },
    "praesens": {
      "de": "er gewinnt",
      "lv": "Ta võidab"
    },
    "imperfektIndikativ": {
      "de": "er gewann",
      "lv": "Ta võitis"
    },
    "imperfektKonjunktiv": {
      "de": "er gewönne / er gewänne",
      "lv": "Ta võidaks"
    },
    "partizipVergangenheit": {
      "de": "gewonnen",
      "lv": "Võidetud"
    }
  },
  {
    "infinitiv": {
      "de": "haben",
      "lv": "Olema / omama"
    },
    "praesens": {
      "de": "er hat",
      "lv": "Tal on"
    },
    "imperfektIndikativ": {
      "de": "hatte",
      "lv": "Tal oli"
    },
    "imperfektKonjunktiv": {
      "de": "hatte",
      "lv": "Tal oli"
    },
    "partizipVergangenheit": {
      "de": "gehabt",
      "lv": "Olnud"
    }
  },
  {
    "infinitiv": {
      "de": "halten",
      "lv": "Hoidma"
    },
    "praesens": {
      "de": "er hält",
      "lv": "Ta hoiab"
    },
    "imperfektIndikativ": {
      "de": "er hielt",
      "lv": "Ta hoidis"
    },
    "imperfektKonjunktiv": {
      "de": "er hielte",
      "lv": "Ta hoiaks"
    },
    "partizipVergangenheit": {
      "de": "gehalten",
      "lv": "Hoitud"
    }
  },
  {
    "infinitiv": {
      "de": "heißen",
      "lv": "Nimetama"
    },
    "praesens": {
      "de": "er heißt",
      "lv": "Ta nimetab / teda nimetatakse"
    },
    "imperfektIndikativ": {
      "de": "er hieß",
      "lv": "Ta nimetas / teda nimetati"
    },
    "imperfektKonjunktiv": {
      "de": "er hieße",
      "lv": "Ta nimetaks / teda nimetataks"
    },
    "partizipVergangenheit": {
      "de": "geheißen",
      "lv": "Nimetatud"
    }
  },
  {
    "infinitiv": {
      "de": "helfen",
      "lv": "Aitama"
    },
    "praesens": {
      "de": "er hilft",
      "lv": "Ta aitab"
    },
    "imperfektIndikativ": {
      "de": "er half",
      "lv": "Ta aitas"
    },
    "imperfektKonjunktiv": {
      "de": "er hülfe / er hälfe",
      "lv": "Ta aitaks"
    },
    "partizipVergangenheit": {
      "de": "geholfen",
      "lv": "Aidatud"
    }
  },
  {
    "infinitiv": {
      "de": "kommen",
      "lv": "Tulema"
    },
    "praesens": {
      "de": "er kommt",
      "lv": "Ta tuleb"
    },
    "imperfektIndikativ": {
      "de": "er kam",
      "lv": "Ta tuli"
    },
    "imperfektKonjunktiv": {
      "de": "er käme",
      "lv": "Ta tuleks"
    },
    "partizipVergangenheit": {
      "de": "gekommen (er ist)",
      "lv": "Tulnud"
    }
  },
  {
    "infinitiv": {
      "de": "können",
      "lv": "Suutma / oskama"
    },
    "praesens": {
      "de": "er kann",
      "lv": "Ta saab / oskab"
    },
    "imperfektIndikativ": {
      "de": "konnte",
      "lv": "Ta sai / oskas"
    },
    "imperfektKonjunktiv": {
      "de": "konnte",
      "lv": "Ta sai / oskas"
    },
    "partizipVergangenheit": {
      "de": "gekonnt",
      "lv": "Osanud"
    }
  },
  {
    "infinitiv": {
      "de": "kriechen",
      "lv": "Roomama"
    },
    "praesens": {
      "de": "er kriecht",
      "lv": "Ta roomab"
    },
    "imperfektIndikativ": {
      "de": "er kroch",
      "lv": "Ta roomas"
    },
    "imperfektKonjunktiv": {
      "de": "er kröche",
      "lv": "Ta roomaks"
    },
    "partizipVergangenheit": {
      "de": "gekrochen (er ist)",
      "lv": "Roomanud"
    }
  },
  {
    "infinitiv": {
      "de": "laden",
      "lv": "Laadima / kutsuma"
    },
    "praesens": {
      "de": "er lädt",
      "lv": "Ta laadib / kutsub"
    },
    "imperfektIndikativ": {
      "de": "er lud",
      "lv": "Ta laadis / kutsus"
    },
    "imperfektKonjunktiv": {
      "de": "er lüde",
      "lv": "Ta laadiks / kutsuks"
    },
    "partizipVergangenheit": {
      "de": "geladen",
      "lv": "Laaditud / kutsutud"
    }
  },
  {
    "infinitiv": {
      "de": "lassen",
      "lv": "Panema / laskma"
    },
    "praesens": {
      "de": "er lässt",
      "lv": "Ta paneb / laseb"
    },
    "imperfektIndikativ": {
      "de": "er ließ",
      "lv": "Ta pani / laskis"
    },
    "imperfektKonjunktiv": {
      "de": "er ließe",
      "lv": "Ta paneks / laseks"
    },
    "partizipVergangenheit": {
      "de": "gelassen",
      "lv": "Pandud / lastud"
    }
  },
  {
    "infinitiv": {
      "de": "laufen",
      "lv": "Jooksma"
    },
    "praesens": {
      "de": "er läuft",
      "lv": "Ta jookseb"
    },
    "imperfektIndikativ": {
      "de": "er lief",
      "lv": "Ta jooksis"
    },
    "imperfektKonjunktiv": {
      "de": "er liefe",
      "lv": "Ta jookseks"
    },
    "partizipVergangenheit": {
      "de": "gelaufen (er ist)",
      "lv": "Jooksnud"
    }
  },
  {
    "infinitiv": {
      "de": "leiden",
      "lv": "Kannatama"
    },
    "praesens": {
      "de": "er leidet",
      "lv": "Ta kannatab"
    },
    "imperfektIndikativ": {
      "de": "er litt",
      "lv": "Ta kannatas"
    },
    "imperfektKonjunktiv": {
      "de": "er litte",
      "lv": "Ta kannataks"
    },
    "partizipVergangenheit": {
      "de": "gelitten",
      "lv": "Kannatatud"
    }
  },
  {
    "infinitiv": {
      "de": "leihen",
      "lv": "Laenama"
    },
    "praesens": {
      "de": "er leiht",
      "lv": "Ta laenab"
    },
    "imperfektIndikativ": {
      "de": "er lieh",
      "lv": "Ta laenas"
    },
    "imperfektKonjunktiv": {
      "de": "er liehe",
      "lv": "Ta laenaks"
    },
    "partizipVergangenheit": {
      "de": "geliehen",
      "lv": "Laenatud"
    }
  },
  {
    "infinitiv": {
      "de": "lesen",
      "lv": "Lugema"
    },
    "praesens": {
      "de": "er liest",
      "lv": "Ta loeb"
    },
    "imperfektIndikativ": {
      "de": "er las",
      "lv": "Ta luges"
    },
    "imperfektKonjunktiv": {
      "de": "er läse",
      "lv": "Ta loeks"
    },
    "partizipVergangenheit": {
      "de": "gelesen",
      "lv": "Loetud"
    }
  },
  {
    "infinitiv": {
      "de": "liegen",
      "lv": "Lamama / olema"
    },
    "praesens": {
      "de": "er liegt",
      "lv": "Ta lamab"
    },
    "imperfektIndikativ": {
      "de": "er lag",
      "lv": "Ta lamas"
    },
    "imperfektKonjunktiv": {
      "de": "er läge",
      "lv": "Ta lamaks"
    },
    "partizipVergangenheit": {
      "de": "gelegen",
      "lv": "Lamatud"
    }
  },
  {
    "infinitiv": {
      "de": "lügen",
      "lv": "Valetama"
    },
    "praesens": {
      "de": "er lügt",
      "lv": "Ta valetab"
    },
    "imperfektIndikativ": {
      "de": "er log",
      "lv": "Ta valetas"
    },
    "imperfektKonjunktiv": {
      "de": "er löge",
      "lv": "Ta valetaks"
    },
    "partizipVergangenheit": {
      "de": "gelogen",
      "lv": "Valetatud"
    }
  },
  {
    "infinitiv": {
      "de": "mahlen",
      "lv": "Jahvatama"
    },
    "praesens": {
      "de": "er mahlt",
      "lv": "Ta jahvatab"
    },
    "imperfektIndikativ": {
      "de": "er mahlte",
      "lv": "Ta jahvatas"
    },
    "imperfektKonjunktiv": {
      "de": "er malte",
      "lv": "Ta jahvataks"
    },
    "partizipVergangenheit": {
      "de": "gemahlen",
      "lv": "Jahvatatud"
    }
  },
  {
    "infinitiv": {
      "de": "meiden",
      "lv": "Vältima"
    },
    "praesens": {
      "de": "er meidet",
      "lv": "Ta väldib"
    },
    "imperfektIndikativ": {
      "de": "er mied",
      "lv": "Ta vältis"
    },
    "imperfektKonjunktiv": {
      "de": "er miede",
      "lv": "Ta väldiks"
    },
    "partizipVergangenheit": {
      "de": "gemieden",
      "lv": "Välditud"
    }
  },
  {
    "infinitiv": {
      "de": "melken",
      "lv": "Lüpsma"
    },
    "praesens": {
      "de": "er milkt / er melkt",
      "lv": "Ta lüpsab"
    },
    "imperfektIndikativ": {
      "de": "er molk / er melkte",
      "lv": "Ta lüpsis"
    },
    "imperfektKonjunktiv": {
      "de": "er mölke / er melkte",
      "lv": "Ta lüpsaks"
    },
    "partizipVergangenheit": {
      "de": "gemolken / gemelkt",
      "lv": "Lüpstud"
    }
  },
  {
    "infinitiv": {
      "de": "messen",
      "lv": "Mõõtma"
    },
    "praesens": {
      "de": "er misst",
      "lv": "Ta mõõdab"
    },
    "imperfektIndikativ": {
      "de": "er mass",
      "lv": "Ta mõõtis"
    },
    "imperfektKonjunktiv": {
      "de": "er mäße",
      "lv": "Ta mõõdaks"
    },
    "partizipVergangenheit": {
      "de": "gemessen",
      "lv": "Mõõdetud"
    }
  },
  {
    "infinitiv": {
      "de": "misslingen",
      "lv": "Ebaõnnestuma"
    },
    "praesens": {
      "de": "es misslingt",
      "lv": "See ebaõnnestub"
    },
    "imperfektIndikativ": {
      "de": "misslang",
      "lv": "See ebaõnnestus"
    },
    "imperfektKonjunktiv": {
      "de": "misslang",
      "lv": "See ebaõnnestus"
    },
    "partizipVergangenheit": {
      "de": "misslungen",
      "lv": "Ebaõnnestunud"
    }
  },
  {
    "infinitiv": {
      "de": "mögen",
      "lv": "Meeldima"
    },
    "praesens": {
      "de": "er mag",
      "lv": "Talle meeldib"
    },
    "imperfektIndikativ": {
      "de": "mochte",
      "lv": "Talle meeldis"
    },
    "imperfektKonjunktiv": {
      "de": "mochte",
      "lv": "Talle meeldis"
    },
    "partizipVergangenheit": {
      "de": "gemocht",
      "lv": "Meeldinud"
    }
  },
  {
    "infinitiv": {
      "de": "müssen",
      "lv": "Pidama"
    },
    "praesens": {
      "de": "er muss",
      "lv": "Ta peab"
    },
    "imperfektIndikativ": {
      "de": "musste",
      "lv": "Ta pidi"
    },
    "imperfektKonjunktiv": {
      "de": "musste",
      "lv": "Ta pidi"
    },
    "partizipVergangenheit": {
      "de": "gemusst",
      "lv": "Pidanud"
    }
  },
  {
    "infinitiv": {
      "de": "nehmen",
      "lv": "Võtma"
    },
    "praesens": {
      "de": "er nimmt",
      "lv": "Ta võtab"
    },
    "imperfektIndikativ": {
      "de": "er nahm",
      "lv": "Ta võttis"
    },
    "imperfektKonjunktiv": {
      "de": "er nähme",
      "lv": "Ta võtaks"
    },
    "partizipVergangenheit": {
      "de": "genommen",
      "lv": "Võetud"
    }
  },
  {
    "infinitiv": {
      "de": "nennen",
      "lv": "Nimetama"
    },
    "praesens": {
      "de": "er nennt",
      "lv": "Ta nimetab"
    },
    "imperfektIndikativ": {
      "de": "er nannte",
      "lv": "Ta nimetas"
    },
    "imperfektKonjunktiv": {
      "de": "er nennte",
      "lv": "Ta nimetaks"
    },
    "partizipVergangenheit": {
      "de": "genannt",
      "lv": "Nimetatud"
    }
  },
  {
    "infinitiv": {
      "de": "pfeifen",
      "lv": "Vilistama"
    },
    "praesens": {
      "de": "er pfeift",
      "lv": "Ta vilistab"
    },
    "imperfektIndikativ": {
      "de": "er pfiff",
      "lv": "Ta vilistas"
    },
    "imperfektKonjunktiv": {
      "de": "er pfiffe",
      "lv": "Ta vilistaks"
    },
    "partizipVergangenheit": {
      "de": "gepfiffen",
      "lv": "Vilistatud"
    }
  },
  {
    "infinitiv": {
      "de": "pflegen",
      "lv": "Hoolitsema"
    },
    "praesens": {
      "de": "er pflegt",
      "lv": "Ta hoolitseb"
    },
    "imperfektIndikativ": {
      "de": "pflegte vai pflog",
      "lv": "Ta hoolitses"
    },
    "imperfektKonjunktiv": {
      "de": "pflegte vai pflog",
      "lv": "Ta hoolitses"
    },
    "partizipVergangenheit": {
      "de": "gepflegt vai gepflogen",
      "lv": "Hoolitsetud"
    }
  },
  {
    "infinitiv": {
      "de": "preisen",
      "lv": "Kiitma"
    },
    "praesens": {
      "de": "er preist",
      "lv": "Ta kiidab"
    },
    "imperfektIndikativ": {
      "de": "er pries",
      "lv": "Ta kiitis"
    },
    "imperfektKonjunktiv": {
      "de": "er priese",
      "lv": "Ta kiidaks"
    },
    "partizipVergangenheit": {
      "de": "gepriesen",
      "lv": "Kiidetud"
    }
  },
  {
    "infinitiv": {
      "de": "quellen",
      "lv": "Paisuma"
    },
    "praesens": {
      "de": "er quillt",
      "lv": "Ta paisub"
    },
    "imperfektIndikativ": {
      "de": "er quoll",
      "lv": "Ta paisus"
    },
    "imperfektKonjunktiv": {
      "de": "er quölle",
      "lv": "Ta paisuks"
    },
    "partizipVergangenheit": {
      "de": "gequollen (er ist)",
      "lv": "Paisunud"
    }
  },
  {
    "infinitiv": {
      "de": "raten",
      "lv": "Soovitama / arvama"
    },
    "praesens": {
      "de": "er rät",
      "lv": "Ta soovitab / arvab"
    },
    "imperfektIndikativ": {
      "de": "er riet",
      "lv": "Ta soovitas / arvas"
    },
    "imperfektKonjunktiv": {
      "de": "er riete",
      "lv": "Ta soovitaks / arvaks"
    },
    "partizipVergangenheit": {
      "de": "geraten",
      "lv": "Soovitatud / arvatud"
    }
  },
  {
    "infinitiv": {
      "de": "reiben",
      "lv": "Hõõruma"
    },
    "praesens": {
      "de": "er reibt",
      "lv": "Ta hõõrub"
    },
    "imperfektIndikativ": {
      "de": "er rieb",
      "lv": "Ta hõõrus"
    },
    "imperfektKonjunktiv": {
      "de": "er riebe",
      "lv": "Ta hõõruks"
    },
    "partizipVergangenheit": {
      "de": "gerieben",
      "lv": "Hõõrutud"
    }
  },
  {
    "infinitiv": {
      "de": "reißen",
      "lv": "Rebima"
    },
    "praesens": {
      "de": "er reißt",
      "lv": "Ta rebib"
    },
    "imperfektIndikativ": {
      "de": "er riss",
      "lv": "Ta rebis"
    },
    "imperfektKonjunktiv": {
      "de": "er risse",
      "lv": "Ta rebiks"
    },
    "partizipVergangenheit": {
      "de": "gerissen",
      "lv": "Rebitud"
    }
  },
  {
    "infinitiv": {
      "de": "reiten",
      "lv": "Ratsutama"
    },
    "praesens": {
      "de": "er reitet",
      "lv": "Ta ratsutab"
    },
    "imperfektIndikativ": {
      "de": "er ritt",
      "lv": "Ta ratsutas"
    },
    "imperfektKonjunktiv": {
      "de": "er ritte",
      "lv": "Ta ratsutaks"
    },
    "partizipVergangenheit": {
      "de": "geritten (er ist)",
      "lv": "Ratsutanud"
    }
  },
  {
    "infinitiv": {
      "de": "rennen",
      "lv": "Jooksma"
    },
    "praesens": {
      "de": "er rennt",
      "lv": "Ta jookseb"
    },
    "imperfektIndikativ": {
      "de": "er rannte",
      "lv": "Ta jooksis"
    },
    "imperfektKonjunktiv": {
      "de": "er rennte",
      "lv": "Ta jookseks"
    },
    "partizipVergangenheit": {
      "de": "gerannt",
      "lv": "Jooksnud"
    }
  },
  {
    "infinitiv": {
      "de": "riechen",
      "lv": "Haistma / lõhnama"
    },
    "praesens": {
      "de": "er riecht",
      "lv": "Ta haistab"
    },
    "imperfektIndikativ": {
      "de": "er roch",
      "lv": "Ta haistis"
    },
    "imperfektKonjunktiv": {
      "de": "er röche",
      "lv": "Ta haistaks"
    },
    "partizipVergangenheit": {
      "de": "gerochen",
      "lv": "Haistetud"
    }
  },
  {
    "infinitiv": {
      "de": "ringen",
      "lv": "Murdma / rabelema"
    },
    "praesens": {
      "de": "er ringt",
      "lv": "Ta rabeleb"
    },
    "imperfektIndikativ": {
      "de": "er rang",
      "lv": "Ta rabeles"
    },
    "imperfektKonjunktiv": {
      "de": "er ränge",
      "lv": "Ta rabeleks"
    },
    "partizipVergangenheit": {
      "de": "gerungen",
      "lv": "Rabelenud"
    }
  },
  {
    "infinitiv": {
      "de": "rinnen",
      "lv": "Voolama"
    },
    "praesens": {
      "de": "er rinnt",
      "lv": "Ta voolab"
    },
    "imperfektIndikativ": {
      "de": "er rann",
      "lv": "Ta voolas"
    },
    "imperfektKonjunktiv": {
      "de": "er ränne / er rönne",
      "lv": "Ta voolaks"
    },
    "partizipVergangenheit": {
      "de": "geronnen (er ist)",
      "lv": "Voolanud / kokku vajunud"
    }
  },
  {
    "infinitiv": {
      "de": "rufen",
      "lv": "Hüüdma"
    },
    "praesens": {
      "de": "er ruft",
      "lv": "Ta hüüab"
    },
    "imperfektIndikativ": {
      "de": "er rief",
      "lv": "Ta hüüdis"
    },
    "imperfektKonjunktiv": {
      "de": "er riefe",
      "lv": "Ta hüüaks"
    },
    "partizipVergangenheit": {
      "de": "gerufen",
      "lv": "Hüütud"
    }
  },
  {
    "infinitiv": {
      "de": "salzen",
      "lv": "Soolama"
    },
    "praesens": {
      "de": "er salzt",
      "lv": "Ta soolab"
    },
    "imperfektIndikativ": {
      "de": "er salzte",
      "lv": "Ta soolas"
    },
    "imperfektKonjunktiv": {
      "de": "er salzte",
      "lv": "Ta soolaks"
    },
    "partizipVergangenheit": {
      "de": "gesalzen",
      "lv": "Soolatud"
    }
  },
  {
    "infinitiv": {
      "de": "saufen",
      "lv": "Juuma / pummeldama"
    },
    "praesens": {
      "de": "er säuft",
      "lv": "Ta juua / pummeldab"
    },
    "imperfektIndikativ": {
      "de": "er soff",
      "lv": "Ta jõi / pummeldas"
    },
    "imperfektKonjunktiv": {
      "de": "er söffe",
      "lv": "Ta jooks / pummeldaks"
    },
    "partizipVergangenheit": {
      "de": "gesoffen",
      "lv": "Joodud"
    }
  },
  {
    "infinitiv": {
      "de": "saugen",
      "lv": "Imema"
    },
    "praesens": {
      "de": "er saugt",
      "lv": "Ta imeb"
    },
    "imperfektIndikativ": {
      "de": "er sog",
      "lv": "Ta imes"
    },
    "imperfektKonjunktiv": {
      "de": "er söge",
      "lv": "Ta imeks"
    },
    "partizipVergangenheit": {
      "de": "gesogen",
      "lv": "Imetud"
    }
  },
  {
    "infinitiv": {
      "de": "schaffen",
      "lv": "Vevstol"
    },
    "praesens": {
      "de": "er schafft",
      "lv": "Ta loob"
    },
    "imperfektIndikativ": {
      "de": "er schuf",
      "lv": "Ta lõi"
    },
    "imperfektKonjunktiv": {
      "de": "er schüfe",
      "lv": "Ta looks"
    },
    "partizipVergangenheit": {
      "de": "geschaffen",
      "lv": "Loodud"
    }
  },
  {
    "infinitiv": {
      "de": "schallen",
      "lv": "Kõlama"
    },
    "praesens": {
      "de": "es schallt",
      "lv": "See kõlab"
    },
    "imperfektIndikativ": {
      "de": "schallte vai scholl",
      "lv": "See kõlas"
    },
    "imperfektKonjunktiv": {
      "de": "schallte vai scholl",
      "lv": "See kõlas"
    },
    "partizipVergangenheit": {
      "de": "geschallt",
      "lv": "Kõlanud"
    }
  },
  {
    "infinitiv": {
      "de": "scheiden",
      "lv": "Lahutama / lahkuma"
    },
    "praesens": {
      "de": "er scheidet",
      "lv": "Ta lahutab / lahkub"
    },
    "imperfektIndikativ": {
      "de": "er schied",
      "lv": "Ta lahutas / lahkus"
    },
    "imperfektKonjunktiv": {
      "de": "er schiede",
      "lv": "Ta lahutaks / lahkuks"
    },
    "partizipVergangenheit": {
      "de": "geschieden (er hat / er ist)",
      "lv": "Lahutatud / lahkunud"
    }
  },
  {
    "infinitiv": {
      "de": "scheinen",
      "lv": "Paistma"
    },
    "praesens": {
      "de": "er scheint",
      "lv": "Ta paistab"
    },
    "imperfektIndikativ": {
      "de": "er schien",
      "lv": "Ta paistis"
    },
    "imperfektKonjunktiv": {
      "de": "er schiene",
      "lv": "Ta paistaks"
    },
    "partizipVergangenheit": {
      "de": "geschienen",
      "lv": "Paistnud"
    }
  },
  {
    "infinitiv": {
      "de": "schelten",
      "lv": "Sõimama"
    },
    "praesens": {
      "de": "er schilt",
      "lv": "Ta sõimab"
    },
    "imperfektIndikativ": {
      "de": "er schalt",
      "lv": "Ta sõimas"
    },
    "imperfektKonjunktiv": {
      "de": "er schölte / er schälte",
      "lv": "Ta sõimaks"
    },
    "partizipVergangenheit": {
      "de": "gescholten",
      "lv": "Sõimatud"
    }
  },
  {
    "infinitiv": {
      "de": "scheren",
      "lv": "Pügama"
    },
    "praesens": {
      "de": "er schert",
      "lv": "Ta pügab"
    },
    "imperfektIndikativ": {
      "de": "schor vai scherte",
      "lv": "Ta pügas"
    },
    "imperfektKonjunktiv": {
      "de": "schor vai scherte",
      "lv": "Ta pügas"
    },
    "partizipVergangenheit": {
      "de": "geschoren vai geschert",
      "lv": "Pügatud"
    }
  },
  {
    "infinitiv": {
      "de": "schieben",
      "lv": "Lukkama"
    },
    "praesens": {
      "de": "er schiebt",
      "lv": "Ta lükkab"
    },
    "imperfektIndikativ": {
      "de": "er schob",
      "lv": "Ta lükkas"
    },
    "imperfektKonjunktiv": {
      "de": "er schöbe",
      "lv": "Ta lükkaks"
    },
    "partizipVergangenheit": {
      "de": "geschoben",
      "lv": "Lükatud"
    }
  },
  {
    "infinitiv": {
      "de": "schießen",
      "lv": "Tulistama"
    },
    "praesens": {
      "de": "er schießt",
      "lv": "Ta tulistab"
    },
    "imperfektIndikativ": {
      "de": "er schoss",
      "lv": "Ta tulistas"
    },
    "imperfektKonjunktiv": {
      "de": "er schösse",
      "lv": "Ta tulistaks"
    },
    "partizipVergangenheit": {
      "de": "geschossen",
      "lv": "Tulistatud"
    }
  },
  {
    "infinitiv": {
      "de": "schinden",
      "lv": "Piinama"
    },
    "praesens": {
      "de": "er schindet",
      "lv": "Ta piinab"
    },
    "imperfektIndikativ": {
      "de": "schindete",
      "lv": "Ta piinas"
    },
    "imperfektKonjunktiv": {
      "de": "schindete",
      "lv": "Ta piinas"
    },
    "partizipVergangenheit": {
      "de": "geschunden",
      "lv": "Piinatud"
    }
  },
  {
    "infinitiv": {
      "de": "schlafen",
      "lv": "Mage"
    },
    "praesens": {
      "de": "er schläft",
      "lv": "Ta magab"
    },
    "imperfektIndikativ": {
      "de": "er schlief",
      "lv": "Ta magas"
    },
    "imperfektKonjunktiv": {
      "de": "er schliefe",
      "lv": "Ta magaks"
    },
    "partizipVergangenheit": {
      "de": "geschlafen",
      "lv": "Magatud"
    }
  },
  {
    "infinitiv": {
      "de": "schlagen",
      "lv": "Lööma"
    },
    "praesens": {
      "de": "er schlägt",
      "lv": "Ta lööb"
    },
    "imperfektIndikativ": {
      "de": "er schlug",
      "lv": "Ta lõi"
    },
    "imperfektKonjunktiv": {
      "de": "er schlüge",
      "lv": "Ta lööks"
    },
    "partizipVergangenheit": {
      "de": "geschlagen",
      "lv": "Löödud"
    }
  },
  {
    "infinitiv": {
      "de": "schleichen",
      "lv": "Hiilima"
    },
    "praesens": {
      "de": "er schleicht",
      "lv": "Ta hiilib"
    },
    "imperfektIndikativ": {
      "de": "er schlich",
      "lv": "Ta hiilis"
    },
    "imperfektKonjunktiv": {
      "de": "er schliche",
      "lv": "Ta hiiliks"
    },
    "partizipVergangenheit": {
      "de": "geschlichen (er ist)",
      "lv": "Hiilinud"
    }
  },
  {
    "infinitiv": {
      "de": "schleifen",
      "lv": "Lihvima"
    },
    "praesens": {
      "de": "er schleift",
      "lv": "Ta lihvib"
    },
    "imperfektIndikativ": {
      "de": "er schliff",
      "lv": "Ta lihvis"
    },
    "imperfektKonjunktiv": {
      "de": "er schliffe",
      "lv": "Ta lihviks"
    },
    "partizipVergangenheit": {
      "de": "geschliffen",
      "lv": "Lihvitud"
    }
  },
  {
    "infinitiv": {
      "de": "schließen",
      "lv": "Sulgema"
    },
    "praesens": {
      "de": "er schließt",
      "lv": "Ta sulgeb"
    },
    "imperfektIndikativ": {
      "de": "er schloss",
      "lv": "Ta sulges"
    },
    "imperfektKonjunktiv": {
      "de": "er schlösse",
      "lv": "Ta sulgeks"
    },
    "partizipVergangenheit": {
      "de": "geschlossen",
      "lv": "Suletud"
    }
  },
  {
    "infinitiv": {
      "de": "schlingen",
      "lv": "Kugistama"
    },
    "praesens": {
      "de": "er schlingt",
      "lv": "Ta kugistab"
    },
    "imperfektIndikativ": {
      "de": "er schlang",
      "lv": "Ta kugistas"
    },
    "imperfektKonjunktiv": {
      "de": "er schlänge",
      "lv": "Ta kugistaks"
    },
    "partizipVergangenheit": {
      "de": "geschlungen",
      "lv": "Kugistatud"
    }
  },
  {
    "infinitiv": {
      "de": "schmeißen",
      "lv": "Hvisker"
    },
    "praesens": {
      "de": "er schmeißt",
      "lv": "Ta viskab"
    },
    "imperfektIndikativ": {
      "de": "er schmiss",
      "lv": "Ta viskas"
    },
    "imperfektKonjunktiv": {
      "de": "er schmisse",
      "lv": "Ta viskaks"
    },
    "partizipVergangenheit": {
      "de": "geschmissen",
      "lv": "Visatud"
    }
  },
  {
    "infinitiv": {
      "de": "schmelzen",
      "lv": "Sulama"
    },
    "praesens": {
      "de": "er schmilzt",
      "lv": "Ta sulab"
    },
    "imperfektIndikativ": {
      "de": "er schmolz",
      "lv": "Ta sulas"
    },
    "imperfektKonjunktiv": {
      "de": "er schmölze",
      "lv": "Ta sulaks"
    },
    "partizipVergangenheit": {
      "de": "geschmolzen (er ist)",
      "lv": "Sulanud"
    }
  },
  {
    "infinitiv": {
      "de": "schnauben",
      "lv": "Puristama"
    },
    "praesens": {
      "de": "er schnaubt",
      "lv": "Ta puristab"
    },
    "imperfektIndikativ": {
      "de": "schnaubte vai schnob",
      "lv": "Ta puristas"
    },
    "imperfektKonjunktiv": {
      "de": "schnaubte vai schnob",
      "lv": "Ta puristas"
    },
    "partizipVergangenheit": {
      "de": "geschnaubt vai geschnoben",
      "lv": "Puristanud"
    }
  },
  {
    "infinitiv": {
      "de": "schneiden",
      "lv": "Lõikama"
    },
    "praesens": {
      "de": "er schneidet",
      "lv": "Ta lõikab"
    },
    "imperfektIndikativ": {
      "de": "er schnitt",
      "lv": "Ta lõikas"
    },
    "imperfektKonjunktiv": {
      "de": "er schnitte",
      "lv": "Ta lõikaks"
    },
    "partizipVergangenheit": {
      "de": "geschnitten",
      "lv": "Lõigatud"
    }
  },
  {
    "infinitiv": {
      "de": "schreiben",
      "lv": "Skriv dem"
    },
    "praesens": {
      "de": "er schreibt",
      "lv": "Ta kirjutab"
    },
    "imperfektIndikativ": {
      "de": "er schrieb",
      "lv": "Ta kirjutas"
    },
    "imperfektKonjunktiv": {
      "de": "er schriebe",
      "lv": "Ta kirjutaks"
    },
    "partizipVergangenheit": {
      "de": "geschrieben",
      "lv": "Kirjutatud"
    }
  },
  {
    "infinitiv": {
      "de": "schreien",
      "lv": "Karjuma"
    },
    "praesens": {
      "de": "er schreit",
      "lv": "Ta karjub"
    },
    "imperfektIndikativ": {
      "de": "er schrie",
      "lv": "Ta karjus"
    },
    "imperfektKonjunktiv": {
      "de": "er schriee",
      "lv": "Ta karjuks"
    },
    "partizipVergangenheit": {
      "de": "geschrien",
      "lv": "Karjutud"
    }
  },
  {
    "infinitiv": {
      "de": "schreiten",
      "lv": "Sammuma"
    },
    "praesens": {
      "de": "er schreitet",
      "lv": "Ta sammub"
    },
    "imperfektIndikativ": {
      "de": "er schritt",
      "lv": "Ta sammus"
    },
    "imperfektKonjunktiv": {
      "de": "er schritte",
      "lv": "Ta sammuks"
    },
    "partizipVergangenheit": {
      "de": "geschritten (er ist)",
      "lv": "Sammunud"
    }
  },
  {
    "infinitiv": {
      "de": "schweigen",
      "lv": "Waikima"
    },
    "praesens": {
      "de": "er schweigt",
      "lv": "Ta vaikib"
    },
    "imperfektIndikativ": {
      "de": "er schwieg",
      "lv": "Ta vaikis"
    },
    "imperfektKonjunktiv": {
      "de": "er schwiege",
      "lv": "Ta vaikiks"
    },
    "partizipVergangenheit": {
      "de": "geschwiegen",
      "lv": "Vaikitud"
    }
  },
  {
    "infinitiv": {
      "de": "schwellen",
      "lv": "Paisuma"
    },
    "praesens": {
      "de": "er schwillt",
      "lv": "Ta paisub"
    },
    "imperfektIndikativ": {
      "de": "er schwoll",
      "lv": "Ta paisus"
    },
    "imperfektKonjunktiv": {
      "de": "er schwölle",
      "lv": "Ta paisuks"
    },
    "partizipVergangenheit": {
      "de": "geschwollen (er ist)",
      "lv": "Paisunud"
    }
  },
  {
    "infinitiv": {
      "de": "schwimmen",
      "lv": "Ujuma"
    },
    "praesens": {
      "de": "er schwimmt",
      "lv": "Ta ujub"
    },
    "imperfektIndikativ": {
      "de": "er schwamm",
      "lv": "Ta ujus"
    },
    "imperfektKonjunktiv": {
      "de": "er schwömme / er schwämme",
      "lv": "Ta ujuks"
    },
    "partizipVergangenheit": {
      "de": "geschwommen (er ist)",
      "lv": "Ujunud"
    }
  },
  {
    "infinitiv": {
      "de": "schwinden",
      "lv": "Kaduma"
    },
    "praesens": {
      "de": "er schwindet",
      "lv": "Ta kaob"
    },
    "imperfektIndikativ": {
      "de": "er schwand",
      "lv": "Ta kadus"
    },
    "imperfektKonjunktiv": {
      "de": "er schwände",
      "lv": "Ta kaoks"
    },
    "partizipVergangenheit": {
      "de": "geschwunden (er ist)",
      "lv": "Kadunud"
    }
  },
  {
    "infinitiv": {
      "de": "schwingen",
      "lv": "Vibutama"
    },
    "praesens": {
      "de": "er schwingt",
      "lv": "Ta vibutab"
    },
    "imperfektIndikativ": {
      "de": "er schwang",
      "lv": "Ta vibutas"
    },
    "imperfektKonjunktiv": {
      "de": "er schwänge",
      "lv": "Ta vibutaks"
    },
    "partizipVergangenheit": {
      "de": "geschwungen",
      "lv": "Vibutatud"
    }
  },
  {
    "infinitiv": {
      "de": "schwören",
      "lv": "Vanduma"
    },
    "praesens": {
      "de": "er schwört",
      "lv": "Ta vannub"
    },
    "imperfektIndikativ": {
      "de": "er schwur / er schwor",
      "lv": "Ta vandus"
    },
    "imperfektKonjunktiv": {
      "de": "er schwöre",
      "lv": "Ta vanduks"
    },
    "partizipVergangenheit": {
      "de": "geschworen",
      "lv": "Vannutud"
    }
  },
  {
    "infinitiv": {
      "de": "sehen",
      "lv": "Nagema"
    },
    "praesens": {
      "de": "er sieht",
      "lv": "Ta näeb"
    },
    "imperfektIndikativ": {
      "de": "er sah",
      "lv": "Ta nägi"
    },
    "imperfektKonjunktiv": {
      "de": "er sähe",
      "lv": "Ta näeks"
    },
    "partizipVergangenheit": {
      "de": "gesehen",
      "lv": "Nähtud"
    }
  },
  {
    "infinitiv": {
      "de": "sein",
      "lv": "Olema"
    },
    "praesens": {
      "de": "er ist",
      "lv": "Ta on"
    },
    "imperfektIndikativ": {
      "de": "war",
      "lv": "Ta oli"
    },
    "imperfektKonjunktiv": {
      "de": "war",
      "lv": "Ta oli"
    },
    "partizipVergangenheit": {
      "de": "gewesen",
      "lv": "Olnud"
    }
  },
  {
    "infinitiv": {
      "de": "senden",
      "lv": "Saatma"
    },
    "praesens": {
      "de": "er sendet",
      "lv": "Ta saadab"
    },
    "imperfektIndikativ": {
      "de": "er sandte / er sendete",
      "lv": "Ta saatis"
    },
    "imperfektKonjunktiv": {
      "de": "er sendete",
      "lv": "Ta saadaks"
    },
    "partizipVergangenheit": {
      "de": "gesandt / gesendet",
      "lv": "Saadetud"
    }
  },
  {
    "infinitiv": {
      "de": "sieden",
      "lv": "Keetma"
    },
    "praesens": {
      "de": "er siedet",
      "lv": "Ta keedab"
    },
    "imperfektIndikativ": {
      "de": "sott vai siedete",
      "lv": "Ta keetis"
    },
    "imperfektKonjunktiv": {
      "de": "sott vai siedete",
      "lv": "Ta keetis"
    },
    "partizipVergangenheit": {
      "de": "gesotten vai gesiedet",
      "lv": "Keedetud"
    }
  },
  {
    "infinitiv": {
      "de": "singen",
      "lv": "Laulma"
    },
    "praesens": {
      "de": "er singt",
      "lv": "Ta laulab"
    },
    "imperfektIndikativ": {
      "de": "er sang",
      "lv": "Ta laulis"
    },
    "imperfektKonjunktiv": {
      "de": "er sänge",
      "lv": "Ta laulaks"
    },
    "partizipVergangenheit": {
      "de": "gesungen",
      "lv": "Lauldud"
    }
  },
  {
    "infinitiv": {
      "de": "sinken",
      "lv": "Vajuma"
    },
    "praesens": {
      "de": "er sinkt",
      "lv": "Ta vajub"
    },
    "imperfektIndikativ": {
      "de": "er sank",
      "lv": "Ta vajus"
    },
    "imperfektKonjunktiv": {
      "de": "er sänke",
      "lv": "Ta vajuks"
    },
    "partizipVergangenheit": {
      "de": "gesunken (er ist)",
      "lv": "Vajunud"
    }
  },
  {
    "infinitiv": {
      "de": "sinnen",
      "lv": "Mõtisklema"
    },
    "praesens": {
      "de": "er sinnt",
      "lv": "Ta mõtiskleb"
    },
    "imperfektIndikativ": {
      "de": "er sann",
      "lv": "Ta mõtiskles"
    },
    "imperfektKonjunktiv": {
      "de": "er sönne / er sänne",
      "lv": "Ta mõtiskleks"
    },
    "partizipVergangenheit": {
      "de": "gesonnen",
      "lv": "Mõtisklenud"
    }
  },
  {
    "infinitiv": {
      "de": "sitzen",
      "lv": "Isthuma"
    },
    "praesens": {
      "de": "er sitzt",
      "lv": "Ta istub"
    },
    "imperfektIndikativ": {
      "de": "er sass",
      "lv": "Ta istus"
    },
    "imperfektKonjunktiv": {
      "de": "er säße",
      "lv": "Ta istuks"
    },
    "partizipVergangenheit": {
      "de": "gesessen",
      "lv": "Istutud"
    }
  },
  {
    "infinitiv": {
      "de": "sollen",
      "lv": "Pidama / olema kohustatud"
    },
    "praesens": {
      "de": "er soll",
      "lv": "Ta peab"
    },
    "imperfektIndikativ": {
      "de": "sollte",
      "lv": "Ta pidi"
    },
    "imperfektKonjunktiv": {
      "de": "sollte",
      "lv": "Ta pidi"
    },
    "partizipVergangenheit": {
      "de": "gesollt",
      "lv": "Pidanud"
    }
  },
  {
    "infinitiv": {
      "de": "speien",
      "lv": "Sülitama"
    },
    "praesens": {
      "de": "er speit",
      "lv": "Ta sülitab"
    },
    "imperfektIndikativ": {
      "de": "er spie",
      "lv": "Ta sülitas"
    },
    "imperfektKonjunktiv": {
      "de": "er spie",
      "lv": "Ta sülitaks"
    },
    "partizipVergangenheit": {
      "de": "gespien",
      "lv": "Sülitatud"
    }
  },
  {
    "infinitiv": {
      "de": "spinnen",
      "lv": "Ketrama"
    },
    "praesens": {
      "de": "er spinnt",
      "lv": "Ta ketrab"
    },
    "imperfektIndikativ": {
      "de": "er spann",
      "lv": "Ta ketras"
    },
    "imperfektKonjunktiv": {
      "de": "er spönne / er spänne",
      "lv": "Ta ketraks"
    },
    "partizipVergangenheit": {
      "de": "gesponnen",
      "lv": "Kedratud"
    }
  },
  {
    "infinitiv": {
      "de": "spleißen",
      "lv": "Ühendama"
    },
    "praesens": {
      "de": "er spleißt",
      "lv": "Ta ühendab"
    },
    "imperfektIndikativ": {
      "de": "spliss",
      "lv": "Ta ühendas"
    },
    "imperfektKonjunktiv": {
      "de": "spliss",
      "lv": "Ta ühendas"
    },
    "partizipVergangenheit": {
      "de": "gesplissen",
      "lv": "Ühendatud"
    }
  },
  {
    "infinitiv": {
      "de": "sprechen",
      "lv": "Pratsom"
    },
    "praesens": {
      "de": "er spricht",
      "lv": "Ta räägib"
    },
    "imperfektIndikativ": {
      "de": "er sprach",
      "lv": "Ta rääkis"
    },
    "imperfektKonjunktiv": {
      "de": "er spräche",
      "lv": "Ta räägiks"
    },
    "partizipVergangenheit": {
      "de": "gesprochen",
      "lv": "Räägitud"
    }
  },
  {
    "infinitiv": {
      "de": "sprießen",
      "lv": "Idanema / võrsuma"
    },
    "praesens": {
      "de": "er sprießt",
      "lv": "Ta võrsub"
    },
    "imperfektIndikativ": {
      "de": "er spross",
      "lv": "Ta võrsus"
    },
    "imperfektKonjunktiv": {
      "de": "er sprösse",
      "lv": "Ta võrsuks"
    },
    "partizipVergangenheit": {
      "de": "gesprossen (er ist)",
      "lv": "Võrsunud"
    }
  },
  {
    "infinitiv": {
      "de": "springen",
      "lv": "Hopp opp"
    },
    "praesens": {
      "de": "er springt",
      "lv": "Ta hüppab"
    },
    "imperfektIndikativ": {
      "de": "er sprang",
      "lv": "Ta hüppas"
    },
    "imperfektKonjunktiv": {
      "de": "er spränge",
      "lv": "Ta hüppaks"
    },
    "partizipVergangenheit": {
      "de": "gesprungen (er ist)",
      "lv": "Hüpanud"
    }
  },
  {
    "infinitiv": {
      "de": "stechen",
      "lv": "Torkama"
    },
    "praesens": {
      "de": "er sticht",
      "lv": "Ta torkab"
    },
    "imperfektIndikativ": {
      "de": "er stach",
      "lv": "Ta torkas"
    },
    "imperfektKonjunktiv": {
      "de": "er stäche",
      "lv": "Ta torkaks"
    },
    "partizipVergangenheit": {
      "de": "gestochen",
      "lv": "Torgatud"
    }
  },
  {
    "infinitiv": {
      "de": "stecken",
      "lv": "Pistma / torkama"
    },
    "praesens": {
      "de": "er steckt",
      "lv": "Ta pistab"
    },
    "imperfektIndikativ": {
      "de": "stak vai steckte",
      "lv": "Ta pistis"
    },
    "imperfektKonjunktiv": {
      "de": "stak vai steckte",
      "lv": "Ta pistis"
    },
    "partizipVergangenheit": {
      "de": "gesteckt",
      "lv": "Pistetud"
    }
  },
  {
    "infinitiv": {
      "de": "stehen",
      "lv": "Seismisk"
    },
    "praesens": {
      "de": "er steht",
      "lv": "Ta seisab"
    },
    "imperfektIndikativ": {
      "de": "er stand",
      "lv": "Ta seisis"
    },
    "imperfektKonjunktiv": {
      "de": "er stände / er stünde",
      "lv": "Ta seisaks"
    },
    "partizipVergangenheit": {
      "de": "gestanden",
      "lv": "Seistud"
    }
  },
  {
    "infinitiv": {
      "de": "stehlen",
      "lv": "Varastama"
    },
    "praesens": {
      "de": "er stiehlt",
      "lv": "Ta varastab"
    },
    "imperfektIndikativ": {
      "de": "er stahl",
      "lv": "Ta varastas"
    },
    "imperfektKonjunktiv": {
      "de": "er stöhle / er stähle",
      "lv": "Ta varastaks"
    },
    "partizipVergangenheit": {
      "de": "gestohlen",
      "lv": "Varastatud"
    }
  },
  {
    "infinitiv": {
      "de": "steigen",
      "lv": "Ronima"
    },
    "praesens": {
      "de": "er steigt",
      "lv": "Ta roniab"
    },
    "imperfektIndikativ": {
      "de": "er stieg",
      "lv": "Ta ronis"
    },
    "imperfektKonjunktiv": {
      "de": "er stiege",
      "lv": "Ta roniks"
    },
    "partizipVergangenheit": {
      "de": "gestiegen (er ist)",
      "lv": "Roninud"
    }
  },
  {
    "infinitiv": {
      "de": "sterben",
      "lv": "Surema"
    },
    "praesens": {
      "de": "er stirbt",
      "lv": "Ta sureb"
    },
    "imperfektIndikativ": {
      "de": "er starb",
      "lv": "Ta suri"
    },
    "imperfektKonjunktiv": {
      "de": "er stürbe",
      "lv": "Ta sureks"
    },
    "partizipVergangenheit": {
      "de": "gestorben (er ist)",
      "lv": "Surnud"
    }
  },
  {
    "infinitiv": {
      "de": "stieben",
      "lv": "Lendlema / pihustuma"
    },
    "praesens": {
      "de": "es stiebt",
      "lv": "See pihustub"
    },
    "imperfektIndikativ": {
      "de": "stob vai stiebte",
      "lv": "See pihustus"
    },
    "imperfektKonjunktiv": {
      "de": "stob vai stiebte",
      "lv": "See pihustus"
    },
    "partizipVergangenheit": {
      "de": "gestoben vai gestiebt",
      "lv": "Laiali pihustunud"
    }
  },
  {
    "infinitiv": {
      "de": "stinken",
      "lv": "Haisema"
    },
    "praesens": {
      "de": "es stinkt",
      "lv": "See haiseb"
    },
    "imperfektIndikativ": {
      "de": "stank",
      "lv": "See haises"
    },
    "imperfektKonjunktiv": {
      "de": "stank",
      "lv": "See haises"
    },
    "partizipVergangenheit": {
      "de": "gestunken",
      "lv": "Haisenud"
    }
  },
  {
    "infinitiv": {
      "de": "stoßen",
      "lv": "Tõukama"
    },
    "praesens": {
      "de": "er stößt",
      "lv": "Ta tõukab"
    },
    "imperfektIndikativ": {
      "de": "er stieß",
      "lv": "Ta tõukas"
    },
    "imperfektKonjunktiv": {
      "de": "er stieße",
      "lv": "Ta tõukaks"
    },
    "partizipVergangenheit": {
      "de": "gestoßen",
      "lv": "Tõugatud"
    }
  },
  {
    "infinitiv": {
      "de": "streichen",
      "lv": "Värvima"
    },
    "praesens": {
      "de": "er streicht",
      "lv": "Ta värvib"
    },
    "imperfektIndikativ": {
      "de": "er strich",
      "lv": "Ta värvis"
    },
    "imperfektKonjunktiv": {
      "de": "er striche",
      "lv": "Ta värviks"
    },
    "partizipVergangenheit": {
      "de": "gestrichen",
      "lv": "Värvitud"
    }
  },
  {
    "infinitiv": {
      "de": "streiten",
      "lv": "Vaidlema"
    },
    "praesens": {
      "de": "er streitet",
      "lv": "Ta vaidleb"
    },
    "imperfektIndikativ": {
      "de": "er stritt",
      "lv": "Ta vaidles"
    },
    "imperfektKonjunktiv": {
      "de": "er stritte",
      "lv": "Ta vaidleks"
    },
    "partizipVergangenheit": {
      "de": "gestritten",
      "lv": "Vaielnud"
    }
  },
  {
    "infinitiv": {
      "de": "tragen",
      "lv": "Kandma"
    },
    "praesens": {
      "de": "er trägt",
      "lv": "Ta kannab"
    },
    "imperfektIndikativ": {
      "de": "er trug",
      "lv": "Ta kandis"
    },
    "imperfektKonjunktiv": {
      "de": "er trüge",
      "lv": "Ta kannaks"
    },
    "partizipVergangenheit": {
      "de": "getragen",
      "lv": "Kantud"
    }
  },
  {
    "infinitiv": {
      "de": "treffen",
      "lv": "Kohtama"
    },
    "praesens": {
      "de": "er trifft",
      "lv": "Ta kohtab"
    },
    "imperfektIndikativ": {
      "de": "er traf",
      "lv": "Ta kohtas"
    },
    "imperfektKonjunktiv": {
      "de": "er träfe",
      "lv": "Ta kohtaks"
    },
    "partizipVergangenheit": {
      "de": "getroffen",
      "lv": "Kohatud"
    }
  },
  {
    "infinitiv": {
      "de": "treiben",
      "lv": "Ajama"
    },
    "praesens": {
      "de": "er treibt",
      "lv": "Ta ajab"
    },
    "imperfektIndikativ": {
      "de": "er trieb",
      "lv": "Ta ajas"
    },
    "imperfektKonjunktiv": {
      "de": "er triebe",
      "lv": "Ta ajaks"
    },
    "partizipVergangenheit": {
      "de": "getrieben",
      "lv": "Aetud"
    }
  },
  {
    "infinitiv": {
      "de": "treten",
      "lv": "Astuma / minema"
    },
    "praesens": {
      "de": "er tritt",
      "lv": "Ta astub / läheb"
    },
    "imperfektIndikativ": {
      "de": "er trat",
      "lv": "Ta astus / läks"
    },
    "imperfektKonjunktiv": {
      "de": "er träte",
      "lv": "Ta astuks / läheks"
    },
    "partizipVergangenheit": {
      "de": "getreten (er ist)",
      "lv": "Astunud / läinud"
    }
  },
  {
    "infinitiv": {
      "de": "trinken",
      "lv": "Jooma"
    },
    "praesens": {
      "de": "er trinkt",
      "lv": "Ta joob"
    },
    "imperfektIndikativ": {
      "de": "er trank",
      "lv": "Ta jõi"
    },
    "imperfektKonjunktiv": {
      "de": "er tränke",
      "lv": "Ta jooks"
    },
    "partizipVergangenheit": {
      "de": "getrunken",
      "lv": "Joodud"
    }
  },
  {
    "infinitiv": {
      "de": "trügen",
      "lv": "Petma"
    },
    "praesens": {
      "de": "er trögt",
      "lv": "Ta petab"
    },
    "imperfektIndikativ": {
      "de": "er trog",
      "lv": "Ta petis"
    },
    "imperfektKonjunktiv": {
      "de": "er tröge",
      "lv": "Ta petaks"
    },
    "partizipVergangenheit": {
      "de": "getrogen",
      "lv": "Petetud"
    }
  },
  {
    "infinitiv": {
      "de": "tun",
      "lv": "Tegema"
    },
    "praesens": {
      "de": "er tut",
      "lv": "Ta teeb"
    },
    "imperfektIndikativ": {
      "de": "er tat",
      "lv": "Ta tegi"
    },
    "imperfektKonjunktiv": {
      "de": "er täte",
      "lv": "Ta teeks"
    },
    "partizipVergangenheit": {
      "de": "getan",
      "lv": "Tehtud"
    }
  },
  {
    "infinitiv": {
      "de": "verderben",
      "lv": "Rikkuma"
    },
    "praesens": {
      "de": "er verdirbt",
      "lv": "Ta rikub"
    },
    "imperfektIndikativ": {
      "de": "er verdarb",
      "lv": "Ta rikkus"
    },
    "imperfektKonjunktiv": {
      "de": "er verdürbe",
      "lv": "Ta rikuks"
    },
    "partizipVergangenheit": {
      "de": "verdorben",
      "lv": "Rikutud"
    }
  },
  {
    "infinitiv": {
      "de": "verdrießen",
      "lv": "Pahandama"
    },
    "praesens": {
      "de": "er verdrießt",
      "lv": "Ta tekitab pahameelt"
    },
    "imperfektIndikativ": {
      "de": "er verdross",
      "lv": "Ta tekitas pahameelt"
    },
    "imperfektKonjunktiv": {
      "de": "er verdrösse",
      "lv": "Ta tekitaks pahameelt"
    },
    "partizipVergangenheit": {
      "de": "verdrossen",
      "lv": "Pahandatud"
    }
  },
  {
    "infinitiv": {
      "de": "vergessen",
      "lv": "Unustama"
    },
    "praesens": {
      "de": "er vergisst",
      "lv": "Ta unustab"
    },
    "imperfektIndikativ": {
      "de": "er vergass",
      "lv": "Ta unustas"
    },
    "imperfektKonjunktiv": {
      "de": "er vergäße",
      "lv": "Ta unustaks"
    },
    "partizipVergangenheit": {
      "de": "vergessen",
      "lv": "Unustatud"
    }
  },
  {
    "infinitiv": {
      "de": "verlieren",
      "lv": "Kaotama"
    },
    "praesens": {
      "de": "er verliert",
      "lv": "Ta kaotab"
    },
    "imperfektIndikativ": {
      "de": "er verlor",
      "lv": "Ta kaotas"
    },
    "imperfektKonjunktiv": {
      "de": "er verlöre",
      "lv": "Ta kaotaks"
    },
    "partizipVergangenheit": {
      "de": "verloren",
      "lv": "Kaotatud"
    }
  },
  {
    "infinitiv": {
      "de": "wachsen",
      "lv": "Kaswama"
    },
    "praesens": {
      "de": "er wächst",
      "lv": "Ta kasvab"
    },
    "imperfektIndikativ": {
      "de": "er wuchs",
      "lv": "Ta kasvas"
    },
    "imperfektKonjunktiv": {
      "de": "er wüchse",
      "lv": "Ta kasvaks"
    },
    "partizipVergangenheit": {
      "de": "gewachsen (er ist)",
      "lv": "Kasvanud"
    }
  },
  {
    "infinitiv": {
      "de": "waschen",
      "lv": "Dikt"
    },
    "praesens": {
      "de": "er wäscht",
      "lv": "Ta peseb"
    },
    "imperfektIndikativ": {
      "de": "er wusch",
      "lv": "Ta pesi"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsche",
      "lv": "Ta peseks"
    },
    "partizipVergangenheit": {
      "de": "gewaschen",
      "lv": "Pestud"
    }
  },
  {
    "infinitiv": {
      "de": "weben",
      "lv": "Kuduma"
    },
    "praesens": {
      "de": "er webt",
      "lv": "Ta koob"
    },
    "imperfektIndikativ": {
      "de": "wob",
      "lv": "Ta kudus"
    },
    "imperfektKonjunktiv": {
      "de": "wob",
      "lv": "Ta kudus"
    },
    "partizipVergangenheit": {
      "de": "gewoben",
      "lv": "Kootud"
    }
  },
  {
    "infinitiv": {
      "de": "weichen",
      "lv": "Taganema"
    },
    "praesens": {
      "de": "er weicht",
      "lv": "Ta taganeb"
    },
    "imperfektIndikativ": {
      "de": "er wich",
      "lv": "Ta taganes"
    },
    "imperfektKonjunktiv": {
      "de": "er wiche",
      "lv": "Ta taganeks"
    },
    "partizipVergangenheit": {
      "de": "gewichen (er ist)",
      "lv": "Taganenud"
    }
  },
  {
    "infinitiv": {
      "de": "weisen",
      "lv": "Näitama"
    },
    "praesens": {
      "de": "er weist",
      "lv": "Ta näitab"
    },
    "imperfektIndikativ": {
      "de": "er wies",
      "lv": "Ta näitas"
    },
    "imperfektKonjunktiv": {
      "de": "er wiese",
      "lv": "Ta näitaks"
    },
    "partizipVergangenheit": {
      "de": "gewiesen",
      "lv": "Näidatud"
    }
  },
  {
    "infinitiv": {
      "de": "wenden",
      "lv": "Pöörama"
    },
    "praesens": {
      "de": "er wendet",
      "lv": "Ta pöörab"
    },
    "imperfektIndikativ": {
      "de": "er wandte / es wendete",
      "lv": "Ta pööras"
    },
    "imperfektKonjunktiv": {
      "de": "er wendete",
      "lv": "Ta pööraks"
    },
    "partizipVergangenheit": {
      "de": "gewandt / gewendet",
      "lv": "Pööratud"
    }
  },
  {
    "infinitiv": {
      "de": "werben",
      "lv": "Kosima"
    },
    "praesens": {
      "de": "er wirbt",
      "lv": "Ta kosib"
    },
    "imperfektIndikativ": {
      "de": "er warb",
      "lv": "Ta kosis"
    },
    "imperfektKonjunktiv": {
      "de": "er würbe",
      "lv": "Ta kosiks"
    },
    "partizipVergangenheit": {
      "de": "geworben",
      "lv": "Kositud"
    }
  },
  {
    "infinitiv": {
      "de": "werden",
      "lv": "Saama"
    },
    "praesens": {
      "de": "er wird",
      "lv": "Ta saab"
    },
    "imperfektIndikativ": {
      "de": "wurde",
      "lv": "Ta sai"
    },
    "imperfektKonjunktiv": {
      "de": "wurde",
      "lv": "Ta sai"
    },
    "partizipVergangenheit": {
      "de": "geworden",
      "lv": "Saanud"
    }
  },
  {
    "infinitiv": {
      "de": "werfen",
      "lv": "Hvisker"
    },
    "praesens": {
      "de": "er wirft",
      "lv": "Ta viskab"
    },
    "imperfektIndikativ": {
      "de": "er warf",
      "lv": "Ta viskas"
    },
    "imperfektKonjunktiv": {
      "de": "er würfe",
      "lv": "Ta viskaks"
    },
    "partizipVergangenheit": {
      "de": "geworfen",
      "lv": "Visatud"
    }
  },
  {
    "infinitiv": {
      "de": "wiegen",
      "lv": "Kaaluma"
    },
    "praesens": {
      "de": "er wiegt",
      "lv": "Ta kaalub"
    },
    "imperfektIndikativ": {
      "de": "er wog",
      "lv": "Ta kaalus"
    },
    "imperfektKonjunktiv": {
      "de": "er wöge",
      "lv": "Ta kaaluks"
    },
    "partizipVergangenheit": {
      "de": "gewogen",
      "lv": "Kaalutud"
    }
  },
  {
    "infinitiv": {
      "de": "winden",
      "lv": "Punuma"
    },
    "praesens": {
      "de": "er windet",
      "lv": "Ta punub"
    },
    "imperfektIndikativ": {
      "de": "er wand",
      "lv": "Ta punus"
    },
    "imperfektKonjunktiv": {
      "de": "er wände",
      "lv": "Ta punuks"
    },
    "partizipVergangenheit": {
      "de": "gewunden",
      "lv": "Punutud"
    }
  },
  {
    "infinitiv": {
      "de": "wissen",
      "lv": "Teadma"
    },
    "praesens": {
      "de": "er weiß",
      "lv": "Ta teab"
    },
    "imperfektIndikativ": {
      "de": "er wusste",
      "lv": "Ta teadis"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsste",
      "lv": "Ta teaks"
    },
    "partizipVergangenheit": {
      "de": "gewusst",
      "lv": "Teatud"
    }
  },
  {
    "infinitiv": {
      "de": "wollen",
      "lv": "Tahtma"
    },
    "praesens": {
      "de": "er will",
      "lv": "Ta tahab"
    },
    "imperfektIndikativ": {
      "de": "wollte",
      "lv": "Ta tahtis"
    },
    "imperfektKonjunktiv": {
      "de": "wollte",
      "lv": "Ta tahtis"
    },
    "partizipVergangenheit": {
      "de": "gewollt",
      "lv": "Tahtnud"
    }
  },
  {
    "infinitiv": {
      "de": "wringen",
      "lv": "Väänama / pigistama"
    },
    "praesens": {
      "de": "er wringt",
      "lv": "Ta väänab"
    },
    "imperfektIndikativ": {
      "de": "wrang",
      "lv": "Ta väänas"
    },
    "imperfektKonjunktiv": {
      "de": "wrang",
      "lv": "Ta väänas"
    },
    "partizipVergangenheit": {
      "de": "gewrungen",
      "lv": "Väänatud"
    }
  },
  {
    "infinitiv": {
      "de": "zeihen",
      "lv": "Sørlendinger"
    },
    "praesens": {
      "de": "er zeiht",
      "lv": "Ta süüdistab"
    },
    "imperfektIndikativ": {
      "de": "zieh",
      "lv": "Ta süüdistas"
    },
    "imperfektKonjunktiv": {
      "de": "zieh",
      "lv": "Ta süüdistas"
    },
    "partizipVergangenheit": {
      "de": "geziehen",
      "lv": "Süüdistanud"
    }
  },
  {
    "infinitiv": {
      "de": "ziehen",
      "lv": "Tõmbama"
    },
    "praesens": {
      "de": "er zieht",
      "lv": "Ta tõmbab"
    },
    "imperfektIndikativ": {
      "de": "er zog",
      "lv": "Ta tõmbas"
    },
    "imperfektKonjunktiv": {
      "de": "er zöge",
      "lv": "Ta tõmbaks"
    },
    "partizipVergangenheit": {
      "de": "gezogen",
      "lv": "Tõmmatud"
    }
  },
  {
    "infinitiv": {
      "de": "zwingen",
      "lv": "Sundima"
    },
    "praesens": {
      "de": "er zwingt",
      "lv": "Ta sunnib"
    },
    "imperfektIndikativ": {
      "de": "er zwang",
      "lv": "Ta sundis"
    },
    "imperfektKonjunktiv": {
      "de": "er zwänge",
      "lv": "Ta sunniks"
    },
    "partizipVergangenheit": {
      "de": "gezwungen",
      "lv": "Sunnitud"
    }
  },
  {
    "infinitiv": {
      "de": "empfangen",
      "lv": "Vastu ta"
    },
    "praesens": {
      "de": "er empfängt",
      "lv": "Ta võtab vastu"
    },
    "imperfektIndikativ": {
      "de": "er empfing",
      "lv": "Ta võttis vastu"
    },
    "imperfektKonjunktiv": {
      "de": "er empfinge",
      "lv": "Ta võtaks vastu"
    },
    "partizipVergangenheit": {
      "de": "empfangen",
      "lv": "Vastu võetud"
    }
  },
  {
    "infinitiv": {
      "de": "erwägen",
      "lv": "Kaaluma"
    },
    "praesens": {
      "de": "er erwägt",
      "lv": "Ta kaalub"
    },
    "imperfektIndikativ": {
      "de": "er erwog",
      "lv": "Ta kaalus"
    },
    "imperfektKonjunktiv": {
      "de": "er erwöge",
      "lv": "Ta kaaluks"
    },
    "partizipVergangenheit": {
      "de": "erwogen",
      "lv": "Kaalutud"
    }
  },
  {
    "infinitiv": {
      "de": "fechten",
      "lv": "Vehklema / võitlema"
    },
    "praesens": {
      "de": "er ficht",
      "lv": "Ta võitleb"
    },
    "imperfektIndikativ": {
      "de": "er focht",
      "lv": "Ta võitles"
    },
    "imperfektKonjunktiv": {
      "de": "er föchte",
      "lv": "Ta võitleks"
    },
    "partizipVergangenheit": {
      "de": "gefochten",
      "lv": "Võidelnud"
    }
  },
  {
    "infinitiv": {
      "de": "flechten",
      "lv": "Punuma"
    },
    "praesens": {
      "de": "er flicht",
      "lv": "Ta punub"
    },
    "imperfektIndikativ": {
      "de": "er flocht",
      "lv": "Ta punus"
    },
    "imperfektKonjunktiv": {
      "de": "er flöchte",
      "lv": "Ta punuks"
    },
    "partizipVergangenheit": {
      "de": "geflochten",
      "lv": "Punutud"
    }
  },
  {
    "infinitiv": {
      "de": "hangen",
      "lv": "Rippuma"
    },
    "praesens": {
      "de": "er hängt",
      "lv": "Ta ripub"
    },
    "imperfektIndikativ": {
      "de": "er hing",
      "lv": "Ta rippus"
    },
    "imperfektKonjunktiv": {
      "de": "er hinge",
      "lv": "Ta ripuks"
    },
    "partizipVergangenheit": {
      "de": "gehangen",
      "lv": "Ripnud"
    }
  },
  {
    "infinitiv": {
      "de": "spalten",
      "lv": "Lõhkuma"
    },
    "praesens": {
      "de": "er spaltet",
      "lv": "Ta lõhub"
    },
    "imperfektIndikativ": {
      "de": "er spaltete",
      "lv": "Ta lõhkus"
    },
    "imperfektKonjunktiv": {
      "de": "er spaltete",
      "lv": "Ta lõhkus"
    },
    "partizipVergangenheit": {
      "de": "gespalten",
      "lv": "Lõhutud"
    }
  },
  {
    "infinitiv": {
      "de": "verzeihen",
      "lv": "Andestama"
    },
    "praesens": {
      "de": "er verzeiht",
      "lv": "Ta andestab"
    },
    "imperfektIndikativ": {
      "de": "er verzieh",
      "lv": "Ta andestas"
    },
    "imperfektKonjunktiv": {
      "de": "er verziehe",
      "lv": "Ta andestaks"
    },
    "partizipVergangenheit": {
      "de": "verziehen",
      "lv": "Andestatud"
    }
  }
];

window.VERB_ENTRIES = VERB_ENTRIES;

const VERB_ENTRIES = [
  {
    "infinitiv": {
      "de": "backen",
      "lv": "leipoa"
    },
    "praesens": {
      "de": "er bäckt",
      "lv": "hän leipoo"
    },
    "imperfektIndikativ": {
      "de": "er buk",
      "lv": "hän leipoi"
    },
    "imperfektKonjunktiv": {
      "de": "er büke",
      "lv": "hän leipoisi"
    },
    "partizipVergangenheit": {
      "de": "gebacken",
      "lv": "leivottu"
    }
  },
  {
    "infinitiv": {
      "de": "befehlen",
      "lv": "käskeä"
    },
    "praesens": {
      "de": "er befiehlt",
      "lv": "hän käskee"
    },
    "imperfektIndikativ": {
      "de": "er befahl",
      "lv": "hän käski"
    },
    "imperfektKonjunktiv": {
      "de": "er beföhle",
      "lv": "hän käskisi"
    },
    "partizipVergangenheit": {
      "de": "befohlen",
      "lv": "käsketty"
    }
  },
  {
    "infinitiv": {
      "de": "beginnen",
      "lv": "aloittaa"
    },
    "praesens": {
      "de": "er beginnt",
      "lv": "hän aloittaa"
    },
    "imperfektIndikativ": {
      "de": "er begann",
      "lv": "hän aloitti"
    },
    "imperfektKonjunktiv": {
      "de": "er begönne / er begänne",
      "lv": "hän aloittaisi"
    },
    "partizipVergangenheit": {
      "de": "begonnen",
      "lv": "aloitettu"
    }
  },
  {
    "infinitiv": {
      "de": "beißen",
      "lv": "purra"
    },
    "praesens": {
      "de": "er beißt",
      "lv": "hän puree"
    },
    "imperfektIndikativ": {
      "de": "er biss",
      "lv": "hän puri"
    },
    "imperfektKonjunktiv": {
      "de": "er bisse",
      "lv": "hän purisi"
    },
    "partizipVergangenheit": {
      "de": "gebissen",
      "lv": "purtu"
    }
  },
  {
    "infinitiv": {
      "de": "bergen",
      "lv": "pelastaa / piilottaa"
    },
    "praesens": {
      "de": "er birgt",
      "lv": "hän pelastaa / piilottaa"
    },
    "imperfektIndikativ": {
      "de": "er barg",
      "lv": "hän pelasti / piilotti"
    },
    "imperfektKonjunktiv": {
      "de": "er bürge / er bärge",
      "lv": "hän pelastaisi / piilottaisi"
    },
    "partizipVergangenheit": {
      "de": "geborgen",
      "lv": "pelastettu / piilotettu"
    }
  },
  {
    "infinitiv": {
      "de": "bersten",
      "lv": "haljeta"
    },
    "praesens": {
      "de": "er birst",
      "lv": "se halkeaa"
    },
    "imperfektIndikativ": {
      "de": "er barst / er borst",
      "lv": "se halkesi"
    },
    "imperfektKonjunktiv": {
      "de": "er bärste / er börste",
      "lv": "se halkeaisi"
    },
    "partizipVergangenheit": {
      "de": "geborsten (er ist)",
      "lv": "haljennut"
    }
  },
  {
    "infinitiv": {
      "de": "bewegen",
      "lv": "kannustaa"
    },
    "praesens": {
      "de": "er bewegt",
      "lv": "hän kannustaa"
    },
    "imperfektIndikativ": {
      "de": "er bewog",
      "lv": "hän kannusti"
    },
    "imperfektKonjunktiv": {
      "de": "er bewöge",
      "lv": "hän kannustaisi"
    },
    "partizipVergangenheit": {
      "de": "bewogen",
      "lv": "kannustettu"
    }
  },
  {
    "infinitiv": {
      "de": "biegen",
      "lv": "taivuttaa"
    },
    "praesens": {
      "de": "er biegt",
      "lv": "hän taivuttaa"
    },
    "imperfektIndikativ": {
      "de": "er bog",
      "lv": "hän taivutti"
    },
    "imperfektKonjunktiv": {
      "de": "er böge",
      "lv": "hän taivuttaisi"
    },
    "partizipVergangenheit": {
      "de": "gebogen",
      "lv": "taivutettu"
    }
  },
  {
    "infinitiv": {
      "de": "bieten",
      "lv": "tarjota"
    },
    "praesens": {
      "de": "er bietet",
      "lv": "hän tarjoaa"
    },
    "imperfektIndikativ": {
      "de": "er bot",
      "lv": "hän tarjosi"
    },
    "imperfektKonjunktiv": {
      "de": "er böte",
      "lv": "hän tarjoaisi"
    },
    "partizipVergangenheit": {
      "de": "geboten",
      "lv": "tarjottu"
    }
  },
  {
    "infinitiv": {
      "de": "binden",
      "lv": "sitoa"
    },
    "praesens": {
      "de": "er bindet",
      "lv": "hän sitoo"
    },
    "imperfektIndikativ": {
      "de": "er band",
      "lv": "hän sitoi"
    },
    "imperfektKonjunktiv": {
      "de": "er bände",
      "lv": "hän sitoisi"
    },
    "partizipVergangenheit": {
      "de": "gebunden",
      "lv": "sidottu"
    }
  },
  {
    "infinitiv": {
      "de": "bitten",
      "lv": "pyytää"
    },
    "praesens": {
      "de": "er bittet",
      "lv": "hän pyytää"
    },
    "imperfektIndikativ": {
      "de": "er bat",
      "lv": "hän pyysi"
    },
    "imperfektKonjunktiv": {
      "de": "er bäte",
      "lv": "hän pyytäisi"
    },
    "partizipVergangenheit": {
      "de": "gebeten",
      "lv": "pyydetty"
    }
  },
  {
    "infinitiv": {
      "de": "blasen",
      "lv": "puhaltaa"
    },
    "praesens": {
      "de": "er bläst",
      "lv": "hän puhaltaa"
    },
    "imperfektIndikativ": {
      "de": "er blies",
      "lv": "hän puhalsi"
    },
    "imperfektKonjunktiv": {
      "de": "er bliese",
      "lv": "hän puhaltaisi"
    },
    "partizipVergangenheit": {
      "de": "geblasen",
      "lv": "puhallettu"
    }
  },
  {
    "infinitiv": {
      "de": "gären",
      "lv": "käydä"
    },
    "praesens": {
      "de": "es gärt",
      "lv": "se käy"
    },
    "imperfektIndikativ": {
      "de": "es gor / es gärte",
      "lv": "se kävi"
    },
    "imperfektKonjunktiv": {
      "de": "es göre / es gärte",
      "lv": "se kävisi"
    },
    "partizipVergangenheit": {
      "de": "gegoren / gegärt",
      "lv": "käynyt"
    }
  },
  {
    "infinitiv": {
      "de": "gebären",
      "lv": "synnyttää"
    },
    "praesens": {
      "de": "sie gebiert",
      "lv": "hän synnyttää"
    },
    "imperfektIndikativ": {
      "de": "sie gebar",
      "lv": "hän synnytti"
    },
    "imperfektKonjunktiv": {
      "de": "sie gebäre",
      "lv": "hän synnyttäisi"
    },
    "partizipVergangenheit": {
      "de": "geboren",
      "lv": "synnytetty"
    }
  },
  {
    "infinitiv": {
      "de": "gelingen",
      "lv": "onnistua"
    },
    "praesens": {
      "de": "es gelingt",
      "lv": "se onnistuu"
    },
    "imperfektIndikativ": {
      "de": "es gelang",
      "lv": "se onnistui"
    },
    "imperfektKonjunktiv": {
      "de": "es gelänge",
      "lv": "se onnistuisi"
    },
    "partizipVergangenheit": {
      "de": "gelungen (es ist)",
      "lv": "onnistunut"
    }
  },
  {
    "infinitiv": {
      "de": "gelten",
      "lv": "kelvata / päteä"
    },
    "praesens": {
      "de": "er gilt",
      "lv": "hän kelpaa / pätee"
    },
    "imperfektIndikativ": {
      "de": "er galt",
      "lv": "hän kelpasi / päti"
    },
    "imperfektKonjunktiv": {
      "de": "er gölte / es gälte",
      "lv": "hän kelpaisi / pätisi"
    },
    "partizipVergangenheit": {
      "de": "gegolten",
      "lv": "kelvannut / pätenyt"
    }
  },
  {
    "infinitiv": {
      "de": "genesen",
      "lv": "toipua"
    },
    "praesens": {
      "de": "er genest",
      "lv": "hän toipuu"
    },
    "imperfektIndikativ": {
      "de": "er genas",
      "lv": "hän toipui"
    },
    "imperfektKonjunktiv": {
      "de": "er genäse",
      "lv": "hän toipuisi"
    },
    "partizipVergangenheit": {
      "de": "genesen (er ist)",
      "lv": "toipunut"
    }
  },
  {
    "infinitiv": {
      "de": "genießen",
      "lv": "nauttia"
    },
    "praesens": {
      "de": "er genießt",
      "lv": "hän nauttii"
    },
    "imperfektIndikativ": {
      "de": "er genoss",
      "lv": "hän nautti"
    },
    "imperfektKonjunktiv": {
      "de": "er genösse",
      "lv": "hän nauttisi"
    },
    "partizipVergangenheit": {
      "de": "genossen",
      "lv": "nauttinut"
    }
  },
  {
    "infinitiv": {
      "de": "geschehen",
      "lv": "tapahtua"
    },
    "praesens": {
      "de": "es geschieht",
      "lv": "se tapahtuu"
    },
    "imperfektIndikativ": {
      "de": "es geschah",
      "lv": "se tapahtui"
    },
    "imperfektKonjunktiv": {
      "de": "es geschähe",
      "lv": "se tapahtuisi"
    },
    "partizipVergangenheit": {
      "de": "geschehen (es ist)",
      "lv": "tapahtunut"
    }
  },
  {
    "infinitiv": {
      "de": "gießen",
      "lv": "kaataa"
    },
    "praesens": {
      "de": "er gießt",
      "lv": "hän kaataa"
    },
    "imperfektIndikativ": {
      "de": "er goss",
      "lv": "hän kaatoi"
    },
    "imperfektKonjunktiv": {
      "de": "er gösse",
      "lv": "hän kaataisi"
    },
    "partizipVergangenheit": {
      "de": "gegossen",
      "lv": "kaadettu"
    }
  },
  {
    "infinitiv": {
      "de": "gleichen",
      "lv": "muistuttaa"
    },
    "praesens": {
      "de": "er gleicht",
      "lv": "hän muistuttaa"
    },
    "imperfektIndikativ": {
      "de": "er glich",
      "lv": "hän muistutti"
    },
    "imperfektKonjunktiv": {
      "de": "er gliche",
      "lv": "hän muistuttaisi"
    },
    "partizipVergangenheit": {
      "de": "geglichen",
      "lv": "muistuttanut"
    }
  },
  {
    "infinitiv": {
      "de": "gleiten",
      "lv": "liukua"
    },
    "praesens": {
      "de": "er gleitet",
      "lv": "hän liukuu"
    },
    "imperfektIndikativ": {
      "de": "er glitt",
      "lv": "hän liukui"
    },
    "imperfektKonjunktiv": {
      "de": "er glitte",
      "lv": "hän liukuisi"
    },
    "partizipVergangenheit": {
      "de": "geglitten (er ist)",
      "lv": "liukunut"
    }
  },
  {
    "infinitiv": {
      "de": "glimmen",
      "lv": "hehkua"
    },
    "praesens": {
      "de": "er glimmt",
      "lv": "se hehkuu"
    },
    "imperfektIndikativ": {
      "de": "er glimmte / glomm",
      "lv": "se hehkui"
    },
    "imperfektKonjunktiv": {
      "de": "er glimmte",
      "lv": "se hehkuisi"
    },
    "partizipVergangenheit": {
      "de": "geglimmt / geglommen",
      "lv": "hehkunut"
    }
  },
  {
    "infinitiv": {
      "de": "graben",
      "lv": "kaivaa"
    },
    "praesens": {
      "de": "er gräbt",
      "lv": "hän kaivaa"
    },
    "imperfektIndikativ": {
      "de": "er grub",
      "lv": "hän kaivoi"
    },
    "imperfektKonjunktiv": {
      "de": "er grübe",
      "lv": "hän kaivaisi"
    },
    "partizipVergangenheit": {
      "de": "gegraben",
      "lv": "kaivettu"
    }
  },
  {
    "infinitiv": {
      "de": "greifen",
      "lv": "tarttua"
    },
    "praesens": {
      "de": "er greift",
      "lv": "hän tarttuu"
    },
    "imperfektIndikativ": {
      "de": "er griff",
      "lv": "hän tarttui"
    },
    "imperfektKonjunktiv": {
      "de": "er griffe",
      "lv": "hän tarttuisi"
    },
    "partizipVergangenheit": {
      "de": "gegriffen",
      "lv": "tarttunut"
    }
  },
  {
    "infinitiv": {
      "de": "hauen",
      "lv": "hakata"
    },
    "praesens": {
      "de": "er haut",
      "lv": "hän hakkaa"
    },
    "imperfektIndikativ": {
      "de": "er hieb",
      "lv": "hän hakkasi"
    },
    "imperfektKonjunktiv": {
      "de": "er hiebe",
      "lv": "hän hakkaisi"
    },
    "partizipVergangenheit": {
      "de": "gehauen",
      "lv": "hakattu"
    }
  },
  {
    "infinitiv": {
      "de": "heben",
      "lv": "nostaa"
    },
    "praesens": {
      "de": "er hebt",
      "lv": "hän nostaa"
    },
    "imperfektIndikativ": {
      "de": "er hob",
      "lv": "hän nosti"
    },
    "imperfektKonjunktiv": {
      "de": "er höbe",
      "lv": "hän nostaisi"
    },
    "partizipVergangenheit": {
      "de": "gehoben",
      "lv": "nostettu"
    }
  },
  {
    "infinitiv": {
      "de": "kennen",
      "lv": "tuntea / tietää"
    },
    "praesens": {
      "de": "er kennt",
      "lv": "hän tuntee / tietää"
    },
    "imperfektIndikativ": {
      "de": "kannte",
      "lv": "hän tunsi / tiesi"
    },
    "imperfektKonjunktiv": {
      "de": "kannte",
      "lv": "hän tuntisi / tietäisi"
    },
    "partizipVergangenheit": {
      "de": "gekannt",
      "lv": "tunnettu / tiedetty"
    }
  },
  {
    "infinitiv": {
      "de": "klingen",
      "lv": "soida"
    },
    "praesens": {
      "de": "er klingt",
      "lv": "se soi"
    },
    "imperfektIndikativ": {
      "de": "er klang",
      "lv": "se soi"
    },
    "imperfektKonjunktiv": {
      "de": "er klänge",
      "lv": "se soisi"
    },
    "partizipVergangenheit": {
      "de": "geklungen",
      "lv": "soinut"
    }
  },
  {
    "infinitiv": {
      "de": "kneifen",
      "lv": "nipistää"
    },
    "praesens": {
      "de": "er kneift",
      "lv": "hän nipistää"
    },
    "imperfektIndikativ": {
      "de": "er kniff",
      "lv": "hän nipisti"
    },
    "imperfektKonjunktiv": {
      "de": "er kniffe",
      "lv": "hän nipistäisi"
    },
    "partizipVergangenheit": {
      "de": "gekniffen",
      "lv": "nipistetty"
    }
  },
  {
    "infinitiv": {
      "de": "bleiben",
      "lv": "jäädä"
    },
    "praesens": {
      "de": "er bleibt",
      "lv": "hän jää"
    },
    "imperfektIndikativ": {
      "de": "er blieb",
      "lv": "hän jäi"
    },
    "imperfektKonjunktiv": {
      "de": "er bliebe",
      "lv": "hän jäisi"
    },
    "partizipVergangenheit": {
      "de": "geblieben (er ist)",
      "lv": "jäänyt"
    }
  },
  {
    "infinitiv": {
      "de": "bleichen",
      "lv": "haalistua"
    },
    "praesens": {
      "de": "er bleicht",
      "lv": "se haalistuu"
    },
    "imperfektIndikativ": {
      "de": "blich",
      "lv": "se haalistui"
    },
    "imperfektKonjunktiv": {
      "de": "blich",
      "lv": "se haalistuisi"
    },
    "partizipVergangenheit": {
      "de": "geblichen",
      "lv": "haalistunut"
    }
  },
  {
    "infinitiv": {
      "de": "braten",
      "lv": "paistaa"
    },
    "praesens": {
      "de": "er brät",
      "lv": "hän paistaa"
    },
    "imperfektIndikativ": {
      "de": "er briet",
      "lv": "hän paistoi"
    },
    "imperfektKonjunktiv": {
      "de": "er briete",
      "lv": "hän paistaisi"
    },
    "partizipVergangenheit": {
      "de": "gebraten",
      "lv": "paistettu"
    }
  },
  {
    "infinitiv": {
      "de": "brechen",
      "lv": "murtaa"
    },
    "praesens": {
      "de": "er bricht",
      "lv": "hän murtaa"
    },
    "imperfektIndikativ": {
      "de": "er brach",
      "lv": "hän mursi"
    },
    "imperfektKonjunktiv": {
      "de": "er bräche",
      "lv": "hän murtaisi"
    },
    "partizipVergangenheit": {
      "de": "gebrochen",
      "lv": "murrettu"
    }
  },
  {
    "infinitiv": {
      "de": "brennen",
      "lv": "palaa"
    },
    "praesens": {
      "de": "er brennt",
      "lv": "se palaa"
    },
    "imperfektIndikativ": {
      "de": "brannte",
      "lv": "se paloi"
    },
    "imperfektKonjunktiv": {
      "de": "brannte",
      "lv": "se palaisi"
    },
    "partizipVergangenheit": {
      "de": "gebrannt",
      "lv": "palanut"
    }
  },
  {
    "infinitiv": {
      "de": "bringen",
      "lv": "tuoda"
    },
    "praesens": {
      "de": "er bringt",
      "lv": "hän tuo"
    },
    "imperfektIndikativ": {
      "de": "er brachte",
      "lv": "hän toi"
    },
    "imperfektKonjunktiv": {
      "de": "er brächte",
      "lv": "hän toisi"
    },
    "partizipVergangenheit": {
      "de": "gebracht",
      "lv": "tuotu"
    }
  },
  {
    "infinitiv": {
      "de": "denken",
      "lv": "ajatella"
    },
    "praesens": {
      "de": "er denkt",
      "lv": "hän ajattelee"
    },
    "imperfektIndikativ": {
      "de": "er dachte",
      "lv": "hän ajatteli"
    },
    "imperfektKonjunktiv": {
      "de": "er dächte",
      "lv": "hän ajattelisi"
    },
    "partizipVergangenheit": {
      "de": "gedacht",
      "lv": "ajateltu"
    }
  },
  {
    "infinitiv": {
      "de": "dingen",
      "lv": "palkata / sopia"
    },
    "praesens": {
      "de": "er dingt",
      "lv": "hän palkkaa / sopii"
    },
    "imperfektIndikativ": {
      "de": "dingte",
      "lv": "hän palkkasi / sopi"
    },
    "imperfektKonjunktiv": {
      "de": "dingte",
      "lv": "hän palkkaisi / sopisi"
    },
    "partizipVergangenheit": {
      "de": "gedungen",
      "lv": "palkattu / sovittu"
    }
  },
  {
    "infinitiv": {
      "de": "dreschen",
      "lv": "puida"
    },
    "praesens": {
      "de": "er drischt",
      "lv": "hän pui"
    },
    "imperfektIndikativ": {
      "de": "er drasch / er drosch",
      "lv": "hän pui"
    },
    "imperfektKonjunktiv": {
      "de": "er dräsche / er drösche",
      "lv": "hän puisi"
    },
    "partizipVergangenheit": {
      "de": "gedroschen",
      "lv": "puitu"
    }
  },
  {
    "infinitiv": {
      "de": "dringen",
      "lv": "tunkeutua"
    },
    "praesens": {
      "de": "er dringt",
      "lv": "hän tunkeutuu"
    },
    "imperfektIndikativ": {
      "de": "er drang",
      "lv": "hän tunkeutui"
    },
    "imperfektKonjunktiv": {
      "de": "er dränge",
      "lv": "hän tunkeutuisi"
    },
    "partizipVergangenheit": {
      "de": "gedrungen (er ist)",
      "lv": "tunkeutunut"
    }
  },
  {
    "infinitiv": {
      "de": "dünken",
      "lv": "tuntua"
    },
    "praesens": {
      "de": "es dünkt",
      "lv": "se tuntuu"
    },
    "imperfektIndikativ": {
      "de": "deuchte",
      "lv": "se tuntui"
    },
    "imperfektKonjunktiv": {
      "de": "deuchte",
      "lv": "se tuntuisi"
    },
    "partizipVergangenheit": {
      "de": "gedünkt",
      "lv": "tuntunut"
    }
  },
  {
    "infinitiv": {
      "de": "dürfen",
      "lv": "saada"
    },
    "praesens": {
      "de": "er darf",
      "lv": "hän saa"
    },
    "imperfektIndikativ": {
      "de": "durfte",
      "lv": "hän sai"
    },
    "imperfektKonjunktiv": {
      "de": "durfte",
      "lv": "hän saisi"
    },
    "partizipVergangenheit": {
      "de": "gedurft",
      "lv": "saanut"
    }
  },
  {
    "infinitiv": {
      "de": "empfehlen",
      "lv": "suositella"
    },
    "praesens": {
      "de": "er empfiehlt",
      "lv": "hän suosittelee"
    },
    "imperfektIndikativ": {
      "de": "er empfahl",
      "lv": "hän suositteli"
    },
    "imperfektKonjunktiv": {
      "de": "er empfähle / er empföhle",
      "lv": "hän suosittelisi"
    },
    "partizipVergangenheit": {
      "de": "empfohlen",
      "lv": "suositeltu"
    }
  },
  {
    "infinitiv": {
      "de": "empfinden",
      "lv": "kokea"
    },
    "praesens": {
      "de": "er empfindet",
      "lv": "hän kokee"
    },
    "imperfektIndikativ": {
      "de": "er empfand",
      "lv": "hän koki"
    },
    "imperfektKonjunktiv": {
      "de": "er empfände",
      "lv": "hän kokisi"
    },
    "partizipVergangenheit": {
      "de": "empfunden",
      "lv": "koettu"
    }
  },
  {
    "infinitiv": {
      "de": "erlöschen",
      "lv": "sammua"
    },
    "praesens": {
      "de": "er erlischt",
      "lv": "se sammuu"
    },
    "imperfektIndikativ": {
      "de": "er erlosch",
      "lv": "se sammui"
    },
    "imperfektKonjunktiv": {
      "de": "er erlösche",
      "lv": "se sammuisi"
    },
    "partizipVergangenheit": {
      "de": "erloschen (er ist)",
      "lv": "sammunut"
    }
  },
  {
    "infinitiv": {
      "de": "erschrecken",
      "lv": "pelästyä"
    },
    "praesens": {
      "de": "er erschrickt",
      "lv": "hän pelästyy"
    },
    "imperfektIndikativ": {
      "de": "er erschrak",
      "lv": "hän pelästyi"
    },
    "imperfektKonjunktiv": {
      "de": "er erschräke",
      "lv": "hän pelästyisi"
    },
    "partizipVergangenheit": {
      "de": "erschrocken (er ist)",
      "lv": "pelästynyt"
    }
  },
  {
    "infinitiv": {
      "de": "essen",
      "lv": "syödä"
    },
    "praesens": {
      "de": "er isst",
      "lv": "hän syö"
    },
    "imperfektIndikativ": {
      "de": "er ass",
      "lv": "hän söi"
    },
    "imperfektKonjunktiv": {
      "de": "er äße",
      "lv": "hän söisi"
    },
    "partizipVergangenheit": {
      "de": "gegessen",
      "lv": "syöty"
    }
  },
  {
    "infinitiv": {
      "de": "fahren",
      "lv": "ajaa"
    },
    "praesens": {
      "de": "er fährt",
      "lv": "hän ajaa"
    },
    "imperfektIndikativ": {
      "de": "er fuhr",
      "lv": "hän ajoi"
    },
    "imperfektKonjunktiv": {
      "de": "er führe",
      "lv": "hän ajaisi"
    },
    "partizipVergangenheit": {
      "de": "gefahren (er ist)",
      "lv": "ajanut"
    }
  },
  {
    "infinitiv": {
      "de": "fallen",
      "lv": "pudota"
    },
    "praesens": {
      "de": "er fällt",
      "lv": "hän putoaa"
    },
    "imperfektIndikativ": {
      "de": "er fiel",
      "lv": "hän putosi"
    },
    "imperfektKonjunktiv": {
      "de": "er fiele",
      "lv": "hän putoaisi"
    },
    "partizipVergangenheit": {
      "de": "gefallen (er ist)",
      "lv": "pudonnut"
    }
  },
  {
    "infinitiv": {
      "de": "fangen",
      "lv": "ottaa kiinni"
    },
    "praesens": {
      "de": "er fängt",
      "lv": "hän ottaa kiinni"
    },
    "imperfektIndikativ": {
      "de": "er fing",
      "lv": "hän otti kiinni"
    },
    "imperfektKonjunktiv": {
      "de": "er finge",
      "lv": "hän ottaisi kiinni"
    },
    "partizipVergangenheit": {
      "de": "gefangen",
      "lv": "otettu kiinni"
    }
  },
  {
    "infinitiv": {
      "de": "finden",
      "lv": "löytää"
    },
    "praesens": {
      "de": "er findet",
      "lv": "hän löytää"
    },
    "imperfektIndikativ": {
      "de": "er fand",
      "lv": "hän löysi"
    },
    "imperfektKonjunktiv": {
      "de": "er fände",
      "lv": "hän löytäisi"
    },
    "partizipVergangenheit": {
      "de": "gefunden",
      "lv": "löydetty"
    }
  },
  {
    "infinitiv": {
      "de": "fliegen",
      "lv": "lentää"
    },
    "praesens": {
      "de": "er fliegt",
      "lv": "hän lentää"
    },
    "imperfektIndikativ": {
      "de": "er flog",
      "lv": "hän lensi"
    },
    "imperfektKonjunktiv": {
      "de": "er flöge",
      "lv": "hän lentäisi"
    },
    "partizipVergangenheit": {
      "de": "geflogen (er ist)",
      "lv": "lentänyt"
    }
  },
  {
    "infinitiv": {
      "de": "fliehen",
      "lv": "paeta"
    },
    "praesens": {
      "de": "er flieht",
      "lv": "hän pakenee"
    },
    "imperfektIndikativ": {
      "de": "er floh",
      "lv": "hän pakeni"
    },
    "imperfektKonjunktiv": {
      "de": "er flöhe",
      "lv": "hän pakenisi"
    },
    "partizipVergangenheit": {
      "de": "geflohen (er ist)",
      "lv": "paennut"
    }
  },
  {
    "infinitiv": {
      "de": "fließen",
      "lv": "virrata"
    },
    "praesens": {
      "de": "er fließt",
      "lv": "se virtaa"
    },
    "imperfektIndikativ": {
      "de": "er floss",
      "lv": "se virtasi"
    },
    "imperfektKonjunktiv": {
      "de": "er flösse",
      "lv": "se virtaisi"
    },
    "partizipVergangenheit": {
      "de": "geflossen (er ist)",
      "lv": "virrannut"
    }
  },
  {
    "infinitiv": {
      "de": "fressen",
      "lv": "syödä / ahmia"
    },
    "praesens": {
      "de": "er frisst",
      "lv": "hän syö / ahmii"
    },
    "imperfektIndikativ": {
      "de": "er frass",
      "lv": "hän söi / ahmi"
    },
    "imperfektKonjunktiv": {
      "de": "er fräße",
      "lv": "hän söisi / ahmisi"
    },
    "partizipVergangenheit": {
      "de": "gefressen",
      "lv": "syöty / ahmittu"
    }
  },
  {
    "infinitiv": {
      "de": "frieren",
      "lv": "palella"
    },
    "praesens": {
      "de": "er friert",
      "lv": "hän palelee"
    },
    "imperfektIndikativ": {
      "de": "er fror",
      "lv": "hän paleli"
    },
    "imperfektKonjunktiv": {
      "de": "er fröre",
      "lv": "hän palelisi"
    },
    "partizipVergangenheit": {
      "de": "gefroren",
      "lv": "palellut"
    }
  },
  {
    "infinitiv": {
      "de": "geben",
      "lv": "antaa"
    },
    "praesens": {
      "de": "er gibt",
      "lv": "hän antaa"
    },
    "imperfektIndikativ": {
      "de": "er gab",
      "lv": "hän antoi"
    },
    "imperfektKonjunktiv": {
      "de": "er gäbe",
      "lv": "hän antaisi"
    },
    "partizipVergangenheit": {
      "de": "gegeben",
      "lv": "annettu"
    }
  },
  {
    "infinitiv": {
      "de": "gedeihen",
      "lv": "menestyä"
    },
    "praesens": {
      "de": "er gedeiht",
      "lv": "hän menestyy"
    },
    "imperfektIndikativ": {
      "de": "er gedieh",
      "lv": "hän menestyi"
    },
    "imperfektKonjunktiv": {
      "de": "er gediehe",
      "lv": "hän menestyisi"
    },
    "partizipVergangenheit": {
      "de": "gediehen (er ist)",
      "lv": "menestynyt"
    }
  },
  {
    "infinitiv": {
      "de": "gehen",
      "lv": "mennä"
    },
    "praesens": {
      "de": "er geht",
      "lv": "hän menee"
    },
    "imperfektIndikativ": {
      "de": "er ging",
      "lv": "hän meni"
    },
    "imperfektKonjunktiv": {
      "de": "er ginge",
      "lv": "hän menisi"
    },
    "partizipVergangenheit": {
      "de": "gegangen (er ist)",
      "lv": "mennyt"
    }
  },
  {
    "infinitiv": {
      "de": "gewinnen",
      "lv": "voittaa"
    },
    "praesens": {
      "de": "er gewinnt",
      "lv": "hän voittaa"
    },
    "imperfektIndikativ": {
      "de": "er gewann",
      "lv": "hän voitti"
    },
    "imperfektKonjunktiv": {
      "de": "er gewönne / er gewänne",
      "lv": "hän voittaisi"
    },
    "partizipVergangenheit": {
      "de": "gewonnen",
      "lv": "voitettu"
    }
  },
  {
    "infinitiv": {
      "de": "haben",
      "lv": "omistaa"
    },
    "praesens": {
      "de": "er hat",
      "lv": "hänellä on"
    },
    "imperfektIndikativ": {
      "de": "hatte",
      "lv": "hänellä oli"
    },
    "imperfektKonjunktiv": {
      "de": "hatte",
      "lv": "hänellä olisi"
    },
    "partizipVergangenheit": {
      "de": "gehabt",
      "lv": "omistanut"
    }
  },
  {
    "infinitiv": {
      "de": "halten",
      "lv": "pidellä"
    },
    "praesens": {
      "de": "er hält",
      "lv": "hän pitelee"
    },
    "imperfektIndikativ": {
      "de": "er hielt",
      "lv": "hän piteli"
    },
    "imperfektKonjunktiv": {
      "de": "er hielte",
      "lv": "hän pitelisi"
    },
    "partizipVergangenheit": {
      "de": "gehalten",
      "lv": "pidelty"
    }
  },
  {
    "infinitiv": {
      "de": "heißen",
      "lv": "nimittää / olla nimeltään"
    },
    "praesens": {
      "de": "er heißt",
      "lv": "hän nimittää / on nimeltään"
    },
    "imperfektIndikativ": {
      "de": "er hieß",
      "lv": "hän nimitti / oli nimeltään"
    },
    "imperfektKonjunktiv": {
      "de": "er hieße",
      "lv": "hän nimittäisi / olisi nimeltään"
    },
    "partizipVergangenheit": {
      "de": "geheißen",
      "lv": "nimitetty / ollut nimeltään"
    }
  },
  {
    "infinitiv": {
      "de": "helfen",
      "lv": "auttaa"
    },
    "praesens": {
      "de": "er hilft",
      "lv": "hän auttaa"
    },
    "imperfektIndikativ": {
      "de": "er half",
      "lv": "hän auttoi"
    },
    "imperfektKonjunktiv": {
      "de": "er hülfe / er hälfe",
      "lv": "hän auttaisi"
    },
    "partizipVergangenheit": {
      "de": "geholfen",
      "lv": "autettu"
    }
  },
  {
    "infinitiv": {
      "de": "kommen",
      "lv": "tulla"
    },
    "praesens": {
      "de": "er kommt",
      "lv": "hän tulee"
    },
    "imperfektIndikativ": {
      "de": "er kam",
      "lv": "hän tuli"
    },
    "imperfektKonjunktiv": {
      "de": "er käme",
      "lv": "hän tulisi"
    },
    "partizipVergangenheit": {
      "de": "gekommen (er ist)",
      "lv": "tullut"
    }
  },
  {
    "infinitiv": {
      "de": "können",
      "lv": "voida"
    },
    "praesens": {
      "de": "er kann",
      "lv": "hän voi"
    },
    "imperfektIndikativ": {
      "de": "konnte",
      "lv": "hän voi"
    },
    "imperfektKonjunktiv": {
      "de": "konnte",
      "lv": "hän voisi"
    },
    "partizipVergangenheit": {
      "de": "gekonnt",
      "lv": "voinut"
    }
  },
  {
    "infinitiv": {
      "de": "kriechen",
      "lv": "ryömiä"
    },
    "praesens": {
      "de": "er kriecht",
      "lv": "hän ryömii"
    },
    "imperfektIndikativ": {
      "de": "er kroch",
      "lv": "hän ryömi"
    },
    "imperfektKonjunktiv": {
      "de": "er kröche",
      "lv": "hän ryömisi"
    },
    "partizipVergangenheit": {
      "de": "gekrochen (er ist)",
      "lv": "ryöminyt"
    }
  },
  {
    "infinitiv": {
      "de": "laden",
      "lv": "ladata / kutsua"
    },
    "praesens": {
      "de": "er lädt",
      "lv": "hän lataa / kutsuu"
    },
    "imperfektIndikativ": {
      "de": "er lud",
      "lv": "hän latasi / kutsui"
    },
    "imperfektKonjunktiv": {
      "de": "er lüde",
      "lv": "hän lataisi / kutsuisi"
    },
    "partizipVergangenheit": {
      "de": "geladen",
      "lv": "ladattu / kutsuttu"
    }
  },
  {
    "infinitiv": {
      "de": "lassen",
      "lv": "teettää / sallia"
    },
    "praesens": {
      "de": "er lässt",
      "lv": "hän teettää / sallii"
    },
    "imperfektIndikativ": {
      "de": "er ließ",
      "lv": "hän teetti / salli"
    },
    "imperfektKonjunktiv": {
      "de": "er ließe",
      "lv": "hän teettäisi / sallisi"
    },
    "partizipVergangenheit": {
      "de": "gelassen",
      "lv": "teetetty / sallittu"
    }
  },
  {
    "infinitiv": {
      "de": "laufen",
      "lv": "juosta"
    },
    "praesens": {
      "de": "er läuft",
      "lv": "hän juoksee"
    },
    "imperfektIndikativ": {
      "de": "er lief",
      "lv": "hän juoksi"
    },
    "imperfektKonjunktiv": {
      "de": "er liefe",
      "lv": "hän juoksisi"
    },
    "partizipVergangenheit": {
      "de": "gelaufen (er ist)",
      "lv": "juossut"
    }
  },
  {
    "infinitiv": {
      "de": "leiden",
      "lv": "kärsiä"
    },
    "praesens": {
      "de": "er leidet",
      "lv": "hän kärsii"
    },
    "imperfektIndikativ": {
      "de": "er litt",
      "lv": "hän kärsi"
    },
    "imperfektKonjunktiv": {
      "de": "er litte",
      "lv": "hän kärsisi"
    },
    "partizipVergangenheit": {
      "de": "gelitten",
      "lv": "kärsinyt"
    }
  },
  {
    "infinitiv": {
      "de": "leihen",
      "lv": "antaa lainaksi / ottaa lainaksi"
    },
    "praesens": {
      "de": "er leiht",
      "lv": "hän antaa lainaksi / ottaa lainaksi"
    },
    "imperfektIndikativ": {
      "de": "er lieh",
      "lv": "hän antoi lainaksi / otti lainaksi"
    },
    "imperfektKonjunktiv": {
      "de": "er liehe",
      "lv": "hän antaisi lainaksi / ottaisi lainaksi"
    },
    "partizipVergangenheit": {
      "de": "geliehen",
      "lv": "annettu lainaksi / otettu lainaksi"
    }
  },
  {
    "infinitiv": {
      "de": "lesen",
      "lv": "lukea"
    },
    "praesens": {
      "de": "er liest",
      "lv": "hän lukee"
    },
    "imperfektIndikativ": {
      "de": "er las",
      "lv": "hän luki"
    },
    "imperfektKonjunktiv": {
      "de": "er läse",
      "lv": "hän lukisi"
    },
    "partizipVergangenheit": {
      "de": "gelesen",
      "lv": "luettu"
    }
  },
  {
    "infinitiv": {
      "de": "liegen",
      "lv": "maata"
    },
    "praesens": {
      "de": "er liegt",
      "lv": "hän makaa"
    },
    "imperfektIndikativ": {
      "de": "er lag",
      "lv": "hän makasi"
    },
    "imperfektKonjunktiv": {
      "de": "er läge",
      "lv": "hän makaisi"
    },
    "partizipVergangenheit": {
      "de": "gelegen",
      "lv": "maannut"
    }
  },
  {
    "infinitiv": {
      "de": "lügen",
      "lv": "valehdella"
    },
    "praesens": {
      "de": "er lügt",
      "lv": "hän valehtelee"
    },
    "imperfektIndikativ": {
      "de": "er log",
      "lv": "hän valehteli"
    },
    "imperfektKonjunktiv": {
      "de": "er löge",
      "lv": "hän valehtelisi"
    },
    "partizipVergangenheit": {
      "de": "gelogen",
      "lv": "valehdellut"
    }
  },
  {
    "infinitiv": {
      "de": "mahlen",
      "lv": "jauhaa"
    },
    "praesens": {
      "de": "er mahlt",
      "lv": "hän jauhaa"
    },
    "imperfektIndikativ": {
      "de": "er mahlte",
      "lv": "hän jauhoi"
    },
    "imperfektKonjunktiv": {
      "de": "er malte",
      "lv": "hän jauhaisi"
    },
    "partizipVergangenheit": {
      "de": "gemahlen",
      "lv": "jauhettu"
    }
  },
  {
    "infinitiv": {
      "de": "meiden",
      "lv": "välttää"
    },
    "praesens": {
      "de": "er meidet",
      "lv": "hän välttää"
    },
    "imperfektIndikativ": {
      "de": "er mied",
      "lv": "hän vältti"
    },
    "imperfektKonjunktiv": {
      "de": "er miede",
      "lv": "hän välttäisi"
    },
    "partizipVergangenheit": {
      "de": "gemieden",
      "lv": "vältetty"
    }
  },
  {
    "infinitiv": {
      "de": "melken",
      "lv": "lypsää"
    },
    "praesens": {
      "de": "er milkt / er melkt",
      "lv": "hän lypsää"
    },
    "imperfektIndikativ": {
      "de": "er molk / er melkte",
      "lv": "hän lypsi"
    },
    "imperfektKonjunktiv": {
      "de": "er mölke / er melkte",
      "lv": "hän lypsäisi"
    },
    "partizipVergangenheit": {
      "de": "gemolken / gemelkt",
      "lv": "lypsetty"
    }
  },
  {
    "infinitiv": {
      "de": "messen",
      "lv": "mitata"
    },
    "praesens": {
      "de": "er misst",
      "lv": "hän mittaa"
    },
    "imperfektIndikativ": {
      "de": "er mass",
      "lv": "hän mittasi"
    },
    "imperfektKonjunktiv": {
      "de": "er mäße",
      "lv": "hän mittaisi"
    },
    "partizipVergangenheit": {
      "de": "gemessen",
      "lv": "mitattu"
    }
  },
  {
    "infinitiv": {
      "de": "misslingen",
      "lv": "epäonnistua"
    },
    "praesens": {
      "de": "es misslingt",
      "lv": "se epäonnistuu"
    },
    "imperfektIndikativ": {
      "de": "misslang",
      "lv": "se epäonnistui"
    },
    "imperfektKonjunktiv": {
      "de": "misslang",
      "lv": "se epäonnistuisi"
    },
    "partizipVergangenheit": {
      "de": "misslungen",
      "lv": "epäonnistunut"
    }
  },
  {
    "infinitiv": {
      "de": "mögen",
      "lv": "pitää"
    },
    "praesens": {
      "de": "er mag",
      "lv": "hän pitää"
    },
    "imperfektIndikativ": {
      "de": "mochte",
      "lv": "hän piti"
    },
    "imperfektKonjunktiv": {
      "de": "mochte",
      "lv": "hän pitäisi"
    },
    "partizipVergangenheit": {
      "de": "gemocht",
      "lv": "pitänyt"
    }
  },
  {
    "infinitiv": {
      "de": "müssen",
      "lv": "täytyä"
    },
    "praesens": {
      "de": "er muss",
      "lv": "hänen täytyy"
    },
    "imperfektIndikativ": {
      "de": "musste",
      "lv": "hänen täytyi"
    },
    "imperfektKonjunktiv": {
      "de": "musste",
      "lv": "hänen täytyisi"
    },
    "partizipVergangenheit": {
      "de": "gemusst",
      "lv": "täytynyt"
    }
  },
  {
    "infinitiv": {
      "de": "nehmen",
      "lv": "ottaa"
    },
    "praesens": {
      "de": "er nimmt",
      "lv": "hän ottaa"
    },
    "imperfektIndikativ": {
      "de": "er nahm",
      "lv": "hän otti"
    },
    "imperfektKonjunktiv": {
      "de": "er nähme",
      "lv": "hän ottaisi"
    },
    "partizipVergangenheit": {
      "de": "genommen",
      "lv": "otettu"
    }
  },
  {
    "infinitiv": {
      "de": "nennen",
      "lv": "nimetä"
    },
    "praesens": {
      "de": "er nennt",
      "lv": "hän nimeää"
    },
    "imperfektIndikativ": {
      "de": "er nannte",
      "lv": "hän nimesi"
    },
    "imperfektKonjunktiv": {
      "de": "er nennte",
      "lv": "hän nimeäisi"
    },
    "partizipVergangenheit": {
      "de": "genannt",
      "lv": "nimetty"
    }
  },
  {
    "infinitiv": {
      "de": "pfeifen",
      "lv": "viheltää"
    },
    "praesens": {
      "de": "er pfeift",
      "lv": "hän viheltää"
    },
    "imperfektIndikativ": {
      "de": "er pfiff",
      "lv": "hän vihelsi"
    },
    "imperfektKonjunktiv": {
      "de": "er pfiffe",
      "lv": "hän viheltäisi"
    },
    "partizipVergangenheit": {
      "de": "gepfiffen",
      "lv": "viheltänyt"
    }
  },
  {
    "infinitiv": {
      "de": "pflegen",
      "lv": "hoitaa"
    },
    "praesens": {
      "de": "er pflegt",
      "lv": "hän hoitaa"
    },
    "imperfektIndikativ": {
      "de": "pflegte / pflog",
      "lv": "hän hoiti"
    },
    "imperfektKonjunktiv": {
      "de": "pflegte / pflog",
      "lv": "hän hoitaisi"
    },
    "partizipVergangenheit": {
      "de": "gepflegt / gepflogen",
      "lv": "hoidettu"
    }
  },
  {
    "infinitiv": {
      "de": "preisen",
      "lv": "ylistää"
    },
    "praesens": {
      "de": "er preist",
      "lv": "hän ylistää"
    },
    "imperfektIndikativ": {
      "de": "er pries",
      "lv": "hän ylisti"
    },
    "imperfektKonjunktiv": {
      "de": "er priese",
      "lv": "hän ylistäisi"
    },
    "partizipVergangenheit": {
      "de": "gepriesen",
      "lv": "ylistetty"
    }
  },
  {
    "infinitiv": {
      "de": "quellen",
      "lv": "paisua"
    },
    "praesens": {
      "de": "er quillt",
      "lv": "se paisuu"
    },
    "imperfektIndikativ": {
      "de": "er quoll",
      "lv": "se paisui"
    },
    "imperfektKonjunktiv": {
      "de": "er quölle",
      "lv": "se paisuisi"
    },
    "partizipVergangenheit": {
      "de": "gequollen (er ist)",
      "lv": "paisunut"
    }
  },
  {
    "infinitiv": {
      "de": "raten",
      "lv": "neuvoa / arvata"
    },
    "praesens": {
      "de": "er rät",
      "lv": "hän neuvoo / arvaa"
    },
    "imperfektIndikativ": {
      "de": "er riet",
      "lv": "hän neuvoi / arvasi"
    },
    "imperfektKonjunktiv": {
      "de": "er riete",
      "lv": "hän neuvoisi / arvaisi"
    },
    "partizipVergangenheit": {
      "de": "geraten",
      "lv": "neuvottu / arvattu"
    }
  },
  {
    "infinitiv": {
      "de": "reiben",
      "lv": "hieroa"
    },
    "praesens": {
      "de": "er reibt",
      "lv": "hän hieroo"
    },
    "imperfektIndikativ": {
      "de": "er rieb",
      "lv": "hän hieroi"
    },
    "imperfektKonjunktiv": {
      "de": "er riebe",
      "lv": "hän hieroisi"
    },
    "partizipVergangenheit": {
      "de": "gerieben",
      "lv": "hierottu"
    }
  },
  {
    "infinitiv": {
      "de": "reißen",
      "lv": "repiä"
    },
    "praesens": {
      "de": "er reißt",
      "lv": "hän repii"
    },
    "imperfektIndikativ": {
      "de": "er riss",
      "lv": "hän repi"
    },
    "imperfektKonjunktiv": {
      "de": "er risse",
      "lv": "hän repisi"
    },
    "partizipVergangenheit": {
      "de": "gerissen",
      "lv": "revitty"
    }
  },
  {
    "infinitiv": {
      "de": "reiten",
      "lv": "ratsastaa"
    },
    "praesens": {
      "de": "er reitet",
      "lv": "hän ratsastaa"
    },
    "imperfektIndikativ": {
      "de": "er ritt",
      "lv": "hän ratsasti"
    },
    "imperfektKonjunktiv": {
      "de": "er ritte",
      "lv": "hän ratsastaisi"
    },
    "partizipVergangenheit": {
      "de": "geritten (er ist)",
      "lv": "ratsastanut"
    }
  },
  {
    "infinitiv": {
      "de": "rennen",
      "lv": "rynnätä"
    },
    "praesens": {
      "de": "er rennt",
      "lv": "hän ryntää"
    },
    "imperfektIndikativ": {
      "de": "er rannte",
      "lv": "hän ryntäsi"
    },
    "imperfektKonjunktiv": {
      "de": "er rennte",
      "lv": "hän ryntäisi"
    },
    "partizipVergangenheit": {
      "de": "gerannt",
      "lv": "rynnännyt"
    }
  },
  {
    "infinitiv": {
      "de": "riechen",
      "lv": "haistaa"
    },
    "praesens": {
      "de": "er riecht",
      "lv": "hän haistaa"
    },
    "imperfektIndikativ": {
      "de": "er roch",
      "lv": "hän haistoi"
    },
    "imperfektKonjunktiv": {
      "de": "er röche",
      "lv": "hän haistaisi"
    },
    "partizipVergangenheit": {
      "de": "gerochen",
      "lv": "haistettu"
    }
  },
  {
    "infinitiv": {
      "de": "ringen",
      "lv": "painia"
    },
    "praesens": {
      "de": "er ringt",
      "lv": "hän painii"
    },
    "imperfektIndikativ": {
      "de": "er rang",
      "lv": "hän paini"
    },
    "imperfektKonjunktiv": {
      "de": "er ränge",
      "lv": "hän painisi"
    },
    "partizipVergangenheit": {
      "de": "gerungen",
      "lv": "paininut"
    }
  },
  {
    "infinitiv": {
      "de": "rinnen",
      "lv": "valua"
    },
    "praesens": {
      "de": "er rinnt",
      "lv": "se valuu"
    },
    "imperfektIndikativ": {
      "de": "er rann",
      "lv": "se valui"
    },
    "imperfektKonjunktiv": {
      "de": "er ränne / er rönne",
      "lv": "se valuisi"
    },
    "partizipVergangenheit": {
      "de": "geronnen (er ist)",
      "lv": "valunut"
    }
  },
  {
    "infinitiv": {
      "de": "rufen",
      "lv": "kutsua"
    },
    "praesens": {
      "de": "er ruft",
      "lv": "hän kutsuu"
    },
    "imperfektIndikativ": {
      "de": "er rief",
      "lv": "hän kutsui"
    },
    "imperfektKonjunktiv": {
      "de": "er riefe",
      "lv": "hän kutsuisi"
    },
    "partizipVergangenheit": {
      "de": "gerufen",
      "lv": "kutsuttu"
    }
  },
  {
    "infinitiv": {
      "de": "salzen",
      "lv": "suolata"
    },
    "praesens": {
      "de": "er salzt",
      "lv": "hän suolaa"
    },
    "imperfektIndikativ": {
      "de": "er salzte",
      "lv": "hän suolasi"
    },
    "imperfektKonjunktiv": {
      "de": "er salzte",
      "lv": "hän suolaisi"
    },
    "partizipVergangenheit": {
      "de": "gesalzen",
      "lv": "suolattu"
    }
  },
  {
    "infinitiv": {
      "de": "saufen",
      "lv": "juopotella / juoda"
    },
    "praesens": {
      "de": "er säuft",
      "lv": "hän juopottelee / juo"
    },
    "imperfektIndikativ": {
      "de": "er soff",
      "lv": "hän juopotteli / joi"
    },
    "imperfektKonjunktiv": {
      "de": "er söffe",
      "lv": "hän juopottelisi / joisi"
    },
    "partizipVergangenheit": {
      "de": "gesoffen",
      "lv": "juopotellut / juotu"
    }
  },
  {
    "infinitiv": {
      "de": "saugen",
      "lv": "imeä"
    },
    "praesens": {
      "de": "er saugt",
      "lv": "hän imee"
    },
    "imperfektIndikativ": {
      "de": "er sog",
      "lv": "hän imi"
    },
    "imperfektKonjunktiv": {
      "de": "er söge",
      "lv": "hän imisi"
    },
    "partizipVergangenheit": {
      "de": "gesogen",
      "lv": "imetty"
    }
  },
  {
    "infinitiv": {
      "de": "schaffen",
      "lv": "luoda"
    },
    "praesens": {
      "de": "er schafft",
      "lv": "hän luo"
    },
    "imperfektIndikativ": {
      "de": "er schuf",
      "lv": "hän loi"
    },
    "imperfektKonjunktiv": {
      "de": "er schüfe",
      "lv": "hän loisi"
    },
    "partizipVergangenheit": {
      "de": "geschaffen",
      "lv": "luotu"
    }
  },
  {
    "infinitiv": {
      "de": "schallen",
      "lv": "kaikua"
    },
    "praesens": {
      "de": "es schallt",
      "lv": "se kaikuu"
    },
    "imperfektIndikativ": {
      "de": "schallte / scholl",
      "lv": "se kaikui"
    },
    "imperfektKonjunktiv": {
      "de": "schallte / scholl",
      "lv": "se kaikuisi"
    },
    "partizipVergangenheit": {
      "de": "geschallt",
      "lv": "kaikunut"
    }
  },
  {
    "infinitiv": {
      "de": "scheiden",
      "lv": "erottaa / erota"
    },
    "praesens": {
      "de": "er scheidet",
      "lv": "hän erottaa / eroaa"
    },
    "imperfektIndikativ": {
      "de": "er schied",
      "lv": "hän erotti / erosi"
    },
    "imperfektKonjunktiv": {
      "de": "er schiede",
      "lv": "hän erottaisi / eroaisi"
    },
    "partizipVergangenheit": {
      "de": "geschieden (er hat / er ist)",
      "lv": "erotettu / eronnut"
    }
  },
  {
    "infinitiv": {
      "de": "scheinen",
      "lv": "loistaa / näyttää"
    },
    "praesens": {
      "de": "er scheint",
      "lv": "hän loistaa / näyttää"
    },
    "imperfektIndikativ": {
      "de": "er schien",
      "lv": "hän loisti / näytti"
    },
    "imperfektKonjunktiv": {
      "de": "er schiene",
      "lv": "hän loistaisi / näyttäisi"
    },
    "partizipVergangenheit": {
      "de": "geschienen",
      "lv": "loistanut / näyttänyt"
    }
  },
  {
    "infinitiv": {
      "de": "schelten",
      "lv": "torua"
    },
    "praesens": {
      "de": "er schilt",
      "lv": "hän toruu"
    },
    "imperfektIndikativ": {
      "de": "er schalt",
      "lv": "hän torui"
    },
    "imperfektKonjunktiv": {
      "de": "er schölte / er schälte",
      "lv": "hän toruisi"
    },
    "partizipVergangenheit": {
      "de": "gescholten",
      "lv": "toruttu"
    }
  },
  {
    "infinitiv": {
      "de": "scheren",
      "lv": "keritä"
    },
    "praesens": {
      "de": "er schert",
      "lv": "hän keritsee"
    },
    "imperfektIndikativ": {
      "de": "schor / scherte",
      "lv": "hän keritsi"
    },
    "imperfektKonjunktiv": {
      "de": "schor / scherte",
      "lv": "hän keritsisi"
    },
    "partizipVergangenheit": {
      "de": "geschoren / geschert",
      "lv": "keritty"
    }
  },
  {
    "infinitiv": {
      "de": "schieben",
      "lv": "työntää"
    },
    "praesens": {
      "de": "er schiebt",
      "lv": "hän työntää"
    },
    "imperfektIndikativ": {
      "de": "er schob",
      "lv": "hän työnsi"
    },
    "imperfektKonjunktiv": {
      "de": "er schöbe",
      "lv": "hän työntäisi"
    },
    "partizipVergangenheit": {
      "de": "geschoben",
      "lv": "työnnetty"
    }
  },
  {
    "infinitiv": {
      "de": "schießen",
      "lv": "ampua"
    },
    "praesens": {
      "de": "er schießt",
      "lv": "hän ampuu"
    },
    "imperfektIndikativ": {
      "de": "er schoss",
      "lv": "hän ampui"
    },
    "imperfektKonjunktiv": {
      "de": "er schösse",
      "lv": "hän ampuisi"
    },
    "partizipVergangenheit": {
      "de": "geschossen",
      "lv": "ammuttu"
    }
  },
  {
    "infinitiv": {
      "de": "schinden",
      "lv": "piinata"
    },
    "praesens": {
      "de": "er schindet",
      "lv": "hän piinaa"
    },
    "imperfektIndikativ": {
      "de": "schindete",
      "lv": "hän piinasi"
    },
    "imperfektKonjunktiv": {
      "de": "schindete",
      "lv": "hän piinaisi"
    },
    "partizipVergangenheit": {
      "de": "geschunden",
      "lv": "piinattu"
    }
  },
  {
    "infinitiv": {
      "de": "schlafen",
      "lv": "nukkua"
    },
    "praesens": {
      "de": "er schläft",
      "lv": "hän nukkuu"
    },
    "imperfektIndikativ": {
      "de": "er schlief",
      "lv": "hän nukkui"
    },
    "imperfektKonjunktiv": {
      "de": "er schliefe",
      "lv": "hän nukkuisi"
    },
    "partizipVergangenheit": {
      "de": "geschlafen",
      "lv": "nukkunut"
    }
  },
  {
    "infinitiv": {
      "de": "schlagen",
      "lv": "lyödä"
    },
    "praesens": {
      "de": "er schlägt",
      "lv": "hän lyö"
    },
    "imperfektIndikativ": {
      "de": "er schlug",
      "lv": "hän löi"
    },
    "imperfektKonjunktiv": {
      "de": "er schlüge",
      "lv": "hän löisi"
    },
    "partizipVergangenheit": {
      "de": "geschlagen",
      "lv": "lyöty"
    }
  },
  {
    "infinitiv": {
      "de": "schleichen",
      "lv": "hiipiä"
    },
    "praesens": {
      "de": "er schleicht",
      "lv": "hän hiipii"
    },
    "imperfektIndikativ": {
      "de": "er schlich",
      "lv": "hän hiipi"
    },
    "imperfektKonjunktiv": {
      "de": "er schliche",
      "lv": "hän hiipisi"
    },
    "partizipVergangenheit": {
      "de": "geschlichen (er ist)",
      "lv": "hiipinyt"
    }
  },
  {
    "infinitiv": {
      "de": "schleifen",
      "lv": "hioa"
    },
    "praesens": {
      "de": "er schleift",
      "lv": "hän hioo"
    },
    "imperfektIndikativ": {
      "de": "er schliff",
      "lv": "hän hioi"
    },
    "imperfektKonjunktiv": {
      "de": "er schliffe",
      "lv": "hän hioisi"
    },
    "partizipVergangenheit": {
      "de": "geschliffen",
      "lv": "hiottu"
    }
  },
  {
    "infinitiv": {
      "de": "schließen",
      "lv": "sulkea"
    },
    "praesens": {
      "de": "er schließt",
      "lv": "hän sulkee"
    },
    "imperfektIndikativ": {
      "de": "er schloss",
      "lv": "hän sulki"
    },
    "imperfektKonjunktiv": {
      "de": "er schlösse",
      "lv": "hän sulkisi"
    },
    "partizipVergangenheit": {
      "de": "geschlossen",
      "lv": "suljettu"
    }
  },
  {
    "infinitiv": {
      "de": "schlingen",
      "lv": "niellä"
    },
    "praesens": {
      "de": "er schlingt",
      "lv": "hän nielee"
    },
    "imperfektIndikativ": {
      "de": "er schlang",
      "lv": "hän nieli"
    },
    "imperfektKonjunktiv": {
      "de": "er schlänge",
      "lv": "hän nielisi"
    },
    "partizipVergangenheit": {
      "de": "geschlungen",
      "lv": "nielty"
    }
  },
  {
    "infinitiv": {
      "de": "schmeißen",
      "lv": "viskata"
    },
    "praesens": {
      "de": "er schmeißt",
      "lv": "hän viskaa"
    },
    "imperfektIndikativ": {
      "de": "er schmiss",
      "lv": "hän viskasi"
    },
    "imperfektKonjunktiv": {
      "de": "er schmisse",
      "lv": "hän viskaisi"
    },
    "partizipVergangenheit": {
      "de": "geschmissen",
      "lv": "viskattu"
    }
  },
  {
    "infinitiv": {
      "de": "schmelzen",
      "lv": "sulaa"
    },
    "praesens": {
      "de": "er schmilzt",
      "lv": "se sulaa"
    },
    "imperfektIndikativ": {
      "de": "er schmolz",
      "lv": "se suli"
    },
    "imperfektKonjunktiv": {
      "de": "er schmölze",
      "lv": "se sulaisi"
    },
    "partizipVergangenheit": {
      "de": "geschmolzen (er ist)",
      "lv": "sulanut"
    }
  },
  {
    "infinitiv": {
      "de": "schnauben",
      "lv": "puhista"
    },
    "praesens": {
      "de": "er schnaubt",
      "lv": "hän puhisee"
    },
    "imperfektIndikativ": {
      "de": "schnaubte / schnob",
      "lv": "hän puhisi"
    },
    "imperfektKonjunktiv": {
      "de": "schnaubte / schnob",
      "lv": "hän puhisisi"
    },
    "partizipVergangenheit": {
      "de": "geschnaubt / geschnoben",
      "lv": "puhissut"
    }
  },
  {
    "infinitiv": {
      "de": "schneiden",
      "lv": "leikata"
    },
    "praesens": {
      "de": "er schneidet",
      "lv": "hän leikkaa"
    },
    "imperfektIndikativ": {
      "de": "er schnitt",
      "lv": "hän leikkasi"
    },
    "imperfektKonjunktiv": {
      "de": "er schnitte",
      "lv": "hän leikkaisi"
    },
    "partizipVergangenheit": {
      "de": "geschnitten",
      "lv": "leikattu"
    }
  },
  {
    "infinitiv": {
      "de": "schreiben",
      "lv": "kirjoittaa"
    },
    "praesens": {
      "de": "er schreibt",
      "lv": "hän kirjoittaa"
    },
    "imperfektIndikativ": {
      "de": "er schrieb",
      "lv": "hän kirjoitti"
    },
    "imperfektKonjunktiv": {
      "de": "er schriebe",
      "lv": "hän kirjoittaisi"
    },
    "partizipVergangenheit": {
      "de": "geschrieben",
      "lv": "kirjoitettu"
    }
  },
  {
    "infinitiv": {
      "de": "schreien",
      "lv": "huutaa"
    },
    "praesens": {
      "de": "er schreit",
      "lv": "hän huutaa"
    },
    "imperfektIndikativ": {
      "de": "er schrie",
      "lv": "hän huusi"
    },
    "imperfektKonjunktiv": {
      "de": "er schriee",
      "lv": "hän huutaisi"
    },
    "partizipVergangenheit": {
      "de": "geschrien",
      "lv": "huutanut"
    }
  },
  {
    "infinitiv": {
      "de": "schreiten",
      "lv": "astella"
    },
    "praesens": {
      "de": "er schreitet",
      "lv": "hän astelee"
    },
    "imperfektIndikativ": {
      "de": "er schritt",
      "lv": "hän asteli"
    },
    "imperfektKonjunktiv": {
      "de": "er schritte",
      "lv": "hän astelisi"
    },
    "partizipVergangenheit": {
      "de": "geschritten (er ist)",
      "lv": "astellut"
    }
  },
  {
    "infinitiv": {
      "de": "schweigen",
      "lv": "vaieta"
    },
    "praesens": {
      "de": "er schweigt",
      "lv": "hän vaikenee"
    },
    "imperfektIndikativ": {
      "de": "er schwieg",
      "lv": "hän vaikeni"
    },
    "imperfektKonjunktiv": {
      "de": "er schwiege",
      "lv": "hän vaikenisi"
    },
    "partizipVergangenheit": {
      "de": "geschwiegen",
      "lv": "vaiennut"
    }
  },
  {
    "infinitiv": {
      "de": "schwellen",
      "lv": "turvota"
    },
    "praesens": {
      "de": "er schwillt",
      "lv": "se turpoaa"
    },
    "imperfektIndikativ": {
      "de": "er schwoll",
      "lv": "se turposi"
    },
    "imperfektKonjunktiv": {
      "de": "er schwölle",
      "lv": "se turpoaisi"
    },
    "partizipVergangenheit": {
      "de": "geschwollen (er ist)",
      "lv": "turvonnut"
    }
  },
  {
    "infinitiv": {
      "de": "schwimmen",
      "lv": "uida"
    },
    "praesens": {
      "de": "er schwimmt",
      "lv": "hän ui"
    },
    "imperfektIndikativ": {
      "de": "er schwamm",
      "lv": "hän ui"
    },
    "imperfektKonjunktiv": {
      "de": "er schwömme / er schwämme",
      "lv": "hän uisi"
    },
    "partizipVergangenheit": {
      "de": "geschwommen (er ist)",
      "lv": "uinut"
    }
  },
  {
    "infinitiv": {
      "de": "schwinden",
      "lv": "kadota"
    },
    "praesens": {
      "de": "er schwindet",
      "lv": "se katoaa"
    },
    "imperfektIndikativ": {
      "de": "er schwand",
      "lv": "se katosi"
    },
    "imperfektKonjunktiv": {
      "de": "er schwände",
      "lv": "se katoaisi"
    },
    "partizipVergangenheit": {
      "de": "geschwunden (er ist)",
      "lv": "kadonnut"
    }
  },
  {
    "infinitiv": {
      "de": "schwingen",
      "lv": "heiluttaa"
    },
    "praesens": {
      "de": "er schwingt",
      "lv": "hän heiluttaa"
    },
    "imperfektIndikativ": {
      "de": "er schwang",
      "lv": "hän heilutti"
    },
    "imperfektKonjunktiv": {
      "de": "er schwänge",
      "lv": "hän heiluttaisi"
    },
    "partizipVergangenheit": {
      "de": "geschwungen",
      "lv": "heilutettu"
    }
  },
  {
    "infinitiv": {
      "de": "schwören",
      "lv": "vannoa"
    },
    "praesens": {
      "de": "er schwört",
      "lv": "hän vannoo"
    },
    "imperfektIndikativ": {
      "de": "er schwur / er schwor",
      "lv": "hän vannoi"
    },
    "imperfektKonjunktiv": {
      "de": "er schwöre",
      "lv": "hän vannoisi"
    },
    "partizipVergangenheit": {
      "de": "geschworen",
      "lv": "vannottu"
    }
  },
  {
    "infinitiv": {
      "de": "sehen",
      "lv": "nähdä"
    },
    "praesens": {
      "de": "er sieht",
      "lv": "hän näkee"
    },
    "imperfektIndikativ": {
      "de": "er sah",
      "lv": "hän näki"
    },
    "imperfektKonjunktiv": {
      "de": "er sähe",
      "lv": "hän näkisi"
    },
    "partizipVergangenheit": {
      "de": "gesehen",
      "lv": "nähty"
    }
  },
  {
    "infinitiv": {
      "de": "sein",
      "lv": "olla"
    },
    "praesens": {
      "de": "er ist",
      "lv": "hän on"
    },
    "imperfektIndikativ": {
      "de": "war",
      "lv": "hän oli"
    },
    "imperfektKonjunktiv": {
      "de": "war",
      "lv": "hän olisi"
    },
    "partizipVergangenheit": {
      "de": "gewesen",
      "lv": "ollut"
    }
  },
  {
    "infinitiv": {
      "de": "senden",
      "lv": "lähettää"
    },
    "praesens": {
      "de": "er sendet",
      "lv": "hän lähettää"
    },
    "imperfektIndikativ": {
      "de": "er sandte / er sendete",
      "lv": "hän lähetti"
    },
    "imperfektKonjunktiv": {
      "de": "er sendete",
      "lv": "hän lähettäisi"
    },
    "partizipVergangenheit": {
      "de": "gesandt / gesendet",
      "lv": "lähetetty"
    }
  },
  {
    "infinitiv": {
      "de": "sieden",
      "lv": "keittää"
    },
    "praesens": {
      "de": "er siedet",
      "lv": "hän keittää"
    },
    "imperfektIndikativ": {
      "de": "sott / siedete",
      "lv": "hän keitti"
    },
    "imperfektKonjunktiv": {
      "de": "sott / siedete",
      "lv": "hän keittäisi"
    },
    "partizipVergangenheit": {
      "de": "gesotten / gesiedet",
      "lv": "keitetty"
    }
  },
  {
    "infinitiv": {
      "de": "singen",
      "lv": "laulaa"
    },
    "praesens": {
      "de": "er singt",
      "lv": "hän laulaa"
    },
    "imperfektIndikativ": {
      "de": "er sang",
      "lv": "hän lauloi"
    },
    "imperfektKonjunktiv": {
      "de": "er sänge",
      "lv": "hän laulaisi"
    },
    "partizipVergangenheit": {
      "de": "gesungen",
      "lv": "laulettu"
    }
  },
  {
    "infinitiv": {
      "de": "sinken",
      "lv": "upota"
    },
    "praesens": {
      "de": "er sinkt",
      "lv": "hän uppoaa"
    },
    "imperfektIndikativ": {
      "de": "er sank",
      "lv": "hän upposi"
    },
    "imperfektKonjunktiv": {
      "de": "er sänke",
      "lv": "hän uppoaisi"
    },
    "partizipVergangenheit": {
      "de": "gesunken (er ist)",
      "lv": "uponnut"
    }
  },
  {
    "infinitiv": {
      "de": "sinnen",
      "lv": "mietiskellä"
    },
    "praesens": {
      "de": "er sinnt",
      "lv": "hän mietiskelee"
    },
    "imperfektIndikativ": {
      "de": "er sann",
      "lv": "hän mietiskeli"
    },
    "imperfektKonjunktiv": {
      "de": "er sönne / er sänne",
      "lv": "hän mietiskelisi"
    },
    "partizipVergangenheit": {
      "de": "gesonnen",
      "lv": "mietiskellyt"
    }
  },
  {
    "infinitiv": {
      "de": "sitzen",
      "lv": "istua"
    },
    "praesens": {
      "de": "er sitzt",
      "lv": "hän istuu"
    },
    "imperfektIndikativ": {
      "de": "er sass",
      "lv": "hän istui"
    },
    "imperfektKonjunktiv": {
      "de": "er säße",
      "lv": "hän istuisi"
    },
    "partizipVergangenheit": {
      "de": "gesessen",
      "lv": "istunut"
    }
  },
  {
    "infinitiv": {
      "de": "sollen",
      "lv": "pitää"
    },
    "praesens": {
      "de": "er soll",
      "lv": "hänen pitää"
    },
    "imperfektIndikativ": {
      "de": "sollte",
      "lv": "hänen piti"
    },
    "imperfektKonjunktiv": {
      "de": "sollte",
      "lv": "hänen pitäisi"
    },
    "partizipVergangenheit": {
      "de": "gesollt",
      "lv": "pitänyt"
    }
  },
  {
    "infinitiv": {
      "de": "speien",
      "lv": "sylkeä"
    },
    "praesens": {
      "de": "er speit",
      "lv": "hän sylkee"
    },
    "imperfektIndikativ": {
      "de": "er spie",
      "lv": "hän sylki"
    },
    "imperfektKonjunktiv": {
      "de": "er spie",
      "lv": "hän sylkisi"
    },
    "partizipVergangenheit": {
      "de": "gespien",
      "lv": "syljetty"
    }
  },
  {
    "infinitiv": {
      "de": "spinnen",
      "lv": "kehrätä"
    },
    "praesens": {
      "de": "er spinnt",
      "lv": "hän kehrää"
    },
    "imperfektIndikativ": {
      "de": "er spann",
      "lv": "hän kehräsi"
    },
    "imperfektKonjunktiv": {
      "de": "er spönne / er spänne",
      "lv": "hän kehräisi"
    },
    "partizipVergangenheit": {
      "de": "gesponnen",
      "lv": "kehrätty"
    }
  },
  {
    "infinitiv": {
      "de": "spleißen",
      "lv": "liittää"
    },
    "praesens": {
      "de": "er spleißt",
      "lv": "hän liittää"
    },
    "imperfektIndikativ": {
      "de": "spliss",
      "lv": "hän liitti"
    },
    "imperfektKonjunktiv": {
      "de": "spliss",
      "lv": "hän liittäisi"
    },
    "partizipVergangenheit": {
      "de": "gesplissen",
      "lv": "liitetty"
    }
  },
  {
    "infinitiv": {
      "de": "sprechen",
      "lv": "puhua"
    },
    "praesens": {
      "de": "er spricht",
      "lv": "hän puhuu"
    },
    "imperfektIndikativ": {
      "de": "er sprach",
      "lv": "hän puhui"
    },
    "imperfektKonjunktiv": {
      "de": "er spräche",
      "lv": "hän puhuisi"
    },
    "partizipVergangenheit": {
      "de": "gesprochen",
      "lv": "puhuttu"
    }
  },
  {
    "infinitiv": {
      "de": "sprießen",
      "lv": "versoa"
    },
    "praesens": {
      "de": "er sprießt",
      "lv": "se versoo"
    },
    "imperfektIndikativ": {
      "de": "er spross",
      "lv": "se versoi"
    },
    "imperfektKonjunktiv": {
      "de": "er sprösse",
      "lv": "se versoisi"
    },
    "partizipVergangenheit": {
      "de": "gesprossen (er ist)",
      "lv": "versonut"
    }
  },
  {
    "infinitiv": {
      "de": "springen",
      "lv": "hypätä"
    },
    "praesens": {
      "de": "er springt",
      "lv": "hän hyppää"
    },
    "imperfektIndikativ": {
      "de": "er sprang",
      "lv": "hän hyppäsi"
    },
    "imperfektKonjunktiv": {
      "de": "er spränge",
      "lv": "hän hyppäisi"
    },
    "partizipVergangenheit": {
      "de": "gesprungen (er ist)",
      "lv": "hypännyt"
    }
  },
  {
    "infinitiv": {
      "de": "stechen",
      "lv": "pistää"
    },
    "praesens": {
      "de": "er sticht",
      "lv": "hän pistää"
    },
    "imperfektIndikativ": {
      "de": "er stach",
      "lv": "hän pisti"
    },
    "imperfektKonjunktiv": {
      "de": "er stäche",
      "lv": "hän pistäisi"
    },
    "partizipVergangenheit": {
      "de": "gestochen",
      "lv": "pistetty"
    }
  },
  {
    "infinitiv": {
      "de": "stecken",
      "lv": "tunkea / kiinnittää"
    },
    "praesens": {
      "de": "er steckt",
      "lv": "hän tunkee / kiinnittää"
    },
    "imperfektIndikativ": {
      "de": "stak / steckte",
      "lv": "hän tunki / kiinnitti"
    },
    "imperfektKonjunktiv": {
      "de": "stak / steckte",
      "lv": "hän tunkisi / kiinnittäisi"
    },
    "partizipVergangenheit": {
      "de": "gesteckt",
      "lv": "tungettu / kiinnitetty"
    }
  },
  {
    "infinitiv": {
      "de": "stehen",
      "lv": "seisoa"
    },
    "praesens": {
      "de": "er steht",
      "lv": "hän seisoo"
    },
    "imperfektIndikativ": {
      "de": "er stand",
      "lv": "hän seisoi"
    },
    "imperfektKonjunktiv": {
      "de": "er stände / er stünde",
      "lv": "hän seisoisi"
    },
    "partizipVergangenheit": {
      "de": "gestanden",
      "lv": "seisonut"
    }
  },
  {
    "infinitiv": {
      "de": "stehlen",
      "lv": "varastaa"
    },
    "praesens": {
      "de": "er stiehlt",
      "lv": "hän varastaa"
    },
    "imperfektIndikativ": {
      "de": "er stahl",
      "lv": "hän varasti"
    },
    "imperfektKonjunktiv": {
      "de": "er stöhle / er stähle",
      "lv": "hän varastaisi"
    },
    "partizipVergangenheit": {
      "de": "gestohlen",
      "lv": "varastettu"
    }
  },
  {
    "infinitiv": {
      "de": "steigen",
      "lv": "kiivetä"
    },
    "praesens": {
      "de": "er steigt",
      "lv": "hän kiipeää"
    },
    "imperfektIndikativ": {
      "de": "er stieg",
      "lv": "hän kiipesi"
    },
    "imperfektKonjunktiv": {
      "de": "er stiege",
      "lv": "hän kiipeäisi"
    },
    "partizipVergangenheit": {
      "de": "gestiegen (er ist)",
      "lv": "kiivennyt"
    }
  },
  {
    "infinitiv": {
      "de": "sterben",
      "lv": "kuolla"
    },
    "praesens": {
      "de": "er stirbt",
      "lv": "hän kuolee"
    },
    "imperfektIndikativ": {
      "de": "er starb",
      "lv": "hän kuoli"
    },
    "imperfektKonjunktiv": {
      "de": "er stürbe",
      "lv": "hän kuolisi"
    },
    "partizipVergangenheit": {
      "de": "gestorben (er ist)",
      "lv": "kuollut"
    }
  },
  {
    "infinitiv": {
      "de": "stinken",
      "lv": "haista"
    },
    "praesens": {
      "de": "es stinkt",
      "lv": "se haisee"
    },
    "imperfektIndikativ": {
      "de": "stank",
      "lv": "se haisi"
    },
    "imperfektKonjunktiv": {
      "de": "stank",
      "lv": "se haisisi"
    },
    "partizipVergangenheit": {
      "de": "gestunken",
      "lv": "haissut"
    }
  },
  {
    "infinitiv": {
      "de": "stoßen",
      "lv": "tönäistä"
    },
    "praesens": {
      "de": "er stößt",
      "lv": "hän tönäisee"
    },
    "imperfektIndikativ": {
      "de": "er stieß",
      "lv": "hän tönäisi"
    },
    "imperfektKonjunktiv": {
      "de": "er stieße",
      "lv": "hän tönäisisi"
    },
    "partizipVergangenheit": {
      "de": "gestoßen",
      "lv": "tönäisty"
    }
  },
  {
    "infinitiv": {
      "de": "streichen",
      "lv": "maalata / yliviivata"
    },
    "praesens": {
      "de": "er streicht",
      "lv": "hän maalaa / yliviivaa"
    },
    "imperfektIndikativ": {
      "de": "er strich",
      "lv": "hän maalasi / yliviivasi"
    },
    "imperfektKonjunktiv": {
      "de": "er striche",
      "lv": "hän maalaisi / yliviivaisi"
    },
    "partizipVergangenheit": {
      "de": "gestrichen",
      "lv": "maalattu / yliviivattu"
    }
  },
  {
    "infinitiv": {
      "de": "streiten",
      "lv": "riidellä"
    },
    "praesens": {
      "de": "er streitet",
      "lv": "hän riitelee"
    },
    "imperfektIndikativ": {
      "de": "er stritt",
      "lv": "hän riiteli"
    },
    "imperfektKonjunktiv": {
      "de": "er stritte",
      "lv": "hän riitelisi"
    },
    "partizipVergangenheit": {
      "de": "gestritten",
      "lv": "riidellyt"
    }
  },
  {
    "infinitiv": {
      "de": "tragen",
      "lv": "kantaa"
    },
    "praesens": {
      "de": "er trägt",
      "lv": "hän kantaa"
    },
    "imperfektIndikativ": {
      "de": "er trug",
      "lv": "hän kantoi"
    },
    "imperfektKonjunktiv": {
      "de": "er trüge",
      "lv": "hän kantaisi"
    },
    "partizipVergangenheit": {
      "de": "getragen",
      "lv": "kannettu"
    }
  },
  {
    "infinitiv": {
      "de": "treffen",
      "lv": "tavata"
    },
    "praesens": {
      "de": "er trifft",
      "lv": "hän tapaa"
    },
    "imperfektIndikativ": {
      "de": "er traf",
      "lv": "hän tapasi"
    },
    "imperfektKonjunktiv": {
      "de": "er träfe",
      "lv": "hän tapaisi"
    },
    "partizipVergangenheit": {
      "de": "getroffen",
      "lv": "tavattu"
    }
  },
  {
    "infinitiv": {
      "de": "treiben",
      "lv": "ajaa"
    },
    "praesens": {
      "de": "er treibt",
      "lv": "hän ajaa"
    },
    "imperfektIndikativ": {
      "de": "er trieb",
      "lv": "hän ajoi"
    },
    "imperfektKonjunktiv": {
      "de": "er triebe",
      "lv": "hän ajaisi"
    },
    "partizipVergangenheit": {
      "de": "getrieben",
      "lv": "ajettu"
    }
  },
  {
    "infinitiv": {
      "de": "treten",
      "lv": "astua / kävellä"
    },
    "praesens": {
      "de": "er tritt",
      "lv": "hän astuu / kävelee"
    },
    "imperfektIndikativ": {
      "de": "er trat",
      "lv": "hän astui / käveli"
    },
    "imperfektKonjunktiv": {
      "de": "er träte",
      "lv": "hän astuisi / kävelisi"
    },
    "partizipVergangenheit": {
      "de": "getreten (er ist)",
      "lv": "astunut / kävellyt"
    }
  },
  {
    "infinitiv": {
      "de": "trinken",
      "lv": "juoda"
    },
    "praesens": {
      "de": "er trinkt",
      "lv": "hän juo"
    },
    "imperfektIndikativ": {
      "de": "er trank",
      "lv": "hän joi"
    },
    "imperfektKonjunktiv": {
      "de": "er tränke",
      "lv": "hän joisi"
    },
    "partizipVergangenheit": {
      "de": "getrunken",
      "lv": "juotu"
    }
  },
  {
    "infinitiv": {
      "de": "trügen",
      "lv": "pettää"
    },
    "praesens": {
      "de": "er trögt",
      "lv": "hän pettää"
    },
    "imperfektIndikativ": {
      "de": "er trog",
      "lv": "hän petti"
    },
    "imperfektKonjunktiv": {
      "de": "er tröge",
      "lv": "hän pettäisi"
    },
    "partizipVergangenheit": {
      "de": "getrogen",
      "lv": "petetty"
    }
  },
  {
    "infinitiv": {
      "de": "tun",
      "lv": "tehdä"
    },
    "praesens": {
      "de": "er tut",
      "lv": "hän tekee"
    },
    "imperfektIndikativ": {
      "de": "er tat",
      "lv": "hän teki"
    },
    "imperfektKonjunktiv": {
      "de": "er täte",
      "lv": "hän tekisi"
    },
    "partizipVergangenheit": {
      "de": "getan",
      "lv": "tehty"
    }
  },
  {
    "infinitiv": {
      "de": "verderben",
      "lv": "pilata"
    },
    "praesens": {
      "de": "er verdirbt",
      "lv": "hän pilaa"
    },
    "imperfektIndikativ": {
      "de": "er verdarb",
      "lv": "hän pilasi"
    },
    "imperfektKonjunktiv": {
      "de": "er verdürbe",
      "lv": "hän pilaisi"
    },
    "partizipVergangenheit": {
      "de": "verdorben",
      "lv": "pilattu"
    }
  },
  {
    "infinitiv": {
      "de": "verdrießen",
      "lv": "ärsyttää"
    },
    "praesens": {
      "de": "er verdrießt",
      "lv": "hän ärsyttää"
    },
    "imperfektIndikativ": {
      "de": "er verdross",
      "lv": "hän ärsytti"
    },
    "imperfektKonjunktiv": {
      "de": "er verdrösse",
      "lv": "hän ärsyttäisi"
    },
    "partizipVergangenheit": {
      "de": "verdrossen",
      "lv": "ärsytetty"
    }
  },
  {
    "infinitiv": {
      "de": "vergessen",
      "lv": "unohtaa"
    },
    "praesens": {
      "de": "er vergisst",
      "lv": "hän unohtaa"
    },
    "imperfektIndikativ": {
      "de": "er vergass",
      "lv": "hän unohti"
    },
    "imperfektKonjunktiv": {
      "de": "er vergäße",
      "lv": "hän unohtaisi"
    },
    "partizipVergangenheit": {
      "de": "vergessen",
      "lv": "unohdettu"
    }
  },
  {
    "infinitiv": {
      "de": "verlieren",
      "lv": "kadottaa"
    },
    "praesens": {
      "de": "er verliert",
      "lv": "hän kadottaa"
    },
    "imperfektIndikativ": {
      "de": "er verlor",
      "lv": "hän kadotti"
    },
    "imperfektKonjunktiv": {
      "de": "er verlöre",
      "lv": "hän kadottaisi"
    },
    "partizipVergangenheit": {
      "de": "verloren",
      "lv": "kadotettu"
    }
  },
  {
    "infinitiv": {
      "de": "wachsen",
      "lv": "kasvaa"
    },
    "praesens": {
      "de": "er wächst",
      "lv": "hän kasvaa"
    },
    "imperfektIndikativ": {
      "de": "er wuchs",
      "lv": "hän kasvoi"
    },
    "imperfektKonjunktiv": {
      "de": "er wüchse",
      "lv": "hän kasvaisi"
    },
    "partizipVergangenheit": {
      "de": "gewachsen (er ist)",
      "lv": "kasvanut"
    }
  },
  {
    "infinitiv": {
      "de": "waschen",
      "lv": "pestä"
    },
    "praesens": {
      "de": "er wäscht",
      "lv": "hän pesee"
    },
    "imperfektIndikativ": {
      "de": "er wusch",
      "lv": "hän pesi"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsche",
      "lv": "hän pesisi"
    },
    "partizipVergangenheit": {
      "de": "gewaschen",
      "lv": "pesty"
    }
  },
  {
    "infinitiv": {
      "de": "weben",
      "lv": "kutoa"
    },
    "praesens": {
      "de": "er webt",
      "lv": "hän kutoo"
    },
    "imperfektIndikativ": {
      "de": "wob",
      "lv": "hän kutoi"
    },
    "imperfektKonjunktiv": {
      "de": "wob",
      "lv": "hän kutoisi"
    },
    "partizipVergangenheit": {
      "de": "gewoben",
      "lv": "kudottu"
    }
  },
  {
    "infinitiv": {
      "de": "weichen",
      "lv": "perääntyä"
    },
    "praesens": {
      "de": "er weicht",
      "lv": "hän perääntyy"
    },
    "imperfektIndikativ": {
      "de": "er wich",
      "lv": "hän perääntyi"
    },
    "imperfektKonjunktiv": {
      "de": "er wiche",
      "lv": "hän perääntyisi"
    },
    "partizipVergangenheit": {
      "de": "gewichen (er ist)",
      "lv": "perääntynyt"
    }
  },
  {
    "infinitiv": {
      "de": "weisen",
      "lv": "osoittaa"
    },
    "praesens": {
      "de": "er weist",
      "lv": "hän osoittaa"
    },
    "imperfektIndikativ": {
      "de": "er wies",
      "lv": "hän osoitti"
    },
    "imperfektKonjunktiv": {
      "de": "er wiese",
      "lv": "hän osoittaisi"
    },
    "partizipVergangenheit": {
      "de": "gewiesen",
      "lv": "osoitettu"
    }
  },
  {
    "infinitiv": {
      "de": "wenden",
      "lv": "kääntää / kääntää ympäri"
    },
    "praesens": {
      "de": "er wendet",
      "lv": "hän kääntää / kääntää ympäri"
    },
    "imperfektIndikativ": {
      "de": "er wandte / es wendete",
      "lv": "hän käänsi / käänsi ympäri"
    },
    "imperfektKonjunktiv": {
      "de": "er wendete",
      "lv": "hän kääntäisi / kääntäisi ympäri"
    },
    "partizipVergangenheit": {
      "de": "gewandt / gewendet",
      "lv": "käännetty / käännetty ympäri"
    }
  },
  {
    "infinitiv": {
      "de": "werben",
      "lv": "kosia"
    },
    "praesens": {
      "de": "er wirbt",
      "lv": "hän kosii"
    },
    "imperfektIndikativ": {
      "de": "er warb",
      "lv": "hän kosi"
    },
    "imperfektKonjunktiv": {
      "de": "er würbe",
      "lv": "hän kosisi"
    },
    "partizipVergangenheit": {
      "de": "geworben",
      "lv": "kosittu"
    }
  },
  {
    "infinitiv": {
      "de": "werden",
      "lv": "tulla"
    },
    "praesens": {
      "de": "er wird",
      "lv": "hän tulee"
    },
    "imperfektIndikativ": {
      "de": "wurde",
      "lv": "hän tuli"
    },
    "imperfektKonjunktiv": {
      "de": "wurde",
      "lv": "hän tulisi"
    },
    "partizipVergangenheit": {
      "de": "geworden",
      "lv": "tullut"
    }
  },
  {
    "infinitiv": {
      "de": "werfen",
      "lv": "heittää"
    },
    "praesens": {
      "de": "er wirft",
      "lv": "hän heittää"
    },
    "imperfektIndikativ": {
      "de": "er warf",
      "lv": "hän heitti"
    },
    "imperfektKonjunktiv": {
      "de": "er würfe",
      "lv": "hän heittäisi"
    },
    "partizipVergangenheit": {
      "de": "geworfen",
      "lv": "heitetty"
    }
  },
  {
    "infinitiv": {
      "de": "wiegen",
      "lv": "punnita"
    },
    "praesens": {
      "de": "er wiegt",
      "lv": "hän punnitsee"
    },
    "imperfektIndikativ": {
      "de": "er wog",
      "lv": "hän punnitsi"
    },
    "imperfektKonjunktiv": {
      "de": "er wöge",
      "lv": "hän punnitsisi"
    },
    "partizipVergangenheit": {
      "de": "gewogen",
      "lv": "punnittu"
    }
  },
  {
    "infinitiv": {
      "de": "winden",
      "lv": "punoa"
    },
    "praesens": {
      "de": "er windet",
      "lv": "hän punoo"
    },
    "imperfektIndikativ": {
      "de": "er wand",
      "lv": "hän punoi"
    },
    "imperfektKonjunktiv": {
      "de": "er wände",
      "lv": "hän punoisi"
    },
    "partizipVergangenheit": {
      "de": "gewunden",
      "lv": "punottu"
    }
  },
  {
    "infinitiv": {
      "de": "wissen",
      "lv": "tietää"
    },
    "praesens": {
      "de": "er weiß",
      "lv": "hän tietää"
    },
    "imperfektIndikativ": {
      "de": "er wusste",
      "lv": "hän tiesi"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsste",
      "lv": "hän tietäisi"
    },
    "partizipVergangenheit": {
      "de": "gewusst",
      "lv": "tiedetty"
    }
  },
  {
    "infinitiv": {
      "de": "wollen",
      "lv": "haluta"
    },
    "praesens": {
      "de": "er will",
      "lv": "hän haluaa"
    },
    "imperfektIndikativ": {
      "de": "wollte",
      "lv": "hän halusi"
    },
    "imperfektKonjunktiv": {
      "de": "wollte",
      "lv": "hän haluaisi"
    },
    "partizipVergangenheit": {
      "de": "gewollt",
      "lv": "halunnut"
    }
  },
  {
    "infinitiv": {
      "de": "wringen",
      "lv": "vääntää / puristaa"
    },
    "praesens": {
      "de": "er wringt",
      "lv": "hän vääntää / puristaa"
    },
    "imperfektIndikativ": {
      "de": "wrang",
      "lv": "hän väänsi / puristi"
    },
    "imperfektKonjunktiv": {
      "de": "wrang",
      "lv": "hän vääntäisi / puristaisi"
    },
    "partizipVergangenheit": {
      "de": "gewrungen",
      "lv": "väännetty / puristettu"
    }
  },
  {
    "infinitiv": {
      "de": "zeihen",
      "lv": "syyttää"
    },
    "praesens": {
      "de": "er zeiht",
      "lv": "hän syyttää"
    },
    "imperfektIndikativ": {
      "de": "zieh",
      "lv": "hän syytti"
    },
    "imperfektKonjunktiv": {
      "de": "zieh",
      "lv": "hän syyttäisi"
    },
    "partizipVergangenheit": {
      "de": "geziehen",
      "lv": "syytetty"
    }
  },
  {
    "infinitiv": {
      "de": "ziehen",
      "lv": "vetää"
    },
    "praesens": {
      "de": "er zieht",
      "lv": "hän vetää"
    },
    "imperfektIndikativ": {
      "de": "er zog",
      "lv": "hän veti"
    },
    "imperfektKonjunktiv": {
      "de": "er zöge",
      "lv": "hän vetäisi"
    },
    "partizipVergangenheit": {
      "de": "gezogen",
      "lv": "vedetty"
    }
  },
  {
    "infinitiv": {
      "de": "zwingen",
      "lv": "pakottaa"
    },
    "praesens": {
      "de": "er zwingt",
      "lv": "hän pakottaa"
    },
    "imperfektIndikativ": {
      "de": "er zwang",
      "lv": "hän pakotti"
    },
    "imperfektKonjunktiv": {
      "de": "er zwänge",
      "lv": "hän pakottaisi"
    },
    "partizipVergangenheit": {
      "de": "gezwungen",
      "lv": "pakotettu"
    }
  },
  {
    "infinitiv": {
      "de": "empfangen",
      "lv": "ottaa vastaan"
    },
    "praesens": {
      "de": "er empfängt",
      "lv": "hän ottaa vastaan"
    },
    "imperfektIndikativ": {
      "de": "er empfing",
      "lv": "hän otti vastaan"
    },
    "imperfektKonjunktiv": {
      "de": "er empfinge",
      "lv": "hän ottaisi vastaan"
    },
    "partizipVergangenheit": {
      "de": "empfangen",
      "lv": "otettu vastaan"
    }
  },
  {
    "infinitiv": {
      "de": "erwägen",
      "lv": "harkita"
    },
    "praesens": {
      "de": "er erwägt",
      "lv": "hän harkitsee"
    },
    "imperfektIndikativ": {
      "de": "er erwog",
      "lv": "hän harkitsi"
    },
    "imperfektKonjunktiv": {
      "de": "er erwöge",
      "lv": "hän harkitsisi"
    },
    "partizipVergangenheit": {
      "de": "erwogen",
      "lv": "harkittu"
    }
  },
  {
    "infinitiv": {
      "de": "fechten",
      "lv": "taistella"
    },
    "praesens": {
      "de": "er ficht",
      "lv": "hän taistelee"
    },
    "imperfektIndikativ": {
      "de": "er focht",
      "lv": "hän taisteli"
    },
    "imperfektKonjunktiv": {
      "de": "er föchte",
      "lv": "hän taistelisi"
    },
    "partizipVergangenheit": {
      "de": "gefochten",
      "lv": "taistellut"
    }
  },
  {
    "infinitiv": {
      "de": "flechten",
      "lv": "palmikoida"
    },
    "praesens": {
      "de": "er flicht",
      "lv": "hän palmikoi"
    },
    "imperfektIndikativ": {
      "de": "er flocht",
      "lv": "hän palmikoi"
    },
    "imperfektKonjunktiv": {
      "de": "er flöchte",
      "lv": "hän palmikoisi"
    },
    "partizipVergangenheit": {
      "de": "geflochten",
      "lv": "palmikoitu"
    }
  },
  {
    "infinitiv": {
      "de": "hangen",
      "lv": "riippua"
    },
    "praesens": {
      "de": "er hängt",
      "lv": "hän riippuu"
    },
    "imperfektIndikativ": {
      "de": "er hing",
      "lv": "hän riippui"
    },
    "imperfektKonjunktiv": {
      "de": "er hinge",
      "lv": "hän riippuisi"
    },
    "partizipVergangenheit": {
      "de": "gehangen",
      "lv": "riippunut"
    }
  },
  {
    "infinitiv": {
      "de": "spalten",
      "lv": "halkaista"
    },
    "praesens": {
      "de": "er spaltet",
      "lv": "hän halkaisee"
    },
    "imperfektIndikativ": {
      "de": "er spaltete",
      "lv": "hän halkaisi"
    },
    "imperfektKonjunktiv": {
      "de": "er spaltete",
      "lv": "hän halkaisisi"
    },
    "partizipVergangenheit": {
      "de": "gespalten",
      "lv": "halkaistu"
    }
  },
  {
    "infinitiv": {
      "de": "verzeihen",
      "lv": "antaa anteeksi"
    },
    "praesens": {
      "de": "er verzeiht",
      "lv": "hän antaa anteeksi"
    },
    "imperfektIndikativ": {
      "de": "er verzieh",
      "lv": "hän antoi anteeksi"
    },
    "imperfektKonjunktiv": {
      "de": "er verziehe",
      "lv": "hän antaisi anteeksi"
    },
    "partizipVergangenheit": {
      "de": "verziehen",
      "lv": "annettu anteeksi"
    }
  }
];

window.VERB_ENTRIES = VERB_ENTRIES;

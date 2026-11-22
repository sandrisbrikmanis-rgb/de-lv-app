const VERB_ENTRIES = [
  {
    "infinitiv": {
      "de": "backen",
      "lv": "пече • испече"
    },
    "praesens": {
      "de": "er bäckt",
      "lv": "тој пече"
    },
    "imperfektIndikativ": {
      "de": "er buk",
      "lv": "тој испече"
    },
    "imperfektKonjunktiv": {
      "de": "er büke",
      "lv": "тој би печел"
    },
    "partizipVergangenheit": {
      "de": "gebacken",
      "lv": "испечен"
    }
  },
  {
    "infinitiv": {
      "de": "befehlen",
      "lv": "наредува • нареди"
    },
    "praesens": {
      "de": "er befiehlt",
      "lv": "тој наредува"
    },
    "imperfektIndikativ": {
      "de": "er befahl",
      "lv": "тој нареди"
    },
    "imperfektKonjunktiv": {
      "de": "er beföhle",
      "lv": "тој би наредувал"
    },
    "partizipVergangenheit": {
      "de": "befohlen",
      "lv": "нареден"
    }
  },
  {
    "infinitiv": {
      "de": "beginnen",
      "lv": "почнува • почне"
    },
    "praesens": {
      "de": "er beginnt",
      "lv": "тој почнува"
    },
    "imperfektIndikativ": {
      "de": "er begann",
      "lv": "тој почна"
    },
    "imperfektKonjunktiv": {
      "de": "er begönne / er begänne",
      "lv": "тој би почнувал"
    },
    "partizipVergangenheit": {
      "de": "begonnen",
      "lv": "почнат"
    }
  },
  {
    "infinitiv": {
      "de": "beißen",
      "lv": "гризе • гризне"
    },
    "praesens": {
      "de": "er beißt",
      "lv": "тој гризе"
    },
    "imperfektIndikativ": {
      "de": "er biss",
      "lv": "тој гризна"
    },
    "imperfektKonjunktiv": {
      "de": "er bisse",
      "lv": "тој би гризел"
    },
    "partizipVergangenheit": {
      "de": "gebissen",
      "lv": "гризнат"
    }
  },
  {
    "infinitiv": {
      "de": "bergen",
      "lv": "спасува • спаси / крие • скрие"
    },
    "praesens": {
      "de": "er birgt",
      "lv": "тој спасува / крие"
    },
    "imperfektIndikativ": {
      "de": "er barg",
      "lv": "тој спаси / скри"
    },
    "imperfektKonjunktiv": {
      "de": "er bürge / er bärge",
      "lv": "тој би спасувал / криел"
    },
    "partizipVergangenheit": {
      "de": "geborgen",
      "lv": "спасен / скриен"
    }
  },
  {
    "infinitiv": {
      "de": "bersten",
      "lv": "пука • пукне"
    },
    "praesens": {
      "de": "er birst",
      "lv": "тој пука"
    },
    "imperfektIndikativ": {
      "de": "er barst / er borst",
      "lv": "тој пукна"
    },
    "imperfektKonjunktiv": {
      "de": "er bärste / er börste",
      "lv": "тој би пукал"
    },
    "partizipVergangenheit": {
      "de": "geborsten (er ist)",
      "lv": "пукнал"
    }
  },
  {
    "infinitiv": {
      "de": "bewegen",
      "lv": "поттикнува • поттикне"
    },
    "praesens": {
      "de": "er bewegt",
      "lv": "тој поттикнува"
    },
    "imperfektIndikativ": {
      "de": "er bewog",
      "lv": "тој поттикна"
    },
    "imperfektKonjunktiv": {
      "de": "er bewöge",
      "lv": "тој би поттикнувал"
    },
    "partizipVergangenheit": {
      "de": "bewogen",
      "lv": "поттикнат"
    }
  },
  {
    "infinitiv": {
      "de": "biegen",
      "lv": "свиткува • свитка"
    },
    "praesens": {
      "de": "er biegt",
      "lv": "тој свиткува"
    },
    "imperfektIndikativ": {
      "de": "er bog",
      "lv": "тој свитка"
    },
    "imperfektKonjunktiv": {
      "de": "er böge",
      "lv": "тој би свиткувал"
    },
    "partizipVergangenheit": {
      "de": "gebogen",
      "lv": "свиткан"
    }
  },
  {
    "infinitiv": {
      "de": "bieten",
      "lv": "нуди • понуди"
    },
    "praesens": {
      "de": "er bietet",
      "lv": "тој нуди"
    },
    "imperfektIndikativ": {
      "de": "er bot",
      "lv": "тој понуди"
    },
    "imperfektKonjunktiv": {
      "de": "er böte",
      "lv": "тој би нудел"
    },
    "partizipVergangenheit": {
      "de": "geboten",
      "lv": "понуден"
    }
  },
  {
    "infinitiv": {
      "de": "binden",
      "lv": "врзува • врзе"
    },
    "praesens": {
      "de": "er bindet",
      "lv": "тој врзува"
    },
    "imperfektIndikativ": {
      "de": "er band",
      "lv": "тој врза"
    },
    "imperfektKonjunktiv": {
      "de": "er bände",
      "lv": "тој би врзувал"
    },
    "partizipVergangenheit": {
      "de": "gebunden",
      "lv": "врзан"
    }
  },
  {
    "infinitiv": {
      "de": "bitten",
      "lv": "моли • замоли"
    },
    "praesens": {
      "de": "er bittet",
      "lv": "тој моли"
    },
    "imperfektIndikativ": {
      "de": "er bat",
      "lv": "тој замоли"
    },
    "imperfektKonjunktiv": {
      "de": "er bäte",
      "lv": "тој би молел"
    },
    "partizipVergangenheit": {
      "de": "gebeten",
      "lv": "замолен"
    }
  },
  {
    "infinitiv": {
      "de": "blasen",
      "lv": "дува"
    },
    "praesens": {
      "de": "er bläst",
      "lv": "тој дува"
    },
    "imperfektIndikativ": {
      "de": "er blies",
      "lv": "тој дуваше"
    },
    "imperfektKonjunktiv": {
      "de": "er bliese",
      "lv": "тој би дувал"
    },
    "partizipVergangenheit": {
      "de": "geblasen",
      "lv": "дуван"
    }
  },
  {
    "infinitiv": {
      "de": "gären",
      "lv": "ферментира"
    },
    "praesens": {
      "de": "es gärt",
      "lv": "тоа ферментира"
    },
    "imperfektIndikativ": {
      "de": "es gor / es gärte",
      "lv": "тоа ферментираше"
    },
    "imperfektKonjunktiv": {
      "de": "es göre / es gärte",
      "lv": "тоа би ферментирало"
    },
    "partizipVergangenheit": {
      "de": "gegoren / gegärt",
      "lv": "ферментирал"
    }
  },
  {
    "infinitiv": {
      "de": "gebären",
      "lv": "раѓа • роди"
    },
    "praesens": {
      "de": "sie gebiert",
      "lv": "таа раѓа"
    },
    "imperfektIndikativ": {
      "de": "sie gebar",
      "lv": "таа роди"
    },
    "imperfektKonjunktiv": {
      "de": "sie gebäre",
      "lv": "таа би раѓала"
    },
    "partizipVergangenheit": {
      "de": "geboren",
      "lv": "роден"
    }
  },
  {
    "infinitiv": {
      "de": "gelingen",
      "lv": "успева • успее"
    },
    "praesens": {
      "de": "es gelingt",
      "lv": "тоа успева"
    },
    "imperfektIndikativ": {
      "de": "es gelang",
      "lv": "тоа успеа"
    },
    "imperfektKonjunktiv": {
      "de": "es gelänge",
      "lv": "тоа би успевало"
    },
    "partizipVergangenheit": {
      "de": "gelungen (es ist)",
      "lv": "успеал"
    }
  },
  {
    "infinitiv": {
      "de": "gelten",
      "lv": "важи"
    },
    "praesens": {
      "de": "er gilt",
      "lv": "тој важи"
    },
    "imperfektIndikativ": {
      "de": "er galt",
      "lv": "тој важеше"
    },
    "imperfektKonjunktiv": {
      "de": "er gölte / es gälte",
      "lv": "тој би важел"
    },
    "partizipVergangenheit": {
      "de": "gegolten",
      "lv": "важел"
    }
  },
  {
    "infinitiv": {
      "de": "genesen",
      "lv": "оздравува • оздрави"
    },
    "praesens": {
      "de": "er genest",
      "lv": "тој оздравува"
    },
    "imperfektIndikativ": {
      "de": "er genas",
      "lv": "тој оздраве"
    },
    "imperfektKonjunktiv": {
      "de": "er genäse",
      "lv": "тој би оздравувал"
    },
    "partizipVergangenheit": {
      "de": "genesen (er ist)",
      "lv": "оздравел"
    }
  },
  {
    "infinitiv": {
      "de": "genießen",
      "lv": "ужива"
    },
    "praesens": {
      "de": "er genießt",
      "lv": "тој ужива"
    },
    "imperfektIndikativ": {
      "de": "er genoss",
      "lv": "тој уживаше"
    },
    "imperfektKonjunktiv": {
      "de": "er genösse",
      "lv": "тој би уживал"
    },
    "partizipVergangenheit": {
      "de": "genossen",
      "lv": "уживал"
    }
  },
  {
    "infinitiv": {
      "de": "geschehen",
      "lv": "се случува • се случи"
    },
    "praesens": {
      "de": "es geschieht",
      "lv": "тоа се случува"
    },
    "imperfektIndikativ": {
      "de": "es geschah",
      "lv": "тоа се случи"
    },
    "imperfektKonjunktiv": {
      "de": "es geschähe",
      "lv": "тоа би се случувало"
    },
    "partizipVergangenheit": {
      "de": "geschehen (es ist)",
      "lv": "се случил"
    }
  },
  {
    "infinitiv": {
      "de": "gießen",
      "lv": "истура • истури"
    },
    "praesens": {
      "de": "er gießt",
      "lv": "тој истура"
    },
    "imperfektIndikativ": {
      "de": "er goss",
      "lv": "тој истури"
    },
    "imperfektKonjunktiv": {
      "de": "er gösse",
      "lv": "тој би истурал"
    },
    "partizipVergangenheit": {
      "de": "gegossen",
      "lv": "истурен"
    }
  },
  {
    "infinitiv": {
      "de": "gleichen",
      "lv": "личи"
    },
    "praesens": {
      "de": "er gleicht",
      "lv": "тој личи"
    },
    "imperfektIndikativ": {
      "de": "er glich",
      "lv": "тој личеше"
    },
    "imperfektKonjunktiv": {
      "de": "er gliche",
      "lv": "тој би личел"
    },
    "partizipVergangenheit": {
      "de": "geglichen",
      "lv": "личел"
    }
  },
  {
    "infinitiv": {
      "de": "gleiten",
      "lv": "се лизга"
    },
    "praesens": {
      "de": "er gleitet",
      "lv": "тој се лизга"
    },
    "imperfektIndikativ": {
      "de": "er glitt",
      "lv": "тој се лизгаше"
    },
    "imperfektKonjunktiv": {
      "de": "er glitte",
      "lv": "тој би се лизгал"
    },
    "partizipVergangenheit": {
      "de": "geglitten (er ist)",
      "lv": "се лизгал"
    }
  },
  {
    "infinitiv": {
      "de": "glimmen",
      "lv": "тлее"
    },
    "praesens": {
      "de": "er glimmt",
      "lv": "тој тлее"
    },
    "imperfektIndikativ": {
      "de": "er glimmte / glomm",
      "lv": "тој тлееше"
    },
    "imperfektKonjunktiv": {
      "de": "er glimmte",
      "lv": "тој би тлеел"
    },
    "partizipVergangenheit": {
      "de": "geglimmt / geglommen",
      "lv": "тлеел"
    }
  },
  {
    "infinitiv": {
      "de": "graben",
      "lv": "копа • ископа"
    },
    "praesens": {
      "de": "er gräbt",
      "lv": "тој копа"
    },
    "imperfektIndikativ": {
      "de": "er grub",
      "lv": "тој ископа"
    },
    "imperfektKonjunktiv": {
      "de": "er grübe",
      "lv": "тој би копал"
    },
    "partizipVergangenheit": {
      "de": "gegraben",
      "lv": "ископан"
    }
  },
  {
    "infinitiv": {
      "de": "greifen",
      "lv": "зграпчува • зграпчи"
    },
    "praesens": {
      "de": "er greift",
      "lv": "тој зграпчува"
    },
    "imperfektIndikativ": {
      "de": "er griff",
      "lv": "тој зграпчи"
    },
    "imperfektKonjunktiv": {
      "de": "er griffe",
      "lv": "тој би зграпчувал"
    },
    "partizipVergangenheit": {
      "de": "gegriffen",
      "lv": "зграпчен"
    }
  },
  {
    "infinitiv": {
      "de": "hauen",
      "lv": "сече • исече"
    },
    "praesens": {
      "de": "er haut",
      "lv": "тој сече"
    },
    "imperfektIndikativ": {
      "de": "er hieb",
      "lv": "тој исече"
    },
    "imperfektKonjunktiv": {
      "de": "er hiebe",
      "lv": "тој би сечел"
    },
    "partizipVergangenheit": {
      "de": "gehauen",
      "lv": "исечен"
    }
  },
  {
    "infinitiv": {
      "de": "heben",
      "lv": "подигнува • подигне"
    },
    "praesens": {
      "de": "er hebt",
      "lv": "тој подигнува"
    },
    "imperfektIndikativ": {
      "de": "er hob",
      "lv": "тој подигна"
    },
    "imperfektKonjunktiv": {
      "de": "er höbe",
      "lv": "тој би подигнувал"
    },
    "partizipVergangenheit": {
      "de": "gehoben",
      "lv": "подигнат"
    }
  },
  {
    "infinitiv": {
      "de": "kennen",
      "lv": "познава"
    },
    "praesens": {
      "de": "er kennt",
      "lv": "тој познава"
    },
    "imperfektIndikativ": {
      "de": "er kannte",
      "lv": "тој познаваше"
    },
    "imperfektKonjunktiv": {
      "de": "er kennte",
      "lv": "тој би познавал"
    },
    "partizipVergangenheit": {
      "de": "gekannt",
      "lv": "познавал"
    }
  },
  {
    "infinitiv": {
      "de": "klingen",
      "lv": "звучи"
    },
    "praesens": {
      "de": "er klingt",
      "lv": "тој звучи"
    },
    "imperfektIndikativ": {
      "de": "er klang",
      "lv": "тој звучеше"
    },
    "imperfektKonjunktiv": {
      "de": "er klänge",
      "lv": "тој би звучел"
    },
    "partizipVergangenheit": {
      "de": "geklungen",
      "lv": "звучел"
    }
  },
  {
    "infinitiv": {
      "de": "kneifen",
      "lv": "штипе • штипне"
    },
    "praesens": {
      "de": "er kneift",
      "lv": "тој штипе"
    },
    "imperfektIndikativ": {
      "de": "er kniff",
      "lv": "тој штипна"
    },
    "imperfektKonjunktiv": {
      "de": "er kniffe",
      "lv": "тој би штипел"
    },
    "partizipVergangenheit": {
      "de": "gekniffen",
      "lv": "штипнат"
    }
  },
  {
    "infinitiv": {
      "de": "bleiben",
      "lv": "останува • остане"
    },
    "praesens": {
      "de": "er bleibt",
      "lv": "тој останува"
    },
    "imperfektIndikativ": {
      "de": "er blieb",
      "lv": "тој остана"
    },
    "imperfektKonjunktiv": {
      "de": "er bliebe",
      "lv": "тој би останувал"
    },
    "partizipVergangenheit": {
      "de": "geblieben (er ist)",
      "lv": "останал"
    }
  },
  {
    "infinitiv": {
      "de": "bleichen",
      "lv": "бледнее • избледнее"
    },
    "praesens": {
      "de": "er bleicht",
      "lv": "тој бледнее"
    },
    "imperfektIndikativ": {
      "de": "er bleichte / er blich",
      "lv": "тој избледнеа"
    },
    "imperfektKonjunktiv": {
      "de": "er bleichte / er bliche",
      "lv": "тој би бледнеел"
    },
    "partizipVergangenheit": {
      "de": "geblichen",
      "lv": "избледнеал"
    }
  },
  {
    "infinitiv": {
      "de": "braten",
      "lv": "пржи • испржи"
    },
    "praesens": {
      "de": "er brät",
      "lv": "тој пржи"
    },
    "imperfektIndikativ": {
      "de": "er briet",
      "lv": "тој испржи"
    },
    "imperfektKonjunktiv": {
      "de": "er briete",
      "lv": "тој би пржел"
    },
    "partizipVergangenheit": {
      "de": "gebraten",
      "lv": "испржен"
    }
  },
  {
    "infinitiv": {
      "de": "brechen",
      "lv": "крши • скрши"
    },
    "praesens": {
      "de": "er bricht",
      "lv": "тој крши"
    },
    "imperfektIndikativ": {
      "de": "er brach",
      "lv": "тој скрши"
    },
    "imperfektKonjunktiv": {
      "de": "er bräche",
      "lv": "тој би кршел"
    },
    "partizipVergangenheit": {
      "de": "gebrochen",
      "lv": "скршен"
    }
  },
  {
    "infinitiv": {
      "de": "brennen",
      "lv": "гори"
    },
    "praesens": {
      "de": "er brennt",
      "lv": "тој гори"
    },
    "imperfektIndikativ": {
      "de": "er brannte",
      "lv": "тој гореше"
    },
    "imperfektKonjunktiv": {
      "de": "er brennte",
      "lv": "тој би горел"
    },
    "partizipVergangenheit": {
      "de": "gebrannt",
      "lv": "горел"
    }
  },
  {
    "infinitiv": {
      "de": "bringen",
      "lv": "донесува • донесе"
    },
    "praesens": {
      "de": "er bringt",
      "lv": "тој донесува"
    },
    "imperfektIndikativ": {
      "de": "er brachte",
      "lv": "тој донесе"
    },
    "imperfektKonjunktiv": {
      "de": "er brächte",
      "lv": "тој би донесувал"
    },
    "partizipVergangenheit": {
      "de": "gebracht",
      "lv": "донесен"
    }
  },
  {
    "infinitiv": {
      "de": "denken",
      "lv": "мисли"
    },
    "praesens": {
      "de": "er denkt",
      "lv": "тој мисли"
    },
    "imperfektIndikativ": {
      "de": "er dachte",
      "lv": "тој мислеше"
    },
    "imperfektKonjunktiv": {
      "de": "er dächte",
      "lv": "тој би мислел"
    },
    "partizipVergangenheit": {
      "de": "gedacht",
      "lv": "мислел"
    }
  },
  {
    "infinitiv": {
      "de": "dingen",
      "lv": "најмува • најми / се договара • се договори"
    },
    "praesens": {
      "de": "er dingt",
      "lv": "тој најмува / се договара"
    },
    "imperfektIndikativ": {
      "de": "er dingte",
      "lv": "тој најми / се договори"
    },
    "imperfektKonjunktiv": {
      "de": "er dingte",
      "lv": "тој би најмувал / би се договарал"
    },
    "partizipVergangenheit": {
      "de": "gedungen",
      "lv": "најмен / се договорил"
    }
  },
  {
    "infinitiv": {
      "de": "dreschen",
      "lv": "врши • оврши"
    },
    "praesens": {
      "de": "er drischt",
      "lv": "тој врши"
    },
    "imperfektIndikativ": {
      "de": "er drasch / er drosch",
      "lv": "тој оврши"
    },
    "imperfektKonjunktiv": {
      "de": "er dräsche / er drösche",
      "lv": "тој би вршел"
    },
    "partizipVergangenheit": {
      "de": "gedroschen",
      "lv": "овршен"
    }
  },
  {
    "infinitiv": {
      "de": "dringen",
      "lv": "продира • продре"
    },
    "praesens": {
      "de": "er dringt",
      "lv": "тој продира"
    },
    "imperfektIndikativ": {
      "de": "er drang",
      "lv": "тој продре"
    },
    "imperfektKonjunktiv": {
      "de": "er dränge",
      "lv": "тој би продирал"
    },
    "partizipVergangenheit": {
      "de": "gedrungen (er ist)",
      "lv": "продрел"
    }
  },
  {
    "infinitiv": {
      "de": "dünken",
      "lv": "се чини"
    },
    "praesens": {
      "de": "es dünkt",
      "lv": "тоа се чини"
    },
    "imperfektIndikativ": {
      "de": "es dünkte / es deuchte",
      "lv": "тоа се чинеше"
    },
    "imperfektKonjunktiv": {
      "de": "es dünkte / es deuchte",
      "lv": "тоа би се чинело"
    },
    "partizipVergangenheit": {
      "de": "gedünkt",
      "lv": "се чинел"
    }
  },
  {
    "infinitiv": {
      "de": "dürfen",
      "lv": "смее"
    },
    "praesens": {
      "de": "er darf",
      "lv": "тој смее"
    },
    "imperfektIndikativ": {
      "de": "er durfte",
      "lv": "тој смееше"
    },
    "imperfektKonjunktiv": {
      "de": "er dürfte",
      "lv": "тој би смеел"
    },
    "partizipVergangenheit": {
      "de": "gedurft",
      "lv": "смеел"
    }
  },
  {
    "infinitiv": {
      "de": "empfehlen",
      "lv": "препорачува • препорача"
    },
    "praesens": {
      "de": "er empfiehlt",
      "lv": "тој препорачува"
    },
    "imperfektIndikativ": {
      "de": "er empfahl",
      "lv": "тој препорача"
    },
    "imperfektKonjunktiv": {
      "de": "er empfähle / er empföhle",
      "lv": "тој би препорачувал"
    },
    "partizipVergangenheit": {
      "de": "empfohlen",
      "lv": "препорачан"
    }
  },
  {
    "infinitiv": {
      "de": "empfinden",
      "lv": "чувствува • почувствува"
    },
    "praesens": {
      "de": "er empfindet",
      "lv": "тој чувствува"
    },
    "imperfektIndikativ": {
      "de": "er empfand",
      "lv": "тој почувствува"
    },
    "imperfektKonjunktiv": {
      "de": "er empfände",
      "lv": "тој би чувствувал"
    },
    "partizipVergangenheit": {
      "de": "empfunden",
      "lv": "почувствуван"
    }
  },
  {
    "infinitiv": {
      "de": "erlöschen",
      "lv": "гасне • згасне"
    },
    "praesens": {
      "de": "er erlischt",
      "lv": "тој гасне"
    },
    "imperfektIndikativ": {
      "de": "er erlosch",
      "lv": "тој згасна"
    },
    "imperfektKonjunktiv": {
      "de": "er erlösche",
      "lv": "тој би гаснел"
    },
    "partizipVergangenheit": {
      "de": "erloschen (er ist)",
      "lv": "згаснал"
    }
  },
  {
    "infinitiv": {
      "de": "erschrecken",
      "lv": "се плаши • се исплаши"
    },
    "praesens": {
      "de": "er erschrickt",
      "lv": "тој се плаши"
    },
    "imperfektIndikativ": {
      "de": "er erschrak",
      "lv": "тој се исплаши"
    },
    "imperfektKonjunktiv": {
      "de": "er erschräke",
      "lv": "тој би се плашел"
    },
    "partizipVergangenheit": {
      "de": "erschrocken (er ist)",
      "lv": "се исплашил"
    }
  },
  {
    "infinitiv": {
      "de": "essen",
      "lv": "јаде • изеде"
    },
    "praesens": {
      "de": "er isst",
      "lv": "тој јаде"
    },
    "imperfektIndikativ": {
      "de": "er aß",
      "lv": "тој изеде"
    },
    "imperfektKonjunktiv": {
      "de": "er äße",
      "lv": "тој би јадел"
    },
    "partizipVergangenheit": {
      "de": "gegessen",
      "lv": "изеден"
    }
  },
  {
    "infinitiv": {
      "de": "fahren",
      "lv": "патува"
    },
    "praesens": {
      "de": "er fährt",
      "lv": "тој патува"
    },
    "imperfektIndikativ": {
      "de": "er fuhr",
      "lv": "тој патуваше"
    },
    "imperfektKonjunktiv": {
      "de": "er führe",
      "lv": "тој би патувал"
    },
    "partizipVergangenheit": {
      "de": "gefahren (er ist)",
      "lv": "патувал"
    }
  },
  {
    "infinitiv": {
      "de": "fallen",
      "lv": "паѓа • падне"
    },
    "praesens": {
      "de": "er fällt",
      "lv": "тој паѓа"
    },
    "imperfektIndikativ": {
      "de": "er fiel",
      "lv": "тој падна"
    },
    "imperfektKonjunktiv": {
      "de": "er fiele",
      "lv": "тој би паѓал"
    },
    "partizipVergangenheit": {
      "de": "gefallen (er ist)",
      "lv": "паднал"
    }
  },
  {
    "infinitiv": {
      "de": "fangen",
      "lv": "фаќа • фати"
    },
    "praesens": {
      "de": "er fängt",
      "lv": "тој фаќа"
    },
    "imperfektIndikativ": {
      "de": "er fing",
      "lv": "тој фати"
    },
    "imperfektKonjunktiv": {
      "de": "er finge",
      "lv": "тој би фаќал"
    },
    "partizipVergangenheit": {
      "de": "gefangen",
      "lv": "фатен"
    }
  },
  {
    "infinitiv": {
      "de": "finden",
      "lv": "наоѓа • најде"
    },
    "praesens": {
      "de": "er findet",
      "lv": "тој наоѓа"
    },
    "imperfektIndikativ": {
      "de": "er fand",
      "lv": "тој најде"
    },
    "imperfektKonjunktiv": {
      "de": "er fände",
      "lv": "тој би наоѓал"
    },
    "partizipVergangenheit": {
      "de": "gefunden",
      "lv": "најден"
    }
  },
  {
    "infinitiv": {
      "de": "fliegen",
      "lv": "лета"
    },
    "praesens": {
      "de": "er fliegt",
      "lv": "тој лета"
    },
    "imperfektIndikativ": {
      "de": "er flog",
      "lv": "тој леташе"
    },
    "imperfektKonjunktiv": {
      "de": "er flöge",
      "lv": "тој би летал"
    },
    "partizipVergangenheit": {
      "de": "geflogen (er ist)",
      "lv": "летал"
    }
  },
  {
    "infinitiv": {
      "de": "fliehen",
      "lv": "бега • побегне"
    },
    "praesens": {
      "de": "er flieht",
      "lv": "тој бега"
    },
    "imperfektIndikativ": {
      "de": "er floh",
      "lv": "тој побегна"
    },
    "imperfektKonjunktiv": {
      "de": "er flöhe",
      "lv": "тој би бегал"
    },
    "partizipVergangenheit": {
      "de": "geflohen (er ist)",
      "lv": "побегнал"
    }
  },
  {
    "infinitiv": {
      "de": "fließen",
      "lv": "тече"
    },
    "praesens": {
      "de": "er fließt",
      "lv": "тој тече"
    },
    "imperfektIndikativ": {
      "de": "er floss",
      "lv": "тој течеше"
    },
    "imperfektKonjunktiv": {
      "de": "er flösse",
      "lv": "тој би течел"
    },
    "partizipVergangenheit": {
      "de": "geflossen (er ist)",
      "lv": "течел"
    }
  },
  {
    "infinitiv": {
      "de": "fressen",
      "lv": "јаде • изеде / голта • проголта"
    },
    "praesens": {
      "de": "er frisst",
      "lv": "тој јаде / голта"
    },
    "imperfektIndikativ": {
      "de": "er fraß",
      "lv": "тој изеде / проголта"
    },
    "imperfektKonjunktiv": {
      "de": "er fräße",
      "lv": "тој би јадел / голтал"
    },
    "partizipVergangenheit": {
      "de": "gefressen",
      "lv": "изеден / проголтан"
    }
  },
  {
    "infinitiv": {
      "de": "frieren",
      "lv": "мрзне • измрзне"
    },
    "praesens": {
      "de": "er friert",
      "lv": "тој мрзне"
    },
    "imperfektIndikativ": {
      "de": "er fror",
      "lv": "тој измрзна"
    },
    "imperfektKonjunktiv": {
      "de": "er fröre",
      "lv": "тој би мрзнел"
    },
    "partizipVergangenheit": {
      "de": "gefroren",
      "lv": "измрзнал"
    }
  },
  {
    "infinitiv": {
      "de": "geben",
      "lv": "дава • даде"
    },
    "praesens": {
      "de": "er gibt",
      "lv": "тој дава"
    },
    "imperfektIndikativ": {
      "de": "er gab",
      "lv": "тој даде"
    },
    "imperfektKonjunktiv": {
      "de": "er gäbe",
      "lv": "тој би давал"
    },
    "partizipVergangenheit": {
      "de": "gegeben",
      "lv": "даден"
    }
  },
  {
    "infinitiv": {
      "de": "gedeihen",
      "lv": "вирее"
    },
    "praesens": {
      "de": "er gedeiht",
      "lv": "тој вирее"
    },
    "imperfektIndikativ": {
      "de": "er gedieh",
      "lv": "тој вирееше"
    },
    "imperfektKonjunktiv": {
      "de": "er gediehe",
      "lv": "тој би виреел"
    },
    "partizipVergangenheit": {
      "de": "gediehen (er ist)",
      "lv": "виреел"
    }
  },
  {
    "infinitiv": {
      "de": "gehen",
      "lv": "оди"
    },
    "praesens": {
      "de": "er geht",
      "lv": "тој оди"
    },
    "imperfektIndikativ": {
      "de": "er ging",
      "lv": "тој одеше"
    },
    "imperfektKonjunktiv": {
      "de": "er ginge",
      "lv": "тој би одел"
    },
    "partizipVergangenheit": {
      "de": "gegangen (er ist)",
      "lv": "одел"
    }
  },
  {
    "infinitiv": {
      "de": "gewinnen",
      "lv": "добива • добие"
    },
    "praesens": {
      "de": "er gewinnt",
      "lv": "тој добива"
    },
    "imperfektIndikativ": {
      "de": "er gewann",
      "lv": "тој доби"
    },
    "imperfektKonjunktiv": {
      "de": "er gewönne / er gewänne",
      "lv": "тој би добивал"
    },
    "partizipVergangenheit": {
      "de": "gewonnen",
      "lv": "добиен"
    }
  },
  {
    "infinitiv": {
      "de": "haben",
      "lv": "има"
    },
    "praesens": {
      "de": "er hat",
      "lv": "тој има"
    },
    "imperfektIndikativ": {
      "de": "er hatte",
      "lv": "тој имаше"
    },
    "imperfektKonjunktiv": {
      "de": "er hätte",
      "lv": "тој би имал"
    },
    "partizipVergangenheit": {
      "de": "gehabt",
      "lv": "имал"
    }
  },
  {
    "infinitiv": {
      "de": "halten",
      "lv": "држи"
    },
    "praesens": {
      "de": "er hält",
      "lv": "тој држи"
    },
    "imperfektIndikativ": {
      "de": "er hielt",
      "lv": "тој држеше"
    },
    "imperfektKonjunktiv": {
      "de": "er hielte",
      "lv": "тој би држел"
    },
    "partizipVergangenheit": {
      "de": "gehalten",
      "lv": "држен"
    }
  },
  {
    "infinitiv": {
      "de": "heißen",
      "lv": "вика / се вика"
    },
    "praesens": {
      "de": "er heißt",
      "lv": "тој вика / се вика"
    },
    "imperfektIndikativ": {
      "de": "er hieß",
      "lv": "тој викаше / се викаше"
    },
    "imperfektKonjunktiv": {
      "de": "er hieße",
      "lv": "тој би викал / би се викал"
    },
    "partizipVergangenheit": {
      "de": "geheißen",
      "lv": "викан / се викал"
    }
  },
  {
    "infinitiv": {
      "de": "helfen",
      "lv": "помага • помогне"
    },
    "praesens": {
      "de": "er hilft",
      "lv": "тој помага"
    },
    "imperfektIndikativ": {
      "de": "er half",
      "lv": "тој помогна"
    },
    "imperfektKonjunktiv": {
      "de": "er hülfe / er hälfe",
      "lv": "тој би помагал"
    },
    "partizipVergangenheit": {
      "de": "geholfen",
      "lv": "помогнал"
    }
  },
  {
    "infinitiv": {
      "de": "kommen",
      "lv": "доаѓа • дојде"
    },
    "praesens": {
      "de": "er kommt",
      "lv": "тој доаѓа"
    },
    "imperfektIndikativ": {
      "de": "er kam",
      "lv": "тој дојде"
    },
    "imperfektKonjunktiv": {
      "de": "er käme",
      "lv": "тој би доаѓал"
    },
    "partizipVergangenheit": {
      "de": "gekommen (er ist)",
      "lv": "дошол"
    }
  },
  {
    "infinitiv": {
      "de": "können",
      "lv": "може"
    },
    "praesens": {
      "de": "er kann",
      "lv": "тој може"
    },
    "imperfektIndikativ": {
      "de": "er konnte",
      "lv": "тој можеше"
    },
    "imperfektKonjunktiv": {
      "de": "er könnte",
      "lv": "тој би можел"
    },
    "partizipVergangenheit": {
      "de": "gekonnt",
      "lv": "можел"
    }
  },
  {
    "infinitiv": {
      "de": "kriechen",
      "lv": "лази"
    },
    "praesens": {
      "de": "er kriecht",
      "lv": "тој лази"
    },
    "imperfektIndikativ": {
      "de": "er kroch",
      "lv": "тој лазеше"
    },
    "imperfektKonjunktiv": {
      "de": "er kröche",
      "lv": "тој би лазел"
    },
    "partizipVergangenheit": {
      "de": "gekrochen (er ist)",
      "lv": "лазел"
    }
  },
  {
    "infinitiv": {
      "de": "laden",
      "lv": "товари • натовари / кани • покани"
    },
    "praesens": {
      "de": "er lädt",
      "lv": "тој товари / кани"
    },
    "imperfektIndikativ": {
      "de": "er lud",
      "lv": "тој натовари / покани"
    },
    "imperfektKonjunktiv": {
      "de": "er lüde",
      "lv": "тој би товарел / канел"
    },
    "partizipVergangenheit": {
      "de": "geladen",
      "lv": "натоварен / поканет"
    }
  },
  {
    "infinitiv": {
      "de": "lassen",
      "lv": "тера • натера / дозволува • дозволи"
    },
    "praesens": {
      "de": "er lässt",
      "lv": "тој тера / дозволува"
    },
    "imperfektIndikativ": {
      "de": "er ließ",
      "lv": "тој натера / дозволи"
    },
    "imperfektKonjunktiv": {
      "de": "er ließe",
      "lv": "тој би терал / дозволувал"
    },
    "partizipVergangenheit": {
      "de": "gelassen",
      "lv": "натеран / дозволен"
    }
  },
  {
    "infinitiv": {
      "de": "laufen",
      "lv": "трча"
    },
    "praesens": {
      "de": "er läuft",
      "lv": "тој трча"
    },
    "imperfektIndikativ": {
      "de": "er lief",
      "lv": "тој трчаше"
    },
    "imperfektKonjunktiv": {
      "de": "er liefe",
      "lv": "тој би трчал"
    },
    "partizipVergangenheit": {
      "de": "gelaufen (er ist)",
      "lv": "трчал"
    }
  },
  {
    "infinitiv": {
      "de": "leiden",
      "lv": "страда"
    },
    "praesens": {
      "de": "er leidet",
      "lv": "тој страда"
    },
    "imperfektIndikativ": {
      "de": "er litt",
      "lv": "тој страдаше"
    },
    "imperfektKonjunktiv": {
      "de": "er litte",
      "lv": "тој би страдал"
    },
    "partizipVergangenheit": {
      "de": "gelitten",
      "lv": "страдал"
    }
  },
  {
    "infinitiv": {
      "de": "leihen",
      "lv": "позајмува • позајми"
    },
    "praesens": {
      "de": "er leiht",
      "lv": "тој позајмува"
    },
    "imperfektIndikativ": {
      "de": "er lieh",
      "lv": "тој позајми"
    },
    "imperfektKonjunktiv": {
      "de": "er liehe",
      "lv": "тој би позајмувал"
    },
    "partizipVergangenheit": {
      "de": "geliehen",
      "lv": "позајмен"
    }
  },
  {
    "infinitiv": {
      "de": "lesen",
      "lv": "чита • прочита"
    },
    "praesens": {
      "de": "er liest",
      "lv": "тој чита"
    },
    "imperfektIndikativ": {
      "de": "er las",
      "lv": "тој прочита"
    },
    "imperfektKonjunktiv": {
      "de": "er läse",
      "lv": "тој би читал"
    },
    "partizipVergangenheit": {
      "de": "gelesen",
      "lv": "прочитан"
    }
  },
  {
    "infinitiv": {
      "de": "liegen",
      "lv": "лежи"
    },
    "praesens": {
      "de": "er liegt",
      "lv": "тој лежи"
    },
    "imperfektIndikativ": {
      "de": "er lag",
      "lv": "тој лежеше"
    },
    "imperfektKonjunktiv": {
      "de": "er läge",
      "lv": "тој би лежел"
    },
    "partizipVergangenheit": {
      "de": "gelegen",
      "lv": "лежел"
    }
  },
  {
    "infinitiv": {
      "de": "lügen",
      "lv": "лаже • излаже"
    },
    "praesens": {
      "de": "er lügt",
      "lv": "тој лаже"
    },
    "imperfektIndikativ": {
      "de": "er log",
      "lv": "тој излажа"
    },
    "imperfektKonjunktiv": {
      "de": "er löge",
      "lv": "тој би лажел"
    },
    "partizipVergangenheit": {
      "de": "gelogen",
      "lv": "излажал"
    }
  },
  {
    "infinitiv": {
      "de": "mahlen",
      "lv": "меле • измеле"
    },
    "praesens": {
      "de": "er mahlt",
      "lv": "тој меле"
    },
    "imperfektIndikativ": {
      "de": "er mahlte",
      "lv": "тој измеле"
    },
    "imperfektKonjunktiv": {
      "de": "er malte",
      "lv": "тој би мелел"
    },
    "partizipVergangenheit": {
      "de": "gemahlen",
      "lv": "измелен"
    }
  },
  {
    "infinitiv": {
      "de": "meiden",
      "lv": "избегнува • избегне"
    },
    "praesens": {
      "de": "er meidet",
      "lv": "тој избегнува"
    },
    "imperfektIndikativ": {
      "de": "er mied",
      "lv": "тој избегна"
    },
    "imperfektKonjunktiv": {
      "de": "er miede",
      "lv": "тој би избегнувал"
    },
    "partizipVergangenheit": {
      "de": "gemieden",
      "lv": "избегнат"
    }
  },
  {
    "infinitiv": {
      "de": "melken",
      "lv": "молзе • измолзе"
    },
    "praesens": {
      "de": "er milkt / er melkt",
      "lv": "тој молзе"
    },
    "imperfektIndikativ": {
      "de": "er molk / er melkte",
      "lv": "тој измолзе"
    },
    "imperfektKonjunktiv": {
      "de": "er mölke / er melkte",
      "lv": "тој би молзел"
    },
    "partizipVergangenheit": {
      "de": "gemolken / gemelkt",
      "lv": "измолзен"
    }
  },
  {
    "infinitiv": {
      "de": "messen",
      "lv": "мери • измери"
    },
    "praesens": {
      "de": "er misst",
      "lv": "тој мери"
    },
    "imperfektIndikativ": {
      "de": "er maß",
      "lv": "тој измери"
    },
    "imperfektKonjunktiv": {
      "de": "er mäße",
      "lv": "тој би мерел"
    },
    "partizipVergangenheit": {
      "de": "gemessen",
      "lv": "измерен"
    }
  },
  {
    "infinitiv": {
      "de": "misslingen",
      "lv": "пропаѓа • пропадне"
    },
    "praesens": {
      "de": "es misslingt",
      "lv": "тоа пропаѓа"
    },
    "imperfektIndikativ": {
      "de": "es misslang",
      "lv": "тоа пропадна"
    },
    "imperfektKonjunktiv": {
      "de": "es misslänge",
      "lv": "тоа би пропаѓало"
    },
    "partizipVergangenheit": {
      "de": "misslungen",
      "lv": "пропаднал"
    }
  },
  {
    "infinitiv": {
      "de": "mögen",
      "lv": "сака"
    },
    "praesens": {
      "de": "er mag",
      "lv": "тој сака"
    },
    "imperfektIndikativ": {
      "de": "er mochte",
      "lv": "тој сакаше"
    },
    "imperfektKonjunktiv": {
      "de": "er möchte",
      "lv": "тој би сакал"
    },
    "partizipVergangenheit": {
      "de": "gemocht",
      "lv": "сакал"
    }
  },
  {
    "infinitiv": {
      "de": "müssen",
      "lv": "мора"
    },
    "praesens": {
      "de": "er muss",
      "lv": "тој мора"
    },
    "imperfektIndikativ": {
      "de": "er musste",
      "lv": "тој мораше"
    },
    "imperfektKonjunktiv": {
      "de": "er müsste",
      "lv": "тој би морал"
    },
    "partizipVergangenheit": {
      "de": "gemusst",
      "lv": "морал"
    }
  },
  {
    "infinitiv": {
      "de": "nehmen",
      "lv": "зема • земе"
    },
    "praesens": {
      "de": "er nimmt",
      "lv": "тој зема"
    },
    "imperfektIndikativ": {
      "de": "er nahm",
      "lv": "тој зеде"
    },
    "imperfektKonjunktiv": {
      "de": "er nähme",
      "lv": "тој би земал"
    },
    "partizipVergangenheit": {
      "de": "genommen",
      "lv": "земен"
    }
  },
  {
    "infinitiv": {
      "de": "nennen",
      "lv": "нарекува • нарече"
    },
    "praesens": {
      "de": "er nennt",
      "lv": "тој нарекува"
    },
    "imperfektIndikativ": {
      "de": "er nannte",
      "lv": "тој нарече"
    },
    "imperfektKonjunktiv": {
      "de": "er nennte",
      "lv": "тој би нарекувал"
    },
    "partizipVergangenheit": {
      "de": "genannt",
      "lv": "наречен"
    }
  },
  {
    "infinitiv": {
      "de": "pfeifen",
      "lv": "свирка • свирне"
    },
    "praesens": {
      "de": "er pfeift",
      "lv": "тој свирка"
    },
    "imperfektIndikativ": {
      "de": "er pfiff",
      "lv": "тој свирна"
    },
    "imperfektKonjunktiv": {
      "de": "er pfiffe",
      "lv": "тој би свиркал"
    },
    "partizipVergangenheit": {
      "de": "gepfiffen",
      "lv": "свирнал"
    }
  },
  {
    "infinitiv": {
      "de": "pflegen",
      "lv": "негува"
    },
    "praesens": {
      "de": "er pflegt",
      "lv": "тој негува"
    },
    "imperfektIndikativ": {
      "de": "er pflegte / er pflog",
      "lv": "тој негуваше"
    },
    "imperfektKonjunktiv": {
      "de": "er pflegte / er pflöge",
      "lv": "тој би негувал"
    },
    "partizipVergangenheit": {
      "de": "gepflegt / gepflogen",
      "lv": "негуван"
    }
  },
  {
    "infinitiv": {
      "de": "preisen",
      "lv": "велича"
    },
    "praesens": {
      "de": "er preist",
      "lv": "тој велича"
    },
    "imperfektIndikativ": {
      "de": "er pries",
      "lv": "тој величаше"
    },
    "imperfektKonjunktiv": {
      "de": "er priese",
      "lv": "тој би величал"
    },
    "partizipVergangenheit": {
      "de": "gepriesen",
      "lv": "величал"
    }
  },
  {
    "infinitiv": {
      "de": "quellen",
      "lv": "бабри • набабри"
    },
    "praesens": {
      "de": "er quillt",
      "lv": "тој бабри"
    },
    "imperfektIndikativ": {
      "de": "er quoll",
      "lv": "тој набабри"
    },
    "imperfektKonjunktiv": {
      "de": "er quölle",
      "lv": "тој би бабрел"
    },
    "partizipVergangenheit": {
      "de": "gequollen (er ist)",
      "lv": "набабрил"
    }
  },
  {
    "infinitiv": {
      "de": "raten",
      "lv": "советува • посоветува / погодува • погоди"
    },
    "praesens": {
      "de": "er rät",
      "lv": "тој советува / погодува"
    },
    "imperfektIndikativ": {
      "de": "er riet",
      "lv": "тој посоветува / погоди"
    },
    "imperfektKonjunktiv": {
      "de": "er riete",
      "lv": "тој би советувал / погодувал"
    },
    "partizipVergangenheit": {
      "de": "geraten",
      "lv": "посоветуван / погоден"
    }
  },
  {
    "infinitiv": {
      "de": "reiben",
      "lv": "трие"
    },
    "praesens": {
      "de": "er reibt",
      "lv": "тој трие"
    },
    "imperfektIndikativ": {
      "de": "er rieb",
      "lv": "тој триеше"
    },
    "imperfektKonjunktiv": {
      "de": "er riebe",
      "lv": "тој би триел"
    },
    "partizipVergangenheit": {
      "de": "gerieben",
      "lv": "триен"
    }
  },
  {
    "infinitiv": {
      "de": "reißen",
      "lv": "кине • скине"
    },
    "praesens": {
      "de": "er reißt",
      "lv": "тој кине"
    },
    "imperfektIndikativ": {
      "de": "er riss",
      "lv": "тој скина"
    },
    "imperfektKonjunktiv": {
      "de": "er risse",
      "lv": "тој би кинел"
    },
    "partizipVergangenheit": {
      "de": "gerissen",
      "lv": "скинат"
    }
  },
  {
    "infinitiv": {
      "de": "reiten",
      "lv": "јава"
    },
    "praesens": {
      "de": "er reitet",
      "lv": "тој јава"
    },
    "imperfektIndikativ": {
      "de": "er ritt",
      "lv": "тој јаваше"
    },
    "imperfektKonjunktiv": {
      "de": "er ritte",
      "lv": "тој би јавал"
    },
    "partizipVergangenheit": {
      "de": "geritten (er ist)",
      "lv": "јавал"
    }
  },
  {
    "infinitiv": {
      "de": "rennen",
      "lv": "јури"
    },
    "praesens": {
      "de": "er rennt",
      "lv": "тој јури"
    },
    "imperfektIndikativ": {
      "de": "er rannte",
      "lv": "тој јуреше"
    },
    "imperfektKonjunktiv": {
      "de": "er rennte",
      "lv": "тој би јурел"
    },
    "partizipVergangenheit": {
      "de": "gerannt",
      "lv": "јурел"
    }
  },
  {
    "infinitiv": {
      "de": "riechen",
      "lv": "мириса • помириса"
    },
    "praesens": {
      "de": "er riecht",
      "lv": "тој мириса"
    },
    "imperfektIndikativ": {
      "de": "er roch",
      "lv": "тој помириса"
    },
    "imperfektKonjunktiv": {
      "de": "er röche",
      "lv": "тој би мирисал"
    },
    "partizipVergangenheit": {
      "de": "gerochen",
      "lv": "помирисан"
    }
  },
  {
    "infinitiv": {
      "de": "ringen",
      "lv": "се бори"
    },
    "praesens": {
      "de": "er ringt",
      "lv": "тој се бори"
    },
    "imperfektIndikativ": {
      "de": "er rang",
      "lv": "тој се бореше"
    },
    "imperfektKonjunktiv": {
      "de": "er ränge",
      "lv": "тој би се борел"
    },
    "partizipVergangenheit": {
      "de": "gerungen",
      "lv": "се борел"
    }
  },
  {
    "infinitiv": {
      "de": "rinnen",
      "lv": "тече"
    },
    "praesens": {
      "de": "er rinnt",
      "lv": "тој тече"
    },
    "imperfektIndikativ": {
      "de": "er rann",
      "lv": "тој течеше"
    },
    "imperfektKonjunktiv": {
      "de": "er ränne / er rönne",
      "lv": "тој би течел"
    },
    "partizipVergangenheit": {
      "de": "geronnen (er ist)",
      "lv": "течел"
    }
  },
  {
    "infinitiv": {
      "de": "rufen",
      "lv": "вика • повика"
    },
    "praesens": {
      "de": "er ruft",
      "lv": "тој вика"
    },
    "imperfektIndikativ": {
      "de": "er rief",
      "lv": "тој повика"
    },
    "imperfektKonjunktiv": {
      "de": "er riefe",
      "lv": "тој би викал"
    },
    "partizipVergangenheit": {
      "de": "gerufen",
      "lv": "повикан"
    }
  },
  {
    "infinitiv": {
      "de": "salzen",
      "lv": "соли • посоли"
    },
    "praesens": {
      "de": "er salzt",
      "lv": "тој соли"
    },
    "imperfektIndikativ": {
      "de": "er salzte",
      "lv": "тој посоли"
    },
    "imperfektKonjunktiv": {
      "de": "er salzte",
      "lv": "тој би солел"
    },
    "partizipVergangenheit": {
      "de": "gesalzen",
      "lv": "посолен"
    }
  },
  {
    "infinitiv": {
      "de": "saufen",
      "lv": "пие • испие"
    },
    "praesens": {
      "de": "er säuft",
      "lv": "тој пие"
    },
    "imperfektIndikativ": {
      "de": "er soff",
      "lv": "тој испи"
    },
    "imperfektKonjunktiv": {
      "de": "er söffe",
      "lv": "тој би пиел"
    },
    "partizipVergangenheit": {
      "de": "gesoffen",
      "lv": "испиен"
    }
  },
  {
    "infinitiv": {
      "de": "saugen",
      "lv": "цица • исцица"
    },
    "praesens": {
      "de": "er saugt",
      "lv": "тој цица"
    },
    "imperfektIndikativ": {
      "de": "er sog",
      "lv": "тој исцица"
    },
    "imperfektKonjunktiv": {
      "de": "er söge",
      "lv": "тој би цицал"
    },
    "partizipVergangenheit": {
      "de": "gesogen",
      "lv": "исцицан"
    }
  },
  {
    "infinitiv": {
      "de": "schaffen",
      "lv": "создава • создаде"
    },
    "praesens": {
      "de": "er schafft",
      "lv": "тој создава"
    },
    "imperfektIndikativ": {
      "de": "er schuf",
      "lv": "тој создаде"
    },
    "imperfektKonjunktiv": {
      "de": "er schüfe",
      "lv": "тој би создавал"
    },
    "partizipVergangenheit": {
      "de": "geschaffen",
      "lv": "создаден"
    }
  },
  {
    "infinitiv": {
      "de": "schallen",
      "lv": "одекнува • одекне"
    },
    "praesens": {
      "de": "es schallt",
      "lv": "тоа одекнува"
    },
    "imperfektIndikativ": {
      "de": "es schallte / es scholl",
      "lv": "тоа одекна"
    },
    "imperfektKonjunktiv": {
      "de": "es schallte / es schölle",
      "lv": "тоа би одекнувало"
    },
    "partizipVergangenheit": {
      "de": "geschallt",
      "lv": "одекнал"
    }
  },
  {
    "infinitiv": {
      "de": "scheiden",
      "lv": "одделува • оддели / се разведува • се разведе"
    },
    "praesens": {
      "de": "er scheidet",
      "lv": "тој одделува / се разведува"
    },
    "imperfektIndikativ": {
      "de": "er schied",
      "lv": "тој оддели / се разведе"
    },
    "imperfektKonjunktiv": {
      "de": "er schiede",
      "lv": "тој би одделувал / би се разведувал"
    },
    "partizipVergangenheit": {
      "de": "geschieden (er hat / er ist)",
      "lv": "одделен / се развел"
    }
  },
  {
    "infinitiv": {
      "de": "scheinen",
      "lv": "сјае / изгледа"
    },
    "praesens": {
      "de": "er scheint",
      "lv": "тој сјае / изгледа"
    },
    "imperfektIndikativ": {
      "de": "er schien",
      "lv": "тој сјаеше / изгледаше"
    },
    "imperfektKonjunktiv": {
      "de": "er schiene",
      "lv": "тој би сјаел / изгледал"
    },
    "partizipVergangenheit": {
      "de": "geschienen",
      "lv": "сјаел / изгледал"
    }
  },
  {
    "infinitiv": {
      "de": "schelten",
      "lv": "кара • искара"
    },
    "praesens": {
      "de": "er schilt",
      "lv": "тој кара"
    },
    "imperfektIndikativ": {
      "de": "er schalt",
      "lv": "тој искара"
    },
    "imperfektKonjunktiv": {
      "de": "er schölte / er schälte",
      "lv": "тој би карал"
    },
    "partizipVergangenheit": {
      "de": "gescholten",
      "lv": "искаран"
    }
  },
  {
    "infinitiv": {
      "de": "scheren",
      "lv": "стриже • истриже"
    },
    "praesens": {
      "de": "er schert",
      "lv": "тој стриже"
    },
    "imperfektIndikativ": {
      "de": "er schor / er scherte",
      "lv": "тој истриже"
    },
    "imperfektKonjunktiv": {
      "de": "er schöre / er scherte",
      "lv": "тој би стрижел"
    },
    "partizipVergangenheit": {
      "de": "geschoren / geschert",
      "lv": "истрижен"
    }
  },
  {
    "infinitiv": {
      "de": "schieben",
      "lv": "турка • турне"
    },
    "praesens": {
      "de": "er schiebt",
      "lv": "тој турка"
    },
    "imperfektIndikativ": {
      "de": "er schob",
      "lv": "тој турна"
    },
    "imperfektKonjunktiv": {
      "de": "er schöbe",
      "lv": "тој би туркал"
    },
    "partizipVergangenheit": {
      "de": "geschoben",
      "lv": "турнат"
    }
  },
  {
    "infinitiv": {
      "de": "schießen",
      "lv": "стрела"
    },
    "praesens": {
      "de": "er schießt",
      "lv": "тој стрела"
    },
    "imperfektIndikativ": {
      "de": "er schoss",
      "lv": "тој стрелаше"
    },
    "imperfektKonjunktiv": {
      "de": "er schösse",
      "lv": "тој би стрелал"
    },
    "partizipVergangenheit": {
      "de": "geschossen",
      "lv": "стрелал"
    }
  },
  {
    "infinitiv": {
      "de": "schinden",
      "lv": "мачи • измачи"
    },
    "praesens": {
      "de": "er schindet",
      "lv": "тој мачи"
    },
    "imperfektIndikativ": {
      "de": "er schindete",
      "lv": "тој измачи"
    },
    "imperfektKonjunktiv": {
      "de": "er schindete",
      "lv": "тој би мачел"
    },
    "partizipVergangenheit": {
      "de": "geschunden",
      "lv": "измачен"
    }
  },
  {
    "infinitiv": {
      "de": "schlafen",
      "lv": "спие"
    },
    "praesens": {
      "de": "er schläft",
      "lv": "тој спие"
    },
    "imperfektIndikativ": {
      "de": "er schlief",
      "lv": "тој спиеше"
    },
    "imperfektKonjunktiv": {
      "de": "er schliefe",
      "lv": "тој би спиел"
    },
    "partizipVergangenheit": {
      "de": "geschlafen",
      "lv": "спиел"
    }
  },
  {
    "infinitiv": {
      "de": "schlagen",
      "lv": "удира • удри"
    },
    "praesens": {
      "de": "er schlägt",
      "lv": "тој удира"
    },
    "imperfektIndikativ": {
      "de": "er schlug",
      "lv": "тој удри"
    },
    "imperfektKonjunktiv": {
      "de": "er schlüge",
      "lv": "тој би удирал"
    },
    "partizipVergangenheit": {
      "de": "geschlagen",
      "lv": "удрен"
    }
  },
  {
    "infinitiv": {
      "de": "schleichen",
      "lv": "се прикрадува • се прикраде"
    },
    "praesens": {
      "de": "er schleicht",
      "lv": "тој се прикрадува"
    },
    "imperfektIndikativ": {
      "de": "er schlich",
      "lv": "тој се прикраде"
    },
    "imperfektKonjunktiv": {
      "de": "er schliche",
      "lv": "тој би се прикрадувал"
    },
    "partizipVergangenheit": {
      "de": "geschlichen (er ist)",
      "lv": "се прикрал"
    }
  },
  {
    "infinitiv": {
      "de": "schleifen",
      "lv": "бруси • избруси"
    },
    "praesens": {
      "de": "er schleift",
      "lv": "тој бруси"
    },
    "imperfektIndikativ": {
      "de": "er schliff",
      "lv": "тој избруси"
    },
    "imperfektKonjunktiv": {
      "de": "er schliffe",
      "lv": "тој би брусел"
    },
    "partizipVergangenheit": {
      "de": "geschliffen",
      "lv": "избрусен"
    }
  },
  {
    "infinitiv": {
      "de": "schließen",
      "lv": "затвора • затвори"
    },
    "praesens": {
      "de": "er schließt",
      "lv": "тој затвора"
    },
    "imperfektIndikativ": {
      "de": "er schloss",
      "lv": "тој затвори"
    },
    "imperfektKonjunktiv": {
      "de": "er schlösse",
      "lv": "тој би затворал"
    },
    "partizipVergangenheit": {
      "de": "geschlossen",
      "lv": "затворен"
    }
  },
  {
    "infinitiv": {
      "de": "schlingen",
      "lv": "голта • проголта"
    },
    "praesens": {
      "de": "er schlingt",
      "lv": "тој голта"
    },
    "imperfektIndikativ": {
      "de": "er schlang",
      "lv": "тој проголта"
    },
    "imperfektKonjunktiv": {
      "de": "er schlänge",
      "lv": "тој би голтал"
    },
    "partizipVergangenheit": {
      "de": "geschlungen",
      "lv": "проголтан"
    }
  },
  {
    "infinitiv": {
      "de": "schmeißen",
      "lv": "фрла • фрли"
    },
    "praesens": {
      "de": "er schmeißt",
      "lv": "тој фрла"
    },
    "imperfektIndikativ": {
      "de": "er schmiss",
      "lv": "тој фрли"
    },
    "imperfektKonjunktiv": {
      "de": "er schmisse",
      "lv": "тој би фрлал"
    },
    "partizipVergangenheit": {
      "de": "geschmissen",
      "lv": "фрлен"
    }
  },
  {
    "infinitiv": {
      "de": "schmelzen",
      "lv": "се топи • се стопи"
    },
    "praesens": {
      "de": "er schmilzt",
      "lv": "тој се топи"
    },
    "imperfektIndikativ": {
      "de": "er schmolz",
      "lv": "тој се стопи"
    },
    "imperfektKonjunktiv": {
      "de": "er schmölze",
      "lv": "тој би се топел"
    },
    "partizipVergangenheit": {
      "de": "geschmolzen (er ist)",
      "lv": "се стопил"
    }
  },
  {
    "infinitiv": {
      "de": "schnauben",
      "lv": "фрка • фркне"
    },
    "praesens": {
      "de": "er schnaubt",
      "lv": "тој фрка"
    },
    "imperfektIndikativ": {
      "de": "er schnaubte / er schnob",
      "lv": "тој фркна"
    },
    "imperfektKonjunktiv": {
      "de": "er schnaubte / er schnöbe",
      "lv": "тој би фркал"
    },
    "partizipVergangenheit": {
      "de": "geschnaubt / geschnoben",
      "lv": "фркнал"
    }
  },
  {
    "infinitiv": {
      "de": "schneiden",
      "lv": "сече • исече"
    },
    "praesens": {
      "de": "er schneidet",
      "lv": "тој сече"
    },
    "imperfektIndikativ": {
      "de": "er schnitt",
      "lv": "тој исече"
    },
    "imperfektKonjunktiv": {
      "de": "er schnitte",
      "lv": "тој би сечел"
    },
    "partizipVergangenheit": {
      "de": "geschnitten",
      "lv": "исечен"
    }
  },
  {
    "infinitiv": {
      "de": "schreiben",
      "lv": "пишува • напише"
    },
    "praesens": {
      "de": "er schreibt",
      "lv": "тој пишува"
    },
    "imperfektIndikativ": {
      "de": "er schrieb",
      "lv": "тој напиша"
    },
    "imperfektKonjunktiv": {
      "de": "er schriebe",
      "lv": "тој би пишувал"
    },
    "partizipVergangenheit": {
      "de": "geschrieben",
      "lv": "напишан"
    }
  },
  {
    "infinitiv": {
      "de": "schreien",
      "lv": "вреска • вресне"
    },
    "praesens": {
      "de": "er schreit",
      "lv": "тој вреска"
    },
    "imperfektIndikativ": {
      "de": "er schrie",
      "lv": "тој вресна"
    },
    "imperfektKonjunktiv": {
      "de": "er schriee",
      "lv": "тој би врескал"
    },
    "partizipVergangenheit": {
      "de": "geschrien",
      "lv": "вреснал"
    }
  },
  {
    "infinitiv": {
      "de": "schreiten",
      "lv": "чекори"
    },
    "praesens": {
      "de": "er schreitet",
      "lv": "тој чекори"
    },
    "imperfektIndikativ": {
      "de": "er schritt",
      "lv": "тој чекореше"
    },
    "imperfektKonjunktiv": {
      "de": "er schritte",
      "lv": "тој би чекорел"
    },
    "partizipVergangenheit": {
      "de": "geschritten (er ist)",
      "lv": "чекорел"
    }
  },
  {
    "infinitiv": {
      "de": "schweigen",
      "lv": "молчи"
    },
    "praesens": {
      "de": "er schweigt",
      "lv": "тој молчи"
    },
    "imperfektIndikativ": {
      "de": "er schwieg",
      "lv": "тој молчеше"
    },
    "imperfektKonjunktiv": {
      "de": "er schwiege",
      "lv": "тој би молчел"
    },
    "partizipVergangenheit": {
      "de": "geschwiegen",
      "lv": "молчел"
    }
  },
  {
    "infinitiv": {
      "de": "schwellen",
      "lv": "отекува • отече"
    },
    "praesens": {
      "de": "er schwillt",
      "lv": "тој отекува"
    },
    "imperfektIndikativ": {
      "de": "er schwoll",
      "lv": "тој отече"
    },
    "imperfektKonjunktiv": {
      "de": "er schwölle",
      "lv": "тој би отекувал"
    },
    "partizipVergangenheit": {
      "de": "geschwollen (er ist)",
      "lv": "отекол"
    }
  },
  {
    "infinitiv": {
      "de": "schwimmen",
      "lv": "плива"
    },
    "praesens": {
      "de": "er schwimmt",
      "lv": "тој плива"
    },
    "imperfektIndikativ": {
      "de": "er schwamm",
      "lv": "тој пливаше"
    },
    "imperfektKonjunktiv": {
      "de": "er schwömme / er schwämme",
      "lv": "тој би пливал"
    },
    "partizipVergangenheit": {
      "de": "geschwommen (er ist)",
      "lv": "пливал"
    }
  },
  {
    "infinitiv": {
      "de": "schwinden",
      "lv": "исчезнува • исчезне"
    },
    "praesens": {
      "de": "er schwindet",
      "lv": "тој исчезнува"
    },
    "imperfektIndikativ": {
      "de": "er schwand",
      "lv": "тој исчезна"
    },
    "imperfektKonjunktiv": {
      "de": "er schwände",
      "lv": "тој би исчезнувал"
    },
    "partizipVergangenheit": {
      "de": "geschwunden (er ist)",
      "lv": "исчезнал"
    }
  },
  {
    "infinitiv": {
      "de": "schwingen",
      "lv": "мавта"
    },
    "praesens": {
      "de": "er schwingt",
      "lv": "тој мавта"
    },
    "imperfektIndikativ": {
      "de": "er schwang",
      "lv": "тој мавташе"
    },
    "imperfektKonjunktiv": {
      "de": "er schwänge",
      "lv": "тој би мавтал"
    },
    "partizipVergangenheit": {
      "de": "geschwungen",
      "lv": "мавтан"
    }
  },
  {
    "infinitiv": {
      "de": "schwören",
      "lv": "се колне • се заколне"
    },
    "praesens": {
      "de": "er schwört",
      "lv": "тој се колне"
    },
    "imperfektIndikativ": {
      "de": "er schwur / er schwor",
      "lv": "тој се заколна"
    },
    "imperfektKonjunktiv": {
      "de": "er schwöre",
      "lv": "тој би се колнел"
    },
    "partizipVergangenheit": {
      "de": "geschworen",
      "lv": "се заколнал"
    }
  },
  {
    "infinitiv": {
      "de": "sehen",
      "lv": "гледа • види"
    },
    "praesens": {
      "de": "er sieht",
      "lv": "тој гледа"
    },
    "imperfektIndikativ": {
      "de": "er sah",
      "lv": "тој виде"
    },
    "imperfektKonjunktiv": {
      "de": "er sähe",
      "lv": "тој би гледал"
    },
    "partizipVergangenheit": {
      "de": "gesehen",
      "lv": "виден"
    }
  },
  {
    "infinitiv": {
      "de": "sein",
      "lv": "е"
    },
    "praesens": {
      "de": "er ist",
      "lv": "тој е"
    },
    "imperfektIndikativ": {
      "de": "er war",
      "lv": "тој беше"
    },
    "imperfektKonjunktiv": {
      "de": "er wäre",
      "lv": "тој би бил"
    },
    "partizipVergangenheit": {
      "de": "gewesen",
      "lv": "бил"
    }
  },
  {
    "infinitiv": {
      "de": "senden",
      "lv": "испраќа • испрати"
    },
    "praesens": {
      "de": "er sendet",
      "lv": "тој испраќа"
    },
    "imperfektIndikativ": {
      "de": "er sandte / er sendete",
      "lv": "тој испрати"
    },
    "imperfektKonjunktiv": {
      "de": "er sendete",
      "lv": "тој би испраќал"
    },
    "partizipVergangenheit": {
      "de": "gesandt / gesendet",
      "lv": "испратен"
    }
  },
  {
    "infinitiv": {
      "de": "sieden",
      "lv": "вари • свари"
    },
    "praesens": {
      "de": "er siedet",
      "lv": "тој вари"
    },
    "imperfektIndikativ": {
      "de": "er sott / er siedete",
      "lv": "тој свари"
    },
    "imperfektKonjunktiv": {
      "de": "er sötte / er siedete",
      "lv": "тој би варел"
    },
    "partizipVergangenheit": {
      "de": "gesotten / gesiedet",
      "lv": "сварен"
    }
  },
  {
    "infinitiv": {
      "de": "singen",
      "lv": "пее • испее"
    },
    "praesens": {
      "de": "er singt",
      "lv": "тој пее"
    },
    "imperfektIndikativ": {
      "de": "er sang",
      "lv": "тој испеа"
    },
    "imperfektKonjunktiv": {
      "de": "er sänge",
      "lv": "тој би пеел"
    },
    "partizipVergangenheit": {
      "de": "gesungen",
      "lv": "испеан"
    }
  },
  {
    "infinitiv": {
      "de": "sinken",
      "lv": "тоне • потоне"
    },
    "praesens": {
      "de": "er sinkt",
      "lv": "тој тоне"
    },
    "imperfektIndikativ": {
      "de": "er sank",
      "lv": "тој потона"
    },
    "imperfektKonjunktiv": {
      "de": "er sänke",
      "lv": "тој би тонел"
    },
    "partizipVergangenheit": {
      "de": "gesunken (er ist)",
      "lv": "потонал"
    }
  },
  {
    "infinitiv": {
      "de": "sinnen",
      "lv": "размислува"
    },
    "praesens": {
      "de": "er sinnt",
      "lv": "тој размислува"
    },
    "imperfektIndikativ": {
      "de": "er sann",
      "lv": "тој размислуваше"
    },
    "imperfektKonjunktiv": {
      "de": "er sönne / er sänne",
      "lv": "тој би размислувал"
    },
    "partizipVergangenheit": {
      "de": "gesonnen",
      "lv": "размислувал"
    }
  },
  {
    "infinitiv": {
      "de": "sitzen",
      "lv": "седи"
    },
    "praesens": {
      "de": "er sitzt",
      "lv": "тој седи"
    },
    "imperfektIndikativ": {
      "de": "er saß",
      "lv": "тој седеше"
    },
    "imperfektKonjunktiv": {
      "de": "er säße",
      "lv": "тој би седел"
    },
    "partizipVergangenheit": {
      "de": "gesessen",
      "lv": "седел"
    }
  },
  {
    "infinitiv": {
      "de": "sollen",
      "lv": "треба"
    },
    "praesens": {
      "de": "er soll",
      "lv": "тој треба"
    },
    "imperfektIndikativ": {
      "de": "er sollte",
      "lv": "тој требаше"
    },
    "imperfektKonjunktiv": {
      "de": "er sollte",
      "lv": "тој би требало"
    },
    "partizipVergangenheit": {
      "de": "gesollt",
      "lv": "требало"
    }
  },
  {
    "infinitiv": {
      "de": "speien",
      "lv": "плука • плукне"
    },
    "praesens": {
      "de": "er speit",
      "lv": "тој плука"
    },
    "imperfektIndikativ": {
      "de": "er spie",
      "lv": "тој плукна"
    },
    "imperfektKonjunktiv": {
      "de": "er spie",
      "lv": "тој би плукал"
    },
    "partizipVergangenheit": {
      "de": "gespien",
      "lv": "плукнат"
    }
  },
  {
    "infinitiv": {
      "de": "spinnen",
      "lv": "преде • испреде"
    },
    "praesens": {
      "de": "er spinnt",
      "lv": "тој преде"
    },
    "imperfektIndikativ": {
      "de": "er spann",
      "lv": "тој испреде"
    },
    "imperfektKonjunktiv": {
      "de": "er spönne / er spänne",
      "lv": "тој би предел"
    },
    "partizipVergangenheit": {
      "de": "gesponnen",
      "lv": "испреден"
    }
  },
  {
    "infinitiv": {
      "de": "spleißen",
      "lv": "спојува • спои"
    },
    "praesens": {
      "de": "er spleißt",
      "lv": "тој спојува"
    },
    "imperfektIndikativ": {
      "de": "er spliss",
      "lv": "тој спои"
    },
    "imperfektKonjunktiv": {
      "de": "er splisse",
      "lv": "тој би спојувал"
    },
    "partizipVergangenheit": {
      "de": "gesplissen",
      "lv": "споен"
    }
  },
  {
    "infinitiv": {
      "de": "sprechen",
      "lv": "зборува"
    },
    "praesens": {
      "de": "er spricht",
      "lv": "тој зборува"
    },
    "imperfektIndikativ": {
      "de": "er sprach",
      "lv": "тој зборуваше"
    },
    "imperfektKonjunktiv": {
      "de": "er spräche",
      "lv": "тој би зборувал"
    },
    "partizipVergangenheit": {
      "de": "gesprochen",
      "lv": "зборуван"
    }
  },
  {
    "infinitiv": {
      "de": "sprießen",
      "lv": "никнува • никне"
    },
    "praesens": {
      "de": "er sprießt",
      "lv": "тој никнува"
    },
    "imperfektIndikativ": {
      "de": "er spross",
      "lv": "тој никна"
    },
    "imperfektKonjunktiv": {
      "de": "er sprösse",
      "lv": "тој би никнувал"
    },
    "partizipVergangenheit": {
      "de": "gesprossen (er ist)",
      "lv": "никнал"
    }
  },
  {
    "infinitiv": {
      "de": "springen",
      "lv": "скока • скокне"
    },
    "praesens": {
      "de": "er springt",
      "lv": "тој скока"
    },
    "imperfektIndikativ": {
      "de": "er sprang",
      "lv": "тој скокна"
    },
    "imperfektKonjunktiv": {
      "de": "er spränge",
      "lv": "тој би скокал"
    },
    "partizipVergangenheit": {
      "de": "gesprungen (er ist)",
      "lv": "скокнал"
    }
  },
  {
    "infinitiv": {
      "de": "stechen",
      "lv": "боде • убоде"
    },
    "praesens": {
      "de": "er sticht",
      "lv": "тој боде"
    },
    "imperfektIndikativ": {
      "de": "er stach",
      "lv": "тој убоде"
    },
    "imperfektKonjunktiv": {
      "de": "er stäche",
      "lv": "тој би бодел"
    },
    "partizipVergangenheit": {
      "de": "gestochen",
      "lv": "убоден"
    }
  },
  {
    "infinitiv": {
      "de": "stecken",
      "lv": "става • стави / забодува • забоде"
    },
    "praesens": {
      "de": "er steckt",
      "lv": "тој става / забодува"
    },
    "imperfektIndikativ": {
      "de": "er stak / er steckte",
      "lv": "тој стави / забоде"
    },
    "imperfektKonjunktiv": {
      "de": "er stäke / er steckte",
      "lv": "тој би ставал / забодувал"
    },
    "partizipVergangenheit": {
      "de": "gesteckt",
      "lv": "ставен / забоден"
    }
  },
  {
    "infinitiv": {
      "de": "stehen",
      "lv": "стои"
    },
    "praesens": {
      "de": "er steht",
      "lv": "тој стои"
    },
    "imperfektIndikativ": {
      "de": "er stand",
      "lv": "тој стоеше"
    },
    "imperfektKonjunktiv": {
      "de": "er stände / er stünde",
      "lv": "тој би стоел"
    },
    "partizipVergangenheit": {
      "de": "gestanden",
      "lv": "стоел"
    }
  },
  {
    "infinitiv": {
      "de": "stehlen",
      "lv": "краде • украде"
    },
    "praesens": {
      "de": "er stiehlt",
      "lv": "тој краде"
    },
    "imperfektIndikativ": {
      "de": "er stahl",
      "lv": "тој украде"
    },
    "imperfektKonjunktiv": {
      "de": "er stöhle / er stähle",
      "lv": "тој би крадел"
    },
    "partizipVergangenheit": {
      "de": "gestohlen",
      "lv": "украден"
    }
  },
  {
    "infinitiv": {
      "de": "steigen",
      "lv": "се качува • се качи"
    },
    "praesens": {
      "de": "er steigt",
      "lv": "тој се качува"
    },
    "imperfektIndikativ": {
      "de": "er stieg",
      "lv": "тој се качи"
    },
    "imperfektKonjunktiv": {
      "de": "er stiege",
      "lv": "тој би се качувал"
    },
    "partizipVergangenheit": {
      "de": "gestiegen (er ist)",
      "lv": "се качил"
    }
  },
  {
    "infinitiv": {
      "de": "sterben",
      "lv": "умира • умре"
    },
    "praesens": {
      "de": "er stirbt",
      "lv": "тој умира"
    },
    "imperfektIndikativ": {
      "de": "er starb",
      "lv": "тој умре"
    },
    "imperfektKonjunktiv": {
      "de": "er stürbe",
      "lv": "тој би умирал"
    },
    "partizipVergangenheit": {
      "de": "gestorben (er ist)",
      "lv": "умрел"
    }
  },
  {
    "infinitiv": {
      "de": "stinken",
      "lv": "смрди"
    },
    "praesens": {
      "de": "es stinkt",
      "lv": "тоа смрди"
    },
    "imperfektIndikativ": {
      "de": "es stank",
      "lv": "тоа смрдеше"
    },
    "imperfektKonjunktiv": {
      "de": "es stänke",
      "lv": "тоа би смрдело"
    },
    "partizipVergangenheit": {
      "de": "gestunken",
      "lv": "смрдел"
    }
  },
  {
    "infinitiv": {
      "de": "stoßen",
      "lv": "турка • турне"
    },
    "praesens": {
      "de": "er stößt",
      "lv": "тој турка"
    },
    "imperfektIndikativ": {
      "de": "er stieß",
      "lv": "тој турна"
    },
    "imperfektKonjunktiv": {
      "de": "er stieße",
      "lv": "тој би туркал"
    },
    "partizipVergangenheit": {
      "de": "gestoßen",
      "lv": "турнат"
    }
  },
  {
    "infinitiv": {
      "de": "streichen",
      "lv": "бојадисува • бојадиса / прецртува • прецрта"
    },
    "praesens": {
      "de": "er streicht",
      "lv": "тој бојадисува / прецртува"
    },
    "imperfektIndikativ": {
      "de": "er strich",
      "lv": "тој бојадиса / прецрта"
    },
    "imperfektKonjunktiv": {
      "de": "er striche",
      "lv": "тој би бојадисувал / прецртувал"
    },
    "partizipVergangenheit": {
      "de": "gestrichen",
      "lv": "бојадисан / прецртан"
    }
  },
  {
    "infinitiv": {
      "de": "streiten",
      "lv": "се кара • се скара"
    },
    "praesens": {
      "de": "er streitet",
      "lv": "тој се кара"
    },
    "imperfektIndikativ": {
      "de": "er stritt",
      "lv": "тој се скара"
    },
    "imperfektKonjunktiv": {
      "de": "er stritte",
      "lv": "тој би се карал"
    },
    "partizipVergangenheit": {
      "de": "gestritten",
      "lv": "се скарал"
    }
  },
  {
    "infinitiv": {
      "de": "tragen",
      "lv": "носи"
    },
    "praesens": {
      "de": "er trägt",
      "lv": "тој носи"
    },
    "imperfektIndikativ": {
      "de": "er trug",
      "lv": "тој носеше"
    },
    "imperfektKonjunktiv": {
      "de": "er trüge",
      "lv": "тој би носел"
    },
    "partizipVergangenheit": {
      "de": "getragen",
      "lv": "носен"
    }
  },
  {
    "infinitiv": {
      "de": "treffen",
      "lv": "среќава • сретне"
    },
    "praesens": {
      "de": "er trifft",
      "lv": "тој среќава"
    },
    "imperfektIndikativ": {
      "de": "er traf",
      "lv": "тој сретна"
    },
    "imperfektKonjunktiv": {
      "de": "er träfe",
      "lv": "тој би среќавал"
    },
    "partizipVergangenheit": {
      "de": "getroffen",
      "lv": "сретнат"
    }
  },
  {
    "infinitiv": {
      "de": "treiben",
      "lv": "тера"
    },
    "praesens": {
      "de": "er treibt",
      "lv": "тој тера"
    },
    "imperfektIndikativ": {
      "de": "er trieb",
      "lv": "тој тераше"
    },
    "imperfektKonjunktiv": {
      "de": "er triebe",
      "lv": "тој би терал"
    },
    "partizipVergangenheit": {
      "de": "getrieben",
      "lv": "теран"
    }
  },
  {
    "infinitiv": {
      "de": "treten",
      "lv": "стапува • стапи / оди"
    },
    "praesens": {
      "de": "er tritt",
      "lv": "тој стапува / оди"
    },
    "imperfektIndikativ": {
      "de": "er trat",
      "lv": "тој стапи / одеше"
    },
    "imperfektKonjunktiv": {
      "de": "er träte",
      "lv": "тој би стапувал / одел"
    },
    "partizipVergangenheit": {
      "de": "getreten (er ist)",
      "lv": "стапил / одел"
    }
  },
  {
    "infinitiv": {
      "de": "trinken",
      "lv": "пие • испие"
    },
    "praesens": {
      "de": "er trinkt",
      "lv": "тој пие"
    },
    "imperfektIndikativ": {
      "de": "er trank",
      "lv": "тој испи"
    },
    "imperfektKonjunktiv": {
      "de": "er tränke",
      "lv": "тој би пиел"
    },
    "partizipVergangenheit": {
      "de": "getrunken",
      "lv": "испиен"
    }
  },
  {
    "infinitiv": {
      "de": "trügen",
      "lv": "мами • измами"
    },
    "praesens": {
      "de": "er trügt",
      "lv": "тој мами"
    },
    "imperfektIndikativ": {
      "de": "er trog",
      "lv": "тој измами"
    },
    "imperfektKonjunktiv": {
      "de": "er tröge",
      "lv": "тој би мамел"
    },
    "partizipVergangenheit": {
      "de": "getrogen",
      "lv": "измамен"
    }
  },
  {
    "infinitiv": {
      "de": "tun",
      "lv": "прави • направи"
    },
    "praesens": {
      "de": "er tut",
      "lv": "тој прави"
    },
    "imperfektIndikativ": {
      "de": "er tat",
      "lv": "тој направи"
    },
    "imperfektKonjunktiv": {
      "de": "er täte",
      "lv": "тој би правел"
    },
    "partizipVergangenheit": {
      "de": "getan",
      "lv": "направен"
    }
  },
  {
    "infinitiv": {
      "de": "verderben",
      "lv": "расипува • расипе"
    },
    "praesens": {
      "de": "er verdirbt",
      "lv": "тој расипува"
    },
    "imperfektIndikativ": {
      "de": "er verdarb",
      "lv": "тој расипа"
    },
    "imperfektKonjunktiv": {
      "de": "er verdürbe",
      "lv": "тој би расипувал"
    },
    "partizipVergangenheit": {
      "de": "verdorben",
      "lv": "расипан"
    }
  },
  {
    "infinitiv": {
      "de": "verdrießen",
      "lv": "лути • налути"
    },
    "praesens": {
      "de": "er verdrießt",
      "lv": "тој лути"
    },
    "imperfektIndikativ": {
      "de": "er verdross",
      "lv": "тој налути"
    },
    "imperfektKonjunktiv": {
      "de": "er verdrösse",
      "lv": "тој би лутел"
    },
    "partizipVergangenheit": {
      "de": "verdrossen",
      "lv": "налутен"
    }
  },
  {
    "infinitiv": {
      "de": "vergessen",
      "lv": "заборава • заборави"
    },
    "praesens": {
      "de": "er vergisst",
      "lv": "тој заборава"
    },
    "imperfektIndikativ": {
      "de": "er vergaß",
      "lv": "тој заборави"
    },
    "imperfektKonjunktiv": {
      "de": "er vergäße",
      "lv": "тој би заборавал"
    },
    "partizipVergangenheit": {
      "de": "vergessen",
      "lv": "заборавен"
    }
  },
  {
    "infinitiv": {
      "de": "verlieren",
      "lv": "губи • изгуби"
    },
    "praesens": {
      "de": "er verliert",
      "lv": "тој губи"
    },
    "imperfektIndikativ": {
      "de": "er verlor",
      "lv": "тој изгуби"
    },
    "imperfektKonjunktiv": {
      "de": "er verlöre",
      "lv": "тој би губел"
    },
    "partizipVergangenheit": {
      "de": "verloren",
      "lv": "изгубен"
    }
  },
  {
    "infinitiv": {
      "de": "wachsen",
      "lv": "расте • порасне"
    },
    "praesens": {
      "de": "er wächst",
      "lv": "тој расте"
    },
    "imperfektIndikativ": {
      "de": "er wuchs",
      "lv": "тој порасна"
    },
    "imperfektKonjunktiv": {
      "de": "er wüchse",
      "lv": "тој би растел"
    },
    "partizipVergangenheit": {
      "de": "gewachsen (er ist)",
      "lv": "пораснал"
    }
  },
  {
    "infinitiv": {
      "de": "waschen",
      "lv": "мие • измие"
    },
    "praesens": {
      "de": "er wäscht",
      "lv": "тој мие"
    },
    "imperfektIndikativ": {
      "de": "er wusch",
      "lv": "тој изми"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsche",
      "lv": "тој би миел"
    },
    "partizipVergangenheit": {
      "de": "gewaschen",
      "lv": "измиен"
    }
  },
  {
    "infinitiv": {
      "de": "weben",
      "lv": "ткае • исткае"
    },
    "praesens": {
      "de": "er webt",
      "lv": "тој ткае"
    },
    "imperfektIndikativ": {
      "de": "er wob / er webte",
      "lv": "тој истка"
    },
    "imperfektKonjunktiv": {
      "de": "er wöbe / er webte",
      "lv": "тој би ткаел"
    },
    "partizipVergangenheit": {
      "de": "gewoben",
      "lv": "исткан"
    }
  },
  {
    "infinitiv": {
      "de": "weichen",
      "lv": "отстапува • отстапи"
    },
    "praesens": {
      "de": "er weicht",
      "lv": "тој отстапува"
    },
    "imperfektIndikativ": {
      "de": "er wich",
      "lv": "тој отстапи"
    },
    "imperfektKonjunktiv": {
      "de": "er wiche",
      "lv": "тој би отстапувал"
    },
    "partizipVergangenheit": {
      "de": "gewichen (er ist)",
      "lv": "отстапил"
    }
  },
  {
    "infinitiv": {
      "de": "weisen",
      "lv": "покажува • покаже"
    },
    "praesens": {
      "de": "er weist",
      "lv": "тој покажува"
    },
    "imperfektIndikativ": {
      "de": "er wies",
      "lv": "тој покажа"
    },
    "imperfektKonjunktiv": {
      "de": "er wiese",
      "lv": "тој би покажувал"
    },
    "partizipVergangenheit": {
      "de": "gewiesen",
      "lv": "покажан"
    }
  },
  {
    "infinitiv": {
      "de": "wenden",
      "lv": "свртува • сврти / превртува • преврти"
    },
    "praesens": {
      "de": "er wendet",
      "lv": "тој свртува / превртува"
    },
    "imperfektIndikativ": {
      "de": "er wandte / es wendete",
      "lv": "тој сврти / преврти"
    },
    "imperfektKonjunktiv": {
      "de": "er wendete",
      "lv": "тој би свртувал / превртувал"
    },
    "partizipVergangenheit": {
      "de": "gewandt / gewendet",
      "lv": "свртен / превртен"
    }
  },
  {
    "infinitiv": {
      "de": "werben",
      "lv": "бара рака • побара рака"
    },
    "praesens": {
      "de": "er wirbt",
      "lv": "тој бара рака"
    },
    "imperfektIndikativ": {
      "de": "er warb",
      "lv": "тој побара рака"
    },
    "imperfektKonjunktiv": {
      "de": "er würbe",
      "lv": "тој би барал рака"
    },
    "partizipVergangenheit": {
      "de": "geworben",
      "lv": "побарал рака"
    }
  },
  {
    "infinitiv": {
      "de": "werden",
      "lv": "станува • стане"
    },
    "praesens": {
      "de": "er wird",
      "lv": "тој станува"
    },
    "imperfektIndikativ": {
      "de": "er wurde",
      "lv": "тој стана"
    },
    "imperfektKonjunktiv": {
      "de": "er würde",
      "lv": "тој би станувал"
    },
    "partizipVergangenheit": {
      "de": "geworden",
      "lv": "станал"
    }
  },
  {
    "infinitiv": {
      "de": "werfen",
      "lv": "фрла • фрли"
    },
    "praesens": {
      "de": "er wirft",
      "lv": "тој фрла"
    },
    "imperfektIndikativ": {
      "de": "er warf",
      "lv": "тој фрли"
    },
    "imperfektKonjunktiv": {
      "de": "er würfe",
      "lv": "тој би фрлал"
    },
    "partizipVergangenheit": {
      "de": "geworfen",
      "lv": "фрлен"
    }
  },
  {
    "infinitiv": {
      "de": "wiegen",
      "lv": "мери • измери"
    },
    "praesens": {
      "de": "er wiegt",
      "lv": "тој мери"
    },
    "imperfektIndikativ": {
      "de": "er wog",
      "lv": "тој измери"
    },
    "imperfektKonjunktiv": {
      "de": "er wöge",
      "lv": "тој би мерел"
    },
    "partizipVergangenheit": {
      "de": "gewogen",
      "lv": "измерен"
    }
  },
  {
    "infinitiv": {
      "de": "winden",
      "lv": "вие"
    },
    "praesens": {
      "de": "er windet",
      "lv": "тој вие"
    },
    "imperfektIndikativ": {
      "de": "er wand",
      "lv": "тој виеше"
    },
    "imperfektKonjunktiv": {
      "de": "er wände",
      "lv": "тој би виел"
    },
    "partizipVergangenheit": {
      "de": "gewunden",
      "lv": "виен"
    }
  },
  {
    "infinitiv": {
      "de": "wissen",
      "lv": "знае"
    },
    "praesens": {
      "de": "er weiß",
      "lv": "тој знае"
    },
    "imperfektIndikativ": {
      "de": "er wusste",
      "lv": "тој знаеше"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsste",
      "lv": "тој би знаел"
    },
    "partizipVergangenheit": {
      "de": "gewusst",
      "lv": "знаен"
    }
  },
  {
    "infinitiv": {
      "de": "wollen",
      "lv": "сака"
    },
    "praesens": {
      "de": "er will",
      "lv": "тој сака"
    },
    "imperfektIndikativ": {
      "de": "er wollte",
      "lv": "тој сакаше"
    },
    "imperfektKonjunktiv": {
      "de": "er wollte",
      "lv": "тој би сакал"
    },
    "partizipVergangenheit": {
      "de": "gewollt",
      "lv": "сакал"
    }
  },
  {
    "infinitiv": {
      "de": "wringen",
      "lv": "цеди • исцеди"
    },
    "praesens": {
      "de": "er wringt",
      "lv": "тој цеди"
    },
    "imperfektIndikativ": {
      "de": "er wrang",
      "lv": "тој исцеди"
    },
    "imperfektKonjunktiv": {
      "de": "er wränge",
      "lv": "тој би цедел"
    },
    "partizipVergangenheit": {
      "de": "gewrungen",
      "lv": "исцеден"
    }
  },
  {
    "infinitiv": {
      "de": "zeihen",
      "lv": "обвинува • обвини"
    },
    "praesens": {
      "de": "er zeiht",
      "lv": "тој обвинува"
    },
    "imperfektIndikativ": {
      "de": "er zieh",
      "lv": "тој обвини"
    },
    "imperfektKonjunktiv": {
      "de": "er ziehe",
      "lv": "тој би обвинувал"
    },
    "partizipVergangenheit": {
      "de": "geziehen",
      "lv": "обвинет"
    }
  },
  {
    "infinitiv": {
      "de": "ziehen",
      "lv": "влече • повлече"
    },
    "praesens": {
      "de": "er zieht",
      "lv": "тој влече"
    },
    "imperfektIndikativ": {
      "de": "er zog",
      "lv": "тој повлече"
    },
    "imperfektKonjunktiv": {
      "de": "er zöge",
      "lv": "тој би влечел"
    },
    "partizipVergangenheit": {
      "de": "gezogen",
      "lv": "повлечен"
    }
  },
  {
    "infinitiv": {
      "de": "zwingen",
      "lv": "принудува • принуди"
    },
    "praesens": {
      "de": "er zwingt",
      "lv": "тој принудува"
    },
    "imperfektIndikativ": {
      "de": "er zwang",
      "lv": "тој принуди"
    },
    "imperfektKonjunktiv": {
      "de": "er zwänge",
      "lv": "тој би принудувал"
    },
    "partizipVergangenheit": {
      "de": "gezwungen",
      "lv": "принуден"
    }
  },
  {
    "infinitiv": {
      "de": "empfangen",
      "lv": "прима • прими"
    },
    "praesens": {
      "de": "er empfängt",
      "lv": "тој прима"
    },
    "imperfektIndikativ": {
      "de": "er empfing",
      "lv": "тој прими"
    },
    "imperfektKonjunktiv": {
      "de": "er empfinge",
      "lv": "тој би примал"
    },
    "partizipVergangenheit": {
      "de": "empfangen",
      "lv": "примен"
    }
  },
  {
    "infinitiv": {
      "de": "erwägen",
      "lv": "обмислува • обмисли"
    },
    "praesens": {
      "de": "er erwägt",
      "lv": "тој обмислува"
    },
    "imperfektIndikativ": {
      "de": "er erwog",
      "lv": "тој обмисли"
    },
    "imperfektKonjunktiv": {
      "de": "er erwöge",
      "lv": "тој би обмислувал"
    },
    "partizipVergangenheit": {
      "de": "erwogen",
      "lv": "обмислен"
    }
  },
  {
    "infinitiv": {
      "de": "fechten",
      "lv": "се бори"
    },
    "praesens": {
      "de": "er ficht",
      "lv": "тој се бори"
    },
    "imperfektIndikativ": {
      "de": "er focht",
      "lv": "тој се бореше"
    },
    "imperfektKonjunktiv": {
      "de": "er föchte",
      "lv": "тој би се борел"
    },
    "partizipVergangenheit": {
      "de": "gefochten",
      "lv": "се борел"
    }
  },
  {
    "infinitiv": {
      "de": "flechten",
      "lv": "плете • исплете"
    },
    "praesens": {
      "de": "er flicht",
      "lv": "тој плете"
    },
    "imperfektIndikativ": {
      "de": "er flocht",
      "lv": "тој исплете"
    },
    "imperfektKonjunktiv": {
      "de": "er flöchte",
      "lv": "тој би плетел"
    },
    "partizipVergangenheit": {
      "de": "geflochten",
      "lv": "исплетен"
    }
  },
  {
    "infinitiv": {
      "de": "hangen",
      "lv": "виси"
    },
    "praesens": {
      "de": "er hängt",
      "lv": "тој виси"
    },
    "imperfektIndikativ": {
      "de": "er hing",
      "lv": "тој висеше"
    },
    "imperfektKonjunktiv": {
      "de": "er hinge",
      "lv": "тој би висел"
    },
    "partizipVergangenheit": {
      "de": "gehangen",
      "lv": "висел"
    }
  },
  {
    "infinitiv": {
      "de": "spalten",
      "lv": "расцепува • расцепи"
    },
    "praesens": {
      "de": "er spaltet",
      "lv": "тој расцепува"
    },
    "imperfektIndikativ": {
      "de": "er spaltete",
      "lv": "тој расцепи"
    },
    "imperfektKonjunktiv": {
      "de": "er spaltete",
      "lv": "тој би расцепувал"
    },
    "partizipVergangenheit": {
      "de": "gespalten",
      "lv": "расцепен"
    }
  },
  {
    "infinitiv": {
      "de": "verzeihen",
      "lv": "простува • прости"
    },
    "praesens": {
      "de": "er verzeiht",
      "lv": "тој простува"
    },
    "imperfektIndikativ": {
      "de": "er verzieh",
      "lv": "тој прости"
    },
    "imperfektKonjunktiv": {
      "de": "er verziehe",
      "lv": "тој би простувал"
    },
    "partizipVergangenheit": {
      "de": "verziehen",
      "lv": "простен"
    }
  }
];

window.VERB_ENTRIES = VERB_ENTRIES;

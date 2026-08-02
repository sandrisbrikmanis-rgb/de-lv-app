const VERB_ENTRIES = [
  {
    "infinitiv": {
      "de": "backen",
      "lv": "Cept"
    },
    "praesens": {
      "de": "er bäckt",
      "lv": "Viņš cep"
    },
    "imperfektIndikativ": {
      "de": "er buk",
      "lv": "Viņš cepa"
    },
    "imperfektKonjunktiv": {
      "de": "er büke",
      "lv": "Viņš ceptu"
    },
    "partizipVergangenheit": {
      "de": "gebacken",
      "lv": "Cepts / izcepts"
    }
  },
  {
    "infinitiv": {
      "de": "befehlen",
      "lv": "Pavēlēt"
    },
    "praesens": {
      "de": "er befiehlt",
      "lv": "Viņš pavēl"
    },
    "imperfektIndikativ": {
      "de": "er befahl",
      "lv": "Viņš pavēlēja"
    },
    "imperfektKonjunktiv": {
      "de": "er beföhle",
      "lv": "Viņš pavēlētu"
    },
    "partizipVergangenheit": {
      "de": "befohlen",
      "lv": "Pavēlēts"
    }
  },
  {
    "infinitiv": {
      "de": "beginnen",
      "lv": "Sākt"
    },
    "praesens": {
      "de": "er beginnt",
      "lv": "Viņš sāk"
    },
    "imperfektIndikativ": {
      "de": "er begann",
      "lv": "Viņš sāka"
    },
    "imperfektKonjunktiv": {
      "de": "er begönne / er begänne",
      "lv": "Viņš sāktu"
    },
    "partizipVergangenheit": {
      "de": "begonnen",
      "lv": "Sākts"
    }
  },
  {
    "infinitiv": {
      "de": "beißen",
      "lv": "Kost"
    },
    "praesens": {
      "de": "er beißt",
      "lv": "Viņš kož"
    },
    "imperfektIndikativ": {
      "de": "er biss",
      "lv": "Viņš koda"
    },
    "imperfektKonjunktiv": {
      "de": "er bisse",
      "lv": "Viņš kostu"
    },
    "partizipVergangenheit": {
      "de": "gebissen",
      "lv": "Kosts / sakosts"
    }
  },
  {
    "infinitiv": {
      "de": "bergen",
      "lv": "Slēpt"
    },
    "praesens": {
      "de": "er birgt",
      "lv": "Viņš slēpj"
    },
    "imperfektIndikativ": {
      "de": "er barg",
      "lv": "Viņš slēpa"
    },
    "imperfektKonjunktiv": {
      "de": "er bürge / er bärge",
      "lv": "Viņš slēptu"
    },
    "partizipVergangenheit": {
      "de": "geborgen",
      "lv": "Paslēpts / paglābts"
    }
  },
  {
    "infinitiv": {
      "de": "bersten",
      "lv": "Plīst"
    },
    "praesens": {
      "de": "er birst",
      "lv": "Viņš plīst"
    },
    "imperfektIndikativ": {
      "de": "er barst / er borst",
      "lv": "Viņš plīsa"
    },
    "imperfektKonjunktiv": {
      "de": "er bärste / er börste",
      "lv": "Viņš plīstu"
    },
    "partizipVergangenheit": {
      "de": "geborsten (er ist)",
      "lv": "Saplīsis"
    }
  },
  {
    "infinitiv": {
      "de": "bewegen",
      "lv": "Pamudināt"
    },
    "praesens": {
      "de": "er bewegt",
      "lv": "Viņš pamudina"
    },
    "imperfektIndikativ": {
      "de": "er bewog",
      "lv": "Viņš pamudināja"
    },
    "imperfektKonjunktiv": {
      "de": "er bewöge",
      "lv": "Viņš pamudinātu"
    },
    "partizipVergangenheit": {
      "de": "bewogen",
      "lv": "Pamudināts"
    }
  },
  {
    "infinitiv": {
      "de": "biegen",
      "lv": "Locīt"
    },
    "praesens": {
      "de": "er biegt",
      "lv": "Viņš loka"
    },
    "imperfektIndikativ": {
      "de": "er bog",
      "lv": "Viņš locīja"
    },
    "imperfektKonjunktiv": {
      "de": "er böge",
      "lv": "Viņš locītu"
    },
    "partizipVergangenheit": {
      "de": "gebogen",
      "lv": "Locīts"
    }
  },
  {
    "infinitiv": {
      "de": "bieten",
      "lv": "Solīt"
    },
    "praesens": {
      "de": "er bietet",
      "lv": "Viņš sola"
    },
    "imperfektIndikativ": {
      "de": "er bot",
      "lv": "Viņš solīja"
    },
    "imperfektKonjunktiv": {
      "de": "er böte",
      "lv": "Viņš solītu"
    },
    "partizipVergangenheit": {
      "de": "geboten",
      "lv": "Solīts / piedāvāts"
    }
  },
  {
    "infinitiv": {
      "de": "binden",
      "lv": "Zeef"
    },
    "praesens": {
      "de": "er bindet",
      "lv": "Viņš sien"
    },
    "imperfektIndikativ": {
      "de": "er band",
      "lv": "Viņš sēja"
    },
    "imperfektKonjunktiv": {
      "de": "er bände",
      "lv": "Viņš sietu"
    },
    "partizipVergangenheit": {
      "de": "gebunden",
      "lv": "Siets"
    }
  },
  {
    "infinitiv": {
      "de": "bitten",
      "lv": "Lūgt"
    },
    "praesens": {
      "de": "er bittet",
      "lv": "Smeekt hij"
    },
    "imperfektIndikativ": {
      "de": "er bat",
      "lv": "Viņš lūdza"
    },
    "imperfektKonjunktiv": {
      "de": "er bäte",
      "lv": "Viņš lūgtu"
    },
    "partizipVergangenheit": {
      "de": "gebeten",
      "lv": "Lūgts"
    }
  },
  {
    "infinitiv": {
      "de": "blasen",
      "lv": "Pūst"
    },
    "praesens": {
      "de": "er bläst",
      "lv": "Viņš pūš"
    },
    "imperfektIndikativ": {
      "de": "er blies",
      "lv": "Viņš pūta"
    },
    "imperfektKonjunktiv": {
      "de": "er bliese",
      "lv": "Viņš pūstu"
    },
    "partizipVergangenheit": {
      "de": "geblasen",
      "lv": "Pūsts"
    }
  },
  {
    "infinitiv": {
      "de": "gären",
      "lv": "Rūgt"
    },
    "praesens": {
      "de": "es gärt",
      "lv": "Tas rūgst"
    },
    "imperfektIndikativ": {
      "de": "es gor / es gärte",
      "lv": "Tas rūga"
    },
    "imperfektKonjunktiv": {
      "de": "es göre / es gärte",
      "lv": "Tas rūgtu"
    },
    "partizipVergangenheit": {
      "de": "gegoren / gegärt",
      "lv": "Rūdzis"
    }
  },
  {
    "infinitiv": {
      "de": "gebären",
      "lv": "Dzemdēt"
    },
    "praesens": {
      "de": "sie gebiert",
      "lv": "Viņa dzemdē"
    },
    "imperfektIndikativ": {
      "de": "sie gebar",
      "lv": "Viņa dzemdēja"
    },
    "imperfektKonjunktiv": {
      "de": "sie gebäre",
      "lv": "Viņa dzemdētu"
    },
    "partizipVergangenheit": {
      "de": "geboren",
      "lv": "Dzemdēts / piedzimis"
    }
  },
  {
    "infinitiv": {
      "de": "gelingen",
      "lv": "Izdoties"
    },
    "praesens": {
      "de": "es gelingt",
      "lv": "Tas izdodas"
    },
    "imperfektIndikativ": {
      "de": "es gelang",
      "lv": "Tas izdevās"
    },
    "imperfektKonjunktiv": {
      "de": "es gelänge",
      "lv": "Tas izdotos"
    },
    "partizipVergangenheit": {
      "de": "gelungen (es ist)",
      "lv": "Izdevies"
    }
  },
  {
    "infinitiv": {
      "de": "gelten",
      "lv": "Noderēt"
    },
    "praesens": {
      "de": "er gilt",
      "lv": "Viņš der / ir spēkā"
    },
    "imperfektIndikativ": {
      "de": "er galt",
      "lv": "Viņš derēja / bija spēkā"
    },
    "imperfektKonjunktiv": {
      "de": "er gölte / es gälte",
      "lv": "Viņš derētu / tas būtu spēkā"
    },
    "partizipVergangenheit": {
      "de": "gegolten",
      "lv": "Derējis / bijis spēkā"
    }
  },
  {
    "infinitiv": {
      "de": "genesen",
      "lv": "Izveseļoties"
    },
    "praesens": {
      "de": "er genest",
      "lv": "Viņš izveseļojas"
    },
    "imperfektIndikativ": {
      "de": "er genas",
      "lv": "Viņš izveseļojās"
    },
    "imperfektKonjunktiv": {
      "de": "er genäse",
      "lv": "Viņš izveseļotos"
    },
    "partizipVergangenheit": {
      "de": "genesen (er ist)",
      "lv": "Izveseļojies"
    }
  },
  {
    "infinitiv": {
      "de": "genießen",
      "lv": "Baudīt"
    },
    "praesens": {
      "de": "er genießt",
      "lv": "Viņš bauda"
    },
    "imperfektIndikativ": {
      "de": "er genoss",
      "lv": "Viņš baudīja"
    },
    "imperfektKonjunktiv": {
      "de": "er genösse",
      "lv": "Viņš baudītu"
    },
    "partizipVergangenheit": {
      "de": "genossen",
      "lv": "Baudīts"
    }
  },
  {
    "infinitiv": {
      "de": "geschehen",
      "lv": "Notikt"
    },
    "praesens": {
      "de": "es geschieht",
      "lv": "Tas notiek"
    },
    "imperfektIndikativ": {
      "de": "es geschah",
      "lv": "Tas notika"
    },
    "imperfektKonjunktiv": {
      "de": "es geschähe",
      "lv": "Tas notiktu"
    },
    "partizipVergangenheit": {
      "de": "geschehen (es ist)",
      "lv": "Noticis"
    }
  },
  {
    "infinitiv": {
      "de": "gießen",
      "lv": "Liet"
    },
    "praesens": {
      "de": "er gießt",
      "lv": "Viņš lej"
    },
    "imperfektIndikativ": {
      "de": "er goss",
      "lv": "Viņš lēja"
    },
    "imperfektKonjunktiv": {
      "de": "er gösse",
      "lv": "Viņš lietu"
    },
    "partizipVergangenheit": {
      "de": "gegossen",
      "lv": "Liets"
    }
  },
  {
    "infinitiv": {
      "de": "gleichen",
      "lv": "Līdzināties"
    },
    "praesens": {
      "de": "er gleicht",
      "lv": "Viņš līdzinās"
    },
    "imperfektIndikativ": {
      "de": "er glich",
      "lv": "Viņš līdzinājās"
    },
    "imperfektKonjunktiv": {
      "de": "er gliche",
      "lv": "Viņš līdzinātos"
    },
    "partizipVergangenheit": {
      "de": "geglichen",
      "lv": "Līdzinājies"
    }
  },
  {
    "infinitiv": {
      "de": "gleiten",
      "lv": "Slīdēt"
    },
    "praesens": {
      "de": "er gleitet",
      "lv": "Viņš slīd"
    },
    "imperfektIndikativ": {
      "de": "er glitt",
      "lv": "Viņš slīdēja"
    },
    "imperfektKonjunktiv": {
      "de": "er glitte",
      "lv": "Viņš slīdētu"
    },
    "partizipVergangenheit": {
      "de": "geglitten (er ist)",
      "lv": "Gleed uit"
    }
  },
  {
    "infinitiv": {
      "de": "glimmen",
      "lv": "Kvēlot"
    },
    "praesens": {
      "de": "er glimmt",
      "lv": "Viņš kvēlo"
    },
    "imperfektIndikativ": {
      "de": "er glimmte / glomm",
      "lv": "Viņš kvēloja"
    },
    "imperfektKonjunktiv": {
      "de": "er glimmte",
      "lv": "Viņš kvēlotu"
    },
    "partizipVergangenheit": {
      "de": "geglimmt / geglommen",
      "lv": "Kvēlojis"
    }
  },
  {
    "infinitiv": {
      "de": "graben",
      "lv": "Rakt"
    },
    "praesens": {
      "de": "er gräbt",
      "lv": "Viņš rok"
    },
    "imperfektIndikativ": {
      "de": "er grub",
      "lv": "Viņš raka"
    },
    "imperfektKonjunktiv": {
      "de": "er grübe",
      "lv": "Viņš raktu"
    },
    "partizipVergangenheit": {
      "de": "gegraben",
      "lv": "Rakts"
    }
  },
  {
    "infinitiv": {
      "de": "greifen",
      "lv": "Ķert"
    },
    "praesens": {
      "de": "er greift",
      "lv": "Viņš ķer"
    },
    "imperfektIndikativ": {
      "de": "er griff",
      "lv": "Viņš ķēra"
    },
    "imperfektKonjunktiv": {
      "de": "er griffe",
      "lv": "Viņš ķertu"
    },
    "partizipVergangenheit": {
      "de": "gegriffen",
      "lv": "Ķerts / satverts"
    }
  },
  {
    "infinitiv": {
      "de": "hauen",
      "lv": "Cirst"
    },
    "praesens": {
      "de": "er haut",
      "lv": "Viņš cērt"
    },
    "imperfektIndikativ": {
      "de": "er hieb",
      "lv": "Viņš cirta"
    },
    "imperfektKonjunktiv": {
      "de": "er hiebe",
      "lv": "Viņš cirstu"
    },
    "partizipVergangenheit": {
      "de": "gehauen",
      "lv": "Cirsts"
    }
  },
  {
    "infinitiv": {
      "de": "heben",
      "lv": "Celt"
    },
    "praesens": {
      "de": "er hebt",
      "lv": "Viņš ceļ"
    },
    "imperfektIndikativ": {
      "de": "er hob",
      "lv": "Hij bracht"
    },
    "imperfektKonjunktiv": {
      "de": "er höbe",
      "lv": "Viņš celtu"
    },
    "partizipVergangenheit": {
      "de": "gehoben",
      "lv": "Celts"
    }
  },
  {
    "infinitiv": {
      "de": "kennen",
      "lv": "Pazīt / zināt"
    },
    "praesens": {
      "de": "er kennt",
      "lv": "Viņš pazīst"
    },
    "imperfektIndikativ": {
      "de": "kannte",
      "lv": "Pazina"
    },
    "imperfektKonjunktiv": {
      "de": "kannte",
      "lv": "Pazina"
    },
    "partizipVergangenheit": {
      "de": "gekannt",
      "lv": "Pazinis"
    }
  },
  {
    "infinitiv": {
      "de": "klingen",
      "lv": "Skanēt"
    },
    "praesens": {
      "de": "er klingt",
      "lv": "Viņš skan"
    },
    "imperfektIndikativ": {
      "de": "er klang",
      "lv": "Viņš skanēja"
    },
    "imperfektKonjunktiv": {
      "de": "er klänge",
      "lv": "Viņš skanētu"
    },
    "partizipVergangenheit": {
      "de": "geklungen",
      "lv": "Skanējis"
    }
  },
  {
    "infinitiv": {
      "de": "kneifen",
      "lv": "Kniebt"
    },
    "praesens": {
      "de": "er kneift",
      "lv": "Viņš kniebj"
    },
    "imperfektIndikativ": {
      "de": "er kniff",
      "lv": "Viņš knieba"
    },
    "imperfektKonjunktiv": {
      "de": "er kniffe",
      "lv": "Viņš kniebtu"
    },
    "partizipVergangenheit": {
      "de": "gekniffen",
      "lv": "Kniebts"
    }
  },
  {
    "infinitiv": {
      "de": "bleiben",
      "lv": "Palikt"
    },
    "praesens": {
      "de": "er bleibt",
      "lv": "Viņš paliek"
    },
    "imperfektIndikativ": {
      "de": "er blieb",
      "lv": "Viņš palika"
    },
    "imperfektKonjunktiv": {
      "de": "er bliebe",
      "lv": "Viņš paliktu"
    },
    "partizipVergangenheit": {
      "de": "geblieben (er ist)",
      "lv": "Palicis"
    }
  },
  {
    "infinitiv": {
      "de": "bleichen",
      "lv": "Witter maken"
    },
    "praesens": {
      "de": "er bleicht",
      "lv": "Viņš balina"
    },
    "imperfektIndikativ": {
      "de": "blich",
      "lv": "Balināja"
    },
    "imperfektKonjunktiv": {
      "de": "blich",
      "lv": "Balināja"
    },
    "partizipVergangenheit": {
      "de": "geblichen",
      "lv": "Balināts"
    }
  },
  {
    "infinitiv": {
      "de": "braten",
      "lv": "Cept"
    },
    "praesens": {
      "de": "er brät",
      "lv": "Viņš cep"
    },
    "imperfektIndikativ": {
      "de": "er briet",
      "lv": "Viņš cepa"
    },
    "imperfektKonjunktiv": {
      "de": "er briete",
      "lv": "Viņš ceptu"
    },
    "partizipVergangenheit": {
      "de": "gebraten",
      "lv": "Cepts / izcepts"
    }
  },
  {
    "infinitiv": {
      "de": "brechen",
      "lv": "Lauzt"
    },
    "praesens": {
      "de": "er bricht",
      "lv": "Viņš lauž"
    },
    "imperfektIndikativ": {
      "de": "er brach",
      "lv": "Hij brak"
    },
    "imperfektKonjunktiv": {
      "de": "er bräche",
      "lv": "Viņš lauztu"
    },
    "partizipVergangenheit": {
      "de": "gebrochen",
      "lv": "Lauzts / salauzts"
    }
  },
  {
    "infinitiv": {
      "de": "brennen",
      "lv": "Degt"
    },
    "praesens": {
      "de": "er brennt",
      "lv": "Viņš deg"
    },
    "imperfektIndikativ": {
      "de": "brannte",
      "lv": "Dega"
    },
    "imperfektKonjunktiv": {
      "de": "brannte",
      "lv": "Dega"
    },
    "partizipVergangenheit": {
      "de": "gebrannt",
      "lv": "Dedzis"
    }
  },
  {
    "infinitiv": {
      "de": "bringen",
      "lv": "Nest"
    },
    "praesens": {
      "de": "er bringt",
      "lv": "Viņš nes"
    },
    "imperfektIndikativ": {
      "de": "er brachte",
      "lv": "Viņš nesa"
    },
    "imperfektKonjunktiv": {
      "de": "er brächte",
      "lv": "Viņš nestu"
    },
    "partizipVergangenheit": {
      "de": "gebracht",
      "lv": "Nests / atnests"
    }
  },
  {
    "infinitiv": {
      "de": "denken",
      "lv": "Domāt"
    },
    "praesens": {
      "de": "er denkt",
      "lv": "Viņš domā"
    },
    "imperfektIndikativ": {
      "de": "er dachte",
      "lv": "Viņš domāja"
    },
    "imperfektKonjunktiv": {
      "de": "er dächte",
      "lv": "Viņš domātu"
    },
    "partizipVergangenheit": {
      "de": "gedacht",
      "lv": "Domāts"
    }
  },
  {
    "infinitiv": {
      "de": "dingen",
      "lv": "Nolīgt / vienoties"
    },
    "praesens": {
      "de": "er dingt",
      "lv": "Viņš nolīgst"
    },
    "imperfektIndikativ": {
      "de": "dingte",
      "lv": "Nolīga"
    },
    "imperfektKonjunktiv": {
      "de": "dingte",
      "lv": "Nolīga"
    },
    "partizipVergangenheit": {
      "de": "gedungen",
      "lv": "Nolīgts"
    }
  },
  {
    "infinitiv": {
      "de": "dreschen",
      "lv": "Kult"
    },
    "praesens": {
      "de": "er drischt",
      "lv": "Viņš kuļ"
    },
    "imperfektIndikativ": {
      "de": "er drasch / er drosch",
      "lv": "Viņš kūla"
    },
    "imperfektKonjunktiv": {
      "de": "er dräsche / er drösche",
      "lv": "Viņš kultu"
    },
    "partizipVergangenheit": {
      "de": "gedroschen",
      "lv": "Kults"
    }
  },
  {
    "infinitiv": {
      "de": "dringen",
      "lv": "Ielauzties"
    },
    "praesens": {
      "de": "er dringt",
      "lv": "Viņš ielaužas"
    },
    "imperfektIndikativ": {
      "de": "er drang",
      "lv": "Viņš ielauzās"
    },
    "imperfektKonjunktiv": {
      "de": "er dränge",
      "lv": "Viņš ielauztos"
    },
    "partizipVergangenheit": {
      "de": "gedrungen (er ist)",
      "lv": "Ielauzies"
    }
  },
  {
    "infinitiv": {
      "de": "dünken",
      "lv": "Šķist"
    },
    "praesens": {
      "de": "es dünkt",
      "lv": "Tas šķiet"
    },
    "imperfektIndikativ": {
      "de": "deuchte",
      "lv": "Šķita"
    },
    "imperfektKonjunktiv": {
      "de": "deuchte",
      "lv": "Šķita"
    },
    "partizipVergangenheit": {
      "de": "gedünkt",
      "lv": "Šķitis"
    }
  },
  {
    "infinitiv": {
      "de": "dürfen",
      "lv": "Drīkstēt"
    },
    "praesens": {
      "de": "er darf",
      "lv": "Viņš drīkst"
    },
    "imperfektIndikativ": {
      "de": "durfte",
      "lv": "Drīkstēja"
    },
    "imperfektKonjunktiv": {
      "de": "durfte",
      "lv": "Drīkstēja"
    },
    "partizipVergangenheit": {
      "de": "gedurft",
      "lv": "Drīkstējis"
    }
  },
  {
    "infinitiv": {
      "de": "empfehlen",
      "lv": "Ieteikt"
    },
    "praesens": {
      "de": "er empfiehlt",
      "lv": "Viņš iesaka"
    },
    "imperfektIndikativ": {
      "de": "er empfahl",
      "lv": "Viņš ieteica"
    },
    "imperfektKonjunktiv": {
      "de": "er empfähle / er empföhle",
      "lv": "Viņš ieteiktu"
    },
    "partizipVergangenheit": {
      "de": "empfohlen",
      "lv": "Ieteikts"
    }
  },
  {
    "infinitiv": {
      "de": "empfinden",
      "lv": "Sajust"
    },
    "praesens": {
      "de": "er empfindet",
      "lv": "Viņš sajūt"
    },
    "imperfektIndikativ": {
      "de": "er empfand",
      "lv": "Viņš sajuta"
    },
    "imperfektKonjunktiv": {
      "de": "er empfände",
      "lv": "Viņš sajustu"
    },
    "partizipVergangenheit": {
      "de": "empfunden",
      "lv": "Sajusts"
    }
  },
  {
    "infinitiv": {
      "de": "erlöschen",
      "lv": "Izdzist"
    },
    "praesens": {
      "de": "er erlischt",
      "lv": "Hij gaat naar buiten"
    },
    "imperfektIndikativ": {
      "de": "er erlosch",
      "lv": "Viņš izdzisa"
    },
    "imperfektKonjunktiv": {
      "de": "er erlösche",
      "lv": "Viņš izdzistu"
    },
    "partizipVergangenheit": {
      "de": "erloschen (er ist)",
      "lv": "Izdzisis"
    }
  },
  {
    "infinitiv": {
      "de": "erschrecken",
      "lv": "Sabīties"
    },
    "praesens": {
      "de": "er erschrickt",
      "lv": "Viņš sabīstas"
    },
    "imperfektIndikativ": {
      "de": "er erschrak",
      "lv": "Viņš sabijās"
    },
    "imperfektKonjunktiv": {
      "de": "er erschräke",
      "lv": "Viņš sabītos"
    },
    "partizipVergangenheit": {
      "de": "erschrocken (er ist)",
      "lv": "Sabijies"
    }
  },
  {
    "infinitiv": {
      "de": "essen",
      "lv": "Ēst"
    },
    "praesens": {
      "de": "er isst",
      "lv": "Viņš ēd"
    },
    "imperfektIndikativ": {
      "de": "er ass",
      "lv": "Viņš ēda"
    },
    "imperfektKonjunktiv": {
      "de": "er äße",
      "lv": "Viņš ēstu"
    },
    "partizipVergangenheit": {
      "de": "gegessen",
      "lv": "Ēsts / apēsts"
    }
  },
  {
    "infinitiv": {
      "de": "fahren",
      "lv": "Braukt"
    },
    "praesens": {
      "de": "er fährt",
      "lv": "Viņš brauc"
    },
    "imperfektIndikativ": {
      "de": "er fuhr",
      "lv": "Viņš brauca"
    },
    "imperfektKonjunktiv": {
      "de": "er führe",
      "lv": "Viņš brauktu"
    },
    "partizipVergangenheit": {
      "de": "gefahren (er ist)",
      "lv": "Braucis / aizbraucis"
    }
  },
  {
    "infinitiv": {
      "de": "fallen",
      "lv": "Krist"
    },
    "praesens": {
      "de": "er fällt",
      "lv": "Viņš krīt"
    },
    "imperfektIndikativ": {
      "de": "er fiel",
      "lv": "Viņš krita"
    },
    "imperfektKonjunktiv": {
      "de": "er fiele",
      "lv": "Viņš kristu"
    },
    "partizipVergangenheit": {
      "de": "gefallen (er ist)",
      "lv": "Kritis"
    }
  },
  {
    "infinitiv": {
      "de": "fangen",
      "lv": "Ķert"
    },
    "praesens": {
      "de": "er fängt",
      "lv": "Viņš ķer"
    },
    "imperfektIndikativ": {
      "de": "er fing",
      "lv": "Viņš ķēra"
    },
    "imperfektKonjunktiv": {
      "de": "er finge",
      "lv": "Viņš ķertu"
    },
    "partizipVergangenheit": {
      "de": "gefangen",
      "lv": "Ķerts / noķerts"
    }
  },
  {
    "infinitiv": {
      "de": "finden",
      "lv": "Atrast"
    },
    "praesens": {
      "de": "er findet",
      "lv": "Viņš atrod"
    },
    "imperfektIndikativ": {
      "de": "er fand",
      "lv": "Viņš atrada"
    },
    "imperfektKonjunktiv": {
      "de": "er fände",
      "lv": "Hij zou vinden"
    },
    "partizipVergangenheit": {
      "de": "gefunden",
      "lv": "Atrasts"
    }
  },
  {
    "infinitiv": {
      "de": "fliegen",
      "lv": "Laisties"
    },
    "praesens": {
      "de": "er fliegt",
      "lv": "Viņš lido"
    },
    "imperfektIndikativ": {
      "de": "er flog",
      "lv": "Viņš lidoja"
    },
    "imperfektKonjunktiv": {
      "de": "er flöge",
      "lv": "Viņš lidotu"
    },
    "partizipVergangenheit": {
      "de": "geflogen (er ist)",
      "lv": "Lidojis"
    }
  },
  {
    "infinitiv": {
      "de": "fliehen",
      "lv": "Bēgt"
    },
    "praesens": {
      "de": "er flieht",
      "lv": "Viņš bēg"
    },
    "imperfektIndikativ": {
      "de": "er floh",
      "lv": "Viņš bēga"
    },
    "imperfektKonjunktiv": {
      "de": "er flöhe",
      "lv": "Viņš bēgtu"
    },
    "partizipVergangenheit": {
      "de": "geflohen (er ist)",
      "lv": "Aizbēdzis"
    }
  },
  {
    "infinitiv": {
      "de": "fließen",
      "lv": "Tecēt"
    },
    "praesens": {
      "de": "er fließt",
      "lv": "Viņš tek"
    },
    "imperfektIndikativ": {
      "de": "er floss",
      "lv": "Hij rende"
    },
    "imperfektKonjunktiv": {
      "de": "er flösse",
      "lv": "Viņš tecētu"
    },
    "partizipVergangenheit": {
      "de": "geflossen (er ist)",
      "lv": "Tecējis"
    }
  },
  {
    "infinitiv": {
      "de": "fressen",
      "lv": "Ēst, rīt"
    },
    "praesens": {
      "de": "er frisst",
      "lv": "Viņš ēd / rij"
    },
    "imperfektIndikativ": {
      "de": "er frass",
      "lv": "Viņš ēda / rija"
    },
    "imperfektKonjunktiv": {
      "de": "er fräße",
      "lv": "Viņš ēstu / rītu"
    },
    "partizipVergangenheit": {
      "de": "gefressen",
      "lv": "Apēsts / rīts"
    }
  },
  {
    "infinitiv": {
      "de": "frieren",
      "lv": "Salt"
    },
    "praesens": {
      "de": "er friert",
      "lv": "Viņš salst"
    },
    "imperfektIndikativ": {
      "de": "er fror",
      "lv": "Viņš sala"
    },
    "imperfektKonjunktiv": {
      "de": "er fröre",
      "lv": "Viņš saltu"
    },
    "partizipVergangenheit": {
      "de": "gefroren",
      "lv": "Salis"
    }
  },
  {
    "infinitiv": {
      "de": "geben",
      "lv": "Dot"
    },
    "praesens": {
      "de": "er gibt",
      "lv": "Viņš dod"
    },
    "imperfektIndikativ": {
      "de": "er gab",
      "lv": "Viņš deva"
    },
    "imperfektKonjunktiv": {
      "de": "er gäbe",
      "lv": "Viņš dotu"
    },
    "partizipVergangenheit": {
      "de": "gegeben",
      "lv": "Dots"
    }
  },
  {
    "infinitiv": {
      "de": "gedeihen",
      "lv": "Izdoties"
    },
    "praesens": {
      "de": "er gedeiht",
      "lv": "Viņam izdodas"
    },
    "imperfektIndikativ": {
      "de": "er gedieh",
      "lv": "Viņam izdevās"
    },
    "imperfektKonjunktiv": {
      "de": "er gediehe",
      "lv": "Viņam izdotos"
    },
    "partizipVergangenheit": {
      "de": "gediehen (er ist)",
      "lv": "Izdevies"
    }
  },
  {
    "infinitiv": {
      "de": "gehen",
      "lv": "Iet"
    },
    "praesens": {
      "de": "er geht",
      "lv": "Viņš iet"
    },
    "imperfektIndikativ": {
      "de": "er ging",
      "lv": "Viņš gāja"
    },
    "imperfektKonjunktiv": {
      "de": "er ginge",
      "lv": "Viņš ietu"
    },
    "partizipVergangenheit": {
      "de": "gegangen (er ist)",
      "lv": "Gājis"
    }
  },
  {
    "infinitiv": {
      "de": "gewinnen",
      "lv": "Iegūt"
    },
    "praesens": {
      "de": "er gewinnt",
      "lv": "Hij krijgt"
    },
    "imperfektIndikativ": {
      "de": "er gewann",
      "lv": "Viņš ieguva"
    },
    "imperfektKonjunktiv": {
      "de": "er gewönne / er gewänne",
      "lv": "Viņš iegūtu"
    },
    "partizipVergangenheit": {
      "de": "gewonnen",
      "lv": "Iegūts"
    }
  },
  {
    "infinitiv": {
      "de": "haben",
      "lv": "Būt / piederēt"
    },
    "praesens": {
      "de": "er hat",
      "lv": "Viņam ir"
    },
    "imperfektIndikativ": {
      "de": "hatte",
      "lv": "Bija"
    },
    "imperfektKonjunktiv": {
      "de": "hatte",
      "lv": "Bija"
    },
    "partizipVergangenheit": {
      "de": "gehabt",
      "lv": "Bijis"
    }
  },
  {
    "infinitiv": {
      "de": "halten",
      "lv": "Turēt"
    },
    "praesens": {
      "de": "er hält",
      "lv": "Viņš tur"
    },
    "imperfektIndikativ": {
      "de": "er hielt",
      "lv": "Viņš turēja"
    },
    "imperfektKonjunktiv": {
      "de": "er hielte",
      "lv": "Viņš turētu"
    },
    "partizipVergangenheit": {
      "de": "gehalten",
      "lv": "Turēts"
    }
  },
  {
    "infinitiv": {
      "de": "heißen",
      "lv": "Saukt"
    },
    "praesens": {
      "de": "er heißt",
      "lv": "Viņš sauc / viņu sauc"
    },
    "imperfektIndikativ": {
      "de": "er hieß",
      "lv": "Viņš sauca / viņu sauca"
    },
    "imperfektKonjunktiv": {
      "de": "er hieße",
      "lv": "Viņš sauktu / viņu sauktu"
    },
    "partizipVergangenheit": {
      "de": "geheißen",
      "lv": "Saukts"
    }
  },
  {
    "infinitiv": {
      "de": "helfen",
      "lv": "Palīdzēt"
    },
    "praesens": {
      "de": "er hilft",
      "lv": "Viņš palīdz"
    },
    "imperfektIndikativ": {
      "de": "er half",
      "lv": "Viņš palīdzēja"
    },
    "imperfektKonjunktiv": {
      "de": "er hülfe / er hälfe",
      "lv": "Viņš palīdzētu"
    },
    "partizipVergangenheit": {
      "de": "geholfen",
      "lv": "Palīdzēts"
    }
  },
  {
    "infinitiv": {
      "de": "kommen",
      "lv": "Nākt"
    },
    "praesens": {
      "de": "er kommt",
      "lv": "Viņš nāk"
    },
    "imperfektIndikativ": {
      "de": "er kam",
      "lv": "Viņš nāca"
    },
    "imperfektKonjunktiv": {
      "de": "er käme",
      "lv": "Viņš nāktu"
    },
    "partizipVergangenheit": {
      "de": "gekommen (er ist)",
      "lv": "Atnācis"
    }
  },
  {
    "infinitiv": {
      "de": "können",
      "lv": "Varēt"
    },
    "praesens": {
      "de": "er kann",
      "lv": "Viņš var"
    },
    "imperfektIndikativ": {
      "de": "konnte",
      "lv": "Varēja"
    },
    "imperfektKonjunktiv": {
      "de": "konnte",
      "lv": "Varēja"
    },
    "partizipVergangenheit": {
      "de": "gekonnt",
      "lv": "Varējis"
    }
  },
  {
    "infinitiv": {
      "de": "kriechen",
      "lv": "Līst"
    },
    "praesens": {
      "de": "er kriecht",
      "lv": "Viņš lien"
    },
    "imperfektIndikativ": {
      "de": "er kroch",
      "lv": "Viņš līda"
    },
    "imperfektKonjunktiv": {
      "de": "er kröche",
      "lv": "Viņš līstu"
    },
    "partizipVergangenheit": {
      "de": "gekrochen (er ist)",
      "lv": "Līdis"
    }
  },
  {
    "infinitiv": {
      "de": "laden",
      "lv": "Kraut, ielūgt"
    },
    "praesens": {
      "de": "er lädt",
      "lv": "Viņš krauj / ielūdz"
    },
    "imperfektIndikativ": {
      "de": "er lud",
      "lv": "Viņš krāva / ielūdza"
    },
    "imperfektKonjunktiv": {
      "de": "er lüde",
      "lv": "Viņš krautu / ielūgtu"
    },
    "partizipVergangenheit": {
      "de": "geladen",
      "lv": "Krauts / ielūgts"
    }
  },
  {
    "infinitiv": {
      "de": "lassen",
      "lv": "Likt, ļaut"
    },
    "praesens": {
      "de": "er lässt",
      "lv": "Viņš liek / ļauj"
    },
    "imperfektIndikativ": {
      "de": "er ließ",
      "lv": "Hij heeft besteld/toegestaan"
    },
    "imperfektKonjunktiv": {
      "de": "er ließe",
      "lv": "Viņš liktu / ļautu"
    },
    "partizipVergangenheit": {
      "de": "gelassen",
      "lv": "Likts / ļauts"
    }
  },
  {
    "infinitiv": {
      "de": "laufen",
      "lv": "Skriet"
    },
    "praesens": {
      "de": "er läuft",
      "lv": "Viņš skrien"
    },
    "imperfektIndikativ": {
      "de": "er lief",
      "lv": "Viņš skrēja"
    },
    "imperfektKonjunktiv": {
      "de": "er liefe",
      "lv": "Viņš skrietu"
    },
    "partizipVergangenheit": {
      "de": "gelaufen (er ist)",
      "lv": "Skrējis"
    }
  },
  {
    "infinitiv": {
      "de": "leiden",
      "lv": "Ciest"
    },
    "praesens": {
      "de": "er leidet",
      "lv": "Viņš cieš"
    },
    "imperfektIndikativ": {
      "de": "er litt",
      "lv": "Viņš cieta"
    },
    "imperfektKonjunktiv": {
      "de": "er litte",
      "lv": "Viņš ciestu"
    },
    "partizipVergangenheit": {
      "de": "gelitten",
      "lv": "Ciests"
    }
  },
  {
    "infinitiv": {
      "de": "leihen",
      "lv": "Aizdot / aizņemties"
    },
    "praesens": {
      "de": "er leiht",
      "lv": "Viņš aizdod / aizņemas"
    },
    "imperfektIndikativ": {
      "de": "er lieh",
      "lv": "Viņš aizdeva / aizņēmās"
    },
    "imperfektKonjunktiv": {
      "de": "er liehe",
      "lv": "Viņš aizdotu / aizņemtos"
    },
    "partizipVergangenheit": {
      "de": "geliehen",
      "lv": "Aizdots / aizņemts"
    }
  },
  {
    "infinitiv": {
      "de": "lesen",
      "lv": "Lasīt"
    },
    "praesens": {
      "de": "er liest",
      "lv": "Viņš lasa"
    },
    "imperfektIndikativ": {
      "de": "er las",
      "lv": "Viņš lasīja"
    },
    "imperfektKonjunktiv": {
      "de": "er läse",
      "lv": "Viņš lasītu"
    },
    "partizipVergangenheit": {
      "de": "gelesen",
      "lv": "Lezen"
    }
  },
  {
    "infinitiv": {
      "de": "liegen",
      "lv": "Gulēt"
    },
    "praesens": {
      "de": "er liegt",
      "lv": "Viņš guļ"
    },
    "imperfektIndikativ": {
      "de": "er lag",
      "lv": "Viņš gulēja"
    },
    "imperfektKonjunktiv": {
      "de": "er läge",
      "lv": "Hij zou slapen"
    },
    "partizipVergangenheit": {
      "de": "gelegen",
      "lv": "Gulēts"
    }
  },
  {
    "infinitiv": {
      "de": "lügen",
      "lv": "Melot"
    },
    "praesens": {
      "de": "er lügt",
      "lv": "Viņš melo"
    },
    "imperfektIndikativ": {
      "de": "er log",
      "lv": "Viņš meloja"
    },
    "imperfektKonjunktiv": {
      "de": "er löge",
      "lv": "Viņš melotu"
    },
    "partizipVergangenheit": {
      "de": "gelogen",
      "lv": "Melots"
    }
  },
  {
    "infinitiv": {
      "de": "mahlen",
      "lv": "Malt"
    },
    "praesens": {
      "de": "er mahlt",
      "lv": "Viņš maļ"
    },
    "imperfektIndikativ": {
      "de": "er mahlte",
      "lv": "Viņš mala"
    },
    "imperfektKonjunktiv": {
      "de": "er malte",
      "lv": "Viņš maltu"
    },
    "partizipVergangenheit": {
      "de": "gemahlen",
      "lv": "Malts"
    }
  },
  {
    "infinitiv": {
      "de": "meiden",
      "lv": "Voorkomen"
    },
    "praesens": {
      "de": "er meidet",
      "lv": "Viņš izvairās"
    },
    "imperfektIndikativ": {
      "de": "er mied",
      "lv": "Viņš izvairījās"
    },
    "imperfektKonjunktiv": {
      "de": "er miede",
      "lv": "Viņš izvairītos"
    },
    "partizipVergangenheit": {
      "de": "gemieden",
      "lv": "Izvairīts"
    }
  },
  {
    "infinitiv": {
      "de": "melken",
      "lv": "Slaukt"
    },
    "praesens": {
      "de": "er milkt / er melkt",
      "lv": "Viņš slauc"
    },
    "imperfektIndikativ": {
      "de": "er molk / er melkte",
      "lv": "Viņš slauca"
    },
    "imperfektKonjunktiv": {
      "de": "er mölke / er melkte",
      "lv": "Viņš slauktu"
    },
    "partizipVergangenheit": {
      "de": "gemolken / gemelkt",
      "lv": "Slaukts"
    }
  },
  {
    "infinitiv": {
      "de": "messen",
      "lv": "Mērīt"
    },
    "praesens": {
      "de": "er misst",
      "lv": "Viņš mēra"
    },
    "imperfektIndikativ": {
      "de": "er mass",
      "lv": "Viņš mērīja"
    },
    "imperfektKonjunktiv": {
      "de": "er mäße",
      "lv": "Viņš mērītu"
    },
    "partizipVergangenheit": {
      "de": "gemessen",
      "lv": "Mērīts"
    }
  },
  {
    "infinitiv": {
      "de": "misslingen",
      "lv": "Neizdoties"
    },
    "praesens": {
      "de": "es misslingt",
      "lv": "Tas neizdodas"
    },
    "imperfektIndikativ": {
      "de": "misslang",
      "lv": "Neizdevās"
    },
    "imperfektKonjunktiv": {
      "de": "misslang",
      "lv": "Neizdevās"
    },
    "partizipVergangenheit": {
      "de": "misslungen",
      "lv": "Neizdevies"
    }
  },
  {
    "infinitiv": {
      "de": "mögen",
      "lv": "Patikt"
    },
    "praesens": {
      "de": "er mag",
      "lv": "Viņam patīk"
    },
    "imperfektIndikativ": {
      "de": "mochte",
      "lv": "Vond het leuk"
    },
    "imperfektKonjunktiv": {
      "de": "mochte",
      "lv": "Vond het leuk"
    },
    "partizipVergangenheit": {
      "de": "gemocht",
      "lv": "Paticis"
    }
  },
  {
    "infinitiv": {
      "de": "müssen",
      "lv": "Nodig hebben"
    },
    "praesens": {
      "de": "er muss",
      "lv": "Viņam vajag"
    },
    "imperfektIndikativ": {
      "de": "musste",
      "lv": "Vajadzēja"
    },
    "imperfektKonjunktiv": {
      "de": "musste",
      "lv": "Vajadzēja"
    },
    "partizipVergangenheit": {
      "de": "gemusst",
      "lv": "Vajadzējis"
    }
  },
  {
    "infinitiv": {
      "de": "nehmen",
      "lv": "Ņemt"
    },
    "praesens": {
      "de": "er nimmt",
      "lv": "Viņš ņem"
    },
    "imperfektIndikativ": {
      "de": "er nahm",
      "lv": "Viņš ņēma"
    },
    "imperfektKonjunktiv": {
      "de": "er nähme",
      "lv": "Viņš ņemtu"
    },
    "partizipVergangenheit": {
      "de": "genommen",
      "lv": "Ņemts"
    }
  },
  {
    "infinitiv": {
      "de": "nennen",
      "lv": "Nosaukt"
    },
    "praesens": {
      "de": "er nennt",
      "lv": "Viņš nosauc"
    },
    "imperfektIndikativ": {
      "de": "er nannte",
      "lv": "Viņš nosauca"
    },
    "imperfektKonjunktiv": {
      "de": "er nennte",
      "lv": "Viņš nosauktu"
    },
    "partizipVergangenheit": {
      "de": "genannt",
      "lv": "Nosaukts"
    }
  },
  {
    "infinitiv": {
      "de": "pfeifen",
      "lv": "Svilpot"
    },
    "praesens": {
      "de": "er pfeift",
      "lv": "Viņš svilpo"
    },
    "imperfektIndikativ": {
      "de": "er pfiff",
      "lv": "Viņš svilpa"
    },
    "imperfektKonjunktiv": {
      "de": "er pfiffe",
      "lv": "Viņš svilpotu"
    },
    "partizipVergangenheit": {
      "de": "gepfiffen",
      "lv": "Svilpots"
    }
  },
  {
    "infinitiv": {
      "de": "pflegen",
      "lv": "Kopt"
    },
    "praesens": {
      "de": "er pflegt",
      "lv": "Viņš kopj"
    },
    "imperfektIndikativ": {
      "de": "pflegte vai pflog",
      "lv": "Kopa"
    },
    "imperfektKonjunktiv": {
      "de": "pflegte vai pflog",
      "lv": "Kopa"
    },
    "partizipVergangenheit": {
      "de": "gepflegt vai gepflogen",
      "lv": "Kopts"
    }
  },
  {
    "infinitiv": {
      "de": "preisen",
      "lv": "Slavēt"
    },
    "praesens": {
      "de": "er preist",
      "lv": "Viņš slavē"
    },
    "imperfektIndikativ": {
      "de": "er pries",
      "lv": "Viņš slavēja"
    },
    "imperfektKonjunktiv": {
      "de": "er priese",
      "lv": "Viņš slavētu"
    },
    "partizipVergangenheit": {
      "de": "gepriesen",
      "lv": "Slavēts"
    }
  },
  {
    "infinitiv": {
      "de": "quellen",
      "lv": "Briest"
    },
    "praesens": {
      "de": "er quillt",
      "lv": "Viņš briest"
    },
    "imperfektIndikativ": {
      "de": "er quoll",
      "lv": "Viņš brieda"
    },
    "imperfektKonjunktiv": {
      "de": "er quölle",
      "lv": "Viņš briestu"
    },
    "partizipVergangenheit": {
      "de": "gequollen (er ist)",
      "lv": "Uzbriedis"
    }
  },
  {
    "infinitiv": {
      "de": "raten",
      "lv": "Ieteikt / minēt"
    },
    "praesens": {
      "de": "er rät",
      "lv": "Viņš iesaka / min"
    },
    "imperfektIndikativ": {
      "de": "er riet",
      "lv": "Hij suggereerde/suggereerde"
    },
    "imperfektKonjunktiv": {
      "de": "er riete",
      "lv": "Viņš ieteiktu / minētu"
    },
    "partizipVergangenheit": {
      "de": "geraten",
      "lv": "Ieteikts / minēts"
    }
  },
  {
    "infinitiv": {
      "de": "reiben",
      "lv": "Berzt"
    },
    "praesens": {
      "de": "er reibt",
      "lv": "Viņš berž"
    },
    "imperfektIndikativ": {
      "de": "er rieb",
      "lv": "Viņš berza"
    },
    "imperfektKonjunktiv": {
      "de": "er riebe",
      "lv": "Viņš berztu"
    },
    "partizipVergangenheit": {
      "de": "gerieben",
      "lv": "Berzts"
    }
  },
  {
    "infinitiv": {
      "de": "reißen",
      "lv": "Raut"
    },
    "praesens": {
      "de": "er reißt",
      "lv": "Viņš rauj"
    },
    "imperfektIndikativ": {
      "de": "er riss",
      "lv": "Viņš rāva"
    },
    "imperfektKonjunktiv": {
      "de": "er risse",
      "lv": "Viņš rautu"
    },
    "partizipVergangenheit": {
      "de": "gerissen",
      "lv": "Rauts"
    }
  },
  {
    "infinitiv": {
      "de": "reiten",
      "lv": "Jāt"
    },
    "praesens": {
      "de": "er reitet",
      "lv": "Viņš jāj"
    },
    "imperfektIndikativ": {
      "de": "er ritt",
      "lv": "Viņš jāja"
    },
    "imperfektKonjunktiv": {
      "de": "er ritte",
      "lv": "Viņš jātu"
    },
    "partizipVergangenheit": {
      "de": "geritten (er ist)",
      "lv": "Jājis"
    }
  },
  {
    "infinitiv": {
      "de": "rennen",
      "lv": "Skriet"
    },
    "praesens": {
      "de": "er rennt",
      "lv": "Viņš skrien"
    },
    "imperfektIndikativ": {
      "de": "er rannte",
      "lv": "Viņš skrēja"
    },
    "imperfektKonjunktiv": {
      "de": "er rennte",
      "lv": "Viņš skrietu"
    },
    "partizipVergangenheit": {
      "de": "gerannt",
      "lv": "Skrējis"
    }
  },
  {
    "infinitiv": {
      "de": "riechen",
      "lv": "Ost"
    },
    "praesens": {
      "de": "er riecht",
      "lv": "Viņš ož"
    },
    "imperfektIndikativ": {
      "de": "er roch",
      "lv": "Viņš oda"
    },
    "imperfektKonjunktiv": {
      "de": "er röche",
      "lv": "Viņš ostu"
    },
    "partizipVergangenheit": {
      "de": "gerochen",
      "lv": "Osts"
    }
  },
  {
    "infinitiv": {
      "de": "ringen",
      "lv": "Lauzties"
    },
    "praesens": {
      "de": "er ringt",
      "lv": "Viņš laužas"
    },
    "imperfektIndikativ": {
      "de": "er rang",
      "lv": "Viņš lauzās"
    },
    "imperfektKonjunktiv": {
      "de": "er ränge",
      "lv": "Viņš lauztos"
    },
    "partizipVergangenheit": {
      "de": "gerungen",
      "lv": "Laucies"
    }
  },
  {
    "infinitiv": {
      "de": "rinnen",
      "lv": "Tecēt"
    },
    "praesens": {
      "de": "er rinnt",
      "lv": "Viņš tek"
    },
    "imperfektIndikativ": {
      "de": "er rann",
      "lv": "Hij rende"
    },
    "imperfektKonjunktiv": {
      "de": "er ränne / er rönne",
      "lv": "Viņš tecētu"
    },
    "partizipVergangenheit": {
      "de": "geronnen (er ist)",
      "lv": "Tecējis / sarecējis"
    }
  },
  {
    "infinitiv": {
      "de": "rufen",
      "lv": "Saukt"
    },
    "praesens": {
      "de": "er ruft",
      "lv": "Viņš sauc"
    },
    "imperfektIndikativ": {
      "de": "er rief",
      "lv": "Viņš sauca"
    },
    "imperfektKonjunktiv": {
      "de": "er riefe",
      "lv": "Viņš sauktu"
    },
    "partizipVergangenheit": {
      "de": "gerufen",
      "lv": "Saukts"
    }
  },
  {
    "infinitiv": {
      "de": "salzen",
      "lv": "Sālīt"
    },
    "praesens": {
      "de": "er salzt",
      "lv": "Viņš sāla"
    },
    "imperfektIndikativ": {
      "de": "er salzte",
      "lv": "Viņš sālīja"
    },
    "imperfektKonjunktiv": {
      "de": "er salzte",
      "lv": "Viņš sālītu"
    },
    "partizipVergangenheit": {
      "de": "gesalzen",
      "lv": "Sālīts"
    }
  },
  {
    "infinitiv": {
      "de": "saufen",
      "lv": "Žūpot / dzert"
    },
    "praesens": {
      "de": "er säuft",
      "lv": "Viņš žūpo / dzer"
    },
    "imperfektIndikativ": {
      "de": "er soff",
      "lv": "Hij dronk / dronk"
    },
    "imperfektKonjunktiv": {
      "de": "er söffe",
      "lv": "Viņš žūpotu / dzertu"
    },
    "partizipVergangenheit": {
      "de": "gesoffen",
      "lv": "Dzerts"
    }
  },
  {
    "infinitiv": {
      "de": "saugen",
      "lv": "Sūkt"
    },
    "praesens": {
      "de": "er saugt",
      "lv": "Viņš sūc"
    },
    "imperfektIndikativ": {
      "de": "er sog",
      "lv": "Viņš sūca"
    },
    "imperfektKonjunktiv": {
      "de": "er söge",
      "lv": "Viņš sūktu"
    },
    "partizipVergangenheit": {
      "de": "gesogen",
      "lv": "Sūkts"
    }
  },
  {
    "infinitiv": {
      "de": "schaffen",
      "lv": "Radīt"
    },
    "praesens": {
      "de": "er schafft",
      "lv": "Viņš rada"
    },
    "imperfektIndikativ": {
      "de": "er schuf",
      "lv": "Viņš radīja"
    },
    "imperfektKonjunktiv": {
      "de": "er schüfe",
      "lv": "Viņš radītu"
    },
    "partizipVergangenheit": {
      "de": "geschaffen",
      "lv": "Radīts"
    }
  },
  {
    "infinitiv": {
      "de": "schallen",
      "lv": "Skanēt"
    },
    "praesens": {
      "de": "es schallt",
      "lv": "Tas skan"
    },
    "imperfektIndikativ": {
      "de": "schallte vai scholl",
      "lv": "Skanēja"
    },
    "imperfektKonjunktiv": {
      "de": "schallte vai scholl",
      "lv": "Skanēja"
    },
    "partizipVergangenheit": {
      "de": "geschallt",
      "lv": "Skanējis"
    }
  },
  {
    "infinitiv": {
      "de": "scheiden",
      "lv": "Šķirt / šķirties"
    },
    "praesens": {
      "de": "er scheidet",
      "lv": "Viņš šķir / šķiras"
    },
    "imperfektIndikativ": {
      "de": "er schied",
      "lv": "Viņš šķīra / šķīrās"
    },
    "imperfektKonjunktiv": {
      "de": "er schiede",
      "lv": "Viņš šķirtu / šķirtos"
    },
    "partizipVergangenheit": {
      "de": "geschieden (er hat / er ist)",
      "lv": "Šķirts / šķīries"
    }
  },
  {
    "infinitiv": {
      "de": "scheinen",
      "lv": "Spīdēt / likties"
    },
    "praesens": {
      "de": "er scheint",
      "lv": "Viņš spīd / šķiet"
    },
    "imperfektIndikativ": {
      "de": "er schien",
      "lv": "Viņš spīdēja / šķita"
    },
    "imperfektKonjunktiv": {
      "de": "er schiene",
      "lv": "Viņš spīdētu / šķistu"
    },
    "partizipVergangenheit": {
      "de": "geschienen",
      "lv": "Spīdējis / šķitis"
    }
  },
  {
    "infinitiv": {
      "de": "schelten",
      "lv": "Bārt"
    },
    "praesens": {
      "de": "er schilt",
      "lv": "Viņš bar"
    },
    "imperfektIndikativ": {
      "de": "er schalt",
      "lv": "Viņš bāra"
    },
    "imperfektKonjunktiv": {
      "de": "er schölte / er schälte",
      "lv": "Viņš bārtu"
    },
    "partizipVergangenheit": {
      "de": "gescholten",
      "lv": "Baard"
    }
  },
  {
    "infinitiv": {
      "de": "scheren",
      "lv": "Cirpt"
    },
    "praesens": {
      "de": "er schert",
      "lv": "Viņš cirpj"
    },
    "imperfektIndikativ": {
      "de": "schor vai scherte",
      "lv": "Cirpa"
    },
    "imperfektKonjunktiv": {
      "de": "schor vai scherte",
      "lv": "Cirpa"
    },
    "partizipVergangenheit": {
      "de": "geschoren vai geschert",
      "lv": "Apcirpts"
    }
  },
  {
    "infinitiv": {
      "de": "schieben",
      "lv": "Stumt"
    },
    "praesens": {
      "de": "er schiebt",
      "lv": "Viņš stumj"
    },
    "imperfektIndikativ": {
      "de": "er schob",
      "lv": "Viņš stūma"
    },
    "imperfektKonjunktiv": {
      "de": "er schöbe",
      "lv": "Viņš stumtu"
    },
    "partizipVergangenheit": {
      "de": "geschoben",
      "lv": "Stumts"
    }
  },
  {
    "infinitiv": {
      "de": "schießen",
      "lv": "Šaut"
    },
    "praesens": {
      "de": "er schießt",
      "lv": "Viņš šauj"
    },
    "imperfektIndikativ": {
      "de": "er schoss",
      "lv": "Viņš šāva"
    },
    "imperfektKonjunktiv": {
      "de": "er schösse",
      "lv": "Viņš šautu"
    },
    "partizipVergangenheit": {
      "de": "geschossen",
      "lv": "Šauts"
    }
  },
  {
    "infinitiv": {
      "de": "schinden",
      "lv": "Mocīt"
    },
    "praesens": {
      "de": "er schindet",
      "lv": "Viņš moka"
    },
    "imperfektIndikativ": {
      "de": "schindete",
      "lv": "Gekweld"
    },
    "imperfektKonjunktiv": {
      "de": "schindete",
      "lv": "Gekweld"
    },
    "partizipVergangenheit": {
      "de": "geschunden",
      "lv": "Mocīts"
    }
  },
  {
    "infinitiv": {
      "de": "schlafen",
      "lv": "Gulēt"
    },
    "praesens": {
      "de": "er schläft",
      "lv": "Viņš guļ"
    },
    "imperfektIndikativ": {
      "de": "er schlief",
      "lv": "Viņš gulēja"
    },
    "imperfektKonjunktiv": {
      "de": "er schliefe",
      "lv": "Hij zou slapen"
    },
    "partizipVergangenheit": {
      "de": "geschlafen",
      "lv": "Gulēts"
    }
  },
  {
    "infinitiv": {
      "de": "schlagen",
      "lv": "Sist"
    },
    "praesens": {
      "de": "er schlägt",
      "lv": "Viņš sit"
    },
    "imperfektIndikativ": {
      "de": "er schlug",
      "lv": "Viņš sita"
    },
    "imperfektKonjunktiv": {
      "de": "er schlüge",
      "lv": "Viņš sistu"
    },
    "partizipVergangenheit": {
      "de": "geschlagen",
      "lv": "Sists"
    }
  },
  {
    "infinitiv": {
      "de": "schleichen",
      "lv": "Līst"
    },
    "praesens": {
      "de": "er schleicht",
      "lv": "Viņš lien"
    },
    "imperfektIndikativ": {
      "de": "er schlich",
      "lv": "Viņš līda"
    },
    "imperfektKonjunktiv": {
      "de": "er schliche",
      "lv": "Viņš līstu"
    },
    "partizipVergangenheit": {
      "de": "geschlichen (er ist)",
      "lv": "Līdis"
    }
  },
  {
    "infinitiv": {
      "de": "schleifen",
      "lv": "Slīpēt"
    },
    "praesens": {
      "de": "er schleift",
      "lv": "Viņš slīpē"
    },
    "imperfektIndikativ": {
      "de": "er schliff",
      "lv": "Viņš slīpēja"
    },
    "imperfektKonjunktiv": {
      "de": "er schliffe",
      "lv": "Viņš slīpētu"
    },
    "partizipVergangenheit": {
      "de": "geschliffen",
      "lv": "Slīpēts"
    }
  },
  {
    "infinitiv": {
      "de": "schließen",
      "lv": "Slēgt"
    },
    "praesens": {
      "de": "er schließt",
      "lv": "Viņš slēdz"
    },
    "imperfektIndikativ": {
      "de": "er schloss",
      "lv": "Viņš slēdza"
    },
    "imperfektKonjunktiv": {
      "de": "er schlösse",
      "lv": "Viņš slēgtu"
    },
    "partizipVergangenheit": {
      "de": "geschlossen",
      "lv": "Slēgts"
    }
  },
  {
    "infinitiv": {
      "de": "schlingen",
      "lv": "Rīt"
    },
    "praesens": {
      "de": "er schlingt",
      "lv": "Viņš rij"
    },
    "imperfektIndikativ": {
      "de": "er schlang",
      "lv": "Viņš rija"
    },
    "imperfektKonjunktiv": {
      "de": "er schlänge",
      "lv": "Viņš rītu"
    },
    "partizipVergangenheit": {
      "de": "geschlungen",
      "lv": "Rīts"
    }
  },
  {
    "infinitiv": {
      "de": "schmeißen",
      "lv": "Mest"
    },
    "praesens": {
      "de": "er schmeißt",
      "lv": "Viņš met"
    },
    "imperfektIndikativ": {
      "de": "er schmiss",
      "lv": "Viņš meta"
    },
    "imperfektKonjunktiv": {
      "de": "er schmisse",
      "lv": "Viņš mestu"
    },
    "partizipVergangenheit": {
      "de": "geschmissen",
      "lv": "Gegooid"
    }
  },
  {
    "infinitiv": {
      "de": "schmelzen",
      "lv": "Kust"
    },
    "praesens": {
      "de": "er schmilzt",
      "lv": "Viņš kūst"
    },
    "imperfektIndikativ": {
      "de": "er schmolz",
      "lv": "Viņš kusa"
    },
    "imperfektKonjunktiv": {
      "de": "er schmölze",
      "lv": "Viņš kustu"
    },
    "partizipVergangenheit": {
      "de": "geschmolzen (er ist)",
      "lv": "Kusis"
    }
  },
  {
    "infinitiv": {
      "de": "schnauben",
      "lv": "Šņākt"
    },
    "praesens": {
      "de": "er schnaubt",
      "lv": "Viņš šņāc"
    },
    "imperfektIndikativ": {
      "de": "schnaubte vai schnob",
      "lv": "Šņāca"
    },
    "imperfektKonjunktiv": {
      "de": "schnaubte vai schnob",
      "lv": "Šņāca"
    },
    "partizipVergangenheit": {
      "de": "geschnaubt vai geschnoben",
      "lv": "Nošņācies"
    }
  },
  {
    "infinitiv": {
      "de": "schneiden",
      "lv": "Griezt"
    },
    "praesens": {
      "de": "er schneidet",
      "lv": "Viņš griež"
    },
    "imperfektIndikativ": {
      "de": "er schnitt",
      "lv": "Viņš grieza"
    },
    "imperfektKonjunktiv": {
      "de": "er schnitte",
      "lv": "Viņš grieztu"
    },
    "partizipVergangenheit": {
      "de": "geschnitten",
      "lv": "Griezts"
    }
  },
  {
    "infinitiv": {
      "de": "schreiben",
      "lv": "Rakstīt"
    },
    "praesens": {
      "de": "er schreibt",
      "lv": "Viņš raksta"
    },
    "imperfektIndikativ": {
      "de": "er schrieb",
      "lv": "Viņš rakstīja"
    },
    "imperfektKonjunktiv": {
      "de": "er schriebe",
      "lv": "Viņš rakstītu"
    },
    "partizipVergangenheit": {
      "de": "geschrieben",
      "lv": "Rakstīts"
    }
  },
  {
    "infinitiv": {
      "de": "schreien",
      "lv": "Kliegt"
    },
    "praesens": {
      "de": "er schreit",
      "lv": "Viņš kliedz"
    },
    "imperfektIndikativ": {
      "de": "er schrie",
      "lv": "Viņš kliedza"
    },
    "imperfektKonjunktiv": {
      "de": "er schriee",
      "lv": "Viņš kliegtu"
    },
    "partizipVergangenheit": {
      "de": "geschrien",
      "lv": "Kliegts"
    }
  },
  {
    "infinitiv": {
      "de": "schreiten",
      "lv": "Soļot"
    },
    "praesens": {
      "de": "er schreitet",
      "lv": "Viņš soļo"
    },
    "imperfektIndikativ": {
      "de": "er schritt",
      "lv": "Viņš soļoja"
    },
    "imperfektKonjunktiv": {
      "de": "er schritte",
      "lv": "Viņš soļotu"
    },
    "partizipVergangenheit": {
      "de": "geschritten (er ist)",
      "lv": "Soļojis"
    }
  },
  {
    "infinitiv": {
      "de": "schweigen",
      "lv": "Klusēt"
    },
    "praesens": {
      "de": "er schweigt",
      "lv": "Viņš klusē"
    },
    "imperfektIndikativ": {
      "de": "er schwieg",
      "lv": "Viņš klusēja"
    },
    "imperfektKonjunktiv": {
      "de": "er schwiege",
      "lv": "Viņš klusētu"
    },
    "partizipVergangenheit": {
      "de": "geschwiegen",
      "lv": "Klusēts"
    }
  },
  {
    "infinitiv": {
      "de": "schwellen",
      "lv": "Verwen"
    },
    "praesens": {
      "de": "er schwillt",
      "lv": "Viņš pampst"
    },
    "imperfektIndikativ": {
      "de": "er schwoll",
      "lv": "Viņš pampa"
    },
    "imperfektKonjunktiv": {
      "de": "er schwölle",
      "lv": "Hij zou pompen"
    },
    "partizipVergangenheit": {
      "de": "geschwollen (er ist)",
      "lv": "Pampis"
    }
  },
  {
    "infinitiv": {
      "de": "schwimmen",
      "lv": "Peldēt"
    },
    "praesens": {
      "de": "er schwimmt",
      "lv": "Viņš peld"
    },
    "imperfektIndikativ": {
      "de": "er schwamm",
      "lv": "Viņš peldēja"
    },
    "imperfektKonjunktiv": {
      "de": "er schwömme / er schwämme",
      "lv": "Viņš peldētu"
    },
    "partizipVergangenheit": {
      "de": "geschwommen (er ist)",
      "lv": "Peldējis"
    }
  },
  {
    "infinitiv": {
      "de": "schwinden",
      "lv": "Zust"
    },
    "praesens": {
      "de": "er schwindet",
      "lv": "Viņš zūd"
    },
    "imperfektIndikativ": {
      "de": "er schwand",
      "lv": "Viņš zuda"
    },
    "imperfektKonjunktiv": {
      "de": "er schwände",
      "lv": "Viņš zustu"
    },
    "partizipVergangenheit": {
      "de": "geschwunden (er ist)",
      "lv": "Zudis"
    }
  },
  {
    "infinitiv": {
      "de": "schwingen",
      "lv": "Vicināt"
    },
    "praesens": {
      "de": "er schwingt",
      "lv": "Viņš vicina"
    },
    "imperfektIndikativ": {
      "de": "er schwang",
      "lv": "Viņš vicināja"
    },
    "imperfektKonjunktiv": {
      "de": "er schwänge",
      "lv": "Viņš vicinātu"
    },
    "partizipVergangenheit": {
      "de": "geschwungen",
      "lv": "Vicināts"
    }
  },
  {
    "infinitiv": {
      "de": "schwören",
      "lv": "Zvērēt"
    },
    "praesens": {
      "de": "er schwört",
      "lv": "Viņš zvēr"
    },
    "imperfektIndikativ": {
      "de": "er schwur / er schwor",
      "lv": "Viņš zvērēja"
    },
    "imperfektKonjunktiv": {
      "de": "er schwöre",
      "lv": "Hij zou zweren"
    },
    "partizipVergangenheit": {
      "de": "geschworen",
      "lv": "Zvērēts"
    }
  },
  {
    "infinitiv": {
      "de": "sehen",
      "lv": "Redzēt"
    },
    "praesens": {
      "de": "er sieht",
      "lv": "Viņš redz"
    },
    "imperfektIndikativ": {
      "de": "er sah",
      "lv": "Viņš redzēja"
    },
    "imperfektKonjunktiv": {
      "de": "er sähe",
      "lv": "Viņš redzētu"
    },
    "partizipVergangenheit": {
      "de": "gesehen",
      "lv": "Redzēts"
    }
  },
  {
    "infinitiv": {
      "de": "sein",
      "lv": "Zijn"
    },
    "praesens": {
      "de": "er ist",
      "lv": "Viņš ir"
    },
    "imperfektIndikativ": {
      "de": "war",
      "lv": "Bija"
    },
    "imperfektKonjunktiv": {
      "de": "war",
      "lv": "Bija"
    },
    "partizipVergangenheit": {
      "de": "gewesen",
      "lv": "Bijis"
    }
  },
  {
    "infinitiv": {
      "de": "senden",
      "lv": "Sūtīt"
    },
    "praesens": {
      "de": "er sendet",
      "lv": "Viņš sūta"
    },
    "imperfektIndikativ": {
      "de": "er sandte / er sendete",
      "lv": "Viņš sūtīja"
    },
    "imperfektKonjunktiv": {
      "de": "er sendete",
      "lv": "Viņš sūtītu"
    },
    "partizipVergangenheit": {
      "de": "gesandt / gesendet",
      "lv": "Sūtīts"
    }
  },
  {
    "infinitiv": {
      "de": "sieden",
      "lv": "Vārīt"
    },
    "praesens": {
      "de": "er siedet",
      "lv": "Viņš vāra"
    },
    "imperfektIndikativ": {
      "de": "sott vai siedete",
      "lv": "Vārīja"
    },
    "imperfektKonjunktiv": {
      "de": "sott vai siedete",
      "lv": "Vārīja"
    },
    "partizipVergangenheit": {
      "de": "gesotten vai gesiedet",
      "lv": "Vārīts"
    }
  },
  {
    "infinitiv": {
      "de": "singen",
      "lv": "Dziedāt"
    },
    "praesens": {
      "de": "er singt",
      "lv": "Viņš dzied"
    },
    "imperfektIndikativ": {
      "de": "er sang",
      "lv": "Viņš dziedāja"
    },
    "imperfektKonjunktiv": {
      "de": "er sänge",
      "lv": "Viņš dziedātu"
    },
    "partizipVergangenheit": {
      "de": "gesungen",
      "lv": "Dziedāts"
    }
  },
  {
    "infinitiv": {
      "de": "sinken",
      "lv": "Grimt"
    },
    "praesens": {
      "de": "er sinkt",
      "lv": "Viņš grimst"
    },
    "imperfektIndikativ": {
      "de": "er sank",
      "lv": "Viņš grima"
    },
    "imperfektKonjunktiv": {
      "de": "er sänke",
      "lv": "Viņš grimtu"
    },
    "partizipVergangenheit": {
      "de": "gesunken (er ist)",
      "lv": "Grimis"
    }
  },
  {
    "infinitiv": {
      "de": "sinnen",
      "lv": "Prātot"
    },
    "praesens": {
      "de": "er sinnt",
      "lv": "Viņš prāto"
    },
    "imperfektIndikativ": {
      "de": "er sann",
      "lv": "Viņš prātoja"
    },
    "imperfektKonjunktiv": {
      "de": "er sönne / er sänne",
      "lv": "Viņš prātotu"
    },
    "partizipVergangenheit": {
      "de": "gesonnen",
      "lv": "Prātots"
    }
  },
  {
    "infinitiv": {
      "de": "sitzen",
      "lv": "Sēdēt"
    },
    "praesens": {
      "de": "er sitzt",
      "lv": "Viņš sēž"
    },
    "imperfektIndikativ": {
      "de": "er sass",
      "lv": "Viņš sēdēja"
    },
    "imperfektKonjunktiv": {
      "de": "er säße",
      "lv": "Viņš sēdētu"
    },
    "partizipVergangenheit": {
      "de": "gesessen",
      "lv": "Sēdēts"
    }
  },
  {
    "infinitiv": {
      "de": "sollen",
      "lv": "Vajadzēt / būt pienākumam"
    },
    "praesens": {
      "de": "er soll",
      "lv": "Viņam vajag"
    },
    "imperfektIndikativ": {
      "de": "sollte",
      "lv": "Vajadzēja"
    },
    "imperfektKonjunktiv": {
      "de": "sollte",
      "lv": "Vajadzēja"
    },
    "partizipVergangenheit": {
      "de": "gesollt",
      "lv": "Vajadzējis"
    }
  },
  {
    "infinitiv": {
      "de": "speien",
      "lv": "Spļaut"
    },
    "praesens": {
      "de": "er speit",
      "lv": "Viņš spļauj"
    },
    "imperfektIndikativ": {
      "de": "er spie",
      "lv": "Viņš spļāva"
    },
    "imperfektKonjunktiv": {
      "de": "er spie",
      "lv": "Viņš spļautu"
    },
    "partizipVergangenheit": {
      "de": "gespien",
      "lv": "Spļauts"
    }
  },
  {
    "infinitiv": {
      "de": "spinnen",
      "lv": "Vērpt"
    },
    "praesens": {
      "de": "er spinnt",
      "lv": "Hij draait"
    },
    "imperfektIndikativ": {
      "de": "er spann",
      "lv": "Viņš vērpa"
    },
    "imperfektKonjunktiv": {
      "de": "er spönne / er spänne",
      "lv": "Viņš vērptu"
    },
    "partizipVergangenheit": {
      "de": "gesponnen",
      "lv": "Vērpts"
    }
  },
  {
    "infinitiv": {
      "de": "spleißen",
      "lv": "Savienot"
    },
    "praesens": {
      "de": "er spleißt",
      "lv": "Viņš savieno"
    },
    "imperfektIndikativ": {
      "de": "spliss",
      "lv": "Savienoja"
    },
    "imperfektKonjunktiv": {
      "de": "spliss",
      "lv": "Savienoja"
    },
    "partizipVergangenheit": {
      "de": "gesplissen",
      "lv": "Savienots"
    }
  },
  {
    "infinitiv": {
      "de": "sprechen",
      "lv": "Runāt"
    },
    "praesens": {
      "de": "er spricht",
      "lv": "Viņš runā"
    },
    "imperfektIndikativ": {
      "de": "er sprach",
      "lv": "Viņš runāja"
    },
    "imperfektKonjunktiv": {
      "de": "er spräche",
      "lv": "Viņš runātu"
    },
    "partizipVergangenheit": {
      "de": "gesprochen",
      "lv": "Runāts"
    }
  },
  {
    "infinitiv": {
      "de": "sprießen",
      "lv": "Plaukt"
    },
    "praesens": {
      "de": "er sprießt",
      "lv": "Viņš plaukst"
    },
    "imperfektIndikativ": {
      "de": "er spross",
      "lv": "Viņš plauka"
    },
    "imperfektKonjunktiv": {
      "de": "er sprösse",
      "lv": "Viņš plauktu"
    },
    "partizipVergangenheit": {
      "de": "gesprossen (er ist)",
      "lv": "Plaucis"
    }
  },
  {
    "infinitiv": {
      "de": "springen",
      "lv": "Lēkt"
    },
    "praesens": {
      "de": "er springt",
      "lv": "Viņš lec"
    },
    "imperfektIndikativ": {
      "de": "er sprang",
      "lv": "Viņš lēca"
    },
    "imperfektKonjunktiv": {
      "de": "er spränge",
      "lv": "Viņš lēktu"
    },
    "partizipVergangenheit": {
      "de": "gesprungen (er ist)",
      "lv": "Lēcis"
    }
  },
  {
    "infinitiv": {
      "de": "stechen",
      "lv": "Durt"
    },
    "praesens": {
      "de": "er sticht",
      "lv": "Viņš dur"
    },
    "imperfektIndikativ": {
      "de": "er stach",
      "lv": "Viņš dūra"
    },
    "imperfektKonjunktiv": {
      "de": "er stäche",
      "lv": "Viņš durtu"
    },
    "partizipVergangenheit": {
      "de": "gestochen",
      "lv": "Durts"
    }
  },
  {
    "infinitiv": {
      "de": "stecken",
      "lv": "Bāzt / iespraust"
    },
    "praesens": {
      "de": "er steckt",
      "lv": "Viņš bāž"
    },
    "imperfektIndikativ": {
      "de": "stak vai steckte",
      "lv": "Iebāza"
    },
    "imperfektKonjunktiv": {
      "de": "stak vai steckte",
      "lv": "Iebāza"
    },
    "partizipVergangenheit": {
      "de": "gesteckt",
      "lv": "Iebāzts"
    }
  },
  {
    "infinitiv": {
      "de": "stehen",
      "lv": "Stāvēt"
    },
    "praesens": {
      "de": "er steht",
      "lv": "Viņš stāv"
    },
    "imperfektIndikativ": {
      "de": "er stand",
      "lv": "Viņš stāvēja"
    },
    "imperfektKonjunktiv": {
      "de": "er stände / er stünde",
      "lv": "Viņš stāvētu"
    },
    "partizipVergangenheit": {
      "de": "gestanden",
      "lv": "Stāvēts"
    }
  },
  {
    "infinitiv": {
      "de": "stehlen",
      "lv": "Zagt"
    },
    "praesens": {
      "de": "er stiehlt",
      "lv": "Viņš zog"
    },
    "imperfektIndikativ": {
      "de": "er stahl",
      "lv": "Viņš zaga"
    },
    "imperfektKonjunktiv": {
      "de": "er stöhle / er stähle",
      "lv": "Viņš zagtu"
    },
    "partizipVergangenheit": {
      "de": "gestohlen",
      "lv": "Zagts"
    }
  },
  {
    "infinitiv": {
      "de": "steigen",
      "lv": "Kāpt"
    },
    "praesens": {
      "de": "er steigt",
      "lv": "Viņš kāpj"
    },
    "imperfektIndikativ": {
      "de": "er stieg",
      "lv": "Hij klom"
    },
    "imperfektKonjunktiv": {
      "de": "er stiege",
      "lv": "Viņš kāptu"
    },
    "partizipVergangenheit": {
      "de": "gestiegen (er ist)",
      "lv": "Kāpis"
    }
  },
  {
    "infinitiv": {
      "de": "sterben",
      "lv": "Mirt"
    },
    "praesens": {
      "de": "er stirbt",
      "lv": "Viņš mirst"
    },
    "imperfektIndikativ": {
      "de": "er starb",
      "lv": "Viņš mira"
    },
    "imperfektKonjunktiv": {
      "de": "er stürbe",
      "lv": "Viņš mirtu"
    },
    "partizipVergangenheit": {
      "de": "gestorben (er ist)",
      "lv": "Miris"
    }
  },
  {
    "infinitiv": {
      "de": "stieben",
      "lv": "Putēt / virpuļot"
    },
    "praesens": {
      "de": "es stiebt",
      "lv": "Tas put"
    },
    "imperfektIndikativ": {
      "de": "stob vai stiebte",
      "lv": "Putēja"
    },
    "imperfektKonjunktiv": {
      "de": "stob vai stiebte",
      "lv": "Putēja"
    },
    "partizipVergangenheit": {
      "de": "gestoben vai gestiebt",
      "lv": "Izputējis"
    }
  },
  {
    "infinitiv": {
      "de": "stinken",
      "lv": "Smirdēt"
    },
    "praesens": {
      "de": "es stinkt",
      "lv": "Tas smird"
    },
    "imperfektIndikativ": {
      "de": "stank",
      "lv": "Smirdēja"
    },
    "imperfektKonjunktiv": {
      "de": "stank",
      "lv": "Smirdēja"
    },
    "partizipVergangenheit": {
      "de": "gestunken",
      "lv": "Smirdējis"
    }
  },
  {
    "infinitiv": {
      "de": "stoßen",
      "lv": "Grūst"
    },
    "praesens": {
      "de": "er stößt",
      "lv": "Viņš grūž"
    },
    "imperfektIndikativ": {
      "de": "er stieß",
      "lv": "Viņš grūda"
    },
    "imperfektKonjunktiv": {
      "de": "er stieße",
      "lv": "Viņš grūstu"
    },
    "partizipVergangenheit": {
      "de": "gestoßen",
      "lv": "Grūsts"
    }
  },
  {
    "infinitiv": {
      "de": "streichen",
      "lv": "Krāsot / strīpot"
    },
    "praesens": {
      "de": "er streicht",
      "lv": "Viņš krāso / strīpo"
    },
    "imperfektIndikativ": {
      "de": "er strich",
      "lv": "Hij schilderde/gestreept"
    },
    "imperfektKonjunktiv": {
      "de": "er striche",
      "lv": "Viņš krāsotu / strīpotu"
    },
    "partizipVergangenheit": {
      "de": "gestrichen",
      "lv": "Krāsots / strīpots"
    }
  },
  {
    "infinitiv": {
      "de": "streiten",
      "lv": "Cīnīties"
    },
    "praesens": {
      "de": "er streitet",
      "lv": "Viņš cīnās"
    },
    "imperfektIndikativ": {
      "de": "er stritt",
      "lv": "Viņš cīnījās"
    },
    "imperfektKonjunktiv": {
      "de": "er stritte",
      "lv": "Viņš cīnītos"
    },
    "partizipVergangenheit": {
      "de": "gestritten",
      "lv": "Cīnījies"
    }
  },
  {
    "infinitiv": {
      "de": "tragen",
      "lv": "Nest"
    },
    "praesens": {
      "de": "er trägt",
      "lv": "Viņš nes"
    },
    "imperfektIndikativ": {
      "de": "er trug",
      "lv": "Viņš nesa"
    },
    "imperfektKonjunktiv": {
      "de": "er trüge",
      "lv": "Viņš nestu"
    },
    "partizipVergangenheit": {
      "de": "getragen",
      "lv": "Nests"
    }
  },
  {
    "infinitiv": {
      "de": "treffen",
      "lv": "Sastapt"
    },
    "praesens": {
      "de": "er trifft",
      "lv": "Viņš sastop"
    },
    "imperfektIndikativ": {
      "de": "er traf",
      "lv": "Viņš sastapa"
    },
    "imperfektKonjunktiv": {
      "de": "er träfe",
      "lv": "Viņš sastaptu"
    },
    "partizipVergangenheit": {
      "de": "getroffen",
      "lv": "Sastapts"
    }
  },
  {
    "infinitiv": {
      "de": "treiben",
      "lv": "Dzīt"
    },
    "praesens": {
      "de": "er treibt",
      "lv": "Viņš dzen"
    },
    "imperfektIndikativ": {
      "de": "er trieb",
      "lv": "Viņš dzina"
    },
    "imperfektKonjunktiv": {
      "de": "er triebe",
      "lv": "Viņš dzītu"
    },
    "partizipVergangenheit": {
      "de": "getrieben",
      "lv": "Dzīts"
    }
  },
  {
    "infinitiv": {
      "de": "treten",
      "lv": "Stāties / iet"
    },
    "praesens": {
      "de": "er tritt",
      "lv": "Viņš stājas / iet"
    },
    "imperfektIndikativ": {
      "de": "er trat",
      "lv": "Hij stond/liep"
    },
    "imperfektKonjunktiv": {
      "de": "er träte",
      "lv": "Viņš stātos / ietu"
    },
    "partizipVergangenheit": {
      "de": "getreten (er ist)",
      "lv": "Stājies / gājis"
    }
  },
  {
    "infinitiv": {
      "de": "trinken",
      "lv": "Dzert"
    },
    "praesens": {
      "de": "er trinkt",
      "lv": "Viņš dzer"
    },
    "imperfektIndikativ": {
      "de": "er trank",
      "lv": "Viņš dzēra"
    },
    "imperfektKonjunktiv": {
      "de": "er tränke",
      "lv": "Viņš dzertu"
    },
    "partizipVergangenheit": {
      "de": "getrunken",
      "lv": "Dzerts"
    }
  },
  {
    "infinitiv": {
      "de": "trügen",
      "lv": "Krāpt"
    },
    "praesens": {
      "de": "er trögt",
      "lv": "Viņš krāpj"
    },
    "imperfektIndikativ": {
      "de": "er trog",
      "lv": "Viņš krāpa"
    },
    "imperfektKonjunktiv": {
      "de": "er tröge",
      "lv": "Viņš krāptu"
    },
    "partizipVergangenheit": {
      "de": "getrogen",
      "lv": "Krāpts"
    }
  },
  {
    "infinitiv": {
      "de": "tun",
      "lv": "Darīt"
    },
    "praesens": {
      "de": "er tut",
      "lv": "Viņš dara"
    },
    "imperfektIndikativ": {
      "de": "er tat",
      "lv": "Viņš darīja"
    },
    "imperfektKonjunktiv": {
      "de": "er täte",
      "lv": "Viņš darītu"
    },
    "partizipVergangenheit": {
      "de": "getan",
      "lv": "Darīts"
    }
  },
  {
    "infinitiv": {
      "de": "verderben",
      "lv": "Bojāt"
    },
    "praesens": {
      "de": "er verdirbt",
      "lv": "Viņš bojā"
    },
    "imperfektIndikativ": {
      "de": "er verdarb",
      "lv": "Viņš bojāja"
    },
    "imperfektKonjunktiv": {
      "de": "er verdürbe",
      "lv": "Viņš bojātu"
    },
    "partizipVergangenheit": {
      "de": "verdorben",
      "lv": "Bojāts"
    }
  },
  {
    "infinitiv": {
      "de": "verdrießen",
      "lv": "Sacelt īgnumu"
    },
    "praesens": {
      "de": "er verdrießt",
      "lv": "Viņš izraisa īgnumu"
    },
    "imperfektIndikativ": {
      "de": "er verdross",
      "lv": "Viņš izraisīja īgnumu"
    },
    "imperfektKonjunktiv": {
      "de": "er verdrösse",
      "lv": "Viņš izraisītu īgnumu"
    },
    "partizipVergangenheit": {
      "de": "verdrossen",
      "lv": "Sarūgtināts"
    }
  },
  {
    "infinitiv": {
      "de": "vergessen",
      "lv": "Aizmirst"
    },
    "praesens": {
      "de": "er vergisst",
      "lv": "Viņš aizmirst"
    },
    "imperfektIndikativ": {
      "de": "er vergass",
      "lv": "Viņš aizmirsa"
    },
    "imperfektKonjunktiv": {
      "de": "er vergäße",
      "lv": "Hij zou het vergeten"
    },
    "partizipVergangenheit": {
      "de": "vergessen",
      "lv": "Aizmirsts"
    }
  },
  {
    "infinitiv": {
      "de": "verlieren",
      "lv": "Pazaudēt"
    },
    "praesens": {
      "de": "er verliert",
      "lv": "Viņš pazaudē"
    },
    "imperfektIndikativ": {
      "de": "er verlor",
      "lv": "Viņš pazaudēja"
    },
    "imperfektKonjunktiv": {
      "de": "er verlöre",
      "lv": "Viņš pazaudētu"
    },
    "partizipVergangenheit": {
      "de": "verloren",
      "lv": "Pazaudēts"
    }
  },
  {
    "infinitiv": {
      "de": "wachsen",
      "lv": "Groeien"
    },
    "praesens": {
      "de": "er wächst",
      "lv": "Viņš aug"
    },
    "imperfektIndikativ": {
      "de": "er wuchs",
      "lv": "Viņš auga"
    },
    "imperfektKonjunktiv": {
      "de": "er wüchse",
      "lv": "Viņš augtu"
    },
    "partizipVergangenheit": {
      "de": "gewachsen (er ist)",
      "lv": "Audzis"
    }
  },
  {
    "infinitiv": {
      "de": "waschen",
      "lv": "Mazgāt"
    },
    "praesens": {
      "de": "er wäscht",
      "lv": "Viņš mazgā"
    },
    "imperfektIndikativ": {
      "de": "er wusch",
      "lv": "Viņš mazgāja"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsche",
      "lv": "Viņš mazgātu"
    },
    "partizipVergangenheit": {
      "de": "gewaschen",
      "lv": "Mazgāts"
    }
  },
  {
    "infinitiv": {
      "de": "weben",
      "lv": "Aust"
    },
    "praesens": {
      "de": "er webt",
      "lv": "Viņš auž"
    },
    "imperfektIndikativ": {
      "de": "wob",
      "lv": "Auda"
    },
    "imperfektKonjunktiv": {
      "de": "wob",
      "lv": "Auda"
    },
    "partizipVergangenheit": {
      "de": "gewoben",
      "lv": "Izausts"
    }
  },
  {
    "infinitiv": {
      "de": "weichen",
      "lv": "Atkāpties"
    },
    "praesens": {
      "de": "er weicht",
      "lv": "Viņš atkāpjas"
    },
    "imperfektIndikativ": {
      "de": "er wich",
      "lv": "Viņš atkāpās"
    },
    "imperfektKonjunktiv": {
      "de": "er wiche",
      "lv": "Viņš atkāptos"
    },
    "partizipVergangenheit": {
      "de": "gewichen (er ist)",
      "lv": "Atkāpies"
    }
  },
  {
    "infinitiv": {
      "de": "weisen",
      "lv": "Rādīt"
    },
    "praesens": {
      "de": "er weist",
      "lv": "Viņš rāda"
    },
    "imperfektIndikativ": {
      "de": "er wies",
      "lv": "Viņš rādīja"
    },
    "imperfektKonjunktiv": {
      "de": "er wiese",
      "lv": "Viņš rādītu"
    },
    "partizipVergangenheit": {
      "de": "gewiesen",
      "lv": "Getoond"
    }
  },
  {
    "infinitiv": {
      "de": "wenden",
      "lv": "Grozīt / apgriezt"
    },
    "praesens": {
      "de": "er wendet",
      "lv": "Viņš groza / apgriež"
    },
    "imperfektIndikativ": {
      "de": "er wandte / es wendete",
      "lv": "Viņš grozīja / apgrieza"
    },
    "imperfektKonjunktiv": {
      "de": "er wendete",
      "lv": "Viņš grozītu / apgrieztu"
    },
    "partizipVergangenheit": {
      "de": "gewandt / gewendet",
      "lv": "Grozīts / apgriezts"
    }
  },
  {
    "infinitiv": {
      "de": "werben",
      "lv": "Bildināt"
    },
    "praesens": {
      "de": "er wirbt",
      "lv": "Viņš bildina"
    },
    "imperfektIndikativ": {
      "de": "er warb",
      "lv": "Viņš bildināja"
    },
    "imperfektKonjunktiv": {
      "de": "er würbe",
      "lv": "Viņš bildinātu"
    },
    "partizipVergangenheit": {
      "de": "geworben",
      "lv": "Bildināts"
    }
  },
  {
    "infinitiv": {
      "de": "werden",
      "lv": "Kļūt"
    },
    "praesens": {
      "de": "er wird",
      "lv": "Viņš kļūst"
    },
    "imperfektIndikativ": {
      "de": "wurde",
      "lv": "Kļuva"
    },
    "imperfektKonjunktiv": {
      "de": "wurde",
      "lv": "Kļuva"
    },
    "partizipVergangenheit": {
      "de": "geworden",
      "lv": "Kļuvis"
    }
  },
  {
    "infinitiv": {
      "de": "werfen",
      "lv": "Mest"
    },
    "praesens": {
      "de": "er wirft",
      "lv": "Viņš met"
    },
    "imperfektIndikativ": {
      "de": "er warf",
      "lv": "Viņš meta"
    },
    "imperfektKonjunktiv": {
      "de": "er würfe",
      "lv": "Viņš mestu"
    },
    "partizipVergangenheit": {
      "de": "geworfen",
      "lv": "Gegooid"
    }
  },
  {
    "infinitiv": {
      "de": "wiegen",
      "lv": "Svērt"
    },
    "praesens": {
      "de": "er wiegt",
      "lv": "Viņš sver"
    },
    "imperfektIndikativ": {
      "de": "er wog",
      "lv": "Viņš svēra"
    },
    "imperfektKonjunktiv": {
      "de": "er wöge",
      "lv": "Viņš svērtu"
    },
    "partizipVergangenheit": {
      "de": "gewogen",
      "lv": "Svērts"
    }
  },
  {
    "infinitiv": {
      "de": "winden",
      "lv": "Pīt"
    },
    "praesens": {
      "de": "er windet",
      "lv": "Viņš pin"
    },
    "imperfektIndikativ": {
      "de": "er wand",
      "lv": "Hij vlecht"
    },
    "imperfektKonjunktiv": {
      "de": "er wände",
      "lv": "Viņš pītu"
    },
    "partizipVergangenheit": {
      "de": "gewunden",
      "lv": "Pīts"
    }
  },
  {
    "infinitiv": {
      "de": "wissen",
      "lv": "Zināt"
    },
    "praesens": {
      "de": "er weiß",
      "lv": "Viņš zina"
    },
    "imperfektIndikativ": {
      "de": "er wusste",
      "lv": "Viņš zināja"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsste",
      "lv": "Viņš zinātu"
    },
    "partizipVergangenheit": {
      "de": "gewusst",
      "lv": "Zināts"
    }
  },
  {
    "infinitiv": {
      "de": "wollen",
      "lv": "Gribēt"
    },
    "praesens": {
      "de": "er will",
      "lv": "Viņš grib"
    },
    "imperfektIndikativ": {
      "de": "wollte",
      "lv": "Gribēja"
    },
    "imperfektKonjunktiv": {
      "de": "wollte",
      "lv": "Gribēja"
    },
    "partizipVergangenheit": {
      "de": "gewollt",
      "lv": "Gribējis"
    }
  },
  {
    "infinitiv": {
      "de": "wringen",
      "lv": "Izgriezt / izspiest"
    },
    "praesens": {
      "de": "er wringt",
      "lv": "Viņš izgriež"
    },
    "imperfektIndikativ": {
      "de": "wrang",
      "lv": "Izgrieza"
    },
    "imperfektKonjunktiv": {
      "de": "wrang",
      "lv": "Izgrieza"
    },
    "partizipVergangenheit": {
      "de": "gewrungen",
      "lv": "Izgriezts"
    }
  },
  {
    "infinitiv": {
      "de": "zeihen",
      "lv": "Vainot"
    },
    "praesens": {
      "de": "er zeiht",
      "lv": "Viņš vaino"
    },
    "imperfektIndikativ": {
      "de": "zieh",
      "lv": "Vainoja"
    },
    "imperfektKonjunktiv": {
      "de": "zieh",
      "lv": "Vainoja"
    },
    "partizipVergangenheit": {
      "de": "geziehen",
      "lv": "Vainojis"
    }
  },
  {
    "infinitiv": {
      "de": "ziehen",
      "lv": "Vilkt"
    },
    "praesens": {
      "de": "er zieht",
      "lv": "Viņš velk"
    },
    "imperfektIndikativ": {
      "de": "er zog",
      "lv": "Viņš vilka"
    },
    "imperfektKonjunktiv": {
      "de": "er zöge",
      "lv": "Viņš vilktu"
    },
    "partizipVergangenheit": {
      "de": "gezogen",
      "lv": "Vilkts"
    }
  },
  {
    "infinitiv": {
      "de": "zwingen",
      "lv": "Piespiest"
    },
    "praesens": {
      "de": "er zwingt",
      "lv": "Viņš piespiež"
    },
    "imperfektIndikativ": {
      "de": "er zwang",
      "lv": "Viņš piespieda"
    },
    "imperfektKonjunktiv": {
      "de": "er zwänge",
      "lv": "Viņš piespiestu"
    },
    "partizipVergangenheit": {
      "de": "gezwungen",
      "lv": "Piespiests"
    }
  },
  {
    "infinitiv": {
      "de": "empfangen",
      "lv": "Saņemt"
    },
    "praesens": {
      "de": "er empfängt",
      "lv": "Viņš saņem"
    },
    "imperfektIndikativ": {
      "de": "er empfing",
      "lv": "Viņš saņēma"
    },
    "imperfektKonjunktiv": {
      "de": "er empfinge",
      "lv": "Viņš saņemtu"
    },
    "partizipVergangenheit": {
      "de": "empfangen",
      "lv": "Saņemts"
    }
  },
  {
    "infinitiv": {
      "de": "erwägen",
      "lv": "Apsvērt"
    },
    "praesens": {
      "de": "er erwägt",
      "lv": "Hij overweegt"
    },
    "imperfektIndikativ": {
      "de": "er erwog",
      "lv": "Viņš apsvēra"
    },
    "imperfektKonjunktiv": {
      "de": "er erwöge",
      "lv": "Viņš apsvērtu"
    },
    "partizipVergangenheit": {
      "de": "erwogen",
      "lv": "Apsvērts"
    }
  },
  {
    "infinitiv": {
      "de": "fechten",
      "lv": "Cīnīties"
    },
    "praesens": {
      "de": "er ficht",
      "lv": "Viņš cīnās"
    },
    "imperfektIndikativ": {
      "de": "er focht",
      "lv": "Viņš cīnījās"
    },
    "imperfektKonjunktiv": {
      "de": "er föchte",
      "lv": "Viņš cīnītos"
    },
    "partizipVergangenheit": {
      "de": "gefochten",
      "lv": "Cīnījies"
    }
  },
  {
    "infinitiv": {
      "de": "flechten",
      "lv": "Pīt"
    },
    "praesens": {
      "de": "er flicht",
      "lv": "Viņš pin"
    },
    "imperfektIndikativ": {
      "de": "er flocht",
      "lv": "Hij vlecht"
    },
    "imperfektKonjunktiv": {
      "de": "er flöchte",
      "lv": "Viņš pītu"
    },
    "partizipVergangenheit": {
      "de": "geflochten",
      "lv": "Pīts"
    }
  },
  {
    "infinitiv": {
      "de": "hangen",
      "lv": "Karāties"
    },
    "praesens": {
      "de": "er hängt",
      "lv": "Viņš karājas"
    },
    "imperfektIndikativ": {
      "de": "er hing",
      "lv": "Viņš karājās"
    },
    "imperfektKonjunktiv": {
      "de": "er hinge",
      "lv": "Viņš karātos"
    },
    "partizipVergangenheit": {
      "de": "gehangen",
      "lv": "Karājies"
    }
  },
  {
    "infinitiv": {
      "de": "spalten",
      "lv": "Skaldīt"
    },
    "praesens": {
      "de": "er spaltet",
      "lv": "Viņš skalda"
    },
    "imperfektIndikativ": {
      "de": "er spaltete",
      "lv": "Viņš skaldīja"
    },
    "imperfektKonjunktiv": {
      "de": "er spaltete",
      "lv": "Viņš skaldītu"
    },
    "partizipVergangenheit": {
      "de": "gespalten",
      "lv": "Skaldīts"
    }
  },
  {
    "infinitiv": {
      "de": "verzeihen",
      "lv": "Piedot"
    },
    "praesens": {
      "de": "er verzeiht",
      "lv": "Viņš piedod"
    },
    "imperfektIndikativ": {
      "de": "er verzieh",
      "lv": "Viņš piedeva"
    },
    "imperfektKonjunktiv": {
      "de": "er verziehe",
      "lv": "Viņš piedotu"
    },
    "partizipVergangenheit": {
      "de": "verziehen",
      "lv": "Piedots"
    }
  }
];

window.VERB_ENTRIES = VERB_ENTRIES;

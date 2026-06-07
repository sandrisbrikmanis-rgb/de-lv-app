const VERB_ENTRIES = [
  {
    "infinitiv": {
      "de": "backen",
      "lv": "cept"
    },
    "praesens": {
      "de": "er bäckt",
      "lv": "viņš cep"
    },
    "imperfektIndikativ": {
      "de": "er buk",
      "lv": "viņš cepa"
    },
    "imperfektKonjunktiv": {
      "de": "er büke",
      "lv": "viņš ceptu"
    },
    "partizipVergangenheit": {
      "de": "gebacken",
      "lv": "cepts / izcepts"
    }
  },
  {
    "infinitiv": {
      "de": "befehlen",
      "lv": "pavēlēt"
    },
    "praesens": {
      "de": "er befiehlt",
      "lv": "viņš pavēl"
    },
    "imperfektIndikativ": {
      "de": "er befahl",
      "lv": "viņš pavēlēja"
    },
    "imperfektKonjunktiv": {
      "de": "er beföhle",
      "lv": "viņš pavēlētu"
    },
    "partizipVergangenheit": {
      "de": "befohlen",
      "lv": "pavēlēts"
    }
  },
  {
    "infinitiv": {
      "de": "beginnen",
      "lv": "sākt"
    },
    "praesens": {
      "de": "er beginnt",
      "lv": "viņš sāk"
    },
    "imperfektIndikativ": {
      "de": "er begann",
      "lv": "viņš sāka"
    },
    "imperfektKonjunktiv": {
      "de": "er begönne / er begänne",
      "lv": "viņš sāktu"
    },
    "partizipVergangenheit": {
      "de": "begonnen",
      "lv": "sākts"
    }
  },
  {
    "infinitiv": {
      "de": "beißen",
      "lv": "kost"
    },
    "praesens": {
      "de": "er beißt",
      "lv": "viņš kož"
    },
    "imperfektIndikativ": {
      "de": "er biß",
      "lv": "viņš koda"
    },
    "imperfektKonjunktiv": {
      "de": "er bisse",
      "lv": "viņš kostu"
    },
    "partizipVergangenheit": {
      "de": "gebissen",
      "lv": "kosts / sakosts"
    }
  },
  {
    "infinitiv": {
      "de": "bergen",
      "lv": "slēpt"
    },
    "praesens": {
      "de": "er birgt",
      "lv": "viņš slēpj"
    },
    "imperfektIndikativ": {
      "de": "er barg",
      "lv": "viņš slēpa"
    },
    "imperfektKonjunktiv": {
      "de": "er bürge / er bärge",
      "lv": "viņš slēptu"
    },
    "partizipVergangenheit": {
      "de": "geborgen",
      "lv": "paslēpts / paglābts"
    }
  },
  {
    "infinitiv": {
      "de": "bersten",
      "lv": "plīst"
    },
    "praesens": {
      "de": "er birst",
      "lv": "viņš plīst"
    },
    "imperfektIndikativ": {
      "de": "er barst / er borst",
      "lv": "viņš plīsa"
    },
    "imperfektKonjunktiv": {
      "de": "er bärste / er börste",
      "lv": "viņš plīstu"
    },
    "partizipVergangenheit": {
      "de": "geborsten (er ist)",
      "lv": "saplīsis"
    }
  },
  {
    "infinitiv": {
      "de": "bewegen",
      "lv": "pamudināt"
    },
    "praesens": {
      "de": "er bewegt",
      "lv": "viņš pamudina"
    },
    "imperfektIndikativ": {
      "de": "er bewog",
      "lv": "viņš pamudināja"
    },
    "imperfektKonjunktiv": {
      "de": "er bewöge",
      "lv": "viņš pamudinātu"
    },
    "partizipVergangenheit": {
      "de": "bewogen",
      "lv": "pamudināts"
    }
  },
  {
    "infinitiv": {
      "de": "biegen",
      "lv": "locīt"
    },
    "praesens": {
      "de": "er biegt",
      "lv": "viņš loka"
    },
    "imperfektIndikativ": {
      "de": "er bog",
      "lv": "viņš locīja"
    },
    "imperfektKonjunktiv": {
      "de": "er böge",
      "lv": "viņš locītu"
    },
    "partizipVergangenheit": {
      "de": "gebogen",
      "lv": "locīts"
    }
  },
  {
    "infinitiv": {
      "de": "bieten",
      "lv": "solīt"
    },
    "praesens": {
      "de": "er bietet",
      "lv": "viņš sola"
    },
    "imperfektIndikativ": {
      "de": "er bot",
      "lv": "viņš solīja"
    },
    "imperfektKonjunktiv": {
      "de": "er böte",
      "lv": "viņš solītu"
    },
    "partizipVergangenheit": {
      "de": "geboten",
      "lv": "solīts / piedāvāts"
    }
  },
  {
    "infinitiv": {
      "de": "binden",
      "lv": "siet"
    },
    "praesens": {
      "de": "er bindet",
      "lv": "viņš sien"
    },
    "imperfektIndikativ": {
      "de": "er band",
      "lv": "viņš sēja"
    },
    "imperfektKonjunktiv": {
      "de": "er bände",
      "lv": "viņš sietu"
    },
    "partizipVergangenheit": {
      "de": "gebunden",
      "lv": "siets"
    }
  },
  {
    "infinitiv": {
      "de": "bitten",
      "lv": "lūgt"
    },
    "praesens": {
      "de": "er bittet",
      "lv": "viņš lūdz"
    },
    "imperfektIndikativ": {
      "de": "er bat",
      "lv": "viņš lūdza"
    },
    "imperfektKonjunktiv": {
      "de": "er bäte",
      "lv": "viņš lūgtu"
    },
    "partizipVergangenheit": {
      "de": "gebeten",
      "lv": "lūgts"
    }
  },
  {
    "infinitiv": {
      "de": "blasen",
      "lv": "pūst"
    },
    "praesens": {
      "de": "er bläst",
      "lv": "viņš pūš"
    },
    "imperfektIndikativ": {
      "de": "er blies",
      "lv": "viņš pūta"
    },
    "imperfektKonjunktiv": {
      "de": "er bliese",
      "lv": "viņš pūstu"
    },
    "partizipVergangenheit": {
      "de": "geblasen",
      "lv": "pūsts"
    }
  },
  {
    "infinitiv": {
      "de": "backen",
      "lv": "cept"
    },
    "praesens": {
      "de": "er bäckt",
      "lv": "viņš cep"
    },
    "imperfektIndikativ": {
      "de": "er buk",
      "lv": "viņš cepa"
    },
    "imperfektKonjunktiv": {
      "de": "er büke",
      "lv": "viņš ceptu"
    },
    "partizipVergangenheit": {
      "de": "gebacken",
      "lv": "cepts / izcepts"
    }
  },
  {
    "infinitiv": {
      "de": "befehlen",
      "lv": "pavēlēt"
    },
    "praesens": {
      "de": "er befiehlt",
      "lv": "viņš pavēl"
    },
    "imperfektIndikativ": {
      "de": "er befahl",
      "lv": "viņš pavēlēja"
    },
    "imperfektKonjunktiv": {
      "de": "er beföhle",
      "lv": "viņš pavēlētu"
    },
    "partizipVergangenheit": {
      "de": "befohlen",
      "lv": "pavēlēts"
    }
  },
  {
    "infinitiv": {
      "de": "beginnen",
      "lv": "sākt"
    },
    "praesens": {
      "de": "er beginnt",
      "lv": "viņš sāk"
    },
    "imperfektIndikativ": {
      "de": "er begann",
      "lv": "viņš sāka"
    },
    "imperfektKonjunktiv": {
      "de": "er begönne / er begänne",
      "lv": "viņš sāktu"
    },
    "partizipVergangenheit": {
      "de": "begonnen",
      "lv": "sākts"
    }
  },
  {
    "infinitiv": {
      "de": "beißen",
      "lv": "kost"
    },
    "praesens": {
      "de": "er beißt",
      "lv": "viņš kož"
    },
    "imperfektIndikativ": {
      "de": "er biß",
      "lv": "viņš koda"
    },
    "imperfektKonjunktiv": {
      "de": "er bisse",
      "lv": "viņš kostu"
    },
    "partizipVergangenheit": {
      "de": "gebissen",
      "lv": "kosts / sakosts"
    }
  },
  {
    "infinitiv": {
      "de": "bergen",
      "lv": "slēpt"
    },
    "praesens": {
      "de": "er birgt",
      "lv": "viņš slēpj"
    },
    "imperfektIndikativ": {
      "de": "er barg",
      "lv": "viņš slēpa"
    },
    "imperfektKonjunktiv": {
      "de": "er bürge / er bärge",
      "lv": "viņš slēptu"
    },
    "partizipVergangenheit": {
      "de": "geborgen",
      "lv": "paslēpts / paglābts"
    }
  },
  {
    "infinitiv": {
      "de": "bersten",
      "lv": "plīst"
    },
    "praesens": {
      "de": "er birst",
      "lv": "viņš plīst"
    },
    "imperfektIndikativ": {
      "de": "er barst / er borst",
      "lv": "viņš plīsa"
    },
    "imperfektKonjunktiv": {
      "de": "er bärste / er börste",
      "lv": "viņš plīstu"
    },
    "partizipVergangenheit": {
      "de": "geborsten (er ist)",
      "lv": "saplīsis"
    }
  },
  {
    "infinitiv": {
      "de": "bewegen",
      "lv": "pamudināt"
    },
    "praesens": {
      "de": "er bewegt",
      "lv": "viņš pamudina"
    },
    "imperfektIndikativ": {
      "de": "er bewog",
      "lv": "viņš pamudināja"
    },
    "imperfektKonjunktiv": {
      "de": "er bewöge",
      "lv": "viņš pamudinātu"
    },
    "partizipVergangenheit": {
      "de": "bewogen",
      "lv": "pamudināts"
    }
  },
  {
    "infinitiv": {
      "de": "biegen",
      "lv": "locīt"
    },
    "praesens": {
      "de": "er biegt",
      "lv": "viņš loka"
    },
    "imperfektIndikativ": {
      "de": "er bog",
      "lv": "viņš locīja"
    },
    "imperfektKonjunktiv": {
      "de": "er böge",
      "lv": "viņš locītu"
    },
    "partizipVergangenheit": {
      "de": "gebogen",
      "lv": "locīts"
    }
  },
  {
    "infinitiv": {
      "de": "bieten",
      "lv": "solīt"
    },
    "praesens": {
      "de": "er bietet",
      "lv": "viņš sola"
    },
    "imperfektIndikativ": {
      "de": "er bot",
      "lv": "viņš solīja"
    },
    "imperfektKonjunktiv": {
      "de": "er böte",
      "lv": "viņš solītu"
    },
    "partizipVergangenheit": {
      "de": "geboten",
      "lv": "solīts / piedāvāts"
    }
  },
  {
    "infinitiv": {
      "de": "binden",
      "lv": "siet"
    },
    "praesens": {
      "de": "er bindet",
      "lv": "viņš sien"
    },
    "imperfektIndikativ": {
      "de": "er band",
      "lv": "viņš sēja"
    },
    "imperfektKonjunktiv": {
      "de": "er bände",
      "lv": "viņš sietu"
    },
    "partizipVergangenheit": {
      "de": "gebunden",
      "lv": "siets"
    }
  },
  {
    "infinitiv": {
      "de": "bitten",
      "lv": "lūgt"
    },
    "praesens": {
      "de": "er bittet",
      "lv": "viņš lūdz"
    },
    "imperfektIndikativ": {
      "de": "er bat",
      "lv": "viņš lūdza"
    },
    "imperfektKonjunktiv": {
      "de": "er bäte",
      "lv": "viņš lūgtu"
    },
    "partizipVergangenheit": {
      "de": "gebeten",
      "lv": "lūgts"
    }
  },
  {
    "infinitiv": {
      "de": "blasen",
      "lv": "pūst"
    },
    "praesens": {
      "de": "er bläst",
      "lv": "viņš pūš"
    },
    "imperfektIndikativ": {
      "de": "er blies",
      "lv": "viņš pūta"
    },
    "imperfektKonjunktiv": {
      "de": "er bliese",
      "lv": "viņš pūstu"
    },
    "partizipVergangenheit": {
      "de": "geblasen",
      "lv": "pūsts"
    }
  },
  {
    "infinitiv": {
      "de": "gären",
      "lv": "rūgt"
    },
    "praesens": {
      "de": "es gärt",
      "lv": "tas rūgst"
    },
    "imperfektIndikativ": {
      "de": "es gor / es gärte",
      "lv": "tas rūga"
    },
    "imperfektKonjunktiv": {
      "de": "es göre / es gärte",
      "lv": "tas rūgtu"
    },
    "partizipVergangenheit": {
      "de": "gegoren / gegärt",
      "lv": "rūdzis"
    }
  },
  {
    "infinitiv": {
      "de": "gebären",
      "lv": "dzemdēt"
    },
    "praesens": {
      "de": "sie gebiert",
      "lv": "viņa dzemdē"
    },
    "imperfektIndikativ": {
      "de": "sie gebar",
      "lv": "viņa dzemdēja"
    },
    "imperfektKonjunktiv": {
      "de": "sie gebäre",
      "lv": "viņa dzemdētu"
    },
    "partizipVergangenheit": {
      "de": "geboren",
      "lv": "dzemdēts / piedzimis"
    }
  },
  {
    "infinitiv": {
      "de": "gelingen",
      "lv": "izdoties"
    },
    "praesens": {
      "de": "es gelingt",
      "lv": "tas izdodas"
    },
    "imperfektIndikativ": {
      "de": "es gelang",
      "lv": "tas izdevās"
    },
    "imperfektKonjunktiv": {
      "de": "es gelänge",
      "lv": "tas izdotos"
    },
    "partizipVergangenheit": {
      "de": "gelungen (es ist)",
      "lv": "izdevies"
    }
  },
  {
    "infinitiv": {
      "de": "gelten",
      "lv": "noderēt"
    },
    "praesens": {
      "de": "er gilt",
      "lv": "viņš der / ir spēkā"
    },
    "imperfektIndikativ": {
      "de": "er galt",
      "lv": "viņš derēja / bija spēkā"
    },
    "imperfektKonjunktiv": {
      "de": "er gölte / es gälte",
      "lv": "viņš derētu / tas būtu spēkā"
    },
    "partizipVergangenheit": {
      "de": "gegolten",
      "lv": "derējis / bijis spēkā"
    }
  },
  {
    "infinitiv": {
      "de": "genesen",
      "lv": "izveseļoties"
    },
    "praesens": {
      "de": "er genest",
      "lv": "viņš izveseļojas"
    },
    "imperfektIndikativ": {
      "de": "er genas",
      "lv": "viņš izveseļojās"
    },
    "imperfektKonjunktiv": {
      "de": "er genäse",
      "lv": "viņš izveseļotos"
    },
    "partizipVergangenheit": {
      "de": "genesen (er ist)",
      "lv": "izveseļojies"
    }
  },
  {
    "infinitiv": {
      "de": "genießen",
      "lv": "baudīt"
    },
    "praesens": {
      "de": "er genießt",
      "lv": "viņš bauda"
    },
    "imperfektIndikativ": {
      "de": "er genoß",
      "lv": "viņš baudīja"
    },
    "imperfektKonjunktiv": {
      "de": "er genösse",
      "lv": "viņš baudītu"
    },
    "partizipVergangenheit": {
      "de": "genossen",
      "lv": "baudīts"
    }
  },
  {
    "infinitiv": {
      "de": "geschehen",
      "lv": "notikt"
    },
    "praesens": {
      "de": "es geschieht",
      "lv": "tas notiek"
    },
    "imperfektIndikativ": {
      "de": "es geschah",
      "lv": "tas notika"
    },
    "imperfektKonjunktiv": {
      "de": "es geschähe",
      "lv": "tas notiktu"
    },
    "partizipVergangenheit": {
      "de": "geschehen (es ist)",
      "lv": "noticis"
    }
  },
  {
    "infinitiv": {
      "de": "gießen",
      "lv": "liet"
    },
    "praesens": {
      "de": "er gießt",
      "lv": "viņš lej"
    },
    "imperfektIndikativ": {
      "de": "er goß",
      "lv": "viņš lēja"
    },
    "imperfektKonjunktiv": {
      "de": "er gösse",
      "lv": "viņš lietu"
    },
    "partizipVergangenheit": {
      "de": "gegossen",
      "lv": "liets"
    }
  },
  {
    "infinitiv": {
      "de": "gleichen",
      "lv": "līdzināties"
    },
    "praesens": {
      "de": "er gleicht",
      "lv": "viņš līdzinās"
    },
    "imperfektIndikativ": {
      "de": "er glich",
      "lv": "viņš līdzinājās"
    },
    "imperfektKonjunktiv": {
      "de": "er gliche",
      "lv": "viņš līdzinātos"
    },
    "partizipVergangenheit": {
      "de": "geglichen",
      "lv": "līdzinājies"
    }
  },
  {
    "infinitiv": {
      "de": "gleiten",
      "lv": "slīdēt"
    },
    "praesens": {
      "de": "er gleitet",
      "lv": "viņš slīd"
    },
    "imperfektIndikativ": {
      "de": "er glitt",
      "lv": "viņš slīdēja"
    },
    "imperfektKonjunktiv": {
      "de": "er glitte",
      "lv": "viņš slīdētu"
    },
    "partizipVergangenheit": {
      "de": "geglitten (er ist)",
      "lv": "slīdējis"
    }
  },
  {
    "infinitiv": {
      "de": "glimmen",
      "lv": "kvēlot"
    },
    "praesens": {
      "de": "er glimmt",
      "lv": "viņš kvēlo"
    },
    "imperfektIndikativ": {
      "de": "er glimmte / glomm",
      "lv": "viņš kvēloja"
    },
    "imperfektKonjunktiv": {
      "de": "er glimmte",
      "lv": "viņš kvēlotu"
    },
    "partizipVergangenheit": {
      "de": "geglimmt / geglommen",
      "lv": "kvēlojis"
    }
  },
  {
    "infinitiv": {
      "de": "graben",
      "lv": "rakt"
    },
    "praesens": {
      "de": "er gräbt",
      "lv": "viņš rok"
    },
    "imperfektIndikativ": {
      "de": "er grub",
      "lv": "viņš raka"
    },
    "imperfektKonjunktiv": {
      "de": "er grübe",
      "lv": "viņš raktu"
    },
    "partizipVergangenheit": {
      "de": "gegraben",
      "lv": "rakts"
    }
  },
  {
    "infinitiv": {
      "de": "greifen",
      "lv": "ķert"
    },
    "praesens": {
      "de": "er greift",
      "lv": "viņš ķer"
    },
    "imperfektIndikativ": {
      "de": "er griff",
      "lv": "viņš ķēra"
    },
    "imperfektKonjunktiv": {
      "de": "er griffe",
      "lv": "viņš ķertu"
    },
    "partizipVergangenheit": {
      "de": "gegriffen",
      "lv": "ķerts / satverts"
    }
  },
  {
    "infinitiv": {
      "de": "hauen",
      "lv": "cirst"
    },
    "praesens": {
      "de": "er haut",
      "lv": "viņš cērt"
    },
    "imperfektIndikativ": {
      "de": "er hieb",
      "lv": "viņš cirta"
    },
    "imperfektKonjunktiv": {
      "de": "er hiebe",
      "lv": "viņš cirstu"
    },
    "partizipVergangenheit": {
      "de": "gehauen",
      "lv": "cirsts"
    }
  },
  {
    "infinitiv": {
      "de": "heben",
      "lv": "celt"
    },
    "praesens": {
      "de": "er hebt",
      "lv": "viņš ceļ"
    },
    "imperfektIndikativ": {
      "de": "er hob",
      "lv": "viņš cēla"
    },
    "imperfektKonjunktiv": {
      "de": "er höbe",
      "lv": "viņš celtu"
    },
    "partizipVergangenheit": {
      "de": "gehoben",
      "lv": "celts"
    }
  },
  {
    "infinitiv": {
      "de": "kennen",
      "lv": "pazīt / zināt"
    },
    "praesens": {
      "de": "kennen",
      "lv": "pazīt / zināt"
    },
    "imperfektIndikativ": {
      "de": "kannte",
      "lv": "pazina"
    },
    "imperfektKonjunktiv": {
      "de": "kannte",
      "lv": "pazina"
    },
    "partizipVergangenheit": {
      "de": "gekannt",
      "lv": "pazinis"
    }
  },
  {
    "infinitiv": {
      "de": "klingen",
      "lv": "skanēt"
    },
    "praesens": {
      "de": "er klingt",
      "lv": "viņš skan"
    },
    "imperfektIndikativ": {
      "de": "er klang",
      "lv": "viņš skanēja"
    },
    "imperfektKonjunktiv": {
      "de": "er klänge",
      "lv": "viņš skanētu"
    },
    "partizipVergangenheit": {
      "de": "geklungen",
      "lv": "skanējis"
    }
  },
  {
    "infinitiv": {
      "de": "kneifen",
      "lv": "kniebt"
    },
    "praesens": {
      "de": "er kneift",
      "lv": "viņš kniebj"
    },
    "imperfektIndikativ": {
      "de": "er kniff",
      "lv": "viņš knieba"
    },
    "imperfektKonjunktiv": {
      "de": "er kniffe",
      "lv": "viņš kniebtu"
    },
    "partizipVergangenheit": {
      "de": "gekniffen",
      "lv": "kniebts"
    }
  },
  {
    "infinitiv": {
      "de": "bleiben",
      "lv": "palikt"
    },
    "praesens": {
      "de": "er bleibt",
      "lv": "viņš paliek"
    },
    "imperfektIndikativ": {
      "de": "er blieb",
      "lv": "viņš palika"
    },
    "imperfektKonjunktiv": {
      "de": "er bliebe",
      "lv": "viņš paliktu"
    },
    "partizipVergangenheit": {
      "de": "geblieben (er ist)",
      "lv": "palicis"
    }
  },
  {
    "infinitiv": {
      "de": "bleichen",
      "lv": "balināt"
    },
    "praesens": {
      "de": "bleichen",
      "lv": "balināt"
    },
    "imperfektIndikativ": {
      "de": "blich",
      "lv": "balināja"
    },
    "imperfektKonjunktiv": {
      "de": "blich",
      "lv": "balināja"
    },
    "partizipVergangenheit": {
      "de": "geblichen",
      "lv": "balināts"
    }
  },
  {
    "infinitiv": {
      "de": "braten",
      "lv": "cept"
    },
    "praesens": {
      "de": "er brät",
      "lv": "viņš cep"
    },
    "imperfektIndikativ": {
      "de": "er briet",
      "lv": "viņš cepa"
    },
    "imperfektKonjunktiv": {
      "de": "er briete",
      "lv": "viņš ceptu"
    },
    "partizipVergangenheit": {
      "de": "gebraten",
      "lv": "cepts / izcepts"
    }
  },
  {
    "infinitiv": {
      "de": "brechen",
      "lv": "lauzt"
    },
    "praesens": {
      "de": "er bricht",
      "lv": "viņš lauž"
    },
    "imperfektIndikativ": {
      "de": "er brach",
      "lv": "viņš lauza"
    },
    "imperfektKonjunktiv": {
      "de": "er bräche",
      "lv": "viņš lauztu"
    },
    "partizipVergangenheit": {
      "de": "gebrochen",
      "lv": "lauzts / salauzts"
    }
  },
  {
    "infinitiv": {
      "de": "brennen",
      "lv": "degt"
    },
    "praesens": {
      "de": "brennen",
      "lv": "degt"
    },
    "imperfektIndikativ": {
      "de": "brannte",
      "lv": "dega"
    },
    "imperfektKonjunktiv": {
      "de": "brannte",
      "lv": "dega"
    },
    "partizipVergangenheit": {
      "de": "gebrannt",
      "lv": "dedzis"
    }
  },
  {
    "infinitiv": {
      "de": "bringen",
      "lv": "nest"
    },
    "praesens": {
      "de": "er bringt",
      "lv": "viņš nes"
    },
    "imperfektIndikativ": {
      "de": "er brachte",
      "lv": "viņš nesa"
    },
    "imperfektKonjunktiv": {
      "de": "er brächte",
      "lv": "viņš nestu"
    },
    "partizipVergangenheit": {
      "de": "gebracht",
      "lv": "nests / atnests"
    }
  },
  {
    "infinitiv": {
      "de": "denken",
      "lv": "domāt"
    },
    "praesens": {
      "de": "er denkt",
      "lv": "viņš domā"
    },
    "imperfektIndikativ": {
      "de": "er dachte",
      "lv": "viņš domāja"
    },
    "imperfektKonjunktiv": {
      "de": "er dächte",
      "lv": "viņš domātu"
    },
    "partizipVergangenheit": {
      "de": "gedacht",
      "lv": "domāts"
    }
  },
  {
    "infinitiv": {
      "de": "dingen",
      "lv": "nolīgt / vienoties"
    },
    "praesens": {
      "de": "dingen",
      "lv": "nolīgt / vienoties"
    },
    "imperfektIndikativ": {
      "de": "dingte",
      "lv": "nolīga"
    },
    "imperfektKonjunktiv": {
      "de": "dingte",
      "lv": "nolīga"
    },
    "partizipVergangenheit": {
      "de": "gedungen",
      "lv": "nolīgts"
    }
  },
  {
    "infinitiv": {
      "de": "dreschen",
      "lv": "kult"
    },
    "praesens": {
      "de": "er drischt",
      "lv": "viņš kuļ"
    },
    "imperfektIndikativ": {
      "de": "er drasch / er drosch",
      "lv": "viņš kūla"
    },
    "imperfektKonjunktiv": {
      "de": "er dräsche / er drösche",
      "lv": "viņš kultu"
    },
    "partizipVergangenheit": {
      "de": "gedroschen",
      "lv": "kults"
    }
  },
  {
    "infinitiv": {
      "de": "dringen",
      "lv": "ielauzties"
    },
    "praesens": {
      "de": "er dringt",
      "lv": "viņš ielaužas"
    },
    "imperfektIndikativ": {
      "de": "er drang",
      "lv": "viņš ielauzās"
    },
    "imperfektKonjunktiv": {
      "de": "er dränge",
      "lv": "viņš ielauztos"
    },
    "partizipVergangenheit": {
      "de": "gedrungen (er ist)",
      "lv": "ielauzies"
    }
  },
  {
    "infinitiv": {
      "de": "dünken",
      "lv": "šķist"
    },
    "praesens": {
      "de": "dünken",
      "lv": "šķist"
    },
    "imperfektIndikativ": {
      "de": "deuchte",
      "lv": "šķita"
    },
    "imperfektKonjunktiv": {
      "de": "deuchte",
      "lv": "šķita"
    },
    "partizipVergangenheit": {
      "de": "gedünkt",
      "lv": "šķitis"
    }
  },
  {
    "infinitiv": {
      "de": "dürfen",
      "lv": "drīkstēt"
    },
    "praesens": {
      "de": "dürfen",
      "lv": "drīkstēt"
    },
    "imperfektIndikativ": {
      "de": "durfte",
      "lv": "drīkstēja"
    },
    "imperfektKonjunktiv": {
      "de": "durfte",
      "lv": "drīkstēja"
    },
    "partizipVergangenheit": {
      "de": "gedurft",
      "lv": "drīkstējis"
    }
  },
  {
    "infinitiv": {
      "de": "empfehlen",
      "lv": "ieteikt"
    },
    "praesens": {
      "de": "er empfiehlt",
      "lv": "viņš iesaka"
    },
    "imperfektIndikativ": {
      "de": "er empfahl",
      "lv": "viņš ieteica"
    },
    "imperfektKonjunktiv": {
      "de": "er empfähle / er empföhle",
      "lv": "viņš ieteiktu"
    },
    "partizipVergangenheit": {
      "de": "empfohlen",
      "lv": "ieteikts"
    }
  },
  {
    "infinitiv": {
      "de": "empfinden",
      "lv": "sajust"
    },
    "praesens": {
      "de": "er empfindet",
      "lv": "viņš sajūt"
    },
    "imperfektIndikativ": {
      "de": "er empfand",
      "lv": "viņš sajuta"
    },
    "imperfektKonjunktiv": {
      "de": "er empfände",
      "lv": "viņš sajustu"
    },
    "partizipVergangenheit": {
      "de": "empfunden",
      "lv": "sajusts"
    }
  },
  {
    "infinitiv": {
      "de": "erlöschen",
      "lv": "izdzist"
    },
    "praesens": {
      "de": "er erlischt",
      "lv": "viņš izdziest"
    },
    "imperfektIndikativ": {
      "de": "er erlosch",
      "lv": "viņš izdzisa"
    },
    "imperfektKonjunktiv": {
      "de": "er erlösche",
      "lv": "viņš izdzistu"
    },
    "partizipVergangenheit": {
      "de": "erloschen (er ist)",
      "lv": "izdzisis"
    }
  },
  {
    "infinitiv": {
      "de": "erschrecken",
      "lv": "sabīties"
    },
    "praesens": {
      "de": "er erschrickt",
      "lv": "viņš sabīstas"
    },
    "imperfektIndikativ": {
      "de": "er erschrak",
      "lv": "viņš sabijās"
    },
    "imperfektKonjunktiv": {
      "de": "er erschräke",
      "lv": "viņš sabītos"
    },
    "partizipVergangenheit": {
      "de": "erschrocken (er ist)",
      "lv": "sabijies"
    }
  },
  {
    "infinitiv": {
      "de": "essen",
      "lv": "ēst"
    },
    "praesens": {
      "de": "er ißt",
      "lv": "viņš ēd"
    },
    "imperfektIndikativ": {
      "de": "er aß",
      "lv": "viņš ēda"
    },
    "imperfektKonjunktiv": {
      "de": "er äße",
      "lv": "viņš ēstu"
    },
    "partizipVergangenheit": {
      "de": "gegessen",
      "lv": "ēsts / apēsts"
    }
  },
  {
    "infinitiv": {
      "de": "fahren",
      "lv": "braukt"
    },
    "praesens": {
      "de": "er fährt",
      "lv": "viņš brauc"
    },
    "imperfektIndikativ": {
      "de": "er fuhr",
      "lv": "viņš brauca"
    },
    "imperfektKonjunktiv": {
      "de": "er führe",
      "lv": "viņš brauktu"
    },
    "partizipVergangenheit": {
      "de": "gefahren (er ist)",
      "lv": "braucis / aizbraucis"
    }
  },
  {
    "infinitiv": {
      "de": "fallen",
      "lv": "krist"
    },
    "praesens": {
      "de": "er fällt",
      "lv": "viņš krīt"
    },
    "imperfektIndikativ": {
      "de": "er fiel",
      "lv": "viņš krita"
    },
    "imperfektKonjunktiv": {
      "de": "er fiele",
      "lv": "viņš kristu"
    },
    "partizipVergangenheit": {
      "de": "gefallen (er ist)",
      "lv": "kritis"
    }
  },
  {
    "infinitiv": {
      "de": "fangen",
      "lv": "ķert"
    },
    "praesens": {
      "de": "er fängt",
      "lv": "viņš ķer"
    },
    "imperfektIndikativ": {
      "de": "er fing",
      "lv": "viņš ķēra"
    },
    "imperfektKonjunktiv": {
      "de": "er finge",
      "lv": "viņš ķertu"
    },
    "partizipVergangenheit": {
      "de": "gefangen",
      "lv": "ķerts / noķerts"
    }
  },
  {
    "infinitiv": {
      "de": "finden",
      "lv": "atrast"
    },
    "praesens": {
      "de": "er findet",
      "lv": "viņš atrod"
    },
    "imperfektIndikativ": {
      "de": "er fand",
      "lv": "viņš atrada"
    },
    "imperfektKonjunktiv": {
      "de": "er fände",
      "lv": "viņš atrastu"
    },
    "partizipVergangenheit": {
      "de": "gefunden",
      "lv": "atrasts"
    }
  },
  {
    "infinitiv": {
      "de": "fliegen",
      "lv": "laisties"
    },
    "praesens": {
      "de": "er fliegt",
      "lv": "viņš lido"
    },
    "imperfektIndikativ": {
      "de": "er flog",
      "lv": "viņš lidoja"
    },
    "imperfektKonjunktiv": {
      "de": "er flöge",
      "lv": "viņš lidotu"
    },
    "partizipVergangenheit": {
      "de": "geflogen (er ist)",
      "lv": "lidojis"
    }
  },
  {
    "infinitiv": {
      "de": "fliehen",
      "lv": "bēgt"
    },
    "praesens": {
      "de": "er flieht",
      "lv": "viņš bēg"
    },
    "imperfektIndikativ": {
      "de": "er floh",
      "lv": "viņš bēga"
    },
    "imperfektKonjunktiv": {
      "de": "er flöhe",
      "lv": "viņš bēgtu"
    },
    "partizipVergangenheit": {
      "de": "geflohen (er ist)",
      "lv": "aizbēdzis"
    }
  },
  {
    "infinitiv": {
      "de": "fließen",
      "lv": "tecēt"
    },
    "praesens": {
      "de": "er fließt",
      "lv": "viņš tek"
    },
    "imperfektIndikativ": {
      "de": "er floß",
      "lv": "viņš tecēja"
    },
    "imperfektKonjunktiv": {
      "de": "er flösse",
      "lv": "viņš tecētu"
    },
    "partizipVergangenheit": {
      "de": "geflossen (er ist)",
      "lv": "tecējis"
    }
  },
  {
    "infinitiv": {
      "de": "fressen",
      "lv": "ēst, rīt"
    },
    "praesens": {
      "de": "er frißt",
      "lv": "viņš ēd / rij"
    },
    "imperfektIndikativ": {
      "de": "er fraß",
      "lv": "viņš ēda / rija"
    },
    "imperfektKonjunktiv": {
      "de": "er fräße",
      "lv": "viņš ēstu / rītu"
    },
    "partizipVergangenheit": {
      "de": "gefressen",
      "lv": "apēsts / rīts"
    }
  },
  {
    "infinitiv": {
      "de": "frieren",
      "lv": "salt"
    },
    "praesens": {
      "de": "er friert",
      "lv": "viņš salst"
    },
    "imperfektIndikativ": {
      "de": "er fror",
      "lv": "viņš sala"
    },
    "imperfektKonjunktiv": {
      "de": "er fröre",
      "lv": "viņš saltu"
    },
    "partizipVergangenheit": {
      "de": "gefroren",
      "lv": "salis"
    }
  },
  {
    "infinitiv": {
      "de": "geben",
      "lv": "dot"
    },
    "praesens": {
      "de": "er gibt",
      "lv": "viņš dod"
    },
    "imperfektIndikativ": {
      "de": "er gab",
      "lv": "viņš deva"
    },
    "imperfektKonjunktiv": {
      "de": "er gäbe",
      "lv": "viņš dotu"
    },
    "partizipVergangenheit": {
      "de": "gegeben",
      "lv": "dots"
    }
  },
  {
    "infinitiv": {
      "de": "gedeihen",
      "lv": "izdoties"
    },
    "praesens": {
      "de": "er gedeiht",
      "lv": "viņam izdodas"
    },
    "imperfektIndikativ": {
      "de": "er gedieh",
      "lv": "viņam izdevās"
    },
    "imperfektKonjunktiv": {
      "de": "er gediehe",
      "lv": "viņam izdotos"
    },
    "partizipVergangenheit": {
      "de": "gediehen (er ist)",
      "lv": "izdevies"
    }
  },
  {
    "infinitiv": {
      "de": "gehen",
      "lv": "iet"
    },
    "praesens": {
      "de": "er geht",
      "lv": "viņš iet"
    },
    "imperfektIndikativ": {
      "de": "er ging",
      "lv": "viņš gāja"
    },
    "imperfektKonjunktiv": {
      "de": "er ginge",
      "lv": "viņš ietu"
    },
    "partizipVergangenheit": {
      "de": "gegangen (er ist)",
      "lv": "gājis"
    }
  },
  {
    "infinitiv": {
      "de": "gewinnen",
      "lv": "iegūt"
    },
    "praesens": {
      "de": "er gewinnt",
      "lv": "viņš iegūst"
    },
    "imperfektIndikativ": {
      "de": "er gewann",
      "lv": "viņš ieguva"
    },
    "imperfektKonjunktiv": {
      "de": "er gewönne / er gewänne",
      "lv": "viņš iegūtu"
    },
    "partizipVergangenheit": {
      "de": "gewonnen",
      "lv": "iegūts"
    }
  },
  {
    "infinitiv": {
      "de": "haben",
      "lv": "būt / piederēt"
    },
    "praesens": {
      "de": "haben",
      "lv": "būt / piederēt"
    },
    "imperfektIndikativ": {
      "de": "hatte",
      "lv": "bija"
    },
    "imperfektKonjunktiv": {
      "de": "hatte",
      "lv": "bija"
    },
    "partizipVergangenheit": {
      "de": "gehabt",
      "lv": "bijis"
    }
  },
  {
    "infinitiv": {
      "de": "halten",
      "lv": "turēt"
    },
    "praesens": {
      "de": "er hält",
      "lv": "viņš tur"
    },
    "imperfektIndikativ": {
      "de": "er hielt",
      "lv": "viņš turēja"
    },
    "imperfektKonjunktiv": {
      "de": "er hielte",
      "lv": "viņš turētu"
    },
    "partizipVergangenheit": {
      "de": "gehalten",
      "lv": "turēts"
    }
  },
  {
    "infinitiv": {
      "de": "heißen",
      "lv": "saukt"
    },
    "praesens": {
      "de": "er heißt",
      "lv": "viņš sauc / viņu sauc"
    },
    "imperfektIndikativ": {
      "de": "er hieß",
      "lv": "viņš sauca / viņu sauca"
    },
    "imperfektKonjunktiv": {
      "de": "er hieße",
      "lv": "viņš sauktu / viņu sauktu"
    },
    "partizipVergangenheit": {
      "de": "geheißen",
      "lv": "saukts"
    }
  },
  {
    "infinitiv": {
      "de": "helfen",
      "lv": "palīdzēt"
    },
    "praesens": {
      "de": "er hilft",
      "lv": "viņš palīdz"
    },
    "imperfektIndikativ": {
      "de": "er half",
      "lv": "viņš palīdzēja"
    },
    "imperfektKonjunktiv": {
      "de": "er hülfe / er hälfe",
      "lv": "viņš palīdzētu"
    },
    "partizipVergangenheit": {
      "de": "geholfen",
      "lv": "palīdzēts"
    }
  },
  {
    "infinitiv": {
      "de": "kommen",
      "lv": "nākt"
    },
    "praesens": {
      "de": "er kommt",
      "lv": "viņš nāk"
    },
    "imperfektIndikativ": {
      "de": "er kam",
      "lv": "viņš nāca"
    },
    "imperfektKonjunktiv": {
      "de": "er käme",
      "lv": "viņš nāktu"
    },
    "partizipVergangenheit": {
      "de": "gekommen (er ist)",
      "lv": "atnācis"
    }
  },
  {
    "infinitiv": {
      "de": "können",
      "lv": "varēt"
    },
    "praesens": {
      "de": "können",
      "lv": "varēt"
    },
    "imperfektIndikativ": {
      "de": "konnte",
      "lv": "varēja"
    },
    "imperfektKonjunktiv": {
      "de": "konnte",
      "lv": "varēja"
    },
    "partizipVergangenheit": {
      "de": "gekonnt",
      "lv": "varējis"
    }
  },
  {
    "infinitiv": {
      "de": "kriechen",
      "lv": "līst"
    },
    "praesens": {
      "de": "er kriecht",
      "lv": "viņš lien"
    },
    "imperfektIndikativ": {
      "de": "er kroch",
      "lv": "viņš līda"
    },
    "imperfektKonjunktiv": {
      "de": "er kröche",
      "lv": "viņš līstu"
    },
    "partizipVergangenheit": {
      "de": "gekrochen (er ist)",
      "lv": "līdis"
    }
  },
  {
    "infinitiv": {
      "de": "laden",
      "lv": "kraut, ielūgt"
    },
    "praesens": {
      "de": "er lädt",
      "lv": "viņš krauj / ielūdz"
    },
    "imperfektIndikativ": {
      "de": "er lud",
      "lv": "viņš krāva / ielūdza"
    },
    "imperfektKonjunktiv": {
      "de": "er lüde",
      "lv": "viņš krautu / ielūgtu"
    },
    "partizipVergangenheit": {
      "de": "geladen",
      "lv": "krauts / ielūgts"
    }
  },
  {
    "infinitiv": {
      "de": "lassen",
      "lv": "likt, ļaut"
    },
    "praesens": {
      "de": "er läßt",
      "lv": "viņš liek / ļauj"
    },
    "imperfektIndikativ": {
      "de": "er ließ",
      "lv": "viņš lika / ļāva"
    },
    "imperfektKonjunktiv": {
      "de": "er ließe",
      "lv": "viņš liktu / ļautu"
    },
    "partizipVergangenheit": {
      "de": "gelassen",
      "lv": "likts / ļauts"
    }
  },
  {
    "infinitiv": {
      "de": "laufen",
      "lv": "skriet"
    },
    "praesens": {
      "de": "er läuft",
      "lv": "viņš skrien"
    },
    "imperfektIndikativ": {
      "de": "er lief",
      "lv": "viņš skrēja"
    },
    "imperfektKonjunktiv": {
      "de": "er liefe",
      "lv": "viņš skrietu"
    },
    "partizipVergangenheit": {
      "de": "gelaufen (er ist)",
      "lv": "skrējis"
    }
  },
  {
    "infinitiv": {
      "de": "leiden",
      "lv": "ciest"
    },
    "praesens": {
      "de": "er leidet",
      "lv": "viņš cieš"
    },
    "imperfektIndikativ": {
      "de": "er litt",
      "lv": "viņš cieta"
    },
    "imperfektKonjunktiv": {
      "de": "er litte",
      "lv": "viņš ciestu"
    },
    "partizipVergangenheit": {
      "de": "gelitten",
      "lv": "ciests"
    }
  },
  {
    "infinitiv": {
      "de": "leihen",
      "lv": "aizdot / aizņemties"
    },
    "praesens": {
      "de": "er leiht",
      "lv": "viņš aizdod / aizņemas"
    },
    "imperfektIndikativ": {
      "de": "er lieh",
      "lv": "viņš aizdeva / aizņēmās"
    },
    "imperfektKonjunktiv": {
      "de": "er liehe",
      "lv": "viņš aizdotu / aizņemtos"
    },
    "partizipVergangenheit": {
      "de": "geliehen",
      "lv": "aizdots / aizņemts"
    }
  },
  {
    "infinitiv": {
      "de": "lesen",
      "lv": "lasīt"
    },
    "praesens": {
      "de": "er liest",
      "lv": "viņš lasa"
    },
    "imperfektIndikativ": {
      "de": "er las",
      "lv": "viņš lasīja"
    },
    "imperfektKonjunktiv": {
      "de": "er läse",
      "lv": "viņš lasītu"
    },
    "partizipVergangenheit": {
      "de": "gelesen",
      "lv": "lasīts"
    }
  },
  {
    "infinitiv": {
      "de": "liegen",
      "lv": "gulēt"
    },
    "praesens": {
      "de": "er liegt",
      "lv": "viņš guļ"
    },
    "imperfektIndikativ": {
      "de": "er lag",
      "lv": "viņš gulēja"
    },
    "imperfektKonjunktiv": {
      "de": "er läge",
      "lv": "viņš gulētu"
    },
    "partizipVergangenheit": {
      "de": "gelegen",
      "lv": "gulēts"
    }
  },
  {
    "infinitiv": {
      "de": "lügen",
      "lv": "melot"
    },
    "praesens": {
      "de": "er lügt",
      "lv": "viņš melo"
    },
    "imperfektIndikativ": {
      "de": "er log",
      "lv": "viņš meloja"
    },
    "imperfektKonjunktiv": {
      "de": "er löge",
      "lv": "viņš melotu"
    },
    "partizipVergangenheit": {
      "de": "gelogen",
      "lv": "melots"
    }
  },
  {
    "infinitiv": {
      "de": "mahlen",
      "lv": "malt"
    },
    "praesens": {
      "de": "er mahlt",
      "lv": "viņš maļ"
    },
    "imperfektIndikativ": {
      "de": "er mahlte",
      "lv": "viņš mala"
    },
    "imperfektKonjunktiv": {
      "de": "er malte",
      "lv": "viņš maltu"
    },
    "partizipVergangenheit": {
      "de": "gemahlen",
      "lv": "malts"
    }
  },
  {
    "infinitiv": {
      "de": "meiden",
      "lv": "izvairīties"
    },
    "praesens": {
      "de": "er meidet",
      "lv": "viņš izvairās"
    },
    "imperfektIndikativ": {
      "de": "er mied",
      "lv": "viņš izvairījās"
    },
    "imperfektKonjunktiv": {
      "de": "er miede",
      "lv": "viņš izvairītos"
    },
    "partizipVergangenheit": {
      "de": "gemieden",
      "lv": "izvairīts"
    }
  },
  {
    "infinitiv": {
      "de": "melken",
      "lv": "slaukt"
    },
    "praesens": {
      "de": "er milkt / er melkt",
      "lv": "viņš slauc"
    },
    "imperfektIndikativ": {
      "de": "er molk / er melkte",
      "lv": "viņš slauca"
    },
    "imperfektKonjunktiv": {
      "de": "er mölke / er melkte",
      "lv": "viņš slauktu"
    },
    "partizipVergangenheit": {
      "de": "gemolken / gemelkt",
      "lv": "slaukts"
    }
  },
  {
    "infinitiv": {
      "de": "messen",
      "lv": "mērīt"
    },
    "praesens": {
      "de": "er mißt",
      "lv": "viņš mēra"
    },
    "imperfektIndikativ": {
      "de": "er maß",
      "lv": "viņš mērīja"
    },
    "imperfektKonjunktiv": {
      "de": "er mäße",
      "lv": "viņš mērītu"
    },
    "partizipVergangenheit": {
      "de": "gemessen",
      "lv": "mērīts"
    }
  },
  {
    "infinitiv": {
      "de": "misslingen",
      "lv": "neizdoties"
    },
    "praesens": {
      "de": "misslingen",
      "lv": "neizdoties"
    },
    "imperfektIndikativ": {
      "de": "misslang",
      "lv": "neizdevās"
    },
    "imperfektKonjunktiv": {
      "de": "misslang",
      "lv": "neizdevās"
    },
    "partizipVergangenheit": {
      "de": "misslungen",
      "lv": "neizdevies"
    }
  },
  {
    "infinitiv": {
      "de": "mögen",
      "lv": "patikt"
    },
    "praesens": {
      "de": "mögen",
      "lv": "patikt"
    },
    "imperfektIndikativ": {
      "de": "mochte",
      "lv": "patika"
    },
    "imperfektKonjunktiv": {
      "de": "mochte",
      "lv": "patika"
    },
    "partizipVergangenheit": {
      "de": "gemocht",
      "lv": "paticis"
    }
  },
  {
    "infinitiv": {
      "de": "müssen",
      "lv": "vajadzēt"
    },
    "praesens": {
      "de": "müssen",
      "lv": "vajadzēt"
    },
    "imperfektIndikativ": {
      "de": "musste",
      "lv": "vajadzēja"
    },
    "imperfektKonjunktiv": {
      "de": "musste",
      "lv": "vajadzēja"
    },
    "partizipVergangenheit": {
      "de": "gemusst",
      "lv": "vajadzējis"
    }
  },
  {
    "infinitiv": {
      "de": "nehmen",
      "lv": "ņemt"
    },
    "praesens": {
      "de": "er nimmt",
      "lv": "viņš ņem"
    },
    "imperfektIndikativ": {
      "de": "er nahm",
      "lv": "viņš ņēma"
    },
    "imperfektKonjunktiv": {
      "de": "er nähme",
      "lv": "viņš ņemtu"
    },
    "partizipVergangenheit": {
      "de": "genommen",
      "lv": "ņemts"
    }
  },
  {
    "infinitiv": {
      "de": "nennen",
      "lv": "nosaukt"
    },
    "praesens": {
      "de": "er nennt",
      "lv": "viņš nosauc"
    },
    "imperfektIndikativ": {
      "de": "er nannte",
      "lv": "viņš nosauca"
    },
    "imperfektKonjunktiv": {
      "de": "er nennte",
      "lv": "viņš nosauktu"
    },
    "partizipVergangenheit": {
      "de": "genannt",
      "lv": "nosaukts"
    }
  },
  {
    "infinitiv": {
      "de": "pfeifen",
      "lv": "svilpot"
    },
    "praesens": {
      "de": "er pfeift",
      "lv": "viņš svilpo"
    },
    "imperfektIndikativ": {
      "de": "er pfiff",
      "lv": "viņš svilpa"
    },
    "imperfektKonjunktiv": {
      "de": "er pfiffe",
      "lv": "viņš svilpotu"
    },
    "partizipVergangenheit": {
      "de": "gepfiffen",
      "lv": "svilpots"
    }
  },
  {
    "infinitiv": {
      "de": "pflegen",
      "lv": "kopt"
    },
    "praesens": {
      "de": "pflegen",
      "lv": "kopt"
    },
    "imperfektIndikativ": {
      "de": "pflegte vai pflog",
      "lv": "kopa"
    },
    "imperfektKonjunktiv": {
      "de": "pflegte vai pflog",
      "lv": "kopa"
    },
    "partizipVergangenheit": {
      "de": "gepflegt vai gepflogen",
      "lv": "kopts"
    }
  },
  {
    "infinitiv": {
      "de": "preisen",
      "lv": "slavēt"
    },
    "praesens": {
      "de": "er preist",
      "lv": "viņš slavē"
    },
    "imperfektIndikativ": {
      "de": "er pries",
      "lv": "viņš slavēja"
    },
    "imperfektKonjunktiv": {
      "de": "er priese",
      "lv": "viņš slavētu"
    },
    "partizipVergangenheit": {
      "de": "gepriesen",
      "lv": "slavēts"
    }
  },
  {
    "infinitiv": {
      "de": "quellen",
      "lv": "briest"
    },
    "praesens": {
      "de": "er quillt",
      "lv": "viņš briest"
    },
    "imperfektIndikativ": {
      "de": "er quoll",
      "lv": "viņš brieda"
    },
    "imperfektKonjunktiv": {
      "de": "er quölle",
      "lv": "viņš briestu"
    },
    "partizipVergangenheit": {
      "de": "gequollen (er ist)",
      "lv": "uzbriedis"
    }
  },
  {
    "infinitiv": {
      "de": "raten",
      "lv": "ieteikt / minēt"
    },
    "praesens": {
      "de": "er rät",
      "lv": "viņš iesaka / min"
    },
    "imperfektIndikativ": {
      "de": "er riet",
      "lv": "viņš ieteica / minēja"
    },
    "imperfektKonjunktiv": {
      "de": "er riete",
      "lv": "viņš ieteiktu / minētu"
    },
    "partizipVergangenheit": {
      "de": "geraten",
      "lv": "ieteikts / minēts"
    }
  },
  {
    "infinitiv": {
      "de": "reiben",
      "lv": "berzt"
    },
    "praesens": {
      "de": "er reibt",
      "lv": "viņš berž"
    },
    "imperfektIndikativ": {
      "de": "er rieb",
      "lv": "viņš berza"
    },
    "imperfektKonjunktiv": {
      "de": "er riebe",
      "lv": "viņš berztu"
    },
    "partizipVergangenheit": {
      "de": "gerieben",
      "lv": "berzts"
    }
  },
  {
    "infinitiv": {
      "de": "reißen",
      "lv": "raut"
    },
    "praesens": {
      "de": "er reißt",
      "lv": "viņš rauj"
    },
    "imperfektIndikativ": {
      "de": "er riß",
      "lv": "viņš rāva"
    },
    "imperfektKonjunktiv": {
      "de": "er risse",
      "lv": "viņš rautu"
    },
    "partizipVergangenheit": {
      "de": "gerissen",
      "lv": "rauts"
    }
  },
  {
    "infinitiv": {
      "de": "reiten",
      "lv": "jāt"
    },
    "praesens": {
      "de": "er reitet",
      "lv": "viņš jāj"
    },
    "imperfektIndikativ": {
      "de": "er ritt",
      "lv": "viņš jāja"
    },
    "imperfektKonjunktiv": {
      "de": "er ritte",
      "lv": "viņš jātu"
    },
    "partizipVergangenheit": {
      "de": "geritten (er ist)",
      "lv": "jājis"
    }
  },
  {
    "infinitiv": {
      "de": "rennen",
      "lv": "skriet"
    },
    "praesens": {
      "de": "er rennt",
      "lv": "viņš skrien"
    },
    "imperfektIndikativ": {
      "de": "er rannte",
      "lv": "viņš skrēja"
    },
    "imperfektKonjunktiv": {
      "de": "er rennte",
      "lv": "viņš skrietu"
    },
    "partizipVergangenheit": {
      "de": "gerannt",
      "lv": "skrējis"
    }
  },
  {
    "infinitiv": {
      "de": "riechen",
      "lv": "ost"
    },
    "praesens": {
      "de": "er riecht",
      "lv": "viņš ož"
    },
    "imperfektIndikativ": {
      "de": "er roch",
      "lv": "viņš oda"
    },
    "imperfektKonjunktiv": {
      "de": "er röche",
      "lv": "viņš ostu"
    },
    "partizipVergangenheit": {
      "de": "gerochen",
      "lv": "osts"
    }
  },
  {
    "infinitiv": {
      "de": "ringen",
      "lv": "lauzties"
    },
    "praesens": {
      "de": "er ringt",
      "lv": "viņš laužas"
    },
    "imperfektIndikativ": {
      "de": "er rang",
      "lv": "viņš lauzās"
    },
    "imperfektKonjunktiv": {
      "de": "er ränge",
      "lv": "viņš lauztos"
    },
    "partizipVergangenheit": {
      "de": "gerungen",
      "lv": "laucies"
    }
  },
  {
    "infinitiv": {
      "de": "rinnen",
      "lv": "tecēt"
    },
    "praesens": {
      "de": "er rinnt",
      "lv": "viņš tek"
    },
    "imperfektIndikativ": {
      "de": "er rann",
      "lv": "viņš tecēja"
    },
    "imperfektKonjunktiv": {
      "de": "er ränne / er rönne",
      "lv": "viņš tecētu"
    },
    "partizipVergangenheit": {
      "de": "geronnen (er ist)",
      "lv": "tecējis / sarecējis"
    }
  },
  {
    "infinitiv": {
      "de": "rufen",
      "lv": "saukt"
    },
    "praesens": {
      "de": "er ruft",
      "lv": "viņš sauc"
    },
    "imperfektIndikativ": {
      "de": "er rief",
      "lv": "viņš sauca"
    },
    "imperfektKonjunktiv": {
      "de": "er riefe",
      "lv": "viņš sauktu"
    },
    "partizipVergangenheit": {
      "de": "gerufen",
      "lv": "saukts"
    }
  },
  {
    "infinitiv": {
      "de": "salzen",
      "lv": "sālīt"
    },
    "praesens": {
      "de": "er salzt",
      "lv": "viņš sāla"
    },
    "imperfektIndikativ": {
      "de": "er salzte",
      "lv": "viņš sālīja"
    },
    "imperfektKonjunktiv": {
      "de": "er salzte",
      "lv": "viņš sālītu"
    },
    "partizipVergangenheit": {
      "de": "gesalzen",
      "lv": "sālīts"
    }
  },
  {
    "infinitiv": {
      "de": "saufen",
      "lv": "žūpot / dzert"
    },
    "praesens": {
      "de": "er säuft",
      "lv": "viņš žūpo / dzer"
    },
    "imperfektIndikativ": {
      "de": "er soff",
      "lv": "viņš žūpoja / dzēra"
    },
    "imperfektKonjunktiv": {
      "de": "er söffe",
      "lv": "viņš žūpotu / dzertu"
    },
    "partizipVergangenheit": {
      "de": "gesoffen",
      "lv": "dzerts"
    }
  },
  {
    "infinitiv": {
      "de": "saugen",
      "lv": "sūkt"
    },
    "praesens": {
      "de": "er saugt",
      "lv": "viņš sūc"
    },
    "imperfektIndikativ": {
      "de": "er sog",
      "lv": "viņš sūca"
    },
    "imperfektKonjunktiv": {
      "de": "er söge",
      "lv": "viņš sūktu"
    },
    "partizipVergangenheit": {
      "de": "gesogen",
      "lv": "sūkts"
    }
  },
  {
    "infinitiv": {
      "de": "schaffen",
      "lv": "radīt"
    },
    "praesens": {
      "de": "er schafft",
      "lv": "viņš rada"
    },
    "imperfektIndikativ": {
      "de": "er schuf",
      "lv": "viņš radīja"
    },
    "imperfektKonjunktiv": {
      "de": "er schüfe",
      "lv": "viņš radītu"
    },
    "partizipVergangenheit": {
      "de": "geschaffen",
      "lv": "radīts"
    }
  },
  {
    "infinitiv": {
      "de": "schallen",
      "lv": "skanēt"
    },
    "praesens": {
      "de": "schallen",
      "lv": "skanēt"
    },
    "imperfektIndikativ": {
      "de": "schallte vai scholl",
      "lv": "skanēja"
    },
    "imperfektKonjunktiv": {
      "de": "schallte vai scholl",
      "lv": "skanēja"
    },
    "partizipVergangenheit": {
      "de": "geschallt",
      "lv": "skanējis"
    }
  },
  {
    "infinitiv": {
      "de": "scheiden",
      "lv": "šķirt / šķirties"
    },
    "praesens": {
      "de": "er scheidet",
      "lv": "viņš šķir / šķiras"
    },
    "imperfektIndikativ": {
      "de": "er schied",
      "lv": "viņš šķīra / šķīrās"
    },
    "imperfektKonjunktiv": {
      "de": "er schiede",
      "lv": "viņš šķirtu / šķirtos"
    },
    "partizipVergangenheit": {
      "de": "geschieden (er hat / er ist)",
      "lv": "šķirts / šķīries"
    }
  },
  {
    "infinitiv": {
      "de": "scheinen",
      "lv": "spīdēt / likties"
    },
    "praesens": {
      "de": "er scheint",
      "lv": "viņš spīd / šķiet"
    },
    "imperfektIndikativ": {
      "de": "er schien",
      "lv": "viņš spīdēja / šķita"
    },
    "imperfektKonjunktiv": {
      "de": "er schiene",
      "lv": "viņš spīdētu / šķistu"
    },
    "partizipVergangenheit": {
      "de": "geschienen",
      "lv": "spīdējis / šķitis"
    }
  },
  {
    "infinitiv": {
      "de": "schelten",
      "lv": "bārt"
    },
    "praesens": {
      "de": "er schilt",
      "lv": "viņš bar"
    },
    "imperfektIndikativ": {
      "de": "er schalt",
      "lv": "viņš bāra"
    },
    "imperfektKonjunktiv": {
      "de": "er schölte / er schälte",
      "lv": "viņš bārtu"
    },
    "partizipVergangenheit": {
      "de": "gescholten",
      "lv": "bārts"
    }
  },
  {
    "infinitiv": {
      "de": "scheren",
      "lv": "cirpt"
    },
    "praesens": {
      "de": "scheren",
      "lv": "cirpt"
    },
    "imperfektIndikativ": {
      "de": "schor vai scherte",
      "lv": "cirpa"
    },
    "imperfektKonjunktiv": {
      "de": "schor vai scherte",
      "lv": "cirpa"
    },
    "partizipVergangenheit": {
      "de": "geschoren vai geschert",
      "lv": "apcirpts"
    }
  },
  {
    "infinitiv": {
      "de": "schieben",
      "lv": "stumt"
    },
    "praesens": {
      "de": "er schiebt",
      "lv": "viņš stumj"
    },
    "imperfektIndikativ": {
      "de": "er schob",
      "lv": "viņš stūma"
    },
    "imperfektKonjunktiv": {
      "de": "er schöbe",
      "lv": "viņš stumtu"
    },
    "partizipVergangenheit": {
      "de": "geschoben",
      "lv": "stumts"
    }
  },
  {
    "infinitiv": {
      "de": "schießen",
      "lv": "šaut"
    },
    "praesens": {
      "de": "er schießt",
      "lv": "viņš šauj"
    },
    "imperfektIndikativ": {
      "de": "er schoß",
      "lv": "viņš šāva"
    },
    "imperfektKonjunktiv": {
      "de": "er schösse",
      "lv": "viņš šautu"
    },
    "partizipVergangenheit": {
      "de": "geschossen",
      "lv": "šauts"
    }
  },
  {
    "infinitiv": {
      "de": "schinden",
      "lv": "mocīt"
    },
    "praesens": {
      "de": "schinden",
      "lv": "mocīt"
    },
    "imperfektIndikativ": {
      "de": "schindete",
      "lv": "mocīja"
    },
    "imperfektKonjunktiv": {
      "de": "schindete",
      "lv": "mocīja"
    },
    "partizipVergangenheit": {
      "de": "geschunden",
      "lv": "mocīts"
    }
  },
  {
    "infinitiv": {
      "de": "schlafen",
      "lv": "gulēt"
    },
    "praesens": {
      "de": "er schläft",
      "lv": "viņš guļ"
    },
    "imperfektIndikativ": {
      "de": "er schlief",
      "lv": "viņš gulēja"
    },
    "imperfektKonjunktiv": {
      "de": "er schliefe",
      "lv": "viņš gulētu"
    },
    "partizipVergangenheit": {
      "de": "geschlafen",
      "lv": "gulēts"
    }
  },
  {
    "infinitiv": {
      "de": "schlagen",
      "lv": "sist"
    },
    "praesens": {
      "de": "er schlägt",
      "lv": "viņš sit"
    },
    "imperfektIndikativ": {
      "de": "er schlug",
      "lv": "viņš sita"
    },
    "imperfektKonjunktiv": {
      "de": "er schlüge",
      "lv": "viņš sistu"
    },
    "partizipVergangenheit": {
      "de": "geschlagen",
      "lv": "sists"
    }
  },
  {
    "infinitiv": {
      "de": "schleichen",
      "lv": "līst"
    },
    "praesens": {
      "de": "er schleicht",
      "lv": "viņš lien"
    },
    "imperfektIndikativ": {
      "de": "er schlich",
      "lv": "viņš līda"
    },
    "imperfektKonjunktiv": {
      "de": "er schliche",
      "lv": "viņš līstu"
    },
    "partizipVergangenheit": {
      "de": "geschlichen (er ist)",
      "lv": "līdis"
    }
  },
  {
    "infinitiv": {
      "de": "schleifen",
      "lv": "slīpēt"
    },
    "praesens": {
      "de": "er schleift",
      "lv": "viņš slīpē"
    },
    "imperfektIndikativ": {
      "de": "er schliff",
      "lv": "viņš slīpēja"
    },
    "imperfektKonjunktiv": {
      "de": "er schliffe",
      "lv": "viņš slīpētu"
    },
    "partizipVergangenheit": {
      "de": "geschliffen",
      "lv": "slīpēts"
    }
  },
  {
    "infinitiv": {
      "de": "schließen",
      "lv": "slēgt"
    },
    "praesens": {
      "de": "er schließt",
      "lv": "viņš slēdz"
    },
    "imperfektIndikativ": {
      "de": "er schloß",
      "lv": "viņš slēdza"
    },
    "imperfektKonjunktiv": {
      "de": "er schlösse",
      "lv": "viņš slēgtu"
    },
    "partizipVergangenheit": {
      "de": "geschlossen",
      "lv": "slēgts"
    }
  },
  {
    "infinitiv": {
      "de": "schlingen",
      "lv": "rīt"
    },
    "praesens": {
      "de": "er schlingt",
      "lv": "viņš rij"
    },
    "imperfektIndikativ": {
      "de": "er schlang",
      "lv": "viņš rija"
    },
    "imperfektKonjunktiv": {
      "de": "er schlänge",
      "lv": "viņš rītu"
    },
    "partizipVergangenheit": {
      "de": "geschlungen",
      "lv": "rīts"
    }
  },
  {
    "infinitiv": {
      "de": "schmeißen",
      "lv": "mest"
    },
    "praesens": {
      "de": "er schmeißt",
      "lv": "viņš met"
    },
    "imperfektIndikativ": {
      "de": "er schmiß",
      "lv": "viņš meta"
    },
    "imperfektKonjunktiv": {
      "de": "er schmisse",
      "lv": "viņš mestu"
    },
    "partizipVergangenheit": {
      "de": "geschmissen",
      "lv": "mests"
    }
  },
  {
    "infinitiv": {
      "de": "schmelzen",
      "lv": "kust"
    },
    "praesens": {
      "de": "er schmilzt",
      "lv": "viņš kūst"
    },
    "imperfektIndikativ": {
      "de": "er schmolz",
      "lv": "viņš kusa"
    },
    "imperfektKonjunktiv": {
      "de": "er schmölze",
      "lv": "viņš kustu"
    },
    "partizipVergangenheit": {
      "de": "geschmolzen (er ist)",
      "lv": "kusis"
    }
  },
  {
    "infinitiv": {
      "de": "schnauben",
      "lv": "šņākt"
    },
    "praesens": {
      "de": "schnauben",
      "lv": "šņākt"
    },
    "imperfektIndikativ": {
      "de": "schnaubte vai schnob",
      "lv": "šņāca"
    },
    "imperfektKonjunktiv": {
      "de": "schnaubte vai schnob",
      "lv": "šņāca"
    },
    "partizipVergangenheit": {
      "de": "geschnaubt vai geschnoben",
      "lv": "nošņācies"
    }
  },
  {
    "infinitiv": {
      "de": "schneiden",
      "lv": "griezt"
    },
    "praesens": {
      "de": "er schneidet",
      "lv": "viņš griež"
    },
    "imperfektIndikativ": {
      "de": "er schnitt",
      "lv": "viņš grieza"
    },
    "imperfektKonjunktiv": {
      "de": "er schnitte",
      "lv": "viņš grieztu"
    },
    "partizipVergangenheit": {
      "de": "geschnitten",
      "lv": "griezts"
    }
  },
  {
    "infinitiv": {
      "de": "schreiben",
      "lv": "rakstīt"
    },
    "praesens": {
      "de": "er schreibt",
      "lv": "viņš raksta"
    },
    "imperfektIndikativ": {
      "de": "er schrieb",
      "lv": "viņš rakstīja"
    },
    "imperfektKonjunktiv": {
      "de": "er schriebe",
      "lv": "viņš rakstītu"
    },
    "partizipVergangenheit": {
      "de": "geschrieben",
      "lv": "rakstīts"
    }
  },
  {
    "infinitiv": {
      "de": "schreien",
      "lv": "kliegt"
    },
    "praesens": {
      "de": "er schreit",
      "lv": "viņš kliedz"
    },
    "imperfektIndikativ": {
      "de": "er schrie",
      "lv": "viņš kliedza"
    },
    "imperfektKonjunktiv": {
      "de": "er schriee",
      "lv": "viņš kliegtu"
    },
    "partizipVergangenheit": {
      "de": "geschrien",
      "lv": "kliegts"
    }
  },
  {
    "infinitiv": {
      "de": "schreiten",
      "lv": "soļot"
    },
    "praesens": {
      "de": "er schreitet",
      "lv": "viņš soļo"
    },
    "imperfektIndikativ": {
      "de": "er schritt",
      "lv": "viņš soļoja"
    },
    "imperfektKonjunktiv": {
      "de": "er schritte",
      "lv": "viņš soļotu"
    },
    "partizipVergangenheit": {
      "de": "geschritten (er ist)",
      "lv": "soļojis"
    }
  },
  {
    "infinitiv": {
      "de": "schweigen",
      "lv": "klusēt"
    },
    "praesens": {
      "de": "er schweigt",
      "lv": "viņš klusē"
    },
    "imperfektIndikativ": {
      "de": "er schwieg",
      "lv": "viņš klusēja"
    },
    "imperfektKonjunktiv": {
      "de": "er schwiege",
      "lv": "viņš klusētu"
    },
    "partizipVergangenheit": {
      "de": "geschwiegen",
      "lv": "klusēts"
    }
  },
  {
    "infinitiv": {
      "de": "schwellen",
      "lv": "pampt"
    },
    "praesens": {
      "de": "er schwillt",
      "lv": "viņš pampst"
    },
    "imperfektIndikativ": {
      "de": "er schwoll",
      "lv": "viņš pampa"
    },
    "imperfektKonjunktiv": {
      "de": "er schwölle",
      "lv": "viņš pamptu"
    },
    "partizipVergangenheit": {
      "de": "geschwollen (er ist)",
      "lv": "pampis"
    }
  },
  {
    "infinitiv": {
      "de": "schwimmen",
      "lv": "peldēt"
    },
    "praesens": {
      "de": "er schwimmt",
      "lv": "viņš peld"
    },
    "imperfektIndikativ": {
      "de": "er schwamm",
      "lv": "viņš peldēja"
    },
    "imperfektKonjunktiv": {
      "de": "er schwömme / er schwämme",
      "lv": "viņš peldētu"
    },
    "partizipVergangenheit": {
      "de": "geschwommen (er ist)",
      "lv": "peldējis"
    }
  },
  {
    "infinitiv": {
      "de": "schwinden",
      "lv": "zust"
    },
    "praesens": {
      "de": "er schwindet",
      "lv": "viņš zūd"
    },
    "imperfektIndikativ": {
      "de": "er schwand",
      "lv": "viņš zuda"
    },
    "imperfektKonjunktiv": {
      "de": "er schwände",
      "lv": "viņš zustu"
    },
    "partizipVergangenheit": {
      "de": "geschwunden (er ist)",
      "lv": "zudis"
    }
  },
  {
    "infinitiv": {
      "de": "schwingen",
      "lv": "vicināt"
    },
    "praesens": {
      "de": "er schwingt",
      "lv": "viņš vicina"
    },
    "imperfektIndikativ": {
      "de": "er schwang",
      "lv": "viņš vicināja"
    },
    "imperfektKonjunktiv": {
      "de": "er schwänge",
      "lv": "viņš vicinātu"
    },
    "partizipVergangenheit": {
      "de": "geschwungen",
      "lv": "vicināts"
    }
  },
  {
    "infinitiv": {
      "de": "schwören",
      "lv": "zvērēt"
    },
    "praesens": {
      "de": "er schwört",
      "lv": "viņš zvēr"
    },
    "imperfektIndikativ": {
      "de": "er schwur / er schwor",
      "lv": "viņš zvērēja"
    },
    "imperfektKonjunktiv": {
      "de": "er schwöre",
      "lv": "viņš zvērētu"
    },
    "partizipVergangenheit": {
      "de": "geschworen",
      "lv": "zvērēts"
    }
  },
  {
    "infinitiv": {
      "de": "sehen",
      "lv": "redzēt"
    },
    "praesens": {
      "de": "er sieht",
      "lv": "viņš redz"
    },
    "imperfektIndikativ": {
      "de": "er sah",
      "lv": "viņš redzēja"
    },
    "imperfektKonjunktiv": {
      "de": "er sähe",
      "lv": "viņš redzētu"
    },
    "partizipVergangenheit": {
      "de": "gesehen",
      "lv": "redzēts"
    }
  },
  {
    "infinitiv": {
      "de": "sein",
      "lv": "būt"
    },
    "praesens": {
      "de": "sein",
      "lv": "būt"
    },
    "imperfektIndikativ": {
      "de": "war",
      "lv": "bija"
    },
    "imperfektKonjunktiv": {
      "de": "war",
      "lv": "bija"
    },
    "partizipVergangenheit": {
      "de": "gewesen",
      "lv": "bijis"
    }
  },
  {
    "infinitiv": {
      "de": "senden",
      "lv": "sūtīt"
    },
    "praesens": {
      "de": "er sendet",
      "lv": "viņš sūta"
    },
    "imperfektIndikativ": {
      "de": "er sandte / er sendete",
      "lv": "viņš sūtīja"
    },
    "imperfektKonjunktiv": {
      "de": "er sendete",
      "lv": "viņš sūtītu"
    },
    "partizipVergangenheit": {
      "de": "gesandt / gesendet",
      "lv": "sūtīts"
    }
  },
  {
    "infinitiv": {
      "de": "sieden",
      "lv": "vārīt"
    },
    "praesens": {
      "de": "sieden",
      "lv": "vārīt"
    },
    "imperfektIndikativ": {
      "de": "sott vai siedete",
      "lv": "vārīja"
    },
    "imperfektKonjunktiv": {
      "de": "sott vai siedete",
      "lv": "vārīja"
    },
    "partizipVergangenheit": {
      "de": "gesotten vai gesiedet",
      "lv": "vārīts"
    }
  },
  {
    "infinitiv": {
      "de": "singen",
      "lv": "dziedāt"
    },
    "praesens": {
      "de": "er singt",
      "lv": "viņš dzied"
    },
    "imperfektIndikativ": {
      "de": "er sang",
      "lv": "viņš dziedāja"
    },
    "imperfektKonjunktiv": {
      "de": "er sänge",
      "lv": "viņš dziedātu"
    },
    "partizipVergangenheit": {
      "de": "gesungen",
      "lv": "dziedāts"
    }
  },
  {
    "infinitiv": {
      "de": "sinken",
      "lv": "grimt"
    },
    "praesens": {
      "de": "er sinkt",
      "lv": "viņš grimst"
    },
    "imperfektIndikativ": {
      "de": "er sank",
      "lv": "viņš grima"
    },
    "imperfektKonjunktiv": {
      "de": "er sänke",
      "lv": "viņš grimtu"
    },
    "partizipVergangenheit": {
      "de": "gesunken (er ist)",
      "lv": "grimis"
    }
  },
  {
    "infinitiv": {
      "de": "sinnen",
      "lv": "prātot"
    },
    "praesens": {
      "de": "er sinnt",
      "lv": "viņš prāto"
    },
    "imperfektIndikativ": {
      "de": "er sann",
      "lv": "viņš prātoja"
    },
    "imperfektKonjunktiv": {
      "de": "er sönne / er sänne",
      "lv": "viņš prātotu"
    },
    "partizipVergangenheit": {
      "de": "gesonnen",
      "lv": "prātots"
    }
  },
  {
    "infinitiv": {
      "de": "sitzen",
      "lv": "sēdēt"
    },
    "praesens": {
      "de": "er sitzt",
      "lv": "viņš sēž"
    },
    "imperfektIndikativ": {
      "de": "er saß",
      "lv": "viņš sēdēja"
    },
    "imperfektKonjunktiv": {
      "de": "er säße",
      "lv": "viņš sēdētu"
    },
    "partizipVergangenheit": {
      "de": "gesessen",
      "lv": "sēdēts"
    }
  },
  {
    "infinitiv": {
      "de": "sollen",
      "lv": "vajadzēt / būt pienākumam"
    },
    "praesens": {
      "de": "sollen",
      "lv": "vajadzēt / būt pienākumam"
    },
    "imperfektIndikativ": {
      "de": "sollte",
      "lv": "vajadzēja"
    },
    "imperfektKonjunktiv": {
      "de": "sollte",
      "lv": "vajadzēja"
    },
    "partizipVergangenheit": {
      "de": "gesollt",
      "lv": "vajadzējis"
    }
  },
  {
    "infinitiv": {
      "de": "speien",
      "lv": "spļaut"
    },
    "praesens": {
      "de": "er speit",
      "lv": "viņš spļauj"
    },
    "imperfektIndikativ": {
      "de": "er spie",
      "lv": "viņš spļāva"
    },
    "imperfektKonjunktiv": {
      "de": "er spie",
      "lv": "viņš spļautu"
    },
    "partizipVergangenheit": {
      "de": "gespien",
      "lv": "spļauts"
    }
  },
  {
    "infinitiv": {
      "de": "spinnen",
      "lv": "vērpt"
    },
    "praesens": {
      "de": "er spinnt",
      "lv": "viņš vērpj"
    },
    "imperfektIndikativ": {
      "de": "er spann",
      "lv": "viņš vērpa"
    },
    "imperfektKonjunktiv": {
      "de": "er spönne / er spänne",
      "lv": "viņš vērptu"
    },
    "partizipVergangenheit": {
      "de": "gesponnen",
      "lv": "vērpts"
    }
  },
  {
    "infinitiv": {
      "de": "spleißen",
      "lv": "savienot"
    },
    "praesens": {
      "de": "spleißen",
      "lv": "savienot"
    },
    "imperfektIndikativ": {
      "de": "spliss",
      "lv": "savienoja"
    },
    "imperfektKonjunktiv": {
      "de": "spliss",
      "lv": "savienoja"
    },
    "partizipVergangenheit": {
      "de": "gesplissen",
      "lv": "savienots"
    }
  },
  {
    "infinitiv": {
      "de": "sprechen",
      "lv": "runāt"
    },
    "praesens": {
      "de": "er spricht",
      "lv": "viņš runā"
    },
    "imperfektIndikativ": {
      "de": "er sprach",
      "lv": "viņš runāja"
    },
    "imperfektKonjunktiv": {
      "de": "er spräche",
      "lv": "viņš runātu"
    },
    "partizipVergangenheit": {
      "de": "gesprochen",
      "lv": "runāts"
    }
  },
  {
    "infinitiv": {
      "de": "sprießen",
      "lv": "plaukt"
    },
    "praesens": {
      "de": "er sprießt",
      "lv": "viņš plaukst"
    },
    "imperfektIndikativ": {
      "de": "er sproß",
      "lv": "viņš plauka"
    },
    "imperfektKonjunktiv": {
      "de": "er sprösse",
      "lv": "viņš plauktu"
    },
    "partizipVergangenheit": {
      "de": "gesprossen (er ist)",
      "lv": "plaucis"
    }
  },
  {
    "infinitiv": {
      "de": "springen",
      "lv": "lēkt"
    },
    "praesens": {
      "de": "er springt",
      "lv": "viņš lec"
    },
    "imperfektIndikativ": {
      "de": "er sprang",
      "lv": "viņš lēca"
    },
    "imperfektKonjunktiv": {
      "de": "er spränge",
      "lv": "viņš lēktu"
    },
    "partizipVergangenheit": {
      "de": "gesprungen (er ist)",
      "lv": "lēcis"
    }
  },
  {
    "infinitiv": {
      "de": "stechen",
      "lv": "durt"
    },
    "praesens": {
      "de": "er sticht",
      "lv": "viņš dur"
    },
    "imperfektIndikativ": {
      "de": "er stach",
      "lv": "viņš dūra"
    },
    "imperfektKonjunktiv": {
      "de": "er stäche",
      "lv": "viņš durtu"
    },
    "partizipVergangenheit": {
      "de": "gestochen",
      "lv": "durts"
    }
  },
  {
    "infinitiv": {
      "de": "stecken",
      "lv": "bāzt / iespraust"
    },
    "praesens": {
      "de": "stecken",
      "lv": "bāzt / iespraust"
    },
    "imperfektIndikativ": {
      "de": "stak vai steckte",
      "lv": "iebāza"
    },
    "imperfektKonjunktiv": {
      "de": "stak vai steckte",
      "lv": "iebāza"
    },
    "partizipVergangenheit": {
      "de": "gesteckt",
      "lv": "iebāzts"
    }
  },
  {
    "infinitiv": {
      "de": "stehen",
      "lv": "stāvēt"
    },
    "praesens": {
      "de": "er steht",
      "lv": "viņš stāv"
    },
    "imperfektIndikativ": {
      "de": "er stand",
      "lv": "viņš stāvēja"
    },
    "imperfektKonjunktiv": {
      "de": "er stände / er stünde",
      "lv": "viņš stāvētu"
    },
    "partizipVergangenheit": {
      "de": "gestanden",
      "lv": "stāvēts"
    }
  },
  {
    "infinitiv": {
      "de": "stehlen",
      "lv": "zagt"
    },
    "praesens": {
      "de": "er stiehlt",
      "lv": "viņš zog"
    },
    "imperfektIndikativ": {
      "de": "er stahl",
      "lv": "viņš zaga"
    },
    "imperfektKonjunktiv": {
      "de": "er stöhle / er stähle",
      "lv": "viņš zagtu"
    },
    "partizipVergangenheit": {
      "de": "gestohlen",
      "lv": "zagts"
    }
  },
  {
    "infinitiv": {
      "de": "steigen",
      "lv": "kāpt"
    },
    "praesens": {
      "de": "er steigt",
      "lv": "viņš kāpj"
    },
    "imperfektIndikativ": {
      "de": "er stieg",
      "lv": "viņš kāpa"
    },
    "imperfektKonjunktiv": {
      "de": "er stiege",
      "lv": "viņš kāptu"
    },
    "partizipVergangenheit": {
      "de": "gestiegen (er ist)",
      "lv": "kāpis"
    }
  },
  {
    "infinitiv": {
      "de": "sterben",
      "lv": "mirt"
    },
    "praesens": {
      "de": "er stirbt",
      "lv": "viņš mirst"
    },
    "imperfektIndikativ": {
      "de": "er starb",
      "lv": "viņš mira"
    },
    "imperfektKonjunktiv": {
      "de": "er stürbe",
      "lv": "viņš mirtu"
    },
    "partizipVergangenheit": {
      "de": "gestorben (er ist)",
      "lv": "miris"
    }
  },
  {
    "infinitiv": {
      "de": "stieben",
      "lv": "putēt / virpuļot"
    },
    "praesens": {
      "de": "stieben",
      "lv": "putēt / virpuļot"
    },
    "imperfektIndikativ": {
      "de": "stob vai stiebte",
      "lv": "putēja"
    },
    "imperfektKonjunktiv": {
      "de": "stob vai stiebte",
      "lv": "putēja"
    },
    "partizipVergangenheit": {
      "de": "gestoben vai gestiebt",
      "lv": "izputējis"
    }
  },
  {
    "infinitiv": {
      "de": "stinken",
      "lv": "smirdēt"
    },
    "praesens": {
      "de": "stinken",
      "lv": "smirdēt"
    },
    "imperfektIndikativ": {
      "de": "stank",
      "lv": "smirdēja"
    },
    "imperfektKonjunktiv": {
      "de": "stank",
      "lv": "smirdēja"
    },
    "partizipVergangenheit": {
      "de": "gestunken",
      "lv": "smirdējis"
    }
  },
  {
    "infinitiv": {
      "de": "stoßen",
      "lv": "grūst"
    },
    "praesens": {
      "de": "er stößt",
      "lv": "viņš grūž"
    },
    "imperfektIndikativ": {
      "de": "er stieß",
      "lv": "viņš grūda"
    },
    "imperfektKonjunktiv": {
      "de": "er stieße",
      "lv": "viņš grūstu"
    },
    "partizipVergangenheit": {
      "de": "gestoßen",
      "lv": "grūsts"
    }
  },
  {
    "infinitiv": {
      "de": "streichen",
      "lv": "krāsot / strīpot"
    },
    "praesens": {
      "de": "er streicht",
      "lv": "viņš krāso / strīpo"
    },
    "imperfektIndikativ": {
      "de": "er strich",
      "lv": "viņš krāsoja / strīpoja"
    },
    "imperfektKonjunktiv": {
      "de": "er striche",
      "lv": "viņš krāsotu / strīpotu"
    },
    "partizipVergangenheit": {
      "de": "gestrichen",
      "lv": "krāsots / strīpots"
    }
  },
  {
    "infinitiv": {
      "de": "streiten",
      "lv": "cīnīties"
    },
    "praesens": {
      "de": "er streitet",
      "lv": "viņš cīnās"
    },
    "imperfektIndikativ": {
      "de": "er stritt",
      "lv": "viņš cīnījās"
    },
    "imperfektKonjunktiv": {
      "de": "er stritte",
      "lv": "viņš cīnītos"
    },
    "partizipVergangenheit": {
      "de": "gestritten",
      "lv": "cīnījies"
    }
  },
  {
    "infinitiv": {
      "de": "tragen",
      "lv": "nest"
    },
    "praesens": {
      "de": "er trägt",
      "lv": "viņš nes"
    },
    "imperfektIndikativ": {
      "de": "er trug",
      "lv": "viņš nesa"
    },
    "imperfektKonjunktiv": {
      "de": "er trüge",
      "lv": "viņš nestu"
    },
    "partizipVergangenheit": {
      "de": "getragen",
      "lv": "nests"
    }
  },
  {
    "infinitiv": {
      "de": "treffen",
      "lv": "sastapt"
    },
    "praesens": {
      "de": "er trifft",
      "lv": "viņš sastop"
    },
    "imperfektIndikativ": {
      "de": "er traf",
      "lv": "viņš sastapa"
    },
    "imperfektKonjunktiv": {
      "de": "er träfe",
      "lv": "viņš sastaptu"
    },
    "partizipVergangenheit": {
      "de": "getroffen",
      "lv": "sastapts"
    }
  },
  {
    "infinitiv": {
      "de": "treiben",
      "lv": "dzīt"
    },
    "praesens": {
      "de": "er treibt",
      "lv": "viņš dzen"
    },
    "imperfektIndikativ": {
      "de": "er trieb",
      "lv": "viņš dzina"
    },
    "imperfektKonjunktiv": {
      "de": "er triebe",
      "lv": "viņš dzītu"
    },
    "partizipVergangenheit": {
      "de": "getrieben",
      "lv": "dzīts"
    }
  },
  {
    "infinitiv": {
      "de": "treten",
      "lv": "stāties / iet"
    },
    "praesens": {
      "de": "er tritt",
      "lv": "viņš stājas / iet"
    },
    "imperfektIndikativ": {
      "de": "er trat",
      "lv": "viņš stājās / gāja"
    },
    "imperfektKonjunktiv": {
      "de": "er träte",
      "lv": "viņš stātos / ietu"
    },
    "partizipVergangenheit": {
      "de": "getreten (er ist)",
      "lv": "stājies / gājis"
    }
  },
  {
    "infinitiv": {
      "de": "trinken",
      "lv": "dzert"
    },
    "praesens": {
      "de": "er trinkt",
      "lv": "viņš dzer"
    },
    "imperfektIndikativ": {
      "de": "er trank",
      "lv": "viņš dzēra"
    },
    "imperfektKonjunktiv": {
      "de": "er tränke",
      "lv": "viņš dzertu"
    },
    "partizipVergangenheit": {
      "de": "getrunken",
      "lv": "dzerts"
    }
  },
  {
    "infinitiv": {
      "de": "trügen",
      "lv": "krāpt"
    },
    "praesens": {
      "de": "er trögt",
      "lv": "viņš krāpj"
    },
    "imperfektIndikativ": {
      "de": "er trog",
      "lv": "viņš krāpa"
    },
    "imperfektKonjunktiv": {
      "de": "er tröge",
      "lv": "viņš krāptu"
    },
    "partizipVergangenheit": {
      "de": "getrogen",
      "lv": "krāpts"
    }
  },
  {
    "infinitiv": {
      "de": "tun",
      "lv": "darīt"
    },
    "praesens": {
      "de": "er tut",
      "lv": "viņš dara"
    },
    "imperfektIndikativ": {
      "de": "er tat",
      "lv": "viņš darīja"
    },
    "imperfektKonjunktiv": {
      "de": "er täte",
      "lv": "viņš darītu"
    },
    "partizipVergangenheit": {
      "de": "getan",
      "lv": "darīts"
    }
  },
  {
    "infinitiv": {
      "de": "verderben",
      "lv": "bojāt"
    },
    "praesens": {
      "de": "er verdirbt",
      "lv": "viņš bojā"
    },
    "imperfektIndikativ": {
      "de": "er verdarb",
      "lv": "viņš bojāja"
    },
    "imperfektKonjunktiv": {
      "de": "er verdürbe",
      "lv": "viņš bojātu"
    },
    "partizipVergangenheit": {
      "de": "verdorben",
      "lv": "bojāts"
    }
  },
  {
    "infinitiv": {
      "de": "verdrießen",
      "lv": "sacelt īgnumu"
    },
    "praesens": {
      "de": "er verdrießt",
      "lv": "viņš izraisa īgnumu"
    },
    "imperfektIndikativ": {
      "de": "er verdroß",
      "lv": "viņš izraisīja īgnumu"
    },
    "imperfektKonjunktiv": {
      "de": "er verdrösse",
      "lv": "viņš izraisītu īgnumu"
    },
    "partizipVergangenheit": {
      "de": "verdrossen",
      "lv": "sarūgtināts"
    }
  },
  {
    "infinitiv": {
      "de": "vergessen",
      "lv": "aizmirst"
    },
    "praesens": {
      "de": "er vergißt",
      "lv": "viņš aizmirst"
    },
    "imperfektIndikativ": {
      "de": "er vergaß",
      "lv": "viņš aizmirsa"
    },
    "imperfektKonjunktiv": {
      "de": "er vergäße",
      "lv": "viņš aizmirstu"
    },
    "partizipVergangenheit": {
      "de": "vergessen",
      "lv": "aizmirsts"
    }
  },
  {
    "infinitiv": {
      "de": "verlieren",
      "lv": "pazaudēt"
    },
    "praesens": {
      "de": "er verliert",
      "lv": "viņš pazaudē"
    },
    "imperfektIndikativ": {
      "de": "er verlor",
      "lv": "viņš pazaudēja"
    },
    "imperfektKonjunktiv": {
      "de": "er verlöre",
      "lv": "viņš pazaudētu"
    },
    "partizipVergangenheit": {
      "de": "verloren",
      "lv": "pazaudēts"
    }
  },
  {
    "infinitiv": {
      "de": "wachsen",
      "lv": "augt"
    },
    "praesens": {
      "de": "er wächst",
      "lv": "viņš aug"
    },
    "imperfektIndikativ": {
      "de": "er wuchs",
      "lv": "viņš auga"
    },
    "imperfektKonjunktiv": {
      "de": "er wüchse",
      "lv": "viņš augtu"
    },
    "partizipVergangenheit": {
      "de": "gewachsen (er ist)",
      "lv": "audzis"
    }
  },
  {
    "infinitiv": {
      "de": "waschen",
      "lv": "mazgāt"
    },
    "praesens": {
      "de": "er wäscht",
      "lv": "viņš mazgā"
    },
    "imperfektIndikativ": {
      "de": "er wusch",
      "lv": "viņš mazgāja"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsche",
      "lv": "viņš mazgātu"
    },
    "partizipVergangenheit": {
      "de": "gewaschen",
      "lv": "mazgāts"
    }
  },
  {
    "infinitiv": {
      "de": "weben",
      "lv": "aust"
    },
    "praesens": {
      "de": "weben",
      "lv": "aust"
    },
    "imperfektIndikativ": {
      "de": "wob",
      "lv": "auda"
    },
    "imperfektKonjunktiv": {
      "de": "wob",
      "lv": "auda"
    },
    "partizipVergangenheit": {
      "de": "gewoben",
      "lv": "izausts"
    }
  },
  {
    "infinitiv": {
      "de": "weichen",
      "lv": "atkāpties"
    },
    "praesens": {
      "de": "er weicht",
      "lv": "viņš atkāpjas"
    },
    "imperfektIndikativ": {
      "de": "er wich",
      "lv": "viņš atkāpās"
    },
    "imperfektKonjunktiv": {
      "de": "er wiche",
      "lv": "viņš atkāptos"
    },
    "partizipVergangenheit": {
      "de": "gewichen (er ist)",
      "lv": "atkāpies"
    }
  },
  {
    "infinitiv": {
      "de": "weisen",
      "lv": "rādīt"
    },
    "praesens": {
      "de": "er weist",
      "lv": "viņš rāda"
    },
    "imperfektIndikativ": {
      "de": "er wies",
      "lv": "viņš rādīja"
    },
    "imperfektKonjunktiv": {
      "de": "er wiese",
      "lv": "viņš rādītu"
    },
    "partizipVergangenheit": {
      "de": "gewiesen",
      "lv": "rādīts"
    }
  },
  {
    "infinitiv": {
      "de": "wenden",
      "lv": "grozīt / apgriezt"
    },
    "praesens": {
      "de": "er wendet",
      "lv": "viņš groza / apgriež"
    },
    "imperfektIndikativ": {
      "de": "er wandte / es wendete",
      "lv": "viņš grozīja / apgrieza"
    },
    "imperfektKonjunktiv": {
      "de": "er wendete",
      "lv": "viņš grozītu / apgrieztu"
    },
    "partizipVergangenheit": {
      "de": "gewandt / gewendet",
      "lv": "grozīts / apgriezts"
    }
  },
  {
    "infinitiv": {
      "de": "werben",
      "lv": "bildināt"
    },
    "praesens": {
      "de": "er wirbt",
      "lv": "viņš bildina"
    },
    "imperfektIndikativ": {
      "de": "er warb",
      "lv": "viņš bildināja"
    },
    "imperfektKonjunktiv": {
      "de": "er würbe",
      "lv": "viņš bildinātu"
    },
    "partizipVergangenheit": {
      "de": "geworben",
      "lv": "bildināts"
    }
  },
  {
    "infinitiv": {
      "de": "werden",
      "lv": "kļūt"
    },
    "praesens": {
      "de": "werden",
      "lv": "kļūt"
    },
    "imperfektIndikativ": {
      "de": "wurde",
      "lv": "kļuva"
    },
    "imperfektKonjunktiv": {
      "de": "wurde",
      "lv": "kļuva"
    },
    "partizipVergangenheit": {
      "de": "geworden",
      "lv": "kļuvis"
    }
  },
  {
    "infinitiv": {
      "de": "werfen",
      "lv": "mest"
    },
    "praesens": {
      "de": "er wirft",
      "lv": "viņš met"
    },
    "imperfektIndikativ": {
      "de": "er warf",
      "lv": "viņš meta"
    },
    "imperfektKonjunktiv": {
      "de": "er würfe",
      "lv": "viņš mestu"
    },
    "partizipVergangenheit": {
      "de": "geworfen",
      "lv": "mests"
    }
  },
  {
    "infinitiv": {
      "de": "wiegen",
      "lv": "svērt"
    },
    "praesens": {
      "de": "er wiegt",
      "lv": "viņš sver"
    },
    "imperfektIndikativ": {
      "de": "er wog",
      "lv": "viņš svēra"
    },
    "imperfektKonjunktiv": {
      "de": "er wöge",
      "lv": "viņš svērtu"
    },
    "partizipVergangenheit": {
      "de": "gewogen",
      "lv": "svērts"
    }
  },
  {
    "infinitiv": {
      "de": "winden",
      "lv": "pīt"
    },
    "praesens": {
      "de": "er windet",
      "lv": "viņš pin"
    },
    "imperfektIndikativ": {
      "de": "er wand",
      "lv": "viņš pina"
    },
    "imperfektKonjunktiv": {
      "de": "er wände",
      "lv": "viņš pītu"
    },
    "partizipVergangenheit": {
      "de": "gewunden",
      "lv": "pīts"
    }
  },
  {
    "infinitiv": {
      "de": "wissen",
      "lv": "zināt"
    },
    "praesens": {
      "de": "er weiß",
      "lv": "viņš zina"
    },
    "imperfektIndikativ": {
      "de": "er wußte",
      "lv": "viņš zināja"
    },
    "imperfektKonjunktiv": {
      "de": "er wüßte",
      "lv": "viņš zinātu"
    },
    "partizipVergangenheit": {
      "de": "gewußt",
      "lv": "zināts"
    }
  },
  {
    "infinitiv": {
      "de": "wollen",
      "lv": "gribēt"
    },
    "praesens": {
      "de": "wollen",
      "lv": "gribēt"
    },
    "imperfektIndikativ": {
      "de": "wollte",
      "lv": "gribēja"
    },
    "imperfektKonjunktiv": {
      "de": "wollte",
      "lv": "gribēja"
    },
    "partizipVergangenheit": {
      "de": "gewollt",
      "lv": "gribējis"
    }
  },
  {
    "infinitiv": {
      "de": "wringen",
      "lv": "izgriezt / izspiest"
    },
    "praesens": {
      "de": "wringen",
      "lv": "izgriezt / izspiest"
    },
    "imperfektIndikativ": {
      "de": "wrang",
      "lv": "izgrieza"
    },
    "imperfektKonjunktiv": {
      "de": "wrang",
      "lv": "izgrieza"
    },
    "partizipVergangenheit": {
      "de": "gewrungen",
      "lv": "izgriezts"
    }
  },
  {
    "infinitiv": {
      "de": "zeihen",
      "lv": "vainot"
    },
    "praesens": {
      "de": "zeihen",
      "lv": "vainot"
    },
    "imperfektIndikativ": {
      "de": "zieh",
      "lv": "vainoja"
    },
    "imperfektKonjunktiv": {
      "de": "zieh",
      "lv": "vainoja"
    },
    "partizipVergangenheit": {
      "de": "geziehen",
      "lv": "vainojis"
    }
  },
  {
    "infinitiv": {
      "de": "ziehen",
      "lv": "vilkt"
    },
    "praesens": {
      "de": "er zieht",
      "lv": "viņš velk"
    },
    "imperfektIndikativ": {
      "de": "er zog",
      "lv": "viņš vilka"
    },
    "imperfektKonjunktiv": {
      "de": "er zöge",
      "lv": "viņš vilktu"
    },
    "partizipVergangenheit": {
      "de": "gezogen",
      "lv": "vilkts"
    }
  },
  {
    "infinitiv": {
      "de": "zwingen",
      "lv": "piespiest"
    },
    "praesens": {
      "de": "er zwingt",
      "lv": "viņš piespiež"
    },
    "imperfektIndikativ": {
      "de": "er zwang",
      "lv": "viņš piespieda"
    },
    "imperfektKonjunktiv": {
      "de": "er zwänge",
      "lv": "viņš piespiestu"
    },
    "partizipVergangenheit": {
      "de": "gezwungen",
      "lv": "piespiests"
    }
  },
  {
    "infinitiv": {
      "de": "empfangen",
      "lv": "saņemt"
    },
    "praesens": {
      "de": "er empfängt",
      "lv": "viņš saņem"
    },
    "imperfektIndikativ": {
      "de": "er empfing",
      "lv": "viņš saņēma"
    },
    "imperfektKonjunktiv": {
      "de": "er empfinge",
      "lv": "viņš saņemtu"
    },
    "partizipVergangenheit": {
      "de": "empfangen",
      "lv": "saņemts"
    }
  },
  {
    "infinitiv": {
      "de": "erwägen",
      "lv": "apsvērt"
    },
    "praesens": {
      "de": "er erwägt",
      "lv": "viņš apsver"
    },
    "imperfektIndikativ": {
      "de": "er erwog",
      "lv": "viņš apsvēra"
    },
    "imperfektKonjunktiv": {
      "de": "er erwöge",
      "lv": "viņš apsvērtu"
    },
    "partizipVergangenheit": {
      "de": "erwogen",
      "lv": "apsvērts"
    }
  },
  {
    "infinitiv": {
      "de": "fechten",
      "lv": "cīnīties"
    },
    "praesens": {
      "de": "er ficht",
      "lv": "viņš cīnās"
    },
    "imperfektIndikativ": {
      "de": "er focht",
      "lv": "viņš cīnījās"
    },
    "imperfektKonjunktiv": {
      "de": "er föchte",
      "lv": "viņš cīnītos"
    },
    "partizipVergangenheit": {
      "de": "gefochten",
      "lv": "cīnījies"
    }
  },
  {
    "infinitiv": {
      "de": "flechten",
      "lv": "pīt"
    },
    "praesens": {
      "de": "er flicht",
      "lv": "viņš pin"
    },
    "imperfektIndikativ": {
      "de": "er flocht",
      "lv": "viņš pina"
    },
    "imperfektKonjunktiv": {
      "de": "er flöchte",
      "lv": "viņš pītu"
    },
    "partizipVergangenheit": {
      "de": "geflochten",
      "lv": "pīts"
    }
  },
  {
    "infinitiv": {
      "de": "hangen",
      "lv": "karāties"
    },
    "praesens": {
      "de": "er hängt",
      "lv": "viņš karājas"
    },
    "imperfektIndikativ": {
      "de": "er hing",
      "lv": "viņš karājās"
    },
    "imperfektKonjunktiv": {
      "de": "er hinge",
      "lv": "viņš karātos"
    },
    "partizipVergangenheit": {
      "de": "gehangen",
      "lv": "karājies"
    }
  },
  {
    "infinitiv": {
      "de": "spalten",
      "lv": "skaldīt"
    },
    "praesens": {
      "de": "er spaltet",
      "lv": "viņš skalda"
    },
    "imperfektIndikativ": {
      "de": "er spaltete",
      "lv": "viņš skaldīja"
    },
    "imperfektKonjunktiv": {
      "de": "er spaltete",
      "lv": "viņš skaldītu"
    },
    "partizipVergangenheit": {
      "de": "gespalten",
      "lv": "skaldīts"
    }
  },
  {
    "infinitiv": {
      "de": "verzeihen",
      "lv": "piedot"
    },
    "praesens": {
      "de": "er verzeiht",
      "lv": "viņš piedod"
    },
    "imperfektIndikativ": {
      "de": "er verzieh",
      "lv": "viņš piedeva"
    },
    "imperfektKonjunktiv": {
      "de": "er verziehe",
      "lv": "viņš piedotu"
    },
    "partizipVergangenheit": {
      "de": "verziehen",
      "lv": "piedots"
    }
  }
];

window.VERB_ENTRIES = VERB_ENTRIES;

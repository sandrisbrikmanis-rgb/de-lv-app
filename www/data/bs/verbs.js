const VERB_ENTRIES = [
  {
    "infinitiv": {
      "de": "backen",
      "lv": "Peći"
    },
    "praesens": {
      "de": "er bäckt",
      "lv": "On peče"
    },
    "imperfektIndikativ": {
      "de": "er buk",
      "lv": "Pekao je"
    },
    "imperfektKonjunktiv": {
      "de": "er büke",
      "lv": "On bi pekao"
    },
    "partizipVergangenheit": {
      "de": "gebacken",
      "lv": "Pečen / ispečen"
    }
  },
  {
    "infinitiv": {
      "de": "befehlen",
      "lv": "Zapovijediti"
    },
    "praesens": {
      "de": "er befiehlt",
      "lv": "On zapovijeda"
    },
    "imperfektIndikativ": {
      "de": "er befahl",
      "lv": "Zapovijedio je"
    },
    "imperfektKonjunktiv": {
      "de": "er beföhle",
      "lv": "On bi zapovijedio"
    },
    "partizipVergangenheit": {
      "de": "befohlen",
      "lv": "Zapovjeđen"
    }
  },
  {
    "infinitiv": {
      "de": "beginnen",
      "lv": "Početi"
    },
    "praesens": {
      "de": "er beginnt",
      "lv": "On počinje"
    },
    "imperfektIndikativ": {
      "de": "er begann",
      "lv": "Počeo je"
    },
    "imperfektKonjunktiv": {
      "de": "er begönne / er begänne",
      "lv": "On bi počeo"
    },
    "partizipVergangenheit": {
      "de": "begonnen",
      "lv": "Započet"
    }
  },
  {
    "infinitiv": {
      "de": "beißen",
      "lv": "Ugristi"
    },
    "praesens": {
      "de": "er beißt",
      "lv": "On ujeda"
    },
    "imperfektIndikativ": {
      "de": "er biss",
      "lv": "Ugrizao je"
    },
    "imperfektKonjunktiv": {
      "de": "er bisse",
      "lv": "On bi ugrizao"
    },
    "partizipVergangenheit": {
      "de": "gebissen",
      "lv": "Ugrižen / izgrizen"
    }
  },
  {
    "infinitiv": {
      "de": "bergen",
      "lv": "Spasiti"
    },
    "praesens": {
      "de": "er birgt",
      "lv": "On skriva"
    },
    "imperfektIndikativ": {
      "de": "er barg",
      "lv": "Sakrio je"
    },
    "imperfektKonjunktiv": {
      "de": "er bürge / er bärge",
      "lv": "On bi sakrio"
    },
    "partizipVergangenheit": {
      "de": "geborgen",
      "lv": "Skriven / spašen"
    }
  },
  {
    "infinitiv": {
      "de": "bersten",
      "lv": "Pući"
    },
    "praesens": {
      "de": "er birst",
      "lv": "On puca"
    },
    "imperfektIndikativ": {
      "de": "er barst / er borst",
      "lv": "Pukao je / prsnuo je"
    },
    "imperfektKonjunktiv": {
      "de": "er bärste / er börste",
      "lv": "On bi pukao / on bi prsnuo"
    },
    "partizipVergangenheit": {
      "de": "geborsten (er ist)",
      "lv": "Pukao"
    }
  },
  {
    "infinitiv": {
      "de": "bewegen",
      "lv": "Navesti"
    },
    "praesens": {
      "de": "er bewegt",
      "lv": "On navodi"
    },
    "imperfektIndikativ": {
      "de": "er bewog",
      "lv": "Naveo je"
    },
    "imperfektKonjunktiv": {
      "de": "er bewöge",
      "lv": "On bi naveo"
    },
    "partizipVergangenheit": {
      "de": "bewogen",
      "lv": "Naveden"
    }
  },
  {
    "infinitiv": {
      "de": "biegen",
      "lv": "Savijati"
    },
    "praesens": {
      "de": "er biegt",
      "lv": "On savija"
    },
    "imperfektIndikativ": {
      "de": "er bog",
      "lv": "Savijao je"
    },
    "imperfektKonjunktiv": {
      "de": "er böge",
      "lv": "On bi savijao"
    },
    "partizipVergangenheit": {
      "de": "gebogen",
      "lv": "Savijen"
    }
  },
  {
    "infinitiv": {
      "de": "bieten",
      "lv": "Ponuditi"
    },
    "praesens": {
      "de": "er bietet",
      "lv": "On nudi"
    },
    "imperfektIndikativ": {
      "de": "er bot",
      "lv": "Ponudio je"
    },
    "imperfektKonjunktiv": {
      "de": "er böte",
      "lv": "On bi ponudio"
    },
    "partizipVergangenheit": {
      "de": "geboten",
      "lv": "Ponuđen / nuđen"
    }
  },
  {
    "infinitiv": {
      "de": "binden",
      "lv": "Vezati"
    },
    "praesens": {
      "de": "er bindet",
      "lv": "On veže"
    },
    "imperfektIndikativ": {
      "de": "er band",
      "lv": "Vezao je"
    },
    "imperfektKonjunktiv": {
      "de": "er bände",
      "lv": "On bi vezao"
    },
    "partizipVergangenheit": {
      "de": "gebunden",
      "lv": "Vezan"
    }
  },
  {
    "infinitiv": {
      "de": "bitten",
      "lv": "Moliti"
    },
    "praesens": {
      "de": "er bittet",
      "lv": "On moli"
    },
    "imperfektIndikativ": {
      "de": "er bat",
      "lv": "Molio je"
    },
    "imperfektKonjunktiv": {
      "de": "er bäte",
      "lv": "On bi molio"
    },
    "partizipVergangenheit": {
      "de": "gebeten",
      "lv": "Zamoljen"
    }
  },
  {
    "infinitiv": {
      "de": "blasen",
      "lv": "Puhati"
    },
    "praesens": {
      "de": "er bläst",
      "lv": "On puše"
    },
    "imperfektIndikativ": {
      "de": "er blies",
      "lv": "Puhao je"
    },
    "imperfektKonjunktiv": {
      "de": "er bliese",
      "lv": "On bi puhao"
    },
    "partizipVergangenheit": {
      "de": "geblasen",
      "lv": "Puhan"
    }
  },
  {
    "infinitiv": {
      "de": "gären",
      "lv": "Fermentirati"
    },
    "praesens": {
      "de": "es gärt",
      "lv": "Ono fermentira"
    },
    "imperfektIndikativ": {
      "de": "es gor / es gärte",
      "lv": "Fermentiralo je"
    },
    "imperfektKonjunktiv": {
      "de": "es göre / es gärte",
      "lv": "Ono bi fermentiralo"
    },
    "partizipVergangenheit": {
      "de": "gegoren / gegärt",
      "lv": "Fermentiralo / prevrelo"
    }
  },
  {
    "infinitiv": {
      "de": "gebären",
      "lv": "Rađati"
    },
    "praesens": {
      "de": "sie gebiert",
      "lv": "Ona rađa"
    },
    "imperfektIndikativ": {
      "de": "sie gebar",
      "lv": "Rodila je"
    },
    "imperfektKonjunktiv": {
      "de": "sie gebäre",
      "lv": "Ona bi rodila"
    },
    "partizipVergangenheit": {
      "de": "geboren",
      "lv": "Rođen / rođen"
    }
  },
  {
    "infinitiv": {
      "de": "gelingen",
      "lv": "Uspjeti"
    },
    "praesens": {
      "de": "es gelingt",
      "lv": "Uspijeva"
    },
    "imperfektIndikativ": {
      "de": "es gelang",
      "lv": "Uspjelo je"
    },
    "imperfektKonjunktiv": {
      "de": "es gelänge",
      "lv": "Uspjelo bi"
    },
    "partizipVergangenheit": {
      "de": "gelungen (es ist)",
      "lv": "Uspjelo"
    }
  },
  {
    "infinitiv": {
      "de": "gelten",
      "lv": "Važiti"
    },
    "praesens": {
      "de": "er gilt",
      "lv": "On važi / na snazi je"
    },
    "imperfektIndikativ": {
      "de": "er galt",
      "lv": "Važio je / bio je na snazi"
    },
    "imperfektKonjunktiv": {
      "de": "er gölte / es gälte",
      "lv": "On bi važio / to bi bilo na snazi"
    },
    "partizipVergangenheit": {
      "de": "gegolten",
      "lv": "Važio / bio na snazi"
    }
  },
  {
    "infinitiv": {
      "de": "genesen",
      "lv": "Ozdraviti"
    },
    "praesens": {
      "de": "er genest",
      "lv": "On ozdravlja"
    },
    "imperfektIndikativ": {
      "de": "er genas",
      "lv": "On je ozdravio"
    },
    "imperfektKonjunktiv": {
      "de": "er genäse",
      "lv": "On bi ozdravio"
    },
    "partizipVergangenheit": {
      "de": "genesen (er ist)",
      "lv": "Ozdravio"
    }
  },
  {
    "infinitiv": {
      "de": "genießen",
      "lv": "Uživati"
    },
    "praesens": {
      "de": "er genießt",
      "lv": "On uživa"
    },
    "imperfektIndikativ": {
      "de": "er genoss",
      "lv": "Uživao je"
    },
    "imperfektKonjunktiv": {
      "de": "er genösse",
      "lv": "On bi uživao"
    },
    "partizipVergangenheit": {
      "de": "genossen",
      "lv": "Uživan"
    }
  },
  {
    "infinitiv": {
      "de": "geschehen",
      "lv": "Događati se"
    },
    "praesens": {
      "de": "es geschieht",
      "lv": "Događa se"
    },
    "imperfektIndikativ": {
      "de": "es geschah",
      "lv": "Dogodilo se"
    },
    "imperfektKonjunktiv": {
      "de": "es geschähe",
      "lv": "Dogodilo bi se"
    },
    "partizipVergangenheit": {
      "de": "geschehen (es ist)",
      "lv": "Dogodilo se"
    }
  },
  {
    "infinitiv": {
      "de": "gießen",
      "lv": "Liti"
    },
    "praesens": {
      "de": "er gießt",
      "lv": "On lije"
    },
    "imperfektIndikativ": {
      "de": "er goss",
      "lv": "Lio je"
    },
    "imperfektKonjunktiv": {
      "de": "er gösse",
      "lv": "On bi lio"
    },
    "partizipVergangenheit": {
      "de": "gegossen",
      "lv": "Liven"
    }
  },
  {
    "infinitiv": {
      "de": "gleichen",
      "lv": "Ličiti na"
    },
    "praesens": {
      "de": "er gleicht",
      "lv": "On liči na"
    },
    "imperfektIndikativ": {
      "de": "er glich",
      "lv": "Ličio je na"
    },
    "imperfektKonjunktiv": {
      "de": "er gliche",
      "lv": "Ličio bi na"
    },
    "partizipVergangenheit": {
      "de": "geglichen",
      "lv": "Ličio"
    }
  },
  {
    "infinitiv": {
      "de": "gleiten",
      "lv": "Kliziti"
    },
    "praesens": {
      "de": "er gleitet",
      "lv": "On klizi"
    },
    "imperfektIndikativ": {
      "de": "er glitt",
      "lv": "Klizio je"
    },
    "imperfektKonjunktiv": {
      "de": "er glitte",
      "lv": "Klizio bi"
    },
    "partizipVergangenheit": {
      "de": "geglitten (er ist)",
      "lv": "Klizio"
    }
  },
  {
    "infinitiv": {
      "de": "glimmen",
      "lv": "Tinjati"
    },
    "praesens": {
      "de": "er glimmt",
      "lv": "On tinja"
    },
    "imperfektIndikativ": {
      "de": "er glimmte / glomm",
      "lv": "Tinjao je / tinjao je"
    },
    "imperfektKonjunktiv": {
      "de": "er glimmte",
      "lv": "Tinjao bi"
    },
    "partizipVergangenheit": {
      "de": "geglimmt / geglommen",
      "lv": "Tinjao / tinjao"
    }
  },
  {
    "infinitiv": {
      "de": "graben",
      "lv": "Kopati"
    },
    "praesens": {
      "de": "er gräbt",
      "lv": "On kopa"
    },
    "imperfektIndikativ": {
      "de": "er grub",
      "lv": "Kopao je"
    },
    "imperfektKonjunktiv": {
      "de": "er grübe",
      "lv": "Kopao bi"
    },
    "partizipVergangenheit": {
      "de": "gegraben",
      "lv": "Iskopan"
    }
  },
  {
    "infinitiv": {
      "de": "greifen",
      "lv": "Uhvatiti"
    },
    "praesens": {
      "de": "er greift",
      "lv": "On hvata"
    },
    "imperfektIndikativ": {
      "de": "er griff",
      "lv": "Uhvatio je"
    },
    "imperfektKonjunktiv": {
      "de": "er griffe",
      "lv": "Uhvatio bi"
    },
    "partizipVergangenheit": {
      "de": "gegriffen",
      "lv": "Uhvaćen / zgrabljen"
    }
  },
  {
    "infinitiv": {
      "de": "hauen",
      "lv": "Sjeći"
    },
    "praesens": {
      "de": "er haut",
      "lv": "On siječe"
    },
    "imperfektIndikativ": {
      "de": "er hieb",
      "lv": "Sjekao je"
    },
    "imperfektKonjunktiv": {
      "de": "er hiebe",
      "lv": "Sjekao bi"
    },
    "partizipVergangenheit": {
      "de": "gehauen",
      "lv": "Sječen"
    }
  },
  {
    "infinitiv": {
      "de": "heben",
      "lv": "Podići"
    },
    "praesens": {
      "de": "er hebt",
      "lv": "On podiže"
    },
    "imperfektIndikativ": {
      "de": "er hob",
      "lv": "Podigao je"
    },
    "imperfektKonjunktiv": {
      "de": "er höbe",
      "lv": "Podigao bi"
    },
    "partizipVergangenheit": {
      "de": "gehoben",
      "lv": "Podignut"
    }
  },
  {
    "infinitiv": {
      "de": "kennen",
      "lv": "Poznavati"
    },
    "praesens": {
      "de": "er kennt",
      "lv": "On poznaje"
    },
    "imperfektIndikativ": {
      "de": "kannte",
      "lv": "Poznavao je"
    },
    "imperfektKonjunktiv": {
      "de": "kannte",
      "lv": "On bi poznavao"
    },
    "partizipVergangenheit": {
      "de": "gekannt",
      "lv": "Poznavao"
    }
  },
  {
    "infinitiv": {
      "de": "klingen",
      "lv": "Zvučati"
    },
    "praesens": {
      "de": "er klingt",
      "lv": "On zvuči"
    },
    "imperfektIndikativ": {
      "de": "er klang",
      "lv": "Zvučao je"
    },
    "imperfektKonjunktiv": {
      "de": "er klänge",
      "lv": "Zvučao bi"
    },
    "partizipVergangenheit": {
      "de": "geklungen",
      "lv": "Zvučao"
    }
  },
  {
    "infinitiv": {
      "de": "kneifen",
      "lv": "Štipati"
    },
    "praesens": {
      "de": "er kneift",
      "lv": "On štipa"
    },
    "imperfektIndikativ": {
      "de": "er kniff",
      "lv": "Štipao je"
    },
    "imperfektKonjunktiv": {
      "de": "er kniffe",
      "lv": "Štipao bi"
    },
    "partizipVergangenheit": {
      "de": "gekniffen",
      "lv": "Uštipnut"
    }
  },
  {
    "infinitiv": {
      "de": "bleiben",
      "lv": "Ostati"
    },
    "praesens": {
      "de": "er bleibt",
      "lv": "On ostaje"
    },
    "imperfektIndikativ": {
      "de": "er blieb",
      "lv": "On je ostao"
    },
    "imperfektKonjunktiv": {
      "de": "er bliebe",
      "lv": "On bi ostao"
    },
    "partizipVergangenheit": {
      "de": "geblieben (er ist)",
      "lv": "Ostao"
    }
  },
  {
    "infinitiv": {
      "de": "bleichen",
      "lv": "Izbijeliti"
    },
    "praesens": {
      "de": "er bleicht",
      "lv": "On izbjeljuje"
    },
    "imperfektIndikativ": {
      "de": "blich",
      "lv": "Izblijedio je"
    },
    "imperfektKonjunktiv": {
      "de": "blich",
      "lv": "On bi izblijedio"
    },
    "partizipVergangenheit": {
      "de": "geblichen",
      "lv": "Izblijedio"
    }
  },
  {
    "infinitiv": {
      "de": "braten",
      "lv": "Peći"
    },
    "praesens": {
      "de": "er brät",
      "lv": "On peče"
    },
    "imperfektIndikativ": {
      "de": "er briet",
      "lv": "Pekao je"
    },
    "imperfektKonjunktiv": {
      "de": "er briete",
      "lv": "On bi pekao"
    },
    "partizipVergangenheit": {
      "de": "gebraten",
      "lv": "Pečen / ispečen"
    }
  },
  {
    "infinitiv": {
      "de": "brechen",
      "lv": "Lomiti"
    },
    "praesens": {
      "de": "er bricht",
      "lv": "On lomi"
    },
    "imperfektIndikativ": {
      "de": "er brach",
      "lv": "On je slomio"
    },
    "imperfektKonjunktiv": {
      "de": "er bräche",
      "lv": "On bi lomio"
    },
    "partizipVergangenheit": {
      "de": "gebrochen",
      "lv": "Slomljen / razbijen"
    }
  },
  {
    "infinitiv": {
      "de": "brennen",
      "lv": "Gorjeti"
    },
    "praesens": {
      "de": "er brennt",
      "lv": "On gori"
    },
    "imperfektIndikativ": {
      "de": "brannte",
      "lv": "On je gorio"
    },
    "imperfektKonjunktiv": {
      "de": "brannte",
      "lv": "On bi gorio"
    },
    "partizipVergangenheit": {
      "de": "gebrannt",
      "lv": "Gorio"
    }
  },
  {
    "infinitiv": {
      "de": "bringen",
      "lv": "Donijeti"
    },
    "praesens": {
      "de": "er bringt",
      "lv": "On donosi"
    },
    "imperfektIndikativ": {
      "de": "er brachte",
      "lv": "On je donio"
    },
    "imperfektKonjunktiv": {
      "de": "er brächte",
      "lv": "On bi donio"
    },
    "partizipVergangenheit": {
      "de": "gebracht",
      "lv": "Donesen / dopremljen"
    }
  },
  {
    "infinitiv": {
      "de": "denken",
      "lv": "Misliti"
    },
    "praesens": {
      "de": "er denkt",
      "lv": "On misli"
    },
    "imperfektIndikativ": {
      "de": "er dachte",
      "lv": "On je mislio"
    },
    "imperfektKonjunktiv": {
      "de": "er dächte",
      "lv": "On bi mislio"
    },
    "partizipVergangenheit": {
      "de": "gedacht",
      "lv": "Mislio"
    }
  },
  {
    "infinitiv": {
      "de": "dingen",
      "lv": "Unajmiti / ugovoriti"
    },
    "praesens": {
      "de": "er dingt",
      "lv": "On unajmljuje"
    },
    "imperfektIndikativ": {
      "de": "dingte",
      "lv": "On je unajmio"
    },
    "imperfektKonjunktiv": {
      "de": "dingte",
      "lv": "On bi unajmio"
    },
    "partizipVergangenheit": {
      "de": "gedungen",
      "lv": "Unajmljen"
    }
  },
  {
    "infinitiv": {
      "de": "dreschen",
      "lv": "Vršiti"
    },
    "praesens": {
      "de": "er drischt",
      "lv": "On vrši"
    },
    "imperfektIndikativ": {
      "de": "er drasch / er drosch",
      "lv": "On je vršio"
    },
    "imperfektKonjunktiv": {
      "de": "er dräsche / er drösche",
      "lv": "On bi vršio"
    },
    "partizipVergangenheit": {
      "de": "gedroschen",
      "lv": "Ovršen"
    }
  },
  {
    "infinitiv": {
      "de": "dringen",
      "lv": "Prodrijeti"
    },
    "praesens": {
      "de": "er dringt",
      "lv": "On prodire"
    },
    "imperfektIndikativ": {
      "de": "er drang",
      "lv": "On je prodro"
    },
    "imperfektKonjunktiv": {
      "de": "er dränge",
      "lv": "On bi prodro"
    },
    "partizipVergangenheit": {
      "de": "gedrungen (er ist)",
      "lv": "Prodro"
    }
  },
  {
    "infinitiv": {
      "de": "dünken",
      "lv": "Činiti se"
    },
    "praesens": {
      "de": "es dünkt",
      "lv": "Čini se"
    },
    "imperfektIndikativ": {
      "de": "deuchte",
      "lv": "Činilo se"
    },
    "imperfektKonjunktiv": {
      "de": "deuchte",
      "lv": "Činilo bi se"
    },
    "partizipVergangenheit": {
      "de": "gedünkt",
      "lv": "Činilo se"
    }
  },
  {
    "infinitiv": {
      "de": "dürfen",
      "lv": "Smjeti"
    },
    "praesens": {
      "de": "er darf",
      "lv": "On smije"
    },
    "imperfektIndikativ": {
      "de": "durfte",
      "lv": "On je smio"
    },
    "imperfektKonjunktiv": {
      "de": "durfte",
      "lv": "On bi smio"
    },
    "partizipVergangenheit": {
      "de": "gedurft",
      "lv": "Smio"
    }
  },
  {
    "infinitiv": {
      "de": "empfehlen",
      "lv": "Preporučiti"
    },
    "praesens": {
      "de": "er empfiehlt",
      "lv": "On preporučuje"
    },
    "imperfektIndikativ": {
      "de": "er empfahl",
      "lv": "Preporučio je"
    },
    "imperfektKonjunktiv": {
      "de": "er empfähle / er empföhle",
      "lv": "On bi preporučio"
    },
    "partizipVergangenheit": {
      "de": "empfohlen",
      "lv": "Preporučen"
    }
  },
  {
    "infinitiv": {
      "de": "empfinden",
      "lv": "Osjećati"
    },
    "praesens": {
      "de": "er empfindet",
      "lv": "On osjeća"
    },
    "imperfektIndikativ": {
      "de": "er empfand",
      "lv": "Osjećao je"
    },
    "imperfektKonjunktiv": {
      "de": "er empfände",
      "lv": "On bi osjećao"
    },
    "partizipVergangenheit": {
      "de": "empfunden",
      "lv": "Osjećen"
    }
  },
  {
    "infinitiv": {
      "de": "erlöschen",
      "lv": "Ugasiti se"
    },
    "praesens": {
      "de": "er erlischt",
      "lv": "On se gasi"
    },
    "imperfektIndikativ": {
      "de": "er erlosch",
      "lv": "Ugasio se"
    },
    "imperfektKonjunktiv": {
      "de": "er erlösche",
      "lv": "On bi se ugasio"
    },
    "partizipVergangenheit": {
      "de": "erloschen (er ist)",
      "lv": "Ugašen"
    }
  },
  {
    "infinitiv": {
      "de": "erschrecken",
      "lv": "Prepasti se"
    },
    "praesens": {
      "de": "er erschrickt",
      "lv": "On se prepada"
    },
    "imperfektIndikativ": {
      "de": "er erschrak",
      "lv": "Prepao se"
    },
    "imperfektKonjunktiv": {
      "de": "er erschräke",
      "lv": "On bi se prepao"
    },
    "partizipVergangenheit": {
      "de": "erschrocken (er ist)",
      "lv": "Prepao se"
    }
  },
  {
    "infinitiv": {
      "de": "essen",
      "lv": "Jesti"
    },
    "praesens": {
      "de": "er isst",
      "lv": "On jede"
    },
    "imperfektIndikativ": {
      "de": "er ass",
      "lv": "Jeo je"
    },
    "imperfektKonjunktiv": {
      "de": "er äße",
      "lv": "On bi jeo"
    },
    "partizipVergangenheit": {
      "de": "gegessen",
      "lv": "Jeden / pojeden"
    }
  },
  {
    "infinitiv": {
      "de": "fahren",
      "lv": "Voziti"
    },
    "praesens": {
      "de": "er fährt",
      "lv": "On vozi"
    },
    "imperfektIndikativ": {
      "de": "er fuhr",
      "lv": "Vozio je"
    },
    "imperfektKonjunktiv": {
      "de": "er führe",
      "lv": "On bi vozio"
    },
    "partizipVergangenheit": {
      "de": "gefahren (er ist)",
      "lv": "Vozio / odvezao se"
    }
  },
  {
    "infinitiv": {
      "de": "fallen",
      "lv": "Pasti"
    },
    "praesens": {
      "de": "er fällt",
      "lv": "On pada"
    },
    "imperfektIndikativ": {
      "de": "er fiel",
      "lv": "Pao je"
    },
    "imperfektKonjunktiv": {
      "de": "er fiele",
      "lv": "On bi pao"
    },
    "partizipVergangenheit": {
      "de": "gefallen (er ist)",
      "lv": "Pao"
    }
  },
  {
    "infinitiv": {
      "de": "fangen",
      "lv": "Hvatati"
    },
    "praesens": {
      "de": "er fängt",
      "lv": "On hvata"
    },
    "imperfektIndikativ": {
      "de": "er fing",
      "lv": "Uhvatio je"
    },
    "imperfektKonjunktiv": {
      "de": "er finge",
      "lv": "Uhvatio bi"
    },
    "partizipVergangenheit": {
      "de": "gefangen",
      "lv": "Hvatan / uhvaćen"
    }
  },
  {
    "infinitiv": {
      "de": "finden",
      "lv": "Naći"
    },
    "praesens": {
      "de": "er findet",
      "lv": "On nalazi"
    },
    "imperfektIndikativ": {
      "de": "er fand",
      "lv": "Našao je"
    },
    "imperfektKonjunktiv": {
      "de": "er fände",
      "lv": "On bi našao"
    },
    "partizipVergangenheit": {
      "de": "gefunden",
      "lv": "Nađen"
    }
  },
  {
    "infinitiv": {
      "de": "fliegen",
      "lv": "Letjeti"
    },
    "praesens": {
      "de": "er fliegt",
      "lv": "On leti"
    },
    "imperfektIndikativ": {
      "de": "er flog",
      "lv": "Letio je"
    },
    "imperfektKonjunktiv": {
      "de": "er flöge",
      "lv": "On bi letio"
    },
    "partizipVergangenheit": {
      "de": "geflogen (er ist)",
      "lv": "Letio"
    }
  },
  {
    "infinitiv": {
      "de": "fliehen",
      "lv": "Bježati"
    },
    "praesens": {
      "de": "er flieht",
      "lv": "On bježi"
    },
    "imperfektIndikativ": {
      "de": "er floh",
      "lv": "Bježao je"
    },
    "imperfektKonjunktiv": {
      "de": "er flöhe",
      "lv": "On bi bježao"
    },
    "partizipVergangenheit": {
      "de": "geflohen (er ist)",
      "lv": "Pobjegao"
    }
  },
  {
    "infinitiv": {
      "de": "fließen",
      "lv": "Teći"
    },
    "praesens": {
      "de": "er fließt",
      "lv": "On teče"
    },
    "imperfektIndikativ": {
      "de": "er floss",
      "lv": "Tekao je"
    },
    "imperfektKonjunktiv": {
      "de": "er flösse",
      "lv": "On bi tekao"
    },
    "partizipVergangenheit": {
      "de": "geflossen (er ist)",
      "lv": "Tekao (on je)"
    }
  },
  {
    "infinitiv": {
      "de": "fressen",
      "lv": "Jesti, proždirati"
    },
    "praesens": {
      "de": "er frisst",
      "lv": "On jede / proždire"
    },
    "imperfektIndikativ": {
      "de": "er frass",
      "lv": "Jeo je / proždirao je"
    },
    "imperfektKonjunktiv": {
      "de": "er fräße",
      "lv": "On bi jeo / proždirao bi"
    },
    "partizipVergangenheit": {
      "de": "gefressen",
      "lv": "Pojeđen / proždran"
    }
  },
  {
    "infinitiv": {
      "de": "frieren",
      "lv": "Smrzavati se"
    },
    "praesens": {
      "de": "er friert",
      "lv": "On se smrzava"
    },
    "imperfektIndikativ": {
      "de": "er fror",
      "lv": "Smrzavao se"
    },
    "imperfektKonjunktiv": {
      "de": "er fröre",
      "lv": "On bi se smrzavao"
    },
    "partizipVergangenheit": {
      "de": "gefroren",
      "lv": "Smrznut"
    }
  },
  {
    "infinitiv": {
      "de": "geben",
      "lv": "Dati"
    },
    "praesens": {
      "de": "er gibt",
      "lv": "On daje"
    },
    "imperfektIndikativ": {
      "de": "er gab",
      "lv": "Dao je"
    },
    "imperfektKonjunktiv": {
      "de": "er gäbe",
      "lv": "On bi dao"
    },
    "partizipVergangenheit": {
      "de": "gegeben",
      "lv": "Dat"
    }
  },
  {
    "infinitiv": {
      "de": "gedeihen",
      "lv": "Napredovati"
    },
    "praesens": {
      "de": "er gedeiht",
      "lv": "On napreduje"
    },
    "imperfektIndikativ": {
      "de": "er gedieh",
      "lv": "Napredovao je"
    },
    "imperfektKonjunktiv": {
      "de": "er gediehe",
      "lv": "On bi napredovao"
    },
    "partizipVergangenheit": {
      "de": "gediehen (er ist)",
      "lv": "Napredovao (on je)"
    }
  },
  {
    "infinitiv": {
      "de": "gehen",
      "lv": "Ići"
    },
    "praesens": {
      "de": "er geht",
      "lv": "On ide"
    },
    "imperfektIndikativ": {
      "de": "er ging",
      "lv": "Išao je"
    },
    "imperfektKonjunktiv": {
      "de": "er ginge",
      "lv": "On bi išao"
    },
    "partizipVergangenheit": {
      "de": "gegangen (er ist)",
      "lv": "Išao (on je)"
    }
  },
  {
    "infinitiv": {
      "de": "gewinnen",
      "lv": "Osvojiti"
    },
    "praesens": {
      "de": "er gewinnt",
      "lv": "On osvaja"
    },
    "imperfektIndikativ": {
      "de": "er gewann",
      "lv": "Osvojio je"
    },
    "imperfektKonjunktiv": {
      "de": "er gewönne / er gewänne",
      "lv": "On bi osvojio"
    },
    "partizipVergangenheit": {
      "de": "gewonnen",
      "lv": "Osvojen"
    }
  },
  {
    "infinitiv": {
      "de": "haben",
      "lv": "Imati / posjedovati"
    },
    "praesens": {
      "de": "er hat",
      "lv": "On ima"
    },
    "imperfektIndikativ": {
      "de": "hatte",
      "lv": "Imao je"
    },
    "imperfektKonjunktiv": {
      "de": "hatte",
      "lv": "On bi imao"
    },
    "partizipVergangenheit": {
      "de": "gehabt",
      "lv": "Imao"
    }
  },
  {
    "infinitiv": {
      "de": "halten",
      "lv": "Držati"
    },
    "praesens": {
      "de": "er hält",
      "lv": "On drži"
    },
    "imperfektIndikativ": {
      "de": "er hielt",
      "lv": "Držao je"
    },
    "imperfektKonjunktiv": {
      "de": "er hielte",
      "lv": "On bi držao"
    },
    "partizipVergangenheit": {
      "de": "gehalten",
      "lv": "Držan"
    }
  },
  {
    "infinitiv": {
      "de": "heißen",
      "lv": "Zvati se"
    },
    "praesens": {
      "de": "er heißt",
      "lv": "On se zove / zovu ga"
    },
    "imperfektIndikativ": {
      "de": "er hieß",
      "lv": "Zvao se / zvali su ga"
    },
    "imperfektKonjunktiv": {
      "de": "er hieße",
      "lv": "On bi se zvao / zvali bi ga"
    },
    "partizipVergangenheit": {
      "de": "geheißen",
      "lv": "Zvan"
    }
  },
  {
    "infinitiv": {
      "de": "helfen",
      "lv": "Pomagati"
    },
    "praesens": {
      "de": "er hilft",
      "lv": "On pomaže"
    },
    "imperfektIndikativ": {
      "de": "er half",
      "lv": "Pomagao je"
    },
    "imperfektKonjunktiv": {
      "de": "er hülfe / er hälfe",
      "lv": "Pomagao bi"
    },
    "partizipVergangenheit": {
      "de": "geholfen",
      "lv": "Pomogao"
    }
  },
  {
    "infinitiv": {
      "de": "kommen",
      "lv": "Doći"
    },
    "praesens": {
      "de": "er kommt",
      "lv": "On dolazi"
    },
    "imperfektIndikativ": {
      "de": "er kam",
      "lv": "Došao je"
    },
    "imperfektKonjunktiv": {
      "de": "er käme",
      "lv": "Došao bi"
    },
    "partizipVergangenheit": {
      "de": "gekommen (er ist)",
      "lv": "Došao"
    }
  },
  {
    "infinitiv": {
      "de": "können",
      "lv": "Moći"
    },
    "praesens": {
      "de": "er kann",
      "lv": "On može"
    },
    "imperfektIndikativ": {
      "de": "konnte",
      "lv": "Mogao je"
    },
    "imperfektKonjunktiv": {
      "de": "konnte",
      "lv": "On bi mogao"
    },
    "partizipVergangenheit": {
      "de": "gekonnt",
      "lv": "Mogao"
    }
  },
  {
    "infinitiv": {
      "de": "kriechen",
      "lv": "Puzati"
    },
    "praesens": {
      "de": "er kriecht",
      "lv": "On puže"
    },
    "imperfektIndikativ": {
      "de": "er kroch",
      "lv": "Puzao je"
    },
    "imperfektKonjunktiv": {
      "de": "er kröche",
      "lv": "Puzao bi"
    },
    "partizipVergangenheit": {
      "de": "gekrochen (er ist)",
      "lv": "Puzao"
    }
  },
  {
    "infinitiv": {
      "de": "laden",
      "lv": "Tovariti, pozvati"
    },
    "praesens": {
      "de": "er lädt",
      "lv": "On tovari / poziva"
    },
    "imperfektIndikativ": {
      "de": "er lud",
      "lv": "Tovario je / pozvao je"
    },
    "imperfektKonjunktiv": {
      "de": "er lüde",
      "lv": "Tovario bi / pozvao bi"
    },
    "partizipVergangenheit": {
      "de": "geladen",
      "lv": "Natovaren / pozvan"
    }
  },
  {
    "infinitiv": {
      "de": "lassen",
      "lv": "Ostaviti / pustiti"
    },
    "praesens": {
      "de": "er lässt",
      "lv": "On ostavlja / pušta"
    },
    "imperfektIndikativ": {
      "de": "er ließ",
      "lv": "Ostavio je / pustio je"
    },
    "imperfektKonjunktiv": {
      "de": "er ließe",
      "lv": "Ostavio bi / pustio bi"
    },
    "partizipVergangenheit": {
      "de": "gelassen",
      "lv": "Ostavljen / pušten"
    }
  },
  {
    "infinitiv": {
      "de": "laufen",
      "lv": "Trčati"
    },
    "praesens": {
      "de": "er läuft",
      "lv": "On trči"
    },
    "imperfektIndikativ": {
      "de": "er lief",
      "lv": "Trčao je"
    },
    "imperfektKonjunktiv": {
      "de": "er liefe",
      "lv": "Trčao bi"
    },
    "partizipVergangenheit": {
      "de": "gelaufen (er ist)",
      "lv": "Trčao"
    }
  },
  {
    "infinitiv": {
      "de": "leiden",
      "lv": "Patiti"
    },
    "praesens": {
      "de": "er leidet",
      "lv": "On pati"
    },
    "imperfektIndikativ": {
      "de": "er litt",
      "lv": "Patio je"
    },
    "imperfektKonjunktiv": {
      "de": "er litte",
      "lv": "Patio bi"
    },
    "partizipVergangenheit": {
      "de": "gelitten",
      "lv": "Pretrpljen"
    }
  },
  {
    "infinitiv": {
      "de": "leihen",
      "lv": "Posuditi / pozajmiti"
    },
    "praesens": {
      "de": "er leiht",
      "lv": "On posuđuje / pozajmljuje"
    },
    "imperfektIndikativ": {
      "de": "er lieh",
      "lv": "Posudio je / pozajmio je"
    },
    "imperfektKonjunktiv": {
      "de": "er liehe",
      "lv": "Posudio bi / pozajmio bi"
    },
    "partizipVergangenheit": {
      "de": "geliehen",
      "lv": "Posuđen / pozajmljen"
    }
  },
  {
    "infinitiv": {
      "de": "lesen",
      "lv": "Čitati"
    },
    "praesens": {
      "de": "er liest",
      "lv": "On čita"
    },
    "imperfektIndikativ": {
      "de": "er las",
      "lv": "Čitao je"
    },
    "imperfektKonjunktiv": {
      "de": "er läse",
      "lv": "Čitao bi"
    },
    "partizipVergangenheit": {
      "de": "gelesen",
      "lv": "Čitan"
    }
  },
  {
    "infinitiv": {
      "de": "liegen",
      "lv": "Ležati"
    },
    "praesens": {
      "de": "er liegt",
      "lv": "On leži"
    },
    "imperfektIndikativ": {
      "de": "er lag",
      "lv": "Ležao je"
    },
    "imperfektKonjunktiv": {
      "de": "er läge",
      "lv": "Ležao bi"
    },
    "partizipVergangenheit": {
      "de": "gelegen",
      "lv": "Ležao"
    }
  },
  {
    "infinitiv": {
      "de": "lügen",
      "lv": "Lagati"
    },
    "praesens": {
      "de": "er lügt",
      "lv": "On laže"
    },
    "imperfektIndikativ": {
      "de": "er log",
      "lv": "Lagao je"
    },
    "imperfektKonjunktiv": {
      "de": "er löge",
      "lv": "On bi lagao"
    },
    "partizipVergangenheit": {
      "de": "gelogen",
      "lv": "Lagao"
    }
  },
  {
    "infinitiv": {
      "de": "mahlen",
      "lv": "Mljeti"
    },
    "praesens": {
      "de": "er mahlt",
      "lv": "On melje"
    },
    "imperfektIndikativ": {
      "de": "er mahlte",
      "lv": "Mljeo je"
    },
    "imperfektKonjunktiv": {
      "de": "er malte",
      "lv": "On bi mljeo"
    },
    "partizipVergangenheit": {
      "de": "gemahlen",
      "lv": "Samljeven"
    }
  },
  {
    "infinitiv": {
      "de": "meiden",
      "lv": "Izbjegavati"
    },
    "praesens": {
      "de": "er meidet",
      "lv": "On izbjegava"
    },
    "imperfektIndikativ": {
      "de": "er mied",
      "lv": "Izbjegavao je"
    },
    "imperfektKonjunktiv": {
      "de": "er miede",
      "lv": "On bi izbjegavao"
    },
    "partizipVergangenheit": {
      "de": "gemieden",
      "lv": "Izbjegnut"
    }
  },
  {
    "infinitiv": {
      "de": "melken",
      "lv": "Musti"
    },
    "praesens": {
      "de": "er milkt / er melkt",
      "lv": "On muze / on muze"
    },
    "imperfektIndikativ": {
      "de": "er molk / er melkte",
      "lv": "Muzao je / muzao je"
    },
    "imperfektKonjunktiv": {
      "de": "er mölke / er melkte",
      "lv": "On bi muzao / on bi muzao"
    },
    "partizipVergangenheit": {
      "de": "gemolken / gemelkt",
      "lv": "Pomužen / pomužen"
    }
  },
  {
    "infinitiv": {
      "de": "messen",
      "lv": "Mjeriti"
    },
    "praesens": {
      "de": "er misst",
      "lv": "On mjeri"
    },
    "imperfektIndikativ": {
      "de": "er mass",
      "lv": "Mjerio je"
    },
    "imperfektKonjunktiv": {
      "de": "er mäße",
      "lv": "On bi mjerio"
    },
    "partizipVergangenheit": {
      "de": "gemessen",
      "lv": "Izmjeren"
    }
  },
  {
    "infinitiv": {
      "de": "misslingen",
      "lv": "Ne uspjeti"
    },
    "praesens": {
      "de": "es misslingt",
      "lv": "Ne uspijeva"
    },
    "imperfektIndikativ": {
      "de": "misslang",
      "lv": "Nije uspjelo"
    },
    "imperfektKonjunktiv": {
      "de": "misslang",
      "lv": "Nije uspjelo"
    },
    "partizipVergangenheit": {
      "de": "misslungen",
      "lv": "Neuspješan"
    }
  },
  {
    "infinitiv": {
      "de": "mögen",
      "lv": "Voljeti"
    },
    "praesens": {
      "de": "er mag",
      "lv": "On voli"
    },
    "imperfektIndikativ": {
      "de": "mochte",
      "lv": "Volio je"
    },
    "imperfektKonjunktiv": {
      "de": "mochte",
      "lv": "On bi volio"
    },
    "partizipVergangenheit": {
      "de": "gemocht",
      "lv": "Volio"
    }
  },
  {
    "infinitiv": {
      "de": "müssen",
      "lv": "Morati"
    },
    "praesens": {
      "de": "er muss",
      "lv": "On mora"
    },
    "imperfektIndikativ": {
      "de": "musste",
      "lv": "Morao je"
    },
    "imperfektKonjunktiv": {
      "de": "musste",
      "lv": "On bi morao"
    },
    "partizipVergangenheit": {
      "de": "gemusst",
      "lv": "Morao"
    }
  },
  {
    "infinitiv": {
      "de": "nehmen",
      "lv": "Uzimati"
    },
    "praesens": {
      "de": "er nimmt",
      "lv": "On uzima"
    },
    "imperfektIndikativ": {
      "de": "er nahm",
      "lv": "Uzimao je"
    },
    "imperfektKonjunktiv": {
      "de": "er nähme",
      "lv": "On bi uzeo"
    },
    "partizipVergangenheit": {
      "de": "genommen",
      "lv": "Uzet"
    }
  },
  {
    "infinitiv": {
      "de": "nennen",
      "lv": "Nazvati"
    },
    "praesens": {
      "de": "er nennt",
      "lv": "On naziva"
    },
    "imperfektIndikativ": {
      "de": "er nannte",
      "lv": "Nazvao je"
    },
    "imperfektKonjunktiv": {
      "de": "er nennte",
      "lv": "On bi nazvao"
    },
    "partizipVergangenheit": {
      "de": "genannt",
      "lv": "Nazvan"
    }
  },
  {
    "infinitiv": {
      "de": "pfeifen",
      "lv": "Zviždati"
    },
    "praesens": {
      "de": "er pfeift",
      "lv": "On zviždi"
    },
    "imperfektIndikativ": {
      "de": "er pfiff",
      "lv": "Zviždao je"
    },
    "imperfektKonjunktiv": {
      "de": "er pfiffe",
      "lv": "Zviždao bi"
    },
    "partizipVergangenheit": {
      "de": "gepfiffen",
      "lv": "Zviždan"
    }
  },
  {
    "infinitiv": {
      "de": "pflegen",
      "lv": "Njegovati"
    },
    "praesens": {
      "de": "er pflegt",
      "lv": "On njeguje"
    },
    "imperfektIndikativ": {
      "de": "pflegte vai pflog",
      "lv": "Njegovao je"
    },
    "imperfektKonjunktiv": {
      "de": "pflegte vai pflog",
      "lv": "On bi njegovao"
    },
    "partizipVergangenheit": {
      "de": "gepflegt vai gepflogen",
      "lv": "Njegovan"
    }
  },
  {
    "infinitiv": {
      "de": "preisen",
      "lv": "Hvaliti"
    },
    "praesens": {
      "de": "er preist",
      "lv": "On hvali"
    },
    "imperfektIndikativ": {
      "de": "er pries",
      "lv": "Hvalio je"
    },
    "imperfektKonjunktiv": {
      "de": "er priese",
      "lv": "Hvalio bi"
    },
    "partizipVergangenheit": {
      "de": "gepriesen",
      "lv": "Hvaljen"
    }
  },
  {
    "infinitiv": {
      "de": "quellen",
      "lv": "Bujati"
    },
    "praesens": {
      "de": "er quillt",
      "lv": "On buja"
    },
    "imperfektIndikativ": {
      "de": "er quoll",
      "lv": "Bujao je"
    },
    "imperfektKonjunktiv": {
      "de": "er quölle",
      "lv": "Bujao bi"
    },
    "partizipVergangenheit": {
      "de": "gequollen (er ist)",
      "lv": "Nabujao"
    }
  },
  {
    "infinitiv": {
      "de": "raten",
      "lv": "Savjetovati / pogađati"
    },
    "praesens": {
      "de": "er rät",
      "lv": "On savjetuje / pogađa"
    },
    "imperfektIndikativ": {
      "de": "er riet",
      "lv": "Savjetovao je / pogađao je"
    },
    "imperfektKonjunktiv": {
      "de": "er riete",
      "lv": "Savjetovao bi / pogađao bi"
    },
    "partizipVergangenheit": {
      "de": "geraten",
      "lv": "Savjetovan / pogođen"
    }
  },
  {
    "infinitiv": {
      "de": "reiben",
      "lv": "Trljati"
    },
    "praesens": {
      "de": "er reibt",
      "lv": "On trlja"
    },
    "imperfektIndikativ": {
      "de": "er rieb",
      "lv": "Trljao je"
    },
    "imperfektKonjunktiv": {
      "de": "er riebe",
      "lv": "Trljao bi"
    },
    "partizipVergangenheit": {
      "de": "gerieben",
      "lv": "Trljan"
    }
  },
  {
    "infinitiv": {
      "de": "reißen",
      "lv": "Trgati"
    },
    "praesens": {
      "de": "er reißt",
      "lv": "On trga"
    },
    "imperfektIndikativ": {
      "de": "er riss",
      "lv": "Trgao je"
    },
    "imperfektKonjunktiv": {
      "de": "er risse",
      "lv": "Trgao bi"
    },
    "partizipVergangenheit": {
      "de": "gerissen",
      "lv": "Trgan"
    }
  },
  {
    "infinitiv": {
      "de": "reiten",
      "lv": "Jahati"
    },
    "praesens": {
      "de": "er reitet",
      "lv": "On jaše"
    },
    "imperfektIndikativ": {
      "de": "er ritt",
      "lv": "Jahao je"
    },
    "imperfektKonjunktiv": {
      "de": "er ritte",
      "lv": "Jahao bi"
    },
    "partizipVergangenheit": {
      "de": "geritten (er ist)",
      "lv": "Jahao"
    }
  },
  {
    "infinitiv": {
      "de": "rennen",
      "lv": "Trčati"
    },
    "praesens": {
      "de": "er rennt",
      "lv": "On trči"
    },
    "imperfektIndikativ": {
      "de": "er rannte",
      "lv": "Trčao je"
    },
    "imperfektKonjunktiv": {
      "de": "er rennte",
      "lv": "Trčao bi"
    },
    "partizipVergangenheit": {
      "de": "gerannt",
      "lv": "Trčao"
    }
  },
  {
    "infinitiv": {
      "de": "riechen",
      "lv": "Mirisati"
    },
    "praesens": {
      "de": "er riecht",
      "lv": "On miriše"
    },
    "imperfektIndikativ": {
      "de": "er roch",
      "lv": "Mirisao je"
    },
    "imperfektKonjunktiv": {
      "de": "er röche",
      "lv": "Mirisao bi"
    },
    "partizipVergangenheit": {
      "de": "gerochen",
      "lv": "Mirisan"
    }
  },
  {
    "infinitiv": {
      "de": "ringen",
      "lv": "Rvati se"
    },
    "praesens": {
      "de": "er ringt",
      "lv": "On se rve"
    },
    "imperfektIndikativ": {
      "de": "er rang",
      "lv": "Rvao se"
    },
    "imperfektKonjunktiv": {
      "de": "er ränge",
      "lv": "Rvao bi se"
    },
    "partizipVergangenheit": {
      "de": "gerungen",
      "lv": "Rvan"
    }
  },
  {
    "infinitiv": {
      "de": "rinnen",
      "lv": "Teći"
    },
    "praesens": {
      "de": "er rinnt",
      "lv": "On teče"
    },
    "imperfektIndikativ": {
      "de": "er rann",
      "lv": "Tekao je"
    },
    "imperfektKonjunktiv": {
      "de": "er ränne / er rönne",
      "lv": "On bi tekao"
    },
    "partizipVergangenheit": {
      "de": "geronnen (er ist)",
      "lv": "Tekao / zgrušao se"
    }
  },
  {
    "infinitiv": {
      "de": "rufen",
      "lv": "Zvati"
    },
    "praesens": {
      "de": "er ruft",
      "lv": "On zove"
    },
    "imperfektIndikativ": {
      "de": "er rief",
      "lv": "Zvao je"
    },
    "imperfektKonjunktiv": {
      "de": "er riefe",
      "lv": "Zvao bi"
    },
    "partizipVergangenheit": {
      "de": "gerufen",
      "lv": "Zvan"
    }
  },
  {
    "infinitiv": {
      "de": "salzen",
      "lv": "Soliti"
    },
    "praesens": {
      "de": "er salzt",
      "lv": "On soli"
    },
    "imperfektIndikativ": {
      "de": "er salzte",
      "lv": "Solio je"
    },
    "imperfektKonjunktiv": {
      "de": "er salzte",
      "lv": "Solio bi"
    },
    "partizipVergangenheit": {
      "de": "gesalzen",
      "lv": "Posoljen"
    }
  },
  {
    "infinitiv": {
      "de": "saufen",
      "lv": "Pijančevati / piti"
    },
    "praesens": {
      "de": "er säuft",
      "lv": "On pijanči / pije"
    },
    "imperfektIndikativ": {
      "de": "er soff",
      "lv": "Pijančio je / pio je"
    },
    "imperfektKonjunktiv": {
      "de": "er söffe",
      "lv": "Pijančio bi / pio bi"
    },
    "partizipVergangenheit": {
      "de": "gesoffen",
      "lv": "Pio"
    }
  },
  {
    "infinitiv": {
      "de": "saugen",
      "lv": "Sisati"
    },
    "praesens": {
      "de": "er saugt",
      "lv": "On sisa"
    },
    "imperfektIndikativ": {
      "de": "er sog",
      "lv": "Sisao je"
    },
    "imperfektKonjunktiv": {
      "de": "er söge",
      "lv": "Sisao bi"
    },
    "partizipVergangenheit": {
      "de": "gesogen",
      "lv": "Sisao"
    }
  },
  {
    "infinitiv": {
      "de": "schaffen",
      "lv": "Stvoriti"
    },
    "praesens": {
      "de": "er schafft",
      "lv": "On stvara"
    },
    "imperfektIndikativ": {
      "de": "er schuf",
      "lv": "Stvorio je"
    },
    "imperfektKonjunktiv": {
      "de": "er schüfe",
      "lv": "Stvorio bi"
    },
    "partizipVergangenheit": {
      "de": "geschaffen",
      "lv": "Stvoren"
    }
  },
  {
    "infinitiv": {
      "de": "schallen",
      "lv": "Zvučati"
    },
    "praesens": {
      "de": "es schallt",
      "lv": "Odjekuje"
    },
    "imperfektIndikativ": {
      "de": "schallte vai scholl",
      "lv": "Odjekivalo je"
    },
    "imperfektKonjunktiv": {
      "de": "schallte vai scholl",
      "lv": "Odjekivalo bi"
    },
    "partizipVergangenheit": {
      "de": "geschallt",
      "lv": "Zvučao"
    }
  },
  {
    "infinitiv": {
      "de": "scheiden",
      "lv": "Razdvojiti / rastati se"
    },
    "praesens": {
      "de": "er scheidet",
      "lv": "On razdvaja / rastaje se"
    },
    "imperfektIndikativ": {
      "de": "er schied",
      "lv": "Razdvojio je / rastao se"
    },
    "imperfektKonjunktiv": {
      "de": "er schiede",
      "lv": "Razdvojio bi / rastao bi se"
    },
    "partizipVergangenheit": {
      "de": "geschieden (er hat / er ist)",
      "lv": "Razdvojen / rastao se"
    }
  },
  {
    "infinitiv": {
      "de": "scheinen",
      "lv": "Sijati / izgledati"
    },
    "praesens": {
      "de": "er scheint",
      "lv": "On sija / izgleda"
    },
    "imperfektIndikativ": {
      "de": "er schien",
      "lv": "Sijao je / izgledao je"
    },
    "imperfektKonjunktiv": {
      "de": "er schiene",
      "lv": "Sijao bi / izgledao bi"
    },
    "partizipVergangenheit": {
      "de": "geschienen",
      "lv": "Sijao / izgledao"
    }
  },
  {
    "infinitiv": {
      "de": "schelten",
      "lv": "Grditi"
    },
    "praesens": {
      "de": "er schilt",
      "lv": "On grdi"
    },
    "imperfektIndikativ": {
      "de": "er schalt",
      "lv": "Grdio je"
    },
    "imperfektKonjunktiv": {
      "de": "er schölte / er schälte",
      "lv": "Grdio bi / grdio bi"
    },
    "partizipVergangenheit": {
      "de": "gescholten",
      "lv": "Izgrđen"
    }
  },
  {
    "infinitiv": {
      "de": "scheren",
      "lv": "Šišati"
    },
    "praesens": {
      "de": "er schert",
      "lv": "On šiša"
    },
    "imperfektIndikativ": {
      "de": "schor vai scherte",
      "lv": "Šišao je"
    },
    "imperfektKonjunktiv": {
      "de": "schor vai scherte",
      "lv": "On bi šišao"
    },
    "partizipVergangenheit": {
      "de": "geschoren vai geschert",
      "lv": "Ošišan"
    }
  },
  {
    "infinitiv": {
      "de": "schieben",
      "lv": "Gurati"
    },
    "praesens": {
      "de": "er schiebt",
      "lv": "On gura"
    },
    "imperfektIndikativ": {
      "de": "er schob",
      "lv": "Gurao je"
    },
    "imperfektKonjunktiv": {
      "de": "er schöbe",
      "lv": "Gurao bi"
    },
    "partizipVergangenheit": {
      "de": "geschoben",
      "lv": "Gurnut"
    }
  },
  {
    "infinitiv": {
      "de": "schießen",
      "lv": "Pucati"
    },
    "praesens": {
      "de": "er schießt",
      "lv": "On puca"
    },
    "imperfektIndikativ": {
      "de": "er schoss",
      "lv": "Pucao je"
    },
    "imperfektKonjunktiv": {
      "de": "er schösse",
      "lv": "On bi pucao"
    },
    "partizipVergangenheit": {
      "de": "geschossen",
      "lv": "Pucan"
    }
  },
  {
    "infinitiv": {
      "de": "schinden",
      "lv": "Mučiti"
    },
    "praesens": {
      "de": "er schindet",
      "lv": "On muči"
    },
    "imperfektIndikativ": {
      "de": "schindete",
      "lv": "Mučio je"
    },
    "imperfektKonjunktiv": {
      "de": "schindete",
      "lv": "On bi mučio"
    },
    "partizipVergangenheit": {
      "de": "geschunden",
      "lv": "Mučen"
    }
  },
  {
    "infinitiv": {
      "de": "schlafen",
      "lv": "Spavati"
    },
    "praesens": {
      "de": "er schläft",
      "lv": "On spava"
    },
    "imperfektIndikativ": {
      "de": "er schlief",
      "lv": "Spavao je"
    },
    "imperfektKonjunktiv": {
      "de": "er schliefe",
      "lv": "Spavao bi"
    },
    "partizipVergangenheit": {
      "de": "geschlafen",
      "lv": "Spavao"
    }
  },
  {
    "infinitiv": {
      "de": "schlagen",
      "lv": "Udarati"
    },
    "praesens": {
      "de": "er schlägt",
      "lv": "On udara"
    },
    "imperfektIndikativ": {
      "de": "er schlug",
      "lv": "Udarao je"
    },
    "imperfektKonjunktiv": {
      "de": "er schlüge",
      "lv": "On bi udarao"
    },
    "partizipVergangenheit": {
      "de": "geschlagen",
      "lv": "Udaren"
    }
  },
  {
    "infinitiv": {
      "de": "schleichen",
      "lv": "Puzati"
    },
    "praesens": {
      "de": "er schleicht",
      "lv": "On puže"
    },
    "imperfektIndikativ": {
      "de": "er schlich",
      "lv": "Puzao je"
    },
    "imperfektKonjunktiv": {
      "de": "er schliche",
      "lv": "Puzao bi"
    },
    "partizipVergangenheit": {
      "de": "geschlichen (er ist)",
      "lv": "Puzao"
    }
  },
  {
    "infinitiv": {
      "de": "schleifen",
      "lv": "Brusiti"
    },
    "praesens": {
      "de": "er schleift",
      "lv": "On brusi"
    },
    "imperfektIndikativ": {
      "de": "er schliff",
      "lv": "Brusio je"
    },
    "imperfektKonjunktiv": {
      "de": "er schliffe",
      "lv": "On bi brusio"
    },
    "partizipVergangenheit": {
      "de": "geschliffen",
      "lv": "Brušen"
    }
  },
  {
    "infinitiv": {
      "de": "schließen",
      "lv": "Zatvoriti"
    },
    "praesens": {
      "de": "er schließt",
      "lv": "On zatvara"
    },
    "imperfektIndikativ": {
      "de": "er schloss",
      "lv": "Zatvorio je"
    },
    "imperfektKonjunktiv": {
      "de": "er schlösse",
      "lv": "On bi zatvorio"
    },
    "partizipVergangenheit": {
      "de": "geschlossen",
      "lv": "Zatvoren"
    }
  },
  {
    "infinitiv": {
      "de": "schlingen",
      "lv": "Gutati"
    },
    "praesens": {
      "de": "er schlingt",
      "lv": "On guta"
    },
    "imperfektIndikativ": {
      "de": "er schlang",
      "lv": "Gutao je"
    },
    "imperfektKonjunktiv": {
      "de": "er schlänge",
      "lv": "On bi gutao"
    },
    "partizipVergangenheit": {
      "de": "geschlungen",
      "lv": "Progutan"
    }
  },
  {
    "infinitiv": {
      "de": "schmeißen",
      "lv": "Bacati"
    },
    "praesens": {
      "de": "er schmeißt",
      "lv": "On baca"
    },
    "imperfektIndikativ": {
      "de": "er schmiss",
      "lv": "Bacao je"
    },
    "imperfektKonjunktiv": {
      "de": "er schmisse",
      "lv": "On bi bacao"
    },
    "partizipVergangenheit": {
      "de": "geschmissen",
      "lv": "Bačen"
    }
  },
  {
    "infinitiv": {
      "de": "schmelzen",
      "lv": "Topiti se"
    },
    "praesens": {
      "de": "er schmilzt",
      "lv": "On se topi"
    },
    "imperfektIndikativ": {
      "de": "er schmolz",
      "lv": "Topio se"
    },
    "imperfektKonjunktiv": {
      "de": "er schmölze",
      "lv": "On bi se topio"
    },
    "partizipVergangenheit": {
      "de": "geschmolzen (er ist)",
      "lv": "Otopljen"
    }
  },
  {
    "infinitiv": {
      "de": "schnauben",
      "lv": "Frktati"
    },
    "praesens": {
      "de": "er schnaubt",
      "lv": "On frkće"
    },
    "imperfektIndikativ": {
      "de": "schnaubte vai schnob",
      "lv": "Frktao je / frknuo je"
    },
    "imperfektKonjunktiv": {
      "de": "schnaubte vai schnob",
      "lv": "On bi frktao"
    },
    "partizipVergangenheit": {
      "de": "geschnaubt vai geschnoben",
      "lv": "Frktan / frknut"
    }
  },
  {
    "infinitiv": {
      "de": "schneiden",
      "lv": "Rezati"
    },
    "praesens": {
      "de": "er schneidet",
      "lv": "On reže"
    },
    "imperfektIndikativ": {
      "de": "er schnitt",
      "lv": "Rezao je"
    },
    "imperfektKonjunktiv": {
      "de": "er schnitte",
      "lv": "On bi rezao"
    },
    "partizipVergangenheit": {
      "de": "geschnitten",
      "lv": "Rezan"
    }
  },
  {
    "infinitiv": {
      "de": "schreiben",
      "lv": "Pisati"
    },
    "praesens": {
      "de": "er schreibt",
      "lv": "On piše"
    },
    "imperfektIndikativ": {
      "de": "er schrieb",
      "lv": "Pisao je"
    },
    "imperfektKonjunktiv": {
      "de": "er schriebe",
      "lv": "On bi pisao"
    },
    "partizipVergangenheit": {
      "de": "geschrieben",
      "lv": "Pisan"
    }
  },
  {
    "infinitiv": {
      "de": "schreien",
      "lv": "Vikati"
    },
    "praesens": {
      "de": "er schreit",
      "lv": "On viče"
    },
    "imperfektIndikativ": {
      "de": "er schrie",
      "lv": "Vikao je"
    },
    "imperfektKonjunktiv": {
      "de": "er schriee",
      "lv": "On bi vikao"
    },
    "partizipVergangenheit": {
      "de": "geschrien",
      "lv": "Vikan"
    }
  },
  {
    "infinitiv": {
      "de": "schreiten",
      "lv": "Koračati"
    },
    "praesens": {
      "de": "er schreitet",
      "lv": "On korača"
    },
    "imperfektIndikativ": {
      "de": "er schritt",
      "lv": "Koračao je"
    },
    "imperfektKonjunktiv": {
      "de": "er schritte",
      "lv": "On bi koračao"
    },
    "partizipVergangenheit": {
      "de": "geschritten (er ist)",
      "lv": "Koračao"
    }
  },
  {
    "infinitiv": {
      "de": "schweigen",
      "lv": "Šutjeti"
    },
    "praesens": {
      "de": "er schweigt",
      "lv": "On šuti"
    },
    "imperfektIndikativ": {
      "de": "er schwieg",
      "lv": "Šutio je"
    },
    "imperfektKonjunktiv": {
      "de": "er schwiege",
      "lv": "On bi šutio"
    },
    "partizipVergangenheit": {
      "de": "geschwiegen",
      "lv": "Šutio"
    }
  },
  {
    "infinitiv": {
      "de": "schwellen",
      "lv": "Oticati"
    },
    "praesens": {
      "de": "er schwillt",
      "lv": "On otiče"
    },
    "imperfektIndikativ": {
      "de": "er schwoll",
      "lv": "Otekao je"
    },
    "imperfektKonjunktiv": {
      "de": "er schwölle",
      "lv": "On bi otekao"
    },
    "partizipVergangenheit": {
      "de": "geschwollen (er ist)",
      "lv": "Otekao"
    }
  },
  {
    "infinitiv": {
      "de": "schwimmen",
      "lv": "Plivati"
    },
    "praesens": {
      "de": "er schwimmt",
      "lv": "On pliva"
    },
    "imperfektIndikativ": {
      "de": "er schwamm",
      "lv": "Plivao je"
    },
    "imperfektKonjunktiv": {
      "de": "er schwömme / er schwämme",
      "lv": "On bi plivao"
    },
    "partizipVergangenheit": {
      "de": "geschwommen (er ist)",
      "lv": "Plivao"
    }
  },
  {
    "infinitiv": {
      "de": "schwinden",
      "lv": "Nestajati"
    },
    "praesens": {
      "de": "er schwindet",
      "lv": "On nestaje"
    },
    "imperfektIndikativ": {
      "de": "er schwand",
      "lv": "Nestao je"
    },
    "imperfektKonjunktiv": {
      "de": "er schwände",
      "lv": "On bi nestao"
    },
    "partizipVergangenheit": {
      "de": "geschwunden (er ist)",
      "lv": "Nestao"
    }
  },
  {
    "infinitiv": {
      "de": "schwingen",
      "lv": "Mahati"
    },
    "praesens": {
      "de": "er schwingt",
      "lv": "On maše"
    },
    "imperfektIndikativ": {
      "de": "er schwang",
      "lv": "Mahao je"
    },
    "imperfektKonjunktiv": {
      "de": "er schwänge",
      "lv": "On bi mahao"
    },
    "partizipVergangenheit": {
      "de": "geschwungen",
      "lv": "Mahan"
    }
  },
  {
    "infinitiv": {
      "de": "schwören",
      "lv": "Zakleti se"
    },
    "praesens": {
      "de": "er schwört",
      "lv": "On se kune"
    },
    "imperfektIndikativ": {
      "de": "er schwur / er schwor",
      "lv": "Zakleo se / zakleo se"
    },
    "imperfektKonjunktiv": {
      "de": "er schwöre",
      "lv": "On bi se zakleo"
    },
    "partizipVergangenheit": {
      "de": "geschworen",
      "lv": "Zaklet"
    }
  },
  {
    "infinitiv": {
      "de": "sehen",
      "lv": "Vidjeti"
    },
    "praesens": {
      "de": "er sieht",
      "lv": "On vidi"
    },
    "imperfektIndikativ": {
      "de": "er sah",
      "lv": "Vidio je"
    },
    "imperfektKonjunktiv": {
      "de": "er sähe",
      "lv": "On bi vidio"
    },
    "partizipVergangenheit": {
      "de": "gesehen",
      "lv": "Viđen"
    }
  },
  {
    "infinitiv": {
      "de": "sein",
      "lv": "Biti"
    },
    "praesens": {
      "de": "er ist",
      "lv": "On je"
    },
    "imperfektIndikativ": {
      "de": "war",
      "lv": "Bio je"
    },
    "imperfektKonjunktiv": {
      "de": "war",
      "lv": "Bio bi"
    },
    "partizipVergangenheit": {
      "de": "gewesen",
      "lv": "Bio"
    }
  },
  {
    "infinitiv": {
      "de": "senden",
      "lv": "Slati"
    },
    "praesens": {
      "de": "er sendet",
      "lv": "On šalje"
    },
    "imperfektIndikativ": {
      "de": "er sandte / er sendete",
      "lv": "Slao je / slao je"
    },
    "imperfektKonjunktiv": {
      "de": "er sendete",
      "lv": "On bi slao"
    },
    "partizipVergangenheit": {
      "de": "gesandt / gesendet",
      "lv": "Poslan"
    }
  },
  {
    "infinitiv": {
      "de": "sieden",
      "lv": "Kuhati"
    },
    "praesens": {
      "de": "er siedet",
      "lv": "On kuha"
    },
    "imperfektIndikativ": {
      "de": "sott vai siedete",
      "lv": "Kuhao je"
    },
    "imperfektKonjunktiv": {
      "de": "sott vai siedete",
      "lv": "On bi kuhao"
    },
    "partizipVergangenheit": {
      "de": "gesotten vai gesiedet",
      "lv": "Kuhan"
    }
  },
  {
    "infinitiv": {
      "de": "singen",
      "lv": "Pjevati"
    },
    "praesens": {
      "de": "er singt",
      "lv": "On pjeva"
    },
    "imperfektIndikativ": {
      "de": "er sang",
      "lv": "Pjevao je"
    },
    "imperfektKonjunktiv": {
      "de": "er sänge",
      "lv": "On bi pjevao"
    },
    "partizipVergangenheit": {
      "de": "gesungen",
      "lv": "Pjevan"
    }
  },
  {
    "infinitiv": {
      "de": "sinken",
      "lv": "Tonuti"
    },
    "praesens": {
      "de": "er sinkt",
      "lv": "On tone"
    },
    "imperfektIndikativ": {
      "de": "er sank",
      "lv": "Tonuo je"
    },
    "imperfektKonjunktiv": {
      "de": "er sänke",
      "lv": "On bi tonuo"
    },
    "partizipVergangenheit": {
      "de": "gesunken (er ist)",
      "lv": "Potonuo"
    }
  },
  {
    "infinitiv": {
      "de": "sinnen",
      "lv": "Razmišljati"
    },
    "praesens": {
      "de": "er sinnt",
      "lv": "On razmišlja"
    },
    "imperfektIndikativ": {
      "de": "er sann",
      "lv": "Razmišljao je"
    },
    "imperfektKonjunktiv": {
      "de": "er sönne / er sänne",
      "lv": "On bi razmišljao"
    },
    "partizipVergangenheit": {
      "de": "gesonnen",
      "lv": "Promišljen"
    }
  },
  {
    "infinitiv": {
      "de": "sitzen",
      "lv": "Sjediti"
    },
    "praesens": {
      "de": "er sitzt",
      "lv": "On sjedi"
    },
    "imperfektIndikativ": {
      "de": "er sass",
      "lv": "Sjedio je"
    },
    "imperfektKonjunktiv": {
      "de": "er säße",
      "lv": "On bi sjedio"
    },
    "partizipVergangenheit": {
      "de": "gesessen",
      "lv": "Sjedio"
    }
  },
  {
    "infinitiv": {
      "de": "sollen",
      "lv": "Trebati / biti dužan"
    },
    "praesens": {
      "de": "er soll",
      "lv": "On treba"
    },
    "imperfektIndikativ": {
      "de": "sollte",
      "lv": "Trebao je"
    },
    "imperfektKonjunktiv": {
      "de": "sollte",
      "lv": "On bi trebao"
    },
    "partizipVergangenheit": {
      "de": "gesollt",
      "lv": "Trebao"
    }
  },
  {
    "infinitiv": {
      "de": "speien",
      "lv": "Pljuvati"
    },
    "praesens": {
      "de": "er speit",
      "lv": "On pljuje"
    },
    "imperfektIndikativ": {
      "de": "er spie",
      "lv": "Pljuvao je"
    },
    "imperfektKonjunktiv": {
      "de": "er spie",
      "lv": "On bi pljuvao"
    },
    "partizipVergangenheit": {
      "de": "gespien",
      "lv": "Pljuvan"
    }
  },
  {
    "infinitiv": {
      "de": "spinnen",
      "lv": "Presti"
    },
    "praesens": {
      "de": "er spinnt",
      "lv": "On prede"
    },
    "imperfektIndikativ": {
      "de": "er spann",
      "lv": "Preo je"
    },
    "imperfektKonjunktiv": {
      "de": "er spönne / er spänne",
      "lv": "On bi preo"
    },
    "partizipVergangenheit": {
      "de": "gesponnen",
      "lv": "Ispređen"
    }
  },
  {
    "infinitiv": {
      "de": "spleißen",
      "lv": "Spojiti"
    },
    "praesens": {
      "de": "er spleißt",
      "lv": "On spaja"
    },
    "imperfektIndikativ": {
      "de": "spliss",
      "lv": "Spojio je"
    },
    "imperfektKonjunktiv": {
      "de": "spliss",
      "lv": "On bi spojio"
    },
    "partizipVergangenheit": {
      "de": "gesplissen",
      "lv": "Spojen"
    }
  },
  {
    "infinitiv": {
      "de": "sprechen",
      "lv": "Govoriti"
    },
    "praesens": {
      "de": "er spricht",
      "lv": "On govori"
    },
    "imperfektIndikativ": {
      "de": "er sprach",
      "lv": "Govorio je"
    },
    "imperfektKonjunktiv": {
      "de": "er spräche",
      "lv": "On bi govorio"
    },
    "partizipVergangenheit": {
      "de": "gesprochen",
      "lv": "Govoren"
    }
  },
  {
    "infinitiv": {
      "de": "sprießen",
      "lv": "Nicati"
    },
    "praesens": {
      "de": "er sprießt",
      "lv": "On niče"
    },
    "imperfektIndikativ": {
      "de": "er spross",
      "lv": "Niknuo je"
    },
    "imperfektKonjunktiv": {
      "de": "er sprösse",
      "lv": "On bi niknuo"
    },
    "partizipVergangenheit": {
      "de": "gesprossen (er ist)",
      "lv": "Izniknuo"
    }
  },
  {
    "infinitiv": {
      "de": "springen",
      "lv": "Skočiti"
    },
    "praesens": {
      "de": "er springt",
      "lv": "On skače"
    },
    "imperfektIndikativ": {
      "de": "er sprang",
      "lv": "Skočio je"
    },
    "imperfektKonjunktiv": {
      "de": "er spränge",
      "lv": "On bi skočio"
    },
    "partizipVergangenheit": {
      "de": "gesprungen (er ist)",
      "lv": "Skočio"
    }
  },
  {
    "infinitiv": {
      "de": "stechen",
      "lv": "Ubosti"
    },
    "praesens": {
      "de": "er sticht",
      "lv": "On bode"
    },
    "imperfektIndikativ": {
      "de": "er stach",
      "lv": "Ubo je"
    },
    "imperfektKonjunktiv": {
      "de": "er stäche",
      "lv": "On bi ubo"
    },
    "partizipVergangenheit": {
      "de": "gestochen",
      "lv": "Uboden"
    }
  },
  {
    "infinitiv": {
      "de": "stecken",
      "lv": "Umetati / umetnuti"
    },
    "praesens": {
      "de": "er steckt",
      "lv": "On umeće"
    },
    "imperfektIndikativ": {
      "de": "stak vai steckte",
      "lv": "Umetnuo je ili je umećao"
    },
    "imperfektKonjunktiv": {
      "de": "stak vai steckte",
      "lv": "On bi umetnuo"
    },
    "partizipVergangenheit": {
      "de": "gesteckt",
      "lv": "Umetnut"
    }
  },
  {
    "infinitiv": {
      "de": "stehen",
      "lv": "Stajati"
    },
    "praesens": {
      "de": "er steht",
      "lv": "On stoji"
    },
    "imperfektIndikativ": {
      "de": "er stand",
      "lv": "Stajao je"
    },
    "imperfektKonjunktiv": {
      "de": "er stände / er stünde",
      "lv": "On bi stajao"
    },
    "partizipVergangenheit": {
      "de": "gestanden",
      "lv": "Stajao"
    }
  },
  {
    "infinitiv": {
      "de": "stehlen",
      "lv": "Ukrasti"
    },
    "praesens": {
      "de": "er stiehlt",
      "lv": "On krade"
    },
    "imperfektIndikativ": {
      "de": "er stahl",
      "lv": "Ukrao je"
    },
    "imperfektKonjunktiv": {
      "de": "er stöhle / er stähle",
      "lv": "On bi krao / on bi krao"
    },
    "partizipVergangenheit": {
      "de": "gestohlen",
      "lv": "Ukraden"
    }
  },
  {
    "infinitiv": {
      "de": "steigen",
      "lv": "Penjati se"
    },
    "praesens": {
      "de": "er steigt",
      "lv": "On se penje"
    },
    "imperfektIndikativ": {
      "de": "er stieg",
      "lv": "Popeo se"
    },
    "imperfektKonjunktiv": {
      "de": "er stiege",
      "lv": "On bi se popeo"
    },
    "partizipVergangenheit": {
      "de": "gestiegen (er ist)",
      "lv": "Popeo se"
    }
  },
  {
    "infinitiv": {
      "de": "sterben",
      "lv": "Umrijeti"
    },
    "praesens": {
      "de": "er stirbt",
      "lv": "On umire"
    },
    "imperfektIndikativ": {
      "de": "er starb",
      "lv": "Umro je"
    },
    "imperfektKonjunktiv": {
      "de": "er stürbe",
      "lv": "On bi umro"
    },
    "partizipVergangenheit": {
      "de": "gestorben (er ist)",
      "lv": "Umro"
    }
  },
  {
    "infinitiv": {
      "de": "stieben",
      "lv": "Prštati / kovitlati se"
    },
    "praesens": {
      "de": "es stiebt",
      "lv": "Ono pršti"
    },
    "imperfektIndikativ": {
      "de": "stob vai stiebte",
      "lv": "Prštalo je ili se kovitlalo"
    },
    "imperfektKonjunktiv": {
      "de": "stob vai stiebte",
      "lv": "Prštalo bi / kovitlalo bi se"
    },
    "partizipVergangenheit": {
      "de": "gestoben vai gestiebt",
      "lv": "Prhnulo ili prštilo"
    }
  },
  {
    "infinitiv": {
      "de": "stinken",
      "lv": "Smrdjeti"
    },
    "praesens": {
      "de": "es stinkt",
      "lv": "Ono smrdi"
    },
    "imperfektIndikativ": {
      "de": "stank",
      "lv": "Smrdjelo je"
    },
    "imperfektKonjunktiv": {
      "de": "stank",
      "lv": "Smrdjelo bi"
    },
    "partizipVergangenheit": {
      "de": "gestunken",
      "lv": "Smrdio"
    }
  },
  {
    "infinitiv": {
      "de": "stoßen",
      "lv": "Gurati"
    },
    "praesens": {
      "de": "er stößt",
      "lv": "On gura"
    },
    "imperfektIndikativ": {
      "de": "er stieß",
      "lv": "Gurao je"
    },
    "imperfektKonjunktiv": {
      "de": "er stieße",
      "lv": "On bi gurao"
    },
    "partizipVergangenheit": {
      "de": "gestoßen",
      "lv": "Guran"
    }
  },
  {
    "infinitiv": {
      "de": "streichen",
      "lv": "Bojiti / šarati"
    },
    "praesens": {
      "de": "er streicht",
      "lv": "On boji / šara"
    },
    "imperfektIndikativ": {
      "de": "er strich",
      "lv": "Farbao je / pravio pruge"
    },
    "imperfektKonjunktiv": {
      "de": "er striche",
      "lv": "Farbao bi / pravio bi pruge"
    },
    "partizipVergangenheit": {
      "de": "gestrichen",
      "lv": "Ofarban / isprugan"
    }
  },
  {
    "infinitiv": {
      "de": "streiten",
      "lv": "Svađati se"
    },
    "praesens": {
      "de": "er streitet",
      "lv": "On se svađa"
    },
    "imperfektIndikativ": {
      "de": "er stritt",
      "lv": "Svađao se"
    },
    "imperfektKonjunktiv": {
      "de": "er stritte",
      "lv": "On bi se svađao"
    },
    "partizipVergangenheit": {
      "de": "gestritten",
      "lv": "Svađao se"
    }
  },
  {
    "infinitiv": {
      "de": "tragen",
      "lv": "Nositi"
    },
    "praesens": {
      "de": "er trägt",
      "lv": "On nosi"
    },
    "imperfektIndikativ": {
      "de": "er trug",
      "lv": "Nosio je"
    },
    "imperfektKonjunktiv": {
      "de": "er trüge",
      "lv": "On bi nosio"
    },
    "partizipVergangenheit": {
      "de": "getragen",
      "lv": "Nošen"
    }
  },
  {
    "infinitiv": {
      "de": "treffen",
      "lv": "Susresti"
    },
    "praesens": {
      "de": "er trifft",
      "lv": "On susreće"
    },
    "imperfektIndikativ": {
      "de": "er traf",
      "lv": "Susreo je"
    },
    "imperfektKonjunktiv": {
      "de": "er träfe",
      "lv": "Susreo bi"
    },
    "partizipVergangenheit": {
      "de": "getroffen",
      "lv": "Susretnut"
    }
  },
  {
    "infinitiv": {
      "de": "treiben",
      "lv": "Tjerati"
    },
    "praesens": {
      "de": "er treibt",
      "lv": "On tjera"
    },
    "imperfektIndikativ": {
      "de": "er trieb",
      "lv": "Tjerao je"
    },
    "imperfektKonjunktiv": {
      "de": "er triebe",
      "lv": "On bi tjerao"
    },
    "partizipVergangenheit": {
      "de": "getrieben",
      "lv": "Tjeran"
    }
  },
  {
    "infinitiv": {
      "de": "treten",
      "lv": "Stupiti / ići"
    },
    "praesens": {
      "de": "er tritt",
      "lv": "On stupa / ide"
    },
    "imperfektIndikativ": {
      "de": "er trat",
      "lv": "Stupio je / išao je"
    },
    "imperfektKonjunktiv": {
      "de": "er träte",
      "lv": "On bi stupio / išao bi"
    },
    "partizipVergangenheit": {
      "de": "getreten (er ist)",
      "lv": "Stupio / išao"
    }
  },
  {
    "infinitiv": {
      "de": "trinken",
      "lv": "Piti"
    },
    "praesens": {
      "de": "er trinkt",
      "lv": "On pije"
    },
    "imperfektIndikativ": {
      "de": "er trank",
      "lv": "Pio je"
    },
    "imperfektKonjunktiv": {
      "de": "er tränke",
      "lv": "On bi pio"
    },
    "partizipVergangenheit": {
      "de": "getrunken",
      "lv": "Pio"
    }
  },
  {
    "infinitiv": {
      "de": "trügen",
      "lv": "Varati"
    },
    "praesens": {
      "de": "er trögt",
      "lv": "On vara"
    },
    "imperfektIndikativ": {
      "de": "er trog",
      "lv": "Varao je"
    },
    "imperfektKonjunktiv": {
      "de": "er tröge",
      "lv": "On bi varao"
    },
    "partizipVergangenheit": {
      "de": "getrogen",
      "lv": "Prevaren"
    }
  },
  {
    "infinitiv": {
      "de": "tun",
      "lv": "Činiti"
    },
    "praesens": {
      "de": "er tut",
      "lv": "On čini"
    },
    "imperfektIndikativ": {
      "de": "er tat",
      "lv": "Činio je"
    },
    "imperfektKonjunktiv": {
      "de": "er täte",
      "lv": "On bi činio"
    },
    "partizipVergangenheit": {
      "de": "getan",
      "lv": "Učinjen"
    }
  },
  {
    "infinitiv": {
      "de": "verderben",
      "lv": "Pokvariti"
    },
    "praesens": {
      "de": "er verdirbt",
      "lv": "On kvari"
    },
    "imperfektIndikativ": {
      "de": "er verdarb",
      "lv": "Pokvario je"
    },
    "imperfektKonjunktiv": {
      "de": "er verdürbe",
      "lv": "On bi pokvario"
    },
    "partizipVergangenheit": {
      "de": "verdorben",
      "lv": "Pokvaren"
    }
  },
  {
    "infinitiv": {
      "de": "verdrießen",
      "lv": "Nervirati"
    },
    "praesens": {
      "de": "er verdrießt",
      "lv": "On nervira"
    },
    "imperfektIndikativ": {
      "de": "er verdross",
      "lv": "Nervirao je"
    },
    "imperfektKonjunktiv": {
      "de": "er verdrösse",
      "lv": "On bi nervirao"
    },
    "partizipVergangenheit": {
      "de": "verdrossen",
      "lv": "Nerviran"
    }
  },
  {
    "infinitiv": {
      "de": "vergessen",
      "lv": "Zaboraviti"
    },
    "praesens": {
      "de": "er vergisst",
      "lv": "On zaboravlja"
    },
    "imperfektIndikativ": {
      "de": "er vergass",
      "lv": "Zaboravio je"
    },
    "imperfektKonjunktiv": {
      "de": "er vergäße",
      "lv": "On bi zaboravio"
    },
    "partizipVergangenheit": {
      "de": "vergessen",
      "lv": "Zaboravljen"
    }
  },
  {
    "infinitiv": {
      "de": "verlieren",
      "lv": "Izgubiti"
    },
    "praesens": {
      "de": "er verliert",
      "lv": "On gubi"
    },
    "imperfektIndikativ": {
      "de": "er verlor",
      "lv": "Izgubio je"
    },
    "imperfektKonjunktiv": {
      "de": "er verlöre",
      "lv": "On bi izgubio"
    },
    "partizipVergangenheit": {
      "de": "verloren",
      "lv": "Izgubljen"
    }
  },
  {
    "infinitiv": {
      "de": "wachsen",
      "lv": "Rasti"
    },
    "praesens": {
      "de": "er wächst",
      "lv": "On raste"
    },
    "imperfektIndikativ": {
      "de": "er wuchs",
      "lv": "Rastao je"
    },
    "imperfektKonjunktiv": {
      "de": "er wüchse",
      "lv": "On bi rastao"
    },
    "partizipVergangenheit": {
      "de": "gewachsen (er ist)",
      "lv": "Narastao"
    }
  },
  {
    "infinitiv": {
      "de": "waschen",
      "lv": "Prati"
    },
    "praesens": {
      "de": "er wäscht",
      "lv": "On pere"
    },
    "imperfektIndikativ": {
      "de": "er wusch",
      "lv": "Prao je"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsche",
      "lv": "On bi prao"
    },
    "partizipVergangenheit": {
      "de": "gewaschen",
      "lv": "Opran"
    }
  },
  {
    "infinitiv": {
      "de": "weben",
      "lv": "Tkati"
    },
    "praesens": {
      "de": "er webt",
      "lv": "On tka"
    },
    "imperfektIndikativ": {
      "de": "wob",
      "lv": "Tkao je"
    },
    "imperfektKonjunktiv": {
      "de": "wob",
      "lv": "On bi tkao"
    },
    "partizipVergangenheit": {
      "de": "gewoben",
      "lv": "Istkan"
    }
  },
  {
    "infinitiv": {
      "de": "weichen",
      "lv": "Povlačiti se"
    },
    "praesens": {
      "de": "er weicht",
      "lv": "On se povlači"
    },
    "imperfektIndikativ": {
      "de": "er wich",
      "lv": "Povukao se"
    },
    "imperfektKonjunktiv": {
      "de": "er wiche",
      "lv": "On bi se povukao"
    },
    "partizipVergangenheit": {
      "de": "gewichen (er ist)",
      "lv": "Povukao se"
    }
  },
  {
    "infinitiv": {
      "de": "weisen",
      "lv": "Pokazivati"
    },
    "praesens": {
      "de": "er weist",
      "lv": "On pokazuje"
    },
    "imperfektIndikativ": {
      "de": "er wies",
      "lv": "Pokazao je"
    },
    "imperfektKonjunktiv": {
      "de": "er wiese",
      "lv": "On bi pokazao"
    },
    "partizipVergangenheit": {
      "de": "gewiesen",
      "lv": "Pokazan"
    }
  },
  {
    "infinitiv": {
      "de": "wenden",
      "lv": "Okretati / okrenuti"
    },
    "praesens": {
      "de": "er wendet",
      "lv": "On okreće / preokreće"
    },
    "imperfektIndikativ": {
      "de": "er wandte / es wendete",
      "lv": "Okretao je / okrenuo je"
    },
    "imperfektKonjunktiv": {
      "de": "er wendete",
      "lv": "On bi okretao / on bi okrenuo"
    },
    "partizipVergangenheit": {
      "de": "gewandt / gewendet",
      "lv": "Okrenut / okrenut"
    }
  },
  {
    "infinitiv": {
      "de": "werben",
      "lv": "Udvarati se"
    },
    "praesens": {
      "de": "er wirbt",
      "lv": "On se udvara"
    },
    "imperfektIndikativ": {
      "de": "er warb",
      "lv": "Udvarao se"
    },
    "imperfektKonjunktiv": {
      "de": "er würbe",
      "lv": "On bi se udvarao"
    },
    "partizipVergangenheit": {
      "de": "geworben",
      "lv": "Udvaran"
    }
  },
  {
    "infinitiv": {
      "de": "werden",
      "lv": "Postati"
    },
    "praesens": {
      "de": "er wird",
      "lv": "On postaje"
    },
    "imperfektIndikativ": {
      "de": "wurde",
      "lv": "Postao je"
    },
    "imperfektKonjunktiv": {
      "de": "wurde",
      "lv": "On bi postao"
    },
    "partizipVergangenheit": {
      "de": "geworden",
      "lv": "Postao"
    }
  },
  {
    "infinitiv": {
      "de": "werfen",
      "lv": "Bacati"
    },
    "praesens": {
      "de": "er wirft",
      "lv": "On baca"
    },
    "imperfektIndikativ": {
      "de": "er warf",
      "lv": "Bacao je"
    },
    "imperfektKonjunktiv": {
      "de": "er würfe",
      "lv": "On bi bacao"
    },
    "partizipVergangenheit": {
      "de": "geworfen",
      "lv": "Bačen"
    }
  },
  {
    "infinitiv": {
      "de": "wiegen",
      "lv": "Vagati"
    },
    "praesens": {
      "de": "er wiegt",
      "lv": "On vaga"
    },
    "imperfektIndikativ": {
      "de": "er wog",
      "lv": "Vagao je"
    },
    "imperfektKonjunktiv": {
      "de": "er wöge",
      "lv": "On bi vagao"
    },
    "partizipVergangenheit": {
      "de": "gewogen",
      "lv": "Izvagan"
    }
  },
  {
    "infinitiv": {
      "de": "winden",
      "lv": "Viti"
    },
    "praesens": {
      "de": "er windet",
      "lv": "On vije"
    },
    "imperfektIndikativ": {
      "de": "er wand",
      "lv": "On je vio"
    },
    "imperfektKonjunktiv": {
      "de": "er wände",
      "lv": "On bi vio"
    },
    "partizipVergangenheit": {
      "de": "gewunden",
      "lv": "Vijen"
    }
  },
  {
    "infinitiv": {
      "de": "wissen",
      "lv": "Znati"
    },
    "praesens": {
      "de": "er weiß",
      "lv": "On zna"
    },
    "imperfektIndikativ": {
      "de": "er wusste",
      "lv": "On je znao"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsste",
      "lv": "On bi znao"
    },
    "partizipVergangenheit": {
      "de": "gewusst",
      "lv": "Znao"
    }
  },
  {
    "infinitiv": {
      "de": "wollen",
      "lv": "Htjeti"
    },
    "praesens": {
      "de": "er will",
      "lv": "On hoće"
    },
    "imperfektIndikativ": {
      "de": "wollte",
      "lv": "Htio je"
    },
    "imperfektKonjunktiv": {
      "de": "wollte",
      "lv": "On bi htio"
    },
    "partizipVergangenheit": {
      "de": "gewollt",
      "lv": "Htio"
    }
  },
  {
    "infinitiv": {
      "de": "wringen",
      "lv": "Cijediti / iscijediti"
    },
    "praesens": {
      "de": "er wringt",
      "lv": "On cijedi"
    },
    "imperfektIndikativ": {
      "de": "wrang",
      "lv": "Cijedio je"
    },
    "imperfektKonjunktiv": {
      "de": "wrang",
      "lv": "On bi iscijedio"
    },
    "partizipVergangenheit": {
      "de": "gewrungen",
      "lv": "Cijeđen"
    }
  },
  {
    "infinitiv": {
      "de": "zeihen",
      "lv": "Optužiti"
    },
    "praesens": {
      "de": "er zeiht",
      "lv": "On optužuje"
    },
    "imperfektIndikativ": {
      "de": "zieh",
      "lv": "Optužio je"
    },
    "imperfektKonjunktiv": {
      "de": "zieh",
      "lv": "On bi optužio"
    },
    "partizipVergangenheit": {
      "de": "geziehen",
      "lv": "Optužen"
    }
  },
  {
    "infinitiv": {
      "de": "ziehen",
      "lv": "Vući"
    },
    "praesens": {
      "de": "er zieht",
      "lv": "On vuče"
    },
    "imperfektIndikativ": {
      "de": "er zog",
      "lv": "On je vukao"
    },
    "imperfektKonjunktiv": {
      "de": "er zöge",
      "lv": "On bi vukao"
    },
    "partizipVergangenheit": {
      "de": "gezogen",
      "lv": "Vučen"
    }
  },
  {
    "infinitiv": {
      "de": "zwingen",
      "lv": "Prisiliti"
    },
    "praesens": {
      "de": "er zwingt",
      "lv": "On prisiljava"
    },
    "imperfektIndikativ": {
      "de": "er zwang",
      "lv": "On je prisilio"
    },
    "imperfektKonjunktiv": {
      "de": "er zwänge",
      "lv": "On bi prisilio"
    },
    "partizipVergangenheit": {
      "de": "gezwungen",
      "lv": "Prisiljen"
    }
  },
  {
    "infinitiv": {
      "de": "empfangen",
      "lv": "Primiti"
    },
    "praesens": {
      "de": "er empfängt",
      "lv": "On prima"
    },
    "imperfektIndikativ": {
      "de": "er empfing",
      "lv": "On je primio"
    },
    "imperfektKonjunktiv": {
      "de": "er empfinge",
      "lv": "On bi primio"
    },
    "partizipVergangenheit": {
      "de": "empfangen",
      "lv": "Primljen"
    }
  },
  {
    "infinitiv": {
      "de": "erwägen",
      "lv": "Razmotriti"
    },
    "praesens": {
      "de": "er erwägt",
      "lv": "On razmatra"
    },
    "imperfektIndikativ": {
      "de": "er erwog",
      "lv": "On je razmotrio"
    },
    "imperfektKonjunktiv": {
      "de": "er erwöge",
      "lv": "On bi razmotrio"
    },
    "partizipVergangenheit": {
      "de": "erwogen",
      "lv": "Razmotren"
    }
  },
  {
    "infinitiv": {
      "de": "fechten",
      "lv": "Boriti se"
    },
    "praesens": {
      "de": "er ficht",
      "lv": "On se bori"
    },
    "imperfektIndikativ": {
      "de": "er focht",
      "lv": "Borio se"
    },
    "imperfektKonjunktiv": {
      "de": "er föchte",
      "lv": "On bi se borio"
    },
    "partizipVergangenheit": {
      "de": "gefochten",
      "lv": "Borio se"
    }
  },
  {
    "infinitiv": {
      "de": "flechten",
      "lv": "Plesti"
    },
    "praesens": {
      "de": "er flicht",
      "lv": "On plete"
    },
    "imperfektIndikativ": {
      "de": "er flocht",
      "lv": "On je pleo"
    },
    "imperfektKonjunktiv": {
      "de": "er flöchte",
      "lv": "On bi pleo"
    },
    "partizipVergangenheit": {
      "de": "geflochten",
      "lv": "Pleten"
    }
  },
  {
    "infinitiv": {
      "de": "hangen",
      "lv": "Visiti"
    },
    "praesens": {
      "de": "er hängt",
      "lv": "On visi"
    },
    "imperfektIndikativ": {
      "de": "er hing",
      "lv": "On je visio"
    },
    "imperfektKonjunktiv": {
      "de": "er hinge",
      "lv": "On bi visio"
    },
    "partizipVergangenheit": {
      "de": "gehangen",
      "lv": "Visio"
    }
  },
  {
    "infinitiv": {
      "de": "spalten",
      "lv": "Cijepati"
    },
    "praesens": {
      "de": "er spaltet",
      "lv": "On cijepa"
    },
    "imperfektIndikativ": {
      "de": "er spaltete",
      "lv": "Cijepao je"
    },
    "imperfektKonjunktiv": {
      "de": "er spaltete",
      "lv": "On bi cijepao"
    },
    "partizipVergangenheit": {
      "de": "gespalten",
      "lv": "Pocijepan"
    }
  },
  {
    "infinitiv": {
      "de": "verzeihen",
      "lv": "Oprostiti"
    },
    "praesens": {
      "de": "er verzeiht",
      "lv": "On oprašta"
    },
    "imperfektIndikativ": {
      "de": "er verzieh",
      "lv": "Oprostio je"
    },
    "imperfektKonjunktiv": {
      "de": "er verziehe",
      "lv": "On bi oprostio"
    },
    "partizipVergangenheit": {
      "de": "verziehen",
      "lv": "Oprošten"
    }
  }
];

window.VERB_ENTRIES = VERB_ENTRIES;

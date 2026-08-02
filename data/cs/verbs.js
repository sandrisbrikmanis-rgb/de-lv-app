const VERB_ENTRIES = [
  {
    "infinitiv": {
      "de": "backen",
      "lv": "Upéct"
    },
    "praesens": {
      "de": "er bäckt",
      "lv": "On peče"
    },
    "imperfektIndikativ": {
      "de": "er buk",
      "lv": "Pekl"
    },
    "imperfektKonjunktiv": {
      "de": "er büke",
      "lv": "Upekl by"
    },
    "partizipVergangenheit": {
      "de": "gebacken",
      "lv": "Smažené / pečené"
    }
  },
  {
    "infinitiv": {
      "de": "befehlen",
      "lv": "Poroučet"
    },
    "praesens": {
      "de": "er befiehlt",
      "lv": "Přikazuje"
    },
    "imperfektIndikativ": {
      "de": "er befahl",
      "lv": "Přikázal"
    },
    "imperfektKonjunktiv": {
      "de": "er beföhle",
      "lv": "Rozkázal by"
    },
    "partizipVergangenheit": {
      "de": "befohlen",
      "lv": "Přikázal"
    }
  },
  {
    "infinitiv": {
      "de": "beginnen",
      "lv": "Začít"
    },
    "praesens": {
      "de": "er beginnt",
      "lv": "On začíná"
    },
    "imperfektIndikativ": {
      "de": "er begann",
      "lv": "Začal"
    },
    "imperfektKonjunktiv": {
      "de": "er begönne / er begänne",
      "lv": "Začal by"
    },
    "partizipVergangenheit": {
      "de": "begonnen",
      "lv": "Začala"
    }
  },
  {
    "infinitiv": {
      "de": "beißen",
      "lv": "Skus"
    },
    "praesens": {
      "de": "er beißt",
      "lv": "Kouše"
    },
    "imperfektIndikativ": {
      "de": "er biss",
      "lv": "Zakódoval"
    },
    "imperfektKonjunktiv": {
      "de": "er bisse",
      "lv": "Kouše"
    },
    "partizipVergangenheit": {
      "de": "gebissen",
      "lv": "Pokousaný / pokousaný"
    }
  },
  {
    "infinitiv": {
      "de": "bergen",
      "lv": "Skrýt"
    },
    "praesens": {
      "de": "er birgt",
      "lv": "Schovává se"
    },
    "imperfektIndikativ": {
      "de": "er barg",
      "lv": "Schoval se"
    },
    "imperfektKonjunktiv": {
      "de": "er bürge / er bärge",
      "lv": "Schoval by se"
    },
    "partizipVergangenheit": {
      "de": "geborgen",
      "lv": "Skryté / uložené"
    }
  },
  {
    "infinitiv": {
      "de": "bersten",
      "lv": "Prasknutí"
    },
    "praesens": {
      "de": "er birst",
      "lv": "Praskne"
    },
    "imperfektIndikativ": {
      "de": "er barst / er borst",
      "lv": "Vybuchl"
    },
    "imperfektKonjunktiv": {
      "de": "er bärste / er börste",
      "lv": "Praskne"
    },
    "partizipVergangenheit": {
      "de": "geborsten (er ist)",
      "lv": "Zlomený"
    }
  },
  {
    "infinitiv": {
      "de": "bewegen",
      "lv": "Povzbudit"
    },
    "praesens": {
      "de": "er bewegt",
      "lv": "Nabádá"
    },
    "imperfektIndikativ": {
      "de": "er bewog",
      "lv": "Naléhal"
    },
    "imperfektKonjunktiv": {
      "de": "er bewöge",
      "lv": "Povzbudil by"
    },
    "partizipVergangenheit": {
      "de": "bewogen",
      "lv": "Povzbuzen"
    }
  },
  {
    "infinitiv": {
      "de": "biegen",
      "lv": "Ohyb"
    },
    "praesens": {
      "de": "er biegt",
      "lv": "Ukloní se"
    },
    "imperfektIndikativ": {
      "de": "er bog",
      "lv": "Prohnul se"
    },
    "imperfektKonjunktiv": {
      "de": "er böge",
      "lv": "Ohnul by se"
    },
    "partizipVergangenheit": {
      "de": "gebogen",
      "lv": "Ohnutý"
    }
  },
  {
    "infinitiv": {
      "de": "bieten",
      "lv": "Slíbit"
    },
    "praesens": {
      "de": "er bietet",
      "lv": "Slibuje"
    },
    "imperfektIndikativ": {
      "de": "er bot",
      "lv": "Slíbil"
    },
    "imperfektKonjunktiv": {
      "de": "er böte",
      "lv": "Slíbil by"
    },
    "partizipVergangenheit": {
      "de": "geboten",
      "lv": "Slíbil / nabídl"
    }
  },
  {
    "infinitiv": {
      "de": "binden",
      "lv": "Síto"
    },
    "praesens": {
      "de": "er bindet",
      "lv": "On seno"
    },
    "imperfektIndikativ": {
      "de": "er band",
      "lv": "Zaséval"
    },
    "imperfektKonjunktiv": {
      "de": "er bände",
      "lv": "Proséval"
    },
    "partizipVergangenheit": {
      "de": "gebunden",
      "lv": "Síto"
    }
  },
  {
    "infinitiv": {
      "de": "bitten",
      "lv": "Zeptat se"
    },
    "praesens": {
      "de": "er bittet",
      "lv": "Prosí"
    },
    "imperfektIndikativ": {
      "de": "er bat",
      "lv": "Zeptal se"
    },
    "imperfektKonjunktiv": {
      "de": "er bäte",
      "lv": "Modlil by se"
    },
    "partizipVergangenheit": {
      "de": "gebeten",
      "lv": "Vyžádáno"
    }
  },
  {
    "infinitiv": {
      "de": "blasen",
      "lv": "Foukat"
    },
    "praesens": {
      "de": "er bläst",
      "lv": "Fouká"
    },
    "imperfektIndikativ": {
      "de": "er blies",
      "lv": "Zafoukal"
    },
    "imperfektKonjunktiv": {
      "de": "er bliese",
      "lv": "Foukal by"
    },
    "partizipVergangenheit": {
      "de": "geblasen",
      "lv": "Foukané"
    }
  },
  {
    "infinitiv": {
      "de": "gären",
      "lv": "Kvasit"
    },
    "praesens": {
      "de": "es gärt",
      "lv": "Fermentuje to"
    },
    "imperfektIndikativ": {
      "de": "es gor / es gärte",
      "lv": "Fermentuje to"
    },
    "imperfektKonjunktiv": {
      "de": "es göre / es gärte",
      "lv": "Bylo by to hořké"
    },
    "partizipVergangenheit": {
      "de": "gegoren / gegärt",
      "lv": "Žito"
    }
  },
  {
    "infinitiv": {
      "de": "gebären",
      "lv": "Porodit"
    },
    "praesens": {
      "de": "sie gebiert",
      "lv": "V jejím lůně"
    },
    "imperfektIndikativ": {
      "de": "sie gebar",
      "lv": "Porodila"
    },
    "imperfektKonjunktiv": {
      "de": "sie gebäre",
      "lv": "Porodila by"
    },
    "partizipVergangenheit": {
      "de": "geboren",
      "lv": "Narodil se / narodil se"
    }
  },
  {
    "infinitiv": {
      "de": "gelingen",
      "lv": "Uspět"
    },
    "praesens": {
      "de": "es gelingt",
      "lv": "Podaří se to"
    },
    "imperfektIndikativ": {
      "de": "es gelang",
      "lv": "Fungovalo to"
    },
    "imperfektKonjunktiv": {
      "de": "es gelänge",
      "lv": "Šlo by to"
    },
    "partizipVergangenheit": {
      "de": "gelungen (es ist)",
      "lv": "Podařilo"
    }
  },
  {
    "infinitiv": {
      "de": "gelten",
      "lv": "Přijít vhod"
    },
    "praesens": {
      "de": "er gilt",
      "lv": "Hodí se / je platný"
    },
    "imperfektIndikativ": {
      "de": "er galt",
      "lv": "Hodil / byl fit"
    },
    "imperfektKonjunktiv": {
      "de": "er gölte / es gälte",
      "lv": "Hodilo by se / hodilo by se"
    },
    "partizipVergangenheit": {
      "de": "gegolten",
      "lv": "Použito / bylo platné"
    }
  },
  {
    "infinitiv": {
      "de": "genesen",
      "lv": "Uzdravit se"
    },
    "praesens": {
      "de": "er genest",
      "lv": "Uzdravuje se"
    },
    "imperfektIndikativ": {
      "de": "er genas",
      "lv": "Uzdravil se"
    },
    "imperfektKonjunktiv": {
      "de": "er genäse",
      "lv": "Uzdravil by se"
    },
    "partizipVergangenheit": {
      "de": "genesen (er ist)",
      "lv": "Uzdrav se"
    }
  },
  {
    "infinitiv": {
      "de": "genießen",
      "lv": "Užívat si"
    },
    "praesens": {
      "de": "er genießt",
      "lv": "Užívá si"
    },
    "imperfektIndikativ": {
      "de": "er genoss",
      "lv": "Užíval si"
    },
    "imperfektKonjunktiv": {
      "de": "er genösse",
      "lv": "Užil by si"
    },
    "partizipVergangenheit": {
      "de": "genossen",
      "lv": "Užil si"
    }
  },
  {
    "infinitiv": {
      "de": "geschehen",
      "lv": "Stát se"
    },
    "praesens": {
      "de": "es geschieht",
      "lv": "Stane se to"
    },
    "imperfektIndikativ": {
      "de": "es geschah",
      "lv": "Stalo se to"
    },
    "imperfektKonjunktiv": {
      "de": "es geschähe",
      "lv": "Stalo by se to"
    },
    "partizipVergangenheit": {
      "de": "geschehen (es ist)",
      "lv": "Stalo"
    }
  },
  {
    "infinitiv": {
      "de": "gießen",
      "lv": "Poručík"
    },
    "praesens": {
      "de": "er gießt",
      "lv": "Nalévá"
    },
    "imperfektIndikativ": {
      "de": "er goss",
      "lv": "Nalil"
    },
    "imperfektKonjunktiv": {
      "de": "er gösse",
      "lv": "Prší"
    },
    "partizipVergangenheit": {
      "de": "gegossen",
      "lv": "Věc"
    }
  },
  {
    "infinitiv": {
      "de": "gleichen",
      "lv": "Podobat se"
    },
    "praesens": {
      "de": "er gleicht",
      "lv": "Podobá se"
    },
    "imperfektIndikativ": {
      "de": "er glich",
      "lv": "Napodoboval"
    },
    "imperfektKonjunktiv": {
      "de": "er gliche",
      "lv": "Napodoboval by"
    },
    "partizipVergangenheit": {
      "de": "geglichen",
      "lv": "Podobal"
    }
  },
  {
    "infinitiv": {
      "de": "gleiten",
      "lv": "Klouzat"
    },
    "praesens": {
      "de": "er gleitet",
      "lv": "Klouže"
    },
    "imperfektIndikativ": {
      "de": "er glitt",
      "lv": "Klouzal"
    },
    "imperfektKonjunktiv": {
      "de": "er glitte",
      "lv": "Klouzal by"
    },
    "partizipVergangenheit": {
      "de": "geglitten (er ist)",
      "lv": "Uklouzl"
    }
  },
  {
    "infinitiv": {
      "de": "glimmen",
      "lv": "Řeřavý"
    },
    "praesens": {
      "de": "er glimmt",
      "lv": "Září"
    },
    "imperfektIndikativ": {
      "de": "er glimmte / glomm",
      "lv": "Zářil"
    },
    "imperfektKonjunktiv": {
      "de": "er glimmte",
      "lv": "Zářil by"
    },
    "partizipVergangenheit": {
      "de": "geglimmt / geglommen",
      "lv": "Řeřavý"
    }
  },
  {
    "infinitiv": {
      "de": "graben",
      "lv": "Kopat"
    },
    "praesens": {
      "de": "er gräbt",
      "lv": "On kope"
    },
    "imperfektIndikativ": {
      "de": "er grub",
      "lv": "Kopal"
    },
    "imperfektKonjunktiv": {
      "de": "er grübe",
      "lv": "Kopal by"
    },
    "partizipVergangenheit": {
      "de": "gegraben",
      "lv": "Kopat"
    }
  },
  {
    "infinitiv": {
      "de": "greifen",
      "lv": "Chytit"
    },
    "praesens": {
      "de": "er greift",
      "lv": "Chytá"
    },
    "imperfektIndikativ": {
      "de": "er griff",
      "lv": "Chytil"
    },
    "imperfektKonjunktiv": {
      "de": "er griffe",
      "lv": "Chytil by se"
    },
    "partizipVergangenheit": {
      "de": "gegriffen",
      "lv": "Chytil / chytil"
    }
  },
  {
    "infinitiv": {
      "de": "hauen",
      "lv": "Řezat"
    },
    "praesens": {
      "de": "er haut",
      "lv": "Vybral"
    },
    "imperfektIndikativ": {
      "de": "er hieb",
      "lv": "Vyštěkl"
    },
    "imperfektKonjunktiv": {
      "de": "er hiebe",
      "lv": "Vyřezal by"
    },
    "partizipVergangenheit": {
      "de": "gehauen",
      "lv": "Vyřezávané"
    }
  },
  {
    "infinitiv": {
      "de": "heben",
      "lv": "Zvýšit"
    },
    "praesens": {
      "de": "er hebt",
      "lv": "Zvedá"
    },
    "imperfektIndikativ": {
      "de": "er hob",
      "lv": "Přinesl"
    },
    "imperfektKonjunktiv": {
      "de": "er höbe",
      "lv": "Postavil by"
    },
    "partizipVergangenheit": {
      "de": "gehoben",
      "lv": "Postavený"
    }
  },
  {
    "infinitiv": {
      "de": "kennen",
      "lv": "Vědět / vědět"
    },
    "praesens": {
      "de": "er kennt",
      "lv": "Ví"
    },
    "imperfektIndikativ": {
      "de": "kannte",
      "lv": "Věděl"
    },
    "imperfektKonjunktiv": {
      "de": "kannte",
      "lv": "Věděl"
    },
    "partizipVergangenheit": {
      "de": "gekannt",
      "lv": "Známost"
    }
  },
  {
    "infinitiv": {
      "de": "klingen",
      "lv": "Zaznít"
    },
    "praesens": {
      "de": "er klingt",
      "lv": "Zní"
    },
    "imperfektIndikativ": {
      "de": "er klang",
      "lv": "Ozval se"
    },
    "imperfektKonjunktiv": {
      "de": "er klänge",
      "lv": "Ozval by se"
    },
    "partizipVergangenheit": {
      "de": "geklungen",
      "lv": "Zaznělo"
    }
  },
  {
    "infinitiv": {
      "de": "kneifen",
      "lv": "Štípnout"
    },
    "praesens": {
      "de": "er kneift",
      "lv": "Vtipkuje"
    },
    "imperfektIndikativ": {
      "de": "er kniff",
      "lv": "Štípl"
    },
    "imperfektKonjunktiv": {
      "de": "er kniffe",
      "lv": "Štípl by se"
    },
    "partizipVergangenheit": {
      "de": "gekniffen",
      "lv": "Sevřený"
    }
  },
  {
    "infinitiv": {
      "de": "bleiben",
      "lv": "Pobyt"
    },
    "praesens": {
      "de": "er bleibt",
      "lv": "On zůstává"
    },
    "imperfektIndikativ": {
      "de": "er blieb",
      "lv": "Zůstal"
    },
    "imperfektKonjunktiv": {
      "de": "er bliebe",
      "lv": "Zůstal by"
    },
    "partizipVergangenheit": {
      "de": "geblieben (er ist)",
      "lv": "Vlevo"
    }
  },
  {
    "infinitiv": {
      "de": "bleichen",
      "lv": "Vybělit"
    },
    "praesens": {
      "de": "er bleicht",
      "lv": "On bělí"
    },
    "imperfektIndikativ": {
      "de": "blich",
      "lv": "Vybělené"
    },
    "imperfektKonjunktiv": {
      "de": "blich",
      "lv": "Vybělené"
    },
    "partizipVergangenheit": {
      "de": "geblichen",
      "lv": "Vybělené"
    }
  },
  {
    "infinitiv": {
      "de": "braten",
      "lv": "Upéct"
    },
    "praesens": {
      "de": "er brät",
      "lv": "On peče"
    },
    "imperfektIndikativ": {
      "de": "er briet",
      "lv": "Pekl"
    },
    "imperfektKonjunktiv": {
      "de": "er briete",
      "lv": "Upekl by"
    },
    "partizipVergangenheit": {
      "de": "gebraten",
      "lv": "Smažené / pečené"
    }
  },
  {
    "infinitiv": {
      "de": "brechen",
      "lv": "Zlomit se"
    },
    "praesens": {
      "de": "er bricht",
      "lv": "Zlomí se"
    },
    "imperfektIndikativ": {
      "de": "er brach",
      "lv": "Zlomil se"
    },
    "imperfektKonjunktiv": {
      "de": "er bräche",
      "lv": "Zlomil by se"
    },
    "partizipVergangenheit": {
      "de": "gebrochen",
      "lv": "Zlomený / zlomený"
    }
  },
  {
    "infinitiv": {
      "de": "brennen",
      "lv": "Spálit"
    },
    "praesens": {
      "de": "er brennt",
      "lv": "Je v plamenech"
    },
    "imperfektIndikativ": {
      "de": "brannte",
      "lv": "Hořel"
    },
    "imperfektKonjunktiv": {
      "de": "brannte",
      "lv": "Hořel"
    },
    "partizipVergangenheit": {
      "de": "gebrannt",
      "lv": "Spálený"
    }
  },
  {
    "infinitiv": {
      "de": "bringen",
      "lv": "Nést"
    },
    "praesens": {
      "de": "er bringt",
      "lv": "On nese"
    },
    "imperfektIndikativ": {
      "de": "er brachte",
      "lv": "Nesl"
    },
    "imperfektKonjunktiv": {
      "de": "er brächte",
      "lv": "Nesl by"
    },
    "partizipVergangenheit": {
      "de": "gebracht",
      "lv": "Přinesl / přinesl"
    }
  },
  {
    "infinitiv": {
      "de": "denken",
      "lv": "Přemýšlet"
    },
    "praesens": {
      "de": "er denkt",
      "lv": "Myslí si"
    },
    "imperfektIndikativ": {
      "de": "er dachte",
      "lv": "Pomyslel si"
    },
    "imperfektKonjunktiv": {
      "de": "er dächte",
      "lv": "Myslel by si"
    },
    "partizipVergangenheit": {
      "de": "gedacht",
      "lv": "Zamýšlený"
    }
  },
  {
    "infinitiv": {
      "de": "dingen",
      "lv": "Najmout / dohodnout se"
    },
    "praesens": {
      "de": "er dingt",
      "lv": "Najímá"
    },
    "imperfektIndikativ": {
      "de": "dingte",
      "lv": "Najal"
    },
    "imperfektKonjunktiv": {
      "de": "dingte",
      "lv": "Najal"
    },
    "partizipVergangenheit": {
      "de": "gedungen",
      "lv": "Najal"
    }
  },
  {
    "infinitiv": {
      "de": "dreschen",
      "lv": "Kult"
    },
    "praesens": {
      "de": "er drischt",
      "lv": "Mlátí"
    },
    "imperfektIndikativ": {
      "de": "er drasch / er drosch",
      "lv": "Mlátil"
    },
    "imperfektKonjunktiv": {
      "de": "er dräsche / er drösche",
      "lv": "Uctíval by"
    },
    "partizipVergangenheit": {
      "de": "gedroschen",
      "lv": "Kult"
    }
  },
  {
    "infinitiv": {
      "de": "dringen",
      "lv": "Vtrhnout do"
    },
    "praesens": {
      "de": "er dringt",
      "lv": "Vtrhne dovnitř"
    },
    "imperfektIndikativ": {
      "de": "er drang",
      "lv": "Vloupal se dovnitř"
    },
    "imperfektKonjunktiv": {
      "de": "er dränge",
      "lv": "Vloupal by se dovnitř"
    },
    "partizipVergangenheit": {
      "de": "gedrungen (er ist)",
      "lv": "Vnikl do"
    }
  },
  {
    "infinitiv": {
      "de": "dünken",
      "lv": "Zdá se"
    },
    "praesens": {
      "de": "es dünkt",
      "lv": "Zdá se"
    },
    "imperfektIndikativ": {
      "de": "deuchte",
      "lv": "Zdálo se"
    },
    "imperfektKonjunktiv": {
      "de": "deuchte",
      "lv": "Zdálo se"
    },
    "partizipVergangenheit": {
      "de": "gedünkt",
      "lv": "Zdálo se"
    }
  },
  {
    "infinitiv": {
      "de": "dürfen",
      "lv": "Být dovoleno"
    },
    "praesens": {
      "de": "er darf",
      "lv": "Může"
    },
    "imperfektIndikativ": {
      "de": "durfte",
      "lv": "Bylo povoleno"
    },
    "imperfektKonjunktiv": {
      "de": "durfte",
      "lv": "Bylo povoleno"
    },
    "partizipVergangenheit": {
      "de": "gedurft",
      "lv": "Povoleno"
    }
  },
  {
    "infinitiv": {
      "de": "empfehlen",
      "lv": "Doporučit"
    },
    "praesens": {
      "de": "er empfiehlt",
      "lv": "Navrhuje"
    },
    "imperfektIndikativ": {
      "de": "er empfahl",
      "lv": "Navrhl"
    },
    "imperfektKonjunktiv": {
      "de": "er empfähle / er empföhle",
      "lv": "By doporučil"
    },
    "partizipVergangenheit": {
      "de": "empfohlen",
      "lv": "Doporučeno"
    }
  },
  {
    "infinitiv": {
      "de": "empfinden",
      "lv": "Cítit"
    },
    "praesens": {
      "de": "er empfindet",
      "lv": "Cítí"
    },
    "imperfektIndikativ": {
      "de": "er empfand",
      "lv": "Cítil"
    },
    "imperfektKonjunktiv": {
      "de": "er empfände",
      "lv": "Cítil by se"
    },
    "partizipVergangenheit": {
      "de": "empfunden",
      "lv": "Plstěný"
    }
  },
  {
    "infinitiv": {
      "de": "erlöschen",
      "lv": "Zhasne"
    },
    "praesens": {
      "de": "er erlischt",
      "lv": "Jde ven"
    },
    "imperfektIndikativ": {
      "de": "er erlosch",
      "lv": "Vyšel ven"
    },
    "imperfektKonjunktiv": {
      "de": "er erlösche",
      "lv": "Zmizel by"
    },
    "partizipVergangenheit": {
      "de": "erloschen (er ist)",
      "lv": "Vyhasl"
    }
  },
  {
    "infinitiv": {
      "de": "erschrecken",
      "lv": "Zmást"
    },
    "praesens": {
      "de": "er erschrickt",
      "lv": "Dostane strach"
    },
    "imperfektIndikativ": {
      "de": "er erschrak",
      "lv": "Dostal strach"
    },
    "imperfektKonjunktiv": {
      "de": "er erschräke",
      "lv": "Zbláznil by se"
    },
    "partizipVergangenheit": {
      "de": "erschrocken (er ist)",
      "lv": "Vyděšený"
    }
  },
  {
    "infinitiv": {
      "de": "essen",
      "lv": "Jíst"
    },
    "praesens": {
      "de": "er isst",
      "lv": "On jí"
    },
    "imperfektIndikativ": {
      "de": "er ass",
      "lv": "Jedl"
    },
    "imperfektKonjunktiv": {
      "de": "er äße",
      "lv": "Jedl by"
    },
    "partizipVergangenheit": {
      "de": "gegessen",
      "lv": "Sněden / sněden"
    }
  },
  {
    "infinitiv": {
      "de": "fahren",
      "lv": "Řídit"
    },
    "praesens": {
      "de": "er fährt",
      "lv": "On řídí"
    },
    "imperfektIndikativ": {
      "de": "er fuhr",
      "lv": "Řídil"
    },
    "imperfektKonjunktiv": {
      "de": "er führe",
      "lv": "Řídil by"
    },
    "partizipVergangenheit": {
      "de": "gefahren (er ist)",
      "lv": "Jel / odešel"
    }
  },
  {
    "infinitiv": {
      "de": "fallen",
      "lv": "Padat"
    },
    "praesens": {
      "de": "er fällt",
      "lv": "On padá"
    },
    "imperfektIndikativ": {
      "de": "er fiel",
      "lv": "Spadl"
    },
    "imperfektKonjunktiv": {
      "de": "er fiele",
      "lv": "Spadl by"
    },
    "partizipVergangenheit": {
      "de": "gefallen (er ist)",
      "lv": "Spadl"
    }
  },
  {
    "infinitiv": {
      "de": "fangen",
      "lv": "Chytit"
    },
    "praesens": {
      "de": "er fängt",
      "lv": "Chytá"
    },
    "imperfektIndikativ": {
      "de": "er fing",
      "lv": "Chytil"
    },
    "imperfektKonjunktiv": {
      "de": "er finge",
      "lv": "Chytil by se"
    },
    "partizipVergangenheit": {
      "de": "gefangen",
      "lv": "Chycený / chycený"
    }
  },
  {
    "infinitiv": {
      "de": "finden",
      "lv": "Najít"
    },
    "praesens": {
      "de": "er findet",
      "lv": "Najde"
    },
    "imperfektIndikativ": {
      "de": "er fand",
      "lv": "Našel"
    },
    "imperfektKonjunktiv": {
      "de": "er fände",
      "lv": "Našel by"
    },
    "partizipVergangenheit": {
      "de": "gefunden",
      "lv": "Nalezeno"
    }
  },
  {
    "infinitiv": {
      "de": "fliegen",
      "lv": "Pustit"
    },
    "praesens": {
      "de": "er fliegt",
      "lv": "On létá"
    },
    "imperfektIndikativ": {
      "de": "er flog",
      "lv": "Letěl"
    },
    "imperfektKonjunktiv": {
      "de": "er flöge",
      "lv": "Létal by"
    },
    "partizipVergangenheit": {
      "de": "geflogen (er ist)",
      "lv": "Letěl"
    }
  },
  {
    "infinitiv": {
      "de": "fliehen",
      "lv": "Utéci"
    },
    "praesens": {
      "de": "er flieht",
      "lv": "Utíká pryč"
    },
    "imperfektIndikativ": {
      "de": "er floh",
      "lv": "Utekl"
    },
    "imperfektKonjunktiv": {
      "de": "er flöhe",
      "lv": "Utekl by"
    },
    "partizipVergangenheit": {
      "de": "geflohen (er ist)",
      "lv": "Utekl"
    }
  },
  {
    "infinitiv": {
      "de": "fließen",
      "lv": "Proudit"
    },
    "praesens": {
      "de": "er fließt",
      "lv": "Běží"
    },
    "imperfektIndikativ": {
      "de": "er floss",
      "lv": "Běžel"
    },
    "imperfektKonjunktiv": {
      "de": "er flösse",
      "lv": "Běžel by"
    },
    "partizipVergangenheit": {
      "de": "geflossen (er ist)",
      "lv": "Prošel"
    }
  },
  {
    "infinitiv": {
      "de": "fressen",
      "lv": "Jíst zítra"
    },
    "praesens": {
      "de": "er frisst",
      "lv": "Jí / polyká"
    },
    "imperfektIndikativ": {
      "de": "er frass",
      "lv": "Snědl / spolkl"
    },
    "imperfektKonjunktiv": {
      "de": "er fräße",
      "lv": "Jedl/snídal"
    },
    "partizipVergangenheit": {
      "de": "gefressen",
      "lv": "Sněden/ráno"
    }
  },
  {
    "infinitiv": {
      "de": "frieren",
      "lv": "Studený"
    },
    "praesens": {
      "de": "er friert",
      "lv": "Mrzne"
    },
    "imperfektIndikativ": {
      "de": "er fror",
      "lv": "On ostrov"
    },
    "imperfektKonjunktiv": {
      "de": "er fröre",
      "lv": "Mrzl"
    },
    "partizipVergangenheit": {
      "de": "gefroren",
      "lv": "Ostrov"
    }
  },
  {
    "infinitiv": {
      "de": "geben",
      "lv": "Dát"
    },
    "praesens": {
      "de": "er gibt",
      "lv": "On dává"
    },
    "imperfektIndikativ": {
      "de": "er gab",
      "lv": "Dal"
    },
    "imperfektKonjunktiv": {
      "de": "er gäbe",
      "lv": "Dal by"
    },
    "partizipVergangenheit": {
      "de": "gegeben",
      "lv": "Daný"
    }
  },
  {
    "infinitiv": {
      "de": "gedeihen",
      "lv": "Uspět"
    },
    "praesens": {
      "de": "er gedeiht",
      "lv": "Daří se mu to"
    },
    "imperfektIndikativ": {
      "de": "er gedieh",
      "lv": "Se mu to povedlo"
    },
    "imperfektKonjunktiv": {
      "de": "er gediehe",
      "lv": "Uspěl by"
    },
    "partizipVergangenheit": {
      "de": "gediehen (er ist)",
      "lv": "Podařilo"
    }
  },
  {
    "infinitiv": {
      "de": "gehen",
      "lv": "Jít"
    },
    "praesens": {
      "de": "er geht",
      "lv": "On jde"
    },
    "imperfektIndikativ": {
      "de": "er ging",
      "lv": "Chodil"
    },
    "imperfektKonjunktiv": {
      "de": "er ginge",
      "lv": "Šel by"
    },
    "partizipVergangenheit": {
      "de": "gegangen (er ist)",
      "lv": "Šel"
    }
  },
  {
    "infinitiv": {
      "de": "gewinnen",
      "lv": "Získat"
    },
    "praesens": {
      "de": "er gewinnt",
      "lv": "Dostane"
    },
    "imperfektIndikativ": {
      "de": "er gewann",
      "lv": "Dostal"
    },
    "imperfektKonjunktiv": {
      "de": "er gewönne / er gewänne",
      "lv": "Dostal by"
    },
    "partizipVergangenheit": {
      "de": "gewonnen",
      "lv": "Získané"
    }
  },
  {
    "infinitiv": {
      "de": "haben",
      "lv": "Být / patřit"
    },
    "praesens": {
      "de": "er hat",
      "lv": "Má"
    },
    "imperfektIndikativ": {
      "de": "hatte",
      "lv": "Byl"
    },
    "imperfektKonjunktiv": {
      "de": "hatte",
      "lv": "Byl"
    },
    "partizipVergangenheit": {
      "de": "gehabt",
      "lv": "Byl"
    }
  },
  {
    "infinitiv": {
      "de": "halten",
      "lv": "Držet"
    },
    "praesens": {
      "de": "er hält",
      "lv": "On tam"
    },
    "imperfektIndikativ": {
      "de": "er hielt",
      "lv": "Držel"
    },
    "imperfektKonjunktiv": {
      "de": "er hielte",
      "lv": "Držel by se"
    },
    "partizipVergangenheit": {
      "de": "gehalten",
      "lv": "Držený"
    }
  },
  {
    "infinitiv": {
      "de": "heißen",
      "lv": "Zavolat"
    },
    "praesens": {
      "de": "er heißt",
      "lv": "Volá / je volán"
    },
    "imperfektIndikativ": {
      "de": "er hieß",
      "lv": "Volal / byl volán"
    },
    "imperfektKonjunktiv": {
      "de": "er hieße",
      "lv": "Zavolal by / byl by povolán"
    },
    "partizipVergangenheit": {
      "de": "geheißen",
      "lv": "Volal"
    }
  },
  {
    "infinitiv": {
      "de": "helfen",
      "lv": "Pomoci"
    },
    "praesens": {
      "de": "er hilft",
      "lv": "On pomáhá"
    },
    "imperfektIndikativ": {
      "de": "er half",
      "lv": "Pomohl"
    },
    "imperfektKonjunktiv": {
      "de": "er hülfe / er hälfe",
      "lv": "Pomohl by"
    },
    "partizipVergangenheit": {
      "de": "geholfen",
      "lv": "Pomohl"
    }
  },
  {
    "infinitiv": {
      "de": "kommen",
      "lv": "Přijít"
    },
    "praesens": {
      "de": "er kommt",
      "lv": "On přichází"
    },
    "imperfektIndikativ": {
      "de": "er kam",
      "lv": "Přišel"
    },
    "imperfektKonjunktiv": {
      "de": "er käme",
      "lv": "Přišel by"
    },
    "partizipVergangenheit": {
      "de": "gekommen (er ist)",
      "lv": "Přišel"
    }
  },
  {
    "infinitiv": {
      "de": "können",
      "lv": "Moci"
    },
    "praesens": {
      "de": "er kann",
      "lv": "Může"
    },
    "imperfektIndikativ": {
      "de": "konnte",
      "lv": "Mohl"
    },
    "imperfektKonjunktiv": {
      "de": "konnte",
      "lv": "Mohl"
    },
    "partizipVergangenheit": {
      "de": "gekonnt",
      "lv": "Mohl"
    }
  },
  {
    "infinitiv": {
      "de": "kriechen",
      "lv": "Prší"
    },
    "praesens": {
      "de": "er kriecht",
      "lv": "Nakloní se"
    },
    "imperfektIndikativ": {
      "de": "er kroch",
      "lv": "Pršelo"
    },
    "imperfektKonjunktiv": {
      "de": "er kröche",
      "lv": "On prší"
    },
    "partizipVergangenheit": {
      "de": "gekrochen (er ist)",
      "lv": "Zemřel"
    }
  },
  {
    "infinitiv": {
      "de": "laden",
      "lv": "Načíst, pozvat"
    },
    "praesens": {
      "de": "er lädt",
      "lv": "Hromadí / zve"
    },
    "imperfektIndikativ": {
      "de": "er lud",
      "lv": "Naložil / pozval"
    },
    "imperfektKonjunktiv": {
      "de": "er lüde",
      "lv": "By naložil / pozval"
    },
    "partizipVergangenheit": {
      "de": "geladen",
      "lv": "Načteno / pozváno"
    }
  },
  {
    "infinitiv": {
      "de": "lassen",
      "lv": "Dát, nechat"
    },
    "praesens": {
      "de": "er lässt",
      "lv": "Položí / nechá"
    },
    "imperfektIndikativ": {
      "de": "er ließ",
      "lv": "Nařídil / dovolil"
    },
    "imperfektKonjunktiv": {
      "de": "er ließe",
      "lv": "Dal by / nechal"
    },
    "partizipVergangenheit": {
      "de": "gelassen",
      "lv": "Dát / povoleno"
    }
  },
  {
    "infinitiv": {
      "de": "laufen",
      "lv": "Běžet"
    },
    "praesens": {
      "de": "er läuft",
      "lv": "On běží"
    },
    "imperfektIndikativ": {
      "de": "er lief",
      "lv": "Běžel"
    },
    "imperfektKonjunktiv": {
      "de": "er liefe",
      "lv": "Běžel by"
    },
    "partizipVergangenheit": {
      "de": "gelaufen (er ist)",
      "lv": "Běžel"
    }
  },
  {
    "infinitiv": {
      "de": "leiden",
      "lv": "Trpět"
    },
    "praesens": {
      "de": "er leidet",
      "lv": "On trpí"
    },
    "imperfektIndikativ": {
      "de": "er litt",
      "lv": "Trpěl"
    },
    "imperfektKonjunktiv": {
      "de": "er litte",
      "lv": "Trpěl by"
    },
    "partizipVergangenheit": {
      "de": "gelitten",
      "lv": "Trpěl"
    }
  },
  {
    "infinitiv": {
      "de": "leihen",
      "lv": "Půjčit / vypůjčit"
    },
    "praesens": {
      "de": "er leiht",
      "lv": "Půjčuje / půjčuje"
    },
    "imperfektIndikativ": {
      "de": "er lieh",
      "lv": "Půjčil / vypůjčil"
    },
    "imperfektKonjunktiv": {
      "de": "er liehe",
      "lv": "By půjčil / půjčil"
    },
    "partizipVergangenheit": {
      "de": "geliehen",
      "lv": "Půjčil / vypůjčil"
    }
  },
  {
    "infinitiv": {
      "de": "lesen",
      "lv": "Číst"
    },
    "praesens": {
      "de": "er liest",
      "lv": "On čte"
    },
    "imperfektIndikativ": {
      "de": "er las",
      "lv": "Četl"
    },
    "imperfektKonjunktiv": {
      "de": "er läse",
      "lv": "Četl by"
    },
    "partizipVergangenheit": {
      "de": "gelesen",
      "lv": "Číst"
    }
  },
  {
    "infinitiv": {
      "de": "liegen",
      "lv": "Spát"
    },
    "praesens": {
      "de": "er liegt",
      "lv": "On spí"
    },
    "imperfektIndikativ": {
      "de": "er lag",
      "lv": "Spal"
    },
    "imperfektKonjunktiv": {
      "de": "er läge",
      "lv": "Spal by"
    },
    "partizipVergangenheit": {
      "de": "gelegen",
      "lv": "Spal"
    }
  },
  {
    "infinitiv": {
      "de": "lügen",
      "lv": "Lhát"
    },
    "praesens": {
      "de": "er lügt",
      "lv": "On lže"
    },
    "imperfektIndikativ": {
      "de": "er log",
      "lv": "Lhal"
    },
    "imperfektKonjunktiv": {
      "de": "er löge",
      "lv": "Lhal by"
    },
    "partizipVergangenheit": {
      "de": "gelogen",
      "lv": "Lhal"
    }
  },
  {
    "infinitiv": {
      "de": "mahlen",
      "lv": "Země"
    },
    "praesens": {
      "de": "er mahlt",
      "lv": "Mele"
    },
    "imperfektIndikativ": {
      "de": "er mahlte",
      "lv": "On okraj"
    },
    "imperfektKonjunktiv": {
      "de": "er malte",
      "lv": "Mele"
    },
    "partizipVergangenheit": {
      "de": "gemahlen",
      "lv": "Země"
    }
  },
  {
    "infinitiv": {
      "de": "meiden",
      "lv": "Vyhnout se"
    },
    "praesens": {
      "de": "er meidet",
      "lv": "Vyhýbá se"
    },
    "imperfektIndikativ": {
      "de": "er mied",
      "lv": "Vyhýbal se"
    },
    "imperfektKonjunktiv": {
      "de": "er miede",
      "lv": "Vyhnul by se"
    },
    "partizipVergangenheit": {
      "de": "gemieden",
      "lv": "Vyhnout"
    }
  },
  {
    "infinitiv": {
      "de": "melken",
      "lv": "Na mléko"
    },
    "praesens": {
      "de": "er milkt / er melkt",
      "lv": "Zametá"
    },
    "imperfektIndikativ": {
      "de": "er molk / er melkte",
      "lv": "Zametl"
    },
    "imperfektKonjunktiv": {
      "de": "er mölke / er melkte",
      "lv": "Dojil by"
    },
    "partizipVergangenheit": {
      "de": "gemolken / gemelkt",
      "lv": "Nadojený"
    }
  },
  {
    "infinitiv": {
      "de": "messen",
      "lv": "Měřit"
    },
    "praesens": {
      "de": "er misst",
      "lv": "On měří"
    },
    "imperfektIndikativ": {
      "de": "er mass",
      "lv": "Změřil"
    },
    "imperfektKonjunktiv": {
      "de": "er mäße",
      "lv": "Změřil by"
    },
    "partizipVergangenheit": {
      "de": "gemessen",
      "lv": "Měřeno"
    }
  },
  {
    "infinitiv": {
      "de": "misslingen",
      "lv": "Selhat"
    },
    "praesens": {
      "de": "es misslingt",
      "lv": "Selže"
    },
    "imperfektIndikativ": {
      "de": "misslang",
      "lv": "Nepodařilo"
    },
    "imperfektKonjunktiv": {
      "de": "misslang",
      "lv": "Nepodařilo"
    },
    "partizipVergangenheit": {
      "de": "misslungen",
      "lv": "Nepodařilo"
    }
  },
  {
    "infinitiv": {
      "de": "mögen",
      "lv": "Mít rád"
    },
    "praesens": {
      "de": "er mag",
      "lv": "Má rád"
    },
    "imperfektIndikativ": {
      "de": "mochte",
      "lv": "Se to líbilo"
    },
    "imperfektKonjunktiv": {
      "de": "mochte",
      "lv": "Se to líbilo"
    },
    "partizipVergangenheit": {
      "de": "gemocht",
      "lv": "Líbilo"
    }
  },
  {
    "infinitiv": {
      "de": "müssen",
      "lv": "Potřebovat"
    },
    "praesens": {
      "de": "er muss",
      "lv": "Potřebuje"
    },
    "imperfektIndikativ": {
      "de": "musste",
      "lv": "By měl mít"
    },
    "imperfektKonjunktiv": {
      "de": "musste",
      "lv": "By měl mít"
    },
    "partizipVergangenheit": {
      "de": "gemusst",
      "lv": "Potřebná"
    }
  },
  {
    "infinitiv": {
      "de": "nehmen",
      "lv": "Vzít"
    },
    "praesens": {
      "de": "er nimmt",
      "lv": "Bere"
    },
    "imperfektIndikativ": {
      "de": "er nahm",
      "lv": "Vzal"
    },
    "imperfektKonjunktiv": {
      "de": "er nähme",
      "lv": "Vzal by"
    },
    "partizipVergangenheit": {
      "de": "genommen",
      "lv": "Přijato"
    }
  },
  {
    "infinitiv": {
      "de": "nennen",
      "lv": "Jmenovat"
    },
    "praesens": {
      "de": "er nennt",
      "lv": "Jmenoval"
    },
    "imperfektIndikativ": {
      "de": "er nannte",
      "lv": "Zavolal"
    },
    "imperfektKonjunktiv": {
      "de": "er nennte",
      "lv": "Jmenoval by"
    },
    "partizipVergangenheit": {
      "de": "genannt",
      "lv": "Jmenoval"
    }
  },
  {
    "infinitiv": {
      "de": "pfeifen",
      "lv": "Pískat"
    },
    "praesens": {
      "de": "er pfeift",
      "lv": "Píská"
    },
    "imperfektIndikativ": {
      "de": "er pfiff",
      "lv": "Zapískal"
    },
    "imperfektKonjunktiv": {
      "de": "er pfiffe",
      "lv": "Pískal by"
    },
    "partizipVergangenheit": {
      "de": "gepfiffen",
      "lv": "Zapískal"
    }
  },
  {
    "infinitiv": {
      "de": "pflegen",
      "lv": "Udržovat"
    },
    "praesens": {
      "de": "er pflegt",
      "lv": "Stará se o něj"
    },
    "imperfektIndikativ": {
      "de": "pflegte vai pflog",
      "lv": "Soubor"
    },
    "imperfektKonjunktiv": {
      "de": "pflegte vai pflog",
      "lv": "Soubor"
    },
    "partizipVergangenheit": {
      "de": "gepflegt vai gepflogen",
      "lv": "Upravený"
    }
  },
  {
    "infinitiv": {
      "de": "preisen",
      "lv": "Chvála"
    },
    "praesens": {
      "de": "er preist",
      "lv": "Chválí"
    },
    "imperfektIndikativ": {
      "de": "er pries",
      "lv": "Chválil"
    },
    "imperfektKonjunktiv": {
      "de": "er priese",
      "lv": "Chválil by"
    },
    "partizipVergangenheit": {
      "de": "gepriesen",
      "lv": "Chválil"
    }
  },
  {
    "infinitiv": {
      "de": "quellen",
      "lv": "Nakypřít se"
    },
    "praesens": {
      "de": "er quillt",
      "lv": "Tloustne"
    },
    "imperfektIndikativ": {
      "de": "er quoll",
      "lv": "Vyzrál"
    },
    "imperfektKonjunktiv": {
      "de": "er quölle",
      "lv": "Je tlustý"
    },
    "partizipVergangenheit": {
      "de": "gequollen (er ist)",
      "lv": "Oteklý"
    }
  },
  {
    "infinitiv": {
      "de": "raten",
      "lv": "Navrhnout / zmínit"
    },
    "praesens": {
      "de": "er rät",
      "lv": "On doporučuje / min"
    },
    "imperfektIndikativ": {
      "de": "er riet",
      "lv": "Navrhl / navrhl"
    },
    "imperfektKonjunktiv": {
      "de": "er riete",
      "lv": "By navrhl / zmínil"
    },
    "partizipVergangenheit": {
      "de": "geraten",
      "lv": "Navrhl / zmínil"
    }
  },
  {
    "infinitiv": {
      "de": "reiben",
      "lv": "Třít"
    },
    "praesens": {
      "de": "er reibt",
      "lv": "Tře se"
    },
    "imperfektIndikativ": {
      "de": "er rieb",
      "lv": "Tře se"
    },
    "imperfektKonjunktiv": {
      "de": "er riebe",
      "lv": "Třel by"
    },
    "partizipVergangenheit": {
      "de": "gerieben",
      "lv": "Třel"
    }
  },
  {
    "infinitiv": {
      "de": "reißen",
      "lv": "SEM"
    },
    "praesens": {
      "de": "er reißt",
      "lv": "Vyštěkne"
    },
    "imperfektIndikativ": {
      "de": "er riss",
      "lv": "Vyštěkl"
    },
    "imperfektKonjunktiv": {
      "de": "er risse",
      "lv": "Vyštěkl"
    },
    "partizipVergangenheit": {
      "de": "gerissen",
      "lv": "Roztrhaný"
    }
  },
  {
    "infinitiv": {
      "de": "reiten",
      "lv": "Jezdit"
    },
    "praesens": {
      "de": "er reitet",
      "lv": "On jezdí"
    },
    "imperfektIndikativ": {
      "de": "er ritt",
      "lv": "Jezdil"
    },
    "imperfektKonjunktiv": {
      "de": "er ritte",
      "lv": "Jezdil by"
    },
    "partizipVergangenheit": {
      "de": "geritten (er ist)",
      "lv": "Jel"
    }
  },
  {
    "infinitiv": {
      "de": "rennen",
      "lv": "Běžet"
    },
    "praesens": {
      "de": "er rennt",
      "lv": "On běží"
    },
    "imperfektIndikativ": {
      "de": "er rannte",
      "lv": "Běžel"
    },
    "imperfektKonjunktiv": {
      "de": "er rennte",
      "lv": "Běžel by"
    },
    "partizipVergangenheit": {
      "de": "gerannt",
      "lv": "Běžel"
    }
  },
  {
    "infinitiv": {
      "de": "riechen",
      "lv": "Ost"
    },
    "praesens": {
      "de": "er riecht",
      "lv": "On voní"
    },
    "imperfektIndikativ": {
      "de": "er roch",
      "lv": "On zpívá"
    },
    "imperfektKonjunktiv": {
      "de": "er röche",
      "lv": "On port"
    },
    "partizipVergangenheit": {
      "de": "gerochen",
      "lv": "Přístav"
    }
  },
  {
    "infinitiv": {
      "de": "ringen",
      "lv": "Zlomit se"
    },
    "praesens": {
      "de": "er ringt",
      "lv": "Zlomí se"
    },
    "imperfektIndikativ": {
      "de": "er rang",
      "lv": "Rozbil se"
    },
    "imperfektKonjunktiv": {
      "de": "er ränge",
      "lv": "Zlomil by se"
    },
    "partizipVergangenheit": {
      "de": "gerungen",
      "lv": "Počkejte"
    }
  },
  {
    "infinitiv": {
      "de": "rinnen",
      "lv": "Proudit"
    },
    "praesens": {
      "de": "er rinnt",
      "lv": "Běží"
    },
    "imperfektIndikativ": {
      "de": "er rann",
      "lv": "Běžel"
    },
    "imperfektKonjunktiv": {
      "de": "er ränne / er rönne",
      "lv": "Běžel by"
    },
    "partizipVergangenheit": {
      "de": "geronnen (er ist)",
      "lv": "Tekla / koagulovala"
    }
  },
  {
    "infinitiv": {
      "de": "rufen",
      "lv": "Zavolat"
    },
    "praesens": {
      "de": "er ruft",
      "lv": "Volá"
    },
    "imperfektIndikativ": {
      "de": "er rief",
      "lv": "Zavolal"
    },
    "imperfektKonjunktiv": {
      "de": "er riefe",
      "lv": "Zavolal by"
    },
    "partizipVergangenheit": {
      "de": "gerufen",
      "lv": "Volal"
    }
  },
  {
    "infinitiv": {
      "de": "salzen",
      "lv": "Dosolit"
    },
    "praesens": {
      "de": "er salzt",
      "lv": "Osolil"
    },
    "imperfektIndikativ": {
      "de": "er salzte",
      "lv": "Osolil"
    },
    "imperfektKonjunktiv": {
      "de": "er salzte",
      "lv": "Osolil by"
    },
    "partizipVergangenheit": {
      "de": "gesalzen",
      "lv": "Osolené"
    }
  },
  {
    "infinitiv": {
      "de": "saufen",
      "lv": "Usušit / vypít"
    },
    "praesens": {
      "de": "er säuft",
      "lv": "Pije / pije"
    },
    "imperfektIndikativ": {
      "de": "er soff",
      "lv": "Pil / pil"
    },
    "imperfektKonjunktiv": {
      "de": "er söffe",
      "lv": "By pil / pil"
    },
    "partizipVergangenheit": {
      "de": "gesoffen",
      "lv": "Opilý"
    }
  },
  {
    "infinitiv": {
      "de": "saugen",
      "lv": "Sát"
    },
    "praesens": {
      "de": "er saugt",
      "lv": "Saje"
    },
    "imperfektIndikativ": {
      "de": "er sog",
      "lv": "Cucal"
    },
    "imperfektKonjunktiv": {
      "de": "er söge",
      "lv": "Cucal by"
    },
    "partizipVergangenheit": {
      "de": "gesogen",
      "lv": "Vysátý"
    }
  },
  {
    "infinitiv": {
      "de": "schaffen",
      "lv": "Vytvořit"
    },
    "praesens": {
      "de": "er schafft",
      "lv": "On tvoří"
    },
    "imperfektIndikativ": {
      "de": "er schuf",
      "lv": "Vytvořil"
    },
    "imperfektKonjunktiv": {
      "de": "er schüfe",
      "lv": "Vytvořil by"
    },
    "partizipVergangenheit": {
      "de": "geschaffen",
      "lv": "Vytvořené"
    }
  },
  {
    "infinitiv": {
      "de": "schallen",
      "lv": "Zaznít"
    },
    "praesens": {
      "de": "es schallt",
      "lv": "Zní to"
    },
    "imperfektIndikativ": {
      "de": "schallte vai scholl",
      "lv": "Zaznělo"
    },
    "imperfektKonjunktiv": {
      "de": "schallte vai scholl",
      "lv": "Zaznělo"
    },
    "partizipVergangenheit": {
      "de": "geschallt",
      "lv": "Zaznělo"
    }
  },
  {
    "infinitiv": {
      "de": "scheiden",
      "lv": "Rozvod / rozchod"
    },
    "praesens": {
      "de": "er scheidet",
      "lv": "On se rozvádí / rozvádí"
    },
    "imperfektIndikativ": {
      "de": "er schied",
      "lv": "Se rozvedl / rozvedl"
    },
    "imperfektKonjunktiv": {
      "de": "er schiede",
      "lv": "Rozvedl by se / rozvedl"
    },
    "partizipVergangenheit": {
      "de": "geschieden (er hat / er ist)",
      "lv": "Oddělený / rozvedený"
    }
  },
  {
    "infinitiv": {
      "de": "scheinen",
      "lv": "Svítit / objevit se"
    },
    "praesens": {
      "de": "er scheint",
      "lv": "Září / zdá se"
    },
    "imperfektIndikativ": {
      "de": "er schien",
      "lv": "Zářil / zdálo se"
    },
    "imperfektKonjunktiv": {
      "de": "er schiene",
      "lv": "Leskl by se / zdál se"
    },
    "partizipVergangenheit": {
      "de": "geschienen",
      "lv": "Zářil / zdálo se"
    }
  },
  {
    "infinitiv": {
      "de": "schelten",
      "lv": "Bart"
    },
    "praesens": {
      "de": "er schilt",
      "lv": "Nadává"
    },
    "imperfektIndikativ": {
      "de": "er schalt",
      "lv": "Zatarasil"
    },
    "imperfektKonjunktiv": {
      "de": "er schölte / er schälte",
      "lv": "Oholí se"
    },
    "partizipVergangenheit": {
      "de": "gescholten",
      "lv": "Vousy"
    }
  },
  {
    "infinitiv": {
      "de": "scheren",
      "lv": "Řezat"
    },
    "praesens": {
      "de": "er schert",
      "lv": "On řeže"
    },
    "imperfektIndikativ": {
      "de": "schor vai scherte",
      "lv": "Nůžky"
    },
    "imperfektKonjunktiv": {
      "de": "schor vai scherte",
      "lv": "Nůžky"
    },
    "partizipVergangenheit": {
      "de": "geschoren vai geschert",
      "lv": "Oříznuté"
    }
  },
  {
    "infinitiv": {
      "de": "schieben",
      "lv": "Tlačit"
    },
    "praesens": {
      "de": "er schiebt",
      "lv": "Tlačí"
    },
    "imperfektIndikativ": {
      "de": "er schob",
      "lv": "Zatlačil"
    },
    "imperfektKonjunktiv": {
      "de": "er schöbe",
      "lv": "Tlačil by"
    },
    "partizipVergangenheit": {
      "de": "geschoben",
      "lv": "Tlačil"
    }
  },
  {
    "infinitiv": {
      "de": "schießen",
      "lv": "Střílet"
    },
    "praesens": {
      "de": "er schießt",
      "lv": "Střílí"
    },
    "imperfektIndikativ": {
      "de": "er schoss",
      "lv": "Vystřelil"
    },
    "imperfektKonjunktiv": {
      "de": "er schösse",
      "lv": "Střílel by"
    },
    "partizipVergangenheit": {
      "de": "geschossen",
      "lv": "Shot"
    }
  },
  {
    "infinitiv": {
      "de": "schinden",
      "lv": "Trápení"
    },
    "praesens": {
      "de": "er schindet",
      "lv": "Mučí"
    },
    "imperfektIndikativ": {
      "de": "schindete",
      "lv": "Utrápený"
    },
    "imperfektKonjunktiv": {
      "de": "schindete",
      "lv": "Utrápený"
    },
    "partizipVergangenheit": {
      "de": "geschunden",
      "lv": "Utrápený"
    }
  },
  {
    "infinitiv": {
      "de": "schlafen",
      "lv": "Spát"
    },
    "praesens": {
      "de": "er schläft",
      "lv": "On spí"
    },
    "imperfektIndikativ": {
      "de": "er schlief",
      "lv": "Spal"
    },
    "imperfektKonjunktiv": {
      "de": "er schliefe",
      "lv": "Spal by"
    },
    "partizipVergangenheit": {
      "de": "geschlafen",
      "lv": "Spal"
    }
  },
  {
    "infinitiv": {
      "de": "schlagen",
      "lv": "Hit"
    },
    "praesens": {
      "de": "er schlägt",
      "lv": "Zasáhne"
    },
    "imperfektIndikativ": {
      "de": "er schlug",
      "lv": "Trefil se"
    },
    "imperfektKonjunktiv": {
      "de": "er schlüge",
      "lv": "Trefil by se"
    },
    "partizipVergangenheit": {
      "de": "geschlagen",
      "lv": "Zbitý"
    }
  },
  {
    "infinitiv": {
      "de": "schleichen",
      "lv": "Prší"
    },
    "praesens": {
      "de": "er schleicht",
      "lv": "Nakloní se"
    },
    "imperfektIndikativ": {
      "de": "er schlich",
      "lv": "Pršelo"
    },
    "imperfektKonjunktiv": {
      "de": "er schliche",
      "lv": "On prší"
    },
    "partizipVergangenheit": {
      "de": "geschlichen (er ist)",
      "lv": "Zemřel"
    }
  },
  {
    "infinitiv": {
      "de": "schleifen",
      "lv": "Brousit"
    },
    "praesens": {
      "de": "er schleift",
      "lv": "Mele"
    },
    "imperfektIndikativ": {
      "de": "er schliff",
      "lv": "Mlel"
    },
    "imperfektKonjunktiv": {
      "de": "er schliffe",
      "lv": "Mlel by"
    },
    "partizipVergangenheit": {
      "de": "geschliffen",
      "lv": "Leštěný"
    }
  },
  {
    "infinitiv": {
      "de": "schließen",
      "lv": "Zavřít"
    },
    "praesens": {
      "de": "er schließt",
      "lv": "Zavírá"
    },
    "imperfektIndikativ": {
      "de": "er schloss",
      "lv": "Zavřel"
    },
    "imperfektKonjunktiv": {
      "de": "er schlösse",
      "lv": "Zavřel by se"
    },
    "partizipVergangenheit": {
      "de": "geschlossen",
      "lv": "ZAVŘENO"
    }
  },
  {
    "infinitiv": {
      "de": "schlingen",
      "lv": "Zítra"
    },
    "praesens": {
      "de": "er schlingt",
      "lv": "Polyká"
    },
    "imperfektIndikativ": {
      "de": "er schlang",
      "lv": "Polkl"
    },
    "imperfektKonjunktiv": {
      "de": "er schlänge",
      "lv": "On ráno"
    },
    "partizipVergangenheit": {
      "de": "geschlungen",
      "lv": "Ráno"
    }
  },
  {
    "infinitiv": {
      "de": "schmeißen",
      "lv": "Hod"
    },
    "praesens": {
      "de": "er schmeißt",
      "lv": "Hází"
    },
    "imperfektIndikativ": {
      "de": "er schmiss",
      "lv": "Hodil"
    },
    "imperfektKonjunktiv": {
      "de": "er schmisse",
      "lv": "Hodil"
    },
    "partizipVergangenheit": {
      "de": "geschmissen",
      "lv": "Hozený"
    }
  },
  {
    "infinitiv": {
      "de": "schmelzen",
      "lv": "Pohybující se"
    },
    "praesens": {
      "de": "er schmilzt",
      "lv": "Roztaje se"
    },
    "imperfektIndikativ": {
      "de": "er schmolz",
      "lv": "Zasténal"
    },
    "imperfektKonjunktiv": {
      "de": "er schmölze",
      "lv": "Pohyboval se"
    },
    "partizipVergangenheit": {
      "de": "geschmolzen (er ist)",
      "lv": "Roztavený"
    }
  },
  {
    "infinitiv": {
      "de": "schnauben",
      "lv": "Zasyčet"
    },
    "praesens": {
      "de": "er schnaubt",
      "lv": "Odfrkne si"
    },
    "imperfektIndikativ": {
      "de": "schnaubte vai schnob",
      "lv": "Odfrkl si"
    },
    "imperfektKonjunktiv": {
      "de": "schnaubte vai schnob",
      "lv": "Odfrkl si"
    },
    "partizipVergangenheit": {
      "de": "geschnaubt vai geschnoben",
      "lv": "Šňupat"
    }
  },
  {
    "infinitiv": {
      "de": "schneiden",
      "lv": "Řezat"
    },
    "praesens": {
      "de": "er schneidet",
      "lv": "Točí se"
    },
    "imperfektIndikativ": {
      "de": "er schnitt",
      "lv": "Řezal"
    },
    "imperfektKonjunktiv": {
      "de": "er schnitte",
      "lv": "Řezal by"
    },
    "partizipVergangenheit": {
      "de": "geschnitten",
      "lv": "Střih"
    }
  },
  {
    "infinitiv": {
      "de": "schreiben",
      "lv": "Psát"
    },
    "praesens": {
      "de": "er schreibt",
      "lv": "On píše"
    },
    "imperfektIndikativ": {
      "de": "er schrieb",
      "lv": "Napsal"
    },
    "imperfektKonjunktiv": {
      "de": "er schriebe",
      "lv": "Napsal by"
    },
    "partizipVergangenheit": {
      "de": "geschrieben",
      "lv": "Napsáno"
    }
  },
  {
    "infinitiv": {
      "de": "schreien",
      "lv": "Křičet"
    },
    "praesens": {
      "de": "er schreit",
      "lv": "Křičí"
    },
    "imperfektIndikativ": {
      "de": "er schrie",
      "lv": "Vykřikl"
    },
    "imperfektKonjunktiv": {
      "de": "er schriee",
      "lv": "Křičel by"
    },
    "partizipVergangenheit": {
      "de": "geschrien",
      "lv": "Křičel"
    }
  },
  {
    "infinitiv": {
      "de": "schreiten",
      "lv": "Chůze"
    },
    "praesens": {
      "de": "er schreitet",
      "lv": "On chodí"
    },
    "imperfektIndikativ": {
      "de": "er schritt",
      "lv": "Chodil"
    },
    "imperfektKonjunktiv": {
      "de": "er schritte",
      "lv": "Chodil by"
    },
    "partizipVergangenheit": {
      "de": "geschritten (er ist)",
      "lv": "Chodil"
    }
  },
  {
    "infinitiv": {
      "de": "schweigen",
      "lv": "Mlčet"
    },
    "praesens": {
      "de": "er schweigt",
      "lv": "Mlčí"
    },
    "imperfektIndikativ": {
      "de": "er schwieg",
      "lv": "Mlčel"
    },
    "imperfektKonjunktiv": {
      "de": "er schwiege",
      "lv": "Mlčel by"
    },
    "partizipVergangenheit": {
      "de": "geschwiegen",
      "lv": "Umlčen"
    }
  },
  {
    "infinitiv": {
      "de": "schwellen",
      "lv": "Pamp"
    },
    "praesens": {
      "de": "er schwillt",
      "lv": "Našpulí se"
    },
    "imperfektIndikativ": {
      "de": "er schwoll",
      "lv": "On pampa"
    },
    "imperfektKonjunktiv": {
      "de": "er schwölle",
      "lv": "Pumpoval by"
    },
    "partizipVergangenheit": {
      "de": "geschwollen (er ist)",
      "lv": "Čerpadlo"
    }
  },
  {
    "infinitiv": {
      "de": "schwimmen",
      "lv": "Plavat"
    },
    "praesens": {
      "de": "er schwimmt",
      "lv": "On plave"
    },
    "imperfektIndikativ": {
      "de": "er schwamm",
      "lv": "Plaval"
    },
    "imperfektKonjunktiv": {
      "de": "er schwömme / er schwämme",
      "lv": "Plaval by"
    },
    "partizipVergangenheit": {
      "de": "geschwommen (er ist)",
      "lv": "Plaval"
    }
  },
  {
    "infinitiv": {
      "de": "schwinden",
      "lv": "Zmizet"
    },
    "praesens": {
      "de": "er schwindet",
      "lv": "Zmizí"
    },
    "imperfektIndikativ": {
      "de": "er schwand",
      "lv": "Zmizel"
    },
    "imperfektKonjunktiv": {
      "de": "er schwände",
      "lv": "Zmizel by"
    },
    "partizipVergangenheit": {
      "de": "geschwunden (er ist)",
      "lv": "Ztracený"
    }
  },
  {
    "infinitiv": {
      "de": "schwingen",
      "lv": "Vlna"
    },
    "praesens": {
      "de": "er schwingt",
      "lv": "Mává"
    },
    "imperfektIndikativ": {
      "de": "er schwang",
      "lv": "Zamával"
    },
    "imperfektKonjunktiv": {
      "de": "er schwänge",
      "lv": "Zamával by"
    },
    "partizipVergangenheit": {
      "de": "geschwungen",
      "lv": "Zamával"
    }
  },
  {
    "infinitiv": {
      "de": "schwören",
      "lv": "Nadávat"
    },
    "praesens": {
      "de": "er schwört",
      "lv": "Přísahá"
    },
    "imperfektIndikativ": {
      "de": "er schwur / er schwor",
      "lv": "Zaklel"
    },
    "imperfektKonjunktiv": {
      "de": "er schwöre",
      "lv": "Přísahal by"
    },
    "partizipVergangenheit": {
      "de": "geschworen",
      "lv": "Přísežný"
    }
  },
  {
    "infinitiv": {
      "de": "sehen",
      "lv": "Vidět"
    },
    "praesens": {
      "de": "er sieht",
      "lv": "On vidí"
    },
    "imperfektIndikativ": {
      "de": "er sah",
      "lv": "Viděl"
    },
    "imperfektKonjunktiv": {
      "de": "er sähe",
      "lv": "Viděl by"
    },
    "partizipVergangenheit": {
      "de": "gesehen",
      "lv": "Viděl"
    }
  },
  {
    "infinitiv": {
      "de": "sein",
      "lv": "Být"
    },
    "praesens": {
      "de": "er ist",
      "lv": "On je"
    },
    "imperfektIndikativ": {
      "de": "war",
      "lv": "Byl"
    },
    "imperfektKonjunktiv": {
      "de": "war",
      "lv": "Byl"
    },
    "partizipVergangenheit": {
      "de": "gewesen",
      "lv": "Byl"
    }
  },
  {
    "infinitiv": {
      "de": "senden",
      "lv": "Poslat"
    },
    "praesens": {
      "de": "er sendet",
      "lv": "Posílá"
    },
    "imperfektIndikativ": {
      "de": "er sandte / er sendete",
      "lv": "Poslal"
    },
    "imperfektKonjunktiv": {
      "de": "er sendete",
      "lv": "Poslal by"
    },
    "partizipVergangenheit": {
      "de": "gesandt / gesendet",
      "lv": "Odesláno"
    }
  },
  {
    "infinitiv": {
      "de": "sieden",
      "lv": "Vařit"
    },
    "praesens": {
      "de": "er siedet",
      "lv": "On vaří"
    },
    "imperfektIndikativ": {
      "de": "sott vai siedete",
      "lv": "Vařené"
    },
    "imperfektKonjunktiv": {
      "de": "sott vai siedete",
      "lv": "Vařené"
    },
    "partizipVergangenheit": {
      "de": "gesotten vai gesiedet",
      "lv": "Vařený"
    }
  },
  {
    "infinitiv": {
      "de": "singen",
      "lv": "Zpívat"
    },
    "praesens": {
      "de": "er singt",
      "lv": "On zpívá"
    },
    "imperfektIndikativ": {
      "de": "er sang",
      "lv": "Zpíval"
    },
    "imperfektKonjunktiv": {
      "de": "er sänge",
      "lv": "Zpíval by"
    },
    "partizipVergangenheit": {
      "de": "gesungen",
      "lv": "Zpívaný"
    }
  },
  {
    "infinitiv": {
      "de": "sinken",
      "lv": "Potopit se"
    },
    "praesens": {
      "de": "er sinkt",
      "lv": "Potápí se"
    },
    "imperfektIndikativ": {
      "de": "er sank",
      "lv": "Vymýšlel"
    },
    "imperfektKonjunktiv": {
      "de": "er sänke",
      "lv": "Potopil by se"
    },
    "partizipVergangenheit": {
      "de": "gesunken (er ist)",
      "lv": "Make up"
    }
  },
  {
    "infinitiv": {
      "de": "sinnen",
      "lv": "Divit se"
    },
    "praesens": {
      "de": "er sinnt",
      "lv": "Diví se"
    },
    "imperfektIndikativ": {
      "de": "er sann",
      "lv": "Divil se"
    },
    "imperfektKonjunktiv": {
      "de": "er sönne / er sänne",
      "lv": "Divil by se"
    },
    "partizipVergangenheit": {
      "de": "gesonnen",
      "lv": "Smýšlející"
    }
  },
  {
    "infinitiv": {
      "de": "sitzen",
      "lv": "Sedět"
    },
    "praesens": {
      "de": "er sitzt",
      "lv": "On sedí"
    },
    "imperfektIndikativ": {
      "de": "er sass",
      "lv": "Seděl"
    },
    "imperfektKonjunktiv": {
      "de": "er säße",
      "lv": "Seděl by"
    },
    "partizipVergangenheit": {
      "de": "gesessen",
      "lv": "Posadil se"
    }
  },
  {
    "infinitiv": {
      "de": "sollen",
      "lv": "Potřebovat / být povinen"
    },
    "praesens": {
      "de": "er soll",
      "lv": "Potřebuje"
    },
    "imperfektIndikativ": {
      "de": "sollte",
      "lv": "By měl mít"
    },
    "imperfektKonjunktiv": {
      "de": "sollte",
      "lv": "By měl mít"
    },
    "partizipVergangenheit": {
      "de": "gesollt",
      "lv": "Potřebná"
    }
  },
  {
    "infinitiv": {
      "de": "speien",
      "lv": "Plivat"
    },
    "praesens": {
      "de": "er speit",
      "lv": "Plive"
    },
    "imperfektIndikativ": {
      "de": "er spie",
      "lv": "Odplivl si"
    },
    "imperfektKonjunktiv": {
      "de": "er spie",
      "lv": "Plival by"
    },
    "partizipVergangenheit": {
      "de": "gespien",
      "lv": "Vyplivl"
    }
  },
  {
    "infinitiv": {
      "de": "spinnen",
      "lv": "Roztočit"
    },
    "praesens": {
      "de": "er spinnt",
      "lv": "Kroutí se"
    },
    "imperfektIndikativ": {
      "de": "er spann",
      "lv": "Točil se"
    },
    "imperfektKonjunktiv": {
      "de": "er spönne / er spänne",
      "lv": "Točil by se"
    },
    "partizipVergangenheit": {
      "de": "gesponnen",
      "lv": "Předený"
    }
  },
  {
    "infinitiv": {
      "de": "spleißen",
      "lv": "Připojit se"
    },
    "praesens": {
      "de": "er spleißt",
      "lv": "Spojuje se"
    },
    "imperfektIndikativ": {
      "de": "spliss",
      "lv": "Připojeno"
    },
    "imperfektKonjunktiv": {
      "de": "spliss",
      "lv": "Připojeno"
    },
    "partizipVergangenheit": {
      "de": "gesplissen",
      "lv": "Připojeno"
    }
  },
  {
    "infinitiv": {
      "de": "sprechen",
      "lv": "Mluvit"
    },
    "praesens": {
      "de": "er spricht",
      "lv": "On mluví"
    },
    "imperfektIndikativ": {
      "de": "er sprach",
      "lv": "Promluvil"
    },
    "imperfektKonjunktiv": {
      "de": "er spräche",
      "lv": "Mluvil by"
    },
    "partizipVergangenheit": {
      "de": "gesprochen",
      "lv": "Mluvený"
    }
  },
  {
    "infinitiv": {
      "de": "sprießen",
      "lv": "Vzkvétat"
    },
    "praesens": {
      "de": "er sprießt",
      "lv": "Daří se mu"
    },
    "imperfektIndikativ": {
      "de": "er spross",
      "lv": "Prospíval"
    },
    "imperfektKonjunktiv": {
      "de": "er sprösse",
      "lv": "On police"
    },
    "partizipVergangenheit": {
      "de": "gesprossen (er ist)",
      "lv": "Rameno"
    }
  },
  {
    "infinitiv": {
      "de": "springen",
      "lv": "Skočit"
    },
    "praesens": {
      "de": "er springt",
      "lv": "Skáče"
    },
    "imperfektIndikativ": {
      "de": "er sprang",
      "lv": "Skočil"
    },
    "imperfektKonjunktiv": {
      "de": "er spränge",
      "lv": "Skočil by"
    },
    "partizipVergangenheit": {
      "de": "gesprungen (er ist)",
      "lv": "Čočka"
    }
  },
  {
    "infinitiv": {
      "de": "stechen",
      "lv": "Bodnout"
    },
    "praesens": {
      "de": "er sticht",
      "lv": "Bodá"
    },
    "imperfektIndikativ": {
      "de": "er stach",
      "lv": "Udeřil pěstí"
    },
    "imperfektKonjunktiv": {
      "de": "er stäche",
      "lv": "Bodl by"
    },
    "partizipVergangenheit": {
      "de": "gestochen",
      "lv": "Pobodán"
    }
  },
  {
    "infinitiv": {
      "de": "stecken",
      "lv": "Přilepit / zapíchnout"
    },
    "praesens": {
      "de": "er steckt",
      "lv": "Tlačí"
    },
    "imperfektIndikativ": {
      "de": "stak vai steckte",
      "lv": "Plněné"
    },
    "imperfektKonjunktiv": {
      "de": "stak vai steckte",
      "lv": "Plněné"
    },
    "partizipVergangenheit": {
      "de": "gesteckt",
      "lv": "Plněné"
    }
  },
  {
    "infinitiv": {
      "de": "stehen",
      "lv": "Stát"
    },
    "praesens": {
      "de": "er steht",
      "lv": "On stojí"
    },
    "imperfektIndikativ": {
      "de": "er stand",
      "lv": "Stál"
    },
    "imperfektKonjunktiv": {
      "de": "er stände / er stünde",
      "lv": "Stál by"
    },
    "partizipVergangenheit": {
      "de": "gestanden",
      "lv": "Stojící"
    }
  },
  {
    "infinitiv": {
      "de": "stehlen",
      "lv": "Krást"
    },
    "praesens": {
      "de": "er stiehlt",
      "lv": "Krade"
    },
    "imperfektIndikativ": {
      "de": "er stahl",
      "lv": "Ukradl"
    },
    "imperfektKonjunktiv": {
      "de": "er stöhle / er stähle",
      "lv": "Ukradl by"
    },
    "partizipVergangenheit": {
      "de": "gestohlen",
      "lv": "Ukradený"
    }
  },
  {
    "infinitiv": {
      "de": "steigen",
      "lv": "Lézt"
    },
    "praesens": {
      "de": "er steigt",
      "lv": "Leze"
    },
    "imperfektIndikativ": {
      "de": "er stieg",
      "lv": "Vylezl"
    },
    "imperfektKonjunktiv": {
      "de": "er stiege",
      "lv": "Lezl by"
    },
    "partizipVergangenheit": {
      "de": "gestiegen (er ist)",
      "lv": "Vylezl"
    }
  },
  {
    "infinitiv": {
      "de": "sterben",
      "lv": "Zemřít"
    },
    "praesens": {
      "de": "er stirbt",
      "lv": "On umírá"
    },
    "imperfektIndikativ": {
      "de": "er starb",
      "lv": "Zemřel"
    },
    "imperfektKonjunktiv": {
      "de": "er stürbe",
      "lv": "Zemřel by"
    },
    "partizipVergangenheit": {
      "de": "gestorben (er ist)",
      "lv": "Mrtvý"
    }
  },
  {
    "infinitiv": {
      "de": "stieben",
      "lv": "Pěna / víření"
    },
    "praesens": {
      "de": "es stiebt",
      "lv": "Fouká"
    },
    "imperfektIndikativ": {
      "de": "stob vai stiebte",
      "lv": "Napěněný"
    },
    "imperfektKonjunktiv": {
      "de": "stob vai stiebte",
      "lv": "Napěněný"
    },
    "partizipVergangenheit": {
      "de": "gestoben vai gestiebt",
      "lv": "Rozmazlený"
    }
  },
  {
    "infinitiv": {
      "de": "stinken",
      "lv": "Vonět"
    },
    "praesens": {
      "de": "es stinkt",
      "lv": "Smrdí to"
    },
    "imperfektIndikativ": {
      "de": "stank",
      "lv": "Voněl"
    },
    "imperfektKonjunktiv": {
      "de": "stank",
      "lv": "Voněl"
    },
    "partizipVergangenheit": {
      "de": "gestunken",
      "lv": "Páchnoucí"
    }
  },
  {
    "infinitiv": {
      "de": "stoßen",
      "lv": "TAM"
    },
    "praesens": {
      "de": "er stößt",
      "lv": "Tlačí"
    },
    "imperfektIndikativ": {
      "de": "er stieß",
      "lv": "Zatlačil"
    },
    "imperfektKonjunktiv": {
      "de": "er stieße",
      "lv": "Tlačil"
    },
    "partizipVergangenheit": {
      "de": "gestoßen",
      "lv": "Tlačil"
    }
  },
  {
    "infinitiv": {
      "de": "streichen",
      "lv": "Barva / páska"
    },
    "praesens": {
      "de": "er streicht",
      "lv": "Maluje / pruhuje"
    },
    "imperfektIndikativ": {
      "de": "er strich",
      "lv": "Maloval / pruhoval"
    },
    "imperfektKonjunktiv": {
      "de": "er striche",
      "lv": "By maloval / svlékal"
    },
    "partizipVergangenheit": {
      "de": "gestrichen",
      "lv": "Malované / pruhované"
    }
  },
  {
    "infinitiv": {
      "de": "streiten",
      "lv": "Bojovat"
    },
    "praesens": {
      "de": "er streitet",
      "lv": "On bojuje"
    },
    "imperfektIndikativ": {
      "de": "er stritt",
      "lv": "Bojoval"
    },
    "imperfektKonjunktiv": {
      "de": "er stritte",
      "lv": "Bojoval by"
    },
    "partizipVergangenheit": {
      "de": "gestritten",
      "lv": "Bojoval"
    }
  },
  {
    "infinitiv": {
      "de": "tragen",
      "lv": "Nést"
    },
    "praesens": {
      "de": "er trägt",
      "lv": "On nese"
    },
    "imperfektIndikativ": {
      "de": "er trug",
      "lv": "Nesl"
    },
    "imperfektKonjunktiv": {
      "de": "er trüge",
      "lv": "Nesl by"
    },
    "partizipVergangenheit": {
      "de": "getragen",
      "lv": "Nesl"
    }
  },
  {
    "infinitiv": {
      "de": "treffen",
      "lv": "Setkat se"
    },
    "praesens": {
      "de": "er trifft",
      "lv": "Potkává"
    },
    "imperfektIndikativ": {
      "de": "er traf",
      "lv": "Setkal se"
    },
    "imperfektKonjunktiv": {
      "de": "er träfe",
      "lv": "Setkal by se"
    },
    "partizipVergangenheit": {
      "de": "getroffen",
      "lv": "Setkali"
    }
  },
  {
    "infinitiv": {
      "de": "treiben",
      "lv": "Honit"
    },
    "praesens": {
      "de": "er treibt",
      "lv": "On řídí"
    },
    "imperfektIndikativ": {
      "de": "er trieb",
      "lv": "Řídil"
    },
    "imperfektKonjunktiv": {
      "de": "er triebe",
      "lv": "Řídil by"
    },
    "partizipVergangenheit": {
      "de": "getrieben",
      "lv": "Honil"
    }
  },
  {
    "infinitiv": {
      "de": "treten",
      "lv": "Vstoupit / jít"
    },
    "praesens": {
      "de": "er tritt",
      "lv": "Vchází / odchází"
    },
    "imperfektIndikativ": {
      "de": "er trat",
      "lv": "Stál / chodil"
    },
    "imperfektKonjunktiv": {
      "de": "er träte",
      "lv": "Stál/šel by"
    },
    "partizipVergangenheit": {
      "de": "getreten (er ist)",
      "lv": "Stál / chodil"
    }
  },
  {
    "infinitiv": {
      "de": "trinken",
      "lv": "Pít"
    },
    "praesens": {
      "de": "er trinkt",
      "lv": "On pije"
    },
    "imperfektIndikativ": {
      "de": "er trank",
      "lv": "On pil"
    },
    "imperfektKonjunktiv": {
      "de": "er tränke",
      "lv": "Pil by"
    },
    "partizipVergangenheit": {
      "de": "getrunken",
      "lv": "Opilý"
    }
  },
  {
    "infinitiv": {
      "de": "trügen",
      "lv": "Podvádět"
    },
    "praesens": {
      "de": "er trögt",
      "lv": "Podvádí"
    },
    "imperfektIndikativ": {
      "de": "er trog",
      "lv": "Podváděl"
    },
    "imperfektKonjunktiv": {
      "de": "er tröge",
      "lv": "Podváděl by"
    },
    "partizipVergangenheit": {
      "de": "getrogen",
      "lv": "Podvedený"
    }
  },
  {
    "infinitiv": {
      "de": "tun",
      "lv": "Dělat"
    },
    "praesens": {
      "de": "er tut",
      "lv": "Dělá"
    },
    "imperfektIndikativ": {
      "de": "er tat",
      "lv": "Udělal"
    },
    "imperfektKonjunktiv": {
      "de": "er täte",
      "lv": "Udělal by to"
    },
    "partizipVergangenheit": {
      "de": "getan",
      "lv": "Hotovo"
    }
  },
  {
    "infinitiv": {
      "de": "verderben",
      "lv": "Poškodit"
    },
    "praesens": {
      "de": "er verdirbt",
      "lv": "On ničí"
    },
    "imperfektIndikativ": {
      "de": "er verdarb",
      "lv": "Poškodil"
    },
    "imperfektKonjunktiv": {
      "de": "er verdürbe",
      "lv": "Poškodil by"
    },
    "partizipVergangenheit": {
      "de": "verdorben",
      "lv": "Poškozené"
    }
  },
  {
    "infinitiv": {
      "de": "verdrießen",
      "lv": "Způsobit obtěžování"
    },
    "praesens": {
      "de": "er verdrießt",
      "lv": "Způsobuje obtěžování"
    },
    "imperfektIndikativ": {
      "de": "er verdross",
      "lv": "Způsobil nepříjemnost"
    },
    "imperfektKonjunktiv": {
      "de": "er verdrösse",
      "lv": "Způsobil by nepříjemnost"
    },
    "partizipVergangenheit": {
      "de": "verdrossen",
      "lv": "Naštvaný"
    }
  },
  {
    "infinitiv": {
      "de": "vergessen",
      "lv": "Zapomenout"
    },
    "praesens": {
      "de": "er vergisst",
      "lv": "Zapomíná"
    },
    "imperfektIndikativ": {
      "de": "er vergass",
      "lv": "Zapomněl"
    },
    "imperfektKonjunktiv": {
      "de": "er vergäße",
      "lv": "Zapomněl by"
    },
    "partizipVergangenheit": {
      "de": "vergessen",
      "lv": "Zapomenutý"
    }
  },
  {
    "infinitiv": {
      "de": "verlieren",
      "lv": "Prohrát"
    },
    "praesens": {
      "de": "er verliert",
      "lv": "Prohrává"
    },
    "imperfektIndikativ": {
      "de": "er verlor",
      "lv": "Prohrál"
    },
    "imperfektKonjunktiv": {
      "de": "er verlöre",
      "lv": "Prohrál by"
    },
    "partizipVergangenheit": {
      "de": "verloren",
      "lv": "Ztracený"
    }
  },
  {
    "infinitiv": {
      "de": "wachsen",
      "lv": "Růst"
    },
    "praesens": {
      "de": "er wächst",
      "lv": "On roste"
    },
    "imperfektIndikativ": {
      "de": "er wuchs",
      "lv": "Vyrůstal"
    },
    "imperfektKonjunktiv": {
      "de": "er wüchse",
      "lv": "Vyrostl by"
    },
    "partizipVergangenheit": {
      "de": "gewachsen (er ist)",
      "lv": "Vyrostl"
    }
  },
  {
    "infinitiv": {
      "de": "waschen",
      "lv": "Umýt se"
    },
    "praesens": {
      "de": "er wäscht",
      "lv": "Myje"
    },
    "imperfektIndikativ": {
      "de": "er wusch",
      "lv": "Umyl se"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsche",
      "lv": "Umyl by se"
    },
    "partizipVergangenheit": {
      "de": "gewaschen",
      "lv": "Vyprané"
    }
  },
  {
    "infinitiv": {
      "de": "weben",
      "lv": "Vazba"
    },
    "praesens": {
      "de": "er webt",
      "lv": "On tká"
    },
    "imperfektIndikativ": {
      "de": "wob",
      "lv": "Tkáň"
    },
    "imperfektKonjunktiv": {
      "de": "wob",
      "lv": "Tkáň"
    },
    "partizipVergangenheit": {
      "de": "gewoben",
      "lv": "Tkaný"
    }
  },
  {
    "infinitiv": {
      "de": "weichen",
      "lv": "Stáhnout se"
    },
    "praesens": {
      "de": "er weicht",
      "lv": "Ustoupí"
    },
    "imperfektIndikativ": {
      "de": "er wich",
      "lv": "Ustoupil"
    },
    "imperfektKonjunktiv": {
      "de": "er wiche",
      "lv": "Ustoupil by"
    },
    "partizipVergangenheit": {
      "de": "gewichen (er ist)",
      "lv": "Ustoupit"
    }
  },
  {
    "infinitiv": {
      "de": "weisen",
      "lv": "Show"
    },
    "praesens": {
      "de": "er weist",
      "lv": "On ukazuje"
    },
    "imperfektIndikativ": {
      "de": "er wies",
      "lv": "Ukázal"
    },
    "imperfektKonjunktiv": {
      "de": "er wiese",
      "lv": "Ukázal by"
    },
    "partizipVergangenheit": {
      "de": "gewiesen",
      "lv": "Zobrazeno"
    }
  },
  {
    "infinitiv": {
      "de": "wenden",
      "lv": "Upravit / oříznout"
    },
    "praesens": {
      "de": "er wendet",
      "lv": "Kroutí / obrací"
    },
    "imperfektIndikativ": {
      "de": "er wandte / es wendete",
      "lv": "Zkroutil / otočil"
    },
    "imperfektKonjunktiv": {
      "de": "er wendete",
      "lv": "By upravil / obrátil"
    },
    "partizipVergangenheit": {
      "de": "gewandt / gewendet",
      "lv": "Změněno / obráceno"
    }
  },
  {
    "infinitiv": {
      "de": "werben",
      "lv": "Navrhnout"
    },
    "praesens": {
      "de": "er wirbt",
      "lv": "Navrhuje"
    },
    "imperfektIndikativ": {
      "de": "er warb",
      "lv": "Navrhl"
    },
    "imperfektKonjunktiv": {
      "de": "er würbe",
      "lv": "Navrhl by"
    },
    "partizipVergangenheit": {
      "de": "geworben",
      "lv": "Navrženo"
    }
  },
  {
    "infinitiv": {
      "de": "werden",
      "lv": "Stát se"
    },
    "praesens": {
      "de": "er wird",
      "lv": "Stává se"
    },
    "imperfektIndikativ": {
      "de": "wurde",
      "lv": "Se stal"
    },
    "imperfektKonjunktiv": {
      "de": "wurde",
      "lv": "Se stal"
    },
    "partizipVergangenheit": {
      "de": "geworden",
      "lv": "Se stal"
    }
  },
  {
    "infinitiv": {
      "de": "werfen",
      "lv": "Hod"
    },
    "praesens": {
      "de": "er wirft",
      "lv": "Hází"
    },
    "imperfektIndikativ": {
      "de": "er warf",
      "lv": "Hodil"
    },
    "imperfektKonjunktiv": {
      "de": "er würfe",
      "lv": "Hodil"
    },
    "partizipVergangenheit": {
      "de": "geworfen",
      "lv": "Hozený"
    }
  },
  {
    "infinitiv": {
      "de": "wiegen",
      "lv": "Vážit"
    },
    "praesens": {
      "de": "er wiegt",
      "lv": "On váží"
    },
    "imperfektIndikativ": {
      "de": "er wog",
      "lv": "Vážil"
    },
    "imperfektKonjunktiv": {
      "de": "er wöge",
      "lv": "Vážil by"
    },
    "partizipVergangenheit": {
      "de": "gewogen",
      "lv": "Vážený"
    }
  },
  {
    "infinitiv": {
      "de": "winden",
      "lv": "Prýmek"
    },
    "praesens": {
      "de": "er windet",
      "lv": "On pin"
    },
    "imperfektIndikativ": {
      "de": "er wand",
      "lv": "Plete copánky"
    },
    "imperfektKonjunktiv": {
      "de": "er wände",
      "lv": "Zapletl by cop"
    },
    "partizipVergangenheit": {
      "de": "gewunden",
      "lv": "Pletené"
    }
  },
  {
    "infinitiv": {
      "de": "wissen",
      "lv": "Vědět"
    },
    "praesens": {
      "de": "er weiß",
      "lv": "Ví"
    },
    "imperfektIndikativ": {
      "de": "er wusste",
      "lv": "Věděl"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsste",
      "lv": "Věděl by"
    },
    "partizipVergangenheit": {
      "de": "gewusst",
      "lv": "Známý"
    }
  },
  {
    "infinitiv": {
      "de": "wollen",
      "lv": "Chtít"
    },
    "praesens": {
      "de": "er will",
      "lv": "Chce"
    },
    "imperfektIndikativ": {
      "de": "wollte",
      "lv": "Chtěl"
    },
    "imperfektKonjunktiv": {
      "de": "wollte",
      "lv": "Chtěl"
    },
    "partizipVergangenheit": {
      "de": "gewollt",
      "lv": "Chtěl"
    }
  },
  {
    "infinitiv": {
      "de": "wringen",
      "lv": "Vystřihnout / vymáčknout"
    },
    "praesens": {
      "de": "er wringt",
      "lv": "Vystřihne"
    },
    "imperfektIndikativ": {
      "de": "wrang",
      "lv": "Vystřihnout"
    },
    "imperfektKonjunktiv": {
      "de": "wrang",
      "lv": "Vystřihnout"
    },
    "partizipVergangenheit": {
      "de": "gewrungen",
      "lv": "Vystřihnout"
    }
  },
  {
    "infinitiv": {
      "de": "zeihen",
      "lv": "Obviňovat"
    },
    "praesens": {
      "de": "er zeiht",
      "lv": "Obviňuje"
    },
    "imperfektIndikativ": {
      "de": "zieh",
      "lv": "Obviňován"
    },
    "imperfektKonjunktiv": {
      "de": "zieh",
      "lv": "Obviňován"
    },
    "partizipVergangenheit": {
      "de": "geziehen",
      "lv": "Obviňován"
    }
  },
  {
    "infinitiv": {
      "de": "ziehen",
      "lv": "Tahat"
    },
    "praesens": {
      "de": "er zieht",
      "lv": "Táhne"
    },
    "imperfektIndikativ": {
      "de": "er zog",
      "lv": "Vytáhl"
    },
    "imperfektKonjunktiv": {
      "de": "er zöge",
      "lv": "Přetáhl by"
    },
    "partizipVergangenheit": {
      "de": "gezogen",
      "lv": "Přetáhl"
    }
  },
  {
    "infinitiv": {
      "de": "zwingen",
      "lv": "Donutit"
    },
    "praesens": {
      "de": "er zwingt",
      "lv": "On nutí"
    },
    "imperfektIndikativ": {
      "de": "er zwang",
      "lv": "Donutil"
    },
    "imperfektKonjunktiv": {
      "de": "er zwänge",
      "lv": "Nutil by"
    },
    "partizipVergangenheit": {
      "de": "gezwungen",
      "lv": "Nucený"
    }
  },
  {
    "infinitiv": {
      "de": "empfangen",
      "lv": "Přijímat"
    },
    "praesens": {
      "de": "er empfängt",
      "lv": "Přijímá"
    },
    "imperfektIndikativ": {
      "de": "er empfing",
      "lv": "Dostal"
    },
    "imperfektKonjunktiv": {
      "de": "er empfinge",
      "lv": "Obdržel by"
    },
    "partizipVergangenheit": {
      "de": "empfangen",
      "lv": "Přijaté"
    }
  },
  {
    "infinitiv": {
      "de": "erwägen",
      "lv": "Zvážit"
    },
    "praesens": {
      "de": "er erwägt",
      "lv": "Uvažuje"
    },
    "imperfektIndikativ": {
      "de": "er erwog",
      "lv": "Uvažoval"
    },
    "imperfektKonjunktiv": {
      "de": "er erwöge",
      "lv": "Zvážil by"
    },
    "partizipVergangenheit": {
      "de": "erwogen",
      "lv": "Zvážil"
    }
  },
  {
    "infinitiv": {
      "de": "fechten",
      "lv": "Bojovat"
    },
    "praesens": {
      "de": "er ficht",
      "lv": "On bojuje"
    },
    "imperfektIndikativ": {
      "de": "er focht",
      "lv": "Bojoval"
    },
    "imperfektKonjunktiv": {
      "de": "er föchte",
      "lv": "Bojoval by"
    },
    "partizipVergangenheit": {
      "de": "gefochten",
      "lv": "Bojoval"
    }
  },
  {
    "infinitiv": {
      "de": "flechten",
      "lv": "Prýmek"
    },
    "praesens": {
      "de": "er flicht",
      "lv": "On pin"
    },
    "imperfektIndikativ": {
      "de": "er flocht",
      "lv": "Plete copánky"
    },
    "imperfektKonjunktiv": {
      "de": "er flöchte",
      "lv": "Zapletl by cop"
    },
    "partizipVergangenheit": {
      "de": "geflochten",
      "lv": "Pletené"
    }
  },
  {
    "infinitiv": {
      "de": "hangen",
      "lv": "Pověsit"
    },
    "praesens": {
      "de": "er hängt",
      "lv": "On visí"
    },
    "imperfektIndikativ": {
      "de": "er hing",
      "lv": "Visel"
    },
    "imperfektKonjunktiv": {
      "de": "er hinge",
      "lv": "Oběsil by se"
    },
    "partizipVergangenheit": {
      "de": "gehangen",
      "lv": "Vydrž"
    }
  },
  {
    "infinitiv": {
      "de": "spalten",
      "lv": "Rozdělit se"
    },
    "praesens": {
      "de": "er spaltet",
      "lv": "Rozdělí se"
    },
    "imperfektIndikativ": {
      "de": "er spaltete",
      "lv": "Rozdělil se"
    },
    "imperfektKonjunktiv": {
      "de": "er spaltete",
      "lv": "Rozdělil by se"
    },
    "partizipVergangenheit": {
      "de": "gespalten",
      "lv": "Rozdělit"
    }
  },
  {
    "infinitiv": {
      "de": "verzeihen",
      "lv": "Odpustit"
    },
    "praesens": {
      "de": "er verzeiht",
      "lv": "Odpouští"
    },
    "imperfektIndikativ": {
      "de": "er verzieh",
      "lv": "Odpustil"
    },
    "imperfektKonjunktiv": {
      "de": "er verziehe",
      "lv": "Odpustil by"
    },
    "partizipVergangenheit": {
      "de": "verziehen",
      "lv": "Odpuštěno"
    }
  }
];

window.VERB_ENTRIES = VERB_ENTRIES;

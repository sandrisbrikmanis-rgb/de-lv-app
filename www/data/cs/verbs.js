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
      "lv": "Pečené"
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
      "lv": "Nařízeno"
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
      "lv": "Začato"
    }
  },
  {
    "infinitiv": {
      "de": "beißen",
      "lv": "Kousat"
    },
    "praesens": {
      "de": "er beißt",
      "lv": "Kouše"
    },
    "imperfektIndikativ": {
      "de": "er biss",
      "lv": "Kousal"
    },
    "imperfektKonjunktiv": {
      "de": "er bisse",
      "lv": "Kousal by"
    },
    "partizipVergangenheit": {
      "de": "gebissen",
      "lv": "Pokousaný"
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
      "lv": "Prasknout"
    },
    "praesens": {
      "de": "er birst",
      "lv": "Praskne"
    },
    "imperfektIndikativ": {
      "de": "er barst / er borst",
      "lv": "Praskl"
    },
    "imperfektKonjunktiv": {
      "de": "er bärste / er börste",
      "lv": "Praskl by"
    },
    "partizipVergangenheit": {
      "de": "geborsten (er ist)",
      "lv": "Prasklý"
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
      "lv": "Pohnul"
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
      "lv": "Ohýbat"
    },
    "praesens": {
      "de": "er biegt",
      "lv": "Ohýbá"
    },
    "imperfektIndikativ": {
      "de": "er bog",
      "lv": "Ohýbal"
    },
    "imperfektKonjunktiv": {
      "de": "er böge",
      "lv": "Ohýbal by"
    },
    "partizipVergangenheit": {
      "de": "gebogen",
      "lv": "Ohnutý"
    }
  },
  {
    "infinitiv": {
      "de": "bieten",
      "lv": "Nabízet"
    },
    "praesens": {
      "de": "er bietet",
      "lv": "Nabízí"
    },
    "imperfektIndikativ": {
      "de": "er bot",
      "lv": "Nabízel"
    },
    "imperfektKonjunktiv": {
      "de": "er böte",
      "lv": "Nabízel by"
    },
    "partizipVergangenheit": {
      "de": "geboten",
      "lv": "Nabídnutý"
    }
  },
  {
    "infinitiv": {
      "de": "binden",
      "lv": "Vázat"
    },
    "praesens": {
      "de": "er bindet",
      "lv": "Váže"
    },
    "imperfektIndikativ": {
      "de": "er band",
      "lv": "Vázal"
    },
    "imperfektKonjunktiv": {
      "de": "er bände",
      "lv": "Vázal by"
    },
    "partizipVergangenheit": {
      "de": "gebunden",
      "lv": "Vázaný"
    }
  },
  {
    "infinitiv": {
      "de": "bitten",
      "lv": "Prosit"
    },
    "praesens": {
      "de": "er bittet",
      "lv": "Prosí"
    },
    "imperfektIndikativ": {
      "de": "er bat",
      "lv": "Prosil"
    },
    "imperfektKonjunktiv": {
      "de": "er bäte",
      "lv": "Prosil by"
    },
    "partizipVergangenheit": {
      "de": "gebeten",
      "lv": "Prošený"
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
      "lv": "Foukal"
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
      "lv": "Kvasilo to"
    },
    "imperfektKonjunktiv": {
      "de": "es göre / es gärte",
      "lv": "Kvasilo by to"
    },
    "partizipVergangenheit": {
      "de": "gegoren / gegärt",
      "lv": "Vykvašené"
    }
  },
  {
    "infinitiv": {
      "de": "gebären",
      "lv": "Porodit"
    },
    "praesens": {
      "de": "sie gebiert",
      "lv": "Rodí"
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
      "lv": "Narozený"
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
      "lv": "Podařilo se to"
    },
    "imperfektKonjunktiv": {
      "de": "es gelänge",
      "lv": "Podařilo by se to"
    },
    "partizipVergangenheit": {
      "de": "gelungen (es ist)",
      "lv": "Podařilo se"
    }
  },
  {
    "infinitiv": {
      "de": "gelten",
      "lv": "Platit"
    },
    "praesens": {
      "de": "er gilt",
      "lv": "Platí"
    },
    "imperfektIndikativ": {
      "de": "er galt",
      "lv": "Platil"
    },
    "imperfektKonjunktiv": {
      "de": "er gölte / es gälte",
      "lv": "Platil by"
    },
    "partizipVergangenheit": {
      "de": "gegolten",
      "lv": "Platilo"
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
      "lv": "Uzdravený"
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
      "lv": "Děje se to"
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
      "lv": "Stalo se"
    }
  },
  {
    "infinitiv": {
      "de": "gießen",
      "lv": "Lít"
    },
    "praesens": {
      "de": "er gießt",
      "lv": "Nalévá"
    },
    "imperfektIndikativ": {
      "de": "er goss",
      "lv": "Lil"
    },
    "imperfektKonjunktiv": {
      "de": "er gösse",
      "lv": "Lil by"
    },
    "partizipVergangenheit": {
      "de": "gegossen",
      "lv": "Litý"
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
      "lv": "Podobal se"
    },
    "imperfektKonjunktiv": {
      "de": "er gliche",
      "lv": "Podobal by se"
    },
    "partizipVergangenheit": {
      "de": "geglichen",
      "lv": "Podobný"
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
      "lv": "Klouzal"
    }
  },
  {
    "infinitiv": {
      "de": "glimmen",
      "lv": "Žhnout"
    },
    "praesens": {
      "de": "er glimmt",
      "lv": "Žhne"
    },
    "imperfektIndikativ": {
      "de": "er glimmte / glomm",
      "lv": "Žhnul"
    },
    "imperfektKonjunktiv": {
      "de": "er glimmte",
      "lv": "Žhnul by"
    },
    "partizipVergangenheit": {
      "de": "geglimmt / geglommen",
      "lv": "Žhnoucí"
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
      "lv": "Vykopaný"
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
      "lv": "Chytil by"
    },
    "partizipVergangenheit": {
      "de": "gegriffen",
      "lv": "Chycený"
    }
  },
  {
    "infinitiv": {
      "de": "hauen",
      "lv": "Sekat"
    },
    "praesens": {
      "de": "er haut",
      "lv": "Seká"
    },
    "imperfektIndikativ": {
      "de": "er hieb",
      "lv": "Sekal"
    },
    "imperfektKonjunktiv": {
      "de": "er hiebe",
      "lv": "Sekal by"
    },
    "partizipVergangenheit": {
      "de": "gehauen",
      "lv": "Sekaný"
    }
  },
  {
    "infinitiv": {
      "de": "heben",
      "lv": "Zvedat"
    },
    "praesens": {
      "de": "er hebt",
      "lv": "Zvedá"
    },
    "imperfektIndikativ": {
      "de": "er hob",
      "lv": "Zvedal"
    },
    "imperfektKonjunktiv": {
      "de": "er höbe",
      "lv": "Zvedal by"
    },
    "partizipVergangenheit": {
      "de": "gehoben",
      "lv": "Zvednutý"
    }
  },
  {
    "infinitiv": {
      "de": "kennen",
      "lv": "Znát"
    },
    "praesens": {
      "de": "er kennt",
      "lv": "Zná"
    },
    "imperfektIndikativ": {
      "de": "kannte",
      "lv": "Znal"
    },
    "imperfektKonjunktiv": {
      "de": "kannte",
      "lv": "Znal by"
    },
    "partizipVergangenheit": {
      "de": "gekannt",
      "lv": "Známý"
    }
  },
  {
    "infinitiv": {
      "de": "klingen",
      "lv": "Znít"
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
      "lv": "Štípe"
    },
    "imperfektIndikativ": {
      "de": "er kniff",
      "lv": "Štípl"
    },
    "imperfektKonjunktiv": {
      "de": "er kniffe",
      "lv": "Štípl by"
    },
    "partizipVergangenheit": {
      "de": "gekniffen",
      "lv": "Štípnutý"
    }
  },
  {
    "infinitiv": {
      "de": "bleiben",
      "lv": "Zůstat"
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
      "lv": "Zůstal"
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
      "lv": "Vybledl"
    },
    "imperfektKonjunktiv": {
      "de": "blich",
      "lv": "Vybledl by"
    },
    "partizipVergangenheit": {
      "de": "geblichen",
      "lv": "Vybledlý"
    }
  },
  {
    "infinitiv": {
      "de": "braten",
      "lv": "Smažit"
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
      "lv": "Lámat"
    },
    "praesens": {
      "de": "er bricht",
      "lv": "Láme"
    },
    "imperfektIndikativ": {
      "de": "er brach",
      "lv": "Lámal"
    },
    "imperfektKonjunktiv": {
      "de": "er bräche",
      "lv": "Lámal by"
    },
    "partizipVergangenheit": {
      "de": "gebrochen",
      "lv": "Zlomený"
    }
  },
  {
    "infinitiv": {
      "de": "brennen",
      "lv": "Hořet"
    },
    "praesens": {
      "de": "er brennt",
      "lv": "Hoří"
    },
    "imperfektIndikativ": {
      "de": "brannte",
      "lv": "Hořel"
    },
    "imperfektKonjunktiv": {
      "de": "brannte",
      "lv": "Hořel by"
    },
    "partizipVergangenheit": {
      "de": "gebrannt",
      "lv": "Spálený"
    }
  },
  {
    "infinitiv": {
      "de": "bringen",
      "lv": "Přinést"
    },
    "praesens": {
      "de": "er bringt",
      "lv": "Přináší"
    },
    "imperfektIndikativ": {
      "de": "er brachte",
      "lv": "Přinesl"
    },
    "imperfektKonjunktiv": {
      "de": "er brächte",
      "lv": "Přinesl by"
    },
    "partizipVergangenheit": {
      "de": "gebracht",
      "lv": "Přinesený"
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
      "lv": "Myšlený"
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
      "lv": "Najal by"
    },
    "partizipVergangenheit": {
      "de": "gedungen",
      "lv": "Najatý"
    }
  },
  {
    "infinitiv": {
      "de": "dreschen",
      "lv": "Mlátit"
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
      "lv": "Mlátil by"
    },
    "partizipVergangenheit": {
      "de": "gedroschen",
      "lv": "Vymlácený"
    }
  },
  {
    "infinitiv": {
      "de": "dringen",
      "lv": "Vtrhnout do"
    },
    "praesens": {
      "de": "er dringt",
      "lv": "Vniká"
    },
    "imperfektIndikativ": {
      "de": "er drang",
      "lv": "Vnikl"
    },
    "imperfektKonjunktiv": {
      "de": "er dränge",
      "lv": "Vnikl by"
    },
    "partizipVergangenheit": {
      "de": "gedrungen (er ist)",
      "lv": "Vnikl"
    }
  },
  {
    "infinitiv": {
      "de": "dünken",
      "lv": "Zdát se"
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
      "lv": "Zdálo by se"
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
      "lv": "Smí"
    },
    "imperfektIndikativ": {
      "de": "durfte",
      "lv": "Směl"
    },
    "imperfektKonjunktiv": {
      "de": "durfte",
      "lv": "Směl by"
    },
    "partizipVergangenheit": {
      "de": "gedurft",
      "lv": "Směl"
    }
  },
  {
    "infinitiv": {
      "de": "empfehlen",
      "lv": "Doporučit"
    },
    "praesens": {
      "de": "er empfiehlt",
      "lv": "Doporučuje"
    },
    "imperfektIndikativ": {
      "de": "er empfahl",
      "lv": "Doporučil"
    },
    "imperfektKonjunktiv": {
      "de": "er empfähle / er empföhle",
      "lv": "Doporučil by"
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
      "lv": "Cítil by"
    },
    "partizipVergangenheit": {
      "de": "empfunden",
      "lv": "Pociťovaný"
    }
  },
  {
    "infinitiv": {
      "de": "erlöschen",
      "lv": "Zhasnout"
    },
    "praesens": {
      "de": "er erlischt",
      "lv": "Zhasíná"
    },
    "imperfektIndikativ": {
      "de": "er erlosch",
      "lv": "Zhasl"
    },
    "imperfektKonjunktiv": {
      "de": "er erlösche",
      "lv": "Zhasl by"
    },
    "partizipVergangenheit": {
      "de": "erloschen (er ist)",
      "lv": "Vyhasl"
    }
  },
  {
    "infinitiv": {
      "de": "erschrecken",
      "lv": "Leknout se"
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
      "lv": "Leknul by se"
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
      "lv": "Snědený"
    }
  },
  {
    "infinitiv": {
      "de": "fahren",
      "lv": "Jet"
    },
    "praesens": {
      "de": "er fährt",
      "lv": "Jede"
    },
    "imperfektIndikativ": {
      "de": "er fuhr",
      "lv": "Jel"
    },
    "imperfektKonjunktiv": {
      "de": "er führe",
      "lv": "Jel by"
    },
    "partizipVergangenheit": {
      "de": "gefahren (er ist)",
      "lv": "Jel / odjel"
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
      "lv": "Chytil by"
    },
    "partizipVergangenheit": {
      "de": "gefangen",
      "lv": "Chycený"
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
      "lv": "Teče"
    },
    "imperfektIndikativ": {
      "de": "er floss",
      "lv": "Tekl"
    },
    "imperfektKonjunktiv": {
      "de": "er flösse",
      "lv": "Tekl by"
    },
    "partizipVergangenheit": {
      "de": "geflossen (er ist)",
      "lv": "Tekl"
    }
  },
  {
    "infinitiv": {
      "de": "fressen",
      "lv": "Žrát"
    },
    "praesens": {
      "de": "er frisst",
      "lv": "Žere"
    },
    "imperfektIndikativ": {
      "de": "er frass",
      "lv": "Žral"
    },
    "imperfektKonjunktiv": {
      "de": "er fräße",
      "lv": "Žral by"
    },
    "partizipVergangenheit": {
      "de": "gefressen",
      "lv": "Sežraný"
    }
  },
  {
    "infinitiv": {
      "de": "frieren",
      "lv": "Mrznout"
    },
    "praesens": {
      "de": "er friert",
      "lv": "Mrzne"
    },
    "imperfektIndikativ": {
      "de": "er fror",
      "lv": "Mrzl"
    },
    "imperfektKonjunktiv": {
      "de": "er fröre",
      "lv": "Mrzl by"
    },
    "partizipVergangenheit": {
      "de": "gefroren",
      "lv": "Zmrzlý"
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
      "lv": "Prospívat"
    },
    "praesens": {
      "de": "er gedeiht",
      "lv": "Prospívá"
    },
    "imperfektIndikativ": {
      "de": "er gedieh",
      "lv": "Prospíval"
    },
    "imperfektKonjunktiv": {
      "de": "er gediehe",
      "lv": "Prospíval by"
    },
    "partizipVergangenheit": {
      "de": "gediehen (er ist)",
      "lv": "Prospíval"
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
      "lv": "Šel"
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
      "lv": "Mít"
    },
    "praesens": {
      "de": "er hat",
      "lv": "Má"
    },
    "imperfektIndikativ": {
      "de": "hatte",
      "lv": "Měl"
    },
    "imperfektKonjunktiv": {
      "de": "hatte",
      "lv": "Měl by"
    },
    "partizipVergangenheit": {
      "de": "gehabt",
      "lv": "Měl"
    }
  },
  {
    "infinitiv": {
      "de": "halten",
      "lv": "Držet"
    },
    "praesens": {
      "de": "er hält",
      "lv": "Drží"
    },
    "imperfektIndikativ": {
      "de": "er hielt",
      "lv": "Držel"
    },
    "imperfektKonjunktiv": {
      "de": "er hielte",
      "lv": "Držel by"
    },
    "partizipVergangenheit": {
      "de": "gehalten",
      "lv": "Držený"
    }
  },
  {
    "infinitiv": {
      "de": "heißen",
      "lv": "Jmenovat se"
    },
    "praesens": {
      "de": "er heißt",
      "lv": "Jmenuje se"
    },
    "imperfektIndikativ": {
      "de": "er hieß",
      "lv": "Jmenoval se"
    },
    "imperfektKonjunktiv": {
      "de": "er hieße",
      "lv": "Jmenoval by se"
    },
    "partizipVergangenheit": {
      "de": "geheißen",
      "lv": "Jmenoval se"
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
      "lv": "Mohl by"
    },
    "partizipVergangenheit": {
      "de": "gekonnt",
      "lv": "Mohl"
    }
  },
  {
    "infinitiv": {
      "de": "kriechen",
      "lv": "Lézt"
    },
    "praesens": {
      "de": "er kriecht",
      "lv": "Leze"
    },
    "imperfektIndikativ": {
      "de": "er kroch",
      "lv": "Lezl"
    },
    "imperfektKonjunktiv": {
      "de": "er kröche",
      "lv": "Lezl by"
    },
    "partizipVergangenheit": {
      "de": "gekrochen (er ist)",
      "lv": "Lezl"
    }
  },
  {
    "infinitiv": {
      "de": "laden",
      "lv": "Nakládat / zvát"
    },
    "praesens": {
      "de": "er lädt",
      "lv": "Nakládá / zve"
    },
    "imperfektIndikativ": {
      "de": "er lud",
      "lv": "Naložil / pozval"
    },
    "imperfektKonjunktiv": {
      "de": "er lüde",
      "lv": "Naložil by / pozval by"
    },
    "partizipVergangenheit": {
      "de": "geladen",
      "lv": "Naložený / pozvaný"
    }
  },
  {
    "infinitiv": {
      "de": "lassen",
      "lv": "Nechat"
    },
    "praesens": {
      "de": "er lässt",
      "lv": "Nechá / dovolí"
    },
    "imperfektIndikativ": {
      "de": "er ließ",
      "lv": "Nechal / dovolil"
    },
    "imperfektKonjunktiv": {
      "de": "er ließe",
      "lv": "Nechal by / dovolil by"
    },
    "partizipVergangenheit": {
      "de": "gelassen",
      "lv": "Nechaný / dovolený"
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
      "lv": "Půjčuje / vypůjčuje si"
    },
    "imperfektIndikativ": {
      "de": "er lieh",
      "lv": "Půjčil / vypůjčil si"
    },
    "imperfektKonjunktiv": {
      "de": "er liehe",
      "lv": "Půjčil by / vypůjčil by si"
    },
    "partizipVergangenheit": {
      "de": "geliehen",
      "lv": "Půjčený / vypůjčený"
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
      "lv": "Čtený"
    }
  },
  {
    "infinitiv": {
      "de": "liegen",
      "lv": "Ležet"
    },
    "praesens": {
      "de": "er liegt",
      "lv": "Leží"
    },
    "imperfektIndikativ": {
      "de": "er lag",
      "lv": "Ležel"
    },
    "imperfektKonjunktiv": {
      "de": "er läge",
      "lv": "Ležel by"
    },
    "partizipVergangenheit": {
      "de": "gelegen",
      "lv": "Ležel"
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
      "lv": "Mlít"
    },
    "praesens": {
      "de": "er mahlt",
      "lv": "Mele"
    },
    "imperfektIndikativ": {
      "de": "er mahlte",
      "lv": "Mlel"
    },
    "imperfektKonjunktiv": {
      "de": "er malte",
      "lv": "Mlel by"
    },
    "partizipVergangenheit": {
      "de": "gemahlen",
      "lv": "Mletý"
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
      "lv": "Vyhýbal by se"
    },
    "partizipVergangenheit": {
      "de": "gemieden",
      "lv": "Vyhýbaný"
    }
  },
  {
    "infinitiv": {
      "de": "melken",
      "lv": "Dojit"
    },
    "praesens": {
      "de": "er milkt / er melkt",
      "lv": "Dojí"
    },
    "imperfektIndikativ": {
      "de": "er molk / er melkte",
      "lv": "Dojil"
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
      "lv": "Nepodařilo se"
    },
    "imperfektKonjunktiv": {
      "de": "misslang",
      "lv": "Nepodařilo by se"
    },
    "partizipVergangenheit": {
      "de": "misslungen",
      "lv": "Nezdařený"
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
      "lv": "Měl rád"
    },
    "imperfektKonjunktiv": {
      "de": "mochte",
      "lv": "Měl by rád"
    },
    "partizipVergangenheit": {
      "de": "gemocht",
      "lv": "Měl rád"
    }
  },
  {
    "infinitiv": {
      "de": "müssen",
      "lv": "Muset"
    },
    "praesens": {
      "de": "er muss",
      "lv": "Musí"
    },
    "imperfektIndikativ": {
      "de": "musste",
      "lv": "Musel"
    },
    "imperfektKonjunktiv": {
      "de": "musste",
      "lv": "Musel by"
    },
    "partizipVergangenheit": {
      "de": "gemusst",
      "lv": "Musel"
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
      "lv": "Vzato"
    }
  },
  {
    "infinitiv": {
      "de": "nennen",
      "lv": "Jmenovat"
    },
    "praesens": {
      "de": "er nennt",
      "lv": "Jmenuje"
    },
    "imperfektIndikativ": {
      "de": "er nannte",
      "lv": "Jmenoval"
    },
    "imperfektKonjunktiv": {
      "de": "er nennte",
      "lv": "Jmenoval by"
    },
    "partizipVergangenheit": {
      "de": "genannt",
      "lv": "Jmenovaný"
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
      "lv": "Pečoval"
    },
    "imperfektKonjunktiv": {
      "de": "pflegte vai pflog",
      "lv": "Pečoval by"
    },
    "partizipVergangenheit": {
      "de": "gepflegt vai gepflogen",
      "lv": "Upravený"
    }
  },
  {
    "infinitiv": {
      "de": "preisen",
      "lv": "Chválit"
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
      "lv": "Chválený"
    }
  },
  {
    "infinitiv": {
      "de": "quellen",
      "lv": "Bobtnat"
    },
    "praesens": {
      "de": "er quillt",
      "lv": "Bobtná"
    },
    "imperfektIndikativ": {
      "de": "er quoll",
      "lv": "Bobtnal"
    },
    "imperfektKonjunktiv": {
      "de": "er quölle",
      "lv": "Bobtnal by"
    },
    "partizipVergangenheit": {
      "de": "gequollen (er ist)",
      "lv": "Nabobtnalý"
    }
  },
  {
    "infinitiv": {
      "de": "raten",
      "lv": "Radit / hádat"
    },
    "praesens": {
      "de": "er rät",
      "lv": "Radí / hádá"
    },
    "imperfektIndikativ": {
      "de": "er riet",
      "lv": "Radil / hádal"
    },
    "imperfektKonjunktiv": {
      "de": "er riete",
      "lv": "Radil by / hádal by"
    },
    "partizipVergangenheit": {
      "de": "geraten",
      "lv": "Razený / hádaný"
    }
  },
  {
    "infinitiv": {
      "de": "reiben",
      "lv": "Třít"
    },
    "praesens": {
      "de": "er reibt",
      "lv": "Tře"
    },
    "imperfektIndikativ": {
      "de": "er rieb",
      "lv": "Třel"
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
      "lv": "Trhat"
    },
    "praesens": {
      "de": "er reißt",
      "lv": "Trhá"
    },
    "imperfektIndikativ": {
      "de": "er riss",
      "lv": "Trhal"
    },
    "imperfektKonjunktiv": {
      "de": "er risse",
      "lv": "Trhal by"
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
      "lv": "Čichat"
    },
    "praesens": {
      "de": "er riecht",
      "lv": "On voní"
    },
    "imperfektIndikativ": {
      "de": "er roch",
      "lv": "Čichal"
    },
    "imperfektKonjunktiv": {
      "de": "er röche",
      "lv": "Čichal by"
    },
    "partizipVergangenheit": {
      "de": "gerochen",
      "lv": "Čichal"
    }
  },
  {
    "infinitiv": {
      "de": "ringen",
      "lv": "Zápasit"
    },
    "praesens": {
      "de": "er ringt",
      "lv": "Zápasí"
    },
    "imperfektIndikativ": {
      "de": "er rang",
      "lv": "Zápasil"
    },
    "imperfektKonjunktiv": {
      "de": "er ränge",
      "lv": "Zápasil by"
    },
    "partizipVergangenheit": {
      "de": "gerungen",
      "lv": "Zápasil"
    }
  },
  {
    "infinitiv": {
      "de": "rinnen",
      "lv": "Proudit"
    },
    "praesens": {
      "de": "er rinnt",
      "lv": "Teče"
    },
    "imperfektIndikativ": {
      "de": "er rann",
      "lv": "Tekl"
    },
    "imperfektKonjunktiv": {
      "de": "er ränne / er rönne",
      "lv": "Tekl by"
    },
    "partizipVergangenheit": {
      "de": "geronnen (er ist)",
      "lv": "Tekl / srazil se"
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
      "lv": "Solit"
    },
    "praesens": {
      "de": "er salzt",
      "lv": "Solí"
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
      "lv": "Chlastat / pít"
    },
    "praesens": {
      "de": "er säuft",
      "lv": "Chlastá / pije"
    },
    "imperfektIndikativ": {
      "de": "er soff",
      "lv": "Chlastal / pil"
    },
    "imperfektKonjunktiv": {
      "de": "er söffe",
      "lv": "Chlastal by / pil by"
    },
    "partizipVergangenheit": {
      "de": "gesoffen",
      "lv": "Chlastal / pil"
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
      "lv": "Vytvořený"
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
      "lv": "Zaznělo by"
    },
    "partizipVergangenheit": {
      "de": "geschallt",
      "lv": "Zazněl"
    }
  },
  {
    "infinitiv": {
      "de": "scheiden",
      "lv": "Rozdělit / rozvést se"
    },
    "praesens": {
      "de": "er scheidet",
      "lv": "Rozvádí se / rozděluje"
    },
    "imperfektIndikativ": {
      "de": "er schied",
      "lv": "Rozvedl se / rozdělil"
    },
    "imperfektKonjunktiv": {
      "de": "er schiede",
      "lv": "Rozvedl by se / rozdělil by"
    },
    "partizipVergangenheit": {
      "de": "geschieden (er hat / er ist)",
      "lv": "Oddělený / rozvedený"
    }
  },
  {
    "infinitiv": {
      "de": "scheinen",
      "lv": "Svítit / zdát se"
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
      "lv": "Svítit by / zdál by se"
    },
    "partizipVergangenheit": {
      "de": "geschienen",
      "lv": "Zářil / zdálo se"
    }
  },
  {
    "infinitiv": {
      "de": "schelten",
      "lv": "Kárat / vynadat"
    },
    "praesens": {
      "de": "er schilt",
      "lv": "Nadává"
    },
    "imperfektIndikativ": {
      "de": "er schalt",
      "lv": "Vynadal"
    },
    "imperfektKonjunktiv": {
      "de": "er schölte / er schälte",
      "lv": "Vynadal by / káral by"
    },
    "partizipVergangenheit": {
      "de": "gescholten",
      "lv": "Káraný"
    }
  },
  {
    "infinitiv": {
      "de": "scheren",
      "lv": "Stříhat / holit"
    },
    "praesens": {
      "de": "er schert",
      "lv": "Stříhá"
    },
    "imperfektIndikativ": {
      "de": "schor vai scherte",
      "lv": "Stříhal"
    },
    "imperfektKonjunktiv": {
      "de": "schor vai scherte",
      "lv": "Stříhal by"
    },
    "partizipVergangenheit": {
      "de": "geschoren vai geschert",
      "lv": "Ostříhaný"
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
      "lv": "Tlačený"
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
      "lv": "Zastřelený"
    }
  },
  {
    "infinitiv": {
      "de": "schinden",
      "lv": "Mučit / trápit"
    },
    "praesens": {
      "de": "er schindet",
      "lv": "Mučí"
    },
    "imperfektIndikativ": {
      "de": "schindete",
      "lv": "Mučil"
    },
    "imperfektKonjunktiv": {
      "de": "schindete",
      "lv": "Mučil by"
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
      "lv": "Bít / udeřit"
    },
    "praesens": {
      "de": "er schlägt",
      "lv": "Bije"
    },
    "imperfektIndikativ": {
      "de": "er schlug",
      "lv": "Udeřil"
    },
    "imperfektKonjunktiv": {
      "de": "er schlüge",
      "lv": "Udeřil by"
    },
    "partizipVergangenheit": {
      "de": "geschlagen",
      "lv": "Zbitý"
    }
  },
  {
    "infinitiv": {
      "de": "schleichen",
      "lv": "Plížit se"
    },
    "praesens": {
      "de": "er schleicht",
      "lv": "Plíží se"
    },
    "imperfektIndikativ": {
      "de": "er schlich",
      "lv": "Plížil se"
    },
    "imperfektKonjunktiv": {
      "de": "er schliche",
      "lv": "Plížil by se"
    },
    "partizipVergangenheit": {
      "de": "geschlichen (er ist)",
      "lv": "Plížil se"
    }
  },
  {
    "infinitiv": {
      "de": "schleifen",
      "lv": "Brousit"
    },
    "praesens": {
      "de": "er schleift",
      "lv": "Brousí"
    },
    "imperfektIndikativ": {
      "de": "er schliff",
      "lv": "Brousil"
    },
    "imperfektKonjunktiv": {
      "de": "er schliffe",
      "lv": "Brousil by"
    },
    "partizipVergangenheit": {
      "de": "geschliffen",
      "lv": "Broušený"
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
      "lv": "Zavřel by"
    },
    "partizipVergangenheit": {
      "de": "geschlossen",
      "lv": "Zavřený"
    }
  },
  {
    "infinitiv": {
      "de": "schlingen",
      "lv": "Hltat"
    },
    "praesens": {
      "de": "er schlingt",
      "lv": "Hltá"
    },
    "imperfektIndikativ": {
      "de": "er schlang",
      "lv": "Hltal"
    },
    "imperfektKonjunktiv": {
      "de": "er schlänge",
      "lv": "Hltal by"
    },
    "partizipVergangenheit": {
      "de": "geschlungen",
      "lv": "Hltal"
    }
  },
  {
    "infinitiv": {
      "de": "schmeißen",
      "lv": "Hodit"
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
      "lv": "Hodil by"
    },
    "partizipVergangenheit": {
      "de": "geschmissen",
      "lv": "Hozený"
    }
  },
  {
    "infinitiv": {
      "de": "schmelzen",
      "lv": "Tát"
    },
    "praesens": {
      "de": "er schmilzt",
      "lv": "Taje"
    },
    "imperfektIndikativ": {
      "de": "er schmolz",
      "lv": "Tál"
    },
    "imperfektKonjunktiv": {
      "de": "er schmölze",
      "lv": "Tál by"
    },
    "partizipVergangenheit": {
      "de": "geschmolzen (er ist)",
      "lv": "Roztavený"
    }
  },
  {
    "infinitiv": {
      "de": "schnauben",
      "lv": "Funět / odfrkávat"
    },
    "praesens": {
      "de": "er schnaubt",
      "lv": "Odfrkuje si"
    },
    "imperfektIndikativ": {
      "de": "schnaubte vai schnob",
      "lv": "Odfrkl si"
    },
    "imperfektKonjunktiv": {
      "de": "schnaubte vai schnob",
      "lv": "Odfrkl by si"
    },
    "partizipVergangenheit": {
      "de": "geschnaubt vai geschnoben",
      "lv": "Odfrkl si"
    }
  },
  {
    "infinitiv": {
      "de": "schneiden",
      "lv": "Řezat"
    },
    "praesens": {
      "de": "er schneidet",
      "lv": "Řeže"
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
      "lv": "Řezaný"
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
      "lv": "Kráčet"
    },
    "praesens": {
      "de": "er schreitet",
      "lv": "Kráčí"
    },
    "imperfektIndikativ": {
      "de": "er schritt",
      "lv": "Kráčel"
    },
    "imperfektKonjunktiv": {
      "de": "er schritte",
      "lv": "Kráčel by"
    },
    "partizipVergangenheit": {
      "de": "geschritten (er ist)",
      "lv": "Kráčel"
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
      "lv": "Mlčel"
    }
  },
  {
    "infinitiv": {
      "de": "schwellen",
      "lv": "Otékat / puchnout"
    },
    "praesens": {
      "de": "er schwillt",
      "lv": "Otéká"
    },
    "imperfektIndikativ": {
      "de": "er schwoll",
      "lv": "Otekl"
    },
    "imperfektKonjunktiv": {
      "de": "er schwölle",
      "lv": "Otekl by"
    },
    "partizipVergangenheit": {
      "de": "geschwollen (er ist)",
      "lv": "Oteklý"
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
      "lv": "Mizí"
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
      "lv": "Zmizelý"
    }
  },
  {
    "infinitiv": {
      "de": "schwingen",
      "lv": "Kývat / mávat"
    },
    "praesens": {
      "de": "er schwingt",
      "lv": "Kývá"
    },
    "imperfektIndikativ": {
      "de": "er schwang",
      "lv": "Kýval"
    },
    "imperfektKonjunktiv": {
      "de": "er schwänge",
      "lv": "Kýval by"
    },
    "partizipVergangenheit": {
      "de": "geschwungen",
      "lv": "Kýval"
    }
  },
  {
    "infinitiv": {
      "de": "schwören",
      "lv": "Přísahat"
    },
    "praesens": {
      "de": "er schwört",
      "lv": "Přísahá"
    },
    "imperfektIndikativ": {
      "de": "er schwur / er schwor",
      "lv": "Přísahal"
    },
    "imperfektKonjunktiv": {
      "de": "er schwöre",
      "lv": "Přísahal by"
    },
    "partizipVergangenheit": {
      "de": "geschworen",
      "lv": "Přísahal"
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
      "lv": "Viděný"
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
      "lv": "Vařil"
    },
    "imperfektKonjunktiv": {
      "de": "sott vai siedete",
      "lv": "Vařil by"
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
      "lv": "Klesat / potápět se"
    },
    "praesens": {
      "de": "er sinkt",
      "lv": "Potápí se"
    },
    "imperfektIndikativ": {
      "de": "er sank",
      "lv": "Klesal"
    },
    "imperfektKonjunktiv": {
      "de": "er sänke",
      "lv": "Klesal by / potápěl by se"
    },
    "partizipVergangenheit": {
      "de": "gesunken (er ist)",
      "lv": "Klesl / potopil se"
    }
  },
  {
    "infinitiv": {
      "de": "sinnen",
      "lv": "Přemýšlet / rozjímat"
    },
    "praesens": {
      "de": "er sinnt",
      "lv": "Přemýšlí"
    },
    "imperfektIndikativ": {
      "de": "er sann",
      "lv": "Přemýšlel"
    },
    "imperfektKonjunktiv": {
      "de": "er sönne / er sänne",
      "lv": "Přemýšlel by"
    },
    "partizipVergangenheit": {
      "de": "gesonnen",
      "lv": "Přemýšlel"
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
      "lv": "Seděl"
    }
  },
  {
    "infinitiv": {
      "de": "sollen",
      "lv": "Mít / být povinen"
    },
    "praesens": {
      "de": "er soll",
      "lv": "Má / má povinnost"
    },
    "imperfektIndikativ": {
      "de": "sollte",
      "lv": "Měl"
    },
    "imperfektKonjunktiv": {
      "de": "sollte",
      "lv": "Měl by"
    },
    "partizipVergangenheit": {
      "de": "gesollt",
      "lv": "Měl"
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
      "lv": "Odplivl by si"
    },
    "partizipVergangenheit": {
      "de": "gespien",
      "lv": "Vyplivl"
    }
  },
  {
    "infinitiv": {
      "de": "spinnen",
      "lv": "Příst"
    },
    "praesens": {
      "de": "er spinnt",
      "lv": "Přede"
    },
    "imperfektIndikativ": {
      "de": "er spann",
      "lv": "Předl"
    },
    "imperfektKonjunktiv": {
      "de": "er spönne / er spänne",
      "lv": "Předl by"
    },
    "partizipVergangenheit": {
      "de": "gesponnen",
      "lv": "Předený"
    }
  },
  {
    "infinitiv": {
      "de": "spleißen",
      "lv": "Spojit / splétat"
    },
    "praesens": {
      "de": "er spleißt",
      "lv": "Spojuje / splétá"
    },
    "imperfektIndikativ": {
      "de": "spliss",
      "lv": "Spojil / splétal"
    },
    "imperfektKonjunktiv": {
      "de": "spliss",
      "lv": "Spojil by / splétal by"
    },
    "partizipVergangenheit": {
      "de": "gesplissen",
      "lv": "Spojený / spletený"
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
      "lv": "Rašit"
    },
    "praesens": {
      "de": "er sprießt",
      "lv": "Raší"
    },
    "imperfektIndikativ": {
      "de": "er spross",
      "lv": "Rašil"
    },
    "imperfektKonjunktiv": {
      "de": "er sprösse",
      "lv": "Rašil by"
    },
    "partizipVergangenheit": {
      "de": "gesprossen (er ist)",
      "lv": "Vyrašil"
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
      "lv": "Skočil"
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
      "lv": "Bodl"
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
      "lv": "Strčit / zasunout"
    },
    "praesens": {
      "de": "er steckt",
      "lv": "Strká / zasouvá"
    },
    "imperfektIndikativ": {
      "de": "stak vai steckte",
      "lv": "Strčil / zasunul"
    },
    "imperfektKonjunktiv": {
      "de": "stak vai steckte",
      "lv": "Strčil by / zasunul by"
    },
    "partizipVergangenheit": {
      "de": "gesteckt",
      "lv": "Zasunutý"
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
      "lv": "Pěnit / vířit"
    },
    "praesens": {
      "de": "es stiebt",
      "lv": "Pění / víří"
    },
    "imperfektIndikativ": {
      "de": "stob vai stiebte",
      "lv": "Pěnil / vířil"
    },
    "imperfektKonjunktiv": {
      "de": "stob vai stiebte",
      "lv": "Pěnil by / vířil by"
    },
    "partizipVergangenheit": {
      "de": "gestoben vai gestiebt",
      "lv": "Pěnil / vířil"
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
      "lv": "Hádat se"
    },
    "praesens": {
      "de": "er streitet",
      "lv": "Hádá se"
    },
    "imperfektIndikativ": {
      "de": "er stritt",
      "lv": "Hádal se"
    },
    "imperfektKonjunktiv": {
      "de": "er stritte",
      "lv": "Hádal by se"
    },
    "partizipVergangenheit": {
      "de": "gestritten",
      "lv": "Hádal se"
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
      "lv": "Setkal se"
    }
  },
  {
    "infinitiv": {
      "de": "treiben",
      "lv": "Hnát"
    },
    "praesens": {
      "de": "er treibt",
      "lv": "Žene"
    },
    "imperfektIndikativ": {
      "de": "er trieb",
      "lv": "Hnal"
    },
    "imperfektKonjunktiv": {
      "de": "er triebe",
      "lv": "Hnal by"
    },
    "partizipVergangenheit": {
      "de": "getrieben",
      "lv": "Hnal"
    }
  },
  {
    "infinitiv": {
      "de": "treten",
      "lv": "Vstoupit / kráčet"
    },
    "praesens": {
      "de": "er tritt",
      "lv": "Vstupuje / kráčí"
    },
    "imperfektIndikativ": {
      "de": "er trat",
      "lv": "Vstoupil / kráčel"
    },
    "imperfektKonjunktiv": {
      "de": "er träte",
      "lv": "Vstoupil by / kráčel by"
    },
    "partizipVergangenheit": {
      "de": "getreten (er ist)",
      "lv": "Vstoupil / kráčel"
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
      "lv": "Pil"
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
      "lv": "Podváděl"
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
      "lv": "Udělal"
    }
  },
  {
    "infinitiv": {
      "de": "verderben",
      "lv": "Zkazit"
    },
    "praesens": {
      "de": "er verdirbt",
      "lv": "Kazí"
    },
    "imperfektIndikativ": {
      "de": "er verdarb",
      "lv": "Zkazil"
    },
    "imperfektKonjunktiv": {
      "de": "er verdürbe",
      "lv": "Zkazil by"
    },
    "partizipVergangenheit": {
      "de": "verdorben",
      "lv": "Zkažený"
    }
  },
  {
    "infinitiv": {
      "de": "verdrießen",
      "lv": "Obtěžovat"
    },
    "praesens": {
      "de": "er verdrießt",
      "lv": "Obtěžuje"
    },
    "imperfektIndikativ": {
      "de": "er verdross",
      "lv": "Obtěžoval"
    },
    "imperfektKonjunktiv": {
      "de": "er verdrösse",
      "lv": "Obtěžoval by"
    },
    "partizipVergangenheit": {
      "de": "verdrossen",
      "lv": "Rozmrzelý"
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
      "lv": "Ztratit"
    },
    "praesens": {
      "de": "er verliert",
      "lv": "Ztrácí"
    },
    "imperfektIndikativ": {
      "de": "er verlor",
      "lv": "Ztratil"
    },
    "imperfektKonjunktiv": {
      "de": "er verlöre",
      "lv": "Ztratil by"
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
      "lv": "Rostl by"
    },
    "partizipVergangenheit": {
      "de": "gewachsen (er ist)",
      "lv": "Vyrostl"
    }
  },
  {
    "infinitiv": {
      "de": "waschen",
      "lv": "Mýt"
    },
    "praesens": {
      "de": "er wäscht",
      "lv": "Myje"
    },
    "imperfektIndikativ": {
      "de": "er wusch",
      "lv": "Myl"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsche",
      "lv": "Myl by"
    },
    "partizipVergangenheit": {
      "de": "gewaschen",
      "lv": "Umytý"
    }
  },
  {
    "infinitiv": {
      "de": "weben",
      "lv": "Tkat"
    },
    "praesens": {
      "de": "er webt",
      "lv": "On tká"
    },
    "imperfektIndikativ": {
      "de": "wob",
      "lv": "Tkal"
    },
    "imperfektKonjunktiv": {
      "de": "wob",
      "lv": "Tkal by"
    },
    "partizipVergangenheit": {
      "de": "gewoben",
      "lv": "Tkaný"
    }
  },
  {
    "infinitiv": {
      "de": "weichen",
      "lv": "Ustupovat"
    },
    "praesens": {
      "de": "er weicht",
      "lv": "Ustupuje"
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
      "lv": "Ustoupil"
    }
  },
  {
    "infinitiv": {
      "de": "weisen",
      "lv": "Ukazovat"
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
      "lv": "Ukázal"
    }
  },
  {
    "infinitiv": {
      "de": "wenden",
      "lv": "Otočit / obrátit"
    },
    "praesens": {
      "de": "er wendet",
      "lv": "Otáčí / obrací"
    },
    "imperfektIndikativ": {
      "de": "er wandte / es wendete",
      "lv": "Otočil / obrátil"
    },
    "imperfektKonjunktiv": {
      "de": "er wendete",
      "lv": "Otočil by / obrátil by"
    },
    "partizipVergangenheit": {
      "de": "gewandt / gewendet",
      "lv": "Otočeno / obráceno"
    }
  },
  {
    "infinitiv": {
      "de": "werben",
      "lv": "Ucházet se / propagovat"
    },
    "praesens": {
      "de": "er wirbt",
      "lv": "Uchází se / propaguje"
    },
    "imperfektIndikativ": {
      "de": "er warb",
      "lv": "Ucházel se / propagoval"
    },
    "imperfektKonjunktiv": {
      "de": "er würbe",
      "lv": "Ucházel by se / propagoval by"
    },
    "partizipVergangenheit": {
      "de": "geworben",
      "lv": "Ucházel se / propagoval"
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
      "lv": "Stal se"
    },
    "imperfektKonjunktiv": {
      "de": "wurde",
      "lv": "Stal by se"
    },
    "partizipVergangenheit": {
      "de": "geworden",
      "lv": "Stal se"
    }
  },
  {
    "infinitiv": {
      "de": "werfen",
      "lv": "Házet"
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
      "lv": "Hodil by"
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
      "lv": "Zvážený"
    }
  },
  {
    "infinitiv": {
      "de": "winden",
      "lv": "Vinout / plést"
    },
    "praesens": {
      "de": "er windet",
      "lv": "Vine / plete"
    },
    "imperfektIndikativ": {
      "de": "er wand",
      "lv": "Vinul / pletl"
    },
    "imperfektKonjunktiv": {
      "de": "er wände",
      "lv": "Vinul by / pletl by"
    },
    "partizipVergangenheit": {
      "de": "gewunden",
      "lv": "Vinutý / pletený"
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
      "lv": "Věděl"
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
      "lv": "Chtěl by"
    },
    "partizipVergangenheit": {
      "de": "gewollt",
      "lv": "Chtěl"
    }
  },
  {
    "infinitiv": {
      "de": "wringen",
      "lv": "Ždímat / vyždímat"
    },
    "praesens": {
      "de": "er wringt",
      "lv": "Ždímá"
    },
    "imperfektIndikativ": {
      "de": "wrang",
      "lv": "Ždímal"
    },
    "imperfektKonjunktiv": {
      "de": "wrang",
      "lv": "Ždímal by"
    },
    "partizipVergangenheit": {
      "de": "gewrungen",
      "lv": "Vyždímaný"
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
      "lv": "Obvinil"
    },
    "imperfektKonjunktiv": {
      "de": "zieh",
      "lv": "Obvinil by"
    },
    "partizipVergangenheit": {
      "de": "geziehen",
      "lv": "Obviněný"
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
      "lv": "Táhl"
    },
    "imperfektKonjunktiv": {
      "de": "er zöge",
      "lv": "Táhl by"
    },
    "partizipVergangenheit": {
      "de": "gezogen",
      "lv": "Táhl"
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
      "lv": "Zvažoval by"
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
      "lv": "Plést"
    },
    "praesens": {
      "de": "er flicht",
      "lv": "Plete"
    },
    "imperfektIndikativ": {
      "de": "er flocht",
      "lv": "Pletl copánky"
    },
    "imperfektKonjunktiv": {
      "de": "er flöchte",
      "lv": "Pletl by copánky"
    },
    "partizipVergangenheit": {
      "de": "geflochten",
      "lv": "Pletené"
    }
  },
  {
    "infinitiv": {
      "de": "hangen",
      "lv": "Viset"
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
      "lv": "Visel by"
    },
    "partizipVergangenheit": {
      "de": "gehangen",
      "lv": "Visel"
    }
  },
  {
    "infinitiv": {
      "de": "spalten",
      "lv": "Štípat / rozdělit"
    },
    "praesens": {
      "de": "er spaltet",
      "lv": "Štípe"
    },
    "imperfektIndikativ": {
      "de": "er spaltete",
      "lv": "Štípal"
    },
    "imperfektKonjunktiv": {
      "de": "er spaltete",
      "lv": "Štípal by"
    },
    "partizipVergangenheit": {
      "de": "gespalten",
      "lv": "Rozštípaný"
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

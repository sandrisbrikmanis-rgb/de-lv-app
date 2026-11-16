const VERB_ENTRIES = [
  {
    "infinitiv": {
      "de": "backen",
      "lv": "piecť"
    },
    "praesens": {
      "de": "er bäckt",
      "lv": "on pečie"
    },
    "imperfektIndikativ": {
      "de": "er buk",
      "lv": "on piekol"
    },
    "imperfektKonjunktiv": {
      "de": "er büke",
      "lv": "on by piekol"
    },
    "partizipVergangenheit": {
      "de": "gebacken",
      "lv": "pečený"
    }
  },
  {
    "infinitiv": {
      "de": "befehlen",
      "lv": "rozkazovať"
    },
    "praesens": {
      "de": "er befiehlt",
      "lv": "on rozkazuje"
    },
    "imperfektIndikativ": {
      "de": "er befahl",
      "lv": "on rozkazoval"
    },
    "imperfektKonjunktiv": {
      "de": "er beföhle",
      "lv": "on by rozkazoval"
    },
    "partizipVergangenheit": {
      "de": "befohlen",
      "lv": "rozkazoval"
    }
  },
  {
    "infinitiv": {
      "de": "beginnen",
      "lv": "začínať"
    },
    "praesens": {
      "de": "er beginnt",
      "lv": "on začína"
    },
    "imperfektIndikativ": {
      "de": "er begann",
      "lv": "on začínal"
    },
    "imperfektKonjunktiv": {
      "de": "er begönne / er begänne",
      "lv": "on by začínal"
    },
    "partizipVergangenheit": {
      "de": "begonnen",
      "lv": "začínaný"
    }
  },
  {
    "infinitiv": {
      "de": "beißen",
      "lv": "hrýzť"
    },
    "praesens": {
      "de": "er beißt",
      "lv": "on hryzie"
    },
    "imperfektIndikativ": {
      "de": "er biss",
      "lv": "on hrýzol"
    },
    "imperfektKonjunktiv": {
      "de": "er bisse",
      "lv": "on by hrýzol"
    },
    "partizipVergangenheit": {
      "de": "gebissen",
      "lv": "hryzený"
    }
  },
  {
    "infinitiv": {
      "de": "bergen",
      "lv": "zachraňovať / skrývať"
    },
    "praesens": {
      "de": "er birgt",
      "lv": "on zachraňuje / skrýva"
    },
    "imperfektIndikativ": {
      "de": "er barg",
      "lv": "on zachraňoval / skrýval"
    },
    "imperfektKonjunktiv": {
      "de": "er bürge / er bärge",
      "lv": "on by zachraňoval / skrýval"
    },
    "partizipVergangenheit": {
      "de": "geborgen",
      "lv": "zachraňovaný / skrývaný"
    }
  },
  {
    "infinitiv": {
      "de": "bersten",
      "lv": "praskať"
    },
    "praesens": {
      "de": "er birst",
      "lv": "to praská"
    },
    "imperfektIndikativ": {
      "de": "er barst / er borst",
      "lv": "to praskalo"
    },
    "imperfektKonjunktiv": {
      "de": "er bärste / er börste",
      "lv": "to by praskalo"
    },
    "partizipVergangenheit": {
      "de": "geborsten (er ist)",
      "lv": "praskal"
    }
  },
  {
    "infinitiv": {
      "de": "bewegen",
      "lv": "pobádať"
    },
    "praesens": {
      "de": "er bewegt",
      "lv": "on pobáda"
    },
    "imperfektIndikativ": {
      "de": "er bewog",
      "lv": "on pobádal"
    },
    "imperfektKonjunktiv": {
      "de": "er bewöge",
      "lv": "on by pobádal"
    },
    "partizipVergangenheit": {
      "de": "bewogen",
      "lv": "pobádaný"
    }
  },
  {
    "infinitiv": {
      "de": "biegen",
      "lv": "ohýbať"
    },
    "praesens": {
      "de": "er biegt",
      "lv": "on ohýba"
    },
    "imperfektIndikativ": {
      "de": "er bog",
      "lv": "on ohýbal"
    },
    "imperfektKonjunktiv": {
      "de": "er böge",
      "lv": "on by ohýbal"
    },
    "partizipVergangenheit": {
      "de": "gebogen",
      "lv": "ohýbaný"
    }
  },
  {
    "infinitiv": {
      "de": "bieten",
      "lv": "ponúkať"
    },
    "praesens": {
      "de": "er bietet",
      "lv": "on ponúka"
    },
    "imperfektIndikativ": {
      "de": "er bot",
      "lv": "on ponúkal"
    },
    "imperfektKonjunktiv": {
      "de": "er böte",
      "lv": "on by ponúkal"
    },
    "partizipVergangenheit": {
      "de": "geboten",
      "lv": "ponúkaný"
    }
  },
  {
    "infinitiv": {
      "de": "binden",
      "lv": "viazať"
    },
    "praesens": {
      "de": "er bindet",
      "lv": "on viaže"
    },
    "imperfektIndikativ": {
      "de": "er band",
      "lv": "on viazal"
    },
    "imperfektKonjunktiv": {
      "de": "er bände",
      "lv": "on by viazal"
    },
    "partizipVergangenheit": {
      "de": "gebunden",
      "lv": "viazaný"
    }
  },
  {
    "infinitiv": {
      "de": "bitten",
      "lv": "prosiť"
    },
    "praesens": {
      "de": "er bittet",
      "lv": "on prosí"
    },
    "imperfektIndikativ": {
      "de": "er bat",
      "lv": "on prosil"
    },
    "imperfektKonjunktiv": {
      "de": "er bäte",
      "lv": "on by prosil"
    },
    "partizipVergangenheit": {
      "de": "gebeten",
      "lv": "prosený"
    }
  },
  {
    "infinitiv": {
      "de": "blasen",
      "lv": "fúkať"
    },
    "praesens": {
      "de": "er bläst",
      "lv": "on fúka"
    },
    "imperfektIndikativ": {
      "de": "er blies",
      "lv": "on fúkal"
    },
    "imperfektKonjunktiv": {
      "de": "er bliese",
      "lv": "on by fúkal"
    },
    "partizipVergangenheit": {
      "de": "geblasen",
      "lv": "fúkaný"
    }
  },
  {
    "infinitiv": {
      "de": "gären",
      "lv": "kvasiť"
    },
    "praesens": {
      "de": "es gärt",
      "lv": "to kvasí"
    },
    "imperfektIndikativ": {
      "de": "es gor / es gärte",
      "lv": "to kvasilo"
    },
    "imperfektKonjunktiv": {
      "de": "es göre / es gärte",
      "lv": "to by kvasilo"
    },
    "partizipVergangenheit": {
      "de": "gegoren / gegärt",
      "lv": "kvasil"
    }
  },
  {
    "infinitiv": {
      "de": "gebären",
      "lv": "rodiť"
    },
    "praesens": {
      "de": "sie gebiert",
      "lv": "ona rodí"
    },
    "imperfektIndikativ": {
      "de": "sie gebar",
      "lv": "ona rodila"
    },
    "imperfektKonjunktiv": {
      "de": "sie gebäre",
      "lv": "ona by rodila"
    },
    "partizipVergangenheit": {
      "de": "geboren",
      "lv": "rodený"
    }
  },
  {
    "infinitiv": {
      "de": "gelingen",
      "lv": "dariť sa"
    },
    "praesens": {
      "de": "es gelingt",
      "lv": "to sa darí"
    },
    "imperfektIndikativ": {
      "de": "es gelang",
      "lv": "to sa darilo"
    },
    "imperfektKonjunktiv": {
      "de": "es gelänge",
      "lv": "to by sa darilo"
    },
    "partizipVergangenheit": {
      "de": "gelungen (es ist)",
      "lv": "daril sa"
    }
  },
  {
    "infinitiv": {
      "de": "gelten",
      "lv": "hodiť sa / platiť"
    },
    "praesens": {
      "de": "er gilt",
      "lv": "on sa hodí / platí"
    },
    "imperfektIndikativ": {
      "de": "er galt",
      "lv": "on sa hodil / platil"
    },
    "imperfektKonjunktiv": {
      "de": "er gölte / es gälte",
      "lv": "on by sa hodil / platil"
    },
    "partizipVergangenheit": {
      "de": "gegolten",
      "lv": "hodil sa / platil"
    }
  },
  {
    "infinitiv": {
      "de": "genesen",
      "lv": "uzdravovať sa"
    },
    "praesens": {
      "de": "er genest",
      "lv": "on sa uzdravuje"
    },
    "imperfektIndikativ": {
      "de": "er genas",
      "lv": "on sa uzdravoval"
    },
    "imperfektKonjunktiv": {
      "de": "er genäse",
      "lv": "on by sa uzdravoval"
    },
    "partizipVergangenheit": {
      "de": "genesen (er ist)",
      "lv": "uzdravoval sa"
    }
  },
  {
    "infinitiv": {
      "de": "genießen",
      "lv": "vychutnávať"
    },
    "praesens": {
      "de": "er genießt",
      "lv": "on vychutnáva"
    },
    "imperfektIndikativ": {
      "de": "er genoss",
      "lv": "on vychutnával"
    },
    "imperfektKonjunktiv": {
      "de": "er genösse",
      "lv": "on by vychutnával"
    },
    "partizipVergangenheit": {
      "de": "genossen",
      "lv": "vychutnávaný"
    }
  },
  {
    "infinitiv": {
      "de": "geschehen",
      "lv": "diať sa"
    },
    "praesens": {
      "de": "es geschieht",
      "lv": "to sa deje"
    },
    "imperfektIndikativ": {
      "de": "es geschah",
      "lv": "to sa dialo"
    },
    "imperfektKonjunktiv": {
      "de": "es geschähe",
      "lv": "to by sa dialo"
    },
    "partizipVergangenheit": {
      "de": "geschehen (es ist)",
      "lv": "dial sa"
    }
  },
  {
    "infinitiv": {
      "de": "gießen",
      "lv": "liať"
    },
    "praesens": {
      "de": "er gießt",
      "lv": "on leje"
    },
    "imperfektIndikativ": {
      "de": "er goss",
      "lv": "on lial"
    },
    "imperfektKonjunktiv": {
      "de": "er gösse",
      "lv": "on by lial"
    },
    "partizipVergangenheit": {
      "de": "gegossen",
      "lv": "liaty"
    }
  },
  {
    "infinitiv": {
      "de": "gleichen",
      "lv": "podobať sa"
    },
    "praesens": {
      "de": "er gleicht",
      "lv": "on sa podobá"
    },
    "imperfektIndikativ": {
      "de": "er glich",
      "lv": "on sa podobal"
    },
    "imperfektKonjunktiv": {
      "de": "er gliche",
      "lv": "on by sa podobal"
    },
    "partizipVergangenheit": {
      "de": "geglichen",
      "lv": "podobal sa"
    }
  },
  {
    "infinitiv": {
      "de": "gleiten",
      "lv": "kĺzať sa"
    },
    "praesens": {
      "de": "er gleitet",
      "lv": "on sa kĺže"
    },
    "imperfektIndikativ": {
      "de": "er glitt",
      "lv": "on sa kĺzal"
    },
    "imperfektKonjunktiv": {
      "de": "er glitte",
      "lv": "on by sa kĺzal"
    },
    "partizipVergangenheit": {
      "de": "geglitten (er ist)",
      "lv": "kĺzal sa"
    }
  },
  {
    "infinitiv": {
      "de": "glimmen",
      "lv": "tlieť"
    },
    "praesens": {
      "de": "er glimmt",
      "lv": "to tlie"
    },
    "imperfektIndikativ": {
      "de": "er glimmte / glomm",
      "lv": "to tlelo"
    },
    "imperfektKonjunktiv": {
      "de": "er glimmte",
      "lv": "to by tlelo"
    },
    "partizipVergangenheit": {
      "de": "geglimmt / geglommen",
      "lv": "tlel"
    }
  },
  {
    "infinitiv": {
      "de": "graben",
      "lv": "kopať"
    },
    "praesens": {
      "de": "er gräbt",
      "lv": "on kope"
    },
    "imperfektIndikativ": {
      "de": "er grub",
      "lv": "on kopal"
    },
    "imperfektKonjunktiv": {
      "de": "er grübe",
      "lv": "on by kopal"
    },
    "partizipVergangenheit": {
      "de": "gegraben",
      "lv": "kopaný"
    }
  },
  {
    "infinitiv": {
      "de": "greifen",
      "lv": "chytať"
    },
    "praesens": {
      "de": "er greift",
      "lv": "on chytá"
    },
    "imperfektIndikativ": {
      "de": "er griff",
      "lv": "on chytal"
    },
    "imperfektKonjunktiv": {
      "de": "er griffe",
      "lv": "on by chytal"
    },
    "partizipVergangenheit": {
      "de": "gegriffen",
      "lv": "chytaný"
    }
  },
  {
    "infinitiv": {
      "de": "hauen",
      "lv": "sekať"
    },
    "praesens": {
      "de": "er haut",
      "lv": "on seká"
    },
    "imperfektIndikativ": {
      "de": "er hieb",
      "lv": "on sekal"
    },
    "imperfektKonjunktiv": {
      "de": "er hiebe",
      "lv": "on by sekal"
    },
    "partizipVergangenheit": {
      "de": "gehauen",
      "lv": "sekaný"
    }
  },
  {
    "infinitiv": {
      "de": "heben",
      "lv": "dvíhať"
    },
    "praesens": {
      "de": "er hebt",
      "lv": "on dvíha"
    },
    "imperfektIndikativ": {
      "de": "er hob",
      "lv": "on dvíhal"
    },
    "imperfektKonjunktiv": {
      "de": "er höbe",
      "lv": "on by dvíhal"
    },
    "partizipVergangenheit": {
      "de": "gehoben",
      "lv": "dvíhaný"
    }
  },
  {
    "infinitiv": {
      "de": "kennen",
      "lv": "poznať / vedieť"
    },
    "praesens": {
      "de": "er kennt",
      "lv": "on pozná / vie"
    },
    "imperfektIndikativ": {
      "de": "kannte",
      "lv": "on poznal / vedel"
    },
    "imperfektKonjunktiv": {
      "de": "kannte",
      "lv": "on by poznal / vedel"
    },
    "partizipVergangenheit": {
      "de": "gekannt",
      "lv": "poznaný / vedel"
    }
  },
  {
    "infinitiv": {
      "de": "klingen",
      "lv": "znieť"
    },
    "praesens": {
      "de": "er klingt",
      "lv": "to znie"
    },
    "imperfektIndikativ": {
      "de": "er klang",
      "lv": "to znelo"
    },
    "imperfektKonjunktiv": {
      "de": "er klänge",
      "lv": "to by znelo"
    },
    "partizipVergangenheit": {
      "de": "geklungen",
      "lv": "znel"
    }
  },
  {
    "infinitiv": {
      "de": "kneifen",
      "lv": "štípať"
    },
    "praesens": {
      "de": "er kneift",
      "lv": "on štípe"
    },
    "imperfektIndikativ": {
      "de": "er kniff",
      "lv": "on štípal"
    },
    "imperfektKonjunktiv": {
      "de": "er kniffe",
      "lv": "on by štípal"
    },
    "partizipVergangenheit": {
      "de": "gekniffen",
      "lv": "štípaný"
    }
  },
  {
    "infinitiv": {
      "de": "bleiben",
      "lv": "zostávať"
    },
    "praesens": {
      "de": "er bleibt",
      "lv": "on zostáva"
    },
    "imperfektIndikativ": {
      "de": "er blieb",
      "lv": "on zostával"
    },
    "imperfektKonjunktiv": {
      "de": "er bliebe",
      "lv": "on by zostával"
    },
    "partizipVergangenheit": {
      "de": "geblieben (er ist)",
      "lv": "zostával"
    }
  },
  {
    "infinitiv": {
      "de": "bleichen",
      "lv": "blednúť"
    },
    "praesens": {
      "de": "er bleicht",
      "lv": "to bledne"
    },
    "imperfektIndikativ": {
      "de": "blich",
      "lv": "to bledlo"
    },
    "imperfektKonjunktiv": {
      "de": "blich",
      "lv": "to by bledlo"
    },
    "partizipVergangenheit": {
      "de": "geblichen",
      "lv": "bledol"
    }
  },
  {
    "infinitiv": {
      "de": "braten",
      "lv": "smažiť"
    },
    "praesens": {
      "de": "er brät",
      "lv": "on smaží"
    },
    "imperfektIndikativ": {
      "de": "er briet",
      "lv": "on smažil"
    },
    "imperfektKonjunktiv": {
      "de": "er briete",
      "lv": "on by smažil"
    },
    "partizipVergangenheit": {
      "de": "gebraten",
      "lv": "smažený"
    }
  },
  {
    "infinitiv": {
      "de": "brechen",
      "lv": "lámať"
    },
    "praesens": {
      "de": "er bricht",
      "lv": "on láme"
    },
    "imperfektIndikativ": {
      "de": "er brach",
      "lv": "on lámal"
    },
    "imperfektKonjunktiv": {
      "de": "er bräche",
      "lv": "on by lámal"
    },
    "partizipVergangenheit": {
      "de": "gebrochen",
      "lv": "lámaný"
    }
  },
  {
    "infinitiv": {
      "de": "brennen",
      "lv": "horieť"
    },
    "praesens": {
      "de": "er brennt",
      "lv": "to horí"
    },
    "imperfektIndikativ": {
      "de": "brannte",
      "lv": "to horelo"
    },
    "imperfektKonjunktiv": {
      "de": "brannte",
      "lv": "to by horelo"
    },
    "partizipVergangenheit": {
      "de": "gebrannt",
      "lv": "horel"
    }
  },
  {
    "infinitiv": {
      "de": "bringen",
      "lv": "prinášať"
    },
    "praesens": {
      "de": "er bringt",
      "lv": "on prináša"
    },
    "imperfektIndikativ": {
      "de": "er brachte",
      "lv": "on prinášal"
    },
    "imperfektKonjunktiv": {
      "de": "er brächte",
      "lv": "on by prinášal"
    },
    "partizipVergangenheit": {
      "de": "gebracht",
      "lv": "prinášaný"
    }
  },
  {
    "infinitiv": {
      "de": "denken",
      "lv": "myslieť"
    },
    "praesens": {
      "de": "er denkt",
      "lv": "on myslí"
    },
    "imperfektIndikativ": {
      "de": "er dachte",
      "lv": "on myslel"
    },
    "imperfektKonjunktiv": {
      "de": "er dächte",
      "lv": "on by myslel"
    },
    "partizipVergangenheit": {
      "de": "gedacht",
      "lv": "myslený"
    }
  },
  {
    "infinitiv": {
      "de": "dingen",
      "lv": "najímať / dohovárať sa"
    },
    "praesens": {
      "de": "er dingt",
      "lv": "on najíma / dohovára sa"
    },
    "imperfektIndikativ": {
      "de": "dingte",
      "lv": "on najímal / dohováral sa"
    },
    "imperfektKonjunktiv": {
      "de": "dingte",
      "lv": "on by najímal / dohováral sa"
    },
    "partizipVergangenheit": {
      "de": "gedungen",
      "lv": "najímaný / dohováral sa"
    }
  },
  {
    "infinitiv": {
      "de": "dreschen",
      "lv": "mlátiť"
    },
    "praesens": {
      "de": "er drischt",
      "lv": "on mláti"
    },
    "imperfektIndikativ": {
      "de": "er drasch / er drosch",
      "lv": "on mlátil"
    },
    "imperfektKonjunktiv": {
      "de": "er dräsche / er drösche",
      "lv": "on by mlátil"
    },
    "partizipVergangenheit": {
      "de": "gedroschen",
      "lv": "mlátený"
    }
  },
  {
    "infinitiv": {
      "de": "dringen",
      "lv": "prenikať"
    },
    "praesens": {
      "de": "er dringt",
      "lv": "on preniká"
    },
    "imperfektIndikativ": {
      "de": "er drang",
      "lv": "on prenikal"
    },
    "imperfektKonjunktiv": {
      "de": "er dränge",
      "lv": "on by prenikal"
    },
    "partizipVergangenheit": {
      "de": "gedrungen (er ist)",
      "lv": "prenikal"
    }
  },
  {
    "infinitiv": {
      "de": "dünken",
      "lv": "zdať sa"
    },
    "praesens": {
      "de": "es dünkt",
      "lv": "to sa zdá"
    },
    "imperfektIndikativ": {
      "de": "deuchte",
      "lv": "to sa zdalo"
    },
    "imperfektKonjunktiv": {
      "de": "deuchte",
      "lv": "to by sa zdalo"
    },
    "partizipVergangenheit": {
      "de": "gedünkt",
      "lv": "zdal sa"
    }
  },
  {
    "infinitiv": {
      "de": "dürfen",
      "lv": "smieť"
    },
    "praesens": {
      "de": "er darf",
      "lv": "on smie"
    },
    "imperfektIndikativ": {
      "de": "durfte",
      "lv": "on smel"
    },
    "imperfektKonjunktiv": {
      "de": "durfte",
      "lv": "on by smel"
    },
    "partizipVergangenheit": {
      "de": "gedurft",
      "lv": "smel"
    }
  },
  {
    "infinitiv": {
      "de": "empfehlen",
      "lv": "odporúčať"
    },
    "praesens": {
      "de": "er empfiehlt",
      "lv": "on odporúča"
    },
    "imperfektIndikativ": {
      "de": "er empfahl",
      "lv": "on odporúčal"
    },
    "imperfektKonjunktiv": {
      "de": "er empfähle / er empföhle",
      "lv": "on by odporúčal"
    },
    "partizipVergangenheit": {
      "de": "empfohlen",
      "lv": "odporúčaný"
    }
  },
  {
    "infinitiv": {
      "de": "empfinden",
      "lv": "cítiť"
    },
    "praesens": {
      "de": "er empfindet",
      "lv": "on cíti"
    },
    "imperfektIndikativ": {
      "de": "er empfand",
      "lv": "on cítil"
    },
    "imperfektKonjunktiv": {
      "de": "er empfände",
      "lv": "on by cítil"
    },
    "partizipVergangenheit": {
      "de": "empfunden",
      "lv": "cítený"
    }
  },
  {
    "infinitiv": {
      "de": "erlöschen",
      "lv": "hasnúť"
    },
    "praesens": {
      "de": "er erlischt",
      "lv": "to hasne"
    },
    "imperfektIndikativ": {
      "de": "er erlosch",
      "lv": "to haslo"
    },
    "imperfektKonjunktiv": {
      "de": "er erlösche",
      "lv": "to by haslo"
    },
    "partizipVergangenheit": {
      "de": "erloschen (er ist)",
      "lv": "hasol"
    }
  },
  {
    "infinitiv": {
      "de": "erschrecken",
      "lv": "ľakať sa"
    },
    "praesens": {
      "de": "er erschrickt",
      "lv": "on sa ľaká"
    },
    "imperfektIndikativ": {
      "de": "er erschrak",
      "lv": "on sa ľakal"
    },
    "imperfektKonjunktiv": {
      "de": "er erschräke",
      "lv": "on by sa ľakal"
    },
    "partizipVergangenheit": {
      "de": "erschrocken (er ist)",
      "lv": "ľakal sa"
    }
  },
  {
    "infinitiv": {
      "de": "essen",
      "lv": "jesť"
    },
    "praesens": {
      "de": "er isst",
      "lv": "on je"
    },
    "imperfektIndikativ": {
      "de": "er ass",
      "lv": "on jedol"
    },
    "imperfektKonjunktiv": {
      "de": "er äße",
      "lv": "on by jedol"
    },
    "partizipVergangenheit": {
      "de": "gegessen",
      "lv": "jedený"
    }
  },
  {
    "infinitiv": {
      "de": "fahren",
      "lv": "jazdiť"
    },
    "praesens": {
      "de": "er fährt",
      "lv": "on jazdí"
    },
    "imperfektIndikativ": {
      "de": "er fuhr",
      "lv": "on jazdil"
    },
    "imperfektKonjunktiv": {
      "de": "er führe",
      "lv": "on by jazdil"
    },
    "partizipVergangenheit": {
      "de": "gefahren (er ist)",
      "lv": "jazdil"
    }
  },
  {
    "infinitiv": {
      "de": "fallen",
      "lv": "padať"
    },
    "praesens": {
      "de": "er fällt",
      "lv": "on padá"
    },
    "imperfektIndikativ": {
      "de": "er fiel",
      "lv": "on padal"
    },
    "imperfektKonjunktiv": {
      "de": "er fiele",
      "lv": "on by padal"
    },
    "partizipVergangenheit": {
      "de": "gefallen (er ist)",
      "lv": "padal"
    }
  },
  {
    "infinitiv": {
      "de": "fangen",
      "lv": "chytať"
    },
    "praesens": {
      "de": "er fängt",
      "lv": "on chytá"
    },
    "imperfektIndikativ": {
      "de": "er fing",
      "lv": "on chytal"
    },
    "imperfektKonjunktiv": {
      "de": "er finge",
      "lv": "on by chytal"
    },
    "partizipVergangenheit": {
      "de": "gefangen",
      "lv": "chytaný"
    }
  },
  {
    "infinitiv": {
      "de": "finden",
      "lv": "nachádzať"
    },
    "praesens": {
      "de": "er findet",
      "lv": "on nachádza"
    },
    "imperfektIndikativ": {
      "de": "er fand",
      "lv": "on nachádzal"
    },
    "imperfektKonjunktiv": {
      "de": "er fände",
      "lv": "on by nachádzal"
    },
    "partizipVergangenheit": {
      "de": "gefunden",
      "lv": "nachádzaný"
    }
  },
  {
    "infinitiv": {
      "de": "fliegen",
      "lv": "lietať"
    },
    "praesens": {
      "de": "er fliegt",
      "lv": "on lieta"
    },
    "imperfektIndikativ": {
      "de": "er flog",
      "lv": "on lietal"
    },
    "imperfektKonjunktiv": {
      "de": "er flöge",
      "lv": "on by lietal"
    },
    "partizipVergangenheit": {
      "de": "geflogen (er ist)",
      "lv": "lietal"
    }
  },
  {
    "infinitiv": {
      "de": "fliehen",
      "lv": "utekať"
    },
    "praesens": {
      "de": "er flieht",
      "lv": "on uteká"
    },
    "imperfektIndikativ": {
      "de": "er floh",
      "lv": "on utekal"
    },
    "imperfektKonjunktiv": {
      "de": "er flöhe",
      "lv": "on by utekal"
    },
    "partizipVergangenheit": {
      "de": "geflohen (er ist)",
      "lv": "utekal"
    }
  },
  {
    "infinitiv": {
      "de": "fließen",
      "lv": "tiecť"
    },
    "praesens": {
      "de": "er fließt",
      "lv": "to tečie"
    },
    "imperfektIndikativ": {
      "de": "er floss",
      "lv": "to tieklo"
    },
    "imperfektKonjunktiv": {
      "de": "er flösse",
      "lv": "to by tieklo"
    },
    "partizipVergangenheit": {
      "de": "geflossen (er ist)",
      "lv": "tiekol"
    }
  },
  {
    "infinitiv": {
      "de": "fressen",
      "lv": "jesť / žrať"
    },
    "praesens": {
      "de": "er frisst",
      "lv": "on je / žerie"
    },
    "imperfektIndikativ": {
      "de": "er frass",
      "lv": "on jedol / žral"
    },
    "imperfektKonjunktiv": {
      "de": "er fräße",
      "lv": "on by jedol / žral"
    },
    "partizipVergangenheit": {
      "de": "gefressen",
      "lv": "jedený / žraný"
    }
  },
  {
    "infinitiv": {
      "de": "frieren",
      "lv": "mrznúť"
    },
    "praesens": {
      "de": "er friert",
      "lv": "on mrzne"
    },
    "imperfektIndikativ": {
      "de": "er fror",
      "lv": "on mrzol"
    },
    "imperfektKonjunktiv": {
      "de": "er fröre",
      "lv": "on by mrzol"
    },
    "partizipVergangenheit": {
      "de": "gefroren",
      "lv": "mrzol"
    }
  },
  {
    "infinitiv": {
      "de": "geben",
      "lv": "dávať"
    },
    "praesens": {
      "de": "er gibt",
      "lv": "on dáva"
    },
    "imperfektIndikativ": {
      "de": "er gab",
      "lv": "on dával"
    },
    "imperfektKonjunktiv": {
      "de": "er gäbe",
      "lv": "on by dával"
    },
    "partizipVergangenheit": {
      "de": "gegeben",
      "lv": "dávaný"
    }
  },
  {
    "infinitiv": {
      "de": "gedeihen",
      "lv": "prosperovať"
    },
    "praesens": {
      "de": "er gedeiht",
      "lv": "on prosperuje"
    },
    "imperfektIndikativ": {
      "de": "er gedieh",
      "lv": "on prosperoval"
    },
    "imperfektKonjunktiv": {
      "de": "er gediehe",
      "lv": "on by prosperoval"
    },
    "partizipVergangenheit": {
      "de": "gediehen (er ist)",
      "lv": "prosperoval"
    }
  },
  {
    "infinitiv": {
      "de": "gehen",
      "lv": "ísť"
    },
    "praesens": {
      "de": "er geht",
      "lv": "on ide"
    },
    "imperfektIndikativ": {
      "de": "er ging",
      "lv": "on išiel"
    },
    "imperfektKonjunktiv": {
      "de": "er ginge",
      "lv": "on by išiel"
    },
    "partizipVergangenheit": {
      "de": "gegangen (er ist)",
      "lv": "išiel"
    }
  },
  {
    "infinitiv": {
      "de": "gewinnen",
      "lv": "získavať"
    },
    "praesens": {
      "de": "er gewinnt",
      "lv": "on získava"
    },
    "imperfektIndikativ": {
      "de": "er gewann",
      "lv": "on získaval"
    },
    "imperfektKonjunktiv": {
      "de": "er gewönne / er gewänne",
      "lv": "on by získaval"
    },
    "partizipVergangenheit": {
      "de": "gewonnen",
      "lv": "získavaný"
    }
  },
  {
    "infinitiv": {
      "de": "haben",
      "lv": "mať"
    },
    "praesens": {
      "de": "er hat",
      "lv": "on má"
    },
    "imperfektIndikativ": {
      "de": "hatte",
      "lv": "on mal"
    },
    "imperfektKonjunktiv": {
      "de": "hatte",
      "lv": "on by mal"
    },
    "partizipVergangenheit": {
      "de": "gehabt",
      "lv": "mal"
    }
  },
  {
    "infinitiv": {
      "de": "halten",
      "lv": "držať"
    },
    "praesens": {
      "de": "er hält",
      "lv": "on drží"
    },
    "imperfektIndikativ": {
      "de": "er hielt",
      "lv": "on držal"
    },
    "imperfektKonjunktiv": {
      "de": "er hielte",
      "lv": "on by držal"
    },
    "partizipVergangenheit": {
      "de": "gehalten",
      "lv": "držaný"
    }
  },
  {
    "infinitiv": {
      "de": "heißen",
      "lv": "nazývať / volať sa"
    },
    "praesens": {
      "de": "er heißt",
      "lv": "on nazýva / volá sa"
    },
    "imperfektIndikativ": {
      "de": "er hieß",
      "lv": "on nazýval / volal sa"
    },
    "imperfektKonjunktiv": {
      "de": "er hieße",
      "lv": "on by nazýval / volal sa"
    },
    "partizipVergangenheit": {
      "de": "geheißen",
      "lv": "nazývaný / volal sa"
    }
  },
  {
    "infinitiv": {
      "de": "helfen",
      "lv": "pomáhať"
    },
    "praesens": {
      "de": "er hilft",
      "lv": "on pomáha"
    },
    "imperfektIndikativ": {
      "de": "er half",
      "lv": "on pomáhal"
    },
    "imperfektKonjunktiv": {
      "de": "er hülfe / er hälfe",
      "lv": "on by pomáhal"
    },
    "partizipVergangenheit": {
      "de": "geholfen",
      "lv": "pomáhal"
    }
  },
  {
    "infinitiv": {
      "de": "kommen",
      "lv": "prichádzať"
    },
    "praesens": {
      "de": "er kommt",
      "lv": "on prichádza"
    },
    "imperfektIndikativ": {
      "de": "er kam",
      "lv": "on prichádzal"
    },
    "imperfektKonjunktiv": {
      "de": "er käme",
      "lv": "on by prichádzal"
    },
    "partizipVergangenheit": {
      "de": "gekommen (er ist)",
      "lv": "prichádzal"
    }
  },
  {
    "infinitiv": {
      "de": "können",
      "lv": "môcť"
    },
    "praesens": {
      "de": "er kann",
      "lv": "on môže"
    },
    "imperfektIndikativ": {
      "de": "konnte",
      "lv": "on mohol"
    },
    "imperfektKonjunktiv": {
      "de": "konnte",
      "lv": "on by mohol"
    },
    "partizipVergangenheit": {
      "de": "gekonnt",
      "lv": "mohol"
    }
  },
  {
    "infinitiv": {
      "de": "kriechen",
      "lv": "liezť"
    },
    "praesens": {
      "de": "er kriecht",
      "lv": "on lezie"
    },
    "imperfektIndikativ": {
      "de": "er kroch",
      "lv": "on liezol"
    },
    "imperfektKonjunktiv": {
      "de": "er kröche",
      "lv": "on by liezol"
    },
    "partizipVergangenheit": {
      "de": "gekrochen (er ist)",
      "lv": "liezol"
    }
  },
  {
    "infinitiv": {
      "de": "laden",
      "lv": "nakladať / pozývať"
    },
    "praesens": {
      "de": "er lädt",
      "lv": "on nakladá / pozýva"
    },
    "imperfektIndikativ": {
      "de": "er lud",
      "lv": "on nakladal / pozýval"
    },
    "imperfektKonjunktiv": {
      "de": "er lüde",
      "lv": "on by nakladal / pozýval"
    },
    "partizipVergangenheit": {
      "de": "geladen",
      "lv": "nakladaný / pozývaný"
    }
  },
  {
    "infinitiv": {
      "de": "lassen",
      "lv": "nechávať / dovoľovať"
    },
    "praesens": {
      "de": "er lässt",
      "lv": "on necháva / dovoľuje"
    },
    "imperfektIndikativ": {
      "de": "er ließ",
      "lv": "on nechával / dovoľoval"
    },
    "imperfektKonjunktiv": {
      "de": "er ließe",
      "lv": "on by nechával / dovoľoval"
    },
    "partizipVergangenheit": {
      "de": "gelassen",
      "lv": "nechávaný / dovoľovaný"
    }
  },
  {
    "infinitiv": {
      "de": "laufen",
      "lv": "bežať"
    },
    "praesens": {
      "de": "er läuft",
      "lv": "on beží"
    },
    "imperfektIndikativ": {
      "de": "er lief",
      "lv": "on bežal"
    },
    "imperfektKonjunktiv": {
      "de": "er liefe",
      "lv": "on by bežal"
    },
    "partizipVergangenheit": {
      "de": "gelaufen (er ist)",
      "lv": "bežal"
    }
  },
  {
    "infinitiv": {
      "de": "leiden",
      "lv": "trpieť"
    },
    "praesens": {
      "de": "er leidet",
      "lv": "on trpí"
    },
    "imperfektIndikativ": {
      "de": "er litt",
      "lv": "on trpel"
    },
    "imperfektKonjunktiv": {
      "de": "er litte",
      "lv": "on by trpel"
    },
    "partizipVergangenheit": {
      "de": "gelitten",
      "lv": "trpel"
    }
  },
  {
    "infinitiv": {
      "de": "leihen",
      "lv": "požičiavať / požičiavať si"
    },
    "praesens": {
      "de": "er leiht",
      "lv": "on požičiava / požičiava si"
    },
    "imperfektIndikativ": {
      "de": "er lieh",
      "lv": "on požičiaval / požičiaval si"
    },
    "imperfektKonjunktiv": {
      "de": "er liehe",
      "lv": "on by požičiaval / požičiaval si"
    },
    "partizipVergangenheit": {
      "de": "geliehen",
      "lv": "požičiavaný / požičiaval si"
    }
  },
  {
    "infinitiv": {
      "de": "lesen",
      "lv": "čítať"
    },
    "praesens": {
      "de": "er liest",
      "lv": "on číta"
    },
    "imperfektIndikativ": {
      "de": "er las",
      "lv": "on čítal"
    },
    "imperfektKonjunktiv": {
      "de": "er läse",
      "lv": "on by čítal"
    },
    "partizipVergangenheit": {
      "de": "gelesen",
      "lv": "čítaný"
    }
  },
  {
    "infinitiv": {
      "de": "liegen",
      "lv": "ležať"
    },
    "praesens": {
      "de": "er liegt",
      "lv": "on leží"
    },
    "imperfektIndikativ": {
      "de": "er lag",
      "lv": "on ležal"
    },
    "imperfektKonjunktiv": {
      "de": "er läge",
      "lv": "on by ležal"
    },
    "partizipVergangenheit": {
      "de": "gelegen",
      "lv": "ležal"
    }
  },
  {
    "infinitiv": {
      "de": "lügen",
      "lv": "klamať"
    },
    "praesens": {
      "de": "er lügt",
      "lv": "on klame"
    },
    "imperfektIndikativ": {
      "de": "er log",
      "lv": "on klamal"
    },
    "imperfektKonjunktiv": {
      "de": "er löge",
      "lv": "on by klamal"
    },
    "partizipVergangenheit": {
      "de": "gelogen",
      "lv": "klamal"
    }
  },
  {
    "infinitiv": {
      "de": "mahlen",
      "lv": "mlieť"
    },
    "praesens": {
      "de": "er mahlt",
      "lv": "on melie"
    },
    "imperfektIndikativ": {
      "de": "er mahlte",
      "lv": "on mlel"
    },
    "imperfektKonjunktiv": {
      "de": "er malte",
      "lv": "on by mlel"
    },
    "partizipVergangenheit": {
      "de": "gemahlen",
      "lv": "mletý"
    }
  },
  {
    "infinitiv": {
      "de": "meiden",
      "lv": "vyhýbať sa"
    },
    "praesens": {
      "de": "er meidet",
      "lv": "on sa vyhýba"
    },
    "imperfektIndikativ": {
      "de": "er mied",
      "lv": "on sa vyhýbal"
    },
    "imperfektKonjunktiv": {
      "de": "er miede",
      "lv": "on by sa vyhýbal"
    },
    "partizipVergangenheit": {
      "de": "gemieden",
      "lv": "vyhýbal sa"
    }
  },
  {
    "infinitiv": {
      "de": "melken",
      "lv": "dojiť"
    },
    "praesens": {
      "de": "er milkt / er melkt",
      "lv": "on dojí"
    },
    "imperfektIndikativ": {
      "de": "er molk / er melkte",
      "lv": "on dojil"
    },
    "imperfektKonjunktiv": {
      "de": "er mölke / er melkte",
      "lv": "on by dojil"
    },
    "partizipVergangenheit": {
      "de": "gemolken / gemelkt",
      "lv": "dojený"
    }
  },
  {
    "infinitiv": {
      "de": "messen",
      "lv": "merať"
    },
    "praesens": {
      "de": "er misst",
      "lv": "on meria"
    },
    "imperfektIndikativ": {
      "de": "er mass",
      "lv": "on meral"
    },
    "imperfektKonjunktiv": {
      "de": "er mäße",
      "lv": "on by meral"
    },
    "partizipVergangenheit": {
      "de": "gemessen",
      "lv": "meraný"
    }
  },
  {
    "infinitiv": {
      "de": "misslingen",
      "lv": "nedariť sa"
    },
    "praesens": {
      "de": "es misslingt",
      "lv": "to sa nedarí"
    },
    "imperfektIndikativ": {
      "de": "misslang",
      "lv": "to sa nedarilo"
    },
    "imperfektKonjunktiv": {
      "de": "misslang",
      "lv": "to by sa nedarilo"
    },
    "partizipVergangenheit": {
      "de": "misslungen",
      "lv": "nedaril sa"
    }
  },
  {
    "infinitiv": {
      "de": "mögen",
      "lv": "mať rád"
    },
    "praesens": {
      "de": "er mag",
      "lv": "on má rád"
    },
    "imperfektIndikativ": {
      "de": "mochte",
      "lv": "on mal rád"
    },
    "imperfektKonjunktiv": {
      "de": "mochte",
      "lv": "on by mal rád"
    },
    "partizipVergangenheit": {
      "de": "gemocht",
      "lv": "mal rád"
    }
  },
  {
    "infinitiv": {
      "de": "müssen",
      "lv": "musieť"
    },
    "praesens": {
      "de": "er muss",
      "lv": "on musí"
    },
    "imperfektIndikativ": {
      "de": "musste",
      "lv": "on musel"
    },
    "imperfektKonjunktiv": {
      "de": "musste",
      "lv": "on by musel"
    },
    "partizipVergangenheit": {
      "de": "gemusst",
      "lv": "musel"
    }
  },
  {
    "infinitiv": {
      "de": "nehmen",
      "lv": "brať"
    },
    "praesens": {
      "de": "er nimmt",
      "lv": "on berie"
    },
    "imperfektIndikativ": {
      "de": "er nahm",
      "lv": "on bral"
    },
    "imperfektKonjunktiv": {
      "de": "er nähme",
      "lv": "on by bral"
    },
    "partizipVergangenheit": {
      "de": "genommen",
      "lv": "braný"
    }
  },
  {
    "infinitiv": {
      "de": "nennen",
      "lv": "menovať"
    },
    "praesens": {
      "de": "er nennt",
      "lv": "on menuje"
    },
    "imperfektIndikativ": {
      "de": "er nannte",
      "lv": "on menoval"
    },
    "imperfektKonjunktiv": {
      "de": "er nennte",
      "lv": "on by menoval"
    },
    "partizipVergangenheit": {
      "de": "genannt",
      "lv": "menovaný"
    }
  },
  {
    "infinitiv": {
      "de": "pfeifen",
      "lv": "pískať"
    },
    "praesens": {
      "de": "er pfeift",
      "lv": "on píska"
    },
    "imperfektIndikativ": {
      "de": "er pfiff",
      "lv": "on pískal"
    },
    "imperfektKonjunktiv": {
      "de": "er pfiffe",
      "lv": "on by pískal"
    },
    "partizipVergangenheit": {
      "de": "gepfiffen",
      "lv": "pískal"
    }
  },
  {
    "infinitiv": {
      "de": "pflegen",
      "lv": "ošetrovať"
    },
    "praesens": {
      "de": "er pflegt",
      "lv": "on ošetruje"
    },
    "imperfektIndikativ": {
      "de": "pflegte / pflog",
      "lv": "on ošetroval"
    },
    "imperfektKonjunktiv": {
      "de": "pflegte / pflog",
      "lv": "on by ošetroval"
    },
    "partizipVergangenheit": {
      "de": "gepflegt / gepflogen",
      "lv": "ošetrovaný"
    }
  },
  {
    "infinitiv": {
      "de": "preisen",
      "lv": "chváliť"
    },
    "praesens": {
      "de": "er preist",
      "lv": "on chváli"
    },
    "imperfektIndikativ": {
      "de": "er pries",
      "lv": "on chválil"
    },
    "imperfektKonjunktiv": {
      "de": "er priese",
      "lv": "on by chválil"
    },
    "partizipVergangenheit": {
      "de": "gepriesen",
      "lv": "chválený"
    }
  },
  {
    "infinitiv": {
      "de": "quellen",
      "lv": "napučiavať"
    },
    "praesens": {
      "de": "er quillt",
      "lv": "to napučiava"
    },
    "imperfektIndikativ": {
      "de": "er quoll",
      "lv": "to napučiavalo"
    },
    "imperfektKonjunktiv": {
      "de": "er quölle",
      "lv": "to by napučiavalo"
    },
    "partizipVergangenheit": {
      "de": "gequollen (er ist)",
      "lv": "napučiaval"
    }
  },
  {
    "infinitiv": {
      "de": "raten",
      "lv": "radiť / hádať"
    },
    "praesens": {
      "de": "er rät",
      "lv": "on radí / háda"
    },
    "imperfektIndikativ": {
      "de": "er riet",
      "lv": "on radil / hádal"
    },
    "imperfektKonjunktiv": {
      "de": "er riete",
      "lv": "on by radil / hádal"
    },
    "partizipVergangenheit": {
      "de": "geraten",
      "lv": "radený / hádaný"
    }
  },
  {
    "infinitiv": {
      "de": "reiben",
      "lv": "trieť"
    },
    "praesens": {
      "de": "er reibt",
      "lv": "on trie"
    },
    "imperfektIndikativ": {
      "de": "er rieb",
      "lv": "on trel"
    },
    "imperfektKonjunktiv": {
      "de": "er riebe",
      "lv": "on by trel"
    },
    "partizipVergangenheit": {
      "de": "gerieben",
      "lv": "trený"
    }
  },
  {
    "infinitiv": {
      "de": "reißen",
      "lv": "trhať"
    },
    "praesens": {
      "de": "er reißt",
      "lv": "on trhá"
    },
    "imperfektIndikativ": {
      "de": "er riss",
      "lv": "on trhal"
    },
    "imperfektKonjunktiv": {
      "de": "er risse",
      "lv": "on by trhal"
    },
    "partizipVergangenheit": {
      "de": "gerissen",
      "lv": "trhaný"
    }
  },
  {
    "infinitiv": {
      "de": "reiten",
      "lv": "jazdiť na koni"
    },
    "praesens": {
      "de": "er reitet",
      "lv": "on jazdí na koni"
    },
    "imperfektIndikativ": {
      "de": "er ritt",
      "lv": "on jazdil na koni"
    },
    "imperfektKonjunktiv": {
      "de": "er ritte",
      "lv": "on by jazdil na koni"
    },
    "partizipVergangenheit": {
      "de": "geritten (er ist)",
      "lv": "jazdil na koni"
    }
  },
  {
    "infinitiv": {
      "de": "rennen",
      "lv": "behať"
    },
    "praesens": {
      "de": "er rennt",
      "lv": "on behá"
    },
    "imperfektIndikativ": {
      "de": "er rannte",
      "lv": "on behal"
    },
    "imperfektKonjunktiv": {
      "de": "er rennte",
      "lv": "on by behal"
    },
    "partizipVergangenheit": {
      "de": "gerannt",
      "lv": "behal"
    }
  },
  {
    "infinitiv": {
      "de": "riechen",
      "lv": "čuchať"
    },
    "praesens": {
      "de": "er riecht",
      "lv": "on čuchá"
    },
    "imperfektIndikativ": {
      "de": "er roch",
      "lv": "on čuchal"
    },
    "imperfektKonjunktiv": {
      "de": "er röche",
      "lv": "on by čuchal"
    },
    "partizipVergangenheit": {
      "de": "gerochen",
      "lv": "čuchal"
    }
  },
  {
    "infinitiv": {
      "de": "ringen",
      "lv": "zápasiť"
    },
    "praesens": {
      "de": "er ringt",
      "lv": "on zápasí"
    },
    "imperfektIndikativ": {
      "de": "er rang",
      "lv": "on zápasil"
    },
    "imperfektKonjunktiv": {
      "de": "er ränge",
      "lv": "on by zápasil"
    },
    "partizipVergangenheit": {
      "de": "gerungen",
      "lv": "zápasil"
    }
  },
  {
    "infinitiv": {
      "de": "rinnen",
      "lv": "tiecť"
    },
    "praesens": {
      "de": "er rinnt",
      "lv": "to tečie"
    },
    "imperfektIndikativ": {
      "de": "er rann",
      "lv": "to tieklo"
    },
    "imperfektKonjunktiv": {
      "de": "er ränne / er rönne",
      "lv": "to by tieklo"
    },
    "partizipVergangenheit": {
      "de": "geronnen (er ist)",
      "lv": "tiekol"
    }
  },
  {
    "infinitiv": {
      "de": "rufen",
      "lv": "volať"
    },
    "praesens": {
      "de": "er ruft",
      "lv": "on volá"
    },
    "imperfektIndikativ": {
      "de": "er rief",
      "lv": "on volal"
    },
    "imperfektKonjunktiv": {
      "de": "er riefe",
      "lv": "on by volal"
    },
    "partizipVergangenheit": {
      "de": "gerufen",
      "lv": "volaný"
    }
  },
  {
    "infinitiv": {
      "de": "salzen",
      "lv": "soliť"
    },
    "praesens": {
      "de": "er salzt",
      "lv": "on solí"
    },
    "imperfektIndikativ": {
      "de": "er salzte",
      "lv": "on solil"
    },
    "imperfektKonjunktiv": {
      "de": "er salzte",
      "lv": "on by solil"
    },
    "partizipVergangenheit": {
      "de": "gesalzen",
      "lv": "solený"
    }
  },
  {
    "infinitiv": {
      "de": "saufen",
      "lv": "chľastať / piť"
    },
    "praesens": {
      "de": "er säuft",
      "lv": "on chľastá / pije"
    },
    "imperfektIndikativ": {
      "de": "er soff",
      "lv": "on chľastal / pil"
    },
    "imperfektKonjunktiv": {
      "de": "er söffe",
      "lv": "on by chľastal / pil"
    },
    "partizipVergangenheit": {
      "de": "gesoffen",
      "lv": "chľastal / pitý"
    }
  },
  {
    "infinitiv": {
      "de": "saugen",
      "lv": "sať"
    },
    "praesens": {
      "de": "er saugt",
      "lv": "on saje"
    },
    "imperfektIndikativ": {
      "de": "er sog",
      "lv": "on sal"
    },
    "imperfektKonjunktiv": {
      "de": "er söge",
      "lv": "on by sal"
    },
    "partizipVergangenheit": {
      "de": "gesogen",
      "lv": "satý"
    }
  },
  {
    "infinitiv": {
      "de": "schaffen",
      "lv": "tvoriť"
    },
    "praesens": {
      "de": "er schafft",
      "lv": "on tvorí"
    },
    "imperfektIndikativ": {
      "de": "er schuf",
      "lv": "on tvoril"
    },
    "imperfektKonjunktiv": {
      "de": "er schüfe",
      "lv": "on by tvoril"
    },
    "partizipVergangenheit": {
      "de": "geschaffen",
      "lv": "tvorený"
    }
  },
  {
    "infinitiv": {
      "de": "schallen",
      "lv": "znieť"
    },
    "praesens": {
      "de": "es schallt",
      "lv": "to znie"
    },
    "imperfektIndikativ": {
      "de": "schallte / scholl",
      "lv": "to znelo"
    },
    "imperfektKonjunktiv": {
      "de": "schallte / scholl",
      "lv": "to by znelo"
    },
    "partizipVergangenheit": {
      "de": "geschallt",
      "lv": "znel"
    }
  },
  {
    "infinitiv": {
      "de": "scheiden",
      "lv": "oddeľovať / rozchádzať sa"
    },
    "praesens": {
      "de": "er scheidet",
      "lv": "on oddeľuje / rozchádza sa"
    },
    "imperfektIndikativ": {
      "de": "er schied",
      "lv": "on oddeľoval / rozchádzal sa"
    },
    "imperfektKonjunktiv": {
      "de": "er schiede",
      "lv": "on by oddeľoval / rozchádzal sa"
    },
    "partizipVergangenheit": {
      "de": "geschieden (er hat / er ist)",
      "lv": "oddeľovaný / rozchádzal sa"
    }
  },
  {
    "infinitiv": {
      "de": "scheinen",
      "lv": "svietiť / zdať sa"
    },
    "praesens": {
      "de": "er scheint",
      "lv": "on svieti / zdá sa"
    },
    "imperfektIndikativ": {
      "de": "er schien",
      "lv": "on svietil / zdal sa"
    },
    "imperfektKonjunktiv": {
      "de": "er schiene",
      "lv": "on by svietil / zdal sa"
    },
    "partizipVergangenheit": {
      "de": "geschienen",
      "lv": "svietil / zdal sa"
    }
  },
  {
    "infinitiv": {
      "de": "schelten",
      "lv": "karhať"
    },
    "praesens": {
      "de": "er schilt",
      "lv": "on karhá"
    },
    "imperfektIndikativ": {
      "de": "er schalt",
      "lv": "on karhal"
    },
    "imperfektKonjunktiv": {
      "de": "er schölte / er schälte",
      "lv": "on by karhal"
    },
    "partizipVergangenheit": {
      "de": "gescholten",
      "lv": "karhaný"
    }
  },
  {
    "infinitiv": {
      "de": "scheren",
      "lv": "strihať"
    },
    "praesens": {
      "de": "er schert",
      "lv": "on strihá"
    },
    "imperfektIndikativ": {
      "de": "schor / scherte",
      "lv": "on strihal"
    },
    "imperfektKonjunktiv": {
      "de": "schor / scherte",
      "lv": "on by strihal"
    },
    "partizipVergangenheit": {
      "de": "geschoren / geschert",
      "lv": "strihaný"
    }
  },
  {
    "infinitiv": {
      "de": "schieben",
      "lv": "tlačiť"
    },
    "praesens": {
      "de": "er schiebt",
      "lv": "on tlačí"
    },
    "imperfektIndikativ": {
      "de": "er schob",
      "lv": "on tlačil"
    },
    "imperfektKonjunktiv": {
      "de": "er schöbe",
      "lv": "on by tlačil"
    },
    "partizipVergangenheit": {
      "de": "geschoben",
      "lv": "tlačený"
    }
  },
  {
    "infinitiv": {
      "de": "schießen",
      "lv": "strieľať"
    },
    "praesens": {
      "de": "er schießt",
      "lv": "on strieľa"
    },
    "imperfektIndikativ": {
      "de": "er schoss",
      "lv": "on strieľal"
    },
    "imperfektKonjunktiv": {
      "de": "er schösse",
      "lv": "on by strieľal"
    },
    "partizipVergangenheit": {
      "de": "geschossen",
      "lv": "strieľaný"
    }
  },
  {
    "infinitiv": {
      "de": "schinden",
      "lv": "trápiť"
    },
    "praesens": {
      "de": "er schindet",
      "lv": "on trápi"
    },
    "imperfektIndikativ": {
      "de": "schindete",
      "lv": "on trápil"
    },
    "imperfektKonjunktiv": {
      "de": "schindete",
      "lv": "on by trápil"
    },
    "partizipVergangenheit": {
      "de": "geschunden",
      "lv": "trápený"
    }
  },
  {
    "infinitiv": {
      "de": "schlafen",
      "lv": "spať"
    },
    "praesens": {
      "de": "er schläft",
      "lv": "on spí"
    },
    "imperfektIndikativ": {
      "de": "er schlief",
      "lv": "on spal"
    },
    "imperfektKonjunktiv": {
      "de": "er schliefe",
      "lv": "on by spal"
    },
    "partizipVergangenheit": {
      "de": "geschlafen",
      "lv": "spal"
    }
  },
  {
    "infinitiv": {
      "de": "schlagen",
      "lv": "biť"
    },
    "praesens": {
      "de": "er schlägt",
      "lv": "on bije"
    },
    "imperfektIndikativ": {
      "de": "er schlug",
      "lv": "on bil"
    },
    "imperfektKonjunktiv": {
      "de": "er schlüge",
      "lv": "on by bil"
    },
    "partizipVergangenheit": {
      "de": "geschlagen",
      "lv": "bitý"
    }
  },
  {
    "infinitiv": {
      "de": "schleichen",
      "lv": "zakrádať sa"
    },
    "praesens": {
      "de": "er schleicht",
      "lv": "on sa zakráda"
    },
    "imperfektIndikativ": {
      "de": "er schlich",
      "lv": "on sa zakrádal"
    },
    "imperfektKonjunktiv": {
      "de": "er schliche",
      "lv": "on by sa zakrádal"
    },
    "partizipVergangenheit": {
      "de": "geschlichen (er ist)",
      "lv": "zakrádal sa"
    }
  },
  {
    "infinitiv": {
      "de": "schleifen",
      "lv": "brúsiť"
    },
    "praesens": {
      "de": "er schleift",
      "lv": "on brúsi"
    },
    "imperfektIndikativ": {
      "de": "er schliff",
      "lv": "on brúsil"
    },
    "imperfektKonjunktiv": {
      "de": "er schliffe",
      "lv": "on by brúsil"
    },
    "partizipVergangenheit": {
      "de": "geschliffen",
      "lv": "brúsený"
    }
  },
  {
    "infinitiv": {
      "de": "schließen",
      "lv": "zatvárať"
    },
    "praesens": {
      "de": "er schließt",
      "lv": "on zatvára"
    },
    "imperfektIndikativ": {
      "de": "er schloss",
      "lv": "on zatváral"
    },
    "imperfektKonjunktiv": {
      "de": "er schlösse",
      "lv": "on by zatváral"
    },
    "partizipVergangenheit": {
      "de": "geschlossen",
      "lv": "zatváraný"
    }
  },
  {
    "infinitiv": {
      "de": "schlingen",
      "lv": "hltať"
    },
    "praesens": {
      "de": "er schlingt",
      "lv": "on hltá"
    },
    "imperfektIndikativ": {
      "de": "er schlang",
      "lv": "on hltal"
    },
    "imperfektKonjunktiv": {
      "de": "er schlänge",
      "lv": "on by hltal"
    },
    "partizipVergangenheit": {
      "de": "geschlungen",
      "lv": "hltaný"
    }
  },
  {
    "infinitiv": {
      "de": "schmeißen",
      "lv": "hádzať"
    },
    "praesens": {
      "de": "er schmeißt",
      "lv": "on hádže"
    },
    "imperfektIndikativ": {
      "de": "er schmiss",
      "lv": "on hádzal"
    },
    "imperfektKonjunktiv": {
      "de": "er schmisse",
      "lv": "on by hádzal"
    },
    "partizipVergangenheit": {
      "de": "geschmissen",
      "lv": "hádzaný"
    }
  },
  {
    "infinitiv": {
      "de": "schmelzen",
      "lv": "topiť sa"
    },
    "praesens": {
      "de": "er schmilzt",
      "lv": "to sa topí"
    },
    "imperfektIndikativ": {
      "de": "er schmolz",
      "lv": "to sa topilo"
    },
    "imperfektKonjunktiv": {
      "de": "er schmölze",
      "lv": "to by sa topilo"
    },
    "partizipVergangenheit": {
      "de": "geschmolzen (er ist)",
      "lv": "topil sa"
    }
  },
  {
    "infinitiv": {
      "de": "schnauben",
      "lv": "fŕkať"
    },
    "praesens": {
      "de": "er schnaubt",
      "lv": "on fŕka"
    },
    "imperfektIndikativ": {
      "de": "schnaubte / schnob",
      "lv": "on fŕkal"
    },
    "imperfektKonjunktiv": {
      "de": "schnaubte / schnob",
      "lv": "on by fŕkal"
    },
    "partizipVergangenheit": {
      "de": "geschnaubt / geschnoben",
      "lv": "fŕkal"
    }
  },
  {
    "infinitiv": {
      "de": "schneiden",
      "lv": "rezať"
    },
    "praesens": {
      "de": "er schneidet",
      "lv": "on reže"
    },
    "imperfektIndikativ": {
      "de": "er schnitt",
      "lv": "on rezal"
    },
    "imperfektKonjunktiv": {
      "de": "er schnitte",
      "lv": "on by rezal"
    },
    "partizipVergangenheit": {
      "de": "geschnitten",
      "lv": "rezaný"
    }
  },
  {
    "infinitiv": {
      "de": "schreiben",
      "lv": "písať"
    },
    "praesens": {
      "de": "er schreibt",
      "lv": "on píše"
    },
    "imperfektIndikativ": {
      "de": "er schrieb",
      "lv": "on písal"
    },
    "imperfektKonjunktiv": {
      "de": "er schriebe",
      "lv": "on by písal"
    },
    "partizipVergangenheit": {
      "de": "geschrieben",
      "lv": "písaný"
    }
  },
  {
    "infinitiv": {
      "de": "schreien",
      "lv": "kričať"
    },
    "praesens": {
      "de": "er schreit",
      "lv": "on kričí"
    },
    "imperfektIndikativ": {
      "de": "er schrie",
      "lv": "on kričal"
    },
    "imperfektKonjunktiv": {
      "de": "er schriee",
      "lv": "on by kričal"
    },
    "partizipVergangenheit": {
      "de": "geschrien",
      "lv": "kričal"
    }
  },
  {
    "infinitiv": {
      "de": "schreiten",
      "lv": "kráčať"
    },
    "praesens": {
      "de": "er schreitet",
      "lv": "on kráča"
    },
    "imperfektIndikativ": {
      "de": "er schritt",
      "lv": "on kráčal"
    },
    "imperfektKonjunktiv": {
      "de": "er schritte",
      "lv": "on by kráčal"
    },
    "partizipVergangenheit": {
      "de": "geschritten (er ist)",
      "lv": "kráčal"
    }
  },
  {
    "infinitiv": {
      "de": "schweigen",
      "lv": "mlčať"
    },
    "praesens": {
      "de": "er schweigt",
      "lv": "on mlčí"
    },
    "imperfektIndikativ": {
      "de": "er schwieg",
      "lv": "on mlčal"
    },
    "imperfektKonjunktiv": {
      "de": "er schwiege",
      "lv": "on by mlčal"
    },
    "partizipVergangenheit": {
      "de": "geschwiegen",
      "lv": "mlčal"
    }
  },
  {
    "infinitiv": {
      "de": "schwellen",
      "lv": "napúchať"
    },
    "praesens": {
      "de": "er schwillt",
      "lv": "to napúcha"
    },
    "imperfektIndikativ": {
      "de": "er schwoll",
      "lv": "to napúchalo"
    },
    "imperfektKonjunktiv": {
      "de": "er schwölle",
      "lv": "to by napúchalo"
    },
    "partizipVergangenheit": {
      "de": "geschwollen (er ist)",
      "lv": "napúchal"
    }
  },
  {
    "infinitiv": {
      "de": "schwimmen",
      "lv": "plávať"
    },
    "praesens": {
      "de": "er schwimmt",
      "lv": "on pláva"
    },
    "imperfektIndikativ": {
      "de": "er schwamm",
      "lv": "on plával"
    },
    "imperfektKonjunktiv": {
      "de": "er schwömme / er schwämme",
      "lv": "on by plával"
    },
    "partizipVergangenheit": {
      "de": "geschwommen (er ist)",
      "lv": "plával"
    }
  },
  {
    "infinitiv": {
      "de": "schwinden",
      "lv": "miznúť"
    },
    "praesens": {
      "de": "er schwindet",
      "lv": "to mizne"
    },
    "imperfektIndikativ": {
      "de": "er schwand",
      "lv": "to mizlo"
    },
    "imperfektKonjunktiv": {
      "de": "er schwände",
      "lv": "to by mizlo"
    },
    "partizipVergangenheit": {
      "de": "geschwunden (er ist)",
      "lv": "mizol"
    }
  },
  {
    "infinitiv": {
      "de": "schwingen",
      "lv": "mávať"
    },
    "praesens": {
      "de": "er schwingt",
      "lv": "on máva"
    },
    "imperfektIndikativ": {
      "de": "er schwang",
      "lv": "on mával"
    },
    "imperfektKonjunktiv": {
      "de": "er schwänge",
      "lv": "on by mával"
    },
    "partizipVergangenheit": {
      "de": "geschwungen",
      "lv": "mával"
    }
  },
  {
    "infinitiv": {
      "de": "schwören",
      "lv": "prisahať"
    },
    "praesens": {
      "de": "er schwört",
      "lv": "on prisahá"
    },
    "imperfektIndikativ": {
      "de": "er schwur / er schwor",
      "lv": "on prisahal"
    },
    "imperfektKonjunktiv": {
      "de": "er schwöre",
      "lv": "on by prisahal"
    },
    "partizipVergangenheit": {
      "de": "geschworen",
      "lv": "prisahaný"
    }
  },
  {
    "infinitiv": {
      "de": "sehen",
      "lv": "vidieť"
    },
    "praesens": {
      "de": "er sieht",
      "lv": "on vidí"
    },
    "imperfektIndikativ": {
      "de": "er sah",
      "lv": "on videl"
    },
    "imperfektKonjunktiv": {
      "de": "er sähe",
      "lv": "on by videl"
    },
    "partizipVergangenheit": {
      "de": "gesehen",
      "lv": "videný"
    }
  },
  {
    "infinitiv": {
      "de": "sein",
      "lv": "byť"
    },
    "praesens": {
      "de": "er ist",
      "lv": "on je"
    },
    "imperfektIndikativ": {
      "de": "war",
      "lv": "on bol"
    },
    "imperfektKonjunktiv": {
      "de": "war",
      "lv": "on by bol"
    },
    "partizipVergangenheit": {
      "de": "gewesen",
      "lv": "bol"
    }
  },
  {
    "infinitiv": {
      "de": "senden",
      "lv": "posielať"
    },
    "praesens": {
      "de": "er sendet",
      "lv": "on posiela"
    },
    "imperfektIndikativ": {
      "de": "er sandte / er sendete",
      "lv": "on posielal"
    },
    "imperfektKonjunktiv": {
      "de": "er sendete",
      "lv": "on by posielal"
    },
    "partizipVergangenheit": {
      "de": "gesandt / gesendet",
      "lv": "posielaný"
    }
  },
  {
    "infinitiv": {
      "de": "sieden",
      "lv": "variť"
    },
    "praesens": {
      "de": "er siedet",
      "lv": "on varí"
    },
    "imperfektIndikativ": {
      "de": "sott / siedete",
      "lv": "on varil"
    },
    "imperfektKonjunktiv": {
      "de": "sott / siedete",
      "lv": "on by varil"
    },
    "partizipVergangenheit": {
      "de": "gesotten / gesiedet",
      "lv": "varený"
    }
  },
  {
    "infinitiv": {
      "de": "singen",
      "lv": "spievať"
    },
    "praesens": {
      "de": "er singt",
      "lv": "on spieva"
    },
    "imperfektIndikativ": {
      "de": "er sang",
      "lv": "on spieval"
    },
    "imperfektKonjunktiv": {
      "de": "er sänge",
      "lv": "on by spieval"
    },
    "partizipVergangenheit": {
      "de": "gesungen",
      "lv": "spievaný"
    }
  },
  {
    "infinitiv": {
      "de": "sinken",
      "lv": "klesať"
    },
    "praesens": {
      "de": "er sinkt",
      "lv": "on klesá"
    },
    "imperfektIndikativ": {
      "de": "er sank",
      "lv": "on klesal"
    },
    "imperfektKonjunktiv": {
      "de": "er sänke",
      "lv": "on by klesal"
    },
    "partizipVergangenheit": {
      "de": "gesunken (er ist)",
      "lv": "klesal"
    }
  },
  {
    "infinitiv": {
      "de": "sinnen",
      "lv": "premýšľať"
    },
    "praesens": {
      "de": "er sinnt",
      "lv": "on premýšľa"
    },
    "imperfektIndikativ": {
      "de": "er sann",
      "lv": "on premýšľal"
    },
    "imperfektKonjunktiv": {
      "de": "er sönne / er sänne",
      "lv": "on by premýšľal"
    },
    "partizipVergangenheit": {
      "de": "gesonnen",
      "lv": "premýšľal"
    }
  },
  {
    "infinitiv": {
      "de": "sitzen",
      "lv": "sedieť"
    },
    "praesens": {
      "de": "er sitzt",
      "lv": "on sedí"
    },
    "imperfektIndikativ": {
      "de": "er sass",
      "lv": "on sedel"
    },
    "imperfektKonjunktiv": {
      "de": "er säße",
      "lv": "on by sedel"
    },
    "partizipVergangenheit": {
      "de": "gesessen",
      "lv": "sedel"
    }
  },
  {
    "infinitiv": {
      "de": "sollen",
      "lv": "mať"
    },
    "praesens": {
      "de": "er soll",
      "lv": "on má"
    },
    "imperfektIndikativ": {
      "de": "sollte",
      "lv": "on mal"
    },
    "imperfektKonjunktiv": {
      "de": "sollte",
      "lv": "on by mal"
    },
    "partizipVergangenheit": {
      "de": "gesollt",
      "lv": "mal"
    }
  },
  {
    "infinitiv": {
      "de": "speien",
      "lv": "pľuť"
    },
    "praesens": {
      "de": "er speit",
      "lv": "on pľuje"
    },
    "imperfektIndikativ": {
      "de": "er spie",
      "lv": "on pľul"
    },
    "imperfektKonjunktiv": {
      "de": "er spie",
      "lv": "on by pľul"
    },
    "partizipVergangenheit": {
      "de": "gespien",
      "lv": "pľutý"
    }
  },
  {
    "infinitiv": {
      "de": "spinnen",
      "lv": "priasť"
    },
    "praesens": {
      "de": "er spinnt",
      "lv": "on pradie"
    },
    "imperfektIndikativ": {
      "de": "er spann",
      "lv": "on priadol"
    },
    "imperfektKonjunktiv": {
      "de": "er spönne / er spänne",
      "lv": "on by priadol"
    },
    "partizipVergangenheit": {
      "de": "gesponnen",
      "lv": "pradený"
    }
  },
  {
    "infinitiv": {
      "de": "spleißen",
      "lv": "spájať"
    },
    "praesens": {
      "de": "er spleißt",
      "lv": "on spája"
    },
    "imperfektIndikativ": {
      "de": "spliss",
      "lv": "on spájal"
    },
    "imperfektKonjunktiv": {
      "de": "spliss",
      "lv": "on by spájal"
    },
    "partizipVergangenheit": {
      "de": "gesplissen",
      "lv": "spájaný"
    }
  },
  {
    "infinitiv": {
      "de": "sprechen",
      "lv": "hovoriť"
    },
    "praesens": {
      "de": "er spricht",
      "lv": "on hovorí"
    },
    "imperfektIndikativ": {
      "de": "er sprach",
      "lv": "on hovoril"
    },
    "imperfektKonjunktiv": {
      "de": "er spräche",
      "lv": "on by hovoril"
    },
    "partizipVergangenheit": {
      "de": "gesprochen",
      "lv": "hovorený"
    }
  },
  {
    "infinitiv": {
      "de": "sprießen",
      "lv": "pučať"
    },
    "praesens": {
      "de": "er sprießt",
      "lv": "to pučí"
    },
    "imperfektIndikativ": {
      "de": "er spross",
      "lv": "to pučalo"
    },
    "imperfektKonjunktiv": {
      "de": "er sprösse",
      "lv": "to by pučalo"
    },
    "partizipVergangenheit": {
      "de": "gesprossen (er ist)",
      "lv": "pučal"
    }
  },
  {
    "infinitiv": {
      "de": "springen",
      "lv": "skákať"
    },
    "praesens": {
      "de": "er springt",
      "lv": "on skáče"
    },
    "imperfektIndikativ": {
      "de": "er sprang",
      "lv": "on skákal"
    },
    "imperfektKonjunktiv": {
      "de": "er spränge",
      "lv": "on by skákal"
    },
    "partizipVergangenheit": {
      "de": "gesprungen (er ist)",
      "lv": "skákal"
    }
  },
  {
    "infinitiv": {
      "de": "stechen",
      "lv": "bodať"
    },
    "praesens": {
      "de": "er sticht",
      "lv": "on bodá"
    },
    "imperfektIndikativ": {
      "de": "er stach",
      "lv": "on bodal"
    },
    "imperfektKonjunktiv": {
      "de": "er stäche",
      "lv": "on by bodal"
    },
    "partizipVergangenheit": {
      "de": "gestochen",
      "lv": "bodaný"
    }
  },
  {
    "infinitiv": {
      "de": "stecken",
      "lv": "strkať / zapichovať"
    },
    "praesens": {
      "de": "er steckt",
      "lv": "on strká / zapichuje"
    },
    "imperfektIndikativ": {
      "de": "stak / steckte",
      "lv": "on strkal / zapichoval"
    },
    "imperfektKonjunktiv": {
      "de": "stak / steckte",
      "lv": "on by strkal / zapichoval"
    },
    "partizipVergangenheit": {
      "de": "gesteckt",
      "lv": "strkaný / zapichovaný"
    }
  },
  {
    "infinitiv": {
      "de": "stehen",
      "lv": "stáť"
    },
    "praesens": {
      "de": "er steht",
      "lv": "on stojí"
    },
    "imperfektIndikativ": {
      "de": "er stand",
      "lv": "on stál"
    },
    "imperfektKonjunktiv": {
      "de": "er stände / er stünde",
      "lv": "on by stál"
    },
    "partizipVergangenheit": {
      "de": "gestanden",
      "lv": "stál"
    }
  },
  {
    "infinitiv": {
      "de": "stehlen",
      "lv": "kradnúť"
    },
    "praesens": {
      "de": "er stiehlt",
      "lv": "on kradne"
    },
    "imperfektIndikativ": {
      "de": "er stahl",
      "lv": "on kradol"
    },
    "imperfektKonjunktiv": {
      "de": "er stöhle / er stähle",
      "lv": "on by kradol"
    },
    "partizipVergangenheit": {
      "de": "gestohlen",
      "lv": "kradnutý"
    }
  },
  {
    "infinitiv": {
      "de": "steigen",
      "lv": "stúpať"
    },
    "praesens": {
      "de": "er steigt",
      "lv": "on stúpa"
    },
    "imperfektIndikativ": {
      "de": "er stieg",
      "lv": "on stúpal"
    },
    "imperfektKonjunktiv": {
      "de": "er stiege",
      "lv": "on by stúpal"
    },
    "partizipVergangenheit": {
      "de": "gestiegen (er ist)",
      "lv": "stúpal"
    }
  },
  {
    "infinitiv": {
      "de": "sterben",
      "lv": "umierať"
    },
    "praesens": {
      "de": "er stirbt",
      "lv": "on umiera"
    },
    "imperfektIndikativ": {
      "de": "er starb",
      "lv": "on umieral"
    },
    "imperfektKonjunktiv": {
      "de": "er stürbe",
      "lv": "on by umieral"
    },
    "partizipVergangenheit": {
      "de": "gestorben (er ist)",
      "lv": "umieral"
    }
  },
  {
    "infinitiv": {
      "de": "stinken",
      "lv": "smrdieť"
    },
    "praesens": {
      "de": "es stinkt",
      "lv": "to smrdí"
    },
    "imperfektIndikativ": {
      "de": "stank",
      "lv": "to smrdelo"
    },
    "imperfektKonjunktiv": {
      "de": "stank",
      "lv": "to by smrdelo"
    },
    "partizipVergangenheit": {
      "de": "gestunken",
      "lv": "smrdel"
    }
  },
  {
    "infinitiv": {
      "de": "stoßen",
      "lv": "strkať"
    },
    "praesens": {
      "de": "er stößt",
      "lv": "on strká"
    },
    "imperfektIndikativ": {
      "de": "er stieß",
      "lv": "on strkal"
    },
    "imperfektKonjunktiv": {
      "de": "er stieße",
      "lv": "on by strkal"
    },
    "partizipVergangenheit": {
      "de": "gestoßen",
      "lv": "strkaný"
    }
  },
  {
    "infinitiv": {
      "de": "streichen",
      "lv": "natierať / škrtať"
    },
    "praesens": {
      "de": "er streicht",
      "lv": "on natiera / škrtá"
    },
    "imperfektIndikativ": {
      "de": "er strich",
      "lv": "on natieral / škrtal"
    },
    "imperfektKonjunktiv": {
      "de": "er striche",
      "lv": "on by natieral / škrtal"
    },
    "partizipVergangenheit": {
      "de": "gestrichen",
      "lv": "natieraný / škrtaný"
    }
  },
  {
    "infinitiv": {
      "de": "streiten",
      "lv": "hádať sa"
    },
    "praesens": {
      "de": "er streitet",
      "lv": "on sa háda"
    },
    "imperfektIndikativ": {
      "de": "er stritt",
      "lv": "on sa hádal"
    },
    "imperfektKonjunktiv": {
      "de": "er stritte",
      "lv": "on by sa hádal"
    },
    "partizipVergangenheit": {
      "de": "gestritten",
      "lv": "hádal sa"
    }
  },
  {
    "infinitiv": {
      "de": "tragen",
      "lv": "niesť"
    },
    "praesens": {
      "de": "er trägt",
      "lv": "on nesie"
    },
    "imperfektIndikativ": {
      "de": "er trug",
      "lv": "on niesol"
    },
    "imperfektKonjunktiv": {
      "de": "er trüge",
      "lv": "on by niesol"
    },
    "partizipVergangenheit": {
      "de": "getragen",
      "lv": "nesený"
    }
  },
  {
    "infinitiv": {
      "de": "treffen",
      "lv": "stretávať"
    },
    "praesens": {
      "de": "er trifft",
      "lv": "on stretáva"
    },
    "imperfektIndikativ": {
      "de": "er traf",
      "lv": "on stretával"
    },
    "imperfektKonjunktiv": {
      "de": "er träfe",
      "lv": "on by stretával"
    },
    "partizipVergangenheit": {
      "de": "getroffen",
      "lv": "stretávaný"
    }
  },
  {
    "infinitiv": {
      "de": "treiben",
      "lv": "hnať"
    },
    "praesens": {
      "de": "er treibt",
      "lv": "on ženie"
    },
    "imperfektIndikativ": {
      "de": "er trieb",
      "lv": "on hnal"
    },
    "imperfektKonjunktiv": {
      "de": "er triebe",
      "lv": "on by hnal"
    },
    "partizipVergangenheit": {
      "de": "getrieben",
      "lv": "hnaný"
    }
  },
  {
    "infinitiv": {
      "de": "treten",
      "lv": "vstupovať / ísť"
    },
    "praesens": {
      "de": "er tritt",
      "lv": "on vstupuje / ide"
    },
    "imperfektIndikativ": {
      "de": "er trat",
      "lv": "on vstupoval / išiel"
    },
    "imperfektKonjunktiv": {
      "de": "er träte",
      "lv": "on by vstupoval / išiel"
    },
    "partizipVergangenheit": {
      "de": "getreten (er ist)",
      "lv": "vstupoval / išiel"
    }
  },
  {
    "infinitiv": {
      "de": "trinken",
      "lv": "piť"
    },
    "praesens": {
      "de": "er trinkt",
      "lv": "on pije"
    },
    "imperfektIndikativ": {
      "de": "er trank",
      "lv": "on pil"
    },
    "imperfektKonjunktiv": {
      "de": "er tränke",
      "lv": "on by pil"
    },
    "partizipVergangenheit": {
      "de": "getrunken",
      "lv": "pitý"
    }
  },
  {
    "infinitiv": {
      "de": "trügen",
      "lv": "klamať"
    },
    "praesens": {
      "de": "er trögt",
      "lv": "on klame"
    },
    "imperfektIndikativ": {
      "de": "er trog",
      "lv": "on klamal"
    },
    "imperfektKonjunktiv": {
      "de": "er tröge",
      "lv": "on by klamal"
    },
    "partizipVergangenheit": {
      "de": "getrogen",
      "lv": "klamaný"
    }
  },
  {
    "infinitiv": {
      "de": "tun",
      "lv": "robiť"
    },
    "praesens": {
      "de": "er tut",
      "lv": "on robí"
    },
    "imperfektIndikativ": {
      "de": "er tat",
      "lv": "on robil"
    },
    "imperfektKonjunktiv": {
      "de": "er täte",
      "lv": "on by robil"
    },
    "partizipVergangenheit": {
      "de": "getan",
      "lv": "robený"
    }
  },
  {
    "infinitiv": {
      "de": "verderben",
      "lv": "kaziť"
    },
    "praesens": {
      "de": "er verdirbt",
      "lv": "on kazí"
    },
    "imperfektIndikativ": {
      "de": "er verdarb",
      "lv": "on kazil"
    },
    "imperfektKonjunktiv": {
      "de": "er verdürbe",
      "lv": "on by kazil"
    },
    "partizipVergangenheit": {
      "de": "verdorben",
      "lv": "kazený"
    }
  },
  {
    "infinitiv": {
      "de": "verdrießen",
      "lv": "rozčuľovať"
    },
    "praesens": {
      "de": "er verdrießt",
      "lv": "on rozčuľuje"
    },
    "imperfektIndikativ": {
      "de": "er verdross",
      "lv": "on rozčuľoval"
    },
    "imperfektKonjunktiv": {
      "de": "er verdrösse",
      "lv": "on by rozčuľoval"
    },
    "partizipVergangenheit": {
      "de": "verdrossen",
      "lv": "rozčuľovaný"
    }
  },
  {
    "infinitiv": {
      "de": "vergessen",
      "lv": "zabúdať"
    },
    "praesens": {
      "de": "er vergisst",
      "lv": "on zabúda"
    },
    "imperfektIndikativ": {
      "de": "er vergass",
      "lv": "on zabúdal"
    },
    "imperfektKonjunktiv": {
      "de": "er vergäße",
      "lv": "on by zabúdal"
    },
    "partizipVergangenheit": {
      "de": "vergessen",
      "lv": "zabúdaný"
    }
  },
  {
    "infinitiv": {
      "de": "verlieren",
      "lv": "strácať"
    },
    "praesens": {
      "de": "er verliert",
      "lv": "on stráca"
    },
    "imperfektIndikativ": {
      "de": "er verlor",
      "lv": "on strácal"
    },
    "imperfektKonjunktiv": {
      "de": "er verlöre",
      "lv": "on by strácal"
    },
    "partizipVergangenheit": {
      "de": "verloren",
      "lv": "strácaný"
    }
  },
  {
    "infinitiv": {
      "de": "wachsen",
      "lv": "rásť"
    },
    "praesens": {
      "de": "er wächst",
      "lv": "on rastie"
    },
    "imperfektIndikativ": {
      "de": "er wuchs",
      "lv": "on rástol"
    },
    "imperfektKonjunktiv": {
      "de": "er wüchse",
      "lv": "on by rástol"
    },
    "partizipVergangenheit": {
      "de": "gewachsen (er ist)",
      "lv": "rástol"
    }
  },
  {
    "infinitiv": {
      "de": "waschen",
      "lv": "umývať"
    },
    "praesens": {
      "de": "er wäscht",
      "lv": "on umýva"
    },
    "imperfektIndikativ": {
      "de": "er wusch",
      "lv": "on umýval"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsche",
      "lv": "on by umýval"
    },
    "partizipVergangenheit": {
      "de": "gewaschen",
      "lv": "umývaný"
    }
  },
  {
    "infinitiv": {
      "de": "weben",
      "lv": "tkať"
    },
    "praesens": {
      "de": "er webt",
      "lv": "on tká"
    },
    "imperfektIndikativ": {
      "de": "wob",
      "lv": "on tkal"
    },
    "imperfektKonjunktiv": {
      "de": "wob",
      "lv": "on by tkal"
    },
    "partizipVergangenheit": {
      "de": "gewoben",
      "lv": "tkaný"
    }
  },
  {
    "infinitiv": {
      "de": "weichen",
      "lv": "ustupovať"
    },
    "praesens": {
      "de": "er weicht",
      "lv": "on ustupuje"
    },
    "imperfektIndikativ": {
      "de": "er wich",
      "lv": "on ustupoval"
    },
    "imperfektKonjunktiv": {
      "de": "er wiche",
      "lv": "on by ustupoval"
    },
    "partizipVergangenheit": {
      "de": "gewichen (er ist)",
      "lv": "ustupoval"
    }
  },
  {
    "infinitiv": {
      "de": "weisen",
      "lv": "ukazovať"
    },
    "praesens": {
      "de": "er weist",
      "lv": "on ukazuje"
    },
    "imperfektIndikativ": {
      "de": "er wies",
      "lv": "on ukazoval"
    },
    "imperfektKonjunktiv": {
      "de": "er wiese",
      "lv": "on by ukazoval"
    },
    "partizipVergangenheit": {
      "de": "gewiesen",
      "lv": "ukazovaný"
    }
  },
  {
    "infinitiv": {
      "de": "wenden",
      "lv": "otáčať / obracať"
    },
    "praesens": {
      "de": "er wendet",
      "lv": "on otáča / obracia"
    },
    "imperfektIndikativ": {
      "de": "er wandte / es wendete",
      "lv": "on otáčal / obracal"
    },
    "imperfektKonjunktiv": {
      "de": "er wendete",
      "lv": "on by otáčal / obracal"
    },
    "partizipVergangenheit": {
      "de": "gewandt / gewendet",
      "lv": "otáčaný / obracaný"
    }
  },
  {
    "infinitiv": {
      "de": "werben",
      "lv": "dvoriť"
    },
    "praesens": {
      "de": "er wirbt",
      "lv": "on dvorí"
    },
    "imperfektIndikativ": {
      "de": "er warb",
      "lv": "on dvoril"
    },
    "imperfektKonjunktiv": {
      "de": "er würbe",
      "lv": "on by dvoril"
    },
    "partizipVergangenheit": {
      "de": "geworben",
      "lv": "dvoril"
    }
  },
  {
    "infinitiv": {
      "de": "werden",
      "lv": "stávať sa"
    },
    "praesens": {
      "de": "er wird",
      "lv": "on sa stáva"
    },
    "imperfektIndikativ": {
      "de": "wurde",
      "lv": "on sa stával"
    },
    "imperfektKonjunktiv": {
      "de": "wurde",
      "lv": "on by sa stával"
    },
    "partizipVergangenheit": {
      "de": "geworden",
      "lv": "stával sa"
    }
  },
  {
    "infinitiv": {
      "de": "werfen",
      "lv": "hádzať"
    },
    "praesens": {
      "de": "er wirft",
      "lv": "on hádže"
    },
    "imperfektIndikativ": {
      "de": "er warf",
      "lv": "on hádzal"
    },
    "imperfektKonjunktiv": {
      "de": "er würfe",
      "lv": "on by hádzal"
    },
    "partizipVergangenheit": {
      "de": "geworfen",
      "lv": "hádzaný"
    }
  },
  {
    "infinitiv": {
      "de": "wiegen",
      "lv": "vážiť"
    },
    "praesens": {
      "de": "er wiegt",
      "lv": "on váži"
    },
    "imperfektIndikativ": {
      "de": "er wog",
      "lv": "on vážil"
    },
    "imperfektKonjunktiv": {
      "de": "er wöge",
      "lv": "on by vážil"
    },
    "partizipVergangenheit": {
      "de": "gewogen",
      "lv": "vážený"
    }
  },
  {
    "infinitiv": {
      "de": "winden",
      "lv": "viť"
    },
    "praesens": {
      "de": "er windet",
      "lv": "on vije"
    },
    "imperfektIndikativ": {
      "de": "er wand",
      "lv": "on vil"
    },
    "imperfektKonjunktiv": {
      "de": "er wände",
      "lv": "on by vil"
    },
    "partizipVergangenheit": {
      "de": "gewunden",
      "lv": "vitý"
    }
  },
  {
    "infinitiv": {
      "de": "wissen",
      "lv": "vedieť"
    },
    "praesens": {
      "de": "er weiß",
      "lv": "on vie"
    },
    "imperfektIndikativ": {
      "de": "er wusste",
      "lv": "on vedel"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsste",
      "lv": "on by vedel"
    },
    "partizipVergangenheit": {
      "de": "gewusst",
      "lv": "vedel"
    }
  },
  {
    "infinitiv": {
      "de": "wollen",
      "lv": "chcieť"
    },
    "praesens": {
      "de": "er will",
      "lv": "on chce"
    },
    "imperfektIndikativ": {
      "de": "wollte",
      "lv": "on chcel"
    },
    "imperfektKonjunktiv": {
      "de": "wollte",
      "lv": "on by chcel"
    },
    "partizipVergangenheit": {
      "de": "gewollt",
      "lv": "chcel"
    }
  },
  {
    "infinitiv": {
      "de": "wringen",
      "lv": "žmýkať / vytláčať"
    },
    "praesens": {
      "de": "er wringt",
      "lv": "on žmýka / vytláča"
    },
    "imperfektIndikativ": {
      "de": "wrang",
      "lv": "on žmýkal / vytláčal"
    },
    "imperfektKonjunktiv": {
      "de": "wrang",
      "lv": "on by žmýkal / vytláčal"
    },
    "partizipVergangenheit": {
      "de": "gewrungen",
      "lv": "žmýkaný / vytláčaný"
    }
  },
  {
    "infinitiv": {
      "de": "zeihen",
      "lv": "obviňovať"
    },
    "praesens": {
      "de": "er zeiht",
      "lv": "on obviňuje"
    },
    "imperfektIndikativ": {
      "de": "zieh",
      "lv": "on obviňoval"
    },
    "imperfektKonjunktiv": {
      "de": "zieh",
      "lv": "on by obviňoval"
    },
    "partizipVergangenheit": {
      "de": "geziehen",
      "lv": "obviňovaný"
    }
  },
  {
    "infinitiv": {
      "de": "ziehen",
      "lv": "ťahať"
    },
    "praesens": {
      "de": "er zieht",
      "lv": "on ťahá"
    },
    "imperfektIndikativ": {
      "de": "er zog",
      "lv": "on ťahal"
    },
    "imperfektKonjunktiv": {
      "de": "er zöge",
      "lv": "on by ťahal"
    },
    "partizipVergangenheit": {
      "de": "gezogen",
      "lv": "ťahaný"
    }
  },
  {
    "infinitiv": {
      "de": "zwingen",
      "lv": "nútiť"
    },
    "praesens": {
      "de": "er zwingt",
      "lv": "on núti"
    },
    "imperfektIndikativ": {
      "de": "er zwang",
      "lv": "on nútil"
    },
    "imperfektKonjunktiv": {
      "de": "er zwänge",
      "lv": "on by nútil"
    },
    "partizipVergangenheit": {
      "de": "gezwungen",
      "lv": "nútený"
    }
  },
  {
    "infinitiv": {
      "de": "empfangen",
      "lv": "prijímať"
    },
    "praesens": {
      "de": "er empfängt",
      "lv": "on prijíma"
    },
    "imperfektIndikativ": {
      "de": "er empfing",
      "lv": "on prijímal"
    },
    "imperfektKonjunktiv": {
      "de": "er empfinge",
      "lv": "on by prijímal"
    },
    "partizipVergangenheit": {
      "de": "empfangen",
      "lv": "prijímaný"
    }
  },
  {
    "infinitiv": {
      "de": "erwägen",
      "lv": "zvažovať"
    },
    "praesens": {
      "de": "er erwägt",
      "lv": "on zvažuje"
    },
    "imperfektIndikativ": {
      "de": "er erwog",
      "lv": "on zvažoval"
    },
    "imperfektKonjunktiv": {
      "de": "er erwöge",
      "lv": "on by zvažoval"
    },
    "partizipVergangenheit": {
      "de": "erwogen",
      "lv": "zvažovaný"
    }
  },
  {
    "infinitiv": {
      "de": "fechten",
      "lv": "bojovať"
    },
    "praesens": {
      "de": "er ficht",
      "lv": "on bojuje"
    },
    "imperfektIndikativ": {
      "de": "er focht",
      "lv": "on bojoval"
    },
    "imperfektKonjunktiv": {
      "de": "er föchte",
      "lv": "on by bojoval"
    },
    "partizipVergangenheit": {
      "de": "gefochten",
      "lv": "bojoval"
    }
  },
  {
    "infinitiv": {
      "de": "flechten",
      "lv": "pliesť"
    },
    "praesens": {
      "de": "er flicht",
      "lv": "on pletie"
    },
    "imperfektIndikativ": {
      "de": "er flocht",
      "lv": "on plietol"
    },
    "imperfektKonjunktiv": {
      "de": "er flöchte",
      "lv": "on by plietol"
    },
    "partizipVergangenheit": {
      "de": "geflochten",
      "lv": "pletený"
    }
  },
  {
    "infinitiv": {
      "de": "hangen",
      "lv": "visieť"
    },
    "praesens": {
      "de": "er hängt",
      "lv": "on visí"
    },
    "imperfektIndikativ": {
      "de": "er hing",
      "lv": "on visel"
    },
    "imperfektKonjunktiv": {
      "de": "er hinge",
      "lv": "on by visel"
    },
    "partizipVergangenheit": {
      "de": "gehangen",
      "lv": "visel"
    }
  },
  {
    "infinitiv": {
      "de": "spalten",
      "lv": "štiepať"
    },
    "praesens": {
      "de": "er spaltet",
      "lv": "on štiepe"
    },
    "imperfektIndikativ": {
      "de": "er spaltete",
      "lv": "on štiepal"
    },
    "imperfektKonjunktiv": {
      "de": "er spaltete",
      "lv": "on by štiepal"
    },
    "partizipVergangenheit": {
      "de": "gespalten",
      "lv": "štiepaný"
    }
  },
  {
    "infinitiv": {
      "de": "verzeihen",
      "lv": "odpúšťať"
    },
    "praesens": {
      "de": "er verzeiht",
      "lv": "on odpúšťa"
    },
    "imperfektIndikativ": {
      "de": "er verzieh",
      "lv": "on odpúšťal"
    },
    "imperfektKonjunktiv": {
      "de": "er verziehe",
      "lv": "on by odpúšťal"
    },
    "partizipVergangenheit": {
      "de": "verziehen",
      "lv": "odpúšťaný"
    }
  }
];

window.VERB_ENTRIES = VERB_ENTRIES;

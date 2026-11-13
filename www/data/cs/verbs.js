const VERB_ENTRIES = [
  {
    "infinitiv": {
      "de": "backen",
      "lv": "péct"
    },
    "praesens": {
      "de": "er bäckt",
      "lv": "on peče"
    },
    "imperfektIndikativ": {
      "de": "er buk",
      "lv": "on pekl"
    },
    "imperfektKonjunktiv": {
      "de": "er büke",
      "lv": "on by pekl"
    },
    "partizipVergangenheit": {
      "de": "gebacken",
      "lv": "pečen"
    }
  },
  {
    "infinitiv": {
      "de": "befehlen",
      "lv": "poroučet"
    },
    "praesens": {
      "de": "er befiehlt",
      "lv": "on poroučí"
    },
    "imperfektIndikativ": {
      "de": "er befahl",
      "lv": "on poroučel"
    },
    "imperfektKonjunktiv": {
      "de": "er beföhle",
      "lv": "on by poroučel"
    },
    "partizipVergangenheit": {
      "de": "befohlen",
      "lv": "poroučel"
    }
  },
  {
    "infinitiv": {
      "de": "beginnen",
      "lv": "začínat"
    },
    "praesens": {
      "de": "er beginnt",
      "lv": "on začíná"
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
      "lv": "začínán"
    }
  },
  {
    "infinitiv": {
      "de": "beißen",
      "lv": "kousat"
    },
    "praesens": {
      "de": "er beißt",
      "lv": "on kouše"
    },
    "imperfektIndikativ": {
      "de": "er biss",
      "lv": "on kousal"
    },
    "imperfektKonjunktiv": {
      "de": "er bisse",
      "lv": "on by kousal"
    },
    "partizipVergangenheit": {
      "de": "gebissen",
      "lv": "kousán"
    }
  },
  {
    "infinitiv": {
      "de": "bergen",
      "lv": "zachraňovat / skrývat"
    },
    "praesens": {
      "de": "er birgt",
      "lv": "on zachraňuje / skrývá"
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
      "lv": "zachraňován / skrýván"
    }
  },
  {
    "infinitiv": {
      "de": "bersten",
      "lv": "praskat"
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
      "lv": "pobízet"
    },
    "praesens": {
      "de": "er bewegt",
      "lv": "on pobízí"
    },
    "imperfektIndikativ": {
      "de": "er bewog",
      "lv": "on pobízel"
    },
    "imperfektKonjunktiv": {
      "de": "er bewöge",
      "lv": "on by pobízel"
    },
    "partizipVergangenheit": {
      "de": "bewogen",
      "lv": "pobízen"
    }
  },
  {
    "infinitiv": {
      "de": "biegen",
      "lv": "ohýbat"
    },
    "praesens": {
      "de": "er biegt",
      "lv": "on ohýbá"
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
      "lv": "ohýbán"
    }
  },
  {
    "infinitiv": {
      "de": "bieten",
      "lv": "nabízet"
    },
    "praesens": {
      "de": "er bietet",
      "lv": "on nabízí"
    },
    "imperfektIndikativ": {
      "de": "er bot",
      "lv": "on nabízel"
    },
    "imperfektKonjunktiv": {
      "de": "er böte",
      "lv": "on by nabízel"
    },
    "partizipVergangenheit": {
      "de": "geboten",
      "lv": "nabízen"
    }
  },
  {
    "infinitiv": {
      "de": "binden",
      "lv": "vázat"
    },
    "praesens": {
      "de": "er bindet",
      "lv": "on váže"
    },
    "imperfektIndikativ": {
      "de": "er band",
      "lv": "on vázal"
    },
    "imperfektKonjunktiv": {
      "de": "er bände",
      "lv": "on by vázal"
    },
    "partizipVergangenheit": {
      "de": "gebunden",
      "lv": "vázán"
    }
  },
  {
    "infinitiv": {
      "de": "bitten",
      "lv": "prosit"
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
      "lv": "prošen"
    }
  },
  {
    "infinitiv": {
      "de": "blasen",
      "lv": "foukat"
    },
    "praesens": {
      "de": "er bläst",
      "lv": "on fouká"
    },
    "imperfektIndikativ": {
      "de": "er blies",
      "lv": "on foukal"
    },
    "imperfektKonjunktiv": {
      "de": "er bliese",
      "lv": "on by foukal"
    },
    "partizipVergangenheit": {
      "de": "geblasen",
      "lv": "foukán"
    }
  },
  {
    "infinitiv": {
      "de": "gären",
      "lv": "kvasit"
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
      "lv": "rodit"
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
      "lv": "rozen"
    }
  },
  {
    "infinitiv": {
      "de": "gelingen",
      "lv": "dařit se"
    },
    "praesens": {
      "de": "es gelingt",
      "lv": "to se daří"
    },
    "imperfektIndikativ": {
      "de": "es gelang",
      "lv": "to se dařilo"
    },
    "imperfektKonjunktiv": {
      "de": "es gelänge",
      "lv": "to by se dařilo"
    },
    "partizipVergangenheit": {
      "de": "gelungen (es ist)",
      "lv": "dařil se"
    }
  },
  {
    "infinitiv": {
      "de": "gelten",
      "lv": "hodit se / platit"
    },
    "praesens": {
      "de": "er gilt",
      "lv": "on se hodí / platí"
    },
    "imperfektIndikativ": {
      "de": "er galt",
      "lv": "on se hodil / platil"
    },
    "imperfektKonjunktiv": {
      "de": "er gölte / es gälte",
      "lv": "on by se hodil / platil"
    },
    "partizipVergangenheit": {
      "de": "gegolten",
      "lv": "hodil se / platil"
    }
  },
  {
    "infinitiv": {
      "de": "genesen",
      "lv": "uzdravovat se"
    },
    "praesens": {
      "de": "er genest",
      "lv": "on se uzdravuje"
    },
    "imperfektIndikativ": {
      "de": "er genas",
      "lv": "on se uzdravoval"
    },
    "imperfektKonjunktiv": {
      "de": "er genäse",
      "lv": "on by se uzdravoval"
    },
    "partizipVergangenheit": {
      "de": "genesen (er ist)",
      "lv": "uzdravoval se"
    }
  },
  {
    "infinitiv": {
      "de": "genießen",
      "lv": "vychutnávat"
    },
    "praesens": {
      "de": "er genießt",
      "lv": "on vychutnává"
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
      "lv": "vychutnáván"
    }
  },
  {
    "infinitiv": {
      "de": "geschehen",
      "lv": "dít se"
    },
    "praesens": {
      "de": "es geschieht",
      "lv": "to se děje"
    },
    "imperfektIndikativ": {
      "de": "es geschah",
      "lv": "to se dělo"
    },
    "imperfektKonjunktiv": {
      "de": "es geschähe",
      "lv": "to by se dělo"
    },
    "partizipVergangenheit": {
      "de": "geschehen (es ist)",
      "lv": "děl se"
    }
  },
  {
    "infinitiv": {
      "de": "gießen",
      "lv": "lít"
    },
    "praesens": {
      "de": "er gießt",
      "lv": "on lije"
    },
    "imperfektIndikativ": {
      "de": "er goss",
      "lv": "on lil"
    },
    "imperfektKonjunktiv": {
      "de": "er gösse",
      "lv": "on by lil"
    },
    "partizipVergangenheit": {
      "de": "gegossen",
      "lv": "lit"
    }
  },
  {
    "infinitiv": {
      "de": "gleichen",
      "lv": "podobat se"
    },
    "praesens": {
      "de": "er gleicht",
      "lv": "on se podobá"
    },
    "imperfektIndikativ": {
      "de": "er glich",
      "lv": "on se podobal"
    },
    "imperfektKonjunktiv": {
      "de": "er gliche",
      "lv": "on by se podobal"
    },
    "partizipVergangenheit": {
      "de": "geglichen",
      "lv": "podobal se"
    }
  },
  {
    "infinitiv": {
      "de": "gleiten",
      "lv": "klouzat"
    },
    "praesens": {
      "de": "er gleitet",
      "lv": "on klouže"
    },
    "imperfektIndikativ": {
      "de": "er glitt",
      "lv": "on klouzal"
    },
    "imperfektKonjunktiv": {
      "de": "er glitte",
      "lv": "on by klouzal"
    },
    "partizipVergangenheit": {
      "de": "geglitten (er ist)",
      "lv": "klouzal"
    }
  },
  {
    "infinitiv": {
      "de": "glimmen",
      "lv": "doutnat"
    },
    "praesens": {
      "de": "er glimmt",
      "lv": "to doutná"
    },
    "imperfektIndikativ": {
      "de": "er glimmte / glomm",
      "lv": "to doutnalo"
    },
    "imperfektKonjunktiv": {
      "de": "er glimmte",
      "lv": "to by doutnalo"
    },
    "partizipVergangenheit": {
      "de": "geglimmt / geglommen",
      "lv": "doutnal"
    }
  },
  {
    "infinitiv": {
      "de": "graben",
      "lv": "kopat"
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
      "lv": "kopán"
    }
  },
  {
    "infinitiv": {
      "de": "greifen",
      "lv": "uchopovat"
    },
    "praesens": {
      "de": "er greift",
      "lv": "on uchopuje"
    },
    "imperfektIndikativ": {
      "de": "er griff",
      "lv": "on uchopoval"
    },
    "imperfektKonjunktiv": {
      "de": "er griffe",
      "lv": "on by uchopoval"
    },
    "partizipVergangenheit": {
      "de": "gegriffen",
      "lv": "uchopován"
    }
  },
  {
    "infinitiv": {
      "de": "hauen",
      "lv": "sekat"
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
      "lv": "sekán"
    }
  },
  {
    "infinitiv": {
      "de": "heben",
      "lv": "zvedat"
    },
    "praesens": {
      "de": "er hebt",
      "lv": "on zvedá"
    },
    "imperfektIndikativ": {
      "de": "er hob",
      "lv": "on zvedal"
    },
    "imperfektKonjunktiv": {
      "de": "er höbe",
      "lv": "on by zvedal"
    },
    "partizipVergangenheit": {
      "de": "gehoben",
      "lv": "zvedán"
    }
  },
  {
    "infinitiv": {
      "de": "kennen",
      "lv": "znát / vědět"
    },
    "praesens": {
      "de": "er kennt",
      "lv": "on zná / ví"
    },
    "imperfektIndikativ": {
      "de": "kannte",
      "lv": "on znal / věděl"
    },
    "imperfektKonjunktiv": {
      "de": "kannte",
      "lv": "on by znal / věděl"
    },
    "partizipVergangenheit": {
      "de": "gekannt",
      "lv": "znán / věděl"
    }
  },
  {
    "infinitiv": {
      "de": "klingen",
      "lv": "znít"
    },
    "praesens": {
      "de": "er klingt",
      "lv": "to zní"
    },
    "imperfektIndikativ": {
      "de": "er klang",
      "lv": "to znělo"
    },
    "imperfektKonjunktiv": {
      "de": "er klänge",
      "lv": "to by znělo"
    },
    "partizipVergangenheit": {
      "de": "geklungen",
      "lv": "zněl"
    }
  },
  {
    "infinitiv": {
      "de": "kneifen",
      "lv": "štípat"
    },
    "praesens": {
      "de": "er kneift",
      "lv": "on štípá"
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
      "lv": "štípán"
    }
  },
  {
    "infinitiv": {
      "de": "bleiben",
      "lv": "zůstávat"
    },
    "praesens": {
      "de": "er bleibt",
      "lv": "on zůstává"
    },
    "imperfektIndikativ": {
      "de": "er blieb",
      "lv": "on zůstával"
    },
    "imperfektKonjunktiv": {
      "de": "er bliebe",
      "lv": "on by zůstával"
    },
    "partizipVergangenheit": {
      "de": "geblieben (er ist)",
      "lv": "zůstával"
    }
  },
  {
    "infinitiv": {
      "de": "bleichen",
      "lv": "blednout"
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
      "lv": "bledl"
    }
  },
  {
    "infinitiv": {
      "de": "braten",
      "lv": "smažit"
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
      "lv": "smažen"
    }
  },
  {
    "infinitiv": {
      "de": "brechen",
      "lv": "lámat"
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
      "lv": "lámán"
    }
  },
  {
    "infinitiv": {
      "de": "brennen",
      "lv": "hořet"
    },
    "praesens": {
      "de": "er brennt",
      "lv": "to hoří"
    },
    "imperfektIndikativ": {
      "de": "brannte",
      "lv": "to hořelo"
    },
    "imperfektKonjunktiv": {
      "de": "brannte",
      "lv": "to by hořelo"
    },
    "partizipVergangenheit": {
      "de": "gebrannt",
      "lv": "hořel"
    }
  },
  {
    "infinitiv": {
      "de": "bringen",
      "lv": "přinášet"
    },
    "praesens": {
      "de": "er bringt",
      "lv": "on přináší"
    },
    "imperfektIndikativ": {
      "de": "er brachte",
      "lv": "on přinášel"
    },
    "imperfektKonjunktiv": {
      "de": "er brächte",
      "lv": "on by přinášel"
    },
    "partizipVergangenheit": {
      "de": "gebracht",
      "lv": "přinášen"
    }
  },
  {
    "infinitiv": {
      "de": "denken",
      "lv": "myslet"
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
      "lv": "myšlen"
    }
  },
  {
    "infinitiv": {
      "de": "dingen",
      "lv": "najímat / domlouvat se"
    },
    "praesens": {
      "de": "er dingt",
      "lv": "on najímá / domlouvá se"
    },
    "imperfektIndikativ": {
      "de": "dingte",
      "lv": "on najímal / domlouval se"
    },
    "imperfektKonjunktiv": {
      "de": "dingte",
      "lv": "on by najímal / domlouval se"
    },
    "partizipVergangenheit": {
      "de": "gedungen",
      "lv": "najímán / domlouval se"
    }
  },
  {
    "infinitiv": {
      "de": "dreschen",
      "lv": "mlátit"
    },
    "praesens": {
      "de": "er drischt",
      "lv": "on mlátí"
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
      "lv": "mlácen"
    }
  },
  {
    "infinitiv": {
      "de": "dringen",
      "lv": "vnikat"
    },
    "praesens": {
      "de": "er dringt",
      "lv": "on vniká"
    },
    "imperfektIndikativ": {
      "de": "er drang",
      "lv": "on vnikal"
    },
    "imperfektKonjunktiv": {
      "de": "er dränge",
      "lv": "on by vnikal"
    },
    "partizipVergangenheit": {
      "de": "gedrungen (er ist)",
      "lv": "vnikal"
    }
  },
  {
    "infinitiv": {
      "de": "dünken",
      "lv": "zdát se"
    },
    "praesens": {
      "de": "es dünkt",
      "lv": "to se zdá"
    },
    "imperfektIndikativ": {
      "de": "deuchte",
      "lv": "to se zdálo"
    },
    "imperfektKonjunktiv": {
      "de": "deuchte",
      "lv": "to by se zdálo"
    },
    "partizipVergangenheit": {
      "de": "gedünkt",
      "lv": "zdál se"
    }
  },
  {
    "infinitiv": {
      "de": "dürfen",
      "lv": "smět"
    },
    "praesens": {
      "de": "er darf",
      "lv": "on smí"
    },
    "imperfektIndikativ": {
      "de": "durfte",
      "lv": "on směl"
    },
    "imperfektKonjunktiv": {
      "de": "durfte",
      "lv": "on by směl"
    },
    "partizipVergangenheit": {
      "de": "gedurft",
      "lv": "směl"
    }
  },
  {
    "infinitiv": {
      "de": "empfehlen",
      "lv": "doporučovat"
    },
    "praesens": {
      "de": "er empfiehlt",
      "lv": "on doporučuje"
    },
    "imperfektIndikativ": {
      "de": "er empfahl",
      "lv": "on doporučoval"
    },
    "imperfektKonjunktiv": {
      "de": "er empfähle / er empföhle",
      "lv": "on by doporučoval"
    },
    "partizipVergangenheit": {
      "de": "empfohlen",
      "lv": "doporučován"
    }
  },
  {
    "infinitiv": {
      "de": "empfinden",
      "lv": "cítit"
    },
    "praesens": {
      "de": "er empfindet",
      "lv": "on cítí"
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
      "lv": "cítěn"
    }
  },
  {
    "infinitiv": {
      "de": "erlöschen",
      "lv": "hasnout"
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
      "lv": "hasl"
    }
  },
  {
    "infinitiv": {
      "de": "erschrecken",
      "lv": "lekat se"
    },
    "praesens": {
      "de": "er erschrickt",
      "lv": "on se leká"
    },
    "imperfektIndikativ": {
      "de": "er erschrak",
      "lv": "on se lekal"
    },
    "imperfektKonjunktiv": {
      "de": "er erschräke",
      "lv": "on by se lekal"
    },
    "partizipVergangenheit": {
      "de": "erschrocken (er ist)",
      "lv": "lekal se"
    }
  },
  {
    "infinitiv": {
      "de": "essen",
      "lv": "jíst"
    },
    "praesens": {
      "de": "er isst",
      "lv": "on jí"
    },
    "imperfektIndikativ": {
      "de": "er ass",
      "lv": "on jedl"
    },
    "imperfektKonjunktiv": {
      "de": "er äße",
      "lv": "on by jedl"
    },
    "partizipVergangenheit": {
      "de": "gegessen",
      "lv": "jeden"
    }
  },
  {
    "infinitiv": {
      "de": "fahren",
      "lv": "jet"
    },
    "praesens": {
      "de": "er fährt",
      "lv": "on jede"
    },
    "imperfektIndikativ": {
      "de": "er fuhr",
      "lv": "on jel"
    },
    "imperfektKonjunktiv": {
      "de": "er führe",
      "lv": "on by jel"
    },
    "partizipVergangenheit": {
      "de": "gefahren (er ist)",
      "lv": "jel"
    }
  },
  {
    "infinitiv": {
      "de": "fallen",
      "lv": "padat"
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
      "lv": "chytat"
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
      "lv": "chytán"
    }
  },
  {
    "infinitiv": {
      "de": "finden",
      "lv": "nacházet"
    },
    "praesens": {
      "de": "er findet",
      "lv": "on nachází"
    },
    "imperfektIndikativ": {
      "de": "er fand",
      "lv": "on nacházel"
    },
    "imperfektKonjunktiv": {
      "de": "er fände",
      "lv": "on by nacházel"
    },
    "partizipVergangenheit": {
      "de": "gefunden",
      "lv": "nacházen"
    }
  },
  {
    "infinitiv": {
      "de": "fliegen",
      "lv": "létat"
    },
    "praesens": {
      "de": "er fliegt",
      "lv": "on létá"
    },
    "imperfektIndikativ": {
      "de": "er flog",
      "lv": "on létal"
    },
    "imperfektKonjunktiv": {
      "de": "er flöge",
      "lv": "on by létal"
    },
    "partizipVergangenheit": {
      "de": "geflogen (er ist)",
      "lv": "létal"
    }
  },
  {
    "infinitiv": {
      "de": "fliehen",
      "lv": "utíkat"
    },
    "praesens": {
      "de": "er flieht",
      "lv": "on utíká"
    },
    "imperfektIndikativ": {
      "de": "er floh",
      "lv": "on utíkal"
    },
    "imperfektKonjunktiv": {
      "de": "er flöhe",
      "lv": "on by utíkal"
    },
    "partizipVergangenheit": {
      "de": "geflohen (er ist)",
      "lv": "utíkal"
    }
  },
  {
    "infinitiv": {
      "de": "fließen",
      "lv": "téct"
    },
    "praesens": {
      "de": "er fließt",
      "lv": "to teče"
    },
    "imperfektIndikativ": {
      "de": "er floss",
      "lv": "to teklo"
    },
    "imperfektKonjunktiv": {
      "de": "er flösse",
      "lv": "to by teklo"
    },
    "partizipVergangenheit": {
      "de": "geflossen (er ist)",
      "lv": "tekl"
    }
  },
  {
    "infinitiv": {
      "de": "fressen",
      "lv": "jíst / žrát"
    },
    "praesens": {
      "de": "er frisst",
      "lv": "on jí / žere"
    },
    "imperfektIndikativ": {
      "de": "er frass",
      "lv": "on jedl / žral"
    },
    "imperfektKonjunktiv": {
      "de": "er fräße",
      "lv": "on by jedl / žral"
    },
    "partizipVergangenheit": {
      "de": "gefressen",
      "lv": "jeden / žrán"
    }
  },
  {
    "infinitiv": {
      "de": "frieren",
      "lv": "mrznout"
    },
    "praesens": {
      "de": "er friert",
      "lv": "on mrzne"
    },
    "imperfektIndikativ": {
      "de": "er fror",
      "lv": "on mrzl"
    },
    "imperfektKonjunktiv": {
      "de": "er fröre",
      "lv": "on by mrzl"
    },
    "partizipVergangenheit": {
      "de": "gefroren",
      "lv": "mrzl"
    }
  },
  {
    "infinitiv": {
      "de": "geben",
      "lv": "dávat"
    },
    "praesens": {
      "de": "er gibt",
      "lv": "on dává"
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
      "lv": "dáván"
    }
  },
  {
    "infinitiv": {
      "de": "gedeihen",
      "lv": "prospívat"
    },
    "praesens": {
      "de": "er gedeiht",
      "lv": "on prospívá"
    },
    "imperfektIndikativ": {
      "de": "er gedieh",
      "lv": "on prospíval"
    },
    "imperfektKonjunktiv": {
      "de": "er gediehe",
      "lv": "on by prospíval"
    },
    "partizipVergangenheit": {
      "de": "gediehen (er ist)",
      "lv": "prospíval"
    }
  },
  {
    "infinitiv": {
      "de": "gehen",
      "lv": "jít"
    },
    "praesens": {
      "de": "er geht",
      "lv": "on jde"
    },
    "imperfektIndikativ": {
      "de": "er ging",
      "lv": "on šel"
    },
    "imperfektKonjunktiv": {
      "de": "er ginge",
      "lv": "on by šel"
    },
    "partizipVergangenheit": {
      "de": "gegangen (er ist)",
      "lv": "šel"
    }
  },
  {
    "infinitiv": {
      "de": "gewinnen",
      "lv": "získávat"
    },
    "praesens": {
      "de": "er gewinnt",
      "lv": "on získává"
    },
    "imperfektIndikativ": {
      "de": "er gewann",
      "lv": "on získával"
    },
    "imperfektKonjunktiv": {
      "de": "er gewönne / er gewänne",
      "lv": "on by získával"
    },
    "partizipVergangenheit": {
      "de": "gewonnen",
      "lv": "získáván"
    }
  },
  {
    "infinitiv": {
      "de": "haben",
      "lv": "mít"
    },
    "praesens": {
      "de": "er hat",
      "lv": "on má"
    },
    "imperfektIndikativ": {
      "de": "hatte",
      "lv": "on měl"
    },
    "imperfektKonjunktiv": {
      "de": "hatte",
      "lv": "on by měl"
    },
    "partizipVergangenheit": {
      "de": "gehabt",
      "lv": "měl"
    }
  },
  {
    "infinitiv": {
      "de": "halten",
      "lv": "držet"
    },
    "praesens": {
      "de": "er hält",
      "lv": "on drží"
    },
    "imperfektIndikativ": {
      "de": "er hielt",
      "lv": "on držel"
    },
    "imperfektKonjunktiv": {
      "de": "er hielte",
      "lv": "on by držel"
    },
    "partizipVergangenheit": {
      "de": "gehalten",
      "lv": "držen"
    }
  },
  {
    "infinitiv": {
      "de": "heißen",
      "lv": "nazývat / jmenovat se"
    },
    "praesens": {
      "de": "er heißt",
      "lv": "on nazývá / jmenuje se"
    },
    "imperfektIndikativ": {
      "de": "er hieß",
      "lv": "on nazýval / jmenoval se"
    },
    "imperfektKonjunktiv": {
      "de": "er hieße",
      "lv": "on by nazýval / jmenoval se"
    },
    "partizipVergangenheit": {
      "de": "geheißen",
      "lv": "nazýván / jmenoval se"
    }
  },
  {
    "infinitiv": {
      "de": "helfen",
      "lv": "pomáhat"
    },
    "praesens": {
      "de": "er hilft",
      "lv": "on pomáhá"
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
      "lv": "přicházet"
    },
    "praesens": {
      "de": "er kommt",
      "lv": "on přichází"
    },
    "imperfektIndikativ": {
      "de": "er kam",
      "lv": "on přicházel"
    },
    "imperfektKonjunktiv": {
      "de": "er käme",
      "lv": "on by přicházel"
    },
    "partizipVergangenheit": {
      "de": "gekommen (er ist)",
      "lv": "přicházel"
    }
  },
  {
    "infinitiv": {
      "de": "können",
      "lv": "moct"
    },
    "praesens": {
      "de": "er kann",
      "lv": "on může"
    },
    "imperfektIndikativ": {
      "de": "konnte",
      "lv": "on mohl"
    },
    "imperfektKonjunktiv": {
      "de": "konnte",
      "lv": "on by mohl"
    },
    "partizipVergangenheit": {
      "de": "gekonnt",
      "lv": "mohl"
    }
  },
  {
    "infinitiv": {
      "de": "kriechen",
      "lv": "lézt"
    },
    "praesens": {
      "de": "er kriecht",
      "lv": "on leze"
    },
    "imperfektIndikativ": {
      "de": "er kroch",
      "lv": "on lezl"
    },
    "imperfektKonjunktiv": {
      "de": "er kröche",
      "lv": "on by lezl"
    },
    "partizipVergangenheit": {
      "de": "gekrochen (er ist)",
      "lv": "lezl"
    }
  },
  {
    "infinitiv": {
      "de": "laden",
      "lv": "nakládat / zvát"
    },
    "praesens": {
      "de": "er lädt",
      "lv": "on nakládá / zve"
    },
    "imperfektIndikativ": {
      "de": "er lud",
      "lv": "on nakládal / zval"
    },
    "imperfektKonjunktiv": {
      "de": "er lüde",
      "lv": "on by nakládal / zval"
    },
    "partizipVergangenheit": {
      "de": "geladen",
      "lv": "nakládán / zván"
    }
  },
  {
    "infinitiv": {
      "de": "lassen",
      "lv": "nechávat / dovolovat"
    },
    "praesens": {
      "de": "er lässt",
      "lv": "on nechává / dovoluje"
    },
    "imperfektIndikativ": {
      "de": "er ließ",
      "lv": "on nechával / dovoloval"
    },
    "imperfektKonjunktiv": {
      "de": "er ließe",
      "lv": "on by nechával / dovoloval"
    },
    "partizipVergangenheit": {
      "de": "gelassen",
      "lv": "necháván / dovolován"
    }
  },
  {
    "infinitiv": {
      "de": "laufen",
      "lv": "běžet"
    },
    "praesens": {
      "de": "er läuft",
      "lv": "on běží"
    },
    "imperfektIndikativ": {
      "de": "er lief",
      "lv": "on běžel"
    },
    "imperfektKonjunktiv": {
      "de": "er liefe",
      "lv": "on by běžel"
    },
    "partizipVergangenheit": {
      "de": "gelaufen (er ist)",
      "lv": "běžel"
    }
  },
  {
    "infinitiv": {
      "de": "leiden",
      "lv": "trpět"
    },
    "praesens": {
      "de": "er leidet",
      "lv": "on trpí"
    },
    "imperfektIndikativ": {
      "de": "er litt",
      "lv": "on trpěl"
    },
    "imperfektKonjunktiv": {
      "de": "er litte",
      "lv": "on by trpěl"
    },
    "partizipVergangenheit": {
      "de": "gelitten",
      "lv": "trpěl"
    }
  },
  {
    "infinitiv": {
      "de": "leihen",
      "lv": "půjčovat / vypůjčovat si"
    },
    "praesens": {
      "de": "er leiht",
      "lv": "on půjčuje / vypůjčuje si"
    },
    "imperfektIndikativ": {
      "de": "er lieh",
      "lv": "on půjčoval / vypůjčoval si"
    },
    "imperfektKonjunktiv": {
      "de": "er liehe",
      "lv": "on by půjčoval / vypůjčoval si"
    },
    "partizipVergangenheit": {
      "de": "geliehen",
      "lv": "půjčován / vypůjčován"
    }
  },
  {
    "infinitiv": {
      "de": "lesen",
      "lv": "číst"
    },
    "praesens": {
      "de": "er liest",
      "lv": "on čte"
    },
    "imperfektIndikativ": {
      "de": "er las",
      "lv": "on četl"
    },
    "imperfektKonjunktiv": {
      "de": "er läse",
      "lv": "on by četl"
    },
    "partizipVergangenheit": {
      "de": "gelesen",
      "lv": "čten"
    }
  },
  {
    "infinitiv": {
      "de": "liegen",
      "lv": "ležet"
    },
    "praesens": {
      "de": "er liegt",
      "lv": "on leží"
    },
    "imperfektIndikativ": {
      "de": "er lag",
      "lv": "on ležel"
    },
    "imperfektKonjunktiv": {
      "de": "er läge",
      "lv": "on by ležel"
    },
    "partizipVergangenheit": {
      "de": "gelegen",
      "lv": "ležel"
    }
  },
  {
    "infinitiv": {
      "de": "lügen",
      "lv": "lhát"
    },
    "praesens": {
      "de": "er lügt",
      "lv": "on lže"
    },
    "imperfektIndikativ": {
      "de": "er log",
      "lv": "on lhal"
    },
    "imperfektKonjunktiv": {
      "de": "er löge",
      "lv": "on by lhal"
    },
    "partizipVergangenheit": {
      "de": "gelogen",
      "lv": "lhal"
    }
  },
  {
    "infinitiv": {
      "de": "mahlen",
      "lv": "mlít"
    },
    "praesens": {
      "de": "er mahlt",
      "lv": "on mele"
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
      "lv": "mlet"
    }
  },
  {
    "infinitiv": {
      "de": "meiden",
      "lv": "vyhýbat se"
    },
    "praesens": {
      "de": "er meidet",
      "lv": "on se vyhýbá"
    },
    "imperfektIndikativ": {
      "de": "er mied",
      "lv": "on se vyhýbal"
    },
    "imperfektKonjunktiv": {
      "de": "er miede",
      "lv": "on by se vyhýbal"
    },
    "partizipVergangenheit": {
      "de": "gemieden",
      "lv": "vyhýbal se"
    }
  },
  {
    "infinitiv": {
      "de": "melken",
      "lv": "dojit"
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
      "lv": "dojen"
    }
  },
  {
    "infinitiv": {
      "de": "messen",
      "lv": "měřit"
    },
    "praesens": {
      "de": "er misst",
      "lv": "on měří"
    },
    "imperfektIndikativ": {
      "de": "er mass",
      "lv": "on měřil"
    },
    "imperfektKonjunktiv": {
      "de": "er mäße",
      "lv": "on by měřil"
    },
    "partizipVergangenheit": {
      "de": "gemessen",
      "lv": "měřen"
    }
  },
  {
    "infinitiv": {
      "de": "misslingen",
      "lv": "nedařit se"
    },
    "praesens": {
      "de": "es misslingt",
      "lv": "to se nedaří"
    },
    "imperfektIndikativ": {
      "de": "misslang",
      "lv": "to se nedařilo"
    },
    "imperfektKonjunktiv": {
      "de": "misslang",
      "lv": "to by se nedařilo"
    },
    "partizipVergangenheit": {
      "de": "misslungen",
      "lv": "nedařil se"
    }
  },
  {
    "infinitiv": {
      "de": "mögen",
      "lv": "mít rád"
    },
    "praesens": {
      "de": "er mag",
      "lv": "on má rád"
    },
    "imperfektIndikativ": {
      "de": "mochte",
      "lv": "on měl rád"
    },
    "imperfektKonjunktiv": {
      "de": "mochte",
      "lv": "on by měl rád"
    },
    "partizipVergangenheit": {
      "de": "gemocht",
      "lv": "měl rád"
    }
  },
  {
    "infinitiv": {
      "de": "müssen",
      "lv": "muset"
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
      "lv": "brát"
    },
    "praesens": {
      "de": "er nimmt",
      "lv": "on bere"
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
      "lv": "brán"
    }
  },
  {
    "infinitiv": {
      "de": "nennen",
      "lv": "jmenovat"
    },
    "praesens": {
      "de": "er nennt",
      "lv": "on jmenuje"
    },
    "imperfektIndikativ": {
      "de": "er nannte",
      "lv": "on jmenoval"
    },
    "imperfektKonjunktiv": {
      "de": "er nennte",
      "lv": "on by jmenoval"
    },
    "partizipVergangenheit": {
      "de": "genannt",
      "lv": "jmenován"
    }
  },
  {
    "infinitiv": {
      "de": "pfeifen",
      "lv": "pískat"
    },
    "praesens": {
      "de": "er pfeift",
      "lv": "on píská"
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
      "lv": "pečovat"
    },
    "praesens": {
      "de": "er pflegt",
      "lv": "on pečuje"
    },
    "imperfektIndikativ": {
      "de": "pflegte / pflog",
      "lv": "on pečoval"
    },
    "imperfektKonjunktiv": {
      "de": "pflegte / pflog",
      "lv": "on by pečoval"
    },
    "partizipVergangenheit": {
      "de": "gepflegt / gepflogen",
      "lv": "pečoval"
    }
  },
  {
    "infinitiv": {
      "de": "preisen",
      "lv": "chválit"
    },
    "praesens": {
      "de": "er preist",
      "lv": "on chválí"
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
      "lv": "chválen"
    }
  },
  {
    "infinitiv": {
      "de": "quellen",
      "lv": "bobtnat"
    },
    "praesens": {
      "de": "er quillt",
      "lv": "to bobtná"
    },
    "imperfektIndikativ": {
      "de": "er quoll",
      "lv": "to bobtnalo"
    },
    "imperfektKonjunktiv": {
      "de": "er quölle",
      "lv": "to by bobtnalo"
    },
    "partizipVergangenheit": {
      "de": "gequollen (er ist)",
      "lv": "bobtnal"
    }
  },
  {
    "infinitiv": {
      "de": "raten",
      "lv": "radit / hádat"
    },
    "praesens": {
      "de": "er rät",
      "lv": "on radí / hádá"
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
      "lv": "raděn / hádán"
    }
  },
  {
    "infinitiv": {
      "de": "reiben",
      "lv": "třít"
    },
    "praesens": {
      "de": "er reibt",
      "lv": "on tře"
    },
    "imperfektIndikativ": {
      "de": "er rieb",
      "lv": "on třel"
    },
    "imperfektKonjunktiv": {
      "de": "er riebe",
      "lv": "on by třel"
    },
    "partizipVergangenheit": {
      "de": "gerieben",
      "lv": "třen"
    }
  },
  {
    "infinitiv": {
      "de": "reißen",
      "lv": "trhat"
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
      "lv": "trhán"
    }
  },
  {
    "infinitiv": {
      "de": "reiten",
      "lv": "jezdit na koni"
    },
    "praesens": {
      "de": "er reitet",
      "lv": "on jezdí na koni"
    },
    "imperfektIndikativ": {
      "de": "er ritt",
      "lv": "on jezdil na koni"
    },
    "imperfektKonjunktiv": {
      "de": "er ritte",
      "lv": "on by jezdil na koni"
    },
    "partizipVergangenheit": {
      "de": "geritten (er ist)",
      "lv": "jezdil na koni"
    }
  },
  {
    "infinitiv": {
      "de": "rennen",
      "lv": "běhat"
    },
    "praesens": {
      "de": "er rennt",
      "lv": "on běhá"
    },
    "imperfektIndikativ": {
      "de": "er rannte",
      "lv": "on běhal"
    },
    "imperfektKonjunktiv": {
      "de": "er rennte",
      "lv": "on by běhal"
    },
    "partizipVergangenheit": {
      "de": "gerannt",
      "lv": "běhal"
    }
  },
  {
    "infinitiv": {
      "de": "riechen",
      "lv": "čichat"
    },
    "praesens": {
      "de": "er riecht",
      "lv": "on čichá"
    },
    "imperfektIndikativ": {
      "de": "er roch",
      "lv": "on čichal"
    },
    "imperfektKonjunktiv": {
      "de": "er röche",
      "lv": "on by čichal"
    },
    "partizipVergangenheit": {
      "de": "gerochen",
      "lv": "čichal"
    }
  },
  {
    "infinitiv": {
      "de": "ringen",
      "lv": "zápasit"
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
      "lv": "téct"
    },
    "praesens": {
      "de": "er rinnt",
      "lv": "to teče"
    },
    "imperfektIndikativ": {
      "de": "er rann",
      "lv": "to teklo"
    },
    "imperfektKonjunktiv": {
      "de": "er ränne / er rönne",
      "lv": "to by teklo"
    },
    "partizipVergangenheit": {
      "de": "geronnen (er ist)",
      "lv": "tekl"
    }
  },
  {
    "infinitiv": {
      "de": "rufen",
      "lv": "volat"
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
      "lv": "volán"
    }
  },
  {
    "infinitiv": {
      "de": "salzen",
      "lv": "solit"
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
      "lv": "solen"
    }
  },
  {
    "infinitiv": {
      "de": "saufen",
      "lv": "chlastat / pít"
    },
    "praesens": {
      "de": "er säuft",
      "lv": "on chlastá / pije"
    },
    "imperfektIndikativ": {
      "de": "er soff",
      "lv": "on chlastal / pil"
    },
    "imperfektKonjunktiv": {
      "de": "er söffe",
      "lv": "on by chlastal / pil"
    },
    "partizipVergangenheit": {
      "de": "gesoffen",
      "lv": "chlastal / pit"
    }
  },
  {
    "infinitiv": {
      "de": "saugen",
      "lv": "sát"
    },
    "praesens": {
      "de": "er saugt",
      "lv": "on saje"
    },
    "imperfektIndikativ": {
      "de": "er sog",
      "lv": "on sál"
    },
    "imperfektKonjunktiv": {
      "de": "er söge",
      "lv": "on by sál"
    },
    "partizipVergangenheit": {
      "de": "gesogen",
      "lv": "sán"
    }
  },
  {
    "infinitiv": {
      "de": "schaffen",
      "lv": "tvořit"
    },
    "praesens": {
      "de": "er schafft",
      "lv": "on tvoří"
    },
    "imperfektIndikativ": {
      "de": "er schuf",
      "lv": "on tvořil"
    },
    "imperfektKonjunktiv": {
      "de": "er schüfe",
      "lv": "on by tvořil"
    },
    "partizipVergangenheit": {
      "de": "geschaffen",
      "lv": "tvořen"
    }
  },
  {
    "infinitiv": {
      "de": "schallen",
      "lv": "znít"
    },
    "praesens": {
      "de": "es schallt",
      "lv": "to zní"
    },
    "imperfektIndikativ": {
      "de": "schallte / scholl",
      "lv": "to znělo"
    },
    "imperfektKonjunktiv": {
      "de": "schallte / scholl",
      "lv": "to by znělo"
    },
    "partizipVergangenheit": {
      "de": "geschallt",
      "lv": "zněl"
    }
  },
  {
    "infinitiv": {
      "de": "scheiden",
      "lv": "oddělovat / rozcházet se"
    },
    "praesens": {
      "de": "er scheidet",
      "lv": "on odděluje / rozchází se"
    },
    "imperfektIndikativ": {
      "de": "er schied",
      "lv": "on odděloval / rozcházel se"
    },
    "imperfektKonjunktiv": {
      "de": "er schiede",
      "lv": "on by odděloval / rozcházel se"
    },
    "partizipVergangenheit": {
      "de": "geschieden (er hat / er ist)",
      "lv": "oddělován / rozcházel se"
    }
  },
  {
    "infinitiv": {
      "de": "scheinen",
      "lv": "svítit / zdát se"
    },
    "praesens": {
      "de": "er scheint",
      "lv": "on svítí / zdá se"
    },
    "imperfektIndikativ": {
      "de": "er schien",
      "lv": "on svítil / zdál se"
    },
    "imperfektKonjunktiv": {
      "de": "er schiene",
      "lv": "on by svítil / zdál se"
    },
    "partizipVergangenheit": {
      "de": "geschienen",
      "lv": "svítil / zdál se"
    }
  },
  {
    "infinitiv": {
      "de": "schelten",
      "lv": "kárat"
    },
    "praesens": {
      "de": "er schilt",
      "lv": "on kárá"
    },
    "imperfektIndikativ": {
      "de": "er schalt",
      "lv": "on káral"
    },
    "imperfektKonjunktiv": {
      "de": "er schölte / er schälte",
      "lv": "on by káral"
    },
    "partizipVergangenheit": {
      "de": "gescholten",
      "lv": "kárán"
    }
  },
  {
    "infinitiv": {
      "de": "scheren",
      "lv": "střihat"
    },
    "praesens": {
      "de": "er schert",
      "lv": "on střihá"
    },
    "imperfektIndikativ": {
      "de": "schor / scherte",
      "lv": "on střihal"
    },
    "imperfektKonjunktiv": {
      "de": "schor / scherte",
      "lv": "on by střihal"
    },
    "partizipVergangenheit": {
      "de": "geschoren / geschert",
      "lv": "střihán"
    }
  },
  {
    "infinitiv": {
      "de": "schieben",
      "lv": "tlačit"
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
      "lv": "tlačen"
    }
  },
  {
    "infinitiv": {
      "de": "schießen",
      "lv": "střílet"
    },
    "praesens": {
      "de": "er schießt",
      "lv": "on střílí"
    },
    "imperfektIndikativ": {
      "de": "er schoss",
      "lv": "on střílel"
    },
    "imperfektKonjunktiv": {
      "de": "er schösse",
      "lv": "on by střílel"
    },
    "partizipVergangenheit": {
      "de": "geschossen",
      "lv": "střílen"
    }
  },
  {
    "infinitiv": {
      "de": "schinden",
      "lv": "trápit"
    },
    "praesens": {
      "de": "er schindet",
      "lv": "on trápí"
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
      "lv": "trápen"
    }
  },
  {
    "infinitiv": {
      "de": "schlafen",
      "lv": "spát"
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
      "lv": "bít"
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
      "lv": "bit"
    }
  },
  {
    "infinitiv": {
      "de": "schleichen",
      "lv": "plížit se"
    },
    "praesens": {
      "de": "er schleicht",
      "lv": "on se plíží"
    },
    "imperfektIndikativ": {
      "de": "er schlich",
      "lv": "on se plížil"
    },
    "imperfektKonjunktiv": {
      "de": "er schliche",
      "lv": "on by se plížil"
    },
    "partizipVergangenheit": {
      "de": "geschlichen (er ist)",
      "lv": "plížil se"
    }
  },
  {
    "infinitiv": {
      "de": "schleifen",
      "lv": "brousit"
    },
    "praesens": {
      "de": "er schleift",
      "lv": "on brousí"
    },
    "imperfektIndikativ": {
      "de": "er schliff",
      "lv": "on brousil"
    },
    "imperfektKonjunktiv": {
      "de": "er schliffe",
      "lv": "on by brousil"
    },
    "partizipVergangenheit": {
      "de": "geschliffen",
      "lv": "broušen"
    }
  },
  {
    "infinitiv": {
      "de": "schließen",
      "lv": "zavírat"
    },
    "praesens": {
      "de": "er schließt",
      "lv": "on zavírá"
    },
    "imperfektIndikativ": {
      "de": "er schloss",
      "lv": "on zavíral"
    },
    "imperfektKonjunktiv": {
      "de": "er schlösse",
      "lv": "on by zavíral"
    },
    "partizipVergangenheit": {
      "de": "geschlossen",
      "lv": "zavírán"
    }
  },
  {
    "infinitiv": {
      "de": "schlingen",
      "lv": "hltat"
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
      "lv": "hltán"
    }
  },
  {
    "infinitiv": {
      "de": "schmeißen",
      "lv": "házet"
    },
    "praesens": {
      "de": "er schmeißt",
      "lv": "on hází"
    },
    "imperfektIndikativ": {
      "de": "er schmiss",
      "lv": "on házel"
    },
    "imperfektKonjunktiv": {
      "de": "er schmisse",
      "lv": "on by házel"
    },
    "partizipVergangenheit": {
      "de": "geschmissen",
      "lv": "házen"
    }
  },
  {
    "infinitiv": {
      "de": "schmelzen",
      "lv": "tát"
    },
    "praesens": {
      "de": "er schmilzt",
      "lv": "to taje"
    },
    "imperfektIndikativ": {
      "de": "er schmolz",
      "lv": "to tálo"
    },
    "imperfektKonjunktiv": {
      "de": "er schmölze",
      "lv": "to by tálo"
    },
    "partizipVergangenheit": {
      "de": "geschmolzen (er ist)",
      "lv": "tál"
    }
  },
  {
    "infinitiv": {
      "de": "schnauben",
      "lv": "frkat"
    },
    "praesens": {
      "de": "er schnaubt",
      "lv": "on frká"
    },
    "imperfektIndikativ": {
      "de": "schnaubte / schnob",
      "lv": "on frkal"
    },
    "imperfektKonjunktiv": {
      "de": "schnaubte / schnob",
      "lv": "on by frkal"
    },
    "partizipVergangenheit": {
      "de": "geschnaubt / geschnoben",
      "lv": "frkal"
    }
  },
  {
    "infinitiv": {
      "de": "schneiden",
      "lv": "řezat"
    },
    "praesens": {
      "de": "er schneidet",
      "lv": "on řeže"
    },
    "imperfektIndikativ": {
      "de": "er schnitt",
      "lv": "on řezal"
    },
    "imperfektKonjunktiv": {
      "de": "er schnitte",
      "lv": "on by řezal"
    },
    "partizipVergangenheit": {
      "de": "geschnitten",
      "lv": "řezán"
    }
  },
  {
    "infinitiv": {
      "de": "schreiben",
      "lv": "psát"
    },
    "praesens": {
      "de": "er schreibt",
      "lv": "on píše"
    },
    "imperfektIndikativ": {
      "de": "er schrieb",
      "lv": "on psal"
    },
    "imperfektKonjunktiv": {
      "de": "er schriebe",
      "lv": "on by psal"
    },
    "partizipVergangenheit": {
      "de": "geschrieben",
      "lv": "psán"
    }
  },
  {
    "infinitiv": {
      "de": "schreien",
      "lv": "křičet"
    },
    "praesens": {
      "de": "er schreit",
      "lv": "on křičí"
    },
    "imperfektIndikativ": {
      "de": "er schrie",
      "lv": "on křičel"
    },
    "imperfektKonjunktiv": {
      "de": "er schriee",
      "lv": "on by křičel"
    },
    "partizipVergangenheit": {
      "de": "geschrien",
      "lv": "křičel"
    }
  },
  {
    "infinitiv": {
      "de": "schreiten",
      "lv": "kráčet"
    },
    "praesens": {
      "de": "er schreitet",
      "lv": "on kráčí"
    },
    "imperfektIndikativ": {
      "de": "er schritt",
      "lv": "on kráčel"
    },
    "imperfektKonjunktiv": {
      "de": "er schritte",
      "lv": "on by kráčel"
    },
    "partizipVergangenheit": {
      "de": "geschritten (er ist)",
      "lv": "kráčel"
    }
  },
  {
    "infinitiv": {
      "de": "schweigen",
      "lv": "mlčet"
    },
    "praesens": {
      "de": "er schweigt",
      "lv": "on mlčí"
    },
    "imperfektIndikativ": {
      "de": "er schwieg",
      "lv": "on mlčel"
    },
    "imperfektKonjunktiv": {
      "de": "er schwiege",
      "lv": "on by mlčel"
    },
    "partizipVergangenheit": {
      "de": "geschwiegen",
      "lv": "mlčel"
    }
  },
  {
    "infinitiv": {
      "de": "schwellen",
      "lv": "otékat"
    },
    "praesens": {
      "de": "er schwillt",
      "lv": "to otéká"
    },
    "imperfektIndikativ": {
      "de": "er schwoll",
      "lv": "to otékalo"
    },
    "imperfektKonjunktiv": {
      "de": "er schwölle",
      "lv": "to by otékalo"
    },
    "partizipVergangenheit": {
      "de": "geschwollen (er ist)",
      "lv": "otékal"
    }
  },
  {
    "infinitiv": {
      "de": "schwimmen",
      "lv": "plavat"
    },
    "praesens": {
      "de": "er schwimmt",
      "lv": "on plave"
    },
    "imperfektIndikativ": {
      "de": "er schwamm",
      "lv": "on plaval"
    },
    "imperfektKonjunktiv": {
      "de": "er schwömme / er schwämme",
      "lv": "on by plaval"
    },
    "partizipVergangenheit": {
      "de": "geschwommen (er ist)",
      "lv": "plaval"
    }
  },
  {
    "infinitiv": {
      "de": "schwinden",
      "lv": "mizet"
    },
    "praesens": {
      "de": "er schwindet",
      "lv": "to mizí"
    },
    "imperfektIndikativ": {
      "de": "er schwand",
      "lv": "to mizelo"
    },
    "imperfektKonjunktiv": {
      "de": "er schwände",
      "lv": "to by mizelo"
    },
    "partizipVergangenheit": {
      "de": "geschwunden (er ist)",
      "lv": "mizel"
    }
  },
  {
    "infinitiv": {
      "de": "schwingen",
      "lv": "mávat"
    },
    "praesens": {
      "de": "er schwingt",
      "lv": "on mává"
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
      "lv": "přísahat"
    },
    "praesens": {
      "de": "er schwört",
      "lv": "on přísahá"
    },
    "imperfektIndikativ": {
      "de": "er schwur / er schwor",
      "lv": "on přísahal"
    },
    "imperfektKonjunktiv": {
      "de": "er schwöre",
      "lv": "on by přísahal"
    },
    "partizipVergangenheit": {
      "de": "geschworen",
      "lv": "přísahal"
    }
  },
  {
    "infinitiv": {
      "de": "sehen",
      "lv": "vidět"
    },
    "praesens": {
      "de": "er sieht",
      "lv": "on vidí"
    },
    "imperfektIndikativ": {
      "de": "er sah",
      "lv": "on viděl"
    },
    "imperfektKonjunktiv": {
      "de": "er sähe",
      "lv": "on by viděl"
    },
    "partizipVergangenheit": {
      "de": "gesehen",
      "lv": "viděn"
    }
  },
  {
    "infinitiv": {
      "de": "sein",
      "lv": "být"
    },
    "praesens": {
      "de": "er ist",
      "lv": "on je"
    },
    "imperfektIndikativ": {
      "de": "war",
      "lv": "on byl"
    },
    "imperfektKonjunktiv": {
      "de": "war",
      "lv": "on by byl"
    },
    "partizipVergangenheit": {
      "de": "gewesen",
      "lv": "byl"
    }
  },
  {
    "infinitiv": {
      "de": "senden",
      "lv": "posílat"
    },
    "praesens": {
      "de": "er sendet",
      "lv": "on posílá"
    },
    "imperfektIndikativ": {
      "de": "er sandte / er sendete",
      "lv": "on posílal"
    },
    "imperfektKonjunktiv": {
      "de": "er sendete",
      "lv": "on by posílal"
    },
    "partizipVergangenheit": {
      "de": "gesandt / gesendet",
      "lv": "posílán"
    }
  },
  {
    "infinitiv": {
      "de": "sieden",
      "lv": "vařit"
    },
    "praesens": {
      "de": "er siedet",
      "lv": "on vaří"
    },
    "imperfektIndikativ": {
      "de": "sott / siedete",
      "lv": "on vařil"
    },
    "imperfektKonjunktiv": {
      "de": "sott / siedete",
      "lv": "on by vařil"
    },
    "partizipVergangenheit": {
      "de": "gesotten / gesiedet",
      "lv": "vařen"
    }
  },
  {
    "infinitiv": {
      "de": "singen",
      "lv": "zpívat"
    },
    "praesens": {
      "de": "er singt",
      "lv": "on zpívá"
    },
    "imperfektIndikativ": {
      "de": "er sang",
      "lv": "on zpíval"
    },
    "imperfektKonjunktiv": {
      "de": "er sänge",
      "lv": "on by zpíval"
    },
    "partizipVergangenheit": {
      "de": "gesungen",
      "lv": "zpíván"
    }
  },
  {
    "infinitiv": {
      "de": "sinken",
      "lv": "klesat"
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
      "lv": "přemítat"
    },
    "praesens": {
      "de": "er sinnt",
      "lv": "on přemítá"
    },
    "imperfektIndikativ": {
      "de": "er sann",
      "lv": "on přemítal"
    },
    "imperfektKonjunktiv": {
      "de": "er sönne / er sänne",
      "lv": "on by přemítal"
    },
    "partizipVergangenheit": {
      "de": "gesonnen",
      "lv": "přemítal"
    }
  },
  {
    "infinitiv": {
      "de": "sitzen",
      "lv": "sedět"
    },
    "praesens": {
      "de": "er sitzt",
      "lv": "on sedí"
    },
    "imperfektIndikativ": {
      "de": "er sass",
      "lv": "on seděl"
    },
    "imperfektKonjunktiv": {
      "de": "er säße",
      "lv": "on by seděl"
    },
    "partizipVergangenheit": {
      "de": "gesessen",
      "lv": "seděl"
    }
  },
  {
    "infinitiv": {
      "de": "sollen",
      "lv": "mít"
    },
    "praesens": {
      "de": "er soll",
      "lv": "on má"
    },
    "imperfektIndikativ": {
      "de": "sollte",
      "lv": "on měl"
    },
    "imperfektKonjunktiv": {
      "de": "sollte",
      "lv": "on by měl"
    },
    "partizipVergangenheit": {
      "de": "gesollt",
      "lv": "měl"
    }
  },
  {
    "infinitiv": {
      "de": "speien",
      "lv": "plivat"
    },
    "praesens": {
      "de": "er speit",
      "lv": "on plive"
    },
    "imperfektIndikativ": {
      "de": "er spie",
      "lv": "on plival"
    },
    "imperfektKonjunktiv": {
      "de": "er spie",
      "lv": "on by plival"
    },
    "partizipVergangenheit": {
      "de": "gespien",
      "lv": "plival"
    }
  },
  {
    "infinitiv": {
      "de": "spinnen",
      "lv": "příst"
    },
    "praesens": {
      "de": "er spinnt",
      "lv": "on přede"
    },
    "imperfektIndikativ": {
      "de": "er spann",
      "lv": "on předl"
    },
    "imperfektKonjunktiv": {
      "de": "er spönne / er spänne",
      "lv": "on by předl"
    },
    "partizipVergangenheit": {
      "de": "gesponnen",
      "lv": "předen"
    }
  },
  {
    "infinitiv": {
      "de": "spleißen",
      "lv": "spojovat"
    },
    "praesens": {
      "de": "er spleißt",
      "lv": "on spojuje"
    },
    "imperfektIndikativ": {
      "de": "spliss",
      "lv": "on spojoval"
    },
    "imperfektKonjunktiv": {
      "de": "spliss",
      "lv": "on by spojoval"
    },
    "partizipVergangenheit": {
      "de": "gesplissen",
      "lv": "spojován"
    }
  },
  {
    "infinitiv": {
      "de": "sprechen",
      "lv": "mluvit"
    },
    "praesens": {
      "de": "er spricht",
      "lv": "on mluví"
    },
    "imperfektIndikativ": {
      "de": "er sprach",
      "lv": "on mluvil"
    },
    "imperfektKonjunktiv": {
      "de": "er spräche",
      "lv": "on by mluvil"
    },
    "partizipVergangenheit": {
      "de": "gesprochen",
      "lv": "mluvil"
    }
  },
  {
    "infinitiv": {
      "de": "sprießen",
      "lv": "rašit"
    },
    "praesens": {
      "de": "er sprießt",
      "lv": "to raší"
    },
    "imperfektIndikativ": {
      "de": "er spross",
      "lv": "to rašilo"
    },
    "imperfektKonjunktiv": {
      "de": "er sprösse",
      "lv": "to by rašilo"
    },
    "partizipVergangenheit": {
      "de": "gesprossen (er ist)",
      "lv": "rašil"
    }
  },
  {
    "infinitiv": {
      "de": "springen",
      "lv": "skákat"
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
      "lv": "bodat"
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
      "lv": "bodán"
    }
  },
  {
    "infinitiv": {
      "de": "stecken",
      "lv": "strkat / zapichovat"
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
      "lv": "strkán / zapichován"
    }
  },
  {
    "infinitiv": {
      "de": "stehen",
      "lv": "stát"
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
      "lv": "krást"
    },
    "praesens": {
      "de": "er stiehlt",
      "lv": "on krade"
    },
    "imperfektIndikativ": {
      "de": "er stahl",
      "lv": "on kradl"
    },
    "imperfektKonjunktiv": {
      "de": "er stöhle / er stähle",
      "lv": "on by kradl"
    },
    "partizipVergangenheit": {
      "de": "gestohlen",
      "lv": "kraden"
    }
  },
  {
    "infinitiv": {
      "de": "steigen",
      "lv": "stoupat"
    },
    "praesens": {
      "de": "er steigt",
      "lv": "on stoupá"
    },
    "imperfektIndikativ": {
      "de": "er stieg",
      "lv": "on stoupal"
    },
    "imperfektKonjunktiv": {
      "de": "er stiege",
      "lv": "on by stoupal"
    },
    "partizipVergangenheit": {
      "de": "gestiegen (er ist)",
      "lv": "stoupal"
    }
  },
  {
    "infinitiv": {
      "de": "sterben",
      "lv": "umírat"
    },
    "praesens": {
      "de": "er stirbt",
      "lv": "on umírá"
    },
    "imperfektIndikativ": {
      "de": "er starb",
      "lv": "on umíral"
    },
    "imperfektKonjunktiv": {
      "de": "er stürbe",
      "lv": "on by umíral"
    },
    "partizipVergangenheit": {
      "de": "gestorben (er ist)",
      "lv": "umíral"
    }
  },
  {
    "infinitiv": {
      "de": "stinken",
      "lv": "smrdět"
    },
    "praesens": {
      "de": "es stinkt",
      "lv": "to smrdí"
    },
    "imperfektIndikativ": {
      "de": "stank",
      "lv": "to smrdělo"
    },
    "imperfektKonjunktiv": {
      "de": "stank",
      "lv": "to by smrdělo"
    },
    "partizipVergangenheit": {
      "de": "gestunken",
      "lv": "smrděl"
    }
  },
  {
    "infinitiv": {
      "de": "stoßen",
      "lv": "strkat"
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
      "lv": "strkán"
    }
  },
  {
    "infinitiv": {
      "de": "streichen",
      "lv": "natírat / škrtat"
    },
    "praesens": {
      "de": "er streicht",
      "lv": "on natírá / škrtá"
    },
    "imperfektIndikativ": {
      "de": "er strich",
      "lv": "on natíral / škrtal"
    },
    "imperfektKonjunktiv": {
      "de": "er striche",
      "lv": "on by natíral / škrtal"
    },
    "partizipVergangenheit": {
      "de": "gestrichen",
      "lv": "natírán / škrtán"
    }
  },
  {
    "infinitiv": {
      "de": "streiten",
      "lv": "hádat se"
    },
    "praesens": {
      "de": "er streitet",
      "lv": "on se hádá"
    },
    "imperfektIndikativ": {
      "de": "er stritt",
      "lv": "on se hádal"
    },
    "imperfektKonjunktiv": {
      "de": "er stritte",
      "lv": "on by se hádal"
    },
    "partizipVergangenheit": {
      "de": "gestritten",
      "lv": "hádal se"
    }
  },
  {
    "infinitiv": {
      "de": "tragen",
      "lv": "nést"
    },
    "praesens": {
      "de": "er trägt",
      "lv": "on nese"
    },
    "imperfektIndikativ": {
      "de": "er trug",
      "lv": "on nesl"
    },
    "imperfektKonjunktiv": {
      "de": "er trüge",
      "lv": "on by nesl"
    },
    "partizipVergangenheit": {
      "de": "getragen",
      "lv": "nesen"
    }
  },
  {
    "infinitiv": {
      "de": "treffen",
      "lv": "potkávat"
    },
    "praesens": {
      "de": "er trifft",
      "lv": "on potkává"
    },
    "imperfektIndikativ": {
      "de": "er traf",
      "lv": "on potkával"
    },
    "imperfektKonjunktiv": {
      "de": "er träfe",
      "lv": "on by potkával"
    },
    "partizipVergangenheit": {
      "de": "getroffen",
      "lv": "potkáván"
    }
  },
  {
    "infinitiv": {
      "de": "treiben",
      "lv": "hnát"
    },
    "praesens": {
      "de": "er treibt",
      "lv": "on žene"
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
      "lv": "hnán"
    }
  },
  {
    "infinitiv": {
      "de": "treten",
      "lv": "vstupovat / jít"
    },
    "praesens": {
      "de": "er tritt",
      "lv": "on vstupuje / jde"
    },
    "imperfektIndikativ": {
      "de": "er trat",
      "lv": "on vstupoval / šel"
    },
    "imperfektKonjunktiv": {
      "de": "er träte",
      "lv": "on by vstupoval / šel"
    },
    "partizipVergangenheit": {
      "de": "getreten (er ist)",
      "lv": "vstupoval / šel"
    }
  },
  {
    "infinitiv": {
      "de": "trinken",
      "lv": "pít"
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
      "lv": "pit"
    }
  },
  {
    "infinitiv": {
      "de": "trügen",
      "lv": "klamat"
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
      "lv": "klamán"
    }
  },
  {
    "infinitiv": {
      "de": "tun",
      "lv": "dělat"
    },
    "praesens": {
      "de": "er tut",
      "lv": "on dělá"
    },
    "imperfektIndikativ": {
      "de": "er tat",
      "lv": "on dělal"
    },
    "imperfektKonjunktiv": {
      "de": "er täte",
      "lv": "on by dělal"
    },
    "partizipVergangenheit": {
      "de": "getan",
      "lv": "dělán"
    }
  },
  {
    "infinitiv": {
      "de": "verderben",
      "lv": "kazit"
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
      "lv": "kažen"
    }
  },
  {
    "infinitiv": {
      "de": "verdrießen",
      "lv": "rozčilovat"
    },
    "praesens": {
      "de": "er verdrießt",
      "lv": "on rozčiluje"
    },
    "imperfektIndikativ": {
      "de": "er verdross",
      "lv": "on rozčiloval"
    },
    "imperfektKonjunktiv": {
      "de": "er verdrösse",
      "lv": "on by rozčiloval"
    },
    "partizipVergangenheit": {
      "de": "verdrossen",
      "lv": "rozčilován"
    }
  },
  {
    "infinitiv": {
      "de": "vergessen",
      "lv": "zapomínat"
    },
    "praesens": {
      "de": "er vergisst",
      "lv": "on zapomíná"
    },
    "imperfektIndikativ": {
      "de": "er vergass",
      "lv": "on zapomínal"
    },
    "imperfektKonjunktiv": {
      "de": "er vergäße",
      "lv": "on by zapomínal"
    },
    "partizipVergangenheit": {
      "de": "vergessen",
      "lv": "zapomínán"
    }
  },
  {
    "infinitiv": {
      "de": "verlieren",
      "lv": "ztrácet"
    },
    "praesens": {
      "de": "er verliert",
      "lv": "on ztrácí"
    },
    "imperfektIndikativ": {
      "de": "er verlor",
      "lv": "on ztrácel"
    },
    "imperfektKonjunktiv": {
      "de": "er verlöre",
      "lv": "on by ztrácel"
    },
    "partizipVergangenheit": {
      "de": "verloren",
      "lv": "ztrácen"
    }
  },
  {
    "infinitiv": {
      "de": "wachsen",
      "lv": "růst"
    },
    "praesens": {
      "de": "er wächst",
      "lv": "on roste"
    },
    "imperfektIndikativ": {
      "de": "er wuchs",
      "lv": "on rostl"
    },
    "imperfektKonjunktiv": {
      "de": "er wüchse",
      "lv": "on by rostl"
    },
    "partizipVergangenheit": {
      "de": "gewachsen (er ist)",
      "lv": "rostl"
    }
  },
  {
    "infinitiv": {
      "de": "waschen",
      "lv": "mýt"
    },
    "praesens": {
      "de": "er wäscht",
      "lv": "on myje"
    },
    "imperfektIndikativ": {
      "de": "er wusch",
      "lv": "on myl"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsche",
      "lv": "on by myl"
    },
    "partizipVergangenheit": {
      "de": "gewaschen",
      "lv": "myt"
    }
  },
  {
    "infinitiv": {
      "de": "weben",
      "lv": "tkát"
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
      "lv": "tkán"
    }
  },
  {
    "infinitiv": {
      "de": "weichen",
      "lv": "ustupovat"
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
      "lv": "ukazovat"
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
      "lv": "ukazován"
    }
  },
  {
    "infinitiv": {
      "de": "wenden",
      "lv": "otáčet / obracet"
    },
    "praesens": {
      "de": "er wendet",
      "lv": "on otáčí / obrací"
    },
    "imperfektIndikativ": {
      "de": "er wandte / es wendete",
      "lv": "on otáčel / obracel"
    },
    "imperfektKonjunktiv": {
      "de": "er wendete",
      "lv": "on by otáčel / obracel"
    },
    "partizipVergangenheit": {
      "de": "gewandt / gewendet",
      "lv": "otáčen / obracen"
    }
  },
  {
    "infinitiv": {
      "de": "werben",
      "lv": "dvořit se"
    },
    "praesens": {
      "de": "er wirbt",
      "lv": "on se dvoří"
    },
    "imperfektIndikativ": {
      "de": "er warb",
      "lv": "on se dvořil"
    },
    "imperfektKonjunktiv": {
      "de": "er würbe",
      "lv": "on by se dvořil"
    },
    "partizipVergangenheit": {
      "de": "geworben",
      "lv": "dvořil se"
    }
  },
  {
    "infinitiv": {
      "de": "werden",
      "lv": "stávat se"
    },
    "praesens": {
      "de": "er wird",
      "lv": "on se stává"
    },
    "imperfektIndikativ": {
      "de": "wurde",
      "lv": "on se stával"
    },
    "imperfektKonjunktiv": {
      "de": "wurde",
      "lv": "on by se stával"
    },
    "partizipVergangenheit": {
      "de": "geworden",
      "lv": "stával se"
    }
  },
  {
    "infinitiv": {
      "de": "werfen",
      "lv": "házet"
    },
    "praesens": {
      "de": "er wirft",
      "lv": "on hází"
    },
    "imperfektIndikativ": {
      "de": "er warf",
      "lv": "on házel"
    },
    "imperfektKonjunktiv": {
      "de": "er würfe",
      "lv": "on by házel"
    },
    "partizipVergangenheit": {
      "de": "geworfen",
      "lv": "házen"
    }
  },
  {
    "infinitiv": {
      "de": "wiegen",
      "lv": "vážit"
    },
    "praesens": {
      "de": "er wiegt",
      "lv": "on váží"
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
      "lv": "vážen"
    }
  },
  {
    "infinitiv": {
      "de": "winden",
      "lv": "vinout"
    },
    "praesens": {
      "de": "er windet",
      "lv": "on vine"
    },
    "imperfektIndikativ": {
      "de": "er wand",
      "lv": "on vinul"
    },
    "imperfektKonjunktiv": {
      "de": "er wände",
      "lv": "on by vinul"
    },
    "partizipVergangenheit": {
      "de": "gewunden",
      "lv": "vinut"
    }
  },
  {
    "infinitiv": {
      "de": "wissen",
      "lv": "vědět"
    },
    "praesens": {
      "de": "er weiß",
      "lv": "on ví"
    },
    "imperfektIndikativ": {
      "de": "er wusste",
      "lv": "on věděl"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsste",
      "lv": "on by věděl"
    },
    "partizipVergangenheit": {
      "de": "gewusst",
      "lv": "věděl"
    }
  },
  {
    "infinitiv": {
      "de": "wollen",
      "lv": "chtít"
    },
    "praesens": {
      "de": "er will",
      "lv": "on chce"
    },
    "imperfektIndikativ": {
      "de": "wollte",
      "lv": "on chtěl"
    },
    "imperfektKonjunktiv": {
      "de": "wollte",
      "lv": "on by chtěl"
    },
    "partizipVergangenheit": {
      "de": "gewollt",
      "lv": "chtěl"
    }
  },
  {
    "infinitiv": {
      "de": "wringen",
      "lv": "ždímat / vymačkávat"
    },
    "praesens": {
      "de": "er wringt",
      "lv": "on ždímá / vymačkává"
    },
    "imperfektIndikativ": {
      "de": "wrang",
      "lv": "on ždímal / vymačkával"
    },
    "imperfektKonjunktiv": {
      "de": "wrang",
      "lv": "on by ždímal / vymačkával"
    },
    "partizipVergangenheit": {
      "de": "gewrungen",
      "lv": "ždímán / vymačkáván"
    }
  },
  {
    "infinitiv": {
      "de": "zeihen",
      "lv": "obviňovat"
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
      "lv": "obviňován"
    }
  },
  {
    "infinitiv": {
      "de": "ziehen",
      "lv": "tahat"
    },
    "praesens": {
      "de": "er zieht",
      "lv": "on tahá"
    },
    "imperfektIndikativ": {
      "de": "er zog",
      "lv": "on tahal"
    },
    "imperfektKonjunktiv": {
      "de": "er zöge",
      "lv": "on by tahal"
    },
    "partizipVergangenheit": {
      "de": "gezogen",
      "lv": "tahán"
    }
  },
  {
    "infinitiv": {
      "de": "zwingen",
      "lv": "nutit"
    },
    "praesens": {
      "de": "er zwingt",
      "lv": "on nutí"
    },
    "imperfektIndikativ": {
      "de": "er zwang",
      "lv": "on nutil"
    },
    "imperfektKonjunktiv": {
      "de": "er zwänge",
      "lv": "on by nutil"
    },
    "partizipVergangenheit": {
      "de": "gezwungen",
      "lv": "nucen"
    }
  },
  {
    "infinitiv": {
      "de": "empfangen",
      "lv": "přijímat"
    },
    "praesens": {
      "de": "er empfängt",
      "lv": "on přijímá"
    },
    "imperfektIndikativ": {
      "de": "er empfing",
      "lv": "on přijímal"
    },
    "imperfektKonjunktiv": {
      "de": "er empfinge",
      "lv": "on by přijímal"
    },
    "partizipVergangenheit": {
      "de": "empfangen",
      "lv": "přijímán"
    }
  },
  {
    "infinitiv": {
      "de": "erwägen",
      "lv": "zvažovat"
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
      "lv": "zvažován"
    }
  },
  {
    "infinitiv": {
      "de": "fechten",
      "lv": "bojovat"
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
      "lv": "plést"
    },
    "praesens": {
      "de": "er flicht",
      "lv": "on plete"
    },
    "imperfektIndikativ": {
      "de": "er flocht",
      "lv": "on pletl"
    },
    "imperfektKonjunktiv": {
      "de": "er flöchte",
      "lv": "on by pletl"
    },
    "partizipVergangenheit": {
      "de": "geflochten",
      "lv": "pleten"
    }
  },
  {
    "infinitiv": {
      "de": "hangen",
      "lv": "viset"
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
      "lv": "štípat"
    },
    "praesens": {
      "de": "er spaltet",
      "lv": "on štípá"
    },
    "imperfektIndikativ": {
      "de": "er spaltete",
      "lv": "on štípal"
    },
    "imperfektKonjunktiv": {
      "de": "er spaltete",
      "lv": "on by štípal"
    },
    "partizipVergangenheit": {
      "de": "gespalten",
      "lv": "štípán"
    }
  },
  {
    "infinitiv": {
      "de": "verzeihen",
      "lv": "odpouštět"
    },
    "praesens": {
      "de": "er verzeiht",
      "lv": "on odpouští"
    },
    "imperfektIndikativ": {
      "de": "er verzieh",
      "lv": "on odpouštěl"
    },
    "imperfektKonjunktiv": {
      "de": "er verziehe",
      "lv": "on by odpouštěl"
    },
    "partizipVergangenheit": {
      "de": "verziehen",
      "lv": "odpouštěn"
    }
  }
];

window.VERB_ENTRIES = VERB_ENTRIES;

const VERB_ENTRIES = [
  {
    "infinitiv": {
      "de": "backen",
      "lv": "peći"
    },
    "praesens": {
      "de": "er bäckt",
      "lv": "on peče"
    },
    "imperfektIndikativ": {
      "de": "er buk",
      "lv": "on je pekao"
    },
    "imperfektKonjunktiv": {
      "de": "er büke",
      "lv": "on bi pekao"
    },
    "partizipVergangenheit": {
      "de": "gebacken",
      "lv": "pečen"
    }
  },
  {
    "infinitiv": {
      "de": "befehlen",
      "lv": "narediti"
    },
    "praesens": {
      "de": "er befiehlt",
      "lv": "on naredi"
    },
    "imperfektIndikativ": {
      "de": "er befahl",
      "lv": "on je naredio"
    },
    "imperfektKonjunktiv": {
      "de": "er beföhle",
      "lv": "on bi naredio"
    },
    "partizipVergangenheit": {
      "de": "befohlen",
      "lv": "naređen"
    }
  },
  {
    "infinitiv": {
      "de": "beginnen",
      "lv": "početi"
    },
    "praesens": {
      "de": "er beginnt",
      "lv": "on počne"
    },
    "imperfektIndikativ": {
      "de": "er begann",
      "lv": "on je počeo"
    },
    "imperfektKonjunktiv": {
      "de": "er begönne / er begänne",
      "lv": "on bi počeo"
    },
    "partizipVergangenheit": {
      "de": "begonnen",
      "lv": "počet"
    }
  },
  {
    "infinitiv": {
      "de": "beißen",
      "lv": "gristi"
    },
    "praesens": {
      "de": "er beißt",
      "lv": "on grize"
    },
    "imperfektIndikativ": {
      "de": "er biss",
      "lv": "on je grizao"
    },
    "imperfektKonjunktiv": {
      "de": "er bisse",
      "lv": "on bi grizao"
    },
    "partizipVergangenheit": {
      "de": "gebissen",
      "lv": "grizen"
    }
  },
  {
    "infinitiv": {
      "de": "bergen",
      "lv": "spasiti / sakriti"
    },
    "praesens": {
      "de": "er birgt",
      "lv": "on spasi / sakrije"
    },
    "imperfektIndikativ": {
      "de": "er barg",
      "lv": "on je spasio / sakrio"
    },
    "imperfektKonjunktiv": {
      "de": "er bürge / er bärge",
      "lv": "on bi spasio / sakrio"
    },
    "partizipVergangenheit": {
      "de": "geborgen",
      "lv": "spašen / sakriven"
    }
  },
  {
    "infinitiv": {
      "de": "bersten",
      "lv": "prsnuti"
    },
    "praesens": {
      "de": "er birst",
      "lv": "on prsne"
    },
    "imperfektIndikativ": {
      "de": "er barst / er borst",
      "lv": "on je prsnuo"
    },
    "imperfektKonjunktiv": {
      "de": "er bärste / er börste",
      "lv": "on bi prsnuo"
    },
    "partizipVergangenheit": {
      "de": "geborsten (er ist)",
      "lv": "prsnuo"
    }
  },
  {
    "infinitiv": {
      "de": "bewegen",
      "lv": "navesti"
    },
    "praesens": {
      "de": "er bewegt",
      "lv": "on navede"
    },
    "imperfektIndikativ": {
      "de": "er bewog",
      "lv": "on je naveo"
    },
    "imperfektKonjunktiv": {
      "de": "er bewöge",
      "lv": "on bi naveo"
    },
    "partizipVergangenheit": {
      "de": "bewogen",
      "lv": "naveden"
    }
  },
  {
    "infinitiv": {
      "de": "biegen",
      "lv": "saviti"
    },
    "praesens": {
      "de": "er biegt",
      "lv": "on savije"
    },
    "imperfektIndikativ": {
      "de": "er bog",
      "lv": "on je savio"
    },
    "imperfektKonjunktiv": {
      "de": "er böge",
      "lv": "on bi savio"
    },
    "partizipVergangenheit": {
      "de": "gebogen",
      "lv": "savijen"
    }
  },
  {
    "infinitiv": {
      "de": "bieten",
      "lv": "ponuditi"
    },
    "praesens": {
      "de": "er bietet",
      "lv": "on ponudi"
    },
    "imperfektIndikativ": {
      "de": "er bot",
      "lv": "on je ponudio"
    },
    "imperfektKonjunktiv": {
      "de": "er böte",
      "lv": "on bi ponudio"
    },
    "partizipVergangenheit": {
      "de": "geboten",
      "lv": "ponuđen"
    }
  },
  {
    "infinitiv": {
      "de": "binden",
      "lv": "vezati"
    },
    "praesens": {
      "de": "er bindet",
      "lv": "on veže"
    },
    "imperfektIndikativ": {
      "de": "er band",
      "lv": "on je vezao"
    },
    "imperfektKonjunktiv": {
      "de": "er bände",
      "lv": "on bi vezao"
    },
    "partizipVergangenheit": {
      "de": "gebunden",
      "lv": "vezan"
    }
  },
  {
    "infinitiv": {
      "de": "bitten",
      "lv": "moliti"
    },
    "praesens": {
      "de": "er bittet",
      "lv": "on moli"
    },
    "imperfektIndikativ": {
      "de": "er bat",
      "lv": "on je molio"
    },
    "imperfektKonjunktiv": {
      "de": "er bäte",
      "lv": "on bi molio"
    },
    "partizipVergangenheit": {
      "de": "gebeten",
      "lv": "moljen"
    }
  },
  {
    "infinitiv": {
      "de": "blasen",
      "lv": "puhati"
    },
    "praesens": {
      "de": "er bläst",
      "lv": "on puše"
    },
    "imperfektIndikativ": {
      "de": "er blies",
      "lv": "on je puhao"
    },
    "imperfektKonjunktiv": {
      "de": "er bliese",
      "lv": "on bi puhao"
    },
    "partizipVergangenheit": {
      "de": "geblasen",
      "lv": "puhan"
    }
  },
  {
    "infinitiv": {
      "de": "gären",
      "lv": "vreti"
    },
    "praesens": {
      "de": "es gärt",
      "lv": "ono vri"
    },
    "imperfektIndikativ": {
      "de": "es gor / es gärte",
      "lv": "ono je vrelo"
    },
    "imperfektKonjunktiv": {
      "de": "es göre / es gärte",
      "lv": "ono bi vrelo"
    },
    "partizipVergangenheit": {
      "de": "gegoren / gegärt",
      "lv": "vrio"
    }
  },
  {
    "infinitiv": {
      "de": "gebären",
      "lv": "roditi"
    },
    "praesens": {
      "de": "sie gebiert",
      "lv": "ona rodi"
    },
    "imperfektIndikativ": {
      "de": "sie gebar",
      "lv": "ona je rodila"
    },
    "imperfektKonjunktiv": {
      "de": "sie gebäre",
      "lv": "ona bi rodila"
    },
    "partizipVergangenheit": {
      "de": "geboren",
      "lv": "rođen"
    }
  },
  {
    "infinitiv": {
      "de": "gelingen",
      "lv": "uspjeti"
    },
    "praesens": {
      "de": "es gelingt",
      "lv": "ono uspije"
    },
    "imperfektIndikativ": {
      "de": "es gelang",
      "lv": "ono je uspjelo"
    },
    "imperfektKonjunktiv": {
      "de": "es gelänge",
      "lv": "ono bi uspjelo"
    },
    "partizipVergangenheit": {
      "de": "gelungen (es ist)",
      "lv": "uspio"
    }
  },
  {
    "infinitiv": {
      "de": "gelten",
      "lv": "vrijediti / biti na snazi"
    },
    "praesens": {
      "de": "er gilt",
      "lv": "on vrijedi / je na snazi"
    },
    "imperfektIndikativ": {
      "de": "er galt",
      "lv": "on je vrijedio / bio na snazi"
    },
    "imperfektKonjunktiv": {
      "de": "er gölte / es gälte",
      "lv": "on bi vrijedio / bio na snazi"
    },
    "partizipVergangenheit": {
      "de": "gegolten",
      "lv": "vrijedio / bio na snazi"
    }
  },
  {
    "infinitiv": {
      "de": "genesen",
      "lv": "ozdraviti"
    },
    "praesens": {
      "de": "er genest",
      "lv": "on ozdravi"
    },
    "imperfektIndikativ": {
      "de": "er genas",
      "lv": "on je ozdravio"
    },
    "imperfektKonjunktiv": {
      "de": "er genäse",
      "lv": "on bi ozdravio"
    },
    "partizipVergangenheit": {
      "de": "genesen (er ist)",
      "lv": "ozdravio"
    }
  },
  {
    "infinitiv": {
      "de": "genießen",
      "lv": "uživati"
    },
    "praesens": {
      "de": "er genießt",
      "lv": "on uživa"
    },
    "imperfektIndikativ": {
      "de": "er genoss",
      "lv": "on je uživao"
    },
    "imperfektKonjunktiv": {
      "de": "er genösse",
      "lv": "on bi uživao"
    },
    "partizipVergangenheit": {
      "de": "genossen",
      "lv": "uživao"
    }
  },
  {
    "infinitiv": {
      "de": "geschehen",
      "lv": "desiti se"
    },
    "praesens": {
      "de": "es geschieht",
      "lv": "ono se desi"
    },
    "imperfektIndikativ": {
      "de": "es geschah",
      "lv": "ono se desilo"
    },
    "imperfektKonjunktiv": {
      "de": "es geschähe",
      "lv": "ono bi se desilo"
    },
    "partizipVergangenheit": {
      "de": "geschehen (es ist)",
      "lv": "desio se"
    }
  },
  {
    "infinitiv": {
      "de": "gießen",
      "lv": "liti"
    },
    "praesens": {
      "de": "er gießt",
      "lv": "on lije"
    },
    "imperfektIndikativ": {
      "de": "er goss",
      "lv": "on je lio"
    },
    "imperfektKonjunktiv": {
      "de": "er gösse",
      "lv": "on bi lio"
    },
    "partizipVergangenheit": {
      "de": "gegossen",
      "lv": "liven"
    }
  },
  {
    "infinitiv": {
      "de": "gleichen",
      "lv": "ličiti"
    },
    "praesens": {
      "de": "er gleicht",
      "lv": "on liči"
    },
    "imperfektIndikativ": {
      "de": "er glich",
      "lv": "on je ličio"
    },
    "imperfektKonjunktiv": {
      "de": "er gliche",
      "lv": "on bi ličio"
    },
    "partizipVergangenheit": {
      "de": "geglichen",
      "lv": "ličio"
    }
  },
  {
    "infinitiv": {
      "de": "gleiten",
      "lv": "kliziti"
    },
    "praesens": {
      "de": "er gleitet",
      "lv": "on klizi"
    },
    "imperfektIndikativ": {
      "de": "er glitt",
      "lv": "on je klizio"
    },
    "imperfektKonjunktiv": {
      "de": "er glitte",
      "lv": "on bi klizio"
    },
    "partizipVergangenheit": {
      "de": "geglitten (er ist)",
      "lv": "klizio"
    }
  },
  {
    "infinitiv": {
      "de": "glimmen",
      "lv": "tinjati"
    },
    "praesens": {
      "de": "er glimmt",
      "lv": "on tinja"
    },
    "imperfektIndikativ": {
      "de": "er glimmte / glomm",
      "lv": "on je tinjao"
    },
    "imperfektKonjunktiv": {
      "de": "er glimmte",
      "lv": "on bi tinjao"
    },
    "partizipVergangenheit": {
      "de": "geglimmt / geglommen",
      "lv": "tinjao"
    }
  },
  {
    "infinitiv": {
      "de": "graben",
      "lv": "kopati"
    },
    "praesens": {
      "de": "er gräbt",
      "lv": "on kopa"
    },
    "imperfektIndikativ": {
      "de": "er grub",
      "lv": "on je kopao"
    },
    "imperfektKonjunktiv": {
      "de": "er grübe",
      "lv": "on bi kopao"
    },
    "partizipVergangenheit": {
      "de": "gegraben",
      "lv": "kopan"
    }
  },
  {
    "infinitiv": {
      "de": "greifen",
      "lv": "zgrabiti"
    },
    "praesens": {
      "de": "er greift",
      "lv": "on zgrabi"
    },
    "imperfektIndikativ": {
      "de": "er griff",
      "lv": "on je zgrabio"
    },
    "imperfektKonjunktiv": {
      "de": "er griffe",
      "lv": "on bi zgrabio"
    },
    "partizipVergangenheit": {
      "de": "gegriffen",
      "lv": "zgrabljen"
    }
  },
  {
    "infinitiv": {
      "de": "hauen",
      "lv": "sjeći"
    },
    "praesens": {
      "de": "er haut",
      "lv": "on siječe"
    },
    "imperfektIndikativ": {
      "de": "er hieb",
      "lv": "on je sjekao"
    },
    "imperfektKonjunktiv": {
      "de": "er hiebe",
      "lv": "on bi sjekao"
    },
    "partizipVergangenheit": {
      "de": "gehauen",
      "lv": "sječen"
    }
  },
  {
    "infinitiv": {
      "de": "heben",
      "lv": "podići"
    },
    "praesens": {
      "de": "er hebt",
      "lv": "on podigne"
    },
    "imperfektIndikativ": {
      "de": "er hob",
      "lv": "on je podigao"
    },
    "imperfektKonjunktiv": {
      "de": "er höbe",
      "lv": "on bi podigao"
    },
    "partizipVergangenheit": {
      "de": "gehoben",
      "lv": "podignut"
    }
  },
  {
    "infinitiv": {
      "de": "kennen",
      "lv": "poznavati / znati"
    },
    "praesens": {
      "de": "er kennt",
      "lv": "on poznaje / zna"
    },
    "imperfektIndikativ": {
      "de": "kannte",
      "lv": "on je poznavao / znao"
    },
    "imperfektKonjunktiv": {
      "de": "kannte",
      "lv": "on bi poznavao / znao"
    },
    "partizipVergangenheit": {
      "de": "gekannt",
      "lv": "poznat / znan"
    }
  },
  {
    "infinitiv": {
      "de": "klingen",
      "lv": "zvučati"
    },
    "praesens": {
      "de": "er klingt",
      "lv": "on zvuči"
    },
    "imperfektIndikativ": {
      "de": "er klang",
      "lv": "on je zvučao"
    },
    "imperfektKonjunktiv": {
      "de": "er klänge",
      "lv": "on bi zvučao"
    },
    "partizipVergangenheit": {
      "de": "geklungen",
      "lv": "zvučao"
    }
  },
  {
    "infinitiv": {
      "de": "kneifen",
      "lv": "štipati"
    },
    "praesens": {
      "de": "er kneift",
      "lv": "on štipa"
    },
    "imperfektIndikativ": {
      "de": "er kniff",
      "lv": "on je štipao"
    },
    "imperfektKonjunktiv": {
      "de": "er kniffe",
      "lv": "on bi štipao"
    },
    "partizipVergangenheit": {
      "de": "gekniffen",
      "lv": "uštipnut"
    }
  },
  {
    "infinitiv": {
      "de": "bleiben",
      "lv": "ostati"
    },
    "praesens": {
      "de": "er bleibt",
      "lv": "on ostane"
    },
    "imperfektIndikativ": {
      "de": "er blieb",
      "lv": "on je ostao"
    },
    "imperfektKonjunktiv": {
      "de": "er bliebe",
      "lv": "on bi ostao"
    },
    "partizipVergangenheit": {
      "de": "geblieben (er ist)",
      "lv": "ostao"
    }
  },
  {
    "infinitiv": {
      "de": "bleichen",
      "lv": "blijedjeti"
    },
    "praesens": {
      "de": "er bleicht",
      "lv": "on blijedi"
    },
    "imperfektIndikativ": {
      "de": "blich",
      "lv": "on je blijedio"
    },
    "imperfektKonjunktiv": {
      "de": "blich",
      "lv": "on bi blijedio"
    },
    "partizipVergangenheit": {
      "de": "geblichen",
      "lv": "blijedio"
    }
  },
  {
    "infinitiv": {
      "de": "braten",
      "lv": "pržiti"
    },
    "praesens": {
      "de": "er brät",
      "lv": "on prži"
    },
    "imperfektIndikativ": {
      "de": "er briet",
      "lv": "on je pržio"
    },
    "imperfektKonjunktiv": {
      "de": "er briete",
      "lv": "on bi pržio"
    },
    "partizipVergangenheit": {
      "de": "gebraten",
      "lv": "pržen"
    }
  },
  {
    "infinitiv": {
      "de": "brechen",
      "lv": "razbiti"
    },
    "praesens": {
      "de": "er bricht",
      "lv": "on razbije"
    },
    "imperfektIndikativ": {
      "de": "er brach",
      "lv": "on je razbio"
    },
    "imperfektKonjunktiv": {
      "de": "er bräche",
      "lv": "on bi razbio"
    },
    "partizipVergangenheit": {
      "de": "gebrochen",
      "lv": "razbijen"
    }
  },
  {
    "infinitiv": {
      "de": "brennen",
      "lv": "gorjeti"
    },
    "praesens": {
      "de": "er brennt",
      "lv": "on gori"
    },
    "imperfektIndikativ": {
      "de": "brannte",
      "lv": "on je gorio"
    },
    "imperfektKonjunktiv": {
      "de": "brannte",
      "lv": "on bi gorio"
    },
    "partizipVergangenheit": {
      "de": "gebrannt",
      "lv": "gorio"
    }
  },
  {
    "infinitiv": {
      "de": "bringen",
      "lv": "donijeti"
    },
    "praesens": {
      "de": "er bringt",
      "lv": "on donese"
    },
    "imperfektIndikativ": {
      "de": "er brachte",
      "lv": "on je donio"
    },
    "imperfektKonjunktiv": {
      "de": "er brächte",
      "lv": "on bi donio"
    },
    "partizipVergangenheit": {
      "de": "gebracht",
      "lv": "donesen"
    }
  },
  {
    "infinitiv": {
      "de": "denken",
      "lv": "misliti"
    },
    "praesens": {
      "de": "er denkt",
      "lv": "on misli"
    },
    "imperfektIndikativ": {
      "de": "er dachte",
      "lv": "on je mislio"
    },
    "imperfektKonjunktiv": {
      "de": "er dächte",
      "lv": "on bi mislio"
    },
    "partizipVergangenheit": {
      "de": "gedacht",
      "lv": "mislio"
    }
  },
  {
    "infinitiv": {
      "de": "dingen",
      "lv": "unajmiti / dogovoriti se"
    },
    "praesens": {
      "de": "er dingt",
      "lv": "on unajmi / se dogovori"
    },
    "imperfektIndikativ": {
      "de": "dingte",
      "lv": "on je unajmio / se dogovorio"
    },
    "imperfektKonjunktiv": {
      "de": "dingte",
      "lv": "on bi unajmio / se dogovorio"
    },
    "partizipVergangenheit": {
      "de": "gedungen",
      "lv": "unajmljen / dogovorio se"
    }
  },
  {
    "infinitiv": {
      "de": "dreschen",
      "lv": "vršiti"
    },
    "praesens": {
      "de": "er drischt",
      "lv": "on vrši"
    },
    "imperfektIndikativ": {
      "de": "er drasch / er drosch",
      "lv": "on je vršio"
    },
    "imperfektKonjunktiv": {
      "de": "er dräsche / er drösche",
      "lv": "on bi vršio"
    },
    "partizipVergangenheit": {
      "de": "gedroschen",
      "lv": "vršen"
    }
  },
  {
    "infinitiv": {
      "de": "dringen",
      "lv": "prodrijeti"
    },
    "praesens": {
      "de": "er dringt",
      "lv": "on prodre"
    },
    "imperfektIndikativ": {
      "de": "er drang",
      "lv": "on je prodro"
    },
    "imperfektKonjunktiv": {
      "de": "er dränge",
      "lv": "on bi prodro"
    },
    "partizipVergangenheit": {
      "de": "gedrungen (er ist)",
      "lv": "prodro"
    }
  },
  {
    "infinitiv": {
      "de": "dünken",
      "lv": "činiti se"
    },
    "praesens": {
      "de": "es dünkt",
      "lv": "ono se čini"
    },
    "imperfektIndikativ": {
      "de": "deuchte",
      "lv": "ono se činilo"
    },
    "imperfektKonjunktiv": {
      "de": "deuchte",
      "lv": "ono bi se činilo"
    },
    "partizipVergangenheit": {
      "de": "gedünkt",
      "lv": "činio se"
    }
  },
  {
    "infinitiv": {
      "de": "dürfen",
      "lv": "smjeti"
    },
    "praesens": {
      "de": "er darf",
      "lv": "on smije"
    },
    "imperfektIndikativ": {
      "de": "durfte",
      "lv": "on je smio"
    },
    "imperfektKonjunktiv": {
      "de": "durfte",
      "lv": "on bi smio"
    },
    "partizipVergangenheit": {
      "de": "gedurft",
      "lv": "smio"
    }
  },
  {
    "infinitiv": {
      "de": "empfehlen",
      "lv": "preporučiti"
    },
    "praesens": {
      "de": "er empfiehlt",
      "lv": "on preporuči"
    },
    "imperfektIndikativ": {
      "de": "er empfahl",
      "lv": "on je preporučio"
    },
    "imperfektKonjunktiv": {
      "de": "er empfähle / er empföhle",
      "lv": "on bi preporučio"
    },
    "partizipVergangenheit": {
      "de": "empfohlen",
      "lv": "preporučen"
    }
  },
  {
    "infinitiv": {
      "de": "empfinden",
      "lv": "osjetiti"
    },
    "praesens": {
      "de": "er empfindet",
      "lv": "on osjeti"
    },
    "imperfektIndikativ": {
      "de": "er empfand",
      "lv": "on je osjetio"
    },
    "imperfektKonjunktiv": {
      "de": "er empfände",
      "lv": "on bi osjetio"
    },
    "partizipVergangenheit": {
      "de": "empfunden",
      "lv": "osjećen"
    }
  },
  {
    "infinitiv": {
      "de": "erlöschen",
      "lv": "ugasiti se"
    },
    "praesens": {
      "de": "er erlischt",
      "lv": "on se ugasi"
    },
    "imperfektIndikativ": {
      "de": "er erlosch",
      "lv": "on se ugasio"
    },
    "imperfektKonjunktiv": {
      "de": "er erlösche",
      "lv": "on bi se ugasio"
    },
    "partizipVergangenheit": {
      "de": "erloschen (er ist)",
      "lv": "ugasio se"
    }
  },
  {
    "infinitiv": {
      "de": "erschrecken",
      "lv": "uplašiti se"
    },
    "praesens": {
      "de": "er erschrickt",
      "lv": "on se uplaši"
    },
    "imperfektIndikativ": {
      "de": "er erschrak",
      "lv": "on se uplašio"
    },
    "imperfektKonjunktiv": {
      "de": "er erschräke",
      "lv": "on bi se uplašio"
    },
    "partizipVergangenheit": {
      "de": "erschrocken (er ist)",
      "lv": "uplašio se"
    }
  },
  {
    "infinitiv": {
      "de": "essen",
      "lv": "jesti"
    },
    "praesens": {
      "de": "er isst",
      "lv": "on jede"
    },
    "imperfektIndikativ": {
      "de": "er ass",
      "lv": "on je jeo"
    },
    "imperfektKonjunktiv": {
      "de": "er äße",
      "lv": "on bi jeo"
    },
    "partizipVergangenheit": {
      "de": "gegessen",
      "lv": "jeden"
    }
  },
  {
    "infinitiv": {
      "de": "fahren",
      "lv": "voziti"
    },
    "praesens": {
      "de": "er fährt",
      "lv": "on vozi"
    },
    "imperfektIndikativ": {
      "de": "er fuhr",
      "lv": "on je vozio"
    },
    "imperfektKonjunktiv": {
      "de": "er führe",
      "lv": "on bi vozio"
    },
    "partizipVergangenheit": {
      "de": "gefahren (er ist)",
      "lv": "vozio"
    }
  },
  {
    "infinitiv": {
      "de": "fallen",
      "lv": "pasti"
    },
    "praesens": {
      "de": "er fällt",
      "lv": "on padne"
    },
    "imperfektIndikativ": {
      "de": "er fiel",
      "lv": "on je pao"
    },
    "imperfektKonjunktiv": {
      "de": "er fiele",
      "lv": "on bi pao"
    },
    "partizipVergangenheit": {
      "de": "gefallen (er ist)",
      "lv": "pao"
    }
  },
  {
    "infinitiv": {
      "de": "fangen",
      "lv": "uhvatiti"
    },
    "praesens": {
      "de": "er fängt",
      "lv": "on uhvati"
    },
    "imperfektIndikativ": {
      "de": "er fing",
      "lv": "on je uhvatio"
    },
    "imperfektKonjunktiv": {
      "de": "er finge",
      "lv": "on bi uhvatio"
    },
    "partizipVergangenheit": {
      "de": "gefangen",
      "lv": "uhvaćen"
    }
  },
  {
    "infinitiv": {
      "de": "finden",
      "lv": "naći"
    },
    "praesens": {
      "de": "er findet",
      "lv": "on nađe"
    },
    "imperfektIndikativ": {
      "de": "er fand",
      "lv": "on je našao"
    },
    "imperfektKonjunktiv": {
      "de": "er fände",
      "lv": "on bi našao"
    },
    "partizipVergangenheit": {
      "de": "gefunden",
      "lv": "nađen"
    }
  },
  {
    "infinitiv": {
      "de": "fliegen",
      "lv": "letjeti"
    },
    "praesens": {
      "de": "er fliegt",
      "lv": "on leti"
    },
    "imperfektIndikativ": {
      "de": "er flog",
      "lv": "on je letio"
    },
    "imperfektKonjunktiv": {
      "de": "er flöge",
      "lv": "on bi letio"
    },
    "partizipVergangenheit": {
      "de": "geflogen (er ist)",
      "lv": "letio"
    }
  },
  {
    "infinitiv": {
      "de": "fliehen",
      "lv": "bježati"
    },
    "praesens": {
      "de": "er flieht",
      "lv": "on bježi"
    },
    "imperfektIndikativ": {
      "de": "er floh",
      "lv": "on je bježao"
    },
    "imperfektKonjunktiv": {
      "de": "er flöhe",
      "lv": "on bi bježao"
    },
    "partizipVergangenheit": {
      "de": "geflohen (er ist)",
      "lv": "bježao"
    }
  },
  {
    "infinitiv": {
      "de": "fließen",
      "lv": "teći"
    },
    "praesens": {
      "de": "er fließt",
      "lv": "on teče"
    },
    "imperfektIndikativ": {
      "de": "er floss",
      "lv": "on je tekao"
    },
    "imperfektKonjunktiv": {
      "de": "er flösse",
      "lv": "on bi tekao"
    },
    "partizipVergangenheit": {
      "de": "geflossen (er ist)",
      "lv": "tekao"
    }
  },
  {
    "infinitiv": {
      "de": "fressen",
      "lv": "jesti / žderati"
    },
    "praesens": {
      "de": "er frisst",
      "lv": "on jede / ždere"
    },
    "imperfektIndikativ": {
      "de": "er frass",
      "lv": "on je jeo / žderao"
    },
    "imperfektKonjunktiv": {
      "de": "er fräße",
      "lv": "on bi jeo / žderao"
    },
    "partizipVergangenheit": {
      "de": "gefressen",
      "lv": "jeden / žderan"
    }
  },
  {
    "infinitiv": {
      "de": "frieren",
      "lv": "smrzavati se"
    },
    "praesens": {
      "de": "er friert",
      "lv": "on se smrzava"
    },
    "imperfektIndikativ": {
      "de": "er fror",
      "lv": "on se smrzavao"
    },
    "imperfektKonjunktiv": {
      "de": "er fröre",
      "lv": "on bi se smrzavao"
    },
    "partizipVergangenheit": {
      "de": "gefroren",
      "lv": "smrzavao se"
    }
  },
  {
    "infinitiv": {
      "de": "geben",
      "lv": "dati"
    },
    "praesens": {
      "de": "er gibt",
      "lv": "on da"
    },
    "imperfektIndikativ": {
      "de": "er gab",
      "lv": "on je dao"
    },
    "imperfektKonjunktiv": {
      "de": "er gäbe",
      "lv": "on bi dao"
    },
    "partizipVergangenheit": {
      "de": "gegeben",
      "lv": "dat"
    }
  },
  {
    "infinitiv": {
      "de": "gedeihen",
      "lv": "napredovati"
    },
    "praesens": {
      "de": "er gedeiht",
      "lv": "on napreduje"
    },
    "imperfektIndikativ": {
      "de": "er gedieh",
      "lv": "on je napredovao"
    },
    "imperfektKonjunktiv": {
      "de": "er gediehe",
      "lv": "on bi napredovao"
    },
    "partizipVergangenheit": {
      "de": "gediehen (er ist)",
      "lv": "napredovao"
    }
  },
  {
    "infinitiv": {
      "de": "gehen",
      "lv": "ići"
    },
    "praesens": {
      "de": "er geht",
      "lv": "on ide"
    },
    "imperfektIndikativ": {
      "de": "er ging",
      "lv": "on je išao"
    },
    "imperfektKonjunktiv": {
      "de": "er ginge",
      "lv": "on bi išao"
    },
    "partizipVergangenheit": {
      "de": "gegangen (er ist)",
      "lv": "išao"
    }
  },
  {
    "infinitiv": {
      "de": "gewinnen",
      "lv": "osvojiti"
    },
    "praesens": {
      "de": "er gewinnt",
      "lv": "on osvoji"
    },
    "imperfektIndikativ": {
      "de": "er gewann",
      "lv": "on je osvojio"
    },
    "imperfektKonjunktiv": {
      "de": "er gewönne / er gewänne",
      "lv": "on bi osvojio"
    },
    "partizipVergangenheit": {
      "de": "gewonnen",
      "lv": "osvojen"
    }
  },
  {
    "infinitiv": {
      "de": "haben",
      "lv": "imati"
    },
    "praesens": {
      "de": "er hat",
      "lv": "on ima"
    },
    "imperfektIndikativ": {
      "de": "hatte",
      "lv": "on je imao"
    },
    "imperfektKonjunktiv": {
      "de": "hatte",
      "lv": "on bi imao"
    },
    "partizipVergangenheit": {
      "de": "gehabt",
      "lv": "imao"
    }
  },
  {
    "infinitiv": {
      "de": "halten",
      "lv": "držati"
    },
    "praesens": {
      "de": "er hält",
      "lv": "on drži"
    },
    "imperfektIndikativ": {
      "de": "er hielt",
      "lv": "on je držao"
    },
    "imperfektKonjunktiv": {
      "de": "er hielte",
      "lv": "on bi držao"
    },
    "partizipVergangenheit": {
      "de": "gehalten",
      "lv": "držan"
    }
  },
  {
    "infinitiv": {
      "de": "heißen",
      "lv": "zvati / zvati se"
    },
    "praesens": {
      "de": "er heißt",
      "lv": "on zove / se zove"
    },
    "imperfektIndikativ": {
      "de": "er hieß",
      "lv": "on je zvao / se zvao"
    },
    "imperfektKonjunktiv": {
      "de": "er hieße",
      "lv": "on bi zvao / se zvao"
    },
    "partizipVergangenheit": {
      "de": "geheißen",
      "lv": "zvan / zvao se"
    }
  },
  {
    "infinitiv": {
      "de": "helfen",
      "lv": "pomoći"
    },
    "praesens": {
      "de": "er hilft",
      "lv": "on pomogne"
    },
    "imperfektIndikativ": {
      "de": "er half",
      "lv": "on je pomogao"
    },
    "imperfektKonjunktiv": {
      "de": "er hülfe / er hälfe",
      "lv": "on bi pomogao"
    },
    "partizipVergangenheit": {
      "de": "geholfen",
      "lv": "pomogao"
    }
  },
  {
    "infinitiv": {
      "de": "kommen",
      "lv": "doći"
    },
    "praesens": {
      "de": "er kommt",
      "lv": "on dođe"
    },
    "imperfektIndikativ": {
      "de": "er kam",
      "lv": "on je došao"
    },
    "imperfektKonjunktiv": {
      "de": "er käme",
      "lv": "on bi došao"
    },
    "partizipVergangenheit": {
      "de": "gekommen (er ist)",
      "lv": "došao"
    }
  },
  {
    "infinitiv": {
      "de": "können",
      "lv": "moći"
    },
    "praesens": {
      "de": "er kann",
      "lv": "on može"
    },
    "imperfektIndikativ": {
      "de": "konnte",
      "lv": "on je mogao"
    },
    "imperfektKonjunktiv": {
      "de": "konnte",
      "lv": "on bi mogao"
    },
    "partizipVergangenheit": {
      "de": "gekonnt",
      "lv": "mogao"
    }
  },
  {
    "infinitiv": {
      "de": "kriechen",
      "lv": "puzati"
    },
    "praesens": {
      "de": "er kriecht",
      "lv": "on puže"
    },
    "imperfektIndikativ": {
      "de": "er kroch",
      "lv": "on je puzao"
    },
    "imperfektKonjunktiv": {
      "de": "er kröche",
      "lv": "on bi puzao"
    },
    "partizipVergangenheit": {
      "de": "gekrochen (er ist)",
      "lv": "puzao"
    }
  },
  {
    "infinitiv": {
      "de": "laden",
      "lv": "tovariti / pozivati"
    },
    "praesens": {
      "de": "er lädt",
      "lv": "on tovari / poziva"
    },
    "imperfektIndikativ": {
      "de": "er lud",
      "lv": "on je tovario / pozivao"
    },
    "imperfektKonjunktiv": {
      "de": "er lüde",
      "lv": "on bi tovario / pozivao"
    },
    "partizipVergangenheit": {
      "de": "geladen",
      "lv": "natovaren / pozivan"
    }
  },
  {
    "infinitiv": {
      "de": "lassen",
      "lv": "narediti / pustiti"
    },
    "praesens": {
      "de": "er lässt",
      "lv": "on naredi / pusti"
    },
    "imperfektIndikativ": {
      "de": "er ließ",
      "lv": "on je naredio / pustio"
    },
    "imperfektKonjunktiv": {
      "de": "er ließe",
      "lv": "on bi naredio / pustio"
    },
    "partizipVergangenheit": {
      "de": "gelassen",
      "lv": "naređen / pušten"
    }
  },
  {
    "infinitiv": {
      "de": "laufen",
      "lv": "trčati"
    },
    "praesens": {
      "de": "er läuft",
      "lv": "on trči"
    },
    "imperfektIndikativ": {
      "de": "er lief",
      "lv": "on je trčao"
    },
    "imperfektKonjunktiv": {
      "de": "er liefe",
      "lv": "on bi trčao"
    },
    "partizipVergangenheit": {
      "de": "gelaufen (er ist)",
      "lv": "trčao"
    }
  },
  {
    "infinitiv": {
      "de": "leiden",
      "lv": "patiti"
    },
    "praesens": {
      "de": "er leidet",
      "lv": "on pati"
    },
    "imperfektIndikativ": {
      "de": "er litt",
      "lv": "on je patio"
    },
    "imperfektKonjunktiv": {
      "de": "er litte",
      "lv": "on bi patio"
    },
    "partizipVergangenheit": {
      "de": "gelitten",
      "lv": "patio"
    }
  },
  {
    "infinitiv": {
      "de": "leihen",
      "lv": "posuditi / uzajmiti"
    },
    "praesens": {
      "de": "er leiht",
      "lv": "on posudi / uzajmi"
    },
    "imperfektIndikativ": {
      "de": "er lieh",
      "lv": "on je posudio / uzajmio"
    },
    "imperfektKonjunktiv": {
      "de": "er liehe",
      "lv": "on bi posudio / uzajmio"
    },
    "partizipVergangenheit": {
      "de": "geliehen",
      "lv": "posuđen / uzajmljen"
    }
  },
  {
    "infinitiv": {
      "de": "lesen",
      "lv": "čitati"
    },
    "praesens": {
      "de": "er liest",
      "lv": "on čita"
    },
    "imperfektIndikativ": {
      "de": "er las",
      "lv": "on je čitao"
    },
    "imperfektKonjunktiv": {
      "de": "er läse",
      "lv": "on bi čitao"
    },
    "partizipVergangenheit": {
      "de": "gelesen",
      "lv": "čitan"
    }
  },
  {
    "infinitiv": {
      "de": "liegen",
      "lv": "ležati"
    },
    "praesens": {
      "de": "er liegt",
      "lv": "on leži"
    },
    "imperfektIndikativ": {
      "de": "er lag",
      "lv": "on je ležao"
    },
    "imperfektKonjunktiv": {
      "de": "er läge",
      "lv": "on bi ležao"
    },
    "partizipVergangenheit": {
      "de": "gelegen",
      "lv": "ležao"
    }
  },
  {
    "infinitiv": {
      "de": "lügen",
      "lv": "lagati"
    },
    "praesens": {
      "de": "er lügt",
      "lv": "on laže"
    },
    "imperfektIndikativ": {
      "de": "er log",
      "lv": "on je lagao"
    },
    "imperfektKonjunktiv": {
      "de": "er löge",
      "lv": "on bi lagao"
    },
    "partizipVergangenheit": {
      "de": "gelogen",
      "lv": "lagao"
    }
  },
  {
    "infinitiv": {
      "de": "mahlen",
      "lv": "mljeti"
    },
    "praesens": {
      "de": "er mahlt",
      "lv": "on melje"
    },
    "imperfektIndikativ": {
      "de": "er mahlte",
      "lv": "on je mlio"
    },
    "imperfektKonjunktiv": {
      "de": "er malte",
      "lv": "on bi mlio"
    },
    "partizipVergangenheit": {
      "de": "gemahlen",
      "lv": "mljeven"
    }
  },
  {
    "infinitiv": {
      "de": "meiden",
      "lv": "izbjegavati"
    },
    "praesens": {
      "de": "er meidet",
      "lv": "on izbjegava"
    },
    "imperfektIndikativ": {
      "de": "er mied",
      "lv": "on je izbjegavao"
    },
    "imperfektKonjunktiv": {
      "de": "er miede",
      "lv": "on bi izbjegavao"
    },
    "partizipVergangenheit": {
      "de": "gemieden",
      "lv": "izbjegavan"
    }
  },
  {
    "infinitiv": {
      "de": "melken",
      "lv": "musti"
    },
    "praesens": {
      "de": "er milkt / er melkt",
      "lv": "on muze"
    },
    "imperfektIndikativ": {
      "de": "er molk / er melkte",
      "lv": "on je muzao"
    },
    "imperfektKonjunktiv": {
      "de": "er mölke / er melkte",
      "lv": "on bi muzao"
    },
    "partizipVergangenheit": {
      "de": "gemolken / gemelkt",
      "lv": "muzen"
    }
  },
  {
    "infinitiv": {
      "de": "messen",
      "lv": "mjeriti"
    },
    "praesens": {
      "de": "er misst",
      "lv": "on mjeri"
    },
    "imperfektIndikativ": {
      "de": "er mass",
      "lv": "on je mjerio"
    },
    "imperfektKonjunktiv": {
      "de": "er mäße",
      "lv": "on bi mjerio"
    },
    "partizipVergangenheit": {
      "de": "gemessen",
      "lv": "mjeren"
    }
  },
  {
    "infinitiv": {
      "de": "misslingen",
      "lv": "propasti"
    },
    "praesens": {
      "de": "es misslingt",
      "lv": "ono propadne"
    },
    "imperfektIndikativ": {
      "de": "misslang",
      "lv": "ono je propalo"
    },
    "imperfektKonjunktiv": {
      "de": "misslang",
      "lv": "ono bi propalo"
    },
    "partizipVergangenheit": {
      "de": "misslungen",
      "lv": "propao"
    }
  },
  {
    "infinitiv": {
      "de": "mögen",
      "lv": "voljeti"
    },
    "praesens": {
      "de": "er mag",
      "lv": "on voli"
    },
    "imperfektIndikativ": {
      "de": "mochte",
      "lv": "on je volio"
    },
    "imperfektKonjunktiv": {
      "de": "mochte",
      "lv": "on bi volio"
    },
    "partizipVergangenheit": {
      "de": "gemocht",
      "lv": "voljen"
    }
  },
  {
    "infinitiv": {
      "de": "müssen",
      "lv": "morati"
    },
    "praesens": {
      "de": "er muss",
      "lv": "on mora"
    },
    "imperfektIndikativ": {
      "de": "musste",
      "lv": "on je morao"
    },
    "imperfektKonjunktiv": {
      "de": "musste",
      "lv": "on bi morao"
    },
    "partizipVergangenheit": {
      "de": "gemusst",
      "lv": "morao"
    }
  },
  {
    "infinitiv": {
      "de": "nehmen",
      "lv": "uzeti"
    },
    "praesens": {
      "de": "er nimmt",
      "lv": "on uzme"
    },
    "imperfektIndikativ": {
      "de": "er nahm",
      "lv": "on je uzeo"
    },
    "imperfektKonjunktiv": {
      "de": "er nähme",
      "lv": "on bi uzeo"
    },
    "partizipVergangenheit": {
      "de": "genommen",
      "lv": "uzet"
    }
  },
  {
    "infinitiv": {
      "de": "nennen",
      "lv": "nazvati"
    },
    "praesens": {
      "de": "er nennt",
      "lv": "on nazove"
    },
    "imperfektIndikativ": {
      "de": "er nannte",
      "lv": "on je nazvao"
    },
    "imperfektKonjunktiv": {
      "de": "er nennte",
      "lv": "on bi nazvao"
    },
    "partizipVergangenheit": {
      "de": "genannt",
      "lv": "nazvan"
    }
  },
  {
    "infinitiv": {
      "de": "pfeifen",
      "lv": "zviždati"
    },
    "praesens": {
      "de": "er pfeift",
      "lv": "on zviždi"
    },
    "imperfektIndikativ": {
      "de": "er pfiff",
      "lv": "on je zviždao"
    },
    "imperfektKonjunktiv": {
      "de": "er pfiffe",
      "lv": "on bi zviždao"
    },
    "partizipVergangenheit": {
      "de": "gepfiffen",
      "lv": "zviždao"
    }
  },
  {
    "infinitiv": {
      "de": "pflegen",
      "lv": "njegovati"
    },
    "praesens": {
      "de": "er pflegt",
      "lv": "on njeguje"
    },
    "imperfektIndikativ": {
      "de": "pflegte / pflog",
      "lv": "on je njegovao"
    },
    "imperfektKonjunktiv": {
      "de": "pflegte / pflog",
      "lv": "on bi njegovao"
    },
    "partizipVergangenheit": {
      "de": "gepflegt / gepflogen",
      "lv": "njegovan"
    }
  },
  {
    "infinitiv": {
      "de": "preisen",
      "lv": "hvaliti"
    },
    "praesens": {
      "de": "er preist",
      "lv": "on hvali"
    },
    "imperfektIndikativ": {
      "de": "er pries",
      "lv": "on je hvalio"
    },
    "imperfektKonjunktiv": {
      "de": "er priese",
      "lv": "on bi hvalio"
    },
    "partizipVergangenheit": {
      "de": "gepriesen",
      "lv": "hvaljen"
    }
  },
  {
    "infinitiv": {
      "de": "quellen",
      "lv": "bubriti"
    },
    "praesens": {
      "de": "er quillt",
      "lv": "on bubri"
    },
    "imperfektIndikativ": {
      "de": "er quoll",
      "lv": "on je bubrio"
    },
    "imperfektKonjunktiv": {
      "de": "er quölle",
      "lv": "on bi bubrio"
    },
    "partizipVergangenheit": {
      "de": "gequollen (er ist)",
      "lv": "bubrio"
    }
  },
  {
    "infinitiv": {
      "de": "raten",
      "lv": "savjetovati / pogađati"
    },
    "praesens": {
      "de": "er rät",
      "lv": "on savjetuje / pogađa"
    },
    "imperfektIndikativ": {
      "de": "er riet",
      "lv": "on je savjetovao / pogađao"
    },
    "imperfektKonjunktiv": {
      "de": "er riete",
      "lv": "on bi savjetovao / pogađao"
    },
    "partizipVergangenheit": {
      "de": "geraten",
      "lv": "savjetovan / pogađan"
    }
  },
  {
    "infinitiv": {
      "de": "reiben",
      "lv": "trljati"
    },
    "praesens": {
      "de": "er reibt",
      "lv": "on trlja"
    },
    "imperfektIndikativ": {
      "de": "er rieb",
      "lv": "on je trljao"
    },
    "imperfektKonjunktiv": {
      "de": "er riebe",
      "lv": "on bi trljao"
    },
    "partizipVergangenheit": {
      "de": "gerieben",
      "lv": "trljan"
    }
  },
  {
    "infinitiv": {
      "de": "reißen",
      "lv": "kidati"
    },
    "praesens": {
      "de": "er reißt",
      "lv": "on kida"
    },
    "imperfektIndikativ": {
      "de": "er riss",
      "lv": "on je kidao"
    },
    "imperfektKonjunktiv": {
      "de": "er risse",
      "lv": "on bi kidao"
    },
    "partizipVergangenheit": {
      "de": "gerissen",
      "lv": "kidan"
    }
  },
  {
    "infinitiv": {
      "de": "reiten",
      "lv": "jahati"
    },
    "praesens": {
      "de": "er reitet",
      "lv": "on jaše"
    },
    "imperfektIndikativ": {
      "de": "er ritt",
      "lv": "on je jahao"
    },
    "imperfektKonjunktiv": {
      "de": "er ritte",
      "lv": "on bi jahao"
    },
    "partizipVergangenheit": {
      "de": "geritten (er ist)",
      "lv": "jahao"
    }
  },
  {
    "infinitiv": {
      "de": "rennen",
      "lv": "trčati"
    },
    "praesens": {
      "de": "er rennt",
      "lv": "on trči"
    },
    "imperfektIndikativ": {
      "de": "er rannte",
      "lv": "on je trčao"
    },
    "imperfektKonjunktiv": {
      "de": "er rennte",
      "lv": "on bi trčao"
    },
    "partizipVergangenheit": {
      "de": "gerannt",
      "lv": "trčao"
    }
  },
  {
    "infinitiv": {
      "de": "riechen",
      "lv": "mirisati"
    },
    "praesens": {
      "de": "er riecht",
      "lv": "on miriše"
    },
    "imperfektIndikativ": {
      "de": "er roch",
      "lv": "on je mirisao"
    },
    "imperfektKonjunktiv": {
      "de": "er röche",
      "lv": "on bi mirisao"
    },
    "partizipVergangenheit": {
      "de": "gerochen",
      "lv": "mirisao"
    }
  },
  {
    "infinitiv": {
      "de": "ringen",
      "lv": "hrvati se"
    },
    "praesens": {
      "de": "er ringt",
      "lv": "on se hrva"
    },
    "imperfektIndikativ": {
      "de": "er rang",
      "lv": "on se hrvao"
    },
    "imperfektKonjunktiv": {
      "de": "er ränge",
      "lv": "on bi se hrvao"
    },
    "partizipVergangenheit": {
      "de": "gerungen",
      "lv": "hrvao se"
    }
  },
  {
    "infinitiv": {
      "de": "rinnen",
      "lv": "teći"
    },
    "praesens": {
      "de": "er rinnt",
      "lv": "on teče"
    },
    "imperfektIndikativ": {
      "de": "er rann",
      "lv": "on je tekao"
    },
    "imperfektKonjunktiv": {
      "de": "er ränne / er rönne",
      "lv": "on bi tekao"
    },
    "partizipVergangenheit": {
      "de": "geronnen (er ist)",
      "lv": "tekao"
    }
  },
  {
    "infinitiv": {
      "de": "rufen",
      "lv": "zvati"
    },
    "praesens": {
      "de": "er ruft",
      "lv": "on zove"
    },
    "imperfektIndikativ": {
      "de": "er rief",
      "lv": "on je zvao"
    },
    "imperfektKonjunktiv": {
      "de": "er riefe",
      "lv": "on bi zvao"
    },
    "partizipVergangenheit": {
      "de": "gerufen",
      "lv": "zvan"
    }
  },
  {
    "infinitiv": {
      "de": "salzen",
      "lv": "soliti"
    },
    "praesens": {
      "de": "er salzt",
      "lv": "on soli"
    },
    "imperfektIndikativ": {
      "de": "er salzte",
      "lv": "on je solio"
    },
    "imperfektKonjunktiv": {
      "de": "er salzte",
      "lv": "on bi solio"
    },
    "partizipVergangenheit": {
      "de": "gesalzen",
      "lv": "soljen"
    }
  },
  {
    "infinitiv": {
      "de": "saufen",
      "lv": "lokati / piti"
    },
    "praesens": {
      "de": "er säuft",
      "lv": "on loče / pije"
    },
    "imperfektIndikativ": {
      "de": "er soff",
      "lv": "on je lokao / pio"
    },
    "imperfektKonjunktiv": {
      "de": "er söffe",
      "lv": "on bi lokao / pio"
    },
    "partizipVergangenheit": {
      "de": "gesoffen",
      "lv": "lokan / pijen"
    }
  },
  {
    "infinitiv": {
      "de": "saugen",
      "lv": "sisati"
    },
    "praesens": {
      "de": "er saugt",
      "lv": "on siše"
    },
    "imperfektIndikativ": {
      "de": "er sog",
      "lv": "on je sisao"
    },
    "imperfektKonjunktiv": {
      "de": "er söge",
      "lv": "on bi sisao"
    },
    "partizipVergangenheit": {
      "de": "gesogen",
      "lv": "sisan"
    }
  },
  {
    "infinitiv": {
      "de": "schaffen",
      "lv": "stvoriti"
    },
    "praesens": {
      "de": "er schafft",
      "lv": "on stvori"
    },
    "imperfektIndikativ": {
      "de": "er schuf",
      "lv": "on je stvorio"
    },
    "imperfektKonjunktiv": {
      "de": "er schüfe",
      "lv": "on bi stvorio"
    },
    "partizipVergangenheit": {
      "de": "geschaffen",
      "lv": "stvoren"
    }
  },
  {
    "infinitiv": {
      "de": "schallen",
      "lv": "zvučati"
    },
    "praesens": {
      "de": "es schallt",
      "lv": "ono zvuči"
    },
    "imperfektIndikativ": {
      "de": "schallte / scholl",
      "lv": "ono je zvučalo"
    },
    "imperfektKonjunktiv": {
      "de": "schallte / scholl",
      "lv": "ono bi zvučalo"
    },
    "partizipVergangenheit": {
      "de": "geschallt",
      "lv": "zvučao"
    }
  },
  {
    "infinitiv": {
      "de": "scheiden",
      "lv": "razdvojiti / razvesti se"
    },
    "praesens": {
      "de": "er scheidet",
      "lv": "on razdvoji / se razvede"
    },
    "imperfektIndikativ": {
      "de": "er schied",
      "lv": "on je razdvojio / se razveo"
    },
    "imperfektKonjunktiv": {
      "de": "er schiede",
      "lv": "on bi razdvojio / se razveo"
    },
    "partizipVergangenheit": {
      "de": "geschieden (er hat / er ist)",
      "lv": "razdvojen / razveo se"
    }
  },
  {
    "infinitiv": {
      "de": "scheinen",
      "lv": "sijati / izgledati"
    },
    "praesens": {
      "de": "er scheint",
      "lv": "on sija / izgleda"
    },
    "imperfektIndikativ": {
      "de": "er schien",
      "lv": "on je sijao / izgledao"
    },
    "imperfektKonjunktiv": {
      "de": "er schiene",
      "lv": "on bi sijao / izgledao"
    },
    "partizipVergangenheit": {
      "de": "geschienen",
      "lv": "sijao / izgledao"
    }
  },
  {
    "infinitiv": {
      "de": "schelten",
      "lv": "grditi"
    },
    "praesens": {
      "de": "er schilt",
      "lv": "on grdi"
    },
    "imperfektIndikativ": {
      "de": "er schalt",
      "lv": "on je grdio"
    },
    "imperfektKonjunktiv": {
      "de": "er schölte / er schälte",
      "lv": "on bi grdio"
    },
    "partizipVergangenheit": {
      "de": "gescholten",
      "lv": "grđen"
    }
  },
  {
    "infinitiv": {
      "de": "scheren",
      "lv": "šišati"
    },
    "praesens": {
      "de": "er schert",
      "lv": "on šiša"
    },
    "imperfektIndikativ": {
      "de": "schor / scherte",
      "lv": "on je šišao"
    },
    "imperfektKonjunktiv": {
      "de": "schor / scherte",
      "lv": "on bi šišao"
    },
    "partizipVergangenheit": {
      "de": "geschoren / geschert",
      "lv": "šišan"
    }
  },
  {
    "infinitiv": {
      "de": "schieben",
      "lv": "gurati"
    },
    "praesens": {
      "de": "er schiebt",
      "lv": "on gura"
    },
    "imperfektIndikativ": {
      "de": "er schob",
      "lv": "on je gurao"
    },
    "imperfektKonjunktiv": {
      "de": "er schöbe",
      "lv": "on bi gurao"
    },
    "partizipVergangenheit": {
      "de": "geschoben",
      "lv": "guran"
    }
  },
  {
    "infinitiv": {
      "de": "schießen",
      "lv": "pucati"
    },
    "praesens": {
      "de": "er schießt",
      "lv": "on puca"
    },
    "imperfektIndikativ": {
      "de": "er schoss",
      "lv": "on je pucao"
    },
    "imperfektKonjunktiv": {
      "de": "er schösse",
      "lv": "on bi pucao"
    },
    "partizipVergangenheit": {
      "de": "geschossen",
      "lv": "pucao"
    }
  },
  {
    "infinitiv": {
      "de": "schinden",
      "lv": "mučiti"
    },
    "praesens": {
      "de": "er schindet",
      "lv": "on muči"
    },
    "imperfektIndikativ": {
      "de": "schindete",
      "lv": "on je mučio"
    },
    "imperfektKonjunktiv": {
      "de": "schindete",
      "lv": "on bi mučio"
    },
    "partizipVergangenheit": {
      "de": "geschunden",
      "lv": "mučen"
    }
  },
  {
    "infinitiv": {
      "de": "schlafen",
      "lv": "spavati"
    },
    "praesens": {
      "de": "er schläft",
      "lv": "on spava"
    },
    "imperfektIndikativ": {
      "de": "er schlief",
      "lv": "on je spavao"
    },
    "imperfektKonjunktiv": {
      "de": "er schliefe",
      "lv": "on bi spavao"
    },
    "partizipVergangenheit": {
      "de": "geschlafen",
      "lv": "spavao"
    }
  },
  {
    "infinitiv": {
      "de": "schlagen",
      "lv": "udariti"
    },
    "praesens": {
      "de": "er schlägt",
      "lv": "on udari"
    },
    "imperfektIndikativ": {
      "de": "er schlug",
      "lv": "on je udario"
    },
    "imperfektKonjunktiv": {
      "de": "er schlüge",
      "lv": "on bi udario"
    },
    "partizipVergangenheit": {
      "de": "geschlagen",
      "lv": "udaren"
    }
  },
  {
    "infinitiv": {
      "de": "schleichen",
      "lv": "šuljati se"
    },
    "praesens": {
      "de": "er schleicht",
      "lv": "on se šulja"
    },
    "imperfektIndikativ": {
      "de": "er schlich",
      "lv": "on se šuljao"
    },
    "imperfektKonjunktiv": {
      "de": "er schliche",
      "lv": "on bi se šuljao"
    },
    "partizipVergangenheit": {
      "de": "geschlichen (er ist)",
      "lv": "šuljao se"
    }
  },
  {
    "infinitiv": {
      "de": "schleifen",
      "lv": "brusiti"
    },
    "praesens": {
      "de": "er schleift",
      "lv": "on brusi"
    },
    "imperfektIndikativ": {
      "de": "er schliff",
      "lv": "on je brusio"
    },
    "imperfektKonjunktiv": {
      "de": "er schliffe",
      "lv": "on bi brusio"
    },
    "partizipVergangenheit": {
      "de": "geschliffen",
      "lv": "brušen"
    }
  },
  {
    "infinitiv": {
      "de": "schließen",
      "lv": "zatvoriti"
    },
    "praesens": {
      "de": "er schließt",
      "lv": "on zatvori"
    },
    "imperfektIndikativ": {
      "de": "er schloss",
      "lv": "on je zatvorio"
    },
    "imperfektKonjunktiv": {
      "de": "er schlösse",
      "lv": "on bi zatvorio"
    },
    "partizipVergangenheit": {
      "de": "geschlossen",
      "lv": "zatvoren"
    }
  },
  {
    "infinitiv": {
      "de": "schlingen",
      "lv": "gutati"
    },
    "praesens": {
      "de": "er schlingt",
      "lv": "on guta"
    },
    "imperfektIndikativ": {
      "de": "er schlang",
      "lv": "on je gutao"
    },
    "imperfektKonjunktiv": {
      "de": "er schlänge",
      "lv": "on bi gutao"
    },
    "partizipVergangenheit": {
      "de": "geschlungen",
      "lv": "progutan"
    }
  },
  {
    "infinitiv": {
      "de": "schmeißen",
      "lv": "baciti"
    },
    "praesens": {
      "de": "er schmeißt",
      "lv": "on baci"
    },
    "imperfektIndikativ": {
      "de": "er schmiss",
      "lv": "on je bacio"
    },
    "imperfektKonjunktiv": {
      "de": "er schmisse",
      "lv": "on bi bacio"
    },
    "partizipVergangenheit": {
      "de": "geschmissen",
      "lv": "bačen"
    }
  },
  {
    "infinitiv": {
      "de": "schmelzen",
      "lv": "topiti se"
    },
    "praesens": {
      "de": "er schmilzt",
      "lv": "on se topi"
    },
    "imperfektIndikativ": {
      "de": "er schmolz",
      "lv": "on se topio"
    },
    "imperfektKonjunktiv": {
      "de": "er schmölze",
      "lv": "on bi se topio"
    },
    "partizipVergangenheit": {
      "de": "geschmolzen (er ist)",
      "lv": "topio se"
    }
  },
  {
    "infinitiv": {
      "de": "schnauben",
      "lv": "frktati"
    },
    "praesens": {
      "de": "er schnaubt",
      "lv": "on frkće"
    },
    "imperfektIndikativ": {
      "de": "schnaubte / schnob",
      "lv": "on je frktao"
    },
    "imperfektKonjunktiv": {
      "de": "schnaubte / schnob",
      "lv": "on bi frktao"
    },
    "partizipVergangenheit": {
      "de": "geschnaubt / geschnoben",
      "lv": "frktao"
    }
  },
  {
    "infinitiv": {
      "de": "schneiden",
      "lv": "rezati"
    },
    "praesens": {
      "de": "er schneidet",
      "lv": "on reže"
    },
    "imperfektIndikativ": {
      "de": "er schnitt",
      "lv": "on je rezao"
    },
    "imperfektKonjunktiv": {
      "de": "er schnitte",
      "lv": "on bi rezao"
    },
    "partizipVergangenheit": {
      "de": "geschnitten",
      "lv": "rezan"
    }
  },
  {
    "infinitiv": {
      "de": "schreiben",
      "lv": "pisati"
    },
    "praesens": {
      "de": "er schreibt",
      "lv": "on piše"
    },
    "imperfektIndikativ": {
      "de": "er schrieb",
      "lv": "on je pisao"
    },
    "imperfektKonjunktiv": {
      "de": "er schriebe",
      "lv": "on bi pisao"
    },
    "partizipVergangenheit": {
      "de": "geschrieben",
      "lv": "pisan"
    }
  },
  {
    "infinitiv": {
      "de": "schreien",
      "lv": "vikati"
    },
    "praesens": {
      "de": "er schreit",
      "lv": "on viče"
    },
    "imperfektIndikativ": {
      "de": "er schrie",
      "lv": "on je vikao"
    },
    "imperfektKonjunktiv": {
      "de": "er schriee",
      "lv": "on bi vikao"
    },
    "partizipVergangenheit": {
      "de": "geschrien",
      "lv": "vikao"
    }
  },
  {
    "infinitiv": {
      "de": "schreiten",
      "lv": "koračati"
    },
    "praesens": {
      "de": "er schreitet",
      "lv": "on korača"
    },
    "imperfektIndikativ": {
      "de": "er schritt",
      "lv": "on je koračao"
    },
    "imperfektKonjunktiv": {
      "de": "er schritte",
      "lv": "on bi koračao"
    },
    "partizipVergangenheit": {
      "de": "geschritten (er ist)",
      "lv": "koračao"
    }
  },
  {
    "infinitiv": {
      "de": "schweigen",
      "lv": "šutjeti"
    },
    "praesens": {
      "de": "er schweigt",
      "lv": "on šuti"
    },
    "imperfektIndikativ": {
      "de": "er schwieg",
      "lv": "on je šutio"
    },
    "imperfektKonjunktiv": {
      "de": "er schwiege",
      "lv": "on bi šutio"
    },
    "partizipVergangenheit": {
      "de": "geschwiegen",
      "lv": "šutio"
    }
  },
  {
    "infinitiv": {
      "de": "schwellen",
      "lv": "oticati"
    },
    "praesens": {
      "de": "er schwillt",
      "lv": "on otiče"
    },
    "imperfektIndikativ": {
      "de": "er schwoll",
      "lv": "on je oticao"
    },
    "imperfektKonjunktiv": {
      "de": "er schwölle",
      "lv": "on bi oticao"
    },
    "partizipVergangenheit": {
      "de": "geschwollen (er ist)",
      "lv": "oticao"
    }
  },
  {
    "infinitiv": {
      "de": "schwimmen",
      "lv": "plivati"
    },
    "praesens": {
      "de": "er schwimmt",
      "lv": "on pliva"
    },
    "imperfektIndikativ": {
      "de": "er schwamm",
      "lv": "on je plivao"
    },
    "imperfektKonjunktiv": {
      "de": "er schwömme / er schwämme",
      "lv": "on bi plivao"
    },
    "partizipVergangenheit": {
      "de": "geschwommen (er ist)",
      "lv": "plivao"
    }
  },
  {
    "infinitiv": {
      "de": "schwinden",
      "lv": "nestajati"
    },
    "praesens": {
      "de": "er schwindet",
      "lv": "on nestaje"
    },
    "imperfektIndikativ": {
      "de": "er schwand",
      "lv": "on je nestajao"
    },
    "imperfektKonjunktiv": {
      "de": "er schwände",
      "lv": "on bi nestajao"
    },
    "partizipVergangenheit": {
      "de": "geschwunden (er ist)",
      "lv": "nestajao"
    }
  },
  {
    "infinitiv": {
      "de": "schwingen",
      "lv": "mahati"
    },
    "praesens": {
      "de": "er schwingt",
      "lv": "on maše"
    },
    "imperfektIndikativ": {
      "de": "er schwang",
      "lv": "on je mahao"
    },
    "imperfektKonjunktiv": {
      "de": "er schwänge",
      "lv": "on bi mahao"
    },
    "partizipVergangenheit": {
      "de": "geschwungen",
      "lv": "mahao"
    }
  },
  {
    "infinitiv": {
      "de": "schwören",
      "lv": "zakleti se"
    },
    "praesens": {
      "de": "er schwört",
      "lv": "on se zakune"
    },
    "imperfektIndikativ": {
      "de": "er schwur / er schwor",
      "lv": "on se zakleo"
    },
    "imperfektKonjunktiv": {
      "de": "er schwöre",
      "lv": "on bi se zakleo"
    },
    "partizipVergangenheit": {
      "de": "geschworen",
      "lv": "zakleo se"
    }
  },
  {
    "infinitiv": {
      "de": "sehen",
      "lv": "vidjeti"
    },
    "praesens": {
      "de": "er sieht",
      "lv": "on vidi"
    },
    "imperfektIndikativ": {
      "de": "er sah",
      "lv": "on je vidio"
    },
    "imperfektKonjunktiv": {
      "de": "er sähe",
      "lv": "on bi vidio"
    },
    "partizipVergangenheit": {
      "de": "gesehen",
      "lv": "viđen"
    }
  },
  {
    "infinitiv": {
      "de": "sein",
      "lv": "biti"
    },
    "praesens": {
      "de": "er ist",
      "lv": "on je"
    },
    "imperfektIndikativ": {
      "de": "war",
      "lv": "on je bio"
    },
    "imperfektKonjunktiv": {
      "de": "war",
      "lv": "on bi bio"
    },
    "partizipVergangenheit": {
      "de": "gewesen",
      "lv": "bio"
    }
  },
  {
    "infinitiv": {
      "de": "senden",
      "lv": "poslati"
    },
    "praesens": {
      "de": "er sendet",
      "lv": "on pošalje"
    },
    "imperfektIndikativ": {
      "de": "er sandte / er sendete",
      "lv": "on je poslao"
    },
    "imperfektKonjunktiv": {
      "de": "er sendete",
      "lv": "on bi poslao"
    },
    "partizipVergangenheit": {
      "de": "gesandt / gesendet",
      "lv": "poslan"
    }
  },
  {
    "infinitiv": {
      "de": "sieden",
      "lv": "kuhati"
    },
    "praesens": {
      "de": "er siedet",
      "lv": "on kuha"
    },
    "imperfektIndikativ": {
      "de": "sott / siedete",
      "lv": "on je kuhao"
    },
    "imperfektKonjunktiv": {
      "de": "sott / siedete",
      "lv": "on bi kuhao"
    },
    "partizipVergangenheit": {
      "de": "gesotten / gesiedet",
      "lv": "kuhan"
    }
  },
  {
    "infinitiv": {
      "de": "singen",
      "lv": "pjevati"
    },
    "praesens": {
      "de": "er singt",
      "lv": "on pjeva"
    },
    "imperfektIndikativ": {
      "de": "er sang",
      "lv": "on je pjevao"
    },
    "imperfektKonjunktiv": {
      "de": "er sänge",
      "lv": "on bi pjevao"
    },
    "partizipVergangenheit": {
      "de": "gesungen",
      "lv": "pjevan"
    }
  },
  {
    "infinitiv": {
      "de": "sinken",
      "lv": "potonuti"
    },
    "praesens": {
      "de": "er sinkt",
      "lv": "on potone"
    },
    "imperfektIndikativ": {
      "de": "er sank",
      "lv": "on je potonuo"
    },
    "imperfektKonjunktiv": {
      "de": "er sänke",
      "lv": "on bi potonuo"
    },
    "partizipVergangenheit": {
      "de": "gesunken (er ist)",
      "lv": "potonuo"
    }
  },
  {
    "infinitiv": {
      "de": "sinnen",
      "lv": "razmišljati"
    },
    "praesens": {
      "de": "er sinnt",
      "lv": "on razmišlja"
    },
    "imperfektIndikativ": {
      "de": "er sann",
      "lv": "on je razmišljao"
    },
    "imperfektKonjunktiv": {
      "de": "er sönne / er sänne",
      "lv": "on bi razmišljao"
    },
    "partizipVergangenheit": {
      "de": "gesonnen",
      "lv": "razmišljao"
    }
  },
  {
    "infinitiv": {
      "de": "sitzen",
      "lv": "sjediti"
    },
    "praesens": {
      "de": "er sitzt",
      "lv": "on sjedi"
    },
    "imperfektIndikativ": {
      "de": "er sass",
      "lv": "on je sjedio"
    },
    "imperfektKonjunktiv": {
      "de": "er säße",
      "lv": "on bi sjedio"
    },
    "partizipVergangenheit": {
      "de": "gesessen",
      "lv": "sjedio"
    }
  },
  {
    "infinitiv": {
      "de": "sollen",
      "lv": "trebati / morati"
    },
    "praesens": {
      "de": "er soll",
      "lv": "on treba / mora"
    },
    "imperfektIndikativ": {
      "de": "sollte",
      "lv": "on je trebao / morao"
    },
    "imperfektKonjunktiv": {
      "de": "sollte",
      "lv": "on bi trebao / morao"
    },
    "partizipVergangenheit": {
      "de": "gesollt",
      "lv": "trebao / morao"
    }
  },
  {
    "infinitiv": {
      "de": "speien",
      "lv": "pljuvati"
    },
    "praesens": {
      "de": "er speit",
      "lv": "on pljuje"
    },
    "imperfektIndikativ": {
      "de": "er spie",
      "lv": "on je pljuvao"
    },
    "imperfektKonjunktiv": {
      "de": "er spie",
      "lv": "on bi pljuvao"
    },
    "partizipVergangenheit": {
      "de": "gespien",
      "lv": "popljuvan"
    }
  },
  {
    "infinitiv": {
      "de": "spinnen",
      "lv": "presti"
    },
    "praesens": {
      "de": "er spinnt",
      "lv": "on prede"
    },
    "imperfektIndikativ": {
      "de": "er spann",
      "lv": "on je preo"
    },
    "imperfektKonjunktiv": {
      "de": "er spönne / er spänne",
      "lv": "on bi preo"
    },
    "partizipVergangenheit": {
      "de": "gesponnen",
      "lv": "preden"
    }
  },
  {
    "infinitiv": {
      "de": "spleißen",
      "lv": "spajati"
    },
    "praesens": {
      "de": "er spleißt",
      "lv": "on spaja"
    },
    "imperfektIndikativ": {
      "de": "spliss",
      "lv": "on je spajao"
    },
    "imperfektKonjunktiv": {
      "de": "spliss",
      "lv": "on bi spajao"
    },
    "partizipVergangenheit": {
      "de": "gesplissen",
      "lv": "spajan"
    }
  },
  {
    "infinitiv": {
      "de": "sprechen",
      "lv": "govoriti"
    },
    "praesens": {
      "de": "er spricht",
      "lv": "on govori"
    },
    "imperfektIndikativ": {
      "de": "er sprach",
      "lv": "on je govorio"
    },
    "imperfektKonjunktiv": {
      "de": "er spräche",
      "lv": "on bi govorio"
    },
    "partizipVergangenheit": {
      "de": "gesprochen",
      "lv": "govoren"
    }
  },
  {
    "infinitiv": {
      "de": "sprießen",
      "lv": "niknuti"
    },
    "praesens": {
      "de": "er sprießt",
      "lv": "on nikne"
    },
    "imperfektIndikativ": {
      "de": "er spross",
      "lv": "on je niknuo"
    },
    "imperfektKonjunktiv": {
      "de": "er sprösse",
      "lv": "on bi niknuo"
    },
    "partizipVergangenheit": {
      "de": "gesprossen (er ist)",
      "lv": "niknuo"
    }
  },
  {
    "infinitiv": {
      "de": "springen",
      "lv": "skakati"
    },
    "praesens": {
      "de": "er springt",
      "lv": "on skače"
    },
    "imperfektIndikativ": {
      "de": "er sprang",
      "lv": "on je skakao"
    },
    "imperfektKonjunktiv": {
      "de": "er spränge",
      "lv": "on bi skakao"
    },
    "partizipVergangenheit": {
      "de": "gesprungen (er ist)",
      "lv": "skakao"
    }
  },
  {
    "infinitiv": {
      "de": "stechen",
      "lv": "bosti"
    },
    "praesens": {
      "de": "er sticht",
      "lv": "on bode"
    },
    "imperfektIndikativ": {
      "de": "er stach",
      "lv": "on je bo"
    },
    "imperfektKonjunktiv": {
      "de": "er stäche",
      "lv": "on bi bo"
    },
    "partizipVergangenheit": {
      "de": "gestochen",
      "lv": "boden"
    }
  },
  {
    "infinitiv": {
      "de": "stecken",
      "lv": "turati / utaknuti"
    },
    "praesens": {
      "de": "er steckt",
      "lv": "on tura / utakne"
    },
    "imperfektIndikativ": {
      "de": "stak / steckte",
      "lv": "on je turao / utaknuo"
    },
    "imperfektKonjunktiv": {
      "de": "stak / steckte",
      "lv": "on bi turao / utaknuo"
    },
    "partizipVergangenheit": {
      "de": "gesteckt",
      "lv": "turan / utaknut"
    }
  },
  {
    "infinitiv": {
      "de": "stehen",
      "lv": "stajati"
    },
    "praesens": {
      "de": "er steht",
      "lv": "on stoji"
    },
    "imperfektIndikativ": {
      "de": "er stand",
      "lv": "on je stajao"
    },
    "imperfektKonjunktiv": {
      "de": "er stände / er stünde",
      "lv": "on bi stajao"
    },
    "partizipVergangenheit": {
      "de": "gestanden",
      "lv": "stajao"
    }
  },
  {
    "infinitiv": {
      "de": "stehlen",
      "lv": "krasti"
    },
    "praesens": {
      "de": "er stiehlt",
      "lv": "on krade"
    },
    "imperfektIndikativ": {
      "de": "er stahl",
      "lv": "on je krao"
    },
    "imperfektKonjunktiv": {
      "de": "er stöhle / er stähle",
      "lv": "on bi krao"
    },
    "partizipVergangenheit": {
      "de": "gestohlen",
      "lv": "kraden"
    }
  },
  {
    "infinitiv": {
      "de": "steigen",
      "lv": "penjati se"
    },
    "praesens": {
      "de": "er steigt",
      "lv": "on se penje"
    },
    "imperfektIndikativ": {
      "de": "er stieg",
      "lv": "on se penjao"
    },
    "imperfektKonjunktiv": {
      "de": "er stiege",
      "lv": "on bi se penjao"
    },
    "partizipVergangenheit": {
      "de": "gestiegen (er ist)",
      "lv": "penjao se"
    }
  },
  {
    "infinitiv": {
      "de": "sterben",
      "lv": "umrijeti"
    },
    "praesens": {
      "de": "er stirbt",
      "lv": "on umre"
    },
    "imperfektIndikativ": {
      "de": "er starb",
      "lv": "on je umro"
    },
    "imperfektKonjunktiv": {
      "de": "er stürbe",
      "lv": "on bi umro"
    },
    "partizipVergangenheit": {
      "de": "gestorben (er ist)",
      "lv": "umro"
    }
  },
  {
    "infinitiv": {
      "de": "stinken",
      "lv": "smrdjeti"
    },
    "praesens": {
      "de": "es stinkt",
      "lv": "ono smrdi"
    },
    "imperfektIndikativ": {
      "de": "stank",
      "lv": "ono je smrdjelo"
    },
    "imperfektKonjunktiv": {
      "de": "stank",
      "lv": "ono bi smrdjelo"
    },
    "partizipVergangenheit": {
      "de": "gestunken",
      "lv": "smrdio"
    }
  },
  {
    "infinitiv": {
      "de": "stoßen",
      "lv": "gurnuti"
    },
    "praesens": {
      "de": "er stößt",
      "lv": "on gurne"
    },
    "imperfektIndikativ": {
      "de": "er stieß",
      "lv": "on je gurnuo"
    },
    "imperfektKonjunktiv": {
      "de": "er stieße",
      "lv": "on bi gurnuo"
    },
    "partizipVergangenheit": {
      "de": "gestoßen",
      "lv": "gurnut"
    }
  },
  {
    "infinitiv": {
      "de": "streichen",
      "lv": "bojiti / precrtavati"
    },
    "praesens": {
      "de": "er streicht",
      "lv": "on boji / precrtava"
    },
    "imperfektIndikativ": {
      "de": "er strich",
      "lv": "on je bojio / precrtavao"
    },
    "imperfektKonjunktiv": {
      "de": "er striche",
      "lv": "on bi bojio / precrtavao"
    },
    "partizipVergangenheit": {
      "de": "gestrichen",
      "lv": "bojen / precrtan"
    }
  },
  {
    "infinitiv": {
      "de": "streiten",
      "lv": "svađati se"
    },
    "praesens": {
      "de": "er streitet",
      "lv": "on se svađa"
    },
    "imperfektIndikativ": {
      "de": "er stritt",
      "lv": "on se svađao"
    },
    "imperfektKonjunktiv": {
      "de": "er stritte",
      "lv": "on bi se svađao"
    },
    "partizipVergangenheit": {
      "de": "gestritten",
      "lv": "svađao se"
    }
  },
  {
    "infinitiv": {
      "de": "tragen",
      "lv": "nositi"
    },
    "praesens": {
      "de": "er trägt",
      "lv": "on nosi"
    },
    "imperfektIndikativ": {
      "de": "er trug",
      "lv": "on je nosio"
    },
    "imperfektKonjunktiv": {
      "de": "er trüge",
      "lv": "on bi nosio"
    },
    "partizipVergangenheit": {
      "de": "getragen",
      "lv": "nošen"
    }
  },
  {
    "infinitiv": {
      "de": "treffen",
      "lv": "sresti"
    },
    "praesens": {
      "de": "er trifft",
      "lv": "on sretne"
    },
    "imperfektIndikativ": {
      "de": "er traf",
      "lv": "on je sreo"
    },
    "imperfektKonjunktiv": {
      "de": "er träfe",
      "lv": "on bi sreo"
    },
    "partizipVergangenheit": {
      "de": "getroffen",
      "lv": "sreo"
    }
  },
  {
    "infinitiv": {
      "de": "treiben",
      "lv": "tjerati"
    },
    "praesens": {
      "de": "er treibt",
      "lv": "on tjera"
    },
    "imperfektIndikativ": {
      "de": "er trieb",
      "lv": "on je tjerao"
    },
    "imperfektKonjunktiv": {
      "de": "er triebe",
      "lv": "on bi tjerao"
    },
    "partizipVergangenheit": {
      "de": "getrieben",
      "lv": "tjeran"
    }
  },
  {
    "infinitiv": {
      "de": "treten",
      "lv": "stupiti / ići"
    },
    "praesens": {
      "de": "er tritt",
      "lv": "on stupi / ide"
    },
    "imperfektIndikativ": {
      "de": "er trat",
      "lv": "on je stupio / išao"
    },
    "imperfektKonjunktiv": {
      "de": "er träte",
      "lv": "on bi stupio / išao"
    },
    "partizipVergangenheit": {
      "de": "getreten (er ist)",
      "lv": "stupio / išao"
    }
  },
  {
    "infinitiv": {
      "de": "trinken",
      "lv": "piti"
    },
    "praesens": {
      "de": "er trinkt",
      "lv": "on pije"
    },
    "imperfektIndikativ": {
      "de": "er trank",
      "lv": "on je pio"
    },
    "imperfektKonjunktiv": {
      "de": "er tränke",
      "lv": "on bi pio"
    },
    "partizipVergangenheit": {
      "de": "getrunken",
      "lv": "pijen"
    }
  },
  {
    "infinitiv": {
      "de": "trügen",
      "lv": "varati"
    },
    "praesens": {
      "de": "er trögt",
      "lv": "on vara"
    },
    "imperfektIndikativ": {
      "de": "er trog",
      "lv": "on je varao"
    },
    "imperfektKonjunktiv": {
      "de": "er tröge",
      "lv": "on bi varao"
    },
    "partizipVergangenheit": {
      "de": "getrogen",
      "lv": "varan"
    }
  },
  {
    "infinitiv": {
      "de": "tun",
      "lv": "raditi"
    },
    "praesens": {
      "de": "er tut",
      "lv": "on radi"
    },
    "imperfektIndikativ": {
      "de": "er tat",
      "lv": "on je radio"
    },
    "imperfektKonjunktiv": {
      "de": "er täte",
      "lv": "on bi radio"
    },
    "partizipVergangenheit": {
      "de": "getan",
      "lv": "rađen"
    }
  },
  {
    "infinitiv": {
      "de": "verderben",
      "lv": "pokvariti"
    },
    "praesens": {
      "de": "er verdirbt",
      "lv": "on pokvari"
    },
    "imperfektIndikativ": {
      "de": "er verdarb",
      "lv": "on je pokvario"
    },
    "imperfektKonjunktiv": {
      "de": "er verdürbe",
      "lv": "on bi pokvario"
    },
    "partizipVergangenheit": {
      "de": "verdorben",
      "lv": "pokvaren"
    }
  },
  {
    "infinitiv": {
      "de": "verdrießen",
      "lv": "ozlovoljiti"
    },
    "praesens": {
      "de": "er verdrießt",
      "lv": "on ozlovolji"
    },
    "imperfektIndikativ": {
      "de": "er verdross",
      "lv": "on je ozlovoljio"
    },
    "imperfektKonjunktiv": {
      "de": "er verdrösse",
      "lv": "on bi ozlovoljio"
    },
    "partizipVergangenheit": {
      "de": "verdrossen",
      "lv": "ozlovoljen"
    }
  },
  {
    "infinitiv": {
      "de": "vergessen",
      "lv": "zaboraviti"
    },
    "praesens": {
      "de": "er vergisst",
      "lv": "on zaboravi"
    },
    "imperfektIndikativ": {
      "de": "er vergass",
      "lv": "on je zaboravio"
    },
    "imperfektKonjunktiv": {
      "de": "er vergäße",
      "lv": "on bi zaboravio"
    },
    "partizipVergangenheit": {
      "de": "vergessen",
      "lv": "zaboravljen"
    }
  },
  {
    "infinitiv": {
      "de": "verlieren",
      "lv": "izgubiti"
    },
    "praesens": {
      "de": "er verliert",
      "lv": "on izgubi"
    },
    "imperfektIndikativ": {
      "de": "er verlor",
      "lv": "on je izgubio"
    },
    "imperfektKonjunktiv": {
      "de": "er verlöre",
      "lv": "on bi izgubio"
    },
    "partizipVergangenheit": {
      "de": "verloren",
      "lv": "izgubljen"
    }
  },
  {
    "infinitiv": {
      "de": "wachsen",
      "lv": "rasti"
    },
    "praesens": {
      "de": "er wächst",
      "lv": "on raste"
    },
    "imperfektIndikativ": {
      "de": "er wuchs",
      "lv": "on je rastao"
    },
    "imperfektKonjunktiv": {
      "de": "er wüchse",
      "lv": "on bi rastao"
    },
    "partizipVergangenheit": {
      "de": "gewachsen (er ist)",
      "lv": "rastao"
    }
  },
  {
    "infinitiv": {
      "de": "waschen",
      "lv": "prati"
    },
    "praesens": {
      "de": "er wäscht",
      "lv": "on pere"
    },
    "imperfektIndikativ": {
      "de": "er wusch",
      "lv": "on je prao"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsche",
      "lv": "on bi prao"
    },
    "partizipVergangenheit": {
      "de": "gewaschen",
      "lv": "pran"
    }
  },
  {
    "infinitiv": {
      "de": "weben",
      "lv": "tkati"
    },
    "praesens": {
      "de": "er webt",
      "lv": "on tka"
    },
    "imperfektIndikativ": {
      "de": "wob",
      "lv": "on je tkao"
    },
    "imperfektKonjunktiv": {
      "de": "wob",
      "lv": "on bi tkao"
    },
    "partizipVergangenheit": {
      "de": "gewoben",
      "lv": "tkan"
    }
  },
  {
    "infinitiv": {
      "de": "weichen",
      "lv": "povući se"
    },
    "praesens": {
      "de": "er weicht",
      "lv": "on se povuče"
    },
    "imperfektIndikativ": {
      "de": "er wich",
      "lv": "on se povukao"
    },
    "imperfektKonjunktiv": {
      "de": "er wiche",
      "lv": "on bi se povukao"
    },
    "partizipVergangenheit": {
      "de": "gewichen (er ist)",
      "lv": "povukao se"
    }
  },
  {
    "infinitiv": {
      "de": "weisen",
      "lv": "pokazivati"
    },
    "praesens": {
      "de": "er weist",
      "lv": "on pokazuje"
    },
    "imperfektIndikativ": {
      "de": "er wies",
      "lv": "on je pokazivao"
    },
    "imperfektKonjunktiv": {
      "de": "er wiese",
      "lv": "on bi pokazivao"
    },
    "partizipVergangenheit": {
      "de": "gewiesen",
      "lv": "pokazivan"
    }
  },
  {
    "infinitiv": {
      "de": "wenden",
      "lv": "okretati / preokrenuti"
    },
    "praesens": {
      "de": "er wendet",
      "lv": "on okreće / preokrene"
    },
    "imperfektIndikativ": {
      "de": "er wandte / es wendete",
      "lv": "on je okretao / preokrenuo"
    },
    "imperfektKonjunktiv": {
      "de": "er wendete",
      "lv": "on bi okretao / preokrenuo"
    },
    "partizipVergangenheit": {
      "de": "gewandt / gewendet",
      "lv": "okrenut / preokrenut"
    }
  },
  {
    "infinitiv": {
      "de": "werben",
      "lv": "prositi"
    },
    "praesens": {
      "de": "er wirbt",
      "lv": "on prosi"
    },
    "imperfektIndikativ": {
      "de": "er warb",
      "lv": "on je prosio"
    },
    "imperfektKonjunktiv": {
      "de": "er würbe",
      "lv": "on bi prosio"
    },
    "partizipVergangenheit": {
      "de": "geworben",
      "lv": "prošen"
    }
  },
  {
    "infinitiv": {
      "de": "werden",
      "lv": "postati"
    },
    "praesens": {
      "de": "er wird",
      "lv": "on postane"
    },
    "imperfektIndikativ": {
      "de": "wurde",
      "lv": "on je postao"
    },
    "imperfektKonjunktiv": {
      "de": "wurde",
      "lv": "on bi postao"
    },
    "partizipVergangenheit": {
      "de": "geworden",
      "lv": "postao"
    }
  },
  {
    "infinitiv": {
      "de": "werfen",
      "lv": "baciti"
    },
    "praesens": {
      "de": "er wirft",
      "lv": "on baci"
    },
    "imperfektIndikativ": {
      "de": "er warf",
      "lv": "on je bacio"
    },
    "imperfektKonjunktiv": {
      "de": "er würfe",
      "lv": "on bi bacio"
    },
    "partizipVergangenheit": {
      "de": "geworfen",
      "lv": "bačen"
    }
  },
  {
    "infinitiv": {
      "de": "wiegen",
      "lv": "vagati"
    },
    "praesens": {
      "de": "er wiegt",
      "lv": "on vaga"
    },
    "imperfektIndikativ": {
      "de": "er wog",
      "lv": "on je vagao"
    },
    "imperfektKonjunktiv": {
      "de": "er wöge",
      "lv": "on bi vagao"
    },
    "partizipVergangenheit": {
      "de": "gewogen",
      "lv": "vagan"
    }
  },
  {
    "infinitiv": {
      "de": "winden",
      "lv": "viti"
    },
    "praesens": {
      "de": "er windet",
      "lv": "on vije"
    },
    "imperfektIndikativ": {
      "de": "er wand",
      "lv": "on je vio"
    },
    "imperfektKonjunktiv": {
      "de": "er wände",
      "lv": "on bi vio"
    },
    "partizipVergangenheit": {
      "de": "gewunden",
      "lv": "vijen"
    }
  },
  {
    "infinitiv": {
      "de": "wissen",
      "lv": "znati"
    },
    "praesens": {
      "de": "er weiß",
      "lv": "on zna"
    },
    "imperfektIndikativ": {
      "de": "er wusste",
      "lv": "on je znao"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsste",
      "lv": "on bi znao"
    },
    "partizipVergangenheit": {
      "de": "gewusst",
      "lv": "znan"
    }
  },
  {
    "infinitiv": {
      "de": "wollen",
      "lv": "htjeti"
    },
    "praesens": {
      "de": "er will",
      "lv": "on hoće"
    },
    "imperfektIndikativ": {
      "de": "wollte",
      "lv": "on je htio"
    },
    "imperfektKonjunktiv": {
      "de": "wollte",
      "lv": "on bi htio"
    },
    "partizipVergangenheit": {
      "de": "gewollt",
      "lv": "htio"
    }
  },
  {
    "infinitiv": {
      "de": "wringen",
      "lv": "iscijediti / istisnuti"
    },
    "praesens": {
      "de": "er wringt",
      "lv": "on iscijedi / istisne"
    },
    "imperfektIndikativ": {
      "de": "wrang",
      "lv": "on je iscijedio / istisnuo"
    },
    "imperfektKonjunktiv": {
      "de": "wrang",
      "lv": "on bi iscijedio / istisnuo"
    },
    "partizipVergangenheit": {
      "de": "gewrungen",
      "lv": "iscijeđen / istisnut"
    }
  },
  {
    "infinitiv": {
      "de": "zeihen",
      "lv": "okriviti"
    },
    "praesens": {
      "de": "er zeiht",
      "lv": "on okrivi"
    },
    "imperfektIndikativ": {
      "de": "zieh",
      "lv": "on je okrivio"
    },
    "imperfektKonjunktiv": {
      "de": "zieh",
      "lv": "on bi okrivio"
    },
    "partizipVergangenheit": {
      "de": "geziehen",
      "lv": "okrivljen"
    }
  },
  {
    "infinitiv": {
      "de": "ziehen",
      "lv": "vući"
    },
    "praesens": {
      "de": "er zieht",
      "lv": "on vuče"
    },
    "imperfektIndikativ": {
      "de": "er zog",
      "lv": "on je vukao"
    },
    "imperfektKonjunktiv": {
      "de": "er zöge",
      "lv": "on bi vukao"
    },
    "partizipVergangenheit": {
      "de": "gezogen",
      "lv": "vučen"
    }
  },
  {
    "infinitiv": {
      "de": "zwingen",
      "lv": "prisiliti"
    },
    "praesens": {
      "de": "er zwingt",
      "lv": "on prisili"
    },
    "imperfektIndikativ": {
      "de": "er zwang",
      "lv": "on je prisilio"
    },
    "imperfektKonjunktiv": {
      "de": "er zwänge",
      "lv": "on bi prisilio"
    },
    "partizipVergangenheit": {
      "de": "gezwungen",
      "lv": "prisiljen"
    }
  },
  {
    "infinitiv": {
      "de": "empfangen",
      "lv": "primiti"
    },
    "praesens": {
      "de": "er empfängt",
      "lv": "on primi"
    },
    "imperfektIndikativ": {
      "de": "er empfing",
      "lv": "on je primio"
    },
    "imperfektKonjunktiv": {
      "de": "er empfinge",
      "lv": "on bi primio"
    },
    "partizipVergangenheit": {
      "de": "empfangen",
      "lv": "primljen"
    }
  },
  {
    "infinitiv": {
      "de": "erwägen",
      "lv": "razmotriti"
    },
    "praesens": {
      "de": "er erwägt",
      "lv": "on razmotri"
    },
    "imperfektIndikativ": {
      "de": "er erwog",
      "lv": "on je razmotrio"
    },
    "imperfektKonjunktiv": {
      "de": "er erwöge",
      "lv": "on bi razmotrio"
    },
    "partizipVergangenheit": {
      "de": "erwogen",
      "lv": "razmotren"
    }
  },
  {
    "infinitiv": {
      "de": "fechten",
      "lv": "boriti se"
    },
    "praesens": {
      "de": "er ficht",
      "lv": "on se bori"
    },
    "imperfektIndikativ": {
      "de": "er focht",
      "lv": "on se borio"
    },
    "imperfektKonjunktiv": {
      "de": "er föchte",
      "lv": "on bi se borio"
    },
    "partizipVergangenheit": {
      "de": "gefochten",
      "lv": "borio se"
    }
  },
  {
    "infinitiv": {
      "de": "flechten",
      "lv": "plesti"
    },
    "praesens": {
      "de": "er flicht",
      "lv": "on plete"
    },
    "imperfektIndikativ": {
      "de": "er flocht",
      "lv": "on je pleo"
    },
    "imperfektKonjunktiv": {
      "de": "er flöchte",
      "lv": "on bi pleo"
    },
    "partizipVergangenheit": {
      "de": "geflochten",
      "lv": "pleten"
    }
  },
  {
    "infinitiv": {
      "de": "hangen",
      "lv": "visiti"
    },
    "praesens": {
      "de": "er hängt",
      "lv": "on visi"
    },
    "imperfektIndikativ": {
      "de": "er hing",
      "lv": "on je visio"
    },
    "imperfektKonjunktiv": {
      "de": "er hinge",
      "lv": "on bi visio"
    },
    "partizipVergangenheit": {
      "de": "gehangen",
      "lv": "visio"
    }
  },
  {
    "infinitiv": {
      "de": "spalten",
      "lv": "rascijepiti"
    },
    "praesens": {
      "de": "er spaltet",
      "lv": "on rascijepi"
    },
    "imperfektIndikativ": {
      "de": "er spaltete",
      "lv": "on je rascijepio"
    },
    "imperfektKonjunktiv": {
      "de": "er spaltete",
      "lv": "on bi rascijepio"
    },
    "partizipVergangenheit": {
      "de": "gespalten",
      "lv": "rascijepljen"
    }
  },
  {
    "infinitiv": {
      "de": "verzeihen",
      "lv": "oprostiti"
    },
    "praesens": {
      "de": "er verzeiht",
      "lv": "on oprosti"
    },
    "imperfektIndikativ": {
      "de": "er verzieh",
      "lv": "on je oprostio"
    },
    "imperfektKonjunktiv": {
      "de": "er verziehe",
      "lv": "on bi oprostio"
    },
    "partizipVergangenheit": {
      "de": "verziehen",
      "lv": "oprošten"
    }
  }
];

window.VERB_ENTRIES = VERB_ENTRIES;

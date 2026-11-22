const VERB_ENTRIES = [
  {
    "infinitiv": {
      "de": "backen",
      "lv": "pjek"
    },
    "praesens": {
      "de": "er bäckt",
      "lv": "ai pjek"
    },
    "imperfektIndikativ": {
      "de": "er buk",
      "lv": "ai poqi"
    },
    "imperfektKonjunktiv": {
      "de": "er büke",
      "lv": "ai do të piqte"
    },
    "partizipVergangenheit": {
      "de": "gebacken",
      "lv": "pjekur"
    }
  },
  {
    "infinitiv": {
      "de": "befehlen",
      "lv": "urdhëroj"
    },
    "praesens": {
      "de": "er befiehlt",
      "lv": "ai urdhëron"
    },
    "imperfektIndikativ": {
      "de": "er befahl",
      "lv": "ai urdhëroi"
    },
    "imperfektKonjunktiv": {
      "de": "er beföhle",
      "lv": "ai do të urdhëronte"
    },
    "partizipVergangenheit": {
      "de": "befohlen",
      "lv": "urdhëruar"
    }
  },
  {
    "infinitiv": {
      "de": "beginnen",
      "lv": "filloj"
    },
    "praesens": {
      "de": "er beginnt",
      "lv": "ai fillon"
    },
    "imperfektIndikativ": {
      "de": "er begann",
      "lv": "ai filloi"
    },
    "imperfektKonjunktiv": {
      "de": "er begönne / er begänne",
      "lv": "ai do të fillonte"
    },
    "partizipVergangenheit": {
      "de": "begonnen",
      "lv": "filluar"
    }
  },
  {
    "infinitiv": {
      "de": "beißen",
      "lv": "kafshoj"
    },
    "praesens": {
      "de": "er beißt",
      "lv": "ai kafshon"
    },
    "imperfektIndikativ": {
      "de": "er biss",
      "lv": "ai kafshoi"
    },
    "imperfektKonjunktiv": {
      "de": "er bisse",
      "lv": "ai do të kafshonte"
    },
    "partizipVergangenheit": {
      "de": "gebissen",
      "lv": "kafshuar"
    }
  },
  {
    "infinitiv": {
      "de": "bergen",
      "lv": "shpëtoj / fsheh"
    },
    "praesens": {
      "de": "er birgt",
      "lv": "ai shpëton / fsheh"
    },
    "imperfektIndikativ": {
      "de": "er barg",
      "lv": "ai shpëtoi / fshehu"
    },
    "imperfektKonjunktiv": {
      "de": "er bürge / er bärge",
      "lv": "ai do të shpëtonte / do të fshihte"
    },
    "partizipVergangenheit": {
      "de": "geborgen",
      "lv": "shpëtuar / fshehur"
    }
  },
  {
    "infinitiv": {
      "de": "bersten",
      "lv": "plas"
    },
    "praesens": {
      "de": "er birst",
      "lv": "plas"
    },
    "imperfektIndikativ": {
      "de": "er barst / er borst",
      "lv": "plasi"
    },
    "imperfektKonjunktiv": {
      "de": "er bärste / er börste",
      "lv": "do të plaste"
    },
    "partizipVergangenheit": {
      "de": "geborsten (er ist)",
      "lv": "plasur"
    }
  },
  {
    "infinitiv": {
      "de": "bewegen",
      "lv": "nxit"
    },
    "praesens": {
      "de": "er bewegt",
      "lv": "ai nxit"
    },
    "imperfektIndikativ": {
      "de": "er bewog",
      "lv": "ai nxiti"
    },
    "imperfektKonjunktiv": {
      "de": "er bewöge",
      "lv": "ai do të nxiste"
    },
    "partizipVergangenheit": {
      "de": "bewogen",
      "lv": "nxitur"
    }
  },
  {
    "infinitiv": {
      "de": "biegen",
      "lv": "përkul"
    },
    "praesens": {
      "de": "er biegt",
      "lv": "ai përkul"
    },
    "imperfektIndikativ": {
      "de": "er bog",
      "lv": "ai përkuli"
    },
    "imperfektKonjunktiv": {
      "de": "er böge",
      "lv": "ai do të përkulte"
    },
    "partizipVergangenheit": {
      "de": "gebogen",
      "lv": "përkulur"
    }
  },
  {
    "infinitiv": {
      "de": "bieten",
      "lv": "ofroj"
    },
    "praesens": {
      "de": "er bietet",
      "lv": "ai ofron"
    },
    "imperfektIndikativ": {
      "de": "er bot",
      "lv": "ai ofroi"
    },
    "imperfektKonjunktiv": {
      "de": "er böte",
      "lv": "ai do të ofronte"
    },
    "partizipVergangenheit": {
      "de": "geboten",
      "lv": "ofruar"
    }
  },
  {
    "infinitiv": {
      "de": "binden",
      "lv": "lidh"
    },
    "praesens": {
      "de": "er bindet",
      "lv": "ai lidh"
    },
    "imperfektIndikativ": {
      "de": "er band",
      "lv": "ai lidhi"
    },
    "imperfektKonjunktiv": {
      "de": "er bände",
      "lv": "ai do të lidhte"
    },
    "partizipVergangenheit": {
      "de": "gebunden",
      "lv": "lidhur"
    }
  },
  {
    "infinitiv": {
      "de": "bitten",
      "lv": "lutem"
    },
    "praesens": {
      "de": "er bittet",
      "lv": "ai lutet"
    },
    "imperfektIndikativ": {
      "de": "er bat",
      "lv": "ai u lut"
    },
    "imperfektKonjunktiv": {
      "de": "er bäte",
      "lv": "ai do të lutej"
    },
    "partizipVergangenheit": {
      "de": "gebeten",
      "lv": "lutur"
    }
  },
  {
    "infinitiv": {
      "de": "blasen",
      "lv": "fryj"
    },
    "praesens": {
      "de": "er bläst",
      "lv": "ai fryn"
    },
    "imperfektIndikativ": {
      "de": "er blies",
      "lv": "ai fryu"
    },
    "imperfektKonjunktiv": {
      "de": "er bliese",
      "lv": "ai do të frynte"
    },
    "partizipVergangenheit": {
      "de": "geblasen",
      "lv": "fryrë"
    }
  },
  {
    "infinitiv": {
      "de": "gären",
      "lv": "fermentohet"
    },
    "praesens": {
      "de": "es gärt",
      "lv": "fermentohet"
    },
    "imperfektIndikativ": {
      "de": "es gor / es gärte",
      "lv": "u fermentua"
    },
    "imperfektKonjunktiv": {
      "de": "es göre / es gärte",
      "lv": "do të fermentohej"
    },
    "partizipVergangenheit": {
      "de": "gegoren / gegärt",
      "lv": "fermentuar"
    }
  },
  {
    "infinitiv": {
      "de": "gebären",
      "lv": "lind"
    },
    "praesens": {
      "de": "sie gebiert",
      "lv": "ajo lind"
    },
    "imperfektIndikativ": {
      "de": "sie gebar",
      "lv": "ajo lindi"
    },
    "imperfektKonjunktiv": {
      "de": "sie gebäre",
      "lv": "ajo do të lindte"
    },
    "partizipVergangenheit": {
      "de": "geboren",
      "lv": "lindur"
    }
  },
  {
    "infinitiv": {
      "de": "gelingen",
      "lv": "dal mbarë"
    },
    "praesens": {
      "de": "es gelingt",
      "lv": "del mbarë"
    },
    "imperfektIndikativ": {
      "de": "es gelang",
      "lv": "doli mbarë"
    },
    "imperfektKonjunktiv": {
      "de": "es gelänge",
      "lv": "do të dilte mbarë"
    },
    "partizipVergangenheit": {
      "de": "gelungen (es ist)",
      "lv": "dalë mbarë"
    }
  },
  {
    "infinitiv": {
      "de": "gelten",
      "lv": "vlej / jam në fuqi"
    },
    "praesens": {
      "de": "er gilt",
      "lv": "ai vlen / është në fuqi"
    },
    "imperfektIndikativ": {
      "de": "er galt",
      "lv": "ai vlejti / qe në fuqi"
    },
    "imperfektKonjunktiv": {
      "de": "er gölte / es gälte",
      "lv": "ai do të vlente / do të ishte në fuqi"
    },
    "partizipVergangenheit": {
      "de": "gegolten",
      "lv": "vlejtur / qenë në fuqi"
    }
  },
  {
    "infinitiv": {
      "de": "genesen",
      "lv": "shërohem"
    },
    "praesens": {
      "de": "er genest",
      "lv": "ai shërohet"
    },
    "imperfektIndikativ": {
      "de": "er genas",
      "lv": "ai u shërua"
    },
    "imperfektKonjunktiv": {
      "de": "er genäse",
      "lv": "ai do të shërohej"
    },
    "partizipVergangenheit": {
      "de": "genesen (er ist)",
      "lv": "shëruar"
    }
  },
  {
    "infinitiv": {
      "de": "genießen",
      "lv": "shijoj"
    },
    "praesens": {
      "de": "er genießt",
      "lv": "ai shijon"
    },
    "imperfektIndikativ": {
      "de": "er genoss",
      "lv": "ai shijoi"
    },
    "imperfektKonjunktiv": {
      "de": "er genösse",
      "lv": "ai do të shijonte"
    },
    "partizipVergangenheit": {
      "de": "genossen",
      "lv": "shijuar"
    }
  },
  {
    "infinitiv": {
      "de": "geschehen",
      "lv": "ndodh"
    },
    "praesens": {
      "de": "es geschieht",
      "lv": "ndodh"
    },
    "imperfektIndikativ": {
      "de": "es geschah",
      "lv": "ndodhi"
    },
    "imperfektKonjunktiv": {
      "de": "es geschähe",
      "lv": "do të ndodhte"
    },
    "partizipVergangenheit": {
      "de": "geschehen (es ist)",
      "lv": "ndodhur"
    }
  },
  {
    "infinitiv": {
      "de": "gießen",
      "lv": "derdh"
    },
    "praesens": {
      "de": "er gießt",
      "lv": "ai derdh"
    },
    "imperfektIndikativ": {
      "de": "er goss",
      "lv": "ai derdhi"
    },
    "imperfektKonjunktiv": {
      "de": "er gösse",
      "lv": "ai do të derdhte"
    },
    "partizipVergangenheit": {
      "de": "gegossen",
      "lv": "derdhur"
    }
  },
  {
    "infinitiv": {
      "de": "gleichen",
      "lv": "i ngjaj"
    },
    "praesens": {
      "de": "er gleicht",
      "lv": "ai i ngjan"
    },
    "imperfektIndikativ": {
      "de": "er glich",
      "lv": "ai i ngjau"
    },
    "imperfektKonjunktiv": {
      "de": "er gliche",
      "lv": "ai do t'i ngjante"
    },
    "partizipVergangenheit": {
      "de": "geglichen",
      "lv": "ngjarë"
    }
  },
  {
    "infinitiv": {
      "de": "gleiten",
      "lv": "rrëshqas"
    },
    "praesens": {
      "de": "er gleitet",
      "lv": "ai rrëshqet"
    },
    "imperfektIndikativ": {
      "de": "er glitt",
      "lv": "ai rrëshqiti"
    },
    "imperfektKonjunktiv": {
      "de": "er glitte",
      "lv": "ai do të rrëshqiste"
    },
    "partizipVergangenheit": {
      "de": "geglitten (er ist)",
      "lv": "rrëshqitur"
    }
  },
  {
    "infinitiv": {
      "de": "glimmen",
      "lv": "digjem pa flakë"
    },
    "praesens": {
      "de": "er glimmt",
      "lv": "digjet pa flakë"
    },
    "imperfektIndikativ": {
      "de": "er glimmte / glomm",
      "lv": "u dogj pa flakë"
    },
    "imperfektKonjunktiv": {
      "de": "er glimmte",
      "lv": "do të digjej pa flakë"
    },
    "partizipVergangenheit": {
      "de": "geglimmt / geglommen",
      "lv": "djegur pa flakë"
    }
  },
  {
    "infinitiv": {
      "de": "graben",
      "lv": "gërmoj"
    },
    "praesens": {
      "de": "er gräbt",
      "lv": "ai gërmon"
    },
    "imperfektIndikativ": {
      "de": "er grub",
      "lv": "ai gërmoi"
    },
    "imperfektKonjunktiv": {
      "de": "er grübe",
      "lv": "ai do të gërmonte"
    },
    "partizipVergangenheit": {
      "de": "gegraben",
      "lv": "gërmuar"
    }
  },
  {
    "infinitiv": {
      "de": "greifen",
      "lv": "kap"
    },
    "praesens": {
      "de": "er greift",
      "lv": "ai kap"
    },
    "imperfektIndikativ": {
      "de": "er griff",
      "lv": "ai kapi"
    },
    "imperfektKonjunktiv": {
      "de": "er griffe",
      "lv": "ai do të kapte"
    },
    "partizipVergangenheit": {
      "de": "gegriffen",
      "lv": "kapur"
    }
  },
  {
    "infinitiv": {
      "de": "hauen",
      "lv": "pres"
    },
    "praesens": {
      "de": "er haut",
      "lv": "ai pret"
    },
    "imperfektIndikativ": {
      "de": "er hieb",
      "lv": "ai preu"
    },
    "imperfektKonjunktiv": {
      "de": "er hiebe",
      "lv": "ai do të priste"
    },
    "partizipVergangenheit": {
      "de": "gehauen",
      "lv": "prerë"
    }
  },
  {
    "infinitiv": {
      "de": "heben",
      "lv": "ngre"
    },
    "praesens": {
      "de": "er hebt",
      "lv": "ai ngre"
    },
    "imperfektIndikativ": {
      "de": "er hob",
      "lv": "ai ngriti"
    },
    "imperfektKonjunktiv": {
      "de": "er höbe",
      "lv": "ai do të ngrinte"
    },
    "partizipVergangenheit": {
      "de": "gehoben",
      "lv": "ngritur"
    }
  },
  {
    "infinitiv": {
      "de": "kennen",
      "lv": "njoh / di"
    },
    "praesens": {
      "de": "er kennt",
      "lv": "ai njeh / di"
    },
    "imperfektIndikativ": {
      "de": "er kannte",
      "lv": "ai njohu / diti"
    },
    "imperfektKonjunktiv": {
      "de": "er kennte",
      "lv": "ai do të njihte / do të dinte"
    },
    "partizipVergangenheit": {
      "de": "gekannt",
      "lv": "njohur / ditur"
    }
  },
  {
    "infinitiv": {
      "de": "klingen",
      "lv": "tingëllon"
    },
    "praesens": {
      "de": "er klingt",
      "lv": "tingëllon"
    },
    "imperfektIndikativ": {
      "de": "er klang",
      "lv": "tingëlloi"
    },
    "imperfektKonjunktiv": {
      "de": "er klänge",
      "lv": "do të tingëllonte"
    },
    "partizipVergangenheit": {
      "de": "geklungen",
      "lv": "tingëlluar"
    }
  },
  {
    "infinitiv": {
      "de": "kneifen",
      "lv": "pickoj"
    },
    "praesens": {
      "de": "er kneift",
      "lv": "ai pickon"
    },
    "imperfektIndikativ": {
      "de": "er kniff",
      "lv": "ai pickoi"
    },
    "imperfektKonjunktiv": {
      "de": "er kniffe",
      "lv": "ai do të pickonte"
    },
    "partizipVergangenheit": {
      "de": "gekniffen",
      "lv": "pickuar"
    }
  },
  {
    "infinitiv": {
      "de": "bleiben",
      "lv": "qëndroj"
    },
    "praesens": {
      "de": "er bleibt",
      "lv": "ai qëndron"
    },
    "imperfektIndikativ": {
      "de": "er blieb",
      "lv": "ai qëndroi"
    },
    "imperfektKonjunktiv": {
      "de": "er bliebe",
      "lv": "ai do të qëndronte"
    },
    "partizipVergangenheit": {
      "de": "geblieben (er ist)",
      "lv": "qëndruar"
    }
  },
  {
    "infinitiv": {
      "de": "bleichen",
      "lv": "zbehem"
    },
    "praesens": {
      "de": "er bleicht",
      "lv": "zbehet"
    },
    "imperfektIndikativ": {
      "de": "er bleichte / er blich",
      "lv": "u zbeh"
    },
    "imperfektKonjunktiv": {
      "de": "er bleichte / er bliche",
      "lv": "do të zbehej"
    },
    "partizipVergangenheit": {
      "de": "geblichen",
      "lv": "zbehur"
    }
  },
  {
    "infinitiv": {
      "de": "braten",
      "lv": "skuq"
    },
    "praesens": {
      "de": "er brät",
      "lv": "ai skuq"
    },
    "imperfektIndikativ": {
      "de": "er briet",
      "lv": "ai skuqi"
    },
    "imperfektKonjunktiv": {
      "de": "er briete",
      "lv": "ai do të skuqte"
    },
    "partizipVergangenheit": {
      "de": "gebraten",
      "lv": "skuqur"
    }
  },
  {
    "infinitiv": {
      "de": "brechen",
      "lv": "thyej"
    },
    "praesens": {
      "de": "er bricht",
      "lv": "ai thyen"
    },
    "imperfektIndikativ": {
      "de": "er brach",
      "lv": "ai theu"
    },
    "imperfektKonjunktiv": {
      "de": "er bräche",
      "lv": "ai do të thyente"
    },
    "partizipVergangenheit": {
      "de": "gebrochen",
      "lv": "thyer"
    }
  },
  {
    "infinitiv": {
      "de": "brennen",
      "lv": "digjem"
    },
    "praesens": {
      "de": "er brennt",
      "lv": "digjet"
    },
    "imperfektIndikativ": {
      "de": "er brannte",
      "lv": "u dogj"
    },
    "imperfektKonjunktiv": {
      "de": "er brennte",
      "lv": "do të digjej"
    },
    "partizipVergangenheit": {
      "de": "gebrannt",
      "lv": "djegur"
    }
  },
  {
    "infinitiv": {
      "de": "bringen",
      "lv": "sjell"
    },
    "praesens": {
      "de": "er bringt",
      "lv": "ai sjell"
    },
    "imperfektIndikativ": {
      "de": "er brachte",
      "lv": "ai solli"
    },
    "imperfektKonjunktiv": {
      "de": "er brächte",
      "lv": "ai do të sillte"
    },
    "partizipVergangenheit": {
      "de": "gebracht",
      "lv": "sjellë"
    }
  },
  {
    "infinitiv": {
      "de": "denken",
      "lv": "mendoj"
    },
    "praesens": {
      "de": "er denkt",
      "lv": "ai mendon"
    },
    "imperfektIndikativ": {
      "de": "er dachte",
      "lv": "ai mendoi"
    },
    "imperfektKonjunktiv": {
      "de": "er dächte",
      "lv": "ai do të mendonte"
    },
    "partizipVergangenheit": {
      "de": "gedacht",
      "lv": "menduar"
    }
  },
  {
    "infinitiv": {
      "de": "dingen",
      "lv": "pajtoj / pajtohem"
    },
    "praesens": {
      "de": "er dingt",
      "lv": "ai pajton / pajtohet"
    },
    "imperfektIndikativ": {
      "de": "er dingte",
      "lv": "ai pajtoi / u pajtua"
    },
    "imperfektKonjunktiv": {
      "de": "er dingte",
      "lv": "ai do të pajtonte / do të pajtohej"
    },
    "partizipVergangenheit": {
      "de": "gedungen",
      "lv": "pajtuar / pajtuar"
    }
  },
  {
    "infinitiv": {
      "de": "dreschen",
      "lv": "shij"
    },
    "praesens": {
      "de": "er drischt",
      "lv": "ai shin"
    },
    "imperfektIndikativ": {
      "de": "er drasch / er drosch",
      "lv": "ai shiu"
    },
    "imperfektKonjunktiv": {
      "de": "er dräsche / er drösche",
      "lv": "ai do të shinte"
    },
    "partizipVergangenheit": {
      "de": "gedroschen",
      "lv": "shirë"
    }
  },
  {
    "infinitiv": {
      "de": "dringen",
      "lv": "depërtoj"
    },
    "praesens": {
      "de": "er dringt",
      "lv": "ai depërton"
    },
    "imperfektIndikativ": {
      "de": "er drang",
      "lv": "ai depërtoi"
    },
    "imperfektKonjunktiv": {
      "de": "er dränge",
      "lv": "ai do të depërtonte"
    },
    "partizipVergangenheit": {
      "de": "gedrungen (er ist)",
      "lv": "depërtuar"
    }
  },
  {
    "infinitiv": {
      "de": "dünken",
      "lv": "dukem"
    },
    "praesens": {
      "de": "es dünkt",
      "lv": "duket"
    },
    "imperfektIndikativ": {
      "de": "es dünkte / es deuchte",
      "lv": "u duk"
    },
    "imperfektKonjunktiv": {
      "de": "es dünkte / es deuchte",
      "lv": "do të dukej"
    },
    "partizipVergangenheit": {
      "de": "gedünkt",
      "lv": "dukur"
    }
  },
  {
    "infinitiv": {
      "de": "dürfen",
      "lv": "kam leje"
    },
    "praesens": {
      "de": "er darf",
      "lv": "ai ka leje"
    },
    "imperfektIndikativ": {
      "de": "er durfte",
      "lv": "ai pati leje"
    },
    "imperfektKonjunktiv": {
      "de": "er dürfte",
      "lv": "ai do të kishte leje"
    },
    "partizipVergangenheit": {
      "de": "gedurft",
      "lv": "pasur leje"
    }
  },
  {
    "infinitiv": {
      "de": "empfehlen",
      "lv": "rekomandoj"
    },
    "praesens": {
      "de": "er empfiehlt",
      "lv": "ai rekomandon"
    },
    "imperfektIndikativ": {
      "de": "er empfahl",
      "lv": "ai rekomandoi"
    },
    "imperfektKonjunktiv": {
      "de": "er empfähle / er empföhle",
      "lv": "ai do të rekomandonte"
    },
    "partizipVergangenheit": {
      "de": "empfohlen",
      "lv": "rekomanduar"
    }
  },
  {
    "infinitiv": {
      "de": "empfinden",
      "lv": "ndiej"
    },
    "praesens": {
      "de": "er empfindet",
      "lv": "ai ndien"
    },
    "imperfektIndikativ": {
      "de": "er empfand",
      "lv": "ai ndjeu"
    },
    "imperfektKonjunktiv": {
      "de": "er empfände",
      "lv": "ai do të ndiente"
    },
    "partizipVergangenheit": {
      "de": "empfunden",
      "lv": "ndier"
    }
  },
  {
    "infinitiv": {
      "de": "erlöschen",
      "lv": "shuhem"
    },
    "praesens": {
      "de": "er erlischt",
      "lv": "shuhet"
    },
    "imperfektIndikativ": {
      "de": "er erlosch",
      "lv": "u shua"
    },
    "imperfektKonjunktiv": {
      "de": "er erlösche",
      "lv": "do të shuhej"
    },
    "partizipVergangenheit": {
      "de": "erloschen (er ist)",
      "lv": "shuar"
    }
  },
  {
    "infinitiv": {
      "de": "erschrecken",
      "lv": "trembem"
    },
    "praesens": {
      "de": "er erschrickt",
      "lv": "ai trembet"
    },
    "imperfektIndikativ": {
      "de": "er erschrak",
      "lv": "ai u tremb"
    },
    "imperfektKonjunktiv": {
      "de": "er erschräke",
      "lv": "ai do të trembej"
    },
    "partizipVergangenheit": {
      "de": "erschrocken (er ist)",
      "lv": "trembur"
    }
  },
  {
    "infinitiv": {
      "de": "essen",
      "lv": "ha"
    },
    "praesens": {
      "de": "er isst",
      "lv": "ai ha"
    },
    "imperfektIndikativ": {
      "de": "er aß",
      "lv": "ai hëngri"
    },
    "imperfektKonjunktiv": {
      "de": "er äße",
      "lv": "ai do të hante"
    },
    "partizipVergangenheit": {
      "de": "gegessen",
      "lv": "ngrënë"
    }
  },
  {
    "infinitiv": {
      "de": "fahren",
      "lv": "udhëtoj"
    },
    "praesens": {
      "de": "er fährt",
      "lv": "ai udhëton"
    },
    "imperfektIndikativ": {
      "de": "er fuhr",
      "lv": "ai udhëtoi"
    },
    "imperfektKonjunktiv": {
      "de": "er führe",
      "lv": "ai do të udhëtonte"
    },
    "partizipVergangenheit": {
      "de": "gefahren (er ist)",
      "lv": "udhëtuar"
    }
  },
  {
    "infinitiv": {
      "de": "fallen",
      "lv": "bie"
    },
    "praesens": {
      "de": "er fällt",
      "lv": "ai bie"
    },
    "imperfektIndikativ": {
      "de": "er fiel",
      "lv": "ai ra"
    },
    "imperfektKonjunktiv": {
      "de": "er fiele",
      "lv": "ai do të binte"
    },
    "partizipVergangenheit": {
      "de": "gefallen (er ist)",
      "lv": "rënë"
    }
  },
  {
    "infinitiv": {
      "de": "fangen",
      "lv": "kap"
    },
    "praesens": {
      "de": "er fängt",
      "lv": "ai kap"
    },
    "imperfektIndikativ": {
      "de": "er fing",
      "lv": "ai kapi"
    },
    "imperfektKonjunktiv": {
      "de": "er finge",
      "lv": "ai do të kapte"
    },
    "partizipVergangenheit": {
      "de": "gefangen",
      "lv": "kapur"
    }
  },
  {
    "infinitiv": {
      "de": "finden",
      "lv": "gjej"
    },
    "praesens": {
      "de": "er findet",
      "lv": "ai gjen"
    },
    "imperfektIndikativ": {
      "de": "er fand",
      "lv": "ai gjeti"
    },
    "imperfektKonjunktiv": {
      "de": "er fände",
      "lv": "ai do të gjente"
    },
    "partizipVergangenheit": {
      "de": "gefunden",
      "lv": "gjetur"
    }
  },
  {
    "infinitiv": {
      "de": "fliegen",
      "lv": "fluturoj"
    },
    "praesens": {
      "de": "er fliegt",
      "lv": "ai fluturon"
    },
    "imperfektIndikativ": {
      "de": "er flog",
      "lv": "ai fluturoi"
    },
    "imperfektKonjunktiv": {
      "de": "er flöge",
      "lv": "ai do të fluturonte"
    },
    "partizipVergangenheit": {
      "de": "geflogen (er ist)",
      "lv": "fluturuar"
    }
  },
  {
    "infinitiv": {
      "de": "fliehen",
      "lv": "arratisem"
    },
    "praesens": {
      "de": "er flieht",
      "lv": "ai arratiset"
    },
    "imperfektIndikativ": {
      "de": "er floh",
      "lv": "ai u arratis"
    },
    "imperfektKonjunktiv": {
      "de": "er flöhe",
      "lv": "ai do të arratisej"
    },
    "partizipVergangenheit": {
      "de": "geflohen (er ist)",
      "lv": "arratisur"
    }
  },
  {
    "infinitiv": {
      "de": "fließen",
      "lv": "rrjedh"
    },
    "praesens": {
      "de": "er fließt",
      "lv": "rrjedh"
    },
    "imperfektIndikativ": {
      "de": "er floss",
      "lv": "rrodhi"
    },
    "imperfektKonjunktiv": {
      "de": "er flösse",
      "lv": "do të rridhte"
    },
    "partizipVergangenheit": {
      "de": "geflossen (er ist)",
      "lv": "rrjedhur"
    }
  },
  {
    "infinitiv": {
      "de": "fressen",
      "lv": "ha / gllabëroj"
    },
    "praesens": {
      "de": "er frisst",
      "lv": "ai ha / gllabëron"
    },
    "imperfektIndikativ": {
      "de": "er fraß",
      "lv": "ai hëngri / gllabëroi"
    },
    "imperfektKonjunktiv": {
      "de": "er fräße",
      "lv": "ai do të hante / do të gllabëronte"
    },
    "partizipVergangenheit": {
      "de": "gefressen",
      "lv": "ngrënë / gllabëruar"
    }
  },
  {
    "infinitiv": {
      "de": "frieren",
      "lv": "kam ftohtë"
    },
    "praesens": {
      "de": "er friert",
      "lv": "ai ka ftohtë"
    },
    "imperfektIndikativ": {
      "de": "er fror",
      "lv": "ai pati ftohtë"
    },
    "imperfektKonjunktiv": {
      "de": "er fröre",
      "lv": "ai do të kishte ftohtë"
    },
    "partizipVergangenheit": {
      "de": "gefroren",
      "lv": "pasur ftohtë"
    }
  },
  {
    "infinitiv": {
      "de": "geben",
      "lv": "jap"
    },
    "praesens": {
      "de": "er gibt",
      "lv": "ai jep"
    },
    "imperfektIndikativ": {
      "de": "er gab",
      "lv": "ai dha"
    },
    "imperfektKonjunktiv": {
      "de": "er gäbe",
      "lv": "ai do të jepte"
    },
    "partizipVergangenheit": {
      "de": "gegeben",
      "lv": "dhënë"
    }
  },
  {
    "infinitiv": {
      "de": "gedeihen",
      "lv": "rritem mirë"
    },
    "praesens": {
      "de": "er gedeiht",
      "lv": "ai rritet mirë"
    },
    "imperfektIndikativ": {
      "de": "er gedieh",
      "lv": "ai u rrit mirë"
    },
    "imperfektKonjunktiv": {
      "de": "er gediehe",
      "lv": "ai do të rritej mirë"
    },
    "partizipVergangenheit": {
      "de": "gediehen (er ist)",
      "lv": "rritur mirë"
    }
  },
  {
    "infinitiv": {
      "de": "gehen",
      "lv": "shkoj"
    },
    "praesens": {
      "de": "er geht",
      "lv": "ai shkon"
    },
    "imperfektIndikativ": {
      "de": "er ging",
      "lv": "ai shkoi"
    },
    "imperfektKonjunktiv": {
      "de": "er ginge",
      "lv": "ai do të shkonte"
    },
    "partizipVergangenheit": {
      "de": "gegangen (er ist)",
      "lv": "shkuar"
    }
  },
  {
    "infinitiv": {
      "de": "gewinnen",
      "lv": "fitoj"
    },
    "praesens": {
      "de": "er gewinnt",
      "lv": "ai fiton"
    },
    "imperfektIndikativ": {
      "de": "er gewann",
      "lv": "ai fitoi"
    },
    "imperfektKonjunktiv": {
      "de": "er gewönne / er gewänne",
      "lv": "ai do të fitonte"
    },
    "partizipVergangenheit": {
      "de": "gewonnen",
      "lv": "fituar"
    }
  },
  {
    "infinitiv": {
      "de": "haben",
      "lv": "kam"
    },
    "praesens": {
      "de": "er hat",
      "lv": "ai ka"
    },
    "imperfektIndikativ": {
      "de": "er hatte",
      "lv": "ai pati"
    },
    "imperfektKonjunktiv": {
      "de": "er hätte",
      "lv": "ai do të kishte"
    },
    "partizipVergangenheit": {
      "de": "gehabt",
      "lv": "pasur"
    }
  },
  {
    "infinitiv": {
      "de": "halten",
      "lv": "mbaj"
    },
    "praesens": {
      "de": "er hält",
      "lv": "ai mban"
    },
    "imperfektIndikativ": {
      "de": "er hielt",
      "lv": "ai mbajti"
    },
    "imperfektKonjunktiv": {
      "de": "er hielte",
      "lv": "ai do të mbante"
    },
    "partizipVergangenheit": {
      "de": "gehalten",
      "lv": "mbajtur"
    }
  },
  {
    "infinitiv": {
      "de": "heißen",
      "lv": "quaj / quhem"
    },
    "praesens": {
      "de": "er heißt",
      "lv": "ai quan / quhet"
    },
    "imperfektIndikativ": {
      "de": "er hieß",
      "lv": "ai quajti / u quajt"
    },
    "imperfektKonjunktiv": {
      "de": "er hieße",
      "lv": "ai do të quante / do të quhej"
    },
    "partizipVergangenheit": {
      "de": "geheißen",
      "lv": "quajtur / quajtur"
    }
  },
  {
    "infinitiv": {
      "de": "helfen",
      "lv": "ndihmoj"
    },
    "praesens": {
      "de": "er hilft",
      "lv": "ai ndihmon"
    },
    "imperfektIndikativ": {
      "de": "er half",
      "lv": "ai ndihmoi"
    },
    "imperfektKonjunktiv": {
      "de": "er hülfe / er hälfe",
      "lv": "ai do të ndihmonte"
    },
    "partizipVergangenheit": {
      "de": "geholfen",
      "lv": "ndihmuar"
    }
  },
  {
    "infinitiv": {
      "de": "kommen",
      "lv": "vij"
    },
    "praesens": {
      "de": "er kommt",
      "lv": "ai vjen"
    },
    "imperfektIndikativ": {
      "de": "er kam",
      "lv": "ai erdhi"
    },
    "imperfektKonjunktiv": {
      "de": "er käme",
      "lv": "ai do të vinte"
    },
    "partizipVergangenheit": {
      "de": "gekommen (er ist)",
      "lv": "ardhur"
    }
  },
  {
    "infinitiv": {
      "de": "können",
      "lv": "mund"
    },
    "praesens": {
      "de": "er kann",
      "lv": "ai mund"
    },
    "imperfektIndikativ": {
      "de": "er konnte",
      "lv": "ai mundi"
    },
    "imperfektKonjunktiv": {
      "de": "er könnte",
      "lv": "ai do të mundte"
    },
    "partizipVergangenheit": {
      "de": "gekonnt",
      "lv": "mundur"
    }
  },
  {
    "infinitiv": {
      "de": "kriechen",
      "lv": "zvarritem"
    },
    "praesens": {
      "de": "er kriecht",
      "lv": "ai zvarritet"
    },
    "imperfektIndikativ": {
      "de": "er kroch",
      "lv": "ai u zvarrit"
    },
    "imperfektKonjunktiv": {
      "de": "er kröche",
      "lv": "ai do të zvarritej"
    },
    "partizipVergangenheit": {
      "de": "gekrochen (er ist)",
      "lv": "zvarritur"
    }
  },
  {
    "infinitiv": {
      "de": "laden",
      "lv": "ngarkoj / ftoj"
    },
    "praesens": {
      "de": "er lädt",
      "lv": "ai ngarkon / fton"
    },
    "imperfektIndikativ": {
      "de": "er lud",
      "lv": "ai ngarkoi / ftoi"
    },
    "imperfektKonjunktiv": {
      "de": "er lüde",
      "lv": "ai do të ngarkonte / do të ftonte"
    },
    "partizipVergangenheit": {
      "de": "geladen",
      "lv": "ngarkuar / ftuar"
    }
  },
  {
    "infinitiv": {
      "de": "lassen",
      "lv": "bëj / lë"
    },
    "praesens": {
      "de": "er lässt",
      "lv": "ai bën / lë"
    },
    "imperfektIndikativ": {
      "de": "er ließ",
      "lv": "ai bëri / la"
    },
    "imperfektKonjunktiv": {
      "de": "er ließe",
      "lv": "ai do të bënte / do të linte"
    },
    "partizipVergangenheit": {
      "de": "gelassen",
      "lv": "bërë / lënë"
    }
  },
  {
    "infinitiv": {
      "de": "laufen",
      "lv": "vrapoj"
    },
    "praesens": {
      "de": "er läuft",
      "lv": "ai vrapon"
    },
    "imperfektIndikativ": {
      "de": "er lief",
      "lv": "ai vrapoi"
    },
    "imperfektKonjunktiv": {
      "de": "er liefe",
      "lv": "ai do të vraponte"
    },
    "partizipVergangenheit": {
      "de": "gelaufen (er ist)",
      "lv": "vrapuar"
    }
  },
  {
    "infinitiv": {
      "de": "leiden",
      "lv": "vuaj"
    },
    "praesens": {
      "de": "er leidet",
      "lv": "ai vuan"
    },
    "imperfektIndikativ": {
      "de": "er litt",
      "lv": "ai vuajti"
    },
    "imperfektKonjunktiv": {
      "de": "er litte",
      "lv": "ai do të vuante"
    },
    "partizipVergangenheit": {
      "de": "gelitten",
      "lv": "vuajtur"
    }
  },
  {
    "infinitiv": {
      "de": "leihen",
      "lv": "jap hua / marr hua"
    },
    "praesens": {
      "de": "er leiht",
      "lv": "ai jep hua / merr hua"
    },
    "imperfektIndikativ": {
      "de": "er lieh",
      "lv": "ai dha hua / mori hua"
    },
    "imperfektKonjunktiv": {
      "de": "er liehe",
      "lv": "ai do të jepte hua / do të merrte hua"
    },
    "partizipVergangenheit": {
      "de": "geliehen",
      "lv": "dhënë hua / marrë hua"
    }
  },
  {
    "infinitiv": {
      "de": "lesen",
      "lv": "lexoj"
    },
    "praesens": {
      "de": "er liest",
      "lv": "ai lexon"
    },
    "imperfektIndikativ": {
      "de": "er las",
      "lv": "ai lexoi"
    },
    "imperfektKonjunktiv": {
      "de": "er läse",
      "lv": "ai do të lexonte"
    },
    "partizipVergangenheit": {
      "de": "gelesen",
      "lv": "lexuar"
    }
  },
  {
    "infinitiv": {
      "de": "liegen",
      "lv": "rri shtrirë"
    },
    "praesens": {
      "de": "er liegt",
      "lv": "ai rri shtrirë"
    },
    "imperfektIndikativ": {
      "de": "er lag",
      "lv": "ai ndenji shtrirë"
    },
    "imperfektKonjunktiv": {
      "de": "er läge",
      "lv": "ai do të rrinte shtrirë"
    },
    "partizipVergangenheit": {
      "de": "gelegen",
      "lv": "ndenjur shtrirë"
    }
  },
  {
    "infinitiv": {
      "de": "lügen",
      "lv": "gënjej"
    },
    "praesens": {
      "de": "er lügt",
      "lv": "ai gënjen"
    },
    "imperfektIndikativ": {
      "de": "er log",
      "lv": "ai gënjeu"
    },
    "imperfektKonjunktiv": {
      "de": "er löge",
      "lv": "ai do të gënjente"
    },
    "partizipVergangenheit": {
      "de": "gelogen",
      "lv": "gënjyer"
    }
  },
  {
    "infinitiv": {
      "de": "mahlen",
      "lv": "bluaj"
    },
    "praesens": {
      "de": "er mahlt",
      "lv": "ai bluan"
    },
    "imperfektIndikativ": {
      "de": "er mahlte",
      "lv": "ai bloi"
    },
    "imperfektKonjunktiv": {
      "de": "er malte",
      "lv": "ai do të bluante"
    },
    "partizipVergangenheit": {
      "de": "gemahlen",
      "lv": "bluar"
    }
  },
  {
    "infinitiv": {
      "de": "meiden",
      "lv": "shmang"
    },
    "praesens": {
      "de": "er meidet",
      "lv": "ai shmang"
    },
    "imperfektIndikativ": {
      "de": "er mied",
      "lv": "ai shmangu"
    },
    "imperfektKonjunktiv": {
      "de": "er miede",
      "lv": "ai do të shmangte"
    },
    "partizipVergangenheit": {
      "de": "gemieden",
      "lv": "shmangur"
    }
  },
  {
    "infinitiv": {
      "de": "melken",
      "lv": "mjel"
    },
    "praesens": {
      "de": "er milkt / er melkt",
      "lv": "ai mjel"
    },
    "imperfektIndikativ": {
      "de": "er molk / er melkte",
      "lv": "ai moli"
    },
    "imperfektKonjunktiv": {
      "de": "er mölke / er melkte",
      "lv": "ai do të milte"
    },
    "partizipVergangenheit": {
      "de": "gemolken / gemelkt",
      "lv": "mjelë"
    }
  },
  {
    "infinitiv": {
      "de": "messen",
      "lv": "mat"
    },
    "praesens": {
      "de": "er misst",
      "lv": "ai mat"
    },
    "imperfektIndikativ": {
      "de": "er maß",
      "lv": "ai mati"
    },
    "imperfektKonjunktiv": {
      "de": "er mäße",
      "lv": "ai do të maste"
    },
    "partizipVergangenheit": {
      "de": "gemessen",
      "lv": "matur"
    }
  },
  {
    "infinitiv": {
      "de": "misslingen",
      "lv": "dështoj"
    },
    "praesens": {
      "de": "es misslingt",
      "lv": "dështon"
    },
    "imperfektIndikativ": {
      "de": "es misslang",
      "lv": "dështoi"
    },
    "imperfektKonjunktiv": {
      "de": "es misslänge",
      "lv": "do të dështonte"
    },
    "partizipVergangenheit": {
      "de": "misslungen",
      "lv": "dështuar"
    }
  },
  {
    "infinitiv": {
      "de": "mögen",
      "lv": "pëlqej"
    },
    "praesens": {
      "de": "er mag",
      "lv": "ai pëlqen"
    },
    "imperfektIndikativ": {
      "de": "er mochte",
      "lv": "ai pëlqeu"
    },
    "imperfektKonjunktiv": {
      "de": "er möchte",
      "lv": "ai do të pëlqente"
    },
    "partizipVergangenheit": {
      "de": "gemocht",
      "lv": "pëlqyer"
    }
  },
  {
    "infinitiv": {
      "de": "müssen",
      "lv": "duhet"
    },
    "praesens": {
      "de": "er muss",
      "lv": "duhet"
    },
    "imperfektIndikativ": {
      "de": "er musste",
      "lv": "u desh"
    },
    "imperfektKonjunktiv": {
      "de": "er müsste",
      "lv": "do të duhej"
    },
    "partizipVergangenheit": {
      "de": "gemusst",
      "lv": "dashur"
    }
  },
  {
    "infinitiv": {
      "de": "nehmen",
      "lv": "marr"
    },
    "praesens": {
      "de": "er nimmt",
      "lv": "ai merr"
    },
    "imperfektIndikativ": {
      "de": "er nahm",
      "lv": "ai mori"
    },
    "imperfektKonjunktiv": {
      "de": "er nähme",
      "lv": "ai do të merrte"
    },
    "partizipVergangenheit": {
      "de": "genommen",
      "lv": "marrë"
    }
  },
  {
    "infinitiv": {
      "de": "nennen",
      "lv": "emërtoj"
    },
    "praesens": {
      "de": "er nennt",
      "lv": "ai emërton"
    },
    "imperfektIndikativ": {
      "de": "er nannte",
      "lv": "ai emërtoi"
    },
    "imperfektKonjunktiv": {
      "de": "er nennte",
      "lv": "ai do të emërtonte"
    },
    "partizipVergangenheit": {
      "de": "genannt",
      "lv": "emërtuar"
    }
  },
  {
    "infinitiv": {
      "de": "pfeifen",
      "lv": "fishkëllej"
    },
    "praesens": {
      "de": "er pfeift",
      "lv": "ai fishkëllen"
    },
    "imperfektIndikativ": {
      "de": "er pfiff",
      "lv": "ai fishkëlleu"
    },
    "imperfektKonjunktiv": {
      "de": "er pfiffe",
      "lv": "ai do të fishkëllente"
    },
    "partizipVergangenheit": {
      "de": "gepfiffen",
      "lv": "fishkëllyer"
    }
  },
  {
    "infinitiv": {
      "de": "pflegen",
      "lv": "kujdesem"
    },
    "praesens": {
      "de": "er pflegt",
      "lv": "ai kujdeset"
    },
    "imperfektIndikativ": {
      "de": "er pflegte / er pflog",
      "lv": "ai u kujdes"
    },
    "imperfektKonjunktiv": {
      "de": "er pflegte / er pflöge",
      "lv": "ai do të kujdesej"
    },
    "partizipVergangenheit": {
      "de": "gepflegt / gepflogen",
      "lv": "kujdesur"
    }
  },
  {
    "infinitiv": {
      "de": "preisen",
      "lv": "lavdëroj"
    },
    "praesens": {
      "de": "er preist",
      "lv": "ai lavdëron"
    },
    "imperfektIndikativ": {
      "de": "er pries",
      "lv": "ai lavdëroi"
    },
    "imperfektKonjunktiv": {
      "de": "er priese",
      "lv": "ai do të lavdëronte"
    },
    "partizipVergangenheit": {
      "de": "gepriesen",
      "lv": "lavdëruar"
    }
  },
  {
    "infinitiv": {
      "de": "quellen",
      "lv": "fryhem"
    },
    "praesens": {
      "de": "er quillt",
      "lv": "fryhet"
    },
    "imperfektIndikativ": {
      "de": "er quoll",
      "lv": "u fry"
    },
    "imperfektKonjunktiv": {
      "de": "er quölle",
      "lv": "do të fryhej"
    },
    "partizipVergangenheit": {
      "de": "gequollen (er ist)",
      "lv": "fryrë"
    }
  },
  {
    "infinitiv": {
      "de": "raten",
      "lv": "këshilloj / gjej"
    },
    "praesens": {
      "de": "er rät",
      "lv": "ai këshillon / gjen"
    },
    "imperfektIndikativ": {
      "de": "er riet",
      "lv": "ai këshilloi / gjeti"
    },
    "imperfektKonjunktiv": {
      "de": "er riete",
      "lv": "ai do të këshillonte / do të gjente"
    },
    "partizipVergangenheit": {
      "de": "geraten",
      "lv": "këshilluar / gjetur"
    }
  },
  {
    "infinitiv": {
      "de": "reiben",
      "lv": "fërkoj"
    },
    "praesens": {
      "de": "er reibt",
      "lv": "ai fërkon"
    },
    "imperfektIndikativ": {
      "de": "er rieb",
      "lv": "ai fërkoi"
    },
    "imperfektKonjunktiv": {
      "de": "er riebe",
      "lv": "ai do të fërkonte"
    },
    "partizipVergangenheit": {
      "de": "gerieben",
      "lv": "fërkuar"
    }
  },
  {
    "infinitiv": {
      "de": "reißen",
      "lv": "gris"
    },
    "praesens": {
      "de": "er reißt",
      "lv": "ai gris"
    },
    "imperfektIndikativ": {
      "de": "er riss",
      "lv": "ai grisi"
    },
    "imperfektKonjunktiv": {
      "de": "er risse",
      "lv": "ai do të griste"
    },
    "partizipVergangenheit": {
      "de": "gerissen",
      "lv": "grisur"
    }
  },
  {
    "infinitiv": {
      "de": "reiten",
      "lv": "kalëroj"
    },
    "praesens": {
      "de": "er reitet",
      "lv": "ai kalëron"
    },
    "imperfektIndikativ": {
      "de": "er ritt",
      "lv": "ai kalëroi"
    },
    "imperfektKonjunktiv": {
      "de": "er ritte",
      "lv": "ai do të kalëronte"
    },
    "partizipVergangenheit": {
      "de": "geritten (er ist)",
      "lv": "kalëruar"
    }
  },
  {
    "infinitiv": {
      "de": "rennen",
      "lv": "vrapoj"
    },
    "praesens": {
      "de": "er rennt",
      "lv": "ai vrapon"
    },
    "imperfektIndikativ": {
      "de": "er rannte",
      "lv": "ai vrapoi"
    },
    "imperfektKonjunktiv": {
      "de": "er rennte",
      "lv": "ai do të vraponte"
    },
    "partizipVergangenheit": {
      "de": "gerannt",
      "lv": "vrapuar"
    }
  },
  {
    "infinitiv": {
      "de": "riechen",
      "lv": "nuhat"
    },
    "praesens": {
      "de": "er riecht",
      "lv": "ai nuhat"
    },
    "imperfektIndikativ": {
      "de": "er roch",
      "lv": "ai nuhati"
    },
    "imperfektKonjunktiv": {
      "de": "er röche",
      "lv": "ai do të nuhaste"
    },
    "partizipVergangenheit": {
      "de": "gerochen",
      "lv": "nuhatur"
    }
  },
  {
    "infinitiv": {
      "de": "ringen",
      "lv": "përleshem"
    },
    "praesens": {
      "de": "er ringt",
      "lv": "ai përleshet"
    },
    "imperfektIndikativ": {
      "de": "er rang",
      "lv": "ai u përlesh"
    },
    "imperfektKonjunktiv": {
      "de": "er ränge",
      "lv": "ai do të përleshej"
    },
    "partizipVergangenheit": {
      "de": "gerungen",
      "lv": "përleshur"
    }
  },
  {
    "infinitiv": {
      "de": "rinnen",
      "lv": "rrjedh"
    },
    "praesens": {
      "de": "er rinnt",
      "lv": "rrjedh"
    },
    "imperfektIndikativ": {
      "de": "er rann",
      "lv": "rrodhi"
    },
    "imperfektKonjunktiv": {
      "de": "er ränne / er rönne",
      "lv": "do të rridhte"
    },
    "partizipVergangenheit": {
      "de": "geronnen (er ist)",
      "lv": "rrjedhur"
    }
  },
  {
    "infinitiv": {
      "de": "rufen",
      "lv": "thërres"
    },
    "praesens": {
      "de": "er ruft",
      "lv": "ai thërret"
    },
    "imperfektIndikativ": {
      "de": "er rief",
      "lv": "ai thirri"
    },
    "imperfektKonjunktiv": {
      "de": "er riefe",
      "lv": "ai do të thërriste"
    },
    "partizipVergangenheit": {
      "de": "gerufen",
      "lv": "thirrur"
    }
  },
  {
    "infinitiv": {
      "de": "salzen",
      "lv": "krip"
    },
    "praesens": {
      "de": "er salzt",
      "lv": "ai krip"
    },
    "imperfektIndikativ": {
      "de": "er salzte",
      "lv": "ai kripi"
    },
    "imperfektKonjunktiv": {
      "de": "er salzte",
      "lv": "ai do të kripte"
    },
    "partizipVergangenheit": {
      "de": "gesalzen",
      "lv": "kripur"
    }
  },
  {
    "infinitiv": {
      "de": "saufen",
      "lv": "dehem / pi"
    },
    "praesens": {
      "de": "er säuft",
      "lv": "ai dehet / pi"
    },
    "imperfektIndikativ": {
      "de": "er soff",
      "lv": "ai u deh / piu"
    },
    "imperfektKonjunktiv": {
      "de": "er söffe",
      "lv": "ai do të dehej / do të pinte"
    },
    "partizipVergangenheit": {
      "de": "gesoffen",
      "lv": "dehur / pirë"
    }
  },
  {
    "infinitiv": {
      "de": "saugen",
      "lv": "thith"
    },
    "praesens": {
      "de": "er saugt",
      "lv": "ai thith"
    },
    "imperfektIndikativ": {
      "de": "er sog",
      "lv": "ai thithi"
    },
    "imperfektKonjunktiv": {
      "de": "er söge",
      "lv": "ai do të thithte"
    },
    "partizipVergangenheit": {
      "de": "gesogen",
      "lv": "thithur"
    }
  },
  {
    "infinitiv": {
      "de": "schaffen",
      "lv": "krijoj"
    },
    "praesens": {
      "de": "er schafft",
      "lv": "ai krijon"
    },
    "imperfektIndikativ": {
      "de": "er schuf",
      "lv": "ai krijoi"
    },
    "imperfektKonjunktiv": {
      "de": "er schüfe",
      "lv": "ai do të krijonte"
    },
    "partizipVergangenheit": {
      "de": "geschaffen",
      "lv": "krijuar"
    }
  },
  {
    "infinitiv": {
      "de": "schallen",
      "lv": "kumbon"
    },
    "praesens": {
      "de": "es schallt",
      "lv": "kumbon"
    },
    "imperfektIndikativ": {
      "de": "es schallte / es scholl",
      "lv": "kumboi"
    },
    "imperfektKonjunktiv": {
      "de": "es schallte / es schölle",
      "lv": "do të kumbonte"
    },
    "partizipVergangenheit": {
      "de": "geschallt",
      "lv": "kumbuar"
    }
  },
  {
    "infinitiv": {
      "de": "scheiden",
      "lv": "ndaj / ndahem"
    },
    "praesens": {
      "de": "er scheidet",
      "lv": "ai ndan / ndahet"
    },
    "imperfektIndikativ": {
      "de": "er schied",
      "lv": "ai ndau / u nda"
    },
    "imperfektKonjunktiv": {
      "de": "er schiede",
      "lv": "ai do të ndante / do të ndahej"
    },
    "partizipVergangenheit": {
      "de": "geschieden (er hat / er ist)",
      "lv": "ndarë / ndarë"
    }
  },
  {
    "infinitiv": {
      "de": "scheinen",
      "lv": "shkëlqej / dukem"
    },
    "praesens": {
      "de": "er scheint",
      "lv": "ai shkëlqen / duket"
    },
    "imperfektIndikativ": {
      "de": "er schien",
      "lv": "ai shkëlqeu / u duk"
    },
    "imperfektKonjunktiv": {
      "de": "er schiene",
      "lv": "ai do të shkëlqente / do të dukej"
    },
    "partizipVergangenheit": {
      "de": "geschienen",
      "lv": "shkëlqyer / dukur"
    }
  },
  {
    "infinitiv": {
      "de": "schelten",
      "lv": "qortoj"
    },
    "praesens": {
      "de": "er schilt",
      "lv": "ai qorton"
    },
    "imperfektIndikativ": {
      "de": "er schalt",
      "lv": "ai qortoi"
    },
    "imperfektKonjunktiv": {
      "de": "er schölte / er schälte",
      "lv": "ai do të qortonte"
    },
    "partizipVergangenheit": {
      "de": "gescholten",
      "lv": "qortuar"
    }
  },
  {
    "infinitiv": {
      "de": "scheren",
      "lv": "qeth"
    },
    "praesens": {
      "de": "er schert",
      "lv": "ai qeth"
    },
    "imperfektIndikativ": {
      "de": "er schor / er scherte",
      "lv": "ai qethi"
    },
    "imperfektKonjunktiv": {
      "de": "er schöre / er scherte",
      "lv": "ai do të qethte"
    },
    "partizipVergangenheit": {
      "de": "geschoren / geschert",
      "lv": "qethur"
    }
  },
  {
    "infinitiv": {
      "de": "schieben",
      "lv": "shtyj"
    },
    "praesens": {
      "de": "er schiebt",
      "lv": "ai shtyn"
    },
    "imperfektIndikativ": {
      "de": "er schob",
      "lv": "ai shtyu"
    },
    "imperfektKonjunktiv": {
      "de": "er schöbe",
      "lv": "ai do të shtynte"
    },
    "partizipVergangenheit": {
      "de": "geschoben",
      "lv": "shtyrë"
    }
  },
  {
    "infinitiv": {
      "de": "schießen",
      "lv": "qëlloj"
    },
    "praesens": {
      "de": "er schießt",
      "lv": "ai qëllon"
    },
    "imperfektIndikativ": {
      "de": "er schoss",
      "lv": "ai qëlloi"
    },
    "imperfektKonjunktiv": {
      "de": "er schösse",
      "lv": "ai do të qëllonte"
    },
    "partizipVergangenheit": {
      "de": "geschossen",
      "lv": "qëlluar"
    }
  },
  {
    "infinitiv": {
      "de": "schinden",
      "lv": "mundoj"
    },
    "praesens": {
      "de": "er schindet",
      "lv": "ai mundon"
    },
    "imperfektIndikativ": {
      "de": "er schindete",
      "lv": "ai mundoi"
    },
    "imperfektKonjunktiv": {
      "de": "er schindete",
      "lv": "ai do të mundonte"
    },
    "partizipVergangenheit": {
      "de": "geschunden",
      "lv": "munduar"
    }
  },
  {
    "infinitiv": {
      "de": "schlafen",
      "lv": "fle"
    },
    "praesens": {
      "de": "er schläft",
      "lv": "ai fle"
    },
    "imperfektIndikativ": {
      "de": "er schlief",
      "lv": "ai fjeti"
    },
    "imperfektKonjunktiv": {
      "de": "er schliefe",
      "lv": "ai do të flinte"
    },
    "partizipVergangenheit": {
      "de": "geschlafen",
      "lv": "fjetur"
    }
  },
  {
    "infinitiv": {
      "de": "schlagen",
      "lv": "godit"
    },
    "praesens": {
      "de": "er schlägt",
      "lv": "ai godet"
    },
    "imperfektIndikativ": {
      "de": "er schlug",
      "lv": "ai goditi"
    },
    "imperfektKonjunktiv": {
      "de": "er schlüge",
      "lv": "ai do të godiste"
    },
    "partizipVergangenheit": {
      "de": "geschlagen",
      "lv": "goditur"
    }
  },
  {
    "infinitiv": {
      "de": "schleichen",
      "lv": "përvidhem"
    },
    "praesens": {
      "de": "er schleicht",
      "lv": "ai përvidhet"
    },
    "imperfektIndikativ": {
      "de": "er schlich",
      "lv": "ai u përvodh"
    },
    "imperfektKonjunktiv": {
      "de": "er schliche",
      "lv": "ai do të përvidhej"
    },
    "partizipVergangenheit": {
      "de": "geschlichen (er ist)",
      "lv": "përvjedhur"
    }
  },
  {
    "infinitiv": {
      "de": "schleifen",
      "lv": "lëmoj"
    },
    "praesens": {
      "de": "er schleift",
      "lv": "ai lëmon"
    },
    "imperfektIndikativ": {
      "de": "er schliff",
      "lv": "ai lëmoi"
    },
    "imperfektKonjunktiv": {
      "de": "er schliffe",
      "lv": "ai do të lëmonte"
    },
    "partizipVergangenheit": {
      "de": "geschliffen",
      "lv": "lëmuar"
    }
  },
  {
    "infinitiv": {
      "de": "schließen",
      "lv": "mbyll"
    },
    "praesens": {
      "de": "er schließt",
      "lv": "ai mbyll"
    },
    "imperfektIndikativ": {
      "de": "er schloss",
      "lv": "ai mbylli"
    },
    "imperfektKonjunktiv": {
      "de": "er schlösse",
      "lv": "ai do të mbyllte"
    },
    "partizipVergangenheit": {
      "de": "geschlossen",
      "lv": "mbyllur"
    }
  },
  {
    "infinitiv": {
      "de": "schlingen",
      "lv": "përpij"
    },
    "praesens": {
      "de": "er schlingt",
      "lv": "ai përpin"
    },
    "imperfektIndikativ": {
      "de": "er schlang",
      "lv": "ai përpiu"
    },
    "imperfektKonjunktiv": {
      "de": "er schlänge",
      "lv": "ai do të përpinte"
    },
    "partizipVergangenheit": {
      "de": "geschlungen",
      "lv": "përpirë"
    }
  },
  {
    "infinitiv": {
      "de": "schmeißen",
      "lv": "hedh"
    },
    "praesens": {
      "de": "er schmeißt",
      "lv": "ai hedh"
    },
    "imperfektIndikativ": {
      "de": "er schmiss",
      "lv": "ai hodhi"
    },
    "imperfektKonjunktiv": {
      "de": "er schmisse",
      "lv": "ai do të hidhte"
    },
    "partizipVergangenheit": {
      "de": "geschmissen",
      "lv": "hedhur"
    }
  },
  {
    "infinitiv": {
      "de": "schmelzen",
      "lv": "shkrihem"
    },
    "praesens": {
      "de": "er schmilzt",
      "lv": "shkrihet"
    },
    "imperfektIndikativ": {
      "de": "er schmolz",
      "lv": "u shkri"
    },
    "imperfektKonjunktiv": {
      "de": "er schmölze",
      "lv": "do të shkrihej"
    },
    "partizipVergangenheit": {
      "de": "geschmolzen (er ist)",
      "lv": "shkrirë"
    }
  },
  {
    "infinitiv": {
      "de": "schnauben",
      "lv": "shfryj"
    },
    "praesens": {
      "de": "er schnaubt",
      "lv": "ai shfryn"
    },
    "imperfektIndikativ": {
      "de": "er schnaubte / er schnob",
      "lv": "ai shfryu"
    },
    "imperfektKonjunktiv": {
      "de": "er schnaubte / er schnöbe",
      "lv": "ai do të shfrynte"
    },
    "partizipVergangenheit": {
      "de": "geschnaubt / geschnoben",
      "lv": "shfryrë"
    }
  },
  {
    "infinitiv": {
      "de": "schneiden",
      "lv": "pres"
    },
    "praesens": {
      "de": "er schneidet",
      "lv": "ai pret"
    },
    "imperfektIndikativ": {
      "de": "er schnitt",
      "lv": "ai preu"
    },
    "imperfektKonjunktiv": {
      "de": "er schnitte",
      "lv": "ai do të priste"
    },
    "partizipVergangenheit": {
      "de": "geschnitten",
      "lv": "prerë"
    }
  },
  {
    "infinitiv": {
      "de": "schreiben",
      "lv": "shkruaj"
    },
    "praesens": {
      "de": "er schreibt",
      "lv": "ai shkruan"
    },
    "imperfektIndikativ": {
      "de": "er schrieb",
      "lv": "ai shkroi"
    },
    "imperfektKonjunktiv": {
      "de": "er schriebe",
      "lv": "ai do të shkruante"
    },
    "partizipVergangenheit": {
      "de": "geschrieben",
      "lv": "shkruar"
    }
  },
  {
    "infinitiv": {
      "de": "schreien",
      "lv": "bërtas"
    },
    "praesens": {
      "de": "er schreit",
      "lv": "ai bërtet"
    },
    "imperfektIndikativ": {
      "de": "er schrie",
      "lv": "ai bërtiti"
    },
    "imperfektKonjunktiv": {
      "de": "er schriee",
      "lv": "ai do të bërtiste"
    },
    "partizipVergangenheit": {
      "de": "geschrien",
      "lv": "bërtitur"
    }
  },
  {
    "infinitiv": {
      "de": "schreiten",
      "lv": "marshoj"
    },
    "praesens": {
      "de": "er schreitet",
      "lv": "ai marshon"
    },
    "imperfektIndikativ": {
      "de": "er schritt",
      "lv": "ai marshoi"
    },
    "imperfektKonjunktiv": {
      "de": "er schritte",
      "lv": "ai do të marshonte"
    },
    "partizipVergangenheit": {
      "de": "geschritten (er ist)",
      "lv": "marshuar"
    }
  },
  {
    "infinitiv": {
      "de": "schweigen",
      "lv": "hesht"
    },
    "praesens": {
      "de": "er schweigt",
      "lv": "ai hesht"
    },
    "imperfektIndikativ": {
      "de": "er schwieg",
      "lv": "ai heshti"
    },
    "imperfektKonjunktiv": {
      "de": "er schwiege",
      "lv": "ai do të heshtte"
    },
    "partizipVergangenheit": {
      "de": "geschwiegen",
      "lv": "heshtur"
    }
  },
  {
    "infinitiv": {
      "de": "schwellen",
      "lv": "ënjtem"
    },
    "praesens": {
      "de": "er schwillt",
      "lv": "ënjtet"
    },
    "imperfektIndikativ": {
      "de": "er schwoll",
      "lv": "u ënjt"
    },
    "imperfektKonjunktiv": {
      "de": "er schwölle",
      "lv": "do të ënjtej"
    },
    "partizipVergangenheit": {
      "de": "geschwollen (er ist)",
      "lv": "ënjtur"
    }
  },
  {
    "infinitiv": {
      "de": "schwimmen",
      "lv": "notoj"
    },
    "praesens": {
      "de": "er schwimmt",
      "lv": "ai noton"
    },
    "imperfektIndikativ": {
      "de": "er schwamm",
      "lv": "ai notoi"
    },
    "imperfektKonjunktiv": {
      "de": "er schwömme / er schwämme",
      "lv": "ai do të notonte"
    },
    "partizipVergangenheit": {
      "de": "geschwommen (er ist)",
      "lv": "notuar"
    }
  },
  {
    "infinitiv": {
      "de": "schwinden",
      "lv": "zhdukem"
    },
    "praesens": {
      "de": "er schwindet",
      "lv": "zhduket"
    },
    "imperfektIndikativ": {
      "de": "er schwand",
      "lv": "u zhduk"
    },
    "imperfektKonjunktiv": {
      "de": "er schwände",
      "lv": "do të zhdukej"
    },
    "partizipVergangenheit": {
      "de": "geschwunden (er ist)",
      "lv": "zhdukur"
    }
  },
  {
    "infinitiv": {
      "de": "schwingen",
      "lv": "tund"
    },
    "praesens": {
      "de": "er schwingt",
      "lv": "ai tund"
    },
    "imperfektIndikativ": {
      "de": "er schwang",
      "lv": "ai tundi"
    },
    "imperfektKonjunktiv": {
      "de": "er schwänge",
      "lv": "ai do të tundte"
    },
    "partizipVergangenheit": {
      "de": "geschwungen",
      "lv": "tundur"
    }
  },
  {
    "infinitiv": {
      "de": "schwören",
      "lv": "betohem"
    },
    "praesens": {
      "de": "er schwört",
      "lv": "ai betohet"
    },
    "imperfektIndikativ": {
      "de": "er schwur / er schwor",
      "lv": "ai u betua"
    },
    "imperfektKonjunktiv": {
      "de": "er schwöre",
      "lv": "ai do të betohej"
    },
    "partizipVergangenheit": {
      "de": "geschworen",
      "lv": "betuar"
    }
  },
  {
    "infinitiv": {
      "de": "sehen",
      "lv": "shoh"
    },
    "praesens": {
      "de": "er sieht",
      "lv": "ai sheh"
    },
    "imperfektIndikativ": {
      "de": "er sah",
      "lv": "ai pa"
    },
    "imperfektKonjunktiv": {
      "de": "er sähe",
      "lv": "ai do të shihte"
    },
    "partizipVergangenheit": {
      "de": "gesehen",
      "lv": "parë"
    }
  },
  {
    "infinitiv": {
      "de": "sein",
      "lv": "jam"
    },
    "praesens": {
      "de": "er ist",
      "lv": "ai është"
    },
    "imperfektIndikativ": {
      "de": "er war",
      "lv": "ai qe"
    },
    "imperfektKonjunktiv": {
      "de": "er wäre",
      "lv": "ai do të ishte"
    },
    "partizipVergangenheit": {
      "de": "gewesen",
      "lv": "qenë"
    }
  },
  {
    "infinitiv": {
      "de": "senden",
      "lv": "dërgoj"
    },
    "praesens": {
      "de": "er sendet",
      "lv": "ai dërgon"
    },
    "imperfektIndikativ": {
      "de": "er sandte / er sendete",
      "lv": "ai dërgoi"
    },
    "imperfektKonjunktiv": {
      "de": "er sendete",
      "lv": "ai do të dërgonte"
    },
    "partizipVergangenheit": {
      "de": "gesandt / gesendet",
      "lv": "dërguar"
    }
  },
  {
    "infinitiv": {
      "de": "sieden",
      "lv": "ziej"
    },
    "praesens": {
      "de": "er siedet",
      "lv": "ai zien"
    },
    "imperfektIndikativ": {
      "de": "er sott / er siedete",
      "lv": "ai zjeu"
    },
    "imperfektKonjunktiv": {
      "de": "er sötte / er siedete",
      "lv": "ai do të ziente"
    },
    "partizipVergangenheit": {
      "de": "gesotten / gesiedet",
      "lv": "zier"
    }
  },
  {
    "infinitiv": {
      "de": "singen",
      "lv": "këndoj"
    },
    "praesens": {
      "de": "er singt",
      "lv": "ai këndon"
    },
    "imperfektIndikativ": {
      "de": "er sang",
      "lv": "ai këndoi"
    },
    "imperfektKonjunktiv": {
      "de": "er sänge",
      "lv": "ai do të këndonte"
    },
    "partizipVergangenheit": {
      "de": "gesungen",
      "lv": "kënduar"
    }
  },
  {
    "infinitiv": {
      "de": "sinken",
      "lv": "fundosem"
    },
    "praesens": {
      "de": "er sinkt",
      "lv": "ai fundoset"
    },
    "imperfektIndikativ": {
      "de": "er sank",
      "lv": "ai u fundos"
    },
    "imperfektKonjunktiv": {
      "de": "er sänke",
      "lv": "ai do të fundosej"
    },
    "partizipVergangenheit": {
      "de": "gesunken (er ist)",
      "lv": "fundosur"
    }
  },
  {
    "infinitiv": {
      "de": "sinnen",
      "lv": "mendohem"
    },
    "praesens": {
      "de": "er sinnt",
      "lv": "ai mendohet"
    },
    "imperfektIndikativ": {
      "de": "er sann",
      "lv": "ai u mendua"
    },
    "imperfektKonjunktiv": {
      "de": "er sönne / er sänne",
      "lv": "ai do të mendohej"
    },
    "partizipVergangenheit": {
      "de": "gesonnen",
      "lv": "menduar"
    }
  },
  {
    "infinitiv": {
      "de": "sitzen",
      "lv": "rri ulur"
    },
    "praesens": {
      "de": "er sitzt",
      "lv": "ai rri ulur"
    },
    "imperfektIndikativ": {
      "de": "er saß",
      "lv": "ai ndenji ulur"
    },
    "imperfektKonjunktiv": {
      "de": "er säße",
      "lv": "ai do të rrinte ulur"
    },
    "partizipVergangenheit": {
      "de": "gesessen",
      "lv": "ndenjur ulur"
    }
  },
  {
    "infinitiv": {
      "de": "sollen",
      "lv": "duhet"
    },
    "praesens": {
      "de": "er soll",
      "lv": "duhet"
    },
    "imperfektIndikativ": {
      "de": "er sollte",
      "lv": "u desh"
    },
    "imperfektKonjunktiv": {
      "de": "er sollte",
      "lv": "do të duhej"
    },
    "partizipVergangenheit": {
      "de": "gesollt",
      "lv": "dashur"
    }
  },
  {
    "infinitiv": {
      "de": "speien",
      "lv": "pështyj"
    },
    "praesens": {
      "de": "er speit",
      "lv": "ai pështyn"
    },
    "imperfektIndikativ": {
      "de": "er spie",
      "lv": "ai pështyu"
    },
    "imperfektKonjunktiv": {
      "de": "er spie",
      "lv": "ai do të pështynte"
    },
    "partizipVergangenheit": {
      "de": "gespien",
      "lv": "pështyrë"
    }
  },
  {
    "infinitiv": {
      "de": "spinnen",
      "lv": "tjerr"
    },
    "praesens": {
      "de": "er spinnt",
      "lv": "ai tjerr"
    },
    "imperfektIndikativ": {
      "de": "er spann",
      "lv": "ai tori"
    },
    "imperfektKonjunktiv": {
      "de": "er spönne / er spänne",
      "lv": "ai do të tirrte"
    },
    "partizipVergangenheit": {
      "de": "gesponnen",
      "lv": "tjerrë"
    }
  },
  {
    "infinitiv": {
      "de": "spleißen",
      "lv": "bashkoj"
    },
    "praesens": {
      "de": "er spleißt",
      "lv": "ai bashkon"
    },
    "imperfektIndikativ": {
      "de": "er spliss",
      "lv": "ai bashkoi"
    },
    "imperfektKonjunktiv": {
      "de": "er splisse",
      "lv": "ai do të bashkonte"
    },
    "partizipVergangenheit": {
      "de": "gesplissen",
      "lv": "bashkuar"
    }
  },
  {
    "infinitiv": {
      "de": "sprechen",
      "lv": "flas"
    },
    "praesens": {
      "de": "er spricht",
      "lv": "ai flet"
    },
    "imperfektIndikativ": {
      "de": "er sprach",
      "lv": "ai foli"
    },
    "imperfektKonjunktiv": {
      "de": "er spräche",
      "lv": "ai do të fliste"
    },
    "partizipVergangenheit": {
      "de": "gesprochen",
      "lv": "folur"
    }
  },
  {
    "infinitiv": {
      "de": "sprießen",
      "lv": "mbin"
    },
    "praesens": {
      "de": "er sprießt",
      "lv": "mbin"
    },
    "imperfektIndikativ": {
      "de": "er spross",
      "lv": "mbiu"
    },
    "imperfektKonjunktiv": {
      "de": "er sprösse",
      "lv": "do të mbinte"
    },
    "partizipVergangenheit": {
      "de": "gesprossen (er ist)",
      "lv": "mbirë"
    }
  },
  {
    "infinitiv": {
      "de": "springen",
      "lv": "kërcej"
    },
    "praesens": {
      "de": "er springt",
      "lv": "ai kërcen"
    },
    "imperfektIndikativ": {
      "de": "er sprang",
      "lv": "ai kërceu"
    },
    "imperfektKonjunktiv": {
      "de": "er spränge",
      "lv": "ai do të kërcente"
    },
    "partizipVergangenheit": {
      "de": "gesprungen (er ist)",
      "lv": "kërcyer"
    }
  },
  {
    "infinitiv": {
      "de": "stechen",
      "lv": "shpoj"
    },
    "praesens": {
      "de": "er sticht",
      "lv": "ai shpon"
    },
    "imperfektIndikativ": {
      "de": "er stach",
      "lv": "ai shpoi"
    },
    "imperfektKonjunktiv": {
      "de": "er stäche",
      "lv": "ai do të shponte"
    },
    "partizipVergangenheit": {
      "de": "gestochen",
      "lv": "shpuar"
    }
  },
  {
    "infinitiv": {
      "de": "stecken",
      "lv": "fut / ngul"
    },
    "praesens": {
      "de": "er steckt",
      "lv": "ai fut / ngul"
    },
    "imperfektIndikativ": {
      "de": "er stak / er steckte",
      "lv": "ai futi / nguli"
    },
    "imperfektKonjunktiv": {
      "de": "er stäke / er steckte",
      "lv": "ai do të fuste / do të ngulte"
    },
    "partizipVergangenheit": {
      "de": "gesteckt",
      "lv": "futur / ngulur"
    }
  },
  {
    "infinitiv": {
      "de": "stehen",
      "lv": "qëndroj në këmbë"
    },
    "praesens": {
      "de": "er steht",
      "lv": "ai qëndron në këmbë"
    },
    "imperfektIndikativ": {
      "de": "er stand",
      "lv": "ai qëndroi në këmbë"
    },
    "imperfektKonjunktiv": {
      "de": "er stände / er stünde",
      "lv": "ai do të qëndronte në këmbë"
    },
    "partizipVergangenheit": {
      "de": "gestanden",
      "lv": "qëndruar në këmbë"
    }
  },
  {
    "infinitiv": {
      "de": "stehlen",
      "lv": "vjedh"
    },
    "praesens": {
      "de": "er stiehlt",
      "lv": "ai vjedh"
    },
    "imperfektIndikativ": {
      "de": "er stahl",
      "lv": "ai vodhi"
    },
    "imperfektKonjunktiv": {
      "de": "er stöhle / er stähle",
      "lv": "ai do të vidhte"
    },
    "partizipVergangenheit": {
      "de": "gestohlen",
      "lv": "vjedhur"
    }
  },
  {
    "infinitiv": {
      "de": "steigen",
      "lv": "ngjitem"
    },
    "praesens": {
      "de": "er steigt",
      "lv": "ai ngjitet"
    },
    "imperfektIndikativ": {
      "de": "er stieg",
      "lv": "ai u ngjit"
    },
    "imperfektKonjunktiv": {
      "de": "er stiege",
      "lv": "ai do të ngjitej"
    },
    "partizipVergangenheit": {
      "de": "gestiegen (er ist)",
      "lv": "ngjitur"
    }
  },
  {
    "infinitiv": {
      "de": "sterben",
      "lv": "vdes"
    },
    "praesens": {
      "de": "er stirbt",
      "lv": "ai vdes"
    },
    "imperfektIndikativ": {
      "de": "er starb",
      "lv": "ai vdiq"
    },
    "imperfektKonjunktiv": {
      "de": "er stürbe",
      "lv": "ai do të vdiste"
    },
    "partizipVergangenheit": {
      "de": "gestorben (er ist)",
      "lv": "vdekur"
    }
  },
  {
    "infinitiv": {
      "de": "stinken",
      "lv": "qelbem"
    },
    "praesens": {
      "de": "es stinkt",
      "lv": "qelbet"
    },
    "imperfektIndikativ": {
      "de": "es stank",
      "lv": "u qelb"
    },
    "imperfektKonjunktiv": {
      "de": "es stänke",
      "lv": "do të qelbej"
    },
    "partizipVergangenheit": {
      "de": "gestunken",
      "lv": "qelbur"
    }
  },
  {
    "infinitiv": {
      "de": "stoßen",
      "lv": "shtyj"
    },
    "praesens": {
      "de": "er stößt",
      "lv": "ai shtyn"
    },
    "imperfektIndikativ": {
      "de": "er stieß",
      "lv": "ai shtyu"
    },
    "imperfektKonjunktiv": {
      "de": "er stieße",
      "lv": "ai do të shtynte"
    },
    "partizipVergangenheit": {
      "de": "gestoßen",
      "lv": "shtyrë"
    }
  },
  {
    "infinitiv": {
      "de": "streichen",
      "lv": "lyej / fshij"
    },
    "praesens": {
      "de": "er streicht",
      "lv": "ai lyen / fshin"
    },
    "imperfektIndikativ": {
      "de": "er strich",
      "lv": "ai leu / fshiu"
    },
    "imperfektKonjunktiv": {
      "de": "er striche",
      "lv": "ai do të lyente / do të fshinte"
    },
    "partizipVergangenheit": {
      "de": "gestrichen",
      "lv": "lyer / fshirë"
    }
  },
  {
    "infinitiv": {
      "de": "streiten",
      "lv": "grindem"
    },
    "praesens": {
      "de": "er streitet",
      "lv": "ai grindet"
    },
    "imperfektIndikativ": {
      "de": "er stritt",
      "lv": "ai u grind"
    },
    "imperfektKonjunktiv": {
      "de": "er stritte",
      "lv": "ai do të grindej"
    },
    "partizipVergangenheit": {
      "de": "gestritten",
      "lv": "grindur"
    }
  },
  {
    "infinitiv": {
      "de": "tragen",
      "lv": "mbart"
    },
    "praesens": {
      "de": "er trägt",
      "lv": "ai mbart"
    },
    "imperfektIndikativ": {
      "de": "er trug",
      "lv": "ai mbarti"
    },
    "imperfektKonjunktiv": {
      "de": "er trüge",
      "lv": "ai do të mbartte"
    },
    "partizipVergangenheit": {
      "de": "getragen",
      "lv": "mbartur"
    }
  },
  {
    "infinitiv": {
      "de": "treffen",
      "lv": "takoj"
    },
    "praesens": {
      "de": "er trifft",
      "lv": "ai takon"
    },
    "imperfektIndikativ": {
      "de": "er traf",
      "lv": "ai takoi"
    },
    "imperfektKonjunktiv": {
      "de": "er träfe",
      "lv": "ai do të takonte"
    },
    "partizipVergangenheit": {
      "de": "getroffen",
      "lv": "takuar"
    }
  },
  {
    "infinitiv": {
      "de": "treiben",
      "lv": "ngas"
    },
    "praesens": {
      "de": "er treibt",
      "lv": "ai nget"
    },
    "imperfektIndikativ": {
      "de": "er trieb",
      "lv": "ai ngau"
    },
    "imperfektKonjunktiv": {
      "de": "er triebe",
      "lv": "ai do të ngiste"
    },
    "partizipVergangenheit": {
      "de": "getrieben",
      "lv": "ngarë"
    }
  },
  {
    "infinitiv": {
      "de": "treten",
      "lv": "bëj një hap / shkoj"
    },
    "praesens": {
      "de": "er tritt",
      "lv": "ai bën një hap / shkon"
    },
    "imperfektIndikativ": {
      "de": "er trat",
      "lv": "ai bëri një hap / shkoi"
    },
    "imperfektKonjunktiv": {
      "de": "er träte",
      "lv": "ai do të bënte një hap / do të shkonte"
    },
    "partizipVergangenheit": {
      "de": "getreten (er ist)",
      "lv": "bërë një hap / shkuar"
    }
  },
  {
    "infinitiv": {
      "de": "trinken",
      "lv": "pi"
    },
    "praesens": {
      "de": "er trinkt",
      "lv": "ai pi"
    },
    "imperfektIndikativ": {
      "de": "er trank",
      "lv": "ai piu"
    },
    "imperfektKonjunktiv": {
      "de": "er tränke",
      "lv": "ai do të pinte"
    },
    "partizipVergangenheit": {
      "de": "getrunken",
      "lv": "pirë"
    }
  },
  {
    "infinitiv": {
      "de": "trügen",
      "lv": "mashtroj"
    },
    "praesens": {
      "de": "er trügt",
      "lv": "ai mashtron"
    },
    "imperfektIndikativ": {
      "de": "er trog",
      "lv": "ai mashtroi"
    },
    "imperfektKonjunktiv": {
      "de": "er tröge",
      "lv": "ai do të mashtronte"
    },
    "partizipVergangenheit": {
      "de": "getrogen",
      "lv": "mashtruar"
    }
  },
  {
    "infinitiv": {
      "de": "tun",
      "lv": "bëj"
    },
    "praesens": {
      "de": "er tut",
      "lv": "ai bën"
    },
    "imperfektIndikativ": {
      "de": "er tat",
      "lv": "ai bëri"
    },
    "imperfektKonjunktiv": {
      "de": "er täte",
      "lv": "ai do të bënte"
    },
    "partizipVergangenheit": {
      "de": "getan",
      "lv": "bërë"
    }
  },
  {
    "infinitiv": {
      "de": "verderben",
      "lv": "prish"
    },
    "praesens": {
      "de": "er verdirbt",
      "lv": "ai prish"
    },
    "imperfektIndikativ": {
      "de": "er verdarb",
      "lv": "ai prishi"
    },
    "imperfektKonjunktiv": {
      "de": "er verdürbe",
      "lv": "ai do të prishte"
    },
    "partizipVergangenheit": {
      "de": "verdorben",
      "lv": "prishur"
    }
  },
  {
    "infinitiv": {
      "de": "verdrießen",
      "lv": "mërzit"
    },
    "praesens": {
      "de": "er verdrießt",
      "lv": "ai mërzit"
    },
    "imperfektIndikativ": {
      "de": "er verdross",
      "lv": "ai mërziti"
    },
    "imperfektKonjunktiv": {
      "de": "er verdrösse",
      "lv": "ai do të mërziste"
    },
    "partizipVergangenheit": {
      "de": "verdrossen",
      "lv": "mërzitur"
    }
  },
  {
    "infinitiv": {
      "de": "vergessen",
      "lv": "harroj"
    },
    "praesens": {
      "de": "er vergisst",
      "lv": "ai harron"
    },
    "imperfektIndikativ": {
      "de": "er vergaß",
      "lv": "ai harroi"
    },
    "imperfektKonjunktiv": {
      "de": "er vergäße",
      "lv": "ai do të harronte"
    },
    "partizipVergangenheit": {
      "de": "vergessen",
      "lv": "harruar"
    }
  },
  {
    "infinitiv": {
      "de": "verlieren",
      "lv": "humb"
    },
    "praesens": {
      "de": "er verliert",
      "lv": "ai humb"
    },
    "imperfektIndikativ": {
      "de": "er verlor",
      "lv": "ai humbi"
    },
    "imperfektKonjunktiv": {
      "de": "er verlöre",
      "lv": "ai do të humbte"
    },
    "partizipVergangenheit": {
      "de": "verloren",
      "lv": "humbur"
    }
  },
  {
    "infinitiv": {
      "de": "wachsen",
      "lv": "rritem"
    },
    "praesens": {
      "de": "er wächst",
      "lv": "ai rritet"
    },
    "imperfektIndikativ": {
      "de": "er wuchs",
      "lv": "ai u rrit"
    },
    "imperfektKonjunktiv": {
      "de": "er wüchse",
      "lv": "ai do të rritej"
    },
    "partizipVergangenheit": {
      "de": "gewachsen (er ist)",
      "lv": "rritur"
    }
  },
  {
    "infinitiv": {
      "de": "waschen",
      "lv": "laj"
    },
    "praesens": {
      "de": "er wäscht",
      "lv": "ai lan"
    },
    "imperfektIndikativ": {
      "de": "er wusch",
      "lv": "ai lau"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsche",
      "lv": "ai do të lante"
    },
    "partizipVergangenheit": {
      "de": "gewaschen",
      "lv": "larë"
    }
  },
  {
    "infinitiv": {
      "de": "weben",
      "lv": "end"
    },
    "praesens": {
      "de": "er webt",
      "lv": "ai end"
    },
    "imperfektIndikativ": {
      "de": "er wob / er webte",
      "lv": "ai endi"
    },
    "imperfektKonjunktiv": {
      "de": "er wöbe / er webte",
      "lv": "ai do të endte"
    },
    "partizipVergangenheit": {
      "de": "gewoben",
      "lv": "endur"
    }
  },
  {
    "infinitiv": {
      "de": "weichen",
      "lv": "tërhiqem"
    },
    "praesens": {
      "de": "er weicht",
      "lv": "ai tërhiqet"
    },
    "imperfektIndikativ": {
      "de": "er wich",
      "lv": "ai u tërhoq"
    },
    "imperfektKonjunktiv": {
      "de": "er wiche",
      "lv": "ai do të tërhiqej"
    },
    "partizipVergangenheit": {
      "de": "gewichen (er ist)",
      "lv": "tërhequr"
    }
  },
  {
    "infinitiv": {
      "de": "weisen",
      "lv": "tregoj"
    },
    "praesens": {
      "de": "er weist",
      "lv": "ai tregon"
    },
    "imperfektIndikativ": {
      "de": "er wies",
      "lv": "ai tregoi"
    },
    "imperfektKonjunktiv": {
      "de": "er wiese",
      "lv": "ai do të tregonte"
    },
    "partizipVergangenheit": {
      "de": "gewiesen",
      "lv": "treguar"
    }
  },
  {
    "infinitiv": {
      "de": "wenden",
      "lv": "rrotulloj / kthej"
    },
    "praesens": {
      "de": "er wendet",
      "lv": "ai rrotullon / kthen"
    },
    "imperfektIndikativ": {
      "de": "er wandte / es wendete",
      "lv": "ai rrotulloi / ktheu"
    },
    "imperfektKonjunktiv": {
      "de": "er wendete",
      "lv": "ai do të rrotullonte / do të kthente"
    },
    "partizipVergangenheit": {
      "de": "gewandt / gewendet",
      "lv": "rrotulluar / kthyer"
    }
  },
  {
    "infinitiv": {
      "de": "werben",
      "lv": "kërkoj për grua"
    },
    "praesens": {
      "de": "er wirbt",
      "lv": "ai kërkon për grua"
    },
    "imperfektIndikativ": {
      "de": "er warb",
      "lv": "ai kërkoi për grua"
    },
    "imperfektKonjunktiv": {
      "de": "er würbe",
      "lv": "ai do të kërkonte për grua"
    },
    "partizipVergangenheit": {
      "de": "geworben",
      "lv": "kërkuar për grua"
    }
  },
  {
    "infinitiv": {
      "de": "werden",
      "lv": "bëhem"
    },
    "praesens": {
      "de": "er wird",
      "lv": "ai bëhet"
    },
    "imperfektIndikativ": {
      "de": "er wurde",
      "lv": "ai u bë"
    },
    "imperfektKonjunktiv": {
      "de": "er würde",
      "lv": "ai do të bëhej"
    },
    "partizipVergangenheit": {
      "de": "geworden",
      "lv": "bërë"
    }
  },
  {
    "infinitiv": {
      "de": "werfen",
      "lv": "hedh"
    },
    "praesens": {
      "de": "er wirft",
      "lv": "ai hedh"
    },
    "imperfektIndikativ": {
      "de": "er warf",
      "lv": "ai hodhi"
    },
    "imperfektKonjunktiv": {
      "de": "er würfe",
      "lv": "ai do të hidhte"
    },
    "partizipVergangenheit": {
      "de": "geworfen",
      "lv": "hedhur"
    }
  },
  {
    "infinitiv": {
      "de": "wiegen",
      "lv": "peshoj"
    },
    "praesens": {
      "de": "er wiegt",
      "lv": "ai peshon"
    },
    "imperfektIndikativ": {
      "de": "er wog",
      "lv": "ai peshoi"
    },
    "imperfektKonjunktiv": {
      "de": "er wöge",
      "lv": "ai do të peshonte"
    },
    "partizipVergangenheit": {
      "de": "gewogen",
      "lv": "peshuar"
    }
  },
  {
    "infinitiv": {
      "de": "winden",
      "lv": "thur"
    },
    "praesens": {
      "de": "er windet",
      "lv": "ai thur"
    },
    "imperfektIndikativ": {
      "de": "er wand",
      "lv": "ai thuri"
    },
    "imperfektKonjunktiv": {
      "de": "er wände",
      "lv": "ai do të thurte"
    },
    "partizipVergangenheit": {
      "de": "gewunden",
      "lv": "thurur"
    }
  },
  {
    "infinitiv": {
      "de": "wissen",
      "lv": "di"
    },
    "praesens": {
      "de": "er weiß",
      "lv": "ai di"
    },
    "imperfektIndikativ": {
      "de": "er wusste",
      "lv": "ai diti"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsste",
      "lv": "ai do të dinte"
    },
    "partizipVergangenheit": {
      "de": "gewusst",
      "lv": "ditur"
    }
  },
  {
    "infinitiv": {
      "de": "wollen",
      "lv": "dua"
    },
    "praesens": {
      "de": "er will",
      "lv": "ai do"
    },
    "imperfektIndikativ": {
      "de": "er wollte",
      "lv": "ai deshi"
    },
    "imperfektKonjunktiv": {
      "de": "er wollte",
      "lv": "ai do të donte"
    },
    "partizipVergangenheit": {
      "de": "gewollt",
      "lv": "dashur"
    }
  },
  {
    "infinitiv": {
      "de": "wringen",
      "lv": "shtrydh / shtyp"
    },
    "praesens": {
      "de": "er wringt",
      "lv": "ai shtrydh / shtyp"
    },
    "imperfektIndikativ": {
      "de": "er wrang",
      "lv": "ai shtrydhi / shtypi"
    },
    "imperfektKonjunktiv": {
      "de": "er wränge",
      "lv": "ai do të shtrydhte / do të shtypte"
    },
    "partizipVergangenheit": {
      "de": "gewrungen",
      "lv": "shtrydhur / shtypur"
    }
  },
  {
    "infinitiv": {
      "de": "zeihen",
      "lv": "fajësoj"
    },
    "praesens": {
      "de": "er zeiht",
      "lv": "ai fajëson"
    },
    "imperfektIndikativ": {
      "de": "er zieh",
      "lv": "ai fajësoi"
    },
    "imperfektKonjunktiv": {
      "de": "er ziehe",
      "lv": "ai do të fajësonte"
    },
    "partizipVergangenheit": {
      "de": "geziehen",
      "lv": "fajësuar"
    }
  },
  {
    "infinitiv": {
      "de": "ziehen",
      "lv": "tërheq"
    },
    "praesens": {
      "de": "er zieht",
      "lv": "ai tërheq"
    },
    "imperfektIndikativ": {
      "de": "er zog",
      "lv": "ai tërhoqi"
    },
    "imperfektKonjunktiv": {
      "de": "er zöge",
      "lv": "ai do të tërhiqte"
    },
    "partizipVergangenheit": {
      "de": "gezogen",
      "lv": "tërhequr"
    }
  },
  {
    "infinitiv": {
      "de": "zwingen",
      "lv": "detyroj"
    },
    "praesens": {
      "de": "er zwingt",
      "lv": "ai detyron"
    },
    "imperfektIndikativ": {
      "de": "er zwang",
      "lv": "ai detyroi"
    },
    "imperfektKonjunktiv": {
      "de": "er zwänge",
      "lv": "ai do të detyronte"
    },
    "partizipVergangenheit": {
      "de": "gezwungen",
      "lv": "detyruar"
    }
  },
  {
    "infinitiv": {
      "de": "empfangen",
      "lv": "marr"
    },
    "praesens": {
      "de": "er empfängt",
      "lv": "ai merr"
    },
    "imperfektIndikativ": {
      "de": "er empfing",
      "lv": "ai mori"
    },
    "imperfektKonjunktiv": {
      "de": "er empfinge",
      "lv": "ai do të merrte"
    },
    "partizipVergangenheit": {
      "de": "empfangen",
      "lv": "marrë"
    }
  },
  {
    "infinitiv": {
      "de": "erwägen",
      "lv": "shqyrtoj"
    },
    "praesens": {
      "de": "er erwägt",
      "lv": "ai shqyrton"
    },
    "imperfektIndikativ": {
      "de": "er erwog",
      "lv": "ai shqyrtoi"
    },
    "imperfektKonjunktiv": {
      "de": "er erwöge",
      "lv": "ai do të shqyrtonte"
    },
    "partizipVergangenheit": {
      "de": "erwogen",
      "lv": "shqyrtuar"
    }
  },
  {
    "infinitiv": {
      "de": "fechten",
      "lv": "luftoj"
    },
    "praesens": {
      "de": "er ficht",
      "lv": "ai lufton"
    },
    "imperfektIndikativ": {
      "de": "er focht",
      "lv": "ai luftoi"
    },
    "imperfektKonjunktiv": {
      "de": "er föchte",
      "lv": "ai do të luftonte"
    },
    "partizipVergangenheit": {
      "de": "gefochten",
      "lv": "luftuar"
    }
  },
  {
    "infinitiv": {
      "de": "flechten",
      "lv": "gërshetoj"
    },
    "praesens": {
      "de": "er flicht",
      "lv": "ai gërsheton"
    },
    "imperfektIndikativ": {
      "de": "er flocht",
      "lv": "ai gërshetoi"
    },
    "imperfektKonjunktiv": {
      "de": "er flöchte",
      "lv": "ai do të gërshetonte"
    },
    "partizipVergangenheit": {
      "de": "geflochten",
      "lv": "gërshetuar"
    }
  },
  {
    "infinitiv": {
      "de": "hangen",
      "lv": "varem"
    },
    "praesens": {
      "de": "er hängt",
      "lv": "ai varet"
    },
    "imperfektIndikativ": {
      "de": "er hing",
      "lv": "ai u var"
    },
    "imperfektKonjunktiv": {
      "de": "er hinge",
      "lv": "ai do të varej"
    },
    "partizipVergangenheit": {
      "de": "gehangen",
      "lv": "varur"
    }
  },
  {
    "infinitiv": {
      "de": "spalten",
      "lv": "çaj"
    },
    "praesens": {
      "de": "er spaltet",
      "lv": "ai çan"
    },
    "imperfektIndikativ": {
      "de": "er spaltete",
      "lv": "ai çau"
    },
    "imperfektKonjunktiv": {
      "de": "er spaltete",
      "lv": "ai do të çante"
    },
    "partizipVergangenheit": {
      "de": "gespalten",
      "lv": "çarë"
    }
  },
  {
    "infinitiv": {
      "de": "verzeihen",
      "lv": "fal"
    },
    "praesens": {
      "de": "er verzeiht",
      "lv": "ai fal"
    },
    "imperfektIndikativ": {
      "de": "er verzieh",
      "lv": "ai fali"
    },
    "imperfektKonjunktiv": {
      "de": "er verziehe",
      "lv": "ai do të falte"
    },
    "partizipVergangenheit": {
      "de": "verziehen",
      "lv": "falur"
    }
  }
];

window.VERB_ENTRIES = VERB_ENTRIES;

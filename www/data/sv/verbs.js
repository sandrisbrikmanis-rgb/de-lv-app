const VERB_ENTRIES = [
  {
    "infinitiv": {
      "de": "backen",
      "lv": "att baka"
    },
    "praesens": {
      "de": "er bäckt",
      "lv": "han bakar"
    },
    "imperfektIndikativ": {
      "de": "er buk",
      "lv": "han bakade"
    },
    "imperfektKonjunktiv": {
      "de": "er büke",
      "lv": "han skulle baka"
    },
    "partizipVergangenheit": {
      "de": "gebacken",
      "lv": "bakat"
    }
  },
  {
    "infinitiv": {
      "de": "befehlen",
      "lv": "att befalla"
    },
    "praesens": {
      "de": "er befiehlt",
      "lv": "han befaller"
    },
    "imperfektIndikativ": {
      "de": "er befahl",
      "lv": "han befallde"
    },
    "imperfektKonjunktiv": {
      "de": "er beföhle",
      "lv": "han skulle befalla"
    },
    "partizipVergangenheit": {
      "de": "befohlen",
      "lv": "befallt"
    }
  },
  {
    "infinitiv": {
      "de": "beginnen",
      "lv": "att börja"
    },
    "praesens": {
      "de": "er beginnt",
      "lv": "han börjar"
    },
    "imperfektIndikativ": {
      "de": "er begann",
      "lv": "han började"
    },
    "imperfektKonjunktiv": {
      "de": "er begönne / er begänne",
      "lv": "han skulle börja"
    },
    "partizipVergangenheit": {
      "de": "begonnen",
      "lv": "börjat"
    }
  },
  {
    "infinitiv": {
      "de": "beißen",
      "lv": "att bita"
    },
    "praesens": {
      "de": "er beißt",
      "lv": "han biter"
    },
    "imperfektIndikativ": {
      "de": "er biss",
      "lv": "han bet"
    },
    "imperfektKonjunktiv": {
      "de": "er bisse",
      "lv": "han skulle bita"
    },
    "partizipVergangenheit": {
      "de": "gebissen",
      "lv": "bitit"
    }
  },
  {
    "infinitiv": {
      "de": "bergen",
      "lv": "att rädda / att gömma"
    },
    "praesens": {
      "de": "er birgt",
      "lv": "han räddar / gömmer"
    },
    "imperfektIndikativ": {
      "de": "er barg",
      "lv": "han räddade / gömde"
    },
    "imperfektKonjunktiv": {
      "de": "er bürge / er bärge",
      "lv": "han skulle rädda / gömma"
    },
    "partizipVergangenheit": {
      "de": "geborgen",
      "lv": "räddat / gömt"
    }
  },
  {
    "infinitiv": {
      "de": "bersten",
      "lv": "att brista"
    },
    "praesens": {
      "de": "er birst",
      "lv": "det brister"
    },
    "imperfektIndikativ": {
      "de": "er barst / er borst",
      "lv": "det brast"
    },
    "imperfektKonjunktiv": {
      "de": "er bärste / er börste",
      "lv": "det skulle brista"
    },
    "partizipVergangenheit": {
      "de": "geborsten (er ist)",
      "lv": "brustit"
    }
  },
  {
    "infinitiv": {
      "de": "bewegen",
      "lv": "att förmå"
    },
    "praesens": {
      "de": "er bewegt",
      "lv": "han förmår"
    },
    "imperfektIndikativ": {
      "de": "er bewog",
      "lv": "han förmådde"
    },
    "imperfektKonjunktiv": {
      "de": "er bewöge",
      "lv": "han skulle förmå"
    },
    "partizipVergangenheit": {
      "de": "bewogen",
      "lv": "förmått"
    }
  },
  {
    "infinitiv": {
      "de": "biegen",
      "lv": "att böja"
    },
    "praesens": {
      "de": "er biegt",
      "lv": "han böjer"
    },
    "imperfektIndikativ": {
      "de": "er bog",
      "lv": "han böjde"
    },
    "imperfektKonjunktiv": {
      "de": "er böge",
      "lv": "han skulle böja"
    },
    "partizipVergangenheit": {
      "de": "gebogen",
      "lv": "böjt"
    }
  },
  {
    "infinitiv": {
      "de": "bieten",
      "lv": "att erbjuda"
    },
    "praesens": {
      "de": "er bietet",
      "lv": "han erbjuder"
    },
    "imperfektIndikativ": {
      "de": "er bot",
      "lv": "han erbjöd"
    },
    "imperfektKonjunktiv": {
      "de": "er böte",
      "lv": "han skulle erbjuda"
    },
    "partizipVergangenheit": {
      "de": "geboten",
      "lv": "erbjudit"
    }
  },
  {
    "infinitiv": {
      "de": "binden",
      "lv": "att binda"
    },
    "praesens": {
      "de": "er bindet",
      "lv": "han binder"
    },
    "imperfektIndikativ": {
      "de": "er band",
      "lv": "han band"
    },
    "imperfektKonjunktiv": {
      "de": "er bände",
      "lv": "han skulle binda"
    },
    "partizipVergangenheit": {
      "de": "gebunden",
      "lv": "bundit"
    }
  },
  {
    "infinitiv": {
      "de": "bitten",
      "lv": "att be"
    },
    "praesens": {
      "de": "er bittet",
      "lv": "han ber"
    },
    "imperfektIndikativ": {
      "de": "er bat",
      "lv": "han bad"
    },
    "imperfektKonjunktiv": {
      "de": "er bäte",
      "lv": "han skulle be"
    },
    "partizipVergangenheit": {
      "de": "gebeten",
      "lv": "bett"
    }
  },
  {
    "infinitiv": {
      "de": "blasen",
      "lv": "att blåsa"
    },
    "praesens": {
      "de": "er bläst",
      "lv": "han blåser"
    },
    "imperfektIndikativ": {
      "de": "er blies",
      "lv": "han blåste"
    },
    "imperfektKonjunktiv": {
      "de": "er bliese",
      "lv": "han skulle blåsa"
    },
    "partizipVergangenheit": {
      "de": "geblasen",
      "lv": "blåst"
    }
  },
  {
    "infinitiv": {
      "de": "gären",
      "lv": "att jäsa"
    },
    "praesens": {
      "de": "es gärt",
      "lv": "det jäser"
    },
    "imperfektIndikativ": {
      "de": "es gor / es gärte",
      "lv": "det jäste"
    },
    "imperfektKonjunktiv": {
      "de": "es göre / es gärte",
      "lv": "det skulle jäsa"
    },
    "partizipVergangenheit": {
      "de": "gegoren / gegärt",
      "lv": "jäst"
    }
  },
  {
    "infinitiv": {
      "de": "gebären",
      "lv": "att föda"
    },
    "praesens": {
      "de": "sie gebiert",
      "lv": "hon föder"
    },
    "imperfektIndikativ": {
      "de": "sie gebar",
      "lv": "hon födde"
    },
    "imperfektKonjunktiv": {
      "de": "sie gebäre",
      "lv": "hon skulle föda"
    },
    "partizipVergangenheit": {
      "de": "geboren",
      "lv": "fött"
    }
  },
  {
    "infinitiv": {
      "de": "gelingen",
      "lv": "att lyckas"
    },
    "praesens": {
      "de": "es gelingt",
      "lv": "det lyckas"
    },
    "imperfektIndikativ": {
      "de": "es gelang",
      "lv": "det lyckades"
    },
    "imperfektKonjunktiv": {
      "de": "es gelänge",
      "lv": "det skulle lyckas"
    },
    "partizipVergangenheit": {
      "de": "gelungen (es ist)",
      "lv": "lyckats"
    }
  },
  {
    "infinitiv": {
      "de": "gelten",
      "lv": "att gälla"
    },
    "praesens": {
      "de": "er gilt",
      "lv": "han gäller"
    },
    "imperfektIndikativ": {
      "de": "er galt",
      "lv": "han gällde"
    },
    "imperfektKonjunktiv": {
      "de": "er gölte / es gälte",
      "lv": "han skulle gälla"
    },
    "partizipVergangenheit": {
      "de": "gegolten",
      "lv": "gällt"
    }
  },
  {
    "infinitiv": {
      "de": "genesen",
      "lv": "att tillfriskna"
    },
    "praesens": {
      "de": "er genest",
      "lv": "han tillfrisknar"
    },
    "imperfektIndikativ": {
      "de": "er genas",
      "lv": "han tillfrisknade"
    },
    "imperfektKonjunktiv": {
      "de": "er genäse",
      "lv": "han skulle tillfriskna"
    },
    "partizipVergangenheit": {
      "de": "genesen (er ist)",
      "lv": "tillfrisknat"
    }
  },
  {
    "infinitiv": {
      "de": "genießen",
      "lv": "att njuta"
    },
    "praesens": {
      "de": "er genießt",
      "lv": "han njuter"
    },
    "imperfektIndikativ": {
      "de": "er genoss",
      "lv": "han njöt"
    },
    "imperfektKonjunktiv": {
      "de": "er genösse",
      "lv": "han skulle njuta"
    },
    "partizipVergangenheit": {
      "de": "genossen",
      "lv": "njutit"
    }
  },
  {
    "infinitiv": {
      "de": "geschehen",
      "lv": "att hända"
    },
    "praesens": {
      "de": "es geschieht",
      "lv": "det händer"
    },
    "imperfektIndikativ": {
      "de": "es geschah",
      "lv": "det hände"
    },
    "imperfektKonjunktiv": {
      "de": "es geschähe",
      "lv": "det skulle hända"
    },
    "partizipVergangenheit": {
      "de": "geschehen (es ist)",
      "lv": "hänt"
    }
  },
  {
    "infinitiv": {
      "de": "gießen",
      "lv": "att hälla"
    },
    "praesens": {
      "de": "er gießt",
      "lv": "han häller"
    },
    "imperfektIndikativ": {
      "de": "er goss",
      "lv": "han hällde"
    },
    "imperfektKonjunktiv": {
      "de": "er gösse",
      "lv": "han skulle hälla"
    },
    "partizipVergangenheit": {
      "de": "gegossen",
      "lv": "hällt"
    }
  },
  {
    "infinitiv": {
      "de": "gleichen",
      "lv": "att likna"
    },
    "praesens": {
      "de": "er gleicht",
      "lv": "han liknar"
    },
    "imperfektIndikativ": {
      "de": "er glich",
      "lv": "han liknade"
    },
    "imperfektKonjunktiv": {
      "de": "er gliche",
      "lv": "han skulle likna"
    },
    "partizipVergangenheit": {
      "de": "geglichen",
      "lv": "liknat"
    }
  },
  {
    "infinitiv": {
      "de": "gleiten",
      "lv": "att glida"
    },
    "praesens": {
      "de": "er gleitet",
      "lv": "han glider"
    },
    "imperfektIndikativ": {
      "de": "er glitt",
      "lv": "han gled"
    },
    "imperfektKonjunktiv": {
      "de": "er glitte",
      "lv": "han skulle glida"
    },
    "partizipVergangenheit": {
      "de": "geglitten (er ist)",
      "lv": "glidit"
    }
  },
  {
    "infinitiv": {
      "de": "glimmen",
      "lv": "att glöda"
    },
    "praesens": {
      "de": "er glimmt",
      "lv": "det glöder"
    },
    "imperfektIndikativ": {
      "de": "er glimmte / glomm",
      "lv": "det glödde"
    },
    "imperfektKonjunktiv": {
      "de": "er glimmte",
      "lv": "det skulle glöda"
    },
    "partizipVergangenheit": {
      "de": "geglimmt / geglommen",
      "lv": "glött"
    }
  },
  {
    "infinitiv": {
      "de": "graben",
      "lv": "att gräva"
    },
    "praesens": {
      "de": "er gräbt",
      "lv": "han gräver"
    },
    "imperfektIndikativ": {
      "de": "er grub",
      "lv": "han grävde"
    },
    "imperfektKonjunktiv": {
      "de": "er grübe",
      "lv": "han skulle gräva"
    },
    "partizipVergangenheit": {
      "de": "gegraben",
      "lv": "grävt"
    }
  },
  {
    "infinitiv": {
      "de": "greifen",
      "lv": "att gripa"
    },
    "praesens": {
      "de": "er greift",
      "lv": "han griper"
    },
    "imperfektIndikativ": {
      "de": "er griff",
      "lv": "han grep"
    },
    "imperfektKonjunktiv": {
      "de": "er griffe",
      "lv": "han skulle gripa"
    },
    "partizipVergangenheit": {
      "de": "gegriffen",
      "lv": "gripit"
    }
  },
  {
    "infinitiv": {
      "de": "hauen",
      "lv": "att hugga"
    },
    "praesens": {
      "de": "er haut",
      "lv": "han hugger"
    },
    "imperfektIndikativ": {
      "de": "er hieb",
      "lv": "han högg"
    },
    "imperfektKonjunktiv": {
      "de": "er hiebe",
      "lv": "han skulle hugga"
    },
    "partizipVergangenheit": {
      "de": "gehauen",
      "lv": "huggit"
    }
  },
  {
    "infinitiv": {
      "de": "heben",
      "lv": "att lyfta"
    },
    "praesens": {
      "de": "er hebt",
      "lv": "han lyfter"
    },
    "imperfektIndikativ": {
      "de": "er hob",
      "lv": "han lyfte"
    },
    "imperfektKonjunktiv": {
      "de": "er höbe",
      "lv": "han skulle lyfta"
    },
    "partizipVergangenheit": {
      "de": "gehoben",
      "lv": "lyft"
    }
  },
  {
    "infinitiv": {
      "de": "kennen",
      "lv": "att känna / att känna till"
    },
    "praesens": {
      "de": "er kennt",
      "lv": "han känner / känner till"
    },
    "imperfektIndikativ": {
      "de": "kannte",
      "lv": "han kände / kände till"
    },
    "imperfektKonjunktiv": {
      "de": "kannte",
      "lv": "han skulle känna / känna till"
    },
    "partizipVergangenheit": {
      "de": "gekannt",
      "lv": "känt / känt till"
    }
  },
  {
    "infinitiv": {
      "de": "klingen",
      "lv": "att klinga"
    },
    "praesens": {
      "de": "er klingt",
      "lv": "det klingar"
    },
    "imperfektIndikativ": {
      "de": "er klang",
      "lv": "det klingade"
    },
    "imperfektKonjunktiv": {
      "de": "er klänge",
      "lv": "det skulle klinga"
    },
    "partizipVergangenheit": {
      "de": "geklungen",
      "lv": "klingat"
    }
  },
  {
    "infinitiv": {
      "de": "kneifen",
      "lv": "att nypa"
    },
    "praesens": {
      "de": "er kneift",
      "lv": "han nyper"
    },
    "imperfektIndikativ": {
      "de": "er kniff",
      "lv": "han nöp"
    },
    "imperfektKonjunktiv": {
      "de": "er kniffe",
      "lv": "han skulle nypa"
    },
    "partizipVergangenheit": {
      "de": "gekniffen",
      "lv": "nypt"
    }
  },
  {
    "infinitiv": {
      "de": "bleiben",
      "lv": "att stanna"
    },
    "praesens": {
      "de": "er bleibt",
      "lv": "han stannar"
    },
    "imperfektIndikativ": {
      "de": "er blieb",
      "lv": "han stannade"
    },
    "imperfektKonjunktiv": {
      "de": "er bliebe",
      "lv": "han skulle stanna"
    },
    "partizipVergangenheit": {
      "de": "geblieben (er ist)",
      "lv": "stannat"
    }
  },
  {
    "infinitiv": {
      "de": "bleichen",
      "lv": "att blekna"
    },
    "praesens": {
      "de": "er bleicht",
      "lv": "det bleknar"
    },
    "imperfektIndikativ": {
      "de": "blich",
      "lv": "det bleknade"
    },
    "imperfektKonjunktiv": {
      "de": "blich",
      "lv": "det skulle blekna"
    },
    "partizipVergangenheit": {
      "de": "geblichen",
      "lv": "bleknat"
    }
  },
  {
    "infinitiv": {
      "de": "braten",
      "lv": "att steka"
    },
    "praesens": {
      "de": "er brät",
      "lv": "han steker"
    },
    "imperfektIndikativ": {
      "de": "er briet",
      "lv": "han stekte"
    },
    "imperfektKonjunktiv": {
      "de": "er briete",
      "lv": "han skulle steka"
    },
    "partizipVergangenheit": {
      "de": "gebraten",
      "lv": "stekt"
    }
  },
  {
    "infinitiv": {
      "de": "brechen",
      "lv": "att bryta"
    },
    "praesens": {
      "de": "er bricht",
      "lv": "han bryter"
    },
    "imperfektIndikativ": {
      "de": "er brach",
      "lv": "han bröt"
    },
    "imperfektKonjunktiv": {
      "de": "er bräche",
      "lv": "han skulle bryta"
    },
    "partizipVergangenheit": {
      "de": "gebrochen",
      "lv": "brutit"
    }
  },
  {
    "infinitiv": {
      "de": "brennen",
      "lv": "att brinna"
    },
    "praesens": {
      "de": "er brennt",
      "lv": "det brinner"
    },
    "imperfektIndikativ": {
      "de": "brannte",
      "lv": "det brann"
    },
    "imperfektKonjunktiv": {
      "de": "brannte",
      "lv": "det skulle brinna"
    },
    "partizipVergangenheit": {
      "de": "gebrannt",
      "lv": "brunnit"
    }
  },
  {
    "infinitiv": {
      "de": "bringen",
      "lv": "att ta med"
    },
    "praesens": {
      "de": "er bringt",
      "lv": "han tar med"
    },
    "imperfektIndikativ": {
      "de": "er brachte",
      "lv": "han tog med"
    },
    "imperfektKonjunktiv": {
      "de": "er brächte",
      "lv": "han skulle ta med"
    },
    "partizipVergangenheit": {
      "de": "gebracht",
      "lv": "tagit med"
    }
  },
  {
    "infinitiv": {
      "de": "denken",
      "lv": "att tänka"
    },
    "praesens": {
      "de": "er denkt",
      "lv": "han tänker"
    },
    "imperfektIndikativ": {
      "de": "er dachte",
      "lv": "han tänkte"
    },
    "imperfektKonjunktiv": {
      "de": "er dächte",
      "lv": "han skulle tänka"
    },
    "partizipVergangenheit": {
      "de": "gedacht",
      "lv": "tänkt"
    }
  },
  {
    "infinitiv": {
      "de": "dingen",
      "lv": "att leja / att komma överens"
    },
    "praesens": {
      "de": "er dingt",
      "lv": "han lejer / kommer överens"
    },
    "imperfektIndikativ": {
      "de": "dingte",
      "lv": "han lejde / kom överens"
    },
    "imperfektKonjunktiv": {
      "de": "dingte",
      "lv": "han skulle leja / komma överens"
    },
    "partizipVergangenheit": {
      "de": "gedungen",
      "lv": "lejt / kommit överens"
    }
  },
  {
    "infinitiv": {
      "de": "dreschen",
      "lv": "att tröska"
    },
    "praesens": {
      "de": "er drischt",
      "lv": "han tröskar"
    },
    "imperfektIndikativ": {
      "de": "er drasch / er drosch",
      "lv": "han tröskade"
    },
    "imperfektKonjunktiv": {
      "de": "er dräsche / er drösche",
      "lv": "han skulle tröska"
    },
    "partizipVergangenheit": {
      "de": "gedroschen",
      "lv": "tröskat"
    }
  },
  {
    "infinitiv": {
      "de": "dringen",
      "lv": "att tränga in"
    },
    "praesens": {
      "de": "er dringt",
      "lv": "han tränger in"
    },
    "imperfektIndikativ": {
      "de": "er drang",
      "lv": "han trängde in"
    },
    "imperfektKonjunktiv": {
      "de": "er dränge",
      "lv": "han skulle tränga in"
    },
    "partizipVergangenheit": {
      "de": "gedrungen (er ist)",
      "lv": "trängt in"
    }
  },
  {
    "infinitiv": {
      "de": "dünken",
      "lv": "att tyckas"
    },
    "praesens": {
      "de": "es dünkt",
      "lv": "det tycks"
    },
    "imperfektIndikativ": {
      "de": "deuchte",
      "lv": "det tycktes"
    },
    "imperfektKonjunktiv": {
      "de": "deuchte",
      "lv": "det skulle tyckas"
    },
    "partizipVergangenheit": {
      "de": "gedünkt",
      "lv": "tyckts"
    }
  },
  {
    "infinitiv": {
      "de": "dürfen",
      "lv": "att få"
    },
    "praesens": {
      "de": "er darf",
      "lv": "han får"
    },
    "imperfektIndikativ": {
      "de": "durfte",
      "lv": "han fick"
    },
    "imperfektKonjunktiv": {
      "de": "durfte",
      "lv": "han skulle få"
    },
    "partizipVergangenheit": {
      "de": "gedurft",
      "lv": "fått"
    }
  },
  {
    "infinitiv": {
      "de": "empfehlen",
      "lv": "att rekommendera"
    },
    "praesens": {
      "de": "er empfiehlt",
      "lv": "han rekommenderar"
    },
    "imperfektIndikativ": {
      "de": "er empfahl",
      "lv": "han rekommenderade"
    },
    "imperfektKonjunktiv": {
      "de": "er empfähle / er empföhle",
      "lv": "han skulle rekommendera"
    },
    "partizipVergangenheit": {
      "de": "empfohlen",
      "lv": "rekommenderat"
    }
  },
  {
    "infinitiv": {
      "de": "empfinden",
      "lv": "att uppleva"
    },
    "praesens": {
      "de": "er empfindet",
      "lv": "han upplever"
    },
    "imperfektIndikativ": {
      "de": "er empfand",
      "lv": "han upplevde"
    },
    "imperfektKonjunktiv": {
      "de": "er empfände",
      "lv": "han skulle uppleva"
    },
    "partizipVergangenheit": {
      "de": "empfunden",
      "lv": "upplevt"
    }
  },
  {
    "infinitiv": {
      "de": "erlöschen",
      "lv": "att slockna"
    },
    "praesens": {
      "de": "er erlischt",
      "lv": "det slocknar"
    },
    "imperfektIndikativ": {
      "de": "er erlosch",
      "lv": "det slocknade"
    },
    "imperfektKonjunktiv": {
      "de": "er erlösche",
      "lv": "det skulle slockna"
    },
    "partizipVergangenheit": {
      "de": "erloschen (er ist)",
      "lv": "slocknat"
    }
  },
  {
    "infinitiv": {
      "de": "erschrecken",
      "lv": "att förskräckas"
    },
    "praesens": {
      "de": "er erschrickt",
      "lv": "han förskräcks"
    },
    "imperfektIndikativ": {
      "de": "er erschrak",
      "lv": "han förskräcktes"
    },
    "imperfektKonjunktiv": {
      "de": "er erschräke",
      "lv": "han skulle förskräckas"
    },
    "partizipVergangenheit": {
      "de": "erschrocken (er ist)",
      "lv": "förskräckts"
    }
  },
  {
    "infinitiv": {
      "de": "essen",
      "lv": "att äta"
    },
    "praesens": {
      "de": "er isst",
      "lv": "han äter"
    },
    "imperfektIndikativ": {
      "de": "er ass",
      "lv": "han åt"
    },
    "imperfektKonjunktiv": {
      "de": "er äße",
      "lv": "han skulle äta"
    },
    "partizipVergangenheit": {
      "de": "gegessen",
      "lv": "ätit"
    }
  },
  {
    "infinitiv": {
      "de": "fahren",
      "lv": "att åka"
    },
    "praesens": {
      "de": "er fährt",
      "lv": "han åker"
    },
    "imperfektIndikativ": {
      "de": "er fuhr",
      "lv": "han åkte"
    },
    "imperfektKonjunktiv": {
      "de": "er führe",
      "lv": "han skulle åka"
    },
    "partizipVergangenheit": {
      "de": "gefahren (er ist)",
      "lv": "åkt"
    }
  },
  {
    "infinitiv": {
      "de": "fallen",
      "lv": "att falla"
    },
    "praesens": {
      "de": "er fällt",
      "lv": "han faller"
    },
    "imperfektIndikativ": {
      "de": "er fiel",
      "lv": "han föll"
    },
    "imperfektKonjunktiv": {
      "de": "er fiele",
      "lv": "han skulle falla"
    },
    "partizipVergangenheit": {
      "de": "gefallen (er ist)",
      "lv": "fallit"
    }
  },
  {
    "infinitiv": {
      "de": "fangen",
      "lv": "att fånga"
    },
    "praesens": {
      "de": "er fängt",
      "lv": "han fångar"
    },
    "imperfektIndikativ": {
      "de": "er fing",
      "lv": "han fångade"
    },
    "imperfektKonjunktiv": {
      "de": "er finge",
      "lv": "han skulle fånga"
    },
    "partizipVergangenheit": {
      "de": "gefangen",
      "lv": "fångat"
    }
  },
  {
    "infinitiv": {
      "de": "finden",
      "lv": "att hitta"
    },
    "praesens": {
      "de": "er findet",
      "lv": "han hittar"
    },
    "imperfektIndikativ": {
      "de": "er fand",
      "lv": "han hittade"
    },
    "imperfektKonjunktiv": {
      "de": "er fände",
      "lv": "han skulle hitta"
    },
    "partizipVergangenheit": {
      "de": "gefunden",
      "lv": "hittat"
    }
  },
  {
    "infinitiv": {
      "de": "fliegen",
      "lv": "att flyga"
    },
    "praesens": {
      "de": "er fliegt",
      "lv": "han flyger"
    },
    "imperfektIndikativ": {
      "de": "er flog",
      "lv": "han flög"
    },
    "imperfektKonjunktiv": {
      "de": "er flöge",
      "lv": "han skulle flyga"
    },
    "partizipVergangenheit": {
      "de": "geflogen (er ist)",
      "lv": "flugit"
    }
  },
  {
    "infinitiv": {
      "de": "fliehen",
      "lv": "att fly"
    },
    "praesens": {
      "de": "er flieht",
      "lv": "han flyr"
    },
    "imperfektIndikativ": {
      "de": "er floh",
      "lv": "han flydde"
    },
    "imperfektKonjunktiv": {
      "de": "er flöhe",
      "lv": "han skulle fly"
    },
    "partizipVergangenheit": {
      "de": "geflohen (er ist)",
      "lv": "flytt"
    }
  },
  {
    "infinitiv": {
      "de": "fließen",
      "lv": "att flyta"
    },
    "praesens": {
      "de": "er fließt",
      "lv": "det flyter"
    },
    "imperfektIndikativ": {
      "de": "er floss",
      "lv": "det flöt"
    },
    "imperfektKonjunktiv": {
      "de": "er flösse",
      "lv": "det skulle flyta"
    },
    "partizipVergangenheit": {
      "de": "geflossen (er ist)",
      "lv": "flutit"
    }
  },
  {
    "infinitiv": {
      "de": "fressen",
      "lv": "att äta / att sluka"
    },
    "praesens": {
      "de": "er frisst",
      "lv": "han äter / slukar"
    },
    "imperfektIndikativ": {
      "de": "er frass",
      "lv": "han åt / slukade"
    },
    "imperfektKonjunktiv": {
      "de": "er fräße",
      "lv": "han skulle äta / sluka"
    },
    "partizipVergangenheit": {
      "de": "gefressen",
      "lv": "ätit / slukat"
    }
  },
  {
    "infinitiv": {
      "de": "frieren",
      "lv": "att frysa"
    },
    "praesens": {
      "de": "er friert",
      "lv": "han fryser"
    },
    "imperfektIndikativ": {
      "de": "er fror",
      "lv": "han frös"
    },
    "imperfektKonjunktiv": {
      "de": "er fröre",
      "lv": "han skulle frysa"
    },
    "partizipVergangenheit": {
      "de": "gefroren",
      "lv": "frusit"
    }
  },
  {
    "infinitiv": {
      "de": "geben",
      "lv": "att ge"
    },
    "praesens": {
      "de": "er gibt",
      "lv": "han ger"
    },
    "imperfektIndikativ": {
      "de": "er gab",
      "lv": "han gav"
    },
    "imperfektKonjunktiv": {
      "de": "er gäbe",
      "lv": "han skulle ge"
    },
    "partizipVergangenheit": {
      "de": "gegeben",
      "lv": "gett"
    }
  },
  {
    "infinitiv": {
      "de": "gedeihen",
      "lv": "att frodas"
    },
    "praesens": {
      "de": "er gedeiht",
      "lv": "han frodas"
    },
    "imperfektIndikativ": {
      "de": "er gedieh",
      "lv": "han frodades"
    },
    "imperfektKonjunktiv": {
      "de": "er gediehe",
      "lv": "han skulle frodas"
    },
    "partizipVergangenheit": {
      "de": "gediehen (er ist)",
      "lv": "frodats"
    }
  },
  {
    "infinitiv": {
      "de": "gehen",
      "lv": "att gå"
    },
    "praesens": {
      "de": "er geht",
      "lv": "han går"
    },
    "imperfektIndikativ": {
      "de": "er ging",
      "lv": "han gick"
    },
    "imperfektKonjunktiv": {
      "de": "er ginge",
      "lv": "han skulle gå"
    },
    "partizipVergangenheit": {
      "de": "gegangen (er ist)",
      "lv": "gått"
    }
  },
  {
    "infinitiv": {
      "de": "gewinnen",
      "lv": "att vinna"
    },
    "praesens": {
      "de": "er gewinnt",
      "lv": "han vinner"
    },
    "imperfektIndikativ": {
      "de": "er gewann",
      "lv": "han vann"
    },
    "imperfektKonjunktiv": {
      "de": "er gewönne / er gewänne",
      "lv": "han skulle vinna"
    },
    "partizipVergangenheit": {
      "de": "gewonnen",
      "lv": "vunnit"
    }
  },
  {
    "infinitiv": {
      "de": "haben",
      "lv": "att ha"
    },
    "praesens": {
      "de": "er hat",
      "lv": "han har"
    },
    "imperfektIndikativ": {
      "de": "hatte",
      "lv": "han hade"
    },
    "imperfektKonjunktiv": {
      "de": "hatte",
      "lv": "han skulle ha"
    },
    "partizipVergangenheit": {
      "de": "gehabt",
      "lv": "haft"
    }
  },
  {
    "infinitiv": {
      "de": "halten",
      "lv": "att hålla"
    },
    "praesens": {
      "de": "er hält",
      "lv": "han håller"
    },
    "imperfektIndikativ": {
      "de": "er hielt",
      "lv": "han höll"
    },
    "imperfektKonjunktiv": {
      "de": "er hielte",
      "lv": "han skulle hålla"
    },
    "partizipVergangenheit": {
      "de": "gehalten",
      "lv": "hållit"
    }
  },
  {
    "infinitiv": {
      "de": "heißen",
      "lv": "att kalla / att heta"
    },
    "praesens": {
      "de": "er heißt",
      "lv": "han kallar / heter"
    },
    "imperfektIndikativ": {
      "de": "er hieß",
      "lv": "han kallade / hette"
    },
    "imperfektKonjunktiv": {
      "de": "er hieße",
      "lv": "han skulle kalla / heta"
    },
    "partizipVergangenheit": {
      "de": "geheißen",
      "lv": "kallat / hetat"
    }
  },
  {
    "infinitiv": {
      "de": "helfen",
      "lv": "att hjälpa"
    },
    "praesens": {
      "de": "er hilft",
      "lv": "han hjälper"
    },
    "imperfektIndikativ": {
      "de": "er half",
      "lv": "han hjälpte"
    },
    "imperfektKonjunktiv": {
      "de": "er hülfe / er hälfe",
      "lv": "han skulle hjälpa"
    },
    "partizipVergangenheit": {
      "de": "geholfen",
      "lv": "hjälpt"
    }
  },
  {
    "infinitiv": {
      "de": "kommen",
      "lv": "att komma"
    },
    "praesens": {
      "de": "er kommt",
      "lv": "han kommer"
    },
    "imperfektIndikativ": {
      "de": "er kam",
      "lv": "han kom"
    },
    "imperfektKonjunktiv": {
      "de": "er käme",
      "lv": "han skulle komma"
    },
    "partizipVergangenheit": {
      "de": "gekommen (er ist)",
      "lv": "kommit"
    }
  },
  {
    "infinitiv": {
      "de": "können",
      "lv": "att kunna"
    },
    "praesens": {
      "de": "er kann",
      "lv": "han kan"
    },
    "imperfektIndikativ": {
      "de": "konnte",
      "lv": "han kunde"
    },
    "imperfektKonjunktiv": {
      "de": "konnte",
      "lv": "han skulle kunna"
    },
    "partizipVergangenheit": {
      "de": "gekonnt",
      "lv": "kunnat"
    }
  },
  {
    "infinitiv": {
      "de": "kriechen",
      "lv": "att krypa"
    },
    "praesens": {
      "de": "er kriecht",
      "lv": "han kryper"
    },
    "imperfektIndikativ": {
      "de": "er kroch",
      "lv": "han kröp"
    },
    "imperfektKonjunktiv": {
      "de": "er kröche",
      "lv": "han skulle krypa"
    },
    "partizipVergangenheit": {
      "de": "gekrochen (er ist)",
      "lv": "krupit"
    }
  },
  {
    "infinitiv": {
      "de": "laden",
      "lv": "att lasta / att bjuda in"
    },
    "praesens": {
      "de": "er lädt",
      "lv": "han lastar / bjuder in"
    },
    "imperfektIndikativ": {
      "de": "er lud",
      "lv": "han lastade / bjöd in"
    },
    "imperfektKonjunktiv": {
      "de": "er lüde",
      "lv": "han skulle lasta / bjuda in"
    },
    "partizipVergangenheit": {
      "de": "geladen",
      "lv": "lastat / bjudit in"
    }
  },
  {
    "infinitiv": {
      "de": "lassen",
      "lv": "att låta"
    },
    "praesens": {
      "de": "er lässt",
      "lv": "han låter"
    },
    "imperfektIndikativ": {
      "de": "er ließ",
      "lv": "han lät"
    },
    "imperfektKonjunktiv": {
      "de": "er ließe",
      "lv": "han skulle låta"
    },
    "partizipVergangenheit": {
      "de": "gelassen",
      "lv": "låtit"
    }
  },
  {
    "infinitiv": {
      "de": "laufen",
      "lv": "att springa"
    },
    "praesens": {
      "de": "er läuft",
      "lv": "han springer"
    },
    "imperfektIndikativ": {
      "de": "er lief",
      "lv": "han sprang"
    },
    "imperfektKonjunktiv": {
      "de": "er liefe",
      "lv": "han skulle springa"
    },
    "partizipVergangenheit": {
      "de": "gelaufen (er ist)",
      "lv": "sprungit"
    }
  },
  {
    "infinitiv": {
      "de": "leiden",
      "lv": "att lida"
    },
    "praesens": {
      "de": "er leidet",
      "lv": "han lider"
    },
    "imperfektIndikativ": {
      "de": "er litt",
      "lv": "han led"
    },
    "imperfektKonjunktiv": {
      "de": "er litte",
      "lv": "han skulle lida"
    },
    "partizipVergangenheit": {
      "de": "gelitten",
      "lv": "lidit"
    }
  },
  {
    "infinitiv": {
      "de": "leihen",
      "lv": "att låna ut / att låna"
    },
    "praesens": {
      "de": "er leiht",
      "lv": "han lånar ut / lånar"
    },
    "imperfektIndikativ": {
      "de": "er lieh",
      "lv": "han lånade ut / lånade"
    },
    "imperfektKonjunktiv": {
      "de": "er liehe",
      "lv": "han skulle låna ut / låna"
    },
    "partizipVergangenheit": {
      "de": "geliehen",
      "lv": "lånat ut / lånat"
    }
  },
  {
    "infinitiv": {
      "de": "lesen",
      "lv": "att läsa"
    },
    "praesens": {
      "de": "er liest",
      "lv": "han läser"
    },
    "imperfektIndikativ": {
      "de": "er las",
      "lv": "han läste"
    },
    "imperfektKonjunktiv": {
      "de": "er läse",
      "lv": "han skulle läsa"
    },
    "partizipVergangenheit": {
      "de": "gelesen",
      "lv": "läst"
    }
  },
  {
    "infinitiv": {
      "de": "liegen",
      "lv": "att ligga"
    },
    "praesens": {
      "de": "er liegt",
      "lv": "han ligger"
    },
    "imperfektIndikativ": {
      "de": "er lag",
      "lv": "han låg"
    },
    "imperfektKonjunktiv": {
      "de": "er läge",
      "lv": "han skulle ligga"
    },
    "partizipVergangenheit": {
      "de": "gelegen",
      "lv": "legat"
    }
  },
  {
    "infinitiv": {
      "de": "lügen",
      "lv": "att ljuga"
    },
    "praesens": {
      "de": "er lügt",
      "lv": "han ljuger"
    },
    "imperfektIndikativ": {
      "de": "er log",
      "lv": "han ljög"
    },
    "imperfektKonjunktiv": {
      "de": "er löge",
      "lv": "han skulle ljuga"
    },
    "partizipVergangenheit": {
      "de": "gelogen",
      "lv": "ljugit"
    }
  },
  {
    "infinitiv": {
      "de": "mahlen",
      "lv": "att mala"
    },
    "praesens": {
      "de": "er mahlt",
      "lv": "han mal"
    },
    "imperfektIndikativ": {
      "de": "er mahlte",
      "lv": "han malde"
    },
    "imperfektKonjunktiv": {
      "de": "er malte",
      "lv": "han skulle mala"
    },
    "partizipVergangenheit": {
      "de": "gemahlen",
      "lv": "malt"
    }
  },
  {
    "infinitiv": {
      "de": "meiden",
      "lv": "att undvika"
    },
    "praesens": {
      "de": "er meidet",
      "lv": "han undviker"
    },
    "imperfektIndikativ": {
      "de": "er mied",
      "lv": "han undvek"
    },
    "imperfektKonjunktiv": {
      "de": "er miede",
      "lv": "han skulle undvika"
    },
    "partizipVergangenheit": {
      "de": "gemieden",
      "lv": "undvikit"
    }
  },
  {
    "infinitiv": {
      "de": "melken",
      "lv": "att mjölka"
    },
    "praesens": {
      "de": "er milkt / er melkt",
      "lv": "han mjölkar"
    },
    "imperfektIndikativ": {
      "de": "er molk / er melkte",
      "lv": "han mjölkade"
    },
    "imperfektKonjunktiv": {
      "de": "er mölke / er melkte",
      "lv": "han skulle mjölka"
    },
    "partizipVergangenheit": {
      "de": "gemolken / gemelkt",
      "lv": "mjölkat"
    }
  },
  {
    "infinitiv": {
      "de": "messen",
      "lv": "att mäta"
    },
    "praesens": {
      "de": "er misst",
      "lv": "han mäter"
    },
    "imperfektIndikativ": {
      "de": "er mass",
      "lv": "han mätte"
    },
    "imperfektKonjunktiv": {
      "de": "er mäße",
      "lv": "han skulle mäta"
    },
    "partizipVergangenheit": {
      "de": "gemessen",
      "lv": "mätt"
    }
  },
  {
    "infinitiv": {
      "de": "misslingen",
      "lv": "att misslyckas"
    },
    "praesens": {
      "de": "es misslingt",
      "lv": "det misslyckas"
    },
    "imperfektIndikativ": {
      "de": "misslang",
      "lv": "det misslyckades"
    },
    "imperfektKonjunktiv": {
      "de": "misslang",
      "lv": "det skulle misslyckas"
    },
    "partizipVergangenheit": {
      "de": "misslungen",
      "lv": "misslyckats"
    }
  },
  {
    "infinitiv": {
      "de": "mögen",
      "lv": "att tycka om"
    },
    "praesens": {
      "de": "er mag",
      "lv": "han tycker om"
    },
    "imperfektIndikativ": {
      "de": "mochte",
      "lv": "han tyckte om"
    },
    "imperfektKonjunktiv": {
      "de": "mochte",
      "lv": "han skulle tycka om"
    },
    "partizipVergangenheit": {
      "de": "gemocht",
      "lv": "tyckt om"
    }
  },
  {
    "infinitiv": {
      "de": "müssen",
      "lv": "att vara tvungen"
    },
    "praesens": {
      "de": "er muss",
      "lv": "han är tvungen"
    },
    "imperfektIndikativ": {
      "de": "musste",
      "lv": "han var tvungen"
    },
    "imperfektKonjunktiv": {
      "de": "musste",
      "lv": "han skulle vara tvungen"
    },
    "partizipVergangenheit": {
      "de": "gemusst",
      "lv": "varit tvungen"
    }
  },
  {
    "infinitiv": {
      "de": "nehmen",
      "lv": "att ta"
    },
    "praesens": {
      "de": "er nimmt",
      "lv": "han tar"
    },
    "imperfektIndikativ": {
      "de": "er nahm",
      "lv": "han tog"
    },
    "imperfektKonjunktiv": {
      "de": "er nähme",
      "lv": "han skulle ta"
    },
    "partizipVergangenheit": {
      "de": "genommen",
      "lv": "tagit"
    }
  },
  {
    "infinitiv": {
      "de": "nennen",
      "lv": "att namnge"
    },
    "praesens": {
      "de": "er nennt",
      "lv": "han namnger"
    },
    "imperfektIndikativ": {
      "de": "er nannte",
      "lv": "han namngav"
    },
    "imperfektKonjunktiv": {
      "de": "er nennte",
      "lv": "han skulle namnge"
    },
    "partizipVergangenheit": {
      "de": "genannt",
      "lv": "namngett"
    }
  },
  {
    "infinitiv": {
      "de": "pfeifen",
      "lv": "att vissla"
    },
    "praesens": {
      "de": "er pfeift",
      "lv": "han visslar"
    },
    "imperfektIndikativ": {
      "de": "er pfiff",
      "lv": "han visslade"
    },
    "imperfektKonjunktiv": {
      "de": "er pfiffe",
      "lv": "han skulle vissla"
    },
    "partizipVergangenheit": {
      "de": "gepfiffen",
      "lv": "visslat"
    }
  },
  {
    "infinitiv": {
      "de": "pflegen",
      "lv": "att vårda"
    },
    "praesens": {
      "de": "er pflegt",
      "lv": "han vårdar"
    },
    "imperfektIndikativ": {
      "de": "pflegte / pflog",
      "lv": "han vårdade"
    },
    "imperfektKonjunktiv": {
      "de": "pflegte / pflog",
      "lv": "han skulle vårda"
    },
    "partizipVergangenheit": {
      "de": "gepflegt / gepflogen",
      "lv": "vårdat"
    }
  },
  {
    "infinitiv": {
      "de": "preisen",
      "lv": "att prisa"
    },
    "praesens": {
      "de": "er preist",
      "lv": "han prisar"
    },
    "imperfektIndikativ": {
      "de": "er pries",
      "lv": "han prisade"
    },
    "imperfektKonjunktiv": {
      "de": "er priese",
      "lv": "han skulle prisa"
    },
    "partizipVergangenheit": {
      "de": "gepriesen",
      "lv": "prisat"
    }
  },
  {
    "infinitiv": {
      "de": "quellen",
      "lv": "att svälla"
    },
    "praesens": {
      "de": "er quillt",
      "lv": "det sväller"
    },
    "imperfektIndikativ": {
      "de": "er quoll",
      "lv": "det svällde"
    },
    "imperfektKonjunktiv": {
      "de": "er quölle",
      "lv": "det skulle svälla"
    },
    "partizipVergangenheit": {
      "de": "gequollen (er ist)",
      "lv": "svällt"
    }
  },
  {
    "infinitiv": {
      "de": "raten",
      "lv": "att råda / att gissa"
    },
    "praesens": {
      "de": "er rät",
      "lv": "han råder / gissar"
    },
    "imperfektIndikativ": {
      "de": "er riet",
      "lv": "han rådde / gissade"
    },
    "imperfektKonjunktiv": {
      "de": "er riete",
      "lv": "han skulle råda / gissa"
    },
    "partizipVergangenheit": {
      "de": "geraten",
      "lv": "rått / gissat"
    }
  },
  {
    "infinitiv": {
      "de": "reiben",
      "lv": "att gnida"
    },
    "praesens": {
      "de": "er reibt",
      "lv": "han gnider"
    },
    "imperfektIndikativ": {
      "de": "er rieb",
      "lv": "han gned"
    },
    "imperfektKonjunktiv": {
      "de": "er riebe",
      "lv": "han skulle gnida"
    },
    "partizipVergangenheit": {
      "de": "gerieben",
      "lv": "gnidit"
    }
  },
  {
    "infinitiv": {
      "de": "reißen",
      "lv": "att riva"
    },
    "praesens": {
      "de": "er reißt",
      "lv": "han river"
    },
    "imperfektIndikativ": {
      "de": "er riss",
      "lv": "han rev"
    },
    "imperfektKonjunktiv": {
      "de": "er risse",
      "lv": "han skulle riva"
    },
    "partizipVergangenheit": {
      "de": "gerissen",
      "lv": "rivit"
    }
  },
  {
    "infinitiv": {
      "de": "reiten",
      "lv": "att rida"
    },
    "praesens": {
      "de": "er reitet",
      "lv": "han rider"
    },
    "imperfektIndikativ": {
      "de": "er ritt",
      "lv": "han red"
    },
    "imperfektKonjunktiv": {
      "de": "er ritte",
      "lv": "han skulle rida"
    },
    "partizipVergangenheit": {
      "de": "geritten (er ist)",
      "lv": "ridit"
    }
  },
  {
    "infinitiv": {
      "de": "rennen",
      "lv": "att löpa"
    },
    "praesens": {
      "de": "er rennt",
      "lv": "han löper"
    },
    "imperfektIndikativ": {
      "de": "er rannte",
      "lv": "han löpte"
    },
    "imperfektKonjunktiv": {
      "de": "er rennte",
      "lv": "han skulle löpa"
    },
    "partizipVergangenheit": {
      "de": "gerannt",
      "lv": "löpt"
    }
  },
  {
    "infinitiv": {
      "de": "riechen",
      "lv": "att lukta"
    },
    "praesens": {
      "de": "er riecht",
      "lv": "han luktar"
    },
    "imperfektIndikativ": {
      "de": "er roch",
      "lv": "han luktade"
    },
    "imperfektKonjunktiv": {
      "de": "er röche",
      "lv": "han skulle lukta"
    },
    "partizipVergangenheit": {
      "de": "gerochen",
      "lv": "luktat"
    }
  },
  {
    "infinitiv": {
      "de": "ringen",
      "lv": "att brottas"
    },
    "praesens": {
      "de": "er ringt",
      "lv": "han brottas"
    },
    "imperfektIndikativ": {
      "de": "er rang",
      "lv": "han brottades"
    },
    "imperfektKonjunktiv": {
      "de": "er ränge",
      "lv": "han skulle brottas"
    },
    "partizipVergangenheit": {
      "de": "gerungen",
      "lv": "brottats"
    }
  },
  {
    "infinitiv": {
      "de": "rinnen",
      "lv": "att rinna"
    },
    "praesens": {
      "de": "er rinnt",
      "lv": "det rinner"
    },
    "imperfektIndikativ": {
      "de": "er rann",
      "lv": "det rann"
    },
    "imperfektKonjunktiv": {
      "de": "er ränne / er rönne",
      "lv": "det skulle rinna"
    },
    "partizipVergangenheit": {
      "de": "geronnen (er ist)",
      "lv": "runnit"
    }
  },
  {
    "infinitiv": {
      "de": "rufen",
      "lv": "att ropa"
    },
    "praesens": {
      "de": "er ruft",
      "lv": "han ropar"
    },
    "imperfektIndikativ": {
      "de": "er rief",
      "lv": "han ropade"
    },
    "imperfektKonjunktiv": {
      "de": "er riefe",
      "lv": "han skulle ropa"
    },
    "partizipVergangenheit": {
      "de": "gerufen",
      "lv": "ropat"
    }
  },
  {
    "infinitiv": {
      "de": "salzen",
      "lv": "att salta"
    },
    "praesens": {
      "de": "er salzt",
      "lv": "han saltar"
    },
    "imperfektIndikativ": {
      "de": "er salzte",
      "lv": "han saltade"
    },
    "imperfektKonjunktiv": {
      "de": "er salzte",
      "lv": "han skulle salta"
    },
    "partizipVergangenheit": {
      "de": "gesalzen",
      "lv": "saltat"
    }
  },
  {
    "infinitiv": {
      "de": "saufen",
      "lv": "att supa / att dricka"
    },
    "praesens": {
      "de": "er säuft",
      "lv": "han super / dricker"
    },
    "imperfektIndikativ": {
      "de": "er soff",
      "lv": "han söp / drack"
    },
    "imperfektKonjunktiv": {
      "de": "er söffe",
      "lv": "han skulle supa / dricka"
    },
    "partizipVergangenheit": {
      "de": "gesoffen",
      "lv": "supit / druckit"
    }
  },
  {
    "infinitiv": {
      "de": "saugen",
      "lv": "att suga"
    },
    "praesens": {
      "de": "er saugt",
      "lv": "han suger"
    },
    "imperfektIndikativ": {
      "de": "er sog",
      "lv": "han sög"
    },
    "imperfektKonjunktiv": {
      "de": "er söge",
      "lv": "han skulle suga"
    },
    "partizipVergangenheit": {
      "de": "gesogen",
      "lv": "sugit"
    }
  },
  {
    "infinitiv": {
      "de": "schaffen",
      "lv": "att skapa"
    },
    "praesens": {
      "de": "er schafft",
      "lv": "han skapar"
    },
    "imperfektIndikativ": {
      "de": "er schuf",
      "lv": "han skapade"
    },
    "imperfektKonjunktiv": {
      "de": "er schüfe",
      "lv": "han skulle skapa"
    },
    "partizipVergangenheit": {
      "de": "geschaffen",
      "lv": "skapat"
    }
  },
  {
    "infinitiv": {
      "de": "schallen",
      "lv": "att ljuda"
    },
    "praesens": {
      "de": "es schallt",
      "lv": "det ljuder"
    },
    "imperfektIndikativ": {
      "de": "schallte / scholl",
      "lv": "det ljöd"
    },
    "imperfektKonjunktiv": {
      "de": "schallte / scholl",
      "lv": "det skulle ljuda"
    },
    "partizipVergangenheit": {
      "de": "geschallt",
      "lv": "ljudit"
    }
  },
  {
    "infinitiv": {
      "de": "scheiden",
      "lv": "att skilja / att skiljas"
    },
    "praesens": {
      "de": "er scheidet",
      "lv": "han skiljer / skiljs"
    },
    "imperfektIndikativ": {
      "de": "er schied",
      "lv": "han skilde / skildes"
    },
    "imperfektKonjunktiv": {
      "de": "er schiede",
      "lv": "han skulle skilja / skiljas"
    },
    "partizipVergangenheit": {
      "de": "geschieden (er hat / er ist)",
      "lv": "skilt / skilts"
    }
  },
  {
    "infinitiv": {
      "de": "scheinen",
      "lv": "att lysa / att verka"
    },
    "praesens": {
      "de": "er scheint",
      "lv": "han lyser / verkar"
    },
    "imperfektIndikativ": {
      "de": "er schien",
      "lv": "han lyste / verkade"
    },
    "imperfektKonjunktiv": {
      "de": "er schiene",
      "lv": "han skulle lysa / verka"
    },
    "partizipVergangenheit": {
      "de": "geschienen",
      "lv": "lyst / verkat"
    }
  },
  {
    "infinitiv": {
      "de": "schelten",
      "lv": "att skälla ut"
    },
    "praesens": {
      "de": "er schilt",
      "lv": "han skäller ut"
    },
    "imperfektIndikativ": {
      "de": "er schalt",
      "lv": "han skällde ut"
    },
    "imperfektKonjunktiv": {
      "de": "er schölte / er schälte",
      "lv": "han skulle skälla ut"
    },
    "partizipVergangenheit": {
      "de": "gescholten",
      "lv": "skällt ut"
    }
  },
  {
    "infinitiv": {
      "de": "scheren",
      "lv": "att klippa"
    },
    "praesens": {
      "de": "er schert",
      "lv": "han klipper"
    },
    "imperfektIndikativ": {
      "de": "schor / scherte",
      "lv": "han klippte"
    },
    "imperfektKonjunktiv": {
      "de": "schor / scherte",
      "lv": "han skulle klippa"
    },
    "partizipVergangenheit": {
      "de": "geschoren / geschert",
      "lv": "klippt"
    }
  },
  {
    "infinitiv": {
      "de": "schieben",
      "lv": "att skjuta"
    },
    "praesens": {
      "de": "er schiebt",
      "lv": "han skjuter"
    },
    "imperfektIndikativ": {
      "de": "er schob",
      "lv": "han sköt"
    },
    "imperfektKonjunktiv": {
      "de": "er schöbe",
      "lv": "han skulle skjuta"
    },
    "partizipVergangenheit": {
      "de": "geschoben",
      "lv": "skjutit"
    }
  },
  {
    "infinitiv": {
      "de": "schießen",
      "lv": "att skjuta"
    },
    "praesens": {
      "de": "er schießt",
      "lv": "han skjuter"
    },
    "imperfektIndikativ": {
      "de": "er schoss",
      "lv": "han sköt"
    },
    "imperfektKonjunktiv": {
      "de": "er schösse",
      "lv": "han skulle skjuta"
    },
    "partizipVergangenheit": {
      "de": "geschossen",
      "lv": "skjutit"
    }
  },
  {
    "infinitiv": {
      "de": "schinden",
      "lv": "att plåga"
    },
    "praesens": {
      "de": "er schindet",
      "lv": "han plågar"
    },
    "imperfektIndikativ": {
      "de": "schindete",
      "lv": "han plågade"
    },
    "imperfektKonjunktiv": {
      "de": "schindete",
      "lv": "han skulle plåga"
    },
    "partizipVergangenheit": {
      "de": "geschunden",
      "lv": "plågat"
    }
  },
  {
    "infinitiv": {
      "de": "schlafen",
      "lv": "att sova"
    },
    "praesens": {
      "de": "er schläft",
      "lv": "han sover"
    },
    "imperfektIndikativ": {
      "de": "er schlief",
      "lv": "han sov"
    },
    "imperfektKonjunktiv": {
      "de": "er schliefe",
      "lv": "han skulle sova"
    },
    "partizipVergangenheit": {
      "de": "geschlafen",
      "lv": "sovit"
    }
  },
  {
    "infinitiv": {
      "de": "schlagen",
      "lv": "att slå"
    },
    "praesens": {
      "de": "er schlägt",
      "lv": "han slår"
    },
    "imperfektIndikativ": {
      "de": "er schlug",
      "lv": "han slog"
    },
    "imperfektKonjunktiv": {
      "de": "er schlüge",
      "lv": "han skulle slå"
    },
    "partizipVergangenheit": {
      "de": "geschlagen",
      "lv": "slagit"
    }
  },
  {
    "infinitiv": {
      "de": "schleichen",
      "lv": "att smyga"
    },
    "praesens": {
      "de": "er schleicht",
      "lv": "han smyger"
    },
    "imperfektIndikativ": {
      "de": "er schlich",
      "lv": "han smög"
    },
    "imperfektKonjunktiv": {
      "de": "er schliche",
      "lv": "han skulle smyga"
    },
    "partizipVergangenheit": {
      "de": "geschlichen (er ist)",
      "lv": "smugit"
    }
  },
  {
    "infinitiv": {
      "de": "schleifen",
      "lv": "att slipa"
    },
    "praesens": {
      "de": "er schleift",
      "lv": "han slipar"
    },
    "imperfektIndikativ": {
      "de": "er schliff",
      "lv": "han slipade"
    },
    "imperfektKonjunktiv": {
      "de": "er schliffe",
      "lv": "han skulle slipa"
    },
    "partizipVergangenheit": {
      "de": "geschliffen",
      "lv": "slipat"
    }
  },
  {
    "infinitiv": {
      "de": "schließen",
      "lv": "att stänga"
    },
    "praesens": {
      "de": "er schließt",
      "lv": "han stänger"
    },
    "imperfektIndikativ": {
      "de": "er schloss",
      "lv": "han stängde"
    },
    "imperfektKonjunktiv": {
      "de": "er schlösse",
      "lv": "han skulle stänga"
    },
    "partizipVergangenheit": {
      "de": "geschlossen",
      "lv": "stängt"
    }
  },
  {
    "infinitiv": {
      "de": "schlingen",
      "lv": "att svälja"
    },
    "praesens": {
      "de": "er schlingt",
      "lv": "han sväljer"
    },
    "imperfektIndikativ": {
      "de": "er schlang",
      "lv": "han svalde"
    },
    "imperfektKonjunktiv": {
      "de": "er schlänge",
      "lv": "han skulle svälja"
    },
    "partizipVergangenheit": {
      "de": "geschlungen",
      "lv": "svalt"
    }
  },
  {
    "infinitiv": {
      "de": "schmeißen",
      "lv": "att slänga"
    },
    "praesens": {
      "de": "er schmeißt",
      "lv": "han slänger"
    },
    "imperfektIndikativ": {
      "de": "er schmiss",
      "lv": "han slängde"
    },
    "imperfektKonjunktiv": {
      "de": "er schmisse",
      "lv": "han skulle slänga"
    },
    "partizipVergangenheit": {
      "de": "geschmissen",
      "lv": "slängt"
    }
  },
  {
    "infinitiv": {
      "de": "schmelzen",
      "lv": "att smälta"
    },
    "praesens": {
      "de": "er schmilzt",
      "lv": "det smälter"
    },
    "imperfektIndikativ": {
      "de": "er schmolz",
      "lv": "det smälte"
    },
    "imperfektKonjunktiv": {
      "de": "er schmölze",
      "lv": "det skulle smälta"
    },
    "partizipVergangenheit": {
      "de": "geschmolzen (er ist)",
      "lv": "smält"
    }
  },
  {
    "infinitiv": {
      "de": "schnauben",
      "lv": "att fnysa"
    },
    "praesens": {
      "de": "er schnaubt",
      "lv": "han fnyser"
    },
    "imperfektIndikativ": {
      "de": "schnaubte / schnob",
      "lv": "han fnös"
    },
    "imperfektKonjunktiv": {
      "de": "schnaubte / schnob",
      "lv": "han skulle fnysa"
    },
    "partizipVergangenheit": {
      "de": "geschnaubt / geschnoben",
      "lv": "fnyst"
    }
  },
  {
    "infinitiv": {
      "de": "schneiden",
      "lv": "att skära"
    },
    "praesens": {
      "de": "er schneidet",
      "lv": "han skär"
    },
    "imperfektIndikativ": {
      "de": "er schnitt",
      "lv": "han skar"
    },
    "imperfektKonjunktiv": {
      "de": "er schnitte",
      "lv": "han skulle skära"
    },
    "partizipVergangenheit": {
      "de": "geschnitten",
      "lv": "skurit"
    }
  },
  {
    "infinitiv": {
      "de": "schreiben",
      "lv": "att skriva"
    },
    "praesens": {
      "de": "er schreibt",
      "lv": "han skriver"
    },
    "imperfektIndikativ": {
      "de": "er schrieb",
      "lv": "han skrev"
    },
    "imperfektKonjunktiv": {
      "de": "er schriebe",
      "lv": "han skulle skriva"
    },
    "partizipVergangenheit": {
      "de": "geschrieben",
      "lv": "skrivit"
    }
  },
  {
    "infinitiv": {
      "de": "schreien",
      "lv": "att skrika"
    },
    "praesens": {
      "de": "er schreit",
      "lv": "han skriker"
    },
    "imperfektIndikativ": {
      "de": "er schrie",
      "lv": "han skrek"
    },
    "imperfektKonjunktiv": {
      "de": "er schriee",
      "lv": "han skulle skrika"
    },
    "partizipVergangenheit": {
      "de": "geschrien",
      "lv": "skrikit"
    }
  },
  {
    "infinitiv": {
      "de": "schreiten",
      "lv": "att skrida"
    },
    "praesens": {
      "de": "er schreitet",
      "lv": "han skrider"
    },
    "imperfektIndikativ": {
      "de": "er schritt",
      "lv": "han skred"
    },
    "imperfektKonjunktiv": {
      "de": "er schritte",
      "lv": "han skulle skrida"
    },
    "partizipVergangenheit": {
      "de": "geschritten (er ist)",
      "lv": "skridit"
    }
  },
  {
    "infinitiv": {
      "de": "schweigen",
      "lv": "att tiga"
    },
    "praesens": {
      "de": "er schweigt",
      "lv": "han tiger"
    },
    "imperfektIndikativ": {
      "de": "er schwieg",
      "lv": "han teg"
    },
    "imperfektKonjunktiv": {
      "de": "er schwiege",
      "lv": "han skulle tiga"
    },
    "partizipVergangenheit": {
      "de": "geschwiegen",
      "lv": "tigit"
    }
  },
  {
    "infinitiv": {
      "de": "schwellen",
      "lv": "att svullna"
    },
    "praesens": {
      "de": "er schwillt",
      "lv": "det svullnar"
    },
    "imperfektIndikativ": {
      "de": "er schwoll",
      "lv": "det svullnade"
    },
    "imperfektKonjunktiv": {
      "de": "er schwölle",
      "lv": "det skulle svullna"
    },
    "partizipVergangenheit": {
      "de": "geschwollen (er ist)",
      "lv": "svullnat"
    }
  },
  {
    "infinitiv": {
      "de": "schwimmen",
      "lv": "att simma"
    },
    "praesens": {
      "de": "er schwimmt",
      "lv": "han simmar"
    },
    "imperfektIndikativ": {
      "de": "er schwamm",
      "lv": "han simmade"
    },
    "imperfektKonjunktiv": {
      "de": "er schwömme / er schwämme",
      "lv": "han skulle simma"
    },
    "partizipVergangenheit": {
      "de": "geschwommen (er ist)",
      "lv": "simmat"
    }
  },
  {
    "infinitiv": {
      "de": "schwinden",
      "lv": "att försvinna"
    },
    "praesens": {
      "de": "er schwindet",
      "lv": "det försvinner"
    },
    "imperfektIndikativ": {
      "de": "er schwand",
      "lv": "det försvann"
    },
    "imperfektKonjunktiv": {
      "de": "er schwände",
      "lv": "det skulle försvinna"
    },
    "partizipVergangenheit": {
      "de": "geschwunden (er ist)",
      "lv": "försvunnit"
    }
  },
  {
    "infinitiv": {
      "de": "schwingen",
      "lv": "att svinga"
    },
    "praesens": {
      "de": "er schwingt",
      "lv": "han svingar"
    },
    "imperfektIndikativ": {
      "de": "er schwang",
      "lv": "han svingade"
    },
    "imperfektKonjunktiv": {
      "de": "er schwänge",
      "lv": "han skulle svinga"
    },
    "partizipVergangenheit": {
      "de": "geschwungen",
      "lv": "svingat"
    }
  },
  {
    "infinitiv": {
      "de": "schwören",
      "lv": "att svära"
    },
    "praesens": {
      "de": "er schwört",
      "lv": "han svär"
    },
    "imperfektIndikativ": {
      "de": "er schwur / er schwor",
      "lv": "han svor"
    },
    "imperfektKonjunktiv": {
      "de": "er schwöre",
      "lv": "han skulle svära"
    },
    "partizipVergangenheit": {
      "de": "geschworen",
      "lv": "svurit"
    }
  },
  {
    "infinitiv": {
      "de": "sehen",
      "lv": "att se"
    },
    "praesens": {
      "de": "er sieht",
      "lv": "han ser"
    },
    "imperfektIndikativ": {
      "de": "er sah",
      "lv": "han såg"
    },
    "imperfektKonjunktiv": {
      "de": "er sähe",
      "lv": "han skulle se"
    },
    "partizipVergangenheit": {
      "de": "gesehen",
      "lv": "sett"
    }
  },
  {
    "infinitiv": {
      "de": "sein",
      "lv": "att vara"
    },
    "praesens": {
      "de": "er ist",
      "lv": "han är"
    },
    "imperfektIndikativ": {
      "de": "war",
      "lv": "han var"
    },
    "imperfektKonjunktiv": {
      "de": "war",
      "lv": "han skulle vara"
    },
    "partizipVergangenheit": {
      "de": "gewesen",
      "lv": "varit"
    }
  },
  {
    "infinitiv": {
      "de": "senden",
      "lv": "att skicka"
    },
    "praesens": {
      "de": "er sendet",
      "lv": "han skickar"
    },
    "imperfektIndikativ": {
      "de": "er sandte / er sendete",
      "lv": "han skickade"
    },
    "imperfektKonjunktiv": {
      "de": "er sendete",
      "lv": "han skulle skicka"
    },
    "partizipVergangenheit": {
      "de": "gesandt / gesendet",
      "lv": "skickat"
    }
  },
  {
    "infinitiv": {
      "de": "sieden",
      "lv": "att koka"
    },
    "praesens": {
      "de": "er siedet",
      "lv": "han kokar"
    },
    "imperfektIndikativ": {
      "de": "sott / siedete",
      "lv": "han kokade"
    },
    "imperfektKonjunktiv": {
      "de": "sott / siedete",
      "lv": "han skulle koka"
    },
    "partizipVergangenheit": {
      "de": "gesotten / gesiedet",
      "lv": "kokat"
    }
  },
  {
    "infinitiv": {
      "de": "singen",
      "lv": "att sjunga"
    },
    "praesens": {
      "de": "er singt",
      "lv": "han sjunger"
    },
    "imperfektIndikativ": {
      "de": "er sang",
      "lv": "han sjöng"
    },
    "imperfektKonjunktiv": {
      "de": "er sänge",
      "lv": "han skulle sjunga"
    },
    "partizipVergangenheit": {
      "de": "gesungen",
      "lv": "sjungit"
    }
  },
  {
    "infinitiv": {
      "de": "sinken",
      "lv": "att sjunka"
    },
    "praesens": {
      "de": "er sinkt",
      "lv": "han sjunker"
    },
    "imperfektIndikativ": {
      "de": "er sank",
      "lv": "han sjönk"
    },
    "imperfektKonjunktiv": {
      "de": "er sänke",
      "lv": "han skulle sjunka"
    },
    "partizipVergangenheit": {
      "de": "gesunken (er ist)",
      "lv": "sjunkit"
    }
  },
  {
    "infinitiv": {
      "de": "sinnen",
      "lv": "att fundera"
    },
    "praesens": {
      "de": "er sinnt",
      "lv": "han funderar"
    },
    "imperfektIndikativ": {
      "de": "er sann",
      "lv": "han funderade"
    },
    "imperfektKonjunktiv": {
      "de": "er sönne / er sänne",
      "lv": "han skulle fundera"
    },
    "partizipVergangenheit": {
      "de": "gesonnen",
      "lv": "funderat"
    }
  },
  {
    "infinitiv": {
      "de": "sitzen",
      "lv": "att sitta"
    },
    "praesens": {
      "de": "er sitzt",
      "lv": "han sitter"
    },
    "imperfektIndikativ": {
      "de": "er sass",
      "lv": "han satt"
    },
    "imperfektKonjunktiv": {
      "de": "er säße",
      "lv": "han skulle sitta"
    },
    "partizipVergangenheit": {
      "de": "gesessen",
      "lv": "suttit"
    }
  },
  {
    "infinitiv": {
      "de": "sollen",
      "lv": "att skola"
    },
    "praesens": {
      "de": "er soll",
      "lv": "han ska"
    },
    "imperfektIndikativ": {
      "de": "sollte",
      "lv": "han skulle"
    },
    "imperfektKonjunktiv": {
      "de": "sollte",
      "lv": "han skulle"
    },
    "partizipVergangenheit": {
      "de": "gesollt",
      "lv": "skolat"
    }
  },
  {
    "infinitiv": {
      "de": "speien",
      "lv": "att spotta"
    },
    "praesens": {
      "de": "er speit",
      "lv": "han spottar"
    },
    "imperfektIndikativ": {
      "de": "er spie",
      "lv": "han spottade"
    },
    "imperfektKonjunktiv": {
      "de": "er spie",
      "lv": "han skulle spotta"
    },
    "partizipVergangenheit": {
      "de": "gespien",
      "lv": "spottat"
    }
  },
  {
    "infinitiv": {
      "de": "spinnen",
      "lv": "att spinna"
    },
    "praesens": {
      "de": "er spinnt",
      "lv": "han spinner"
    },
    "imperfektIndikativ": {
      "de": "er spann",
      "lv": "han spann"
    },
    "imperfektKonjunktiv": {
      "de": "er spönne / er spänne",
      "lv": "han skulle spinna"
    },
    "partizipVergangenheit": {
      "de": "gesponnen",
      "lv": "spunnit"
    }
  },
  {
    "infinitiv": {
      "de": "spleißen",
      "lv": "att skarva"
    },
    "praesens": {
      "de": "er spleißt",
      "lv": "han skarvar"
    },
    "imperfektIndikativ": {
      "de": "spliss",
      "lv": "han skarvade"
    },
    "imperfektKonjunktiv": {
      "de": "spliss",
      "lv": "han skulle skarva"
    },
    "partizipVergangenheit": {
      "de": "gesplissen",
      "lv": "skarvat"
    }
  },
  {
    "infinitiv": {
      "de": "sprechen",
      "lv": "att tala"
    },
    "praesens": {
      "de": "er spricht",
      "lv": "han talar"
    },
    "imperfektIndikativ": {
      "de": "er sprach",
      "lv": "han talade"
    },
    "imperfektKonjunktiv": {
      "de": "er spräche",
      "lv": "han skulle tala"
    },
    "partizipVergangenheit": {
      "de": "gesprochen",
      "lv": "talat"
    }
  },
  {
    "infinitiv": {
      "de": "sprießen",
      "lv": "att spira"
    },
    "praesens": {
      "de": "er sprießt",
      "lv": "det spirar"
    },
    "imperfektIndikativ": {
      "de": "er spross",
      "lv": "det spirade"
    },
    "imperfektKonjunktiv": {
      "de": "er sprösse",
      "lv": "det skulle spira"
    },
    "partizipVergangenheit": {
      "de": "gesprossen (er ist)",
      "lv": "spirat"
    }
  },
  {
    "infinitiv": {
      "de": "springen",
      "lv": "att hoppa"
    },
    "praesens": {
      "de": "er springt",
      "lv": "han hoppar"
    },
    "imperfektIndikativ": {
      "de": "er sprang",
      "lv": "han hoppade"
    },
    "imperfektKonjunktiv": {
      "de": "er spränge",
      "lv": "han skulle hoppa"
    },
    "partizipVergangenheit": {
      "de": "gesprungen (er ist)",
      "lv": "hoppat"
    }
  },
  {
    "infinitiv": {
      "de": "stechen",
      "lv": "att sticka"
    },
    "praesens": {
      "de": "er sticht",
      "lv": "han sticker"
    },
    "imperfektIndikativ": {
      "de": "er stach",
      "lv": "han stack"
    },
    "imperfektKonjunktiv": {
      "de": "er stäche",
      "lv": "han skulle sticka"
    },
    "partizipVergangenheit": {
      "de": "gestochen",
      "lv": "stuckit"
    }
  },
  {
    "infinitiv": {
      "de": "stecken",
      "lv": "att stoppa / att fästa"
    },
    "praesens": {
      "de": "er steckt",
      "lv": "han stoppar / fäster"
    },
    "imperfektIndikativ": {
      "de": "stak / steckte",
      "lv": "han stoppade / fäste"
    },
    "imperfektKonjunktiv": {
      "de": "stak / steckte",
      "lv": "han skulle stoppa / fästa"
    },
    "partizipVergangenheit": {
      "de": "gesteckt",
      "lv": "stoppat / fäst"
    }
  },
  {
    "infinitiv": {
      "de": "stehen",
      "lv": "att stå"
    },
    "praesens": {
      "de": "er steht",
      "lv": "han står"
    },
    "imperfektIndikativ": {
      "de": "er stand",
      "lv": "han stod"
    },
    "imperfektKonjunktiv": {
      "de": "er stände / er stünde",
      "lv": "han skulle stå"
    },
    "partizipVergangenheit": {
      "de": "gestanden",
      "lv": "stått"
    }
  },
  {
    "infinitiv": {
      "de": "stehlen",
      "lv": "att stjäla"
    },
    "praesens": {
      "de": "er stiehlt",
      "lv": "han stjäl"
    },
    "imperfektIndikativ": {
      "de": "er stahl",
      "lv": "han stal"
    },
    "imperfektKonjunktiv": {
      "de": "er stöhle / er stähle",
      "lv": "han skulle stjäla"
    },
    "partizipVergangenheit": {
      "de": "gestohlen",
      "lv": "stulit"
    }
  },
  {
    "infinitiv": {
      "de": "steigen",
      "lv": "att stiga"
    },
    "praesens": {
      "de": "er steigt",
      "lv": "han stiger"
    },
    "imperfektIndikativ": {
      "de": "er stieg",
      "lv": "han steg"
    },
    "imperfektKonjunktiv": {
      "de": "er stiege",
      "lv": "han skulle stiga"
    },
    "partizipVergangenheit": {
      "de": "gestiegen (er ist)",
      "lv": "stigit"
    }
  },
  {
    "infinitiv": {
      "de": "sterben",
      "lv": "att dö"
    },
    "praesens": {
      "de": "er stirbt",
      "lv": "han dör"
    },
    "imperfektIndikativ": {
      "de": "er starb",
      "lv": "han dog"
    },
    "imperfektKonjunktiv": {
      "de": "er stürbe",
      "lv": "han skulle dö"
    },
    "partizipVergangenheit": {
      "de": "gestorben (er ist)",
      "lv": "dött"
    }
  },
  {
    "infinitiv": {
      "de": "stinken",
      "lv": "att lukta illa"
    },
    "praesens": {
      "de": "es stinkt",
      "lv": "det luktar illa"
    },
    "imperfektIndikativ": {
      "de": "stank",
      "lv": "det luktade illa"
    },
    "imperfektKonjunktiv": {
      "de": "stank",
      "lv": "det skulle lukta illa"
    },
    "partizipVergangenheit": {
      "de": "gestunken",
      "lv": "luktat illa"
    }
  },
  {
    "infinitiv": {
      "de": "stoßen",
      "lv": "att knuffa"
    },
    "praesens": {
      "de": "er stößt",
      "lv": "han knuffar"
    },
    "imperfektIndikativ": {
      "de": "er stieß",
      "lv": "han knuffade"
    },
    "imperfektKonjunktiv": {
      "de": "er stieße",
      "lv": "han skulle knuffa"
    },
    "partizipVergangenheit": {
      "de": "gestoßen",
      "lv": "knuffat"
    }
  },
  {
    "infinitiv": {
      "de": "streichen",
      "lv": "att måla / att stryka över"
    },
    "praesens": {
      "de": "er streicht",
      "lv": "han målar / stryker över"
    },
    "imperfektIndikativ": {
      "de": "er strich",
      "lv": "han målade / strök över"
    },
    "imperfektKonjunktiv": {
      "de": "er striche",
      "lv": "han skulle måla / stryka över"
    },
    "partizipVergangenheit": {
      "de": "gestrichen",
      "lv": "målat / strukit över"
    }
  },
  {
    "infinitiv": {
      "de": "streiten",
      "lv": "att gräla"
    },
    "praesens": {
      "de": "er streitet",
      "lv": "han grälar"
    },
    "imperfektIndikativ": {
      "de": "er stritt",
      "lv": "han grälade"
    },
    "imperfektKonjunktiv": {
      "de": "er stritte",
      "lv": "han skulle gräla"
    },
    "partizipVergangenheit": {
      "de": "gestritten",
      "lv": "grälat"
    }
  },
  {
    "infinitiv": {
      "de": "tragen",
      "lv": "att bära"
    },
    "praesens": {
      "de": "er trägt",
      "lv": "han bär"
    },
    "imperfektIndikativ": {
      "de": "er trug",
      "lv": "han bar"
    },
    "imperfektKonjunktiv": {
      "de": "er trüge",
      "lv": "han skulle bära"
    },
    "partizipVergangenheit": {
      "de": "getragen",
      "lv": "burit"
    }
  },
  {
    "infinitiv": {
      "de": "treffen",
      "lv": "att träffa"
    },
    "praesens": {
      "de": "er trifft",
      "lv": "han träffar"
    },
    "imperfektIndikativ": {
      "de": "er traf",
      "lv": "han träffade"
    },
    "imperfektKonjunktiv": {
      "de": "er träfe",
      "lv": "han skulle träffa"
    },
    "partizipVergangenheit": {
      "de": "getroffen",
      "lv": "träffat"
    }
  },
  {
    "infinitiv": {
      "de": "treiben",
      "lv": "att driva"
    },
    "praesens": {
      "de": "er treibt",
      "lv": "han driver"
    },
    "imperfektIndikativ": {
      "de": "er trieb",
      "lv": "han drev"
    },
    "imperfektKonjunktiv": {
      "de": "er triebe",
      "lv": "han skulle driva"
    },
    "partizipVergangenheit": {
      "de": "getrieben",
      "lv": "drivit"
    }
  },
  {
    "infinitiv": {
      "de": "treten",
      "lv": "att kliva / att gå"
    },
    "praesens": {
      "de": "er tritt",
      "lv": "han kliver / går"
    },
    "imperfektIndikativ": {
      "de": "er trat",
      "lv": "han klev / gick"
    },
    "imperfektKonjunktiv": {
      "de": "er träte",
      "lv": "han skulle kliva / gå"
    },
    "partizipVergangenheit": {
      "de": "getreten (er ist)",
      "lv": "klivit / gått"
    }
  },
  {
    "infinitiv": {
      "de": "trinken",
      "lv": "att dricka"
    },
    "praesens": {
      "de": "er trinkt",
      "lv": "han dricker"
    },
    "imperfektIndikativ": {
      "de": "er trank",
      "lv": "han drack"
    },
    "imperfektKonjunktiv": {
      "de": "er tränke",
      "lv": "han skulle dricka"
    },
    "partizipVergangenheit": {
      "de": "getrunken",
      "lv": "druckit"
    }
  },
  {
    "infinitiv": {
      "de": "trügen",
      "lv": "att bedra"
    },
    "praesens": {
      "de": "er trögt",
      "lv": "han bedrar"
    },
    "imperfektIndikativ": {
      "de": "er trog",
      "lv": "han bedrog"
    },
    "imperfektKonjunktiv": {
      "de": "er tröge",
      "lv": "han skulle bedra"
    },
    "partizipVergangenheit": {
      "de": "getrogen",
      "lv": "bedragit"
    }
  },
  {
    "infinitiv": {
      "de": "tun",
      "lv": "att göra"
    },
    "praesens": {
      "de": "er tut",
      "lv": "han gör"
    },
    "imperfektIndikativ": {
      "de": "er tat",
      "lv": "han gjorde"
    },
    "imperfektKonjunktiv": {
      "de": "er täte",
      "lv": "han skulle göra"
    },
    "partizipVergangenheit": {
      "de": "getan",
      "lv": "gjort"
    }
  },
  {
    "infinitiv": {
      "de": "verderben",
      "lv": "att förstöra"
    },
    "praesens": {
      "de": "er verdirbt",
      "lv": "han förstör"
    },
    "imperfektIndikativ": {
      "de": "er verdarb",
      "lv": "han förstörde"
    },
    "imperfektKonjunktiv": {
      "de": "er verdürbe",
      "lv": "han skulle förstöra"
    },
    "partizipVergangenheit": {
      "de": "verdorben",
      "lv": "förstört"
    }
  },
  {
    "infinitiv": {
      "de": "verdrießen",
      "lv": "att förarga"
    },
    "praesens": {
      "de": "er verdrießt",
      "lv": "han förargar"
    },
    "imperfektIndikativ": {
      "de": "er verdross",
      "lv": "han förargade"
    },
    "imperfektKonjunktiv": {
      "de": "er verdrösse",
      "lv": "han skulle förarga"
    },
    "partizipVergangenheit": {
      "de": "verdrossen",
      "lv": "förargat"
    }
  },
  {
    "infinitiv": {
      "de": "vergessen",
      "lv": "att glömma"
    },
    "praesens": {
      "de": "er vergisst",
      "lv": "han glömmer"
    },
    "imperfektIndikativ": {
      "de": "er vergass",
      "lv": "han glömde"
    },
    "imperfektKonjunktiv": {
      "de": "er vergäße",
      "lv": "han skulle glömma"
    },
    "partizipVergangenheit": {
      "de": "vergessen",
      "lv": "glömt"
    }
  },
  {
    "infinitiv": {
      "de": "verlieren",
      "lv": "att tappa"
    },
    "praesens": {
      "de": "er verliert",
      "lv": "han tappar"
    },
    "imperfektIndikativ": {
      "de": "er verlor",
      "lv": "han tappade"
    },
    "imperfektKonjunktiv": {
      "de": "er verlöre",
      "lv": "han skulle tappa"
    },
    "partizipVergangenheit": {
      "de": "verloren",
      "lv": "tappat"
    }
  },
  {
    "infinitiv": {
      "de": "wachsen",
      "lv": "att växa"
    },
    "praesens": {
      "de": "er wächst",
      "lv": "han växer"
    },
    "imperfektIndikativ": {
      "de": "er wuchs",
      "lv": "han växte"
    },
    "imperfektKonjunktiv": {
      "de": "er wüchse",
      "lv": "han skulle växa"
    },
    "partizipVergangenheit": {
      "de": "gewachsen (er ist)",
      "lv": "vuxit"
    }
  },
  {
    "infinitiv": {
      "de": "waschen",
      "lv": "att tvätta"
    },
    "praesens": {
      "de": "er wäscht",
      "lv": "han tvättar"
    },
    "imperfektIndikativ": {
      "de": "er wusch",
      "lv": "han tvättade"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsche",
      "lv": "han skulle tvätta"
    },
    "partizipVergangenheit": {
      "de": "gewaschen",
      "lv": "tvättat"
    }
  },
  {
    "infinitiv": {
      "de": "weben",
      "lv": "att väva"
    },
    "praesens": {
      "de": "er webt",
      "lv": "han väver"
    },
    "imperfektIndikativ": {
      "de": "wob",
      "lv": "han vävde"
    },
    "imperfektKonjunktiv": {
      "de": "wob",
      "lv": "han skulle väva"
    },
    "partizipVergangenheit": {
      "de": "gewoben",
      "lv": "vävt"
    }
  },
  {
    "infinitiv": {
      "de": "weichen",
      "lv": "att vika"
    },
    "praesens": {
      "de": "er weicht",
      "lv": "han viker"
    },
    "imperfektIndikativ": {
      "de": "er wich",
      "lv": "han vek"
    },
    "imperfektKonjunktiv": {
      "de": "er wiche",
      "lv": "han skulle vika"
    },
    "partizipVergangenheit": {
      "de": "gewichen (er ist)",
      "lv": "vikit"
    }
  },
  {
    "infinitiv": {
      "de": "weisen",
      "lv": "att visa"
    },
    "praesens": {
      "de": "er weist",
      "lv": "han visar"
    },
    "imperfektIndikativ": {
      "de": "er wies",
      "lv": "han visade"
    },
    "imperfektKonjunktiv": {
      "de": "er wiese",
      "lv": "han skulle visa"
    },
    "partizipVergangenheit": {
      "de": "gewiesen",
      "lv": "visat"
    }
  },
  {
    "infinitiv": {
      "de": "wenden",
      "lv": "att vända / att vända på"
    },
    "praesens": {
      "de": "er wendet",
      "lv": "han vänder / vänder på"
    },
    "imperfektIndikativ": {
      "de": "er wandte / es wendete",
      "lv": "han vände / vände på"
    },
    "imperfektKonjunktiv": {
      "de": "er wendete",
      "lv": "han skulle vända / vända på"
    },
    "partizipVergangenheit": {
      "de": "gewandt / gewendet",
      "lv": "vänt / vänt på"
    }
  },
  {
    "infinitiv": {
      "de": "werben",
      "lv": "att fria"
    },
    "praesens": {
      "de": "er wirbt",
      "lv": "han friar"
    },
    "imperfektIndikativ": {
      "de": "er warb",
      "lv": "han friade"
    },
    "imperfektKonjunktiv": {
      "de": "er würbe",
      "lv": "han skulle fria"
    },
    "partizipVergangenheit": {
      "de": "geworben",
      "lv": "friat"
    }
  },
  {
    "infinitiv": {
      "de": "werden",
      "lv": "att bli"
    },
    "praesens": {
      "de": "er wird",
      "lv": "han blir"
    },
    "imperfektIndikativ": {
      "de": "wurde",
      "lv": "han blev"
    },
    "imperfektKonjunktiv": {
      "de": "wurde",
      "lv": "han skulle bli"
    },
    "partizipVergangenheit": {
      "de": "geworden",
      "lv": "blivit"
    }
  },
  {
    "infinitiv": {
      "de": "werfen",
      "lv": "att kasta"
    },
    "praesens": {
      "de": "er wirft",
      "lv": "han kastar"
    },
    "imperfektIndikativ": {
      "de": "er warf",
      "lv": "han kastade"
    },
    "imperfektKonjunktiv": {
      "de": "er würfe",
      "lv": "han skulle kasta"
    },
    "partizipVergangenheit": {
      "de": "geworfen",
      "lv": "kastat"
    }
  },
  {
    "infinitiv": {
      "de": "wiegen",
      "lv": "att väga"
    },
    "praesens": {
      "de": "er wiegt",
      "lv": "han väger"
    },
    "imperfektIndikativ": {
      "de": "er wog",
      "lv": "han vägde"
    },
    "imperfektKonjunktiv": {
      "de": "er wöge",
      "lv": "han skulle väga"
    },
    "partizipVergangenheit": {
      "de": "gewogen",
      "lv": "vägt"
    }
  },
  {
    "infinitiv": {
      "de": "winden",
      "lv": "att vira"
    },
    "praesens": {
      "de": "er windet",
      "lv": "han virar"
    },
    "imperfektIndikativ": {
      "de": "er wand",
      "lv": "han virade"
    },
    "imperfektKonjunktiv": {
      "de": "er wände",
      "lv": "han skulle vira"
    },
    "partizipVergangenheit": {
      "de": "gewunden",
      "lv": "virat"
    }
  },
  {
    "infinitiv": {
      "de": "wissen",
      "lv": "att veta"
    },
    "praesens": {
      "de": "er weiß",
      "lv": "han vet"
    },
    "imperfektIndikativ": {
      "de": "er wusste",
      "lv": "han visste"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsste",
      "lv": "han skulle veta"
    },
    "partizipVergangenheit": {
      "de": "gewusst",
      "lv": "vetat"
    }
  },
  {
    "infinitiv": {
      "de": "wollen",
      "lv": "att vilja"
    },
    "praesens": {
      "de": "er will",
      "lv": "han vill"
    },
    "imperfektIndikativ": {
      "de": "wollte",
      "lv": "han ville"
    },
    "imperfektKonjunktiv": {
      "de": "wollte",
      "lv": "han skulle vilja"
    },
    "partizipVergangenheit": {
      "de": "gewollt",
      "lv": "velat"
    }
  },
  {
    "infinitiv": {
      "de": "wringen",
      "lv": "att vrida ur / att pressa"
    },
    "praesens": {
      "de": "er wringt",
      "lv": "han vrider ur / pressar"
    },
    "imperfektIndikativ": {
      "de": "wrang",
      "lv": "han vred ur / pressade"
    },
    "imperfektKonjunktiv": {
      "de": "wrang",
      "lv": "han skulle vrida ur / pressa"
    },
    "partizipVergangenheit": {
      "de": "gewrungen",
      "lv": "vridit ur / pressat"
    }
  },
  {
    "infinitiv": {
      "de": "zeihen",
      "lv": "att anklaga"
    },
    "praesens": {
      "de": "er zeiht",
      "lv": "han anklagar"
    },
    "imperfektIndikativ": {
      "de": "zieh",
      "lv": "han anklagade"
    },
    "imperfektKonjunktiv": {
      "de": "zieh",
      "lv": "han skulle anklaga"
    },
    "partizipVergangenheit": {
      "de": "geziehen",
      "lv": "anklagat"
    }
  },
  {
    "infinitiv": {
      "de": "ziehen",
      "lv": "att dra"
    },
    "praesens": {
      "de": "er zieht",
      "lv": "han drar"
    },
    "imperfektIndikativ": {
      "de": "er zog",
      "lv": "han drog"
    },
    "imperfektKonjunktiv": {
      "de": "er zöge",
      "lv": "han skulle dra"
    },
    "partizipVergangenheit": {
      "de": "gezogen",
      "lv": "dragit"
    }
  },
  {
    "infinitiv": {
      "de": "zwingen",
      "lv": "att tvinga"
    },
    "praesens": {
      "de": "er zwingt",
      "lv": "han tvingar"
    },
    "imperfektIndikativ": {
      "de": "er zwang",
      "lv": "han tvingade"
    },
    "imperfektKonjunktiv": {
      "de": "er zwänge",
      "lv": "han skulle tvinga"
    },
    "partizipVergangenheit": {
      "de": "gezwungen",
      "lv": "tvingat"
    }
  },
  {
    "infinitiv": {
      "de": "empfangen",
      "lv": "att ta emot"
    },
    "praesens": {
      "de": "er empfängt",
      "lv": "han tar emot"
    },
    "imperfektIndikativ": {
      "de": "er empfing",
      "lv": "han tog emot"
    },
    "imperfektKonjunktiv": {
      "de": "er empfinge",
      "lv": "han skulle ta emot"
    },
    "partizipVergangenheit": {
      "de": "empfangen",
      "lv": "tagit emot"
    }
  },
  {
    "infinitiv": {
      "de": "erwägen",
      "lv": "att överväga"
    },
    "praesens": {
      "de": "er erwägt",
      "lv": "han överväger"
    },
    "imperfektIndikativ": {
      "de": "er erwog",
      "lv": "han övervägde"
    },
    "imperfektKonjunktiv": {
      "de": "er erwöge",
      "lv": "han skulle överväga"
    },
    "partizipVergangenheit": {
      "de": "erwogen",
      "lv": "övervägt"
    }
  },
  {
    "infinitiv": {
      "de": "fechten",
      "lv": "att kämpa"
    },
    "praesens": {
      "de": "er ficht",
      "lv": "han kämpar"
    },
    "imperfektIndikativ": {
      "de": "er focht",
      "lv": "han kämpade"
    },
    "imperfektKonjunktiv": {
      "de": "er föchte",
      "lv": "han skulle kämpa"
    },
    "partizipVergangenheit": {
      "de": "gefochten",
      "lv": "kämpat"
    }
  },
  {
    "infinitiv": {
      "de": "flechten",
      "lv": "att fläta"
    },
    "praesens": {
      "de": "er flicht",
      "lv": "han flätar"
    },
    "imperfektIndikativ": {
      "de": "er flocht",
      "lv": "han flätade"
    },
    "imperfektKonjunktiv": {
      "de": "er flöchte",
      "lv": "han skulle fläta"
    },
    "partizipVergangenheit": {
      "de": "geflochten",
      "lv": "flätat"
    }
  },
  {
    "infinitiv": {
      "de": "hangen",
      "lv": "att hänga"
    },
    "praesens": {
      "de": "er hängt",
      "lv": "han hänger"
    },
    "imperfektIndikativ": {
      "de": "er hing",
      "lv": "han hängde"
    },
    "imperfektKonjunktiv": {
      "de": "er hinge",
      "lv": "han skulle hänga"
    },
    "partizipVergangenheit": {
      "de": "gehangen",
      "lv": "hängt"
    }
  },
  {
    "infinitiv": {
      "de": "spalten",
      "lv": "att klyva"
    },
    "praesens": {
      "de": "er spaltet",
      "lv": "han klyver"
    },
    "imperfektIndikativ": {
      "de": "er spaltete",
      "lv": "han klöv"
    },
    "imperfektKonjunktiv": {
      "de": "er spaltete",
      "lv": "han skulle klyva"
    },
    "partizipVergangenheit": {
      "de": "gespalten",
      "lv": "kluvit"
    }
  },
  {
    "infinitiv": {
      "de": "verzeihen",
      "lv": "att förlåta"
    },
    "praesens": {
      "de": "er verzeiht",
      "lv": "han förlåter"
    },
    "imperfektIndikativ": {
      "de": "er verzieh",
      "lv": "han förlät"
    },
    "imperfektKonjunktiv": {
      "de": "er verziehe",
      "lv": "han skulle förlåta"
    },
    "partizipVergangenheit": {
      "de": "verziehen",
      "lv": "förlåtit"
    }
  }
];

window.VERB_ENTRIES = VERB_ENTRIES;

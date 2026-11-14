const VERB_ENTRIES = [
  {
    "infinitiv": {
      "de": "backen",
      "lv": "að baka"
    },
    "praesens": {
      "de": "er bäckt",
      "lv": "hann bakar"
    },
    "imperfektIndikativ": {
      "de": "er buk",
      "lv": "hann bakaði"
    },
    "imperfektKonjunktiv": {
      "de": "er büke",
      "lv": "hann myndi baka"
    },
    "partizipVergangenheit": {
      "de": "gebacken",
      "lv": "bakað"
    }
  },
  {
    "infinitiv": {
      "de": "befehlen",
      "lv": "að skipa"
    },
    "praesens": {
      "de": "er befiehlt",
      "lv": "hann skipar"
    },
    "imperfektIndikativ": {
      "de": "er befahl",
      "lv": "hann skipaði"
    },
    "imperfektKonjunktiv": {
      "de": "er beföhle",
      "lv": "hann myndi skipa"
    },
    "partizipVergangenheit": {
      "de": "befohlen",
      "lv": "skipað"
    }
  },
  {
    "infinitiv": {
      "de": "beginnen",
      "lv": "að byrja"
    },
    "praesens": {
      "de": "er beginnt",
      "lv": "hann byrjar"
    },
    "imperfektIndikativ": {
      "de": "er begann",
      "lv": "hann byrjaði"
    },
    "imperfektKonjunktiv": {
      "de": "er begönne / er begänne",
      "lv": "hann myndi byrja"
    },
    "partizipVergangenheit": {
      "de": "begonnen",
      "lv": "byrjað"
    }
  },
  {
    "infinitiv": {
      "de": "beißen",
      "lv": "að bíta"
    },
    "praesens": {
      "de": "er beißt",
      "lv": "hann bítur"
    },
    "imperfektIndikativ": {
      "de": "er biss",
      "lv": "hann beit"
    },
    "imperfektKonjunktiv": {
      "de": "er bisse",
      "lv": "hann myndi bíta"
    },
    "partizipVergangenheit": {
      "de": "gebissen",
      "lv": "bitið"
    }
  },
  {
    "infinitiv": {
      "de": "bergen",
      "lv": "að bjarga / að fela"
    },
    "praesens": {
      "de": "er birgt",
      "lv": "hann bjargar / felur"
    },
    "imperfektIndikativ": {
      "de": "er barg",
      "lv": "hann bjargaði / faldi"
    },
    "imperfektKonjunktiv": {
      "de": "er bürge / er bärge",
      "lv": "hann myndi bjarga / fela"
    },
    "partizipVergangenheit": {
      "de": "geborgen",
      "lv": "bjargað / falið"
    }
  },
  {
    "infinitiv": {
      "de": "bersten",
      "lv": "að springa"
    },
    "praesens": {
      "de": "er birst",
      "lv": "það springur"
    },
    "imperfektIndikativ": {
      "de": "er barst / er borst",
      "lv": "það sprakk"
    },
    "imperfektKonjunktiv": {
      "de": "er bärste / er börste",
      "lv": "það myndi springa"
    },
    "partizipVergangenheit": {
      "de": "geborsten (er ist)",
      "lv": "sprungið"
    }
  },
  {
    "infinitiv": {
      "de": "bewegen",
      "lv": "að hvetja"
    },
    "praesens": {
      "de": "er bewegt",
      "lv": "hann hvetur"
    },
    "imperfektIndikativ": {
      "de": "er bewog",
      "lv": "hann hvatti"
    },
    "imperfektKonjunktiv": {
      "de": "er bewöge",
      "lv": "hann myndi hvetja"
    },
    "partizipVergangenheit": {
      "de": "bewogen",
      "lv": "hvatt"
    }
  },
  {
    "infinitiv": {
      "de": "biegen",
      "lv": "að beygja"
    },
    "praesens": {
      "de": "er biegt",
      "lv": "hann beygir"
    },
    "imperfektIndikativ": {
      "de": "er bog",
      "lv": "hann beygði"
    },
    "imperfektKonjunktiv": {
      "de": "er böge",
      "lv": "hann myndi beygja"
    },
    "partizipVergangenheit": {
      "de": "gebogen",
      "lv": "beygt"
    }
  },
  {
    "infinitiv": {
      "de": "bieten",
      "lv": "að bjóða"
    },
    "praesens": {
      "de": "er bietet",
      "lv": "hann býður"
    },
    "imperfektIndikativ": {
      "de": "er bot",
      "lv": "hann bauð"
    },
    "imperfektKonjunktiv": {
      "de": "er böte",
      "lv": "hann myndi bjóða"
    },
    "partizipVergangenheit": {
      "de": "geboten",
      "lv": "boðið"
    }
  },
  {
    "infinitiv": {
      "de": "binden",
      "lv": "að binda"
    },
    "praesens": {
      "de": "er bindet",
      "lv": "hann bindur"
    },
    "imperfektIndikativ": {
      "de": "er band",
      "lv": "hann batt"
    },
    "imperfektKonjunktiv": {
      "de": "er bände",
      "lv": "hann myndi binda"
    },
    "partizipVergangenheit": {
      "de": "gebunden",
      "lv": "bundið"
    }
  },
  {
    "infinitiv": {
      "de": "bitten",
      "lv": "að biðja"
    },
    "praesens": {
      "de": "er bittet",
      "lv": "hann biður"
    },
    "imperfektIndikativ": {
      "de": "er bat",
      "lv": "hann bað"
    },
    "imperfektKonjunktiv": {
      "de": "er bäte",
      "lv": "hann myndi biðja"
    },
    "partizipVergangenheit": {
      "de": "gebeten",
      "lv": "beðið"
    }
  },
  {
    "infinitiv": {
      "de": "blasen",
      "lv": "að blása"
    },
    "praesens": {
      "de": "er bläst",
      "lv": "hann blæs"
    },
    "imperfektIndikativ": {
      "de": "er blies",
      "lv": "hann blés"
    },
    "imperfektKonjunktiv": {
      "de": "er bliese",
      "lv": "hann myndi blása"
    },
    "partizipVergangenheit": {
      "de": "geblasen",
      "lv": "blásið"
    }
  },
  {
    "infinitiv": {
      "de": "gären",
      "lv": "að gerjast"
    },
    "praesens": {
      "de": "es gärt",
      "lv": "það gerjast"
    },
    "imperfektIndikativ": {
      "de": "es gor / es gärte",
      "lv": "það gerjaðist"
    },
    "imperfektKonjunktiv": {
      "de": "es göre / es gärte",
      "lv": "það myndi gerjast"
    },
    "partizipVergangenheit": {
      "de": "gegoren / gegärt",
      "lv": "gerjast"
    }
  },
  {
    "infinitiv": {
      "de": "gebären",
      "lv": "að fæða"
    },
    "praesens": {
      "de": "sie gebiert",
      "lv": "hún fæðir"
    },
    "imperfektIndikativ": {
      "de": "sie gebar",
      "lv": "hún fæddi"
    },
    "imperfektKonjunktiv": {
      "de": "sie gebäre",
      "lv": "hún myndi fæða"
    },
    "partizipVergangenheit": {
      "de": "geboren",
      "lv": "fætt"
    }
  },
  {
    "infinitiv": {
      "de": "gelingen",
      "lv": "að takast"
    },
    "praesens": {
      "de": "es gelingt",
      "lv": "það tekst"
    },
    "imperfektIndikativ": {
      "de": "es gelang",
      "lv": "það tókst"
    },
    "imperfektKonjunktiv": {
      "de": "es gelänge",
      "lv": "það myndi takast"
    },
    "partizipVergangenheit": {
      "de": "gelungen (es ist)",
      "lv": "tekist"
    }
  },
  {
    "infinitiv": {
      "de": "gelten",
      "lv": "að gilda / að vera í gildi"
    },
    "praesens": {
      "de": "er gilt",
      "lv": "hann gildir / er í gildi"
    },
    "imperfektIndikativ": {
      "de": "er galt",
      "lv": "hann gilti / var í gildi"
    },
    "imperfektKonjunktiv": {
      "de": "er gölte / es gälte",
      "lv": "hann myndi gilda / vera í gildi"
    },
    "partizipVergangenheit": {
      "de": "gegolten",
      "lv": "gilt / verið í gildi"
    }
  },
  {
    "infinitiv": {
      "de": "genesen",
      "lv": "að ná sér"
    },
    "praesens": {
      "de": "er genest",
      "lv": "hann nær sér"
    },
    "imperfektIndikativ": {
      "de": "er genas",
      "lv": "hann náði sér"
    },
    "imperfektKonjunktiv": {
      "de": "er genäse",
      "lv": "hann myndi ná sér"
    },
    "partizipVergangenheit": {
      "de": "genesen (er ist)",
      "lv": "náð sér"
    }
  },
  {
    "infinitiv": {
      "de": "genießen",
      "lv": "að njóta"
    },
    "praesens": {
      "de": "er genießt",
      "lv": "hann nýtur"
    },
    "imperfektIndikativ": {
      "de": "er genoss",
      "lv": "hann naut"
    },
    "imperfektKonjunktiv": {
      "de": "er genösse",
      "lv": "hann myndi njóta"
    },
    "partizipVergangenheit": {
      "de": "genossen",
      "lv": "notið"
    }
  },
  {
    "infinitiv": {
      "de": "geschehen",
      "lv": "að gerast"
    },
    "praesens": {
      "de": "es geschieht",
      "lv": "það gerist"
    },
    "imperfektIndikativ": {
      "de": "es geschah",
      "lv": "það gerðist"
    },
    "imperfektKonjunktiv": {
      "de": "es geschähe",
      "lv": "það myndi gerast"
    },
    "partizipVergangenheit": {
      "de": "geschehen (es ist)",
      "lv": "gerst"
    }
  },
  {
    "infinitiv": {
      "de": "gießen",
      "lv": "að hella"
    },
    "praesens": {
      "de": "er gießt",
      "lv": "hann hellir"
    },
    "imperfektIndikativ": {
      "de": "er goss",
      "lv": "hann hellti"
    },
    "imperfektKonjunktiv": {
      "de": "er gösse",
      "lv": "hann myndi hella"
    },
    "partizipVergangenheit": {
      "de": "gegossen",
      "lv": "hellt"
    }
  },
  {
    "infinitiv": {
      "de": "gleichen",
      "lv": "að líkjast"
    },
    "praesens": {
      "de": "er gleicht",
      "lv": "hann líkist"
    },
    "imperfektIndikativ": {
      "de": "er glich",
      "lv": "hann líktist"
    },
    "imperfektKonjunktiv": {
      "de": "er gliche",
      "lv": "hann myndi líkjast"
    },
    "partizipVergangenheit": {
      "de": "geglichen",
      "lv": "líkst"
    }
  },
  {
    "infinitiv": {
      "de": "gleiten",
      "lv": "að renna"
    },
    "praesens": {
      "de": "er gleitet",
      "lv": "hann rennur"
    },
    "imperfektIndikativ": {
      "de": "er glitt",
      "lv": "hann rann"
    },
    "imperfektKonjunktiv": {
      "de": "er glitte",
      "lv": "hann myndi renna"
    },
    "partizipVergangenheit": {
      "de": "geglitten (er ist)",
      "lv": "runnið"
    }
  },
  {
    "infinitiv": {
      "de": "glimmen",
      "lv": "að glóa"
    },
    "praesens": {
      "de": "er glimmt",
      "lv": "það glóir"
    },
    "imperfektIndikativ": {
      "de": "er glimmte / glomm",
      "lv": "það glóði"
    },
    "imperfektKonjunktiv": {
      "de": "er glimmte",
      "lv": "það myndi glóa"
    },
    "partizipVergangenheit": {
      "de": "geglimmt / geglommen",
      "lv": "glóað"
    }
  },
  {
    "infinitiv": {
      "de": "graben",
      "lv": "að grafa"
    },
    "praesens": {
      "de": "er gräbt",
      "lv": "hann grefur"
    },
    "imperfektIndikativ": {
      "de": "er grub",
      "lv": "hann gróf"
    },
    "imperfektKonjunktiv": {
      "de": "er grübe",
      "lv": "hann myndi grafa"
    },
    "partizipVergangenheit": {
      "de": "gegraben",
      "lv": "grafið"
    }
  },
  {
    "infinitiv": {
      "de": "greifen",
      "lv": "að grípa"
    },
    "praesens": {
      "de": "er greift",
      "lv": "hann grípur"
    },
    "imperfektIndikativ": {
      "de": "er griff",
      "lv": "hann greip"
    },
    "imperfektKonjunktiv": {
      "de": "er griffe",
      "lv": "hann myndi grípa"
    },
    "partizipVergangenheit": {
      "de": "gegriffen",
      "lv": "gripið"
    }
  },
  {
    "infinitiv": {
      "de": "hauen",
      "lv": "að höggva"
    },
    "praesens": {
      "de": "er haut",
      "lv": "hann heggur"
    },
    "imperfektIndikativ": {
      "de": "er hieb",
      "lv": "hann hjó"
    },
    "imperfektKonjunktiv": {
      "de": "er hiebe",
      "lv": "hann myndi höggva"
    },
    "partizipVergangenheit": {
      "de": "gehauen",
      "lv": "höggvið"
    }
  },
  {
    "infinitiv": {
      "de": "heben",
      "lv": "að lyfta"
    },
    "praesens": {
      "de": "er hebt",
      "lv": "hann lyftir"
    },
    "imperfektIndikativ": {
      "de": "er hob",
      "lv": "hann lyfti"
    },
    "imperfektKonjunktiv": {
      "de": "er höbe",
      "lv": "hann myndi lyfta"
    },
    "partizipVergangenheit": {
      "de": "gehoben",
      "lv": "lyft"
    }
  },
  {
    "infinitiv": {
      "de": "kennen",
      "lv": "að þekkja / að vita"
    },
    "praesens": {
      "de": "er kennt",
      "lv": "hann þekkir / veit"
    },
    "imperfektIndikativ": {
      "de": "kannte",
      "lv": "hann þekkti / vissi"
    },
    "imperfektKonjunktiv": {
      "de": "kannte",
      "lv": "hann myndi þekkja / vita"
    },
    "partizipVergangenheit": {
      "de": "gekannt",
      "lv": "þekkt / vitað"
    }
  },
  {
    "infinitiv": {
      "de": "klingen",
      "lv": "að hljóma"
    },
    "praesens": {
      "de": "er klingt",
      "lv": "það hljómar"
    },
    "imperfektIndikativ": {
      "de": "er klang",
      "lv": "það hljómaði"
    },
    "imperfektKonjunktiv": {
      "de": "er klänge",
      "lv": "það myndi hljóma"
    },
    "partizipVergangenheit": {
      "de": "geklungen",
      "lv": "hljómað"
    }
  },
  {
    "infinitiv": {
      "de": "kneifen",
      "lv": "að klípa"
    },
    "praesens": {
      "de": "er kneift",
      "lv": "hann klípur"
    },
    "imperfektIndikativ": {
      "de": "er kniff",
      "lv": "hann kleip"
    },
    "imperfektKonjunktiv": {
      "de": "er kniffe",
      "lv": "hann myndi klípa"
    },
    "partizipVergangenheit": {
      "de": "gekniffen",
      "lv": "klipið"
    }
  },
  {
    "infinitiv": {
      "de": "bleiben",
      "lv": "að vera um kyrrt"
    },
    "praesens": {
      "de": "er bleibt",
      "lv": "hann er um kyrrt"
    },
    "imperfektIndikativ": {
      "de": "er blieb",
      "lv": "hann var um kyrrt"
    },
    "imperfektKonjunktiv": {
      "de": "er bliebe",
      "lv": "hann myndi vera um kyrrt"
    },
    "partizipVergangenheit": {
      "de": "geblieben (er ist)",
      "lv": "verið um kyrrt"
    }
  },
  {
    "infinitiv": {
      "de": "bleichen",
      "lv": "að upplitast"
    },
    "praesens": {
      "de": "er bleicht",
      "lv": "það upplitast"
    },
    "imperfektIndikativ": {
      "de": "blich",
      "lv": "það upplitaðist"
    },
    "imperfektKonjunktiv": {
      "de": "blich",
      "lv": "það myndi upplitast"
    },
    "partizipVergangenheit": {
      "de": "geblichen",
      "lv": "upplitast"
    }
  },
  {
    "infinitiv": {
      "de": "braten",
      "lv": "að steikja"
    },
    "praesens": {
      "de": "er brät",
      "lv": "hann steikir"
    },
    "imperfektIndikativ": {
      "de": "er briet",
      "lv": "hann steikti"
    },
    "imperfektKonjunktiv": {
      "de": "er briete",
      "lv": "hann myndi steikja"
    },
    "partizipVergangenheit": {
      "de": "gebraten",
      "lv": "steikt"
    }
  },
  {
    "infinitiv": {
      "de": "brechen",
      "lv": "að brjóta"
    },
    "praesens": {
      "de": "er bricht",
      "lv": "hann brýtur"
    },
    "imperfektIndikativ": {
      "de": "er brach",
      "lv": "hann braut"
    },
    "imperfektKonjunktiv": {
      "de": "er bräche",
      "lv": "hann myndi brjóta"
    },
    "partizipVergangenheit": {
      "de": "gebrochen",
      "lv": "brotið"
    }
  },
  {
    "infinitiv": {
      "de": "brennen",
      "lv": "að brenna"
    },
    "praesens": {
      "de": "er brennt",
      "lv": "það brennur"
    },
    "imperfektIndikativ": {
      "de": "brannte",
      "lv": "það brann"
    },
    "imperfektKonjunktiv": {
      "de": "brannte",
      "lv": "það myndi brenna"
    },
    "partizipVergangenheit": {
      "de": "gebrannt",
      "lv": "brunnið"
    }
  },
  {
    "infinitiv": {
      "de": "bringen",
      "lv": "að koma með"
    },
    "praesens": {
      "de": "er bringt",
      "lv": "hann kemur með"
    },
    "imperfektIndikativ": {
      "de": "er brachte",
      "lv": "hann kom með"
    },
    "imperfektKonjunktiv": {
      "de": "er brächte",
      "lv": "hann myndi koma með"
    },
    "partizipVergangenheit": {
      "de": "gebracht",
      "lv": "komið með"
    }
  },
  {
    "infinitiv": {
      "de": "denken",
      "lv": "að hugsa"
    },
    "praesens": {
      "de": "er denkt",
      "lv": "hann hugsar"
    },
    "imperfektIndikativ": {
      "de": "er dachte",
      "lv": "hann hugsaði"
    },
    "imperfektKonjunktiv": {
      "de": "er dächte",
      "lv": "hann myndi hugsa"
    },
    "partizipVergangenheit": {
      "de": "gedacht",
      "lv": "hugsað"
    }
  },
  {
    "infinitiv": {
      "de": "dingen",
      "lv": "að ráða / að semja"
    },
    "praesens": {
      "de": "er dingt",
      "lv": "hann ræður / semur"
    },
    "imperfektIndikativ": {
      "de": "dingte",
      "lv": "hann réð / samdi"
    },
    "imperfektKonjunktiv": {
      "de": "dingte",
      "lv": "hann myndi ráða / semja"
    },
    "partizipVergangenheit": {
      "de": "gedungen",
      "lv": "ráðið / samið"
    }
  },
  {
    "infinitiv": {
      "de": "dreschen",
      "lv": "að þreskja"
    },
    "praesens": {
      "de": "er drischt",
      "lv": "hann þreskir"
    },
    "imperfektIndikativ": {
      "de": "er drasch / er drosch",
      "lv": "hann þreskti"
    },
    "imperfektKonjunktiv": {
      "de": "er dräsche / er drösche",
      "lv": "hann myndi þreskja"
    },
    "partizipVergangenheit": {
      "de": "gedroschen",
      "lv": "þreskt"
    }
  },
  {
    "infinitiv": {
      "de": "dringen",
      "lv": "að brjótast inn"
    },
    "praesens": {
      "de": "er dringt",
      "lv": "hann brýst inn"
    },
    "imperfektIndikativ": {
      "de": "er drang",
      "lv": "hann braust inn"
    },
    "imperfektKonjunktiv": {
      "de": "er dränge",
      "lv": "hann myndi brjótast inn"
    },
    "partizipVergangenheit": {
      "de": "gedrungen (er ist)",
      "lv": "brotist inn"
    }
  },
  {
    "infinitiv": {
      "de": "dünken",
      "lv": "að virðast"
    },
    "praesens": {
      "de": "es dünkt",
      "lv": "það virðist"
    },
    "imperfektIndikativ": {
      "de": "deuchte",
      "lv": "það virtist"
    },
    "imperfektKonjunktiv": {
      "de": "deuchte",
      "lv": "það myndi virðast"
    },
    "partizipVergangenheit": {
      "de": "gedünkt",
      "lv": "virst"
    }
  },
  {
    "infinitiv": {
      "de": "dürfen",
      "lv": "að mega"
    },
    "praesens": {
      "de": "er darf",
      "lv": "hann má"
    },
    "imperfektIndikativ": {
      "de": "durfte",
      "lv": "hann mátti"
    },
    "imperfektKonjunktiv": {
      "de": "durfte",
      "lv": "hann myndi mega"
    },
    "partizipVergangenheit": {
      "de": "gedurft",
      "lv": "mátt"
    }
  },
  {
    "infinitiv": {
      "de": "empfehlen",
      "lv": "að mæla með"
    },
    "praesens": {
      "de": "er empfiehlt",
      "lv": "hann mælir með"
    },
    "imperfektIndikativ": {
      "de": "er empfahl",
      "lv": "hann mælti með"
    },
    "imperfektKonjunktiv": {
      "de": "er empfähle / er empföhle",
      "lv": "hann myndi mæla með"
    },
    "partizipVergangenheit": {
      "de": "empfohlen",
      "lv": "mælt með"
    }
  },
  {
    "infinitiv": {
      "de": "empfinden",
      "lv": "að finna fyrir"
    },
    "praesens": {
      "de": "er empfindet",
      "lv": "hann finnur fyrir"
    },
    "imperfektIndikativ": {
      "de": "er empfand",
      "lv": "hann fann fyrir"
    },
    "imperfektKonjunktiv": {
      "de": "er empfände",
      "lv": "hann myndi finna fyrir"
    },
    "partizipVergangenheit": {
      "de": "empfunden",
      "lv": "fundið fyrir"
    }
  },
  {
    "infinitiv": {
      "de": "erlöschen",
      "lv": "að slokkna"
    },
    "praesens": {
      "de": "er erlischt",
      "lv": "það slokknar"
    },
    "imperfektIndikativ": {
      "de": "er erlosch",
      "lv": "það slokknaði"
    },
    "imperfektKonjunktiv": {
      "de": "er erlösche",
      "lv": "það myndi slokkna"
    },
    "partizipVergangenheit": {
      "de": "erloschen (er ist)",
      "lv": "slokknað"
    }
  },
  {
    "infinitiv": {
      "de": "erschrecken",
      "lv": "að hrökkva við"
    },
    "praesens": {
      "de": "er erschrickt",
      "lv": "hann hrekkur við"
    },
    "imperfektIndikativ": {
      "de": "er erschrak",
      "lv": "hann hrökk við"
    },
    "imperfektKonjunktiv": {
      "de": "er erschräke",
      "lv": "hann myndi hrökkva við"
    },
    "partizipVergangenheit": {
      "de": "erschrocken (er ist)",
      "lv": "hrokkið við"
    }
  },
  {
    "infinitiv": {
      "de": "essen",
      "lv": "að borða"
    },
    "praesens": {
      "de": "er isst",
      "lv": "hann borðar"
    },
    "imperfektIndikativ": {
      "de": "er ass",
      "lv": "hann borðaði"
    },
    "imperfektKonjunktiv": {
      "de": "er äße",
      "lv": "hann myndi borða"
    },
    "partizipVergangenheit": {
      "de": "gegessen",
      "lv": "borðað"
    }
  },
  {
    "infinitiv": {
      "de": "fahren",
      "lv": "að aka"
    },
    "praesens": {
      "de": "er fährt",
      "lv": "hann ekur"
    },
    "imperfektIndikativ": {
      "de": "er fuhr",
      "lv": "hann ók"
    },
    "imperfektKonjunktiv": {
      "de": "er führe",
      "lv": "hann myndi aka"
    },
    "partizipVergangenheit": {
      "de": "gefahren (er ist)",
      "lv": "ekið"
    }
  },
  {
    "infinitiv": {
      "de": "fallen",
      "lv": "að falla"
    },
    "praesens": {
      "de": "er fällt",
      "lv": "hann fellur"
    },
    "imperfektIndikativ": {
      "de": "er fiel",
      "lv": "hann féll"
    },
    "imperfektKonjunktiv": {
      "de": "er fiele",
      "lv": "hann myndi falla"
    },
    "partizipVergangenheit": {
      "de": "gefallen (er ist)",
      "lv": "fallið"
    }
  },
  {
    "infinitiv": {
      "de": "fangen",
      "lv": "að grípa"
    },
    "praesens": {
      "de": "er fängt",
      "lv": "hann grípur"
    },
    "imperfektIndikativ": {
      "de": "er fing",
      "lv": "hann greip"
    },
    "imperfektKonjunktiv": {
      "de": "er finge",
      "lv": "hann myndi grípa"
    },
    "partizipVergangenheit": {
      "de": "gefangen",
      "lv": "gripið"
    }
  },
  {
    "infinitiv": {
      "de": "finden",
      "lv": "að finna"
    },
    "praesens": {
      "de": "er findet",
      "lv": "hann finnur"
    },
    "imperfektIndikativ": {
      "de": "er fand",
      "lv": "hann fann"
    },
    "imperfektKonjunktiv": {
      "de": "er fände",
      "lv": "hann myndi finna"
    },
    "partizipVergangenheit": {
      "de": "gefunden",
      "lv": "fundið"
    }
  },
  {
    "infinitiv": {
      "de": "fliegen",
      "lv": "að fljúga"
    },
    "praesens": {
      "de": "er fliegt",
      "lv": "hann flýgur"
    },
    "imperfektIndikativ": {
      "de": "er flog",
      "lv": "hann flaug"
    },
    "imperfektKonjunktiv": {
      "de": "er flöge",
      "lv": "hann myndi fljúga"
    },
    "partizipVergangenheit": {
      "de": "geflogen (er ist)",
      "lv": "flogið"
    }
  },
  {
    "infinitiv": {
      "de": "fliehen",
      "lv": "að flýja"
    },
    "praesens": {
      "de": "er flieht",
      "lv": "hann flýr"
    },
    "imperfektIndikativ": {
      "de": "er floh",
      "lv": "hann flúði"
    },
    "imperfektKonjunktiv": {
      "de": "er flöhe",
      "lv": "hann myndi flýja"
    },
    "partizipVergangenheit": {
      "de": "geflohen (er ist)",
      "lv": "flúið"
    }
  },
  {
    "infinitiv": {
      "de": "fließen",
      "lv": "að renna"
    },
    "praesens": {
      "de": "er fließt",
      "lv": "það rennur"
    },
    "imperfektIndikativ": {
      "de": "er floss",
      "lv": "það rann"
    },
    "imperfektKonjunktiv": {
      "de": "er flösse",
      "lv": "það myndi renna"
    },
    "partizipVergangenheit": {
      "de": "geflossen (er ist)",
      "lv": "runnið"
    }
  },
  {
    "infinitiv": {
      "de": "fressen",
      "lv": "að éta / að gleypa"
    },
    "praesens": {
      "de": "er frisst",
      "lv": "hann étur / gleypir"
    },
    "imperfektIndikativ": {
      "de": "er frass",
      "lv": "hann át / gleypti"
    },
    "imperfektKonjunktiv": {
      "de": "er fräße",
      "lv": "hann myndi éta / gleypa"
    },
    "partizipVergangenheit": {
      "de": "gefressen",
      "lv": "étið / gleypt"
    }
  },
  {
    "infinitiv": {
      "de": "frieren",
      "lv": "að vera kalt"
    },
    "praesens": {
      "de": "er friert",
      "lv": "honum er kalt"
    },
    "imperfektIndikativ": {
      "de": "er fror",
      "lv": "honum var kalt"
    },
    "imperfektKonjunktiv": {
      "de": "er fröre",
      "lv": "honum myndi vera kalt"
    },
    "partizipVergangenheit": {
      "de": "gefroren",
      "lv": "verið kalt"
    }
  },
  {
    "infinitiv": {
      "de": "geben",
      "lv": "að gefa"
    },
    "praesens": {
      "de": "er gibt",
      "lv": "hann gefur"
    },
    "imperfektIndikativ": {
      "de": "er gab",
      "lv": "hann gaf"
    },
    "imperfektKonjunktiv": {
      "de": "er gäbe",
      "lv": "hann myndi gefa"
    },
    "partizipVergangenheit": {
      "de": "gegeben",
      "lv": "gefið"
    }
  },
  {
    "infinitiv": {
      "de": "gedeihen",
      "lv": "að dafna"
    },
    "praesens": {
      "de": "er gedeiht",
      "lv": "hann dafnar"
    },
    "imperfektIndikativ": {
      "de": "er gedieh",
      "lv": "hann dafnaði"
    },
    "imperfektKonjunktiv": {
      "de": "er gediehe",
      "lv": "hann myndi dafna"
    },
    "partizipVergangenheit": {
      "de": "gediehen (er ist)",
      "lv": "dafnað"
    }
  },
  {
    "infinitiv": {
      "de": "gehen",
      "lv": "að ganga"
    },
    "praesens": {
      "de": "er geht",
      "lv": "hann gengur"
    },
    "imperfektIndikativ": {
      "de": "er ging",
      "lv": "hann gekk"
    },
    "imperfektKonjunktiv": {
      "de": "er ginge",
      "lv": "hann myndi ganga"
    },
    "partizipVergangenheit": {
      "de": "gegangen (er ist)",
      "lv": "gengið"
    }
  },
  {
    "infinitiv": {
      "de": "gewinnen",
      "lv": "að vinna"
    },
    "praesens": {
      "de": "er gewinnt",
      "lv": "hann vinnur"
    },
    "imperfektIndikativ": {
      "de": "er gewann",
      "lv": "hann vann"
    },
    "imperfektKonjunktiv": {
      "de": "er gewönne / er gewänne",
      "lv": "hann myndi vinna"
    },
    "partizipVergangenheit": {
      "de": "gewonnen",
      "lv": "unnið"
    }
  },
  {
    "infinitiv": {
      "de": "haben",
      "lv": "að hafa / að eiga"
    },
    "praesens": {
      "de": "er hat",
      "lv": "hann hefur / á"
    },
    "imperfektIndikativ": {
      "de": "hatte",
      "lv": "hann hafði / átti"
    },
    "imperfektKonjunktiv": {
      "de": "hatte",
      "lv": "hann myndi hafa / eiga"
    },
    "partizipVergangenheit": {
      "de": "gehabt",
      "lv": "haft / átt"
    }
  },
  {
    "infinitiv": {
      "de": "halten",
      "lv": "að halda"
    },
    "praesens": {
      "de": "er hält",
      "lv": "hann heldur"
    },
    "imperfektIndikativ": {
      "de": "er hielt",
      "lv": "hann hélt"
    },
    "imperfektKonjunktiv": {
      "de": "er hielte",
      "lv": "hann myndi halda"
    },
    "partizipVergangenheit": {
      "de": "gehalten",
      "lv": "haldið"
    }
  },
  {
    "infinitiv": {
      "de": "heißen",
      "lv": "að kalla / að heita"
    },
    "praesens": {
      "de": "er heißt",
      "lv": "hann kallar / heitir"
    },
    "imperfektIndikativ": {
      "de": "er hieß",
      "lv": "hann kallaði / hét"
    },
    "imperfektKonjunktiv": {
      "de": "er hieße",
      "lv": "hann myndi kalla / heita"
    },
    "partizipVergangenheit": {
      "de": "geheißen",
      "lv": "kallað / heitið"
    }
  },
  {
    "infinitiv": {
      "de": "helfen",
      "lv": "að hjálpa"
    },
    "praesens": {
      "de": "er hilft",
      "lv": "hann hjálpar"
    },
    "imperfektIndikativ": {
      "de": "er half",
      "lv": "hann hjálpaði"
    },
    "imperfektKonjunktiv": {
      "de": "er hülfe / er hälfe",
      "lv": "hann myndi hjálpa"
    },
    "partizipVergangenheit": {
      "de": "geholfen",
      "lv": "hjálpað"
    }
  },
  {
    "infinitiv": {
      "de": "kommen",
      "lv": "að koma"
    },
    "praesens": {
      "de": "er kommt",
      "lv": "hann kemur"
    },
    "imperfektIndikativ": {
      "de": "er kam",
      "lv": "hann kom"
    },
    "imperfektKonjunktiv": {
      "de": "er käme",
      "lv": "hann myndi koma"
    },
    "partizipVergangenheit": {
      "de": "gekommen (er ist)",
      "lv": "komið"
    }
  },
  {
    "infinitiv": {
      "de": "können",
      "lv": "að geta"
    },
    "praesens": {
      "de": "er kann",
      "lv": "hann getur"
    },
    "imperfektIndikativ": {
      "de": "konnte",
      "lv": "hann gat"
    },
    "imperfektKonjunktiv": {
      "de": "konnte",
      "lv": "hann myndi geta"
    },
    "partizipVergangenheit": {
      "de": "gekonnt",
      "lv": "getað"
    }
  },
  {
    "infinitiv": {
      "de": "kriechen",
      "lv": "að skríða"
    },
    "praesens": {
      "de": "er kriecht",
      "lv": "hann skríður"
    },
    "imperfektIndikativ": {
      "de": "er kroch",
      "lv": "hann skreið"
    },
    "imperfektKonjunktiv": {
      "de": "er kröche",
      "lv": "hann myndi skríða"
    },
    "partizipVergangenheit": {
      "de": "gekrochen (er ist)",
      "lv": "skriðið"
    }
  },
  {
    "infinitiv": {
      "de": "laden",
      "lv": "að hlaða / að bjóða"
    },
    "praesens": {
      "de": "er lädt",
      "lv": "hann hleður / býður"
    },
    "imperfektIndikativ": {
      "de": "er lud",
      "lv": "hann hlóð / bauð"
    },
    "imperfektKonjunktiv": {
      "de": "er lüde",
      "lv": "hann myndi hlaða / bjóða"
    },
    "partizipVergangenheit": {
      "de": "geladen",
      "lv": "hlaðið / boðið"
    }
  },
  {
    "infinitiv": {
      "de": "lassen",
      "lv": "að láta / að leyfa"
    },
    "praesens": {
      "de": "er lässt",
      "lv": "hann lætur / leyfir"
    },
    "imperfektIndikativ": {
      "de": "er ließ",
      "lv": "hann lét / leyfði"
    },
    "imperfektKonjunktiv": {
      "de": "er ließe",
      "lv": "hann myndi láta / leyfa"
    },
    "partizipVergangenheit": {
      "de": "gelassen",
      "lv": "látið / leyft"
    }
  },
  {
    "infinitiv": {
      "de": "laufen",
      "lv": "að hlaupa"
    },
    "praesens": {
      "de": "er läuft",
      "lv": "hann hleypur"
    },
    "imperfektIndikativ": {
      "de": "er lief",
      "lv": "hann hljóp"
    },
    "imperfektKonjunktiv": {
      "de": "er liefe",
      "lv": "hann myndi hlaupa"
    },
    "partizipVergangenheit": {
      "de": "gelaufen (er ist)",
      "lv": "hlaupið"
    }
  },
  {
    "infinitiv": {
      "de": "leiden",
      "lv": "að þjást"
    },
    "praesens": {
      "de": "er leidet",
      "lv": "hann þjáist"
    },
    "imperfektIndikativ": {
      "de": "er litt",
      "lv": "hann þjáðist"
    },
    "imperfektKonjunktiv": {
      "de": "er litte",
      "lv": "hann myndi þjást"
    },
    "partizipVergangenheit": {
      "de": "gelitten",
      "lv": "þjáðst"
    }
  },
  {
    "infinitiv": {
      "de": "leihen",
      "lv": "að lána / að fá lánað"
    },
    "praesens": {
      "de": "er leiht",
      "lv": "hann lánar / fær lánað"
    },
    "imperfektIndikativ": {
      "de": "er lieh",
      "lv": "hann lánaði / fékk lánað"
    },
    "imperfektKonjunktiv": {
      "de": "er liehe",
      "lv": "hann myndi lána / fá lánað"
    },
    "partizipVergangenheit": {
      "de": "geliehen",
      "lv": "lánað / fengið lánað"
    }
  },
  {
    "infinitiv": {
      "de": "lesen",
      "lv": "að lesa"
    },
    "praesens": {
      "de": "er liest",
      "lv": "hann les"
    },
    "imperfektIndikativ": {
      "de": "er las",
      "lv": "hann las"
    },
    "imperfektKonjunktiv": {
      "de": "er läse",
      "lv": "hann myndi lesa"
    },
    "partizipVergangenheit": {
      "de": "gelesen",
      "lv": "lesið"
    }
  },
  {
    "infinitiv": {
      "de": "liegen",
      "lv": "að liggja"
    },
    "praesens": {
      "de": "er liegt",
      "lv": "hann liggur"
    },
    "imperfektIndikativ": {
      "de": "er lag",
      "lv": "hann lá"
    },
    "imperfektKonjunktiv": {
      "de": "er läge",
      "lv": "hann myndi liggja"
    },
    "partizipVergangenheit": {
      "de": "gelegen",
      "lv": "legið"
    }
  },
  {
    "infinitiv": {
      "de": "lügen",
      "lv": "að ljúga"
    },
    "praesens": {
      "de": "er lügt",
      "lv": "hann lýgur"
    },
    "imperfektIndikativ": {
      "de": "er log",
      "lv": "hann laug"
    },
    "imperfektKonjunktiv": {
      "de": "er löge",
      "lv": "hann myndi ljúga"
    },
    "partizipVergangenheit": {
      "de": "gelogen",
      "lv": "logið"
    }
  },
  {
    "infinitiv": {
      "de": "mahlen",
      "lv": "að mala"
    },
    "praesens": {
      "de": "er mahlt",
      "lv": "hann malar"
    },
    "imperfektIndikativ": {
      "de": "er mahlte",
      "lv": "hann malaði"
    },
    "imperfektKonjunktiv": {
      "de": "er malte",
      "lv": "hann myndi mala"
    },
    "partizipVergangenheit": {
      "de": "gemahlen",
      "lv": "malað"
    }
  },
  {
    "infinitiv": {
      "de": "meiden",
      "lv": "að forðast"
    },
    "praesens": {
      "de": "er meidet",
      "lv": "hann forðast"
    },
    "imperfektIndikativ": {
      "de": "er mied",
      "lv": "hann forðaðist"
    },
    "imperfektKonjunktiv": {
      "de": "er miede",
      "lv": "hann myndi forðast"
    },
    "partizipVergangenheit": {
      "de": "gemieden",
      "lv": "forðast"
    }
  },
  {
    "infinitiv": {
      "de": "melken",
      "lv": "að mjólka"
    },
    "praesens": {
      "de": "er milkt / er melkt",
      "lv": "hann mjólkar"
    },
    "imperfektIndikativ": {
      "de": "er molk / er melkte",
      "lv": "hann mjólkaði"
    },
    "imperfektKonjunktiv": {
      "de": "er mölke / er melkte",
      "lv": "hann myndi mjólka"
    },
    "partizipVergangenheit": {
      "de": "gemolken / gemelkt",
      "lv": "mjólkað"
    }
  },
  {
    "infinitiv": {
      "de": "messen",
      "lv": "að mæla"
    },
    "praesens": {
      "de": "er misst",
      "lv": "hann mælir"
    },
    "imperfektIndikativ": {
      "de": "er mass",
      "lv": "hann mældi"
    },
    "imperfektKonjunktiv": {
      "de": "er mäße",
      "lv": "hann myndi mæla"
    },
    "partizipVergangenheit": {
      "de": "gemessen",
      "lv": "mælt"
    }
  },
  {
    "infinitiv": {
      "de": "misslingen",
      "lv": "að misheppnast"
    },
    "praesens": {
      "de": "es misslingt",
      "lv": "það misheppnast"
    },
    "imperfektIndikativ": {
      "de": "misslang",
      "lv": "það misheppnaðist"
    },
    "imperfektKonjunktiv": {
      "de": "misslang",
      "lv": "það myndi misheppnast"
    },
    "partizipVergangenheit": {
      "de": "misslungen",
      "lv": "misheppnast"
    }
  },
  {
    "infinitiv": {
      "de": "mögen",
      "lv": "að líka"
    },
    "praesens": {
      "de": "er mag",
      "lv": "honum líkar"
    },
    "imperfektIndikativ": {
      "de": "mochte",
      "lv": "honum líkaði"
    },
    "imperfektKonjunktiv": {
      "de": "mochte",
      "lv": "honum myndi líka"
    },
    "partizipVergangenheit": {
      "de": "gemocht",
      "lv": "líkað"
    }
  },
  {
    "infinitiv": {
      "de": "müssen",
      "lv": "að þurfa"
    },
    "praesens": {
      "de": "er muss",
      "lv": "hann þarf"
    },
    "imperfektIndikativ": {
      "de": "musste",
      "lv": "hann þurfti"
    },
    "imperfektKonjunktiv": {
      "de": "musste",
      "lv": "hann myndi þurfa"
    },
    "partizipVergangenheit": {
      "de": "gemusst",
      "lv": "þurft"
    }
  },
  {
    "infinitiv": {
      "de": "nehmen",
      "lv": "að taka"
    },
    "praesens": {
      "de": "er nimmt",
      "lv": "hann tekur"
    },
    "imperfektIndikativ": {
      "de": "er nahm",
      "lv": "hann tók"
    },
    "imperfektKonjunktiv": {
      "de": "er nähme",
      "lv": "hann myndi taka"
    },
    "partizipVergangenheit": {
      "de": "genommen",
      "lv": "tekið"
    }
  },
  {
    "infinitiv": {
      "de": "nennen",
      "lv": "að nefna"
    },
    "praesens": {
      "de": "er nennt",
      "lv": "hann nefnir"
    },
    "imperfektIndikativ": {
      "de": "er nannte",
      "lv": "hann nefndi"
    },
    "imperfektKonjunktiv": {
      "de": "er nennte",
      "lv": "hann myndi nefna"
    },
    "partizipVergangenheit": {
      "de": "genannt",
      "lv": "nefnt"
    }
  },
  {
    "infinitiv": {
      "de": "pfeifen",
      "lv": "að flauta"
    },
    "praesens": {
      "de": "er pfeift",
      "lv": "hann flautar"
    },
    "imperfektIndikativ": {
      "de": "er pfiff",
      "lv": "hann flautaði"
    },
    "imperfektKonjunktiv": {
      "de": "er pfiffe",
      "lv": "hann myndi flauta"
    },
    "partizipVergangenheit": {
      "de": "gepfiffen",
      "lv": "flautað"
    }
  },
  {
    "infinitiv": {
      "de": "pflegen",
      "lv": "að annast"
    },
    "praesens": {
      "de": "er pflegt",
      "lv": "hann annast"
    },
    "imperfektIndikativ": {
      "de": "pflegte / pflog",
      "lv": "hann annaðist"
    },
    "imperfektKonjunktiv": {
      "de": "pflegte / pflog",
      "lv": "hann myndi annast"
    },
    "partizipVergangenheit": {
      "de": "gepflegt / gepflogen",
      "lv": "annast"
    }
  },
  {
    "infinitiv": {
      "de": "preisen",
      "lv": "að lofa"
    },
    "praesens": {
      "de": "er preist",
      "lv": "hann lofar"
    },
    "imperfektIndikativ": {
      "de": "er pries",
      "lv": "hann lofaði"
    },
    "imperfektKonjunktiv": {
      "de": "er priese",
      "lv": "hann myndi lofa"
    },
    "partizipVergangenheit": {
      "de": "gepriesen",
      "lv": "lofað"
    }
  },
  {
    "infinitiv": {
      "de": "quellen",
      "lv": "að þrútna"
    },
    "praesens": {
      "de": "er quillt",
      "lv": "það þrútnar"
    },
    "imperfektIndikativ": {
      "de": "er quoll",
      "lv": "það þrútnaði"
    },
    "imperfektKonjunktiv": {
      "de": "er quölle",
      "lv": "það myndi þrútna"
    },
    "partizipVergangenheit": {
      "de": "gequollen (er ist)",
      "lv": "þrútnað"
    }
  },
  {
    "infinitiv": {
      "de": "raten",
      "lv": "að ráðleggja / að giska"
    },
    "praesens": {
      "de": "er rät",
      "lv": "hann ráðleggur / giskar"
    },
    "imperfektIndikativ": {
      "de": "er riet",
      "lv": "hann ráðlagði / giskaði"
    },
    "imperfektKonjunktiv": {
      "de": "er riete",
      "lv": "hann myndi ráðleggja / giska"
    },
    "partizipVergangenheit": {
      "de": "geraten",
      "lv": "ráðlagt / giskað"
    }
  },
  {
    "infinitiv": {
      "de": "reiben",
      "lv": "að nudda"
    },
    "praesens": {
      "de": "er reibt",
      "lv": "hann nuddar"
    },
    "imperfektIndikativ": {
      "de": "er rieb",
      "lv": "hann nuddaði"
    },
    "imperfektKonjunktiv": {
      "de": "er riebe",
      "lv": "hann myndi nudda"
    },
    "partizipVergangenheit": {
      "de": "gerieben",
      "lv": "nuddað"
    }
  },
  {
    "infinitiv": {
      "de": "reißen",
      "lv": "að rífa"
    },
    "praesens": {
      "de": "er reißt",
      "lv": "hann rífur"
    },
    "imperfektIndikativ": {
      "de": "er riss",
      "lv": "hann reif"
    },
    "imperfektKonjunktiv": {
      "de": "er risse",
      "lv": "hann myndi rífa"
    },
    "partizipVergangenheit": {
      "de": "gerissen",
      "lv": "rifið"
    }
  },
  {
    "infinitiv": {
      "de": "reiten",
      "lv": "að ríða"
    },
    "praesens": {
      "de": "er reitet",
      "lv": "hann ríður"
    },
    "imperfektIndikativ": {
      "de": "er ritt",
      "lv": "hann reið"
    },
    "imperfektKonjunktiv": {
      "de": "er ritte",
      "lv": "hann myndi ríða"
    },
    "partizipVergangenheit": {
      "de": "geritten (er ist)",
      "lv": "riðið"
    }
  },
  {
    "infinitiv": {
      "de": "rennen",
      "lv": "að hlaupa"
    },
    "praesens": {
      "de": "er rennt",
      "lv": "hann hleypur"
    },
    "imperfektIndikativ": {
      "de": "er rannte",
      "lv": "hann hljóp"
    },
    "imperfektKonjunktiv": {
      "de": "er rennte",
      "lv": "hann myndi hlaupa"
    },
    "partizipVergangenheit": {
      "de": "gerannt",
      "lv": "hlaupið"
    }
  },
  {
    "infinitiv": {
      "de": "riechen",
      "lv": "að þefa"
    },
    "praesens": {
      "de": "er riecht",
      "lv": "hann þefar"
    },
    "imperfektIndikativ": {
      "de": "er roch",
      "lv": "hann þefaði"
    },
    "imperfektKonjunktiv": {
      "de": "er röche",
      "lv": "hann myndi þefa"
    },
    "partizipVergangenheit": {
      "de": "gerochen",
      "lv": "þefað"
    }
  },
  {
    "infinitiv": {
      "de": "ringen",
      "lv": "að glíma"
    },
    "praesens": {
      "de": "er ringt",
      "lv": "hann glímir"
    },
    "imperfektIndikativ": {
      "de": "er rang",
      "lv": "hann glímdi"
    },
    "imperfektKonjunktiv": {
      "de": "er ränge",
      "lv": "hann myndi glíma"
    },
    "partizipVergangenheit": {
      "de": "gerungen",
      "lv": "glímt"
    }
  },
  {
    "infinitiv": {
      "de": "rinnen",
      "lv": "að renna"
    },
    "praesens": {
      "de": "er rinnt",
      "lv": "það rennur"
    },
    "imperfektIndikativ": {
      "de": "er rann",
      "lv": "það rann"
    },
    "imperfektKonjunktiv": {
      "de": "er ränne / er rönne",
      "lv": "það myndi renna"
    },
    "partizipVergangenheit": {
      "de": "geronnen (er ist)",
      "lv": "runnið"
    }
  },
  {
    "infinitiv": {
      "de": "rufen",
      "lv": "að kalla"
    },
    "praesens": {
      "de": "er ruft",
      "lv": "hann kallar"
    },
    "imperfektIndikativ": {
      "de": "er rief",
      "lv": "hann kallaði"
    },
    "imperfektKonjunktiv": {
      "de": "er riefe",
      "lv": "hann myndi kalla"
    },
    "partizipVergangenheit": {
      "de": "gerufen",
      "lv": "kallað"
    }
  },
  {
    "infinitiv": {
      "de": "salzen",
      "lv": "að salta"
    },
    "praesens": {
      "de": "er salzt",
      "lv": "hann saltar"
    },
    "imperfektIndikativ": {
      "de": "er salzte",
      "lv": "hann saltaði"
    },
    "imperfektKonjunktiv": {
      "de": "er salzte",
      "lv": "hann myndi salta"
    },
    "partizipVergangenheit": {
      "de": "gesalzen",
      "lv": "saltað"
    }
  },
  {
    "infinitiv": {
      "de": "saufen",
      "lv": "að þjóra / að drekka"
    },
    "praesens": {
      "de": "er säuft",
      "lv": "hann þjórar / drekkur"
    },
    "imperfektIndikativ": {
      "de": "er soff",
      "lv": "hann þjóraði / drakk"
    },
    "imperfektKonjunktiv": {
      "de": "er söffe",
      "lv": "hann myndi þjóra / drekka"
    },
    "partizipVergangenheit": {
      "de": "gesoffen",
      "lv": "þjórað / drukkið"
    }
  },
  {
    "infinitiv": {
      "de": "saugen",
      "lv": "að sjúga"
    },
    "praesens": {
      "de": "er saugt",
      "lv": "hann sýgur"
    },
    "imperfektIndikativ": {
      "de": "er sog",
      "lv": "hann saug"
    },
    "imperfektKonjunktiv": {
      "de": "er söge",
      "lv": "hann myndi sjúga"
    },
    "partizipVergangenheit": {
      "de": "gesogen",
      "lv": "sogið"
    }
  },
  {
    "infinitiv": {
      "de": "schaffen",
      "lv": "að skapa"
    },
    "praesens": {
      "de": "er schafft",
      "lv": "hann skapar"
    },
    "imperfektIndikativ": {
      "de": "er schuf",
      "lv": "hann skapaði"
    },
    "imperfektKonjunktiv": {
      "de": "er schüfe",
      "lv": "hann myndi skapa"
    },
    "partizipVergangenheit": {
      "de": "geschaffen",
      "lv": "skapað"
    }
  },
  {
    "infinitiv": {
      "de": "schallen",
      "lv": "að hljóma"
    },
    "praesens": {
      "de": "es schallt",
      "lv": "það hljómar"
    },
    "imperfektIndikativ": {
      "de": "schallte / scholl",
      "lv": "það hljómaði"
    },
    "imperfektKonjunktiv": {
      "de": "schallte / scholl",
      "lv": "það myndi hljóma"
    },
    "partizipVergangenheit": {
      "de": "geschallt",
      "lv": "hljómað"
    }
  },
  {
    "infinitiv": {
      "de": "scheiden",
      "lv": "að aðskilja / að skilja"
    },
    "praesens": {
      "de": "er scheidet",
      "lv": "hann aðskilur / skilur"
    },
    "imperfektIndikativ": {
      "de": "er schied",
      "lv": "hann aðskildi / skildi"
    },
    "imperfektKonjunktiv": {
      "de": "er schiede",
      "lv": "hann myndi aðskilja / skilja"
    },
    "partizipVergangenheit": {
      "de": "geschieden (er hat / er ist)",
      "lv": "aðskilið / skilið"
    }
  },
  {
    "infinitiv": {
      "de": "scheinen",
      "lv": "að skína / að virðast"
    },
    "praesens": {
      "de": "er scheint",
      "lv": "hann skín / virðist"
    },
    "imperfektIndikativ": {
      "de": "er schien",
      "lv": "hann skein / virtist"
    },
    "imperfektKonjunktiv": {
      "de": "er schiene",
      "lv": "hann myndi skína / virðast"
    },
    "partizipVergangenheit": {
      "de": "geschienen",
      "lv": "skinið / virst"
    }
  },
  {
    "infinitiv": {
      "de": "schelten",
      "lv": "að skamma"
    },
    "praesens": {
      "de": "er schilt",
      "lv": "hann skammar"
    },
    "imperfektIndikativ": {
      "de": "er schalt",
      "lv": "hann skammaði"
    },
    "imperfektKonjunktiv": {
      "de": "er schölte / er schälte",
      "lv": "hann myndi skamma"
    },
    "partizipVergangenheit": {
      "de": "gescholten",
      "lv": "skammað"
    }
  },
  {
    "infinitiv": {
      "de": "scheren",
      "lv": "að rýja"
    },
    "praesens": {
      "de": "er schert",
      "lv": "hann rýir"
    },
    "imperfektIndikativ": {
      "de": "schor / scherte",
      "lv": "hann rúði"
    },
    "imperfektKonjunktiv": {
      "de": "schor / scherte",
      "lv": "hann myndi rýja"
    },
    "partizipVergangenheit": {
      "de": "geschoren / geschert",
      "lv": "rúið"
    }
  },
  {
    "infinitiv": {
      "de": "schieben",
      "lv": "að ýta"
    },
    "praesens": {
      "de": "er schiebt",
      "lv": "hann ýtir"
    },
    "imperfektIndikativ": {
      "de": "er schob",
      "lv": "hann ýtti"
    },
    "imperfektKonjunktiv": {
      "de": "er schöbe",
      "lv": "hann myndi ýta"
    },
    "partizipVergangenheit": {
      "de": "geschoben",
      "lv": "ýtt"
    }
  },
  {
    "infinitiv": {
      "de": "schießen",
      "lv": "að skjóta"
    },
    "praesens": {
      "de": "er schießt",
      "lv": "hann skýtur"
    },
    "imperfektIndikativ": {
      "de": "er schoss",
      "lv": "hann skaut"
    },
    "imperfektKonjunktiv": {
      "de": "er schösse",
      "lv": "hann myndi skjóta"
    },
    "partizipVergangenheit": {
      "de": "geschossen",
      "lv": "skotið"
    }
  },
  {
    "infinitiv": {
      "de": "schinden",
      "lv": "að kvelja"
    },
    "praesens": {
      "de": "er schindet",
      "lv": "hann kvelur"
    },
    "imperfektIndikativ": {
      "de": "schindete",
      "lv": "hann kvaldi"
    },
    "imperfektKonjunktiv": {
      "de": "schindete",
      "lv": "hann myndi kvelja"
    },
    "partizipVergangenheit": {
      "de": "geschunden",
      "lv": "kvalið"
    }
  },
  {
    "infinitiv": {
      "de": "schlafen",
      "lv": "að sofa"
    },
    "praesens": {
      "de": "er schläft",
      "lv": "hann sefur"
    },
    "imperfektIndikativ": {
      "de": "er schlief",
      "lv": "hann svaf"
    },
    "imperfektKonjunktiv": {
      "de": "er schliefe",
      "lv": "hann myndi sofa"
    },
    "partizipVergangenheit": {
      "de": "geschlafen",
      "lv": "sofið"
    }
  },
  {
    "infinitiv": {
      "de": "schlagen",
      "lv": "að slá"
    },
    "praesens": {
      "de": "er schlägt",
      "lv": "hann slær"
    },
    "imperfektIndikativ": {
      "de": "er schlug",
      "lv": "hann sló"
    },
    "imperfektKonjunktiv": {
      "de": "er schlüge",
      "lv": "hann myndi slá"
    },
    "partizipVergangenheit": {
      "de": "geschlagen",
      "lv": "slegið"
    }
  },
  {
    "infinitiv": {
      "de": "schleichen",
      "lv": "að læðast"
    },
    "praesens": {
      "de": "er schleicht",
      "lv": "hann læðist"
    },
    "imperfektIndikativ": {
      "de": "er schlich",
      "lv": "hann læddist"
    },
    "imperfektKonjunktiv": {
      "de": "er schliche",
      "lv": "hann myndi læðast"
    },
    "partizipVergangenheit": {
      "de": "geschlichen (er ist)",
      "lv": "læðst"
    }
  },
  {
    "infinitiv": {
      "de": "schleifen",
      "lv": "að slípa"
    },
    "praesens": {
      "de": "er schleift",
      "lv": "hann slípar"
    },
    "imperfektIndikativ": {
      "de": "er schliff",
      "lv": "hann slípaði"
    },
    "imperfektKonjunktiv": {
      "de": "er schliffe",
      "lv": "hann myndi slípa"
    },
    "partizipVergangenheit": {
      "de": "geschliffen",
      "lv": "slípað"
    }
  },
  {
    "infinitiv": {
      "de": "schließen",
      "lv": "að loka"
    },
    "praesens": {
      "de": "er schließt",
      "lv": "hann lokar"
    },
    "imperfektIndikativ": {
      "de": "er schloss",
      "lv": "hann lokaði"
    },
    "imperfektKonjunktiv": {
      "de": "er schlösse",
      "lv": "hann myndi loka"
    },
    "partizipVergangenheit": {
      "de": "geschlossen",
      "lv": "lokað"
    }
  },
  {
    "infinitiv": {
      "de": "schlingen",
      "lv": "að gleypa"
    },
    "praesens": {
      "de": "er schlingt",
      "lv": "hann gleypir"
    },
    "imperfektIndikativ": {
      "de": "er schlang",
      "lv": "hann gleypti"
    },
    "imperfektKonjunktiv": {
      "de": "er schlänge",
      "lv": "hann myndi gleypa"
    },
    "partizipVergangenheit": {
      "de": "geschlungen",
      "lv": "gleypt"
    }
  },
  {
    "infinitiv": {
      "de": "schmeißen",
      "lv": "að henda"
    },
    "praesens": {
      "de": "er schmeißt",
      "lv": "hann hendir"
    },
    "imperfektIndikativ": {
      "de": "er schmiss",
      "lv": "hann henti"
    },
    "imperfektKonjunktiv": {
      "de": "er schmisse",
      "lv": "hann myndi henda"
    },
    "partizipVergangenheit": {
      "de": "geschmissen",
      "lv": "hent"
    }
  },
  {
    "infinitiv": {
      "de": "schmelzen",
      "lv": "að bráðna"
    },
    "praesens": {
      "de": "er schmilzt",
      "lv": "það bráðnar"
    },
    "imperfektIndikativ": {
      "de": "er schmolz",
      "lv": "það bráðnaði"
    },
    "imperfektKonjunktiv": {
      "de": "er schmölze",
      "lv": "það myndi bráðna"
    },
    "partizipVergangenheit": {
      "de": "geschmolzen (er ist)",
      "lv": "bráðnað"
    }
  },
  {
    "infinitiv": {
      "de": "schnauben",
      "lv": "að fnæsa"
    },
    "praesens": {
      "de": "er schnaubt",
      "lv": "hann fnæsir"
    },
    "imperfektIndikativ": {
      "de": "schnaubte / schnob",
      "lv": "hann fnæsti"
    },
    "imperfektKonjunktiv": {
      "de": "schnaubte / schnob",
      "lv": "hann myndi fnæsa"
    },
    "partizipVergangenheit": {
      "de": "geschnaubt / geschnoben",
      "lv": "fnæst"
    }
  },
  {
    "infinitiv": {
      "de": "schneiden",
      "lv": "að skera"
    },
    "praesens": {
      "de": "er schneidet",
      "lv": "hann sker"
    },
    "imperfektIndikativ": {
      "de": "er schnitt",
      "lv": "hann skar"
    },
    "imperfektKonjunktiv": {
      "de": "er schnitte",
      "lv": "hann myndi skera"
    },
    "partizipVergangenheit": {
      "de": "geschnitten",
      "lv": "skorið"
    }
  },
  {
    "infinitiv": {
      "de": "schreiben",
      "lv": "að skrifa"
    },
    "praesens": {
      "de": "er schreibt",
      "lv": "hann skrifar"
    },
    "imperfektIndikativ": {
      "de": "er schrieb",
      "lv": "hann skrifaði"
    },
    "imperfektKonjunktiv": {
      "de": "er schriebe",
      "lv": "hann myndi skrifa"
    },
    "partizipVergangenheit": {
      "de": "geschrieben",
      "lv": "skrifað"
    }
  },
  {
    "infinitiv": {
      "de": "schreien",
      "lv": "að öskra"
    },
    "praesens": {
      "de": "er schreit",
      "lv": "hann öskrar"
    },
    "imperfektIndikativ": {
      "de": "er schrie",
      "lv": "hann öskraði"
    },
    "imperfektKonjunktiv": {
      "de": "er schriee",
      "lv": "hann myndi öskra"
    },
    "partizipVergangenheit": {
      "de": "geschrien",
      "lv": "öskrað"
    }
  },
  {
    "infinitiv": {
      "de": "schreiten",
      "lv": "að skálma"
    },
    "praesens": {
      "de": "er schreitet",
      "lv": "hann skálmar"
    },
    "imperfektIndikativ": {
      "de": "er schritt",
      "lv": "hann skálmaði"
    },
    "imperfektKonjunktiv": {
      "de": "er schritte",
      "lv": "hann myndi skálma"
    },
    "partizipVergangenheit": {
      "de": "geschritten (er ist)",
      "lv": "skálmað"
    }
  },
  {
    "infinitiv": {
      "de": "schweigen",
      "lv": "að þegja"
    },
    "praesens": {
      "de": "er schweigt",
      "lv": "hann þegir"
    },
    "imperfektIndikativ": {
      "de": "er schwieg",
      "lv": "hann þagði"
    },
    "imperfektKonjunktiv": {
      "de": "er schwiege",
      "lv": "hann myndi þegja"
    },
    "partizipVergangenheit": {
      "de": "geschwiegen",
      "lv": "þagað"
    }
  },
  {
    "infinitiv": {
      "de": "schwellen",
      "lv": "að bólgna"
    },
    "praesens": {
      "de": "er schwillt",
      "lv": "það bólgnar"
    },
    "imperfektIndikativ": {
      "de": "er schwoll",
      "lv": "það bólgnaði"
    },
    "imperfektKonjunktiv": {
      "de": "er schwölle",
      "lv": "það myndi bólgna"
    },
    "partizipVergangenheit": {
      "de": "geschwollen (er ist)",
      "lv": "bólgnað"
    }
  },
  {
    "infinitiv": {
      "de": "schwimmen",
      "lv": "að synda"
    },
    "praesens": {
      "de": "er schwimmt",
      "lv": "hann syndir"
    },
    "imperfektIndikativ": {
      "de": "er schwamm",
      "lv": "hann synti"
    },
    "imperfektKonjunktiv": {
      "de": "er schwömme / er schwämme",
      "lv": "hann myndi synda"
    },
    "partizipVergangenheit": {
      "de": "geschwommen (er ist)",
      "lv": "synt"
    }
  },
  {
    "infinitiv": {
      "de": "schwinden",
      "lv": "að hverfa"
    },
    "praesens": {
      "de": "er schwindet",
      "lv": "það hverfur"
    },
    "imperfektIndikativ": {
      "de": "er schwand",
      "lv": "það hvarf"
    },
    "imperfektKonjunktiv": {
      "de": "er schwände",
      "lv": "það myndi hverfa"
    },
    "partizipVergangenheit": {
      "de": "geschwunden (er ist)",
      "lv": "horfið"
    }
  },
  {
    "infinitiv": {
      "de": "schwingen",
      "lv": "að sveifla"
    },
    "praesens": {
      "de": "er schwingt",
      "lv": "hann sveiflar"
    },
    "imperfektIndikativ": {
      "de": "er schwang",
      "lv": "hann sveiflaði"
    },
    "imperfektKonjunktiv": {
      "de": "er schwänge",
      "lv": "hann myndi sveifla"
    },
    "partizipVergangenheit": {
      "de": "geschwungen",
      "lv": "sveiflað"
    }
  },
  {
    "infinitiv": {
      "de": "schwören",
      "lv": "að sverja"
    },
    "praesens": {
      "de": "er schwört",
      "lv": "hann sver"
    },
    "imperfektIndikativ": {
      "de": "er schwur / er schwor",
      "lv": "hann sór"
    },
    "imperfektKonjunktiv": {
      "de": "er schwöre",
      "lv": "hann myndi sverja"
    },
    "partizipVergangenheit": {
      "de": "geschworen",
      "lv": "svarið"
    }
  },
  {
    "infinitiv": {
      "de": "sehen",
      "lv": "að sjá"
    },
    "praesens": {
      "de": "er sieht",
      "lv": "hann sér"
    },
    "imperfektIndikativ": {
      "de": "er sah",
      "lv": "hann sá"
    },
    "imperfektKonjunktiv": {
      "de": "er sähe",
      "lv": "hann myndi sjá"
    },
    "partizipVergangenheit": {
      "de": "gesehen",
      "lv": "séð"
    }
  },
  {
    "infinitiv": {
      "de": "sein",
      "lv": "að vera"
    },
    "praesens": {
      "de": "er ist",
      "lv": "hann er"
    },
    "imperfektIndikativ": {
      "de": "war",
      "lv": "hann var"
    },
    "imperfektKonjunktiv": {
      "de": "war",
      "lv": "hann myndi vera"
    },
    "partizipVergangenheit": {
      "de": "gewesen",
      "lv": "verið"
    }
  },
  {
    "infinitiv": {
      "de": "senden",
      "lv": "að senda"
    },
    "praesens": {
      "de": "er sendet",
      "lv": "hann sendir"
    },
    "imperfektIndikativ": {
      "de": "er sandte / er sendete",
      "lv": "hann sendi"
    },
    "imperfektKonjunktiv": {
      "de": "er sendete",
      "lv": "hann myndi senda"
    },
    "partizipVergangenheit": {
      "de": "gesandt / gesendet",
      "lv": "sent"
    }
  },
  {
    "infinitiv": {
      "de": "sieden",
      "lv": "að sjóða"
    },
    "praesens": {
      "de": "er siedet",
      "lv": "hann sýður"
    },
    "imperfektIndikativ": {
      "de": "sott / siedete",
      "lv": "hann sauð"
    },
    "imperfektKonjunktiv": {
      "de": "sott / siedete",
      "lv": "hann myndi sjóða"
    },
    "partizipVergangenheit": {
      "de": "gesotten / gesiedet",
      "lv": "soðið"
    }
  },
  {
    "infinitiv": {
      "de": "singen",
      "lv": "að syngja"
    },
    "praesens": {
      "de": "er singt",
      "lv": "hann syngur"
    },
    "imperfektIndikativ": {
      "de": "er sang",
      "lv": "hann söng"
    },
    "imperfektKonjunktiv": {
      "de": "er sänge",
      "lv": "hann myndi syngja"
    },
    "partizipVergangenheit": {
      "de": "gesungen",
      "lv": "sungið"
    }
  },
  {
    "infinitiv": {
      "de": "sinken",
      "lv": "að sökkva"
    },
    "praesens": {
      "de": "er sinkt",
      "lv": "hann sekkur"
    },
    "imperfektIndikativ": {
      "de": "er sank",
      "lv": "hann sökk"
    },
    "imperfektKonjunktiv": {
      "de": "er sänke",
      "lv": "hann myndi sökkva"
    },
    "partizipVergangenheit": {
      "de": "gesunken (er ist)",
      "lv": "sokkið"
    }
  },
  {
    "infinitiv": {
      "de": "sinnen",
      "lv": "að hugleiða"
    },
    "praesens": {
      "de": "er sinnt",
      "lv": "hann hugleiðir"
    },
    "imperfektIndikativ": {
      "de": "er sann",
      "lv": "hann hugleiddi"
    },
    "imperfektKonjunktiv": {
      "de": "er sönne / er sänne",
      "lv": "hann myndi hugleiða"
    },
    "partizipVergangenheit": {
      "de": "gesonnen",
      "lv": "hugleitt"
    }
  },
  {
    "infinitiv": {
      "de": "sitzen",
      "lv": "að sitja"
    },
    "praesens": {
      "de": "er sitzt",
      "lv": "hann situr"
    },
    "imperfektIndikativ": {
      "de": "er sass",
      "lv": "hann sat"
    },
    "imperfektKonjunktiv": {
      "de": "er säße",
      "lv": "hann myndi sitja"
    },
    "partizipVergangenheit": {
      "de": "gesessen",
      "lv": "setið"
    }
  },
  {
    "infinitiv": {
      "de": "sollen",
      "lv": "að eiga að"
    },
    "praesens": {
      "de": "er soll",
      "lv": "hann á að"
    },
    "imperfektIndikativ": {
      "de": "sollte",
      "lv": "hann átti að"
    },
    "imperfektKonjunktiv": {
      "de": "sollte",
      "lv": "hann myndi eiga að"
    },
    "partizipVergangenheit": {
      "de": "gesollt",
      "lv": "átt að"
    }
  },
  {
    "infinitiv": {
      "de": "speien",
      "lv": "að hrækja"
    },
    "praesens": {
      "de": "er speit",
      "lv": "hann hrækir"
    },
    "imperfektIndikativ": {
      "de": "er spie",
      "lv": "hann hrækti"
    },
    "imperfektKonjunktiv": {
      "de": "er spie",
      "lv": "hann myndi hrækja"
    },
    "partizipVergangenheit": {
      "de": "gespien",
      "lv": "hrækt"
    }
  },
  {
    "infinitiv": {
      "de": "spinnen",
      "lv": "að spinna"
    },
    "praesens": {
      "de": "er spinnt",
      "lv": "hann spinnur"
    },
    "imperfektIndikativ": {
      "de": "er spann",
      "lv": "hann spann"
    },
    "imperfektKonjunktiv": {
      "de": "er spönne / er spänne",
      "lv": "hann myndi spinna"
    },
    "partizipVergangenheit": {
      "de": "gesponnen",
      "lv": "spunnið"
    }
  },
  {
    "infinitiv": {
      "de": "spleißen",
      "lv": "að tengja"
    },
    "praesens": {
      "de": "er spleißt",
      "lv": "hann tengir"
    },
    "imperfektIndikativ": {
      "de": "spliss",
      "lv": "hann tengdi"
    },
    "imperfektKonjunktiv": {
      "de": "spliss",
      "lv": "hann myndi tengja"
    },
    "partizipVergangenheit": {
      "de": "gesplissen",
      "lv": "tengt"
    }
  },
  {
    "infinitiv": {
      "de": "sprechen",
      "lv": "að tala"
    },
    "praesens": {
      "de": "er spricht",
      "lv": "hann talar"
    },
    "imperfektIndikativ": {
      "de": "er sprach",
      "lv": "hann talaði"
    },
    "imperfektKonjunktiv": {
      "de": "er spräche",
      "lv": "hann myndi tala"
    },
    "partizipVergangenheit": {
      "de": "gesprochen",
      "lv": "talað"
    }
  },
  {
    "infinitiv": {
      "de": "sprießen",
      "lv": "að spíra"
    },
    "praesens": {
      "de": "er sprießt",
      "lv": "það spírar"
    },
    "imperfektIndikativ": {
      "de": "er spross",
      "lv": "það spíraði"
    },
    "imperfektKonjunktiv": {
      "de": "er sprösse",
      "lv": "það myndi spíra"
    },
    "partizipVergangenheit": {
      "de": "gesprossen (er ist)",
      "lv": "spírað"
    }
  },
  {
    "infinitiv": {
      "de": "springen",
      "lv": "að stökkva"
    },
    "praesens": {
      "de": "er springt",
      "lv": "hann stekkur"
    },
    "imperfektIndikativ": {
      "de": "er sprang",
      "lv": "hann stökk"
    },
    "imperfektKonjunktiv": {
      "de": "er spränge",
      "lv": "hann myndi stökkva"
    },
    "partizipVergangenheit": {
      "de": "gesprungen (er ist)",
      "lv": "stokkið"
    }
  },
  {
    "infinitiv": {
      "de": "stechen",
      "lv": "að stinga"
    },
    "praesens": {
      "de": "er sticht",
      "lv": "hann stingur"
    },
    "imperfektIndikativ": {
      "de": "er stach",
      "lv": "hann stakk"
    },
    "imperfektKonjunktiv": {
      "de": "er stäche",
      "lv": "hann myndi stinga"
    },
    "partizipVergangenheit": {
      "de": "gestochen",
      "lv": "stungið"
    }
  },
  {
    "infinitiv": {
      "de": "stecken",
      "lv": "að stinga / að næla"
    },
    "praesens": {
      "de": "er steckt",
      "lv": "hann stingur / nælir"
    },
    "imperfektIndikativ": {
      "de": "stak / steckte",
      "lv": "hann stakk / nældi"
    },
    "imperfektKonjunktiv": {
      "de": "stak / steckte",
      "lv": "hann myndi stinga / næla"
    },
    "partizipVergangenheit": {
      "de": "gesteckt",
      "lv": "stungið / nælt"
    }
  },
  {
    "infinitiv": {
      "de": "stehen",
      "lv": "að standa"
    },
    "praesens": {
      "de": "er steht",
      "lv": "hann stendur"
    },
    "imperfektIndikativ": {
      "de": "er stand",
      "lv": "hann stóð"
    },
    "imperfektKonjunktiv": {
      "de": "er stände / er stünde",
      "lv": "hann myndi standa"
    },
    "partizipVergangenheit": {
      "de": "gestanden",
      "lv": "staðið"
    }
  },
  {
    "infinitiv": {
      "de": "stehlen",
      "lv": "að stela"
    },
    "praesens": {
      "de": "er stiehlt",
      "lv": "hann stelur"
    },
    "imperfektIndikativ": {
      "de": "er stahl",
      "lv": "hann stal"
    },
    "imperfektKonjunktiv": {
      "de": "er stöhle / er stähle",
      "lv": "hann myndi stela"
    },
    "partizipVergangenheit": {
      "de": "gestohlen",
      "lv": "stolið"
    }
  },
  {
    "infinitiv": {
      "de": "steigen",
      "lv": "að stíga"
    },
    "praesens": {
      "de": "er steigt",
      "lv": "hann stígur"
    },
    "imperfektIndikativ": {
      "de": "er stieg",
      "lv": "hann steig"
    },
    "imperfektKonjunktiv": {
      "de": "er stiege",
      "lv": "hann myndi stíga"
    },
    "partizipVergangenheit": {
      "de": "gestiegen (er ist)",
      "lv": "stigið"
    }
  },
  {
    "infinitiv": {
      "de": "sterben",
      "lv": "að deyja"
    },
    "praesens": {
      "de": "er stirbt",
      "lv": "hann deyr"
    },
    "imperfektIndikativ": {
      "de": "er starb",
      "lv": "hann dó"
    },
    "imperfektKonjunktiv": {
      "de": "er stürbe",
      "lv": "hann myndi deyja"
    },
    "partizipVergangenheit": {
      "de": "gestorben (er ist)",
      "lv": "dáið"
    }
  },
  {
    "infinitiv": {
      "de": "stinken",
      "lv": "að lykta illa"
    },
    "praesens": {
      "de": "es stinkt",
      "lv": "það lyktar illa"
    },
    "imperfektIndikativ": {
      "de": "stank",
      "lv": "það lyktaði illa"
    },
    "imperfektKonjunktiv": {
      "de": "stank",
      "lv": "það myndi lykta illa"
    },
    "partizipVergangenheit": {
      "de": "gestunken",
      "lv": "lyktað illa"
    }
  },
  {
    "infinitiv": {
      "de": "stoßen",
      "lv": "að hrinda"
    },
    "praesens": {
      "de": "er stößt",
      "lv": "hann hrindir"
    },
    "imperfektIndikativ": {
      "de": "er stieß",
      "lv": "hann hrinti"
    },
    "imperfektKonjunktiv": {
      "de": "er stieße",
      "lv": "hann myndi hrinda"
    },
    "partizipVergangenheit": {
      "de": "gestoßen",
      "lv": "hrint"
    }
  },
  {
    "infinitiv": {
      "de": "streichen",
      "lv": "að mála / að strika út"
    },
    "praesens": {
      "de": "er streicht",
      "lv": "hann málar / strikar út"
    },
    "imperfektIndikativ": {
      "de": "er strich",
      "lv": "hann málaði / strikaði út"
    },
    "imperfektKonjunktiv": {
      "de": "er striche",
      "lv": "hann myndi mála / strika út"
    },
    "partizipVergangenheit": {
      "de": "gestrichen",
      "lv": "málað / strikað út"
    }
  },
  {
    "infinitiv": {
      "de": "streiten",
      "lv": "að rífast"
    },
    "praesens": {
      "de": "er streitet",
      "lv": "hann rífst"
    },
    "imperfektIndikativ": {
      "de": "er stritt",
      "lv": "hann reifst"
    },
    "imperfektKonjunktiv": {
      "de": "er stritte",
      "lv": "hann myndi rífast"
    },
    "partizipVergangenheit": {
      "de": "gestritten",
      "lv": "rifist"
    }
  },
  {
    "infinitiv": {
      "de": "tragen",
      "lv": "að bera"
    },
    "praesens": {
      "de": "er trägt",
      "lv": "hann ber"
    },
    "imperfektIndikativ": {
      "de": "er trug",
      "lv": "hann bar"
    },
    "imperfektKonjunktiv": {
      "de": "er trüge",
      "lv": "hann myndi bera"
    },
    "partizipVergangenheit": {
      "de": "getragen",
      "lv": "borið"
    }
  },
  {
    "infinitiv": {
      "de": "treffen",
      "lv": "að hitta"
    },
    "praesens": {
      "de": "er trifft",
      "lv": "hann hittir"
    },
    "imperfektIndikativ": {
      "de": "er traf",
      "lv": "hann hitti"
    },
    "imperfektKonjunktiv": {
      "de": "er träfe",
      "lv": "hann myndi hitta"
    },
    "partizipVergangenheit": {
      "de": "getroffen",
      "lv": "hitt"
    }
  },
  {
    "infinitiv": {
      "de": "treiben",
      "lv": "að reka"
    },
    "praesens": {
      "de": "er treibt",
      "lv": "hann rekur"
    },
    "imperfektIndikativ": {
      "de": "er trieb",
      "lv": "hann rak"
    },
    "imperfektKonjunktiv": {
      "de": "er triebe",
      "lv": "hann myndi reka"
    },
    "partizipVergangenheit": {
      "de": "getrieben",
      "lv": "rekið"
    }
  },
  {
    "infinitiv": {
      "de": "treten",
      "lv": "að stíga / að ganga"
    },
    "praesens": {
      "de": "er tritt",
      "lv": "hann stígur / gengur"
    },
    "imperfektIndikativ": {
      "de": "er trat",
      "lv": "hann steig / gekk"
    },
    "imperfektKonjunktiv": {
      "de": "er träte",
      "lv": "hann myndi stíga / ganga"
    },
    "partizipVergangenheit": {
      "de": "getreten (er ist)",
      "lv": "stigið / gengið"
    }
  },
  {
    "infinitiv": {
      "de": "trinken",
      "lv": "að drekka"
    },
    "praesens": {
      "de": "er trinkt",
      "lv": "hann drekkur"
    },
    "imperfektIndikativ": {
      "de": "er trank",
      "lv": "hann drakk"
    },
    "imperfektKonjunktiv": {
      "de": "er tränke",
      "lv": "hann myndi drekka"
    },
    "partizipVergangenheit": {
      "de": "getrunken",
      "lv": "drukkið"
    }
  },
  {
    "infinitiv": {
      "de": "trügen",
      "lv": "að blekkja"
    },
    "praesens": {
      "de": "er trögt",
      "lv": "hann blekkir"
    },
    "imperfektIndikativ": {
      "de": "er trog",
      "lv": "hann blekkti"
    },
    "imperfektKonjunktiv": {
      "de": "er tröge",
      "lv": "hann myndi blekkja"
    },
    "partizipVergangenheit": {
      "de": "getrogen",
      "lv": "blekkt"
    }
  },
  {
    "infinitiv": {
      "de": "tun",
      "lv": "að gera"
    },
    "praesens": {
      "de": "er tut",
      "lv": "hann gerir"
    },
    "imperfektIndikativ": {
      "de": "er tat",
      "lv": "hann gerði"
    },
    "imperfektKonjunktiv": {
      "de": "er täte",
      "lv": "hann myndi gera"
    },
    "partizipVergangenheit": {
      "de": "getan",
      "lv": "gert"
    }
  },
  {
    "infinitiv": {
      "de": "verderben",
      "lv": "að spilla"
    },
    "praesens": {
      "de": "er verdirbt",
      "lv": "hann spillir"
    },
    "imperfektIndikativ": {
      "de": "er verdarb",
      "lv": "hann spillti"
    },
    "imperfektKonjunktiv": {
      "de": "er verdürbe",
      "lv": "hann myndi spilla"
    },
    "partizipVergangenheit": {
      "de": "verdorben",
      "lv": "spillt"
    }
  },
  {
    "infinitiv": {
      "de": "verdrießen",
      "lv": "að ergja"
    },
    "praesens": {
      "de": "er verdrießt",
      "lv": "hann ergir"
    },
    "imperfektIndikativ": {
      "de": "er verdross",
      "lv": "hann ergði"
    },
    "imperfektKonjunktiv": {
      "de": "er verdrösse",
      "lv": "hann myndi ergja"
    },
    "partizipVergangenheit": {
      "de": "verdrossen",
      "lv": "ergt"
    }
  },
  {
    "infinitiv": {
      "de": "vergessen",
      "lv": "að gleyma"
    },
    "praesens": {
      "de": "er vergisst",
      "lv": "hann gleymir"
    },
    "imperfektIndikativ": {
      "de": "er vergass",
      "lv": "hann gleymdi"
    },
    "imperfektKonjunktiv": {
      "de": "er vergäße",
      "lv": "hann myndi gleyma"
    },
    "partizipVergangenheit": {
      "de": "vergessen",
      "lv": "gleymt"
    }
  },
  {
    "infinitiv": {
      "de": "verlieren",
      "lv": "að tapa"
    },
    "praesens": {
      "de": "er verliert",
      "lv": "hann tapar"
    },
    "imperfektIndikativ": {
      "de": "er verlor",
      "lv": "hann tapaði"
    },
    "imperfektKonjunktiv": {
      "de": "er verlöre",
      "lv": "hann myndi tapa"
    },
    "partizipVergangenheit": {
      "de": "verloren",
      "lv": "tapað"
    }
  },
  {
    "infinitiv": {
      "de": "wachsen",
      "lv": "að vaxa"
    },
    "praesens": {
      "de": "er wächst",
      "lv": "hann vex"
    },
    "imperfektIndikativ": {
      "de": "er wuchs",
      "lv": "hann óx"
    },
    "imperfektKonjunktiv": {
      "de": "er wüchse",
      "lv": "hann myndi vaxa"
    },
    "partizipVergangenheit": {
      "de": "gewachsen (er ist)",
      "lv": "vaxið"
    }
  },
  {
    "infinitiv": {
      "de": "waschen",
      "lv": "að þvo"
    },
    "praesens": {
      "de": "er wäscht",
      "lv": "hann þvær"
    },
    "imperfektIndikativ": {
      "de": "er wusch",
      "lv": "hann þvoði"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsche",
      "lv": "hann myndi þvo"
    },
    "partizipVergangenheit": {
      "de": "gewaschen",
      "lv": "þvegið"
    }
  },
  {
    "infinitiv": {
      "de": "weben",
      "lv": "að vefa"
    },
    "praesens": {
      "de": "er webt",
      "lv": "hann vefur"
    },
    "imperfektIndikativ": {
      "de": "wob",
      "lv": "hann óf"
    },
    "imperfektKonjunktiv": {
      "de": "wob",
      "lv": "hann myndi vefa"
    },
    "partizipVergangenheit": {
      "de": "gewoben",
      "lv": "ofið"
    }
  },
  {
    "infinitiv": {
      "de": "weichen",
      "lv": "að víkja"
    },
    "praesens": {
      "de": "er weicht",
      "lv": "hann víkur"
    },
    "imperfektIndikativ": {
      "de": "er wich",
      "lv": "hann vék"
    },
    "imperfektKonjunktiv": {
      "de": "er wiche",
      "lv": "hann myndi víkja"
    },
    "partizipVergangenheit": {
      "de": "gewichen (er ist)",
      "lv": "vikið"
    }
  },
  {
    "infinitiv": {
      "de": "weisen",
      "lv": "að vísa"
    },
    "praesens": {
      "de": "er weist",
      "lv": "hann vísar"
    },
    "imperfektIndikativ": {
      "de": "er wies",
      "lv": "hann vísaði"
    },
    "imperfektKonjunktiv": {
      "de": "er wiese",
      "lv": "hann myndi vísa"
    },
    "partizipVergangenheit": {
      "de": "gewiesen",
      "lv": "vísað"
    }
  },
  {
    "infinitiv": {
      "de": "wenden",
      "lv": "að snúa / að snúa við"
    },
    "praesens": {
      "de": "er wendet",
      "lv": "hann snýr / snýr við"
    },
    "imperfektIndikativ": {
      "de": "er wandte / es wendete",
      "lv": "hann sneri / sneri við"
    },
    "imperfektKonjunktiv": {
      "de": "er wendete",
      "lv": "hann myndi snúa / snúa við"
    },
    "partizipVergangenheit": {
      "de": "gewandt / gewendet",
      "lv": "snúið / snúið við"
    }
  },
  {
    "infinitiv": {
      "de": "werben",
      "lv": "að biðla"
    },
    "praesens": {
      "de": "er wirbt",
      "lv": "hann biðlar"
    },
    "imperfektIndikativ": {
      "de": "er warb",
      "lv": "hann biðlaði"
    },
    "imperfektKonjunktiv": {
      "de": "er würbe",
      "lv": "hann myndi biðla"
    },
    "partizipVergangenheit": {
      "de": "geworben",
      "lv": "biðlað"
    }
  },
  {
    "infinitiv": {
      "de": "werden",
      "lv": "að verða"
    },
    "praesens": {
      "de": "er wird",
      "lv": "hann verður"
    },
    "imperfektIndikativ": {
      "de": "wurde",
      "lv": "hann varð"
    },
    "imperfektKonjunktiv": {
      "de": "wurde",
      "lv": "hann myndi verða"
    },
    "partizipVergangenheit": {
      "de": "geworden",
      "lv": "orðið"
    }
  },
  {
    "infinitiv": {
      "de": "werfen",
      "lv": "að kasta"
    },
    "praesens": {
      "de": "er wirft",
      "lv": "hann kastar"
    },
    "imperfektIndikativ": {
      "de": "er warf",
      "lv": "hann kastaði"
    },
    "imperfektKonjunktiv": {
      "de": "er würfe",
      "lv": "hann myndi kasta"
    },
    "partizipVergangenheit": {
      "de": "geworfen",
      "lv": "kastað"
    }
  },
  {
    "infinitiv": {
      "de": "wiegen",
      "lv": "að vega"
    },
    "praesens": {
      "de": "er wiegt",
      "lv": "hann vegur"
    },
    "imperfektIndikativ": {
      "de": "er wog",
      "lv": "hann vó"
    },
    "imperfektKonjunktiv": {
      "de": "er wöge",
      "lv": "hann myndi vega"
    },
    "partizipVergangenheit": {
      "de": "gewogen",
      "lv": "vegið"
    }
  },
  {
    "infinitiv": {
      "de": "winden",
      "lv": "að flétta"
    },
    "praesens": {
      "de": "er windet",
      "lv": "hann fléttar"
    },
    "imperfektIndikativ": {
      "de": "er wand",
      "lv": "hann fléttaði"
    },
    "imperfektKonjunktiv": {
      "de": "er wände",
      "lv": "hann myndi flétta"
    },
    "partizipVergangenheit": {
      "de": "gewunden",
      "lv": "fléttað"
    }
  },
  {
    "infinitiv": {
      "de": "wissen",
      "lv": "að vita"
    },
    "praesens": {
      "de": "er weiß",
      "lv": "hann veit"
    },
    "imperfektIndikativ": {
      "de": "er wusste",
      "lv": "hann vissi"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsste",
      "lv": "hann myndi vita"
    },
    "partizipVergangenheit": {
      "de": "gewusst",
      "lv": "vitað"
    }
  },
  {
    "infinitiv": {
      "de": "wollen",
      "lv": "að vilja"
    },
    "praesens": {
      "de": "er will",
      "lv": "hann vill"
    },
    "imperfektIndikativ": {
      "de": "wollte",
      "lv": "hann vildi"
    },
    "imperfektKonjunktiv": {
      "de": "wollte",
      "lv": "hann myndi vilja"
    },
    "partizipVergangenheit": {
      "de": "gewollt",
      "lv": "viljað"
    }
  },
  {
    "infinitiv": {
      "de": "wringen",
      "lv": "að vinda / að kreista"
    },
    "praesens": {
      "de": "er wringt",
      "lv": "hann vindur / kreistir"
    },
    "imperfektIndikativ": {
      "de": "wrang",
      "lv": "hann vatt / kreisti"
    },
    "imperfektKonjunktiv": {
      "de": "wrang",
      "lv": "hann myndi vinda / kreista"
    },
    "partizipVergangenheit": {
      "de": "gewrungen",
      "lv": "undið / kreist"
    }
  },
  {
    "infinitiv": {
      "de": "zeihen",
      "lv": "að ásaka"
    },
    "praesens": {
      "de": "er zeiht",
      "lv": "hann ásakar"
    },
    "imperfektIndikativ": {
      "de": "zieh",
      "lv": "hann ásakaði"
    },
    "imperfektKonjunktiv": {
      "de": "zieh",
      "lv": "hann myndi ásaka"
    },
    "partizipVergangenheit": {
      "de": "geziehen",
      "lv": "ásakað"
    }
  },
  {
    "infinitiv": {
      "de": "ziehen",
      "lv": "að draga"
    },
    "praesens": {
      "de": "er zieht",
      "lv": "hann dregur"
    },
    "imperfektIndikativ": {
      "de": "er zog",
      "lv": "hann dró"
    },
    "imperfektKonjunktiv": {
      "de": "er zöge",
      "lv": "hann myndi draga"
    },
    "partizipVergangenheit": {
      "de": "gezogen",
      "lv": "dregið"
    }
  },
  {
    "infinitiv": {
      "de": "zwingen",
      "lv": "að neyða"
    },
    "praesens": {
      "de": "er zwingt",
      "lv": "hann neyðir"
    },
    "imperfektIndikativ": {
      "de": "er zwang",
      "lv": "hann neyddi"
    },
    "imperfektKonjunktiv": {
      "de": "er zwänge",
      "lv": "hann myndi neyða"
    },
    "partizipVergangenheit": {
      "de": "gezwungen",
      "lv": "neytt"
    }
  },
  {
    "infinitiv": {
      "de": "empfangen",
      "lv": "að taka á móti"
    },
    "praesens": {
      "de": "er empfängt",
      "lv": "hann tekur á móti"
    },
    "imperfektIndikativ": {
      "de": "er empfing",
      "lv": "hann tók á móti"
    },
    "imperfektKonjunktiv": {
      "de": "er empfinge",
      "lv": "hann myndi taka á móti"
    },
    "partizipVergangenheit": {
      "de": "empfangen",
      "lv": "tekið á móti"
    }
  },
  {
    "infinitiv": {
      "de": "erwägen",
      "lv": "að íhuga"
    },
    "praesens": {
      "de": "er erwägt",
      "lv": "hann íhugar"
    },
    "imperfektIndikativ": {
      "de": "er erwog",
      "lv": "hann íhugaði"
    },
    "imperfektKonjunktiv": {
      "de": "er erwöge",
      "lv": "hann myndi íhuga"
    },
    "partizipVergangenheit": {
      "de": "erwogen",
      "lv": "íhugað"
    }
  },
  {
    "infinitiv": {
      "de": "fechten",
      "lv": "að berjast"
    },
    "praesens": {
      "de": "er ficht",
      "lv": "hann berst"
    },
    "imperfektIndikativ": {
      "de": "er focht",
      "lv": "hann barðist"
    },
    "imperfektKonjunktiv": {
      "de": "er föchte",
      "lv": "hann myndi berjast"
    },
    "partizipVergangenheit": {
      "de": "gefochten",
      "lv": "barist"
    }
  },
  {
    "infinitiv": {
      "de": "flechten",
      "lv": "að flétta"
    },
    "praesens": {
      "de": "er flicht",
      "lv": "hann fléttar"
    },
    "imperfektIndikativ": {
      "de": "er flocht",
      "lv": "hann fléttaði"
    },
    "imperfektKonjunktiv": {
      "de": "er flöchte",
      "lv": "hann myndi flétta"
    },
    "partizipVergangenheit": {
      "de": "geflochten",
      "lv": "fléttað"
    }
  },
  {
    "infinitiv": {
      "de": "hangen",
      "lv": "að hanga"
    },
    "praesens": {
      "de": "er hängt",
      "lv": "hann hangir"
    },
    "imperfektIndikativ": {
      "de": "er hing",
      "lv": "hann hékk"
    },
    "imperfektKonjunktiv": {
      "de": "er hinge",
      "lv": "hann myndi hanga"
    },
    "partizipVergangenheit": {
      "de": "gehangen",
      "lv": "hangið"
    }
  },
  {
    "infinitiv": {
      "de": "spalten",
      "lv": "að kljúfa"
    },
    "praesens": {
      "de": "er spaltet",
      "lv": "hann klýfur"
    },
    "imperfektIndikativ": {
      "de": "er spaltete",
      "lv": "hann klauf"
    },
    "imperfektKonjunktiv": {
      "de": "er spaltete",
      "lv": "hann myndi kljúfa"
    },
    "partizipVergangenheit": {
      "de": "gespalten",
      "lv": "klofið"
    }
  },
  {
    "infinitiv": {
      "de": "verzeihen",
      "lv": "að fyrirgefa"
    },
    "praesens": {
      "de": "er verzeiht",
      "lv": "hann fyrirgefur"
    },
    "imperfektIndikativ": {
      "de": "er verzieh",
      "lv": "hann fyrirgaf"
    },
    "imperfektKonjunktiv": {
      "de": "er verziehe",
      "lv": "hann myndi fyrirgefa"
    },
    "partizipVergangenheit": {
      "de": "verziehen",
      "lv": "fyrirgefið"
    }
  }
];

window.VERB_ENTRIES = VERB_ENTRIES;

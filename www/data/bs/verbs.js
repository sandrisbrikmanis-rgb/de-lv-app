const VERB_ENTRIES = [
  {
    "infinitiv": {
      "de": "backen",
      "lv": "Ispeći"
    },
    "praesens": {
      "de": "er bäckt",
      "lv": "On pece"
    },
    "imperfektIndikativ": {
      "de": "er buk",
      "lv": "Pekao je"
    },
    "imperfektKonjunktiv": {
      "de": "er büke",
      "lv": "On bi ispekao"
    },
    "partizipVergangenheit": {
      "de": "gebacken",
      "lv": "Pržene / pečene"
    }
  },
  {
    "infinitiv": {
      "de": "befehlen",
      "lv": "Komandovati"
    },
    "praesens": {
      "de": "er befiehlt",
      "lv": "On komanduje"
    },
    "imperfektIndikativ": {
      "de": "er befahl",
      "lv": "Naredio je"
    },
    "imperfektKonjunktiv": {
      "de": "er beföhle",
      "lv": "On bi komandovao"
    },
    "partizipVergangenheit": {
      "de": "befohlen",
      "lv": "Komandovao"
    }
  },
  {
    "infinitiv": {
      "de": "beginnen",
      "lv": "Za početak"
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
      "lv": "Počeo"
    }
  },
  {
    "infinitiv": {
      "de": "beißen",
      "lv": "Ugristi"
    },
    "praesens": {
      "de": "er beißt",
      "lv": "On grize"
    },
    "imperfektIndikativ": {
      "de": "er biss",
      "lv": "Kodirao je"
    },
    "imperfektKonjunktiv": {
      "de": "er bisse",
      "lv": "On grize"
    },
    "partizipVergangenheit": {
      "de": "gebissen",
      "lv": "Ugrizen / ugrizen"
    }
  },
  {
    "infinitiv": {
      "de": "bergen",
      "lv": "Sakriti"
    },
    "praesens": {
      "de": "er birgt",
      "lv": "On se krije"
    },
    "imperfektIndikativ": {
      "de": "er barg",
      "lv": "Sakrio se"
    },
    "imperfektKonjunktiv": {
      "de": "er bürge / er bärge",
      "lv": "Sakrio bi se"
    },
    "partizipVergangenheit": {
      "de": "geborgen",
      "lv": "Skriveno / sačuvano"
    }
  },
  {
    "infinitiv": {
      "de": "bersten",
      "lv": "Pucanje"
    },
    "praesens": {
      "de": "er birst",
      "lv": "On pukne"
    },
    "imperfektIndikativ": {
      "de": "er barst / er borst",
      "lv": "Prasnuo je"
    },
    "imperfektKonjunktiv": {
      "de": "er bärste / er börste",
      "lv": "On pukne"
    },
    "partizipVergangenheit": {
      "de": "geborsten (er ist)",
      "lv": "Slomljena"
    }
  },
  {
    "infinitiv": {
      "de": "bewegen",
      "lv": "Ohrabriti"
    },
    "praesens": {
      "de": "er bewegt",
      "lv": "On traži"
    },
    "imperfektIndikativ": {
      "de": "er bewog",
      "lv": "Urgirao je"
    },
    "imperfektKonjunktiv": {
      "de": "er bewöge",
      "lv": "Ohrabrivao bi"
    },
    "partizipVergangenheit": {
      "de": "bewogen",
      "lv": "Ohrabren"
    }
  },
  {
    "infinitiv": {
      "de": "biegen",
      "lv": "Bend"
    },
    "praesens": {
      "de": "er biegt",
      "lv": "Klanja se"
    },
    "imperfektIndikativ": {
      "de": "er bog",
      "lv": "Savio se"
    },
    "imperfektKonjunktiv": {
      "de": "er böge",
      "lv": "Savio bi se"
    },
    "partizipVergangenheit": {
      "de": "gebogen",
      "lv": "Savijen"
    }
  },
  {
    "infinitiv": {
      "de": "bieten",
      "lv": "Obećati"
    },
    "praesens": {
      "de": "er bietet",
      "lv": "On obećava"
    },
    "imperfektIndikativ": {
      "de": "er bot",
      "lv": "Obećao je"
    },
    "imperfektKonjunktiv": {
      "de": "er böte",
      "lv": "Obećao bi"
    },
    "partizipVergangenheit": {
      "de": "geboten",
      "lv": "Obećano / ponuđeno"
    }
  },
  {
    "infinitiv": {
      "de": "binden",
      "lv": "Sito"
    },
    "praesens": {
      "de": "er bindet",
      "lv": "He seno"
    },
    "imperfektIndikativ": {
      "de": "er band",
      "lv": "On je posejao"
    },
    "imperfektKonjunktiv": {
      "de": "er bände",
      "lv": "Prosijao je"
    },
    "partizipVergangenheit": {
      "de": "gebunden",
      "lv": "Sito"
    }
  },
  {
    "infinitiv": {
      "de": "bitten",
      "lv": "Pitati"
    },
    "praesens": {
      "de": "er bittet",
      "lv": "Moli on"
    },
    "imperfektIndikativ": {
      "de": "er bat",
      "lv": "Upitao je"
    },
    "imperfektKonjunktiv": {
      "de": "er bäte",
      "lv": "Molio bi se"
    },
    "partizipVergangenheit": {
      "de": "gebeten",
      "lv": "Zatraženo"
    }
  },
  {
    "infinitiv": {
      "de": "blasen",
      "lv": "Duvati"
    },
    "praesens": {
      "de": "er bläst",
      "lv": "On duva"
    },
    "imperfektIndikativ": {
      "de": "er blies",
      "lv": "Dunuo je"
    },
    "imperfektKonjunktiv": {
      "de": "er bliese",
      "lv": "On bi dunuo"
    },
    "partizipVergangenheit": {
      "de": "geblasen",
      "lv": "Duvan"
    }
  },
  {
    "infinitiv": {
      "de": "gären",
      "lv": "Da fermentira"
    },
    "praesens": {
      "de": "es gärt",
      "lv": "Fermentira"
    },
    "imperfektIndikativ": {
      "de": "es gor / es gärte",
      "lv": "Fermentira"
    },
    "imperfektKonjunktiv": {
      "de": "es göre / es gärte",
      "lv": "Bilo bi gorko"
    },
    "partizipVergangenheit": {
      "de": "gegoren / gegärt",
      "lv": "Raž"
    }
  },
  {
    "infinitiv": {
      "de": "gebären",
      "lv": "Roditi"
    },
    "praesens": {
      "de": "sie gebiert",
      "lv": "U njenoj utrobi"
    },
    "imperfektIndikativ": {
      "de": "sie gebar",
      "lv": "Rodila je"
    },
    "imperfektKonjunktiv": {
      "de": "sie gebäre",
      "lv": "Rodila bi"
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
      "lv": "Uspeva"
    },
    "imperfektIndikativ": {
      "de": "es gelang",
      "lv": "Upalilo je"
    },
    "imperfektKonjunktiv": {
      "de": "es gelänge",
      "lv": "Upalilo bi"
    },
    "partizipVergangenheit": {
      "de": "gelungen (es ist)",
      "lv": "Uspjelo"
    }
  },
  {
    "infinitiv": {
      "de": "gelten",
      "lv": "Dobro doći"
    },
    "praesens": {
      "de": "er gilt",
      "lv": "On odgovara / važi"
    },
    "imperfektIndikativ": {
      "de": "er galt",
      "lv": "On je odgovarao / bio u formi"
    },
    "imperfektKonjunktiv": {
      "de": "er gölte / es gälte",
      "lv": "On bi odgovarao / odgovarao bi"
    },
    "partizipVergangenheit": {
      "de": "gegolten",
      "lv": "Primijenjena / bila važeća"
    }
  },
  {
    "infinitiv": {
      "de": "genesen",
      "lv": "Postaje dobro"
    },
    "praesens": {
      "de": "er genest",
      "lv": "On postaje dobro"
    },
    "imperfektIndikativ": {
      "de": "er genas",
      "lv": "Ozdravio je"
    },
    "imperfektKonjunktiv": {
      "de": "er genäse",
      "lv": "Ozdravio bi"
    },
    "partizipVergangenheit": {
      "de": "genesen (er ist)",
      "lv": "Ozdravi"
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
      "lv": "Uživao bi"
    },
    "partizipVergangenheit": {
      "de": "genossen",
      "lv": "Uživao"
    }
  },
  {
    "infinitiv": {
      "de": "geschehen",
      "lv": "Desiti"
    },
    "praesens": {
      "de": "es geschieht",
      "lv": "To se dešava"
    },
    "imperfektIndikativ": {
      "de": "es geschah",
      "lv": "Desilo se"
    },
    "imperfektKonjunktiv": {
      "de": "es geschähe",
      "lv": "Desilo bi se"
    },
    "partizipVergangenheit": {
      "de": "geschehen (es ist)",
      "lv": "Dogodilo"
    }
  },
  {
    "infinitiv": {
      "de": "gießen",
      "lv": "Poručniče"
    },
    "praesens": {
      "de": "er gießt",
      "lv": "On sipa"
    },
    "imperfektIndikativ": {
      "de": "er goss",
      "lv": "On sipa"
    },
    "imperfektKonjunktiv": {
      "de": "er gösse",
      "lv": "On kiši"
    },
    "partizipVergangenheit": {
      "de": "gegossen",
      "lv": "Stvar"
    }
  },
  {
    "infinitiv": {
      "de": "gleichen",
      "lv": "Ličiti"
    },
    "praesens": {
      "de": "er gleicht",
      "lv": "On liči"
    },
    "imperfektIndikativ": {
      "de": "er glich",
      "lv": "Oponašao se"
    },
    "imperfektKonjunktiv": {
      "de": "er gliche",
      "lv": "Oponašao bi se"
    },
    "partizipVergangenheit": {
      "de": "geglichen",
      "lv": "Ličio"
    }
  },
  {
    "infinitiv": {
      "de": "gleiten",
      "lv": "To slide"
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
      "lv": "On bi klizio"
    },
    "partizipVergangenheit": {
      "de": "geglitten (er ist)",
      "lv": "Skliznuo"
    }
  },
  {
    "infinitiv": {
      "de": "glimmen",
      "lv": "Glowing"
    },
    "praesens": {
      "de": "er glimmt",
      "lv": "On sija"
    },
    "imperfektIndikativ": {
      "de": "er glimmte / glomm",
      "lv": "Sijao je"
    },
    "imperfektKonjunktiv": {
      "de": "er glimmte",
      "lv": "On bi sijao"
    },
    "partizipVergangenheit": {
      "de": "geglimmt / geglommen",
      "lv": "Glowing"
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
      "lv": "On bi kopao"
    },
    "partizipVergangenheit": {
      "de": "gegraben",
      "lv": "Dig"
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
      "lv": "Rezati"
    },
    "praesens": {
      "de": "er haut",
      "lv": "Odabrao je"
    },
    "imperfektIndikativ": {
      "de": "er hieb",
      "lv": "Odbrusio je"
    },
    "imperfektKonjunktiv": {
      "de": "er hiebe",
      "lv": "On bi rezbario"
    },
    "partizipVergangenheit": {
      "de": "gehauen",
      "lv": "Uklesan"
    }
  },
  {
    "infinitiv": {
      "de": "heben",
      "lv": "Podizati"
    },
    "praesens": {
      "de": "er hebt",
      "lv": "On diže"
    },
    "imperfektIndikativ": {
      "de": "er hob",
      "lv": "On je doneo"
    },
    "imperfektKonjunktiv": {
      "de": "er höbe",
      "lv": "On bi izgradio"
    },
    "partizipVergangenheit": {
      "de": "gehoben",
      "lv": "Izgrađen"
    }
  },
  {
    "infinitiv": {
      "de": "kennen",
      "lv": "Znati / znati"
    },
    "praesens": {
      "de": "er kennt",
      "lv": "On zna"
    },
    "imperfektIndikativ": {
      "de": "kannte",
      "lv": "Znao"
    },
    "imperfektKonjunktiv": {
      "de": "kannte",
      "lv": "Znao"
    },
    "partizipVergangenheit": {
      "de": "gekannt",
      "lv": "Poznanstvo"
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
      "lv": "On bi zvučao"
    },
    "partizipVergangenheit": {
      "de": "geklungen",
      "lv": "Zvučalo"
    }
  },
  {
    "infinitiv": {
      "de": "kneifen",
      "lv": "Pinch"
    },
    "praesens": {
      "de": "er kneift",
      "lv": "Šali se on"
    },
    "imperfektIndikativ": {
      "de": "er kniff",
      "lv": "Uštipnuo je"
    },
    "imperfektKonjunktiv": {
      "de": "er kniffe",
      "lv": "On bi štipao"
    },
    "partizipVergangenheit": {
      "de": "gekniffen",
      "lv": "Stegnuti"
    }
  },
  {
    "infinitiv": {
      "de": "bleiben",
      "lv": "Ostani"
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
      "lv": "Lijevo"
    }
  },
  {
    "infinitiv": {
      "de": "bleichen",
      "lv": "Izbjeliti"
    },
    "praesens": {
      "de": "er bleicht",
      "lv": "On izbjeljuje"
    },
    "imperfektIndikativ": {
      "de": "blich",
      "lv": "Izbijeljena"
    },
    "imperfektKonjunktiv": {
      "de": "blich",
      "lv": "Izbijeljena"
    },
    "partizipVergangenheit": {
      "de": "geblichen",
      "lv": "Izbijeljena"
    }
  },
  {
    "infinitiv": {
      "de": "braten",
      "lv": "Ispeći"
    },
    "praesens": {
      "de": "er brät",
      "lv": "On pece"
    },
    "imperfektIndikativ": {
      "de": "er briet",
      "lv": "Pekao je"
    },
    "imperfektKonjunktiv": {
      "de": "er briete",
      "lv": "On bi ispekao"
    },
    "partizipVergangenheit": {
      "de": "gebraten",
      "lv": "Pržene / pečene"
    }
  },
  {
    "infinitiv": {
      "de": "brechen",
      "lv": "Razbiti"
    },
    "praesens": {
      "de": "er bricht",
      "lv": "On se lomi"
    },
    "imperfektIndikativ": {
      "de": "er brach",
      "lv": "Slomio je"
    },
    "imperfektKonjunktiv": {
      "de": "er bräche",
      "lv": "Slomio bi se"
    },
    "partizipVergangenheit": {
      "de": "gebrochen",
      "lv": "Slomljena / slomljena"
    }
  },
  {
    "infinitiv": {
      "de": "brennen",
      "lv": "Spaliti"
    },
    "praesens": {
      "de": "er brennt",
      "lv": "On je u plamenu"
    },
    "imperfektIndikativ": {
      "de": "brannte",
      "lv": "Je goreo"
    },
    "imperfektKonjunktiv": {
      "de": "brannte",
      "lv": "Je goreo"
    },
    "partizipVergangenheit": {
      "de": "gebrannt",
      "lv": "Spaljena"
    }
  },
  {
    "infinitiv": {
      "de": "bringen",
      "lv": "Nositi"
    },
    "praesens": {
      "de": "er bringt",
      "lv": "On nosi"
    },
    "imperfektIndikativ": {
      "de": "er brachte",
      "lv": "Nosio je"
    },
    "imperfektKonjunktiv": {
      "de": "er brächte",
      "lv": "On bi nosio"
    },
    "partizipVergangenheit": {
      "de": "gebracht",
      "lv": "Doneo / doneo"
    }
  },
  {
    "infinitiv": {
      "de": "denken",
      "lv": "Misliti"
    },
    "praesens": {
      "de": "er denkt",
      "lv": "Misli on"
    },
    "imperfektIndikativ": {
      "de": "er dachte",
      "lv": "Pomislio je"
    },
    "imperfektKonjunktiv": {
      "de": "er dächte",
      "lv": "Pomislio bi"
    },
    "partizipVergangenheit": {
      "de": "gedacht",
      "lv": "Namjeravao"
    }
  },
  {
    "infinitiv": {
      "de": "dingen",
      "lv": "Zaposliti / dogovoriti se"
    },
    "praesens": {
      "de": "er dingt",
      "lv": "On zapošljava"
    },
    "imperfektIndikativ": {
      "de": "dingte",
      "lv": "Unajmio"
    },
    "imperfektKonjunktiv": {
      "de": "dingte",
      "lv": "Unajmio"
    },
    "partizipVergangenheit": {
      "de": "gedungen",
      "lv": "Unajmio"
    }
  },
  {
    "infinitiv": {
      "de": "dreschen",
      "lv": "Kult"
    },
    "praesens": {
      "de": "er drischt",
      "lv": "On mlati"
    },
    "imperfektIndikativ": {
      "de": "er drasch / er drosch",
      "lv": "Mlatio je"
    },
    "imperfektKonjunktiv": {
      "de": "er dräsche / er drösche",
      "lv": "On bi obožavao"
    },
    "partizipVergangenheit": {
      "de": "gedroschen",
      "lv": "Kult"
    }
  },
  {
    "infinitiv": {
      "de": "dringen",
      "lv": "Provaliti u"
    },
    "praesens": {
      "de": "er dringt",
      "lv": "On provaljuje"
    },
    "imperfektIndikativ": {
      "de": "er drang",
      "lv": "Provalio je"
    },
    "imperfektKonjunktiv": {
      "de": "er dränge",
      "lv": "Provalio bi unutra"
    },
    "partizipVergangenheit": {
      "de": "gedrungen (er ist)",
      "lv": "Provalio u"
    }
  },
  {
    "infinitiv": {
      "de": "dünken",
      "lv": "Izgleda"
    },
    "praesens": {
      "de": "es dünkt",
      "lv": "Izgleda"
    },
    "imperfektIndikativ": {
      "de": "deuchte",
      "lv": "Izgledalo je"
    },
    "imperfektKonjunktiv": {
      "de": "deuchte",
      "lv": "Izgledalo je"
    },
    "partizipVergangenheit": {
      "de": "gedünkt",
      "lv": "Činilo se"
    }
  },
  {
    "infinitiv": {
      "de": "dürfen",
      "lv": "Biti dozvoljeno"
    },
    "praesens": {
      "de": "er darf",
      "lv": "On može"
    },
    "imperfektIndikativ": {
      "de": "durfte",
      "lv": "Bilo dozvoljeno"
    },
    "imperfektKonjunktiv": {
      "de": "durfte",
      "lv": "Bilo dozvoljeno"
    },
    "partizipVergangenheit": {
      "de": "gedurft",
      "lv": "Dozvoljeno"
    }
  },
  {
    "infinitiv": {
      "de": "empfehlen",
      "lv": "Preporučiti"
    },
    "praesens": {
      "de": "er empfiehlt",
      "lv": "Predlaže on"
    },
    "imperfektIndikativ": {
      "de": "er empfahl",
      "lv": "Predložio je"
    },
    "imperfektKonjunktiv": {
      "de": "er empfähle / er empföhle",
      "lv": "On bi preporučio"
    },
    "partizipVergangenheit": {
      "de": "empfohlen",
      "lv": "Preporučeno"
    }
  },
  {
    "infinitiv": {
      "de": "empfinden",
      "lv": "Osetiti"
    },
    "praesens": {
      "de": "er empfindet",
      "lv": "On oseća"
    },
    "imperfektIndikativ": {
      "de": "er empfand",
      "lv": "Osetio je"
    },
    "imperfektKonjunktiv": {
      "de": "er empfände",
      "lv": "On bi osetio"
    },
    "partizipVergangenheit": {
      "de": "empfunden",
      "lv": "Osjetio"
    }
  },
  {
    "infinitiv": {
      "de": "erlöschen",
      "lv": "Nestaje"
    },
    "praesens": {
      "de": "er erlischt",
      "lv": "On izlazi"
    },
    "imperfektIndikativ": {
      "de": "er erlosch",
      "lv": "Izašao je"
    },
    "imperfektKonjunktiv": {
      "de": "er erlösche",
      "lv": "On bi nestao"
    },
    "partizipVergangenheit": {
      "de": "erloschen (er ist)",
      "lv": "Ugašen"
    }
  },
  {
    "infinitiv": {
      "de": "erschrecken",
      "lv": "Zbuniti se"
    },
    "praesens": {
      "de": "er erschrickt",
      "lv": "On se uplaši"
    },
    "imperfektIndikativ": {
      "de": "er erschrak",
      "lv": "Uplašio se"
    },
    "imperfektKonjunktiv": {
      "de": "er erschräke",
      "lv": "On bi poludio"
    },
    "partizipVergangenheit": {
      "de": "erschrocken (er ist)",
      "lv": "Uplašen"
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
      "lv": "Pojedeno / pojedeno"
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
      "lv": "On je vozio"
    },
    "imperfektKonjunktiv": {
      "de": "er führe",
      "lv": "On bi vozio"
    },
    "partizipVergangenheit": {
      "de": "gefahren (er ist)",
      "lv": "Vozio / otišao"
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
      "lv": "Uhvatiti"
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
      "lv": "Uhvaćen / uhvaćen"
    }
  },
  {
    "infinitiv": {
      "de": "finden",
      "lv": "Pronaći"
    },
    "praesens": {
      "de": "er findet",
      "lv": "On nalazi"
    },
    "imperfektIndikativ": {
      "de": "er fand",
      "lv": "Pronašao je"
    },
    "imperfektKonjunktiv": {
      "de": "er fände",
      "lv": "On bi pronašao"
    },
    "partizipVergangenheit": {
      "de": "gefunden",
      "lv": "Pronađeno"
    }
  },
  {
    "infinitiv": {
      "de": "fliegen",
      "lv": "Pusti"
    },
    "praesens": {
      "de": "er fliegt",
      "lv": "On leti"
    },
    "imperfektIndikativ": {
      "de": "er flog",
      "lv": "Leteo je"
    },
    "imperfektKonjunktiv": {
      "de": "er flöge",
      "lv": "On bi leteo"
    },
    "partizipVergangenheit": {
      "de": "geflogen (er ist)",
      "lv": "Je leteo"
    }
  },
  {
    "infinitiv": {
      "de": "fliehen",
      "lv": "Bježi"
    },
    "praesens": {
      "de": "er flieht",
      "lv": "On beži"
    },
    "imperfektIndikativ": {
      "de": "er floh",
      "lv": "Pobegao je"
    },
    "imperfektKonjunktiv": {
      "de": "er flöhe",
      "lv": "On bi pobegao"
    },
    "partizipVergangenheit": {
      "de": "geflohen (er ist)",
      "lv": "Pobegao"
    }
  },
  {
    "infinitiv": {
      "de": "fließen",
      "lv": "Da teče"
    },
    "praesens": {
      "de": "er fließt",
      "lv": "On trči"
    },
    "imperfektIndikativ": {
      "de": "er floss",
      "lv": "On je trčao"
    },
    "imperfektKonjunktiv": {
      "de": "er flösse",
      "lv": "On bi trčao"
    },
    "partizipVergangenheit": {
      "de": "geflossen (er ist)",
      "lv": "Prošao"
    }
  },
  {
    "infinitiv": {
      "de": "fressen",
      "lv": "Jedi sutra"
    },
    "praesens": {
      "de": "er frisst",
      "lv": "On jede / guta"
    },
    "imperfektIndikativ": {
      "de": "er frass",
      "lv": "Jeo je / progutao"
    },
    "imperfektKonjunktiv": {
      "de": "er fräße",
      "lv": "On bi jeo / doručkovao"
    },
    "partizipVergangenheit": {
      "de": "gefressen",
      "lv": "Pojedeno / jutro"
    }
  },
  {
    "infinitiv": {
      "de": "frieren",
      "lv": "Hladno"
    },
    "praesens": {
      "de": "er friert",
      "lv": "Smrzava se"
    },
    "imperfektIndikativ": {
      "de": "er fror",
      "lv": "He island"
    },
    "imperfektKonjunktiv": {
      "de": "er fröre",
      "lv": "Smrzavao se"
    },
    "partizipVergangenheit": {
      "de": "gefroren",
      "lv": "Ostrvo"
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
      "lv": "Dato"
    }
  },
  {
    "infinitiv": {
      "de": "gedeihen",
      "lv": "Uspjeti"
    },
    "praesens": {
      "de": "er gedeiht",
      "lv": "On uspeva"
    },
    "imperfektIndikativ": {
      "de": "er gedieh",
      "lv": "Uspio je"
    },
    "imperfektKonjunktiv": {
      "de": "er gediehe",
      "lv": "Uspeo bi"
    },
    "partizipVergangenheit": {
      "de": "gediehen (er ist)",
      "lv": "Uspjelo"
    }
  },
  {
    "infinitiv": {
      "de": "gehen",
      "lv": "Idi"
    },
    "praesens": {
      "de": "er geht",
      "lv": "On ide"
    },
    "imperfektIndikativ": {
      "de": "er ging",
      "lv": "Hodao je"
    },
    "imperfektKonjunktiv": {
      "de": "er ginge",
      "lv": "On bi otišao"
    },
    "partizipVergangenheit": {
      "de": "gegangen (er ist)",
      "lv": "Otišao"
    }
  },
  {
    "infinitiv": {
      "de": "gewinnen",
      "lv": "Dobiti"
    },
    "praesens": {
      "de": "er gewinnt",
      "lv": "On dobija"
    },
    "imperfektIndikativ": {
      "de": "er gewann",
      "lv": "Dobio je"
    },
    "imperfektKonjunktiv": {
      "de": "er gewönne / er gewänne",
      "lv": "On bi dobio"
    },
    "partizipVergangenheit": {
      "de": "gewonnen",
      "lv": "Dobijeno"
    }
  },
  {
    "infinitiv": {
      "de": "haben",
      "lv": "Biti / pripadati"
    },
    "praesens": {
      "de": "er hat",
      "lv": "On ima"
    },
    "imperfektIndikativ": {
      "de": "hatte",
      "lv": "Bio"
    },
    "imperfektKonjunktiv": {
      "de": "hatte",
      "lv": "Bio"
    },
    "partizipVergangenheit": {
      "de": "gehabt",
      "lv": "Bio"
    }
  },
  {
    "infinitiv": {
      "de": "halten",
      "lv": "Čekaj"
    },
    "praesens": {
      "de": "er hält",
      "lv": "On tamo"
    },
    "imperfektIndikativ": {
      "de": "er hielt",
      "lv": "On je držao"
    },
    "imperfektKonjunktiv": {
      "de": "er hielte",
      "lv": "On bi izdržao"
    },
    "partizipVergangenheit": {
      "de": "gehalten",
      "lv": "Održano"
    }
  },
  {
    "infinitiv": {
      "de": "heißen",
      "lv": "Nazvati"
    },
    "praesens": {
      "de": "er heißt",
      "lv": "On zove / on je pozvan"
    },
    "imperfektIndikativ": {
      "de": "er hieß",
      "lv": "Zvao je / bio je pozvan"
    },
    "imperfektKonjunktiv": {
      "de": "er hieße",
      "lv": "On bi nazvao / on bi bio pozvan"
    },
    "partizipVergangenheit": {
      "de": "geheißen",
      "lv": "Pozvao"
    }
  },
  {
    "infinitiv": {
      "de": "helfen",
      "lv": "Pomoći"
    },
    "praesens": {
      "de": "er hilft",
      "lv": "On pomaže"
    },
    "imperfektIndikativ": {
      "de": "er half",
      "lv": "Pomogao je"
    },
    "imperfektKonjunktiv": {
      "de": "er hülfe / er hälfe",
      "lv": "On bi pomogao"
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
      "lv": "On bi došao"
    },
    "partizipVergangenheit": {
      "de": "gekommen (er ist)",
      "lv": "Je došao"
    }
  },
  {
    "infinitiv": {
      "de": "können",
      "lv": "Biti u mogućnosti"
    },
    "praesens": {
      "de": "er kann",
      "lv": "On može"
    },
    "imperfektIndikativ": {
      "de": "konnte",
      "lv": "Mogao"
    },
    "imperfektKonjunktiv": {
      "de": "konnte",
      "lv": "Mogao"
    },
    "partizipVergangenheit": {
      "de": "gekonnt",
      "lv": "Mogao"
    }
  },
  {
    "infinitiv": {
      "de": "kriechen",
      "lv": "Pada kiša"
    },
    "praesens": {
      "de": "er kriecht",
      "lv": "On se naginje"
    },
    "imperfektIndikativ": {
      "de": "er kroch",
      "lv": "Kišio je"
    },
    "imperfektKonjunktiv": {
      "de": "er kröche",
      "lv": "On kiši"
    },
    "partizipVergangenheit": {
      "de": "gekrochen (er ist)",
      "lv": "Preminuo"
    }
  },
  {
    "infinitiv": {
      "de": "laden",
      "lv": "Učitati, pozvati"
    },
    "praesens": {
      "de": "er lädt",
      "lv": "On gomila / poziva"
    },
    "imperfektIndikativ": {
      "de": "er lud",
      "lv": "On je učitao / pozvao"
    },
    "imperfektKonjunktiv": {
      "de": "er lüde",
      "lv": "On bi učitao/pozvao"
    },
    "partizipVergangenheit": {
      "de": "geladen",
      "lv": "Učitano / pozvano"
    }
  },
  {
    "infinitiv": {
      "de": "lassen",
      "lv": "Staviti, pustiti"
    },
    "praesens": {
      "de": "er lässt",
      "lv": "On stavlja / dozvoljava"
    },
    "imperfektIndikativ": {
      "de": "er ließ",
      "lv": "Naredio je / dozvolio"
    },
    "imperfektKonjunktiv": {
      "de": "er ließe",
      "lv": "On bi stavio / pustio"
    },
    "partizipVergangenheit": {
      "de": "gelassen",
      "lv": "Staviti / dozvoljeno"
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
      "lv": "On je trčao"
    },
    "imperfektKonjunktiv": {
      "de": "er liefe",
      "lv": "On bi trčao"
    },
    "partizipVergangenheit": {
      "de": "gelaufen (er ist)",
      "lv": "Ran"
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
      "lv": "On je patio"
    },
    "imperfektKonjunktiv": {
      "de": "er litte",
      "lv": "On bi patio"
    },
    "partizipVergangenheit": {
      "de": "gelitten",
      "lv": "Patio"
    }
  },
  {
    "infinitiv": {
      "de": "leihen",
      "lv": "Posuditi / posuditi"
    },
    "praesens": {
      "de": "er leiht",
      "lv": "On pozajmljuje / pozajmljuje"
    },
    "imperfektIndikativ": {
      "de": "er lieh",
      "lv": "Pozajmio je / pozajmio"
    },
    "imperfektKonjunktiv": {
      "de": "er liehe",
      "lv": "On bi pozajmio/pozajmio"
    },
    "partizipVergangenheit": {
      "de": "geliehen",
      "lv": "Pozajmljena / pozajmljena"
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
      "lv": "On bi čitao"
    },
    "partizipVergangenheit": {
      "de": "gelesen",
      "lv": "Čitaj"
    }
  },
  {
    "infinitiv": {
      "de": "liegen",
      "lv": "Spavati"
    },
    "praesens": {
      "de": "er liegt",
      "lv": "On spava"
    },
    "imperfektIndikativ": {
      "de": "er lag",
      "lv": "Spavao je"
    },
    "imperfektKonjunktiv": {
      "de": "er läge",
      "lv": "Spavao bi"
    },
    "partizipVergangenheit": {
      "de": "gelegen",
      "lv": "Spavao"
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
      "lv": "Lagao bi"
    },
    "partizipVergangenheit": {
      "de": "gelogen",
      "lv": "Lagao"
    }
  },
  {
    "infinitiv": {
      "de": "mahlen",
      "lv": "Tlo"
    },
    "praesens": {
      "de": "er mahlt",
      "lv": "On melje"
    },
    "imperfektIndikativ": {
      "de": "er mahlte",
      "lv": "He edge"
    },
    "imperfektKonjunktiv": {
      "de": "er malte",
      "lv": "On melje"
    },
    "partizipVergangenheit": {
      "de": "gemahlen",
      "lv": "Tlo"
    }
  },
  {
    "infinitiv": {
      "de": "meiden",
      "lv": "Izbjegavati"
    },
    "praesens": {
      "de": "er meidet",
      "lv": "On izbegava"
    },
    "imperfektIndikativ": {
      "de": "er mied",
      "lv": "Izbegao je"
    },
    "imperfektKonjunktiv": {
      "de": "er miede",
      "lv": "Izbegao bi"
    },
    "partizipVergangenheit": {
      "de": "gemieden",
      "lv": "Izbjegnuto"
    }
  },
  {
    "infinitiv": {
      "de": "melken",
      "lv": "Za mleko"
    },
    "praesens": {
      "de": "er milkt / er melkt",
      "lv": "On mete"
    },
    "imperfektIndikativ": {
      "de": "er molk / er melkte",
      "lv": "On je pomeo"
    },
    "imperfektKonjunktiv": {
      "de": "er mölke / er melkte",
      "lv": "Pomuzeo bi"
    },
    "partizipVergangenheit": {
      "de": "gemolken / gemelkt",
      "lv": "Pomuzeo"
    }
  },
  {
    "infinitiv": {
      "de": "messen",
      "lv": "Meriti"
    },
    "praesens": {
      "de": "er misst",
      "lv": "On meri"
    },
    "imperfektIndikativ": {
      "de": "er mass",
      "lv": "Izmjerio je"
    },
    "imperfektKonjunktiv": {
      "de": "er mäße",
      "lv": "On bi merio"
    },
    "partizipVergangenheit": {
      "de": "gemessen",
      "lv": "Izmjereno"
    }
  },
  {
    "infinitiv": {
      "de": "misslingen",
      "lv": "Propasti"
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
      "lv": "Nije uspjelo"
    }
  },
  {
    "infinitiv": {
      "de": "mögen",
      "lv": "To like"
    },
    "praesens": {
      "de": "er mag",
      "lv": "On voli"
    },
    "imperfektIndikativ": {
      "de": "mochte",
      "lv": "Svidelo se"
    },
    "imperfektKonjunktiv": {
      "de": "mochte",
      "lv": "Svidelo se"
    },
    "partizipVergangenheit": {
      "de": "gemocht",
      "lv": "Sviđalo se"
    }
  },
  {
    "infinitiv": {
      "de": "müssen",
      "lv": "Da treba"
    },
    "praesens": {
      "de": "er muss",
      "lv": "Treba mu"
    },
    "imperfektIndikativ": {
      "de": "musste",
      "lv": "Trebao imati"
    },
    "imperfektKonjunktiv": {
      "de": "musste",
      "lv": "Trebao imati"
    },
    "partizipVergangenheit": {
      "de": "gemusst",
      "lv": "Potreban"
    }
  },
  {
    "infinitiv": {
      "de": "nehmen",
      "lv": "Uzeti"
    },
    "praesens": {
      "de": "er nimmt",
      "lv": "On uzima"
    },
    "imperfektIndikativ": {
      "de": "er nahm",
      "lv": "Uzeo je"
    },
    "imperfektKonjunktiv": {
      "de": "er nähme",
      "lv": "On bi uzeo"
    },
    "partizipVergangenheit": {
      "de": "genommen",
      "lv": "Uzeti"
    }
  },
  {
    "infinitiv": {
      "de": "nennen",
      "lv": "Imenovati"
    },
    "praesens": {
      "de": "er nennt",
      "lv": "Nazvao je"
    },
    "imperfektIndikativ": {
      "de": "er nannte",
      "lv": "Nazvao je"
    },
    "imperfektKonjunktiv": {
      "de": "er nennte",
      "lv": "On bi imenovao"
    },
    "partizipVergangenheit": {
      "de": "genannt",
      "lv": "Imenovani"
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
      "lv": "Zviždao"
    }
  },
  {
    "infinitiv": {
      "de": "pflegen",
      "lv": "Održavati"
    },
    "praesens": {
      "de": "er pflegt",
      "lv": "On brine"
    },
    "imperfektIndikativ": {
      "de": "pflegte vai pflog",
      "lv": "Set"
    },
    "imperfektKonjunktiv": {
      "de": "pflegte vai pflog",
      "lv": "Set"
    },
    "partizipVergangenheit": {
      "de": "gepflegt vai gepflogen",
      "lv": "Njegovan"
    }
  },
  {
    "infinitiv": {
      "de": "preisen",
      "lv": "Pohvala"
    },
    "praesens": {
      "de": "er preist",
      "lv": "On hvali"
    },
    "imperfektIndikativ": {
      "de": "er pries",
      "lv": "Pohvalio je"
    },
    "imperfektKonjunktiv": {
      "de": "er priese",
      "lv": "On bi pohvalio"
    },
    "partizipVergangenheit": {
      "de": "gepriesen",
      "lv": "Pohvaljen"
    }
  },
  {
    "infinitiv": {
      "de": "quellen",
      "lv": "Puniti se"
    },
    "praesens": {
      "de": "er quillt",
      "lv": "Goji se"
    },
    "imperfektIndikativ": {
      "de": "er quoll",
      "lv": "Sazreo je"
    },
    "imperfektKonjunktiv": {
      "de": "er quölle",
      "lv": "On debeo"
    },
    "partizipVergangenheit": {
      "de": "gequollen (er ist)",
      "lv": "Natečen"
    }
  },
  {
    "infinitiv": {
      "de": "raten",
      "lv": "Predložiti / spomenuti"
    },
    "praesens": {
      "de": "er rät",
      "lv": "On preporučuje / min"
    },
    "imperfektIndikativ": {
      "de": "er riet",
      "lv": "On je predložio / predložio"
    },
    "imperfektKonjunktiv": {
      "de": "er riete",
      "lv": "On bi predložio/spomenuo"
    },
    "partizipVergangenheit": {
      "de": "geraten",
      "lv": "Predloženo / spomenuto"
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
      "lv": "On trlja"
    },
    "imperfektKonjunktiv": {
      "de": "er riebe",
      "lv": "On bi trljao"
    },
    "partizipVergangenheit": {
      "de": "gerieben",
      "lv": "Trljao"
    }
  },
  {
    "infinitiv": {
      "de": "reißen",
      "lv": "Povuci"
    },
    "praesens": {
      "de": "er reißt",
      "lv": "Odbrusi on"
    },
    "imperfektIndikativ": {
      "de": "er riss",
      "lv": "Odbrusio je"
    },
    "imperfektKonjunktiv": {
      "de": "er risse",
      "lv": "Odbrusio je"
    },
    "partizipVergangenheit": {
      "de": "gerissen",
      "lv": "Torn"
    }
  },
  {
    "infinitiv": {
      "de": "reiten",
      "lv": "Voziti se"
    },
    "praesens": {
      "de": "er reitet",
      "lv": "On jaše"
    },
    "imperfektIndikativ": {
      "de": "er ritt",
      "lv": "On je jahao"
    },
    "imperfektKonjunktiv": {
      "de": "er ritte",
      "lv": "On bi jahao"
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
      "lv": "On je trčao"
    },
    "imperfektKonjunktiv": {
      "de": "er rennte",
      "lv": "On bi trčao"
    },
    "partizipVergangenheit": {
      "de": "gerannt",
      "lv": "Ran"
    }
  },
  {
    "infinitiv": {
      "de": "riechen",
      "lv": "Ost"
    },
    "praesens": {
      "de": "er riecht",
      "lv": "On miriše"
    },
    "imperfektIndikativ": {
      "de": "er roch",
      "lv": "On peva"
    },
    "imperfektKonjunktiv": {
      "de": "er röche",
      "lv": "He port"
    },
    "partizipVergangenheit": {
      "de": "gerochen",
      "lv": "Luka"
    }
  },
  {
    "infinitiv": {
      "de": "ringen",
      "lv": "Razbiti"
    },
    "praesens": {
      "de": "er ringt",
      "lv": "On se lomi"
    },
    "imperfektIndikativ": {
      "de": "er rang",
      "lv": "Pokvario se"
    },
    "imperfektKonjunktiv": {
      "de": "er ränge",
      "lv": "Slomio bi se"
    },
    "partizipVergangenheit": {
      "de": "gerungen",
      "lv": "Čekaj"
    }
  },
  {
    "infinitiv": {
      "de": "rinnen",
      "lv": "Da teče"
    },
    "praesens": {
      "de": "er rinnt",
      "lv": "On trči"
    },
    "imperfektIndikativ": {
      "de": "er rann",
      "lv": "On je trčao"
    },
    "imperfektKonjunktiv": {
      "de": "er ränne / er rönne",
      "lv": "On bi trčao"
    },
    "partizipVergangenheit": {
      "de": "geronnen (er ist)",
      "lv": "Tekao/koaguliran"
    }
  },
  {
    "infinitiv": {
      "de": "rufen",
      "lv": "Nazvati"
    },
    "praesens": {
      "de": "er ruft",
      "lv": "On zove"
    },
    "imperfektIndikativ": {
      "de": "er rief",
      "lv": "Nazvao je"
    },
    "imperfektKonjunktiv": {
      "de": "er riefe",
      "lv": "On bi nazvao"
    },
    "partizipVergangenheit": {
      "de": "gerufen",
      "lv": "Pozvao"
    }
  },
  {
    "infinitiv": {
      "de": "salzen",
      "lv": "Posoliti"
    },
    "praesens": {
      "de": "er salzt",
      "lv": "Posolio je"
    },
    "imperfektIndikativ": {
      "de": "er salzte",
      "lv": "Posolio je"
    },
    "imperfektKonjunktiv": {
      "de": "er salzte",
      "lv": "On bi solio"
    },
    "partizipVergangenheit": {
      "de": "gesalzen",
      "lv": "Soljeni"
    }
  },
  {
    "infinitiv": {
      "de": "saufen",
      "lv": "Suho / piće"
    },
    "praesens": {
      "de": "er säuft",
      "lv": "On pije / pije"
    },
    "imperfektIndikativ": {
      "de": "er soff",
      "lv": "On je pio / pio"
    },
    "imperfektKonjunktiv": {
      "de": "er söffe",
      "lv": "On bi pio/pio"
    },
    "partizipVergangenheit": {
      "de": "gesoffen",
      "lv": "Pijan"
    }
  },
  {
    "infinitiv": {
      "de": "saugen",
      "lv": "Sisati"
    },
    "praesens": {
      "de": "er saugt",
      "lv": "On je sranje"
    },
    "imperfektIndikativ": {
      "de": "er sog",
      "lv": "Sisao je"
    },
    "imperfektKonjunktiv": {
      "de": "er söge",
      "lv": "On bi sisao"
    },
    "partizipVergangenheit": {
      "de": "gesogen",
      "lv": "Usisan"
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
      "lv": "On je stvorio"
    },
    "imperfektKonjunktiv": {
      "de": "er schüfe",
      "lv": "On bi stvorio"
    },
    "partizipVergangenheit": {
      "de": "geschaffen",
      "lv": "Kreiran"
    }
  },
  {
    "infinitiv": {
      "de": "schallen",
      "lv": "Zvučati"
    },
    "praesens": {
      "de": "es schallt",
      "lv": "Zvuči"
    },
    "imperfektIndikativ": {
      "de": "schallte vai scholl",
      "lv": "Zvučalo"
    },
    "imperfektKonjunktiv": {
      "de": "schallte vai scholl",
      "lv": "Zvučalo"
    },
    "partizipVergangenheit": {
      "de": "geschallt",
      "lv": "Zvučalo"
    }
  },
  {
    "infinitiv": {
      "de": "scheiden",
      "lv": "Razvod / raskid"
    },
    "praesens": {
      "de": "er scheidet",
      "lv": "On se razvodi / razvodi"
    },
    "imperfektIndikativ": {
      "de": "er schied",
      "lv": "On se razveo/razveo"
    },
    "imperfektKonjunktiv": {
      "de": "er schiede",
      "lv": "On bi se razveo/razveo"
    },
    "partizipVergangenheit": {
      "de": "geschieden (er hat / er ist)",
      "lv": "Razveden/razveden"
    }
  },
  {
    "infinitiv": {
      "de": "scheinen",
      "lv": "Zasjati / pojaviti se"
    },
    "praesens": {
      "de": "er scheint",
      "lv": "On sija / čini se"
    },
    "imperfektIndikativ": {
      "de": "er schien",
      "lv": "Sijao je / činilo se"
    },
    "imperfektKonjunktiv": {
      "de": "er schiene",
      "lv": "On bi sijao / izgledao"
    },
    "partizipVergangenheit": {
      "de": "geschienen",
      "lv": "Sijao / činilo se"
    }
  },
  {
    "infinitiv": {
      "de": "schelten",
      "lv": "Bart"
    },
    "praesens": {
      "de": "er schilt",
      "lv": "On grdi"
    },
    "imperfektIndikativ": {
      "de": "er schalt",
      "lv": "Zabranio je"
    },
    "imperfektKonjunktiv": {
      "de": "er schölte / er schälte",
      "lv": "On se brije"
    },
    "partizipVergangenheit": {
      "de": "gescholten",
      "lv": "Brada"
    }
  },
  {
    "infinitiv": {
      "de": "scheren",
      "lv": "Rezati"
    },
    "praesens": {
      "de": "er schert",
      "lv": "On seče"
    },
    "imperfektIndikativ": {
      "de": "schor vai scherte",
      "lv": "Makaze"
    },
    "imperfektKonjunktiv": {
      "de": "schor vai scherte",
      "lv": "Makaze"
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
      "lv": "Gurnuo je"
    },
    "imperfektKonjunktiv": {
      "de": "er schöbe",
      "lv": "On bi gurnuo"
    },
    "partizipVergangenheit": {
      "de": "geschoben",
      "lv": "Gurnuto"
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
      "lv": "Pucao"
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
      "lv": "Izmučen"
    },
    "imperfektKonjunktiv": {
      "de": "schindete",
      "lv": "Izmučen"
    },
    "partizipVergangenheit": {
      "de": "geschunden",
      "lv": "Izmučen"
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
      "lv": "Hit"
    },
    "praesens": {
      "de": "er schlägt",
      "lv": "On pogađa"
    },
    "imperfektIndikativ": {
      "de": "er schlug",
      "lv": "Udario je"
    },
    "imperfektKonjunktiv": {
      "de": "er schlüge",
      "lv": "Udario bi"
    },
    "partizipVergangenheit": {
      "de": "geschlagen",
      "lv": "Pretučen"
    }
  },
  {
    "infinitiv": {
      "de": "schleichen",
      "lv": "Pada kiša"
    },
    "praesens": {
      "de": "er schleicht",
      "lv": "On se naginje"
    },
    "imperfektIndikativ": {
      "de": "er schlich",
      "lv": "Kišio je"
    },
    "imperfektKonjunktiv": {
      "de": "er schliche",
      "lv": "On kiši"
    },
    "partizipVergangenheit": {
      "de": "geschlichen (er ist)",
      "lv": "Preminuo"
    }
  },
  {
    "infinitiv": {
      "de": "schleifen",
      "lv": "Mljeti"
    },
    "praesens": {
      "de": "er schleift",
      "lv": "On melje"
    },
    "imperfektIndikativ": {
      "de": "er schliff",
      "lv": "On je samleo"
    },
    "imperfektKonjunktiv": {
      "de": "er schliffe",
      "lv": "On bi samleo"
    },
    "partizipVergangenheit": {
      "de": "geschliffen",
      "lv": "Uglačan"
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
      "lv": "Zatvorio bi"
    },
    "partizipVergangenheit": {
      "de": "geschlossen",
      "lv": "Zatvoreno"
    }
  },
  {
    "infinitiv": {
      "de": "schlingen",
      "lv": "Sutra"
    },
    "praesens": {
      "de": "er schlingt",
      "lv": "On guta"
    },
    "imperfektIndikativ": {
      "de": "er schlang",
      "lv": "Progutao je"
    },
    "imperfektKonjunktiv": {
      "de": "er schlänge",
      "lv": "On jutro"
    },
    "partizipVergangenheit": {
      "de": "geschlungen",
      "lv": "Jutro"
    }
  },
  {
    "infinitiv": {
      "de": "schmeißen",
      "lv": "Bacanje"
    },
    "praesens": {
      "de": "er schmeißt",
      "lv": "On baca"
    },
    "imperfektIndikativ": {
      "de": "er schmiss",
      "lv": "Bacio je"
    },
    "imperfektKonjunktiv": {
      "de": "er schmisse",
      "lv": "Bacio je"
    },
    "partizipVergangenheit": {
      "de": "geschmissen",
      "lv": "Bačen"
    }
  },
  {
    "infinitiv": {
      "de": "schmelzen",
      "lv": "Kreće se"
    },
    "praesens": {
      "de": "er schmilzt",
      "lv": "On se topi"
    },
    "imperfektIndikativ": {
      "de": "er schmolz",
      "lv": "Zastenjao je"
    },
    "imperfektKonjunktiv": {
      "de": "er schmölze",
      "lv": "Kretao se"
    },
    "partizipVergangenheit": {
      "de": "geschmolzen (er ist)",
      "lv": "Rastopljeni"
    }
  },
  {
    "infinitiv": {
      "de": "schnauben",
      "lv": "Šištati"
    },
    "praesens": {
      "de": "er schnaubt",
      "lv": "On frkće"
    },
    "imperfektIndikativ": {
      "de": "schnaubte vai schnob",
      "lv": "Frknu"
    },
    "imperfektKonjunktiv": {
      "de": "schnaubte vai schnob",
      "lv": "Frknu"
    },
    "partizipVergangenheit": {
      "de": "geschnaubt vai geschnoben",
      "lv": "Frkni"
    }
  },
  {
    "infinitiv": {
      "de": "schneiden",
      "lv": "Rezati"
    },
    "praesens": {
      "de": "er schneidet",
      "lv": "On se vrti"
    },
    "imperfektIndikativ": {
      "de": "er schnitt",
      "lv": "On je sekao"
    },
    "imperfektKonjunktiv": {
      "de": "er schnitte",
      "lv": "Presekao bi"
    },
    "partizipVergangenheit": {
      "de": "geschnitten",
      "lv": "Cut"
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
      "lv": "Napisao je"
    },
    "imperfektKonjunktiv": {
      "de": "er schriebe",
      "lv": "Pisao bi"
    },
    "partizipVergangenheit": {
      "de": "geschrieben",
      "lv": "Napisano"
    }
  },
  {
    "infinitiv": {
      "de": "schreien",
      "lv": "Vikati"
    },
    "praesens": {
      "de": "er schreit",
      "lv": "Viče on"
    },
    "imperfektIndikativ": {
      "de": "er schrie",
      "lv": "Viknuo je"
    },
    "imperfektKonjunktiv": {
      "de": "er schriee",
      "lv": "Viknuo bi"
    },
    "partizipVergangenheit": {
      "de": "geschrien",
      "lv": "Viknu"
    }
  },
  {
    "infinitiv": {
      "de": "schreiten",
      "lv": "Hodanje"
    },
    "praesens": {
      "de": "er schreitet",
      "lv": "On hoda"
    },
    "imperfektIndikativ": {
      "de": "er schritt",
      "lv": "Hodao je"
    },
    "imperfektKonjunktiv": {
      "de": "er schritte",
      "lv": "On bi hodao"
    },
    "partizipVergangenheit": {
      "de": "geschritten (er ist)",
      "lv": "Hodao"
    }
  },
  {
    "infinitiv": {
      "de": "schweigen",
      "lv": "Ćuti"
    },
    "praesens": {
      "de": "er schweigt",
      "lv": "On ćuti"
    },
    "imperfektIndikativ": {
      "de": "er schwieg",
      "lv": "On je ćutao"
    },
    "imperfektKonjunktiv": {
      "de": "er schwiege",
      "lv": "On bi ćutao"
    },
    "partizipVergangenheit": {
      "de": "geschwiegen",
      "lv": "Ućutkan"
    }
  },
  {
    "infinitiv": {
      "de": "schwellen",
      "lv": "Pamp"
    },
    "praesens": {
      "de": "er schwillt",
      "lv": "On duri se"
    },
    "imperfektIndikativ": {
      "de": "er schwoll",
      "lv": "He pampas"
    },
    "imperfektKonjunktiv": {
      "de": "er schwölle",
      "lv": "On bi pumpao"
    },
    "partizipVergangenheit": {
      "de": "geschwollen (er ist)",
      "lv": "Pumpa"
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
      "lv": "Nestati"
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
      "lv": "Nestao bi"
    },
    "partizipVergangenheit": {
      "de": "geschwunden (er ist)",
      "lv": "Izgubljen"
    }
  },
  {
    "infinitiv": {
      "de": "schwingen",
      "lv": "Talas"
    },
    "praesens": {
      "de": "er schwingt",
      "lv": "On maše"
    },
    "imperfektIndikativ": {
      "de": "er schwang",
      "lv": "Mahnuo je"
    },
    "imperfektKonjunktiv": {
      "de": "er schwänge",
      "lv": "Mahnuo bi"
    },
    "partizipVergangenheit": {
      "de": "geschwungen",
      "lv": "Mahnuo"
    }
  },
  {
    "infinitiv": {
      "de": "schwören",
      "lv": "Zakleti se"
    },
    "praesens": {
      "de": "er schwört",
      "lv": "Kune se"
    },
    "imperfektIndikativ": {
      "de": "er schwur / er schwor",
      "lv": "Zakleo se"
    },
    "imperfektKonjunktiv": {
      "de": "er schwöre",
      "lv": "Zakleo bi se"
    },
    "partizipVergangenheit": {
      "de": "geschworen",
      "lv": "Zakleo"
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
      "lv": "Video je"
    },
    "imperfektKonjunktiv": {
      "de": "er sähe",
      "lv": "On bi video"
    },
    "partizipVergangenheit": {
      "de": "gesehen",
      "lv": "Viđeno"
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
      "lv": "Bio"
    },
    "imperfektKonjunktiv": {
      "de": "war",
      "lv": "Bio"
    },
    "partizipVergangenheit": {
      "de": "gewesen",
      "lv": "Bio"
    }
  },
  {
    "infinitiv": {
      "de": "senden",
      "lv": "Poslati"
    },
    "praesens": {
      "de": "er sendet",
      "lv": "On šalje"
    },
    "imperfektIndikativ": {
      "de": "er sandte / er sendete",
      "lv": "Poslao je"
    },
    "imperfektKonjunktiv": {
      "de": "er sendete",
      "lv": "Poslao bi"
    },
    "partizipVergangenheit": {
      "de": "gesandt / gesendet",
      "lv": "Poslano"
    }
  },
  {
    "infinitiv": {
      "de": "sieden",
      "lv": "Da proključa"
    },
    "praesens": {
      "de": "er siedet",
      "lv": "On kuva"
    },
    "imperfektIndikativ": {
      "de": "sott vai siedete",
      "lv": "Kuvano"
    },
    "imperfektKonjunktiv": {
      "de": "sott vai siedete",
      "lv": "Kuvano"
    },
    "partizipVergangenheit": {
      "de": "gesotten vai gesiedet",
      "lv": "Kuvano"
    }
  },
  {
    "infinitiv": {
      "de": "singen",
      "lv": "Da pevam"
    },
    "praesens": {
      "de": "er singt",
      "lv": "On peva"
    },
    "imperfektIndikativ": {
      "de": "er sang",
      "lv": "Pevao je"
    },
    "imperfektKonjunktiv": {
      "de": "er sänge",
      "lv": "Pevao bi"
    },
    "partizipVergangenheit": {
      "de": "gesungen",
      "lv": "Pjevan"
    }
  },
  {
    "infinitiv": {
      "de": "sinken",
      "lv": "Potonuti"
    },
    "praesens": {
      "de": "er sinkt",
      "lv": "On tone"
    },
    "imperfektIndikativ": {
      "de": "er sank",
      "lv": "Izmišljao je"
    },
    "imperfektKonjunktiv": {
      "de": "er sänke",
      "lv": "Potonuo bi"
    },
    "partizipVergangenheit": {
      "de": "gesunken (er ist)",
      "lv": "Make up"
    }
  },
  {
    "infinitiv": {
      "de": "sinnen",
      "lv": "Pitati se"
    },
    "praesens": {
      "de": "er sinnt",
      "lv": "Pita se on"
    },
    "imperfektIndikativ": {
      "de": "er sann",
      "lv": "Pitao se on"
    },
    "imperfektKonjunktiv": {
      "de": "er sönne / er sänne",
      "lv": "Pitao bi se"
    },
    "partizipVergangenheit": {
      "de": "gesonnen",
      "lv": "Minded"
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
      "lv": "On je sjedio"
    },
    "imperfektKonjunktiv": {
      "de": "er säße",
      "lv": "On bi sjedio"
    },
    "partizipVergangenheit": {
      "de": "gesessen",
      "lv": "Sjeo"
    }
  },
  {
    "infinitiv": {
      "de": "sollen",
      "lv": "Trebati / biti dužan"
    },
    "praesens": {
      "de": "er soll",
      "lv": "Treba mu"
    },
    "imperfektIndikativ": {
      "de": "sollte",
      "lv": "Trebao imati"
    },
    "imperfektKonjunktiv": {
      "de": "sollte",
      "lv": "Trebao imati"
    },
    "partizipVergangenheit": {
      "de": "gesollt",
      "lv": "Potreban"
    }
  },
  {
    "infinitiv": {
      "de": "speien",
      "lv": "Pljunuti"
    },
    "praesens": {
      "de": "er speit",
      "lv": "On pljuje"
    },
    "imperfektIndikativ": {
      "de": "er spie",
      "lv": "Pljunuo je"
    },
    "imperfektKonjunktiv": {
      "de": "er spie",
      "lv": "Pljunuo bi"
    },
    "partizipVergangenheit": {
      "de": "gespien",
      "lv": "Ispljunuo"
    }
  },
  {
    "infinitiv": {
      "de": "spinnen",
      "lv": "Spin"
    },
    "praesens": {
      "de": "er spinnt",
      "lv": "On izvrće"
    },
    "imperfektIndikativ": {
      "de": "er spann",
      "lv": "Okrenuo se"
    },
    "imperfektKonjunktiv": {
      "de": "er spönne / er spänne",
      "lv": "Vrtio bi se"
    },
    "partizipVergangenheit": {
      "de": "gesponnen",
      "lv": "Spin"
    }
  },
  {
    "infinitiv": {
      "de": "spleißen",
      "lv": "Za povezivanje"
    },
    "praesens": {
      "de": "er spleißt",
      "lv": "On povezuje"
    },
    "imperfektIndikativ": {
      "de": "spliss",
      "lv": "Povezan"
    },
    "imperfektKonjunktiv": {
      "de": "spliss",
      "lv": "Povezan"
    },
    "partizipVergangenheit": {
      "de": "gesplissen",
      "lv": "Povezan"
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
      "lv": "Progovorio je"
    },
    "imperfektKonjunktiv": {
      "de": "er spräche",
      "lv": "Govorio bi"
    },
    "partizipVergangenheit": {
      "de": "gesprochen",
      "lv": "Izgovoreno"
    }
  },
  {
    "infinitiv": {
      "de": "sprießen",
      "lv": "Napredovati"
    },
    "praesens": {
      "de": "er sprießt",
      "lv": "On napreduje"
    },
    "imperfektIndikativ": {
      "de": "er spross",
      "lv": "On je napredovao"
    },
    "imperfektKonjunktiv": {
      "de": "er sprösse",
      "lv": "He shelf"
    },
    "partizipVergangenheit": {
      "de": "gesprossen (er ist)",
      "lv": "Rame"
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
      "lv": "Sočivo"
    }
  },
  {
    "infinitiv": {
      "de": "stechen",
      "lv": "Ubod"
    },
    "praesens": {
      "de": "er sticht",
      "lv": "On ubode"
    },
    "imperfektIndikativ": {
      "de": "er stach",
      "lv": "Udario je"
    },
    "imperfektKonjunktiv": {
      "de": "er stäche",
      "lv": "On bi ubo"
    },
    "partizipVergangenheit": {
      "de": "gestochen",
      "lv": "Izboden"
    }
  },
  {
    "infinitiv": {
      "de": "stecken",
      "lv": "Zalijepiti / zalijepiti"
    },
    "praesens": {
      "de": "er steckt",
      "lv": "On gura"
    },
    "imperfektIndikativ": {
      "de": "stak vai steckte",
      "lv": "Punjena"
    },
    "imperfektKonjunktiv": {
      "de": "stak vai steckte",
      "lv": "Punjena"
    },
    "partizipVergangenheit": {
      "de": "gesteckt",
      "lv": "Punjena"
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
      "lv": "Stojeći"
    }
  },
  {
    "infinitiv": {
      "de": "stehlen",
      "lv": "Krasti"
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
      "lv": "On bi ukrao"
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
      "lv": "Popeo bi se"
    },
    "partizipVergangenheit": {
      "de": "gestiegen (er ist)",
      "lv": "Penjao"
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
      "lv": "Mrtav"
    }
  },
  {
    "infinitiv": {
      "de": "stieben",
      "lv": "Pjena / vrtlog"
    },
    "praesens": {
      "de": "es stiebt",
      "lv": "Duva"
    },
    "imperfektIndikativ": {
      "de": "stob vai stiebte",
      "lv": "Pjenasti"
    },
    "imperfektKonjunktiv": {
      "de": "stob vai stiebte",
      "lv": "Pjenasti"
    },
    "partizipVergangenheit": {
      "de": "gestoben vai gestiebt",
      "lv": "Pokvareno"
    }
  },
  {
    "infinitiv": {
      "de": "stinken",
      "lv": "Mirisati"
    },
    "praesens": {
      "de": "es stinkt",
      "lv": "Smrdi"
    },
    "imperfektIndikativ": {
      "de": "stank",
      "lv": "Namirisao"
    },
    "imperfektKonjunktiv": {
      "de": "stank",
      "lv": "Namirisao"
    },
    "partizipVergangenheit": {
      "de": "gestunken",
      "lv": "Smrdljivo"
    }
  },
  {
    "infinitiv": {
      "de": "stoßen",
      "lv": "Guraj"
    },
    "praesens": {
      "de": "er stößt",
      "lv": "On gura"
    },
    "imperfektIndikativ": {
      "de": "er stieß",
      "lv": "Gurnuo je"
    },
    "imperfektKonjunktiv": {
      "de": "er stieße",
      "lv": "On je gurao"
    },
    "partizipVergangenheit": {
      "de": "gestoßen",
      "lv": "Gurnuto"
    }
  },
  {
    "infinitiv": {
      "de": "streichen",
      "lv": "Boja / traka"
    },
    "praesens": {
      "de": "er streicht",
      "lv": "On slika / pruge"
    },
    "imperfektIndikativ": {
      "de": "er strich",
      "lv": "On je slikano / prugasto"
    },
    "imperfektKonjunktiv": {
      "de": "er striche",
      "lv": "On bi slikao/skinuo"
    },
    "partizipVergangenheit": {
      "de": "gestrichen",
      "lv": "Farbano / prugasto"
    }
  },
  {
    "infinitiv": {
      "de": "streiten",
      "lv": "Boriti se"
    },
    "praesens": {
      "de": "er streitet",
      "lv": "On se bori"
    },
    "imperfektIndikativ": {
      "de": "er stritt",
      "lv": "Borio se"
    },
    "imperfektKonjunktiv": {
      "de": "er stritte",
      "lv": "On bi se borio"
    },
    "partizipVergangenheit": {
      "de": "gestritten",
      "lv": "Borio se"
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
      "lv": "Nosio"
    }
  },
  {
    "infinitiv": {
      "de": "treffen",
      "lv": "Sresti"
    },
    "praesens": {
      "de": "er trifft",
      "lv": "On se sastaje"
    },
    "imperfektIndikativ": {
      "de": "er traf",
      "lv": "Naišao je"
    },
    "imperfektKonjunktiv": {
      "de": "er träfe",
      "lv": "On bi naišao"
    },
    "partizipVergangenheit": {
      "de": "getroffen",
      "lv": "Naišli"
    }
  },
  {
    "infinitiv": {
      "de": "treiben",
      "lv": "Juriti"
    },
    "praesens": {
      "de": "er treibt",
      "lv": "On vozi"
    },
    "imperfektIndikativ": {
      "de": "er trieb",
      "lv": "On je vozio"
    },
    "imperfektKonjunktiv": {
      "de": "er triebe",
      "lv": "On bi vozio"
    },
    "partizipVergangenheit": {
      "de": "getrieben",
      "lv": "Gonjen"
    }
  },
  {
    "infinitiv": {
      "de": "treten",
      "lv": "Uđi / idi"
    },
    "praesens": {
      "de": "er tritt",
      "lv": "On ulazi / odlazi"
    },
    "imperfektIndikativ": {
      "de": "er trat",
      "lv": "Stajao je / hodao"
    },
    "imperfektKonjunktiv": {
      "de": "er träte",
      "lv": "On bi stajao / išao"
    },
    "partizipVergangenheit": {
      "de": "getreten (er ist)",
      "lv": "Stajao/hodao"
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
      "lv": "Pijan"
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
      "lv": "Varao bi"
    },
    "partizipVergangenheit": {
      "de": "getrogen",
      "lv": "Cheated"
    }
  },
  {
    "infinitiv": {
      "de": "tun",
      "lv": "Uraditi"
    },
    "praesens": {
      "de": "er tut",
      "lv": "On to radi"
    },
    "imperfektIndikativ": {
      "de": "er tat",
      "lv": "On jeste"
    },
    "imperfektKonjunktiv": {
      "de": "er täte",
      "lv": "On bi uradio"
    },
    "partizipVergangenheit": {
      "de": "getan",
      "lv": "Urađeno"
    }
  },
  {
    "infinitiv": {
      "de": "verderben",
      "lv": "Oštetiti"
    },
    "praesens": {
      "de": "er verdirbt",
      "lv": "On uništava"
    },
    "imperfektIndikativ": {
      "de": "er verdarb",
      "lv": "Oštetio je"
    },
    "imperfektKonjunktiv": {
      "de": "er verdürbe",
      "lv": "On bi oštetio"
    },
    "partizipVergangenheit": {
      "de": "verdorben",
      "lv": "Oštećeno"
    }
  },
  {
    "infinitiv": {
      "de": "verdrießen",
      "lv": "Izazvati smetnju"
    },
    "praesens": {
      "de": "er verdrießt",
      "lv": "On izaziva neugodnost"
    },
    "imperfektIndikativ": {
      "de": "er verdross",
      "lv": "Izazvao je nerviranje"
    },
    "imperfektKonjunktiv": {
      "de": "er verdrösse",
      "lv": "On bi izazvao iritaciju"
    },
    "partizipVergangenheit": {
      "de": "verdrossen",
      "lv": "Uznemiren"
    }
  },
  {
    "infinitiv": {
      "de": "vergessen",
      "lv": "Zaboravi"
    },
    "praesens": {
      "de": "er vergisst",
      "lv": "Zaboravlja"
    },
    "imperfektIndikativ": {
      "de": "er vergass",
      "lv": "Zaboravio je"
    },
    "imperfektKonjunktiv": {
      "de": "er vergäße",
      "lv": "Zaboravio bi"
    },
    "partizipVergangenheit": {
      "de": "vergessen",
      "lv": "Zaboravljena"
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
      "lv": "Izgubio bi"
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
      "lv": "On je odrastao"
    },
    "imperfektKonjunktiv": {
      "de": "er wüchse",
      "lv": "On bi rastao"
    },
    "partizipVergangenheit": {
      "de": "gewachsen (er ist)",
      "lv": "Odrastao"
    }
  },
  {
    "infinitiv": {
      "de": "waschen",
      "lv": "Oprati"
    },
    "praesens": {
      "de": "er wäscht",
      "lv": "On pere"
    },
    "imperfektIndikativ": {
      "de": "er wusch",
      "lv": "Oprao se"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsche",
      "lv": "Oprao bi se"
    },
    "partizipVergangenheit": {
      "de": "gewaschen",
      "lv": "Oprano"
    }
  },
  {
    "infinitiv": {
      "de": "weben",
      "lv": "Weave"
    },
    "praesens": {
      "de": "er webt",
      "lv": "On tka"
    },
    "imperfektIndikativ": {
      "de": "wob",
      "lv": "Tkiva"
    },
    "imperfektKonjunktiv": {
      "de": "wob",
      "lv": "Tkiva"
    },
    "partizipVergangenheit": {
      "de": "gewoben",
      "lv": "Tkani"
    }
  },
  {
    "infinitiv": {
      "de": "weichen",
      "lv": "Da se povuče"
    },
    "praesens": {
      "de": "er weicht",
      "lv": "On odustaje"
    },
    "imperfektIndikativ": {
      "de": "er wich",
      "lv": "Odstupio je"
    },
    "imperfektKonjunktiv": {
      "de": "er wiche",
      "lv": "On bi se povukao"
    },
    "partizipVergangenheit": {
      "de": "gewichen (er ist)",
      "lv": "Povuci se"
    }
  },
  {
    "infinitiv": {
      "de": "weisen",
      "lv": "Show"
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
      "lv": "Prikazano"
    }
  },
  {
    "infinitiv": {
      "de": "wenden",
      "lv": "Modificirati / izrezati"
    },
    "praesens": {
      "de": "er wendet",
      "lv": "On se okreće"
    },
    "imperfektIndikativ": {
      "de": "er wandte / es wendete",
      "lv": "Okrenuo se/okrenuo"
    },
    "imperfektKonjunktiv": {
      "de": "er wendete",
      "lv": "On bi izmijenio / poništio"
    },
    "partizipVergangenheit": {
      "de": "gewandt / gewendet",
      "lv": "Izmijenjeno / poništeno"
    }
  },
  {
    "infinitiv": {
      "de": "werben",
      "lv": "Predložiti"
    },
    "praesens": {
      "de": "er wirbt",
      "lv": "On predlaže"
    },
    "imperfektIndikativ": {
      "de": "er warb",
      "lv": "Predložio je"
    },
    "imperfektKonjunktiv": {
      "de": "er würbe",
      "lv": "On bi predložio"
    },
    "partizipVergangenheit": {
      "de": "geworben",
      "lv": "Predložio da"
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
      "lv": "Postao"
    },
    "imperfektKonjunktiv": {
      "de": "wurde",
      "lv": "Postao"
    },
    "partizipVergangenheit": {
      "de": "geworden",
      "lv": "Je postao"
    }
  },
  {
    "infinitiv": {
      "de": "werfen",
      "lv": "Bacanje"
    },
    "praesens": {
      "de": "er wirft",
      "lv": "On baca"
    },
    "imperfektIndikativ": {
      "de": "er warf",
      "lv": "Bacio je"
    },
    "imperfektKonjunktiv": {
      "de": "er würfe",
      "lv": "Bacio je"
    },
    "partizipVergangenheit": {
      "de": "geworfen",
      "lv": "Bačen"
    }
  },
  {
    "infinitiv": {
      "de": "wiegen",
      "lv": "Težiti"
    },
    "praesens": {
      "de": "er wiegt",
      "lv": "On teži"
    },
    "imperfektIndikativ": {
      "de": "er wog",
      "lv": "Odmerio je"
    },
    "imperfektKonjunktiv": {
      "de": "er wöge",
      "lv": "On bi težio"
    },
    "partizipVergangenheit": {
      "de": "gewogen",
      "lv": "Ponderisano"
    }
  },
  {
    "infinitiv": {
      "de": "winden",
      "lv": "Pletenica"
    },
    "praesens": {
      "de": "er windet",
      "lv": "He pin"
    },
    "imperfektIndikativ": {
      "de": "er wand",
      "lv": "On plete pletenice"
    },
    "imperfektKonjunktiv": {
      "de": "er wände",
      "lv": "On bi pletenicu"
    },
    "partizipVergangenheit": {
      "de": "gewunden",
      "lv": "Pletena"
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
      "lv": "Znao je"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsste",
      "lv": "On bi znao"
    },
    "partizipVergangenheit": {
      "de": "gewusst",
      "lv": "Poznato"
    }
  },
  {
    "infinitiv": {
      "de": "wollen",
      "lv": "Želim to"
    },
    "praesens": {
      "de": "er will",
      "lv": "On želi"
    },
    "imperfektIndikativ": {
      "de": "wollte",
      "lv": "Želeo da"
    },
    "imperfektKonjunktiv": {
      "de": "wollte",
      "lv": "Želeo da"
    },
    "partizipVergangenheit": {
      "de": "gewollt",
      "lv": "Želeo da"
    }
  },
  {
    "infinitiv": {
      "de": "wringen",
      "lv": "Izrezati / istisnuti"
    },
    "praesens": {
      "de": "er wringt",
      "lv": "Odseče on"
    },
    "imperfektIndikativ": {
      "de": "wrang",
      "lv": "Izrezati"
    },
    "imperfektKonjunktiv": {
      "de": "wrang",
      "lv": "Izrezati"
    },
    "partizipVergangenheit": {
      "de": "gewrungen",
      "lv": "Izrezati"
    }
  },
  {
    "infinitiv": {
      "de": "zeihen",
      "lv": "Kriviti"
    },
    "praesens": {
      "de": "er zeiht",
      "lv": "On krivi"
    },
    "imperfektIndikativ": {
      "de": "zieh",
      "lv": "Okrivio"
    },
    "imperfektKonjunktiv": {
      "de": "zieh",
      "lv": "Okrivio"
    },
    "partizipVergangenheit": {
      "de": "geziehen",
      "lv": "Okrivio"
    }
  },
  {
    "infinitiv": {
      "de": "ziehen",
      "lv": "Povući"
    },
    "praesens": {
      "de": "er zieht",
      "lv": "On vuče"
    },
    "imperfektIndikativ": {
      "de": "er zog",
      "lv": "Povukao je"
    },
    "imperfektKonjunktiv": {
      "de": "er zöge",
      "lv": "On bi vukao"
    },
    "partizipVergangenheit": {
      "de": "gezogen",
      "lv": "Vukao"
    }
  },
  {
    "infinitiv": {
      "de": "zwingen",
      "lv": "Na silu"
    },
    "praesens": {
      "de": "er zwingt",
      "lv": "On prisiljava"
    },
    "imperfektIndikativ": {
      "de": "er zwang",
      "lv": "Prisilio je"
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
      "lv": "Primio je"
    },
    "imperfektKonjunktiv": {
      "de": "er empfinge",
      "lv": "On bi primio"
    },
    "partizipVergangenheit": {
      "de": "empfangen",
      "lv": "Primljeno"
    }
  },
  {
    "infinitiv": {
      "de": "erwägen",
      "lv": "Razmotriti"
    },
    "praesens": {
      "de": "er erwägt",
      "lv": "On smatra"
    },
    "imperfektIndikativ": {
      "de": "er erwog",
      "lv": "Razmišljao je"
    },
    "imperfektKonjunktiv": {
      "de": "er erwöge",
      "lv": "On bi razmotrio"
    },
    "partizipVergangenheit": {
      "de": "erwogen",
      "lv": "Razmatrano"
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
      "lv": "Pletenica"
    },
    "praesens": {
      "de": "er flicht",
      "lv": "He pin"
    },
    "imperfektIndikativ": {
      "de": "er flocht",
      "lv": "On plete pletenice"
    },
    "imperfektKonjunktiv": {
      "de": "er flöchte",
      "lv": "On bi pletenicu"
    },
    "partizipVergangenheit": {
      "de": "geflochten",
      "lv": "Pletena"
    }
  },
  {
    "infinitiv": {
      "de": "hangen",
      "lv": "Objesiti"
    },
    "praesens": {
      "de": "er hängt",
      "lv": "On visi"
    },
    "imperfektIndikativ": {
      "de": "er hing",
      "lv": "Visio je"
    },
    "imperfektKonjunktiv": {
      "de": "er hinge",
      "lv": "Obesio bi se"
    },
    "partizipVergangenheit": {
      "de": "gehangen",
      "lv": "Sačekaj"
    }
  },
  {
    "infinitiv": {
      "de": "spalten",
      "lv": "Podijeliti"
    },
    "praesens": {
      "de": "er spaltet",
      "lv": "On se razdvaja"
    },
    "imperfektIndikativ": {
      "de": "er spaltete",
      "lv": "On se razdvojio"
    },
    "imperfektKonjunktiv": {
      "de": "er spaltete",
      "lv": "On bi se podelio"
    },
    "partizipVergangenheit": {
      "de": "gespalten",
      "lv": "Split"
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
      "lv": "Oprošteno"
    }
  }
];

window.VERB_ENTRIES = VERB_ENTRIES;

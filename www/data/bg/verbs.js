const VERB_ENTRIES = [
  {
    "infinitiv": {
      "de": "backen",
      "lv": "пека • изпека"
    },
    "praesens": {
      "de": "er bäckt",
      "lv": "той пече"
    },
    "imperfektIndikativ": {
      "de": "er buk",
      "lv": "той изпече"
    },
    "imperfektKonjunktiv": {
      "de": "er büke",
      "lv": "той би пекъл"
    },
    "partizipVergangenheit": {
      "de": "gebacken",
      "lv": "изпечен"
    }
  },
  {
    "infinitiv": {
      "de": "befehlen",
      "lv": "заповядвам • заповядам"
    },
    "praesens": {
      "de": "er befiehlt",
      "lv": "той заповядва"
    },
    "imperfektIndikativ": {
      "de": "er befahl",
      "lv": "той заповяда"
    },
    "imperfektKonjunktiv": {
      "de": "er beföhle",
      "lv": "той би заповядвал"
    },
    "partizipVergangenheit": {
      "de": "befohlen",
      "lv": "заповядан"
    }
  },
  {
    "infinitiv": {
      "de": "beginnen",
      "lv": "започвам • започна"
    },
    "praesens": {
      "de": "er beginnt",
      "lv": "той започва"
    },
    "imperfektIndikativ": {
      "de": "er begann",
      "lv": "той започна"
    },
    "imperfektKonjunktiv": {
      "de": "er begönne / er begänne",
      "lv": "той би започвал"
    },
    "partizipVergangenheit": {
      "de": "begonnen",
      "lv": "започнат"
    }
  },
  {
    "infinitiv": {
      "de": "beißen",
      "lv": "хапя • ухапя"
    },
    "praesens": {
      "de": "er beißt",
      "lv": "той хапе"
    },
    "imperfektIndikativ": {
      "de": "er biss",
      "lv": "той ухапа"
    },
    "imperfektKonjunktiv": {
      "de": "er bisse",
      "lv": "той би хапал"
    },
    "partizipVergangenheit": {
      "de": "gebissen",
      "lv": "ухапан"
    }
  },
  {
    "infinitiv": {
      "de": "bergen",
      "lv": "спасявам • спася / крия • скрия"
    },
    "praesens": {
      "de": "er birgt",
      "lv": "той спасява / крие"
    },
    "imperfektIndikativ": {
      "de": "er barg",
      "lv": "той спаси / скри"
    },
    "imperfektKonjunktiv": {
      "de": "er bürge / er bärge",
      "lv": "той би спасявал / крил"
    },
    "partizipVergangenheit": {
      "de": "geborgen",
      "lv": "спасен / скрит"
    }
  },
  {
    "infinitiv": {
      "de": "bersten",
      "lv": "пуквам се • пукна се"
    },
    "praesens": {
      "de": "er birst",
      "lv": "той се пуква"
    },
    "imperfektIndikativ": {
      "de": "er barst / er borst",
      "lv": "той се пукна"
    },
    "imperfektKonjunktiv": {
      "de": "er bärste / er börste",
      "lv": "той би се пуквал"
    },
    "partizipVergangenheit": {
      "de": "geborsten (er ist)",
      "lv": "пукнал се"
    }
  },
  {
    "infinitiv": {
      "de": "bewegen",
      "lv": "подтиквам • подтикна"
    },
    "praesens": {
      "de": "er bewegt",
      "lv": "той подтиква"
    },
    "imperfektIndikativ": {
      "de": "er bewog",
      "lv": "той подтикна"
    },
    "imperfektKonjunktiv": {
      "de": "er bewöge",
      "lv": "той би подтиквал"
    },
    "partizipVergangenheit": {
      "de": "bewogen",
      "lv": "подтикнат"
    }
  },
  {
    "infinitiv": {
      "de": "biegen",
      "lv": "огъвам • огъна"
    },
    "praesens": {
      "de": "er biegt",
      "lv": "той огъва"
    },
    "imperfektIndikativ": {
      "de": "er bog",
      "lv": "той огъна"
    },
    "imperfektKonjunktiv": {
      "de": "er böge",
      "lv": "той би огъвал"
    },
    "partizipVergangenheit": {
      "de": "gebogen",
      "lv": "огънат"
    }
  },
  {
    "infinitiv": {
      "de": "bieten",
      "lv": "предлагам • предложа"
    },
    "praesens": {
      "de": "er bietet",
      "lv": "той предлага"
    },
    "imperfektIndikativ": {
      "de": "er bot",
      "lv": "той предложи"
    },
    "imperfektKonjunktiv": {
      "de": "er böte",
      "lv": "той би предлагал"
    },
    "partizipVergangenheit": {
      "de": "geboten",
      "lv": "предложен"
    }
  },
  {
    "infinitiv": {
      "de": "binden",
      "lv": "връзвам • вържа"
    },
    "praesens": {
      "de": "er bindet",
      "lv": "той връзва"
    },
    "imperfektIndikativ": {
      "de": "er band",
      "lv": "той върза"
    },
    "imperfektKonjunktiv": {
      "de": "er bände",
      "lv": "той би връзвал"
    },
    "partizipVergangenheit": {
      "de": "gebunden",
      "lv": "вързан"
    }
  },
  {
    "infinitiv": {
      "de": "bitten",
      "lv": "моля • помоля"
    },
    "praesens": {
      "de": "er bittet",
      "lv": "той моли"
    },
    "imperfektIndikativ": {
      "de": "er bat",
      "lv": "той помоли"
    },
    "imperfektKonjunktiv": {
      "de": "er bäte",
      "lv": "той би молил"
    },
    "partizipVergangenheit": {
      "de": "gebeten",
      "lv": "помолен"
    }
  },
  {
    "infinitiv": {
      "de": "blasen",
      "lv": "духам"
    },
    "praesens": {
      "de": "er bläst",
      "lv": "той духа"
    },
    "imperfektIndikativ": {
      "de": "er blies",
      "lv": "той духаше"
    },
    "imperfektKonjunktiv": {
      "de": "er bliese",
      "lv": "той би духал"
    },
    "partizipVergangenheit": {
      "de": "geblasen",
      "lv": "духан"
    }
  },
  {
    "infinitiv": {
      "de": "gären",
      "lv": "ферментирам"
    },
    "praesens": {
      "de": "es gärt",
      "lv": "то ферментира"
    },
    "imperfektIndikativ": {
      "de": "es gor / es gärte",
      "lv": "то ферментираше"
    },
    "imperfektKonjunktiv": {
      "de": "es göre / es gärte",
      "lv": "то би ферментирало"
    },
    "partizipVergangenheit": {
      "de": "gegoren / gegärt",
      "lv": "ферментирал"
    }
  },
  {
    "infinitiv": {
      "de": "gebären",
      "lv": "раждам • родя"
    },
    "praesens": {
      "de": "sie gebiert",
      "lv": "тя ражда"
    },
    "imperfektIndikativ": {
      "de": "sie gebar",
      "lv": "тя роди"
    },
    "imperfektKonjunktiv": {
      "de": "sie gebäre",
      "lv": "тя би раждала"
    },
    "partizipVergangenheit": {
      "de": "geboren",
      "lv": "роден"
    }
  },
  {
    "infinitiv": {
      "de": "gelingen",
      "lv": "удавам се • удам се"
    },
    "praesens": {
      "de": "es gelingt",
      "lv": "то се удава"
    },
    "imperfektIndikativ": {
      "de": "es gelang",
      "lv": "то се удаде"
    },
    "imperfektKonjunktiv": {
      "de": "es gelänge",
      "lv": "то би се удавало"
    },
    "partizipVergangenheit": {
      "de": "gelungen (es ist)",
      "lv": "удал се"
    }
  },
  {
    "infinitiv": {
      "de": "gelten",
      "lv": "важа"
    },
    "praesens": {
      "de": "er gilt",
      "lv": "той важи"
    },
    "imperfektIndikativ": {
      "de": "er galt",
      "lv": "той важеше"
    },
    "imperfektKonjunktiv": {
      "de": "er gölte / es gälte",
      "lv": "той би важил"
    },
    "partizipVergangenheit": {
      "de": "gegolten",
      "lv": "важил"
    }
  },
  {
    "infinitiv": {
      "de": "genesen",
      "lv": "оздравявам • оздравея"
    },
    "praesens": {
      "de": "er genest",
      "lv": "той оздравява"
    },
    "imperfektIndikativ": {
      "de": "er genas",
      "lv": "той оздравя"
    },
    "imperfektKonjunktiv": {
      "de": "er genäse",
      "lv": "той би оздравявал"
    },
    "partizipVergangenheit": {
      "de": "genesen (er ist)",
      "lv": "оздравял"
    }
  },
  {
    "infinitiv": {
      "de": "genießen",
      "lv": "наслаждавам се • насладя се"
    },
    "praesens": {
      "de": "er genießt",
      "lv": "той се наслаждава"
    },
    "imperfektIndikativ": {
      "de": "er genoss",
      "lv": "той се наслади"
    },
    "imperfektKonjunktiv": {
      "de": "er genösse",
      "lv": "той би се наслаждавал"
    },
    "partizipVergangenheit": {
      "de": "genossen",
      "lv": "насладил се"
    }
  },
  {
    "infinitiv": {
      "de": "geschehen",
      "lv": "случвам се • случа се"
    },
    "praesens": {
      "de": "es geschieht",
      "lv": "то се случва"
    },
    "imperfektIndikativ": {
      "de": "es geschah",
      "lv": "то се случи"
    },
    "imperfektKonjunktiv": {
      "de": "es geschähe",
      "lv": "то би се случвало"
    },
    "partizipVergangenheit": {
      "de": "geschehen (es ist)",
      "lv": "случил се"
    }
  },
  {
    "infinitiv": {
      "de": "gießen",
      "lv": "наливам • налея"
    },
    "praesens": {
      "de": "er gießt",
      "lv": "той налива"
    },
    "imperfektIndikativ": {
      "de": "er goss",
      "lv": "той наля"
    },
    "imperfektKonjunktiv": {
      "de": "er gösse",
      "lv": "той би наливал"
    },
    "partizipVergangenheit": {
      "de": "gegossen",
      "lv": "налят"
    }
  },
  {
    "infinitiv": {
      "de": "gleichen",
      "lv": "приличам"
    },
    "praesens": {
      "de": "er gleicht",
      "lv": "той прилича"
    },
    "imperfektIndikativ": {
      "de": "er glich",
      "lv": "той приличаше"
    },
    "imperfektKonjunktiv": {
      "de": "er gliche",
      "lv": "той би приличал"
    },
    "partizipVergangenheit": {
      "de": "geglichen",
      "lv": "приличал"
    }
  },
  {
    "infinitiv": {
      "de": "gleiten",
      "lv": "плъзгам се"
    },
    "praesens": {
      "de": "er gleitet",
      "lv": "той се плъзга"
    },
    "imperfektIndikativ": {
      "de": "er glitt",
      "lv": "той се плъзгаше"
    },
    "imperfektKonjunktiv": {
      "de": "er glitte",
      "lv": "той би се плъзгал"
    },
    "partizipVergangenheit": {
      "de": "geglitten (er ist)",
      "lv": "плъзгал се"
    }
  },
  {
    "infinitiv": {
      "de": "glimmen",
      "lv": "тлея"
    },
    "praesens": {
      "de": "er glimmt",
      "lv": "той тлее"
    },
    "imperfektIndikativ": {
      "de": "er glimmte / glomm",
      "lv": "той тлееше"
    },
    "imperfektKonjunktiv": {
      "de": "er glimmte",
      "lv": "той би тлял"
    },
    "partizipVergangenheit": {
      "de": "geglimmt / geglommen",
      "lv": "тлял"
    }
  },
  {
    "infinitiv": {
      "de": "graben",
      "lv": "копая • изкопая"
    },
    "praesens": {
      "de": "er gräbt",
      "lv": "той копае"
    },
    "imperfektIndikativ": {
      "de": "er grub",
      "lv": "той изкопа"
    },
    "imperfektKonjunktiv": {
      "de": "er grübe",
      "lv": "той би копал"
    },
    "partizipVergangenheit": {
      "de": "gegraben",
      "lv": "изкопан"
    }
  },
  {
    "infinitiv": {
      "de": "greifen",
      "lv": "хващам • хвана"
    },
    "praesens": {
      "de": "er greift",
      "lv": "той хваща"
    },
    "imperfektIndikativ": {
      "de": "er griff",
      "lv": "той хвана"
    },
    "imperfektKonjunktiv": {
      "de": "er griffe",
      "lv": "той би хващал"
    },
    "partizipVergangenheit": {
      "de": "gegriffen",
      "lv": "хванат"
    }
  },
  {
    "infinitiv": {
      "de": "hauen",
      "lv": "сека • отсека"
    },
    "praesens": {
      "de": "er haut",
      "lv": "той сече"
    },
    "imperfektIndikativ": {
      "de": "er hieb",
      "lv": "той отсече"
    },
    "imperfektKonjunktiv": {
      "de": "er hiebe",
      "lv": "той би сякъл"
    },
    "partizipVergangenheit": {
      "de": "gehauen",
      "lv": "отсечен"
    }
  },
  {
    "infinitiv": {
      "de": "heben",
      "lv": "вдигам • вдигна"
    },
    "praesens": {
      "de": "er hebt",
      "lv": "той вдига"
    },
    "imperfektIndikativ": {
      "de": "er hob",
      "lv": "той вдигна"
    },
    "imperfektKonjunktiv": {
      "de": "er höbe",
      "lv": "той би вдигал"
    },
    "partizipVergangenheit": {
      "de": "gehoben",
      "lv": "вдигнат"
    }
  },
  {
    "infinitiv": {
      "de": "kennen",
      "lv": "познавам"
    },
    "praesens": {
      "de": "er kennt",
      "lv": "той познава"
    },
    "imperfektIndikativ": {
      "de": "er kannte",
      "lv": "той познаваше"
    },
    "imperfektKonjunktiv": {
      "de": "er kennte",
      "lv": "той би познавал"
    },
    "partizipVergangenheit": {
      "de": "gekannt",
      "lv": "познавал"
    }
  },
  {
    "infinitiv": {
      "de": "klingen",
      "lv": "звуча"
    },
    "praesens": {
      "de": "er klingt",
      "lv": "той звучи"
    },
    "imperfektIndikativ": {
      "de": "er klang",
      "lv": "той звучеше"
    },
    "imperfektKonjunktiv": {
      "de": "er klänge",
      "lv": "той би звучал"
    },
    "partizipVergangenheit": {
      "de": "geklungen",
      "lv": "звучал"
    }
  },
  {
    "infinitiv": {
      "de": "kneifen",
      "lv": "щипя • ощипя"
    },
    "praesens": {
      "de": "er kneift",
      "lv": "той щипе"
    },
    "imperfektIndikativ": {
      "de": "er kniff",
      "lv": "той ощипа"
    },
    "imperfektKonjunktiv": {
      "de": "er kniffe",
      "lv": "той би щипал"
    },
    "partizipVergangenheit": {
      "de": "gekniffen",
      "lv": "ощипан"
    }
  },
  {
    "infinitiv": {
      "de": "bleiben",
      "lv": "оставам • остана"
    },
    "praesens": {
      "de": "er bleibt",
      "lv": "той остава"
    },
    "imperfektIndikativ": {
      "de": "er blieb",
      "lv": "той остана"
    },
    "imperfektKonjunktiv": {
      "de": "er bliebe",
      "lv": "той би оставал"
    },
    "partizipVergangenheit": {
      "de": "geblieben (er ist)",
      "lv": "останал"
    }
  },
  {
    "infinitiv": {
      "de": "bleichen",
      "lv": "избелявам • избелея"
    },
    "praesens": {
      "de": "er bleicht",
      "lv": "той избелява"
    },
    "imperfektIndikativ": {
      "de": "er bleichte / er blich",
      "lv": "той избеля"
    },
    "imperfektKonjunktiv": {
      "de": "er bleichte / er bliche",
      "lv": "той би избелявал"
    },
    "partizipVergangenheit": {
      "de": "geblichen",
      "lv": "избелял"
    }
  },
  {
    "infinitiv": {
      "de": "braten",
      "lv": "пържа • изпържа"
    },
    "praesens": {
      "de": "er brät",
      "lv": "той пържи"
    },
    "imperfektIndikativ": {
      "de": "er briet",
      "lv": "той изпържи"
    },
    "imperfektKonjunktiv": {
      "de": "er briete",
      "lv": "той би пържил"
    },
    "partizipVergangenheit": {
      "de": "gebraten",
      "lv": "изпържен"
    }
  },
  {
    "infinitiv": {
      "de": "brechen",
      "lv": "чупя • счупя"
    },
    "praesens": {
      "de": "er bricht",
      "lv": "той чупи"
    },
    "imperfektIndikativ": {
      "de": "er brach",
      "lv": "той счупи"
    },
    "imperfektKonjunktiv": {
      "de": "er bräche",
      "lv": "той би чупил"
    },
    "partizipVergangenheit": {
      "de": "gebrochen",
      "lv": "счупен"
    }
  },
  {
    "infinitiv": {
      "de": "brennen",
      "lv": "горя"
    },
    "praesens": {
      "de": "er brennt",
      "lv": "той гори"
    },
    "imperfektIndikativ": {
      "de": "er brannte",
      "lv": "той гореше"
    },
    "imperfektKonjunktiv": {
      "de": "er brennte",
      "lv": "той би горял"
    },
    "partizipVergangenheit": {
      "de": "gebrannt",
      "lv": "горял"
    }
  },
  {
    "infinitiv": {
      "de": "bringen",
      "lv": "донасям • донеса"
    },
    "praesens": {
      "de": "er bringt",
      "lv": "той донася"
    },
    "imperfektIndikativ": {
      "de": "er brachte",
      "lv": "той донесе"
    },
    "imperfektKonjunktiv": {
      "de": "er brächte",
      "lv": "той би донасял"
    },
    "partizipVergangenheit": {
      "de": "gebracht",
      "lv": "донесен"
    }
  },
  {
    "infinitiv": {
      "de": "denken",
      "lv": "мисля"
    },
    "praesens": {
      "de": "er denkt",
      "lv": "той мисли"
    },
    "imperfektIndikativ": {
      "de": "er dachte",
      "lv": "той мислеше"
    },
    "imperfektKonjunktiv": {
      "de": "er dächte",
      "lv": "той би мислил"
    },
    "partizipVergangenheit": {
      "de": "gedacht",
      "lv": "мислил"
    }
  },
  {
    "infinitiv": {
      "de": "dingen",
      "lv": "наемам • наема / договарям се • договоря се"
    },
    "praesens": {
      "de": "er dingt",
      "lv": "той наема / договаря се"
    },
    "imperfektIndikativ": {
      "de": "er dingte",
      "lv": "той нае / договори се"
    },
    "imperfektKonjunktiv": {
      "de": "er dingte",
      "lv": "той би наемал / би се договарял"
    },
    "partizipVergangenheit": {
      "de": "gedungen",
      "lv": "нает / договорил се"
    }
  },
  {
    "infinitiv": {
      "de": "dreschen",
      "lv": "вършея • овършея"
    },
    "praesens": {
      "de": "er drischt",
      "lv": "той вършее"
    },
    "imperfektIndikativ": {
      "de": "er drasch / er drosch",
      "lv": "той овърша"
    },
    "imperfektKonjunktiv": {
      "de": "er dräsche / er drösche",
      "lv": "той би вършал"
    },
    "partizipVergangenheit": {
      "de": "gedroschen",
      "lv": "овършан"
    }
  },
  {
    "infinitiv": {
      "de": "dringen",
      "lv": "прониквам • проникна"
    },
    "praesens": {
      "de": "er dringt",
      "lv": "той прониква"
    },
    "imperfektIndikativ": {
      "de": "er drang",
      "lv": "той проникна"
    },
    "imperfektKonjunktiv": {
      "de": "er dränge",
      "lv": "той би прониквал"
    },
    "partizipVergangenheit": {
      "de": "gedrungen (er ist)",
      "lv": "проникнал"
    }
  },
  {
    "infinitiv": {
      "de": "dünken",
      "lv": "изглеждам"
    },
    "praesens": {
      "de": "es dünkt",
      "lv": "то изглежда"
    },
    "imperfektIndikativ": {
      "de": "es dünkte / es deuchte",
      "lv": "то изглеждаше"
    },
    "imperfektKonjunktiv": {
      "de": "es dünkte / es deuchte",
      "lv": "то би изглеждало"
    },
    "partizipVergangenheit": {
      "de": "gedünkt",
      "lv": "изглеждал"
    }
  },
  {
    "infinitiv": {
      "de": "dürfen",
      "lv": "имам право"
    },
    "praesens": {
      "de": "er darf",
      "lv": "той има право"
    },
    "imperfektIndikativ": {
      "de": "er durfte",
      "lv": "той имаше право"
    },
    "imperfektKonjunktiv": {
      "de": "er dürfte",
      "lv": "той би имал право"
    },
    "partizipVergangenheit": {
      "de": "gedurft",
      "lv": "имал право"
    }
  },
  {
    "infinitiv": {
      "de": "empfehlen",
      "lv": "препоръчвам • препоръчам"
    },
    "praesens": {
      "de": "er empfiehlt",
      "lv": "той препоръчва"
    },
    "imperfektIndikativ": {
      "de": "er empfahl",
      "lv": "той препоръча"
    },
    "imperfektKonjunktiv": {
      "de": "er empfähle / er empföhle",
      "lv": "той би препоръчвал"
    },
    "partizipVergangenheit": {
      "de": "empfohlen",
      "lv": "препоръчан"
    }
  },
  {
    "infinitiv": {
      "de": "empfinden",
      "lv": "усещам • усетя"
    },
    "praesens": {
      "de": "er empfindet",
      "lv": "той усеща"
    },
    "imperfektIndikativ": {
      "de": "er empfand",
      "lv": "той усети"
    },
    "imperfektKonjunktiv": {
      "de": "er empfände",
      "lv": "той би усещал"
    },
    "partizipVergangenheit": {
      "de": "empfunden",
      "lv": "усетен"
    }
  },
  {
    "infinitiv": {
      "de": "erlöschen",
      "lv": "угасвам • угасна"
    },
    "praesens": {
      "de": "er erlischt",
      "lv": "той угасва"
    },
    "imperfektIndikativ": {
      "de": "er erlosch",
      "lv": "той угасна"
    },
    "imperfektKonjunktiv": {
      "de": "er erlösche",
      "lv": "той би угасвал"
    },
    "partizipVergangenheit": {
      "de": "erloschen (er ist)",
      "lv": "угаснал"
    }
  },
  {
    "infinitiv": {
      "de": "erschrecken",
      "lv": "уплашвам се • уплаша се"
    },
    "praesens": {
      "de": "er erschrickt",
      "lv": "той се уплашва"
    },
    "imperfektIndikativ": {
      "de": "er erschrak",
      "lv": "той се уплаши"
    },
    "imperfektKonjunktiv": {
      "de": "er erschräke",
      "lv": "той би се уплашвал"
    },
    "partizipVergangenheit": {
      "de": "erschrocken (er ist)",
      "lv": "уплашил се"
    }
  },
  {
    "infinitiv": {
      "de": "essen",
      "lv": "ям • изям"
    },
    "praesens": {
      "de": "er isst",
      "lv": "той яде"
    },
    "imperfektIndikativ": {
      "de": "er aß",
      "lv": "той изяде"
    },
    "imperfektKonjunktiv": {
      "de": "er äße",
      "lv": "той би ял"
    },
    "partizipVergangenheit": {
      "de": "gegessen",
      "lv": "изяден"
    }
  },
  {
    "infinitiv": {
      "de": "fahren",
      "lv": "пътувам"
    },
    "praesens": {
      "de": "er fährt",
      "lv": "той пътува"
    },
    "imperfektIndikativ": {
      "de": "er fuhr",
      "lv": "той пътуваше"
    },
    "imperfektKonjunktiv": {
      "de": "er führe",
      "lv": "той би пътувал"
    },
    "partizipVergangenheit": {
      "de": "gefahren (er ist)",
      "lv": "пътувал"
    }
  },
  {
    "infinitiv": {
      "de": "fallen",
      "lv": "падам • падна"
    },
    "praesens": {
      "de": "er fällt",
      "lv": "той пада"
    },
    "imperfektIndikativ": {
      "de": "er fiel",
      "lv": "той падна"
    },
    "imperfektKonjunktiv": {
      "de": "er fiele",
      "lv": "той би падал"
    },
    "partizipVergangenheit": {
      "de": "gefallen (er ist)",
      "lv": "паднал"
    }
  },
  {
    "infinitiv": {
      "de": "fangen",
      "lv": "улавям • уловя"
    },
    "praesens": {
      "de": "er fängt",
      "lv": "той улавя"
    },
    "imperfektIndikativ": {
      "de": "er fing",
      "lv": "той улови"
    },
    "imperfektKonjunktiv": {
      "de": "er finge",
      "lv": "той би улавял"
    },
    "partizipVergangenheit": {
      "de": "gefangen",
      "lv": "уловен"
    }
  },
  {
    "infinitiv": {
      "de": "finden",
      "lv": "намирам • намеря"
    },
    "praesens": {
      "de": "er findet",
      "lv": "той намира"
    },
    "imperfektIndikativ": {
      "de": "er fand",
      "lv": "той намери"
    },
    "imperfektKonjunktiv": {
      "de": "er fände",
      "lv": "той би намирал"
    },
    "partizipVergangenheit": {
      "de": "gefunden",
      "lv": "намерен"
    }
  },
  {
    "infinitiv": {
      "de": "fliegen",
      "lv": "летя"
    },
    "praesens": {
      "de": "er fliegt",
      "lv": "той лети"
    },
    "imperfektIndikativ": {
      "de": "er flog",
      "lv": "той летеше"
    },
    "imperfektKonjunktiv": {
      "de": "er flöge",
      "lv": "той би летял"
    },
    "partizipVergangenheit": {
      "de": "geflogen (er ist)",
      "lv": "летял"
    }
  },
  {
    "infinitiv": {
      "de": "fliehen",
      "lv": "избягвам • избягам"
    },
    "praesens": {
      "de": "er flieht",
      "lv": "той избягва"
    },
    "imperfektIndikativ": {
      "de": "er floh",
      "lv": "той избяга"
    },
    "imperfektKonjunktiv": {
      "de": "er flöhe",
      "lv": "той би избягвал"
    },
    "partizipVergangenheit": {
      "de": "geflohen (er ist)",
      "lv": "избягал"
    }
  },
  {
    "infinitiv": {
      "de": "fließen",
      "lv": "тека"
    },
    "praesens": {
      "de": "er fließt",
      "lv": "той тече"
    },
    "imperfektIndikativ": {
      "de": "er floss",
      "lv": "той течеше"
    },
    "imperfektKonjunktiv": {
      "de": "er flösse",
      "lv": "той би текъл"
    },
    "partizipVergangenheit": {
      "de": "geflossen (er ist)",
      "lv": "текъл"
    }
  },
  {
    "infinitiv": {
      "de": "fressen",
      "lv": "ям • изям / поглъщам • погълна"
    },
    "praesens": {
      "de": "er frisst",
      "lv": "той яде / поглъща"
    },
    "imperfektIndikativ": {
      "de": "er fraß",
      "lv": "той изяде / погълна"
    },
    "imperfektKonjunktiv": {
      "de": "er fräße",
      "lv": "той би ял / поглъщал"
    },
    "partizipVergangenheit": {
      "de": "gefressen",
      "lv": "изяден / погълнат"
    }
  },
  {
    "infinitiv": {
      "de": "frieren",
      "lv": "мръзна"
    },
    "praesens": {
      "de": "er friert",
      "lv": "той мръзне"
    },
    "imperfektIndikativ": {
      "de": "er fror",
      "lv": "той мръзнеше"
    },
    "imperfektKonjunktiv": {
      "de": "er fröre",
      "lv": "той би мръзнал"
    },
    "partizipVergangenheit": {
      "de": "gefroren",
      "lv": "мръзнал"
    }
  },
  {
    "infinitiv": {
      "de": "geben",
      "lv": "давам • дам"
    },
    "praesens": {
      "de": "er gibt",
      "lv": "той дава"
    },
    "imperfektIndikativ": {
      "de": "er gab",
      "lv": "той даде"
    },
    "imperfektKonjunktiv": {
      "de": "er gäbe",
      "lv": "той би давал"
    },
    "partizipVergangenheit": {
      "de": "gegeben",
      "lv": "даден"
    }
  },
  {
    "infinitiv": {
      "de": "gedeihen",
      "lv": "вирея"
    },
    "praesens": {
      "de": "er gedeiht",
      "lv": "той вирее"
    },
    "imperfektIndikativ": {
      "de": "er gedieh",
      "lv": "той вирееше"
    },
    "imperfektKonjunktiv": {
      "de": "er gediehe",
      "lv": "той би вирял"
    },
    "partizipVergangenheit": {
      "de": "gediehen (er ist)",
      "lv": "вирял"
    }
  },
  {
    "infinitiv": {
      "de": "gehen",
      "lv": "отивам • отида"
    },
    "praesens": {
      "de": "er geht",
      "lv": "той отива"
    },
    "imperfektIndikativ": {
      "de": "er ging",
      "lv": "той отиде"
    },
    "imperfektKonjunktiv": {
      "de": "er ginge",
      "lv": "той би отивал"
    },
    "partizipVergangenheit": {
      "de": "gegangen (er ist)",
      "lv": "отишъл"
    }
  },
  {
    "infinitiv": {
      "de": "gewinnen",
      "lv": "печеля • спечеля"
    },
    "praesens": {
      "de": "er gewinnt",
      "lv": "той печели"
    },
    "imperfektIndikativ": {
      "de": "er gewann",
      "lv": "той спечели"
    },
    "imperfektKonjunktiv": {
      "de": "er gewönne / er gewänne",
      "lv": "той би печелил"
    },
    "partizipVergangenheit": {
      "de": "gewonnen",
      "lv": "спечелен"
    }
  },
  {
    "infinitiv": {
      "de": "haben",
      "lv": "имам"
    },
    "praesens": {
      "de": "er hat",
      "lv": "той има"
    },
    "imperfektIndikativ": {
      "de": "er hatte",
      "lv": "той имаше"
    },
    "imperfektKonjunktiv": {
      "de": "er hätte",
      "lv": "той би имал"
    },
    "partizipVergangenheit": {
      "de": "gehabt",
      "lv": "имал"
    }
  },
  {
    "infinitiv": {
      "de": "halten",
      "lv": "държа"
    },
    "praesens": {
      "de": "er hält",
      "lv": "той държи"
    },
    "imperfektIndikativ": {
      "de": "er hielt",
      "lv": "той държеше"
    },
    "imperfektKonjunktiv": {
      "de": "er hielte",
      "lv": "той би държал"
    },
    "partizipVergangenheit": {
      "de": "gehalten",
      "lv": "държан"
    }
  },
  {
    "infinitiv": {
      "de": "heißen",
      "lv": "наричам • нарека / казвам се"
    },
    "praesens": {
      "de": "er heißt",
      "lv": "той нарича / казва се"
    },
    "imperfektIndikativ": {
      "de": "er hieß",
      "lv": "той нарече / казваше се"
    },
    "imperfektKonjunktiv": {
      "de": "er hieße",
      "lv": "той би наричал / би се казвал"
    },
    "partizipVergangenheit": {
      "de": "geheißen",
      "lv": "наречен / казвал се"
    }
  },
  {
    "infinitiv": {
      "de": "helfen",
      "lv": "помагам • помогна"
    },
    "praesens": {
      "de": "er hilft",
      "lv": "той помага"
    },
    "imperfektIndikativ": {
      "de": "er half",
      "lv": "той помогна"
    },
    "imperfektKonjunktiv": {
      "de": "er hülfe / er hälfe",
      "lv": "той би помагал"
    },
    "partizipVergangenheit": {
      "de": "geholfen",
      "lv": "помогнал"
    }
  },
  {
    "infinitiv": {
      "de": "kommen",
      "lv": "идвам • дойда"
    },
    "praesens": {
      "de": "er kommt",
      "lv": "той идва"
    },
    "imperfektIndikativ": {
      "de": "er kam",
      "lv": "той дойде"
    },
    "imperfektKonjunktiv": {
      "de": "er käme",
      "lv": "той би идвал"
    },
    "partizipVergangenheit": {
      "de": "gekommen (er ist)",
      "lv": "дошъл"
    }
  },
  {
    "infinitiv": {
      "de": "können",
      "lv": "мога"
    },
    "praesens": {
      "de": "er kann",
      "lv": "той може"
    },
    "imperfektIndikativ": {
      "de": "er konnte",
      "lv": "той можеше"
    },
    "imperfektKonjunktiv": {
      "de": "er könnte",
      "lv": "той би могъл"
    },
    "partizipVergangenheit": {
      "de": "gekonnt",
      "lv": "могъл"
    }
  },
  {
    "infinitiv": {
      "de": "kriechen",
      "lv": "пълзя"
    },
    "praesens": {
      "de": "er kriecht",
      "lv": "той пълзи"
    },
    "imperfektIndikativ": {
      "de": "er kroch",
      "lv": "той пълзеше"
    },
    "imperfektKonjunktiv": {
      "de": "er kröche",
      "lv": "той би пълзял"
    },
    "partizipVergangenheit": {
      "de": "gekrochen (er ist)",
      "lv": "пълзял"
    }
  },
  {
    "infinitiv": {
      "de": "laden",
      "lv": "товаря • натоваря / каня • поканя"
    },
    "praesens": {
      "de": "er lädt",
      "lv": "той товари / кани"
    },
    "imperfektIndikativ": {
      "de": "er lud",
      "lv": "той натовари / покани"
    },
    "imperfektKonjunktiv": {
      "de": "er lüde",
      "lv": "той би товарил / канил"
    },
    "partizipVergangenheit": {
      "de": "geladen",
      "lv": "натоварен / поканен"
    }
  },
  {
    "infinitiv": {
      "de": "lassen",
      "lv": "карам • накарам / позволявам • позволя"
    },
    "praesens": {
      "de": "er lässt",
      "lv": "той кара / позволява"
    },
    "imperfektIndikativ": {
      "de": "er ließ",
      "lv": "той накара / позволи"
    },
    "imperfektKonjunktiv": {
      "de": "er ließe",
      "lv": "той би карал / позволявал"
    },
    "partizipVergangenheit": {
      "de": "gelassen",
      "lv": "накаран / позволен"
    }
  },
  {
    "infinitiv": {
      "de": "laufen",
      "lv": "тичам"
    },
    "praesens": {
      "de": "er läuft",
      "lv": "той тича"
    },
    "imperfektIndikativ": {
      "de": "er lief",
      "lv": "той тичаше"
    },
    "imperfektKonjunktiv": {
      "de": "er liefe",
      "lv": "той би тичал"
    },
    "partizipVergangenheit": {
      "de": "gelaufen (er ist)",
      "lv": "тичал"
    }
  },
  {
    "infinitiv": {
      "de": "leiden",
      "lv": "страдам"
    },
    "praesens": {
      "de": "er leidet",
      "lv": "той страда"
    },
    "imperfektIndikativ": {
      "de": "er litt",
      "lv": "той страдаше"
    },
    "imperfektKonjunktiv": {
      "de": "er litte",
      "lv": "той би страдал"
    },
    "partizipVergangenheit": {
      "de": "gelitten",
      "lv": "страдал"
    }
  },
  {
    "infinitiv": {
      "de": "leihen",
      "lv": "давам назаем • дам назаем / вземам назаем • взема назаем"
    },
    "praesens": {
      "de": "er leiht",
      "lv": "той дава назаем / взема назаем"
    },
    "imperfektIndikativ": {
      "de": "er lieh",
      "lv": "той даде назаем / взе назаем"
    },
    "imperfektKonjunktiv": {
      "de": "er liehe",
      "lv": "той би давал назаем / вземал назаем"
    },
    "partizipVergangenheit": {
      "de": "geliehen",
      "lv": "даден назаем / взет назаем"
    }
  },
  {
    "infinitiv": {
      "de": "lesen",
      "lv": "чета • прочета"
    },
    "praesens": {
      "de": "er liest",
      "lv": "той чете"
    },
    "imperfektIndikativ": {
      "de": "er las",
      "lv": "той прочете"
    },
    "imperfektKonjunktiv": {
      "de": "er läse",
      "lv": "той би чел"
    },
    "partizipVergangenheit": {
      "de": "gelesen",
      "lv": "прочетен"
    }
  },
  {
    "infinitiv": {
      "de": "liegen",
      "lv": "лежа"
    },
    "praesens": {
      "de": "er liegt",
      "lv": "той лежи"
    },
    "imperfektIndikativ": {
      "de": "er lag",
      "lv": "той лежеше"
    },
    "imperfektKonjunktiv": {
      "de": "er läge",
      "lv": "той би лежал"
    },
    "partizipVergangenheit": {
      "de": "gelegen",
      "lv": "лежал"
    }
  },
  {
    "infinitiv": {
      "de": "lügen",
      "lv": "лъжа • излъжа"
    },
    "praesens": {
      "de": "er lügt",
      "lv": "той лъже"
    },
    "imperfektIndikativ": {
      "de": "er log",
      "lv": "той излъга"
    },
    "imperfektKonjunktiv": {
      "de": "er löge",
      "lv": "той би лъгал"
    },
    "partizipVergangenheit": {
      "de": "gelogen",
      "lv": "излъгал"
    }
  },
  {
    "infinitiv": {
      "de": "mahlen",
      "lv": "меля • смеля"
    },
    "praesens": {
      "de": "er mahlt",
      "lv": "той мели"
    },
    "imperfektIndikativ": {
      "de": "er mahlte",
      "lv": "той смля"
    },
    "imperfektKonjunktiv": {
      "de": "er malte",
      "lv": "той би млял"
    },
    "partizipVergangenheit": {
      "de": "gemahlen",
      "lv": "смлян"
    }
  },
  {
    "infinitiv": {
      "de": "meiden",
      "lv": "отбягвам • отбягна"
    },
    "praesens": {
      "de": "er meidet",
      "lv": "той отбягва"
    },
    "imperfektIndikativ": {
      "de": "er mied",
      "lv": "той отбягна"
    },
    "imperfektKonjunktiv": {
      "de": "er miede",
      "lv": "той би отбягвал"
    },
    "partizipVergangenheit": {
      "de": "gemieden",
      "lv": "отбягнат"
    }
  },
  {
    "infinitiv": {
      "de": "melken",
      "lv": "доя • издоя"
    },
    "praesens": {
      "de": "er milkt / er melkt",
      "lv": "той дои"
    },
    "imperfektIndikativ": {
      "de": "er molk / er melkte",
      "lv": "той издои"
    },
    "imperfektKonjunktiv": {
      "de": "er mölke / er melkte",
      "lv": "той би доил"
    },
    "partizipVergangenheit": {
      "de": "gemolken / gemelkt",
      "lv": "издоен"
    }
  },
  {
    "infinitiv": {
      "de": "messen",
      "lv": "меря • измеря"
    },
    "praesens": {
      "de": "er misst",
      "lv": "той мери"
    },
    "imperfektIndikativ": {
      "de": "er maß",
      "lv": "той измери"
    },
    "imperfektKonjunktiv": {
      "de": "er mäße",
      "lv": "той би мерил"
    },
    "partizipVergangenheit": {
      "de": "gemessen",
      "lv": "измерен"
    }
  },
  {
    "infinitiv": {
      "de": "misslingen",
      "lv": "провалям се • проваля се"
    },
    "praesens": {
      "de": "es misslingt",
      "lv": "то се проваля"
    },
    "imperfektIndikativ": {
      "de": "es misslang",
      "lv": "то се провали"
    },
    "imperfektKonjunktiv": {
      "de": "es misslänge",
      "lv": "то би се проваляло"
    },
    "partizipVergangenheit": {
      "de": "misslungen",
      "lv": "провалил се"
    }
  },
  {
    "infinitiv": {
      "de": "mögen",
      "lv": "харесвам • харесам"
    },
    "praesens": {
      "de": "er mag",
      "lv": "той харесва"
    },
    "imperfektIndikativ": {
      "de": "er mochte",
      "lv": "той хареса"
    },
    "imperfektKonjunktiv": {
      "de": "er möchte",
      "lv": "той би харесвал"
    },
    "partizipVergangenheit": {
      "de": "gemocht",
      "lv": "харесан"
    }
  },
  {
    "infinitiv": {
      "de": "müssen",
      "lv": "трябва"
    },
    "praesens": {
      "de": "er muss",
      "lv": "той трябва"
    },
    "imperfektIndikativ": {
      "de": "er musste",
      "lv": "той трябваше"
    },
    "imperfektKonjunktiv": {
      "de": "er müsste",
      "lv": "той би трябвало"
    },
    "partizipVergangenheit": {
      "de": "gemusst",
      "lv": "трябвало"
    }
  },
  {
    "infinitiv": {
      "de": "nehmen",
      "lv": "вземам • взема"
    },
    "praesens": {
      "de": "er nimmt",
      "lv": "той взема"
    },
    "imperfektIndikativ": {
      "de": "er nahm",
      "lv": "той взе"
    },
    "imperfektKonjunktiv": {
      "de": "er nähme",
      "lv": "той би вземал"
    },
    "partizipVergangenheit": {
      "de": "genommen",
      "lv": "взет"
    }
  },
  {
    "infinitiv": {
      "de": "nennen",
      "lv": "наричам • нарека"
    },
    "praesens": {
      "de": "er nennt",
      "lv": "той нарича"
    },
    "imperfektIndikativ": {
      "de": "er nannte",
      "lv": "той нарече"
    },
    "imperfektKonjunktiv": {
      "de": "er nennte",
      "lv": "той би наричал"
    },
    "partizipVergangenheit": {
      "de": "genannt",
      "lv": "наречен"
    }
  },
  {
    "infinitiv": {
      "de": "pfeifen",
      "lv": "свиря • изсвиря"
    },
    "praesens": {
      "de": "er pfeift",
      "lv": "той свири"
    },
    "imperfektIndikativ": {
      "de": "er pfiff",
      "lv": "той изсвири"
    },
    "imperfektKonjunktiv": {
      "de": "er pfiffe",
      "lv": "той би свирил"
    },
    "partizipVergangenheit": {
      "de": "gepfiffen",
      "lv": "изсвирил"
    }
  },
  {
    "infinitiv": {
      "de": "pflegen",
      "lv": "грижа се"
    },
    "praesens": {
      "de": "er pflegt",
      "lv": "той се грижи"
    },
    "imperfektIndikativ": {
      "de": "er pflegte / er pflog",
      "lv": "той се грижеше"
    },
    "imperfektKonjunktiv": {
      "de": "er pflegte / er pflöge",
      "lv": "той би се грижил"
    },
    "partizipVergangenheit": {
      "de": "gepflegt / gepflogen",
      "lv": "грижил се"
    }
  },
  {
    "infinitiv": {
      "de": "preisen",
      "lv": "хваля • похваля"
    },
    "praesens": {
      "de": "er preist",
      "lv": "той хвали"
    },
    "imperfektIndikativ": {
      "de": "er pries",
      "lv": "той похвали"
    },
    "imperfektKonjunktiv": {
      "de": "er priese",
      "lv": "той би хвалил"
    },
    "partizipVergangenheit": {
      "de": "gepriesen",
      "lv": "похвален"
    }
  },
  {
    "infinitiv": {
      "de": "quellen",
      "lv": "набъбвам • набъбна"
    },
    "praesens": {
      "de": "er quillt",
      "lv": "той набъбва"
    },
    "imperfektIndikativ": {
      "de": "er quoll",
      "lv": "той набъбна"
    },
    "imperfektKonjunktiv": {
      "de": "er quölle",
      "lv": "той би набъбвал"
    },
    "partizipVergangenheit": {
      "de": "gequollen (er ist)",
      "lv": "набъбнал"
    }
  },
  {
    "infinitiv": {
      "de": "raten",
      "lv": "съветвам • посъветвам / отгатвам • отгатна"
    },
    "praesens": {
      "de": "er rät",
      "lv": "той съветва / отгатва"
    },
    "imperfektIndikativ": {
      "de": "er riet",
      "lv": "той посъветва / отгатна"
    },
    "imperfektKonjunktiv": {
      "de": "er riete",
      "lv": "той би съветвал / отгатвал"
    },
    "partizipVergangenheit": {
      "de": "geraten",
      "lv": "посъветван / отгатнат"
    }
  },
  {
    "infinitiv": {
      "de": "reiben",
      "lv": "търкам"
    },
    "praesens": {
      "de": "er reibt",
      "lv": "той търка"
    },
    "imperfektIndikativ": {
      "de": "er rieb",
      "lv": "той търкаше"
    },
    "imperfektKonjunktiv": {
      "de": "er riebe",
      "lv": "той би търкал"
    },
    "partizipVergangenheit": {
      "de": "gerieben",
      "lv": "търкан"
    }
  },
  {
    "infinitiv": {
      "de": "reißen",
      "lv": "скъсвам • скъсам"
    },
    "praesens": {
      "de": "er reißt",
      "lv": "той скъсва"
    },
    "imperfektIndikativ": {
      "de": "er riss",
      "lv": "той скъса"
    },
    "imperfektKonjunktiv": {
      "de": "er risse",
      "lv": "той би скъсвал"
    },
    "partizipVergangenheit": {
      "de": "gerissen",
      "lv": "скъсан"
    }
  },
  {
    "infinitiv": {
      "de": "reiten",
      "lv": "яздя"
    },
    "praesens": {
      "de": "er reitet",
      "lv": "той язди"
    },
    "imperfektIndikativ": {
      "de": "er ritt",
      "lv": "той яздеше"
    },
    "imperfektKonjunktiv": {
      "de": "er ritte",
      "lv": "той би яздил"
    },
    "partizipVergangenheit": {
      "de": "geritten (er ist)",
      "lv": "яздил"
    }
  },
  {
    "infinitiv": {
      "de": "rennen",
      "lv": "бягам"
    },
    "praesens": {
      "de": "er rennt",
      "lv": "той бяга"
    },
    "imperfektIndikativ": {
      "de": "er rannte",
      "lv": "той бягаше"
    },
    "imperfektKonjunktiv": {
      "de": "er rennte",
      "lv": "той би бягал"
    },
    "partizipVergangenheit": {
      "de": "gerannt",
      "lv": "бягал"
    }
  },
  {
    "infinitiv": {
      "de": "riechen",
      "lv": "помирисвам • помириша"
    },
    "praesens": {
      "de": "er riecht",
      "lv": "той помирисва"
    },
    "imperfektIndikativ": {
      "de": "er roch",
      "lv": "той помириса"
    },
    "imperfektKonjunktiv": {
      "de": "er röche",
      "lv": "той би помирисвал"
    },
    "partizipVergangenheit": {
      "de": "gerochen",
      "lv": "помирисан"
    }
  },
  {
    "infinitiv": {
      "de": "ringen",
      "lv": "боря се"
    },
    "praesens": {
      "de": "er ringt",
      "lv": "той се бори"
    },
    "imperfektIndikativ": {
      "de": "er rang",
      "lv": "той се бореше"
    },
    "imperfektKonjunktiv": {
      "de": "er ränge",
      "lv": "той би се борил"
    },
    "partizipVergangenheit": {
      "de": "gerungen",
      "lv": "борил се"
    }
  },
  {
    "infinitiv": {
      "de": "rinnen",
      "lv": "тека"
    },
    "praesens": {
      "de": "er rinnt",
      "lv": "той тече"
    },
    "imperfektIndikativ": {
      "de": "er rann",
      "lv": "той течеше"
    },
    "imperfektKonjunktiv": {
      "de": "er ränne / er rönne",
      "lv": "той би текъл"
    },
    "partizipVergangenheit": {
      "de": "geronnen (er ist)",
      "lv": "текъл"
    }
  },
  {
    "infinitiv": {
      "de": "rufen",
      "lv": "викам • извикам"
    },
    "praesens": {
      "de": "er ruft",
      "lv": "той вика"
    },
    "imperfektIndikativ": {
      "de": "er rief",
      "lv": "той извика"
    },
    "imperfektKonjunktiv": {
      "de": "er riefe",
      "lv": "той би викал"
    },
    "partizipVergangenheit": {
      "de": "gerufen",
      "lv": "извикан"
    }
  },
  {
    "infinitiv": {
      "de": "salzen",
      "lv": "соля • посоля"
    },
    "praesens": {
      "de": "er salzt",
      "lv": "той соли"
    },
    "imperfektIndikativ": {
      "de": "er salzte",
      "lv": "той посоли"
    },
    "imperfektKonjunktiv": {
      "de": "er salzte",
      "lv": "той би солил"
    },
    "partizipVergangenheit": {
      "de": "gesalzen",
      "lv": "посолен"
    }
  },
  {
    "infinitiv": {
      "de": "saufen",
      "lv": "пиянствам / пия • изпия"
    },
    "praesens": {
      "de": "er säuft",
      "lv": "той пиянства / пие"
    },
    "imperfektIndikativ": {
      "de": "er soff",
      "lv": "той пиянстваше / изпи"
    },
    "imperfektKonjunktiv": {
      "de": "er söffe",
      "lv": "той би пиянствал / пил"
    },
    "partizipVergangenheit": {
      "de": "gesoffen",
      "lv": "пиянствал / изпит"
    }
  },
  {
    "infinitiv": {
      "de": "saugen",
      "lv": "смуча"
    },
    "praesens": {
      "de": "er saugt",
      "lv": "той смуче"
    },
    "imperfektIndikativ": {
      "de": "er sog",
      "lv": "той смучеше"
    },
    "imperfektKonjunktiv": {
      "de": "er söge",
      "lv": "той би смукал"
    },
    "partizipVergangenheit": {
      "de": "gesogen",
      "lv": "смукан"
    }
  },
  {
    "infinitiv": {
      "de": "schaffen",
      "lv": "създавам • създам"
    },
    "praesens": {
      "de": "er schafft",
      "lv": "той създава"
    },
    "imperfektIndikativ": {
      "de": "er schuf",
      "lv": "той създаде"
    },
    "imperfektKonjunktiv": {
      "de": "er schüfe",
      "lv": "той би създавал"
    },
    "partizipVergangenheit": {
      "de": "geschaffen",
      "lv": "създаден"
    }
  },
  {
    "infinitiv": {
      "de": "schallen",
      "lv": "кънтя"
    },
    "praesens": {
      "de": "es schallt",
      "lv": "то кънти"
    },
    "imperfektIndikativ": {
      "de": "es schallte / es scholl",
      "lv": "то кънтеше"
    },
    "imperfektKonjunktiv": {
      "de": "es schallte / es schölle",
      "lv": "то би кънтяло"
    },
    "partizipVergangenheit": {
      "de": "geschallt",
      "lv": "кънтял"
    }
  },
  {
    "infinitiv": {
      "de": "scheiden",
      "lv": "разделям • разделя / разделям се • разделя се"
    },
    "praesens": {
      "de": "er scheidet",
      "lv": "той разделя / разделя се"
    },
    "imperfektIndikativ": {
      "de": "er schied",
      "lv": "той раздели / раздели се"
    },
    "imperfektKonjunktiv": {
      "de": "er schiede",
      "lv": "той би разделял / би се разделял"
    },
    "partizipVergangenheit": {
      "de": "geschieden (er hat / er ist)",
      "lv": "разделен / разделил се"
    }
  },
  {
    "infinitiv": {
      "de": "scheinen",
      "lv": "светя / изглеждам"
    },
    "praesens": {
      "de": "er scheint",
      "lv": "той свети / изглежда"
    },
    "imperfektIndikativ": {
      "de": "er schien",
      "lv": "той светеше / изглеждаше"
    },
    "imperfektKonjunktiv": {
      "de": "er schiene",
      "lv": "той би светил / изглеждал"
    },
    "partizipVergangenheit": {
      "de": "geschienen",
      "lv": "светил / изглеждал"
    }
  },
  {
    "infinitiv": {
      "de": "schelten",
      "lv": "мъмря • смъмря"
    },
    "praesens": {
      "de": "er schilt",
      "lv": "той мъмри"
    },
    "imperfektIndikativ": {
      "de": "er schalt",
      "lv": "той смъмри"
    },
    "imperfektKonjunktiv": {
      "de": "er schölte / er schälte",
      "lv": "той би мъмрил"
    },
    "partizipVergangenheit": {
      "de": "gescholten",
      "lv": "смъмрен"
    }
  },
  {
    "infinitiv": {
      "de": "scheren",
      "lv": "стрижа • острижа"
    },
    "praesens": {
      "de": "er schert",
      "lv": "той стриже"
    },
    "imperfektIndikativ": {
      "de": "er schor / er scherte",
      "lv": "той острига"
    },
    "imperfektKonjunktiv": {
      "de": "er schöre / er scherte",
      "lv": "той би стригал"
    },
    "partizipVergangenheit": {
      "de": "geschoren / geschert",
      "lv": "остриган"
    }
  },
  {
    "infinitiv": {
      "de": "schieben",
      "lv": "бутам • бутна"
    },
    "praesens": {
      "de": "er schiebt",
      "lv": "той бута"
    },
    "imperfektIndikativ": {
      "de": "er schob",
      "lv": "той бутна"
    },
    "imperfektKonjunktiv": {
      "de": "er schöbe",
      "lv": "той би бутал"
    },
    "partizipVergangenheit": {
      "de": "geschoben",
      "lv": "бутнат"
    }
  },
  {
    "infinitiv": {
      "de": "schießen",
      "lv": "стрелям"
    },
    "praesens": {
      "de": "er schießt",
      "lv": "той стреля"
    },
    "imperfektIndikativ": {
      "de": "er schoss",
      "lv": "той стреляше"
    },
    "imperfektKonjunktiv": {
      "de": "er schösse",
      "lv": "той би стрелял"
    },
    "partizipVergangenheit": {
      "de": "geschossen",
      "lv": "стрелял"
    }
  },
  {
    "infinitiv": {
      "de": "schinden",
      "lv": "мъча • измъча"
    },
    "praesens": {
      "de": "er schindet",
      "lv": "той мъчи"
    },
    "imperfektIndikativ": {
      "de": "er schindete",
      "lv": "той измъчи"
    },
    "imperfektKonjunktiv": {
      "de": "er schindete",
      "lv": "той би мъчил"
    },
    "partizipVergangenheit": {
      "de": "geschunden",
      "lv": "измъчен"
    }
  },
  {
    "infinitiv": {
      "de": "schlafen",
      "lv": "спя"
    },
    "praesens": {
      "de": "er schläft",
      "lv": "той спи"
    },
    "imperfektIndikativ": {
      "de": "er schlief",
      "lv": "той спеше"
    },
    "imperfektKonjunktiv": {
      "de": "er schliefe",
      "lv": "той би спал"
    },
    "partizipVergangenheit": {
      "de": "geschlafen",
      "lv": "спал"
    }
  },
  {
    "infinitiv": {
      "de": "schlagen",
      "lv": "удрям • ударя"
    },
    "praesens": {
      "de": "er schlägt",
      "lv": "той удря"
    },
    "imperfektIndikativ": {
      "de": "er schlug",
      "lv": "той удари"
    },
    "imperfektKonjunktiv": {
      "de": "er schlüge",
      "lv": "той би удрял"
    },
    "partizipVergangenheit": {
      "de": "geschlagen",
      "lv": "ударен"
    }
  },
  {
    "infinitiv": {
      "de": "schleichen",
      "lv": "промъквам се • промъкна се"
    },
    "praesens": {
      "de": "er schleicht",
      "lv": "той се промъква"
    },
    "imperfektIndikativ": {
      "de": "er schlich",
      "lv": "той се промъкна"
    },
    "imperfektKonjunktiv": {
      "de": "er schliche",
      "lv": "той би се промъквал"
    },
    "partizipVergangenheit": {
      "de": "geschlichen (er ist)",
      "lv": "промъкнал се"
    }
  },
  {
    "infinitiv": {
      "de": "schleifen",
      "lv": "шлифовам"
    },
    "praesens": {
      "de": "er schleift",
      "lv": "той шлифова"
    },
    "imperfektIndikativ": {
      "de": "er schliff",
      "lv": "той шлифоваше"
    },
    "imperfektKonjunktiv": {
      "de": "er schliffe",
      "lv": "той би шлифовал"
    },
    "partizipVergangenheit": {
      "de": "geschliffen",
      "lv": "шлифован"
    }
  },
  {
    "infinitiv": {
      "de": "schließen",
      "lv": "затварям • затворя"
    },
    "praesens": {
      "de": "er schließt",
      "lv": "той затваря"
    },
    "imperfektIndikativ": {
      "de": "er schloss",
      "lv": "той затвори"
    },
    "imperfektKonjunktiv": {
      "de": "er schlösse",
      "lv": "той би затварял"
    },
    "partizipVergangenheit": {
      "de": "geschlossen",
      "lv": "затворен"
    }
  },
  {
    "infinitiv": {
      "de": "schlingen",
      "lv": "гълтам • глътна"
    },
    "praesens": {
      "de": "er schlingt",
      "lv": "той гълта"
    },
    "imperfektIndikativ": {
      "de": "er schlang",
      "lv": "той глътна"
    },
    "imperfektKonjunktiv": {
      "de": "er schlänge",
      "lv": "той би гълтал"
    },
    "partizipVergangenheit": {
      "de": "geschlungen",
      "lv": "глътнат"
    }
  },
  {
    "infinitiv": {
      "de": "schmeißen",
      "lv": "мятам • метна"
    },
    "praesens": {
      "de": "er schmeißt",
      "lv": "той мята"
    },
    "imperfektIndikativ": {
      "de": "er schmiss",
      "lv": "той метна"
    },
    "imperfektKonjunktiv": {
      "de": "er schmisse",
      "lv": "той би мятал"
    },
    "partizipVergangenheit": {
      "de": "geschmissen",
      "lv": "метнат"
    }
  },
  {
    "infinitiv": {
      "de": "schmelzen",
      "lv": "топя се • стопя се"
    },
    "praesens": {
      "de": "er schmilzt",
      "lv": "той се топи"
    },
    "imperfektIndikativ": {
      "de": "er schmolz",
      "lv": "той се стопи"
    },
    "imperfektKonjunktiv": {
      "de": "er schmölze",
      "lv": "той би се топил"
    },
    "partizipVergangenheit": {
      "de": "geschmolzen (er ist)",
      "lv": "стопил се"
    }
  },
  {
    "infinitiv": {
      "de": "schnauben",
      "lv": "пръхтя"
    },
    "praesens": {
      "de": "er schnaubt",
      "lv": "той пръхти"
    },
    "imperfektIndikativ": {
      "de": "er schnaubte / er schnob",
      "lv": "той пръхтеше"
    },
    "imperfektKonjunktiv": {
      "de": "er schnaubte / er schnöbe",
      "lv": "той би пръхтял"
    },
    "partizipVergangenheit": {
      "de": "geschnaubt / geschnoben",
      "lv": "пръхтял"
    }
  },
  {
    "infinitiv": {
      "de": "schneiden",
      "lv": "режа • отрежа"
    },
    "praesens": {
      "de": "er schneidet",
      "lv": "той реже"
    },
    "imperfektIndikativ": {
      "de": "er schnitt",
      "lv": "той отряза"
    },
    "imperfektKonjunktiv": {
      "de": "er schnitte",
      "lv": "той би рязал"
    },
    "partizipVergangenheit": {
      "de": "geschnitten",
      "lv": "отрязан"
    }
  },
  {
    "infinitiv": {
      "de": "schreiben",
      "lv": "пиша • напиша"
    },
    "praesens": {
      "de": "er schreibt",
      "lv": "той пише"
    },
    "imperfektIndikativ": {
      "de": "er schrieb",
      "lv": "той написа"
    },
    "imperfektKonjunktiv": {
      "de": "er schriebe",
      "lv": "той би писал"
    },
    "partizipVergangenheit": {
      "de": "geschrieben",
      "lv": "написан"
    }
  },
  {
    "infinitiv": {
      "de": "schreien",
      "lv": "крещя • изкрещя"
    },
    "praesens": {
      "de": "er schreit",
      "lv": "той крещи"
    },
    "imperfektIndikativ": {
      "de": "er schrie",
      "lv": "той изкрещя"
    },
    "imperfektKonjunktiv": {
      "de": "er schriee",
      "lv": "той би крещял"
    },
    "partizipVergangenheit": {
      "de": "geschrien",
      "lv": "изкрещял"
    }
  },
  {
    "infinitiv": {
      "de": "schreiten",
      "lv": "крача"
    },
    "praesens": {
      "de": "er schreitet",
      "lv": "той крачи"
    },
    "imperfektIndikativ": {
      "de": "er schritt",
      "lv": "той крачеше"
    },
    "imperfektKonjunktiv": {
      "de": "er schritte",
      "lv": "той би крачил"
    },
    "partizipVergangenheit": {
      "de": "geschritten (er ist)",
      "lv": "крачил"
    }
  },
  {
    "infinitiv": {
      "de": "schweigen",
      "lv": "мълча"
    },
    "praesens": {
      "de": "er schweigt",
      "lv": "той мълчи"
    },
    "imperfektIndikativ": {
      "de": "er schwieg",
      "lv": "той мълчеше"
    },
    "imperfektKonjunktiv": {
      "de": "er schwiege",
      "lv": "той би мълчал"
    },
    "partizipVergangenheit": {
      "de": "geschwiegen",
      "lv": "мълчал"
    }
  },
  {
    "infinitiv": {
      "de": "schwellen",
      "lv": "отичам • отека"
    },
    "praesens": {
      "de": "er schwillt",
      "lv": "той отича"
    },
    "imperfektIndikativ": {
      "de": "er schwoll",
      "lv": "той отече"
    },
    "imperfektKonjunktiv": {
      "de": "er schwölle",
      "lv": "той би отичал"
    },
    "partizipVergangenheit": {
      "de": "geschwollen (er ist)",
      "lv": "отекъл"
    }
  },
  {
    "infinitiv": {
      "de": "schwimmen",
      "lv": "плувам"
    },
    "praesens": {
      "de": "er schwimmt",
      "lv": "той плува"
    },
    "imperfektIndikativ": {
      "de": "er schwamm",
      "lv": "той плуваше"
    },
    "imperfektKonjunktiv": {
      "de": "er schwömme / er schwämme",
      "lv": "той би плувал"
    },
    "partizipVergangenheit": {
      "de": "geschwommen (er ist)",
      "lv": "плувал"
    }
  },
  {
    "infinitiv": {
      "de": "schwinden",
      "lv": "изчезвам • изчезна"
    },
    "praesens": {
      "de": "er schwindet",
      "lv": "той изчезва"
    },
    "imperfektIndikativ": {
      "de": "er schwand",
      "lv": "той изчезна"
    },
    "imperfektKonjunktiv": {
      "de": "er schwände",
      "lv": "той би изчезвал"
    },
    "partizipVergangenheit": {
      "de": "geschwunden (er ist)",
      "lv": "изчезнал"
    }
  },
  {
    "infinitiv": {
      "de": "schwingen",
      "lv": "размахвам • размахам"
    },
    "praesens": {
      "de": "er schwingt",
      "lv": "той размахва"
    },
    "imperfektIndikativ": {
      "de": "er schwang",
      "lv": "той размаха"
    },
    "imperfektKonjunktiv": {
      "de": "er schwänge",
      "lv": "той би размахвал"
    },
    "partizipVergangenheit": {
      "de": "geschwungen",
      "lv": "размахан"
    }
  },
  {
    "infinitiv": {
      "de": "schwören",
      "lv": "заклевам се • закълна се"
    },
    "praesens": {
      "de": "er schwört",
      "lv": "той се заклева"
    },
    "imperfektIndikativ": {
      "de": "er schwur / er schwor",
      "lv": "той се закле"
    },
    "imperfektKonjunktiv": {
      "de": "er schwöre",
      "lv": "той би се заклевал"
    },
    "partizipVergangenheit": {
      "de": "geschworen",
      "lv": "заклел се"
    }
  },
  {
    "infinitiv": {
      "de": "sehen",
      "lv": "виждам • видя"
    },
    "praesens": {
      "de": "er sieht",
      "lv": "той вижда"
    },
    "imperfektIndikativ": {
      "de": "er sah",
      "lv": "той видя"
    },
    "imperfektKonjunktiv": {
      "de": "er sähe",
      "lv": "той би виждал"
    },
    "partizipVergangenheit": {
      "de": "gesehen",
      "lv": "видян"
    }
  },
  {
    "infinitiv": {
      "de": "sein",
      "lv": "съм"
    },
    "praesens": {
      "de": "er ist",
      "lv": "той е"
    },
    "imperfektIndikativ": {
      "de": "er war",
      "lv": "той беше"
    },
    "imperfektKonjunktiv": {
      "de": "er wäre",
      "lv": "той би бил"
    },
    "partizipVergangenheit": {
      "de": "gewesen",
      "lv": "бил"
    }
  },
  {
    "infinitiv": {
      "de": "senden",
      "lv": "изпращам • изпратя"
    },
    "praesens": {
      "de": "er sendet",
      "lv": "той изпраща"
    },
    "imperfektIndikativ": {
      "de": "er sandte / er sendete",
      "lv": "той изпрати"
    },
    "imperfektKonjunktiv": {
      "de": "er sendete",
      "lv": "той би изпращал"
    },
    "partizipVergangenheit": {
      "de": "gesandt / gesendet",
      "lv": "изпратен"
    }
  },
  {
    "infinitiv": {
      "de": "sieden",
      "lv": "варя • сваря"
    },
    "praesens": {
      "de": "er siedet",
      "lv": "той вари"
    },
    "imperfektIndikativ": {
      "de": "er sott / er siedete",
      "lv": "той свари"
    },
    "imperfektKonjunktiv": {
      "de": "er sötte / er siedete",
      "lv": "той би варил"
    },
    "partizipVergangenheit": {
      "de": "gesotten / gesiedet",
      "lv": "сварен"
    }
  },
  {
    "infinitiv": {
      "de": "singen",
      "lv": "пея • изпея"
    },
    "praesens": {
      "de": "er singt",
      "lv": "той пее"
    },
    "imperfektIndikativ": {
      "de": "er sang",
      "lv": "той изпя"
    },
    "imperfektKonjunktiv": {
      "de": "er sänge",
      "lv": "той би пял"
    },
    "partizipVergangenheit": {
      "de": "gesungen",
      "lv": "изпят"
    }
  },
  {
    "infinitiv": {
      "de": "sinken",
      "lv": "потъвам • потъна"
    },
    "praesens": {
      "de": "er sinkt",
      "lv": "той потъва"
    },
    "imperfektIndikativ": {
      "de": "er sank",
      "lv": "той потъна"
    },
    "imperfektKonjunktiv": {
      "de": "er sänke",
      "lv": "той би потъвал"
    },
    "partizipVergangenheit": {
      "de": "gesunken (er ist)",
      "lv": "потънал"
    }
  },
  {
    "infinitiv": {
      "de": "sinnen",
      "lv": "размишлявам"
    },
    "praesens": {
      "de": "er sinnt",
      "lv": "той размишлява"
    },
    "imperfektIndikativ": {
      "de": "er sann",
      "lv": "той размишляваше"
    },
    "imperfektKonjunktiv": {
      "de": "er sönne / er sänne",
      "lv": "той би размишлявал"
    },
    "partizipVergangenheit": {
      "de": "gesonnen",
      "lv": "размишлявал"
    }
  },
  {
    "infinitiv": {
      "de": "sitzen",
      "lv": "седя"
    },
    "praesens": {
      "de": "er sitzt",
      "lv": "той седи"
    },
    "imperfektIndikativ": {
      "de": "er saß",
      "lv": "той седеше"
    },
    "imperfektKonjunktiv": {
      "de": "er säße",
      "lv": "той би седял"
    },
    "partizipVergangenheit": {
      "de": "gesessen",
      "lv": "седял"
    }
  },
  {
    "infinitiv": {
      "de": "sollen",
      "lv": "длъжен съм"
    },
    "praesens": {
      "de": "er soll",
      "lv": "той е длъжен"
    },
    "imperfektIndikativ": {
      "de": "er sollte",
      "lv": "той беше длъжен"
    },
    "imperfektKonjunktiv": {
      "de": "er sollte",
      "lv": "той би бил длъжен"
    },
    "partizipVergangenheit": {
      "de": "gesollt",
      "lv": "бил длъжен"
    }
  },
  {
    "infinitiv": {
      "de": "speien",
      "lv": "плюя • плюна"
    },
    "praesens": {
      "de": "er speit",
      "lv": "той плюе"
    },
    "imperfektIndikativ": {
      "de": "er spie",
      "lv": "той плюна"
    },
    "imperfektKonjunktiv": {
      "de": "er spie",
      "lv": "той би плюл"
    },
    "partizipVergangenheit": {
      "de": "gespien",
      "lv": "плюнал"
    }
  },
  {
    "infinitiv": {
      "de": "spinnen",
      "lv": "преда • изпреда"
    },
    "praesens": {
      "de": "er spinnt",
      "lv": "той преде"
    },
    "imperfektIndikativ": {
      "de": "er spann",
      "lv": "той изпреде"
    },
    "imperfektKonjunktiv": {
      "de": "er spönne / er spänne",
      "lv": "той би прел"
    },
    "partizipVergangenheit": {
      "de": "gesponnen",
      "lv": "изпреден"
    }
  },
  {
    "infinitiv": {
      "de": "spleißen",
      "lv": "съединявам • съединя"
    },
    "praesens": {
      "de": "er spleißt",
      "lv": "той съединява"
    },
    "imperfektIndikativ": {
      "de": "er spliss",
      "lv": "той съедини"
    },
    "imperfektKonjunktiv": {
      "de": "er splisse",
      "lv": "той би съединявал"
    },
    "partizipVergangenheit": {
      "de": "gesplissen",
      "lv": "съединен"
    }
  },
  {
    "infinitiv": {
      "de": "sprechen",
      "lv": "говоря"
    },
    "praesens": {
      "de": "er spricht",
      "lv": "той говори"
    },
    "imperfektIndikativ": {
      "de": "er sprach",
      "lv": "той говореше"
    },
    "imperfektKonjunktiv": {
      "de": "er spräche",
      "lv": "той би говорил"
    },
    "partizipVergangenheit": {
      "de": "gesprochen",
      "lv": "говорен"
    }
  },
  {
    "infinitiv": {
      "de": "sprießen",
      "lv": "пониквам • поникна"
    },
    "praesens": {
      "de": "er sprießt",
      "lv": "той пониква"
    },
    "imperfektIndikativ": {
      "de": "er spross",
      "lv": "той поникна"
    },
    "imperfektKonjunktiv": {
      "de": "er sprösse",
      "lv": "той би пониквал"
    },
    "partizipVergangenheit": {
      "de": "gesprossen (er ist)",
      "lv": "поникнал"
    }
  },
  {
    "infinitiv": {
      "de": "springen",
      "lv": "скачам • скоча"
    },
    "praesens": {
      "de": "er springt",
      "lv": "той скача"
    },
    "imperfektIndikativ": {
      "de": "er sprang",
      "lv": "той скочи"
    },
    "imperfektKonjunktiv": {
      "de": "er spränge",
      "lv": "той би скачал"
    },
    "partizipVergangenheit": {
      "de": "gesprungen (er ist)",
      "lv": "скочил"
    }
  },
  {
    "infinitiv": {
      "de": "stechen",
      "lv": "бода • убода"
    },
    "praesens": {
      "de": "er sticht",
      "lv": "той боде"
    },
    "imperfektIndikativ": {
      "de": "er stach",
      "lv": "той убоде"
    },
    "imperfektKonjunktiv": {
      "de": "er stäche",
      "lv": "той би бол"
    },
    "partizipVergangenheit": {
      "de": "gestochen",
      "lv": "убоден"
    }
  },
  {
    "infinitiv": {
      "de": "stecken",
      "lv": "пъхвам • пъхна / забождам • забода"
    },
    "praesens": {
      "de": "er steckt",
      "lv": "той пъхва / забожда"
    },
    "imperfektIndikativ": {
      "de": "er stak / er steckte",
      "lv": "той пъхна / забоде"
    },
    "imperfektKonjunktiv": {
      "de": "er stäke / er steckte",
      "lv": "той би пъхвал / забождал"
    },
    "partizipVergangenheit": {
      "de": "gesteckt",
      "lv": "пъхнат / забоден"
    }
  },
  {
    "infinitiv": {
      "de": "stehen",
      "lv": "стоя"
    },
    "praesens": {
      "de": "er steht",
      "lv": "той стои"
    },
    "imperfektIndikativ": {
      "de": "er stand",
      "lv": "той стоеше"
    },
    "imperfektKonjunktiv": {
      "de": "er stände / er stünde",
      "lv": "той би стоял"
    },
    "partizipVergangenheit": {
      "de": "gestanden",
      "lv": "стоял"
    }
  },
  {
    "infinitiv": {
      "de": "stehlen",
      "lv": "крада • открадна"
    },
    "praesens": {
      "de": "er stiehlt",
      "lv": "той краде"
    },
    "imperfektIndikativ": {
      "de": "er stahl",
      "lv": "той открадна"
    },
    "imperfektKonjunktiv": {
      "de": "er stöhle / er stähle",
      "lv": "той би крал"
    },
    "partizipVergangenheit": {
      "de": "gestohlen",
      "lv": "откраднат"
    }
  },
  {
    "infinitiv": {
      "de": "steigen",
      "lv": "изкачвам се • изкача се"
    },
    "praesens": {
      "de": "er steigt",
      "lv": "той се изкачва"
    },
    "imperfektIndikativ": {
      "de": "er stieg",
      "lv": "той се изкачи"
    },
    "imperfektKonjunktiv": {
      "de": "er stiege",
      "lv": "той би се изкачвал"
    },
    "partizipVergangenheit": {
      "de": "gestiegen (er ist)",
      "lv": "изкачил се"
    }
  },
  {
    "infinitiv": {
      "de": "sterben",
      "lv": "умирам • умра"
    },
    "praesens": {
      "de": "er stirbt",
      "lv": "той умира"
    },
    "imperfektIndikativ": {
      "de": "er starb",
      "lv": "той умря"
    },
    "imperfektKonjunktiv": {
      "de": "er stürbe",
      "lv": "той би умирал"
    },
    "partizipVergangenheit": {
      "de": "gestorben (er ist)",
      "lv": "умрял"
    }
  },
  {
    "infinitiv": {
      "de": "stinken",
      "lv": "смърдя"
    },
    "praesens": {
      "de": "es stinkt",
      "lv": "то смърди"
    },
    "imperfektIndikativ": {
      "de": "es stank",
      "lv": "то смърдеше"
    },
    "imperfektKonjunktiv": {
      "de": "es stänke",
      "lv": "то би смърдяло"
    },
    "partizipVergangenheit": {
      "de": "gestunken",
      "lv": "смърдял"
    }
  },
  {
    "infinitiv": {
      "de": "stoßen",
      "lv": "блъскам • блъсна"
    },
    "praesens": {
      "de": "er stößt",
      "lv": "той блъска"
    },
    "imperfektIndikativ": {
      "de": "er stieß",
      "lv": "той блъсна"
    },
    "imperfektKonjunktiv": {
      "de": "er stieße",
      "lv": "той би блъскал"
    },
    "partizipVergangenheit": {
      "de": "gestoßen",
      "lv": "блъснат"
    }
  },
  {
    "infinitiv": {
      "de": "streichen",
      "lv": "боядисвам • боядисам / задрасквам • задраскам"
    },
    "praesens": {
      "de": "er streicht",
      "lv": "той боядисва / задрасква"
    },
    "imperfektIndikativ": {
      "de": "er strich",
      "lv": "той боядиса / задраска"
    },
    "imperfektKonjunktiv": {
      "de": "er striche",
      "lv": "той би боядисвал / задрасквал"
    },
    "partizipVergangenheit": {
      "de": "gestrichen",
      "lv": "боядисан / задраскан"
    }
  },
  {
    "infinitiv": {
      "de": "streiten",
      "lv": "карам се • скарам се"
    },
    "praesens": {
      "de": "er streitet",
      "lv": "той се кара"
    },
    "imperfektIndikativ": {
      "de": "er stritt",
      "lv": "той се скара"
    },
    "imperfektKonjunktiv": {
      "de": "er stritte",
      "lv": "той би се карал"
    },
    "partizipVergangenheit": {
      "de": "gestritten",
      "lv": "скарал се"
    }
  },
  {
    "infinitiv": {
      "de": "tragen",
      "lv": "нося"
    },
    "praesens": {
      "de": "er trägt",
      "lv": "той носи"
    },
    "imperfektIndikativ": {
      "de": "er trug",
      "lv": "той носеше"
    },
    "imperfektKonjunktiv": {
      "de": "er trüge",
      "lv": "той би носил"
    },
    "partizipVergangenheit": {
      "de": "getragen",
      "lv": "носен"
    }
  },
  {
    "infinitiv": {
      "de": "treffen",
      "lv": "срещам • срещна"
    },
    "praesens": {
      "de": "er trifft",
      "lv": "той среща"
    },
    "imperfektIndikativ": {
      "de": "er traf",
      "lv": "той срещна"
    },
    "imperfektKonjunktiv": {
      "de": "er träfe",
      "lv": "той би срещал"
    },
    "partizipVergangenheit": {
      "de": "getroffen",
      "lv": "срещнат"
    }
  },
  {
    "infinitiv": {
      "de": "treiben",
      "lv": "гоня"
    },
    "praesens": {
      "de": "er treibt",
      "lv": "той гони"
    },
    "imperfektIndikativ": {
      "de": "er trieb",
      "lv": "той гонеше"
    },
    "imperfektKonjunktiv": {
      "de": "er triebe",
      "lv": "той би гонил"
    },
    "partizipVergangenheit": {
      "de": "getrieben",
      "lv": "гонен"
    }
  },
  {
    "infinitiv": {
      "de": "treten",
      "lv": "пристъпвам • пристъпя / вървя"
    },
    "praesens": {
      "de": "er tritt",
      "lv": "той пристъпва / върви"
    },
    "imperfektIndikativ": {
      "de": "er trat",
      "lv": "той пристъпи / вървеше"
    },
    "imperfektKonjunktiv": {
      "de": "er träte",
      "lv": "той би пристъпвал / вървял"
    },
    "partizipVergangenheit": {
      "de": "getreten (er ist)",
      "lv": "пристъпил / вървял"
    }
  },
  {
    "infinitiv": {
      "de": "trinken",
      "lv": "пия • изпия"
    },
    "praesens": {
      "de": "er trinkt",
      "lv": "той пие"
    },
    "imperfektIndikativ": {
      "de": "er trank",
      "lv": "той изпи"
    },
    "imperfektKonjunktiv": {
      "de": "er tränke",
      "lv": "той би пил"
    },
    "partizipVergangenheit": {
      "de": "getrunken",
      "lv": "изпит"
    }
  },
  {
    "infinitiv": {
      "de": "trügen",
      "lv": "мамя • измамя"
    },
    "praesens": {
      "de": "er trügt",
      "lv": "той мами"
    },
    "imperfektIndikativ": {
      "de": "er trog",
      "lv": "той измами"
    },
    "imperfektKonjunktiv": {
      "de": "er tröge",
      "lv": "той би мамил"
    },
    "partizipVergangenheit": {
      "de": "getrogen",
      "lv": "измамен"
    }
  },
  {
    "infinitiv": {
      "de": "tun",
      "lv": "правя • направя"
    },
    "praesens": {
      "de": "er tut",
      "lv": "той прави"
    },
    "imperfektIndikativ": {
      "de": "er tat",
      "lv": "той направи"
    },
    "imperfektKonjunktiv": {
      "de": "er täte",
      "lv": "той би правил"
    },
    "partizipVergangenheit": {
      "de": "getan",
      "lv": "направен"
    }
  },
  {
    "infinitiv": {
      "de": "verderben",
      "lv": "развалям • разваля"
    },
    "praesens": {
      "de": "er verdirbt",
      "lv": "той разваля"
    },
    "imperfektIndikativ": {
      "de": "er verdarb",
      "lv": "той развали"
    },
    "imperfektKonjunktiv": {
      "de": "er verdürbe",
      "lv": "той би развалял"
    },
    "partizipVergangenheit": {
      "de": "verdorben",
      "lv": "развален"
    }
  },
  {
    "infinitiv": {
      "de": "verdrießen",
      "lv": "дразня • раздразня"
    },
    "praesens": {
      "de": "er verdrießt",
      "lv": "той дразни"
    },
    "imperfektIndikativ": {
      "de": "er verdross",
      "lv": "той раздразни"
    },
    "imperfektKonjunktiv": {
      "de": "er verdrösse",
      "lv": "той би дразнил"
    },
    "partizipVergangenheit": {
      "de": "verdrossen",
      "lv": "раздразнен"
    }
  },
  {
    "infinitiv": {
      "de": "vergessen",
      "lv": "забравям • забравя"
    },
    "praesens": {
      "de": "er vergisst",
      "lv": "той забравя"
    },
    "imperfektIndikativ": {
      "de": "er vergaß",
      "lv": "той забрави"
    },
    "imperfektKonjunktiv": {
      "de": "er vergäße",
      "lv": "той би забравял"
    },
    "partizipVergangenheit": {
      "de": "vergessen",
      "lv": "забравен"
    }
  },
  {
    "infinitiv": {
      "de": "verlieren",
      "lv": "губя • загубя"
    },
    "praesens": {
      "de": "er verliert",
      "lv": "той губи"
    },
    "imperfektIndikativ": {
      "de": "er verlor",
      "lv": "той загуби"
    },
    "imperfektKonjunktiv": {
      "de": "er verlöre",
      "lv": "той би губил"
    },
    "partizipVergangenheit": {
      "de": "verloren",
      "lv": "загубен"
    }
  },
  {
    "infinitiv": {
      "de": "wachsen",
      "lv": "раста • порасна"
    },
    "praesens": {
      "de": "er wächst",
      "lv": "той расте"
    },
    "imperfektIndikativ": {
      "de": "er wuchs",
      "lv": "той порасна"
    },
    "imperfektKonjunktiv": {
      "de": "er wüchse",
      "lv": "той би расъл"
    },
    "partizipVergangenheit": {
      "de": "gewachsen (er ist)",
      "lv": "пораснал"
    }
  },
  {
    "infinitiv": {
      "de": "waschen",
      "lv": "мия • измия"
    },
    "praesens": {
      "de": "er wäscht",
      "lv": "той мие"
    },
    "imperfektIndikativ": {
      "de": "er wusch",
      "lv": "той изми"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsche",
      "lv": "той би мил"
    },
    "partizipVergangenheit": {
      "de": "gewaschen",
      "lv": "измит"
    }
  },
  {
    "infinitiv": {
      "de": "weben",
      "lv": "тъка • изтъка"
    },
    "praesens": {
      "de": "er webt",
      "lv": "той тъче"
    },
    "imperfektIndikativ": {
      "de": "er wob / er webte",
      "lv": "той изтъка"
    },
    "imperfektKonjunktiv": {
      "de": "er wöbe / er webte",
      "lv": "той би тъкал"
    },
    "partizipVergangenheit": {
      "de": "gewoben",
      "lv": "изтъкан"
    }
  },
  {
    "infinitiv": {
      "de": "weichen",
      "lv": "отстъпвам • отстъпя"
    },
    "praesens": {
      "de": "er weicht",
      "lv": "той отстъпва"
    },
    "imperfektIndikativ": {
      "de": "er wich",
      "lv": "той отстъпи"
    },
    "imperfektKonjunktiv": {
      "de": "er wiche",
      "lv": "той би отстъпвал"
    },
    "partizipVergangenheit": {
      "de": "gewichen (er ist)",
      "lv": "отстъпил"
    }
  },
  {
    "infinitiv": {
      "de": "weisen",
      "lv": "посочвам • посоча"
    },
    "praesens": {
      "de": "er weist",
      "lv": "той посочва"
    },
    "imperfektIndikativ": {
      "de": "er wies",
      "lv": "той посочи"
    },
    "imperfektKonjunktiv": {
      "de": "er wiese",
      "lv": "той би посочвал"
    },
    "partizipVergangenheit": {
      "de": "gewiesen",
      "lv": "посочен"
    }
  },
  {
    "infinitiv": {
      "de": "wenden",
      "lv": "обръщам • обърна"
    },
    "praesens": {
      "de": "er wendet",
      "lv": "той обръща"
    },
    "imperfektIndikativ": {
      "de": "er wandte / es wendete",
      "lv": "той обърна"
    },
    "imperfektKonjunktiv": {
      "de": "er wendete",
      "lv": "той би обръщал"
    },
    "partizipVergangenheit": {
      "de": "gewandt / gewendet",
      "lv": "обърнат"
    }
  },
  {
    "infinitiv": {
      "de": "werben",
      "lv": "ухажвам"
    },
    "praesens": {
      "de": "er wirbt",
      "lv": "той ухажва"
    },
    "imperfektIndikativ": {
      "de": "er warb",
      "lv": "той ухажваше"
    },
    "imperfektKonjunktiv": {
      "de": "er würbe",
      "lv": "той би ухажвал"
    },
    "partizipVergangenheit": {
      "de": "geworben",
      "lv": "ухажван"
    }
  },
  {
    "infinitiv": {
      "de": "werden",
      "lv": "ставам • стана"
    },
    "praesens": {
      "de": "er wird",
      "lv": "той става"
    },
    "imperfektIndikativ": {
      "de": "er wurde",
      "lv": "той стана"
    },
    "imperfektKonjunktiv": {
      "de": "er würde",
      "lv": "той би ставал"
    },
    "partizipVergangenheit": {
      "de": "geworden",
      "lv": "станал"
    }
  },
  {
    "infinitiv": {
      "de": "werfen",
      "lv": "хвърлям • хвърля"
    },
    "praesens": {
      "de": "er wirft",
      "lv": "той хвърля"
    },
    "imperfektIndikativ": {
      "de": "er warf",
      "lv": "той хвърли"
    },
    "imperfektKonjunktiv": {
      "de": "er würfe",
      "lv": "той би хвърлял"
    },
    "partizipVergangenheit": {
      "de": "geworfen",
      "lv": "хвърлен"
    }
  },
  {
    "infinitiv": {
      "de": "wiegen",
      "lv": "претеглям • претегля"
    },
    "praesens": {
      "de": "er wiegt",
      "lv": "той претегля"
    },
    "imperfektIndikativ": {
      "de": "er wog",
      "lv": "той претегли"
    },
    "imperfektKonjunktiv": {
      "de": "er wöge",
      "lv": "той би претеглял"
    },
    "partizipVergangenheit": {
      "de": "gewogen",
      "lv": "претеглен"
    }
  },
  {
    "infinitiv": {
      "de": "winden",
      "lv": "вия"
    },
    "praesens": {
      "de": "er windet",
      "lv": "той вие"
    },
    "imperfektIndikativ": {
      "de": "er wand",
      "lv": "той виеше"
    },
    "imperfektKonjunktiv": {
      "de": "er wände",
      "lv": "той би вил"
    },
    "partizipVergangenheit": {
      "de": "gewunden",
      "lv": "вит"
    }
  },
  {
    "infinitiv": {
      "de": "wissen",
      "lv": "зная"
    },
    "praesens": {
      "de": "er weiß",
      "lv": "той знае"
    },
    "imperfektIndikativ": {
      "de": "er wusste",
      "lv": "той знаеше"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsste",
      "lv": "той би знаял"
    },
    "partizipVergangenheit": {
      "de": "gewusst",
      "lv": "знаен"
    }
  },
  {
    "infinitiv": {
      "de": "wollen",
      "lv": "искам"
    },
    "praesens": {
      "de": "er will",
      "lv": "той иска"
    },
    "imperfektIndikativ": {
      "de": "er wollte",
      "lv": "той искаше"
    },
    "imperfektKonjunktiv": {
      "de": "er wollte",
      "lv": "той би искал"
    },
    "partizipVergangenheit": {
      "de": "gewollt",
      "lv": "искал"
    }
  },
  {
    "infinitiv": {
      "de": "wringen",
      "lv": "изстисквам • изстискам"
    },
    "praesens": {
      "de": "er wringt",
      "lv": "той изстисква"
    },
    "imperfektIndikativ": {
      "de": "er wrang",
      "lv": "той изстиска"
    },
    "imperfektKonjunktiv": {
      "de": "er wränge",
      "lv": "той би изстисквал"
    },
    "partizipVergangenheit": {
      "de": "gewrungen",
      "lv": "изстискан"
    }
  },
  {
    "infinitiv": {
      "de": "zeihen",
      "lv": "обвинявам • обвиня"
    },
    "praesens": {
      "de": "er zeiht",
      "lv": "той обвинява"
    },
    "imperfektIndikativ": {
      "de": "er zieh",
      "lv": "той обвини"
    },
    "imperfektKonjunktiv": {
      "de": "er ziehe",
      "lv": "той би обвинявал"
    },
    "partizipVergangenheit": {
      "de": "geziehen",
      "lv": "обвинен"
    }
  },
  {
    "infinitiv": {
      "de": "ziehen",
      "lv": "дърпам • дръпна"
    },
    "praesens": {
      "de": "er zieht",
      "lv": "той дърпа"
    },
    "imperfektIndikativ": {
      "de": "er zog",
      "lv": "той дръпна"
    },
    "imperfektKonjunktiv": {
      "de": "er zöge",
      "lv": "той би дърпал"
    },
    "partizipVergangenheit": {
      "de": "gezogen",
      "lv": "дръпнат"
    }
  },
  {
    "infinitiv": {
      "de": "zwingen",
      "lv": "принуждавам • принудя"
    },
    "praesens": {
      "de": "er zwingt",
      "lv": "той принуждава"
    },
    "imperfektIndikativ": {
      "de": "er zwang",
      "lv": "той принуди"
    },
    "imperfektKonjunktiv": {
      "de": "er zwänge",
      "lv": "той би принуждавал"
    },
    "partizipVergangenheit": {
      "de": "gezwungen",
      "lv": "принуден"
    }
  },
  {
    "infinitiv": {
      "de": "empfangen",
      "lv": "получавам • получа"
    },
    "praesens": {
      "de": "er empfängt",
      "lv": "той получава"
    },
    "imperfektIndikativ": {
      "de": "er empfing",
      "lv": "той получи"
    },
    "imperfektKonjunktiv": {
      "de": "er empfinge",
      "lv": "той би получавал"
    },
    "partizipVergangenheit": {
      "de": "empfangen",
      "lv": "получен"
    }
  },
  {
    "infinitiv": {
      "de": "erwägen",
      "lv": "обмислям • обмисля"
    },
    "praesens": {
      "de": "er erwägt",
      "lv": "той обмисля"
    },
    "imperfektIndikativ": {
      "de": "er erwog",
      "lv": "той обмисли"
    },
    "imperfektKonjunktiv": {
      "de": "er erwöge",
      "lv": "той би обмислял"
    },
    "partizipVergangenheit": {
      "de": "erwogen",
      "lv": "обмислен"
    }
  },
  {
    "infinitiv": {
      "de": "fechten",
      "lv": "сражавам се"
    },
    "praesens": {
      "de": "er ficht",
      "lv": "той се сражава"
    },
    "imperfektIndikativ": {
      "de": "er focht",
      "lv": "той се сражаваше"
    },
    "imperfektKonjunktiv": {
      "de": "er föchte",
      "lv": "той би се сражавал"
    },
    "partizipVergangenheit": {
      "de": "gefochten",
      "lv": "сражавал се"
    }
  },
  {
    "infinitiv": {
      "de": "flechten",
      "lv": "сплитам • сплета"
    },
    "praesens": {
      "de": "er flicht",
      "lv": "той сплита"
    },
    "imperfektIndikativ": {
      "de": "er flocht",
      "lv": "той сплете"
    },
    "imperfektKonjunktiv": {
      "de": "er flöchte",
      "lv": "той би сплитал"
    },
    "partizipVergangenheit": {
      "de": "geflochten",
      "lv": "сплетен"
    }
  },
  {
    "infinitiv": {
      "de": "hangen",
      "lv": "вися"
    },
    "praesens": {
      "de": "er hängt",
      "lv": "той виси"
    },
    "imperfektIndikativ": {
      "de": "er hing",
      "lv": "той висеше"
    },
    "imperfektKonjunktiv": {
      "de": "er hinge",
      "lv": "той би висял"
    },
    "partizipVergangenheit": {
      "de": "gehangen",
      "lv": "висял"
    }
  },
  {
    "infinitiv": {
      "de": "spalten",
      "lv": "цепя • разцепя"
    },
    "praesens": {
      "de": "er spaltet",
      "lv": "той цепи"
    },
    "imperfektIndikativ": {
      "de": "er spaltete",
      "lv": "той разцепи"
    },
    "imperfektKonjunktiv": {
      "de": "er spaltete",
      "lv": "той би цепил"
    },
    "partizipVergangenheit": {
      "de": "gespalten",
      "lv": "разцепен"
    }
  },
  {
    "infinitiv": {
      "de": "verzeihen",
      "lv": "прощавам • простя"
    },
    "praesens": {
      "de": "er verzeiht",
      "lv": "той прощава"
    },
    "imperfektIndikativ": {
      "de": "er verzieh",
      "lv": "той прости"
    },
    "imperfektKonjunktiv": {
      "de": "er verziehe",
      "lv": "той би прощавал"
    },
    "partizipVergangenheit": {
      "de": "verziehen",
      "lv": "простен"
    }
  }
];

window.VERB_ENTRIES = VERB_ENTRIES;

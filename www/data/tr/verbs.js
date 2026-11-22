const VERB_ENTRIES = [
  {
    "infinitiv": {
      "de": "backen",
      "lv": "fırında pişirmek"
    },
    "praesens": {
      "de": "er bäckt",
      "lv": "o fırında pişirir"
    },
    "imperfektIndikativ": {
      "de": "er buk",
      "lv": "o fırında pişirdi"
    },
    "imperfektKonjunktiv": {
      "de": "er büke",
      "lv": "o fırında pişirirdi"
    },
    "partizipVergangenheit": {
      "de": "gebacken",
      "lv": "fırında pişirilmiş"
    }
  },
  {
    "infinitiv": {
      "de": "befehlen",
      "lv": "emretmek"
    },
    "praesens": {
      "de": "er befiehlt",
      "lv": "o emreder"
    },
    "imperfektIndikativ": {
      "de": "er befahl",
      "lv": "o emretti"
    },
    "imperfektKonjunktiv": {
      "de": "er beföhle",
      "lv": "o emrederdi"
    },
    "partizipVergangenheit": {
      "de": "befohlen",
      "lv": "emredilmiş"
    }
  },
  {
    "infinitiv": {
      "de": "beginnen",
      "lv": "başlamak"
    },
    "praesens": {
      "de": "er beginnt",
      "lv": "o başlar"
    },
    "imperfektIndikativ": {
      "de": "er begann",
      "lv": "o başladı"
    },
    "imperfektKonjunktiv": {
      "de": "er begönne / er begänne",
      "lv": "o başlardı"
    },
    "partizipVergangenheit": {
      "de": "begonnen",
      "lv": "başlamış"
    }
  },
  {
    "infinitiv": {
      "de": "beißen",
      "lv": "ısırmak"
    },
    "praesens": {
      "de": "er beißt",
      "lv": "o ısırır"
    },
    "imperfektIndikativ": {
      "de": "er biss",
      "lv": "o ısırdı"
    },
    "imperfektKonjunktiv": {
      "de": "er bisse",
      "lv": "o ısırırdı"
    },
    "partizipVergangenheit": {
      "de": "gebissen",
      "lv": "ısırılmış"
    }
  },
  {
    "infinitiv": {
      "de": "bergen",
      "lv": "kurtarmak / saklamak"
    },
    "praesens": {
      "de": "er birgt",
      "lv": "o kurtarır / saklar"
    },
    "imperfektIndikativ": {
      "de": "er barg",
      "lv": "o kurtardı / sakladı"
    },
    "imperfektKonjunktiv": {
      "de": "er bürge / er bärge",
      "lv": "o kurtarırdı / saklardı"
    },
    "partizipVergangenheit": {
      "de": "geborgen",
      "lv": "kurtarılmış / saklanmış"
    }
  },
  {
    "infinitiv": {
      "de": "bersten",
      "lv": "patlamak"
    },
    "praesens": {
      "de": "er birst",
      "lv": "o patlar"
    },
    "imperfektIndikativ": {
      "de": "er barst / er borst",
      "lv": "o patladı"
    },
    "imperfektKonjunktiv": {
      "de": "er bärste / er börste",
      "lv": "o patlardı"
    },
    "partizipVergangenheit": {
      "de": "geborsten (er ist)",
      "lv": "patlamış"
    }
  },
  {
    "infinitiv": {
      "de": "bewegen",
      "lv": "teşvik etmek"
    },
    "praesens": {
      "de": "er bewegt",
      "lv": "o teşvik eder"
    },
    "imperfektIndikativ": {
      "de": "er bewog",
      "lv": "o teşvik etti"
    },
    "imperfektKonjunktiv": {
      "de": "er bewöge",
      "lv": "o teşvik ederdi"
    },
    "partizipVergangenheit": {
      "de": "bewogen",
      "lv": "teşvik edilmiş"
    }
  },
  {
    "infinitiv": {
      "de": "biegen",
      "lv": "bükmek"
    },
    "praesens": {
      "de": "er biegt",
      "lv": "o büker"
    },
    "imperfektIndikativ": {
      "de": "er bog",
      "lv": "o büktü"
    },
    "imperfektKonjunktiv": {
      "de": "er böge",
      "lv": "o bükerdi"
    },
    "partizipVergangenheit": {
      "de": "gebogen",
      "lv": "bükülmüş"
    }
  },
  {
    "infinitiv": {
      "de": "bieten",
      "lv": "sunmak"
    },
    "praesens": {
      "de": "er bietet",
      "lv": "o sunar"
    },
    "imperfektIndikativ": {
      "de": "er bot",
      "lv": "o sundu"
    },
    "imperfektKonjunktiv": {
      "de": "er böte",
      "lv": "o sunardı"
    },
    "partizipVergangenheit": {
      "de": "geboten",
      "lv": "sunulmuş"
    }
  },
  {
    "infinitiv": {
      "de": "binden",
      "lv": "bağlamak"
    },
    "praesens": {
      "de": "er bindet",
      "lv": "o bağlar"
    },
    "imperfektIndikativ": {
      "de": "er band",
      "lv": "o bağladı"
    },
    "imperfektKonjunktiv": {
      "de": "er bände",
      "lv": "o bağlardı"
    },
    "partizipVergangenheit": {
      "de": "gebunden",
      "lv": "bağlanmış"
    }
  },
  {
    "infinitiv": {
      "de": "bitten",
      "lv": "rica etmek"
    },
    "praesens": {
      "de": "er bittet",
      "lv": "o rica eder"
    },
    "imperfektIndikativ": {
      "de": "er bat",
      "lv": "o rica etti"
    },
    "imperfektKonjunktiv": {
      "de": "er bäte",
      "lv": "o rica ederdi"
    },
    "partizipVergangenheit": {
      "de": "gebeten",
      "lv": "rica edilmiş"
    }
  },
  {
    "infinitiv": {
      "de": "blasen",
      "lv": "üflemek"
    },
    "praesens": {
      "de": "er bläst",
      "lv": "o üfler"
    },
    "imperfektIndikativ": {
      "de": "er blies",
      "lv": "o üfledi"
    },
    "imperfektKonjunktiv": {
      "de": "er bliese",
      "lv": "o üflerdi"
    },
    "partizipVergangenheit": {
      "de": "geblasen",
      "lv": "üflenmiş"
    }
  },
  {
    "infinitiv": {
      "de": "gären",
      "lv": "mayalanmak"
    },
    "praesens": {
      "de": "es gärt",
      "lv": "o mayalanır"
    },
    "imperfektIndikativ": {
      "de": "es gor / es gärte",
      "lv": "o mayalandı"
    },
    "imperfektKonjunktiv": {
      "de": "es göre / es gärte",
      "lv": "o mayalanırdı"
    },
    "partizipVergangenheit": {
      "de": "gegoren / gegärt",
      "lv": "mayalanmış"
    }
  },
  {
    "infinitiv": {
      "de": "gebären",
      "lv": "doğurmak"
    },
    "praesens": {
      "de": "sie gebiert",
      "lv": "o doğurur"
    },
    "imperfektIndikativ": {
      "de": "sie gebar",
      "lv": "o doğurdu"
    },
    "imperfektKonjunktiv": {
      "de": "sie gebäre",
      "lv": "o doğururdu"
    },
    "partizipVergangenheit": {
      "de": "geboren",
      "lv": "doğurmuş"
    }
  },
  {
    "infinitiv": {
      "de": "gelingen",
      "lv": "başarılı olmak"
    },
    "praesens": {
      "de": "es gelingt",
      "lv": "o başarılı olur"
    },
    "imperfektIndikativ": {
      "de": "es gelang",
      "lv": "o başarılı oldu"
    },
    "imperfektKonjunktiv": {
      "de": "es gelänge",
      "lv": "o başarılı olurdu"
    },
    "partizipVergangenheit": {
      "de": "gelungen (es ist)",
      "lv": "başarılı olmuş"
    }
  },
  {
    "infinitiv": {
      "de": "gelten",
      "lv": "sayılmak / geçerli olmak"
    },
    "praesens": {
      "de": "er gilt",
      "lv": "o sayılır / geçerli olur"
    },
    "imperfektIndikativ": {
      "de": "er galt",
      "lv": "o sayıldı / geçerli oldu"
    },
    "imperfektKonjunktiv": {
      "de": "er gölte / es gälte",
      "lv": "o sayılırdı / geçerli olurdu"
    },
    "partizipVergangenheit": {
      "de": "gegolten",
      "lv": "sayılmış / geçerli olmuş"
    }
  },
  {
    "infinitiv": {
      "de": "genesen",
      "lv": "iyileşmek"
    },
    "praesens": {
      "de": "er genest",
      "lv": "o iyileşir"
    },
    "imperfektIndikativ": {
      "de": "er genas",
      "lv": "o iyileşti"
    },
    "imperfektKonjunktiv": {
      "de": "er genäse",
      "lv": "o iyileşirdi"
    },
    "partizipVergangenheit": {
      "de": "genesen (er ist)",
      "lv": "iyileşmiş"
    }
  },
  {
    "infinitiv": {
      "de": "genießen",
      "lv": "zevk almak"
    },
    "praesens": {
      "de": "er genießt",
      "lv": "o zevk alır"
    },
    "imperfektIndikativ": {
      "de": "er genoss",
      "lv": "o zevk aldı"
    },
    "imperfektKonjunktiv": {
      "de": "er genösse",
      "lv": "o zevk alırdı"
    },
    "partizipVergangenheit": {
      "de": "genossen",
      "lv": "zevk almış"
    }
  },
  {
    "infinitiv": {
      "de": "geschehen",
      "lv": "meydana gelmek"
    },
    "praesens": {
      "de": "es geschieht",
      "lv": "o meydana gelir"
    },
    "imperfektIndikativ": {
      "de": "es geschah",
      "lv": "o meydana geldi"
    },
    "imperfektKonjunktiv": {
      "de": "es geschähe",
      "lv": "o meydana gelirdi"
    },
    "partizipVergangenheit": {
      "de": "geschehen (es ist)",
      "lv": "meydana gelmiş"
    }
  },
  {
    "infinitiv": {
      "de": "gießen",
      "lv": "dökmek"
    },
    "praesens": {
      "de": "er gießt",
      "lv": "o döker"
    },
    "imperfektIndikativ": {
      "de": "er goss",
      "lv": "o döktü"
    },
    "imperfektKonjunktiv": {
      "de": "er gösse",
      "lv": "o dökerdi"
    },
    "partizipVergangenheit": {
      "de": "gegossen",
      "lv": "dökülmüş"
    }
  },
  {
    "infinitiv": {
      "de": "gleichen",
      "lv": "benzemek"
    },
    "praesens": {
      "de": "er gleicht",
      "lv": "o benzer"
    },
    "imperfektIndikativ": {
      "de": "er glich",
      "lv": "o benzedi"
    },
    "imperfektKonjunktiv": {
      "de": "er gliche",
      "lv": "o benzerdi"
    },
    "partizipVergangenheit": {
      "de": "geglichen",
      "lv": "benzemiş"
    }
  },
  {
    "infinitiv": {
      "de": "gleiten",
      "lv": "kaymak"
    },
    "praesens": {
      "de": "er gleitet",
      "lv": "o kayar"
    },
    "imperfektIndikativ": {
      "de": "er glitt",
      "lv": "o kaydı"
    },
    "imperfektKonjunktiv": {
      "de": "er glitte",
      "lv": "o kayardı"
    },
    "partizipVergangenheit": {
      "de": "geglitten (er ist)",
      "lv": "kaymış"
    }
  },
  {
    "infinitiv": {
      "de": "glimmen",
      "lv": "için için yanmak"
    },
    "praesens": {
      "de": "er glimmt",
      "lv": "o için için yanar"
    },
    "imperfektIndikativ": {
      "de": "er glimmte / glomm",
      "lv": "o için için yandı"
    },
    "imperfektKonjunktiv": {
      "de": "er glimmte",
      "lv": "o için için yanardı"
    },
    "partizipVergangenheit": {
      "de": "geglimmt / geglommen",
      "lv": "için için yanmış"
    }
  },
  {
    "infinitiv": {
      "de": "graben",
      "lv": "kazmak"
    },
    "praesens": {
      "de": "er gräbt",
      "lv": "o kazar"
    },
    "imperfektIndikativ": {
      "de": "er grub",
      "lv": "o kazdı"
    },
    "imperfektKonjunktiv": {
      "de": "er grübe",
      "lv": "o kazardı"
    },
    "partizipVergangenheit": {
      "de": "gegraben",
      "lv": "kazılmış"
    }
  },
  {
    "infinitiv": {
      "de": "greifen",
      "lv": "kavramak"
    },
    "praesens": {
      "de": "er greift",
      "lv": "o kavrar"
    },
    "imperfektIndikativ": {
      "de": "er griff",
      "lv": "o kavradı"
    },
    "imperfektKonjunktiv": {
      "de": "er griffe",
      "lv": "o kavrardı"
    },
    "partizipVergangenheit": {
      "de": "gegriffen",
      "lv": "kavranmış"
    }
  },
  {
    "infinitiv": {
      "de": "hauen",
      "lv": "doğramak"
    },
    "praesens": {
      "de": "er haut",
      "lv": "o doğrar"
    },
    "imperfektIndikativ": {
      "de": "er hieb",
      "lv": "o doğradı"
    },
    "imperfektKonjunktiv": {
      "de": "er hiebe",
      "lv": "o doğrardı"
    },
    "partizipVergangenheit": {
      "de": "gehauen",
      "lv": "doğranmış"
    }
  },
  {
    "infinitiv": {
      "de": "heben",
      "lv": "kaldırmak"
    },
    "praesens": {
      "de": "er hebt",
      "lv": "o kaldırır"
    },
    "imperfektIndikativ": {
      "de": "er hob",
      "lv": "o kaldırdı"
    },
    "imperfektKonjunktiv": {
      "de": "er höbe",
      "lv": "o kaldırırdı"
    },
    "partizipVergangenheit": {
      "de": "gehoben",
      "lv": "kaldırılmış"
    }
  },
  {
    "infinitiv": {
      "de": "kennen",
      "lv": "tanımak / bilmek"
    },
    "praesens": {
      "de": "er kennt",
      "lv": "o tanır / bilir"
    },
    "imperfektIndikativ": {
      "de": "er kannte",
      "lv": "o tanıdı / bildi"
    },
    "imperfektKonjunktiv": {
      "de": "er kennte",
      "lv": "o tanırdı / bilirdi"
    },
    "partizipVergangenheit": {
      "de": "gekannt",
      "lv": "tanınmış / bilinmiş"
    }
  },
  {
    "infinitiv": {
      "de": "klingen",
      "lv": "çınlamak"
    },
    "praesens": {
      "de": "er klingt",
      "lv": "o çınlar"
    },
    "imperfektIndikativ": {
      "de": "er klang",
      "lv": "o çınladı"
    },
    "imperfektKonjunktiv": {
      "de": "er klänge",
      "lv": "o çınlardı"
    },
    "partizipVergangenheit": {
      "de": "geklungen",
      "lv": "çınlamış"
    }
  },
  {
    "infinitiv": {
      "de": "kneifen",
      "lv": "çimdiklemek"
    },
    "praesens": {
      "de": "er kneift",
      "lv": "o çimdikler"
    },
    "imperfektIndikativ": {
      "de": "er kniff",
      "lv": "o çimdikledi"
    },
    "imperfektKonjunktiv": {
      "de": "er kniffe",
      "lv": "o çimdiklerdi"
    },
    "partizipVergangenheit": {
      "de": "gekniffen",
      "lv": "çimdiklenmiş"
    }
  },
  {
    "infinitiv": {
      "de": "bleiben",
      "lv": "kalmak"
    },
    "praesens": {
      "de": "er bleibt",
      "lv": "o kalır"
    },
    "imperfektIndikativ": {
      "de": "er blieb",
      "lv": "o kaldı"
    },
    "imperfektKonjunktiv": {
      "de": "er bliebe",
      "lv": "o kalırdı"
    },
    "partizipVergangenheit": {
      "de": "geblieben (er ist)",
      "lv": "kalmış"
    }
  },
  {
    "infinitiv": {
      "de": "bleichen",
      "lv": "solmak"
    },
    "praesens": {
      "de": "er bleicht",
      "lv": "o solar"
    },
    "imperfektIndikativ": {
      "de": "er bleichte / er blich",
      "lv": "o soldu"
    },
    "imperfektKonjunktiv": {
      "de": "er bleichte / er bliche",
      "lv": "o solardı"
    },
    "partizipVergangenheit": {
      "de": "geblichen",
      "lv": "solmuş"
    }
  },
  {
    "infinitiv": {
      "de": "braten",
      "lv": "kızartmak"
    },
    "praesens": {
      "de": "er brät",
      "lv": "o kızartır"
    },
    "imperfektIndikativ": {
      "de": "er briet",
      "lv": "o kızarttı"
    },
    "imperfektKonjunktiv": {
      "de": "er briete",
      "lv": "o kızartırdı"
    },
    "partizipVergangenheit": {
      "de": "gebraten",
      "lv": "kızartılmış"
    }
  },
  {
    "infinitiv": {
      "de": "brechen",
      "lv": "kırmak"
    },
    "praesens": {
      "de": "er bricht",
      "lv": "o kırar"
    },
    "imperfektIndikativ": {
      "de": "er brach",
      "lv": "o kırdı"
    },
    "imperfektKonjunktiv": {
      "de": "er bräche",
      "lv": "o kırardı"
    },
    "partizipVergangenheit": {
      "de": "gebrochen",
      "lv": "kırılmış"
    }
  },
  {
    "infinitiv": {
      "de": "brennen",
      "lv": "yanmak"
    },
    "praesens": {
      "de": "er brennt",
      "lv": "o yanar"
    },
    "imperfektIndikativ": {
      "de": "er brannte",
      "lv": "o yandı"
    },
    "imperfektKonjunktiv": {
      "de": "er brennte",
      "lv": "o yanardı"
    },
    "partizipVergangenheit": {
      "de": "gebrannt",
      "lv": "yanmış"
    }
  },
  {
    "infinitiv": {
      "de": "bringen",
      "lv": "getirmek"
    },
    "praesens": {
      "de": "er bringt",
      "lv": "o getirir"
    },
    "imperfektIndikativ": {
      "de": "er brachte",
      "lv": "o getirdi"
    },
    "imperfektKonjunktiv": {
      "de": "er brächte",
      "lv": "o getirirdi"
    },
    "partizipVergangenheit": {
      "de": "gebracht",
      "lv": "getirilmiş"
    }
  },
  {
    "infinitiv": {
      "de": "denken",
      "lv": "düşünmek"
    },
    "praesens": {
      "de": "er denkt",
      "lv": "o düşünür"
    },
    "imperfektIndikativ": {
      "de": "er dachte",
      "lv": "o düşündü"
    },
    "imperfektKonjunktiv": {
      "de": "er dächte",
      "lv": "o düşünürdü"
    },
    "partizipVergangenheit": {
      "de": "gedacht",
      "lv": "düşünülmüş"
    }
  },
  {
    "infinitiv": {
      "de": "dingen",
      "lv": "işe almak / anlaşmak"
    },
    "praesens": {
      "de": "er dingt",
      "lv": "o işe alır / anlaşır"
    },
    "imperfektIndikativ": {
      "de": "er dingte",
      "lv": "o işe aldı / anlaştı"
    },
    "imperfektKonjunktiv": {
      "de": "er dingte",
      "lv": "o işe alırdı / anlaşırdı"
    },
    "partizipVergangenheit": {
      "de": "gedungen",
      "lv": "işe alınmış / anlaşmış"
    }
  },
  {
    "infinitiv": {
      "de": "dreschen",
      "lv": "harman dövmek"
    },
    "praesens": {
      "de": "er drischt",
      "lv": "o harman döver"
    },
    "imperfektIndikativ": {
      "de": "er drasch / er drosch",
      "lv": "o harman dövdü"
    },
    "imperfektKonjunktiv": {
      "de": "er dräsche / er drösche",
      "lv": "o harman döverdi"
    },
    "partizipVergangenheit": {
      "de": "gedroschen",
      "lv": "harman dövmüş"
    }
  },
  {
    "infinitiv": {
      "de": "dringen",
      "lv": "zorla girmek"
    },
    "praesens": {
      "de": "er dringt",
      "lv": "o zorla girer"
    },
    "imperfektIndikativ": {
      "de": "er drang",
      "lv": "o zorla girdi"
    },
    "imperfektKonjunktiv": {
      "de": "er dränge",
      "lv": "o zorla girerdi"
    },
    "partizipVergangenheit": {
      "de": "gedrungen (er ist)",
      "lv": "zorla girmiş"
    }
  },
  {
    "infinitiv": {
      "de": "dünken",
      "lv": "görünmek"
    },
    "praesens": {
      "de": "es dünkt",
      "lv": "o görünür"
    },
    "imperfektIndikativ": {
      "de": "es dünkte / es deuchte",
      "lv": "o göründü"
    },
    "imperfektKonjunktiv": {
      "de": "es dünkte / es deuchte",
      "lv": "o görünürdü"
    },
    "partizipVergangenheit": {
      "de": "gedünkt",
      "lv": "görünmüş"
    }
  },
  {
    "infinitiv": {
      "de": "dürfen",
      "lv": "izin almak"
    },
    "praesens": {
      "de": "er darf",
      "lv": "o izin alır"
    },
    "imperfektIndikativ": {
      "de": "er durfte",
      "lv": "o izin aldı"
    },
    "imperfektKonjunktiv": {
      "de": "er dürfte",
      "lv": "o izin alırdı"
    },
    "partizipVergangenheit": {
      "de": "gedurft",
      "lv": "izin almış"
    }
  },
  {
    "infinitiv": {
      "de": "empfehlen",
      "lv": "tavsiye etmek"
    },
    "praesens": {
      "de": "er empfiehlt",
      "lv": "o tavsiye eder"
    },
    "imperfektIndikativ": {
      "de": "er empfahl",
      "lv": "o tavsiye etti"
    },
    "imperfektKonjunktiv": {
      "de": "er empfähle / er empföhle",
      "lv": "o tavsiye ederdi"
    },
    "partizipVergangenheit": {
      "de": "empfohlen",
      "lv": "tavsiye edilmiş"
    }
  },
  {
    "infinitiv": {
      "de": "empfinden",
      "lv": "hissetmek"
    },
    "praesens": {
      "de": "er empfindet",
      "lv": "o hisseder"
    },
    "imperfektIndikativ": {
      "de": "er empfand",
      "lv": "o hissetti"
    },
    "imperfektKonjunktiv": {
      "de": "er empfände",
      "lv": "o hissederdi"
    },
    "partizipVergangenheit": {
      "de": "empfunden",
      "lv": "hissedilmiş"
    }
  },
  {
    "infinitiv": {
      "de": "erlöschen",
      "lv": "sönmek"
    },
    "praesens": {
      "de": "er erlischt",
      "lv": "o söner"
    },
    "imperfektIndikativ": {
      "de": "er erlosch",
      "lv": "o söndü"
    },
    "imperfektKonjunktiv": {
      "de": "er erlösche",
      "lv": "o sönerdi"
    },
    "partizipVergangenheit": {
      "de": "erloschen (er ist)",
      "lv": "sönmüş"
    }
  },
  {
    "infinitiv": {
      "de": "erschrecken",
      "lv": "korkmak"
    },
    "praesens": {
      "de": "er erschrickt",
      "lv": "o korkar"
    },
    "imperfektIndikativ": {
      "de": "er erschrak",
      "lv": "o korktu"
    },
    "imperfektKonjunktiv": {
      "de": "er erschräke",
      "lv": "o korkardı"
    },
    "partizipVergangenheit": {
      "de": "erschrocken (er ist)",
      "lv": "korkmuş"
    }
  },
  {
    "infinitiv": {
      "de": "essen",
      "lv": "yemek"
    },
    "praesens": {
      "de": "er isst",
      "lv": "o yer"
    },
    "imperfektIndikativ": {
      "de": "er aß",
      "lv": "o yedi"
    },
    "imperfektKonjunktiv": {
      "de": "er äße",
      "lv": "o yerdi"
    },
    "partizipVergangenheit": {
      "de": "gegessen",
      "lv": "yenmiş"
    }
  },
  {
    "infinitiv": {
      "de": "fahren",
      "lv": "araçla gitmek"
    },
    "praesens": {
      "de": "er fährt",
      "lv": "o araçla gider"
    },
    "imperfektIndikativ": {
      "de": "er fuhr",
      "lv": "o araçla gitti"
    },
    "imperfektKonjunktiv": {
      "de": "er führe",
      "lv": "o araçla giderdi"
    },
    "partizipVergangenheit": {
      "de": "gefahren (er ist)",
      "lv": "araçla gitmiş"
    }
  },
  {
    "infinitiv": {
      "de": "fallen",
      "lv": "düşmek"
    },
    "praesens": {
      "de": "er fällt",
      "lv": "o düşer"
    },
    "imperfektIndikativ": {
      "de": "er fiel",
      "lv": "o düştü"
    },
    "imperfektKonjunktiv": {
      "de": "er fiele",
      "lv": "o düşerdi"
    },
    "partizipVergangenheit": {
      "de": "gefallen (er ist)",
      "lv": "düşmüş"
    }
  },
  {
    "infinitiv": {
      "de": "fangen",
      "lv": "yakalamak"
    },
    "praesens": {
      "de": "er fängt",
      "lv": "o yakalar"
    },
    "imperfektIndikativ": {
      "de": "er fing",
      "lv": "o yakaladı"
    },
    "imperfektKonjunktiv": {
      "de": "er finge",
      "lv": "o yakalardı"
    },
    "partizipVergangenheit": {
      "de": "gefangen",
      "lv": "yakalanmış"
    }
  },
  {
    "infinitiv": {
      "de": "finden",
      "lv": "bulmak"
    },
    "praesens": {
      "de": "er findet",
      "lv": "o bulur"
    },
    "imperfektIndikativ": {
      "de": "er fand",
      "lv": "o buldu"
    },
    "imperfektKonjunktiv": {
      "de": "er fände",
      "lv": "o bulurdu"
    },
    "partizipVergangenheit": {
      "de": "gefunden",
      "lv": "bulunmuş"
    }
  },
  {
    "infinitiv": {
      "de": "fliegen",
      "lv": "uçmak"
    },
    "praesens": {
      "de": "er fliegt",
      "lv": "o uçar"
    },
    "imperfektIndikativ": {
      "de": "er flog",
      "lv": "o uçtu"
    },
    "imperfektKonjunktiv": {
      "de": "er flöge",
      "lv": "o uçardı"
    },
    "partizipVergangenheit": {
      "de": "geflogen (er ist)",
      "lv": "uçmuş"
    }
  },
  {
    "infinitiv": {
      "de": "fliehen",
      "lv": "kaçmak"
    },
    "praesens": {
      "de": "er flieht",
      "lv": "o kaçar"
    },
    "imperfektIndikativ": {
      "de": "er floh",
      "lv": "o kaçtı"
    },
    "imperfektKonjunktiv": {
      "de": "er flöhe",
      "lv": "o kaçardı"
    },
    "partizipVergangenheit": {
      "de": "geflohen (er ist)",
      "lv": "kaçmış"
    }
  },
  {
    "infinitiv": {
      "de": "fließen",
      "lv": "akmak"
    },
    "praesens": {
      "de": "er fließt",
      "lv": "o akar"
    },
    "imperfektIndikativ": {
      "de": "er floss",
      "lv": "o aktı"
    },
    "imperfektKonjunktiv": {
      "de": "er flösse",
      "lv": "o akardı"
    },
    "partizipVergangenheit": {
      "de": "geflossen (er ist)",
      "lv": "akmış"
    }
  },
  {
    "infinitiv": {
      "de": "fressen",
      "lv": "yemek / yutmak"
    },
    "praesens": {
      "de": "er frisst",
      "lv": "o yer / yutar"
    },
    "imperfektIndikativ": {
      "de": "er fraß",
      "lv": "o yedi / yuttu"
    },
    "imperfektKonjunktiv": {
      "de": "er fräße",
      "lv": "o yerdi / yutardı"
    },
    "partizipVergangenheit": {
      "de": "gefressen",
      "lv": "yenmiş / yutulmuş"
    }
  },
  {
    "infinitiv": {
      "de": "frieren",
      "lv": "üşümek"
    },
    "praesens": {
      "de": "er friert",
      "lv": "o üşür"
    },
    "imperfektIndikativ": {
      "de": "er fror",
      "lv": "o üşüdü"
    },
    "imperfektKonjunktiv": {
      "de": "er fröre",
      "lv": "o üşürdü"
    },
    "partizipVergangenheit": {
      "de": "gefroren",
      "lv": "üşümüş"
    }
  },
  {
    "infinitiv": {
      "de": "geben",
      "lv": "vermek"
    },
    "praesens": {
      "de": "er gibt",
      "lv": "o verir"
    },
    "imperfektIndikativ": {
      "de": "er gab",
      "lv": "o verdi"
    },
    "imperfektKonjunktiv": {
      "de": "er gäbe",
      "lv": "o verirdi"
    },
    "partizipVergangenheit": {
      "de": "gegeben",
      "lv": "verilmiş"
    }
  },
  {
    "infinitiv": {
      "de": "gedeihen",
      "lv": "gelişmek"
    },
    "praesens": {
      "de": "er gedeiht",
      "lv": "o gelişir"
    },
    "imperfektIndikativ": {
      "de": "er gedieh",
      "lv": "o gelişti"
    },
    "imperfektKonjunktiv": {
      "de": "er gediehe",
      "lv": "o gelişirdi"
    },
    "partizipVergangenheit": {
      "de": "gediehen (er ist)",
      "lv": "gelişmiş"
    }
  },
  {
    "infinitiv": {
      "de": "gehen",
      "lv": "gitmek"
    },
    "praesens": {
      "de": "er geht",
      "lv": "o gider"
    },
    "imperfektIndikativ": {
      "de": "er ging",
      "lv": "o gitti"
    },
    "imperfektKonjunktiv": {
      "de": "er ginge",
      "lv": "o giderdi"
    },
    "partizipVergangenheit": {
      "de": "gegangen (er ist)",
      "lv": "gitmiş"
    }
  },
  {
    "infinitiv": {
      "de": "gewinnen",
      "lv": "kazanmak"
    },
    "praesens": {
      "de": "er gewinnt",
      "lv": "o kazanır"
    },
    "imperfektIndikativ": {
      "de": "er gewann",
      "lv": "o kazandı"
    },
    "imperfektKonjunktiv": {
      "de": "er gewönne / er gewänne",
      "lv": "o kazanırdı"
    },
    "partizipVergangenheit": {
      "de": "gewonnen",
      "lv": "kazanılmış"
    }
  },
  {
    "infinitiv": {
      "de": "haben",
      "lv": "sahip olmak"
    },
    "praesens": {
      "de": "er hat",
      "lv": "o sahip olur"
    },
    "imperfektIndikativ": {
      "de": "er hatte",
      "lv": "o sahip oldu"
    },
    "imperfektKonjunktiv": {
      "de": "er hätte",
      "lv": "o sahip olurdu"
    },
    "partizipVergangenheit": {
      "de": "gehabt",
      "lv": "sahip olmuş"
    }
  },
  {
    "infinitiv": {
      "de": "halten",
      "lv": "tutmak"
    },
    "praesens": {
      "de": "er hält",
      "lv": "o tutar"
    },
    "imperfektIndikativ": {
      "de": "er hielt",
      "lv": "o tuttu"
    },
    "imperfektKonjunktiv": {
      "de": "er hielte",
      "lv": "o tutardı"
    },
    "partizipVergangenheit": {
      "de": "gehalten",
      "lv": "tutulmuş"
    }
  },
  {
    "infinitiv": {
      "de": "heißen",
      "lv": "ad vermek / denmek"
    },
    "praesens": {
      "de": "er heißt",
      "lv": "o ad verir / denir"
    },
    "imperfektIndikativ": {
      "de": "er hieß",
      "lv": "o ad verdi / dendi"
    },
    "imperfektKonjunktiv": {
      "de": "er hieße",
      "lv": "o ad verirdi / denirdi"
    },
    "partizipVergangenheit": {
      "de": "geheißen",
      "lv": "ad verilmiş / denmiş"
    }
  },
  {
    "infinitiv": {
      "de": "helfen",
      "lv": "yardım etmek"
    },
    "praesens": {
      "de": "er hilft",
      "lv": "o yardım eder"
    },
    "imperfektIndikativ": {
      "de": "er half",
      "lv": "o yardım etti"
    },
    "imperfektKonjunktiv": {
      "de": "er hülfe / er hälfe",
      "lv": "o yardım ederdi"
    },
    "partizipVergangenheit": {
      "de": "geholfen",
      "lv": "yardım etmiş"
    }
  },
  {
    "infinitiv": {
      "de": "kommen",
      "lv": "gelmek"
    },
    "praesens": {
      "de": "er kommt",
      "lv": "o gelir"
    },
    "imperfektIndikativ": {
      "de": "er kam",
      "lv": "o geldi"
    },
    "imperfektKonjunktiv": {
      "de": "er käme",
      "lv": "o gelirdi"
    },
    "partizipVergangenheit": {
      "de": "gekommen (er ist)",
      "lv": "gelmiş"
    }
  },
  {
    "infinitiv": {
      "de": "können",
      "lv": "yapabilmek"
    },
    "praesens": {
      "de": "er kann",
      "lv": "o yapabilir"
    },
    "imperfektIndikativ": {
      "de": "er konnte",
      "lv": "o yapabildi"
    },
    "imperfektKonjunktiv": {
      "de": "er könnte",
      "lv": "o yapabilirdi"
    },
    "partizipVergangenheit": {
      "de": "gekonnt",
      "lv": "yapabilmiş"
    }
  },
  {
    "infinitiv": {
      "de": "kriechen",
      "lv": "sürünmek"
    },
    "praesens": {
      "de": "er kriecht",
      "lv": "o sürünür"
    },
    "imperfektIndikativ": {
      "de": "er kroch",
      "lv": "o süründü"
    },
    "imperfektKonjunktiv": {
      "de": "er kröche",
      "lv": "o sürünürdü"
    },
    "partizipVergangenheit": {
      "de": "gekrochen (er ist)",
      "lv": "sürünmüş"
    }
  },
  {
    "infinitiv": {
      "de": "laden",
      "lv": "yüklemek / davet etmek"
    },
    "praesens": {
      "de": "er lädt",
      "lv": "o yükler / davet eder"
    },
    "imperfektIndikativ": {
      "de": "er lud",
      "lv": "o yükledi / davet etti"
    },
    "imperfektKonjunktiv": {
      "de": "er lüde",
      "lv": "o yüklerdi / davet ederdi"
    },
    "partizipVergangenheit": {
      "de": "geladen",
      "lv": "yüklenmiş / davet edilmiş"
    }
  },
  {
    "infinitiv": {
      "de": "lassen",
      "lv": "yaptırmak / izin vermek"
    },
    "praesens": {
      "de": "er lässt",
      "lv": "o yaptırır / izin verir"
    },
    "imperfektIndikativ": {
      "de": "er ließ",
      "lv": "o yaptırdı / izin verdi"
    },
    "imperfektKonjunktiv": {
      "de": "er ließe",
      "lv": "o yaptırırdı / izin verirdi"
    },
    "partizipVergangenheit": {
      "de": "gelassen",
      "lv": "yaptırılmış / izin verilmiş"
    }
  },
  {
    "infinitiv": {
      "de": "laufen",
      "lv": "koşmak"
    },
    "praesens": {
      "de": "er läuft",
      "lv": "o koşar"
    },
    "imperfektIndikativ": {
      "de": "er lief",
      "lv": "o koştu"
    },
    "imperfektKonjunktiv": {
      "de": "er liefe",
      "lv": "o koşardı"
    },
    "partizipVergangenheit": {
      "de": "gelaufen (er ist)",
      "lv": "koşmuş"
    }
  },
  {
    "infinitiv": {
      "de": "leiden",
      "lv": "acı çekmek"
    },
    "praesens": {
      "de": "er leidet",
      "lv": "o acı çeker"
    },
    "imperfektIndikativ": {
      "de": "er litt",
      "lv": "o acı çekti"
    },
    "imperfektKonjunktiv": {
      "de": "er litte",
      "lv": "o acı çekerdi"
    },
    "partizipVergangenheit": {
      "de": "gelitten",
      "lv": "acı çekmiş"
    }
  },
  {
    "infinitiv": {
      "de": "leihen",
      "lv": "ödünç vermek / ödünç almak"
    },
    "praesens": {
      "de": "er leiht",
      "lv": "o ödünç verir / ödünç alır"
    },
    "imperfektIndikativ": {
      "de": "er lieh",
      "lv": "o ödünç verdi / ödünç aldı"
    },
    "imperfektKonjunktiv": {
      "de": "er liehe",
      "lv": "o ödünç verirdi / ödünç alırdı"
    },
    "partizipVergangenheit": {
      "de": "geliehen",
      "lv": "ödünç verilmiş / ödünç alınmış"
    }
  },
  {
    "infinitiv": {
      "de": "lesen",
      "lv": "okumak"
    },
    "praesens": {
      "de": "er liest",
      "lv": "o okur"
    },
    "imperfektIndikativ": {
      "de": "er las",
      "lv": "o okudu"
    },
    "imperfektKonjunktiv": {
      "de": "er läse",
      "lv": "o okurdu"
    },
    "partizipVergangenheit": {
      "de": "gelesen",
      "lv": "okunmuş"
    }
  },
  {
    "infinitiv": {
      "de": "liegen",
      "lv": "yatmak"
    },
    "praesens": {
      "de": "er liegt",
      "lv": "o yatar"
    },
    "imperfektIndikativ": {
      "de": "er lag",
      "lv": "o yattı"
    },
    "imperfektKonjunktiv": {
      "de": "er läge",
      "lv": "o yatardı"
    },
    "partizipVergangenheit": {
      "de": "gelegen",
      "lv": "yatmış"
    }
  },
  {
    "infinitiv": {
      "de": "lügen",
      "lv": "yalan söylemek"
    },
    "praesens": {
      "de": "er lügt",
      "lv": "o yalan söyler"
    },
    "imperfektIndikativ": {
      "de": "er log",
      "lv": "o yalan söyledi"
    },
    "imperfektKonjunktiv": {
      "de": "er löge",
      "lv": "o yalan söylerdi"
    },
    "partizipVergangenheit": {
      "de": "gelogen",
      "lv": "yalan söylemiş"
    }
  },
  {
    "infinitiv": {
      "de": "mahlen",
      "lv": "öğütmek"
    },
    "praesens": {
      "de": "er mahlt",
      "lv": "o öğütür"
    },
    "imperfektIndikativ": {
      "de": "er mahlte",
      "lv": "o öğüttü"
    },
    "imperfektKonjunktiv": {
      "de": "er malte",
      "lv": "o öğütürdü"
    },
    "partizipVergangenheit": {
      "de": "gemahlen",
      "lv": "öğütülmüş"
    }
  },
  {
    "infinitiv": {
      "de": "meiden",
      "lv": "kaçınmak"
    },
    "praesens": {
      "de": "er meidet",
      "lv": "o kaçınır"
    },
    "imperfektIndikativ": {
      "de": "er mied",
      "lv": "o kaçındı"
    },
    "imperfektKonjunktiv": {
      "de": "er miede",
      "lv": "o kaçınırdı"
    },
    "partizipVergangenheit": {
      "de": "gemieden",
      "lv": "kaçınmış"
    }
  },
  {
    "infinitiv": {
      "de": "melken",
      "lv": "sağmak"
    },
    "praesens": {
      "de": "er milkt / er melkt",
      "lv": "o sağar"
    },
    "imperfektIndikativ": {
      "de": "er molk / er melkte",
      "lv": "o sağdı"
    },
    "imperfektKonjunktiv": {
      "de": "er mölke / er melkte",
      "lv": "o sağardı"
    },
    "partizipVergangenheit": {
      "de": "gemolken / gemelkt",
      "lv": "sağılmış"
    }
  },
  {
    "infinitiv": {
      "de": "messen",
      "lv": "ölçmek"
    },
    "praesens": {
      "de": "er misst",
      "lv": "o ölçer"
    },
    "imperfektIndikativ": {
      "de": "er maß",
      "lv": "o ölçtü"
    },
    "imperfektKonjunktiv": {
      "de": "er mäße",
      "lv": "o ölçerdi"
    },
    "partizipVergangenheit": {
      "de": "gemessen",
      "lv": "ölçülmüş"
    }
  },
  {
    "infinitiv": {
      "de": "misslingen",
      "lv": "başarısız olmak"
    },
    "praesens": {
      "de": "es misslingt",
      "lv": "o başarısız olur"
    },
    "imperfektIndikativ": {
      "de": "es misslang",
      "lv": "o başarısız oldu"
    },
    "imperfektKonjunktiv": {
      "de": "es misslänge",
      "lv": "o başarısız olurdu"
    },
    "partizipVergangenheit": {
      "de": "misslungen",
      "lv": "başarısız olmuş"
    }
  },
  {
    "infinitiv": {
      "de": "mögen",
      "lv": "hoşlanmak"
    },
    "praesens": {
      "de": "er mag",
      "lv": "o hoşlanır"
    },
    "imperfektIndikativ": {
      "de": "er mochte",
      "lv": "o hoşlandı"
    },
    "imperfektKonjunktiv": {
      "de": "er möchte",
      "lv": "o hoşlanırdı"
    },
    "partizipVergangenheit": {
      "de": "gemocht",
      "lv": "hoşlanmış"
    }
  },
  {
    "infinitiv": {
      "de": "müssen",
      "lv": "zorunda kalmak"
    },
    "praesens": {
      "de": "er muss",
      "lv": "o zorunda kalır"
    },
    "imperfektIndikativ": {
      "de": "er musste",
      "lv": "o zorunda kaldı"
    },
    "imperfektKonjunktiv": {
      "de": "er müsste",
      "lv": "o zorunda kalırdı"
    },
    "partizipVergangenheit": {
      "de": "gemusst",
      "lv": "zorunda kalmış"
    }
  },
  {
    "infinitiv": {
      "de": "nehmen",
      "lv": "almak"
    },
    "praesens": {
      "de": "er nimmt",
      "lv": "o alır"
    },
    "imperfektIndikativ": {
      "de": "er nahm",
      "lv": "o aldı"
    },
    "imperfektKonjunktiv": {
      "de": "er nähme",
      "lv": "o alırdı"
    },
    "partizipVergangenheit": {
      "de": "genommen",
      "lv": "alınmış"
    }
  },
  {
    "infinitiv": {
      "de": "nennen",
      "lv": "adlandırmak"
    },
    "praesens": {
      "de": "er nennt",
      "lv": "o adlandırır"
    },
    "imperfektIndikativ": {
      "de": "er nannte",
      "lv": "o adlandırdı"
    },
    "imperfektKonjunktiv": {
      "de": "er nennte",
      "lv": "o adlandırırdı"
    },
    "partizipVergangenheit": {
      "de": "genannt",
      "lv": "adlandırılmış"
    }
  },
  {
    "infinitiv": {
      "de": "pfeifen",
      "lv": "ıslık çalmak"
    },
    "praesens": {
      "de": "er pfeift",
      "lv": "o ıslık çalar"
    },
    "imperfektIndikativ": {
      "de": "er pfiff",
      "lv": "o ıslık çaldı"
    },
    "imperfektKonjunktiv": {
      "de": "er pfiffe",
      "lv": "o ıslık çalardı"
    },
    "partizipVergangenheit": {
      "de": "gepfiffen",
      "lv": "ıslık çalmış"
    }
  },
  {
    "infinitiv": {
      "de": "pflegen",
      "lv": "bakmak"
    },
    "praesens": {
      "de": "er pflegt",
      "lv": "o bakar"
    },
    "imperfektIndikativ": {
      "de": "er pflegte / er pflog",
      "lv": "o baktı"
    },
    "imperfektKonjunktiv": {
      "de": "er pflegte / er pflöge",
      "lv": "o bakardı"
    },
    "partizipVergangenheit": {
      "de": "gepflegt / gepflogen",
      "lv": "bakılmış"
    }
  },
  {
    "infinitiv": {
      "de": "preisen",
      "lv": "övmek"
    },
    "praesens": {
      "de": "er preist",
      "lv": "o över"
    },
    "imperfektIndikativ": {
      "de": "er pries",
      "lv": "o övdü"
    },
    "imperfektKonjunktiv": {
      "de": "er priese",
      "lv": "o överdi"
    },
    "partizipVergangenheit": {
      "de": "gepriesen",
      "lv": "övülmüş"
    }
  },
  {
    "infinitiv": {
      "de": "quellen",
      "lv": "kabarmak"
    },
    "praesens": {
      "de": "er quillt",
      "lv": "o kabarır"
    },
    "imperfektIndikativ": {
      "de": "er quoll",
      "lv": "o kabardı"
    },
    "imperfektKonjunktiv": {
      "de": "er quölle",
      "lv": "o kabarırdı"
    },
    "partizipVergangenheit": {
      "de": "gequollen (er ist)",
      "lv": "kabarmış"
    }
  },
  {
    "infinitiv": {
      "de": "raten",
      "lv": "öğütlemek / tahmin etmek"
    },
    "praesens": {
      "de": "er rät",
      "lv": "o öğütler / tahmin eder"
    },
    "imperfektIndikativ": {
      "de": "er riet",
      "lv": "o öğütledi / tahmin etti"
    },
    "imperfektKonjunktiv": {
      "de": "er riete",
      "lv": "o öğütlerdi / tahmin ederdi"
    },
    "partizipVergangenheit": {
      "de": "geraten",
      "lv": "öğütlenmiş / tahmin edilmiş"
    }
  },
  {
    "infinitiv": {
      "de": "reiben",
      "lv": "ovmak"
    },
    "praesens": {
      "de": "er reibt",
      "lv": "o ovar"
    },
    "imperfektIndikativ": {
      "de": "er rieb",
      "lv": "o ovdu"
    },
    "imperfektKonjunktiv": {
      "de": "er riebe",
      "lv": "o ovardı"
    },
    "partizipVergangenheit": {
      "de": "gerieben",
      "lv": "ovulmuş"
    }
  },
  {
    "infinitiv": {
      "de": "reißen",
      "lv": "yırtmak"
    },
    "praesens": {
      "de": "er reißt",
      "lv": "o yırtar"
    },
    "imperfektIndikativ": {
      "de": "er riss",
      "lv": "o yırttı"
    },
    "imperfektKonjunktiv": {
      "de": "er risse",
      "lv": "o yırtardı"
    },
    "partizipVergangenheit": {
      "de": "gerissen",
      "lv": "yırtılmış"
    }
  },
  {
    "infinitiv": {
      "de": "reiten",
      "lv": "ata binmek"
    },
    "praesens": {
      "de": "er reitet",
      "lv": "o ata biner"
    },
    "imperfektIndikativ": {
      "de": "er ritt",
      "lv": "o ata bindi"
    },
    "imperfektKonjunktiv": {
      "de": "er ritte",
      "lv": "o ata binerdi"
    },
    "partizipVergangenheit": {
      "de": "geritten (er ist)",
      "lv": "ata binmiş"
    }
  },
  {
    "infinitiv": {
      "de": "rennen",
      "lv": "hızla koşmak"
    },
    "praesens": {
      "de": "er rennt",
      "lv": "o hızla koşar"
    },
    "imperfektIndikativ": {
      "de": "er rannte",
      "lv": "o hızla koştu"
    },
    "imperfektKonjunktiv": {
      "de": "er rennte",
      "lv": "o hızla koşardı"
    },
    "partizipVergangenheit": {
      "de": "gerannt",
      "lv": "hızla koşmuş"
    }
  },
  {
    "infinitiv": {
      "de": "riechen",
      "lv": "koklamak"
    },
    "praesens": {
      "de": "er riecht",
      "lv": "o koklar"
    },
    "imperfektIndikativ": {
      "de": "er roch",
      "lv": "o kokladı"
    },
    "imperfektKonjunktiv": {
      "de": "er röche",
      "lv": "o koklardı"
    },
    "partizipVergangenheit": {
      "de": "gerochen",
      "lv": "koklamış"
    }
  },
  {
    "infinitiv": {
      "de": "ringen",
      "lv": "güreşmek"
    },
    "praesens": {
      "de": "er ringt",
      "lv": "o güreşir"
    },
    "imperfektIndikativ": {
      "de": "er rang",
      "lv": "o güreşti"
    },
    "imperfektKonjunktiv": {
      "de": "er ränge",
      "lv": "o güreşirdi"
    },
    "partizipVergangenheit": {
      "de": "gerungen",
      "lv": "güreşmiş"
    }
  },
  {
    "infinitiv": {
      "de": "rinnen",
      "lv": "süzülmek"
    },
    "praesens": {
      "de": "er rinnt",
      "lv": "o süzülür"
    },
    "imperfektIndikativ": {
      "de": "er rann",
      "lv": "o süzüldü"
    },
    "imperfektKonjunktiv": {
      "de": "er ränne / er rönne",
      "lv": "o süzülürdü"
    },
    "partizipVergangenheit": {
      "de": "geronnen (er ist)",
      "lv": "süzülmüş"
    }
  },
  {
    "infinitiv": {
      "de": "rufen",
      "lv": "çağırmak"
    },
    "praesens": {
      "de": "er ruft",
      "lv": "o çağırır"
    },
    "imperfektIndikativ": {
      "de": "er rief",
      "lv": "o çağırdı"
    },
    "imperfektKonjunktiv": {
      "de": "er riefe",
      "lv": "o çağırırdı"
    },
    "partizipVergangenheit": {
      "de": "gerufen",
      "lv": "çağrılmış"
    }
  },
  {
    "infinitiv": {
      "de": "salzen",
      "lv": "tuzlamak"
    },
    "praesens": {
      "de": "er salzt",
      "lv": "o tuzlar"
    },
    "imperfektIndikativ": {
      "de": "er salzte",
      "lv": "o tuzladı"
    },
    "imperfektKonjunktiv": {
      "de": "er salzte",
      "lv": "o tuzlardı"
    },
    "partizipVergangenheit": {
      "de": "gesalzen",
      "lv": "tuzlanmış"
    }
  },
  {
    "infinitiv": {
      "de": "saufen",
      "lv": "içmek"
    },
    "praesens": {
      "de": "er säuft",
      "lv": "o içer"
    },
    "imperfektIndikativ": {
      "de": "er soff",
      "lv": "o içti"
    },
    "imperfektKonjunktiv": {
      "de": "er söffe",
      "lv": "o içerdi"
    },
    "partizipVergangenheit": {
      "de": "gesoffen",
      "lv": "içilmiş"
    }
  },
  {
    "infinitiv": {
      "de": "saugen",
      "lv": "emmek"
    },
    "praesens": {
      "de": "er saugt",
      "lv": "o emer"
    },
    "imperfektIndikativ": {
      "de": "er sog",
      "lv": "o emdi"
    },
    "imperfektKonjunktiv": {
      "de": "er söge",
      "lv": "o emerdi"
    },
    "partizipVergangenheit": {
      "de": "gesogen",
      "lv": "emilmiş"
    }
  },
  {
    "infinitiv": {
      "de": "schaffen",
      "lv": "yaratmak"
    },
    "praesens": {
      "de": "er schafft",
      "lv": "o yaratır"
    },
    "imperfektIndikativ": {
      "de": "er schuf",
      "lv": "o yarattı"
    },
    "imperfektKonjunktiv": {
      "de": "er schüfe",
      "lv": "o yaratırdı"
    },
    "partizipVergangenheit": {
      "de": "geschaffen",
      "lv": "yaratılmış"
    }
  },
  {
    "infinitiv": {
      "de": "schallen",
      "lv": "yankılanmak"
    },
    "praesens": {
      "de": "es schallt",
      "lv": "o yankılanır"
    },
    "imperfektIndikativ": {
      "de": "es schallte / es scholl",
      "lv": "o yankılandı"
    },
    "imperfektKonjunktiv": {
      "de": "es schallte / es schölle",
      "lv": "o yankılanırdı"
    },
    "partizipVergangenheit": {
      "de": "geschallt",
      "lv": "yankılanmış"
    }
  },
  {
    "infinitiv": {
      "de": "scheiden",
      "lv": "ayırmak / ayrılmak"
    },
    "praesens": {
      "de": "er scheidet",
      "lv": "o ayırır / ayrılır"
    },
    "imperfektIndikativ": {
      "de": "er schied",
      "lv": "o ayırdı / ayrıldı"
    },
    "imperfektKonjunktiv": {
      "de": "er schiede",
      "lv": "o ayırırdı / ayrılırdı"
    },
    "partizipVergangenheit": {
      "de": "geschieden (er hat / er ist)",
      "lv": "ayrılmış / ayrılmış"
    }
  },
  {
    "infinitiv": {
      "de": "scheinen",
      "lv": "parlamak / görünmek"
    },
    "praesens": {
      "de": "er scheint",
      "lv": "o parlar / görünür"
    },
    "imperfektIndikativ": {
      "de": "er schien",
      "lv": "o parladı / göründü"
    },
    "imperfektKonjunktiv": {
      "de": "er schiene",
      "lv": "o parlardı / görünürdü"
    },
    "partizipVergangenheit": {
      "de": "geschienen",
      "lv": "parlamış / görünmüş"
    }
  },
  {
    "infinitiv": {
      "de": "schelten",
      "lv": "azarlamak"
    },
    "praesens": {
      "de": "er schilt",
      "lv": "o azarlar"
    },
    "imperfektIndikativ": {
      "de": "er schalt",
      "lv": "o azarladı"
    },
    "imperfektKonjunktiv": {
      "de": "er schölte / er schälte",
      "lv": "o azarlardı"
    },
    "partizipVergangenheit": {
      "de": "gescholten",
      "lv": "azarlanmış"
    }
  },
  {
    "infinitiv": {
      "de": "scheren",
      "lv": "kırkmak"
    },
    "praesens": {
      "de": "er schert",
      "lv": "o kırkar"
    },
    "imperfektIndikativ": {
      "de": "er schor / er scherte",
      "lv": "o kırktı"
    },
    "imperfektKonjunktiv": {
      "de": "er schöre / er scherte",
      "lv": "o kırkardı"
    },
    "partizipVergangenheit": {
      "de": "geschoren / geschert",
      "lv": "kırkılmış"
    }
  },
  {
    "infinitiv": {
      "de": "schieben",
      "lv": "itmek"
    },
    "praesens": {
      "de": "er schiebt",
      "lv": "o iter"
    },
    "imperfektIndikativ": {
      "de": "er schob",
      "lv": "o itti"
    },
    "imperfektKonjunktiv": {
      "de": "er schöbe",
      "lv": "o iterdi"
    },
    "partizipVergangenheit": {
      "de": "geschoben",
      "lv": "itilmiş"
    }
  },
  {
    "infinitiv": {
      "de": "schießen",
      "lv": "ateş etmek"
    },
    "praesens": {
      "de": "er schießt",
      "lv": "o ateş eder"
    },
    "imperfektIndikativ": {
      "de": "er schoss",
      "lv": "o ateş etti"
    },
    "imperfektKonjunktiv": {
      "de": "er schösse",
      "lv": "o ateş ederdi"
    },
    "partizipVergangenheit": {
      "de": "geschossen",
      "lv": "ateş etmiş"
    }
  },
  {
    "infinitiv": {
      "de": "schinden",
      "lv": "eziyet etmek"
    },
    "praesens": {
      "de": "er schindet",
      "lv": "o eziyet eder"
    },
    "imperfektIndikativ": {
      "de": "er schindete",
      "lv": "o eziyet etti"
    },
    "imperfektKonjunktiv": {
      "de": "er schindete",
      "lv": "o eziyet ederdi"
    },
    "partizipVergangenheit": {
      "de": "geschunden",
      "lv": "eziyet etmiş"
    }
  },
  {
    "infinitiv": {
      "de": "schlafen",
      "lv": "uyumak"
    },
    "praesens": {
      "de": "er schläft",
      "lv": "o uyur"
    },
    "imperfektIndikativ": {
      "de": "er schlief",
      "lv": "o uyudu"
    },
    "imperfektKonjunktiv": {
      "de": "er schliefe",
      "lv": "o uyurdu"
    },
    "partizipVergangenheit": {
      "de": "geschlafen",
      "lv": "uyumuş"
    }
  },
  {
    "infinitiv": {
      "de": "schlagen",
      "lv": "vurmak"
    },
    "praesens": {
      "de": "er schlägt",
      "lv": "o vurur"
    },
    "imperfektIndikativ": {
      "de": "er schlug",
      "lv": "o vurdu"
    },
    "imperfektKonjunktiv": {
      "de": "er schlüge",
      "lv": "o vururdu"
    },
    "partizipVergangenheit": {
      "de": "geschlagen",
      "lv": "vurulmuş"
    }
  },
  {
    "infinitiv": {
      "de": "schleichen",
      "lv": "sessizce ilerlemek"
    },
    "praesens": {
      "de": "er schleicht",
      "lv": "o sessizce ilerler"
    },
    "imperfektIndikativ": {
      "de": "er schlich",
      "lv": "o sessizce ilerledi"
    },
    "imperfektKonjunktiv": {
      "de": "er schliche",
      "lv": "o sessizce ilerlerdi"
    },
    "partizipVergangenheit": {
      "de": "geschlichen (er ist)",
      "lv": "sessizce ilerlemiş"
    }
  },
  {
    "infinitiv": {
      "de": "schleifen",
      "lv": "bilemek"
    },
    "praesens": {
      "de": "er schleift",
      "lv": "o biler"
    },
    "imperfektIndikativ": {
      "de": "er schliff",
      "lv": "o biledi"
    },
    "imperfektKonjunktiv": {
      "de": "er schliffe",
      "lv": "o bilerdi"
    },
    "partizipVergangenheit": {
      "de": "geschliffen",
      "lv": "bilenmiş"
    }
  },
  {
    "infinitiv": {
      "de": "schließen",
      "lv": "kapatmak"
    },
    "praesens": {
      "de": "er schließt",
      "lv": "o kapatır"
    },
    "imperfektIndikativ": {
      "de": "er schloss",
      "lv": "o kapattı"
    },
    "imperfektKonjunktiv": {
      "de": "er schlösse",
      "lv": "o kapatırdı"
    },
    "partizipVergangenheit": {
      "de": "geschlossen",
      "lv": "kapatılmış"
    }
  },
  {
    "infinitiv": {
      "de": "schlingen",
      "lv": "yutmak"
    },
    "praesens": {
      "de": "er schlingt",
      "lv": "o yutar"
    },
    "imperfektIndikativ": {
      "de": "er schlang",
      "lv": "o yuttu"
    },
    "imperfektKonjunktiv": {
      "de": "er schlänge",
      "lv": "o yutardı"
    },
    "partizipVergangenheit": {
      "de": "geschlungen",
      "lv": "yutulmuş"
    }
  },
  {
    "infinitiv": {
      "de": "schmeißen",
      "lv": "fırlatmak"
    },
    "praesens": {
      "de": "er schmeißt",
      "lv": "o fırlatır"
    },
    "imperfektIndikativ": {
      "de": "er schmiss",
      "lv": "o fırlattı"
    },
    "imperfektKonjunktiv": {
      "de": "er schmisse",
      "lv": "o fırlatırdı"
    },
    "partizipVergangenheit": {
      "de": "geschmissen",
      "lv": "fırlatılmış"
    }
  },
  {
    "infinitiv": {
      "de": "schmelzen",
      "lv": "erimek"
    },
    "praesens": {
      "de": "er schmilzt",
      "lv": "o erir"
    },
    "imperfektIndikativ": {
      "de": "er schmolz",
      "lv": "o eridi"
    },
    "imperfektKonjunktiv": {
      "de": "er schmölze",
      "lv": "o erirdi"
    },
    "partizipVergangenheit": {
      "de": "geschmolzen (er ist)",
      "lv": "erimiş"
    }
  },
  {
    "infinitiv": {
      "de": "schnauben",
      "lv": "burnundan solumak"
    },
    "praesens": {
      "de": "er schnaubt",
      "lv": "o burnundan solur"
    },
    "imperfektIndikativ": {
      "de": "er schnaubte / er schnob",
      "lv": "o burnundan soludu"
    },
    "imperfektKonjunktiv": {
      "de": "er schnaubte / er schnöbe",
      "lv": "o burnundan solurdu"
    },
    "partizipVergangenheit": {
      "de": "geschnaubt / geschnoben",
      "lv": "burnundan solumuş"
    }
  },
  {
    "infinitiv": {
      "de": "schneiden",
      "lv": "kesmek"
    },
    "praesens": {
      "de": "er schneidet",
      "lv": "o keser"
    },
    "imperfektIndikativ": {
      "de": "er schnitt",
      "lv": "o kesti"
    },
    "imperfektKonjunktiv": {
      "de": "er schnitte",
      "lv": "o keserdi"
    },
    "partizipVergangenheit": {
      "de": "geschnitten",
      "lv": "kesilmiş"
    }
  },
  {
    "infinitiv": {
      "de": "schreiben",
      "lv": "yazmak"
    },
    "praesens": {
      "de": "er schreibt",
      "lv": "o yazar"
    },
    "imperfektIndikativ": {
      "de": "er schrieb",
      "lv": "o yazdı"
    },
    "imperfektKonjunktiv": {
      "de": "er schriebe",
      "lv": "o yazardı"
    },
    "partizipVergangenheit": {
      "de": "geschrieben",
      "lv": "yazılmış"
    }
  },
  {
    "infinitiv": {
      "de": "schreien",
      "lv": "bağırmak"
    },
    "praesens": {
      "de": "er schreit",
      "lv": "o bağırır"
    },
    "imperfektIndikativ": {
      "de": "er schrie",
      "lv": "o bağırdı"
    },
    "imperfektKonjunktiv": {
      "de": "er schriee",
      "lv": "o bağırırdı"
    },
    "partizipVergangenheit": {
      "de": "geschrien",
      "lv": "bağırmış"
    }
  },
  {
    "infinitiv": {
      "de": "schreiten",
      "lv": "yürümek"
    },
    "praesens": {
      "de": "er schreitet",
      "lv": "o yürür"
    },
    "imperfektIndikativ": {
      "de": "er schritt",
      "lv": "o yürüdü"
    },
    "imperfektKonjunktiv": {
      "de": "er schritte",
      "lv": "o yürürdü"
    },
    "partizipVergangenheit": {
      "de": "geschritten (er ist)",
      "lv": "yürümüş"
    }
  },
  {
    "infinitiv": {
      "de": "schweigen",
      "lv": "susmak"
    },
    "praesens": {
      "de": "er schweigt",
      "lv": "o susar"
    },
    "imperfektIndikativ": {
      "de": "er schwieg",
      "lv": "o sustu"
    },
    "imperfektKonjunktiv": {
      "de": "er schwiege",
      "lv": "o susardı"
    },
    "partizipVergangenheit": {
      "de": "geschwiegen",
      "lv": "susmuş"
    }
  },
  {
    "infinitiv": {
      "de": "schwellen",
      "lv": "şişmek"
    },
    "praesens": {
      "de": "er schwillt",
      "lv": "o şişer"
    },
    "imperfektIndikativ": {
      "de": "er schwoll",
      "lv": "o şişti"
    },
    "imperfektKonjunktiv": {
      "de": "er schwölle",
      "lv": "o şişerdi"
    },
    "partizipVergangenheit": {
      "de": "geschwollen (er ist)",
      "lv": "şişmiş"
    }
  },
  {
    "infinitiv": {
      "de": "schwimmen",
      "lv": "yüzmek"
    },
    "praesens": {
      "de": "er schwimmt",
      "lv": "o yüzer"
    },
    "imperfektIndikativ": {
      "de": "er schwamm",
      "lv": "o yüzdü"
    },
    "imperfektKonjunktiv": {
      "de": "er schwömme / er schwämme",
      "lv": "o yüzerdi"
    },
    "partizipVergangenheit": {
      "de": "geschwommen (er ist)",
      "lv": "yüzmüş"
    }
  },
  {
    "infinitiv": {
      "de": "schwinden",
      "lv": "kaybolmak"
    },
    "praesens": {
      "de": "er schwindet",
      "lv": "o kaybolur"
    },
    "imperfektIndikativ": {
      "de": "er schwand",
      "lv": "o kayboldu"
    },
    "imperfektKonjunktiv": {
      "de": "er schwände",
      "lv": "o kaybolurdu"
    },
    "partizipVergangenheit": {
      "de": "geschwunden (er ist)",
      "lv": "kaybolmuş"
    }
  },
  {
    "infinitiv": {
      "de": "schwingen",
      "lv": "sallamak"
    },
    "praesens": {
      "de": "er schwingt",
      "lv": "o sallar"
    },
    "imperfektIndikativ": {
      "de": "er schwang",
      "lv": "o salladı"
    },
    "imperfektKonjunktiv": {
      "de": "er schwänge",
      "lv": "o sallardı"
    },
    "partizipVergangenheit": {
      "de": "geschwungen",
      "lv": "sallanmış"
    }
  },
  {
    "infinitiv": {
      "de": "schwören",
      "lv": "yemin etmek"
    },
    "praesens": {
      "de": "er schwört",
      "lv": "o yemin eder"
    },
    "imperfektIndikativ": {
      "de": "er schwur / er schwor",
      "lv": "o yemin etti"
    },
    "imperfektKonjunktiv": {
      "de": "er schwöre",
      "lv": "o yemin ederdi"
    },
    "partizipVergangenheit": {
      "de": "geschworen",
      "lv": "yemin etmiş"
    }
  },
  {
    "infinitiv": {
      "de": "sehen",
      "lv": "görmek"
    },
    "praesens": {
      "de": "er sieht",
      "lv": "o görür"
    },
    "imperfektIndikativ": {
      "de": "er sah",
      "lv": "o gördü"
    },
    "imperfektKonjunktiv": {
      "de": "er sähe",
      "lv": "o görürdü"
    },
    "partizipVergangenheit": {
      "de": "gesehen",
      "lv": "görülmüş"
    }
  },
  {
    "infinitiv": {
      "de": "sein",
      "lv": "olmak"
    },
    "praesens": {
      "de": "er ist",
      "lv": "o olur"
    },
    "imperfektIndikativ": {
      "de": "er war",
      "lv": "o oldu"
    },
    "imperfektKonjunktiv": {
      "de": "er wäre",
      "lv": "o olurdu"
    },
    "partizipVergangenheit": {
      "de": "gewesen",
      "lv": "olmuş"
    }
  },
  {
    "infinitiv": {
      "de": "senden",
      "lv": "göndermek"
    },
    "praesens": {
      "de": "er sendet",
      "lv": "o gönderir"
    },
    "imperfektIndikativ": {
      "de": "er sandte / er sendete",
      "lv": "o gönderdi"
    },
    "imperfektKonjunktiv": {
      "de": "er sendete",
      "lv": "o gönderirdi"
    },
    "partizipVergangenheit": {
      "de": "gesandt / gesendet",
      "lv": "gönderilmiş"
    }
  },
  {
    "infinitiv": {
      "de": "sieden",
      "lv": "kaynatmak"
    },
    "praesens": {
      "de": "er siedet",
      "lv": "o kaynatır"
    },
    "imperfektIndikativ": {
      "de": "er sott / er siedete",
      "lv": "o kaynattı"
    },
    "imperfektKonjunktiv": {
      "de": "er sötte / er siedete",
      "lv": "o kaynatırdı"
    },
    "partizipVergangenheit": {
      "de": "gesotten / gesiedet",
      "lv": "kaynatılmış"
    }
  },
  {
    "infinitiv": {
      "de": "singen",
      "lv": "şarkı söylemek"
    },
    "praesens": {
      "de": "er singt",
      "lv": "o şarkı söyler"
    },
    "imperfektIndikativ": {
      "de": "er sang",
      "lv": "o şarkı söyledi"
    },
    "imperfektKonjunktiv": {
      "de": "er sänge",
      "lv": "o şarkı söylerdi"
    },
    "partizipVergangenheit": {
      "de": "gesungen",
      "lv": "şarkı söylemiş"
    }
  },
  {
    "infinitiv": {
      "de": "sinken",
      "lv": "batmak"
    },
    "praesens": {
      "de": "er sinkt",
      "lv": "o batar"
    },
    "imperfektIndikativ": {
      "de": "er sank",
      "lv": "o battı"
    },
    "imperfektKonjunktiv": {
      "de": "er sänke",
      "lv": "o batardı"
    },
    "partizipVergangenheit": {
      "de": "gesunken (er ist)",
      "lv": "batmış"
    }
  },
  {
    "infinitiv": {
      "de": "sinnen",
      "lv": "düşünceye dalmak"
    },
    "praesens": {
      "de": "er sinnt",
      "lv": "o düşünceye dalar"
    },
    "imperfektIndikativ": {
      "de": "er sann",
      "lv": "o düşünceye daldı"
    },
    "imperfektKonjunktiv": {
      "de": "er sönne / er sänne",
      "lv": "o düşünceye dalardı"
    },
    "partizipVergangenheit": {
      "de": "gesonnen",
      "lv": "düşünceye dalmış"
    }
  },
  {
    "infinitiv": {
      "de": "sitzen",
      "lv": "oturmak"
    },
    "praesens": {
      "de": "er sitzt",
      "lv": "o oturur"
    },
    "imperfektIndikativ": {
      "de": "er saß",
      "lv": "o oturdu"
    },
    "imperfektKonjunktiv": {
      "de": "er säße",
      "lv": "o otururdu"
    },
    "partizipVergangenheit": {
      "de": "gesessen",
      "lv": "oturmuş"
    }
  },
  {
    "infinitiv": {
      "de": "sollen",
      "lv": "yükümlü olmak"
    },
    "praesens": {
      "de": "er soll",
      "lv": "o yükümlü olur"
    },
    "imperfektIndikativ": {
      "de": "er sollte",
      "lv": "o yükümlü oldu"
    },
    "imperfektKonjunktiv": {
      "de": "er sollte",
      "lv": "o yükümlü olurdu"
    },
    "partizipVergangenheit": {
      "de": "gesollt",
      "lv": "yükümlü olmuş"
    }
  },
  {
    "infinitiv": {
      "de": "speien",
      "lv": "tükürmek"
    },
    "praesens": {
      "de": "er speit",
      "lv": "o tükürür"
    },
    "imperfektIndikativ": {
      "de": "er spie",
      "lv": "o tükürdü"
    },
    "imperfektKonjunktiv": {
      "de": "er spie",
      "lv": "o tükürürdü"
    },
    "partizipVergangenheit": {
      "de": "gespien",
      "lv": "tükürülmüş"
    }
  },
  {
    "infinitiv": {
      "de": "spinnen",
      "lv": "eğirmek"
    },
    "praesens": {
      "de": "er spinnt",
      "lv": "o eğirir"
    },
    "imperfektIndikativ": {
      "de": "er spann",
      "lv": "o eğirdi"
    },
    "imperfektKonjunktiv": {
      "de": "er spönne / er spänne",
      "lv": "o eğirirdi"
    },
    "partizipVergangenheit": {
      "de": "gesponnen",
      "lv": "eğrilmiş"
    }
  },
  {
    "infinitiv": {
      "de": "spleißen",
      "lv": "birleştirmek"
    },
    "praesens": {
      "de": "er spleißt",
      "lv": "o birleştirir"
    },
    "imperfektIndikativ": {
      "de": "er spliss",
      "lv": "o birleştirdi"
    },
    "imperfektKonjunktiv": {
      "de": "er splisse",
      "lv": "o birleştirirdi"
    },
    "partizipVergangenheit": {
      "de": "gesplissen",
      "lv": "birleştirilmiş"
    }
  },
  {
    "infinitiv": {
      "de": "sprechen",
      "lv": "konuşmak"
    },
    "praesens": {
      "de": "er spricht",
      "lv": "o konuşur"
    },
    "imperfektIndikativ": {
      "de": "er sprach",
      "lv": "o konuştu"
    },
    "imperfektKonjunktiv": {
      "de": "er spräche",
      "lv": "o konuşurdu"
    },
    "partizipVergangenheit": {
      "de": "gesprochen",
      "lv": "konuşulmuş"
    }
  },
  {
    "infinitiv": {
      "de": "sprießen",
      "lv": "filizlenmek"
    },
    "praesens": {
      "de": "er sprießt",
      "lv": "o filizlenir"
    },
    "imperfektIndikativ": {
      "de": "er spross",
      "lv": "o filizlendi"
    },
    "imperfektKonjunktiv": {
      "de": "er sprösse",
      "lv": "o filizlenirdi"
    },
    "partizipVergangenheit": {
      "de": "gesprossen (er ist)",
      "lv": "filizlenmiş"
    }
  },
  {
    "infinitiv": {
      "de": "springen",
      "lv": "atlamak"
    },
    "praesens": {
      "de": "er springt",
      "lv": "o atlar"
    },
    "imperfektIndikativ": {
      "de": "er sprang",
      "lv": "o atladı"
    },
    "imperfektKonjunktiv": {
      "de": "er spränge",
      "lv": "o atlardı"
    },
    "partizipVergangenheit": {
      "de": "gesprungen (er ist)",
      "lv": "atlamış"
    }
  },
  {
    "infinitiv": {
      "de": "stechen",
      "lv": "saplamak"
    },
    "praesens": {
      "de": "er sticht",
      "lv": "o saplar"
    },
    "imperfektIndikativ": {
      "de": "er stach",
      "lv": "o sapladı"
    },
    "imperfektKonjunktiv": {
      "de": "er stäche",
      "lv": "o saplardı"
    },
    "partizipVergangenheit": {
      "de": "gestochen",
      "lv": "saplanmış"
    }
  },
  {
    "infinitiv": {
      "de": "stecken",
      "lv": "sokmak / takmak"
    },
    "praesens": {
      "de": "er steckt",
      "lv": "o sokar / takar"
    },
    "imperfektIndikativ": {
      "de": "er stak / er steckte",
      "lv": "o soktu / taktı"
    },
    "imperfektKonjunktiv": {
      "de": "er stäke / er steckte",
      "lv": "o sokardı / takardı"
    },
    "partizipVergangenheit": {
      "de": "gesteckt",
      "lv": "sokulmuş / takılmış"
    }
  },
  {
    "infinitiv": {
      "de": "stehen",
      "lv": "ayakta durmak"
    },
    "praesens": {
      "de": "er steht",
      "lv": "o ayakta durur"
    },
    "imperfektIndikativ": {
      "de": "er stand",
      "lv": "o ayakta durdu"
    },
    "imperfektKonjunktiv": {
      "de": "er stände / er stünde",
      "lv": "o ayakta dururdu"
    },
    "partizipVergangenheit": {
      "de": "gestanden",
      "lv": "ayakta durmuş"
    }
  },
  {
    "infinitiv": {
      "de": "stehlen",
      "lv": "çalmak"
    },
    "praesens": {
      "de": "er stiehlt",
      "lv": "o çalar"
    },
    "imperfektIndikativ": {
      "de": "er stahl",
      "lv": "o çaldı"
    },
    "imperfektKonjunktiv": {
      "de": "er stöhle / er stähle",
      "lv": "o çalardı"
    },
    "partizipVergangenheit": {
      "de": "gestohlen",
      "lv": "çalınmış"
    }
  },
  {
    "infinitiv": {
      "de": "steigen",
      "lv": "tırmanmak"
    },
    "praesens": {
      "de": "er steigt",
      "lv": "o tırmanır"
    },
    "imperfektIndikativ": {
      "de": "er stieg",
      "lv": "o tırmandı"
    },
    "imperfektKonjunktiv": {
      "de": "er stiege",
      "lv": "o tırmanırdı"
    },
    "partizipVergangenheit": {
      "de": "gestiegen (er ist)",
      "lv": "tırmanmış"
    }
  },
  {
    "infinitiv": {
      "de": "sterben",
      "lv": "ölmek"
    },
    "praesens": {
      "de": "er stirbt",
      "lv": "o ölür"
    },
    "imperfektIndikativ": {
      "de": "er starb",
      "lv": "o öldü"
    },
    "imperfektKonjunktiv": {
      "de": "er stürbe",
      "lv": "o ölürdü"
    },
    "partizipVergangenheit": {
      "de": "gestorben (er ist)",
      "lv": "ölmüş"
    }
  },
  {
    "infinitiv": {
      "de": "stinken",
      "lv": "kötü kokmak"
    },
    "praesens": {
      "de": "es stinkt",
      "lv": "o kötü kokar"
    },
    "imperfektIndikativ": {
      "de": "es stank",
      "lv": "o kötü koktu"
    },
    "imperfektKonjunktiv": {
      "de": "es stänke",
      "lv": "o kötü kokardı"
    },
    "partizipVergangenheit": {
      "de": "gestunken",
      "lv": "kötü kokmuş"
    }
  },
  {
    "infinitiv": {
      "de": "stoßen",
      "lv": "itmek"
    },
    "praesens": {
      "de": "er stößt",
      "lv": "o iter"
    },
    "imperfektIndikativ": {
      "de": "er stieß",
      "lv": "o itti"
    },
    "imperfektKonjunktiv": {
      "de": "er stieße",
      "lv": "o iterdi"
    },
    "partizipVergangenheit": {
      "de": "gestoßen",
      "lv": "itilmiş"
    }
  },
  {
    "infinitiv": {
      "de": "streichen",
      "lv": "boyamak / çizmek"
    },
    "praesens": {
      "de": "er streicht",
      "lv": "o boyar / çizer"
    },
    "imperfektIndikativ": {
      "de": "er strich",
      "lv": "o boyadı / çizdi"
    },
    "imperfektKonjunktiv": {
      "de": "er striche",
      "lv": "o boyardı / çizerdi"
    },
    "partizipVergangenheit": {
      "de": "gestrichen",
      "lv": "boyanmış / çizilmiş"
    }
  },
  {
    "infinitiv": {
      "de": "streiten",
      "lv": "tartışmak"
    },
    "praesens": {
      "de": "er streitet",
      "lv": "o tartışır"
    },
    "imperfektIndikativ": {
      "de": "er stritt",
      "lv": "o tartıştı"
    },
    "imperfektKonjunktiv": {
      "de": "er stritte",
      "lv": "o tartışırdı"
    },
    "partizipVergangenheit": {
      "de": "gestritten",
      "lv": "tartışmış"
    }
  },
  {
    "infinitiv": {
      "de": "tragen",
      "lv": "taşımak"
    },
    "praesens": {
      "de": "er trägt",
      "lv": "o taşır"
    },
    "imperfektIndikativ": {
      "de": "er trug",
      "lv": "o taşıdı"
    },
    "imperfektKonjunktiv": {
      "de": "er trüge",
      "lv": "o taşırdı"
    },
    "partizipVergangenheit": {
      "de": "getragen",
      "lv": "taşınmış"
    }
  },
  {
    "infinitiv": {
      "de": "treffen",
      "lv": "karşılaşmak"
    },
    "praesens": {
      "de": "er trifft",
      "lv": "o karşılaşır"
    },
    "imperfektIndikativ": {
      "de": "er traf",
      "lv": "o karşılaştı"
    },
    "imperfektKonjunktiv": {
      "de": "er träfe",
      "lv": "o karşılaşırdı"
    },
    "partizipVergangenheit": {
      "de": "getroffen",
      "lv": "karşılaşmış"
    }
  },
  {
    "infinitiv": {
      "de": "treiben",
      "lv": "sürmek"
    },
    "praesens": {
      "de": "er treibt",
      "lv": "o sürer"
    },
    "imperfektIndikativ": {
      "de": "er trieb",
      "lv": "o sürdü"
    },
    "imperfektKonjunktiv": {
      "de": "er triebe",
      "lv": "o sürerdi"
    },
    "partizipVergangenheit": {
      "de": "getrieben",
      "lv": "sürülmüş"
    }
  },
  {
    "infinitiv": {
      "de": "treten",
      "lv": "basmak / ilerlemek"
    },
    "praesens": {
      "de": "er tritt",
      "lv": "o basar / ilerler"
    },
    "imperfektIndikativ": {
      "de": "er trat",
      "lv": "o bastı / ilerledi"
    },
    "imperfektKonjunktiv": {
      "de": "er träte",
      "lv": "o basardı / ilerlerdi"
    },
    "partizipVergangenheit": {
      "de": "getreten (er ist)",
      "lv": "basmış / ilerlemiş"
    }
  },
  {
    "infinitiv": {
      "de": "trinken",
      "lv": "içmek"
    },
    "praesens": {
      "de": "er trinkt",
      "lv": "o içer"
    },
    "imperfektIndikativ": {
      "de": "er trank",
      "lv": "o içti"
    },
    "imperfektKonjunktiv": {
      "de": "er tränke",
      "lv": "o içerdi"
    },
    "partizipVergangenheit": {
      "de": "getrunken",
      "lv": "içilmiş"
    }
  },
  {
    "infinitiv": {
      "de": "trügen",
      "lv": "aldatmak"
    },
    "praesens": {
      "de": "er trügt",
      "lv": "o aldatır"
    },
    "imperfektIndikativ": {
      "de": "er trog",
      "lv": "o aldattı"
    },
    "imperfektKonjunktiv": {
      "de": "er tröge",
      "lv": "o aldatırdı"
    },
    "partizipVergangenheit": {
      "de": "getrogen",
      "lv": "aldatılmış"
    }
  },
  {
    "infinitiv": {
      "de": "tun",
      "lv": "yapmak"
    },
    "praesens": {
      "de": "er tut",
      "lv": "o yapar"
    },
    "imperfektIndikativ": {
      "de": "er tat",
      "lv": "o yaptı"
    },
    "imperfektKonjunktiv": {
      "de": "er täte",
      "lv": "o yapardı"
    },
    "partizipVergangenheit": {
      "de": "getan",
      "lv": "yapılmış"
    }
  },
  {
    "infinitiv": {
      "de": "verderben",
      "lv": "bozmak"
    },
    "praesens": {
      "de": "er verdirbt",
      "lv": "o bozar"
    },
    "imperfektIndikativ": {
      "de": "er verdarb",
      "lv": "o bozdu"
    },
    "imperfektKonjunktiv": {
      "de": "er verdürbe",
      "lv": "o bozardı"
    },
    "partizipVergangenheit": {
      "de": "verdorben",
      "lv": "bozulmuş"
    }
  },
  {
    "infinitiv": {
      "de": "verdrießen",
      "lv": "kızdırmak"
    },
    "praesens": {
      "de": "er verdrießt",
      "lv": "o kızdırır"
    },
    "imperfektIndikativ": {
      "de": "er verdross",
      "lv": "o kızdırdı"
    },
    "imperfektKonjunktiv": {
      "de": "er verdrösse",
      "lv": "o kızdırırdı"
    },
    "partizipVergangenheit": {
      "de": "verdrossen",
      "lv": "kızdırılmış"
    }
  },
  {
    "infinitiv": {
      "de": "vergessen",
      "lv": "unutmak"
    },
    "praesens": {
      "de": "er vergisst",
      "lv": "o unutur"
    },
    "imperfektIndikativ": {
      "de": "er vergaß",
      "lv": "o unuttu"
    },
    "imperfektKonjunktiv": {
      "de": "er vergäße",
      "lv": "o unuturdu"
    },
    "partizipVergangenheit": {
      "de": "vergessen",
      "lv": "unutulmuş"
    }
  },
  {
    "infinitiv": {
      "de": "verlieren",
      "lv": "kaybetmek"
    },
    "praesens": {
      "de": "er verliert",
      "lv": "o kaybeder"
    },
    "imperfektIndikativ": {
      "de": "er verlor",
      "lv": "o kaybetti"
    },
    "imperfektKonjunktiv": {
      "de": "er verlöre",
      "lv": "o kaybederdi"
    },
    "partizipVergangenheit": {
      "de": "verloren",
      "lv": "kaybedilmiş"
    }
  },
  {
    "infinitiv": {
      "de": "wachsen",
      "lv": "büyümek"
    },
    "praesens": {
      "de": "er wächst",
      "lv": "o büyür"
    },
    "imperfektIndikativ": {
      "de": "er wuchs",
      "lv": "o büyüdü"
    },
    "imperfektKonjunktiv": {
      "de": "er wüchse",
      "lv": "o büyürdü"
    },
    "partizipVergangenheit": {
      "de": "gewachsen (er ist)",
      "lv": "büyümüş"
    }
  },
  {
    "infinitiv": {
      "de": "waschen",
      "lv": "yıkamak"
    },
    "praesens": {
      "de": "er wäscht",
      "lv": "o yıkar"
    },
    "imperfektIndikativ": {
      "de": "er wusch",
      "lv": "o yıkadı"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsche",
      "lv": "o yıkardı"
    },
    "partizipVergangenheit": {
      "de": "gewaschen",
      "lv": "yıkanmış"
    }
  },
  {
    "infinitiv": {
      "de": "weben",
      "lv": "dokumak"
    },
    "praesens": {
      "de": "er webt",
      "lv": "o dokur"
    },
    "imperfektIndikativ": {
      "de": "er wob / er webte",
      "lv": "o dokudu"
    },
    "imperfektKonjunktiv": {
      "de": "er wöbe / er webte",
      "lv": "o dokurdu"
    },
    "partizipVergangenheit": {
      "de": "gewoben",
      "lv": "dokunmuş"
    }
  },
  {
    "infinitiv": {
      "de": "weichen",
      "lv": "geri çekilmek"
    },
    "praesens": {
      "de": "er weicht",
      "lv": "o geri çekilir"
    },
    "imperfektIndikativ": {
      "de": "er wich",
      "lv": "o geri çekildi"
    },
    "imperfektKonjunktiv": {
      "de": "er wiche",
      "lv": "o geri çekilirdi"
    },
    "partizipVergangenheit": {
      "de": "gewichen (er ist)",
      "lv": "geri çekilmiş"
    }
  },
  {
    "infinitiv": {
      "de": "weisen",
      "lv": "göstermek"
    },
    "praesens": {
      "de": "er weist",
      "lv": "o gösterir"
    },
    "imperfektIndikativ": {
      "de": "er wies",
      "lv": "o gösterdi"
    },
    "imperfektKonjunktiv": {
      "de": "er wiese",
      "lv": "o gösterirdi"
    },
    "partizipVergangenheit": {
      "de": "gewiesen",
      "lv": "gösterilmiş"
    }
  },
  {
    "infinitiv": {
      "de": "wenden",
      "lv": "döndürmek / çevirmek"
    },
    "praesens": {
      "de": "er wendet",
      "lv": "o döndürür / çevirir"
    },
    "imperfektIndikativ": {
      "de": "er wandte / es wendete",
      "lv": "o döndürdü / çevirdi"
    },
    "imperfektKonjunktiv": {
      "de": "er wendete",
      "lv": "o döndürürdü / çevirirdi"
    },
    "partizipVergangenheit": {
      "de": "gewandt / gewendet",
      "lv": "döndürülmüş / çevrilmiş"
    }
  },
  {
    "infinitiv": {
      "de": "werben",
      "lv": "kur yapmak"
    },
    "praesens": {
      "de": "er wirbt",
      "lv": "o kur yapar"
    },
    "imperfektIndikativ": {
      "de": "er warb",
      "lv": "o kur yaptı"
    },
    "imperfektKonjunktiv": {
      "de": "er würbe",
      "lv": "o kur yapardı"
    },
    "partizipVergangenheit": {
      "de": "geworben",
      "lv": "kur yapmış"
    }
  },
  {
    "infinitiv": {
      "de": "werden",
      "lv": "olmak"
    },
    "praesens": {
      "de": "er wird",
      "lv": "o olur"
    },
    "imperfektIndikativ": {
      "de": "er wurde",
      "lv": "o oldu"
    },
    "imperfektKonjunktiv": {
      "de": "er würde",
      "lv": "o olurdu"
    },
    "partizipVergangenheit": {
      "de": "geworden",
      "lv": "olmuş"
    }
  },
  {
    "infinitiv": {
      "de": "werfen",
      "lv": "atmak"
    },
    "praesens": {
      "de": "er wirft",
      "lv": "o atar"
    },
    "imperfektIndikativ": {
      "de": "er warf",
      "lv": "o attı"
    },
    "imperfektKonjunktiv": {
      "de": "er würfe",
      "lv": "o atardı"
    },
    "partizipVergangenheit": {
      "de": "geworfen",
      "lv": "atılmış"
    }
  },
  {
    "infinitiv": {
      "de": "wiegen",
      "lv": "tartmak"
    },
    "praesens": {
      "de": "er wiegt",
      "lv": "o tartar"
    },
    "imperfektIndikativ": {
      "de": "er wog",
      "lv": "o tarttı"
    },
    "imperfektKonjunktiv": {
      "de": "er wöge",
      "lv": "o tartardı"
    },
    "partizipVergangenheit": {
      "de": "gewogen",
      "lv": "tartılmış"
    }
  },
  {
    "infinitiv": {
      "de": "winden",
      "lv": "sarmak"
    },
    "praesens": {
      "de": "er windet",
      "lv": "o sarar"
    },
    "imperfektIndikativ": {
      "de": "er wand",
      "lv": "o sardı"
    },
    "imperfektKonjunktiv": {
      "de": "er wände",
      "lv": "o sarardı"
    },
    "partizipVergangenheit": {
      "de": "gewunden",
      "lv": "sarılmış"
    }
  },
  {
    "infinitiv": {
      "de": "wissen",
      "lv": "bilmek"
    },
    "praesens": {
      "de": "er weiß",
      "lv": "o bilir"
    },
    "imperfektIndikativ": {
      "de": "er wusste",
      "lv": "o bildi"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsste",
      "lv": "o bilirdi"
    },
    "partizipVergangenheit": {
      "de": "gewusst",
      "lv": "bilinmiş"
    }
  },
  {
    "infinitiv": {
      "de": "wollen",
      "lv": "istemek"
    },
    "praesens": {
      "de": "er will",
      "lv": "o ister"
    },
    "imperfektIndikativ": {
      "de": "er wollte",
      "lv": "o istedi"
    },
    "imperfektKonjunktiv": {
      "de": "er wollte",
      "lv": "o isterdi"
    },
    "partizipVergangenheit": {
      "de": "gewollt",
      "lv": "istemiş"
    }
  },
  {
    "infinitiv": {
      "de": "wringen",
      "lv": "sıkmak"
    },
    "praesens": {
      "de": "er wringt",
      "lv": "o sıkar"
    },
    "imperfektIndikativ": {
      "de": "er wrang",
      "lv": "o sıktı"
    },
    "imperfektKonjunktiv": {
      "de": "er wränge",
      "lv": "o sıkardı"
    },
    "partizipVergangenheit": {
      "de": "gewrungen",
      "lv": "sıkılmış"
    }
  },
  {
    "infinitiv": {
      "de": "zeihen",
      "lv": "suçlamak"
    },
    "praesens": {
      "de": "er zeiht",
      "lv": "o suçlar"
    },
    "imperfektIndikativ": {
      "de": "er zieh",
      "lv": "o suçladı"
    },
    "imperfektKonjunktiv": {
      "de": "er ziehe",
      "lv": "o suçlardı"
    },
    "partizipVergangenheit": {
      "de": "geziehen",
      "lv": "suçlanmış"
    }
  },
  {
    "infinitiv": {
      "de": "ziehen",
      "lv": "çekmek"
    },
    "praesens": {
      "de": "er zieht",
      "lv": "o çeker"
    },
    "imperfektIndikativ": {
      "de": "er zog",
      "lv": "o çekti"
    },
    "imperfektKonjunktiv": {
      "de": "er zöge",
      "lv": "o çekerdi"
    },
    "partizipVergangenheit": {
      "de": "gezogen",
      "lv": "çekilmiş"
    }
  },
  {
    "infinitiv": {
      "de": "zwingen",
      "lv": "zorlamak"
    },
    "praesens": {
      "de": "er zwingt",
      "lv": "o zorlar"
    },
    "imperfektIndikativ": {
      "de": "er zwang",
      "lv": "o zorladı"
    },
    "imperfektKonjunktiv": {
      "de": "er zwänge",
      "lv": "o zorlardı"
    },
    "partizipVergangenheit": {
      "de": "gezwungen",
      "lv": "zorlanmış"
    }
  },
  {
    "infinitiv": {
      "de": "empfangen",
      "lv": "teslim almak"
    },
    "praesens": {
      "de": "er empfängt",
      "lv": "o teslim alır"
    },
    "imperfektIndikativ": {
      "de": "er empfing",
      "lv": "o teslim aldı"
    },
    "imperfektKonjunktiv": {
      "de": "er empfinge",
      "lv": "o teslim alırdı"
    },
    "partizipVergangenheit": {
      "de": "empfangen",
      "lv": "teslim alınmış"
    }
  },
  {
    "infinitiv": {
      "de": "erwägen",
      "lv": "değerlendirmek"
    },
    "praesens": {
      "de": "er erwägt",
      "lv": "o değerlendirir"
    },
    "imperfektIndikativ": {
      "de": "er erwog",
      "lv": "o değerlendirdi"
    },
    "imperfektKonjunktiv": {
      "de": "er erwöge",
      "lv": "o değerlendirirdi"
    },
    "partizipVergangenheit": {
      "de": "erwogen",
      "lv": "değerlendirilmiş"
    }
  },
  {
    "infinitiv": {
      "de": "fechten",
      "lv": "dövüşmek"
    },
    "praesens": {
      "de": "er ficht",
      "lv": "o dövüşür"
    },
    "imperfektIndikativ": {
      "de": "er focht",
      "lv": "o dövüştü"
    },
    "imperfektKonjunktiv": {
      "de": "er föchte",
      "lv": "o dövüşürdü"
    },
    "partizipVergangenheit": {
      "de": "gefochten",
      "lv": "dövüşmüş"
    }
  },
  {
    "infinitiv": {
      "de": "flechten",
      "lv": "örmek"
    },
    "praesens": {
      "de": "er flicht",
      "lv": "o örer"
    },
    "imperfektIndikativ": {
      "de": "er flocht",
      "lv": "o ördü"
    },
    "imperfektKonjunktiv": {
      "de": "er flöchte",
      "lv": "o örerdi"
    },
    "partizipVergangenheit": {
      "de": "geflochten",
      "lv": "örülmüş"
    }
  },
  {
    "infinitiv": {
      "de": "hangen",
      "lv": "sarkmak"
    },
    "praesens": {
      "de": "er hängt",
      "lv": "o sarkar"
    },
    "imperfektIndikativ": {
      "de": "er hing",
      "lv": "o sarktı"
    },
    "imperfektKonjunktiv": {
      "de": "er hinge",
      "lv": "o sarkardı"
    },
    "partizipVergangenheit": {
      "de": "gehangen",
      "lv": "sarkmış"
    }
  },
  {
    "infinitiv": {
      "de": "spalten",
      "lv": "yarmak"
    },
    "praesens": {
      "de": "er spaltet",
      "lv": "o yarar"
    },
    "imperfektIndikativ": {
      "de": "er spaltete",
      "lv": "o yardı"
    },
    "imperfektKonjunktiv": {
      "de": "er spaltete",
      "lv": "o yarardı"
    },
    "partizipVergangenheit": {
      "de": "gespalten",
      "lv": "yarılmış"
    }
  },
  {
    "infinitiv": {
      "de": "verzeihen",
      "lv": "affetmek"
    },
    "praesens": {
      "de": "er verzeiht",
      "lv": "o affeder"
    },
    "imperfektIndikativ": {
      "de": "er verzieh",
      "lv": "o affetti"
    },
    "imperfektKonjunktiv": {
      "de": "er verziehe",
      "lv": "o affederdi"
    },
    "partizipVergangenheit": {
      "de": "verziehen",
      "lv": "affedilmiş"
    }
  }
];

window.VERB_ENTRIES = VERB_ENTRIES;

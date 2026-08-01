const VERB_ENTRIES = [
  {
    "infinitiv": {
      "de": "backen",
      "lv": "Испечь"
    },
    "praesens": {
      "de": "er bäckt",
      "lv": "Он печет"
    },
    "imperfektIndikativ": {
      "de": "er buk",
      "lv": "Он пек"
    },
    "imperfektKonjunktiv": {
      "de": "er büke",
      "lv": "Он бы испек"
    },
    "partizipVergangenheit": {
      "de": "gebacken",
      "lv": "Жареный/запеченный"
    }
  },
  {
    "infinitiv": {
      "de": "befehlen",
      "lv": "Командовать"
    },
    "praesens": {
      "de": "er befiehlt",
      "lv": "Он командует"
    },
    "imperfektIndikativ": {
      "de": "er befahl",
      "lv": "Он приказал"
    },
    "imperfektKonjunktiv": {
      "de": "er beföhle",
      "lv": "Он будет командовать"
    },
    "partizipVergangenheit": {
      "de": "befohlen",
      "lv": "Командовал"
    }
  },
  {
    "infinitiv": {
      "de": "beginnen",
      "lv": "Начать"
    },
    "praesens": {
      "de": "er beginnt",
      "lv": "Он начинает"
    },
    "imperfektIndikativ": {
      "de": "er begann",
      "lv": "Он начал"
    },
    "imperfektKonjunktiv": {
      "de": "er begönne / er begänne",
      "lv": "Он бы начал"
    },
    "partizipVergangenheit": {
      "de": "begonnen",
      "lv": "Началось"
    }
  },
  {
    "infinitiv": {
      "de": "beißen",
      "lv": "Кусать"
    },
    "praesens": {
      "de": "er beißt",
      "lv": "Он кусает"
    },
    "imperfektIndikativ": {
      "de": "er biss",
      "lv": "Он закодировал"
    },
    "imperfektKonjunktiv": {
      "de": "er bisse",
      "lv": "Он кусает"
    },
    "partizipVergangenheit": {
      "de": "gebissen",
      "lv": "Укушенный / укушенный"
    }
  },
  {
    "infinitiv": {
      "de": "bergen",
      "lv": "Скрывать"
    },
    "praesens": {
      "de": "er birgt",
      "lv": "Он прячет"
    },
    "imperfektIndikativ": {
      "de": "er barg",
      "lv": "Он спрятался"
    },
    "imperfektKonjunktiv": {
      "de": "er bürge / er bärge",
      "lv": "Он бы спрятался"
    },
    "partizipVergangenheit": {
      "de": "geborgen",
      "lv": "Скрыт/сохранен"
    }
  },
  {
    "infinitiv": {
      "de": "bersten",
      "lv": "Разрывается"
    },
    "praesens": {
      "de": "er birst",
      "lv": "Он лопается"
    },
    "imperfektIndikativ": {
      "de": "er barst / er borst",
      "lv": "Он взорвался"
    },
    "imperfektKonjunktiv": {
      "de": "er bärste / er börste",
      "lv": "Он лопается"
    },
    "partizipVergangenheit": {
      "de": "geborsten (er ist)",
      "lv": "Сломанный"
    }
  },
  {
    "infinitiv": {
      "de": "bewegen",
      "lv": "Поощрять"
    },
    "praesens": {
      "de": "er bewegt",
      "lv": "Он подсказывает"
    },
    "imperfektIndikativ": {
      "de": "er bewog",
      "lv": "Он призвал"
    },
    "imperfektKonjunktiv": {
      "de": "er bewöge",
      "lv": "Он бы поощрял"
    },
    "partizipVergangenheit": {
      "de": "bewogen",
      "lv": "Поощряется"
    }
  },
  {
    "infinitiv": {
      "de": "biegen",
      "lv": "Сгибать"
    },
    "praesens": {
      "de": "er biegt",
      "lv": "Он кланяется"
    },
    "imperfektIndikativ": {
      "de": "er bog",
      "lv": "Он согнулся"
    },
    "imperfektKonjunktiv": {
      "de": "er böge",
      "lv": "Он бы согнулся"
    },
    "partizipVergangenheit": {
      "de": "gebogen",
      "lv": "Согнутый"
    }
  },
  {
    "infinitiv": {
      "de": "bieten",
      "lv": "Обещать"
    },
    "praesens": {
      "de": "er bietet",
      "lv": "Он обещает"
    },
    "imperfektIndikativ": {
      "de": "er bot",
      "lv": "Он обещал"
    },
    "imperfektKonjunktiv": {
      "de": "er böte",
      "lv": "Он бы пообещал"
    },
    "partizipVergangenheit": {
      "de": "geboten",
      "lv": "Обещал/предлагал"
    }
  },
  {
    "infinitiv": {
      "de": "binden",
      "lv": "Сито"
    },
    "praesens": {
      "de": "er bindet",
      "lv": "Он сено"
    },
    "imperfektIndikativ": {
      "de": "er band",
      "lv": "Он посеял"
    },
    "imperfektKonjunktiv": {
      "de": "er bände",
      "lv": "Он просеял"
    },
    "partizipVergangenheit": {
      "de": "gebunden",
      "lv": "Сито"
    }
  },
  {
    "infinitiv": {
      "de": "bitten",
      "lv": "Спросить"
    },
    "praesens": {
      "de": "er bittet",
      "lv": "Он умоляет"
    },
    "imperfektIndikativ": {
      "de": "er bat",
      "lv": "Он спросил"
    },
    "imperfektKonjunktiv": {
      "de": "er bäte",
      "lv": "Он будет молиться"
    },
    "partizipVergangenheit": {
      "de": "gebeten",
      "lv": "Просил"
    }
  },
  {
    "infinitiv": {
      "de": "blasen",
      "lv": "Взорвать"
    },
    "praesens": {
      "de": "er bläst",
      "lv": "Он дует"
    },
    "imperfektIndikativ": {
      "de": "er blies",
      "lv": "Он дул"
    },
    "imperfektKonjunktiv": {
      "de": "er bliese",
      "lv": "Он бы взорвал"
    },
    "partizipVergangenheit": {
      "de": "geblasen",
      "lv": "Взорванный"
    }
  },
  {
    "infinitiv": {
      "de": "gären",
      "lv": "Бродить"
    },
    "praesens": {
      "de": "es gärt",
      "lv": "Оно бродит"
    },
    "imperfektIndikativ": {
      "de": "es gor / es gärte",
      "lv": "Оно бродит"
    },
    "imperfektKonjunktiv": {
      "de": "es göre / es gärte",
      "lv": "Было бы горько"
    },
    "partizipVergangenheit": {
      "de": "gegoren / gegärt",
      "lv": "Рожь"
    }
  },
  {
    "infinitiv": {
      "de": "gebären",
      "lv": "Родить"
    },
    "praesens": {
      "de": "sie gebiert",
      "lv": "В ее утробе"
    },
    "imperfektIndikativ": {
      "de": "sie gebar",
      "lv": "Она родила"
    },
    "imperfektKonjunktiv": {
      "de": "sie gebäre",
      "lv": "Она бы родила"
    },
    "partizipVergangenheit": {
      "de": "geboren",
      "lv": "Родился / родился"
    }
  },
  {
    "infinitiv": {
      "de": "gelingen",
      "lv": "Преуспевать"
    },
    "praesens": {
      "de": "es gelingt",
      "lv": "Это удается"
    },
    "imperfektIndikativ": {
      "de": "es gelang",
      "lv": "Это сработало"
    },
    "imperfektKonjunktiv": {
      "de": "es gelänge",
      "lv": "Это сработает"
    },
    "partizipVergangenheit": {
      "de": "gelungen (es ist)",
      "lv": "Удалось"
    }
  },
  {
    "infinitiv": {
      "de": "gelten",
      "lv": "Пригодится"
    },
    "praesens": {
      "de": "er gilt",
      "lv": "Он подходит / действителен"
    },
    "imperfektIndikativ": {
      "de": "er galt",
      "lv": "Он подходил / был в форме"
    },
    "imperfektKonjunktiv": {
      "de": "er gölte / es gälte",
      "lv": "Он подойдет / оно подойдет"
    },
    "partizipVergangenheit": {
      "de": "gegolten",
      "lv": "Применён/был действителен"
    }
  },
  {
    "infinitiv": {
      "de": "genesen",
      "lv": "Выздоравливать"
    },
    "praesens": {
      "de": "er genest",
      "lv": "Он поправляется"
    },
    "imperfektIndikativ": {
      "de": "er genas",
      "lv": "Он поправился"
    },
    "imperfektKonjunktiv": {
      "de": "er genäse",
      "lv": "Он выздоровеет"
    },
    "partizipVergangenheit": {
      "de": "genesen (er ist)",
      "lv": "Поправляйся"
    }
  },
  {
    "infinitiv": {
      "de": "genießen",
      "lv": "Наслаждаться"
    },
    "praesens": {
      "de": "er genießt",
      "lv": "Ему нравится"
    },
    "imperfektIndikativ": {
      "de": "er genoss",
      "lv": "Ему понравилось"
    },
    "imperfektKonjunktiv": {
      "de": "er genösse",
      "lv": "Ему бы понравилось"
    },
    "partizipVergangenheit": {
      "de": "genossen",
      "lv": "Наслаждался"
    }
  },
  {
    "infinitiv": {
      "de": "geschehen",
      "lv": "Случаться"
    },
    "praesens": {
      "de": "es geschieht",
      "lv": "Такое случается"
    },
    "imperfektIndikativ": {
      "de": "es geschah",
      "lv": "Это случилось"
    },
    "imperfektKonjunktiv": {
      "de": "es geschähe",
      "lv": "Это произойдет"
    },
    "partizipVergangenheit": {
      "de": "geschehen (es ist)",
      "lv": "Случилось"
    }
  },
  {
    "infinitiv": {
      "de": "gießen",
      "lv": "Лейтенант"
    },
    "praesens": {
      "de": "er gießt",
      "lv": "Он наливает"
    },
    "imperfektIndikativ": {
      "de": "er goss",
      "lv": "Он налил"
    },
    "imperfektKonjunktiv": {
      "de": "er gösse",
      "lv": "Он идет дождь"
    },
    "partizipVergangenheit": {
      "de": "gegossen",
      "lv": "Вещь"
    }
  },
  {
    "infinitiv": {
      "de": "gleichen",
      "lv": "Походить на"
    },
    "praesens": {
      "de": "er gleicht",
      "lv": "Он похож"
    },
    "imperfektIndikativ": {
      "de": "er glich",
      "lv": "Он подражал"
    },
    "imperfektKonjunktiv": {
      "de": "er gliche",
      "lv": "Он будет подражать"
    },
    "partizipVergangenheit": {
      "de": "geglichen",
      "lv": "Напоминал"
    }
  },
  {
    "infinitiv": {
      "de": "gleiten",
      "lv": "Скользить"
    },
    "praesens": {
      "de": "er gleitet",
      "lv": "Он скользит"
    },
    "imperfektIndikativ": {
      "de": "er glitt",
      "lv": "Он скользил"
    },
    "imperfektKonjunktiv": {
      "de": "er glitte",
      "lv": "Он будет скользить"
    },
    "partizipVergangenheit": {
      "de": "geglitten (er ist)",
      "lv": "Поскользнулся"
    }
  },
  {
    "infinitiv": {
      "de": "glimmen",
      "lv": "Светящийся"
    },
    "praesens": {
      "de": "er glimmt",
      "lv": "Он светится"
    },
    "imperfektIndikativ": {
      "de": "er glimmte / glomm",
      "lv": "Он светился"
    },
    "imperfektKonjunktiv": {
      "de": "er glimmte",
      "lv": "Он будет светиться"
    },
    "partizipVergangenheit": {
      "de": "geglimmt / geglommen",
      "lv": "Светящийся"
    }
  },
  {
    "infinitiv": {
      "de": "graben",
      "lv": "Копать"
    },
    "praesens": {
      "de": "er gräbt",
      "lv": "Он копает"
    },
    "imperfektIndikativ": {
      "de": "er grub",
      "lv": "Он выкопал"
    },
    "imperfektKonjunktiv": {
      "de": "er grübe",
      "lv": "Он будет копать"
    },
    "partizipVergangenheit": {
      "de": "gegraben",
      "lv": "Копать"
    }
  },
  {
    "infinitiv": {
      "de": "greifen",
      "lv": "Поймать"
    },
    "praesens": {
      "de": "er greift",
      "lv": "Он ловит"
    },
    "imperfektIndikativ": {
      "de": "er griff",
      "lv": "Он поймал"
    },
    "imperfektKonjunktiv": {
      "de": "er griffe",
      "lv": "Он бы поймал"
    },
    "partizipVergangenheit": {
      "de": "gegriffen",
      "lv": "Поймал / схватил"
    }
  },
  {
    "infinitiv": {
      "de": "hauen",
      "lv": "Резать"
    },
    "praesens": {
      "de": "er haut",
      "lv": "Он выбрал"
    },
    "imperfektIndikativ": {
      "de": "er hieb",
      "lv": "Он огрызнулся"
    },
    "imperfektKonjunktiv": {
      "de": "er hiebe",
      "lv": "Он бы вырезал"
    },
    "partizipVergangenheit": {
      "de": "gehauen",
      "lv": "Резной"
    }
  },
  {
    "infinitiv": {
      "de": "heben",
      "lv": "Поднять"
    },
    "praesens": {
      "de": "er hebt",
      "lv": "Он поднимает"
    },
    "imperfektIndikativ": {
      "de": "er hob",
      "lv": "Он принес"
    },
    "imperfektKonjunktiv": {
      "de": "er höbe",
      "lv": "Он бы построил"
    },
    "partizipVergangenheit": {
      "de": "gehoben",
      "lv": "Построен"
    }
  },
  {
    "infinitiv": {
      "de": "kennen",
      "lv": "Знать / знать"
    },
    "praesens": {
      "de": "er kennt",
      "lv": "Он знает"
    },
    "imperfektIndikativ": {
      "de": "kannte",
      "lv": "Знал"
    },
    "imperfektKonjunktiv": {
      "de": "kannte",
      "lv": "Знал"
    },
    "partizipVergangenheit": {
      "de": "gekannt",
      "lv": "Знакомство"
    }
  },
  {
    "infinitiv": {
      "de": "klingen",
      "lv": "Звучать"
    },
    "praesens": {
      "de": "er klingt",
      "lv": "Он звучит"
    },
    "imperfektIndikativ": {
      "de": "er klang",
      "lv": "Он звучал"
    },
    "imperfektKonjunktiv": {
      "de": "er klänge",
      "lv": "Он будет звучать"
    },
    "partizipVergangenheit": {
      "de": "geklungen",
      "lv": "Звучало"
    }
  },
  {
    "infinitiv": {
      "de": "kneifen",
      "lv": "Ущипнуть"
    },
    "praesens": {
      "de": "er kneift",
      "lv": "Он шутит"
    },
    "imperfektIndikativ": {
      "de": "er kniff",
      "lv": "Он ущипнул"
    },
    "imperfektKonjunktiv": {
      "de": "er kniffe",
      "lv": "Он бы ущипнул"
    },
    "partizipVergangenheit": {
      "de": "gekniffen",
      "lv": "Защемлен"
    }
  },
  {
    "infinitiv": {
      "de": "bleiben",
      "lv": "Оставаться"
    },
    "praesens": {
      "de": "er bleibt",
      "lv": "Он остается"
    },
    "imperfektIndikativ": {
      "de": "er blieb",
      "lv": "Он остался"
    },
    "imperfektKonjunktiv": {
      "de": "er bliebe",
      "lv": "Он останется"
    },
    "partizipVergangenheit": {
      "de": "geblieben (er ist)",
      "lv": "Левый"
    }
  },
  {
    "infinitiv": {
      "de": "bleichen",
      "lv": "Отбеливать"
    },
    "praesens": {
      "de": "er bleicht",
      "lv": "Он отбеливает"
    },
    "imperfektIndikativ": {
      "de": "blich",
      "lv": "Отбеленный"
    },
    "imperfektKonjunktiv": {
      "de": "blich",
      "lv": "Отбеленный"
    },
    "partizipVergangenheit": {
      "de": "geblichen",
      "lv": "Отбеленный"
    }
  },
  {
    "infinitiv": {
      "de": "braten",
      "lv": "Испечь"
    },
    "praesens": {
      "de": "er brät",
      "lv": "Он печет"
    },
    "imperfektIndikativ": {
      "de": "er briet",
      "lv": "Он пек"
    },
    "imperfektKonjunktiv": {
      "de": "er briete",
      "lv": "Он бы испек"
    },
    "partizipVergangenheit": {
      "de": "gebraten",
      "lv": "Жареный/запеченный"
    }
  },
  {
    "infinitiv": {
      "de": "brechen",
      "lv": "Сломать"
    },
    "praesens": {
      "de": "er bricht",
      "lv": "Он ломается"
    },
    "imperfektIndikativ": {
      "de": "er brach",
      "lv": "Он сломался"
    },
    "imperfektKonjunktiv": {
      "de": "er bräche",
      "lv": "Он бы сломался"
    },
    "partizipVergangenheit": {
      "de": "gebrochen",
      "lv": "Сломанный / сломанный"
    }
  },
  {
    "infinitiv": {
      "de": "brennen",
      "lv": "Сжечь"
    },
    "praesens": {
      "de": "er brennt",
      "lv": "Он в огне"
    },
    "imperfektIndikativ": {
      "de": "brannte",
      "lv": "Горел"
    },
    "imperfektKonjunktiv": {
      "de": "brannte",
      "lv": "Горел"
    },
    "partizipVergangenheit": {
      "de": "gebrannt",
      "lv": "Сожженный"
    }
  },
  {
    "infinitiv": {
      "de": "bringen",
      "lv": "Нести"
    },
    "praesens": {
      "de": "er bringt",
      "lv": "Он несет"
    },
    "imperfektIndikativ": {
      "de": "er brachte",
      "lv": "Он нес"
    },
    "imperfektKonjunktiv": {
      "de": "er brächte",
      "lv": "Он будет нести"
    },
    "partizipVergangenheit": {
      "de": "gebracht",
      "lv": "Принес / принес"
    }
  },
  {
    "infinitiv": {
      "de": "denken",
      "lv": "Думать"
    },
    "praesens": {
      "de": "er denkt",
      "lv": "Он думает"
    },
    "imperfektIndikativ": {
      "de": "er dachte",
      "lv": "Он думал"
    },
    "imperfektKonjunktiv": {
      "de": "er dächte",
      "lv": "Он подумает"
    },
    "partizipVergangenheit": {
      "de": "gedacht",
      "lv": "Намеревался"
    }
  },
  {
    "infinitiv": {
      "de": "dingen",
      "lv": "Нанимать/согласовывать"
    },
    "praesens": {
      "de": "er dingt",
      "lv": "Он нанимает"
    },
    "imperfektIndikativ": {
      "de": "dingte",
      "lv": "Наемный"
    },
    "imperfektKonjunktiv": {
      "de": "dingte",
      "lv": "Наемный"
    },
    "partizipVergangenheit": {
      "de": "gedungen",
      "lv": "Наемный"
    }
  },
  {
    "infinitiv": {
      "de": "dreschen",
      "lv": "Культ"
    },
    "praesens": {
      "de": "er drischt",
      "lv": "Он молотит"
    },
    "imperfektIndikativ": {
      "de": "er drasch / er drosch",
      "lv": "Он молотил"
    },
    "imperfektKonjunktiv": {
      "de": "er dräsche / er drösche",
      "lv": "Он будет поклоняться"
    },
    "partizipVergangenheit": {
      "de": "gedroschen",
      "lv": "Культ"
    }
  },
  {
    "infinitiv": {
      "de": "dringen",
      "lv": "Ворваться в"
    },
    "praesens": {
      "de": "er dringt",
      "lv": "Он врывается"
    },
    "imperfektIndikativ": {
      "de": "er drang",
      "lv": "Он ворвался"
    },
    "imperfektKonjunktiv": {
      "de": "er dränge",
      "lv": "Он бы вломился"
    },
    "partizipVergangenheit": {
      "de": "gedrungen (er ist)",
      "lv": "Ворвался в"
    }
  },
  {
    "infinitiv": {
      "de": "dünken",
      "lv": "Кажется"
    },
    "praesens": {
      "de": "es dünkt",
      "lv": "Кажется"
    },
    "imperfektIndikativ": {
      "de": "deuchte",
      "lv": "Казалось"
    },
    "imperfektKonjunktiv": {
      "de": "deuchte",
      "lv": "Казалось"
    },
    "partizipVergangenheit": {
      "de": "gedünkt",
      "lv": "Казалось"
    }
  },
  {
    "infinitiv": {
      "de": "dürfen",
      "lv": "Быть разрешено"
    },
    "praesens": {
      "de": "er darf",
      "lv": "Он может"
    },
    "imperfektIndikativ": {
      "de": "durfte",
      "lv": "Было разрешено"
    },
    "imperfektKonjunktiv": {
      "de": "durfte",
      "lv": "Было разрешено"
    },
    "partizipVergangenheit": {
      "de": "gedurft",
      "lv": "Допустимый"
    }
  },
  {
    "infinitiv": {
      "de": "empfehlen",
      "lv": "Рекомендовать"
    },
    "praesens": {
      "de": "er empfiehlt",
      "lv": "Он предлагает"
    },
    "imperfektIndikativ": {
      "de": "er empfahl",
      "lv": "Он предложил"
    },
    "imperfektKonjunktiv": {
      "de": "er empfähle / er empföhle",
      "lv": "Он бы порекомендовал"
    },
    "partizipVergangenheit": {
      "de": "empfohlen",
      "lv": "Рекомендуется"
    }
  },
  {
    "infinitiv": {
      "de": "empfinden",
      "lv": "Чувствовать"
    },
    "praesens": {
      "de": "er empfindet",
      "lv": "Он чувствует"
    },
    "imperfektIndikativ": {
      "de": "er empfand",
      "lv": "Он чувствовал"
    },
    "imperfektKonjunktiv": {
      "de": "er empfände",
      "lv": "Он бы почувствовал"
    },
    "partizipVergangenheit": {
      "de": "empfunden",
      "lv": "Чувствовал себя"
    }
  },
  {
    "infinitiv": {
      "de": "erlöschen",
      "lv": "Исчезает"
    },
    "praesens": {
      "de": "er erlischt",
      "lv": "Он выходит"
    },
    "imperfektIndikativ": {
      "de": "er erlosch",
      "lv": "Он вышел"
    },
    "imperfektKonjunktiv": {
      "de": "er erlösche",
      "lv": "Он исчезнет"
    },
    "partizipVergangenheit": {
      "de": "erloschen (er ist)",
      "lv": "Потухший"
    }
  },
  {
    "infinitiv": {
      "de": "erschrecken",
      "lv": "Запутаться"
    },
    "praesens": {
      "de": "er erschrickt",
      "lv": "Он пугается"
    },
    "imperfektIndikativ": {
      "de": "er erschrak",
      "lv": "Он испугался"
    },
    "imperfektKonjunktiv": {
      "de": "er erschräke",
      "lv": "Он бы сошел с ума"
    },
    "partizipVergangenheit": {
      "de": "erschrocken (er ist)",
      "lv": "Испуганный"
    }
  },
  {
    "infinitiv": {
      "de": "essen",
      "lv": "Есть"
    },
    "praesens": {
      "de": "er isst",
      "lv": "Он ест"
    },
    "imperfektIndikativ": {
      "de": "er ass",
      "lv": "Он ел"
    },
    "imperfektKonjunktiv": {
      "de": "er äße",
      "lv": "Он бы съел"
    },
    "partizipVergangenheit": {
      "de": "gegessen",
      "lv": "Съел / съел"
    }
  },
  {
    "infinitiv": {
      "de": "fahren",
      "lv": "Водить машину"
    },
    "praesens": {
      "de": "er fährt",
      "lv": "Он водит"
    },
    "imperfektIndikativ": {
      "de": "er fuhr",
      "lv": "Он ехал"
    },
    "imperfektKonjunktiv": {
      "de": "er führe",
      "lv": "Он будет водить машину"
    },
    "partizipVergangenheit": {
      "de": "gefahren (er ist)",
      "lv": "Поехал/уехал"
    }
  },
  {
    "infinitiv": {
      "de": "fallen",
      "lv": "Падать"
    },
    "praesens": {
      "de": "er fällt",
      "lv": "Он падает"
    },
    "imperfektIndikativ": {
      "de": "er fiel",
      "lv": "Он упал"
    },
    "imperfektKonjunktiv": {
      "de": "er fiele",
      "lv": "Он упадет"
    },
    "partizipVergangenheit": {
      "de": "gefallen (er ist)",
      "lv": "Упал"
    }
  },
  {
    "infinitiv": {
      "de": "fangen",
      "lv": "Поймать"
    },
    "praesens": {
      "de": "er fängt",
      "lv": "Он ловит"
    },
    "imperfektIndikativ": {
      "de": "er fing",
      "lv": "Он поймал"
    },
    "imperfektKonjunktiv": {
      "de": "er finge",
      "lv": "Он бы поймал"
    },
    "partizipVergangenheit": {
      "de": "gefangen",
      "lv": "Пойман / пойман"
    }
  },
  {
    "infinitiv": {
      "de": "finden",
      "lv": "Найти"
    },
    "praesens": {
      "de": "er findet",
      "lv": "Он находит"
    },
    "imperfektIndikativ": {
      "de": "er fand",
      "lv": "Он нашел"
    },
    "imperfektKonjunktiv": {
      "de": "er fände",
      "lv": "Он найдет"
    },
    "partizipVergangenheit": {
      "de": "gefunden",
      "lv": "Найденный"
    }
  },
  {
    "infinitiv": {
      "de": "fliegen",
      "lv": "Отпустить"
    },
    "praesens": {
      "de": "er fliegt",
      "lv": "Он летает"
    },
    "imperfektIndikativ": {
      "de": "er flog",
      "lv": "Он полетел"
    },
    "imperfektKonjunktiv": {
      "de": "er flöge",
      "lv": "Он бы летал"
    },
    "partizipVergangenheit": {
      "de": "geflogen (er ist)",
      "lv": "Пролетел"
    }
  },
  {
    "infinitiv": {
      "de": "fliehen",
      "lv": "Убегать"
    },
    "praesens": {
      "de": "er flieht",
      "lv": "Он убегает"
    },
    "imperfektIndikativ": {
      "de": "er floh",
      "lv": "Он убежал"
    },
    "imperfektKonjunktiv": {
      "de": "er flöhe",
      "lv": "Он бы убежал"
    },
    "partizipVergangenheit": {
      "de": "geflohen (er ist)",
      "lv": "Убежал"
    }
  },
  {
    "infinitiv": {
      "de": "fließen",
      "lv": "Течь"
    },
    "praesens": {
      "de": "er fließt",
      "lv": "Он бежит"
    },
    "imperfektIndikativ": {
      "de": "er floss",
      "lv": "Он побежал"
    },
    "imperfektKonjunktiv": {
      "de": "er flösse",
      "lv": "Он побежит"
    },
    "partizipVergangenheit": {
      "de": "geflossen (er ist)",
      "lv": "Прошедший"
    }
  },
  {
    "infinitiv": {
      "de": "fressen",
      "lv": "Есть завтра"
    },
    "praesens": {
      "de": "er frisst",
      "lv": "Он ест/глотает"
    },
    "imperfektIndikativ": {
      "de": "er frass",
      "lv": "Он съел/проглотил"
    },
    "imperfektKonjunktiv": {
      "de": "er fräße",
      "lv": "Он ел/завтракал"
    },
    "partizipVergangenheit": {
      "de": "gefressen",
      "lv": "Съел/утро"
    }
  },
  {
    "infinitiv": {
      "de": "frieren",
      "lv": "Холодный"
    },
    "praesens": {
      "de": "er friert",
      "lv": "Он замерзает"
    },
    "imperfektIndikativ": {
      "de": "er fror",
      "lv": "Он остров"
    },
    "imperfektKonjunktiv": {
      "de": "er fröre",
      "lv": "Он замерз"
    },
    "partizipVergangenheit": {
      "de": "gefroren",
      "lv": "Остров"
    }
  },
  {
    "infinitiv": {
      "de": "geben",
      "lv": "Дать"
    },
    "praesens": {
      "de": "er gibt",
      "lv": "Он дает"
    },
    "imperfektIndikativ": {
      "de": "er gab",
      "lv": "Он дал"
    },
    "imperfektKonjunktiv": {
      "de": "er gäbe",
      "lv": "Он бы дал"
    },
    "partizipVergangenheit": {
      "de": "gegeben",
      "lv": "Данный"
    }
  },
  {
    "infinitiv": {
      "de": "gedeihen",
      "lv": "Преуспевать"
    },
    "praesens": {
      "de": "er gedeiht",
      "lv": "Ему это удается"
    },
    "imperfektIndikativ": {
      "de": "er gedieh",
      "lv": "Ему удалось"
    },
    "imperfektKonjunktiv": {
      "de": "er gediehe",
      "lv": "Он добьется успеха"
    },
    "partizipVergangenheit": {
      "de": "gediehen (er ist)",
      "lv": "Удалось"
    }
  },
  {
    "infinitiv": {
      "de": "gehen",
      "lv": "Идти"
    },
    "praesens": {
      "de": "er geht",
      "lv": "Он идет"
    },
    "imperfektIndikativ": {
      "de": "er ging",
      "lv": "Он шел"
    },
    "imperfektKonjunktiv": {
      "de": "er ginge",
      "lv": "Он бы пошел"
    },
    "partizipVergangenheit": {
      "de": "gegangen (er ist)",
      "lv": "Шел"
    }
  },
  {
    "infinitiv": {
      "de": "gewinnen",
      "lv": "Чтобы получить"
    },
    "praesens": {
      "de": "er gewinnt",
      "lv": "Он получает"
    },
    "imperfektIndikativ": {
      "de": "er gewann",
      "lv": "Он получил"
    },
    "imperfektKonjunktiv": {
      "de": "er gewönne / er gewänne",
      "lv": "Он получит"
    },
    "partizipVergangenheit": {
      "de": "gewonnen",
      "lv": "Полученный"
    }
  },
  {
    "infinitiv": {
      "de": "haben",
      "lv": "Быть / принадлежать"
    },
    "praesens": {
      "de": "er hat",
      "lv": "У него есть"
    },
    "imperfektIndikativ": {
      "de": "hatte",
      "lv": "Был"
    },
    "imperfektKonjunktiv": {
      "de": "hatte",
      "lv": "Был"
    },
    "partizipVergangenheit": {
      "de": "gehabt",
      "lv": "Был"
    }
  },
  {
    "infinitiv": {
      "de": "halten",
      "lv": "Держать"
    },
    "praesens": {
      "de": "er hält",
      "lv": "Он там"
    },
    "imperfektIndikativ": {
      "de": "er hielt",
      "lv": "Он держал"
    },
    "imperfektKonjunktiv": {
      "de": "er hielte",
      "lv": "Он будет держать"
    },
    "partizipVergangenheit": {
      "de": "gehalten",
      "lv": "Держал"
    }
  },
  {
    "infinitiv": {
      "de": "heißen",
      "lv": "Позвонить"
    },
    "praesens": {
      "de": "er heißt",
      "lv": "Он звонит / ему звонят"
    },
    "imperfektIndikativ": {
      "de": "er hieß",
      "lv": "Он позвонил / ему позвонили"
    },
    "imperfektKonjunktiv": {
      "de": "er hieße",
      "lv": "Он позвонит / ему позвонят"
    },
    "partizipVergangenheit": {
      "de": "geheißen",
      "lv": "Называется"
    }
  },
  {
    "infinitiv": {
      "de": "helfen",
      "lv": "Помочь"
    },
    "praesens": {
      "de": "er hilft",
      "lv": "Он помогает"
    },
    "imperfektIndikativ": {
      "de": "er half",
      "lv": "Он помог"
    },
    "imperfektKonjunktiv": {
      "de": "er hülfe / er hälfe",
      "lv": "Он бы помог"
    },
    "partizipVergangenheit": {
      "de": "geholfen",
      "lv": "Помог"
    }
  },
  {
    "infinitiv": {
      "de": "kommen",
      "lv": "Прийти"
    },
    "praesens": {
      "de": "er kommt",
      "lv": "Он идет"
    },
    "imperfektIndikativ": {
      "de": "er kam",
      "lv": "Он пришел"
    },
    "imperfektKonjunktiv": {
      "de": "er käme",
      "lv": "Он придет"
    },
    "partizipVergangenheit": {
      "de": "gekommen (er ist)",
      "lv": "Пришел"
    }
  },
  {
    "infinitiv": {
      "de": "können",
      "lv": "Быть в состоянии"
    },
    "praesens": {
      "de": "er kann",
      "lv": "Он может"
    },
    "imperfektIndikativ": {
      "de": "konnte",
      "lv": "Мог"
    },
    "imperfektKonjunktiv": {
      "de": "konnte",
      "lv": "Мог"
    },
    "partizipVergangenheit": {
      "de": "gekonnt",
      "lv": "Мог"
    }
  },
  {
    "infinitiv": {
      "de": "kriechen",
      "lv": "Идет дождь"
    },
    "praesens": {
      "de": "er kriecht",
      "lv": "Он наклоняется"
    },
    "imperfektIndikativ": {
      "de": "er kroch",
      "lv": "Он шел дождь"
    },
    "imperfektKonjunktiv": {
      "de": "er kröche",
      "lv": "Он идет дождь"
    },
    "partizipVergangenheit": {
      "de": "gekrochen (er ist)",
      "lv": "Скончался"
    }
  },
  {
    "infinitiv": {
      "de": "laden",
      "lv": "Загрузить, пригласить"
    },
    "praesens": {
      "de": "er lädt",
      "lv": "Он наваливает/приглашает"
    },
    "imperfektIndikativ": {
      "de": "er lud",
      "lv": "Он загрузил/пригласил"
    },
    "imperfektKonjunktiv": {
      "de": "er lüde",
      "lv": "Он бы загрузил/пригласил"
    },
    "partizipVergangenheit": {
      "de": "geladen",
      "lv": "Загружен/приглашен"
    }
  },
  {
    "infinitiv": {
      "de": "lassen",
      "lv": "Положить, позволить"
    },
    "praesens": {
      "de": "er lässt",
      "lv": "Он ставит/позволяет"
    },
    "imperfektIndikativ": {
      "de": "er ließ",
      "lv": "Он приказал/разрешил"
    },
    "imperfektKonjunktiv": {
      "de": "er ließe",
      "lv": "Он бы положил / позволил"
    },
    "partizipVergangenheit": {
      "de": "gelassen",
      "lv": "Поставить/разрешить"
    }
  },
  {
    "infinitiv": {
      "de": "laufen",
      "lv": "Бежать"
    },
    "praesens": {
      "de": "er läuft",
      "lv": "Он бежит"
    },
    "imperfektIndikativ": {
      "de": "er lief",
      "lv": "Он побежал"
    },
    "imperfektKonjunktiv": {
      "de": "er liefe",
      "lv": "Он побежит"
    },
    "partizipVergangenheit": {
      "de": "gelaufen (er ist)",
      "lv": "Побежал"
    }
  },
  {
    "infinitiv": {
      "de": "leiden",
      "lv": "Страдать"
    },
    "praesens": {
      "de": "er leidet",
      "lv": "Он страдает"
    },
    "imperfektIndikativ": {
      "de": "er litt",
      "lv": "Он страдал"
    },
    "imperfektKonjunktiv": {
      "de": "er litte",
      "lv": "Он будет страдать"
    },
    "partizipVergangenheit": {
      "de": "gelitten",
      "lv": "Пострадал"
    }
  },
  {
    "infinitiv": {
      "de": "leihen",
      "lv": "Одалживать / брать взаймы"
    },
    "praesens": {
      "de": "er leiht",
      "lv": "Он одалживает / берет взаймы"
    },
    "imperfektIndikativ": {
      "de": "er lieh",
      "lv": "Он одолжил / взял взаймы"
    },
    "imperfektKonjunktiv": {
      "de": "er liehe",
      "lv": "Он одолжил/одолжил бы"
    },
    "partizipVergangenheit": {
      "de": "geliehen",
      "lv": "Одолжил/взял взаймы"
    }
  },
  {
    "infinitiv": {
      "de": "lesen",
      "lv": "Читать"
    },
    "praesens": {
      "de": "er liest",
      "lv": "Он читает"
    },
    "imperfektIndikativ": {
      "de": "er las",
      "lv": "Он читал"
    },
    "imperfektKonjunktiv": {
      "de": "er läse",
      "lv": "Он будет читать"
    },
    "partizipVergangenheit": {
      "de": "gelesen",
      "lv": "Читать"
    }
  },
  {
    "infinitiv": {
      "de": "liegen",
      "lv": "Спать"
    },
    "praesens": {
      "de": "er liegt",
      "lv": "Он спит"
    },
    "imperfektIndikativ": {
      "de": "er lag",
      "lv": "Он спал"
    },
    "imperfektKonjunktiv": {
      "de": "er läge",
      "lv": "Он будет спать"
    },
    "partizipVergangenheit": {
      "de": "gelegen",
      "lv": "Спал"
    }
  },
  {
    "infinitiv": {
      "de": "lügen",
      "lv": "Лгать"
    },
    "praesens": {
      "de": "er lügt",
      "lv": "Он лжет"
    },
    "imperfektIndikativ": {
      "de": "er log",
      "lv": "Он солгал"
    },
    "imperfektKonjunktiv": {
      "de": "er löge",
      "lv": "Он бы солгал"
    },
    "partizipVergangenheit": {
      "de": "gelogen",
      "lv": "Солгал"
    }
  },
  {
    "infinitiv": {
      "de": "mahlen",
      "lv": "Земля"
    },
    "praesens": {
      "de": "er mahlt",
      "lv": "Он шлифует"
    },
    "imperfektIndikativ": {
      "de": "er mahlte",
      "lv": "Он край"
    },
    "imperfektKonjunktiv": {
      "de": "er malte",
      "lv": "Он шлифует"
    },
    "partizipVergangenheit": {
      "de": "gemahlen",
      "lv": "Земля"
    }
  },
  {
    "infinitiv": {
      "de": "meiden",
      "lv": "Избегать"
    },
    "praesens": {
      "de": "er meidet",
      "lv": "Он избегает"
    },
    "imperfektIndikativ": {
      "de": "er mied",
      "lv": "Он избегал"
    },
    "imperfektKonjunktiv": {
      "de": "er miede",
      "lv": "Он бы избегал"
    },
    "partizipVergangenheit": {
      "de": "gemieden",
      "lv": "Избегал"
    }
  },
  {
    "infinitiv": {
      "de": "melken",
      "lv": "Доить"
    },
    "praesens": {
      "de": "er milkt / er melkt",
      "lv": "Он подметает"
    },
    "imperfektIndikativ": {
      "de": "er molk / er melkte",
      "lv": "Он подметал"
    },
    "imperfektKonjunktiv": {
      "de": "er mölke / er melkte",
      "lv": "Он будет доить"
    },
    "partizipVergangenheit": {
      "de": "gemolken / gemelkt",
      "lv": "Доил"
    }
  },
  {
    "infinitiv": {
      "de": "messen",
      "lv": "Измерить"
    },
    "praesens": {
      "de": "er misst",
      "lv": "Он измеряет"
    },
    "imperfektIndikativ": {
      "de": "er mass",
      "lv": "Он измерил"
    },
    "imperfektKonjunktiv": {
      "de": "er mäße",
      "lv": "Он бы измерил"
    },
    "partizipVergangenheit": {
      "de": "gemessen",
      "lv": "Измеренный"
    }
  },
  {
    "infinitiv": {
      "de": "misslingen",
      "lv": "Потерпеть неудачу"
    },
    "praesens": {
      "de": "es misslingt",
      "lv": "Это терпит неудачу"
    },
    "imperfektIndikativ": {
      "de": "misslang",
      "lv": "Неуспешный"
    },
    "imperfektKonjunktiv": {
      "de": "misslang",
      "lv": "Неуспешный"
    },
    "partizipVergangenheit": {
      "de": "misslungen",
      "lv": "Неуспешный"
    }
  },
  {
    "infinitiv": {
      "de": "mögen",
      "lv": "Нравиться"
    },
    "praesens": {
      "de": "er mag",
      "lv": "Ему нравится"
    },
    "imperfektIndikativ": {
      "de": "mochte",
      "lv": "Понравилось"
    },
    "imperfektKonjunktiv": {
      "de": "mochte",
      "lv": "Понравилось"
    },
    "partizipVergangenheit": {
      "de": "gemocht",
      "lv": "Понравилось"
    }
  },
  {
    "infinitiv": {
      "de": "müssen",
      "lv": "Нуждаться"
    },
    "praesens": {
      "de": "er muss",
      "lv": "Ему нужен"
    },
    "imperfektIndikativ": {
      "de": "musste",
      "lv": "Должен был иметь"
    },
    "imperfektKonjunktiv": {
      "de": "musste",
      "lv": "Должен был иметь"
    },
    "partizipVergangenheit": {
      "de": "gemusst",
      "lv": "Нужный"
    }
  },
  {
    "infinitiv": {
      "de": "nehmen",
      "lv": "Взять"
    },
    "praesens": {
      "de": "er nimmt",
      "lv": "Он берет"
    },
    "imperfektIndikativ": {
      "de": "er nahm",
      "lv": "Он взял"
    },
    "imperfektKonjunktiv": {
      "de": "er nähme",
      "lv": "Он бы взял"
    },
    "partizipVergangenheit": {
      "de": "genommen",
      "lv": "Взятый"
    }
  },
  {
    "infinitiv": {
      "de": "nennen",
      "lv": "Назвать"
    },
    "praesens": {
      "de": "er nennt",
      "lv": "Он назвал"
    },
    "imperfektIndikativ": {
      "de": "er nannte",
      "lv": "Он позвонил"
    },
    "imperfektKonjunktiv": {
      "de": "er nennte",
      "lv": "Он бы назвал"
    },
    "partizipVergangenheit": {
      "de": "genannt",
      "lv": "Названный"
    }
  },
  {
    "infinitiv": {
      "de": "pfeifen",
      "lv": "Свистеть"
    },
    "praesens": {
      "de": "er pfeift",
      "lv": "Он свистит"
    },
    "imperfektIndikativ": {
      "de": "er pfiff",
      "lv": "Он свистнул"
    },
    "imperfektKonjunktiv": {
      "de": "er pfiffe",
      "lv": "Он свистнул бы"
    },
    "partizipVergangenheit": {
      "de": "gepfiffen",
      "lv": "Свистнул"
    }
  },
  {
    "infinitiv": {
      "de": "pflegen",
      "lv": "Поддерживать"
    },
    "praesens": {
      "de": "er pflegt",
      "lv": "Он заботится"
    },
    "imperfektIndikativ": {
      "de": "pflegte vai pflog",
      "lv": "Набор"
    },
    "imperfektKonjunktiv": {
      "de": "pflegte vai pflog",
      "lv": "Набор"
    },
    "partizipVergangenheit": {
      "de": "gepflegt vai gepflogen",
      "lv": "Ухоженный"
    }
  },
  {
    "infinitiv": {
      "de": "preisen",
      "lv": "Хвалить"
    },
    "praesens": {
      "de": "er preist",
      "lv": "Он хвалит"
    },
    "imperfektIndikativ": {
      "de": "er pries",
      "lv": "Он похвалил"
    },
    "imperfektKonjunktiv": {
      "de": "er priese",
      "lv": "Он бы похвалил"
    },
    "partizipVergangenheit": {
      "de": "gepriesen",
      "lv": "Хвалил"
    }
  },
  {
    "infinitiv": {
      "de": "quellen",
      "lv": "Пухнуть"
    },
    "praesens": {
      "de": "er quillt",
      "lv": "Он толстеет"
    },
    "imperfektIndikativ": {
      "de": "er quoll",
      "lv": "Он повзрослел"
    },
    "imperfektKonjunktiv": {
      "de": "er quölle",
      "lv": "Он толстый"
    },
    "partizipVergangenheit": {
      "de": "gequollen (er ist)",
      "lv": "Вздутый"
    }
  },
  {
    "infinitiv": {
      "de": "raten",
      "lv": "Предложить / упомянуть"
    },
    "praesens": {
      "de": "er rät",
      "lv": "Он рекомендует / мин"
    },
    "imperfektIndikativ": {
      "de": "er riet",
      "lv": "Он предложил/предложил"
    },
    "imperfektKonjunktiv": {
      "de": "er riete",
      "lv": "Он бы предложил / упомянул"
    },
    "partizipVergangenheit": {
      "de": "geraten",
      "lv": "Предложил/упомянул"
    }
  },
  {
    "infinitiv": {
      "de": "reiben",
      "lv": "Тереть"
    },
    "praesens": {
      "de": "er reibt",
      "lv": "Он трет"
    },
    "imperfektIndikativ": {
      "de": "er rieb",
      "lv": "Он трет"
    },
    "imperfektKonjunktiv": {
      "de": "er riebe",
      "lv": "Он будет тереть"
    },
    "partizipVergangenheit": {
      "de": "gerieben",
      "lv": "Потертый"
    }
  },
  {
    "infinitiv": {
      "de": "reißen",
      "lv": "Тянуть"
    },
    "praesens": {
      "de": "er reißt",
      "lv": "Он щелкает"
    },
    "imperfektIndikativ": {
      "de": "er riss",
      "lv": "Он огрызнулся"
    },
    "imperfektKonjunktiv": {
      "de": "er risse",
      "lv": "Он огрызнулся"
    },
    "partizipVergangenheit": {
      "de": "gerissen",
      "lv": "Разорванный"
    }
  },
  {
    "infinitiv": {
      "de": "reiten",
      "lv": "Кататься"
    },
    "praesens": {
      "de": "er reitet",
      "lv": "Он едет"
    },
    "imperfektIndikativ": {
      "de": "er ritt",
      "lv": "Он ехал"
    },
    "imperfektKonjunktiv": {
      "de": "er ritte",
      "lv": "Он будет кататься"
    },
    "partizipVergangenheit": {
      "de": "geritten (er ist)",
      "lv": "Ехал"
    }
  },
  {
    "infinitiv": {
      "de": "rennen",
      "lv": "Бежать"
    },
    "praesens": {
      "de": "er rennt",
      "lv": "Он бежит"
    },
    "imperfektIndikativ": {
      "de": "er rannte",
      "lv": "Он побежал"
    },
    "imperfektKonjunktiv": {
      "de": "er rennte",
      "lv": "Он побежит"
    },
    "partizipVergangenheit": {
      "de": "gerannt",
      "lv": "Побежал"
    }
  },
  {
    "infinitiv": {
      "de": "riechen",
      "lv": "Ост"
    },
    "praesens": {
      "de": "er riecht",
      "lv": "Он пахнет"
    },
    "imperfektIndikativ": {
      "de": "er roch",
      "lv": "Он поет"
    },
    "imperfektKonjunktiv": {
      "de": "er röche",
      "lv": "Он портирует"
    },
    "partizipVergangenheit": {
      "de": "gerochen",
      "lv": "Порт"
    }
  },
  {
    "infinitiv": {
      "de": "ringen",
      "lv": "Сломать"
    },
    "praesens": {
      "de": "er ringt",
      "lv": "Он ломается"
    },
    "imperfektIndikativ": {
      "de": "er rang",
      "lv": "Он сломался"
    },
    "imperfektKonjunktiv": {
      "de": "er ränge",
      "lv": "Он бы сломался"
    },
    "partizipVergangenheit": {
      "de": "gerungen",
      "lv": "Ждать"
    }
  },
  {
    "infinitiv": {
      "de": "rinnen",
      "lv": "Течь"
    },
    "praesens": {
      "de": "er rinnt",
      "lv": "Он бежит"
    },
    "imperfektIndikativ": {
      "de": "er rann",
      "lv": "Он побежал"
    },
    "imperfektKonjunktiv": {
      "de": "er ränne / er rönne",
      "lv": "Он побежит"
    },
    "partizipVergangenheit": {
      "de": "geronnen (er ist)",
      "lv": "Потекло/свернулось"
    }
  },
  {
    "infinitiv": {
      "de": "rufen",
      "lv": "Позвонить"
    },
    "praesens": {
      "de": "er ruft",
      "lv": "Он звонит"
    },
    "imperfektIndikativ": {
      "de": "er rief",
      "lv": "Он позвонил"
    },
    "imperfektKonjunktiv": {
      "de": "er riefe",
      "lv": "Он позвонит"
    },
    "partizipVergangenheit": {
      "de": "gerufen",
      "lv": "Называется"
    }
  },
  {
    "infinitiv": {
      "de": "salzen",
      "lv": "Солить"
    },
    "praesens": {
      "de": "er salzt",
      "lv": "Он посолил"
    },
    "imperfektIndikativ": {
      "de": "er salzte",
      "lv": "Он посолил"
    },
    "imperfektKonjunktiv": {
      "de": "er salzte",
      "lv": "Он бы посолил"
    },
    "partizipVergangenheit": {
      "de": "gesalzen",
      "lv": "Соленый"
    }
  },
  {
    "infinitiv": {
      "de": "saufen",
      "lv": "Сушить/пить"
    },
    "praesens": {
      "de": "er säuft",
      "lv": "Он пьет/пьет"
    },
    "imperfektIndikativ": {
      "de": "er soff",
      "lv": "Он пил / пил"
    },
    "imperfektKonjunktiv": {
      "de": "er söffe",
      "lv": "Он бы выпил / выпил"
    },
    "partizipVergangenheit": {
      "de": "gesoffen",
      "lv": "Пьяный"
    }
  },
  {
    "infinitiv": {
      "de": "saugen",
      "lv": "Сосать"
    },
    "praesens": {
      "de": "er saugt",
      "lv": "Он отстой"
    },
    "imperfektIndikativ": {
      "de": "er sog",
      "lv": "Он отстой"
    },
    "imperfektKonjunktiv": {
      "de": "er söge",
      "lv": "Он будет отстой"
    },
    "partizipVergangenheit": {
      "de": "gesogen",
      "lv": "Отстой"
    }
  },
  {
    "infinitiv": {
      "de": "schaffen",
      "lv": "Создать"
    },
    "praesens": {
      "de": "er schafft",
      "lv": "Он создает"
    },
    "imperfektIndikativ": {
      "de": "er schuf",
      "lv": "Он создал"
    },
    "imperfektKonjunktiv": {
      "de": "er schüfe",
      "lv": "Он бы создал"
    },
    "partizipVergangenheit": {
      "de": "geschaffen",
      "lv": "Созданный"
    }
  },
  {
    "infinitiv": {
      "de": "schallen",
      "lv": "Звучать"
    },
    "praesens": {
      "de": "es schallt",
      "lv": "Это звучит"
    },
    "imperfektIndikativ": {
      "de": "schallte vai scholl",
      "lv": "Звучало"
    },
    "imperfektKonjunktiv": {
      "de": "schallte vai scholl",
      "lv": "Звучало"
    },
    "partizipVergangenheit": {
      "de": "geschallt",
      "lv": "Звучало"
    }
  },
  {
    "infinitiv": {
      "de": "scheiden",
      "lv": "Развод/расставание"
    },
    "praesens": {
      "de": "er scheidet",
      "lv": "Он разводится / разводится"
    },
    "imperfektIndikativ": {
      "de": "er schied",
      "lv": "Он развелся / развелся"
    },
    "imperfektKonjunktiv": {
      "de": "er schiede",
      "lv": "Он бы развелся/развёлся"
    },
    "partizipVergangenheit": {
      "de": "geschieden (er hat / er ist)",
      "lv": "Расстались/разведены"
    }
  },
  {
    "infinitiv": {
      "de": "scheinen",
      "lv": "Сиять / казаться"
    },
    "praesens": {
      "de": "er scheint",
      "lv": "Он сияет/кажется"
    },
    "imperfektIndikativ": {
      "de": "er schien",
      "lv": "Он сиял/казался"
    },
    "imperfektKonjunktiv": {
      "de": "er schiene",
      "lv": "Он будет сиять / казаться"
    },
    "partizipVergangenheit": {
      "de": "geschienen",
      "lv": "Светился/казался"
    }
  },
  {
    "infinitiv": {
      "de": "schelten",
      "lv": "Барт"
    },
    "praesens": {
      "de": "er schilt",
      "lv": "Он ругает"
    },
    "imperfektIndikativ": {
      "de": "er schalt",
      "lv": "Он запретил"
    },
    "imperfektKonjunktiv": {
      "de": "er schölte / er schälte",
      "lv": "Он бреется"
    },
    "partizipVergangenheit": {
      "de": "gescholten",
      "lv": "Борода"
    }
  },
  {
    "infinitiv": {
      "de": "scheren",
      "lv": "Резать"
    },
    "praesens": {
      "de": "er schert",
      "lv": "Он режет"
    },
    "imperfektIndikativ": {
      "de": "schor vai scherte",
      "lv": "Ножницы"
    },
    "imperfektKonjunktiv": {
      "de": "schor vai scherte",
      "lv": "Ножницы"
    },
    "partizipVergangenheit": {
      "de": "geschoren vai geschert",
      "lv": "Обрезанный"
    }
  },
  {
    "infinitiv": {
      "de": "schieben",
      "lv": "Толкать"
    },
    "praesens": {
      "de": "er schiebt",
      "lv": "Он толкает"
    },
    "imperfektIndikativ": {
      "de": "er schob",
      "lv": "Он толкнул"
    },
    "imperfektKonjunktiv": {
      "de": "er schöbe",
      "lv": "Он бы подтолкнул"
    },
    "partizipVergangenheit": {
      "de": "geschoben",
      "lv": "Толкнул"
    }
  },
  {
    "infinitiv": {
      "de": "schießen",
      "lv": "Стрелять"
    },
    "praesens": {
      "de": "er schießt",
      "lv": "Он стреляет"
    },
    "imperfektIndikativ": {
      "de": "er schoss",
      "lv": "Он выстрелил"
    },
    "imperfektKonjunktiv": {
      "de": "er schösse",
      "lv": "Он бы выстрелил"
    },
    "partizipVergangenheit": {
      "de": "geschossen",
      "lv": "Выстрелил"
    }
  },
  {
    "infinitiv": {
      "de": "schinden",
      "lv": "Мучить"
    },
    "praesens": {
      "de": "er schindet",
      "lv": "Он мучает"
    },
    "imperfektIndikativ": {
      "de": "schindete",
      "lv": "Измученный"
    },
    "imperfektKonjunktiv": {
      "de": "schindete",
      "lv": "Измученный"
    },
    "partizipVergangenheit": {
      "de": "geschunden",
      "lv": "Измученный"
    }
  },
  {
    "infinitiv": {
      "de": "schlafen",
      "lv": "Спать"
    },
    "praesens": {
      "de": "er schläft",
      "lv": "Он спит"
    },
    "imperfektIndikativ": {
      "de": "er schlief",
      "lv": "Он спал"
    },
    "imperfektKonjunktiv": {
      "de": "er schliefe",
      "lv": "Он будет спать"
    },
    "partizipVergangenheit": {
      "de": "geschlafen",
      "lv": "Спал"
    }
  },
  {
    "infinitiv": {
      "de": "schlagen",
      "lv": "Ударять"
    },
    "praesens": {
      "de": "er schlägt",
      "lv": "Он бьет"
    },
    "imperfektIndikativ": {
      "de": "er schlug",
      "lv": "Он ударил"
    },
    "imperfektKonjunktiv": {
      "de": "er schlüge",
      "lv": "Он бы ударил"
    },
    "partizipVergangenheit": {
      "de": "geschlagen",
      "lv": "Избитый"
    }
  },
  {
    "infinitiv": {
      "de": "schleichen",
      "lv": "Идет дождь"
    },
    "praesens": {
      "de": "er schleicht",
      "lv": "Он наклоняется"
    },
    "imperfektIndikativ": {
      "de": "er schlich",
      "lv": "Он шел дождь"
    },
    "imperfektKonjunktiv": {
      "de": "er schliche",
      "lv": "Он идет дождь"
    },
    "partizipVergangenheit": {
      "de": "geschlichen (er ist)",
      "lv": "Скончался"
    }
  },
  {
    "infinitiv": {
      "de": "schleifen",
      "lv": "Измельчать"
    },
    "praesens": {
      "de": "er schleift",
      "lv": "Он шлифует"
    },
    "imperfektIndikativ": {
      "de": "er schliff",
      "lv": "Он измельчал"
    },
    "imperfektKonjunktiv": {
      "de": "er schliffe",
      "lv": "Он будет измельчать"
    },
    "partizipVergangenheit": {
      "de": "geschliffen",
      "lv": "Полированный"
    }
  },
  {
    "infinitiv": {
      "de": "schließen",
      "lv": "Закрыть"
    },
    "praesens": {
      "de": "er schließt",
      "lv": "Он закрывает"
    },
    "imperfektIndikativ": {
      "de": "er schloss",
      "lv": "Он закрылся"
    },
    "imperfektKonjunktiv": {
      "de": "er schlösse",
      "lv": "Он бы закрылся"
    },
    "partizipVergangenheit": {
      "de": "geschlossen",
      "lv": "Закрыто"
    }
  },
  {
    "infinitiv": {
      "de": "schlingen",
      "lv": "Завтра"
    },
    "praesens": {
      "de": "er schlingt",
      "lv": "Он глотает"
    },
    "imperfektIndikativ": {
      "de": "er schlang",
      "lv": "Он проглотил"
    },
    "imperfektKonjunktiv": {
      "de": "er schlänge",
      "lv": "Он утром"
    },
    "partizipVergangenheit": {
      "de": "geschlungen",
      "lv": "Утро"
    }
  },
  {
    "infinitiv": {
      "de": "schmeißen",
      "lv": "Бросать"
    },
    "praesens": {
      "de": "er schmeißt",
      "lv": "Он бросает"
    },
    "imperfektIndikativ": {
      "de": "er schmiss",
      "lv": "Он бросил"
    },
    "imperfektKonjunktiv": {
      "de": "er schmisse",
      "lv": "Он бросил"
    },
    "partizipVergangenheit": {
      "de": "geschmissen",
      "lv": "Брошенный"
    }
  },
  {
    "infinitiv": {
      "de": "schmelzen",
      "lv": "Движущийся"
    },
    "praesens": {
      "de": "er schmilzt",
      "lv": "Он тает"
    },
    "imperfektIndikativ": {
      "de": "er schmolz",
      "lv": "Он застонал"
    },
    "imperfektKonjunktiv": {
      "de": "er schmölze",
      "lv": "Он двигался"
    },
    "partizipVergangenheit": {
      "de": "geschmolzen (er ist)",
      "lv": "Расплавленный"
    }
  },
  {
    "infinitiv": {
      "de": "schnauben",
      "lv": "Шипеть"
    },
    "praesens": {
      "de": "er schnaubt",
      "lv": "Он фыркает"
    },
    "imperfektIndikativ": {
      "de": "schnaubte vai schnob",
      "lv": "Фыркнул"
    },
    "imperfektKonjunktiv": {
      "de": "schnaubte vai schnob",
      "lv": "Фыркнул"
    },
    "partizipVergangenheit": {
      "de": "geschnaubt vai geschnoben",
      "lv": "Фыркать"
    }
  },
  {
    "infinitiv": {
      "de": "schneiden",
      "lv": "Резать"
    },
    "praesens": {
      "de": "er schneidet",
      "lv": "Он вращается"
    },
    "imperfektIndikativ": {
      "de": "er schnitt",
      "lv": "Он резал"
    },
    "imperfektKonjunktiv": {
      "de": "er schnitte",
      "lv": "Он бы порезал"
    },
    "partizipVergangenheit": {
      "de": "geschnitten",
      "lv": "Резать"
    }
  },
  {
    "infinitiv": {
      "de": "schreiben",
      "lv": "Писать"
    },
    "praesens": {
      "de": "er schreibt",
      "lv": "Он пишет"
    },
    "imperfektIndikativ": {
      "de": "er schrieb",
      "lv": "Он написал"
    },
    "imperfektKonjunktiv": {
      "de": "er schriebe",
      "lv": "Он бы написал"
    },
    "partizipVergangenheit": {
      "de": "geschrieben",
      "lv": "Написано"
    }
  },
  {
    "infinitiv": {
      "de": "schreien",
      "lv": "Кричать"
    },
    "praesens": {
      "de": "er schreit",
      "lv": "Он кричит"
    },
    "imperfektIndikativ": {
      "de": "er schrie",
      "lv": "Он кричал"
    },
    "imperfektKonjunktiv": {
      "de": "er schriee",
      "lv": "Он кричал бы"
    },
    "partizipVergangenheit": {
      "de": "geschrien",
      "lv": "Кричал"
    }
  },
  {
    "infinitiv": {
      "de": "schreiten",
      "lv": "Ходьба"
    },
    "praesens": {
      "de": "er schreitet",
      "lv": "Он идет"
    },
    "imperfektIndikativ": {
      "de": "er schritt",
      "lv": "Он шел"
    },
    "imperfektKonjunktiv": {
      "de": "er schritte",
      "lv": "Он будет ходить"
    },
    "partizipVergangenheit": {
      "de": "geschritten (er ist)",
      "lv": "Шел"
    }
  },
  {
    "infinitiv": {
      "de": "schweigen",
      "lv": "Молчи"
    },
    "praesens": {
      "de": "er schweigt",
      "lv": "Он молчит"
    },
    "imperfektIndikativ": {
      "de": "er schwieg",
      "lv": "Он молчал"
    },
    "imperfektKonjunktiv": {
      "de": "er schwiege",
      "lv": "Он будет молчать"
    },
    "partizipVergangenheit": {
      "de": "geschwiegen",
      "lv": "Заставил замолчать"
    }
  },
  {
    "infinitiv": {
      "de": "schwellen",
      "lv": "Памп"
    },
    "praesens": {
      "de": "er schwillt",
      "lv": "Он дуется"
    },
    "imperfektIndikativ": {
      "de": "er schwoll",
      "lv": "Он пампас"
    },
    "imperfektKonjunktiv": {
      "de": "er schwölle",
      "lv": "Он бы накачал"
    },
    "partizipVergangenheit": {
      "de": "geschwollen (er ist)",
      "lv": "Насос"
    }
  },
  {
    "infinitiv": {
      "de": "schwimmen",
      "lv": "Плавать"
    },
    "praesens": {
      "de": "er schwimmt",
      "lv": "Он плавает"
    },
    "imperfektIndikativ": {
      "de": "er schwamm",
      "lv": "Он плавал"
    },
    "imperfektKonjunktiv": {
      "de": "er schwömme / er schwämme",
      "lv": "Он бы плавал"
    },
    "partizipVergangenheit": {
      "de": "geschwommen (er ist)",
      "lv": "Плавал"
    }
  },
  {
    "infinitiv": {
      "de": "schwinden",
      "lv": "Пропадать"
    },
    "praesens": {
      "de": "er schwindet",
      "lv": "Он исчезает"
    },
    "imperfektIndikativ": {
      "de": "er schwand",
      "lv": "Он исчез"
    },
    "imperfektKonjunktiv": {
      "de": "er schwände",
      "lv": "Он исчезнет"
    },
    "partizipVergangenheit": {
      "de": "geschwunden (er ist)",
      "lv": "Потерянный"
    }
  },
  {
    "infinitiv": {
      "de": "schwingen",
      "lv": "Волна"
    },
    "praesens": {
      "de": "er schwingt",
      "lv": "Он машет рукой"
    },
    "imperfektIndikativ": {
      "de": "er schwang",
      "lv": "Он помахал рукой"
    },
    "imperfektKonjunktiv": {
      "de": "er schwänge",
      "lv": "Он помахал бы"
    },
    "partizipVergangenheit": {
      "de": "geschwungen",
      "lv": "Помахал рукой"
    }
  },
  {
    "infinitiv": {
      "de": "schwören",
      "lv": "Ругаться"
    },
    "praesens": {
      "de": "er schwört",
      "lv": "Он ругается"
    },
    "imperfektIndikativ": {
      "de": "er schwur / er schwor",
      "lv": "Он поклялся"
    },
    "imperfektKonjunktiv": {
      "de": "er schwöre",
      "lv": "Он бы поклялся"
    },
    "partizipVergangenheit": {
      "de": "geschworen",
      "lv": "Присягнул"
    }
  },
  {
    "infinitiv": {
      "de": "sehen",
      "lv": "Чтобы увидеть"
    },
    "praesens": {
      "de": "er sieht",
      "lv": "Он видит"
    },
    "imperfektIndikativ": {
      "de": "er sah",
      "lv": "Он увидел"
    },
    "imperfektKonjunktiv": {
      "de": "er sähe",
      "lv": "Он увидит"
    },
    "partizipVergangenheit": {
      "de": "gesehen",
      "lv": "Видимый"
    }
  },
  {
    "infinitiv": {
      "de": "sein",
      "lv": "Быть"
    },
    "praesens": {
      "de": "er ist",
      "lv": "Он"
    },
    "imperfektIndikativ": {
      "de": "war",
      "lv": "Был"
    },
    "imperfektKonjunktiv": {
      "de": "war",
      "lv": "Был"
    },
    "partizipVergangenheit": {
      "de": "gewesen",
      "lv": "Был"
    }
  },
  {
    "infinitiv": {
      "de": "senden",
      "lv": "Отправить"
    },
    "praesens": {
      "de": "er sendet",
      "lv": "Он посылает"
    },
    "imperfektIndikativ": {
      "de": "er sandte / er sendete",
      "lv": "Он отправил"
    },
    "imperfektKonjunktiv": {
      "de": "er sendete",
      "lv": "Он бы послал"
    },
    "partizipVergangenheit": {
      "de": "gesandt / gesendet",
      "lv": "Отправил"
    }
  },
  {
    "infinitiv": {
      "de": "sieden",
      "lv": "Варить"
    },
    "praesens": {
      "de": "er siedet",
      "lv": "Он готовит"
    },
    "imperfektIndikativ": {
      "de": "sott vai siedete",
      "lv": "Приготовленный"
    },
    "imperfektKonjunktiv": {
      "de": "sott vai siedete",
      "lv": "Приготовленный"
    },
    "partizipVergangenheit": {
      "de": "gesotten vai gesiedet",
      "lv": "Вареный"
    }
  },
  {
    "infinitiv": {
      "de": "singen",
      "lv": "Петь"
    },
    "praesens": {
      "de": "er singt",
      "lv": "Он поет"
    },
    "imperfektIndikativ": {
      "de": "er sang",
      "lv": "Он пел"
    },
    "imperfektKonjunktiv": {
      "de": "er sänge",
      "lv": "Он будет петь"
    },
    "partizipVergangenheit": {
      "de": "gesungen",
      "lv": "Поется"
    }
  },
  {
    "infinitiv": {
      "de": "sinken",
      "lv": "Тонуть"
    },
    "praesens": {
      "de": "er sinkt",
      "lv": "Он тонет"
    },
    "imperfektIndikativ": {
      "de": "er sank",
      "lv": "Он придумывал"
    },
    "imperfektKonjunktiv": {
      "de": "er sänke",
      "lv": "Он бы утонул"
    },
    "partizipVergangenheit": {
      "de": "gesunken (er ist)",
      "lv": "Составить"
    }
  },
  {
    "infinitiv": {
      "de": "sinnen",
      "lv": "Удивляться"
    },
    "praesens": {
      "de": "er sinnt",
      "lv": "Он задается вопросом"
    },
    "imperfektIndikativ": {
      "de": "er sann",
      "lv": "Он задавался вопросом"
    },
    "imperfektKonjunktiv": {
      "de": "er sönne / er sänne",
      "lv": "Он будет задаваться вопросом"
    },
    "partizipVergangenheit": {
      "de": "gesonnen",
      "lv": "Единомышленник"
    }
  },
  {
    "infinitiv": {
      "de": "sitzen",
      "lv": "Сидеть"
    },
    "praesens": {
      "de": "er sitzt",
      "lv": "Он сидит"
    },
    "imperfektIndikativ": {
      "de": "er sass",
      "lv": "Он сидел"
    },
    "imperfektKonjunktiv": {
      "de": "er säße",
      "lv": "Он будет сидеть"
    },
    "partizipVergangenheit": {
      "de": "gesessen",
      "lv": "Сел"
    }
  },
  {
    "infinitiv": {
      "de": "sollen",
      "lv": "Нужно / быть обязанным"
    },
    "praesens": {
      "de": "er soll",
      "lv": "Ему нужен"
    },
    "imperfektIndikativ": {
      "de": "sollte",
      "lv": "Должен был иметь"
    },
    "imperfektKonjunktiv": {
      "de": "sollte",
      "lv": "Должен был иметь"
    },
    "partizipVergangenheit": {
      "de": "gesollt",
      "lv": "Нужный"
    }
  },
  {
    "infinitiv": {
      "de": "speien",
      "lv": "Плевать"
    },
    "praesens": {
      "de": "er speit",
      "lv": "Он плюет"
    },
    "imperfektIndikativ": {
      "de": "er spie",
      "lv": "Он плюнул"
    },
    "imperfektKonjunktiv": {
      "de": "er spie",
      "lv": "Он бы плюнул"
    },
    "partizipVergangenheit": {
      "de": "gespien",
      "lv": "Выплюнул"
    }
  },
  {
    "infinitiv": {
      "de": "spinnen",
      "lv": "Вращаться"
    },
    "praesens": {
      "de": "er spinnt",
      "lv": "Он крутит"
    },
    "imperfektIndikativ": {
      "de": "er spann",
      "lv": "Он крутился"
    },
    "imperfektKonjunktiv": {
      "de": "er spönne / er spänne",
      "lv": "Он будет вращаться"
    },
    "partizipVergangenheit": {
      "de": "gesponnen",
      "lv": "Вращался"
    }
  },
  {
    "infinitiv": {
      "de": "spleißen",
      "lv": "Соединить"
    },
    "praesens": {
      "de": "er spleißt",
      "lv": "Он соединяет"
    },
    "imperfektIndikativ": {
      "de": "spliss",
      "lv": "Подключен"
    },
    "imperfektKonjunktiv": {
      "de": "spliss",
      "lv": "Подключен"
    },
    "partizipVergangenheit": {
      "de": "gesplissen",
      "lv": "Подключен"
    }
  },
  {
    "infinitiv": {
      "de": "sprechen",
      "lv": "Говорить"
    },
    "praesens": {
      "de": "er spricht",
      "lv": "Он говорит"
    },
    "imperfektIndikativ": {
      "de": "er sprach",
      "lv": "Он говорил"
    },
    "imperfektKonjunktiv": {
      "de": "er spräche",
      "lv": "Он будет говорить"
    },
    "partizipVergangenheit": {
      "de": "gesprochen",
      "lv": "Разговорный"
    }
  },
  {
    "infinitiv": {
      "de": "sprießen",
      "lv": "Процветать"
    },
    "praesens": {
      "de": "er sprießt",
      "lv": "Он процветает"
    },
    "imperfektIndikativ": {
      "de": "er spross",
      "lv": "Он процветал"
    },
    "imperfektKonjunktiv": {
      "de": "er sprösse",
      "lv": "Он полка"
    },
    "partizipVergangenheit": {
      "de": "gesprossen (er ist)",
      "lv": "Плечо"
    }
  },
  {
    "infinitiv": {
      "de": "springen",
      "lv": "Прыгать"
    },
    "praesens": {
      "de": "er springt",
      "lv": "Он прыгает"
    },
    "imperfektIndikativ": {
      "de": "er sprang",
      "lv": "Он прыгнул"
    },
    "imperfektKonjunktiv": {
      "de": "er spränge",
      "lv": "Он бы прыгнул"
    },
    "partizipVergangenheit": {
      "de": "gesprungen (er ist)",
      "lv": "Линза"
    }
  },
  {
    "infinitiv": {
      "de": "stechen",
      "lv": "Нанести удар"
    },
    "praesens": {
      "de": "er sticht",
      "lv": "Он наносит удар"
    },
    "imperfektIndikativ": {
      "de": "er stach",
      "lv": "Он ударил"
    },
    "imperfektKonjunktiv": {
      "de": "er stäche",
      "lv": "Он бы ударил"
    },
    "partizipVergangenheit": {
      "de": "gestochen",
      "lv": "Зарезан"
    }
  },
  {
    "infinitiv": {
      "de": "stecken",
      "lv": "Втыкать / втыкать"
    },
    "praesens": {
      "de": "er steckt",
      "lv": "Он толкает"
    },
    "imperfektIndikativ": {
      "de": "stak vai steckte",
      "lv": "Фаршированный"
    },
    "imperfektKonjunktiv": {
      "de": "stak vai steckte",
      "lv": "Фаршированный"
    },
    "partizipVergangenheit": {
      "de": "gesteckt",
      "lv": "Фаршированный"
    }
  },
  {
    "infinitiv": {
      "de": "stehen",
      "lv": "Стоять"
    },
    "praesens": {
      "de": "er steht",
      "lv": "Он стоит"
    },
    "imperfektIndikativ": {
      "de": "er stand",
      "lv": "Он стоял"
    },
    "imperfektKonjunktiv": {
      "de": "er stände / er stünde",
      "lv": "Он будет стоять"
    },
    "partizipVergangenheit": {
      "de": "gestanden",
      "lv": "Стоя"
    }
  },
  {
    "infinitiv": {
      "de": "stehlen",
      "lv": "Украсть"
    },
    "praesens": {
      "de": "er stiehlt",
      "lv": "Он ворует"
    },
    "imperfektIndikativ": {
      "de": "er stahl",
      "lv": "Он украл"
    },
    "imperfektKonjunktiv": {
      "de": "er stöhle / er stähle",
      "lv": "Он бы украл"
    },
    "partizipVergangenheit": {
      "de": "gestohlen",
      "lv": "Украденный"
    }
  },
  {
    "infinitiv": {
      "de": "steigen",
      "lv": "Подняться"
    },
    "praesens": {
      "de": "er steigt",
      "lv": "Он лезет"
    },
    "imperfektIndikativ": {
      "de": "er stieg",
      "lv": "Он поднялся"
    },
    "imperfektKonjunktiv": {
      "de": "er stiege",
      "lv": "Он бы поднялся"
    },
    "partizipVergangenheit": {
      "de": "gestiegen (er ist)",
      "lv": "Поднялся"
    }
  },
  {
    "infinitiv": {
      "de": "sterben",
      "lv": "Умереть"
    },
    "praesens": {
      "de": "er stirbt",
      "lv": "Он умирает"
    },
    "imperfektIndikativ": {
      "de": "er starb",
      "lv": "Он умер"
    },
    "imperfektKonjunktiv": {
      "de": "er stürbe",
      "lv": "Он умрет"
    },
    "partizipVergangenheit": {
      "de": "gestorben (er ist)",
      "lv": "Мертвый"
    }
  },
  {
    "infinitiv": {
      "de": "stieben",
      "lv": "Пена / водоворот"
    },
    "praesens": {
      "de": "es stiebt",
      "lv": "Оно дует"
    },
    "imperfektIndikativ": {
      "de": "stob vai stiebte",
      "lv": "Вспененный"
    },
    "imperfektKonjunktiv": {
      "de": "stob vai stiebte",
      "lv": "Вспененный"
    },
    "partizipVergangenheit": {
      "de": "gestoben vai gestiebt",
      "lv": "Испорченный"
    }
  },
  {
    "infinitiv": {
      "de": "stinken",
      "lv": "Чувствовать запах"
    },
    "praesens": {
      "de": "es stinkt",
      "lv": "Воняет"
    },
    "imperfektIndikativ": {
      "de": "stank",
      "lv": "Пахло"
    },
    "imperfektKonjunktiv": {
      "de": "stank",
      "lv": "Пахло"
    },
    "partizipVergangenheit": {
      "de": "gestunken",
      "lv": "Вонючий"
    }
  },
  {
    "infinitiv": {
      "de": "stoßen",
      "lv": "Толкать"
    },
    "praesens": {
      "de": "er stößt",
      "lv": "Он толкает"
    },
    "imperfektIndikativ": {
      "de": "er stieß",
      "lv": "Он толкнул"
    },
    "imperfektKonjunktiv": {
      "de": "er stieße",
      "lv": "Он толкал"
    },
    "partizipVergangenheit": {
      "de": "gestoßen",
      "lv": "Толкнул"
    }
  },
  {
    "infinitiv": {
      "de": "streichen",
      "lv": "Краска/полоска"
    },
    "praesens": {
      "de": "er streicht",
      "lv": "Он рисует/полоски"
    },
    "imperfektIndikativ": {
      "de": "er strich",
      "lv": "Он нарисовал/полосатый"
    },
    "imperfektKonjunktiv": {
      "de": "er striche",
      "lv": "Он бы покрасил / раздевал"
    },
    "partizipVergangenheit": {
      "de": "gestrichen",
      "lv": "Окрашенный/полосатый"
    }
  },
  {
    "infinitiv": {
      "de": "streiten",
      "lv": "Сражаться"
    },
    "praesens": {
      "de": "er streitet",
      "lv": "Он борется"
    },
    "imperfektIndikativ": {
      "de": "er stritt",
      "lv": "Он боролся"
    },
    "imperfektKonjunktiv": {
      "de": "er stritte",
      "lv": "Он будет драться"
    },
    "partizipVergangenheit": {
      "de": "gestritten",
      "lv": "Дрался"
    }
  },
  {
    "infinitiv": {
      "de": "tragen",
      "lv": "Нести"
    },
    "praesens": {
      "de": "er trägt",
      "lv": "Он несет"
    },
    "imperfektIndikativ": {
      "de": "er trug",
      "lv": "Он нес"
    },
    "imperfektKonjunktiv": {
      "de": "er trüge",
      "lv": "Он будет нести"
    },
    "partizipVergangenheit": {
      "de": "getragen",
      "lv": "Унесенный"
    }
  },
  {
    "infinitiv": {
      "de": "treffen",
      "lv": "Столкнуться"
    },
    "praesens": {
      "de": "er trifft",
      "lv": "Он встречает"
    },
    "imperfektIndikativ": {
      "de": "er traf",
      "lv": "Он столкнулся"
    },
    "imperfektKonjunktiv": {
      "de": "er träfe",
      "lv": "Он столкнется"
    },
    "partizipVergangenheit": {
      "de": "getroffen",
      "lv": "Столкнулся"
    }
  },
  {
    "infinitiv": {
      "de": "treiben",
      "lv": "Гнаться"
    },
    "praesens": {
      "de": "er treibt",
      "lv": "Он водит"
    },
    "imperfektIndikativ": {
      "de": "er trieb",
      "lv": "Он ехал"
    },
    "imperfektKonjunktiv": {
      "de": "er triebe",
      "lv": "Он будет водить машину"
    },
    "partizipVergangenheit": {
      "de": "getrieben",
      "lv": "Преследовали"
    }
  },
  {
    "infinitiv": {
      "de": "treten",
      "lv": "Войти/пойти"
    },
    "praesens": {
      "de": "er tritt",
      "lv": "Он входит/уходит"
    },
    "imperfektIndikativ": {
      "de": "er trat",
      "lv": "Он стоял/шел"
    },
    "imperfektKonjunktiv": {
      "de": "er träte",
      "lv": "Он бы встал/пошёл"
    },
    "partizipVergangenheit": {
      "de": "getreten (er ist)",
      "lv": "Стоял/шел"
    }
  },
  {
    "infinitiv": {
      "de": "trinken",
      "lv": "Пить"
    },
    "praesens": {
      "de": "er trinkt",
      "lv": "Он пьет"
    },
    "imperfektIndikativ": {
      "de": "er trank",
      "lv": "Он пил"
    },
    "imperfektKonjunktiv": {
      "de": "er tränke",
      "lv": "Он бы пил"
    },
    "partizipVergangenheit": {
      "de": "getrunken",
      "lv": "Пьяный"
    }
  },
  {
    "infinitiv": {
      "de": "trügen",
      "lv": "Обманывать"
    },
    "praesens": {
      "de": "er trögt",
      "lv": "Он обманывает"
    },
    "imperfektIndikativ": {
      "de": "er trog",
      "lv": "Он обманул"
    },
    "imperfektKonjunktiv": {
      "de": "er tröge",
      "lv": "Он бы обманул"
    },
    "partizipVergangenheit": {
      "de": "getrogen",
      "lv": "Обманул"
    }
  },
  {
    "infinitiv": {
      "de": "tun",
      "lv": "Делать"
    },
    "praesens": {
      "de": "er tut",
      "lv": "Он делает"
    },
    "imperfektIndikativ": {
      "de": "er tat",
      "lv": "Он сделал"
    },
    "imperfektKonjunktiv": {
      "de": "er täte",
      "lv": "Он бы сделал"
    },
    "partizipVergangenheit": {
      "de": "getan",
      "lv": "Сделанный"
    }
  },
  {
    "infinitiv": {
      "de": "verderben",
      "lv": "Повредить"
    },
    "praesens": {
      "de": "er verdirbt",
      "lv": "Он уничтожает"
    },
    "imperfektIndikativ": {
      "de": "er verdarb",
      "lv": "Он повредил"
    },
    "imperfektKonjunktiv": {
      "de": "er verdürbe",
      "lv": "Он повредит"
    },
    "partizipVergangenheit": {
      "de": "verdorben",
      "lv": "Поврежден"
    }
  },
  {
    "infinitiv": {
      "de": "verdrießen",
      "lv": "Вызвать раздражение"
    },
    "praesens": {
      "de": "er verdrießt",
      "lv": "Он вызывает раздражение"
    },
    "imperfektIndikativ": {
      "de": "er verdross",
      "lv": "Он вызвал раздражение"
    },
    "imperfektKonjunktiv": {
      "de": "er verdrösse",
      "lv": "Он вызовет раздражение"
    },
    "partizipVergangenheit": {
      "de": "verdrossen",
      "lv": "Расстройство"
    }
  },
  {
    "infinitiv": {
      "de": "vergessen",
      "lv": "Забывать"
    },
    "praesens": {
      "de": "er vergisst",
      "lv": "Он забывает"
    },
    "imperfektIndikativ": {
      "de": "er vergass",
      "lv": "Он забыл"
    },
    "imperfektKonjunktiv": {
      "de": "er vergäße",
      "lv": "Он бы забыл"
    },
    "partizipVergangenheit": {
      "de": "vergessen",
      "lv": "Забытый"
    }
  },
  {
    "infinitiv": {
      "de": "verlieren",
      "lv": "Потерять"
    },
    "praesens": {
      "de": "er verliert",
      "lv": "Он проигрывает"
    },
    "imperfektIndikativ": {
      "de": "er verlor",
      "lv": "Он проиграл"
    },
    "imperfektKonjunktiv": {
      "de": "er verlöre",
      "lv": "Он проиграет"
    },
    "partizipVergangenheit": {
      "de": "verloren",
      "lv": "Потерянный"
    }
  },
  {
    "infinitiv": {
      "de": "wachsen",
      "lv": "Расти"
    },
    "praesens": {
      "de": "er wächst",
      "lv": "Он растет"
    },
    "imperfektIndikativ": {
      "de": "er wuchs",
      "lv": "Он рос"
    },
    "imperfektKonjunktiv": {
      "de": "er wüchse",
      "lv": "Он вырастет"
    },
    "partizipVergangenheit": {
      "de": "gewachsen (er ist)",
      "lv": "Вырос"
    }
  },
  {
    "infinitiv": {
      "de": "waschen",
      "lv": "Мыть"
    },
    "praesens": {
      "de": "er wäscht",
      "lv": "Он моет"
    },
    "imperfektIndikativ": {
      "de": "er wusch",
      "lv": "Он мыл"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsche",
      "lv": "Он будет мыть"
    },
    "partizipVergangenheit": {
      "de": "gewaschen",
      "lv": "Промытый"
    }
  },
  {
    "infinitiv": {
      "de": "weben",
      "lv": "Ткать"
    },
    "praesens": {
      "de": "er webt",
      "lv": "Он плетет"
    },
    "imperfektIndikativ": {
      "de": "wob",
      "lv": "Салфетка"
    },
    "imperfektKonjunktiv": {
      "de": "wob",
      "lv": "Салфетка"
    },
    "partizipVergangenheit": {
      "de": "gewoben",
      "lv": "Сотканный"
    }
  },
  {
    "infinitiv": {
      "de": "weichen",
      "lv": "Вывести"
    },
    "praesens": {
      "de": "er weicht",
      "lv": "Он отступает"
    },
    "imperfektIndikativ": {
      "de": "er wich",
      "lv": "Он отступил назад"
    },
    "imperfektKonjunktiv": {
      "de": "er wiche",
      "lv": "Он бы отступил"
    },
    "partizipVergangenheit": {
      "de": "gewichen (er ist)",
      "lv": "Отступить"
    }
  },
  {
    "infinitiv": {
      "de": "weisen",
      "lv": "Показывать"
    },
    "praesens": {
      "de": "er weist",
      "lv": "Он показывает"
    },
    "imperfektIndikativ": {
      "de": "er wies",
      "lv": "Он показал"
    },
    "imperfektKonjunktiv": {
      "de": "er wiese",
      "lv": "Он бы показал"
    },
    "partizipVergangenheit": {
      "de": "gewiesen",
      "lv": "Показано"
    }
  },
  {
    "infinitiv": {
      "de": "wenden",
      "lv": "Изменить/обрезать"
    },
    "praesens": {
      "de": "er wendet",
      "lv": "Он крутит/поворачивает"
    },
    "imperfektIndikativ": {
      "de": "er wandte / es wendete",
      "lv": "Он крутил/перевернул"
    },
    "imperfektKonjunktiv": {
      "de": "er wendete",
      "lv": "Он бы исправил/отменил"
    },
    "partizipVergangenheit": {
      "de": "gewandt / gewendet",
      "lv": "Изменено/отменено"
    }
  },
  {
    "infinitiv": {
      "de": "werben",
      "lv": "Предложить"
    },
    "praesens": {
      "de": "er wirbt",
      "lv": "Он предлагает"
    },
    "imperfektIndikativ": {
      "de": "er warb",
      "lv": "Он предложил"
    },
    "imperfektKonjunktiv": {
      "de": "er würbe",
      "lv": "Он бы предложил"
    },
    "partizipVergangenheit": {
      "de": "geworben",
      "lv": "Предложил"
    }
  },
  {
    "infinitiv": {
      "de": "werden",
      "lv": "Стать"
    },
    "praesens": {
      "de": "er wird",
      "lv": "Он становится"
    },
    "imperfektIndikativ": {
      "de": "wurde",
      "lv": "Стал"
    },
    "imperfektKonjunktiv": {
      "de": "wurde",
      "lv": "Стал"
    },
    "partizipVergangenheit": {
      "de": "geworden",
      "lv": "Стал"
    }
  },
  {
    "infinitiv": {
      "de": "werfen",
      "lv": "Бросать"
    },
    "praesens": {
      "de": "er wirft",
      "lv": "Он бросает"
    },
    "imperfektIndikativ": {
      "de": "er warf",
      "lv": "Он бросил"
    },
    "imperfektKonjunktiv": {
      "de": "er würfe",
      "lv": "Он бросил"
    },
    "partizipVergangenheit": {
      "de": "geworfen",
      "lv": "Брошенный"
    }
  },
  {
    "infinitiv": {
      "de": "wiegen",
      "lv": "Взвешивать"
    },
    "praesens": {
      "de": "er wiegt",
      "lv": "Он весит"
    },
    "imperfektIndikativ": {
      "de": "er wog",
      "lv": "Он весил"
    },
    "imperfektKonjunktiv": {
      "de": "er wöge",
      "lv": "Он будет весить"
    },
    "partizipVergangenheit": {
      "de": "gewogen",
      "lv": "Взвешенный"
    }
  },
  {
    "infinitiv": {
      "de": "winden",
      "lv": "Коса"
    },
    "praesens": {
      "de": "er windet",
      "lv": "Он прикалывает"
    },
    "imperfektIndikativ": {
      "de": "er wand",
      "lv": "Он заплетает косы"
    },
    "imperfektKonjunktiv": {
      "de": "er wände",
      "lv": "Он бы заплел косу"
    },
    "partizipVergangenheit": {
      "de": "gewunden",
      "lv": "Плетеный"
    }
  },
  {
    "infinitiv": {
      "de": "wissen",
      "lv": "Знать"
    },
    "praesens": {
      "de": "er weiß",
      "lv": "Он знает"
    },
    "imperfektIndikativ": {
      "de": "er wusste",
      "lv": "Он знал"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsste",
      "lv": "Он бы знал"
    },
    "partizipVergangenheit": {
      "de": "gewusst",
      "lv": "Известный"
    }
  },
  {
    "infinitiv": {
      "de": "wollen",
      "lv": "Хочу"
    },
    "praesens": {
      "de": "er will",
      "lv": "Он хочет"
    },
    "imperfektIndikativ": {
      "de": "wollte",
      "lv": "Хотел"
    },
    "imperfektKonjunktiv": {
      "de": "wollte",
      "lv": "Хотел"
    },
    "partizipVergangenheit": {
      "de": "gewollt",
      "lv": "Хотел"
    }
  },
  {
    "infinitiv": {
      "de": "wringen",
      "lv": "Вырезать/выжать"
    },
    "praesens": {
      "de": "er wringt",
      "lv": "Он вырезает"
    },
    "imperfektIndikativ": {
      "de": "wrang",
      "lv": "Вырезать"
    },
    "imperfektKonjunktiv": {
      "de": "wrang",
      "lv": "Вырезать"
    },
    "partizipVergangenheit": {
      "de": "gewrungen",
      "lv": "Вырезать"
    }
  },
  {
    "infinitiv": {
      "de": "zeihen",
      "lv": "Винить"
    },
    "praesens": {
      "de": "er zeiht",
      "lv": "Он обвиняет"
    },
    "imperfektIndikativ": {
      "de": "zieh",
      "lv": "Обвиняемый"
    },
    "imperfektKonjunktiv": {
      "de": "zieh",
      "lv": "Обвиняемый"
    },
    "partizipVergangenheit": {
      "de": "geziehen",
      "lv": "Обвиняемый"
    }
  },
  {
    "infinitiv": {
      "de": "ziehen",
      "lv": "Тянуть"
    },
    "praesens": {
      "de": "er zieht",
      "lv": "Он тянет"
    },
    "imperfektIndikativ": {
      "de": "er zog",
      "lv": "Он потянул"
    },
    "imperfektKonjunktiv": {
      "de": "er zöge",
      "lv": "Он бы потащил"
    },
    "partizipVergangenheit": {
      "de": "gezogen",
      "lv": "Тащили"
    }
  },
  {
    "infinitiv": {
      "de": "zwingen",
      "lv": "Заставить"
    },
    "praesens": {
      "de": "er zwingt",
      "lv": "Он заставляет"
    },
    "imperfektIndikativ": {
      "de": "er zwang",
      "lv": "Он заставил"
    },
    "imperfektKonjunktiv": {
      "de": "er zwänge",
      "lv": "Он бы заставил"
    },
    "partizipVergangenheit": {
      "de": "gezwungen",
      "lv": "Принужденный"
    }
  },
  {
    "infinitiv": {
      "de": "empfangen",
      "lv": "Получать"
    },
    "praesens": {
      "de": "er empfängt",
      "lv": "Он получает"
    },
    "imperfektIndikativ": {
      "de": "er empfing",
      "lv": "Он получил"
    },
    "imperfektKonjunktiv": {
      "de": "er empfinge",
      "lv": "Он получит"
    },
    "partizipVergangenheit": {
      "de": "empfangen",
      "lv": "Полученный"
    }
  },
  {
    "infinitiv": {
      "de": "erwägen",
      "lv": "Рассмотреть"
    },
    "praesens": {
      "de": "er erwägt",
      "lv": "Он считает"
    },
    "imperfektIndikativ": {
      "de": "er erwog",
      "lv": "Он считал"
    },
    "imperfektKonjunktiv": {
      "de": "er erwöge",
      "lv": "Он бы рассмотрел"
    },
    "partizipVergangenheit": {
      "de": "erwogen",
      "lv": "Обдуманный"
    }
  },
  {
    "infinitiv": {
      "de": "fechten",
      "lv": "Сражаться"
    },
    "praesens": {
      "de": "er ficht",
      "lv": "Он борется"
    },
    "imperfektIndikativ": {
      "de": "er focht",
      "lv": "Он боролся"
    },
    "imperfektKonjunktiv": {
      "de": "er föchte",
      "lv": "Он будет драться"
    },
    "partizipVergangenheit": {
      "de": "gefochten",
      "lv": "Дрался"
    }
  },
  {
    "infinitiv": {
      "de": "flechten",
      "lv": "Коса"
    },
    "praesens": {
      "de": "er flicht",
      "lv": "Он прикалывает"
    },
    "imperfektIndikativ": {
      "de": "er flocht",
      "lv": "Он заплетает косы"
    },
    "imperfektKonjunktiv": {
      "de": "er flöchte",
      "lv": "Он бы заплел косу"
    },
    "partizipVergangenheit": {
      "de": "geflochten",
      "lv": "Плетеный"
    }
  },
  {
    "infinitiv": {
      "de": "hangen",
      "lv": "Повесить"
    },
    "praesens": {
      "de": "er hängt",
      "lv": "Он висит"
    },
    "imperfektIndikativ": {
      "de": "er hing",
      "lv": "Он повесил"
    },
    "imperfektKonjunktiv": {
      "de": "er hinge",
      "lv": "Он бы повесился"
    },
    "partizipVergangenheit": {
      "de": "gehangen",
      "lv": "Подожди"
    }
  },
  {
    "infinitiv": {
      "de": "spalten",
      "lv": "Разделить"
    },
    "praesens": {
      "de": "er spaltet",
      "lv": "Он разделяется"
    },
    "imperfektIndikativ": {
      "de": "er spaltete",
      "lv": "Он раскололся"
    },
    "imperfektKonjunktiv": {
      "de": "er spaltete",
      "lv": "Он бы раскололся"
    },
    "partizipVergangenheit": {
      "de": "gespalten",
      "lv": "Расколоть"
    }
  },
  {
    "infinitiv": {
      "de": "verzeihen",
      "lv": "Прощать"
    },
    "praesens": {
      "de": "er verzeiht",
      "lv": "Он прощает"
    },
    "imperfektIndikativ": {
      "de": "er verzieh",
      "lv": "Он простил"
    },
    "imperfektKonjunktiv": {
      "de": "er verziehe",
      "lv": "Он бы простил"
    },
    "partizipVergangenheit": {
      "de": "verziehen",
      "lv": "Прощен"
    }
  }
];

window.VERB_ENTRIES = VERB_ENTRIES;

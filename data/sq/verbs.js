const VERB_ENTRIES = [
  {
    "infinitiv": {
      "de": "backen",
      "lv": "5, janë 5."
    },
    "praesens": {
      "de": "er bäckt",
      "lv": "On piecze"
    },
    "imperfektIndikativ": {
      "de": "er buk",
      "lv": "On piecze"
    },
    "imperfektKonjunktiv": {
      "de": "er büke",
      "lv": "Piecze"
    },
    "partizipVergangenheit": {
      "de": "gebacken",
      "lv": "Kızartılmış/fırınlanmış"
    }
  },
  {
    "infinitiv": {
      "de": "befehlen",
      "lv": "Sipariş vermek"
    },
    "praesens": {
      "de": "er befiehlt",
      "lv": "On rozkazuje"
    },
    "imperfektIndikativ": {
      "de": "er befahl",
      "lv": "– o emretti"
    },
    "imperfektKonjunktiv": {
      "de": "er beföhle",
      "lv": "Sipariş vermek"
    },
    "partizipVergangenheit": {
      "de": "befohlen",
      "lv": "Rozkazał"
    }
  },
  {
    "infinitiv": {
      "de": "beginnen",
      "lv": "Fillo!"
    },
    "praesens": {
      "de": "er beginnt",
      "lv": "Zaczyna"
    },
    "imperfektIndikativ": {
      "de": "er begann",
      "lv": "O başladı"
    },
    "imperfektKonjunktiv": {
      "de": "er begönne / er begänne",
      "lv": "O başlayacaktı"
    },
    "partizipVergangenheit": {
      "de": "begonnen",
      "lv": "O başladı"
    }
  },
  {
    "infinitiv": {
      "de": "beißen",
      "lv": "Ugryzienie"
    },
    "praesens": {
      "de": "er beißt",
      "lv": "Gryzie"
    },
    "imperfektIndikativ": {
      "de": "er biss",
      "lv": "Kodował"
    },
    "imperfektKonjunktiv": {
      "de": "er bisse",
      "lv": "Gryzie"
    },
    "partizipVergangenheit": {
      "de": "gebissen",
      "lv": "Ugryziony / ugryziony"
    }
  },
  {
    "infinitiv": {
      "de": "bergen",
      "lv": "Saklamak"
    },
    "praesens": {
      "de": "er birgt",
      "lv": "O saklanıyor"
    },
    "imperfektIndikativ": {
      "de": "er barg",
      "lv": "Saklandı"
    },
    "imperfektKonjunktiv": {
      "de": "er bürge / er bärge",
      "lv": "Gizlemek"
    },
    "partizipVergangenheit": {
      "de": "geborgen",
      "lv": "Ukryty/zapisany"
    }
  },
  {
    "infinitiv": {
      "de": "bersten",
      "lv": "Çatlama"
    },
    "praesens": {
      "de": "er birst",
      "lv": "Kırılıyor"
    },
    "imperfektIndikativ": {
      "de": "er barst / er borst",
      "lv": "Patladı"
    },
    "imperfektKonjunktiv": {
      "de": "er bärste / er börste",
      "lv": "Kırılıyor"
    },
    "partizipVergangenheit": {
      "de": "geborsten (er ist)",
      "lv": "Frakturë"
    }
  },
  {
    "infinitiv": {
      "de": "bewegen",
      "lv": "Cesaretlendirmek"
    },
    "praesens": {
      "de": "er bewegt",
      "lv": "– podpowiada"
    },
    "imperfektIndikativ": {
      "de": "er bewog",
      "lv": "O ısrar etti"
    },
    "imperfektKonjunktiv": {
      "de": "er bewöge",
      "lv": "Teşvik ederdi"
    },
    "partizipVergangenheit": {
      "de": "bewogen",
      "lv": "Teşvik etti"
    }
  },
  {
    "infinitiv": {
      "de": "biegen",
      "lv": "Eğil"
    },
    "praesens": {
      "de": "er biegt",
      "lv": "O eğilir"
    },
    "imperfektIndikativ": {
      "de": "er bog",
      "lv": "Gerildi"
    },
    "imperfektKonjunktiv": {
      "de": "er böge",
      "lv": "Bükülecekti"
    },
    "partizipVergangenheit": {
      "de": "gebogen",
      "lv": "Bükülmüş"
    }
  },
  {
    "infinitiv": {
      "de": "bieten",
      "lv": "Söz"
    },
    "praesens": {
      "de": "er bietet",
      "lv": "Obiecuje"
    },
    "imperfektIndikativ": {
      "de": "er bot",
      "lv": "Söz verdi"
    },
    "imperfektKonjunktiv": {
      "de": "er böte",
      "lv": "Söz verdi"
    },
    "partizipVergangenheit": {
      "de": "geboten",
      "lv": "Söz verdi/teklif etti"
    }
  },
  {
    "infinitiv": {
      "de": "binden",
      "lv": "Elek"
    },
    "praesens": {
      "de": "er bindet",
      "lv": "On siano"
    },
    "imperfektIndikativ": {
      "de": "er band",
      "lv": "O ekti"
    },
    "imperfektKonjunktiv": {
      "de": "er bände",
      "lv": "O eledi"
    },
    "partizipVergangenheit": {
      "de": "gebunden",
      "lv": "Elek"
    }
  },
  {
    "infinitiv": {
      "de": "bitten",
      "lv": "Dashuria"
    },
    "praesens": {
      "de": "er bittet",
      "lv": "Sahte"
    },
    "imperfektIndikativ": {
      "de": "er bat",
      "lv": "O sordu"
    },
    "imperfektKonjunktiv": {
      "de": "er bäte",
      "lv": "Dua edecek"
    },
    "partizipVergangenheit": {
      "de": "gebeten",
      "lv": "Wymagany"
    }
  },
  {
    "infinitiv": {
      "de": "blasen",
      "lv": "Üflemek"
    },
    "praesens": {
      "de": "er bläst",
      "lv": "On dmucha"
    },
    "imperfektIndikativ": {
      "de": "er blies",
      "lv": "O patladı"
    },
    "imperfektKonjunktiv": {
      "de": "er bliese",
      "lv": "Üflemek"
    },
    "partizipVergangenheit": {
      "de": "geblasen",
      "lv": "Şişkin"
    }
  },
  {
    "infinitiv": {
      "de": "gären",
      "lv": "Fermantasyon"
    },
    "praesens": {
      "de": "es gärt",
      "lv": "Fermentuje"
    },
    "imperfektIndikativ": {
      "de": "es gor / es gärte",
      "lv": "Fermentuje"
    },
    "imperfektKonjunktiv": {
      "de": "es göre / es gärte",
      "lv": "Acı olurdu"
    },
    "partizipVergangenheit": {
      "de": "gegoren / gegärt",
      "lv": "Żyto"
    }
  },
  {
    "infinitiv": {
      "de": "gebären",
      "lv": "Doğum yap"
    },
    "praesens": {
      "de": "sie gebiert",
      "lv": "Onun rahminde"
    },
    "imperfektIndikativ": {
      "de": "sie gebar",
      "lv": "O doğurdu"
    },
    "imperfektKonjunktiv": {
      "de": "sie gebäre",
      "lv": "Doğum yapacaktı"
    },
    "partizipVergangenheit": {
      "de": "geboren",
      "lv": "Doğdum / doğdum"
    }
  },
  {
    "infinitiv": {
      "de": "gelingen",
      "lv": "Başarılı ol"
    },
    "praesens": {
      "de": "es gelingt",
      "lv": "İşe yarıyor"
    },
    "imperfektIndikativ": {
      "de": "es gelang",
      "lv": "İşe yaradı"
    },
    "imperfektKonjunktiv": {
      "de": "es gelänge",
      "lv": "Bu işe yarar"
    },
    "partizipVergangenheit": {
      "de": "gelungen (es ist)",
      "lv": "İşe yaradı"
    }
  },
  {
    "infinitiv": {
      "de": "gelten",
      "lv": "Kullanışlı ol"
    },
    "praesens": {
      "de": "er gilt",
      "lv": "O uyuyor/önemli"
    },
    "imperfektIndikativ": {
      "de": "er galt",
      "lv": "O uygundu/uygundu"
    },
    "imperfektKonjunktiv": {
      "de": "er gölte / es gälte",
      "lv": "Uygun olurdu / sığardı"
    },
    "partizipVergangenheit": {
      "de": "gegolten",
      "lv": "Uygulandı/geçerliydi"
    }
  },
  {
    "infinitiv": {
      "de": "genesen",
      "lv": "İyileşmek"
    },
    "praesens": {
      "de": "er genest",
      "lv": "Sağlığı iyiye gidiyor"
    },
    "imperfektIndikativ": {
      "de": "er genas",
      "lv": "İyileşti"
    },
    "imperfektKonjunktiv": {
      "de": "er genäse",
      "lv": "Wyzdrowieje"
    },
    "partizipVergangenheit": {
      "de": "genesen (er ist)",
      "lv": "İyileşmek"
    }
  },
  {
    "infinitiv": {
      "de": "genießen",
      "lv": "Eğlence"
    },
    "praesens": {
      "de": "er genießt",
      "lv": "O mutlu"
    },
    "imperfektIndikativ": {
      "de": "er genoss",
      "lv": "O mutluydu"
    },
    "imperfektKonjunktiv": {
      "de": "er genösse",
      "lv": "Mutlu olurdu"
    },
    "partizipVergangenheit": {
      "de": "genossen",
      "lv": "O mutluydu"
    }
  },
  {
    "infinitiv": {
      "de": "geschehen",
      "lv": "Duke u bërë"
    },
    "praesens": {
      "de": "es geschieht",
      "lv": "Olur"
    },
    "imperfektIndikativ": {
      "de": "es geschah",
      "lv": "Oldu"
    },
    "imperfektKonjunktiv": {
      "de": "es geschähe",
      "lv": "Bu olur"
    },
    "partizipVergangenheit": {
      "de": "geschehen (es ist)",
      "lv": "Oldu"
    }
  },
  {
    "infinitiv": {
      "de": "gießen",
      "lv": "Porucznik"
    },
    "praesens": {
      "de": "er gießt",
      "lv": "Nalewa"
    },
    "imperfektIndikativ": {
      "de": "er goss",
      "lv": "Onu döktü"
    },
    "imperfektKonjunktiv": {
      "de": "er gösse",
      "lv": "On pada"
    },
    "partizipVergangenheit": {
      "de": "gegossen",
      "lv": "E pra,"
    }
  },
  {
    "infinitiv": {
      "de": "gleichen",
      "lv": "Hatırlat"
    },
    "praesens": {
      "de": "er gleicht",
      "lv": "On przypomina"
    },
    "imperfektIndikativ": {
      "de": "er glich",
      "lv": "Taklit etti"
    },
    "imperfektKonjunktiv": {
      "de": "er gliche",
      "lv": "Taklit ederdi"
    },
    "partizipVergangenheit": {
      "de": "geglichen",
      "lv": "Hatırlattı"
    }
  },
  {
    "infinitiv": {
      "de": "gleiten",
      "lv": "Slayt"
    },
    "praesens": {
      "de": "er gleitet",
      "lv": "O kayıyor"
    },
    "imperfektIndikativ": {
      "de": "er glitt",
      "lv": "O kayıyordu"
    },
    "imperfektKonjunktiv": {
      "de": "er glitte",
      "lv": "Kayacaktı"
    },
    "partizipVergangenheit": {
      "de": "geglitten (er ist)",
      "lv": "Kaydı"
    }
  },
  {
    "infinitiv": {
      "de": "glimmen",
      "lv": "Rozjarzony"
    },
    "praesens": {
      "de": "er glimmt",
      "lv": "O parlıyor"
    },
    "imperfektIndikativ": {
      "de": "er glimmte / glomm",
      "lv": "O parlıyordu"
    },
    "imperfektKonjunktiv": {
      "de": "er glimmte",
      "lv": "Parlamak"
    },
    "partizipVergangenheit": {
      "de": "geglimmt / geglommen",
      "lv": "Rozjarzony"
    }
  },
  {
    "infinitiv": {
      "de": "graben",
      "lv": "Kazmak"
    },
    "praesens": {
      "de": "er gräbt",
      "lv": "On kopie"
    },
    "imperfektIndikativ": {
      "de": "er grub",
      "lv": "O tekmeledi"
    },
    "imperfektKonjunktiv": {
      "de": "er grübe",
      "lv": "Kazırdı"
    },
    "partizipVergangenheit": {
      "de": "gegraben",
      "lv": "Kazmak"
    }
  },
  {
    "infinitiv": {
      "de": "greifen",
      "lv": "Yakalamak için"
    },
    "praesens": {
      "de": "er greift",
      "lv": "Łapie"
    },
    "imperfektIndikativ": {
      "de": "er griff",
      "lv": "Onu yakaladı"
    },
    "imperfektKonjunktiv": {
      "de": "er griffe",
      "lv": "Onu yakalardı"
    },
    "partizipVergangenheit": {
      "de": "gegriffen",
      "lv": "Yakalandı / yakalandı"
    }
  },
  {
    "infinitiv": {
      "de": "hauen",
      "lv": "Kesmek"
    },
    "praesens": {
      "de": "er haut",
      "lv": "O seçti"
    },
    "imperfektIndikativ": {
      "de": "er hieb",
      "lv": "– homurdandı"
    },
    "imperfektKonjunktiv": {
      "de": "er hiebe",
      "lv": "Oymak"
    },
    "partizipVergangenheit": {
      "de": "gehauen",
      "lv": "Oyulmuş"
    }
  },
  {
    "infinitiv": {
      "de": "heben",
      "lv": "Artırmak"
    },
    "praesens": {
      "de": "er hebt",
      "lv": "On podnosi"
    },
    "imperfektIndikativ": {
      "de": "er hob",
      "lv": "Getirilmiş"
    },
    "imperfektKonjunktiv": {
      "de": "er höbe",
      "lv": "O inşa ederdi"
    },
    "partizipVergangenheit": {
      "de": "gehoben",
      "lv": "Wybudowany"
    }
  },
  {
    "infinitiv": {
      "de": "kennen",
      "lv": "Bilmek / bilmek"
    },
    "praesens": {
      "de": "er kennt",
      "lv": "On wie"
    },
    "imperfektIndikativ": {
      "de": "kannte",
      "lv": "Wiedział"
    },
    "imperfektKonjunktiv": {
      "de": "kannte",
      "lv": "Wiedział"
    },
    "partizipVergangenheit": {
      "de": "gekannt",
      "lv": "Tanıdık"
    }
  },
  {
    "infinitiv": {
      "de": "klingen",
      "lv": "Nga _hurma."
    },
    "praesens": {
      "de": "er klingt",
      "lv": "Brzmi"
    },
    "imperfektIndikativ": {
      "de": "er klang",
      "lv": "– ses geldi"
    },
    "imperfektKonjunktiv": {
      "de": "er klänge",
      "lv": "– zabrzmi"
    },
    "partizipVergangenheit": {
      "de": "geklungen",
      "lv": "Kulağa geliyordu"
    }
  },
  {
    "infinitiv": {
      "de": "kneifen",
      "lv": "Szczypta"
    },
    "praesens": {
      "de": "er kneift",
      "lv": "Şaka yapmak"
    },
    "imperfektIndikativ": {
      "de": "er kniff",
      "lv": "O çimdikledi"
    },
    "imperfektKonjunktiv": {
      "de": "er kniffe",
      "lv": "O çimdiklerdi"
    },
    "partizipVergangenheit": {
      "de": "gekniffen",
      "lv": "Sıkışmış"
    }
  },
  {
    "infinitiv": {
      "de": "bleiben",
      "lv": "Qëndro"
    },
    "praesens": {
      "de": "er bleibt",
      "lv": "On zostaje"
    },
    "imperfektIndikativ": {
      "de": "er blieb",
      "lv": "O kaldı"
    },
    "imperfektKonjunktiv": {
      "de": "er bliebe",
      "lv": "O kalacaktı"
    },
    "partizipVergangenheit": {
      "de": "geblieben (er ist)",
      "lv": "Lewy"
    }
  },
  {
    "infinitiv": {
      "de": "bleichen",
      "lv": "Beyazlatmak"
    },
    "praesens": {
      "de": "er bleicht",
      "lv": "On wybiela"
    },
    "imperfektIndikativ": {
      "de": "blich",
      "lv": "Bielone"
    },
    "imperfektKonjunktiv": {
      "de": "blich",
      "lv": "Bielone"
    },
    "partizipVergangenheit": {
      "de": "geblichen",
      "lv": "Bielone"
    }
  },
  {
    "infinitiv": {
      "de": "braten",
      "lv": "5, janë 5."
    },
    "praesens": {
      "de": "er brät",
      "lv": "On piecze"
    },
    "imperfektIndikativ": {
      "de": "er briet",
      "lv": "On piecze"
    },
    "imperfektKonjunktiv": {
      "de": "er briete",
      "lv": "Piecze"
    },
    "partizipVergangenheit": {
      "de": "gebraten",
      "lv": "Kızartılmış/fırınlanmış"
    }
  },
  {
    "infinitiv": {
      "de": "brechen",
      "lv": "Mola"
    },
    "praesens": {
      "de": "er bricht",
      "lv": "Kırılıyor"
    },
    "imperfektIndikativ": {
      "de": "er brach",
      "lv": "Kırıldı"
    },
    "imperfektKonjunktiv": {
      "de": "er bräche",
      "lv": "Kırılırdı"
    },
    "partizipVergangenheit": {
      "de": "gebrochen",
      "lv": "Zepsuty/zepsuty"
    }
  },
  {
    "infinitiv": {
      "de": "brennen",
      "lv": "Për të djegur."
    },
    "praesens": {
      "de": "er brennt",
      "lv": "O yanıyor"
    },
    "imperfektIndikativ": {
      "de": "brannte",
      "lv": "Yanma"
    },
    "imperfektKonjunktiv": {
      "de": "brannte",
      "lv": "Yanma"
    },
    "partizipVergangenheit": {
      "de": "gebrannt",
      "lv": "Spalony"
    }
  },
  {
    "infinitiv": {
      "de": "bringen",
      "lv": "Giymek"
    },
    "praesens": {
      "de": "er bringt",
      "lv": "On niesie"
    },
    "imperfektIndikativ": {
      "de": "er brachte",
      "lv": "Taşıyordu"
    },
    "imperfektKonjunktiv": {
      "de": "er brächte",
      "lv": "O taşıyacak"
    },
    "partizipVergangenheit": {
      "de": "gebracht",
      "lv": "O getirdi / getirdi"
    }
  },
  {
    "infinitiv": {
      "de": "denken",
      "lv": "Të menduarit"
    },
    "praesens": {
      "de": "er denkt",
      "lv": "Düşünüyor"
    },
    "imperfektIndikativ": {
      "de": "er dachte",
      "lv": "Düşündü"
    },
    "imperfektKonjunktiv": {
      "de": "er dächte",
      "lv": "Şöyle düşünürdü:"
    },
    "partizipVergangenheit": {
      "de": "gedacht",
      "lv": "Przeznaczony"
    }
  },
  {
    "infinitiv": {
      "de": "dingen",
      "lv": "İşe al/kabul et"
    },
    "praesens": {
      "de": "er dingt",
      "lv": "On zatrudnia"
    },
    "imperfektIndikativ": {
      "de": "dingte",
      "lv": "Zatrudniony"
    },
    "imperfektKonjunktiv": {
      "de": "dingte",
      "lv": "Zatrudniony"
    },
    "partizipVergangenheit": {
      "de": "gedungen",
      "lv": "Zatrudniony"
    }
  },
  {
    "infinitiv": {
      "de": "dreschen",
      "lv": "Kult"
    },
    "praesens": {
      "de": "er drischt",
      "lv": "O harmanlıyor"
    },
    "imperfektIndikativ": {
      "de": "er drasch / er drosch",
      "lv": "O sallanıyordu"
    },
    "imperfektKonjunktiv": {
      "de": "er dräsche / er drösche",
      "lv": "İbadet edecek"
    },
    "partizipVergangenheit": {
      "de": "gedroschen",
      "lv": "Kult"
    }
  },
  {
    "infinitiv": {
      "de": "dringen",
      "lv": "Sözünü kesmek"
    },
    "praesens": {
      "de": "er dringt",
      "lv": "O içeri giriyor"
    },
    "imperfektIndikativ": {
      "de": "er drang",
      "lv": "O içeri girdi"
    },
    "imperfektKonjunktiv": {
      "de": "er dränge",
      "lv": "İçeri zorla girerdim"
    },
    "partizipVergangenheit": {
      "de": "gedrungen (er ist)",
      "lv": "O içeri girdi"
    }
  },
  {
    "infinitiv": {
      "de": "dünken",
      "lv": "Görünüşe göre"
    },
    "praesens": {
      "de": "es dünkt",
      "lv": "Görünüşe göre"
    },
    "imperfektIndikativ": {
      "de": "deuchte",
      "lv": "Öyle görünüyordu"
    },
    "imperfektKonjunktiv": {
      "de": "deuchte",
      "lv": "Öyle görünüyordu"
    },
    "partizipVergangenheit": {
      "de": "gedünkt",
      "lv": "Öyle görünüyordu"
    }
  },
  {
    "infinitiv": {
      "de": "dürfen",
      "lv": "E lejueshme"
    },
    "praesens": {
      "de": "er darf",
      "lv": "Yapabilir"
    },
    "imperfektIndikativ": {
      "de": "durfte",
      "lv": "İzin verildi"
    },
    "imperfektKonjunktiv": {
      "de": "durfte",
      "lv": "İzin verildi"
    },
    "partizipVergangenheit": {
      "de": "gedurft",
      "lv": "Dozwolony"
    }
  },
  {
    "infinitiv": {
      "de": "empfehlen",
      "lv": "Tavsiye etmek"
    },
    "praesens": {
      "de": "er empfiehlt",
      "lv": "Sugeruje"
    },
    "imperfektIndikativ": {
      "de": "er empfahl",
      "lv": "Öneren"
    },
    "imperfektKonjunktiv": {
      "de": "er empfähle / er empföhle",
      "lv": "Tavsiye ederim"
    },
    "partizipVergangenheit": {
      "de": "empfohlen",
      "lv": "Zalecony"
    }
  },
  {
    "infinitiv": {
      "de": "empfinden",
      "lv": "Czuć"
    },
    "praesens": {
      "de": "er empfindet",
      "lv": "Czuje"
    },
    "imperfektIndikativ": {
      "de": "er empfand",
      "lv": "Hissetti"
    },
    "imperfektKonjunktiv": {
      "de": "er empfände",
      "lv": "O hissederdi"
    },
    "partizipVergangenheit": {
      "de": "empfunden",
      "lv": "Filc"
    }
  },
  {
    "infinitiv": {
      "de": "erlöschen",
      "lv": "Zanika"
    },
    "praesens": {
      "de": "er erlischt",
      "lv": "On wychodzi"
    },
    "imperfektIndikativ": {
      "de": "er erlosch",
      "lv": "O gitti"
    },
    "imperfektKonjunktiv": {
      "de": "er erlösche",
      "lv": "Zniknie"
    },
    "partizipVergangenheit": {
      "de": "erloschen (er ist)",
      "lv": "Dışarı çıktı"
    }
  },
  {
    "infinitiv": {
      "de": "erschrecken",
      "lv": "Kafan karışsın"
    },
    "praesens": {
      "de": "er erschrickt",
      "lv": "O korkuyor"
    },
    "imperfektIndikativ": {
      "de": "er erschrak",
      "lv": "Korktu"
    },
    "imperfektKonjunktiv": {
      "de": "er erschräke",
      "lv": "Çok korkacaktı"
    },
    "partizipVergangenheit": {
      "de": "erschrocken (er ist)",
      "lv": "Korkmuş"
    }
  },
  {
    "infinitiv": {
      "de": "essen",
      "lv": "Ngrënë? Ngrë... ngrënë?"
    },
    "praesens": {
      "de": "er isst",
      "lv": "On je"
    },
    "imperfektIndikativ": {
      "de": "er ass",
      "lv": "O yedi"
    },
    "imperfektKonjunktiv": {
      "de": "er äße",
      "lv": "Yemek yerdi"
    },
    "partizipVergangenheit": {
      "de": "gegessen",
      "lv": "Zjedzony / zjedzony"
    }
  },
  {
    "infinitiv": {
      "de": "fahren",
      "lv": "Liderlik etmek"
    },
    "praesens": {
      "de": "er fährt",
      "lv": "O sürüyor"
    },
    "imperfektIndikativ": {
      "de": "er fuhr",
      "lv": "O sürüyordu"
    },
    "imperfektKonjunktiv": {
      "de": "er führe",
      "lv": "O sürerdi"
    },
    "partizipVergangenheit": {
      "de": "gefahren (er ist)",
      "lv": "Sola gittim"
    }
  },
  {
    "infinitiv": {
      "de": "fallen",
      "lv": "Düşmek"
    },
    "praesens": {
      "de": "er fällt",
      "lv": "On upada"
    },
    "imperfektIndikativ": {
      "de": "er fiel",
      "lv": "Düştü"
    },
    "imperfektKonjunktiv": {
      "de": "er fiele",
      "lv": "Düşerdi"
    },
    "partizipVergangenheit": {
      "de": "gefallen (er ist)",
      "lv": "Cut"
    }
  },
  {
    "infinitiv": {
      "de": "fangen",
      "lv": "Yakalamak için"
    },
    "praesens": {
      "de": "er fängt",
      "lv": "Łapie"
    },
    "imperfektIndikativ": {
      "de": "er fing",
      "lv": "Onu yakaladı"
    },
    "imperfektKonjunktiv": {
      "de": "er finge",
      "lv": "Onu yakalardı"
    },
    "partizipVergangenheit": {
      "de": "gefangen",
      "lv": "Yakalandı / yakalandı"
    }
  },
  {
    "infinitiv": {
      "de": "finden",
      "lv": "Bulmak için"
    },
    "praesens": {
      "de": "er findet",
      "lv": "Znajduje"
    },
    "imperfektIndikativ": {
      "de": "er fand",
      "lv": "Bulundu"
    },
    "imperfektKonjunktiv": {
      "de": "er fände",
      "lv": "Onu bulacaktı"
    },
    "partizipVergangenheit": {
      "de": "gefunden",
      "lv": "Znaleziony"
    }
  },
  {
    "infinitiv": {
      "de": "fliegen",
      "lv": "Yayınla"
    },
    "praesens": {
      "de": "er fliegt",
      "lv": "On leci"
    },
    "imperfektIndikativ": {
      "de": "er flog",
      "lv": "Uçtu"
    },
    "imperfektKonjunktiv": {
      "de": "er flöge",
      "lv": "Uçardı"
    },
    "partizipVergangenheit": {
      "de": "geflogen (er ist)",
      "lv": "Uçtu"
    }
  },
  {
    "infinitiv": {
      "de": "fliehen",
      "lv": "Kaçış"
    },
    "praesens": {
      "de": "er flieht",
      "lv": "Ucieka"
    },
    "imperfektIndikativ": {
      "de": "er floh",
      "lv": "O kaçtı"
    },
    "imperfektKonjunktiv": {
      "de": "er flöhe",
      "lv": "Kaçacaktı"
    },
    "partizipVergangenheit": {
      "de": "geflohen (er ist)",
      "lv": "O kaçtı"
    }
  },
  {
    "infinitiv": {
      "de": "fließen",
      "lv": "Akış"
    },
    "praesens": {
      "de": "er fließt",
      "lv": "On biegnie"
    },
    "imperfektIndikativ": {
      "de": "er floss",
      "lv": "Koştu"
    },
    "imperfektKonjunktiv": {
      "de": "er flösse",
      "lv": "Koşardı"
    },
    "partizipVergangenheit": {
      "de": "geflossen (er ist)",
      "lv": "Geçti"
    }
  },
  {
    "infinitiv": {
      "de": "fressen",
      "lv": "Yarın ye"
    },
    "praesens": {
      "de": "er frisst",
      "lv": "Yiyor/yutuyor"
    },
    "imperfektIndikativ": {
      "de": "er frass",
      "lv": "Yedi/yuttu"
    },
    "imperfektKonjunktiv": {
      "de": "er fräße",
      "lv": "Yemek/kahvaltı"
    },
    "partizipVergangenheit": {
      "de": "gefressen",
      "lv": "Zjedzone/rano"
    }
  },
  {
    "infinitiv": {
      "de": "frieren",
      "lv": "Ftohët."
    },
    "praesens": {
      "de": "er friert",
      "lv": "On marznie"
    },
    "imperfektIndikativ": {
      "de": "er fror",
      "lv": "On wyspa"
    },
    "imperfektKonjunktiv": {
      "de": "er fröre",
      "lv": "O üşüdü"
    },
    "partizipVergangenheit": {
      "de": "gefroren",
      "lv": "Wyspa"
    }
  },
  {
    "infinitiv": {
      "de": "geben",
      "lv": "Jep"
    },
    "praesens": {
      "de": "er gibt",
      "lv": "On daje"
    },
    "imperfektIndikativ": {
      "de": "er gab",
      "lv": "Verildi"
    },
    "imperfektKonjunktiv": {
      "de": "er gäbe",
      "lv": "Verirdi"
    },
    "partizipVergangenheit": {
      "de": "gegeben",
      "lv": "Dany"
    }
  },
  {
    "infinitiv": {
      "de": "gedeihen",
      "lv": "Başarılı ol"
    },
    "praesens": {
      "de": "er gedeiht",
      "lv": "Başarılı oldu"
    },
    "imperfektIndikativ": {
      "de": "er gedieh",
      "lv": "O başardı"
    },
    "imperfektKonjunktiv": {
      "de": "er gediehe",
      "lv": "Bunun gerçekleşmesi için"
    },
    "partizipVergangenheit": {
      "de": "gediehen (er ist)",
      "lv": "İşe yaradı"
    }
  },
  {
    "infinitiv": {
      "de": "gehen",
      "lv": "Të largohesh?"
    },
    "praesens": {
      "de": "er geht",
      "lv": "On idzie"
    },
    "imperfektIndikativ": {
      "de": "er ging",
      "lv": "O yürüdü"
    },
    "imperfektKonjunktiv": {
      "de": "er ginge",
      "lv": "Gidebilirdi"
    },
    "partizipVergangenheit": {
      "de": "gegangen (er ist)",
      "lv": "O içeri girdi"
    }
  },
  {
    "infinitiv": {
      "de": "gewinnen",
      "lv": "Almak"
    },
    "praesens": {
      "de": "er gewinnt",
      "lv": "Dostaje"
    },
    "imperfektIndikativ": {
      "de": "er gewann",
      "lv": "Aldı"
    },
    "imperfektKonjunktiv": {
      "de": "er gewönne / er gewänne",
      "lv": "Alırdı"
    },
    "partizipVergangenheit": {
      "de": "gewonnen",
      "lv": "Uzyskany"
    }
  },
  {
    "infinitiv": {
      "de": "haben",
      "lv": "Być/należeć"
    },
    "praesens": {
      "de": "er hat",
      "lv": "On ma"
    },
    "imperfektIndikativ": {
      "de": "hatte",
      "lv": "Asaj."
    },
    "imperfektKonjunktiv": {
      "de": "hatte",
      "lv": "Asaj."
    },
    "partizipVergangenheit": {
      "de": "gehabt",
      "lv": "O kaldı"
    }
  },
  {
    "infinitiv": {
      "de": "halten",
      "lv": "Tutmak"
    },
    "praesens": {
      "de": "er hält",
      "lv": "On tam"
    },
    "imperfektIndikativ": {
      "de": "er hielt",
      "lv": "O tuttu"
    },
    "imperfektKonjunktiv": {
      "de": "er hielte",
      "lv": "Tutmak"
    },
    "partizipVergangenheit": {
      "de": "gehalten",
      "lv": "Trzymany"
    }
  },
  {
    "infinitiv": {
      "de": "heißen",
      "lv": "Kërko"
    },
    "praesens": {
      "de": "er heißt",
      "lv": "On dzwoni / jest wzywany"
    },
    "imperfektIndikativ": {
      "de": "er hieß",
      "lv": "Çağrıldı"
    },
    "imperfektKonjunktiv": {
      "de": "er hieße",
      "lv": "O arayacak / çağrılacaktı"
    },
    "partizipVergangenheit": {
      "de": "geheißen",
      "lv": "Zwany"
    }
  },
  {
    "infinitiv": {
      "de": "helfen",
      "lv": "Më ndihmo."
    },
    "praesens": {
      "de": "er hilft",
      "lv": "On pomaga"
    },
    "imperfektIndikativ": {
      "de": "er half",
      "lv": "O yardım etti"
    },
    "imperfektKonjunktiv": {
      "de": "er hülfe / er hälfe",
      "lv": "Yardım ederdi"
    },
    "partizipVergangenheit": {
      "de": "geholfen",
      "lv": "Yardım edildi"
    }
  },
  {
    "infinitiv": {
      "de": "kommen",
      "lv": "Po vjen"
    },
    "praesens": {
      "de": "er kommt",
      "lv": "On nadchodzi"
    },
    "imperfektIndikativ": {
      "de": "er kam",
      "lv": "O geldi"
    },
    "imperfektKonjunktiv": {
      "de": "er käme",
      "lv": "Przyjdzie"
    },
    "partizipVergangenheit": {
      "de": "gekommen (er ist)",
      "lv": "Geldi"
    }
  },
  {
    "infinitiv": {
      "de": "können",
      "lv": "Për të qenë në gjendje të"
    },
    "praesens": {
      "de": "er kann",
      "lv": "Yapabilir"
    },
    "imperfektIndikativ": {
      "de": "konnte",
      "lv": "Yapabilirdi"
    },
    "imperfektKonjunktiv": {
      "de": "konnte",
      "lv": "Yapabilirdi"
    },
    "partizipVergangenheit": {
      "de": "gekonnt",
      "lv": "Yapabilirdi"
    }
  },
  {
    "infinitiv": {
      "de": "kriechen",
      "lv": "Po bie shi!"
    },
    "praesens": {
      "de": "er kriecht",
      "lv": "O eğilir"
    },
    "imperfektIndikativ": {
      "de": "er kroch",
      "lv": "Yağmur yağıyordu"
    },
    "imperfektKonjunktiv": {
      "de": "er kröche",
      "lv": "On pada"
    },
    "partizipVergangenheit": {
      "de": "gekrochen (er ist)",
      "lv": "Ai vdiq."
    }
  },
  {
    "infinitiv": {
      "de": "laden",
      "lv": "Yükle, davet et"
    },
    "praesens": {
      "de": "er lädt",
      "lv": "On gromadzi / zaprasza"
    },
    "imperfektIndikativ": {
      "de": "er lud",
      "lv": "Yüklendi/davet edildi"
    },
    "imperfektKonjunktiv": {
      "de": "er lüde",
      "lv": "Yüklendi/Davet Edildi"
    },
    "partizipVergangenheit": {
      "de": "geladen",
      "lv": "Yüklendi/davet edildi"
    }
  },
  {
    "infinitiv": {
      "de": "lassen",
      "lv": "Koy, bırak"
    },
    "praesens": {
      "de": "er lässt",
      "lv": "On stawia / pozwala"
    },
    "imperfektIndikativ": {
      "de": "er ließ",
      "lv": "Sipariş Edildi /İzin Verildi"
    },
    "imperfektKonjunktiv": {
      "de": "er ließe",
      "lv": "Koyar/ izin verir"
    },
    "partizipVergangenheit": {
      "de": "gelassen",
      "lv": "Koy/izin ver"
    }
  },
  {
    "infinitiv": {
      "de": "laufen",
      "lv": "Koşmak için"
    },
    "praesens": {
      "de": "er läuft",
      "lv": "On biega"
    },
    "imperfektIndikativ": {
      "de": "er lief",
      "lv": "Koştu"
    },
    "imperfektKonjunktiv": {
      "de": "er liefe",
      "lv": "Koşardı"
    },
    "partizipVergangenheit": {
      "de": "gelaufen (er ist)",
      "lv": "Koştu"
    }
  },
  {
    "infinitiv": {
      "de": "leiden",
      "lv": "Acı çekmek"
    },
    "praesens": {
      "de": "er leidet",
      "lv": "On cierpi"
    },
    "imperfektIndikativ": {
      "de": "er litt",
      "lv": "Acı çekti"
    },
    "imperfektKonjunktiv": {
      "de": "er litte",
      "lv": "Acı çekerdi"
    },
    "partizipVergangenheit": {
      "de": "gelitten",
      "lv": "Acı çekti"
    }
  },
  {
    "infinitiv": {
      "de": "leihen",
      "lv": "Borç alma/ödünç verme"
    },
    "praesens": {
      "de": "er leiht",
      "lv": "Ödünç alma/ödünç alma"
    },
    "imperfektIndikativ": {
      "de": "er lieh",
      "lv": "Ödünç aldı / ödünç aldı"
    },
    "imperfektKonjunktiv": {
      "de": "er liehe",
      "lv": "Borç verirdi/ödünç verirdi"
    },
    "partizipVergangenheit": {
      "de": "geliehen",
      "lv": "Ödünç alan"
    }
  },
  {
    "infinitiv": {
      "de": "lesen",
      "lv": "Të lexosh?"
    },
    "praesens": {
      "de": "er liest",
      "lv": "On czyta"
    },
    "imperfektIndikativ": {
      "de": "er las",
      "lv": "Oku"
    },
    "imperfektKonjunktiv": {
      "de": "er läse",
      "lv": "Onu okuyacaktı"
    },
    "partizipVergangenheit": {
      "de": "gelesen",
      "lv": "Të lexosh?"
    }
  },
  {
    "infinitiv": {
      "de": "liegen",
      "lv": "-Une?"
    },
    "praesens": {
      "de": "er liegt",
      "lv": "O uyuyor"
    },
    "imperfektIndikativ": {
      "de": "er lag",
      "lv": "O uyuyordu"
    },
    "imperfektKonjunktiv": {
      "de": "er läge",
      "lv": "Uyurdu"
    },
    "partizipVergangenheit": {
      "de": "gelegen",
      "lv": "O uyuyordu"
    }
  },
  {
    "infinitiv": {
      "de": "lügen",
      "lv": "Yalan söylemek"
    },
    "praesens": {
      "de": "er lügt",
      "lv": "Yalan söylüyor"
    },
    "imperfektIndikativ": {
      "de": "er log",
      "lv": "Yalan söyledi"
    },
    "imperfektKonjunktiv": {
      "de": "er löge",
      "lv": "Skłamałby"
    },
    "partizipVergangenheit": {
      "de": "gelogen",
      "lv": "Yalan söyledi"
    }
  },
  {
    "infinitiv": {
      "de": "mahlen",
      "lv": "Çfarë kati?"
    },
    "praesens": {
      "de": "er mahlt",
      "lv": "On miele"
    },
    "imperfektIndikativ": {
      "de": "er mahlte",
      "lv": "Kenarda"
    },
    "imperfektKonjunktiv": {
      "de": "er malte",
      "lv": "On miele"
    },
    "partizipVergangenheit": {
      "de": "gemahlen",
      "lv": "Çfarë kati?"
    }
  },
  {
    "infinitiv": {
      "de": "meiden",
      "lv": "Kaçınmak için"
    },
    "praesens": {
      "de": "er meidet",
      "lv": "Unika"
    },
    "imperfektIndikativ": {
      "de": "er mied",
      "lv": "Kaçındı"
    },
    "imperfektKonjunktiv": {
      "de": "er miede",
      "lv": "Kaçınırdı"
    },
    "partizipVergangenheit": {
      "de": "gemieden",
      "lv": "Kaçının"
    }
  },
  {
    "infinitiv": {
      "de": "melken",
      "lv": "Do mleka"
    },
    "praesens": {
      "de": "er milkt / er melkt",
      "lv": "Zamiata"
    },
    "imperfektIndikativ": {
      "de": "er molk / er melkte",
      "lv": "Süpürüyordu"
    },
    "imperfektKonjunktiv": {
      "de": "er mölke / er melkte",
      "lv": "Sağdı"
    },
    "partizipVergangenheit": {
      "de": "gemolken / gemelkt",
      "lv": "Dojone"
    }
  },
  {
    "infinitiv": {
      "de": "messen",
      "lv": "Zmierzyć"
    },
    "praesens": {
      "de": "er misst",
      "lv": "On mierzy"
    },
    "imperfektIndikativ": {
      "de": "er mass",
      "lv": "Zmierzył"
    },
    "imperfektKonjunktiv": {
      "de": "er mäße",
      "lv": "Ölçmek için"
    },
    "partizipVergangenheit": {
      "de": "gemessen",
      "lv": "Wymierzony"
    }
  },
  {
    "infinitiv": {
      "de": "misslingen",
      "lv": "\"Gabime."
    },
    "praesens": {
      "de": "es misslingt",
      "lv": "To zawodzi"
    },
    "imperfektIndikativ": {
      "de": "misslang",
      "lv": "Przegrany"
    },
    "imperfektKonjunktiv": {
      "de": "misslang",
      "lv": "Przegrany"
    },
    "partizipVergangenheit": {
      "de": "misslungen",
      "lv": "Przegrany"
    }
  },
  {
    "infinitiv": {
      "de": "mögen",
      "lv": "Më pëlqen"
    },
    "praesens": {
      "de": "er mag",
      "lv": "On lubi"
    },
    "imperfektIndikativ": {
      "de": "mochte",
      "lv": "Beğendim"
    },
    "imperfektKonjunktiv": {
      "de": "mochte",
      "lv": "Beğendim"
    },
    "partizipVergangenheit": {
      "de": "gemocht",
      "lv": "Beğendim"
    }
  },
  {
    "infinitiv": {
      "de": "müssen",
      "lv": "Kërko"
    },
    "praesens": {
      "de": "er muss",
      "lv": "Potrzebuje"
    },
    "imperfektIndikativ": {
      "de": "musste",
      "lv": "Yapmalıydı"
    },
    "imperfektKonjunktiv": {
      "de": "musste",
      "lv": "Yapmalıydı"
    },
    "partizipVergangenheit": {
      "de": "gemusst",
      "lv": "Wymagany"
    }
  },
  {
    "infinitiv": {
      "de": "nehmen",
      "lv": "-Blyej."
    },
    "praesens": {
      "de": "er nimmt",
      "lv": "Bierze"
    },
    "imperfektIndikativ": {
      "de": "er nahm",
      "lv": "O aldı"
    },
    "imperfektKonjunktiv": {
      "de": "er nähme",
      "lv": "Alırdı"
    },
    "partizipVergangenheit": {
      "de": "genommen",
      "lv": "Dolu"
    }
  },
  {
    "infinitiv": {
      "de": "nennen",
      "lv": "Është..."
    },
    "praesens": {
      "de": "er nennt",
      "lv": "O aradı"
    },
    "imperfektIndikativ": {
      "de": "er nannte",
      "lv": "O aradı"
    },
    "imperfektKonjunktiv": {
      "de": "er nennte",
      "lv": "Değiştireceğim"
    },
    "partizipVergangenheit": {
      "de": "genannt",
      "lv": "Nazwany"
    }
  },
  {
    "infinitiv": {
      "de": "pfeifen",
      "lv": "Düdük"
    },
    "praesens": {
      "de": "er pfeift",
      "lv": "O ıslık çalar"
    },
    "imperfektIndikativ": {
      "de": "er pfiff",
      "lv": "Diye ıslık çaldı"
    },
    "imperfektKonjunktiv": {
      "de": "er pfiffe",
      "lv": "Islık çalardı"
    },
    "partizipVergangenheit": {
      "de": "gepfiffen",
      "lv": "Islık çaldı"
    }
  },
  {
    "infinitiv": {
      "de": "pflegen",
      "lv": "Sürdürmek"
    },
    "praesens": {
      "de": "er pflegt",
      "lv": "O umursuyor"
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
      "lv": "Zadbane"
    }
  },
  {
    "infinitiv": {
      "de": "preisen",
      "lv": "Öv"
    },
    "praesens": {
      "de": "er preist",
      "lv": "– chwali"
    },
    "imperfektIndikativ": {
      "de": "er pries",
      "lv": "– övdü"
    },
    "imperfektKonjunktiv": {
      "de": "er priese",
      "lv": "Onaylayacaktı"
    },
    "partizipVergangenheit": {
      "de": "gepriesen",
      "lv": "Chwalony"
    }
  },
  {
    "infinitiv": {
      "de": "quellen",
      "lv": "Şişme"
    },
    "praesens": {
      "de": "er quillt",
      "lv": "On przybiera na wadze"
    },
    "imperfektIndikativ": {
      "de": "er quoll",
      "lv": "Vadesi dolmuş"
    },
    "imperfektKonjunktiv": {
      "de": "er quölle",
      "lv": "On gruby"
    },
    "partizipVergangenheit": {
      "de": "gequollen (er ist)",
      "lv": "Şişmiş"
    }
  },
  {
    "infinitiv": {
      "de": "raten",
      "lv": "Öner/bahset"
    },
    "praesens": {
      "de": "er rät",
      "lv": "Poleca /min"
    },
    "imperfektIndikativ": {
      "de": "er riet",
      "lv": "O önerdi/önerdi"
    },
    "imperfektKonjunktiv": {
      "de": "er riete",
      "lv": "Önerirdim/bahsederdim"
    },
    "partizipVergangenheit": {
      "de": "geraten",
      "lv": "Zasugerowane/wspomniane"
    }
  },
  {
    "infinitiv": {
      "de": "reiben",
      "lv": "Ovmak"
    },
    "praesens": {
      "de": "er reibt",
      "lv": "On pociera"
    },
    "imperfektIndikativ": {
      "de": "er rieb",
      "lv": "On pociera"
    },
    "imperfektKonjunktiv": {
      "de": "er riebe",
      "lv": "Ovalardı"
    },
    "partizipVergangenheit": {
      "de": "gerieben",
      "lv": "Pocierany"
    }
  },
  {
    "infinitiv": {
      "de": "reißen",
      "lv": "Çekmek"
    },
    "praesens": {
      "de": "er reißt",
      "lv": "– warczy"
    },
    "imperfektIndikativ": {
      "de": "er riss",
      "lv": "– homurdandı"
    },
    "imperfektKonjunktiv": {
      "de": "er risse",
      "lv": "– homurdandı"
    },
    "partizipVergangenheit": {
      "de": "gerissen",
      "lv": "Rozdarty"
    }
  },
  {
    "infinitiv": {
      "de": "reiten",
      "lv": "Sürmek"
    },
    "praesens": {
      "de": "er reitet",
      "lv": "O sürüyor"
    },
    "imperfektIndikativ": {
      "de": "er ritt",
      "lv": "O sürüyordu"
    },
    "imperfektKonjunktiv": {
      "de": "er ritte",
      "lv": "O sürerdi"
    },
    "partizipVergangenheit": {
      "de": "geritten (er ist)",
      "lv": "O sürüyordu"
    }
  },
  {
    "infinitiv": {
      "de": "rennen",
      "lv": "Koşmak için"
    },
    "praesens": {
      "de": "er rennt",
      "lv": "On biega"
    },
    "imperfektIndikativ": {
      "de": "er rannte",
      "lv": "Koştu"
    },
    "imperfektKonjunktiv": {
      "de": "er rennte",
      "lv": "Koşardı"
    },
    "partizipVergangenheit": {
      "de": "gerannt",
      "lv": "Koştu"
    }
  },
  {
    "infinitiv": {
      "de": "riechen",
      "lv": "Ost"
    },
    "praesens": {
      "de": "er riecht",
      "lv": "On pachnie"
    },
    "imperfektIndikativ": {
      "de": "er roch",
      "lv": "Şarkı söylüyor"
    },
    "imperfektKonjunktiv": {
      "de": "er röche",
      "lv": "On portuje"
    },
    "partizipVergangenheit": {
      "de": "gerochen",
      "lv": "Porta"
    }
  },
  {
    "infinitiv": {
      "de": "ringen",
      "lv": "Mola"
    },
    "praesens": {
      "de": "er ringt",
      "lv": "Kırılıyor"
    },
    "imperfektIndikativ": {
      "de": "er rang",
      "lv": "O bozuldu"
    },
    "imperfektKonjunktiv": {
      "de": "er ränge",
      "lv": "Kırılırdı"
    },
    "partizipVergangenheit": {
      "de": "gerungen",
      "lv": "Prit"
    }
  },
  {
    "infinitiv": {
      "de": "rinnen",
      "lv": "Akış"
    },
    "praesens": {
      "de": "er rinnt",
      "lv": "On biegnie"
    },
    "imperfektIndikativ": {
      "de": "er rann",
      "lv": "Koştu"
    },
    "imperfektKonjunktiv": {
      "de": "er ränne / er rönne",
      "lv": "Koşardı"
    },
    "partizipVergangenheit": {
      "de": "geronnen (er ist)",
      "lv": "Aktı/pıhtılaştı"
    }
  },
  {
    "infinitiv": {
      "de": "rufen",
      "lv": "Kërko"
    },
    "praesens": {
      "de": "er ruft",
      "lv": "On dzwoni"
    },
    "imperfektIndikativ": {
      "de": "er rief",
      "lv": "O aradı"
    },
    "imperfektKonjunktiv": {
      "de": "er riefe",
      "lv": "O arardı"
    },
    "partizipVergangenheit": {
      "de": "gerufen",
      "lv": "Zwany"
    }
  },
  {
    "infinitiv": {
      "de": "salzen",
      "lv": "Tuza"
    },
    "praesens": {
      "de": "er salzt",
      "lv": "Tuzlayan"
    },
    "imperfektIndikativ": {
      "de": "er salzte",
      "lv": "Tuzlayan"
    },
    "imperfektKonjunktiv": {
      "de": "er salzte",
      "lv": "Tuz atacaktı"
    },
    "partizipVergangenheit": {
      "de": "gesalzen",
      "lv": "Posolony"
    }
  },
  {
    "infinitiv": {
      "de": "saufen",
      "lv": "Kuru/içecek"
    },
    "praesens": {
      "de": "er säuft",
      "lv": "On pije/pije"
    },
    "imperfektIndikativ": {
      "de": "er soff",
      "lv": "O içti / içti"
    },
    "imperfektKonjunktiv": {
      "de": "er söffe",
      "lv": "Testereyle kesmek olurdu"
    },
    "partizipVergangenheit": {
      "de": "gesoffen",
      "lv": "Pijany"
    }
  },
  {
    "infinitiv": {
      "de": "saugen",
      "lv": "Emmek"
    },
    "praesens": {
      "de": "er saugt",
      "lv": "On jest do bani"
    },
    "imperfektIndikativ": {
      "de": "er sog",
      "lv": "O emdi"
    },
    "imperfektKonjunktiv": {
      "de": "er söge",
      "lv": "Emmek"
    },
    "partizipVergangenheit": {
      "de": "gesogen",
      "lv": "Ssane"
    }
  },
  {
    "infinitiv": {
      "de": "schaffen",
      "lv": "Oluştur"
    },
    "praesens": {
      "de": "er schafft",
      "lv": "On tworzy"
    },
    "imperfektIndikativ": {
      "de": "er schuf",
      "lv": "Oluşturan"
    },
    "imperfektKonjunktiv": {
      "de": "er schüfe",
      "lv": "O yaratırdı"
    },
    "partizipVergangenheit": {
      "de": "geschaffen",
      "lv": "Stworzony"
    }
  },
  {
    "infinitiv": {
      "de": "schallen",
      "lv": "Nga _hurma."
    },
    "praesens": {
      "de": "es schallt",
      "lv": "To brzmi"
    },
    "imperfektIndikativ": {
      "de": "schallte vai scholl",
      "lv": "Kulağa geliyordu"
    },
    "imperfektKonjunktiv": {
      "de": "schallte vai scholl",
      "lv": "Kulağa geliyordu"
    },
    "partizipVergangenheit": {
      "de": "geschallt",
      "lv": "Kulağa geliyordu"
    }
  },
  {
    "infinitiv": {
      "de": "scheiden",
      "lv": "Boşanma/ayrılık"
    },
    "praesens": {
      "de": "er scheidet",
      "lv": "Boşanıyor/boşanıyor"
    },
    "imperfektIndikativ": {
      "de": "er schied",
      "lv": "Rozwiódł się / rozwiódł się"
    },
    "imperfektKonjunktiv": {
      "de": "er schiede",
      "lv": "Boşanacaktı"
    },
    "partizipVergangenheit": {
      "de": "geschieden (er hat / er ist)",
      "lv": "W separacji/rozwiedziony"
    }
  },
  {
    "infinitiv": {
      "de": "scheinen",
      "lv": "Parlamak/görünmek"
    },
    "praesens": {
      "de": "er scheint",
      "lv": "O parlıyor/görünüyor"
    },
    "imperfektIndikativ": {
      "de": "er schien",
      "lv": "Parlıyordu/görünüyordu"
    },
    "imperfektKonjunktiv": {
      "de": "er schiene",
      "lv": "Parlayacak/görünecekti"
    },
    "partizipVergangenheit": {
      "de": "geschienen",
      "lv": "Parladı/görünüyordu"
    }
  },
  {
    "infinitiv": {
      "de": "schelten",
      "lv": "Bart"
    },
    "praesens": {
      "de": "er schilt",
      "lv": "– karci"
    },
    "imperfektIndikativ": {
      "de": "er schalt",
      "lv": "Bunu yasakladı"
    },
    "imperfektKonjunktiv": {
      "de": "er schölte / er schälte",
      "lv": "Tıraş"
    },
    "partizipVergangenheit": {
      "de": "gescholten",
      "lv": "Sakal"
    }
  },
  {
    "infinitiv": {
      "de": "scheren",
      "lv": "Kesmek"
    },
    "praesens": {
      "de": "er schert",
      "lv": "On tnie"
    },
    "imperfektIndikativ": {
      "de": "schor vai scherte",
      "lv": "Makas"
    },
    "imperfektKonjunktiv": {
      "de": "schor vai scherte",
      "lv": "Makas"
    },
    "partizipVergangenheit": {
      "de": "geschoren vai geschert",
      "lv": "Kırpılmış"
    }
  },
  {
    "infinitiv": {
      "de": "schieben",
      "lv": "İtmek"
    },
    "praesens": {
      "de": "er schiebt",
      "lv": "On popycha"
    },
    "imperfektIndikativ": {
      "de": "er schob",
      "lv": "O itti"
    },
    "imperfektKonjunktiv": {
      "de": "er schöbe",
      "lv": "İterdi"
    },
    "partizipVergangenheit": {
      "de": "geschoben",
      "lv": "İtildi"
    }
  },
  {
    "infinitiv": {
      "de": "schießen",
      "lv": "Film çekmek"
    },
    "praesens": {
      "de": "er schießt",
      "lv": "On strzela"
    },
    "imperfektIndikativ": {
      "de": "er schoss",
      "lv": "Gjuajtje madhështore!"
    },
    "imperfektKonjunktiv": {
      "de": "er schösse",
      "lv": "Ateş ederdi"
    },
    "partizipVergangenheit": {
      "de": "geschossen",
      "lv": "Gjuajtje madhështore!"
    }
  },
  {
    "infinitiv": {
      "de": "schinden",
      "lv": "Eziyet"
    },
    "praesens": {
      "de": "er schindet",
      "lv": "O işkence ediyor"
    },
    "imperfektIndikativ": {
      "de": "schindete",
      "lv": "Eziyet edilmiş"
    },
    "imperfektKonjunktiv": {
      "de": "schindete",
      "lv": "Eziyet edilmiş"
    },
    "partizipVergangenheit": {
      "de": "geschunden",
      "lv": "Eziyet edilmiş"
    }
  },
  {
    "infinitiv": {
      "de": "schlafen",
      "lv": "-Une?"
    },
    "praesens": {
      "de": "er schläft",
      "lv": "O uyuyor"
    },
    "imperfektIndikativ": {
      "de": "er schlief",
      "lv": "O uyuyordu"
    },
    "imperfektKonjunktiv": {
      "de": "er schliefe",
      "lv": "Uyurdu"
    },
    "partizipVergangenheit": {
      "de": "geschlafen",
      "lv": "O uyuyordu"
    }
  },
  {
    "infinitiv": {
      "de": "schlagen",
      "lv": "Grev"
    },
    "praesens": {
      "de": "er schlägt",
      "lv": "Uderza"
    },
    "imperfektIndikativ": {
      "de": "er schlug",
      "lv": "O vurdu"
    },
    "imperfektKonjunktiv": {
      "de": "er schlüge",
      "lv": "Vurmak"
    },
    "partizipVergangenheit": {
      "de": "geschlagen",
      "lv": "Bity"
    }
  },
  {
    "infinitiv": {
      "de": "schleichen",
      "lv": "Po bie shi!"
    },
    "praesens": {
      "de": "er schleicht",
      "lv": "O eğilir"
    },
    "imperfektIndikativ": {
      "de": "er schlich",
      "lv": "Yağmur yağıyordu"
    },
    "imperfektKonjunktiv": {
      "de": "er schliche",
      "lv": "On pada"
    },
    "partizipVergangenheit": {
      "de": "geschlichen (er ist)",
      "lv": "Ai vdiq."
    }
  },
  {
    "infinitiv": {
      "de": "schleifen",
      "lv": "Öğütmek"
    },
    "praesens": {
      "de": "er schleift",
      "lv": "On miele"
    },
    "imperfektIndikativ": {
      "de": "er schliff",
      "lv": "Onu toprakladı"
    },
    "imperfektKonjunktiv": {
      "de": "er schliffe",
      "lv": "Ezilir"
    },
    "partizipVergangenheit": {
      "de": "geschliffen",
      "lv": "Parlak"
    }
  },
  {
    "infinitiv": {
      "de": "schließen",
      "lv": "Kapalı"
    },
    "praesens": {
      "de": "er schließt",
      "lv": "Zamyka"
    },
    "imperfektIndikativ": {
      "de": "er schloss",
      "lv": "O kapattı"
    },
    "imperfektKonjunktiv": {
      "de": "er schlösse",
      "lv": "Onu kapatacaktı"
    },
    "partizipVergangenheit": {
      "de": "geschlossen",
      "lv": "Kapalı"
    }
  },
  {
    "infinitiv": {
      "de": "schlingen",
      "lv": "Neser."
    },
    "praesens": {
      "de": "er schlingt",
      "lv": "Yutkunur"
    },
    "imperfektIndikativ": {
      "de": "er schlang",
      "lv": "Yuttu"
    },
    "imperfektKonjunktiv": {
      "de": "er schlänge",
      "lv": "On rano"
    },
    "partizipVergangenheit": {
      "de": "geschlungen",
      "lv": "Fije mëndafshi?"
    }
  },
  {
    "infinitiv": {
      "de": "schmeißen",
      "lv": "Çıkış yapmak"
    },
    "praesens": {
      "de": "er schmeißt",
      "lv": "Rzuca"
    },
    "imperfektIndikativ": {
      "de": "er schmiss",
      "lv": "Dumped"
    },
    "imperfektKonjunktiv": {
      "de": "er schmisse",
      "lv": "Dumped"
    },
    "partizipVergangenheit": {
      "de": "geschmissen",
      "lv": "Rzucony"
    }
  },
  {
    "infinitiv": {
      "de": "schmelzen",
      "lv": "Hareketli"
    },
    "praesens": {
      "de": "er schmilzt",
      "lv": "Boğuluyor"
    },
    "imperfektIndikativ": {
      "de": "er schmolz",
      "lv": "O inledi"
    },
    "imperfektKonjunktiv": {
      "de": "er schmölze",
      "lv": "Hareket ediyordu"
    },
    "partizipVergangenheit": {
      "de": "geschmolzen (er ist)",
      "lv": "Stopiony"
    }
  },
  {
    "infinitiv": {
      "de": "schnauben",
      "lv": "Syczeć"
    },
    "praesens": {
      "de": "er schnaubt",
      "lv": "Prycha"
    },
    "imperfektIndikativ": {
      "de": "schnaubte vai schnob",
      "lv": "Homurdandı"
    },
    "imperfektKonjunktiv": {
      "de": "schnaubte vai schnob",
      "lv": "Homurdandı"
    },
    "partizipVergangenheit": {
      "de": "geschnaubt vai geschnoben",
      "lv": "Homurdanma"
    }
  },
  {
    "infinitiv": {
      "de": "schneiden",
      "lv": "Kesmek"
    },
    "praesens": {
      "de": "er schneidet",
      "lv": "Dönüyor"
    },
    "imperfektIndikativ": {
      "de": "er schnitt",
      "lv": "O kesti"
    },
    "imperfektKonjunktiv": {
      "de": "er schnitte",
      "lv": "Tnie"
    },
    "partizipVergangenheit": {
      "de": "geschnitten",
      "lv": "Kesme"
    }
  },
  {
    "infinitiv": {
      "de": "schreiben",
      "lv": "Yazmak"
    },
    "praesens": {
      "de": "er schreibt",
      "lv": "Pisze"
    },
    "imperfektIndikativ": {
      "de": "er schrieb",
      "lv": "O yazdı"
    },
    "imperfektKonjunktiv": {
      "de": "er schriebe",
      "lv": "O yazardı"
    },
    "partizipVergangenheit": {
      "de": "geschrieben",
      "lv": "Pisemny"
    }
  },
  {
    "infinitiv": {
      "de": "schreien",
      "lv": "Bağırmak"
    },
    "praesens": {
      "de": "er schreit",
      "lv": "– krzyczy"
    },
    "imperfektIndikativ": {
      "de": "er schrie",
      "lv": "– diye bağırdı"
    },
    "imperfektKonjunktiv": {
      "de": "er schriee",
      "lv": "Diye bağırırdı"
    },
    "partizipVergangenheit": {
      "de": "geschrien",
      "lv": "O bağırdı"
    }
  },
  {
    "infinitiv": {
      "de": "schreiten",
      "lv": "Pieszy"
    },
    "praesens": {
      "de": "er schreitet",
      "lv": "On idzie"
    },
    "imperfektIndikativ": {
      "de": "er schritt",
      "lv": "O yürüdü"
    },
    "imperfektKonjunktiv": {
      "de": "er schritte",
      "lv": "Gidebilirdi"
    },
    "partizipVergangenheit": {
      "de": "geschritten (er ist)",
      "lv": "O yürüdü"
    }
  },
  {
    "infinitiv": {
      "de": "schweigen",
      "lv": "Sessiz ol"
    },
    "praesens": {
      "de": "er schweigt",
      "lv": "On milczy"
    },
    "imperfektIndikativ": {
      "de": "er schwieg",
      "lv": "O sessizdi"
    },
    "imperfektKonjunktiv": {
      "de": "er schwiege",
      "lv": "Sessiz kalacaktı"
    },
    "partizipVergangenheit": {
      "de": "geschwiegen",
      "lv": "Uciszony"
    }
  },
  {
    "infinitiv": {
      "de": "schwellen",
      "lv": "Pompa"
    },
    "praesens": {
      "de": "er schwillt",
      "lv": "– nefesi kesilir"
    },
    "imperfektIndikativ": {
      "de": "er schwoll",
      "lv": "On pampas"
    },
    "imperfektKonjunktiv": {
      "de": "er schwölle",
      "lv": "O pompalardı"
    },
    "partizipVergangenheit": {
      "de": "geschwollen (er ist)",
      "lv": "Pompa"
    }
  },
  {
    "infinitiv": {
      "de": "schwimmen",
      "lv": "Not"
    },
    "praesens": {
      "de": "er schwimmt",
      "lv": "O yüzüyor"
    },
    "imperfektIndikativ": {
      "de": "er schwamm",
      "lv": "O yüzdü"
    },
    "imperfektKonjunktiv": {
      "de": "er schwömme / er schwämme",
      "lv": "O yüzerdi"
    },
    "partizipVergangenheit": {
      "de": "geschwommen (er ist)",
      "lv": "O yüzdü"
    }
  },
  {
    "infinitiv": {
      "de": "schwinden",
      "lv": "Yok olmak"
    },
    "praesens": {
      "de": "er schwindet",
      "lv": "On znika"
    },
    "imperfektIndikativ": {
      "de": "er schwand",
      "lv": "Ortadan kayboldu"
    },
    "imperfektKonjunktiv": {
      "de": "er schwände",
      "lv": "Ortadan kaybolur"
    },
    "partizipVergangenheit": {
      "de": "geschwunden (er ist)",
      "lv": "Kayıp"
    }
  },
  {
    "infinitiv": {
      "de": "schwingen",
      "lv": "Fala"
    },
    "praesens": {
      "de": "er schwingt",
      "lv": "Macha"
    },
    "imperfektIndikativ": {
      "de": "er schwang",
      "lv": "El salladı"
    },
    "imperfektKonjunktiv": {
      "de": "er schwänge",
      "lv": "El sallardı"
    },
    "partizipVergangenheit": {
      "de": "geschwungen",
      "lv": "Zaondulowany"
    }
  },
  {
    "infinitiv": {
      "de": "schwören",
      "lv": "Küfür"
    },
    "praesens": {
      "de": "er schwört",
      "lv": "Yemin"
    },
    "imperfektIndikativ": {
      "de": "er schwur / er schwor",
      "lv": "Przysiągł"
    },
    "imperfektKonjunktiv": {
      "de": "er schwöre",
      "lv": "Yemin ederdi"
    },
    "partizipVergangenheit": {
      "de": "geschworen",
      "lv": "Yeminli"
    }
  },
  {
    "infinitiv": {
      "de": "sehen",
      "lv": "Görmek"
    },
    "praesens": {
      "de": "er sieht",
      "lv": "Widzi"
    },
    "imperfektIndikativ": {
      "de": "er sah",
      "lv": "O gördü"
    },
    "imperfektKonjunktiv": {
      "de": "er sähe",
      "lv": "O görürdü"
    },
    "partizipVergangenheit": {
      "de": "gesehen",
      "lv": "Widziany"
    }
  },
  {
    "infinitiv": {
      "de": "sein",
      "lv": "Të jesh"
    },
    "praesens": {
      "de": "er ist",
      "lv": "On jest"
    },
    "imperfektIndikativ": {
      "de": "war",
      "lv": "Asaj."
    },
    "imperfektKonjunktiv": {
      "de": "war",
      "lv": "Asaj."
    },
    "partizipVergangenheit": {
      "de": "gewesen",
      "lv": "O kaldı"
    }
  },
  {
    "infinitiv": {
      "de": "senden",
      "lv": "Göndermek"
    },
    "praesens": {
      "de": "er sendet",
      "lv": "O gönderir"
    },
    "imperfektIndikativ": {
      "de": "er sandte / er sendete",
      "lv": "Gönderilmiş"
    },
    "imperfektKonjunktiv": {
      "de": "er sendete",
      "lv": "Onu gönderecekti"
    },
    "partizipVergangenheit": {
      "de": "gesandt / gesendet",
      "lv": "Gönderilmiş"
    }
  },
  {
    "infinitiv": {
      "de": "sieden",
      "lv": "Guzhinieri."
    },
    "praesens": {
      "de": "er siedet",
      "lv": "On gotuje"
    },
    "imperfektIndikativ": {
      "de": "sott vai siedete",
      "lv": "Gotowany"
    },
    "imperfektKonjunktiv": {
      "de": "sott vai siedete",
      "lv": "Gotowany"
    },
    "partizipVergangenheit": {
      "de": "gesotten vai gesiedet",
      "lv": "Gotowany"
    }
  },
  {
    "infinitiv": {
      "de": "singen",
      "lv": "Këndim"
    },
    "praesens": {
      "de": "er singt",
      "lv": "Şarkı söylüyor"
    },
    "imperfektIndikativ": {
      "de": "er sang",
      "lv": "Şarkı söyledi"
    },
    "imperfektKonjunktiv": {
      "de": "er sänge",
      "lv": "Şarkı söylerdi"
    },
    "partizipVergangenheit": {
      "de": "gesungen",
      "lv": "Şarkı söylendi"
    }
  },
  {
    "infinitiv": {
      "de": "sinken",
      "lv": "Atmak"
    },
    "praesens": {
      "de": "er sinkt",
      "lv": "On tonie"
    },
    "imperfektIndikativ": {
      "de": "er sank",
      "lv": "Yerleşiyordu"
    },
    "imperfektKonjunktiv": {
      "de": "er sänke",
      "lv": "Batardı"
    },
    "partizipVergangenheit": {
      "de": "gesunken (er ist)",
      "lv": "Makyaj yapmak"
    }
  },
  {
    "infinitiv": {
      "de": "sinnen",
      "lv": "Yansıt"
    },
    "praesens": {
      "de": "er sinnt",
      "lv": "– merak ediyor"
    },
    "imperfektIndikativ": {
      "de": "er sann",
      "lv": "– merak etti"
    },
    "imperfektKonjunktiv": {
      "de": "er sönne / er sänne",
      "lv": "Merak ederdi"
    },
    "partizipVergangenheit": {
      "de": "gesonnen",
      "lv": "Myślący"
    }
  },
  {
    "infinitiv": {
      "de": "sitzen",
      "lv": "Ulja"
    },
    "praesens": {
      "de": "er sitzt",
      "lv": "On siedzi"
    },
    "imperfektIndikativ": {
      "de": "er sass",
      "lv": "O oturuyordu"
    },
    "imperfektKonjunktiv": {
      "de": "er säße",
      "lv": "O oturuyor olurdu"
    },
    "partizipVergangenheit": {
      "de": "gesessen",
      "lv": "O oturdu"
    }
  },
  {
    "infinitiv": {
      "de": "sollen",
      "lv": "İhtiyacım var / mecbur kalacağım"
    },
    "praesens": {
      "de": "er soll",
      "lv": "Potrzebuje"
    },
    "imperfektIndikativ": {
      "de": "sollte",
      "lv": "Yapmalıydı"
    },
    "imperfektKonjunktiv": {
      "de": "sollte",
      "lv": "Yapmalıydı"
    },
    "partizipVergangenheit": {
      "de": "gesollt",
      "lv": "Wymagany"
    }
  },
  {
    "infinitiv": {
      "de": "speien",
      "lv": "Tükürmek"
    },
    "praesens": {
      "de": "er speit",
      "lv": "On pluje"
    },
    "imperfektIndikativ": {
      "de": "er spie",
      "lv": "Tükürdü"
    },
    "imperfektKonjunktiv": {
      "de": "er spie",
      "lv": "Tükürürdü"
    },
    "partizipVergangenheit": {
      "de": "gespien",
      "lv": "Tükürdü"
    }
  },
  {
    "infinitiv": {
      "de": "spinnen",
      "lv": "Etrafta takıl"
    },
    "praesens": {
      "de": "er spinnt",
      "lv": "On się przekręca"
    },
    "imperfektIndikativ": {
      "de": "er spann",
      "lv": "Arkasını döndü"
    },
    "imperfektKonjunktiv": {
      "de": "er spönne / er spänne",
      "lv": "O etrafta takılırdı"
    },
    "partizipVergangenheit": {
      "de": "gesponnen",
      "lv": "Uprzedzony"
    }
  },
  {
    "infinitiv": {
      "de": "spleißen",
      "lv": "Birleştirmek"
    },
    "praesens": {
      "de": "er spleißt",
      "lv": "O bağlanır"
    },
    "imperfektIndikativ": {
      "de": "spliss",
      "lv": "Bağlı"
    },
    "imperfektKonjunktiv": {
      "de": "spliss",
      "lv": "Bağlı"
    },
    "partizipVergangenheit": {
      "de": "gesplissen",
      "lv": "Bağlı"
    }
  },
  {
    "infinitiv": {
      "de": "sprechen",
      "lv": "Thuaj diçka."
    },
    "praesens": {
      "de": "er spricht",
      "lv": "-Por është në telefon dhe..."
    },
    "imperfektIndikativ": {
      "de": "er sprach",
      "lv": "O konuştu"
    },
    "imperfektKonjunktiv": {
      "de": "er spräche",
      "lv": "Konuşmak"
    },
    "partizipVergangenheit": {
      "de": "gesprochen",
      "lv": "Konuşulan"
    }
  },
  {
    "infinitiv": {
      "de": "sprießen",
      "lv": "Başarılı"
    },
    "praesens": {
      "de": "er sprießt",
      "lv": "O gelişiyor"
    },
    "imperfektIndikativ": {
      "de": "er spross",
      "lv": "Zenginleşti"
    },
    "imperfektKonjunktiv": {
      "de": "er sprösse",
      "lv": "O raf"
    },
    "partizipVergangenheit": {
      "de": "gesprossen (er ist)",
      "lv": "Arm"
    }
  },
  {
    "infinitiv": {
      "de": "springen",
      "lv": "Zıplamak"
    },
    "praesens": {
      "de": "er springt",
      "lv": "On skacze"
    },
    "imperfektIndikativ": {
      "de": "er sprang",
      "lv": "O atladı"
    },
    "imperfektKonjunktiv": {
      "de": "er spränge",
      "lv": "O atlardı"
    },
    "partizipVergangenheit": {
      "de": "gesprungen (er ist)",
      "lv": "Obiektyw"
    }
  },
  {
    "infinitiv": {
      "de": "stechen",
      "lv": "Bıçaklama"
    },
    "praesens": {
      "de": "er sticht",
      "lv": "Bıçaklıyor"
    },
    "imperfektIndikativ": {
      "de": "er stach",
      "lv": "O vurdu"
    },
    "imperfektKonjunktiv": {
      "de": "er stäche",
      "lv": "Bıçaklamak"
    },
    "partizipVergangenheit": {
      "de": "gestochen",
      "lv": "Bıçaklandı"
    }
  },
  {
    "infinitiv": {
      "de": "stecken",
      "lv": "Yapıştır/yapıştır"
    },
    "praesens": {
      "de": "er steckt",
      "lv": "On popycha"
    },
    "imperfektIndikativ": {
      "de": "stak vai steckte",
      "lv": "Nadziewany"
    },
    "imperfektKonjunktiv": {
      "de": "stak vai steckte",
      "lv": "Nadziewany"
    },
    "partizipVergangenheit": {
      "de": "gesteckt",
      "lv": "Nadziewany"
    }
  },
  {
    "infinitiv": {
      "de": "stehen",
      "lv": "Të jesh"
    },
    "praesens": {
      "de": "er steht",
      "lv": "On stoi"
    },
    "imperfektIndikativ": {
      "de": "er stand",
      "lv": "Çelik"
    },
    "imperfektKonjunktiv": {
      "de": "er stände / er stünde",
      "lv": "O dururdu"
    },
    "partizipVergangenheit": {
      "de": "gestanden",
      "lv": "Ayakta"
    }
  },
  {
    "infinitiv": {
      "de": "stehlen",
      "lv": "Çal"
    },
    "praesens": {
      "de": "er stiehlt",
      "lv": "On kradnie"
    },
    "imperfektIndikativ": {
      "de": "er stahl",
      "lv": "Onu çaldı"
    },
    "imperfektKonjunktiv": {
      "de": "er stöhle / er stähle",
      "lv": "Hırsızlık yapardı"
    },
    "partizipVergangenheit": {
      "de": "gestohlen",
      "lv": "Skradziony"
    }
  },
  {
    "infinitiv": {
      "de": "steigen",
      "lv": "Tırmanmak"
    },
    "praesens": {
      "de": "er steigt",
      "lv": "Tırmanıyor"
    },
    "imperfektIndikativ": {
      "de": "er stieg",
      "lv": "Yukarı tırmandı"
    },
    "imperfektKonjunktiv": {
      "de": "er stiege",
      "lv": "Tırmanacaktı"
    },
    "partizipVergangenheit": {
      "de": "gestiegen (er ist)",
      "lv": "Yukarı tırmandı"
    }
  },
  {
    "infinitiv": {
      "de": "sterben",
      "lv": "Öl"
    },
    "praesens": {
      "de": "er stirbt",
      "lv": "On umiera"
    },
    "imperfektIndikativ": {
      "de": "er starb",
      "lv": "Umarł"
    },
    "imperfektKonjunktiv": {
      "de": "er stürbe",
      "lv": "Ölecekti"
    },
    "partizipVergangenheit": {
      "de": "gestorben (er ist)",
      "lv": "Lsak O'Dej po e mbivlerëson fuqinë e tij."
    }
  },
  {
    "infinitiv": {
      "de": "stieben",
      "lv": "Piana / wir"
    },
    "praesens": {
      "de": "es stiebt",
      "lv": "Wieje"
    },
    "imperfektIndikativ": {
      "de": "stob vai stiebte",
      "lv": "Spieniony"
    },
    "imperfektKonjunktiv": {
      "de": "stob vai stiebte",
      "lv": "Spieniony"
    },
    "partizipVergangenheit": {
      "de": "gestoben vai gestiebt",
      "lv": "Rozpieszczony"
    }
  },
  {
    "infinitiv": {
      "de": "stinken",
      "lv": "Koku"
    },
    "praesens": {
      "de": "es stinkt",
      "lv": "Kokuyor"
    },
    "imperfektIndikativ": {
      "de": "stank",
      "lv": "Koktu"
    },
    "imperfektKonjunktiv": {
      "de": "stank",
      "lv": "Koktu"
    },
    "partizipVergangenheit": {
      "de": "gestunken",
      "lv": "Śmierdzący"
    }
  },
  {
    "infinitiv": {
      "de": "stoßen",
      "lv": "Basmak"
    },
    "praesens": {
      "de": "er stößt",
      "lv": "On popycha"
    },
    "imperfektIndikativ": {
      "de": "er stieß",
      "lv": "O itti"
    },
    "imperfektKonjunktiv": {
      "de": "er stieße",
      "lv": "O bastı"
    },
    "partizipVergangenheit": {
      "de": "gestoßen",
      "lv": "İtildi"
    }
  },
  {
    "infinitiv": {
      "de": "streichen",
      "lv": "Farba/pasek"
    },
    "praesens": {
      "de": "er streicht",
      "lv": "Maluje / paski"
    },
    "imperfektIndikativ": {
      "de": "er strich",
      "lv": "Çizgiler çizdi"
    },
    "imperfektKonjunktiv": {
      "de": "er striche",
      "lv": "Resim yapıyordu/parçalıyordu"
    },
    "partizipVergangenheit": {
      "de": "gestrichen",
      "lv": "Malowane / w paski"
    }
  },
  {
    "infinitiv": {
      "de": "streiten",
      "lv": "Kavga"
    },
    "praesens": {
      "de": "er streitet",
      "lv": "On walczy"
    },
    "imperfektIndikativ": {
      "de": "er stritt",
      "lv": "Savaştı"
    },
    "imperfektKonjunktiv": {
      "de": "er stritte",
      "lv": "Dövüşecekti"
    },
    "partizipVergangenheit": {
      "de": "gestritten",
      "lv": "Savaştı"
    }
  },
  {
    "infinitiv": {
      "de": "tragen",
      "lv": "Giymek"
    },
    "praesens": {
      "de": "er trägt",
      "lv": "On niesie"
    },
    "imperfektIndikativ": {
      "de": "er trug",
      "lv": "Taşıyordu"
    },
    "imperfektKonjunktiv": {
      "de": "er trüge",
      "lv": "O taşıyacak"
    },
    "partizipVergangenheit": {
      "de": "getragen",
      "lv": "Przewieziony"
    }
  },
  {
    "infinitiv": {
      "de": "treffen",
      "lv": "Tanışmak"
    },
    "praesens": {
      "de": "er trifft",
      "lv": "Spotyka"
    },
    "imperfektIndikativ": {
      "de": "er traf",
      "lv": "O tanıştı"
    },
    "imperfektKonjunktiv": {
      "de": "er träfe",
      "lv": "Buluşacaktı"
    },
    "partizipVergangenheit": {
      "de": "getroffen",
      "lv": "Napotkane"
    }
  },
  {
    "infinitiv": {
      "de": "treiben",
      "lv": "Takip etmek"
    },
    "praesens": {
      "de": "er treibt",
      "lv": "O sürüyor"
    },
    "imperfektIndikativ": {
      "de": "er trieb",
      "lv": "O sürüyordu"
    },
    "imperfektKonjunktiv": {
      "de": "er triebe",
      "lv": "O sürerdi"
    },
    "partizipVergangenheit": {
      "de": "getrieben",
      "lv": "Goniony"
    }
  },
  {
    "infinitiv": {
      "de": "treten",
      "lv": "İçeri gel / git"
    },
    "praesens": {
      "de": "er tritt",
      "lv": "On wchodzi/idzie"
    },
    "imperfektIndikativ": {
      "de": "er trat",
      "lv": "Ayaktaydı / yürüyordu"
    },
    "imperfektKonjunktiv": {
      "de": "er träte",
      "lv": "Ayağa kalkar/giderdim"
    },
    "partizipVergangenheit": {
      "de": "getreten (er ist)",
      "lv": "Ayaktaydı / yürüyordu"
    }
  },
  {
    "infinitiv": {
      "de": "trinken",
      "lv": "Pije"
    },
    "praesens": {
      "de": "er trinkt",
      "lv": "On pije"
    },
    "imperfektIndikativ": {
      "de": "er trank",
      "lv": "O içti"
    },
    "imperfektKonjunktiv": {
      "de": "er tränke",
      "lv": "O içerdi"
    },
    "partizipVergangenheit": {
      "de": "getrunken",
      "lv": "Pijany"
    }
  },
  {
    "infinitiv": {
      "de": "trügen",
      "lv": "Aldatmak"
    },
    "praesens": {
      "de": "er trögt",
      "lv": "On oszukuje"
    },
    "imperfektIndikativ": {
      "de": "er trog",
      "lv": "Hile yaptı"
    },
    "imperfektKonjunktiv": {
      "de": "er tröge",
      "lv": "Hile yapardı"
    },
    "partizipVergangenheit": {
      "de": "getrogen",
      "lv": "Oszukany"
    }
  },
  {
    "infinitiv": {
      "de": "tun",
      "lv": "Yapmak"
    },
    "praesens": {
      "de": "er tut",
      "lv": "On to robi"
    },
    "imperfektIndikativ": {
      "de": "er tat",
      "lv": "O yaptı"
    },
    "imperfektKonjunktiv": {
      "de": "er täte",
      "lv": "O bunu yapardı"
    },
    "partizipVergangenheit": {
      "de": "getan",
      "lv": "Zrobione"
    }
  },
  {
    "infinitiv": {
      "de": "verderben",
      "lv": "Zarar"
    },
    "praesens": {
      "de": "er verdirbt",
      "lv": "On niszczy"
    },
    "imperfektIndikativ": {
      "de": "er verdarb",
      "lv": "Hasarlı"
    },
    "imperfektKonjunktiv": {
      "de": "er verdürbe",
      "lv": "Zarar vermek"
    },
    "partizipVergangenheit": {
      "de": "verdorben",
      "lv": "Uszkodzony"
    }
  },
  {
    "infinitiv": {
      "de": "verdrießen",
      "lv": "Tahrişe neden olur"
    },
    "praesens": {
      "de": "er verdrießt",
      "lv": "Tahrişe neden olur"
    },
    "imperfektIndikativ": {
      "de": "er verdross",
      "lv": "Tahrişe neden oldu"
    },
    "imperfektKonjunktiv": {
      "de": "er verdrösse",
      "lv": "Tahrişe neden olur"
    },
    "partizipVergangenheit": {
      "de": "verdrossen",
      "lv": "Zdenerwowany"
    }
  },
  {
    "infinitiv": {
      "de": "vergessen",
      "lv": "Unutmak"
    },
    "praesens": {
      "de": "er vergisst",
      "lv": "Zapomina"
    },
    "imperfektIndikativ": {
      "de": "er vergass",
      "lv": "Unuttu"
    },
    "imperfektKonjunktiv": {
      "de": "er vergäße",
      "lv": "Unuturdu"
    },
    "partizipVergangenheit": {
      "de": "vergessen",
      "lv": "Zapomniany"
    }
  },
  {
    "infinitiv": {
      "de": "verlieren",
      "lv": "Humbje"
    },
    "praesens": {
      "de": "er verliert",
      "lv": "On przegrywa"
    },
    "imperfektIndikativ": {
      "de": "er verlor",
      "lv": "O kaybetti"
    },
    "imperfektKonjunktiv": {
      "de": "er verlöre",
      "lv": "Kaybederdi"
    },
    "partizipVergangenheit": {
      "de": "verloren",
      "lv": "Kayıp"
    }
  },
  {
    "infinitiv": {
      "de": "wachsen",
      "lv": "Büyümek"
    },
    "praesens": {
      "de": "er wächst",
      "lv": "O büyüyor"
    },
    "imperfektIndikativ": {
      "de": "er wuchs",
      "lv": "O büyüdü"
    },
    "imperfektKonjunktiv": {
      "de": "er wüchse",
      "lv": "Büyürdü"
    },
    "partizipVergangenheit": {
      "de": "gewachsen (er ist)",
      "lv": "O büyüdü"
    }
  },
  {
    "infinitiv": {
      "de": "waschen",
      "lv": "Larje"
    },
    "praesens": {
      "de": "er wäscht",
      "lv": "Myje"
    },
    "imperfektIndikativ": {
      "de": "er wusch",
      "lv": "Kendini yıkadı"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsche",
      "lv": "Kendini yıkamak"
    },
    "partizipVergangenheit": {
      "de": "gewaschen",
      "lv": "Umyty"
    }
  },
  {
    "infinitiv": {
      "de": "weben",
      "lv": "Splot"
    },
    "praesens": {
      "de": "er webt",
      "lv": "On tka"
    },
    "imperfektIndikativ": {
      "de": "wob",
      "lv": "Tkanka"
    },
    "imperfektKonjunktiv": {
      "de": "wob",
      "lv": "Tkanka"
    },
    "partizipVergangenheit": {
      "de": "gewoben",
      "lv": "Tkane"
    }
  },
  {
    "infinitiv": {
      "de": "weichen",
      "lv": "Geri çekilmek"
    },
    "praesens": {
      "de": "er weicht",
      "lv": "On się wycofuje"
    },
    "imperfektIndikativ": {
      "de": "er wich",
      "lv": "Geri adım attı"
    },
    "imperfektKonjunktiv": {
      "de": "er wiche",
      "lv": "Geri adım atacaktı"
    },
    "partizipVergangenheit": {
      "de": "gewichen (er ist)",
      "lv": "Geri adım atın"
    }
  },
  {
    "infinitiv": {
      "de": "weisen",
      "lv": "Göstermek"
    },
    "praesens": {
      "de": "er weist",
      "lv": "On pokazuje"
    },
    "imperfektIndikativ": {
      "de": "er wies",
      "lv": "O gösterdi"
    },
    "imperfektKonjunktiv": {
      "de": "er wiese",
      "lv": "O gösterirdi"
    },
    "partizipVergangenheit": {
      "de": "gewiesen",
      "lv": "Pokazano"
    }
  },
  {
    "infinitiv": {
      "de": "wenden",
      "lv": "Değiştir/kırp"
    },
    "praesens": {
      "de": "er wendet",
      "lv": "Etrafında dönüyor"
    },
    "imperfektIndikativ": {
      "de": "er wandte / es wendete",
      "lv": "Döndü / döndü"
    },
    "imperfektKonjunktiv": {
      "de": "er wendete",
      "lv": "O değiştirirdi/tersine çevirirdi"
    },
    "partizipVergangenheit": {
      "de": "gewandt / gewendet",
      "lv": "Değiştirildi/geri alındı"
    }
  },
  {
    "infinitiv": {
      "de": "werben",
      "lv": "Teklif et"
    },
    "praesens": {
      "de": "er wirbt",
      "lv": "Proponuje"
    },
    "imperfektIndikativ": {
      "de": "er warb",
      "lv": "Teklif etti"
    },
    "imperfektKonjunktiv": {
      "de": "er würbe",
      "lv": "O önerecekti"
    },
    "partizipVergangenheit": {
      "de": "geworben",
      "lv": "Teklif etti"
    }
  },
  {
    "infinitiv": {
      "de": "werden",
      "lv": "Duke u bërë"
    },
    "praesens": {
      "de": "er wird",
      "lv": "O olur"
    },
    "imperfektIndikativ": {
      "de": "wurde",
      "lv": "O oldu"
    },
    "imperfektKonjunktiv": {
      "de": "wurde",
      "lv": "O oldu"
    },
    "partizipVergangenheit": {
      "de": "geworden",
      "lv": "Oldu"
    }
  },
  {
    "infinitiv": {
      "de": "werfen",
      "lv": "Çıkış yapmak"
    },
    "praesens": {
      "de": "er wirft",
      "lv": "Rzuca"
    },
    "imperfektIndikativ": {
      "de": "er warf",
      "lv": "Dumped"
    },
    "imperfektKonjunktiv": {
      "de": "er würfe",
      "lv": "Dumped"
    },
    "partizipVergangenheit": {
      "de": "geworfen",
      "lv": "Rzucony"
    }
  },
  {
    "infinitiv": {
      "de": "wiegen",
      "lv": "Tartmak"
    },
    "praesens": {
      "de": "er wiegt",
      "lv": "Ağırlığı"
    },
    "imperfektIndikativ": {
      "de": "er wog",
      "lv": "Ağırdı"
    },
    "imperfektKonjunktiv": {
      "de": "er wöge",
      "lv": "Ağırlığı olurdu"
    },
    "partizipVergangenheit": {
      "de": "gewogen",
      "lv": "Ağırlıklı"
    }
  },
  {
    "infinitiv": {
      "de": "winden",
      "lv": "Örgü"
    },
    "praesens": {
      "de": "er windet",
      "lv": "On przypina"
    },
    "imperfektIndikativ": {
      "de": "er wand",
      "lv": "On zaplata warkocze"
    },
    "imperfektKonjunktiv": {
      "de": "er wände",
      "lv": "Örgü örerdi"
    },
    "partizipVergangenheit": {
      "de": "gewunden",
      "lv": "Spleciony"
    }
  },
  {
    "infinitiv": {
      "de": "wissen",
      "lv": "Dije"
    },
    "praesens": {
      "de": "er weiß",
      "lv": "On wie"
    },
    "imperfektIndikativ": {
      "de": "er wusste",
      "lv": "Wiedział"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsste",
      "lv": "O bilirdi"
    },
    "partizipVergangenheit": {
      "de": "gewusst",
      "lv": "Znany"
    }
  },
  {
    "infinitiv": {
      "de": "wollen",
      "lv": "Dua"
    },
    "praesens": {
      "de": "er will",
      "lv": "On chce"
    },
    "imperfektIndikativ": {
      "de": "wollte",
      "lv": "Istedim"
    },
    "imperfektKonjunktiv": {
      "de": "wollte",
      "lv": "Istedim"
    },
    "partizipVergangenheit": {
      "de": "gewollt",
      "lv": "Istedim"
    }
  },
  {
    "infinitiv": {
      "de": "wringen",
      "lv": "Kes/sık"
    },
    "praesens": {
      "de": "er wringt",
      "lv": "On wycina"
    },
    "imperfektIndikativ": {
      "de": "wrang",
      "lv": "Cut"
    },
    "imperfektKonjunktiv": {
      "de": "wrang",
      "lv": "Cut"
    },
    "partizipVergangenheit": {
      "de": "gewrungen",
      "lv": "Cut"
    }
  },
  {
    "infinitiv": {
      "de": "zeihen",
      "lv": "Suçlamak"
    },
    "praesens": {
      "de": "er zeiht",
      "lv": "On obwinia"
    },
    "imperfektIndikativ": {
      "de": "zieh",
      "lv": "Obwiniony"
    },
    "imperfektKonjunktiv": {
      "de": "zieh",
      "lv": "Obwiniony"
    },
    "partizipVergangenheit": {
      "de": "geziehen",
      "lv": "Obwiniony"
    }
  },
  {
    "infinitiv": {
      "de": "ziehen",
      "lv": "Çekmek"
    },
    "praesens": {
      "de": "er zieht",
      "lv": "O çeker"
    },
    "imperfektIndikativ": {
      "de": "er zog",
      "lv": "O çekti"
    },
    "imperfektKonjunktiv": {
      "de": "er zöge",
      "lv": "O çekerdi"
    },
    "partizipVergangenheit": {
      "de": "gezogen",
      "lv": "Sürüklendi"
    }
  },
  {
    "infinitiv": {
      "de": "zwingen",
      "lv": "Güç"
    },
    "praesens": {
      "de": "er zwingt",
      "lv": "On zmusza"
    },
    "imperfektIndikativ": {
      "de": "er zwang",
      "lv": "Zorlanmış"
    },
    "imperfektKonjunktiv": {
      "de": "er zwänge",
      "lv": "Zorlamak"
    },
    "partizipVergangenheit": {
      "de": "gezwungen",
      "lv": "Wymuszony"
    }
  },
  {
    "infinitiv": {
      "de": "empfangen",
      "lv": "Për të marrë"
    },
    "praesens": {
      "de": "er empfängt",
      "lv": "Otrzymuje"
    },
    "imperfektIndikativ": {
      "de": "er empfing",
      "lv": "Kabul edilmiş"
    },
    "imperfektKonjunktiv": {
      "de": "er empfinge",
      "lv": "Alacağı"
    },
    "partizipVergangenheit": {
      "de": "empfangen",
      "lv": "Otrzymane"
    }
  },
  {
    "infinitiv": {
      "de": "erwägen",
      "lv": "Dikkate almak"
    },
    "praesens": {
      "de": "er erwägt",
      "lv": "Düşünüyor"
    },
    "imperfektIndikativ": {
      "de": "er erwog",
      "lv": "Bunu düşündü"
    },
    "imperfektKonjunktiv": {
      "de": "er erwöge",
      "lv": "Bunu düşünecekti"
    },
    "partizipVergangenheit": {
      "de": "erwogen",
      "lv": "Olarak kabul edilir"
    }
  },
  {
    "infinitiv": {
      "de": "fechten",
      "lv": "Kavga"
    },
    "praesens": {
      "de": "er ficht",
      "lv": "On walczy"
    },
    "imperfektIndikativ": {
      "de": "er focht",
      "lv": "Savaştı"
    },
    "imperfektKonjunktiv": {
      "de": "er föchte",
      "lv": "Dövüşecekti"
    },
    "partizipVergangenheit": {
      "de": "gefochten",
      "lv": "Savaştı"
    }
  },
  {
    "infinitiv": {
      "de": "flechten",
      "lv": "Örgü"
    },
    "praesens": {
      "de": "er flicht",
      "lv": "On przypina"
    },
    "imperfektIndikativ": {
      "de": "er flocht",
      "lv": "On zaplata warkocze"
    },
    "imperfektKonjunktiv": {
      "de": "er flöchte",
      "lv": "Örgü örerdi"
    },
    "partizipVergangenheit": {
      "de": "geflochten",
      "lv": "Spleciony"
    }
  },
  {
    "infinitiv": {
      "de": "hangen",
      "lv": "Asmak"
    },
    "praesens": {
      "de": "er hängt",
      "lv": "Wisi"
    },
    "imperfektIndikativ": {
      "de": "er hing",
      "lv": "Kendini astı"
    },
    "imperfektKonjunktiv": {
      "de": "er hinge",
      "lv": "Kendini asacaktı"
    },
    "partizipVergangenheit": {
      "de": "gehangen",
      "lv": "Dayanıklı"
    }
  },
  {
    "infinitiv": {
      "de": "spalten",
      "lv": "Bölmek"
    },
    "praesens": {
      "de": "er spaltet",
      "lv": "On dzieli"
    },
    "imperfektIndikativ": {
      "de": "er spaltete",
      "lv": "O ayrıldı"
    },
    "imperfektKonjunktiv": {
      "de": "er spaltete",
      "lv": "Paylaşmak"
    },
    "partizipVergangenheit": {
      "de": "gespalten",
      "lv": "Bölüm"
    }
  },
  {
    "infinitiv": {
      "de": "verzeihen",
      "lv": "Affetmek"
    },
    "praesens": {
      "de": "er verzeiht",
      "lv": "On przebacza"
    },
    "imperfektIndikativ": {
      "de": "er verzieh",
      "lv": "Affedildi"
    },
    "imperfektKonjunktiv": {
      "de": "er verziehe",
      "lv": "Ai do të kishte falur"
    },
    "partizipVergangenheit": {
      "de": "verziehen",
      "lv": "Wybaczony"
    }
  }
];

window.VERB_ENTRIES = VERB_ENTRIES;

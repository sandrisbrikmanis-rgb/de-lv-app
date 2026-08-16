const VERB_ENTRIES = [
  {
    "infinitiv": {
      "de": "backen",
      "lv": "At bage"
    },
    "praesens": {
      "de": "er bäckt",
      "lv": "Han bager"
    },
    "imperfektIndikativ": {
      "de": "er buk",
      "lv": "Han bagte"
    },
    "imperfektKonjunktiv": {
      "de": "er büke",
      "lv": "Han ville bage"
    },
    "partizipVergangenheit": {
      "de": "gebacken",
      "lv": "Bagt"
    }
  },
  {
    "infinitiv": {
      "de": "befehlen",
      "lv": "At kommandere"
    },
    "praesens": {
      "de": "er befiehlt",
      "lv": "Befaler han"
    },
    "imperfektIndikativ": {
      "de": "er befahl",
      "lv": "Befalede han"
    },
    "imperfektKonjunktiv": {
      "de": "er beföhle",
      "lv": "Han ville kommandere"
    },
    "partizipVergangenheit": {
      "de": "befohlen",
      "lv": "Kommanderet"
    }
  },
  {
    "infinitiv": {
      "de": "beginnen",
      "lv": "At starte"
    },
    "praesens": {
      "de": "er beginnt",
      "lv": "Han starter"
    },
    "imperfektIndikativ": {
      "de": "er begann",
      "lv": "Begyndte han"
    },
    "imperfektKonjunktiv": {
      "de": "er begönne / er begänne",
      "lv": "Han ville starte"
    },
    "partizipVergangenheit": {
      "de": "begonnen",
      "lv": "Startet"
    }
  },
  {
    "infinitiv": {
      "de": "beißen",
      "lv": "At bide"
    },
    "praesens": {
      "de": "er beißt",
      "lv": "Han bider"
    },
    "imperfektIndikativ": {
      "de": "er biss",
      "lv": "Han bed"
    },
    "imperfektKonjunktiv": {
      "de": "er bisse",
      "lv": "Han ville bide"
    },
    "partizipVergangenheit": {
      "de": "gebissen",
      "lv": "Bidt"
    }
  },
  {
    "infinitiv": {
      "de": "bergen",
      "lv": "Skjule"
    },
    "praesens": {
      "de": "er birgt",
      "lv": "Han gemmer sig"
    },
    "imperfektIndikativ": {
      "de": "er barg",
      "lv": "Han gemte sig"
    },
    "imperfektKonjunktiv": {
      "de": "er bürge / er bärge",
      "lv": "Han ville gemme sig"
    },
    "partizipVergangenheit": {
      "de": "geborgen",
      "lv": "Bjærget"
    }
  },
  {
    "infinitiv": {
      "de": "bersten",
      "lv": "Briste"
    },
    "praesens": {
      "de": "er birst",
      "lv": "Brister han"
    },
    "imperfektIndikativ": {
      "de": "er barst / er borst",
      "lv": "Brød han ud"
    },
    "imperfektKonjunktiv": {
      "de": "er bärste / er börste",
      "lv": "Han ville briste"
    },
    "partizipVergangenheit": {
      "de": "geborsten (er ist)",
      "lv": "Brudt"
    }
  },
  {
    "infinitiv": {
      "de": "bewegen",
      "lv": "At bevæge"
    },
    "praesens": {
      "de": "er bewegt",
      "lv": "Han bevæger"
    },
    "imperfektIndikativ": {
      "de": "er bewog",
      "lv": "Han bevægede"
    },
    "imperfektKonjunktiv": {
      "de": "er bewöge",
      "lv": "Han ville bevæge"
    },
    "partizipVergangenheit": {
      "de": "bewogen",
      "lv": "Bevæget"
    }
  },
  {
    "infinitiv": {
      "de": "biegen",
      "lv": "Bøje"
    },
    "praesens": {
      "de": "er biegt",
      "lv": "Han bukker"
    },
    "imperfektIndikativ": {
      "de": "er bog",
      "lv": "Han bøjede sig"
    },
    "imperfektKonjunktiv": {
      "de": "er böge",
      "lv": "Han ville bøje sig"
    },
    "partizipVergangenheit": {
      "de": "gebogen",
      "lv": "Bøjet"
    }
  },
  {
    "infinitiv": {
      "de": "bieten",
      "lv": "At love"
    },
    "praesens": {
      "de": "er bietet",
      "lv": "Lover han"
    },
    "imperfektIndikativ": {
      "de": "er bot",
      "lv": "Lovede han"
    },
    "imperfektKonjunktiv": {
      "de": "er böte",
      "lv": "Ville han love"
    },
    "partizipVergangenheit": {
      "de": "geboten",
      "lv": "Tilbudt"
    }
  },
  {
    "infinitiv": {
      "de": "binden",
      "lv": "At binde"
    },
    "praesens": {
      "de": "er bindet",
      "lv": "Han binder"
    },
    "imperfektIndikativ": {
      "de": "er band",
      "lv": "Han bandt"
    },
    "imperfektKonjunktiv": {
      "de": "er bände",
      "lv": "Han ville binde"
    },
    "partizipVergangenheit": {
      "de": "gebunden",
      "lv": "Bundet"
    }
  },
  {
    "infinitiv": {
      "de": "bitten",
      "lv": "At spørge"
    },
    "praesens": {
      "de": "er bittet",
      "lv": "Han tigger"
    },
    "imperfektIndikativ": {
      "de": "er bat",
      "lv": "Han bad"
    },
    "imperfektKonjunktiv": {
      "de": "er bäte",
      "lv": "Han ville bede"
    },
    "partizipVergangenheit": {
      "de": "gebeten",
      "lv": "Bedt"
    }
  },
  {
    "infinitiv": {
      "de": "blasen",
      "lv": "At blæse"
    },
    "praesens": {
      "de": "er bläst",
      "lv": "Han blæser"
    },
    "imperfektIndikativ": {
      "de": "er blies",
      "lv": "Han blæste"
    },
    "imperfektKonjunktiv": {
      "de": "er bliese",
      "lv": "Han ville blæse"
    },
    "partizipVergangenheit": {
      "de": "geblasen",
      "lv": "Blæst"
    }
  },
  {
    "infinitiv": {
      "de": "gären",
      "lv": "At gære"
    },
    "praesens": {
      "de": "es gärt",
      "lv": "Det gærer"
    },
    "imperfektIndikativ": {
      "de": "es gor / es gärte",
      "lv": "Det gærede"
    },
    "imperfektKonjunktiv": {
      "de": "es göre / es gärte",
      "lv": "Det ville gære"
    },
    "partizipVergangenheit": {
      "de": "gegoren / gegärt",
      "lv": "Gæret"
    }
  },
  {
    "infinitiv": {
      "de": "gebären",
      "lv": "At føde"
    },
    "praesens": {
      "de": "sie gebiert",
      "lv": "Hun føder"
    },
    "imperfektIndikativ": {
      "de": "sie gebar",
      "lv": "Hun fødte"
    },
    "imperfektKonjunktiv": {
      "de": "sie gebäre",
      "lv": "Hun ville føde"
    },
    "partizipVergangenheit": {
      "de": "geboren",
      "lv": "Født"
    }
  },
  {
    "infinitiv": {
      "de": "gelingen",
      "lv": "At lykkes"
    },
    "praesens": {
      "de": "es gelingt",
      "lv": "Det lykkes"
    },
    "imperfektIndikativ": {
      "de": "es gelang",
      "lv": "Det lykkedes"
    },
    "imperfektKonjunktiv": {
      "de": "es gelänge",
      "lv": "Det ville lykkes"
    },
    "partizipVergangenheit": {
      "de": "gelungen (es ist)",
      "lv": "Lykkedes"
    }
  },
  {
    "infinitiv": {
      "de": "gelten",
      "lv": "Komme til nytte"
    },
    "praesens": {
      "de": "er gilt",
      "lv": "Det gælder"
    },
    "imperfektIndikativ": {
      "de": "er galt",
      "lv": "Det gjaldt"
    },
    "imperfektKonjunktiv": {
      "de": "er gölte / es gälte",
      "lv": "Det ville gælde"
    },
    "partizipVergangenheit": {
      "de": "gegolten",
      "lv": "Gældt"
    }
  },
  {
    "infinitiv": {
      "de": "genesen",
      "lv": "Bliver rask"
    },
    "praesens": {
      "de": "er genest",
      "lv": "Han er ved at blive rask"
    },
    "imperfektIndikativ": {
      "de": "er genas",
      "lv": "Han blev rask"
    },
    "imperfektKonjunktiv": {
      "de": "er genäse",
      "lv": "Han ville blive rask"
    },
    "partizipVergangenheit": {
      "de": "genesen (er ist)",
      "lv": "Blevet rask"
    }
  },
  {
    "infinitiv": {
      "de": "genießen",
      "lv": "At nyde"
    },
    "praesens": {
      "de": "er genießt",
      "lv": "Han nyder"
    },
    "imperfektIndikativ": {
      "de": "er genoss",
      "lv": "Han nød"
    },
    "imperfektKonjunktiv": {
      "de": "er genösse",
      "lv": "Han ville nyde"
    },
    "partizipVergangenheit": {
      "de": "genossen",
      "lv": "Nydt"
    }
  },
  {
    "infinitiv": {
      "de": "geschehen",
      "lv": "At ske"
    },
    "praesens": {
      "de": "es geschieht",
      "lv": "Det sker"
    },
    "imperfektIndikativ": {
      "de": "es geschah",
      "lv": "Det skete"
    },
    "imperfektKonjunktiv": {
      "de": "es geschähe",
      "lv": "Det ville ske"
    },
    "partizipVergangenheit": {
      "de": "geschehen (es ist)",
      "lv": "Sket"
    }
  },
  {
    "infinitiv": {
      "de": "gießen",
      "lv": "At hælde"
    },
    "praesens": {
      "de": "er gießt",
      "lv": "Han hælder"
    },
    "imperfektIndikativ": {
      "de": "er goss",
      "lv": "Han hældte"
    },
    "imperfektKonjunktiv": {
      "de": "er gösse",
      "lv": "Han ville hælde"
    },
    "partizipVergangenheit": {
      "de": "gegossen",
      "lv": "Hældt"
    }
  },
  {
    "infinitiv": {
      "de": "gleichen",
      "lv": "At ligne"
    },
    "praesens": {
      "de": "er gleicht",
      "lv": "Han ligner"
    },
    "imperfektIndikativ": {
      "de": "er glich",
      "lv": "Han lignede"
    },
    "imperfektKonjunktiv": {
      "de": "er gliche",
      "lv": "Han ville ligne"
    },
    "partizipVergangenheit": {
      "de": "geglichen",
      "lv": "Lignet"
    }
  },
  {
    "infinitiv": {
      "de": "gleiten",
      "lv": "At glide"
    },
    "praesens": {
      "de": "er gleitet",
      "lv": "Han glider"
    },
    "imperfektIndikativ": {
      "de": "er glitt",
      "lv": "Han gled"
    },
    "imperfektKonjunktiv": {
      "de": "er glitte",
      "lv": "Han ville glide"
    },
    "partizipVergangenheit": {
      "de": "geglitten (er ist)",
      "lv": "Glidet"
    }
  },
  {
    "infinitiv": {
      "de": "glimmen",
      "lv": "At gløde"
    },
    "praesens": {
      "de": "er glimmt",
      "lv": "Han gløder"
    },
    "imperfektIndikativ": {
      "de": "er glimmte / glomm",
      "lv": "Han glødede"
    },
    "imperfektKonjunktiv": {
      "de": "er glimmte",
      "lv": "Han ville gløde"
    },
    "partizipVergangenheit": {
      "de": "geglimmt / geglommen",
      "lv": "Glødet"
    }
  },
  {
    "infinitiv": {
      "de": "graben",
      "lv": "At grave"
    },
    "praesens": {
      "de": "er gräbt",
      "lv": "Han graver"
    },
    "imperfektIndikativ": {
      "de": "er grub",
      "lv": "Han gravede"
    },
    "imperfektKonjunktiv": {
      "de": "er grübe",
      "lv": "Han ville grave"
    },
    "partizipVergangenheit": {
      "de": "gegraben",
      "lv": "Gravet"
    }
  },
  {
    "infinitiv": {
      "de": "greifen",
      "lv": "At fange"
    },
    "praesens": {
      "de": "er greift",
      "lv": "Han fanger"
    },
    "imperfektIndikativ": {
      "de": "er griff",
      "lv": "Han fangede"
    },
    "imperfektKonjunktiv": {
      "de": "er griffe",
      "lv": "Han ville fange"
    },
    "partizipVergangenheit": {
      "de": "gegriffen",
      "lv": "Grebet"
    }
  },
  {
    "infinitiv": {
      "de": "hauen",
      "lv": "At slå"
    },
    "praesens": {
      "de": "er haut",
      "lv": "Han slår"
    },
    "imperfektIndikativ": {
      "de": "er hieb",
      "lv": "Han slog"
    },
    "imperfektKonjunktiv": {
      "de": "er hiebe",
      "lv": "Han ville slå"
    },
    "partizipVergangenheit": {
      "de": "gehauen",
      "lv": "Slået"
    }
  },
  {
    "infinitiv": {
      "de": "heben",
      "lv": "At løfte"
    },
    "praesens": {
      "de": "er hebt",
      "lv": "Han løfter"
    },
    "imperfektIndikativ": {
      "de": "er hob",
      "lv": "Han løftede"
    },
    "imperfektKonjunktiv": {
      "de": "er höbe",
      "lv": "Han ville løfte"
    },
    "partizipVergangenheit": {
      "de": "gehoben",
      "lv": "Løftet"
    }
  },
  {
    "infinitiv": {
      "de": "kennen",
      "lv": "At kende"
    },
    "praesens": {
      "de": "er kennt",
      "lv": "Han kender"
    },
    "imperfektIndikativ": {
      "de": "kannte",
      "lv": "Han kendte"
    },
    "imperfektKonjunktiv": {
      "de": "kannte",
      "lv": "Han ville kende"
    },
    "partizipVergangenheit": {
      "de": "gekannt",
      "lv": "Kendt"
    }
  },
  {
    "infinitiv": {
      "de": "klingen",
      "lv": "At lyde"
    },
    "praesens": {
      "de": "er klingt",
      "lv": "Lyder han"
    },
    "imperfektIndikativ": {
      "de": "er klang",
      "lv": "Lød han"
    },
    "imperfektKonjunktiv": {
      "de": "er klänge",
      "lv": "Ville han lyde"
    },
    "partizipVergangenheit": {
      "de": "geklungen",
      "lv": "Lydt"
    }
  },
  {
    "infinitiv": {
      "de": "kneifen",
      "lv": "At knibe"
    },
    "praesens": {
      "de": "er kneift",
      "lv": "Han kniber"
    },
    "imperfektIndikativ": {
      "de": "er kniff",
      "lv": "Han knibede"
    },
    "imperfektKonjunktiv": {
      "de": "er kniffe",
      "lv": "Han ville knibe"
    },
    "partizipVergangenheit": {
      "de": "gekniffen",
      "lv": "Knibet"
    }
  },
  {
    "infinitiv": {
      "de": "bleiben",
      "lv": "At blive"
    },
    "praesens": {
      "de": "er bleibt",
      "lv": "Han bliver"
    },
    "imperfektIndikativ": {
      "de": "er blieb",
      "lv": "Han blev"
    },
    "imperfektKonjunktiv": {
      "de": "er bliebe",
      "lv": "Han ville blive"
    },
    "partizipVergangenheit": {
      "de": "geblieben (er ist)",
      "lv": "Blevet"
    }
  },
  {
    "infinitiv": {
      "de": "bleichen",
      "lv": "Blege"
    },
    "praesens": {
      "de": "er bleicht",
      "lv": "Han bleger"
    },
    "imperfektIndikativ": {
      "de": "blich",
      "lv": "Han blegnede"
    },
    "imperfektKonjunktiv": {
      "de": "blich",
      "lv": "Han ville blegne"
    },
    "partizipVergangenheit": {
      "de": "geblichen",
      "lv": "Bleget"
    }
  },
  {
    "infinitiv": {
      "de": "braten",
      "lv": "At stege"
    },
    "praesens": {
      "de": "er brät",
      "lv": "Han bager"
    },
    "imperfektIndikativ": {
      "de": "er briet",
      "lv": "Han bagte"
    },
    "imperfektKonjunktiv": {
      "de": "er briete",
      "lv": "Han ville bage"
    },
    "partizipVergangenheit": {
      "de": "gebraten",
      "lv": "Stegt"
    }
  },
  {
    "infinitiv": {
      "de": "brechen",
      "lv": "At bryde"
    },
    "praesens": {
      "de": "er bricht",
      "lv": "Han knækker"
    },
    "imperfektIndikativ": {
      "de": "er brach",
      "lv": "Han brød"
    },
    "imperfektKonjunktiv": {
      "de": "er bräche",
      "lv": "Han ville bryde"
    },
    "partizipVergangenheit": {
      "de": "gebrochen",
      "lv": "Brudt"
    }
  },
  {
    "infinitiv": {
      "de": "brennen",
      "lv": "At brænde"
    },
    "praesens": {
      "de": "er brennt",
      "lv": "Han brænder"
    },
    "imperfektIndikativ": {
      "de": "brannte",
      "lv": "Han brændte"
    },
    "imperfektKonjunktiv": {
      "de": "brannte",
      "lv": "Han ville brænde"
    },
    "partizipVergangenheit": {
      "de": "gebrannt",
      "lv": "Brændt"
    }
  },
  {
    "infinitiv": {
      "de": "bringen",
      "lv": "At bringe"
    },
    "praesens": {
      "de": "er bringt",
      "lv": "Han bringer"
    },
    "imperfektIndikativ": {
      "de": "er brachte",
      "lv": "Han bragte"
    },
    "imperfektKonjunktiv": {
      "de": "er brächte",
      "lv": "Han ville bære"
    },
    "partizipVergangenheit": {
      "de": "gebracht",
      "lv": "Bragt"
    }
  },
  {
    "infinitiv": {
      "de": "denken",
      "lv": "At tænke"
    },
    "praesens": {
      "de": "er denkt",
      "lv": "Tænker han"
    },
    "imperfektIndikativ": {
      "de": "er dachte",
      "lv": "Tænkte han"
    },
    "imperfektKonjunktiv": {
      "de": "er dächte",
      "lv": "Han ville tænke"
    },
    "partizipVergangenheit": {
      "de": "gedacht",
      "lv": "Tænkt"
    }
  },
  {
    "infinitiv": {
      "de": "dingen",
      "lv": "At ansætte"
    },
    "praesens": {
      "de": "er dingt",
      "lv": "Han ansætter"
    },
    "imperfektIndikativ": {
      "de": "dingte",
      "lv": "Han ansatte"
    },
    "imperfektKonjunktiv": {
      "de": "dingte",
      "lv": "Han ville ansætte"
    },
    "partizipVergangenheit": {
      "de": "gedungen",
      "lv": "Ansat"
    }
  },
  {
    "infinitiv": {
      "de": "dreschen",
      "lv": "At tærske"
    },
    "praesens": {
      "de": "er drischt",
      "lv": "Han tærsker"
    },
    "imperfektIndikativ": {
      "de": "er drasch / er drosch",
      "lv": "Han tærskede"
    },
    "imperfektKonjunktiv": {
      "de": "er dräsche / er drösche",
      "lv": "Han ville tærske"
    },
    "partizipVergangenheit": {
      "de": "gedroschen",
      "lv": "Tærsket"
    }
  },
  {
    "infinitiv": {
      "de": "dringen",
      "lv": "At trænge ind"
    },
    "praesens": {
      "de": "er dringt",
      "lv": "Han bryder ind"
    },
    "imperfektIndikativ": {
      "de": "er drang",
      "lv": "Han brød ind"
    },
    "imperfektKonjunktiv": {
      "de": "er dränge",
      "lv": "Han ville bryde ind"
    },
    "partizipVergangenheit": {
      "de": "gedrungen (er ist)",
      "lv": "Trængt ind"
    }
  },
  {
    "infinitiv": {
      "de": "dünken",
      "lv": "Det ser ud til"
    },
    "praesens": {
      "de": "es dünkt",
      "lv": "Det ser ud til"
    },
    "imperfektIndikativ": {
      "de": "deuchte",
      "lv": "Det lod til"
    },
    "imperfektKonjunktiv": {
      "de": "deuchte",
      "lv": "Det ville synes"
    },
    "partizipVergangenheit": {
      "de": "gedünkt",
      "lv": "Syntes"
    }
  },
  {
    "infinitiv": {
      "de": "dürfen",
      "lv": "At få lov"
    },
    "praesens": {
      "de": "er darf",
      "lv": "Han må"
    },
    "imperfektIndikativ": {
      "de": "durfte",
      "lv": "Var tilladt"
    },
    "imperfektKonjunktiv": {
      "de": "durfte",
      "lv": "Var tilladt"
    },
    "partizipVergangenheit": {
      "de": "gedurft",
      "lv": "Tilladt"
    }
  },
  {
    "infinitiv": {
      "de": "empfehlen",
      "lv": "At anbefale"
    },
    "praesens": {
      "de": "er empfiehlt",
      "lv": "Foreslår han"
    },
    "imperfektIndikativ": {
      "de": "er empfahl",
      "lv": "Foreslog han"
    },
    "imperfektKonjunktiv": {
      "de": "er empfähle / er empföhle",
      "lv": "Han vil anbefale"
    },
    "partizipVergangenheit": {
      "de": "empfohlen",
      "lv": "Anbefalet"
    }
  },
  {
    "infinitiv": {
      "de": "empfinden",
      "lv": "At føle"
    },
    "praesens": {
      "de": "er empfindet",
      "lv": "Han føler"
    },
    "imperfektIndikativ": {
      "de": "er empfand",
      "lv": "Han følte"
    },
    "imperfektKonjunktiv": {
      "de": "er empfände",
      "lv": "Han ville føle"
    },
    "partizipVergangenheit": {
      "de": "empfunden",
      "lv": "Følt"
    }
  },
  {
    "infinitiv": {
      "de": "erlöschen",
      "lv": "At gå ud"
    },
    "praesens": {
      "de": "er erlischt",
      "lv": "Han går ud"
    },
    "imperfektIndikativ": {
      "de": "er erlosch",
      "lv": "Han gik ud"
    },
    "imperfektKonjunktiv": {
      "de": "er erlösche",
      "lv": "Det ville gå ud"
    },
    "partizipVergangenheit": {
      "de": "erloschen (er ist)",
      "lv": "Gået ud"
    }
  },
  {
    "infinitiv": {
      "de": "erschrecken",
      "lv": "At blive forskrækket"
    },
    "praesens": {
      "de": "er erschrickt",
      "lv": "Han bliver bange"
    },
    "imperfektIndikativ": {
      "de": "er erschrak",
      "lv": "Han blev bange"
    },
    "imperfektKonjunktiv": {
      "de": "er erschräke",
      "lv": "Han ville flippe ud"
    },
    "partizipVergangenheit": {
      "de": "erschrocken (er ist)",
      "lv": "Forskrækket"
    }
  },
  {
    "infinitiv": {
      "de": "essen",
      "lv": "At spise"
    },
    "praesens": {
      "de": "er isst",
      "lv": "Han spiser"
    },
    "imperfektIndikativ": {
      "de": "er ass",
      "lv": "Han spiste"
    },
    "imperfektKonjunktiv": {
      "de": "er äße",
      "lv": "Han ville spise"
    },
    "partizipVergangenheit": {
      "de": "gegessen",
      "lv": "Spist"
    }
  },
  {
    "infinitiv": {
      "de": "fahren",
      "lv": "At køre"
    },
    "praesens": {
      "de": "er fährt",
      "lv": "Han kører"
    },
    "imperfektIndikativ": {
      "de": "er fuhr",
      "lv": "Han kørte"
    },
    "imperfektKonjunktiv": {
      "de": "er führe",
      "lv": "Han ville køre"
    },
    "partizipVergangenheit": {
      "de": "gefahren (er ist)",
      "lv": "Kørt"
    }
  },
  {
    "infinitiv": {
      "de": "fallen",
      "lv": "At falde"
    },
    "praesens": {
      "de": "er fällt",
      "lv": "Han falder"
    },
    "imperfektIndikativ": {
      "de": "er fiel",
      "lv": "Han faldt"
    },
    "imperfektKonjunktiv": {
      "de": "er fiele",
      "lv": "Han ville falde"
    },
    "partizipVergangenheit": {
      "de": "gefallen (er ist)",
      "lv": "Faldet"
    }
  },
  {
    "infinitiv": {
      "de": "fangen",
      "lv": "At fange"
    },
    "praesens": {
      "de": "er fängt",
      "lv": "Han fanger"
    },
    "imperfektIndikativ": {
      "de": "er fing",
      "lv": "Han fangede"
    },
    "imperfektKonjunktiv": {
      "de": "er finge",
      "lv": "Han ville fange"
    },
    "partizipVergangenheit": {
      "de": "gefangen",
      "lv": "Fanget"
    }
  },
  {
    "infinitiv": {
      "de": "finden",
      "lv": "At finde"
    },
    "praesens": {
      "de": "er findet",
      "lv": "Han finder"
    },
    "imperfektIndikativ": {
      "de": "er fand",
      "lv": "Han fandt"
    },
    "imperfektKonjunktiv": {
      "de": "er fände",
      "lv": "Han ville finde"
    },
    "partizipVergangenheit": {
      "de": "gefunden",
      "lv": "Fundet"
    }
  },
  {
    "infinitiv": {
      "de": "fliegen",
      "lv": "At flyve"
    },
    "praesens": {
      "de": "er fliegt",
      "lv": "Han flyver"
    },
    "imperfektIndikativ": {
      "de": "er flog",
      "lv": "Han fløj"
    },
    "imperfektKonjunktiv": {
      "de": "er flöge",
      "lv": "Han ville flyve"
    },
    "partizipVergangenheit": {
      "de": "geflogen (er ist)",
      "lv": "Fløjet"
    }
  },
  {
    "infinitiv": {
      "de": "fliehen",
      "lv": "Løbe væk"
    },
    "praesens": {
      "de": "er flieht",
      "lv": "Han løber væk"
    },
    "imperfektIndikativ": {
      "de": "er floh",
      "lv": "Han løb væk"
    },
    "imperfektKonjunktiv": {
      "de": "er flöhe",
      "lv": "Han ville løbe væk"
    },
    "partizipVergangenheit": {
      "de": "geflohen (er ist)",
      "lv": "Flygtet"
    }
  },
  {
    "infinitiv": {
      "de": "fließen",
      "lv": "At flyde"
    },
    "praesens": {
      "de": "er fließt",
      "lv": "Han flyder"
    },
    "imperfektIndikativ": {
      "de": "er floss",
      "lv": "Han flød"
    },
    "imperfektKonjunktiv": {
      "de": "er flösse",
      "lv": "Han ville flyde"
    },
    "partizipVergangenheit": {
      "de": "geflossen (er ist)",
      "lv": "Flydt"
    }
  },
  {
    "infinitiv": {
      "de": "fressen",
      "lv": "At æde"
    },
    "praesens": {
      "de": "er frisst",
      "lv": "Han æder"
    },
    "imperfektIndikativ": {
      "de": "er frass",
      "lv": "Han åd"
    },
    "imperfektKonjunktiv": {
      "de": "er fräße",
      "lv": "Han ville æde"
    },
    "partizipVergangenheit": {
      "de": "gefressen",
      "lv": "Ædt"
    }
  },
  {
    "infinitiv": {
      "de": "frieren",
      "lv": "At fryse"
    },
    "praesens": {
      "de": "er friert",
      "lv": "Han fryser"
    },
    "imperfektIndikativ": {
      "de": "er fror",
      "lv": "Han frøs"
    },
    "imperfektKonjunktiv": {
      "de": "er fröre",
      "lv": "Han ville fryse"
    },
    "partizipVergangenheit": {
      "de": "gefroren",
      "lv": "Frosset"
    }
  },
  {
    "infinitiv": {
      "de": "geben",
      "lv": "At give"
    },
    "praesens": {
      "de": "er gibt",
      "lv": "Han giver"
    },
    "imperfektIndikativ": {
      "de": "er gab",
      "lv": "Han gav"
    },
    "imperfektKonjunktiv": {
      "de": "er gäbe",
      "lv": "Han ville give"
    },
    "partizipVergangenheit": {
      "de": "gegeben",
      "lv": "Givet"
    }
  },
  {
    "infinitiv": {
      "de": "gedeihen",
      "lv": "At trives"
    },
    "praesens": {
      "de": "er gedeiht",
      "lv": "Han lykkes"
    },
    "imperfektIndikativ": {
      "de": "er gedieh",
      "lv": "Det lykkedes ham"
    },
    "imperfektKonjunktiv": {
      "de": "er gediehe",
      "lv": "Han ville lykkes"
    },
    "partizipVergangenheit": {
      "de": "gediehen (er ist)",
      "lv": "Trivedes"
    }
  },
  {
    "infinitiv": {
      "de": "gehen",
      "lv": "At gå"
    },
    "praesens": {
      "de": "er geht",
      "lv": "Han går"
    },
    "imperfektIndikativ": {
      "de": "er ging",
      "lv": "Han gik"
    },
    "imperfektKonjunktiv": {
      "de": "er ginge",
      "lv": "Han ville gå"
    },
    "partizipVergangenheit": {
      "de": "gegangen (er ist)",
      "lv": "Gået"
    }
  },
  {
    "infinitiv": {
      "de": "gewinnen",
      "lv": "At vinde"
    },
    "praesens": {
      "de": "er gewinnt",
      "lv": "Han vinder"
    },
    "imperfektIndikativ": {
      "de": "er gewann",
      "lv": "Han vandt"
    },
    "imperfektKonjunktiv": {
      "de": "er gewönne / er gewänne",
      "lv": "Han ville vinde"
    },
    "partizipVergangenheit": {
      "de": "gewonnen",
      "lv": "Vundet"
    }
  },
  {
    "infinitiv": {
      "de": "haben",
      "lv": "At have"
    },
    "praesens": {
      "de": "er hat",
      "lv": "Han har"
    },
    "imperfektIndikativ": {
      "de": "hatte",
      "lv": "Han havde"
    },
    "imperfektKonjunktiv": {
      "de": "hatte",
      "lv": "Han havde"
    },
    "partizipVergangenheit": {
      "de": "gehabt",
      "lv": "Haft"
    }
  },
  {
    "infinitiv": {
      "de": "halten",
      "lv": "Holde"
    },
    "praesens": {
      "de": "er hält",
      "lv": "Han holder"
    },
    "imperfektIndikativ": {
      "de": "er hielt",
      "lv": "Han holdt"
    },
    "imperfektKonjunktiv": {
      "de": "er hielte",
      "lv": "Han ville holde"
    },
    "partizipVergangenheit": {
      "de": "gehalten",
      "lv": "Holdt"
    }
  },
  {
    "infinitiv": {
      "de": "heißen",
      "lv": "At hedde"
    },
    "praesens": {
      "de": "er heißt",
      "lv": "Han hedder"
    },
    "imperfektIndikativ": {
      "de": "er hieß",
      "lv": "Han hed"
    },
    "imperfektKonjunktiv": {
      "de": "er hieße",
      "lv": "Han ville hedde"
    },
    "partizipVergangenheit": {
      "de": "geheißen",
      "lv": "Heddet"
    }
  },
  {
    "infinitiv": {
      "de": "helfen",
      "lv": "At hjælpe"
    },
    "praesens": {
      "de": "er hilft",
      "lv": "Han hjælper"
    },
    "imperfektIndikativ": {
      "de": "er half",
      "lv": "Han hjalp"
    },
    "imperfektKonjunktiv": {
      "de": "er hülfe / er hälfe",
      "lv": "Han ville hjælpe"
    },
    "partizipVergangenheit": {
      "de": "geholfen",
      "lv": "Hjulpet"
    }
  },
  {
    "infinitiv": {
      "de": "kommen",
      "lv": "At komme"
    },
    "praesens": {
      "de": "er kommt",
      "lv": "Han kommer"
    },
    "imperfektIndikativ": {
      "de": "er kam",
      "lv": "Han kom"
    },
    "imperfektKonjunktiv": {
      "de": "er käme",
      "lv": "Han ville komme"
    },
    "partizipVergangenheit": {
      "de": "gekommen (er ist)",
      "lv": "Er kommet"
    }
  },
  {
    "infinitiv": {
      "de": "können",
      "lv": "Kunne"
    },
    "praesens": {
      "de": "er kann",
      "lv": "Han kan"
    },
    "imperfektIndikativ": {
      "de": "konnte",
      "lv": "Han kunne"
    },
    "imperfektKonjunktiv": {
      "de": "konnte",
      "lv": "Han kunne"
    },
    "partizipVergangenheit": {
      "de": "gekonnt",
      "lv": "Kunnet"
    }
  },
  {
    "infinitiv": {
      "de": "kriechen",
      "lv": "At krybe"
    },
    "praesens": {
      "de": "er kriecht",
      "lv": "Han kryber"
    },
    "imperfektIndikativ": {
      "de": "er kroch",
      "lv": "Han krøb"
    },
    "imperfektKonjunktiv": {
      "de": "er kröche",
      "lv": "Han ville krybe"
    },
    "partizipVergangenheit": {
      "de": "gekrochen (er ist)",
      "lv": "Krøbet"
    }
  },
  {
    "infinitiv": {
      "de": "laden",
      "lv": "At læsse"
    },
    "praesens": {
      "de": "er lädt",
      "lv": "Han læsser"
    },
    "imperfektIndikativ": {
      "de": "er lud",
      "lv": "Han læssede"
    },
    "imperfektKonjunktiv": {
      "de": "er lüde",
      "lv": "Han ville læsse"
    },
    "partizipVergangenheit": {
      "de": "geladen",
      "lv": "Læsset"
    }
  },
  {
    "infinitiv": {
      "de": "lassen",
      "lv": "At lade"
    },
    "praesens": {
      "de": "er lässt",
      "lv": "Han lader"
    },
    "imperfektIndikativ": {
      "de": "er ließ",
      "lv": "Han lod"
    },
    "imperfektKonjunktiv": {
      "de": "er ließe",
      "lv": "Han ville lade"
    },
    "partizipVergangenheit": {
      "de": "gelassen",
      "lv": "Ladet"
    }
  },
  {
    "infinitiv": {
      "de": "laufen",
      "lv": "At løbe"
    },
    "praesens": {
      "de": "er läuft",
      "lv": "Han løber"
    },
    "imperfektIndikativ": {
      "de": "er lief",
      "lv": "Han løb"
    },
    "imperfektKonjunktiv": {
      "de": "er liefe",
      "lv": "Han ville løbe"
    },
    "partizipVergangenheit": {
      "de": "gelaufen (er ist)",
      "lv": "Løbet"
    }
  },
  {
    "infinitiv": {
      "de": "leiden",
      "lv": "At lide"
    },
    "praesens": {
      "de": "er leidet",
      "lv": "Han lider"
    },
    "imperfektIndikativ": {
      "de": "er litt",
      "lv": "Han led"
    },
    "imperfektKonjunktiv": {
      "de": "er litte",
      "lv": "Han ville lide"
    },
    "partizipVergangenheit": {
      "de": "gelitten",
      "lv": "Lidt"
    }
  },
  {
    "infinitiv": {
      "de": "leihen",
      "lv": "At låne"
    },
    "praesens": {
      "de": "er leiht",
      "lv": "Han låner/låner"
    },
    "imperfektIndikativ": {
      "de": "er lieh",
      "lv": "Han lånte/lånte"
    },
    "imperfektKonjunktiv": {
      "de": "er liehe",
      "lv": "Han ville låne/låne"
    },
    "partizipVergangenheit": {
      "de": "geliehen",
      "lv": "Lånt"
    }
  },
  {
    "infinitiv": {
      "de": "lesen",
      "lv": "At læse"
    },
    "praesens": {
      "de": "er liest",
      "lv": "Han læser"
    },
    "imperfektIndikativ": {
      "de": "er las",
      "lv": "Han læste"
    },
    "imperfektKonjunktiv": {
      "de": "er läse",
      "lv": "Han ville læse"
    },
    "partizipVergangenheit": {
      "de": "gelesen",
      "lv": "Læst"
    }
  },
  {
    "infinitiv": {
      "de": "liegen",
      "lv": "At ligge"
    },
    "praesens": {
      "de": "er liegt",
      "lv": "Han ligger"
    },
    "imperfektIndikativ": {
      "de": "er lag",
      "lv": "Han lå"
    },
    "imperfektKonjunktiv": {
      "de": "er läge",
      "lv": "Han ville ligge"
    },
    "partizipVergangenheit": {
      "de": "gelegen",
      "lv": "Ligget"
    }
  },
  {
    "infinitiv": {
      "de": "lügen",
      "lv": "At lyve"
    },
    "praesens": {
      "de": "er lügt",
      "lv": "Han lyver"
    },
    "imperfektIndikativ": {
      "de": "er log",
      "lv": "Han løj"
    },
    "imperfektKonjunktiv": {
      "de": "er löge",
      "lv": "Han ville lyve"
    },
    "partizipVergangenheit": {
      "de": "gelogen",
      "lv": "Løjet"
    }
  },
  {
    "infinitiv": {
      "de": "mahlen",
      "lv": "Malt"
    },
    "praesens": {
      "de": "er mahlt",
      "lv": "Han maler"
    },
    "imperfektIndikativ": {
      "de": "er mahlte",
      "lv": "Han malede"
    },
    "imperfektKonjunktiv": {
      "de": "er malte",
      "lv": "Han ville male"
    },
    "partizipVergangenheit": {
      "de": "gemahlen",
      "lv": "Malt"
    }
  },
  {
    "infinitiv": {
      "de": "meiden",
      "lv": "Undgå"
    },
    "praesens": {
      "de": "er meidet",
      "lv": "Han undgår"
    },
    "imperfektIndikativ": {
      "de": "er mied",
      "lv": "Han undgik"
    },
    "imperfektKonjunktiv": {
      "de": "er miede",
      "lv": "Han ville undgå"
    },
    "partizipVergangenheit": {
      "de": "gemieden",
      "lv": "Undgået"
    }
  },
  {
    "infinitiv": {
      "de": "melken",
      "lv": "At malke"
    },
    "praesens": {
      "de": "er milkt / er melkt",
      "lv": "Han malker"
    },
    "imperfektIndikativ": {
      "de": "er molk / er melkte",
      "lv": "Han malkede"
    },
    "imperfektKonjunktiv": {
      "de": "er mölke / er melkte",
      "lv": "Han ville malke"
    },
    "partizipVergangenheit": {
      "de": "gemolken / gemelkt",
      "lv": "Malket"
    }
  },
  {
    "infinitiv": {
      "de": "messen",
      "lv": "At måle"
    },
    "praesens": {
      "de": "er misst",
      "lv": "Han måler"
    },
    "imperfektIndikativ": {
      "de": "er mass",
      "lv": "Han målte"
    },
    "imperfektKonjunktiv": {
      "de": "er mäße",
      "lv": "Han ville måle"
    },
    "partizipVergangenheit": {
      "de": "gemessen",
      "lv": "Målt"
    }
  },
  {
    "infinitiv": {
      "de": "misslingen",
      "lv": "At mislykkes"
    },
    "praesens": {
      "de": "es misslingt",
      "lv": "Det mislykkes"
    },
    "imperfektIndikativ": {
      "de": "misslang",
      "lv": "Mislykkedes"
    },
    "imperfektKonjunktiv": {
      "de": "misslang",
      "lv": "Mislykkedes"
    },
    "partizipVergangenheit": {
      "de": "misslungen",
      "lv": "Mislykket"
    }
  },
  {
    "infinitiv": {
      "de": "mögen",
      "lv": "At kunne lide"
    },
    "praesens": {
      "de": "er mag",
      "lv": "Han kan lide"
    },
    "imperfektIndikativ": {
      "de": "mochte",
      "lv": "Han kunne lide"
    },
    "imperfektKonjunktiv": {
      "de": "mochte",
      "lv": "Han kunne lide"
    },
    "partizipVergangenheit": {
      "de": "gemocht",
      "lv": "Kunnet lide"
    }
  },
  {
    "infinitiv": {
      "de": "müssen",
      "lv": "At skulle"
    },
    "praesens": {
      "de": "er muss",
      "lv": "Han har brug for"
    },
    "imperfektIndikativ": {
      "de": "musste",
      "lv": "Han måtte"
    },
    "imperfektKonjunktiv": {
      "de": "musste",
      "lv": "Han måtte"
    },
    "partizipVergangenheit": {
      "de": "gemusst",
      "lv": "Måttet"
    }
  },
  {
    "infinitiv": {
      "de": "nehmen",
      "lv": "At tage"
    },
    "praesens": {
      "de": "er nimmt",
      "lv": "Han tager"
    },
    "imperfektIndikativ": {
      "de": "er nahm",
      "lv": "Han tog"
    },
    "imperfektKonjunktiv": {
      "de": "er nähme",
      "lv": "Han ville tage"
    },
    "partizipVergangenheit": {
      "de": "genommen",
      "lv": "Taget"
    }
  },
  {
    "infinitiv": {
      "de": "nennen",
      "lv": "At navngive"
    },
    "praesens": {
      "de": "er nennt",
      "lv": "Han navngiver"
    },
    "imperfektIndikativ": {
      "de": "er nannte",
      "lv": "Han navngav"
    },
    "imperfektKonjunktiv": {
      "de": "er nennte",
      "lv": "Han ville navngive"
    },
    "partizipVergangenheit": {
      "de": "genannt",
      "lv": "Navngivet"
    }
  },
  {
    "infinitiv": {
      "de": "pfeifen",
      "lv": "At fløjte"
    },
    "praesens": {
      "de": "er pfeift",
      "lv": "Han fløjter"
    },
    "imperfektIndikativ": {
      "de": "er pfiff",
      "lv": "Han fløjtede"
    },
    "imperfektKonjunktiv": {
      "de": "er pfiffe",
      "lv": "Han ville fløjte"
    },
    "partizipVergangenheit": {
      "de": "gepfiffen",
      "lv": "Fløjtet"
    }
  },
  {
    "infinitiv": {
      "de": "pflegen",
      "lv": "At pleje"
    },
    "praesens": {
      "de": "er pflegt",
      "lv": "Han plejer"
    },
    "imperfektIndikativ": {
      "de": "pflegte vai pflog",
      "lv": "Han plejede"
    },
    "imperfektKonjunktiv": {
      "de": "pflegte vai pflog",
      "lv": "Han ville pleje"
    },
    "partizipVergangenheit": {
      "de": "gepflegt vai gepflogen",
      "lv": "Plejet"
    }
  },
  {
    "infinitiv": {
      "de": "preisen",
      "lv": "Ros"
    },
    "praesens": {
      "de": "er preist",
      "lv": "Han roser"
    },
    "imperfektIndikativ": {
      "de": "er pries",
      "lv": "Han roste"
    },
    "imperfektKonjunktiv": {
      "de": "er priese",
      "lv": "Han ville rose"
    },
    "partizipVergangenheit": {
      "de": "gepriesen",
      "lv": "Roset"
    }
  },
  {
    "infinitiv": {
      "de": "quellen",
      "lv": "At svulme op"
    },
    "praesens": {
      "de": "er quillt",
      "lv": "Det svulmer op"
    },
    "imperfektIndikativ": {
      "de": "er quoll",
      "lv": "Det svulmede op"
    },
    "imperfektKonjunktiv": {
      "de": "er quölle",
      "lv": "Det ville svulme op"
    },
    "partizipVergangenheit": {
      "de": "gequollen (er ist)",
      "lv": "Svulmet op"
    }
  },
  {
    "infinitiv": {
      "de": "raten",
      "lv": "At råde"
    },
    "praesens": {
      "de": "er rät",
      "lv": "Han råder"
    },
    "imperfektIndikativ": {
      "de": "er riet",
      "lv": "Han rådede"
    },
    "imperfektKonjunktiv": {
      "de": "er riete",
      "lv": "Han ville råde"
    },
    "partizipVergangenheit": {
      "de": "geraten",
      "lv": "Foreslået/nævnt"
    }
  },
  {
    "infinitiv": {
      "de": "reiben",
      "lv": "At gnide"
    },
    "praesens": {
      "de": "er reibt",
      "lv": "Han gnider"
    },
    "imperfektIndikativ": {
      "de": "er rieb",
      "lv": "Han gned"
    },
    "imperfektKonjunktiv": {
      "de": "er riebe",
      "lv": "Han ville gnide"
    },
    "partizipVergangenheit": {
      "de": "gerieben",
      "lv": "Gnedet"
    }
  },
  {
    "infinitiv": {
      "de": "reißen",
      "lv": "At rive"
    },
    "praesens": {
      "de": "er reißt",
      "lv": "Han river"
    },
    "imperfektIndikativ": {
      "de": "er riss",
      "lv": "Han rev"
    },
    "imperfektKonjunktiv": {
      "de": "er risse",
      "lv": "Han ville rive"
    },
    "partizipVergangenheit": {
      "de": "gerissen",
      "lv": "Revet"
    }
  },
  {
    "infinitiv": {
      "de": "reiten",
      "lv": "At ride"
    },
    "praesens": {
      "de": "er reitet",
      "lv": "Han rider"
    },
    "imperfektIndikativ": {
      "de": "er ritt",
      "lv": "Han red"
    },
    "imperfektKonjunktiv": {
      "de": "er ritte",
      "lv": "Han ville ride"
    },
    "partizipVergangenheit": {
      "de": "geritten (er ist)",
      "lv": "Redet"
    }
  },
  {
    "infinitiv": {
      "de": "rennen",
      "lv": "At løbe stærkt"
    },
    "praesens": {
      "de": "er rennt",
      "lv": "Han løber"
    },
    "imperfektIndikativ": {
      "de": "er rannte",
      "lv": "Han løb"
    },
    "imperfektKonjunktiv": {
      "de": "er rennte",
      "lv": "Han ville løbe"
    },
    "partizipVergangenheit": {
      "de": "gerannt",
      "lv": "Løbet stærkt"
    }
  },
  {
    "infinitiv": {
      "de": "riechen",
      "lv": "At lugte"
    },
    "praesens": {
      "de": "er riecht",
      "lv": "Han lugter"
    },
    "imperfektIndikativ": {
      "de": "er roch",
      "lv": "Han lugtede"
    },
    "imperfektKonjunktiv": {
      "de": "er röche",
      "lv": "Han ville lugte"
    },
    "partizipVergangenheit": {
      "de": "gerochen",
      "lv": "Lugtet"
    }
  },
  {
    "infinitiv": {
      "de": "ringen",
      "lv": "At kæmpe"
    },
    "praesens": {
      "de": "er ringt",
      "lv": "Han kæmper"
    },
    "imperfektIndikativ": {
      "de": "er rang",
      "lv": "Han brød sammen"
    },
    "imperfektKonjunktiv": {
      "de": "er ränge",
      "lv": "Han ville bryde"
    },
    "partizipVergangenheit": {
      "de": "gerungen",
      "lv": "Kæmpet"
    }
  },
  {
    "infinitiv": {
      "de": "rinnen",
      "lv": "At sive"
    },
    "praesens": {
      "de": "er rinnt",
      "lv": "Det siver"
    },
    "imperfektIndikativ": {
      "de": "er rann",
      "lv": "Det flød"
    },
    "imperfektKonjunktiv": {
      "de": "er ränne / er rönne",
      "lv": "Det ville flyde"
    },
    "partizipVergangenheit": {
      "de": "geronnen (er ist)",
      "lv": "Størknet"
    }
  },
  {
    "infinitiv": {
      "de": "rufen",
      "lv": "At råbe"
    },
    "praesens": {
      "de": "er ruft",
      "lv": "Han råber"
    },
    "imperfektIndikativ": {
      "de": "er rief",
      "lv": "Han råbte"
    },
    "imperfektKonjunktiv": {
      "de": "er riefe",
      "lv": "Han ville råbe"
    },
    "partizipVergangenheit": {
      "de": "gerufen",
      "lv": "Råbt"
    }
  },
  {
    "infinitiv": {
      "de": "salzen",
      "lv": "Til salt"
    },
    "praesens": {
      "de": "er salzt",
      "lv": "Han salter"
    },
    "imperfektIndikativ": {
      "de": "er salzte",
      "lv": "Han saltede"
    },
    "imperfektKonjunktiv": {
      "de": "er salzte",
      "lv": "Han ville salte"
    },
    "partizipVergangenheit": {
      "de": "gesalzen",
      "lv": "Saltet"
    }
  },
  {
    "infinitiv": {
      "de": "saufen",
      "lv": "At drikke"
    },
    "praesens": {
      "de": "er säuft",
      "lv": "Han drikker/drikker"
    },
    "imperfektIndikativ": {
      "de": "er soff",
      "lv": "Han drak"
    },
    "imperfektKonjunktiv": {
      "de": "er söffe",
      "lv": "Han ville drikke"
    },
    "partizipVergangenheit": {
      "de": "gesoffen",
      "lv": "Drukket"
    }
  },
  {
    "infinitiv": {
      "de": "saugen",
      "lv": "Suge"
    },
    "praesens": {
      "de": "er saugt",
      "lv": "Han sutter"
    },
    "imperfektIndikativ": {
      "de": "er sog",
      "lv": "Han suttede"
    },
    "imperfektKonjunktiv": {
      "de": "er söge",
      "lv": "Han ville sutte"
    },
    "partizipVergangenheit": {
      "de": "gesogen",
      "lv": "Suget"
    }
  },
  {
    "infinitiv": {
      "de": "schaffen",
      "lv": "At skabe"
    },
    "praesens": {
      "de": "er schafft",
      "lv": "Han skaber"
    },
    "imperfektIndikativ": {
      "de": "er schuf",
      "lv": "Han skabte"
    },
    "imperfektKonjunktiv": {
      "de": "er schüfe",
      "lv": "Han ville skabe"
    },
    "partizipVergangenheit": {
      "de": "geschaffen",
      "lv": "Skabt"
    }
  },
  {
    "infinitiv": {
      "de": "schallen",
      "lv": "At gjalde"
    },
    "praesens": {
      "de": "es schallt",
      "lv": "Det lyder"
    },
    "imperfektIndikativ": {
      "de": "schallte vai scholl",
      "lv": "Det lød"
    },
    "imperfektKonjunktiv": {
      "de": "schallte vai scholl",
      "lv": "Det ville lyde"
    },
    "partizipVergangenheit": {
      "de": "geschallt",
      "lv": "Lydt"
    }
  },
  {
    "infinitiv": {
      "de": "scheiden",
      "lv": "At skilles"
    },
    "praesens": {
      "de": "er scheidet",
      "lv": "Han skilles"
    },
    "imperfektIndikativ": {
      "de": "er schied",
      "lv": "Han blev skilt"
    },
    "imperfektKonjunktiv": {
      "de": "er schiede",
      "lv": "Han ville skilles"
    },
    "partizipVergangenheit": {
      "de": "geschieden (er hat / er ist)",
      "lv": "Skilt"
    }
  },
  {
    "infinitiv": {
      "de": "scheinen",
      "lv": "At synes"
    },
    "praesens": {
      "de": "er scheint",
      "lv": "Han synes"
    },
    "imperfektIndikativ": {
      "de": "er schien",
      "lv": "Han syntes"
    },
    "imperfektKonjunktiv": {
      "de": "er schiene",
      "lv": "Han ville synes"
    },
    "partizipVergangenheit": {
      "de": "geschienen",
      "lv": "Syntes"
    }
  },
  {
    "infinitiv": {
      "de": "schelten",
      "lv": "At skælde ud"
    },
    "praesens": {
      "de": "er schilt",
      "lv": "Han skælder ud"
    },
    "imperfektIndikativ": {
      "de": "er schalt",
      "lv": "Han skældte ud"
    },
    "imperfektKonjunktiv": {
      "de": "er schölte / er schälte",
      "lv": "Han ville skælde ud"
    },
    "partizipVergangenheit": {
      "de": "gescholten",
      "lv": "Skældt ud"
    }
  },
  {
    "infinitiv": {
      "de": "scheren",
      "lv": "At klippe"
    },
    "praesens": {
      "de": "er schert",
      "lv": "Han klipper"
    },
    "imperfektIndikativ": {
      "de": "schor vai scherte",
      "lv": "Han klippede"
    },
    "imperfektKonjunktiv": {
      "de": "schor vai scherte",
      "lv": "Han ville klippe"
    },
    "partizipVergangenheit": {
      "de": "geschoren vai geschert",
      "lv": "Klippet"
    }
  },
  {
    "infinitiv": {
      "de": "schieben",
      "lv": "At skubbe"
    },
    "praesens": {
      "de": "er schiebt",
      "lv": "Han skubber"
    },
    "imperfektIndikativ": {
      "de": "er schob",
      "lv": "Han skubbede"
    },
    "imperfektKonjunktiv": {
      "de": "er schöbe",
      "lv": "Han ville skubbe"
    },
    "partizipVergangenheit": {
      "de": "geschoben",
      "lv": "Skubbet"
    }
  },
  {
    "infinitiv": {
      "de": "schießen",
      "lv": "At skyde"
    },
    "praesens": {
      "de": "er schießt",
      "lv": "Han skyder"
    },
    "imperfektIndikativ": {
      "de": "er schoss",
      "lv": "Han skød"
    },
    "imperfektKonjunktiv": {
      "de": "er schösse",
      "lv": "Han ville skyde"
    },
    "partizipVergangenheit": {
      "de": "geschossen",
      "lv": "Skudt"
    }
  },
  {
    "infinitiv": {
      "de": "schinden",
      "lv": "Pine"
    },
    "praesens": {
      "de": "er schindet",
      "lv": "Han plager"
    },
    "imperfektIndikativ": {
      "de": "schindete",
      "lv": "Han plagede"
    },
    "imperfektKonjunktiv": {
      "de": "schindete",
      "lv": "Han ville pine"
    },
    "partizipVergangenheit": {
      "de": "geschunden",
      "lv": "Plaget"
    }
  },
  {
    "infinitiv": {
      "de": "schlafen",
      "lv": "At sove"
    },
    "praesens": {
      "de": "er schläft",
      "lv": "Han sover"
    },
    "imperfektIndikativ": {
      "de": "er schlief",
      "lv": "Han sov"
    },
    "imperfektKonjunktiv": {
      "de": "er schliefe",
      "lv": "Han ville sove"
    },
    "partizipVergangenheit": {
      "de": "geschlafen",
      "lv": "Sovet"
    }
  },
  {
    "infinitiv": {
      "de": "schlagen",
      "lv": "At slå"
    },
    "praesens": {
      "de": "er schlägt",
      "lv": "Han slår"
    },
    "imperfektIndikativ": {
      "de": "er schlug",
      "lv": "Han slog"
    },
    "imperfektKonjunktiv": {
      "de": "er schlüge",
      "lv": "Han ville slå"
    },
    "partizipVergangenheit": {
      "de": "geschlagen",
      "lv": "Slået"
    }
  },
  {
    "infinitiv": {
      "de": "schleichen",
      "lv": "At snige sig"
    },
    "praesens": {
      "de": "er schleicht",
      "lv": "Han sniger sig"
    },
    "imperfektIndikativ": {
      "de": "er schlich",
      "lv": "Han sneg sig"
    },
    "imperfektKonjunktiv": {
      "de": "er schliche",
      "lv": "Han ville snige sig"
    },
    "partizipVergangenheit": {
      "de": "geschlichen (er ist)",
      "lv": "Sneget sig"
    }
  },
  {
    "infinitiv": {
      "de": "schleifen",
      "lv": "At slibe"
    },
    "praesens": {
      "de": "er schleift",
      "lv": "Han sliber"
    },
    "imperfektIndikativ": {
      "de": "er schliff",
      "lv": "Han kværnede"
    },
    "imperfektKonjunktiv": {
      "de": "er schliffe",
      "lv": "Han ville slibe"
    },
    "partizipVergangenheit": {
      "de": "geschliffen",
      "lv": "Poleret"
    }
  },
  {
    "infinitiv": {
      "de": "schließen",
      "lv": "At lukke"
    },
    "praesens": {
      "de": "er schließt",
      "lv": "Han lukker"
    },
    "imperfektIndikativ": {
      "de": "er schloss",
      "lv": "Han lukkede"
    },
    "imperfektKonjunktiv": {
      "de": "er schlösse",
      "lv": "Han ville lukke"
    },
    "partizipVergangenheit": {
      "de": "geschlossen",
      "lv": "Lukket"
    }
  },
  {
    "infinitiv": {
      "de": "schlingen",
      "lv": "At sluge"
    },
    "praesens": {
      "de": "er schlingt",
      "lv": "Han sluger"
    },
    "imperfektIndikativ": {
      "de": "er schlang",
      "lv": "Han slugte"
    },
    "imperfektKonjunktiv": {
      "de": "er schlänge",
      "lv": "Han ville sluge"
    },
    "partizipVergangenheit": {
      "de": "geschlungen",
      "lv": "Slugt"
    }
  },
  {
    "infinitiv": {
      "de": "schmeißen",
      "lv": "At kaste"
    },
    "praesens": {
      "de": "er schmeißt",
      "lv": "Han kaster"
    },
    "imperfektIndikativ": {
      "de": "er schmiss",
      "lv": "Han kastede"
    },
    "imperfektKonjunktiv": {
      "de": "er schmisse",
      "lv": "Han ville kaste"
    },
    "partizipVergangenheit": {
      "de": "geschmissen",
      "lv": "Kastet"
    }
  },
  {
    "infinitiv": {
      "de": "schmelzen",
      "lv": "At smelte"
    },
    "praesens": {
      "de": "er schmilzt",
      "lv": "Han smelter"
    },
    "imperfektIndikativ": {
      "de": "er schmolz",
      "lv": "Han smeltede"
    },
    "imperfektKonjunktiv": {
      "de": "er schmölze",
      "lv": "Han ville smelte"
    },
    "partizipVergangenheit": {
      "de": "geschmolzen (er ist)",
      "lv": "Smeltet"
    }
  },
  {
    "infinitiv": {
      "de": "schnauben",
      "lv": "At hvæse"
    },
    "praesens": {
      "de": "er schnaubt",
      "lv": "Han hvæser"
    },
    "imperfektIndikativ": {
      "de": "schnaubte vai schnob",
      "lv": "Han hvæsed"
    },
    "imperfektKonjunktiv": {
      "de": "schnaubte vai schnob",
      "lv": "Han ville hvæse"
    },
    "partizipVergangenheit": {
      "de": "geschnaubt vai geschnoben",
      "lv": "Hvæset"
    }
  },
  {
    "infinitiv": {
      "de": "schneiden",
      "lv": "At skære"
    },
    "praesens": {
      "de": "er schneidet",
      "lv": "Han skærer"
    },
    "imperfektIndikativ": {
      "de": "er schnitt",
      "lv": "Han skar"
    },
    "imperfektKonjunktiv": {
      "de": "er schnitte",
      "lv": "Han ville skære"
    },
    "partizipVergangenheit": {
      "de": "geschnitten",
      "lv": "Skåret"
    }
  },
  {
    "infinitiv": {
      "de": "schreiben",
      "lv": "At skrive"
    },
    "praesens": {
      "de": "er schreibt",
      "lv": "Han skriver"
    },
    "imperfektIndikativ": {
      "de": "er schrieb",
      "lv": "Skrev han"
    },
    "imperfektKonjunktiv": {
      "de": "er schriebe",
      "lv": "Han ville skrive"
    },
    "partizipVergangenheit": {
      "de": "geschrieben",
      "lv": "Skrevet"
    }
  },
  {
    "infinitiv": {
      "de": "schreien",
      "lv": "At skrige"
    },
    "praesens": {
      "de": "er schreit",
      "lv": "Råber han"
    },
    "imperfektIndikativ": {
      "de": "er schrie",
      "lv": "Råbte han"
    },
    "imperfektKonjunktiv": {
      "de": "er schriee",
      "lv": "Ville han råbe"
    },
    "partizipVergangenheit": {
      "de": "geschrien",
      "lv": "Skreget"
    }
  },
  {
    "infinitiv": {
      "de": "schreiten",
      "lv": "At skride"
    },
    "praesens": {
      "de": "er schreitet",
      "lv": "Han går"
    },
    "imperfektIndikativ": {
      "de": "er schritt",
      "lv": "Han gik"
    },
    "imperfektKonjunktiv": {
      "de": "er schritte",
      "lv": "Han ville gå"
    },
    "partizipVergangenheit": {
      "de": "geschritten (er ist)",
      "lv": "Skredet"
    }
  },
  {
    "infinitiv": {
      "de": "schweigen",
      "lv": "At tie"
    },
    "praesens": {
      "de": "er schweigt",
      "lv": "Han tier"
    },
    "imperfektIndikativ": {
      "de": "er schwieg",
      "lv": "Han tav"
    },
    "imperfektKonjunktiv": {
      "de": "er schwiege",
      "lv": "Han ville tie"
    },
    "partizipVergangenheit": {
      "de": "geschwiegen",
      "lv": "Forstummet"
    }
  },
  {
    "infinitiv": {
      "de": "schwellen",
      "lv": "At svulme"
    },
    "praesens": {
      "de": "er schwillt",
      "lv": "Det svulmer"
    },
    "imperfektIndikativ": {
      "de": "er schwoll",
      "lv": "Det svulmede"
    },
    "imperfektKonjunktiv": {
      "de": "er schwölle",
      "lv": "Det ville svulme"
    },
    "partizipVergangenheit": {
      "de": "geschwollen (er ist)",
      "lv": "Svulmet"
    }
  },
  {
    "infinitiv": {
      "de": "schwimmen",
      "lv": "At svømme"
    },
    "praesens": {
      "de": "er schwimmt",
      "lv": "Han svømmer"
    },
    "imperfektIndikativ": {
      "de": "er schwamm",
      "lv": "Han svømmede"
    },
    "imperfektKonjunktiv": {
      "de": "er schwömme / er schwämme",
      "lv": "Han ville svømme"
    },
    "partizipVergangenheit": {
      "de": "geschwommen (er ist)",
      "lv": "Svømmet"
    }
  },
  {
    "infinitiv": {
      "de": "schwinden",
      "lv": "At forsvinde"
    },
    "praesens": {
      "de": "er schwindet",
      "lv": "Han forsvinder"
    },
    "imperfektIndikativ": {
      "de": "er schwand",
      "lv": "Han forsvandt"
    },
    "imperfektKonjunktiv": {
      "de": "er schwände",
      "lv": "Han ville forsvinde"
    },
    "partizipVergangenheit": {
      "de": "geschwunden (er ist)",
      "lv": "Forsvundet"
    }
  },
  {
    "infinitiv": {
      "de": "schwingen",
      "lv": "At svinge"
    },
    "praesens": {
      "de": "er schwingt",
      "lv": "Han svinger"
    },
    "imperfektIndikativ": {
      "de": "er schwang",
      "lv": "Han svingede"
    },
    "imperfektKonjunktiv": {
      "de": "er schwänge",
      "lv": "Han ville svinge"
    },
    "partizipVergangenheit": {
      "de": "geschwungen",
      "lv": "Svinget"
    }
  },
  {
    "infinitiv": {
      "de": "schwören",
      "lv": "At bande"
    },
    "praesens": {
      "de": "er schwört",
      "lv": "Han sværger"
    },
    "imperfektIndikativ": {
      "de": "er schwur / er schwor",
      "lv": "Han svor"
    },
    "imperfektKonjunktiv": {
      "de": "er schwöre",
      "lv": "Han ville sværge"
    },
    "partizipVergangenheit": {
      "de": "geschworen",
      "lv": "Svoret"
    }
  },
  {
    "infinitiv": {
      "de": "sehen",
      "lv": "At se"
    },
    "praesens": {
      "de": "er sieht",
      "lv": "Han ser"
    },
    "imperfektIndikativ": {
      "de": "er sah",
      "lv": "Han så"
    },
    "imperfektKonjunktiv": {
      "de": "er sähe",
      "lv": "Han ville se"
    },
    "partizipVergangenheit": {
      "de": "gesehen",
      "lv": "Set"
    }
  },
  {
    "infinitiv": {
      "de": "sein",
      "lv": "At være"
    },
    "praesens": {
      "de": "er ist",
      "lv": "Han er"
    },
    "imperfektIndikativ": {
      "de": "war",
      "lv": "Han var"
    },
    "imperfektKonjunktiv": {
      "de": "war",
      "lv": "Han ville være"
    },
    "partizipVergangenheit": {
      "de": "gewesen",
      "lv": "Været"
    }
  },
  {
    "infinitiv": {
      "de": "senden",
      "lv": "At sende"
    },
    "praesens": {
      "de": "er sendet",
      "lv": "Han sender"
    },
    "imperfektIndikativ": {
      "de": "er sandte / er sendete",
      "lv": "Han sendte"
    },
    "imperfektKonjunktiv": {
      "de": "er sendete",
      "lv": "Han ville sende"
    },
    "partizipVergangenheit": {
      "de": "gesandt / gesendet",
      "lv": "Sendt"
    }
  },
  {
    "infinitiv": {
      "de": "sieden",
      "lv": "At koge"
    },
    "praesens": {
      "de": "er siedet",
      "lv": "Det koger"
    },
    "imperfektIndikativ": {
      "de": "sott vai siedete",
      "lv": "Det kogte"
    },
    "imperfektKonjunktiv": {
      "de": "sott vai siedete",
      "lv": "Det ville koge"
    },
    "partizipVergangenheit": {
      "de": "gesotten vai gesiedet",
      "lv": "Kogt"
    }
  },
  {
    "infinitiv": {
      "de": "singen",
      "lv": "At synge"
    },
    "praesens": {
      "de": "er singt",
      "lv": "Han synger"
    },
    "imperfektIndikativ": {
      "de": "er sang",
      "lv": "Han sang"
    },
    "imperfektKonjunktiv": {
      "de": "er sänge",
      "lv": "Han ville synge"
    },
    "partizipVergangenheit": {
      "de": "gesungen",
      "lv": "Sunget"
    }
  },
  {
    "infinitiv": {
      "de": "sinken",
      "lv": "At synke"
    },
    "praesens": {
      "de": "er sinkt",
      "lv": "Han synker"
    },
    "imperfektIndikativ": {
      "de": "er sank",
      "lv": "Han sank"
    },
    "imperfektKonjunktiv": {
      "de": "er sänke",
      "lv": "Han ville synke"
    },
    "partizipVergangenheit": {
      "de": "gesunken (er ist)",
      "lv": "Synket"
    }
  },
  {
    "infinitiv": {
      "de": "sinnen",
      "lv": "At grunde over"
    },
    "praesens": {
      "de": "er sinnt",
      "lv": "Han grunder over"
    },
    "imperfektIndikativ": {
      "de": "er sann",
      "lv": "Han grundede over"
    },
    "imperfektKonjunktiv": {
      "de": "er sönne / er sänne",
      "lv": "Ville han undre sig"
    },
    "partizipVergangenheit": {
      "de": "gesonnen",
      "lv": "Grundet over"
    }
  },
  {
    "infinitiv": {
      "de": "sitzen",
      "lv": "At sidde"
    },
    "praesens": {
      "de": "er sitzt",
      "lv": "Han sidder"
    },
    "imperfektIndikativ": {
      "de": "er sass",
      "lv": "Han sad"
    },
    "imperfektKonjunktiv": {
      "de": "er säße",
      "lv": "Han ville sidde"
    },
    "partizipVergangenheit": {
      "de": "gesessen",
      "lv": "Siddet"
    }
  },
  {
    "infinitiv": {
      "de": "sollen",
      "lv": "At skulle"
    },
    "praesens": {
      "de": "er soll",
      "lv": "Han skal"
    },
    "imperfektIndikativ": {
      "de": "sollte",
      "lv": "Han skulle"
    },
    "imperfektKonjunktiv": {
      "de": "sollte",
      "lv": "Han skulle"
    },
    "partizipVergangenheit": {
      "de": "gesollt",
      "lv": "Skullet"
    }
  },
  {
    "infinitiv": {
      "de": "speien",
      "lv": "At spytte"
    },
    "praesens": {
      "de": "er speit",
      "lv": "Han spytter"
    },
    "imperfektIndikativ": {
      "de": "er spie",
      "lv": "Han spyttede"
    },
    "imperfektKonjunktiv": {
      "de": "er spie",
      "lv": "Han ville spytte"
    },
    "partizipVergangenheit": {
      "de": "gespien",
      "lv": "Spyttet"
    }
  },
  {
    "infinitiv": {
      "de": "spinnen",
      "lv": "At spinde"
    },
    "praesens": {
      "de": "er spinnt",
      "lv": "Han spinder"
    },
    "imperfektIndikativ": {
      "de": "er spann",
      "lv": "Han spandt"
    },
    "imperfektKonjunktiv": {
      "de": "er spönne / er spänne",
      "lv": "Han ville spinde"
    },
    "partizipVergangenheit": {
      "de": "gesponnen",
      "lv": "Spundet"
    }
  },
  {
    "infinitiv": {
      "de": "spleißen",
      "lv": "At splejse"
    },
    "praesens": {
      "de": "er spleißt",
      "lv": "Han forbinder"
    },
    "imperfektIndikativ": {
      "de": "spliss",
      "lv": "Han splejsede"
    },
    "imperfektKonjunktiv": {
      "de": "spliss",
      "lv": "Han ville splejse"
    },
    "partizipVergangenheit": {
      "de": "gesplissen",
      "lv": "Splejset"
    }
  },
  {
    "infinitiv": {
      "de": "sprechen",
      "lv": "At tale"
    },
    "praesens": {
      "de": "er spricht",
      "lv": "Han taler"
    },
    "imperfektIndikativ": {
      "de": "er sprach",
      "lv": "Han talte"
    },
    "imperfektKonjunktiv": {
      "de": "er spräche",
      "lv": "Han ville tale"
    },
    "partizipVergangenheit": {
      "de": "gesprochen",
      "lv": "Talt"
    }
  },
  {
    "infinitiv": {
      "de": "sprießen",
      "lv": "At spire"
    },
    "praesens": {
      "de": "er sprießt",
      "lv": "Det spirer"
    },
    "imperfektIndikativ": {
      "de": "er spross",
      "lv": "Det spirede"
    },
    "imperfektKonjunktiv": {
      "de": "er sprösse",
      "lv": "Det ville spire"
    },
    "partizipVergangenheit": {
      "de": "gesprossen (er ist)",
      "lv": "Spiret"
    }
  },
  {
    "infinitiv": {
      "de": "springen",
      "lv": "At hoppe"
    },
    "praesens": {
      "de": "er springt",
      "lv": "Han hopper"
    },
    "imperfektIndikativ": {
      "de": "er sprang",
      "lv": "Han sprang"
    },
    "imperfektKonjunktiv": {
      "de": "er spränge",
      "lv": "Han ville hoppe"
    },
    "partizipVergangenheit": {
      "de": "gesprungen (er ist)",
      "lv": "Hoppet"
    }
  },
  {
    "infinitiv": {
      "de": "stechen",
      "lv": "At stikke"
    },
    "praesens": {
      "de": "er sticht",
      "lv": "Han stikker"
    },
    "imperfektIndikativ": {
      "de": "er stach",
      "lv": "Han stak"
    },
    "imperfektKonjunktiv": {
      "de": "er stäche",
      "lv": "Han ville stikke"
    },
    "partizipVergangenheit": {
      "de": "gestochen",
      "lv": "Stukket"
    }
  },
  {
    "infinitiv": {
      "de": "stecken",
      "lv": "At stikke"
    },
    "praesens": {
      "de": "er steckt",
      "lv": "Han stikker"
    },
    "imperfektIndikativ": {
      "de": "stak vai steckte",
      "lv": "Han stak"
    },
    "imperfektKonjunktiv": {
      "de": "stak vai steckte",
      "lv": "Han ville stikke"
    },
    "partizipVergangenheit": {
      "de": "gesteckt",
      "lv": "Stukket"
    }
  },
  {
    "infinitiv": {
      "de": "stehen",
      "lv": "At stå"
    },
    "praesens": {
      "de": "er steht",
      "lv": "Han står"
    },
    "imperfektIndikativ": {
      "de": "er stand",
      "lv": "Han stod"
    },
    "imperfektKonjunktiv": {
      "de": "er stände / er stünde",
      "lv": "Han ville stå"
    },
    "partizipVergangenheit": {
      "de": "gestanden",
      "lv": "Stående"
    }
  },
  {
    "infinitiv": {
      "de": "stehlen",
      "lv": "At stjæle"
    },
    "praesens": {
      "de": "er stiehlt",
      "lv": "Han stjæler"
    },
    "imperfektIndikativ": {
      "de": "er stahl",
      "lv": "Han stjal"
    },
    "imperfektKonjunktiv": {
      "de": "er stöhle / er stähle",
      "lv": "Han ville stjæle"
    },
    "partizipVergangenheit": {
      "de": "gestohlen",
      "lv": "Stjålet"
    }
  },
  {
    "infinitiv": {
      "de": "steigen",
      "lv": "At klatre"
    },
    "praesens": {
      "de": "er steigt",
      "lv": "Han klatrer"
    },
    "imperfektIndikativ": {
      "de": "er stieg",
      "lv": "Han klatrede"
    },
    "imperfektKonjunktiv": {
      "de": "er stiege",
      "lv": "Han ville klatre"
    },
    "partizipVergangenheit": {
      "de": "gestiegen (er ist)",
      "lv": "Steget"
    }
  },
  {
    "infinitiv": {
      "de": "sterben",
      "lv": "At dø"
    },
    "praesens": {
      "de": "er stirbt",
      "lv": "Han dør"
    },
    "imperfektIndikativ": {
      "de": "er starb",
      "lv": "Han døde"
    },
    "imperfektKonjunktiv": {
      "de": "er stürbe",
      "lv": "Han ville dø"
    },
    "partizipVergangenheit": {
      "de": "gestorben (er ist)",
      "lv": "Død"
    }
  },
  {
    "infinitiv": {
      "de": "stieben",
      "lv": "At hvirvle"
    },
    "praesens": {
      "de": "es stiebt",
      "lv": "Det hvirvler"
    },
    "imperfektIndikativ": {
      "de": "stob vai stiebte",
      "lv": "Det hvirvlede"
    },
    "imperfektKonjunktiv": {
      "de": "stob vai stiebte",
      "lv": "Det ville hvirvle"
    },
    "partizipVergangenheit": {
      "de": "gestoben vai gestiebt",
      "lv": "Hvirvlet"
    }
  },
  {
    "infinitiv": {
      "de": "stinken",
      "lv": "At stinke"
    },
    "praesens": {
      "de": "es stinkt",
      "lv": "Det stinker"
    },
    "imperfektIndikativ": {
      "de": "stank",
      "lv": "Det stank"
    },
    "imperfektKonjunktiv": {
      "de": "stank",
      "lv": "Det ville stinke"
    },
    "partizipVergangenheit": {
      "de": "gestunken",
      "lv": "Stunket"
    }
  },
  {
    "infinitiv": {
      "de": "stoßen",
      "lv": "Skubbe"
    },
    "praesens": {
      "de": "er stößt",
      "lv": "Han skubber"
    },
    "imperfektIndikativ": {
      "de": "er stieß",
      "lv": "Han skubbede"
    },
    "imperfektKonjunktiv": {
      "de": "er stieße",
      "lv": "Han ville skubbe"
    },
    "partizipVergangenheit": {
      "de": "gestoßen",
      "lv": "Skubbet"
    }
  },
  {
    "infinitiv": {
      "de": "streichen",
      "lv": "At stryge"
    },
    "praesens": {
      "de": "er streicht",
      "lv": "Han stryger"
    },
    "imperfektIndikativ": {
      "de": "er strich",
      "lv": "Han strøg"
    },
    "imperfektKonjunktiv": {
      "de": "er striche",
      "lv": "Han ville stryge"
    },
    "partizipVergangenheit": {
      "de": "gestrichen",
      "lv": "Strøget"
    }
  },
  {
    "infinitiv": {
      "de": "streiten",
      "lv": "At skændes"
    },
    "praesens": {
      "de": "er streitet",
      "lv": "Han skændes"
    },
    "imperfektIndikativ": {
      "de": "er stritt",
      "lv": "Han skændtes"
    },
    "imperfektKonjunktiv": {
      "de": "er stritte",
      "lv": "Han ville skændes"
    },
    "partizipVergangenheit": {
      "de": "gestritten",
      "lv": "Skændtes"
    }
  },
  {
    "infinitiv": {
      "de": "tragen",
      "lv": "At bære"
    },
    "praesens": {
      "de": "er trägt",
      "lv": "Han bærer"
    },
    "imperfektIndikativ": {
      "de": "er trug",
      "lv": "Han bar"
    },
    "imperfektKonjunktiv": {
      "de": "er trüge",
      "lv": "Han ville bære"
    },
    "partizipVergangenheit": {
      "de": "getragen",
      "lv": "Båret"
    }
  },
  {
    "infinitiv": {
      "de": "treffen",
      "lv": "At møde"
    },
    "praesens": {
      "de": "er trifft",
      "lv": "Han møder"
    },
    "imperfektIndikativ": {
      "de": "er traf",
      "lv": "Han mødte"
    },
    "imperfektKonjunktiv": {
      "de": "er träfe",
      "lv": "Han ville støde på"
    },
    "partizipVergangenheit": {
      "de": "getroffen",
      "lv": "Mødt"
    }
  },
  {
    "infinitiv": {
      "de": "treiben",
      "lv": "At drive"
    },
    "praesens": {
      "de": "er treibt",
      "lv": "Han kører"
    },
    "imperfektIndikativ": {
      "de": "er trieb",
      "lv": "Han kørte"
    },
    "imperfektKonjunktiv": {
      "de": "er triebe",
      "lv": "Han ville køre"
    },
    "partizipVergangenheit": {
      "de": "getrieben",
      "lv": "Drevet"
    }
  },
  {
    "infinitiv": {
      "de": "treten",
      "lv": "At træde"
    },
    "praesens": {
      "de": "er tritt",
      "lv": "Han træder"
    },
    "imperfektIndikativ": {
      "de": "er trat",
      "lv": "Han trådte"
    },
    "imperfektKonjunktiv": {
      "de": "er träte",
      "lv": "Han ville træde"
    },
    "partizipVergangenheit": {
      "de": "getreten (er ist)",
      "lv": "Trådt"
    }
  },
  {
    "infinitiv": {
      "de": "trinken",
      "lv": "At drikke"
    },
    "praesens": {
      "de": "er trinkt",
      "lv": "Han drikker"
    },
    "imperfektIndikativ": {
      "de": "er trank",
      "lv": "Han drak"
    },
    "imperfektKonjunktiv": {
      "de": "er tränke",
      "lv": "Han ville drikke"
    },
    "partizipVergangenheit": {
      "de": "getrunken",
      "lv": "Drukket"
    }
  },
  {
    "infinitiv": {
      "de": "trügen",
      "lv": "At snyde"
    },
    "praesens": {
      "de": "er trögt",
      "lv": "Han snyder"
    },
    "imperfektIndikativ": {
      "de": "er trog",
      "lv": "Han snød"
    },
    "imperfektKonjunktiv": {
      "de": "er tröge",
      "lv": "Han ville snyde"
    },
    "partizipVergangenheit": {
      "de": "getrogen",
      "lv": "Snydt"
    }
  },
  {
    "infinitiv": {
      "de": "tun",
      "lv": "At gøre"
    },
    "praesens": {
      "de": "er tut",
      "lv": "Det gør han"
    },
    "imperfektIndikativ": {
      "de": "er tat",
      "lv": "Det gjorde han"
    },
    "imperfektKonjunktiv": {
      "de": "er täte",
      "lv": "Han ville gøre"
    },
    "partizipVergangenheit": {
      "de": "getan",
      "lv": "Gjort"
    }
  },
  {
    "infinitiv": {
      "de": "verderben",
      "lv": "At ødelægge"
    },
    "praesens": {
      "de": "er verdirbt",
      "lv": "Han ødelægger"
    },
    "imperfektIndikativ": {
      "de": "er verdarb",
      "lv": "Han beskadigede"
    },
    "imperfektKonjunktiv": {
      "de": "er verdürbe",
      "lv": "Han ville skade"
    },
    "partizipVergangenheit": {
      "de": "verdorben",
      "lv": "Beskadiget"
    }
  },
  {
    "infinitiv": {
      "de": "verdrießen",
      "lv": "At ærgre"
    },
    "praesens": {
      "de": "er verdrießt",
      "lv": "Han volder ærgrelse"
    },
    "imperfektIndikativ": {
      "de": "er verdross",
      "lv": "Han voldte ærgrelse"
    },
    "imperfektKonjunktiv": {
      "de": "er verdrösse",
      "lv": "Han ville volde ærgrelse"
    },
    "partizipVergangenheit": {
      "de": "verdrossen",
      "lv": "Ærgret"
    }
  },
  {
    "infinitiv": {
      "de": "vergessen",
      "lv": "At glemme"
    },
    "praesens": {
      "de": "er vergisst",
      "lv": "Han glemmer"
    },
    "imperfektIndikativ": {
      "de": "er vergass",
      "lv": "Han glemte"
    },
    "imperfektKonjunktiv": {
      "de": "er vergäße",
      "lv": "Han ville glemme"
    },
    "partizipVergangenheit": {
      "de": "vergessen",
      "lv": "Glemt"
    }
  },
  {
    "infinitiv": {
      "de": "verlieren",
      "lv": "At tabe"
    },
    "praesens": {
      "de": "er verliert",
      "lv": "Han taber"
    },
    "imperfektIndikativ": {
      "de": "er verlor",
      "lv": "Han tabte"
    },
    "imperfektKonjunktiv": {
      "de": "er verlöre",
      "lv": "Han ville tabe"
    },
    "partizipVergangenheit": {
      "de": "verloren",
      "lv": "Tabt"
    }
  },
  {
    "infinitiv": {
      "de": "wachsen",
      "lv": "At vokse"
    },
    "praesens": {
      "de": "er wächst",
      "lv": "Han vokser"
    },
    "imperfektIndikativ": {
      "de": "er wuchs",
      "lv": "Han voksede op"
    },
    "imperfektKonjunktiv": {
      "de": "er wüchse",
      "lv": "Han ville vokse"
    },
    "partizipVergangenheit": {
      "de": "gewachsen (er ist)",
      "lv": "Vokset"
    }
  },
  {
    "infinitiv": {
      "de": "waschen",
      "lv": "At vaske"
    },
    "praesens": {
      "de": "er wäscht",
      "lv": "Han vasker"
    },
    "imperfektIndikativ": {
      "de": "er wusch",
      "lv": "Han vaskede"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsche",
      "lv": "Han ville vaske"
    },
    "partizipVergangenheit": {
      "de": "gewaschen",
      "lv": "Vasket"
    }
  },
  {
    "infinitiv": {
      "de": "weben",
      "lv": "At væve"
    },
    "praesens": {
      "de": "er webt",
      "lv": "Han væver"
    },
    "imperfektIndikativ": {
      "de": "wob",
      "lv": "Han vævede"
    },
    "imperfektKonjunktiv": {
      "de": "wob",
      "lv": "Han ville væve"
    },
    "partizipVergangenheit": {
      "de": "gewoben",
      "lv": "Vævet"
    }
  },
  {
    "infinitiv": {
      "de": "weichen",
      "lv": "At trække sig tilbage"
    },
    "praesens": {
      "de": "er weicht",
      "lv": "Han bakker"
    },
    "imperfektIndikativ": {
      "de": "er wich",
      "lv": "Han trådte tilbage"
    },
    "imperfektKonjunktiv": {
      "de": "er wiche",
      "lv": "Han ville trække sig"
    },
    "partizipVergangenheit": {
      "de": "gewichen (er ist)",
      "lv": "Viget"
    }
  },
  {
    "infinitiv": {
      "de": "weisen",
      "lv": "Vise"
    },
    "praesens": {
      "de": "er weist",
      "lv": "Han viser"
    },
    "imperfektIndikativ": {
      "de": "er wies",
      "lv": "Han viste"
    },
    "imperfektKonjunktiv": {
      "de": "er wiese",
      "lv": "Han ville vise"
    },
    "partizipVergangenheit": {
      "de": "gewiesen",
      "lv": "Vist"
    }
  },
  {
    "infinitiv": {
      "de": "wenden",
      "lv": "At vende"
    },
    "praesens": {
      "de": "er wendet",
      "lv": "Han vender"
    },
    "imperfektIndikativ": {
      "de": "er wandte / es wendete",
      "lv": "Han vendte"
    },
    "imperfektKonjunktiv": {
      "de": "er wendete",
      "lv": "Han ville vende"
    },
    "partizipVergangenheit": {
      "de": "gewandt / gewendet",
      "lv": "Vendt"
    }
  },
  {
    "infinitiv": {
      "de": "werben",
      "lv": "At rekruttere"
    },
    "praesens": {
      "de": "er wirbt",
      "lv": "Han rekrutterer"
    },
    "imperfektIndikativ": {
      "de": "er warb",
      "lv": "Han rekrutterede"
    },
    "imperfektKonjunktiv": {
      "de": "er würbe",
      "lv": "Han ville rekruttere"
    },
    "partizipVergangenheit": {
      "de": "geworben",
      "lv": "Rekrutteret"
    }
  },
  {
    "infinitiv": {
      "de": "werden",
      "lv": "At blive"
    },
    "praesens": {
      "de": "er wird",
      "lv": "Han bliver"
    },
    "imperfektIndikativ": {
      "de": "wurde",
      "lv": "Han blev"
    },
    "imperfektKonjunktiv": {
      "de": "wurde",
      "lv": "Han ville blive"
    },
    "partizipVergangenheit": {
      "de": "geworden",
      "lv": "Er blevet"
    }
  },
  {
    "infinitiv": {
      "de": "werfen",
      "lv": "At kaste"
    },
    "praesens": {
      "de": "er wirft",
      "lv": "Han kaster"
    },
    "imperfektIndikativ": {
      "de": "er warf",
      "lv": "Han kastede"
    },
    "imperfektKonjunktiv": {
      "de": "er würfe",
      "lv": "Han ville kaste"
    },
    "partizipVergangenheit": {
      "de": "geworfen",
      "lv": "Kastet"
    }
  },
  {
    "infinitiv": {
      "de": "wiegen",
      "lv": "At veje"
    },
    "praesens": {
      "de": "er wiegt",
      "lv": "Han vejer"
    },
    "imperfektIndikativ": {
      "de": "er wog",
      "lv": "Han vejede"
    },
    "imperfektKonjunktiv": {
      "de": "er wöge",
      "lv": "Han ville veje"
    },
    "partizipVergangenheit": {
      "de": "gewogen",
      "lv": "Vejet"
    }
  },
  {
    "infinitiv": {
      "de": "winden",
      "lv": "At vride sig"
    },
    "praesens": {
      "de": "er windet",
      "lv": "Han vrider sig"
    },
    "imperfektIndikativ": {
      "de": "er wand",
      "lv": "Han vred sig"
    },
    "imperfektKonjunktiv": {
      "de": "er wände",
      "lv": "Han ville vride sig"
    },
    "partizipVergangenheit": {
      "de": "gewunden",
      "lv": "Vredet"
    }
  },
  {
    "infinitiv": {
      "de": "wissen",
      "lv": "At vide"
    },
    "praesens": {
      "de": "er weiß",
      "lv": "Han ved"
    },
    "imperfektIndikativ": {
      "de": "er wusste",
      "lv": "Han vidste"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsste",
      "lv": "Han ville vide"
    },
    "partizipVergangenheit": {
      "de": "gewusst",
      "lv": "Vidst"
    }
  },
  {
    "infinitiv": {
      "de": "wollen",
      "lv": "Vil"
    },
    "praesens": {
      "de": "er will",
      "lv": "Han vil"
    },
    "imperfektIndikativ": {
      "de": "wollte",
      "lv": "Han ville"
    },
    "imperfektKonjunktiv": {
      "de": "wollte",
      "lv": "Han ville"
    },
    "partizipVergangenheit": {
      "de": "gewollt",
      "lv": "Villet"
    }
  },
  {
    "infinitiv": {
      "de": "wringen",
      "lv": "At vride"
    },
    "praesens": {
      "de": "er wringt",
      "lv": "Han vrider"
    },
    "imperfektIndikativ": {
      "de": "wrang",
      "lv": "Han vred"
    },
    "imperfektKonjunktiv": {
      "de": "wrang",
      "lv": "Han ville vride"
    },
    "partizipVergangenheit": {
      "de": "gewrungen",
      "lv": "Vredet"
    }
  },
  {
    "infinitiv": {
      "de": "zeihen",
      "lv": "At bebrejde"
    },
    "praesens": {
      "de": "er zeiht",
      "lv": "Han giver skylden"
    },
    "imperfektIndikativ": {
      "de": "zieh",
      "lv": "Han bebrejdede"
    },
    "imperfektKonjunktiv": {
      "de": "zieh",
      "lv": "Han ville bebrejde"
    },
    "partizipVergangenheit": {
      "de": "geziehen",
      "lv": "Bebrejdet"
    }
  },
  {
    "infinitiv": {
      "de": "ziehen",
      "lv": "At trække"
    },
    "praesens": {
      "de": "er zieht",
      "lv": "Han trækker"
    },
    "imperfektIndikativ": {
      "de": "er zog",
      "lv": "Han trak"
    },
    "imperfektKonjunktiv": {
      "de": "er zöge",
      "lv": "Han ville trække"
    },
    "partizipVergangenheit": {
      "de": "gezogen",
      "lv": "Trukket"
    }
  },
  {
    "infinitiv": {
      "de": "zwingen",
      "lv": "At tvinge"
    },
    "praesens": {
      "de": "er zwingt",
      "lv": "Han tvinger"
    },
    "imperfektIndikativ": {
      "de": "er zwang",
      "lv": "Han tvang"
    },
    "imperfektKonjunktiv": {
      "de": "er zwänge",
      "lv": "Han ville tvinge"
    },
    "partizipVergangenheit": {
      "de": "gezwungen",
      "lv": "Tvunget"
    }
  },
  {
    "infinitiv": {
      "de": "empfangen",
      "lv": "At modtage"
    },
    "praesens": {
      "de": "er empfängt",
      "lv": "Han modtager"
    },
    "imperfektIndikativ": {
      "de": "er empfing",
      "lv": "Han modtog"
    },
    "imperfektKonjunktiv": {
      "de": "er empfinge",
      "lv": "Han ville modtage"
    },
    "partizipVergangenheit": {
      "de": "empfangen",
      "lv": "Modtaget"
    }
  },
  {
    "infinitiv": {
      "de": "erwägen",
      "lv": "At overveje"
    },
    "praesens": {
      "de": "er erwägt",
      "lv": "Han overvejer"
    },
    "imperfektIndikativ": {
      "de": "er erwog",
      "lv": "Han overvejede"
    },
    "imperfektKonjunktiv": {
      "de": "er erwöge",
      "lv": "Ville han overveje"
    },
    "partizipVergangenheit": {
      "de": "erwogen",
      "lv": "Overvejet"
    }
  },
  {
    "infinitiv": {
      "de": "fechten",
      "lv": "At fægte"
    },
    "praesens": {
      "de": "er ficht",
      "lv": "Han fægter"
    },
    "imperfektIndikativ": {
      "de": "er focht",
      "lv": "Han fægtede"
    },
    "imperfektKonjunktiv": {
      "de": "er föchte",
      "lv": "Han ville fægte"
    },
    "partizipVergangenheit": {
      "de": "gefochten",
      "lv": "Fægtet"
    }
  },
  {
    "infinitiv": {
      "de": "flechten",
      "lv": "At flette"
    },
    "praesens": {
      "de": "er flicht",
      "lv": "Han fletter"
    },
    "imperfektIndikativ": {
      "de": "er flocht",
      "lv": "Han flettede"
    },
    "imperfektKonjunktiv": {
      "de": "er flöchte",
      "lv": "Han ville flette"
    },
    "partizipVergangenheit": {
      "de": "geflochten",
      "lv": "Flettet"
    }
  },
  {
    "infinitiv": {
      "de": "hangen",
      "lv": "At hænge"
    },
    "praesens": {
      "de": "er hängt",
      "lv": "Han hænger"
    },
    "imperfektIndikativ": {
      "de": "er hing",
      "lv": "Han hang"
    },
    "imperfektKonjunktiv": {
      "de": "er hinge",
      "lv": "Han ville hænge"
    },
    "partizipVergangenheit": {
      "de": "gehangen",
      "lv": "Hængt"
    }
  },
  {
    "infinitiv": {
      "de": "spalten",
      "lv": "At splitte"
    },
    "praesens": {
      "de": "er spaltet",
      "lv": "Han splitter"
    },
    "imperfektIndikativ": {
      "de": "er spaltete",
      "lv": "Han splittede"
    },
    "imperfektKonjunktiv": {
      "de": "er spaltete",
      "lv": "Han ville splitte"
    },
    "partizipVergangenheit": {
      "de": "gespalten",
      "lv": "Splittet"
    }
  },
  {
    "infinitiv": {
      "de": "verzeihen",
      "lv": "At tilgive"
    },
    "praesens": {
      "de": "er verzeiht",
      "lv": "Han tilgiver"
    },
    "imperfektIndikativ": {
      "de": "er verzieh",
      "lv": "Han tilgav"
    },
    "imperfektKonjunktiv": {
      "de": "er verziehe",
      "lv": "Han ville tilgive"
    },
    "partizipVergangenheit": {
      "de": "verziehen",
      "lv": "Tilgivet"
    }
  }
];

window.VERB_ENTRIES = VERB_ENTRIES;

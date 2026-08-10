const VERB_ENTRIES = [
  {
    "infinitiv": {
      "de": "backen",
      "lv": "to bake"
    },
    "praesens": {
      "de": "er bäckt",
      "lv": "he bakes"
    },
    "imperfektIndikativ": {
      "de": "er buk",
      "lv": "he was baking"
    },
    "imperfektKonjunktiv": {
      "de": "er büke",
      "lv": "he would bake"
    },
    "partizipVergangenheit": {
      "de": "gebacken",
      "lv": "baked"
    }
  },
  {
    "infinitiv": {
      "de": "befehlen",
      "lv": "to command"
    },
    "praesens": {
      "de": "er befiehlt",
      "lv": "he commands"
    },
    "imperfektIndikativ": {
      "de": "er befahl",
      "lv": "he commanded"
    },
    "imperfektKonjunktiv": {
      "de": "er beföhle",
      "lv": "he would command"
    },
    "partizipVergangenheit": {
      "de": "befohlen",
      "lv": "commanded"
    }
  },
  {
    "infinitiv": {
      "de": "beginnen",
      "lv": "to start"
    },
    "praesens": {
      "de": "er beginnt",
      "lv": "he starts"
    },
    "imperfektIndikativ": {
      "de": "er begann",
      "lv": "he started"
    },
    "imperfektKonjunktiv": {
      "de": "er begönne / er begänne",
      "lv": "he would start"
    },
    "partizipVergangenheit": {
      "de": "begonnen",
      "lv": "started"
    }
  },
  {
    "infinitiv": {
      "de": "beißen",
      "lv": "to bite"
    },
    "praesens": {
      "de": "er beißt",
      "lv": "he bites"
    },
    "imperfektIndikativ": {
      "de": "er biss",
      "lv": "he bit"
    },
    "imperfektKonjunktiv": {
      "de": "er bisse",
      "lv": "he would bite"
    },
    "partizipVergangenheit": {
      "de": "gebissen",
      "lv": "bitten"
    }
  },
  {
    "infinitiv": {
      "de": "bergen",
      "lv": "hide"
    },
    "praesens": {
      "de": "er birgt",
      "lv": "he hides"
    },
    "imperfektIndikativ": {
      "de": "er barg",
      "lv": "he hid"
    },
    "imperfektKonjunktiv": {
      "de": "er bürge / er bärge",
      "lv": "he would hide"
    },
    "partizipVergangenheit": {
      "de": "geborgen",
      "lv": "hidden / saved"
    }
  },
  {
    "infinitiv": {
      "de": "bersten",
      "lv": "bursting"
    },
    "praesens": {
      "de": "er birst",
      "lv": "he bursts"
    },
    "imperfektIndikativ": {
      "de": "er barst / er borst",
      "lv": "he burst out"
    },
    "imperfektKonjunktiv": {
      "de": "er bärste / er börste",
      "lv": "he would burst"
    },
    "partizipVergangenheit": {
      "de": "geborsten (er ist)",
      "lv": "broken"
    }
  },
  {
    "infinitiv": {
      "de": "bewegen",
      "lv": "to encourage"
    },
    "praesens": {
      "de": "er bewegt",
      "lv": "he prompts"
    },
    "imperfektIndikativ": {
      "de": "er bewog",
      "lv": "he urged"
    },
    "imperfektKonjunktiv": {
      "de": "er bewöge",
      "lv": "he would encourage"
    },
    "partizipVergangenheit": {
      "de": "bewogen",
      "lv": "encouraged"
    }
  },
  {
    "infinitiv": {
      "de": "biegen",
      "lv": "bend"
    },
    "praesens": {
      "de": "er biegt",
      "lv": "he bends"
    },
    "imperfektIndikativ": {
      "de": "er bog",
      "lv": "he flexed"
    },
    "imperfektKonjunktiv": {
      "de": "er böge",
      "lv": "he would bend"
    },
    "partizipVergangenheit": {
      "de": "gebogen",
      "lv": "bent"
    }
  },
  {
    "infinitiv": {
      "de": "bieten",
      "lv": "to promise"
    },
    "praesens": {
      "de": "er bietet",
      "lv": "he promises"
    },
    "imperfektIndikativ": {
      "de": "er bot",
      "lv": "he promised"
    },
    "imperfektKonjunktiv": {
      "de": "er böte",
      "lv": "he would promise"
    },
    "partizipVergangenheit": {
      "de": "geboten",
      "lv": "promised / offered"
    }
  },
  {
    "infinitiv": {
      "de": "binden",
      "lv": "to tie"
    },
    "praesens": {
      "de": "er bindet",
      "lv": "he ties"
    },
    "imperfektIndikativ": {
      "de": "er band",
      "lv": "he tied"
    },
    "imperfektKonjunktiv": {
      "de": "er bände",
      "lv": "he would tie"
    },
    "partizipVergangenheit": {
      "de": "gebunden",
      "lv": "tied"
    }
  },
  {
    "infinitiv": {
      "de": "bitten",
      "lv": "to ask"
    },
    "praesens": {
      "de": "er bittet",
      "lv": "he begs"
    },
    "imperfektIndikativ": {
      "de": "er bat",
      "lv": "he asked"
    },
    "imperfektKonjunktiv": {
      "de": "er bäte",
      "lv": "he would ask"
    },
    "partizipVergangenheit": {
      "de": "gebeten",
      "lv": "requested"
    }
  },
  {
    "infinitiv": {
      "de": "blasen",
      "lv": "to blow"
    },
    "praesens": {
      "de": "er bläst",
      "lv": "he blows"
    },
    "imperfektIndikativ": {
      "de": "er blies",
      "lv": "he blew"
    },
    "imperfektKonjunktiv": {
      "de": "er bliese",
      "lv": "he would blow"
    },
    "partizipVergangenheit": {
      "de": "geblasen",
      "lv": "blown"
    }
  },
  {
    "infinitiv": {
      "de": "gären",
      "lv": "to ferment"
    },
    "praesens": {
      "de": "es gärt",
      "lv": "it ferments"
    },
    "imperfektIndikativ": {
      "de": "es gor / es gärte",
      "lv": "it ferments"
    },
    "imperfektKonjunktiv": {
      "de": "es göre / es gärte",
      "lv": "it would ferment"
    },
    "partizipVergangenheit": {
      "de": "gegoren / gegärt",
      "lv": "fermented"
    }
  },
  {
    "infinitiv": {
      "de": "gebären",
      "lv": "to give birth"
    },
    "praesens": {
      "de": "sie gebiert",
      "lv": "she gives birth"
    },
    "imperfektIndikativ": {
      "de": "sie gebar",
      "lv": "she gave birth"
    },
    "imperfektKonjunktiv": {
      "de": "sie gebäre",
      "lv": "she would give birth"
    },
    "partizipVergangenheit": {
      "de": "geboren",
      "lv": "born / was born"
    }
  },
  {
    "infinitiv": {
      "de": "gelingen",
      "lv": "to succeed"
    },
    "praesens": {
      "de": "es gelingt",
      "lv": "it succeeds"
    },
    "imperfektIndikativ": {
      "de": "es gelang",
      "lv": "it worked"
    },
    "imperfektKonjunktiv": {
      "de": "es gelänge",
      "lv": "it would succeed"
    },
    "partizipVergangenheit": {
      "de": "gelungen (es ist)",
      "lv": "succeeded"
    }
  },
  {
    "infinitiv": {
      "de": "gelten",
      "lv": "to be valid / to apply"
    },
    "praesens": {
      "de": "er gilt",
      "lv": "he fits / is valid"
    },
    "imperfektIndikativ": {
      "de": "er galt",
      "lv": "he fit / was fit"
    },
    "imperfektKonjunktiv": {
      "de": "er gölte / es gälte",
      "lv": "he would count / it would be valid"
    },
    "partizipVergangenheit": {
      "de": "gegolten",
      "lv": "applied / was valid"
    }
  },
  {
    "infinitiv": {
      "de": "genesen",
      "lv": "getting well"
    },
    "praesens": {
      "de": "er genest",
      "lv": "he is getting well"
    },
    "imperfektIndikativ": {
      "de": "er genas",
      "lv": "he got well"
    },
    "imperfektKonjunktiv": {
      "de": "er genäse",
      "lv": "he would get well"
    },
    "partizipVergangenheit": {
      "de": "genesen (er ist)",
      "lv": "recovered"
    }
  },
  {
    "infinitiv": {
      "de": "genießen",
      "lv": "to enjoy"
    },
    "praesens": {
      "de": "er genießt",
      "lv": "he enjoys"
    },
    "imperfektIndikativ": {
      "de": "er genoss",
      "lv": "he enjoyed"
    },
    "imperfektKonjunktiv": {
      "de": "er genösse",
      "lv": "he would enjoy"
    },
    "partizipVergangenheit": {
      "de": "genossen",
      "lv": "enjoyed"
    }
  },
  {
    "infinitiv": {
      "de": "geschehen",
      "lv": "to happen"
    },
    "praesens": {
      "de": "es geschieht",
      "lv": "it happens"
    },
    "imperfektIndikativ": {
      "de": "es geschah",
      "lv": "it happened"
    },
    "imperfektKonjunktiv": {
      "de": "es geschähe",
      "lv": "it would happen"
    },
    "partizipVergangenheit": {
      "de": "geschehen (es ist)",
      "lv": "happened"
    }
  },
  {
    "infinitiv": {
      "de": "gießen",
      "lv": "to pour"
    },
    "praesens": {
      "de": "er gießt",
      "lv": "he pours"
    },
    "imperfektIndikativ": {
      "de": "er goss",
      "lv": "he poured"
    },
    "imperfektKonjunktiv": {
      "de": "er gösse",
      "lv": "he would pour"
    },
    "partizipVergangenheit": {
      "de": "gegossen",
      "lv": "poured"
    }
  },
  {
    "infinitiv": {
      "de": "gleichen",
      "lv": "to resemble"
    },
    "praesens": {
      "de": "er gleicht",
      "lv": "he resembles"
    },
    "imperfektIndikativ": {
      "de": "er glich",
      "lv": "he emulated"
    },
    "imperfektKonjunktiv": {
      "de": "er gliche",
      "lv": "he would emulate"
    },
    "partizipVergangenheit": {
      "de": "geglichen",
      "lv": "resembled"
    }
  },
  {
    "infinitiv": {
      "de": "gleiten",
      "lv": "to slide"
    },
    "praesens": {
      "de": "er gleitet",
      "lv": "he slides"
    },
    "imperfektIndikativ": {
      "de": "er glitt",
      "lv": "he was sliding"
    },
    "imperfektKonjunktiv": {
      "de": "er glitte",
      "lv": "he would slide"
    },
    "partizipVergangenheit": {
      "de": "geglitten (er ist)",
      "lv": "slipped"
    }
  },
  {
    "infinitiv": {
      "de": "glimmen",
      "lv": "to glow"
    },
    "praesens": {
      "de": "er glimmt",
      "lv": "he glows"
    },
    "imperfektIndikativ": {
      "de": "er glimmte / glomm",
      "lv": "he glowed"
    },
    "imperfektKonjunktiv": {
      "de": "er glimmte",
      "lv": "he would glow"
    },
    "partizipVergangenheit": {
      "de": "geglimmt / geglommen",
      "lv": "glowing"
    }
  },
  {
    "infinitiv": {
      "de": "graben",
      "lv": "to dig"
    },
    "praesens": {
      "de": "er gräbt",
      "lv": "he digs"
    },
    "imperfektIndikativ": {
      "de": "er grub",
      "lv": "he dug"
    },
    "imperfektKonjunktiv": {
      "de": "er grübe",
      "lv": "he would dig"
    },
    "partizipVergangenheit": {
      "de": "gegraben",
      "lv": "dug"
    }
  },
  {
    "infinitiv": {
      "de": "greifen",
      "lv": "to catch"
    },
    "praesens": {
      "de": "er greift",
      "lv": "he catches"
    },
    "imperfektIndikativ": {
      "de": "er griff",
      "lv": "he caught"
    },
    "imperfektKonjunktiv": {
      "de": "er griffe",
      "lv": "he would catch"
    },
    "partizipVergangenheit": {
      "de": "gegriffen",
      "lv": "caught / grabbed"
    }
  },
  {
    "infinitiv": {
      "de": "hauen",
      "lv": "to chop"
    },
    "praesens": {
      "de": "er haut",
      "lv": "he chops"
    },
    "imperfektIndikativ": {
      "de": "er hieb",
      "lv": "he chopped"
    },
    "imperfektKonjunktiv": {
      "de": "er hiebe",
      "lv": "he would chop"
    },
    "partizipVergangenheit": {
      "de": "gehauen",
      "lv": "chopped"
    }
  },
  {
    "infinitiv": {
      "de": "heben",
      "lv": "to raise"
    },
    "praesens": {
      "de": "er hebt",
      "lv": "he raises"
    },
    "imperfektIndikativ": {
      "de": "er hob",
      "lv": "he raised"
    },
    "imperfektKonjunktiv": {
      "de": "er höbe",
      "lv": "he would raise"
    },
    "partizipVergangenheit": {
      "de": "gehoben",
      "lv": "raised"
    }
  },
  {
    "infinitiv": {
      "de": "kennen",
      "lv": "to know / to know"
    },
    "praesens": {
      "de": "er kennt",
      "lv": "he knows"
    },
    "imperfektIndikativ": {
      "de": "kannte",
      "lv": "he knew"
    },
    "imperfektKonjunktiv": {
      "de": "kannte",
      "lv": "pazina"
    },
    "partizipVergangenheit": {
      "de": "gekannt",
      "lv": "known"
    }
  },
  {
    "infinitiv": {
      "de": "klingen",
      "lv": "to sound"
    },
    "praesens": {
      "de": "er klingt",
      "lv": "he sounds"
    },
    "imperfektIndikativ": {
      "de": "er klang",
      "lv": "he sounded"
    },
    "imperfektKonjunktiv": {
      "de": "er klänge",
      "lv": "he would sound"
    },
    "partizipVergangenheit": {
      "de": "geklungen",
      "lv": "sounded"
    }
  },
  {
    "infinitiv": {
      "de": "kneifen",
      "lv": "to pinch"
    },
    "praesens": {
      "de": "er kneift",
      "lv": "he pinches"
    },
    "imperfektIndikativ": {
      "de": "er kniff",
      "lv": "he pinched"
    },
    "imperfektKonjunktiv": {
      "de": "er kniffe",
      "lv": "he would pinch"
    },
    "partizipVergangenheit": {
      "de": "gekniffen",
      "lv": "pinched"
    }
  },
  {
    "infinitiv": {
      "de": "bleiben",
      "lv": "to stay"
    },
    "praesens": {
      "de": "er bleibt",
      "lv": "he stays"
    },
    "imperfektIndikativ": {
      "de": "er blieb",
      "lv": "he stayed"
    },
    "imperfektKonjunktiv": {
      "de": "er bliebe",
      "lv": "he would stay"
    },
    "partizipVergangenheit": {
      "de": "geblieben (er ist)",
      "lv": "stayed"
    }
  },
  {
    "infinitiv": {
      "de": "bleichen",
      "lv": "whiten"
    },
    "praesens": {
      "de": "er bleicht",
      "lv": "he bleaches"
    },
    "imperfektIndikativ": {
      "de": "blich",
      "lv": "bleached"
    },
    "imperfektKonjunktiv": {
      "de": "blich",
      "lv": "bleached"
    },
    "partizipVergangenheit": {
      "de": "geblichen",
      "lv": "bleached"
    }
  },
  {
    "infinitiv": {
      "de": "braten",
      "lv": "to fry / to roast"
    },
    "praesens": {
      "de": "er brät",
      "lv": "he fries / roasts"
    },
    "imperfektIndikativ": {
      "de": "er briet",
      "lv": "he fried / roasted"
    },
    "imperfektKonjunktiv": {
      "de": "er briete",
      "lv": "he would fry / roast"
    },
    "partizipVergangenheit": {
      "de": "gebraten",
      "lv": "fried / roasted"
    }
  },
  {
    "infinitiv": {
      "de": "brechen",
      "lv": "to break"
    },
    "praesens": {
      "de": "er bricht",
      "lv": "he breaks"
    },
    "imperfektIndikativ": {
      "de": "er brach",
      "lv": "he broke"
    },
    "imperfektKonjunktiv": {
      "de": "er bräche",
      "lv": "he would break"
    },
    "partizipVergangenheit": {
      "de": "gebrochen",
      "lv": "broken"
    }
  },
  {
    "infinitiv": {
      "de": "brennen",
      "lv": "to burn"
    },
    "praesens": {
      "de": "er brennt",
      "lv": "he's on fire"
    },
    "imperfektIndikativ": {
      "de": "brannte",
      "lv": "burned"
    },
    "imperfektKonjunktiv": {
      "de": "brannte",
      "lv": "dega"
    },
    "partizipVergangenheit": {
      "de": "gebrannt",
      "lv": "burned"
    }
  },
  {
    "infinitiv": {
      "de": "bringen",
      "lv": "to bring"
    },
    "praesens": {
      "de": "er bringt",
      "lv": "he brings"
    },
    "imperfektIndikativ": {
      "de": "er brachte",
      "lv": "he brought"
    },
    "imperfektKonjunktiv": {
      "de": "er brächte",
      "lv": "he would bring"
    },
    "partizipVergangenheit": {
      "de": "gebracht",
      "lv": "brought"
    }
  },
  {
    "infinitiv": {
      "de": "denken",
      "lv": "to think"
    },
    "praesens": {
      "de": "er denkt",
      "lv": "he thinks"
    },
    "imperfektIndikativ": {
      "de": "er dachte",
      "lv": "he thought"
    },
    "imperfektKonjunktiv": {
      "de": "er dächte",
      "lv": "he would think"
    },
    "partizipVergangenheit": {
      "de": "gedacht",
      "lv": "intended"
    }
  },
  {
    "infinitiv": {
      "de": "dingen",
      "lv": "to hire / to agree"
    },
    "praesens": {
      "de": "er dingt",
      "lv": "he hires"
    },
    "imperfektIndikativ": {
      "de": "dingte",
      "lv": "hired"
    },
    "imperfektKonjunktiv": {
      "de": "dingte",
      "lv": "hired"
    },
    "partizipVergangenheit": {
      "de": "gedungen",
      "lv": "hired"
    }
  },
  {
    "infinitiv": {
      "de": "dreschen",
      "lv": "to thresh"
    },
    "praesens": {
      "de": "er drischt",
      "lv": "he threshes"
    },
    "imperfektIndikativ": {
      "de": "er drasch / er drosch",
      "lv": "he threshed"
    },
    "imperfektKonjunktiv": {
      "de": "er dräsche / er drösche",
      "lv": "he would thresh"
    },
    "partizipVergangenheit": {
      "de": "gedroschen",
      "lv": "threshed"
    }
  },
  {
    "infinitiv": {
      "de": "dringen",
      "lv": "to break in"
    },
    "praesens": {
      "de": "er dringt",
      "lv": "he breaks in"
    },
    "imperfektIndikativ": {
      "de": "er drang",
      "lv": "he broke in"
    },
    "imperfektKonjunktiv": {
      "de": "er dränge",
      "lv": "he would break in"
    },
    "partizipVergangenheit": {
      "de": "gedrungen (er ist)",
      "lv": "broken in"
    }
  },
  {
    "infinitiv": {
      "de": "dünken",
      "lv": "to seem"
    },
    "praesens": {
      "de": "es dünkt",
      "lv": "it seems"
    },
    "imperfektIndikativ": {
      "de": "deuchte",
      "lv": "it seemed"
    },
    "imperfektKonjunktiv": {
      "de": "deuchte",
      "lv": "it would seem"
    },
    "partizipVergangenheit": {
      "de": "gedünkt",
      "lv": "seemed"
    }
  },
  {
    "infinitiv": {
      "de": "dürfen",
      "lv": "to be allowed"
    },
    "praesens": {
      "de": "er darf",
      "lv": "he can"
    },
    "imperfektIndikativ": {
      "de": "durfte",
      "lv": "was allowed"
    },
    "imperfektKonjunktiv": {
      "de": "durfte",
      "lv": "was allowed"
    },
    "partizipVergangenheit": {
      "de": "gedurft",
      "lv": "allowed"
    }
  },
  {
    "infinitiv": {
      "de": "empfehlen",
      "lv": "to recommend"
    },
    "praesens": {
      "de": "er empfiehlt",
      "lv": "he suggests"
    },
    "imperfektIndikativ": {
      "de": "er empfahl",
      "lv": "he suggested"
    },
    "imperfektKonjunktiv": {
      "de": "er empfähle / er empföhle",
      "lv": "he would recommend"
    },
    "partizipVergangenheit": {
      "de": "empfohlen",
      "lv": "recommended"
    }
  },
  {
    "infinitiv": {
      "de": "empfinden",
      "lv": "to feel"
    },
    "praesens": {
      "de": "er empfindet",
      "lv": "he feels"
    },
    "imperfektIndikativ": {
      "de": "er empfand",
      "lv": "he felt"
    },
    "imperfektKonjunktiv": {
      "de": "er empfände",
      "lv": "he would feel"
    },
    "partizipVergangenheit": {
      "de": "empfunden",
      "lv": "felt"
    }
  },
  {
    "infinitiv": {
      "de": "erlöschen",
      "lv": "to go out"
    },
    "praesens": {
      "de": "er erlischt",
      "lv": "he goes out"
    },
    "imperfektIndikativ": {
      "de": "er erlosch",
      "lv": "he went out"
    },
    "imperfektKonjunktiv": {
      "de": "er erlösche",
      "lv": "he would fade away"
    },
    "partizipVergangenheit": {
      "de": "erloschen (er ist)",
      "lv": "gone out"
    }
  },
  {
    "infinitiv": {
      "de": "erschrecken",
      "lv": "to get frightened"
    },
    "praesens": {
      "de": "er erschrickt",
      "lv": "he gets scared"
    },
    "imperfektIndikativ": {
      "de": "er erschrak",
      "lv": "he got scared"
    },
    "imperfektKonjunktiv": {
      "de": "er erschräke",
      "lv": "he would freak out"
    },
    "partizipVergangenheit": {
      "de": "erschrocken (er ist)",
      "lv": "frightened"
    }
  },
  {
    "infinitiv": {
      "de": "essen",
      "lv": "to eat"
    },
    "praesens": {
      "de": "er isst",
      "lv": "he eats"
    },
    "imperfektIndikativ": {
      "de": "er ass",
      "lv": "he was eating"
    },
    "imperfektKonjunktiv": {
      "de": "er äße",
      "lv": "he would eat"
    },
    "partizipVergangenheit": {
      "de": "gegessen",
      "lv": "eaten / eaten"
    }
  },
  {
    "infinitiv": {
      "de": "fahren",
      "lv": "to drive"
    },
    "praesens": {
      "de": "er fährt",
      "lv": "he drives"
    },
    "imperfektIndikativ": {
      "de": "er fuhr",
      "lv": "he was driving"
    },
    "imperfektKonjunktiv": {
      "de": "er führe",
      "lv": "he would drive"
    },
    "partizipVergangenheit": {
      "de": "gefahren (er ist)",
      "lv": "driven"
    }
  },
  {
    "infinitiv": {
      "de": "fallen",
      "lv": "to fall"
    },
    "praesens": {
      "de": "er fällt",
      "lv": "he falls"
    },
    "imperfektIndikativ": {
      "de": "er fiel",
      "lv": "he fell"
    },
    "imperfektKonjunktiv": {
      "de": "er fiele",
      "lv": "he would fall"
    },
    "partizipVergangenheit": {
      "de": "gefallen (er ist)",
      "lv": "fallen"
    }
  },
  {
    "infinitiv": {
      "de": "fangen",
      "lv": "to catch"
    },
    "praesens": {
      "de": "er fängt",
      "lv": "he catches"
    },
    "imperfektIndikativ": {
      "de": "er fing",
      "lv": "he caught"
    },
    "imperfektKonjunktiv": {
      "de": "er finge",
      "lv": "he would catch"
    },
    "partizipVergangenheit": {
      "de": "gefangen",
      "lv": "caught / caught"
    }
  },
  {
    "infinitiv": {
      "de": "finden",
      "lv": "to find"
    },
    "praesens": {
      "de": "er findet",
      "lv": "he finds"
    },
    "imperfektIndikativ": {
      "de": "er fand",
      "lv": "he found"
    },
    "imperfektKonjunktiv": {
      "de": "er fände",
      "lv": "he would find"
    },
    "partizipVergangenheit": {
      "de": "gefunden",
      "lv": "found"
    }
  },
  {
    "infinitiv": {
      "de": "fliegen",
      "lv": "to fly"
    },
    "praesens": {
      "de": "er fliegt",
      "lv": "he flies"
    },
    "imperfektIndikativ": {
      "de": "er flog",
      "lv": "he flew"
    },
    "imperfektKonjunktiv": {
      "de": "er flöge",
      "lv": "he would fly"
    },
    "partizipVergangenheit": {
      "de": "geflogen (er ist)",
      "lv": "flown"
    }
  },
  {
    "infinitiv": {
      "de": "fliehen",
      "lv": "run away"
    },
    "praesens": {
      "de": "er flieht",
      "lv": "he runs away"
    },
    "imperfektIndikativ": {
      "de": "er floh",
      "lv": "he ran away"
    },
    "imperfektKonjunktiv": {
      "de": "er flöhe",
      "lv": "he would run away"
    },
    "partizipVergangenheit": {
      "de": "geflohen (er ist)",
      "lv": "fled"
    }
  },
  {
    "infinitiv": {
      "de": "fließen",
      "lv": "to flow"
    },
    "praesens": {
      "de": "er fließt",
      "lv": "he flows"
    },
    "imperfektIndikativ": {
      "de": "er floss",
      "lv": "he flowed"
    },
    "imperfektKonjunktiv": {
      "de": "er flösse",
      "lv": "he would flow"
    },
    "partizipVergangenheit": {
      "de": "geflossen (er ist)",
      "lv": "flowed"
    }
  },
  {
    "infinitiv": {
      "de": "fressen",
      "lv": "to eat / to devour"
    },
    "praesens": {
      "de": "er frisst",
      "lv": "he eats / swallows"
    },
    "imperfektIndikativ": {
      "de": "er frass",
      "lv": "he ate / swallowed"
    },
    "imperfektKonjunktiv": {
      "de": "er fräße",
      "lv": "he would eat / breakfast"
    },
    "partizipVergangenheit": {
      "de": "gefressen",
      "lv": "eaten / devoured"
    }
  },
  {
    "infinitiv": {
      "de": "frieren",
      "lv": "to freeze"
    },
    "praesens": {
      "de": "er friert",
      "lv": "he is freezing"
    },
    "imperfektIndikativ": {
      "de": "er fror",
      "lv": "he froze"
    },
    "imperfektKonjunktiv": {
      "de": "er fröre",
      "lv": "he would freeze"
    },
    "partizipVergangenheit": {
      "de": "gefroren",
      "lv": "frozen"
    }
  },
  {
    "infinitiv": {
      "de": "geben",
      "lv": "to give"
    },
    "praesens": {
      "de": "er gibt",
      "lv": "he gives"
    },
    "imperfektIndikativ": {
      "de": "er gab",
      "lv": "he gave"
    },
    "imperfektKonjunktiv": {
      "de": "er gäbe",
      "lv": "he would give"
    },
    "partizipVergangenheit": {
      "de": "gegeben",
      "lv": "given"
    }
  },
  {
    "infinitiv": {
      "de": "gedeihen",
      "lv": "to thrive"
    },
    "praesens": {
      "de": "er gedeiht",
      "lv": "he succeeds"
    },
    "imperfektIndikativ": {
      "de": "er gedieh",
      "lv": "he succeeded"
    },
    "imperfektKonjunktiv": {
      "de": "er gediehe",
      "lv": "he would succeed"
    },
    "partizipVergangenheit": {
      "de": "gediehen (er ist)",
      "lv": "thrived"
    }
  },
  {
    "infinitiv": {
      "de": "gehen",
      "lv": "to go"
    },
    "praesens": {
      "de": "er geht",
      "lv": "he goes"
    },
    "imperfektIndikativ": {
      "de": "er ging",
      "lv": "he walked"
    },
    "imperfektKonjunktiv": {
      "de": "er ginge",
      "lv": "he would go"
    },
    "partizipVergangenheit": {
      "de": "gegangen (er ist)",
      "lv": "gone"
    }
  },
  {
    "infinitiv": {
      "de": "gewinnen",
      "lv": "to obtain"
    },
    "praesens": {
      "de": "er gewinnt",
      "lv": "he gets"
    },
    "imperfektIndikativ": {
      "de": "er gewann",
      "lv": "he got"
    },
    "imperfektKonjunktiv": {
      "de": "er gewönne / er gewänne",
      "lv": "he would get"
    },
    "partizipVergangenheit": {
      "de": "gewonnen",
      "lv": "obtained"
    }
  },
  {
    "infinitiv": {
      "de": "haben",
      "lv": "to have"
    },
    "praesens": {
      "de": "er hat",
      "lv": "he has"
    },
    "imperfektIndikativ": {
      "de": "hatte",
      "lv": "bija"
    },
    "imperfektKonjunktiv": {
      "de": "hatte",
      "lv": "bija"
    },
    "partizipVergangenheit": {
      "de": "gehabt",
      "lv": "had"
    }
  },
  {
    "infinitiv": {
      "de": "halten",
      "lv": "hold"
    },
    "praesens": {
      "de": "er hält",
      "lv": "he holds"
    },
    "imperfektIndikativ": {
      "de": "er hielt",
      "lv": "he held"
    },
    "imperfektKonjunktiv": {
      "de": "er hielte",
      "lv": "he would hold"
    },
    "partizipVergangenheit": {
      "de": "gehalten",
      "lv": "held"
    }
  },
  {
    "infinitiv": {
      "de": "heißen",
      "lv": "to call / to be called"
    },
    "praesens": {
      "de": "er heißt",
      "lv": "he calls / he is called"
    },
    "imperfektIndikativ": {
      "de": "er hieß",
      "lv": "he called / he was called"
    },
    "imperfektKonjunktiv": {
      "de": "er hieße",
      "lv": "he would call / he would be called"
    },
    "partizipVergangenheit": {
      "de": "geheißen",
      "lv": "called"
    }
  },
  {
    "infinitiv": {
      "de": "helfen",
      "lv": "to help"
    },
    "praesens": {
      "de": "er hilft",
      "lv": "he helps"
    },
    "imperfektIndikativ": {
      "de": "er half",
      "lv": "he helped"
    },
    "imperfektKonjunktiv": {
      "de": "er hülfe / er hälfe",
      "lv": "he would help"
    },
    "partizipVergangenheit": {
      "de": "geholfen",
      "lv": "helped"
    }
  },
  {
    "infinitiv": {
      "de": "kommen",
      "lv": "to come"
    },
    "praesens": {
      "de": "er kommt",
      "lv": "he is coming"
    },
    "imperfektIndikativ": {
      "de": "er kam",
      "lv": "he came"
    },
    "imperfektKonjunktiv": {
      "de": "er käme",
      "lv": "he would come"
    },
    "partizipVergangenheit": {
      "de": "gekommen (er ist)",
      "lv": "has come"
    }
  },
  {
    "infinitiv": {
      "de": "können",
      "lv": "be able to"
    },
    "praesens": {
      "de": "er kann",
      "lv": "he can"
    },
    "imperfektIndikativ": {
      "de": "konnte",
      "lv": "could"
    },
    "imperfektKonjunktiv": {
      "de": "konnte",
      "lv": "could"
    },
    "partizipVergangenheit": {
      "de": "gekonnt",
      "lv": "been able to"
    }
  },
  {
    "infinitiv": {
      "de": "kriechen",
      "lv": "to crawl"
    },
    "praesens": {
      "de": "er kriecht",
      "lv": "he crawls"
    },
    "imperfektIndikativ": {
      "de": "er kroch",
      "lv": "he crawled"
    },
    "imperfektKonjunktiv": {
      "de": "er kröche",
      "lv": "he would crawl"
    },
    "partizipVergangenheit": {
      "de": "gekrochen (er ist)",
      "lv": "crawled"
    }
  },
  {
    "infinitiv": {
      "de": "laden",
      "lv": "to load, to invite"
    },
    "praesens": {
      "de": "er lädt",
      "lv": "he piles / invites"
    },
    "imperfektIndikativ": {
      "de": "er lud",
      "lv": "he loaded / invited"
    },
    "imperfektKonjunktiv": {
      "de": "er lüde",
      "lv": "he would load / invite"
    },
    "partizipVergangenheit": {
      "de": "geladen",
      "lv": "loaded / invited"
    }
  },
  {
    "infinitiv": {
      "de": "lassen",
      "lv": "to put, to let"
    },
    "praesens": {
      "de": "er lässt",
      "lv": "he puts / lets"
    },
    "imperfektIndikativ": {
      "de": "er ließ",
      "lv": "he ordered / allowed"
    },
    "imperfektKonjunktiv": {
      "de": "er ließe",
      "lv": "he would put / let"
    },
    "partizipVergangenheit": {
      "de": "gelassen",
      "lv": "put / allowed"
    }
  },
  {
    "infinitiv": {
      "de": "laufen",
      "lv": "to run"
    },
    "praesens": {
      "de": "er läuft",
      "lv": "he is running"
    },
    "imperfektIndikativ": {
      "de": "er lief",
      "lv": "he ran"
    },
    "imperfektKonjunktiv": {
      "de": "er liefe",
      "lv": "he would run"
    },
    "partizipVergangenheit": {
      "de": "gelaufen (er ist)",
      "lv": "ran"
    }
  },
  {
    "infinitiv": {
      "de": "leiden",
      "lv": "to suffer"
    },
    "praesens": {
      "de": "er leidet",
      "lv": "he suffers"
    },
    "imperfektIndikativ": {
      "de": "er litt",
      "lv": "he suffered"
    },
    "imperfektKonjunktiv": {
      "de": "er litte",
      "lv": "he would suffer"
    },
    "partizipVergangenheit": {
      "de": "gelitten",
      "lv": "suffered"
    }
  },
  {
    "infinitiv": {
      "de": "leihen",
      "lv": "lend / borrow"
    },
    "praesens": {
      "de": "er leiht",
      "lv": "he lends / borrows"
    },
    "imperfektIndikativ": {
      "de": "er lieh",
      "lv": "he lent / borrowed"
    },
    "imperfektKonjunktiv": {
      "de": "er liehe",
      "lv": "he would lend / borrow"
    },
    "partizipVergangenheit": {
      "de": "geliehen",
      "lv": "lent / borrowed"
    }
  },
  {
    "infinitiv": {
      "de": "lesen",
      "lv": "to read"
    },
    "praesens": {
      "de": "er liest",
      "lv": "he is reading"
    },
    "imperfektIndikativ": {
      "de": "er las",
      "lv": "he was reading"
    },
    "imperfektKonjunktiv": {
      "de": "er läse",
      "lv": "he would read"
    },
    "partizipVergangenheit": {
      "de": "gelesen",
      "lv": "read"
    }
  },
  {
    "infinitiv": {
      "de": "liegen",
      "lv": "to lie"
    },
    "praesens": {
      "de": "er liegt",
      "lv": "he lies"
    },
    "imperfektIndikativ": {
      "de": "er lag",
      "lv": "he lay"
    },
    "imperfektKonjunktiv": {
      "de": "er läge",
      "lv": "he would lie"
    },
    "partizipVergangenheit": {
      "de": "gelegen",
      "lv": "lain"
    }
  },
  {
    "infinitiv": {
      "de": "lügen",
      "lv": "to lie"
    },
    "praesens": {
      "de": "er lügt",
      "lv": "he is lying"
    },
    "imperfektIndikativ": {
      "de": "er log",
      "lv": "he lied"
    },
    "imperfektKonjunktiv": {
      "de": "er löge",
      "lv": "he would lie"
    },
    "partizipVergangenheit": {
      "de": "gelogen",
      "lv": "lied"
    }
  },
  {
    "infinitiv": {
      "de": "mahlen",
      "lv": "to grind"
    },
    "praesens": {
      "de": "er mahlt",
      "lv": "he grinds"
    },
    "imperfektIndikativ": {
      "de": "er mahlte",
      "lv": "he ground"
    },
    "imperfektKonjunktiv": {
      "de": "er malte",
      "lv": "he grinds"
    },
    "partizipVergangenheit": {
      "de": "gemahlen",
      "lv": "ground"
    }
  },
  {
    "infinitiv": {
      "de": "meiden",
      "lv": "avoid"
    },
    "praesens": {
      "de": "er meidet",
      "lv": "he avoids"
    },
    "imperfektIndikativ": {
      "de": "er mied",
      "lv": "he avoided"
    },
    "imperfektKonjunktiv": {
      "de": "er miede",
      "lv": "he would avoid"
    },
    "partizipVergangenheit": {
      "de": "gemieden",
      "lv": "avoided"
    }
  },
  {
    "infinitiv": {
      "de": "melken",
      "lv": "to milk"
    },
    "praesens": {
      "de": "er milkt / er melkt",
      "lv": "he milks"
    },
    "imperfektIndikativ": {
      "de": "er molk / er melkte",
      "lv": "he milked"
    },
    "imperfektKonjunktiv": {
      "de": "er mölke / er melkte",
      "lv": "he would milk"
    },
    "partizipVergangenheit": {
      "de": "gemolken / gemelkt",
      "lv": "milked"
    }
  },
  {
    "infinitiv": {
      "de": "messen",
      "lv": "to measure"
    },
    "praesens": {
      "de": "er misst",
      "lv": "he measures"
    },
    "imperfektIndikativ": {
      "de": "er mass",
      "lv": "he measured"
    },
    "imperfektKonjunktiv": {
      "de": "er mäße",
      "lv": "he would measure"
    },
    "partizipVergangenheit": {
      "de": "gemessen",
      "lv": "measured"
    }
  },
  {
    "infinitiv": {
      "de": "misslingen",
      "lv": "to fail"
    },
    "praesens": {
      "de": "es misslingt",
      "lv": "it fails"
    },
    "imperfektIndikativ": {
      "de": "misslang",
      "lv": "failed"
    },
    "imperfektKonjunktiv": {
      "de": "misslang",
      "lv": "failed"
    },
    "partizipVergangenheit": {
      "de": "misslungen",
      "lv": "failed"
    }
  },
  {
    "infinitiv": {
      "de": "mögen",
      "lv": "to like"
    },
    "praesens": {
      "de": "er mag",
      "lv": "he likes"
    },
    "imperfektIndikativ": {
      "de": "mochte",
      "lv": "liked"
    },
    "imperfektKonjunktiv": {
      "de": "mochte",
      "lv": "patika"
    },
    "partizipVergangenheit": {
      "de": "gemocht",
      "lv": "liked"
    }
  },
  {
    "infinitiv": {
      "de": "müssen",
      "lv": "to need"
    },
    "praesens": {
      "de": "er muss",
      "lv": "he needs"
    },
    "imperfektIndikativ": {
      "de": "musste",
      "lv": "had to"
    },
    "imperfektKonjunktiv": {
      "de": "musste",
      "lv": "should have"
    },
    "partizipVergangenheit": {
      "de": "gemusst",
      "lv": "needed"
    }
  },
  {
    "infinitiv": {
      "de": "nehmen",
      "lv": "to take"
    },
    "praesens": {
      "de": "er nimmt",
      "lv": "he takes"
    },
    "imperfektIndikativ": {
      "de": "er nahm",
      "lv": "he took"
    },
    "imperfektKonjunktiv": {
      "de": "er nähme",
      "lv": "he would take"
    },
    "partizipVergangenheit": {
      "de": "genommen",
      "lv": "taken"
    }
  },
  {
    "infinitiv": {
      "de": "nennen",
      "lv": "to name"
    },
    "praesens": {
      "de": "er nennt",
      "lv": "he names"
    },
    "imperfektIndikativ": {
      "de": "er nannte",
      "lv": "he called"
    },
    "imperfektKonjunktiv": {
      "de": "er nennte",
      "lv": "he would name"
    },
    "partizipVergangenheit": {
      "de": "genannt",
      "lv": "nosaukts"
    }
  },
  {
    "infinitiv": {
      "de": "pfeifen",
      "lv": "to whistle"
    },
    "praesens": {
      "de": "er pfeift",
      "lv": "he whistles"
    },
    "imperfektIndikativ": {
      "de": "er pfiff",
      "lv": "he whistled"
    },
    "imperfektKonjunktiv": {
      "de": "er pfiffe",
      "lv": "he would whistle"
    },
    "partizipVergangenheit": {
      "de": "gepfiffen",
      "lv": "svilpots"
    }
  },
  {
    "infinitiv": {
      "de": "pflegen",
      "lv": "to care for"
    },
    "praesens": {
      "de": "er pflegt",
      "lv": "he cares"
    },
    "imperfektIndikativ": {
      "de": "pflegte vai pflog",
      "lv": "cared for"
    },
    "imperfektKonjunktiv": {
      "de": "pflegte vai pflog",
      "lv": "kopa"
    },
    "partizipVergangenheit": {
      "de": "gepflegt vai gepflogen",
      "lv": "cared for"
    }
  },
  {
    "infinitiv": {
      "de": "preisen",
      "lv": "praise"
    },
    "praesens": {
      "de": "er preist",
      "lv": "he praises"
    },
    "imperfektIndikativ": {
      "de": "er pries",
      "lv": "he praised"
    },
    "imperfektKonjunktiv": {
      "de": "er priese",
      "lv": "he would praise"
    },
    "partizipVergangenheit": {
      "de": "gepriesen",
      "lv": "praised"
    }
  },
  {
    "infinitiv": {
      "de": "quellen",
      "lv": "to swell"
    },
    "praesens": {
      "de": "er quillt",
      "lv": "he swells"
    },
    "imperfektIndikativ": {
      "de": "er quoll",
      "lv": "he swelled"
    },
    "imperfektKonjunktiv": {
      "de": "er quölle",
      "lv": "he would swell"
    },
    "partizipVergangenheit": {
      "de": "gequollen (er ist)",
      "lv": "swollen"
    }
  },
  {
    "infinitiv": {
      "de": "raten",
      "lv": "to advise / to guess"
    },
    "praesens": {
      "de": "er rät",
      "lv": "he advises / he guesses"
    },
    "imperfektIndikativ": {
      "de": "er riet",
      "lv": "he advised / he guessed"
    },
    "imperfektKonjunktiv": {
      "de": "er riete",
      "lv": "he would advise / he would guess"
    },
    "partizipVergangenheit": {
      "de": "geraten",
      "lv": "advised / guessed"
    }
  },
  {
    "infinitiv": {
      "de": "reiben",
      "lv": "to rub"
    },
    "praesens": {
      "de": "er reibt",
      "lv": "he rubs"
    },
    "imperfektIndikativ": {
      "de": "er rieb",
      "lv": "he rubbed"
    },
    "imperfektKonjunktiv": {
      "de": "er riebe",
      "lv": "he would rub"
    },
    "partizipVergangenheit": {
      "de": "gerieben",
      "lv": "rubbed"
    }
  },
  {
    "infinitiv": {
      "de": "reißen",
      "lv": "to tear"
    },
    "praesens": {
      "de": "er reißt",
      "lv": "he snaps"
    },
    "imperfektIndikativ": {
      "de": "er riss",
      "lv": "he snapped"
    },
    "imperfektKonjunktiv": {
      "de": "er risse",
      "lv": "he would tear"
    },
    "partizipVergangenheit": {
      "de": "gerissen",
      "lv": "torn"
    }
  },
  {
    "infinitiv": {
      "de": "reiten",
      "lv": "to ride"
    },
    "praesens": {
      "de": "er reitet",
      "lv": "he rides"
    },
    "imperfektIndikativ": {
      "de": "er ritt",
      "lv": "he rode"
    },
    "imperfektKonjunktiv": {
      "de": "er ritte",
      "lv": "he would ride"
    },
    "partizipVergangenheit": {
      "de": "geritten (er ist)",
      "lv": "ridden"
    }
  },
  {
    "infinitiv": {
      "de": "rennen",
      "lv": "to run"
    },
    "praesens": {
      "de": "er rennt",
      "lv": "he is running"
    },
    "imperfektIndikativ": {
      "de": "er rannte",
      "lv": "he ran"
    },
    "imperfektKonjunktiv": {
      "de": "er rennte",
      "lv": "he would run"
    },
    "partizipVergangenheit": {
      "de": "gerannt",
      "lv": "run"
    }
  },
  {
    "infinitiv": {
      "de": "riechen",
      "lv": "to smell"
    },
    "praesens": {
      "de": "er riecht",
      "lv": "he smells"
    },
    "imperfektIndikativ": {
      "de": "er roch",
      "lv": "he smelled"
    },
    "imperfektKonjunktiv": {
      "de": "er röche",
      "lv": "he would smell"
    },
    "partizipVergangenheit": {
      "de": "gerochen",
      "lv": "smelled"
    }
  },
  {
    "infinitiv": {
      "de": "ringen",
      "lv": "to wrestle"
    },
    "praesens": {
      "de": "er ringt",
      "lv": "he wrestles"
    },
    "imperfektIndikativ": {
      "de": "er rang",
      "lv": "he wrestled"
    },
    "imperfektKonjunktiv": {
      "de": "er ränge",
      "lv": "he would wrestle"
    },
    "partizipVergangenheit": {
      "de": "gerungen",
      "lv": "wrestled"
    }
  },
  {
    "infinitiv": {
      "de": "rinnen",
      "lv": "to flow"
    },
    "praesens": {
      "de": "er rinnt",
      "lv": "he flows"
    },
    "imperfektIndikativ": {
      "de": "er rann",
      "lv": "he flowed"
    },
    "imperfektKonjunktiv": {
      "de": "er ränne / er rönne",
      "lv": "he would flow"
    },
    "partizipVergangenheit": {
      "de": "geronnen (er ist)",
      "lv": "flowed / coagulated"
    }
  },
  {
    "infinitiv": {
      "de": "rufen",
      "lv": "to call"
    },
    "praesens": {
      "de": "er ruft",
      "lv": "he calls"
    },
    "imperfektIndikativ": {
      "de": "er rief",
      "lv": "he called"
    },
    "imperfektKonjunktiv": {
      "de": "er riefe",
      "lv": "he would call"
    },
    "partizipVergangenheit": {
      "de": "gerufen",
      "lv": "called"
    }
  },
  {
    "infinitiv": {
      "de": "salzen",
      "lv": "to salt"
    },
    "praesens": {
      "de": "er salzt",
      "lv": "he salts"
    },
    "imperfektIndikativ": {
      "de": "er salzte",
      "lv": "he salted"
    },
    "imperfektKonjunktiv": {
      "de": "er salzte",
      "lv": "he would salt"
    },
    "partizipVergangenheit": {
      "de": "gesalzen",
      "lv": "salted"
    }
  },
  {
    "infinitiv": {
      "de": "saufen",
      "lv": "to drink heavily"
    },
    "praesens": {
      "de": "er säuft",
      "lv": "he is drinking / drinking"
    },
    "imperfektIndikativ": {
      "de": "er soff",
      "lv": "he drank / drank"
    },
    "imperfektKonjunktiv": {
      "de": "er söffe",
      "lv": "he would drink heavily"
    },
    "partizipVergangenheit": {
      "de": "gesoffen",
      "lv": "drunk"
    }
  },
  {
    "infinitiv": {
      "de": "saugen",
      "lv": "suck"
    },
    "praesens": {
      "de": "er saugt",
      "lv": "he sucks"
    },
    "imperfektIndikativ": {
      "de": "er sog",
      "lv": "he sucked"
    },
    "imperfektKonjunktiv": {
      "de": "er söge",
      "lv": "he would suck"
    },
    "partizipVergangenheit": {
      "de": "gesogen",
      "lv": "sucked"
    }
  },
  {
    "infinitiv": {
      "de": "schaffen",
      "lv": "to create"
    },
    "praesens": {
      "de": "er schafft",
      "lv": "he creates"
    },
    "imperfektIndikativ": {
      "de": "er schuf",
      "lv": "he created"
    },
    "imperfektKonjunktiv": {
      "de": "er schüfe",
      "lv": "he would create"
    },
    "partizipVergangenheit": {
      "de": "geschaffen",
      "lv": "created"
    }
  },
  {
    "infinitiv": {
      "de": "schallen",
      "lv": "to sound"
    },
    "praesens": {
      "de": "es schallt",
      "lv": "it sounds"
    },
    "imperfektIndikativ": {
      "de": "schallte vai scholl",
      "lv": "sounded"
    },
    "imperfektKonjunktiv": {
      "de": "schallte vai scholl",
      "lv": "sounded"
    },
    "partizipVergangenheit": {
      "de": "geschallt",
      "lv": "sounded"
    }
  },
  {
    "infinitiv": {
      "de": "scheiden",
      "lv": "divorce / break up"
    },
    "praesens": {
      "de": "er scheidet",
      "lv": "he is divorcing / divorcing"
    },
    "imperfektIndikativ": {
      "de": "er schied",
      "lv": "he divorced / divorced"
    },
    "imperfektKonjunktiv": {
      "de": "er schiede",
      "lv": "he would divorce / he would separate"
    },
    "partizipVergangenheit": {
      "de": "geschieden (er hat / er ist)",
      "lv": "separated / divorced"
    }
  },
  {
    "infinitiv": {
      "de": "scheinen",
      "lv": "shine / appear"
    },
    "praesens": {
      "de": "er scheint",
      "lv": "he shines / seems"
    },
    "imperfektIndikativ": {
      "de": "er schien",
      "lv": "he shone / seemed"
    },
    "imperfektKonjunktiv": {
      "de": "er schiene",
      "lv": "he would shine / seem"
    },
    "partizipVergangenheit": {
      "de": "geschienen",
      "lv": "shone / seemed"
    }
  },
  {
    "infinitiv": {
      "de": "schelten",
      "lv": "to scold"
    },
    "praesens": {
      "de": "er schilt",
      "lv": "he scolds"
    },
    "imperfektIndikativ": {
      "de": "er schalt",
      "lv": "he scolded"
    },
    "imperfektKonjunktiv": {
      "de": "er schölte / er schälte",
      "lv": "he would scold"
    },
    "partizipVergangenheit": {
      "de": "gescholten",
      "lv": "scolded"
    }
  },
  {
    "infinitiv": {
      "de": "scheren",
      "lv": "to shear"
    },
    "praesens": {
      "de": "er schert",
      "lv": "he shears"
    },
    "imperfektIndikativ": {
      "de": "schor vai scherte",
      "lv": "he sheared"
    },
    "imperfektKonjunktiv": {
      "de": "schor vai scherte",
      "lv": "cirpa"
    },
    "partizipVergangenheit": {
      "de": "geschoren vai geschert",
      "lv": "shorn / sheared"
    }
  },
  {
    "infinitiv": {
      "de": "schieben",
      "lv": "to push"
    },
    "praesens": {
      "de": "er schiebt",
      "lv": "he pushes"
    },
    "imperfektIndikativ": {
      "de": "er schob",
      "lv": "he pushed"
    },
    "imperfektKonjunktiv": {
      "de": "er schöbe",
      "lv": "he would push"
    },
    "partizipVergangenheit": {
      "de": "geschoben",
      "lv": "pushed"
    }
  },
  {
    "infinitiv": {
      "de": "schießen",
      "lv": "to shoot"
    },
    "praesens": {
      "de": "er schießt",
      "lv": "he shoots"
    },
    "imperfektIndikativ": {
      "de": "er schoss",
      "lv": "he shot"
    },
    "imperfektKonjunktiv": {
      "de": "er schösse",
      "lv": "he would shoot"
    },
    "partizipVergangenheit": {
      "de": "geschossen",
      "lv": "shot"
    }
  },
  {
    "infinitiv": {
      "de": "schinden",
      "lv": "torment"
    },
    "praesens": {
      "de": "er schindet",
      "lv": "he torments"
    },
    "imperfektIndikativ": {
      "de": "schindete",
      "lv": "tormented"
    },
    "imperfektKonjunktiv": {
      "de": "schindete",
      "lv": "would torment"
    },
    "partizipVergangenheit": {
      "de": "geschunden",
      "lv": "tormented"
    }
  },
  {
    "infinitiv": {
      "de": "schlafen",
      "lv": "to sleep"
    },
    "praesens": {
      "de": "er schläft",
      "lv": "he is sleeping"
    },
    "imperfektIndikativ": {
      "de": "er schlief",
      "lv": "he was sleeping"
    },
    "imperfektKonjunktiv": {
      "de": "er schliefe",
      "lv": "he would sleep"
    },
    "partizipVergangenheit": {
      "de": "geschlafen",
      "lv": "slept"
    }
  },
  {
    "infinitiv": {
      "de": "schlagen",
      "lv": "sist"
    },
    "praesens": {
      "de": "er schlägt",
      "lv": "he hits"
    },
    "imperfektIndikativ": {
      "de": "er schlug",
      "lv": "he hit"
    },
    "imperfektKonjunktiv": {
      "de": "er schlüge",
      "lv": "he would hit"
    },
    "partizipVergangenheit": {
      "de": "geschlagen",
      "lv": "hit"
    }
  },
  {
    "infinitiv": {
      "de": "schleichen",
      "lv": "to creep"
    },
    "praesens": {
      "de": "er schleicht",
      "lv": "he creeps"
    },
    "imperfektIndikativ": {
      "de": "er schlich",
      "lv": "he crept"
    },
    "imperfektKonjunktiv": {
      "de": "er schliche",
      "lv": "he would creep"
    },
    "partizipVergangenheit": {
      "de": "geschlichen (er ist)",
      "lv": "crept"
    }
  },
  {
    "infinitiv": {
      "de": "schleifen",
      "lv": "to grind"
    },
    "praesens": {
      "de": "er schleift",
      "lv": "he grinds"
    },
    "imperfektIndikativ": {
      "de": "er schliff",
      "lv": "he grinded"
    },
    "imperfektKonjunktiv": {
      "de": "er schliffe",
      "lv": "he would grind"
    },
    "partizipVergangenheit": {
      "de": "geschliffen",
      "lv": "polished"
    }
  },
  {
    "infinitiv": {
      "de": "schließen",
      "lv": "to close"
    },
    "praesens": {
      "de": "er schließt",
      "lv": "he closes"
    },
    "imperfektIndikativ": {
      "de": "er schloss",
      "lv": "he closed"
    },
    "imperfektKonjunktiv": {
      "de": "er schlösse",
      "lv": "he would close"
    },
    "partizipVergangenheit": {
      "de": "geschlossen",
      "lv": "closed"
    }
  },
  {
    "infinitiv": {
      "de": "schlingen",
      "lv": "to swallow"
    },
    "praesens": {
      "de": "er schlingt",
      "lv": "he swallows"
    },
    "imperfektIndikativ": {
      "de": "er schlang",
      "lv": "he swallowed"
    },
    "imperfektKonjunktiv": {
      "de": "er schlänge",
      "lv": "he would swallow"
    },
    "partizipVergangenheit": {
      "de": "geschlungen",
      "lv": "swallowed"
    }
  },
  {
    "infinitiv": {
      "de": "schmeißen",
      "lv": "to throw"
    },
    "praesens": {
      "de": "er schmeißt",
      "lv": "he throws"
    },
    "imperfektIndikativ": {
      "de": "er schmiss",
      "lv": "he threw"
    },
    "imperfektKonjunktiv": {
      "de": "er schmisse",
      "lv": "he would throw"
    },
    "partizipVergangenheit": {
      "de": "geschmissen",
      "lv": "thrown"
    }
  },
  {
    "infinitiv": {
      "de": "schmelzen",
      "lv": "to melt"
    },
    "praesens": {
      "de": "er schmilzt",
      "lv": "he melts"
    },
    "imperfektIndikativ": {
      "de": "er schmolz",
      "lv": "he melted"
    },
    "imperfektKonjunktiv": {
      "de": "er schmölze",
      "lv": "he would melt"
    },
    "partizipVergangenheit": {
      "de": "geschmolzen (er ist)",
      "lv": "melted"
    }
  },
  {
    "infinitiv": {
      "de": "schnauben",
      "lv": "to snort"
    },
    "praesens": {
      "de": "er schnaubt",
      "lv": "he snorts"
    },
    "imperfektIndikativ": {
      "de": "schnaubte vai schnob",
      "lv": "snorted"
    },
    "imperfektKonjunktiv": {
      "de": "schnaubte vai schnob",
      "lv": "snorted"
    },
    "partizipVergangenheit": {
      "de": "geschnaubt vai geschnoben",
      "lv": "snort"
    }
  },
  {
    "infinitiv": {
      "de": "schneiden",
      "lv": "to cut"
    },
    "praesens": {
      "de": "er schneidet",
      "lv": "he cuts"
    },
    "imperfektIndikativ": {
      "de": "er schnitt",
      "lv": "he was cutting"
    },
    "imperfektKonjunktiv": {
      "de": "er schnitte",
      "lv": "he would cut"
    },
    "partizipVergangenheit": {
      "de": "geschnitten",
      "lv": "cut"
    }
  },
  {
    "infinitiv": {
      "de": "schreiben",
      "lv": "to write"
    },
    "praesens": {
      "de": "er schreibt",
      "lv": "he writes"
    },
    "imperfektIndikativ": {
      "de": "er schrieb",
      "lv": "he wrote"
    },
    "imperfektKonjunktiv": {
      "de": "er schriebe",
      "lv": "he would write"
    },
    "partizipVergangenheit": {
      "de": "geschrieben",
      "lv": "written"
    }
  },
  {
    "infinitiv": {
      "de": "schreien",
      "lv": "to shout"
    },
    "praesens": {
      "de": "er schreit",
      "lv": "he shouts"
    },
    "imperfektIndikativ": {
      "de": "er schrie",
      "lv": "he shouted"
    },
    "imperfektKonjunktiv": {
      "de": "er schriee",
      "lv": "he would shout"
    },
    "partizipVergangenheit": {
      "de": "geschrien",
      "lv": "shouted"
    }
  },
  {
    "infinitiv": {
      "de": "schreiten",
      "lv": "walking"
    },
    "praesens": {
      "de": "er schreitet",
      "lv": "he is walking"
    },
    "imperfektIndikativ": {
      "de": "er schritt",
      "lv": "he was walking"
    },
    "imperfektKonjunktiv": {
      "de": "er schritte",
      "lv": "he would walk"
    },
    "partizipVergangenheit": {
      "de": "geschritten (er ist)",
      "lv": "walked"
    }
  },
  {
    "infinitiv": {
      "de": "schweigen",
      "lv": "keep quiet"
    },
    "praesens": {
      "de": "er schweigt",
      "lv": "he is silent"
    },
    "imperfektIndikativ": {
      "de": "er schwieg",
      "lv": "he was silent"
    },
    "imperfektKonjunktiv": {
      "de": "er schwiege",
      "lv": "he would be silent"
    },
    "partizipVergangenheit": {
      "de": "geschwiegen",
      "lv": "silenced"
    }
  },
  {
    "infinitiv": {
      "de": "schwellen",
      "lv": "to swell"
    },
    "praesens": {
      "de": "er schwillt",
      "lv": "he swells"
    },
    "imperfektIndikativ": {
      "de": "er schwoll",
      "lv": "he swelled"
    },
    "imperfektKonjunktiv": {
      "de": "er schwölle",
      "lv": "he would swell"
    },
    "partizipVergangenheit": {
      "de": "geschwollen (er ist)",
      "lv": "swollen"
    }
  },
  {
    "infinitiv": {
      "de": "schwimmen",
      "lv": "to swim"
    },
    "praesens": {
      "de": "er schwimmt",
      "lv": "he swims"
    },
    "imperfektIndikativ": {
      "de": "er schwamm",
      "lv": "he was swimming"
    },
    "imperfektKonjunktiv": {
      "de": "er schwömme / er schwämme",
      "lv": "he would swim"
    },
    "partizipVergangenheit": {
      "de": "geschwommen (er ist)",
      "lv": "swam"
    }
  },
  {
    "infinitiv": {
      "de": "schwinden",
      "lv": "to disappear"
    },
    "praesens": {
      "de": "er schwindet",
      "lv": "he disappears"
    },
    "imperfektIndikativ": {
      "de": "er schwand",
      "lv": "he disappeared"
    },
    "imperfektKonjunktiv": {
      "de": "er schwände",
      "lv": "he would disappear"
    },
    "partizipVergangenheit": {
      "de": "geschwunden (er ist)",
      "lv": "disappeared"
    }
  },
  {
    "infinitiv": {
      "de": "schwingen",
      "lv": "wave"
    },
    "praesens": {
      "de": "er schwingt",
      "lv": "he waves"
    },
    "imperfektIndikativ": {
      "de": "er schwang",
      "lv": "he waved"
    },
    "imperfektKonjunktiv": {
      "de": "er schwänge",
      "lv": "he would wave"
    },
    "partizipVergangenheit": {
      "de": "geschwungen",
      "lv": "waved"
    }
  },
  {
    "infinitiv": {
      "de": "schwören",
      "lv": "to swear"
    },
    "praesens": {
      "de": "er schwört",
      "lv": "he swears"
    },
    "imperfektIndikativ": {
      "de": "er schwur / er schwor",
      "lv": "he swore"
    },
    "imperfektKonjunktiv": {
      "de": "er schwöre",
      "lv": "he would swear"
    },
    "partizipVergangenheit": {
      "de": "geschworen",
      "lv": "sworn"
    }
  },
  {
    "infinitiv": {
      "de": "sehen",
      "lv": "to see"
    },
    "praesens": {
      "de": "er sieht",
      "lv": "he sees"
    },
    "imperfektIndikativ": {
      "de": "er sah",
      "lv": "he saw"
    },
    "imperfektKonjunktiv": {
      "de": "er sähe",
      "lv": "he would see"
    },
    "partizipVergangenheit": {
      "de": "gesehen",
      "lv": "seen"
    }
  },
  {
    "infinitiv": {
      "de": "sein",
      "lv": "to be"
    },
    "praesens": {
      "de": "er ist",
      "lv": "he is"
    },
    "imperfektIndikativ": {
      "de": "war",
      "lv": "he was"
    },
    "imperfektKonjunktiv": {
      "de": "war",
      "lv": "bija"
    },
    "partizipVergangenheit": {
      "de": "gewesen",
      "lv": "been"
    }
  },
  {
    "infinitiv": {
      "de": "senden",
      "lv": "to send"
    },
    "praesens": {
      "de": "er sendet",
      "lv": "he sends"
    },
    "imperfektIndikativ": {
      "de": "er sandte / er sendete",
      "lv": "he sent"
    },
    "imperfektKonjunktiv": {
      "de": "er sendete",
      "lv": "he would send"
    },
    "partizipVergangenheit": {
      "de": "gesandt / gesendet",
      "lv": "sent"
    }
  },
  {
    "infinitiv": {
      "de": "sieden",
      "lv": "to boil"
    },
    "praesens": {
      "de": "er siedet",
      "lv": "he boils"
    },
    "imperfektIndikativ": {
      "de": "sott vai siedete",
      "lv": "cooked"
    },
    "imperfektKonjunktiv": {
      "de": "sott vai siedete",
      "lv": "cooked"
    },
    "partizipVergangenheit": {
      "de": "gesotten vai gesiedet",
      "lv": "boiled"
    }
  },
  {
    "infinitiv": {
      "de": "singen",
      "lv": "to sing"
    },
    "praesens": {
      "de": "er singt",
      "lv": "he sings"
    },
    "imperfektIndikativ": {
      "de": "er sang",
      "lv": "he sang"
    },
    "imperfektKonjunktiv": {
      "de": "er sänge",
      "lv": "he would sing"
    },
    "partizipVergangenheit": {
      "de": "gesungen",
      "lv": "sung"
    }
  },
  {
    "infinitiv": {
      "de": "sinken",
      "lv": "to sink"
    },
    "praesens": {
      "de": "er sinkt",
      "lv": "he is sinking"
    },
    "imperfektIndikativ": {
      "de": "er sank",
      "lv": "he sank"
    },
    "imperfektKonjunktiv": {
      "de": "er sänke",
      "lv": "he would sink"
    },
    "partizipVergangenheit": {
      "de": "gesunken (er ist)",
      "lv": "sunk"
    }
  },
  {
    "infinitiv": {
      "de": "sinnen",
      "lv": "to wonder"
    },
    "praesens": {
      "de": "er sinnt",
      "lv": "he wonders"
    },
    "imperfektIndikativ": {
      "de": "er sann",
      "lv": "he wondered"
    },
    "imperfektKonjunktiv": {
      "de": "er sönne / er sänne",
      "lv": "he would wonder"
    },
    "partizipVergangenheit": {
      "de": "gesonnen",
      "lv": "minded"
    }
  },
  {
    "infinitiv": {
      "de": "sitzen",
      "lv": "to sit"
    },
    "praesens": {
      "de": "er sitzt",
      "lv": "he is sitting"
    },
    "imperfektIndikativ": {
      "de": "er sass",
      "lv": "he was sitting"
    },
    "imperfektKonjunktiv": {
      "de": "er säße",
      "lv": "he would sit"
    },
    "partizipVergangenheit": {
      "de": "gesessen",
      "lv": "sat down"
    }
  },
  {
    "infinitiv": {
      "de": "sollen",
      "lv": "need / be obliged"
    },
    "praesens": {
      "de": "er soll",
      "lv": "he should / he is supposed to"
    },
    "imperfektIndikativ": {
      "de": "sollte",
      "lv": "he was supposed to"
    },
    "imperfektKonjunktiv": {
      "de": "sollte",
      "lv": "he should"
    },
    "partizipVergangenheit": {
      "de": "gesollt",
      "lv": "needed"
    }
  },
  {
    "infinitiv": {
      "de": "speien",
      "lv": "to spit"
    },
    "praesens": {
      "de": "er speit",
      "lv": "he spits"
    },
    "imperfektIndikativ": {
      "de": "er spie",
      "lv": "he spat"
    },
    "imperfektKonjunktiv": {
      "de": "er spie",
      "lv": "he would spit"
    },
    "partizipVergangenheit": {
      "de": "gespien",
      "lv": "spat out"
    }
  },
  {
    "infinitiv": {
      "de": "spinnen",
      "lv": "spin"
    },
    "praesens": {
      "de": "er spinnt",
      "lv": "he twists"
    },
    "imperfektIndikativ": {
      "de": "er spann",
      "lv": "he spun"
    },
    "imperfektKonjunktiv": {
      "de": "er spönne / er spänne",
      "lv": "he would spin"
    },
    "partizipVergangenheit": {
      "de": "gesponnen",
      "lv": "spun"
    }
  },
  {
    "infinitiv": {
      "de": "spleißen",
      "lv": "to splice"
    },
    "praesens": {
      "de": "er spleißt",
      "lv": "he connects"
    },
    "imperfektIndikativ": {
      "de": "spliss",
      "lv": "spliced"
    },
    "imperfektKonjunktiv": {
      "de": "spliss",
      "lv": "savienoja"
    },
    "partizipVergangenheit": {
      "de": "gesplissen",
      "lv": "spliced"
    }
  },
  {
    "infinitiv": {
      "de": "sprechen",
      "lv": "to speak"
    },
    "praesens": {
      "de": "er spricht",
      "lv": "he speaks"
    },
    "imperfektIndikativ": {
      "de": "er sprach",
      "lv": "he spoke"
    },
    "imperfektKonjunktiv": {
      "de": "er spräche",
      "lv": "he would speak"
    },
    "partizipVergangenheit": {
      "de": "gesprochen",
      "lv": "spoken"
    }
  },
  {
    "infinitiv": {
      "de": "sprießen",
      "lv": "to sprout"
    },
    "praesens": {
      "de": "er sprießt",
      "lv": "he thrives"
    },
    "imperfektIndikativ": {
      "de": "er spross",
      "lv": "he thrived"
    },
    "imperfektKonjunktiv": {
      "de": "er sprösse",
      "lv": "he would sprout"
    },
    "partizipVergangenheit": {
      "de": "gesprossen (er ist)",
      "lv": "sprouted"
    }
  },
  {
    "infinitiv": {
      "de": "springen",
      "lv": "to jump"
    },
    "praesens": {
      "de": "er springt",
      "lv": "he jumps"
    },
    "imperfektIndikativ": {
      "de": "er sprang",
      "lv": "he jumped"
    },
    "imperfektKonjunktiv": {
      "de": "er spränge",
      "lv": "he would jump"
    },
    "partizipVergangenheit": {
      "de": "gesprungen (er ist)",
      "lv": "jumped"
    }
  },
  {
    "infinitiv": {
      "de": "stechen",
      "lv": "to stab"
    },
    "praesens": {
      "de": "er sticht",
      "lv": "he stabs"
    },
    "imperfektIndikativ": {
      "de": "er stach",
      "lv": "he punched"
    },
    "imperfektKonjunktiv": {
      "de": "er stäche",
      "lv": "he would stab"
    },
    "partizipVergangenheit": {
      "de": "gestochen",
      "lv": "stabbed"
    }
  },
  {
    "infinitiv": {
      "de": "stecken",
      "lv": "to stick / stick in"
    },
    "praesens": {
      "de": "er steckt",
      "lv": "he pushes"
    },
    "imperfektIndikativ": {
      "de": "stak vai steckte",
      "lv": "stuffed"
    },
    "imperfektKonjunktiv": {
      "de": "stak vai steckte",
      "lv": "stuffed"
    },
    "partizipVergangenheit": {
      "de": "gesteckt",
      "lv": "stuffed"
    }
  },
  {
    "infinitiv": {
      "de": "stehen",
      "lv": "to stand"
    },
    "praesens": {
      "de": "er steht",
      "lv": "he is standing"
    },
    "imperfektIndikativ": {
      "de": "er stand",
      "lv": "he stood"
    },
    "imperfektKonjunktiv": {
      "de": "er stände / er stünde",
      "lv": "he would stand"
    },
    "partizipVergangenheit": {
      "de": "gestanden",
      "lv": "standing"
    }
  },
  {
    "infinitiv": {
      "de": "stehlen",
      "lv": "to steal"
    },
    "praesens": {
      "de": "er stiehlt",
      "lv": "he steals"
    },
    "imperfektIndikativ": {
      "de": "er stahl",
      "lv": "he stole"
    },
    "imperfektKonjunktiv": {
      "de": "er stöhle / er stähle",
      "lv": "he would steal"
    },
    "partizipVergangenheit": {
      "de": "gestohlen",
      "lv": "stolen"
    }
  },
  {
    "infinitiv": {
      "de": "steigen",
      "lv": "to climb"
    },
    "praesens": {
      "de": "er steigt",
      "lv": "he climbs"
    },
    "imperfektIndikativ": {
      "de": "er stieg",
      "lv": "he climbed"
    },
    "imperfektKonjunktiv": {
      "de": "er stiege",
      "lv": "he would climb"
    },
    "partizipVergangenheit": {
      "de": "gestiegen (er ist)",
      "lv": "climbed"
    }
  },
  {
    "infinitiv": {
      "de": "sterben",
      "lv": "to die"
    },
    "praesens": {
      "de": "er stirbt",
      "lv": "he is dying"
    },
    "imperfektIndikativ": {
      "de": "er starb",
      "lv": "he died"
    },
    "imperfektKonjunktiv": {
      "de": "er stürbe",
      "lv": "he would die"
    },
    "partizipVergangenheit": {
      "de": "gestorben (er ist)",
      "lv": "died"
    }
  },
  {
    "infinitiv": {
      "de": "stieben",
      "lv": "foam / swirl"
    },
    "praesens": {
      "de": "es stiebt",
      "lv": "it scatters"
    },
    "imperfektIndikativ": {
      "de": "stob vai stiebte",
      "lv": "foamed"
    },
    "imperfektKonjunktiv": {
      "de": "stob vai stiebte",
      "lv": "foamed"
    },
    "partizipVergangenheit": {
      "de": "gestoben vai gestiebt",
      "lv": "spoiled"
    }
  },
  {
    "infinitiv": {
      "de": "stinken",
      "lv": "to smell"
    },
    "praesens": {
      "de": "es stinkt",
      "lv": "it stinks"
    },
    "imperfektIndikativ": {
      "de": "stank",
      "lv": "smelled"
    },
    "imperfektKonjunktiv": {
      "de": "stank",
      "lv": "smelled"
    },
    "partizipVergangenheit": {
      "de": "gestunken",
      "lv": "smelly"
    }
  },
  {
    "infinitiv": {
      "de": "stoßen",
      "lv": "push"
    },
    "praesens": {
      "de": "er stößt",
      "lv": "he pushes"
    },
    "imperfektIndikativ": {
      "de": "er stieß",
      "lv": "he pushed"
    },
    "imperfektKonjunktiv": {
      "de": "er stieße",
      "lv": "he would push"
    },
    "partizipVergangenheit": {
      "de": "gestoßen",
      "lv": "pushed"
    }
  },
  {
    "infinitiv": {
      "de": "streichen",
      "lv": "paint / strip"
    },
    "praesens": {
      "de": "er streicht",
      "lv": "he paints / stripes"
    },
    "imperfektIndikativ": {
      "de": "er strich",
      "lv": "he painted / striped"
    },
    "imperfektKonjunktiv": {
      "de": "er striche",
      "lv": "he would paint / strip"
    },
    "partizipVergangenheit": {
      "de": "gestrichen",
      "lv": "painted / striped"
    }
  },
  {
    "infinitiv": {
      "de": "streiten",
      "lv": "to fight"
    },
    "praesens": {
      "de": "er streitet",
      "lv": "he is fighting"
    },
    "imperfektIndikativ": {
      "de": "er stritt",
      "lv": "he struggled"
    },
    "imperfektKonjunktiv": {
      "de": "er stritte",
      "lv": "he would fight"
    },
    "partizipVergangenheit": {
      "de": "gestritten",
      "lv": "fought"
    }
  },
  {
    "infinitiv": {
      "de": "tragen",
      "lv": "to carry"
    },
    "praesens": {
      "de": "er trägt",
      "lv": "he carries"
    },
    "imperfektIndikativ": {
      "de": "er trug",
      "lv": "he carried"
    },
    "imperfektKonjunktiv": {
      "de": "er trüge",
      "lv": "he would carry"
    },
    "partizipVergangenheit": {
      "de": "getragen",
      "lv": "carried"
    }
  },
  {
    "infinitiv": {
      "de": "treffen",
      "lv": "to meet"
    },
    "praesens": {
      "de": "er trifft",
      "lv": "he meets"
    },
    "imperfektIndikativ": {
      "de": "er traf",
      "lv": "he encountered"
    },
    "imperfektKonjunktiv": {
      "de": "er träfe",
      "lv": "he would encounter"
    },
    "partizipVergangenheit": {
      "de": "getroffen",
      "lv": "met"
    }
  },
  {
    "infinitiv": {
      "de": "treiben",
      "lv": "chase"
    },
    "praesens": {
      "de": "er treibt",
      "lv": "he drives"
    },
    "imperfektIndikativ": {
      "de": "er trieb",
      "lv": "he drove"
    },
    "imperfektKonjunktiv": {
      "de": "er triebe",
      "lv": "he would drive"
    },
    "partizipVergangenheit": {
      "de": "getrieben",
      "lv": "chased"
    }
  },
  {
    "infinitiv": {
      "de": "treten",
      "lv": "enter / go"
    },
    "praesens": {
      "de": "er tritt",
      "lv": "he enters / goes"
    },
    "imperfektIndikativ": {
      "de": "er trat",
      "lv": "he stood / walked"
    },
    "imperfektKonjunktiv": {
      "de": "er träte",
      "lv": "he would stand / go"
    },
    "partizipVergangenheit": {
      "de": "getreten (er ist)",
      "lv": "stood / walked"
    }
  },
  {
    "infinitiv": {
      "de": "trinken",
      "lv": "to drink"
    },
    "praesens": {
      "de": "er trinkt",
      "lv": "he drinks"
    },
    "imperfektIndikativ": {
      "de": "er trank",
      "lv": "he was drinking"
    },
    "imperfektKonjunktiv": {
      "de": "er tränke",
      "lv": "he would drink"
    },
    "partizipVergangenheit": {
      "de": "getrunken",
      "lv": "drunk"
    }
  },
  {
    "infinitiv": {
      "de": "trügen",
      "lv": "to cheat"
    },
    "praesens": {
      "de": "er trögt",
      "lv": "he cheats"
    },
    "imperfektIndikativ": {
      "de": "er trog",
      "lv": "he cheated"
    },
    "imperfektKonjunktiv": {
      "de": "er tröge",
      "lv": "he would cheat"
    },
    "partizipVergangenheit": {
      "de": "getrogen",
      "lv": "cheated"
    }
  },
  {
    "infinitiv": {
      "de": "tun",
      "lv": "to do"
    },
    "praesens": {
      "de": "er tut",
      "lv": "he does"
    },
    "imperfektIndikativ": {
      "de": "er tat",
      "lv": "he did"
    },
    "imperfektKonjunktiv": {
      "de": "er täte",
      "lv": "he would do"
    },
    "partizipVergangenheit": {
      "de": "getan",
      "lv": "done"
    }
  },
  {
    "infinitiv": {
      "de": "verderben",
      "lv": "to damage"
    },
    "praesens": {
      "de": "er verdirbt",
      "lv": "he destroys"
    },
    "imperfektIndikativ": {
      "de": "er verdarb",
      "lv": "he damaged"
    },
    "imperfektKonjunktiv": {
      "de": "er verdürbe",
      "lv": "he would damage"
    },
    "partizipVergangenheit": {
      "de": "verdorben",
      "lv": "damaged"
    }
  },
  {
    "infinitiv": {
      "de": "verdrießen",
      "lv": "to cause annoyance"
    },
    "praesens": {
      "de": "er verdrießt",
      "lv": "he causes annoyance"
    },
    "imperfektIndikativ": {
      "de": "er verdross",
      "lv": "he caused annoyance"
    },
    "imperfektKonjunktiv": {
      "de": "er verdrösse",
      "lv": "he would cause annoyance"
    },
    "partizipVergangenheit": {
      "de": "verdrossen",
      "lv": "upset"
    }
  },
  {
    "infinitiv": {
      "de": "vergessen",
      "lv": "to forget"
    },
    "praesens": {
      "de": "er vergisst",
      "lv": "he forgets"
    },
    "imperfektIndikativ": {
      "de": "er vergass",
      "lv": "he forgot"
    },
    "imperfektKonjunktiv": {
      "de": "er vergäße",
      "lv": "he would forget"
    },
    "partizipVergangenheit": {
      "de": "vergessen",
      "lv": "forgotten"
    }
  },
  {
    "infinitiv": {
      "de": "verlieren",
      "lv": "to lose"
    },
    "praesens": {
      "de": "er verliert",
      "lv": "he loses"
    },
    "imperfektIndikativ": {
      "de": "er verlor",
      "lv": "he lost"
    },
    "imperfektKonjunktiv": {
      "de": "er verlöre",
      "lv": "he would lose"
    },
    "partizipVergangenheit": {
      "de": "verloren",
      "lv": "lost"
    }
  },
  {
    "infinitiv": {
      "de": "wachsen",
      "lv": "to grow"
    },
    "praesens": {
      "de": "er wächst",
      "lv": "he is growing"
    },
    "imperfektIndikativ": {
      "de": "er wuchs",
      "lv": "he was growing up"
    },
    "imperfektKonjunktiv": {
      "de": "er wüchse",
      "lv": "he would grow"
    },
    "partizipVergangenheit": {
      "de": "gewachsen (er ist)",
      "lv": "grown"
    }
  },
  {
    "infinitiv": {
      "de": "waschen",
      "lv": "to wash"
    },
    "praesens": {
      "de": "er wäscht",
      "lv": "he washes"
    },
    "imperfektIndikativ": {
      "de": "er wusch",
      "lv": "he washed"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsche",
      "lv": "he would wash"
    },
    "partizipVergangenheit": {
      "de": "gewaschen",
      "lv": "washed"
    }
  },
  {
    "infinitiv": {
      "de": "weben",
      "lv": "to weave"
    },
    "praesens": {
      "de": "er webt",
      "lv": "he weaves"
    },
    "imperfektIndikativ": {
      "de": "wob",
      "lv": "he wove"
    },
    "imperfektKonjunktiv": {
      "de": "wob",
      "lv": "auda"
    },
    "partizipVergangenheit": {
      "de": "gewoben",
      "lv": "woven"
    }
  },
  {
    "infinitiv": {
      "de": "weichen",
      "lv": "to withdraw"
    },
    "praesens": {
      "de": "er weicht",
      "lv": "he backs off"
    },
    "imperfektIndikativ": {
      "de": "er wich",
      "lv": "he stepped back"
    },
    "imperfektKonjunktiv": {
      "de": "er wiche",
      "lv": "he would back off"
    },
    "partizipVergangenheit": {
      "de": "gewichen (er ist)",
      "lv": "backed off"
    }
  },
  {
    "infinitiv": {
      "de": "weisen",
      "lv": "show"
    },
    "praesens": {
      "de": "er weist",
      "lv": "he shows"
    },
    "imperfektIndikativ": {
      "de": "er wies",
      "lv": "he showed"
    },
    "imperfektKonjunktiv": {
      "de": "er wiese",
      "lv": "he would show"
    },
    "partizipVergangenheit": {
      "de": "gewiesen",
      "lv": "shown"
    }
  },
  {
    "infinitiv": {
      "de": "wenden",
      "lv": "modify / crop"
    },
    "praesens": {
      "de": "er wendet",
      "lv": "he twists / turns"
    },
    "imperfektIndikativ": {
      "de": "er wandte / es wendete",
      "lv": "he twisted / turned"
    },
    "imperfektKonjunktiv": {
      "de": "er wendete",
      "lv": "he would amend / reverse"
    },
    "partizipVergangenheit": {
      "de": "gewandt / gewendet",
      "lv": "amended / reversed"
    }
  },
  {
    "infinitiv": {
      "de": "werben",
      "lv": "to advertise / to recruit / to woo"
    },
    "praesens": {
      "de": "er wirbt",
      "lv": "he advertises / recruits / woos"
    },
    "imperfektIndikativ": {
      "de": "er warb",
      "lv": "he advertised / recruited / wooed"
    },
    "imperfektKonjunktiv": {
      "de": "er würbe",
      "lv": "he would advertise / recruit / woo"
    },
    "partizipVergangenheit": {
      "de": "geworben",
      "lv": "advertised / recruited / wooed"
    }
  },
  {
    "infinitiv": {
      "de": "werden",
      "lv": "to become"
    },
    "praesens": {
      "de": "er wird",
      "lv": "he becomes"
    },
    "imperfektIndikativ": {
      "de": "wurde",
      "lv": "became"
    },
    "imperfektKonjunktiv": {
      "de": "wurde",
      "lv": "became"
    },
    "partizipVergangenheit": {
      "de": "geworden",
      "lv": "has become"
    }
  },
  {
    "infinitiv": {
      "de": "werfen",
      "lv": "to throw"
    },
    "praesens": {
      "de": "er wirft",
      "lv": "he throws"
    },
    "imperfektIndikativ": {
      "de": "er warf",
      "lv": "he threw"
    },
    "imperfektKonjunktiv": {
      "de": "er würfe",
      "lv": "he would throw"
    },
    "partizipVergangenheit": {
      "de": "geworfen",
      "lv": "thrown"
    }
  },
  {
    "infinitiv": {
      "de": "wiegen",
      "lv": "to weigh"
    },
    "praesens": {
      "de": "er wiegt",
      "lv": "he weighs"
    },
    "imperfektIndikativ": {
      "de": "er wog",
      "lv": "he weighed"
    },
    "imperfektKonjunktiv": {
      "de": "er wöge",
      "lv": "he would weigh"
    },
    "partizipVergangenheit": {
      "de": "gewogen",
      "lv": "weighted"
    }
  },
  {
    "infinitiv": {
      "de": "winden",
      "lv": "braid"
    },
    "praesens": {
      "de": "er windet",
      "lv": "he braids"
    },
    "imperfektIndikativ": {
      "de": "er wand",
      "lv": "he braided"
    },
    "imperfektKonjunktiv": {
      "de": "er wände",
      "lv": "he would braid"
    },
    "partizipVergangenheit": {
      "de": "gewunden",
      "lv": "braided"
    }
  },
  {
    "infinitiv": {
      "de": "wissen",
      "lv": "to know"
    },
    "praesens": {
      "de": "er weiß",
      "lv": "he knows"
    },
    "imperfektIndikativ": {
      "de": "er wusste",
      "lv": "he knew"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsste",
      "lv": "he would know"
    },
    "partizipVergangenheit": {
      "de": "gewusst",
      "lv": "known"
    }
  },
  {
    "infinitiv": {
      "de": "wollen",
      "lv": "want to"
    },
    "praesens": {
      "de": "er will",
      "lv": "he wants"
    },
    "imperfektIndikativ": {
      "de": "wollte",
      "lv": "wanted to"
    },
    "imperfektKonjunktiv": {
      "de": "wollte",
      "lv": "would want"
    },
    "partizipVergangenheit": {
      "de": "gewollt",
      "lv": "wanted to"
    }
  },
  {
    "infinitiv": {
      "de": "wringen",
      "lv": "to wring / to squeeze"
    },
    "praesens": {
      "de": "er wringt",
      "lv": "he wrings / squeezes"
    },
    "imperfektIndikativ": {
      "de": "wrang",
      "lv": "he wrung / squeezed"
    },
    "imperfektKonjunktiv": {
      "de": "wrang",
      "lv": "izgrieza"
    },
    "partizipVergangenheit": {
      "de": "gewrungen",
      "lv": "wrung / squeezed"
    }
  },
  {
    "infinitiv": {
      "de": "zeihen",
      "lv": "vainot"
    },
    "praesens": {
      "de": "er zeiht",
      "lv": "he blames"
    },
    "imperfektIndikativ": {
      "de": "zieh",
      "lv": "vainoja"
    },
    "imperfektKonjunktiv": {
      "de": "zieh",
      "lv": "vainoja"
    },
    "partizipVergangenheit": {
      "de": "geziehen",
      "lv": "vainojis"
    }
  },
  {
    "infinitiv": {
      "de": "ziehen",
      "lv": "vilkt"
    },
    "praesens": {
      "de": "er zieht",
      "lv": "he pulls"
    },
    "imperfektIndikativ": {
      "de": "er zog",
      "lv": "he pulled"
    },
    "imperfektKonjunktiv": {
      "de": "er zöge",
      "lv": "he would drag"
    },
    "partizipVergangenheit": {
      "de": "gezogen",
      "lv": "vilkts"
    }
  },
  {
    "infinitiv": {
      "de": "zwingen",
      "lv": "piespiest"
    },
    "praesens": {
      "de": "er zwingt",
      "lv": "he forces"
    },
    "imperfektIndikativ": {
      "de": "er zwang",
      "lv": "he forced"
    },
    "imperfektKonjunktiv": {
      "de": "er zwänge",
      "lv": "he would force"
    },
    "partizipVergangenheit": {
      "de": "gezwungen",
      "lv": "piespiests"
    }
  },
  {
    "infinitiv": {
      "de": "empfangen",
      "lv": "to receive"
    },
    "praesens": {
      "de": "er empfängt",
      "lv": "he receives"
    },
    "imperfektIndikativ": {
      "de": "er empfing",
      "lv": "he received"
    },
    "imperfektKonjunktiv": {
      "de": "er empfinge",
      "lv": "he would receive"
    },
    "partizipVergangenheit": {
      "de": "empfangen",
      "lv": "received"
    }
  },
  {
    "infinitiv": {
      "de": "erwägen",
      "lv": "to consider"
    },
    "praesens": {
      "de": "er erwägt",
      "lv": "he considers"
    },
    "imperfektIndikativ": {
      "de": "er erwog",
      "lv": "he considered"
    },
    "imperfektKonjunktiv": {
      "de": "er erwöge",
      "lv": "he would consider"
    },
    "partizipVergangenheit": {
      "de": "erwogen",
      "lv": "considered"
    }
  },
  {
    "infinitiv": {
      "de": "fechten",
      "lv": "to fight"
    },
    "praesens": {
      "de": "er ficht",
      "lv": "he is fighting"
    },
    "imperfektIndikativ": {
      "de": "er focht",
      "lv": "he struggled"
    },
    "imperfektKonjunktiv": {
      "de": "er föchte",
      "lv": "he would fight"
    },
    "partizipVergangenheit": {
      "de": "gefochten",
      "lv": "fought"
    }
  },
  {
    "infinitiv": {
      "de": "flechten",
      "lv": "braid"
    },
    "praesens": {
      "de": "er flicht",
      "lv": "he pin"
    },
    "imperfektIndikativ": {
      "de": "er flocht",
      "lv": "he braids"
    },
    "imperfektKonjunktiv": {
      "de": "er flöchte",
      "lv": "he would braid"
    },
    "partizipVergangenheit": {
      "de": "geflochten",
      "lv": "braided"
    }
  },
  {
    "infinitiv": {
      "de": "hangen",
      "lv": "to hang"
    },
    "praesens": {
      "de": "er hängt",
      "lv": "he hangs"
    },
    "imperfektIndikativ": {
      "de": "er hing",
      "lv": "he hung"
    },
    "imperfektKonjunktiv": {
      "de": "er hinge",
      "lv": "he would hang himself"
    },
    "partizipVergangenheit": {
      "de": "gehangen",
      "lv": "hang on"
    }
  },
  {
    "infinitiv": {
      "de": "spalten",
      "lv": "to split"
    },
    "praesens": {
      "de": "er spaltet",
      "lv": "he splits"
    },
    "imperfektIndikativ": {
      "de": "er spaltete",
      "lv": "he split"
    },
    "imperfektKonjunktiv": {
      "de": "er spaltete",
      "lv": "he would split"
    },
    "partizipVergangenheit": {
      "de": "gespalten",
      "lv": "split"
    }
  },
  {
    "infinitiv": {
      "de": "verzeihen",
      "lv": "piedot"
    },
    "praesens": {
      "de": "er verzeiht",
      "lv": "he forgives"
    },
    "imperfektIndikativ": {
      "de": "er verzieh",
      "lv": "he forgave"
    },
    "imperfektKonjunktiv": {
      "de": "er verziehe",
      "lv": "he would forgive"
    },
    "partizipVergangenheit": {
      "de": "verziehen",
      "lv": "piedots"
    }
  }
];

window.VERB_ENTRIES = VERB_ENTRIES;

const VERB_ENTRIES = [
  {
    "infinitiv": {
      "de": "backen",
      "lv": "Cuire au four"
    },
    "praesens": {
      "de": "er bäckt",
      "lv": "Il cuisine"
    },
    "imperfektIndikativ": {
      "de": "er buk",
      "lv": "Il cuisinait"
    },
    "imperfektKonjunktiv": {
      "de": "er büke",
      "lv": "Il cuisinerait"
    },
    "partizipVergangenheit": {
      "de": "gebacken",
      "lv": "Cuit au four"
    }
  },
  {
    "infinitiv": {
      "de": "befehlen",
      "lv": "Commander"
    },
    "praesens": {
      "de": "er befiehlt",
      "lv": "Il commande"
    },
    "imperfektIndikativ": {
      "de": "er befahl",
      "lv": "Il a commandé"
    },
    "imperfektKonjunktiv": {
      "de": "er beföhle",
      "lv": "Il commanderait"
    },
    "partizipVergangenheit": {
      "de": "befohlen",
      "lv": "Commandé"
    }
  },
  {
    "infinitiv": {
      "de": "beginnen",
      "lv": "Pour commencer"
    },
    "praesens": {
      "de": "er beginnt",
      "lv": "Il commence"
    },
    "imperfektIndikativ": {
      "de": "er begann",
      "lv": "Il a commencé"
    },
    "imperfektKonjunktiv": {
      "de": "er begönne / er begänne",
      "lv": "Il commencerait"
    },
    "partizipVergangenheit": {
      "de": "begonnen",
      "lv": "Commencé"
    }
  },
  {
    "infinitiv": {
      "de": "beißen",
      "lv": "Coût"
    },
    "praesens": {
      "de": "er beißt",
      "lv": "Il mord"
    },
    "imperfektIndikativ": {
      "de": "er biss",
      "lv": "Il a codé"
    },
    "imperfektKonjunktiv": {
      "de": "er bisse",
      "lv": "Il mord"
    },
    "partizipVergangenheit": {
      "de": "gebissen",
      "lv": "Coûts / sakosts"
    }
  },
  {
    "infinitiv": {
      "de": "bergen",
      "lv": "Cacher"
    },
    "praesens": {
      "de": "er birgt",
      "lv": "Il se cache"
    },
    "imperfektIndikativ": {
      "de": "er barg",
      "lv": "Il s'est caché"
    },
    "imperfektKonjunktiv": {
      "de": "er bürge / er bärge",
      "lv": "Il se cacherait"
    },
    "partizipVergangenheit": {
      "de": "geborgen",
      "lv": "Caché / enregistré"
    }
  },
  {
    "infinitiv": {
      "de": "bersten",
      "lv": "Éclatement"
    },
    "praesens": {
      "de": "er birst",
      "lv": "Il éclate"
    },
    "imperfektIndikativ": {
      "de": "er barst / er borst",
      "lv": "Il a éclaté"
    },
    "imperfektKonjunktiv": {
      "de": "er bärste / er börste",
      "lv": "Il éclate"
    },
    "partizipVergangenheit": {
      "de": "geborsten (er ist)",
      "lv": "Cassé"
    }
  },
  {
    "infinitiv": {
      "de": "bewegen",
      "lv": "Encourager"
    },
    "praesens": {
      "de": "er bewegt",
      "lv": "Il invite"
    },
    "imperfektIndikativ": {
      "de": "er bewog",
      "lv": "Il a exhorté"
    },
    "imperfektKonjunktiv": {
      "de": "er bewöge",
      "lv": "Il encouragerait"
    },
    "partizipVergangenheit": {
      "de": "bewogen",
      "lv": "Encouragé"
    }
  },
  {
    "infinitiv": {
      "de": "biegen",
      "lv": "Plier"
    },
    "praesens": {
      "de": "er biegt",
      "lv": "Il s'incline"
    },
    "imperfektIndikativ": {
      "de": "er bog",
      "lv": "Il a fléchi"
    },
    "imperfektKonjunktiv": {
      "de": "er böge",
      "lv": "Il plierait"
    },
    "partizipVergangenheit": {
      "de": "gebogen",
      "lv": "Courbé"
    }
  },
  {
    "infinitiv": {
      "de": "bieten",
      "lv": "Promettre"
    },
    "praesens": {
      "de": "er bietet",
      "lv": "Il promet"
    },
    "imperfektIndikativ": {
      "de": "er bot",
      "lv": "Il a promis"
    },
    "imperfektKonjunktiv": {
      "de": "er böte",
      "lv": "Il promettrait"
    },
    "partizipVergangenheit": {
      "de": "geboten",
      "lv": "Promis / offert"
    }
  },
  {
    "infinitiv": {
      "de": "binden",
      "lv": "Assis"
    },
    "praesens": {
      "de": "er bindet",
      "lv": "Il foin"
    },
    "imperfektIndikativ": {
      "de": "er band",
      "lv": "Il a semé"
    },
    "imperfektKonjunktiv": {
      "de": "er bände",
      "lv": "Il a tamisé"
    },
    "partizipVergangenheit": {
      "de": "gebunden",
      "lv": "Sièges"
    }
  },
  {
    "infinitiv": {
      "de": "bitten",
      "lv": "Demander"
    },
    "praesens": {
      "de": "er bittet",
      "lv": "Il supplie"
    },
    "imperfektIndikativ": {
      "de": "er bat",
      "lv": "Il a demandé"
    },
    "imperfektKonjunktiv": {
      "de": "er bäte",
      "lv": "Il prierait"
    },
    "partizipVergangenheit": {
      "de": "gebeten",
      "lv": "Demandé"
    }
  },
  {
    "infinitiv": {
      "de": "blasen",
      "lv": "Souffler"
    },
    "praesens": {
      "de": "er bläst",
      "lv": "Il souffle"
    },
    "imperfektIndikativ": {
      "de": "er blies",
      "lv": "Il a soufflé"
    },
    "imperfektKonjunktiv": {
      "de": "er bliese",
      "lv": "Il soufflerait"
    },
    "partizipVergangenheit": {
      "de": "geblasen",
      "lv": "Soufflé"
    }
  },
  {
    "infinitiv": {
      "de": "gären",
      "lv": "Fermenter"
    },
    "praesens": {
      "de": "es gärt",
      "lv": "Ça fermente"
    },
    "imperfektIndikativ": {
      "de": "es gor / es gärte",
      "lv": "Ça fermente"
    },
    "imperfektKonjunktiv": {
      "de": "es göre / es gärte",
      "lv": "Ce serait amer"
    },
    "partizipVergangenheit": {
      "de": "gegoren / gegärt",
      "lv": "Seigle"
    }
  },
  {
    "infinitiv": {
      "de": "gebären",
      "lv": "Accoucher"
    },
    "praesens": {
      "de": "sie gebiert",
      "lv": "Dans son ventre"
    },
    "imperfektIndikativ": {
      "de": "sie gebar",
      "lv": "Elle a accouché"
    },
    "imperfektKonjunktiv": {
      "de": "sie gebäre",
      "lv": "Elle allait accoucher"
    },
    "partizipVergangenheit": {
      "de": "geboren",
      "lv": "Né / est né"
    }
  },
  {
    "infinitiv": {
      "de": "gelingen",
      "lv": "Izdoties"
    },
    "praesens": {
      "de": "es gelingt",
      "lv": "Tas izdodas"
    },
    "imperfektIndikativ": {
      "de": "es gelang",
      "lv": "Ça a marché"
    },
    "imperfektKonjunktiv": {
      "de": "es gelänge",
      "lv": "Tas izdotos"
    },
    "partizipVergangenheit": {
      "de": "gelungen (es ist)",
      "lv": "Izdevies"
    }
  },
  {
    "infinitiv": {
      "de": "gelten",
      "lv": "Être utile"
    },
    "praesens": {
      "de": "er gilt",
      "lv": "Il correspond / est valide"
    },
    "imperfektIndikativ": {
      "de": "er galt",
      "lv": "Il était en forme / était en forme"
    },
    "imperfektKonjunktiv": {
      "de": "er gölte / es gälte",
      "lv": "Il conviendrait / cela conviendrait"
    },
    "partizipVergangenheit": {
      "de": "gegolten",
      "lv": "Appliqué / était valide"
    }
  },
  {
    "infinitiv": {
      "de": "genesen",
      "lv": "Se rétablir"
    },
    "praesens": {
      "de": "er genest",
      "lv": "Il va bien"
    },
    "imperfektIndikativ": {
      "de": "er genas",
      "lv": "Il s'est rétabli"
    },
    "imperfektKonjunktiv": {
      "de": "er genäse",
      "lv": "Il irait mieux"
    },
    "partizipVergangenheit": {
      "de": "genesen (er ist)",
      "lv": "Guéris"
    }
  },
  {
    "infinitiv": {
      "de": "genießen",
      "lv": "Profiter"
    },
    "praesens": {
      "de": "er genießt",
      "lv": "Il aime"
    },
    "imperfektIndikativ": {
      "de": "er genoss",
      "lv": "Il a apprécié"
    },
    "imperfektKonjunktiv": {
      "de": "er genösse",
      "lv": "Il apprécierait"
    },
    "partizipVergangenheit": {
      "de": "genossen",
      "lv": "Apprécié"
    }
  },
  {
    "infinitiv": {
      "de": "geschehen",
      "lv": "Note"
    },
    "praesens": {
      "de": "es geschieht",
      "lv": "Tas note"
    },
    "imperfektIndikativ": {
      "de": "es geschah",
      "lv": "Tas note"
    },
    "imperfektKonjunktiv": {
      "de": "es geschähe",
      "lv": "Tas notiktu"
    },
    "partizipVergangenheit": {
      "de": "geschehen (es ist)",
      "lv": "Avis"
    }
  },
  {
    "infinitiv": {
      "de": "gießen",
      "lv": "Mensonge"
    },
    "praesens": {
      "de": "er gießt",
      "lv": "Il verse"
    },
    "imperfektIndikativ": {
      "de": "er goss",
      "lv": "Il a versé"
    },
    "imperfektKonjunktiv": {
      "de": "er gösse",
      "lv": "Il pleut"
    },
    "partizipVergangenheit": {
      "de": "gegossen",
      "lv": "Mensonges"
    }
  },
  {
    "infinitiv": {
      "de": "gleichen",
      "lv": "Ressembler"
    },
    "praesens": {
      "de": "er gleicht",
      "lv": "Il ressemble"
    },
    "imperfektIndikativ": {
      "de": "er glich",
      "lv": "Il a imité"
    },
    "imperfektKonjunktiv": {
      "de": "er gliche",
      "lv": "Il imiterait"
    },
    "partizipVergangenheit": {
      "de": "geglichen",
      "lv": "Ressemblait"
    }
  },
  {
    "infinitiv": {
      "de": "gleiten",
      "lv": "Glisser"
    },
    "praesens": {
      "de": "er gleitet",
      "lv": "Il glisse"
    },
    "imperfektIndikativ": {
      "de": "er glitt",
      "lv": "Il glissait"
    },
    "imperfektKonjunktiv": {
      "de": "er glitte",
      "lv": "Il glisserait"
    },
    "partizipVergangenheit": {
      "de": "geglitten (er ist)",
      "lv": "Glissé"
    }
  },
  {
    "infinitiv": {
      "de": "glimmen",
      "lv": "Embrasé"
    },
    "praesens": {
      "de": "er glimmt",
      "lv": "Il brille"
    },
    "imperfektIndikativ": {
      "de": "er glimmte / glomm",
      "lv": "Il brillait"
    },
    "imperfektKonjunktiv": {
      "de": "er glimmte",
      "lv": "Il brillerait"
    },
    "partizipVergangenheit": {
      "de": "geglimmt / geglommen",
      "lv": "Embrasé"
    }
  },
  {
    "infinitiv": {
      "de": "graben",
      "lv": "Droit"
    },
    "praesens": {
      "de": "er gräbt",
      "lv": "Il creuse"
    },
    "imperfektIndikativ": {
      "de": "er grub",
      "lv": "Il a creusé"
    },
    "imperfektKonjunktiv": {
      "de": "er grübe",
      "lv": "Il creuserait"
    },
    "partizipVergangenheit": {
      "de": "gegraben",
      "lv": "Rakts"
    }
  },
  {
    "infinitiv": {
      "de": "greifen",
      "lv": "Attraper"
    },
    "praesens": {
      "de": "er greift",
      "lv": "Il attrape"
    },
    "imperfektIndikativ": {
      "de": "er griff",
      "lv": "Il a attrapé"
    },
    "imperfektKonjunktiv": {
      "de": "er griffe",
      "lv": "Il attraperait"
    },
    "partizipVergangenheit": {
      "de": "gegriffen",
      "lv": "Attrapé / saisi"
    }
  },
  {
    "infinitiv": {
      "de": "hauen",
      "lv": "Première"
    },
    "praesens": {
      "de": "er haut",
      "lv": "Il a choisi"
    },
    "imperfektIndikativ": {
      "de": "er hieb",
      "lv": "Il a cassé"
    },
    "imperfektKonjunktiv": {
      "de": "er hiebe",
      "lv": "Il sculpterait"
    },
    "partizipVergangenheit": {
      "de": "gehauen",
      "lv": "Cistres"
    }
  },
  {
    "infinitiv": {
      "de": "heben",
      "lv": "Celte"
    },
    "praesens": {
      "de": "er hebt",
      "lv": "Il élève"
    },
    "imperfektIndikativ": {
      "de": "er hob",
      "lv": "Il a apporté"
    },
    "imperfektKonjunktiv": {
      "de": "er höbe",
      "lv": "Il construirait"
    },
    "partizipVergangenheit": {
      "de": "gehoben",
      "lv": "Celtes"
    }
  },
  {
    "infinitiv": {
      "de": "kennen",
      "lv": "Savoir / savoir"
    },
    "praesens": {
      "de": "er kennt",
      "lv": "Il sait"
    },
    "imperfektIndikativ": {
      "de": "kannte",
      "lv": "Pazina"
    },
    "imperfektKonjunktiv": {
      "de": "kannte",
      "lv": "Pazina"
    },
    "partizipVergangenheit": {
      "de": "gekannt",
      "lv": "Pazinis"
    }
  },
  {
    "infinitiv": {
      "de": "klingen",
      "lv": "Sonner"
    },
    "praesens": {
      "de": "er klingt",
      "lv": "Il sonne"
    },
    "imperfektIndikativ": {
      "de": "er klang",
      "lv": "Il sonnait"
    },
    "imperfektKonjunktiv": {
      "de": "er klänge",
      "lv": "Il sonnerait"
    },
    "partizipVergangenheit": {
      "de": "geklungen",
      "lv": "Sonnait"
    }
  },
  {
    "infinitiv": {
      "de": "kneifen",
      "lv": "Kniebt"
    },
    "praesens": {
      "de": "er kneift",
      "lv": "Il plaisante"
    },
    "imperfektIndikativ": {
      "de": "er kniff",
      "lv": "Il a pincé"
    },
    "imperfektKonjunktiv": {
      "de": "er kniffe",
      "lv": "Il pincerait"
    },
    "partizipVergangenheit": {
      "de": "gekniffen",
      "lv": "Kniebts"
    }
  },
  {
    "infinitiv": {
      "de": "bleiben",
      "lv": "Palikt"
    },
    "praesens": {
      "de": "er bleibt",
      "lv": "Il reste"
    },
    "imperfektIndikativ": {
      "de": "er blieb",
      "lv": "Il est resté"
    },
    "imperfektKonjunktiv": {
      "de": "er bliebe",
      "lv": "Il resterait"
    },
    "partizipVergangenheit": {
      "de": "geblieben (er ist)",
      "lv": "Palicis"
    }
  },
  {
    "infinitiv": {
      "de": "bleichen",
      "lv": "Blanchir"
    },
    "praesens": {
      "de": "er bleicht",
      "lv": "Il blanchit"
    },
    "imperfektIndikativ": {
      "de": "blich",
      "lv": "Blanchi"
    },
    "imperfektKonjunktiv": {
      "de": "blich",
      "lv": "Blanchi"
    },
    "partizipVergangenheit": {
      "de": "geblichen",
      "lv": "Blanchi"
    }
  },
  {
    "infinitiv": {
      "de": "braten",
      "lv": "Frire • Rôtir"
    },
    "praesens": {
      "de": "er brät",
      "lv": "Il cuisine"
    },
    "imperfektIndikativ": {
      "de": "er briet",
      "lv": "Il cuisinait"
    },
    "imperfektKonjunktiv": {
      "de": "er briete",
      "lv": "Il cuisinerait"
    },
    "partizipVergangenheit": {
      "de": "gebraten",
      "lv": "Rôti / Frit"
    }
  },
  {
    "infinitiv": {
      "de": "brechen",
      "lv": "Lauzt"
    },
    "praesens": {
      "de": "er bricht",
      "lv": "Il casse"
    },
    "imperfektIndikativ": {
      "de": "er brach",
      "lv": "Il s'est cassé"
    },
    "imperfektKonjunktiv": {
      "de": "er bräche",
      "lv": "Il briserait"
    },
    "partizipVergangenheit": {
      "de": "gebrochen",
      "lv": "Lauzts / salauzts"
    }
  },
  {
    "infinitiv": {
      "de": "brennen",
      "lv": "Degré"
    },
    "praesens": {
      "de": "er brennt",
      "lv": "Il est en feu"
    },
    "imperfektIndikativ": {
      "de": "brannte",
      "lv": "Déga"
    },
    "imperfektKonjunktiv": {
      "de": "brannte",
      "lv": "Déga"
    },
    "partizipVergangenheit": {
      "de": "gebrannt",
      "lv": "Dedzis"
    }
  },
  {
    "infinitiv": {
      "de": "bringen",
      "lv": "Nid"
    },
    "praesens": {
      "de": "er bringt",
      "lv": "Il porte"
    },
    "imperfektIndikativ": {
      "de": "er brachte",
      "lv": "Il portait"
    },
    "imperfektKonjunktiv": {
      "de": "er brächte",
      "lv": "Il porterait"
    },
    "partizipVergangenheit": {
      "de": "gebracht",
      "lv": "Nids / atnests"
    }
  },
  {
    "infinitiv": {
      "de": "denken",
      "lv": "Penser"
    },
    "praesens": {
      "de": "er denkt",
      "lv": "Il pense"
    },
    "imperfektIndikativ": {
      "de": "er dachte",
      "lv": "Il pensait"
    },
    "imperfektKonjunktiv": {
      "de": "er dächte",
      "lv": "Il penserait"
    },
    "partizipVergangenheit": {
      "de": "gedacht",
      "lv": "Destiné"
    }
  },
  {
    "infinitiv": {
      "de": "dingen",
      "lv": "Embaucher / convenir"
    },
    "praesens": {
      "de": "er dingt",
      "lv": "Il embauche"
    },
    "imperfektIndikativ": {
      "de": "dingte",
      "lv": "Embauché"
    },
    "imperfektKonjunktiv": {
      "de": "dingte",
      "lv": "Embauché"
    },
    "partizipVergangenheit": {
      "de": "gedungen",
      "lv": "Embauché"
    }
  },
  {
    "infinitiv": {
      "de": "dreschen",
      "lv": "Culte"
    },
    "praesens": {
      "de": "er drischt",
      "lv": "Il bat"
    },
    "imperfektIndikativ": {
      "de": "er drasch / er drosch",
      "lv": "Il a battu"
    },
    "imperfektKonjunktiv": {
      "de": "er dräsche / er drösche",
      "lv": "Il adorerait"
    },
    "partizipVergangenheit": {
      "de": "gedroschen",
      "lv": "Kults"
    }
  },
  {
    "infinitiv": {
      "de": "dringen",
      "lv": "Ielauzties"
    },
    "praesens": {
      "de": "er dringt",
      "lv": "Il entre par effraction"
    },
    "imperfektIndikativ": {
      "de": "er drang",
      "lv": "Il est entré par effraction"
    },
    "imperfektKonjunktiv": {
      "de": "er dränge",
      "lv": "Il entrerait par effraction"
    },
    "partizipVergangenheit": {
      "de": "gedrungen (er ist)",
      "lv": "Ielauzies"
    }
  },
  {
    "infinitiv": {
      "de": "dünken",
      "lv": "Il semble"
    },
    "praesens": {
      "de": "es dünkt",
      "lv": "Il semble"
    },
    "imperfektIndikativ": {
      "de": "deuchte",
      "lv": "Il semblait"
    },
    "imperfektKonjunktiv": {
      "de": "deuchte",
      "lv": "Il semblait"
    },
    "partizipVergangenheit": {
      "de": "gedünkt",
      "lv": "Semblait"
    }
  },
  {
    "infinitiv": {
      "de": "dürfen",
      "lv": "Être autorisé"
    },
    "praesens": {
      "de": "er darf",
      "lv": "Il peut"
    },
    "imperfektIndikativ": {
      "de": "durfte",
      "lv": "A été autorisé"
    },
    "imperfektKonjunktiv": {
      "de": "durfte",
      "lv": "A été autorisé"
    },
    "partizipVergangenheit": {
      "de": "gedurft",
      "lv": "Autorisé"
    }
  },
  {
    "infinitiv": {
      "de": "empfehlen",
      "lv": "Ieteikt"
    },
    "praesens": {
      "de": "er empfiehlt",
      "lv": "Il suggère"
    },
    "imperfektIndikativ": {
      "de": "er empfahl",
      "lv": "Il a suggéré"
    },
    "imperfektKonjunktiv": {
      "de": "er empfähle / er empföhle",
      "lv": "Il recommanderait"
    },
    "partizipVergangenheit": {
      "de": "empfohlen",
      "lv": "Ieteikts"
    }
  },
  {
    "infinitiv": {
      "de": "empfinden",
      "lv": "Sajuste"
    },
    "praesens": {
      "de": "er empfindet",
      "lv": "Il se sent"
    },
    "imperfektIndikativ": {
      "de": "er empfand",
      "lv": "Il s'est senti"
    },
    "imperfektKonjunktiv": {
      "de": "er empfände",
      "lv": "Il se sentirait"
    },
    "partizipVergangenheit": {
      "de": "empfunden",
      "lv": "Sajustes"
    }
  },
  {
    "infinitiv": {
      "de": "erlöschen",
      "lv": "Izdziste"
    },
    "praesens": {
      "de": "er erlischt",
      "lv": "Il sort"
    },
    "imperfektIndikativ": {
      "de": "er erlosch",
      "lv": "Il est sorti"
    },
    "imperfektKonjunktiv": {
      "de": "er erlösche",
      "lv": "Il disparaîtrait"
    },
    "partizipVergangenheit": {
      "de": "erloschen (er ist)",
      "lv": "Izdzisis"
    }
  },
  {
    "infinitiv": {
      "de": "erschrecken",
      "lv": "Être confus"
    },
    "praesens": {
      "de": "er erschrickt",
      "lv": "Il a peur"
    },
    "imperfektIndikativ": {
      "de": "er erschrak",
      "lv": "Il a eu peur"
    },
    "imperfektKonjunktiv": {
      "de": "er erschräke",
      "lv": "Il paniquerait"
    },
    "partizipVergangenheit": {
      "de": "erschrocken (er ist)",
      "lv": "Sabijies"
    }
  },
  {
    "infinitiv": {
      "de": "essen",
      "lv": "Manger"
    },
    "praesens": {
      "de": "er isst",
      "lv": "Il mange"
    },
    "imperfektIndikativ": {
      "de": "er ass",
      "lv": "Il mangeait"
    },
    "imperfektKonjunktiv": {
      "de": "er äße",
      "lv": "Il mangerait"
    },
    "partizipVergangenheit": {
      "de": "gegessen",
      "lv": "Mangé / mangé"
    }
  },
  {
    "infinitiv": {
      "de": "fahren",
      "lv": "Braukt"
    },
    "praesens": {
      "de": "er fährt",
      "lv": "Il conduit"
    },
    "imperfektIndikativ": {
      "de": "er fuhr",
      "lv": "Il conduisait"
    },
    "imperfektKonjunktiv": {
      "de": "er führe",
      "lv": "Il conduirait"
    },
    "partizipVergangenheit": {
      "de": "gefahren (er ist)",
      "lv": "Braucis / aizbraucis"
    }
  },
  {
    "infinitiv": {
      "de": "fallen",
      "lv": "Kriste"
    },
    "praesens": {
      "de": "er fällt",
      "lv": "Il tombe"
    },
    "imperfektIndikativ": {
      "de": "er fiel",
      "lv": "Il est tombé"
    },
    "imperfektKonjunktiv": {
      "de": "er fiele",
      "lv": "Il tomberait"
    },
    "partizipVergangenheit": {
      "de": "gefallen (er ist)",
      "lv": "Krite"
    }
  },
  {
    "infinitiv": {
      "de": "fangen",
      "lv": "Attraper"
    },
    "praesens": {
      "de": "er fängt",
      "lv": "Il attrape"
    },
    "imperfektIndikativ": {
      "de": "er fing",
      "lv": "Il a attrapé"
    },
    "imperfektKonjunktiv": {
      "de": "er finge",
      "lv": "Il attraperait"
    },
    "partizipVergangenheit": {
      "de": "gefangen",
      "lv": "Attrapé / attrapé"
    }
  },
  {
    "infinitiv": {
      "de": "finden",
      "lv": "Atrast"
    },
    "praesens": {
      "de": "er findet",
      "lv": "Il trouve"
    },
    "imperfektIndikativ": {
      "de": "er fand",
      "lv": "Il a trouvé"
    },
    "imperfektKonjunktiv": {
      "de": "er fände",
      "lv": "Il trouverait"
    },
    "partizipVergangenheit": {
      "de": "gefunden",
      "lv": "Atrastes"
    }
  },
  {
    "infinitiv": {
      "de": "fliegen",
      "lv": "Laisties"
    },
    "praesens": {
      "de": "er fliegt",
      "lv": "Il vole"
    },
    "imperfektIndikativ": {
      "de": "er flog",
      "lv": "Il a volé"
    },
    "imperfektKonjunktiv": {
      "de": "er flöge",
      "lv": "Il volerait"
    },
    "partizipVergangenheit": {
      "de": "geflogen (er ist)",
      "lv": "Lidojis"
    }
  },
  {
    "infinitiv": {
      "de": "fliehen",
      "lv": "Fuyez"
    },
    "praesens": {
      "de": "er flieht",
      "lv": "Il s'enfuit"
    },
    "imperfektIndikativ": {
      "de": "er floh",
      "lv": "Il s'est enfui"
    },
    "imperfektKonjunktiv": {
      "de": "er flöhe",
      "lv": "Il s'enfuirait"
    },
    "partizipVergangenheit": {
      "de": "geflohen (er ist)",
      "lv": "S'est enfui"
    }
  },
  {
    "infinitiv": {
      "de": "fließen",
      "lv": "Couler"
    },
    "praesens": {
      "de": "er fließt",
      "lv": "Il court"
    },
    "imperfektIndikativ": {
      "de": "er floss",
      "lv": "Il a couru"
    },
    "imperfektKonjunktiv": {
      "de": "er flösse",
      "lv": "Il courrait"
    },
    "partizipVergangenheit": {
      "de": "geflossen (er ist)",
      "lv": "Passé"
    }
  },
  {
    "infinitiv": {
      "de": "fressen",
      "lv": "Manger demain"
    },
    "praesens": {
      "de": "er frisst",
      "lv": "Il mange / avale"
    },
    "imperfektIndikativ": {
      "de": "er frass",
      "lv": "Il a mangé/avalé"
    },
    "imperfektKonjunktiv": {
      "de": "er fräße",
      "lv": "Il mangerait/petit déjeuner"
    },
    "partizipVergangenheit": {
      "de": "gefressen",
      "lv": "Mangé / matin"
    }
  },
  {
    "infinitiv": {
      "de": "frieren",
      "lv": "Sel"
    },
    "praesens": {
      "de": "er friert",
      "lv": "Il gèle"
    },
    "imperfektIndikativ": {
      "de": "er fror",
      "lv": "Il île"
    },
    "imperfektKonjunktiv": {
      "de": "er fröre",
      "lv": "Il était gelé"
    },
    "partizipVergangenheit": {
      "de": "gefroren",
      "lv": "(Salis)"
    }
  },
  {
    "infinitiv": {
      "de": "geben",
      "lv": "Point"
    },
    "praesens": {
      "de": "er gibt",
      "lv": "Il donne"
    },
    "imperfektIndikativ": {
      "de": "er gab",
      "lv": "Il a donné"
    },
    "imperfektKonjunktiv": {
      "de": "er gäbe",
      "lv": "Il donnerait"
    },
    "partizipVergangenheit": {
      "de": "gegeben",
      "lv": "Points"
    }
  },
  {
    "infinitiv": {
      "de": "gedeihen",
      "lv": "Izdoties"
    },
    "praesens": {
      "de": "er gedeiht",
      "lv": "Il réussit"
    },
    "imperfektIndikativ": {
      "de": "er gedieh",
      "lv": "Il a réussi"
    },
    "imperfektKonjunktiv": {
      "de": "er gediehe",
      "lv": "Il réussirait"
    },
    "partizipVergangenheit": {
      "de": "gediehen (er ist)",
      "lv": "Izdevies"
    }
  },
  {
    "infinitiv": {
      "de": "gehen",
      "lv": "Iet"
    },
    "praesens": {
      "de": "er geht",
      "lv": "Il va"
    },
    "imperfektIndikativ": {
      "de": "er ging",
      "lv": "Il a marché"
    },
    "imperfektKonjunktiv": {
      "de": "er ginge",
      "lv": "Il irait"
    },
    "partizipVergangenheit": {
      "de": "gegangen (er ist)",
      "lv": "Est allé"
    }
  },
  {
    "infinitiv": {
      "de": "gewinnen",
      "lv": "Obtenir"
    },
    "praesens": {
      "de": "er gewinnt",
      "lv": "Il obtient"
    },
    "imperfektIndikativ": {
      "de": "er gewann",
      "lv": "Il a eu"
    },
    "imperfektKonjunktiv": {
      "de": "er gewönne / er gewänne",
      "lv": "Il obtiendrait"
    },
    "partizipVergangenheit": {
      "de": "gewonnen",
      "lv": "Obtenu"
    }
  },
  {
    "infinitiv": {
      "de": "haben",
      "lv": "Être / appartenir"
    },
    "praesens": {
      "de": "er hat",
      "lv": "Il a"
    },
    "imperfektIndikativ": {
      "de": "hatte",
      "lv": "Bija"
    },
    "imperfektKonjunktiv": {
      "de": "hatte",
      "lv": "Bija"
    },
    "partizipVergangenheit": {
      "de": "gehabt",
      "lv": "Bijis"
    }
  },
  {
    "infinitiv": {
      "de": "halten",
      "lv": "Prise"
    },
    "praesens": {
      "de": "er hält",
      "lv": "Il est là"
    },
    "imperfektIndikativ": {
      "de": "er hielt",
      "lv": "Il a tenu"
    },
    "imperfektKonjunktiv": {
      "de": "er hielte",
      "lv": "Il tiendrait"
    },
    "partizipVergangenheit": {
      "de": "gehalten",
      "lv": "Détenu"
    }
  },
  {
    "infinitiv": {
      "de": "heißen",
      "lv": "Saukt"
    },
    "praesens": {
      "de": "er heißt",
      "lv": "Il appelle / il est appelé"
    },
    "imperfektIndikativ": {
      "de": "er hieß",
      "lv": "Il a appelé / il a été appelé"
    },
    "imperfektKonjunktiv": {
      "de": "er hieße",
      "lv": "Il appellerait / il serait appelé"
    },
    "partizipVergangenheit": {
      "de": "geheißen",
      "lv": "Saukts"
    }
  },
  {
    "infinitiv": {
      "de": "helfen",
      "lv": "Pour aider"
    },
    "praesens": {
      "de": "er hilft",
      "lv": "Il aide"
    },
    "imperfektIndikativ": {
      "de": "er half",
      "lv": "Il a aidé"
    },
    "imperfektKonjunktiv": {
      "de": "er hülfe / er hälfe",
      "lv": "Il aiderait"
    },
    "partizipVergangenheit": {
      "de": "geholfen",
      "lv": "Aidé"
    }
  },
  {
    "infinitiv": {
      "de": "kommen",
      "lv": "Venir"
    },
    "praesens": {
      "de": "er kommt",
      "lv": "Il vient"
    },
    "imperfektIndikativ": {
      "de": "er kam",
      "lv": "Il est venu"
    },
    "imperfektKonjunktiv": {
      "de": "er käme",
      "lv": "Il viendrait"
    },
    "partizipVergangenheit": {
      "de": "gekommen (er ist)",
      "lv": "Est venu"
    }
  },
  {
    "infinitiv": {
      "de": "können",
      "lv": "Pouvoir"
    },
    "praesens": {
      "de": "er kann",
      "lv": "Il peut"
    },
    "imperfektIndikativ": {
      "de": "konnte",
      "lv": "Pourrait"
    },
    "imperfektKonjunktiv": {
      "de": "konnte",
      "lv": "Pourrait"
    },
    "partizipVergangenheit": {
      "de": "gekonnt",
      "lv": "Pourrait"
    }
  },
  {
    "infinitiv": {
      "de": "kriechen",
      "lv": "Il pleut"
    },
    "praesens": {
      "de": "er kriecht",
      "lv": "Il se penche"
    },
    "imperfektIndikativ": {
      "de": "er kroch",
      "lv": "Il a plu"
    },
    "imperfektKonjunktiv": {
      "de": "er kröche",
      "lv": "Il pleut"
    },
    "partizipVergangenheit": {
      "de": "gekrochen (er ist)",
      "lv": "Est décédé"
    }
  },
  {
    "infinitiv": {
      "de": "laden",
      "lv": "Charger, inviter"
    },
    "praesens": {
      "de": "er lädt",
      "lv": "Il empile / invite"
    },
    "imperfektIndikativ": {
      "de": "er lud",
      "lv": "Il a chargé / invité"
    },
    "imperfektKonjunktiv": {
      "de": "er lüde",
      "lv": "Il chargerait / inviterait"
    },
    "partizipVergangenheit": {
      "de": "geladen",
      "lv": "Chargé / invité"
    }
  },
  {
    "infinitiv": {
      "de": "lassen",
      "lv": "Mettre, laisser"
    },
    "praesens": {
      "de": "er lässt",
      "lv": "Il met / laisse"
    },
    "imperfektIndikativ": {
      "de": "er ließ",
      "lv": "Il a ordonné / autorisé"
    },
    "imperfektKonjunktiv": {
      "de": "er ließe",
      "lv": "Il mettrait / laisserait"
    },
    "partizipVergangenheit": {
      "de": "gelassen",
      "lv": "Mettre / autorisé"
    }
  },
  {
    "infinitiv": {
      "de": "laufen",
      "lv": "Skriet"
    },
    "praesens": {
      "de": "er läuft",
      "lv": "Il court"
    },
    "imperfektIndikativ": {
      "de": "er lief",
      "lv": "Il a couru"
    },
    "imperfektKonjunktiv": {
      "de": "er liefe",
      "lv": "Il courrait"
    },
    "partizipVergangenheit": {
      "de": "gelaufen (er ist)",
      "lv": "Couru"
    }
  },
  {
    "infinitiv": {
      "de": "leiden",
      "lv": "Ciest"
    },
    "praesens": {
      "de": "er leidet",
      "lv": "Il souffre"
    },
    "imperfektIndikativ": {
      "de": "er litt",
      "lv": "Il a souffert"
    },
    "imperfektKonjunktiv": {
      "de": "er litte",
      "lv": "Il souffrirait"
    },
    "partizipVergangenheit": {
      "de": "gelitten",
      "lv": "Villes"
    }
  },
  {
    "infinitiv": {
      "de": "leihen",
      "lv": "Prêter/emprunter"
    },
    "praesens": {
      "de": "er leiht",
      "lv": "Il prête/emprunte"
    },
    "imperfektIndikativ": {
      "de": "er lieh",
      "lv": "Il a prêté / emprunté"
    },
    "imperfektKonjunktiv": {
      "de": "er liehe",
      "lv": "Il prêterait/emprunterait"
    },
    "partizipVergangenheit": {
      "de": "geliehen",
      "lv": "Prêté / emprunté"
    }
  },
  {
    "infinitiv": {
      "de": "lesen",
      "lv": "Lire"
    },
    "praesens": {
      "de": "er liest",
      "lv": "Il lit"
    },
    "imperfektIndikativ": {
      "de": "er las",
      "lv": "Il lisait"
    },
    "imperfektKonjunktiv": {
      "de": "er läse",
      "lv": "Il lirait"
    },
    "partizipVergangenheit": {
      "de": "gelesen",
      "lv": "Lire"
    }
  },
  {
    "infinitiv": {
      "de": "liegen",
      "lv": "Dormir"
    },
    "praesens": {
      "de": "er liegt",
      "lv": "Il dort"
    },
    "imperfektIndikativ": {
      "de": "er lag",
      "lv": "Il dormait"
    },
    "imperfektKonjunktiv": {
      "de": "er läge",
      "lv": "Il dormirait"
    },
    "partizipVergangenheit": {
      "de": "gelegen",
      "lv": "J'ai dormi"
    }
  },
  {
    "infinitiv": {
      "de": "lügen",
      "lv": "Mélot"
    },
    "praesens": {
      "de": "er lügt",
      "lv": "Il ment"
    },
    "imperfektIndikativ": {
      "de": "er log",
      "lv": "Il a menti"
    },
    "imperfektKonjunktiv": {
      "de": "er löge",
      "lv": "Il mentirait"
    },
    "partizipVergangenheit": {
      "de": "gelogen",
      "lv": "Melots"
    }
  },
  {
    "infinitiv": {
      "de": "mahlen",
      "lv": "Lait malté"
    },
    "praesens": {
      "de": "er mahlt",
      "lv": "Il broie"
    },
    "imperfektIndikativ": {
      "de": "er mahlte",
      "lv": "Il borde"
    },
    "imperfektKonjunktiv": {
      "de": "er malte",
      "lv": "Il broie"
    },
    "partizipVergangenheit": {
      "de": "gemahlen",
      "lv": "Malts"
    }
  },
  {
    "infinitiv": {
      "de": "meiden",
      "lv": "Éviter"
    },
    "praesens": {
      "de": "er meidet",
      "lv": "Il évite"
    },
    "imperfektIndikativ": {
      "de": "er mied",
      "lv": "Il a évité"
    },
    "imperfektKonjunktiv": {
      "de": "er miede",
      "lv": "Il éviterait"
    },
    "partizipVergangenheit": {
      "de": "gemieden",
      "lv": "Évité"
    }
  },
  {
    "infinitiv": {
      "de": "melken",
      "lv": "Slauk"
    },
    "praesens": {
      "de": "er milkt / er melkt",
      "lv": "Il balaie"
    },
    "imperfektIndikativ": {
      "de": "er molk / er melkte",
      "lv": "Il a balayé"
    },
    "imperfektKonjunktiv": {
      "de": "er mölke / er melkte",
      "lv": "Il traireait"
    },
    "partizipVergangenheit": {
      "de": "gemolken / gemelkt",
      "lv": "Slaukts"
    }
  },
  {
    "infinitiv": {
      "de": "messen",
      "lv": "Mesurer"
    },
    "praesens": {
      "de": "er misst",
      "lv": "Il mesure"
    },
    "imperfektIndikativ": {
      "de": "er mass",
      "lv": "Il a mesuré"
    },
    "imperfektKonjunktiv": {
      "de": "er mäße",
      "lv": "Il mesurerait"
    },
    "partizipVergangenheit": {
      "de": "gemessen",
      "lv": "Mesuré"
    }
  },
  {
    "infinitiv": {
      "de": "misslingen",
      "lv": "Neizdoties"
    },
    "praesens": {
      "de": "es misslingt",
      "lv": "Tas neizdodas"
    },
    "imperfektIndikativ": {
      "de": "misslang",
      "lv": "Échoué"
    },
    "imperfektKonjunktiv": {
      "de": "misslang",
      "lv": "Échoué"
    },
    "partizipVergangenheit": {
      "de": "misslungen",
      "lv": "Neizdevies"
    }
  },
  {
    "infinitiv": {
      "de": "mögen",
      "lv": "Patikt"
    },
    "praesens": {
      "de": "er mag",
      "lv": "Il aime"
    },
    "imperfektIndikativ": {
      "de": "mochte",
      "lv": "Patika"
    },
    "imperfektKonjunktiv": {
      "de": "mochte",
      "lv": "Patika"
    },
    "partizipVergangenheit": {
      "de": "gemocht",
      "lv": "Paticis"
    }
  },
  {
    "infinitiv": {
      "de": "müssen",
      "lv": "Avoir besoin"
    },
    "praesens": {
      "de": "er muss",
      "lv": "Il a besoin"
    },
    "imperfektIndikativ": {
      "de": "musste",
      "lv": "Aurait dû"
    },
    "imperfektKonjunktiv": {
      "de": "musste",
      "lv": "Aurait dû"
    },
    "partizipVergangenheit": {
      "de": "gemusst",
      "lv": "Nécessaire"
    }
  },
  {
    "infinitiv": {
      "de": "nehmen",
      "lv": "Prendre"
    },
    "praesens": {
      "de": "er nimmt",
      "lv": "Il prend"
    },
    "imperfektIndikativ": {
      "de": "er nahm",
      "lv": "Il a pris"
    },
    "imperfektKonjunktiv": {
      "de": "er nähme",
      "lv": "Il prendrait"
    },
    "partizipVergangenheit": {
      "de": "genommen",
      "lv": "Pris"
    }
  },
  {
    "infinitiv": {
      "de": "nennen",
      "lv": "Nosaukt"
    },
    "praesens": {
      "de": "er nennt",
      "lv": "Il a nommé"
    },
    "imperfektIndikativ": {
      "de": "er nannte",
      "lv": "Il a appelé"
    },
    "imperfektKonjunktiv": {
      "de": "er nennte",
      "lv": "Il nommerait"
    },
    "partizipVergangenheit": {
      "de": "genannt",
      "lv": "Nosaukts"
    }
  },
  {
    "infinitiv": {
      "de": "pfeifen",
      "lv": "Svilpot"
    },
    "praesens": {
      "de": "er pfeift",
      "lv": "Il siffle"
    },
    "imperfektIndikativ": {
      "de": "er pfiff",
      "lv": "Il a sifflé"
    },
    "imperfektKonjunktiv": {
      "de": "er pfiffe",
      "lv": "Il sifflerait"
    },
    "partizipVergangenheit": {
      "de": "gepfiffen",
      "lv": "Svilpots"
    }
  },
  {
    "infinitiv": {
      "de": "pflegen",
      "lv": "Copte"
    },
    "praesens": {
      "de": "er pflegt",
      "lv": "Il s'en soucie"
    },
    "imperfektIndikativ": {
      "de": "pflegte vai pflog",
      "lv": "Copa"
    },
    "imperfektKonjunktiv": {
      "de": "pflegte vai pflog",
      "lv": "Copa"
    },
    "partizipVergangenheit": {
      "de": "gepflegt vai gepflogen",
      "lv": "Coptes"
    }
  },
  {
    "infinitiv": {
      "de": "preisen",
      "lv": "Louer"
    },
    "praesens": {
      "de": "er preist",
      "lv": "Il fait l'éloge"
    },
    "imperfektIndikativ": {
      "de": "er pries",
      "lv": "Il a loué"
    },
    "imperfektKonjunktiv": {
      "de": "er priese",
      "lv": "Il louerait"
    },
    "partizipVergangenheit": {
      "de": "gepriesen",
      "lv": "Loué"
    }
  },
  {
    "infinitiv": {
      "de": "quellen",
      "lv": "Le plus court"
    },
    "praesens": {
      "de": "er quillt",
      "lv": "Il grossit"
    },
    "imperfektIndikativ": {
      "de": "er quoll",
      "lv": "Il a mûri"
    },
    "imperfektKonjunktiv": {
      "de": "er quölle",
      "lv": "Il est gros"
    },
    "partizipVergangenheit": {
      "de": "gequollen (er ist)",
      "lv": "Ouzbriedis"
    }
  },
  {
    "infinitiv": {
      "de": "raten",
      "lv": "Suggérer / mentionner"
    },
    "praesens": {
      "de": "er rät",
      "lv": "Il recommande / min"
    },
    "imperfektIndikativ": {
      "de": "er riet",
      "lv": "Il a suggéré / suggéré"
    },
    "imperfektKonjunktiv": {
      "de": "er riete",
      "lv": "Il suggérerait / mentionnerait"
    },
    "partizipVergangenheit": {
      "de": "geraten",
      "lv": "Suggéré / mentionné"
    }
  },
  {
    "infinitiv": {
      "de": "reiben",
      "lv": "Berzt"
    },
    "praesens": {
      "de": "er reibt",
      "lv": "Il frotte"
    },
    "imperfektIndikativ": {
      "de": "er rieb",
      "lv": "Il frotte"
    },
    "imperfektKonjunktiv": {
      "de": "er riebe",
      "lv": "Il frotterait"
    },
    "partizipVergangenheit": {
      "de": "gerieben",
      "lv": "Berzts"
    }
  },
  {
    "infinitiv": {
      "de": "reißen",
      "lv": "RAUT"
    },
    "praesens": {
      "de": "er reißt",
      "lv": "Il claque"
    },
    "imperfektIndikativ": {
      "de": "er riss",
      "lv": "Il a cassé"
    },
    "imperfektKonjunktiv": {
      "de": "er risse",
      "lv": "Il a cassé"
    },
    "partizipVergangenheit": {
      "de": "gerissen",
      "lv": "Routs"
    }
  },
  {
    "infinitiv": {
      "de": "reiten",
      "lv": "Rouler"
    },
    "praesens": {
      "de": "er reitet",
      "lv": "Il monte"
    },
    "imperfektIndikativ": {
      "de": "er ritt",
      "lv": "Il a roulé"
    },
    "imperfektKonjunktiv": {
      "de": "er ritte",
      "lv": "Il monterait"
    },
    "partizipVergangenheit": {
      "de": "geritten (er ist)",
      "lv": "Monté"
    }
  },
  {
    "infinitiv": {
      "de": "rennen",
      "lv": "Skriet"
    },
    "praesens": {
      "de": "er rennt",
      "lv": "Il court"
    },
    "imperfektIndikativ": {
      "de": "er rannte",
      "lv": "Il a couru"
    },
    "imperfektKonjunktiv": {
      "de": "er rennte",
      "lv": "Il courrait"
    },
    "partizipVergangenheit": {
      "de": "gerannt",
      "lv": "Couru"
    }
  },
  {
    "infinitiv": {
      "de": "riechen",
      "lv": "Ost"
    },
    "praesens": {
      "de": "er riecht",
      "lv": "Il sent"
    },
    "imperfektIndikativ": {
      "de": "er roch",
      "lv": "Il chante"
    },
    "imperfektKonjunktiv": {
      "de": "er röche",
      "lv": "Il porte"
    },
    "partizipVergangenheit": {
      "de": "gerochen",
      "lv": "Osts"
    }
  },
  {
    "infinitiv": {
      "de": "ringen",
      "lv": "Lauzties"
    },
    "praesens": {
      "de": "er ringt",
      "lv": "Il casse"
    },
    "imperfektIndikativ": {
      "de": "er rang",
      "lv": "Il est tombé en panne"
    },
    "imperfektKonjunktiv": {
      "de": "er ränge",
      "lv": "Il briserait"
    },
    "partizipVergangenheit": {
      "de": "gerungen",
      "lv": "Laucies"
    }
  },
  {
    "infinitiv": {
      "de": "rinnen",
      "lv": "Couler"
    },
    "praesens": {
      "de": "er rinnt",
      "lv": "Il court"
    },
    "imperfektIndikativ": {
      "de": "er rann",
      "lv": "Il a couru"
    },
    "imperfektKonjunktiv": {
      "de": "er ränne / er rönne",
      "lv": "Il courrait"
    },
    "partizipVergangenheit": {
      "de": "geronnen (er ist)",
      "lv": "Coulé / coagulé"
    }
  },
  {
    "infinitiv": {
      "de": "rufen",
      "lv": "Saukt"
    },
    "praesens": {
      "de": "er ruft",
      "lv": "Il appelle"
    },
    "imperfektIndikativ": {
      "de": "er rief",
      "lv": "Il a appelé"
    },
    "imperfektKonjunktiv": {
      "de": "er riefe",
      "lv": "Il appellerait"
    },
    "partizipVergangenheit": {
      "de": "gerufen",
      "lv": "Saukts"
    }
  },
  {
    "infinitiv": {
      "de": "salzen",
      "lv": "Saler"
    },
    "praesens": {
      "de": "er salzt",
      "lv": "Il a salé"
    },
    "imperfektIndikativ": {
      "de": "er salzte",
      "lv": "Il a salé"
    },
    "imperfektKonjunktiv": {
      "de": "er salzte",
      "lv": "Il salerait"
    },
    "partizipVergangenheit": {
      "de": "gesalzen",
      "lv": "Salé"
    }
  },
  {
    "infinitiv": {
      "de": "saufen",
      "lv": "Sécher / boire"
    },
    "praesens": {
      "de": "er säuft",
      "lv": "Il boit / boit"
    },
    "imperfektIndikativ": {
      "de": "er soff",
      "lv": "Il a bu/a bu"
    },
    "imperfektKonjunktiv": {
      "de": "er söffe",
      "lv": "Il boirait / boirait"
    },
    "partizipVergangenheit": {
      "de": "gesoffen",
      "lv": "Dzerts"
    }
  },
  {
    "infinitiv": {
      "de": "saugen",
      "lv": "Sucer"
    },
    "praesens": {
      "de": "er saugt",
      "lv": "Il est nul"
    },
    "imperfektIndikativ": {
      "de": "er sog",
      "lv": "Il a sucé"
    },
    "imperfektKonjunktiv": {
      "de": "er söge",
      "lv": "Il serait nul"
    },
    "partizipVergangenheit": {
      "de": "gesogen",
      "lv": "Sucé"
    }
  },
  {
    "infinitiv": {
      "de": "schaffen",
      "lv": "Créer"
    },
    "praesens": {
      "de": "er schafft",
      "lv": "Il crée"
    },
    "imperfektIndikativ": {
      "de": "er schuf",
      "lv": "Il a créé"
    },
    "imperfektKonjunktiv": {
      "de": "er schüfe",
      "lv": "Il créerait"
    },
    "partizipVergangenheit": {
      "de": "geschaffen",
      "lv": "Créé"
    }
  },
  {
    "infinitiv": {
      "de": "schallen",
      "lv": "Sonner"
    },
    "praesens": {
      "de": "es schallt",
      "lv": "Tâche skan"
    },
    "imperfektIndikativ": {
      "de": "schallte vai scholl",
      "lv": "Sonnait"
    },
    "imperfektKonjunktiv": {
      "de": "schallte vai scholl",
      "lv": "Sonnait"
    },
    "partizipVergangenheit": {
      "de": "geschallt",
      "lv": "Sonnait"
    }
  },
  {
    "infinitiv": {
      "de": "scheiden",
      "lv": "Divorce / rupture"
    },
    "praesens": {
      "de": "er scheidet",
      "lv": "Il est en train de divorcer / divorcer"
    },
    "imperfektIndikativ": {
      "de": "er schied",
      "lv": "Il a divorcé / divorcé"
    },
    "imperfektKonjunktiv": {
      "de": "er schiede",
      "lv": "Il divorcerait / divorcerait"
    },
    "partizipVergangenheit": {
      "de": "geschieden (er hat / er ist)",
      "lv": "Séparé/divorcé"
    }
  },
  {
    "infinitiv": {
      "de": "scheinen",
      "lv": "Briller / apparaître"
    },
    "praesens": {
      "de": "er scheint",
      "lv": "Il brille / semble"
    },
    "imperfektIndikativ": {
      "de": "er schien",
      "lv": "Il brillait / semblait"
    },
    "imperfektKonjunktiv": {
      "de": "er schiene",
      "lv": "Il brillerait / semblerait"
    },
    "partizipVergangenheit": {
      "de": "geschienen",
      "lv": "Brillait / semblait"
    }
  },
  {
    "infinitiv": {
      "de": "schelten",
      "lv": "Bart"
    },
    "praesens": {
      "de": "er schilt",
      "lv": "Il gronde"
    },
    "imperfektIndikativ": {
      "de": "er schalt",
      "lv": "Il a interdit"
    },
    "imperfektKonjunktiv": {
      "de": "er schölte / er schälte",
      "lv": "Il se rase"
    },
    "partizipVergangenheit": {
      "de": "gescholten",
      "lv": "Barbe"
    }
  },
  {
    "infinitiv": {
      "de": "scheren",
      "lv": "Crypte"
    },
    "praesens": {
      "de": "er schert",
      "lv": "Il coupe"
    },
    "imperfektIndikativ": {
      "de": "schor vai scherte",
      "lv": "CirPA"
    },
    "imperfektKonjunktiv": {
      "de": "schor vai scherte",
      "lv": "CirPA"
    },
    "partizipVergangenheit": {
      "de": "geschoren vai geschert",
      "lv": "Extraits"
    }
  },
  {
    "infinitiv": {
      "de": "schieben",
      "lv": "Stunt"
    },
    "praesens": {
      "de": "er schiebt",
      "lv": "Il pousse"
    },
    "imperfektIndikativ": {
      "de": "er schob",
      "lv": "Il a poussé"
    },
    "imperfektKonjunktiv": {
      "de": "er schöbe",
      "lv": "Il pousserait"
    },
    "partizipVergangenheit": {
      "de": "geschoben",
      "lv": "Des trucs"
    }
  },
  {
    "infinitiv": {
      "de": "schießen",
      "lv": "Tirer"
    },
    "praesens": {
      "de": "er schießt",
      "lv": "Il tire"
    },
    "imperfektIndikativ": {
      "de": "er schoss",
      "lv": "Il a tiré"
    },
    "imperfektKonjunktiv": {
      "de": "er schösse",
      "lv": "Il tirerait"
    },
    "partizipVergangenheit": {
      "de": "geschossen",
      "lv": "Tir"
    }
  },
  {
    "infinitiv": {
      "de": "schinden",
      "lv": "Tourmenter"
    },
    "praesens": {
      "de": "er schindet",
      "lv": "Il tourmente"
    },
    "imperfektIndikativ": {
      "de": "schindete",
      "lv": "Tourmenté"
    },
    "imperfektKonjunktiv": {
      "de": "schindete",
      "lv": "Tourmenté"
    },
    "partizipVergangenheit": {
      "de": "geschunden",
      "lv": "Tourmenté"
    }
  },
  {
    "infinitiv": {
      "de": "schlafen",
      "lv": "Dormir"
    },
    "praesens": {
      "de": "er schläft",
      "lv": "Il dort"
    },
    "imperfektIndikativ": {
      "de": "er schlief",
      "lv": "Il dormait"
    },
    "imperfektKonjunktiv": {
      "de": "er schliefe",
      "lv": "Il dormirait"
    },
    "partizipVergangenheit": {
      "de": "geschlafen",
      "lv": "J'ai dormi"
    }
  },
  {
    "infinitiv": {
      "de": "schlagen",
      "lv": "Soeur"
    },
    "praesens": {
      "de": "er schlägt",
      "lv": "Il frappe"
    },
    "imperfektIndikativ": {
      "de": "er schlug",
      "lv": "Il a frappé"
    },
    "imperfektKonjunktiv": {
      "de": "er schlüge",
      "lv": "Il frapperait"
    },
    "partizipVergangenheit": {
      "de": "geschlagen",
      "lv": "Soeur"
    }
  },
  {
    "infinitiv": {
      "de": "schleichen",
      "lv": "Il pleut"
    },
    "praesens": {
      "de": "er schleicht",
      "lv": "Il se penche"
    },
    "imperfektIndikativ": {
      "de": "er schlich",
      "lv": "Il a plu"
    },
    "imperfektKonjunktiv": {
      "de": "er schliche",
      "lv": "Il pleut"
    },
    "partizipVergangenheit": {
      "de": "geschlichen (er ist)",
      "lv": "Est décédé"
    }
  },
  {
    "infinitiv": {
      "de": "schleifen",
      "lv": "Broyer"
    },
    "praesens": {
      "de": "er schleift",
      "lv": "Il broie"
    },
    "imperfektIndikativ": {
      "de": "er schliff",
      "lv": "Il a broyé"
    },
    "imperfektKonjunktiv": {
      "de": "er schliffe",
      "lv": "Il broyerait"
    },
    "partizipVergangenheit": {
      "de": "geschliffen",
      "lv": "Brillant"
    }
  },
  {
    "infinitiv": {
      "de": "schließen",
      "lv": "Fermer"
    },
    "praesens": {
      "de": "er schließt",
      "lv": "Il ferme"
    },
    "imperfektIndikativ": {
      "de": "er schloss",
      "lv": "Il a fermé"
    },
    "imperfektKonjunktiv": {
      "de": "er schlösse",
      "lv": "Il fermerait"
    },
    "partizipVergangenheit": {
      "de": "geschlossen",
      "lv": "Fermé"
    }
  },
  {
    "infinitiv": {
      "de": "schlingen",
      "lv": "Demain"
    },
    "praesens": {
      "de": "er schlingt",
      "lv": "Il avale"
    },
    "imperfektIndikativ": {
      "de": "er schlang",
      "lv": "Il a avalé"
    },
    "imperfektKonjunktiv": {
      "de": "er schlänge",
      "lv": "Il matin"
    },
    "partizipVergangenheit": {
      "de": "geschlungen",
      "lv": "Le matin"
    }
  },
  {
    "infinitiv": {
      "de": "schmeißen",
      "lv": "Plus"
    },
    "praesens": {
      "de": "er schmeißt",
      "lv": "Il jette"
    },
    "imperfektIndikativ": {
      "de": "er schmiss",
      "lv": "Il a jeté"
    },
    "imperfektKonjunktiv": {
      "de": "er schmisse",
      "lv": "Il a jeté"
    },
    "partizipVergangenheit": {
      "de": "geschmissen",
      "lv": "Mesmes"
    }
  },
  {
    "infinitiv": {
      "de": "schmelzen",
      "lv": "Kust"
    },
    "praesens": {
      "de": "er schmilzt",
      "lv": "Il fond"
    },
    "imperfektIndikativ": {
      "de": "er schmolz",
      "lv": "Il a gémi"
    },
    "imperfektKonjunktiv": {
      "de": "er schmölze",
      "lv": "Il bougeait"
    },
    "partizipVergangenheit": {
      "de": "geschmolzen (er ist)",
      "lv": "Kusis"
    }
  },
  {
    "infinitiv": {
      "de": "schnauben",
      "lv": "Siffler"
    },
    "praesens": {
      "de": "er schnaubt",
      "lv": "Il renifle"
    },
    "imperfektIndikativ": {
      "de": "schnaubte vai schnob",
      "lv": "Renifla"
    },
    "imperfektKonjunktiv": {
      "de": "schnaubte vai schnob",
      "lv": "Renifla"
    },
    "partizipVergangenheit": {
      "de": "geschnaubt vai geschnoben",
      "lv": "Renifler"
    }
  },
  {
    "infinitiv": {
      "de": "schneiden",
      "lv": "Griezt"
    },
    "praesens": {
      "de": "er schneidet",
      "lv": "Il tourne"
    },
    "imperfektIndikativ": {
      "de": "er schnitt",
      "lv": "Il coupait"
    },
    "imperfektKonjunktiv": {
      "de": "er schnitte",
      "lv": "Il couperait"
    },
    "partizipVergangenheit": {
      "de": "geschnitten",
      "lv": "Griezts"
    }
  },
  {
    "infinitiv": {
      "de": "schreiben",
      "lv": "Écrire"
    },
    "praesens": {
      "de": "er schreibt",
      "lv": "Il écrit"
    },
    "imperfektIndikativ": {
      "de": "er schrieb",
      "lv": "Il a écrit"
    },
    "imperfektKonjunktiv": {
      "de": "er schriebe",
      "lv": "Il écrirait"
    },
    "partizipVergangenheit": {
      "de": "geschrieben",
      "lv": "Écrit"
    }
  },
  {
    "infinitiv": {
      "de": "schreien",
      "lv": "Kliegt"
    },
    "praesens": {
      "de": "er schreit",
      "lv": "Il crie"
    },
    "imperfektIndikativ": {
      "de": "er schrie",
      "lv": "Il a crié"
    },
    "imperfektKonjunktiv": {
      "de": "er schriee",
      "lv": "Il crierait"
    },
    "partizipVergangenheit": {
      "de": "geschrien",
      "lv": "Kliegts"
    }
  },
  {
    "infinitiv": {
      "de": "schreiten",
      "lv": "Marche"
    },
    "praesens": {
      "de": "er schreitet",
      "lv": "Il marche"
    },
    "imperfektIndikativ": {
      "de": "er schritt",
      "lv": "Il marchait"
    },
    "imperfektKonjunktiv": {
      "de": "er schritte",
      "lv": "Il marcherait"
    },
    "partizipVergangenheit": {
      "de": "geschritten (er ist)",
      "lv": "Marché"
    }
  },
  {
    "infinitiv": {
      "de": "schweigen",
      "lv": "Garder le silence"
    },
    "praesens": {
      "de": "er schweigt",
      "lv": "Il est silencieux"
    },
    "imperfektIndikativ": {
      "de": "er schwieg",
      "lv": "Il était silencieux"
    },
    "imperfektKonjunktiv": {
      "de": "er schwiege",
      "lv": "Il se tairait"
    },
    "partizipVergangenheit": {
      "de": "geschwiegen",
      "lv": "Silencieux"
    }
  },
  {
    "infinitiv": {
      "de": "schwellen",
      "lv": "Chouchouter"
    },
    "praesens": {
      "de": "er schwillt",
      "lv": "Il fait la moue"
    },
    "imperfektIndikativ": {
      "de": "er schwoll",
      "lv": "Il pampa"
    },
    "imperfektKonjunktiv": {
      "de": "er schwölle",
      "lv": "Il pomperait"
    },
    "partizipVergangenheit": {
      "de": "geschwollen (er ist)",
      "lv": "Pampis"
    }
  },
  {
    "infinitiv": {
      "de": "schwimmen",
      "lv": "Nager"
    },
    "praesens": {
      "de": "er schwimmt",
      "lv": "Il nage"
    },
    "imperfektIndikativ": {
      "de": "er schwamm",
      "lv": "Il nageait"
    },
    "imperfektKonjunktiv": {
      "de": "er schwömme / er schwämme",
      "lv": "Il nagerait"
    },
    "partizipVergangenheit": {
      "de": "geschwommen (er ist)",
      "lv": "Nagé"
    }
  },
  {
    "infinitiv": {
      "de": "schwinden",
      "lv": "Zut"
    },
    "praesens": {
      "de": "er schwindet",
      "lv": "Il disparaît"
    },
    "imperfektIndikativ": {
      "de": "er schwand",
      "lv": "Il a disparu"
    },
    "imperfektKonjunktiv": {
      "de": "er schwände",
      "lv": "Il disparaîtrait"
    },
    "partizipVergangenheit": {
      "de": "geschwunden (er ist)",
      "lv": "Zudis"
    }
  },
  {
    "infinitiv": {
      "de": "schwingen",
      "lv": "Vague"
    },
    "praesens": {
      "de": "er schwingt",
      "lv": "Il fait signe"
    },
    "imperfektIndikativ": {
      "de": "er schwang",
      "lv": "Il a fait signe"
    },
    "imperfektKonjunktiv": {
      "de": "er schwänge",
      "lv": "Il ferait signe"
    },
    "partizipVergangenheit": {
      "de": "geschwungen",
      "lv": "Agité"
    }
  },
  {
    "infinitiv": {
      "de": "schwören",
      "lv": "Jurer"
    },
    "praesens": {
      "de": "er schwört",
      "lv": "Il jure"
    },
    "imperfektIndikativ": {
      "de": "er schwur / er schwor",
      "lv": "Il a juré"
    },
    "imperfektKonjunktiv": {
      "de": "er schwöre",
      "lv": "Il jurerait"
    },
    "partizipVergangenheit": {
      "de": "geschworen",
      "lv": "Juré"
    }
  },
  {
    "infinitiv": {
      "de": "sehen",
      "lv": "Voir"
    },
    "praesens": {
      "de": "er sieht",
      "lv": "Il voit"
    },
    "imperfektIndikativ": {
      "de": "er sah",
      "lv": "Il a vu"
    },
    "imperfektKonjunktiv": {
      "de": "er sähe",
      "lv": "Il verrait"
    },
    "partizipVergangenheit": {
      "de": "gesehen",
      "lv": "Vu"
    }
  },
  {
    "infinitiv": {
      "de": "sein",
      "lv": "Être"
    },
    "praesens": {
      "de": "er ist",
      "lv": "Il est"
    },
    "imperfektIndikativ": {
      "de": "war",
      "lv": "Bija"
    },
    "imperfektKonjunktiv": {
      "de": "war",
      "lv": "Bija"
    },
    "partizipVergangenheit": {
      "de": "gewesen",
      "lv": "Bijis"
    }
  },
  {
    "infinitiv": {
      "de": "senden",
      "lv": "Envoyer"
    },
    "praesens": {
      "de": "er sendet",
      "lv": "Il envoie"
    },
    "imperfektIndikativ": {
      "de": "er sandte / er sendete",
      "lv": "Il a envoyé"
    },
    "imperfektKonjunktiv": {
      "de": "er sendete",
      "lv": "Il enverrait"
    },
    "partizipVergangenheit": {
      "de": "gesandt / gesendet",
      "lv": "Envoyé"
    }
  },
  {
    "infinitiv": {
      "de": "sieden",
      "lv": "Faire bouillir"
    },
    "praesens": {
      "de": "er siedet",
      "lv": "Il cuisine"
    },
    "imperfektIndikativ": {
      "de": "sott vai siedete",
      "lv": "Cuit"
    },
    "imperfektKonjunktiv": {
      "de": "sott vai siedete",
      "lv": "Cuit"
    },
    "partizipVergangenheit": {
      "de": "gesotten vai gesiedet",
      "lv": "Bouilli"
    }
  },
  {
    "infinitiv": {
      "de": "singen",
      "lv": "Chanter"
    },
    "praesens": {
      "de": "er singt",
      "lv": "Il chante"
    },
    "imperfektIndikativ": {
      "de": "er sang",
      "lv": "Il a chanté"
    },
    "imperfektKonjunktiv": {
      "de": "er sänge",
      "lv": "Il chanterait"
    },
    "partizipVergangenheit": {
      "de": "gesungen",
      "lv": "Chanté"
    }
  },
  {
    "infinitiv": {
      "de": "sinken",
      "lv": "Sinistre"
    },
    "praesens": {
      "de": "er sinkt",
      "lv": "Il coule"
    },
    "imperfektIndikativ": {
      "de": "er sank",
      "lv": "Il inventait"
    },
    "imperfektKonjunktiv": {
      "de": "er sänke",
      "lv": "Il coulerait"
    },
    "partizipVergangenheit": {
      "de": "gesunken (er ist)",
      "lv": "Grimis"
    }
  },
  {
    "infinitiv": {
      "de": "sinnen",
      "lv": "Se demander"
    },
    "praesens": {
      "de": "er sinnt",
      "lv": "Il se demande"
    },
    "imperfektIndikativ": {
      "de": "er sann",
      "lv": "Il se demandait"
    },
    "imperfektKonjunktiv": {
      "de": "er sönne / er sänne",
      "lv": "Il se demanderait"
    },
    "partizipVergangenheit": {
      "de": "gesonnen",
      "lv": "Esprit"
    }
  },
  {
    "infinitiv": {
      "de": "sitzen",
      "lv": "S'asseoir"
    },
    "praesens": {
      "de": "er sitzt",
      "lv": "Il est assis"
    },
    "imperfektIndikativ": {
      "de": "er sass",
      "lv": "Il était assis"
    },
    "imperfektKonjunktiv": {
      "de": "er säße",
      "lv": "Il s'asseyait"
    },
    "partizipVergangenheit": {
      "de": "gesessen",
      "lv": "S'assit"
    }
  },
  {
    "infinitiv": {
      "de": "sollen",
      "lv": "Avoir besoin / être obligé"
    },
    "praesens": {
      "de": "er soll",
      "lv": "Il a besoin"
    },
    "imperfektIndikativ": {
      "de": "sollte",
      "lv": "Aurait dû"
    },
    "imperfektKonjunktiv": {
      "de": "sollte",
      "lv": "Aurait dû"
    },
    "partizipVergangenheit": {
      "de": "gesollt",
      "lv": "Nécessaire"
    }
  },
  {
    "infinitiv": {
      "de": "speien",
      "lv": "Cracher"
    },
    "praesens": {
      "de": "er speit",
      "lv": "Il crache"
    },
    "imperfektIndikativ": {
      "de": "er spie",
      "lv": "Il a craché"
    },
    "imperfektKonjunktiv": {
      "de": "er spie",
      "lv": "Il cracherait"
    },
    "partizipVergangenheit": {
      "de": "gespien",
      "lv": "Craché"
    }
  },
  {
    "infinitiv": {
      "de": "spinnen",
      "lv": "Rotation"
    },
    "praesens": {
      "de": "er spinnt",
      "lv": "Il se tord"
    },
    "imperfektIndikativ": {
      "de": "er spann",
      "lv": "Il a tourné"
    },
    "imperfektKonjunktiv": {
      "de": "er spönne / er spänne",
      "lv": "Il tournerait"
    },
    "partizipVergangenheit": {
      "de": "gesponnen",
      "lv": "Filé"
    }
  },
  {
    "infinitiv": {
      "de": "spleißen",
      "lv": "Savienot"
    },
    "praesens": {
      "de": "er spleißt",
      "lv": "Il se connecte"
    },
    "imperfektIndikativ": {
      "de": "spliss",
      "lv": "Savienoja"
    },
    "imperfektKonjunktiv": {
      "de": "spliss",
      "lv": "Savienoja"
    },
    "partizipVergangenheit": {
      "de": "gesplissen",
      "lv": "Savienots"
    }
  },
  {
    "infinitiv": {
      "de": "sprechen",
      "lv": "Parler"
    },
    "praesens": {
      "de": "er spricht",
      "lv": "Il parle"
    },
    "imperfektIndikativ": {
      "de": "er sprach",
      "lv": "Il a parlé"
    },
    "imperfektKonjunktiv": {
      "de": "er spräche",
      "lv": "Il parlerait"
    },
    "partizipVergangenheit": {
      "de": "gesprochen",
      "lv": "Parlé"
    }
  },
  {
    "infinitiv": {
      "de": "sprießen",
      "lv": "Plaukt"
    },
    "praesens": {
      "de": "er sprießt",
      "lv": "Il prospère"
    },
    "imperfektIndikativ": {
      "de": "er spross",
      "lv": "Il a prospéré"
    },
    "imperfektKonjunktiv": {
      "de": "er sprösse",
      "lv": "Il étagère"
    },
    "partizipVergangenheit": {
      "de": "gesprossen (er ist)",
      "lv": "Plaucis"
    }
  },
  {
    "infinitiv": {
      "de": "springen",
      "lv": "Sauter"
    },
    "praesens": {
      "de": "er springt",
      "lv": "Il saute"
    },
    "imperfektIndikativ": {
      "de": "er sprang",
      "lv": "Il a sauté"
    },
    "imperfektKonjunktiv": {
      "de": "er spränge",
      "lv": "Il sauterait"
    },
    "partizipVergangenheit": {
      "de": "gesprungen (er ist)",
      "lv": "Lentille"
    }
  },
  {
    "infinitiv": {
      "de": "stechen",
      "lv": "Dur"
    },
    "praesens": {
      "de": "er sticht",
      "lv": "Il poignarde"
    },
    "imperfektIndikativ": {
      "de": "er stach",
      "lv": "Il a frappé"
    },
    "imperfektKonjunktiv": {
      "de": "er stäche",
      "lv": "Il poignarderait"
    },
    "partizipVergangenheit": {
      "de": "gestochen",
      "lv": "Durs"
    }
  },
  {
    "infinitiv": {
      "de": "stecken",
      "lv": "Coller / rester dedans"
    },
    "praesens": {
      "de": "er steckt",
      "lv": "Il pousse"
    },
    "imperfektIndikativ": {
      "de": "stak vai steckte",
      "lv": "Farci"
    },
    "imperfektKonjunktiv": {
      "de": "stak vai steckte",
      "lv": "Farci"
    },
    "partizipVergangenheit": {
      "de": "gesteckt",
      "lv": "Farci"
    }
  },
  {
    "infinitiv": {
      "de": "stehen",
      "lv": "Se tenir debout"
    },
    "praesens": {
      "de": "er steht",
      "lv": "Il est debout"
    },
    "imperfektIndikativ": {
      "de": "er stand",
      "lv": "Il s'est levé"
    },
    "imperfektKonjunktiv": {
      "de": "er stände / er stünde",
      "lv": "Il resterait debout"
    },
    "partizipVergangenheit": {
      "de": "gestanden",
      "lv": "Debout"
    }
  },
  {
    "infinitiv": {
      "de": "stehlen",
      "lv": "Zagt"
    },
    "praesens": {
      "de": "er stiehlt",
      "lv": "Il vole"
    },
    "imperfektIndikativ": {
      "de": "er stahl",
      "lv": "Il a volé"
    },
    "imperfektKonjunktiv": {
      "de": "er stöhle / er stähle",
      "lv": "Il volerait"
    },
    "partizipVergangenheit": {
      "de": "gestohlen",
      "lv": "Zagts"
    }
  },
  {
    "infinitiv": {
      "de": "steigen",
      "lv": "Grimper"
    },
    "praesens": {
      "de": "er steigt",
      "lv": "Il grimpe"
    },
    "imperfektIndikativ": {
      "de": "er stieg",
      "lv": "Il a grimpé"
    },
    "imperfektKonjunktiv": {
      "de": "er stiege",
      "lv": "Il grimperait"
    },
    "partizipVergangenheit": {
      "de": "gestiegen (er ist)",
      "lv": "Grimpé"
    }
  },
  {
    "infinitiv": {
      "de": "sterben",
      "lv": "Mire"
    },
    "praesens": {
      "de": "er stirbt",
      "lv": "Il est en train de mourir"
    },
    "imperfektIndikativ": {
      "de": "er starb",
      "lv": "Il est mort"
    },
    "imperfektKonjunktiv": {
      "de": "er stürbe",
      "lv": "Il mourrait"
    },
    "partizipVergangenheit": {
      "de": "gestorben (er ist)",
      "lv": "Miris"
    }
  },
  {
    "infinitiv": {
      "de": "stieben",
      "lv": "Mousse / tourbillon"
    },
    "praesens": {
      "de": "es stiebt",
      "lv": "Tas mettre"
    },
    "imperfektIndikativ": {
      "de": "stob vai stiebte",
      "lv": "Moussé"
    },
    "imperfektKonjunktiv": {
      "de": "stob vai stiebte",
      "lv": "Moussé"
    },
    "partizipVergangenheit": {
      "de": "gestoben vai gestiebt",
      "lv": "Gâté"
    }
  },
  {
    "infinitiv": {
      "de": "stinken",
      "lv": "Sentir"
    },
    "praesens": {
      "de": "es stinkt",
      "lv": "Tas smird"
    },
    "imperfektIndikativ": {
      "de": "stank",
      "lv": "Sentait"
    },
    "imperfektKonjunktiv": {
      "de": "stank",
      "lv": "Sentait"
    },
    "partizipVergangenheit": {
      "de": "gestunken",
      "lv": "Malodorant"
    }
  },
  {
    "infinitiv": {
      "de": "stoßen",
      "lv": "Pousser"
    },
    "praesens": {
      "de": "er stößt",
      "lv": "Il pousse"
    },
    "imperfektIndikativ": {
      "de": "er stieß",
      "lv": "Il a poussé"
    },
    "imperfektKonjunktiv": {
      "de": "er stieße",
      "lv": "Il poussait"
    },
    "partizipVergangenheit": {
      "de": "gestoßen",
      "lv": "Poussé"
    }
  },
  {
    "infinitiv": {
      "de": "streichen",
      "lv": "Peinture / décapage"
    },
    "praesens": {
      "de": "er streicht",
      "lv": "Il peint/raye"
    },
    "imperfektIndikativ": {
      "de": "er strich",
      "lv": "Il a peint / rayé"
    },
    "imperfektKonjunktiv": {
      "de": "er striche",
      "lv": "Il peindrait/décaperait"
    },
    "partizipVergangenheit": {
      "de": "gestrichen",
      "lv": "Peint / rayé"
    }
  },
  {
    "infinitiv": {
      "de": "streiten",
      "lv": "Se battre"
    },
    "praesens": {
      "de": "er streitet",
      "lv": "Il se bat"
    },
    "imperfektIndikativ": {
      "de": "er stritt",
      "lv": "Il a eu du mal"
    },
    "imperfektKonjunktiv": {
      "de": "er stritte",
      "lv": "Il se battrait"
    },
    "partizipVergangenheit": {
      "de": "gestritten",
      "lv": "Combattu"
    }
  },
  {
    "infinitiv": {
      "de": "tragen",
      "lv": "Nid"
    },
    "praesens": {
      "de": "er trägt",
      "lv": "Il porte"
    },
    "imperfektIndikativ": {
      "de": "er trug",
      "lv": "Il portait"
    },
    "imperfektKonjunktiv": {
      "de": "er trüge",
      "lv": "Il porterait"
    },
    "partizipVergangenheit": {
      "de": "getragen",
      "lv": "Nids"
    }
  },
  {
    "infinitiv": {
      "de": "treffen",
      "lv": "Sastapt"
    },
    "praesens": {
      "de": "er trifft",
      "lv": "Il rencontre"
    },
    "imperfektIndikativ": {
      "de": "er traf",
      "lv": "Il a rencontré"
    },
    "imperfektKonjunktiv": {
      "de": "er träfe",
      "lv": "Il rencontrerait"
    },
    "partizipVergangenheit": {
      "de": "getroffen",
      "lv": "Sastaptes"
    }
  },
  {
    "infinitiv": {
      "de": "treiben",
      "lv": "Chasse"
    },
    "praesens": {
      "de": "er treibt",
      "lv": "Il conduit"
    },
    "imperfektIndikativ": {
      "de": "er trieb",
      "lv": "Il a conduit"
    },
    "imperfektKonjunktiv": {
      "de": "er triebe",
      "lv": "Il conduirait"
    },
    "partizipVergangenheit": {
      "de": "getrieben",
      "lv": "Poursuivi"
    }
  },
  {
    "infinitiv": {
      "de": "treten",
      "lv": "Entrer/aller"
    },
    "praesens": {
      "de": "er tritt",
      "lv": "Il entre/va"
    },
    "imperfektIndikativ": {
      "de": "er trat",
      "lv": "Il se tenait debout / marchait"
    },
    "imperfektKonjunktiv": {
      "de": "er träte",
      "lv": "Il resterait debout / partirait"
    },
    "partizipVergangenheit": {
      "de": "getreten (er ist)",
      "lv": "Debout/marchait"
    }
  },
  {
    "infinitiv": {
      "de": "trinken",
      "lv": "Dzert"
    },
    "praesens": {
      "de": "er trinkt",
      "lv": "Il boit"
    },
    "imperfektIndikativ": {
      "de": "er trank",
      "lv": "Il buvait"
    },
    "imperfektKonjunktiv": {
      "de": "er tränke",
      "lv": "Il boirait"
    },
    "partizipVergangenheit": {
      "de": "getrunken",
      "lv": "Dzerts"
    }
  },
  {
    "infinitiv": {
      "de": "trügen",
      "lv": "Tricher"
    },
    "praesens": {
      "de": "er trögt",
      "lv": "Il triche"
    },
    "imperfektIndikativ": {
      "de": "er trog",
      "lv": "Il a triché"
    },
    "imperfektKonjunktiv": {
      "de": "er tröge",
      "lv": "Il tricherait"
    },
    "partizipVergangenheit": {
      "de": "getrogen",
      "lv": "Triché"
    }
  },
  {
    "infinitiv": {
      "de": "tun",
      "lv": "Faire"
    },
    "praesens": {
      "de": "er tut",
      "lv": "Il le fait"
    },
    "imperfektIndikativ": {
      "de": "er tat",
      "lv": "Il l'a fait"
    },
    "imperfektKonjunktiv": {
      "de": "er täte",
      "lv": "Il ferait"
    },
    "partizipVergangenheit": {
      "de": "getan",
      "lv": "Fait"
    }
  },
  {
    "infinitiv": {
      "de": "verderben",
      "lv": "Endommager"
    },
    "praesens": {
      "de": "er verdirbt",
      "lv": "Il détruit"
    },
    "imperfektIndikativ": {
      "de": "er verdarb",
      "lv": "Il a endommagé"
    },
    "imperfektKonjunktiv": {
      "de": "er verdürbe",
      "lv": "Il endommagerait"
    },
    "partizipVergangenheit": {
      "de": "verdorben",
      "lv": "Endommagé"
    }
  },
  {
    "infinitiv": {
      "de": "verdrießen",
      "lv": "Causer de l'ennui"
    },
    "praesens": {
      "de": "er verdrießt",
      "lv": "Il provoque des ennuis"
    },
    "imperfektIndikativ": {
      "de": "er verdross",
      "lv": "Il a causé de l'ennui"
    },
    "imperfektKonjunktiv": {
      "de": "er verdrösse",
      "lv": "Il causerait de l'ennui"
    },
    "partizipVergangenheit": {
      "de": "verdrossen",
      "lv": "Bouleversé"
    }
  },
  {
    "infinitiv": {
      "de": "vergessen",
      "lv": "Aizmirst"
    },
    "praesens": {
      "de": "er vergisst",
      "lv": "Il oublie"
    },
    "imperfektIndikativ": {
      "de": "er vergass",
      "lv": "Il a oublié"
    },
    "imperfektKonjunktiv": {
      "de": "er vergäße",
      "lv": "Il oublierait"
    },
    "partizipVergangenheit": {
      "de": "vergessen",
      "lv": "Aizmirsts"
    }
  },
  {
    "infinitiv": {
      "de": "verlieren",
      "lv": "Perdre"
    },
    "praesens": {
      "de": "er verliert",
      "lv": "Il perd"
    },
    "imperfektIndikativ": {
      "de": "er verlor",
      "lv": "Il a perdu"
    },
    "imperfektKonjunktiv": {
      "de": "er verlöre",
      "lv": "Il perdrait"
    },
    "partizipVergangenheit": {
      "de": "verloren",
      "lv": "Perdu"
    }
  },
  {
    "infinitiv": {
      "de": "wachsen",
      "lv": "Août"
    },
    "praesens": {
      "de": "er wächst",
      "lv": "Il grandit"
    },
    "imperfektIndikativ": {
      "de": "er wuchs",
      "lv": "Il grandissait"
    },
    "imperfektKonjunktiv": {
      "de": "er wüchse",
      "lv": "Il grandirait"
    },
    "partizipVergangenheit": {
      "de": "gewachsen (er ist)",
      "lv": "Audzis"
    }
  },
  {
    "infinitiv": {
      "de": "waschen",
      "lv": "Se laver"
    },
    "praesens": {
      "de": "er wäscht",
      "lv": "Il lave"
    },
    "imperfektIndikativ": {
      "de": "er wusch",
      "lv": "Il s'est lavé"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsche",
      "lv": "Il se laverait"
    },
    "partizipVergangenheit": {
      "de": "gewaschen",
      "lv": "Lavé"
    }
  },
  {
    "infinitiv": {
      "de": "weben",
      "lv": "Austère"
    },
    "praesens": {
      "de": "er webt",
      "lv": "Il tisse"
    },
    "imperfektIndikativ": {
      "de": "wob",
      "lv": "AUDA"
    },
    "imperfektKonjunktiv": {
      "de": "wob",
      "lv": "AUDA"
    },
    "partizipVergangenheit": {
      "de": "gewoben",
      "lv": "Izaustes"
    }
  },
  {
    "infinitiv": {
      "de": "weichen",
      "lv": "Se retirer"
    },
    "praesens": {
      "de": "er weicht",
      "lv": "Il recule"
    },
    "imperfektIndikativ": {
      "de": "er wich",
      "lv": "Il a reculé"
    },
    "imperfektKonjunktiv": {
      "de": "er wiche",
      "lv": "Il reculerait"
    },
    "partizipVergangenheit": {
      "de": "gewichen (er ist)",
      "lv": "Reculer"
    }
  },
  {
    "infinitiv": {
      "de": "weisen",
      "lv": "Montrer"
    },
    "praesens": {
      "de": "er weist",
      "lv": "Il montre"
    },
    "imperfektIndikativ": {
      "de": "er wies",
      "lv": "Il a montré"
    },
    "imperfektKonjunktiv": {
      "de": "er wiese",
      "lv": "Il montrerait"
    },
    "partizipVergangenheit": {
      "de": "gewiesen",
      "lv": "Montré"
    }
  },
  {
    "infinitiv": {
      "de": "wenden",
      "lv": "Modifier / recadrer"
    },
    "praesens": {
      "de": "er wendet",
      "lv": "Il se tord/tourne"
    },
    "imperfektIndikativ": {
      "de": "er wandte / es wendete",
      "lv": "Il s'est tordu/tourné"
    },
    "imperfektKonjunktiv": {
      "de": "er wendete",
      "lv": "Il modifierait / inverserait"
    },
    "partizipVergangenheit": {
      "de": "gewandt / gewendet",
      "lv": "Modifié / annulé"
    }
  },
  {
    "infinitiv": {
      "de": "werben",
      "lv": "Proposer"
    },
    "praesens": {
      "de": "er wirbt",
      "lv": "Il propose"
    },
    "imperfektIndikativ": {
      "de": "er warb",
      "lv": "Il a proposé"
    },
    "imperfektKonjunktiv": {
      "de": "er würbe",
      "lv": "Il proposerait"
    },
    "partizipVergangenheit": {
      "de": "geworben",
      "lv": "Proposé à"
    }
  },
  {
    "infinitiv": {
      "de": "werden",
      "lv": "Devenir"
    },
    "praesens": {
      "de": "er wird",
      "lv": "Il devient"
    },
    "imperfektIndikativ": {
      "de": "wurde",
      "lv": "Devenu"
    },
    "imperfektKonjunktiv": {
      "de": "wurde",
      "lv": "Devenu"
    },
    "partizipVergangenheit": {
      "de": "geworden",
      "lv": "Est devenu"
    }
  },
  {
    "infinitiv": {
      "de": "werfen",
      "lv": "Plus"
    },
    "praesens": {
      "de": "er wirft",
      "lv": "Il jette"
    },
    "imperfektIndikativ": {
      "de": "er warf",
      "lv": "Il a jeté"
    },
    "imperfektKonjunktiv": {
      "de": "er würfe",
      "lv": "Il a jeté"
    },
    "partizipVergangenheit": {
      "de": "geworfen",
      "lv": "Mesmes"
    }
  },
  {
    "infinitiv": {
      "de": "wiegen",
      "lv": "Peser"
    },
    "praesens": {
      "de": "er wiegt",
      "lv": "Il pèse"
    },
    "imperfektIndikativ": {
      "de": "er wog",
      "lv": "Il pesait"
    },
    "imperfektKonjunktiv": {
      "de": "er wöge",
      "lv": "Il pèserait"
    },
    "partizipVergangenheit": {
      "de": "gewogen",
      "lv": "Pondéré"
    }
  },
  {
    "infinitiv": {
      "de": "winden",
      "lv": "Tresser"
    },
    "praesens": {
      "de": "er windet",
      "lv": "Il épingle"
    },
    "imperfektIndikativ": {
      "de": "er wand",
      "lv": "Il tresse"
    },
    "imperfektKonjunktiv": {
      "de": "er wände",
      "lv": "Il tresserait"
    },
    "partizipVergangenheit": {
      "de": "gewunden",
      "lv": "Tressé"
    }
  },
  {
    "infinitiv": {
      "de": "wissen",
      "lv": "Savoir"
    },
    "praesens": {
      "de": "er weiß",
      "lv": "Il sait"
    },
    "imperfektIndikativ": {
      "de": "er wusste",
      "lv": "Il savait"
    },
    "imperfektKonjunktiv": {
      "de": "er wüsste",
      "lv": "Il saurait"
    },
    "partizipVergangenheit": {
      "de": "gewusst",
      "lv": "Connu"
    }
  },
  {
    "infinitiv": {
      "de": "wollen",
      "lv": "Veux"
    },
    "praesens": {
      "de": "er will",
      "lv": "Il veut"
    },
    "imperfektIndikativ": {
      "de": "wollte",
      "lv": "Je voulais"
    },
    "imperfektKonjunktiv": {
      "de": "wollte",
      "lv": "Je voulais"
    },
    "partizipVergangenheit": {
      "de": "gewollt",
      "lv": "Je voulais"
    }
  },
  {
    "infinitiv": {
      "de": "wringen",
      "lv": "Izgriezt / izspiest"
    },
    "praesens": {
      "de": "er wringt",
      "lv": "Il coupe"
    },
    "imperfektIndikativ": {
      "de": "wrang",
      "lv": "Izgrieza"
    },
    "imperfektKonjunktiv": {
      "de": "wrang",
      "lv": "Izgrieza"
    },
    "partizipVergangenheit": {
      "de": "gewrungen",
      "lv": "Izgriezts"
    }
  },
  {
    "infinitiv": {
      "de": "zeihen",
      "lv": "Vaine"
    },
    "praesens": {
      "de": "er zeiht",
      "lv": "Il blâme"
    },
    "imperfektIndikativ": {
      "de": "zieh",
      "lv": "Vainoja"
    },
    "imperfektKonjunktiv": {
      "de": "zieh",
      "lv": "Vainoja"
    },
    "partizipVergangenheit": {
      "de": "geziehen",
      "lv": "Vainojis"
    }
  },
  {
    "infinitiv": {
      "de": "ziehen",
      "lv": "Vilkt"
    },
    "praesens": {
      "de": "er zieht",
      "lv": "Il tire"
    },
    "imperfektIndikativ": {
      "de": "er zog",
      "lv": "Il a tiré"
    },
    "imperfektKonjunktiv": {
      "de": "er zöge",
      "lv": "Il traînerait"
    },
    "partizipVergangenheit": {
      "de": "gezogen",
      "lv": "Vilkts"
    }
  },
  {
    "infinitiv": {
      "de": "zwingen",
      "lv": "Le plus pitoyable"
    },
    "praesens": {
      "de": "er zwingt",
      "lv": "Il force"
    },
    "imperfektIndikativ": {
      "de": "er zwang",
      "lv": "Il a forcé"
    },
    "imperfektKonjunktiv": {
      "de": "er zwänge",
      "lv": "Il forcerait"
    },
    "partizipVergangenheit": {
      "de": "gezwungen",
      "lv": "Tartes"
    }
  },
  {
    "infinitiv": {
      "de": "empfangen",
      "lv": "Recevoir"
    },
    "praesens": {
      "de": "er empfängt",
      "lv": "Il reçoit"
    },
    "imperfektIndikativ": {
      "de": "er empfing",
      "lv": "Il a reçu"
    },
    "imperfektKonjunktiv": {
      "de": "er empfinge",
      "lv": "Il recevrait"
    },
    "partizipVergangenheit": {
      "de": "empfangen",
      "lv": "Reçu"
    }
  },
  {
    "infinitiv": {
      "de": "erwägen",
      "lv": "Considérer"
    },
    "praesens": {
      "de": "er erwägt",
      "lv": "Il considère"
    },
    "imperfektIndikativ": {
      "de": "er erwog",
      "lv": "Il considérait"
    },
    "imperfektKonjunktiv": {
      "de": "er erwöge",
      "lv": "Il considérerait"
    },
    "partizipVergangenheit": {
      "de": "erwogen",
      "lv": "Considéré"
    }
  },
  {
    "infinitiv": {
      "de": "fechten",
      "lv": "Se battre"
    },
    "praesens": {
      "de": "er ficht",
      "lv": "Il se bat"
    },
    "imperfektIndikativ": {
      "de": "er focht",
      "lv": "Il a eu du mal"
    },
    "imperfektKonjunktiv": {
      "de": "er föchte",
      "lv": "Il se battrait"
    },
    "partizipVergangenheit": {
      "de": "gefochten",
      "lv": "Combattu"
    }
  },
  {
    "infinitiv": {
      "de": "flechten",
      "lv": "Tresser"
    },
    "praesens": {
      "de": "er flicht",
      "lv": "Il épingle"
    },
    "imperfektIndikativ": {
      "de": "er flocht",
      "lv": "Il tresse"
    },
    "imperfektKonjunktiv": {
      "de": "er flöchte",
      "lv": "Il tresserait"
    },
    "partizipVergangenheit": {
      "de": "geflochten",
      "lv": "Tressé"
    }
  },
  {
    "infinitiv": {
      "de": "hangen",
      "lv": "Pendre"
    },
    "praesens": {
      "de": "er hängt",
      "lv": "Il pend"
    },
    "imperfektIndikativ": {
      "de": "er hing",
      "lv": "Il a pendu"
    },
    "imperfektKonjunktiv": {
      "de": "er hinge",
      "lv": "Il se pendrait"
    },
    "partizipVergangenheit": {
      "de": "gehangen",
      "lv": "Accrochez-vous"
    }
  },
  {
    "infinitiv": {
      "de": "spalten",
      "lv": "Diviser"
    },
    "praesens": {
      "de": "er spaltet",
      "lv": "Il se divise"
    },
    "imperfektIndikativ": {
      "de": "er spaltete",
      "lv": "Il s'est séparé"
    },
    "imperfektKonjunktiv": {
      "de": "er spaltete",
      "lv": "Il se séparerait"
    },
    "partizipVergangenheit": {
      "de": "gespalten",
      "lv": "Diviser"
    }
  },
  {
    "infinitiv": {
      "de": "verzeihen",
      "lv": "Piedot"
    },
    "praesens": {
      "de": "er verzeiht",
      "lv": "Il pardonne"
    },
    "imperfektIndikativ": {
      "de": "er verzieh",
      "lv": "Il a pardonné"
    },
    "imperfektKonjunktiv": {
      "de": "er verziehe",
      "lv": "Il pardonnerait"
    },
    "partizipVergangenheit": {
      "de": "verziehen",
      "lv": "Piedsots"
    }
  }
];

window.VERB_ENTRIES = VERB_ENTRIES;

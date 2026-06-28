const SENTENCE_ENTRIES = [
  {
    "de": "eine Datei erstellen",
    "lv": "Sastādīt kartotēku",
    "level": "Sätze"
  },
  {
    "de": "auf die Dauer",
    "lv": "Ilgi • Uz ilgu laiku",
    "level": "Sätze"
  },
  {
    "de": "Das wird von kurzer Dauer sein.",
    "lv": "Tas nepastāvēs ilgi.",
    "level": "Sätze"
  },
  {
    "de": "jemandem den Daumen drücken",
    "lv": "turēt īkšķi par kādu",
    "level": "Sätze"
  },
  {
    "de": "Hüte dich davor!",
    "lv": "Sargies no tā!",
    "level": "Sätze"
  },
  {
    "de": "Er ist nicht der Mann dazu.",
    "lv": "Viņš tam nav piemērots.",
    "level": "Sätze"
  },
  {
    "de": "Wenn nichts dazwischenkommt.",
    "lv": "Ja nekas negadīsies starpā • Neizjauks",
    "level": "Sätze"
  },
  {
    "de": "den Tisch decken",
    "lv": "klāt galdu",
    "level": "Sätze"
  },
  {
    "de": "zu der Delegation gehören",
    "lv": "būt delegācijas sastāvā",
    "level": "Sätze"
  },
  {
    "de": "Das kann ich mir denken!",
    "lv": "To es varu iedomāties!",
    "level": "Sätze"
  },
  {
    "de": "Ist er denn krank?",
    "lv": "Vai tad viņš ir slims?",
    "level": "Sätze"
  },
  {
    "de": "Was denn?",
    "lv": "Ko tad?",
    "level": "Sätze"
  },
  {
    "de": "Desto mehr.",
    "lv": "Jo vairāk.",
    "level": "Sätze"
  },
  {
    "de": "Je mehr, desto besser.",
    "lv": "Jo vairāk, jo labāk.",
    "level": "Sätze"
  },
  {
    "de": "ins Detail gehen",
    "lv": "Iztirzāt • Izklāstīt sīkumos",
    "level": "Sätze"
  },
  {
    "de": "Alles deutet auf Regen.",
    "lv": "Viss rāda, ka būs lietus.",
    "level": "Sätze"
  },
  {
    "de": "dicht an etwas",
    "lv": "Cieši klāt • Tieši līdzās",
    "level": "Sätze"
  },
  {
    "de": "dicht vor",
    "lv": "tieši priekšā",
    "level": "Sätze"
  },
  {
    "de": "Damit ist mir wenig gedient.",
    "lv": "Ar to man maz līdzēts.",
    "level": "Sätze"
  },
  {
    "de": "als Vorbild dienen",
    "lv": "Derēt par paraugu",
    "level": "Sätze"
  },
  {
    "de": "außer Dienst",
    "lv": "pensijā",
    "level": "Sätze"
  },
  {
    "de": "Dienst haben",
    "lv": "dežūrēt",
    "level": "Sätze"
  },
  {
    "de": "Dienst leisten",
    "lv": "pakalpot",
    "level": "Sätze"
  },
  {
    "de": "jemandem zu Diensten stehen",
    "lv": "būt kāda rīcībā",
    "level": "Sätze"
  },
  {
    "de": "jemandem einen schlechten Dienst erweisen",
    "lv": "izdarīt kādam lāča pakalpojumu",
    "level": "Sätze"
  },
  {
    "de": "Er ist dienstlich verhindert.",
    "lv": "Viņš ir aizkavējies dienesta pienākumu dēļ.",
    "level": "Sätze"
  },
  {
    "de": "diesseits des Flusses",
    "lv": "šaipus upes",
    "level": "Sätze"
  },
  {
    "de": "vor allen Dingen",
    "lv": "Sevišķi • Vispirms",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie doch!",
    "lv": "Runājiet jel !",
    "level": "Sätze"
  },
  {
    "de": "habilitierter Doktor",
    "lv": "habilitēts doktors",
    "level": "Sätze"
  },
  {
    "de": "seinen Doktor machen",
    "lv": "iegūt doktora grādu",
    "level": "Sätze"
  },
  {
    "de": "Es donnert.",
    "lv": "Pērkons rūc.",
    "level": "Sätze"
  },
  {
    "de": "Doppelt so groß.",
    "lv": "Otrtik liels.",
    "level": "Sätze"
  },
  {
    "de": "Von dort.",
    "lv": "No turienes.",
    "level": "Sätze"
  },
  {
    "de": "per Draht",
    "lv": "pa telegrāfu",
    "level": "Sätze"
  },
  {
    "de": "ein drahtloses Telefon",
    "lv": "radiotelefons",
    "level": "Sätze"
  },
  {
    "de": "Die Zeit drängt.",
    "lv": "Laiks negaida.",
    "level": "Sätze"
  },
  {
    "de": "einen Film drehen",
    "lv": "uzņemt filmu",
    "level": "Sätze"
  },
  {
    "de": "sich drehen",
    "lv": "Griezties • Grozīties",
    "level": "Sätze"
  },
  {
    "de": "zu dritt",
    "lv": "Trijatā • Pa trim",
    "level": "Sätze"
  },
  {
    "de": "zum Dritten",
    "lv": "treškārt",
    "level": "Sätze"
  },
  {
    "de": "einen Motor drosseln",
    "lv": "Apslāpēt • Izslēgt motoru",
    "level": "Sätze"
  },
  {
    "de": "jemandem die Hand drücken",
    "lv": "spiest kādam roku",
    "level": "Sätze"
  },
  {
    "de": "jemanden an die Wand drücken",
    "lv": "piespiest kādu pie sienas",
    "level": "Sätze"
  },
  {
    "de": "Ihn drücken Sorgen.",
    "lv": "Viņu nomāc rūpes.",
    "level": "Sätze"
  },
  {
    "de": "keine Widerrede dulden",
    "lv": "neciest, ka runā pretī",
    "level": "Sätze"
  },
  {
    "de": "durch seine Hilfe",
    "lv": "ar viņa palīdzību",
    "level": "Sätze"
  },
  {
    "de": "durch Fleiß etwas erreichen",
    "lv": "sasniegt kaut ko ar centību",
    "level": "Sätze"
  },
  {
    "de": "Hast du das Buch durchgearbeitet?",
    "lv": "Vai tu esi grāmatu rūpīgi izlasījis?",
    "level": "Sätze"
  },
  {
    "de": "den Teig durcharbeiten",
    "lv": "rūpīgi izmīcīt mīklu",
    "level": "Sätze"
  },
  {
    "de": "durchaus nicht",
    "lv": "Nebūt ne • Nepavisam",
    "level": "Sätze"
  },
  {
    "de": "Die Glühbirne ist durchgebrannt.",
    "lv": "Spuldze ir izdegusi.",
    "level": "Sätze"
  },
  {
    "de": "ein Gesetz durchbringen",
    "lv": "panākt, lai likums tiktu pieņemts",
    "level": "Sätze"
  },
  {
    "de": "einen Kranken durchbringen",
    "lv": "izārstēt slimnieku",
    "level": "Sätze"
  },
  {
    "de": "von einer Idee durchdrungen",
    "lv": "kādas idejas pārņemts",
    "level": "Sätze"
  },
  {
    "de": "auf der Durchfahrt",
    "lv": "caurbraucot",
    "level": "Sätze"
  },
  {
    "de": "ein Schiff durch die Meerenge durchführen",
    "lv": "izvest kuģi cauri jūras šaurumam",
    "level": "Sätze"
  },
  {
    "de": "Kein Durchgang!",
    "lv": "Izejas nav!",
    "level": "Sätze"
  },
  {
    "de": "Der Antrag ging durch.",
    "lv": "Priekšlikumu pieņēma.",
    "level": "Sätze"
  },
  {
    "de": "auf der Durchreise",
    "lv": "caurbraucot",
    "level": "Sätze"
  },
  {
    "de": "im Durchschnitt",
    "lv": "caurmērā",
    "level": "Sätze"
  },
  {
    "de": "Es gelang ihm, seinen Willen durchzusetzen.",
    "lv": "Viņam izdevās panākt, lai tiktu izpildīta viņa griba.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich Sie bitten?",
    "lv": "Vai es drīkstu jūs lūgt?",
    "level": "Sätze"
  },
  {
    "de": "nach Ruhm dürsten",
    "lv": "alkt pēc slavas",
    "level": "Sätze"
  },
  {
    "de": "Ich bin durstig.",
    "lv": "Man slāpst • Es esmu izslāpis",
    "level": "Sätze"
  },
  {
    "de": "Dutzende von Menschen",
    "lv": "desmitiem cilvēku",
    "level": "Sätze"
  },
  {
    "de": "sich duzen",
    "lv": "būt uz «tu»",
    "level": "Sätze"
  },
  {
    "de": "Flut und Ebbe",
    "lv": "paisums un bēgums",
    "level": "Sätze"
  },
  {
    "de": "Eben das meine ich.",
    "lv": "Tieši tā es domāju.",
    "level": "Sätze"
  },
  {
    "de": "ein ebenbürtiger Gegner",
    "lv": "līdzvērtīgs pretinieks",
    "level": "Sätze"
  },
  {
    "de": "echtes Gold",
    "lv": "īsts zelts",
    "level": "Sätze"
  },
  {
    "de": "ein echter Freund",
    "lv": "īsts draugs",
    "level": "Sätze"
  },
  {
    "de": "Es ist ganz egal.",
    "lv": "Tas ir gluži vienalga.",
    "level": "Sätze"
  },
  {
    "de": "eine Ehe schließen",
    "lv": "noslēgt laulību",
    "level": "Sätze"
  },
  {
    "de": "die Ehe scheiden",
    "lv": "šķirt laulību",
    "level": "Sätze"
  },
  {
    "de": "eheliche Kinder",
    "lv": "laulībā dzimuši bērni",
    "level": "Sätze"
  },
  {
    "de": "jemandem zu Ehren",
    "lv": "kādam par godu",
    "level": "Sätze"
  },
  {
    "de": "weichgekochtes Ei",
    "lv": "mīksti novārīta ola",
    "level": "Sätze"
  },
  {
    "de": "hartgekochtes Ei",
    "lv": "cieti novārīta ola",
    "level": "Sätze"
  },
  {
    "de": "den Eid leisten",
    "lv": "zvērēt",
    "level": "Sätze"
  },
  {
    "de": "unter Eid bezeugen",
    "lv": "apliecināt ar zvērestu",
    "level": "Sätze"
  },
  {
    "de": "im Eifer",
    "lv": "Uztraukumā • Strīda karstumā",
    "level": "Sätze"
  },
  {
    "de": "in Eifer geraten",
    "lv": "Iekarst • Iedegties",
    "level": "Sätze"
  },
  {
    "de": "in eigener Person",
    "lv": "personīgi",
    "level": "Sätze"
  },
  {
    "de": "sich etwas zu Eigen machen",
    "lv": "apgūt",
    "level": "Sätze"
  },
  {
    "de": "eigenhändig abgeben",
    "lv": "nodot personīgi",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie eigentlich?",
    "lv": "Ko jūs īsti gribat?",
    "level": "Sätze"
  },
  {
    "de": "jemandes geistiges Eigentum",
    "lv": "kāda intelektuālais īpašums",
    "level": "Sätze"
  },
  {
    "de": "in Eile",
    "lv": "steigā",
    "level": "Sätze"
  },
  {
    "de": "Das hat keine Eile.",
    "lv": "Tas nav steidzami.",
    "level": "Sätze"
  },
  {
    "de": "Eilt es mit dieser Sache?",
    "lv": "Vai šī lieta steidzama?",
    "level": "Sätze"
  },
  {
    "de": "Eilt sehr!",
    "lv": "Ļoti steidzami!",
    "level": "Sätze"
  },
  {
    "de": "Ich habe es eilig.",
    "lv": "Es steidzos.",
    "level": "Sätze"
  },
  {
    "de": "Etwas ist im Eimer.",
    "lv": "Bezcerīgi • Pagalam",
    "level": "Sätze"
  },
  {
    "de": "mit einbegriffen",
    "lv": "ieskaitot",
    "level": "Sätze"
  },
  {
    "de": "Du bildest dir nur ein, krank zu sein.",
    "lv": "Tu tikai iedomājies, ka esi slims.",
    "level": "Sätze"
  },
  {
    "de": "Er bildet sich nichts auf seinen Erfolg ein.",
    "lv": "Viņš nav iedomīgs savu panākumu dēļ.",
    "level": "Sätze"
  },
  {
    "de": "in ein Land einbrechen",
    "lv": "Ielauzties • Iebrukt kādā valstī",
    "level": "Sätze"
  },
  {
    "de": "bei einer Spekulation viel Geld einbüßen",
    "lv": "spekulācijas dēļ zaudēt daudz naudas",
    "level": "Sätze"
  },
  {
    "de": "auf jemanden Eindruck machen",
    "lv": "atstāt uz kādu iespaidu",
    "level": "Sätze"
  },
  {
    "de": "unter dem Eindruck des Erlebnisses stehen",
    "lv": "būt pārdzīvojuma iespaidā",
    "level": "Sätze"
  },
  {
    "de": "einfacher Soldat",
    "lv": "ierindas kareivis",
    "level": "Sätze"
  },
  {
    "de": "Was fällt dir ein?",
    "lv": "Kas tev nāk prātā?",
    "level": "Sätze"
  },
  {
    "de": "Einfluss haben auf jemanden",
    "lv": "ietekmēt kādu",
    "level": "Sätze"
  },
  {
    "de": "unter jemandes Einfluss stehen",
    "lv": "būt kāda ietekmē",
    "level": "Sätze"
  },
  {
    "de": "Verhandlungen einfrieren",
    "lv": "pārtraukt sarunas",
    "level": "Sätze"
  },
  {
    "de": "die Eingabe prüfen",
    "lv": "izskatīt iesniegumu",
    "level": "Sätze"
  },
  {
    "de": "eine Wette eingehen",
    "lv": "Saderēt • Noslēgt derības",
    "level": "Sätze"
  },
  {
    "de": "auf eine Frage eingehen",
    "lv": "iedziļināties kādā jautājumā",
    "level": "Sätze"
  },
  {
    "de": "eingehende Post",
    "lv": "ienākošais pasts",
    "level": "Sätze"
  },
  {
    "de": "seinen Fehler eingestehen",
    "lv": "atzīt savu kļūdu",
    "level": "Sätze"
  },
  {
    "de": "chirurgischer Eingriff",
    "lv": "ķirurģiska operācija",
    "level": "Sätze"
  },
  {
    "de": "einheitlich handeln",
    "lv": "rīkoties vienoti",
    "level": "Sätze"
  },
  {
    "de": "einkaufen gehen",
    "lv": "iet iepirkties",
    "level": "Sätze"
  },
  {
    "de": "Genehmigung einholen",
    "lv": "dabūt atļauju",
    "level": "Sätze"
  },
  {
    "de": "Rat einholen",
    "lv": "lūgt padomu",
    "level": "Sätze"
  },
  {
    "de": "sich einig sein",
    "lv": "būt vienisprātis",
    "level": "Sätze"
  },
  {
    "de": "sich einig werden",
    "lv": "vienoties",
    "level": "Sätze"
  },
  {
    "de": "zu einer Einigung kommen",
    "lv": "panākt vienošanos",
    "level": "Sätze"
  },
  {
    "de": "Schulden einkassieren",
    "lv": "iekasēt parādus",
    "level": "Sätze"
  },
  {
    "de": "Einkäufe machen",
    "lv": "iepirkties",
    "level": "Sätze"
  },
  {
    "de": "in Einklang bringen",
    "lv": "saskaņot",
    "level": "Sätze"
  },
  {
    "de": "seine Gedanken in Worte einkleiden",
    "lv": "izteikt savas domas vārdos",
    "level": "Sätze"
  },
  {
    "de": "zum Mittagessen einladen",
    "lv": "ielūgt pusdienās",
    "level": "Sätze"
  },
  {
    "de": "sich in ein Gespräch mit jemandem einlassen",
    "lv": "ielaisties ar kādu sarunā",
    "level": "Sätze"
  },
  {
    "de": "ein gutes Wort für jemanden einlegen",
    "lv": "aizbilst kādu labu vārdu par kādu",
    "level": "Sätze"
  },
  {
    "de": "Das leuchtet mir nicht ein.",
    "lv": "To es nevaru saprast • Tas man nav skaidrs",
    "level": "Sätze"
  },
  {
    "de": "Es war einmal.",
    "lv": "Reiz bija.",
    "level": "Sätze"
  },
  {
    "de": "nicht einmal",
    "lv": "pat ne",
    "level": "Sätze"
  },
  {
    "de": "sich in fremde Angelegenheiten einmischen",
    "lv": "jaukties citu darīšanās",
    "level": "Sätze"
  },
  {
    "de": "Geld einnehmen",
    "lv": "ieņemt naudu",
    "level": "Sätze"
  },
  {
    "de": "eine Festung einnehmen",
    "lv": "ieņemt cietoksni",
    "level": "Sätze"
  },
  {
    "de": "mit eingerechnet",
    "lv": "Ieskaitot • Ierēķinot",
    "level": "Sätze"
  },
  {
    "de": "seinen Fehler einsehen",
    "lv": "atzīt savu kļūdu",
    "level": "Sätze"
  },
  {
    "de": "Einspruch erheben",
    "lv": "Celt iebildumus • Protestēt",
    "level": "Sätze"
  },
  {
    "de": "etwas einstecken müssen",
    "lv": "Paciest • Samierināties",
    "level": "Sätze"
  },
  {
    "de": "eine Kritik einstecken müssen",
    "lv": "paciest kritiku",
    "level": "Sätze"
  },
  {
    "de": "Steigen Sie bitte ein!",
    "lv": "Lūdzu, iekāpiet!",
    "level": "Sätze"
  },
  {
    "de": "in ein Projekt einsteigen",
    "lv": "līdzdarboties projektā",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie ein!",
    "lv": "Lūdzu, nāciet iekšā!",
    "level": "Sätze"
  },
  {
    "de": "für jemanden eintreten",
    "lv": "Aizstāvēt kādu • Nostāties kāda pusē",
    "level": "Sätze"
  },
  {
    "de": "einverstanden sein",
    "lv": "būt ar mieru",
    "level": "Sätze"
  },
  {
    "de": "Einverstanden!",
    "lv": "Labi! Es esmu ar mieru! Piekrītu!",
    "level": "Sätze"
  },
  {
    "de": "mit Einverständnis des Direktors",
    "lv": "ar direktora piekrišanu",
    "level": "Sätze"
  },
  {
    "de": "einen Einwand erheben",
    "lv": "iebilst",
    "level": "Sätze"
  },
  {
    "de": "jemanden in ein Geheimnis einweihen",
    "lv": "uzticēt kādam noslēpumu",
    "level": "Sätze"
  },
  {
    "de": "in einen Vorschlag einwilligen",
    "lv": "piekrist kādam priekšlikumam",
    "level": "Sätze"
  },
  {
    "de": "nicht auf Einzelheiten eingehen",
    "lv": "neielaisties sīkumos",
    "level": "Sätze"
  },
  {
    "de": "im Einzelnen",
    "lv": "atsevišķi",
    "level": "Sätze"
  },
  {
    "de": "Einzelnes hat mir dort gefallen.",
    "lv": "Kaut kas man tur patika.",
    "level": "Sätze"
  },
  {
    "de": "Erkundigungen einziehen",
    "lv": "ievākt ziņas",
    "level": "Sätze"
  },
  {
    "de": "einzig und allein",
    "lv": "Vienīgi • Tikai",
    "level": "Sätze"
  },
  {
    "de": "mit der Eisenbahn fahren",
    "lv": "braukt pa dzelzceļu",
    "level": "Sätze"
  },
  {
    "de": "schwarze Industrie",
    "lv": "melnā metalurģija",
    "level": "Sätze"
  },
  {
    "de": "geschwätzig wie eine Elster",
    "lv": "pļāpīgs kā žagata",
    "level": "Sätze"
  },
  {
    "de": "Es empfiehlt sich.",
    "lv": "Ir ieteicams.",
    "level": "Sätze"
  },
  {
    "de": "zu Ende sein",
    "lv": "beigties",
    "level": "Sätze"
  },
  {
    "de": "zu Ende bringen",
    "lv": "Nobeigt • Pabeigt",
    "level": "Sätze"
  },
  {
    "de": "letzten Endes",
    "lv": "galu galā",
    "level": "Sätze"
  },
  {
    "de": "etwas entbehren können",
    "lv": "Varēt iztikt bez kaut kā • Pieciest kaut ko",
    "level": "Sätze"
  },
  {
    "de": "Der Name ist mir entfallen.",
    "lv": "Vārds man ir aizmirsies.",
    "level": "Sätze"
  },
  {
    "de": "entgegen dem Befehl",
    "lv": "pret pavēli",
    "level": "Sätze"
  },
  {
    "de": "sie wohnen uns entgegen",
    "lv": "viņi dzīvo mums pretī",
    "level": "Sätze"
  },
  {
    "de": "in die entgegengesetzte Richtung gehen",
    "lv": "iet pretējā virzienā",
    "level": "Sätze"
  },
  {
    "de": "Diese Flasche enthält Essig.",
    "lv": "Šai pudelē ir etiķis.",
    "level": "Sätze"
  },
  {
    "de": "den Fluss entlang",
    "lv": "gar upi",
    "level": "Sätze"
  },
  {
    "de": "sich der Kleider entledigen",
    "lv": "novilkt drēbes",
    "level": "Sätze"
  },
  {
    "de": "sich entmutigen lassen",
    "lv": "zaudēt dūšu",
    "level": "Sätze"
  },
  {
    "de": "Aus dem Gesagten entnehme ich, dass...",
    "lv": "No sacītā es secinu, ka...",
    "level": "Sätze"
  },
  {
    "de": "sich für etwas entscheiden",
    "lv": "izšķirties par kaut ko",
    "level": "Sätze"
  },
  {
    "de": "Entschuldigen Sie bitte!",
    "lv": "Atvainojiet, lūdzu!",
    "level": "Sätze"
  },
  {
    "de": "entweder ... oder ...",
    "lv": "Vai nu ... vai • Viens no diviem",
    "level": "Sätze"
  },
  {
    "de": "meines Erachtens",
    "lv": "Pēc manām domām • Pēc mana ieskata",
    "level": "Sätze"
  },
  {
    "de": "ein Erbe antreten",
    "lv": "saņemt mantojumu",
    "level": "Sätze"
  },
  {
    "de": "ein Erbe ausschlagen",
    "lv": "atteikties no mantojuma",
    "level": "Sätze"
  },
  {
    "de": "einen Brief erbrechen",
    "lv": "atplēst vēstuli",
    "level": "Sätze"
  },
  {
    "de": "das erfordert viel Zeit",
    "lv": "tas prasa daudz laika",
    "level": "Sätze"
  },
  {
    "de": "eine erfreuliche Wendung",
    "lv": "patīkams pavērsiens",
    "level": "Sätze"
  },
  {
    "de": "sich ergeben aus",
    "lv": "izrietēt no",
    "level": "Sätze"
  },
  {
    "de": "aus dem Bericht ergibt sich, dass ...",
    "lv": "no ziņojuma izriet, ka ...",
    "level": "Sätze"
  },
  {
    "de": "einen Beruf ergreifen",
    "lv": "izvēlēties profesiju",
    "level": "Sätze"
  },
  {
    "de": "das Wort ergreifen",
    "lv": "ņemt vārdu",
    "level": "Sätze"
  },
  {
    "de": "Maßnahmen ergreifen",
    "lv": "veikt pasākumus",
    "level": "Sätze"
  },
  {
    "de": "die Gelegenheit ergreifen",
    "lv": "izmantot izdevību",
    "level": "Sätze"
  },
  {
    "de": "jemandes Partei ergreifen",
    "lv": "nostāties kāda pusē",
    "level": "Sätze"
  },
  {
    "de": "einen Brief erhalten",
    "lv": "saņemt vēstuli",
    "level": "Sätze"
  },
  {
    "de": "sich in gutem Zustand erhalten",
    "lv": "saglabāties labā stāvoklī",
    "level": "Sätze"
  },
  {
    "de": "die Stimme erheben",
    "lv": "pacelt balsi",
    "level": "Sätze"
  },
  {
    "de": "Protest erheben",
    "lv": "protestēt",
    "level": "Sätze"
  },
  {
    "de": "eine erhebliche Summe",
    "lv": "krietni liela summa",
    "level": "Sätze"
  },
  {
    "de": "sich von der Angst erholen",
    "lv": "attapties no bailēm",
    "level": "Sätze"
  },
  {
    "de": "zur Erinnerung",
    "lv": "Atmiņai • Piemiņai",
    "level": "Sätze"
  },
  {
    "de": "den Sieg erkämpfen",
    "lv": "izcīnīt uzvaru",
    "level": "Sätze"
  },
  {
    "de": "nach etwas erkundigen",
    "lv": "apvaicāties par kaut ko",
    "level": "Sätze"
  },
  {
    "de": "eine Strafe erlassen",
    "lv": "atlaist kādam sodu",
    "level": "Sätze"
  },
  {
    "de": "es ist erlaubt",
    "lv": "Ir atļauts • Drīkst",
    "level": "Sätze"
  },
  {
    "de": "eine Niederlage erleiden",
    "lv": "Ciest sakāvi • Tikt sakautam",
    "level": "Sätze"
  },
  {
    "de": "die Möglichkeit eröffnen",
    "lv": "rodas iespēja",
    "level": "Sätze"
  },
  {
    "de": "den Zug erreichen",
    "lv": "paspēt uz vilcienu",
    "level": "Sätze"
  },
  {
    "de": "einen Sieg erringen",
    "lv": "izcīnīt uzvaru",
    "level": "Sätze"
  },
  {
    "de": "Ersatz leisten",
    "lv": "atlīdzināt",
    "level": "Sätze"
  },
  {
    "de": "in Erscheinung treten",
    "lv": "parādīties",
    "level": "Sätze"
  },
  {
    "de": "jemandes Geduld ist erschöpft",
    "lv": "kāda pacietība ir izsmelta",
    "level": "Sätze"
  },
  {
    "de": "daraus ist zu ersehen, dass ...",
    "lv": "no tā redzams, ka ...",
    "level": "Sätze"
  },
  {
    "de": "erst heute",
    "lv": "tikai šodien",
    "level": "Sätze"
  },
  {
    "de": "wer war der Erste?",
    "lv": "kurš bija pirmais?",
    "level": "Sätze"
  },
  {
    "de": "fürs Erste",
    "lv": "Vispirms • Pagaidām • Iesākumam",
    "level": "Sätze"
  },
  {
    "de": "jemanden beim Lügen ertappen",
    "lv": "pieķert kādu melos",
    "level": "Sätze"
  },
  {
    "de": "die Stirn in Falten ziehen",
    "lv": "savilt pieri grumbās",
    "level": "Sätze"
  },
  {
    "de": "Fische fangen",
    "lv": "zvejot zivis",
    "level": "Sätze"
  },
  {
    "de": "Feuer fangen",
    "lv": "aizdegties",
    "level": "Sätze"
  },
  {
    "de": "der Saal fasst über tausend Menschen",
    "lv": "zālē var saiet vairāk nekā tūkstotis cilvēku",
    "level": "Sätze"
  },
  {
    "de": "einen Beschluss fassen",
    "lv": "pieņemt lēmumu",
    "level": "Sätze"
  },
  {
    "de": "Mut fassen",
    "lv": "saņemt drosmi",
    "level": "Sätze"
  },
  {
    "de": "sich kurz fassen",
    "lv": "izteikties īsi",
    "level": "Sätze"
  },
  {
    "de": "jemanden aus der Fassung bringen",
    "lv": "izvest kādu no pacietības",
    "level": "Sätze"
  },
  {
    "de": "aus der Fassung geraten",
    "lv": "zaudēt savaldīšanos",
    "level": "Sätze"
  },
  {
    "de": "ein fauler Witz",
    "lv": "muļķīgs joks",
    "level": "Sätze"
  },
  {
    "de": "an der Sache ist etwas faul",
    "lv": "te ir kaut kas aizdomīgs",
    "level": "Sätze"
  },
  {
    "de": "es fehlt uns an Geld",
    "lv": "mums trūkst naudas",
    "level": "Sätze"
  },
  {
    "de": "wer fehlt heute?",
    "lv": "kas šodien nav ieradies?",
    "level": "Sätze"
  },
  {
    "de": "was fehlt dir?",
    "lv": "kas tev kait?",
    "level": "Sätze"
  },
  {
    "de": "einen Fehler machen",
    "lv": "izdarīt kļūdu",
    "level": "Sätze"
  },
  {
    "de": "jemandem auf den Fersen sein",
    "lv": "Sekot kādam pa pēdām • Būt kādam uz pēdām",
    "level": "Sätze"
  },
  {
    "de": "jemandem das Fell über die Ohren ziehen",
    "lv": "kādam novilkt ādu pār acīm",
    "level": "Sätze"
  },
  {
    "de": "ein dickes Fell haben",
    "lv": "būt ar biezu ādu",
    "level": "Sätze"
  },
  {
    "de": "das Fenster geht auf die Straße",
    "lv": "logs ir ielas pusē",
    "level": "Sätze"
  },
  {
    "de": "von fern und nah",
    "lv": "no tuvienes un tālienes",
    "level": "Sätze"
  },
  {
    "de": "einer Versammlung fernbleiben",
    "lv": "neapmeklēt sapulci",
    "level": "Sätze"
  },
  {
    "de": "einen festen Wohnsitz haben",
    "lv": "būt pastāvīgai dzīvesvietai",
    "level": "Sätze"
  },
  {
    "de": "den Tag festlegen",
    "lv": "noteikt dienu",
    "level": "Sätze"
  },
  {
    "de": "den Termin festsetzen",
    "lv": "noteikt termiņu",
    "level": "Sätze"
  },
  {
    "de": "etwas feststellen",
    "lv": "kaut ko konstatēt",
    "level": "Sätze"
  },
  {
    "de": "Feuer!",
    "lv": "Uguni!",
    "level": "Sätze"
  },
  {
    "de": "im Feuer stehen",
    "lv": "atrasties uguns joslā",
    "level": "Sätze"
  },
  {
    "de": "mit Feuer spielen",
    "lv": "rotaļāties ar uguni",
    "level": "Sätze"
  },
  {
    "de": "für jemanden durchs Feuer gehen",
    "lv": "kāda dēļ izdarīt visu",
    "level": "Sätze"
  },
  {
    "de": "er hat Fieber",
    "lv": "viņam ir drudzis",
    "level": "Sätze"
  },
  {
    "de": "dieser Film läuft in mehreren Kinos",
    "lv": "šo filmu rāda vairākos kinoteātros",
    "level": "Sätze"
  },
  {
    "de": "ich finde es richtig",
    "lv": "es uzskatu, ka tas ir pareizi",
    "level": "Sätze"
  },
  {
    "de": "keinen Finger krumm machen",
    "lv": "Neko nedarīt • Slinkot",
    "level": "Sätze"
  },
  {
    "de": "die Finger von etwas lassen",
    "lv": "neķerties klāt",
    "level": "Sätze"
  },
  {
    "de": "die Finger im Spiel haben",
    "lv": "būt slepeni kaut kur iejauktam",
    "level": "Sätze"
  },
  {
    "de": "es ist heiß",
    "lv": "ir karsts",
    "level": "Sätze"
  },
  {
    "de": "wer hat dich geheißen, das zu schreiben?",
    "lv": "kas tev lika to rakstīt?",
    "level": "Sätze"
  },
  {
    "de": "wie heißen Sie?",
    "lv": "kā jūs sauc?",
    "level": "Sätze"
  },
  {
    "de": "was soll das heißen?",
    "lv": "ko tas nozīmē?",
    "level": "Sätze"
  },
  {
    "de": "das heißt",
    "lv": "tas ir",
    "level": "Sätze"
  },
  {
    "de": "ein heller Klang",
    "lv": "dzidra skaņa",
    "level": "Sätze"
  },
  {
    "de": "das Hemd wechseln",
    "lv": "uzvilkt citu kreklu",
    "level": "Sätze"
  },
  {
    "de": "hin und her",
    "lv": "šurp un turp",
    "level": "Sätze"
  },
  {
    "de": "von oben her",
    "lv": "no augšas",
    "level": "Sätze"
  },
  {
    "de": "es ist eine Woche her, dass...",
    "lv": "ir jau nedēļa, kopš...",
    "level": "Sätze"
  },
  {
    "de": "das ist schon lange her",
    "lv": "tas ir jau sen",
    "level": "Sätze"
  },
  {
    "de": "bitte treten Sie näher heran!",
    "lv": "lūdzu, nāciet tuvāk!",
    "level": "Sätze"
  },
  {
    "de": "heraus mit der Sprache!",
    "lv": "runā! stāsti!",
    "level": "Sätze"
  },
  {
    "de": "gesammelte Werke herausgeben",
    "lv": "izdot kopotus rakstus",
    "level": "Sätze"
  },
  {
    "de": "können Sie mir auf hundert Euro herausgeben?",
    "lv": "vai jūs man varat izdot no 100 eiro?",
    "level": "Sätze"
  },
  {
    "de": "aus diesem Streit halte ich mich heraus",
    "lv": "šai strīdā es neiejaucos",
    "level": "Sätze"
  },
  {
    "de": "das Werk ist soeben herausgekommen",
    "lv": "darbs ir patlaban iznācis",
    "level": "Sätze"
  },
  {
    "de": "seine Behauptung stellte sich als wahr heraus",
    "lv": "viņa apgalvojums izrādījās pareizs",
    "level": "Sätze"
  },
  {
    "de": "im Herbst",
    "lv": "rudenī",
    "level": "Sätze"
  },
  {
    "de": "meine Herrschaften!",
    "lv": "kungi!",
    "level": "Sätze"
  },
  {
    "de": "ein Programm herunterladen",
    "lv": "iekopēt, pārkopēt programmu",
    "level": "Sätze"
  },
  {
    "de": "etwas leichten Herzens tun",
    "lv": "darīt kaut ko ar vieglu sirdi",
    "level": "Sätze"
  },
  {
    "de": "sich ein Herz fassen",
    "lv": "saņemt dūšu",
    "level": "Sätze"
  },
  {
    "de": "von ganzem Herzen",
    "lv": "no visas sirds",
    "level": "Sätze"
  },
  {
    "de": "ein herzlicher Empfang",
    "lv": "sirsnīga uzņemšana",
    "level": "Sätze"
  },
  {
    "de": "herzliche Grüße",
    "lv": "sirsnīgi sveicieni",
    "level": "Sätze"
  },
  {
    "de": "eine Hetze gegen jemanden betreiben",
    "lv": "kūdīt pret kādu",
    "level": "Sätze"
  },
  {
    "de": "Heu machen",
    "lv": "pļaut sienu",
    "level": "Sätze"
  },
  {
    "de": "von heute an",
    "lv": "sākot ar šodienu",
    "level": "Sätze"
  },
  {
    "de": "heute früh",
    "lv": "šorīt",
    "level": "Sätze"
  },
  {
    "de": "heute Nacht",
    "lv": "šonakt",
    "level": "Sätze"
  },
  {
    "de": "Hilfe leisten",
    "lv": "palīdzēt, sniegt palīdzību",
    "level": "Sätze"
  },
  {
    "de": "Hilfe bringen",
    "lv": "palīdzēt, sniegt palīdzību",
    "level": "Sätze"
  },
  {
    "de": "zu Hilfe nehmen",
    "lv": "ņemt palīgā",
    "level": "Sätze"
  },
  {
    "de": "zu Hilfe rufen",
    "lv": "saukt palīgā",
    "level": "Sätze"
  },
  {
    "de": "zu Hilfe!",
    "lv": "palīgā!",
    "level": "Sätze"
  },
  {
    "de": "unter freiem Himmel",
    "lv": "zem klajas debess",
    "level": "Sätze"
  },
  {
    "de": "hin und wieder",
    "lv": "šad un tad",
    "level": "Sätze"
  },
  {
    "de": "den Berg hinab",
    "lv": "no kalna lejā",
    "level": "Sätze"
  },
  {
    "de": "den Fluss hinauf",
    "lv": "augšup pa upi",
    "level": "Sätze"
  },
  {
    "de": "die Treppe hinaufgehen",
    "lv": "iet kāpt augšā pa kāpnēm",
    "level": "Sätze"
  },
  {
    "de": "die ganze Nacht hindurch",
    "lv": "visu cauru nakti",
    "level": "Sätze"
  },
  {
    "de": "bis in die Nacht hinein arbeiten",
    "lv": "strādāt līdz vēlai naktij",
    "level": "Sätze"
  },
  {
    "de": "sich der Hoffnung hingeben",
    "lv": "lolot cerības",
    "level": "Sätze"
  },
  {
    "de": "in dieser Hinsicht",
    "lv": "šai ziņā",
    "level": "Sätze"
  },
  {
    "de": "in Hinsicht auf",
    "lv": "ņemot vērā",
    "level": "Sätze"
  },
  {
    "de": "nach hinten",
    "lv": "uz beigām, aizmugurē",
    "level": "Sätze"
  },
  {
    "de": "von hinten",
    "lv": "no muguras, mugurpuses",
    "level": "Sätze"
  },
  {
    "de": "hinter dem Haus",
    "lv": "aiz mājas",
    "level": "Sätze"
  },
  {
    "de": "Hinterlassenschaft antreten",
    "lv": "pārņemt mantojumu",
    "level": "Sätze"
  },
  {
    "de": "Steuern hinterziehen",
    "lv": "nenomaksāt nodokļus",
    "level": "Sätze"
  },
  {
    "de": "den Berg hinunter",
    "lv": "no kalna lejup",
    "level": "Sätze"
  },
  {
    "de": "die Treppe hinuntergehen",
    "lv": "iet lejā pa kāpnēm",
    "level": "Sätze"
  },
  {
    "de": "in der Hitze des Gefechts",
    "lv": "cīņas karstumā",
    "level": "Sätze"
  },
  {
    "de": "fünf Meter hoch",
    "lv": "piecus metrus augsts",
    "level": "Sätze"
  },
  {
    "de": "hohe Preise",
    "lv": "augstas cenas",
    "level": "Sätze"
  },
  {
    "de": "hohes Alter",
    "lv": "liels vecums",
    "level": "Sätze"
  },
  {
    "de": "auf hoher See",
    "lv": "atklātā jūrā",
    "level": "Sätze"
  },
  {
    "de": "im hohen Norden",
    "lv": "tālu ziemeļos",
    "level": "Sätze"
  },
  {
    "de": "ein dreifaches Hoch auf jemanden ausbringen",
    "lv": "uzsaukt kādam trīs reizes “Lai dzīvo!”",
    "level": "Sätze"
  },
  {
    "de": "Ich lerne jeden Tag Deutsch.",
    "lv": "Es katru dienu mācos vācu valodu.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das bitte wiederholen?",
    "lv": "Vai vari, lūdzu, to atkārtot?",
    "level": "Sätze"
  },
  {
    "de": "Wir treffen uns am Bahnhof.",
    "lv": "Mēs tiekamies dzelzceļa stacijā.",
    "level": "Sätze"
  },
  {
    "de": "Das hängt von der Situation ab.",
    "lv": "Tas ir atkarīgs no situācijas.",
    "level": "Sätze"
  },
  {
    "de": "Ich stimme dir teilweise zu.",
    "lv": "Es tev daļēji piekrītu.",
    "level": "Sätze"
  },
  {
    "de": "Diese Entscheidung hat weitreichende Folgen.",
    "lv": "Šim lēmumam ir tālejošas sekas.",
    "level": "Sätze"
  },
  {
    "de": "Man sollte mehrere Perspektiven berücksichtigen.",
    "lv": "Vajadzētu ņemt vērā vairākas perspektīvas.",
    "level": "Sätze"
  },
  {
    "de": "Könnten Sie das näher erläutern?",
    "lv": "Vai jūs varētu to paskaidrot sīkāk?",
    "level": "Sätze"
  },
  {
    "de": "Das geht mich nichts an.",
    "lv": "Tas uz mani neattiecas.",
    "level": "Sätze"
  },
  {
    "de": "Was mich anbelangt, ...",
    "lv": "Kas attiecas uz mani, ...",
    "level": "Sätze"
  },
  {
    "de": "Wie alt sind Sie?",
    "lv": "Cik jums gadu?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zwanzig Jahre alt.",
    "lv": "Man ir divdesmit gadu.",
    "level": "Sätze"
  },
  {
    "de": "Von heute an.",
    "lv": "No šodienas.",
    "level": "Sätze"
  },
  {
    "de": "Von jetzt an.",
    "lv": "No šī brīža.",
    "level": "Sätze"
  },
  {
    "de": "Anders geht es nicht.",
    "lv": "Citādi nevar.",
    "level": "Sätze"
  },
  {
    "de": "Rufen Sie mich an.",
    "lv": "Piezvaniet man.",
    "level": "Sätze"
  },
  {
    "de": "Das wurde anders gemacht.",
    "lv": "Tas tika izdarīts citādi.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mich vom Bahnhof abholen?",
    "lv": "Vai vari mani paņemt no stacijas?",
    "level": "Sätze"
  },
  {
    "de": "Bitte stellen Sie das Radio ab.",
    "lv": "Lūdzu, izslēdziet radio.",
    "level": "Sätze"
  },
  {
    "de": "Achte bitte auf den Verkehr.",
    "lv": "Lūdzu, pievērs uzmanību satiksmei.",
    "level": "Sätze"
  },
  {
    "de": "Darauf musst du achten.",
    "lv": "Tam tev jāpievērš uzmanība.",
    "level": "Sätze"
  },
  {
    "de": "Das hat sich geändert.",
    "lv": "Tas ir mainījies.",
    "level": "Sätze"
  },
  {
    "de": "Heute mache ich es anders.",
    "lv": "Šodien es to darīšu citādi.",
    "level": "Sätze"
  },
  {
    "de": "Die Agentur hat mich angerufen.",
    "lv": "Aģentūra man piezvanīja.",
    "level": "Sätze"
  },
  {
    "de": "Wir warten auf den Bus.",
    "lv": "Mēs gaidām autobusu.",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt allein.",
    "lv": "Viņš dzīvo viens.",
    "level": "Sätze"
  },
  {
    "de": "Das Restaurant ist aktuell geschlossen.",
    "lv": "Restorāns pašlaik ir slēgts.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Ausbildung absolviert.",
    "lv": "Es pabeidzu apmācību • Izglītību",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen das Problem miteinander absprechen.",
    "lv": "Mums šo problēmu jāizrunā kopā.",
    "level": "Sätze"
  },
  {
    "de": "Ich warte den Regen ab.",
    "lv": "Es nogaidīšu, kamēr lietus pāriet.",
    "level": "Sätze"
  },
  {
    "de": "Er arbeitet in der Verkaufsabteilung.",
    "lv": "Viņš strādā pārdošanas nodaļā.",
    "level": "Sätze"
  },
  {
    "de": "Der Abteilungsleiter kommt später.",
    "lv": "Nodaļas vadītājs atnāks vēlāk.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin allergisch gegen Katzen.",
    "lv": "Man ir alerģija pret kaķiem.",
    "level": "Sätze"
  },
  {
    "de": "Der Kühlschrank muss abgetaut werden.",
    "lv": "Ledusskapis jāatkausē.",
    "level": "Sätze"
  },
  {
    "de": "Die Ambulanz ist schon unterwegs.",
    "lv": "Ātrā palīdzība jau ir ceļā.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen unsere Arbeit besser abstimmen.",
    "lv": "Mums labāk jāsaskaņo darbs.",
    "level": "Sätze"
  },
  {
    "de": "Andererseits verstehe ich ihn.",
    "lv": "No otras puses, es viņu saprotu.",
    "level": "Sätze"
  },
  {
    "de": "Er hat nur etwas angedeutet.",
    "lv": "Viņš tikai deva mājienu.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Situation analysiert.",
    "lv": "Es analizēju situāciju.",
    "level": "Sätze"
  },
  {
    "de": "Das Problem muss anders gelöst werden.",
    "lv": "Problēma jāatrisina citādi.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat meinen Vorschlag akzeptiert.",
    "lv": "Viņa pieņēma manu priekšlikumu.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte das genauer analysieren.",
    "lv": "Es gribu to analizēt precīzāk.",
    "level": "Sätze"
  },
  {
    "de": "Die Versicherung hat meinen Schaden bezahlt.",
    "lv": "Apdrošināšana apmaksāja manus zaudējumus.",
    "level": "Sätze"
  },
  {
    "de": "Die Aggression bringt nichts Gutes.",
    "lv": "Agresija neko labu nedod.",
    "level": "Sätze"
  },
  {
    "de": "Der Agronom arbeitet auf dem Feld.",
    "lv": "Agronoms strādā laukā.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte den Vertrag ändern.",
    "lv": "Es gribu mainīt līgumu.",
    "level": "Sätze"
  },
  {
    "de": "Er ändert ständig seine Meinung.",
    "lv": "Viņš pastāvīgi maina savas domas.",
    "level": "Sätze"
  },
  {
    "de": "Ähnliche Probleme hatten wir schon früher.",
    "lv": "Līdzīgas problēmas mums jau bija agrāk.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ahnung!",
    "lv": "Nav ne jausmas!",
    "level": "Sätze"
  },
  {
    "de": "Hör auf zu jammern.",
    "lv": "Beidz žēloties.",
    "level": "Sätze"
  },
  {
    "de": "Der Akademiker arbeitet an der Universität.",
    "lv": "Akadēmiķis strādā universitātē.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Kleid ist akademisch gekleidet.",
    "lv": "Šis ir akadēmisks apģērbs.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre gerne Akkordeonmusik.",
    "lv": "Man patīk klausīties akordeona mūziku.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das Gerät anklicken?",
    "lv": "Vai vari uzklikšķināt uz ierīces?",
    "level": "Sätze"
  },
  {
    "de": "Bitte öffne die Datei und klicke darauf.",
    "lv": "Lūdzu atver failu un uzklikšķini uz tā.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe einen Unfall gehabt.",
    "lv": "Man bija negadījums.",
    "level": "Sätze"
  },
  {
    "de": "Das Auto wurde angelegt.",
    "lv": "Auto tika novietots • Piestiprināts",
    "level": "Sätze"
  },
  {
    "de": "Die Analyse war erfolgreich.",
    "lv": "Analīze bija veiksmīga.",
    "level": "Sätze"
  },
  {
    "de": "Wir laufen zum Bahnhof.",
    "lv": "Mēs skrienam uz staciju.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe eine neue Anlage gekauft.",
    "lv": "Es nopirku jaunu iekārtu.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schalte den Fernseher an.",
    "lv": "Lūdzu ieslēdz televizoru.",
    "level": "Sätze"
  },
  {
    "de": "Mein Computer ist abgestürzt.",
    "lv": "Mans dators nobruka.",
    "level": "Sätze"
  },
  {
    "de": "Am Wochenende gehe ich angeln.",
    "lv": "Nedēļas nogalē es iešu makšķerēt.",
    "level": "Sätze"
  },
  {
    "de": "Der Angler sitzt seit Stunden am See.",
    "lv": "Makšķernieks jau stundām sēž pie ezera.",
    "level": "Sätze"
  },
  {
    "de": "Die Regierung hat neue Regeln angeordnet.",
    "lv": "Valdība noteica jaunus noteikumus.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe den Anruf verpasst.",
    "lv": "Es nokavēju zvanu.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mich später anrufen?",
    "lv": "Vai vari man piezvanīt vēlāk?",
    "level": "Sätze"
  },
  {
    "de": "Bitte nimm meinen Vorschlag an.",
    "lv": "Lūdzu pieņem manu priekšlikumu.",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme dein Angebot an.",
    "lv": "Es pieņemu tavu piedāvājumu.",
    "level": "Sätze"
  },
  {
    "de": "Er nahm die Einladung an.",
    "lv": "Viņš pieņēma uzaicinājumu.",
    "level": "Sätze"
  },
  {
    "de": "Die Werbung soll Kunden anregen.",
    "lv": "Reklāmai vajadzētu stimulēt klientus.",
    "level": "Sätze"
  },
  {
    "de": "Diese Musik regt mich zum Lernen an.",
    "lv": "Šī mūzika mani motivē mācīties.",
    "level": "Sätze"
  },
  {
    "de": "Die Nachricht hat mich angeregt.",
    "lv": "Ziņa mani iedvesmoja.",
    "level": "Sätze"
  },
  {
    "de": "Das ist eine angenehme Atmosphäre.",
    "lv": "Tā ir patīkama atmosfēra.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Kleid ist angenehm zu tragen.",
    "lv": "Šo kleitu ir patīkami valkāt.",
    "level": "Sätze"
  },
  {
    "de": "Der Arzt hat eine Angina diagnostiziert.",
    "lv": "Ārsts diagnosticēja angīnu.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Angst vor Spinnen.",
    "lv": "Man ir bail no zirnekļiem.",
    "level": "Sätze"
  },
  {
    "de": "Keine Angst, alles wird gut.",
    "lv": "Nebaidies, viss būs labi.",
    "level": "Sätze"
  },
  {
    "de": "Die Angelegenheit ist kompliziert.",
    "lv": "Šī lieta ir sarežģīta.",
    "level": "Sätze"
  },
  {
    "de": "Der Angeklagte sagte nichts.",
    "lv": "Apsūdzētais neko neteica.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe eine neue Angestellte kennengelernt.",
    "lv": "Es iepazinos ar jaunu darbinieci.",
    "level": "Sätze"
  },
  {
    "de": "Viele Angestellte arbeiten von zu Hause.",
    "lv": "Daudzi darbinieki strādā no mājām.",
    "level": "Sätze"
  },
  {
    "de": "Sie ist bei ihm gut angesehen.",
    "lv": "Viņš viņu labi ieredz.",
    "level": "Sätze"
  },
  {
    "de": "Eine angespannte politische Situation.",
    "lv": "Saspringts politiskais stāvoklis.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat ein neues Kleid an.",
    "lv": "Viņai ir mugurā jauna kleita.",
    "level": "Sätze"
  },
  {
    "de": "Der Regen hält an.",
    "lv": "Lietus pieturas.",
    "level": "Sätze"
  },
  {
    "de": "Eine Diskussion anheizen.",
    "lv": "Ierosināt diskusiju.",
    "level": "Sätze"
  },
  {
    "de": "Jemanden des Diebstahls anklagen.",
    "lv": "Apvainot kādu zādzībā.",
    "level": "Sätze"
  },
  {
    "de": "Anklang finden.",
    "lv": "Rast atbalsi, atsaucību.",
    "level": "Sätze"
  },
  {
    "de": "Ein Gespräch anknüpfen.",
    "lv": "Uzsākt sarunu.",
    "level": "Sätze"
  },
  {
    "de": "Es kommt darauf an.",
    "lv": "Varētu būt • Vēl nav zināms",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Anlass.",
    "lv": "Šajā gadījumā, šajā sakarā.",
    "level": "Sätze"
  },
  {
    "de": "Einen Anlauf nehmen.",
    "lv": "Ieskrieties.",
    "level": "Sätze"
  },
  {
    "de": "Einen Hafen anlaufen.",
    "lv": "Iebraukt ostā.",
    "level": "Sätze"
  },
  {
    "de": "Die Maschine anlaufen lassen.",
    "lv": "Iedarbināt mašīnu.",
    "level": "Sätze"
  },
  {
    "de": "Einen Park anlegen.",
    "lv": "Iekopt, izveidot parku.",
    "level": "Sätze"
  },
  {
    "de": "Ich hätte ein Anliegen an Sie.",
    "lv": "Es gribētu jums kaut ko lūgt.",
    "level": "Sätze"
  },
  {
    "de": "Ein Ferngespräch anmelden.",
    "lv": "Pieteikt tālsarunu.",
    "level": "Sätze"
  },
  {
    "de": "Sich beim Einwohnermeldeamt anmelden.",
    "lv": "Pieteikties iedzīvotāju reģistra birojā.",
    "level": "Sätze"
  },
  {
    "de": "Einen Rat annehmen.",
    "lv": "Uzklausīt padomu.",
    "level": "Sätze"
  },
  {
    "de": "Nehmen wir an, dass ...",
    "lv": "Pieņemsim, ka ...",
    "level": "Sätze"
  },
  {
    "de": "Einen Garten anpflanzen.",
    "lv": "Iekopt dārzu.",
    "level": "Sätze"
  },
  {
    "de": "Was hast du da angerichtet?",
    "lv": "Ko tu tur esi izstrādājis?",
    "level": "Sätze"
  },
  {
    "de": "Bis ans Ende.",
    "lv": "Līdz galam.",
    "level": "Sätze"
  },
  {
    "de": "Du glaubst mir anscheinend nicht.",
    "lv": "Šķiet, ka tu man netici.",
    "level": "Sätze"
  },
  {
    "de": "Das Dorf hat elektrischen Anschluss.",
    "lv": "Ciems ir pieslēgts elektrības tīklam.",
    "level": "Sätze"
  },
  {
    "de": "Bei jemandem gut angeschrieben sein.",
    "lv": "Būt labi ieredzētam.",
    "level": "Sätze"
  },
  {
    "de": "Etwas als seine Pflicht ansehen.",
    "lv": "Uzskatīt kaut ko par savu pienākumu.",
    "level": "Sätze"
  },
  {
    "de": "Jemanden nur vom Ansehen kennen.",
    "lv": "Pazīt kādu tikai pēc izskata.",
    "level": "Sätze"
  },
  {
    "de": "Meiner Ansicht nach ...",
    "lv": "Pēc manām domām ...",
    "level": "Sätze"
  },
  {
    "de": "Was stellen wir heute Abend an?",
    "lv": "Ko mēs šovakar darīsim?",
    "level": "Sätze"
  },
  {
    "de": "Stell dich nicht so an!",
    "lv": "Neizliecies!",
    "level": "Sätze"
  },
  {
    "de": "Ein Gewitter ist im Anzug.",
    "lv": "Tuvojas negaiss.",
    "level": "Sätze"
  },
  {
    "de": "An die Arbeit gehen.",
    "lv": "Ķerties pie darba.",
    "level": "Sätze"
  },
  {
    "de": "Jemandem unter die Arme greifen.",
    "lv": "Palīdzēt kādam.",
    "level": "Sätze"
  },
  {
    "de": "Außer Atem sein.",
    "lv": "Būt bez elpas.",
    "level": "Sätze"
  },
  {
    "de": "Guten Appetit!",
    "lv": "Labu apetīti!",
    "level": "Sätze"
  },
  {
    "de": "Das nimmt viel Zeit in Anspruch.",
    "lv": "Tas prasa daudz laika.",
    "level": "Sätze"
  },
  {
    "de": "In einem Atemzug.",
    "lv": "Vienā elpas vilcienā.",
    "level": "Sätze"
  },
  {
    "de": "Sich auf den Weg machen.",
    "lv": "Doties ceļā.",
    "level": "Sätze"
  },
  {
    "de": "Auf jeden Fall.",
    "lv": "Katrā gadījumā.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal war alles still.",
    "lv": "Pēkšņi viss kļuva kluss.",
    "level": "Sätze"
  },
  {
    "de": "Der Zug hat fünf Minuten Aufenthalt.",
    "lv": "Vilciens stāv piecas minūtes.",
    "level": "Sätze"
  },
  {
    "de": "Bitte mach die Tür auf!",
    "lv": "Atver, lūdzu, durvis!",
    "level": "Sätze"
  },
  {
    "de": "Die Tür ist auf.",
    "lv": "Durvis ir vaļā.",
    "level": "Sätze"
  },
  {
    "de": "Er hat den Kredit aufgenommen.",
    "lv": "Viņš paņēma kredītu.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen heute aufräumen.",
    "lv": "Mums šodien jāsakārto.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre jetzt auf.",
    "lv": "Es tagad beigšu.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schon auf.",
    "lv": "Viņš jau ir piecēlies.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen das Treffen verschieben.",
    "lv": "Mums jāpārceļ tikšanās.",
    "level": "Sätze"
  },
  {
    "de": "Das Parlament wurde aufgelöst.",
    "lv": "Parlaments tika atlaists.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat mich aufgeregt.",
    "lv": "Viņa mani satrauca.",
    "level": "Sätze"
  },
  {
    "de": "Er hat mir Grüße an dich aufgetragen.",
    "lv": "Viņš man lika nodot tev sveicienus.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Grund komme ich später.",
    "lv": "Šī iemesla dēļ es nākšu vēlāk.",
    "level": "Sätze"
  },
  {
    "de": "Der Zug kommt aus Dresden.",
    "lv": "Vilciens nāk no Drēzdenes.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal.",
    "lv": "Pēkšņi.",
    "level": "Sätze"
  },
  {
    "de": "Auf der Stelle.",
    "lv": "Nekavējoties.",
    "level": "Sätze"
  },
  {
    "de": "Einen Brief aufbrechen.",
    "lv": "Atplēst vēstuli.",
    "level": "Sätze"
  },
  {
    "de": "Ein Gesetz aufheben.",
    "lv": "Atcelt likumu.",
    "level": "Sätze"
  },
  {
    "de": "Die Verspätung aufholen.",
    "lv": "Atgūt nokavēto laiku.",
    "level": "Sätze"
  },
  {
    "de": "Für den Schaden aufkommen.",
    "lv": "Samaksāt nodarītos zaudējumus.",
    "level": "Sätze"
  },
  {
    "de": "Die zweite Auflage.",
    "lv": "Otrais izdevums.",
    "level": "Sätze"
  },
  {
    "de": "Das Parlament auflösen.",
    "lv": "Atlaist parlamentu.",
    "level": "Sätze"
  },
  {
    "de": "Bitte die Tür auf!",
    "lv": "Atveriet, lūdzu, durvis!",
    "level": "Sätze"
  },
  {
    "de": "Jemanden auf etwas aufmerksam machen.",
    "lv": "Vērst kāda uzmanību uz ko.",
    "level": "Sätze"
  },
  {
    "de": "Einer Sache Aufmerksamkeit schenken.",
    "lv": "Veltīt uzmanību kādai lietai.",
    "level": "Sätze"
  },
  {
    "de": "Einen Kredit aufnehmen.",
    "lv": "Paņemt kredītu.",
    "level": "Sätze"
  },
  {
    "de": "Aufrecht sitzen.",
    "lv": "Sēdēt taisni.",
    "level": "Sätze"
  },
  {
    "de": "Den Bericht gibt Aufschluss über das Geschehen.",
    "lv": "Ziņojums sniedz paskaidrojumu par notikušo.",
    "level": "Sätze"
  },
  {
    "de": "Er ist auf.",
    "lv": "Viņš ir piecēlies.",
    "level": "Sätze"
  },
  {
    "de": "Alle Kräfte aufwenden.",
    "lv": "Veltīt visus spēkus.",
    "level": "Sätze"
  },
  {
    "de": "Viel Mühe aufwenden.",
    "lv": "Ļoti pūlēties.",
    "level": "Sätze"
  },
  {
    "de": "Jemandem seinen Willen aufzwingen.",
    "lv": "Uzspiest kādam savu gribu.",
    "level": "Sätze"
  },
  {
    "de": "Geh mir aus den Augen!",
    "lv": "Nerādies man vairs acīs!",
    "level": "Sätze"
  },
  {
    "de": "Jemandem die Augen öffnen.",
    "lv": "Atvērt kādam acis.",
    "level": "Sätze"
  },
  {
    "de": "Die Augen offen halten.",
    "lv": "Turēt acis vaļā.",
    "level": "Sätze"
  },
  {
    "de": "Unter vier Augen.",
    "lv": "Divatā • Zem četrām acīm",
    "level": "Sätze"
  },
  {
    "de": "Aus Mangel an Zeit.",
    "lv": "Laika trūkuma dēļ.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Grunde.",
    "lv": "Šā iemesla dēļ.",
    "level": "Sätze"
  },
  {
    "de": "Alle außer dir.",
    "lv": "Visi, izņemot tevi.",
    "level": "Sätze"
  },
  {
    "de": "Eine Arznei für äußerlichen Gebrauch.",
    "lv": "Zāles ārīgai lietošanai.",
    "level": "Sätze"
  },
  {
    "de": "Auf Äußerlichkeiten Wert legen.",
    "lv": "Piešķirt nozīmi ārišķībām.",
    "level": "Sätze"
  },
  {
    "de": "Eine außerordentliche Sitzung.",
    "lv": "Ārkārtas sēde.",
    "level": "Sätze"
  },
  {
    "de": "Im äußersten Fall.",
    "lv": "Visļaunākajā gadījumā.",
    "level": "Sätze"
  },
  {
    "de": "Äußerst wichtig.",
    "lv": "Ārkārtīgi svarīgs.",
    "level": "Sätze"
  },
  {
    "de": "Ein Boot aussetzen.",
    "lv": "Nolaist laivu ūdenī.",
    "level": "Sätze"
  },
  {
    "de": "Jemanden dem Spott aussetzen.",
    "lv": "Likt kādu apsmieklā.",
    "level": "Sätze"
  },
  {
    "de": "Er hat daran etwas auszusetzen.",
    "lv": "Viņam pret to ir kādi iebildumi.",
    "level": "Sätze"
  },
  {
    "de": "Aussicht auf die See.",
    "lv": "Skats uz jūru.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gute Aussichten.",
    "lv": "Viņam ir labas izredzes.",
    "level": "Sätze"
  },
  {
    "de": "Jemandem etwas in Aussicht stellen.",
    "lv": "Apsolīt kādam kaut ko.",
    "level": "Sätze"
  },
  {
    "de": "Wie wird dieses Wort ausgesprochen?",
    "lv": "Kā šo vārdu izrunā?",
    "level": "Sätze"
  },
  {
    "de": "Einen Wunsch aussprechen.",
    "lv": "Izteikt vēlēšanos.",
    "level": "Sätze"
  },
  {
    "de": "Sein Beileid aussprechen.",
    "lv": "Izteikt līdzjūtību.",
    "level": "Sätze"
  },
  {
    "de": "Ein ausgestopfter Vogel.",
    "lv": "Putna izbāznis.",
    "level": "Sätze"
  },
  {
    "de": "Wann wurden die Meisterschaftskämpfe ausgetragen?",
    "lv": "Kad notika meistarības izcīņa?",
    "level": "Sätze"
  },
  {
    "de": "Welchen Beruf üben Sie aus?",
    "lv": "Kāda ir jūsu nodarbošanās?",
    "level": "Sätze"
  },
  {
    "de": "Einfluss ausüben.",
    "lv": "Ietekmēt.",
    "level": "Sätze"
  },
  {
    "de": "Das Auswärtige Amt.",
    "lv": "Ārlietu ministrija.",
    "level": "Sätze"
  },
  {
    "de": "Auswärts essen.",
    "lv": "Ēst ārpus mājas.",
    "level": "Sätze"
  },
  {
    "de": "Es blieb ihm kein anderer Ausweg.",
    "lv": "Viņam nebija citas izejas.",
    "level": "Sätze"
  },
  {
    "de": "Einer Gefahr ausweichen.",
    "lv": "Izvairīties no briesmām.",
    "level": "Sätze"
  },
  {
    "de": "Etwas auswendig lernen.",
    "lv": "Mācīties kaut ko no galvas.",
    "level": "Sätze"
  },
  {
    "de": "Den Anker auswerfen.",
    "lv": "Izmest enkuru.",
    "level": "Sätze"
  },
  {
    "de": "Die Angel auswerfen.",
    "lv": "Izmest makšķeri.",
    "level": "Sätze"
  },
  {
    "de": "Sich durch etwas auszeichnen.",
    "lv": "Izcelties ar kādu īpašību.",
    "level": "Sätze"
  },
  {
    "de": "Sich einen Anzug machen lassen.",
    "lv": "Pasūtīt sev uzvalku.",
    "level": "Sätze"
  },
  {
    "de": "Etwas geht den Bach runter.",
    "lv": "Kaut kas neizdodas.",
    "level": "Sätze"
  },
  {
    "de": "Ein Bad nehmen.",
    "lv": "Iet vannā • Peldēties",
    "level": "Sätze"
  },
  {
    "de": "Sich Bahn brechen.",
    "lv": "Izlauzt sev ceļu.",
    "level": "Sätze"
  },
  {
    "de": "Per Bahn.",
    "lv": "Pa dzelzceļu.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Bahn.",
    "lv": "Pa dzelzceļu.",
    "level": "Sätze"
  },
  {
    "de": "Möglichst bald.",
    "lv": "Pēc iespējas drīzāk.",
    "level": "Sätze"
  },
  {
    "de": "Die Bande der Freundschaft.",
    "lv": "Draudzības saites.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist angst und bange.",
    "lv": "Man ir baigi.",
    "level": "Sätze"
  },
  {
    "de": "Auf die lange Bank schieben.",
    "lv": "Novilcināt • Vilkt garumā • Atlikt uz nenoteiktu laiku",
    "level": "Sätze"
  },
  {
    "de": "Bar zahlen.",
    "lv": "Maksāt skaidrā naudā.",
    "level": "Sätze"
  },
  {
    "de": "Etwas nur gegen bar verkaufen.",
    "lv": "Pārdot tikai par skaidru naudu.",
    "level": "Sätze"
  },
  {
    "de": "Das Haus ist im Bau.",
    "lv": "Māju pašreiz ceļ.",
    "level": "Sätze"
  },
  {
    "de": "Erz bauen.",
    "lv": "Iegūt rūdu.",
    "level": "Sätze"
  },
  {
    "de": "Mist bauen.",
    "lv": "Izdarīt kļūdu.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin beauftragt.",
    "lv": "Man ir uzticēts.",
    "level": "Sätze"
  },
  {
    "de": "Nach Bedarf.",
    "lv": "Pēc vajadzības.",
    "level": "Sätze"
  },
  {
    "de": "Ich bedauere ihn.",
    "lv": "Man viņa žēl.",
    "level": "Sätze"
  },
  {
    "de": "Was bedeutet dieses Wort?",
    "lv": "Ko nozīmē šis vārds?",
    "level": "Sätze"
  },
  {
    "de": "Bedienen Sie sich bitte!",
    "lv": "Lūdzu, apkalpojieties paši • Lūdzu, ņemiet!",
    "level": "Sätze"
  },
  {
    "de": "Unter der Bedingung, dass...",
    "lv": "Ar noteikumu, ka...",
    "level": "Sätze"
  },
  {
    "de": "Sie sieht bedrückt aus.",
    "lv": "Viņa izskatās nomākta.",
    "level": "Sätze"
  },
  {
    "de": "Das bedarf einer Erklärung.",
    "lv": "Te nepieciešams paskaidrojums.",
    "level": "Sätze"
  },
  {
    "de": "Von einer schweren Krankheit befallen werden.",
    "lv": "Smagi saslimt.",
    "level": "Sätze"
  },
  {
    "de": "Einen Befehl befolgen.",
    "lv": "Izpildīt pavēli.",
    "level": "Sätze"
  },
  {
    "de": "Hinweise befolgen.",
    "lv": "Sekot norādījumiem.",
    "level": "Sätze"
  },
  {
    "de": "Befehle befolgen.",
    "lv": "Pildīt pavēles.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Post befördern.",
    "lv": "Aizsūtīt pa pastu.",
    "level": "Sätze"
  },
  {
    "de": "Einen Zeugen befragen.",
    "lv": "Izjautāt liecinieku.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin begierig zu wissen.",
    "lv": "Man ļoti gribas zināt.",
    "level": "Sätze"
  },
  {
    "de": "Zu Beginn.",
    "lv": "Sākumā.",
    "level": "Sätze"
  },
  {
    "de": "Am Beginn.",
    "lv": "Sākumā.",
    "level": "Sätze"
  },
  {
    "de": "Bei Beginn.",
    "lv": "Sākot.",
    "level": "Sätze"
  },
  {
    "de": "In Begleitung.",
    "lv": "Pavadībā.",
    "level": "Sätze"
  },
  {
    "de": "Mit seiner Begleitung.",
    "lv": "Ar pavadoņiem.",
    "level": "Sätze"
  },
  {
    "de": "Einem Begräbnis beiwohnen.",
    "lv": "Piedalīties bēru ceremonijā.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schwer von Begriff.",
    "lv": "Viņš lēni uztver, viņam ir gausa domāšana.",
    "level": "Sätze"
  },
  {
    "de": "Im Gedächtnis behalten.",
    "lv": "Atcerēties, paturēt atmiņā.",
    "level": "Sätze"
  },
  {
    "de": "Etwas für sich behalten.",
    "lv": "Nevienam nestāstīt.",
    "level": "Sätze"
  },
  {
    "de": "Eine Sprache beherrschen.",
    "lv": "Labi prast kādu valodu.",
    "level": "Sätze"
  },
  {
    "de": "Jemandem behilflich sein.",
    "lv": "Palīdzēt kādam.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe kein Geld bei mir.",
    "lv": "Man nav klāt naudas.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tisch.",
    "lv": "Pie galda.",
    "level": "Sätze"
  },
  {
    "de": "Bei Sinnen sein.",
    "lv": "Būt pie pilna prāta.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tage.",
    "lv": "Dienā.",
    "level": "Sätze"
  },
  {
    "de": "Bei weitem nicht so.",
    "lv": "Nepavisam ne.",
    "level": "Sätze"
  },
  {
    "de": "Alle beide.",
    "lv": "Abi divi.",
    "level": "Sätze"
  },
  {
    "de": "Stürmischer Beifall brach los.",
    "lv": "Atskanēja vētraini aplausi.",
    "level": "Sätze"
  },
  {
    "de": "Beifall finden.",
    "lv": "Gūt piekrišanu.",
    "level": "Sätze"
  },
  {
    "de": "Beileid aussprechen.",
    "lv": "Izteikt līdzjūtību.",
    "level": "Sätze"
  },
  {
    "de": "Auf eigenen Beinen stehen.",
    "lv": "Būt finansiāli patstāvīgam.",
    "level": "Sätze"
  },
  {
    "de": "Sich auf die Beine machen.",
    "lv": "Posties ceļā.",
    "level": "Sätze"
  },
  {
    "de": "Zum Beispiel.",
    "lv": "Piemēram.",
    "level": "Sätze"
  },
  {
    "de": "Beistand leisten.",
    "lv": "Palīdzēt, sniegt palīdzību.",
    "level": "Sätze"
  },
  {
    "de": "Beitrag leisten.",
    "lv": "Ieguldīt savu daļu.",
    "level": "Sätze"
  },
  {
    "de": "Einer Partei beitreten.",
    "lv": "Iestāties kādā partijā.",
    "level": "Sätze"
  },
  {
    "de": "Den Missbrauch von Drogen bekämpfen.",
    "lv": "Apkarot narkotiku lietošanu.",
    "level": "Sätze"
  },
  {
    "de": "Jemandes Bekanntschaft machen.",
    "lv": "Iepazīties ar kādu.",
    "level": "Sätze"
  },
  {
    "de": "Bekanntschaft anknüpfen.",
    "lv": "Iepazīties • Nodibināt pazīšanos",
    "level": "Sätze"
  },
  {
    "de": "Sich schuldig bekennen.",
    "lv": "Atzīt sevi par vainīgu.",
    "level": "Sätze"
  },
  {
    "de": "Ein Seminar belegen.",
    "lv": "Pierakstīties uz semināru.",
    "level": "Sätze"
  },
  {
    "de": "Belegte Brötchen.",
    "lv": "Maizītes ar uzgriežamiem.",
    "level": "Sätze"
  },
  {
    "de": "Nach Ihrem Belieben.",
    "lv": "Kā jūs vēlaties.",
    "level": "Sätze"
  },
  {
    "de": "Zu jeder beliebigen Zeit.",
    "lv": "Kurā katrā laikā.",
    "level": "Sätze"
  },
  {
    "de": "Sich um etwas bemühen.",
    "lv": "Pūlēties iegūt, panākt kaut ko.",
    "level": "Sätze"
  },
  {
    "de": "Bitte bemühen Sie sich nicht!",
    "lv": "Nepūlieties, lūdzu!",
    "level": "Sätze"
  },
  {
    "de": "Schweigen beobachten.",
    "lv": "Ievērot klusumu.",
    "level": "Sätze"
  },
  {
    "de": "Es sich bequem machen.",
    "lv": "Ērti iekārtoties.",
    "level": "Sätze"
  },
  {
    "de": "Zur Bequemlichkeit.",
    "lv": "Ērtības labad.",
    "level": "Sätze"
  },
  {
    "de": "Etwas aus Berechnung tun.",
    "lv": "Darīt kaut ko aiz aprēķina.",
    "level": "Sätze"
  },
  {
    "de": "Bereit sein.",
    "lv": "Būt gatavam • Būt ar mieru",
    "level": "Sätze"
  },
  {
    "de": "Die Ernte bergen.",
    "lv": "Novākt ražu.",
    "level": "Sätze"
  },
  {
    "de": "Unfallopfer bergen.",
    "lv": "Glābt nelaimes gadījumā cietušos.",
    "level": "Sätze"
  },
  {
    "de": "Bericht erstatten.",
    "lv": "Ziņot, sniegt ziņojumu, pārskatu.",
    "level": "Sätze"
  },
  {
    "de": "Sich auf einen Zeugen berufen.",
    "lv": "Atsaukties uz liecinieku.",
    "level": "Sätze"
  },
  {
    "de": "Man erwartet seine Berufung zum Direktor.",
    "lv": "Paredzams, ka viņu iecels par direktoru.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind besetzt.",
    "lv": "Visas vietas aizņemtas.",
    "level": "Sätze"
  },
  {
    "de": "Neue Besen kehren gut.",
    "lv": "Jauna slota tīri slauka.",
    "level": "Sätze"
  },
  {
    "de": "Er ist von dieser Idee besessen.",
    "lv": "Šī doma viņu ir apsēdusi.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt ein Haus.",
    "lv": "Viņam pieder māja.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt viel Mut.",
    "lv": "Viņam ir liela drosme.",
    "level": "Sätze"
  },
  {
    "de": "Eine bespielte Kassette.",
    "lv": "Ierakstīta kasete.",
    "level": "Sätze"
  },
  {
    "de": "Desto besser.",
    "lv": "Jo labāk.",
    "level": "Sätze"
  },
  {
    "de": "Gute Besserung!",
    "lv": "Veseļojieties!",
    "level": "Sätze"
  },
  {
    "de": "Beim besten Willen.",
    "lv": "Lai kā arī gribētu.",
    "level": "Sätze"
  },
  {
    "de": "Am besten.",
    "lv": "Vislabāk.",
    "level": "Sätze"
  },
  {
    "de": "Es besteht Zweifel.",
    "lv": "Ir šaubas.",
    "level": "Sätze"
  },
  {
    "de": "Seine Aufgabe besteht darin...",
    "lv": "Viņa uzdevums ir...",
    "level": "Sätze"
  },
  {
    "de": "Grüße bestellen.",
    "lv": "Pasveicināt.",
    "level": "Sätze"
  },
  {
    "de": "Einen Termin bestimmen.",
    "lv": "Noteikt, nolikt kādu termiņu.",
    "level": "Sätze"
  },
  {
    "de": "Ganz bestimmt.",
    "lv": "Noteikti, pavisam droši.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch kommen.",
    "lv": "Nākt ciemos.",
    "level": "Sätze"
  },
  {
    "de": "Jemandem einen Besuch abstatten.",
    "lv": "Apciemot kādu, iet vizītē pie kāda.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch sein.",
    "lv": "Būt ciemos, ciemoties.",
    "level": "Sätze"
  },
  {
    "de": "Oft Konzerte besuchen.",
    "lv": "Iet bieži uz koncertiem.",
    "level": "Sätze"
  },
  {
    "de": "Welche Schule hat er besucht?",
    "lv": "Kurā skolā viņš mācījās?",
    "level": "Sätze"
  },
  {
    "de": "In Betracht ziehen.",
    "lv": "Ievērot, apsvērt.",
    "level": "Sätze"
  },
  {
    "de": "Außer Betracht lassen.",
    "lv": "Neņemt vērā, neievērot.",
    "level": "Sätze"
  },
  {
    "de": "Ein Unglück hat ihn betroffen.",
    "lv": "Viņam uzbrukusi nelaime.",
    "level": "Sätze"
  },
  {
    "de": "Er betreibt ein Hotel.",
    "lv": "Viņš vada viesnīcu.",
    "level": "Sätze"
  },
  {
    "de": "Ein Werk in Betrieb setzen.",
    "lv": "Nodot rūpnīcu ekspluatācijā.",
    "level": "Sätze"
  },
  {
    "de": "Das Bett machen.",
    "lv": "Uzklāt gultu.",
    "level": "Sätze"
  },
  {
    "de": "Wie lange muss er das Bett hüten?",
    "lv": "Cik ilgi viņam vēl jāpaliek gultā?",
    "level": "Sätze"
  },
  {
    "de": "Jemanden bevorzugen.",
    "lv": "Dot priekšroku kādam.",
    "level": "Sätze"
  },
  {
    "de": "Alle beiden.",
    "lv": "Abi divi.",
    "level": "Sätze"
  },
  {
    "de": "Alles bezahlen.",
    "lv": "Samaksāt visu.",
    "level": "Sätze"
  },
  {
    "de": "Bezüglich auf etwas.",
    "lv": "Attiecībā uz kaut ko.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön.",
    "lv": "Lūdzu.",
    "level": "Sätze"
  },
  {
    "de": "Wie bitte?",
    "lv": "Kā lūdzu?",
    "level": "Sätze"
  },
  {
    "de": "Bitte sehr.",
    "lv": "Lūdzu.",
    "level": "Sätze"
  },
  {
    "de": "Ein bisschen.",
    "lv": "Mazliet.",
    "level": "Sätze"
  },
  {
    "de": "Das Bild hängt.",
    "lv": "Bilde karājas.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe eine Bitte an Sie.",
    "lv": "Es gribētu jūs lūgt.",
    "level": "Sätze"
  },
  {
    "de": "Jemanden um etwas bitten.",
    "lv": "Lūgt kādam kaut ko.",
    "level": "Sätze"
  },
  {
    "de": "Trompete blasen.",
    "lv": "Pūst trompeti.",
    "level": "Sätze"
  },
  {
    "de": "Kein Blatt vor den Mund nehmen.",
    "lv": "Atklāti paust savu viedokli.",
    "level": "Sätze"
  },
  {
    "de": "In einem Buch blättern.",
    "lv": "Šķirstīt grāmatu.",
    "level": "Sätze"
  },
  {
    "de": "Sich vom äußeren Schein blenden lassen.",
    "lv": "Ļaut ārējam spožumam sevi maldināt.",
    "level": "Sätze"
  },
  {
    "de": "Einen Blindgänger entschärfen.",
    "lv": "Likvidēt spridzekli.",
    "level": "Sätze"
  },
  {
    "de": "Eine Blockade über ein Land verhängen.",
    "lv": "Kādai zemei noteikt blokādi.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßen Füßen.",
    "lv": "Kailām kājām.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßem Auge.",
    "lv": "Ar neapbruņotu aci.",
    "level": "Sätze"
  },
  {
    "de": "Jemandem etwas durch die Blumen sagen.",
    "lv": "Pateikt netieši, ar mājienu.",
    "level": "Sätze"
  },
  {
    "de": "Danke für die Blumen!",
    "lv": "Atbilde uz kritisku piezīmi.",
    "level": "Sätze"
  },
  {
    "de": "Den Boden unter den Füßen verlieren.",
    "lv": "Zaudēt pamatu zem kājām.",
    "level": "Sätze"
  },
  {
    "de": "Den Bogen überspannen.",
    "lv": "Pārspīlēt, iet par tālu.",
    "level": "Sätze"
  },
  {
    "de": "Einen großen Bogen um jemanden/etwas machen.",
    "lv": "Iet ar līkumu, izvairīties.",
    "level": "Sätze"
  },
  {
    "de": "Eine Frage brennt.",
    "lv": "Aktuāls jautājums.",
    "level": "Sätze"
  },
  {
    "de": "Über etwas brüten.",
    "lv": "Nemitīgi domāt par kaut ko.",
    "level": "Sätze"
  },
  {
    "de": "Für jemanden als Bürge eintreten.",
    "lv": "Galvot par kādu.",
    "level": "Sätze"
  },
  {
    "de": "Alles in Butter.",
    "lv": "Viss kārtībā.",
    "level": "Sätze"
  },
  {
    "de": "Bitte checken.",
    "lv": "Pārbaudīt, izkontrolēt.",
    "level": "Sätze"
  },
  {
    "de": "Da ist er!",
    "lv": "Te viņš ir!",
    "level": "Sätze"
  },
  {
    "de": "Das Unglück ist dadurch entstanden, dass...",
    "lv": "Nelaime ir izcēlusies tādēļ, ka...",
    "level": "Sätze"
  },
  {
    "de": "Alles spricht dafür.",
    "lv": "Viss runā tam par labu.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann nichts dafür.",
    "lv": "Es tur neko nevaru darīt.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin dagegen.",
    "lv": "Es esmu pret to.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe nichts dagegen.",
    "lv": "Man pret to nav iebildumu.",
    "level": "Sätze"
  },
  {
    "de": "Von daheim.",
    "lv": "No mājām.",
    "level": "Sätze"
  },
  {
    "de": "Daheim.",
    "lv": "Mājās.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Dame ziehen.",
    "lv": "Izdarīt gājienu ar dāmu.",
    "level": "Sätze"
  },
  {
    "de": "Es dämmert.",
    "lv": "Krēslo • Aust gaisma",
    "level": "Sätze"
  },
  {
    "de": "Danke schön!",
    "lv": "Paldies! Pateicos!",
    "level": "Sätze"
  },
  {
    "de": "Dann und wann.",
    "lv": "Šad un tad.",
    "level": "Sätze"
  },
  {
    "de": "Darauf kannst du dich verlassen.",
    "lv": "Uz to tu vari paļauties.",
    "level": "Sätze"
  },
  {
    "de": "Eine Woche darauf.",
    "lv": "Nedēļu pēc tam.",
    "level": "Sätze"
  },
  {
    "de": "Daraus wird nichts.",
    "lv": "No tā nekas neiznāks.",
    "level": "Sätze"
  },
  {
    "de": "So dass...",
    "lv": "Tā ka...",
    "level": "Sätze"
  },
  {
    "de": "an den Schuhen haftet Lehm",
    "lv": "pie kurpēm pielipuši māli",
    "level": "Sätze"
  },
  {
    "de": "Haftung für etwas übernehmen",
    "lv": "uzņemties atbildību",
    "level": "Sätze"
  },
  {
    "de": "es hagelt",
    "lv": "birst krusa",
    "level": "Sätze"
  },
  {
    "de": "danach kräht kein Hahn",
    "lv": "tas nevienu neinteresē",
    "level": "Sätze"
  },
  {
    "de": "den Hahn aufdrehen",
    "lv": "atgriezt krānu",
    "level": "Sätze"
  },
  {
    "de": "den Hahn zudrehen",
    "lv": "aizgriezt krānu",
    "level": "Sätze"
  },
  {
    "de": "es ist halb eins",
    "lv": "ir pusviens",
    "level": "Sätze"
  },
  {
    "de": "eine halbe Stunde",
    "lv": "pusstunda",
    "level": "Sätze"
  },
  {
    "de": "auf halbem Wege",
    "lv": "pusceļā",
    "level": "Sätze"
  },
  {
    "de": "dieses Zimmer ist halb so groß wie...",
    "lv": "šī istaba ir uz pusi mazāka nekā...",
    "level": "Sätze"
  },
  {
    "de": "halb im Ernst",
    "lv": "pa pusei nopietni",
    "level": "Sätze"
  },
  {
    "de": "halbtags arbeiten",
    "lv": "strādāt nepilnu darba dienu",
    "level": "Sätze"
  },
  {
    "de": "aus vollem Halse",
    "lv": "pilnā kaklā",
    "level": "Sätze"
  },
  {
    "de": "einen kurzen Halt machen",
    "lv": "mazliet, īsu brīdi apstāties",
    "level": "Sätze"
  },
  {
    "de": "sein Wort halten",
    "lv": "turēt vārdu",
    "level": "Sätze"
  },
  {
    "de": "für wen halten Sie mich?",
    "lv": "par ko jūs mani uzskatāt?",
    "level": "Sätze"
  },
  {
    "de": "wie lange hält hier der Zug?",
    "lv": "cik ilgi vilciens te stāvēs?",
    "level": "Sätze"
  },
  {
    "de": "Haltung bewahren",
    "lv": "nezaudēt savaldīšanos",
    "level": "Sätze"
  },
  {
    "de": "die Hand drücken",
    "lv": "spiest roku",
    "level": "Sätze"
  },
  {
    "de": "bei der Hand",
    "lv": "pie rokas",
    "level": "Sätze"
  },
  {
    "de": "ich habe freie Hand",
    "lv": "man ir brīvas rokas",
    "level": "Sätze"
  },
  {
    "de": "das hat Hand und Fuß",
    "lv": "tam ir stingrs pamats",
    "level": "Sätze"
  },
  {
    "de": "Hände weg!",
    "lv": "rokas nost!",
    "level": "Sätze"
  },
  {
    "de": "ich habe alle Hände voll zu tun",
    "lv": "man ir pilnas rokas darba",
    "level": "Sätze"
  },
  {
    "de": "jemandem zur Hand gehen",
    "lv": "palīdzēt kādam",
    "level": "Sätze"
  },
  {
    "de": "es handelt sich um...",
    "lv": "runa ir par...",
    "level": "Sätze"
  },
  {
    "de": "lass den Kopf nicht hängen!",
    "lv": "nenokar galvu!",
    "level": "Sätze"
  },
  {
    "de": "an jemandem hängen",
    "lv": "mīlēt kādu",
    "level": "Sätze"
  },
  {
    "de": "eine harmlose Bemerkung",
    "lv": "nevainīga piezīme",
    "level": "Sätze"
  },
  {
    "de": "dieses Medikament ist völlig harmlos",
    "lv": "šis medikaments ir gluži nekaitīgs",
    "level": "Sätze"
  },
  {
    "de": "ein Haufen Menschen",
    "lv": "bars ļaužu",
    "level": "Sätze"
  },
  {
    "de": "zu Hause",
    "lv": "mājās",
    "level": "Sätze"
  },
  {
    "de": "nach Hause gehen",
    "lv": "iet uz mājām",
    "level": "Sätze"
  },
  {
    "de": "von Haus aus",
    "lv": "no bērnu dienām, no bērnības",
    "level": "Sätze"
  },
  {
    "de": "das Bildungsniveau heben",
    "lv": "paaugstināt izglītības līmeni",
    "level": "Sätze"
  },
  {
    "de": "das Werk erscheint in 10 Heften",
    "lv": "darbs iznāks 10 burtnīcās",
    "level": "Sätze"
  },
  {
    "de": "die Hand ist wieder heil",
    "lv": "roka ir atkal vesela",
    "level": "Sätze"
  },
  {
    "de": "ein totes Gleis",
    "lv": "strupceļš",
    "level": "Sätze"
  },
  {
    "de": "aufs totes Gleis geraten",
    "lv": "nonākt strupceļā",
    "level": "Sätze"
  },
  {
    "de": "zu Boden gleiten",
    "lv": "noslīdēt zemē",
    "level": "Sätze"
  },
  {
    "de": "er hat Glück",
    "lv": "Viņam ir laime • Viņam laimējas",
    "level": "Sätze"
  },
  {
    "de": "auf gut Glück",
    "lv": "uz labu laimi",
    "level": "Sätze"
  },
  {
    "de": "er hat mehr Glück als Verstand gehabt",
    "lv": "viņam ir paveicies",
    "level": "Sätze"
  },
  {
    "de": "meinen herzlichsten Glückwunsch!",
    "lv": "sirsnīgi apsveicu!",
    "level": "Sätze"
  },
  {
    "de": "um Gnade bitten",
    "lv": "lūgt žēlastību",
    "level": "Sätze"
  },
  {
    "de": "jemandem / sich eine Pause gönnen",
    "lv": "Kādam • Sev atvēlēt atpūtas brīdi",
    "level": "Sätze"
  },
  {
    "de": "zu Grabe tragen",
    "lv": "Apbedīt • Apglabāt",
    "level": "Sätze"
  },
  {
    "de": "heute sind 20 Grad Wärme",
    "lv": "šodien ir 20° silts",
    "level": "Sätze"
  },
  {
    "de": "im höchsten Grade",
    "lv": "visaugstākā mērā",
    "level": "Sätze"
  },
  {
    "de": "über etwas Gras wachsen lassen",
    "lv": "pamazām nodot aizmirstībai",
    "level": "Sätze"
  },
  {
    "de": "jemandem zum Geburtstag gratulieren",
    "lv": "apsveikt kādu dzimšanas dienā",
    "level": "Sätze"
  },
  {
    "de": "der Morgen graut",
    "lv": "aust rīts",
    "level": "Sätze"
  },
  {
    "de": "mich graut, wenn ich an das Examen denke",
    "lv": "mani pārņem šausmas, iedomājoties par eksāmenu",
    "level": "Sätze"
  },
  {
    "de": "ein gravierender Fehler",
    "lv": "smaga kļūda",
    "level": "Sätze"
  },
  {
    "de": "ein gravierender Unterschied",
    "lv": "būtiska atšķirība",
    "level": "Sätze"
  },
  {
    "de": "aus der Luft greifen",
    "lv": "Grābt no gaisa • Izdomāt",
    "level": "Sätze"
  },
  {
    "de": "zu den Waffen greifen",
    "lv": "ķerties pie ieročiem",
    "level": "Sätze"
  },
  {
    "de": "aus diesem Grunde",
    "lv": "Tāpēc • Šī iemesla dēļ",
    "level": "Sätze"
  },
  {
    "de": "im Grunde genommen",
    "lv": "būtībā",
    "level": "Sätze"
  },
  {
    "de": "von Grund auf",
    "lv": "no pašiem pamatiem",
    "level": "Sätze"
  },
  {
    "de": "jemanden grüßen lassen",
    "lv": "sūtīt kādam sveicienu",
    "level": "Sätze"
  },
  {
    "de": "grüßen Sie bitte Ihre Freunde",
    "lv": "pasveiciniet, lūdzu, savus draugus",
    "level": "Sätze"
  },
  {
    "de": "gültig sein",
    "lv": "Būt derīgam • Būt spēkā",
    "level": "Sätze"
  },
  {
    "de": "er steht bei ihr sehr in Gunst",
    "lv": "viņa viņam ir ļoti labvēlīga",
    "level": "Sätze"
  },
  {
    "de": "zu jemandes Gunsten",
    "lv": "kāda labā",
    "level": "Sätze"
  },
  {
    "de": "zu meinen Gunsten",
    "lv": "manā labā",
    "level": "Sätze"
  },
  {
    "de": "aus einem Guss",
    "lv": "viengabalains",
    "level": "Sätze"
  },
  {
    "de": "ich halte es für gut",
    "lv": "es uzskatu, ka tas ir labi",
    "level": "Sätze"
  },
  {
    "de": "zum Guten wenden",
    "lv": "vērst par labu",
    "level": "Sätze"
  },
  {
    "de": "im Guten sagen",
    "lv": "teikt pa labu",
    "level": "Sätze"
  },
  {
    "de": "seien Sie so gut!",
    "lv": "Esiet tik labs • Laipns!",
    "level": "Sätze"
  },
  {
    "de": "ein gutes Stück Weges",
    "lv": "krietni liels ceļa gabals",
    "level": "Sätze"
  },
  {
    "de": "haben Sie die Güte!",
    "lv": "esiet tik laipns!",
    "level": "Sätze"
  },
  {
    "de": "von ausgezeichneter Güte",
    "lv": "augstākā labuma",
    "level": "Sätze"
  },
  {
    "de": "dichtes Haar",
    "lv": "biezi mati",
    "level": "Sätze"
  },
  {
    "de": "um ein Haar",
    "lv": "par mata tiesu",
    "level": "Sätze"
  },
  {
    "de": "um kein Haar besser",
    "lv": "ne par matu labāks",
    "level": "Sätze"
  },
  {
    "de": "etwas ist an den Haaren herbeigezogen",
    "lv": "Pievilkts aiz matiem • Neticams",
    "level": "Sätze"
  },
  {
    "de": "ich habe",
    "lv": "man ir",
    "level": "Sätze"
  },
  {
    "de": "ich habe ihn gern",
    "lv": "Man viņš patīk • Es viņu mīlu",
    "level": "Sätze"
  },
  {
    "de": "ich habe diese Arbeit zu erledigen",
    "lv": "man jāpadara šis darbs",
    "level": "Sätze"
  },
  {
    "de": "was hast du?",
    "lv": "Kas tev kait • Kas noticis?",
    "level": "Sätze"
  },
  {
    "de": "du hast gut reden",
    "lv": "tev viegli runāt",
    "level": "Sätze"
  },
  {
    "de": "was haben wir heute für einen Tag?",
    "lv": "kas šodien ir par dienu?",
    "level": "Sätze"
  },
  {
    "de": "wir haben geschrieben",
    "lv": "mēs rakstījām",
    "level": "Sätze"
  },
  {
    "de": "gutartige Geschwulst",
    "lv": "labdabīgs audzējs",
    "level": "Sätze"
  },
  {
    "de": "bösartige Geschwulst",
    "lv": "ļaundabīgs audzējs",
    "level": "Sätze"
  },
  {
    "de": "klassenlose Gesellschaft",
    "lv": "bezšķiru sabiedrība",
    "level": "Sätze"
  },
  {
    "de": "wissenschaftliche Gesellschaft",
    "lv": "zinātniskā biedrība",
    "level": "Sätze"
  },
  {
    "de": "Gesellschaft mit beschränkter Haftung",
    "lv": "sabiedrība ar ierobežotu atbildību",
    "level": "Sätze"
  },
  {
    "de": "zur Gesellschaft",
    "lv": "Kompānijas pēc • Kompānijā",
    "level": "Sätze"
  },
  {
    "de": "jemandem Gesellschaft leisten",
    "lv": "pakavēt laiku kādam",
    "level": "Sätze"
  },
  {
    "de": "eine Gesellschaft geben",
    "lv": "rīkot viesības",
    "level": "Sätze"
  },
  {
    "de": "eine Gesetzesvorlage einbringen",
    "lv": "iesniegt likumprojektu",
    "level": "Sätze"
  },
  {
    "de": "gesetzlich geschützt",
    "lv": "ar likumu aizsargāts",
    "level": "Sätze"
  },
  {
    "de": "gesetzmäßig vorgehen",
    "lv": "rīkoties pēc likuma",
    "level": "Sätze"
  },
  {
    "de": "diese Farbe steht ihr gut zu Gesicht",
    "lv": "šī krāsa viņai piestāv",
    "level": "Sätze"
  },
  {
    "de": "jemandem etwas ins Gesicht sagen",
    "lv": "teikt kādam kaut ko taisni acīs",
    "level": "Sätze"
  },
  {
    "de": "ich bin auf das Ergebnis gespannt",
    "lv": "man ļoti interesē zināt, kāds būs rezultāts",
    "level": "Sätze"
  },
  {
    "de": "gespannte Beziehungen",
    "lv": "saspīlētas attiecības",
    "level": "Sätze"
  },
  {
    "de": "zum Gespött der Leute werden",
    "lv": "kļūt ļaudīm par apsmieklu",
    "level": "Sätze"
  },
  {
    "de": "das Gespräch bringen auf etwas",
    "lv": "sākt runāt par kaut ko",
    "level": "Sätze"
  },
  {
    "de": "ein Geständnis ablegen",
    "lv": "atzīties",
    "level": "Sätze"
  },
  {
    "de": "gestatten Sie bitte!",
    "lv": "atļaujiet, lūdzu!",
    "level": "Sätze"
  },
  {
    "de": "ist es gestattet zu rauchen?",
    "lv": "vai drīkst smēķēt?",
    "level": "Sätze"
  },
  {
    "de": "seine Schuld gestehen",
    "lv": "atzīt savu vainu",
    "level": "Sätze"
  },
  {
    "de": "ich muss gestehen, dass...",
    "lv": "man jāatzīst, ka...",
    "level": "Sätze"
  },
  {
    "de": "offen gestanden",
    "lv": "atklāti sakot",
    "level": "Sätze"
  },
  {
    "de": "gestern früh",
    "lv": "vakar agri no rīta",
    "level": "Sätze"
  },
  {
    "de": "gestern Abend",
    "lv": "vakar vakarā",
    "level": "Sätze"
  },
  {
    "de": "ein Gesuch einreichen",
    "lv": "Iesniegt lūgumu • Iesniegt iesniegumu",
    "level": "Sätze"
  },
  {
    "de": "gesund werden",
    "lv": "Izveseļoties • Kļūt veselam",
    "level": "Sätze"
  },
  {
    "de": "Gewähr übernehmen für etwas",
    "lv": "Garantēt kaut ko • Galvot par kaut ko",
    "level": "Sätze"
  },
  {
    "de": "Asyl gewähren",
    "lv": "piešķirt patvērumu",
    "level": "Sätze"
  },
  {
    "de": "jemandem einen Kredit gewähren",
    "lv": "piešķirt kredītu",
    "level": "Sätze"
  },
  {
    "de": "mit aller Gewalt",
    "lv": "visiem spēkiem",
    "level": "Sätze"
  },
  {
    "de": "eine Frage von Gewicht",
    "lv": "svarīgs jautājums",
    "level": "Sätze"
  },
  {
    "de": "kein Gewicht auf etwas legen",
    "lv": "uzskatīt kaut ko par nesvarīgu",
    "level": "Sätze"
  },
  {
    "de": "ein gewiefter Geschäftsmann",
    "lv": "rūdīts biznesmenis",
    "level": "Sätze"
  },
  {
    "de": "das bringt Gewinn",
    "lv": "tas dod peļņu",
    "level": "Sätze"
  },
  {
    "de": "jedes zehnte Los ist ein Gewinn",
    "lv": "katra desmitā loterijas biļete laimē",
    "level": "Sätze"
  },
  {
    "de": "das wird ein großer Gewinn sein",
    "lv": "tas būs liels ieguvums",
    "level": "Sätze"
  },
  {
    "de": "Einfluss gewinnen",
    "lv": "gūt virsroku",
    "level": "Sätze"
  },
  {
    "de": "ein gewisser Herr N.",
    "lv": "kāds N. kungs",
    "level": "Sätze"
  },
  {
    "de": "in gewisser Hinsicht",
    "lv": "dažā ziņā",
    "level": "Sätze"
  },
  {
    "de": "gewiss sein",
    "lv": "Būt drošam • Pārliecinātam",
    "level": "Sätze"
  },
  {
    "de": "jemandem ins Gewissen reden",
    "lv": "apelēt pie kāda sirdsapziņas",
    "level": "Sätze"
  },
  {
    "de": "ich bin es gewohnt",
    "lv": "Es esmu tā pieradis • Paradis",
    "level": "Sätze"
  },
  {
    "de": "es gießt",
    "lv": "par lietu gāž kā ar spaiņiem",
    "level": "Sätze"
  },
  {
    "de": "auf dem Gipfel des Ruhms",
    "lv": "slavas kalngalos",
    "level": "Sätze"
  },
  {
    "de": "durch sein Wissen glänzen",
    "lv": "spīdēt ar savām zināšanām",
    "level": "Sätze"
  },
  {
    "de": "ein Glas Bier",
    "lv": "glāze alus",
    "level": "Sätze"
  },
  {
    "de": "jemanden aufs Glatteis führen",
    "lv": "Piekrāpt • Pievilt",
    "level": "Sätze"
  },
  {
    "de": "seine Entschuldigung klingt nicht glaubhaft",
    "lv": "viņa atvainošanās skan nepārliecinoši",
    "level": "Sätze"
  },
  {
    "de": "ganz gleich",
    "lv": "gluži vienalga",
    "level": "Sätze"
  },
  {
    "de": "er gleicht seinem Vater",
    "lv": "viņš ir līdzīgs savam tēvam",
    "level": "Sätze"
  },
  {
    "de": "es ist mir gleichgültig, ob...",
    "lv": "man ir vienalga, vai...",
    "level": "Sätze"
  },
  {
    "de": "hier kommt sein Talent zur Geltung",
    "lv": "te izpaužas viņa talants",
    "level": "Sätze"
  },
  {
    "de": "der Vorschrift gemäß",
    "lv": "saskaņā ar priekšrakstu",
    "level": "Sätze"
  },
  {
    "de": "altersgemäß",
    "lv": "atbilstoši vecumam",
    "level": "Sätze"
  },
  {
    "de": "gemeiner Soldat",
    "lv": "ierindas kareivis",
    "level": "Sätze"
  },
  {
    "de": "ich habe nichts mit ihm gemein",
    "lv": "man ar viņu nav nekā kopīga",
    "level": "Sätze"
  },
  {
    "de": "gemeinsame Interessen",
    "lv": "kopīgas intereses",
    "level": "Sätze"
  },
  {
    "de": "gemeinsame Erklärung",
    "lv": "kopēja deklarācija",
    "level": "Sätze"
  },
  {
    "de": "in Gemeinschaft mit jemandem / etwas",
    "lv": "kopā ar kādu",
    "level": "Sätze"
  },
  {
    "de": "peinlich genau",
    "lv": "pedantiski",
    "level": "Sätze"
  },
  {
    "de": "es sind genau drei Meter",
    "lv": "šeit ir tieši 3 metri",
    "level": "Sätze"
  },
  {
    "de": "mit Genauigkeit",
    "lv": "Noteikti • Droši",
    "level": "Sätze"
  },
  {
    "de": "die Genehmigung erhalten",
    "lv": "dabūt atļauju",
    "level": "Sätze"
  },
  {
    "de": "sich das Genick brechen",
    "lv": "Lauzt sprandu • Lauzt kaklu",
    "level": "Sätze"
  },
  {
    "de": "die Natur genießen",
    "lv": "izbaudīt dabas skaistumu",
    "level": "Sätze"
  },
  {
    "de": "sie genießt allgemeine Achtung",
    "lv": "visi viņu cienī",
    "level": "Sätze"
  },
  {
    "de": "das genügt",
    "lv": "pietiek",
    "level": "Sätze"
  },
  {
    "de": "das genügt mir nicht",
    "lv": "ar to man nepietiek",
    "level": "Sätze"
  },
  {
    "de": "eine gerade Linie",
    "lv": "taisna līnija",
    "level": "Sätze"
  },
  {
    "de": "gerade Zahl",
    "lv": "pārskaitlis",
    "level": "Sätze"
  },
  {
    "de": "gerade zur rechten Zeit kommen",
    "lv": "nākt tieši īstā laikā",
    "level": "Sätze"
  },
  {
    "de": "in eine peinliche Lage geraten",
    "lv": "nokļūt neērtā stāvoklī",
    "level": "Sätze"
  },
  {
    "de": "aufs Geratewohl",
    "lv": "uz labu laimi",
    "level": "Sätze"
  },
  {
    "de": "eine geräumige Wohnung",
    "lv": "plašs liels dzīvoklis",
    "level": "Sätze"
  },
  {
    "de": "ins Gerede kommen",
    "lv": "nonākt ļaužu valodās",
    "level": "Sätze"
  },
  {
    "de": "eine gereizte Atmosphäre",
    "lv": "nervoza gaisotne",
    "level": "Sätze"
  },
  {
    "de": "ein schmackhaftes Gericht",
    "lv": "garšīgs ēdiens",
    "level": "Sätze"
  },
  {
    "de": "zu Mittag gab es zwei Gerichte",
    "lv": "pusdienās bija divi ēdieni",
    "level": "Sätze"
  },
  {
    "de": "vor Gericht stellen",
    "lv": "nodot tiesai",
    "level": "Sätze"
  },
  {
    "de": "nicht im Geringsten",
    "lv": "It nemaz • Ne mazākā mērā",
    "level": "Sätze"
  },
  {
    "de": "ich möchte gern ins Theater gehen",
    "lv": "es labprāt aizietu uz teātri",
    "level": "Sätze"
  },
  {
    "de": "er steht in schlechtem Geruch",
    "lv": "viņam ir slikta slava",
    "level": "Sätze"
  },
  {
    "de": "gesammelte Werke",
    "lv": "kopoti raksti",
    "level": "Sätze"
  },
  {
    "de": "die gesamte Familie",
    "lv": "visa ģimene",
    "level": "Sätze"
  },
  {
    "de": "ein Geschäft abschließen",
    "lv": "noslēgt darījumu",
    "level": "Sätze"
  },
  {
    "de": "geschäftliche Unterredung",
    "lv": "veikalnieciska saruna",
    "level": "Sätze"
  },
  {
    "de": "gegen die Geschäftsordnung verstoßen",
    "lv": "pārkāpt reglamentu",
    "level": "Sätze"
  },
  {
    "de": "was ist geschehen?",
    "lv": "kas noticis?",
    "level": "Sätze"
  },
  {
    "de": "es ist geschehen",
    "lv": "Noticis • Kas bijis - bijis",
    "level": "Sätze"
  },
  {
    "de": "es ist ihm recht geschehen",
    "lv": "Tā viņam vajadzēja • To viņš bija pelnījis",
    "level": "Sätze"
  },
  {
    "de": "das ist eine dumme Geschichte!",
    "lv": "muļķīga lieta!",
    "level": "Sätze"
  },
  {
    "de": "mach keine Geschichten!",
    "lv": "Netaisi muļķības • Netaisi jokus!",
    "level": "Sätze"
  },
  {
    "de": "kommende Geschlechter",
    "lv": "nākamās paaudzes",
    "level": "Sätze"
  },
  {
    "de": "das starke Geschlecht",
    "lv": "Stiprais dzimums • Vīrieši",
    "level": "Sätze"
  },
  {
    "de": "das menschliche Geschlecht",
    "lv": "cilvēce",
    "level": "Sätze"
  },
  {
    "de": "die Butter ist von sehr gutem Geschmack",
    "lv": "sviestam ir ļoti laba garša",
    "level": "Sätze"
  },
  {
    "de": "das ist nach meinem Geschmack",
    "lv": "tas ir manā gaumē",
    "level": "Sätze"
  },
  {
    "de": "geschweige denn...",
    "lv": "Nemaz nerunājot par to • Kur nu vēl",
    "level": "Sätze"
  },
  {
    "de": "jemandem zu Gebote stehen",
    "lv": "būt kāda rīcībā",
    "level": "Sätze"
  },
  {
    "de": "das ist außer Gebrauch gekommen",
    "lv": "to vairs nelieto",
    "level": "Sätze"
  },
  {
    "de": "vor Gebrauch",
    "lv": "pirms lietošanas",
    "level": "Sätze"
  },
  {
    "de": "nach Gebrauch",
    "lv": "pēc lietošanas",
    "level": "Sätze"
  },
  {
    "de": "nach Gebühr",
    "lv": "Pēc nopelniem • Pienācīgi",
    "level": "Sätze"
  },
  {
    "de": "von Geburt an",
    "lv": "kopš dzimšanas",
    "level": "Sätze"
  },
  {
    "de": "er ist Lette von Geburt",
    "lv": "viņš ir dzimis latvietis",
    "level": "Sätze"
  },
  {
    "de": "zum Gedächtnis",
    "lv": "Piemiņai • Atcerei",
    "level": "Sätze"
  },
  {
    "de": "ich gedenke hier eine Woche zu bleiben",
    "lv": "es esmu nodomājis palikt šeit vienu nedēļu",
    "level": "Sätze"
  },
  {
    "de": "etwas Geduld fassen",
    "lv": "mazliet paciesties",
    "level": "Sätze"
  },
  {
    "de": "sich etwas gefallen lassen",
    "lv": "paciest kaut ko",
    "level": "Sätze"
  },
  {
    "de": "das lasse ich mir nicht gefallen",
    "lv": "to es necietīšu",
    "level": "Sätze"
  },
  {
    "de": "jemandem einen Gefallen tun",
    "lv": "izdarīt kādam pakalpojumu",
    "level": "Sätze"
  },
  {
    "de": "würden Sie mir einen Gefallen tun?",
    "lv": "vai jūs būsiet tik laipns...?",
    "level": "Sätze"
  },
  {
    "de": "daran finde ich kein Gefallen",
    "lv": "tas man nepatīk",
    "level": "Sätze"
  },
  {
    "de": "jemandes Gefühle erwidern",
    "lv": "atbildēt uz kāda jūtām",
    "level": "Sätze"
  },
  {
    "de": "mit gemischten Gefühlen",
    "lv": "ar dalītām jūtām",
    "level": "Sätze"
  },
  {
    "de": "gefülltes Huhn",
    "lv": "pildīta vista",
    "level": "Sätze"
  },
  {
    "de": "gegen den Strom",
    "lv": "pret straumi",
    "level": "Sätze"
  },
  {
    "de": "gegen seinen Willen",
    "lv": "pret savu gribu",
    "level": "Sätze"
  },
  {
    "de": "gegen jemanden streng sein",
    "lv": "būt stingram pret kādu",
    "level": "Sätze"
  },
  {
    "de": "gegen Norden",
    "lv": "pret ziemeļiem",
    "level": "Sätze"
  },
  {
    "de": "gegen fünf Uhr",
    "lv": "ap pulksten pieciem",
    "level": "Sätze"
  },
  {
    "de": "es waren gegen hundert Personen",
    "lv": "bija ap simt personu",
    "level": "Sätze"
  },
  {
    "de": "gegen Quittung",
    "lv": "pret kvīti",
    "level": "Sätze"
  },
  {
    "de": "ein Mittel gegen Kopfschmerzen",
    "lv": "līdzeklis pret galvassāpēm",
    "level": "Sätze"
  },
  {
    "de": "im Gegenteil",
    "lv": "Gluži otrādi • Pretēji",
    "level": "Sätze"
  },
  {
    "de": "das Hotel steht dem Theater gegenüber",
    "lv": "viesnīca atrodas pretī teātrim",
    "level": "Sätze"
  },
  {
    "de": "er empfindet dir gegenüber Achtung",
    "lv": "viņš jūt cieņu pret tevi",
    "level": "Sätze"
  },
  {
    "de": "die Pflicht der Heimat gegenüber",
    "lv": "pienākums pret dzimteni",
    "level": "Sätze"
  },
  {
    "de": "seinem Bruder gegenüber wirkt er klein",
    "lv": "salīdzinājumā ar savu brāli viņš šķiet mazs",
    "level": "Sätze"
  },
  {
    "de": "in seiner Gegenwart",
    "lv": "Viņa klātbūtnē • Viņam klātesot",
    "level": "Sätze"
  },
  {
    "de": "gegenwärtig sein",
    "lv": "būt klāt",
    "level": "Sätze"
  },
  {
    "de": "gehen Sie geradeaus!",
    "lv": "ejiet taisni uz priekšu!",
    "level": "Sätze"
  },
  {
    "de": "der Zug geht um sechs Uhr",
    "lv": "vilciens atiet pulksten sešos",
    "level": "Sätze"
  },
  {
    "de": "in die Schule gehen",
    "lv": "iet skolā",
    "level": "Sätze"
  },
  {
    "de": "an die Arbeit gehen",
    "lv": "ķerties pie darba",
    "level": "Sätze"
  },
  {
    "de": "vor sich gehen",
    "lv": "Notikt • Norisināties",
    "level": "Sätze"
  },
  {
    "de": "wie geht es Ihnen?",
    "lv": "Kā jums iet • Kā klājas?",
    "level": "Sätze"
  },
  {
    "de": "es geht nicht",
    "lv": "tā nevar",
    "level": "Sätze"
  },
  {
    "de": "das gehört nicht zur Sache",
    "lv": "tas neattiecas uz lietu",
    "level": "Sätze"
  },
  {
    "de": "zum Gelächter werden",
    "lv": "kļūt par apsmieklu",
    "level": "Sätze"
  },
  {
    "de": "ans Ziel gelangen",
    "lv": "sasniegt mērķi",
    "level": "Sätze"
  },
  {
    "de": "das ist mir geläufig",
    "lv": "To es labi zinu • Protu",
    "level": "Sätze"
  },
  {
    "de": "in geläufigem Deutsch sprechen",
    "lv": "brīvi runāt vāciski",
    "level": "Sätze"
  },
  {
    "de": "gut gelaunt sein",
    "lv": "būt labā omā",
    "level": "Sätze"
  },
  {
    "de": "das kostet viel Geld",
    "lv": "tas dārgi maksā",
    "level": "Sätze"
  },
  {
    "de": "in barem Geld zahlen",
    "lv": "maksāt skaidrā naudā",
    "level": "Sätze"
  },
  {
    "de": "zu gelegener Zeit",
    "lv": "izdevīgā laikā",
    "level": "Sätze"
  },
  {
    "de": "das kommt mir gelegen",
    "lv": "Tas ir īstā laikā • Tas man ir izdevīgi",
    "level": "Sätze"
  },
  {
    "de": "ein entfernt gelegener Ort",
    "lv": "nomaļa vieta",
    "level": "Sätze"
  },
  {
    "de": "frag ihn gelegentlich, ob...",
    "lv": "pajautā viņam, ja iznāk, vai...",
    "level": "Sätze"
  },
  {
    "de": "gelegentlich ihres Jubiläums",
    "lv": "sakarā ar viņas jubileju",
    "level": "Sätze"
  },
  {
    "de": "ein Gelöbnis ablegen",
    "lv": "dot svinīgu solījumu",
    "level": "Sätze"
  },
  {
    "de": "die Fahrkarte gilt nicht mehr",
    "lv": "biļete vairs nav derīga",
    "level": "Sätze"
  },
  {
    "de": "auf friedlichem Wege",
    "lv": "miera ceļā",
    "level": "Sätze"
  },
  {
    "de": "es friert",
    "lv": "salst",
    "level": "Sätze"
  },
  {
    "de": "die Frist ist abgelaufen",
    "lv": "termiņš ir izbeidzies",
    "level": "Sätze"
  },
  {
    "de": "die Frist verlängern",
    "lv": "pagarināt termiņu",
    "level": "Sätze"
  },
  {
    "de": "morgen früh",
    "lv": "rīt no rīta",
    "level": "Sätze"
  },
  {
    "de": "im Frühling",
    "lv": "pavasarī",
    "level": "Sätze"
  },
  {
    "de": "den Puls fühlen",
    "lv": "Pārbaudīt • Taustīt pulsu",
    "level": "Sätze"
  },
  {
    "de": "das wird zu gutem Erfolg führen",
    "lv": "tam būs labi panākumi",
    "level": "Sätze"
  },
  {
    "de": "ein Gespräch führen",
    "lv": "sarunāties",
    "level": "Sätze"
  },
  {
    "de": "einen Kampf gegen etwas führen",
    "lv": "cīnīties pret ko",
    "level": "Sätze"
  },
  {
    "de": "in Hülle und Fülle",
    "lv": "pārpilnām",
    "level": "Sätze"
  },
  {
    "de": "das ist für Sie",
    "lv": "tas ir jums",
    "level": "Sätze"
  },
  {
    "de": "für Kinder",
    "lv": "bērniem",
    "level": "Sätze"
  },
  {
    "de": "für jemanden sorgen",
    "lv": "rūpēties par kādu",
    "level": "Sätze"
  },
  {
    "de": "für ein Jahr",
    "lv": "Vienam gadam • Uz vienu gadu",
    "level": "Sätze"
  },
  {
    "de": "Tag für Tag",
    "lv": "diendienā",
    "level": "Sätze"
  },
  {
    "de": "ein für allemal",
    "lv": "reizi par visām reizēm",
    "level": "Sätze"
  },
  {
    "de": "für immer",
    "lv": "uz visiem laikiem",
    "level": "Sätze"
  },
  {
    "de": "was für ein",
    "lv": "kāds",
    "level": "Sätze"
  },
  {
    "de": "das habe ich für 100 Euro gekauft",
    "lv": "to es nopirku par 100 eiro",
    "level": "Sätze"
  },
  {
    "de": "Furcht vor etwas haben",
    "lv": "baidīties no kaut kā",
    "level": "Sätze"
  },
  {
    "de": "für jemanden Fürsprache einlegen",
    "lv": "Aizrunāt par kādu • Aizlikt labu vārdu par kādu",
    "level": "Sätze"
  },
  {
    "de": "zu Fuß",
    "lv": "kājām",
    "level": "Sätze"
  },
  {
    "de": "auf eigenen Füßen stehen",
    "lv": "būt patstāvīgam",
    "level": "Sätze"
  },
  {
    "de": "auf großem Fuß leben",
    "lv": "Dzīvot plaši • Izšķērdīgi",
    "level": "Sätze"
  },
  {
    "de": "grünes Futter",
    "lv": "zaļbarība",
    "level": "Sätze"
  },
  {
    "de": "in Gang setzen",
    "lv": "iekustināt",
    "level": "Sätze"
  },
  {
    "de": "das Essen bestand aus drei Gängen",
    "lv": "pusdienās bija trīs ēdieni",
    "level": "Sätze"
  },
  {
    "de": "dieser Weg ist nicht mehr gangbar",
    "lv": "pa šo ceļu vairs nevar iet",
    "level": "Sätze"
  },
  {
    "de": "ein Wort in Gänsefüßchen setzen",
    "lv": "likt kādu vārdu pēdiņās",
    "level": "Sätze"
  },
  {
    "de": "die Tasse ist ganz",
    "lv": "tase ir vesela",
    "level": "Sätze"
  },
  {
    "de": "ganze Zahlen",
    "lv": "veseli skaitļi",
    "level": "Sätze"
  },
  {
    "de": "einen ganzen Tag",
    "lv": "veselu dienu",
    "level": "Sätze"
  },
  {
    "de": "den ganzen Tag",
    "lv": "visu dienu",
    "level": "Sätze"
  },
  {
    "de": "ganz gut",
    "lv": "gluži labi",
    "level": "Sätze"
  },
  {
    "de": "das Lokal ist ganztägig geöffnet",
    "lv": "Restorāns ir atvērts 24 stundas • Visu diennakti",
    "level": "Sätze"
  },
  {
    "de": "gar nicht",
    "lv": "nemaz",
    "level": "Sätze"
  },
  {
    "de": "gar nichts",
    "lv": "nekas",
    "level": "Sätze"
  },
  {
    "de": "jemandem ins Garn gehen",
    "lv": "ieskriet kāda tīklā",
    "level": "Sätze"
  },
  {
    "de": "was wird heute im Theater gegeben?",
    "lv": "ko šovakar izrāda teātrī?",
    "level": "Sätze"
  },
  {
    "de": "sich Mühe geben",
    "lv": "pūlēties",
    "level": "Sätze"
  },
  {
    "de": "es gibt",
    "lv": "ir",
    "level": "Sätze"
  },
  {
    "de": "es gibt noch viel zu tun",
    "lv": "vēl daudz kas darāms",
    "level": "Sätze"
  },
  {
    "de": "was gibt’s Neues?",
    "lv": "kas jauns?",
    "level": "Sätze"
  },
  {
    "de": "sie ist eine geborene Müller",
    "lv": "viņas pirmslaulības uzvārds ir Millere",
    "level": "Sätze"
  },
  {
    "de": "er ist der geborene Lehrer",
    "lv": "viņš dzimis skolotājs",
    "level": "Sätze"
  },
  {
    "de": "geboren sein",
    "lv": "piedzimt",
    "level": "Sätze"
  },
  {
    "de": "er ist 1935 geboren",
    "lv": "Viņš ir dzimis gadā",
    "level": "Sätze"
  },
  {
    "de": "es wird finster",
    "lv": "satumst",
    "level": "Sätze"
  },
  {
    "de": "stumm wie ein Fisch",
    "lv": "mēms kā zivs",
    "level": "Sätze"
  },
  {
    "de": "weder Fisch noch Fleisch",
    "lv": "Ne zivs, ne gaļa • Ne šis, ne tas",
    "level": "Sätze"
  },
  {
    "de": "fix und fertig",
    "lv": "pilnīgi gatavs",
    "level": "Sätze"
  },
  {
    "de": "ein flacher Teller",
    "lv": "lēzens šķīvis",
    "level": "Sätze"
  },
  {
    "de": "eine flauschige Wolldecke",
    "lv": "pūkaina vilnas sega",
    "level": "Sätze"
  },
  {
    "de": "ein fließendes Deutsch sprechen",
    "lv": "tekoši runāt vāciski",
    "level": "Sätze"
  },
  {
    "de": "mit jemandem flüstern",
    "lv": "sačukstēties ar kādu",
    "level": "Sätze"
  },
  {
    "de": "jemandes Rat folgen",
    "lv": "klausīt kāda padomam",
    "level": "Sätze"
  },
  {
    "de": "aus diesem Brief folgt, dass...",
    "lv": "no šīs vēstules izriet, ka...",
    "level": "Sätze"
  },
  {
    "de": "nicht in Form sein",
    "lv": "nebūt formā",
    "level": "Sätze"
  },
  {
    "de": "das ist eine reine Formsache",
    "lv": "tā ir tikai formalitāte",
    "level": "Sätze"
  },
  {
    "de": "ich muss fort",
    "lv": "Man jāiet projām • Man jābrauc projām",
    "level": "Sätze"
  },
  {
    "de": "und so fort",
    "lv": "un tā tālāk",
    "level": "Sätze"
  },
  {
    "de": "fahre fort!",
    "lv": "turpini tāpat tālāk!",
    "level": "Sätze"
  },
  {
    "de": "Fragen stellen",
    "lv": "uzdot jautājumus",
    "level": "Sätze"
  },
  {
    "de": "nach jemandem fragen",
    "lv": "prasīt pēc kāda",
    "level": "Sätze"
  },
  {
    "de": "freier Eintritt",
    "lv": "ieeja bez maksas",
    "level": "Sätze"
  },
  {
    "de": "ins Freie",
    "lv": "svaigā gaisā",
    "level": "Sätze"
  },
  {
    "de": "ins Freie fahren",
    "lv": "izbraukt zaļumos",
    "level": "Sätze"
  },
  {
    "de": "im Freien",
    "lv": "Brīvā dabā • Zem klajas debess",
    "level": "Sätze"
  },
  {
    "de": "ich bin hier fremd",
    "lv": "es šeit esmu svešinieks",
    "level": "Sätze"
  },
  {
    "de": "es freut mich, Sie zu sehen",
    "lv": "man ir prieks jūs redzēt",
    "level": "Sätze"
  },
  {
    "de": "sich über etwas freuen",
    "lv": "priecāties par kaut ko",
    "level": "Sätze"
  },
  {
    "de": "freut mich, Sie kennen zu lernen!",
    "lv": "priecājos iepazīties!",
    "level": "Sätze"
  },
  {
    "de": "ein Freund der Kunst",
    "lv": "Mākslas draugs • Mākslas cienītājs",
    "level": "Sätze"
  },
  {
    "de": "er ist kein Freund von...",
    "lv": "viņam nepatīk...",
    "level": "Sätze"
  },
  {
    "de": "eine Auskunft erteilen",
    "lv": "dot uzziņu",
    "level": "Sätze"
  },
  {
    "de": "einen Befehl erteilen",
    "lv": "Dot pavēli • Pavēlēt",
    "level": "Sätze"
  },
  {
    "de": "Unterricht erteilen",
    "lv": "Pasniegt stundas • Mācīt",
    "level": "Sätze"
  },
  {
    "de": "daraus kann Schaden erwachsen",
    "lv": "no tā var celties zaudējumi",
    "level": "Sätze"
  },
  {
    "de": "in Erwägung ziehen",
    "lv": "apsvērt",
    "level": "Sätze"
  },
  {
    "de": "das war zu erwarten",
    "lv": "tas jau bija gaidāms",
    "level": "Sätze"
  },
  {
    "de": "sich in seinen Erwartungen täuschen",
    "lv": "vilties savās cerībās",
    "level": "Sätze"
  },
  {
    "de": "jemandem einen Dienst erweisen",
    "lv": "izdarīt kādam pakalpojumu",
    "level": "Sätze"
  },
  {
    "de": "erweisen Sie mir den Gefallen",
    "lv": "esiet, lūdzu, tik laipns un...",
    "level": "Sätze"
  },
  {
    "de": "es erwies sich, dass...",
    "lv": "izrādījās, ka...",
    "level": "Sätze"
  },
  {
    "de": "Einigung erzielen",
    "lv": "panākt vienošanos",
    "level": "Sätze"
  },
  {
    "de": "gute Ergebnisse erzielen",
    "lv": "sasniegt labus rezultātus",
    "level": "Sätze"
  },
  {
    "de": "zu Mittag essen",
    "lv": "ēst pusdienas",
    "level": "Sätze"
  },
  {
    "de": "zu Abend essen",
    "lv": "ēst vakariņas",
    "level": "Sätze"
  },
  {
    "de": "sich satt essen",
    "lv": "pieēsties",
    "level": "Sätze"
  },
  {
    "de": "einen Etat aufstellen",
    "lv": "sastādīt budžetu",
    "level": "Sätze"
  },
  {
    "de": "etwa acht Tage",
    "lv": "apmēram astoņas dienas",
    "level": "Sätze"
  },
  {
    "de": "euch empfangen",
    "lv": "uzņemt jūs",
    "level": "Sätze"
  },
  {
    "de": "an Exil gehen",
    "lv": "doties trimdā",
    "level": "Sätze"
  },
  {
    "de": "freie Fahrt",
    "lv": "Brīvs ceļš • Bezmaksas brauciens",
    "level": "Sätze"
  },
  {
    "de": "die Preise fallen",
    "lv": "cenas krīt",
    "level": "Sätze"
  },
  {
    "de": "mir fällt schwer",
    "lv": "man nākas grūti",
    "level": "Sätze"
  },
  {
    "de": "es ist höchste Zeit",
    "lv": "ir pēdējais laiks",
    "level": "Sätze"
  },
  {
    "de": "die Höchstleistung überbieten",
    "lv": "pārspēt rekordu",
    "level": "Sätze"
  },
  {
    "de": "den Hof machen",
    "lv": "parādīt uzmanību, simpātijas sievietei",
    "level": "Sätze"
  },
  {
    "de": "Hoffnung machen",
    "lv": "dot, iedvest cerību",
    "level": "Sätze"
  },
  {
    "de": "Hoffnung haben",
    "lv": "cerēt",
    "level": "Sätze"
  },
  {
    "de": "in die Höhe fliegen",
    "lv": "uzlidot gaisā",
    "level": "Sätze"
  },
  {
    "de": "hohe Wangen",
    "lv": "iekrituši vaigi",
    "level": "Sätze"
  },
  {
    "de": "hohe Augen",
    "lv": "iegrimušas acis",
    "level": "Sätze"
  },
  {
    "de": "die hohle Hand",
    "lv": "sauja",
    "level": "Sätze"
  },
  {
    "de": "jemanden holen lassen",
    "lv": "aizsūtīt pēc kāda, likt atvest kādu",
    "level": "Sätze"
  },
  {
    "de": "Atem holen",
    "lv": "ievilkt elpu",
    "level": "Sätze"
  },
  {
    "de": "Rat holen",
    "lv": "prasīt padomu",
    "level": "Sätze"
  },
  {
    "de": "jemandem die Hölle heiß machen",
    "lv": "kādu iebiedēt, piedraudēt",
    "level": "Sätze"
  },
  {
    "de": "wir haben viel über Ihr Land gehört",
    "lv": "mēs esam daudz dzirdējuši par jūsu zemi",
    "level": "Sätze"
  },
  {
    "de": "er lässt nichts von sich hören",
    "lv": "no viņa nav nekādu ziņu",
    "level": "Sätze"
  },
  {
    "de": "auf seinen Rat hören",
    "lv": "klausīt viņa padomam",
    "level": "Sätze"
  },
  {
    "de": "die Hosen anhaben",
    "lv": "būt noteicējam",
    "level": "Sätze"
  },
  {
    "de": "etwas geht in die Hose",
    "lv": "neizdodas",
    "level": "Sätze"
  },
  {
    "de": "Hunger leiden",
    "lv": "ciest badu",
    "level": "Sätze"
  },
  {
    "de": "ich habe Hunger",
    "lv": "es esmu izsalcis",
    "level": "Sätze"
  },
  {
    "de": "diesem Gebiet droht eine Hungersnot",
    "lv": "šim apgabalam draud bads",
    "level": "Sätze"
  },
  {
    "de": "auf einem Bein hüpfen",
    "lv": "lēkāt uz vienas kājas",
    "level": "Sätze"
  },
  {
    "de": "eine Hürde nehmen",
    "lv": "pārvarēt barjeru",
    "level": "Sätze"
  },
  {
    "de": "auf der Hut sein",
    "lv": "Uzmanīties • Sargāties",
    "level": "Sätze"
  },
  {
    "de": "das Vieh hüten",
    "lv": "ganīt lopus",
    "level": "Sätze"
  },
  {
    "de": "das Bett hüten",
    "lv": "palikt gultā slimības dēļ",
    "level": "Sätze"
  },
  {
    "de": "sich hüten",
    "lv": "sargāties, uzmanīties",
    "level": "Sätze"
  },
  {
    "de": "jemanden in Hypnose versetzen",
    "lv": "kādu nohipnotizēt",
    "level": "Sätze"
  },
  {
    "de": "unter Hypnose stehen",
    "lv": "būt hipnozes stāvoklī",
    "level": "Sätze"
  },
  {
    "de": "eine Hypothek aufnehmen",
    "lv": "uzņemties hipotēku, noslēgt hipotēkas līgumu",
    "level": "Sätze"
  },
  {
    "de": "gedenkst du meiner?",
    "lv": "Vai tu mani atceries? • Vai tu par mani iedomājies?",
    "level": "Sätze"
  },
  {
    "de": "er kennt mich",
    "lv": "viņš mani pazīst",
    "level": "Sätze"
  },
  {
    "de": "ich gehe zu ihr",
    "lv": "es eju pie viņas",
    "level": "Sätze"
  },
  {
    "de": "das ist ihr Vater",
    "lv": "Tas ir viņas • Viņu tēvs",
    "level": "Sätze"
  },
  {
    "de": "im Winter",
    "lv": "ziemā",
    "level": "Sätze"
  },
  {
    "de": "einen kleinen Imbiss einnehmen",
    "lv": "mazliet uzkost, iekost",
    "level": "Sätze"
  },
  {
    "de": "auf immer",
    "lv": "uz visiem laikiem",
    "level": "Sätze"
  },
  {
    "de": "er wird immer größer",
    "lv": "viņš kļūst aizvien lielāks",
    "level": "Sätze"
  },
  {
    "de": "imstande sein",
    "lv": "būt spējīgam, spēt, varēt",
    "level": "Sätze"
  },
  {
    "de": "in Hamburg",
    "lv": "Hamburgā",
    "level": "Sätze"
  },
  {
    "de": "in dieser Zeit",
    "lv": "šai laikā",
    "level": "Sätze"
  },
  {
    "de": "in der Sonne liegen",
    "lv": "gulēt saulē",
    "level": "Sätze"
  },
  {
    "de": "in einer halben Stunde",
    "lv": "pēc pusstundas",
    "level": "Sätze"
  },
  {
    "de": "jemanden in flagranti erwischen",
    "lv": "pieķert, darot kaut ko aizliegtu",
    "level": "Sätze"
  },
  {
    "de": "im Inland",
    "lv": "iekšzemē",
    "level": "Sätze"
  },
  {
    "de": "inmitten des Sees",
    "lv": "ezera vidū",
    "level": "Sätze"
  },
  {
    "de": "von innen",
    "lv": "no iekšpuses",
    "level": "Sätze"
  },
  {
    "de": "nach innen",
    "lv": "uz iekšu, uz iekšpusi",
    "level": "Sätze"
  },
  {
    "de": "innerhalb der Stadt",
    "lv": "pilsētas robežās",
    "level": "Sätze"
  },
  {
    "de": "innerhalb dreier Tage",
    "lv": "trīs dienu laikā",
    "level": "Sätze"
  },
  {
    "de": "innige Freundschaft",
    "lv": "sirsnīga draudzība",
    "level": "Sätze"
  },
  {
    "de": "ins Zimmer gehen",
    "lv": "iet istabā",
    "level": "Sätze"
  },
  {
    "de": "ein Inserat aufgeben",
    "lv": "ielikt sludinājumu avīzē",
    "level": "Sätze"
  },
  {
    "de": "du hast insofern recht",
    "lv": "šai ziņā tev taisnība",
    "level": "Sätze"
  },
  {
    "de": "in Stand halten",
    "lv": "turēt, uzturēt kārtībā",
    "level": "Sätze"
  },
  {
    "de": "in Stand setzen",
    "lv": "izlabot, salabot, remontēt, savest kārtībā",
    "level": "Sätze"
  },
  {
    "de": "eine inständige Bitte",
    "lv": "sirsnīgs lūgums",
    "level": "Sätze"
  },
  {
    "de": "jemanden inständig bitten",
    "lv": "gauži, ļoti lūgt kādu",
    "level": "Sätze"
  },
  {
    "de": "ein neues Schulkind in die Klasse integrieren",
    "lv": "iekļaut klasē jaunu skolēnu",
    "level": "Sätze"
  },
  {
    "de": "Interesse haben für",
    "lv": "interesēties par",
    "level": "Sätze"
  },
  {
    "de": "sich für Sport interessieren",
    "lv": "interesēties par sportu",
    "level": "Sätze"
  },
  {
    "de": "betriebsintern",
    "lv": "uzņēmuma iekšējais",
    "level": "Sätze"
  },
  {
    "de": "universitätsintern",
    "lv": "universitātes iekšējais",
    "level": "Sätze"
  },
  {
    "de": "das sagte ich dir ja!",
    "lv": "to jau es tev teicu!",
    "level": "Sätze"
  },
  {
    "de": "Ja sagen",
    "lv": "teikt “jā”, piekrist",
    "level": "Sätze"
  },
  {
    "de": "auf die Jagd gehen",
    "lv": "iet medībās",
    "level": "Sätze"
  },
  {
    "de": "dieses Jahr",
    "lv": "šogad, šai gadā",
    "level": "Sätze"
  },
  {
    "de": "in den besten Jahren",
    "lv": "spēka gados, brieduma gados",
    "level": "Sätze"
  },
  {
    "de": "welcher Jahrgang sind Sie?",
    "lv": "kādā gadā jūs esat dzimis?",
    "level": "Sätze"
  },
  {
    "de": "einmal jährlich",
    "lv": "reizi gadā",
    "level": "Sätze"
  },
  {
    "de": "es jammert mich zu sehen...",
    "lv": "žēl skatīties...",
    "level": "Sätze"
  },
  {
    "de": "je drei",
    "lv": "pa trīs",
    "level": "Sätze"
  },
  {
    "de": "je mehr, desto besser",
    "lv": "jo vairāk, jo labāk",
    "level": "Sätze"
  },
  {
    "de": "jeder von uns",
    "lv": "ikviens no mums",
    "level": "Sätze"
  },
  {
    "de": "zu jeder Zeit",
    "lv": "katrā laikā",
    "level": "Sätze"
  },
  {
    "de": "jenseits des Flusses",
    "lv": "viņpus upes",
    "level": "Sätze"
  },
  {
    "de": "bis jetzt",
    "lv": "līdz šim brīdim",
    "level": "Sätze"
  },
  {
    "de": "von jetzt ab",
    "lv": "no šī brīža",
    "level": "Sätze"
  },
  {
    "de": "von jung auf",
    "lv": "no mazotnes, no mazām dienām",
    "level": "Sätze"
  },
  {
    "de": "der jüngste Sohn",
    "lv": "jaunākais dēls",
    "level": "Sätze"
  },
  {
    "de": "die jüngsten Ereignisse",
    "lv": "jaunākie, pēdējie notikumi",
    "level": "Sätze"
  },
  {
    "de": "gelöschter Kalk",
    "lv": "dzēstie kaļķi",
    "level": "Sätze"
  },
  {
    "de": "es ist kalt",
    "lv": "ir auksts",
    "level": "Sätze"
  },
  {
    "de": "kalte Getränke",
    "lv": "atspirdzinošie dzērieni",
    "level": "Sätze"
  },
  {
    "de": "kalte Platte",
    "lv": "aukstie uzkožamie",
    "level": "Sätze"
  },
  {
    "de": "etwas kalt stellen",
    "lv": "nolikt aukstumā",
    "level": "Sätze"
  },
  {
    "de": "das lässt mich kalt",
    "lv": "man tur ne silts, ne auksts",
    "level": "Sätze"
  },
  {
    "de": "sich kämmen",
    "lv": "[sa]ķemmēties, [sa]sukāties",
    "level": "Sätze"
  },
  {
    "de": "der Kampf ums Dasein",
    "lv": "cīņa par eksistenci",
    "level": "Sätze"
  },
  {
    "de": "um den ersten Platz kämpfen",
    "lv": "cīnīties par pirmo vietu",
    "level": "Sätze"
  },
  {
    "de": "die Kapazität einer Maschine",
    "lv": "mašīnas jauda",
    "level": "Sätze"
  },
  {
    "de": "er ist eine Kapazität auf seinem Gebiet",
    "lv": "viņš ir sava aroda lietpratējs",
    "level": "Sätze"
  },
  {
    "de": "auf seine eigene Kappe nehmen",
    "lv": "uzņemties atbildību",
    "level": "Sätze"
  },
  {
    "de": "eine karge Antwort",
    "lv": "skopa īsa atbilde",
    "level": "Sätze"
  },
  {
    "de": "ein karges Leben führen",
    "lv": "trūcīgi dzīvot",
    "level": "Sätze"
  },
  {
    "de": "mit offenen Karten spielen",
    "lv": "necensties neko noslēpt",
    "level": "Sätze"
  },
  {
    "de": "alles auf eine Karte setzen",
    "lv": "Likt visu uz vienu kārti • Riskēt",
    "level": "Sätze"
  },
  {
    "de": "knapp bei Kasse sein",
    "lv": "būt naudas grūtībās",
    "level": "Sätze"
  },
  {
    "de": "es ist kaum zu glauben",
    "lv": "gandrīz neticami",
    "level": "Sätze"
  },
  {
    "de": "gegen Kaution",
    "lv": "pret ķīlu, drošības naudu, galvojumu",
    "level": "Sätze"
  },
  {
    "de": "Kaution stellen",
    "lv": "Dot ķīlu • Iemaksāt drošības naudu • Galvot",
    "level": "Sätze"
  },
  {
    "de": "zum besten kehren",
    "lv": "vērst par labu",
    "level": "Sätze"
  },
  {
    "de": "kein Mensch",
    "lv": "neviens cilvēks",
    "level": "Sätze"
  },
  {
    "de": "auf keinen Fall",
    "lv": "nekādā gadījumā, nekādā ziņā",
    "level": "Sätze"
  },
  {
    "de": "kein einziges Mal",
    "lv": "ne reizi",
    "level": "Sätze"
  },
  {
    "de": "ich kenne ihn dem Namen nach",
    "lv": "es viņu pazīstu pēc vārda",
    "level": "Sätze"
  },
  {
    "de": "jemandem etwas zur Kenntnis geben",
    "lv": "kādam kaut ko paziņot",
    "level": "Sätze"
  },
  {
    "de": "zur Kenntnis nehmen",
    "lv": "ievērot",
    "level": "Sätze"
  },
  {
    "de": "das ist der Kern der Sache",
    "lv": "tā ir jautājuma būtība",
    "level": "Sätze"
  },
  {
    "de": "eine Kette von Bergen",
    "lv": "kalnu grēda",
    "level": "Sätze"
  },
  {
    "de": "von Kind auf",
    "lv": "no mazotnes",
    "level": "Sätze"
  },
  {
    "de": "es kitzelt mich",
    "lv": "man kut",
    "level": "Sätze"
  },
  {
    "de": "er reichte eine Klage ein",
    "lv": "viņš iesniedza sūdzību",
    "level": "Sätze"
  },
  {
    "de": "die Sache klappt",
    "lv": "Lieta iet • Viss iet gludi kā vajag",
    "level": "Sätze"
  },
  {
    "de": "der Himmel wird klar",
    "lv": "debesis noskaidrojas",
    "level": "Sätze"
  },
  {
    "de": "das ist doch klar!",
    "lv": "tas taču ir skaidrs saprotams!",
    "level": "Sätze"
  },
  {
    "de": "man muss die Sachlage klären",
    "lv": "jānoskaidro apstākļi",
    "level": "Sätze"
  },
  {
    "de": "kommst du mit der Aufgabe klar?",
    "lv": "vai tu tiksi galā ar uzdevumu?",
    "level": "Sätze"
  },
  {
    "de": "ein Schüler der achten Klasse",
    "lv": "astotās klases skolēns",
    "level": "Sätze"
  },
  {
    "de": "eine Kajüte erster Klasse",
    "lv": "pirmās klases kajīte",
    "level": "Sätze"
  },
  {
    "de": "eine Fahrkarte zweiter Klasse",
    "lv": "biļete braukšanai otrajā klasē",
    "level": "Sätze"
  },
  {
    "de": "die klassenlose Gesellschaft",
    "lv": "bezšķiru sabiedrība",
    "level": "Sätze"
  },
  {
    "de": "Beifall klatschen",
    "lv": "aplaudēt",
    "level": "Sätze"
  },
  {
    "de": "Marken auf einen Briefumschlag kleben",
    "lv": "uzlīmēt markas uz aploksnes",
    "level": "Sätze"
  },
  {
    "de": "sie ist gut gekleidet",
    "lv": "viņa ir labi ģērbusies",
    "level": "Sätze"
  },
  {
    "de": "diese Farbe kleidet dich",
    "lv": "šī krāsa piestāv",
    "level": "Sätze"
  },
  {
    "de": "klein von Wuchs",
    "lv": "maza auguma",
    "level": "Sätze"
  },
  {
    "de": "in der Klemme sein",
    "lv": "būt sprukās, spīlēs",
    "level": "Sätze"
  },
  {
    "de": "es klingelt",
    "lv": "zvana",
    "level": "Sätze"
  },
  {
    "de": "das Geschirr klirrt",
    "lv": "trauki šķind",
    "level": "Sätze"
  },
  {
    "de": "ans Fenster klopfen",
    "lv": "klauvēt pie loga",
    "level": "Sätze"
  },
  {
    "de": "einen Nagel in die Wand klopfen",
    "lv": "sist dzīt naglu sienā",
    "level": "Sätze"
  },
  {
    "de": "daraus werde ich nicht klug",
    "lv": "es te nekā nesaprotu",
    "level": "Sätze"
  },
  {
    "de": "Nüsse knacken",
    "lv": "kost riekstus",
    "level": "Sätze"
  },
  {
    "de": "ein Schuss knallt",
    "lv": "atskan šāviens",
    "level": "Sätze"
  },
  {
    "de": "die Hose ist knapp",
    "lv": "bikses ir šauras",
    "level": "Sätze"
  },
  {
    "de": "den Knopf annähen",
    "lv": "piešūt pogu podziņu",
    "level": "Sätze"
  },
  {
    "de": "große Erwartungen an etwas knüpfen",
    "lv": "saistīt ar kaut ko lielas cerības",
    "level": "Sätze"
  },
  {
    "de": "von Wut kochen",
    "lv": "vārīties no dusmām",
    "level": "Sätze"
  },
  {
    "de": "einen Köder auslegen",
    "lv": "izlikt ēsmu dzīvnieku pievilināšanai",
    "level": "Sätze"
  },
  {
    "de": "das Kommando führen",
    "lv": "komandēt",
    "level": "Sätze"
  },
  {
    "de": "wie komme ich zum Bahnhof?",
    "lv": "kā lai aizeju uz staciju?",
    "level": "Sätze"
  },
  {
    "de": "wann kommen wir an die Reihe?",
    "lv": "kad būs mūsu kārta?",
    "level": "Sätze"
  },
  {
    "de": "einen Arzt kommen lassen",
    "lv": "izsaukt ārstu",
    "level": "Sätze"
  },
  {
    "de": "komm her!",
    "lv": "nāc šurp!",
    "level": "Sätze"
  },
  {
    "de": "an den Tag kommen",
    "lv": "nākt dienas gaismā, atklāties",
    "level": "Sätze"
  },
  {
    "de": "zu sich kommen",
    "lv": "Atgūt samaņu • Atjēgties",
    "level": "Sätze"
  },
  {
    "de": "einen Kompromiss eingehen",
    "lv": "noslēgt kompromisu",
    "level": "Sätze"
  },
  {
    "de": "in einen Konflikt eingreifen",
    "lv": "iejaukties konfliktā",
    "level": "Sätze"
  },
  {
    "de": "sich aus einem Konflikt heraushalten",
    "lv": "neiejaukties konfliktā",
    "level": "Sätze"
  },
  {
    "de": "man kann",
    "lv": "var",
    "level": "Sätze"
  },
  {
    "de": "man kann nicht",
    "lv": "nevar",
    "level": "Sätze"
  },
  {
    "de": "könnte ich Frau N. sprechen?",
    "lv": "vai es varētu runāt ar N. kundzi?",
    "level": "Sätze"
  },
  {
    "de": "er kann Deutsch",
    "lv": "viņš prot vāciski",
    "level": "Sätze"
  },
  {
    "de": "großes Können",
    "lv": "izcila meistarība",
    "level": "Sätze"
  },
  {
    "de": "die Konsequenzen ziehen",
    "lv": "secināt",
    "level": "Sätze"
  },
  {
    "de": "die Konsequenzen tragen",
    "lv": "atbildēt par sekām",
    "level": "Sätze"
  },
  {
    "de": "den Kopf nicht hängen lassen",
    "lv": "nenokārt galvu",
    "level": "Sätze"
  },
  {
    "de": "Hals über Kopf",
    "lv": "pa galvu pa kaklu",
    "level": "Sätze"
  },
  {
    "de": "das ist ein kluger Kopf",
    "lv": "tam ir galva uz pleciem",
    "level": "Sätze"
  },
  {
    "de": "ich habe Kopfschmerzen",
    "lv": "man sāp galva",
    "level": "Sätze"
  },
  {
    "de": "das diplomatische Korps",
    "lv": "diplomātiskais korpuss",
    "level": "Sätze"
  },
  {
    "de": "was kostet das?",
    "lv": "cik tas maksā?",
    "level": "Sätze"
  },
  {
    "de": "koste es, was es wolle",
    "lv": "lai tas maksā ko maksādams",
    "level": "Sätze"
  },
  {
    "de": "auf meine Kosten",
    "lv": "uz mana rēķina",
    "level": "Sätze"
  },
  {
    "de": "mit aller Kraft",
    "lv": "no visa spēka",
    "level": "Sätze"
  },
  {
    "de": "aus vollen Kräften",
    "lv": "no visa spēka",
    "level": "Sätze"
  },
  {
    "de": "in Kraft treten",
    "lv": "stāties spēkā",
    "level": "Sätze"
  },
  {
    "de": "ein Gesetz in Kraft setzen",
    "lv": "ieviest likumu",
    "level": "Sätze"
  },
  {
    "de": "ein Gesetz außer Kraft setzen",
    "lv": "atcelt likumu noteikumu",
    "level": "Sätze"
  },
  {
    "de": "ein kräftiges Essen",
    "lv": "spēcinošs ēdiens",
    "level": "Sätze"
  },
  {
    "de": "krank werden",
    "lv": "saslimt",
    "level": "Sätze"
  },
  {
    "de": "er ist plötzlich krank geworden",
    "lv": "viņš pēkšņi saslimis",
    "level": "Sätze"
  },
  {
    "de": "das macht mich ganz krank",
    "lv": "tas man krīt uz nerviem",
    "level": "Sätze"
  },
  {
    "de": "einen Kranz niederlegen",
    "lv": "nolikt vainagu",
    "level": "Sätze"
  },
  {
    "de": "der Weg krümmt sich",
    "lv": "ceļš met līkumu",
    "level": "Sätze"
  },
  {
    "de": "sich kümmern um",
    "lv": "rūpēties par",
    "level": "Sätze"
  },
  {
    "de": "von etwas kurz berichten",
    "lv": "īsi par kaut ko pastāstīt",
    "level": "Sätze"
  },
  {
    "de": "in kurzer Zeit",
    "lv": "drīzumā",
    "level": "Sätze"
  },
  {
    "de": "kurz nach",
    "lv": "drīz pēc tam",
    "level": "Sätze"
  },
  {
    "de": "kurz vor",
    "lv": "īsi pirms",
    "level": "Sätze"
  },
  {
    "de": "vor kurzem",
    "lv": "nesen",
    "level": "Sätze"
  },
  {
    "de": "in Kürze",
    "lv": "Drīzumā, tuvākajā laikā • Īsos vārdos",
    "level": "Sätze"
  },
  {
    "de": "die Zeit kürzen",
    "lv": "pakavēt laiku",
    "level": "Sätze"
  },
  {
    "de": "eine kurzfristige Abreise",
    "lv": "pēkšņa aizbraukšana",
    "level": "Sätze"
  },
  {
    "de": "sich krank lachen",
    "lv": "aiz smiekliem vai pušu plīst",
    "level": "Sätze"
  },
  {
    "de": "nicht in der Lage sein, etwas zu tun",
    "lv": "nebūt spējīgam kaut ko izdarīt",
    "level": "Sätze"
  },
  {
    "de": "durch den Unfall war der Verkehr stundenlang lahm gelegt",
    "lv": "satiksmes negadījuma dēļ",
    "level": "Sätze"
  },
  {
    "de": "an Land gehen",
    "lv": "izkāpt krastā",
    "level": "Sätze"
  },
  {
    "de": "auf dem Land",
    "lv": "uz laukiem",
    "level": "Sätze"
  },
  {
    "de": "vor langer Zeit",
    "lv": "sensenis",
    "level": "Sätze"
  },
  {
    "de": "zwei Stunden lang",
    "lv": "divas stundas ilgs, ilgi",
    "level": "Sätze"
  },
  {
    "de": "wie lange dauert die Vorstellung?",
    "lv": "cik ilga būs izrāde?",
    "level": "Sätze"
  },
  {
    "de": "schon lange",
    "lv": "jau sen",
    "level": "Sätze"
  },
  {
    "de": "es ist schon lange her",
    "lv": "ir pagājis ilgs laiks, jau sen",
    "level": "Sätze"
  },
  {
    "de": "viel Lärm um nichts",
    "lv": "liela brēka par neko",
    "level": "Sätze"
  },
  {
    "de": "jemanden im Stich lassen",
    "lv": "pamest kādu likteņa varā",
    "level": "Sätze"
  },
  {
    "de": "lass das!",
    "lv": "izbeidz!, atmet to!",
    "level": "Sätze"
  },
  {
    "de": "lass mich in Ruhe!",
    "lv": "liec mani mierā!",
    "level": "Sätze"
  },
  {
    "de": "jemanden rufen lassen",
    "lv": "likt kādu pasaukt",
    "level": "Sätze"
  },
  {
    "de": "sich einen Anzug machen lassen",
    "lv": "pasūtīt sev uzvalku",
    "level": "Sätze"
  },
  {
    "de": "Sie mich Ihnen helfen!",
    "lv": "atļaujiet jums palīdzēt!",
    "level": "Sätze"
  },
  {
    "de": "lasst uns gehen!",
    "lv": "iesim!",
    "level": "Sätze"
  },
  {
    "de": "jemandem zur Last fallen",
    "lv": "būt kādam par nastu, slogu",
    "level": "Sätze"
  },
  {
    "de": "eine latente Gefahr",
    "lv": "slēptas briesmas",
    "level": "Sätze"
  },
  {
    "de": "im vollen Lauf",
    "lv": "pilnā gaitā",
    "level": "Sätze"
  },
  {
    "de": "im Lauf der Zeit",
    "lv": "ar laiku, laika gaitā",
    "level": "Sätze"
  },
  {
    "de": "im Lauf einer Woche",
    "lv": "nedēļas laikā",
    "level": "Sätze"
  },
  {
    "de": "sich müde laufen",
    "lv": "noskrieties",
    "level": "Sätze"
  },
  {
    "de": "der Film läuft schon die dritte Woche",
    "lv": "filmu rāda jau trešo nedēļu",
    "level": "Sätze"
  },
  {
    "de": "na, wie läufts?",
    "lv": "kā klājas?",
    "level": "Sätze"
  },
  {
    "de": "etwas läuft wie geschmiert",
    "lv": "Klājas ļoti labi • Viss notiek, kā paredzēts",
    "level": "Sätze"
  },
  {
    "de": "etwas ist gelaufen",
    "lv": "tur vairs nevar neko darīt",
    "level": "Sätze"
  },
  {
    "de": "Launen haben",
    "lv": "untumoties",
    "level": "Sätze"
  },
  {
    "de": "mit lauter Stimme",
    "lv": "skaļā balsī",
    "level": "Sätze"
  },
  {
    "de": "laut Vorschrift",
    "lv": "pēc priekšraksta",
    "level": "Sätze"
  },
  {
    "de": "laut des Gesetzes",
    "lv": "saskaņā ar likumu",
    "level": "Sätze"
  },
  {
    "de": "es lebe!",
    "lv": "lai dzīvo!",
    "level": "Sätze"
  },
  {
    "de": "leben Sie wohl!",
    "lv": "dzīvojiet sveiki!, ardievu!",
    "level": "Sätze"
  },
  {
    "de": "ums Leben kommen",
    "lv": "aiziet bojā",
    "level": "Sätze"
  },
  {
    "de": "Eier legen",
    "lv": "dēt olas",
    "level": "Sätze"
  },
  {
    "de": "sich legen",
    "lv": "nogulties, nolikties",
    "level": "Sätze"
  },
  {
    "de": "das ist ihm eine Lehre",
    "lv": "tā viņam laba mācība",
    "level": "Sätze"
  },
  {
    "de": "der leibliche Vater",
    "lv": "miesīgais tēvs",
    "level": "Sätze"
  },
  {
    "de": "leichter Schlaf",
    "lv": "caurs miegs",
    "level": "Sätze"
  },
  {
    "de": "es tut mir leid",
    "lv": "man ļoti žēl",
    "level": "Sätze"
  },
  {
    "de": "er tut mir leid",
    "lv": "man viņa žēl",
    "level": "Sätze"
  },
  {
    "de": "jemandem Leid zufügen",
    "lv": "nodarīt kādam pāri",
    "level": "Sätze"
  },
  {
    "de": "ich kann ihn nicht leiden",
    "lv": "es viņu nevaru ciest",
    "level": "Sätze"
  },
  {
    "de": "er leidet an Rheumatismus",
    "lv": "viņš slimo ar reimatismu",
    "level": "Sätze"
  },
  {
    "de": "Widerstand leisten",
    "lv": "pretoties",
    "level": "Sätze"
  },
  {
    "de": "Gewähr leisten für",
    "lv": "galvot, garantēt",
    "level": "Sätze"
  },
  {
    "de": "sich etwas leisten",
    "lv": "atļauties",
    "level": "Sätze"
  },
  {
    "de": "die Aufmerksamkeit auf etwas lenken",
    "lv": "pievērst uzmanību kaut kam",
    "level": "Sätze"
  },
  {
    "de": "letzten Mittwoch",
    "lv": "pagājušo trešdien",
    "level": "Sätze"
  },
  {
    "de": "ans Licht kommen",
    "lv": "Atklāties • Nākt gaismā",
    "level": "Sätze"
  },
  {
    "de": "das ist mir lieb",
    "lv": "tas man ir patīkami",
    "level": "Sätze"
  },
  {
    "de": "die Stadt liegt am Meer",
    "lv": "pilsēta atrodas pie jūras",
    "level": "Sätze"
  },
  {
    "de": "in erster Linie",
    "lv": "pirmām kārtām",
    "level": "Sätze"
  },
  {
    "de": "mit linker Hand",
    "lv": "pa kreisi",
    "level": "Sätze"
  },
  {
    "de": "die linke Seite",
    "lv": "kreisā puse",
    "level": "Sätze"
  },
  {
    "de": "von links",
    "lv": "no kreisās puses",
    "level": "Sätze"
  },
  {
    "de": "nach links",
    "lv": "pa kreisi",
    "level": "Sätze"
  },
  {
    "de": "mit List und Tücke",
    "lv": "ar viltu",
    "level": "Sätze"
  },
  {
    "de": "die schöne Literatur",
    "lv": "daiļliteratūra",
    "level": "Sätze"
  },
  {
    "de": "eine Lizenz beantragen",
    "lv": "pieprasīt licenci",
    "level": "Sätze"
  },
  {
    "de": "eine Lizenz erwerben",
    "lv": "iegūt licenci",
    "level": "Sätze"
  },
  {
    "de": "eine Lizenz erteilen",
    "lv": "piešķirt licenci",
    "level": "Sätze"
  },
  {
    "de": "es lohnt sich nicht",
    "lv": "neatmaksājas, nav vērts",
    "level": "Sätze"
  },
  {
    "de": "die Tür ist los",
    "lv": "durvis ir vaļā",
    "level": "Sätze"
  },
  {
    "de": "los!",
    "lv": "sākt!, uz priekšu!",
    "level": "Sätze"
  },
  {
    "de": "was ist los?",
    "lv": "kas noticis?",
    "level": "Sätze"
  },
  {
    "de": "den Durst löschen",
    "lv": "dzēst, remdēt slāpes",
    "level": "Sätze"
  },
  {
    "de": "eine Fahrkarte lösen",
    "lv": "iegādāties braukšanas biļeti",
    "level": "Sätze"
  },
  {
    "de": "die Luft ist rein!",
    "lv": "gaiss ir tīrs!",
    "level": "Sätze"
  },
  {
    "de": "es herrscht dicke Luft",
    "lv": "saspringta gaisotne",
    "level": "Sätze"
  },
  {
    "de": "jemanden wie Luft behandeln",
    "lv": "ignorēt",
    "level": "Sätze"
  },
  {
    "de": "halt die Luft an!",
    "lv": "nesteidzies!, nepārspīlē!, paklusē!",
    "level": "Sätze"
  },
  {
    "de": "mit Luftpost befördern",
    "lv": "nosūtīt pa gaisa pastu",
    "level": "Sätze"
  },
  {
    "de": "ich habe Lust, das zu machen",
    "lv": "es vēlos to darīt",
    "level": "Sätze"
  },
  {
    "de": "sich über jemanden lustig machen",
    "lv": "izsmiet kādu",
    "level": "Sätze"
  },
  {
    "de": "was machst du?",
    "lv": "ko tu dari?",
    "level": "Sätze"
  },
  {
    "de": "einen Ausflug machen",
    "lv": "doties izbraukumā",
    "level": "Sätze"
  },
  {
    "de": "eine Kur machen",
    "lv": "izņemt ārstēšanās kursu",
    "level": "Sätze"
  },
  {
    "de": "das macht nichts",
    "lv": "tas nekas",
    "level": "Sätze"
  },
  {
    "de": "sich Notizen machen",
    "lv": "rakstīt piezīmes",
    "level": "Sätze"
  },
  {
    "de": "sich an die Arbeit machen",
    "lv": "ķerties pie darba",
    "level": "Sätze"
  },
  {
    "de": "mächtige Vorräte",
    "lv": "milzīgi krājumi",
    "level": "Sätze"
  },
  {
    "de": "mageres Auskommen",
    "lv": "trūcīga iztika",
    "level": "Sätze"
  },
  {
    "de": "magere Ernte",
    "lv": "zema raža",
    "level": "Sätze"
  },
  {
    "de": "Mahlzeit!",
    "lv": "labu apetīti!",
    "level": "Sätze"
  },
  {
    "de": "zwei mal zwei ist vier",
    "lv": "divreiz divi – četri",
    "level": "Sätze"
  },
  {
    "de": "sag mal!",
    "lv": "saki jel!",
    "level": "Sätze"
  },
  {
    "de": "viele Male",
    "lv": "daudz reižu",
    "level": "Sätze"
  },
  {
    "de": "mit einem Male",
    "lv": "uzreiz, pēkšņi",
    "level": "Sätze"
  },
  {
    "de": "man sagt",
    "lv": "runā",
    "level": "Sätze"
  },
  {
    "de": "man braucht",
    "lv": "vajag",
    "level": "Sätze"
  },
  {
    "de": "manche Leute",
    "lv": "daži cilvēki",
    "level": "Sätze"
  },
  {
    "de": "manches",
    "lv": "daudz kas",
    "level": "Sätze"
  },
  {
    "de": "geschwollene Mandeln",
    "lv": "uztūkušas mandeles",
    "level": "Sätze"
  },
  {
    "de": "Mangel an Vertrauen",
    "lv": "uzticības trūkums",
    "level": "Sätze"
  },
  {
    "de": "Mangel an Bildung",
    "lv": "izglītības trūkums",
    "level": "Sätze"
  },
  {
    "de": "es mangelt mir an nichts",
    "lv": "man nekā netrūkst",
    "level": "Sätze"
  },
  {
    "de": "das männliche Geschlecht",
    "lv": "vīriešu dzimte",
    "level": "Sätze"
  },
  {
    "de": "Sieger in Mannschaftskampf sein",
    "lv": "kļūt par uzvarētāju komandu sacīkstēs",
    "level": "Sätze"
  },
  {
    "de": "durch Mark und Bein gehen",
    "lv": "Tas iet līdz kaulam • Tas iet cauri kauliem",
    "level": "Sätze"
  },
  {
    "de": "ein Anzug nach Maß",
    "lv": "pēc mēra šūts uzvalks",
    "level": "Sätze"
  },
  {
    "de": "Maß nehmen",
    "lv": "noņemt mēru",
    "level": "Sätze"
  },
  {
    "de": "in ungenügendem Maße",
    "lv": "nepietiekami, mazā mērā",
    "level": "Sätze"
  },
  {
    "de": "in Massen",
    "lv": "masveidīgi, lielās masās",
    "level": "Sätze"
  },
  {
    "de": "matt setzen",
    "lv": "pieteikt matu šahā",
    "level": "Sätze"
  },
  {
    "de": "um so mehr",
    "lv": "jo vairāk",
    "level": "Sätze"
  },
  {
    "de": "und dergleichen mehr",
    "lv": "un vēl tamlīdzīgi",
    "level": "Sätze"
  },
  {
    "de": "er ist kein Kind mehr",
    "lv": "viņš vairs nav bērns",
    "level": "Sätze"
  },
  {
    "de": "was meinen Sie damit?",
    "lv": "ko jūs ar to domājat?, kā jūs to domājat?",
    "level": "Sätze"
  },
  {
    "de": "meinetwegen!",
    "lv": "man nav iebildumu!, manis pēc!",
    "level": "Sätze"
  },
  {
    "de": "meiner Meinung nach",
    "lv": "pēc manām domām",
    "level": "Sätze"
  },
  {
    "de": "die öffentliche Meinung",
    "lv": "sabiedrības viedoklis",
    "level": "Sätze"
  },
  {
    "de": "die meisten Menschen",
    "lv": "vairums cilvēku",
    "level": "Sätze"
  },
  {
    "de": "am meisten",
    "lv": "visvairāk",
    "level": "Sätze"
  },
  {
    "de": "ein schwieriges Problem meistern",
    "lv": "tikt galā ar smagu problēmu",
    "level": "Sätze"
  },
  {
    "de": "die Zeitungen melden",
    "lv": "laikraksti ziņo, ka...",
    "level": "Sätze"
  },
  {
    "de": "sich zum Wort melden",
    "lv": "lūgt vārdu",
    "level": "Sätze"
  },
  {
    "de": "sich etwas merken",
    "lv": "iegaumēt kaut ko",
    "level": "Sätze"
  },
  {
    "de": "die Miete zahlen",
    "lv": "maksāt īri, nomu",
    "level": "Sätze"
  },
  {
    "de": "saure Milch",
    "lv": "rūgušpiens",
    "level": "Sätze"
  },
  {
    "de": "dicke Milch",
    "lv": "rūgušpiens",
    "level": "Sätze"
  },
  {
    "de": "milder Winter",
    "lv": "mērena ziema",
    "level": "Sätze"
  },
  {
    "de": "eine Minderung der internationalen Spannungen",
    "lv": "starptautiskā saspīlējuma mazināšanās",
    "level": "Sätze"
  },
  {
    "de": "zehn Minuten nach zwölf",
    "lv": "desmit minūtes pāri divpadsmitiem",
    "level": "Sätze"
  },
  {
    "de": "fünf Minuten vor neun",
    "lv": "bez piecām minūtēm deviņi",
    "level": "Sätze"
  },
  {
    "de": "Wir gehen mit Ihnen.",
    "lv": "Mēs ejam ar jums.",
    "level": "Sätze"
  },
  {
    "de": "mit der Zeit",
    "lv": "ar laiku",
    "level": "Sätze"
  },
  {
    "de": "mit Vorsicht",
    "lv": "piesardzīgi, uzmanīgi",
    "level": "Sätze"
  },
  {
    "de": "Ich fahre mit der Eisenbahn.",
    "lv": "Es braucu ar vilcienu.",
    "level": "Sätze"
  },
  {
    "de": "mit dem Hammer",
    "lv": "ar āmuru",
    "level": "Sätze"
  },
  {
    "de": "Ich schicke den Brief mit der Post.",
    "lv": "Es sūtu vēstuli pa pastu.",
    "level": "Sätze"
  },
  {
    "de": "etwas mitgehen lassen",
    "lv": "nozagt",
    "level": "Sätze"
  },
  {
    "de": "bei jemandem Mitleid erregen",
    "lv": "radīt kādā līdzjūtību",
    "level": "Sätze"
  },
  {
    "de": "gegen Mittag",
    "lv": "ap pusdienas laiku",
    "level": "Sätze"
  },
  {
    "de": "mittels eines Kranes",
    "lv": "ar celtņa palīdzību",
    "level": "Sätze"
  },
  {
    "de": "mitten auf der Straße",
    "lv": "pašā ielas vidū",
    "level": "Sätze"
  },
  {
    "de": "in mittleren Jahren",
    "lv": "vidējos gados",
    "level": "Sätze"
  },
  {
    "de": "von mittlerer Größe",
    "lv": "vidēja auguma",
    "level": "Sätze"
  },
  {
    "de": "am Mittwoch",
    "lv": "trešdien",
    "level": "Sätze"
  },
  {
    "de": "eine neue Mode aufbringen",
    "lv": "ieviest jaunu modi",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte Sie um eine Auskunft bitten.",
    "lv": "Es gribētu no jums uzzināt.",
    "level": "Sätze"
  },
  {
    "de": "Es mag sein.",
    "lv": "Varbūt.",
    "level": "Sätze"
  },
  {
    "de": "Ich mag das nicht.",
    "lv": "Man tas nepatīk.",
    "level": "Sätze"
  },
  {
    "de": "alles Mögliche",
    "lv": "viss iespējamais",
    "level": "Sätze"
  },
  {
    "de": "sein Möglichstes tun",
    "lv": "darīt visu iespējamo",
    "level": "Sätze"
  },
  {
    "de": "einen Moment!",
    "lv": "acumirkli!",
    "level": "Sätze"
  },
  {
    "de": "Die Zeitschrift erscheint monatlich.",
    "lv": "Žurnāls iznāk katru mēnesi.",
    "level": "Sätze"
  },
  {
    "de": "am Montag",
    "lv": "pirmdien",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen!",
    "lv": "Labrīt!",
    "level": "Sätze"
  },
  {
    "de": "am Morgen",
    "lv": "no rīta",
    "level": "Sätze"
  },
  {
    "de": "jemanden motivieren",
    "lv": "ierosināt, pamatot kādu",
    "level": "Sätze"
  },
  {
    "de": "müde werden",
    "lv": "nogurt",
    "level": "Sätze"
  },
  {
    "de": "müde machen",
    "lv": "nogurdināt",
    "level": "Sätze"
  },
  {
    "de": "es ist verlorene Mühe",
    "lv": "veltas pūles",
    "level": "Sätze"
  },
  {
    "de": "mit Mühe und Not",
    "lv": "tik tikko",
    "level": "Sätze"
  },
  {
    "de": "einen großen Mund haben",
    "lv": "lielīties, plātīties",
    "level": "Sätze"
  },
  {
    "de": "nicht auf den Mund gefallen sein",
    "lv": "atjautīgs",
    "level": "Sätze"
  },
  {
    "de": "den Mund halten",
    "lv": "turēt muti",
    "level": "Sätze"
  },
  {
    "de": "die Straße mündet auf einen Platz",
    "lv": "iela iziet uz laukumu, iela izbeidzas laukumā",
    "level": "Sätze"
  },
  {
    "de": "er muss fort",
    "lv": "viņam jādodas prom",
    "level": "Sätze"
  },
  {
    "de": "man muss",
    "lv": "vajag, nepieciešams",
    "level": "Sätze"
  },
  {
    "de": "nach Tisch",
    "lv": "pēc pusdienām",
    "level": "Sätze"
  },
  {
    "de": "nach Rückkehr",
    "lv": "pēc atgriešanās",
    "level": "Sätze"
  },
  {
    "de": "nach Berlin fahren",
    "lv": "braukt uz Berlīni",
    "level": "Sätze"
  },
  {
    "de": "jemanden nur dem Namen nach kennen",
    "lv": "pazīt kādu tikai pēc vārda",
    "level": "Sätze"
  },
  {
    "de": "der Reihe nach",
    "lv": "pēc kārtas",
    "level": "Sätze"
  },
  {
    "de": "nach wie vor",
    "lv": "joprojām",
    "level": "Sätze"
  },
  {
    "de": "nach und nach",
    "lv": "pamazām, pakāpeniski",
    "level": "Sätze"
  },
  {
    "de": "nachdem ich das gehört hatte",
    "lv": "pēc tam kad es to dzirdēju",
    "level": "Sätze"
  },
  {
    "de": "je nachdem",
    "lv": "atkarībā no tā, kā to ņem",
    "level": "Sätze"
  },
  {
    "de": "mit Nachdruck",
    "lv": "sparīgi",
    "level": "Sätze"
  },
  {
    "de": "die Uhr geht nach",
    "lv": "pulkstenis atpaliek",
    "level": "Sätze"
  },
  {
    "de": "der literarische Nachlass eines Dichters",
    "lv": "dzejnieka literārais mantojums",
    "level": "Sätze"
  },
  {
    "de": "spät am Nachmittag",
    "lv": "pievakarē",
    "level": "Sätze"
  },
  {
    "de": "um fünf Uhr nachmittags",
    "lv": "pulksten piecos pēc pusdienas",
    "level": "Sätze"
  },
  {
    "de": "mit jemandem Nachsicht haben",
    "lv": "būt iecietīgam pret kādu",
    "level": "Sätze"
  },
  {
    "de": "am nächsten Tage",
    "lv": "nākamajā dienā",
    "level": "Sätze"
  },
  {
    "de": "das nächste Mal",
    "lv": "nākamreiz",
    "level": "Sätze"
  },
  {
    "de": "gute Nacht!",
    "lv": "ar labu nakti!",
    "level": "Sätze"
  },
  {
    "de": "in der Nacht",
    "lv": "naktī, pa nakti",
    "level": "Sätze"
  },
  {
    "de": "im Nachteil sein",
    "lv": "būt neizdevīgā stāvoklī",
    "level": "Sätze"
  },
  {
    "de": "in der Nähe",
    "lv": "tuvumā",
    "level": "Sätze"
  },
  {
    "de": "im Namen unserer Gruppe",
    "lv": "mūsu grupas vārdā",
    "level": "Sätze"
  },
  {
    "de": "eine gute Nase haben",
    "lv": "būt ar labu nojautu",
    "level": "Sätze"
  },
  {
    "de": "auf die Nase fallen",
    "lv": "ciest neveiksmi",
    "level": "Sätze"
  },
  {
    "de": "seine Nase in etwas stecken",
    "lv": "iejaukties, bāzt savu degunu",
    "level": "Sätze"
  },
  {
    "de": "nass machen",
    "lv": "saslapināt, samitrināt",
    "level": "Sätze"
  },
  {
    "de": "nass werden",
    "lv": "samirkt, izmirkt",
    "level": "Sätze"
  },
  {
    "de": "neben uns",
    "lv": "blakus mums",
    "level": "Sätze"
  },
  {
    "de": "das Haus befindet sich neben der Brücke",
    "lv": "māja atrodas pie tilta",
    "level": "Sätze"
  },
  {
    "de": "nebenbei gesagt",
    "lv": "blakus minot",
    "level": "Sätze"
  },
  {
    "de": "das ist eine Nebensache",
    "lv": "tas ir mazsvarīgi",
    "level": "Sätze"
  },
  {
    "de": "diese Tabletten haben keine Nebenwirkungen",
    "lv": "šīm tabletēm nav nekādas blaknes",
    "level": "Sätze"
  },
  {
    "de": "jemandem die Hoffnung nehmen",
    "lv": "laupīt kādam cerības",
    "level": "Sätze"
  },
  {
    "de": "ein Taxi nehmen",
    "lv": "braukt ar taksometru",
    "level": "Sätze"
  },
  {
    "de": "nehmen Sie Platz!",
    "lv": "sēdieties!",
    "level": "Sätze"
  },
  {
    "de": "sich in Acht nehmen",
    "lv": "piesargāties",
    "level": "Sätze"
  },
  {
    "de": "etwas in Acht nehmen",
    "lv": "ievērot",
    "level": "Sätze"
  },
  {
    "de": "ein Ende nehmen",
    "lv": "beigties",
    "level": "Sätze"
  },
  {
    "de": "Nein sagen",
    "lv": "atteikt",
    "level": "Sätze"
  },
  {
    "de": "einen gemeinsamen Nenner finden",
    "lv": "atrast kopsaucēju, pamatu kopējai darbībai",
    "level": "Sätze"
  },
  {
    "de": "jemandem auf die Nerven gehen",
    "lv": "krist kādam uz nerviem",
    "level": "Sätze"
  },
  {
    "de": "aufs Neue",
    "lv": "par jaunu",
    "level": "Sätze"
  },
  {
    "de": "von Neuem",
    "lv": "no jauna",
    "level": "Sätze"
  },
  {
    "de": "letzte Neuheit!",
    "lv": "pēdējais jaunums!",
    "level": "Sätze"
  },
  {
    "de": "ich komme nicht mit",
    "lv": "es neiešu līdzi",
    "level": "Sätze"
  },
  {
    "de": "nicht groß",
    "lv": "neliels",
    "level": "Sätze"
  },
  {
    "de": "nicht wahr?",
    "lv": "vai ne?",
    "level": "Sätze"
  },
  {
    "de": "nicht doch!",
    "lv": "Nē taču! • Nevajag!",
    "level": "Sätze"
  },
  {
    "de": "ich bin Nichtraucher",
    "lv": "es nesmēķēju",
    "level": "Sätze"
  },
  {
    "de": "nichts Neues",
    "lv": "nekā jauna",
    "level": "Sätze"
  },
  {
    "de": "das macht nichts!",
    "lv": "tas nekas!",
    "level": "Sätze"
  },
  {
    "de": "das schadet nichts!",
    "lv": "tas nekas!",
    "level": "Sätze"
  },
  {
    "de": "nie und nimmer",
    "lv": "nemūžam, nekad",
    "level": "Sätze"
  },
  {
    "de": "eine ökologische Nische",
    "lv": "ekoloģiskā niša",
    "level": "Sätze"
  },
  {
    "de": "immer noch",
    "lv": "vēl aizvien",
    "level": "Sätze"
  },
  {
    "de": "noch einmal",
    "lv": "vēlreiz",
    "level": "Sätze"
  },
  {
    "de": "noch einmal so groß",
    "lv": "divtik liels",
    "level": "Sätze"
  },
  {
    "de": "weder du noch ich",
    "lv": "ne tu, ne es",
    "level": "Sätze"
  },
  {
    "de": "von Norden",
    "lv": "no ziemeļiem",
    "level": "Sätze"
  },
  {
    "de": "nach Norden",
    "lv": "uz ziemeļiem",
    "level": "Sätze"
  },
  {
    "de": "der hohe Norden",
    "lv": "tālie ziemeļi",
    "level": "Sätze"
  },
  {
    "de": "im Notfall",
    "lv": "ārkārtējas nepieciešamības gadījumā",
    "level": "Sätze"
  },
  {
    "de": "eine Adresse notieren",
    "lv": "pierakstīt adresi",
    "level": "Sätze"
  },
  {
    "de": "es ist heute null Grad",
    "lv": "šodien ir nulle grādu",
    "level": "Sätze"
  },
  {
    "de": "in null Komma nichts",
    "lv": "acumirklī, vienā mirklī",
    "level": "Sätze"
  },
  {
    "de": "er ist eine Null",
    "lv": "viņš ir īsta nulle",
    "level": "Sätze"
  },
  {
    "de": "von nun an",
    "lv": "no šā brīža",
    "level": "Sätze"
  },
  {
    "de": "nun!",
    "lv": "nu!",
    "level": "Sätze"
  },
  {
    "de": "nun endlich!",
    "lv": "nu beidzot!",
    "level": "Sätze"
  },
  {
    "de": "wozu nützt das?",
    "lv": "kam tas noder?",
    "level": "Sätze"
  },
  {
    "de": "wozu nützt das alles?",
    "lv": "ko tas viss līdz?",
    "level": "Sätze"
  },
  {
    "de": "Nutzen ziehen aus etwas",
    "lv": "gūt labumu no kaut kā",
    "level": "Sätze"
  },
  {
    "de": "ich möchte wissen, ob er kommt",
    "lv": "es gribētu zināt, vai viņš ieradīsies",
    "level": "Sätze"
  },
  {
    "de": "von oben",
    "lv": "no augšas",
    "level": "Sätze"
  },
  {
    "de": "die Oberhand gewinnen",
    "lv": "gūt virsroku",
    "level": "Sätze"
  },
  {
    "de": "unter jemandes Obhut stehen",
    "lv": "būt kāda aizsardzībā",
    "level": "Sätze"
  },
  {
    "de": "jemanden in seine Obhut nehmen",
    "lv": "ņemt kādu savā aizsardzībā",
    "level": "Sätze"
  },
  {
    "de": "entweder heute oder morgen",
    "lv": "vai nu šodien, vai rīt",
    "level": "Sätze"
  },
  {
    "de": "in aller Öffentlichkeit",
    "lv": "pilnīgi atklāti, publiski",
    "level": "Sätze"
  },
  {
    "de": "die Tür öffnen",
    "lv": "atvērt durvis",
    "level": "Sätze"
  },
  {
    "de": "alle ohne Ausnahme",
    "lv": "visi bez izņēmuma",
    "level": "Sätze"
  },
  {
    "de": "ohne dass er ein Wort gesagt hätte",
    "lv": "ne vārda neteicis",
    "level": "Sätze"
  },
  {
    "de": "er hat gute Ohren",
    "lv": "viņam ir laba dzirde",
    "level": "Sätze"
  },
  {
    "de": "lange Ohren bekommen",
    "lv": "ziņkārīgi klausīties",
    "level": "Sätze"
  },
  {
    "de": "ganz Ohr sein",
    "lv": "būt ļoti uzmanīgam",
    "level": "Sätze"
  },
  {
    "de": "auf den Ohren sitzen",
    "lv": "nedzirdēt, neklausīties",
    "level": "Sätze"
  },
  {
    "de": "seinen Ohren nicht trauen",
    "lv": "neticēt savām ausīm",
    "level": "Sätze"
  },
  {
    "de": "jemanden übers Ohr hauen",
    "lv": "piekrāpt kādu",
    "level": "Sätze"
  },
  {
    "de": "in Öl malen",
    "lv": "gleznot ar eļļas krāsām",
    "level": "Sätze"
  },
  {
    "de": "die Olympischen Spiele",
    "lv": "olimpiskās spēles",
    "level": "Sätze"
  },
  {
    "de": "das olympische Feuer",
    "lv": "olimpiskā uguns",
    "level": "Sätze"
  },
  {
    "de": "sich opfern",
    "lv": "upurēties, ziedoties",
    "level": "Sätze"
  },
  {
    "de": "an Ort und Stelle sein",
    "lv": "būt uz vietas",
    "level": "Sätze"
  },
  {
    "de": "der Ferne Osten",
    "lv": "Tālie Austrumi",
    "level": "Sätze"
  },
  {
    "de": "der Nahe Osten",
    "lv": "Tuvie Austrumi",
    "level": "Sätze"
  },
  {
    "de": "der Mittlere Osten",
    "lv": "Vidējie Austrumi",
    "level": "Sätze"
  },
  {
    "de": "der Atlantische Ozean",
    "lv": "Atlantijas okeāns",
    "level": "Sätze"
  },
  {
    "de": "der Stille Ozean",
    "lv": "Klusais okeāns",
    "level": "Sätze"
  },
  {
    "de": "ein paar Tage",
    "lv": "pāris dienu",
    "level": "Sätze"
  },
  {
    "de": "mit ein paar Worten",
    "lv": "dažos vārdos",
    "level": "Sätze"
  },
  {
    "de": "ein Paar Handschuhe",
    "lv": "viens pāris cimdu",
    "level": "Sätze"
  },
  {
    "de": "den Koffer packen",
    "lv": "sakravāt koferi",
    "level": "Sätze"
  },
  {
    "de": "eine warme Packung machen",
    "lv": "uzlikt sildošu kompresi",
    "level": "Sätze"
  },
  {
    "de": "in Panik geraten",
    "lv": "nonākt panikā",
    "level": "Sätze"
  },
  {
    "de": "parken verboten!",
    "lv": "automašīnām stāvēt aizliegts!",
    "level": "Sätze"
  },
  {
    "de": "nicht parken!",
    "lv": "automašīnām stāvēt aizliegts!",
    "level": "Sätze"
  },
  {
    "de": "die Mitglieder des Parlaments",
    "lv": "parlamenta locekļi",
    "level": "Sätze"
  },
  {
    "de": "eine Partie Schach",
    "lv": "šaha partija",
    "level": "Sätze"
  },
  {
    "de": "die passende Größe",
    "lv": "atbilstošais apģērba izmērs",
    "level": "Sätze"
  },
  {
    "de": "er hat Pech",
    "lv": "viņam neveicas",
    "level": "Sätze"
  },
  {
    "de": "per Post",
    "lv": "pa pastu",
    "level": "Sätze"
  },
  {
    "de": "den Tisch für drei Personen decken",
    "lv": "klāt galdu trim personām",
    "level": "Sätze"
  },
  {
    "de": "pfänden lassen",
    "lv": "apķīlāt",
    "level": "Sätze"
  },
  {
    "de": "der Pfeiler einer Brücke",
    "lv": "tilta balsts",
    "level": "Sätze"
  },
  {
    "de": "zu Pferde",
    "lv": "jāšus",
    "level": "Sätze"
  },
  {
    "de": "er pflegt so zu handeln",
    "lv": "viņš tā mēdz rīkoties",
    "level": "Sätze"
  },
  {
    "de": "Beeren pflücken",
    "lv": "ogas lasīt",
    "level": "Sätze"
  },
  {
    "de": "Platz nehmen",
    "lv": "apsēsties",
    "level": "Sätze"
  },
  {
    "de": "den ersten Platz belegen",
    "lv": "iegūt pirmo vietu sportā",
    "level": "Sätze"
  },
  {
    "de": "den Kühlschrank plündern",
    "lv": "iztukšot ledusskapi",
    "level": "Sätze"
  },
  {
    "de": "mit der Post",
    "lv": "pa pastu",
    "level": "Sätze"
  },
  {
    "de": "um keinen Preis",
    "lv": "neparko, nekādā ziņā",
    "level": "Sätze"
  },
  {
    "de": "den ersten Preis erhalten",
    "lv": "saņemt pirmo godalgu",
    "level": "Sätze"
  },
  {
    "de": "eine gute Presse haben",
    "lv": "gūt labas atsauksmes laikrakstos",
    "level": "Sätze"
  },
  {
    "de": "prima Qualität",
    "lv": "augstākā labuma",
    "level": "Sätze"
  },
  {
    "de": "das ist ja prima!",
    "lv": "lieliski!",
    "level": "Sätze"
  },
  {
    "de": "drei Euro pro Stück",
    "lv": "trīs eiras gabalā",
    "level": "Sätze"
  },
  {
    "de": "zehn Euro pro Person",
    "lv": "desmit eiras no katra cilvēka",
    "level": "Sätze"
  },
  {
    "de": "etwas ins Protokoll aufnehmen",
    "lv": "ierakstīt protokolā",
    "level": "Sätze"
  },
  {
    "de": "Punkt zwölf",
    "lv": "tieši divpadsmit",
    "level": "Sätze"
  },
  {
    "de": "sein berufliches Können qualifizieren",
    "lv": "paaugstināt savu kvalifikāciju",
    "level": "Sätze"
  },
  {
    "de": "kreuz und quer",
    "lv": "krustām šķērsām",
    "level": "Sätze"
  },
  {
    "de": "Trauben quetschen",
    "lv": "spiest vīnogas",
    "level": "Sätze"
  },
  {
    "de": "eine Quittung ausstellen",
    "lv": "izrakstīt kvīti",
    "level": "Sätze"
  },
  {
    "de": "in Raten zahlen",
    "lv": "maksāt pa daļām",
    "level": "Sätze"
  },
  {
    "de": "etwas in Raten erwerben",
    "lv": "iegādāties kaut ko uz nomaksu",
    "level": "Sätze"
  },
  {
    "de": "ein Rätsel lösen",
    "lv": "atminēt mīklu",
    "level": "Sätze"
  },
  {
    "de": "er hat einen Rausch",
    "lv": "viņš ir ieskurbis",
    "level": "Sätze"
  },
  {
    "de": "jemanden zur Rechenschaft ziehen",
    "lv": "saukt kādu pie atbildības",
    "level": "Sätze"
  },
  {
    "de": "Rechenschaft über etwas ablegen",
    "lv": "Dot par kaut ko norēķinu • Atskaitīties par kaut ko",
    "level": "Sätze"
  },
  {
    "de": "mit den Tatsachen rechnen",
    "lv": "rēķināties ar faktiem",
    "level": "Sätze"
  },
  {
    "de": "nach meiner Rechnung",
    "lv": "pēc mana aprēķina",
    "level": "Sätze"
  },
  {
    "de": "Rechnung tragen",
    "lv": "Rēķināties ar kaut ko • Ņemt vērā kaut ko",
    "level": "Sätze"
  },
  {
    "de": "eine Rechnung bezahlen",
    "lv": "samaksāt rēķinu",
    "level": "Sätze"
  },
  {
    "de": "eine Rechnung überweisen",
    "lv": "pārskaitīt naudu pēc rēķina",
    "level": "Sätze"
  },
  {
    "de": "Das geht auf meine Rechnung.",
    "lv": "Es to samaksāšu.",
    "level": "Sätze"
  },
  {
    "de": "rechter Hand",
    "lv": "pa labi",
    "level": "Sätze"
  },
  {
    "de": "die rechte Seite",
    "lv": "labā puse",
    "level": "Sätze"
  },
  {
    "de": "rechter Winkel",
    "lv": "taisns leņķis",
    "level": "Sätze"
  },
  {
    "de": "Er hat Recht.",
    "lv": "Viņam ir taisnība.",
    "level": "Sätze"
  },
  {
    "de": "recht gut",
    "lv": "ļoti labi",
    "level": "Sätze"
  },
  {
    "de": "Das ist recht.",
    "lv": "Tas ir pareizi.",
    "level": "Sätze"
  },
  {
    "de": "mit vollem Recht",
    "lv": "ar pilnām tiesībām",
    "level": "Sätze"
  },
  {
    "de": "von rechts",
    "lv": "no labās puses",
    "level": "Sätze"
  },
  {
    "de": "nach rechts",
    "lv": "pa labi",
    "level": "Sätze"
  },
  {
    "de": "Wovon ist die Rede?",
    "lv": "Par ko ir runa?",
    "level": "Sätze"
  },
  {
    "de": "eine Rede halten",
    "lv": "Teikt runu • Uzstāties ar runu",
    "level": "Sätze"
  },
  {
    "de": "Davon kann keine Rede sein.",
    "lv": "Par to nevar būt ne runas.",
    "level": "Sätze"
  },
  {
    "de": "Etwas ist nicht der Rede wert.",
    "lv": "Kaut kas ir nesvarīgs, nenozīmīgs.",
    "level": "Sätze"
  },
  {
    "de": "jemanden zur Rede stellen",
    "lv": "pieprasīt no kāda paskaidrojumu",
    "level": "Sätze"
  },
  {
    "de": "leere Redensarten",
    "lv": "tukšas frāzes",
    "level": "Sätze"
  },
  {
    "de": "reges Treiben",
    "lv": "rosība",
    "level": "Sätze"
  },
  {
    "de": "reger Verkehr",
    "lv": "dzīva satiksme",
    "level": "Sätze"
  },
  {
    "de": "in der Regel",
    "lv": "Kā parasts • Parasti • Vienmēr",
    "level": "Sätze"
  },
  {
    "de": "es regnet",
    "lv": "līst",
    "level": "Sätze"
  },
  {
    "de": "reich an etwas",
    "lv": "bagāts ar kaut ko",
    "level": "Sätze"
  },
  {
    "de": "es hat über Nacht gereift",
    "lv": "naktī ir bijusi sarma",
    "level": "Sätze"
  },
  {
    "de": "außer der Reihe",
    "lv": "bez rindas",
    "level": "Sätze"
  },
  {
    "de": "rein gar nichts",
    "lv": "gluži nekas",
    "level": "Sätze"
  },
  {
    "de": "auf der Reise",
    "lv": "Ceļojumā • Ceļā",
    "level": "Sätze"
  },
  {
    "de": "glückliche Reise!",
    "lv": "laimīgu ceļu!",
    "level": "Sätze"
  },
  {
    "de": "Mir reißt die Geduld.",
    "lv": "Manai pacietībai ir beigas.",
    "level": "Sätze"
  },
  {
    "de": "einen Rekord aufstellen",
    "lv": "uzstādīt rekordu",
    "level": "Sätze"
  },
  {
    "de": "einen Rekord brechen",
    "lv": "pārspēt rekordu",
    "level": "Sätze"
  },
  {
    "de": "Remis machen",
    "lv": "nospēlēt neizšķirti",
    "level": "Sätze"
  },
  {
    "de": "eine Resolution fassen",
    "lv": "pieņemt rezolūciju",
    "level": "Sätze"
  },
  {
    "de": "sich retten",
    "lv": "glābties",
    "level": "Sätze"
  },
  {
    "de": "einen Brief an jemanden richten",
    "lv": "sūtīt, adresēt kādam vēstuli",
    "level": "Sätze"
  },
  {
    "de": "sich nach etwas richten",
    "lv": "vadīties no, pēc kaut kā",
    "level": "Sätze"
  },
  {
    "de": "sich auf jemanden richten",
    "lv": "vērsties uz kādu",
    "level": "Sätze"
  },
  {
    "de": "sich gegen jemanden richten",
    "lv": "vērsties pret kādu",
    "level": "Sätze"
  },
  {
    "de": "alle Augen richten sich auf ihn",
    "lv": "visu skatieni pievēršas viņam",
    "level": "Sätze"
  },
  {
    "de": "ein Risiko eingehen",
    "lv": "riskēt",
    "level": "Sätze"
  },
  {
    "de": "das spielt keine Rolle",
    "lv": "tam nav nekādas nozīmes",
    "level": "Sätze"
  },
  {
    "de": "mit einem Ruck",
    "lv": "vienā rāvienā",
    "level": "Sätze"
  },
  {
    "de": "mit Rücksicht auf seine Verdienste",
    "lv": "ievērojot viņa nopelnus",
    "level": "Sätze"
  },
  {
    "de": "rückwärts gehen",
    "lv": "kāpties atpakaļ, iet atmuguriski",
    "level": "Sätze"
  },
  {
    "de": "das Ruder führen",
    "lv": "stāvēt pie stūres, būt par stūrmani",
    "level": "Sätze"
  },
  {
    "de": "ein Gelehrter von Ruf",
    "lv": "slavens zinātnieks",
    "level": "Sätze"
  },
  {
    "de": "in aller Ruhe",
    "lv": "mierīgi",
    "level": "Sätze"
  },
  {
    "de": "sich nicht aus der Ruhe bringen lassen",
    "lv": "neļauties provokācijai, saglabāt mieru",
    "level": "Sätze"
  },
  {
    "de": "jemanden in Ruhe lassen",
    "lv": "likt kādu mierā",
    "level": "Sätze"
  },
  {
    "de": "sich mit etwas rühmen",
    "lv": "lielīties, dižoties ar kaut ko",
    "level": "Sätze"
  },
  {
    "de": "sich rühren",
    "lv": "Kustēties • Rosīties",
    "level": "Sätze"
  },
  {
    "de": "rund gerechnet",
    "lv": "rēķinot apaļos skaitļos",
    "level": "Sätze"
  },
  {
    "de": "sich rüsten",
    "lv": "Bruņoties • Sagatavoties",
    "level": "Sätze"
  },
  {
    "de": "die Sachen des Reisenden",
    "lv": "ceļotāja bagāža",
    "level": "Sätze"
  },
  {
    "de": "man sagt, dass...",
    "lv": "saka, ka...",
    "level": "Sätze"
  },
  {
    "de": "sich sammeln",
    "lv": "Sapulcēties • Sakopot domas",
    "level": "Sätze"
  },
  {
    "de": "mit Sanktionen drohen",
    "lv": "piedraudēt ar sankcijām",
    "level": "Sätze"
  },
  {
    "de": "ich habe es satt",
    "lv": "man [tas] ir apnicis",
    "level": "Sätze"
  },
  {
    "de": "Schach spielen",
    "lv": "spēlēt šahu",
    "level": "Sätze"
  },
  {
    "de": "das ist schade!",
    "lv": "cik žēl!",
    "level": "Sätze"
  },
  {
    "de": "es ist schade um sie",
    "lv": "žēl viņas",
    "level": "Sätze"
  },
  {
    "de": "wir werden es schaffen",
    "lv": "mēs to paveiksim",
    "level": "Sätze"
  },
  {
    "de": "einen Apfel schälen",
    "lv": "mizot ābolu",
    "level": "Sätze"
  },
  {
    "de": "sich schälen",
    "lv": "Lobīties",
    "level": "Sätze"
  },
  {
    "de": "schalten und walten",
    "lv": "saimniekot",
    "level": "Sätze"
  },
  {
    "de": "eine Schar Vögel",
    "lv": "putnu bars",
    "level": "Sätze"
  },
  {
    "de": "jemandem wie ein Schatten folgen",
    "lv": "kādam neatlaidīgi sekot",
    "level": "Sätze"
  },
  {
    "de": "über seinen Schatten springen",
    "lv": "pārvarēt sevi",
    "level": "Sätze"
  },
  {
    "de": "in jemandes Schatten stehen",
    "lv": "tikt ievērotam mazāk par kādu citu",
    "level": "Sätze"
  },
  {
    "de": "sich glücklich schätzen",
    "lv": "uzskatīt sevi par laimīgu",
    "level": "Sätze"
  },
  {
    "de": "es schaudert mich",
    "lv": "mani pārņem šausmas",
    "level": "Sätze"
  },
  {
    "de": "um sich schauen",
    "lv": "raudzīties apkārt",
    "level": "Sätze"
  },
  {
    "de": "nach jemandem schauen",
    "lv": "Meklēt kādu [ar acīm] • Pieskatīt kādu",
    "level": "Sätze"
  },
  {
    "de": "das Bier schäumt",
    "lv": "alus puto",
    "level": "Sätze"
  },
  {
    "de": "die Zitrone in Scheiben schneiden",
    "lv": "sagriezt citronu šķēlītēs",
    "level": "Sätze"
  },
  {
    "de": "sich scheiden lassen",
    "lv": "šķirties",
    "level": "Sätze"
  },
  {
    "de": "zum Schein",
    "lv": "Formas pēc",
    "level": "Sätze"
  },
  {
    "de": "es scheint mir",
    "lv": "man šķiet",
    "level": "Sätze"
  },
  {
    "de": "einen Scheitel ziehen",
    "lv": "[iz]šķirt celiņu",
    "level": "Sätze"
  },
  {
    "de": "er trägt den Scheitel rechts",
    "lv": "viņš šķir celiņu labajā pusē",
    "level": "Sätze"
  },
  {
    "de": "Aufmerksamkeit schenken",
    "lv": "veltīt uzmanību",
    "level": "Sätze"
  },
  {
    "de": "sich um etwas scheren",
    "lv": "rūpēties, raizēties par kaut ko",
    "level": "Sätze"
  },
  {
    "de": "pro Schicht",
    "lv": "maiņā",
    "level": "Sätze"
  },
  {
    "de": "etwas auf die lange Bank schieben",
    "lv": "novilcināt",
    "level": "Sätze"
  },
  {
    "de": "Sch. laufen",
    "lv": "slidot",
    "level": "Sätze"
  },
  {
    "de": "einen Knoten schlingen",
    "lv": "sasiet mezglu",
    "level": "Sätze"
  },
  {
    "de": "den Schluckauf haben",
    "lv": "žagoties",
    "level": "Sätze"
  },
  {
    "de": "in den Mantel schlüpfen",
    "lv": "[ātri] uzvilkt mēteli",
    "level": "Sätze"
  },
  {
    "de": "Schlüsse ziehen",
    "lv": "secināt",
    "level": "Sätze"
  },
  {
    "de": "der Schnee schmilzt",
    "lv": "sniegs kūst",
    "level": "Sätze"
  },
  {
    "de": "schöne Nachricht",
    "lv": "bēdīga ziņa",
    "level": "Sätze"
  },
  {
    "de": "sich schneiden",
    "lv": "iegriezt sev pirkstā",
    "level": "Sätze"
  },
  {
    "de": "es schneit",
    "lv": "snieg",
    "level": "Sätze"
  },
  {
    "de": "sich einen Schnupfen holen",
    "lv": "dabūt iesnas",
    "level": "Sätze"
  },
  {
    "de": "schon gut!",
    "lv": "ir jau labi!",
    "level": "Sätze"
  },
  {
    "de": "das ist schön!",
    "lv": "tas ir jauki!",
    "level": "Sätze"
  },
  {
    "de": "danke schön!",
    "lv": "pateicos!",
    "level": "Sätze"
  },
  {
    "de": "bitte schön!",
    "lv": "lūdzu!",
    "level": "Sätze"
  },
  {
    "de": "Luft schöpfen",
    "lv": "ieelpot svaigu gaisu",
    "level": "Sätze"
  },
  {
    "de": "Mut schöpfen",
    "lv": "sadūšoties",
    "level": "Sätze"
  },
  {
    "de": "schöpferische Arbeit",
    "lv": "radošs darbs",
    "level": "Sätze"
  },
  {
    "de": "im Schoß der Erde",
    "lv": "zemes klēpī",
    "level": "Sätze"
  },
  {
    "de": "auf dem Schoß sitzen",
    "lv": "sēdēt klēpī",
    "level": "Sätze"
  },
  {
    "de": "auf den Schoß nehmen",
    "lv": "[pa]ņemt klēpī",
    "level": "Sätze"
  },
  {
    "de": "zu Werke schreiten",
    "lv": "ķerties pie darba",
    "level": "Sätze"
  },
  {
    "de": "gesammelte Schriften",
    "lv": "kopoti raksti",
    "level": "Sätze"
  },
  {
    "de": "im Schritt",
    "lv": "soļiem",
    "level": "Sätze"
  },
  {
    "de": "Schuld haben",
    "lv": "Būt vainīgam",
    "level": "Sätze"
  },
  {
    "de": "schuld sein",
    "lv": "Būt vainīgam",
    "level": "Sätze"
  },
  {
    "de": "schuldig sein",
    "lv": "būt parādā",
    "level": "Sätze"
  },
  {
    "de": "Was bin ich schuldig?",
    "lv": "cik es esmu parādā?, cik man jāmaksā?",
    "level": "Sätze"
  },
  {
    "de": "vor dem Gebrauch schütteln!",
    "lv": "Pirms lietošanas saskalot!",
    "level": "Sätze"
  },
  {
    "de": "es schüttet",
    "lv": "līst straumēm",
    "level": "Sätze"
  },
  {
    "de": "er hat Schwäche für Musik",
    "lv": "mūzika ir viņa vājība",
    "level": "Sätze"
  },
  {
    "de": "schwanger sein",
    "lv": "būt grūtniecības stāvoklī",
    "level": "Sätze"
  },
  {
    "de": "eine schwangere Frau",
    "lv": "grūtniece",
    "level": "Sätze"
  },
  {
    "de": "in einer Traumwelt schweben",
    "lv": "kavēties sapņu pasaulē",
    "level": "Sätze"
  },
  {
    "de": "es fällt mir schwer",
    "lv": "man ir grūti",
    "level": "Sätze"
  },
  {
    "de": "ein schwieriger Mensch",
    "lv": "smaga rakstura cilvēks",
    "level": "Sätze"
  },
  {
    "de": "jemandem Schwierigkeiten machen",
    "lv": "kādam sagādāt grūtības",
    "level": "Sätze"
  },
  {
    "de": "mir schwindelt",
    "lv": "man reibst",
    "level": "Sätze"
  },
  {
    "de": "Sehen Sie mal!",
    "lv": "paraugieties!",
    "level": "Sätze"
  },
  {
    "de": "durch ein Fernglas sehen",
    "lv": "skatīties ar tālskati",
    "level": "Sätze"
  },
  {
    "de": "sich sehen lassen",
    "lv": "parādīties, ierasties",
    "level": "Sätze"
  },
  {
    "de": "ich möchte mir die Sehenswürdigkeiten der Stadt ansehen",
    "lv": "es gribētu apskatīt pilsētas ievērojamākās vietas",
    "level": "Sätze"
  },
  {
    "de": "wie sehr auch...",
    "lv": "cik ļoti arī...",
    "level": "Sätze"
  },
  {
    "de": "zu sehr",
    "lv": "pārāk, par daudz",
    "level": "Sätze"
  },
  {
    "de": "das kann sein",
    "lv": "Iespējams • Tas var būt",
    "level": "Sätze"
  },
  {
    "de": "er ist zu Hause",
    "lv": "viņš ir mājās",
    "level": "Sätze"
  },
  {
    "de": "seit wann?",
    "lv": "No kura laika?",
    "level": "Sätze"
  },
  {
    "de": "seit gestern",
    "lv": "kopš vakardienas",
    "level": "Sätze"
  },
  {
    "de": "seit kurzem",
    "lv": "kopš neilga laika",
    "level": "Sätze"
  },
  {
    "de": "seit er hier ist",
    "lv": "kopš viņš ir šeit",
    "level": "Sätze"
  },
  {
    "de": "Seite an Seite",
    "lv": "plecu pie pleca",
    "level": "Sätze"
  },
  {
    "de": "nicht selten",
    "lv": "Nereti • Bieži vien",
    "level": "Sätze"
  },
  {
    "de": "die Preise sind gesenkt worden",
    "lv": "cenas pazeminātas",
    "level": "Sätze"
  },
  {
    "de": "die Stimme senken",
    "lv": "pazemināt balsi",
    "level": "Sätze"
  },
  {
    "de": "etwas in Betrieb setzen",
    "lv": "ieslēgt, iedarbināt",
    "level": "Sätze"
  },
  {
    "de": "an und für sich",
    "lv": "pats par sevi",
    "level": "Sätze"
  },
  {
    "de": "das Fass sickert",
    "lv": "muca tek",
    "level": "Sätze"
  },
  {
    "de": "sie kommt",
    "lv": "viņa nāk",
    "level": "Sätze"
  },
  {
    "de": "wir sehen sie",
    "lv": "mēs viņu redzam",
    "level": "Sätze"
  },
  {
    "de": "ich habe es ihnen gesagt",
    "lv": "es to viņiem sacīju",
    "level": "Sätze"
  },
  {
    "de": "ich schreibe Ihnen erst heute",
    "lv": "es rakstu Jums tikai šodien",
    "level": "Sätze"
  },
  {
    "de": "den Sieg davontragen",
    "lv": "izcīnīt uzvaru",
    "level": "Sätze"
  },
  {
    "de": "die Sonne sank",
    "lv": "saule norietēja",
    "level": "Sätze"
  },
  {
    "de": "für etwas Sinn haben",
    "lv": "izprast kaut ko",
    "level": "Sätze"
  },
  {
    "de": "nicht bei Sinnen sein",
    "lv": "nespēt sakarīgi domāt un rīkoties",
    "level": "Sätze"
  },
  {
    "de": "sich etwas aus dem Sinn schlagen",
    "lv": "vairs nedomāt",
    "level": "Sätze"
  },
  {
    "de": "so ein",
    "lv": "tāds",
    "level": "Sätze"
  },
  {
    "de": "so dass",
    "lv": "tā kā",
    "level": "Sätze"
  },
  {
    "de": "Söldner anwerben",
    "lv": "vervēt, līgt algotņus",
    "level": "Sätze"
  },
  {
    "de": "ich soll zum Bahnhof fahren",
    "lv": "man jābrauc uz staciju",
    "level": "Sätze"
  },
  {
    "de": "er soll gestern angekommen sein",
    "lv": "viņam bijis jāatbrauc vakar",
    "level": "Sätze"
  },
  {
    "de": "du hättest es sagen sollen",
    "lv": "tev tas būtu bijis jāpasaka",
    "level": "Sätze"
  },
  {
    "de": "was soll ich tun?",
    "lv": "ko lai es daru?",
    "level": "Sätze"
  },
  {
    "de": "wenn er kommen sollte",
    "lv": "ja viņš atnāk...",
    "level": "Sätze"
  },
  {
    "de": "im Sommer",
    "lv": "vasarā",
    "level": "Sätze"
  },
  {
    "de": "ein verregneter Sommer",
    "lv": "lietaina vasara",
    "level": "Sätze"
  },
  {
    "de": "nicht ich, sondern er",
    "lv": "nevis es, bet viņš",
    "level": "Sätze"
  },
  {
    "de": "nicht nur..., sondern auch...",
    "lv": "ne vien..., bet arī...",
    "level": "Sätze"
  },
  {
    "de": "sonst noch etwas?",
    "lv": "vēl kaut kas?",
    "level": "Sätze"
  },
  {
    "de": "sonst nichts",
    "lv": "vairāk neko",
    "level": "Sätze"
  },
  {
    "de": "wie sonst",
    "lv": "kā parasts",
    "level": "Sätze"
  },
  {
    "de": "mehr als sonst",
    "lv": "vairāk nekā parasti",
    "level": "Sätze"
  },
  {
    "de": "doppelt so viel",
    "lv": "divreiz tik daudz",
    "level": "Sätze"
  },
  {
    "de": "so viel ich weiß",
    "lv": "cik es zinu",
    "level": "Sätze"
  },
  {
    "de": "soweit mir bekannt ist",
    "lv": "cik man zināms",
    "level": "Sätze"
  },
  {
    "de": "Zeit sparen",
    "lv": "taupīt laiku",
    "level": "Sätze"
  },
  {
    "de": "spärliche Beleuchtung",
    "lv": "vājš apgaismojums",
    "level": "Sätze"
  },
  {
    "de": "Spaß beiseite!",
    "lv": "bez jokiem!, jokus pie malas!",
    "level": "Sätze"
  },
  {
    "de": "wie spät ist es?",
    "lv": "cik pulkstenis?",
    "level": "Sätze"
  },
  {
    "de": "Durchfahrt gesperrt!",
    "lv": "cauri braukt aizliegts!",
    "level": "Sätze"
  },
  {
    "de": "etwas aufs Spiel setzen",
    "lv": "riskēt ar kaut ko",
    "level": "Sätze"
  },
  {
    "de": "Geige spielen",
    "lv": "spēlēt vijoli",
    "level": "Sätze"
  },
  {
    "de": "eine Rolle spielen",
    "lv": "tēlot lomu",
    "level": "Sätze"
  },
  {
    "de": "an der Spitze",
    "lv": "priekšgalā",
    "level": "Sätze"
  },
  {
    "de": "die Ohren spitzen",
    "lv": "ausīties",
    "level": "Sätze"
  },
  {
    "de": "Sport treiben",
    "lv": "nodarboties ar sportu",
    "level": "Sätze"
  },
  {
    "de": "in deutscher Sprache",
    "lv": "vācu valodā",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie deutsch?",
    "lv": "vai jūs runājat vāciski?",
    "level": "Sätze"
  },
  {
    "de": "ich spreche nicht deutsch",
    "lv": "es nerunāju vāciski",
    "level": "Sätze"
  },
  {
    "de": "du sprichst ein schlechtes Deutsch",
    "lv": "tu slikti runā vāciski",
    "level": "Sätze"
  },
  {
    "de": "eine Spritze geben",
    "lv": "Izdarīt iešļircinājumu",
    "level": "Sätze"
  },
  {
    "de": "sie stammt aus Salzburg",
    "lv": "viņa ir dzimusi Zalcburgā",
    "level": "Sätze"
  },
  {
    "de": "Stand des Wassers",
    "lv": "ūdens līmeņa augstums",
    "level": "Sätze"
  },
  {
    "de": "eine zwanzig Mann starke Abteilung",
    "lv": "divdesmit vīru liela nodaļa",
    "level": "Sätze"
  },
  {
    "de": "das Buch ist vierzig Bogen stark",
    "lv": "grāmata ir četrdesmit loksnes bieza",
    "level": "Sätze"
  },
  {
    "de": "starrer Blick",
    "lv": "stings skatiens",
    "level": "Sätze"
  },
  {
    "de": "starten lassen",
    "lv": "ļaut startēt",
    "level": "Sätze"
  },
  {
    "de": "statt zu...",
    "lv": "lai gan...",
    "level": "Sätze"
  },
  {
    "de": "die Vorstellung findet am Sonntag statt",
    "lv": "izrāde būs svētdien",
    "level": "Sätze"
  },
  {
    "de": "im Stau stecken",
    "lv": "iekļūt sastrēgumā",
    "level": "Sätze"
  },
  {
    "de": "Wie steht’s?",
    "lv": "kā klājas?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Hut steht ihr gut.",
    "lv": "šī cepure viņai labi piestāv",
    "level": "Sätze"
  },
  {
    "de": "jemandem Steine in den Weg legen",
    "lv": "kādam likt šķēršļus ceļā",
    "level": "Sätze"
  },
  {
    "de": "bei jemandem einen Stein im Brett haben",
    "lv": "kādam patikt",
    "level": "Sätze"
  },
  {
    "de": "eine Frage stellen",
    "lv": "izvirzīt jautājumu, jautāt",
    "level": "Sätze"
  },
  {
    "de": "Stellung zu einer Frage nehmen",
    "lv": "ieņemt kādā jautājumā zināmu nostāju",
    "level": "Sätze"
  },
  {
    "de": "im Stillen",
    "lv": "klusībā, slepus",
    "level": "Sätze"
  },
  {
    "de": "den Durst stillen",
    "lv": "dzēst slāpes",
    "level": "Sätze"
  },
  {
    "de": "sich der Stimme enthalten",
    "lv": "balsošanā atturēties",
    "level": "Sätze"
  },
  {
    "de": "das stimmt nicht",
    "lv": "tas nav pareizi, nav kārtībā",
    "level": "Sätze"
  },
  {
    "de": "ich wohne im zweiten Stock",
    "lv": "es dzīvoju trešajā stāvā",
    "level": "Sätze"
  },
  {
    "de": "über die Schwelle stolpern",
    "lv": "klupt pār slieksni",
    "level": "Sätze"
  },
  {
    "de": "stolz sein auf etwas",
    "lv": "lepoties ar kaut ko",
    "level": "Sätze"
  },
  {
    "de": "lassen Sie sich nicht stören!",
    "lv": "neliecieties traucēties!",
    "level": "Sätze"
  },
  {
    "de": "Strafanzeige gegen jemanden erstatten",
    "lv": "ierosināt krimināllietu pret kādu",
    "level": "Sätze"
  },
  {
    "de": "das Haar glatt streichen",
    "lv": "pieglaust matus",
    "level": "Sätze"
  },
  {
    "de": "über etwas streiten",
    "lv": "strīdēties, ķildoties par kaut ko",
    "level": "Sätze"
  },
  {
    "de": "für etwas streiten",
    "lv": "cīnīties par kaut ko",
    "level": "Sätze"
  },
  {
    "de": "mit dem Strom schwimmen",
    "lv": "peldēt pa straumei",
    "level": "Sätze"
  },
  {
    "de": "es gießt in Strömen",
    "lv": "līst gāž straumēm",
    "level": "Sätze"
  },
  {
    "de": "er studiert Medizin",
    "lv": "viņš studē medicīnu",
    "level": "Sätze"
  },
  {
    "de": "vierundzwanzig Stunden",
    "lv": "diennakts",
    "level": "Sätze"
  },
  {
    "de": "im Sturm nehmen",
    "lv": "ieņemt triecienā",
    "level": "Sätze"
  },
  {
    "de": "sich auf etwas stürzen",
    "lv": "Mesties uz kaut ko • Gāzties",
    "level": "Sätze"
  },
  {
    "de": "nach Süden fahren",
    "lv": "braukt uz dienvidiem",
    "level": "Sätze"
  },
  {
    "de": "Süden dienen",
    "lv": "dienēt dienvidos",
    "level": "Sätze"
  },
  {
    "de": "die Sucht haben",
    "lv": "būt atkarīgam",
    "level": "Sätze"
  },
  {
    "de": "sich an etwas gewöhnen",
    "lv": "pierast pie kaut kā",
    "level": "Sätze"
  },
  {
    "de": "er hat eine Schwäche für Musik",
    "lv": "mūzika ir viņa vājība",
    "level": "Sätze"
  },
  {
    "de": "Tacheles reden",
    "lv": "nostādīt kādu faktu priekšā",
    "level": "Sätze"
  },
  {
    "de": "am Tage",
    "lv": "dienā",
    "level": "Sätze"
  },
  {
    "de": "eines Tages",
    "lv": "kādu dienu",
    "level": "Sätze"
  },
  {
    "de": "guten Tag!",
    "lv": "labdien!",
    "level": "Sätze"
  },
  {
    "de": "keinen guten Tag haben",
    "lv": "neveikties",
    "level": "Sätze"
  },
  {
    "de": "einen schlechten Tag haben",
    "lv": "būt sliktā garastāvoklī",
    "level": "Sätze"
  },
  {
    "de": "es tagt",
    "lv": "aust gaisma",
    "level": "Sätze"
  },
  {
    "de": "etwas ans Tageslicht bringen",
    "lv": "kaut ko atklāt",
    "level": "Sätze"
  },
  {
    "de": "Wie spät ist es?",
    "lv": "cik pulkstenis?",
    "level": "Sätze"
  },
  {
    "de": "sich taufen lassen",
    "lv": "kristīties",
    "level": "Sätze"
  },
  {
    "de": "der Schnee taut",
    "lv": "sniegs kūst",
    "level": "Sätze"
  },
  {
    "de": "das taugt zu nichts",
    "lv": "tas nekam neder",
    "level": "Sätze"
  },
  {
    "de": "die Geschäfte sind heute geschlossen",
    "lv": "veikali šodien slēgti",
    "level": "Sätze"
  },
  {
    "de": "Freud und Leid mit jemandem teilen",
    "lv": "dalīties ar kādu priekos un bēdās",
    "level": "Sätze"
  },
  {
    "de": "auf dem Teppich bleiben",
    "lv": "palikt reālistiskam",
    "level": "Sätze"
  },
  {
    "de": "ein Tor schießen",
    "lv": "iegūt vārtus",
    "level": "Sätze"
  },
  {
    "de": "die Kosten tragen",
    "lv": "segt izdevumus",
    "level": "Sätze"
  },
  {
    "de": "zur Schau tragen",
    "lv": "izrādīt, izstādīt",
    "level": "Sätze"
  },
  {
    "de": "sich standesamtlich trauen lassen",
    "lv": "sareģistrēties dzimtsarakstu birojā",
    "level": "Sätze"
  },
  {
    "de": "die standesamtliche Trauung",
    "lv": "laulības dzimtsarakstu birojā",
    "level": "Sätze"
  },
  {
    "de": "die kirchliche Trauung",
    "lv": "laulības baznīcā",
    "level": "Sätze"
  },
  {
    "de": "Maßnahmen treffen",
    "lv": "veikt pasākumus",
    "level": "Sätze"
  },
  {
    "de": "Wo treffen wir uns?",
    "lv": "kur mēs satiksimies?",
    "level": "Sätze"
  },
  {
    "de": "einen Treffer erzielen",
    "lv": "laimēt loterijā",
    "level": "Sätze"
  },
  {
    "de": "Scherz treiben",
    "lv": "jokoties",
    "level": "Sätze"
  },
  {
    "de": "zwei Treppen hoch",
    "lv": "trešajā stāvā",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie näher!",
    "lv": "nāciet tuvāk!",
    "level": "Sätze"
  },
  {
    "de": "aus den Ufern treten",
    "lv": "iziet no krastiem",
    "level": "Sätze"
  },
  {
    "de": "jemandem die Treue halten",
    "lv": "būt uzticīgam",
    "level": "Sätze"
  },
  {
    "de": "auf jemandes Wohl trinken",
    "lv": "dzert uz kāda veselību",
    "level": "Sätze"
  },
  {
    "de": "trotz alledem",
    "lv": "neraugoties uz visu",
    "level": "Sätze"
  },
  {
    "de": "Ehrlichkeit ist eine Tugend.",
    "lv": "godīgums ir tikums",
    "level": "Sätze"
  },
  {
    "de": "Ich habe viel zu tun.",
    "lv": "man ir daudz darīšanu",
    "level": "Sätze"
  },
  {
    "de": "Das tut nichts.",
    "lv": "[tas] nekas",
    "level": "Sätze"
  },
  {
    "de": "Ich habe nichts damit zu tun.",
    "lv": "man ar to nav nekāda sakara",
    "level": "Sätze"
  },
  {
    "de": "etwas zwischen Tür und Angel tun",
    "lv": "darīt steigā",
    "level": "Sätze"
  },
  {
    "de": "offene Türen einrennen",
    "lv": "lauzties atvērtās durvīs",
    "level": "Sätze"
  },
  {
    "de": "jemandem die Tür weisen",
    "lv": "kādam parādīt durvis",
    "level": "Sätze"
  },
  {
    "de": "einen Tusch blasen",
    "lv": "spēlēt tušu",
    "level": "Sätze"
  },
  {
    "de": "nicht übel!",
    "lv": "Itin labi! • Nav ko iebilst",
    "level": "Sätze"
  },
  {
    "de": "Du musst dich im Lesen üben.",
    "lv": "tev jāvingrinās lasīšanā",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt über mir.",
    "lv": "viņš dzīvo virs manis",
    "level": "Sätze"
  },
  {
    "de": "Die Brücke führt über den Fluss.",
    "lv": "tilts ved pāri upei",
    "level": "Sätze"
  },
  {
    "de": "über Erwarten",
    "lv": "necerēti",
    "level": "Sätze"
  },
  {
    "de": "über etwas sprechen",
    "lv": "runāt par kaut ko",
    "level": "Sätze"
  },
  {
    "de": "zu einem Übereinkommen gelangen",
    "lv": "panākt vienošanos",
    "level": "Sätze"
  },
  {
    "de": "mit jemandem übereinstimmen",
    "lv": "būt ar kādu vienisprātis",
    "level": "Sätze"
  },
  {
    "de": "im Überfluss leben",
    "lv": "dzīvot pārpilnībā",
    "level": "Sätze"
  },
  {
    "de": "mit der Situation überfordert sein",
    "lv": "netikt galā ar radušos situāciju",
    "level": "Sätze"
  },
  {
    "de": "Der Saal war von Menschen überfüllt.",
    "lv": "zāle bija pārpildīta",
    "level": "Sätze"
  },
  {
    "de": "jemandem überlegen sein an etwas",
    "lv": "pārspēt kādu kaut kādā ziņā",
    "level": "Sätze"
  },
  {
    "de": "einen Auftrag übernehmen",
    "lv": "saņemt uzdevumu",
    "level": "Sätze"
  },
  {
    "de": "die Verantwortung übernehmen",
    "lv": "uzņemties atbildību",
    "level": "Sätze"
  },
  {
    "de": "aus dem Deutschen ins Lettische übersetzen",
    "lv": "pārtulkot no vācu valodas latviski",
    "level": "Sätze"
  },
  {
    "de": "Übersicht über die neuesten politischen Ereignisse",
    "lv": "pārskats par jaunākajiem politiskajiem notikumiem",
    "level": "Sätze"
  },
  {
    "de": "den Rundfunk übertragen",
    "lv": "pārraidīt pa radio",
    "level": "Sätze"
  },
  {
    "de": "in übertragener Bedeutung",
    "lv": "pārnestā nozīmē",
    "level": "Sätze"
  },
  {
    "de": "Er ist davon überzeugt.",
    "lv": "viņš par to ir pārliecināts",
    "level": "Sätze"
  },
  {
    "de": "So ist es üblich.",
    "lv": "tā pieņemts",
    "level": "Sätze"
  },
  {
    "de": "Deine Uhr geht nach.",
    "lv": "tavs pulkstenis ir vēlāks",
    "level": "Sätze"
  },
  {
    "de": "Wie viel Uhr ist es?",
    "lv": "cik pulkstenis?",
    "level": "Sätze"
  },
  {
    "de": "Um acht Uhr früh.",
    "lv": "pulksten astoņos no rīta",
    "level": "Sätze"
  },
  {
    "de": "eine Reise um die Welt",
    "lv": "ceļojums apkārt pasaulei",
    "level": "Sätze"
  },
  {
    "de": "um diese Zeit",
    "lv": "ap šo laiku",
    "level": "Sätze"
  },
  {
    "de": "Die Zeit ist um.",
    "lv": "laiks pagājis",
    "level": "Sätze"
  },
  {
    "de": "um drei Uhr",
    "lv": "pulksten trijos",
    "level": "Sätze"
  },
  {
    "de": "um einen Kopf kleiner",
    "lv": "par galvas tiesu mazāks",
    "level": "Sätze"
  },
  {
    "de": "um ... willen",
    "lv": "dēļ",
    "level": "Sätze"
  },
  {
    "de": "Jahr um Jahr",
    "lv": "Gads pēc gada • Gadu no gada",
    "level": "Sätze"
  },
  {
    "de": "kämpfen um etwas",
    "lv": "cīnīties par kaut ko",
    "level": "Sätze"
  },
  {
    "de": "um zu",
    "lv": "lai",
    "level": "Sätze"
  },
  {
    "de": "umso mehr",
    "lv": "jo vairāk",
    "level": "Sätze"
  },
  {
    "de": "Rechts um!",
    "lv": "pa labi apkārt griezties!",
    "level": "Sätze"
  },
  {
    "de": "in vollem Umfang",
    "lv": "Pilnos apmēros • Pilnā apjomā",
    "level": "Sätze"
  },
  {
    "de": "Das ist kein Umgang für dich.",
    "lv": "tā nav tev piemērota sabiedrība",
    "level": "Sätze"
  },
  {
    "de": "kurz vor dem Ziel umkehren",
    "lv": "īsi pirms mērķa griezties atpakaļ",
    "level": "Sätze"
  },
  {
    "de": "in Umlauf setzen",
    "lv": "laist apgrozībā",
    "level": "Sätze"
  },
  {
    "de": "den Betrieb umstellen",
    "lv": "pārkārtot uzņēmumu",
    "level": "Sätze"
  },
  {
    "de": "Lesen und Schreiben",
    "lv": "lasīšana un rakstīšana",
    "level": "Sätze"
  },
  {
    "de": "Ich gehe fort, und du bleibst da.",
    "lv": "es aiziešu, bet tu paliksi šeit",
    "level": "Sätze"
  },
  {
    "de": "und Ähnliches",
    "lv": "un tamlīdzīgi",
    "level": "Sätze"
  },
  {
    "de": "und so weiter",
    "lv": "un tā tālāk",
    "level": "Sätze"
  },
  {
    "de": "und ob!",
    "lv": "un kā vēl!",
    "level": "Sätze"
  },
  {
    "de": "und zwar",
    "lv": "proti",
    "level": "Sätze"
  },
  {
    "de": "Das Spiel endete unentschieden.",
    "lv": "spēle beidzās neizšķirti",
    "level": "Sätze"
  },
  {
    "de": "Unfug treiben",
    "lv": "darīt nedarbus, ālēties",
    "level": "Sätze"
  },
  {
    "de": "ungeachtet der Gefahr",
    "lv": "lai gan draud briesmas",
    "level": "Sätze"
  },
  {
    "de": "jemand wird ungemütlich",
    "lv": "kāds kļūst dusmīgs",
    "level": "Sätze"
  },
  {
    "de": "eine ungerade Zahl",
    "lv": "nepārskaitlis",
    "level": "Sätze"
  },
  {
    "de": "auf Unkosten von ...",
    "lv": "uz ... rēķina",
    "level": "Sätze"
  },
  {
    "de": "nach unten",
    "lv": "uz leju, lejup",
    "level": "Sätze"
  },
  {
    "de": "von unten",
    "lv": "no apakšas",
    "level": "Sätze"
  },
  {
    "de": "Er stellt die Bank unter den Tisch.",
    "lv": "viņš paliek solu zem galda",
    "level": "Sätze"
  },
  {
    "de": "Die Bank steht unter dem Tisch.",
    "lv": "sols stāv zem galda",
    "level": "Sätze"
  },
  {
    "de": "Er setzte sich unter die Zuschauer.",
    "lv": "viņš apsēdās starp skatītājiem",
    "level": "Sätze"
  },
  {
    "de": "Er saß unter den Zuschauern.",
    "lv": "viņš sēdēja skatītāju vidū",
    "level": "Sätze"
  },
  {
    "de": "unter uns gesagt",
    "lv": "starp mums runājot",
    "level": "Sätze"
  },
  {
    "de": "unter anderem",
    "lv": "tai skaitā",
    "level": "Sätze"
  },
  {
    "de": "unter der Bedingung, dass ...",
    "lv": "ar noteikumu, ka ...",
    "level": "Sätze"
  },
  {
    "de": "den Kranken im Sanatorium unterbringen",
    "lv": "ievietot slimnieku sanatorijā",
    "level": "Sätze"
  },
  {
    "de": "das Feuer im Ofen unterhalten",
    "lv": "uzturēt krāsnī uguni",
    "level": "Sätze"
  },
  {
    "de": "gute Beziehungen zu jemandem unterhalten",
    "lv": "uzturēt ar kādu labas attiecības",
    "level": "Sätze"
  },
  {
    "de": "eine Reise unternehmen",
    "lv": "doties ceļojumā",
    "level": "Sätze"
  },
  {
    "de": "in Deutsch unterrichten",
    "lv": "mācīt vācu valodu",
    "level": "Sätze"
  },
  {
    "de": "eine böswillige Unterstellung",
    "lv": "ļaunprātīgs apmelojums",
    "level": "Sätze"
  },
  {
    "de": "einen Kranken untersuchen",
    "lv": "izmeklēt slimnieku",
    "level": "Sätze"
  },
  {
    "de": "Die Kosten des Projekts sind untragbar.",
    "lv": "projekta izmaksas nav pieņemamas",
    "level": "Sätze"
  },
  {
    "de": "auf Urlaub gehen",
    "lv": "iet atvaļinājumā",
    "level": "Sätze"
  },
  {
    "de": "auf Urlaub sein",
    "lv": "būt atvaļinājumā",
    "level": "Sätze"
  },
  {
    "de": "Keine Ursache!",
    "lv": "nav par ko pateikties!",
    "level": "Sätze"
  },
  {
    "de": "Es geschah, wie verabredet.",
    "lv": "notika, kā bija norunāts",
    "level": "Sätze"
  },
  {
    "de": "jemanden zur Verantwortung ziehen",
    "lv": "saukt kādu pie atbildības",
    "level": "Sätze"
  },
  {
    "de": "einen Verband anlegen",
    "lv": "uzlikt pārsēju",
    "level": "Sätze"
  },
  {
    "de": "Rauchen verboten!",
    "lv": "smēķēt aizliegts!",
    "level": "Sätze"
  },
  {
    "de": "Falsch verbunden!",
    "lv": "Nepareizi savienots!",
    "level": "Sätze"
  },
  {
    "de": "chemische Verbindung",
    "lv": "ķīmisks savienojums",
    "level": "Sätze"
  },
  {
    "de": "keine Verbindung bekommen",
    "lv": "Nedabūt savienojumu",
    "level": "Sätze"
  },
  {
    "de": "die Verbindung aufnehmen",
    "lv": "Nodibināt sakarus",
    "level": "Sätze"
  },
  {
    "de": "Eintritt verboten!",
    "lv": "ieeja aizliegta!",
    "level": "Sätze"
  },
  {
    "de": "Verbrauch an Energie",
    "lv": "enerģijas patēriņš",
    "level": "Sätze"
  },
  {
    "de": "jemandem zur Verfügung stehen",
    "lv": "būt kāda rīcībā",
    "level": "Sätze"
  },
  {
    "de": "sich über etwas vergewissern",
    "lv": "pārliecināties par kaut ko",
    "level": "Sätze"
  },
  {
    "de": "im Verhältnis zu etwas",
    "lv": "salīdzinājumā ar kaut ko",
    "level": "Sätze"
  },
  {
    "de": "über etwas verhandeln",
    "lv": "apspriesties, vest sarunas par kaut ko",
    "level": "Sätze"
  },
  {
    "de": "Das Erdbeben hat weite Gebiete verheert.",
    "lv": "zemestrīce ir izpostījusi plašus apgabalus",
    "level": "Sätze"
  },
  {
    "de": "zum Verkauf kommen",
    "lv": "nākt pārdošanā",
    "level": "Sätze"
  },
  {
    "de": "ein reger Verkehr",
    "lv": "dzīva satiksme",
    "level": "Sätze"
  },
  {
    "de": "im Verkehr sein",
    "lv": "Kursēt",
    "level": "Sätze"
  },
  {
    "de": "brieflicher Verkehr",
    "lv": "sarakstīšanās",
    "level": "Sätze"
  },
  {
    "de": "sich auf etwas verlassen",
    "lv": "paļauties uz kaut ko",
    "level": "Sätze"
  },
  {
    "de": "die Spielregeln verletzen",
    "lv": "pārkāpt spēles noteikumus",
    "level": "Sätze"
  },
  {
    "de": "eine Verletzung der Verkehrsregeln",
    "lv": "satiksmes noteikumu pārkāpšana",
    "level": "Sätze"
  },
  {
    "de": "das geht über mein Vermögen",
    "lv": "tas ir pāri maniem spēkiem",
    "level": "Sätze"
  },
  {
    "de": "die Arbeit vernachlässigen",
    "lv": "būt nolaidīgam darbā",
    "level": "Sätze"
  },
  {
    "de": "sein Äußeres vernachlässigen",
    "lv": "nerūpēties par savu ārieni",
    "level": "Sätze"
  },
  {
    "de": "vernünftig werden",
    "lv": "nākt pie prāta, kļūt prātīgam",
    "level": "Sätze"
  },
  {
    "de": "eine Gelegenheit verpassen",
    "lv": "palaist garām izdevību",
    "level": "Sätze"
  },
  {
    "de": "er hat dabei versagt",
    "lv": "viņš ar to nav ticis galā",
    "level": "Sätze"
  },
  {
    "de": "den Zug versäumen",
    "lv": "nokavēt vilcienu",
    "level": "Sätze"
  },
  {
    "de": "aus Versehen",
    "lv": "aiz pārskatīšanās",
    "level": "Sätze"
  },
  {
    "de": "in Freude versetzen",
    "lv": "iepriecināt",
    "level": "Sätze"
  },
  {
    "de": "Verstehen Sie mich?",
    "lv": "Vai jūs mani saprotat?",
    "level": "Sätze"
  },
  {
    "de": "Er versteht nichts davon.",
    "lv": "Viņš no tā neko nesaprot.",
    "level": "Sätze"
  },
  {
    "de": "Ein Land vertreten.",
    "lv": "Pārstāvēt kādu valsti.",
    "level": "Sätze"
  },
  {
    "de": "Seine Ansicht vertreten.",
    "lv": "Aizstāvēt savu viedokli.",
    "level": "Sätze"
  },
  {
    "de": "Streit verursachen.",
    "lv": "Izraisīt strīdu.",
    "level": "Sätze"
  },
  {
    "de": "Die Antwort verweigern.",
    "lv": "Neatbildēt, atteikties atbildēt.",
    "level": "Sätze"
  },
  {
    "de": "Verzeihung!",
    "lv": "Piedodiet!",
    "level": "Sätze"
  },
  {
    "de": "Viel besser.",
    "lv": "Daudz labāk.",
    "level": "Sätze"
  },
  {
    "de": "Zu viel.",
    "lv": "Pārāk daudz.",
    "level": "Sätze"
  },
  {
    "de": "Es ist [ein] Viertel nach eins.",
    "lv": "Ceturksnis pāri vieniem.",
    "level": "Sätze"
  },
  {
    "de": "Das Visum erhalten.",
    "lv": "Saņemt vīzu.",
    "level": "Sätze"
  },
  {
    "de": "Das Stadion war ganz voll.",
    "lv": "Stadions bija gluži pilns.",
    "level": "Sätze"
  },
  {
    "de": "Das genügt völlig.",
    "lv": "Ar to pilnīgi pietiek.",
    "level": "Sätze"
  },
  {
    "de": "Vom Hörensagen.",
    "lv": "Pēc baumām",
    "level": "Sätze"
  },
  {
    "de": "Vom 20. Januar bis 1. Februar.",
    "lv": "No janvāra līdz februārim",
    "level": "Sätze"
  },
  {
    "de": "Der Zug kommt von Leipzig.",
    "lv": "Vilciens pienāk no Leipcigas.",
    "level": "Sätze"
  },
  {
    "de": "Ein Brief von meinem Freund.",
    "lv": "Vēstule no [mana] drauga.",
    "level": "Sätze"
  },
  {
    "de": "Von Zeit zu Zeit.",
    "lv": "Laiku pa laikam.",
    "level": "Sätze"
  },
  {
    "de": "Von Beruf.",
    "lv": "Pēc profesijas.",
    "level": "Sätze"
  },
  {
    "de": "Ein Gedicht von Heine.",
    "lv": "Heines dzejolis.",
    "level": "Sätze"
  },
  {
    "de": "Er ist Berliner von Geburt.",
    "lv": "Viņš ir dzimis berlīnietis.",
    "level": "Sätze"
  },
  {
    "de": "Er steht vor dem Fenster.",
    "lv": "Viņš stāv pie loga.",
    "level": "Sätze"
  },
  {
    "de": "Vor Sonnenaufgang.",
    "lv": "Pirms saules lēkta.",
    "level": "Sätze"
  },
  {
    "de": "Vor vierzehn Tagen.",
    "lv": "Pirms divām nedēļām.",
    "level": "Sätze"
  },
  {
    "de": "Vor Freude.",
    "lv": "Aiz prieka.",
    "level": "Sätze"
  },
  {
    "de": "Vor allem.",
    "lv": "Pirmkārt, vispirms.",
    "level": "Sätze"
  },
  {
    "de": "Im Voraus.",
    "lv": "Iepriekš.",
    "level": "Sätze"
  },
  {
    "de": "Jemandem voraus sein.",
    "lv": "Būt kādam priekšā",
    "level": "Sätze"
  },
  {
    "de": "Unter der Voraussetzung, dass...",
    "lv": "Pieņemot, ka...",
    "level": "Sätze"
  },
  {
    "de": "Unter dem Vorbehalt.",
    "lv": "Ar nosacījumu.",
    "level": "Sätze"
  },
  {
    "de": "Das Schlimmste ist vorbei.",
    "lv": "Ļaunākais ir garām.",
    "level": "Sätze"
  },
  {
    "de": "Vorhanden sein.",
    "lv": "Būt • Būt klāt, būt dabūjamam",
    "level": "Sätze"
  },
  {
    "de": "In der vorigen Woche.",
    "lv": "Pagājušajā nedēļā.",
    "level": "Sätze"
  },
  {
    "de": "Vorkehrungen treffen.",
    "lv": "Veikt pasākumus aizsardzībai.",
    "level": "Sätze"
  },
  {
    "de": "Sie kommt mir bekannt vor.",
    "lv": "Viņa man šķiet pazīstama.",
    "level": "Sätze"
  },
  {
    "de": "Eine Vorlesung halten.",
    "lv": "Lasīt lekciju.",
    "level": "Sätze"
  },
  {
    "de": "Er hat Vorliebe für Literatur.",
    "lv": "Viņam ļoti patīk literatūra.",
    "level": "Sätze"
  },
  {
    "de": "Heute Vormittag.",
    "lv": "Šorīt, šodien priekšpusdienā.",
    "level": "Sätze"
  },
  {
    "de": "Von vorn.",
    "lv": "No priekšas",
    "level": "Sätze"
  },
  {
    "de": "Nach vorn.",
    "lv": "Uz priekšu.",
    "level": "Sätze"
  },
  {
    "de": "Von vornherein.",
    "lv": "Pašā sākumā.",
    "level": "Sätze"
  },
  {
    "de": "Einen Vorschlag annehmen.",
    "lv": "Pieņemt priekšlikumu.",
    "level": "Sätze"
  },
  {
    "de": "Vorsicht!",
    "lv": "Sargies!, uzmanību!",
    "level": "Sätze"
  },
  {
    "de": "Einen Vorsprung vor jemandem haben.",
    "lv": "Būt pārākam par kādu.",
    "level": "Sätze"
  },
  {
    "de": "Erlauben Sie, dass ich Ihnen Herrn N. vorstelle.",
    "lv": "Atļaujiet jūs iepazīstināt ar N. kungu.",
    "level": "Sätze"
  },
  {
    "de": "Hast du davon eine richtige Vorstellung?",
    "lv": "Vai tev par to ir īsts priekšstats?",
    "level": "Sätze"
  },
  {
    "de": "Im Vorteil sein.",
    "lv": "Atrasties izdevīgākā stāvoklī",
    "level": "Sätze"
  },
  {
    "de": "Der Sommer ist vorüber.",
    "lv": "Vasara ir pagājusi.",
    "level": "Sätze"
  },
  {
    "de": "Die Eintrittskarte vorweisen.",
    "lv": "Uzrādīt ieejas biļeti.",
    "level": "Sätze"
  },
  {
    "de": "Wach sein.",
    "lv": "Būt nomodā.",
    "level": "Sätze"
  },
  {
    "de": "Wach werden.",
    "lv": "Pamosties.",
    "level": "Sätze"
  },
  {
    "de": "Auf Wache sein.",
    "lv": "Stāvēt sardzē.",
    "level": "Sätze"
  },
  {
    "de": "Ich wage nicht zu behaupten, dass...",
    "lv": "Es neuzdrošinos apgalvot, ka...",
    "level": "Sätze"
  },
  {
    "de": "Nicht wahr?",
    "lv": "Vai ne?",
    "level": "Sätze"
  },
  {
    "de": "Während eines Jahres.",
    "lv": "Gada laikā.",
    "level": "Sätze"
  },
  {
    "de": "Während des Krieges.",
    "lv": "Kara laikā.",
    "level": "Sätze"
  },
  {
    "de": "Gegen eine Wand reden.",
    "lv": "Runāt veltīgi.",
    "level": "Sätze"
  },
  {
    "de": "Hier haben die Wände Ohren.",
    "lv": "Te noklausās.",
    "level": "Sätze"
  },
  {
    "de": "Seit wann?",
    "lv": "Kopš kura laika?",
    "level": "Sätze"
  },
  {
    "de": "Bis wann?",
    "lv": "Līdz kuram laikam?",
    "level": "Sätze"
  },
  {
    "de": "Es ist warm.",
    "lv": "Ir silts.",
    "level": "Sätze"
  },
  {
    "de": "Auf eine Nachricht warten.",
    "lv": "Gaidīt ziņu.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie?",
    "lv": "Ko jūs vēlaties?",
    "level": "Sätze"
  },
  {
    "de": "Was meinen Sie damit?",
    "lv": "Ko jūs ar to domājat?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein...?",
    "lv": "Kāds...?, kas par...?",
    "level": "Sätze"
  },
  {
    "de": "Auf halbem Wege.",
    "lv": "Pusceļā.",
    "level": "Sätze"
  },
  {
    "de": "Auf diesem Wege.",
    "lv": "Tādā ceļā, tādiem līdzekļiem.",
    "level": "Sätze"
  },
  {
    "de": "Auf friedlichem Wege.",
    "lv": "Miera ceļā.",
    "level": "Sätze"
  },
  {
    "de": "Unserer Freundschaft wegen.",
    "lv": "Mūsu draudzības dēļ.",
    "level": "Sätze"
  },
  {
    "de": "Sich wegen etwas entschuldigen.",
    "lv": "Par kaut ko atvainoties.",
    "level": "Sätze"
  },
  {
    "de": "Von Rechts wegen.",
    "lv": "Pēc taisnības",
    "level": "Sätze"
  },
  {
    "de": "Weh tun.",
    "lv": "Sāpēt.",
    "level": "Sätze"
  },
  {
    "de": "Der Kopf tut mir weh.",
    "lv": "Man sāp galva.",
    "level": "Sätze"
  },
  {
    "de": "Ein weich gekochtes Ei.",
    "lv": "Mīksti novārīta ola.",
    "level": "Sätze"
  },
  {
    "de": "Zu Weihnachten.",
    "lv": "Ziemassvētkos.",
    "level": "Sätze"
  },
  {
    "de": "Eine Weile.",
    "lv": "Kādu laiciņu.",
    "level": "Sätze"
  },
  {
    "de": "Auf welche Weise?",
    "lv": "Kādā veidā?",
    "level": "Sätze"
  },
  {
    "de": "Art und Weise.",
    "lv": "Veids",
    "level": "Sätze"
  },
  {
    "de": "Den Weg weisen.",
    "lv": "Parādīt ceļu.",
    "level": "Sätze"
  },
  {
    "de": "Ohne weiteres.",
    "lv": "Tūlīt, nekavējoties.",
    "level": "Sätze"
  },
  {
    "de": "Bis auf weiteres.",
    "lv": "Līdz turpmākam.",
    "level": "Sätze"
  },
  {
    "de": "Und so weiter.",
    "lv": "Un tā tālāk.",
    "level": "Sätze"
  },
  {
    "de": "Weiter nichts.",
    "lv": "Vairāk nekas.",
    "level": "Sätze"
  },
  {
    "de": "An welchem Tag?",
    "lv": "Kurā dienā?",
    "level": "Sätze"
  },
  {
    "de": "Alle Welt.",
    "lv": "Visa pasaule, visi.",
    "level": "Sätze"
  },
  {
    "de": "Sich mit einer Bitte an jemanden wenden.",
    "lv": "Griezties pie kāda ar lūgumu.",
    "level": "Sätze"
  },
  {
    "de": "In wenigen Tagen.",
    "lv": "Dažās dienās.",
    "level": "Sätze"
  },
  {
    "de": "Ein wenig.",
    "lv": "Mazliet.",
    "level": "Sätze"
  },
  {
    "de": "Zu wenig.",
    "lv": "Par maz.",
    "level": "Sätze"
  },
  {
    "de": "Wenn auch.",
    "lv": "Kaut arī.",
    "level": "Sätze"
  },
  {
    "de": "Wer da?",
    "lv": "Kas tur?",
    "level": "Sätze"
  },
  {
    "de": "Sich werfen.",
    "lv": "Mesties",
    "level": "Sätze"
  },
  {
    "de": "Gesammelte Werke von Schiller.",
    "lv": "Šillera kopotie raksti.",
    "level": "Sätze"
  },
  {
    "de": "Ausgewählte Werke.",
    "lv": "Darbu izlase.",
    "level": "Sätze"
  },
  {
    "de": "Er ist wert, dass...",
    "lv": "Viņš ir pelnījis, lai...",
    "level": "Sätze"
  },
  {
    "de": "Es ist zwei Euro wert.",
    "lv": "Divu eiro vērtībā.",
    "level": "Sätze"
  },
  {
    "de": "Das ist nicht der Rede wert.",
    "lv": "Par to nav vērts runāt.",
    "level": "Sätze"
  },
  {
    "de": "Auf etwas Wert legen.",
    "lv": "Kaut ko augstu vērtēt • Piešķirt kaut kam lielu nozīmi",
    "level": "Sätze"
  },
  {
    "de": "Nach Westen.",
    "lv": "Uz rietumiem.",
    "level": "Sätze"
  },
  {
    "de": "Von Westen.",
    "lv": "No rietumiem.",
    "level": "Sätze"
  },
  {
    "de": "In Wettbewerb treten.",
    "lv": "Iesaistīties sacensībā.",
    "level": "Sätze"
  },
  {
    "de": "Um die Wette laufen.",
    "lv": "Skrieties.",
    "level": "Sätze"
  },
  {
    "de": "Was gilt die Wette?",
    "lv": "Uz ko derēsim?",
    "level": "Sätze"
  },
  {
    "de": "Mit jemandem um etwas wetten.",
    "lv": "Saderēt ar kādu uz kaut ko.",
    "level": "Sätze"
  },
  {
    "de": "Wie wird das Wetter?",
    "lv": "Kāds būs laiks?",
    "level": "Sätze"
  },
  {
    "de": "Wettkampf im Turnen.",
    "lv": "Sacensības vingrošanā.",
    "level": "Sätze"
  },
  {
    "de": "Wider meinen Willen.",
    "lv": "Pret manu gribu.",
    "level": "Sätze"
  },
  {
    "de": "Widerspruch erheben.",
    "lv": "Protestēt • Celt iebildumus",
    "level": "Sätze"
  },
  {
    "de": "Sich der Kunst widmen.",
    "lv": "Nodoties mākslai.",
    "level": "Sätze"
  },
  {
    "de": "Sich der Arbeit widmen.",
    "lv": "Nodoties darbam.",
    "level": "Sätze"
  },
  {
    "de": "Wie alt ist er?",
    "lv": "Cik viņam gadu?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange?",
    "lv": "Cik ilgi?",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiederhören!",
    "lv": "Uz sadzirdēšanos!",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiedersehen!",
    "lv": "Uz redzēšanos!",
    "level": "Sätze"
  },
  {
    "de": "Den wievielten haben wir heute?",
    "lv": "Kāds šodien datums?",
    "level": "Sätze"
  },
  {
    "de": "Wilde Tiere.",
    "lv": "Plēsīgi zvēri.",
    "level": "Sätze"
  },
  {
    "de": "Herzlich willkommen!",
    "lv": "Sirsnīgi sveicināti!",
    "level": "Sätze"
  },
  {
    "de": "Du musst ziehen.",
    "lv": "Tev gājiens",
    "level": "Sätze"
  },
  {
    "de": "Es zieht.",
    "lv": "Velk",
    "level": "Sätze"
  },
  {
    "de": "Das Ziel erreichen.",
    "lv": "Sasniegt mērķi.",
    "level": "Sätze"
  },
  {
    "de": "Ziemlich kalt.",
    "lv": "Diezgan auksts.",
    "level": "Sätze"
  },
  {
    "de": "Zipfel einer Wurst.",
    "lv": "Desas gabaliņš.",
    "level": "Sätze"
  },
  {
    "de": "Zu ihm gehen.",
    "lv": "Iet pie viņa.",
    "level": "Sätze"
  },
  {
    "de": "Zur Schule gehen.",
    "lv": "Iet uz skolu.",
    "level": "Sätze"
  },
  {
    "de": "Der Weg zum Bahnhof.",
    "lv": "Ceļš uz staciju.",
    "level": "Sätze"
  },
  {
    "de": "Zu Hause bleiben.",
    "lv": "Palikt mājās.",
    "level": "Sätze"
  },
  {
    "de": "Zurzeit.",
    "lv": "Pašreiz.",
    "level": "Sätze"
  },
  {
    "de": "Von Tag zu Tag.",
    "lv": "Diendienā.",
    "level": "Sätze"
  },
  {
    "de": "Zum Glück.",
    "lv": "Par laimi.",
    "level": "Sätze"
  },
  {
    "de": "Etwas zum Scherz sagen.",
    "lv": "Sacīt kaut ko pa jokam.",
    "level": "Sätze"
  },
  {
    "de": "Wasser zum Trinken.",
    "lv": "Ūdens dzeršanai.",
    "level": "Sätze"
  },
  {
    "de": "Zu Fuß.",
    "lv": "Kājām.",
    "level": "Sätze"
  },
  {
    "de": "Zu Pferde.",
    "lv": "Jāšus.",
    "level": "Sätze"
  },
  {
    "de": "Zu Rad.",
    "lv": "Ar velosipēdu.",
    "level": "Sätze"
  },
  {
    "de": "Es hörte auf zu regnen.",
    "lv": "Pārstāja līt.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe noch viel zu tun.",
    "lv": "Man vēl daudz darāms.",
    "level": "Sätze"
  },
  {
    "de": "Zu früh.",
    "lv": "Par agru.",
    "level": "Sätze"
  },
  {
    "de": "Zu groß.",
    "lv": "Pārāk liels.",
    "level": "Sätze"
  },
  {
    "de": "Mit den Achseln zucken.",
    "lv": "[Pa]raustīt plecus.",
    "level": "Sätze"
  },
  {
    "de": "Den ersten Preis zuerkennen.",
    "lv": "Piešķirt pirmo godalgu.",
    "level": "Sätze"
  },
  {
    "de": "In einem Zug trinken.",
    "lv": "Izdzert ar vienu malku.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde gehen.",
    "lv": "Iet bojā.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde legen.",
    "lv": "Likt pamatā • Ņemt par pamatu",
    "level": "Sätze"
  },
  {
    "de": "Zum erstenmal.",
    "lv": "Pirmoreiz.",
    "level": "Sätze"
  },
  {
    "de": "Machen Sie bitte die Tür zu!",
    "lv": "Aizveriet, lūdzu, durvis!",
    "level": "Sätze"
  },
  {
    "de": "Er hat zugenommen.",
    "lv": "Viņš pieņēmies svarā.",
    "level": "Sätze"
  },
  {
    "de": "Die Tage nehmen zu.",
    "lv": "Dienas kļūst garākas.",
    "level": "Sätze"
  },
  {
    "de": "Zusammenhängen mit etwas.",
    "lv": "Būt sakarā ar kaut ko.",
    "level": "Sätze"
  },
  {
    "de": "Dem Spiel zusehen.",
    "lv": "Noskatīties spēli.",
    "level": "Sätze"
  },
  {
    "de": "Die Tür ist zu.",
    "lv": "Durvis ir aizvērtas.",
    "level": "Sätze"
  },
  {
    "de": "Das hätte ich ihm nicht zugetraut.",
    "lv": "To es nebūtu no viņa gaidījis.",
    "level": "Sätze"
  },
  {
    "de": "Freier Zutritt.",
    "lv": "Atļauts iet.",
    "level": "Sätze"
  },
  {
    "de": "Zutritt verboten!",
    "lv": "Ieeja aizliegta!",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu viel!",
    "lv": "Tas ir par daudz!",
    "level": "Sätze"
  },
  {
    "de": "Jemandem etwas zuweisen.",
    "lv": "Oficiāli kādam kaut ko piešķirt.",
    "level": "Sätze"
  },
  {
    "de": "Zuwider werden.",
    "lv": "Kļūt pretīgam, apriebties.",
    "level": "Sätze"
  },
  {
    "de": "Und zwar.",
    "lv": "Proti.",
    "level": "Sätze"
  },
  {
    "de": "Es steht außer Zweifel.",
    "lv": "Nav nekādu šaubu.",
    "level": "Sätze"
  },
  {
    "de": "Ohne Zweifel.",
    "lv": "Bez šaubīšanās.",
    "level": "Sätze"
  },
  {
    "de": "Zum Zweiten.",
    "lv": "Otrkārt.",
    "level": "Sätze"
  }
];

window.SENTENCE_ENTRIES = SENTENCE_ENTRIES;

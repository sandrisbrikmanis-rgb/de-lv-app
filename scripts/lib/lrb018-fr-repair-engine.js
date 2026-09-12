"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { loadCsv } = require("./g2-a1-phase3/batch-001-csv");

const CARD_KEY_ALIASES = {
  "a1-an": "an",
  "a1-besuch": "Besuch",
  "a1-bringen": "bringen",
  "a1-das": "das",
  "a1-dass": "dass",
  "a1-einmal": "einmal",
  "a1-eis": "Eis",
  "a1-es": "es",
  "a1-euch": "euch",
  "a1-fuer": "für",
  "a1-ins": "ins",
  "a1-lang": "lang",
  "a1-machen": "machen",
  "a1-nehmen": "nehmen",
  "a1-nur-study": "nur",
  "a1-oder": "oder",
  "a1-passen": "passen",
  "a1-wer": "wer",
  "a1-zu": "zu",
  "a1-zum": "zum",
};

let _words = null;

function loadWords() {
  if (_words) return _words;
  const ctx = { window: {} };
  vm.runInNewContext(
    fs.readFileSync(path.join(__dirname, "../../data/fr/a1.js"), "utf8"),
    ctx
  );
  _words = ctx.window.A1_WORDS;
  return _words;
}

function resolveCardKey(cardKey) {
  return CARD_KEY_ALIASES[cardKey] || cardKey;
}

function loadFrNested(cardKey) {
  const words = loadWords();
  const resolved = resolveCardKey(cardKey);
  let entry =
    words.find((w) => w.study?.id === cardKey) ||
    words.find((w) => w.study?.id === `a1-${resolved}`) ||
    words.find((w) => w.de === resolved);
  if (!entry) throw new Error(`Card not found: ${cardKey}`);
  return {
    lv: entry.lv,
    study: JSON.parse(JSON.stringify(entry.study)),
  };
}

function repairAn(out) {
  out.lv = "Sur • À • Au bord de";
  out.study.translation = "Sur • À • Au bord de";
  out.study.explanation =
    "Utilisé lorsque quelque chose se trouve près d'un mur, d'une fenêtre, d'une porte, d'une rivière, d'un bord de mer ou de tout autre bord/surface.";
  out.study.examples = [
    { de: "an der Wand", lv: "Sur le mur" },
    { de: "am Fenster", lv: "À la fenêtre" },
    { de: "am Meer", lv: "Au bord de la mer" },
  ];
  out.study.comparison = [
    {
      word: "an",
      meaning: "Sur une surface ou en bordure",
      example: "an der Wand – Sur le mur",
    },
    {
      word: "auf",
      meaning: "Sur une surface horizontale",
      example: "auf dem Tisch – Sur la table",
    },
    {
      word: "bei",
      meaning: "Chez une personne ou un lieu",
      example: "beim Arzt – Chez le médecin",
    },
  ];
  out.study.tip = { text: "Rappel : mur, fenêtre, bord → an." };
  out.study.important = [
    "An indique souvent le contact avec une surface, un mur, une fenêtre ou un bord — pas une simple proximité vague.",
    "Auf s'utilise généralement sur une surface horizontale.",
  ];
  out.study.sectionAccents = {
    examples: [
      { de: { blue: ["an"] }, lv: { purple: ["Sur"] } },
      { de: { blue: ["am"] }, lv: { purple: ["fenêtre"] } },
      { de: { blue: ["am"] }, lv: { purple: ["bord"] } },
    ],
    comparison: [
      { word: { green: ["an"] }, example: { green: ["an"], purple: ["Wand"] } },
      { word: { green: ["auf"] }, example: { yellow: ["auf"], purple: ["Tisch"] } },
      { word: { green: ["bei"] }, example: { red: ["beim"], purple: ["Arzt"] } },
    ],
    tip: { left: { blue: ["an"], purple: ["Rappel"], green: ["mur", "fenêtre", "bord"] } },
    important: [{ purple: ["surface", "bord"] }],
  };
}

function repairAppetit(out) {
  out.lv = "Appétit";
  out.study.translation = "Appétit";
  out.study.explanation = [
    "Idée principale : la sensation d'avoir envie de manger. Singulier seulement — pas de pluriel.",
    "Der Appetit signifie essentiellement : l'envie de manger.",
    "Décrit souvent : un sentiment (singulier seulement).",
    "Der Appetit n'est qu'au singulier : appétit.",
    "Au niveau A1, ils apparaissent souvent ensemble, par exemple : Guten Appetit !",
  ];
  out.study.examples = [
    { de: "Guten Appetit!", lv: "Bon appétit !" },
    { de: "Guten Appetit!", lv: "Bon appétit !" },
    { de: "Ich habe Appetit.", lv: "J'ai de l'appétit." },
  ];
  out.study.important = [
    "Der Appetit est au singulier seulement.",
    "Incorrect : die Appetite → Correct : der Appetit",
    "Incorrect : Ich bin Appetit. → Correct : Ich habe Appetit.",
  ];
  out.study.tip = [
    "Der Appetit = appétit",
    "Utilisez der Appetit lorsque le contexte correspond à ce sens.",
  ];
  out.study.comparison = [
    {
      word: "der Appetit",
      meaning: "appétit",
      example: "Ich habe Appetit. – J'ai de l'appétit.",
    },
    {
      word: "Guten Appetit",
      meaning: "bon appétit (formule)",
      example: "Guten Appetit! – Bon appétit !",
    },
  ];
  out.study.sectionAccents = {
    explanation: { purple: ["Appétit"] },
    examples: [
      { de: { blue: ["Appetit"] }, lv: { purple: ["appétit"] } },
      { de: { blue: ["Appetit"] }, lv: { purple: ["appétit"] } },
      { de: { blue: ["Appetit"] }, lv: { purple: ["appétit"] } },
    ],
    tip: [{ purple: ["Appétit"] }],
    important: [{ blue: ["der Appetit"], purple: ["Ich habe Appetit"] }],
  };
}

function repairBitte(out) {
  out.lv = "S'il te plaît";
  out.study.translation = "S'il te plaît";
  out.study.explanation = [
    "bitte en minuscules = mot de politesse (s'il te plaît, de rien).",
    "die Bitte avec majuscule et article = une demande (eine Bitte, meine Bitte).",
    "Pluriel : die Bitten (demandes).",
  ];
  out.study.examples = [
    { de: "Eine Tasse Kaffee, bitte.", lv: "Une tasse de café, s'il vous plaît." },
    { de: "Komm bitte herein.", lv: "Entre, s'il vous plaît." },
    { de: "Bitte schön!", lv: "De rien !" },
    {
      de: "Kann ich bitte fragen?",
      lv: "Puis-je poser une question, s'il vous plaît ?",
    },
    { de: "Ich habe eine Bitte.", lv: "J'ai une demande." },
    { de: "Die Bitte ist wichtig.", lv: "La demande est importante." },
  ];
  out.study.comparison = [
    {
      word: "bitte",
      meaning: "S'il te plaît",
      example: "Komm bitte herein. – Entre, s'il vous plaît.",
    },
    {
      word: "die Bitte",
      meaning: "Une demande",
      example: "Ich habe eine Bitte. – J'ai une demande.",
    },
  ];
  out.study.tip = [
    "bitte en minuscules = politesse (Bitte schön!, Kaffee, bitte).",
    "die Bitte avec majuscule = demande (eine Bitte, meine Bitte).",
  ];
  out.study.important = [
    "Bitte en minuscules est un mot poli, pas un nom.",
    "Die Bitte avec majuscule et l'article die est un nom.",
    "Pluriel : die Bitten (demandes).",
  ];
  out.study.sectionAccents = {
    examples: [
      { de: { blue: ["bitte"] }, lv: { purple: ["plaît"] } },
      { de: { blue: ["bitte"] }, lv: { purple: ["plaît"] } },
      { de: { blue: ["Bitte"] }, lv: { purple: ["rien"] } },
    ],
    comparison: [
      { word: { blue: ["bitte"] }, meaning: { purple: ["plaît"] } },
      { word: { green: ["Bitte"] }, meaning: { purple: ["demande"] } },
    ],
    tip: [{ blue: ["bitte"], purple: ["politesse"] }],
    important: [{ blue: ["bitte"], green: ["Bitte"] }],
  };
}

function repairBis(out) {
  out.lv = "Jusqu'à";
  out.study.translation = "Jusqu'à";
  out.study.explanation = "Indique une limite, un point dans le temps ou une condition.";
  out.study.examples = [
    { de: "Ich warte bis zu deiner Ankunft.", lv: "J'attends ton arrivée." },
    { de: "Bleib hier, bis ich zurückkomme.", lv: "Reste ici jusqu'à mon retour." },
    { de: "Ich lerne Deutsch bis zum Abend.", lv: "J'étudie l'allemand jusqu'au soir." },
    {
      de: "Bis jetzt habe ich nichts verstanden.",
      lv: "Jusqu'à présent, je n'ai rien compris.",
    },
  ];
  out.study.comparison = [
    {
      word: "bis",
      meaning: "Jusqu'à (moment ou limite temporelle)",
      example: "Ich bleibe bis morgen. – Je reste jusqu'à demain.",
    },
    {
      word: "bis zu",
      meaning: "Jusqu'à (jusqu'à une limite)",
      example: "bis zum Bahnhof – jusqu'à la gare",
    },
    {
      word: "bis jetzt",
      meaning: "Jusqu'à présent",
      example:
        "Bis jetzt habe ich nichts verstanden. – Jusqu'à présent, je n'ai rien compris.",
    },
  ];
  out.study.tip = { text: "Rappel : limite dans le temps ou condition → bis." };
  out.study.important = [
    "bis marque une limite temporelle ou une condition.",
    "bis jetzt signifie jusqu'à présent.",
  ];
  out.study.sectionAccents = {
    examples: [
      { de: { purple: ["bis"] }, lv: { purple: ["attends"] } },
      { de: { purple: ["bis"] }, lv: { purple: ["jusqu'à"] } },
      { de: { purple: ["bis"] }, lv: { purple: ["soir"] } },
      { de: { blue: ["Bis jetzt"] }, lv: { purple: ["présent"] } },
    ],
    comparison: [
      { word: { purple: ["bis"] }, example: { purple: ["morgen"] } },
      { word: { purple: ["bis zu"] }, example: { purple: ["Bahnhof"] } },
      { word: { purple: ["bis jetzt"] }, example: { blue: ["Bis jetzt"] } },
    ],
    tip: { left: { purple: ["bis"], blue: ["Rappel"] } },
    important: [{ purple: ["bis"] }],
  };
}

function repairEuch(out) {
  out.lv = "Vous";
  out.study.translation = "Vous • Vous";
  out.study.examples = [
    { de: "Ich sehe euch.", lv: "Je vous vois." },
    { de: "Ich helfe euch.", lv: "Je vous aide." },
    { de: "Ich gebe euch das Buch.", lv: "Je vous donne le livre." },
    { de: "Ich danke euch.", lv: "Je vous remercie." },
    { de: "Ihr erinnert euch.", lv: "Vous vous souvenez." },
  ];
  out.study.comparison = [
    {
      word: "ihr",
      meaning: "Vous",
      example: "Ihr seid nett. – Vous êtes aimables.",
    },
    {
      word: "euch",
      meaning: "Vous / à vous",
      example: "Ich helfe euch. – Je vous aide.",
    },
    {
      word: "euer",
      meaning: "Votre",
      example: "Das ist euer Haus. – C'est votre maison.",
    },
  ];
  out.study.info = [
    "ihr = vous (sujet)",
    "euch = vous (complément) / à vous",
    "euer = votre (possessif)",
  ];
  out.study.tip = {
    text: "\"euch\" répond à la question \"à qui ?\" ou est le complément direct des phrases avec « vous ».",
    example:
      "Je vous aide. = Ich helfe euch. Je vous vois. = Ich sehe euch. Je vous raconte. = Ich erzähle euch.",
  };
  out.study.important = [
    "euch est le complément pour « vous » (plusieurs personnes).",
    "ihr = vous (sujet), euch = vous (complément), euer = votre.",
  ];
  out.study.sectionAccents = {
    examples: [
      { de: { blue: ["euch"] }, lv: { purple: ["vous"] } },
      { de: { blue: ["euch"] }, lv: { purple: ["vous"] } },
      { de: { blue: ["euch"] }, lv: { purple: ["vous"] } },
    ],
    comparison: [
      { word: { green: ["euch"] }, meaning: { purple: ["vous"] } },
      { word: { green: ["ihr"] }, meaning: { purple: ["Vous"] } },
    ],
    tip: { left: { blue: ["euch"], purple: ["vous"] } },
    important: [{ blue: ["euch"], green: ["ihr"] }],
  };
}

function repairDas(out) {
  out.lv = "Le • Cela";
  out.study.translation = "Le • Cela";
  out.study.explanation =
    "Utilisé avec les noms neutres. Dans certaines phrases, das peut aussi être un pronom ou un pronom relatif.";
  out.study.examples = [
    { de: "Das ist mein Auto.", lv: "C'est ma voiture." },
    { de: "Das ist gut.", lv: "C'est bien." },
    {
      de: "Das Buch, das ich lese, ist interessant.",
      lv: "Le livre que je lis est intéressant.",
    },
  ];
  out.study.comparison = [
    {
      word: "das",
      meaning: "le/la/les (neutre) • cela",
      example: "Das ist mein Auto. – C'est ma voiture.",
    },
    {
      word: "dies",
      meaning: "ceci",
      example: "Dies ist mein Auto. – C'est ma voiture.",
    },
    {
      word: "welches",
      meaning: "que • lequel/laquelle",
      example:
        "Das ist das Buch, welches ich lese. – C'est le livre que je lis.",
    },
  ];
  out.study.tip = { text: "Rappel : genre neutre → das • que → dass." };
  out.study.important = [
    "Au niveau A1, das est d'abord un article du genre neutre.",
    "Das n'est pas dass : das peut être article ou pronom, dass introduit une proposition.",
  ];
  out.study.sectionAccents = {
    examples: [
      { de: { blue: ["Das"] }, lv: { purple: ["C'est"] } },
      { de: { blue: ["Das"] }, lv: { purple: ["bien"] } },
      {
        de: { blue: ["Das"], yellow: ["das"] },
        lv: { purple: ["que"] },
      },
    ],
    comparison: [
      { word: { green: ["das"] }, example: { blue: ["Das"] } },
      { word: { green: ["dies"] }, example: { green: ["Dies"] } },
      {
        word: { green: ["welches"] },
        example: { blue: ["welches"], yellow: ["lese"] },
      },
    ],
    tip: {
      left: { blue: ["das"], purple: ["Rappel"], red: ["dass"], green: ["neutre"] },
    },
    important: [{ blue: ["das"], purple: ["dass"] }],
  };
}

function repairDass(out) {
  out.lv = "Que";
  out.study.translation = "Que";
  out.study.explanation =
    "Introduit une proposition subordonnée qui exprime un fait, une pensée ou une déclaration.";
  out.study.examples = [
    { de: "Ich weiß, dass du müde bist.", lv: "Je sais que tu es fatigué." },
    { de: "Er sagt, dass er kommt.", lv: "Il dit qu'il vient." },
    { de: "Ich glaube, dass das stimmt.", lv: "Je pense que c'est vrai." },
  ];
  out.study.comparison = [
    {
      word: "dass",
      meaning: "que",
      example: "Ich weiß, dass er kommt. – Je sais qu'il vient.",
    },
    {
      word: "weil",
      meaning: "parce que",
      example:
        "Ich bleibe zu Hause, weil es regnet. – Je reste à la maison parce qu'il pleut.",
    },
    {
      word: "damit",
      meaning: "pour que",
      example:
        "Ich lerne Deutsch, damit ich in Deutschland arbeiten kann. – J'apprends l'allemand pour pouvoir travailler en Allemagne.",
    },
    {
      word: "ob",
      meaning: "si",
      example: "Ich weiß nicht, ob er kommt. – Je ne sais pas s'il vient.",
    },
  ];
  out.study.tip = { text: "Rappel : que → dass." };
  out.study.important = [
    "Dass introduit le contenu d'une pensée, d'un fait ou d'une déclaration.",
    "Ne pas confondre dass (que) avec das (article/pronom neutre).",
  ];
  out.study.sectionAccents = {
    examples: [
      { de: { blue: ["dass"] }, lv: { purple: ["que"] } },
      { de: { blue: ["dass"] }, lv: { purple: ["qu'il"] } },
      { de: { blue: ["dass"] }, lv: { purple: ["que"] } },
    ],
    comparison: [
      { word: { blue: ["dass"] }, meaning: { purple: ["que"] } },
      { word: { green: ["weil"] }, meaning: { purple: ["parce"] } },
    ],
    tip: { left: { blue: ["dass"], purple: ["Rappel"] } },
    important: [{ blue: ["dass"], red: ["das"] }],
  };
}

function repairEinmal(out) {
  out.lv = "Une fois";
  out.study.translation = "Une fois";
  out.study.explanation = [
    "Idée principale : indique une seule fois ou une situation passée (une fois, j'étais...).",
    "Einmal signifie essentiellement : une fois / dans le passé.",
    "Souvent caractérisé par : un moment dans le passé.",
    "Einmal renvoie à une seule occurrence ou au passé (une fois que...).",
  ];
  out.study.examples = [
    { de: "Ich war einmal in Berlin.", lv: "Je suis allé à Berlin une fois." },
    { de: "Ich war einmal in Berlin.", lv: "Je suis allé à Berlin une fois." },
  ];
  out.study.tip = [
    "Einmal = une fois",
    "Utilisez einmal lorsque le contexte correspond à ce sens.",
  ];
  out.study.important = [
    "Einmal = une fois ou une fois dans le passé.",
    "Renvoie à une seule occurrence ou au passé (une fois que j'étais...).",
  ];
  out.study.comparison = [
    {
      word: "einmal",
      meaning: "une fois / dans le passé",
      example: "Ich war einmal in Berlin. – Je suis allé à Berlin une fois.",
    },
    {
      word: "noch einmal",
      meaning: "encore une fois",
      example: "Sag das noch einmal. – Dis-le encore une fois.",
    },
  ];
  out.study.sectionAccents = {
    explanation: { green: ["einmal"], purple: ["fois"] },
    examples: [
      {
        de: { green: ["einmal"] },
        lv: { purple: ["Berlin"] },
      },
      {
        de: { green: ["einmal"] },
        lv: { purple: ["fois"] },
      },
    ],
    tip: [{ purple: ["Une", "fois"] }],
    important: [{ green: ["einmal"] }],
  };
}

function repairBesuch(out) {
  out.lv = "visite";
  out.study.translation = "visite";
  out.study.explanation = [
    "Idée principale : der Besuch signifie une visite (événement ou passage).",
    "Si on parle d'un lieu ou d'un événement, le mot approprié est visite.",
    "Si on parle de la visite d'une personne, on dit visite.",
    "Le pluriel est die Besuche.",
  ];
  out.study.comparison = [
    {
      word: "der Besuch",
      meaning: "visite",
      example: "Danke für deinen Besuch. – Merci de ta visite.",
    },
    {
      word: "der Besucher",
      meaning: "Visiteur",
      example: "Der Besucher wartet draußen. – Le visiteur attend dehors.",
    },
    {
      word: "besuchen",
      meaning: "Rendre visite",
      example: "Ich besuche meine Großeltern. – Je rends visite à mes grands-parents.",
    },
  ];
  out.study.tip = {
    text: "Rappel : Besuch = visite/événement ; Besucher = visiteur (personne).",
  };
  out.study.important = [
    "der Besuch peut désigner une visite chez quelqu'un ou une visite de lieu.",
    "Pluriel : die Besuche.",
  ];
  out.study.sectionAccents = {
    explanation: { blue: ["der Besuch"], purple: ["visite"] },
    examples: [
      {
        de: { blue: ["Besuch"], green: ["Museum"] },
        lv: { purple: ["visite"], green: ["musée"] },
      },
      {
        de: { blue: ["Besuch"] },
        lv: { purple: ["visite"] },
      },
      {
        de: { blue: ["Besuch"], green: ["Arzt"] },
        lv: { purple: ["visite"], green: ["médecin"] },
      },
    ],
    comparison: [
      {
        word: { green: ["der Besuch"] },
        meaning: { purple: ["visite"] },
      },
    ],
  };
}

function repairIns(out) {
  out.lv = "Vers où ? • Où ?";
  out.study.translation = "Vers où ? • Où ?";
  out.study.explanation = [
    "ins est la contraction de in + das.",
    "Forme complète : in das (vers où ?).",
    "Utilisé pour le mouvement vers l'intérieur — réponse à « vers où ? ».",
    "Souvent avec : gehen, fahren, kommen, legen, stecken.",
    "En pratique, on utilise presque toujours ins, pas in das.",
  ];
  out.study.examples = [
    { de: "Ich gehe ins Kino.", lv: "Je vais au cinéma." },
    { de: "Sie geht ins Bett.", lv: "Elle va se coucher." },
    { de: "Wir fahren ins Ausland.", lv: "Nous partons à l'étranger." },
    { de: "Komm ins Haus!", lv: "Viens à la maison !" },
    {
      de: "Er steckt das Geld in den Geldbeutel.",
      lv: "Il met l'argent dans son portefeuille.",
    },
    { de: "Wir gehen ins Museum.", lv: "Nous allons au musée." },
    { de: "Sie legt die Blumen ins Wasser.", lv: "Elle met les fleurs dans l'eau." },
    { de: "Fahr bitte ins Zentrum.", lv: "Va au centre, s'il te plaît." },
  ];
  out.study.comparison = [
    {
      word: "ins",
      meaning: "vers où ? (mouvement)",
      example: "Ich gehe ins Kino. – Je vais au cinéma.",
    },
    {
      word: "im",
      meaning: "où ? (emplacement)",
      example: "Ich bin im Kino. – Je suis au cinéma.",
    },
    {
      word: "in",
      meaning: "dans / vers (avec article séparé)",
      example: "in die Stadt – en ville / vers la ville",
    },
    {
      word: "aufs",
      meaning: "sur (mouvement)",
      example: "aufs Dach – sur le toit",
    },
    {
      word: "zum",
      meaning: "chez / vers (à qui ?)",
      example: "zum Arzt – chez le médecin",
    },
  ];
  out.study.tip = [
    "Rappel : in + das → ins (vers où ? — mouvement).",
    "Vers où ? → ins • Où ? → im — mouvement vs emplacement.",
  ];
  out.study.important = [
    "ins = in das : mouvement vers l'intérieur, réponse à « vers où ? ».",
    "im = in dem : emplacement, réponse à « où ? ».",
    "Ne pas confondre : ins Kino gehen (aller au cinéma) vs im Kino sein (être au cinéma).",
    "Au masculin : in den Wald ; au féminin : in die Schule.",
  ];
  out.study.sectionAccents = {
    explanation: { blue: ["ins", "in das"], purple: ["vers où", "où"] },
    examples: [
      { de: { blue: ["ins"] }, lv: { purple: ["vais"] } },
      { de: { blue: ["ins"] }, lv: { purple: ["couche"] } },
      { de: { blue: ["ins"] }, lv: { purple: ["étranger"] } },
    ],
    comparison: [
      { word: { blue: ["ins"] }, meaning: { purple: ["vers où"] } },
      { word: { green: ["im"] }, meaning: { purple: ["où"] } },
    ],
    tip: [{ left: { blue: ["ins"], purple: ["Rappel"], green: ["im"] } }],
    important: [{ blue: ["ins"], green: ["im"] }],
  };
}

function repairMachen(out) {
  out.lv = "Faire";
  out.study.translation = "Faire";
  out.study.explanation = [
    "Idée principale : machen est un mot très courant signifiant faire ou fabriquer.",
    "S'il s'agit d'action en général, cela se traduit par faire.",
    "Si quelque chose est fait ou préparé, cela se traduit par faire ou cuisiner.",
    "Dans de nombreuses expressions, machen se traduit naturellement en français.",
  ];
  out.study.tip = { text: "Rappel : Was machst du ? = Que fais-tu ?" };
  out.study.important = [
    "Machen est un mot très large ; le français doit souvent être traduit naturellement selon la situation.",
    "Das macht Spaß signifie « c'est amusant », pas littéralement « ça fait plaisir ».",
  ];
  out.study.comparison = [
    {
      word: "machen",
      meaning: "faire",
      example: "Was machst du? – Que fais-tu ?",
    },
    {
      word: "tun",
      meaning: "faire (action)",
      example: "Was tust du? – Que fais-tu ?",
    },
    {
      word: "herstellen",
      meaning: "fabriquer",
      example: "Wir machen Pizza. – Nous faisons une pizza.",
    },
  ];
  out.study.sectionAccents = {
    explanation: { blue: ["machen"], purple: ["faire"] },
    examples: [
      { de: { blue: ["machst"] }, lv: { purple: ["Que"] } },
      { de: { blue: ["mache"], yellow: ["Hausaufgaben"] }, lv: { purple: ["fais"] } },
      { de: { blue: ["machen"], yellow: ["Pizza"] }, lv: { purple: ["Nous"] } },
      { de: { blue: ["macht Spaß"] }, lv: { purple: ["C'est"] } },
    ],
    tip: { left: { blue: ["machen"], purple: ["Rappel"], green: ["faire"] } },
    important: [{ blue: ["machen"], purple: ["faire"] }],
  };
}

function repairNehmen(out) {
  out.lv = "Prendre";
  out.study.translation = "Prendre";
  out.study.explanation = [
    "Idée principale : nehmen signifie prendre.",
    "On utilise nehmen quand on prend quelque chose pour soi ou qu'on choisit.",
    "Ce n'est pas la même chose que bringen, qui signifie apporter à quelqu'un.",
    "holen signifie aller chercher puis ramener.",
  ];
  out.study.examples = [
    { de: "Ich nehme den Bus.", lv: "Je prends le bus." },
    { de: "Nimm das Buch!", lv: "Prends le livre !" },
    { de: "Ich bringe dir das Buch.", lv: "Je t'apporte le livre." },
    { de: "Ich hole dich ab.", lv: "Je viens te chercher." },
  ];
  out.study.comparison = [
    {
      word: "nehmen",
      meaning: "prendre",
      example: "Nimm das Buch! – Prends le livre !",
    },
    {
      word: "bringen",
      meaning: "apporter / amener",
      example: "Ich bringe dir das Buch. – Je t'apporte le livre.",
    },
    {
      word: "holen",
      meaning: "aller chercher",
      example: "Ich hole Wasser. – Je vais chercher de l'eau.",
    },
    {
      word: "mitnehmen",
      meaning: "emporter avec soi",
      example: "Ich nehme dich mit. – Je t'emmène avec moi.",
    },
  ];
  out.study.tip = { text: "Rappel : prendre pour soi → nehmen ; apporter à quelqu'un → bringen." };
  out.study.important = [
    "Ich nehme den Bus signifie « Je prends le bus » (je voyage en bus).",
    "Nehmen n'est pas la même chose que bringen.",
  ];
  out.study.sectionAccents = {
    explanation: { blue: ["nehmen"], purple: ["Prendre"], red: ["bringen", "holen"] },
    examples: [
      { de: { blue: ["nehme"], yellow: ["Bus"] }, lv: { purple: ["prends"] } },
      { de: { blue: ["Nimm"] }, lv: { purple: ["Prends"] } },
      { de: { blue: ["bringe"] }, lv: { purple: ["apporte"] } },
      { de: { blue: ["hole"] }, lv: { purple: ["chercher"] } },
    ],
    comparison: [{ word: { green: ["nehmen"] }, meaning: { purple: ["prendre"] } }],
    tip: { left: { blue: ["nehmen"], purple: ["Rappel"], red: ["bringen"] } },
    important: [{ blue: ["nehmen"], red: ["bringen"] }],
  };
}

function repairPassen(out) {
  out.lv = "Aller • Convenir";
  out.study.translation = "Aller • Convenir";
  out.study.explanation = [
    "Idée principale : passen signifie aller, convenir ou correspondre.",
    "Pour les vêtements, passen signifie souvent aller à la taille.",
    "Pour les couleurs ou le style, passen signifie convenir.",
    "Une expression très courante est Das passt. = Ça convient.",
  ];
  out.study.comparison = [
    { word: "passen", meaning: "Aller / convenir", example: "Die Jacke passt mir. – La veste me va." },
    { word: "stehen", meaning: "Aller (style)", example: "Rot steht dir. – Le rouge te va bien." },
    { word: "geeignet sein", meaning: "Être convenable", example: "Das ist geeignet. – C'est approprié." },
    { word: "funktionieren", meaning: "Fonctionner", example: "Das funktioniert. – Ça marche." },
  ];
  out.study.tip = { text: "Rappel : Das passt. = Ça convient." };
  out.study.important = [
    "Passen ne concerne pas seulement les vêtements.",
    "Cela peut aussi signifier que le moment, le plan ou la solution conviennent.",
  ];
  out.study.sectionAccents = {
    explanation: { blue: ["passen"], purple: ["Aller", "Convenir"] },
    examples: [
      { de: { blue: ["passt"], yellow: ["Jacke"] }, lv: { purple: ["veste"] } },
      { de: { blue: ["passt"], yellow: ["Kleid"] }, lv: { purple: ["robe"] } },
      { de: { blue: ["passt"], yellow: ["Farbe"] }, lv: { purple: ["couleur"] } },
      { de: { blue: ["Das passt"] }, lv: { purple: ["Cela"] } },
    ],
    comparison: [
      {
        word: { green: ["passen"] },
        meaning: { purple: ["Aller", "Convenir"] },
      },
    ],
    tip: { left: { blue: ["passt"], purple: ["Rappel"] } },
    important: [{ blue: ["passen"], purple: ["convenir"] }],
  };
}

function repairWer(out) {
  out.lv = "Qui";
  out.study.translation = "Qui";
  out.study.explanation = [
    "Idée principale : wer est un mot interrogatif sur l'identité d'une personne.",
    "On pose des questions sur des personnes, pas sur des choses ou des événements.",
    "Pour les choses et les événements, on utilise was, pas wer.",
    "En allemand, wer est en général le sujet de la phrase (nominatif) — Wer ist das ? = Qui est-ce ?",
    "Pour demander laquelle parmi plusieurs personnes, wer s'emploie souvent avec von (wer von euch = lequel d'entre vous).",
    "Wer change de forme selon le cas : wen (accusatif), wem (datif), wessen (génitif) — au niveau A1, wer reste la forme la plus courante.",
  ];
  out.study.examples = [
    { de: "Wer ist das?", lv: "Qui est-ce ?" },
    { de: "Wer bist du?", lv: "Qui es-tu ?" },
    { de: "Wer kommt heute?", lv: "Qui vient aujourd'hui ?" },
    { de: "Wer ist deine Lehrerin?", lv: "Qui est ton professeur ?" },
    { de: "Wer von euch spricht Deutsch?", lv: "Lequel d'entre vous parle allemand ?" },
    { de: "Wer hat das gesagt?", lv: "Qui a dit ça ?" },
    { de: "Wer möchte Kaffee?", lv: "Qui veut du café ?" },
  ];
  out.study.tip = [
    "Wer pose des questions sur des personnes — pour les choses et les événements, on utilise was.",
    "Pour un choix entre plusieurs personnes : wer von... (lequel de...).",
  ];
  out.study.important = [
    "Wer ne concerne que les personnes, jamais les choses.",
    "Pour les choses et les événements, on utilise was, pas wer.",
    "Wer se décline : wen, wem, wessen — la forme de base est wer.",
    "Incorrect : Wer ist passiert? → Correct : Was ist passiert?",
  ];
  out.study.comparison = [
    {
      word: "wer",
      meaning: "qui (personnes)",
      example: "Wer ist das? – Qui est-ce ?",
    },
    {
      word: "was",
      meaning: "quoi (choses)",
      example: "Was ist das? – Qu'est-ce que c'est ?",
    },
    {
      word: "wen",
      meaning: "qui (accusatif)",
      example: "Wen siehst du? – Qui vois-tu ?",
    },
  ];
  out.study.sectionAccents = {
    explanation: { blue: ["wer"], purple: ["Qui"] },
    examples: [
      { de: { blue: ["Wer"] }, lv: { purple: ["Qui"] } },
      { de: { blue: ["Wer"] }, lv: { purple: ["Qui"] } },
      { de: { blue: ["Wer"] }, lv: { purple: ["Qui"] } },
      { de: { blue: ["Wer"] }, lv: { purple: ["Qui"] } },
      { de: { blue: ["Wer"] }, lv: { purple: ["Lequel"] } },
      { de: { blue: ["Wer"] }, lv: { purple: ["Qui"] } },
      { de: { blue: ["Wer"] }, lv: { purple: ["Qui"] } },
    ],
    tip: [{ purple: ["Qui"], blue: ["wer"] }],
    important: [
      { blue: ["wer"], purple: ["sujet", "nominatif"] },
      { blue: ["was"], green: ["choses"] },
      { blue: ["wer"], purple: ["wen", "wem", "wessen"] },
    ],
  };
}

function repairZum(out) {
  out.lv = "À • Chez";
  out.study.translation = "À • Chez";
  out.study.explanation = [
    "zum est la contraction de zu + dem.",
    "Forme complète : zu dem (à qui ? / chez qui ?).",
    "Utilisé avec les noms masculins et neutres pour indiquer une direction ou un but.",
    "Signifie souvent chez quelqu'un ou vers quelque chose : chez le médecin, à la gare, chez un ami.",
    "En pratique, on utilise presque toujours zum, pas zu dem.",
  ];
  out.study.examples = [
    { de: "Ich gehe zum Arzt.", lv: "Je vais chez le médecin." },
    { de: "Wir fahren zum Bahnhof.", lv: "Nous allons à la gare." },
    { de: "Sie geht zum Supermarkt.", lv: "Elle va au supermarché." },
    { de: "Komm zum Essen!", lv: "Viens manger !" },
    { de: "Er fährt zum Flughafen.", lv: "Il va à l'aéroport." },
    { de: "Wir gehen zum Konzert.", lv: "Nous allons au concert." },
    { de: "Das Geschenk ist zum Geburtstag.", lv: "Le cadeau est pour l'anniversaire." },
    { de: "Ich gehe zum Friseur.", lv: "Je vais chez le coiffeur." },
  ];
  out.study.comparison = [
    {
      word: "zum",
      meaning: "à / chez (à qui ?)",
      example: "zum Arzt – chez le médecin",
    },
    {
      word: "zur",
      meaning: "à / chez (féminin)",
      example: "zur Schule – à l'école",
    },
    {
      word: "zu",
      meaning: "à / chez / trop",
      example: "zu Hause – à la maison",
    },
    {
      word: "nach",
      meaning: "vers (villes/pays)",
      example: "nach Berlin – à Berlin",
    },
    {
      word: "bei",
      meaning: "chez (emplacement)",
      example: "beim Arzt – chez le médecin",
    },
  ];
  out.study.tip = [
    "Rappel : zu + dem → zum (à qui ?).",
    "Pour les noms féminins : zu + der → zur.",
  ];
  out.study.important = [
    "zum = zu dem, avec un nom masculin ou neutre à l'accusatif/datif selon le contexte.",
    "Indique une direction ou un but : chez le médecin, à la gare, chez un ami.",
    "Au féminin : zur Bank, zur Post.",
    "Ne pas confondre avec bei (être chez) ou nach (vers des villes sans article).",
  ];
  out.study.sectionAccents = {
    explanation: { blue: ["zum", "zu dem"], purple: ["à", "chez"] },
    examples: [
      { de: { blue: ["zum"] }, lv: { purple: ["médecin"] } },
      { de: { blue: ["zum"] }, lv: { purple: ["gare"] } },
      { de: { blue: ["zum"] }, lv: { purple: ["supermarché"] } },
    ],
    comparison: [
      { word: { blue: ["zum"] }, meaning: { purple: ["chez"] } },
      { word: { green: ["zur"] }, meaning: { purple: ["école"] } },
    ],
    tip: [{ left: { blue: ["zum"], purple: ["Rappel"], green: ["zur"] } }],
    important: [{ blue: ["zum"], green: ["zur"] }],
  };
}

function repairZu(out) {
  out.lv = "À • Chez";
  out.study.translation = "À • Chez";
  out.study.explanation = [
    "Idée principale : zu signifie très souvent à ou chez, mais il a aussi d'autres emplois.",
    "Avec des personnes et des institutions, zu signifie souvent chez ou vers.",
    "Avec des adjectifs, zu peut signifier trop.",
    "Dans zu + infinitif, il forme l'infinitif : zu lernen, zu gehen.",
  ];
  out.study.examples = [
    { de: "Ich gehe zum Arzt.", lv: "Je vais chez le médecin." },
    { de: "Wir gehen zur Schule.", lv: "Nous allons à l'école." },
    { de: "Das ist zu teuer.", lv: "C'est trop cher." },
    { de: "Ich habe keine Zeit zu lernen.", lv: "Je n'ai pas le temps d'apprendre." },
  ];
  out.study.comparison = [
    {
      word: "zu",
      meaning: "à / chez / trop / infinitif",
      example: "Ich gehe zum Arzt. – Je vais chez le médecin.",
    },
    {
      word: "nach",
      meaning: "vers (villes/pays)",
      example: "Ich fahre nach Berlin. – Je vais à Berlin.",
    },
    {
      word: "in",
      meaning: "dans / vers",
      example: "Ich gehe in die Schule. – Je vais à l'école.",
    },
    {
      word: "bei",
      meaning: "chez / au travail de",
      example: "Ich bin bei Anna. – Je suis chez Anna.",
    },
  ];
  out.study.tip = {
    text: "Rappel : chez le médecin → zum Arzt ; trop cher → zu teuer.",
  };
  out.study.important = [
    "zu a de nombreux emplois — toujours regarder la construction.",
    "zu teuer signifie « trop cher », pas « vers cher ».",
  ];
  out.study.sectionAccents = {
    explanation: { blue: ["zu"], purple: ["à", "chez", "trop"] },
    examples: [
      { de: { blue: ["zum"] }, lv: { purple: ["médecin"] } },
      { de: { blue: ["zur"] }, lv: { purple: ["école"] } },
      { de: { blue: ["zu"] }, lv: { purple: ["trop"] } },
      { de: { blue: ["zu"] }, lv: { purple: ["apprendre"] } },
    ],
    comparison: [{ word: { green: ["zu"] }, meaning: { purple: ["à"] } }],
    tip: { left: { blue: ["zu"], purple: ["Rappel"] } },
    important: [{ blue: ["zu"], purple: ["trop"] }],
  };
}

function repairAber(out) {
  out.lv = "Mais";
  out.study.translation = "Mais";
  out.study.explanation =
    "Utilisé pour introduire un contraste ou exprimer une objection. Signifie souvent « mais », « cependant » ou « toutefois ».";
  out.study.examples = [
    {
      de: "Ich möchte mitkommen, aber ich habe keine Zeit.",
      lv: "Je voudrais venir, mais je n'ai pas le temps.",
    },
    {
      de: "Das Essen war lecker, aber zu teuer.",
      lv: "Le repas était bon, mais trop cher.",
    },
    {
      de: "Er hat recht, aber ich sehe das anders.",
      lv: "Il a raison, mais je vois les choses différemment.",
    },
  ];
  out.study.comparison = [
    {
      word: "aber",
      meaning: "mais / cependant",
      example: "Ich komme, aber später. – Je viens, mais plus tard.",
    },
    {
      word: "sondern",
      meaning: "mais / mais plutôt",
      example:
        "Ich wollte keinen Tee, sondern Kaffee. – Je ne voulais pas de thé, mais du café.",
    },
    {
      word: "jedoch",
      meaning: "cependant",
      example: "Es ist kalt, jedoch sonnig. – Il fait froid, mais il y a du soleil.",
    },
  ];
  out.study.tip = { text: "Rappel : contraste → aber." };
  out.study.important = [
    "Aber introduit un contraste entre deux idées.",
    "Ne pas confondre aber (mais) et sondern (mais plutôt, après une négation).",
  ];
  out.study.sectionAccents = {
    examples: [
      { de: { blue: ["aber"] }, lv: { purple: ["mais"] } },
      { de: { blue: ["aber"] }, lv: { purple: ["mais"] } },
      { de: { blue: ["aber"] }, lv: { purple: ["mais"] } },
    ],
    comparison: [{ word: { green: ["aber"] }, meaning: { purple: ["mais"] } }],
    tip: { left: { green: ["aber"], purple: ["Rappel", "contraste"] } },
    important: [{ green: ["aber"], purple: ["contraste"] }],
  };
}

function repairAb(out) {
  out.lv = "À partir de";
  out.study.translation = "À partir de";
  out.study.explanation =
    "Utilisé quand quelque chose commence à un moment, un lieu ou un point précis. Signifie souvent « à partir de ».";
  out.study.examples = [
    { de: "ab heute", lv: "à partir d'aujourd'hui" },
    { de: "ab Montag", lv: "à partir de lundi" },
    { de: "ab 8 Uhr", lv: "à partir de 8 heures" },
    { de: "ab Bahnhof", lv: "à partir de la gare" },
  ];
  out.study.comparison = [
    {
      word: "ab",
      meaning: "à partir de (point/temps)",
      example: "ab Montag – à partir de lundi",
    },
    {
      word: "von",
      meaning: "de / depuis (origine)",
      example: "von mir – de ma part",
    },
    {
      word: "aus",
      meaning: "de / hors de",
      example: "aus dem Haus – de la maison / hors de la maison",
    },
  ];
  out.study.tip = { text: "Rappel : point de départ dans le temps ou le lieu → ab." };
  out.study.important = [
    "Ab marque le point de départ dans le temps ou le lieu.",
    "Si l'idée vient de l'intérieur ou sort vers l'extérieur, on utilise plutôt von ou aus.",
  ];
  out.study.sectionAccents = {
    examples: [
      { de: { blue: ["ab"] }, lv: { purple: ["partir"] } },
      { de: { blue: ["ab"] }, lv: { purple: ["lundi"] } },
      { de: { blue: ["ab"] }, lv: { purple: ["heures"] } },
      { de: { blue: ["ab"] }, lv: { purple: ["gare"] } },
    ],
    comparison: [
      { word: { blue: ["ab"] }, meaning: { purple: ["partir"] } },
      { word: { green: ["von"] }, meaning: { purple: ["de"] } },
    ],
    tip: { left: { blue: ["ab"], purple: ["Rappel"], green: ["départ"] } },
    important: [{ blue: ["ab"], green: ["von", "aus"] }],
  };
}

function repairEin(out) {
  out.lv = "Un • Un";
  out.study.translation = "Un • Un";
  out.study.explanation = [
    "Idée principale : ein est l'article indéfini.",
    "ein s'utilise au masculin et au neutre au nominatif.",
    "ein s'utilise au masculin : ein Mann.",
    "ein s'utilise au neutre : ein Buch.",
    "Au féminin : eine. À l'accusatif masculin : einen.",
  ];
  out.study.examples = [
    { de: "Ein Mann wartet draußen.", lv: "Un homme attend dehors." },
    { de: "Ich habe ein Buch.", lv: "J'ai un livre." },
    { de: "Er sucht einen Stift.", lv: "Il cherche un stylo." },
    { de: "Ein Kind spielt.", lv: "Un enfant joue." },
  ];
  out.study.comparison = [
    {
      word: "ein Mann",
      meaning: "masculin",
      example: "Ein Mann wartet draußen. – Un homme attend dehors.",
    },
    {
      word: "eine Frau",
      meaning: "féminin",
      example: "eine Frau – une femme",
    },
    {
      word: "ein Buch",
      meaning: "neutre",
      example: "Ich habe ein Buch. – J'ai un livre.",
    },
    {
      word: "einen Mann",
      meaning: "accusatif",
      example: "einen Mann – un homme (acc.)",
    },
  ];
  out.study.tip = {
    text: "Rappel : ein n'est pas seulement « un » — c'est souvent l'article indéfini.",
  };
  out.study.important = [
    "Ein change selon le genre et le cas : ein, eine, einen.",
    "Au niveau A1, ein = un article indéfini ou « un/une ».",
  ];
  out.study.sectionAccents = {
    explanation: { blue: ["ein"], purple: ["Un"] },
    examples: [
      { de: { blue: ["Ein"] }, lv: { purple: ["homme"] } },
      { de: { blue: ["ein"] }, lv: { purple: ["livre"] } },
      { de: { blue: ["einen"] }, lv: { purple: ["stylo"] } },
      { de: { blue: ["Ein"] }, lv: { purple: ["enfant"] } },
    ],
    comparison: [
      { word: { green: ["ein"] }, meaning: { purple: ["masculin"] } },
      { word: { green: ["eine"] }, meaning: { purple: ["féminin"] } },
    ],
    tip: { left: { blue: ["ein"], purple: ["Rappel"] } },
    important: [{ blue: ["ein"], green: ["eine", "einen"] }],
  };
}

function repairFuer(out) {
  out.lv = "Pour";
  out.study.translation = "Pour";
  out.study.explanation = [
    "Idée principale : für est une préposition qui régit toujours l'accusatif — généralement pour.",
    "Lorsqu'on parle de destinataire ou d'intention, für = pour (für dich = pour toi).",
    "Lorsqu'on parle d'échange, de frais ou de motif, für = pour (danke für das Geschenk = merci pour le cadeau).",
    "Für nécessite toujours l'accusatif, quelle que soit sa signification.",
  ];
  out.study.examples = [
    { de: "Das ist für dich.", lv: "C'est pour toi." },
    { de: "Danke für die Hilfe.", lv: "Merci pour l'aide." },
    {
      de: "Ich kaufe ein Geschenk für meine Mutter.",
      lv: "J'achète un cadeau pour ma mère.",
    },
    { de: "Was bezahlst du für das Auto?", lv: "Combien paies-tu pour la voiture ?" },
    { de: "Das Buch ist für Kinder.", lv: "Le livre est pour les enfants." },
    { de: "Für heute ist das genug.", lv: "Pour aujourd'hui, c'est suffisant." },
  ];
  out.study.tip = [
    "für exige toujours l'accusatif — quelle que soit la signification.",
    "Destinataire/intention → pour ; échange/raison/prix → pour.",
  ];
  out.study.important = [
    "für + accusatif toujours : für mich, für dich, für das Kind.",
    "danke für / bezahlen für = « pour », pas un autre sens.",
  ];
  out.study.comparison = [
    {
      word: "für",
      meaning: "pour (destinataire)",
      example: "Das ist für dich. – C'est pour toi.",
    },
    {
      word: "für",
      meaning: "pour (raison/prix)",
      example: "Danke für die Hilfe. – Merci pour l'aide.",
    },
    {
      word: "um",
      meaning: "pour / autour de",
      example: "Ich kämpfe um Freiheit. – Je me bats pour la liberté.",
    },
  ];
  out.study.sectionAccents = {
    explanation: { blue: ["für"], purple: ["Pour"] },
    examples: [
      { de: { blue: ["für"] }, lv: { purple: ["pour"] } },
      { de: { green: ["für"] }, lv: { purple: ["pour"] } },
      { de: { blue: ["für"] }, lv: { purple: ["pour"] } },
    ],
    comparison: [{ word: { blue: ["für"] }, meaning: { purple: ["pour"] } }],
    tip: [{ blue: ["für"], purple: ["accusatif"] }],
    important: [{ blue: ["für"], purple: ["pour"] }],
  };
}

function repairEis(out) {
  out.lv = "Glace • Crème glacée";
  out.study.translation = "Glace • Crème glacée";
  out.study.examples = [
    { de: "Ich esse ein Eis.", lv: "Je mange une glace." },
    { de: "Möchtest du ein Eis?", lv: "Veux-tu une glace ?" },
    { de: "Im Winter liegt Eis auf dem See.", lv: "En hiver, il y a de la glace sur le lac." },
    { de: "Das Eis ist kalt.", lv: "La glace est froide." },
    { de: "Ich nehme ein Eis mit Schokolade.", lv: "Je prendrai une glace au chocolat." },
  ];
  out.study.explanation = [
    "Idée principale : das Eis peut signifier à la fois glace (eau gelée) et crème glacée.",
    "Lorsqu'il s'agit d'eau froide et gelée, on parle de glace.",
    "Lorsqu'il s'agit de nourriture ou de dessert, das Eis signifie très souvent crème glacée.",
    "Le contexte indique généralement immédiatement quelle signification est voulue.",
    "Au niveau A1, les phrases les plus importantes sont ein Eis essen et Eis im Glas.",
  ];
  out.study.comparison = [
    {
      word: "das Eis",
      meaning: "Glace / crème glacée",
      example: "Ich esse ein Eis. – Je mange une glace.",
    },
    {
      word: "der Schnee",
      meaning: "Neige",
      example: "Der Schnee ist weiß. – La neige est blanche.",
    },
    {
      word: "kalt",
      meaning: "Froid",
      example: "Das Wasser ist kalt. – L'eau est froide.",
    },
    {
      word: "das Dessert",
      meaning: "Dessert",
      example: "Das Eis ist ein Dessert. – La glace est un dessert.",
    },
  ];
  out.study.important = [
    "En français, glace et crème glacée sont deux mots, mais en allemand das Eis couvre souvent les deux.",
    "Le contexte est essentiel : nourriture → crème glacée, hiver/eau → glace.",
  ];
  out.study.tip = {
    text: "Rappel : nourriture → crème glacée • hiver/eau → glace.",
  };
  out.study.sectionAccents = {
    explanation: { blue: ["Eis"], purple: ["glace", "crème glacée"] },
    examples: [
      { de: { blue: ["Eis"] }, lv: { purple: ["glace"] } },
      { de: { blue: ["Eis"] }, lv: { purple: ["crème glacée"] } },
      { de: { blue: ["Eis"] }, lv: { purple: ["glace"] } },
    ],
    comparison: [
      { word: { blue: ["Eis"] }, meaning: { purple: ["glace"] } },
    ],
    tip: { left: { blue: ["Eis"], purple: ["Rappel"] } },
    important: [{ blue: ["Eis"], purple: ["contexte"] }],
  };
}

function repairEs(out) {
  out.lv = "Il • Cela • Forme impersonnelle";
  out.study.translation = "Il • Cela • Forme impersonnelle";
  out.study.explanation = [
    "Idée principale : es est un pronom.",
    "On l'utilise pour cela ou dans les constructions impersonnelles (Il pleut, Il neige).",
  ];
  out.study.examples = [
    { de: "Es regnet.", lv: "Il pleut." },
    { de: "Es ist kalt.", lv: "Il fait froid." },
    { de: "Das Kind schläft.", lv: "L'enfant dort." },
    { de: "Es ist müde.", lv: "Il/Elle est fatigué(e)." },
  ];
  out.study.info = [
    "es (allemand) = il / cela / forme impersonnelle",
    "ich (allemand) = je",
  ];
  out.study.tip = {
    text: "Rappel : es = il/cela/impersonnel ; ich = je.",
  };
  out.study.important = [
    "Es regnet et Es schneit sont des phrases impersonnelles courantes.",
    "Es ist kalt / Es ist müde décrivent un état ou une condition.",
  ];
  out.study.comparison = [
    {
      word: "es",
      meaning: "cela • forme impersonnelle",
      example: "Es regnet. – Il pleut.",
    },
    {
      word: "ich",
      meaning: "je (personne)",
      example: "Ich lerne Deutsch. – J'apprends l'allemand.",
    },
  ];
  out.study.sectionAccents = {
    examples: [
      { de: { blue: ["Es"] }, lv: { purple: ["Il"] } },
      { de: { blue: ["Es"] }, lv: { purple: ["froid"] } },
      { de: { blue: ["Kind"] }, lv: { purple: ["enfant"] } },
      { de: { blue: ["Es"] }, lv: { purple: ["fatigué"] } },
    ],
    comparison: [
      { word: { blue: ["es"] }, example: { blue: ["Es regnet"] } },
      { word: { blue: ["ich"] }, example: { blue: ["Ich lerne"] } },
    ],
    tip: { left: { blue: ["es"], purple: ["Rappel"], green: ["impersonnel"] } },
  };
}

function repairLang(out) {
  out.lv = "Long • Longtemps";
  out.study.translation = "Long • Longtemps";
  out.study.explanation = [
    "Idée principale : lang signifie long dans l'espace ou long dans le temps.",
    "Pour la taille ou la distance : lang = long (ein langer Tisch = une longue table).",
    "Pour la durée : lang = long / de longue durée (ein langer Tag = une longue journée).",
    "Dans l'expression den ganzen Tag lang, cela signifie toute la journée.",
    "En français, on distingue souvent long (taille) et longtemps (durée), mais l'allemand lang couvre les deux sens.",
  ];
  out.study.examples = [
    { de: "Der Tisch ist sehr lang.", lv: "La table est très longue." },
    { de: "Der Film war sehr lang.", lv: "Le film était très long." },
    { de: "Wie lange dauert es?", lv: "Combien de temps ça dure ?" },
    { de: "Sie hat lange Haare.", lv: "Elle a les cheveux longs." },
    { de: "Ich warte schon lange.", lv: "J'attends depuis longtemps." },
    { de: "Den ganzen Tag lang.", lv: "Toute la journée." },
  ];
  out.study.tip = [
    "Pour la taille ou la distance (cheveux, route, table) → long.",
    "Pour le temps (jour, attente, film) → long / longtemps.",
  ];
  out.study.important = [
    "Lang = long (taille) OU long / de longue durée (temps), selon le contexte.",
    "Wie lange = combien de temps (question sur la durée, pas la taille).",
  ];
  out.study.comparison = [
    {
      word: "lang",
      meaning: "long (taille)",
      example: "Der Tisch ist sehr lang. – La table est très longue.",
    },
    {
      word: "lang",
      meaning: "long (durée)",
      example: "Der Film war sehr lang. – Le film était très long.",
    },
    {
      word: "lange",
      meaning: "longtemps",
      example: "Ich warte schon lange. – J'attends depuis longtemps.",
    },
  ];
  out.study.sectionAccents = {
    explanation: { blue: ["lang"], purple: ["long", "longtemps"] },
    examples: [
      { de: { blue: ["lang"] }, lv: { purple: ["longue"] } },
      { de: { green: ["lang"] }, lv: { purple: ["long"] } },
      { de: { green: ["lange"] }, lv: { purple: ["temps"] } },
      { de: { blue: ["lange"] }, lv: { purple: ["longs"] } },
      { de: { green: ["lange"] }, lv: { purple: ["longtemps"] } },
      { de: { green: ["lang"] }, lv: { purple: ["journée"] } },
    ],
    tip: [{ purple: ["long"], green: ["longtemps"] }],
    important: [{ blue: ["lang"], purple: ["taille", "temps"] }],
  };
}

function repairOder(out) {
  out.lv = "Ou";
  out.study.translation = "Ou";
  out.study.explanation = [
    "Idée principale : oder est utilisé lorsque nous choisissons entre deux ou plusieurs options.",
    "En allemand, oder signifie le plus souvent ou.",
    "Ce n'est pas la même chose que ob, qui introduit une question indirecte.",
    "Dans les conversations, oder peut aussi être à la fin de la phrase : Du kommst, oder ?",
  ];
  out.study.examples = [
    { de: "Kaffee oder Tee?", lv: "Café ou thé ?" },
    { de: "Heute oder morgen?", lv: "Aujourd'hui ou demain ?" },
    { de: "Willst du Pizza oder Salat?", lv: "Tu veux une pizza ou une salade ?" },
    { de: "Du kommst, oder?", lv: "Tu viens, n'est-ce pas ?" },
  ];
  out.study.comparison = [
    {
      word: "oder",
      meaning: "ou (choix)",
      example: "Kaffee oder Tee? – Café ou thé ?",
    },
    {
      word: "ob",
      meaning: "si (question indirecte)",
      example: "Ich weiß nicht, ob er kommt. – Je ne sais pas s'il vient.",
    },
    {
      word: "und",
      meaning: "et",
      example: "Kaffee und Kuchen. – Café et gâteau.",
    },
    {
      word: "aber",
      meaning: "mais",
      example: "Ich komme, aber später. – Je viens, mais plus tard.",
    },
  ];
  out.study.tip = { text: "Rappel : choisir entre des options → oder." };
  out.study.important = [
    "Oder relie deux options entre lesquelles on choisit : Kaffee oder Tee.",
    "Dans une question indirecte, on utilise ob, pas oder.",
  ];
  out.study.sectionAccents = {
    explanation: { blue: ["oder"], purple: ["ou"] },
    examples: [
      { de: { blue: ["oder"], yellow: ["Kaffee", "Tee"] }, lv: { purple: ["ou"] } },
      { de: { blue: ["oder"] }, lv: { purple: ["ou"] } },
      { de: { blue: ["oder"] }, lv: { purple: ["ou"] } },
      { de: { blue: ["oder"] }, lv: { purple: ["n'est-ce pas"] } },
    ],
    comparison: [
      { word: { green: ["oder"] }, meaning: { purple: ["ou"] } },
      { word: { green: ["ob"] }, meaning: { purple: ["si"] } },
    ],
    tip: { left: { blue: ["oder"], purple: ["Rappel"] } },
    important: [{ blue: ["oder"], green: ["ob"] }],
  };
}

function repairNur(out) {
  out.lv = "Seulement";
  out.study.translation = "Seulement";
  out.study.explanation = [
    "Idée principale : limite la quantité, le nombre de personnes, le choix ou les options.",
    "Nur signifie essentiellement : quantité ou choix limité.",
    "Décrit souvent : combien, exactement, ou qui est le seul.",
    "Nur signifie seulement, uniquement, rien de plus : cela limite la quantité ou le choix.",
  ];
  out.study.examples = [
    { de: "Ich habe nur zehn Euro.", lv: "Je n'ai que dix euros." },
    { de: "Nur du kannst mir helfen.", lv: "Toi seul peux m'aider." },
    { de: "Ich möchte nur Kaffee.", lv: "Je veux seulement du café." },
    { de: "Ich habe nur acht Euro.", lv: "Je n'ai que huit euros." },
  ];
  out.study.comparison = [
    {
      word: "nur",
      meaning: "seulement / uniquement",
      example: "Ich habe nur zehn Euro. – Je n'ai que dix euros.",
    },
    {
      word: "auch",
      meaning: "aussi",
      example: "Ich trinke auch Kaffee. – Je bois aussi du café.",
    },
    {
      word: "schon",
      meaning: "déjà",
      example: "Ich habe schon gegessen. – J'ai déjà mangé.",
    },
  ];
  out.study.tip = [
    "Limite la quantité, le nombre de personnes, le choix ou les options.",
    "Utilisez nur lorsque le contexte correspond à ce sens.",
  ];
  out.study.important = [
    "Seulement en français ne correspond pas toujours à nur en allemand.",
    "Nur = uniquement / exclusivement.",
  ];
  out.study.sectionAccents = {
    explanation: { orange: ["nur"], purple: ["seulement"] },
    examples: [
      { de: { orange: ["nur"] }, lv: { purple: ["que"] } },
      { de: { orange: ["Nur"] }, lv: { purple: ["seul"] } },
      { de: { orange: ["nur"] }, lv: { purple: ["seulement"] } },
      { de: { orange: ["nur"] }, lv: { purple: ["que"] } },
    ],
    comparison: [{ word: { orange: ["nur"] }, meaning: { purple: ["seulement"] } }],
    tip: [{ purple: ["seulement"], orange: ["nur"] }],
    important: [{ orange: ["nur"], purple: ["uniquement"] }],
  };
}

function repairBringen(out) {
  out.lv = "Apporter • Amener";
  out.study.translation = "Apporter • Amener";
  out.study.explanation = [
    "Idée principale : bringen signifie apporter, transporter ou livrer quelque chose à quelqu'un.",
    "Bringen s'utilise quand quelque chose est déplacé vers un autre endroit ou vers une autre personne.",
    "Ce n'est pas la même chose que nehmen, qui signifie prendre pour soi.",
    "holen signifie aller chercher puis ramener.",
  ];
  out.study.examples = [
    { de: "Ich bringe dir ein Buch.", lv: "Je t'apporte un livre." },
    { de: "Ich bringe das Paket zur Post.", lv: "J'apporte le colis à la poste." },
    { de: "Ich bringe die Kinder zur Schule.", lv: "J'emmène les enfants à l'école." },
    { de: "Ich nehme das Buch.", lv: "Je prends le livre." },
  ];
  out.study.comparison = [
    {
      word: "bringen",
      meaning: "Apporter / amener",
      example: "Ich bringe dir ein Buch. – Je t'apporte un livre.",
    },
    {
      word: "nehmen",
      meaning: "Prendre",
      example: "Ich nehme das Buch. – Je prends le livre.",
    },
    {
      word: "holen",
      meaning: "Aller chercher",
      example: "Ich hole Wasser. – Je vais chercher de l'eau.",
    },
    {
      word: "mitbringen",
      meaning: "Apporter avec soi",
      example: "Bringst du Brot mit? – Tu apportes du pain ?",
    },
  ];
  out.study.tip = {
    text: "Rappel : apporter à quelqu'un → bringen • prendre pour soi → nehmen.",
  };
  out.study.important = [
    "Bringen montre la direction vers quelqu'un ou un lieu.",
    "Nehmen signifie prendre, pas nécessairement livrer à un autre.",
    "La traduction française dépend du contexte.",
  ];
  out.study.sectionAccents = {
    explanation: { blue: ["bringen"], purple: ["Apporter"] },
    examples: [
      { de: { blue: ["bringe"] }, lv: { purple: ["apporte"] } },
      { de: { blue: ["bringe"] }, lv: { purple: ["apporte"] } },
      { de: { blue: ["bringe"] }, lv: { purple: ["emmène"] } },
    ],
    comparison: [
      { word: { green: ["bringen"] }, meaning: { purple: ["apporter"] } },
      { word: { green: ["nehmen"] }, meaning: { purple: ["prendre"] } },
    ],
    tip: { left: { blue: ["bringen"], purple: ["Rappel"], red: ["nehmen"] } },
    important: [{ blue: ["bringen"], red: ["nehmen"] }],
  };
}

const REPAIRS = {
  an: repairAn,
  Appetit: repairAppetit,
  bitte: repairBitte,
  bis: repairBis,
  euch: repairEuch,
  das: repairDas,
  dass: repairDass,
  einmal: repairEinmal,
  Besuch: repairBesuch,
  ins: repairIns,
  machen: repairMachen,
  nehmen: repairNehmen,
  passen: repairPassen,
  wer: repairWer,
  zum: repairZum,
  zu: repairZu,
  aber: repairAber,
  ab: repairAb,
  ein: repairEin,
  für: repairFuer,
  Eis: repairEis,
  es: repairEs,
  lang: repairLang,
  oder: repairOder,
  nur: repairNur,
  bringen: repairBringen,
};

function repairCard(cardKey, nested) {
  const out = JSON.parse(JSON.stringify(nested));
  const key = resolveCardKey(cardKey);
  const repair = REPAIRS[key];
  if (!repair) throw new Error(`No repair for card: ${cardKey}`);
  repair(out);
  return out;
}

function nestedToFlatPatches(nested) {
  const flat = {};
  if (nested.lv !== undefined) flat.lv = nested.lv;
  const study = nested.study || {};

  if (study.translation !== undefined) flat["study.translation"] = study.translation;

  if (study.explanation !== undefined) {
    if (Array.isArray(study.explanation)) {
      study.explanation.forEach((v, i) => {
        flat[`study.explanation[${i}]`] = v;
      });
    } else {
      flat["study.explanation"] = study.explanation;
    }
  }

  for (const key of [
    "examples",
    "comparison",
    "info",
    "important",
  ]) {
    if (study[key] !== undefined) {
      flat[`study.${key}`] = JSON.stringify(study[key]);
    }
  }

  if (study.tip !== undefined) {
    if (Array.isArray(study.tip)) {
      study.tip.forEach((v, i) => {
        flat[`study.tip[${i}]`] = v;
      });
    } else if (typeof study.tip === "object" && study.tip !== null) {
      if (study.tip.text !== undefined) flat["study.tip.text"] = study.tip.text;
      if (study.tip.example !== undefined) flat["study.tip.example"] = study.tip.example;
      if (!flat["study.tip.text"] && !flat["study.tip.example"]) {
        flat["study.tip"] = JSON.stringify(study.tip);
      }
    } else {
      flat["study.tip"] = study.tip;
    }
  }

  if (study.sectionAccents !== undefined) {
    flat["study.sectionAccents"] = study.sectionAccents;
  }
  if (study.accents !== undefined) {
    flat["study.accents"] = study.accents;
  }

  return flat;
}

function buildCompositeForCard(cardKey) {
  const nested = loadFrNested(cardKey);
  const repaired = repairCard(cardKey, nested);
  return nestedToFlatPatches(repaired);
}

function buildFindingToCard() {
  const { rows } = loadCsv(
    path.join(__dirname, "../../reports/g2-a1-owner/batches-pending/LRB-018-input.csv")
  );
  const map = {};
  for (const row of rows) {
    if (row.languages !== "fr") continue;
    map[row.finding_stable_ids] = row.card_object_id.split("|")[0];
  }
  return map;
}

const FINDING_TO_CARD = buildFindingToCard();

const COMPOSITE_BY_CARD = {};
for (const cardKey of new Set(Object.values(FINDING_TO_CARD))) {
  COMPOSITE_BY_CARD[cardKey] = buildCompositeForCard(cardKey);
}

const COMPOSITE_BY_ID = {};
for (const [id, cardKey] of Object.entries(FINDING_TO_CARD)) {
  COMPOSITE_BY_ID[id] = COMPOSITE_BY_CARD[cardKey];
}

const BIS_COMPARISON = JSON.parse(
  COMPOSITE_BY_CARD.bis["study.comparison"]
);
const BITTE_EXAMPLES = JSON.parse(
  COMPOSITE_BY_CARD.bitte["study.examples"]
);

module.exports = {
  FINDING_TO_CARD,
  loadFrNested,
  repairCard,
  nestedToFlatPatches,
  buildCompositeForCard,
  COMPOSITE_BY_ID,
  COMPOSITE_BY_CARD,
  BIS_COMPARISON,
  BITTE_EXAMPLES,
  CARD_KEY_ALIASES,
  resolveCardKey,
};

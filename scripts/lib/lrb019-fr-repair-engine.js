"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { loadCsv } = require("./g2-a1-phase3/batch-001-csv");

const CARD_KEY_ALIASES = {
  "a1-einmal": "einmal",
  "a1-eis": "Eis",
  "a1-es": "es",
  "a1-euch": "euch",
  "a1-fuer": "für",
  "a1-ins": "ins",
  "a1-machen": "machen",
  "a1-erst": "erst",
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
    study: JSON.parse(JSON.stringify(entry.study || {})),
  };
}

function wordsIn(text, candidates) {
  if (!text) return [];
  return candidates.filter((w) => w && text.includes(w));
}

function firstWord(text, minLen = 3) {
  const m = text.match(/[A-Za-zÄÖÜäöüßÀ-ÿ'']+/g);
  if (!m) return null;
  return m.find((w) => w.length >= minLen) || m[0];
}

function buildIndexAlignedSectionAccents(study, cardDe) {
  const accents = {};
  const deKey = cardDe || "";

  if (study.examples?.length) {
    accents.examples = study.examples.map((ex) => {
      const de = {};
      const lv = {};
      const deHits = wordsIn(ex.de, [
        deKey,
        deKey.charAt(0).toUpperCase() + deKey.slice(1),
      ]);
      if (deHits.length) de.blue = [deHits[0]];
      else {
        const fw = firstWord(ex.de);
        if (fw && ex.de.includes(fw)) de.blue = [fw];
      }
      const fwLv = firstWord(ex.lv, 3);
      if (fwLv && ex.lv.includes(fwLv)) lv.purple = [fwLv];
      return { de, lv };
    });
  }

  if (study.comparison?.length) {
    accents.comparison = study.comparison.map((row) => {
      const entry = {};
      if (row.word) entry.word = { green: [row.word.split(/\s+/).pop() || row.word] };
      if (row.meaning) {
        const mh = firstWord(row.meaning, 3);
        if (mh && row.meaning.includes(mh)) entry.meaning = { purple: [mh] };
      }
      if (row.example) {
        const parts = row.example.split(" – ");
        const dePart = parts[0] || row.example;
        const lvPart = parts[1] || "";
        const de = {};
        const lv = {};
        const dh = wordsIn(dePart, [deKey, firstWord(dePart)]);
        if (dh.length) de.green = [dh[0]];
        const lh = firstWord(lvPart, 3);
        if (lh && lvPart.includes(lh)) lv.purple = [lh];
        entry.example = { ...de, ...lv };
      }
      return entry;
    });
  }

  if (study.tip !== undefined) {
    if (Array.isArray(study.tip)) {
      accents.tip = study.tip.map((t) => {
        const text = typeof t === "string" ? t : t.text || "";
        const hit = firstWord(text, 4);
        return hit && text.includes(hit) ? { purple: [hit] } : {};
      });
    } else if (typeof study.tip === "object" && study.tip !== null) {
      const text = study.tip.text || "";
      const left = {};
      const dh = wordsIn(text, [deKey]);
      if (dh.length) left.blue = [dh[0]];
      const ph = firstWord(text, 4);
      if (ph && text.includes(ph)) left.purple = [ph];
      accents.tip = { left };
    }
  }

  if (study.important?.length) {
    accents.important = study.important.map((line) => {
      const hit =
        wordsIn(line, [deKey, `der ${deKey}`, `das ${deKey}`, `die ${deKey}`]).find((w) =>
          line.includes(w)
        ) || firstWord(line, 4);
      return hit && line.includes(hit) ? { blue: [hit] } : { purple: [firstWord(line, 5)] };
    });
  }

  if (Array.isArray(study.explanation) && study.explanation.length) {
    const core = study.explanation[0];
    const hit = wordsIn(core, [deKey, firstWord(core, 5)]).find((w) => core.includes(w));
    if (hit) accents.explanation = { purple: [hit] };
  } else if (typeof study.explanation === "string") {
    const hit = wordsIn(study.explanation, [deKey]).find((w) => study.explanation.includes(w));
    if (hit) accents.explanation = { blue: [hit] };
  }

  return accents;
}

function repairLinks(out) {
  out.lv = "À gauche • Gauche";
}

function repairMalen(out) {
  out.lv = "Peindre • Colorier";
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
      { de: { blue: ["Eis"] }, lv: { purple: ["glace"] } },
      { de: { blue: ["Eis"] }, lv: { purple: ["glace"] } },
      { de: { blue: ["Eis"] }, lv: { purple: ["froide"] } },
      { de: { blue: ["Eis"] }, lv: { purple: ["chocolat"] } },
    ],
    comparison: [
      { word: { blue: ["Eis"] }, meaning: { purple: ["glace"] } },
    ],
    tip: { left: { blue: ["nourriture"], purple: ["Rappel"] } },
    important: [{ blue: ["Eis"] }, { purple: ["contexte"] }],
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

function repairEuch(out) {
  out.lv = "Vous";
  out.study.translation = "Vous";
  out.study.explanation =
    "« euch » est un pronom de la 2e personne du pluriel. Il s'emploie comme complément direct (« qui ? ») ou indirect (« à qui ? ») et se traduit généralement par « vous ».";
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
    explanation: { blue: ["euch"], purple: ["vous"] },
    examples: [
      { de: { blue: ["euch"] }, lv: { purple: ["vois"] } },
      { de: { blue: ["euch"] }, lv: { purple: ["aide"] } },
      { de: { blue: ["euch"] }, lv: { purple: ["donne"] } },
      { de: { blue: ["euch"] }, lv: { purple: ["remercie"] } },
      { de: { blue: ["euch"] }, lv: { purple: ["souvenez"] } },
    ],
    comparison: [
      { word: { green: ["ihr"] }, meaning: { purple: ["Vous"] } },
      { word: { green: ["euch"] }, meaning: { purple: ["vous"] } },
    ],
    tip: { left: { blue: ["euch"], purple: ["vous"] } },
    important: [{ blue: ["euch"] }, { green: ["ihr"] }],
  };
}

function repairIns(out) {
  out.lv = "Dans • Vers l'intérieur";
  out.study.translation = "Dans • Vers l'intérieur";
  out.study.explanation = [
    "ins est la contraction de in + das.",
    "Forme complète : in das (où va-t-on ?).",
    "S'emploie pour un mouvement vers l'intérieur et répond à la question « où va-t-on ? ».",
    "Souvent avec : gehen, fahren, kommen, legen, stecken.",
    "En pratique, on utilise presque toujours ins, pas in das.",
  ];
  out.study.examples = [
    { de: "Ich gehe ins Kino.", lv: "Je vais au cinéma." },
    { de: "Sie geht ins Bett.", lv: "Elle va se coucher." },
    { de: "Wir fahren ins Ausland.", lv: "Nous partons à l'étranger." },
    { de: "Komm ins Haus!", lv: "Entre dans la maison !" },
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
      meaning: "où va-t-on ? (mouvement)",
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
    "Rappel : in + das → ins (où va-t-on ? — mouvement).",
    "Où va-t-on ? → ins • Où ? → im — mouvement vs emplacement.",
  ];
  out.study.important = [
    "ins = in das : mouvement vers l'intérieur, réponse à « où va-t-on ? ».",
    "im = in dem : emplacement, réponse à « où ? ».",
    "Ne pas confondre : ins Kino gehen (aller au cinéma) vs im Kino sein (être au cinéma).",
    "Au masculin : in den Wald ; au féminin : in die Schule.",
  ];
  out.study.sectionAccents = {
    explanation: { blue: ["ins", "in das"], purple: ["où va-t-on"] },
    examples: [
      { de: { blue: ["ins"] }, lv: { purple: ["cinéma"] } },
      { de: { blue: ["ins"] }, lv: { purple: ["couche"] } },
      { de: { blue: ["ins"] }, lv: { purple: ["étranger"] } },
      { de: { blue: ["ins"] }, lv: { purple: ["Entre"] } },
      { de: { blue: ["in den"] }, lv: { purple: ["portefeuille"] } },
      { de: { blue: ["ins"] }, lv: { purple: ["musée"] } },
      { de: { blue: ["ins"] }, lv: { purple: ["eau"] } },
      { de: { blue: ["ins"] }, lv: { purple: ["centre"] } },
    ],
    comparison: [
      { word: { blue: ["ins"] }, meaning: { purple: ["où va-t-on"] } },
      { word: { green: ["im"] }, meaning: { purple: ["où"] } },
    ],
    tip: [
      { left: { blue: ["ins"], purple: ["Rappel"] } },
      { left: { blue: ["ins"], green: ["im"] } },
    ],
    important: [{ blue: ["ins"] }, { green: ["im"] }],
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
  out.study.examples = [
    { de: "Was machst du?", lv: "Que fais-tu ?" },
    { de: "Ich mache Hausaufgaben.", lv: "Je fais mes devoirs." },
    { de: "Wir machen Pizza.", lv: "Nous faisons une pizza." },
    { de: "Das macht Spaß.", lv: "C'est amusant." },
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
      word: "machen",
      meaning: "faire / cuisiner",
      example: "Wir machen Pizza. – Nous faisons une pizza.",
    },
  ];
  out.study.sectionAccents = {
    explanation: { blue: ["machen"], purple: ["faire"] },
    examples: [
      { de: { blue: ["machst"] }, lv: { purple: ["Que"] } },
      { de: { blue: ["mache"], yellow: ["Hausaufgaben"] }, lv: { purple: ["fais"] } },
      { de: { blue: ["machen"], yellow: ["Pizza"] }, lv: { purple: ["pizza"] } },
      { de: { blue: ["macht Spaß"] }, lv: { purple: ["C'est"] } },
    ],
    tip: { left: { blue: ["machst"], purple: ["Rappel"], green: ["fais-tu"] } },
    important: [{ blue: ["Machen"], purple: ["français"] }, { blue: ["Spaß"] }],
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
      { de: { blue: ["für"] }, lv: { purple: ["toi"] } },
      { de: { blue: ["für"] }, lv: { purple: ["aide"] } },
      { de: { blue: ["für"] }, lv: { purple: ["mère"] } },
      { de: { blue: ["für"] }, lv: { purple: ["voiture"] } },
      { de: { blue: ["für"] }, lv: { purple: ["enfants"] } },
      { de: { blue: ["Für"] }, lv: { purple: ["aujourd'hui"] } },
    ],
    comparison: [{ word: { blue: ["für"] }, meaning: { purple: ["pour"] } }],
    tip: [{ blue: ["für"], purple: ["accusatif"] }],
    important: [{ blue: ["für"] }, { purple: ["pour"] }],
  };
}

function repairErst(out) {
  out.lv = "Seulement • D'abord";
  out.study.translation = "Seulement • D'abord";
  out.study.explanation = ["Idée principale : erst indique soit une première étape (d'abord), soit une limite dans le temps ou la quantité (seulement/ne… que).","erst peut marquer que quelque chose arrive plus tard que prévu.","Ich bin erst 18. — Je n'ai que dix-huit ans.","Es ist erst Montag. — C'est seulement lundi.","Erst lernen, dann spielen. — D'abord étudier, puis jouer."];
  out.study.examples = [
      {
          "de": "Erst lernen, dann spielen.",
          "lv": "D'abord étudier, puis jouer."
      },
      {
          "de": "Ich komme erst morgen.",
          "lv": "Je n'arriverai que demain."
      },
      {
          "de": "Er ist erst 18 Jahre alt.",
          "lv": "Il n'a que dix-huit ans."
      },
      {
          "de": "Wir essen erst um acht Uhr.",
          "lv": "Nous ne mangeons qu'à huit heures."
      }
  ];
  out.study.comparison = [
      {
          "word": "erst",
          "meaning": "d'abord • seulement",
          "example": "Erst lernen, dann spielen. – D'abord étudier, puis jouer."
      },
      {
          "word": "zuerst",
          "meaning": "d'abord • au début",
          "example": "Zuerst frühstücken wir. – D'abord nous prenons le petit-déjeuner."
      },
      {
          "word": "nur",
          "meaning": "seulement",
          "example": "Ich habe nur 5 Euro. – Je n'ai que cinq euros."
      },
      {
          "word": "dann",
          "meaning": "puis",
          "example": "Dann gehen wir nach Hause. – Puis nous rentrons à la maison."
      }
  ];
  out.study.tip = {
      "text": "Rappel : temps/quantité tardive → erst ; quantité limitée → nur."
  };
  out.study.important = [
      "erst et zuerst ne sont pas des synonymes parfaits.",
      "erst indique souvent seulement ou pas avant.",
      "zuerst indique plutôt d'abord dans une séquence."
  ];

  out.study.sectionAccents = buildIndexAlignedSectionAccents(out.study, "erst");
}

function repairEssenVerb(out) {
  out.lv = "Manger";
  out.study.translation = "Manger";
  out.study.explanation = ["Idée principale : essen est le verbe manger — consommer de la nourriture.","essen décrit l'action de manger.","Ne pas confondre avec das Essen, le nom qui désigne la nourriture ou le repas."];
  out.study.examples = [
      {
          "de": "Ich esse gern Pizza.",
          "lv": "Je mange une pomme."
      },
      {
          "de": "Was wollt ihr essen?",
          "lv": "Que voulez-vous manger ?"
      },
      {
          "de": "Wir essen um 12 Uhr.",
          "lv": "Nous mangeons ensemble."
      },
      {
          "de": "Das Essen ist fertig.",
          "lv": "L'enfant mange du pain."
      },
      {
          "de": "Das Essen schmeckt sehr gut.",
          "lv": "Je ne mange pas de viande."
      },
      {
          "de": "Das Essen schmeckt gut.",
          "lv": "Mangez, s'il vous plaît."
      }
  ];

  out.study.tip = [
      "essen = manger",
      "Utilisez essen pour l'action de manger."
  ];
  out.study.important = [
      "essen est un verbe : manger.",
      "das Essen est un nom : la nourriture ou le repas."
  ];

  out.study.sectionAccents = buildIndexAlignedSectionAccents(out.study, "essen");
}

function repairEssenNoun(out) {
  out.lv = "Nourriture • Repas";
  out.study.translation = "Nourriture • Repas";
  out.study.explanation = ["Idée principale : das Essen est un nom — la nourriture ou le repas.","das Essen désigne ce qu'on mange ou le repas en tant qu'ensemble.","Ne pas confondre avec essen, le verbe manger."];
  out.study.examples = [
      {
          "de": "Das Essen schmeckt gut.",
          "lv": "La nourriture est prête."
      },
      {
          "de": "Was wollt ihr essen?",
          "lv": "Que voulez-vous manger ?"
      },
      {
          "de": "Wir essen um 12 Uhr.",
          "lv": "Le repas est délicieux."
      },
      {
          "de": "Das Essen ist fertig.",
          "lv": "Après le repas, nous buvons du café."
      },
      {
          "de": "Das Essen schmeckt sehr gut.",
          "lv": "Je prépare le repas."
      },
      {
          "de": "Das Essen schmeckt gut.",
          "lv": "Le dîner est à dix-huit heures."
      }
  ];

  out.study.tip = [
      "das Essen = nourriture/repas",
      "Utilisez das Essen pour parler de la nourriture ou du repas."
  ];
  out.study.important = [
      "das Essen est un nom : la nourriture ou le repas.",
      "essen est le verbe : manger."
  ];

  out.study.sectionAccents = buildIndexAlignedSectionAccents(out.study, "Essen");
}

function repairEtwas(out) {
  out.lv = "Quelque chose • Un peu";
  out.study.translation = "Quelque chose • Un peu";
  out.study.explanation = ["Idée principale : etwas signifie quelque chose ou, devant un adjectif, un peu.","Ich habe etwas gesehen. — J'ai vu quelque chose.","Das ist etwas teuer. — C'est un peu cher."];
  out.study.examples = [
      {
          "de": "Ich möchte etwas trinken.",
          "lv": "Je voudrais manger quelque chose."
      },
      {
          "de": "Hast du etwas Zeit?",
          "lv": "As-tu un peu de temps ?"
      },
      {
          "de": "Ich bin etwas müde.",
          "lv": "Il y a quelque chose ici."
      },
      {
          "de": "Ich habe etwas für dich.",
          "lv": "Je n'entends rien."
      }
  ];
  out.study.comparison = [
      {
          "word": "etwas",
          "meaning": "quelque chose / un peu",
          "example": "Ich brauche etwas. – J'ai besoin de quelque chose."
      },
      {
          "word": "was",
          "meaning": "quelque chose (familier)",
          "example": "Willst du was trinken? – Veux-tu boire quelque chose ?"
      },
      {
          "word": "ein bisschen",
          "meaning": "un peu",
          "example": "Ich bin ein bisschen müde. – Je suis un peu fatigué."
      },
      {
          "word": "nichts",
          "meaning": "rien",
          "example": "Ich brauche nichts. – Je n'ai besoin de rien."
      }
  ];
  out.study.tip = {
      "text": "etwas = quelque chose ou un peu, selon le nom et le contexte."
  };
  out.study.important = [
      "etwas désigne une chose ou une petite quantité.",
      "nichts est le contraire : rien."
  ];

  out.study.sectionAccents = buildIndexAlignedSectionAccents(out.study, "etwas");
}

function repairFahren(out) {
  out.lv = "Aller (en véhicule) • Conduire • Emmener";
  out.study.translation = "Aller (en véhicule) • Conduire • Emmener";
  out.study.explanation = ["Idée principale : fahren signifie aller en véhicule, conduire ou emmener quelqu'un.","fahren s'emploie avec une voiture, un bus, un train, un vélo ou un autre moyen de transport.","Avec une personne comme objet, fahren peut signifier conduire ou emmener.","Pour aller à pied, on emploie gehen ou laufen."];
  out.study.examples = [
      {
          "de": "Ich fahre nach Berlin.",
          "lv": "Je vais à Berlin."
      },
      {
          "de": "Ich fahre mit dem Auto.",
          "lv": "Je vais en voiture."
      },
      {
          "de": "Ich fahre meine Tochter zur Schule.",
          "lv": "Il conduit très vite."
      },
      {
          "de": "Ich fahre dich nach Hause.",
          "lv": "Je te conduis chez toi."
      }
  ];
  out.study.comparison = [
      {
          "word": "fahren",
          "meaning": "aller/conduire en véhicule",
          "example": "Ich fahre mit dem Bus. – Je vais en bus."
      },
      {
          "word": "gehen",
          "meaning": "aller à pied",
          "example": "Ich gehe nach Hause. – Je rentre à la maison à pied."
      },
      {
          "word": "laufen",
          "meaning": "courir/marcher",
          "example": "Er läuft schnell. – Il court vite."
      },
      {
          "word": "bringen",
          "meaning": "apporter/emmener",
          "example": "Ich bringe das Buch. – J'apporte le livre."
      }
  ];
  out.study.tip = {
      "text": "Rappel : véhicule → fahren ; à pied → gehen."
  };
  out.study.important = [
      "fahren peut signifier aller, conduire ou emmener selon le contexte.",
      "Ich fahre dich nach Hause = Je te conduis chez toi."
  ];

  out.study.sectionAccents = buildIndexAlignedSectionAccents(out.study, "fahren");
}

function repairFerien(out) {
  out.lv = "Vacances";
  out.study.translation = "Vacances";
  out.study.explanation = ["Idée principale : die Ferien désigne les vacances scolaires — toujours au pluriel.","die Ferien signifie le temps libre des écoles ou des études.","der Urlaub désigne le congé d'une personne au travail."];
  out.study.examples = [
      {
          "de": "In den Ferien fahren wir ans Meer.",
          "lv": "Nous avons des vacances."
      },
      {
          "de": "In den Ferien habe ich viel Zeit.",
          "lv": "Les vacances commencent lundi."
      },
      {
          "de": "Was macht ihr in den Ferien?",
          "lv": "Que faites-vous pendant les vacances ?"
      },
      {
          "de": "Die Schule ist in den Ferien zu.",
          "lv": "Les vacances scolaires durent deux semaines."
      }
  ];
  out.study.comparison = [
      {
          "word": "die Ferien",
          "meaning": "vacances scolaires (pluriel)",
          "example": "In den Ferien fahren wir weg. – Pendant les vacances, nous partons."
      },
      {
          "word": "der Urlaub",
          "meaning": "congé individuel",
          "example": "Ich habe zwei Wochen Urlaub. – J'ai deux semaines de congé."
      }
  ];
  out.study.tip = [
      "die Ferien est toujours au pluriel.",
      "Utilisez die Ferien pour les vacances scolaires."
  ];
  out.study.important = [
      "die Ferien s'emploie au pluriel.",
      "der Urlaub désigne le congé d'une personne; die Ferien, les vacances scolaires."
  ];

  out.study.sectionAccents = buildIndexAlignedSectionAccents(out.study, "Ferien");
}

function repairFernsehenVerb(out) {
  out.lv = "Regarder la télévision";
  out.study.translation = "Regarder la télévision";
  out.study.explanation = "Idée principale : fernsehen est un verbe à particule séparable — ich sehe fern, du siehst fern. Il signifie regarder la télévision. Ne pas confondre avec das Fernsehen (la télévision comme média).";
  out.study.examples = [
      {
          "de": "Ich sehe heute Abend fern.",
          "lv": "Je regarde la télévision le soir."
      },
      {
          "de": "Siehst du oft fern?",
          "lv": "Regardes-tu souvent la télévision ?"
      },
      {
          "de": "Die Kinder sehen am Nachmittag fern.",
          "lv": "Nous regardons un film à la télévision."
      }
  ];
  out.study.comparison = [
      {
          "word": "fernsehen",
          "meaning": "regarder la télévision",
          "example": "Ich sehe fern. – Je regarde la télévision."
      },
      {
          "word": "das Fernsehen",
          "meaning": "la télévision (média)",
          "example": "Im Fernsehen läuft ein Film. – À la télévision, on passe un film."
      },
      {
          "word": "sehen",
          "meaning": "voir",
          "example": "Ich sehe einen Film. – Je vois un film."
      }
  ];
  out.study.tip = {
      "text": "fernsehen = verbe (ich sehe fern). das Fernsehen = nom (la télévision)."
  };
  out.study.important = [
      "fernsehen est un verbe séparable : ich sehe fern.",
      "das Fernsehen est un nom au singulier."
  ];

  out.study.sectionAccents = buildIndexAlignedSectionAccents(out.study, "fernsehen");
}

function repairFernsehenNoun(out) {
  out.lv = "Télévision";
  out.study.translation = "Télévision";
  out.study.explanation = ["Idée principale : das Fernsehen est un nom — la télévision comme média ou programme.","das Fernsehen décrit la télévision en tant que média ou diffusion.","fernsehen est le verbe regarder la télévision.","das Fernsehen est au singulier seulement."];
  out.study.examples = [
      {
          "de": "Was gibt es heute im Fernsehen?",
          "lv": "La télévision est intéressante."
      },
      {
          "de": "Im Fernsehen läuft ein Film.",
          "lv": "Je regarde beaucoup la télévision."
      },
      {
          "de": "Das Fernsehen ist heute langweilig.",
          "lv": "La télévision est allumée."
      },
      {
          "de": "Ich sehe heute Abend fern.",
          "lv": "La télévision est importante pour lui."
      },
      {
          "de": "Was gibt es im Fernsehen?",
          "lv": "Je ne regarde pas la télévision aujourd'hui."
      }
  ];

  out.study.tip = [
      "Pour l'action, utilisez fernsehen (ich sehe fern).",
      "Pour le média ou la programme, utilisez das Fernsehen."
  ];
  out.study.important = [
      "das Fernsehen est un nom : la télévision.",
      "fernsehen est le verbe : regarder la télévision."
  ];

  out.study.sectionAccents = buildIndexAlignedSectionAccents(out.study, "Fernsehen");
}

function repairFinden(out) {
  out.lv = "Trouver • Trouver que";
  out.study.translation = "Trouver • Trouver que";
  out.study.explanation = ["Idée principale : finden signifie trouver ou trouver que.","Pour un objet perdu, finden = trouver.","Pour un avis, ich finde... = je trouve que / je pense que."];
  out.study.examples = [
      {
          "de": "Ich finde meinen Schlüssel.",
          "lv": "Je trouve ma clé."
      },
      {
          "de": "Ich finde das gut.",
          "lv": "Je trouve cela bien."
      },
      {
          "de": "Wie findest du den Film?",
          "lv": "Que penses-tu du film ?"
      }
  ];
  out.study.comparison = [
      {
          "word": "finden",
          "meaning": "trouver; trouver que",
          "example": "Ich finde den Schlüssel. – Je trouve la clé."
      },
      {
          "word": "suchen",
          "meaning": "chercher",
          "example": "Ich suche den Schlüssel. – Je cherche la clé."
      }
  ];
  out.study.tip = {
      "text": "Objet perdu → finden ; opinion → ich finde..."
  };
  out.study.important = [
      "finden ne signifie pas seulement trouver un objet.",
      "Ich finde das gut = Je trouve que c'est bien."
  ];

  out.study.sectionAccents = buildIndexAlignedSectionAccents(out.study, "finden");
}

function repairFrau(out) {
  out.lv = "Femme • Épouse";
  out.study.translation = "Femme • Épouse";
  out.study.explanation = ["Idée principale : die Frau peut signifier une femme ou une épouse.","Sans possessif, die Frau = une femme.","Avec possessif (meine Frau), die Frau = mon épouse.","Pluriel : die Frauen."];
  out.study.examples = [
      {
          "de": "Sie ist eine nette Frau.",
          "lv": "Elle est une femme sympathique."
      },
      {
          "de": "Das ist meine Frau.",
          "lv": "C'est ma femme."
      },
      {
          "de": "Wie viele Frauen sind hier?",
          "lv": "Combien de femmes sont ici ?"
      },
      {
          "de": "Meine Frau arbeitet in Berlin.",
          "lv": "Ma femme travaille à Berlin."
      },
      {
          "de": "Die Frau trägt ein Kleid.",
          "lv": "La femme porte une robe."
      },
      {
          "de": "Seine Frau ist Ärztin.",
          "lv": "Son épouse est médecin."
      }
  ];

  out.study.tip = [
      "Avec meine/deine/seine Frau, on parle de l'épouse.",
      "Sans possessif, die Frau = une femme."
  ];
  out.study.important = [
      "die Frau = femme ou épouse selon le contexte.",
      "Meine Frau signifie ma femme, c'est-à-dire mon épouse.",
      "Pluriel : die Frauen."
  ];

  out.study.sectionAccents = buildIndexAlignedSectionAccents(out.study, "Frau");
}

function repairGemuese(out) {
  out.lv = "Légumes";
  out.study.translation = "Légumes";
  out.study.explanation = ["Idée principale : das Gemüse désigne les légumes en général.","Das Gemüse est un nom neutre généralement employé au singulier.","Pas de pluriel *die Gemüse en allemand standard."];
  out.study.examples = [
      {
          "de": "Ich esse gern Gemüse.",
          "lv": "J'aime manger des légumes."
      },
      {
          "de": "Das Gemüse ist frisch.",
          "lv": "Les légumes sont frais."
      },
      {
          "de": "Wir kaufen Gemüse auf dem Markt.",
          "lv": "Nous achetons des légumes au marché."
      },
      {
          "de": "Ich mag Obst und Gemüse.",
          "lv": "J'aime les fruits et les légumes."
      },
      {
          "de": "Ich esse Gemüse.",
          "lv": "Je mange des légumes."
      }
  ];

  out.study.tip = [
      "das Gemüse = légumes",
      "Utilisez das Gemüse pour parler de légumes en général."
  ];
  out.study.important = [
      "On dit das Gemüse, pas die Gemüses.",
      "Pour parler de variétés, on peut dire Gemüsesorten."
  ];

  out.study.sectionAccents = buildIndexAlignedSectionAccents(out.study, "Gemüse");
}

function repairHand(out) {
  out.lv = "Main";
  out.study.translation = "Main";
  out.study.explanation = ["Idée principale : die Hand signifie la main (paume et doigts).","En allemand, Arm et Hand sont deux mots distincts.","Arm = bras ; Hand = main."];
  out.study.examples = [
      {
          "de": "Ich wasche meine Hände.",
          "lv": "Je me lave les mains."
      },
      {
          "de": "Sie hält das Glas in der Hand.",
          "lv": "J'ai le sac à la main."
      },
      {
          "de": "Mein Arm tut weh.",
          "lv": "Mon bras me fait mal."
      }
  ];
  out.study.comparison = [
      {
          "word": "die Hand",
          "meaning": "main",
          "example": "in der Hand – à la main"
      },
      {
          "word": "der Arm",
          "meaning": "bras",
          "example": "Mein Arm tut weh. – Mon bras me fait mal."
      }
  ];
  out.study.tip = [
      "Hand = main.",
      "Arm = bras (de l'épaule à la main)."
  ];
  out.study.important = [
      "En allemand, Hand et Arm ne sont pas le même mot."
  ];

  out.study.sectionAccents = buildIndexAlignedSectionAccents(out.study, "Hand");
}

function repairHoeren(out) {
  out.lv = "Entendre • Écouter";
  out.study.translation = "Entendre • Écouter";
  out.study.explanation = ["Idée principale : hören signifie entendre ou écouter.","hören s'emploie pour les sons, la musique et ce qu'on perçoit.","zuhören signifie écouter attentivement quelqu'un."];
  out.study.examples = [
      {
          "de": "Ich höre Musik.",
          "lv": "J'entends de la musique."
      },
      {
          "de": "Die Kinder hören eine Geschichte.",
          "lv": "Écoute bien !"
      },
      {
          "de": "Ich höre dich.",
          "lv": "Tu m'entends ?"
      }
  ];

  out.study.tip = [
      "hören peut signifier entendre ou écouter selon le contexte.",
      "zuhören signifie écouter attentivement quelqu'un."
  ];
  out.study.important = [
      "hören = entendre/écouter un son.",
      "zuhören = écouter attentivement une personne."
  ];

  out.study.sectionAccents = buildIndexAlignedSectionAccents(out.study, "hören");
}

function repairHuebsch(out) {
  out.lv = "Joli • Mignon";
  out.study.translation = "Joli • Mignon";
  out.study.explanation = ["Idée principale : hübsch décrit une apparence jolie ou mignonne.","hübsch s'emploie pour les personnes, les vêtements, les pièces ou les objets.","nett décrit plutôt une personne aimable ou son comportement."];
  out.study.examples = [
      {
          "de": "Sie trägt ein hübsches Kleid.",
          "lv": "Elle porte une jolie robe."
      },
      {
          "de": "Das Zimmer ist hübsch.",
          "lv": "La chambre est jolie."
      },
      {
          "de": "Das ist ein hübsches Bild.",
          "lv": "C'est un joli tableau."
      }
  ];
  out.study.comparison = [
      {
          "word": "hübsch",
          "meaning": "joli • mignon",
          "example": "Das ist ein hübsches Kleid. – C'est une jolie robe."
      },
      {
          "word": "schön",
          "meaning": "beau • agréable",
          "example": "Der Garten ist schön. – Le jardin est beau."
      },
      {
          "word": "nett",
          "meaning": "aimable • gentil",
          "example": "Sie ist sehr nett. – Elle est très aimable."
      }
  ];
  out.study.tip = [
      "hübsch décrit surtout une apparence jolie.",
      "nett décrit plus souvent une personne aimable ou son comportement."
  ];
  out.study.important = [
      "hübsch ne remplace pas nett pour décrire le caractère.",
      "Pour une personne aimable, on emploie plutôt nett."
  ];

  out.study.sectionAccents = buildIndexAlignedSectionAccents(out.study, "hübsch");
}

function repairIhr(out) {
  out.lv = "Vous • Lui • Son/sa/ses";
  out.study.translation = "Vous • Lui • Son/sa/ses";
  out.study.explanation = ["Idée principale : ihr a plusieurs fonctions — vous (2e pers. plur.), lui (datif de sie) et son/sa/ses (possessif).","Avec verbe au pluriel (kommt, habt), ihr = vous.","ihr comme datif = lui (Ich gebe ihr das Buch).","ihr comme possessif = son/sa/ses (ihr Auto).","La forme de politesse est Sie avec majuscule."];
  out.study.examples = [
      {
          "de": "Kommt ihr heute Abend?",
          "lv": "Venez-vous ce soir ?"
      },
      {
          "de": "Ich gebe ihr das Buch.",
          "lv": "Je lui donne le livre."
      },
      {
          "de": "Wo wohnt ihr?",
          "lv": "Où habitez-vous ?"
      },
      {
          "de": "Er schreibt ihr einen Brief.",
          "lv": "Il lui écrit une lettre."
      },
      {
          "de": "Habt ihr Zeit?",
          "lv": "Avez-vous le temps ?"
      },
      {
          "de": "Das ist ihr Auto.",
          "lv": "C'est sa voiture."
      }
  ];

  out.study.tip = [
      "ihr + verbe pluriel (kommt, habt) = vous.",
      "ihr comme datif ou possessif = lui / son/sa/ses."
  ];
  out.study.important = [
      "ihr = vous (2e pers. plur.) ou lui (datif) ou son/sa/ses (possessif).",
      "La forme de politesse est Sie, pas ihr.",
      "Incorrect : Ihr (politesse) → Correct : Sie."
  ];

  out.study.sectionAccents = buildIndexAlignedSectionAccents(out.study, "ihr");
}

function repairIm(out) {
  out.lv = "Dans le • Au";
  out.study.translation = "Dans le • Au";
  out.study.explanation = ["im est la contraction de in + dem.","Forme complète : in dem (datif masculin/neutre).","Répond à la question « où ? » — lieu d'être, pas « à qui ? ».","Avec les mois et saisons : im Januar, im Sommer."];
  out.study.examples = [
      {
          "de": "Ich bin im Park.",
          "lv": "Je suis dans le parc."
      },
      {
          "de": "Wir wohnen im Zentrum.",
          "lv": "Nous habitons dans le centre-ville."
      },
      {
          "de": "Im Sommer ist es warm.",
          "lv": "En été, il fait chaud."
      },
      {
          "de": "Er arbeitet im Büro.",
          "lv": "Il travaille au bureau."
      },
      {
          "de": "Das Kind spielt im Garten.",
          "lv": "L'enfant joue dans le jardin."
      },
      {
          "de": "Im Januar fahre ich nach Wien.",
          "lv": "En janvier, je vais à Vienne."
      },
      {
          "de": "Sie ist im Kino.",
          "lv": "Elle est au cinéma."
      },
      {
          "de": "Wir treffen uns im Restaurant.",
          "lv": "Nous nous retrouvons au restaurant."
      }
  ];
  out.study.comparison = [
      {
          "word": "im",
          "meaning": "dans le / au (où ?)",
          "example": "im Park – dans le parc"
      },
      {
          "word": "ins",
          "meaning": "dans le / vers (où va-t-on ?)",
          "example": "ins Kino – au cinéma"
      },
      {
          "word": "in",
          "meaning": "dans / à",
          "example": "in Berlin – à Berlin"
      },
      {
          "word": "am",
          "meaning": "au / à",
          "example": "am Fenster – à la fenêtre"
      },
      {
          "word": "auf",
          "meaning": "sur",
          "example": "auf dem Tisch – sur la table"
      }
  ];
  out.study.tip = [
      "Rappel : in + dem → im (où ?).",
      "Où va-t-on ? → ins ; où ? → im."
  ];
  out.study.important = [
      "im = in dem : lieu d'être, pas de mouvement.",
      "Répond à « où ? », pas « à qui ? » ni « n'importe quel genre ».",
      "Au féminin : in der Schule, pas im Schule."
  ];

  out.study.sectionAccents = buildIndexAlignedSectionAccents(out.study, "im");
}

function repairIn(out) {
  out.lv = "Dans • À";
  out.study.translation = "Dans • À";
  out.study.explanation = ["Idée principale : in indique un lieu ou une direction.","Pour un lieu : in Berlin = à Berlin.","Pour une direction : in die Schule = à l'école (mouvement)."];
  out.study.examples = [
      {
          "de": "Ich bin in Berlin.",
          "lv": "Je suis à Berlin."
      },
      {
          "de": "Ich gehe in die Schule.",
          "lv": "Je vais à l'école."
      },
      {
          "de": "Das Buch ist in der Tasche.",
          "lv": "Le livre est dans le sac."
      },
      {
          "de": "Wir gehen ins Kino.",
          "lv": "Nous allons au cinéma."
      }
  ];

  out.study.tip = {
      "text": "Rappel : lieu → in ; surface → souvent auf."
  };
  out.study.important = [
      "in peut indiquer un lieu ou une direction selon le cas.",
      "Pour une surface, on emploie souvent auf plutôt que in."
  ];

  out.study.sectionAccents = buildIndexAlignedSectionAccents(out.study, "in");
}

function repairJung(out) {
  out.lv = "Jeune (âge)";
  out.study.translation = "Jeune (âge)";
  out.study.explanation = ["Idée principale : jung décrit la jeunesse d'âge — pour les personnes et les animaux.","jung = jeune d'âge ; neu = nouveau (pour les choses).","Ne pas utiliser jung pour un téléphone ou une voiture récente."];
  out.study.examples = [
      {
          "de": "Sie ist noch jung.",
          "lv": "Elle est encore jeune."
      },
      {
          "de": "Der Hund ist jung.",
          "lv": "Le chien est jeune."
      },
      {
          "de": "Wir sind noch jung.",
          "lv": "Nous sommes encore jeunes."
      },
      {
          "de": "Er sieht sehr jung aus.",
          "lv": "Il paraît très jeune."
      },
      {
          "de": "Das ist ein junges Paar.",
          "lv": "C'est un jeune couple."
      },
      {
          "de": "Die junge Frau lächelt.",
          "lv": "La jeune femme sourit."
      },
      {
          "de": "Mein Bruder ist jünger als ich.",
          "lv": "Mon frère est plus jeune que moi."
      }
  ];

  out.study.tip = [
      "jung = jeune d'âge (personnes, animaux).",
      "Pour les objets récents, utilisez neu."
  ];
  out.study.important = [
      "jung décrit l'âge, pas la nouveauté d'un objet.",
      "Incorrect : Mein Handy ist jung. Correct : Mein Handy ist neu."
  ];

  out.study.sectionAccents = buildIndexAlignedSectionAccents(out.study, "jung");
}

function repairKein(out) {
  out.lv = "Aucun • Pas de";
  out.study.translation = "Aucun • Pas de";
  out.study.explanation = ["Idée principale : kein est l'article négatif devant un nom.","kein se décline comme ein : kein, keine, keinen...","kein nie signifie personne ou rien seul — il accompagne un nom."];
  out.study.examples = [
      {
          "de": "Ich habe kein Geld.",
          "lv": "Je n'ai pas d'argent."
      },
      {
          "de": "Es gibt keine Milch mehr.",
          "lv": "Il n'y a plus de lait."
      },
      {
          "de": "Kein Mensch war da.",
          "lv": "Personne n'était là."
      },
      {
          "de": "Ich habe keine Zeit.",
          "lv": "Je n'ai pas le temps."
      },
      {
          "de": "Das ist kein Problem.",
          "lv": "Ce n'est pas un problème."
      },
      {
          "de": "Wir haben keine Kinder.",
          "lv": "Nous n'avons pas d'enfants."
      }
  ];

  out.study.tip = [
      "kein nie le nom ; nicht nie le verbe ou la phrase.",
      "kein se décline : kein/keine/keinen."
  ];
  out.study.important = [
      "kein + nom = pas de / aucun.",
      "Incorrect : Ich habe nicht ein Geld. Correct : Ich habe kein Geld."
  ];

  out.study.sectionAccents = buildIndexAlignedSectionAccents(out.study, "kein");
}

function repairKennen(out) {
  out.lv = "Connaître";
  out.study.translation = "Connaître";
  out.study.explanation = ["Idée principale : kennen signifie connaître une personne, un lieu ou une chose par expérience.","kennen = connaître (personne, lieu).","wissen = savoir un fait ou une information."];
  out.study.examples = [
      {
          "de": "Ich kenne ihn.",
          "lv": "Je le connais."
      },
      {
          "de": "Kennen Sie diese Frau?",
          "lv": "Connaissez-vous cette femme ?"
      },
      {
          "de": "Wo habt ihr euch kennengelernt?",
          "lv": "Où vous êtes-vous rencontrés ?"
      }
  ];
  out.study.comparison = [
      {
          "word": "kennen",
          "meaning": "connaître (personne, lieu)",
          "example": "Ich kenne ihn. – Je le connais."
      },
      {
          "word": "wissen",
          "meaning": "savoir (un fait, une information)",
          "example": "Ich weiß seinen Namen. – Je connais son nom."
      }
  ];
  out.study.tip = [
      "kennen = connaître",
      "Utilisez kennen pour une connaissance personnelle."
  ];
  out.study.important = [
      "kennen = connaître une personne ou un lieu.",
      "wissen = savoir un fait."
  ];

  out.study.sectionAccents = buildIndexAlignedSectionAccents(out.study, "kennen");
}

function repairKlein(out) {
  out.lv = "Petit";
  out.study.translation = "Petit";
  out.study.explanation = ["Idée principale : klein signifie petit en taille, en quantité ou en âge.","klein peut décrire une pièce, un enfant ou un objet."];
  out.study.examples = [
      {
          "de": "Das Zimmer ist klein.",
          "lv": "La pièce est petite."
      },
      {
          "de": "Das Kind ist noch klein.",
          "lv": "L'enfant est encore petit."
      },
      {
          "de": "Ich habe eine kleine Tasche.",
          "lv": "J'ai un petit sac."
      }
  ];

  out.study.tip = [
      "klein = petit",
      "Utilisez klein pour la taille ou l'âge."
  ];
  out.study.important = [
      "klein décrit la petite taille ou le jeune âge.",
      "Pour un enfant, klein peut aussi indiquer un âge jeune."
  ];

  out.study.sectionAccents = buildIndexAlignedSectionAccents(out.study, "klein");
}

function repairLassen(out) {
  out.lv = "Laisser • Permettre";
  out.study.translation = "Laisser • Permettre";
  out.study.explanation = ["Idée principale : lassen signifie laisser ou permettre.","Quand quelque chose reste en place : lassen = laisser.","Quand on donne la permission : lassen = permettre."];
  out.study.examples = [
      {
          "de": "Ich lasse die Tasche hier.",
          "lv": "Je laisse le sac ici."
      },
      {
          "de": "Lass das bitte auf dem Tisch.",
          "lv": "Laisse cela sur la table, s'il te plaît."
      },
      {
          "de": "Meine Eltern lassen mich gehen.",
          "lv": "Mes parents me laissent partir."
      },
      {
          "de": "Lass mich in Ruhe!",
          "lv": "Laisse-moi tranquille !"
      }
  ];
  out.study.comparison = [
      {
          "word": "lassen",
          "meaning": "laisser / permettre",
          "example": "Ich lasse das hier. – Je laisse cela ici."
      },
      {
          "word": "bleiben",
          "meaning": "rester",
          "example": "Ich bleibe hier. – Je reste ici."
      },
      {
          "word": "erlauben",
          "meaning": "permettre",
          "example": "Sie erlaubt mir das. – Elle me le permet."
      },
      {
          "word": "geben",
          "meaning": "donner",
          "example": "Gib mir das Buch. – Donne-moi le livre."
      }
  ];
  out.study.tip = {
      "text": "Rappel : quelque chose reste → lassen ; permission → lassen."
  };
  out.study.important = [
      "lassen signifie laisser ou permettre selon le contexte.",
      "Lass mich in Ruhe ! = Laisse-moi tranquille !"
  ];

  out.study.sectionAccents = buildIndexAlignedSectionAccents(out.study, "lassen");
}

function repairLaufen(out) {
  out.lv = "Courir • Marcher • Fonctionner";
  out.study.translation = "Courir • Marcher • Fonctionner";
  out.study.explanation = ["Idée principale : laufen signifie courir, marcher vite ou fonctionner.","Pour une personne : laufen = courir ou marcher vite.","Pour un film ou une machine : laufen = fonctionner."];
  out.study.examples = [
      {
          "de": "Er läuft sehr schnell.",
          "lv": "Il court très vite."
      },
      {
          "de": "Die Kinder laufen im Park.",
          "lv": "Les enfants courent dans le parc."
      },
      {
          "de": "Der Film läuft schon.",
          "lv": "Le film a déjà commencé."
      },
      {
          "de": "Die Maschine läuft gut.",
          "lv": "La machine fonctionne bien."
      }
  ];
  out.study.comparison = [
      {
          "word": "laufen",
          "meaning": "courir/marcher; fonctionner",
          "example": "Er läuft schnell. – Il court vite."
      },
      {
          "word": "gehen",
          "meaning": "aller à pied",
          "example": "Ich gehe nach Hause. – Je rentre à pied."
      },
      {
          "word": "fahren",
          "meaning": "aller en véhicule",
          "example": "Ich fahre mit dem Bus. – Je vais en bus."
      },
      {
          "word": "funktionieren",
          "meaning": "fonctionner",
          "example": "Das funktioniert gut. – Cela fonctionne bien."
      }
  ];
  out.study.tip = {
      "text": "Rappel : à pied rapide → laufen ; véhicule → fahren."
  };
  out.study.important = [
      "laufen peut signifier courir ou fonctionner.",
      "Ich laufe décrit un mouvement à pied."
  ];

  out.study.sectionAccents = buildIndexAlignedSectionAccents(out.study, "laufen");
}

function repairLautAdj(out) {
  out.lv = "Fort • Bruyant";
  out.study.translation = "Fort • Bruyant";
  out.study.explanation = ["Idée principale : laut (adjectif) décrit un son fort ou bruyant.","laut en minuscules sans article = adjectif (Die Musik ist laut).","Ne pas confondre avec der Laut (nom = son)."];
  out.study.examples = [
      {
          "de": "Die Musik ist laut.",
          "lv": "La musique est forte."
      },
      {
          "de": "Sprich nicht so laut!",
          "lv": "Ne parle pas si fort !"
      },
      {
          "de": "Das ist sehr laut.",
          "lv": "C'est très bruyant."
      }
  ];

  out.study.tip = [
      "laut minuscule = fort/bruyant (adjectif).",
      "der Laut = son (nom)."
  ];
  out.study.important = [
      "laut sans article est un adjectif.",
      "der Laut avec article est un nom.",
      "Pluriel du nom : die Laute."
  ];

  out.study.sectionAccents = buildIndexAlignedSectionAccents(out.study, "laut");
}

function repairLautNoun(out) {
  out.lv = "Son";
  out.study.translation = "Son";
  out.study.explanation = ["Idée principale : der Laut est un nom — un son ou un signal sonore.","der Laut avec article = le son.","laut en minuscules = fort/bruyant (adjectif).","Pluriel : die Laute."];
  out.study.examples = [
      {
          "de": "Der Laut ist schön.",
          "lv": "Le son est beau."
      },
      {
          "de": "Ich höre einen Laut.",
          "lv": "J'entends un son."
      }
  ];

  out.study.tip = [
      "der Laut = son (nom).",
      "laut = fort (adjectif)."
  ];
  out.study.important = [
      "der Laut est un nom au singulier.",
      "laut minuscule est un adjectif : fort/bruyant.",
      "Pluriel : die Laute."
  ];

  out.study.sectionAccents = buildIndexAlignedSectionAccents(out.study, "Laut");
}

function repairLegen(out) {
  out.lv = "Poser • Mettre";
  out.study.translation = "Poser • Mettre";
  out.study.explanation = ["Idée principale : legen signifie poser horizontalement — une action.","legen = poser (action) ; liegen = être couché (état).","On pose un livre sur la table : legen."];
  out.study.examples = [
      {
          "de": "Ich lege das Buch auf den Tisch.",
          "lv": "Je pose le livre sur la table."
      },
      {
          "de": "Leg den Schlüssel hierhin.",
          "lv": "Pose la clé ici."
      },
      {
          "de": "Sie legt das Kind ins Bett.",
          "lv": "Elle met l'enfant au lit."
      },
      {
          "de": "Das Buch liegt auf dem Tisch.",
          "lv": "Le livre est posé sur la table."
      }
  ];
  out.study.comparison = [
      {
          "word": "legen",
          "meaning": "poser",
          "example": "Ich lege das Buch auf den Tisch. – Je pose le livre sur la table."
      },
      {
          "word": "liegen",
          "meaning": "être couché / se trouver",
          "example": "Das Buch liegt auf dem Tisch. – Le livre est sur la table."
      },
      {
          "word": "stellen",
          "meaning": "mettre debout",
          "example": "Ich stelle die Flasche auf den Tisch. – Je mets la bouteille sur la table."
      },
      {
          "word": "setzen",
          "meaning": "asseoir",
          "example": "Ich setze mich. – Je m'assois."
      }
  ];
  out.study.tip = {
      "text": "Rappel : tu poses → legen ; c'est déjà posé → liegen."
  };
  out.study.important = [
      "legen et liegen ne sont pas interchangeables.",
      "Ich lege = je pose ; Das Buch liegt = le livre est posé."
  ];

  out.study.sectionAccents = buildIndexAlignedSectionAccents(out.study, "legen");
}

function repairLeise(out) {
  out.lv = "Doucement • Silencieux";
  out.study.translation = "Doucement • Silencieux";
  out.study.explanation = ["Idée principale : leise décrit un son doux ou un volume bas.","leise = doucement, silencieux.","On demande leise pour parler ou écouter sans bruit."];
  out.study.examples = [
      {
          "de": "Bitte sei leise.",
          "lv": "S'il te plaît, sois silencieux."
      },
      {
          "de": "Die Musik ist leise.",
          "lv": "La musique est douce."
      },
      {
          "de": "Sprich bitte leise.",
          "lv": "Parle doucement, s'il te plaît."
      }
  ];

  out.study.tip = [
      "leise = doucement/silencieux",
      "Utilisez leise pour un volume bas."
  ];
  out.study.important = [
      "leise décrit un son doux ou une voix basse.",
      "Bitte sei leise = S'il te plaît, sois silencieux."
  ];

  out.study.sectionAccents = buildIndexAlignedSectionAccents(out.study, "leise");
}

function repairLiegen(out) {
  out.lv = "Être couché • Se trouver";
  out.study.translation = "Être couché • Se trouver";
  out.study.explanation = ["Idée principale : liegen décrit un état — être couché ou se trouver horizontalement.","liegen = état ; legen = action de poser.","Ne pas traduire liegen par dormir ou mentir."];
  out.study.examples = [
      {
          "de": "Das Buch liegt auf dem Tisch.",
          "lv": "Le livre est posé sur la table."
      },
      {
          "de": "Mein Handy liegt im Auto.",
          "lv": "Mon téléphone se trouve dans la voiture."
      },
      {
          "de": "Er liegt im Bett.",
          "lv": "Il est couché dans son lit."
      },
      {
          "de": "Ich lege das Buch auf den Tisch.",
          "lv": "Je pose le livre sur la table."
      }
  ];
  out.study.comparison = [
      {
          "word": "liegen",
          "meaning": "être couché / se trouver",
          "example": "Das Buch liegt hier. – Le livre est ici."
      },
      {
          "word": "legen",
          "meaning": "poser",
          "example": "Ich lege das Buch hierhin. – Je pose le livre ici."
      },
      {
          "word": "stehen",
          "meaning": "être debout",
          "example": "Die Flasche steht auf dem Tisch. – La bouteille est sur la table."
      },
      {
          "word": "sein",
          "meaning": "être",
          "example": "Ich bin hier. – Je suis ici."
      }
  ];
  out.study.tip = {
      "text": "Rappel : déjà en place → liegen ; tu poses → legen."
  };
  out.study.important = [
      "liegen décrit un état, pas une action.",
      "legen décrit l'action de poser."
  ];

  out.study.sectionAccents = buildIndexAlignedSectionAccents(out.study, "liegen");
}

function repairMal(out) {
  out.lv = "Fois";
  out.study.translation = "Fois";
  out.study.explanation = ["Idée principale : das Mal signifie une fois ou une occasion.","ein Mal, zwei Mal = une fois, deux fois.","mal sans article est une particule familière (Komm mal her!)."];
  out.study.examples = [
      {
          "de": "Das erste Mal war schwer.",
          "lv": "La première fois était difficile."
      },
      {
          "de": "Ich war schon zwei Mal in Berlin.",
          "lv": "Je suis déjà allé deux fois à Berlin."
      },
      {
          "de": "Ein Mal reicht.",
          "lv": "Une fois suffit."
      },
      {
          "de": "Noch ein Mal, bitte!",
          "lv": "Encore une fois, s'il vous plaît !"
      }
  ];

  out.study.tip = {
      "text": "das Mal = une fois/une occasion; mal sans article est une particule familière."
  };
  out.study.important = [
      "das Mal / die Male est un nom.",
      "ein Mal, zwei Mal indiquent le nombre de fois.",
      "mal sans article, comme dans Komm mal her!, est une particule familière."
  ];

  out.study.sectionAccents = buildIndexAlignedSectionAccents(out.study, "Mal");
}

function repairMorgenAdv(out) {
  out.lv = "Demain";
  out.study.translation = "Demain";
  out.study.explanation = ["Idée principale : morgen (adverbe) signifie demain.","morgen en minuscules = demain (Ich komme morgen).","Ne pas confondre avec der Morgen (le matin)."];
  out.study.examples = [
      {
          "de": "Ich komme morgen.",
          "lv": "Je viens demain."
      },
      {
          "de": "Bis morgen!",
          "lv": "À demain !"
      },
      {
          "de": "Morgen ist Montag.",
          "lv": "Demain, c'est lundi."
      }
  ];

  out.study.tip = [
      "morgen minuscule = demain.",
      "der Morgen = le matin."
  ];
  out.study.important = [
      "morgen minuscule = demain (adverbe).",
      "der Morgen = le matin (nom).",
      "Guten Morgen ! — toujours avec M majuscule."
  ];

  out.study.sectionAccents = buildIndexAlignedSectionAccents(out.study, "morgen");
}

function repairMorgenNoun(out) {
  out.lv = "Matin";
  out.study.translation = "Matin";
  out.study.explanation = ["Idée principale : der Morgen est un nom — le matin.","der Morgen = le matin (Guten Morgen!).","morgen minuscule = demain."];
  out.study.examples = [
      {
          "de": "Guten Morgen!",
          "lv": "Bonjour !"
      },
      {
          "de": "Der Morgen ist schön.",
          "lv": "Le matin est beau."
      }
  ];

  out.study.tip = [
      "der Morgen = le matin.",
      "morgen = demain."
  ];
  out.study.important = [
      "der Morgen est un nom : le matin.",
      "morgen minuscule est l'adverbe demain.",
      "Guten Morgen ! — M majuscule."
  ];

  out.study.sectionAccents = buildIndexAlignedSectionAccents(out.study, "Morgen");
}

function repairObst(out) {
  out.lv = "Fruits";
  out.study.translation = "Fruits";
  out.study.explanation = ["Idée principale : das Obst désigne les fruits en général.","Das Obst est un nom neutre généralement employé au singulier.","Pas de pluriel *die Obsts."];
  out.study.examples = [
      {
          "de": "Obst ist gesund.",
          "lv": "Les fruits sont sains."
      },
      {
          "de": "Ich mag Obst und Gemüse.",
          "lv": "J'aime les fruits et les légumes."
      },
      {
          "de": "Wir essen Obst.",
          "lv": "Nous mangeons des fruits."
      }
  ];

  out.study.tip = [
      "das Obst = fruits",
      "Utilisez das Obst pour parler de fruits en général."
  ];
  out.study.important = [
      "Incorrect : die Obsts. Correct : das Obst.",
      "das Obst = fruits (ensemble)."
  ];

  out.study.sectionAccents = buildIndexAlignedSectionAccents(out.study, "Obst");
}

function repairSchwimmen(out) {
  out.lv = "Nager";
  out.study.translation = "Nager";
  out.study.explanation = ["Idée principale : schwimmen signifie nager.","schwimmen décrit le mouvement de nage.","baden décrit se baigner ou rester dans l'eau."];
  out.study.examples = [
      {
          "de": "Ich schwimme gern.",
          "lv": "J'aime nager."
      },
      {
          "de": "Er schwimmt sehr gut.",
          "lv": "Il nage très bien."
      },
      {
          "de": "Wir schwimmen im Schwimmbad.",
          "lv": "Nous nageons à la piscine."
      },
      {
          "de": "Ich gehe baden.",
          "lv": "Je vais me baigner."
      }
  ];
  out.study.comparison = [
      {
          "word": "schwimmen",
          "meaning": "nager",
          "example": "Er schwimmt sehr gut. – Il nage très bien."
      },
      {
          "word": "baden",
          "meaning": "se baigner",
          "example": "Ich gehe baden. – Je vais me baigner."
      },
      {
          "word": "schwimmen gehen",
          "meaning": "aller nager",
          "example": "Wir gehen schwimmen. – Nous allons nager."
      },
      {
          "word": "duschen",
          "meaning": "prendre une douche",
          "example": "Ich dusche morgens. – Je prends une douche le matin."
      }
  ];
  out.study.tip = {
      "text": "Rappel : mouvement de nage → schwimmen ; baignade → baden."
  };
  out.study.important = [
      "schwimmen et baden ne sont pas synonymes.",
      "schwimmen décrit le mouvement de nage; baden, le fait de se baigner ou de rester dans l'eau."
  ];

  out.study.sectionAccents = buildIndexAlignedSectionAccents(out.study, "schwimmen");
}

function repairSehen(out) {
  out.lv = "Voir";
  out.study.translation = "Voir";
  out.study.explanation = ["Idée principale : sehen signifie voir avec les yeux.","sehen = voir ; schauen/ansehen = regarder.","Ich sehe dich = Je te vois."];
  out.study.examples = [
      {
          "de": "Ich sehe dich.",
          "lv": "Je te vois."
      },
      {
          "de": "Siehst du das Auto?",
          "lv": "Vois-tu la voiture ?"
      },
      {
          "de": "Ich sehe nichts.",
          "lv": "Je ne vois rien."
      },
      {
          "de": "Wir schauen einen Film.",
          "lv": "Nous regardons un film."
      }
  ];
  out.study.comparison = [
      {
          "word": "sehen",
          "meaning": "voir",
          "example": "Ich sehe dich. – Je te vois."
      },
      {
          "word": "schauen",
          "meaning": "regarder",
          "example": "Ich schaue auf das Bild. – Je regarde l'image."
      },
      {
          "word": "ansehen",
          "meaning": "regarder",
          "example": "Ich sehe mir den Film an. – Je regarde le film."
      },
      {
          "word": "hören",
          "meaning": "entendre/écouter",
          "example": "Ich höre Musik. – J'entends de la musique."
      }
  ];
  out.study.tip = {
      "text": "Rappel : yeux perçoivent → sehen ; regarder volontairement → schauen."
  };
  out.study.important = [
      "sehen n'est pas la même chose que schauen.",
      "Ich sehe dich = Je te vois ; Wir schauen einen Film = Nous regardons un film."
  ];

  out.study.sectionAccents = buildIndexAlignedSectionAccents(out.study, "sehen");
}

function repairSein(out) {
  out.lv = "Être";
  out.study.translation = "Être";
  out.study.explanation = ["Idée principale : sein signifie être.","Formes essentielles : ich bin, du bist, er ist, wir sind.","sein s'emploie pour le lieu, l'état et la profession."];
  out.study.examples = [
      {
          "de": "Ich bin hier.",
          "lv": "Je suis ici."
      },
      {
          "de": "Du bist müde.",
          "lv": "Tu es fatigué."
      },
      {
          "de": "Er ist Lehrer.",
          "lv": "Il est professeur."
      },
      {
          "de": "Wir sind zu Hause.",
          "lv": "Nous sommes à la maison."
      }
  ];
  out.study.comparison = [
      {
          "word": "sein",
          "meaning": "être",
          "example": "Ich bin hier. – Je suis ici."
      },
      {
          "word": "haben",
          "meaning": "avoir",
          "example": "Ich habe Zeit. – J'ai le temps."
      },
      {
          "word": "werden",
          "meaning": "devenir",
          "example": "Ich werde müde. – Je deviens fatigué."
      },
      {
          "word": "bleiben",
          "meaning": "rester",
          "example": "Ich bleibe hier. – Je reste ici."
      }
  ];
  out.study.tip = {
      "text": "À retenir : ich bin = je suis; du bist = tu es."
  };
  out.study.important = [
      "Les formes de sein se mémorisent : bin, bist, ist, sind.",
      "Ich bin signifie je suis, et non j'ai."
  ];

  out.study.sectionAccents = buildIndexAlignedSectionAccents(out.study, "sein");
}

function repairSich(out) {
  out.lv = "Se • Soi-même";
  out.study.translation = "Se • Soi-même";
  out.study.explanation = ["Idée principale : sich indique que l'action revient sur le sujet.","sich = se/soi-même à la 3e personne.","ich → mich, du → dich, er/sie/es → sich."];
  out.study.examples = [
      {
          "de": "Er wäscht sich.",
          "lv": "Il se lave."
      },
      {
          "de": "Ich setze mich.",
          "lv": "Je m'assois."
      },
      {
          "de": "Sie freut sich.",
          "lv": "Elle se réjouit."
      },
      {
          "de": "Ich wasche das Auto.",
          "lv": "Je lave la voiture."
      }
  ];
  out.study.comparison = [
      {
          "word": "sich",
          "meaning": "se/soi-même (3e personne)",
          "example": "Er wäscht sich. – Il se lave."
      },
      {
          "word": "mich",
          "meaning": "me/moi-même",
          "example": "Ich wasche mich. – Je me lave."
      },
      {
          "word": "dich",
          "meaning": "te/toi-même",
          "example": "Du wäschst dich. – Tu te laves."
      },
      {
          "word": "ihn",
          "meaning": "le/lui",
          "example": "Ich sehe ihn. – Je le vois."
      }
  ];
  out.study.tip = {
      "text": "Rappel : action sur soi → sich/mich/dich."
  };
  out.study.important = [
      "sich n'est pas un nom autonome.",
      "Il change selon la personne : mich, dich, sich."
  ];

  out.study.sectionAccents = buildIndexAlignedSectionAccents(out.study, "sich");
}

function repairSprechen(out) {
  out.lv = "Parler";
  out.study.translation = "Parler";
  out.study.explanation = ["Idée principale : sprechen signifie parler ou utiliser une langue.","sprechen = parler (processus, langue, conversation).","sagen = dire (un texte précis)."];
  out.study.examples = [
      {
          "de": "Ich spreche Deutsch.",
          "lv": "Je parle allemand."
      },
      {
          "de": "Wir sprechen über die Arbeit.",
          "lv": "Nous parlons du travail."
      },
      {
          "de": "Sie spricht mit ihrer Lehrerin.",
          "lv": "Elle parle avec son enseignante."
      }
  ];
  out.study.comparison = [
      {
          "word": "sprechen",
          "meaning": "parler",
          "example": "Wir sprechen über die Arbeit. – Nous parlons du travail."
      },
      {
          "word": "sagen",
          "meaning": "dire",
          "example": "Sag mir die Wahrheit. – Dis-moi la vérité."
      }
  ];
  out.study.tip = [
      "sprechen = parler",
      "Utilisez sprechen pour une conversation ou une langue."
  ];
  out.study.important = [
      "sprechen = parler (processus).",
      "sagen = dire (contenu précis)."
  ];

  out.study.sectionAccents = buildIndexAlignedSectionAccents(out.study, "sprechen");
}

function repairStehen(out) {
  out.lv = "Être debout • Se trouver";
  out.study.translation = "Être debout • Se trouver";
  out.study.explanation = ["Idée principale : stehen signifie être debout ou se trouver verticalement.","stehen = état debout ; stellen = mettre debout (action).","stehen, sitzen, liegen décrivent des positions."];
  out.study.examples = [
      {
          "de": "Ich stehe an der Tür.",
          "lv": "Je me tiens à la porte."
      },
      {
          "de": "Der Stuhl steht in der Küche.",
          "lv": "La chaise est dans la cuisine."
      },
      {
          "de": "Er sitzt am Tisch.",
          "lv": "Il est assis à table."
      },
      {
          "de": "Das Buch liegt auf dem Tisch.",
          "lv": "Le livre est sur la table."
      }
  ];
  out.study.comparison = [
      {
          "word": "stehen",
          "meaning": "être debout/se trouver",
          "example": "Ich stehe hier. – Je me tiens ici."
      },
      {
          "word": "sitzen",
          "meaning": "être assis",
          "example": "Er sitzt am Tisch. – Il est assis à table."
      },
      {
          "word": "liegen",
          "meaning": "être couché/se trouver",
          "example": "Das Buch liegt dort. – Le livre est là."
      },
      {
          "word": "stellen",
          "meaning": "mettre debout",
          "example": "Ich stelle die Flasche hin. – Je mets la bouteille."
      }
  ];
  out.study.tip = {
      "text": "Rappel : debout → stehen ; assis → sitzen ; couché → liegen."
  };
  out.study.important = [
      "stehen décrit un état, pas l'action de poser.",
      "Mettre debout = stellen, pas stehen."
  ];

  out.study.sectionAccents = buildIndexAlignedSectionAccents(out.study, "stehen");
}

function repairUeber(out) {
  out.lv = "Au-dessus de • Sur • À propos de • Par-dessus";
  out.study.translation = "Au-dessus de • Sur • À propos de • Par-dessus";
  out.study.explanation = ["Idée principale : über signifie au-dessus de, à propos de ou par-dessus.","Lieu : über = au-dessus de.","Thème : sprechen über = parler de.","Mouvement : über die Straße = traverser la rue."];
  out.study.examples = [
      {
          "de": "Die Lampe hängt über dem Tisch.",
          "lv": "La lampe est suspendue au-dessus de la table."
      },
      {
          "de": "Wir sprechen über das Wetter.",
          "lv": "Nous parlons du temps."
      },
      {
          "de": "Das Kind läuft über die Straße.",
          "lv": "L'enfant traverse la rue en courant."
      },
      {
          "de": "Ich freue mich über das Geschenk.",
          "lv": "Je me réjouis du cadeau."
      }
  ];
  out.study.comparison = [
      {
          "word": "über",
          "meaning": "au-dessus / à propos / par-dessus",
          "example": "Wir sprechen über das Wetter. – Nous parlons du temps."
      },
      {
          "word": "auf",
          "meaning": "sur (surface)",
          "example": "Das Buch liegt auf dem Tisch. – Le livre est sur la table."
      },
      {
          "word": "unter",
          "meaning": "sous",
          "example": "Die Tasche ist unter dem Tisch. – Le sac est sous la table."
      },
      {
          "word": "von",
          "meaning": "de / à propos de",
          "example": "Ich höre von dir. – J'ai des nouvelles de toi."
      }
  ];
  out.study.tip = {
      "text": "Rappel : thème → über ; surface → auf."
  };
  out.study.important = [
      "über n'est pas seulement une préposition de lieu.",
      "sprechen über = parler de."
  ];

  out.study.sectionAccents = buildIndexAlignedSectionAccents(out.study, "über");
}

function repairUhr(out) {
  out.lv = "Horloge • Montre • Heure";
  out.study.translation = "Horloge • Montre • Heure";
  out.study.explanation = ["Idée principale : die Uhr désigne l'horloge, la montre ou l'heure.","Es ist acht Uhr = Il est huit heures.","meine Uhr = ma montre."];
  out.study.examples = [
      {
          "de": "Es ist acht Uhr.",
          "lv": "Il est huit heures."
      },
      {
          "de": "Meine Uhr ist kaputt.",
          "lv": "Ma montre est cassée."
      }
  ];

  out.study.tip = [
      "die Uhr = horloge/montre ou heure.",
      "Es ist acht Uhr = il est huit heures."
  ];
  out.study.important = [
      "die Uhr peut être l'appareil ou l'heure.",
      "Es ist acht Uhr indique l'heure."
  ];

  out.study.sectionAccents = buildIndexAlignedSectionAccents(out.study, "Uhr");
}

function repairUm(out) {
  out.lv = "À • Autour de • Pour";
  out.study.translation = "À • Autour de • Pour";
  out.study.explanation = ["Idée principale : um indique l'heure précise, un lieu autour de, ou un but.","um + heure = à (Ich komme um acht Uhr).","um + lieu = autour de (um den Tisch).","um ... zu = pour (afin de)."];
  out.study.examples = [
      {
          "de": "Ich komme um acht Uhr.",
          "lv": "Je viens à huit heures."
      },
      {
          "de": "Wir sitzen um den Tisch.",
          "lv": "Nous sommes assis autour de la table."
      },
      {
          "de": "Er geht um die Ecke.",
          "lv": "Il tourne au coin de la rue."
      },
      {
          "de": "Ich lerne, um Deutsch zu sprechen.",
          "lv": "J'apprends pour parler allemand."
      }
  ];
  out.study.comparison = [
      {
          "word": "um",
          "meaning": "à / autour de / pour",
          "example": "Ich komme um acht. – Je viens à huit heures."
      },
      {
          "word": "am",
          "meaning": "le / à",
          "example": "Am Montag komme ich. – Je viens lundi."
      },
      {
          "word": "gegen",
          "meaning": "vers / environ",
          "example": "Ich komme gegen acht. – Je viens vers huit heures."
      },
      {
          "word": "für",
          "meaning": "pour",
          "example": "Das ist für dich. – C'est pour toi."
      }
  ];
  out.study.tip = {
      "text": "Rappel : um acht = à huit heures."
  };
  out.study.important = [
      "um avec l'heure = à.",
      "um ... zu exprime le but : pour."
  ];

  out.study.sectionAccents = buildIndexAlignedSectionAccents(out.study, "um");
}


const REPAIRS = {
  links: repairLinks,
  malen: repairMalen,
  "erst": repairErst,
  "essen": repairEssenVerb,
  "Essen": repairEssenNoun,
  "etwas": repairEtwas,
  "fahren": repairFahren,
  "Ferien": repairFerien,
  "fernsehen": repairFernsehenVerb,
  "Fernsehen": repairFernsehenNoun,
  "finden": repairFinden,
  "Frau": repairFrau,
  "Gemüse": repairGemuese,
  "Hand": repairHand,
  "hören": repairHoeren,
  "hübsch": repairHuebsch,
  "ihr": repairIhr,
  "im": repairIm,
  "in": repairIn,
  "jung": repairJung,
  "kein": repairKein,
  "kennen": repairKennen,
  "klein": repairKlein,
  "lassen": repairLassen,
  "laufen": repairLaufen,
  "laut": repairLautAdj,
  "Laut": repairLautNoun,
  "legen": repairLegen,
  "leise": repairLeise,
  "liegen": repairLiegen,
  "Mal": repairMal,
  "morgen": repairMorgenAdv,
  "Morgen": repairMorgenNoun,
  "Obst": repairObst,
  "schwimmen": repairSchwimmen,
  "sehen": repairSehen,
  "sein": repairSein,
  "sich": repairSich,
  "sprechen": repairSprechen,
  "stehen": repairStehen,
  "über": repairUeber,
  "Uhr": repairUhr,
  "um": repairUm,
  "einmal": repairEinmal,
  "Eis": repairEis,
  "es": repairEs,
  "euch": repairEuch,
  "ins": repairIns,
  "machen": repairMachen,
  "für": repairFuer,
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

  for (const key of ["examples", "comparison", "info", "important"]) {
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
    path.join(__dirname, "../../reports/g2-a1-owner/batches-pending/LRB-019-input.csv")
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

module.exports = {
  FINDING_TO_CARD,
  loadFrNested,
  repairCard,
  nestedToFlatPatches,
  buildCompositeForCard,
  buildFindingToCard,
  buildIndexAlignedSectionAccents,
  COMPOSITE_BY_ID,
  COMPOSITE_BY_CARD,
  CARD_KEY_ALIASES,
  resolveCardKey,
};

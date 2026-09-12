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
  out.lv = "À • Au • Près";
  out.study.translation = "À • Au • Près";
  out.study.examples = [
    { de: "an der Wand", lv: "Sur le mur" },
    { de: "am Fenster", lv: "À la fenêtre" },
    { de: "am Meer", lv: "Au bord de la mer" },
  ];
  out.study.tip = { text: "Rappel : mur/fenêtre/bord → an." };
  out.study.sectionAccents = {
    examples: [
      { de: { blue: ["an"] }, lv: { purple: ["Sur"] } },
      { de: { blue: ["am"] }, lv: { purple: ["fenêtre"] } },
      { de: { blue: ["am"] }, lv: { purple: ["bord"] } },
    ],
    comparison: out.study.sectionAccents?.comparison || out.study.comparison?.map(() => ({})),
    tip: { left: { blue: ["an"], purple: ["Rappel"], green: ["mur", "fenêtre", "bord"] } },
    important: [{ purple: ["n'est"] }],
  };
}

function repairAppetit(out) {
  out.lv = "Appétit";
  out.study.translation = "Appétit";
  out.study.examples = [
    { de: "Guten Appetit!", lv: "Bon appétit !" },
    { de: "Guten Appetit!", lv: "Bon appétit !" },
    { de: "Ich habe Appetit.", lv: "J'ai de l'appétit." },
  ];
  out.study.important = [
    "Der Appetit est au singulier seulement.",
    "Incorrect : l'appétit → Correct : der Appetit",
    "Incorrect : Ich bin Appetit. → Correct : J'ai de l'appétit.",
    "Ressentez : l'appétit.",
  ];
  out.study.sectionAccents = {
    explanation: { purple: ["Appétit"] },
    examples: [
      { de: { blue: ["Appetit"] }, lv: { purple: ["appétit"] } },
      { de: { blue: ["Appetit"] }, lv: { purple: ["appétit"] } },
      { de: { blue: ["Appetit"] }, lv: { purple: ["appétit"] } },
    ],
    tip: [{ purple: ["Appétit"] }],
    important: [{ blue: ["der Appetit"] }],
  };
}

function repairBitte(out) {
  out.lv = "S'il te plaît";
  out.study.translation = "S'il te plaît";
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
      example: "Entre, s'il te plaît. – Entre, s'il te plaît.",
    },
    {
      word: "die Bitte",
      meaning: "Une demande",
      example: "J'ai une demande. – J'ai une demande.",
    },
  ];
}

function repairBis(out) {
  out.study.examples = (out.study.examples || []).map((ex) =>
    ex.de === "Bis jetzt habe ich nichts verstanden."
      ? { ...ex, lv: "Jusqu'à présent, je n'ai rien compris." }
      : ex
  );
  out.study.comparison = [
    {
      word: "bis",
      meaning: "Jusqu'à ce que (le moment soit atteint)",
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
}

function repairDas(out) {
  out.study.comparison[2].meaning = "Qui • Laquelle • Lequel";
  out.study.tip = { text: "Rappel : genre neutre → das • que → dass." };
  if (out.study.sectionAccents?.tip?.left) {
    out.study.sectionAccents.tip.left = {
      blue: ["das"],
      purple: ["Rappel"],
      red: ["dass"],
      green: ["neutre"],
    };
  }
}

function repairDass(out) {
  out.study.comparison[1].meaning = "Parce que • Car";
  out.study.tip = { text: "Rappel : que → dass." };
  if (out.study.sectionAccents?.tip?.left) {
    out.study.sectionAccents.tip.left = {
      blue: ["dass"],
      purple: ["Rappel"],
    };
  }
}

function repairEinmal(out) {
  out.lv = "Une fois";
  out.study.translation = "Une fois";
  out.study.tip = [
    "Une fois = autrefois / une fois dans le passé.",
    "Utilisez einmal lorsque le contexte correspond à ce sens.",
  ];
  if (out.study.sectionAccents?.tip) {
    out.study.sectionAccents.tip = [{ purple: ["Une", "fois"] }];
  }
}

function repairBesuch(out) {
  out.lv = "visite";
  out.study.translation = "visite";
  out.study.explanation = [
    "Idée principale : der Besuch signifie une visite ou une visite de courtoisie.",
    "Si on parle d'un lieu ou d'un événement, le mot approprié est visite.",
    "Si on parle de la visite d'une personne, on peut dire visite ou visite de courtoisie.",
    "Le pluriel est die Besuche.",
  ];
  out.study.comparison[0].meaning = "visite • visite de courtoisie • visite";
  out.study.comparison[0].example =
    "Danke für deinen Besuch. – Merci de ta visite.";
  out.study.comparison[1].example =
    "Der Besucher wartet draußen. – Le visiteur attend dehors.";
  out.study.comparison[2].example =
    "Ich besuche meine Großeltern. – Je rends visite à mes grands-parents.";
  out.study.tip = {
    text: "Rappel : Besuch = visite/événement ; Besucher = visiteur (personne).",
  };
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
        meaning: { purple: ["visite", "visite de courtoisie"] },
      },
    ],
  };
}

function repairIns(out) {
  out.lv = "Dans • Vers • Où ?";
  out.study.translation = "Dans • Vers • Où ?";
  out.study.tip = [
    "Rappel : in + das → ins (où ? — mouvement vers l'intérieur).",
    "Où ? → ins • Où ? → im — mouvement vs emplacement.",
  ];
  if (out.study.sectionAccents?.tip) {
    out.study.sectionAccents.tip = [
      { left: { blue: ["ins"], purple: ["Rappel"], green: ["das", "ins"] } },
    ];
  }
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
  out.study.important = [
    "Ich nehme den Bus signifie « Je prends le bus ».",
    "Nehmen n'est pas la même chose que bringen.",
  ];
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
    "Nous posons des questions sur les gens, pas sur les choses ou les événements.",
    "Les choses et les événements sont posés avec was et non avec wer.",
    "Wer en allemand fait généralement l'objet d'une phrase (nominatif) — Wer ist das ? = Qui est-ce ?",
    "Lorsqu'on demande laquelle de plusieurs personnes, wer est souvent utilisé avec von (wer von euch = lequel d'entre vous).",
    "Wer change de forme selon la flexion : wen (accusatif), wem (datif), wessen (génitif).",
  ];
  out.study.examples = out.study.examples.map((ex) =>
    ex.de === "Wer kommt heute?"
      ? { de: "Wer kommt heute?", lv: "Qui vient aujourd'hui ?" }
      : ex
  );
  out.study.important = out.study.important.filter(
    (line) => !/Nepareizi|Pareizi|letton/i.test(line)
  );
  out.study.sectionAccents = {
    explanation: { blue: ["wer"], purple: ["Qui"] },
    examples: out.study.examples.map((ex) => ({
      de: { blue: ["Wer"] },
      lv: { purple: [ex.lv.split(/[\s']/)[0] || "Qui"] },
    })),
    tip: [{ purple: ["Qui"], blue: ["wer"] }],
    important: [
      { blue: ["wer"], purple: ["Qui"] },
      { blue: ["was"], green: ["choses"] },
      { blue: ["wer"], purple: ["wen", "wem", "wessen"] },
    ],
  };
}

function repairZum(out) {
  out.lv = "À • Chez";
  out.study.translation = "À • Chez";
  out.study.tip = [
    "Rappel : zu + dem → zum (à qui ?).",
    "Pour les mots féminins : zu + der → zur.",
  ];
  if (out.study.sectionAccents?.tip) {
    out.study.sectionAccents.tip = [
      { left: { blue: ["zum"], purple: ["Rappel"], green: ["dem", "zum"] } },
    ];
  }
}

function repairZu(out) {
  out.lv = "À • Chez";
  out.study.translation = "À • Chez";
  out.study.tip = [
    "Rappel : zu = à / chez selon le contexte.",
    "zu Hause = à la maison • zum Arzt = chez le médecin.",
  ];
}

function repairAber(out) {
  out.study.tip = { text: "Rappel : contraste → aber." };
  if (out.study.sectionAccents?.tip?.left) {
    out.study.sectionAccents.tip.left = {
      green: ["aber"],
      purple: ["Rappel", "contraste"],
    };
  }
}

function repairAb(out) {
  out.study.important = [
    "Ab montre le point de départ dans le temps ou dans le lieu.",
    "Si la pensée provient de l'intérieur ou s'en va vers l'extérieur, von ou aus sont plus souvent utilisés.",
  ];
  if (out.study.sectionAccents?.tip?.left) {
    out.study.sectionAccents.tip.left = {
      blue: ["ab"],
      purple: ["Rappel"],
      green: ["point", "départ"],
    };
  }
}

function repairEin(out) {
  // already mostly French — ensure tip/sectionAccents clean
  out.study.tip = { text: "Rappel : quelqu'un/non spécifique → ein." };
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
}

function repairEis(out) {
  out.lv = "Glace • Crème glacée";
  out.study.translation = "Glace • Crème glacée";
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
    { de: "Es ist spät.", lv: "Il est tard." },
    { de: "Es schneit.", lv: "Il neige." },
    { de: "Es regnet.", lv: "Il pleut." },
    { de: "Es schneit.", lv: "Il neige." },
  ];
  out.study.info = [
    "es (allemand) = il / cela / forme impersonnelle",
    "ich (allemand) = je — ne pas confondre avec es letton = je",
  ];
  out.study.tip = {
    text: "Rappel : es allemand ≠ es letton (je) ; es = il/cela/impersonnel.",
  };
  out.study.important = [
    "Le es allemand n'est pas le es letton.",
    "Le « je » letton est ich en allemand ; l'allemand es signifie souvent cela ou n'est pas traduit.",
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
}

function repairLang(out) {
  out.lv = "Long • Long";
  out.study.translation = "Long • Long";
}

function repairOder(out) {
  out.lv = "Ou";
  out.study.translation = "Ou";
}

function repairNur(out) {
  out.lv = "Seulement";
  out.study.translation = "Seulement";
}

function repairBringen(out) {
  out.lv = "Apporter • Amener";
  out.study.translation = "Apporter • Amener";
  out.study.examples = [
    { de: "Ich bringe dir ein Buch.", lv: "Je t'apporte un livre." },
    { de: "Ich bringe das Paket zur Post.", lv: "J'emmène le colis à la poste." },
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

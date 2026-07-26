const fs = require("fs");

const QUESTION_MAP = {
  "kam?": "kellele?",
  "ko?": "mida?",
  "kur?": "kus?",
  "kas?": "mis?",
};

function translateRektion(rektion) {
  if (!rektion) return rektion;
  if (rektion.includes("piederības forma")) {
    return rektion.replace("piederības forma", "omastavas käändes");
  }
  let out = rektion;
  for (const [lv, et] of Object.entries(QUESTION_MAP)) {
    out = out.split(lv).join(et);
  }
  return out;
}

function buildMinimalCard(card, trans) {
  const study = card.study;
  const out = { id: study.id, layout: study.layout, translation: trans };

  if (study.rektion) {
    const rektionEt = translateRektion(study.rektion);
    out.rektion = rektionEt;
    out.explanation = `${card.de} nõuab kindlat eessõna ${rektionEt}.`;
    out.forms = rektionEt;
    out.formsLabel = "Rektsioon:";
    const purpleParts = trans.split(" • ").map((s) => s.trim()).filter(Boolean);
    out.sectionAccents = {
      explanation: {
        blue: [card.de],
        red: [rektionEt],
        purple: purpleParts,
      },
    };
  } else {
    // special-case cards without rektion (b2-sich-verlaufen, b2-verlaufen)
    if (study.id === "b2-sich-verlaufen") {
      out.explanation = "sich verlaufen tähendab ära eksimist. Sellel puudub kindel eessõna. Ei tohi segamini ajada verlaufen'iga (kulgema).";
      out.sectionAccents = {
        explanation: { blue: ["sich verlaufen"], purple: ["ära eksimist"], red: ["verlaufen"] },
      };
    } else if (study.id === "b2-verlaufen") {
      out.explanation = "verlaufen (ilma sich'ita) tähendab kulgemist või toimumist. Ei ole sünonüüm sõnaga sich verlaufen (ära eksima).";
      out.sectionAccents = {
        explanation: { blue: ["verlaufen"], purple: ["kulgemist", "toimumist"], red: ["sich verlaufen"] },
      };
    } else {
      throw new Error(study.id + ": missing rektion and no special case defined");
    }
  }

  return out;
}

function buildBatch(cardsFile, transFile, outFile) {
  const cards = JSON.parse(fs.readFileSync(cardsFile, "utf8"));
  const transMap = require("./" + transFile);
  const result = cards.map((card) => {
    const trans = transMap[card.study.id];
    if (!trans) throw new Error("Missing translation for " + card.study.id);
    return { ...card, lv: trans, study: buildMinimalCard(card, trans) };
  });
  fs.writeFileSync(outFile, JSON.stringify(result, null, 1));
  console.log("Built", result.length, "cards ->", outFile);
  return result;
}

module.exports = { buildMinimalCard, buildBatch };

if (require.main === module) {
  const [, , cardsFile, transFile, outFile] = process.argv;
  buildBatch(cardsFile, transFile, outFile);
}

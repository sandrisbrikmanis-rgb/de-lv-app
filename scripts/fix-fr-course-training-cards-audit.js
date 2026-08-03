#!/usr/bin/env node
/**
 * Fix FR course training cards with LV/LT remnants or bad machine translations.
 * Re-translates from clean EN source or German back field.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { translateAll } = require("./lib/translate-helper");

const CACHE_PATH = path.join(ROOT, "scripts", ".fr-course-cards-fix-cache.json");
const BAD_RE = /\b(Kas|Vai|dzied|dzieda|Ko |Galds|Sols|nolieku|adatas|Skolnieks|atbild|skolniece|spalva|smaila|nazis|est mort)\b|[āčēģīķļņšūž]/i;
const EN_BAD_RE = /\b(Kas|Vai|dzied|Ko )\b|[āčēģīķļņšūž]/i;

function loadCards(file) {
  const code = fs.readFileSync(path.join(ROOT, file), "utf8");
  const sb = { window: {} };
  vm.createContext(sb);
  vm.runInContext(code, sb);
  const cards = {};
  const pat = /window\.(lesson\d+(?:Training|Exercise)Cards\w+)\s*=\s*(\[[\s\S]*?\n\]);/g;
  let m;
  while ((m = pat.exec(code))) {
    const ctx = {};
    vm.createContext(ctx);
    vm.runInContext(`result=${m[2]}`, ctx);
    cards[m[1]] = ctx.result;
  }
  return cards;
}

const MANUAL = {
  "Kas dzied?": "Qui chante ?",
  "Martha dzied.": "Martha chante.",
  "Vai Paul un Maria dzied?": "Est-ce que Paul et Maria chantent ?",
  "Kas iet?": "Qui part ?",
  "Kas tas ir?": "Qu'est-ce que c'est ?",
  "Sols ir zems.": "Le banc est bas.",
  "Galds ir augsts.": "La table est haute.",
  "Vai spalva ir smaila?": "La plume est-elle pointue ?",
  "Vai nazis ir nepieciešams?": "Le couteau est-il nécessaire ?",
  "Ko dara meitene?": "Que fait la jeune fille ?",
  "Skolnieks atbild slikti.": "L'élève répond mal.",
  "Vai skolniece atbild slikti?": "L'élève répond-elle mal ?",
  "C'est nolieku divas adatas.": "Je pose deux aiguilles.",
};

async function main() {
  const en = loadCards("data/en/courseTrainingCards.js");
  const fr = loadCards("data/fr/courseTrainingCards.js");
  const toTranslate = new Set();
  const fixMap = new Map();

  for (const [key, deck] of Object.entries(fr)) {
    const enKey = key.replace(/Fr$/, "En");
    const enDeck = en[enKey];
    if (!enDeck) continue;
    for (let i = 0; i < deck.length; i++) {
      const card = deck[i];
      const enCard = enDeck[i];
      if (!enCard) continue;
      const enF = enCard.front || "";
      const frF = card.front || "";
      const needsFix = BAD_RE.test(frF) || EN_BAD_RE.test(enF);
      if (!needsFix) continue;

      if (MANUAL[enF]) {
        fixMap.set(frF, MANUAL[enF]);
      } else if (!EN_BAD_RE.test(enF) && /^[A-Za-z]/.test(enF)) {
        toTranslate.add(enF);
        fixMap.set(frF, `__EN__:${enF}`);
      } else if (card.back) {
        const src = `Traduire en français (question ou phrase naturelle) : ${card.back}`;
        toTranslate.add(src);
        fixMap.set(frF, `__DE__:${src}`);
      }
    }
  }

  console.log(`Translating ${toTranslate.size} training card strings...`);
  const translated = await translateAll([...toTranslate], "en", "fr", {
    cachePath: CACHE_PATH,
    delayMs: 50,
    concurrency: 8,
  });

  for (const [key, deck] of Object.entries(fr)) {
    const enKey = key.replace(/Fr$/, "En");
    const enDeck = en[enKey];
    if (!enDeck) continue;
    for (let i = 0; i < deck.length; i++) {
      const enF = enDeck[i]?.front || "";
      const frF = deck[i].front || "";
      if (!fixMap.has(frF)) continue;
      const marker = fixMap.get(frF);
      if (MANUAL[enF]) {
        deck[i].front = MANUAL[enF];
      } else if (marker.startsWith("__EN__:")) {
        const src = marker.slice(7);
        deck[i].front = translated[src] || src;
      } else if (marker.startsWith("__DE__:")) {
        const src = marker.slice(7);
        let tr = translated[src] || src;
        tr = tr.replace(/^Traduire en français[^:]*:\s*/i, "").trim();
        deck[i].front = tr;
      }
    }
  }

  const outLines = ["// French course training cards for FR-DE Kurss lessons 1-7.\n"];
  for (const [key, deck] of Object.entries(fr)) {
    outLines.push(`window.${key} = ${JSON.stringify(deck, null, 2)};\n`);
  }
  const outPath = path.join(ROOT, "data/fr/courseTrainingCards.js");
  fs.writeFileSync(outPath, outLines.join("\n"), "utf8");
  fs.copyFileSync(outPath, path.join(ROOT, "www/data/fr/courseTrainingCards.js"));
  console.log(`Fixed and written ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

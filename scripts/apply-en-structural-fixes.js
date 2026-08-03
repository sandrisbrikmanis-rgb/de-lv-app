#!/usr/bin/env node
/**
 * EN-DE structural/technical fixes only (read-only audit remediation).
 * - Restore DE fields from LV
 * - Fix Latvian remnants in study tips
 * - Fix Latvian fragments in sectionAccents
 * - Sync Kurss German dialogues + obvious LV remnants in courseLessons
 * - Sync www/data/en from data/en
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");

const LV_CHARS = /[āčēģīķļņšūžĀČĒĢĪĶĻŅŠŪŽ]/;

const stats = {
  deFieldsRestored: 0,
  tipsFixed: 0,
  sectionAccentsFixed: 0,
  kurssGermanSynced: 0,
  kurssLvRemnantsFixed: 0,
};

const TIP_FIXES = {
  "Atceries: pie sienas/loga/malas → an.": "Remember: by the wall/window/edge → an.",
  "Atceries: pretstats/iebilde → aber.": "Remember: contrast/objection → aber.",
  "Atceries: auf + das → aufs (kurp?, kurp?).": "Remember: auf + das → aufs (where to?).",
  "Atceries: vidus dzimte → das; ka → dass.": "Remember: neuter gender → das; that → dass.",
  "Atceries: ka → dass.": "Remember: that → dass.",
  "Atceries: laiks/skaits → erst; daudzums → nur.": "Remember: time/count → erst; amount → nur.",
  "Atceries: Ich habe → man ir.": "Remember: Ich habe → I have.",
  "Atceries: Ich heiße... → mani sauc...": "Remember: Ich heiße... → my name is...",
  "Atceries: in + dem → im (kam?, kur?).": "Remember: in + dem → im (to whom?, where?).",
  "Atceries: in + das → ins (kurp?, kurp?).": "Remember: in + das → ins (where to?).",
  "Atceries: tu noliec → legen; lieta jau atrodas → liegen.": "Remember: you lay down → legen; object already lies → liegen.",
  "Atceries: Was machst du? = Ko tu dari?": "Remember: Was machst du? = What are you doing?",
  "Atceries: Das passt. = Tas der.": "Remember: Das passt. = That fits.",
  "Atceries: ich bin = es esmu; du bist = tu esi.": "Remember: ich bin = I am; du bist = you are.",
  "Atceries: zem galda → unter dem Tisch.": "Remember: under the table → unter dem Tisch.",
  "Atceries: von + dem → vom (kam?).": "Remember: von + dem → vom (from whom?).",
  "Atceries: zu + dem → zum (kam?).": "Remember: zu + dem → zum (to whom?).",
  "Atceries umlautu: drücken ar ü nav tas pats, kas drucken bez ü.": "Remember the umlaut: drücken with ü is not the same as drucken without ü.",
  "Atceries konstrukciju: Einfluss auf + ko?.": "Remember the construction: Einfluss auf + what?.",
};

const SECTION_ACCENT_REPLACEMENTS = [
  ["mani sauc", "my name is"],
  ["man ir", "I have"],
  ["teikums", "sentence"],
  ["kafijas biezumi", "coffee grounds"],
  ["kafijas biezumi / nogulsnes", "coffee grounds / sediment"],
  ["kafijas", "coffee"],
  ["riepu komplekts", "set of tyres"],
  ["riepu", "tyres"],
  ["procentu likme", "interest rate"],
  ["procentu", "interest"],
  ["nogulsnes", "sediment"],
  ["latviski", "in English"],
  ["par to", "for it"],
  ["uz to", "on it"],
  ["attieksme", "attitude"],
  ["komplektu", "set"],
  ["pie", "by"],
  ["sienas", "wall"],
  ["loga", "window"],
  ["malas", "edge"],
  ["kam?", "whom?"],
  ["kurp?", "where to?"],
  ["kur?", "where?"],
  ["lēciens", "jump"],
  ["likme", "rate"],
  ["pretstats", "contrast"],
  ["iebilde", "objection"],
  ["umlautu", "umlaut"],
  ["komplekts", "set"],
  ["specifiska", "specific"],
  ["Valodas", "language"],
  ["teikumu", "sentence"],
  ["vidus dzimte", "neuter gender"],
  ["ka", "that"],
  ["laiks", "time"],
  ["skaits", "count"],
  ["daudzums", "amount"],
];

const KURSS_GERMAN_REPLACEMENTS = [
  ["er arbeitt", "er arbeitet"],
  ["Is der Schüler", "Ist der Schüler"],
  ["Is der Federhalter", "Ist der Federhalter"],
  ["Is der Federhalter weiß? No,", "Ist der Federhalter weiß? Nein,"],
  ["If, ich stehe", "Ja, ich stehe"],
  ["Hans, singe ein Lied! What are you doing?", "Hans, singe ein Lied! Was tust du?"],
];

const KURSS_LV_REPLACEMENTS = [
  ["Robert, vingro!", "Robert, exercise!"],
  ["Robert and Jāni, exercise!", "Robert and John, exercise!"],
  ["Müller jaunkundze, vingrojiet!", "Miss Müller, exercise!"],
  ["turnen — vingrot", "turnen — to do gymnastics"],
  ["ich habe — man ir", "ich habe — I have"],
  ["Ich habe einen Tisch — man ir galds", "Ich habe einen Tisch — I have a table"],
  ["ich heiße — mani sauc", "ich heiße — my name is"],
  ['"man ir"', '"I have"'],
  ["man ir", "I have"],
];

function loadArray(relPath) {
  const code = fs.readFileSync(path.join(ROOT, relPath), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const key = Object.keys(ctx.window).find((k) => Array.isArray(ctx.window[k]));
  return key ? ctx.window[key] : [];
}

function writeArrayFile(filePath, varName, data) {
  const json = JSON.stringify(data, null, 2);
  fs.writeFileSync(filePath, `const ${varName} = ${json};\n\nwindow.${varName} = ${varName};\n`, "utf8");
}

function restoreDeFields(lvEntry, enEntry) {
  let changed = 0;
  if (enEntry.de !== lvEntry.de) {
    enEntry.de = lvEntry.de;
    changed++;
  }
  if (lvEntry.de_article !== undefined && enEntry.de_article !== lvEntry.de_article) {
    enEntry.de_article = lvEntry.de_article;
    changed++;
  }
  if (lvEntry.de_plural !== undefined && enEntry.de_plural !== lvEntry.de_plural) {
    enEntry.de_plural = lvEntry.de_plural;
    changed++;
  }

  if (!lvEntry.study || !enEntry.study) return changed;

  if (Array.isArray(lvEntry.study.examples) && Array.isArray(enEntry.study.examples)) {
    lvEntry.study.examples.forEach((tex, i) => {
      if (enEntry.study.examples[i] && enEntry.study.examples[i].de !== tex.de) {
        enEntry.study.examples[i].de = tex.de;
        changed++;
      }
    });
  }

  if (Array.isArray(lvEntry.study.comparison) && Array.isArray(enEntry.study.comparison)) {
    lvEntry.study.comparison.forEach((trow, i) => {
      if (!enEntry.study.comparison[i]) return;
      if (enEntry.study.comparison[i].word !== trow.word) {
        enEntry.study.comparison[i].word = trow.word;
        changed++;
      }
      const lvEx = trow.example || "";
      const enEx = enEntry.study.comparison[i].example || "";
      if (lvEx && enEx && /\s*=\s*/.test(lvEx) && /\s*=\s*/.test(enEx)) {
        const lvDe = lvEx.split(/\s*=\s*/)[0].trim();
        const enNative = enEx.split(/\s*=\s*/).slice(1).join("=").trim();
        const next = `${lvDe} = ${enNative}`;
        if (enEntry.study.comparison[i].example !== next) {
          enEntry.study.comparison[i].example = next;
          changed++;
        }
      }
    });
  }

  if (Array.isArray(lvEntry.study.words) && Array.isArray(enEntry.study.words)) {
    lvEntry.study.words.forEach((tw, i) => {
      if (enEntry.study.words[i] && enEntry.study.words[i].de !== tw.de) {
        enEntry.study.words[i].de = tw.de;
        changed++;
      }
    });
  }

  if (Array.isArray(lvEntry.study.comparisonTable) && Array.isArray(enEntry.study.comparisonTable)) {
    lvEntry.study.comparisonTable.forEach((trow, i) => {
      if (enEntry.study.comparisonTable[i] && trow.de && enEntry.study.comparisonTable[i].de !== trow.de) {
        enEntry.study.comparisonTable[i].de = trow.de;
        changed++;
      }
    });
  }

  return changed;
}

function fixTip(tip) {
  if (!tip) return 0;
  let fixed = 0;
  const apply = (text) => {
    if (typeof text !== "string") return text;
    if (TIP_FIXES[text]) {
      fixed++;
      return TIP_FIXES[text];
    }
    if (text.startsWith("Atceries") || LV_CHARS.test(text)) {
      // fallback: prefix only
      const next = text.replace(/^Atceries:?/, "Remember:");
      if (next !== text) fixed++;
      return next;
    }
    return text;
  };

  if (typeof tip === "string") {
    const next = apply(tip);
    return fixed;
  }
  if (tip.text) tip.text = apply(tip.text);
  if (Array.isArray(tip)) tip.forEach((t, i) => { tip[i] = apply(t); });
  if (Array.isArray(tip.leftBlocks)) {
    tip.leftBlocks.forEach((b) => {
      if (typeof b.text === "string") b.text = apply(b.text);
    });
  }
  return fixed;
}

function fixSectionAccents(sectionAccents) {
  if (!sectionAccents || typeof sectionAccents !== "object") return 0;
  let fixed = 0;
  const DE_FIXES = [["theatre", "Theater"], ["metre", "Meter"], ["litre", "Liter"], ["Geise", "Geize"]];
  const TIP_ACCENT_REPLACEMENTS = [
    ["pie", "by"], ["sienas", "wall"], ["loga", "window"], ["malas", "edge"],
    ["pretstats", "contrast"], ["iebilde", "objection"], ["umlautu", "umlaut"],
    ["vidus dzimte", "neuter gender"], ["ka", "that"],
    ["laiks", "time"], ["skaits", "count"], ["daudzums", "amount"],
    ["tu noliec", "you lay down"], ["lieta jau atrodas", "object already lies"],
    ["atrodas", "lies"], ["noliec", "lay down"],
    ["ko tu dari", "what are you doing"], ["tas der", "that fits"],
    ["es esmu", "I am"], ["tu esi", "you are"],
    ["mani sauc", "my name is"], ["man ir", "I have"],
    ["kam?", "whom?"], ["kurp?", "where to?"], ["kur?", "where?"],
    ["zem galda", "under the table"],
  ];

  const replaceIn = (obj, pairs) => {
    if (Array.isArray(obj)) {
      obj.forEach((v, i) => {
        if (typeof v === "string") {
          for (const [from, to] of pairs) {
            if (v === from) { obj[i] = to; fixed++; break; }
          }
        } else replaceIn(v, pairs);
      });
    } else if (obj && typeof obj === "object") {
      Object.values(obj).forEach((v) => replaceIn(v, pairs));
    }
  };

  const replaceDeBranch = (obj, inDe = false) => {
    if (Array.isArray(obj)) {
      obj.forEach((v, i) => {
        if (typeof v === "string") {
          if (!inDe) return;
          for (const [from, to] of DE_FIXES) {
            if (v === from) { obj[i] = to; fixed++; break; }
          }
        } else replaceDeBranch(v, inDe);
      });
    } else if (obj && typeof obj === "object") {
      for (const [k, v] of Object.entries(obj)) {
        replaceDeBranch(v, inDe || k === "de" || k === "word");
      }
    }
  };

  if (sectionAccents.tip) replaceIn(sectionAccents.tip, TIP_ACCENT_REPLACEMENTS);
  if (Array.isArray(sectionAccents.examples)) {
    sectionAccents.examples.forEach((row) => { if (row?.lv) replaceIn(row.lv, TIP_ACCENT_REPLACEMENTS); });
  }
  replaceDeBranch(sectionAccents);
  return fixed;
}

function fixStudyCards(enWords) {
  for (const card of enWords) {
    if (!card.study) continue;
    stats.tipsFixed += fixTip(card.study.tip);
    if (card.study.sectionAccents) {
      stats.sectionAccentsFixed += fixSectionAccents(card.study.sectionAccents);
    }
  }
}

function applyReplacements(content, replacements, counterKey) {
  let out = content;
  for (const [from, to] of replacements) {
    const before = out;
    out = out.split(from).join(to);
    if (out !== before) stats[counterKey] += (before.split(from).length - 1);
  }
  return out;
}

function syncWwwDataEn() {
  const files = ["a1", "a2", "b1", "b2", "c1", "c2", "sentences", "verbs", "courseLessons", "courseTrainingCards", "dialogueIdMap", "nounArticles"];
  for (const f of files) {
    const src = path.join(ROOT, "data/en", `${f}.js`);
    const dest = path.join(ROOT, "www/data/en", `${f}.js`);
    if (fs.existsSync(src)) fs.copyFileSync(src, dest);
  }
}

// --- Main ---
const LEVELS = ["a1", "a2", "b1", "b2", "c1", "c2"];
const VAR_NAMES = { a1: "A1_WORDS", a2: "A2_WORDS", b1: "B1_WORDS", b2: "B2_WORDS", c1: "C1_WORDS", c2: "C2_WORDS" };

for (const level of LEVELS) {
  const lv = loadArray(`data/${level}.js`);
  const en = loadArray(`data/en/${level}.js`);
  for (let i = 0; i < Math.min(lv.length, en.length); i++) {
    stats.deFieldsRestored += restoreDeFields(lv[i], en[i]);
  }
  fixStudyCards(en);
  writeArrayFile(path.join(ROOT, "data/en", `${level}.js`), VAR_NAMES[level], en);
  console.log(`Processed ${level}`);
}

// sentences + dialogueIdMap DE restore (not verbs.js per task scope)
const lvSent = loadArray("data/sentences.js");
const enSent = loadArray("data/en/sentences.js");
lvSent.forEach((lv, i) => {
  if (enSent[i] && enSent[i].de !== lv.de) {
    enSent[i].de = lv.de;
    stats.deFieldsRestored++;
  }
});
writeArrayFile(path.join(ROOT, "data/en/sentences.js"), "SENTENCE_ENTRIES", enSent);

const lvDlgCode = fs.readFileSync(path.join(ROOT, "data/dialogueIdMap.js"), "utf8");
const lvDlgCtx = { window: {} };
vm.createContext(lvDlgCtx);
vm.runInContext(lvDlgCode, lvDlgCtx);
const lvDlgObj = lvDlgCtx.window.DIALOGUE_ID_MAP;

const enDlgCode = fs.readFileSync(path.join(ROOT, "data/en/dialogueIdMap.js"), "utf8");
const enDlgCtx = { window: {} };
vm.createContext(enDlgCtx);
vm.runInContext(enDlgCode, enDlgCtx);
const enDlg = enDlgCtx.window.DIALOGUE_ID_MAP;
for (const [id, entry] of Object.entries(lvDlgObj)) {
  if (enDlg[id] && enDlg[id].de !== entry.de) {
    enDlg[id].de = entry.de;
    stats.deFieldsRestored++;
  }
}
fs.writeFileSync(
  path.join(ROOT, "data/en/dialogueIdMap.js"),
  `const DIALOGUE_ID_MAP = ${JSON.stringify(enDlg, null, 2)};\n\nwindow.DIALOGUE_ID_MAP = DIALOGUE_ID_MAP;\n`,
  "utf8"
);

// courseLessons
const clPath = path.join(ROOT, "data/en/courseLessons.js");
let clContent = fs.readFileSync(clPath, "utf8");
clContent = applyReplacements(clContent, KURSS_GERMAN_REPLACEMENTS, "kurssGermanSynced");
clContent = applyReplacements(clContent, KURSS_LV_REPLACEMENTS, "kurssLvRemnantsFixed");
fs.writeFileSync(clPath, clContent, "utf8");

// www sync
syncWwwDataEn();
fs.copyFileSync(path.join(ROOT, "languages/en/ui.js"), path.join(ROOT, "www/languages/en/ui.js"));

console.log("\n=== EN structural fix stats ===");
console.log(JSON.stringify(stats, null, 2));

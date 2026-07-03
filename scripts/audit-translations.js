const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");

function loadWords(file) {
  const code = fs.readFileSync(path.join(root, file), "utf8");
  const sandbox = {};
  vm.runInNewContext(code, sandbox);
  const key = Object.keys(sandbox).find((k) => k.endsWith("_WORDS"));
  return sandbox[key] || [];
}

function splitMeanings(s) {
  if (!s) return [];
  return s
    .split(/\s*•\s*|\s*;\s*/)
    .map((x) => x.trim().toLowerCase())
    .filter(Boolean);
}

const issues = [];

for (const [file, level] of [
  ["data/a1.js", "A1"],
  ["data/a2.js", "A2"],
]) {
  const words = loadWords(file);
  console.log(`${level}: ${words.length} words`);

  for (const w of words) {
    const de = w.de;
    const lv = w.lv || "";

    if (lv.includes(";")) {
      issues.push({
        type: "semicolon_in_lv",
        de,
        lv,
        file,
        level,
      });
    }

    if (!w.study) continue;

    const trans = w.study.translation || "";

    if (trans.includes(";")) {
      issues.push({
        type: "semicolon_in_translation",
        de,
        lv,
        translation: trans,
        file,
        level,
      });
    }

    const lvParts = splitMeanings(lv);
    const transParts = splitMeanings(trans);

    if (trans && lvParts.length > 0 && transParts.length > 0) {
      const lvSet = new Set(lvParts);
      const transSet = new Set(transParts);
      const lvOnly = lvParts.filter((x) => !transSet.has(x));
      const transOnly = transParts.filter((x) => !lvSet.has(x));
      if (lvOnly.length || transOnly.length) {
        issues.push({
          type: "lv_translation_mismatch",
          de,
          lv,
          translation: trans,
          lvOnly,
          transOnly,
          file,
          level,
        });
      }
    } else if (
      trans &&
      lv &&
      !trans.includes("•") &&
      !lv.includes("•") &&
      lv.trim().toLowerCase() !== trans.trim().toLowerCase()
    ) {
      issues.push({
        type: "lv_translation_mismatch_simple",
        de,
        lv,
        translation: trans,
        file,
        level,
      });
    }
  }
}

console.log("\n=== TOTAL ISSUES:", issues.length, "===\n");
for (const i of issues) {
  console.log(JSON.stringify(i));
}

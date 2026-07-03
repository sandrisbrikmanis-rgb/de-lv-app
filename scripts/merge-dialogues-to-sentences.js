const fs = require("fs");
const vm = require("vm");
const path = require("path");

const root = path.join(__dirname, "..");

function loadEntries(file, varName) {
  const code = fs.readFileSync(path.join(root, file), "utf8");
  const sandbox = {};
  vm.runInNewContext(code, sandbox);
  return sandbox[varName] || [];
}

const sentences = loadEntries("data/sentences.js", "SENTENCE_ENTRIES");
const dialogues = loadEntries("data/dialogues.js", "DIALOGUE_ENTRIES");

const existing = new Set(sentences.map((s) => `${s.de}|${s.lv}`));
const toAdd = [];
const dupes = [];

for (const d of dialogues) {
  const key = `${d.de}|${d.lv}`;
  if (existing.has(key)) {
    dupes.push(key);
    continue;
  }
  existing.add(key);
  toAdd.push({ de: d.de, lv: d.lv, level: "Sätze" });
}

const merged = [...sentences, ...toAdd];
const lines = ["const SENTENCE_ENTRIES = ["];
for (let i = 0; i < merged.length; i++) {
  const e = merged[i];
  lines.push("  {");
  lines.push(`    "de": ${JSON.stringify(e.de)},`);
  lines.push(`    "lv": ${JSON.stringify(e.lv)},`);
  lines.push('    "level": "Sätze"');
  lines.push(`  }${i < merged.length - 1 ? "," : ""}`);
}
lines.push("];");
lines.push("");
lines.push("window.SENTENCE_ENTRIES = SENTENCE_ENTRIES;");
lines.push("");

fs.writeFileSync(path.join(root, "data/sentences.js"), lines.join("\n"), "utf8");

console.log(
  JSON.stringify({
    sentencesBefore: sentences.length,
    dialogues: dialogues.length,
    added: toAdd.length,
    duplicatesSkipped: dupes.length,
    mergedTotal: merged.length
  })
);

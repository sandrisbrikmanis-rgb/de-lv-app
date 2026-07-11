const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");

function fingerprint(entry) {
  const de = String(entry.de || "").trim();
  const art = String(entry.de_article || "").trim();
  const lv = String(entry.lv || "").trim();
  const pl = String(entry.de_plural || "").trim();
  return `${de}|${art}|${lv}|${pl}`;
}

function studyScore(entry) {
  return entry.study ? 1 : 0;
}

function dedupeWords(words) {
  const seen = new Map();
  const result = [];
  let removed = 0;

  for (const entry of words) {
    const fp = fingerprint(entry);
    if (!seen.has(fp)) {
      seen.set(fp, result.length);
      result.push(entry);
      continue;
    }

    const idx = seen.get(fp);
    const existing = result[idx];
    if (studyScore(entry) > studyScore(existing)) {
      result[idx] = entry;
    }
    removed += 1;
  }

  return { result, removed };
}

function writeB1File(rel, words) {
  const filePath = path.join(root, rel);
  const body = `const B1_WORDS = ${JSON.stringify(words, null, 2)};\n\nwindow.B1_WORDS = B1_WORDS;\n`;
  fs.writeFileSync(filePath, body, "utf8");
}

for (const rel of ["data/b1.js", "www/data/b1.js"]) {
  const filePath = path.join(root, rel);
  const win = {};
  vm.runInContext(fs.readFileSync(filePath, "utf8"), vm.createContext({ window: win }), {
    filename: path.basename(filePath),
  });
  const before = win.B1_WORDS.length;
  const { result, removed } = dedupeWords(win.B1_WORDS);
  writeB1File(rel, result);
  console.log(`${rel}: ${before} -> ${result.length} (removed ${removed})`);
}

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const files = [
  "data/a1.js",
  "data/a2.js",
  "data/b1.js",
  "data/b2.js",
  "data/c1.js",
  "data/c2.js",
  "data/comparisonStudy.js",
  "data/sentences.js",
  "data/verbs.js",
  "data/courseLessons.js",
  "ui.js",
];

for (const rel of files) {
  const filePath = path.join(root, rel);
  if (!fs.existsSync(filePath)) {
    console.log(`MISSING ${rel}`);
    continue;
  }
  const code = fs.readFileSync(filePath, "utf8");
  try {
    new vm.Script(code, { filename: rel });
    console.log(`OK   ${rel}`);
  } catch (err) {
    console.log(`FAIL ${rel}: ${err.message}`);
    const m = String(err.stack || "").match(/:(\d+):(\d+)/);
    if (m) {
      const line = Number(m[1]);
      const lines = code.split(/\r?\n/);
      const start = Math.max(0, line - 4);
      const end = Math.min(lines.length, line + 3);
      for (let i = start; i < end; i++) {
        const marker = i + 1 === line ? ">>>" : "   ";
        console.log(`${marker} ${i + 1}: ${lines[i]}`);
      }
    }
  }
}

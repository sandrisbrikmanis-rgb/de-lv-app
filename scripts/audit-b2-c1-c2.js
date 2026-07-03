/**
 * B2/C1/C2 translation audit — safe vm load, no ConvertTo-Json roundtrip.
 * Usage: node scripts/audit-b2-c1-c2.js [--limit N]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const bullet = "\u2022";

const TARGETS = [
  { file: "data/b2.js", key: "B2_WORDS", level: "B2" },
  { file: "data/c1.js", key: "C1_WORDS", level: "C1" },
  { file: "data/c2.js", key: "C2_WORDS", level: "C2" },
];

const properNounStems = [
  "vācij", "latvij", "berlīn", "parīz", "london", "rīg", "roma", "oslo", "eirop", "āzij", "amerik",
];

const RELATIVE_CLAUSE = /,\s*(kas|ko|kur|kura|kuru|kā|kāds|kāda|arī|lai|par|no|pēc|pirms|kad|ja|tad)\s/i;

function loadWords(file, key) {
  const code = fs.readFileSync(path.join(root, file), "utf8");
  const sandbox = {};
  vm.runInNewContext(code, sandbox);
  return sandbox[key] || [];
}

function splitMeanings(s) {
  if (!s) return [];
  return String(s)
    .split(/\s*•\s*|\s*;\s*/)
    .map((x) => x.trim().toLowerCase())
    .filter(Boolean);
}

function getFirstWord(text) {
  const t = String(text || "").trim();
  const m = t.match(/^([^/\s•,;:.!?—–\-()\[\]]+)/);
  return m ? m[1] : t;
}

function isProperNoun(word) {
  const lower = String(word || "").toLowerCase();
  if (!lower) return false;
  if (["rīga", "bonn", "malta", "kipra"].includes(lower)) return true;
  return properNounStems.some((stem) => lower.startsWith(stem));
}

function checkUppercaseLv(text, field, de, idx, level) {
  const issues = [];
  const segments = text.includes(bullet)
    ? text.split(bullet).map((s) => s.trim())
    : [text.trim()];
  for (const seg of segments) {
    const first = getFirstWord(seg);
    if (!first) continue;
    const ch = first[0];
    if (ch && ch === ch.toUpperCase() && ch !== ch.toLowerCase() && !isProperNoun(first)) {
      issues.push({ type: "uppercase_lv", index: idx, de, field, value: text, segment: seg });
      break;
    }
  }
  return issues;
}

function auditWords(words, level) {
  const issues = [];
  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    const de = w.de || "";
    const lv = w.lv || "";

    if (lv.includes(";")) {
      issues.push({ type: "semicolon_in_lv", level, index: i, de, lv });
    }
    if (lv.includes(" — ")) {
      issues.push({ type: "em_dash_in_lv", level, index: i, de, lv });
    }
    if (lv.includes(",") && !lv.includes(bullet) && !RELATIVE_CLAUSE.test(lv)) {
      issues.push({ type: "comma_separator_in_lv", level, index: i, de, lv });
    }

    issues.push(...checkUppercaseLv(lv, "lv", de, i, level));

    if (!w.study) continue;

    const trans = w.study.translation || "";
    if (trans.includes(";")) {
      issues.push({ type: "semicolon_in_translation", level, index: i, de, translation: trans });
    }
    issues.push(...checkUppercaseLv(trans, "translation", de, i, level));

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
          level,
          index: i,
          de,
          lv,
          translation: trans,
          lvOnly,
          transOnly,
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
        level,
        index: i,
        de,
        lv,
        translation: trans,
      });
    }
  }
  return issues;
}

function main() {
  const args = process.argv.slice(2);
  let limit = null;
  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--limit" && args[i + 1]) limit = parseInt(args[i + 1], 10);
  }

  const allIssues = [];
  const summary = [];

  for (const target of TARGETS) {
    const words = loadWords(target.file, target.key);
    const issues = auditWords(words, target.level);
    allIssues.push(...issues);
    summary.push({
      level: target.level,
      file: target.file,
      words: words.length,
      study: words.filter((w) => w.study).length,
      issues: issues.length,
    });
  }

  const byType = {};
  for (const iss of allIssues) {
    byType[iss.type] = (byType[iss.type] || 0) + 1;
  }

  console.log("=== B2 / C1 / C2 AUDIT ===");
  for (const s of summary) {
    console.log(
      `${s.level}: words=${s.words}, study=${s.study}, issues=${s.issues}`
    );
  }
  console.log("\n=== ISSUE SUMMARY BY TYPE ===");
  for (const [t, c] of Object.entries(byType).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${t}: ${c}`);
  }
  console.log(`\nTOTAL ISSUES: ${allIssues.length}\n`);

  const show = limit ? allIssues.slice(0, limit) : allIssues.slice(0, 50);
  console.log(`=== FIRST ${show.length} ISSUES ===`);
  for (const iss of show) {
    console.log(JSON.stringify(iss));
  }

  const outPath = path.join(root, "scripts", "audit-b2-c1-c2-results.json");
  fs.writeFileSync(
    outPath,
    JSON.stringify({ summary, byType, issues: allIssues }, null, 2)
  );
  console.log(`\nFull results: ${outPath}`);
}

main();

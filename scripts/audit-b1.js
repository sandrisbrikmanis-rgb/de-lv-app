/**
 * B1-only content audit — safe vm load, no ConvertTo-Json roundtrip.
 * Usage: node scripts/audit-b1.js [--block N] [--limit N]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const bullet = "\u2022";
const BLOCK_SIZE = 500;

const properNounStems = [
  "vācij", "latvij", "krievij", "francij", "spānij", "itālij", "polij", "zviedrij", "norvēģij",
  "somij", "īrij", "grieķij", "turcij", "austrij", "beļģij", "čehij", "ungārij", "rumānij",
  "bulgārij", "ukrain", "portugāl", "dānij", "nīderland", "šveic", "eirop", "āzij", "āfrik",
  "amerik", "kanād", "meksik", "brazīlij", "argentīn", "indij", "ķīn", "japān", "korej",
  "berlīn", "parīz", "london", "vīne", "hamburg", "minhen", "rīg", "roma", "oslo",
];

function loadB1() {
  const code = fs.readFileSync(path.join(root, "data/b1.js"), "utf8");
  const sandbox = {};
  vm.runInNewContext(code, sandbox);
  return sandbox.B1_WORDS || [];
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
  const m = t.match(/^([^/\s•,;:.!?—–\-()]+)/);
  return m ? m[1] : t;
}

function isProperNoun(word) {
  const lower = String(word || "").toLowerCase();
  if (!lower) return false;
  if (["rīga", "rīgas", "rīgā", "bonn", "malta", "kipra"].includes(lower)) return true;
  return properNounStems.some((stem) => lower.startsWith(stem));
}

function checkUppercaseLv(text, field, de, idx) {
  const issues = [];
  const segments = text.includes(bullet)
    ? text.split(bullet).map((s) => s.trim())
    : [text.trim()];
  for (const seg of segments) {
    const first = getFirstWord(seg);
    if (!first) continue;
    const ch = first[0];
    if (ch && ch === ch.toUpperCase() && ch !== ch.toLowerCase() && !isProperNoun(first)) {
      issues.push({
        type: "uppercase_lv",
        index: idx,
        de,
        field,
        value: text,
        segment: seg,
      });
    }
  }
  return issues;
}

function checkComparison(study, de, idx) {
  const issues = [];
  const comp = study.comparison;
  if (!Array.isArray(comp) || comp.length === 0) return issues;

  const words = comp.map((c) => String(c.word || "").toLowerCase());
  const seen = new Set();
  for (const w of words) {
    if (seen.has(w)) {
      issues.push({ type: "comparison_duplicate_word", index: idx, de, word: w });
    }
    seen.add(w);
  }

  const examples = comp.map((c) => String(c.example || ""));
  const exSet = new Set();
  for (const ex of examples) {
    if (exSet.has(ex.toLowerCase())) {
      issues.push({ type: "comparison_duplicate_example", index: idx, de, example: ex });
    }
    exSet.add(ex.toLowerCase());
    const dePart = ex.includes("=") ? ex.split("=")[0].trim() : ex.trim();
    if (!dePart.includes(".") && dePart.split(/\s+/).length <= 3) {
      issues.push({ type: "comparison_short_example", index: idx, de, example: ex });
    }
  }

  const prefixes = words
    .map((w) => {
      const m = w.match(
        /^(ab|an|auf|aus|bei|ein|mit|nach|vor|zu|zer|wider|durch|über|unter|hinter|neben|gegen|um|weg)/
      );
      return m ? m[1] : null;
    })
    .filter(Boolean);
  if (words.length >= 3 && prefixes.length >= 2) {
    const counts = {};
    for (const p of prefixes) counts[p] = (counts[p] || 0) + 1;
    const max = Math.max(...Object.values(counts));
    if (max >= Math.ceil(words.length * 0.6)) {
      issues.push({
        type: "comparison_prefix_grouping",
        index: idx,
        de,
        words,
        note: "Vārdi grupēti pēc prefiksa — iespējams mākslīgs salīdzinājums",
      });
    }
  }

  const sa = study.sectionAccents;
  if (sa && sa.comparison) {
    for (let i = 0; i < sa.comparison.length; i++) {
      const row = sa.comparison[i];
      const wordAcc = row.word || {};
      const meaningAcc = row.meaning || {};
      const hasGreen = wordAcc.green && wordAcc.green.length > 0;
      const hasPurple = meaningAcc.purple && meaningAcc.purple.length > 0;
      if (!hasGreen) {
        issues.push({
          type: "comparison_missing_green",
          index: idx,
          de,
          row: i,
          word: comp[i]?.word,
        });
      }
      if (!hasPurple) {
        issues.push({
          type: "comparison_missing_purple",
          index: idx,
          de,
          row: i,
          word: comp[i]?.word,
        });
      }
    }
  } else if (comp.length > 0) {
    issues.push({
      type: "comparison_missing_sectionAccents",
      index: idx,
      de,
      rows: comp.length,
    });
  }

  return issues;
}

function auditBlock(words, start, end) {
  const issues = [];
  const slice = words.slice(start, end);

  for (let i = 0; i < slice.length; i++) {
    const idx = start + i;
    const w = slice[i];
    const de = w.de || "";
    const lv = w.lv || "";

    if (lv.includes(";")) {
      issues.push({ type: "semicolon_in_lv", index: idx, de, lv });
    }

    issues.push(...checkUppercaseLv(lv, "lv", de, idx));

    if (!w.study) continue;

    const trans = w.study.translation || "";
    if (trans.includes(";")) {
      issues.push({ type: "semicolon_in_translation", index: idx, de, translation: trans });
    }
    issues.push(...checkUppercaseLv(trans, "translation", de, idx));

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
          index: idx,
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
        index: idx,
        de,
        lv,
        translation: trans,
      });
    }

    issues.push(...checkComparison(w.study, de, idx));

    if (w.study.examples) {
      for (const ex of w.study.examples) {
        if (ex.lv) {
          const ch = (ex.lv.trim()[0] || "");
          if (ch === ch.toUpperCase() && ch !== ch.toLowerCase() && !isProperNoun(getFirstWord(ex.lv))) {
            issues.push({
              type: "uppercase_example_lv",
              index: idx,
              de,
              example: ex.lv,
            });
          }
        }
      }
    }
  }

  return issues;
}

function main() {
  const args = process.argv.slice(2);
  let blockNum = null;
  let limit = null;
  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--block" && args[i + 1]) blockNum = parseInt(args[i + 1], 10);
    if (args[i] === "--limit" && args[i + 1]) limit = parseInt(args[i + 1], 10);
  }

  const words = loadB1();
  const total = words.length;
  const numBlocks = Math.ceil(total / BLOCK_SIZE);

  console.log("=== B1 AUDIT ===");
  console.log(`Total words: ${total}`);
  console.log(`Study cards: ${words.filter((w) => w.study).length}`);
  console.log(
    `Comparison cards: ${words.filter((w) => w.study && w.study.comparison && w.study.comparison.length).length}`
  );
  console.log(`Blocks (${BLOCK_SIZE} words each): ${numBlocks}`);
  console.log("");

  const allIssues = [];
  if (blockNum !== null) {
    const start = (blockNum - 1) * BLOCK_SIZE;
    const end = Math.min(start + BLOCK_SIZE, total);
    console.log(`Auditing block ${blockNum} [${start}..${end - 1}]`);
    allIssues.push(...auditBlock(words, start, end));
  } else {
    for (let b = 0; b < numBlocks; b++) {
      const start = b * BLOCK_SIZE;
      const end = Math.min(start + BLOCK_SIZE, total);
      allIssues.push(...auditBlock(words, start, end));
    }
  }

  const byType = {};
  for (const iss of allIssues) {
    byType[iss.type] = (byType[iss.type] || 0) + 1;
  }

  console.log("=== ISSUE SUMMARY BY TYPE ===");
  for (const [t, c] of Object.entries(byType).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${t}: ${c}`);
  }
  console.log(`\nTOTAL ISSUES: ${allIssues.length}\n`);

  const show = limit ? allIssues.slice(0, limit) : allIssues.slice(0, 40);
  console.log(`=== FIRST ${show.length} ISSUES ===`);
  for (const iss of show) {
    console.log(JSON.stringify(iss));
  }

  const outPath = path.join(root, "scripts", "audit-b1-results.json");
  fs.writeFileSync(outPath, JSON.stringify({ total, numBlocks, blockSize: BLOCK_SIZE, byType, issues: allIssues }, null, 2));
  console.log(`\nFull results: ${outPath}`);
}

main();

#!/usr/bin/env node
/**
 * Audit explanatory study cards against standardStudy rules in ui.js.
 * Usage:
 *   node scripts/audit-study-cards.js
 *   node scripts/audit-study-cards.js --json > scripts/study-cards-audit-report.json
 *   node scripts/audit-study-cards.js --failures-only
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const DATA_FILES = ["a1.js", "a2.js", "b1.js", "b2.js", "c1.js", "c2.js"];
const jsonOut = process.argv.includes("--json");
const failuresOnly = process.argv.includes("--failures-only");

const RULES = {
  explanationMin: 5,
  examplesMin: 6,
  examplesMax: 8,
  comparisonMin: 4,
  comparisonMax: 6,
  tipExact: 2,
  importantMin: 2,
  importantMax: 4,
};

function loadWords(fileName) {
  const filePath = path.join(root, "data", fileName);
  const code = fs.readFileSync(filePath, "utf8");
  const match = code.match(/const\s+(\w+)_WORDS\s*=\s*(\[[\s\S]*\]);/);
  if (!match) throw new Error(`Could not load ${fileName}`);
  const sandbox = {};
  vm.runInNewContext(`${match[1]}_WORDS = ${match[2]};`, sandbox);
  return sandbox[`${match[1]}_WORDS`] || [];
}

function countExplanation(study) {
  if (Array.isArray(study.explanation)) return study.explanation.length;
  if (Array.isArray(study.explanationLines)) return study.explanationLines.length;
  if (typeof study.explanation === "string" && study.explanation.trim()) {
    return study.explanation
      .split(/(?<=[.!?])\s+|\n+/)
      .map((part) => part.trim())
      .filter(Boolean).length;
  }
  return 0;
}

function countTips(study) {
  if (Array.isArray(study.tip)) return study.tip.length;
  if (study.tip && typeof study.tip === "object") return 1;
  if (typeof study.tip === "string" && study.tip.trim()) return 1;
  return 0;
}

function countImportant(study) {
  if (Array.isArray(study.important)) return study.important.length;
  if (study.important && typeof study.important === "object") return 1;
  if (typeof study.important === "string" && study.important.trim()) return 1;
  return 0;
}

function auditStandardStudy(card, file) {
  const study = card.study;
  const explanation = countExplanation(study);
  const examples = Array.isArray(study.examples) ? study.examples.length : 0;
  const comparison = Array.isArray(study.comparison) ? study.comparison.length : 0;
  const tip = countTips(study);
  const important = countImportant(study);
  const issues = [];

  if (explanation < RULES.explanationMin) issues.push({ rule: "explanation", expected: `>=${RULES.explanationMin}`, actual: explanation });
  if (examples < RULES.examplesMin) issues.push({ rule: "examples", expected: `${RULES.examplesMin}-${RULES.examplesMax}`, actual: examples });
  if (examples > RULES.examplesMax) issues.push({ rule: "examples", expected: `${RULES.examplesMin}-${RULES.examplesMax}`, actual: examples });
  if (comparison < RULES.comparisonMin) issues.push({ rule: "comparison", expected: `${RULES.comparisonMin}-${RULES.comparisonMax}`, actual: comparison });
  if (comparison > RULES.comparisonMax) issues.push({ rule: "comparison", expected: `${RULES.comparisonMin}-${RULES.comparisonMax}`, actual: comparison });
  if (tip !== RULES.tipExact) issues.push({ rule: "tip", expected: String(RULES.tipExact), actual: tip });
  if (important < RULES.importantMin) issues.push({ rule: "important", expected: `${RULES.importantMin}-${RULES.importantMax}`, actual: important });
  if (important > RULES.importantMax) issues.push({ rule: "important", expected: `${RULES.importantMin}-${RULES.importantMax}`, actual: important });
  if (!study.id) issues.push({ rule: "id", expected: "present", actual: "missing" });

  return {
    file,
    level: card.level,
    de: card.de,
    id: study.id || null,
    layout: study.layout || "standardStudy",
    counts: { explanation, examples, comparison, tip, important },
    issues,
    pass: issues.length === 0,
  };
}

function auditMinimalStudy(card, file) {
  const study = card.study;
  const issues = [];
  if (!study.id) issues.push({ rule: "id", expected: "present", actual: "missing" });
  if (!study.translation && !card.lv) issues.push({ rule: "translation", expected: "present", actual: "missing" });
  const hasVariants = Array.isArray(study.variants) && study.variants.length > 0;
  const hasExamples = Array.isArray(study.examples) && study.examples.length > 0;
  if (!hasVariants && !hasExamples) {
    issues.push({ rule: "content", expected: "variants or examples", actual: "none" });
  }
  return {
    file,
    level: card.level,
    de: card.de,
    id: study.id || null,
    layout: "minimalStudy",
    counts: {
      variants: hasVariants ? study.variants.length : 0,
      examples: hasExamples ? study.examples.length : 0,
    },
    issues,
    pass: issues.length === 0,
  };
}

const report = {
  generatedAt: new Date().toISOString(),
  rules: RULES,
  summary: {
    totalStudyCards: 0,
    standardStudy: { total: 0, pass: 0, fail: 0 },
    minimalStudy: { total: 0, pass: 0, fail: 0 },
    issueCounts: {},
    byLevel: {},
  },
  cards: [],
};

for (const file of DATA_FILES) {
  const words = loadWords(file);
  for (const card of words) {
    if (!card.study) continue;
    report.summary.totalStudyCards += 1;
    const layout = card.study.layout || "standardStudy";
    const level = card.level || file.replace(".js", "").toUpperCase();
    report.summary.byLevel[level] = report.summary.byLevel[level] || { total: 0, pass: 0, fail: 0 };

    let result;
    if (layout === "minimalStudy") {
      result = auditMinimalStudy(card, file);
      report.summary.minimalStudy.total += 1;
      if (result.pass) report.summary.minimalStudy.pass += 1;
      else report.summary.minimalStudy.fail += 1;
    } else if (layout === "standardStudy" || !card.study.layout) {
      result = auditStandardStudy(card, file);
      report.summary.standardStudy.total += 1;
      if (result.pass) report.summary.standardStudy.pass += 1;
      else report.summary.standardStudy.fail += 1;
    } else {
      result = {
        file,
        level,
        de: card.de,
        id: card.study.id || null,
        layout,
        issues: [{ rule: "layout", expected: "standardStudy|minimalStudy", actual: layout }],
        pass: false,
      };
    }

    report.summary.byLevel[level].total += 1;
    if (result.pass) report.summary.byLevel[level].pass += 1;
    else report.summary.byLevel[level].fail += 1;

    for (const issue of result.issues) {
      report.summary.issueCounts[issue.rule] = (report.summary.issueCounts[issue.rule] || 0) + 1;
    }

    if (!failuresOnly || !result.pass) report.cards.push(result);
  }
}

if (jsonOut) {
  process.stdout.write(JSON.stringify(report, null, 2));
} else {
  const s = report.summary;
  console.log("Study card audit");
  console.log("================");
  console.log(`Total study cards: ${s.totalStudyCards}`);
  console.log(`standardStudy: ${s.standardStudy.pass}/${s.standardStudy.total} pass`);
  console.log(`minimalStudy: ${s.minimalStudy.pass}/${s.minimalStudy.total} pass`);
  console.log("\nBy level:");
  for (const [level, stats] of Object.entries(s.byLevel).sort()) {
    console.log(`  ${level}: ${stats.pass}/${stats.total} pass`);
  }
  console.log("\nIssue counts:");
  for (const [rule, count] of Object.entries(s.issueCounts).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${rule}: ${count}`);
  }
  const failing = report.cards.filter((card) => !card.pass);
  console.log(`\nFailing cards: ${failing.length}`);
  console.log("First 20 failures:");
  for (const card of failing.slice(0, 20)) {
    console.log(`  ${card.level}:${card.de} -> ${card.issues.map((i) => `${i.rule}(${i.actual})`).join(", ")}`);
  }
}

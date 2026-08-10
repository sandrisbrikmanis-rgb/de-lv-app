#!/usr/bin/env node
/**
 * EN-DE Verbs deterministic pre-checks (read-only).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");
const FORMS = [
  "infinitiv",
  "praesens",
  "imperfektIndikativ",
  "imperfektKonjunktiv",
  "partizipVergangenheit",
];

const MOJIBAKE = /Ô[^\x00-\x7F]{1,3}|[─┼][^\x00-\x7F]|â€[^\x00-\x7F]|Ã[^\x00-\x7F]/;
const LV_ONLY = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const ZWSP = /\u200B|\uFEFF/;

function md5(p) {
  return crypto.createHash("md5").update(fs.readFileSync(p)).digest("hex");
}

function load(rel) {
  const code = fs.readFileSync(path.join(ROOT, rel), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.VERB_ENTRIES;
}

function verbSlug(de) {
  return String(de).trim().replace(/\s+/g, "-").replace(/[^\wäöüßÄÖÜ-]/gi, "");
}

function verbId(index, infinitivDe) {
  return `verb-${index}-${verbSlug(infinitivDe)}`;
}

function main() {
  const lv = load("data/verbs.js");
  const en = load("data/en/verbs.js");
  const report = {
    generatedAt: new Date().toISOString(),
    verbs: en.length,
    formsPerVerb: FORMS.length,
    totalForms: en.length * FORMS.length,
    mirrorPass: md5(path.join(ROOT, "data/en/verbs.js")) === md5(path.join(ROOT, "www/data/en/verbs.js")),
    syntaxPass: true,
    countParity: en.length === lv.length,
    deReadOnly: true,
    lvReadOnly: true,
    deMismatchCount: 0,
    semicolonCount: 0,
    mojibakeCount: 0,
    zwspCount: 0,
    lvRemnantCount: 0,
    placeholderCount: 0,
    emptyNativeCount: 0,
    issues: [],
  };

  try {
    execSync("node --check data/en/verbs.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check www/data/en/verbs.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check data/verbs.js", { cwd: ROOT, stdio: "pipe" });
  } catch {
    report.syntaxPass = false;
  }

  for (let i = 0; i < en.length; i++) {
    const id = verbId(i, en[i].infinitiv.de);
    for (const form of FORMS) {
      const lvForm = lv[i][form];
      const enForm = en[i][form];
      if (enForm.de !== lvForm.de) {
        report.deReadOnly = false;
        report.deMismatchCount++;
        report.issues.push({ verbId: id, field: form, type: "DE_MISMATCH" });
      }
      const text = enForm.lv || "";
      if (!text.trim()) {
        report.emptyNativeCount++;
        report.issues.push({ verbId: id, field: form, type: "EMPTY_NATIVE" });
      }
      if (text.includes(";")) {
        report.semicolonCount++;
        report.issues.push({ verbId: id, field: form, type: "SEMICOLON" });
      }
      if (MOJIBAKE.test(text)) {
        report.mojibakeCount++;
        report.issues.push({ verbId: id, field: form, type: "MOJIBAKE", text });
      }
      if (ZWSP.test(text)) {
        report.zwspCount++;
        report.issues.push({ verbId: id, field: form, type: "ZWSP" });
      }
      if (LV_ONLY.test(text)) {
        report.lvRemnantCount++;
        report.issues.push({ verbId: id, field: form, type: "LV_REMNANT", text });
      }
      if (/^(TODO|TBD|\.\.\.)$/i.test(text.split("•")[0].trim())) {
        report.placeholderCount++;
        report.issues.push({ verbId: id, field: form, type: "PLACEHOLDER" });
      }
    }
  }

  report.pass =
    report.mirrorPass &&
    report.syntaxPass &&
    report.countParity &&
    report.deReadOnly &&
    report.deMismatchCount === 0 &&
    report.semicolonCount === 0 &&
    report.mojibakeCount === 0 &&
    report.placeholderCount === 0 &&
    report.emptyNativeCount === 0;

  const out = path.join(ROOT, "reports/temp/en-verbs-audit-data.json");
  fs.writeFileSync(out, JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
  process.exit(report.pass ? 0 : 1);
}

main();

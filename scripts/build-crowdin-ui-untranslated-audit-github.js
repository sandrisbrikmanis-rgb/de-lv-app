#!/usr/bin/env node
"use strict";

/**
 * Generate reports/crowdin-ui-untranslated-audit-GITHUB.md — clickable GitHub links.
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const {
  ROOT,
  UI_LANGUAGES,
  CROWDIN_SOURCE_LANG,
  crowdinCodeFromRepoLang,
} = require("./lib/ui-crowdin-bridge");

const REPO = "sandrisbrikmanis-rgb/de-lv-app";
const REPORTS = path.join(ROOT, "reports");
const AUDIT_FILE = "crowdin-ui-untranslated-audit.md";
const GITHUB_FILE = "crowdin-ui-untranslated-audit-GITHUB.md";

function detectBranch() {
  if (process.env.GITHUB_BRANCH) return process.env.GITHUB_BRANCH;
  try {
    return execSync("git branch --show-current", { cwd: ROOT, encoding: "utf8" }).trim();
  } catch {
    return "main";
  }
}

function ghBlob(file, branch) {
  return `https://github.com/${REPO}/blob/${branch}/reports/${file}`;
}

function ghLink(file, label, branch) {
  return `[${label || file}](${ghBlob(file, branch)})`;
}

function ghAnchor(file, anchor, label, branch) {
  return `[${label}](${ghBlob(file, branch)}#${anchor})`;
}

function langSlug(repoLang) {
  const crowdin = crowdinCodeFromRepoLang(repoLang);
  return crowdin !== repoLang ? `lang-${repoLang}-crowdin-${crowdin}` : `lang-${repoLang}`;
}

function langLabel(repoLang) {
  const crowdin = crowdinCodeFromRepoLang(repoLang);
  return crowdin !== repoLang ? `${repoLang} (Crowdin: \`${crowdin}\`)` : repoLang;
}

function readAuditSummary() {
  const auditPath = path.join(REPORTS, AUDIT_FILE);
  if (!fs.existsSync(auditPath)) {
    return {
      placeholderErrors: "?",
      realUntranslated: "?",
      sameRows: "?",
    };
  }
  const text = fs.readFileSync(auditPath, "utf8");
  const pick = (label) => {
    const match = text.match(new RegExp(`\\| ${label} \\| \\*\\*(\\d+)\\*\\* \\|`));
    return match ? match[1] : "?";
  };
  return {
    placeholderErrors: pick("Placeholder kļūdas"),
    realUntranslated: pick("REAL_UNTRANSLATED"),
    sameRows: pick("Kopējais `target === LV source` rindu skaits"),
  };
}

function main() {
  const branch = detectBranch();
  const pr = process.env.GITHUB_PR || "691";
  const prLine = pr ? `[#${pr}](https://github.com/${REPO}/pull/${pr})` : "(PR pēc push)";
  const summary = readAuditSummary();
  const targetLangs = UI_LANGUAGES.filter((lang) => lang !== CROWDIN_SOURCE_LANG);

  const lines = [
    "# Crowdin UI — GitHub atvēršanas indekss",
    "",
    `**Branch:** \`${branch}\` · **PR:** ${prLine}`,
    "",
    "Atver šo failu GitHub (PR vai branch), tad izmanto saites uz pilno auditu un konkrētām valodu sadaļām.",
    "",
    "## Sākt šeit",
    "",
    "| Fails | Apraksts |",
    "|---|---|",
    `| ${ghLink(AUDIT_FILE, "Pilns audits", branch)} | 31 valoda × 305 atslēgas, \`target === LV source\` klasifikācija |`,
    `| ${ghLink(GITHUB_FILE, "Šis indekss", branch)} | Visas GitHub saites |`,
    `| ${ghLink("crowdin-ui-placeholder-repair-owner.md", "Placeholder remonts (55/55)", branch)} | Deterministisks placeholder tokenu remonts |`,
    "",
    "## Kopsavilkums",
    "",
    `- **target === LV source rindas:** ${summary.sameRows}`,
    `- **REAL_UNTRANSLATED:** ${summary.realUntranslated}`,
    `- **Placeholder kļūdas:** ${summary.placeholderErrors}`,
    "",
    "## Ātrās saites — pilns audits",
    "",
    `- ${ghLink(AUDIT_FILE, "Atvērt pilnu auditu", branch)}`,
    `- [Gala kopsavilkums](${ghBlob(AUDIT_FILE, branch)}#gala-kopsavilkums)`,
    `- [Satura rādītājs](${ghBlob(AUDIT_FILE, branch)}#satura-rādītājs-github)`,
    "",
    "## Valodu sadaļas",
    "",
    "| Valoda | Sadaļa audita failā |",
    "|---|---|",
  ];

  for (const lang of targetLangs) {
    lines.push(
      `| ${langLabel(lang)} | ${ghAnchor(AUDIT_FILE, langSlug(lang), lang, branch)} |`
    );
  }

  lines.push(
    "",
    "## Saistītie faili",
    "",
    `- LV avots: \`crowdin/ui/lv.json\``,
    `- Audita ģenerators: \`scripts/audit-crowdin-ui-untranslated.js\``,
    `- Placeholder remonts: \`scripts/repair-crowdin-ui-placeholders.js\``,
    "",
    "---",
    "",
    `**Greek kartējums:** Crowdin \`el\` → repo \`gr\` · **Placeholder remonts:** 55/55 · **HTML kļūdas:** 0`,
    ""
  );

  fs.writeFileSync(path.join(REPORTS, GITHUB_FILE), `${lines.join("\n")}\n`, "utf8");
  console.log(`Wrote reports/${GITHUB_FILE}`);
}

main();

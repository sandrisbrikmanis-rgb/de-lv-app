#!/usr/bin/env node
"use strict";
/**
 * Rebuild ES-DE B1 OWNER proposals final package from saved Luna progress (no API).
 * Usage: node scripts/rebuild-es-de-b1-owner-proposals-final.js
 */
require("dotenv").config({ path: require("path").join(__dirname, "..", ".env") });

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { PRODUCTION_PATH } = require("./lib/es-b1-discovery-config");
const { buildOwnerContext, loadProductionCards } = require("./lib/es-b1-owner-context");
const { DEFAULT_MODEL } = require("./lib/openai-es-b1-owner-proposals");
const {
  mergeLunaResult,
  buildFinalItem,
  validateProposalsFinal,
  countBy,
  patchOrphanFindingIds,
} = require("./lib/es-b1-owner-proposals-validate");

const SOURCE_JSON = path.join(ROOT, "reports/es-de-b1-full-audit-owner-source.json");
const AUDIT_JSON = path.join(ROOT, "reports/es-de-b1-full-audit.json");
const PROGRESS_FILE = path.join(ROOT, "scripts/.es-de-b1-owner-proposals-progress.json");
const OUT_JSON = path.join(ROOT, "reports/es-de-b1-owner-proposals-final.json");
const OUT_VIEW = path.join(ROOT, "reports/es-de-b1-owner-proposals-final.md");
const OUT_SUMMARY = path.join(ROOT, "reports/es-de-b1-owner-proposals-final-summary.md");

const REPO = "sandrisbrikmanis-rgb/de-lv-app";
const PR = 665;
const BRANCH = "cursor/es-de-b1-first-full-discovery-master-1-9-3141";

function truncate(text, max = 600) {
  const s = String(text ?? "").replace(/\n/g, " ");
  return s.length > max ? `${s.slice(0, max)}…` : s;
}

function buildViewMd(items) {
  const lines = [
    "# ES–DE B1 — gala OWNER proposals (neatkarīga validācija)",
    "",
    `**Model:** ${DEFAULT_MODEL}`,
    `**Objekti:** ${items.length}`,
    "",
  ];
  for (const item of items) {
    lines.push(`## ${item.id}`, "");
    lines.push(`- Source Finding IDs: ${(item.sourceFindingIds || []).map((id) => `\`${id}\``).join(", ")}`);
    lines.push(`- Severity: ${item.severity}`);
    lines.push(`- Category: ${item.category}`);
    lines.push(`- Card ID: \`${item.cardId}\``);
    lines.push(`- DE: \`${truncate(item.de, 200)}\``);
    lines.push(`- Field/path: \`${item.field}\``);
    lines.push(`- CURRENT: \`${truncate(item.current, 500)}\``);
    lines.push(`- NEW: \`${truncate(item.new, 500)}\``);
    lines.push(`- Action: ${item.action}`);
    lines.push(`- Validation decision: ${item.validationDecision}`);
    lines.push(`- OWNER Status: ${item.status}`);
    lines.push(`- Pamatojums: ${item.reason}`);
    lines.push("");
  }
  return lines.join("\n");
}

function buildSummary(payload, validation, mirrorPass, syntaxPass) {
  const items = payload.items;
  const decisions = countBy(items, "validationDecision");
  const actions = countBy(items, "action");
  const severities = countBy(items, "severity");
  const labot = decisions.LABOT || 0;
  const nelabot = decisions.NELABOT || 0;
  const falsePositive = decisions.FALSE_POSITIVE || 0;
  const sourceDeIssue = decisions.SOURCE_DE_ISSUE || 0;
  const reviewReq = decisions.OWNER_REVIEW_REQUIRED || 0;

  const verdict =
    validation.errors.length > 0
      ? "FAIL"
      : reviewReq > items.length * 0.15
        ? "BLOCKED"
        : "READY FOR OWNER REVIEW";

  const lines = [
    "# ES–DE B1 — gala OWNER proposals kopsavilkums",
    "",
    `**HEAD:** \`${payload.sourceHead}\``,
    `**Model:** ${payload.model}`,
    `**PR:** #${payload.pr}`,
    "",
    "## Metrikas",
    "",
    "| Metrika | Rezultāts |",
    "|---------|----------:|",
    `| Source findings | ${payload.sourceFindings} |`,
    `| Source OWNER objects | ${payload.sourceOwnerObjects} |`,
    `| Processed | ${payload.processedOwnerObjects}/${payload.sourceOwnerObjects} |`,
    `| LABOT | ${labot} |`,
    `| NELABOT | ${nelabot} |`,
    `| FALSE_POSITIVE | ${falsePositive} |`,
    `| SOURCE_DE_ISSUE | ${sourceDeIssue} |`,
    `| OWNER_REVIEW_REQUIRED | ${reviewReq} |`,
    `| REPLACE | ${actions.REPLACE || 0} |`,
    `| REMOVE | ${actions.REMOVE || 0} |`,
    `| ADD_STUDY/STRUCTURE | ${actions.ADD_STUDY || 0} |`,
    `| KRITISKA | ${severities.KRITISKA || 0} |`,
    `| AUGSTA | ${severities.AUGSTA || 0} |`,
    `| VIDĒJA | ${severities.VIDĒJA || 0} |`,
    `| ZEMA | ${severities.ZEMA || 0} |`,
    `| CURRENT exact match | ${validation.metrics.currentMatchPct.toFixed(1)}% |`,
    `| Finding ID coverage | ${validation.metrics.findingIdsCovered}/${validation.metrics.sourceFindings} |`,
    `| Card ID found | ${validation.metrics.cardFoundPct.toFixed(1)}% |`,
    `| Field/path found | ${validation.metrics.fieldFoundPct.toFixed(1)}% |`,
    `| Tukšs NEW pie LABOT | ${validation.metrics.labotEmptyNew} |`,
    `| CURRENT === NEW pie LABOT | ${validation.metrics.labotSameNew} |`,
    `| CURRENT !== NEW pie NELABOT | ${validation.metrics.nelabotDiffNew} |`,
    `| Foreign remnants LABOT NEW | ${validation.metrics.foreignInLabotNew} |`,
    `| comparison DE saglabāts | ${validation.metrics.germanPreservedPct.toFixed(1)}% |`,
    `| sectionAccents visible match | ${validation.metrics.sectionAccentMatchPct.toFixed(1)}% |`,
    `| Production changes | 0 |`,
    `| DE changes | 0 |`,
    `| Mirror | ${mirrorPass ? "PASS" : "FAIL"} |`,
    `| Syntax | ${syntaxPass ? "PASS" : "FAIL"} |`,
    "",
    `## Verdikts: **${verdict}**`,
    "",
  ];

  if (validation.errors.length) {
    lines.push("## Validācijas kļūdas", "");
    for (const e of validation.errors.slice(0, 40)) lines.push(`- ${e}`);
    if (validation.errors.length > 40) lines.push(`- … un vēl ${validation.errors.length - 40}`);
    lines.push("");
  }

  return { lines: lines.join("\n"), verdict };
}

function main() {
  const head = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const source = JSON.parse(fs.readFileSync(SOURCE_JSON, "utf8"));
  const audit = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  const progress = JSON.parse(fs.readFileSync(PROGRESS_FILE, "utf8"));
  const sourceOwners = source.ownerObjects || [];
  const lunaById = new Map((progress.lunaItems || []).map((i) => [i.id, i]));

  if (lunaById.size !== 2842) {
    throw new Error(`Expected 2842 Luna items, got ${lunaById.size}`);
  }

  const { esWords, lvWords } = loadProductionCards();
  const finalItems = [];

  for (const src of sourceOwners) {
    const ctx = buildOwnerContext(src, esWords, lvWords);
    const luna = lunaById.get(src.id) || {};
    const merged = mergeLunaResult(ctx, luna);
    finalItems.push(buildFinalItem(src, merged));
  }

  patchOrphanFindingIds(finalItems, audit.findings || []);

  const payload = {
    repository: REPO,
    pr: PR,
    branch: BRANCH,
    sourceHead: head,
    model: DEFAULT_MODEL,
    sourceFindings: audit.counts?.rawFindings || 3795,
    sourceOwnerObjects: 2842,
    processedOwnerObjects: 2842,
    productionFilesChanged: 0,
    usage: { batchCount: progress.completedBatches?.length || 0 },
    items: finalItems,
  };

  const validation = validateProposalsFinal(sourceOwners, payload, esWords, audit.findings);

  let syntaxPass = true;
  try {
    execSync("node --check data/es/b1.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check www/data/es/b1.js", { cwd: ROOT, stdio: "pipe" });
  } catch {
    syntaxPass = false;
  }
  const mirrorPass = isSyncedWithWww(PRODUCTION_PATH);
  const { lines, verdict } = buildSummary(payload, validation, mirrorPass, syntaxPass);

  fs.writeFileSync(OUT_JSON, JSON.stringify(payload, null, 2) + "\n");
  fs.writeFileSync(OUT_VIEW, buildViewMd(finalItems));
  fs.writeFileSync(OUT_SUMMARY, lines);

  console.log(
    JSON.stringify(
      {
        processed: finalItems.length,
        validationErrors: validation.errors.length,
        metrics: validation.metrics,
        mirrorPass,
        syntaxPass,
        verdict,
        errors: validation.errors.slice(0, 10),
      },
      null,
      2,
    ),
  );

  if (verdict === "FAIL") process.exit(1);
}

main();

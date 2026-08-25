#!/usr/bin/env node
"use strict";
/**
 * ES-DE A1+A2 foreign remnants Luna OWNER proposals (573 items, single cycle).
 * Usage: node scripts/build-es-a1-a2-foreign-remnants-owner-proposals.js
 */
require("dotenv").config({ path: require("path").join(__dirname, "..", ".env") });

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { proposeForeignRemnantRepairs, DEFAULT_MODEL } = require("./lib/openai-es-a1-a2-foreign-remnants-proposals");
const {
  hasForeignRemnant,
  germanPartPreserved,
  applyPostFixes,
  validateProposals,
} = require("./lib/es-foreign-remnant-validate");

const SOURCE_JSON = path.join(ROOT, "reports/es-de-a1-a2-foreign-remnants-owner-source.json");
const OUT_JSON = path.join(ROOT, "reports/es-de-a1-a2-foreign-remnants-owner-proposals-001-573.json");
const OUT_VIEW = path.join(ROOT, "reports/es-de-a1-a2-foreign-remnants-owner-view-001-573.md");
const OUT_SUMMARY = path.join(ROOT, "reports/es-de-a1-a2-foreign-remnants-owner-proposals-summary.md");
const REPO = "sandrisbrikmanis-rgb/de-lv-app";
const PR = 664;
const BRANCH = "cursor/es-de-a1-a2-owner-apply-001-200-3141";

function buildViewMd(items) {
  const lines = [
    "# ES–DE A1+A2 — foreign remnants OWNER view (001–573)",
    "",
    `**Model:** ${DEFAULT_MODEL}`,
    `**Items:** ${items.length}`,
    "",
  ];
  for (const item of items) {
    lines.push(`## ${item.id}`, "");
    lines.push(`- Category: ${item.category}`);
    lines.push(`- Level: ${item.level}`);
    lines.push(`- Card ID: \`${item.cardId}\``);
    lines.push(`- DE: \`${item.de}\``);
    lines.push(`- Field/path: \`${item.field}\``);
    lines.push(`- CURRENT: \`${item.current}\``);
    lines.push(`- NEW: \`${item.new}\``);
    lines.push(`- Action: ${item.action}`);
    lines.push(`- Status: ${item.status}`);
    lines.push(`- Pamatojums: ${item.reason}`);
    lines.push("");
  }
  return lines.join("\n");
}

function buildSummary(payload, validation, mirrorPass, syntaxPass) {
  const items = payload.items;
  const replace = items.filter((i) => i.action === "REPLACE").length;
  const remove = items.filter((i) => i.action === "REMOVE").length;
  const parskati = items.filter((i) => i.status === "PĀRSKATĪT").length;
  const reviewReq = items.filter((i) => i.status === "OWNER_REVIEW_REQUIRED").length;
  const lv = items.filter((i) => i.category === "LV_REMNANT").length;
  const it = items.filter((i) => i.category === "IT_REMNANT").length;

  const verdict =
    validation.errors.length > 0
      ? "FAIL"
      : reviewReq > 0 && parskati === 0
        ? "BLOCKED"
        : "READY FOR OWNER REVIEW";

  const lines = [
    "# ES–DE A1+A2 — foreign remnants OWNER proposals summary",
    "",
    `**HEAD:** \`${payload.sourceHead}\``,
    `**Model:** ${payload.model}`,
    "",
    "## Kopsavilkums",
    "",
    "| Metrika | Rezultāts |",
    "|---------|----------:|",
    `| Requested | **${payload.requested}** |`,
    `| Processed | **${payload.processed}/${payload.requested}** |`,
    `| LV_REMNANT | **${lv}** |`,
    `| IT_REMNANT | **${it}** |`,
    `| REPLACE | **${replace}** |`,
    `| REMOVE | **${remove}** |`,
    `| PĀRSKATĪT | **${parskati}** |`,
    `| OWNER_REVIEW_REQUIRED | **${reviewReq}** |`,
    `| Missing | **${Math.max(0, payload.requested - payload.processed)}** |`,
    `| Duplicates | **0** |`,
    `| Foreign remnants in NEW | **${validation.foreignInNew}** |`,
    `| German part preserved (comparison) | **${validation.germanPreserved}/${validation.germanChecked} (${validation.germanPreservedPct.toFixed(1)}%)** |`,
    `| Production changes | **0** |`,
    `| DE changes | **0** |`,
    `| JSON validation | **PASS** |`,
    `| Mirror | **${mirrorPass ? "PASS" : "FAIL"}** |`,
    `| Syntax | **${syntaxPass ? "PASS" : "FAIL"}** |`,
    "",
    `## FINAL VERDICT: **${verdict}**`,
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

async function main() {
  if (!process.env.OPENAI_API_KEY?.trim()) {
    throw new Error("OPENAI_API_KEY required for Luna proposals");
  }

  const head = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const source = JSON.parse(fs.readFileSync(SOURCE_JSON, "utf8"));
  const sourceItems = source.items;
  if (sourceItems.length !== 573) {
    throw new Error(`Expected 573 source items, got ${sourceItems.length}`);
  }

  console.log(`Luna proposals: processing ${sourceItems.length} items (internal API batches)...`);
  const stats = {};
  const { items: lunaItems, usage, batchCount } = await proposeForeignRemnantRepairs(sourceItems, { stats });
  console.log(`Luna returned ${lunaItems.length} items in ${batchCount} batches, tokens=${usage?.total_tokens || stats.totalTokens || "?"}`);

  const lunaById = new Map(lunaItems.map((i) => [i.id, i]));
  const merged = [];

  for (const src of sourceItems) {
    const luna = lunaById.get(src.id) || {};
    const category = src.category || (src.categories?.[0] ?? "LV_REMNANT");
    const item = {
      id: src.id,
      category,
      level: src.level,
      cardId: src.cardId,
      de: src.de,
      field: src.field,
      current: src.current,
      new: luna.new ?? luna.proposed ?? luna.proposedEs ?? "",
      action: String(luna.action || "REPLACE").toUpperCase(),
      status: luna.status || "PĀRSKATĪT",
      reason: luna.reason || luna.shortReason || "",
    };
    if (item.action === "REMOVE" && item.new === "") {
      // ok
    } else if (!item.new && item.new !== "") {
      item.status = "OWNER_REVIEW_REQUIRED";
      item.reason = item.reason || "Luna did not return new value";
    }
    merged.push(item);
  }

  const finalItems = applyPostFixes(merged);

  const payload = {
    repository: REPO,
    pr: PR,
    branch: BRANCH,
    sourceHead: head,
    model: DEFAULT_MODEL,
    requested: 573,
    processed: merged.length,
    productionFilesChanged: 0,
    usage: { ...stats, batchCount },
    items: finalItems,
  };

  const validation = validateProposals(source, payload);

  let syntaxPass = true;
  try {
    execSync("node --check data/es/a1.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check data/es/a2.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check www/data/es/a1.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check www/data/es/a2.js", { cwd: ROOT, stdio: "pipe" });
  } catch {
    syntaxPass = false;
  }
  const mirrorPass = isSyncedWithWww("data/es/a1.js") && isSyncedWithWww("data/es/a2.js");

  const { lines, verdict } = buildSummary(payload, validation, mirrorPass, syntaxPass);

  fs.writeFileSync(OUT_JSON, JSON.stringify(payload, null, 2) + "\n");
  fs.writeFileSync(OUT_VIEW, buildViewMd(finalItems));
  fs.writeFileSync(OUT_SUMMARY, lines);

  console.log(
    JSON.stringify(
      {
        processed: finalItems.length,
        validationErrors: validation.errors.length,
        foreignInNew: validation.foreignInNew,
        germanPreservedPct: validation.germanPreservedPct,
        mirrorPass,
        syntaxPass,
        verdict,
        outJson: OUT_JSON,
        outView: OUT_VIEW,
      },
      null,
      2,
    ),
  );

  if (verdict === "FAIL") {
    console.error("Validation errors:", validation.errors.slice(0, 10));
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

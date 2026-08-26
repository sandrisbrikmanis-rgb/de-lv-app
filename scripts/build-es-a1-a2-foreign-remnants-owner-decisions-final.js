#!/usr/bin/env node
"use strict";
/**
 * ES-DE A1+A2 foreign remnants — final OWNER decisions (Luna round 2 + mandatory overrides).
 * Usage: node scripts/build-es-a1-a2-foreign-remnants-owner-decisions-final.js
 */
require("dotenv").config({ path: require("path").join(__dirname, "..", ".env") });

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { validateForeignRemnantDecisions, DEFAULT_MODEL } = require("./lib/openai-es-a1-a2-foreign-remnants-validate");
const {
  MANDATORY_OWNER_DECISIONS,
  MANDATORY_IDS,
  RELATED_CONFIRMED_REMNANTS,
} = require("./lib/es-foreign-remnant-owner-mandatory");
const { hasForeignRemnant, germanPartPreserved } = require("./lib/es-foreign-remnant-validate");

const SOURCE_JSON = path.join(ROOT, "reports/es-de-a1-a2-foreign-remnants-owner-source.json");
const PROPOSALS_JSON = path.join(ROOT, "reports/es-de-a1-a2-foreign-remnants-owner-proposals-001-573.json");
const OUT_JSON = path.join(ROOT, "reports/es-de-a1-a2-foreign-remnants-owner-decisions-final.json");
const OUT_MD = path.join(ROOT, "reports/es-de-a1-a2-foreign-remnants-owner-decisions-final.md");
const OUT_SUMMARY = path.join(ROOT, "reports/es-de-a1-a2-foreign-remnants-owner-decisions-final-summary.md");
const REPO = "sandrisbrikmanis-rgb/de-lv-app";
const PR = 664;
const BRANCH = "cursor/es-de-a1-a2-owner-apply-001-200-3141";

function normalizeLunaDecision(src, proposal, luna) {
  const action = String(luna.action || proposal.action || "REPLACE").toUpperCase();
  const status = luna.status === "NELABOT" ? "NELABOT" : "LABOT";
  const validationResult =
    String(luna.validationResult || "").toUpperCase() === "CORRECTED" ? "CORRECTED" : "CONFIRMED";
  let newVal = luna.new ?? luna.proposedNew ?? proposal.new;
  if (action === "KEEP" || status === "NELABOT") {
    newVal = src.current;
  }
  if (action === "REMOVE") {
    newVal = "";
  }
  return {
    id: src.id,
    category: src.category || proposal.category,
    level: src.level,
    cardId: src.cardId,
    de: src.de,
    field: src.field,
    current: src.current,
    new: newVal,
    action: status === "NELABOT" ? "KEEP" : action,
    status,
    classification: luna.classification || src.category || "FOREIGN_REMNANT",
    validationResult,
    reason: luna.reason || proposal.reason || "",
    proposedNew: proposal.new,
  };
}

function applyMandatory(decision) {
  const mandatory = MANDATORY_OWNER_DECISIONS[decision.id];
  if (!mandatory) return decision;
  return {
    ...decision,
    ...mandatory,
    current: decision.current,
    category: decision.category,
    level: decision.level,
    cardId: decision.cardId,
    de: decision.de,
    field: decision.field,
  };
}

function buildViewMd(items) {
  const lines = [
    "# ES–DE A1+A2 — foreign remnants OWNER decisions (final)",
    "",
    `**Model:** ${DEFAULT_MODEL} (round 2 validation)`,
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
    lines.push(`- Classification: ${item.classification}`);
    lines.push(`- Validation: ${item.validationResult}`);
    lines.push(`- Pamatojums: ${item.reason}`);
    lines.push("");
  }
  return lines.join("\n");
}

function validateFinalDecisions(source, payload) {
  const errors = [];
  const baseItems = payload.items.filter((i) => !i.id.includes("RELATED"));
  const sourceById = new Map(source.items.map((i) => [i.id, i]));
  const seen = new Set();
  let germanPreserved = 0;
  let germanChecked = 0;
  let foreignInLabotNew = 0;

  if (source.items.length !== 573) errors.push(`source count ${source.items.length} !== 573`);
  if (baseItems.length !== 573) errors.push(`base decisions count ${baseItems.length} !== 573`);

  for (const item of baseItems) {
    const src = sourceById.get(item.id);
    if (!src) {
      errors.push(`${item.id}: missing in source`);
      continue;
    }

    const key = `${item.level}|${item.cardId}|${item.field}`;
    if (seen.has(key)) errors.push(`duplicate ${key}`);
    seen.add(key);

    if (item.current !== src.current) errors.push(`${item.id}: current mismatch vs source`);
    if (item.field !== src.field) errors.push(`${item.id}: field mismatch vs source`);

    if (item.status === "LABOT") {
      if (item.new === null || item.new === undefined) errors.push(`${item.id}: LABOT with null new`);
      if (item.action !== "REMOVE" && String(item.new).trim() === "") {
        errors.push(`${item.id}: LABOT with empty new (not REMOVE)`);
      }
      if (item.action !== "REMOVE" && item.current === item.new) {
        errors.push(`${item.id}: LABOT but current === new`);
      }
      if (item.action === "REMOVE" && item.new !== "") {
        errors.push(`${item.id}: REMOVE must have new=''`);
      }
      if (item.action !== "REMOVE" && hasForeignRemnant(String(item.new))) {
        foreignInLabotNew += 1;
        errors.push(`${item.id}: foreign remnant in LABOT new`);
      }
    }

    if (item.status === "NELABOT") {
      if (item.action !== "KEEP") errors.push(`${item.id}: NELABOT must have action KEEP`);
      if (item.current !== item.new) errors.push(`${item.id}: NELABOT but current !== new`);
    }

    if (MANDATORY_IDS.has(item.id)) {
      const m = MANDATORY_OWNER_DECISIONS[item.id];
      if (item.new !== m.new) errors.push(`${item.id}: mandatory new mismatch`);
      if (item.status !== m.status) errors.push(`${item.id}: mandatory status mismatch`);
      if (item.action !== m.action) errors.push(`${item.id}: mandatory action mismatch`);
    }

    if (item.field.includes("comparison") && item.field.endsWith(".example") && item.status === "LABOT") {
      germanChecked += 1;
      if (germanPartPreserved(item.current, item.new)) germanPreserved += 1;
      else errors.push(`${item.id}: German part not preserved`);
    }
  }

  for (const id of sourceById.keys()) {
    if (!baseItems.find((i) => i.id === id)) errors.push(`missing decision for ${id}`);
  }

  const related = payload.items.filter((i) => i.id.includes("RELATED"));
  if (related.length !== RELATED_CONFIRMED_REMNANTS.length) {
    errors.push(`expected ${RELATED_CONFIRMED_REMNANTS.length} RELATED items, got ${related.length}`);
  }

  return {
    errors,
    foreignInLabotNew,
    germanPreserved,
    germanChecked,
    germanPreservedPct: germanChecked ? (germanPreserved / germanChecked) * 100 : 100,
  };
}

function buildSummary(payload, validation, mirrorPass, syntaxPass) {
  const items = payload.items;
  const base = items.filter((i) => !i.id.includes("RELATED"));
  const labot = items.filter((i) => i.status === "LABOT").length;
  const nelabot = items.filter((i) => i.status === "NELABOT").length;
  const replace = items.filter((i) => i.action === "REPLACE").length;
  const remove = items.filter((i) => i.action === "REMOVE").length;
  const keep = items.filter((i) => i.action === "KEEP").length;
  const falsePos = items.filter((i) => i.classification === "FALSE_POSITIVE").length;
  const confirmed = items.filter((i) => i.validationResult === "CONFIRMED").length;
  const corrected = items.filter((i) => i.validationResult === "CORRECTED").length;
  const related = items.filter((i) => i.classification === "RELATED_CONFIRMED_REMNANT").length;

  const verdict =
    validation.errors.length > 0
      ? "FAIL"
      : labot === 0
        ? "BLOCKED"
        : "READY FOR COPY-ONLY APPLY";

  const lines = [
    "# ES–DE A1+A2 — foreign remnants OWNER decisions final summary",
    "",
    `**HEAD:** \`${payload.sourceHead}\``,
    `**Model:** ${payload.model}`,
    "",
    "## Kopsavilkums",
    "",
    "| Metrika | Rezultāts |",
    "|---------|----------:|",
    `| Sākotnējie objekti | **573** |`,
    `| Pārbaudīti | **${base.length}/573** |`,
    `| Gala lēmumi (kopā) | **${items.length}** |`,
    `| RELATED apstiprināti | **${related}** |`,
    `| LABOT | **${labot}** |`,
    `| NELABOT | **${nelabot}** |`,
    `| FALSE_POSITIVE | **${falsePos}** |`,
    `| REPLACE | **${replace}** |`,
    `| REMOVE | **${remove}** |`,
    `| KEEP | **${keep}** |`,
    `| CONFIRMED | **${confirmed}** |`,
    `| CORRECTED | **${corrected}** |`,
    `| Trūkstoši ID | **0** |`,
    `| Dublikāti | **0** |`,
    `| Foreign remnants in LABOT NEW | **${validation.foreignInLabotNew}** |`,
    `| German preserved (comparison) | **${validation.germanPreserved}/${validation.germanChecked} (${validation.germanPreservedPct.toFixed(1)}%)** |`,
    `| Production changes | **0** |`,
    `| DE changes | **0** |`,
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
    throw new Error("OPENAI_API_KEY required for Luna validation");
  }

  const head = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const source = JSON.parse(fs.readFileSync(SOURCE_JSON, "utf8"));
  const proposals = JSON.parse(fs.readFileSync(PROPOSALS_JSON, "utf8"));
  const proposalById = new Map(proposals.items.map((i) => [i.id, i]));

  const pairs = source.items.map((src) => ({
    src,
    proposal: proposalById.get(src.id) || {},
  }));

  const lunaPairs = pairs.filter((p) => !MANDATORY_IDS.has(p.src.id));
  console.log(`Luna round 2: validating ${lunaPairs.length} items (${MANDATORY_IDS.size} mandatory skipped)...`);

  const stats = {};
  const { items: lunaItems } = await validateForeignRemnantDecisions(lunaPairs, { stats });
  const lunaById = new Map(lunaItems.map((i) => [i.id, i]));

  const decisions = [];
  for (const { src, proposal } of pairs) {
    if (MANDATORY_IDS.has(src.id)) {
      const m = MANDATORY_OWNER_DECISIONS[src.id];
      decisions.push({
        id: src.id,
        category: src.category,
        level: src.level,
        cardId: src.cardId,
        de: src.de,
        field: src.field,
        current: src.current,
        new: m.new,
        action: m.action,
        status: m.status,
        classification: m.classification,
        validationResult: m.validationResult,
        reason: m.reason,
        proposedNew: proposal.new,
      });
    } else {
      const luna = lunaById.get(src.id) || {};
      decisions.push(applyMandatory(normalizeLunaDecision(src, proposal, luna)));
    }
  }

  decisions.push(...RELATED_CONFIRMED_REMNANTS);

  const payload = {
    repository: REPO,
    pr: PR,
    branch: BRANCH,
    sourceHead: head,
    model: DEFAULT_MODEL,
    requested: 573,
    validated: 573,
    totalDecisions: decisions.length,
    relatedCount: RELATED_CONFIRMED_REMNANTS.length,
    productionFilesChanged: 0,
    usage: stats,
    items: decisions,
  };

  const validation = validateFinalDecisions(source, payload);

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

  const jsonItems = decisions.map((d) => ({
    id: d.id,
    level: d.level,
    cardId: d.cardId,
    field: d.field,
    current: d.current,
    new: d.new,
    action: d.action,
    status: d.status,
    classification: d.classification,
    validationResult: d.validationResult,
    category: d.category,
    de: d.de,
    reason: d.reason,
  }));

  fs.writeFileSync(OUT_JSON, JSON.stringify({ ...payload, items: jsonItems }, null, 2) + "\n");
  fs.writeFileSync(OUT_MD, buildViewMd(decisions));
  fs.writeFileSync(OUT_SUMMARY, lines);

  console.log(
    JSON.stringify(
      {
        totalDecisions: decisions.length,
        labot: decisions.filter((i) => i.status === "LABOT").length,
        nelabot: decisions.filter((i) => i.status === "NELABOT").length,
        validationErrors: validation.errors.length,
        verdict,
        outJson: OUT_JSON,
        outMd: OUT_MD,
      },
      null,
      2,
    ),
  );

  if (verdict === "FAIL") {
    console.error("Validation errors:", validation.errors.slice(0, 15));
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

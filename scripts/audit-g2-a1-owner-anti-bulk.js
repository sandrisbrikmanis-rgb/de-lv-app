#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");

function sha256Hex(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function sha256File(absPath) {
  return sha256Hex(fs.readFileSync(absPath));
}

function parseArgs(argv) {
  const args = {};
  for (let i = 2; i < argv.length; i += 1) {
    const key = argv[i];
    if (key.startsWith("--")) {
      args[key.slice(2)] = argv[i + 1];
      i += 1;
    }
  }
  return args;
}

function isPrefixOnlyNelabot(row, baselineById) {
  if (row.owner_decision !== "NELABOT") return false;
  const note = String(row.owner_note || "");
  const prefixMatch = note.match(/^OWNER_RECHECK_APPROVED_[0-9-]+:\s*(.*)$/);
  if (prefixMatch) return true;
  const base = baselineById.get(row.finding_stable_ids);
  if (!base) return false;
  const prior = String(base.owner_note || "").trim();
  return prior && note.trim() === prior.trim();
}

function detectSingleRuleLabot(rows) {
  const labot = rows.filter((r) => r.owner_decision === "LABOT");
  if (labot.length === 0) return { singleRule: false, rule: null };
  const rules = new Set();
  for (const row of labot) {
    const current = String(row.production_current || "");
    const next = String(row.owner_new || "");
    if (/^(.+?)\s*•\s*\1$/u.test(current) && next === current.replace(/^(.+?)\s*•\s*\1$/u, "$1")) {
      rules.add("DEDUP_BULLET_X_X");
    } else if (current.trim() === next.trim()) {
      rules.add("NO_CHANGE");
    } else {
      rules.add(`CUSTOM:${sha256Hex(`${current}=>${next}`).slice(0, 8)}`);
    }
  }
  return { singleRule: rules.size === 1 && labot.length > 1, rule: [...rules][0] || null };
}

function main() {
  const args = parseArgs(process.argv);
  const input = path.resolve(ROOT, args.input);
  const baseline = path.resolve(ROOT, args.baseline);
  const manifest = path.resolve(ROOT, args.manifest);
  const out = args.out ? path.resolve(ROOT, args.out) : null;

  const { rows } = loadCsv(input);
  const baselineRows = loadCsv(baseline).rows;
  const baselineById = new Map(baselineRows.map((r) => [r.finding_stable_ids, r]));
  const manifestJson = JSON.parse(fs.readFileSync(manifest, "utf8"));

  const prefixOnly = rows.filter((r) => isPrefixOnlyNelabot(r, baselineById)).length;
  const decided = rows.filter((r) => r.owner_decision);
  const unproven = decided.filter((r) => r.provenance_type !== "INDIVIDUAL_LINGUISTIC").length;
  const withoutNote = decided.filter((r) => !String(r.owner_note || "").trim()).length;
  const noteCounts = {};
  for (const row of decided) {
    const n = String(row.owner_note || "").trim();
    noteCounts[n] = (noteCounts[n] || 0) + 1;
  }
  const duplicateNotes = Object.values(noteCounts).filter((c) => c > 3).length;
  const labotPattern = detectSingleRuleLabot(rows);
  const baselineSha = sha256File(baseline);
  const outputSha = sha256File(input);
  const manifestInputSha = manifestJson.input_csv_sha256;
  const manifestIndependent = manifestInputSha === baselineSha && manifestInputSha !== outputSha;
  const proof = {
    pass: false,
    classification: "BLOCKED_G2_A1_OWNER_ANTI_BULK_AUDIT",
    baseline_sha256: baselineSha,
    output_sha256: outputSha,
    manifest_sha256: sha256Hex(fs.readFileSync(manifest)),
    row_count: rows.length,
    prefix_only_nelabot: prefixOnly,
    single_rule_labot_pattern: labotPattern.singleRule,
    single_rule_name: labotPattern.rule,
    reproducible_bulk_transform: prefixOnly > 0 || labotPattern.singleRule,
    unproven_provenance: unproven,
    individual_linguistic: decided.length - unproven,
    decided_without_note: withoutNote,
    duplicate_note_collisions: duplicateNotes,
    manifest_independence: manifestIndependent ? "PASS" : "FAIL",
    labot_without_changed_owner_new: rows.filter((r) => {
      if (r.owner_decision !== "LABOT") return false;
      return !r.owner_new || r.owner_new === r.production_current;
    }).length,
    nelabot_with_owner_new: rows.filter((r) => r.owner_decision === "NELABOT" && r.owner_new).length,
  };

  proof.pass =
    proof.prefix_only_nelabot === 0 &&
    !proof.single_rule_labot_pattern &&
    !proof.reproducible_bulk_transform &&
    proof.unproven_provenance === 0 &&
    proof.decided_without_note === 0 &&
    proof.duplicate_note_collisions === 0 &&
    proof.manifest_independence === "PASS" &&
    proof.labot_without_changed_owner_new === 0 &&
    proof.nelabot_with_owner_new === 0;

  proof.classification = proof.pass
    ? "G2_A1_OWNER_ANTI_BULK_AUDIT_PASS"
    : "BLOCKED_G2_A1_OWNER_ANTI_BULK_AUDIT";

  if (out) {
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, `${JSON.stringify(proof, null, 2)}\n`);
  }

  console.log(JSON.stringify(proof, null, 2));
  process.exit(proof.pass ? 0 : 1);
}

if (require.main === module) main();

module.exports = { main };

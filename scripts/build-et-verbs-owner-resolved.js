#!/usr/bin/env node
"use strict";
/**
 * Resolve ET–DE Verbs OWNER accepted decisions into 197-row JSON.
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const ACCEPTED = path.join(ROOT, "reports/et-verbs-owner-decisions-accepted.md");
const MERGED = path.join(ROOT, "reports/temp/et-verbs-merged-audit.json");
const OUT = path.join(ROOT, "reports/temp/et-verbs-owner-resolved.json");
const MATERIALIZED = path.join(ROOT, "reports/et-verbs-owner-decisions-accepted-materialized.md");

const PLACEHOLDER_RE =
  /^\((?:Single natural Estonian form|Distinct Estonian for this verb|Natural Estonian|Estonian|missing|needed)/i;

function isPlaceholder(text) {
  const t = String(text || "").trim();
  if (!t) return true;
  if (PLACEHOLDER_RE.test(t)) return true;
  if (t.startsWith("(") && t.endsWith(")")) return true;
  return false;
}

function parseOverrides(md) {
  const map = new Map();
  const inSection = md.indexOf("## A. OWNER NEW overrides");
  const endSection = md.indexOf("## B.", inSection);
  const block = inSection >= 0 ? md.slice(inSection, endSection > inSection ? endSection : undefined) : "";
  for (const line of block.split("\n")) {
    const m = line.match(/^\|\s*(ET-VERB-\d+)\s*\|\s*LABOT\s*\|\s*(.+?)\s*\|/);
    if (!m) continue;
    map.set(m[1], m[2].trim());
  }
  return map;
}

function parseFalsePositives(md) {
  const set = new Set();
  const inSection = md.indexOf("## B. FALSE_POSITIVE");
  const endSection = md.indexOf("## C.", inSection);
  const block = inSection >= 0 ? md.slice(inSection, endSection > inSection ? endSection : undefined) : "";
  for (const line of block.split("\n")) {
    const m = line.match(/^\|\s*(ET-VERB-\d+)\s*\|\s*FALSE_POSITIVE\s*\|/);
    if (m) set.add(m[1]);
  }
  return set;
}

function parseAcceptProposed(md) {
  const set = new Set();
  const inSection = md.indexOf("## C. OWNER accepts the exact source PROPOSED_ET");
  const endSection = md.indexOf("## D.", inSection);
  const block = inSection >= 0 ? md.slice(inSection, endSection > inSection ? endSection : undefined) : "";
  for (const m of block.matchAll(/`(ET-VERB-\d+)`/g)) set.add(m[1]);
  return set;
}

function escapePipe(s) {
  return String(s || "").replace(/\|/g, "\\|").replace(/\n/g, " ");
}

function main() {
  if (!fs.existsSync(ACCEPTED)) {
    console.error(`Missing ${ACCEPTED}`);
    process.exit(1);
  }
  const md = fs.readFileSync(ACCEPTED, "utf8");
  const overrides = parseOverrides(md);
  const falsePositives = parseFalsePositives(md);
  const acceptProposed = parseAcceptProposed(md);

  const merged = JSON.parse(fs.readFileSync(MERGED, "utf8"));
  const findings = [...(merged.findings || [])].sort((a, b) => a.id.localeCompare(b.id));

  const resolved = [];
  const stats = {
    SOURCE_FINDINGS: findings.length,
    OWNER_NEW_OVERRIDE: overrides.size,
    OWNER_ACCEPT_PROPOSED: acceptProposed.size,
    FALSE_POSITIVE: 0,
    LABOT: 0,
    PENDING: 0,
    NELABOT: 0,
    NEEDS_SOURCE_REVIEW: 0,
  };

  for (const f of findings) {
    let status;
    let ownerNew = "";
    let source = "";

    if (falsePositives.has(f.id)) {
      status = "FALSE_POSITIVE";
      source = "OWNER_FALSE_POSITIVE";
    } else if (overrides.has(f.id)) {
      status = "LABOT";
      ownerNew = overrides.get(f.id);
      source = "OWNER_NEW_OVERRIDE";
    } else if (acceptProposed.has(f.id)) {
      const proposed = String(f.proposedEt || "").trim();
      if (isPlaceholder(proposed)) {
        console.error(`BLOCKED: ${f.id} accepts PROPOSED but value is placeholder: ${proposed}`);
        process.exit(1);
      }
      status = "LABOT";
      ownerNew = proposed;
      source = "OWNER_ACCEPT_PROPOSED";
    } else {
      console.error(`BLOCKED: ${f.id} has no OWNER resolution`);
      process.exit(1);
    }

    if (status === "LABOT" && isPlaceholder(ownerNew)) {
      console.error(`BLOCKED: ${f.id} LABOT ownerNew is placeholder: ${ownerNew}`);
      process.exit(1);
    }

    stats[status] = (stats[status] || 0) + 1;

    resolved.push({
      id: f.id,
      cardId: f.cardId,
      field: f.field,
      deContext: f.deContext || "",
      currentEt: f.currentEt || "",
      proposedEt: f.proposedEt || "",
      severity: f.severity,
      status,
      ownerNew,
      source,
    });
  }

  if (resolved.length !== 197) {
    console.error(`BLOCKED: resolved rows = ${resolved.length}, expected 197`);
    process.exit(1);
  }
  if (stats.LABOT !== 183) {
    console.error(`BLOCKED: LABOT = ${stats.LABOT}, expected 183`);
    process.exit(1);
  }
  if (stats.FALSE_POSITIVE !== 14) {
    console.error(`BLOCKED: FALSE_POSITIVE = ${stats.FALSE_POSITIVE}, expected 14`);
    process.exit(1);
  }

  const payload = {
    generatedAt: new Date().toISOString(),
    verdict: "ET_VERBS_OWNER_REVIEW_197_COMPLETE",
    meta: stats,
    findings: resolved,
  };
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(payload, null, 2));

  const lines = [
    "# ET–DE Verbs — OWNER DECISIONS ACCEPTED (materialized)",
    "",
    "**Authority:** `reports/et-verbs-owner-decisions-accepted.md`",
    "**DE:** STRICT READ-ONLY",
    "",
    "## Coverage",
    "",
    `- SOURCE_FINDINGS: **${stats.SOURCE_FINDINGS}**`,
    `- LABOT: **${stats.LABOT}**`,
    `- FALSE_POSITIVE: **${stats.FALSE_POSITIVE}**`,
    `- OWNER_NEW_OVERRIDE: **${stats.OWNER_NEW_OVERRIDE}**`,
    `- OWNER_ACCEPT_PROPOSED: **${stats.OWNER_ACCEPT_PROPOSED}**`,
    "",
    "| Audit ID | Card ID | Field | CURRENT_ET | Status | OWNER NEW | Source |",
    "|---|---|---|---|---|---|---|",
  ];
  for (const row of resolved) {
    lines.push(
      `| ${row.id} | \`${row.cardId}\` | \`${row.field}\` | ${escapePipe(row.currentEt)} | ${row.status} | ${escapePipe(row.ownerNew)} | ${row.source} |`
    );
  }
  lines.push("", `**OWNER VERDICT:** \`${payload.verdict}\``, "");
  fs.writeFileSync(MATERIALIZED, lines.join("\n"));

  console.log(JSON.stringify({ out: OUT, materialized: MATERIALIZED, meta: stats }, null, 2));
}

main();

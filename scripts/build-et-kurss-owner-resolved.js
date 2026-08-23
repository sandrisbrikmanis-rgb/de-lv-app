#!/usr/bin/env node
"use strict";
/**
 * Materialize ET–DE Kurss OWNER accepted decisions into literal 323-row mapping.
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const ACCEPTED = path.join(ROOT, "reports/et-kurss-owner-decisions-accepted.md");
const AUDIT_JSON = path.join(ROOT, "reports/temp/et-kurss-full-audit.json");
const LUNA_DIR = path.join(ROOT, "reports/temp/et-kurss-full-audit-luna");
const OUT_JSON = path.join(ROOT, "reports/temp/et-kurss-owner-resolved.json");
const MATERIALIZED = path.join(ROOT, "reports/et-kurss-owner-decisions-accepted-materialized.md");

const PLACEHOLDER_RE = /^\((?:OWNER:|Natural Estonian)/i;
const ACCEPT_RE = /^OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:(\d+)$/;

function isPlaceholder(text) {
  const t = String(text || "").trim();
  if (!t) return true;
  if (PLACEHOLDER_RE.test(t)) return true;
  if (t.startsWith("(") && t.endsWith(")")) return true;
  return false;
}

function escapePipe(s) {
  return String(s || "").replace(/\|/g, "\\|").replace(/\n/g, " ");
}

function loadLunaIndex() {
  const byKey = new Map();
  if (!fs.existsSync(LUNA_DIR)) return byKey;
  for (const file of fs.readdirSync(LUNA_DIR).filter((f) => f.endsWith("-findings.json"))) {
    const data = JSON.parse(fs.readFileSync(path.join(LUNA_DIR, file), "utf8"));
    for (const item of data.findings || []) {
      byKey.set(`${item.lessonId}|${item.path}`, item);
      if (item.fieldId) byKey.set(item.fieldId, item);
    }
  }
  return byKey;
}

function parseAccepted(md) {
  const rows = [];
  for (const line of md.split("\n")) {
    const m = line.match(/^\| (ET-KURSS-\d+) \| (\w+(?:_\w+)*) \| (.*?) \| (.*?) \|$/);
    if (!m) continue;
    rows.push({
      id: m[1],
      status: m[2],
      ownerDirective: m[3].trim(),
      note: m[4].trim(),
    });
  }
  return rows;
}

function resolveProposedEt(row, audit, lunaIndex) {
  const backlog = audit.ownerBacklogFinal.find((f) => f.id === row.id);
  if (!backlog) return { error: "missing_backlog_row" };

  let proposed = backlog.proposedEt;
  if (!isPlaceholder(proposed)) return { proposedEt: proposed, source: "AUDIT_JSON_PROPOSED_ET" };

  const lunaFinding = (audit.findings || []).find(
    (f) =>
      f.lessonId === backlog.lessonId
      && f.path === backlog.path
      && f.source === "luna"
      && !isPlaceholder(f.proposedEt),
  );
  if (lunaFinding) return { proposedEt: lunaFinding.proposedEt, source: "AUDIT_JSON_LUNA_FINDING" };

  const luna = lunaIndex.get(`${backlog.lessonId}|${backlog.path}`);
  if (luna && !isPlaceholder(luna.proposedEt)) {
    return { proposedEt: luna.proposedEt, source: "LUNA_BATCH_PROPOSED_ET" };
  }

  return { error: "unresolved_proposed_et", path: backlog.path };
}

function main() {
  if (!fs.existsSync(ACCEPTED)) {
    console.error(`Missing ${ACCEPTED}`);
    process.exit(1);
  }
  if (!fs.existsSync(AUDIT_JSON)) {
    console.error(`Missing ${AUDIT_JSON}`);
    process.exit(1);
  }

  const acceptedRows = parseAccepted(fs.readFileSync(ACCEPTED, "utf8"));
  const audit = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  const lunaIndex = loadLunaIndex();
  const backlogById = new Map((audit.ownerBacklogFinal || []).map((r) => [r.id, r]));

  if (acceptedRows.length !== 323) {
    console.error(`BLOCKED: accepted rows = ${acceptedRows.length}, expected 323`);
    process.exit(1);
  }

  const stats = {
    SOURCE_FINDINGS: 323,
    OWNER_RESOLVED: 0,
    LABOT: 0,
    NELABOT: 0,
    FALSE_POSITIVE: 0,
    NEEDS_SOURCE_REVIEW: 0,
    PENDING: 0,
    OWNER_NEW_OVERRIDE: 0,
    OWNER_ACCEPT_PROPOSED_ET: 0,
  };

  const resolved = [];

  for (const row of acceptedRows) {
    const backlog = backlogById.get(row.id);
    if (!backlog) {
      console.error(`BLOCKED: no backlog for ${row.id}`);
      process.exit(1);
    }

    let status = row.status;
    let ownerNew = "";
    let source = "";

    if (status === "LABOT") {
      const directive = row.ownerDirective;
      const acceptMatch = ACCEPT_RE.exec(directive);
      if (acceptMatch) {
        const resolvedProposed = resolveProposedEt(row, audit, lunaIndex);
        if (resolvedProposed.error) {
          console.error(`BLOCKED: ${row.id} ${resolvedProposed.error} path=${resolvedProposed.path || backlog.path}`);
          process.exit(1);
        }
        ownerNew = resolvedProposed.proposedEt;
        source = resolvedProposed.source;
        stats.OWNER_ACCEPT_PROPOSED_ET++;
      } else if (!directive) {
        console.error(`BLOCKED: ${row.id} LABOT with empty OWNER NEW`);
        process.exit(1);
      } else {
        ownerNew = directive;
        source = "OWNER_NEW_OVERRIDE";
        stats.OWNER_NEW_OVERRIDE++;
      }
      if (isPlaceholder(ownerNew) || ACCEPT_RE.test(ownerNew)) {
        console.error(`BLOCKED: ${row.id} LABOT ownerNew invalid: ${ownerNew}`);
        process.exit(1);
      }
      stats.LABOT++;
    } else if (status === "FALSE_POSITIVE") {
      source = "OWNER_FALSE_POSITIVE";
      stats.FALSE_POSITIVE++;
    } else if (status === "NELABOT") {
      source = "OWNER_NELABOT";
      stats.NELABOT++;
    } else if (status === "NEEDS_SOURCE_REVIEW") {
      source = "OWNER_NEEDS_SOURCE_REVIEW";
      stats.NEEDS_SOURCE_REVIEW++;
    } else {
      console.error(`BLOCKED: ${row.id} unknown status ${status}`);
      process.exit(1);
    }

    stats.OWNER_RESOLVED++;

    resolved.push({
      id: row.id,
      lessonId: backlog.lessonId,
      path: backlog.path,
      fieldType: backlog.fieldType || "",
      deCurrent: backlog.deCurrent || "",
      currentEt: backlog.etCurrent || "",
      proposedEt: backlog.proposedEt || "",
      severity: backlog.severity || "",
      category: backlog.category || "",
      status,
      ownerNew,
      ownerNote: row.note || "",
      source,
    });
  }

  const expected = {
    LABOT: 310,
    NELABOT: 3,
    FALSE_POSITIVE: 8,
    NEEDS_SOURCE_REVIEW: 2,
  };
  for (const [k, v] of Object.entries(expected)) {
    if (stats[k] !== v) {
      console.error(`BLOCKED: ${k} = ${stats[k]}, expected ${v}`);
      process.exit(1);
    }
  }

  const verdict = "ET_KURSS_OWNER_REVIEW_323_COMPLETE_WITH_2_SOURCE_REVIEW";
  const payload = {
    generatedAt: new Date().toISOString(),
    verdict,
    meta: stats,
    findings: resolved,
  };

  fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
  fs.writeFileSync(OUT_JSON, JSON.stringify(payload, null, 2));

  const lines = [
    "# ET–DE Kurss — OWNER DECISIONS ACCEPTED (materialized)",
    "",
    "**Authority:** `reports/et-kurss-owner-decisions-accepted.md`",
    "**Audit JSON:** `reports/temp/et-kurss-full-audit.json`",
    "**DE:** STRICT READ-ONLY",
    "",
    "## Coverage",
    "",
    `- SOURCE_FINDINGS: **${stats.SOURCE_FINDINGS}**`,
    `- OWNER_RESOLVED: **${stats.OWNER_RESOLVED}/323**`,
    `- LABOT: **${stats.LABOT}**`,
    `- NELABOT: **${stats.NELABOT}**`,
    `- FALSE_POSITIVE: **${stats.FALSE_POSITIVE}**`,
    `- NEEDS_SOURCE_REVIEW: **${stats.NEEDS_SOURCE_REVIEW}**`,
    `- OWNER_NEW_OVERRIDE: **${stats.OWNER_NEW_OVERRIDE}**`,
    `- OWNER_ACCEPT_PROPOSED_ET: **${stats.OWNER_ACCEPT_PROPOSED_ET}**`,
    "",
    "No `OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON:*` directives remain in OWNER NEW column.",
    "",
    "| Audit ID | Lesson/ID | Path | CURRENT_ET | Status | OWNER NEW | Source |",
    "|---|---|---|---|---|---|---|",
  ];

  for (const r of resolved) {
    lines.push(
      `| ${r.id} | \`${r.lessonId}\` | \`${escapePipe(r.path)}\` | ${escapePipe(r.currentEt)} | ${r.status} | ${escapePipe(r.ownerNew)} | ${r.source} |`,
    );
  }

  lines.push("", `**OWNER VERDICT:** \`${verdict}\``, "");
  fs.writeFileSync(MATERIALIZED, lines.join("\n"));

  console.log(JSON.stringify({ out: OUT_JSON, materialized: MATERIALIZED, meta: stats, verdict }, null, 2));
}

main();

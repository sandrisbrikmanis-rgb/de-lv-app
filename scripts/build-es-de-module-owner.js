#!/usr/bin/env node
"use strict";
/**
 * Build ES-DE module OWNER source + view (MASTER v1.9).
 * Usage: node scripts/build-es-de-module-owner.js --module=b2|c1|c2|sentences|verbs
 */
const fs = require("fs");
const { parseModuleArg } = require("./lib/es-de-audit-config");

const cfg = parseModuleArg();

function truncate(text, max = 400) {
  const s = String(text || "").replace(/\n/g, " ");
  return s.length > max ? `${s.slice(0, max)}…` : s;
}

function main() {
  const audit = JSON.parse(fs.readFileSync(cfg.auditJson, "utf8"));
  const owners = (audit.ownerObjects || []).map((o) => ({
    id: o.id,
    module: o.module || cfg.moduleKey,
    cardId: o.cardId,
    field: o.field,
    current: o.current,
    pairedGermanText: o.pairedGermanText,
    category: o.category,
    severity: o.severity,
    explanation: o.explanation || o.reason,
    proposedNew: o.proposedNew,
    sourceFindingIds: o.sourceFindingIds || o.findingIds || [],
    ownerStatus: "PĀRSKATĪT",
    new: null,
  }));

  fs.writeFileSync(cfg.ownerSource, JSON.stringify({ ownerObjects: owners, count: owners.length }, null, 2) + "\n");

  const lines = [
    `# ES–DE ${cfg.moduleKey} — pilns OWNER pārskatīšanas skats`,
    "",
    `**Standards:** \`PROJECT_LANGUAGE_MASTER_STANDARD.md\` v${audit.meta?.masterVersion || "1.9"}`,
    `**HEAD:** \`${audit.meta?.head || "—"}\``,
    `**Kartītes:** ${audit.meta?.totalCards || cfg.totalCards}`,
    `**Unikālie OWNER objekti:** **${owners.length}**`,
    `**Verdict:** **${audit.meta?.verdict || "—"}**`,
    "",
    "> `proposedNew` ir Luna/audita ieteikums, nevis OWNER apstiprināts `new`.",
    "",
  ];

  for (const o of owners) {
    lines.push(`## ${o.id}`, "");
    lines.push(`- **Finding IDs:** ${(o.sourceFindingIds || []).map((id) => `\`${id}\``).join(", ")}`);
    lines.push(`- **Smagums:** ${o.severity}`);
    lines.push(`- **Kategorija:** ${o.category}`);
    lines.push(`- **Card ID:** \`${o.cardId}\``);
    lines.push(`- **Field/path:** \`${o.field}\``);
    lines.push(`- **DE (read-only):** \`${truncate(o.pairedGermanText, 200)}\``);
    lines.push(`- **CURRENT:** \`${truncate(o.current, 500)}\``);
    lines.push(`- **Problēma:** ${o.explanation}`);
    lines.push(`- **Ieteiktais NEW:** \`${truncate(o.proposedNew, 500)}\``);
    lines.push(`- **OWNER statuss:** PĀRSKATĪT`);
    lines.push("");
  }

  fs.writeFileSync(cfg.ownerView, lines.join("\n"));
  console.log(JSON.stringify({ count: owners.length, ownerSource: cfg.ownerSource, ownerView: cfg.ownerView }, null, 2));
}

main();

#!/usr/bin/env node
"use strict";
/**
 * Build ES-DE B1 full audit monolithic OWNER view (MASTER v1.9).
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const IN_JSON = path.join(ROOT, "reports/es-de-b1-full-audit.json");
const OUT_MD = path.join(ROOT, "reports/es-de-b1-full-audit-owner-view.md");

function truncate(text, max = 400) {
  const s = String(text || "").replace(/\n/g, " ");
  return s.length > max ? `${s.slice(0, max)}…` : s;
}

function main() {
  const audit = JSON.parse(fs.readFileSync(IN_JSON, "utf8"));
  const owners = audit.ownerObjects || [];
  const lines = [
    "# ES–DE B1 — pilns OWNER pārskatīšanas skats",
    "",
    `**Standarts:** \`PROJECT_LANGUAGE_MASTER_STANDARD.md\` v${audit.meta?.masterVersion || "1.9"}`,
    `**HEAD:** \`${audit.meta?.head || "—"}\``,
    `**Kartītes:** ${audit.meta?.totalCards || 3367}`,
    `**Unikālie OWNER objekti:** **${owners.length}**`,
    `**Verdict:** **${audit.meta?.verdict || "—"}**`,
    "",
    "> `proposedNew` ir Luna/audita ieteikums, nevis OWNER apstiprināts `new`.",
    "",
  ];

  for (const o of owners) {
    lines.push(`## ${o.id}`, "");
    lines.push(`- **Finding IDs:** ${(o.findingIds || []).map((id) => `\`${id}\``).join(", ")}`);
    lines.push(`- **Smagums:** ${o.severity}`);
    lines.push(`- **Kategorija:** ${o.category}`);
    lines.push(`- **Card ID:** \`${o.cardId}\``);
    lines.push(`- **Field/path:** \`${o.field}\``);
    lines.push(`- **DE (read-only):** \`${truncate(o.pairedGermanText, 200)}\``);
    lines.push(`- **CURRENT:** \`${truncate(o.current, 500)}\``);
    lines.push(`- **Problēma:** ${o.reason}`);
    lines.push(`- **Ieteiktais NEW:** \`${truncate(o.proposedNew, 500)}\``);
    lines.push(`- **Validācija:** ${o.validationStatus}`);
    lines.push(`- **OWNER statuss:** PĀRSKATĪT`);
    lines.push("");
  }

  fs.writeFileSync(OUT_MD, lines.join("\n"));
  console.log(JSON.stringify({ count: owners.length, out: OUT_MD }, null, 2));
}

main();

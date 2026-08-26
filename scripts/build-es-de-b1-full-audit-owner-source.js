#!/usr/bin/env node
"use strict";
/**
 * Build ES-DE B1 full audit OWNER source JSON (MASTER v1.9).
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const IN_JSON = path.join(ROOT, "reports/es-de-b1-full-audit.json");
const OUT_JSON = path.join(ROOT, "reports/es-de-b1-full-audit-owner-source.json");

function main() {
  const audit = JSON.parse(fs.readFileSync(IN_JSON, "utf8"));
  const owners = (audit.ownerObjects || []).map((o) => ({
    id: o.id,
    findingIds: o.findingIds,
    level: o.level,
    cardId: o.cardId,
    field: o.field,
    current: o.current,
    pairedGermanText: o.pairedGermanText,
    category: o.category,
    severity: o.severity,
    reason: o.reason,
    proposedNew: o.proposedNew,
    validationStatus: o.validationStatus,
    ownerStatus: "PĀRSKATĪT",
    new: null,
  }));
  fs.writeFileSync(OUT_JSON, JSON.stringify({ ownerObjects: owners, count: owners.length }, null, 2) + "\n");
  console.log(JSON.stringify({ count: owners.length, out: OUT_JSON }, null, 2));
}

main();

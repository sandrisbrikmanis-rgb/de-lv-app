#!/usr/bin/env node
"use strict";
/**
 * Verify OWNER decisions invariants for ES Kurss Lessons v2.
 * Usage: node scripts/verify-es-kurss-lessons-owner-decisions.js
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const DECISIONS_JSON = path.join(ROOT, "reports/es-kurss-lessons-owner-decisions-filled.json");
const AUDIT_V2_JSON = path.join(ROOT, "reports/temp/es-kurss-lessons-full-audit-v2.json");

function main() {
  const data = JSON.parse(fs.readFileSync(DECISIONS_JSON, "utf8"));
  const audit = JSON.parse(fs.readFileSync(AUDIT_V2_JSON, "utf8"));

  const decisions = data.decisions || [];
  const labot = decisions.filter((d) => d.status === "LABOT");
  const labotMissingNew = labot.filter((d) => d.new === null || d.new === "");
  const labotSameCurrent = labot.filter((d) => String(d.new || "") === String(d.current || ""));

  const ids = decisions.map((d) => d.id);
  const idCounts = ids.reduce((acc, id) => {
    acc[id] = (acc[id] || 0) + 1;
    return acc;
  }, {});
  const duplicateIds = Object.entries(idCounts).filter(([, n]) => n > 1);

  const structureIds = decisions.filter((d) => d.status === "TECHNICAL_DEFER").map((d) => d.id);
  const auditStructureIds = (audit.findings || []).filter((f) => f.source === "structure").map((f) => f.id);

  const result = {
    total: decisions.length,
    labot: labot.length,
    labotMissingNew: labotMissingNew.length,
    labotSameAsCurrent: labotSameCurrent.length,
    duplicateIds: duplicateIds.length,
    duplicateIdSample: duplicateIds.slice(0, 10),
    structureDecisionIds: structureIds,
    auditStructureIds,
    pass:
      labotMissingNew.length === 0 &&
      labotSameCurrent.length === 0 &&
      duplicateIds.length === 0 &&
      structureIds.length === new Set(structureIds).size,
    verdict:
      labotMissingNew.length === 0 &&
      labotSameCurrent.length === 0 &&
      duplicateIds.length === 0
        ? "PASS — all LABOT have NEW filled and NEW !== CURRENT; duplicate IDs = 0"
        : "FAIL — see labotMissingNew / labotSameAsCurrent / duplicateIds",
  };

  console.log(JSON.stringify(result, null, 2));
  if (!result.pass) process.exit(1);
}

if (require.main === module) main();

module.exports = { main };

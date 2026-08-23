#!/usr/bin/env node
"use strict";
/**
 * Build ET–DE Verbs OWNER apply map from resolved accepted decisions.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { applyKey, getEtValue, findEntry } = require("./lib/et-verbs-owner-path");

const RESOLVED = path.join(ROOT, "reports/temp/et-verbs-owner-resolved.json");
const OUT = path.join(ROOT, "reports/temp/et-verbs-owner-apply-map.json");
const ET_FILE = path.join(ROOT, "data/et/verbs.js");
const EXPECTED_LABOT = 183;

function loadVerbs(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.VERB_ENTRIES;
}

function main() {
  if (!fs.existsSync(RESOLVED)) {
    require("child_process").execSync("node scripts/build-et-verbs-owner-resolved.js", {
      cwd: ROOT,
      stdio: "pipe",
    });
  }

  const data = JSON.parse(fs.readFileSync(RESOLVED, "utf8"));
  const verbs = loadVerbs(ET_FILE);
  const apply = [];
  const skipped = [];
  const seen = new Set();

  for (const row of data.findings || []) {
    if (row.status !== "LABOT") {
      skipped.push({ ...row, reason: row.status });
      continue;
    }
    const key = applyKey(row.cardId, row.field);
    if (seen.has(key)) {
      skipped.push({ ...row, reason: "duplicate_target", key });
      continue;
    }
    seen.add(key);

    const entry = findEntry(verbs, row.cardId);
    const productionCurrent = entry ? getEtValue(entry, row.field) : row.currentEt;
    apply.push({
      auditId: row.id,
      cardId: row.cardId,
      field: row.field,
      currentEt: productionCurrent ?? row.currentEt,
      ownerNew: row.ownerNew,
      source: row.source,
    });
  }

  if ((data.findings || []).filter((f) => f.status === "LABOT").length !== EXPECTED_LABOT) {
    console.error("BLOCKED: LABOT findings count mismatch");
    process.exit(1);
  }

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(
    OUT,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        source: RESOLVED,
        uniqueTargets: apply.length,
        labotFindings: EXPECTED_LABOT,
        apply,
        skippedCount: skipped.length,
      },
      null,
      2
    )
  );
  console.log(JSON.stringify({ uniqueTargets: apply.length, labotFindings: EXPECTED_LABOT, skipped: skipped.length, out: OUT }, null, 2));
}

main();

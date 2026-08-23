#!/usr/bin/env node
"use strict";
/**
 * Build ET Kurss OWNER apply map from materialized resolved JSON (LABOT only).
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { normalizeOwnerPath, fieldLabel } = require("./lib/et-kurss-owner-path");

const RESOLVED = path.join(ROOT, "reports/temp/et-kurss-owner-resolved.json");
const OUT = path.join(ROOT, "reports/temp/et-kurss-owner-apply-map.json");
const BLOCKED_IDS = new Set(["ET-KURSS-0226", "ET-KURSS-0227"]);

function main() {
  const data = JSON.parse(fs.readFileSync(RESOLVED, "utf8"));
  const apply = [];
  for (const row of data.findings || []) {
    if (row.status !== "LABOT") continue;
    if (BLOCKED_IDS.has(row.id)) continue;
    const normalizedPath = normalizeOwnerPath(row.path);
    apply.push({
      findingId: row.id,
      lessonId: row.lessonId,
      path: row.path,
      normalizedPath,
      field: fieldLabel(normalizedPath),
      etCurrent: row.currentEt,
      ownerNew: row.ownerNew,
      source: row.source,
    });
  }

  if (apply.length !== 310) {
    console.error(`BLOCKED: LABOT apply rows = ${apply.length}, expected 310`);
    process.exit(1);
  }

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(
    OUT,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        source: RESOLVED,
        requestedLabot: apply.length,
        apply,
      },
      null,
      2,
    ),
  );
  console.log(JSON.stringify({ out: OUT, requestedLabot: apply.length }, null, 2));
}

main();

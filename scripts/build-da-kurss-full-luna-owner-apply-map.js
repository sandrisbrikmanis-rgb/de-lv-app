#!/usr/bin/env node
"use strict";
/**
 * Build DA–DE Kurss full Luna OWNER apply map from group decision files.
 * Usage: node scripts/build-da-kurss-full-luna-owner-apply-map.js [--decisions-dir /path]
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const {
  GROUP_SLUGS,
  loadGroupedFindings,
  lunaDecisionPath,
  loadDaCourseTexts,
  buildApplyEntry,
  parseDecisionFile,
} = require("./lib/da-kurss-full-luna-owner-pack");

const OUT_JSON = path.join(ROOT, "reports/temp/da-kurss-full-luna-owner-apply-map.json");

function getDecisionsDir() {
  const idx = process.argv.indexOf("--decisions-dir");
  if (idx >= 0 && process.argv[idx + 1]) return process.argv[idx + 1];
  return path.join(ROOT, "reports");
}

function main() {
  const decisionsDir = getDecisionsDir();
  const grouped = loadGroupedFindings();
  const courseTexts = loadDaCourseTexts();
  const statuses = { LABOT: 0, NELABOT: 0, FALSE_POSITIVE: 0, NEEDS_SOURCE_REVIEW: 0, OTHER: 0 };
  const skipped = [];
  const apply = [];
  const missingFiles = [];

  for (const slug of GROUP_SLUGS) {
    const decisionFile = lunaDecisionPath(slug, decisionsDir);
    if (!fs.existsSync(decisionFile)) {
      missingFiles.push(slug);
      continue;
    }

    const rows = parseDecisionFile(decisionFile);
    const findings = grouped[slug] || [];

    for (const row of rows) {
      statuses[row.status] = (statuses[row.status] || 0) + 1;
      if (row.status !== "LABOT") continue;
      if (!row.ownerNew) {
        skipped.push({ slug, ...row, reason: "EMPTY_OWNER_NEW" });
        continue;
      }

      const finding = findings[row.findingNum - 1];
      if (!finding) {
        skipped.push({ slug, ...row, reason: "FINDING_NOT_FOUND" });
        continue;
      }

      const entry = buildApplyEntry(slug, finding, row, courseTexts);
      if (entry.skip) {
        skipped.push({ slug, ...row, reason: entry.reason, path: finding.path });
        continue;
      }

      apply.push(entry);
    }
  }

  apply.sort((a, b) => {
    if (a.groupSlug !== b.groupSlug) return a.groupSlug.localeCompare(b.groupSlug);
    return a.findingNum - b.findingNum;
  });

  const out = {
    generatedAt: new Date().toISOString(),
    decisionsDir,
    missingFiles,
    ownerMappingsTotal: statuses.LABOT || 0,
    applyCount: apply.length,
    skipped,
    statusCounts: statuses,
    apply,
  };

  fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
  fs.writeFileSync(OUT_JSON, JSON.stringify(out, null, 2), "utf8");
  console.log(
    JSON.stringify(
      {
        decisionsDir,
        missingFiles: missingFiles.length,
        ownerMappingsTotal: out.ownerMappingsTotal,
        applyCount: out.applyCount,
        skipped: out.skipped.length,
        statusCounts: out.statusCounts,
        out: OUT_JSON,
      },
      null,
      2,
    ),
  );
}

main();

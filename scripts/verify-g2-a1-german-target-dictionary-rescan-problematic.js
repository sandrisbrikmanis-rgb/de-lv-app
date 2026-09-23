#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { RESCAN_LANGS, OUT_DIR } = require("./lib/g2-a1-production-current/german-target-dictionary-rescan-problematic");

const JSON_PATH = path.join(OUT_DIR, "german-target-dictionary-rescan-problematic.json");

function main() {
  const blockers = [];
  for (const f of ["german-target-dictionary-rescan-problematic.json", "german-target-dictionary-rescan-problematic.md"]) {
    if (!fs.existsSync(path.join(OUT_DIR, f))) blockers.push({ code: "MISSING_ARTIFACT", file: f });
  }
  if (!fs.existsSync(JSON_PATH)) {
    console.log(JSON.stringify({ pass: false, blockers }, null, 2));
    process.exit(1);
  }

  const data = JSON.parse(fs.readFileSync(JSON_PATH, "utf8"));
  if (data.schemaVersion !== "g2-a1-german-target-dictionary-rescan-problematic-v1") {
    blockers.push({ code: "SCHEMA_VERSION", got: data.schemaVersion });
  }
  for (const code of RESCAN_LANGS) {
    const row = (data.languages || []).find((l) => l.appCode === code);
    if (!row) blockers.push({ code: "MISSING_LANG", appCode: code });
    else if (!row.ranked?.length) blockers.push({ code: "NO_CANDIDATES", appCode: code });
    else if (!row.recommendedRescan) blockers.push({ code: "NO_RECOMMENDATION", appCode: code });
  }

  const pass = blockers.length === 0;
  const verification = {
    pass,
    blockers,
    targetLanguages: RESCAN_LANGS,
    generatedAt: data.generatedAt,
    recommendations: (data.languages || []).map((l) => ({
      appCode: l.appCode,
      platform: l.recommendedRescan?.platform,
      finalStatus: l.recommendedRescan?.finalStatus,
    })),
  };
  fs.writeFileSync(
    path.join(OUT_DIR, "german-target-dictionary-rescan-problematic-verification.json"),
    `${JSON.stringify(verification, null, 2)}\n`,
    "utf8",
  );
  console.log(JSON.stringify(verification, null, 2));
  process.exit(pass ? 0 : 1);
}

main();

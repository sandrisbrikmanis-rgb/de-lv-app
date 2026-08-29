#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

function main() {
  const outPath = path.join(ROOT, "reports", "phase1-owner-prep", "phase1-full-owner-review-GITHUB.md");
  fs.mkdirSync(path.dirname(outPath), { recursive: true });

  const content = [
    "# Phase 1 OWNER review — GitHub index",
    "",
    "- [OWNER view](./phase1-full-owner-view.md)",
    "- [OWNER decisions](./phase1-full-owner-decisions.md)",
    "",
    "Generated for F0-COMP infrastructure verification (mock findings only).",
    "",
  ].join("\n");

  fs.writeFileSync(outPath, `${content}\n`, "utf8");
  console.log(JSON.stringify({ github: "reports/phase1-owner-prep/phase1-full-owner-review-GITHUB.md" }, null, 2));
}

if (require.main === module) {
  main();
}

module.exports = {};

#!/usr/bin/env node
"use strict";

const path = require("path");
const { ROOT } = require("./lib/audit-common");

process.env.LRB070_EXPECTED_PASTE_SHA =
  "278f69b133146cddf2e91a7531eb8a0ccadba8b17090c0d1c9dd7194e82e3599";

const pastePath = path.join(
  ROOT,
  "scripts/data/g2-a1-owner-pending/LRB-070-decisions-COPY-PASTE-3.json"
);
const hasPasteArg = process.argv.slice(2).some((a) => !a.startsWith("-") && a.endsWith(".json"));
if (!hasPasteArg) {
  process.argv.splice(2, 0, pastePath);
}

const { main } = require("./build-lrb070-correction-2-artifacts.js");
main();

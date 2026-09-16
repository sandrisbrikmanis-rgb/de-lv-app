#!/usr/bin/env node
"use strict";

const path = require("path");
const { ROOT } = require("./lib/audit-common");

process.env.LRB070_EXPECTED_PASTE_SHA =
  "33ae22adf9b7e47521092474a58020676599f0a5cb41024778bf6e1a8005d33c";

const pastePath = path.join(
  ROOT,
  "scripts/data/g2-a1-owner-pending/LRB-070-decisions-COPY-PASTE-4.json"
);
const hasPasteArg = process.argv.slice(2).some((a) => !a.startsWith("-") && a.endsWith(".json"));
if (!hasPasteArg) {
  process.argv.splice(2, 0, pastePath);
}

const { main } = require("./build-lrb070-correction-2-artifacts.js");
main();

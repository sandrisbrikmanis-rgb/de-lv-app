#!/usr/bin/env node
"use strict";

const assert = require("assert");
const fs = require("fs");
const path = require("path");
const {
  checkSectionCollisionsInDocument,
  ROOT,
} = require("./lib/master-premerge-verify-core");

function main() {
  const masterPath = path.join(ROOT, "docs_and_rules/PROJECT_LANGUAGE_MASTER_STANDARD.md");
  const apvienotsPath = path.join(
    ROOT,
    "docs_and_rules/MASTER_1.12_LINGVISTISKA_AUDITA_GROZIJUMI_APVIENOTS.md",
  );
  const master = fs.readFileSync(masterPath, "utf8");
  const apvienots = fs.readFileSync(apvienotsPath, "utf8");

  const masterCollisions = checkSectionCollisionsInDocument(
    master,
    "PROJECT_LANGUAGE_MASTER_STANDARD.md",
  );
  assert.strictEqual(
    masterCollisions.count,
    0,
    `MASTER section collisions: ${JSON.stringify(masterCollisions.dupes)}`,
  );

  const apvCollisions = checkSectionCollisionsInDocument(
    apvienots,
    "MASTER_1.12_LINGVISTISKA_AUDITA_GROZIJUMI_APVIENOTS.md",
  );
  assert.strictEqual(
    apvCollisions.count,
    0,
    `APVIENOTS section collisions: ${JSON.stringify(apvCollisions.dupes)}`,
  );

  assert.ok(
    !master.includes("## 18. SAISTOŠAIS DARBA LĪGUMS"),
    "Changelog appendix must not reuse ## 18 (collides with # 18. KVALITĀTES FILOZOFIJA)",
  );

  console.log(JSON.stringify({ pass: true, masterCollisions: 0, apvienotsCollisions: 0 }, null, 2));
}

main();

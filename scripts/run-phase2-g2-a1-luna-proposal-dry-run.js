#!/usr/bin/env node
"use strict";

const { runDryRun } = require("./lib/g2-a1-luna-proposal/dry-run");

const result = runDryRun({ writeArtifacts: true });
console.log(JSON.stringify(result, null, 2));
if (result.classification === "START_GATE_BLOCKED") process.exit(2);
if (result.classification === "G2_A1_LUNA_PROPOSAL_QUEUE_INTEGRITY_BLOCKED") process.exit(3);
if (result.classification !== "G2_A1_LUNA_PROPOSAL_INFRA_READY_FOR_OWNER_REVIEW") process.exit(4);

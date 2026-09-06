#!/usr/bin/env node
"use strict";

const { runOwnerReview } = require("./lib/g2-a1-luna-proposal/owner-review");

runOwnerReview()
  .then((result) => {
    console.log(JSON.stringify({ classification: result.classification, head: result.pr?.head || result.actualHead }, null, 2));
    if (result.classification === "START_GATE_BLOCKED") process.exit(2);
    if (result.classification !== "G2_A1_LUNA_PROPOSAL_INFRA_OWNER_REVIEW_PASS") process.exit(1);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

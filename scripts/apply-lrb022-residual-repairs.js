#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const decisionsPath = path.join(ROOT, "scripts/data/g2-a1-owner-pending/LRB-022-decisions.json");
const repairsPath = path.join(ROOT, "scripts/data/g2-a1-owner-pending/LRB-022-residual-repairs.json");

const decisions = JSON.parse(fs.readFileSync(decisionsPath, "utf8"));
const repairs = JSON.parse(fs.readFileSync(repairsPath, "utf8"));

let updated = 0;
for (const [card, repair] of Object.entries(repairs)) {
  const key = Object.keys(decisions).find((k) => k.includes(`|${card}|`));
  if (!key) throw new Error(`No decision key for card ${card}`);
  const entry = decisions[key];
  if (entry.owner_decision !== "LABOT") throw new Error(`${card} is not LABOT`);
  const merged = { ...(entry.owner_new ? JSON.parse(entry.owner_new) : {}), ...repair.owner_new_fields };
  entry.owner_new = JSON.stringify(merged);
  const suffix = repair.owner_note_suffix || "residual HR repair";
  if (!entry.owner_note.includes(suffix)) {
    entry.owner_note = `${entry.owner_note.replace(/\s*DE untouched\.?\s*$/, "").trim()}; ${suffix}. DE untouched.`;
  }
  updated += 1;
}

fs.writeFileSync(decisionsPath, `${JSON.stringify(decisions, null, 2)}\n`);
console.log(JSON.stringify({ updated, classification: "LRB_022_RESIDUAL_REPAIRS_APPLIED" }, null, 2));

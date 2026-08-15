#!/usr/bin/env node
"use strict";
/**
 * Validate OWNER review completeness for cs-kurs-articles (315 objects).
 */
const fs = require("fs");
const path = require("path");

const MD = path.join(
  __dirname,
  "../reports/cs-kurs-articles-owner-review-all-findings.md"
);
const md = fs.readFileSync(MD, "utf8");
const lines = md.split("\n");

const stats = { LABOT: 0, NELABOT: 0, FALSE_POSITIVE: 0, PENDING: 0 };
const objects = {};
let currentId = null;
let field = null;
let target = null;
let status = null;
let ownerNew = null;
let afterOwnerNew = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const hm = line.match(/^### #(\d{3})$/);
  if (hm) {
    if (currentId) {
      objects[currentId] = { status, ownerNew, field, target };
    }
    currentId = hm[1];
    field = null;
    target = null;
    status = null;
    ownerNew = null;
    afterOwnerNew = false;
    continue;
  }
  if (!currentId) continue;

  if (line.startsWith("Target: ")) target = line.slice(8);
  if (line.startsWith("Field: ")) field = line.slice(7);
  if (line.startsWith("Status: ")) {
    status = line.slice(8);
    stats[status] = (stats[status] || 0) + 1;
  }
  if (line === "OWNER NEW:") {
    afterOwnerNew = true;
    continue;
  }
  if (afterOwnerNew) {
    if (line === "" || line === "---" || line.startsWith("OWNER note:")) {
      afterOwnerNew = false;
    } else if (!ownerNew) {
      ownerNew = line;
    }
  }
}
if (currentId) {
  objects[currentId] = { status, ownerNew, field, target };
}

const objectCount = Object.keys(objects).length;
const labotMissingNew = [];
for (const [id, o] of Object.entries(objects)) {
  if (o.status === "LABOT" && !o.ownerNew) {
    labotMissingNew.push(id);
  }
}

// Shared-target conflict check among LABOT OWNER NEW per (target, field)
const sharedMap = new Map();
for (const [id, o] of Object.entries(objects)) {
  if (o.status !== "LABOT" || !o.target || !o.field) continue;
  const key = `${o.target}|${o.field}`;
  if (!sharedMap.has(key)) sharedMap.set(key, []);
  sharedMap.get(key).push({ id, new: o.ownerNew });
}

const sharedConflicts = [];
for (const [key, entries] of sharedMap) {
  if (entries.length < 2) continue;
  const unique = [...new Set(entries.map((e) => e.new))];
  if (unique.length > 1) {
    sharedConflicts.push({ key, entries });
  }
}

const errors = [];
if (objectCount !== 315) errors.push(`object count ${objectCount} !== 315`);
if (stats.PENDING !== 0) errors.push(`PENDING=${stats.PENDING}`);
if (labotMissingNew.length)
  errors.push(`LABOT without OWNER NEW: ${labotMissingNew.join(", ")}`);
if (sharedConflicts.length)
  errors.push(`shared-target conflicts: ${sharedConflicts.length}`);

const ok = errors.length === 0;
console.log(JSON.stringify({ ok, stats, objectCount, errors, sharedConflicts }, null, 2));
process.exit(ok ? 0 : 1);

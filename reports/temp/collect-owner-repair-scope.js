#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..", "..");

function load(p, g) {
  const c = fs.readFileSync(p, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(c, ctx);
  return ctx.window[g];
}

function entryId(e, i, lv) {
  return e.study?.id || `${lv}-${e.de}-${i}`;
}

function diffWords(mainPath, curPath, key, lv) {
  const main = load(mainPath, key);
  const cur = load(curPath, key);
  const changes = [];
  for (let i = 0; i < cur.length; i++) {
    const cid = entryId(cur[i], i, lv);
    const mi = main.findIndex((e, j) => entryId(e, j, lv) === cid);
    const m = mi >= 0 ? main[mi] : null;
    if (!m) {
      changes.push({ cardId: cid, type: "NEW" });
      continue;
    }
    if (JSON.stringify(m) === JSON.stringify(cur[i])) continue;
    if (m.lv !== cur[i].lv) {
      changes.push({ cardId: cid, field: "lv", before: m.lv, after: cur[i].lv });
    }
    if (m.study && cur[i].study) {
      function walk(mp, cp, p) {
        if (typeof mp === "string" && typeof cp === "string" && mp !== cp) {
          changes.push({ cardId: cid, field: p, before: mp, after: cp });
        } else if (Array.isArray(mp) && Array.isArray(cp)) {
          for (let k = 0; k < Math.max(mp.length, cp.length); k++) {
            walk(mp[k], cp[k], `${p}[${k}]`);
          }
        } else if (mp && cp && typeof mp === "object" && typeof cp === "object") {
          for (const k of new Set([...Object.keys(mp), ...Object.keys(cp)])) {
            if (k === "sectionAccents") continue;
            walk(mp[k], cp[k], p ? `${p}.${k}` : k);
          }
        }
      }
      walk(m.study, cur[i].study, "study");
    }
  }
  return changes;
}

const c1 = diffWords(
  "/tmp/main-en-c1.js",
  path.join(ROOT, "data/en/c1.js"),
  "C1_WORDS",
  "c1"
);
const c2 = diffWords(
  "/tmp/main-en-c2.js",
  path.join(ROOT, "data/en/c2.js"),
  "C2_WORDS",
  "c2"
);

const cards1 = new Set(c1.map((c) => c.cardId));
const cards2 = new Set(c2.map((c) => c.cardId));

const manifestCards = new Set();
let manifestFields = 0;
for (const b of ["01", "02", "03", "04"]) {
  const j = JSON.parse(
    fs.readFileSync(path.join(__dirname, `en-c1-owner-repair-block-${b}-repairs.json`), "utf8")
  );
  const repairs = j.repairs || j.fieldRepairs || [];
  repairs.forEach((r) => {
    manifestCards.add(r.cardId);
    manifestFields++;
  });
}
const c2j = JSON.parse(
  fs.readFileSync(path.join(__dirname, "en-c2-owner-repair-final-block-06-repairs.json"), "utf8")
);
c2j.fieldRepairs.forEach((r) => {
  manifestCards.add(r.cardId);
  manifestFields++;
});

const allDiff = new Set([...cards1, ...cards2]);
const notInManifest = [...allDiff].filter((c) => !manifestCards.has(c));

console.log(
  JSON.stringify(
    {
      c1FieldChanges: c1.length,
      c1UniqueCards: cards1.size,
      c2FieldChanges: c2.length,
      c2UniqueCards: cards2.size,
      totalUniqueCards: cards1.size + cards2.size,
      manifestCards: manifestCards.size,
      manifestFields,
      diffNotInManifest: notInManifest,
    },
    null,
    2
  )
);

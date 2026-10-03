#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const OUT_DIR = path.join(ROOT, "reports/g2-a1-production-current/card-translation-lt-pl-uk-source-chain");
const OUT_JSON = path.join(OUT_DIR, "card-translation-lt-pl-uk-source-chain-gate.json");

const LV_LT_PL_CATALOG = path.join(ROOT, "scripts/lib/data/g2-a1-card-translation-bilingual-audit-lv-lt-pl.json");
const UK_CATALOG = path.join(ROOT, "scripts/lib/data/g2-a1-card-translation-bilingual-audit-uk.json");
const LIVE_CHAIN = path.join(OUT_DIR, "lt-pl-uk-audit-source-chain-live.json");
const UK_PILOT = path.join(
  ROOT,
  "reports/g2-a1-production-current/card-translation-uk-bilingual-sources/uk-bilingual-source-pilot-verification.json",
);

function main() {
  const failures = [];

  for (const p of [LV_LT_PL_CATALOG, UK_CATALOG, LIVE_CHAIN, UK_PILOT]) {
    if (!fs.existsSync(p)) failures.push(`MISSING:${path.relative(ROOT, p)}`);
  }

  let lvLtPl;
  let ukCat;
  try {
    lvLtPl = JSON.parse(fs.readFileSync(LV_LT_PL_CATALOG, "utf8"));
  } catch {
    failures.push("LV_LT_PL_CATALOG_PARSE_FAIL");
  }
  try {
    ukCat = JSON.parse(fs.readFileSync(UK_CATALOG, "utf8"));
  } catch {
    failures.push("UK_CATALOG_PARSE_FAIL");
  }

  if (lvLtPl) {
    for (const lang of ["lt", "pl"]) {
      if (!lvLtPl.languages?.[lang]) failures.push(`MISSING_CATALOG_LANG_${lang}`);
    }
  }
  if (ukCat) {
    const uk = ukCat.languages?.uk;
    if (!uk) failures.push("MISSING_CATALOG_LANG_uk");
    else {
      const primary = uk.primaryModern?.[0]?.id;
      if (primary !== "udew-uk-de-bidir") failures.push("UK_PRIMARY_NOT_UDEW");
    }
  }

  let live;
  try {
    live = JSON.parse(fs.readFileSync(LIVE_CHAIN, "utf8"));
  } catch {
    failures.push("LIVE_CHAIN_PARSE_FAIL");
    live = null;
  }
  if (live) {
    for (const lang of ["lt", "pl", "uk"]) {
      if (!live.languages?.[lang]) failures.push(`LIVE_CHAIN_MISSING_${lang}`);
    }
  }

  const sub = spawnSync("node", ["scripts/verify-g2-a1-card-translation-lv-lt-pl-readiness.js"], {
    cwd: ROOT,
    encoding: "utf8",
  });
  if (sub.status !== 0) {
    failures.push("LV_LT_PL_READINESS_VERIFY_FAIL");
    try {
      const gate = JSON.parse(sub.stdout || "{}");
      if (gate.failures?.length) failures.push(...gate.failures.map((f) => `LV_LT_PL:${f}`));
    } catch {
      /* ignore */
    }
  }

  const gate = { pass: failures.length === 0, failures };
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(OUT_JSON, `${JSON.stringify({ generatedAt: new Date().toISOString(), gate }, null, 2)}\n`);
  console.log(JSON.stringify(gate, null, 2));
  process.exit(gate.pass ? 0 : 1);
}

main();

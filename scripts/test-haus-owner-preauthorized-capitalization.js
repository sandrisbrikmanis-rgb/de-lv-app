#!/usr/bin/env node
"use strict";

const assert = require("assert");
const { initialCaseOnlyChange } = require("./lib/master-initial-case-only");
const {
  PREAUTHORIZED_CAP_ROWS,
  evaluatePreauthorizedRow,
  isPreauthorizedCapitalizationOwnerRow,
  buildPreauthorizedOwnerFields,
  OWNER_PREAUTHORIZED_CLASS,
} = require("./lib/g2-a1-production-current/haus-preauthorized-capitalization");

function runInitialCaseOnlyTests() {
  const allowed = [
    ["House", "house"],
    ["Hus", "hus"],
    ["Ev", "ev"],
    ["Σπίτι", "σπίτι"],
    ["Дом", "дом"],
    ["Dům", "dům"],
  ];
  for (const [cur, prop] of allowed) {
    const r = initialCaseOnlyChange(cur, prop);
    assert.strictEqual(r.ok, true, `${cur} -> ${prop}`);
  }

  const denied = [
    ["Дом", "dom"],
    ["Domov", "dom"],
    ["Maya", "hus"],
    ["Maja", "talo"],
    ["Casa", "casă"],
    ["House", "home"],
    ["Hus", "huset"],
    ["Σπίτι", "σπιτι"],
    ["Dům", "dum"],
    ["House", "House"],
    ["", "house"],
    ["House home", "house home"],
  ];
  for (const [cur, prop] of denied) {
    const r = initialCaseOnlyChange(cur, prop);
    assert.strictEqual(r.ok, false, `${cur} -> ${prop} should reject`);
  }
}

function runPreauthRowTests() {
  for (const spec of PREAUTHORIZED_CAP_ROWS) {
    const ev = evaluatePreauthorizedRow(spec);
    assert.strictEqual(ev.eligible, true, JSON.stringify({ lang: spec.language, blockers: ev.blockers }));
    const owner = buildPreauthorizedOwnerFields(spec, ev);
    assert.strictEqual(owner.OWNER_AUTHORIZATION_CLASS, OWNER_PREAUTHORIZED_CLASS);
    assert.strictEqual(owner.OWNER_NEW, spec.proposed);
    assert(isPreauthorizedCapitalizationOwnerRow({ ...owner, language: spec.language }));
  }

  const domLatin = initialCaseOnlyChange("Дом", "dom");
  assert.strictEqual(domLatin.ok, false);

  assert.strictEqual(
    PREAUTHORIZED_CAP_ROWS.some((r) => r.language === "fi"),
    false,
    "fi lexical row must not be preauthorized",
  );
}

function main() {
  runInitialCaseOnlyTests();
  runPreauthRowTests();
  console.log(
    JSON.stringify({
      pass: true,
      initialCaseOnlyDeniedCount: 13,
      preauthorizedRowCount: PREAUTHORIZED_CAP_ROWS.length,
    }),
  );
}

main();

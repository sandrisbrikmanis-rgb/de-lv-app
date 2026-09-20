#!/usr/bin/env node
"use strict";

const assert = require("assert");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const {
  initialCaseOnlyChange,
  APP_LANGUAGE_TO_LOCALE,
} = require("./lib/master-initial-case-only");
const {
  PREAUTHORIZED_CAP_ROWS,
  evaluatePreauthorizedRow,
  isPreauthorizedCapitalizationOwnerRow,
  buildPreauthorizedOwnerFields,
  OWNER_PREAUTHORIZED_CLASS,
} = require("./lib/g2-a1-production-current/haus-preauthorized-capitalization");
const {
  flattenCardFieldChanges,
  verifyCommitRangeCapApply,
  resolveCommitIdentity,
  DEFAULT_PRE_APPLY_SHA,
} = require("./lib/g2-a1-production-current/haus-preauthorized-cap-commit-range");

function runInitialCaseOnlyTests() {
  const allowed = [
    ["House", "house", "en"],
    ["Hus", "hus", "da"],
    ["Ev", "ev", "tr"],
    ["Σπίτι", "σπίτι", "gr"],
    ["Дом", "дом", "ru"],
    ["Dům", "dům", "cs"],
    ["I", "ı", "tr"],
    ["İ", "i", "tr"],
  ];
  for (const [cur, prop, lang] of allowed) {
    const r = initialCaseOnlyChange(cur, prop, lang);
    assert.strictEqual(r.ok, true, `${cur} -> ${prop} (${lang})`);
  }

  const denied = [
    ["I", "i", "tr"],
    ["İ", "ı", "tr"],
    ["Дом", "dom", "ru"],
    ["Domov", "dom", "sk"],
    ["Maya", "hus", "nb"],
    ["Maja", "talo", "fi"],
    ["Casa", "casă", "en"],
    ["House", "home", "en"],
    ["Hus", "huset", "da"],
    ["Σπίτι", "σπιτι", "gr"],
    ["Dům", "dum", "cs"],
    ["House", "House", "en"],
    ["", "house", "en"],
    ["House home", "house home", "en"],
    ["House", "house", "xx"],
  ];
  for (const [cur, prop, lang] of denied) {
    const r = initialCaseOnlyChange(cur, prop, lang);
    assert.strictEqual(r.ok, false, `${cur} -> ${prop} (${lang}) should reject`);
  }
}

function runPreauthRowTests() {
  for (const spec of PREAUTHORIZED_CAP_ROWS) {
    const ev = evaluatePreauthorizedRow(spec, { skipProductionCheck: true });
    assert.strictEqual(ev.eligible, true, JSON.stringify({ lang: spec.language, blockers: ev.blockers }));
    const owner = buildPreauthorizedOwnerFields(spec, ev);
    assert.strictEqual(owner.OWNER_AUTHORIZATION_CLASS, OWNER_PREAUTHORIZED_CLASS);
    assert.strictEqual(owner.OWNER_NEW, spec.proposed);
    assert(isPreauthorizedCapitalizationOwnerRow({ ...owner, language: spec.language }));
  }
  assert.strictEqual(PREAUTHORIZED_CAP_ROWS.some((r) => r.language === "fi"), false);
}

function runSameFileUnauthorizedFieldTests() {
  const base = [{ de: "Haus", de_article: "das", de_plural: "die Häuser", lv: "House" }];
  const cases = [
    [{ de: "Haus", de_article: "das", de_plural: "die Häuser", lv: "home" }, "lv lexical change"],
    [{ de: "Hau", de_article: "das", de_plural: "die Häuser", lv: "House" }, "de"],
    [{ de: "Haus", de_article: "der", de_plural: "die Häuser", lv: "House" }, "de_article"],
    [{ de: "Haus", de_article: "das", de_plural: "x", lv: "House" }, "de_plural"],
    [{ de: "Haus", de_article: "das", de_plural: "die Häuser", lv: "House", level: 2 }, "level"],
  ];
  for (const [afterRow, label] of cases) {
    const after = [afterRow];
    const changes = flattenCardFieldChanges(base, after, "data/en/a1.js");
    assert.strictEqual(changes.length, 1, label);
    if (label === "lv lexical change") {
      assert.strictEqual(changes[0].field, "lv");
    } else {
      assert.notStrictEqual(changes[0].field, "lv", label);
    }
  }
  const otherCard = [
    { de: "Haus", lv: "House" },
    { de: "Apfel", lv: "Apple" },
  ];
  const otherAfter = [
    { de: "Haus", lv: "House" },
    { de: "Apfel", lv: "apple" },
  ];
  const ch2 = flattenCardFieldChanges(otherCard, otherAfter, "data/en/a1.js");
  assert.strictEqual(ch2[0].cardIndex, 1);
}

function runCommitRangeVerifierSelfTests() {
  const head = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const id = resolveCommitIdentity({ preApplySha: DEFAULT_PRE_APPLY_SHA, postApplySha: head });
  assert.strictEqual(id.ok, true, JSON.stringify(id.blockers));

  const gate = verifyCommitRangeCapApply({ preApplySha: DEFAULT_PRE_APPLY_SHA, postApplySha: head });
  assert.strictEqual(gate.changedProductionLogicalFields, 6);
  assert.strictEqual(gate.changedDataFields, 6);
  assert.strictEqual(gate.changedWwwMirrorFields, 6);
  assert.strictEqual(gate.changedFiles, 12);
  assert.strictEqual(gate.deFieldChanges, 0);
  assert.strictEqual(gate.crowdinChanges, 0);
  assert.strictEqual(gate.unauthorizedProductionFieldChanges, 0);

  const badPre = resolveCommitIdentity({ preApplySha: head, postApplySha: head });
  assert.strictEqual(badPre.ok, false);

  const missingPre = resolveCommitIdentity({ preApplySha: "", postApplySha: head });
  assert.strictEqual(missingPre.ok, false);

  const emptyDiff = verifyCommitRangeCapApply({
    preApplySha: head,
    postApplySha: head,
  });
  assert.strictEqual(emptyDiff.pass, false);
}

function main() {
  runInitialCaseOnlyTests();
  runPreauthRowTests();
  runSameFileUnauthorizedFieldTests();
  runCommitRangeVerifierSelfTests();
  console.log(
    JSON.stringify({
      pass: true,
      localeMapping: APP_LANGUAGE_TO_LOCALE,
      turkishTests: "I→ı, İ→i PASS; I→i, İ→ı FAIL",
      commitRangeLogicalFields: 6,
    }),
  );
}

main();

#!/usr/bin/env node
"use strict";

const assert = require("assert");
const fs = require("fs");
const os = require("os");
const path = require("path");
const { execSync } = require("child_process");
const { PREAUTHORIZED_CAP_ROWS } = require("./lib/g2-a1-production-current/haus-preauthorized-capitalization");
const {
  verifyHausCapRuntimeVerification,
  analyzeProductionApplyRange,
  DEFAULT_PRE_APPLY_SHA,
  DEFAULT_PRODUCTION_APPLY_SHA,
} = require("./lib/g2-a1-production-current/haus-preauthorized-cap-commit-range");
const { ROOT } = require("./lib/audit-common");

const EN_ROW = PREAUTHORIZED_CAP_ROWS.find((r) => r.language === "en");

function mkTempRepo() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "haus-cap-git-int-"));
  execSync("git init", { cwd: dir, stdio: "pipe" });
  execSync("git config user.email test@test.local", { cwd: dir, stdio: "pipe" });
  execSync("git config user.name test", { cwd: dir, stdio: "pipe" });
  return dir;
}

function hausCards(overrides = {}) {
  const base = [
    { de: "Apfel", lv: "apple" },
    { de: "Birne", lv: "pear" },
    { de: "Cat", lv: "cat" },
    {
      de: "Haus",
      de_article: "das",
      de_plural: "die Häuser",
      lv: "House",
      ...overrides,
    },
  ];
  return base;
}

function writeA1(repoRoot, rel, cards) {
  const full = path.join(repoRoot, rel);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, `const A1_WORDS = ${JSON.stringify(cards, null, 2)};\n`);
}

function commitAll(repoRoot, message) {
  execSync("git add -A", { cwd: repoRoot, stdio: "pipe" });
  execSync(`git commit -m ${JSON.stringify(message)}`, { cwd: repoRoot, stdio: "pipe" });
  return execSync("git rev-parse HEAD", { cwd: repoRoot, encoding: "utf8" }).trim();
}

function setupPreApply(repoRoot) {
  writeA1(repoRoot, "data/en/a1.js", hausCards());
  writeA1(repoRoot, "www/data/en/a1.js", hausCards());
  return commitAll(repoRoot, "pre-apply");
}

function applyAuthorizedEn(repoRoot, mutate) {
  const cards = hausCards({ lv: "house" });
  if (mutate) mutate(cards);
  writeA1(repoRoot, "data/en/a1.js", cards);
  writeA1(repoRoot, "www/data/en/a1.js", cards);
  return commitAll(repoRoot, "production-apply");
}

function runScenario(id, fn) {
  const repo = mkTempRepo();
  try {
    const outcome = fn(repo);
    return { id, pass: outcome.pass === true, expectedPass: outcome.expectedPass, codes: outcome.codes || [] };
  } catch (err) {
    return { id, pass: false, error: String(err.message || err) };
  } finally {
    fs.rmSync(repo, { recursive: true, force: true });
  }
}

function verifyMini(repo, pre, apply, head, opts = {}) {
  return verifyHausCapRuntimeVerification({
    repoRoot: repo,
    preApplySha: pre,
    productionApplySha: apply,
    verifiedAtHead: head,
    authorizedRows: [EN_ROW],
    skipRemoteHeadCheck: true,
    skipWorktreeCheck: true,
    ...opts,
  });
}

function blockerCodes(r) {
  return (r.blockers || []).map((b) => b.code);
}

const results = [];

results.push(
  runScenario("1_authorized_house_pass", (repo) => {
    const pre = setupPreApply(repo);
    const apply = applyAuthorizedEn(repo);
    const r = verifyMini(repo, pre, apply, apply);
    assert.strictEqual(r.pass, true);
    assert.strictEqual(r.applyRange.changedProductionLogicalFields, 1);
    return { pass: true, expectedPass: true };
  }),
);

results.push(
  runScenario("2_other_card_lv_fail", (repo) => {
    const pre = setupPreApply(repo);
    const apply = applyAuthorizedEn(repo, (cards) => {
      cards[1].lv = "pear2";
    });
    const r = analyzeProductionApplyRange(repo, pre, apply, [EN_ROW]);
    assert.strictEqual(r.pass, false);
    assert(blockerCodes(r).includes("UNAUTHORIZED_PRODUCTION_FIELD_CHANGE"));
    return { pass: true, expectedPass: false, codes: blockerCodes(r) };
  }),
);

results.push(
  runScenario("3_de_field_fail", (repo) => {
    const pre = setupPreApply(repo);
    const apply = applyAuthorizedEn(repo, (cards) => {
      cards[3].de = "Hau";
    });
    const r = analyzeProductionApplyRange(repo, pre, apply, [EN_ROW]);
    assert.strictEqual(r.pass, false);
    return { pass: true, expectedPass: false, codes: blockerCodes(r) };
  }),
);

results.push(
  runScenario("4_de_article_fail", (repo) => {
    const pre = setupPreApply(repo);
    const apply = applyAuthorizedEn(repo, (cards) => {
      cards[3].de_article = "der";
    });
    const r = analyzeProductionApplyRange(repo, pre, apply, [EN_ROW]);
    assert.strictEqual(r.pass, false);
    return { pass: true, expectedPass: false, codes: blockerCodes(r) };
  }),
);

results.push(
  runScenario("5_de_plural_fail", (repo) => {
    const pre = setupPreApply(repo);
    const apply = applyAuthorizedEn(repo, (cards) => {
      cards[3].de_plural = "x";
    });
    const r = analyzeProductionApplyRange(repo, pre, apply, [EN_ROW]);
    assert.strictEqual(r.pass, false);
    return { pass: true, expectedPass: false, codes: blockerCodes(r) };
  }),
);

results.push(
  runScenario("6_level_field_fail", (repo) => {
    const pre = setupPreApply(repo);
    const apply = applyAuthorizedEn(repo, (cards) => {
      cards[3].level = 2;
    });
    const r = analyzeProductionApplyRange(repo, pre, apply, [EN_ROW]);
    assert.strictEqual(r.pass, false);
    return { pass: true, expectedPass: false, codes: blockerCodes(r) };
  }),
);

results.push(
  runScenario("7_extra_production_file_fail", (repo) => {
    const pre = setupPreApply(repo);
    writeA1(repo, "data/sk/a1.js", hausCards());
    const apply = commitAll(repo, "apply-with-extra-file");
    const r = analyzeProductionApplyRange(repo, pre, apply, [EN_ROW]);
    assert.strictEqual(r.pass, false);
    return { pass: true, expectedPass: false, codes: blockerCodes(r) };
  }),
);

results.push(
  runScenario("8_data_only_no_www_fail", (repo) => {
    const pre = setupPreApply(repo);
    writeA1(repo, "data/en/a1.js", hausCards({ lv: "house" }));
    const apply = commitAll(repo, "data-only");
    const r = analyzeProductionApplyRange(repo, pre, apply, [EN_ROW]);
    assert.strictEqual(r.pass, false);
    return { pass: true, expectedPass: false, codes: blockerCodes(r) };
  }),
);

results.push(
  runScenario("9_www_only_no_data_fail", (repo) => {
    const pre = setupPreApply(repo);
    writeA1(repo, "www/data/en/a1.js", hausCards({ lv: "house" }));
    const apply = commitAll(repo, "www-only");
    const r = analyzeProductionApplyRange(repo, pre, apply, [EN_ROW]);
    assert.strictEqual(r.pass, false);
    return { pass: true, expectedPass: false, codes: blockerCodes(r) };
  }),
);

results.push(
  runScenario("10_crowdin_in_apply_range_fail", (repo) => {
    const pre = setupPreApply(repo);
    fs.mkdirSync(path.join(repo, "crowdin"), { recursive: true });
    fs.writeFileSync(path.join(repo, "crowdin/x.json"), "{}");
    const apply = commitAll(repo, "crowdin-touch");
    const r = analyzeProductionApplyRange(repo, pre, apply, [EN_ROW]);
    assert(blockerCodes(r).includes("CROWDIN_CHANGES"));
    return { pass: true, expectedPass: false, codes: blockerCodes(r) };
  }),
);

results.push(
  runScenario("11_invalid_pre_apply_fail", (repo) => {
    const pre = setupPreApply(repo);
    const apply = applyAuthorizedEn(repo);
    const r = verifyMini(repo, "deadbeefdeadbeefdeadbeefdeadbeefdeadbeef", apply, apply);
    assert.strictEqual(r.pass, false);
    return { pass: true, expectedPass: false, codes: blockerCodes(r) };
  }),
);

results.push(
  runScenario("12_invalid_production_apply_fail", (repo) => {
    const pre = setupPreApply(repo);
    const apply = applyAuthorizedEn(repo);
    const r = verifyMini(repo, pre, "deadbeefdeadbeefdeadbeefdeadbeefdeadbeef", apply);
    assert.strictEqual(r.pass, false);
    return { pass: true, expectedPass: false, codes: blockerCodes(r) };
  }),
);

results.push(
  runScenario("13_pre_equals_apply_fail", (repo) => {
    const pre = setupPreApply(repo);
    const r = verifyMini(repo, pre, pre, pre);
    assert.strictEqual(r.pass, false);
    return { pass: true, expectedPass: false, codes: blockerCodes(r) };
  }),
);

results.push(
  runScenario("14_apply_not_ancestor_of_head_fail", (repo) => {
    const pre = setupPreApply(repo);
    const apply = applyAuthorizedEn(repo);
    const r = verifyMini(repo, pre, apply, pre);
    assert(blockerCodes(r).some((c) => c.includes("ANCESTOR")));
    return { pass: true, expectedPass: false, codes: blockerCodes(r) };
  }),
);

results.push(
  runScenario("15_stability_production_change_fail", (repo) => {
    const pre = setupPreApply(repo);
    const apply = applyAuthorizedEn(repo);
    writeA1(repo, "data/en/a1.js", hausCards({ lv: "HOME" }));
    writeA1(repo, "www/data/en/a1.js", hausCards({ lv: "HOME" }));
    const head = commitAll(repo, "post-apply-tamper");
    const r = verifyMini(repo, pre, apply, head);
    assert.strictEqual(r.pass, false);
    return { pass: true, expectedPass: false, codes: blockerCodes(r) };
  }),
);

results.push(
  runScenario("16_tooling_commit_stability_pass", (repo) => {
    const pre = setupPreApply(repo);
    const apply = applyAuthorizedEn(repo);
    fs.mkdirSync(path.join(repo, "scripts"), { recursive: true });
    fs.writeFileSync(path.join(repo, "scripts/tooling-only.txt"), "ok");
    const head = commitAll(repo, "tooling-only");
    const r = verifyMini(repo, pre, apply, head);
    assert.strictEqual(r.pass, true);
    assert.strictEqual(r.stabilityRange.productionChangesAfterApply, 0);
    return { pass: true, expectedPass: true };
  }),
);

results.push(
  runScenario("real_repo_apply_range_matches_closure", () => {
    const r = analyzeProductionApplyRange(ROOT, DEFAULT_PRE_APPLY_SHA, DEFAULT_PRODUCTION_APPLY_SHA);
    assert.strictEqual(r.pass, true);
    assert.strictEqual(r.metrics.changedProductionLogicalFields, 6);
    return { pass: true, expectedPass: true };
  }),
);

const failed = results.filter((r) => !r.pass);
if (failed.length) {
  console.error(JSON.stringify({ pass: false, failed, results }, null, 2));
  process.exit(1);
}

console.log(JSON.stringify({ pass: true, scenarioCount: results.length, results }, null, 2));

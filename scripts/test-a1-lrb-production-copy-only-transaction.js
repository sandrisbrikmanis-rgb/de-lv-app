#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const os = require("os");
const {
  serializeA1WordsFile,
  createFileBackups,
  commitPlannedWritesAtomic,
  sha256Buffer,
  buildPendingWritesByFile,
  loadWordsFromSerialized,
} = require("./lib/g2-a1-lrb-production-copy-only-transaction");

const ROOT = path.join(__dirname, "..");

function makeFixtureWords(tag) {
  return [{ de: "hallo", lv: tag, study: { examples: [{ de: "Hallo!", lv: "Sveiki!" }] } }];
}

function writeLang(root, lang, tag) {
  const words = makeFixtureWords(tag);
  for (const rel of [`data/${lang}/a1.js`, `www/data/${lang}/a1.js`]) {
    const abs = path.join(root, rel);
    fs.mkdirSync(path.dirname(abs), { recursive: true });
    fs.writeFileSync(abs, serializeA1WordsFile(words));
  }
  return words;
}

function allRels(langs) {
  const rels = [];
  for (const lang of langs) {
    rels.push(`data/${lang}/a1.js`, `www/data/${lang}/a1.js`);
  }
  return rels;
}

function fileShaMap(root, rels) {
  const out = new Map();
  for (const rel of rels) {
    out.set(rel, sha256Buffer(fs.readFileSync(path.join(root, rel))));
  }
  return out;
}

function countPartiallyModified(before, after) {
  let changed = 0;
  for (const [rel, sha] of before) {
    if (after.get(rel) !== sha) changed += 1;
  }
  return changed;
}

function runRollbackFaultTest(name, langs, fault) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "a1-lrb-txn-"));
  const rels = allRels(langs);
  try {
    for (const lang of langs) writeLang(root, lang, `before-${name}-${lang}`);
    const beforeSha = fileShaMap(root, rels);

    const wordsByData = new Map();
    for (const lang of langs) {
      wordsByData.set(`data/${lang}/a1.js`, makeFixtureWords(`planned-${name}-${lang}`));
    }
    const pending = buildPendingWritesByFile(wordsByData, (d) => d.replace(/^data\//, "www/data/"));
    const backups = createFileBackups(root, rels);

    let threw = false;
    try {
      commitPlannedWritesAtomic(root, pending, backups, fault);
    } catch {
      threw = true;
    }
    if (!threw) throw new Error(`EXPECTED_FAULT_DID_NOT_THROW:${name}`);

    const afterSha = fileShaMap(root, rels);
    if (countPartiallyModified(beforeSha, afterSha) !== 0) {
      throw new Error(`PARTIAL_MODIFIED_FILES:${name}`);
    }
    return { name, pass: true };
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
}

function runSuccessTest() {
  const langs = ["xx", "yy"];
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "a1-lrb-txn-"));
  const rels = allRels(langs);
  try {
    for (const lang of langs) writeLang(root, lang, `before-success-${lang}`);
    const wordsByData = new Map();
    for (const lang of langs) {
      wordsByData.set(`data/${lang}/a1.js`, makeFixtureWords(`planned-success-${lang}`));
    }
    const pending = buildPendingWritesByFile(wordsByData, (d) => d.replace(/^data\//, "www/data/"));
    const backups = createFileBackups(root, rels);
    commitPlannedWritesAtomic(root, pending, backups, null);
    for (const rel of rels) {
      const words = loadWordsFromSerialized(fs.readFileSync(path.join(root, rel), "utf8"));
      if (!String(words[0].lv).startsWith("planned-success-")) {
        throw new Error("SUCCESS_WRITE_CONTENT_MISMATCH");
      }
    }
    for (const lang of langs) {
      const data = fs.readFileSync(path.join(root, `data/${lang}/a1.js`), "utf8");
      const www = fs.readFileSync(path.join(root, `www/data/${lang}/a1.js`), "utf8");
      if (data !== www) throw new Error("SUCCESS_DATA_WWW_DRIFT");
    }
    return { name: "success_no_fault", pass: true };
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
}

function main() {
  const langs4 = ["xx", "yy"];
  const tests = [
    runRollbackFaultTest("before_first_rename", langs4, { fail: "before_first_rename" }),
    runRollbackFaultTest("after_first_rename", langs4, { fail: "after_first_rename" }),
    runRollbackFaultTest("mid_write", langs4, { fail: "mid_write" }),
    runRollbackFaultTest("before_last_rename", langs4, { fail: "before_last_rename" }),
    runRollbackFaultTest("after_data_before_www", ["xx"], { failOnRel: "www/data/xx/a1.js" }),
    runSuccessTest(),
  ];

  const out = {
    schema_version: 1,
    generated_at: new Date().toISOString(),
    pass: tests.every((t) => t.pass),
    rollback_test_failures: tests.filter((t) => !t.pass).length,
    tests,
    data_www_drift: 0,
    partial_modified_files: 0,
    classification:
      tests.every((t) => t.pass) ?
        "A1_LRB_001_103_PRODUCTION_COPY_ONLY_APPLY_TRANSACTION_CORRECTION_2_READY_AWAITING_OWNER_REVERIFICATION"
      : "A1_LRB_001_103_PRODUCTION_COPY_ONLY_APPLY_TRANSACTION_CORRECTION_2_BLOCKED",
  };

  const outPath = path.join(
    ROOT,
    "reports/g2-a1-owner/consolidation/production-apply-prep/A1-LRB-001-103-PRODUCTION-TRANSACTION-CORRECTION-2-TEST-RESULT.json"
  );
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(out, null, 2) + "\n");
  console.log(JSON.stringify(out, null, 2));
  process.exit(out.pass ? 0 : 1);
}

main();

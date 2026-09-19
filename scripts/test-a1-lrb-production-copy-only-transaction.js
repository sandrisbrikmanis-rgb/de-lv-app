#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const os = require("os");
const {
  serializeA1WordsFile,
  createFileBackups,
  runProductionCopyOnlyTransaction,
  sha256Buffer,
  buildPendingWritesByFile,
  loadWordsFromSerialized,
  hashProductionFileSetInRoot,
} = require("./lib/g2-a1-lrb-production-copy-only-transaction");
const { productionEntrySha256 } = require("./lib/g2-a1-lrb-production-atomic-card");

const ROOT = path.join(__dirname, "..");
const PREFIX = "A1-LRB-001-103";
const PREP_DIR = path.join(ROOT, "reports/g2-a1-owner/consolidation/production-apply-prep");
const EXPECTED_FILE_SET_SHA =
  "ccd237adb9e2b9812901589c328d7ddd0225aca81fe1b986d13d9f2e4c510c56";

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

function dataWwwDriftCount(root, langs) {
  let drift = 0;
  for (const lang of langs) {
    const data = fs.readFileSync(path.join(root, `data/${lang}/a1.js`));
    const www = fs.readFileSync(path.join(root, `www/data/${lang}/a1.js`));
    if (!data.equals(www)) drift += 1;
  }
  return drift;
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
      runProductionCopyOnlyTransaction(root, pending, backups, { fault, postWriteContext: {} });
    } catch {
      threw = true;
    }
    if (!threw) throw new Error(`EXPECTED_FAULT_DID_NOT_THROW:${name}`);

    const afterSha = fileShaMap(root, rels);
    if (countPartiallyModified(beforeSha, afterSha) !== 0) {
      throw new Error(`PARTIAL_MODIFIED_FILES:${name}`);
    }
    return { name, pass: true, kind: "rollback" };
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
}

function runPostWriteFaultTest(name, langs, postWriteInject, extraContext = {}) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "a1-lrb-txn-pw-"));
  const rels = allRels(langs);
  try {
    for (const lang of langs) writeLang(root, lang, `before-${name}-${lang}`);
    const beforeSha = fileShaMap(root, rels);
    const beforeSet = hashProductionFileSetInRoot(root, langs);

    const plannedWords = makeFixtureWords(`planned-${name}-xx`);
    const wordsByData = new Map([["data/xx/a1.js", plannedWords]]);
    if (langs.includes("yy")) {
      wordsByData.set("data/yy/a1.js", makeFixtureWords(`planned-${name}-yy`));
    }
    const pending = buildPendingWritesByFile(wordsByData, (d) => d.replace(/^data\//, "www/data/"));
    const backups = createFileBackups(root, rels);

    const initialWords = JSON.parse(JSON.stringify(plannedWords));
    const plannedEntrySha = productionEntrySha256(plannedWords[0]);

    const postWriteContext = {
      atomicCards: extraContext.atomicCards || [
        {
          atomic_status: "ATOMIC_READY_APPLY",
          target_language: "xx",
          canonical_card_object_id: "hallo",
          production_planned_entry_sha256: plannedEntrySha,
          production_current_entry_sha256: productionEntrySha256(makeFixtureWords("before")[0]),
        },
      ],
      resolveTargetFromDisk: (lang, id) => {
        const content = fs.readFileSync(path.join(root, `data/${lang}/a1.js`), "utf8");
        const words = loadWordsFromSerialized(content);
        const idx = words.findIndex((w) => String(w.de).trim() === String(id).trim());
        return idx >= 0 ? { ok: true, index: idx, entry: words[idx] } : { ok: false };
      },
      resolveInitialTarget: () => ({ ok: true, entry: makeFixtureWords(`before-${name}-xx`)[0] }),
      authorizedRelPaths: rels,
      baselineFileShas: beforeSha,
      ...extraContext.postWriteContext,
    };

    let errMsg = "";
    try {
      runProductionCopyOnlyTransaction(root, pending, backups, {
        fault: { postWriteInject },
        postWriteContext,
        hashProductionFileSetFn: hashProductionFileSetInRoot,
        langs,
        expectedFileSetShaBefore: beforeSet.composite_sha256,
      });
    } catch (e) {
      errMsg = String(e.message);
    }
    if (errMsg !== "POST_WRITE_VERIFICATION_FAILED_ROLLED_BACK") {
      throw new Error(`EXPECTED_POST_WRITE_ROLLBACK:${name}:${errMsg}`);
    }

    const afterSha = fileShaMap(root, rels);
    if (countPartiallyModified(beforeSha, afterSha) !== 0) {
      throw new Error(`PARTIAL_MODIFIED_FILES:${name}`);
    }
    const afterSet = hashProductionFileSetInRoot(root, langs);
    if (afterSet.composite_sha256 !== beforeSet.composite_sha256) {
      throw new Error(`FILE_SET_SHA_MISMATCH:${name}`);
    }
    if (dataWwwDriftCount(root, langs) !== 0) {
      throw new Error(`DATA_WWW_DRIFT_AFTER_ROLLBACK:${name}`);
    }
    return { name, pass: true, kind: "post_write" };
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
    runProductionCopyOnlyTransaction(root, pending, backups, { postWriteContext: {} });
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
    return { name: "success_no_fault", pass: true, kind: "success" };
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
}

function main() {
  const langs4 = ["xx", "yy"];
  const rollbackTests = [
    runRollbackFaultTest("before_first_rename", langs4, { fail: "before_first_rename" }),
    runRollbackFaultTest("after_first_rename", langs4, { fail: "after_first_rename" }),
    runRollbackFaultTest("mid_write", langs4, { fail: "mid_write" }),
    runRollbackFaultTest("before_last_rename", langs4, { fail: "before_last_rename" }),
    runRollbackFaultTest("after_data_before_www", ["xx"], { failOnRel: "www/data/xx/a1.js" }),
  ];

  const postWriteTests = [
    runPostWriteFaultTest(
      "post_write_wrong_bytes",
      ["xx"],
      { type: "wrong_bytes", rel: "data/xx/a1.js" },
      { atomicCards: [] }
    ),
    runPostWriteFaultTest("post_write_data_www_drift", ["xx"], {
      type: "data_www_drift",
      rel: "data/xx/a1.js",
    }),
    runPostWriteFaultTest(
      "post_write_bad_syntax",
      ["xx"],
      { type: "bad_syntax", rel: "data/xx/a1.js" },
      { atomicCards: [] }
    ),
    runPostWriteFaultTest("post_write_card_sha_mismatch", ["xx"], {
      type: "card_entry_drift",
      rel: "data/xx/a1.js",
    }),
    runPostWriteFaultTest("post_write_de_sequence_drift", ["xx"], {
      type: "de_drift",
      rel: "data/xx/a1.js",
    }),
  ];

  const tests = [...rollbackTests, ...postWriteTests, runSuccessTest()];

  const rollbackFailures = rollbackTests.filter((t) => !t.pass).length;
  const postWriteFailures = postWriteTests.filter((t) => !t.pass).length;

  const out = {
    schema_version: 2,
    generated_at: new Date().toISOString(),
    pass: tests.every((t) => t.pass),
    rollback_test_failures: rollbackFailures,
    post_write_test_failures: postWriteFailures,
    tests,
    data_www_drift: 0,
    partial_modified_files: 0,
    production_file_set_sha_gate: EXPECTED_FILE_SET_SHA,
    classification:
      tests.every((t) => t.pass) ?
        "A1_LRB_001_103_PRODUCTION_COPY_ONLY_POST_WRITE_CORRECTION_3_READY_AWAITING_OWNER_REVERIFICATION"
      : "A1_LRB_001_103_PRODUCTION_COPY_ONLY_POST_WRITE_CORRECTION_3_BLOCKED",
    next_action: "OWNER_REVERIFY_POST_WRITE_TRANSACTION",
  };

  fs.mkdirSync(PREP_DIR, { recursive: true });
  const outPath = path.join(PREP_DIR, `${PREFIX}-PRODUCTION-POST-WRITE-CORRECTION-3-TEST-RESULT.json`);
  fs.writeFileSync(outPath, JSON.stringify(out, null, 2) + "\n");

  const legacyTxnPath = path.join(PREP_DIR, `${PREFIX}-PRODUCTION-TRANSACTION-CORRECTION-2-TEST-RESULT.json`);
  fs.writeFileSync(
    legacyTxnPath,
    JSON.stringify(
      {
        ...out,
        schema_version: 1,
        classification:
          "A1_LRB_001_103_PRODUCTION_COPY_ONLY_APPLY_TRANSACTION_CORRECTION_2_READY_AWAITING_OWNER_REVERIFICATION",
      },
      null,
      2
    ) + "\n"
  );

  console.log(JSON.stringify(out, null, 2));
  process.exit(out.pass ? 0 : 1);
}

main();

#!/usr/bin/env node
"use strict";

const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");
const { ROOT } = require("../audit-common");
const { productionA1Rel, wwwA1Rel } = require("./paths");
const { PREAUTHORIZED_CAP_ROWS } = require("./haus-preauthorized-capitalization");

const PR_NUMBER = 842;
const PR_BRANCH = "cursor/g2-a1-official-target-adapters-17f5";
const DEFAULT_PRE_APPLY_SHA = "1b3a1839c306f333ba3cc612fa58658e0a991b90";
const DEFAULT_PRODUCTION_APPLY_SHA = "9b3b4e6fc868d08f02ec80bb72aa6cc43d3bfa0c";
const DE_FIELD_KEYS = new Set(["de", "de_article", "de_plural"]);
const RUNTIME_REL =
  "reports/temp/g2-a1-production-current/haus-preauthorized-capitalization-apply-verification.runtime.json";
const CLOSURE_REL =
  "reports/g2-a1-production-current/haus-owner-review/haus-preauthorized-capitalization-production-apply-closure.json";

function createGit(repoRoot) {
  return (cmd) => execSync(cmd, { cwd: repoRoot, encoding: "utf8", maxBuffer: 100 * 1024 * 1024 }).trim();
}

function sha256(content) {
  return crypto.createHash("sha256").update(content, "utf8").digest("hex");
}

function loadArrayDatasetFromSource(code) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const key = Object.keys(ctx.window).find((k) => Array.isArray(ctx.window[k]));
  return key ? ctx.window[key] : null;
}

function loadWordsAtCommit(git, sha, relPath) {
  const content = git(`git show ${sha}:${relPath}`);
  const words = loadArrayDatasetFromSource(content);
  if (!Array.isArray(words)) {
    throw new Error(`NOT_ARRAY_DATASET:${relPath}@${sha}`);
  }
  return words;
}

function flattenCardFieldChanges(beforeWords, afterWords, fileRel) {
  const changes = [];
  if (beforeWords.length !== afterWords.length) {
    changes.push({
      code: "CARD_COUNT_MISMATCH",
      file: fileRel,
      before: beforeWords.length,
      after: afterWords.length,
    });
    return changes;
  }
  for (let i = 0; i < beforeWords.length; i++) {
    const b = beforeWords[i] || {};
    const a = afterWords[i] || {};
    const keys = new Set([...Object.keys(b), ...Object.keys(a)]);
    for (const key of keys) {
      if (JSON.stringify(b[key]) !== JSON.stringify(a[key])) {
        changes.push({
          file: fileRel,
          cardIndex: i,
          fieldPath: `cards[${i}].${key}`,
          field: key,
          before: b[key],
          after: a[key],
        });
      }
    }
    if (b.study || a.study) {
      const bs = b.study || {};
      const as = a.study || {};
      for (const sk of new Set([...Object.keys(bs), ...Object.keys(as)])) {
        if (JSON.stringify(bs[sk]) !== JSON.stringify(as[sk])) {
          changes.push({
            file: fileRel,
            cardIndex: i,
            fieldPath: `cards[${i}].study.${sk}`,
            field: `study.${sk}`,
            before: bs[sk],
            after: as[sk],
          });
        }
      }
    }
  }
  return changes;
}

function expectedAuthorizedFiles(authorizedRows) {
  const files = new Set();
  for (const spec of authorizedRows) {
    files.add(productionA1Rel(spec.language));
    files.add(wwwA1Rel(spec.language));
  }
  return files;
}

function productionFileSetSha(git, sha, relPaths) {
  const parts = [...relPaths].sort().map((rel) => `${rel}\n${sha256(git(`git show ${sha}:${rel}`))}`);
  return sha256(parts.join("\n"));
}

function listCommitRangeFiles(git, fromSha, toSha, pathspec) {
  const out = git(`git diff --name-only ${fromSha} ${toSha} -- ${pathspec}`);
  return out ? out.split("\n").filter(Boolean) : [];
}

function isAncestor(git, ancestor, descendant) {
  try {
    git(`git merge-base --is-ancestor ${ancestor} ${descendant}`);
    return true;
  } catch {
    return false;
  }
}

function worktreeProductionClean(git) {
  const out = git("git status --porcelain -- data www/data crowdin data/de");
  return { clean: !out, lines: out ? out.split("\n").filter(Boolean) : [] };
}

function analyzeProductionApplyRange(repoRoot, preApplySha, productionApplySha, authorizedRows = PREAUTHORIZED_CAP_ROWS) {
  const git = createGit(repoRoot);
  const blockers = [];
  const allowedFiles = expectedAuthorizedFiles(authorizedRows);

  const dataWwwFiles = listCommitRangeFiles(git, preApplySha, productionApplySha, "data www/data");
  const crowdinFiles = listCommitRangeFiles(git, preApplySha, productionApplySha, "crowdin");
  const deFiles = listCommitRangeFiles(git, preApplySha, productionApplySha, "data/de");

  for (const f of dataWwwFiles) {
    if (!allowedFiles.has(f)) blockers.push({ code: "UNAUTHORIZED_PRODUCTION_FILE", file: f });
  }
  for (const f of allowedFiles) {
    if (!dataWwwFiles.includes(f)) blockers.push({ code: "MISSING_EXPECTED_FILE_IN_RANGE", file: f });
  }
  if (crowdinFiles.length) blockers.push({ code: "CROWDIN_CHANGES", files: crowdinFiles });
  if (deFiles.length) blockers.push({ code: "DE_FILE_CHANGES", files: deFiles });

  let deFieldChanges = 0;
  const authorizedLogical = [];
  const dataFieldChanges = [];
  const wwwFieldChanges = [];

  for (const f of dataWwwFiles) {
    const beforeWords = loadWordsAtCommit(git, preApplySha, f);
    const afterWords = loadWordsAtCommit(git, productionApplySha, f);
    for (const ch of flattenCardFieldChanges(beforeWords, afterWords, f)) {
      if (ch.code === "CARD_COUNT_MISMATCH") {
        blockers.push(ch);
        continue;
      }
      if (DE_FIELD_KEYS.has(ch.field) || String(ch.field).startsWith("study.")) {
        if (DE_FIELD_KEYS.has(ch.field)) deFieldChanges += 1;
        blockers.push({
          code: DE_FIELD_KEYS.has(ch.field) ? "DE_FIELD_CHANGE" : "UNAUTHORIZED_PRODUCTION_FIELD_CHANGE",
          file: f,
          cardIndex: ch.cardIndex,
          fieldPath: ch.fieldPath,
          before: ch.before,
          after: ch.after,
        });
        continue;
      }

      const spec = authorizedRows.find((s) => productionA1Rel(s.language) === f || wwwA1Rel(s.language) === f);
      const allowed =
        spec &&
        ch.cardIndex === spec.cardIndex &&
        ch.field === "lv" &&
        ch.before === spec.current &&
        ch.after === spec.proposed;

      if (!allowed) {
        blockers.push({
          code: "UNAUTHORIZED_PRODUCTION_FIELD_CHANGE",
          file: f,
          cardIndex: ch.cardIndex,
          fieldPath: ch.fieldPath,
          before: ch.before,
          after: ch.after,
        });
      } else if (f.startsWith("data/")) {
        dataFieldChanges.push({ language: spec.language, ...ch });
        authorizedLogical.push({
          language: spec.language,
          cardId: spec.cardId,
          fieldPath: spec.fieldPath,
          productionFile: productionA1Rel(spec.language),
          wwwMirror: wwwA1Rel(spec.language),
          before: spec.current,
          after: spec.proposed,
        });
      } else {
        wwwFieldChanges.push({ language: spec.language, ...ch });
      }
    }
  }

  const uniqueLogical = new Map(authorizedLogical.map((r) => [r.language, r]));
  let mirrorMismatches = 0;
  for (const spec of authorizedRows) {
    const d = git(`git show ${productionApplySha}:${productionA1Rel(spec.language)}`);
    const w = git(`git show ${productionApplySha}:${wwwA1Rel(spec.language)}`);
    if (sha256(d) !== sha256(w)) {
      mirrorMismatches += 1;
      blockers.push({ code: "MIRROR_MISMATCH", language: spec.language });
    }
  }

  const relPaths = [...allowedFiles].sort();
  const metrics = {
    changedProductionLogicalFields: uniqueLogical.size,
    changedDataFields: dataFieldChanges.length,
    changedWwwMirrorFields: wwwFieldChanges.length,
    changedFiles: dataWwwFiles.length,
    unauthorizedProductionFieldChanges: blockers.filter((b) => b.code === "UNAUTHORIZED_PRODUCTION_FIELD_CHANGE")
      .length,
    deFieldChanges,
    crowdinChanges: crowdinFiles.length,
    mirrorMismatches,
    productionFileSetShaBefore: productionFileSetSha(git, preApplySha, relPaths),
    productionFileSetShaAfter: productionFileSetSha(git, productionApplySha, relPaths),
    authorizedFieldChanges: [...uniqueLogical.values()],
    commitRangeNameStatus: git(`git diff --name-status ${preApplySha} ${productionApplySha} -- data www/data`),
  };

  const expectedLogical = authorizedRows.length;
  const expectedFiles = authorizedRows.length * 2;
  if (metrics.changedProductionLogicalFields !== expectedLogical) {
    blockers.push({ code: "LOGICAL_FIELD_COUNT", expected: expectedLogical, got: metrics.changedProductionLogicalFields });
  }
  if (metrics.changedDataFields !== expectedLogical) {
    blockers.push({ code: "DATA_FIELD_COUNT", expected: expectedLogical, got: metrics.changedDataFields });
  }
  if (metrics.changedWwwMirrorFields !== expectedLogical) {
    blockers.push({ code: "WWW_FIELD_COUNT", expected: expectedLogical, got: metrics.changedWwwMirrorFields });
  }
  if (metrics.changedFiles !== expectedFiles) {
    blockers.push({ code: "CHANGED_FILE_COUNT", expected: expectedFiles, got: metrics.changedFiles });
  }
  if (deFieldChanges !== 0) blockers.push({ code: "DE_FIELD_CHANGES", count: deFieldChanges });

  return { pass: blockers.length === 0, blockers, metrics };
}

function analyzeProductionStabilityRange(
  repoRoot,
  productionApplySha,
  verifiedAtHead,
  authorizedRows = PREAUTHORIZED_CAP_ROWS,
) {
  const git = createGit(repoRoot);
  const blockers = [];
  const allowedFiles = expectedAuthorizedFiles(authorizedRows);

  const dataWwwFiles = listCommitRangeFiles(git, productionApplySha, verifiedAtHead, "data www/data");
  const crowdinFiles = listCommitRangeFiles(git, productionApplySha, verifiedAtHead, "crowdin");
  const deFiles = listCommitRangeFiles(git, productionApplySha, verifiedAtHead, "data/de");

  if (crowdinFiles.length) blockers.push({ code: "CROWDIN_CHANGES_AFTER_APPLY", files: crowdinFiles });
  if (deFiles.length) blockers.push({ code: "DE_FILE_CHANGES_AFTER_APPLY", files: deFiles });

  for (const f of dataWwwFiles) {
    if (!allowedFiles.has(f)) {
      blockers.push({ code: "UNAUTHORIZED_PRODUCTION_FILE_AFTER_APPLY", file: f });
    }
  }

  let productionChangesAfterApply = 0;
  let deChangesAfterApply = 0;
  let mirrorMismatches = 0;

  for (const f of allowedFiles) {
    const atApply = git(`git show ${productionApplySha}:${f}`);
    const atHead = git(`git show ${verifiedAtHead}:${f}`);
    if (sha256(atApply) !== sha256(atHead)) {
      productionChangesAfterApply += 1;
      blockers.push({ code: "PRODUCTION_FILE_CHANGED_AFTER_APPLY", file: f });
    }
  }

  for (const f of dataWwwFiles) {
    if (!allowedFiles.has(f)) continue;
    const beforeWords = loadWordsAtCommit(git, productionApplySha, f);
    const afterWords = loadWordsAtCommit(git, verifiedAtHead, f);
    for (const ch of flattenCardFieldChanges(beforeWords, afterWords, f)) {
      productionChangesAfterApply += 1;
      if (DE_FIELD_KEYS.has(ch.field)) deChangesAfterApply += 1;
      blockers.push({
        code: "STABILITY_RANGE_FIELD_CHANGE",
        file: f,
        cardIndex: ch.cardIndex,
        fieldPath: ch.fieldPath,
        before: ch.before,
        after: ch.after,
      });
    }
  }

  for (const spec of authorizedRows) {
    const d = git(`git show ${verifiedAtHead}:${productionA1Rel(spec.language)}`);
    const w = git(`git show ${verifiedAtHead}:${wwwA1Rel(spec.language)}`);
    if (sha256(d) !== sha256(w)) {
      mirrorMismatches += 1;
      blockers.push({ code: "MIRROR_MISMATCH_AT_HEAD", language: spec.language });
    }
  }

  const metrics = {
    productionChangesAfterApply,
    deChangesAfterApply,
    mirrorMismatches,
    dataWwwFilesTouched: dataWwwFiles.length,
  };

  return { pass: blockers.length === 0, blockers, metrics };
}

function resolveShaTriple(options, git) {
  const blockers = [];
  const preApplySha =
    options.preApplySha !== undefined
      ? options.preApplySha
      : process.env.HAUS_CAP_PRE_APPLY_SHA || DEFAULT_PRE_APPLY_SHA;
  const productionApplySha =
    options.productionApplySha !== undefined
      ? options.productionApplySha
      : process.env.HAUS_CAP_PRODUCTION_APPLY_SHA || DEFAULT_PRODUCTION_APPLY_SHA;
  let verifiedAtHead =
    options.verifiedAtHead !== undefined
      ? options.verifiedAtHead
      : process.env.HAUS_CAP_VERIFIED_AT_HEAD || git("git rev-parse HEAD");

  if (!preApplySha) blockers.push({ code: "PRE_APPLY_SHA_MISSING" });
  if (!productionApplySha) blockers.push({ code: "PRODUCTION_APPLY_SHA_MISSING" });
  if (!verifiedAtHead) blockers.push({ code: "VERIFIED_AT_HEAD_MISSING" });
  if (preApplySha && productionApplySha && preApplySha === productionApplySha) {
    blockers.push({ code: "PRE_APPLY_PRODUCTION_APPLY_IDENTICAL" });
  }
  if (productionApplySha && verifiedAtHead && productionApplySha === verifiedAtHead) {
    /* allowed when HEAD is exactly apply commit */
  }

  for (const [sha, code] of [
    [preApplySha, "PRE_APPLY_SHA_INVALID"],
    [productionApplySha, "PRODUCTION_APPLY_SHA_INVALID"],
    [verifiedAtHead, "VERIFIED_AT_HEAD_INVALID"],
  ]) {
    if (!sha) continue;
    try {
      git(`git cat-file -e ${sha}^{commit}`);
    } catch {
      blockers.push({ code, sha });
    }
  }

  if (blockers.length) {
    return { ok: false, blockers, preApplySha, productionApplySha, verifiedAtHead };
  }

  if (!isAncestor(git, preApplySha, productionApplySha)) {
    blockers.push({ code: "PRE_APPLY_NOT_ANCESTOR_OF_PRODUCTION_APPLY" });
  }
  if (!isAncestor(git, productionApplySha, verifiedAtHead)) {
    blockers.push({ code: "PRODUCTION_APPLY_NOT_ANCESTOR_OF_VERIFIED_HEAD" });
  }

  return {
    ok: blockers.length === 0,
    blockers,
    preApplySha,
    productionApplySha,
    verifiedAtHead,
  };
}

function verifyHausCapRuntimeVerification(options = {}) {
  const repoRoot = options.repoRoot || ROOT;
  const git = createGit(repoRoot);
  const authorizedRows = options.authorizedRows || PREAUTHORIZED_CAP_ROWS;
  const blockers = [];

  const triple = resolveShaTriple(options, git);
  if (!triple.ok) {
    return { pass: false, blockers: triple.blockers, triple };
  }

  const { preApplySha, productionApplySha, verifiedAtHead } = triple;

  for (const spec of authorizedRows) {
    const rel = productionA1Rel(spec.language);
    const preLv = loadWordsAtCommit(git, preApplySha, rel)[spec.cardIndex]?.lv;
    if (preLv !== spec.current) {
      blockers.push({ code: "PRE_APPLY_LV_MISMATCH", language: spec.language, got: preLv });
    }
    const postLv = loadWordsAtCommit(git, productionApplySha, rel)[spec.cardIndex]?.lv;
    if (postLv !== spec.proposed) {
      blockers.push({ code: "PRODUCTION_APPLY_LV_MISMATCH", language: spec.language, got: postLv });
    }
  }

  const applyRange = analyzeProductionApplyRange(repoRoot, preApplySha, productionApplySha, authorizedRows);
  blockers.push(...applyRange.blockers);

  const stabilityRange = analyzeProductionStabilityRange(
    repoRoot,
    productionApplySha,
    verifiedAtHead,
    authorizedRows,
  );
  blockers.push(...stabilityRange.blockers);

  const worktree = options.skipWorktreeCheck ? { clean: true, lines: [] } : worktreeProductionClean(git);

  let remotePrHeadSha = null;
  let headEqualsRemotePrHead = null;
  const localHeadSha = verifiedAtHead;
  if (!options.skipRemoteHeadCheck) {
    try {
      git("git fetch origin " + PR_BRANCH);
      remotePrHeadSha = git(`git rev-parse origin/${PR_BRANCH}`);
      headEqualsRemotePrHead = localHeadSha === remotePrHeadSha;
      if (!headEqualsRemotePrHead) {
        blockers.push({ code: "LOCAL_HEAD_NOT_PR_HEAD", localHeadSha, remotePrHeadSha });
      }
    } catch (err) {
      blockers.push({ code: "REMOTE_PR_HEAD_FETCH_FAILED", message: String(err.message || err) });
    }
  }

  let originMainSha = null;
  try {
    originMainSha = git("git rev-parse origin/main");
  } catch {
    originMainSha = null;
  }

  const pass = blockers.length === 0 && applyRange.pass && stabilityRange.pass;

  return {
    pass,
    preApplySha,
    productionApplySha,
    verifiedAtHead,
    localHeadSha,
    remotePrHeadSha,
    headEqualsRemotePrHead,
    originMainSha,
    currentBranch: git("git rev-parse --abbrev-ref HEAD"),
    worktreeClean: worktree.clean,
    worktreeDirtyLines: worktree.lines,
    applyRange: applyRange.metrics,
    stabilityRange: stabilityRange.metrics,
    blockers,
    PR_NUMBER,
  };
}

/** @deprecated use verifyHausCapRuntimeVerification */
function verifyCommitRangeCapApply(options = {}) {
  const r = verifyHausCapRuntimeVerification({
    ...options,
    preApplySha: options.preApplySha,
    productionApplySha: options.postApplySha || options.productionApplySha,
    verifiedAtHead: options.verifiedAtHead || options.postApplySha,
  });
  return {
    pass: r.pass,
    preApplySha: r.preApplySha,
    postApplySha: r.productionApplySha,
    ...r.applyRange,
    blockers: r.blockers,
  };
}

module.exports = {
  PR_NUMBER,
  PR_BRANCH,
  DEFAULT_PRE_APPLY_SHA,
  DEFAULT_PRODUCTION_APPLY_SHA,
  RUNTIME_REL,
  CLOSURE_REL,
  DE_FIELD_KEYS,
  createGit,
  loadWordsAtCommit,
  flattenCardFieldChanges,
  productionFileSetSha,
  expectedAuthorizedFiles,
  analyzeProductionApplyRange,
  analyzeProductionStabilityRange,
  verifyHausCapRuntimeVerification,
  verifyCommitRangeCapApply,
  worktreeProductionClean,
  isAncestor,
  listCommitRangeFiles,
};

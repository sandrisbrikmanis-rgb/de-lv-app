#!/usr/bin/env node
"use strict";

const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");
const { ROOT } = require("../audit-common");
const { dataRel } = require("../content-crowdin-bridge/roundtrip");
const { productionA1Rel, wwwA1Rel } = require("./paths");
const { PREAUTHORIZED_CAP_ROWS } = require("./haus-preauthorized-capitalization");

const PR_NUMBER = 842;
const DEFAULT_PRE_APPLY_SHA = "1b3a1839c306f333ba3cc612fa58658e0a991b90";
const DE_FIELD_KEYS = new Set(["de", "de_article", "de_plural"]);

function git(cmd) {
  return execSync(cmd, { cwd: ROOT, encoding: "utf8", maxBuffer: 100 * 1024 * 1024 }).trim();
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

function loadWordsAtCommit(sha, relPath) {
  const content = git(`git show ${sha}:${relPath}`);
  const words = loadArrayDatasetFromSource(content);
  if (!Array.isArray(words)) {
    throw new Error(`NOT_ARRAY_DATASET:${relPath}@${sha}`);
  }
  return words;
}

function flattenCardFieldChanges(beforeWords, afterWords, fileRel) {
  const changes = [];
  const maxLen = Math.max(beforeWords.length, afterWords.length);
  if (beforeWords.length !== afterWords.length) {
    changes.push({
      code: "CARD_COUNT_MISMATCH",
      file: fileRel,
      before: beforeWords.length,
      after: afterWords.length,
    });
    return changes;
  }
  for (let i = 0; i < maxLen; i++) {
    const b = beforeWords[i] || {};
    const a = afterWords[i] || {};
    const keys = new Set([...Object.keys(b), ...Object.keys(a)]);
    for (const key of keys) {
      const bv = b[key];
      const av = a[key];
      if (JSON.stringify(bv) !== JSON.stringify(av)) {
        changes.push({
          file: fileRel,
          cardIndex: i,
          fieldPath: `cards[${i}].${key}`,
          field: key,
          before: bv,
          after: av,
        });
      }
    }
    if (b.study || a.study) {
      const bs = b.study || {};
      const as = a.study || {};
      const skeys = new Set([...Object.keys(bs), ...Object.keys(as)]);
      for (const sk of skeys) {
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

function productionFileSetSha(sha, relPaths) {
  const parts = [...relPaths].sort().map((rel) => `${rel}\n${sha256(git(`git show ${sha}:${rel}`))}`);
  return sha256(parts.join("\n"));
}

function resolveCommitIdentity(options = {}) {
  const blockers = [];
  let preApplySha =
    options.preApplySha !== undefined
      ? options.preApplySha
      : process.env.HAUS_CAP_PRE_APPLY_SHA || DEFAULT_PRE_APPLY_SHA;
  let postApplySha =
    options.postApplySha !== undefined ? options.postApplySha : process.env.HAUS_CAP_POST_APPLY_SHA || git("git rev-parse HEAD");

  if (!preApplySha) blockers.push({ code: "PRE_APPLY_SHA_MISSING" });
  if (!postApplySha) blockers.push({ code: "POST_APPLY_SHA_MISSING" });
  if (preApplySha && postApplySha && preApplySha === postApplySha) {
    blockers.push({ code: "PRE_POST_SHA_IDENTICAL" });
  }

  if (preApplySha) {
    try {
      git(`git cat-file -e ${preApplySha}^{commit}`);
    } catch {
      blockers.push({ code: "PRE_APPLY_SHA_INVALID", sha: preApplySha });
    }
  }
  if (postApplySha) {
    try {
      git(`git cat-file -e ${postApplySha}^{commit}`);
    } catch {
      blockers.push({ code: "POST_APPLY_SHA_INVALID", sha: postApplySha });
    }
  }

  if (blockers.length) {
    return { ok: false, blockers, preApplySha, postApplySha };
  }

  for (const spec of PREAUTHORIZED_CAP_ROWS) {
    const rel = productionA1Rel(spec.language);
    const words = loadWordsAtCommit(preApplySha, rel);
    const lv = words[spec.cardIndex]?.lv;
    if (lv !== spec.current) {
      blockers.push({
        code: "PRE_APPLY_LV_MISMATCH",
        language: spec.language,
        expected: spec.current,
        got: lv,
        sha: preApplySha,
      });
    }
  }

  for (const spec of PREAUTHORIZED_CAP_ROWS) {
    const rel = productionA1Rel(spec.language);
    const words = loadWordsAtCommit(postApplySha, rel);
    const lv = words[spec.cardIndex]?.lv;
    if (lv !== spec.proposed) {
      blockers.push({
        code: "POST_APPLY_LV_MISMATCH",
        language: spec.language,
        expected: spec.proposed,
        got: lv,
        sha: postApplySha,
      });
    }
  }

  return {
    ok: blockers.length === 0,
    blockers,
    preApplySha,
    postApplySha,
    prNumber: PR_NUMBER,
    prHeadSha: postApplySha,
  };
}

function listCommitRangeFiles(preApplySha, postApplySha, pathspec) {
  const out = git(`git diff --name-only ${preApplySha} ${postApplySha} -- ${pathspec}`);
  return out ? out.split("\n").filter(Boolean) : [];
}

function worktreeProductionClean() {
  const out = git("git status --porcelain -- data www/data crowdin data/de");
  return { clean: !out, lines: out ? out.split("\n").filter(Boolean) : [] };
}

function expectedAuthorizedFiles() {
  const files = new Set();
  for (const spec of PREAUTHORIZED_CAP_ROWS) {
    files.add(productionA1Rel(spec.language));
    files.add(wwwA1Rel(spec.language));
  }
  return files;
}

function verifyCommitRangeCapApply(options = {}) {
  const blockers = [];
  const identity = resolveCommitIdentity(options);
  if (!identity.ok) {
    return { pass: false, blockers: identity.blockers, identity };
  }

  const { preApplySha, postApplySha } = identity;
  const worktree = worktreeProductionClean();

  const dataWwwStatus = git(`git diff --name-status ${preApplySha} ${postApplySha} -- data www/data`);
  const dataWwwFiles = listCommitRangeFiles(preApplySha, postApplySha, "data www/data");
  const crowdinFiles = listCommitRangeFiles(preApplySha, postApplySha, "crowdin");
  const deFiles = listCommitRangeFiles(preApplySha, postApplySha, "data/de");

  const allowedFiles = expectedAuthorizedFiles();
  for (const f of dataWwwFiles) {
    if (!allowedFiles.has(f)) {
      blockers.push({ code: "UNAUTHORIZED_PRODUCTION_FILE", file: f });
    }
  }
  for (const f of allowedFiles) {
    if (!dataWwwFiles.includes(f)) {
      blockers.push({ code: "MISSING_EXPECTED_FILE_IN_RANGE", file: f });
    }
  }

  if (crowdinFiles.length) {
    blockers.push({ code: "CROWDIN_CHANGES", files: crowdinFiles });
  }
  if (deFiles.length) {
    blockers.push({ code: "DE_FILE_CHANGES", files: deFiles });
  }

  const allFieldChanges = [];
  let deFieldChanges = 0;
  const authorizedLogical = [];
  const dataFieldChanges = [];
  const wwwFieldChanges = [];

  for (const f of dataWwwFiles) {
    const beforeWords = loadWordsAtCommit(preApplySha, f);
    const afterWords = loadWordsAtCommit(postApplySha, f);
    const fileChanges = flattenCardFieldChanges(beforeWords, afterWords, f);
    for (const ch of fileChanges) {
      if (ch.code === "CARD_COUNT_MISMATCH") {
        blockers.push(ch);
        continue;
      }
      allFieldChanges.push(ch);
      const isDe = DE_FIELD_KEYS.has(ch.field) || String(ch.fieldPath).includes(".de");
      if (isDe) deFieldChanges += 1;

      const spec = PREAUTHORIZED_CAP_ROWS.find(
        (s) => productionA1Rel(s.language) === f || wwwA1Rel(s.language) === f,
      );
      const isData = f.startsWith("data/");
      const isWww = f.startsWith("www/");
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
      } else if (isData) {
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
      } else if (isWww) {
        wwwFieldChanges.push({ language: spec.language, ...ch });
      }
    }
  }

  const uniqueLogical = new Map();
  for (const row of authorizedLogical) {
    uniqueLogical.set(row.language, row);
  }

  const relPaths = [...allowedFiles].sort();
  const productionFileSetShaBefore = productionFileSetSha(preApplySha, relPaths);
  const productionFileSetShaAfter = productionFileSetSha(postApplySha, relPaths);

  let mirrorMismatches = 0;
  for (const spec of PREAUTHORIZED_CAP_ROWS) {
    const dataRelPath = productionA1Rel(spec.language);
    const wwwRelPath = wwwA1Rel(spec.language);
    const d = git(`git show ${postApplySha}:${dataRelPath}`);
    const w = git(`git show ${postApplySha}:${wwwRelPath}`);
    if (sha256(d) !== sha256(w)) {
      mirrorMismatches += 1;
      blockers.push({ code: "MIRROR_MISMATCH", language: spec.language });
    }
  }

  const unauthorizedFieldCount = blockers.filter((b) => b.code === "UNAUTHORIZED_PRODUCTION_FIELD_CHANGE").length;
  const changedProductionLogicalFields = uniqueLogical.size;
  const changedDataFields = dataFieldChanges.length;
  const changedWwwMirrorFields = wwwFieldChanges.length;

  if (changedProductionLogicalFields !== 6) {
    blockers.push({
      code: "LOGICAL_FIELD_COUNT",
      expected: 6,
      got: changedProductionLogicalFields,
    });
  }
  if (changedDataFields !== 6) {
    blockers.push({ code: "DATA_FIELD_COUNT", expected: 6, got: changedDataFields });
  }
  if (changedWwwMirrorFields !== 6) {
    blockers.push({ code: "WWW_FIELD_COUNT", expected: 6, got: changedWwwMirrorFields });
  }
  if (dataWwwFiles.length !== 12) {
    blockers.push({ code: "CHANGED_FILE_COUNT", expected: 12, got: dataWwwFiles.length });
  }
  if (deFieldChanges !== 0) {
    blockers.push({ code: "DE_FIELD_CHANGES", count: deFieldChanges });
  }
  if (unauthorizedFieldCount !== 0 && !blockers.some((b) => b.code === "UNAUTHORIZED_PRODUCTION_FIELD_CHANGE")) {
    blockers.push({ code: "UNAUTHORIZED_FIELD_COUNT", count: unauthorizedFieldCount });
  }

  const pass = blockers.length === 0;

  return {
    pass,
    preApplySha,
    postApplySha,
    PR_NUMBER: PR_NUMBER,
    PR_HEAD_SHA: postApplySha,
    PRODUCTION_FILE_SET_SHA_BEFORE: productionFileSetShaBefore,
    PRODUCTION_FILE_SET_SHA_AFTER: productionFileSetShaAfter,
    worktreeClean: worktree.clean,
    worktreeDirtyLines: worktree.lines,
    changedProductionLogicalFields,
    changedDataFields,
    changedWwwMirrorFields,
    changedFiles: dataWwwFiles.length,
    unauthorizedProductionFieldChanges: unauthorizedFieldCount,
    deFieldChanges,
    crowdinChanges: crowdinFiles.length,
    mirrorMismatches,
    commitRangeNameStatus: dataWwwStatus,
    authorizedFieldChanges: [...uniqueLogical.values()],
    allFieldChanges,
    blockers,
  };
}

module.exports = {
  PR_NUMBER,
  DEFAULT_PRE_APPLY_SHA,
  DE_FIELD_KEYS,
  loadWordsAtCommit,
  flattenCardFieldChanges,
  productionFileSetSha,
  resolveCommitIdentity,
  verifyCommitRangeCapApply,
  worktreeProductionClean,
  expectedAuthorizedFiles,
};

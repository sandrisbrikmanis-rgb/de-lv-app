#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { sha256 } = require("./g2-a1-lrb-consolidation-owner-review-artifacts");
const {
  productionEntrySha256,
  deExampleSequence,
} = require("./g2-a1-lrb-production-atomic-card");
const { validateProductionTargetAliasGate } = require("./g2-a1-lrb-production-target-alias");

function sha256Buffer(buf) {
  return crypto.createHash("sha256").update(buf).digest("hex");
}

function serializeA1WordsFile(words) {
  return `const A1_WORDS = ${JSON.stringify(words, null, 2)};\n\nwindow.A1_WORDS = A1_WORDS;\n`;
}

function loadWordsFromSerialized(content) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(content, ctx);
  if (!ctx.window.A1_WORDS || !Array.isArray(ctx.window.A1_WORDS)) {
    throw new Error("A1_WORDS_SYNTAX_INVALID");
  }
  return ctx.window.A1_WORDS;
}

function parseAuthorizeArgs(argv, env = process.env) {
  const fromArg = (prefix) => {
    const hit = argv.find((a) => a.startsWith(prefix));
    return hit ? hit.slice(prefix.length) : null;
  };
  const legacyHead =
    fromArg("--authorize-apply-sha=") || env.A1_LRB_PRODUCTION_COPY_ONLY_AUTHORIZED_SHA || null;
  return {
    applyHead: fromArg("--authorize-apply-head=") || legacyHead,
    mappingSha: fromArg("--authorize-mapping-sha=") || env.A1_LRB_AUTHORIZE_MAPPING_SHA || null,
    productionCurrentSha:
      fromArg("--authorize-production-current-sha=") ||
      env.A1_LRB_AUTHORIZE_PRODUCTION_CURRENT_SHA ||
      null,
  };
}

function assertLiveAuthorization({ applyHead, mappingSha, productionCurrentSha, actualHead, actualMappingSha, expectedProductionCurrentSha, actualProductionCurrentSha }) {
  const errors = [];
  if (!applyHead || !mappingSha || !productionCurrentSha) {
    errors.push("MISSING_AUTHORIZE_ARGS");
  }
  if (applyHead && actualHead !== applyHead) errors.push("AUTHORIZE_APPLY_HEAD_MISMATCH");
  if (mappingSha && actualMappingSha !== mappingSha) errors.push("AUTHORIZE_MAPPING_SHA_MISMATCH");
  if (productionCurrentSha && productionCurrentSha !== expectedProductionCurrentSha) {
    errors.push("AUTHORIZE_PRODUCTION_CURRENT_SHA_EXPECTED_MISMATCH");
  }
  if (productionCurrentSha && actualProductionCurrentSha !== productionCurrentSha) {
    errors.push("AUTHORIZE_PRODUCTION_CURRENT_SHA_ACTUAL_MISMATCH");
  }
  return errors;
}

function createFileBackups(root, relPaths) {
  const backups = new Map();
  for (const rel of relPaths) {
    const abs = path.join(root, rel);
    const bytes = fs.readFileSync(abs);
    backups.set(rel, { bytes, sha256: sha256Buffer(bytes) });
  }
  return backups;
}

function buildPendingWritesByFile(wordsByDataRel, productionMirrorRelFn) {
  const pendingWritesByFile = new Map();
  for (const [dataRel, words] of wordsByDataRel) {
    const serialized = serializeA1WordsFile(words);
    const plan = {
      words,
      serialized,
      serialized_sha256: sha256(serialized),
    };
    const wwwRel = productionMirrorRelFn(dataRel);
    pendingWritesByFile.set(dataRel, plan);
    pendingWritesByFile.set(wwwRel, {
      words,
      serialized,
      serialized_sha256: plan.serialized_sha256,
    });
  }
  return pendingWritesByFile;
}

function validatePendingWritesByFile(
  pendingWritesByFile,
  { atomicCards, resolveTarget, resolveInitialTarget }
) {
  const rels = [...pendingWritesByFile.keys()];
  const duplicatePaths = rels.length - new Set(rels).size;
  if (duplicatePaths !== 0) {
    return { pass: false, errors: [`duplicate_pending_write_paths:${duplicatePaths}`] };
  }

  const errors = [];
  const aliasGate = validateProductionTargetAliasGate(atomicCards);
  if (!aliasGate.pass) {
    errors.push(...aliasGate.errors);
  }

  const dataRels = rels.filter((r) => r.startsWith("data/"));
  for (const dataRel of dataRels) {
    const wwwRel = dataRel.replace(/^data\//, "www/data/");
    const dataPlan = pendingWritesByFile.get(dataRel);
    const wwwPlan = pendingWritesByFile.get(wwwRel);
    if (!wwwPlan) errors.push(`missing_mirror_plan:${dataRel}`);
    else if (dataPlan.serialized !== wwwPlan.serialized) errors.push(`data_www_serialized_mismatch:${dataRel}`);
  }

  for (const plan of pendingWritesByFile.values()) {
    try {
      loadWordsFromSerialized(plan.serialized);
    } catch (e) {
      errors.push(`serialized_syntax_fail:${e.message}`);
    }
  }

  for (const card of atomicCards) {
    if (card.atomic_status === "BLOCKED") {
      errors.push(`blocked_card:${card.card_key}`);
      continue;
    }
    const resolved = resolveTarget(card.target_language, card.canonical_card_object_id);
    if (!resolved.ok) {
      errors.push(`resolve_fail:${card.card_key}`);
      continue;
    }
    const dataRel = `data/${card.target_language}/a1.js`;
    const plan = pendingWritesByFile.get(dataRel);
    if (!plan) {
      errors.push(`missing_plan:${dataRel}`);
      continue;
    }
    const words = plan.words;
    const liveEntry = words[resolved.index];
    const liveSha = productionEntrySha256(liveEntry);
    if (card.atomic_status === "ATOMIC_READY_NOOP") {
      if (liveSha !== card.production_current_entry_sha256) {
        errors.push(`noop_current_sha_mismatch:${card.card_key}`);
      }
      continue;
    }
    if (liveSha !== card.production_planned_entry_sha256) {
      errors.push(`planned_entry_sha_mismatch:${card.card_key}`);
    }
    if (card.atomic_status === "ATOMIC_READY_APPLY" && resolveInitialTarget) {
      const initialResolved = resolveInitialTarget(card.target_language, card.canonical_card_object_id);
      if (initialResolved.ok) {
        const deBefore = deExampleSequence(initialResolved.entry);
        const deAfter = deExampleSequence(liveEntry);
        if (JSON.stringify(deBefore) !== JSON.stringify(deAfter)) {
          errors.push(`de_sequence_changed:${card.card_key}`);
        }
      }
    }
  }

  return { pass: errors.length === 0, errors, unique_planned_files: rels.length };
}

function rollbackFromBackups(root, backups, hashProductionFileSetFn, langs, expectedFileSetSha) {
  for (const [rel, { bytes, sha256: expectedSha }] of backups) {
    const abs = path.join(root, rel);
    fs.writeFileSync(abs, bytes);
    const actualSha = sha256Buffer(fs.readFileSync(abs));
    if (actualSha !== expectedSha) {
      throw new Error(`ROLLBACK_INTEGRITY_FAILURE:file:${rel}`);
    }
  }
  if (hashProductionFileSetFn && langs && expectedFileSetSha) {
    const after = hashProductionFileSetFn(root, langs);
    if (after.composite_sha256 !== expectedFileSetSha) {
      throw new Error("ROLLBACK_INTEGRITY_FAILURE:file_set");
    }
  }
}

function verifyPostWrite(root, pendingWritesByFile, postWriteContext = {}) {
  const {
    atomicCards = [],
    resolveTargetFromDisk,
    resolveInitialTarget,
    authorizedRelPaths,
    baselineFileShas,
  } = postWriteContext;

  const metrics = {
    post_write_file_sha_mismatches: 0,
    post_write_card_sha_mismatches: 0,
    post_write_data_www_drift: 0,
    post_write_syntax_failures: 0,
    post_write_de_changes: 0,
    unauthorized_changed_files: 0,
  };

  const rels = [...pendingWritesByFile.keys()].sort();
  const authorizedSet = new Set(authorizedRelPaths || rels);

  for (const rel of rels) {
    const abs = path.join(root, rel);
    const bytes = fs.readFileSync(abs);
    const plan = pendingWritesByFile.get(rel);
    if (sha256Buffer(bytes) !== plan.serialized_sha256) {
      metrics.post_write_file_sha_mismatches += 1;
    }
    try {
      loadWordsFromSerialized(bytes.toString("utf8"));
    } catch {
      metrics.post_write_syntax_failures += 1;
    }
  }

  const dataRels = rels.filter((r) => r.startsWith("data/"));
  for (const dataRel of dataRels) {
    const wwwRel = dataRel.replace(/^data\//, "www/data/");
    const dataBytes = fs.readFileSync(path.join(root, dataRel));
    const wwwBytes = fs.readFileSync(path.join(root, wwwRel));
    if (!dataBytes.equals(wwwBytes)) {
      metrics.post_write_data_www_drift += 1;
    }
  }

  if (atomicCards.length && resolveTargetFromDisk) {
    for (const card of atomicCards) {
      if (card.atomic_status === "BLOCKED") continue;
      let resolved;
      try {
        resolved = resolveTargetFromDisk(card.target_language, card.canonical_card_object_id);
      } catch {
        metrics.post_write_card_sha_mismatches += 1;
        continue;
      }
      if (!resolved.ok) {
        metrics.post_write_card_sha_mismatches += 1;
        continue;
      }
      const liveSha = productionEntrySha256(resolved.entry);
      if (card.atomic_status === "ATOMIC_READY_NOOP") {
        if (liveSha !== card.production_current_entry_sha256) {
          metrics.post_write_card_sha_mismatches += 1;
        }
      } else if (liveSha !== card.production_planned_entry_sha256) {
        metrics.post_write_card_sha_mismatches += 1;
      }
      if (card.atomic_status === "ATOMIC_READY_APPLY" && resolveInitialTarget) {
        const initialResolved = resolveInitialTarget(card.target_language, card.canonical_card_object_id);
        if (initialResolved.ok) {
          const deBefore = deExampleSequence(initialResolved.entry);
          const deAfter = deExampleSequence(resolved.entry);
          if (JSON.stringify(deBefore) !== JSON.stringify(deAfter)) {
            metrics.post_write_de_changes += 1;
          }
        }
      }
    }
  }

  if (baselineFileShas && baselineFileShas.size) {
    for (const [rel, beforeSha] of baselineFileShas) {
      const abs = path.join(root, rel);
      if (!fs.existsSync(abs)) continue;
      const afterSha = sha256Buffer(fs.readFileSync(abs));
      if (afterSha !== beforeSha && !authorizedSet.has(rel)) {
        metrics.unauthorized_changed_files += 1;
      }
    }
  }

  const pass =
    metrics.post_write_file_sha_mismatches === 0 &&
    metrics.post_write_card_sha_mismatches === 0 &&
    metrics.post_write_data_www_drift === 0 &&
    metrics.post_write_syntax_failures === 0 &&
    metrics.post_write_de_changes === 0 &&
    metrics.unauthorized_changed_files === 0;

  return { pass, ...metrics };
}

function applyPostWriteFault(root, inject) {
  if (!inject || !inject.type) return;
  const rel = inject.rel;
  const abs = rel ? path.join(root, rel) : null;
  switch (inject.type) {
    case "wrong_bytes":
      fs.writeFileSync(abs, Buffer.from(inject.payload || "CORRUPT_POST_WRITE_BYTES\n"));
      break;
    case "data_www_drift": {
      const wwwRel = inject.wwwRel || rel.replace(/^data\//, "www/data/");
      const wwwAbs = path.join(root, wwwRel);
      fs.appendFileSync(wwwAbs, " ");
      break;
    }
    case "bad_syntax":
      fs.writeFileSync(abs, "const A1_WORDS = [{ broken");
      break;
    case "de_drift": {
      const content = fs.readFileSync(abs, "utf8");
      const words = loadWordsFromSerialized(content);
      if (words[0]?.study?.examples?.[0]) {
        words[0].study.examples[0].de = `${words[0].study.examples[0].de}-POST-WRITE-DRIFT`;
      }
      const serialized = serializeA1WordsFile(words);
      fs.writeFileSync(abs, serialized);
      const wwwRel = rel.replace(/^data\//, "www/data/");
      fs.writeFileSync(path.join(root, wwwRel), serialized);
      break;
    }
    case "card_entry_drift": {
      const content = fs.readFileSync(abs, "utf8");
      const words = loadWordsFromSerialized(content);
      if (words[0]) words[0].lv = `${words[0].lv}-CARD-DRIFT`;
      fs.writeFileSync(abs, serializeA1WordsFile(words));
      const wwwRel = rel.replace(/^data\//, "www/data/");
      fs.writeFileSync(path.join(root, wwwRel), serializeA1WordsFile(words));
      break;
    }
    default:
      break;
  }
}

function renamePendingWritesAtomic(root, pendingWritesByFile, fault = null) {
  const rels = [...pendingWritesByFile.keys()].sort();
  const tmpPaths = [];
  let renameCount = 0;
  for (const rel of rels) {
    const plan = pendingWritesByFile.get(rel);
    const abs = path.join(root, rel);
    const dir = path.dirname(abs);
    fs.mkdirSync(dir, { recursive: true });
    const tmp = path.join(dir, `.${path.basename(abs)}.txn-${process.pid}-${Date.now()}-${renameCount}.tmp`);
    tmpPaths.push({ rel, abs, tmp });

    if (fault?.fail === "before_first_rename" && renameCount === 0) {
      throw new Error(fault.message || "INJECT_FAIL_BEFORE_FIRST_RENAME");
    }
    if (fault?.fail === "before_last_rename" && renameCount === rels.length - 1) {
      throw new Error(fault.message || "INJECT_FAIL_BEFORE_LAST_RENAME");
    }
    if (fault?.failAfterRename != null && renameCount === fault.failAfterRename) {
      throw new Error(fault.message || `INJECT_FAIL_AFTER_RENAME_${renameCount}`);
    }
    if (fault?.failOnRel && fault.failOnRel === rel) {
      throw new Error(fault.message || `INJECT_FAIL_ON_${rel}`);
    }

    fs.writeFileSync(tmp, plan.serialized);
    loadWordsFromSerialized(plan.serialized);
    fs.renameSync(tmp, abs);
    renameCount += 1;

    if (fault?.fail === "after_first_rename" && renameCount === 1) {
      throw new Error(fault.message || "INJECT_FAIL_AFTER_FIRST_RENAME");
    }
    if (fault?.fail === "mid_write" && renameCount === Math.floor(rels.length / 2)) {
      throw new Error(fault.message || "INJECT_FAIL_MID_WRITE");
    }
  }
  return { renamed: renameCount, tmpPaths };
}

function runProductionCopyOnlyTransaction(root, pendingWritesByFile, backups, options = {}) {
  const {
    fault = null,
    postWriteContext = {},
    hashProductionFileSetFn = null,
    langs = null,
    expectedFileSetShaBefore = null,
  } = options;

  let tmpPaths = [];
  try {
    const renameResult = renamePendingWritesAtomic(root, pendingWritesByFile, fault);
    tmpPaths = renameResult.tmpPaths;

    if (fault?.postWriteInject) {
      applyPostWriteFault(root, fault.postWriteInject);
    }

    const postWrite = verifyPostWrite(root, pendingWritesByFile, postWriteContext);
    if (!postWrite.pass) {
      rollbackFromBackups(root, backups, hashProductionFileSetFn, langs, expectedFileSetShaBefore);
      const err = new Error("POST_WRITE_VERIFICATION_FAILED_ROLLED_BACK");
      err.postWriteMetrics = postWrite;
      throw err;
    }

    return { renamed: renameResult.renamed, postWrite };
  } catch (err) {
    for (const { tmp } of tmpPaths) {
      if (fs.existsSync(tmp)) fs.unlinkSync(tmp);
    }
    if (err.message !== "POST_WRITE_VERIFICATION_FAILED_ROLLED_BACK") {
      rollbackFromBackups(root, backups);
    }
    throw err;
  }
}

function commitPlannedWritesAtomic(root, pendingWritesByFile, backups, fault = null, options = {}) {
  return runProductionCopyOnlyTransaction(root, pendingWritesByFile, backups, {
    fault,
    postWriteContext: options.postWriteContext || {},
    hashProductionFileSetFn: options.hashProductionFileSetFn,
    langs: options.langs,
    expectedFileSetShaBefore: options.expectedFileSetShaBefore,
  });
}

function hashProductionFileSetInRoot(root, langs) {
  const files = [];
  for (const lang of [...langs].sort()) {
    for (const rel of [`data/${lang}/a1.js`, `www/data/${lang}/a1.js`]) {
      const abs = path.join(root, rel);
      if (fs.existsSync(abs)) {
        files.push({ path: rel, sha256: sha256Buffer(fs.readFileSync(abs)) });
      }
    }
  }
  const composite = sha256(JSON.stringify(files));
  return { files, composite_sha256: composite };
}

module.exports = {
  sha256Buffer,
  serializeA1WordsFile,
  loadWordsFromSerialized,
  parseAuthorizeArgs,
  assertLiveAuthorization,
  createFileBackups,
  buildPendingWritesByFile,
  validatePendingWritesByFile,
  verifyPostWrite,
  applyPostWriteFault,
  rollbackFromBackups,
  renamePendingWritesAtomic,
  runProductionCopyOnlyTransaction,
  commitPlannedWritesAtomic,
  hashProductionFileSetInRoot,
};

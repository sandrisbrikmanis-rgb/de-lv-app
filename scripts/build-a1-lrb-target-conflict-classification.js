#!/usr/bin/env node
"use strict";

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const os = require("os");
const crypto = require("crypto");
const { ROOT } = require("./lib/audit-common");
const {
  normalizeSegment: normalizeSegmentDoc,
  splitFieldPath: splitFieldPathDoc,
} = require("./lib/content-crowdin-bridge/g2-a1-audit-key-resolver");

const ORIGIN_MAIN = "origin/main";
const STREAM_HEADS = {
  PC1: "origin/cursor/lrb-032-owner-authorization-6530",
  PC2_aa66: "origin/cursor/lrb-072-owner-authorization-aa66",
  PC2_pc2_parallel: "origin/cursor/lrb-103-owner-review-pc2",
  PC2_pc2_3db2_tip: "origin/cursor/lrb-102-owner-review-pc2-3db2",
};

function git(cmd) {
  try {
    return execSync(cmd, {
      cwd: ROOT,
      encoding: "utf8",
      maxBuffer: 128 * 1024 * 1024,
      stdio: ["pipe", "pipe", "pipe"],
    }).trim();
  } catch {
    return null;
  }
}

function sha256(buf) {
  return crypto.createHash("sha256").update(buf).digest("hex");
}

function batchId(n) {
  return `LRB-${String(n).padStart(3, "0")}`;
}

function batchNum(batch) {
  return parseInt(String(batch).replace("LRB-", ""), 10);
}

function parseCsvLine(line) {
  const out = [];
  let cur = "";
  let inQ = false;
  for (let i = 0; i < line.length; i += 1) {
    const c = line[i];
    if (inQ) {
      if (c === '"' && line[i + 1] === '"') {
        cur += '"';
        i += 1;
      } else if (c === '"') inQ = false;
      else cur += c;
    } else if (c === '"') inQ = true;
    else if (c === ",") {
      out.push(cur);
      cur = "";
    } else cur += c;
  }
  out.push(cur);
  return out;
}

function loadCsvText(text) {
  const lines = text.split(/\r?\n/).filter((l) => l.length > 0);
  if (!lines.length) return [];
  const header = parseCsvLine(lines[0]);
  return lines.slice(1).map((line) => {
    const cols = parseCsvLine(line);
    const row = {};
    header.forEach((h, i) => {
      row[h] = cols[i] ?? "";
    });
    return row;
  });
}

const normalizeSegment = normalizeSegmentDoc;
const splitFieldPath = splitFieldPathDoc;

function canonicalCardId(raw) {
  return String(raw || "").split("|")[0].trim();
}

function canonicalFieldPath(raw) {
  const parts = splitFieldPath(raw).map(normalizeSegment).filter(Boolean);
  return parts.join("; ");
}

function canonicalTargetKey(lang, card, fieldPath) {
  return `${String(lang).trim()}|${canonicalCardId(card)}|${canonicalFieldPath(fieldPath)}`;
}

function rawTargetKey(lang, card, fieldPath) {
  return `${String(lang).trim()}|${String(card).split("|")[0]}|${String(fieldPath).trim()}`;
}

function branchesForBatch(n) {
  const nn = String(n).padStart(3, "0");
  const re = new RegExp(`cursor/lrb-${nn}-`, "i");
  const lines = (git("git branch -r") || "").split("\n");
  const found = lines
    .map((l) => l.trim())
    .filter((l) => re.test(l))
    .map((l) => (l.startsWith("origin/") ? l : `origin/${l}`));
  const fallback = branchCandidatesFallback(n);
  return [...new Set([...found, ...fallback])].filter((b) => git(`git rev-parse ${b}`));
}

function branchCandidatesFallback(n) {
  const nn = String(n).padStart(3, "0");
  const list = [];
  if (n >= 1 && n <= 31) {
    list.push(
      `origin/cursor/lrb-${nn}-owner-authorization-bdda`,
      `origin/cursor/lrb-${nn}-gala-repair-bdda`
    );
  }
  if (n === 32) list.push("origin/cursor/lrb-032-owner-authorization-6530");
  if (n >= 33 && n <= 72) list.push(`origin/cursor/lrb-${nn}-owner-authorization-aa66`);
  if (n >= 73 && n <= 102) {
    list.push(
      `origin/cursor/lrb-${nn}-owner-authorization-ed35`,
      `origin/cursor/lrb-${nn}-owner-review-pc2-3db2`
    );
  }
  if (n === 103) {
    list.push(
      "origin/cursor/lrb-103-owner-review-pc2",
      "origin/cursor/lrb-103-owner-authorization-ed35"
    );
  }
  return list;
}

function gitShow(ref, filePath) {
  return git(`git show ${ref}:${filePath}`);
}

function fileExistsAt(ref, filePath) {
  return git(`git cat-file -e ${ref}:${filePath} 2>/dev/null && echo yes`) === "yes";
}

function parseJsonAt(ref, filePath) {
  const raw = gitShow(ref, filePath);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function introCommit(ref, repoPath) {
  return git(`git log -1 --format=%H ${git(`git rev-parse ${ref}`)} -- ${repoPath}`);
}

function galaProofPath(batch) {
  return `reports/g2-a1-owner/batches-reviewed/${batch}-linguistic-gala-pass-proof.json`;
}

function scoreGalaClosed(ref, batch) {
  const gala = parseJsonAt(ref, galaProofPath(batch));
  if (gala?.verdict?.includes("PASS") || gala?.gala_pass_recorded) return 100;
  const auth = parseJsonAt(
    ref,
    `reports/g2-a1-owner/batches-reviewed/${batch}-owner-authorization-proof.json`
  );
  if (auth?.linguisticVerdict?.includes("PASS")) return 90;
  if (auth?.galaPassAt || /GALA PASS/i.test(String(auth?.note || ""))) return 85;
  const residual = parseJsonAt(
    ref,
    `reports/g2-a1-owner/batches-reviewed/${batch}-residual-wrong-language-proof.json`
  );
  if (residual?.verdict?.includes("PASS")) return 80;
  const topMsg = git(`git log -1 --format=%s ${ref}`);
  if (topMsg && new RegExp(`${batch}.*GALA PASS`, "i").test(topMsg)) return 75;
  return 0;
}

function resolveGalaRef(n) {
  const batch = batchId(n);
  const branches = branchesForBatch(n);
  let best = null;
  let bestScore = -1;
  for (const b of branches) {
    const score = scoreGalaClosed(b, batch);
    const prefer =
      (b.includes("owner-review-pc2") ? 3 : 0) +
      (b.includes("owner-authorization") ? 2 : 0) +
      (b.includes("gala-repair") ? 1 : 0);
    if (score > bestScore || (score === bestScore && prefer > (best?.prefer || 0))) {
      bestScore = score;
      best = { branch: b, prefer, score };
    }
  }
  if (!best || bestScore <= 0) {
    for (const b of branches) {
      return { branch: b, head_sha: git(`git rev-parse ${b}`), gala_score: 0 };
    }
    return null;
  }
  return {
    branch: best.branch,
    head_sha: git(`git rev-parse ${best.branch}`),
    gala_score: best.score,
  };
}

function pcStreamFor(n) {
  if (n <= 32) return "PC1";
  return "PC2";
}

function pcSubstream(ref) {
  if (ref.includes("pc2-3db2")) return "pc2-3db2";
  if (ref.includes("aa66")) return "aa66";
  if (ref.includes("6530")) return "6530";
  if (ref.includes("ed35")) return "ed35";
  return "bdda";
}

function resolveGalaPassCommit(ref, batch) {
  const authPath = `reports/g2-a1-owner/batches-reviewed/${batch}-owner-authorization-proof.json`;
  const galaPath = galaProofPath(batch);
  const authIntro = fileExistsAt(ref, authPath) ? introCommit(ref, authPath) : null;
  const galaIntro = fileExistsAt(ref, galaPath) ? introCommit(ref, galaPath) : null;
  const commit = authIntro || galaIntro || git(`git rev-parse ${ref}`);
  const time = commit ? git(`git log -1 --format=%cI ${commit}`) : null;
  return { commit, time };
}

function isAncestor(ancestor, descendant) {
  if (!ancestor || !descendant) return false;
  return git(`git merge-base --is-ancestor ${ancestor} ${descendant} 2>/dev/null && echo yes`) === "yes";
}

function stableStringifyValue(v) {
  if (v == null) return "";
  return String(v).trim();
}

function effectiveOwnerNew(row) {
  const on = stableStringifyValue(row.owner_new);
  if (on) return on;
  const pc = stableStringifyValue(row.production_current);
  if (pc) return pc;
  return stableStringifyValue(row.discovery_current);
}

function buildOwnerNewFromCard(card, fieldPath) {
  if (!card || typeof card !== "object") return "";
  const segments = splitFieldPath(fieldPath).map(normalizeSegment);
  if (!segments.length) return stableStringifyValue(card.lv);
  const onlyLv =
    segments.length === 1 &&
    (segments[0] === "native" || segments[0] === "lv" || segments[0] === "study.translation");
  if (onlyLv && segments[0] !== "study.translation") {
    return stableStringifyValue(card.lv);
  }
  const out = {};
  const study = card.study || {};
  for (const seg of segments) {
    if (seg === "native" || seg === "lv") out.lv = card.lv ?? "";
    else if (seg === "study.translation") out["study.translation"] = study.translation ?? "";
    else if (seg === "study.explanation") out["study.explanation"] = JSON.stringify(study.explanation ?? []);
    else if (seg === "study.examples") out["study.examples"] = JSON.stringify(study.examples ?? []);
    else if (seg === "study.comparison") out["study.comparison"] = JSON.stringify(study.comparison ?? []);
    else if (seg === "study.tip") out["study.tip"] = JSON.stringify(study.tip ?? "");
    else if (seg === "study.important") out["study.important"] = JSON.stringify(study.important ?? []);
    else if (seg === "study") {
      out.lv = card.lv ?? "";
      out["study.translation"] = study.translation ?? "";
      out["study.explanation"] = JSON.stringify(study.explanation ?? []);
      out["study.examples"] = JSON.stringify(study.examples ?? []);
      out["study.comparison"] = JSON.stringify(study.comparison ?? []);
      out["study.tip"] = JSON.stringify(study.tip ?? "");
      out["study.important"] = JSON.stringify(study.important ?? []);
    }
  }
  return JSON.stringify(out);
}

function rowsFromDecisionsJson(ref, batch, galaPassCommit, sourceMeta) {
  const rel = `scripts/data/g2-a1-owner-pending/${batch}-decisions.json`;
  const raw = gitShow(ref, rel);
  if (!raw) return null;
  let data;
  try {
    data = JSON.parse(raw);
  } catch {
    return null;
  }
  const list = Array.isArray(data) ? data : data.rows || data.decisions || [];
  if (!Array.isArray(list) || !list.length) return null;
  const rows = list.map((r) => ({
    languages: r.languages || r.lang,
    card_object_id: r.card_object_id || r.cardId,
    field_path: r.field_path || r.fieldPath,
    owner_new: r.owner_new ?? r.ownerNew ?? "",
    discovery_current: r.discovery_current ?? r.discoveryCurrent ?? "",
    production_current: r.production_current ?? r.productionCurrent ?? "",
    owner_status: r.owner_status || r.ownerStatus || "",
  }));
  return {
    rows,
    source: {
      ...sourceMeta,
      file_path: rel,
      file_sha256: sha256(raw),
      gala_pass_commit_sha: galaPassCommit,
      extraction_method: "decisions_json_at_gala_pass",
    },
  };
}

function rowsFromGalaCardsAndInput(ref, batch, galaPassCommit) {
  const inputPath = `reports/g2-a1-owner/batches-pending/${batch}-input.csv`;
  const inputRaw = gitShow(ref, inputPath);
  if (!inputRaw) return null;
  const inputRows = loadCsvText(inputRaw);
  const overridesPath = `reports/g2-a1-owner/batches-owner-review/${batch}/${batch}-owner-approved-overrides.json`;
  const galaCardsPath = `reports/g2-a1-owner/batches-owner-review/${batch}/${batch}-gala-cards.json`;
  const overrides = parseJsonAt(ref, overridesPath);
  const galaCards = parseJsonAt(ref, galaCardsPath);
  const overrideByCard = new Map();
  for (const c of overrides?.cards || []) {
    overrideByCard.set(String(c.cardId), c);
  }
  const galaByCard = new Map();
  for (const c of galaCards?.cards || []) {
    galaByCard.set(`${c.lang}|${c.cardId}`, c);
  }
  const rows = [];
  for (const inp of inputRows) {
    const cardId = inp.card_object_id;
    const lang = inp.languages;
    const ov = overrideByCard.get(cardId);
    const gc = galaByCard.get(`${lang}|${cardId}`);
    let ownerNew = effectiveOwnerNew(inp);
    if (!ownerNew && ov?.new) ownerNew = buildOwnerNewFromCard(ov.new, inp.field_path);
    if (!ownerNew && gc?.currentGalaCard) {
      ownerNew = buildOwnerNewFromCard(gc.currentGalaCard, inp.field_path);
    }
    rows.push({
      languages: lang,
      card_object_id: cardId,
      field_path: inp.field_path,
      owner_new: ownerNew,
      discovery_current: inp.discovery_current,
      production_current: inp.production_current,
      owner_status: ov?.status || gc?.ownerStatus || inp.owner_status,
    });
  }
  const srcFile = fileExistsAt(ref, overridesPath) ? overridesPath : galaCardsPath;
  const srcRaw = gitShow(ref, srcFile);
  return {
    rows,
    source: {
      file_path: srcFile,
      file_sha256: srcRaw ? sha256(srcRaw) : null,
      gala_pass_commit_sha: galaPassCommit,
      extraction_method: "gala_cards_and_input_at_gala_pass",
      input_path: inputPath,
      input_sha256: sha256(inputRaw),
    },
  };
}

function extractBatchDecisions(n, resolved) {
  const batch = batchId(n);
  const ref = resolved.branch;
  const { commit: galaPassCommit, time: galaPassTime } = resolveGalaPassCommit(ref, batch);
  const csvPath = `reports/g2-a1-owner/batches-reviewed/${batch}-decisions.csv`;
  const csvRaw = gitShow(ref, csvPath);
  if (csvRaw) {
    return {
      rows: loadCsvText(csvRaw),
      source: {
        file_path: csvPath,
        file_sha256: sha256(csvRaw),
        commit_sha: introCommit(ref, csvPath) || galaPassCommit,
        gala_pass_commit_sha: galaPassCommit,
        extraction_method: "decisions_csv_at_gala_pass",
      },
      galaPassCommit,
      galaPassTime,
      ref,
      branch: ref.replace(/^origin\//, ""),
    };
  }
  const decJson = rowsFromDecisionsJson(ref, batch, galaPassCommit, {
    commit_sha: introCommit(ref, `scripts/data/g2-a1-owner-pending/${batch}-decisions.json`),
  });
  if (decJson?.rows?.length) {
    return { ...decJson, galaPassCommit, galaPassTime, ref, branch: ref.replace(/^origin\//, "") };
  }
  const ownerDecisionsPath = `reports/g2-a1-owner/batches-owner-review/${batch}/${batch}-owner-decisions.md`;
  if (fileExistsAt(ref, ownerDecisionsPath)) {
    const gala = rowsFromGalaCardsAndInput(ref, batch, galaPassCommit);
    if (gala?.rows?.length) {
      gala.source.owner_decisions_md = ownerDecisionsPath;
      return { ...gala, galaPassCommit, galaPassTime, ref, branch: ref.replace(/^origin\//, "") };
    }
  }
  const galaOnly = rowsFromGalaCardsAndInput(ref, batch, galaPassCommit);
  if (galaOnly?.rows?.length) {
    return { ...galaOnly, galaPassCommit, galaPassTime, ref, branch: ref.replace(/^origin\//, "") };
  }
  const galaProof = parseJsonAt(ref, galaProofPath(batch));
  if (galaProof?.decisions_sha256) {
    const mappingPath = `scripts/data/g2-a1-owner-pending/${batch}-decisions.json`;
    const mapRaw = gitShow(ref, mappingPath);
    if (mapRaw && sha256(mapRaw) === galaProof.decisions_sha256) {
      const j = rowsFromDecisionsJson(ref, batch, galaPassCommit, {
        commit_sha: introCommit(ref, mappingPath),
      });
      if (j) {
        j.source.extraction_method = "gala_proof_mapping_sha";
        return { ...j, galaPassCommit, galaPassTime, ref, branch: ref.replace(/^origin\//, "") };
      }
    }
  }
  return {
    rows: null,
    source: {
      file_path: null,
      file_sha256: null,
      commit_sha: null,
      gala_pass_commit_sha: galaPassCommit,
      extraction_method: "INSUFFICIENT_DECISION_SOURCE",
    },
    galaPassCommit,
    galaPassTime,
    ref,
    branch: ref.replace(/^origin\//, ""),
  };
}

function classifyGroup(versions, correctionBatches) {
  const batches = [...new Set(versions.map((v) => v.batch_id))];
  const insufficient = versions.some(
    (v) => v.extraction_method === "INSUFFICIENT_DECISION_SOURCE" || !v.owner_new_sha256
  );
  if (insufficient) return "INSUFFICIENT_DECISION_SOURCE";

  const uniqueShas = [...new Set(versions.map((v) => v.owner_new_sha256))];
  if (uniqueShas.length === 1) {
    const rawKeys = [...new Set(versions.map((v) => v.raw_target_key))];
    const canonKeys = [...new Set(versions.map((v) => v.canonical_target_key))];
    if (rawKeys.length > 1 && canonKeys.length === 1) return "CANONICAL_ALIAS_DUPLICATE";
    return "IDENTICAL_FINAL_VALUE";
  }

  if (batches.length === 1 && versions.length > 1) {
    return "CORRECTION_HISTORY_ONLY";
  }
  if (batches.length === 1 && correctionBatches.has(batches[0])) {
    return "CORRECTION_HISTORY_ONLY";
  }

  const sorted = [...versions].sort((a, b) => batchNum(a.batch_id) - batchNum(b.batch_id));
  let supersessionChain = true;
  for (let i = 0; i < sorted.length - 1; i += 1) {
    const earlier = sorted[i];
    const later = sorted[i + 1];
    if (earlier.owner_new_sha256 === later.owner_new_sha256) continue;
    const ancestry =
      isAncestor(earlier.gala_pass_commit_sha, later.gala_pass_commit_sha) ||
      isAncestor(earlier.gala_pass_commit_sha, git(`git rev-parse ${later.branch_ref}`));
    const inputMatches =
      stableStringifyValue(later.input_current) === stableStringifyValue(earlier.owner_new) ||
      stableStringifyValue(later.production_current) === stableStringifyValue(earlier.owner_new);
    if (!ancestry && !inputMatches) {
      supersessionChain = false;
      break;
    }
  }
  if (supersessionChain) return "PROVEN_SEQUENTIAL_SUPERSESSION";

  const rawKeys = [...new Set(versions.map((v) => v.raw_target_key))];
  const canonKeys = [...new Set(versions.map((v) => v.canonical_target_key))];
  if (rawKeys.length > 1 && canonKeys.length === 1 && uniqueShas.length > 1) {
    return "CANONICAL_ALIAS_DUPLICATE";
  }

  return "INDEPENDENT_OWNER_CONFLICT";
}

function main() {
  const batchSources = {};
  const versionsByCanonical = new Map();
  const correctionBatches = new Set();
  let sourcesWithVerifiedSha = 0;
  const coveredLrb = new Set();

  for (let n = 1; n <= 103; n += 1) {
    const batch = batchId(n);
    const resolved = resolveGalaRef(n);
    if (!resolved?.branch) continue;
    coveredLrb.add(batch);
    const extracted = extractBatchDecisions(n, resolved);
    batchSources[batch] = extracted.source;

    if (extracted.source?.file_sha256 && extracted.source.extraction_method !== "INSUFFICIENT_DECISION_SOURCE") {
      sourcesWithVerifiedSha += 1;
    }

    const galaProof = parseJsonAt(resolved.branch, galaProofPath(batch));
    const decJsonPath = `scripts/data/g2-a1-owner-pending/${batch}-decisions.json`;
    const decRaw = gitShow(resolved.branch, decJsonPath);
    const decisionSha = decRaw ? sha256(decRaw) : null;
    if (galaProof?.decisions_sha256 && decisionSha && galaProof.decisions_sha256 !== decisionSha) {
      correctionBatches.add(batch);
    }

    if (!extracted.rows) continue;
    for (const row of extracted.rows) {
      const ownerNew = effectiveOwnerNew(row);
      const canon = canonicalTargetKey(row.languages, row.card_object_id, row.field_path);
      const rawKey = rawTargetKey(row.languages, row.card_object_id, row.field_path);
      const version = {
        batch_id: batch,
        pc_stream: pcStreamFor(n),
        pc_substream: pcSubstream(resolved.branch),
        branch: extracted.branch,
        branch_ref: resolved.branch,
        target_language: String(row.languages).trim(),
        card_object_id: String(row.card_object_id).split("|")[0],
        card_object_id_raw: row.card_object_id,
        field_path: row.field_path,
        canonical_field_path: canonicalFieldPath(row.field_path),
        canonical_target_key: canon,
        raw_target_key: rawKey,
        input_current: row.discovery_current,
        production_current: row.production_current,
        owner_new: ownerNew,
        owner_new_sha256: ownerNew ? sha256(ownerNew) : null,
        gala_pass_commit_sha: extracted.galaPassCommit,
        gala_pass_commit_time: extracted.galaPassTime,
        mapping_decisions_sha256: decisionSha,
        extraction_method: extracted.source.extraction_method,
        decision_source: extracted.source,
        later_input_matches_earlier_owner_new: null,
      };
      if (!versionsByCanonical.has(canon)) versionsByCanonical.set(canon, []);
      versionsByCanonical.get(canon).push(version);
    }
  }

  for (const [, versions] of versionsByCanonical) {
    const sorted = [...versions].sort((a, b) => batchNum(a.batch_id) - batchNum(b.batch_id));
    for (let i = 0; i < sorted.length; i += 1) {
      for (let j = i + 1; j < sorted.length; j += 1) {
        const earlier = sorted[i];
        const later = sorted[j];
        const match =
          stableStringifyValue(later.input_current) === stableStringifyValue(earlier.owner_new) ||
          stableStringifyValue(later.production_current) === stableStringifyValue(earlier.owner_new);
        if (match) later.later_input_matches_earlier_owner_new = earlier.batch_id;
      }
    }
  }

  const repeatedTargets = [];
  const classifications = [];
  const unresolved = [];

  const counts = {
    IDENTICAL_FINAL_VALUE: 0,
    PROVEN_SEQUENTIAL_SUPERSESSION: 0,
    CORRECTION_HISTORY_ONLY: 0,
    CANONICAL_ALIAS_DUPLICATE: 0,
    INDEPENDENT_OWNER_CONFLICT: 0,
    INSUFFICIENT_DECISION_SOURCE: 0,
  };

  for (const [canonicalKey, versions] of versionsByCanonical) {
    const batchSet = new Set(versions.map((v) => v.batch_id));
    if (batchSet.size < 2) continue;

    const classification = classifyGroup(versions, correctionBatches);
    counts[classification] += 1;

    const ancestryNotes = versions.map((v) => ({
      batch_id: v.batch_id,
      gala_pass_commit_sha: v.gala_pass_commit_sha,
      is_ancestor_of_later: null,
    }));

    const entry = {
      canonical_target_key: canonicalKey,
      target_language: versions[0].target_language,
      canonical_card_object_id: versions[0].card_object_id,
      canonical_field_path: versions[0].canonical_field_path,
      classification,
      versions: versions.map((v) => ({
        batch_id: v.batch_id,
        pc_stream: v.pc_stream,
        pc_substream: v.pc_substream,
        branch: v.branch,
        input_current: v.input_current,
        production_current: v.production_current,
        owner_new: v.owner_new,
        owner_new_sha256: v.owner_new_sha256,
        gala_pass_commit_sha: v.gala_pass_commit_sha,
        gala_pass_commit_time: v.gala_pass_commit_time,
        field_path_raw: v.field_path,
        raw_target_key: v.raw_target_key,
        ancestry_vs_other_commits: versions
          .filter((o) => o.batch_id !== v.batch_id)
          .map((o) => ({
            other_batch: o.batch_id,
            other_commit: o.gala_pass_commit_sha,
            is_ancestor: isAncestor(v.gala_pass_commit_sha, o.gala_pass_commit_sha),
            is_descendant: isAncestor(o.gala_pass_commit_sha, v.gala_pass_commit_sha),
          })),
        mapping_decisions_sha256: v.mapping_decisions_sha256,
        later_input_matches_earlier_owner_new_from: v.later_input_matches_earlier_owner_new,
        decision_source: v.decision_source,
      })),
    };
    classifications.push(entry);
    repeatedTargets.push({ canonical_target_key: canonicalKey, version_count: versions.length, batches: [...batchSet].sort() });

    if (classification === "INDEPENDENT_OWNER_CONFLICT" || classification === "INSUFFICIENT_DECISION_SOURCE") {
      unresolved.push({
        ...entry,
        distinct_gala_pass_values: [...new Set(versions.map((v) => v.owner_new))],
        distinct_gala_pass_value_shas: [...new Set(versions.map((v) => v.owner_new_sha256))],
      });
    }
  }

  const totalRepeated = classifications.length;
  const unresolvedCount = unresolved.length;
  const allCovered = coveredLrb.size === 103;
  const pass =
    allCovered &&
    unresolvedCount === 0 &&
    counts.INDEPENDENT_OWNER_CONFLICT === 0 &&
    counts.INSUFFICIENT_DECISION_SOURCE === 0;

  const finalClassification = pass
    ? "A1_LRB_TARGET_CONFLICT_CLASSIFICATION_PASS"
    : "A1_LRB_TARGET_CONFLICT_CLASSIFICATION_BLOCKED";
  const nextAction = pass ? "CREATE_CONSOLIDATION_BRANCH" : "OWNER_RESOLVE_EXACT_LIST";

  const outDir = path.join(ROOT, "reports/g2-a1-owner/consolidation");
  let inventoryPairwiseConflicts = null;
  const invConfPath = path.join(outDir, "A1-LRB-ALL-CONFLICTS.json");
  if (fs.existsSync(invConfPath)) {
    try {
      const invConf = JSON.parse(fs.readFileSync(invConfPath, "utf8"));
      inventoryPairwiseConflicts = invConf.filter((c) => c.type === "GALA_TARGET_CONFLICT").length;
    } catch {
      inventoryPairwiseConflicts = null;
    }
  }

  const summary = {
    generated_at: new Date().toISOString(),
    classification: finalClassification,
    next_action: nextAction,
    inventory_pairwise_gala_target_conflicts_csv_only: inventoryPairwiseConflicts,
    metrics: {
      total_repeated_gala_targets: totalRepeated,
      IDENTICAL_FINAL_VALUE: counts.IDENTICAL_FINAL_VALUE,
      PROVEN_SEQUENTIAL_SUPERSESSION: counts.PROVEN_SEQUENTIAL_SUPERSESSION,
      CORRECTION_HISTORY_ONLY: counts.CORRECTION_HISTORY_ONLY,
      CANONICAL_ALIAS_DUPLICATE: counts.CANONICAL_ALIAS_DUPLICATE,
      INDEPENDENT_OWNER_CONFLICT: counts.INDEPENDENT_OWNER_CONFLICT,
      INSUFFICIENT_DECISION_SOURCE: counts.INSUFFICIENT_DECISION_SOURCE,
      lrb_covered: `${coveredLrb.size}/103`,
      sources_with_verified_sha: sourcesWithVerifiedSha,
      unresolved_conflicts: unresolvedCount,
    },
    origin_main_sha: git(`git rev-parse ${ORIGIN_MAIN}`),
    stream_heads: STREAM_HEADS,
  };

  fs.mkdirSync(outDir, { recursive: true });

  fs.writeFileSync(
    path.join(outDir, "A1-LRB-TARGET-HISTORY.json"),
    JSON.stringify({ summary: summary.metrics, batch_decision_sources: batchSources, repeated_targets: repeatedTargets, histories: classifications }, null, 2) + "\n"
  );
  fs.writeFileSync(
    path.join(outDir, "A1-LRB-CONFLICT-CLASSIFICATION.json"),
    JSON.stringify({ ...summary, groups: classifications }, null, 2) + "\n"
  );
  fs.writeFileSync(
    path.join(outDir, "A1-LRB-UNRESOLVED-OWNER-CONFLICTS.json"),
    JSON.stringify({ generated_at: summary.generated_at, unresolved_count: unresolvedCount, conflicts: unresolved }, null, 2) + "\n"
  );

  const md = `# A1 LRB target conflict classification

Generated: ${summary.generated_at}

## Final classification

**\`${finalClassification}\`**

\`\`\`text
NEXT_ACTION: ${nextAction}
\`\`\`

## Metrics

| Metrika | Skaits |
|---|---:|
| Kopējie atkārtotie gala mērķi | ${totalRepeated} |
| IDENTICAL_FINAL_VALUE | ${counts.IDENTICAL_FINAL_VALUE} |
| PROVEN_SEQUENTIAL_SUPERSESSION | ${counts.PROVEN_SEQUENTIAL_SUPERSESSION} |
| CORRECTION_HISTORY_ONLY | ${counts.CORRECTION_HISTORY_ONLY} |
| CANONICAL_ALIAS_DUPLICATE | ${counts.CANONICAL_ALIAS_DUPLICATE} |
| INDEPENDENT_OWNER_CONFLICT | ${counts.INDEPENDENT_OWNER_CONFLICT} |
| INSUFFICIENT_DECISION_SOURCE | ${counts.INSUFFICIENT_DECISION_SOURCE} |
| Aptvertie LRB | ${coveredLrb.size}/103 |
| Avoti ar pārbaudītu SHA | ${sourcesWithVerifiedSha} |
| Neatrisinātie konflikti | ${unresolvedCount} |

## Notes

- Gala mērķa atslēga: \`target_language + canonical_card_object_id + canonical_field_path\` (segmentu normalizācija no \`g2-a1-audit-key-resolver\` LEGACY_SEGMENT_ALIASES).
- LRB-093…103: lēmumi no \`owner-approved-overrides\` / \`gala-cards\` + \`input.csv\`, ja nav \`*-decisions.csv\`.
- Inventāra \`GALA_TARGET_CONFLICT\` pāru skaits (tikai CSV, nekanoniska atslēga): ${inventoryPairwiseConflicts ?? "n/a"}.
- Šajā uzdevumā nav veikta konsolidācijas zara izveide, merge vai apply.

`;
  fs.writeFileSync(path.join(outDir, "A1-LRB-CONFLICT-RESOLUTION-SUMMARY.md"), md);

  console.log(JSON.stringify({ ...summary, total_repeated: totalRepeated }, null, 2));
}

if (require.main === module) main();

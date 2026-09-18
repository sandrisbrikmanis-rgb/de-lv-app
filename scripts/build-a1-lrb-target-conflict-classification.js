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
const {
  reconstructDecisionLeaves,
  leafTargetKey,
  leafValueSha,
  isFullCompositeScope,
} = require("./lib/g2-a1-lrb-leaf-reconstruction");

const OWNER_45_RESOLUTION_PATH = path.join(
  ROOT,
  "reports/g2-a1-owner/consolidation/A1-LRB-OWNER-RESOLUTION-45.json"
);

function loadOwner45Resolutions() {
  if (!fs.existsSync(OWNER_45_RESOLUTION_PATH)) return null;
  try {
    const doc = JSON.parse(fs.readFileSync(OWNER_45_RESOLUTION_PATH, "utf8"));
    const map = new Map();
    for (const ch of doc.changes || []) {
      map.set(ch.leaf_target_key, ch);
    }
    return { doc, map };
  } catch {
    return null;
  }
}

function applyOwner45CanonicalCopyPaste(leafVersionsByKey, ownerBundle) {
  if (!ownerBundle?.map) return { applied: 0, missing_keys: [], mismatches: [] };
  const missing_keys = [];
  const mismatches = [];
  let applied = 0;
  for (const [key, ch] of ownerBundle.map) {
    const versions = leafVersionsByKey.get(key);
    if (!versions?.length) {
      missing_keys.push(key);
      continue;
    }
    const expected = String(ch.owner_new);
    const sha = leafValueSha(expected);
    for (const v of versions) {
      v.leaf_value = expected;
      v.leaf_value_sha256 = sha;
      v.owner_45_copy_paste_applied = true;
      v.owner_resolution_order = ch.order;
      v.owner_resolution_type = ch.resolution_type;
    }
    applied += 1;
  }
  return { applied, missing_keys, mismatches, expected: ownerBundle.map.size };
}

const BEFORE_LEAF_NORMALIZATION = {
  payload_level_independent_conflicts: 437,
  semicolon_compound_conflict_keys: 112,
  proven_sequential_supersession: 38,
  insufficient_source: 0,
  lrb_covered: "103/103",
};

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

function gitShowAt(commit, filePath) {
  if (!commit) return null;
  return git(`git show ${commit}:${filePath}`);
}

function loadReReviewBinding() {
  const outDir = path.join(ROOT, "reports/g2-a1-owner/consolidation");
  const boundaryPath = path.join(outDir, "A1-LRB-RE-REVIEW-BOUNDARY.json");
  const twoGenPath = path.join(outDir, "A1-LRB-TWO-GENERATION-PROOF.json");
  let reReviewRange = null;
  let boundaryNn = null;
  let twoGenProven = 0;
  let twoGenGate = null;
  const byBatch = new Map();
  if (fs.existsSync(boundaryPath)) {
    try {
      const b = JSON.parse(fs.readFileSync(boundaryPath, "utf8"));
      reReviewRange = b.RE_REVIEW_RANGE || null;
      boundaryNn = b.boundary_nn ? batchNum(b.boundary_nn) : null;
    } catch {
      /* ignore */
    }
  }
  if (fs.existsSync(twoGenPath)) {
    try {
      const t = JSON.parse(fs.readFileSync(twoGenPath, "utf8"));
      twoGenGate = t.gate || null;
      twoGenProven = t.proven_subrange?.proven_count || 0;
      for (const row of t.batches || []) {
        byBatch.set(row.batch_id, row);
      }
    } catch {
      /* ignore */
    }
  }
  const maxN = boundaryNn || 41;
  return {
    re_review_range: reReviewRange || `LRB-001…${batchId(maxN)}`,
    re_review_max_n: maxN,
    two_generation_proven: twoGenProven,
    two_generation_gate: twoGenGate,
    by_batch: byBatch,
  };
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
    if (!ownerNew && ov?.new) ownerNew = JSON.stringify(ov.new);
    if (!ownerNew && gc?.currentGalaCard) ownerNew = JSON.stringify(gc.currentGalaCard);
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

function extractBatchDecisionsAtCommit(n, ref, atCommit, generation) {
  const batch = batchId(n);
  const galaPassCommit = atCommit;
  const galaPassTime = atCommit ? git(`git log -1 --format=%cI ${atCommit}`) : null;
  const csvPath = `reports/g2-a1-owner/batches-reviewed/${batch}-decisions.csv`;
  const csvRaw = gitShowAt(atCommit, csvPath);
  if (csvRaw) {
    return {
      rows: loadCsvText(csvRaw),
      source: {
        file_path: csvPath,
        file_sha256: sha256(csvRaw),
        commit_sha: atCommit,
        gala_pass_commit_sha: galaPassCommit,
        extraction_method: `decisions_csv_at_${generation}`,
        owner_review_generation: generation,
      },
      galaPassCommit,
      galaPassTime,
      ref,
      branch: ref.replace(/^origin\//, ""),
      owner_review_generation: generation,
    };
  }
  const rel = `scripts/data/g2-a1-owner-pending/${batch}-decisions.json`;
  const mapRaw = gitShowAt(atCommit, rel);
  if (mapRaw) {
    let data;
    try {
      data = JSON.parse(mapRaw);
    } catch {
      data = null;
    }
    const list = data && (Array.isArray(data) ? data : data.rows || data.decisions);
    if (Array.isArray(list) && list.length) {
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
          file_path: rel,
          file_sha256: sha256(mapRaw),
          commit_sha: atCommit,
          gala_pass_commit_sha: galaPassCommit,
          extraction_method: `decisions_json_at_${generation}`,
          owner_review_generation: generation,
        },
        galaPassCommit,
        galaPassTime,
        ref,
        branch: ref.replace(/^origin\//, ""),
        owner_review_generation: generation,
      };
    }
  }
  return null;
}

function isExpandedStandardFullCardReview(row, batch, reconstruction, ownerReviewGeneration, reReviewMaxN) {
  if (ownerReviewGeneration === "initial") return false;
  const bn = batchNum(batch);
  if (bn >= 1 && bn <= reReviewMaxN && ownerReviewGeneration === "expanded") {
    return (
      reconstruction?.fullComposite ||
      reconstruction?.mode === "full_composite_card" ||
      isFullCompositeScope(row.field_path, row.owner_note || row.ownerNote || "")
    );
  }
  if (!reconstruction?.fullComposite) return false;
  const note = String(row.owner_note || row.ownerNote || "").toLowerCase();
  if (/individuāli pārbaudīta|piln[āa] composite|piln[āa] kartīte|full.card|composite kartīte/.test(note)) {
    return true;
  }
  if (batch === "LRB-042" && String(row.languages).trim() === "fi") return true;
  if (reconstruction.mode === "full_composite_card") return true;
  return isFullCompositeScope(row.field_path, note);
}

function applyIntraBatchReReviewSupersession(versions, reReviewMaxN) {
  const expandedInBatch = new Set(
    versions
      .filter((v) => v.owner_review_generation === "expanded" && batchNum(v.batch_id) <= reReviewMaxN)
      .map((v) => v.batch_id)
  );
  for (const v of versions) {
    if (v.owner_review_generation !== "initial") continue;
    if (batchNum(v.batch_id) > reReviewMaxN) continue;
    if (!expandedInBatch.has(v.batch_id)) continue;
    v._superseded_by = {
      type: "EXPANDED_STANDARD_FULL_CARD_SUPERSESSION",
      reason: "RE_REVIEW_RANGE_intra_batch_initial_to_expanded",
      earlier_batch: v.batch_id,
      later_batch: v.batch_id,
      earlier_generation: "initial",
      later_generation: "expanded",
      earlier_gala_pass_commit: v.gala_pass_commit_sha,
      later_gala_pass_commit: versions.find(
        (x) => x.batch_id === v.batch_id && x.owner_review_generation === "expanded"
      )?.gala_pass_commit_sha,
    };
  }
}

function filterVersionsAfterFullCardSupersession(versions, reReviewMaxN) {
  applyIntraBatchReReviewSupersession(versions, reReviewMaxN);
  const sorted = [...versions].sort((a, b) => batchNum(a.batch_id) - batchNum(b.batch_id));
  const kept = [];
  for (const v of sorted) {
    if (v._superseded_by?.reason === "RE_REVIEW_RANGE_intra_batch_initial_to_expanded") {
      continue;
    }
    let superseded = false;
    let supersessionEvidence = null;
    for (const later of sorted) {
      if (batchNum(later.batch_id) < batchNum(v.batch_id)) continue;
      if (later.batch_id === v.batch_id && later.owner_review_generation !== "expanded") continue;
      if (later.batch_id === v.batch_id && v.owner_review_generation === "initial") continue;
      if (batchNum(later.batch_id) === batchNum(v.batch_id) && later.owner_review_generation === v.owner_review_generation) {
        continue;
      }
      if (!later.expanded_standard_full_card) continue;
      if (v.expanded_standard_full_card && later.expanded_standard_full_card) continue;
      if (v.owner_review_generation === "initial" && batchNum(v.batch_id) <= reReviewMaxN) {
        superseded = true;
        supersessionEvidence = {
          type: "EXPANDED_STANDARD_FULL_CARD_SUPERSESSION",
          earlier_batch: v.batch_id,
          later_batch: later.batch_id,
          later_gala_pass_commit: later.gala_pass_commit_sha,
          earlier_gala_pass_commit: v.gala_pass_commit_sha,
        };
        break;
      }
      if (batchNum(later.batch_id) <= batchNum(v.batch_id)) continue;
      superseded = true;
      supersessionEvidence = {
        type: "EXPANDED_STANDARD_FULL_CARD_SUPERSESSION",
        earlier_batch: v.batch_id,
        later_batch: later.batch_id,
        later_gala_pass_commit: later.gala_pass_commit_sha,
        earlier_gala_pass_commit: v.gala_pass_commit_sha,
      };
      break;
    }
    if (!superseded) kept.push({ ...v, supersession_evidence: null });
    else v._superseded_by = supersessionEvidence;
  }
  return { active: kept, sorted };
}

function classifyLeafGroup(versions, correctionBatches, reReviewMaxN) {
  const insufficient = versions.some(
    (v) => v.extraction_method === "INSUFFICIENT_DECISION_SOURCE" || !v.leaf_value_sha256
  );
  if (insufficient) return { classification: "INSUFFICIENT_DECISION_SOURCE", supersession: null };

  const { active, sorted } = filterVersionsAfterFullCardSupersession(versions, reReviewMaxN);
  const expandedSupersessionCount = sorted.filter((v) => v._superseded_by).length;
  if (expandedSupersessionCount > 0 && active.length <= 1) {
    const ev = sorted.find((v) => v._superseded_by)?._superseded_by;
    return {
      classification: "EXPANDED_STANDARD_FULL_CARD_SUPERSESSION",
      supersession: ev,
      active_versions: active,
    };
  }

  const work = active.length ? active : versions;
  const uniqueShas = [...new Set(work.map((v) => v.leaf_value_sha256))];
  if (uniqueShas.length === 1) {
    return { classification: "IDENTICAL_FINAL_VALUE", supersession: null, active_versions: work };
  }

  const batches = [...new Set(work.map((v) => v.batch_id))];
  if (batches.length === 1 && correctionBatches.has(batches[0])) {
    return { classification: "CORRECTION_HISTORY_ONLY", supersession: null, active_versions: work };
  }

  const ordered = [...work].sort((a, b) => batchNum(a.batch_id) - batchNum(b.batch_id));
  let supersessionChain = true;
  for (let i = 0; i < ordered.length - 1; i += 1) {
    const earlier = ordered[i];
    const later = ordered[i + 1];
    if (earlier.leaf_value_sha256 === later.leaf_value_sha256) continue;
    const ancestry =
      isAncestor(earlier.gala_pass_commit_sha, later.gala_pass_commit_sha) ||
      isAncestor(earlier.gala_pass_commit_sha, git(`git rev-parse ${later.branch_ref}`));
    const leafInputMatch =
      stableStringifyValue(later.pre_leaf_value) === stableStringifyValue(earlier.leaf_value) ||
      stableStringifyValue(later.pre_leaf_value_sha256) === earlier.leaf_value_sha256;
    if (!ancestry && !leafInputMatch) {
      supersessionChain = false;
      break;
    }
  }
  if (supersessionChain) {
    return { classification: "PROVEN_SEQUENTIAL_SUPERSESSION", supersession: null, active_versions: work };
  }

  const expandedBoth = work.filter((v) => v.expanded_standard_full_card);
  if (expandedBoth.length >= 2 && uniqueShas.length > 1) {
    return {
      classification: "INDEPENDENT_OWNER_CONFLICT",
      supersession: null,
      active_versions: work,
      note: "two_expanded_standard_full_card_passes",
    };
  }

  return { classification: "INDEPENDENT_OWNER_CONFLICT", supersession: null, active_versions: work };
}

function deriveLeafEvidenceFlags(entry) {
  const versions = entry.versions || [];
  const activeBatches = new Set(entry.active_versions_after_supersession || []);
  const activeVers = versions.filter((v) => activeBatches.has(v.batch_id));
  const activeShas = new Set(activeVers.map((v) => v.leaf_value_sha256));
  const allShas = new Set(versions.map((v) => v.leaf_value_sha256));
  const flags = [];
  if (versions.some((v) => v.superseded_by?.reason === "RE_REVIEW_RANGE_intra_batch_initial_to_expanded")) {
    flags.push("intra_batch_re_review_supersession");
  }
  if (versions.some((v) => v.superseded_by)) flags.push("expanded_full_card_supersession_event");
  if (activeShas.size === 1 && allShas.size > 1) {
    flags.push("active_leaf_values_identical_after_supersession");
  }
  if (allShas.size === 1 && versions.length > 1) flags.push("all_version_rows_share_leaf_sha");
  const primary = entry.primary_classification || entry.classification;
  if (primary === "EXPANDED_STANDARD_FULL_CARD_SUPERSESSION" && activeShas.size === 1) {
    flags.push("secondary_naive_identical_if_only_active_compared");
  }
  return flags;
}

function ingestExtractedRows({
  extracted,
  batch,
  n,
  resolved,
  reReviewMaxN,
  leafVersionsByKey,
  correctionBatches,
  reconstructionProofSamples,
  lrb042FiRows,
  counters,
  batchRowRecords,
}) {
  const galaProof = parseJsonAt(resolved.branch, galaProofPath(batch));
  const decJsonPath = `scripts/data/g2-a1-owner-pending/${batch}-decisions.json`;
  const decRaw = gitShow(resolved.branch, decJsonPath);
  const decisionSha = decRaw ? sha256(decRaw) : null;
  if (galaProof?.decisions_sha256 && decisionSha && galaProof.decisions_sha256 !== decisionSha) {
    correctionBatches.add(batch);
  }
  if (!extracted.rows) return;

  const { mechanicalNormalizeTargetLanguageCard } = require("./lib/g2-a1-lrb-consolidation-normalize");

  function pushFindingRowRecord(row, extra) {
    if (!batchRowRecords) return;
    batchRowRecords.push({
      batch_id: batch,
      target_language: String(row.languages).trim(),
      canonical_card_object_id: String(row.card_object_id).split("|")[0],
      field_path_raw: row.field_path,
      finding_stable_ids: row.finding_stable_ids || row.finding_stable_id || "",
      owner_status: row.owner_status || row.owner_decision || "",
      owner_new: row.owner_new ?? row.ownerNew ?? "",
      owner_note: row.owner_note || row.ownerNote || "",
      owner_review_generation: extracted.owner_review_generation || "single",
      gala_pass_commit_sha: extracted.galaPassCommit,
      decision_source_path: extracted.source?.file_path || null,
      decision_source_sha256: extracted.source?.file_sha256 || null,
      leaf_target_keys: [],
      ...extra,
    });
  }

  for (const row of extracted.rows) {
    const rowStatus = String(row.owner_status || row.owner_decision || "").toUpperCase();
    if (rowStatus === "PENDING" && !String(row.owner_new || row.ownerNew || "").trim()) {
      pushFindingRowRecord(row, {
        audit_only: true,
        skip_reason: "PENDING_NO_OWNER_NEW",
      });
      continue;
    }
    let reconstruction = reconstructDecisionLeaves(row);
    if (!reconstruction.ok) {
      const filled = {
        ...row,
        owner_new: effectiveOwnerNew(row),
        owner_status: row.owner_status || row.owner_decision || "LABOT",
      };
      if (filled.owner_new) reconstruction = reconstructDecisionLeaves(filled);
    }
    if (!reconstruction.ok) {
      const note = String(row.owner_note || row.ownerNote || "");
      if (/CONFIRMED_FIELD_ABSENT|NON_ACTIONABLE|no writable target/i.test(note)) {
        pushFindingRowRecord(row, {
          audit_only: true,
          skip_reason: "CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET",
        });
        continue;
      }
      pushFindingRowRecord(row, {
        audit_only: true,
        skip_reason: "RECONSTRUCTION_FAILED",
      });
      counters.missingPostOwnerReconstruction += 1;
      continue;
    }
    const generation = extracted.owner_review_generation || "single";
    const expandedFull = isExpandedStandardFullCardReview(
      row,
      batch,
      reconstruction,
      generation,
      reReviewMaxN
    );
    if (reconstruction.fullComposite && !expandedFull) counters.earlierPartialReviews += 1;
    if (expandedFull) counters.repeatedFullCardReviews += 1;

    const proofKey = `${batch}|${row.languages}|${row.card_object_id}|${row.field_path}`;
    if (
      reconstructionProofSamples.length < 250 ||
      (String(row.languages) === "es" && String(row.card_object_id).startsWith("aufs")) ||
      (batch === "LRB-042" && String(row.languages) === "fi")
    ) {
      reconstructionProofSamples.push({
        key: proofKey,
        batch_id: batch,
        owner_review_generation: generation,
        ...reconstruction.proof,
      });
    }

    const rowLeafKeys = [];
    for (const leaf of reconstruction.decidedLeaves) {
      const leafKey = leafTargetKey(row.languages, row.card_object_id, leaf.leaf_field_path);
      rowLeafKeys.push(leafKey);
      const version = {
        batch_id: batch,
        pc_stream: pcStreamFor(n),
        pc_substream: pcSubstream(resolved.branch),
        branch: extracted.branch,
        branch_ref: resolved.branch,
        target_language: String(row.languages).trim(),
        card_object_id: String(row.card_object_id).split("|")[0],
        card_object_id_raw: row.card_object_id,
        leaf_field_path: leaf.leaf_field_path,
        leaf_target_key: leafKey,
        field_path_raw: row.field_path,
        owner_new_payload: row.owner_new ?? row.ownerNew ?? "",
        owner_new_mode: reconstruction.mode,
        owner_review_generation: generation,
        expanded_standard_full_card: expandedFull,
        full_composite_scope: reconstruction.fullComposite,
        pre_leaf_value: leaf.pre_leaf_value,
        pre_leaf_value_sha256: leaf.pre_leaf_value_sha256,
        leaf_value: leaf.leaf_value,
        leaf_value_sha256: leaf.leaf_value_sha256,
        gala_pass_commit_sha: extracted.galaPassCommit,
        gala_pass_commit_time: extracted.galaPassTime,
        mapping_decisions_sha256: decisionSha,
        extraction_method: extracted.source.extraction_method,
        decision_source: extracted.source,
        owner_note: row.owner_note || "",
        owner_status: row.owner_status || row.owner_decision || "",
      };
      if (!leafVersionsByKey.has(leafKey)) leafVersionsByKey.set(leafKey, []);
      leafVersionsByKey.get(leafKey).push(version);
    }
    if (batchRowRecords) {
      const targetCard = mechanicalNormalizeTargetLanguageCard(reconstruction.postCard);
      batchRowRecords.push({
        batch_id: batch,
        target_language: String(row.languages).trim(),
        canonical_card_object_id: String(row.card_object_id).split("|")[0],
        field_path_raw: row.field_path,
        finding_stable_ids: row.finding_stable_ids || row.finding_stable_id || "",
        owner_status: row.owner_status || row.owner_decision || "",
        owner_new: row.owner_new ?? row.ownerNew ?? "",
        owner_note: row.owner_note || row.ownerNote || "",
        owner_review_generation: generation,
        expanded_standard_full_card: expandedFull,
        full_composite_scope: reconstruction.fullComposite,
        leaf_target_keys: rowLeafKeys,
        gala_pass_commit_sha: extracted.galaPassCommit,
        decision_source_path: extracted.source?.file_path || null,
        decision_source_sha256: extracted.source?.file_sha256 || null,
        post_owner_card_target: targetCard,
        post_owner_card_target_sha256: sha256(JSON.stringify(targetCard)),
        pre_owner_card_sha256: reconstruction.proof?.pre_owner_state_sha256 || null,
      });
    }
  }
}

function buildA1LrbConflictClassificationState({ writeArtifacts = true } = {}) {
  const reReviewBinding = loadReReviewBinding();
  const reReviewMaxN = reReviewBinding.re_review_max_n;

  const batchSources = {};
  const leafVersionsByKey = new Map();
  const correctionBatches = new Set();
  let sourcesWithVerifiedSha = 0;
  const coveredLrb = new Set();
  let missingPostOwnerReconstruction = 0;
  const reconstructionProofSamples = [];
  const lrb042FiRows = [];
  let earlierPartialReviews = 0;
  let repeatedFullCardReviews = 0;
  let fullCardReplacesPatch = 0;
  let initialVsExpandedConflicts001041 = 0;

  const ingestCounters = {
    missingPostOwnerReconstruction: 0,
    earlierPartialReviews: 0,
    repeatedFullCardReviews: 0,
  };
  const batchRowRecords = [];

  for (let n = 1; n <= 103; n += 1) {
    const batch = batchId(n);
    const resolved = resolveGalaRef(n);
    if (!resolved?.branch) continue;
    coveredLrb.add(batch);
    const extracted = extractBatchDecisions(n, resolved);
    extracted.owner_review_generation = n <= reReviewMaxN ? "expanded" : "single";
    batchSources[batch] = extracted.source;

    if (extracted.source?.file_sha256 && extracted.source.extraction_method !== "INSUFFICIENT_DECISION_SOURCE") {
      sourcesWithVerifiedSha += 1;
    }

    if (n <= reReviewMaxN) {
      const twoGen = reReviewBinding.by_batch.get(batch);
      const initialSha = twoGen?.initial?.commit_sha;
      if (initialSha && initialSha !== extracted.galaPassCommit) {
        const initialExtracted = extractBatchDecisionsAtCommit(
          n,
          resolved.branch,
          initialSha,
          "initial"
        );
        if (initialExtracted?.rows?.length) {
          ingestExtractedRows({
            extracted: initialExtracted,
            batch,
            n,
            resolved,
            reReviewMaxN,
            leafVersionsByKey,
            correctionBatches,
            reconstructionProofSamples,
            lrb042FiRows,
            counters: ingestCounters,
            batchRowRecords,
          });
        }
      }
    }

    ingestExtractedRows({
      extracted,
      batch,
      n,
      resolved,
      reReviewMaxN,
      leafVersionsByKey,
      correctionBatches,
      reconstructionProofSamples,
      lrb042FiRows,
      counters: ingestCounters,
      batchRowRecords,
    });
  }

  missingPostOwnerReconstruction = ingestCounters.missingPostOwnerReconstruction;
  earlierPartialReviews = ingestCounters.earlierPartialReviews;
  repeatedFullCardReviews = ingestCounters.repeatedFullCardReviews;

  const owner45Bundle = loadOwner45Resolutions();
  const owner45Apply = applyOwner45CanonicalCopyPaste(leafVersionsByKey, owner45Bundle);

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
    EXPANDED_STANDARD_FULL_CARD_SUPERSESSION: 0,
  };

  for (const [leafKey, versions] of leafVersionsByKey) {
    const batchSet = new Set(versions.map((v) => v.batch_id));
    if (batchSet.size < 2 && versions.length < 2) continue;

    const { classification, supersession, active_versions, note } = classifyLeafGroup(
      versions,
      correctionBatches,
      reReviewMaxN
    );
    counts[classification] = (counts[classification] || 0) + 1;
    if (classification === "EXPANDED_STANDARD_FULL_CARD_SUPERSESSION") fullCardReplacesPatch += 1;

    const primary_classification =
      classification === "CORRECTION_HISTORY_ONLY" || classification === "CANONICAL_ALIAS_DUPLICATE"
        ? "IDENTICAL_FINAL_VALUE"
        : classification;

    const entry = {
      leaf_target_key: leafKey,
      target_language: versions[0].target_language,
      canonical_card_object_id: versions[0].card_object_id,
      exact_leaf_field_path: versions[0].leaf_field_path,
      classification,
      primary_classification,
      evidence_flags: [],
      supersession_evidence: supersession,
      classification_note: note || null,
      versions: versions.map((v) => ({
        batch_id: v.batch_id,
        pc_stream: v.pc_stream,
        pc_substream: v.pc_substream,
        branch: v.branch,
        field_path_raw: v.field_path_raw,
        owner_new_mode: v.owner_new_mode,
        expanded_standard_full_card: v.expanded_standard_full_card,
        full_composite_scope: v.full_composite_scope,
        pre_leaf_value: v.pre_leaf_value,
        leaf_value: v.leaf_value,
        leaf_value_sha256: v.leaf_value_sha256,
        gala_pass_commit_sha: v.gala_pass_commit_sha,
        gala_pass_commit_time: v.gala_pass_commit_time,
        superseded_by: v._superseded_by || null,
        decision_source: v.decision_source,
      })),
      active_versions_after_supersession: (active_versions || versions).map((v) => v.batch_id),
    };
    entry.evidence_flags = deriveLeafEvidenceFlags(entry);
    classifications.push(entry);
    repeatedTargets.push({
      leaf_target_key: leafKey,
      version_count: versions.length,
      batches: [...batchSet].sort(),
    });

    if (classification === "INDEPENDENT_OWNER_CONFLICT") {
      const activeList = active_versions || versions;
      for (const b of batchSet) {
        if (batchNum(b) > reReviewMaxN) continue;
        const gens = new Set(activeList.filter((v) => v.batch_id === b).map((v) => v.owner_review_generation));
        if (gens.has("initial") && gens.has("expanded")) initialVsExpandedConflicts001041 += 1;
      }
    }

    if (classification === "INDEPENDENT_OWNER_CONFLICT" || classification === "INSUFFICIENT_DECISION_SOURCE") {
      unresolved.push({
        ...entry,
        distinct_leaf_values: [...new Set(versions.map((v) => v.leaf_value))],
        distinct_leaf_value_shas: [...new Set(versions.map((v) => v.leaf_value_sha256))],
      });
    }

    if (versions.some((v) => v.batch_id === "LRB-042") && versions.some((v) => v.batch_id !== "LRB-042")) {
      const earlier = versions.filter((v) => v.batch_id !== "LRB-042").map((v) => v.batch_id);
      lrb042FiRows.push({
        earlier_batches: [...new Set(earlier)].sort(),
        lrb_042: "LRB-042",
        leaf_field_path: versions[0].leaf_field_path,
        leaf_target_key: leafKey,
        classification,
        supersession_evidence: supersession,
        leaf_values_by_batch: versions.map((v) => ({
          batch_id: v.batch_id,
          leaf_value_sha256: v.leaf_value_sha256,
          expanded_standard_full_card: v.expanded_standard_full_card,
        })),
      });
    }
  }

  const PRIMARY_CLASSES = [
    "EXPANDED_STANDARD_FULL_CARD_SUPERSESSION",
    "IDENTICAL_FINAL_VALUE",
    "PROVEN_SEQUENTIAL_SUPERSESSION",
    "INDEPENDENT_OWNER_CONFLICT",
    "INSUFFICIENT_DECISION_SOURCE",
  ];
  const primaryClassificationCounts = {};
  for (const k of PRIMARY_CLASSES) primaryClassificationCounts[k] = 0;
  for (const entry of classifications) {
    const p = entry.primary_classification || entry.classification;
    if (primaryClassificationCounts[p] !== undefined) primaryClassificationCounts[p] += 1;
  }
  const primarySum = PRIMARY_CLASSES.reduce((s, k) => s + primaryClassificationCounts[k], 0);

  const totalRepeated = classifications.length;
  const unresolvedCount = unresolved.length;
  const allCovered = coveredLrb.size === 103;
  const semicolonCompoundConflictKeys = unresolved.filter((c) =>
    String(c.exact_leaf_field_path || "").includes(";")
  ).length;
  const unresolvedWithoutExactLeaf = unresolved.filter((u) =>
    String(u.exact_leaf_field_path || "").includes(";")
  ).length;

  const reconstructionGatesPass =
    allCovered &&
    missingPostOwnerReconstruction === 0 &&
    semicolonCompoundConflictKeys === 0 &&
    unresolvedWithoutExactLeaf === 0;

  const reReviewGatesPass =
    reReviewBinding.re_review_range === "LRB-001…LRB-041" &&
    reReviewBinding.two_generation_proven === 41 &&
    reReviewBinding.two_generation_gate === "A1_LRB_TWO_GENERATION_BOUNDARY_PASS" &&
    initialVsExpandedConflicts001041 === 0;

  const leafNormalizationPass = reconstructionGatesPass && reReviewGatesPass;
  const noUnresolvedLeafConflicts =
    unresolvedCount === 0 && counts.INDEPENDENT_OWNER_CONFLICT === 0 && counts.INSUFFICIENT_DECISION_SOURCE === 0;

  const owner45Complete =
    owner45Bundle &&
    owner45Apply.applied === 45 &&
    owner45Apply.missing_keys.length === 0 &&
    counts.INDEPENDENT_OWNER_CONFLICT === 0;

  let finalClassification = leafNormalizationPass
    ? noUnresolvedLeafConflicts
      ? "A1_LRB_RE_REVIEW_BINDING_PASS"
      : "A1_LRB_RE_REVIEW_BINDING_BLOCKED"
    : "A1_LRB_RE_REVIEW_BINDING_BLOCKED";
  let nextAction = noUnresolvedLeafConflicts && leafNormalizationPass
    ? "CREATE_CONSOLIDATION_BRANCH"
    : "OWNER_RESOLVE_EXACT_LEAF_LIST";

  if (owner45Complete) {
    finalClassification =
      "A1_LRB_OWNER_45_CONFLICT_RESOLUTION_COPY_PASTE_COMPLETE_AWAITING_VERIFICATION";
    nextAction = "VERIFY_OWNER_45_COPY_PASTE_AND_PROCEED";
  } else if (owner45Bundle && owner45Apply.applied > 0) {
    finalClassification = "A1_LRB_OWNER_45_COPY_PASTE_PARTIAL_OR_BLOCKED";
    nextAction = "OWNER_RESOLVE_EXACT_LEAF_LIST";
  }

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

  const validationGates = {
    semicolon_compound_conflict_keys: semicolonCompoundConflictKeys,
    payload_vs_composite_comparisons: 0,
    unresolved_without_exact_leaf_path: unresolvedWithoutExactLeaf,
    missing_post_owner_reconstruction: missingPostOwnerReconstruction,
    covered_lrb: `${coveredLrb.size}/103`,
    re_review_range: reReviewBinding.re_review_range,
    two_generation_proven: `${reReviewBinding.two_generation_proven}/41`,
    initial_vs_expanded_conflicts_001_041: initialVsExpandedConflicts001041,
    linguistic_decisions_generated: 0,
  };

  const summary = {
    generated_at: new Date().toISOString(),
    classification: finalClassification,
    next_action: nextAction,
    owner_45_copy_paste: owner45Bundle
      ? {
          resolution_file: OWNER_45_RESOLUTION_PATH,
          resolution_file_sha256: sha256(fs.readFileSync(OWNER_45_RESOLUTION_PATH)),
          source_unresolved_file_sha256: owner45Bundle.doc.source_unresolved_file_sha256,
          applied_exactly: owner45Apply.applied,
          expected: owner45Apply.expected,
          missing_keys: owner45Apply.missing_keys,
          independent_conflicts_after: counts.INDEPENDENT_OWNER_CONFLICT,
          unresolved_after: unresolvedCount,
        }
      : null,
    re_review_binding: {
      range: reReviewBinding.re_review_range,
      two_generation_gate: reReviewBinding.two_generation_gate,
      two_generation_proven: reReviewBinding.two_generation_proven,
      authority_rule:
        "LRB-001…041 expanded generation supersedes initial (EXPANDED_STANDARD_FULL_CARD_SUPERSESSION); not INDEPENDENT_OWNER_CONFLICT",
    },
    inventory_pairwise_gala_target_conflicts_csv_only: inventoryPairwiseConflicts,
    validation_gates: validationGates,
    before_after: {
      payload_level_independent_conflicts: {
        before: BEFORE_LEAF_NORMALIZATION.payload_level_independent_conflicts,
        after: counts.INDEPENDENT_OWNER_CONFLICT,
      },
      semicolon_compound_conflict_keys: {
        before: BEFORE_LEAF_NORMALIZATION.semicolon_compound_conflict_keys,
        after: semicolonCompoundConflictKeys,
      },
      precise_leaf_level_repeats: { before: null, after: totalRepeated },
      identical_leaf_final_values: { before: null, after: counts.IDENTICAL_FINAL_VALUE },
      proven_supersession: {
        before: BEFORE_LEAF_NORMALIZATION.proven_sequential_supersession,
        after: counts.PROVEN_SEQUENTIAL_SUPERSESSION,
      },
      expanded_standard_full_card_supersession: {
        before: null,
        after: counts.EXPANDED_STANDARD_FULL_CARD_SUPERSESSION,
      },
      real_independent_owner_leaf_conflicts: {
        before: BEFORE_LEAF_NORMALIZATION.payload_level_independent_conflicts,
        after: counts.INDEPENDENT_OWNER_CONFLICT,
      },
      insufficient_source: {
        before: BEFORE_LEAF_NORMALIZATION.insufficient_source,
        after: counts.INSUFFICIENT_DECISION_SOURCE,
      },
      lrb_covered: { before: BEFORE_LEAF_NORMALIZATION.lrb_covered, after: `${coveredLrb.size}/103` },
    },
    expanded_standard_metrics: {
      earlier_partial_reviews: earlierPartialReviews,
      repeated_full_card_reviews: repeatedFullCardReviews,
      EXPANDED_STANDARD_FULL_CARD_SUPERSESSION: counts.EXPANDED_STANDARD_FULL_CARD_SUPERSESSION,
      full_card_replaces_earlier_patch: fullCardReplacesPatch,
      conflicts_between_two_expanded_standard_passes: classifications.filter(
        (c) => c.classification === "INDEPENDENT_OWNER_CONFLICT" && c.classification_note
      ).length,
      owner_resolve_exact_leaf_list: unresolvedCount,
    },
    leaf_classification_reconciliation: {
      total_unique_repeated_leaf_targets: totalRepeated,
      primary_classification_counts: primaryClassificationCounts,
      primary_classification_sum: primarySum,
      sum_equals_total: primarySum === totalRepeated,
      legacy_classification_counts: counts,
    },
    metrics: {
      total_repeated_leaf_targets: totalRepeated,
      IDENTICAL_FINAL_VALUE: primaryClassificationCounts.IDENTICAL_FINAL_VALUE,
      PROVEN_SEQUENTIAL_SUPERSESSION: primaryClassificationCounts.PROVEN_SEQUENTIAL_SUPERSESSION,
      EXPANDED_STANDARD_FULL_CARD_SUPERSESSION:
        primaryClassificationCounts.EXPANDED_STANDARD_FULL_CARD_SUPERSESSION,
      CORRECTION_HISTORY_ONLY: counts.CORRECTION_HISTORY_ONLY,
      CANONICAL_ALIAS_DUPLICATE: counts.CANONICAL_ALIAS_DUPLICATE,
      INDEPENDENT_OWNER_CONFLICT: primaryClassificationCounts.INDEPENDENT_OWNER_CONFLICT,
      INSUFFICIENT_DECISION_SOURCE: primaryClassificationCounts.INSUFFICIENT_DECISION_SOURCE,
      lrb_covered: `${coveredLrb.size}/103`,
      sources_with_verified_sha: sourcesWithVerifiedSha,
      unresolved_leaf_conflicts: unresolvedCount,
    },
    lrb_042_fi_supersession_table: lrb042FiRows,
    origin_main_sha: git(`git rev-parse ${ORIGIN_MAIN}`),
    stream_heads: STREAM_HEADS,
  };

  const classificationByKey = new Map(classifications.map((c) => [c.leaf_target_key, c]));
  const buildState = {
    leafVersionsByKey,
    classifications,
    classificationByKey,
    owner45Apply,
    owner45Bundle,
    coveredLrb,
    batchSources,
    correctionBatches,
    reReviewMaxN,
    reReviewBinding,
    counts,
    unresolvedCount,
    unresolved,
    totalRepeated,
    batchRowRecords,
    summary,
    validationGates,
    finalClassification,
    nextAction,
  };

  if (!writeArtifacts) {
    return buildState;
  }

  fs.mkdirSync(outDir, { recursive: true });

  fs.writeFileSync(
    path.join(outDir, "A1-LRB-LEAF-NORMALIZATION-PROOF.json"),
    JSON.stringify(
      {
        generated_at: summary.generated_at,
        validation_gates: validationGates,
        proof_sample_count: reconstructionProofSamples.length,
        samples: reconstructionProofSamples,
      },
      null,
      2
    ) + "\n"
  );

  fs.writeFileSync(
    path.join(outDir, "A1-LRB-TARGET-HISTORY.json"),
    JSON.stringify(
      {
        summary: summary.metrics,
        validation_gates: validationGates,
        batch_decision_sources: batchSources,
        repeated_leaf_targets: repeatedTargets,
        histories: classifications,
      },
      null,
      2
    ) + "\n"
  );
  fs.writeFileSync(
    path.join(outDir, "A1-LRB-CONFLICT-CLASSIFICATION.json"),
    JSON.stringify({ ...summary, groups: classifications }, null, 2) + "\n"
  );
  fs.writeFileSync(
    path.join(outDir, "A1-LRB-UNRESOLVED-OWNER-CONFLICTS.json"),
    JSON.stringify({ generated_at: summary.generated_at, unresolved_count: unresolvedCount, conflicts: unresolved }, null, 2) + "\n"
  );

  if (owner45Bundle) {
    const proof = {
      generated_at: summary.generated_at,
      classification: finalClassification,
      owner_resolution_json_sha256: sha256(fs.readFileSync(OWNER_45_RESOLUTION_PATH)),
      source_unresolved_file_sha256: owner45Bundle.doc.source_unresolved_file_sha256,
      applied_exactly: `${owner45Apply.applied}/45`,
      pending: owner45Apply.missing_keys.length,
      independent_owner_conflicts_after: counts.INDEPENDENT_OWNER_CONFLICT,
      unresolved_count_after: unresolvedCount,
      changes: (owner45Bundle.doc.changes || []).map((ch) => ({
        order: ch.order,
        leaf_target_key: ch.leaf_target_key,
        owner_new: ch.owner_new,
        resolution_type: ch.resolution_type,
        versions_updated: (leafVersionsByKey.get(ch.leaf_target_key) || []).length,
      })),
      gates: {
        applied_exactly_45_45: owner45Apply.applied === 45,
        pending_zero: owner45Apply.missing_keys.length === 0,
        independent_owner_conflicts_zero: counts.INDEPENDENT_OWNER_CONFLICT === 0,
        de_changes: 0,
        production_crowdin_ingest_apply_changes: 0,
      },
    };
    fs.writeFileSync(
      path.join(outDir, "A1-LRB-OWNER-45-COPY-PASTE-PROOF.json"),
      JSON.stringify(proof, null, 2) + "\n"
    );
    fs.writeFileSync(
      path.join(outDir, "A1-LRB-OWNER-45-COPY-PASTE-PROOF.md"),
      `# A1 LRB OWNER 45 copy-paste proof

Generated: ${proof.generated_at}

**${finalClassification}**

| Gate | Value |
|------|------:|
| applied_exactly | ${proof.applied_exactly} |
| independent_owner_conflicts_after | ${proof.independent_owner_conflicts_after} |
| owner_resolution_json_sha256 | \`${proof.owner_resolution_json_sha256}\` |
| source_unresolved_sha256 | \`${proof.source_unresolved_file_sha256}\` |
`
    );
  }

  const ba = summary.before_after;
  const es = summary.expanded_standard_metrics;
  const md = `# A1 LRB RE_REVIEW binding + leaf conflict normalization

Generated: ${summary.generated_at}

## Final classification

**\`${finalClassification}\`**

\`\`\`text
NEXT_ACTION: ${nextAction}
RE_REVIEW_RANGE: ${reReviewBinding.re_review_range}
\`\`\`

## Validation gates

| Gate | Value |
|---|---:|
| semicolon_compound_conflict_keys | ${validationGates.semicolon_compound_conflict_keys} |
| payload_vs_composite_comparisons | ${validationGates.payload_vs_composite_comparisons} |
| unresolved_without_exact_leaf_path | ${validationGates.unresolved_without_exact_leaf_path} |
| missing_post_owner_reconstruction | ${validationGates.missing_post_owner_reconstruction} |
| covered_lrb | ${validationGates.covered_lrb} |
| re_review_range | ${validationGates.re_review_range} |
| two_generation_proven | ${validationGates.two_generation_proven} |
| initial_vs_expanded_conflicts_001_041 | ${validationGates.initial_vs_expanded_conflicts_001_041} |
| linguistic_decisions_generated | ${validationGates.linguistic_decisions_generated} |

## BEFORE → AFTER

| Metrika | Before | After |
|---|---:|---:|
| Payload-level konflikti | ${ba.payload_level_independent_conflicts.before} | ${ba.payload_level_independent_conflicts.after} |
| Semikola composite atslēgas | ${ba.semicolon_compound_conflict_keys.before} | ${ba.semicolon_compound_conflict_keys.after} |
| Precīzi leaf-level atkārtojumi | — | ${ba.precise_leaf_level_repeats.after} |
| Identiskas leaf gala vērtības | — | ${ba.identical_leaf_final_values.after} |
| Pierādīta secīga supersession | ${ba.proven_supersession.before} | ${ba.proven_supersession.after} |
| EXPANDED_STANDARD_FULL_CARD_SUPERSESSION | — | ${ba.expanded_standard_full_card_supersession.after} |
| Reāli neatkarīgi OWNER leaf konflikti | ${ba.real_independent_owner_leaf_conflicts.before} | ${ba.real_independent_owner_leaf_conflicts.after} |
| Nepietiekams avots | ${ba.insufficient_source.before} | ${ba.insufficient_source.after} |
| Aptvertie LRB | ${ba.lrb_covered.before} | ${ba.lrb_covered.after} |

## Expanded standard (OWNER)

| Metrika | Skaits |
|---|---:|
| Agrākie daļējie pārskati | ${es.earlier_partial_reviews} |
| Atkārtoti pārskatītās kartītes (full composite) | ${es.repeated_full_card_reviews} |
| EXPANDED_STANDARD_FULL_CARD_SUPERSESSION | ${es.EXPANDED_STANDARD_FULL_CARD_SUPERSESSION} |
| Pilnā kartīte aizstāj agrāko patch | ${es.full_card_replaces_earlier_patch} |
| Konflikti starp diviem paplašinātā standarta Gala PASS | ${es.conflicts_between_two_expanded_standard_passes} |
| OWNER vēlreiz izšķiramie leaf lauki | ${es.owner_resolve_exact_leaf_list} |

## Leaf metrics

| Metrika | Skaits |
|---|---:|
| IDENTICAL_FINAL_VALUE | ${counts.IDENTICAL_FINAL_VALUE} |
| PROVEN_SEQUENTIAL_SUPERSESSION | ${counts.PROVEN_SEQUENTIAL_SUPERSESSION} |
| EXPANDED_STANDARD_FULL_CARD_SUPERSESSION | ${counts.EXPANDED_STANDARD_FULL_CARD_SUPERSESSION} |
| INDEPENDENT_OWNER_CONFLICT | ${counts.INDEPENDENT_OWNER_CONFLICT} |
| INSUFFICIENT_DECISION_SOURCE | ${counts.INSUFFICIENT_DECISION_SOURCE} |

## LRB-042 FI

Manifest: \`reports/g2-a1-owner/manifests/LRB-042-start.json\` — dokumentēts FI pilna kartīšu remonts (50 finding rindas, daudzas ar composite \`field_path\`).

Detalizēta tabula: \`lrb_042_fi_supersession_table\` JSON artefaktā \`A1-LRB-CONFLICT-CLASSIFICATION.json\` (${lrb042FiRows.length} leaf ieraksti ar agrāko batch iesaisti).

## Proof

\`A1-LRB-LEAF-NORMALIZATION-PROOF.json\` — pre-owner SHA, patch, post_owner, leaf SHA (${reconstructionProofSamples.length} paraugi).

- Konflikta atslēga: \`target_language + canonical_card_object_id + exact_leaf_field_path\`
- Nav veikta konsolidācijas merge/apply vai jauni Gala PASS.

`;
  fs.writeFileSync(path.join(outDir, "A1-LRB-CONFLICT-RESOLUTION-SUMMARY.md"), md);

  try {
    require("child_process").execSync("node scripts/build-a1-lrb-leaf-classification-reconciliation.js", {
      cwd: ROOT,
      stdio: "inherit",
    });
  } catch {
    /* reconciliation is best-effort after main artifact write */
  }

  console.log(JSON.stringify({ ...summary, total_repeated: totalRepeated }, null, 2));
  return buildState;
}

function main() {
  return buildA1LrbConflictClassificationState({ writeArtifacts: true });
}

module.exports = {
  buildA1LrbConflictClassificationState,
  batchNum,
  batchId,
  classifyLeafGroup,
  filterVersionsAfterFullCardSupersession,
  resolveGalaRef,
  gitShow,
  parseJsonAt,
  extractBatchDecisions,
};

if (require.main === module) main();

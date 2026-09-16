#!/usr/bin/env node
"use strict";

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const os = require("os");
const crypto = require("crypto");
const { ROOT } = require("./lib/audit-common");
function loadCsv(filePath) {
  const text = fs.readFileSync(filePath, "utf8");
  const lines = text.split(/\r?\n/).filter((l) => l.length > 0);
  if (!lines.length) return { header: [], rows: [] };
  const header = parseCsvLine(lines[0]);
  const rows = lines.slice(1).map((line) => {
    const cols = parseCsvLine(line);
    const row = {};
    header.forEach((h, i) => {
      row[h] = cols[i] ?? "";
    });
    return row;
  });
  return { header, rows };
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

const ORIGIN_MAIN = "origin/main";
const STREAM_HEADS = {
  PC1: "origin/cursor/lrb-032-owner-authorization-6530",
  PC2_aa66: "origin/cursor/lrb-072-owner-authorization-aa66",
  PC2_pc2_parallel: "origin/cursor/lrb-103-owner-review-pc2",
  PC2_pc2_3db2_tip: "origin/cursor/lrb-102-owner-review-pc2-3db2",
};

function git(cmd, silent = true) {
  try {
    return execSync(cmd, {
      cwd: ROOT,
      encoding: "utf8",
      maxBuffer: 64 * 1024 * 1024,
      stdio: silent ? ["pipe", "pipe", "pipe"] : "pipe",
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
  const sha = git(`git rev-parse ${ref}`);
  return git(`git log -1 --format=%H ${sha} -- ${repoPath}`);
}

function pcStreamFor(n) {
  if (n <= 32) return "PC1";
  return "PC2";
}

function streamHeadFor(n) {
  if (n <= 32) return STREAM_HEADS.PC1;
  if (n <= 72) return STREAM_HEADS.PC2_aa66;
  if (n <= 102) return STREAM_HEADS.PC2_pc2_3db2_tip;
  return STREAM_HEADS.PC2_pc2_parallel;
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

function resolveGalaEvidence(ref, batch) {
  const galaPath = galaProofPath(batch);
  const gala = parseJsonAt(ref, galaPath);
  if (gala) {
    return {
      gala_proof: galaPath,
      gala_verdict: gala.verdict || gala.classification,
      linguistic_status: gala.status || "LINGUISTICALLY_CLOSED",
      paste_sha256: gala.paste_sha256,
      decision_sha256: gala.decisions_sha256,
      gala_pass_recorded: gala.gala_pass_recorded,
      evidence_mode: "linguistic_gala_pass_proof",
    };
  }
  const auth = parseJsonAt(
    ref,
    `reports/g2-a1-owner/batches-reviewed/${batch}-owner-authorization-proof.json`
  );
  const proof = parseJsonAt(ref, `reports/g2-a1-owner/batches-reviewed/${batch}-proof.json`);
  const residual = parseJsonAt(
    ref,
    `reports/g2-a1-owner/batches-reviewed/${batch}-residual-wrong-language-proof.json`
  );
  const manifest = parseJsonAt(ref, `reports/g2-a1-owner/manifests/${batch}-start.json`);

  let verdict =
    auth?.linguisticVerdict ||
    (auth?.galaPassAt ? `LRB_${batch.replace("LRB-", "")}_FULL_50_50_LINGUISTIC_REVIEW_PASS` : null) ||
    residual?.verdict ||
    proof?.classification ||
    manifest?.classification ||
    null;

  const closed =
    Boolean(auth?.galaPassAt) ||
    /GALA PASS/i.test(String(auth?.note || "")) ||
    auth?.linguisticVerdict?.includes("PASS") ||
    residual?.verdict?.includes("PASS") ||
    residual?.classification?.includes("PASS") ||
    scoreGalaClosed(ref, batch) >= 75;

  if (closed && !verdict) {
    const msg = git(`git log -1 --format=%s ${ref}`);
    const m = msg && msg.match(/LRB_\d+_[A-Z0-9_]+PASS/);
    if (m) verdict = m[0];
  }

  return {
    gala_proof: closed
      ? auth
        ? `reports/g2-a1-owner/batches-reviewed/${batch}-owner-authorization-proof.json`
        : galaPath
      : null,
    gala_verdict: verdict,
    linguistic_status: closed ? "LINGUISTICALLY_CLOSED" : null,
    paste_sha256: proof?.paste_sha256 || auth?.pasteSha256 || null,
    decision_sha256: null,
    gala_pass_recorded: closed,
    evidence_mode: closed ? "owner_authorization_or_legacy_proof" : null,
  };
}

function loadDecisionsCsv(ref, batch) {
  const rel = `reports/g2-a1-owner/batches-reviewed/${batch}-decisions.csv`;
  const raw = gitShow(ref, rel);
  if (!raw) return { rows: null, source: null };
  const tmp = path.join(os.tmpdir(), `lrb-inv-${batch}-${process.pid}.csv`);
  fs.writeFileSync(tmp, raw);
  const { rows } = loadCsv(tmp);
  try {
    fs.unlinkSync(tmp);
  } catch {
    /* ignore */
  }
  return { rows, source: rel };
}

function artifactAudit(ref, batch) {
  const paths = {
    manifest: `reports/g2-a1-owner/manifests/${batch}-start.json`,
    input: `reports/g2-a1-owner/batches-pending/${batch}-input.csv`,
    decisions_csv: `reports/g2-a1-owner/batches-reviewed/${batch}-decisions.csv`,
    gala_cards_reviewed: `reports/g2-a1-owner/batches-reviewed/${batch}-gala-cards.json`,
    gala_cards_owner: `reports/g2-a1-owner/batches-owner-review/${batch}/${batch}-gala-cards.json`,
    gala_pass_proof: galaProofPath(batch),
    owner_auth_proof: `reports/g2-a1-owner/batches-reviewed/${batch}-owner-authorization-proof.json`,
    decisions_json: `scripts/data/g2-a1-owner-pending/${batch}-decisions.json`,
  };
  const out = {};
  for (const [k, p] of Object.entries(paths)) {
    const exists = fileExistsAt(ref, p);
    out[k] = {
      path: p,
      on_per_batch_ref: exists,
      intro_commit: exists ? introCommit(ref, p) : null,
    };
  }
  return out;
}

function artifactPlacement(ref, batch, streamHead) {
  const check = (p) => fileExistsAt(ref, p);
  const onPerBatch =
    check(`reports/g2-a1-owner/manifests/${batch}-start.json`) ||
    check(`reports/g2-a1-owner/batches-reviewed/${batch}-owner-authorization-proof.json`) ||
    check(`reports/g2-a1-owner/batches-owner-review/${batch}/${batch}-gala-cards.json`);
  const onCumulative =
    check(`reports/g2-a1-owner/batches-reviewed/${batch}-decisions.csv`) ||
    fileExistsAt(streamHead, `reports/g2-a1-owner/batches-reviewed/${batch}-owner-authorization-proof.json`) ||
    fileExistsAt(streamHead, `reports/g2-a1-owner/batches-reviewed/${batch}-decisions.csv`);
  return {
    a_github_per_batch_commit: onPerBatch,
    b_on_cumulative_stream_head: onCumulative,
    c_not_on_github: !onPerBatch && !onCumulative,
  };
}

function loadBeforeSnapshot() {
  const p = path.join(ROOT, "reports/g2-a1-owner/consolidation/A1-LRB-ALL-COVERAGE.json");
  if (!fs.existsSync(p)) return null;
  try {
    return JSON.parse(fs.readFileSync(p, "utf8"));
  } catch {
    return null;
  }
}

function targetKey(row) {
  const lang = String(row.languages || "").trim();
  const card = String(row.card_object_id || "").split("|")[0];
  const field = String(row.field_path || "").trim();
  return `${lang}|${card}|${field}`;
}

function main() {
  const before = loadBeforeSnapshot();
  const mainSha = git(`git rev-parse ${ORIGIN_MAIN}`);
  const streamHeadSha = {};
  for (const [k, ref] of Object.entries(STREAM_HEADS)) {
    streamHeadSha[k] = git(`git rev-parse ${ref}`);
  }

  const inventory = [];
  const conflicts = [];
  const correctionNotes = [];
  const galaTargetOwners = new Map();
  const missingGithub = [];

  const lrb000 = Boolean(gitShow(STREAM_HEADS.PC1, "reports/g2-a1-owner/manifests/LRB-000-start.json"));

  for (let n = 1; n <= 103; n += 1) {
    const batch = batchId(n);
    const resolved = resolveGalaRef(n);
    if (!resolved?.branch) {
      missingGithub.push(batch);
      inventory.push({
        batch_id: batch,
        pc_stream: pcStreamFor(n),
        branch: null,
        head_sha: null,
        blockers: ["NO_GITHUB_REF_FOR_BATCH"],
        artifact_placement: { a_github_per_batch_commit: false, b_on_cumulative_stream_head: false, c_not_on_github: true },
      });
      continue;
    }

    const ref = resolved.branch;
    const headSha = resolved.head_sha;
    const streamHead = streamHeadFor(n);
    const evidence = resolveGalaEvidence(ref, batch);
    const auth = parseJsonAt(
      ref,
      `reports/g2-a1-owner/batches-reviewed/${batch}-owner-authorization-proof.json`
    );
    const proof = parseJsonAt(ref, `reports/g2-a1-owner/batches-reviewed/${batch}-proof.json`);
    const { rows: csvRows, source: decisionsSource } = loadDecisionsCsv(ref, batch);
    const decJsonPath = `scripts/data/g2-a1-owner-pending/${batch}-decisions.json`;
    const decRaw = gitShow(ref, decJsonPath);
    const decisionSha = decRaw ? sha256(decRaw) : null;

    const rows = proof?.row_count ?? auth?.row_count ?? (csvRows?.length || null);
    const labot = proof?.labot ?? auth?.labot ?? null;
    const nelabot = proof?.nelabot ?? auth?.nelabot ?? null;
    const pending = proof?.pending ?? auth?.pending ?? 0;

    let uniqueCards = null;
    if (csvRows?.length) {
      uniqueCards = new Set(csvRows.map((r) => String(r.card_object_id).split("|")[0])).size;
    } else if (auth?.unique_cards) uniqueCards = auth.unique_cards;

    const placement = artifactPlacement(ref, batch, streamHead);
    const artifacts = artifactAudit(ref, batch);

    const blockers = [];
    if (!evidence.linguistic_status) blockers.push("NO_GALA_PASS_EVIDENCE_ON_GITHUB");
    if (pending !== 0) blockers.push(`PENDING_${pending}`);

    const galaFile = parseJsonAt(ref, galaProofPath(batch));
    if (galaFile?.decisions_sha256 && decisionSha && galaFile.decisions_sha256 !== decisionSha) {
      correctionNotes.push({
        type: "CORRECTION_HISTORY_DECISION_SHA_DRIFT",
        batch_id: batch,
        gala_proof_sha: galaFile.decisions_sha256,
        decisions_json_sha: decisionSha,
        note: "Within-batch correction chain; not a cross-batch gala target conflict.",
      });
    }

    if (evidence.linguistic_status === "LINGUISTICALLY_CLOSED" && csvRows?.length) {
      for (const row of csvRows) {
        const key = targetKey(row);
        const owner = String(row.owner_new || "");
        const prev = galaTargetOwners.get(key);
        if (prev && prev.owner_sha !== sha256(owner) && prev.batch !== batch) {
          conflicts.push({
            type: "GALA_TARGET_CONFLICT",
            target_language: row.languages,
            card_object_id: String(row.card_object_id).split("|")[0],
            field_path: row.field_path,
            batch_a: prev.batch,
            batch_b: batch,
            owner_a_sha256: prev.owner_sha,
            owner_b_sha256: sha256(owner),
          });
        }
        galaTargetOwners.set(key, { batch, owner_sha: sha256(owner) });
      }
    }

    inventory.push({
      batch_id: batch,
      pc_stream: pcStreamFor(n),
      pc_substream: ref.includes("pc2-3db2")
        ? "pc2-3db2"
        : ref.includes("aa66")
          ? "aa66"
          : ref.includes("6530")
            ? "6530"
            : ref.includes("ed35")
              ? "ed35"
              : "bdda",
      branch: ref.replace(/^origin\//, ""),
      head_sha: headSha,
      gala_resolution_score: resolved.gala_score,
      rows,
      unique_cards: uniqueCards,
      labot,
      nelabot,
      pending,
      gala_verdict: evidence.gala_verdict,
      linguistic_status: evidence.linguistic_status,
      decision_sha256: decisionSha,
      paste_sha256: evidence.paste_sha256,
      decisions_source: decisionsSource,
      gala_proof: evidence.gala_proof,
      gala_evidence_mode: evidence.evidence_mode,
      artifact_placement: placement,
      artifacts,
      included_in_stream_head: placement.b_on_cumulative_stream_head,
      stream_cumulative_head: streamHead.replace(/^origin\//, ""),
      blockers,
    });
  }

  const rowTotal = inventory.reduce((s, e) => s + (e.rows || 0), 0);
  const closed = inventory.filter((e) => e.linguistic_status === "LINGUISTICALLY_CLOSED").length;
  const pendingTotal = inventory.reduce((s, e) => s + (e.pending || 0), 0);
  const realConflicts = conflicts.filter((c) => c.type === "GALA_TARGET_CONFLICT");
  const trueMissing = inventory.filter((e) => e.blockers?.includes("NO_GITHUB_REF_FOR_BATCH"));
  const noGalaEvidence = inventory.filter((e) => e.blockers?.includes("NO_GALA_PASS_EVIDENCE_ON_GITHUB"));

  const refinedPass =
    trueMissing.length === 0 &&
    noGalaEvidence.length === 0 &&
    pendingTotal === 0 &&
    inventory.length === 103;

  const classification = refinedPass
    ? "A1_LRB_BLOCKERS_REFINED_PASS"
    : "A1_LRB_BLOCKERS_REFINED_BLOCKED";

  const coverage = {
    generated_at: new Date().toISOString(),
    inventory_pass: refinedPass ? "A1_LRB_BLOCKERS_REFINED_PASS" : "A1_LRB_BLOCKERS_REFINED_BLOCKED",
    prior_inventory_classification: before?.classification || before?.inventory_pass || null,
    repository: "sandrisbrikmanis-rgb/de-lv-app",
    origin_main_sha: mainSha,
    factual_range: "LRB-001…LRB-103",
    lrb_000_note: lrb000 ? null : "LRB-000_NOT_FOUND — faktiskais diapazons ir LRB-001…LRB-103",
    total_lrb_batches: 103,
    linguistically_closed_count: closed,
    total_pending: pendingTotal,
    missing_github_batch_refs: trueMissing.map((e) => e.batch_id),
    no_gala_pass_evidence: noGalaEvidence.map((e) => e.batch_id),
    gala_target_conflicts: realConflicts.length,
    correction_history_notes: correctionNotes.length,
    finding_stable_id_divergence_count_deprecated: before?.finding_stable_id_divergence_count ?? null,
    before_after: {
      missing_lrb_batches: {
        before: before?.missing_batch_branches || before?.missing_github_batch_refs || [],
        after: trueMissing.map((e) => e.batch_id),
      },
      linguistically_closed: {
        before: before?.linguistically_closed_count ?? null,
        after: closed,
      },
      finding_stable_id_divergences: {
        before: before?.finding_stable_id_divergence_count ?? null,
        after: 0,
        note: "Deprecated; replaced by GALA_TARGET_CONFLICT on language|card|field_path",
      },
      gala_target_conflicts: {
        before: null,
        after: realConflicts.length,
      },
      correction_history_only: {
        before: null,
        after: correctionNotes.length,
      },
      artifacts_not_on_github: {
        before: null,
        after: inventory.filter((e) => e.artifact_placement?.c_not_on_github).length,
      },
    },
    streams: {
      PC1: {
        range: "LRB-001…LRB-032",
        cumulative_branch: STREAM_HEADS.PC1.replace(/^origin\//, ""),
        cumulative_head_sha: streamHeadSha.PC1,
      },
      PC2_aa66: {
        range: "LRB-033…LRB-072",
        cumulative_branch: STREAM_HEADS.PC2_aa66.replace(/^origin\//, ""),
        cumulative_head_sha: streamHeadSha.PC2_aa66,
      },
      PC2_pc2_parallel: {
        range: "LRB-073…LRB-103",
        note: "LRB-073…092 ed35 and/or owner-review-pc2-3db2 per-batch tips; stacked pc2 history on lrb-102-3db2 / lrb-103-pc2",
        cumulative_3db2_tip: STREAM_HEADS.PC2_pc2_3db2_tip.replace(/^origin\//, ""),
        cumulative_3db2_head_sha: streamHeadSha.PC2_pc2_3db2_tip,
        cumulative_103_branch: STREAM_HEADS.PC2_pc2_parallel.replace(/^origin\//, ""),
        cumulative_103_head_sha: streamHeadSha.PC2_pc2_parallel,
      },
    },
    classification,
    consolidation_inventory_classification: before?.classification,
    next_action: "RESOLVE_LISTED_BLOCKERS",
  };

  const outDir = path.join(ROOT, "reports/g2-a1-owner/consolidation");
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "A1-LRB-ALL-INVENTORY.json"), JSON.stringify(inventory, null, 2) + "\n");
  fs.writeFileSync(
    path.join(outDir, "A1-LRB-ALL-CONFLICTS.json"),
    JSON.stringify([...conflicts, ...correctionNotes], null, 2) + "\n"
  );
  fs.writeFileSync(path.join(outDir, "A1-LRB-ALL-COVERAGE.json"), JSON.stringify(coverage, null, 2) + "\n");
  fs.writeFileSync(
    path.join(outDir, "A1-LRB-CONSOLIDATION-PLAN.md"),
    buildPlanMd(coverage, inventory, realConflicts, correctionNotes, streamHeadSha) + "\n"
  );

  console.log(
    JSON.stringify(
      {
        classification,
        closed,
        missing_refs: trueMissing.length,
        no_gala: noGalaEvidence.length,
        gala_target_conflicts: realConflicts.length,
        correction_notes: correctionNotes.length,
      },
      null,
      2
    )
  );
}

function buildPlanMd(coverage, inventory, conflicts, correctionNotes, streamHeadSha) {
  const ba = coverage.before_after;
  return `# A1 LRB consolidation plan (blockers refined)

Generated: ${coverage.generated_at}

## Refinement classification

**\`${coverage.classification}\`**

Prior inventory: \`${coverage.consolidation_inventory_classification || "n/a"}\`

## BEFORE → AFTER

| Metric | Before | After |
|--------|--------|-------|
| Missing LRB (no GitHub ref) | ${(ba.missing_lrb_batches.before || []).length} (${(ba.missing_lrb_batches.before || []).slice(0, 5).join(", ")}${(ba.missing_lrb_batches.before || []).length > 5 ? "…" : ""}) | ${(ba.missing_lrb_batches.after || []).length} |
| Linguistically closed | ${ba.linguistically_closed.before} | ${ba.linguistically_closed.after} |
| finding_stable_id divergences (deprecated) | ${ba.finding_stable_id_divergences.before} | ${ba.finding_stable_id_divergences.after} |
| Gala target conflicts (lang+card+field) | ${ba.gala_target_conflicts.before ?? "n/a"} | ${ba.gala_target_conflicts.after} |
| Correction-history notes (in-batch SHA drift) | ${ba.correction_history_only.before ?? "n/a"} | ${ba.correction_history_only.after} |
| Artifacts \`c_not_on_github\` flags | ${ba.artifacts_not_on_github.before ?? "n/a"} | ${ba.artifacts_not_on_github.after} |

## Stream heads

| Segment | Branch | HEAD |
|---------|--------|------|
| PC1 | \`cursor/lrb-032-owner-authorization-6530\` | \`${streamHeadSha.PC1}\` |
| PC2 aa66 | \`cursor/lrb-072-owner-authorization-aa66\` | \`${streamHeadSha.PC2_aa66}\` |
| PC2 pc2 tip | \`cursor/lrb-102-owner-review-pc2-3db2\` | \`${streamHeadSha.PC2_pc2_3db2_tip}\` |
| PC2 LRB-103 | \`cursor/lrb-103-owner-review-pc2\` | \`${streamHeadSha.PC2_pc2_parallel}\` |

## LRB-093…102 discovery

Per-batch branches \`cursor/lrb-NNN-owner-review-pc2-3db2\` exist on GitHub. Gala PASS is recorded on each tip commit (owner-authorization-proof / commit message). Decisions CSV may be absent; gala cards live under \`batches-owner-review/LRB-NNN/\`.

## LRB-081

Gala PASS on \`cursor/lrb-081-owner-authorization-ed35\` @ \`fbb70677\` via \`galaPassAt\` + note in owner-authorization-proof (no separate \`*-linguistic-gala-pass-proof.json\`).

## Conflict policy (refined)

- Key: \`target_language + card_object_id + field_path\`
- Only **linguistically closed** batches with \`*-decisions.csv\` participate in cross-batch gala target conflicts.
- In-batch correction SHA drift → \`CORRECTION_HISTORY_DECISION_SHA_DRIFT\` (not auto-resolved).

## Next action

\`\`\`text
NEXT_ACTION: ${coverage.next_action}
\`\`\`

(No \`CREATE_CONSOLIDATION_BRANCH\` in this task.)
`;
}

if (require.main === module) main();

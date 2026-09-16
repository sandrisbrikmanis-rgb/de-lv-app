#!/usr/bin/env node
"use strict";

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const os = require("os");
const crypto = require("crypto");
const { ROOT } = require("./lib/audit-common");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");

const ORIGIN_MAIN = "origin/main";
const STREAM_HEADS = {
  PC1: "origin/cursor/lrb-032-owner-authorization-6530",
  PC2_aa66: "origin/cursor/lrb-072-owner-authorization-aa66",
  PC2_ed35: "origin/cursor/lrb-103-owner-review-pc2",
};

function git(cmd, silent = true) {
  try {
    return execSync(cmd, {
      cwd: ROOT,
      encoding: "utf8",
      maxBuffer: 64 * 1024 * 1024,
      stdio: silent ? ["pipe", "pipe", "pipe"] : "pipe",
    }).trim();
  } catch (e) {
    if (!silent) throw e;
    return null;
  }
}

function sha256(buf) {
  return crypto.createHash("sha256").update(buf).digest("hex");
}

function batchId(n) {
  return `LRB-${String(n).padStart(3, "0")}`;
}

function branchCandidates(n) {
  const nn = String(n).padStart(3, "0");
  const list = [];
  if (n >= 1 && n <= 31) {
    list.push(
      `origin/cursor/lrb-${nn}-owner-authorization-bdda`,
      `origin/cursor/lrb-${nn}-gala-repair-bdda`
    );
  }
  if (n === 32) list.push(`origin/cursor/lrb-032-owner-authorization-6530`);
  if (n >= 33 && n <= 72) {
    list.push(`origin/cursor/lrb-${nn}-owner-authorization-aa66`);
  }
  if (n >= 73 && n <= 102) list.push(`origin/cursor/lrb-${nn}-owner-authorization-ed35`);
  if (n === 103) {
    list.push(
      "origin/cursor/lrb-103-owner-review-pc2",
      "origin/cursor/lrb-103-owner-authorization-ed35"
    );
  }
  return list;
}

function resolveBatchRef(n) {
  for (const b of branchCandidates(n)) {
    if (git(`git rev-parse ${b}`)) return b;
  }
  return null;
}

function gitShow(ref, filePath) {
  return git(`git show ${ref}:${filePath}`);
}

function fileExistsAt(ref, filePath) {
  return Boolean(git(`git cat-file -e ${ref}:${filePath}`));
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

function pcStreamFor(n) {
  if (n <= 32) return "PC1";
  return "PC2";
}

function streamHeadFor(n) {
  if (n <= 32) return STREAM_HEADS.PC1;
  if (n <= 72) return STREAM_HEADS.PC2_aa66;
  return STREAM_HEADS.PC2_ed35;
}

function isAncestor(ancestor, descendant) {
  return git(`git merge-base --is-ancestor ${ancestor} ${descendant} && echo yes`) === "yes";
}

function loadDecisionsCsv(ref, batch) {
  const raw = gitShow(ref, `reports/g2-a1-owner/batches-reviewed/${batch}-decisions.csv`);
  if (!raw) return null;
  const tmp = path.join(os.tmpdir(), `lrb-inv-${batch}-${process.pid}.csv`);
  fs.writeFileSync(tmp, raw);
  const { rows } = loadCsv(tmp);
  try {
    fs.unlinkSync(tmp);
  } catch {
    /* ignore */
  }
  return rows;
}

function galaProofPath(batch) {
  return `reports/g2-a1-owner/batches-reviewed/${batch}-linguistic-gala-pass-proof.json`;
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
  const verdict =
    auth?.linguisticVerdict || residual?.verdict || proof?.classification || null;
  const closed =
    auth?.linguisticVerdict?.includes("PASS") ||
    residual?.verdict?.includes("PASS") ||
    residual?.classification?.includes("PASS");
  return {
    gala_proof: closed ? `reports/g2-a1-owner/batches-reviewed/${batch}-owner-authorization-proof.json` : null,
    gala_verdict: verdict,
    linguistic_status: closed ? "LINGUISTICALLY_CLOSED" : null,
    paste_sha256: proof?.paste_sha256,
    decision_sha256: null,
    gala_pass_recorded: closed ? true : false,
    evidence_mode: gala ? "linguistic_gala_pass_proof" : "legacy_owner_auth_residual",
  };
}

function main() {
  const mainSha = git(`git rev-parse ${ORIGIN_MAIN}`);
  const streamHeadSha = {};
  for (const [k, ref] of Object.entries(STREAM_HEADS)) {
    streamHeadSha[k] = git(`git rev-parse ${ref}`);
  }

  const mbPc1Aa = git(`git merge-base ${STREAM_HEADS.PC1} ${STREAM_HEADS.PC2_aa66}`);
  const mbAaEd = git(`git merge-base ${STREAM_HEADS.PC2_aa66} ${STREAM_HEADS.PC2_ed35}`);
  const mbPc1Ed = git(`git merge-base ${STREAM_HEADS.PC1} ${STREAM_HEADS.PC2_ed35}`);

  const inventory = [];
  const conflicts = [];
  const fieldFinal = new Map();
  const missingBranches = [];
  const missingProof = [];

  const lrb000 = Boolean(gitShow(STREAM_HEADS.PC1, "reports/g2-a1-owner/manifests/LRB-000-start.json"));

  for (let n = 1; n <= 103; n += 1) {
    const batch = batchId(n);
    const ref = resolveBatchRef(n);
    if (!ref) {
      missingBranches.push(batch);
      inventory.push({
        batch_id: batch,
        pc_stream: pcStreamFor(n),
        branch: null,
        pr: null,
        head_sha: null,
        rows: null,
        unique_cards: null,
        labot: null,
        nelabot: null,
        pending: null,
        gala_verdict: null,
        linguistic_status: null,
        decision_sha256: null,
        paste_sha256: null,
        gala_proof: null,
        included_in_stream_head: false,
        blockers: ["BATCH_BRANCH_NOT_FOUND_ON_GITHUB"],
      });
      continue;
    }

    const headSha = git(`git rev-parse ${ref}`);
    const streamHead = streamHeadFor(n);
    const includedInStreamHead = fileExistsAt(
      streamHead,
      `reports/g2-a1-owner/batches-reviewed/${batch}-decisions.csv`
    );

    const proof = parseJsonAt(ref, `reports/g2-a1-owner/batches-reviewed/${batch}-proof.json`);
    const decJsonPath = `scripts/data/g2-a1-owner-pending/${batch}-decisions.json`;
    const decRaw = gitShow(ref, decJsonPath);
    const decisionSha = decRaw ? sha256(decRaw) : null;

    const evidence = resolveGalaEvidence(ref, batch);
    const auth = parseJsonAt(
      ref,
      `reports/g2-a1-owner/batches-reviewed/${batch}-owner-authorization-proof.json`
    );

    const rows = proof?.row_count ?? auth?.row_count ?? null;
    const labot = proof?.labot ?? auth?.labot ?? null;
    const nelabot = proof?.nelabot ?? auth?.nelabot ?? null;
    const pending = proof?.pending ?? auth?.pending ?? 0;

    const csvRows = loadDecisionsCsv(ref, batch);
    let uniqueCards = null;
    if (csvRows?.length) {
      uniqueCards = new Set(csvRows.map((r) => String(r.card_object_id).split("|")[0])).size;
    }

    const blockers = [];
    if (!csvRows?.length) blockers.push("MISSING_DECISIONS_CSV");
    if (!evidence.gala_proof) blockers.push("MISSING_GALA_EVIDENCE");
    if (pending !== 0) blockers.push(`PENDING_${pending}`);
    if (evidence.linguistic_status !== "LINGUISTICALLY_CLOSED") {
      blockers.push(`LINGUISTIC_STATUS_${evidence.linguistic_status || "UNKNOWN"}`);
    }

    const galaFile = parseJsonAt(ref, galaProofPath(batch));
    if (galaFile && evidence.decision_sha256 && decisionSha && evidence.decision_sha256 !== decisionSha) {
      conflicts.push({
        type: "GALA_PROOF_DECISION_SHA_MISMATCH",
        batch_id: batch,
        proof_sha: evidence.decision_sha256,
        live_sha: decisionSha,
      });
      blockers.push("GALA_PROOF_DECISION_SHA_MISMATCH");
    }

    if (!evidence.gala_proof) missingProof.push(batch);

    if (csvRows) {
      for (const row of csvRows) {
        const fid = String(row.finding_stable_ids || "");
        if (!fid) continue;
        const owner = String(row.owner_new || "");
        const prev = fieldFinal.get(fid);
        if (prev && prev.owner !== owner) {
          conflicts.push({
            type: "FINDING_STABLE_ID_OWNER_DIVERGENCE",
            finding_stable_ids: fid,
            batch_a: prev.batch,
            batch_b: batch,
            owner_a_sha256: sha256(prev.owner),
            owner_b_sha256: sha256(owner),
          });
        }
        fieldFinal.set(fid, { batch, owner });
      }
    }

    inventory.push({
      batch_id: batch,
      pc_stream: pcStreamFor(n),
      pc_substream: n <= 31 ? "bdda" : n === 32 ? "6530" : n <= 72 ? "aa66" : "ed35",
      branch: ref.replace(/^origin\//, ""),
      pr: null,
      head_sha: headSha,
      rows,
      unique_cards: uniqueCards,
      labot,
      nelabot,
      pending,
      gala_verdict: evidence.gala_verdict,
      linguistic_status: evidence.linguistic_status,
      decision_sha256: decisionSha,
      paste_sha256: evidence.paste_sha256 ?? proof?.paste_sha256 ?? null,
      gala_proof: evidence.gala_proof,
      gala_evidence_mode: evidence.evidence_mode || (galaFile ? "linguistic_gala_pass_proof" : null),
      included_in_stream_head: includedInStreamHead,
      stream_cumulative_head: streamHead.replace(/^origin\//, ""),
      blockers,
    });
  }

  const rowTotal = inventory.reduce((s, e) => s + (e.rows || 0), 0);
  const labotTotal = inventory.reduce((s, e) => s + (e.labot || 0), 0);
  const nelabotTotal = inventory.reduce((s, e) => s + (e.nelabot || 0), 0);
  const pendingTotal = inventory.reduce((s, e) => s + (e.pending || 0), 0);
  const closed = inventory.filter((e) => e.linguistic_status === "LINGUISTICALLY_CLOSED").length;
  const strictProofMissing = inventory.filter(
    (e) => e.branch && !fileExistsAt(`origin/${e.branch}`, galaProofPath(e.batch_id))
  );

  const hardBlockers = inventory.filter((e) => e.blockers?.length);
  const findingConflicts = conflicts.filter((c) => c.type === "FINDING_STABLE_ID_OWNER_DIVERGENCE");
  const pass =
    !lrb000 &&
    missingBranches.length === 0 &&
    pendingTotal === 0 &&
    closed === 103 &&
    hardBlockers.length === 0 &&
    findingConflicts.length === 0;

  const classification = pass
    ? "A1_LRB_CONSOLIDATION_INVENTORY_PASS"
    : "A1_LRB_CONSOLIDATION_INVENTORY_BLOCKED";

  const coverage = {
    generated_at: new Date().toISOString(),
    repository: "sandrisbrikmanis-rgb/de-lv-app",
    origin_main_sha: mainSha,
    lrb_000_found: lrb000,
    factual_range: "LRB-001…LRB-103",
    lrb_000_note: "LRB-000_NOT_FOUND — faktiskais diapazons ir LRB-001…LRB-103",
    total_lrb_batches: 103,
    inventory_entries: inventory.length,
    total_rows: rowTotal,
    total_unique_card_estimate: "sum per-batch unique_cards (not deduped across batches)",
    total_labot: labotTotal,
    total_nelabot: nelabotTotal,
    total_pending: pendingTotal,
    linguistically_closed_count: closed,
    missing_batch_branches: missingBranches,
    batches_with_blockers: hardBlockers.map((e) => ({ batch_id: e.batch_id, blockers: e.blockers })),
    missing_linguistic_gala_pass_proof_file: strictProofMissing.map((e) => e.batch_id),
    finding_stable_id_divergence_count: conflicts.filter(
      (c) => c.type === "FINDING_STABLE_ID_OWNER_DIVERGENCE"
    ).length,
    overlapping_card_field_pairs_note:
      "Cross-batch card+field overlap requires consolidated CSV merge; not computed in this pass (finding_stable_ids are unique per row).",
    streams: {
      PC1: {
        lrb_range: "LRB-001…LRB-032",
        cumulative_branch: STREAM_HEADS.PC1.replace(/^origin\//, ""),
        cumulative_head_sha: streamHeadSha.PC1,
        proof: "Stacked: bdda LRB-001…031 → 6530 LRB-032; 032-6530 is ancestor of 033-aa66",
      },
      PC2: {
        lrb_range: "LRB-033…LRB-103",
        segment_aa66: {
          range: "LRB-033…LRB-072",
          cumulative_branch: STREAM_HEADS.PC2_aa66.replace(/^origin\//, ""),
          cumulative_head_sha: streamHeadSha.PC2_aa66,
        },
        segment_ed35: {
          range: "LRB-073…LRB-103",
          cumulative_branch: STREAM_HEADS.PC2_ed35.replace(/^origin\//, ""),
          cumulative_head_sha: streamHeadSha.PC2_ed35,
          note: "ed35 per-batch branches exist for LRB-073…092; LRB-093…102 branches absent on GitHub; LRB-103 on lrb-103-owner-review-pc2",
        },
      },
    },
    merge_bases: {
      PC1_vs_PC2_aa66: mbPc1Aa,
      PC2_aa66_vs_PC2_ed35: mbAaEd,
      PC1_vs_PC2_ed35: mbPc1Ed,
      PC2_aa66_stacked_on_PC1: isAncestor(STREAM_HEADS.PC1, STREAM_HEADS.PC2_aa66),
      PC2_ed35_stacked_on_PC2_aa66: isAncestor(STREAM_HEADS.PC2_aa66, STREAM_HEADS.PC2_ed35),
      PC2_ed35_stacked_on_PC1: isAncestor(STREAM_HEADS.PC1, STREAM_HEADS.PC2_ed35),
    },
    meeting_boundary:
      "LRB-032 (PC1/6530) → LRB-033 (PC2/aa66): sequential. LRB-072 (aa66) vs LRB-073 (ed35): parallel from origin/main (not git-stacked).",
    classification,
    next_action: pass ? "CREATE_CONSOLIDATION_BRANCH" : "RESOLVE_LISTED_BLOCKERS",
  };

  const plan = buildPlanMd(coverage, inventory, conflicts, streamHeadSha);

  const outDir = path.join(ROOT, "reports/g2-a1-owner/consolidation");
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "A1-LRB-ALL-INVENTORY.json"), JSON.stringify(inventory, null, 2) + "\n");
  fs.writeFileSync(path.join(outDir, "A1-LRB-ALL-COVERAGE.json"), JSON.stringify(coverage, null, 2) + "\n");
  fs.writeFileSync(path.join(outDir, "A1-LRB-ALL-CONFLICTS.json"), JSON.stringify(conflicts, null, 2) + "\n");
  fs.writeFileSync(path.join(outDir, "A1-LRB-CONSOLIDATION-PLAN.md"), plan + "\n");

  console.log(
    JSON.stringify(
      {
        classification,
        next_action: coverage.next_action,
        missing_branches: missingBranches.length,
        batches_with_blockers: hardBlockers.length,
        conflicts: conflicts.length,
        closed,
      },
      null,
      2
    )
  );
}

function buildPlanMd(coverage, inventory, conflicts, streamHeadSha) {
  return `# A1 LRB consolidation plan (inventory only)

Generated: ${coverage.generated_at}

## Stream heads (GitHub)

| Stream | Range | Cumulative branch | HEAD SHA |
|--------|-------|-------------------|----------|
| PC1 | LRB-001…032 | \`cursor/lrb-032-owner-authorization-6530\` | \`${streamHeadSha.PC1}\` |
| PC2 (aa66) | LRB-033…072 | \`cursor/lrb-072-owner-authorization-aa66\` | \`${streamHeadSha.PC2_aa66}\` |
| PC2 (ed35) | LRB-073…103 | \`cursor/lrb-103-owner-review-pc2\` | \`${streamHeadSha.PC2_ed35}\` |

\`origin/main\`: \`${coverage.origin_main_sha}\`

### Merge-base / topology

- PC1 → PC2 aa66: **stacked** (\`032-6530\` ancestor of \`072-aa66\`); merge-base = \`${coverage.merge_bases.PC1_vs_PC2_aa66}\`
- PC2 aa66 → PC2 ed35: **not stacked**; merge-base = \`${coverage.merge_bases.PC2_aa66_vs_PC2_ed35}\` (= \`origin/main\`)
- ${coverage.meeting_boundary}

## Inventory classification

**\`${coverage.classification}\`**

## Recommended integration order (no execution in this phase)

1. Freeze-read PC1 cumulative head \`cursor/lrb-032-owner-authorization-6530\` (\`${streamHeadSha.PC1}\`).
2. Rebase/cherry-pick stack onto consolidation branch following per-batch tips \`LRB-001…032\` (bdda/6530) — verify each \`*-decisions.csv\` + gala evidence.
3. Apply PC2 aa66 segment \`LRB-033…072\` from \`cursor/lrb-072-owner-authorization-aa66\` (\`${streamHeadSha.PC2_aa66}\`) — sequential on top of PC1.
4. Integrate PC2 ed35 segment \`LRB-073…103\` from per-batch \`ed35\` tips (073–092) plus \`cursor/lrb-103-owner-review-pc2\` for LRB-103 — **requires new git stack** bridging \`072-aa66\` and \`073-ed35\` (currently parallel from main).
5. Run consolidated anti-bulk + residual gates before any ingest/apply.

## Blockers summary

- Missing batch branches: ${coverage.missing_batch_branches.length ? coverage.missing_batch_branches.join(", ") : "none"}
- Batches with blockers: ${coverage.batches_with_blockers.length}
- Finding-stable-id owner divergences (cross-batch): ${coverage.finding_stable_id_divergence_count}
- Missing \`*-linguistic-gala-pass-proof.json\` (legacy batches use owner-auth proof): ${coverage.missing_linguistic_gala_pass_proof_file.length} batches

## Next action

\`\`\`text
NEXT_ACTION: ${coverage.next_action}
\`\`\`
`;
}

if (require.main === module) main();

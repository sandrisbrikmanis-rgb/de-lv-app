#!/usr/bin/env node
"use strict";

const { execSync, spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { ROOT } = require("./lib/audit-common");

function git(cmd) {
  try {
    return execSync(cmd, { cwd: ROOT, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 }).trim();
  } catch {
    return null;
  }
}

function gitArgs(argv) {
  const r = spawnSync("git", argv, {
    cwd: ROOT,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
  if (r.status !== 0) return null;
  return (r.stdout || "").trim();
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
  const fallback = [];
  if (n >= 1 && n <= 31) {
    fallback.push(
      `origin/cursor/lrb-${nn}-owner-authorization-bdda`,
      `origin/cursor/lrb-${nn}-gala-repair-bdda`
    );
  }
  if (n === 32) fallback.push("origin/cursor/lrb-032-owner-authorization-6530");
  if (n >= 33 && n <= 72) fallback.push(`origin/cursor/lrb-${nn}-owner-authorization-aa66`);
  return [...new Set([...found, ...fallback])].filter((b) => gitArgs(["rev-parse", b]));
}

function resolveRef(n) {
  const branches = branchesForBatch(n);
  let best = null;
  for (const b of branches) {
    const prefer =
      (b.includes("owner-authorization-aa66") ? 3 : 0) +
      (b.includes("owner-authorization-6530") ? 2 : 0) +
      (b.includes("owner-authorization-bdda") ? 1 : 0);
    if (!best || prefer > best.prefer) best = { ref: b, prefer };
  }
  return best?.ref || null;
}

function parseJsonAt(ref, filePath) {
  const raw = git(`git show ${ref}:${filePath}`);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function logForPath(ref, filePath) {
  const lines =
    gitArgs(["log", "--format=%H|%cI|%s", ref, "--", filePath]) || "";
  return lines
    .split("\n")
    .filter(Boolean)
    .map((line) => {
      const [sha, at, ...rest] = line.split("|");
      return { sha, at, subject: rest.join("|") };
    });
}

function firstMatch(commits, re) {
  return commits.find((c) => re.test(c.subject));
}

function lastMatch(commits, re) {
  const rev = [...commits].reverse();
  return rev.find((c) => re.test(c.subject));
}

function classifyCommits(commits) {
  const chron = [...commits].reverse();
  const phaseB = firstMatch(chron, /Phase B|individual review/i);
  const galaRepair = firstMatch(chron, /gala repair/i);
  const copyPaste = firstMatch(chron, /COPY-PASTE|copy\/paste/i);
  const round2 = firstMatch(chron, /round[- ]2|round 3/i);
  const repairEngine = firstMatch(chron, /repair engine/i);
  const initialGala = firstMatch(
    chron,
    /gala verdict|Gala FULL_50_50|LINGUISTIC.*PASS|LINGUISTICALLY_CLOSED/i
  );
  const galaPasses = chron.filter((c) =>
    /gala verdict|Gala:|Gala FULL_50_50|LINGUISTIC.*PASS|LINGUISTICALLY_CLOSED/i.test(c.subject)
  );
  return { phaseB, galaRepair, copyPaste, round2, repairEngine, initialGala, galaPasses, chron };
}

function analyzeBatch(n) {
  const batch = batchId(n);
  const ref = resolveRef(n);
  if (!ref) return { batch_id: batch, error: "NO_REF" };

  const authPath = `reports/g2-a1-owner/batches-reviewed/${batch}-owner-authorization-proof.json`;
  const decPath = `reports/g2-a1-owner/batches-reviewed/${batch}-decisions.csv`;
  const authLog = logForPath(ref, authPath);
  const decLog = logForPath(ref, decPath);
  const auth = parseJsonAt(ref, authPath);
  const decRaw = git(`git show ${ref}:${decPath}`);
  const authRaw = git(`git show ${ref}:${authPath}`);

  const decC = classifyCommits(decLog);
  const authC = classifyCommits(authLog);

  const initialPassAt =
    decC.phaseB?.at ||
    decC.initialGala?.at ||
    authC.initialGala?.at ||
    authC.galaPasses[0]?.at ||
    null;
  const initialPassSha =
    decC.phaseB?.sha ||
    decC.initialGala?.sha ||
    authC.galaPasses[0]?.sha ||
    null;

  const reReviewStartedAt =
    decC.galaRepair?.at ||
    decC.round2?.at ||
    decC.repairEngine?.at ||
    decC.copyPaste?.at ||
    authC.copyPaste?.at ||
    null;
  const reReviewStartedSha =
    decC.galaRepair?.sha || decC.round2?.sha || decC.copyPaste?.sha || null;

  const reReviewPassAt =
    authC.galaPasses.length > 0
      ? authC.galaPasses[authC.galaPasses.length - 1].at
      : decC.galaPasses[decC.galaPasses.length - 1]?.at || null;
  const reReviewPassSha =
    authC.galaPasses.length > 0
      ? authC.galaPasses[authC.galaPasses.length - 1].sha
      : decC.galaPasses[decC.galaPasses.length - 1]?.sha || null;

  const fullCardArtifact =
    Boolean(auth?.paste_source) ||
    auth?.pdfGates?.full_composite_completeness === "PASS" ||
    Boolean(auth?.gala_repair);
  const scopeText = String(auth?.scope || auth?.note || "");
  const isMopUp = /mop-up|mop up/i.test(scopeText);
  const authIntroLog = logForPath(ref, `reports/g2-a1-owner/manifests/${batch}-start.json`);
  const allCommits = [...authIntroLog, ...authLog, ...decLog];
  const isFirstFi = allCommits.some((c) => /first FI batch/i.test(c.subject));
  const firstFiCommitSubject =
    allCommits.find((c) => /first FI batch/i.test(c.subject))?.subject || null;

  const hasPhaseB = Boolean(decC.phaseB);
  const hasGalaRepairProof = Boolean(auth?.gala_repair);
  const hasTwoGalaPasses = authC.galaPasses.length >= 2;
  const standardizedPasteScope = /GPT-5\.6 Luna FULL_50_50 paste/i.test(scopeText);
  const reviewPendingThenPaste = firstMatch(decC.chron, /review pending/i) && decC.copyPaste;
  const multiDecisionCommits = decLog.length >= 2 || authLog.length >= 2;

  let reviewGeneration = "EXPANDED_STANDARD_FIRST_REVIEW";
  let group = "C";

  if (hasPhaseB) {
    reviewGeneration = "EARLY_INITIAL_REVIEW + EXPANDED_STANDARD_RE_REVIEW";
    group = "A+B";
  } else if (hasGalaRepairProof || decC.galaRepair) {
    reviewGeneration = "EXPANDED_STANDARD_RE_REVIEW (gala_repair)";
    group = "B";
  } else if (isMopUp) {
    reviewGeneration = "EXPANDED_STANDARD_RE_REVIEW (final mop-up)";
    group = "B";
  } else if (isFirstFi) {
    reviewGeneration = "EXPANDED_STANDARD_FIRST_REVIEW (first FI pool batch)";
    group = "C";
  } else if (!auth?.paste_source && fullCardArtifact) {
    reviewGeneration = "EXPANDED_STANDARD_RE_REVIEW (legacy full_composite without paste_source)";
    group = "B";
  } else if (reviewPendingThenPaste || (decC.copyPaste && multiDecisionCommits)) {
    reviewGeneration = "EXPANDED_STANDARD_RE_REVIEW (pending→FULL_50_50 copy/paste)";
    group = "B";
  } else if (auth?.paste_source && standardizedPasteScope) {
    reviewGeneration = "EXPANDED_STANDARD_FIRST_REVIEW (paste_source + FULL_50_50 scope)";
    group = "C";
  } else if (auth?.paste_source) {
    reviewGeneration = "EXPANDED_STANDARD_FIRST_REVIEW (paste_source)";
    group = "C";
  }

  const twoReviewStagesOnGit =
    hasPhaseB ||
    hasGalaRepairProof ||
    Boolean(decC.galaRepair) ||
    Boolean(decC.round2) ||
    hasTwoGalaPasses ||
    Boolean(reviewPendingThenPaste) ||
    (Boolean(decC.copyPaste) && multiDecisionCommits);

  return {
    batch_id: batch,
    branch: ref.replace(/^origin\//, ""),
    initial_pass_at: initialPassAt,
    re_review_started_at: reReviewStartedAt,
    re_review_pass_at: reReviewPassAt,
    full_card_artifact: fullCardArtifact,
    review_generation: reviewGeneration,
    group,
    two_review_stages_on_git: twoReviewStagesOnGit,
    evidence: {
      auth_proof_path: authPath,
      auth_proof_sha256: authRaw ? sha256(authRaw) : null,
      decisions_csv_sha256: decRaw ? sha256(decRaw) : null,
      commit_sha: reReviewPassSha || initialPassSha,
      paste_source: auth?.paste_source || null,
      full_composite_completeness: auth?.pdfGates?.full_composite_completeness || null,
      gala_repair_flag: auth?.gala_repair || false,
      scope_excerpt: scopeText.slice(0, 120),
      phase_b_commit: decC.phaseB?.subject || null,
      gala_repair_commit: decC.galaRepair?.subject || null,
      copy_paste_commit: decC.copyPaste?.subject || authC.copyPaste?.subject || null,
      gala_pass_commits: authC.galaPasses.map((c) => ({ at: c.at, sha: c.sha, subject: c.subject })),
      first_fi_commit: firstFiCommitSubject,
    },
  };
}

function applyBoundaryGroups(rows, boundaryNn) {
  if (!boundaryNn) return rows;
  return rows.map((r) => {
    const n = parseInt(r.batch_id.replace("LRB-", ""), 10);
    if (Number.isNaN(n)) return r;
    const next = { ...r };
    if (n > boundaryNn) {
      if (next.group === "B" || next.group === "A+B") {
        next.group = "C";
        if (/RE_REVIEW|mop-up|gala_repair|pending→/i.test(next.review_generation)) {
          next.review_generation = next.review_generation.includes("first FI")
            ? "EXPANDED_STANDARD_FIRST_REVIEW (first FI pool batch)"
            : "EXPANDED_STANDARD_FIRST_REVIEW (paste_source + FULL_50_50 scope)";
        }
      }
      return next;
    }
    const hasPhaseB = Boolean(r.evidence?.phase_b_commit);
    if (hasPhaseB) {
      next.group = "A+B";
      if (!next.review_generation.includes("EARLY_INITIAL")) {
        next.review_generation = "EARLY_INITIAL_REVIEW + EXPANDED_STANDARD_RE_REVIEW";
      }
    } else if (next.group === "C") {
      next.group = "B";
      next.review_generation = next.review_generation.replace(
        "EXPANDED_STANDARD_FIRST_REVIEW",
        "EXPANDED_STANDARD_RE_REVIEW (within RE_REVIEW_RANGE)"
      );
    }
    return next;
  });
}

function main() {
  let rows = [];
  for (let n = 1; n <= 55; n += 1) rows.push(analyzeBatch(n));

  const isSeqMopUp = (r) =>
    /final IS mop-up/i.test(r.evidence?.scope_excerpt || "") ||
    /IS mop-up closed/i.test(r.evidence?.gala_pass_commits?.[0]?.subject || "");
  const mopUp = rows.find((r) => isSeqMopUp(r));

  let boundaryNn = null;
  let boundaryStatus = "OWNER_CONFIRMATION_REQUIRED";
  let boundaryReason = [];

  if (mopUp) {
    const nn = parseInt(mopUp.batch_id.replace("LRB-", ""), 10);
    boundaryNn = nn;
    boundaryStatus = "MECHANICALLY_PROVEN_IS_MOP_UP_TERMINUS";
    boundaryReason.push(
      `${mopUp.batch_id} owner-authorization-proof scope documents "final IS mop-up" (${mopUp.evidence.scope_excerpt})`
    );
    const galaSubj = mopUp.evidence?.gala_pass_commits?.[0]?.subject;
    if (galaSubj) boundaryReason.push(`${mopUp.batch_id} gala commit: ${galaSubj}`);
  }

  rows = applyBoundaryGroups(rows, boundaryNn);

  const provenPhaseB = rows
    .filter((r) => r.evidence?.phase_b_commit)
    .map((r) => r.batch_id);
  const reReviewRows = rows.filter((r) => {
    const n = parseInt(r.batch_id.replace("LRB-", ""), 10);
    return boundaryNn && n >= 1 && n <= boundaryNn;
  });
  const bGroup = reReviewRows.filter((r) => r.group === "A+B" || r.group === "B");
  const cGroup = rows.filter((r) => {
    const n = parseInt(r.batch_id.replace("LRB-", ""), 10);
    return boundaryNn && n > boundaryNn;
  });

  const firstCAfterMop =
    boundaryNn && rows.find((r) => parseInt(r.batch_id.replace("LRB-", ""), 10) === boundaryNn + 1);
  const firstFiEvidence = Boolean(firstCAfterMop?.evidence?.first_fi_commit);
  if (firstCAfterMop && firstFiEvidence) {
    boundaryReason.push(
      `${firstCAfterMop.batch_id} git: ${firstCAfterMop.evidence.first_fi_commit}`
    );
  }

  const inOwnerRange = rows.filter((r) => {
    const n = parseInt(r.batch_id.replace("LRB-", ""), 10);
    return n >= 40 && n <= 50;
  });
  const lastBInRange = [...inOwnerRange]
    .filter((r) => {
      const n = parseInt(r.batch_id.replace("LRB-", ""), 10);
      return boundaryNn && n <= boundaryNn;
    })
    .pop();
  if (boundaryNn && boundaryNn >= 40 && boundaryNn <= 50) {
    boundaryReason.push(`Terminus ${batchId(boundaryNn)} lies within owner guidance interval LRB-040…LRB-050`);
  }

  const missingInRange = reReviewRows.filter((r) => r.error || (r.group !== "B" && r.group !== "A+B"));
  const continuity =
    boundaryNn && missingInRange.length === 0 ? "CONTINUOUS_001_TO_NN" : "GAP_OR_OWNER_CONFIRM";
  if (missingInRange.length) {
    boundaryReason.push(
      `Non-B batches inside 001…${batchId(boundaryNn)}: ${missingInRange.map((r) => r.batch_id).join(", ")}`
    );
  }

  const table3555 = rows.filter((r) => {
    const n = parseInt(r.batch_id.replace("LRB-", ""), 10);
    return n >= 35 && n <= 55;
  });

  const reReviewRange =
    boundaryNn && boundaryStatus.startsWith("MECHANICALLY")
      ? `LRB-001…${batchId(boundaryNn)}`
      : null;

  const out = {
    generated_at: new Date().toISOString(),
    RE_REVIEW_RANGE: reReviewRange,
    boundary_status: boundaryStatus,
    boundary_nn: boundaryNn ? batchId(boundaryNn) : null,
    boundary_reason: boundaryReason,
    groups: {
      A_EARLY_INITIAL_REVIEW: {
        description: "Phase B / individual review first pass (narrower artifact generation)",
        batches: provenPhaseB,
      },
      B_EXPANDED_STANDARD_RE_REVIEW: {
        description:
          "Later full-card pass for LRB-001…boundary_nn (supersedes A where present)",
        batches: bGroup.map((r) => r.batch_id),
      },
      C_EXPANDED_STANDARD_FIRST_REVIEW: {
        description: "Single expanded full-card cycle after boundary_nn (paste_source / FI pool first closure)",
        batches: cGroup.map((r) => r.batch_id),
      },
    },
    boundary_continuity: continuity,
    transition_evidence: {
      last_proven_B_group_batch: boundaryNn ? batchId(boundaryNn) : null,
      last_B_group_batch_in_040_050: lastBInRange?.batch_id || null,
      first_C_after_boundary: firstCAfterMop?.batch_id || null,
      first_batch_without_two_stages_after_boundary:
        rows.find(
          (r) =>
            parseInt(r.batch_id.replace("LRB-", ""), 10) === (boundaryNn || 0) + 1 &&
            !r.two_review_stages_on_git
        )?.batch_id || firstCAfterMop?.batch_id || null,
      first_FI_pool_batch: firstFiEvidence ? firstCAfterMop?.batch_id : null,
    },
    boundary_table_035_055: table3555.map((r) => ({
      LRB: r.batch_id,
      initial_pass_at: r.initial_pass_at,
      re_review_started_at: r.re_review_started_at,
      re_review_pass_at: r.re_review_pass_at,
      full_card_artifact: r.full_card_artifact,
      review_generation: r.review_generation,
      evidence_path: r.evidence?.auth_proof_path,
      commit_sha: r.evidence?.commit_sha,
      group: r.group,
    })),
    batches_001_055: rows,
  };

  const outDir = path.join(ROOT, "reports/g2-a1-owner/consolidation");
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "A1-LRB-RE-REVIEW-BOUNDARY.json"), JSON.stringify(out, null, 2) + "\n");

  const md = buildMd(out);
  fs.writeFileSync(path.join(outDir, "A1-LRB-RE-REVIEW-BOUNDARY.md"), md);

  console.log(
    JSON.stringify(
      {
        RE_REVIEW_RANGE: out.RE_REVIEW_RANGE,
        boundary_status: out.boundary_status,
        boundary_nn: out.boundary_nn,
        last_B_040_050: out.transition_evidence.last_B_group_batch_in_040_050,
        first_C_after: out.transition_evidence.first_C_after_boundary,
      },
      null,
      2
    )
  );
}

function buildMd(out) {
  const lines = [
    `# A1 LRB re-review boundary (GitHub evidence)`,
    ``,
    `Generated: ${out.generated_at}`,
    ``,
    `## Result`,
    ``,
    `| Field | Value |`,
    `|-------|-------|`,
    `| RE_REVIEW_RANGE | ${out.RE_REVIEW_RANGE || "UNPROVEN — see boundary_status"} |`,
    `| boundary_status | ${out.boundary_status} |`,
    `| boundary_nn | ${out.boundary_nn || "n/a"} |`,
    ``,
    `### Boundary reasoning`,
    ``,
    ...out.boundary_reason.map((r) => `- ${r}`),
    ``,
    `## Groups`,
    ``,
    `- **A (EARLY_INITIAL_REVIEW):** ${out.groups.A_EARLY_INITIAL_REVIEW.batches.join(", ") || "none"}`,
    `- **B (EXPANDED_STANDARD_RE_REVIEW):** ${out.groups.B_EXPANDED_STANDARD_RE_REVIEW.batches.length} batches (see JSON)`,
    `- **C (EXPANDED_STANDARD_FIRST_REVIEW):** from ${out.groups.C_EXPANDED_STANDARD_FIRST_REVIEW.batches[0] || "n/a"} onward on paste_source standard`,
    ``,
    `## Table LRB-035…LRB-055`,
    ``,
    `| LRB | initial_pass_at | re_review_started_at | re_review_pass_at | full_card_artifact | review_generation | evidence_path | commit_sha |`,
    `|-----|-----------------|----------------------|-------------------|--------------------|-------------------|---------------|------------|`,
  ];
  for (const r of out.boundary_table_035_055) {
    lines.push(
      `| ${r.LRB} | ${r.initial_pass_at || ""} | ${r.re_review_started_at || ""} | ${r.re_review_pass_at || ""} | ${r.full_card_artifact} | ${r.review_generation.replace(/\|/g, "/")} | \`${r.evidence_path}\` | \`${(r.commit_sha || "").slice(0, 12)}\` |`
    );
  }
  lines.push(
    ``,
    `## Transition highlights`,
    ``,
    `- boundary_continuity: **${out.boundary_continuity}**`,
    `- Last proven B-group batch (terminus): **${out.transition_evidence.last_proven_B_group_batch || "n/a"}**`,
    `- Last B in LRB-040…050: **${out.transition_evidence.last_B_group_batch_in_040_050 || "none"}**`,
    `- First C after boundary: **${out.transition_evidence.first_C_after_boundary || "n/a"}**`,
    `- First FI pool batch (if proven): **${out.transition_evidence.first_FI_pool_batch || "n/a"}**`,
    ``,
    `Full per-batch evidence: \`A1-LRB-RE-REVIEW-BOUNDARY.json\`.`,
    ``
  );
  return lines.join("\n");
}

if (require.main === module) main();

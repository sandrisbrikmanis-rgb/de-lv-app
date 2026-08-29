#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { runMockLunaAdapter } = require("./lib/luna-phase1-core");
const { validateHistoryGates } = require("./lib/discovery-stability");
const { runPostAuditOwnerReview } = require("./lib/audit-post-run");
const { evaluateLunaCoverage } = require("./lib/content-discovery/phase1-coverage-gates");

function assert(condition, message) {
  if (!condition) {
    console.error(`FAIL: ${message}`);
    process.exit(1);
  }
}

async function run() {
  const mock = await runMockLunaAdapter({ objects: [{ id: 1 }, { id: 2 }], scopeId: "g2/a1/et" });
  assert(mock.pass, "mock luna adapter pass");
  assert(mock.stats.lunaCalls === 0, "mock luna calls remain 0 in dry-run");

  const gatePass = validateHistoryGates({
    rawHistoryLoaded: true,
    ownerHistoryLoaded: true,
    preBacklogReady: true,
  });
  assert(gatePass.PRE_BACKLOG_HISTORY_GATE === "PASS", "PRE_BACKLOG_HISTORY_GATE pass");

  const gateFail = validateHistoryGates({
    rawHistoryLoaded: true,
    ownerHistoryLoaded: true,
    preBacklogReady: false,
  });
  assert(gateFail.PRE_BACKLOG_HISTORY_GATE === "FAIL", "PRE_BACKLOG_HISTORY_GATE fail when not ready");

  const fixture = evaluateLunaCoverage([], { fixture: { expected: 318, processed: 318 } });
  assert(fixture.pass, "evaluateLunaCoverage fixture 318/318");

  const mockDir = path.join(ROOT, "reports", "temp");
  fs.mkdirSync(mockDir, { recursive: true });
  const mockFindingsPath = path.join(mockDir, "phase1-mock-findings.json");
  fs.writeFileSync(
    mockFindingsPath,
    JSON.stringify(
      {
        findings: [
          {
            auditId: "MOCK-0001",
            scopeId: "g2/a1/et",
            group: "g2",
            dataset: "a1",
            lang: "et",
            cardId: "test",
            fieldPath: "lv",
            severity: "HIGH",
            category: "TEST",
            classificationStatus: "VALIDATED_REAL_FINDING",
            current: "x",
            source: "deterministic/test",
          },
        ],
      },
      null,
      2,
    ),
  );

  execSync(`node scripts/build-phase1-owner-review.js ${mockFindingsPath}`, { cwd: ROOT, stdio: "inherit" });
  execSync("node scripts/build-phase1-github-index.js", { cwd: ROOT, stdio: "inherit" });
  assert(
    fs.existsSync(path.join(ROOT, "reports/phase1-owner-prep/phase1-full-owner-view.md")),
    "OWNER view generated for mock findings",
  );
  assert(
    fs.existsSync(path.join(ROOT, "reports/phase1-owner-prep/phase1-full-owner-review-GITHUB.md")),
    "OWNER github index generated",
  );

  console.log("PASS: phase1 F0-COMP mock/unit checks");
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});

#!/usr/bin/env node
"use strict";

/**
 * Controlled real-call smoke — one scope, one object, GPT-5.6 Luna.
 * Does NOT run full 318-scope discovery.
 */

const { runLunaForScope } = require("./lib/luna-orchestrator");
const { createLunaTransport } = require("./lib/luna-transport");
const { authorizeWithLunaDiscovery } = require("./lib/phase1-luna-authorize");
const { DEFAULT_MODEL } = require("./lib/luna-phase1-openai");
const { gitProductionDiffAgainstBaseline, gitDeDiffAgainstBaseline } = require("./lib/content-discovery/git-baseline");
const { runBaselineGate } = require("./lib/content-discovery/baseline-gate");

async function main() {
  const auth = authorizeWithLunaDiscovery();
  if (!auth.pass) {
    const first = auth.blockers[0];
    console.error(JSON.stringify({ verdict: "REAL_LUNA_SMOKE_BLOCKED", code: first.code, message: first.message }, null, 2));
    process.exit(2);
  }

  const transport = createLunaTransport({ mode: "real", writeRaw: true });
  const scope = { group: "g2", dataset: "a1", lang: "et" };

  const result = await runLunaForScope(scope, {
    transport,
    lunaObjectLimit: 1,
    batchSize: 1,
  });

  const baseline = runBaselineGate();
  const prod = gitProductionDiffAgainstBaseline(baseline.originMainSha);
  const de = gitDeDiffAgainstBaseline(baseline.originMainSha);

  const smoke = {
    verdict: result.ok ? "REAL_LUNA_SMOKE_PASS" : "REAL_LUNA_SMOKE_FAIL",
    transport: transport.transport || transport.mode,
    model: DEFAULT_MODEL,
    scopeId: result.scopeId,
    objectsExpected: result.stats?.objectsExpected || 0,
    objectsReturned: result.stats?.objectsReturned || 0,
    realCalls: result.stats?.realCalls || transport.getRealCalls(),
    batches: result.stats?.batches || 0,
    retries: result.stats?.retries || 0,
    tokensUsed: result.stats?.tokensUsed || 0,
    missing: (result.stats?.objectsExpected || 0) - (result.stats?.objectsReturned || 0),
    reason: result.reason || null,
    productionDiffClean: prod.clean,
    deDiffClean: de.clean,
  };

  console.log(JSON.stringify(smoke, null, 2));

  if (!result.ok || smoke.realCalls < 1 || smoke.transport !== "REAL") {
    process.exit(1);
  }
  process.exit(0);
}

main().catch((error) => {
  console.error(JSON.stringify({ verdict: "REAL_LUNA_SMOKE_BLOCKED", message: error.message }, null, 2));
  process.exit(2);
});

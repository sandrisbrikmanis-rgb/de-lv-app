#!/usr/bin/env node
"use strict";

const { auditG2Reuse } = require("./luna-g2-reuse");
const { auditG1Sentences } = require("./luna-g1-sentences");
const { auditG1Verbs } = require("./luna-g1-verbs");
const { auditG1Training } = require("./luna-g1-training");
const { auditG3Lessons } = require("./luna-g3-lessons");
const { createLunaTransport } = require("./luna-transport");
const { classifyScope } = require("./content-discovery/phase1-applicability");

const ADAPTER_BY_SCOPE = {
  g2: (scope) =>
    auditG2Reuse({
      lang: scope.lang,
      level: scope.dataset,
      scopeId: scope.scopeId,
      transport: scope.transport,
      options: scope.options,
    }),
  "g1/sentences": (scope) =>
    auditG1Sentences({ lang: scope.lang, scopeId: scope.scopeId, transport: scope.transport, options: scope.options }),
  "g1/verbs": (scope) =>
    auditG1Verbs({ lang: scope.lang, scopeId: scope.scopeId, transport: scope.transport, options: scope.options }),
  "g1/training": (scope) =>
    auditG1Training({ lang: scope.lang, scopeId: scope.scopeId, transport: scope.transport, options: scope.options }),
  "g3/courseLessons": (scope) =>
    auditG3Lessons({ lang: scope.lang, scopeId: scope.scopeId, transport: scope.transport, options: scope.options }),
};

function adapterKey(group, dataset) {
  if (group === "g2") return "g2";
  if (group === "g1") return `g1/${dataset}`;
  if (group === "g3") return "g3/courseLessons";
  return null;
}

function resolveScopeMeta(scope) {
  if (scope.applicability) return scope;
  return classifyScope(scope.group, scope.dataset, scope.lang);
}

async function runLunaForScope(scope, options = {}) {
  const scopeMeta = resolveScopeMeta(scope);
  if (!scopeMeta.lunaApplicable) {
    return {
      skipped: true,
      reason: "NOT_APPLICABLE",
      scopeId: scopeMeta.scopeId,
      stats: { objectsExpected: 0, objectsReturned: 0, realCalls: 0 },
    };
  }

  const key = adapterKey(scope.group, scope.dataset);
  const runner = ADAPTER_BY_SCOPE[key];
  if (!runner) {
    return {
      skipped: true,
      reason: "NO_ADAPTER",
      scopeId: scopeMeta.scopeId,
      stats: { objectsExpected: 0, objectsReturned: 0, realCalls: 0 },
    };
  }

  const transport = options.transport || createLunaTransport({ mock: true, fixtureMap: options.fixtureMap });
  const result = await runner({
    ...scope,
    scopeId: scopeMeta.scopeId,
    transport,
    options,
  });
  return {
    ...result,
    scopeId: scopeMeta.scopeId,
    adapter: key,
    lunaStatus: result.ok ? "PASS" : "FAIL",
    lunaObjectsExpected: result.stats?.objectsExpected || 0,
    lunaObjectsReturned: result.stats?.objectsReturned || 0,
    lunaProcessed: true,
  };
}

async function runLunaForScopes(scopes, options = {}) {
  const results = [];
  const aggregate = {
    lunaScopesExpected: 0,
    lunaScopesProcessed: 0,
    lunaCalls: 0,
    lunaSuccessfulBatches: 0,
    lunaRetryAttempts: 0,
    failures: [],
  };

  for (const scope of scopes) {
    const scopeMeta = resolveScopeMeta(scope);
    if (!scopeMeta.lunaApplicable) continue;
    aggregate.lunaScopesExpected += 1;
    const result = await runLunaForScope(scope, options);
    if (result.skipped) continue;
    aggregate.lunaScopesProcessed += 1;
    aggregate.lunaCalls += result.stats?.realCalls || 0;
    aggregate.lunaSuccessfulBatches += result.stats?.batches || 0;
    aggregate.lunaRetryAttempts += result.stats?.retries || 0;
    if (!result.ok) aggregate.failures.push({ scopeId: result.scopeId, reason: result.reason });
    results.push(result);
  }

  return {
    pass: aggregate.failures.length === 0,
    results,
    stats: aggregate,
  };
}

module.exports = {
  adapterKey,
  runLunaForScope,
  runLunaForScopes,
  ADAPTER_BY_SCOPE,
};

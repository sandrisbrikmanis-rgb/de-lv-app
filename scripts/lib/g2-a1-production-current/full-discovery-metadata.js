#!/usr/bin/env node
"use strict";

const { readMasterVersion } = require("./preflight");
const { verifyEmbeddedLanguageRegistry } = require("../official-language-sources-registry");
const { ROOT } = require("../audit-common");
const {
  AI_AUDIT_ROLE,
  AUDIT_MODE_FULL_DISCOVERY,
  SCOPE_LABEL,
  MASTER_AUTHORIZED_MIN,
} = require("./constants");
const { isApiKeyConfigured, DEFAULT_MODEL } = require("../luna-phase1-openai");

function buildFullDiscoveryMetadata(options = {}) {
  const registry = verifyEmbeddedLanguageRegistry(ROOT);
  const executeLuna = options.executeLuna === true;
  const modelUsed = executeLuna && isApiKeyConfigured() ? DEFAULT_MODEL : null;

  return {
    AUDIT_EXECUTOR: AI_AUDIT_ROLE,
    MODEL_IF_USED: modelUsed,
    MODEL_VERSION: modelUsed,
    PROMPT_VERSION: executeLuna ? "g2-a1-production-current-full-discovery-v1" : null,
    LANGUAGE_AUTHORITY_REGISTRY_VERSION: registry.registryDocument,
    SOURCE_ACCESS_DATE: new Date().toISOString().slice(0, 10),
    DATASET_PRODUCTION_SHA: options.datasetProductionSha || null,
    AUDIT_BASELINE_SHA: options.auditBaselineSha || null,
    SCOPE: SCOPE_LABEL,
    COVERAGE: options.coverageSummary || null,
    AUDIT_DATE: new Date().toISOString(),
    AUDIT_MODE: AUDIT_MODE_FULL_DISCOVERY,
    MASTER_VERSION: readMasterVersion(),
    MASTER_AUTHORIZED_MIN,
    originMainSha: options.originMainSha || null,
    headSha: options.headSha || null,
    linguisticPassExecuted: executeLuna,
  };
}

module.exports = {
  buildFullDiscoveryMetadata,
};

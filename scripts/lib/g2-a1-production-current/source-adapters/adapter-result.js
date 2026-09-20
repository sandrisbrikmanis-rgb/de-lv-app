#!/usr/bin/env node
"use strict";

const { SOURCE_ACCESS_OUTCOME, ENTRY_PIPELINE_STAGE } = require("../official-source-access-constants");

function baseResult(partial) {
  return {
    outcome: SOURCE_ACCESS_OUTCOME.SOURCE_ADAPTER_NOT_IMPLEMENTED,
    pipelineStage: null,
    authorityName: null,
    adapterId: null,
    adapterVersion: null,
    searchQuery: null,
    originalCurrent: null,
    lookupTerm: null,
    normalizedHeadword: null,
    normalizationReason: null,
    requestedUrl: null,
    finalUrl: null,
    entryUrl: null,
    finalDomain: null,
    entryHeadwordOrRule: null,
    entryOrRule: null,
    evidenceFragment: null,
    pageTitle: null,
    accessedAt: null,
    contentSha256: null,
    redirectChain: [],
    httpStatus: null,
    role: null,
    language: null,
    cardId: null,
    fieldPath: null,
    error: null,
    ...partial,
  };
}

function validatedEntry(ctx) {
  return baseResult({
    outcome: SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED,
    pipelineStage: ENTRY_PIPELINE_STAGE.ENTRY_EVIDENCE_VALIDATED,
    ...ctx,
  });
}

function notFound(ctx) {
  return baseResult({
    outcome: SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_NOT_FOUND,
    pipelineStage: ENTRY_PIPELINE_STAGE.PAGE_FETCHED,
    ...ctx,
  });
}

function notImplemented(ctx) {
  return baseResult({
    outcome: SOURCE_ACCESS_OUTCOME.SOURCE_ADAPTER_NOT_IMPLEMENTED,
    ...ctx,
  });
}

function fromPageFailure(page, ctx) {
  return baseResult({
    outcome: page.outcome,
    requestedUrl: page.requestedUrl,
    finalUrl: page.finalUrl,
    redirectChain: page.redirectChain,
    accessedAt: page.accessedAt,
    finalDomain: page.finalDomain,
    httpStatus: page.httpStatus,
    contentSha256: page.contentSha256,
    pageTitle: page.pageTitle,
    error: page.error,
    pipelineStage: ENTRY_PIPELINE_STAGE.PAGE_FETCHED,
    ...ctx,
  });
}

module.exports = {
  baseResult,
  validatedEntry,
  notFound,
  notImplemented,
  fromPageFailure,
};

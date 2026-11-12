#!/usr/bin/env node
"use strict";

const { bindRegistryAuthorities, loadRegistryRows } = require("../g2-a1-production-current/registry-bindings");
const { loadBilingualAuditRegistry } = require("./bilingual-catalog");

function loadCombinedSourceRegistry() {
  const official = loadRegistryRows();
  const bilingual = loadBilingualAuditRegistry();
  return {
    pass: official.pass && bilingual.pass,
    official,
    bilingual,
    errors: [...(official.pass ? [] : ["OFFICIAL_REGISTRY_FAIL"]), ...bilingual.errors],
  };
}

function officialBindingForLang(lang) {
  return bindRegistryAuthorities(lang);
}

module.exports = {
  loadCombinedSourceRegistry,
  officialBindingForLang,
};

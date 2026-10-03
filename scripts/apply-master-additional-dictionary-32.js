#!/usr/bin/env node
"use strict";

const { applyAdditionalDictionariesToStructuredJson } = require("./lib/g2-a1-production-current/master-additional-dictionary-32");

function main() {
  const result = applyAdditionalDictionariesToStructuredJson();
  console.log(JSON.stringify({ pass: true, ...result }, null, 2));
}

main();

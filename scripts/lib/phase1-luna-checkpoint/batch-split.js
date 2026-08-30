#!/usr/bin/env node
"use strict";

function splitObjectsIntoBatches(objects, batchSize) {
  const batches = [];
  for (let i = 0; i < objects.length; i += batchSize) {
    batches.push(objects.slice(i, i + batchSize));
  }
  return batches;
}

module.exports = {
  splitObjectsIntoBatches,
};

#!/usr/bin/env node
"use strict";

const { createLunaAdapter } = require("./luna-adapter-runner");
const { getBatchLimit } = require("./luna-phase1-core");
const { loadG3LessonObjects } = require("./luna-object-loaders");

function serializeG3Lesson(obj) {
  return { id: obj.id, lessonKey: obj.lessonKey, native: obj.native, productionFile: obj.productionFile };
}

async function auditG3Lessons({ lang, scopeId, transport, options = {} }) {
  const id = scopeId || `g3/courseLessons/${lang}`;
  const adapter = createLunaAdapter({
    name: "g3-lessons",
    loadObjects: () => loadG3LessonObjects(lang),
    getId: (obj) => obj.id,
    serialize: serializeG3Lesson,
    batchSize: getBatchLimit("g3", "courseLessons"),
  });
  return adapter(id, { transport, ...options });
}

module.exports = { auditG3Lessons, serializeG3Lesson };

#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const CONFIDENCE = new Set(["high", "medium", "low"]);

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;
  const source = text.charCodeAt(0) === 0xfeff ? text.slice(1) : text;
  for (let index = 0; index < source.length; index += 1) {
    const char = source[index];
    if (quoted) {
      if (char === '"') {
        if (source[index + 1] === '"') {
          field += '"';
          index += 1;
        } else {
          quoted = false;
        }
      } else {
        field += char;
      }
      continue;
    }
    if (char === '"') {
      quoted = true;
    } else if (char === ",") {
      row.push(field);
      field = "";
    } else if (char === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else if (char !== "\r") {
      field += char;
    }
  }
  if (field.length || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows.filter((item) => item.some((cell) => cell !== ""));
}

function rowsToObjects(text) {
  const rows = parseCsv(text);
  if (!rows.length) return [];
  const header = rows[0].map((cell) => cell.trim());
  return rows.slice(1).map((row) => {
    const object = {};
    header.forEach((key, index) => {
      object[key] = row[index] === undefined ? "" : row[index];
    });
    return object;
  });
}

function batchIds(text) {
  return text
    .split(/\r?\n/)
    .filter((line) => line.startsWith("| cs-"))
    .map((line) => line.split("|")[1].trim());
}

function meaningAllowed(meaning, k) {
  if (meaning === "NONE" || meaning === "UNSURE") return true;
  if (!/^[1-9][0-9]*$/.test(meaning)) return false;
  return Number(meaning) <= k;
}

function indexAnswers(objects, ids, kById, label) {
  const grouped = new Map();
  let duplicate = 0;
  let freeText = 0;
  let unknownId = 0;
  objects.forEach((object) => {
    const id = (object.id || "").trim();
    if (!id) {
      freeText += 1;
      return;
    }
    if (!grouped.has(id)) grouped.set(id, []);
    grouped.get(id).push(object);
  });
  const accepted = new Map();
  ids.forEach((id) => {
    const found = grouped.get(id) || [];
    if (found.length !== 1) {
      if (found.length > 1) duplicate += found.length;
      return;
    }
    const object = found[0];
    const meaning = (object.meaning || "").trim();
    const confidence = (object.confidence || "").trim();
    const k = kById.get(id);
    if (!CONFIDENCE.has(confidence) || !meaningAllowed(meaning, k)) {
      freeText += 1;
      return;
    }
    accepted.set(id, { meaning, confidence, source: label });
  });
  grouped.forEach((_value, id) => {
    if (!ids.includes(id)) unknownId += 1;
  });
  const missing = ids.filter((id) => !accepted.has(id) && (grouped.get(id) || []).length === 0);
  return { accepted, duplicate, freeText, unknownId, missing };
}

function pairStatus(left, right) {
  if (!left || !right) return "MISSING";
  if (left.confidence === "low" || right.confidence === "low" || left.meaning === "UNSURE" || right.meaning === "UNSURE") {
    return "AI_UNSURE";
  }
  if (left.meaning === right.meaning) {
    return left.meaning === "NONE" ? "AI_CONSENSUS_WRONG" : "AI_CONSENSUS_OK";
  }
  return "AI_DISAGREE";
}

function recordStatus(record, results) {
  if (results.some((item) => item.status === "AI_CONSENSUS_WRONG")) return "EXTRA_WORD";
  const k = Number(record.k);
  const dictionaryLike = Number(record.dictionary_words) + Number(record.recheck_words);
  if (k >= 2 && dictionaryLike >= 1) return "COVERAGE_UNKNOWN";
  const covered = new Map();
  results
    .filter((item) => item.status === "AI_CONSENSUS_OK")
    .forEach((item) => {
      const number = Number(item.meaning);
      covered.set(number, (covered.get(number) || 0) + 1);
    });
  if (k === 1 && dictionaryLike >= 1) {
    covered.set(1, (covered.get(1) || 0) + dictionaryLike);
  }
  let multiple = false;
  let missing = false;
  for (let number = 1; number <= k; number += 1) {
    const count = covered.get(number) || 0;
    if (count === 0) missing = true;
    if (count >= 2) multiple = true;
  }
  const pending = results.some((item) => item.status === "AI_DISAGREE" || item.status === "AI_UNSURE" || item.status === "MISSING");
  if (multiple) return "MULTIPLE_WORDS_PER_MEANING";
  if (missing && pending) return "REVIEW";
  if (missing) return "MISSING_MEANING";
  if (pending) return "REVIEW";
  return "COMPLETE";
}

function percent(part, whole) {
  if (!whole) return "0.00";
  return ((100 * part) / whole).toFixed(2);
}

function selfTest() {
  const kById = new Map([
    ["cs-000001", 1],
    ["cs-000002", 1],
    ["cs-000003", 2],
    ["cs-000004", 1],
    ["cs-000005", 1],
    ["cs-000006", 1],
    ["cs-000007", 1],
    ["cs-000008", 1],
  ]);
  const ids = [...kById.keys()];
  const ai1 = [
    { id: "cs-000001", meaning: "1", confidence: "high" },
    { id: "cs-000002", meaning: "NONE", confidence: "high" },
    { id: "cs-000003", meaning: "1", confidence: "high" },
    { id: "cs-000004", meaning: "UNSURE", confidence: "medium" },
    { id: "cs-000005", meaning: "1", confidence: "low" },
    { id: "cs-000006", meaning: "jā, pirmajai", confidence: "high" },
    { id: "cs-000007", meaning: "1", confidence: "high" },
    { id: "cs-000007", meaning: "2", confidence: "high" },
    { id: "cs-000009", meaning: "1", confidence: "high" },
  ];
  const ai2 = [
    { id: "cs-000001", meaning: "1", confidence: "medium" },
    { id: "cs-000002", meaning: "NONE", confidence: "medium" },
    { id: "cs-000003", meaning: "2", confidence: "high" },
    { id: "cs-000004", meaning: "1", confidence: "high" },
    { id: "cs-000005", meaning: "1", confidence: "high" },
    { id: "cs-000006", meaning: "1", confidence: "high" },
  ];
  const left = indexAnswers(ai1, ids, kById, "ai1");
  const right = indexAnswers(ai2, ids, kById, "ai2");
  if (left.freeText !== 1) throw new Error(`free text ${left.freeText}`);
  if (left.duplicate !== 2) throw new Error(`duplicate ${left.duplicate}`);
  if (left.unknownId !== 1) throw new Error(`unknown ${left.unknownId}`);
  if (right.missing.length !== 2 || !right.missing.includes("cs-000008")) throw new Error("missing id");
  const statuses = ids.map((id) => pairStatus(left.accepted.get(id), right.accepted.get(id)));
  const expected = ["AI_CONSENSUS_OK", "AI_CONSENSUS_WRONG", "AI_DISAGREE", "AI_UNSURE", "AI_UNSURE", "MISSING", "MISSING", "MISSING"];
  expected.forEach((status, index) => {
    if (statuses[index] !== status) throw new Error(`status ${index} ${statuses[index]} != ${status}`);
  });
  const complete = recordStatus({ k: 1, dictionary_words: 0, recheck_words: 0 }, [{ status: "AI_CONSENSUS_OK", meaning: "1" }]);
  const extra = recordStatus({ k: 1, dictionary_words: 0, recheck_words: 0 }, [{ status: "AI_CONSENSUS_WRONG", meaning: "NONE" }]);
  const coverage = recordStatus({ k: 2, dictionary_words: 1, recheck_words: 0 }, [{ status: "AI_CONSENSUS_OK", meaning: "1" }]);
  const multiple = recordStatus({ k: 1, dictionary_words: 0, recheck_words: 0 }, [
    { status: "AI_CONSENSUS_OK", meaning: "1" },
    { status: "AI_CONSENSUS_OK", meaning: "1" },
  ]);
  const missingMeaning = recordStatus({ k: 2, dictionary_words: 0, recheck_words: 0 }, [{ status: "AI_CONSENSUS_OK", meaning: "1" }]);
  const dictionaryComplete = recordStatus({ k: 1, dictionary_words: 1, recheck_words: 0 }, []);
  const review = recordStatus({ k: 2, dictionary_words: 0, recheck_words: 0 }, [{ status: "AI_DISAGREE", meaning: "" }]);
  if (complete !== "COMPLETE") throw new Error(complete);
  if (extra !== "EXTRA_WORD") throw new Error(extra);
  if (coverage !== "COVERAGE_UNKNOWN") throw new Error(coverage);
  if (multiple !== "MULTIPLE_WORDS_PER_MEANING") throw new Error(multiple);
  if (missingMeaning !== "MISSING_MEANING") throw new Error(missingMeaning);
  if (dictionaryComplete !== "COMPLETE") throw new Error(dictionaryComplete);
  if (review !== "REVIEW") throw new Error(review);
  console.log("SELF_TEST_PASS");
}

function readDirCsv(directory) {
  if (!fs.existsSync(directory)) return null;
  const files = fs.readdirSync(directory).filter((name) => name.endsWith(".csv")).sort();
  const byName = new Map();
  files.forEach((name) => {
    byName.set(name, rowsToObjects(fs.readFileSync(path.join(directory, name), "utf8")));
  });
  return byName;
}

function main() {
  selfTest();
  const root = path.resolve(__dirname, "..");
  const report = path.join(root, "reports", "ai-check-cs");
  const batchDir = path.join(report, "batches");
  if (!fs.existsSync(batchDir)) return;
  const batchNames = fs.readdirSync(batchDir).filter((name) => /^batch-\d+\.md$/.test(name)).sort();
  const pairs = rowsToObjects(fs.readFileSync(path.join(report, "pairs.csv"), "utf8"));
  const controls = rowsToObjects(fs.readFileSync(path.join(report, "control-key.csv"), "utf8"));
  const records = rowsToObjects(fs.readFileSync(path.join(report, "records.csv"), "utf8"));
  const kById = new Map();
  const kindById = new Map();
  const recordKeyById = new Map();
  pairs.forEach((pair) => {
    kById.set(pair.id, Number(pair.k));
    kindById.set(pair.id, "REAL");
    recordKeyById.set(pair.id, `${pair.level}:${pair.index}`);
  });
  controls.forEach((control) => {
    const record = records.find((item) => item.level === control.level && String(item.index) === String(control.index));
    kById.set(control.id, record ? Number(record.k) : 1);
    kindById.set(control.id, control.control_type);
  });
  const levelById = new Map();
  pairs.forEach((pair) => levelById.set(pair.id, pair.level));
  controls.forEach((control) => levelById.set(control.id, control.level));
  const ai1 = readDirCsv(path.join(report, "ai1"));
  const ai2 = readDirCsv(path.join(report, "ai2"));
  const missingBatches = [];
  batchNames.forEach((name) => {
    const csvName = name.replace(/\.md$/, ".csv");
    if (!ai1 || !ai1.has(csvName) || !ai2 || !ai2.has(csvName)) missingBatches.push(name);
  });
  if (missingBatches.length) {
    console.log(`MISSING_BATCHES ${missingBatches.length}`);
    missingBatches.forEach((name) => console.log(name));
    return;
  }
  const rejection = { duplicate: 0, freeText: 0, unknownId: 0, missing: 0 };
  const pairRows = [];
  batchNames.forEach((name) => {
    const ids = batchIds(fs.readFileSync(path.join(batchDir, name), "utf8"));
    const csvName = name.replace(/\.md$/, ".csv");
    const left = indexAnswers(ai1.get(csvName), ids, kById, "ai1");
    const right = indexAnswers(ai2.get(csvName), ids, kById, "ai2");
    rejection.duplicate += left.duplicate + right.duplicate;
    rejection.freeText += left.freeText + right.freeText;
    rejection.unknownId += left.unknownId + right.unknownId;
    rejection.missing += left.missing.length + right.missing.length;
    ids.forEach((id) => {
      const status = pairStatus(left.accepted.get(id), right.accepted.get(id));
      const agreed = left.accepted.has(id) && right.accepted.has(id) && left.accepted.get(id).meaning === right.accepted.get(id).meaning;
      pairRows.push({
        id,
        status,
        agreed,
        kind: kindById.get(id) || "",
        level: levelById.get(id) || "",
        meaning: status === "AI_CONSENSUS_OK" ? left.accepted.get(id).meaning : "",
      });
    });
  });
  const byRecord = new Map();
  pairRows.filter((item) => item.kind === "REAL").forEach((item) => {
    const key = recordKeyById.get(item.id);
    if (!byRecord.has(key)) byRecord.set(key, []);
    byRecord.get(key).push(item);
  });
  const recordCounts = {};
  records.forEach((record) => {
    const key = `${record.level}:${record.index}`;
    const status = recordStatus(record, byRecord.get(key) || []);
    recordCounts[status] = (recordCounts[status] || 0) + 1;
  });
  const levels = ["a1", "a2", "b1", "b2", "c1", "c2"];
  function rate(list, status) {
    const hit = list.filter((item) => item.status === status).length;
    return `${hit}/${list.length} ${percent(hit, list.length)}%`;
  }
  const positives = pairRows.filter((item) => item.kind === "POSITIVE");
  const negatives = pairRows.filter((item) => item.kind === "NEGATIVE");
  const real = pairRows.filter((item) => item.kind === "REAL");
  console.log(`REJECT_DUPLICATE ${rejection.duplicate}`);
  console.log(`REJECT_FREE_TEXT ${rejection.freeText}`);
  console.log(`REJECT_UNKNOWN_ID ${rejection.unknownId}`);
  console.log(`REJECT_MISSING_ID ${rejection.missing}`);
  console.log(`POSITIVE_AI_CONSENSUS_OK ${rate(positives, "AI_CONSENSUS_OK")}`);
  console.log(`NEGATIVE_AI_CONSENSUS_OK ${rate(negatives, "AI_CONSENSUS_OK")}`);
  levels.forEach((level) => {
    const subset = real.filter((item) => item.level === level);
    const agreed = subset.filter((item) => item.agreed).length;
    console.log(`LEVEL ${level} PAIRS ${subset.length} AI_DISAGREE ${rate(subset, "AI_DISAGREE")} AI_UNSURE ${rate(subset, "AI_UNSURE")} AGREEMENT ${agreed}/${subset.length} ${percent(agreed, subset.length)}%`);
  });
  const agreedAll = pairRows.filter((item) => item.agreed).length;
  console.log(`AGREEMENT ${agreedAll}/${pairRows.length} ${percent(agreedAll, pairRows.length)}%`);
  Object.keys(recordCounts).sort().forEach((status) => {
    console.log(`RECORD ${status} ${recordCounts[status]}`);
  });
}

main();

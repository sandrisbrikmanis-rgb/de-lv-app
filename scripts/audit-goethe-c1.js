/**
 * Audit & fix C1 vocabulary against Goethe/CEFR C1 standards.
 * Usage: node scripts/audit-goethe-c1.js [--fix]
 */
const { runAudit } = require("./audit-goethe-c1-c2-shared");

const FIX = process.argv.includes("--fix");
const count = runAudit({ level: "C1", file: "data/c1.js", key: "C1_WORDS", fix: FIX });
process.exit(count > 0 && !FIX ? 1 : 0);

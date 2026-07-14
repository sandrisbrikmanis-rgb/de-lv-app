/**
 * Audit & fix C2 vocabulary against Goethe/CEFR C2 standards.
 * Usage: node scripts/audit-goethe-c2.js [--fix]
 */
const { runAudit } = require("./audit-goethe-c1-c2-shared");

const FIX = process.argv.includes("--fix");
const count = runAudit({ level: "C2", file: "data/c2.js", key: "C2_WORDS", fix: FIX });
process.exit(count > 0 && !FIX ? 1 : 0);

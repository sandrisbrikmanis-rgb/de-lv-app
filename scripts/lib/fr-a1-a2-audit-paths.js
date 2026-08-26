const path = require("path");
const { ROOT } = require("./audit-common");

const TEMP_DIR = path.join(ROOT, "reports", "temp", "fr-a1-a2-full-audit-luna");
const LUNA_JSON = path.join(ROOT, "reports", "temp", "fr-a1-a2-linguistic-audit.json");
const PROGRESS_FILE = path.join(ROOT, "scripts", ".fr-a1-a2-luna-progress.json");

module.exports = { TEMP_DIR, LUNA_JSON, PROGRESS_FILE };

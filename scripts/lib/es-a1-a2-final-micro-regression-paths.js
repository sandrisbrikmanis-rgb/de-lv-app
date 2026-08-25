const path = require("path");
const { ROOT } = require("./audit-common");

const TEMP_DIR = path.join(ROOT, "reports", "temp", "es-a1-a2-final-micro-regression-luna");
const LUNA_JSON = path.join(ROOT, "reports", "temp", "es-a1-a2-final-micro-regression-luna-raw.json");
const SCOPE_JSON = path.join(ROOT, "reports", "temp", "es-a1-a2-final-micro-regression-scope.json");
const PROGRESS_FILE = path.join(ROOT, "scripts", ".es-a1-a2-final-micro-regression-luna-progress.json");

module.exports = {
  TEMP_DIR,
  LUNA_JSON,
  SCOPE_JSON,
  PROGRESS_FILE,
};

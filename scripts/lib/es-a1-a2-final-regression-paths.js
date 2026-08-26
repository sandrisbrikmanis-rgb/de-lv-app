const path = require("path");
const { ROOT } = require("./audit-common");

const IS_FINAL = process.env.ES_A1A2_FINAL_REGRESSION === "1";

const TEMP_DIR = IS_FINAL
  ? path.join(ROOT, "reports", "temp", "es-a1-a2-final-regression-luna")
  : path.join(ROOT, "reports", "temp", "es-a1-a2-full-audit-luna");

const LUNA_JSON = IS_FINAL
  ? path.join(ROOT, "reports", "temp", "es-a1-a2-final-regression-luna-raw.json")
  : path.join(ROOT, "reports", "temp", "es-a1-a2-linguistic-audit.json");

const PROGRESS_FILE = IS_FINAL
  ? path.join(ROOT, "scripts", ".es-a1-a2-final-regression-luna-progress.json")
  : path.join(ROOT, "scripts", ".es-a1-a2-luna-progress.json");

module.exports = {
  IS_FINAL,
  TEMP_DIR,
  LUNA_JSON,
  PROGRESS_FILE,
};

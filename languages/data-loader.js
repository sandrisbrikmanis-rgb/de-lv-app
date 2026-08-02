(function () {
  const loadedManifests = new Map();
  const loadedDatasetScripts = new Set();
  const DEFAULT_TARGET_LANGUAGE = "de";
  const DEFAULT_FALLBACK_NATIVE = window.AppDatasetRegistry?.defaultFallbackNative || "lv";

  function getTargetLanguage() {
    return window.AppLanguageContext?.getTargetLanguage?.() || DEFAULT_TARGET_LANGUAGE;
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const existing = document.querySelector(`script[data-lang-data="${src}"]`);
      if (existing) {
        resolve();
        return;
      }
      const script = document.createElement("script");
      script.src = src;
      script.dataset.langData = src;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Failed to load dataset script: ${src}`));
      document.head.appendChild(script);
    });
  }

  async function pathExists(url) {
    if (!url) return false;
    try {
      const response = await fetch(url, { method: "HEAD", cache: "no-store" });
      return response.ok;
    } catch (error) {
      return false;
    }
  }

  async function ensureManifest(nativeLanguage) {
    const entry = window.AppLanguageRegistry.get(nativeLanguage);
    if (!entry) {
      return null;
    }

    if (loadedManifests.has(nativeLanguage)) {
      return loadedManifests.get(nativeLanguage);
    }

    const manifestPath = entry.dataManifestPath;
    if (manifestPath) {
      await loadScript(manifestPath);
    }

    const manifest = window.LANGUAGE_DATA_MANIFEST;
    if (!manifest || manifest.nativeLanguage !== nativeLanguage) {
      const fallbackManifest = window.AppDatasetRegistry.buildManifest(nativeLanguage, {
        targetLanguage: getTargetLanguage(),
        dataStatus: nativeLanguage === DEFAULT_FALLBACK_NATIVE ? "complete" : "fallback"
      });
      loadedManifests.set(nativeLanguage, fallbackManifest);
      return fallbackManifest;
    }

    loadedManifests.set(nativeLanguage, manifest);
    return manifest;
  }

  function validateTargetLanguage(targetLanguage) {
    if (targetLanguage !== DEFAULT_TARGET_LANGUAGE) {
      return {
        ok: false,
        error: `Unsupported targetLanguage: ${targetLanguage}. This app only supports "${DEFAULT_TARGET_LANGUAGE}".`
      };
    }
    return { ok: true };
  }

  function validateDataset(dataset) {
    if (!window.AppDatasetRegistry.isSupportedDataset(dataset)) {
      return {
        ok: false,
        error: `Unsupported dataset: ${dataset}`
      };
    }
    return { ok: true };
  }

  function resolveNativeLanguage(nativeLanguage) {
    if (window.AppLanguageRegistry.isValid(nativeLanguage)) {
      return nativeLanguage;
    }
    return window.AppLanguageRegistry.defaultCode || DEFAULT_FALLBACK_NATIVE;
  }

  async function resolveDatasetPath(manifest, dataset) {
    const primaryPath = manifest.datasets?.[dataset] || null;
    const fallbackPath = manifest.fallbackDatasets?.[dataset]
      || window.AppDatasetRegistry.getLvPath(dataset);
    const primaryExists = primaryPath ? await pathExists(primaryPath) : false;

    if (primaryExists) {
      return {
        path: primaryPath,
        dataNativeLanguage: manifest.nativeLanguage,
        fallbackUsed: false,
        primaryPath,
        primaryExists: true
      };
    }

    if (!fallbackPath) {
      return {
        path: null,
        dataNativeLanguage: null,
        fallbackUsed: false,
        primaryPath,
        primaryExists: false,
        error: `Dataset "${dataset}" is not configured for nativeLanguage "${manifest.nativeLanguage}".`
      };
    }

    if (!(await pathExists(fallbackPath))) {
      return {
        path: null,
        dataNativeLanguage: manifest.fallbackNativeLanguage || DEFAULT_FALLBACK_NATIVE,
        fallbackUsed: true,
        primaryPath,
        primaryExists: false,
        error: `Dataset file not found for "${dataset}" (primary and fallback missing).`
      };
    }

    return {
      path: fallbackPath,
      dataNativeLanguage: manifest.fallbackNativeLanguage || DEFAULT_FALLBACK_NATIVE,
      fallbackUsed: true,
      primaryPath,
      primaryExists: false
    };
  }

  const REQUIRED_NATIVE_DATASETS = ["a1", "a2"];
  let lastLoadReport = null;

  function buildLoadReport(nativeLanguage, targetLanguage, manifest) {
    const registryEntry = window.AppLanguageRegistry.get(nativeLanguage);
    return {
      nativeLanguage,
      targetLanguage,
      manifestPath: registryEntry?.dataManifestPath || null,
      dataStatus: manifest?.dataStatus || "fallback",
      datasets: {},
      errors: [],
      warnings: [],
      a1Path: null,
      a2Path: null,
      a1Count: Array.isArray(window.A1_WORDS) ? window.A1_WORDS.length : 0,
      a2Count: Array.isArray(window.A2_WORDS) ? window.A2_WORDS.length : 0,
      firstA1Native: Array.isArray(window.A1_WORDS) && window.A1_WORDS[0] ? window.A1_WORDS[0].lv : null
    };
  }

  async function loadNativeLanguageData(nativeLanguageCode) {
    const requestedNativeLanguage = nativeLanguageCode;
    const nativeLanguage = resolveNativeLanguage(nativeLanguageCode);
    const targetLanguage = getTargetLanguage();
    const manifest = await ensureManifest(nativeLanguage);
    const report = buildLoadReport(nativeLanguage, targetLanguage, manifest);

    if (!manifest) {
      const error = `No manifest available for nativeLanguage "${nativeLanguage}".`;
      report.errors.push(error);
      console.error(`[AppDataLoader] ${error}`);
      lastLoadReport = report;
      window.__APP_DATA_LOAD_REPORT__ = report;
      return report;
    }

    const datasets = window.AppDatasetRegistry.supportedDatasets();
    for (const dataset of datasets) {
      const resolved = await resolveDatasetPath(manifest, dataset);
      if (!resolved.path) {
        const error = resolved.error || `Dataset "${dataset}" could not be resolved for "${nativeLanguage}".`;
        report.errors.push(error);
        console.error(`[AppDataLoader] ${error}`);
        continue;
      }

      try {
        await loadScript(resolved.path);
        loadedDatasetScripts.add(resolved.path);
        if ((nativeLanguage === "lt" || nativeLanguage === "uk" || nativeLanguage === "ru" || nativeLanguage === "sl" || nativeLanguage === "bs" || nativeLanguage === "sr" || nativeLanguage === "hr" || nativeLanguage === "sk" || nativeLanguage === "cs" || nativeLanguage === "fi" || nativeLanguage === "sv" || nativeLanguage === "nb" || nativeLanguage === "nn" || nativeLanguage === "da" || nativeLanguage === "nl" || nativeLanguage === "lb" || nativeLanguage === "fr" || nativeLanguage === "it" || nativeLanguage === "es") && dataset === "courseLessons") {
          const trainingCardsPath = `./data/${nativeLanguage}/courseTrainingCards.js`;
          if (await pathExists(trainingCardsPath)) {
            await loadScript(trainingCardsPath);
            loadedDatasetScripts.add(trainingCardsPath);
          }
        }
      } catch (error) {
        const message = `Failed to load dataset "${dataset}" from ${resolved.path}: ${error.message}`;
        report.errors.push(message);
        console.error(`[AppDataLoader] ${message}`);
        if (REQUIRED_NATIVE_DATASETS.includes(dataset) && resolved.dataNativeLanguage === nativeLanguage) {
          console.error(`[AppDataLoader] Required native dataset "${dataset}" for "${nativeLanguage}" did not load.`);
        }
        continue;
      }

      if (resolved.fallbackUsed) {
        const warning = `Using fallback dataset for "${dataset}" (${nativeLanguage}): ${resolved.path}`;
        report.warnings.push(warning);
        console.warn(`[AppDataLoader] ${warning}`);
      }

      report.datasets[dataset] = {
        path: resolved.path,
        globalName: window.AppDatasetRegistry.getGlobalName(dataset),
        dataNativeLanguage: resolved.dataNativeLanguage,
        fallbackUsed: resolved.fallbackUsed,
        primaryPath: resolved.primaryPath || null,
        primaryExists: Boolean(resolved.primaryExists)
      };

      if (dataset === "a1") report.a1Path = resolved.path;
      if (dataset === "a2") report.a2Path = resolved.path;
    }

    report.a1Count = Array.isArray(window.A1_WORDS) ? window.A1_WORDS.length : 0;
    report.a2Count = Array.isArray(window.A2_WORDS) ? window.A2_WORDS.length : 0;
    report.firstA1Native = Array.isArray(window.A1_WORDS) && window.A1_WORDS[0] ? window.A1_WORDS[0].lv : null;

    if (nativeLanguage !== DEFAULT_FALLBACK_NATIVE) {
      for (const dataset of REQUIRED_NATIVE_DATASETS) {
        const entry = report.datasets[dataset];
        if (entry?.primaryExists) {
          if (!entry || entry.fallbackUsed || entry.path !== entry.primaryPath) {
            const error = `Required native dataset "${dataset}" for "${nativeLanguage}" must load from ${entry.primaryPath}, but loaded ${entry?.path || "nothing"}.`;
            report.errors.push(error);
            console.error(`[AppDataLoader] ${error}`);
          }
        }
      }
    }

    lastLoadReport = report;
    window.__APP_DATA_LOAD_REPORT__ = report;
    console.info("[AppDataLoader] Active language data loaded", {
      nativeLanguage: report.nativeLanguage,
      manifestPath: report.manifestPath,
      a1Path: report.a1Path,
      a2Path: report.a2Path,
      a1Count: report.a1Count,
      a2Count: report.a2Count,
      firstA1Native: report.firstA1Native,
      fallbackWarnings: report.warnings.length,
      errors: report.errors.length
    });
    return report;
  }

  window.AppDataLoader = {
    getTargetLanguage,
    getLastLoadReport() {
      return lastLoadReport;
    },
    getSupportedDatasets() {
      return window.AppDatasetRegistry.supportedDatasets();
    },
    async init(nativeLanguageCode) {
      const requestedNativeLanguage = nativeLanguageCode;
      const nativeLanguage = resolveNativeLanguage(nativeLanguageCode);
      const targetLanguage = getTargetLanguage();
      const manifest = await ensureManifest(nativeLanguage);

      return {
        nativeLanguage,
        targetLanguage,
        requestedNativeLanguage,
        dataNativeLanguage: manifest?.dataStatus === "complete" ? nativeLanguage : (manifest?.fallbackNativeLanguage || DEFAULT_FALLBACK_NATIVE),
        fallbackUsed: manifest?.dataStatus === "fallback",
        dataStatus: manifest?.dataStatus || "fallback",
        manifest
      };
    },
    loadNativeLanguageData,
    async loadDataset({ nativeLanguage, targetLanguage, dataset, loadScript: shouldLoadScript = false }) {
      const targetCheck = validateTargetLanguage(targetLanguage);
      if (!targetCheck.ok) {
        return {
          ok: false,
          requestedNativeLanguage: nativeLanguage,
          targetLanguage,
          dataset,
          error: targetCheck.error
        };
      }

      const datasetCheck = validateDataset(dataset);
      if (!datasetCheck.ok) {
        return {
          ok: false,
          requestedNativeLanguage: nativeLanguage,
          targetLanguage,
          dataset,
          error: datasetCheck.error
        };
      }

      const resolvedNativeLanguage = resolveNativeLanguage(nativeLanguage);
      const manifest = await ensureManifest(resolvedNativeLanguage);
      if (!manifest) {
        return {
          ok: false,
          requestedNativeLanguage: nativeLanguage,
          targetLanguage,
          dataset,
          error: `No manifest available for nativeLanguage "${nativeLanguage}".`
        };
      }

      const resolved = await resolveDatasetPath(manifest, dataset);
      if (!resolved.path) {
        return {
          ok: false,
          requestedNativeLanguage: nativeLanguage,
          targetLanguage,
          dataset,
          dataNativeLanguage: resolved.dataNativeLanguage,
          fallbackUsed: resolved.fallbackUsed,
          error: resolved.error
        };
      }

      if (shouldLoadScript && !loadedDatasetScripts.has(resolved.path)) {
        await loadScript(resolved.path);
        loadedDatasetScripts.add(resolved.path);
      }

      return {
        ok: true,
        requestedNativeLanguage: nativeLanguage,
        targetLanguage,
        dataset,
        dataNativeLanguage: resolved.dataNativeLanguage,
        fallbackUsed: resolved.fallbackUsed,
        path: resolved.path,
        globalName: window.AppDatasetRegistry.getGlobalName(dataset),
        dataStatus: manifest.dataStatus,
        dynamicallyLoaded: Boolean(shouldLoadScript)
      };
    },
    getManifest(nativeLanguage) {
      return loadedManifests.get(nativeLanguage) || window.LANGUAGE_DATA_MANIFEST || null;
    },
    getProgressNamespace(nativeLanguage, targetLanguage = getTargetLanguage()) {
      return `${nativeLanguage}:${targetLanguage}`;
    },
    getProgressStorageKey(baseKey, nativeLanguage, targetLanguage = getTargetLanguage()) {
      return `${baseKey}:${nativeLanguage}:${targetLanguage}`;
    }
  };
})();

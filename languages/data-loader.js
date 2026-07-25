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

    if (primaryPath && await pathExists(primaryPath)) {
      return {
        path: primaryPath,
        dataNativeLanguage: manifest.nativeLanguage,
        fallbackUsed: false
      };
    }

    if (!fallbackPath) {
      return {
        path: null,
        dataNativeLanguage: null,
        fallbackUsed: false,
        error: `Dataset "${dataset}" is not configured for nativeLanguage "${manifest.nativeLanguage}".`
      };
    }

    if (!(await pathExists(fallbackPath))) {
      return {
        path: null,
        dataNativeLanguage: manifest.fallbackNativeLanguage || DEFAULT_FALLBACK_NATIVE,
        fallbackUsed: true,
        error: `Dataset file not found for "${dataset}" (primary and fallback missing).`
      };
    }

    return {
      path: fallbackPath,
      dataNativeLanguage: manifest.fallbackNativeLanguage || DEFAULT_FALLBACK_NATIVE,
      fallbackUsed: true
    };
  }

  window.AppDataLoader = {
    getTargetLanguage,
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

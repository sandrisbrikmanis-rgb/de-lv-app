(function () {
  const loadedManifests = new Set();

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
      script.onerror = () => reject(new Error(`Failed to load data manifest: ${src}`));
      document.head.appendChild(script);
    });
  }

  window.AppDataLoader = {
    async init(nativeLanguageCode) {
      const nativeLanguage = nativeLanguageCode;
      const targetLanguage = window.AppLanguageContext?.getTargetLanguage?.() || "de";
      const entry = window.AppLanguageRegistry.get(nativeLanguage);
      if (!entry) {
        return {
          nativeLanguage: window.AppLanguageRegistry.defaultCode,
          targetLanguage,
          fallback: true
        };
      }

      const dataCode = entry.hasStudyData ? entry.code : window.AppLanguageRegistry.defaultCode;
      const manifestPath = window.AppLanguageRegistry.get(dataCode)?.dataManifestPath;

      if (manifestPath && !loadedManifests.has(manifestPath)) {
        await loadScript(manifestPath);
        loadedManifests.add(manifestPath);
      }

      return {
        nativeLanguage,
        targetLanguage,
        dataNativeLanguage: dataCode,
        requestedNativeLanguage: nativeLanguage,
        fallback: dataCode !== nativeLanguage,
        manifest: window.LANGUAGE_DATA_MANIFEST || null
      };
    },
    getManifest() {
      return window.LANGUAGE_DATA_MANIFEST || null;
    },
    getTargetLanguage() {
      return window.AppLanguageContext?.getTargetLanguage?.() || "de";
    }
  };
})();

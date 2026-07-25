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
    async init(code) {
      const entry = window.AppLanguageRegistry.get(code);
      if (!entry) {
        return { code: window.AppLanguageRegistry.defaultCode, fallback: true };
      }

      const dataCode = entry.hasStudyData ? entry.code : window.AppLanguageRegistry.defaultCode;
      const manifestPath = window.AppLanguageRegistry.get(dataCode)?.dataManifestPath;

      if (manifestPath && !loadedManifests.has(manifestPath)) {
        await loadScript(manifestPath);
        loadedManifests.add(manifestPath);
      }

      return {
        code: dataCode,
        requestedCode: code,
        fallback: dataCode !== code,
        manifest: window.LANGUAGE_DATA_MANIFEST || null
      };
    },
    getManifest() {
      return window.LANGUAGE_DATA_MANIFEST || null;
    }
  };
})();

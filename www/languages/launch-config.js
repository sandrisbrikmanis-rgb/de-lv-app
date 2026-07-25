(function () {
  /**
   * Testēšanas režīms: true = pēc Splash vienmēr rāda valodas izvēli (ignorē saglabāto appLanguage).
   * Produkcijai iestatīt uz false.
   */
  const FORCE_LANGUAGE_SELECTION = false;

  window.AppLaunchConfig = {
    FORCE_LANGUAGE_SELECTION
  };
})();

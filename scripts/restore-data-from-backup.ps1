$ErrorActionPreference = "Stop"
$src = "C:\Users\sandr\OneDrive\Documents\Codex Backups\07,06,2026_STRADAJOSA\DE-LV-App_MAIN\data"
$dst = Join-Path (Split-Path -Parent $PSScriptRoot) "data"
$files = @("a1.js", "a2.js", "b1.js", "b2.js", "c1.js", "c2.js", "comparisonStudy.js", "sentences.js", "verbs.js", "courseLessons.js")

foreach ($f in $files) {
  Copy-Item (Join-Path $src $f) (Join-Path $dst $f) -Force
  Write-Output "Copied $f"
}

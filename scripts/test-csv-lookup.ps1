$ErrorActionPreference = "Stop"
$csvPath = Join-Path $PSScriptRoot "german-nouns-lookup.csv"
Write-Output "Loading CSV..."
$csv = Import-Csv $csvPath
$tests = @("Apfel", "Schwangerschaftstest", "See", "Leiter", "Stadt", "Kurbad")
foreach ($t in $tests) {
  $rows = @($csv | Where-Object { $_.lemma -eq $t -and $_.pos -match "Substantiv" })
  Write-Output "=== $t count=$($rows.Count) ==="
  foreach ($r in ($rows | Select-Object -First 3)) {
    Write-Output "  genus=$($r.genus) plural=$($r.'nominativ plural')"
  }
}

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
foreach ($f in @("b2", "c1", "c2")) {
  $path = Join-Path $root "data/$f.js"
  $code = [IO.File]::ReadAllText($path)
  if ($code -match 'const \w+ = (\[[\s\S]*\]);') {
    try {
      $arr = $Matches[1] | ConvertFrom-Json
      Write-Output "$f.js: OK count=$($arr.Count)"
    } catch {
      Write-Output "$f.js: FAIL $($_.Exception.Message)"
      exit 1
    }
  }
}

# Line-level noun extraction (no JSON parse).
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$targets = @("data/a1.js","data/a2.js","data/b1.js","data/b2.js","data/c1.js","data/c2.js","data/comparisonStudy.js")
$pattern = '^\s{4}"de":\s*"(?<art>der|die|das)\s+(?<noun>[^"]+)"'

$nouns = @{}
$conflicts = @()

foreach ($rel in $targets) {
  $path = Join-Path $root $rel
  if (-not (Test-Path $path)) { continue }
  foreach ($line in [System.IO.File]::ReadAllLines($path, [System.Text.Encoding]::UTF8)) {
    if ($line -notmatch $pattern) { continue }
    $art = $Matches['art'].ToLowerInvariant()
    $noun = $Matches['noun'].Trim()
    $key = $noun.ToLowerInvariant()
    if (-not $nouns.ContainsKey($key)) {
      $nouns[$key] = @{ noun = $noun; article = $art }
    } elseif ($nouns[$key].article -ne $art) {
      $conflicts += "$noun : $($nouns[$key].article) vs $art"
    }
  }
}

Write-Output "Unique nouns: $($nouns.Count)"
Write-Output "Article conflicts: $($conflicts.Count)"
$conflicts | Select-Object -First 20 | ForEach-Object { Write-Output "  $_" }

$rows = foreach ($k in ($nouns.Keys | Sort-Object)) {
  [pscustomobject]@{ noun = $nouns[$k].noun; article = $nouns[$k].article }
}
$out = Join-Path $PSScriptRoot "extracted-nouns.json"
$rows | ConvertTo-Json -Depth 3 | Set-Content $out -Encoding UTF8
Write-Output "Saved $out"

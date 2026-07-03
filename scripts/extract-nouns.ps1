# Extract unique German nouns from data files for lookup generation.
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$targets = @("data/a1.js","data/a2.js","data/b1.js","data/b2.js","data/c1.js","data/c2.js","data/comparisonStudy.js")

function Repair-Json([string]$Json) {
  $prev = $null
  while ($prev -ne $Json) { $prev = $Json; $Json = $Json -replace ',(\s*[\]}])', '$1' }
  return $Json
}
function Extract-TopLevelArray([string]$Code) {
  $start = $Code.IndexOf('[')
  $depth = 0; $inString = $false; $escape = $false
  for ($i = $start; $i -lt $Code.Length; $i++) {
    $ch = $Code[$i]
    if ($inString) {
      if ($escape) { $escape = $false; continue }
      if ($ch -eq '\') { $escape = $true; continue }
      if ($ch -eq '"') { $inString = $false }; continue
    }
    if ($ch -eq '"') { $inString = $true; continue }
    if ($ch -eq '[') { $depth++ } elseif ($ch -eq ']') { $depth--; if ($depth -eq 0) { return $Code.Substring($start, $i - $start + 1) } }
  }
  throw "Unterminated array"
}

$nouns = @{}
foreach ($rel in $targets) {
  $code = [System.IO.File]::ReadAllText((Join-Path $root $rel), [System.Text.Encoding]::UTF8)
  $entries = @((Repair-Json (Extract-TopLevelArray $code)) | ConvertFrom-Json)
  foreach ($e in $entries) {
    $de = [string]$e.de
    if ($de -match '^(?i)(der|die|das)\s+(.+)$') {
      $art = $Matches[1].ToLowerInvariant()
      $noun = $Matches[2].Trim()
      $key = $noun.ToLowerInvariant()
      if (-not $nouns.ContainsKey($key)) {
        $nouns[$key] = [pscustomobject]@{ noun = $noun; article = $art; count = 1 }
      } else {
        $nouns[$key].count++
        if ($nouns[$key].article -ne $art) {
          Write-Output "CONFLICT: $noun => $($nouns[$key].article) vs $art"
        }
      }
    }
  }
}
Write-Output "Unique nouns: $($nouns.Count)"
$out = Join-Path $PSScriptRoot "extracted-nouns.json"
$nouns.Values | Sort-Object noun | ConvertTo-Json -Depth 3 | Set-Content $out -Encoding UTF8
Write-Output "Saved: $out"

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot

function Test-JsArrayFile([string]$RelativePath) {
  $path = Join-Path $root $RelativePath
  $code = [IO.File]::ReadAllText($path)
  $start = $code.IndexOf('[')
  $depth = 0; $inS = $false; $esc = $false; $ok = $true
  for ($i = $start; $i -lt $code.Length; $i++) {
    $ch = $code[$i]
    if ($inS) {
      if ($esc) { $esc = $false; continue }
      if ($ch -eq '\') { $esc = $true; continue }
      if ($ch -eq '"') { $inS = $false }
      continue
    }
    if ($ch -eq '"') { $inS = $true; continue }
    if ($ch -eq '[' -or $ch -eq '{') { $depth++ }
    elseif ($ch -eq ']' -or $ch -eq '}') {
      $depth--
      if ($depth -lt 0) { $ok = $false; break }
      if ($ch -eq ']' -and $depth -eq 0) { break }
    }
  }
  $topDe = ([regex]::Matches($code, '(?m)^    "de":')).Count
  if (-not $ok -or $depth -ne 0) {
    Write-Host "$RelativePath : BRACKET FAIL depth=$depth"
    return $false
  }
  Write-Host "$RelativePath : BRACKETS OK top-level-words=$topDe"
  return $true
}

$allOk = $true
foreach ($f in @("data/b2.js", "data/c1.js", "data/c2.js")) {
  if (-not (Test-JsArrayFile $f)) { $allOk = $false }
}
if (-not $allOk) { exit 1 }

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$filePath = Join-Path $root "data/a2.js"
$code = [IO.File]::ReadAllText($filePath)
if ($code -notmatch 'const\s+(\w+)\s*=') { throw "no var" }
$varName = $Matches[1]

function Repair-Json([string]$Json) {
  $prev = $null
  while ($prev -ne $Json) {
    $prev = $Json
    $Json = $Json -replace ',(\s*[\]}])', '$1'
  }
  return $Json
}

$start = $code.IndexOf('[')
$depth = 0; $inS = $false; $esc = $false
for ($i = $start; $i -lt $code.Length; $i++) {
  $ch = $code[$i]
  if ($inS) {
    if ($esc) { $esc = $false; continue }
    if ($ch -eq '\') { $esc = $true; continue }
    if ($ch -eq '"') { $inS = $false }
    continue
  }
  if ($ch -eq '"') { $inS = $true; continue }
  if ($ch -eq '[') { $depth++ }
  elseif ($ch -eq ']') {
    $depth--
    if ($depth -eq 0) {
      $json = $code.Substring($start, $i - $start + 1)
      $end = $i + 1
      break
    }
  }
}

$fixed = Repair-Json $json
$before = ([regex]::Matches($json, ',\s*([\]}])')).Count
$after = ([regex]::Matches($fixed, ',\s*([\]}])')).Count
Write-Output "Trailing commas before=$before after=$after"

try {
  $null = $fixed | ConvertFrom-Json
  Write-Output "JSON parse: OK"
} catch {
  Write-Output "JSON parse still fails: $($_.Exception.Message)"
  exit 1
}

$newCode = $code.Substring(0, $start) + $fixed + $code.Substring($end)
$utf8 = New-Object System.Text.UTF8Encoding $false
[IO.File]::WriteAllText($filePath, $newCode, $utf8)
Write-Output "Saved $filePath"

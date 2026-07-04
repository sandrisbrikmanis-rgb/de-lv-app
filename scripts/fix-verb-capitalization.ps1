$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$targets = @("data/a1.js", "data/a2.js", "data/b1.js", "data/b2.js", "data/c1.js", "data/c2.js", "data/comparisonStudy.js")

$dePattern = '^(?<indent>\s{4})"de":\s*"(?<value>[^"]+)"\s*,?\s*$'
$articlePattern = '^\s{4}"de_article":'
$nounInDePattern = '^(?i)(der|die|das)\s+'

$grandFixed = 0
foreach ($rel in $targets) {
  $filePath = Join-Path $root $rel
  if (-not (Test-Path $filePath)) { continue }
  $lines = [System.IO.File]::ReadAllLines($filePath, [System.Text.Encoding]::UTF8)
  $inCard = $false
  $hasArticle = $false
  $deLineIdx = -1
  $fileFixed = 0

  for ($i = 0; $i -lt $lines.Count; $i++) {
    $line = $lines[$i]
    if ($line -match '^\s*\{\s*$') {
      $inCard = $true
      $hasArticle = $false
      $deLineIdx = -1
      continue
    }
    if (-not $inCard) { continue }
    if ($line -match $articlePattern) { $hasArticle = $true; continue }
    if ($line -match $dePattern) {
      $deLineIdx = $i
      continue
    }
    if ($line -match '^\s*\}\s*,?\s*$') {
      if ($deLineIdx -ge 0 -and -not $hasArticle) {
        $m = [regex]::Match($lines[$deLineIdx], $dePattern)
        if ($m.Success) {
          $value = $m.Groups['value'].Value
          if ($value -match $nounInDePattern) { $hasArticle = $true }
          elseif ($value.Length -gt 0 -and [char]::IsUpper($value[0])) {
            $lower = $value.Substring(0, 1).ToLowerInvariant() + $value.Substring(1)
            $indent = $m.Groups['indent'].Value
            $lines[$deLineIdx] = "${indent}`"de`": `"$lower`","
            $fileFixed++
            $grandFixed++
          }
        }
      }
      $inCard = $false
      $hasArticle = $false
      $deLineIdx = -1
    }
  }

  if ($fileFixed -gt 0) {
    $utf8 = New-Object System.Text.UTF8Encoding $false
    [System.IO.File]::WriteAllLines($filePath, $lines, $utf8)
    Write-Output "$rel : $fileFixed verb(s) lowercased"
  }
}

Write-Output "Verb capitalization fixes total: $grandFixed"

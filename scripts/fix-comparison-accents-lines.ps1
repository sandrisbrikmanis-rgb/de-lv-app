$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot

$targets = @("data/a1.js", "data/a2.js", "data/b1.js")

function Process-File([string]$RelativePath) {
  $filePath = Join-Path $root $RelativePath
  $lines = [IO.File]::ReadAllLines($filePath)
  $result = New-Object System.Collections.Generic.List[string]
  $inComparisonAccents = $false
  $comparisonDepth = 0
  $currentField = $null
  $fixed = 0

  foreach ($line in $lines) {
    $newLine = $line

    if (-not $inComparisonAccents -and $line -match '^\s+"comparison":\s*\[') {
      $ctx = ($result | Select-Object -Last 8) -join "`n"
      if ($ctx -match 'sectionAccents') {
        $inComparisonAccents = $true
        $comparisonDepth = 1
      }
    }

    if ($inComparisonAccents) {
      $comparisonDepth += ([regex]::Matches($line, '\{')).Count
      $comparisonDepth -= ([regex]::Matches($line, '\}')).Count

      if ($line -match '^\s+"(word|meaning|example)":\s*\{') {
        $currentField = $Matches[1]
      }
        $inComparisonAccents = $false
        $currentField = $null
      }
    }

    [void]$result.Add($newLine)
  }

  if ($fixed -gt 0) {
    $utf8 = New-Object System.Text.UTF8Encoding $false
    [IO.File]::WriteAllLines($filePath, $result.ToArray(), $utf8)
  }
  return $fixed
}

$total = 0
foreach ($t in $targets) {
  $n = Process-File $t
  Write-Output "$t : comparisonAccentLines=$n"
  $total += $n
}
Write-Output "Total: $total"

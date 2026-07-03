$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$bullet = [string][char]0x2022

$targets = @(
  "data/a1.js", "data/a2.js", "data/b1.js", "data/b2.js", "data/c1.js", "data/c2.js", "data/comparisonStudy.js"
)

function Replace-ListSemicolons([string]$Value) {
  if ([string]::IsNullOrWhiteSpace($Value) -or $Value -notmatch ';') { return $Value }
  return ($Value -replace ';\s*', " $bullet ").Trim()
}

function Process-File([string]$RelativePath) {
  $filePath = Join-Path $root $RelativePath
  $lines = [System.Collections.Generic.List[string]]::new()
  $lines.AddRange([string[]][System.IO.File]::ReadAllLines($filePath))

  $stats = @{
    semicolons = 0
    dupAccents = 0
    trailingCommas = 0
    comparisonRemoved = 0
    greenPurple = 0
  }

  $level = if ($RelativePath -match '/([abc][12])\.js') { $Matches[1].ToUpper() } else { "" }
  $stripComparison = $level -in @("B2", "C1", "C2")
  $isComparisonStudy = $RelativePath -like "*comparisonStudy*"

  $inSectionAccents = $false
  $sectionDepth = 0
  $inAccentsLegacy = $false
  $accentsDepth = 0
  $accentsKeys = @{}
  $inComparisonData = $false
  $comparisonDepth = 0
  $inComparisonAccents = $false
  $comparisonAccentsDepth = 0
  $currentField = $null
  $inProse = $false

  $skipUntilDepth = -1
  $skipDepth = 0

  $result = New-Object System.Collections.Generic.List[string]

  for ($i = 0; $i -lt $lines.Count; $i++) {
    $line = $lines[$i]

    if ($skipUntilDepth -ge 0) {
      $skipDepth += ([regex]::Matches($line, '\{')).Count
      $skipDepth -= ([regex]::Matches($line, '\}')).Count
      if ($skipDepth -le 0) { $skipUntilDepth = -1; $skipDepth = 0 }
      $stats.comparisonRemoved++
      continue
    }

  # Track sectionAccents
    if (-not $inSectionAccents -and $line -match '"?sectionAccents"?:\s*\{') {
      $inSectionAccents = $true
      $sectionDepth = ([regex]::Matches($line, '\{')).Count - ([regex]::Matches($line, '\}')).Count
      if ($line -match '"accents":\s*\{') {
        $inAccentsLegacy = $true
        $accentsDepth = $sectionDepth
        $accentsKeys = @{}
      }
    } elseif ($inSectionAccents) {
      $sectionDepth += ([regex]::Matches($line, '\{')).Count
      $sectionDepth -= ([regex]::Matches($line, '\}')).Count
      if ($sectionDepth -le 0) {
        $inSectionAccents = $false
        $inAccentsLegacy = $false
        $inComparisonAccents = $false
        $accentsKeys = @{}
      }
    }

    if ($inAccentsLegacy -and $line -match '^\s+"([^"]+)":\s*"#[0-9A-Fa-f]+",?\s*$') {
      $key = $Matches[1]
      $lower = $key.ToLowerInvariant()
      if ($accentsKeys.ContainsKey($lower)) {
        $stats.dupAccents++
        continue
      }
      $accentsKeys[$lower] = $key
    }

    if ($inSectionAccents -and $line -match '^\s+"?comparison"?:\s*\[') {
      $inComparisonAccents = $true
      $comparisonAccentsDepth = 1
      $currentField = $null
    }

    if ($inComparisonAccents) {
      $comparisonAccentsDepth += ([regex]::Matches($line, '\[')).Count
      $comparisonAccentsDepth -= ([regex]::Matches($line, '\]')).Count
      if ($line -match '^\s+"(word|meaning|example)":\s*\{') {
        $currentField = $Matches[1]
      }
      if ($comparisonAccentsDepth -le 0) {
        $inComparisonAccents = $false
        $currentField = $null
      }
    }

    # Remove comparison data blocks from b2/c1/c2 (only outside sectionAccents)
    if ($stripComparison -and -not $inSectionAccents -and $line -match '^\s+"comparison":\s*\[') {
      $skipUntilDepth = 0
      $skipDepth = ([regex]::Matches($line, '\[')).Count - ([regex]::Matches($line, '\]')).Count
      if ($skipDepth -le 0) { $skipDepth = 1 }
      $stats.comparisonRemoved++
      continue
    }

    if ($stripComparison -and -not $inSectionAccents -and $line -match '^\s+"comparison":\s*\{') {
      $skipUntilDepth = 0
      $skipDepth = ([regex]::Matches($line, '\{')).Count - ([regex]::Matches($line, '\}')).Count
      if ($skipDepth -le 0) { $skipDepth = 1 }
      $stats.comparisonRemoved++
      continue
    }

    # Skip prose fields for semicolon replacement
    if ($line -match '"(text|lead|explanation|description|example)":\s*"') {
      $inProse = $true
    }

    $newLine = $line

    if (-not $inProse) {
      if ($line -match '^\s{2,8}"lv":\s*"([^"]*)"') {
        $val = $Matches[1]
        if ($val -match ';') {
          $fixed = Replace-ListSemicolons $val
          $newLine = $line -replace [regex]::Escape('"lv": "' + $val + '"'), ('"lv": "' + $fixed + '"')
          $stats.semicolons++
        }
      }
      if ($line -match '"(translation|title|subtitle)":\s*"([^"]*)"') {
        $key = $Matches[1]; $val = $Matches[2]
        if ($val -match ';') {
          $fixed = Replace-ListSemicolons $val
          $newLine = $line -replace [regex]::Escape('"' + $key + '": "' + $val + '"'), ('"' + $key + '": "' + $fixed + '"')
          $stats.semicolons++
        }
      }
    }
    $inProse = $false

    # Fix trailing commas before ] or }
    if ($newLine -match ',\s*(\]|\})') {
      $testLine = $newLine -replace ',(\s*[\]}])', '$1'
      if ($testLine -ne $newLine) {
        $newLine = $testLine
        $stats.trailingCommas++
      }
    }

    if ($inComparisonAccents -and $currentField -eq 'word' -and $newLine -match '"(blue|yellow|red|orange|green)"') {
      $old = $newLine
      $newLine = $newLine -replace '"(blue|yellow|red|orange|green)"', '"green"'
      if ($newLine -ne $old) { $stats.greenPurple++ }
    }
    if ($inComparisonAccents -and $currentField -eq 'meaning' -and $newLine -match '"(blue|yellow|red|orange|green)"') {
      $old = $newLine
      $newLine = $newLine -replace '"(blue|yellow|red|orange|green)"', '"purple"'
      if ($newLine -ne $old) { $stats.greenPurple++ }
    }

    if ($isComparisonStudy -and $inSectionAccents -and $newLine -match '(de|example):\s*\{\s*(blue|yellow|red|orange)') {
      $newLine = $line -replace '(de|example):\s*\{\s*(blue|yellow|red|orange)', '${1}: { green'
      if ($newLine -ne $line) { $stats.greenPurple++ }
    }
    if ($isComparisonStudy -and $inSectionAccents -and $newLine -match '(lv|meaning|translation|describes):\s*\{\s*(blue|yellow|red|orange|green)') {
      $old = $newLine
      $newLine = $newLine -replace '(lv|meaning|translation|describes):\s*\{\s*(blue|yellow|red|orange|green)', '${1}: { purple'
      if ($newLine -ne $old) { $stats.greenPurple++ }
    }

    if ($isComparisonStudy -and $inSectionAccents -and $newLine -match '^\s+"(blue|yellow|red|orange)":\s*\[') {
      if ($i -gt 0 -and ($lines[$i-1] -match '"(de|example)":\s*\{' -or $lines[$i-2] -match '"(de|example)":\s*\{')) {
        $newLine = $line -replace '"(blue|yellow|red|orange)"', '"green"'
        $stats.greenPurple++
      }
      if ($i -gt 0 -and ($lines[$i-1] -match '"(lv|meaning|translation|describes)":\s*\{' -or $lines[$i-2] -match '"(lv|meaning|translation|describes)":\s*\{')) {
        $newLine = $line -replace '"(blue|yellow|red|orange|green)"', '"purple"'
        $stats.greenPurple++
      }
    }

    [void]$result.Add($newLine)
  }

  if ($result.Count -ne $lines.Count -or ($stats.Values | Measure-Object -Sum).Sum -gt 0) {
    $utf8 = New-Object System.Text.UTF8Encoding $false
    [System.IO.File]::WriteAllLines($filePath, $result.ToArray(), $utf8)
  }

  return $stats
}

$grand = @{ semicolons = 0; dupAccents = 0; trailingCommas = 0; comparisonRemoved = 0; greenPurple = 0 }
foreach ($target in $targets) {
  $s = Process-File $target
  Write-Output "$target : semicolons=$($s.semicolons) dupAccents=$($s.dupAccents) trailingCommas=$($s.trailingCommas) comparisonRemoved=$($s.comparisonRemoved) greenPurple=$($s.greenPurple)"
  $grand.semicolons += $s.semicolons
  $grand.dupAccents += $s.dupAccents
  $grand.trailingCommas += $s.trailingCommas
  $grand.comparisonRemoved += $s.comparisonRemoved
  $grand.greenPurple += $s.greenPurple
}

Write-Output ""
Write-Output "=== BUILD! Line polish complete ==="
Write-Output "Total: semicolons=$($grand.semicolons) dupAccents=$($grand.dupAccents) trailingCommas=$($grand.trailingCommas) comparisonRemoved=$($grand.comparisonRemoved) greenPurple=$($grand.greenPurple)"

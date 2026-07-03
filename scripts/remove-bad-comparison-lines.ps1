$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$targets = @("data/a1.js", "data/a2.js", "data/b1.js")

function Test-BadComparisonBlock($blockLines) {
  $text = $blockLines -join "`n"
  $examples = [regex]::Matches($text, '"example":\s*"([^"]*)"')
  if ($examples.Count -eq 0) { return $false }

  $badCount = 0
  $words = [regex]::Matches($text, '"word":\s*"([^"]*)"') | ForEach-Object { $_.Groups[1].Value.ToLowerInvariant() }
  $dup = ($words | Group-Object | Where-Object { $_.Count -gt 1 }).Count -gt 0

  foreach ($m in $examples) {
    $ex = $m.Groups[1].Value
    $dePart = if ($ex -match '=') { ($ex -split '=', 2)[0].Trim() } else { $ex.Trim() }
    if ($dePart -notmatch '\.' -and ($dePart -split '\s+').Count -le 3) { $badCount++ }
  }

  if ($dup) { return $true }
  if ($badCount -ge [Math]::Max(1, [int]($examples.Count * 0.5))) { return $true }

  if ($words.Count -ge 3) {
    $prefixes = @($words | ForEach-Object {
      if ($_ -match '^(ab|an|auf|aus|bei|ein|mit|nach|vor|zu|zer|wider|durch|uber|unter|hinter|neben|gegen|um|weg)') { $Matches[1] }
    } | Where-Object { $_ })
    if ($prefixes.Count -ge 2) {
      $top = ($prefixes | Group-Object | Sort-Object Count -Descending | Select-Object -First 1)
      if ($top.Count -ge [Math]::Ceiling($words.Count * 0.6)) { return $true }
    }
  }
  return $false
}

function Process-File([string]$RelativePath) {
  $filePath = Join-Path $root $RelativePath
  $lines = [System.Collections.Generic.List[string]]::new()
  $lines.AddRange([string[]][IO.File]::ReadAllLines($filePath))
  $removed = 0
  $i = 0

  while ($i -lt $lines.Count) {
    if ($lines[$i] -match '^\s+"comparison":\s*\[') {
      $start = $i
      $depth = 1
      $j = $i + 1
      while ($j -lt $lines.Count -and $depth -gt 0) {
        $depth += ([regex]::Matches($lines[$j], '\[')).Count
        $depth -= ([regex]::Matches($lines[$j], '\]')).Count
        $j++
      }
      $block = @($lines.GetRange($start, $j - $start))
      $ctxStart = [Math]::Max(0, $start - 30)
      $ctx = ($lines.GetRange($ctxStart, $start - $ctxStart) -join "`n")

      if ($ctx -notmatch 'sectionAccents' -and (Test-BadComparisonBlock $block)) {
        for ($k = $j - 1; $k -ge $start; $k--) { $lines.RemoveAt($k) }
        if ($start -lt $lines.Count -and $lines[$start] -match '^\s*,\s*$') { $lines.RemoveAt($start) }
        $removed++
        continue
      }
      $i = $j
      continue
    }
    $i++
  }

  if ($removed -gt 0) {
    $utf8 = New-Object System.Text.UTF8Encoding $false
    [IO.File]::WriteAllLines($filePath, $lines.ToArray(), $utf8)
  }
  return $removed
}

$total = 0
foreach ($t in $targets) {
  $n = Process-File $t
  Write-Output "$t : badComparisonBlocksRemoved=$n"
  $total += $n
}
Write-Output "Total removed: $total"

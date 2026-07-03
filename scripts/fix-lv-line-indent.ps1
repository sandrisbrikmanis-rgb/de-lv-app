# Repair lv lines broken by line-wrap: unindented "lv" key and missing trailing comma.
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot

function Fix-LvIndent([string]$FilePath) {
  $lines = [System.IO.File]::ReadAllLines($FilePath, [System.Text.Encoding]::UTF8)
  $fixed = 0
  $result = New-Object System.Collections.Generic.List[string]

  foreach ($line in $lines) {
    if ($line -match '^"lv":\s*"(.*)"\s*$') {
      [void]$result.Add('    "lv": "' + $Matches[1] + '",')
      $fixed++
    } else {
      [void]$result.Add($line)
    }
  }

  if ($fixed -gt 0) {
    $utf8 = New-Object System.Text.UTF8Encoding $false
    [System.IO.File]::WriteAllLines($FilePath, $result.ToArray(), $utf8)
  }
  return $fixed
}

function Fix-StudyBlockClose([string]$FilePath) {
  $text = [System.IO.File]::ReadAllText($FilePath, [System.Text.Encoding]::UTF8)
  $pattern = '(?m)(      \],\r?\n  \},\r?\n)(  \{\r?\n    "de":)'
  $count = ([regex]::Matches($text, $pattern)).Count
  if ($count -gt 0) {
    $fixed = [regex]::Replace($text, $pattern, "`$1  },`r`n`$2")
    $utf8 = New-Object System.Text.UTF8Encoding $false
    [System.IO.File]::WriteAllText($FilePath, $fixed, $utf8)
  }
  return $count
}

function Remove-OrphanOpenBraces([string]$FilePath) {
  $lines = [System.IO.File]::ReadAllLines($FilePath, [System.Text.Encoding]::UTF8)
  $result = New-Object System.Collections.Generic.List[string]
  $removed = 0

  for ($i = 0; $i -lt $lines.Count; $i++) {
    $line = $lines[$i]
    if ($line -match '^\s*\{\s*$' -and $result.Count -gt 0 -and $result[$result.Count - 1] -match '^\s*\{\s*$') {
      $removed++
      continue
    }
    [void]$result.Add($line)
  }

  if ($removed -gt 0) {
    $utf8 = New-Object System.Text.UTF8Encoding $false
    [System.IO.File]::WriteAllLines($FilePath, $result.ToArray(), $utf8)
  }
  return $removed
}

function Remove-DuplicateDeBlocks([string]$FilePath) {
  $lines = [System.IO.File]::ReadAllLines($FilePath, [System.Text.Encoding]::UTF8)
  $seen = @{}
  $result = New-Object System.Collections.Generic.List[string]
  $removed = 0
  $i = 0

  while ($i -lt $lines.Count) {
    $line = $lines[$i]
    if ($line -match '^\s*\{\s*$' -and ($i + 1) -lt $lines.Count -and $lines[$i + 1] -match '^\s+"de":\s*"([^"]+)"') {
      $de = $Matches[1]
      $blockStart = $i
      $depth = 0
      $j = $i
      while ($j -lt $lines.Count) {
        $depth += ([regex]::Matches($lines[$j], '\{')).Count
        $depth -= ([regex]::Matches($lines[$j], '\}')).Count
        if ($depth -le 0 -and $lines[$j] -match '\}') { break }
        $j++
      }

      if ($seen.ContainsKey($de)) {
        $removed++
        $i = $j + 1
        if ($i -lt $lines.Count -and $lines[$i] -match '^\s*,\s*$') { $i++ }
        continue
      }

      $seen[$de] = $true
      for ($k = $blockStart; $k -le $j; $k++) { [void]$result.Add($lines[$k]) }
      $i = $j + 1
      continue
    }

    [void]$result.Add($line)
    $i++
  }

  if ($removed -gt 0) {
    $utf8 = New-Object System.Text.UTF8Encoding $false
    [System.IO.File]::WriteAllLines($FilePath, $result.ToArray(), $utf8)
  }
  return $removed
}

$grandIndent = 0
$grandDup = 0
$grandOrphan = 0
$grandStudy = 0
foreach ($rel in @("data/b2.js", "data/c1.js", "data/c2.js")) {
  $path = Join-Path $root $rel
  $indent = Fix-LvIndent $path
  $dup = Remove-DuplicateDeBlocks $path
  $orphan = Remove-OrphanOpenBraces $path
  $study = Fix-StudyBlockClose $path
  $grandIndent += $indent
  $grandDup += $dup
  $grandOrphan += $orphan
  $grandStudy += $study
  Write-Output "$rel : lv-indent-fixed=$indent duplicate-de-removed=$dup orphan-braces-removed=$orphan study-close-fixed=$study"
}

Write-Output ""
Write-Output "=== LV line indent repair complete ==="
Write-Output "Total: indentFixed=$grandIndent duplicateRemoved=$grandDup orphanBracesRemoved=$grandOrphan studyCloseFixed=$grandStudy"

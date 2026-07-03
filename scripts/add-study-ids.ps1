param(
  [Parameter(Mandatory = $true, ValueFromRemainingArguments = $true)]
  [string[]]$Files,
  [switch]$DryRun
)

$root = Split-Path -Parent $PSScriptRoot

function Get-Slug([string]$De) {
  $slug = $De -replace '^(?i)(der|die|das)\s+', ''
  $slug = $slug.ToLowerInvariant()
  $slug = $slug -replace '\s+', '-'
  $slug = $slug -replace '[^\p{L}\p{Nd}\-]+', ''
  return $slug
}

function Get-UniqueStudyId([string]$Level, [string]$De, [System.Collections.Generic.HashSet[string]]$UsedIds) {
  $prefix = $Level.ToLowerInvariant()
  $base = "$prefix-$(Get-Slug $De)"
  $id = $base
  $suffix = 2
  while ($UsedIds.Contains($id)) {
    $id = "$base-$suffix"
    $suffix++
  }
  [void]$UsedIds.Add($id)
  return $id
}

function Get-CardContext([string[]]$Lines, [int]$StudyIndex) {
  $de = $null
  $level = $null

  if ($StudyIndex -gt 0 -and $Lines[$StudyIndex - 1] -match '^\s*"level":\s*"([^"]+)"') {
    $level = $Matches[1]
  }

  for ($i = $StudyIndex - 2; $i -ge [Math]::Max(0, $StudyIndex - 12); $i--) {
    if ($Lines[$i] -match '^\s{2,6}"de":\s*"([^"]+)"') {
      $de = $Matches[1]
      break
    }
  }

  if (-not $level) {
    for ($i = $StudyIndex - 1; $i -ge [Math]::Max(0, $StudyIndex - 12); $i--) {
      if ($Lines[$i] -match '^\s*"level":\s*"([^"]+)"') {
        $level = $Matches[1]
        break
      }
    }
  }

  return @{ de = $de; level = $level }
}

function Get-StudyIndent([string]$StudyLine) {
  if ($StudyLine -match '^(\s*)"study":') {
    return $Matches[1] + '  '
  }
  return '      '
}

function Test-StudyHasField([string[]]$Lines, [int]$StartIndex, [string]$FieldName) {
  for ($i = $StartIndex + 1; $i -lt [Math]::Min($Lines.Count, $StartIndex + 8); $i++) {
    if ($Lines[$i] -match '^\s*\}') { break }
    if ($Lines[$i] -match ('^\s*"' + [regex]::Escape($FieldName) + '":')) {
      return $true
    }
  }
  return $false
}

function Process-File([string]$FilePath) {
  $lines = [System.Collections.Generic.List[string]]::new()
  $lines.AddRange([string[]][System.IO.File]::ReadAllLines($FilePath))
  $usedIds = [System.Collections.Generic.HashSet[string]]::new()
  $studyIndices = New-Object System.Collections.Generic.List[int]

  for ($i = 0; $i -lt $lines.Count; $i++) {
    if ($lines[$i] -match '^\s*"study":\s*\{') {
      $studyIndices.Add($i) | Out-Null
    }
  }

  $stats = @{
    idsAdded = 0
    layoutsAdded = 0
    skipped = 0
    ids = New-Object System.Collections.Generic.List[string]
  }

  for ($idx = $studyIndices.Count - 1; $idx -ge 0; $idx--) {
    $studyIndex = $studyIndices[$idx]
    $context = Get-CardContext $lines $studyIndex

    if (-not $context.de -or -not $context.level) {
      Write-Warning "Could not resolve card context near line $($studyIndex + 1) in $FilePath"
      $stats.skipped++
      continue
    }

    $indent = Get-StudyIndent $lines[$studyIndex]
    $hasId = Test-StudyHasField $lines $studyIndex 'id'
    $hasLayout = Test-StudyHasField $lines $studyIndex 'layout'
    $insertAt = $studyIndex + 1
    $toInsert = New-Object System.Collections.Generic.List[string]

    if (-not $hasId) {
      $id = Get-UniqueStudyId $context.level $context.de $usedIds
      $toInsert.Add(($indent + '"id": "' + $id + '",')) | Out-Null
      $stats.idsAdded++
      $stats.ids.Add($id) | Out-Null
    } else {
      if ($lines[$studyIndex + 1] -match '^\s*"id":\s*"([^"]+)"') {
        [void]$usedIds.Add($Matches[1])
        $stats.ids.Add($Matches[1]) | Out-Null
      }
    }

    if (-not $hasLayout) {
      $toInsert.Add(($indent + '"layout": "standardStudy",')) | Out-Null
      $stats.layoutsAdded++
    }

    if ($toInsert.Count -eq 0) {
      $stats.skipped++
      continue
    }

    if (-not $DryRun) {
      for ($j = $toInsert.Count - 1; $j -ge 0; $j--) {
        $lines.Insert($insertAt, $toInsert[$j])
      }
    }
  }

  if (-not $DryRun -and ($stats.idsAdded -gt 0 -or $stats.layoutsAdded -gt 0)) {
    $utf8 = New-Object System.Text.UTF8Encoding $false
    [System.IO.File]::WriteAllLines($FilePath, $lines, $utf8)
  }

  return $stats
}

$grand = @{ ids = 0; layouts = 0; skipped = 0 }
foreach ($target in $Files) {
  $filePath = if ([System.IO.Path]::IsPathRooted($target)) { $target } else { Join-Path $root $target }
  $stats = Process-File $filePath
  $relative = $filePath.Substring($root.Length).TrimStart('\', '/')
  $mode = if ($DryRun) { 'DRY-RUN' } else { 'APPLIED' }
  Write-Output "$mode $relative : $($stats.idsAdded) id(s), $($stats.layoutsAdded) layout(s), $($stats.skipped) skipped"
  foreach ($id in $stats.ids) {
    Write-Output "  $id"
  }
  $grand.ids += $stats.idsAdded
  $grand.layouts += $stats.layoutsAdded
  $grand.skipped += $stats.skipped
}

Write-Output "Total: $($grand.ids) id(s), $($grand.layouts) layout(s), $($grand.skipped) skipped"

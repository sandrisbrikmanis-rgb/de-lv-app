param(
  [string[]]$Files = @('data/a1.js', 'data/a2.js', 'data/b1.js', 'data/b2.js'),
  [switch]$PrepConjOnly
)

$root = Split-Path -Parent $PSScriptRoot
$prepConjPattern = '^(?i)(an|ab|auf|aus|bei|bis|mit|nach|von|vor|zu|über|unter|um|durch|für|gegen|ohne|wider|hinter|neben|zwischen|wegen|trotz|statt|während|seit|als|wenn|weil|dass|aber|und|oder|denn|sondern|ob|doch|damit|dass|indem|bevor|nachdem|obwohl|während|sobald|bis|seit|von|zu|da|dann|also|deshalb|deswegen|darum|trotzdem|jedoch|außerdem|sowie|sowohl|weder|entweder|je|desto|umso)$'

function Test-PrepOrConj([string]$De) {
  $word = ($De -replace '^(?i)(der|die|das)\s+', '').Trim()
  if ($word -match '\s') { return $false }
  return $word -match $prepConjPattern
}

function Audit-File([string]$FilePath) {
  $lines = [System.IO.File]::ReadAllLines($FilePath)
  $results = @()
  $i = 0
  while ($i -lt $lines.Count) {
    if ($lines[$i] -match '^\s{2,6}"de":\s*"([^"]+)"') {
      $de = $Matches[1]
      $level = $null
      $hasStudy = $false
      $j = $i + 1
      while ($j -lt [Math]::Min($lines.Count, $i + 12)) {
        if ($lines[$j] -match '^\s*"level":\s*"([^"]+)"') { $level = $Matches[1] }
        if ($lines[$j] -match '^\s*"study":\s*\{') { $hasStudy = $true; break }
        if ($lines[$j] -match '^\s*\},?\s*$' -and $j -gt $i + 1) { break }
        $j++
      }
      if (-not $hasStudy -and $level) {
        if (-not $PrepConjOnly -or (Test-PrepOrConj $de)) {
          $results += [pscustomobject]@{
            de = $de
            level = $level
            line = $i + 1
          }
        }
      }
    }
    $i++
  }
  return $results
}

$all = @()
foreach ($target in $Files) {
  $filePath = Join-Path $root $target
  if (-not (Test-Path $filePath)) { continue }
  $items = Audit-File $filePath
  Write-Output "=== $target : $($items.Count) bez study$(if ($PrepConjOnly) { ' (priev./saik.)' }) ==="
  foreach ($item in $items) {
    Write-Output ("  L{0,5} {1,-6} {2}" -f $item.line, $item.level, $item.de)
    $all += $item
  }
}

Write-Output "Total gaps: $($all.Count)"

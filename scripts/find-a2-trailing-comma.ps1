$root = Split-Path -Parent $PSScriptRoot
$code = [IO.File]::ReadAllText((Join-Path $root "data/a2.js"))
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
      break
    }
  }
}

$pos = 255536
$snippet = $json.Substring([Math]::Max(0, $pos - 120), [Math]::Min(240, $json.Length - [Math]::Max(0, $pos - 120)))
Write-Output "Snippet at $pos :"
Write-Output $snippet

# find all ,] and ,} patterns
$matches = [regex]::Matches($json, ',\s*([\]}])')
Write-Output "Trailing comma matches: $($matches.Count)"
foreach ($m in ($matches | Select-Object -First 10)) {
  $p = $m.Index
  Write-Output "  at $p : $($json.Substring([Math]::Max(0,$p-40), [Math]::Min(80,$json.Length-[Math]::Max(0,$p-40))))"
}

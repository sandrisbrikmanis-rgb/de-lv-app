$root = Split-Path -Parent $PSScriptRoot
$files = @('data/a1.js','data/a2.js','data/b1.js','data/b2.js','data/c1.js','data/c2.js','data/comparisonStudy.js')
foreach ($f in $files) {
  try {
    $code = [IO.File]::ReadAllText((Join-Path $root $f))
    $start = $code.IndexOf('[')
    $depth = 0; $inS = $false; $esc = $false; $json = $null
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
        if ($depth -eq 0) { $json = $code.Substring($start, $i - $start + 1); break }
      }
    }
    $null = $json | ConvertFrom-Json
    Write-Output "OK $f"
  } catch {
    Write-Output "FAIL $f : $($_.Exception.Message)"
  }
}
